const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');

const root = path.resolve(__dirname, '..');
const output = path.join(__dirname, 'fuentes-front-config-20261028');
const projects = fs.readdirSync(root).filter(name => name.endsWith('-front') && fs.statSync(path.join(root, name)).isDirectory()).sort();
const excludedDirectories = new Set(['.git', 'node_modules', 'dist', 'build', 'coverage', '.next', '.vite', '.idea', '.vscode', '.agents', '.codex', '.githooks', '.husky', 'agents', 'test', 'tests', '__tests__', '__mocks__', '__snapshots__', 'e2e', 'cypress', 'playwright-report', 'test-results']);
const textExtensions = new Set(['.ts', '.tsx', '.js', '.jsx', '.mjs', '.cjs', '.css', '.scss', '.sass', '.less', '.html', '.json', '.yaml', '.yml', '.xml', '.svg', '.conf', '.config', '.template', '.sh', '.ps1', '.properties', '.graphql', '.gql', '.patch', '.txt', '.csv']);
const excludedFile = /(?:\.(?:test|spec|stories)\.[^.]+$|^setupTests?\.|^(?:vitest|jest|playwright|cypress)\.config\.|\.tsbuildinfo$|\.timestamp-)|^(?:package-lock\.json|pnpm-lock\.yaml|yarn\.lock|npm-shrinkwrap\.json)$/i;

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    if (entry.isSymbolicLink()) return [];
    const filename = path.join(directory, entry.name);
    if (entry.isDirectory()) return excludedDirectories.has(entry.name.toLowerCase()) ? [] : walk(filename);
    return [filename];
  });
}

function selected(filename) {
  const name = path.basename(filename);
  if (excludedFile.test(name)) return false;
  return textExtensions.has(path.extname(name).toLowerCase()) || /^\.env(?:\..+)?$/.test(name) || /^(?:Dockerfile(?:\..*)?|Jenkinsfile|\.npmrc|npmrc|\.prettierrc|\.dockerignore|\.browserslistrc|README\.md)$/i.test(name);
}

// Preserve environment references and redact literal credentials in exported copies only.
function redact(source) {
  let count = 0;
  let result = source.replace(/-----BEGIN [^-]*PRIVATE KEY-----[\s\S]*?-----END [^-]*PRIVATE KEY-----/g, () => {
    count++;
    return '[REDACTED PRIVATE KEY]';
  });
  const sensitiveName = /(?:password|passwd|pwd|client[_-]?secret|api[_-]?key|private[_-]?key|access[_-]?key|access[_-]?token|refresh[_-]?token|auth[_-]?token|_authToken|_password|encryption[_-]?key|secret[_-]?key|^secret$)/i;
  result = result.split(/\r?\n/).map(line => {
    const assignment = line.match(/^(\s*(?:(?:export|const|let|var)\s+)?["']?([\w.-]+)["']?\s*[:=]\s*)(.*)$/);
    if (assignment && sensitiveName.test(assignment[2])) {
      const value = assignment[3].trim();
      const literal = value.match(/^(["'`])([\s\S]*?)\1([,;]?\s*(?:\/\/.*|#.*)?)$/);
      if (literal && literal[2] && !/\$\{|import\.meta\.env|process\.env/.test(literal[2]) && literal[2] !== '[REDACTED]') {
        count++;
        line = assignment[1] + literal[1] + '[REDACTED]' + literal[1] + literal[3];
      } else if (!literal && value && !/[;{}()]/.test(value) && !/^(?:null|undefined|true|false)$|\$\{|import\.meta\.env|process\.env/.test(value)) {
        count++;
        line = assignment[1] + '[REDACTED]';
      }
    }
    line = line.replace(/((?:_authToken|_password|_auth)\s*=\s*)([^\s]+)/gi, (match, prefix, value) => {
      if (value.includes('${') || value.includes('[REDACTED]')) return match;
      count++;
      return prefix + '[REDACTED]';
    });
    return line.replace(/([a-z][a-z0-9+.-]*:\/\/[^\s\/'"`:@]+:)([^\s\/'"`@]+)(@)/gi, (match, prefix, password, suffix) => {
      if (password.includes('${') || password.includes('[REDACTED]')) return match;
      count++;
      return prefix + '[REDACTED]' + suffix;
    });
  }).join('\n');
  return { content: result, count };
}

function language(filename) {
  return ({ ts: 'typescript', tsx: 'tsx', js: 'javascript', jsx: 'jsx', mjs: 'javascript', cjs: 'javascript', json: 'json', css: 'css', html: 'html', svg: 'xml', yaml: 'yaml', yml: 'yaml', sh: 'bash', ps1: 'powershell', md: 'markdown' })[path.extname(filename).slice(1)] || '';
}

fs.mkdirSync(output, { recursive: true });
const results = [];
for (const name of projects) {
  const directory = path.join(root, name);
  const files = walk(directory).filter(selected).sort();
  const pkg = JSON.parse(fs.readFileSync(path.join(directory, 'package.json'), 'utf8'));
  let redactions = 0;
  const originalHashes = new Map();
  const sections = files.map(filename => {
    const original = fs.readFileSync(filename);
    originalHashes.set(filename, crypto.createHash('sha256').update(original).digest('hex'));
    const source = original.toString('utf8');
    if (source.includes('\0')) throw new Error('Archivo binario seleccionado: ' + filename);
    const credentialConfig = /(?:^|[\\/])(?:\.env(?:\.[^\\/]+)?|\.?npmrc)$|\.(?:ya?ml|properties|conf|template)$/i.test(filename);
    const sanitized = credentialConfig ? redact(source) : { content: source, count: 0 };
    redactions += sanitized.count;
    return { relative: path.relative(directory, filename).replaceAll('\\', '/'), content: sanitized.content };
  });
  const codeCount = sections.filter(section => /\.(?:tsx?|jsx?|mjs|cjs)$/.test(section.relative)).length;
  const featuresDirectory = path.join(directory, 'src', 'features');
  const pagesDirectory = path.join(directory, 'src', 'pages');
  const modules = [featuresDirectory, pagesDirectory].filter(p => fs.existsSync(p)).flatMap(p => fs.readdirSync(p, { withFileTypes: true }).filter(e => e.isDirectory()).map(e => e.name));
  const latest = new Date(Math.max(...files.map(p => fs.statSync(p).mtimeMs))).toISOString();
  const lines = ['# ' + name, '', 'Código fuente de producción y configuraciones. Captura local: 28/10/2026.', '',
    `Paquete: ${pkg.name}. Se incluyen ${sections.length} archivos: ${codeCount} de TypeScript/JavaScript y ${sections.length - codeCount} de estilos, recursos de texto, documentación y configuración.`, '',
    'Cada sección identifica la ruta original y conserva su contenido completo, salvo credenciales literales ocultadas en configuraciones. El código TypeScript/JavaScript se conserva sin cambios. Incluye componentes, páginas, hooks, servicios, tipos, rutas, estado, estilos, SVG, package.json, configuración de compilación y despliegue disponible.', '',
    'Se excluyen tests y su configuración, dependencias instaladas, lockfiles, salidas generadas, cachés, metadatos de Git, instrucciones de agentes y recursos binarios. Los datos mock ubicados en el código de producción se conservan porque pueden ser consumidos por la aplicación.', '',
    `Valores de credenciales ocultados: ${redactions}. Referencias a variables de entorno conservadas.`, '',
    '## Módulos', '', modules.length ? modules.map(module => '- ' + module).join('\n') : 'Ver estructura en el índice.', '',
    '## Dependencias de ejecución', '', ...Object.entries(pkg.dependencies || {}).map(([dependency, version]) => `- ${dependency}: ${version}`), '',
    '## Índice', '', ...sections.map((section, i) => `${i + 1}. \`${section.relative}\``), ''];
  for (const section of sections) {
    let fenceLength = 3;
    for (const match of section.content.matchAll(/`+/g)) fenceLength = Math.max(fenceLength, match[0].length + 1);
    const fence = '`'.repeat(fenceLength);
    lines.push('## ' + section.relative, '', fence + language(section.relative), section.content, fence, '');
  }
  const target = path.join(output, name + '.md');
  if (fs.existsSync(target) && !process.argv.includes('--refresh')) throw new Error('El entregable ya existe: ' + target);
  fs.writeFileSync(target, lines.join('\n'), { encoding: 'utf8', flag: process.argv.includes('--refresh') ? 'w' : 'wx' });
  const saved = fs.readFileSync(target, 'utf8');
  for (const section of sections) {
    if (!saved.includes(section.content)) throw new Error('Contenido incompleto: ' + section.relative);
    if (/(?:^|\/)(?:tests?|__tests__|__mocks__)\/|\.(?:test|spec)\.[^.]+$|setupTests?\./i.test(section.relative)) throw new Error('Test incluido: ' + section.relative);
  }
  for (const [filename, hash] of originalHashes) {
    if (crypto.createHash('sha256').update(fs.readFileSync(filename)).digest('hex') !== hash) throw new Error('Fuente modificada: ' + filename);
  }
  results.push({ name, files: sections.length, code: codeCount, redactions, bytes: fs.statSync(target).size, latest, sha256: crypto.createHash('sha256').update(fs.readFileSync(target)).digest('hex') });
}
console.log(JSON.stringify({ directory: output, verified: 'Contenido completo de cada archivo seleccionado; sin tests; fuentes originales intactas.', projects: results }, null, 2));
