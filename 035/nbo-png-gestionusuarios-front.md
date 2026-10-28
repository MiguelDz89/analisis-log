# nbo-png-gestionusuarios-front

Código fuente de producción y configuraciones. Captura local: 28/10/2026.

Paquete: user-management. Se incluyen 257 archivos: 245 de TypeScript/JavaScript y 12 de estilos, recursos de texto, documentación y configuración.

Cada sección identifica la ruta original y conserva su contenido completo, salvo credenciales literales ocultadas en configuraciones. El código TypeScript/JavaScript se conserva sin cambios. Incluye componentes, páginas, hooks, servicios, tipos, rutas, estado, estilos, SVG, package.json, configuración de compilación y despliegue disponible.

Se excluyen tests y su configuración, dependencias instaladas, lockfiles, salidas generadas, cachés, metadatos de Git, instrucciones de agentes y recursos binarios. Los datos mock ubicados en el código de producción se conservan porque pueden ser consumidos por la aplicación.

Valores de credenciales ocultados: 0. Referencias a variables de entorno conservadas.

## Módulos

- business-groups
- profile-management
- user-management

## Dependencias de ejecución

- @nuam/common-fe-lib-components: 1.34.0
- @reduxjs/toolkit: ^2.2.7
- axios: ^1.9.0
- crypto-js: ^4.2.0
- dayjs: ^1.11.18
- dotenv: ^16.4.5
- i18next: ^25.4.1
- react: ^18.3.1
- react-dom: ^18.3.1
- react-hook-form: ^7.58.1
- react-i18next: ^15.0.2
- react-redux: ^9.1.2
- react-router-dom: ^6.26.1
- redux-mock-store: ^1.5.5
- xlsx: https://cdn.sheetjs.com/xlsx-0.20.3/xlsx-0.20.3.tgz

## Índice

1. `.dockerignore`
2. `.env`
3. `.github/workflows/continuos_integration.yml`
4. `.npmrc`
5. `.prettierrc`
6. `README.md`
7. `eslint.config.js`
8. `index.html`
9. `nginx/default.conf.template`
10. `package.json`
11. `postcss.config.js`
12. `public/vite.svg`
13. `src/App.css`
14. `src/App.tsx`
15. `src/declares.d.ts`
16. `src/features/business-groups/BusinessGroups.tsx`
17. `src/features/business-groups/components/BusinessGroupForm.tsx`
18. `src/features/business-groups/components/BusinessGroupModals.tsx`
19. `src/features/business-groups/components/CreateBusinessGroupModal.tsx`
20. `src/features/business-groups/components/ModalHeader.tsx`
21. `src/features/business-groups/components/ParticipantsToolbar.tsx`
22. `src/features/business-groups/components/ToolbarActions.tsx`
23. `src/features/business-groups/constants/index.ts`
24. `src/features/business-groups/hooks/useBusinessGroupForm.ts`
25. `src/features/business-groups/hooks/useBusinessGroupModal.ts`
26. `src/features/business-groups/hooks/useBusinessGroupModals.ts`
27. `src/features/business-groups/hooks/useBusinessGroups.ts`
28. `src/features/business-groups/hooks/useParticipantsTable.tsx`
29. `src/features/business-groups/mocks/mockParticipants.ts`
30. `src/features/business-groups/services/index.ts`
31. `src/features/business-groups/types/BusinessGroupItem.ts`
32. `src/features/business-groups/utils/columns.tsx`
33. `src/features/business-groups/utils/duplicateNameError.ts`
34. `src/features/business-groups/utils/fetchEnterpriseGroups.ts`
35. `src/features/business-groups/utils/fetchParticipants.ts`
36. `src/features/business-groups/utils/filtersConfig.ts`
37. `src/features/profile-management/components/FuncionalitiesStep.tsx`
38. `src/features/profile-management/components/FuncionalitiesTable.tsx`
39. `src/features/profile-management/components/ProfileDetailsModal.tsx`
40. `src/features/profile-management/components/ProfileStep.tsx`
41. `src/features/profile-management/components/RecursiveTreeTable.tsx`
42. `src/features/profile-management/components/ReviewStep.tsx`
43. `src/features/profile-management/constants/index.ts`
44. `src/features/profile-management/hooks/useCreateProfile.ts`
45. `src/features/profile-management/hooks/useFormData.ts`
46. `src/features/profile-management/hooks/useHandleCheckedNodesChange.ts`
47. `src/features/profile-management/hooks/useProfileActions.ts`
48. `src/features/profile-management/hooks/useProfileEdit.ts`
49. `src/features/profile-management/hooks/useProfileEditPanel.ts`
50. `src/features/profile-management/hooks/useProfileManager.tsx`
51. `src/features/profile-management/hooks/useProfileModals.ts`
52. `src/features/profile-management/hooks/useProfileStepForm.ts`
53. `src/features/profile-management/hooks/useProfileTable.tsx`
54. `src/features/profile-management/hooks/useProfileToast.ts`
55. `src/features/profile-management/hooks/useStepValidation.ts`
56. `src/features/profile-management/hooks/useUserList.ts`
57. `src/features/profile-management/menus.d.ts`
58. `src/features/profile-management/pages/ProfileManagementPage.tsx`
59. `src/features/profile-management/pages/RegisterProfilePage.tsx`
60. `src/features/profile-management/services/menus.ts`
61. `src/features/profile-management/services/profiles.ts`
62. `src/features/profile-management/types/menus.d.ts`
63. `src/features/profile-management/types/permissions.d.ts`
64. `src/features/profile-management/utils/configViews.ts`
65. `src/features/profile-management/utils/extractCheckedIds.ts`
66. `src/features/profile-management/utils/fetchProfiles.ts`
67. `src/features/profile-management/utils/fetchProfilesLastModify.ts`
68. `src/features/profile-management/utils/filtersConfig.ts`
69. `src/features/profile-management/utils/getStepComponent.ts`
70. `src/features/profile-management/utils/isValidStepNumber.ts`
71. `src/features/profile-management/utils/profileRoutes.ts`
72. `src/features/profile-management/utils/useStepNavigation.ts`
73. `src/features/user-management/components/AssignContentPermissions.tsx`
74. `src/features/user-management/components/AssignPermissions.tsx`
75. `src/features/user-management/components/AssignProfileWithFilter.tsx`
76. `src/features/user-management/components/ChangeStatusUser.tsx`
77. `src/features/user-management/components/CountriesFilter.tsx`
78. `src/features/user-management/components/DetailInfoUser.tsx`
79. `src/features/user-management/components/DetailPermissions.tsx`
80. `src/features/user-management/components/DetailPermissionsUser.tsx`
81. `src/features/user-management/components/DetailUser.tsx`
82. `src/features/user-management/components/EditProfileStep.tsx`
83. `src/features/user-management/components/EmailFilter.tsx`
84. `src/features/user-management/components/FiltersTable.tsx`
85. `src/features/user-management/components/FiltersTableUserExternal.tsx`
86. `src/features/user-management/components/FiltersTableUserInternal.tsx`
87. `src/features/user-management/components/ModalUserDetail.tsx`
88. `src/features/user-management/components/OTP.tsx`
89. `src/features/user-management/components/ParticipantFilterUserExternal.tsx`
90. `src/features/user-management/components/PermissionsForParticipant.tsx`
91. `src/features/user-management/components/PermissionsSection.tsx`
92. `src/features/user-management/components/ProfileFilter.tsx`
93. `src/features/user-management/components/RegisterStep.tsx`
94. `src/features/user-management/components/ReviewProfileStep.tsx`
95. `src/features/user-management/components/SearchProfile.tsx`
96. `src/features/user-management/components/SelectCountryCreateUser.tsx`
97. `src/features/user-management/components/SelectGroupCreateUser.tsx`
98. `src/features/user-management/components/SelectParticipantsCreateuser.tsx`
99. `src/features/user-management/components/SelectTypeDocumentCreateUser.tsx`
100. `src/features/user-management/components/StatusFilter.tsx`
101. `src/features/user-management/components/TableUser.tsx`
102. `src/features/user-management/components/ToolbarActionsUser.tsx`
103. `src/features/user-management/components/ToolbarActionsUserExternal.tsx`
104. `src/features/user-management/components/ToolbarActionseUserInternal.tsx`
105. `src/features/user-management/components/UserEntitySection.tsx`
106. `src/features/user-management/components/UserFilter.tsx`
107. `src/features/user-management/components/UserRegisterDefault.tsx`
108. `src/features/user-management/components/ViewDetailField.tsx`
109. `src/features/user-management/constants/commonStylesAutoComplete.ts`
110. `src/features/user-management/constants/emailCodes.ts`
111. `src/features/user-management/constants/errorCode.ts`
112. `src/features/user-management/constants/filtersStateKeys.ts`
113. `src/features/user-management/constants/index.ts`
114. `src/features/user-management/constants/keysLocalStorage.ts`
115. `src/features/user-management/constants/participantSession.ts`
116. `src/features/user-management/constants/status.ts`
117. `src/features/user-management/constants/typeUser.ts`
118. `src/features/user-management/hooks/useAssignProfile.ts`
119. `src/features/user-management/hooks/useDetailForProfile.ts`
120. `src/features/user-management/hooks/useDetailProfile.ts`
121. `src/features/user-management/hooks/useDetailUser.ts`
122. `src/features/user-management/hooks/useDispatchQueryParams.ts`
123. `src/features/user-management/hooks/useDownloadGenerateCSV.ts`
124. `src/features/user-management/hooks/useEditProfileStep.ts`
125. `src/features/user-management/hooks/useExistUser.tsx`
126. `src/features/user-management/hooks/useFetchOptionsStatus.ts`
127. `src/features/user-management/hooks/useFilter.ts`
128. `src/features/user-management/hooks/useFormPersistence.ts`
129. `src/features/user-management/hooks/useFormRegisterSubmission.ts`
130. `src/features/user-management/hooks/useFormReset.ts`
131. `src/features/user-management/hooks/useGetDetailUser.ts`
132. `src/features/user-management/hooks/useGetProfilePermissions.ts`
133. `src/features/user-management/hooks/useGetProfilesUser.ts`
134. `src/features/user-management/hooks/useHandleEyeClick.ts`
135. `src/features/user-management/hooks/useHandleSubmit.ts`
136. `src/features/user-management/hooks/useIsExternalRegister.ts`
137. `src/features/user-management/hooks/useOptionsSearchProfile.ts`
138. `src/features/user-management/hooks/useParamsFilter.ts`
139. `src/features/user-management/hooks/useProfileFilter.ts`
140. `src/features/user-management/hooks/useProfileForm.ts`
141. `src/features/user-management/hooks/useProfileLoader.ts`
142. `src/features/user-management/hooks/useRegisterStep.ts`
143. `src/features/user-management/hooks/useRegisterUserData.ts`
144. `src/features/user-management/hooks/useRegisterUsers.ts`
145. `src/features/user-management/hooks/useReviewProfileStep.ts`
146. `src/features/user-management/hooks/useStoragekeyCreateUser.ts`
147. `src/features/user-management/hooks/useUrlParams.ts`
148. `src/features/user-management/hooks/useUrlParamsUserExternal.ts`
149. `src/features/user-management/hooks/useUrlParamsUserInternal.ts`
150. `src/features/user-management/hooks/useUserAdmin.tsx`
151. `src/features/user-management/hooks/useUserAdminColumns.tsx`
152. `src/features/user-management/hooks/useUserAdminColumnsInternal.tsx`
153. `src/features/user-management/hooks/useUserAdminColumnsUserExternal.tsx`
154. `src/features/user-management/hooks/useUserAdminHeaderActions.ts`
155. `src/features/user-management/hooks/useUsersData.ts`
156. `src/features/user-management/hooks/useUsersProfiles.ts`
157. `src/features/user-management/hooks/useUsersProfilesExternal.ts`
158. `src/features/user-management/hooks/useUsersProfilesInternal.ts`
159. `src/features/user-management/mocks/actions.ts`
160. `src/features/user-management/pages/RegisterUserPage.tsx`
161. `src/features/user-management/pages/UserManagement.tsx`
162. `src/features/user-management/pages/UserManagementExternal.tsx`
163. `src/features/user-management/pages/UserManagementInternal.tsx`
164. `src/features/user-management/services/changeStatus.ts`
165. `src/features/user-management/services/countries.ts`
166. `src/features/user-management/services/deleteOTP.ts`
167. `src/features/user-management/services/detailForProfile.ts`
168. `src/features/user-management/services/email.tsx`
169. `src/features/user-management/services/enterpriseGroup.ts`
170. `src/features/user-management/services/getDetailuser.ts`
171. `src/features/user-management/services/getDownloadUsers.ts`
172. `src/features/user-management/services/getProfile.ts`
173. `src/features/user-management/services/getProfilePermissions.ts`
174. `src/features/user-management/services/getProfilePermissionsOld.ts`
175. `src/features/user-management/services/getProfilesUser.ts`
176. `src/features/user-management/services/getTypeDocument.tsx`
177. `src/features/user-management/services/getUser.ts`
178. `src/features/user-management/services/participant.ts`
179. `src/features/user-management/services/participantForEnterpriseGroup.ts`
180. `src/features/user-management/services/passwordUser.ts`
181. `src/features/user-management/services/sendEmail.ts`
182. `src/features/user-management/services/status.ts`
183. `src/features/user-management/services/updateProfile.ts`
184. `src/features/user-management/services/updateUser.ts`
185. `src/features/user-management/services/user.ts`
186. `src/features/user-management/services/users.ts`
187. `src/features/user-management/services/validateEmail.ts`
188. `src/features/user-management/services/validateUser.ts`
189. `src/features/user-management/types/AssignPermissions.d.ts`
190. `src/features/user-management/types/AutoCompleteStructure.d.ts`
191. `src/features/user-management/types/FiltersTable.d.ts`
192. `src/features/user-management/types/FiltersTableUserExternal.d.ts`
193. `src/features/user-management/types/FiltersTableUserInternal.d.ts`
194. `src/features/user-management/types/UseAdminColumns.d.ts`
195. `src/features/user-management/types/common.d.ts`
196. `src/features/user-management/types/countries.d.ts`
197. `src/features/user-management/types/email.d.ts`
198. `src/features/user-management/types/enterpriseGroup.d.ts`
199. `src/features/user-management/types/fieldTable.d.ts`
200. `src/features/user-management/types/getDetailUser.ts`
201. `src/features/user-management/types/getTypeDocument.d.ts`
202. `src/features/user-management/types/participant.d.ts`
203. `src/features/user-management/types/participantsForEnterpriseGroup.d.ts`
204. `src/features/user-management/types/permissionForProfile.d.ts`
205. `src/features/user-management/types/sendEmail.d.ts`
206. `src/features/user-management/types/statusService.d.ts`
207. `src/features/user-management/types/userName.d.ts`
208. `src/features/user-management/types/userTypes.d.ts`
209. `src/features/user-management/types/validateEmail.d.ts`
210. `src/features/user-management/types/validateUser.d.ts`
211. `src/features/user-management/utils/fetchAndFilterPermissions.ts`
212. `src/features/user-management/utils/generateCSV.ts`
213. `src/features/user-management/utils/getStepComponent.ts`
214. `src/features/user-management/utils/isDifferentParticipants.ts`
215. `src/features/user-management/utils/participantsJoin.ts`
216. `src/features/user-management/utils/profileInfo.ts`
217. `src/features/user-management/utils/sendUserEmail.ts`
218. `src/features/user-management/utils/transformFormData.ts`
219. `src/features/user-management/utils/transformOptionsAutoComplete.ts`
220. `src/features/user-management/utils/userAdminService.ts`
221. `src/features/user-management/utils/userProfileService.ts`
222. `src/features/user-management/utils/validationsRegisterPage.ts`
223. `src/i18n.ts`
224. `src/main.tsx`
225. `src/shared/components/CustomToast.tsx`
226. `src/shared/components/RenderOptionAutoComplete.tsx`
227. `src/shared/components/StepFlow.tsx`
228. `src/shared/config/method.ts`
229. `src/shared/constants/actionCodes.ts`
230. `src/shared/constants/endpoints.ts`
231. `src/shared/constants/enviroments.ts`
232. `src/shared/constants/index.ts`
233. `src/shared/context/useProfileContext.tsx`
234. `src/shared/hooks/useGenerateLogs.ts`
235. `src/shared/hooks/useToast.ts`
236. `src/shared/hooks/useTreeList.tsx`
237. `src/shared/routes/index.ts`
238. `src/shared/services/index.tsx`
239. `src/shared/services/statusService.tsx`
240. `src/shared/store/RegisterProfile/registerProfile.ts`
241. `src/shared/store/Store.ts`
242. `src/shared/types/declare.d.ts`
243. `src/shared/types/methods.d.ts`
244. `src/shared/types/routes.d.ts`
245. `src/shared/types/states.d.ts`
246. `src/shared/utils/createStepComponentResolver.ts`
247. `src/shared/utils/decryptPassword.ts`
248. `src/shared/utils/generateExcelReport.ts`
249. `src/shared/utils/getInfoUser.ts`
250. `src/shared/utils/getRegisterBasePath.ts`
251. `src/shared/utils/headerServices.ts`
252. `src/shared/utils/isDevMode.ts`
253. `src/shared/utils/localStorageUtil.ts`
254. `src/vite-env.d.ts`
255. `tailwind.config.js`
256. `tsconfig.json`
257. `vite.config.ts`

## .dockerignore

```
/dist
/tmp
/out-tsc
/bazel-out
**/node_modules

/.idea
.editorconfig
.project
.classpath
.c9/
*.launch
.settings/
*.sublime-workspace

**/npm-debug.log
**/Dockerfile*
**/docker-compose*
**/.dockerignore
**/.git
**/.gitignore
**/README.md
**/LICENSE
**/.vscode
**/build.sh
```

## .env

```
VITE_DEV_USER_MANAGEMENT=VITE_DEV_USER_MANAGEMENT
VITE_DEV_MASTER_PARTICIPANT=VITE_DEV_MASTER_PARTICIPANT
VITE_MENU_URL=VITE_MENU_URL
VITE_REMOTE_UTILITIES=VITE_REMOTE_UTILITIES
VITE_REMOTE_PARENT=VITE_REMOTE_PARENT
VITE_DEV_ENVIRONMENT=VITE_DEV_ENVIRONMENT
VITE_DOMAIN_EMAIL_NUAM=VITE_DOMAIN_EMAIL_NUAM
```

## .github/workflows/continuos_integration.yml

```yaml
---
name: Continuos integracion

on:
  pull_request:
    types:
      - opened
      - closed
    branches:
      - development
      - test
      - preprod
      - production
      - main
  # pull_request_target:
  #   types:
  #     - closed
  #   branches:
  #     - development
  #     - 'release/**'
  #     - hotfix
  #     - preprod
  #     - production
  #     - main

jobs:
  continuos_integration:
    name: '[CI]'
    uses: nuamx/devops-resources-refactor/.github/workflows/CI-react-main_facade.yaml@development
    secrets: inherit
    with:
      node_version: 20
      registry_repository: gestion-usuarios-front
      registry_project: nubo
      ubuntu_version: latest
      port_exposed: 80
      mui_usage: 'true'
      manifest_dev: kustomization.yaml
      manifest_qa: kustomization.yaml
      manifest_preprod: kustomization.yaml
      manifest_path_dev: overlays/development/apps/gestion-usuarios-front
      manifest_path_qa: overlays/testing-qa/apps/gestion-usuarios-front
      manifest_path_preprod: overlays/release/apps/gestion-usuarios-front
      repository_xac: nuamx/nbo-png-infraestructure-flux

```

## .npmrc

```
registry=https://registry.npmjs.org/
@nuam:registry=https://npm.nuamexchange.com/

```

## .prettierrc

```
{
  "plugins": [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss"
  ],
  "importOrder": [
    "<THIRD_PARTY_MODULES>",
    "^remote.*$",
    "^@/app/(.*)$",
    "^@/features/(.*)$",
    "^@/shared/(.*)$",
    "^[./]"
  ],
  "importOrderSeparation": true,
  "semi": false,
  "singleQuote": true,
  "printWidth": 80,
  "trailingComma": "none"
}

```

## README.md

````markdown
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname
    }
  }
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules
  }
})
```

````

## eslint.config.js

```javascript
import js from '@eslint/js'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      react: react
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ],
      'react/react-in-jsx-scope': 'off' // Desactiva la regla que requiere React en el scope
    }
  }
)

```

## index.html

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Gestión de Usuarios</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

```

## nginx/default.conf.template

```
server {
    listen       80;
    listen  [::]:80;
    server_name  localhost;

    #access_log  /var/log/nginx/host.access.log  main;

    # ====================================
    # COMPRESIÓN GZIP
    # ====================================
    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types
        text/plain
        text/css
        text/xml
        text/javascript
        application/json
        application/javascript
        application/x-javascript
        application/xml
        application/xml+rss
        application/xhtml+xml
        application/x-font-ttf
        application/x-font-opentype
        application/vnd.ms-fontobject
        image/svg+xml;
    gzip_min_length 1024;
    gzip_disable "msie6";

    # ====================================
    # ARCHIVOS ESTÁTICOS CON HASH (assets/)
    # Cache agresivo (1 año)
    # ====================================
    location /assets/ {
        root /usr/share/nginx/html;
        add_header Cache-Control "public, max-age=31536000, immutable";

        # CORS (si es necesario para Module Federation)
        # add_header 'Access-Control-Allow-Origin' '*' always;
        add_header 'Access-Control-Allow-Methods' 'GET, OPTIONS' always;
        add_header 'Access-Control-Allow-Headers' 'Authorization, Content-Type' always;

        # Si el archivo no existe, retorna 404 (no redirigir a index.html)
        try_files $uri =404;        
    }

    # ====================================
    # index.html y remoteEntry.js
    # NO cachear (deben validarse siempre)
    # ====================================
    location = /index.html {
        root /usr/share/nginx/html;
        add_header Cache-Control "no-cache, no-store, must-revalidate";
        add_header Pragma "no-cache";
        add_header Expires "0";

        # CORS
        # add_header 'Access-Control-Allow-Origin' '*' always;
    }

    location = /assets/remoteEntry.js {
        root /usr/share/nginx/html;
        
        # Cache corto para remoteEntry (5 minutos)
        # Permite actualizaciones rápidas pero evita descargas constantes
        add_header Cache-Control "public, max-age=300, must-revalidate";
        
        # CORS (CRÍTICO para Module Federation)
        # add_header 'Access-Control-Allow-Origin' '*' always;
        add_header 'Access-Control-Allow-Methods' 'GET, OPTIONS' always;
        add_header 'Access-Control-Allow-Headers' 'Authorization, Content-Type' always;
    }

    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
    }

    error_page  404              /404.html;

    # redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }

    # proxy the PHP scripts to Apache listening on 127.0.0.1:80
    #
    #location ~ \.php$ {
    #    proxy_pass   http://127.0.0.1;
    #}

    # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
    #
    #location ~ \.php$ {
    #    root           html;
    #    fastcgi_pass   127.0.0.1:9000;
    #    fastcgi_index  index.php;
    #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
    #    include        fastcgi_params;
    #}

    # deny access to .htaccess files, if Apache's document root
    # concurs with nginx's one
    #
    #location ~ /\.ht {
    #    deny  all;
    #}
}
```

## package.json

```json
{
  "name": "user-management",
  "private": true,
  "version": "0.199.0-alpha.3",
  "type": "module",
  "scripts": {
    "dev": "vite --port 5002 --strictPort",
    "build": "vite build",
    "preview": "vite preview --port 5002 --strictPort",
    "test": "vitest",
    "start": "npm run build && npm run preview",
    "watch": "npx vite build --watch",
    "build:dev": "vite build --mode development",
    "build:qa": "vite build --mode qa",
    "preview:dev": "vite preview --mode development --port 5002 --strictPort",
    "preview:qa": "vite preview --mode qa --port 5002 --strictPort",
    "start:dev": "npm run build:dev && npm run preview:dev",
    "start:qa": "npm run build:qa && npm run preview:qa",
    "prepare": "husky"
  },
  "dependencies": {
    "@nuam/common-fe-lib-components": "1.34.0",
    "@reduxjs/toolkit": "^2.2.7",
    "axios": "^1.9.0",
    "crypto-js": "^4.2.0",
    "dayjs": "^1.11.18",
    "dotenv": "^16.4.5",
    "i18next": "^25.4.1",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-hook-form": "^7.58.1",
    "react-i18next": "^15.0.2",
    "react-redux": "^9.1.2",
    "react-router-dom": "^6.26.1",
    "redux-mock-store": "^1.5.5",
    "xlsx": "https://cdn.sheetjs.com/xlsx-0.20.3/xlsx-0.20.3.tgz"
  },
  "devDependencies": {
    "@eslint/js": "^9.9.0",
    "@originjs/vite-plugin-federation": "^1.3.5",
    "@testing-library/dom": "^10.4.0",
    "@testing-library/jest-dom": "^6.8.0",
    "@testing-library/react": "^16.3.0",
    "@testing-library/user-event": "^14.5.2",
    "@trivago/prettier-plugin-sort-imports": "^5.2.2",
    "@types/crypto-js": "^4.2.2",
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@types/react-redux": "^7.1.33",
    "@types/redux-mock-store": "^1.5.0",
    "@vitejs/plugin-react-swc": "^3.5.0",
    "@vitest/coverage-v8": "^2.1.9",
    "@vitest/ui": "^2.1.9",
    "autoprefixer": "^10.4.20",
    "eslint": "^9.9.0",
    "eslint-plugin-react-hooks": "^5.1.0-rc.0",
    "eslint-plugin-react-refresh": "^0.4.9",
    "globals": "^15.9.0",
    "husky": "^9.1.7",
    "jsdom": "^25.0.1",
    "postcss": "^8.4.45",
    "prettier": "^3.6.2",
    "prettier-plugin-tailwindcss": "^0.6.14",
    "tailwindcss": "^3.4.10",
    "ts-node": "^10.9.2",
    "typescript": "^5.5.3",
    "typescript-eslint": "^8.0.1",
    "vite": "^5.4.4",
    "vite-plugin-compression": "^0.5.1",
    "vitest": "^2.1.9"
  }
}

```

## postcss.config.js

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
}

```

## public/vite.svg

```xml
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="31.88" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 257"><defs><linearGradient id="IconifyId1813088fe1fbc01fb466" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%"><stop offset="0%" stop-color="#41D1FF"></stop><stop offset="100%" stop-color="#BD34FE"></stop></linearGradient><linearGradient id="IconifyId1813088fe1fbc01fb467" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%"><stop offset="0%" stop-color="#FFEA83"></stop><stop offset="8.333%" stop-color="#FFDD35"></stop><stop offset="100%" stop-color="#FFA800"></stop></linearGradient></defs><path fill="url(#IconifyId1813088fe1fbc01fb466)" d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"></path><path fill="url(#IconifyId1813088fe1fbc01fb467)" d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"></path></svg>
```

## src/App.css

```css
@tailwind components;
@tailwind utilities;

```

## src/App.tsx

```tsx
import { Suspense, lazy } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { RootState } from 'store/mf-store'

import { Spinner } from 'remoteUtilities/components-mf-utilities'

import './App.css'
import { TypeUser } from './features/user-management/constants/typeUser'
import { ProfileProvider } from './shared/context/useProfileContext'
import { ROUTES } from './shared/routes'

const UserManagementInternal = lazy(
  () => import('./features/user-management/pages/UserManagementInternal')
)
const UserManagementExternal = lazy(
  () => import('./features/user-management/pages/UserManagementExternal')
)
const UserManagement = lazy(() =>
  import('./features/user-management/pages/UserManagement').then((module) => ({
    default: module.UserManagement
  }))
)
const ProfileManagement = lazy(() =>
  import('./features/profile-management/pages/ProfileManagementPage').then(
    (module) => ({
      default: module.ProfileManagement
    })
  )
)
const RegisterProfilePage = lazy(() =>
  import('./features/profile-management/pages/RegisterProfilePage').then(
    (module) => ({
      default: module.RegisterProfilePage
    })
  )
)
const BusinessGroups = lazy(() =>
  import('./features/business-groups/BusinessGroups').then((module) => ({
    default: module.BusinessGroups
  }))
)
const RegisterUserPage = lazy(() =>
  import('./features/user-management/pages/RegisterUserPage').then(
    (module) => ({
      default: module.RegisterUserPage
    })
  )
)

function App() {
  const { userType } = useSelector((state: RootState) => {
    return state.auth.infoUserNubo
  })
  const isExternalUser = userType === TypeUser.EXTERNAL

  return (
    <ProfileProvider>
      <Routes>
        {/* Home gestión de usuarios */}
        <Route
          path={ROUTES.USER_MANAGEMENT.pathMain}
          element={
            <Suspense fallback={<Spinner />}>
              <UserManagement />
            </Suspense>
          }
        />

        {/* Listas de gestión de usuarios */}
        <Route
          path={ROUTES.USER_MANAGEMENT_EXTERNAL.pathMain}
          element={
            <Suspense fallback={<Spinner />}>
              <UserManagementExternal />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.USER_MANAGEMENT_INTERNAL.pathMain}
          element={
            <Suspense fallback={<Spinner />}>
              <UserManagementInternal />
            </Suspense>
          }
        />

        {/* Registro de usuarios */}
        <Route
          path={ROUTES.USER_MANAGEMENT.subRoutes.INTERNAL_REGISTER.pathMain}
          element={
            <Suspense fallback={<Spinner />}>
              <RegisterUserPage />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.USER_MANAGEMENT.subRoutes.EXTERNAL_REGISTER.pathMain}
          element={
            <Suspense fallback={<Spinner />}>
              <RegisterUserPage />
            </Suspense>
          }
        />

        {/* Listas de perfiles (3 rutas explícitas) */}
        <Route
          path={ROUTES.PROFILE_MANAGEMENT_INTERNAL.pathMain}
          element={
            <Suspense fallback={<Spinner />}>
              <ProfileManagement mode="internal-nuam" />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.PROFILE_MANAGEMENT_EXTERNAL_ADMIN.pathMain}
          element={
            <Suspense fallback={<Spinner />}>
              <ProfileManagement
                mode={!isExternalUser ? 'internal-external' : 'external'}
              />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.PROFILE_MANAGEMENT_EXTERNAL.pathMain}
          element={
            <Suspense fallback={<Spinner />}>
              <ProfileManagement
                mode={isExternalUser ? 'external' : 'internal-external'}
              />
            </Suspense>
          }
        />

        <Route
          path={ROUTES.REGISTER_PROFILE_INTERNAL.pathMain}
          element={
            <Suspense fallback={<Spinner />}>
              <RegisterProfilePage mode="internal-nuam" />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.REGISTER_PROFILE_EXTERNAL_ADMIN.pathMain}
          element={
            <Suspense fallback={<Spinner />}>
              <RegisterProfilePage
                mode={!isExternalUser ? 'internal-external' : 'external'}
              />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.REGISTER_PROFILE_EXTERNAL.pathMain}
          element={
            <Suspense fallback={<Spinner />}>
              <RegisterProfilePage
                mode={isExternalUser ? 'external' : 'internal-external'}
              />
            </Suspense>
          }
        />

        {/* Mantenedor de grupos */}
        <Route
          path={ROUTES.BUSINESS_GROUPS.pathMain}
          element={
            <Suspense fallback={<Spinner />}>
              <BusinessGroups />
            </Suspense>
          }
        />
      </Routes>
    </ProfileProvider>
  )
}

export default App

```

## src/declares.d.ts

```typescript
declare module 'remoteUtilities/components-mf-utilities' {
  import {
    ButtonProps,
    TreeCheckboxProps,
    HeaderProps,
    ToastProps,
    InfoLabelsProps,
    TooltipProps,
    InputProps,
    ContentWrapperProps,
    NewTableProps,
    SidePanelProps,
    SelectProps,
    StepperProps,
    TableProps,
    ModalAlertProps,
    EditIconProps,
    ToggleProps,
    SelectPropsFilters,
    ModalContentProps,
    CustomTabsProps,
    FilterBarProps,
    ISimpleTableColumn
  } from './shared/types/declare'

  export const Input: React.ComponentType<InputProps>
  export const Button: React.ComponentType<ButtonProps>
  export const Select: React.ComponentType<SelectProps>
  export const TableSelect: React.ComponentType<SelectProps>
  export const CountrySelect: React.ComponentType<CountrySelectProps>
  export const Stepper: React.ComponentType<StepperProps>
  export const Spinner: React.ComponentType<any>
  export const Header: React.ComponentType<HeaderProps>
  export const InfoLabels: React.ComponentType<InfoLabelsProps>
  export const SearchSelect: React.ComponentType<SelectProps>
  export const ParticipantSelect: React.ComponentType<SelectProps>
  export const TypeDocumentSelect: React.ComponentType<SelectProps>
  export const Table: React.ComponentType<TableProps>
  export const ModalAlert: React.ComponentType<ModalAlertProps>
  export const ModalContent: React.ComponentType<ModalContentProps>
  export const Modal: React.ComponentType<ModalProps>
  export const EditIcon: React.ComponentType<EditIconProps>
  export const EditIconVariant: React.ComponentType<EditIconProps>
  export const NoteIcon: React.ComponentType<EditIconProps>
  export const ContentWrapper: React.ComponentType<ContentWrapperProps>
  export const NewTable: React.ComponentType<NewTableProps>
  export const SidePanel: React.ComponentType<SidePanelProps>
  export const TreeCheckbox: React.ComponentType<TreeCheckboxProps>
  export const Toast: React.ComponentType<ToastProps>
  export const useDataTheme
  export const Accessibility: React.ComponentType<any>
  export const ModalLoad: React.ComponentType<ModalLoadProps>
  export const Tooltip: React.ComponentType<TooltipProps>
  export const Toggle: React.ComponentType<ToggleProps>
  export const CalendarRange: React.ComponentType<CalendarRangeProps>
  export const FilterSelect: React.ComponentType<SelectPropsFilters>
  export const FilterBar: React.ComponentType<FilterBarProps>
  export const BasicTable: React.ComponentType<ISimpleTableColumn>
  export const useFilteredEndpoint: (str: string) => endpoint
  export const GenerateLogs: (
    client_user: string,
    data: {
      actionType: string
      actionDestination: string
      participantId: number
      userNuboId: number
      countryId: number
      statusId: string
    }
  ) => void
  export const AutoCompleteInput: React.ComponentType<IAutoCompleteInput>
  export const CustomTabs: React.ComponentType<CustomTabsProps>
  export const SelectNuam: React.ComponentType<
    | {
        label?: string
        options: any[]
        value?: any | never
        onChange?: (value: any) => void
        formControlProps: {
          fullWidth: boolean
          size?: 'small' | 'medium' | 'large'
          sx?: Record<string, any>
          [value: string]: any
        }
        size?: 'small' | 'medium' | 'large'
        labelKey?: string
        valueKey?: string
        disabled?: boolean
        sx?: Record<string, any>
        placeholder?: string
        required?: boolean
        error?: boolean
        MenuProps?: any
        showClearIndicator?: boolean
      }
    | any
  >
}

declare module 'remoteUtilities/formatToUserLocalTime' {
  export const formatToUserLocalTime: (dateString: string) => string
}
declare module 'remoteUtilities/formattedDate' {
  export const formattedDate: (params?: {
    date?: string
    format?: string
  }) => string
}
declare module 'remoteUtilities/formattedTime' {
  export const formattedTime: (params?: {
    date?: string | Date
    format?: string
  }) => string
}
interface StoreProviderProps {
  children: ReactNode
}
declare module 'store/mf-store' {
  export type RootState = ReturnType<typeof store.getState>
  export function useLanguage(): { changeLanguage: (language: string) => void }
  export const StoreProvider: React.FC<StoreProviderProps>
}
declare module 'store/mf-axiosConfig' {
  import { AxiosInstance } from 'axios'
  export const http: AxiosInstance
  export const httpUserManagment: AxiosInstance
  export const httpParticipants: AxiosInstance
  export const httpMenu: AxiosInstance
  export const httpFilterParameters: AxiosInstance
  export const httpEnterpriseGroupsQuery: AxiosInstance
  export const httpEnterpriseGroupsCmd: AxiosInstance
  export const httpProfileQuery: AxiosInstance
  export const httpProfileCmd: AxiosInstance
  export const httpModuleMaintainer: AxiosInstance
  export const httpEmailApi: AxiosInstance
}

declare module 'store/mf-shell-useScreenActions' {
  import { ScreenActionsState } from '@/shared/types/screenActions'
  export const useScreenActions: () => ScreenActionsState
}

declare module 'remoteUtilities/statusChip' {
  export const StatusChip: React.FC<StatusChipProps>
}

```

## src/features/business-groups/BusinessGroups.tsx

```tsx
import { useCallback } from 'react'

import {
  ContentWrapper,
  FilterBar,
  ModalAlert,
  NewTable,
  Spinner,
  useFilteredEndpoint
} from 'remoteUtilities/components-mf-utilities'

import { CustomToast } from '../../shared/components/CustomToast'
import { BusinessGroupModals } from './components/BusinessGroupModals'
import { ToolbarActions } from './components/ToolbarActions'
import { useBusinessGroupModals } from './hooks/useBusinessGroupModals'
import { useBusinessGroups } from './hooks/useBusinessGroups'
import { useBusinessGroupColumns } from './utils/columns'
import { filtersConfig } from './utils/filtersConfig'

export const BusinessGroups: React.FC = () => {
  const {
    rows,
    selectedRows,
    selectedData,
    loading,
    setLoading,
    setThereAreSelected,
    setDataRemote,
    toastConfig,
    hideToast,
    showSuccessToast,
    showErrorToast,
    modalAlert,
    setModalAlert
  } = useBusinessGroups()

  const {
    modalState,
    openCreateModal,
    openViewModal,
    openEditModal,
    closeAllModals,
    refreshTrigger,
    refreshTable
  } = useBusinessGroupModals()

  const { endpoint } = useFilteredEndpoint('/enterprise-group/search')

  const handleViewDetails = useCallback(
    (rowData: any) => {
      openViewModal(rowData)
    },
    [openViewModal]
  )
  const handleEditFromToolbar = useCallback(() => {
    if (selectedRows.length === 1) {
      const selectedItem = rows.find(
        (row) => String(row.id) === String(selectedRows[0])
      )
      if (selectedItem) {
        openEditModal(selectedItem)
      }
    }
  }, [selectedRows, rows, openEditModal])

  const handleDeleteSuccess = useCallback(() => {
    console.log('Elemento eliminado, refrescando datos...')
  }, [])

  const columns = useBusinessGroupColumns(handleViewDetails)

  if (loading) {
    return <Spinner />
  }

  return (
    <ContentWrapper title="Mantenedor de grupos empresariales">
      <FilterBar config={filtersConfig} />
      <NewTable
        columns={columns}
        endpoint={endpoint}
        refresh={refreshTrigger}
        axiosInstanceKey="httpEnterpriseGroupsQuery"
        customToolbar={
          <ToolbarActions
            selectedRows={selectedRows}
            selectedData={selectedData}
            onEditFromToolbar={handleEditFromToolbar}
            onCreateFromToolbar={openCreateModal}
            onDeleteSuccess={handleDeleteSuccess}
            setLoading={setLoading}
            isLoading={loading}
            showSuccessToast={showSuccessToast}
            showErrorToast={showErrorToast}
            setModalAlert={setModalAlert}
          />
        }
        setDataRemote={setDataRemote}
        setThereAreSelected={setThereAreSelected}
        height="auto"
        rows={rows}
      />

      <BusinessGroupModals
        modalState={modalState}
        loading={loading}
        setLoading={setLoading}
        onCancel={closeAllModals}
        refreshTable={refreshTable}
        setModalAlert={setModalAlert}
        showSuccessToast={showSuccessToast}
      />

      {modalAlert?.open && (
        <ModalAlert
          title={modalAlert.title}
          message={modalAlert.message}
          textSuccess={modalAlert.textSuccess}
          textCancel={modalAlert.textCancel}
          onClick={modalAlert.onClose}
          handleCancel={modalAlert.handleCancel}
          variant={modalAlert.variant}
          orientation="horizontal"
        />
      )}
      <CustomToast config={toastConfig} onClose={hideToast} />
    </ContentWrapper>
  )
}

export default BusinessGroups

```

## src/features/business-groups/components/BusinessGroupForm.tsx

```tsx
import { DefaultComponents, Typography } from '@nuam/common-fe-lib-components'
import { Controller } from 'react-hook-form'

import {
  type BusinessGroupFormData,
  type BusinessGroupModalData,
  type ModalMode
} from '../types/BusinessGroupItem'

interface BusinessGroupFormProps {
  control: any
  errors: any
  trigger: any
  mode: ModalMode
  isEditing: boolean
  initialData?: BusinessGroupModalData
  validationRules: any
}

const customStyles = {
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#FF411C',
      borderWidth: '2px'
    }
  }
}

export const BusinessGroupForm: React.FC<BusinessGroupFormProps> = ({
  control,
  errors,
  trigger,
  mode,
  isEditing,
  initialData,
  validationRules
}) => {
  const { InputLabel, TextField, FormControl, Select, MenuItem } =
    DefaultComponents

  const renderReadOnlyField = (
    label: string,
    value: string,
    className = 'w-full max-w-64 text-right'
  ) => (
    <Typography variant="body1" className={className}>
      {value || 'Sin información'}
    </Typography>
  )

  const renderFormField = (
    name: keyof BusinessGroupFormData,
    id: string,
    placeholder: string,
    className = 'w-full max-w-64',
    maxLength = 50,
    minLength = 2
  ) => (
    <Controller
      name={name}
      control={control}
      rules={validationRules[name]}
      render={({ field }) => (
        <TextField
          {...field}
          id={id}
          variant="outlined"
          size="small"
          placeholder={placeholder}
          className={className}
          slotProps={{
            htmlInput: { maxLength, minLength }
          }}
          sx={customStyles}
          error={!!errors[name]}
          helperText={errors[name]?.message as string}
          onBlur={() => trigger(name)}
        />
      )}
    />
  )

  const renderSelectField = () => (
    <Controller
      name="groupStateId"
      control={control}
      rules={validationRules.groupStateId}
      render={({ field }) => (
        <FormControl className="w-full max-w-64" size="small" sx={customStyles}>
          <Select
            {...field}
            id="estado-grupo"
            displayEmpty
            error={!!errors.groupStateId}
            onBlur={() => trigger('groupStateId')}
          >
            <MenuItem value="">
              <span className="text-[#7A7A7A]">Indica el estado del grupo</span>
            </MenuItem>
            <MenuItem value="530">Activo</MenuItem>
            <MenuItem value="531">Inactivo</MenuItem>
          </Select>
          {errors.groupStateId && (
            <Typography variant="caption" color="primary">
              {errors.groupStateId.message as string}
            </Typography>
          )}
        </FormControl>
      )}
    />
  )

  return (
    <>
      {mode !== 'create' && (
        <div className="flex w-full items-center justify-between">
          <InputLabel
            className="mb-1 text-base font-bold text-[#3d3d3d]"
            htmlFor="nombre-grupo"
          >
            Código del grupo empresarial:
          </InputLabel>
          <InputLabel
            className="mb-1 text-base text-[#3d3d3d]"
            htmlFor="estado-grupo"
          >
            {initialData?.code || 'N/A'}
          </InputLabel>
        </div>
      )}
      <div className="flex w-full items-center justify-between">
        <InputLabel
          className="mb-1 text-base font-bold text-[#3d3d3d]"
          htmlFor="nombre-grupo"
        >
          Nombre del grupo empresarial:
        </InputLabel>
        {mode === 'view' && !isEditing
          ? renderReadOnlyField('Nombre', initialData?.groupName || '')
          : renderFormField(
              'groupName',
              'nombre-grupo',
              'Digita un nombre para el grupo'
            )}
      </div>

      <div className="flex w-full items-center justify-between">
        <InputLabel
          className="mb-1 text-base font-bold text-[#3d3d3d]"
          htmlFor="estado-grupo"
        >
          Estado del grupo empresarial:
        </InputLabel>
        {mode === 'view' && !isEditing
          ? renderReadOnlyField('Estado', initialData?.groupState || '')
          : renderSelectField()}
      </div>

      <div className="flex w-full items-center justify-between">
        <InputLabel
          className="mb-1 text-base font-bold text-[#3d3d3d]"
          htmlFor="descripcion-grupo"
        >
          Descripción del grupo empresarial:
        </InputLabel>
        {mode === 'view' && !isEditing
          ? renderReadOnlyField(
              'Descripción',
              initialData?.groupDescription || '',
              'w-full max-w-[450px] text-right'
            )
          : renderFormField(
              'groupDescription',
              'descripcion-grupo',
              'Digita una breve descripción para el grupo',
              'w-full max-w-[450px]',
              200,
              2
            )}
      </div>
    </>
  )
}

```

## src/features/business-groups/components/BusinessGroupModals.tsx

```tsx
import React from 'react'

import { ModalState } from '../hooks/useBusinessGroupModals'
import { CreateBusinessGroupModal } from './CreateBusinessGroupModal'

interface BusinessGroupModalsProps {
  modalState: ModalState
  loading: boolean
  setLoading: (loading: boolean) => void
  onCancel: () => void
  setModalAlert?: (alert: any) => void
  showSuccessToast?: (message: string) => void
  refreshTable?: () => void
}

export const BusinessGroupModals: React.FC<BusinessGroupModalsProps> = ({
  modalState,
  loading,
  setLoading,
  onCancel,
  setModalAlert,
  showSuccessToast,
  refreshTable
}) => {
  const { openCreateModal, openViewModal, openEditModal, selectedGroupData } =
    modalState

  const getInitialData = () => ({
    id: selectedGroupData?.id,
    groupName: selectedGroupData?.name,
    groupState: selectedGroupData?.status?.description,
    groupStateId: selectedGroupData?.status?.id,
    groupDescription: selectedGroupData?.detail,
    participants: selectedGroupData?.participants,
    code: selectedGroupData?.code
  })

  return (
    <>
      {openCreateModal && (
        <CreateBusinessGroupModal
          mode="create"
          onCancel={onCancel}
          refreshTable={refreshTable}
          setLoading={setLoading}
          loading={loading}
          setModalAlert={setModalAlert}
          showSuccessToast={showSuccessToast}
        />
      )}

      {openViewModal && (
        <CreateBusinessGroupModal
          mode="view"
          initialData={getInitialData()}
          refreshTable={refreshTable}
          onCancel={onCancel}
          setLoading={setLoading}
          loading={loading}
          setModalAlert={setModalAlert}
          showSuccessToast={showSuccessToast}
        />
      )}

      {openEditModal && (
        <CreateBusinessGroupModal
          mode="edit"
          initialData={getInitialData()}
          refreshTable={refreshTable}
          onCancel={onCancel}
          setLoading={setLoading}
          loading={loading}
          setModalAlert={setModalAlert}
          showSuccessToast={showSuccessToast}
        />
      )}
    </>
  )
}

```

## src/features/business-groups/components/CreateBusinessGroupModal.tsx

```tsx
import { DataGrid } from '@nuam/common-fe-lib-components'
import { useEffect, useRef, useState } from 'react'

import { ModalContent } from 'remoteUtilities/components-mf-utilities'

import isDevMode from '@/shared/utils/isDevMode'

import { ERROR_CODES } from '../constants'
import { useBusinessGroupForm } from '../hooks/useBusinessGroupForm'
import { useBusinessGroupModal } from '../hooks/useBusinessGroupModal'
import { useParticipantsTable } from '../hooks/useParticipantsTable'
import { type CreateBusinessGroupModalProps } from '../types/BusinessGroupItem'
import { handleDuplicateNameError } from '../utils/duplicateNameError'
import { BusinessGroupForm } from './BusinessGroupForm'
import { ModalHeader } from './ModalHeader'
import { ParticipantsToolbar } from './ParticipantsToolbar'

export const CreateBusinessGroupModal: React.FC<
  CreateBusinessGroupModalProps
> = ({
  onCancel,
  mode,
  initialData,
  setLoading = () => {},
  loading,
  setModalAlert,
  showSuccessToast,
  refreshTable
}) => {
  const hasInitialized = useRef(false)
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 5
  })
  const form = useBusinessGroupForm(initialData)
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    trigger,
    reset,
    validationRules,
    watch,
    setError,
    clearErrors
  } = form
  const {
    isEditing,
    shouldShowButtons,
    shouldShowAddParticipant,
    getTitle,
    handleEdit,
    handleSave,
    loadingSave,
    setLoadingSave
  } = useBusinessGroupModal(mode, initialData, setLoading)

  const {
    tableData,
    addNewParticipant,
    resetTable,
    getTableColumns,
    setAutoCompleteValues,
    setTableData
  } = useParticipantsTable({
    mode,
    isEditing,
    setModalAlert,
    groupName: initialData?.groupName,
    showSuccessToast
  })
  const watchedValues = watch()

  const hasFormData = () => {
    if (mode !== 'create') return false

    const hasTextData =
      watchedValues.groupName ||
      watchedValues.groupDescription ||
      watchedValues.groupState

    const hasParticipants = tableData.some((row) => !row.isEditing)

    return hasTextData || hasParticipants
  }

  useEffect(() => {
    if (
      !hasInitialized.current &&
      initialData?.participants &&
      initialData.participants.length > 0
    ) {
      const rows = initialData.participants.map((p: any) => ({
        id: p.id, // Mantener el tipo original del ID
        key: String(p.id), // Key como string para consistencia con la tabla
        name: p.name,
        code: p.code,
        documentNumber: p.documentNumber,
        shortName: p.shortName,
        type: {
          id: p.type?.id || 0,
          description: p.type?.description || ''
        },
        identificationType: {
          id: p.identificationType?.id || 0,
          description: p.identificationType?.description || ''
        },
        status: {
          id: p.status?.id || 0,
          description: p.status?.description || ''
        },
        country: {
          id: p.country?.id || 0,
          name: p.country?.name || ''
        },
        isEditing: false
      }))
      setTableData(rows)

      const autoCompleteMap: { [key: string]: any } = {}
      initialData.participants.forEach((p: any) => {
        autoCompleteMap[String(p.id)] = {
          id: p.id,
          label: p.shortName || p.name,
          type: p.type?.description || '',
          idType: p.identificationType?.description || '',
          state: p.status?.description || '',
          country: {
            id: String(p.country?.id || ''),
            name: p.country?.name || ''
          }
        }
      })
      setAutoCompleteValues(autoCompleteMap)
      hasInitialized.current = true
    } else if (
      !hasInitialized.current &&
      (!initialData?.participants || initialData.participants.length === 0)
    ) {
      resetTable()
      hasInitialized.current = true
    }
  }, [
    initialData?.participants,
    setTableData,
    setAutoCompleteValues,
    resetTable
  ])

  const handleClose = () => {
    if (mode === 'create' && hasFormData()) {
      setModalAlert?.({
        open: true,
        title: '¿Deseas descartar la información y volver sin guardar?',
        textSuccess: 'Volver',
        textCancel: 'Cancelar',
        variant: 'warning',
        onClose: () => {
          setModalAlert?.({ open: false })
          confirmClose()
        },
        handleCancel: () => {
          setModalAlert?.({ open: false })
        }
      })
    } else {
      confirmClose()
    }
  }

  const confirmClose = () => {
    reset()
    resetTable()
    hasInitialized.current = false
    onCancel()
  }

  const showErrorModal = (message: string) => {
    setModalAlert?.({
      open: true,
      title: 'Error',
      message,
      textSuccess: 'Entendido',
      variant: 'error',
      onClose: () => setModalAlert?.({ open: false })
    })
  }

  const handleSaveError = (error: any) => {
    const isDuplicateNameError =
      error?.response?.status === 409 &&
      error?.response?.data?.errorCode === ERROR_CODES.DUPLICATE_NAME

    const isMissingParticipantsError =
      error?.response?.data?.errorDetails?.[0]?.description ===
      ERROR_CODES.MISSING_PARTICIPANTS

    if (isDuplicateNameError) {
      handleDuplicateNameError(setError)
    } else if (isMissingParticipantsError) {
      showErrorModal('Al menos un participante es requerido.')
    } else {
      showErrorModal(
        'Ocurrió un error al guardar el grupo empresarial. Inténtelo nuevamente.'
      )
    }

    if (isDevMode()) {
      console.error('Error al guardar grupo empresarial:', error)
    }
  }

  const handleSaveSuccess = (code: string) => {
    if (mode === 'create') {
      showSuccessToast?.(
        `Se ha registrado exitosamente el grupo empresarial ${code}.`
      )
    } else {
      showSuccessToast?.(`Grupo empresarial actualizado exitosamente ${code}.`)
    }
    reset()
    resetTable()
    refreshTable?.()
    hasInitialized.current = false
    onCancel()
  }

  const onSubmit = async (formData: any) => {
    clearErrors('groupName')

    const completedParticipants = tableData.filter((row) => !row.isEditing)
    const participantIds = completedParticipants
      .map((participant) => Number(participant.id))
      .filter((id) => !isNaN(id))

    // Verificar si hay participantes inactivos
    const hasInactiveParticipants = completedParticipants.some(
      (participant) => participant.status?.id !== 510
    )

    const executeSave = async (data: any, ids: number[]) => {
      setLoadingSave(true)
      try {
        const { code } = await handleSave(data, ids)
        handleSaveSuccess(code)
      } catch (error: any) {
        handleSaveError(error)
      } finally {
        setLoadingSave(false)
      }
    }

    const showInactiveParticipantsInfo = () => {
      setModalAlert?.({
        open: true,
        title:
          'Solo los participantes activos estarán disponibles para los usuarios.',
        textSuccess: 'Entendido',
        variant: 'warning',
        onClose: () => {
          setModalAlert?.({ open: false })
          proceedWithSave()
        }
      })
    }

    const proceedWithSave = async () => {
      if (participantIds.length > 0) {
        setModalAlert?.({
          open: true,
          title: `¿${mode === 'create' ? 'Crear' : 'Editar'} grupo empresarial con esta información?`,
          message: '',
          textSuccess: 'Guardar',
          textCancel: 'Cancelar',
          variant: 'warning',
          onClose: async () => {
            setModalAlert?.({ open: false })
            await executeSave(formData, participantIds)
          },
          handleCancel: () => {
            setModalAlert?.({ open: false })
          }
        })
      } else {
        await executeSave(formData, [])
      }
    }

    if (hasInactiveParticipants) {
      showInactiveParticipantsInfo()
    } else {
      proceedWithSave()
    }
  }

  return (
    <ModalContent
      handleClose={handleClose}
      handleAccept={shouldShowButtons ? handleSubmit(onSubmit) : undefined}
      className="w-full max-w-[75%]"
      btnAceptText="GUARDAR"
      btnCancelText="CANCELAR"
      ItShouldHaveButtons={shouldShowButtons}
      showBtnAccept={shouldShowButtons}
      showBtnClose={true}
      loadingBtn={loadingSave}
      btnAcceptProps={{ disabled: !isValid || loading }}
    >
      <form
        className="mt-1 flex w-full flex-col gap-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <ModalHeader
          title={getTitle()}
          mode={mode}
          isEditing={isEditing}
          onEdit={handleEdit}
        />

        <BusinessGroupForm
          control={control}
          errors={errors}
          trigger={trigger}
          mode={mode}
          isEditing={isEditing}
          initialData={initialData}
          validationRules={validationRules}
        />

        <DataGrid
          columns={getTableColumns}
          rows={tableData}
          sx={{
            height: '200px'
          }}
          rowHeight={100}
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          pageSizeOptions={[5, 10, 25, 50]}
          hideFooter={tableData.length <= 5}
          checkboxSelection={false}
          disableRowSelectionOnClick={true}
          customToolbar={
            <ParticipantsToolbar
              shouldShow={shouldShowAddParticipant}
              onAddParticipant={addNewParticipant}
            />
          }
          showToolbar
        />
      </form>
    </ModalContent>
  )
}

```

## src/features/business-groups/components/ModalHeader.tsx

```tsx
import { MaterialIcons, Typography } from '@nuam/common-fe-lib-components'
import { useScreenActions } from 'store/mf-shell-useScreenActions'

import { BUSINESS_GROUPS_ACTIONS } from '@/shared/constants/actionCodes'

import { type ModalMode } from '../types/BusinessGroupItem'

interface ModalHeaderProps {
  title: string
  mode: ModalMode
  isEditing: boolean
  onEdit: () => void
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({
  title,
  mode,
  isEditing,
  onEdit
}) => {
  const { hasAction } = useScreenActions()
  const canShowEditOption = hasAction(
    BUSINESS_GROUPS_ACTIONS.EDIT_DETAIL_ENTERPRISE_GROUPS
  )

  return (
    <div className="flex justify-between">
      <Typography variant="h6" component="h2" fontWeight="medium">
        {title}
      </Typography>
      {mode === 'view' && !isEditing && canShowEditOption && (
        <button
          type="button"
          className="flex cursor-pointer items-center border-0 bg-transparent p-0"
          onClick={onEdit}
          tabIndex={0}
          aria-label="Editar grupo empresarial"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              onEdit()
            }
          }}
          style={{ background: 'none' }}
        >
          <MaterialIcons.ModeEdit sx={{ color: '#FF411C', fontSize: '18px' }} />
          <Typography variant="body2" className="ml-2" color="primary">
            Editar
          </Typography>
        </button>
      )}
    </div>
  )
}

```

## src/features/business-groups/components/ParticipantsToolbar.tsx

```tsx
import { MaterialIcons } from '@nuam/common-fe-lib-components'

interface ParticipantsToolbarProps {
  shouldShow: boolean
  onAddParticipant: () => void
}

export const ParticipantsToolbar: React.FC<ParticipantsToolbarProps> = ({
  shouldShow,
  onAddParticipant
}) => {
  if (!shouldShow) return null

  return (
    <div className="flex justify-start">
      <button
        type="button"
        className="flex items-center gap-2 px-2 py-2 text-sm font-medium text-[#FF4201]"
        onClick={onAddParticipant}
      >
        <MaterialIcons.AddCircle fontSize="medium" sx={{ color: '#ff4201' }} />
        AGREGAR PARTICIPANTE
      </button>
    </div>
  )
}

```

## src/features/business-groups/components/ToolbarActions.tsx

```tsx
import { Button, MaterialIcons } from '@nuam/common-fe-lib-components'
import { useState } from 'react'
import { useScreenActions } from 'store/mf-shell-useScreenActions'

import { ModalAlert } from 'remoteUtilities/components-mf-utilities'

import { BUSINESS_GROUPS_ACTIONS } from '@/shared/constants/actionCodes'
import useGenerateLogs from '@/shared/hooks/useGenerateLogs'
import isDevMode from '@/shared/utils/isDevMode'

import { deleteEnterpriseGroups } from '../services'

interface ToolbarActionsProps {
  selectedRows: any[]
  selectedData: any[]
  onEditFromToolbar: () => void
  onCreateFromToolbar: () => void
  onDeleteSuccess?: () => void
  setLoading: (loading: boolean) => void
  isLoading: boolean
  showSuccessToast: (message: string) => void
  showErrorToast: (message: string) => void
  setModalAlert: (
    alert: {
      title: string
      message?: string
      variant: 'error' | 'warning' | 'info' | 'success'
      textSuccess: string
      open: boolean
      onClose: () => void
    } | null
  ) => void
}

const useDeleteConfirmation = (
  selectedRows: any[],
  selectedData: any[],
  setLoading: (loading: boolean) => void,
  showSuccessToast: (message: string) => void,
  setModalAlert: (
    alert: {
      title: string
      message?: string
      variant: 'error' | 'warning' | 'info' | 'success'
      textSuccess: string
      open: boolean
      onClose: () => void
    } | null
  ) => void,
  onDeleteSuccess?: () => void
) => {
  const [isDeletedModal, setIsDeletedModal] = useState(false)
  const { generateLogs } = useGenerateLogs()

  const handleDelete = () => {
    if (selectedRows.length === 1) {
      setIsDeletedModal(true)
    }
  }

  const handleConfirmDelete = async () => {
    if (selectedRows.length === 1) {
      setLoading(true)
      try {
        await deleteEnterpriseGroups(selectedData[0].id)
        generateLogs({
          actionType: `Eliminación grupo empresarial ${selectedData[0].code}`,
          actionDestination: 'business-groups'
        })
        setIsDeletedModal(false)
        showSuccessToast(
          `Se ha eliminado correctamente el Grupo Empresarial ${selectedData[0].code} - ${selectedData[0].name}.`
        )
        onDeleteSuccess?.()
      } catch (error: any) {
        if (
          error.response.data.errorCode === 'ENTERPRISE_GROUP_HAS_PARTICIPANTS'
        ) {
          setModalAlert({
            title:
              'No se puede eliminar el grupo empresarial porque tiene participantes asociados',
            variant: 'error',
            textSuccess: 'Volver',
            open: true,
            onClose: () => setModalAlert(null)
          })
        }
        if (isDevMode()) {
          console.error('Error al eliminar el grupo empresarial:', error)
        }
      } finally {
        setLoading(false)
      }
    }
  }

  const handleCancelDelete = () => {
    setIsDeletedModal(false)
  }

  return {
    isDeletedModal,
    handleDelete,
    handleConfirmDelete,
    handleCancelDelete
  }
}

export const ToolbarActions: React.FC<ToolbarActionsProps> = ({
  selectedRows,
  selectedData,
  onEditFromToolbar,
  onCreateFromToolbar,
  onDeleteSuccess,
  setLoading,
  isLoading,
  showSuccessToast,
  setModalAlert
}) => {
  const {
    isDeletedModal,
    handleDelete,
    handleConfirmDelete,
    handleCancelDelete
  } = useDeleteConfirmation(
    selectedRows,
    selectedData,
    setLoading,
    showSuccessToast,
    setModalAlert,
    onDeleteSuccess
  )

  const isEditDisabled = selectedRows.length !== 1
  const isDeleteDisabled = selectedRows.length !== 1
  const { hasAction } = useScreenActions()
  const canShowEditOption = hasAction(
    BUSINESS_GROUPS_ACTIONS.EDIT_GRID_ENTERPRISE_GROUPS
  )
  const canShowCreateOption = hasAction(
    BUSINESS_GROUPS_ACTIONS.CREATE_ENTERPRISE_GROUPS
  )
  const canShowDeleteOption = hasAction(
    BUSINESS_GROUPS_ACTIONS.DELETE_ENTERPRISE_GROUPS
  )
  const buttonStyle = (disabled: boolean) => ({
    opacity: disabled ? 0.5 : 1,
    cursor: disabled ? 'not-allowed' : 'pointer'
  })

  return (
    <>
      <div className="flex gap-2">
        {canShowCreateOption && (
          <Button
            variant="text"
            className="gap-2"
            onClick={onCreateFromToolbar}
          >
            <MaterialIcons.AddCircleSharp /> CREAR GRUPO EMPRESARIAL
          </Button>
        )}
        {canShowEditOption && (
          <Button
            variant="text"
            className="gap-2"
            onClick={onEditFromToolbar}
            disabled={isEditDisabled}
            style={buttonStyle(isEditDisabled)}
          >
            <MaterialIcons.EditSharp /> EDITAR GRUPO EMPRESARIAL
          </Button>
        )}
        {canShowDeleteOption && (
          <Button
            variant="text"
            className="gap-2"
            onClick={handleDelete}
            disabled={isDeleteDisabled || isLoading}
            style={buttonStyle(isDeleteDisabled || isLoading)}
          >
            <MaterialIcons.DeleteSharp />
            ELIMINAR GRUPO EMPRESARIAL
          </Button>
        )}
      </div>

      {isDeletedModal && (
        <ModalAlert
          title={`¿Estás seguro de eliminar el grupo empresarial  ${selectedData[0]?.code} - ${selectedData[0]?.name}?`}
          variant="warning"
          onClick={handleConfirmDelete}
          textSuccess={isLoading ? 'Eliminando...' : 'Eliminar'}
          handleCancel={handleCancelDelete}
          orientation="horizontal"
        />
      )}
    </>
  )
}

```

## src/features/business-groups/constants/index.ts

```typescript
export const ERROR_CODES = {
  DUPLICATE_NAME: 'ENTERPRISE_GROUP_NAME_ALREADY_EXISTS',
  MISSING_PARTICIPANTS: 'At least one participant is required'
}

```

## src/features/business-groups/hooks/useBusinessGroupForm.ts

```typescript
import { useForm } from 'react-hook-form'

import {
  type BusinessGroupFormData,
  type BusinessGroupModalData
} from '../types/BusinessGroupItem'

const alphanumericRegex = /^[\w\sáéíóúÁÉÍÓÚüÜñÑ.,;:()\-'"¡!¿?]+$/

export const useBusinessGroupForm = (initialData?: BusinessGroupModalData) => {
  const form = useForm<BusinessGroupFormData>({
    mode: 'onChange',
    defaultValues: {
      groupName: initialData?.groupName || '',
      groupState: initialData?.groupState || '',
      groupStateId: initialData?.groupStateId || '',
      groupDescription: initialData?.groupDescription || ''
    }
  })

  const validationRules = {
    groupName: {
      minLength: { value: 2, message: 'Mínimo 2 caracteres' },
      maxLength: { value: 50, message: 'Máximo 50 caracteres' },
      required: 'El nombre es obligatorio',
      pattern: {
        value: alphanumericRegex,
        message: 'Solo caracteres alfanuméricos y puntuación básica'
      }
    },
    groupStateId: {
      required: 'El estado es obligatorio'
    },
    groupDescription: {
      minLength: { value: 2, message: 'Mínimo 2 caracteres' },
      maxLength: { value: 200, message: 'Máximo 200 caracteres' },
      required: 'La descripción es obligatoria',
      pattern: {
        value: alphanumericRegex,
        message: 'Solo caracteres alfanuméricos y puntuación básica'
      }
    }
  }

  return {
    ...form,
    validationRules
  }
}

```

## src/features/business-groups/hooks/useBusinessGroupModal.ts

```typescript
import { useState, useCallback } from 'react'

import useGenerateLogs from '@/shared/hooks/useGenerateLogs'
import isDevMode from '@/shared/utils/isDevMode'

import { createEnterpriseGroups, editEnterpriseGroups } from '../services'
import {
  type BusinessGroupFormData,
  type BusinessGroupModalData,
  type ModalMode
} from '../types/BusinessGroupItem'

export const useBusinessGroupModal = (
  mode: ModalMode,
  initialData?: BusinessGroupModalData,
  setLoading?: (loading: boolean) => void,
  onSuccess?: () => void
) => {
  const [isEditing, setIsEditing] = useState(mode !== 'view')
  const [loadingSave, setLoadingSave] = useState(false)
  const { generateLogs } = useGenerateLogs()
  const handleEdit = useCallback(() => {
    setIsEditing(true)
  }, [])

  const getTitle = useCallback(() => {
    switch (mode) {
      case 'create':
        return 'Crear Grupo Empresarial'
      case 'edit':
        return 'Editar Grupo Empresarial'
      case 'view':
        return 'Detalle Grupo Empresarial'
      default:
        return 'Grupo Empresarial'
    }
  }, [mode])

  const handleSave = useCallback(
    async (formData: BusinessGroupFormData, participantIds: number[]) => {
      if (!setLoading) return
      setLoadingSave(true)
      const payload = {
        name: formData.groupName,
        statusId: formData.groupStateId,
        detail: formData.groupDescription,
        participantIds
      }

      try {
        if (mode === 'create') {
          const resultCreate = await createEnterpriseGroups(payload)
          generateLogs({
            actionType: `Creación grupo empresarial ${resultCreate.code}`,
            actionDestination: 'business-groups'
          })
          return resultCreate
        } else if (
          (mode === 'edit' || (mode === 'view' && isEditing)) &&
          initialData?.id
        ) {
          const resultEdit = await editEnterpriseGroups(initialData.id, payload)
          generateLogs({
            actionType: `Edición grupo empresarial ${resultEdit.code}`,
            actionDestination: 'business-groups'
          })
          return resultEdit
        }
      } catch (error) {
        if (isDevMode()) {
          console.error('Error guardando grupo empresarial', error)
        }
        throw error
      } finally {
        setLoadingSave(false)
      }
    },
    [mode, initialData?.id, isEditing, setLoading, onSuccess]
  )

  const shouldShowButtons = mode !== 'view' || isEditing
  const shouldShowAddParticipant = mode !== 'view' || isEditing

  return {
    isEditing,
    shouldShowButtons,
    shouldShowAddParticipant,
    getTitle,
    handleEdit,
    handleSave,
    loadingSave,
    setLoadingSave
  }
}

```

## src/features/business-groups/hooks/useBusinessGroupModals.ts

```typescript
import { useState, useCallback } from 'react'

import { type BusinessGroupItem } from '../types/BusinessGroupItem'

export interface ModalState {
  openCreateModal: boolean
  openViewModal: boolean
  openEditModal: boolean
  selectedGroupData: BusinessGroupItem | null
}

export const useBusinessGroupModals = () => {
  const [modalState, setModalState] = useState<ModalState>({
    openCreateModal: false,
    openViewModal: false,
    openEditModal: false,
    selectedGroupData: null
  })
  const [refreshTrigger, setRefreshTrigger] = useState(0)
  const openCreateModal = useCallback(() => {
    setModalState((prev) => ({ ...prev, openCreateModal: true }))
  }, [])

  const openViewModal = useCallback((groupData: BusinessGroupItem) => {
    setModalState((prev) => ({
      ...prev,
      openViewModal: true,
      selectedGroupData: groupData
    }))
  }, [])

  const openEditModal = useCallback((groupData: BusinessGroupItem) => {
    setModalState((prev) => ({
      ...prev,
      openEditModal: true,
      selectedGroupData: groupData
    }))
  }, [])

  const closeAllModals = useCallback(() => {
    setModalState({
      openCreateModal: false,
      openViewModal: false,
      openEditModal: false,
      selectedGroupData: null
    })
  }, [])

  const refreshTable = useCallback(() => {
    setRefreshTrigger((prev) => prev + 1)
  }, [])

  return {
    modalState,
    openCreateModal,
    openViewModal,
    openEditModal,
    closeAllModals,
    refreshTrigger,
    refreshTable
  }
}

```

## src/features/business-groups/hooks/useBusinessGroups.ts

```typescript
import { useCallback, useState } from 'react'

import { useToast } from '../../../shared/hooks/useToast'
import { type BusinessGroupItem } from '../types/BusinessGroupItem'

export const useBusinessGroups = () => {
  const [rows, setRows] = useState<BusinessGroupItem[]>([])
  const [selectedRows, setSelectedRows] = useState<any[]>([])
  const [selectedData, setSelectedData] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [modalAlert, setModalAlert] = useState<{
    title: string
    message?: string
    textSuccess?: string
    variant: 'warning' | 'error' | 'info' | 'success'
    textCancel?: string
    handleCancel?: () => void
    open: boolean
    onClose?: () => void
  } | null>(null)

  const {
    toastConfig,
    hideToast,
    showSuccessToast,
    showErrorToast,
    showWarningToast,
    showInfoToast
  } = useToast()

  const setThereAreSelected = useCallback(
    (newSelection: number[]) => {
      setSelectedRows(newSelection)

      const selectedData = newSelection
        .map((selectedId) =>
          rows.find((row) => String(row.id) === String(selectedId))
        )
        .filter(Boolean) as BusinessGroupItem[]

      setSelectedData(selectedData)
    },
    [rows]
  )

  const setDataRemote = (_page: number, dataTable: BusinessGroupItem[]) => {
    setRows(dataTable)
  }

  return {
    rows,
    selectedRows,
    selectedData,
    loading,
    setLoading,
    setThereAreSelected,
    setDataRemote,
    toastConfig,
    hideToast,
    showSuccessToast,
    showErrorToast,
    showWarningToast,
    showInfoToast,
    setModalAlert,
    modalAlert
  }
}

```

## src/features/business-groups/hooks/useParticipantsTable.tsx

```tsx
import {
  MaterialIcons,
  DefaultComponents,
  TRenderCellParams
} from '@nuam/common-fe-lib-components'
import { useState, useMemo, useCallback } from 'react'
import { useScreenActions } from 'store/mf-shell-useScreenActions'

import { AutoCompleteInput } from 'remoteUtilities/components-mf-utilities'
import { StatusChip } from 'remoteUtilities/statusChip'

import { BUSINESS_GROUPS_ACTIONS } from '@/shared/constants/actionCodes'
import isDevMode from '@/shared/utils/isDevMode'

import { validateParticipantHasUser } from '../services'
import { fetchParticipants } from '../utils/fetchParticipants'

export interface TableRow {
  id: number | string
  name: string
  key?: string | number
  shortName: string
  code?: string
  type: { id: number; description: string }
  documentNumber?: string
  identificationType: { id: number; description: string }
  status: { id: number; description: string }
  country: { id: number; name: string }
  isEditing: boolean
}

interface UseParticipantsTableProps {
  mode?: 'create' | 'view' | 'edit'
  setModalAlert?: (alert: any) => void
  groupName?: string
  isEditing?: boolean
  showSuccessToast?: (message: string) => void
}

export const useParticipantsTable = ({
  mode,
  setModalAlert,
  groupName,
  isEditing,
  showSuccessToast
}: UseParticipantsTableProps = {}) => {
  const [tableData, setTableData] = useState<TableRow[]>([])
  const [autoCompleteValues, setAutoCompleteValues] = useState<
    Record<string, any>
  >({})

  const { hasAction } = useScreenActions()
  const canDeleteParticipant = hasAction(
    BUSINESS_GROUPS_ACTIONS.DELETE_PARTICIPANT
  )
  const canAddParticipant = hasAction(
    BUSINESS_GROUPS_ACTIONS.ADD_ENTERPRISE_GROUPS
  )

  const fetchAvailableParticipants = useCallback(
    async (
      searchTerm: string,
      currentRowId?: string | number,
      page: number = 0,
      size: number = 10
    ) => {
      const allParticipants = await fetchParticipants(
        searchTerm,
        false,
        page,
        size
      )
      const selectedParticipantIds = tableData
        .filter(
          (row) =>
            row.key !== currentRowId &&
            !row.isEditing &&
            !String(row.id).startsWith('new_')
        )
        .map((row) => row.id)

      const filteredParticipants = (allParticipants.data || [])
        .filter(
          (participant: any) => !selectedParticipantIds.includes(participant.id)
        )
        .map((participant: any) => ({
          ...participant,
          code: participant.code,
          label: `${participant.code} - ${participant.name}`
        }))

      return {
        data: filteredParticipants,
        total: allParticipants.total
      }
    },
    [tableData]
  )

  const handleParticipantChange = useCallback(
    (rowId: number | string, option: any | null) => {
      if (option?.id) {
        setTableData((prev) =>
          prev.map((row) =>
            row.key === rowId
              ? {
                  ...row,
                  id: option?.id || 0,
                  key: option?.id || row.key,
                  name: option?.name || '',
                  code: option?.code || '',
                  shortName: option?.shortName || '',
                  documentNumber: option?.documentNumber || '',
                  type: {
                    id: option?.type?.id || 0,
                    description: option?.type?.description || ''
                  },
                  identificationType: {
                    id: option?.identificationType?.id || 0,
                    description: option?.identificationType?.description || ''
                  },
                  country: {
                    id: option?.country?.id || 0,
                    name: option?.country?.name || ''
                  },
                  status: {
                    id: option?.status?.id || 0,
                    description: option?.status?.description || ''
                  },
                  isEditing: false
                }
              : row
          )
        )
        setAutoCompleteValues((prev) => {
          const newValues = { ...prev }
          if (rowId !== option.id) {
            delete newValues[rowId]
            newValues[option.id] = option
          } else {
            newValues[rowId] = option
          }
          return newValues
        })
      } else {
        setAutoCompleteValues((prev) => ({ ...prev, [rowId]: null }))
        setTableData((prev) =>
          prev.map((row) =>
            row.key === rowId
              ? {
                  ...row,
                  name: '',
                  shortName: '',
                  code: '',
                  type: { id: 0, description: '' },
                  identificationType: { id: 0, description: '' },
                  country: { id: 0, name: '' },
                  status: { id: 0, description: '' },
                  isEditing: true
                }
              : row
          )
        )
      }
    },
    []
  )

  const handleDeleteRow = useCallback(
    (rowId: string) => {
      setTableData((prev) => {
        const filteredData = prev.filter((row) => {
          const rowKey = String(row.key)
          const rowIdString = String(row.id)
          const deleteId = String(rowId)

          const shouldKeep =
            mode === 'edit'
              ? rowKey !== deleteId && rowIdString !== deleteId
              : rowKey !== deleteId

          return shouldKeep
        })

        return filteredData
      })

      setAutoCompleteValues((prev) => {
        const copy = { ...prev }
        delete copy[rowId]
        const numericId = Number(rowId)
        if (!isNaN(numericId)) {
          delete copy[numericId]
        }
        return copy
      })
    },
    [mode]
  )

  const handleDeleteRowWithConfirmation = useCallback(
    async (rowId: string) => {
      const row = tableData.find((r) => {
        const rowKey = String(r.key)
        const rowIdString = String(r.id)
        const deleteId = String(rowId)

        return mode === 'edit'
          ? rowKey === deleteId || rowIdString === deleteId
          : rowKey === deleteId
      })

      if (!row || !setModalAlert) {
        handleDeleteRow(rowId)
        return
      }

      const entityName = row.shortName || row.name || 'este participante'

      const handleConfirmDelete = async () => {
        if (!String(row.id).startsWith('new_')) {
          try {
            const validationResult = await validateParticipantHasUser(
              String(row.id)
            )

            if (validationResult?.isValid) {
              setModalAlert({
                open: true,
                title: 'No se puede eliminar',
                message: `No es posible eliminar el participante, existen usuarios compartidos en estado activo. Por favor inactive los usuarios del participante correspondiente e intente nuevamente.`,
                textSuccess: 'Entendido',
                variant: 'error',
                onClose: () => {
                  setModalAlert({ open: false })
                },
                handleCancel: () => {
                  setModalAlert({ open: false })
                }
              })
              return
            } else {
              handleDeleteRow(rowId)
              setModalAlert({ open: false })
              showSuccessToast?.(
                'Se ha desasociado correctamente el participante.'
              )
              return
            }
          } catch (error) {
            if (isDevMode()) {
              console.error('Error al validar el participante:', error)
            }
            setModalAlert({
              open: true,
              title: 'Error de validación',
              message:
                'Ocurrió un error al validar el participante. Inténtalo de nuevo.',
              textSuccess: 'Entendido',
              variant: 'error',
              onClose: () => {
                setModalAlert({ open: false })
              },
              handleCancel: () => {
                setModalAlert({ open: false })
              }
            })
            return
          }
        } else {
          handleDeleteRow(rowId)
          setModalAlert({ open: false })
          showSuccessToast?.('Se ha desasociado correctamente el participante.')
        }
      }
      setModalAlert({
        open: true,
        title: 'Confirmar eliminación',
        message: `¿Estás seguro de eliminar el participante ${row.code ? row.code + ' - ' : ''} ${entityName}?`,
        textSuccess: 'Eliminar',
        textCancel: 'Cancelar',
        variant: 'warning',
        onClose: handleConfirmDelete,
        handleCancel: () => {
          setModalAlert({ open: false })
        }
      })
    },
    [tableData, handleDeleteRow, setModalAlert, groupName, mode]
  )

  const addNewParticipant = useCallback(() => {
    if (!canAddParticipant) return

    const newRow: TableRow = {
      id: `new_${Date.now()}`,
      key: `new_${Date.now()}`,
      code: '',
      documentNumber: '',
      name: '',
      shortName: '',
      type: { id: 0, description: '' },
      identificationType: { id: 0, description: '' },
      status: { id: 0, description: '' },
      country: { id: 0, name: '' },
      isEditing: true
    }
    setTableData((prev) => [newRow, ...prev])
  }, [canAddParticipant])

  const resetTable = useCallback(() => {
    setTableData([])
    setAutoCompleteValues({})
  }, [])

  const getTableColumns = useMemo(() => {
    const baseColumns = [
      {
        field: 'participant',
        headerName: 'Participante',
        width: 195,
        align: 'left',
        renderCell: (params: TRenderCellParams) => {
          const row = tableData.find((r) => String(r.key) === String(params.id))
          if (row?.isEditing) {
            return (
              <DefaultComponents.FormControl
                size="small"
                className="w-full max-w-[200px]"
              >
                <AutoCompleteInput
                  label="Participante"
                  fetchOptions={(
                    searchTerm: string,
                    page?: number,
                    size?: number
                  ) =>
                    fetchAvailableParticipants(
                      searchTerm,
                      params.id,
                      page,
                      size
                    )
                  }
                  onChange={(option: any) =>
                    handleParticipantChange(params.id, option)
                  }
                  value={autoCompleteValues[params.id] || null}
                  required
                  itemsPerPage={10}
                  minSearchLength={3}
                  debounceTime={300}
                  error={!autoCompleteValues[params.id] && row.isEditing}
                  helperText={
                    !autoCompleteValues[params.id] && row.isEditing
                      ? 'Selecciona un participante'
                      : ''
                  }
                  disablePortal={false}
                />
              </DefaultComponents.FormControl>
            )
          }
          return row?.code && row?.name
            ? `${row.code} - ${row.name}`
            : row?.shortName || '-'
        }
      },
      {
        field: 'country',
        headerName: 'País',
        flex: 1,
        align: 'left' as const,
        renderCell: (params: TRenderCellParams) => {
          const row = tableData.find((r) => String(r.key) === String(params.id))
          return row?.country?.name || '-'
        }
      },
      {
        field: 'participantType',
        headerName: 'Tipo de participante',
        flex: 1,
        align: 'left' as const,
        renderCell: (params: TRenderCellParams) => {
          const row = tableData.find((r) => String(r.key) === String(params.id))
          return row?.type?.description || '-'
        }
      },
      {
        field: 'idTypeParticipant',
        headerName: 'Tipo ID Participante',
        flex: 1,
        align: 'left' as const,
        renderCell: (params: TRenderCellParams) => {
          const row = tableData.find((r) => String(r.key) === String(params.id))
          return row?.identificationType?.description || '-'
        }
      },
      {
        field: 'participantId',
        headerName: 'ID participante',
        flex: 1,
        align: 'left' as const,
        renderCell: (params: TRenderCellParams) => {
          const row = tableData.find((r) => String(r.key) === String(params.id))
          return row && !row.isEditing && !String(row.id).startsWith('new_')
            ? row.documentNumber
            : '-'
        }
      },
      {
        field: 'status',
        headerName: 'Estado',
        flex: 1,
        align: 'left' as const,
        renderCell: (params: TRenderCellParams) => {
          const row = tableData.find((r) => String(r.key) === String(params.id))
          return <StatusChip value={row?.status?.description} />
        }
      }
    ]

    if ((isEditing || mode !== 'view') && canDeleteParticipant) {
      baseColumns.push({
        field: 'actions',
        headerName: 'Acciones',
        flex: 1,
        align: 'left' as const,
        renderCell: (params: TRenderCellParams) => {
          return (
            <MaterialIcons.DeleteOutlineSharp
              sx={{ color: '#FF4201', cursor: 'pointer' }}
              onClick={() => {
                handleDeleteRowWithConfirmation(String(params.id))
              }}
            />
          )
        }
      } as any)
    }
    return baseColumns
  }, [
    tableData,
    autoCompleteValues,
    handleParticipantChange,
    handleDeleteRowWithConfirmation,
    mode,
    isEditing,
    canDeleteParticipant
  ])

  return {
    tableData,
    addNewParticipant,
    resetTable,
    getTableColumns,
    setTableData,
    setAutoCompleteValues,
    canAddParticipant
  }
}

```

## src/features/business-groups/mocks/mockParticipants.ts

```typescript
export const mockParticipants = [
  {
    id: 'P001',
    name: 'Participante 1',
    type: 'Empresa',
    idType: 'NIT',
    participantId: 'NIT123456',
    state: 'Activo'
  },
  {
    id: 'P002',
    name: 'Participante 2',
    type: 'Persona Natural',
    idType: 'CC',
    participantId: 'CC987654',
    state: 'Activo'
  },
  {
    id: 'P003',
    name: 'Participante 3',
    type: 'Entidad Pública',
    idType: 'RUT',
    participantId: 'RUT555666',
    state: 'Inactivo'
  }
]

```

## src/features/business-groups/services/index.ts

```typescript
import {
  httpEnterpriseGroupsCmd,
  httpEnterpriseGroupsQuery
} from 'store/mf-axiosConfig'

import { deleteRequest, get, patch, post } from '@/shared/config/method'
import { API_ROUTES } from '@/shared/constants/endpoints'
import isDevMode from '@/shared/utils/isDevMode'

type ParamsParticipant = {
  shortName?: string
  hasEnterpriseGroup?: boolean | number
  page: number
  size: number
}

type ParamsGroup = {
  text?: string
  page: number
  size: number
}

export const getParticipants = async (params: ParamsParticipant) => {
  const searchParams = new URLSearchParams()
  if (params.shortName) searchParams.append('name', params.shortName)
  if (params.hasEnterpriseGroup !== 0) {
    searchParams.append(
      'hasEnterpriseGroup',
      params.hasEnterpriseGroup !== undefined
        ? params.hasEnterpriseGroup.toString()
        : ''
    )
  }
  searchParams.append('page', params.page.toString())
  searchParams.append('size', params.size.toString())

  const urlWithParams = `${API_ROUTES.PARTICIPANTS}?${searchParams.toString()}`
  try {
    const { data } = await get({
      axiosInstance: httpEnterpriseGroupsQuery,
      urlWithParams
    })
    return data
  } catch (error) {
    if (isDevMode()) {
      console.error('Error getting participants:', error)
    }
    throw error
  }
}
export const getEnterpriseGroups = async (params: ParamsGroup) => {
  const searchParams = new URLSearchParams()
  if (params.text) searchParams.append('text', params.text)
  searchParams.append('page', params.page.toString())
  searchParams.append('size', params.size.toString())

  const urlWithParams = `${API_ROUTES.ENTERPRISE_GROUP_SEARCH}?${searchParams.toString()}`
  try {
    const { data } = await get({
      axiosInstance: httpEnterpriseGroupsQuery,
      urlWithParams
    })
    return data
  } catch (error) {
    if (isDevMode()) {
      console.error('Error getting enterprise groups:', error)
    }
    throw error
  }
}

export const createEnterpriseGroups = async (formData: any): Promise<any> => {
  const urlWithParams = `${API_ROUTES.ENTERPRISE_GROUP}`

  try {
    const { data } = await post({
      axiosInstance: httpEnterpriseGroupsCmd,
      urlWithParams,
      data: formData
    })
    return data
  } catch (error) {
    if (isDevMode()) {
      console.error('Error creating enterprise groups:', error)
    }
    throw error
  }
}

export const editEnterpriseGroups = async (
  id: string,
  formData: any
): Promise<any> => {
  const urlWithParams = API_ROUTES.ENTERPRISE_GROUP_BY_ID(id)

  try {
    const { data } = await patch({
      axiosInstance: httpEnterpriseGroupsCmd,
      urlWithParams,
      data: formData
    })
    return data
  } catch (error) {
    if (isDevMode()) {
      console.error('Error Editings enterprise groups:', error)
    }
    throw error
  }
}

export const deleteEnterpriseGroups = async (id: string): Promise<any> => {
  const urlWithParams = API_ROUTES.ENTERPRISE_GROUP_BY_ID(id)

  try {
    const { data } = await deleteRequest({
      axiosInstance: httpEnterpriseGroupsCmd,
      urlWithParams
    })
    return data
  } catch (error) {
    if (isDevMode()) {
      console.error('Error deleting enterprise groups:', error)
    }
    throw error
  }
}

export const validateParticipantHasUser = async (
  participantId: string
): Promise<any> => {
  const urlWithParams = API_ROUTES.VALIDATE_PARTICIPANT(participantId)

  try {
    const { data } = await get({
      axiosInstance: httpEnterpriseGroupsQuery,
      urlWithParams
    })
    return data
  } catch (error) {
    if (isDevMode()) {
      console.error('Error validating participant has user:', error)
    }
    throw error
  }
}

```

## src/features/business-groups/types/BusinessGroupItem.ts

```typescript
export interface BusinessGroupItem {
  id: string
  name: string
  code: string
  status: {
    id: number
    description: string
  }
  detail: string
  participants?: Array<{
    id: number
    name: string
    shortName: string
    type: { id: number; description: string }
    identificationType: { id: number; description: string }
    status: { id: number; description: string }
    country: { id: number; name: string }
  }>
}

export type ModalMode = 'create' | 'edit' | 'view'

export interface Participant {
  id: number
  name: string
  shortName: string
  type: { id: number; description: string }
  identificationType: { id: number; description: string }
  status: { id: number; description: string }
  country: { id: number; name: string }
}

export interface BusinessGroupFormData {
  groupName: string
  groupState: string
  groupStateId: number | string
  groupDescription: string
}

export interface BusinessGroupModalData {
  id?: string
  groupName?: string
  groupState?: string
  groupStateId?: number
  groupDescription?: string
  code?: string
  participants?: Participant[]
}

export interface CreateBusinessGroupModalProps {
  mode: 'create' | 'view' | 'edit'
  initialData?: any
  onCancel: () => void
  setLoading?: (loading: boolean) => void
  refreshTable?: () => void
  loading?: boolean
  setModalAlert?: (alert: any) => void
  showSuccessToast?: (message: string) => void
  open?: boolean
}

```

## src/features/business-groups/utils/columns.tsx

```tsx
import { GridColDef } from '@mui/x-data-grid'
import { Link, TRenderCellParams } from '@nuam/common-fe-lib-components'
import { useMemo } from 'react'
import { useScreenActions } from 'store/mf-shell-useScreenActions'

import { StatusChip } from 'remoteUtilities/statusChip'

import { BUSINESS_GROUPS_ACTIONS } from '@/shared/constants/actionCodes'

export const useBusinessGroupColumns = (
  onViewDetails: (row: any) => void
): GridColDef[] => {
  const { hasAction } = useScreenActions()
  const canShowDetailOption = hasAction(
    BUSINESS_GROUPS_ACTIONS.DETAIL_ENTERPRISE_GROUPS
  )

  return useMemo(() => {
    const baseColumns = [
      ...(canShowDetailOption
        ? [
            {
              field: 'details',
              headerName: 'Detalles',
              minWidth: 120,
              flex: 1,
              sortable: false,
              filterable: false,
              renderCell: (params: TRenderCellParams) => (
                <Link
                  onClick={(e: any) => {
                    e.stopPropagation()
                    onViewDetails(params.row)
                  }}
                >
                  Ver detalle
                </Link>
              )
            }
          ]
        : []),
      {
        field: 'code',
        headerName: 'Código Grupo empresarial',
        minWidth: 180,
        flex: 1
      },
      {
        field: 'name',
        headerName: 'Grupo empresarial',
        minWidth: 180,
        flex: 1
      },
      {
        field: 'statusId',
        headerName: 'Estado',
        minWidth: 120,
        flex: 1,
        renderCell: (params: TRenderCellParams) => {
          return <StatusChip value={params.row?.status?.shortName || 'N/A'} />
        }
      },
      {
        field: 'detail',
        headerName: 'Descripción grupo empresarial',
        minWidth: 260,
        flex: 2
      }
    ]

    return baseColumns
  }, [canShowDetailOption, onViewDetails])
}

```

## src/features/business-groups/utils/duplicateNameError.ts

```typescript
export const handleDuplicateNameError = (setError: any): void => {
  setError('groupName', {
    type: 'manual',
    message: 'El nombre seleccionado ya está en uso'
  })
}

```

## src/features/business-groups/utils/fetchEnterpriseGroups.ts

```typescript
import isDevMode from '@/shared/utils/isDevMode'

import { getEnterpriseGroups } from '../services'

export const fetchEnterpriseGroups = async (
  text?: string,
  page: number = 0,
  size: number = 10
) => {
  try {
    const response = await getEnterpriseGroups({ page, size, text })
    return {
      data: response.content.map((item: { name: string; code: string }) => ({
        ...item,
        id: item.code,
        label: item.name
      })),
      total: response.totalElements
    }
  } catch (error) {
    if (isDevMode()) {
      console.error('Error fetching enterprise groups:', error)
    }
    return { data: [], total: 0 }
  }
}

```

## src/features/business-groups/utils/fetchParticipants.ts

```typescript
import isDevMode from '@/shared/utils/isDevMode'

import { getParticipants } from '../services'

export const fetchParticipants = async (
  shortName?: string,
  hasEnterpriseGroup?: boolean,
  page: number = 0,
  size: number = 10
) => {
  try {
    const response = await getParticipants({
      page,
      size,
      shortName,
      hasEnterpriseGroup
    })
    return {
      data: response.content.map((item: { shortName: string }) => ({
        ...item,
        label: item.shortName
      })),
      total: response.totalElements
    }
  } catch (error) {
    if (isDevMode()) {
      console.error('Error fetching users:', error)
    }
    return { data: [], total: 0 }
  }
}

```

## src/features/business-groups/utils/filtersConfig.ts

```typescript
import { getStatus } from '@/shared/services/statusService'

import { fetchEnterpriseGroups } from './fetchEnterpriseGroups'
import { fetchParticipants } from './fetchParticipants'

// Datepicker
export interface DatepickerFilterConfig {
  name: string
  label: string
  type: 'datepicker'
  minDate?: string | any
  maxDate?: string | any
  monthsBack?: number
}

// Select
export interface SelectFilterConfig {
  name: string
  label: string
  type: 'select'
  loadOptions?: any
  options?: any
}

// Autocomplete
export interface AutocompleteFilterConfig {
  name: string
  label: string
  type: 'autocomplete'
  fetchOptions: (searchTerm: string) => Promise<{ data: any[]; total: number }>
  itemsPerPage: number
  minSearchLength: number
  debounceTime: number
}

export type FilterConfig =
  | DatepickerFilterConfig
  | SelectFilterConfig
  | AutocompleteFilterConfig

const fetchParticipantsForAutocomplete = async (searchTerm: string) => {
  return await fetchParticipants(searchTerm, undefined, 0, 10)
}

export const filtersConfig: FilterConfig[] = [
  {
    name: 'text',
    label: 'Grupo Empresarial',
    type: 'autocomplete',
    fetchOptions: fetchEnterpriseGroups,
    itemsPerPage: 10,
    minSearchLength: 3,
    debounceTime: 300
  },
  {
    name: 'participantId',
    label: 'Participante',
    type: 'autocomplete',
    fetchOptions: fetchParticipantsForAutocomplete,
    itemsPerPage: 10,
    minSearchLength: 3,
    debounceTime: 300
  },
  {
    name: 'statusId',
    label: 'Estado',
    type: 'select',
    loadOptions: () => getStatus('GRUPO_EMPRESARIAL')
  }
]

```

## src/features/profile-management/components/FuncionalitiesStep.tsx

```tsx
import { Typography, Button, Card } from '@nuam/common-fe-lib-components'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'store/mf-store'

import { Spinner, TreeCheckbox } from 'remoteUtilities/components-mf-utilities'

import { STEP_FLOW } from '@/shared/constants'
import { localStorageUtil } from '@/shared/utils/localStorageUtil'

import { useHandleCheckedNodesChange } from '../hooks/useHandleCheckedNodesChange'
import { ProfileMode } from '../pages/ProfileManagementPage'
import { getTreeMenus } from '../services/menus'
import { type IMenuTree } from '../types/menus'
import { getProfileRegisterPath } from '../utils/profileRoutes'
import { useStepNavigation } from '../utils/useStepNavigation'

export const FuncionalitiesStep = ({ mode }: { mode: ProfileMode }) => {
  const { loadFromLocalStorage } = localStorageUtil()
  const storedFormData = useMemo(
    () => loadFromLocalStorage('formDataMantainer'),
    [loadFromLocalStorage]
  )
  const basePath = getProfileRegisterPath(mode)
  const { goToStep } = useStepNavigation(basePath, mode)

  const [treeData, setTreeData] = useState<IMenuTree>()
  const [isLoading, setIsLoading] = useState(false)
  const formData = useSelector(
    (state: RootState) => storedFormData || state.registerProfileStore
  )
  const infoUserNubo = useSelector(
    (state: RootState) => state.auth.infoUserNubo
  )
  const [hasSelectedNodes, setHasSelectedNodes] = useState(false)
  const handleCheckedNodesChange = useHandleCheckedNodesChange(
    formData,
    setHasSelectedNodes
  )

  const participantTypeId =
    mode !== 'internal-external'
      ? infoUserNubo?.participantType?.id
      : formData?.participantTypeId

  const loadTreeData = useCallback(async () => {
    setIsLoading(true)
    try {
      const data = await getTreeMenus(participantTypeId)
      setTreeData(data)
    } catch (error) {
      console.error('Error loading tree data:', error)
      setTreeData(undefined)
    } finally {
      setIsLoading(false)
    }
  }, [participantTypeId])

  useEffect(() => {
    loadTreeData()
  }, [loadTreeData])

  const handleBack = () => {
    goToStep(STEP_FLOW.DEFAULT_STEP)
  }

  const handleSubmit = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault()
      goToStep(STEP_FLOW.THIRD_STEP)
    },
    [goToStep]
  )

  const handleCheckedNodesChangeWrapper = (updatedTree: IMenuTree[]) => {
    handleCheckedNodesChange(updatedTree)
  }

  useEffect(() => {
    loadTreeData()
  }, [])

  useEffect(() => {
    const initialHasSelectedNodes =
      (formData.menuConfigurationId &&
        formData.menuConfigurationId.length > 0) ||
      (formData.screenActionIds && formData.screenActionIds.length > 0) ||
      (formData.menuConfigurations && formData.menuConfigurations.length > 0)
    if (hasSelectedNodes !== initialHasSelectedNodes) {
      setHasSelectedNodes(initialHasSelectedNodes)
    }
  }, [formData, hasSelectedNodes])

  const editData = useMemo(() => {
    if (
      !formData.menuConfigurationId &&
      !formData.screenActionIds &&
      !formData.menuConfigurations
    ) {
      return undefined
    }

    // Si hay menuConfigurations (nueva estructura), usarla
    if (formData.menuConfigurations && formData.menuConfigurations.length > 0) {
      return formData.menuConfigurations
    }

    // Mantener compatibilidad con estructura anterior
    return {
      categoryIds: [],
      moduleIds: [],
      submoduleIds: formData.menuConfigurationId || [],
      screenActionIds: formData.screenActionIds || []
    }
  }, [
    formData.menuConfigurationId,
    formData.screenActionIds,
    formData.menuConfigurations
  ])

  return (
    <>
      {isLoading && <Spinner />}
      <Card variant="outlined" className="mt-[32px] w-full p-[24px]">
        <form onSubmit={handleSubmit} noValidate>
          <Typography variant="h6">
            Funcionalidades asociadas - {formData.name}
          </Typography>
          {treeData?.categories && treeData.categories.length > 0 ? (
            <TreeCheckbox
              showSearch={true}
              filterKey="name"
              data={treeData}
              onCheckedNodesChange={handleCheckedNodesChangeWrapper}
              edit={editData}
              description={true}
            />
          ) : (
            <p className="mt-4 text-center">
              No hay funcionalidades disponibles
            </p>
          )}
          <div className="flex justify-end gap-4">
            <Button variant="text" onClick={handleBack}>
              Volver
            </Button>
            <Button disabled={!hasSelectedNodes} type="submit">
              Siguiente
            </Button>
          </div>
        </form>
      </Card>
    </>
  )
}

```

## src/features/profile-management/components/FuncionalitiesTable.tsx

```tsx
import { DefaultComponents } from '@nuam/common-fe-lib-components'
import { Fragment } from 'react/jsx-runtime'

function extractAllIdsByType(menuConfiguration: any): {
  categoryIds: number[]
  moduleIds: number[]
  submoduleIds: number[]
  screenActionIds: number[]
} {
  const categoryIds: number[] = []
  const moduleIds: number[] = []
  const submoduleIds: number[] = []
  const screenActionIds: number[] = []

  if (!menuConfiguration?.categories)
    return { categoryIds, moduleIds, submoduleIds, screenActionIds }

  menuConfiguration.categories.forEach((cat: any) => {
    categoryIds.push(cat.id)

    // Agregar screenActions de la categoría
    if (cat.screen?.screenActions) {
      cat.screen.screenActions.forEach((action: any) => {
        screenActionIds.push(action.id)
      })
    }

    ;(cat.modules || []).forEach((mod: any) => {
      moduleIds.push(mod.id)

      // Agregar screenActions del módulo
      if (mod.screen?.screenActions) {
        mod.screen.screenActions.forEach((action: any) => {
          screenActionIds.push(action.id)
        })
      }

      ;(mod.submodules || []).forEach((sub: any) => {
        submoduleIds.push(sub.id)

        // Agregar screenActions del submódulo
        if (sub.screen?.screenActions) {
          sub.screen.screenActions.forEach((action: any) => {
            screenActionIds.push(action.id)
          })
        }
      })
    })
  })

  return { categoryIds, moduleIds, submoduleIds, screenActionIds }
}

interface FunctionalitiesTableProps {
  menuConfiguration: any
  originalMenuConfiguration: any
  addedPermissions: {
    categoryIds: number[]
    moduleIds: number[]
    submoduleIds: number[]
    screenActionIds: Array<{
      id: number
      parentType: string
      parentId: number
    }>
  }
  removedPermissions: {
    categoryIds: number[]
    moduleIds: number[]
    submoduleIds: number[]
    screenActionIds: Array<{
      id: number
      parentType: string
      parentId: number
    }>
  }
}

export const FunctionalitiesTable = ({
  menuConfiguration,
  addedPermissions,
  removedPermissions,
  originalMenuConfiguration
}: FunctionalitiesTableProps) => {
  const {
    categoryIds: originalCategoryIds,
    moduleIds: originalModuleIds,
    submoduleIds: originalSubmoduleIds,
    screenActionIds: originalScreenActionIds
  } = extractAllIdsByType(originalMenuConfiguration)

  const getSelectedScreenActions = (
    screenActions: any[],
    parentType: string,
    parentId: number
  ) => {
    if (!screenActions?.length) return []

    return screenActions
      .map((action: any) => {
        const isOriginal = originalScreenActionIds.includes(action.id)
        const isAdded = addedPermissions.screenActionIds.some((added: any) =>
          typeof added === 'object'
            ? added.id === action.id &&
              added.parentType === parentType &&
              added.parentId === parentId
            : false
        )
        const isRemoved = removedPermissions.screenActionIds.some(
          (removed: any) =>
            typeof removed === 'object'
              ? removed.id === action.id &&
                removed.parentType === parentType &&
                removed.parentId === parentId
              : false
        )

        // Determinar el estado de la screenAction
        let status = 'normal'
        let shouldShow = false

        if (isOriginal && !isRemoved) {
          // Era original y NO fue removida
          status = 'normal'
          shouldShow = true
        } else if (isOriginal && isRemoved) {
          // Era original pero FUE removida
          status = 'removed'
          shouldShow = true // Mostrar en rojo
        } else if (!isOriginal && isAdded) {
          // Es nueva (agregada)
          status = 'added'
          shouldShow = true
        }

        return shouldShow ? { ...action, status } : null
      })
      .filter(Boolean) // Filtrar elementos null
  }

  const renderScreenActions = (selectedScreenActions: any[]) => {
    if (!selectedScreenActions.length) return null

    return selectedScreenActions.map((action: any, index: number) => {
      const isLast = index === selectedScreenActions.length - 1

      let color = 'inherit'
      if (action.status === 'removed') {
        color = '#d32f2f'
      } else if (action.status === 'added') {
        color = '#2e7d32'
      }

      return (
        <span key={action.id}>
          <span
            style={{
              color,
              textDecoration:
                action.status === 'removed' ? 'line-through' : 'none'
            }}
          >
            {action.description}
          </span>
          {!isLast && ', '}
        </span>
      )
    })
  }

  // CORREGIR: Mostrar originales SIEMPRE + agregados nuevos
  const categoriesToShow = menuConfiguration?.categories?.filter((cat: any) => {
    const isOriginal = originalCategoryIds.includes(cat.id)
    const isAdded = addedPermissions.categoryIds.includes(cat.id)

    // Mostrar si es original (removido o no) O si fue agregado nuevamente
    const shouldShow = isOriginal || isAdded

    return shouldShow
  })

  return (
    <DefaultComponents.TableContainer
      component={DefaultComponents.Paper}
      elevation={0}
      sx={{
        boxShadow: 'none',
        borderRadius: 2,
        overflow: 'hidden',
        marginBottom: 2
      }}
    >
      <DefaultComponents.Table size="small" sx={{ minWidth: 300 }}>
        <DefaultComponents.TableBody>
          {categoriesToShow?.map((category: any) => {
            const isOriginal = originalCategoryIds.includes(category.id)
            const isAdded = addedPermissions.categoryIds.includes(category.id)
            const isRemoved = removedPermissions.categoryIds.includes(
              category.id
            )

            // Filtrar solo las screenActions seleccionadas
            const selectedScreenActions = getSelectedScreenActions(
              category.screen?.screenActions || [],
              'category',
              category.id
            )

            return (
              <Fragment key={category.id}>
                <DefaultComponents.TableRow
                  sx={{
                    backgroundColor:
                      isAdded && !isOriginal
                        ? '#d4f7dc' // Verde solo si es realmente nuevo
                        : isRemoved && isOriginal
                          ? '#ffd6d6' // Rojo si era original y fue removido
                          : 'transparent' // Sin color si es original sin cambios
                  }}
                >
                  <DefaultComponents.TableCell
                    sx={{ py: 1, fontWeight: 'bold', fontSize: '1rem', pl: 0 }}
                  >
                    {category.name}
                  </DefaultComponents.TableCell>
                  <DefaultComponents.TableCell
                    sx={{
                      py: 1,
                      fontSize: '0.875rem',
                      pl: 0,
                      textAlign: 'right',
                      opacity: 0.87,
                      maxWidth: 250,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {renderScreenActions(selectedScreenActions)}
                  </DefaultComponents.TableCell>
                </DefaultComponents.TableRow>

                {(category.modules || [])
                  .filter((mod: any) => {
                    const wasOriginal = originalModuleIds.includes(mod.id)
                    const wasAdded = addedPermissions.moduleIds.includes(mod.id)
                    return wasOriginal || wasAdded
                  })
                  .map((module: any) => {
                    const isOriginalMod = originalModuleIds.includes(module.id)
                    const isAddedMod = addedPermissions.moduleIds.includes(
                      module.id
                    )
                    const isRemovedMod = removedPermissions.moduleIds.includes(
                      module.id
                    )

                    const selectedModuleScreenActions =
                      getSelectedScreenActions(
                        module.screen?.screenActions || [],
                        'module',
                        module.id
                      )
                    return (
                      <Fragment key={module.id}>
                        <DefaultComponents.TableRow
                          sx={{
                            backgroundColor:
                              isAddedMod && !isOriginalMod
                                ? '#d4f7dc'
                                : isRemovedMod && isOriginalMod
                                  ? '#ffd6d6'
                                  : 'transparent'
                          }}
                        >
                          <DefaultComponents.TableCell
                            sx={{
                              py: 1,
                              pl: 4,
                              fontSize: '0.875rem',
                              opacity: 0.87
                            }}
                          >
                            {module.name}
                          </DefaultComponents.TableCell>
                          <DefaultComponents.TableCell
                            sx={{
                              py: 1,
                              fontSize: '0.875rem',
                              opacity: 0.87,
                              textAlign: 'right',
                              maxWidth: 250,
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              whiteSpace: 'nowrap'
                            }}
                          >
                            {renderScreenActions(selectedModuleScreenActions)}
                          </DefaultComponents.TableCell>
                        </DefaultComponents.TableRow>

                        {(module.submodules || [])
                          .filter((sub: any) => {
                            const wasOriginal = originalSubmoduleIds.includes(
                              sub.id
                            )
                            const wasAdded =
                              addedPermissions.submoduleIds.includes(sub.id)
                            return wasOriginal || wasAdded
                          })
                          .map((submodule: any) => {
                            const isOriginalSub = originalSubmoduleIds.includes(
                              submodule.id
                            )
                            const isAddedSub =
                              addedPermissions.submoduleIds.includes(
                                submodule.id
                              )
                            const isRemovedSub =
                              removedPermissions.submoduleIds.includes(
                                submodule.id
                              )

                            const selectedSubmoduleScreenActions =
                              getSelectedScreenActions(
                                submodule.screen?.screenActions || [],
                                'submodule',
                                submodule.id
                              )

                            return (
                              <DefaultComponents.TableRow
                                key={submodule.id}
                                sx={{
                                  backgroundColor:
                                    isAddedSub && !isOriginalSub
                                      ? '#d4f7dc'
                                      : isRemovedSub && isOriginalSub
                                        ? '#ffd6d6'
                                        : 'transparent'
                                }}
                              >
                                <DefaultComponents.TableCell
                                  sx={{
                                    py: 1,
                                    pl: 8,
                                    fontSize: '0.875rem',
                                    opacity: 0.8
                                  }}
                                >
                                  {submodule.name}
                                </DefaultComponents.TableCell>
                                <DefaultComponents.TableCell
                                  sx={{
                                    py: 1,
                                    fontSize: '0.875rem',
                                    textAlign: 'right',
                                    opacity: 0.8,
                                    maxWidth: 250,
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap'
                                  }}
                                >
                                  {renderScreenActions(
                                    selectedSubmoduleScreenActions
                                  )}
                                </DefaultComponents.TableCell>
                              </DefaultComponents.TableRow>
                            )
                          })}
                      </Fragment>
                    )
                  })}
              </Fragment>
            )
          })}
        </DefaultComponents.TableBody>
      </DefaultComponents.Table>
    </DefaultComponents.TableContainer>
  )
}

```

## src/features/profile-management/components/ProfileDetailsModal.tsx

```tsx
import {
  Button,
  DefaultComponents,
  MaterialIcons,
  Alert,
  Divider,
  TextField,
  Typography
} from '@nuam/common-fe-lib-components'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Controller } from 'react-hook-form'

import {
  TreeCheckbox,
  ModalContent
} from 'remoteUtilities/components-mf-utilities'

import useGenerateLogs from '@/shared/hooks/useGenerateLogs'

import { getTreeMenus } from '../services/menus'
import { editProfile } from '../services/profiles'
import { type Permission } from '../types/permissions'
import { FunctionalitiesTable } from './FuncionalitiesTable'

const initialStatePermission: Permission = {
  categoryIds: [],
  moduleIds: [],
  submoduleIds: [],
  screenActionIds: []
}
function extractAllIdsByType(menuConfiguration: any): {
  categoryIds: number[]
  moduleIds: number[]
  submoduleIds: number[]
  screenActionIds: number[]
} {
  const categoryIds: number[] = []
  const moduleIds: number[] = []
  const submoduleIds: number[] = []
  const screenActionIds: number[] = []

  if (!menuConfiguration?.categories)
    return { categoryIds, moduleIds, submoduleIds, screenActionIds }

  menuConfiguration.categories.forEach((cat: any) => {
    categoryIds.push(cat.id)

    // Agregar screenActions de la categoría
    if (cat.screen?.screenActions) {
      cat.screen.screenActions.forEach((action: any) => {
        screenActionIds.push(action.id)
      })
    }

    ;(cat.modules || []).forEach((mod: any) => {
      moduleIds.push(mod.id)

      // Agregar screenActions del módulo
      if (mod.screen?.screenActions) {
        mod.screen.screenActions.forEach((action: any) => {
          screenActionIds.push(action.id)
        })
      }

      ;(mod.submodules || []).forEach((sub: any) => {
        submoduleIds.push(sub.id)

        // Agregar screenActions del submódulo
        if (sub.screen?.screenActions) {
          sub.screen.screenActions.forEach((action: any) => {
            screenActionIds.push(action.id)
          })
        }
      })
    })
  })

  return { categoryIds, moduleIds, submoduleIds, screenActionIds }
}

export const ProfileDetailsModal = ({
  isOpen,
  onClose,
  isTreeCheckboxVisible,
  //filteredData,
  modals,
  mode,
  t,
  errors,
  selectedRow,
  setIsTreeCheckboxVisible,
  setNodes,
  handleSubmit,
  handleModalDelete,
  control,
  handleContinue,
  refreshTable,
  isDeletable,
  isEditable
}: any) => {
  const [isLoading, setIsLoading] = useState(false)
  const [hasModifiedFunctionalities, setHasModifiedFunctionalities] =
    useState(false)
  // Estados para permisos estructurados
  const [addedPermissions, setAddedPermissions] = useState<Permission>(
    initialStatePermission
  )

  const [removedPermissions, setRemovedPermissions] = useState<Permission>(
    initialStatePermission
  )
  const [copyBackPermissions, setCopyBackPermissions] = useState<{
    addedPermissions: Permission
    removedPermissions: Permission
  }>({ addedPermissions, removedPermissions })

  // Estados para IDs originales separados por tipo
  const [originalCategoryIds, setOriginalCategoryIds] = useState<number[]>([])
  const [originalModuleIds, setOriginalModuleIds] = useState<number[]>([])
  const [originalSubmoduleIds, setOriginalSubmoduleIds] = useState<number[]>([])
  const [originalScreenActionIds, setOriginalScreenActionIds] = useState<
    number[]
  >([])
  const [currentTreeNodes, setCurrentTreeNodes] = useState<any[]>([])
  const [originalMenuConfigurations, setOriginalMenuConfigurations] = useState<
    Array<{ menuConfigurationId: number; screenActionIds: number[] }>
  >([])
  const [currentMenuData, setCurrentMenuData] = useState<any>([])

  const originalIds = useMemo(
    () => [
      ...originalCategoryIds,
      ...originalModuleIds,
      ...originalSubmoduleIds,
      ...originalScreenActionIds
    ],
    [
      originalCategoryIds,
      originalModuleIds,
      originalSubmoduleIds,
      originalScreenActionIds
    ]
  )

  const { generateLogs } = useGenerateLogs()

  const originalIdsRef = useRef<number[]>([])

  // Actualizar la ref cada vez que cambien los IDs originales
  useEffect(() => {
    originalIdsRef.current = originalIds
  }, [originalIds])

  const extractIdFromUniqueId = (uniqueId: string): number => {
    // Formato esperado: "type-id-config-configId"
    if (typeof uniqueId === 'string' && uniqueId.includes('-')) {
      const parts = uniqueId.split('-')
      if (parts.length >= 2) {
        return Number(parts[1])
      }
    }
    return Number(uniqueId) // fallback para IDs que ya son números
  }
  // Función para manejar cambios en el árbol de permisos
  const handleTreeCheckedChange = useCallback(
    (treeData: any[]) => {
      // Marcar que el usuario ha modificado las funcionalidades
      setHasModifiedFunctionalities(true)
      // Separar elementos por tipo
      const checkedCategories: number[] = []
      setCurrentTreeNodes(treeData)
      const checkedModules: number[] = []
      const checkedSubmodules: number[] = []
      const checkedScreenActions: Array<{
        id: number
        parentType: string
        parentId: number
      }> = []

      const traverse = (
        items: any[],
        parentType?: string,
        parentId?: number
      ) => {
        items.forEach((item: any) => {
          if (item.isChecked) {
            switch (item.type) {
              case 'category':
                // Usar originalId si existe, sino extraer del ID único
                const categoryId =
                  item.originalId || extractIdFromUniqueId(item.id)
                checkedCategories.push(categoryId)
                break
              case 'module':
                const moduleId =
                  item.originalId || extractIdFromUniqueId(item.id)
                checkedModules.push(moduleId)
                break
              case 'submodule':
                const submoduleId =
                  item.originalId || extractIdFromUniqueId(item.id)
                checkedSubmodules.push(submoduleId)
                break
              case 'screenAction':
                // Para screenActions siempre usar originalId
                checkedScreenActions.push({
                  id: item.originalId,
                  parentType: parentType || '',
                  parentId: parentId
                    ? typeof parentId === 'string'
                      ? extractIdFromUniqueId(parentId)
                      : parentId
                    : 0
                })
                break
              default:
                // Para elementos sin tipo, asumir que es categoría
                if (!item.type && item.id) {
                  const fallbackId =
                    item.originalId || extractIdFromUniqueId(item.id)
                  checkedCategories.push(fallbackId)
                }
            }
          }

          if (item.children && item.children.length > 0) {
            // Pasar el originalId del padre, no el ID único
            const parentOriginalId =
              item.originalId || extractIdFromUniqueId(item.id)
            traverse(item.children, item.type, parentOriginalId)
          }
        })
      }

      traverse(treeData)

      setNodes(treeData)

      // Comparar por tipos separados usando los IDs originales extraídos
      const addedCategories = checkedCategories.filter(
        (id) => !originalCategoryIds.includes(id)
      )
      const addedModules = checkedModules.filter(
        (id) => !originalModuleIds.includes(id)
      )
      const addedSubmodules = checkedSubmodules.filter(
        (id) => !originalSubmoduleIds.includes(id)
      )
      const addedScreenActions = checkedScreenActions.filter(
        (action) => !originalScreenActionIds.includes(action.id)
      )

      const removedCategories = originalCategoryIds.filter(
        (id) => !checkedCategories.includes(id)
      )
      const removedModules = originalModuleIds.filter(
        (id) => !checkedModules.includes(id)
      )
      const removedSubmodules = originalSubmoduleIds.filter(
        (id) => !checkedSubmodules.includes(id)
      )

      // CORREGIR: Necesitamos construir correctamente los screenActions removidos con contexto
      const removedScreenActions: Array<{
        id: number
        parentType: string
        parentId: number
      }> = []

      // Recorrer la configuración original para encontrar screenActions removidas con contexto
      if (selectedRow?.menuConfiguration?.categories) {
        selectedRow.menuConfiguration.categories.forEach((cat: any) => {
          if (cat.screen?.screenActions) {
            cat.screen.screenActions.forEach((action: any) => {
              const isStillChecked = checkedScreenActions.some(
                (checked) =>
                  checked.id === action.id &&
                  checked.parentType === 'category' &&
                  checked.parentId === cat.id
              )
              if (
                !isStillChecked &&
                originalScreenActionIds.includes(action.id)
              ) {
                removedScreenActions.push({
                  id: action.id,
                  parentType: 'category',
                  parentId: cat.id
                })
              }
            })
          }

          ;(cat.modules || []).forEach((mod: any) => {
            if (mod.screen?.screenActions) {
              mod.screen.screenActions.forEach((action: any) => {
                const isStillChecked = checkedScreenActions.some(
                  (checked) =>
                    checked.id === action.id &&
                    checked.parentType === 'module' &&
                    checked.parentId === mod.id
                )
                if (
                  !isStillChecked &&
                  originalScreenActionIds.includes(action.id)
                ) {
                  removedScreenActions.push({
                    id: action.id,
                    parentType: 'module',
                    parentId: mod.id
                  })
                }
              })
            }

            ;(mod.submodules || []).forEach((sub: any) => {
              if (sub.screen?.screenActions) {
                sub.screen.screenActions.forEach((action: any) => {
                  const isStillChecked = checkedScreenActions.some(
                    (checked) =>
                      checked.id === action.id &&
                      checked.parentType === 'submodule' &&
                      checked.parentId === sub.id
                  )
                  if (
                    !isStillChecked &&
                    originalScreenActionIds.includes(action.id)
                  ) {
                    removedScreenActions.push({
                      id: action.id,
                      parentType: 'submodule',
                      parentId: sub.id
                    })
                  }
                })
              }
            })
          })
        })
      }

      // Crear objetos estructurados para la tabla
      const addedPermissionsStructured = {
        categoryIds: addedCategories,
        moduleIds: addedModules,
        submoduleIds: addedSubmodules,
        screenActionIds: addedScreenActions
      }

      const removedPermissionsStructured = {
        categoryIds: removedCategories,
        moduleIds: removedModules,
        submoduleIds: removedSubmodules,
        screenActionIds: removedScreenActions // Ahora con contexto correcto
      }

      setCopyBackPermissions({
        addedPermissions: addedPermissions,
        removedPermissions: removedPermissions
      })

      setAddedPermissions(addedPermissionsStructured)
      setRemovedPermissions(removedPermissionsStructured)
    },
    [
      setNodes,
      originalCategoryIds,
      originalModuleIds,
      originalSubmoduleIds,
      originalScreenActionIds,
      selectedRow
    ]
  )

  function buildTreeWithChanges() {
    return currentTreeNodes
  }
  function getMenuConfigurationsWithScreenActions(
    nodes: any[]
  ): Array<{ menuConfigurationId: number; screenActionIds: number[] }> {
    const menuConfigMap = new Map<number, Set<number>>()

    const traverse = (items: any[]) => {
      items.forEach((item) => {
        // Si el nodo está marcado directamente y tiene menuConfigurationId
        if (
          item.isChecked &&
          typeof item.menuConfigurationId === 'number' &&
          !isNaN(item.menuConfigurationId)
        ) {
          if (!menuConfigMap.has(item.menuConfigurationId)) {
            menuConfigMap.set(item.menuConfigurationId, new Set())
          }
        }

        // Si tiene screenActions marcadas, agregar al mapa
        const checkedScreenActions =
          item.children?.filter(
            (child: any) => child.type === 'screenAction' && child.isChecked
          ) || []

        if (
          checkedScreenActions.length > 0 &&
          typeof item.menuConfigurationId === 'number' &&
          !isNaN(item.menuConfigurationId)
        ) {
          if (!menuConfigMap.has(item.menuConfigurationId)) {
            menuConfigMap.set(item.menuConfigurationId, new Set())
          }

          checkedScreenActions.forEach((action: any) => {
            // Usar originalId para las screenActions
            const screenActionId =
              action.originalId || extractIdFromUniqueId(action.id)
            menuConfigMap.get(item.menuConfigurationId)!.add(screenActionId)
          })
        }

        if (Array.isArray(item.children) && item.children.length > 0) {
          traverse(item.children)
        }
      })
    }

    traverse(nodes)

    // Convertir el mapa a array de objetos
    return Array.from(menuConfigMap.entries()).map(
      ([menuConfigurationId, screenActionIds]) => ({
        menuConfigurationId,
        screenActionIds: Array.from(screenActionIds)
      })
    )
  }

  // Función para extraer configuraciones de menú con screenActions
  function extractMenuConfigurationsWithScreenActions(
    menuConfiguration: any
  ): Array<{ menuConfigurationId: number; screenActionIds: number[] }> {
    const menuConfigurations: Array<{
      menuConfigurationId: number
      screenActionIds: number[]
    }> = []

    if (!menuConfiguration?.categories) return menuConfigurations

    menuConfiguration.categories.forEach((cat: any) => {
      // Si la categoría tiene menuConfigurationId y screenActions
      if (cat.menuConfigurationId && cat.screen?.screenActions) {
        menuConfigurations.push({
          menuConfigurationId: cat.menuConfigurationId,
          screenActionIds: cat.screen.screenActions.map(
            (action: any) => action.id
          )
        })
      }

      ;(cat.modules || []).forEach((mod: any) => {
        // Si el módulo tiene menuConfigurationId y screenActions
        if (mod.menuConfigurationId && mod.screen?.screenActions) {
          menuConfigurations.push({
            menuConfigurationId: mod.menuConfigurationId,
            screenActionIds: mod.screen.screenActions.map(
              (action: any) => action.id
            )
          })
        }

        ;(mod.submodules || []).forEach((sub: any) => {
          // Si el submódulo tiene menuConfigurationId y screenActions
          if (sub.menuConfigurationId && sub.screen?.screenActions) {
            menuConfigurations.push({
              menuConfigurationId: sub.menuConfigurationId,
              screenActionIds: sub.screen.screenActions.map(
                (action: any) => action.id
              )
            })
          }
        })
      })
    })

    return menuConfigurations
  }

  // Función para manejar el guardado
  const handleSave = async (data: any) => {
    setIsLoading(true)
    try {
      const menuConfigurations = hasModifiedFunctionalities
        ? getMenuConfigurationsWithScreenActions(buildTreeWithChanges())
        : originalMenuConfigurations

      const payload = {
        name: data.name,
        description: data.description || '',
        statusId: selectedRow?.status.id || 505,
        participantId: selectedRow?.participant?.id || 1,
        menuConfigurations
      }

      modals.setModalContent({
        title: '¿Deseas modificar el perfil?',
        message:
          'Se asignará esta modificación a todos los usuarios con este perfil configurado.',
        textSuccess: 'Guardar modificación',
        textCancel: 'Cancelar',
        variant: 'warning',
        onClick: async () => {
          try {
            const responseUpdate = await editProfile(payload, selectedRow?.id)
            modals.setModalContent(null)
            onClose(false)
            generateLogs({
              actionType: `Modificación del perfil ${data.name}`,
              actionDestination: 'user-management',
              statusID: responseUpdate ? '200' : '500'
            })
            refreshTable()
          } catch (error: any) {
            if (
              error?.message?.includes('Profile name already exists') ||
              error?.message?.includes('PROFILE_NAME_ALREADY_EXISTS')
            ) {
              modals.setModalContent({
                title: 'Perfil Duplicado',
                message: `El Perfil ${data.name} con la entidad asignada ya ha sido creado.`,
                textSuccess: 'Entendido',
                variant: 'error',
                onClick: () => modals.setModalContent(null)
              })
            } else {
              console.error('Error al guardar:', error)
            }
          } finally {
            setIsLoading(false)
          }
        },
        handleCancel: () => {
          modals.setModalContent(null)
          setIsLoading(false)
        }
      })
    } catch (error) {
      console.error('Error en handleSave:', error)
      setIsLoading(false)
    }
  }

  // Efecto para inicializar los IDs originales
  useEffect(() => {
    if (selectedRow?.menuConfiguration) {
      // Extraer menuConfigurations para el TreeCheckbox
      const menuConfigurations = extractMenuConfigurationsWithScreenActions(
        selectedRow.menuConfiguration
      )
      setOriginalMenuConfigurations(menuConfigurations)

      // Mantener IDs planos para compatibilidad con la tabla
      const { categoryIds, moduleIds, submoduleIds, screenActionIds } =
        extractAllIdsByType(selectedRow.menuConfiguration)
      setOriginalCategoryIds(categoryIds)
      setOriginalModuleIds(moduleIds)
      setOriginalSubmoduleIds(submoduleIds)
      setOriginalScreenActionIds(screenActionIds)
    }
  }, [selectedRow])

  if (!isOpen) return null

  useEffect(() => {
    const loadTreeData = async () => {
      setIsLoading(true)
      try {
        const data = await getTreeMenus(selectedRow?.participant?.type?.id || 0)
        setCurrentMenuData(data)
      } catch (error) {
        console.error('Error loading tree data:', error)
        setCurrentMenuData([])
      } finally {
        setIsLoading(false)
      }
    }
    loadTreeData()
  }, [])

  return (
    <ModalContent
      handleClose={onClose}
      loadingBtn={isLoading}
      handleAccept={
        isTreeCheckboxVisible ? handleContinue : handleSubmit(handleSave)
      }
      className="max-h-[90vh] w-4/5 overflow-y-auto"
      title={
        isTreeCheckboxVisible
          ? `Funcionalidades asociadas - ${selectedRow?.name}`
          : 'Administrador de perfiles'
      }
      btnAceptText={
        isTreeCheckboxVisible ? t('button.Continuar') : t('button.Guardar')
      }
      btnCancelText={t('button.Volver')}
      showBtnAccept={isTreeCheckboxVisible || true}
      showBtnClose={true}
      ItShouldHaveButtons={true}
      btnHorientation="end"
      btnHorientationClass="w-2/4"
      btnVariantCancel="text"
      handleCancelClick={() => {
        if (isTreeCheckboxVisible) {
          setIsTreeCheckboxVisible(false)
          setNodes([])
          setHasModifiedFunctionalities(false)
          setCurrentTreeNodes([])
          setAddedPermissions(copyBackPermissions.addedPermissions)
          setRemovedPermissions(copyBackPermissions.removedPermissions)
        } else {
          onClose(false)
        }
      }}
    >
      {isTreeCheckboxVisible ? (
        <TreeCheckbox
          showSearch={true}
          filterKey="name"
          data={currentMenuData} //filteredData
          onCheckedNodesChange={handleTreeCheckedChange}
          edit={originalMenuConfigurations} // Usar menuConfigurations en lugar de originalPermissions
        />
      ) : (
        <>
          <div className="w-2/4">
            <Controller
              name="name"
              control={control}
              rules={{
                required: 'Campo obligatorio.',
                minLength: {
                  value: 4,
                  message: 'El nombre debe tener al menos 4 caracteres.'
                },
                pattern: {
                  value: /^[a-zA-Z ]*$/,
                  message:
                    'Caracteres numéricos y/o simbolos no están permitidos.'
                }
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  required
                  size="small"
                  type="text"
                  label="Nombre de perfil"
                  placeholder="Nombre de perfil"
                  error={Boolean(errors.name)}
                  helperText={errors.name?.message}
                />
              )}
            />
          </div>
          {mode === 'internal-external' && (
            <>
              <div className="mt-3 flex justify-between">
                <Typography variant="body1" className="font-bold">
                  <p className="text-text text-base font-bold">
                    {t('profileManager.panel.grupoEmpresarial')}
                  </p>
                </Typography>
                <Typography variant="body1">
                  {(selectedRow?.participant?.enterpriseGroup.name as string) ||
                    ''}
                </Typography>
              </div>
              <Divider />

              <div className="flex justify-between">
                <Typography variant="body1" className="font-bold">
                  <p className="text-text text-base font-bold">
                    {t('profileManager.panel.entidad')}
                  </p>
                </Typography>
                <Typography variant="body1">
                  {(selectedRow?.participant?.shortName as string) || ''}
                </Typography>
              </div>
              <Divider />
            </>
          )}

          <div className="flex justify-between">
            <Typography variant="body1" className="font-bold">
              <p className="text-text text-base font-bold">
                {t('profileManager.panel.creador')}
              </p>
            </Typography>
            <Typography variant="body1">
              {(selectedRow?.lastModifyUser as string) || ''}
            </Typography>
          </div>
          <Divider />

          <div className="flex justify-between">
            <Typography variant="body1" className="font-bold">
              {t('profileManager.panel.ultimaModificacion')}
            </Typography>
            <Typography variant="body1">
              {typeof selectedRow?.lastModifyDate === 'string'
                ? selectedRow.lastModifyDate.split('T')[0]
                : ''}
            </Typography>
          </div>
          <Divider />

          <div className="mt-3 flex flex-col">
            <div className="mb-2 flex justify-between">
              <Typography variant="h6">
                {t('profileManager.panel.funcionalidadesAsociadas')}
              </Typography>
              {isEditable && (
                <DefaultComponents.Tooltip title="Editar" placement="top" arrow>
                  <MaterialIcons.DriveFileRenameOutlineOutlined
                    className="cursor-pointer"
                    onClick={() => setIsTreeCheckboxVisible(true)}
                    sx={{ color: '#3d3d3d', '&:hover': { color: '#FF411C' } }}
                  />
                </DefaultComponents.Tooltip>
              )}
            </div>

            <FunctionalitiesTable
              menuConfiguration={currentMenuData ? currentMenuData : []} //filteredData
              originalMenuConfiguration={selectedRow.menuConfiguration}
              addedPermissions={addedPermissions}
              removedPermissions={removedPermissions}
            />
          </div>
          {isDeletable && (
            <Alert icon={false} severity="error" className="mt-[12px]">
              <DefaultComponents.Grid container spacing={2}>
                <DefaultComponents.Grid size={9}>
                  <DefaultComponents.AlertTitle>
                    {t('profileManager.panel.eliminarPerfil')}
                  </DefaultComponents.AlertTitle>
                  {t('profileManager.panel.parrafoEliminarPerfil')}
                </DefaultComponents.Grid>
                <DefaultComponents.Grid size={3}>
                  <div className="flex h-full w-full items-center justify-center">
                    <Button
                      onClick={handleModalDelete}
                      color="error"
                      variant="contained"
                    >
                      <MaterialIcons.DeleteOutline />
                      {t('profileManager.panel.eliminarPerfil')}
                    </Button>
                  </div>
                </DefaultComponents.Grid>
              </DefaultComponents.Grid>
            </Alert>
          )}
        </>
      )}
    </ModalContent>
  )
}

```

## src/features/profile-management/components/ProfileStep.tsx

```tsx
import { TextField, Typography, Button } from '@nuam/common-fe-lib-components'
import { Controller } from 'react-hook-form'

import {
  ModalAlert,
  AutoCompleteInput
} from 'remoteUtilities/components-mf-utilities'

import { useProfileStepForm } from '../hooks/useProfileStepForm'
import { ProfileMode } from '../pages/ProfileManagementPage'

export const ProfileStep = ({ mode }: { mode: ProfileMode }) => {
  const {
    control,
    handleSubmit,
    errors,
    isValid,
    getValues,
    handleBack,
    onSubmit,
    modalContent,
    handleFieldChange,
    getParticipants,
    getEnterpriseGroups,
    handleBusinessGroupChange,
    handleParticipantChange,
    selectedBusinessGroup,
    isInternalExternal
  } = useProfileStepForm(mode)

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="w-full max-w-[900px]"
      >
        <Typography variant="h6" className="mb-[24px] mt-[24px]">
          Creación de perfil
        </Typography>
        <div className="mb-[24px]">
          <Controller
            name="name"
            control={control}
            rules={{
              required: 'Campo obligatorio.',
              minLength: {
                value: 3,
                message: 'Debe tener al menos 3 caracteres.'
              },
              maxLength: { value: 50, message: 'Máximo 50 caracteres.' },
              pattern: {
                value: /^[a-zA-Z ]*$/,
                message:
                  'Caracteres numéricos y/o simbolos no están permitidos.'
              }
            }}
            render={({ field }) => (
              <TextField
                {...field}
                size="small"
                required
                fullWidth
                label="Nombre del perfil"
                placeholder="Ingresa un nombre descriptivo"
                helperText={errors?.name?.message}
                error={Boolean(errors?.name)}
                slotProps={{
                  htmlInput: { maxLength: 50, minLength: 4 }
                }}
                onChange={(value) => {
                  field.onChange(value)
                  handleFieldChange('name', value)
                }}
                value={field.value}
              />
            )}
          />
        </div>
        {isInternalExternal && (
          <>
            <div className="mb-[24px]">
              <Controller
                name="enterpriseGroup"
                control={control}
                rules={{
                  required: 'Campo obligatorio.'
                }}
                render={({ field }) => (
                  <AutoCompleteInput
                    label="Grupo empresarial"
                    fetchOptions={getEnterpriseGroups}
                    onChange={(
                      option: { id: number; label: string } | null
                    ) => {
                      field.onChange(option)
                      handleBusinessGroupChange(option)
                    }}
                    value={field.value}
                    required
                    itemsPerPage={10}
                    minSearchLength={0}
                    debounceTime={300}
                    error={!!errors?.enterpriseGroup}
                    helperText={errors?.enterpriseGroup?.message}
                  />
                )}
              />
            </div>
            <div className="mb-[24px]">
              <Controller
                name="participant"
                control={control}
                rules={{
                  required: 'Campo obligatorio.'
                }}
                render={({ field }) => (
                  <AutoCompleteInput
                    label="Participante"
                    fetchOptions={getParticipants}
                    onChange={(
                      option: {
                        id: number
                        label: string
                        typeId?: number
                      } | null
                    ) => {
                      field.onChange(option)
                      handleParticipantChange(option)
                    }}
                    value={field.value}
                    required
                    disabled={!selectedBusinessGroup}
                    itemsPerPage={10}
                    minSearchLength={2}
                    debounceTime={300}
                    error={!!errors?.participant}
                    helperText={errors?.participant?.message}
                  />
                )}
              />
            </div>
          </>
        )}
        <div className="mt-6 flex w-full justify-end gap-4">
          <Button variant="text" onClick={handleBack}>
            Volver
          </Button>
          <Button
            type="submit"
            disabled={
              !isValid ||
              !getValues('name') ||
              (mode === 'internal-external' &&
                (!getValues('enterpriseGroup') || !getValues('participant')))
            }
          >
            Gestionar Permisos
          </Button>
        </div>
      </form>
      {modalContent && (
        <ModalAlert
          title={modalContent.title}
          textSuccess={modalContent.textSuccess}
          message={modalContent.message}
          variant={modalContent.variant}
          onClick={modalContent.onClick}
        />
      )}
    </>
  )
}

```

## src/features/profile-management/components/RecursiveTreeTable.tsx

```tsx
import { DefaultComponents, Typography } from '@nuam/common-fe-lib-components'
import { Fragment } from 'react/jsx-runtime'

type RecursiveTreeTableProps = {
  nodes: any[]
  level?: number
}

export const RecursiveTreeTable = ({
  nodes,
  level = 0
}: RecursiveTreeTableProps) => (
  <>
    {nodes.map((node) => (
      <Fragment key={node.id}>
        <DefaultComponents.Box
          display="grid"
          gridTemplateColumns="1fr 1fr"
          alignItems="center"
          sx={{
            borderBottom: '1px solid #e0e0e0',
            py: 1,
            pl: `${level * 32}px`
          }}
        >
          <Typography
            variant={level === 0 ? 'body1' : 'body2'}
            fontWeight={level === 0 ? 'bold' : 'normal'}
          >
            {node.name}
          </Typography>
          <Typography variant="body2" className="text-end italic opacity-85">
            {node.screen &&
              !Array.isArray(node.screen) &&
              node.screen.screenActions
                ?.map((action: any) => action.description)
                .join(', ')}
          </Typography>
        </DefaultComponents.Box>
        {node.children && node.children.length > 0 && (
          <RecursiveTreeTable nodes={node.children} level={level + 1} />
        )}
      </Fragment>
    ))}
  </>
)

```

## src/features/profile-management/components/ReviewStep.tsx

```tsx
import {
  Button,
  Typography,
  Card,
  MaterialIcons,
  DefaultComponents
} from '@nuam/common-fe-lib-components'
import { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootState } from 'store/mf-store'

import { ModalAlert, Spinner } from 'remoteUtilities/components-mf-utilities'

import { STEP_FLOW } from '@/shared/constants'
import { ModalAlertProps } from '@/shared/types/declare'
import { localStorageUtil } from '@/shared/utils/localStorageUtil'

import { useCreateProfile } from '../hooks/useCreateProfile'
import { ProfileMode } from '../pages/ProfileManagementPage'
import { getProfileRegisterPath } from '../utils/profileRoutes'
import { useStepNavigation } from '../utils/useStepNavigation'
import { RecursiveTreeTable } from './RecursiveTreeTable'

export const ReviewStep = ({ mode }: { mode: ProfileMode }) => {
  const { loadFromLocalStorage } = localStorageUtil()
  const storedFormData = useMemo(
    () => loadFromLocalStorage('formDataMantainer'),
    [loadFromLocalStorage]
  )
  const { participantId } = useSelector(
    (state: RootState) =>
      state.auth.infoUserNubo?.[0] || state.auth.infoUserNubo
  )
  const formData = useSelector(
    (state: RootState) => storedFormData || state.registerProfileStore
  )
  const navigate = useNavigate()
  const basePath = getProfileRegisterPath(mode)
  const { goToStep } = useStepNavigation(basePath, mode)

  const [modalContent, setModalContent] = useState<ModalAlertProps | null>(null)

  const handleBack = () => {
    goToStep(STEP_FLOW.SECOND_STEP)
  }

  const { handleCreate, isLoading } = useCreateProfile(
    mode,
    navigate,
    setModalContent
  )

  // Helper function to check if a child is a checked screen action
  function isCheckedScreenAction(child: any): boolean {
    return child.type === 'screenAction' && child.isChecked
  }

  // Helper function to process checked screen actions
  function processCheckedScreenActions(
    item: any,
    menuConfigMap: Map<number, Set<number>>
  ) {
    const checkedScreenActions =
      item.children?.filter(isCheckedScreenAction) || []

    if (
      checkedScreenActions.length > 0 &&
      typeof item.menuConfigurationId === 'number' &&
      !isNaN(item.menuConfigurationId)
    ) {
      if (!menuConfigMap.has(item.menuConfigurationId)) {
        menuConfigMap.set(item.menuConfigurationId, new Set())
      }

      checkedScreenActions.forEach((action: any) => {
        menuConfigMap.get(item.menuConfigurationId)!.add(action.originalId)
      })
    }
  }

  // Helper function to process checked menu configuration
  function processCheckedMenuConfig(
    item: any,
    menuConfigMap: Map<number, Set<number>>
  ) {
    if (
      item.isChecked &&
      typeof item.menuConfigurationId === 'number' &&
      !isNaN(item.menuConfigurationId)
    ) {
      if (!menuConfigMap.has(item.menuConfigurationId)) {
        menuConfigMap.set(item.menuConfigurationId, new Set())
      }
    }
  }

  function traverseMenuConfig(
    items: any[],
    menuConfigMap: Map<number, Set<number>>
  ) {
    items.forEach((item) => {
      processCheckedMenuConfig(item, menuConfigMap)
      processCheckedScreenActions(item, menuConfigMap)

      if (Array.isArray(item.children) && item.children.length > 0) {
        traverseMenuConfig(item.children, menuConfigMap)
      }
    })
  }

  function getMenuConfigurationsWithScreenActions(
    nodes: any[]
  ): Array<{ menuConfigurationId: number; screenActionIds: number[] }> {
    const menuConfigMap = new Map<number, Set<number>>()

    traverseMenuConfig(nodes, menuConfigMap)

    // Convertir el mapa a array de objetos
    return Array.from(menuConfigMap.entries()).map(
      ([menuConfigurationId, screenActionIds]) => ({
        menuConfigurationId,
        screenActionIds: Array.from(screenActionIds)
      })
    )
  }
  // Filtra solo los nodos seleccionados
  const filterCheckedNodes = (nodes: any[]): any[] => {
    return nodes
      .map((node) => {
        // Filtrar children separando screenActions de submódulos
        const children = node.children ? filterCheckedNodes(node.children) : []

        // Separar screenActions de submódulos reales
        const realChildren = children.filter(
          (child) => child.type !== 'screenAction'
        )
        const screenActions = children.filter(
          (child) => child.type === 'screenAction'
        )

        if (
          node.isChecked ||
          realChildren.length > 0 ||
          screenActions.length > 0
        ) {
          return {
            ...node,
            children: realChildren,
            screen: {
              ...node.screen,
              screenActions:
                screenActions.length > 0
                  ? screenActions.map((action) => ({
                      id: action.originalId || action.id,
                      description: action.name
                    }))
                  : node.screen?.screenActions || []
            }
          }
        }
        return null
      })
      .filter(Boolean)
  }

  function mapNodeToTree(node: any): any {
    if (!node.children || node.children.length === 0) {
      return {
        id: node.id,
        name: node.name,
        screen: node.screen
      }
    }
    return {
      id: node.id,
      name: node.name,
      screen: node.screen,
      children: node.children.map(mapNodeToTree)
    }
  }

  // Estructura para mostrar el árbol en la tabla
  const transformFunctionalitiesToTree = (functionalities: any[]): any[] => {
    return functionalities.map(mapNodeToTree)
  }

  const checkedFunctionalities = filterCheckedNodes(
    formData.functionalities || []
  )
  const treeNodes = transformFunctionalitiesToTree(checkedFunctionalities)

  const payload = {
    name: formData.name,
    description: formData.description || '',
    participantId:
      mode === 'internal-external' ? formData.participant.id : participantId,
    menuConfigurations: getMenuConfigurationsWithScreenActions(
      formData.functionalities || []
    )
  }

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="mt-[32px] w-full">
          <Card variant="outlined" className="flex flex-col gap-3">
            <div className="flex justify-between">
              <Typography variant="h6" className="mb-[24px]">
                Perfil - {formData.name}
              </Typography>
              <DefaultComponents.Tooltip title={'Editar'} placement="top">
                <MaterialIcons.DriveFileRenameOutlineOutlined
                  onClick={() => goToStep(STEP_FLOW.DEFAULT_STEP)}
                  cursor={'pointer'}
                  width={24}
                />
              </DefaultComponents.Tooltip>
            </div>
            <div className="flex justify-between">
              <Typography variant="h6" className="mb-[16px]">
                Funcionalidades Asociadas
              </Typography>
              <DefaultComponents.Tooltip title={'Editar'} placement="top">
                <MaterialIcons.DriveFileRenameOutlineOutlined
                  onClick={() => goToStep(STEP_FLOW.SECOND_STEP)}
                  cursor={'pointer'}
                  width={24}
                />
              </DefaultComponents.Tooltip>
            </div>
            <RecursiveTreeTable nodes={treeNodes} />
          </Card>
          <div className="mt-8 flex w-full justify-end gap-4">
            <Button variant="text" onClick={handleBack}>
              Volver
            </Button>
            <Button
              onClick={() => {
                handleCreate(payload)
              }}
            >
              Crear
            </Button>
          </div>
          {modalContent && (
            <ModalAlert
              title={modalContent.title}
              textSuccess={modalContent.textSuccess}
              message={modalContent.message}
              variant={modalContent.variant}
              onClick={modalContent.onClick}
            />
          )}
        </div>
      )}
    </>
  )
}

```

## src/features/profile-management/constants/index.ts

```typescript
import { FuncionalitiesStep } from '../components/FuncionalitiesStep'
import { ProfileStep } from '../components/ProfileStep'
import { ReviewStep } from '../components/ReviewStep'

export const PROFILE_STEP_COMPONENTS = {
  1: ProfileStep,
  2: FuncionalitiesStep,
  3: ReviewStep
}

```

## src/features/profile-management/hooks/useCreateProfile.ts

```typescript
import { useMemo, useState } from 'react'

import { useProfileContext } from '@/shared/context/useProfileContext'
import useGenerateLogs from '@/shared/hooks/useGenerateLogs'
import { localStorageUtil } from '@/shared/utils/localStorageUtil'

import { createProfile } from '../services/profiles'
import { getProfileListPath } from '../utils/profileRoutes'
import type { ProfileMode } from '../utils/profileRoutes'

export const useCreateProfile = (
  mode: ProfileMode,
  navigate: any,
  setModalContent: any
) => {
  const [isLoading, setIsLoading] = useState(false)
  const { generateLogs } = useGenerateLogs()
  const { setUserCreated, resetFormDataExceptUserCreated } = useProfileContext()
  const { loadFromLocalStorage } = localStorageUtil()
  const storedFormData = useMemo(
    () => loadFromLocalStorage('formDataMantainer'),
    [loadFromLocalStorage]
  )
  const target = getProfileListPath(mode)

  const handleCreate = async (payload: {
    name: string
    description?: string
    participantId: number
    menuConfigurations: Array<{
      menuConfigurationId: number
      screenActionIds: number[]
    }>
  }) => {
    try {
      setIsLoading(true)

      await createProfile(payload)

      generateLogs({
        actionType: `Creación del perfil ${storedFormData.name}`,
        actionDestination: 'ProfileAdminPage'
      })

      localStorage.removeItem('formDataMantainer')
      setUserCreated(true)
      resetFormDataExceptUserCreated()
      navigate(target)
    } catch (error) {
      setModalContent({
        title: 'Ocurrió un error inesperado',
        message:
          'Vuelve a intentarlo, si el error persiste comunícate a xxxxxx@nuamx.com o 55555555',
        variant: 'error',
        textSuccess: 'Reintentar',
        onClick: () => setModalContent(null)
      })
    } finally {
      setIsLoading(false)
    }
  }

  return { handleCreate, isLoading }
}

```

## src/features/profile-management/hooks/useFormData.ts

```typescript
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'store/mf-store'

import { localStorageUtil } from '@/shared/utils/localStorageUtil'

export const useFormData = () => {
  const { loadFromLocalStorage } = localStorageUtil()
  const storedFormData = useMemo(
    () => loadFromLocalStorage('formDataMantainer'),
    [loadFromLocalStorage]
  )
  return useSelector(
    (state: RootState) => storedFormData || state.registerProfileStore
  )
}

```

## src/features/profile-management/hooks/useHandleCheckedNodesChange.ts

```typescript
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'

import { updateFormDataMantainer } from '@/shared/store/RegisterProfile/registerProfile'
import { localStorageUtil } from '@/shared/utils/localStorageUtil'

const getSelectedTree = (nodes: any[]): any[] => {
  return nodes
    .map((node) => {
      const selectedChildren = node.children
        ? getSelectedTree(node.children)
        : []
      const isLeaf = !node.children || node.children.length === 0
      const isChecked = !!node.isChecked

      if (isChecked || selectedChildren.length > 0) {
        const allChildrenChecked =
          selectedChildren.length > 0 &&
          selectedChildren.every((child) => child.isChecked)
        return {
          ...node,
          isChecked: isLeaf ? isChecked : allChildrenChecked,
          children: selectedChildren
        }
      }
      return null
    })
    .filter(Boolean)
}

const getCheckedLeafIds = (nodes: any[]): number[] => {
  let ids: number[] = []
  nodes.map((node) => {
    const isChecked = !!node.isChecked
    const selectedChildren = node.children ? getSelectedTree(node.children) : []
    if (isChecked || selectedChildren.length > 0) {
      if (!node.children || node.children.length === 0) {
        // Solo agregar si no es una screenAction y usar originalId si existe
        if (node.type !== 'screenAction') {
          const nodeId = node.originalId || extractIdFromUniqueId(node.id)
          ids.push(nodeId)
        }
      } else {
        ids = ids.concat(getCheckedLeafIds(node.children))
      }
    }
  })
  return ids
}

// Función helper para extraer el ID original del ID único
const extractIdFromUniqueId = (uniqueId: string): number => {
  // Formato esperado: "type-id-config-configId"
  const parts = uniqueId.split('-')
  if (parts.length >= 2) {
    return Number(parts[1])
  }
  return Number(uniqueId) // fallback
}

const getCheckedMenuConfigurationIds = (nodes: any[]): number[] => {
  const ids: number[] = []
  const traverse = (items: any[]) => {
    items.forEach((item) => {
      // Si el nodo está marcado y tiene menuConfigurationId
      if (
        item.isChecked &&
        typeof item.menuConfigurationId === 'number' &&
        !isNaN(item.menuConfigurationId)
      ) {
        if (!ids.includes(item.menuConfigurationId)) {
          ids.push(item.menuConfigurationId)
        }
      }

      // Si tiene screenActions marcadas, agregar el menuConfigurationId del padre
      const hasCheckedScreenActions = item.children?.some(
        (child: any) => child.type === 'screenAction' && child.isChecked
      )

      if (
        hasCheckedScreenActions &&
        typeof item.menuConfigurationId === 'number' &&
        !isNaN(item.menuConfigurationId) &&
        !ids.includes(item.menuConfigurationId)
      ) {
        ids.push(item.menuConfigurationId)
      }

      if (Array.isArray(item.children) && item.children.length > 0) {
        traverse(item.children)
      }
    })
  }
  traverse(nodes)
  return ids
}

const getCheckedScreenActionIds = (nodes: any[]): number[] => {
  const ids: number[] = []
  const traverse = (items: any[]) => {
    items.forEach((item) => {
      // Si es una screenAction y está marcada
      if (
        item.type === 'screenAction' &&
        item.isChecked &&
        typeof item.originalId === 'number' &&
        !isNaN(item.originalId)
      ) {
        if (!ids.includes(item.originalId)) {
          ids.push(item.originalId)
        }
      }
      if (Array.isArray(item.children) && item.children.length > 0) {
        traverse(item.children)
      }
    })
  }
  traverse(nodes)
  return ids
}

const getMenuConfigurationsWithScreenActions = (
  nodes: any[]
): Array<{ menuConfigurationId: number; screenActionIds: number[] }> => {
  const menuConfigMap = new Map<number, Set<number>>()

  const traverse = (items: any[]) => {
    items.forEach((item) => {
      // Si el nodo está marcado directamente y tiene menuConfigurationId
      if (
        item.isChecked &&
        typeof item.menuConfigurationId === 'number' &&
        !isNaN(item.menuConfigurationId)
      ) {
        if (!menuConfigMap.has(item.menuConfigurationId)) {
          menuConfigMap.set(item.menuConfigurationId, new Set())
        }
      }

      // Si tiene screenActions marcadas, agregar al mapa
      const checkedScreenActions =
        item.children?.filter(
          (child: any) => child.type === 'screenAction' && child.isChecked
        ) || []

      if (
        checkedScreenActions.length > 0 &&
        typeof item.menuConfigurationId === 'number' &&
        !isNaN(item.menuConfigurationId)
      ) {
        if (!menuConfigMap.has(item.menuConfigurationId)) {
          menuConfigMap.set(item.menuConfigurationId, new Set())
        }

        checkedScreenActions.forEach((action: any) => {
          menuConfigMap.get(item.menuConfigurationId)!.add(action.originalId)
        })
      }

      if (Array.isArray(item.children) && item.children.length > 0) {
        traverse(item.children)
      }
    })
  }

  traverse(nodes)

  // Convertir el mapa a array de objetos
  return Array.from(menuConfigMap.entries()).map(
    ([menuConfigurationId, screenActionIds]) => ({
      menuConfigurationId,
      screenActionIds: Array.from(screenActionIds)
    })
  )
}

const hasCheckedNodes = (node: any): boolean => {
  if (node.isChecked && node.type !== 'screenAction') {
    return true
  }

  if (Array.isArray(node.children)) {
    return node.children.some((child: any) => hasCheckedNodes(child))
  }

  return false
}

const hasCheckedScreenActions = (node: any): boolean => {
  if (node.type === 'screenAction' && node.isChecked) {
    return true
  }

  if (Array.isArray(node.children)) {
    return node.children.some((child: any) => hasCheckedScreenActions(child))
  }

  return false
}

const markCheckedNodes = (tree: any[], checkedIds: number[]): any[] => {
  return tree.map((node) => {
    const isChecked = checkedIds.includes(Number(node.id))
    const children = node.children
      ? markCheckedNodes(node.children, checkedIds)
      : []
    return {
      ...node,
      isChecked,
      children
    }
  })
}

// ...existing code...
export const useHandleCheckedNodesChange = (
  formData: any,
  setHasSelectedNodes: (value: boolean) => void
) => {
  const dispatch = useDispatch()
  const { saveToLocalStorage } = localStorageUtil()

  return useCallback(
    (checkedNodes: any) => {
      // Función para preservar la estructura completa incluyendo types y originalIds
      const preserveNodeStructure = (nodes: any[]): any[] => {
        return nodes.map((node) => ({
          ...node,
          // Preservar todas las propiedades importantes
          type: node.type,
          originalId: node.originalId,
          menuConfigurationId: node.menuConfigurationId,
          children: node.children ? preserveNodeStructure(node.children) : []
        }))
      }

      // Preservar la estructura completa de los nodos
      const structuredCheckedNodes = preserveNodeStructure(checkedNodes)

      // Obtener menuConfigurations con sus screenActions
      const menuConfigurations = getMenuConfigurationsWithScreenActions(
        structuredCheckedNodes
      )

      // Mantener compatibilidad con estructura anterior
      const menuConfigurationIds = getCheckedMenuConfigurationIds(
        structuredCheckedNodes
      )
      const screenActionIds = getCheckedScreenActionIds(structuredCheckedNodes)

      // Verificar si hay nodos seleccionados
      const hasSelectedMenuConfigurations = structuredCheckedNodes.some(
        (node: any) => hasCheckedNodes(node)
      )

      const hasSelectedScreenActionsNodes = structuredCheckedNodes.some(
        (node: any) => hasCheckedScreenActions(node)
      )

      const hasSelected =
        hasSelectedMenuConfigurations ||
        hasSelectedScreenActionsNodes ||
        menuConfigurations.length > 0 ||
        screenActionIds.length > 0

      const updatedFormData = {
        ...formData,
        functionalities: structuredCheckedNodes, // Usar la estructura preservada
        menuConfigurations: menuConfigurations,
        // Mantener estructura anterior para compatibilidad
        menuConfigurationId: menuConfigurationIds,
        screenActionIds: screenActionIds
      }

      saveToLocalStorage('formDataMantainer', updatedFormData)
      dispatch(updateFormDataMantainer(updatedFormData))
      setHasSelectedNodes(hasSelected)
    },
    [dispatch, formData, saveToLocalStorage, setHasSelectedNodes]
  )
}

```

## src/features/profile-management/hooks/useProfileActions.ts

```typescript
import { Dispatch, SetStateAction } from 'react'

import useGenerateLogs from '@/shared/hooks/useGenerateLogs'
import { ToastState } from '@/shared/types/states'

import { DeleteProfilesById } from '../services/profiles'

export function useProfileActions({
  setIsLoading,
  setModalContent,
  refreshTable,
  setIsPanelOpen,
  setToastState
}: {
  setIsLoading: (value: boolean) => void
  setModalContent: (content: any) => void
  refreshTable: () => void
  setIsPanelOpen: (value: boolean) => void
  setToastState: Dispatch<SetStateAction<ToastState | null>>
}) {
  const { generateLogs } = useGenerateLogs()
  const deleteProfile = async (body: { id: number; name?: string }[]) => {
    try {
      setIsLoading(true)
      await DeleteProfilesById(body[0].id)
      generateLogs({
        actionType: `Eliminación del perfil ${body[0].name}`,
        actionDestination: 'ProfileAdminPage'
      })
      setToastState({
        open: true,
        text: 'Eliminado exitosamente',
        onClose: () => setToastState(null),
        duration: 3600
      })
      setModalContent(null)
      setIsPanelOpen(false)
      refreshTable()
    } catch (error) {
      if ((error as any).data?.errorCode === 'PROFILE_USER_NUBO_EXIST') {
        setIsPanelOpen(false)
        setModalContent({
          title: 'Este perfil esta en uso',
          message:
            'No puedes eliminar un perfil que este asociado a un usuario de tu entidad, modifica el usuario para poder eliminar el perfil.',
          textSuccess: 'Volver',
          variant: 'error',
          onClick: () => {
            setModalContent(null)
            setIsPanelOpen(true)
          }
        })
      } else {
        setModalContent({
          title: 'Ocurrió un error inesperado',
          message:
            'Vuelve a intentarlo, si el error persiste comunícate a xxxxxx@nuamx.com o 55555555',
          textSuccess: 'Reintentar',
          variant: 'error',
          onClick: () => setModalContent(null)
        })
      }
    } finally {
      setIsLoading(false)
    }
  }

  return { deleteProfile }
}

```

## src/features/profile-management/hooks/useProfileEdit.ts

```typescript
import { useState } from 'react'

export const useProfileEdit = ({
  originalProfileName: initialProfileName = ''
}: any) => {
  const [originalProfileName, setOriginalProfileName] =
    useState(initialProfileName)

  return { setOriginalProfileName, originalProfileName }
}

```

## src/features/profile-management/hooks/useProfileEditPanel.ts

```typescript
import { useState, useCallback } from 'react'

import { extractCheckedIds } from '../utils/extractCheckedIds'

export function useProfileEditPanel(initialNodes = []) {
  const [nodes, setNodes] = useState<any[]>(initialNodes)
  const [tempCheckedNodes, setTempCheckedNodes] = useState<any[]>([])
  const [selectedNodes, setSelectedNodes] = useState<any[]>([])

  const handleTempCheckedNodesChange = useCallback((checkedNodes: any) => {
    const checkedIds = extractCheckedIds(checkedNodes, true).map((node) => ({
      ...node,
      id: +node.id
    }))
    setNodes(checkedNodes)
    setTempCheckedNodes(checkedIds)
    setSelectedNodes(checkedIds)
  }, [])

  return {
    nodes,
    setNodes,
    tempCheckedNodes,
    selectedNodes,
    handleTempCheckedNodesChange
  }
}

```

## src/features/profile-management/hooks/useProfileManager.tsx

```tsx
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState
} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootState } from 'store/mf-store'

import { ToastState } from '@/shared/types/states'

import { getTreeMenus } from '../services/menus'
import { ProfileMode } from '../utils/profileRoutes'
import { useProfileActions } from './useProfileActions'
import { useProfileModals } from './useProfileModals'
import { useProfileTable } from './useProfileTable'
import { useProfileToasts } from './useProfileToast'

export const useProfileManager = (
  canViewDetail: boolean,
  mode: ProfileMode,
  setToastState: Dispatch<SetStateAction<ToastState | null>>
) => {
  const navigate = useNavigate()
  const [isTreeCheckboxVisible, setIsTreeCheckboxVisible] = useState(false)
  const [filteredData, setFilteredData] = useState<any>([])
  const [refresh, setRefresh] = useState(0)
  const {
    id: id_user_nubo,
    participantId,
    participantType,
    status,
    country,
    userType
  } = useSelector((state: RootState) => {
    return state.auth.infoUserNubo?.[0] || state.auth.infoUserNubo
  })

  // Table hook
  const table = useProfileTable(userType, canViewDetail, mode)

  // Modals hook
  const modals = useProfileModals()

  // Toasts hook
  const toasts = useProfileToasts()

  // Loading and errors
  const [isLoading, setIsLoading] = useState(true)
  const [errors, setErrors] = useState<{
    name?: string
    idParticipant?: string
  }>({})

  const refreshTable = useCallback(() => {
    setRefresh((prev) => prev + 1)
  }, [])
  // Actions hook
  const actions = useProfileActions({
    setIsLoading,
    setModalContent: modals.setModalContent,
    refreshTable,
    setIsPanelOpen: table.setIsPanelOpen,
    setToastState
  })

  useEffect(() => {
    const loadTreeData = async () => {
      setIsLoading(true)
      try {
        const data = await getTreeMenus(participantType?.id || 0)
        setFilteredData(data)
      } catch (error) {
        console.error('Error loading tree data:', error)
        setFilteredData([])
      } finally {
        setIsLoading(false)
      }
    }
    loadTreeData()
  }, [participantType?.id])

  return {
    navigate,
    isLoading,
    setIsLoading,
    setIsTreeCheckboxVisible,
    isTreeCheckboxVisible,
    filteredData,
    refreshTable,
    actions,
    table,
    modals,
    toasts,
    refresh,
    id_user_nubo,
    status,
    participantId,
    country,
    setErrors,
    errors,
    userType
  }
}

```

## src/features/profile-management/hooks/useProfileModals.ts

```typescript
import { useState } from 'react'

import { ModalAlertProps } from '@/shared/types/declare'

export function useProfileModals() {
  const [modalContent, setModalContent] = useState<ModalAlertProps | null>(null)
  const [isModalLoadOpen, setIsModalLoadOpen] = useState(false)
  const [progress, setProgress] = useState(0)

  return {
    modalContent,
    setModalContent,
    isModalLoadOpen,
    setIsModalLoadOpen,
    progress,
    setProgress
  }
}

```

## src/features/profile-management/hooks/useProfileStepForm.ts

```typescript
import { useMemo, useState, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootState } from 'store/mf-store'

import enterpriseGroup from '@/features/user-management/services/enterpriseGroup'
import { getParticipantForEnterpriceGroup } from '@/features/user-management/services/participantForEnterpriseGroup'
import { transformOptionsAutoComplete } from '@/features/user-management/utils/transformOptionsAutoComplete'

import { STEP_FLOW } from '@/shared/constants'
import { useProfileContext } from '@/shared/context/useProfileContext'
import { ModalAlertProps } from '@/shared/types/declare'
import { localStorageUtil } from '@/shared/utils/localStorageUtil'

import { validateProfileName } from '../services/profiles'
import {
  getProfileListPath,
  getProfileRegisterPath,
  ProfileMode
} from '../utils/profileRoutes'

type ProfileFormValues = {
  field: string[]
  name: string
  entity: number
  entityCountryId?: number
  enterpriseGroup?: { id: number; label: string } | null
  participant?: { id: number; label: string } | null
}

export function useProfileStepForm(mode: ProfileMode) {
  const { loadFromLocalStorage, saveToLocalStorage } = localStorageUtil()
  const storedFormData = useMemo(
    () => loadFromLocalStorage('formDataMantainer'),
    [loadFromLocalStorage]
  )
  const isInternalExternal = mode === 'internal-external'
  const {
    formData: contextFormData,
    updateFormData,
    resetFormDataExceptUserCreated
  } = useProfileContext()
  const formData = storedFormData || contextFormData
  const { participantId } = useSelector(
    (state: RootState) =>
      state.auth.infoUserNubo?.[0] || state.auth.infoUserNubo
  )
  const navigate = useNavigate()
  const [modalContent, setModalContent] = useState<ModalAlertProps | null>(null)

  const {
    control,
    handleSubmit,
    watch,
    setValue,
    getValues,
    formState: { errors, isValid }
  } = useForm<ProfileFormValues>({
    mode: 'onChange',
    defaultValues: {
      name: formData?.name || '',
      entity: formData?.entity || 0,
      entityCountryId: formData?.entityCountryId || undefined,
      enterpriseGroup: formData?.enterpriseGroup || null,
      participant: formData?.participant || null
    }
  })

  // Watch solo el enterpriseGroup para evitar re-renders
  const watchedEnterpriseGroup = watch('enterpriseGroup')

  const handleFieldChange = (
    field: keyof ProfileFormValues | Partial<ProfileFormValues>,
    value?: any
  ) => {
    if (typeof field === 'object') {
      Object.entries(field).forEach(([key, val]) => {
        setValue(key as keyof ProfileFormValues, val, { shouldValidate: true })
      })
      const updatedFormData = { ...formData, ...field }
      updateFormData(updatedFormData)
      saveToLocalStorage('formDataMantainer', updatedFormData)
    } else {
      setValue(field, value, { shouldValidate: true })
      const updatedFormData = { ...formData, [field]: value }
      updateFormData(updatedFormData)
      saveToLocalStorage('formDataMantainer', updatedFormData)
    }
  }

  const onSubmit = useCallback(
    async (data: any) => {
      const participantIdToValidate =
        mode === 'internal-external' ? data.participant.id : participantId

      const exists = await validateProfileName(
        data.name,
        participantIdToValidate
      )
      if (!exists.isValid) {
        setModalContent({
          title: 'Perfil Duplicado',
          message: `El Perfil ${data.name} con la entidad asignada ya ha sido creado.`,
          textSuccess: 'Entendido',
          variant: 'error',
          onClick: () => setModalContent(null)
        })
      } else {
        const pathMain = getProfileRegisterPath(mode)
        if (pathMain) {
          navigate(pathMain.replace(':step', STEP_FLOW.SECOND_STEP.toString()))
        } else {
          console.error(`Path main not found for mode: ${mode}`)
        }
      }
    },
    [navigate, mode]
  )

  const handleBack = () => {
    localStorage.removeItem('formDataMantainer')
    resetFormDataExceptUserCreated()
    const target = getProfileListPath(mode)
    navigate(target)
  }

  const handleBusinessGroupChange = useCallback(
    (option: { id: number; label: string } | null) => {
      // Limpiar participante cuando cambia el grupo empresarial
      setValue('participant', null, { shouldValidate: true })

      if (option) {
        const updatedFormData = {
          ...formData,
          enterpriseGroup: option,
          participant: null
        }
        updateFormData(updatedFormData)
        saveToLocalStorage('formDataMantainer', updatedFormData)
      }
    },
    [formData, updateFormData, saveToLocalStorage, setValue]
  )

  // Memoizar las funciones de fetch para evitar re-creaciones
  const getEnterpriseGroups = useCallback(
    async (searchText: string = '', page: number = 0, limit: number = 10) => {
      try {
        const params = {
          text: searchText,
          page,
          size: limit
        }
        const data = await enterpriseGroup(params)
        const transformData = transformOptionsAutoComplete(
          { data: data.content },
          (i) => ({ id: i.id, label: i.name })
        )
        return {
          data: transformData.data,
          total: data.totalElements || 0
        }
      } catch (error) {
        console.error('Error fetching enterprise groups:', error)
        return { data: [], total: 0 }
      }
    },
    []
  )

  const getParticipants = useCallback(
    async (searchText: string = '', page: number = 0, limit: number = 10) => {
      // Solo hacer la llamada si hay un grupo empresarial seleccionado
      if (!watchedEnterpriseGroup?.id) {
        return { data: [], total: 0 }
      }

      try {
        const data = await getParticipantForEnterpriceGroup({
          name: searchText,
          enterpriseGroupId: watchedEnterpriseGroup.id,
          page,
          size: limit
        })
        const dataOptions = transformOptionsAutoComplete(
          { data: data.content },
          (item: any) => ({
            id: item.id,
            label: item.name,
            typeId: item.type?.id // Agregar el type.id aquí
          })
        )
        return {
          data: dataOptions.data,
          total: data.totalElements || 0
        }
      } catch (error) {
        console.error('Error fetching participants:', error)
        return { data: [], total: 0 }
      }
    },
    [watchedEnterpriseGroup?.id]
  )

  const handleParticipantChange = useCallback(
    (option: { id: number; label: string; typeId?: number } | null) => {
      if (option) {
        const updatedFormData = {
          ...formData,
          participant: option,
          participantTypeId: option.typeId
        }
        updateFormData(updatedFormData)
        saveToLocalStorage('formDataMantainer', updatedFormData)
      }
    },
    [formData, updateFormData, saveToLocalStorage]
  )

  return {
    control,
    handleSubmit,
    errors,
    isValid,
    getValues,
    handleBack,
    onSubmit,
    modalContent,
    setModalContent,
    handleFieldChange,
    getParticipants,
    getEnterpriseGroups,
    handleBusinessGroupChange,
    handleParticipantChange,
    isInternalExternal,
    selectedBusinessGroup: watchedEnterpriseGroup,
    selectedParticipant: watch('participant')
  }
}

```

## src/features/profile-management/hooks/useProfileTable.tsx

```tsx
import { Link, TRenderCellParams } from '@nuam/common-fe-lib-components'
import { useMemo, useState, useCallback } from 'react'
import { useLocation } from 'react-router-dom'

import { ProfileMode } from '../utils/profileRoutes'

export function useProfileTable(
  userType: string,
  canViewDetail: boolean,
  mode: ProfileMode
) {
  const [dataTable, setDataTable] = useState<any[]>([])
  const [selectedRow, setSelectedRow] = useState<any | null>(null)
  const [isPanelOpen, setIsPanelOpen] = useState(false)
  const togglePanel = useCallback((row: any) => {
    setSelectedRow(row)
    setIsPanelOpen((prev) => !prev)
  }, [])
  const { pathname } = useLocation()
  const domain: string = import.meta.env.VITE_DOMAIN_EMAIL_NUAM ?? ''
  const validateDomain = domain?.indexOf('.')
  const domainText = domain.slice(
    0,
    validateDomain > 0 ? validateDomain : domain.length
  )
  const columns = useMemo(() => {
    const baseColumns = [
      ...(canViewDetail
        ? [
            {
              width: 134,
              headerName: 'Detalles',
              field: '',
              sortable: false,
              filterable: false,
              renderCell: (params: TRenderCellParams) => (
                <Link onClick={() => togglePanel(params.row)}>Ver detalle</Link>
              )
            }
          ]
        : []),
      {
        width: 195,
        headerName: 'Perfil',
        field: 'name',
        valueGetter: (profile: string) => profile
      },
      {
        width: 195,
        headerName: 'País participante',
        field: 'Country',
        valueGetter: (
          _: TRenderCellParams,
          dataField: { participant: { country: { name: string } } }
        ) => {
          return dataField?.participant?.country?.name || '-'
        }
      },
      {
        width: 195,
        headerName: 'Grupo empresarial',
        field: 'BusinessGroup',
        valueGetter: (
          _: TRenderCellParams,
          dataField: { participant: { enterpriseGroup: { name: string } } }
        ) => dataField.participant?.enterpriseGroup?.name
      },
      {
        width: 195,
        headerName: 'Grupo',
        field: 'Group',
        valueGetter: (
          _data: TRenderCellParams,
          dataField: { participant: { enterpriseGroup: { name: string } } }
        ) => dataField.participant?.enterpriseGroup?.name
      },
      {
        width: 195,
        headerName: 'Participante',
        field: 'participant',
        valueGetter: (participant: { name: string }) => participant?.name
      },
      {
        width: 182,
        headerName: 'Ultima modificación por',
        field: 'lastModifyUser',
        valueGetter: (lastModifyUser: string) => {
          const user: string = lastModifyUser
          const valueIsInternal = user.includes(domainText)
          const valueInternal = valueIsInternal ? domainText : user
          return mode === 'internal-nuam' ? user : valueInternal
        }
      },
      {
        width: 182,
        headerName: 'Ultima modificación',
        field: 'lastModifyDate',
        valueGetter: (lastModifyDate: string) => {
          if (lastModifyDate) {
            const [year, month, day] = lastModifyDate.split('-')
            lastModifyDate = `${day}-${month}-${year}`
          }
          return lastModifyDate
        }
      }
    ]

    return baseColumns
  }, [userType, togglePanel, canViewDetail, pathname, mode])

  return {
    columns,
    dataTable,
    setDataTable,
    selectedRow,
    setSelectedRow,
    setIsPanelOpen,
    isPanelOpen,
    togglePanel
  }
}

```

## src/features/profile-management/hooks/useProfileToast.ts

```typescript
import { useState } from 'react'

export function useProfileToasts() {
  const [isToastVisible, setIsToastVisible] = useState(false)
  const [isToastVisibleDownload, setIsToastVisibleDownload] = useState(false)

  return {
    isToastVisible,
    setIsToastVisible,
    isToastVisibleDownload,
    setIsToastVisibleDownload
  }
}

```

## src/features/profile-management/hooks/useStepValidation.ts

```typescript
export const useStepValidation = (formData: any) => ({
  isStep1Complete: Boolean(formData?.name),
  isStep2Complete: Boolean(formData?.functionalities)
})

```

## src/features/profile-management/hooks/useUserList.ts

```typescript
import { useEffect, useState } from 'react'

import { getParticipant } from '@/shared/services'

export const useUsersList = (client_user: string) => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userFetch = await getParticipant()
        userFetch.content.sort((a: { name: string }, b: { name: any }) =>
          a.name.localeCompare(b.name)
        )
        setUsers(
          userFetch.content.map(
            (user: { id: any; name: any; code: any; country: any }) => ({
              id: user.id,
              name: user.name,
              code: user.code,
              country: user.country
            })
          )
        )
      } catch (error) {
        console.error('Error fetching users:', error)
      }
    }
    fetchUsers()
  }, [client_user])
  return users
}

```

## src/features/profile-management/menus.d.ts

```typescript
export interface Category {
  id: number
  name: Description
  description: Description
  collapsible: boolean
  orderItem: number
  enabled: boolean
  categoryDeleted?: boolean
  type: Type
  screen?: CategoryScreen
  category?: Category
  moduleDeleted?: boolean
  module?: Category
  submoduleDeleted?: boolean
}

export enum Description {
  String = 'string'
}

export interface CategoryScreen {
  id: number
  code: Description
  description: Description
}

export interface Type {
  id: number
  description: Description
  category: Description
}

export interface WelcomeScreen {
  id: number
  code: Description
  description: Description
  category: Category
  module: Category
  submodule: Category
}

export interface ScreenAction {
  id: number
  code: Description
  description: Description
  enabled: boolean
  screen: WelcomeScreen
}

```

## src/features/profile-management/pages/ProfileManagementPage.tsx

```tsx
import {
  Button,
  DefaultComponents,
  MaterialIcons
} from '@nuam/common-fe-lib-components'
import { useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useScreenActions } from 'store/mf-shell-useScreenActions'

import {
  ContentWrapper,
  FilterBar,
  ModalAlert,
  NewTable,
  Spinner,
  Toast,
  useFilteredEndpoint
} from 'remoteUtilities/components-mf-utilities'
import { formattedDate } from 'remoteUtilities/formattedDate'

import { TRANSLATION } from '@/shared/constants'
import {
  EXTERNAL_PROFILE_ACTIONS,
  INTERNAL_PROFILE_ACTIONS
} from '@/shared/constants/actionCodes'
import { useProfileContext } from '@/shared/context/useProfileContext'
import { type ToastState } from '@/shared/types/states'

import { ProfileDetailsModal } from '../components/ProfileDetailsModal'
import { useProfileEdit } from '../hooks/useProfileEdit'
import { useProfileEditPanel } from '../hooks/useProfileEditPanel'
import { useProfileManager } from '../hooks/useProfileManager'
import { useUsersList } from '../hooks/useUserList'
import {
  getColumnsByMode,
  getCreatePathByMode,
  getEndpointByMode
} from '../utils/configViews'
import { filtersConfig } from '../utils/filtersConfig'

export type ProfileMode = 'internal-nuam' | 'internal-external' | 'external'

export const ProfileManagement = ({ mode }: { mode: ProfileMode }) => {
  const client_user = localStorage.getItem('username') || ''
  const { t } = useTranslation(TRANSLATION.NAMESPACE)
  const [editPermissions, setEditPermissions] = useState<any>([])
  const [toastState, setToastState] = useState<ToastState | null>(null)
  // const [isToastVisibleEdit, setIsToastVisibleEdit] = useState(false)
  const { userCreated, setUserCreated } = useProfileContext()
  useEffect(() => {
    if (userCreated) {
      setToastState({
        open: true,
        text: 'Perfil Creado exitosamente',
        onClose: () => {
          setUserCreated(false)
          setToastState(null)
        },
        duration: 3600
      })
    }
  }, [userCreated])
  const formatDate = formattedDate()
  const users = useUsersList(client_user)
  const { hasAction } = useScreenActions()
  const actionCodes = useMemo(() => {
    if (mode === 'internal-nuam') {
      return INTERNAL_PROFILE_ACTIONS
    } else if (mode === 'external' || mode === 'internal-external') {
      return EXTERNAL_PROFILE_ACTIONS
    }
    return null
  }, [mode])

  const profilePermissions = useMemo(() => {
    // Para otros modos, validar con hasAction
    return {
      canDelete: actionCodes ? hasAction(actionCodes.DELETE) : false,
      canEdit: actionCodes ? hasAction(actionCodes.EDIT) : false,
      canCreate: actionCodes ? hasAction(actionCodes.CREATE) : false,
      canDownloadReport: actionCodes
        ? hasAction(actionCodes.DOWNLOAD_REPORT)
        : false,
      canViewDetail: actionCodes ? hasAction(actionCodes.DETAIL) : false
    }
  }, [hasAction, actionCodes, mode])

  const {
    navigate,
    isLoading,
    setIsLoading,
    setIsTreeCheckboxVisible,
    isTreeCheckboxVisible,
    filteredData,
    refreshTable,
    actions,
    table,
    modals,
    refresh,
    id_user_nubo,
    status,
    participantId,
    country,
    setErrors,
    userType
  } = useProfileManager(profilePermissions.canViewDetail, mode, setToastState)

  const baseEndpoint = getEndpointByMode(mode, { participantId })
  const { endpoint } = useFilteredEndpoint(baseEndpoint)

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: table.selectedRow?.name || '',
      idParticipant: table.selectedRow?.participant?.id || ''
    }
  })

  const setDataRemote = (_page: number, data: any[]) => {
    table.setDataTable(data)
  }

  const { setOriginalProfileName } = useProfileEdit({
    setErrors,
    setModalContent: modals.setModalContent,
    setIsLoading,
    setIsPanelOpen: table.setIsPanelOpen,
    refreshTable,
    setModalContentNull: () => modals.setModalContent(null),
    participantId,
    country,
    id_user_nubo,
    status,
    client_user,
    editPermissions,
    selectedRow: table.selectedRow,
    originalProfileName: table.selectedRow?.name || ''
  })

  const {
    nodes,
    setNodes,
    tempCheckedNodes,
    selectedNodes,
    handleTempCheckedNodesChange
  } = useProfileEditPanel()

  const handleModalDelete = async () => {
    modals.setModalContent({
      title: 'Eliminar Perfil',
      message: `¿Estás seguro que deseas eliminar el perfil?`,
      textSuccess: 'Aceptar',
      textCancel: 'Cancelar',
      variant: 'warning',
      onClick: () => {
        actions.deleteProfile([
          {
            id: table.selectedRow?.id as number,
            name: table.selectedRow?.name as string | undefined
          }
        ])
      },
      handleCancel: () => modals.setModalContent(null)
    })
  }

  const handleContinue = () => {
    setEditPermissions(tempCheckedNodes)
    setIsTreeCheckboxVisible(false)
  }

  const columns = getColumnsByMode(mode, table.columns)
  const createPath = getCreatePathByMode(mode)

  useEffect(() => {
    if (table.isPanelOpen && table.selectedRow) {
      reset({
        name:
          typeof table.selectedRow.name === 'string'
            ? table.selectedRow.name
            : '',
        idParticipant: table.selectedRow.participant?.id || ''
      })
      setOriginalProfileName(
        typeof table.selectedRow.name === 'string' ? table.selectedRow.name : ''
      )
      setEditPermissions(
        Array.isArray(table.selectedRow.permissions)
          ? table.selectedRow.permissions
          : []
      )
    }
  }, [table.isPanelOpen, table.selectedRow, reset])

  if (isLoading) {
    return <Spinner />
  }

  let pageTitle = ''
  if (mode === 'internal-nuam') {
    pageTitle = t('profileManager.tituloInternal')
  } else if (mode === 'internal-external') {
    pageTitle = t('profileManager.tituloInternalExternal')
  } else {
    pageTitle = t('profileManager.tituloExternal')
  }

  const filtersConfigWithParticipantId = filtersConfig({
    participantId: mode === 'external' ? participantId : undefined,
    participantUserNubo: mode === 'internal-nuam',
    mode
  })
  const fileNameDownload = `Report_perfiles_${formatDate}.csv`
  return (
    <ContentWrapper
      title={pageTitle}
      actionBack={() => {
        const pathByMode: Record<ProfileMode, string> = {
          external: '/user-management',
          'internal-external': '/user-management/user-management-external',
          'internal-nuam': '/user-management/user-management-internal'
        }
        navigate(pathByMode[mode] ?? '/user-management')
      }}
    >
      <FilterBar config={filtersConfigWithParticipantId} width="100%" />
      <div className="flex h-full w-full flex-1 flex-col">
        {participantId && (
          <NewTable
            columns={columns}
            showDownload={profilePermissions.canDownloadReport}
            filterKey="name"
            refresh={refresh || userCreated}
            setRefresh={refresh}
            endpoint={endpoint}
            axiosInstanceKey="httpProfileQuery"
            setDataRemote={setDataRemote}
            customToolbar={
              profilePermissions.canCreate && (
                <DefaultComponents.Tooltip
                  title="Haz superado el límite de perfiles de tu plan, comunícate con un asesor si deseas aumentar tu plan"
                  arrow
                  disableInteractive
                  disableHoverListener={
                    !(mode === 'external' && table.dataTable?.length >= 5)
                  }
                >
                  <div style={{ display: 'inline-block' }}>
                    <Button
                      size="small"
                      variant="text"
                      disabled={
                        mode === 'external'
                          ? table.dataTable?.length >= 5
                          : false
                      }
                      onClick={() => navigate(createPath)}
                    >
                      <MaterialIcons.AddCircleOutlined
                        sx={{ marginRight: '8px' }}
                      />
                      CREAR PERFIL
                    </Button>
                  </div>
                </DefaultComponents.Tooltip>
              )
            }
            csvFileName={fileNameDownload}
            sx={{
              '.MuiDataGrid-columnHeader--moving': {
                backgroundColor: 'inherit !important'
              }
            }}
            checkboxSelection={false}
            showDownloadToast
          />
        )}
      </div>
      {table.isPanelOpen && (
        <ProfileDetailsModal
          isOpen={table.isPanelOpen}
          onClose={() => {
            table.setIsPanelOpen(false)
            setIsTreeCheckboxVisible(false)
            setNodes([])
          }}
          isEditable={profilePermissions.canEdit}
          isDeletable={profilePermissions.canDelete}
          mode={mode}
          isTreeCheckboxVisible={isTreeCheckboxVisible}
          filteredData={filteredData}
          handleTempCheckedNodesChange={handleTempCheckedNodesChange}
          editPermissions={editPermissions}
          handleContinue={handleContinue}
          t={t}
          selectedNodes={selectedNodes}
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          control={control}
          users={users}
          userType={userType}
          selectedRow={table.selectedRow}
          setIsTreeCheckboxVisible={setIsTreeCheckboxVisible}
          setNodes={setNodes}
          nodes={nodes}
          handleModalDelete={handleModalDelete}
          refreshTable={refreshTable}
          modals={modals}
        />
      )}

      {toastState?.open && <Toast {...toastState} />}
      {modals.modalContent && (
        <ModalAlert
          title={modals.modalContent.title}
          textSuccess={modals.modalContent.textSuccess}
          message={modals.modalContent.message}
          variant={modals.modalContent.variant}
          onClick={modals.modalContent.onClick}
          handleCancel={modals.modalContent.handleCancel ?? null}
          textCancel={
            modals.modalContent.textCancel
              ? modals.modalContent.textCancel
              : null
          }
        />
      )}
    </ContentWrapper>
  )
}

```

## src/features/profile-management/pages/RegisterProfilePage.tsx

```tsx
import { useTranslation } from 'react-i18next'

import { StepFlow } from '@/shared/components/StepFlow'
import { STEP_FLOW, STEP_KEYS, TRANSLATION } from '@/shared/constants'
import { ROUTES } from '@/shared/routes'
import { getRegisterBasePath } from '@/shared/utils/getRegisterBasePath'

import { useFormData } from '../hooks/useFormData'
import { useStepValidation } from '../hooks/useStepValidation'
import { getStepComponent } from '../utils/getStepComponent'
import { ProfileMode } from './ProfileManagementPage'

export const RegisterProfilePage = ({ mode }: { mode: ProfileMode }) => {
  const { t } = useTranslation(TRANSLATION.NAMESPACE)
  const { DEFAULT_STEP, SECOND_STEP, THIRD_STEP } = STEP_FLOW
  const formData = useFormData()
  const { isStep1Complete, isStep2Complete } = useStepValidation(formData)

  const steps: string[] = STEP_KEYS.map((key: string) => t(key))

  const pathMainByMode = {
    'internal-nuam': ROUTES.REGISTER_PROFILE_INTERNAL.pathMain,
    'internal-external': ROUTES.REGISTER_PROFILE_EXTERNAL_ADMIN.pathMain,
    external: ROUTES.REGISTER_PROFILE_EXTERNAL.pathMain
  } as const

  const basePath = getRegisterBasePath(pathMainByMode[mode] ?? '')
  return (
    <StepFlow
      steps={steps}
      getStepComponent={getStepComponent(mode)}
      isStep1Complete={isStep1Complete}
      isStep2Complete={isStep2Complete}
      getBasePath={basePath}
      firstStep={DEFAULT_STEP}
      secondStep={SECOND_STEP}
      thirdStep={THIRD_STEP}
    />
  )
}

```

## src/features/profile-management/services/menus.ts

```typescript
import { httpProfileQuery } from 'store/mf-axiosConfig'

import { get } from '@/shared/config/method'
import { API_ROUTES } from '@/shared/constants/endpoints'
import isDevMode from '@/shared/utils/isDevMode'

import { IMenuTree } from '../types/menus'

export const getTreeMenus = async (
  participantType?: string
): Promise<IMenuTree> => {
  const urlWithParams = `${API_ROUTES.TREE_MENUS}?typeId=${participantType ?? ''}`
  try {
    const { data } = await get({
      axiosInstance: httpProfileQuery,
      urlWithParams
    })
    return data
  } catch (error) {
    if (isDevMode()) {
      console.error('Error getting tree menus:', error)
    }
    throw error
  }
}

```

## src/features/profile-management/services/profiles.ts

```typescript
import axios from 'axios'
import {
  httpProfileCmd,
  httpProfileQuery,
  httpUserManagment
} from 'store/mf-axiosConfig'

import { getCommonHeaders } from '@/shared/utils/headerServices'

export const editProfile = async (
  formData: { name: string; description?: string; participantId?: number },
  idProfile: number
): Promise<any> => {
  try {
    const headers = await getCommonHeaders()

    const response = await httpProfileCmd.patch(
      `/profile/${idProfile}`,
      formData,
      {
        headers
      }
    )
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(
        error.response.data.error ||
          error.response.data.errorMessage ||
          'Failed to create user'
      )
    }
    throw new Error('Failed to create user')
  }
}

export const createProfile = async (formData: {
  name: string
  description?: string
  participantId: number
  menuConfigurations: Array<{
    menuConfigurationId: number
    screenActionIds: number[]
  }>
}): Promise<any> => {
  try {
    const headers = await getCommonHeaders()

    const response = await httpProfileCmd.post(`/profile`, formData, {
      headers
    })
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(
        error.response.data.error ||
          error.response.data.errorMessage ||
          'Failed to create user'
      )
    }
    throw new Error('Failed to create user')
  }
}

export const createPermissionsByProfile = async (
  formData: { id: number; name?: string },
  idProfile: number
): Promise<any> => {
  try {
    const headers = await getCommonHeaders()

    await httpUserManagment.post(
      `/profile/${idProfile}/permissions`,
      formData,
      {
        headers
      }
    )
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(
        error.response.data.error ||
          error.response.data.errorMessage ||
          'Failed to create user'
      )
    }
    throw new Error('Failed to create user')
  }
}

export const deletePermissionByProfile = async (
  body: { id: number; name?: string }[],
  idProfile: number
): Promise<any> => {
  try {
    const headers = await getCommonHeaders()

    await httpUserManagment.delete(`/profile/${idProfile}/permissions`, {
      headers,
      data: body
    })
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(
        error.response.data.error ||
          error.response.data.errorMessage ||
          'Failed to delete profile'
      )
    }
    throw new Error('Failed to delete profile')
  }
}

export const DeleteProfilesById = async (idProfile: number): Promise<any> => {
  try {
    const headers = await getCommonHeaders()

    await httpProfileCmd.delete(`/profile/${idProfile}`, {
      headers
    })
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw { errorCode: error.response.status, data: error.response.data }
    }
    throw error
  }
}

export const getProfilesByNameAndParticipant = async (
  nameProfile: string | undefined,
  idParticipant?: number | undefined
) => {
  try {
    const headers = await getCommonHeaders()
    const params: any = {}
    if (nameProfile) params.profileName = nameProfile
    if (idParticipant) params.participantId = idParticipant

    const response = await httpProfileQuery.get('/profile', {
      headers,
      params: params
    })
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error || 'Failed to get permissions')
    }
    throw new Error('Failed to get permissions')
  }
}
export const getProfilesByIdParticipant = async (idParticipant: number) => {
  try {
    const headers = await getCommonHeaders()

    const response = await httpProfileQuery.get(
      `/profile/participant/${idParticipant}`,
      {
        headers
      }
    )
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error || 'Failed to get profiles')
    }
    throw new Error('Failed to get profiles')
  }
}

export const validateProfileName = async (
  profileName: string,
  participantId?: number
) => {
  try {
    const headers = await getCommonHeaders()

    const response = await httpProfileQuery.get(
      `/profile/name/validate?profileName=${profileName}&participantId=${participantId}`,
      {
        headers
      }
    )
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error || 'Failed to get profiles')
    }
    throw new Error('Failed to get profiles')
  }
}

```

## src/features/profile-management/types/menus.d.ts

```typescript
export interface AccessTypeEntity {
  id: number
  code: number
  description: string
  name: string
}

export interface Status {
  id: number
  description: string
  category: string
}

export interface ScreenActionList {
  id: number
  code: string
  description: string
  enabled: boolean
  screen: Screen
  screenPattern: null
  activeAccessType: null
}

export interface Screen {
  id: number
  code: string
  description: string
  screenActionList?: ScreenActionList[]
}

export interface Submodule {
  id?: string | number
  name?: string
  [key: string]: any
}

export interface Module {
  name: string
  submodules?: Submodule[]
  [key: string]: any
}

export interface MenuCategory {
  name: string
  modules?: Module[]
  [key: string]: any
}

export interface ModuleInfo {
  categoryName: string
  moduleName: string
  submodules: Submodule[]
}

export interface IMenuTree {
  categories: Category[]
}

export interface Category {
  id: number
  name: string
  description: string
  collapsible: boolean
  orderItem: number
  categoryDeleted: boolean
  modules: Module[]
}

export interface Module {
  id: number
  name: string
  description: string
  collapsible: boolean
  orderItem: number
  moduleDeleted: boolean
  submodules: Submodule[]
}

export interface Submodule {
  id: number
  name: string
  description: string
  collapsible: boolean
  orderItem: number
  submoduleDeleted: boolean
}

```

## src/features/profile-management/types/permissions.d.ts

```typescript
export interface Permission {
  categoryIds: number[]
  moduleIds: number[]
  submoduleIds: number[]
  screenActionIds: Array<{
    id: number
    parentType: string
    parentId: number
  }>
}

```

## src/features/profile-management/utils/configViews.ts

```typescript
import { ProfileMode } from '../pages/ProfileManagementPage'

export const getEndpointByMode = (
  mode: ProfileMode,
  param: { participantId?: string }
) => {
  switch (mode) {
    case 'external':
      return `/profile?participantId=${param.participantId}`
    case 'internal-external':
      return `/profile?participantNubo=false`
    case 'internal-nuam':
      return `/profile?participantNubo=true`
  }
}

export const getCreatePathByMode = (mode: ProfileMode) => {
  switch (mode) {
    case 'external':
      return '/user-management/profile-management/external/create/1'
    case 'internal-external':
      return '/user-management/profile-management/external-admin/create/1'
    case 'internal-nuam':
      return '/user-management/profile-management/internal/create/1'
  }
}

export const getColumnsByMode = (mode: ProfileMode, fallback: any[]) => {
  const remove = (fields: string[]) =>
    fallback.filter((col) => !fields.includes(String(col.field)))

  switch (mode) {
    case 'external':
      return remove(['BusinessGroup', 'Country', 'Participant'])

    case 'internal-external':
      return remove(['Group'])

    case 'internal-nuam':
      return remove(['BusinessGroup', 'Group', 'Country', 'Participant'])

    default:
      return fallback
  }
}

```

## src/features/profile-management/utils/extractCheckedIds.ts

```typescript
export const extractCheckedIds = (
  nodes: any[],
  isEdit: boolean = false
): any[] => {
  let ids: any[] = []
  nodes.forEach((node) => {
    if (isEdit || node.isChecked) {
      ids.push({ id: node.id, name: node.name })
    }
    if (node.children && node.children.length > 0) {
      ids = ids.concat(extractCheckedIds(node.children, isEdit))
    }
  })
  return ids
}

```

## src/features/profile-management/utils/fetchProfiles.ts

```typescript
import { getProfilesAutocomplete } from '@/shared/services'
import isDevMode from '@/shared/utils/isDevMode'

import { ProfileMode } from './profileRoutes'

export const fetchProfiles = async ({
  page = 0,
  size = 10,
  participantId,
  participantUserNubo,
  text,
  mode
}: {
  text?: string
  page: number
  size: number
  participantId?: number
  participantUserNubo?: boolean
  mode?: ProfileMode
}) => {
  try {
    let response = await getProfilesAutocomplete({
      page,
      size,
      text,
      participantId,
      participantUserNubo,
      mode
    })

    if (
      (!response.content || response.content.length === 0) &&
      /^\d+$/.test(text || '')
    ) {
      response = await getProfilesAutocomplete({
        page,
        size,
        profileId: text,
        participantId,
        participantUserNubo,
        mode
      })
    }

    return {
      data: (response.content || []).map(
        (item: { name: string; id: number }) => ({
          id: item.name,
          label: item.name
        })
      ),
      total: response.totalElements
    }
  } catch (error) {
    if (isDevMode()) {
      console.error('Error fetching profiles:', error)
    }
    return { data: [], total: 0 }
  }
}

```

## src/features/profile-management/utils/fetchProfilesLastModify.ts

```typescript
import { lastModifyUserAutocomplete } from '@/shared/services'
import isDevMode from '@/shared/utils/isDevMode'

export const fetchModifyUser = async ({
  page = 0,
  size = 10,
  participantId,
  participantUserNubo,
  text
}: {
  text?: string
  page: number
  size: number
  participantId?: number
  participantUserNubo?: boolean
}) => {
  try {
    let response = await lastModifyUserAutocomplete({
      page,
      size,
      text,
      participantId,
      participantUserNubo
    })

    if (
      (!response.content || response.content.length === 0) &&
      /^\d+$/.test(text || '')
    ) {
      response = await lastModifyUserAutocomplete({
        page,
        size,
        profileId: text,
        participantId,
        participantUserNubo
      })
    }

    return {
      data: (response.content || []).map(
        (item: { lastModifyUser: string }) => ({
          id: item.lastModifyUser,
          label: item.lastModifyUser
        })
      ),
      total: response.totalElements
    }
  } catch (error) {
    if (isDevMode()) {
      console.error('Error fetching profiles:', error)
    }
    return { data: [], total: 0 }
  }
}

```

## src/features/profile-management/utils/filtersConfig.ts

```typescript
import { fetchProfiles } from './fetchProfiles'
import { fetchModifyUser } from './fetchProfilesLastModify'
import { ProfileMode } from './profileRoutes'

// Datepicker
export interface DatepickerFilterConfig {
  name: string
  label: string
  type: 'datepicker'
  minDate?: string | any
  maxDate?: string | any
  monthsBack?: number
}

// Select
export interface SelectFilterConfig {
  name: string
  label: string
  type: 'select'
  loadOptions?: any
  options?: any
}

// Autocomplete
export interface AutocompleteFilterConfig {
  name: string
  label: string
  type: 'autocomplete'
  fetchOptions: (searchTerm: string) => Promise<{ data: any[]; total: number }>
  itemsPerPage: number
  minSearchLength: number
  debounceTime: number
}

export type FilterConfig =
  | DatepickerFilterConfig
  | SelectFilterConfig
  | AutocompleteFilterConfig

export const filtersConfig = ({
  participantId,
  participantUserNubo,
  mode
}: {
  participantId?: number
  participantUserNubo?: boolean
  mode?: ProfileMode
}): FilterConfig[] => {
  return [
    {
      name: 'profileName',
      label: 'Perfil',
      type: 'autocomplete',
      fetchOptions: async (
        text?: string,
        page: number = 0,
        size: number = 10
      ) =>
        await fetchProfiles({
          participantId,
          page: page,
          size: size,
          text,
          participantUserNubo,
          mode
        }),
      itemsPerPage: 10,
      minSearchLength: 3,
      debounceTime: 300
    },
    {
      name: 'lastModifyUser',
      label: 'Ultima modificación por',
      type: 'autocomplete',
      fetchOptions: async (
        text?: string,
        page: number = 0,
        size: number = 10
      ) => {
        return await fetchModifyUser({
          participantId,
          page: page,
          size: size,
          text,
          participantUserNubo
        })
      },
      itemsPerPage: 10,
      minSearchLength: 3,
      debounceTime: 300
    }
  ]
}

```

## src/features/profile-management/utils/getStepComponent.ts

```typescript
import { createElement } from 'react'

import { STEP_FLOW } from '@/shared/constants'
import { createStepComponentResolver } from '@/shared/utils/createStepComponentResolver'

import { PROFILE_STEP_COMPONENTS } from '../constants'
import type { ProfileMode } from '../pages/ProfileManagementPage'

const withMode = (C: any, mode: ProfileMode) => (props: any) =>
  createElement(C, { ...props, mode })

export const getStepComponent = (mode: ProfileMode) =>
  createStepComponentResolver(
    {
      1: withMode(PROFILE_STEP_COMPONENTS[1], mode),
      2: withMode(PROFILE_STEP_COMPONENTS[2], mode),
      3: withMode(PROFILE_STEP_COMPONENTS[3], mode)
    },
    withMode(PROFILE_STEP_COMPONENTS[STEP_FLOW.DEFAULT_STEP], mode)
  )

```

## src/features/profile-management/utils/isValidStepNumber.ts

```typescript
import { FIRST_STEP, TOTAL_STEPS } from '../constants/step'

export const isValidStepNumber = (step: number) =>
  step >= FIRST_STEP && step <= TOTAL_STEPS

```

## src/features/profile-management/utils/profileRoutes.ts

```typescript
import { ROUTES } from '@/shared/routes'

export type ProfileMode = 'internal-nuam' | 'internal-external' | 'external'

export const PROFILE_ROUTES_CONFIG = {
  register: {
    'internal-nuam': ROUTES.REGISTER_PROFILE_INTERNAL.path,
    'internal-external': ROUTES.REGISTER_PROFILE_EXTERNAL_ADMIN.path,
    external: ROUTES.REGISTER_PROFILE_EXTERNAL.path
  },
  list: {
    'internal-nuam': ROUTES.PROFILE_MANAGEMENT_INTERNAL.path,
    'internal-external': ROUTES.PROFILE_MANAGEMENT_EXTERNAL_ADMIN.path,
    external: ROUTES.PROFILE_MANAGEMENT_EXTERNAL.path
  }
} as const

export const getProfileRegisterPath = (mode: ProfileMode): string => {
  return PROFILE_ROUTES_CONFIG.register[mode]
}

export const getProfileListPath = (mode: ProfileMode): string => {
  return PROFILE_ROUTES_CONFIG.list[mode]
}

```

## src/features/profile-management/utils/useStepNavigation.ts

```typescript
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

export const useStepNavigation = (
  basePath: string | undefined,
  mode: string
) => {
  const navigate = useNavigate()

  const goToStep = useCallback(
    (step: number) => {
      if (basePath) {
        navigate(basePath.replace(':step', step.toString()))
      } else {
        console.error(`Path main not found for mode: ${mode}`)
      }
    },
    [navigate, basePath, mode]
  )

  return { goToStep }
}

```

## src/features/user-management/components/AssignContentPermissions.tsx

```tsx
import { Dispatch, SetStateAction, useMemo, useState } from 'react'

import { Table } from 'remoteUtilities/components-mf-utilities'

import useHandleEyeClick from '../hooks/useHandleEyeClick'
import { DataProfileSelect } from '../types/AssignPermissions'
import { Profile as ProfileTable, RootObject } from '../types/fieldTable'
import { Profile } from '../types/userTypes'
import DetailPermissions from './DetailPermissions'

interface Props {
  dataTable: ProfileTable[]
  profiles: Profile[]
  tab: number
  setLoading: (value: boolean) => void
  filter: Record<string, number> | undefined
  setDataProfile: Dispatch<SetStateAction<DataProfileSelect>>
  selectedProfile: any
}

const AssignContentPermissions = ({
  dataTable,
  profiles,
  tab,
  setLoading,
  filter,
  setDataProfile,
  selectedProfile
}: Props) => {
  const [isModalEyeOpen, setIsModalEyeOpen] = useState(false)

  const profileTab = profiles![tab]

  const participant = profileTab?.participant
  const changeSelectProfile = (selection: {
    name: string
    permissions: RootObject | undefined
    id: string
  }) => {
    let updatedFormData = {
      [participant?.name ?? '']: {
        id: selection.id.toString(),
        name: selection.name,
        permissions: selection.permissions,
        participantId: participant?.id
      }
    }
    setDataProfile((current) => ({ ...current, ...updatedFormData }))
  }
  const { handleEyeClick, selectProfile } = useHandleEyeClick({
    setIsModalEyeOpen,
    setLoading
  })
  const filterParticipant = filter?.[participant.name]

  const nameProfileSelect = useMemo(
    () =>
      dataTable.find((profile) => {
        return profile.id === filterParticipant
      }),
    [dataTable, filterParticipant]
  )
  return (
    <>
      <div className="-mt-4">
        <Table
          data={dataTable}
          selectedProfile={selectedProfile}
          onProfileSelect={changeSelectProfile}
          handleEyeClick={handleEyeClick}
          height="36rem"
          activaModalConfirmation={false}
        />
      </div>
      <DetailPermissions
        closeModalDetail={() => {
          setIsModalEyeOpen(false)
        }}
        isModalEyeOpen={isModalEyeOpen}
        idProfile={selectProfile}
        nameProfile={nameProfileSelect?.name}
      />
    </>
  )
}

export default AssignContentPermissions

```

## src/features/user-management/components/AssignPermissions.tsx

```tsx
import { ReactNode, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'store/mf-store'

import {
  CustomTabs,
  ModalAlert,
  Toast
} from 'remoteUtilities/components-mf-utilities'

import useGenerateLogs from '@/shared/hooks/useGenerateLogs'

import { TypeUser } from '../constants/typeUser'
import useGetProfilePermissions from '../hooks/useGetProfilePermissions'
import { updateProfileService } from '../services/updateProfile'
import { DataProfileSelect } from '../types/AssignPermissions'
import { type UserDetailsProps } from '../types/userTypes'
import AssignContentPermissions from './AssignContentPermissions'
import SearchProfile from './SearchProfile'

const AssignPermissions: React.FC<UserDetailsProps> = ({
  setLoading,
  setRefresh,
  setIsPanelOpen,
  detailUser,
  propsAssignPermissions: { modalConfirm, setModalConfirm }
}) => {
  const profiles = detailUser?.profiles!
  const currentProfile = useMemo(() => {
    const data: DataProfileSelect = {}
    profiles?.forEach((profile) => {
      data[profile.participant.name] = {
        name: profile?.name ?? '',
        permissions: profile?.permissions,
        id: profile?.id,
        participantId: profile.participant.id
      }
    })
    return data
  }, [profiles])
  const [dataProfile, setDataProfile] =
    useState<DataProfileSelect>(currentProfile)
  const [tab, setTab] = useState(0)
  const idUser = detailUser.id!
  const { userType, participantId: participantSessionId } = useSelector(
    (state: RootState) => {
      return state.auth.infoUserNubo
    }
  )
  const [modalError, setModalError] = useState<{
    showError: boolean
    message: string
  } | null>({
    showError: false,
    message: ''
  })

  const [isToastVisible, setIsToastVisible] = useState(false)

  const profileTab = detailUser.profiles![tab]

  const participant = profileTab?.participant

  const participantId = participant?.id

  const [filter, setFilter] = useState<Record<string, number>>()
  const filterParticipant = filter?.[participant.name]

  const handleFilterChange = (value: number) => {
    setFilter((current) => ({ ...current, [participant.name]: value }))
  }

  const { permissionsProfile: dataTable } = useGetProfilePermissions({
    idParticipant: participantId,
    profileId: filterParticipant?.toString()
  })

  const { generateLogs } = useGenerateLogs()

  const handleProfileSave = async () => {
    let updatedFormData = dataProfile

    try {
      await updateProfileService(idUser, updatedFormData)
      setIsToastVisible(true)
      generateLogs({
        actionType: 'Asignacion de un nuevo perfil',
        actionDestination: 'Asignacion del perfil exitosa',
        statusID: '200'
      })
    } catch (error) {
      setDataProfile(currentProfile)
      updatedFormData = currentProfile
      generateLogs({
        actionType: 'Asignacion de un nuevo perfil',
        actionDestination: 'Error al asignar un nuevo perfil',
        statusID: '500'
      })
      setModalError({
        showError: true,
        message:
          'Vuelve a intentarlo, si el error persiste, comunicate a xxxxxx@nuamx.com o 55555555'
      })
    }
    return updatedFormData
  }
  const handleClose = () => {
    setModalConfirm(false)
    setDataProfile(currentProfile)
  }
  const selectedProfile = dataProfile?.[participant.name]
    ? dataProfile[participant.name]
    : currentProfile[participant.name]
  const participantTabs = detailUser?.profiles?.reduce(
    (acc, profile) => {
      if (
        TypeUser.INTERNAL === userType ||
        participantSessionId === profile.participant?.id
      ) {
        acc.tabs.push({ label: profile?.participant?.name ?? '' })
        acc.content.push(
          <AssignContentPermissions
            dataTable={dataTable}
            tab={tab}
            setLoading={setLoading}
            filter={filter}
            profiles={profiles}
            setDataProfile={setDataProfile}
            selectedProfile={selectedProfile}
          />
        )
      }
      return acc
    },
    {
      tabs: [] as { label: string }[],
      content: [] as ReactNode[]
    }
  )

  return (
    <>
      <div className="mt-[24px] w-1/2">
        <SearchProfile
          participantId={participantId}
          handleFilterChange={handleFilterChange}
        />
      </div>
      <CustomTabs
        tabs={participantTabs?.tabs}
        tabsContent={participantTabs?.content}
        onChange={(e: number) => {
          setTab(e)
        }}
        currentTab={tab}
      />
      {isToastVisible && (
        <Toast
          text={`Perfil del usuario ${detailUser.name} modificado exitosamente.`}
          onClose={() => {
            setIsToastVisible(!isToastVisible)
            setRefresh((current: boolean) => !current)
            setIsPanelOpen(false)
          }}
          duration={1500}
        />
      )}
      {modalError?.showError && (
        <ModalAlert
          title={'Ocurrió un error inesperado'}
          message={modalError?.message}
          orientation="horizontal"
          onClick={() => {
            setModalError(null)
          }}
          textSuccess={'Volver'}
          variant="error"
        />
      )}
      {modalConfirm && (
        <ModalAlert
          message={`<strong>¿Estás seguro de cambiar el perfil asociado a la cuenta del usuario ${
            detailUser.name ?? ''
          }?</strong>`}
          onClick={async () => await handleProfileSave()}
          variant="warning"
          title="Cambio de perfil"
          textSuccess="Cambiar Perfil"
          handleCancel={handleClose}
          orientation="horizontal"
        />
      )}
    </>
  )
}
export default AssignPermissions

```

## src/features/user-management/components/AssignProfileWithFilter.tsx

```tsx
import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  AutoCompleteInput,
  ModalAlert,
  Table
} from 'remoteUtilities/components-mf-utilities'

import RenderOptionAutoComplete from '@/shared/components/RenderOptionAutoComplete'

import useGetProfilePermissions from '../hooks/useGetProfilePermissions'
import getProfilePermissions from '../services/getProfilePermissions'
import { Profile } from '../types/userTypes'
import { transformOptionsAutoComplete } from '../utils/transformOptionsAutoComplete'

const AssignProfileWithFilter = ({
  onSearchProfile,
  participantId,
  participantName,
  searchProfile,
  onProfileSelect,
  handleEyeClick,
  selectedProfile
}: {
  onSearchProfile: (participant: string, profile: Profile) => void
  participantId: number
  participantName: string
  searchProfile: Profile
  onProfileSelect: (profile: Profile, participant: string) => void
  handleEyeClick: (idProfile: number) => Promise<void>
  selectedProfile: {
    name: string | undefined
    permissions: never[]
    id: number | undefined
  }
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const navigate = useNavigate()
  const { permissionsProfile: dataTable } = useGetProfilePermissions({
    idParticipant: participantId,
    profileId: searchProfile?.id.toString()
  })

  const profilePermissionsService = useCallback(
    async (searchText: string, _page?: number, _limit?: number) => {
      const data = await getProfilePermissions({
        idParticipant: participantId,
        profileName: searchText,
        profileId: searchProfile?.id?.toString()
      })
      const dataOptions = transformOptionsAutoComplete({ data }, (item) => ({
        id: item.id,
        label: item.name
      }))
      return dataOptions
    },
    [participantId, searchProfile?.id]
  )
  const validExistProfile = async () => {
    const profiles = await profilePermissionsService(participantName)
    if (profiles.data.length === 0) {
      setIsModalOpen(false)
    } else {
      setIsModalOpen(true)
    }
  }
  useEffect(() => {
    validExistProfile()
  }, [])

  return (
    <>
      {isModalOpen && (
        <ModalAlert
          title="Perfiles no disponibles"
          textSuccess="Aceptar"
          message="Actualmente no hay perfiles disponibles para asignar."
          variant="warning"
          onClick={() => {
            setIsModalOpen(false)
            navigate('/user-management/profile-management')
          }}
        />
      )}
      <div className="max-w-[354px]">
        <AutoCompleteInput
          label="Buscar"
          renderOption={RenderOptionAutoComplete}
          itemsPerPage={10}
          minSearchLength={0}
          debounceTime={300}
          onChange={(e: any) => {
            onSearchProfile(participantName, e)
          }}
          fetchOptions={profilePermissionsService}
          value={searchProfile}
        />
      </div>
      <Table
        data={dataTable}
        selectedProfile={selectedProfile}
        onProfileSelect={(profile: Profile) => {
          onProfileSelect(profile, participantName)
        }}
        handleEyeClick={handleEyeClick}
        activaModalConfirmation={false}
      />
    </>
  )
}

export default AssignProfileWithFilter

```

## src/features/user-management/components/ChangeStatusUser.tsx

```tsx
import { Dispatch, SetStateAction, useState } from 'react'
import { useTranslation } from 'react-i18next'

import {
  ModalAlert,
  SelectNuam,
  Toast
} from 'remoteUtilities/components-mf-utilities'

import {
  messagesUpdatedStatus,
  Status as EnumStatus,
  textBtnStates,
  userStatus
} from '@/features/user-management/constants/status'

import useGenerateLogs from '@/shared/hooks/useGenerateLogs'
import { type ModalAlertState } from '@/shared/types/states'

import { type ResponseStatus } from '../types/statusService'

interface Status {
  category?: string
  description?: string
  id?: number
}

interface ChangeStateUserProps {
  status: Status
  userName: string
  setRefresh: Dispatch<SetStateAction<boolean>>
  setLoading: (value: boolean) => void
  userId: number
  optionsStatus: ResponseStatus
  userEmail: string
}
export const ChangeStateUser = ({
  userId,
  userName,
  userEmail,
  setRefresh,
  status,
  optionsStatus
}: ChangeStateUserProps) => {
  const [isToastVisible, setIsToastVisible] = useState(false)
  const { t } = useTranslation('gestion')
  const [modalAlertState, setModalAlertState] =
    useState<ModalAlertState | null>(null)
  const [currentStatus, setCurrentStatus] = useState<Status>(status)
  const { generateLogs } = useGenerateLogs()
  const messageCurrentUpdated =
    messagesUpdatedStatus[
      currentStatus?.description?.toString() as keyof typeof messagesUpdatedStatus
    ]
  const handleStatusChange = (item: Status) => {
    if (currentStatus.id !== item.id) {
      const isSuspended =
        status.description === EnumStatus.SUSPENDED &&
        item.description === EnumStatus.ACTIVE
      const stateCurrent =
        textBtnStates[
          item?.description?.toString() as keyof typeof textBtnStates
        ]
      setModalAlertState({
        open: true,
        title: t('adminUsers.changeStatusTitle', {
          status: stateCurrent,
          name: userName
        }),
        message: isSuspended
          ? 'Ten en cuenta que actualmente se encuentra Suspendido'
          : '',
        orientation: 'horizontal',
        onClick: () => {
          setCurrentStatus(item)
          updateUserStatus(item.id!)
          setModalAlertState(null)
        },
        textSuccess: t('adminUsers.btnChangeAccount', {
          typeAccount: stateCurrent?.toUpperCase()
        }),
        textCancel: t('adminUsers.cancel'),
        handleCancel: () => {
          setCurrentStatus((current) => current)
          setModalAlertState(null)
        },
        variant: 'warning'
      })
    } else {
      setCurrentStatus(status)
      setModalAlertState(null)
    }
  }

  const updateUserStatus = async (newStatus: string | number) => {
    try {
      const { sendEmailUser } = await import('../services/sendEmail')
      const { changeStatus } = await import('../services/changeStatus')
      await changeStatus(userId, newStatus)
      setRefresh((current: boolean) => !current)
      setIsToastVisible(true)
      generateLogs({
        actionType: 'Cambio de estado de usuario',
        actionDestination: 'Actualizacion del cambio de estado de usuario',
        statusID: '200'
      })
      if (newStatus === userStatus.ACTIVE) {
        await sendEmailUser(userEmail.toString(), {
          codeTemplate: 'NOTIFICATION_UNBLOCK'
        })
      }
    } catch (error: any) {
      const message = error?.response?.data?.errorMessageDetail ?? error.message

      setModalAlertState({
        open: true,
        variant: 'error',
        title: 'Ocurrió un error inesperado',
        message: t(`adminUsers.${message}`),
        onClick: () => {
          setModalAlertState(null)
        },
        textSuccess: 'Volver'
      })
      setCurrentStatus(status)
      generateLogs({
        actionType: 'Cambio de estado de usuario',
        actionDestination: 'Error al actualizar el estado'
      })
    }
  }

  return (
    <>
      <SelectNuam
        size="small"
        onChange={(option: {
          category: string
          description: string
          id: number
        }) => {
          handleStatusChange(option)
        }}
        value={currentStatus}
        options={optionsStatus}
        labelKey="description"
        valueKey="description"
        formControlProps={{
          fullWidth: true,
          sx: {
            height: '28px',
            maxHeight: '28px',
            '& .MuiInputBase-root': {
              height: '100%',
              fontSize: '16px',
              alignItems: 'center',
              paddingTop: true ? '4px' : '0px',
              opacity: 0.6
            },
            '& .MuiSelect-select': {
              paddingY: '4px',
              fontSize: '16px',
              display: 'flex',
              alignItems: 'center'
            },
            '& .MuiInputLabel-root': {
              fontSize: '16px',
              top: '4px',
              transform: 'translate(14px, 4px) scale(1)',
              transition: 'all 0.2s ease',
              '&.MuiInputLabel-shrink': {
                transform: 'translate(14px, -9px) scale(0.75)'
              },
              display: true ? 'block' : 'none'
            },
            '& .MuiInputLabel-shrink': {
              display: 'none'
            }
          }
        }}
        showClearIndicator={false}
      />
      {modalAlertState?.open && <ModalAlert {...modalAlertState} />}
      {isToastVisible && (
        <Toast
          text={messageCurrentUpdated}
          onClose={() => setIsToastVisible(!isToastVisible)}
          duration={1800}
        />
      )}
    </>
  )
}

```

## src/features/user-management/components/CountriesFilter.tsx

```tsx
import { Select } from '@nuam/common-fe-lib-components'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'store/mf-store'

import { SelectNuam } from 'remoteUtilities/components-mf-utilities'

import { getCountriesService } from '@/features/user-management/services/countries'

import useParamsFilter from '../hooks/useParamsFilter'
import { FiltersTableProps } from '../types/FiltersTable'

const CountriesFilter = ({
  filtersTable,
  setFiltersTable,
  typeFilter
}: FiltersTableProps) => {
  const [optionsCountries, setOptionsCountries] = useState([])
  const { name: participantName, profileId } = useSelector(
    (state: RootState) => state.auth.infoUserNubo
  )
  const params = useParamsFilter({
    typeFilter,
    profileFilter: filtersTable.profile?.label,
    participantFilter: filtersTable.participant?.name
  })
  const fetchOptionsStatus = async () => {
    const resData = await getCountriesService({
      status: filtersTable.status?.id,
      email: filtersTable.email?.label,
      username: filtersTable.username?.label,
      ...params
    })
    setOptionsCountries(resData as any)
  }
  useEffect(() => {
    if (participantName && profileId) {
      fetchOptionsStatus()
    }
  }, [filtersTable, participantName, profileId])
  return (
    <div className="min-w-36 flex-1">
      <SelectNuam
        label="Pais"
        options={optionsCountries}
        formControlProps={{ fullWidth: true }}
        size="small"
        labelKey="name"
        valueKey="name"
        onChange={(e: any) => {
          setFiltersTable({
            ...filtersTable,
            country: e
          })
        }}
      />
    </div>
  )
}

export default CountriesFilter

```

## src/features/user-management/components/DetailInfoUser.tsx

```tsx
import { Typography } from '@nuam/common-fe-lib-components'

interface DetailInfoProps {
  label: string
  value?: string
}
const DetailInfo = ({ label, value }: DetailInfoProps) => {
  return (
    <div className="mt-4 flex justify-between border-b pb-4">
      <Typography variant="body1" className="font-bold">
        {label ? label : ''}
      </Typography>
      <Typography variant="body1">{value}</Typography>
    </div>
  )
}

export default DetailInfo

```

## src/features/user-management/components/DetailPermissions.tsx

```tsx
import { Typography } from '@nuam/common-fe-lib-components'
import { useTranslation } from 'react-i18next'

import { Modal } from 'remoteUtilities/components-mf-utilities'

import useDetailForProfile from '../hooks/useDetailForProfile'
import DetailPermissionsUser from './DetailPermissionsUser'

function DetailPermissions({
  isModalEyeOpen,
  closeModalDetail,
  idProfile,
  nameProfile
}: {
  isModalEyeOpen: Boolean
  closeModalDetail: () => void
  idProfile?: number
  nameProfile?: string
}) {
  const { t } = useTranslation('gestion')
  const { detailPermissions } = useDetailForProfile(idProfile!)

  return (
    isModalEyeOpen && (
      <Modal handleClose={closeModalDetail} hiddenIconClose>
        <Typography className="mb-4 text-xl font-bold">
          {t('detailsProfile')} {nameProfile && ' - ' + nameProfile}
        </Typography>
        <div className="max-h-55vh overflow-auto xl:max-h-60vh 2xl:max-h-70vh">
          <DetailPermissionsUser
            detailsPermissions={[
              {
                name: detailPermissions?.name!,
                views: detailPermissions!
              }
            ]}
          />
        </div>
      </Modal>
    )
  )
}

export default DetailPermissions

```

## src/features/user-management/components/DetailPermissionsUser.tsx

```tsx
import { Divider, Typography } from '@nuam/common-fe-lib-components'
import React from 'react'

import { RootObject } from '../types/fieldTable'

const DetailPermissionsUser = ({
  detailsPermissions
}: {
  detailsPermissions: {
    name: string
    views?: Partial<RootObject>
  }[]
}) => {
  return detailsPermissions.map((item) => {
    return (
      <div>
        <Typography variant="body1" className="mt-1 py-4 font-bold">
          {item.name}
        </Typography>
        <Divider />
        <div>
          {item?.views?.menuConfiguration?.categories.map((category) => {
            const actions: string[] = []
            if (category.screen?.screenActions) {
              category.screen.screenActions.forEach((action) => {
                actions.push(action?.description)
              })
            }
            return (
              <React.Fragment key={category.name}>
                <div className="categoria flex items-center justify-between border-b">
                  <Typography
                    variant="body1"
                    className="py-3 text-sm font-bold"
                  >
                    {category.name}
                  </Typography>
                  {actions.length > 0 && (
                    <Typography
                      variant="body1"
                      className="my-3 ml-4 mr-2 max-w-50% text-sm"
                    >
                      {actions.join(', ')}
                    </Typography>
                  )}
                </div>
                <Divider />
                <div className="module">
                  {category?.modules.map((module) => {
                    const actions: string[] = []
                    if (module.screen?.screenActions) {
                      module.screen.screenActions.forEach((action) => {
                        actions.push(action?.description)
                      })
                    }
                    return (
                      <React.Fragment key={module.id}>
                        <div className="flex items-center justify-between border-b">
                          <Typography
                            key={module.id}
                            variant="body1"
                            className="ml-8 py-3 text-sm"
                          >
                            {module.name}
                          </Typography>
                          {actions.length > 0 && (
                            <Typography
                              variant="body1"
                              className="my-3 ml-4 mr-2 max-w-50% text-sm"
                            >
                              {actions.join(', ')}
                            </Typography>
                          )}
                        </div>
                        <Divider />
                        {module?.submodules?.map((submodule) => {
                          const actions: string[] = []
                          if (submodule?.screen?.screenActions) {
                            submodule.screen.screenActions.forEach((action) => {
                              actions.push(action?.description)
                            })
                          }
                          return (
                            <React.Fragment key={submodule.id}>
                              <div className="flex items-center justify-between border-b">
                                <Typography
                                  key={submodule.id}
                                  variant="body1"
                                  className="ml-14 py-3 text-sm"
                                >
                                  {submodule.name}
                                </Typography>
                                {actions.length > 0 && (
                                  <Typography
                                    variant="body1"
                                    className="my-3 ml-4 mr-2 max-w-50% text-sm"
                                  >
                                    {actions.join(', ')}
                                  </Typography>
                                )}
                              </div>
                              <Divider />
                            </React.Fragment>
                          )
                        })}
                      </React.Fragment>
                    )
                  })}
                </div>
              </React.Fragment>
            )
          })}
        </div>
      </div>
    )
  })
}

export default DetailPermissionsUser

```

## src/features/user-management/components/DetailUser.tsx

```tsx
import {
  DefaultComponents,
  MaterialIcons,
  Typography
} from '@nuam/common-fe-lib-components'
import { ReactNode, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useScreenActions } from 'store/mf-shell-useScreenActions'

import { CustomTabs } from 'remoteUtilities/components-mf-utilities'

import { USER_TYPES } from '@/shared/constants'
import {
  EXTERNAL_USER_ACTIONS,
  INTERNAL_USER_ACTIONS
} from '@/shared/constants/actionCodes'
import { getUserInfo } from '@/shared/utils/getInfoUser'

import useDetailForProfile from '../hooks/useDetailForProfile'
import { DetailUser } from '../types/getDetailUser'
import DetailInfo from './DetailInfoUser'
import DetailPermissionsUser from './DetailPermissionsUser'

interface AssignPermissionsProps {
  detailUser?: Partial<DetailUser>
  setIsProfileDetailsVisible: (value: boolean) => void
}

const DetailsUser = ({
  detailUser,
  setIsProfileDetailsVisible
}: AssignPermissionsProps) => {
  const { t } = useTranslation('gestion')
  const { hasAnyAction } = useScreenActions()
  const canShowEditProfileIcon = hasAnyAction(
    INTERNAL_USER_ACTIONS.EDIT_PROFILE_USER,
    EXTERNAL_USER_ACTIONS.EDIT_PROFILE_USER
  )

  const { userType, participantId } = useSelector(getUserInfo)
  const isExternalUser = userType === USER_TYPES.EXTERNAL

  const [tab, setTab] = useState(0)

  // Filter profiles based on user type
  const filteredProfiles = useMemo(() => {
    if (!detailUser?.profiles) return []

    if (isExternalUser) {
      // For external users, only show profiles matching their participantId
      return detailUser?.profiles?.filter(
        (profile) => profile?.participant?.id === participantId
      )
    }

    // For internal users, show all profiles
    return detailUser?.profiles
  }, [detailUser?.profiles, isExternalUser, participantId])

  const currentProfile = useMemo(() => {
    return filteredProfiles?.[tab]
  }, [tab, filteredProfiles])

  const { detailPermissions } = useDetailForProfile(currentProfile?.id)

  const participantTabs = filteredProfiles?.reduce<{
    tabs: { label: string }[]
    content: ReactNode[]
  }>(
    (acc, profile) => {
      acc.tabs.push({ label: profile?.participant?.name ?? '' })
      acc.content.push(
        <DetailPermissionsUser
          detailsPermissions={[
            {
              name: profile?.name ?? '',
              views: detailPermissions
            }
          ]}
        />
      )
      return acc
    },
    {
      tabs: [],
      content: []
    }
  ) ?? { tabs: [], content: [] }

  return (
    <div className="max-h-80vh overflow-auto">
      <div className="flex flex-col gap-0">
        <DetailInfo
          label={t('adminUsers.detailsLabels.name')}
          value={detailUser?.name}
        />
        <DetailInfo
          label={'Tipo de identificación'}
          value={detailUser?.identificationType?.description}
        />
        <DetailInfo
          label={t('adminUsers.detailsLabels.identificationNumber')}
          value={detailUser?.identification ?? ''}
        />
        <DetailInfo
          label={t('adminUsers.detailsLabels.country')}
          value={detailUser?.country?.name}
        />
        <DetailInfo
          label={t('adminUsers.detailsLabels.corporateEmail')}
          value={detailUser?.email}
        />
        <DetailInfo
          label={t('adminUsers.detailsLabels.status')}
          value={detailUser?.status?.description}
        />
      </div>
      <div className="mt-6 flex flex-col">
        <div className="mb-3 flex justify-between">
          <Typography variant="h6">
            {t('adminUsers.detailsLabels.permissions')}
          </Typography>
          {canShowEditProfileIcon && (
            <DefaultComponents.Tooltip title={'Editar'} arrow placement="top">
              <MaterialIcons.DriveFileRenameOutlineOutlined
                className="cursor-pointer"
                onClick={() => setIsProfileDetailsVisible(true)}
                sx={{ color: '#3d3d3d', '&:hover': { color: '#FF411C' } }}
              />
            </DefaultComponents.Tooltip>
          )}
        </div>
      </div>
      <div className="max-h-[40vh] overflow-auto">
        <CustomTabs
          tabs={participantTabs?.tabs}
          tabsContent={participantTabs?.content}
          onChange={(e: number) => {
            setTab(e)
          }}
          currentTab={tab}
        />
      </div>
    </div>
  )
}

export default DetailsUser

```

## src/features/user-management/components/EditProfileStep.tsx

```tsx
import { Button } from '@nuam/common-fe-lib-components'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { ModalAlert, Spinner } from 'remoteUtilities/components-mf-utilities'

import { TRANSLATION } from '@/shared/constants'

import { useEditProfileStep } from '../hooks/useEditProfileStep'
import useStoragekeyCreateUser from '../hooks/useStoragekeyCreateUser'
import PermissionsForParticipant from './PermissionsForParticipant'

export const EditProfileStep = () => {
  const { t } = useTranslation(TRANSLATION.NAMESPACE)

  const {
    formData,
    errors,
    onProfileSelect,
    handleSubmit,
    handleNavigate,
    isLoading: isLoadingProfiles
  } = useEditProfileStep()
  const [isLoading, setLoading] = useState(false)
  const { loadFormData } = useStoragekeyCreateUser()

  const [missingProfile, setMissingProfile] = useState<number>()
  const [modalError, setModalError] = useState(false)
  return (
    <>
      {isLoadingProfiles || isLoading ? (
        <Spinner />
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault()
            const values = loadFormData()
            const participantProfileRegister =
              values?.participants?.every(
                (participant) => values?.selectedProfile?.[participant?.label]
              ) ?? []

            if (!participantProfileRegister) {
              setMissingProfile(undefined)
              setModalError(true)
            } else {
              handleSubmit(e)
            }
          }}
          noValidate
          className="w-full"
        >
          <PermissionsForParticipant
            onProfileSelect={onProfileSelect}
            setLoading={setLoading}
            missingProfile={missingProfile}
          />
          {errors?.selectedProfile && (
            <p className="mt-2 text-red-500">{errors?.selectedProfile}</p>
          )}
          <div className="mt-6 flex w-full justify-end gap-4">
            <Button variant="text" onClick={() => handleNavigate(1)}>
              {t('button.Volver')}
            </Button>
            <Button type="submit" disabled={!formData?.selectedProfile}>
              {t('button.Siguiente')}
            </Button>
          </div>
        </form>
      )}

      {modalError && (
        <ModalAlert
          title="Para continuar debes asignar un perfil al usuario"
          textSuccess="Aceptar"
          variant="warning"
          onClick={() => {
            const values = loadFormData()
            const profiles = Object.keys(values?.selectedProfile ?? {})
            const participants = values?.participants ?? []
            participants.forEach((participant, i) => {
              if (!profiles.includes(participant.label)) {
                setMissingProfile(i)
              }
            })
            setModalError(false)
          }}
        />
      )}
    </>
  )
}

```

## src/features/user-management/components/EmailFilter.tsx

```tsx
import { useCallback } from 'react'

import { AutoCompleteInput } from 'remoteUtilities/components-mf-utilities'

import { commonStylesAutoComplete } from '@/features/user-management/constants/commonStylesAutoComplete'
import { getEmailOptions } from '@/features/user-management/services/email'

import RenderOptionAutoComplete from '@/shared/components/RenderOptionAutoComplete'

import useParamsFilter from '../hooks/useParamsFilter'
import { AutocompleteOption } from '../types/AutoCompleteStructure'
import { FiltersTableProps } from '../types/FiltersTable'
import { transformOptionsAutoComplete } from '../utils/transformOptionsAutoComplete'

const EmailFilter = ({
  filtersTable,
  setFiltersTable,
  typeFilter
}: FiltersTableProps) => {
  const commonParams = useParamsFilter({
    typeFilter,
    profileFilter: filtersTable.profile?.label,
    participantFilter: filtersTable.participant?.name
  })
  const onEmailOptions = useCallback(
    async (searchText: string, _page?: number, _limit?: number) => {
      const data = await getEmailOptions({
        countryId: filtersTable.country?.id,
        status: filtersTable.status?.id,
        email: searchText,
        username: filtersTable.username?.label,
        ...commonParams
      })
      const dataOptions = transformOptionsAutoComplete({ data }, (item) => ({
        id: item.email,
        label: item.email
      }))
      return dataOptions
    },
    [filtersTable]
  )
  return (
    <div className="flex-1">
      <AutoCompleteInput
        label="Correo"
        renderOption={RenderOptionAutoComplete}
        itemsPerPage={10}
        minSearchLength={0}
        debounceTime={300}
        onChange={(e: AutocompleteOption) => {
          setFiltersTable({
            ...filtersTable,
            email: e
          })
        }}
        fetchOptions={onEmailOptions}
      />
    </div>
  )
}

export default EmailFilter

```

## src/features/user-management/components/FiltersTable.tsx

```tsx
import { FiltersTableProps } from '../types/FiltersTable'
import EmailFilter from './EmailFilter'
import ProfileFilter from './ProfileFilter'
import StatusFilter from './StatusFilter'
import UserFilter from './UserFilter'

const FiltersTable = (props: FiltersTableProps) => {
  return (
    <div className="mb-6 flex flex-wrap gap-4">
      <EmailFilter {...props} />
      <ProfileFilter {...props} />
      <StatusFilter {...props} />
      <UserFilter {...props} />
    </div>
  )
}

export default FiltersTable

```

## src/features/user-management/components/FiltersTableUserExternal.tsx

```tsx
import { FiltersTableProps } from '../types/FiltersTable'
import EmailFilter from './EmailFilter'
import ParticipantFilter from './ParticipantFilterUserExternal'
import StatusFilter from './StatusFilter'
import UserFilter from './UserFilter'

const FiltersTable = (props: FiltersTableProps) => {
  return (
    <div className="mb-6 flex flex-wrap gap-4">
      <ParticipantFilter {...props} />
      <StatusFilter {...props} />
      <EmailFilter {...props} />
      <UserFilter {...props} />
    </div>
  )
}

export default FiltersTable

```

## src/features/user-management/components/FiltersTableUserInternal.tsx

```tsx
import { FiltersTableProps } from '@/features/user-management/types/FiltersTable'

import EmailFilter from './EmailFilter'
import StatusFilter from './StatusFilter'
import UserFilter from './UserFilter'

const FiltersTable = (props: FiltersTableProps) => {
  return (
    <div className="mb-6 flex flex-wrap gap-4">
      <UserFilter {...props} />
      <EmailFilter {...props} />
      <StatusFilter {...props} />
    </div>
  )
}

export default FiltersTable

```

## src/features/user-management/components/ModalUserDetail.tsx

```tsx
import { Dispatch, SetStateAction, Suspense, lazy, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { ModalContent, Spinner } from 'remoteUtilities/components-mf-utilities'

import useDetailProfile from '../hooks/useDetailProfile'
import useGetDetailUser from '../hooks/useGetDetailUser'
import { Permission } from '../types/getDetailUser'
import { Participant } from '../types/userTypes'

const DetailsUser = lazy(() => import('./DetailUser'))
const AssignPermissions = lazy(() => import('../components/AssignPermissions'))

interface ModalUserDetailProps {
  detailUserId: number
  setLoading: (value: boolean) => void
  setRefresh: Dispatch<SetStateAction<boolean>>
  setIsPanelOpen: (value: boolean) => void
  currentParticipant: Participant[]
  permissionsField: Permission[]
}
function ModalUserDetail({
  detailUserId,
  currentParticipant,
  permissionsField,
  ...otherProps
}: ModalUserDetailProps) {
  const { setIsPanelOpen } = otherProps
  const { t } = useTranslation('gestion')
  const [isProfileDetailsVisible, setIsProfileDetailsVisible] = useState(false)
  const { detailUser } = useGetDetailUser(detailUserId)
  const { propsAssignPermissions, saveProfile } = useDetailProfile()
  return (
    <ModalContent
      className="max-h-80vh w-3/4 overflow-auto md:w-1/2"
      handleClose={() => {
        setIsPanelOpen(false)
        setIsProfileDetailsVisible(false)
      }}
      ItShouldHaveButtons={isProfileDetailsVisible ?? false}
      title={`${
        !isProfileDetailsVisible
          ? t('adminUsers.userDetails')
          : t('adminUsers.assignProfile')
      } `}
      handleAccept={() => isProfileDetailsVisible && saveProfile()}
      btnCancelText="Volver"
    >
      {!isProfileDetailsVisible ? (
        <Suspense fallback={<Spinner />}>
          <DetailsUser
            detailUser={detailUser}
            setIsProfileDetailsVisible={setIsProfileDetailsVisible}
          />
        </Suspense>
      ) : (
        <Suspense fallback={<Spinner />}>
          <AssignPermissions
            {...otherProps}
            propsAssignPermissions={propsAssignPermissions}
            detailUser={detailUser}
          />
        </Suspense>
      )}
    </ModalContent>
  )
}

export default ModalUserDetail

```

## src/features/user-management/components/OTP.tsx

```tsx
import { Checkbox } from '@nuam/common-fe-lib-components'
import { Dispatch, SetStateAction, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { ModalAlert, Toast } from 'remoteUtilities/components-mf-utilities'

import { confirmOtpChangeService } from '../utils/userAdminService'

export const OTP = ({
  clientUser,
  otp,
  user,
  fullName,
  setRefresh
}: {
  otp: boolean
  user: string
  fullName: string
  clientUser: string
  setRefresh: Dispatch<SetStateAction<boolean>>
}) => {
  const [otpChange, setOtpChange] = useState<{
    isOtpEnabled: boolean
    client_user: string
    username: string
  } | null>(null)
  const { t } = useTranslation('gestion')
  const [isModalOpenOTP, setIsModalOpenOTP] = useState(false)

  const handleStatusOTPChange = async (
    isOtpEnabled: boolean,
    client_user: string,
    username: string
  ) => {
    setOtpChange({ isOtpEnabled, client_user, username })
    setIsModalOpenOTP(true)
  }
  const confirmOtpChange = () => {
    confirmOtpChangeService({
      otpChange,
      setRefresh,
      setIsModalOpenOTP,
      setOtpChange,
      setIsToastVisible
    })
  }
  const [isToastVisible, setIsToastVisible] = useState(false)

  return (
    <>
      <div className="flex h-full items-center justify-center">
        <Checkbox
          color="primary"
          checked={otp}
          onChange={() => handleStatusOTPChange(!otp, clientUser, user)}
          disabled={!otp}
        />
      </div>
      {isModalOpenOTP && (
        <ModalAlert
          handleCancel={() => setIsModalOpenOTP(false)}
          title={t('adminUsers.deleteOtpTitle', { name: fullName })}
          onClick={() => confirmOtpChange()}
          textSuccess={t('adminUsers.accept')}
          textCancel={t('adminUsers.cancel')}
          variant="warning"
          orientation="horizontal"
        />
      )}
      {isToastVisible && (
        <Toast
          text="Se desactivo el OTP de la cuenta exitosamente."
          onClose={() => {
            setIsToastVisible(!isToastVisible)
          }}
          duration={1800}
        />
      )}
    </>
  )
}

```

## src/features/user-management/components/ParticipantFilterUserExternal.tsx

```tsx
import { useCallback } from 'react'

import { AutoCompleteInput } from 'remoteUtilities/components-mf-utilities'

import { commonStylesAutoComplete } from '@/features/user-management/constants/commonStylesAutoComplete'
import { getParticipant } from '@/features/user-management/services/participant'
import { transformOptionsAutoComplete } from '@/features/user-management/utils/transformOptionsAutoComplete'

import RenderOptionAutoComplete from '@/shared/components/RenderOptionAutoComplete'

import useParamsFilter from '../hooks/useParamsFilter'
import { FiltersTableProps } from '../types/FiltersTable'

const ParticipantFilter = ({
  filtersTable,
  setFiltersTable,
  typeFilter
}: FiltersTableProps) => {
  const params = useParamsFilter({
    typeFilter,
    profileFilter: filtersTable.profile?.label
  })
  const onParticipantOptions = useCallback(
    async (searchText: string, _page?: number, _limit?: number) => {
      const data = await getParticipant({
        countryId: filtersTable.country?.id,
        status: filtersTable.status?.id,
        email: filtersTable.email?.label,
        username: filtersTable.username?.label,
        ...params,
        participant: searchText
      })
      const dataOptions = transformOptionsAutoComplete(
        { data },
        (item: any) => ({
          id: item.id,
          label: item.name
        })
      )
      return dataOptions
    },
    [filtersTable]
  )
  return (
    <div className="flex-1">
      <AutoCompleteInput
        label="Participante"
        renderOption={RenderOptionAutoComplete}
        itemsPerPage={10}
        minSearchLength={0}
        debounceTime={300}
        onChange={(e: any) => {
          setFiltersTable({
            ...filtersTable,
            participant: e
          })
        }}
        fetchOptions={onParticipantOptions}
      />
    </div>
  )
}

export default ParticipantFilter

```

## src/features/user-management/components/PermissionsForParticipant.tsx

```tsx
import { Typography } from '@nuam/common-fe-lib-components'
import { Fragment, ReactNode, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { CustomTabs } from 'remoteUtilities/components-mf-utilities'

import { TRANSLATION } from '@/shared/constants'

import useHandleEyeClick from '../hooks/useHandleEyeClick'
import useStoragekeyCreateUser from '../hooks/useStoragekeyCreateUser'
import { RootObject } from '../types/fieldTable'
import { Profile } from '../types/userTypes'
import AssignProfileWithFilter from './AssignProfileWithFilter'
import DetailPermissions from './DetailPermissions'

const PermissionsForParticipant = ({
  setLoading,
  onProfileSelect,
  missingProfile
}: {
  setLoading: (value: boolean) => void
  onProfileSelect: (
    profile: Profile,
    participant: string
  ) => {
    selectedProfile: {
      [x: string]:
        | Profile
        | {
            name: string
            id: number
          }
    }
    scopeProfile: RootObject
    idProfile: number
  }
  missingProfile?: number
}) => {
  const [isModalEyeOpen, setIsModalEyeOpen] = useState(false)
  const { t } = useTranslation(TRANSLATION.NAMESPACE)

  const { formData: defaultValues } = useStoragekeyCreateUser()

  const [searchProfile, setSearchProfile] = useState<Record<string, Profile>>(
    {}
  )

  const { handleEyeClick, selectProfile } = useHandleEyeClick({
    setLoading,
    setIsModalEyeOpen
  })

  const participants: { id: number; label: string }[] =
    defaultValues?.participants ?? []

  const onSearchProfile = (participant: string, profile: Profile) => {
    setSearchProfile((current) => ({
      ...current,
      [participant]: profile
    }))
  }

  const { tabs, content } = participants.reduce(
    (acc, participant) => {
      const participantLabel = participant.label
      acc.tabs.push({ label: participantLabel })
      const currentProfile = defaultValues?.selectedProfile?.[participant.label]
      const selectedProfile = {
        name: currentProfile?.name,
        permissions: [],
        id: currentProfile?.id
      }
      acc.content.push(
        <Fragment key={participant.id}>
          <Typography variant="h6" className="mb-[24px] mt-[24px]">
            {t('assignProfile')}
          </Typography>
          <AssignProfileWithFilter
            handleEyeClick={handleEyeClick}
            onProfileSelect={onProfileSelect}
            onSearchProfile={onSearchProfile}
            participantId={participant.id}
            participantName={participantLabel}
            selectedProfile={selectedProfile}
            searchProfile={searchProfile[participantLabel]}
          />
          <DetailPermissions
            closeModalDetail={() => {
              setIsModalEyeOpen(false)
            }}
            isModalEyeOpen={isModalEyeOpen}
            idProfile={selectProfile}
          />
        </Fragment>
      )
      return acc
    },
    { tabs: [] as { label: string }[], content: [] as ReactNode[] }
  )

  return (
    <CustomTabs
      tabs={tabs}
      tabsContent={content}
      variant={tabs.length > 6 ? 'fullWidth' : 'scrollable'}
      changeContent={searchProfile}
      currentTab={missingProfile}
    />
  )
}

export default PermissionsForParticipant

```

## src/features/user-management/components/PermissionsSection.tsx

```tsx
import { MaterialIcons, Typography } from '@nuam/common-fe-lib-components'
import { ReactNode } from 'react'

import { CustomTabs } from 'remoteUtilities/components-mf-utilities'

import useStoragekeyCreateUser from '../hooks/useStoragekeyCreateUser'
import { RootObject } from '../types/fieldTable'
import { PermissionsSectionProps, RegisterFormValues } from '../types/userTypes'
import DetailPermissionsUser from './DetailPermissionsUser'

export const PermissionsSection = ({ t, onEdit }: PermissionsSectionProps) => {
  const { storageKey } = useStoragekeyCreateUser()
  const values: Partial<RegisterFormValues> = JSON.parse(
    localStorage.getItem(storageKey) || '{}'
  )
  const participantTabs = values.participants?.reduce<{
    tabs: { label: string }[]
    content: ReactNode[]
  }>(
    (acc, participant) => {
      const profile = values.selectedProfile?.[participant.label]
      acc.tabs.push({ label: participant?.label ?? '' })
      acc.content.push(
        <div className="max-h-[40vh] overflow-auto">
          <DetailPermissionsUser
            detailsPermissions={[
              {
                name: profile?.name ?? '',
                views: {
                  menuConfiguration:
                    profile?.permissions as RootObject['menuConfiguration']
                }
              }
            ]}
          />
        </div>
      )
      return acc
    },
    {
      tabs: [],
      content: []
    }
  ) ?? { tabs: [], content: [] }
  return (
    <div className="w-full pb-6 pt-3 xl:pt-6">
      <div className="flex justify-between">
        <Typography variant="h6">{t('permissions')}</Typography>
        <MaterialIcons.DriveFileRenameOutlineOutlined
          width={24}
          height={24}
          className="cursor-pointer"
          onClick={onEdit}
        />
      </div>
      <div className="mt-3">
        <CustomTabs
          tabs={participantTabs?.tabs}
          tabsContent={participantTabs?.content}
        />
      </div>
    </div>
  )
}

```

## src/features/user-management/components/ProfileFilter.tsx

```tsx
import { useCallback } from 'react'

import { AutoCompleteInput } from 'remoteUtilities/components-mf-utilities'

import RenderOptionAutoComplete from '@/shared/components/RenderOptionAutoComplete'

import { commonStylesAutoComplete } from '../constants/commonStylesAutoComplete'
import useParamsFilter from '../hooks/useParamsFilter'
import { getProfiles } from '../services/getProfile'
import { AutocompleteOption } from '../types/AutoCompleteStructure'
import { FiltersTableProps } from '../types/FiltersTable'
import { transformOptionsAutoComplete } from '../utils/transformOptionsAutoComplete'

const ProfileFilter = ({
  filtersTable,
  setFiltersTable,
  typeFilter
}: FiltersTableProps) => {
  const commonParams = useParamsFilter({
    typeFilter,
    participantFilter: filtersTable.participant?.label,
    profileFilter: filtersTable.profile?.label
  })
  const onProfileOptions = useCallback(
    async (searchText: string, _page?: number, _limit?: number) => {
      const data = await getProfiles({
        email: filtersTable.email?.label,
        status: filtersTable.status?.id,
        username: filtersTable.username?.label,
        countryId: filtersTable?.country?.id,
        ...commonParams,
        profile: searchText
      })
      const dataOptions = transformOptionsAutoComplete(
        { data },
        (item: any) => ({
          id: item.id,
          label: item.name
        })
      )
      return dataOptions
    },
    [filtersTable]
  )
  return (
    <div className="flex-1">
      <AutoCompleteInput
        label="Perfil"
        renderOption={RenderOptionAutoComplete}
        itemsPerPage={10}
        minSearchLength={0}
        debounceTime={300}
        fetchOptions={onProfileOptions}
        onChange={(e: AutocompleteOption) => {
          setFiltersTable({ ...filtersTable, profile: e })
        }}
      />
    </div>
  )
}

export default ProfileFilter

```

## src/features/user-management/components/RegisterStep.tsx

```tsx
import { Button, TextField, Typography } from '@nuam/common-fe-lib-components'
import { useMemo } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { ModalAlert, Spinner } from 'remoteUtilities/components-mf-utilities'

import { TRANSLATION } from '@/shared/constants'

import { TypeUser } from '../constants/typeUser'
import useExistUser from '../hooks/useExistUser'
import { useFormPersistence } from '../hooks/useFormPersistence'
import { useFormReset } from '../hooks/useFormReset'
import useIsExternalRegister from '../hooks/useIsExternalRegister'
import { useRegisterStep } from '../hooks/useRegisterStep'
import useStoragekeyCreateUser from '../hooks/useStoragekeyCreateUser'
import { RegisterFormValues } from '../types/userTypes'
import {
  radicadoRules,
  validateCorporateEmail,
  validateEmailsMatch
} from '../utils/validationsRegisterPage'
import SelectEnterpriseGroupCreateuser from './SelectGroupCreateUser'
import SelectParticipantsCreateuser from './SelectParticipantsCreateuser'
import SelectTypeDocumentCreateUser from './SelectTypeDocumentCreateUser'
import UserRegisterDefault from './UserRegisterDefault'

const commonStyle = {
  '& .MuiFormLabel-root': {
    color: '#00000061'
  },
  '&  .MuiOutlinedInput-root': {
    borderColor: '#0000003B',
    '&. MuiInputBase-input': {
      color: '#00000061'
    }
  }
}

export const RegisterStep = () => {
  const { t } = useTranslation(TRANSLATION.NAMESPACE)
  const { isExternalRegister, typeAccess } = useIsExternalRegister()
  const { storageKey } = useStoragekeyCreateUser()

  const defaultValues: Partial<RegisterFormValues> = JSON.parse(
    localStorage.getItem(storageKey) || '{}'
  )

  const {
    control,
    handleSubmit,
    watch,
    setValue,
    getValues,
    formState: { errors, isValid },
    reset
  } = useForm<RegisterFormValues>({
    mode: 'onChange',
    defaultValues
  })

  const {
    users,
    isLoading,
    modalContent,
    setModalContent,
    userType,
    participantId,
    name,
    code,
    documentNumber,
    handleBack,
    handleSubmit: customHandleSubmit,
    enterpriseGroup,
    changeValidationsNextStep
  } = useRegisterStep(getValues)

  useFormReset({
    reset,
    storageKey
  })
  useFormPersistence({ watch, storageKey })

  UserRegisterDefault({
    code,
    documentNumber,
    getValues,
    isExternalRegister,
    name,
    participantId,
    setValue,
    storageKey,
    users,
    userType,
    enterpriseGroup
  })
  const disableFields = isExternalRegister ? typeAccess : !isExternalRegister
  const valueGroup = useMemo(
    () => watch()?.enterpriseGroup,
    [watch()?.enterpriseGroup]
  )
  const userIsExternal = userType === TypeUser.EXTERNAL
  const { existUser, existUserInParticipant } = useExistUser({
    setValue,
    watch,
    handleBack,
    setModalContent,
    changeValidationsNextStep
  })

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <form
          onSubmit={handleSubmit(customHandleSubmit)}
          noValidate
          className="w-full max-w-[900px]"
        >
          <Typography
            variant="h2"
            className="mb-6 mt-2 text-xl font-medium xl:mt-6"
          >
            {isExternalRegister
              ? t('createExternalUser')
              : t('createInternalUser')}
          </Typography>
          <div className="mb-6">
            <Controller
              name="radicado"
              control={control}
              rules={
                userIsExternal
                  ? {
                      pattern: {
                        value: /^[a-zA-Z0-9,-]{1,20}$/,
                        message:
                          'Solo se permiten caracteres alfanuméricos, comas y guiones.'
                      },
                      required: false,
                      maxLength: {
                        value: 20,
                        message: 'Debe tener máximo 20 caracteres.'
                      }
                    }
                  : radicadoRules()
              }
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  size="small"
                  type="text"
                  placeholder={
                    userIsExternal
                      ? t('filingPlaceholder')
                      : 'Número de Radicado'
                  }
                  label={userIsExternal ? t('filing') : 'Radicado'}
                  error={Boolean(errors.radicado)}
                  helperText={errors.radicado?.message}
                  slotProps={{
                    htmlInput: {
                      maxLength: userIsExternal ? 20 : 15,
                      minLength: 9
                    }
                  }}
                  sx={commonStyle}
                />
              )}
            />
          </div>
          {((isExternalRegister && userIsExternal) ||
            (isExternalRegister && userType === TypeUser.INTERNAL)) && (
            <div className="mt-6">
              <Typography
                variant="h3"
                className="mb-6 text-center text-base font-bold"
              >
                {t('entityTitle')}
              </Typography>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <Controller
                  name="enterpriseGroup"
                  control={control}
                  disabled={disableFields}
                  render={({ field }) => (
                    <SelectEnterpriseGroupCreateuser
                      value={valueGroup}
                      field={field}
                      setValue={setValue}
                    />
                  )}
                />
                <Controller
                  name="participants"
                  control={control}
                  disabled={disableFields}
                  rules={{ required: 'Campo Obligatorio' }}
                  render={({ field }) => (
                    <SelectParticipantsCreateuser
                      field={field}
                      watch={watch}
                      setValue={setValue}
                    />
                  )}
                />
              </div>
            </div>
          )}
          <div className="mt-6">
            <Typography
              variant="h3"
              className="mb-6 text-center text-base font-bold"
            >
              {t('userData')}
            </Typography>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Controller
                name="email"
                control={control}
                rules={{
                  required: 'Campo Obligatorio',
                  validate: (value: string) => {
                    const emailValidation = validateCorporateEmail(
                      value,
                      !isExternalRegister ? 'INTERNAL' : 'EXTERNAL'
                    )
                    if (emailValidation !== true) return emailValidation
                    return validateEmailsMatch(getValues)(value)
                  }
                }}
                render={({ field }) => {
                  return (
                    <TextField
                      {...field}
                      fullWidth
                      required
                      type="email"
                      size="small"
                      label={t('corporateEmail')}
                      placeholder={t('placeHolderExample')}
                      error={Boolean(errors.email)}
                      helperText={errors.email?.message}
                      slotProps={{
                        htmlInput: { maxLength: 256 }
                      }}
                      sx={commonStyle}
                    />
                  )
                }}
              />
              <Controller
                name="confirmEmail"
                control={control}
                rules={{
                  required: 'Campo Obligatorio',
                  validate: (value: string) => {
                    return validateEmailsMatch(getValues)(value)
                  }
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    required
                    type="email"
                    size="small"
                    allowPaste={false}
                    allowCopy={false}
                    label={t('confirmEmail')}
                    placeholder={t('placeHolderExample')}
                    error={Boolean(errors.confirmEmail)}
                    helperText={errors.confirmEmail?.message}
                    slotProps={{
                      htmlInput: { maxLength: 256 }
                    }}
                    sx={commonStyle}
                  />
                )}
              />
              <Controller
                name="firstName"
                control={control}
                rules={{
                  required: 'Campo Obligatorio',
                  minLength: {
                    value: 3,
                    message: 'Debe tener mínimo 3 caracteres.'
                  },
                  maxLength: {
                    value: 50,
                    message: 'Debe tener maximo 50 caracteres'
                  },
                  pattern: {
                    value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]{3,50}$/,
                    message: 'Solo se permiten letras y espacios'
                  }
                }}
                disabled={existUser}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    required
                    type="text"
                    size="small"
                    label={t('firstName')}
                    placeholder={t('enterFirstName')}
                    error={Boolean(errors.firstName)}
                    helperText={errors.firstName?.message}
                    slotProps={{
                      htmlInput: { maxLength: 50, minLength: 3 }
                    }}
                    sx={commonStyle}
                  />
                )}
              />
              <Controller
                name="lastName"
                control={control}
                rules={{
                  required: 'Campo Obligatorio',
                  minLength: {
                    value: 3,
                    message: 'Debe tener mínimo 3 caracteres.'
                  },
                  pattern: {
                    value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]{3,50}$/,
                    message: 'Solo se permiten letras y espacios'
                  }
                }}
                disabled={existUser}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    required
                    type="text"
                    size="small"
                    label={t('lastName')}
                    placeholder={t('enterLastName')}
                    error={Boolean(errors.lastName)}
                    helperText={errors.lastName?.message}
                    slotProps={{
                      htmlInput: { maxLength: 50, minLength: 3 }
                    }}
                    sx={commonStyle}
                  />
                )}
              />
              <Controller
                name="docType"
                control={control}
                rules={{ required: 'Campo Obligatorio' }}
                disabled={existUser}
                render={({ field }) => (
                  <SelectTypeDocumentCreateUser
                    field={field}
                    watch={watch}
                    error={errors.docType?.message}
                  />
                )}
              />
              <Controller
                name="docNumber"
                control={control}
                rules={{
                  required: 'Campo Obligatorio',
                  minLength: {
                    value: 5,
                    message: 'Debe tener al menos 5 caracteres.'
                  },
                  maxLength: {
                    value: 20,
                    message: 'Debe tener máximo 20 caracteres.'
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9]+$/,
                    message:
                      'Solo se permiten caracteres alfanuméricos, sin espacios ni símbolos.'
                  }
                }}
                disabled={existUser}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    required
                    size="small"
                    label={t('identificationNumber')}
                    placeholder={t('enterNumber')}
                    error={Boolean(errors.docNumber)}
                    helperText={errors.docNumber?.message}
                    slotProps={{
                      htmlInput: { minLength: 5, maxLength: 20 }
                    }}
                  />
                )}
              />
            </div>
          </div>
          <div className="mt-8 flex w-full justify-end gap-8">
            <Button type="button" variant="text" onClick={handleBack}>
              {t('button.Volver')}
            </Button>
            <Button
              type="submit"
              disabled={
                !isValid ||
                Boolean(errors.firstName) ||
                Boolean(errors.lastName) ||
                existUserInParticipant
              }
            >
              {t('button.GestionarPermisos')}
            </Button>
          </div>
        </form>
      )}
      {modalContent && (
        <ModalAlert
          title={modalContent.title}
          textSuccess={modalContent.textSuccess}
          message={modalContent.message}
          textCancel={modalContent.textCancel}
          variant={modalContent.variant}
          onClick={modalContent.onClick}
          handleCancel={modalContent.handleCancel}
          orientation="horizontal"
        />
      )}
    </>
  )
}

```

## src/features/user-management/components/ReviewProfileStep.tsx

```tsx
import { Button } from '@nuam/common-fe-lib-components'

import { ModalAlert, Spinner } from 'remoteUtilities/components-mf-utilities'

import { useReviewProfileStep } from '../hooks/useReviewProfileStep'
import { PermissionsSection } from './PermissionsSection'
import { UserEntitySection } from './UserEntitySection'

export const ReviewProfileStep = () => {
  const {
    loading,
    modalContent,
    handleFinalizar,
    handleNavigate,
    navigate,
    t
  } = useReviewProfileStep()

  if (loading) return <Spinner />

  return (
    <div className="mb-16 mt-2 flex w-full flex-col gap-6 xl:mt-6">
      <UserEntitySection t={t} onEdit={() => handleNavigate(1)} />
      <PermissionsSection t={t} onEdit={() => handleNavigate(2)} />
      <div className="flex w-full justify-end gap-4">
        <Button variant="text" onClick={() => navigate(-1)}>
          {t('button.Volver')}
        </Button>
        <Button
          type="submit"
          onClick={(e) => {
            e.preventDefault()
            handleFinalizar(e as unknown as React.FormEvent<HTMLFormElement>)
          }}
          disabled={loading}
        >
          {t('button.Finalizar')}
        </Button>
      </div>
      {loading && <Spinner />}
      {modalContent && (
        <ModalAlert
          title={modalContent.title}
          textSuccess={modalContent.textSuccess}
          message={modalContent.message}
          variant={modalContent.variant}
          onClick={modalContent.onClick}
        />
      )}
    </div>
  )
}

```

## src/features/user-management/components/SearchProfile.tsx

```tsx
import { useCallback } from 'react'

import { AutoCompleteInput } from 'remoteUtilities/components-mf-utilities'

import RenderOptionAutoComplete from '@/shared/components/RenderOptionAutoComplete'

import useOptionsSearchProfile from '../hooks/useOptionsSearchProfile'

interface SearchProfileProps {
  participantId: number
  handleFilterChange: (value: number) => void
}
const SearchProfile: React.FC<SearchProfileProps> = ({
  participantId,
  handleFilterChange
}) => {
  const { profilePermissionsService } = useOptionsSearchProfile(participantId)
  const fetchOptionsProfile = useCallback(
    async (search: string) => {
      const dataResponse = await profilePermissionsService({
        idParticipant: participantId,
        profileName: search
      })
      const tranformData = dataResponse.map((item) => ({
        id: item.id,
        label: item.name
      }))
      return { data: tranformData, total: tranformData.length }
    },
    [profilePermissionsService, participantId]
  )
  return (
    <AutoCompleteInput
      label="Buscar"
      fetchOptions={fetchOptionsProfile}
      itemsPerPage={10}
      minSearchLength={0}
      debounceTime={300}
      onChange={(e: any) => {
        handleFilterChange(e.id)
      }}
      renderOption={RenderOptionAutoComplete}
    />
  )
}

export default SearchProfile

```

## src/features/user-management/components/SelectCountryCreateUser.tsx

```tsx
import { useEffect, useState } from 'react'
import { ControllerRenderProps } from 'react-hook-form'

import { SelectNuam } from 'remoteUtilities/components-mf-utilities'

import { getCountriesService } from '../services/countries'
import { RegisterFormValues } from '../types/userTypes'

const SelectCountryCreateUser = ({
  field
}: {
  field: ControllerRenderProps<RegisterFormValues, 'country'>
}) => {
  const [optionsCountries, setOptionsCountries] = useState([])

  const fetchOptionsStatus = async () => {
    const resData = await getCountriesService({})
    setOptionsCountries(resData as any)
  }
  useEffect(() => {
    fetchOptionsStatus()
  }, [])
  return (
    <div className="flex-1">
      <SelectNuam
        {...field}
        label="Pais"
        options={optionsCountries}
        formControlProps={{ fullWidth: true }}
        size="small"
        labelKey="name"
        valueKey="name"
        value={field.value?.name || ''}
        onChange={(e: any) => {
          field.onChange(e)
        }}
      />
    </div>
  )
}

export default SelectCountryCreateUser

```

## src/features/user-management/components/SelectGroupCreateUser.tsx

```tsx
import { useCallback, useEffect } from 'react'
import { ControllerRenderProps, UseFormSetValue } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { AutoCompleteInput } from 'remoteUtilities/components-mf-utilities'

import RenderOptionAutoComplete from '@/shared/components/RenderOptionAutoComplete'
import { TRANSLATION } from '@/shared/constants'

import useIsExternalRegister from '../hooks/useIsExternalRegister'
import enterpriseGroup from '../services/enterpriseGroup'
import { AutocompleteOption } from '../types/AutoCompleteStructure'
import { RegisterFormValues } from '../types/userTypes'
import { transformOptionsAutoComplete } from '../utils/transformOptionsAutoComplete'

const SelectEnterpriseGroupCreateuser = ({
  field,
  value,
  setValue
}: {
  field: ControllerRenderProps<RegisterFormValues, 'enterpriseGroup'>
  value: RegisterFormValues['enterpriseGroup']
  setValue: UseFormSetValue<RegisterFormValues>
}) => {
  const { isExternalRegister } = useIsExternalRegister()
  const { t } = useTranslation(TRANSLATION.NAMESPACE)
  const onGetEnterpriseGroup = useCallback(
    async (searchText: string, page?: number, _limit?: number) => {
      const data = await enterpriseGroup({
        text: searchText,
        page: page,
        size: _limit
      })
      const transformData = transformOptionsAutoComplete(
        { data: data.content },
        (i) => ({ id: i.id, label: i.name }),
        data?.totalPages
      )
      const filterTypeView = isExternalRegister
        ? transformData.data.filter((e) => e.id !== 1)
        : transformData.data
      const resultData = { ...transformData, data: filterTypeView }
      return resultData
    },
    []
  )

  return (
    <AutoCompleteInput
      {...field}
      label={t('groupBusinness')}
      renderOption={RenderOptionAutoComplete}
      itemsPerPage={10}
      minSearchLength={3}
      debounceTime={300}
      fetchOptions={onGetEnterpriseGroup}
      value={value}
      onChange={(e: AutocompleteOption[]) => {
        if (e) {
          field.onChange(e)
          setValue('participants', [])
        }
      }}
    />
  )
}

export default SelectEnterpriseGroupCreateuser

```

## src/features/user-management/components/SelectParticipantsCreateuser.tsx

```tsx
import { useCallback } from 'react'
import {
  ControllerRenderProps,
  UseFormSetValue,
  UseFormWatch
} from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { AutoCompleteInput } from 'remoteUtilities/components-mf-utilities'

import RenderOptionAutoComplete from '@/shared/components/RenderOptionAutoComplete'
import { TRANSLATION } from '@/shared/constants'

import useStoragekeyCreateUser from '../hooks/useStoragekeyCreateUser'
import { getParticipantForEnterpriceGroup } from '../services/participantForEnterpriseGroup'
import { AutocompleteOption } from '../types/AutoCompleteStructure'
import { RegisterFormValues } from '../types/userTypes'
import { transformOptionsAutoComplete } from '../utils/transformOptionsAutoComplete'

const SelectParticipantsCreateuser = ({
  watch,
  field,
  setValue
}: {
  watch: UseFormWatch<RegisterFormValues>
  field: ControllerRenderProps<RegisterFormValues, 'participants'>
  setValue: UseFormSetValue<RegisterFormValues>
}) => {
  const { t } = useTranslation(TRANSLATION.NAMESPACE)
  const values = watch()
  const valueEnterpriseGroup = values.enterpriseGroup
  const { storageKey } = useStoragekeyCreateUser()

  const onParticipantOptions = useCallback(
    async (searchText: string, _page?: number, _limit?: number) => {
      if (valueEnterpriseGroup?.id) {
        const data = await getParticipantForEnterpriceGroup({
          name: searchText,
          enterpriseGroupId: valueEnterpriseGroup.id
        })
        const dataOptions = transformOptionsAutoComplete(
          { data: data.content },
          (item: any) => ({
            id: item.id,
            label: item.name
          })
        )
        return dataOptions
      }
    },
    [valueEnterpriseGroup]
  )

  return (
    <AutoCompleteInput
      {...field}
      label={t('participant')}
      renderOption={RenderOptionAutoComplete}
      itemsPerPage={10}
      minSearchLength={0}
      debounceTime={300}
      fetchOptions={onParticipantOptions}
      multiple
      value={field.value}
      onChange={(e: AutocompleteOption[]) => {
        const values: Partial<RegisterFormValues> = JSON.parse(
          localStorage.getItem(storageKey) || '{}'
        )

        const keysProfiles = Object.keys(values.selectedProfile || {})
        const selectedProfile: RegisterFormValues['selectedProfile'] = {}
        const participantsValues = [...(values.participantsDefault ?? []), ...e]
        keysProfiles.forEach((key) => {
          const participantExist = participantsValues.some(
            (participant) => participant.label === key
          )
          if (participantExist && values.selectedProfile) {
            selectedProfile[key] = values?.selectedProfile?.[key]
          }
        })
        setValue('selectedProfile', selectedProfile)
        if (e) {
          const value = Array.isArray(e) ? e : [e]
          field.onChange(value)
        }
      }}
    />
  )
}

export default SelectParticipantsCreateuser

```

## src/features/user-management/components/SelectTypeDocumentCreateUser.tsx

```tsx
import { useCallback, useEffect, useState } from 'react'
import { ControllerRenderProps, UseFormWatch } from 'react-hook-form'

import { SelectNuam } from 'remoteUtilities/components-mf-utilities'

import getTypeDocument from '../services/getTypeDocument'
import { ResTypeDocument } from '../types/getTypeDocument'
import { RegisterFormValues } from '../types/userTypes'

const SelectTypeDocumentCreateUser = ({
  field,
  watch,
  error
}: {
  field: ControllerRenderProps<RegisterFormValues, 'docType'>
  watch: UseFormWatch<RegisterFormValues>
  error?: string
}) => {
  const watches = watch()
  const docType = watches.docType
  const [options, setOptions] = useState<ResTypeDocument>([])
  const onGetOptions = useCallback(async () => {
    const data = await getTypeDocument()
    setOptions(data)
  }, [docType])
  useEffect(() => {
    onGetOptions()
  }, [onGetOptions])

  return (
    <SelectNuam
      {...field}
      label="Tipo de identificación *"
      required
      onChange={field.onChange}
      labelKey="description"
      valueKey="id"
      error={!!error}
      options={options}
      size="small"
      value={field.value?.description ?? ''}
      MenuProps={{
        PaperProps: {
          sx: {
            maxWidth: 200,
            '& .MuiMenuItem-root': {
              whiteSpace: 'normal',
              wordBreak: 'break-word',
              overflowWrap: 'break-word',
              display: 'block',
              alignItems: 'flex-start'
            }
          }
        }
      }}
      key={field.value?.description ?? ''}
    />
  )
}

export default SelectTypeDocumentCreateUser

```

## src/features/user-management/components/StatusFilter.tsx

```tsx
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'store/mf-store'

import { SelectNuam } from 'remoteUtilities/components-mf-utilities'

import { getStatusService } from '@/features/user-management/services/status'

import useParamsFilter from '../hooks/useParamsFilter'
import { FiltersTableProps } from '../types/FiltersTable'

const StatusFilter = ({
  filtersTable: filters,
  setFiltersTable,
  typeFilter
}: FiltersTableProps) => {
  const [optionsStatus, setOptionsStatus] = useState([])
  const params = useParamsFilter({
    typeFilter,
    profileFilter: filters.profile?.label,
    participantFilter: filters.participant?.name
  })
  const { name: participantName, profileId } = useSelector(
    (state: RootState) => state.auth.infoUserNubo
  )
  const fetchOptionsStatus = async () => {
    const resData = await getStatusService({
      email: filters.email?.label,
      username: filters.username?.label,
      countryId: filters.country?.id,
      ...params
    })

    setOptionsStatus(resData as any)
  }
  useEffect(() => {
    if (profileId && participantName) {
      fetchOptionsStatus()
    }
  }, [filters, profileId, participantName])
  return (
    <div className="min-w-36 flex-1">
      <SelectNuam
        label="Estado"
        value={filters.status?.description || ''}
        options={optionsStatus}
        formControlProps={{ fullWidth: true }}
        size="small"
        labelKey="description"
        valueKey="description"
        onChange={(e: any) => {
          setFiltersTable({
            ...filters,
            status: e
          })
        }}
      />
    </div>
  )
}

export default StatusFilter

```

## src/features/user-management/components/TableUser.tsx

```tsx
import { TRenderCellParams } from '@nuam/common-fe-lib-components'
import { Dispatch, ReactNode, SetStateAction } from 'react'

import { NewTable } from 'remoteUtilities/components-mf-utilities'

import { FieldTable } from '../types/fieldTable'

interface TableUserProps {
  columns: any
  url: string
  refresh: boolean
  toggleModal: (params?: { idUser?: number; visibleModal?: boolean }) => void
  Toolbar: ReactNode
  canAdminProfiles: boolean
  setField: Dispatch<SetStateAction<FieldTable | null>>
}
const TableUser = ({
  columns,
  url,
  refresh,
  toggleModal,
  Toolbar,
  setField,
  canAdminProfiles
}: TableUserProps) => {
  return (
    <NewTable
      columns={columns}
      filterKey="username"
      widthContent="1800px"
      endpoint={url}
      refresh={refresh}
      axiosInstanceKey="httpUserManagment"
      onRowDoubleClick={(row: TRenderCellParams) => {
        if (canAdminProfiles) {
          setField(row.row)
          toggleModal({ idUser: row.row.id, visibleModal: true })
        }
      }}
      customToolbar={Toolbar}
      checkboxSelection={false}
      showDownload
      columnVisibilityModel={{ country: false }}
      sx={{
        '.MuiDataGrid-columnHeader--moving': {
          backgroundColor: 'inherit !important'
        }
      }}
    />
  )
}

export default TableUser

```

## src/features/user-management/components/ToolbarActionsUser.tsx

```tsx
import { Button } from '@nuam/common-fe-lib-components'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'
import { useScreenActions } from 'store/mf-shell-useScreenActions'

import { EXTERNAL_USER_ACTIONS } from '@/shared/constants/actionCodes'
import { ROUTES } from '@/shared/routes'

const ToolbarActionsUser = () => {
  const { t } = useTranslation('gestion')
  const navigate = useNavigate()
  const location = useLocation()
  const { hasAction } = useScreenActions()
  const canShowAdminProfileButton = hasAction(
    EXTERNAL_USER_ACTIONS.MANAGE_PROFILES
  )
  const canShowCreateUserButton = hasAction(EXTERNAL_USER_ACTIONS.CREATE_USER)

  return (
    <div className="ml-1 flex gap-2">
      {canShowCreateUserButton && (
        <Button
          size="small"
          variant="text"
          className="text-13px"
          onClick={() => {
            navigate(
              ROUTES.USER_MANAGEMENT.subRoutes.EXTERNAL_REGISTER.path.replace(
                ':step',
                '1'
              ),
              {
                state: location.pathname
              }
            )
          }}
        >
          {t('adminUsers.createUser')}
        </Button>
      )}
      {canShowAdminProfileButton && (
        <Button
          size="small"
          variant="text"
          className="text-13px"
          onClick={() => navigate(ROUTES.PROFILE_MANAGEMENT_EXTERNAL.path)}
        >
          {t('adminUsers.manageProfiles')}
        </Button>
      )}
    </div>
  )
}

export default ToolbarActionsUser

```

## src/features/user-management/components/ToolbarActionsUserExternal.tsx

```tsx
import { Button } from '@nuam/common-fe-lib-components'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'
import { useScreenActions } from 'store/mf-shell-useScreenActions'

import { INTERNAL_EXTERNAL_USER_ACTIONS } from '@/shared/constants/actionCodes'
import { ROUTES } from '@/shared/routes'

const ToolbarActionsUser = () => {
  const { t } = useTranslation('gestion')
  const navigate = useNavigate()
  const location = useLocation()
  const { hasAction } = useScreenActions()
  const canShowAdminProfileButton = hasAction(
    INTERNAL_EXTERNAL_USER_ACTIONS.MANAGE_PROFILES
  )
  const canShowCreateUserButton = hasAction(
    INTERNAL_EXTERNAL_USER_ACTIONS.CREATE_USER
  )

  const canShowBusinessGroupsButton = hasAction(
    INTERNAL_EXTERNAL_USER_ACTIONS.BUSINESS_GROUPS
  )

  return (
    <div className="ml-1 flex gap-2">
      {canShowCreateUserButton && (
        <Button
          size="small"
          variant="text"
          className="text-13px"
          onClick={() => {
            navigate(
              ROUTES.USER_MANAGEMENT.subRoutes.EXTERNAL_REGISTER.path.replace(
                ':step',
                '1'
              ),
              { state: location.pathname }
            )
          }}
        >
          {t('adminUsers.createUser')}
        </Button>
      )}
      {canShowAdminProfileButton && (
        <Button
          size="small"
          variant="text"
          className="text-13px"
          onClick={() =>
            navigate(ROUTES.PROFILE_MANAGEMENT_EXTERNAL_ADMIN.path)
          }
        >
          {t('adminUsers.manageProfiles')}
        </Button>
      )}
      {canShowBusinessGroupsButton && (
        <Button
          size="small"
          variant="text"
          className="text-13px uppercase"
          onClick={() => navigate(ROUTES.BUSINESS_GROUPS.path)}
        >
          grupos empresariales
        </Button>
      )}
    </div>
  )
}

export default ToolbarActionsUser

```

## src/features/user-management/components/ToolbarActionseUserInternal.tsx

```tsx
import { Button } from '@nuam/common-fe-lib-components'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'
import { useScreenActions } from 'store/mf-shell-useScreenActions'

import { INTERNAL_USER_ACTIONS } from '@/shared/constants/actionCodes'
import { ROUTES } from '@/shared/routes'

const ToolbarActionsUser = () => {
  const { t } = useTranslation('gestion')
  const navigate = useNavigate()
  const location = useLocation()
  const { hasAction } = useScreenActions()
  const canShowAdminProfileButton = hasAction(
    INTERNAL_USER_ACTIONS.MANAGE_PROFILES
  )
  const canShowCreateUserButton = hasAction(INTERNAL_USER_ACTIONS.CREATE_USER)

  // Permisos por defecto para deshabilitar validación de acciones momentáneamente
  // const canShowAdminProfileButton = true
  // const canShowCreateUserButton = true
  return (
    <div className="ml-1 flex gap-2">
      {canShowCreateUserButton && (
        <Button
          size="small"
          variant="text"
          className="text-13px"
          onClick={() => {
            navigate(
              ROUTES.USER_MANAGEMENT.subRoutes.INTERNAL_REGISTER.path.replace(
                ':step',
                '1'
              ),
              {
                state: location.pathname
              }
            )
          }}
        >
          {t('adminUsers.createUser')}
        </Button>
      )}
      {canShowAdminProfileButton && (
        <Button
          size="small"
          variant="text"
          className="text-13px"
          onClick={() => navigate(ROUTES.PROFILE_MANAGEMENT_INTERNAL.path)}
        >
          {t('adminUsers.manageProfiles')}
        </Button>
      )}
    </div>
  )
}

export default ToolbarActionsUser

```

## src/features/user-management/components/UserEntitySection.tsx

```tsx
import { MaterialIcons, Typography } from '@nuam/common-fe-lib-components'

import useStoragekeyCreateUser from '../hooks/useStoragekeyCreateUser'
import { PropsEntitySection, RegisterFormValues } from '../types/userTypes'
import DetailInfo from './DetailInfoUser'

export const UserEntitySection = ({ t, onEdit }: PropsEntitySection) => {
  const { storageKey } = useStoragekeyCreateUser()

  const values: Partial<RegisterFormValues> = JSON.parse(
    localStorage.getItem(storageKey) || '{}'
  )

  return (
    <div className="w-full pt-2 xl:py-6">
      <div className="flex justify-between pb-3">
        <Typography variant="h6">{t('userData')}</Typography>
        <MaterialIcons.DriveFileRenameOutlineOutlined
          width={24}
          height={24}
          className="cursor-pointer"
          onClick={onEdit}
        />
      </div>
      <div className="flex flex-col gap-0">
        <DetailInfo
          label={t('adminUsers.detailsLabels.reference')}
          value={values?.radicado || ''}
        />
        <DetailInfo
          label={t('adminUsers.detailsLabels.name')}
          value={`${values?.firstName ?? ''} ${values?.lastName ?? ''}`}
        />
        <DetailInfo
          label={t('adminUsers.detailsLabels.corporateEmail')}
          value={values?.email}
        />
        <DetailInfo
          label={'Tipo de identificación'}
          value={values?.docType?.description}
        />
        <DetailInfo
          label={'Número de identificación'}
          value={values?.docNumber}
        />
      </div>
    </div>
  )
}

```

## src/features/user-management/components/UserFilter.tsx

```tsx
import { useCallback } from 'react'

import { AutoCompleteInput } from 'remoteUtilities/components-mf-utilities'

import { getUserOptions } from '@/features/user-management/services/user'

import RenderOptionAutoComplete from '@/shared/components/RenderOptionAutoComplete'

import useParamsFilter from '../hooks/useParamsFilter'
import { AutocompleteOption } from '../types/AutoCompleteStructure'
import { FiltersTableProps } from '../types/FiltersTable'
import { transformOptionsAutoComplete } from '../utils/transformOptionsAutoComplete'

const UserFilter = ({
  filtersTable,
  setFiltersTable,
  typeFilter
}: FiltersTableProps) => {
  const params = useParamsFilter({
    typeFilter,
    profileFilter: filtersTable.profile?.label,
    participantFilter: filtersTable.participant?.id
  })
  const onUserOptions = useCallback(
    async (searchText: string, _page?: number, _limit?: number) => {
      const data = await getUserOptions({
        email: filtersTable.email?.label,
        status: filtersTable.status?.id,
        username: searchText,
        countryId: filtersTable.country?.id,
        ...params
      })

      const dataOptions = transformOptionsAutoComplete(
        { data },
        (item: any) => ({
          id: item.id,
          label: item.userName
        })
      )
      return dataOptions
    },
    [filtersTable]
  )
  return (
    <div className="flex-1">
      <AutoCompleteInput
        label="Usuario"
        renderOption={RenderOptionAutoComplete}
        itemsPerPage={10}
        minSearchLength={0}
        debounceTime={300}
        onChange={(e: AutocompleteOption) => {
          setFiltersTable({
            ...filtersTable,
            username: e
          })
        }}
        fetchOptions={onUserOptions}
      />
    </div>
  )
}

export default UserFilter

```

## src/features/user-management/components/UserRegisterDefault.tsx

```tsx
import { useEffect } from 'react'
import { UseFormGetValues, UseFormSetValue } from 'react-hook-form'
import { useLocation } from 'react-router-dom'

import { TypeUser } from '../constants/typeUser'
import useIsExternalRegister from '../hooks/useIsExternalRegister'
import { RegisterFormValues, UserDetails } from '../types/userTypes'

const UserRegisterDefault = ({
  participantId,
  code,
  name,
  documentNumber,
  users,
  setValue,
  storageKey,
  enterpriseGroup,
  getValues
}: {
  userType: string
  isExternalRegister: boolean
  participantId: number
  name: string
  code: string
  documentNumber: number
  users: UserDetails[]
  getValues: UseFormGetValues<RegisterFormValues>
  setValue: UseFormSetValue<RegisterFormValues>
  storageKey: string
  enterpriseGroup?: { id: number; code: string; name: string }
}) => {
  const location = useLocation().pathname

  const { isExternalRegister, userType } = useIsExternalRegister()

  useEffect(() => {
    if (
      (isExternalRegister && userType === TypeUser.EXTERNAL.toString()) ||
      (!isExternalRegister && userType === TypeUser.INTERNAL)
    ) {
      if (participantId) {
        setValue('participants', [{ id: participantId, label: name }])
        enterpriseGroup &&
          setValue('enterpriseGroup', {
            id: enterpriseGroup?.id,
            label: enterpriseGroup?.name
          })
        const profile = getValues().selectedProfile
        const currentProfile: RegisterFormValues['selectedProfile'] = {
          [name]: profile?.[name]
        }
        setValue('selectedProfile', currentProfile)
      } else {
        setValue('participants', [])
        setValue('enterpriseGroup', undefined)
        setValue('selectedProfile', undefined)
      }
    }
  }, [
    participantId,
    name,
    code,
    documentNumber,
    isExternalRegister,
    userType,
    setValue,
    users,
    storageKey,
    location,
    enterpriseGroup
  ])
}

export default UserRegisterDefault

```

## src/features/user-management/components/ViewDetailField.tsx

```tsx
import { Button } from '@nuam/common-fe-lib-components'
import { Dispatch, SetStateAction } from 'react'
import { useTranslation } from 'react-i18next'

import { type FieldTable } from '../types/fieldTable'

interface ViewDetailProps {
  toggleModal: (params?: { idUser?: number; visibleModal?: boolean }) => void
  field: FieldTable
  setField: Dispatch<SetStateAction<FieldTable | null>>
}
function ViewDetail({ field, toggleModal, setField }: ViewDetailProps) {
  const { t } = useTranslation('gestion')

  return (
    <>
      <Button
        variant="text"
        onClick={() => {
          toggleModal({ idUser: field.id, visibleModal: true })
          setField(field)
        }}
        className="px-1 font-normal normal-case tracking-0.14px underline"
      >
        {t('adminUsers.table.actions.viewDetail')}
      </Button>
    </>
  )
}

export default ViewDetail

```

## src/features/user-management/constants/commonStylesAutoComplete.ts

```typescript
export const commonStylesAutoComplete = {
  height: 40,
  sx: {
    flex: 1,
    minWidth: '144px',
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: 'var(--mui-palette-primary-main)'
      }
    },
    '& .MuiInputLabel-root': {
      display: 'flex',
      alignItems: 'center',
      transform: 'translate(16px, 36%)',
      '&.Mui-focused': {
        color: 'var(--mui-palette-primary-main)'
      },

      '&.MuiInputLabel-shrink': {
        transform: 'translate(12px, -9px) scale(0.75)'
      }
    }
  }
}

```

## src/features/user-management/constants/emailCodes.ts

```typescript
export const EmailCodes = Object.freeze({
  // Estos códigos se utilizan para identificar las plantillas de correo electrónico que se envían a los usuarios.
  // Desbloqueo de un usuario que estaba bloqueado
  // userId
  NOTIFICATION_UNBLOCK: 'NOTIFICATION_UNBLOCK',
  // Notificación de un nuevo participante registrado en el sistema
  // newParticipantName, userId
  NOTIFICATION_USER_NEW_PARTICIPANT: 'NOTIFICATION_USER_NEW_PARTICIPANT',
  // Notificacion para cerrar la sesion de un usuario
  // userId, token
  NOTIFICATION_LOGIN_ATTEMPT: 'NOTIFICATION_LOGIN_ATTEMPT',
  // Notificacion para nuevos usuarios
  // passwordTemp, userId
  NOTIFICATION_NEW_USER: 'NOTIFICATION_NEW_USER'
})

```

## src/features/user-management/constants/errorCode.ts

```typescript
export const ERROR_CODE = {
  USER_EXIST_ANOTHER_GROUP: 'USER_ALREADY_EXISTS_IN_ANOTHER_GROUP',
  USER_NOT_FOUND: 'USER_NOT_FOUND',
  USER_IDENTIFICATION_EXISTS: 'USER_ID_TYPE_IDENTIFICATION_PARTICIPANT_EXISTS'
}

```

## src/features/user-management/constants/filtersStateKeys.ts

```typescript
export enum FiltersStateKey {
  COUNTRY = 'country',
  PARTICIPANT = 'participant',
  STATUS = 'status',
  EMAIL = 'email',
  USER_NAME = 'username',
  PROFILE = 'profile'
}

```

## src/features/user-management/constants/index.ts

```typescript
import { EditProfileStep } from '../components/EditProfileStep'
import { RegisterStep } from '../components/RegisterStep'
import { ReviewProfileStep } from '../components/ReviewProfileStep'

export const USER_STEP_COMPONENTS = {
  1: RegisterStep,
  2: EditProfileStep,
  3: ReviewProfileStep
}

export const STRINGS = {
  LOCAL_STORAGE_USERNAME: 'username',
  GET_SELECT_OPTIONS: {
    ERROR_MESSAGE: 'Error fetching select options:',
    PARTICIPANT: 'participant',
    PROFILES: 'profile',
    STATUS: 'status'
  },
  FILTER_MAPPING_TO_STRING: {
    participantId: 'Participantes',
    profileId: 'Perfiles',
    status: 'Estado'
  },
  FILTER_MAPPING_TO_ID: {
    Participantes: 'participantId',
    Perfiles: 'profileId',
    Estado: 'status'
  },
  FILTER_LABELS: {
    PARTICIPANT: 'Participantes',
    PROFILES: 'Perfiles',
    STATUS: 'Estado'
  },
  BUTTON_NAMES: {
    CLEAR_FILTERS: 'Limpiar filtros',
    APPLY_FILTERS: 'Filtrar'
  }
}

```

## src/features/user-management/constants/keysLocalStorage.ts

```typescript
export enum keysLocalStorage {
  SHOW_MODAL = 'showModal',
  FORM_DATA_INTERNAL = 'formDataInternal'
}

```

## src/features/user-management/constants/participantSession.ts

```typescript
export const keyParticipantSession = 'participant_session'

```

## src/features/user-management/constants/status.ts

```typescript
export const messagesUpdatedStatus = {
  ACTIVO: 'Se activó la cuenta exitosamente.',
  INACTIVO: 'Se desactivó la cuenta exitosamente.',
  SUSPENDIDO: 'Se suspendió la cuenta exitosamente.'
}

export const textBtnStates = {
  ACTIVO: 'activar',
  INACTIVO: 'inactivar',
  SUSPENDIDO: 'suspender',
  BLOQUEADO: 'bloquear'
}

export const userStatus = {
  ACTIVE: 500
}

export enum Status {
  ACTIVE = 'ACTIVO',
  INACTIVE = 'INACTIVO',
  SUSPENDED = 'SUSPENDIDO',
  BLOCKED = 'BLOQUEADO'
}

```

## src/features/user-management/constants/typeUser.ts

```typescript
export enum TypeUser {
  'EXTERNAL' = 'EXTERNAL',
  'INTERNAL' = 'INTERNAL'
}

```

## src/features/user-management/hooks/useAssignProfile.ts

```typescript
import { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'store/mf-store'

import { getProfiles } from '../services/getProfile'

const useAssignProfile = (currentParticipant: string) => {
  const { participantId } = useSelector(
    (state: RootState) =>
      state.auth.infoUserNubo?.[0] || state.auth.infoUserNubo
  )
  const [optionsProfile, setOptionsProfile] = useState<
    { label: string; value: number }[]
  >([])

  const onProfileOptions = useCallback(async () => {
    const data = await getProfiles({ participant: currentParticipant })
    const optionsProfileFilter = data.map((item: any) => ({
      label: item.name,
      value: item.id
    }))
    setOptionsProfile(optionsProfileFilter)
  }, [participantId])
  useEffect(() => {
    onProfileOptions()
  }, [onProfileOptions])
  return { optionsProfile }
}

export default useAssignProfile

```

## src/features/user-management/hooks/useDetailForProfile.ts

```typescript
import { useEffect, useState } from 'react'

import { getDetailProfile } from '../services/detailForProfile'
import { RootObject } from '../types/fieldTable'

const useDetailForProfile = (idProfile?: number) => {
  const [detailPermissions, setDetaiLpermissions] = useState<RootObject>()
  const getServiceDetailProfile = async () => {
    const data = await getDetailProfile(idProfile!)
    setDetaiLpermissions(data)
  }
  useEffect(() => {
    if (idProfile) {
      getServiceDetailProfile()
    }
  }, [idProfile])
  return { detailPermissions }
}

export default useDetailForProfile

```

## src/features/user-management/hooks/useDetailProfile.ts

```typescript
import { useState } from 'react'

const useDetailProfile = () => {
  const [modalConfirm, setModalConfirm] = useState(false)

  return {
    propsAssignPermissions: {
      modalConfirm,
      setModalConfirm
    },
    saveProfile: () => {
      setModalConfirm(true)
    }
  }
}

export default useDetailProfile

```

## src/features/user-management/hooks/useDetailUser.ts

```typescript
import { useCallback, useEffect, useState } from 'react'

export const useDetailuser = (visibleDefualt: boolean = false) => {
  const [visibleModalDetail, setVisibleModalDetail] = useState(visibleDefualt)
  const [fieldIdUser, setFieldIdUser] = useState<number>()

  const toggleModal = useCallback(
    (params?: { idUser?: number; visibleModal?: boolean }) => {
      setVisibleModalDetail((prev) => params?.visibleModal ?? !prev)
      setFieldIdUser(params?.idUser)
    },
    []
  )
  useEffect(() => {
    setVisibleModalDetail(visibleDefualt)
  }, [visibleDefualt])

  return {
    toggleModal,
    visibleModalDetail,
    fieldIdUser,
    setVisibleModalDetail
  }
}

```

## src/features/user-management/hooks/useDispatchQueryParams.ts

```typescript
import { Dispatch, SetStateAction, useEffect } from 'react'

import { FiltersStateKey } from '../constants/filtersStateKeys'
import { FiltersTableState } from '../types/FiltersTable'

const useDispatchQueryParams = ({
  filtersTable,
  params,
  defaultParams,
  setUrl
}: {
  filtersTable: FiltersTableState
  params: URLSearchParams
  defaultParams: string
  setUrl: Dispatch<SetStateAction<string>>
}) => {
  const endpoint = `/user`
  useEffect(() => {
    Object.entries(filtersTable).forEach(([key, value]) => {
      const label = value?.label
      const filterForName = [
        FiltersStateKey.PROFILE,
        FiltersStateKey.PARTICIPANT,
        FiltersStateKey.USER_NAME
      ]
      if (filterForName.includes(key as FiltersStateKey) && label) {
        params.append(key, label)
      } else if (FiltersStateKey.COUNTRY === key && value?.id) {
        params.append('countryId', value?.id)
      } else {
        if (!!value) {
          params.append(key, value?.id)
        } else {
          params.delete(key)
        }
      }
    })
    const urlParams = `${endpoint}?${params.toString()}`
    setUrl(urlParams)
  }, [filtersTable, defaultParams])
}

export default useDispatchQueryParams

```

## src/features/user-management/hooks/useDownloadGenerateCSV.ts

```typescript
import { formattedDate } from 'remoteUtilities/formattedDate'

import { getDownloadUsers } from '../services/getDownloadUsers'
import { generateCSVUsers } from '../utils/generateCSV'

export const useDownloadGenerateCSV = (
  url: string,
  columns: any,
  isUserInternal?: boolean
) => {
  const currentDate = formattedDate({ format: 'YYYYMMDD' })
  const onDownload = async () => {
    const dataDownloadUser = await getDownloadUsers(url)
    await generateCSVUsers({
      data: dataDownloadUser.content,
      headersTable: columns,
      name: `${currentDate}_users_${isUserInternal ? 'internal' : 'external'}`
    })
  }
  return { onDownload }
}

```

## src/features/user-management/hooks/useEditProfileStep.ts

```typescript
import { useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import { matchPath, useLocation, useNavigate } from 'react-router-dom'
import { RootState as RootStateAuth } from 'store/mf-store'

import { ROUTES } from '@/shared/routes'
import { localStorageUtil } from '@/shared/utils/localStorageUtil'

import { Profile } from '../types/userTypes'
import { useProfileFilter } from './useProfileFilter'
import { useProfileForm } from './useProfileForm'
import { useProfilesLoader } from './useProfileLoader'

export const useEditProfileStep = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { loadFromLocalStorage, saveToLocalStorage } = localStorageUtil()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const isExternalRegister =
    matchPath(
      ROUTES.USER_MANAGEMENT.subRoutes!.EXTERNAL_REGISTER.path,
      location.pathname
    ) !== null
  const { userType } = useSelector(
    (state: RootStateAuth) => state.auth.infoUserNubo
  )
  const storageKey = isExternalRegister
    ? 'formDataExternal'
    : 'formDataInternal'
  const localFormData = loadFromLocalStorage(storageKey) || {}
  const { filter, setFilter, filteredData, setFilteredData, applyFilter } =
    useProfileFilter()

  const handleNavigate = useCallback(
    (nextStep: number) => {
      navigate(
        isExternalRegister
          ? ROUTES.USER_MANAGEMENT.subRoutes!.EXTERNAL_REGISTER.path.replace(
              ':step',
              nextStep.toString()
            )
          : ROUTES.USER_MANAGEMENT.subRoutes!.INTERNAL_REGISTER.path.replace(
              ':step',
              nextStep.toString()
            )
      )
    },
    [isExternalRegister]
  )

  const { formData, errors, handleProfileSelect, handleSubmit, validateForm } =
    useProfileForm(localFormData, () => handleNavigate(3))

  const onProfileSelect = useCallback(
    (profile: Profile, participant: string) => {
      handleProfileSelect(profile, participant)
      const newProfile = {
        ...formData.selectedProfile,
        [participant]: profile
      }
      const updatedFormData = {
        ...formData,
        selectedProfile: newProfile,
        scopeProfile: profile.permissions,
        idProfile: profile.id
      }
      saveToLocalStorage(storageKey, updatedFormData)
      return updatedFormData
    },
    [formData, storageKey]
  )

  const { isLoading, setIsLoading } = useProfilesLoader({
    userType,
    applyFilter,
    setFilteredData,
    setIsModalOpen,
    localFormData
  })

  return {
    formData,
    filteredData,
    errors,
    filter,
    setFilter,
    onProfileSelect,
    handleSubmit,
    handleNavigate,
    isLoading,
    setIsLoading,
    isModalOpen,
    setIsModalOpen,
    navigate,
    validateForm
  }
}

```

## src/features/user-management/hooks/useExistUser.tsx

```tsx
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react'
import { UseFormSetValue, UseFormWatch } from 'react-hook-form'

import { ModalAlertProps } from '@/shared/types/declare'

import { ERROR_CODE } from '../constants/errorCode'
import { keysLocalStorage } from '../constants/keysLocalStorage'
import { TypeUser } from '../constants/typeUser'
import validateEmail from '../services/validateEmail'
import validateUser from '../services/validateUser'
import { CountryOption } from '../types/countries'
import { RegisterFormValues, Profile } from '../types/userTypes'
import { isDifferentParticipants } from '../utils/isDifferentParticipants'
import useIsExternalRegister from './useIsExternalRegister'
import useStoragekeyCreateUser from './useStoragekeyCreateUser'

const useExistUser = ({
  setValue,
  watch,
  setModalContent,
  handleBack,
  changeValidationsNextStep
}: {
  setValue: UseFormSetValue<RegisterFormValues>
  watch: UseFormWatch<RegisterFormValues>
  setModalContent: Dispatch<SetStateAction<ModalAlertProps | null>>
  handleBack: () => void
  changeValidationsNextStep: (
    value: Partial<{
      lengthParticipant: number
      existUser: boolean
    }>
  ) => void
}) => {
  const valueShowModal =
    localStorage.getItem(keysLocalStorage.SHOW_MODAL) ?? 'false'

  const [existUser, setExistUser] = useState(true)
  const [existUserInParticipant, setExistUserInParticipant] = useState(false)
  const [showModal, setShowModal] = useState(
    valueShowModal === 'true' ? true : false
  )
  const completeFields = ({
    firstName,
    lastName,
    docType,
    documentNumber,
    participants
  }: {
    docType?: { id: string; description: string }
    documentNumber?: string
    firstName: string
    lastName: string
    country?: CountryOption
    participants?: { id: number; label: string }[]
  }) => {
    setValue('firstName', firstName)
    setValue('lastName', lastName)
    setValue('docType', docType)
    setValue('docNumber', documentNumber)
    participants && setValue('participants', participants)
  }
  const values = watch()
  const email = values.email
  const confirmEmail = values.confirmEmail
  const participants = values.participants
  const participantsDefault = values.participantsDefault
  const participantIsEqual = useMemo(
    () => isDifferentParticipants({ participants, participantsDefault }),
    [participants, participantsDefault]
  )
  const { storageKey } = useStoragekeyCreateUser()

  const { isExternalRegister, userType } = useIsExternalRegister()
  const isInternalRegister =
    !isExternalRegister && userType === TypeUser.INTERNAL
  const typeUser =
    (isExternalRegister && userType === TypeUser.EXTERNAL) || isInternalRegister
  const showErrorModal = useCallback(
    (title: string, message: string) => {
      setModalContent({
        title,
        message,
        textSuccess: 'Entendido',
        variant: 'error',
        onClick: () => setModalContent(null)
      })
    },
    [setModalContent]
  )
  const validationsEmail =
    email && confirmEmail && email === confirmEmail && !showModal
  const validateExistUser = useCallback(async () => {
    const participantId = participants?.[0]?.id
    if (participants?.length ?? 0 > 0) {
      if (validationsEmail) {
        try {
          const allParticipants = [...(participants ?? [])].reduce<
            { id: number; label: string }[]
          >((acc, current) => {
            if (!acc.some((item) => item.id === current.id)) {
              acc.push(current)
            }
            return acc
          }, [])
          const userExist = await validateEmail({
            email,
            participantIds: participantId
          })

          const participantExist = userExist.participants[0]
          const allParticipantsExist = userExist.participants.map(
            (participant) => ({
              id: participant.id,
              label: participant.name
            })
          )

          const participantIsEqual = isDifferentParticipants({
            participants,
            participantsDefault: allParticipantsExist
          })
          if (participantIsEqual) {
            setExistUserInParticipant(true)
            showErrorModal(
              'Email Registrado',
              `El usuario a crear ya se encuentra registrado en la Entidad seleccionada.`
            )
          } else {
            setModalContent({
              title: 'Importante',
              message: `¿El usuario ya se encuentra creado en la Entidad ${participantExist.code} ${participantExist.name}, deseas continuar con la creación? `,
              onClick() {
                setShowModal(true)
                const participantAfp = userExist.participantAfp
                const participantsDefault = participantAfp
                  ? [{ label: participantAfp.name, id: participantAfp.id }]
                  : allParticipants
                completeFields({
                  docType: {
                    id: userExist.identificationType.id.toString(),
                    description: userExist.identificationType.description
                  },
                  documentNumber: userExist.identification,
                  firstName: userExist.firstName,
                  lastName: userExist.lastName,
                  participants: participantsDefault,
                  country: userExist.country
                })
                const profiles: Record<string, Profile> = {}
                userExist.profiles.forEach((profile) => {
                  profiles[profile.name] = profile
                })
                setValue('selectedProfile', profiles)
                setValue('jiraNumber', userExist.jiraNumber)
                setValue('idKeycloak', userExist.idKeycloak)
                setValue('idUser', userExist.id)
                setValue('participantsDefault', allParticipantsExist)
                setExistUser(true)
                setExistUserInParticipant(false)
                setModalContent(null)
              },
              handleCancel() {
                setShowModal(false)
                handleBack()
                localStorage.removeItem(storageKey)
              },
              variant: 'warning',
              textSuccess: 'Aceptar',
              textCancel: 'Cancelar'
            })
          }
        } catch (error: any) {
          const accessError = error?.response?.data

          const errorCode = accessError?.errorCode
          if (errorCode === ERROR_CODE.USER_NOT_FOUND) {
            setExistUser(false)
            changeValidationsNextStep({
              existUser: false
            })
            setExistUserInParticipant(false)
          } else {
            setExistUserInParticipant(false)
            setExistUser(false)
            setShowModal(false)
            setValue('participantsDefault', [])
          }
        }
      }
    }
  }, [email, confirmEmail, participants, existUser, showModal, typeUser])

  const validateUserInOtherGroups = useCallback(async () => {
    if (email && confirmEmail && email === confirmEmail && !showModal) {
      try {
        const participantsId =
          participants?.map((participant) => participant?.id) ?? []
        const participantsUser = await validateUser({
          email: email,
          participantIds: participantsId
        })
        changeValidationsNextStep({
          lengthParticipant: participantsUser?.length ?? 0,
          existUser: true
        })
      } catch (error: any) {
        const accessError = error?.response?.data
        const errorCode = accessError?.errorCode
        if (errorCode === ERROR_CODE.USER_EXIST_ANOTHER_GROUP) {
          setExistUserInParticipant(true)
          setExistUser(false)
          showErrorModal(
            'Email Registrado',
            'El usuario a crear ya se encuentra registrado en otro grupo empresarial'
          )
        }
      }
    }
  }, [participants, email, confirmEmail])
  useEffect(() => {
    validateUserInOtherGroups()
  }, [validateUserInOtherGroups])
  useEffect(() => {
    if (
      (!(!!email && !!confirmEmail) || email !== confirmEmail) &&
      !isInternalRegister
    ) {
      completeFields({
        docType: undefined,
        documentNumber: '',
        firstName: '',
        lastName: '',
        country: undefined
      })
      setValue('selectedProfile', undefined)
      setExistUser(true)
      setShowModal(false)
    }
  }, [email, confirmEmail, participants])
  useEffect(() => {
    if (!!userType) {
      if (isInternalRegister) {
        setShowModal(false)
        setExistUser(false)
      } else {
        validateExistUser()
      }
    }
  }, [validateExistUser, userType, isInternalRegister])
  const validResetModal = showModal && participantIsEqual
  useEffect(() => {
    if (validResetModal) {
      setShowModal(false)
    }
  }, [validResetModal])
  useEffect(() => {
    localStorage.setItem(keysLocalStorage.SHOW_MODAL, showModal.toString())
  }, [showModal])
  return { existUser, existUserInParticipant }
}

export default useExistUser

```

## src/features/user-management/hooks/useFetchOptionsStatus.ts

```typescript
import { useEffect, useState } from 'react'

import { getStatusService } from '../services/status'
import { ResponseStatus } from '../types/statusService'

const useFetchOptionsStatus = () => {
  const [optionsStatus, setOptionsStatus] = useState<ResponseStatus>([])
  const fetchOptionsStatus = async () => {
    const resData = await getStatusService({})
    setOptionsStatus(resData)
  }
  useEffect(() => {
    fetchOptionsStatus()
  }, [])
  return { optionsStatus }
}

export default useFetchOptionsStatus

```

## src/features/user-management/hooks/useFilter.ts

```typescript
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'store/mf-store'

import { getProfilesByIdParticipant } from '@/features/profile-management/services/profiles'
import { getSelects } from '@/features/user-management/services/users'

import { getProfiles } from '@/shared/services'

import { STRINGS } from '../constants'

export const useFilter = (
  setUrlFilter: (url: string) => void,
  sidePanel: (clear: boolean) => void,
  setClearFilters: (clear: boolean) => void
) => {
  const [selectedFilters, setSelectedFilters] = useState<{
    [key: string]: string
  }>({})
  const [selectOptions, setSelectOptions] = useState<{
    [key: string]: { label: string; value: string }[]
  }>({
    participant: [],
    profiles: [],
    status: []
  })
  const client_user = localStorage.getItem(STRINGS.LOCAL_STORAGE_USERNAME)
  const { participantId, userType } = useSelector(
    (state: RootState) =>
      state.auth.infoUserNubo?.[0] || state.auth.infoUserNubo
  )

  const mapResponse = (item: {
    description?: string
    name?: string
    id: string
  }) => ({
    label: item.name,
    value: item.id
  })

  const getProfileOptions = async (userType: string, participantId: number) => {
    try {
      const response =
        userType === 'EXTERNAL'
          ? await getProfilesByIdParticipant(participantId)
          : await getProfiles(participantId)

      if (response.content && Array.isArray(response.content)) {
        return response.content.map(mapResponse)
      } else {
        throw new Error('Unexpected response structure')
      }
    } catch (error) {
      console.error('Error fetching profile options')
      throw error
    }
  }

  useEffect(() => {
    const getSelectOptions = async () => {
      try {
        const [participantOptions, profileOptions, statusOptions] =
          await Promise.all([
            getSelects(STRINGS.GET_SELECT_OPTIONS.PARTICIPANT),
            getProfileOptions(userType, participantId),
            getSelects(STRINGS.GET_SELECT_OPTIONS.STATUS)
          ])

        setSelectOptions({
          participant: participantOptions,
          profiles: profileOptions,
          status: statusOptions
        })
      } catch (error) {
        console.error(STRINGS.GET_SELECT_OPTIONS.ERROR_MESSAGE)
        throw error
      }
    }

    getSelectOptions()
  }, [client_user, userType, participantId])

  useEffect(() => {
    const currentUrl = new URL(window.location.href)
    const params = new URLSearchParams(currentUrl.search)
    if (params.size > 0) {
      const filterMapping: { [key: string]: string } =
        STRINGS.FILTER_MAPPING_TO_STRING
      const savedFilters: { [key: string]: string } = {}
      params.forEach((value, key) => {
        savedFilters[filterMapping[key]] = value
      })
      setSelectedFilters(savedFilters)
    }
  }, [])

  const handleSelectChanged = (label: string, value: string) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [label]: value
    }))
  }

  const handleClearFilters = () => {
    window.history.pushState({}, '', window.location.pathname)
    setSelectedFilters({})
  }

  const handleCreateUrl = () => {
    const filterMapping: { [key: string]: string } =
      STRINGS.FILTER_MAPPING_TO_ID
    const queryString = Object.entries(selectedFilters)
      .map(
        ([key, value], index) =>
          `${index === 0 ? '?' : '&'}${filterMapping[key] || key}=${value}`
      )
      .join('')

    setUrlFilter(queryString)

    const currentUrl = new URL(window.location.href)
    currentUrl.search = queryString.replace(/^&/, '')

    window.history.pushState({}, '', currentUrl.toString())
    setClearFilters(true)
    sidePanel(false)
  }

  return {
    selectedFilters,
    selectOptions,
    handleSelectChanged,
    handleClearFilters,
    handleCreateUrl
  }
}

```

## src/features/user-management/hooks/useFormPersistence.ts

```typescript
import { useEffect } from 'react'
import { UseFormWatch } from 'react-hook-form'

import { RegisterFormValues } from '../types/userTypes'

interface UseFormPersistenceOptions {
  watch: UseFormWatch<RegisterFormValues>
  storageKey: string
}

export const useFormPersistence = ({
  watch,
  storageKey
}: UseFormPersistenceOptions) => {
  useEffect(() => {
    const subscription = watch((value) => {
      localStorage.setItem(storageKey, JSON.stringify(value))
    })
    return () => subscription.unsubscribe()
  }, [watch, storageKey])
}

```

## src/features/user-management/hooks/useFormRegisterSubmission.ts

```typescript
import { useCallback, useState } from 'react'
import { UseFormGetValues } from 'react-hook-form'
import { NavigateFunction } from 'react-router-dom'

import { ModalAlertProps } from '@/shared/types/declare'

import { ERROR_CODE } from '../constants/errorCode'
import { TypeUser } from '../constants/typeUser'
import validateUser from '../services/validateUser'
import { RegisterFormValues } from '../types/userTypes'
import useIsExternalRegister from './useIsExternalRegister'

interface UseFormSubmissionOptions {
  navigate: NavigateFunction
  setModalContent: (content: ModalAlertProps | null) => void
  setIsLoading: (loading: boolean) => void
  getValues: UseFormGetValues<RegisterFormValues>
}

export const useFormSubmission = ({
  navigate,
  setModalContent,
  setIsLoading,
  getValues
}: UseFormSubmissionOptions) => {
  const { isExternalRegister, userType } = useIsExternalRegister()
  const [validationsNextStep, setValidationsNextStep] = useState({
    lengthParticipant: 0,
    existUser: true
  })
  const changeValidationsNextStep = (
    value: Partial<typeof validationsNextStep>
  ) => {
    setValidationsNextStep((previous) => ({
      ...previous,
      ...value
    }))
  }
  const handleNavigate = useCallback(
    (nextStep: number) => {
      const basePath = isExternalRegister
        ? '/user-management/user-external-register'
        : '/user-management/user-internal-register'
      navigate(`${basePath}/${nextStep}`)
    },
    [navigate, isExternalRegister]
  )

  const showErrorModal = useCallback(
    (title: string, message: string) => {
      setModalContent({
        title,
        message,
        textSuccess: 'Entendido',
        variant: 'error',
        onClick: () => setModalContent(null)
      })
    },
    [setModalContent]
  )

  const handleSubmit = useCallback(
    async (formData: RegisterFormValues) => {
      setIsLoading(true)
      const {
        docType,
        docNumber,
        enterpriseGroup: enterprise,
        participants
      } = getValues()
      const { email, enterpriseGroup } = formData || {}

      try {
        if (
          !email ||
          !docType ||
          !docNumber ||
          !(enterpriseGroup ?? enterprise)
        ) {
          showErrorModal(
            'Datos incompletos',
            'Por favor completa todos los campos requeridos.'
          )
          return
        }
        const lengthParticipants = participants?.length!
        if (
          isExternalRegister &&
          (userType === TypeUser.EXTERNAL || userType === TypeUser.INTERNAL)
        ) {
          if (
            validationsNextStep.lengthParticipant === 0 ||
            lengthParticipants > 0
          ) {
            handleNavigate(2)
          }
          return
        } else {
          if (
            validationsNextStep.lengthParticipant === 0 ||
            !validationsNextStep.existUser
          ) {
            handleNavigate(2)
          } else {
            showErrorModal(
              'Email Registrado',
              'El usuario que se desea crear ya se encuentra registrado.'
            )
          }
        }
      } catch (error) {
        console.error('❌ Error en validación:', error) // Debug

        showErrorModal(
          'Ocurrió un error inesperado',
          'Vuelve a intentarlo, si el error persiste comunícate a xxxxxx@nuamx.com o 55555555'
        )
      } finally {
        setIsLoading(false)
      }
    },
    [handleNavigate, showErrorModal, setIsLoading, validationsNextStep]
  )

  return { handleSubmit, changeValidationsNextStep }
}

```

## src/features/user-management/hooks/useFormReset.ts

```typescript
import { useCallback, useEffect, useRef, useState } from 'react'
import { UseFormReset } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { RootState } from 'store/mf-store'

import { keyParticipantSession } from '../constants/participantSession'
import { TypeUser } from '../constants/typeUser'
import { RegisterFormValues } from '../types/userTypes'
import useIsExternalRegister from './useIsExternalRegister'

interface UseFormResetOptions {
  reset: UseFormReset<RegisterFormValues>
  storageKey: string
}

export const useFormReset = ({ reset, storageKey }: UseFormResetOptions) => {
  const { isExternalRegister, userType } = useIsExternalRegister()
  const { participantId, name, enterpriseGroup } = useSelector(
    (state: RootState) => state.auth.infoUserNubo
  )
  const previousParticipantId = sessionStorage.getItem(keyParticipantSession)

  const isParticipantChanged =
    previousParticipantId &&
    participantId &&
    previousParticipantId !== participantId?.toString()

  const previousIsExternalRegister = useRef(isExternalRegister)
  const [shouldResetForm, setShouldResetForm] = useState(false)

  const emptyFormValues: Partial<RegisterFormValues> = {
    radicado: '',
    firstName: '',
    lastName: '',
    email: '',
    confirmEmail: '',
    docType: undefined,
    docNumber: '',
    participants: [],
    enterpriseGroup: undefined
  }
  const onFormReset = useCallback(() => {
    setShouldResetForm(false)
  }, [])

  useEffect(() => {
    if (
      previousParticipantId &&
      participantId &&
      (previousIsExternalRegister.current !== isExternalRegister ||
        isParticipantChanged)
    ) {
      const previousStorageKey = previousIsExternalRegister.current
        ? 'formDataExternal'
        : 'formDataInternal'
      localStorage.removeItem(previousStorageKey)

      setShouldResetForm(true)

      previousIsExternalRegister.current = isExternalRegister
    }
    if (participantId) {
      sessionStorage.setItem(keyParticipantSession, String(participantId))
    }
  }, [isExternalRegister, isParticipantChanged])

  useEffect(() => {
    if (shouldResetForm) {
      if (
        (isExternalRegister && userType === TypeUser.EXTERNAL) ||
        (!isExternalRegister && userType === TypeUser.INTERNAL) ||
        (!isExternalRegister && userType === TypeUser.EXTERNAL)
      ) {
        if (participantId) {
          emptyFormValues.participants = [{ id: participantId, label: name }]
          if (enterpriseGroup) {
            emptyFormValues.enterpriseGroup = {
              id: enterpriseGroup?.id,
              label: enterpriseGroup?.name
            }
          }
        }
      } else {
        emptyFormValues.participants = []
        emptyFormValues.selectedProfile = undefined
        emptyFormValues.enterpriseGroup = undefined
      }
      reset(emptyFormValues)
      onFormReset()
    }
  }, [
    shouldResetForm,
    reset,
    onFormReset,
    emptyFormValues,
    isExternalRegister,
    userType,
    participantId,
    name,
    enterpriseGroup
  ])

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem(storageKey) || '{}')
    if (Object.keys(savedData).length > 0) {
      reset(savedData)
    } else {
      if (
        (isExternalRegister && userType === TypeUser.EXTERNAL) ||
        (!isExternalRegister && userType === TypeUser.INTERNAL) ||
        (!isExternalRegister && userType === TypeUser.EXTERNAL)
      ) {
        if (participantId) {
          emptyFormValues.participants = [{ id: participantId, label: name }]
          if (enterpriseGroup && !isExternalRegister) {
            emptyFormValues.enterpriseGroup = {
              id: enterpriseGroup?.id,
              label: enterpriseGroup?.name
            }
          }
          reset(emptyFormValues)
        }
      } else {
        emptyFormValues.participants = []
        emptyFormValues.enterpriseGroup = undefined
        emptyFormValues.selectedProfile = undefined
        reset(emptyFormValues)
      }
    }
  }, [
    storageKey,
    reset,
    isExternalRegister,
    userType,
    enterpriseGroup,
    participantId,
    name
  ])
}

```

## src/features/user-management/hooks/useGetDetailUser.ts

```typescript
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'store/mf-store'

import getDetailuser from '../services/getDetailuser'
import { DetailUser } from '../types/getDetailUser'

const useGetDetailUser = (userId: number) => {
  const [detailUser, setDetailUser] = useState<Partial<DetailUser>>({})
  const { participantId } = useSelector(
    (state: RootState) => state.auth.infoUserNubo
  )
  const getDetail = async () => {
    const resService = await getDetailuser(userId, participantId)
    setDetailUser(resService)
  }
  useEffect(() => {
    getDetail()
    return () => {
      setDetailUser({})
    }
  }, [participantId])
  return { detailUser, getDetail }
}

export default useGetDetailUser

```

## src/features/user-management/hooks/useGetProfilePermissions.ts

```typescript
import { useCallback, useEffect, useState } from 'react'

import getProfilePermissions from '../services/getProfilePermissionsOld'
import { Profile } from '../types/fieldTable'

interface Props {
  idParticipant: number
  profileName?: string
  profileId?: string
  executeInitial?: boolean
}
const useGetProfilePermissions = ({
  idParticipant,
  profileId,
  profileName,
  executeInitial = true
}: Props) => {
  const [permissionsProfile, setPermissionsProfile] = useState<Profile[]>([])
  const profilePermissionsService = useCallback(
    async ({
      idParticipant,
      profileId,
      profileName
    }: Exclude<Props, 'executeInitial'>) => {
      const data = (await getProfilePermissions({
        idParticipant,
        profileName,
        profileId
      })) as Profile[]
      return data
    },
    []
  )
  const getInfoProfile = useCallback(async () => {
    if (executeInitial) {
      const data = await profilePermissionsService({
        idParticipant,
        profileId,
        profileName
      })
      setPermissionsProfile(data)
    }
  }, [profileName, profileId, idParticipant])
  useEffect(() => {
    getInfoProfile()
  }, [getInfoProfile])
  return { permissionsProfile, profilePermissionsService }
}

export default useGetProfilePermissions

```

## src/features/user-management/hooks/useGetProfilesUser.ts

```typescript
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'store/mf-store'

import { getProfileUser } from '../services/getProfilesUser'

const useGetProfilesUser = (profileName: string) => {
  const [profilesUser, setProfilesUser] = useState([])
  const { participantId } = useSelector(
    (state: RootState) => state.auth.infoUserNubo
  )

  const getDataProfileUser = async () => {
    const { data } = await getProfileUser(participantId, profileName)
    setProfilesUser(data)
    return data
  }
  useEffect(() => {
    if (participantId) {
      getDataProfileUser()
    }
    return () => {
      setProfilesUser([])
    }
  }, [participantId, profileName])
  return { profilesUser, setProfilesUser }
}

export default useGetProfilesUser

```

## src/features/user-management/hooks/useHandleEyeClick.ts

```typescript
import { Dispatch, SetStateAction, useState } from 'react'

type UseHandleEyeClickProps = {
  setLoading: (value: boolean) => void
  setIsModalEyeOpen: Dispatch<SetStateAction<boolean>>
}

const useHandleEyeClick = ({
  setLoading,
  setIsModalEyeOpen
}: UseHandleEyeClickProps) => {
  const [selectProfile, setSelectProfile] = useState<number>()

  const handleEyeClick = async (idProfile: number) => {
    try {
      setSelectProfile(idProfile)
      setIsModalEyeOpen(true)
    } catch (error) {
      console.error('Error fetching permissions:', error)
    } finally {
      setLoading(false)
    }
  }

  return { handleEyeClick, selectProfile }
}

export default useHandleEyeClick

```

## src/features/user-management/hooks/useHandleSubmit.ts

```typescript
import { Dispatch, SetStateAction } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'store/mf-store'

import { User } from '../types/userTypes'
import { updateUserProfile } from '../utils/userProfileService'

interface UseHandleSubmitProps {
  selectedRow: User | undefined
  setLoading: (value: boolean) => void
  setRefresh: (value: boolean) => void
  setIsPanelOpen: Dispatch<SetStateAction<boolean>>
  setIsProfileDetailsVisible: Dispatch<SetStateAction<boolean>>
  setDataProfile: Dispatch<SetStateAction<any>>
  dataProfile: any
}
export const useHandleSubmit = ({
  selectedRow,
  setIsPanelOpen,
  setLoading,
  setRefresh,
  setDataProfile,
  dataProfile,
  setIsProfileDetailsVisible
}: UseHandleSubmitProps) => {
  const {
    client_user,
    id: id_user_nubo,
    participantId,
    status,
    country,
    userType
  } = useSelector(
    (state: RootState) =>
      state.auth.infoUserNubo?.[0] || state.auth.infoUserNubo
  )
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    await updateUserProfile({
      client_user,
      selectedRow,
      dataProfile,
      participantId,
      country,
      id_user_nubo,
      status,
      setLoading,
      setIsProfileDetailsVisible,
      setIsPanelOpen,
      setRefresh,
      setDataProfile
    })
  }
  return { handleSubmit, userType, participantId }
}

```

## src/features/user-management/hooks/useIsExternalRegister.ts

```typescript
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { RootState } from 'store/mf-store'

import { TypeUser } from '../constants/typeUser'

const useIsExternalRegister = () => {
  const location = useLocation()

  const isExternalRegister = location.pathname.includes(
    'user-external-register'
  )
  const { userType, enterpriseGroup } = useSelector(
    (state: RootState) => state.auth.infoUserNubo
  )
  const validations = {
    EXTERNAL: isExternalRegister && userType === TypeUser.EXTERNAL,
    INTERNAL: userType === TypeUser.EXTERNAL && isExternalRegister
  }
  const typeAccess = validations[userType as keyof typeof validations]

  return { isExternalRegister, typeAccess, userType, enterpriseGroup }
}

export default useIsExternalRegister

```

## src/features/user-management/hooks/useOptionsSearchProfile.ts

```typescript
import useGetProfilePermissions from './useGetProfilePermissions'

const useOptionsSearchProfile = (participantId: number) => {
  const { profilePermissionsService } = useGetProfilePermissions({
    idParticipant: participantId,
    executeInitial: false
  })

  return { profilePermissionsService }
}

export default useOptionsSearchProfile

```

## src/features/user-management/hooks/useParamsFilter.ts

```typescript
import { useSelector } from 'react-redux'
import { RootState } from 'store/mf-store'

const useParamsFilter = ({
  profileFilter,
  typeFilter,
  participantFilter
}: {
  profileFilter?: string
  typeFilter: string
  participantFilter?: string
}) => {
  const { participantId, profileName, name } = useSelector(
    (state: RootState) => state.auth.infoUserNubo
  )
  const commonParams = {
    profile: typeFilter === 'filterProfile' ? profileName : profileFilter,
    excludeParticipantId:
      typeFilter === 'excludeParticipant' ? participantId : undefined,
    participant:
      participantFilter || typeFilter === 'filterProfile' ? name : undefined
  }

  return commonParams
}

export default useParamsFilter

```

## src/features/user-management/hooks/useProfileFilter.ts

```typescript
import { useState, useCallback } from 'react'

import { Profile } from '../types/userTypes'

export const useProfileFilter = () => {
  const [filter, setFilter] = useState<string>('')
  const [filteredData, setFilteredData] = useState<Profile[]>([])

  const applyFilter = useCallback(
    (profiles: Profile[]) => {
      const data = profiles
        .filter((item) =>
          item.name.toLowerCase().includes(filter.toLowerCase())
        )
        .sort((a, b) => a.name.localeCompare(b.name))
      setFilteredData(data)
      return data
    },
    [filter]
  )

  return { filter, setFilter, filteredData, setFilteredData, applyFilter }
}

```

## src/features/user-management/hooks/useProfileForm.ts

```typescript
import { useCallback, useState } from 'react'

import { FormData, Profile } from '../types/userTypes'

export const useProfileForm = (
  initialFormData: FormData,
  onSubmit: () => void
) => {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [errors, setErrors] = useState<{ selectedProfile?: string }>({})

  const handleProfileSelect = useCallback(
    (selection: Profile, participant: string) => {
      const selectProfile = {
        ...formData.selectedProfile,
        [participant]: selection
      }
      const updatedFormData = {
        ...formData,
        selectedProfile: selectProfile
      }
      setFormData(updatedFormData)
    },
    [formData]
  )

  const validateForm = useCallback(() => {
    const newErrors: { selectedProfile?: string } = {}
    if (!formData.selectedProfile)
      newErrors.selectedProfile = 'Debe seleccionar un perfil en la tabla.'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }, [formData])

  const handleSubmit = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault()
      if (validateForm()) {
        onSubmit()
      }
    },
    [validateForm, onSubmit]
  )

  return {
    formData,
    setFormData,
    errors,
    handleProfileSelect,
    handleSubmit,
    validateForm
  }
}

```

## src/features/user-management/hooks/useProfileLoader.ts

```typescript
import { useEffect, useState } from 'react'

import { PARTICIPANT_NUAM_ID } from '@/shared/constants'
import { getProfiles } from '@/shared/services'

import { Profile } from '../types/userTypes'

interface UseProfilesLoaderProps {
  userType?: string
  applyFilter: (profiles: Profile[]) => Profile[]
  setFilteredData: (data: Profile[]) => void
  localFormData: any
  setIsModalOpen: (open: boolean) => void
}

export const useProfilesLoader = ({
  userType,
  applyFilter,
  setFilteredData,
  localFormData,
  setIsModalOpen
}: UseProfilesLoaderProps) => {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchAndFilterProfiles = async () => {
      setIsLoading(true)
      try {
        const profiles = await getProfiles(
          localFormData?.entity?.id ?? PARTICIPANT_NUAM_ID
        )
        const data = applyFilter(profiles.content)
        setFilteredData(data)
      } catch (error) {
        console.error('Error fetching profiles:', error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchAndFilterProfiles()
  }, [userType, applyFilter, setFilteredData, setIsModalOpen])

  return { isLoading, setIsLoading }
}

```

## src/features/user-management/hooks/useRegisterStep.ts

```typescript
import { useState } from 'react'
import { UseFormGetValues } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { RootState } from 'store/mf-store'

import { ROUTES } from '@/shared/routes'
import { ModalAlertProps } from '@/shared/types/declare'

import { RegisterFormValues } from '../types/userTypes'
import { useFormSubmission } from './useFormRegisterSubmission'
import useIsExternalRegister from './useIsExternalRegister'
import { useUsers } from './useRegisterUsers'
import useStoragekeyCreateUser from './useStoragekeyCreateUser'

export const useRegisterStep = (
  getValues: UseFormGetValues<RegisterFormValues>
) => {
  const [isLoading, setIsLoading] = useState(false)
  const location = useLocation()
  const client_user = localStorage.getItem('username')
  const { users } = useUsers(client_user, setIsLoading)
  const {
    participantId,
    name,
    code,
    documentNumber,
    userType,
    enterpriseGroup
  } = useSelector((state: RootState) => state.auth.infoUserNubo)
  const { isExternalRegister } = useIsExternalRegister()
  const { storageKey } = useStoragekeyCreateUser()

  const navigate = useNavigate()
  const [modalContent, setModalContent] = useState<ModalAlertProps | null>(null)
  const { formData } = useStoragekeyCreateUser()
  const { handleSubmit, changeValidationsNextStep } = useFormSubmission({
    navigate,
    setModalContent,
    setIsLoading,
    getValues
  })
  const handleBack = () => {
    const backRoute = location.state
    localStorage.removeItem(storageKey)
    if (backRoute) {
      navigate(backRoute)
    } else {
      navigate(ROUTES.HOME)
    }
  }

  return {
    formData,
    handleBack,
    client_user,
    isLoading,
    handleSubmit,
    users,
    modalContent,
    setModalContent,
    isExternalRegister,
    userType,
    participantId,
    name,
    code,
    documentNumber,
    enterpriseGroup,
    changeValidationsNextStep
  }
}

```

## src/features/user-management/hooks/useRegisterUserData.ts

```typescript
import { localStorageUtil } from '@/shared/utils/localStorageUtil'

import useStoragekeyCreateUser from './useStoragekeyCreateUser'

interface FormData {
  radicado?: string
  email?: string
  selectedProfile?: string
  [key: string]: any
}

interface UseRegisterUserDataResult {
  storedFormData: FormData
  isStep1Complete: boolean
  isStep2Complete: boolean
}

export const useRegisterUserData = (
  isExternalRegister: boolean
): UseRegisterUserDataResult => {
  const { loadFromLocalStorage } = localStorageUtil()
  const storageKey = isExternalRegister
    ? 'formDataExternal'
    : 'formDataInternal'
  const storedFormData: FormData = loadFromLocalStorage(storageKey) || {}
  const { formData } = useStoragekeyCreateUser()
  const participants = formData?.participants ?? []
  const radicado = isExternalRegister ? true : storedFormData?.radicado
  const isStep1Complete: boolean = Boolean(
    radicado &&
      storedFormData?.email &&
      participants?.length > 0 &&
      formData.docType?.id &&
      formData.docNumber
  )
  const isStep2Complete: boolean = Boolean(storedFormData?.selectedProfile)

  return { storedFormData, isStep1Complete, isStep2Complete }
}

```

## src/features/user-management/hooks/useRegisterUsers.ts

```typescript
import { useState, useEffect, SetStateAction } from 'react'

import { getParticipant } from '@/shared/services'

import { UserApiResponse, UserDetails } from '../types/userTypes'

export const useUsers = (
  clientUser: string | null,
  setIsLoading: {
    (value: SetStateAction<boolean>): void
    (arg0: boolean): void
  }
) => {
  const [users, setUsers] = useState<UserDetails[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchUsers = async () => {
      if (!clientUser) return

      setIsLoading(true)
      setError(null)

      try {
        const userFetch = await getParticipant()
        userFetch.content.sort((a: { name: string }, b: { name: string }) =>
          a.name.localeCompare(b.name)
        )

        const userDetails: UserDetails[] = userFetch.content.map(
          (user: UserApiResponse) => ({
            id: user.id,
            name: user.name,
            code: user.code,
            documentType: user.identificationType.description,
            documentNumber: user.documentNumber
          })
        )

        setUsers(userDetails)
      } catch (error) {
        console.error('Error fetching users:', error)
        setError('Error al cargar los usuarios')
        throw error
      } finally {
        setIsLoading(false)
      }
    }

    fetchUsers()
  }, [clientUser])

  return { users }
}

```

## src/features/user-management/hooks/useReviewProfileStep.ts

```typescript
import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootState } from 'store/mf-store'

import { GenerateLogs } from 'remoteUtilities/components-mf-utilities'

import { ROUTES } from '@/shared/routes'
import { ModalAlertProps } from '@/shared/types/declare'

import { ERROR_CODE } from '../constants/errorCode'
import { TypeUser } from '../constants/typeUser'
import { getUsersByUsername } from '../services/getUser'
import { updateUserById } from '../services/updateUser'
import {
  createUsers,
  createUsersNubo,
  deleteUsersKeycloak
} from '../services/users'
import {
  getEntidadExternalInfo,
  getInfo2,
  getProfileInfo,
  getUserExternalInfo
} from '../utils/profileInfo'
import { sendUserEmail } from '../utils/sendUserEmail'
import {
  transformFormDataKeyCloak,
  transformFormDataNubo
} from '../utils/transformFormData'
import useIsExternalRegister from './useIsExternalRegister'
import useStoragekeyCreateUser from './useStoragekeyCreateUser'

export const useReviewProfileStep = () => {
  const client_user = localStorage.getItem('username') || ''
  const { id: id_user_nubo, status } = useSelector(
    (state: RootState) =>
      state.auth.infoUserNubo?.[0] || state.auth.infoUserNubo
  )
  const { isExternalRegister, userType } = useIsExternalRegister()
  const { formData, storageKey } = useStoragekeyCreateUser()

  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [modalContent, setModalContent] = useState<ModalAlertProps | null>(null)
  const { t } = useTranslation('gestion')

  const info = getProfileInfo(formData, t)
  const infoEntidadExternal = getEntidadExternalInfo(formData, t)
  const infoUserExternal = getUserExternalInfo(formData, t)
  const info2 = getInfo2(t)

  const createUser = async () => {
    const transformedData = transformFormDataKeyCloak(formData)
    const validateExistUser = await getUsersByUsername(
      transformedData?.username
    )
    if (!validateExistUser?.[0]?.id) {
      await createUsers(transformedData)
    }

    const getUsernameKeycloak = await getUsersByUsername(
      transformedData?.username
    )

    const getKeyCloak = getUsernameKeycloak?.[0]?.id
    const transformedDataNubo = transformFormDataNubo(
      formData,
      getKeyCloak,
      isExternalRegister
    )
    return { getUsernameKeycloak, transformedDataNubo }
  }

  const handleFinalizar = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setLoading(true)
      let createdInKeycloak = false
      const { getUsernameKeycloak, transformedDataNubo } = await createUser()
      try {
        const navigateInternal =
          userType === TypeUser.INTERNAL && isExternalRegister
            ? ROUTES.USER_MANAGEMENT_EXTERNAL.path
            : ROUTES.USER_MANAGEMENT_INTERNAL.path
        const navigateSuccess =
          userType === TypeUser.INTERNAL
            ? navigateInternal
            : ROUTES.USER_MANAGEMENT.path
        createdInKeycloak = true
        let dataUserCreated
        try {
          dataUserCreated = await createUsersNubo(transformedDataNubo)
          const participants = dataUserCreated?.participants?.[0]?.id
          await GenerateLogs(client_user, {
            actionType: `Creación usuario #Jira ${dataUserCreated?.jiraNumber ?? ''}`,
            actionDestination: 'Homepage',
            participantId: participants ?? '',
            countryId: dataUserCreated?.country?.id ?? '37',
            userNuboId: id_user_nubo,
            statusId: status.id ?? ''
          })

          await GenerateLogs(client_user, {
            actionType: `Permisos ${dataUserCreated?.userName ?? ''} perfil ${formData?.selectedProfile ?? ''}`,
            actionDestination: 'Homepage',
            participantId: participants ?? '',
            countryId: dataUserCreated?.country?.id ?? '37',
            userNuboId: id_user_nubo ?? '',
            statusId: status.id ?? ''
          })

          await sendUserEmail(dataUserCreated, false)

          await GenerateLogs(client_user, {
            actionType: `Envío de correo al usuario ${dataUserCreated.userName}`,
            actionDestination: 'Homepage',
            participantId: participants ?? '',
            countryId: dataUserCreated?.country?.id ?? '37',
            userNuboId: id_user_nubo,
            statusId: status.id
          })

          setModalContent({
            title: 'Usuario creado exitosamente',
            message: `Hemos enviado un correo a <strong>${formData.email}</strong> notificando su creación`,
            textSuccess: 'Entendido',
            onClick: () => {
              localStorage.removeItem(storageKey)
              navigate(navigateSuccess)
            }
          })
        } catch (error: any) {
          const accessError = error?.response?.data

          const errorCode = accessError?.errorCode
          if (errorCode !== ERROR_CODE.USER_IDENTIFICATION_EXISTS) {
            try {
              const data = await updateUserById(
                formData?.idUser ?? dataUserCreated?.id,
                transformedDataNubo
              )
              const participants =
                dataUserCreated?.participants?.[0]?.id ??
                data.participants?.[0].id

              await GenerateLogs(client_user, {
                actionType: `Actuaslizacion de usuario #Jira ${dataUserCreated?.jiraNumber ?? ''}`,
                actionDestination: 'Homepage',
                participantId: participants ?? '',
                countryId: dataUserCreated?.country?.id ?? '37',
                userNuboId: id_user_nubo,
                statusId: status.id ?? ''
              })

              await GenerateLogs(client_user, {
                actionType: `Permisos ${dataUserCreated?.userName ?? ''} perfil ${formData?.selectedProfile ?? ''}`,
                actionDestination: 'Homepage',
                participantId: participants ?? '',
                countryId: dataUserCreated?.country?.id ?? '37',
                userNuboId: id_user_nubo ?? '',
                statusId: status.id ?? ''
              })
              await sendUserEmail(data, true)

              setModalContent({
                title: 'Usuario actualizado exitosamente',
                message: ``,
                textSuccess: 'Entendido',
                onClick: () => {
                  localStorage.removeItem(storageKey)
                  navigate(navigateSuccess)
                }
              })
            } catch (error) {
              if (createdInKeycloak) {
                await deleteUsersKeycloak(getUsernameKeycloak[0].id)
                // console.log('❌ Error al creark usuario en Nubo:', error)
                setModalContent({
                  title: 'Ocurrió un error inesperado',
                  message:
                    'Vuelve a intentarlo, si el error persiste comunícate a xxxxxx@nuamx.com o 55555555',
                  variant: 'error',
                  textSuccess: 'Entendido',
                  onClick: () => {
                    setModalContent(null)
                  }
                })
              }
            }
          }
        }
      } catch (error: any) {
        console.error(error)
        setModalContent({
          title: 'Ocurrió un error inesperado',
          message:
            'Vuelve a intentarlo, si el error persiste comunícate a xxxxxx@nuamx.com o 55555555',
          variant: 'error',
          textSuccess: 'Reintentar',
          onClick: () => setModalContent(null)
        })
      } finally {
        setLoading(false)
      }
    },
    [formData, navigate, storageKey, id_user_nubo, status, client_user]
  )

  const handleNavigate = useCallback(
    (nextStep: number) => {
      navigate(
        isExternalRegister
          ? `/user-management/user-external-register/${nextStep}`
          : `/user-management/user-internal-register/${nextStep}`
      )
    },
    [navigate, isExternalRegister]
  )

  return {
    formData,
    loading,
    modalContent,
    handleFinalizar,
    handleNavigate,
    info,
    info2,
    navigate,
    infoUserExternal,
    infoEntidadExternal,
    t
  }
}

```

## src/features/user-management/hooks/useStoragekeyCreateUser.ts

```typescript
import { localStorageUtil } from '@/shared/utils/localStorageUtil'

import { RegisterFormValues } from '../types/userTypes'
import useIsExternalRegister from './useIsExternalRegister'

const useStoragekeyCreateUser = () => {
  const { loadFromLocalStorage } = localStorageUtil()
  const { isExternalRegister } = useIsExternalRegister()

  const storageKey = isExternalRegister
    ? 'formDataExternal'
    : 'formDataInternal'
  const loadFormData = () =>
    (loadFromLocalStorage(storageKey) || {}) as Partial<RegisterFormValues>
  const formData = loadFormData()
  return { formData, storageKey, loadFormData }
}

export default useStoragekeyCreateUser

```

## src/features/user-management/hooks/useUrlParams.ts

```typescript
import { useState } from 'react'

import { FiltersTableState } from '../types/FiltersTable'
import useDispatchQueryParams from './useDispatchQueryParams'

const useUrlParams = ({
  participant,
  profileId,
  filtersTable
}: {
  participant: string
  profileId: number
  filtersTable: FiltersTableState
}) => {
  const endpoint = `/user`
  const defaultParams = `${participant && 'participant=' + participant}${
    profileId && '&accessProfileId=' + profileId
  }`
  const params = new URLSearchParams(defaultParams)
  const [url, setUrl] = useState(`${endpoint}?${params.toString()}`)
  useDispatchQueryParams({ defaultParams, filtersTable, params, setUrl })

  return url
}

export default useUrlParams

```

## src/features/user-management/hooks/useUrlParamsUserExternal.ts

```typescript
import { useEffect, useState } from 'react'

import { FiltersStateKey } from '@/features/user-management/constants/filtersStateKeys'
import useDispatchQueryParams from '@/features/user-management/hooks/useDispatchQueryParams'
import { FiltersTableState } from '@/features/user-management/types/FiltersTable'

const useUrlParams = ({
  participantId,
  profileId,
  filtersTable
}: {
  participantId: number
  profileId: number
  filtersTable: FiltersTableState
}) => {
  const endpoint = `/user`
  const defaultParams = `${
    participantId && 'excludeParticipantId=' + participantId
  }${profileId && '&accessProfileId=' + profileId}`
  const params = new URLSearchParams(defaultParams)
  const [url, setUrl] = useState(`${endpoint}?${params.toString()}`)
  useDispatchQueryParams({ defaultParams, filtersTable, params, setUrl })
  return url
}

export default useUrlParams

```

## src/features/user-management/hooks/useUrlParamsUserInternal.ts

```typescript
import { useState } from 'react'

import useDispatchQueryParams from '@/features/user-management/hooks/useDispatchQueryParams'
import { FiltersTableState } from '@/features/user-management/types/FiltersTable'

const useUrlParams = ({
  filtersTable,
  participantName,
  profileId
}: {
  filtersTable: FiltersTableState
  profileId: number
  participantName: string
}) => {
  const endpoint = `/user`
  const defaultParams = `${profileId && '&accessProfileId=' + profileId}${
    participantName && '&participant=' + participantName
  }`
  const params = new URLSearchParams(defaultParams)
  const [url, setUrl] = useState(`${endpoint}?${params.toString()}`)
  useDispatchQueryParams({ defaultParams, filtersTable, params, setUrl })
  return url
}

export default useUrlParams

```

## src/features/user-management/hooks/useUserAdmin.tsx

```tsx
import { Dispatch, SetStateAction, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { UseUserAdminColumnsProps } from '../types/UseAdminColumns'
import { FieldTable } from '../types/fieldTable'
import { useDetailuser } from './useDetailUser'

export const useUserAdmin = (
  getColumns: (params: UseUserAdminColumnsProps) => any,
  setField: Dispatch<SetStateAction<FieldTable | null>>
) => {
  const { t } = useTranslation('gestion')
  const [loading, setLoading] = useState(false)
  const [clearFilters] = useState(false)
  const [refresh, setRefresh] = useState(false)
  const [isToastVisible, setIsToastVisible] = useState(false)

  const {
    toggleModal,
    visibleModalDetail,
    fieldIdUser,
    setVisibleModalDetail
  } = useDetailuser()

  const columns = getColumns({
    setRefresh,
    setLoading,
    visibleModalDetail,
    fieldIdUser,
    setField,
    toggleModal
  })

  return {
    loading: loading,
    columns,
    isToastVisible,
    setIsToastVisible,
    refresh,
    setRefresh,
    t,
    clearFilters,
    toggleModal,
    setLoading,
    fieldIdUser,
    visibleModalDetail,
    setVisibleModalDetail
  }
}

```

## src/features/user-management/hooks/useUserAdminColumns.tsx

```tsx
import { TRenderCellParams } from '@nuam/common-fe-lib-components'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useScreenActions } from 'store/mf-shell-useScreenActions'

import { formatToUserLocalTime } from 'remoteUtilities/formatToUserLocalTime'

import { EXTERNAL_USER_ACTIONS } from '@/shared/constants/actionCodes'

import { ChangeStateUser } from '../components/ChangeStatusUser'
import { OTP } from '../components/OTP'
import ViewDetail from '../components/ViewDetailField'
import { Status } from '../types/FiltersTable'
import { UseUserAdminColumnsProps } from '../types/UseAdminColumns'
import { FieldTable } from '../types/fieldTable'
import useFetchOptionsStatus from './useFetchOptionsStatus'

export function useUserAdminColumns({
  setRefresh,
  setLoading,
  toggleModal,
  visibleModalDetail,
  fieldIdUser,
  setField
}: UseUserAdminColumnsProps) {
  const { t } = useTranslation('gestion')
  const { optionsStatus } = useFetchOptionsStatus()
  const { hasAction } = useScreenActions()
  const canShowStatusUserColumn = hasAction(EXTERNAL_USER_ACTIONS.STATUS_USER)
  const canShowOtpUserColumn = hasAction(EXTERNAL_USER_ACTIONS.OTP_USER)
  const canShowDetailUserButton = hasAction(EXTERNAL_USER_ACTIONS.DETAIL_USER)
  return useMemo(() => {
    const baseColumns = [
      ...((canShowDetailUserButton
        ? [
            {
              width: 100,
              headerName: t('adminUsers.table.columns.details'),
              field: 'viewDetails',
              sortable: false,
              filterable: false,
              renderCell: (params: TRenderCellParams) => {
                const field = params.row as FieldTable

                return (
                  <ViewDetail
                    field={field}
                    setField={setField}
                    toggleModal={toggleModal}
                  />
                )
              }
            }
          ]
        : []) as []),
      {
        flex: 1,
        headerName: t('adminUsers.table.columns.user'),
        field: 'userName',
        valueGetter: (_value: FieldTable['userName'], data: FieldTable) => {
          return `${data?.firstName} ${data?.lastName}`
        }
      },
      {
        flex: 1,
        headerName: t('adminUsers.table.columns.email'),
        field: 'email'
      },
      {
        flex: 1,
        headerName: 'Grupo',
        field: 'userGroup',
        valueGetter: (_value: FieldTable['userGroup'], data: any) => {
          return data?.participant?.enterpriseGroup?.name || ''
        }
      },
      {
        flex: 1,
        headerName: t('adminUsers.table.columns.profile'),
        field: 'profile',
        valueGetter: (_value: FieldTable['userName'], data: FieldTable) => {
          const profileName = data?.profiles
            ?.map((profile) => profile.name)
            .join(', ')
          return profileName
        }
      },
      ...(canShowStatusUserColumn
        ? [
            {
              flex: 1,
              headerName: t('adminUsers.table.columns.status'),
              field: 'status',
              cellClassName: 'flex items-center',
              valueGetter: (status: Status) => {
                return status.description
              },
              renderCell: (params: TRenderCellParams) => {
                const row = params.row
                return (
                  <ChangeStateUser
                    userId={row.id}
                    setLoading={setLoading}
                    setRefresh={setRefresh}
                    status={row.status}
                    userName={`${row.firstName} ${row.lastName}`}
                    optionsStatus={optionsStatus}
                    userEmail={row.email}
                  />
                )
              }
            }
          ]
        : []),
      ...(canShowOtpUserColumn
        ? [
            {
              width: 60,
              headerName: t('adminUsers.table.columns.otp'),
              noHidden: true,
              field: 'isOtp',
              renderCell: (params: TRenderCellParams) => {
                const row = params.row
                return (
                  <OTP
                    clientUser={row.client_user as string}
                    otp={row.otp as boolean}
                    user={row.userName}
                    fullName={`${row.firstName} ${row.lastName}`}
                    setRefresh={setRefresh}
                  />
                )
              }
            }
          ]
        : []),
      {
        flex: 1,
        headerName: t('adminUsers.table.columns.lastLogin'),
        field: 'lastModifyDate',
        valueFormatter: (params: any) => {
          return formatToUserLocalTime(params)
        }
      }
    ]

    return baseColumns
  }, [
    t,
    fieldIdUser,
    visibleModalDetail,
    optionsStatus,
    canShowDetailUserButton
  ])
}

```

## src/features/user-management/hooks/useUserAdminColumnsInternal.tsx

```tsx
import { TRenderCellParams } from '@nuam/common-fe-lib-components'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useScreenActions } from 'store/mf-shell-useScreenActions'

import { formatToUserLocalTime } from 'remoteUtilities/formatToUserLocalTime'

import { ChangeStateUser } from '@/features/user-management/components/ChangeStatusUser'
import { OTP } from '@/features/user-management/components/OTP'
import ViewDetail from '@/features/user-management/components/ViewDetailField'
import useFetchOptionsStatus from '@/features/user-management/hooks/useFetchOptionsStatus'
import { UseUserAdminColumnsProps } from '@/features/user-management/types/UseAdminColumns'

import { INTERNAL_USER_ACTIONS } from '@/shared/constants/actionCodes'

import { Status } from '../types/FiltersTable'
import { FieldTable } from '../types/fieldTable'

export function useUserAdminColumns({
  setRefresh,
  setLoading,
  toggleModal,
  visibleModalDetail,
  fieldIdUser,
  setField
}: UseUserAdminColumnsProps) {
  const { t } = useTranslation('gestion')
  const { optionsStatus } = useFetchOptionsStatus()
  const { hasAction } = useScreenActions()
  const canShowStatusUserColumn = hasAction(INTERNAL_USER_ACTIONS.STATUS_USER)
  const canShowOtpUserColumn = hasAction(INTERNAL_USER_ACTIONS.OTP_USER)
  const canShowDetailUserButton = hasAction(INTERNAL_USER_ACTIONS.DETAIL_USER)

  return useMemo(() => {
    const baseColumns = [
      ...(canShowDetailUserButton
        ? [
            {
              width: 100,
              headerName: t('adminUsers.table.columns.details'),
              field: '',
              sortable: false,
              filterable: false,
              renderCell: (params: TRenderCellParams) => {
                const field = params.row as FieldTable
                return (
                  <ViewDetail
                    field={field}
                    setField={setField}
                    toggleModal={toggleModal}
                  />
                )
              }
            }
          ]
        : []),
      {
        flex: 1,
        headerName: t('adminUsers.table.columns.user'),
        field: 'userName',
        valueGetter: (_value: FieldTable['userName'], data: FieldTable) => {
          return `${data?.firstName} ${data?.lastName}`
        }
      },
      {
        flex: 1,
        headerName: t('adminUsers.table.columns.email'),
        field: 'email'
      },
      {
        flex: 1,
        headerName: t('adminUsers.table.columns.profile'),
        field: 'profile',
        valueGetter: (_value: FieldTable['userName'], data: FieldTable) => {
          const profileName = data?.profiles
            ?.map((profile) => profile.name)
            .join(', ')
          return profileName
        }
      },
      ...(canShowStatusUserColumn
        ? [
            {
              flex: 1,
              headerName: t('adminUsers.table.columns.status'),
              field: 'status',
              cellClassName: 'flex items-center',
              valueGetter: (status: Status) => {
                return status.description
              },
              renderCell: (params: TRenderCellParams) => {
                const row = params.row
                return (
                  <ChangeStateUser
                    userId={row.id}
                    setLoading={setLoading}
                    setRefresh={setRefresh}
                    status={row.status}
                    userName={`${row.firstName} ${row.lastName}`}
                    optionsStatus={optionsStatus}
                    userEmail={row.email}
                  />
                )
              }
            }
          ]
        : []),
      ...(canShowOtpUserColumn
        ? [
            {
              width: 60,
              headerName: t('adminUsers.table.columns.otp'),
              noHidden: true,
              field: 'isOtp',
              renderCell: (params: TRenderCellParams) => {
                const row = params.row
                return (
                  <OTP
                    clientUser={row.client_user as string}
                    otp={row.otp as boolean}
                    user={row.userName}
                    fullName={`${row.firstName} ${row.lastName}`}
                    setRefresh={setRefresh}
                  />
                )
              }
            }
          ]
        : []),
      {
        flex: 1,
        headerName: t('adminUsers.table.columns.lastLogin'),
        field: 'lastModifyDate',
        valueFormatter: (params: any) => {
          return formatToUserLocalTime(params)
        }
      }
    ]

    return baseColumns
  }, [
    t,
    visibleModalDetail,
    fieldIdUser,
    optionsStatus,
    canShowStatusUserColumn,
    setLoading,
    setRefresh,
    toggleModal,
    canShowDetailUserButton
  ])
}

```

## src/features/user-management/hooks/useUserAdminColumnsUserExternal.tsx

```tsx
import { TRenderCellParams } from '@nuam/common-fe-lib-components'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useScreenActions } from 'store/mf-shell-useScreenActions'

import { formatToUserLocalTime } from 'remoteUtilities/formatToUserLocalTime'

import { ChangeStateUser } from '@/features/user-management/components/ChangeStatusUser'
import { OTP } from '@/features/user-management/components/OTP'
import ViewDetail from '@/features/user-management/components/ViewDetailField'
import useFetchOptionsStatus from '@/features/user-management/hooks/useFetchOptionsStatus'
import { UseUserAdminColumnsProps } from '@/features/user-management/types/UseAdminColumns'

import { INTERNAL_EXTERNAL_USER_ACTIONS } from '@/shared/constants/actionCodes'

import { Status } from '../types/FiltersTable'
import { FieldTable } from '../types/fieldTable'
import getParticipants from '../utils/participantsJoin'

export function useUserAdminColumns({
  setRefresh,
  setLoading,
  toggleModal,
  visibleModalDetail,
  fieldIdUser,
  setField
}: UseUserAdminColumnsProps) {
  const { hasAction } = useScreenActions()

  const { t } = useTranslation('gestion')
  const { optionsStatus } = useFetchOptionsStatus()
  const canShowDetailUserButton = hasAction(
    INTERNAL_EXTERNAL_USER_ACTIONS.DETAIL_USER
  )

  return useMemo(() => {
    const baseColumns = [
      ...(canShowDetailUserButton
        ? [
            {
              width: 100,
              headerName: t('adminUsers.table.columns.details'),
              field: '',
              sortable: false,
              filterable: false,
              renderCell: (params: TRenderCellParams) => {
                const field = params.row as FieldTable
                return (
                  <ViewDetail
                    field={field}
                    setField={setField}
                    toggleModal={toggleModal}
                  />
                )
              }
            }
          ]
        : []),
      {
        flex: 1,
        headerName: 'Grupo empresarial',
        field: 'userGroup',
        minWidth: 150,
        valueGetter: (_value: FieldTable['userGroup'], data: any) => {
          return data?.participant?.enterpriseGroup?.name || ''
        }
      },
      {
        flex: 1,
        headerName: 'Participante',
        field: 'participant',
        minWidth: 400,
        valueGetter: (_value: FieldTable['userName'], data: FieldTable) => {
          return getParticipants(data.participants)
        }
      },
      {
        flex: 1,
        headerName: t('adminUsers.table.columns.user'),
        field: 'userName',
        minWidth: 160,
        valueGetter: (_value: FieldTable['userName'], data: FieldTable) => {
          return `${data?.firstName} ${data?.lastName}`
        }
      },
      {
        flex: 1,
        headerName: t('adminUsers.table.columns.email'),
        field: 'email',
        minWidth: 180
      },
      {
        flex: 1,
        headerName: t('adminUsers.table.columns.profile'),
        field: 'profile',
        minWidth: 170,
        valueGetter: (_value: FieldTable['userName'], data: FieldTable) => {
          const profileName = data?.profiles
            ?.map((profile) => profile.name)
            .join(', ')
          return profileName
        }
      },
      {
        flex: 1,
        headerName: t('adminUsers.table.columns.status'),
        field: 'status',
        cellClassName: 'flex items-center',
        minWidth: 150,
        valueGetter: (status: Status) => {
          return status.description
        },
        renderCell: (params: TRenderCellParams) => {
          const row = params.row
          return (
            <ChangeStateUser
              userId={row.id}
              setLoading={setLoading}
              setRefresh={setRefresh}
              status={row.status}
              userName={`${row.firstName} ${row.lastName}`}
              optionsStatus={optionsStatus}
              userEmail={row.email}
            />
          )
        }
      },
      {
        width: 60,
        headerName: t('adminUsers.table.columns.otp'),
        noHidden: true,
        field: 'isOtp',
        renderCell: (params: TRenderCellParams) => {
          const row = params.row
          return (
            <OTP
              clientUser={row.client_user as string}
              otp={row.otp as boolean}
              user={row.userName}
              fullName={`${row.firstName} ${row.lastName}`}
              setRefresh={setRefresh}
            />
          )
        }
      },
      {
        flex: 1,
        headerName: t('adminUsers.table.columns.lastLogin'),
        field: 'lastModifyDate',
        minWidth: 180,
        valueFormatter: (params: any) => {
          return formatToUserLocalTime(params)
        }
      }
    ]

    return baseColumns
  }, [
    t,
    visibleModalDetail,
    fieldIdUser,
    optionsStatus,
    canShowDetailUserButton
  ])
}

```

## src/features/user-management/hooks/useUserAdminHeaderActions.ts

```typescript

```

## src/features/user-management/hooks/useUsersData.ts

```typescript
import { useCallback, useState } from 'react'

import { getUsersNubo } from '../services/getUser'
import { User } from '../types/userTypes'

interface UseUsersDataReturn {
  data: User[]
  fetchData: () => Promise<void>
}

interface UseUsersData {
  (setLoading: (loading: boolean) => void): UseUsersDataReturn
}

export const useUsersData: UseUsersData = (setLoading) => {
  const [data, setData] = useState<User[]>([])

  const fetchData = useCallback(async (): Promise<void> => {
    setLoading(true)
    try {
      const usersData: User[] = await getUsersNubo()
      setData(usersData)
    } catch (error) {
      console.error('Failed to fetch users:', error)
    } finally {
      setLoading(false)
    }
  }, [])

  return { data, fetchData }
}

```

## src/features/user-management/hooks/useUsersProfiles.ts

```typescript
import { useEffect, useState } from 'react'

import { getProfiles } from '@/shared/services'

export function useUserProfiles(
  userType: string,
  participantId: number,
  filter: string
) {
  const [filteredData, setFilteredData] = useState([])
  const [loadingProfiles, setLoadingProfiles] = useState(false)

  useEffect(() => {
    const fetchAndFilterProfiles = async () => {
      setLoadingProfiles(true)
      try {
        const profiles =
          userType === 'EXTERNAL'
            ? await getProfiles(participantId)
            : await getProfiles()

        const data = profiles.content
          .filter((item: { name: string }) =>
            item.name.toLowerCase().includes(filter.toLowerCase())
          )
          .sort((a: { name: string }, b: { name: string }) =>
            a.name.localeCompare(b.name)
          )

        setFilteredData(data)
      } catch (error) {
        console.error('Error fetching profiles:', error)
      } finally {
        setLoadingProfiles(false)
      }
    }

    fetchAndFilterProfiles()
  }, [userType, participantId, filter])

  return { filteredData, loadingProfiles }
}

```

## src/features/user-management/hooks/useUsersProfilesExternal.ts

```typescript
import { useEffect, useState } from 'react'

import { getProfiles } from '@/shared/services'

export function useUserProfiles(
  userType: string,
  participantId: number,
  filter: string
) {
  const [filteredData, setFilteredData] = useState([])
  const [loadingProfiles, setLoadingProfiles] = useState(false)

  useEffect(() => {
    const fetchAndFilterProfiles = async () => {
      setLoadingProfiles(true)
      try {
        const profiles =
          userType === 'EXTERNAL'
            ? await getProfiles(participantId)
            : await getProfiles()

        const data = profiles.content
          .filter((item: { name: string }) =>
            item.name.toLowerCase().includes(filter.toLowerCase())
          )
          .sort((a: { name: string }, b: { name: string }) =>
            a.name.localeCompare(b.name)
          )

        setFilteredData(data)
      } catch (error) {
        console.error('Error fetching profiles:', error)
      } finally {
        setLoadingProfiles(false)
      }
    }

    fetchAndFilterProfiles()
  }, [userType, participantId, filter])

  return { filteredData, loadingProfiles }
}

```

## src/features/user-management/hooks/useUsersProfilesInternal.ts

```typescript
import { useEffect, useState } from 'react'

import { getProfiles } from '@/shared/services'

export function useUserProfiles(
  userType: string,
  participantId: number,
  filter: string
) {
  const [filteredData, setFilteredData] = useState([])
  const [loadingProfiles, setLoadingProfiles] = useState(false)

  useEffect(() => {
    const fetchAndFilterProfiles = async () => {
      setLoadingProfiles(true)
      try {
        const profiles =
          userType === 'EXTERNAL'
            ? await getProfiles(participantId)
            : await getProfiles()

        const data = profiles.content
          .filter((item: { name: string }) =>
            item.name.toLowerCase().includes(filter.toLowerCase())
          )
          .sort((a: { name: string }, b: { name: string }) =>
            a.name.localeCompare(b.name)
          )

        setFilteredData(data)
      } catch (error) {
        console.error('Error fetching profiles:', error)
      } finally {
        setLoadingProfiles(false)
      }
    }

    fetchAndFilterProfiles()
  }, [userType, participantId, filter])

  return { filteredData, loadingProfiles }
}

```

## src/features/user-management/mocks/actions.ts

```typescript
export const actionsProfile = 'Eliminar, Actualizar'

```

## src/features/user-management/pages/RegisterUserPage.tsx

```tsx
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { matchPath, useLocation } from 'react-router-dom'

import { StepFlow } from '@/shared/components/StepFlow'
import { STEP_KEYS, TRANSLATION } from '@/shared/constants'
import { ROUTES } from '@/shared/routes'
import { getRegisterBasePath } from '@/shared/utils/getRegisterBasePath'

import { useRegisterUserData } from '../hooks/useRegisterUserData'
import { getStepComponent } from '../utils/getStepComponent'

export const RegisterUserPage: React.FC = () => {
  const location = useLocation()
  const { t } = useTranslation(TRANSLATION.NAMESPACE)
  const steps: string[] = useMemo(
    () => STEP_KEYS.map((key: string) => t(key)),
    [t]
  )
  const isExternalRegister =
    matchPath(
      ROUTES.USER_MANAGEMENT.subRoutes!.EXTERNAL_REGISTER.path,
      location.pathname
    ) !== null
  const { isStep1Complete, isStep2Complete } =
    useRegisterUserData(isExternalRegister)
  const routePath = isExternalRegister
    ? ROUTES.USER_MANAGEMENT.subRoutes!.EXTERNAL_REGISTER.path
    : ROUTES.USER_MANAGEMENT.subRoutes!.INTERNAL_REGISTER.path

  const basePath = getRegisterBasePath(routePath)

  return (
    <StepFlow
      steps={steps}
      getStepComponent={getStepComponent}
      isStep1Complete={isStep1Complete}
      isStep2Complete={isStep2Complete}
      getBasePath={basePath}
    />
  )
}

```

## src/features/user-management/pages/UserManagement.tsx

```tsx
import { Suspense, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { useScreenActions } from 'store/mf-shell-useScreenActions'
import { RootState } from 'store/mf-store'

import {
  ContentWrapper,
  Spinner,
  Toast
} from 'remoteUtilities/components-mf-utilities'

import { EXTERNAL_USER_ACTIONS } from '@/shared/constants/actionCodes'

import FiltersTable from '../components/FiltersTable'
import ModalUserDetail from '../components/ModalUserDetail'
import TableUser from '../components/TableUser'
import ToolbarActionsUser from '../components/ToolbarActionsUser'
import useUrlParams from '../hooks/useUrlParams'
import { useUserAdmin } from '../hooks/useUserAdmin'
import { useUserAdminColumns } from '../hooks/useUserAdminColumns'
import { FiltersTableState } from '../types/FiltersTable'
import { FieldTable } from '../types/fieldTable'

export const UserManagement = () => {
  const [field, setField] = useState<FieldTable | null>(null)
  const {
    columns,
    isToastVisible,
    setIsToastVisible,
    loading,
    refresh,
    t,
    toggleModal,
    setRefresh,
    setLoading,
    fieldIdUser,
    visibleModalDetail,
    setVisibleModalDetail
  } = useUserAdmin(useUserAdminColumns, setField)
  const { hasAction } = useScreenActions()
  const [filtersTable, setFiltersTable] = useState<FiltersTableState>({})
  const { profileId, name: participant } = useSelector(
    (state: RootState) =>
      state.auth.infoUserNubo?.[0] || state.auth.infoUserNubo
  )
  const urlParams = useUrlParams({ filtersTable, participant, profileId })
  const permissionsField = field?.profile?.permissions ?? []

  const visibilityModal = useMemo(
    () => visibleModalDetail && fieldIdUser === field?.id,
    [visibleModalDetail, fieldIdUser, field]
  )
  const canShowAdminProfileButton = hasAction(
    EXTERNAL_USER_ACTIONS.MANAGE_PROFILES
  )
  if (loading || !participant) {
    return <Spinner />
  }

  return (
    <>
      <ContentWrapper title={t('adminUsers.title')}>
        <FiltersTable
          filtersTable={filtersTable}
          setFiltersTable={setFiltersTable}
          typeFilter="filterProfile"
        />
        {visibilityModal && (
          <Suspense fallback={<Spinner />}>
            <ModalUserDetail
              detailUserId={field?.id as number}
              setIsPanelOpen={(value: boolean) => setVisibleModalDetail(value)}
              currentParticipant={field?.participants ?? []}
              permissionsField={permissionsField}
              setRefresh={setRefresh}
              setLoading={setLoading}
            />
          </Suspense>
        )}
        <TableUser
          columns={columns}
          refresh={refresh}
          toggleModal={toggleModal}
          url={urlParams}
          Toolbar={<ToolbarActionsUser />}
          setField={setField}
          canAdminProfiles={canShowAdminProfileButton}
        />
      </ContentWrapper>
      {isToastVisible && (
        <Suspense fallback={<Spinner />}>
          <Toast
            text={t('adminUsers.statusUpdatedSuccessfully')}
            onClose={() => setIsToastVisible(!isToastVisible)}
          />
        </Suspense>
      )}
    </>
  )
}

```

## src/features/user-management/pages/UserManagementExternal.tsx

```tsx
import { Suspense, useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useScreenActions } from 'store/mf-shell-useScreenActions'
import { RootState } from 'store/mf-store'

import {
  ContentWrapper,
  Spinner,
  Toast
} from 'remoteUtilities/components-mf-utilities'

import TableUser from '@/features/user-management/components/TableUser'
import { TypeUser } from '@/features/user-management/constants/typeUser'
import { useUserAdmin } from '@/features/user-management/hooks/useUserAdmin'

import { INTERNAL_EXTERNAL_USER_ACTIONS } from '@/shared/constants/actionCodes'
import { ROUTES } from '@/shared/routes'

import FiltersTable from '../components/FiltersTableUserExternal'
import ModalUserDetail from '../components/ModalUserDetail'
import ToolbarActionsUser from '../components/ToolbarActionsUserExternal'
import useUrlParams from '../hooks/useUrlParamsUserExternal'
import { useUserAdminColumns } from '../hooks/useUserAdminColumnsUserExternal'
import { FiltersTableState } from '../types/FiltersTable'
import { FieldTable } from '../types/fieldTable'

const UserManagementExternal = () => {
  const [field, setField] = useState<FieldTable | null>(null)
  const { hasAction } = useScreenActions()

  const {
    columns,
    isToastVisible,
    setIsToastVisible,
    loading,
    refresh,
    t,
    toggleModal,
    visibleModalDetail,
    fieldIdUser,
    setLoading,
    setRefresh,
    setVisibleModalDetail
  } = useUserAdmin(useUserAdminColumns, setField)
  const { userType, participantId, profileId } = useSelector(
    (state: RootState) => state.auth.infoUserNubo
  )
  const [filtersTable, setFiltersTable] = useState<FiltersTableState>({})
  const url = useUrlParams({ filtersTable, participantId, profileId })
  const navigate = useNavigate()
  useEffect(() => {
    if (userType === TypeUser.EXTERNAL) {
      navigate(ROUTES.USER_MANAGEMENT.path!)
    }
  }, [])
  const visibilityModal = useMemo(
    () => visibleModalDetail && fieldIdUser === field?.id,
    [visibleModalDetail, fieldIdUser, field]
  )
  const permissionsField = field?.profile?.permissions ?? []
  const canShowAdminProfileButton = hasAction(
    INTERNAL_EXTERNAL_USER_ACTIONS.MANAGE_PROFILES
  )
  if (loading) {
    return <Spinner />
  }
  return (
    <>
      <ContentWrapper title="Administrador de usuarios externos">
        {visibilityModal && (
          <Suspense fallback={<Spinner />}>
            <ModalUserDetail
              detailUserId={field?.id as number}
              setIsPanelOpen={(value: boolean) => setVisibleModalDetail(value)}
              currentParticipant={field?.participants ?? []}
              permissionsField={permissionsField}
              setRefresh={setRefresh}
              setLoading={setLoading}
            />
          </Suspense>
        )}
        <FiltersTable
          filtersTable={filtersTable}
          setFiltersTable={setFiltersTable}
          typeFilter="excludeParticipant"
        />
        <TableUser
          columns={columns}
          refresh={refresh}
          toggleModal={toggleModal}
          url={url}
          Toolbar={<ToolbarActionsUser />}
          setField={setField}
          canAdminProfiles={canShowAdminProfileButton}
        />
      </ContentWrapper>
      {isToastVisible && (
        <Toast
          text={t('adminUsers.statusUpdatedSuccessfully')}
          onClose={() => setIsToastVisible(!isToastVisible)}
        />
      )}
    </>
  )
}

export default UserManagementExternal

```

## src/features/user-management/pages/UserManagementInternal.tsx

```tsx
import { Suspense, lazy, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { useScreenActions } from 'store/mf-shell-useScreenActions'
import { RootState } from 'store/mf-store'

import {
  ContentWrapper,
  Spinner,
  Toast
} from 'remoteUtilities/components-mf-utilities'

import { useUserAdmin } from '@/features/user-management/hooks/useUserAdmin'
import { FiltersTableState } from '@/features/user-management/types/FiltersTable'

import { INTERNAL_USER_ACTIONS } from '@/shared/constants/actionCodes'

import FiltersTable from '../components/FiltersTableUserInternal'
import ModalUserDetail from '../components/ModalUserDetail'
import ToolbarActionsUser from '../components/ToolbarActionseUserInternal'
import useUrlParams from '../hooks/useUrlParams'
import { useUserAdminColumns } from '../hooks/useUserAdminColumnsInternal'
import { FieldTable } from '../types/fieldTable'

const TableUser = lazy(
  () => import('@/features/user-management/components/TableUser')
)

const UserManagementInternal = () => {
  const [field, setField] = useState<FieldTable | null>(null)
  const { hasAction } = useScreenActions()
  const {
    columns,
    isToastVisible,
    setIsToastVisible,
    loading,
    refresh,
    t,
    toggleModal,
    visibleModalDetail,
    fieldIdUser,
    setLoading,
    setRefresh,
    setVisibleModalDetail
  } = useUserAdmin(useUserAdminColumns, setField)
  const canShowAdminProfileButton = hasAction(
    INTERNAL_USER_ACTIONS.MANAGE_PROFILES
  )
  const [filtersTable, setFiltersTable] = useState<FiltersTableState>({})
  const { name: participantName, profileId } = useSelector(
    (state: RootState) =>
      state.auth.infoUserNubo?.[0] || state.auth.infoUserNubo
  )
  const url = useUrlParams({
    filtersTable,
    participant: participantName as string,
    profileId
  })
  const visibilityModal = useMemo(
    () => visibleModalDetail && fieldIdUser === field?.id,
    [visibleModalDetail, fieldIdUser, field]
  )
  const permissionsField = field?.profile?.permissions ?? []
  if (loading && !participantName && !profileId) {
    return <Spinner />
  } else {
    return (
      <>
        <ContentWrapper title="Administración de usuarios internos">
          {visibilityModal && (
            <Suspense fallback={<Spinner />}>
              <ModalUserDetail
                detailUserId={field?.id as number}
                setIsPanelOpen={(value: boolean) =>
                  setVisibleModalDetail(value)
                }
                currentParticipant={field?.participants ?? []}
                permissionsField={permissionsField}
                setRefresh={setRefresh}
                setLoading={setLoading}
              />
            </Suspense>
          )}
          <FiltersTable
            filtersTable={filtersTable}
            setFiltersTable={setFiltersTable}
            typeFilter="filterProfile"
          />
          <Suspense fallback={<Spinner />}>
            <TableUser
              columns={columns}
              refresh={refresh}
              toggleModal={toggleModal}
              url={url}
              Toolbar={<ToolbarActionsUser />}
              setField={setField}
              canAdminProfiles={canShowAdminProfileButton}
            />
          </Suspense>
        </ContentWrapper>
        {isToastVisible && (
          <Toast
            text={t('adminUsers.statusUpdatedSuccessfully')}
            onClose={() => setIsToastVisible(!isToastVisible)}
          />
        )}
      </>
    )
  }
}

export default UserManagementInternal

```

## src/features/user-management/services/changeStatus.ts

```typescript
import { httpUserManagment } from 'store/mf-axiosConfig'

import { getCommonHeaders } from '@/shared/utils/headerServices'

export const changeStatus = async (
  userId: number,
  idNewStatus: number | string
) => {
  const headers = await getCommonHeaders()
  const { data } = await httpUserManagment.patch<any>(
    `/user/${userId}`,
    { statusId: idNewStatus },
    {
      headers
    }
  )
  return data
}

```

## src/features/user-management/services/countries.ts

```typescript
import { httpUserManagment } from 'store/mf-axiosConfig'

import { getCommonHeaders } from '@/shared/utils/headerServices'

import { StateQueryParams } from '../types/common'
import { ResponseCountries } from '../types/countries'

export const getCountriesService = async (params: StateQueryParams) => {
  const headers = await getCommonHeaders()
  const { data } = await httpUserManagment.get<ResponseCountries>(
    '/user/countries',
    {
      headers,
      params
    }
  )
  return data
}

```

## src/features/user-management/services/deleteOTP.ts

```typescript
import axios from 'axios'
import { httpUserManagment } from 'store/mf-axiosConfig'

import { getCommonHeaders } from '@/shared/utils/headerServices'

export const deleteOTP = async (username: string): Promise<any> => {
  try {
    const headers = await getCommonHeaders()
    await httpUserManagment.delete(`/otp?userName=${username}`, {
      headers
    })
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(
        error.response.data.error ||
          error.response.data.errorMessage ||
          'Failed to delete OTP'
      )
    }
    throw new Error('Failed to delete OTP')
  }
}

```

## src/features/user-management/services/detailForProfile.ts

```typescript
import { httpProfileQuery } from 'store/mf-axiosConfig'

import { getCommonHeaders } from '@/shared/utils/headerServices'

import { RootObject } from '../types/fieldTable'

export const getDetailProfile = async (idProfile: number) => {
  const headers = await getCommonHeaders()
  const { data } = await httpProfileQuery.get<RootObject>(
    `/profile/${idProfile}`,
    {
      headers
    }
  )
  return data
}

```

## src/features/user-management/services/email.tsx

```tsx
import { httpUserManagment } from 'store/mf-axiosConfig'

import { getCommonHeaders } from '@/shared/utils/headerServices'

import { StateQueryParams } from '../types/common'
import { ResponseEmail } from '../types/email'

export const getEmailOptions = async (params: StateQueryParams) => {
  const headers = await getCommonHeaders()
  const { data } = await httpUserManagment.get<ResponseEmail>('/user/emails', {
    headers,
    params
  })
  return data
}

```

## src/features/user-management/services/enterpriseGroup.ts

```typescript
import { httpEnterpriseGroupsQuery } from 'store/mf-axiosConfig'

import { getCommonHeaders } from '@/shared/utils/headerServices'

import {
  EnterpriseGroupParams,
  ServiceEnterpriseGroup
} from '../types/enterpriseGroup'

const enterpriseGroup = async (params: EnterpriseGroupParams) => {
  const headers = await getCommonHeaders()
  const getEnterpiseAvaible =
    await httpEnterpriseGroupsQuery.get<ServiceEnterpriseGroup>(
      '/enterprise-group/search?statusActive=true',
      { headers, params }
    )
  return getEnterpiseAvaible.data
}
export default enterpriseGroup

```

## src/features/user-management/services/getDetailuser.ts

```typescript
import { httpUserManagment } from 'store/mf-axiosConfig'

import { getCommonHeaders } from '@/shared/utils/headerServices'

import { DetailUser } from '../types/getDetailUser'

const getDetailuser = async (userId: number, _participantId?: number) => {
  const headers = await getCommonHeaders()
  const { data } = await httpUserManagment.get<DetailUser>(
    `/user/${userId}/detail`,
    {
      headers
    }
  )
  return data
}

export default getDetailuser

```

## src/features/user-management/services/getDownloadUsers.ts

```typescript
import { httpUserManagment } from 'store/mf-axiosConfig'

import { getCommonHeaders } from '@/shared/utils/headerServices'

export const getDownloadUsers = async (url: string) => {
  const headers = await getCommonHeaders()
  const results = await httpUserManagment.get(url, {
    headers,
    params: { download: true }
  })
  return results.data
}

```

## src/features/user-management/services/getProfile.ts

```typescript
import { httpUserManagment } from 'store/mf-axiosConfig'

import { getCommonHeaders } from '@/shared/utils/headerServices'

import { StateQueryParams } from '../types/common'

export const getProfiles = async (params: StateQueryParams) => {
  const headers = await getCommonHeaders()
  const { data } = await httpUserManagment.get<any>('/user/profiles', {
    headers,
    params
  })
  return data
}

```

## src/features/user-management/services/getProfilePermissions.ts

```typescript
import { httpProfileQuery } from 'store/mf-axiosConfig'

import { getCommonHeaders } from '@/shared/utils/headerServices'

import { type Profile } from '../types/fieldTable'

const getProfilePermissions = async ({
  idParticipant,
  profileId,
  profileName
}: {
  idParticipant: number
  profileName?: string
  profileId?: string
}) => {
  const headers = await getCommonHeaders()
  const data = await httpProfileQuery.get<Profile[]>(
    `/profile/participant/${idParticipant}`,
    {
      headers,
      params: {
        profileName,
        profileId
      }
    }
  )
  return data.data
}

export default getProfilePermissions

```

## src/features/user-management/services/getProfilePermissionsOld.ts

```typescript
import { httpProfileQuery } from 'store/mf-axiosConfig'

import { getCommonHeaders } from '@/shared/utils/headerServices'

import { type Profile } from '../types/fieldTable'

const getProfilePermissions = async ({
  idParticipant,
  profileId,
  profileName
}: {
  idParticipant: number
  profileName?: string
  profileId?: string
}) => {
  const headers = await getCommonHeaders()
  const data = await httpProfileQuery.get<Profile[]>(
    `/profile/participant/${idParticipant}`,
    {
      headers,
      params: {
        profileName,
        profileId
      }
    }
  )
  return data.data
}

export default getProfilePermissions

```

## src/features/user-management/services/getProfilesUser.ts

```typescript
import { httpProfileQuery } from 'store/mf-axiosConfig'

import { getCommonHeaders } from '@/shared/utils/headerServices'

export const getProfileUser = async (
  participantId: number,
  profileName?: string
) => {
  const headers = await getCommonHeaders()
  const data = await httpProfileQuery.get(
    `/profile/participant/${participantId}`,
    {
      headers,
      params: {
        profileName
      }
    }
  )
  return data
}

```

## src/features/user-management/services/getTypeDocument.tsx

```tsx
import { httpFilterParameters } from 'store/mf-axiosConfig'

import { getCommonHeaders } from '@/shared/utils/headerServices'

import { ResTypeDocument } from '../types/getTypeDocument'

const getTypeDocument = async () => {
  const headers = await getCommonHeaders()
  const resTypeDocument = await httpFilterParameters.get<ResTypeDocument>(
    '/identification',
    {
      headers
    }
  )
  return resTypeDocument.data
}

export default getTypeDocument

```

## src/features/user-management/services/getUser.ts

```typescript
import axios from 'axios'
import { httpUserManagment } from 'store/mf-axiosConfig'

import { getCommonHeaders } from '@/shared/utils/headerServices'

import { type User, Data } from '../types/userTypes'

export const getUsersNuboById = async (
  userId: string | number
): Promise<User> => {
  try {
    const headers = await getCommonHeaders()
    const response = await httpUserManagment.get<User>(`/user/${userId}`, {
      headers
    })
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error || 'Failed to get users')
    }
    throw new Error('Failed to get users')
  }
}

export const getUsersNubo = async (): Promise<User[]> => {
  try {
    const headers = await getCommonHeaders()
    const response = await httpUserManagment.get<User[]>(`/user`, {
      headers
    })
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error || 'Failed to get users')
    }
    throw new Error('Failed to get users')
  }
}

export const getUsersByUsername = async (username: string): Promise<Data[]> => {
  try {
    const headers = await getCommonHeaders()
    const response = await httpUserManagment.get<Data[]>(
      `/keycloak/user?userName=${username}`,
      {
        headers
      }
    )
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error || 'Failed to get user')
    }
    throw new Error('Failed to get user')
  }
}

```

## src/features/user-management/services/participant.ts

```typescript
import { httpUserManagment } from 'store/mf-axiosConfig'

import { getCommonHeaders } from '@/shared/utils/headerServices'

import { StateQueryParams } from '../types/common'
import { ResponseParticipant } from '../types/participant'

export const getParticipant = async (params: StateQueryParams) => {
  const headers = await getCommonHeaders()
  const { data } = await httpUserManagment.get<ResponseParticipant>(
    '/user/participants',
    {
      headers,
      params
    }
  )
  return data
}

```

## src/features/user-management/services/participantForEnterpriseGroup.ts

```typescript
import { httpEnterpriseGroupsQuery } from 'store/mf-axiosConfig'

import { getCommonHeaders } from '@/shared/utils/headerServices'

import {
  GrupoEmpresarialQueryParams,
  ResponseServiceParticipantGroup
} from '../types/participantsForEnterpriseGroup'

export const getParticipantForEnterpriceGroup = async (
  params: GrupoEmpresarialQueryParams
) => {
  const headers = await getCommonHeaders()
  const { data } =
    await httpEnterpriseGroupsQuery.get<ResponseServiceParticipantGroup>(
      '/participant/search',
      {
        headers,
        params
      }
    )
  return data
}

```

## src/features/user-management/services/passwordUser.ts

```typescript
import axios from 'axios'
import { httpUserManagment } from 'store/mf-axiosConfig'

import { getCommonHeaders } from '@/shared/utils/headerServices'

import { Password } from '../types/userTypes'

export const setNewPasswordUser = async (
  formData: any,
  userId: string
): Promise<void> => {
  try {
    const headers = await getCommonHeaders()
    await httpUserManagment.put(
      `/keycloak/users/${userId}/reset-password`,
      formData,
      {
        headers
      }
    )
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(
        error.response.data.error ||
          error.response.data.errorMessage ||
          'Failed to create user'
      )
    }
    throw new Error('Failed to create user')
  }
}

export const generatePasswordByUsername = async (
  username: string
): Promise<Password> => {
  try {
    const headers = await getCommonHeaders()
    const response = await httpUserManagment.get(
      `/user/generate-password?userName=${username}`,
      {
        headers
      }
    )
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(
        error.response.data.error ||
          error.response.data.errorMessage ||
          'Failed to generate password'
      )
    }
    throw new Error('Failed to generate password')
  }
}

```

## src/features/user-management/services/sendEmail.ts

```typescript
import axios from 'axios'
import { httpEmailApi } from 'store/mf-axiosConfig'

import { getCommonHeaders } from '@/shared/utils/headerServices'

import { SendEmailParams } from '../types/sendEmail'

export const sendEmailUser = async (
  email: string,
  formData: SendEmailParams
): Promise<any> => {
  try {
    const headers = await getCommonHeaders()
    const response = await httpEmailApi.post(
      `/notification/send-email/code-template/user?userName=${email}`,
      formData,
      {
        headers
      }
    )

    return response.data
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(
        error.response.data.error ||
          error.response.data.errorMessage ||
          'Failed to send email template'
      )
    }
    throw new Error('Failed to send email template')
  }
}

export const sendEmailModifyUser = async (formData: any): Promise<any> => {
  try {
    const headers = await getCommonHeaders()
    const response = await httpEmailApi.post(
      `/notification/send-email-modify-user`,
      formData,
      {
        headers
      }
    )

    return response.data
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(
        error.response.data.error ||
          error.response.data.errorMessage ||
          'Failed to send email'
      )
    }
    throw new Error('Failed to send email')
  }
}

```

## src/features/user-management/services/status.ts

```typescript
import { httpUserManagment } from 'store/mf-axiosConfig'

import { getCommonHeaders } from '@/shared/utils/headerServices'

import { StateQueryParams } from '../types/common'
import { ResponseStatus } from '../types/statusService'

export const getStatusService = async (params?: StateQueryParams) => {
  const headers = await getCommonHeaders()
  const { data } = await httpUserManagment.get<ResponseStatus>('/user/status', {
    headers,
    params
  })
  return data
}

```

## src/features/user-management/services/updateProfile.ts

```typescript
import { httpUserManagment } from 'store/mf-axiosConfig'

import { getCommonHeaders } from '@/shared/utils/headerServices'

import { type DataProfileSelect } from '../types/AssignPermissions'

export const updateProfileService = async (
  userId: number,
  body: DataProfileSelect
) => {
  const headers = await getCommonHeaders()
  const profileAndParticipants = Object.values(body)
  const { participantIds, profileIds } = profileAndParticipants.reduce<{
    profileIds: number[]
    participantIds: number[]
  }>(
    (acc, current) => {
      acc.profileIds.push(+current.id)
      acc.participantIds.push(+current.participantId)
      return acc
    },
    { profileIds: [], participantIds: [] }
  )
  const { data } = await httpUserManagment.patch<any>(
    `/user/${userId}`,
    { profileIds: profileIds, participantIds: participantIds },
    {
      headers
    }
  )
  return data
}

```

## src/features/user-management/services/updateUser.ts

```typescript
import axios from 'axios'
import { httpUserManagment } from 'store/mf-axiosConfig'

import { getCommonHeaders } from '@/shared/utils/headerServices'

import { User } from '../types/userTypes'

export const updateUserById = async (
  userId: string | number,
  formData: any
): Promise<User> => {
  try {
    const headers = await getCommonHeaders()
    const response = await httpUserManagment.patch<User>(
      `/user/${userId}`,
      formData,
      {
        headers
      }
    )
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error || 'Failed to update User')
    }
    throw new Error('Failed to update User')
  }
}

```

## src/features/user-management/services/user.ts

```typescript
import { httpUserManagment } from 'store/mf-axiosConfig'

import { getCommonHeaders } from '@/shared/utils/headerServices'

import { StateQueryParams } from '../types/common'
import { ResponseUser } from '../types/userName'

export const getUserOptions = async (params: StateQueryParams) => {
  const headers = await getCommonHeaders()
  const { data } = await httpUserManagment.get<ResponseUser>(
    '/user/usernames',
    {
      headers,
      params
    }
  )
  return data
}

```

## src/features/user-management/services/users.ts

```typescript
import axios from 'axios'
import { httpParticipants, httpUserManagment } from 'store/mf-axiosConfig'

import { getCommonHeaders } from '@/shared/utils/headerServices'

/**
 * Creates users.
 *
 * @param formData - The form data for creating users.
 * @returns A Promise that resolves to void.
 * @throws An error if the request fails or if there is an error in the response.
 */
export const createUsers = async (formData: any): Promise<void> => {
  try {
    const headers = await getCommonHeaders()

    const response = await httpUserManagment.post(`/keycloak/users`, formData, {
      headers
    })
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(
        error.response.data.error ||
          error.response.data.errorMessage ||
          'Failed to create user'
      )
    }
    throw new Error('Failed to create user')
  }
}

export const createUsersNubo = async (formData: any): Promise<any> => {
  try {
    const headers = await getCommonHeaders()
    const response = await httpUserManagment.post(`/user`, formData, {
      headers
    })
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(
        error.response.data.error ||
          error.response.data.errorMessage ||
          'Failed to create user'
      )
    }
    throw new Error('Failed to create user')
  }
}

export const getSelects = async (
  type: string
): Promise<{ label: string; value: string }[]> => {
  try {
    const headers = await getCommonHeaders()
    const response = await httpParticipants.get(`/${type}`, {
      headers
    })

    const mapResponse = (item: {
      description?: string
      name?: string
      id: string
    }) => ({
      label: item.description || item.name || '',
      value: item.id.toString()
    })

    if (Array.isArray(response.data)) {
      return response.data.map(mapResponse)
    } else if (response.data.content && Array.isArray(response.data.content)) {
      return response.data.content.map(mapResponse)
    } else {
      throw new Error('Unexpected response structure')
    }
  } catch (error) {
    console.error('Error fetching user information:', error)
    throw error
  }
}

// otp services

export const deleteUsersKeycloak = async (idUser: string): Promise<any> => {
  try {
    const headers = await getCommonHeaders()
    await httpUserManagment.delete(`/keycloak/users/${idUser}`, {
      headers
    })
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(
        error.response.data.error ||
          error.response.data.errorMessage ||
          'Failed to delete user'
      )
    }
    throw new Error('Failed to delete user')
  }
}

```

## src/features/user-management/services/validateEmail.ts

```typescript
import { httpUserManagment } from 'store/mf-axiosConfig'

import { getCommonHeaders } from '@/shared/utils/headerServices'

import {
  QueryParamsValidateEmail,
  ResponseValidateEmail
} from '../types/validateEmail'

const validateEmail = async (data: QueryParamsValidateEmail) => {
  const headers = await getCommonHeaders()
  const serviceValidateEmail =
    await httpUserManagment.get<ResponseValidateEmail>(
      `user/find-user/${data.email}`,
      {
        headers,
        params: { participantId: data?.participantIds }
      }
    )
  return serviceValidateEmail.data
}
export default validateEmail

```

## src/features/user-management/services/validateUser.ts

```typescript
import { httpUserManagment } from 'store/mf-axiosConfig'

import { getCommonHeaders } from '@/shared/utils/headerServices'

import { QueryParamsValidateUser } from '../types/validateUser'

const validateUser = async (params: QueryParamsValidateUser) => {
  const newParams = new URLSearchParams()
  newParams.append('email', params.email)
  params.participantIds.forEach((id) =>
    newParams.append('participantIds', id.toString())
  )
  const headers = await getCommonHeaders()
  const serviceValidateEmail = await httpUserManagment.get(
    `/user/validate-user-participant?${newParams.toString()}`,
    { headers }
  )
  return serviceValidateEmail.data
}
export default validateUser

```

## src/features/user-management/types/AssignPermissions.d.ts

```typescript
import { RootObject } from './fieldTable'
import { PermissionsProfile } from './userTypes'

export type DataProfileSelect = Record<
  string,
  {
    name: string
    permissions: RootObject | undefined
    id: string | number
    participantId: number
  }
>

```

## src/features/user-management/types/AutoCompleteStructure.d.ts

```typescript
export interface AutoCompleteOptions<T> {
  data: T[]
}
export interface AutocompleteOption {
  id: any
  label: string
  [key: string]: any
}

```

## src/features/user-management/types/FiltersTable.d.ts

```typescript
import { Dispatch, SetStateAction } from 'react'

import { FiltersStateKey } from '../constants/filtersStateKeys'
import { AutocompleteOption } from './AutoCompleteStructure'

interface Country {
  id: number
  code: string
  name: string
  currency: {
    id: number
    code: string
    name: string
  }
  timeZone: string
}
interface Participant {
  id: number
  name: string
  description: string
}

interface Status {
  id: number
  description: string
  category: string
}
export interface FiltersTableState {
  [FiltersStateKey.COUNTRY]?: Country
  [FiltersStateKey.PARTICIPANT]?: AutocompleteOption
  [FiltersStateKey.STATUS]?: Status
  [FiltersStateKey.EMAIL]?: AutocompleteOption
  [FiltersStateKey.USER_NAME]?: AutocompleteOption
  [FiltersStateKey.PROFILE]?: AutocompleteOption
}

export interface FiltersTableProps {
  filtersTable: FiltersTableState
  setFiltersTable: Dispatch<SetStateAction<FiltersTableState>>
  typeFilter: 'excludeParticipant' | 'filterProfile'
}

```

## src/features/user-management/types/FiltersTableUserExternal.d.ts

```typescript
import { Dispatch, SetStateAction } from 'react'

import { FiltersTableState } from '@/features/user-management/types/FiltersTable'

interface Country {
  id: number
  code: string
  name: string
  currency: {
    id: number
    code: string
    name: string
  }
  timeZone: string
}
interface Participant {
  id: number
  name: string
  description: string
}

export interface FiltersTableProps {
  filtersTable: FiltersTableState
  setFiltersTable: Dispatch<SetStateAction<FiltersTableState>>
}

```

## src/features/user-management/types/FiltersTableUserInternal.d.ts

```typescript
export interface FiltersTableState {
  country?: Country
  status?: string
  email?: string
  username?: string
}
export interface FiltersTableProps {
  filtersTable: FiltersTableState
  setFiltersTable: Dispatch<SetStateAction<FiltersTableState>>
}

```

## src/features/user-management/types/UseAdminColumns.d.ts

```typescript
import { Dispatch, SetStateAction } from 'react'

import { Permission } from './getDetailUser'

export interface UseUserAdminColumnsProps {
  setRefresh: Dispatch<SetStateAction<boolean>>
  setLoading: (value: boolean) => void
  toggleModal: (idUser?: { idUser?: number; visibleModal?: boolean }) => void
  visibleModalDetail: boolean
  fieldIdUser?: number
  setField: Dispatch<SetStateAction<FieldTable | null>>
}

```

## src/features/user-management/types/common.d.ts

```typescript
export interface StateQueryParams {
  email?: string
  status?: number
  countryId?: number
  participant?: string
  username?: string
  profile?: string
  excludeParticipantId?: number
}

export interface CommonResponseAutoComplete<T> {
  pageNumber: number
  pageSize: number
  totalElements: number
  totalPages: number
  content: T
}

```

## src/features/user-management/types/countries.d.ts

```typescript
export interface CountryOption {
  id: number
  code: string
  name: string
  currency: {
    id: number
    code: string
    name: string
  }
  timeZone: string
}

export type ResponseCountries = CountryOption[]

```

## src/features/user-management/types/email.d.ts

```typescript
export interface optionEmail {
  email: string
}

export type ResponseEmail = optionEmail[]

```

## src/features/user-management/types/enterpriseGroup.d.ts

```typescript
import { CommonResponseAutoComplete } from './common'
import { Status } from './getDetailUser'
import { Participant } from './participant'

export interface IdentificationType {
  id: number
  description: string
}

export interface Country {
  id: number
  code: string
  name: string
  timeZone: string
}

export interface ParticipantType {
  id: number
  description: string
  category: string
}

export interface EnterpriseGroup {
  id: number
  code: string | null
  name: string
  detail: string
  canceled: boolean
  status: Status
  participants: Participant[] | null
}
export interface EnterpriseGroupParams {
  page?: number
  size?: number
  sort?: string
  order?: 'asc' | 'desc' | string
  text?: string
  id?: number
  participantId?: number
  statusId?: number
}

export type ServiceEnterpriseGroup = CommonResponseAutoComplete<
  EnterpriseGroup[]
>

export interface EnterpriseGroupParams {
  page?: number
  size?: number
  sort?: string
  order?: 'asc' | 'desc' | string
  text?: string
  id?: number
  participantId?: number
  statusId?: number
}

```

## src/features/user-management/types/fieldTable.d.ts

```typescript
import { Country } from '@/features/user-management/types/FiltersTable'
import {
  Permission,
  ProfileParticipant
} from '@/features/user-management/types/getDetailUser'
import { Participant, Status } from '@/features/user-management/types/userTypes'

import { CountryOption } from './countries'
import { EnterpriseGroup, IdentificationType } from './enterpriseGroup'

export interface Profile {
  id: number
  name: string
  description: string
  status: Status
  permissions: Permission[]
  participants: Participant[]
  lastModifyUser: string
  lastModifyDate: string
}

export interface ScreenAction {
  id: number
  code: string
  description: string
  enabled: boolean
  path: string
}

export interface Screen {
  id: number
  code: string
  description: string
  screenActions: ScreenAction[]
}

export interface Status {
  id: number
  description: string
  category: string
}

export interface Submodule {
  id: number
  name: string
  description: string
  collapsible: boolean
  orderItem: number
  submoduleDeleted: boolean
  status: Status
  menuConfigurationId: number
  screen?: Screen
}

export interface Module extends Submodule {
  submodules: Submodule[]
}

export interface Category extends Omit<Module, 'submodules'> {
  modules: Module[]
}

export interface MenuConfiguration {
  categories: Category[]
}

export interface Type {
  id: number
  description: string
  category: string
}

export interface ParticipantStatus {
  id: number
  description: string
  category: string
}

export interface Participant {
  id: number
  code: string
  documentNumber: string
  identificationType: IdentificationType
  name: string
  shortName: string
  status: ParticipantStatus
  country: Omit<CountryOption, 'currency'>
  type: Type
  enterpriseGroup: Omit<
    EnterpriseGroup,
    'detail' | 'canceled' | 'status' | 'participants'
  >
}

export interface RootStatus {
  id: number
  description: string
  category: string
}

export interface RootObject {
  id: number
  name: string
  description: string
  status: RootStatus
  participant: Participant
  lastModifyUser: string
  lastModifyDate: string
  lastModifyDateTime: string
  menuConfiguration?: MenuConfiguration
}

export interface FieldTable {
  profile: Profile
  profiles: Profile[]
  blocked: boolean
  country: Country
  email: string
  failedAttempt: number
  firstName: number
  id: number
  idKeycloak: string
  identification: string
  identificationType: { id: number; description: string }
  jiraNumber: string
  lastModifyDate: string
  lastName: string
  otp: boolean
  otpCreatedDate?: string
  otpSecret?: string
  otpSecretImageUri?: string
  participant: ProfileParticipant
  participants: Participant[]
  password?: string
  phoneNumber: ''
  previousSession: false
  userCreatedBy: string
  userCreatedDate: string
  userGroup: string
  userName: string
  userType: string
  verifiedEmail: boolean
}

```

## src/features/user-management/types/getDetailUser.ts

```typescript
import { Participant } from './participant'
import { Profile } from './userTypes'

// }

export interface ProfileParticipant {
  id: number
  name: string
  description: string | null
  status: Status
  permissions: Permission[]
  participant: Participant
  lastModifyUser: string
  lastModifyDate: string
}

export interface DetailUser {
  id: number
  name: string
  identificationType: IdentificationType
  identification: string
  country: Country
  email: string
  status: Status
  profiles: Profile[]
}

export interface IdentificationType {
  id: number
  description: string
}

export interface Country {
  id: number
  code: string
  name: string
  currency: Currency
  timeZone: string
}

export interface Currency {
  id: number
  code: string
  name: string
}

export interface Status {
  id: number
  description: string
  category: string
}

export interface Permission {
  id: number
  name: string
  description: string
  url: string | null
  level: number
  parentId: number | null
  collapsible: boolean
  orderItem: number
  enabled: boolean
}

```

## src/features/user-management/types/getTypeDocument.d.ts

```typescript
export interface TypeDocument {
  description: string
  id: number
}
export type ResTypeDocument = TypeDocument[]

```

## src/features/user-management/types/participant.d.ts

```typescript
import { CountryOption } from './countries'

export interface Participant {
  id: number
  code: string
  documentNumber: string
  identificationType: {
    id: number
    description: string
  }
  name: string
  shortName: string
  type: {
    id: number
    description: string
    category: string
  }
  mnemonic: string | null
  country: CountryOption
  registrationDate: string
  taxCode: string
  department: {
    id: string
    description: string
  }
  mainAddress: string
  webPage: string | null
  phoneNumber: string
  status: {
    id: number
    description: string
    category: string
  }
  nitClearingHouse: string | null
  taxStatus: {
    id: number
    description: string
  }
  typeEntity: string | null
  marginAccount: string | null
  masterAccount: string | null
  directAllocation: string
  marketMaker: string
  enabled: boolean | null
  custodian: boolean
  enterpriseGroup: {
    id: number
    code: string
    name: string
  }
}

export type ResponseParticipant = Participant[]

```

## src/features/user-management/types/participantsForEnterpriseGroup.d.ts

```typescript
import { CommonResponseAutoComplete } from './common'
import { ParticipantType } from './enterpriseGroup'
import { IdentificationType } from './getDetailUser'
import { Participant } from './participant'
import { Country } from './userTypes'

export interface GrupoEmpresarialQueryParams {
  page?: number
  size?: number
  sort?: string
  order?: 'asc' | 'desc'
  name?: string
  hasEnterpriseGroup?: boolean
  enterpriseGroupId?: number
}

export type ResponseServiceParticipantGroup = CommonResponseAutoComplete<
  ParticipantForGroup[]
>

interface Status {
  id: number
  description: string
  category: string
  detail: string
}

export interface ParticipantForGroup {
  id: number
  code: string
  documentNumber: string
  identificationType: IdentificationType
  name: string
  shortName: string
  status: Status
  country: Country
  type: ParticipantType
}

```

## src/features/user-management/types/permissionForProfile.d.ts

```typescript
export interface ProfileScope {
  selectedProfile?: SelectedProfile
  scopeProfile?: ScopePermission[]
  idProfile?: number
}

export interface SelectedProfile {
  id?: number
  name?: string
}

export interface ScopePermission {
  id?: number
  name?: string
  description?: string
  url?: string | null
  level?: number
  parentId?: number | null
  collapsible?: boolean
  orderItem?: number
  enabled?: boolean
}

```

## src/features/user-management/types/sendEmail.d.ts

```typescript
import { EmailCodes } from '../constants/emailCodes'

export interface SendEmailParams {
  codeTemplate: keyof typeof EmailCodes
  processName?: string
  message?: string
  guaranteeNumber?: string
  operationNumber?: string
  registrationDate?: string
  isinNumber?: string
  guaranteeQuantity?: string
  token?: string
  newParticipantName?: string
  passwordTemp?: string
}

```

## src/features/user-management/types/statusService.d.ts

```typescript
export interface optionStatus {
  id: number
  description: string
  category: string
}
export type ResponseStatus = optionStatus[]

```

## src/features/user-management/types/userName.d.ts

```typescript
export interface optionUser {
  id: number
  userName: string
  firstName: string
  lastName: string
}

export type ResponseUser = optionUser[]

```

## src/features/user-management/types/userTypes.d.ts

```typescript
import { Dispatch, SetStateAction } from 'react'

import { CountryOption } from './countries'
import { RootObject } from './fieldTable'
import { DetailUser } from './getDetailUser'
import { Participant as ParticipantProfile } from './participant'

export interface ProfileUser {
  name: string
  permissions: any[]
  id: number
}

export interface FormData {
  selectedProfile?: { [participant: string]: { name: string; id: number } }
  scopeProfile?: any[]
  idProfile?: number
}

export type RegisterFormValues = {
  radicado: string
  enterpriseGroup?: { id: number; label: string }
  firstName: string
  lastName: string
  email: string
  confirmEmail: string
  docType?: { id: string; description: string }
  docNumber?: string
  participants?: { id: number; label: string }[]
  participantsDefault?: { id: number; label: string }[]
  selectedProfile?: {
    [participant: string]: Profile | undefined
  }
  idKeycloak?: string
  jiraNumber?: string
  idUser?: number
}

export type Country = {
  id: number
  name: string
  currency?: string
  timeZone?: string
}

export interface Participant {
  id: number
  code: string
  name: string
  shortName: string
  type: string
  mnemonic: string
  registrationDate: string
  taxCode: string
  department: string
  mainAddress: string
  webPage: string
  phoneNumber: string
  status: string
  nitClearingEntity: string
  taxQuality: string
  entityType: string
  marginAccount: string
  directAssignment: string
  marketMakerMarking: boolean
  action: string
  createDate: string
  country: Country
}

export interface Profile {
  id: number
  name: string
  description: string
  permissions: RootObject
  participant: ParticipantProfile
}

export interface PermissionsProfile {
  id: number
  name: string
  description: string
  url: null | string
  level: number
  parentId: number | null
  collapsible: boolean
  orderItem: number
  enabled: boolean
}

export interface User {
  id: number
  userName: string
  firstName: string
  lastName: string
  idType: string
  identification: string
  userCreatedDate: string
  userCreatedBy: string
  lastModifyDate: string
  idKeycloak: string
  email: string
  verifiedEmail: boolean
  phoneNumber: string
  userGroup: string
  userType: string
  jiraNumber: string
  failedAttempt: number
  isBlocked: boolean
  participant: Participant
  participants: Participant[]
  country: Country
  profile: ProfileUser
  status: Status
}

export interface Password {
  password: string
}

export interface Status {
  category: string
  description: string
  id: number
}

export type Data = {
  id: string
  username: string
  email: string
  firstName: string
  lastName: string
  enabled: boolean
  createdTimestamp: number
  attributes: {
    address?: string
    balance?: string
  }
}

export interface UserDetailsProps {
  setLoading: (value: boolean) => void
  setRefresh: Dispatch<SetStateAction<boolean>>
  setIsPanelOpen: (visible: boolean) => void | Dispatch<SetStateAction<boolean>>
  detailUser: Partial<DetailUser>
  propsAssignPermissions: {
    modalConfirm: boolean
    setModalConfirm: Dispatch<SetStateAction<boolean>>
  }
}

export interface PropsEntitySection {
  t: (key: string) => string
  onEdit: () => void
}

export interface PermissionsSectionProps {
  t: (key: string) => string
  onEdit: () => void
}

export interface UserApiResponse {
  id: string
  name: string
  code: string
  documentNumber: string
  identificationType: {
    description: string
  }
}

export interface UserDetails {
  id: string
  name: string
  code: string
  documentType: string
  documentNumber: string
}

export interface ParticipantApiResponse {
  content: UserApiResponse[]
}

```

## src/features/user-management/types/validateEmail.d.ts

```typescript
import { CountryOption } from './countries'
import { IdentificationType } from './getDetailUser'
import { Participant } from './participant'
import { Profile } from './userTypes'

export interface QueryParamsValidateEmail {
  email: string
  participantIds?: number
}

export interface ResponseValidateEmail {
  id: number
  userName: string
  firstName: string
  lastName: string
  identificationType: IdentificationType
  identification: string
  idKeycloak: string
  email: string
  verifiedEmail: true
  phoneNumber: string
  userGroup: string
  userType: INTERNAL
  jiraNumber: string
  failedAttempt: 0
  blocked: true
  participantAfp: Participant
  participants: Participant[]
  participant: Participant
  country: CountryOption
  profiles: Profile[]
  profile: Profile
  status: Status
  password: string
  otp: true
  otpCreatedDate: string
  otpSecretImageUri: string
  otpSecret: string
  previousSession: true
  userCreatedDate: string
  userCreatedBy: string
  lastModifyDate: string
}

```

## src/features/user-management/types/validateUser.d.ts

```typescript
export interface QueryParamsValidateUser {
  email: string
  participantIds: number[]
}

```

## src/features/user-management/utils/fetchAndFilterPermissions.ts

```typescript
import { getPermissions } from '@/shared/services'

export async function fetchAndFilterPermissions({
  filterCheckedById,
  alcance,
  setLoading
}: {
  filterCheckedById: (profiles: any[], permissionIds: any[]) => any[]
  alcance: any[]
  setLoading?: (loading: boolean) => void
}) {
  const permissionIds = Array.isArray(alcance)
    ? alcance.map((permission: any) => permission.id)
    : []
  try {
    const profiles = await getPermissions()
    const filteredData = filterCheckedById(profiles, permissionIds)
    return { data: filteredData }
  } catch (error) {
    console.error('Error fetching profiles:', error)
    return { data: [] }
  } finally {
    setLoading?.(false)
  }
}

```

## src/features/user-management/utils/generateCSV.ts

```typescript
import { TRenderCellParams } from '@nuam/common-fe-lib-components'

import getParticipants from './participantsJoin'

type GenerateTxtReport = {
  data: any
  name?: string
  headersTable: {
    width: number
    headerName: string
    field: string
    sortable: boolean
    filterable: boolean
    renderCell: (params: TRenderCellParams) => JSX.Element
    flex?: undefined
    cellClassName?: undefined
    noHidden?: undefined
  }[]
}

const rowRenderCells = [
  'userName',
  'country',
  'userGroup',
  'profile',
  'isOtp',
  'participant',
  'status'
]
export const generateCSVUsers = async ({
  data,
  name,
  headersTable
}: GenerateTxtReport) => {
  let reports: string[] = []

  const headersSetRows = new Set(headersTable)
  const headersSet = new Set()
  headersSetRows.forEach((header) => {
    if (header.field !== 'viewDetails') {
      headersSet.add(header.headerName)
    }
  })
  const headers = [...headersSet].join(',')
  reports.push(headers)
  const setData = new Set(data)
  setData.forEach((row: any) => {
    const participant = row?.participant
    const renderCells: Record<string, string> = {
      userName: `${row.firstName} ${row.lastName}`,
      country: row?.country?.name ?? '',
      userGroup: participant?.enterpriseGroup?.name || '',
      profile: row?.profile?.name ?? '',
      isOtp: row.otp ? '  Verdadero' : 'Falso',
      participant: getParticipants(row?.participants) || '',
      status: row?.status?.description ?? ''
    }
    const item: string[] = []
    headersSetRows.forEach((header) => {
      const { field, headerName } = header
      const isRenderCell = rowRenderCells.includes(field)
      const headersNameHasField = [...headersSet].includes(headerName)
      if (headersNameHasField) {
        if (isRenderCell) {
          const valueRenderCell = renderCells[field as keyof typeof renderCells]
          item.push(valueRenderCell)
        } else {
          const valueRow = row?.[field] ?? ''
          item.push(valueRow)
        }
      }
    })
    reports.push(item.join(','))
  })

  const finalContent = reports.join('\n')
  const nameEntity = (name ?? 'default_name').replace(/\s+/g, '_')
  const fileName = `${nameEntity}.csv`
  const bom = new Uint8Array([0xef, 0xbb, 0xbf])
  const blob = new Blob([bom, finalContent], { type: 'text/csv;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = fileName
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

```

## src/features/user-management/utils/getStepComponent.ts

```typescript
import { STEP_FLOW } from '@/shared/constants'
import { createStepComponentResolver } from '@/shared/utils/createStepComponentResolver'

import { USER_STEP_COMPONENTS } from '../constants'

export const getStepComponent = createStepComponentResolver(
  USER_STEP_COMPONENTS,
  USER_STEP_COMPONENTS[STEP_FLOW.DEFAULT_STEP]
)

```

## src/features/user-management/utils/isDifferentParticipants.ts

```typescript
export const isDifferentParticipants = ({
  participants,
  participantsDefault
}: {
  participantsDefault:
    | {
        id: number
        label: string
      }[]
    | undefined
  participants:
    | {
        id: number
        label: string
      }[]
    | undefined
}) => {
  const setParticipantsDefault = new Set(participantsDefault)
  const setParticipants = new Set(participants?.map((p) => p.id))
  let someParticipantIsEqual = false
  for (const participantDefault of setParticipantsDefault) {
    if (setParticipants.has(participantDefault.id)) {
      someParticipantIsEqual = true
      break
    }
  }

  return someParticipantIsEqual
}

```

## src/features/user-management/utils/participantsJoin.ts

```typescript
import { Participant } from '../types/userTypes'

const getParticipants = (participants: Participant[]) => {
  const participantsName = participants.map((participant) => participant.name)
  return participantsName.join(', ')
}
export default getParticipants

```

## src/features/user-management/utils/profileInfo.ts

```typescript
export const getProfileInfo = (formData: any, t: (key: string) => string) => {
  return [
    { label: `${t('filing')}:`, value: formData.radicado || 'N/A' },
    { label: `${t('country')}:`, value: formData?.country?.name || 'N/A' },
    {
      label: `${t('name')}:`,
      value:
        `${formData?.firstName || ''} ${formData?.lastName || ''}`.trim() ||
        'N/A'
    },
    { label: `${t('corporateEmail')}:`, value: formData?.email || 'N/A' },
    {
      label: `${t('identificationType')}:`,
      value: formData?.docType?.description || 'N/A'
    },
    {
      label: `${t('identificationNumber')}:`,
      value: formData?.docNumber || 'N/A'
    }
  ]
}

export const getEntidadExternalInfo = (
  formData: any,
  t: (key: string) => string
) => {
  return [
    { label: `${t('filing')}:`, value: formData.radicado || 'N/A' },
    { label: `${t('country')}:`, value: formData?.country?.name || 'N/A' },
    {
      label: `${t('identificationType')}:`,
      value: formData?.entity?.documentType || 'N/A'
    },
    {
      label: `${t('identificationNumber')}:`,
      value:
        `${formData?.entity?.code || ' '} - ${formData?.entity?.documentNumber || ' '}` ||
        'N/A'
    },
    { label: `${t('entity')}:`, value: formData?.entity?.name || 'N/A' }
  ]
}

export const getUserExternalInfo = (
  formData: any,
  t: (key: string) => string
) => {
  return [
    {
      label: `${t('name')}:`,
      value:
        `${formData?.firstName || ''} ${formData?.lastName || ''}`.trim() ||
        'N/A'
    },
    {
      label: `${t('corporateEmail')}:`,
      value: formData?.confirmEmail || 'N/A'
    },
    {
      label: `${t('identificationType')}:`,
      value: formData?.docType?.description || 'N/A'
    },
    {
      label: `${t('identificationNumber')}:`,
      value: formData?.docNumber || 'N/A'
    }
  ]
}

export const getInfo2 = (t: (key: string) => string) => {
  return [
    { label: t('systemOpeningTest') },
    { label: t('closeSystenTest') },
    { label: t('vrOperationsRecoveryTest') },
    { label: t('vrOperationsRecoveryTest') }
  ]
}

```

## src/features/user-management/utils/sendUserEmail.ts

```typescript
import {
  generatePasswordByUsername,
  setNewPasswordUser
} from '../services/passwordUser'
import { sendEmailModifyUser, sendEmailUser } from '../services/sendEmail'

export const sendUserEmail = async (dataUserCreated: any, exist: boolean) => {
  const participants = dataUserCreated?.participants

  const participantsName = participants
    .map((participant: any) => participant.name)
    .join(', ')
  if (dataUserCreated?.userType === 'INTERNAL') {
    const userId = dataUserCreated.idKeycloak
    const userName = dataUserCreated.userName
    const password = await generatePasswordByUsername(userName)
    const resetPasswordBody = {
      type: 'password',
      value: password.password,
      temporary: true
    }
    await setNewPasswordUser(resetPasswordBody, userId)
    await sendEmailModifyUser({
      userName: dataUserCreated.userName,
      password: password.password
    })
  } else if (dataUserCreated?.userType === 'EXTERNAL') {
    if (exist) {
      await sendEmailUser(dataUserCreated.userName, {
        codeTemplate: 'NOTIFICATION_USER_NEW_PARTICIPANT',
        newParticipantName: participantsName
      })
    } else {
      const idKeycloak = dataUserCreated.idKeycloak
      const userName = dataUserCreated.userName
      const password = await generatePasswordByUsername(userName)
      const resetPasswordBody = {
        type: 'password',
        value: password.password,
        temporary: true
      }
      try {
        await setNewPasswordUser(resetPasswordBody, idKeycloak)
        await sendEmailUser(dataUserCreated.userName, {
          codeTemplate: 'NOTIFICATION_NEW_USER',
          passwordTemp: password.password
        })
      } catch (error) {}
    }
  }
}

```

## src/features/user-management/utils/transformFormData.ts

```typescript
import { RegisterFormValues } from '../types/userTypes'

export const transformFormDataKeyCloak = (
  data: Partial<RegisterFormValues>
) => {
  const transformedData = {
    username: (data.email || '').toLowerCase(),
    firstName: data.firstName || '',
    lastName: data.lastName || '',
    email: (data.email || '').toLowerCase(),
    enabled: true,
    requiredActions: ['UPDATE_PASSWORD']
  }
  return transformedData
}

export const transformFormDataNubo = (
  data: Partial<RegisterFormValues>,
  id_keycloak: string,
  isExternalRegister: boolean
) => {
  const profiles =
    Object.values(data.selectedProfile || {}).map((profile) => profile?.id) ||
    []
  const participants =
    [...(data.participants ?? []), ...(data?.participantsDefault ?? [])]?.map(
      (participant) => participant.id
    ) || []
  const allParticipants = [...new Set(participants)]
  if (isExternalRegister) {
    const transformedDataExternal = {
      userName: (data.email || '').toLowerCase(),
      firstName: data.firstName || '',
      lastName: data.lastName || '',
      email: (data.email || '').toLowerCase(),
      identificationTypeId: data.docType?.id || '',
      identification: data.docNumber || '',
      idKeycloak: id_keycloak || '',
      verifiedEmail: true,
      phoneNumber: '',
      userGroup: 'N/A',
      userType: 'EXTERNAL',
      jiraNumber: data.radicado,
      profileIds: profiles,
      participantIds: allParticipants,
      countryId: '37'
    }
    return transformedDataExternal
  } else {
    const transformedDataInternal = {
      userName: (data.email || '').toLowerCase(),
      firstName: data.firstName || '',
      lastName: data.lastName || '',
      email: (data.email || '').toLowerCase(),
      identificationTypeId: data.docType?.id || '',
      identification: data.docNumber || '',
      idKeycloak: id_keycloak || '',
      verifiedEmail: true,
      phoneNumber: '',
      userGroup: 'N/A',
      userType: 'INTERNAL',
      jiraNumber: data.radicado,
      profileIds: profiles,
      participantIds: [1],
      countryId: '37'
    }
    return transformedDataInternal
  }
}

```

## src/features/user-management/utils/transformOptionsAutoComplete.ts

```typescript
import {
  AutocompleteOption,
  AutoCompleteOptions
} from '../types/AutoCompleteStructure'

export const transformOptionsAutoComplete = <T>(
  resService: AutoCompleteOptions<T>,
  callbackFn: (item: T) => AutocompleteOption,
  totalElements?: number
) => {
  const options: AutocompleteOption[] = []
  const setData = new Set(resService.data)
  setData.forEach((option) => {
    const optionResult = callbackFn(option)
    options.push(optionResult)
  })
  return { data: options, total: totalElements ?? options.length ?? 0 }
}

```

## src/features/user-management/utils/userAdminService.ts

```typescript
import { GenerateLogs } from 'remoteUtilities/components-mf-utilities'

export async function updateUserStatusService({
  newStatus,
  client_user,
  participantId,
  country,
  id_user_nubo,
  status,
  setIsToastVisible,
  setIsModalOpen,
  setRefresh,
  setLoading
}: any) {
  let formData
  setLoading(true)
  if (newStatus.status === 'SUSPENDIDO') {
    formData = {
      statusId: 502,
      blocked: true,
      failedAttempt: 0
    }
  } else {
    formData = {
      statusId: newStatus.status === 'ACTIVO' ? 500 : 501,
      blocked: false,
      failedAttempt: 0
    }
  }
  try {
    if (client_user) {
      const { getUsersNuboById } = await import('../services/getUser')
      const { sendEmailUser } = await import('../services/sendEmail')
      const { updateUserById } = await import('../services/updateUser')

      const users = await getUsersNuboById(newStatus.id)
      await updateUserById(newStatus.id, formData)
      if (newStatus.status === 'ACTIVO' && users.status.id === 502) {
        await sendEmailUser(users.email.toString(), {
          codeTemplate: 'NOTIFICATION_UNBLOCK'
        })
      }
      setIsToastVisible(true)

      GenerateLogs(client_user, {
        actionType: `Cambio de estado a ${newStatus.status} para el usuario ${users.userName}`,
        actionDestination: 'UserAdminPage',
        participantId: participantId,
        countryId: country.id,
        userNuboId: id_user_nubo,
        statusId: status.id
      })
    } else {
      console.error('Client user is null')
    }
  } catch (error) {
    // Manejo de error opcional
  } finally {
    setLoading(false)
    setIsModalOpen(false)
    setRefresh((current: boolean) => !current)
  }
}

export async function confirmOtpChangeService({
  otpChange,
  setRefresh,
  setIsModalOpenOTP,
  setOtpChange,
  setIsToastVisible
}: any) {
  if (otpChange) {
    try {
      const { deleteOTP } = await import('../services/deleteOTP')
      await deleteOTP(otpChange.username)
      setRefresh((current: boolean) => !current)
      setIsToastVisible(true)
    } catch (error) {
      console.error('Failed to change OTP status:', error)
    } finally {
      setIsModalOpenOTP(false)
      setOtpChange(null)
    }
  }
}

```

## src/features/user-management/utils/userProfileService.ts

```typescript
import { GenerateLogs } from 'remoteUtilities/components-mf-utilities'

import { updateUserById } from '../services/updateUser'

export async function updateUserProfile({
  client_user,
  selectedRow,
  dataProfile,
  participantId,
  country,
  id_user_nubo,
  status,
  setLoading,
  setIsProfileDetailsVisible,
  setIsPanelOpen,
  setRefresh,
  setDataProfile
}: any) {
  if (client_user && selectedRow?.id !== undefined) {
    try {
      setLoading(true)
      const profileData = {
        profileId: dataProfile.idProfile
      }
      await updateUserById(selectedRow.id, profileData)
      GenerateLogs(client_user, {
        actionType: `Cambio de perfil a ${dataProfile.selectedProfile} al usuario ${selectedRow.userName} `,
        actionDestination: 'User Admin Page',
        participantId: participantId,
        countryId: country.id,
        userNuboId: id_user_nubo,
        statusId: status.id
      })
    } catch (error) {
      console.error('Error updating user:', error)
    } finally {
      setIsProfileDetailsVisible(false)
      setIsPanelOpen(false)
      setRefresh(true)
      setLoading(false)
      setDataProfile([])
    }
  } else {
    console.warn('Client user or selected row ID is missing')
  }
}

```

## src/features/user-management/utils/validationsRegisterPage.ts

```typescript
const domainEmailEnviroment = import.meta.env.VITE_DOMAIN_EMAIL_NUAM

export interface ValidateCorporateEmail {
  (value: string, userType?: string): string | true
}

export const validateEmailDomain = (email: string): boolean => {
  const domain = email.split('@')[1]
  return domain?.toLowerCase() === domainEmailEnviroment
}

export const validateEmailsMatch = (getValues: () => any) => (value: string) =>
  value === getValues().email || 'Los correos no coinciden.'

export const validateCorporateEmail: ValidateCorporateEmail = (
  value: string,
  userType?: string
): string | true => {
  if (!value) return 'Campo Obligatorio'
  if (value.length > 256) return 'El correo debe tener máximo 256 caracteres.'

  const atIndex: number = value.indexOf('@')
  if (atIndex === -1) return "Debe contener '@'."

  const [local, domain]: [string, string] = value.split('@') as [string, string]
  if (!local || !domain) return 'Formato de correo no válido.'

  if (local.length < 1 || local.length > 64)
    return 'La parte local debe tener entre 1 y 64 caracteres.'
  if (domain.length < 4 || domain.length > 255)
    return 'La parte de dominio debe tener entre 4 y 255 caracteres.'

  if (!/^[a-zA-Z0-9]/.test(local))
    return 'La parte local debe iniciar con letra o dígito.'
  if (!/^[a-zA-Z0-9]/.test(domain))
    return 'La parte de dominio debe iniciar con letra o dígito.'

  if (!/^[a-zA-Z0-9._-]+$/.test(local))
    return "La parte local solo puede contener letras, números, '.', '_' y '-'."
  if (!/^[a-zA-Z0-9._-]+$/.test(domain))
    return "La parte de dominio solo puede contener letras, números, '.', '_' y '-'."

  if (/\.\./.test(local) || /\.\./.test(domain))
    return "No se permiten dos símbolos '.' consecutivos."

  if (!/\.[a-zA-Z]{2,4}$/.test(domain))
    return 'El dominio debe terminar con un punto seguido de 2 a 4 letras.'

  if (userType === 'INTERNAL' && !validateEmailDomain(value)) {
    return 'El correo debe ser del dominio ' + domainEmailEnviroment
  }

  return true
}

export const radicadoRules = () => ({
  required: 'Campo obligatorio',
  pattern: {
    value: /^[a-zA-Z]{4}-\d{4,10}$/,
    message: 'La estructura 4 letras + guion + 4 números.'
  },
  minLength: { value: 9, message: 'Debe tener al menos 9 caracteres.' },
  maxLength: { value: 15, message: 'Debe tener máximo 15 caracteres.' },
  validate: (value: string) => {
    if (!value) return true
    return true
  }
})

```

## src/i18n.ts

```typescript
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import enTranslations from './locale/en/translation.json'
import esTranslations from './locale/es/translation.json'

const resources = {
  es: esTranslations,
  en: enTranslations
}

const language = localStorage.getItem('language') || 'es'

i18n.use(initReactI18next).init({
  resources,
  lng: language,
  interpolation: {
    escapeValue: false
  }
})

export default i18n

```

## src/main.tsx

```tsx
import { StrictMode } from 'react'
import { StoreProvider } from 'store/mf-store'

import App from './App.tsx'

const Main = () => (
  <StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </StrictMode>
)

export default Main

```

## src/shared/components/CustomToast.tsx

```tsx
import React from 'react'

import { Toast } from 'remoteUtilities/components-mf-utilities'

import { ToastConfig } from '../hooks/useToast'

interface CustomToastProps {
  config: ToastConfig | null
  onClose: () => void
}

export const CustomToast: React.FC<CustomToastProps> = ({
  config,
  onClose
}) => {
  if (!config) return null

  return (
    <Toast
      text={config.message}
      onClose={onClose}
      variant={config.variant || 'success'}
      width={config.width || '410px'}
      duration={config.duration || 2200}
    />
  )
}

```

## src/shared/components/RenderOptionAutoComplete.tsx

```tsx
import { DefaultComponents } from '@nuam/common-fe-lib-components'
import React from 'react'

const RenderOptionAutoComplete = (
  props: React.HTMLAttributes<HTMLLIElement>,
  option: { id: number; label: string }
) => (
  <DefaultComponents.Box
    component="li"
    {...props}
    key={option.id}
    sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
  >
    {option.label}
  </DefaultComponents.Box>
)

export default RenderOptionAutoComplete

```

## src/shared/components/StepFlow.tsx

```tsx
import { Stepper } from '@nuam/common-fe-lib-components'
import { useEffect, useMemo, useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

interface StepFlowProps {
  steps: string[]
  getStepComponent: (stepNumber: number) => React.FC
  isStep1Complete: boolean
  isStep2Complete: boolean
  getBasePath: string
  firstStep?: number
  secondStep?: number
  thirdStep?: number
}

export const StepFlow: React.FC<StepFlowProps> = ({
  steps,
  getStepComponent,
  isStep1Complete,
  isStep2Complete,
  getBasePath,
  firstStep = 1,
  secondStep = 2,
  thirdStep = 3
}) => {
  const { step } = useParams<{ step: string }>()
  const navigate = useNavigate()
  const stepNumber = useMemo(
    () => parseInt(step ?? String(firstStep), 10),
    [step]
  )

  const redirectToFirstStep = useCallback(() => {
    navigate(getBasePath, { replace: true })
  }, [navigate, getBasePath])

  useEffect(() => {
    if (
      (stepNumber === secondStep && !isStep1Complete) ||
      (stepNumber === thirdStep && (!isStep1Complete || !isStep2Complete))
    ) {
      redirectToFirstStep()
    }
  }, [stepNumber, isStep1Complete, isStep2Complete, redirectToFirstStep])

  const CurrentStepComponent = useMemo(
    () => getStepComponent(stepNumber),
    [stepNumber, getStepComponent]
  )

  return (
    <div className="mx-auto flex w-3/4 min-w-460px flex-col items-center justify-center md:w-2/3">
      <Stepper
        className="m-auto mb-[35px] max-w-[584px]"
        steps={steps}
        activeStep={stepNumber - 1}
      />
      <CurrentStepComponent />
    </div>
  )
}

```

## src/shared/config/method.ts

```typescript
import { AxiosResponse } from 'axios'

import { MethodsProps } from '../types/methods'
import { getCommonHeaders } from '../utils/headerServices'

export const post = async (props: MethodsProps): Promise<AxiosResponse> => {
  const headers = await getCommonHeaders()
  const { axiosInstance, data = null, urlWithParams } = props || {}

  return await axiosInstance.post(urlWithParams, data, {
    headers
  })
}

export const get = async (props: MethodsProps): Promise<AxiosResponse> => {
  const headers = await getCommonHeaders()
  const { axiosInstance, urlWithParams, params } = props || {}

  return await axiosInstance.get(urlWithParams, {
    headers,
    params
  })
}

export const patch = async (props: MethodsProps): Promise<AxiosResponse> => {
  const headers = await getCommonHeaders()
  const { axiosInstance, urlWithParams, data } = props || {}

  return await axiosInstance.patch(urlWithParams, data, {
    headers
  })
}

export const put = async (props: MethodsProps): Promise<AxiosResponse> => {
  const headers = await getCommonHeaders()
  const { axiosInstance, urlWithParams, data } = props || {}

  return await axiosInstance.put(urlWithParams, data, {
    headers
  })
}

export const deleteRequest = async (
  props: MethodsProps
): Promise<AxiosResponse> => {
  const headers = await getCommonHeaders()
  const { axiosInstance, urlWithParams } = props || {}

  return await axiosInstance.delete(urlWithParams, {
    headers
  })
}

```

## src/shared/constants/actionCodes.ts

```typescript
export const INTERNAL_USER_ACTIONS = {
  MANAGE_PROFILES: '049',
  CREATE_USER: '048',
  OTP_USER: '051',
  STATUS_USER: '050',
  DETAIL_USER: '052',
  EDIT_PROFILE_USER: '053'
}

export const EXTERNAL_USER_ACTIONS = {
  MANAGE_PROFILES: '030',
  CREATE_USER: '172',
  OTP_USER: '033',
  STATUS_USER: '032',
  DETAIL_USER: '034',
  EDIT_PROFILE_USER: '035'
}

export const INTERNAL_EXTERNAL_USER_ACTIONS = {
  MANAGE_PROFILES: '178',
  CREATE_USER: '177',
  OTP_USER: '183',
  STATUS_USER: '179',
  DETAIL_USER: '184',
  EDIT_PROFILE_USER: '035',
  BUSINESS_GROUPS: '270'
}

export const BUSINESS_GROUPS_ACTIONS = {
  CREATE_ENTERPRISE_GROUPS: '036',
  EDIT_DETAIL_ENTERPRISE_GROUPS: '037',
  DELETE_ENTERPRISE_GROUPS: '038',
  DETAIL_ENTERPRISE_GROUPS: '039',
  EDIT_GRID_ENTERPRISE_GROUPS: '040',
  ADD_ENTERPRISE_GROUPS: '041',
  DELETE_PARTICIPANT: '042'
}

export const EXTERNAL_PROFILE_ACTIONS = {
  DELETE: '047',
  EDIT: '046',
  DETAIL: '045',
  CREATE: '044',
  DOWNLOAD_REPORT: '043'
}

export const INTERNAL_PROFILE_ACTIONS = {
  DELETE: '058',
  EDIT: '057',
  DETAIL: '056',
  CREATE: '055',
  DOWNLOAD_REPORT: '054'
}

```

## src/shared/constants/endpoints.ts

```typescript
export const API_ROUTES = {
  STATUS_CATEGORY: '/status/category',
  ENTERPRISE_GROUP_SEARCH: '/enterprise-group/search',
  ENTERPRISE_GROUP: '/enterprise-group',
  ENTERPRISE_GROUP_BY_ID: (id: string) => `/enterprise-group/${id}`,
  PARTICIPANTS: '/participant/search',
  VALIDATE_PARTICIPANT: (participantId: string) =>
    `/participant/${participantId}/has-user/validate`,
  PROFILES: '/profile',
  PROFILES_DISTINCT: '/profile/distinct/profile-name',
  LAST_MODIFY_USER: '/profile/all/last-modify-user',
  LAST_MODIFY_USER_DISTINCT: '/profile/distinct/last-modify-user',
  TREE_MENUS: '/menu/category/tree'
}

```

## src/shared/constants/enviroments.ts

```typescript
export const DEVELOPMENT_MODE = 'development'
export const NODE_ENV = import.meta.env.VITE_NODE_ENV || ''

```

## src/shared/constants/index.ts

```typescript
export const STEP_FLOW = {
  DEFAULT_STEP: 1 as const,
  SECOND_STEP: 2 as const,
  THIRD_STEP: 3 as const
}

export const TRANSLATION = {
  NAMESPACE: 'gestion'
}
export const PARTICIPANT_NUAM_ID = 1 as const

export const STEP_KEYS = ['stepper1', 'stepper2', 'stepper3'] as const

export const USER_TYPES = {
  INTERNAL: 'INTERNAL',
  EXTERNAL: 'EXTERNAL'
}

```

## src/shared/context/useProfileContext.tsx

```tsx
import React, { createContext, useContext, useState, ReactNode } from 'react'

interface FormData {
  name?: string
  entity?: string | number
  entityCountryId?: string
  permission_ids?: Array<{ id: string; name: string }>
  userCreated?: boolean
  [key: string]: any
}

interface ProfileContextType {
  userCreated: boolean
  setUserCreated: (value: boolean) => void
  formData: FormData
  updateFormData: (data: Partial<FormData>) => void
  resetFormData: () => void
  resetFormDataExceptUserCreated: () => void
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined)

export const ProfileProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [userCreated, setUserCreated] = useState(false)
  const [formData, setFormData] = useState<FormData>({})

  const updateFormData = (data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }))
  }

  const resetFormData = () => {
    setFormData({})
  }

  const resetFormDataExceptUserCreated = () => {
    setFormData((prev) => ({ userCreated: prev.userCreated }))
  }

  return (
    <ProfileContext.Provider
      value={{
        userCreated,
        setUserCreated,
        formData,
        updateFormData,
        resetFormData,
        resetFormDataExceptUserCreated
      }}
    >
      {children}
    </ProfileContext.Provider>
  )
}

export const useProfileContext = () => {
  const context = useContext(ProfileContext)
  if (context === undefined) {
    throw new Error('useProfileContext must be used within a ProfileProvider')
  }
  return context
}

```

## src/shared/hooks/useGenerateLogs.ts

```typescript
import { useSelector } from 'react-redux'
import { RootState } from 'store/mf-store'

import { GenerateLogs } from 'remoteUtilities/components-mf-utilities'

const useGenerateLogs = () => {
  const client_user = localStorage.getItem('username')
  const {
    id: id_user_nubo,
    participantId,
    country,
    status
  } = useSelector((state: RootState) => state.auth.infoUserNubo)

  const generateLogs = ({
    actionDestination,
    actionType,
    statusID
  }: {
    actionType: string
    actionDestination: string
    statusID?: string
  }) => {
    GenerateLogs(client_user!, {
      actionType,
      actionDestination,
      countryId: country.id,
      participantId: participantId,
      statusId: statusID ?? status.id,
      userNuboId: id_user_nubo
    })
  }
  return { generateLogs }
}

export default useGenerateLogs

```

## src/shared/hooks/useToast.ts

```typescript
import { useState, useCallback } from 'react'

export type ToastVariant = 'success' | 'error' | 'warning' | 'info'

export interface ToastConfig {
  message: string
  variant?: ToastVariant
  duration?: number
  width?: string
}

export const useToast = () => {
  const [toastConfig, setToastConfig] = useState<ToastConfig | null>(null)

  const showToast = useCallback((config: ToastConfig) => {
    setToastConfig({
      variant: 'success',
      duration: 2200,
      width: '410px',
      ...config
    })
  }, [])

  const hideToast = useCallback(() => {
    setToastConfig(null)
  }, [])

  const showSuccessToast = useCallback(
    (message: string) => {
      showToast({ message, variant: 'success' })
    },
    [showToast]
  )

  const showErrorToast = useCallback(
    (message: string) => {
      showToast({ message, variant: 'error', duration: 3000 })
    },
    [showToast]
  )

  const showWarningToast = useCallback(
    (message: string) => {
      showToast({ message, variant: 'warning', duration: 2500 })
    },
    [showToast]
  )

  const showInfoToast = useCallback(
    (message: string) => {
      showToast({ message, variant: 'info' })
    },
    [showToast]
  )

  return {
    toastConfig,
    showToast,
    hideToast,
    showSuccessToast,
    showErrorToast,
    showWarningToast,
    showInfoToast,
    isVisible: !!toastConfig
  }
}

```

## src/shared/hooks/useTreeList.tsx

```tsx
import { Typography, Divider } from '@nuam/common-fe-lib-components'

import { Child, Node } from '../types/declare'

export const useTreeList = () => {
  const getPaddingClass = (level: number): string => {
    const paddingLevels: Record<number, string> = {
      1: 'pl-6',
      2: 'pl-12',
      3: 'pl-16',
      4: 'pl-20'
    }
    return paddingLevels[level] || 'pl-6'
  }

  const filterCheckedById = (data: Child[], checkedIds: number[]): Node[] => {
    return data
      .map((child) => ({
        ...child,
        children: filterCheckedById(child.children || [], checkedIds),
        isAction: !!child.url,
        isChecked: checkedIds.includes(child.id)
      }))
      .filter((child) => child.isChecked || child.children.length > 0)
  }

  const RecursiveList: React.FC<{ nodes: Node[]; level: number }> = ({
    nodes,
    level
  }) => {
    return (
      <div className="relative mt-1 max-h-[40rem] overflow-auto">
        <ul className="text-base font-bold text-[#3d3d3d]">
          {nodes.map((node) => {
            const actionNodes = node.children.filter((child) => child.url)
            const nonActionNodes = node.children.filter((child) => !child.url)

            return (
              <li key={node.id} className={`py-2`}>
                <div
                  className={`flex w-full items-center justify-between pb-2 ${getPaddingClass(
                    level
                  )} `}
                >
                  <Typography variant="body1">{node.name}</Typography>
                  {actionNodes?.length > 0 && (
                    <div className="flex space-x-2">
                      {actionNodes?.map((actionNode) => (
                        <Typography
                          key={actionNode.id}
                          variant="body1"
                          className="ml-4"
                        >
                          {actionNode.name}
                        </Typography>
                      ))}
                    </div>
                  )}
                </div>
                <Divider />
                {nonActionNodes?.length > 0 && (
                  <RecursiveList nodes={nonActionNodes} level={level + 1} />
                )}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  const RecursiveListEdit: React.FC<{ nodes: Node[]; level: number }> = ({
    nodes,
    level
  }) => {
    const filterNodes = (nodes: Node[]): Node[] => {
      return nodes?.filter((node) => {
        if (node.isChecked) return true
        if (node.children) {
          const childChecked = filterNodes(node.children)
          return childChecked.length > 0
        }
        return false
      })
    }

    const filteredNodes = filterNodes(nodes)

    return (
      <div className="relative mt-1 max-h-[40rem] overflow-auto">
        <ul className="text-base font-bold text-[#3d3d3d]">
          {filteredNodes?.map((node) => {
            const levelTwoNodes = node.items?.filter(
              (child) => child.level === 2
            )

            return (
              <li key={node.id} className="py-2">
                <div
                  className={`flex w-full items-center justify-between pb-2`}
                >
                  <Typography variant="subtitle1" className="font-bold">
                    {node.name}
                  </Typography>
                </div>
                <Divider />
                {(levelTwoNodes ?? []).length > 0 && (
                  <ul className="w-full">
                    {(levelTwoNodes ?? []).map((levelTwoNode) => (
                      <div className="w-full" key={levelTwoNode.id}>
                        <li className="py-2 pl-8">
                          <Typography variant="body2">
                            {levelTwoNode.name}
                          </Typography>
                        </li>
                        <Divider />
                      </div>
                    ))}
                  </ul>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  const filterChecked = (data: Child[]): Node[] => {
    return data
      .map((child) => ({
        ...child,
        children: filterChecked(child.children),
        isAction: !!child.url // Identify actions based on the presence of the url property
      }))
      .filter((child) => child.isChecked || child.children.length > 0)
  }

  const buildTree = (nodes: any[]): any[] => {
    const nodeMap = new Map<number, any>()
    const rootNodes: any[] = []

    nodes.forEach((node) => {
      nodeMap.set(node.id, { ...node, children: [] })
    })

    nodes.forEach((node) => {
      if (node.parentId === null) {
        rootNodes.push(nodeMap.get(node.id))
      } else {
        const parentNode = nodeMap.get(node.parentId)
        if (parentNode) {
          parentNode.children.push(nodeMap.get(node.id))
        }
      }
    })

    return rootNodes
  }

  return {
    filterCheckedById,
    RecursiveList,
    filterChecked,
    buildTree,
    RecursiveListEdit
  }
}

```

## src/shared/routes/index.ts

```typescript
type SubRoute = {
  path: `/${string}`
  pathMain?: `/${string}`
  name: string
}
interface StrucutureRoute {
  path: `/${string}`
  pathMain?: `/${string}`
  name: string
  subRoutes: {
    INTERNAL_REGISTER: SubRoute
    EXTERNAL_REGISTER: SubRoute
  }
}
type RouteModule = {
  USER_MANAGEMENT: StrucutureRoute
  USER_MANAGEMENT_INTERNAL: {
    path: `/${string}`
    pathMain?: `/${string}`
    name: string
    subRoutes: {}
  }
  USER_MANAGEMENT_EXTERNAL: {
    path: `/${string}`
    pathMain?: `/${string}`
    name: string
    subRoutes: {}
  }
  PROFILE_MANAGEMENT_INTERNAL: {
    path: `/${string}`
    pathMain?: `/${string}`
    name: string
  }
  PROFILE_MANAGEMENT_EXTERNAL_ADMIN: {
    path: `/${string}`
    pathMain?: `/${string}`
    name: string
  }
  PROFILE_MANAGEMENT_EXTERNAL: {
    path: `/${string}`
    pathMain?: `/${string}`
    name: string
  }
  REGISTER_PROFILE_INTERNAL: {
    path: `/${string}`
    pathMain?: `/${string}`
    name: string
  }
  REGISTER_PROFILE_EXTERNAL_ADMIN: {
    path: `/${string}`
    pathMain?: `/${string}`
    name: string
  }
  REGISTER_PROFILE_EXTERNAL: {
    path: `/${string}`
    pathMain?: `/${string}`
    name: string
  }
  HOME: string
  BUSINESS_GROUPS: {
    path: `/${string}`
    pathMain?: `/${string}`
    name: string
    subRoutes: {}
  }
}

export const ROUTES: RouteModule = {
  USER_MANAGEMENT: {
    path: '/user-management',
    pathMain: '/',
    name: 'Gestión de Usuarios',
    subRoutes: {
      INTERNAL_REGISTER: {
        pathMain: '/user-internal-register/:step',
        path: '/user-management/user-internal-register/:step',
        name: 'Registro de Usuario Interno'
      },
      EXTERNAL_REGISTER: {
        pathMain: '/user-external-register/:step',
        path: '/user-management/user-external-register/:step',
        name: 'Registro de Usuario Externo'
      }
    }
  },
  USER_MANAGEMENT_EXTERNAL: {
    path: '/user-management/user-management-external',
    pathMain: '/user-management-external',
    name: 'Gestión de Usuarios Externos',
    subRoutes: {}
  },
  USER_MANAGEMENT_INTERNAL: {
    path: '/user-management/user-management-internal',
    pathMain: '/user-management-internal',
    name: 'Gestión de Usuarios Internos',
    subRoutes: {}
  },
  PROFILE_MANAGEMENT_INTERNAL: {
    path: '/user-management/profile-management/internal',
    pathMain: '/profile-management/internal',
    name: 'Administración de perfiles'
  },
  PROFILE_MANAGEMENT_EXTERNAL_ADMIN: {
    path: '/user-management/profile-management/external-admin',
    pathMain: '/profile-management/external-admin',
    name: 'Administración de perfiles'
  },
  PROFILE_MANAGEMENT_EXTERNAL: {
    path: '/user-management/profile-management/external',
    pathMain: '/profile-management/external',
    name: 'Administración de perfiles'
  },
  REGISTER_PROFILE_INTERNAL: {
    path: '/user-management/profile-management/internal/create/:step',
    pathMain: '/profile-management/internal/create/:step',
    name: 'Creación de perfil'
  },
  REGISTER_PROFILE_EXTERNAL_ADMIN: {
    path: '/user-management/profile-management/external-admin/create/:step',
    pathMain: '/profile-management/external-admin/create/:step',
    name: 'Creación de perfil'
  },
  REGISTER_PROFILE_EXTERNAL: {
    path: '/user-management/profile-management/external/create/:step',
    pathMain: '/profile-management/external/create/:step',
    name: 'Creación de perfil'
  },
  HOME: '/home',
  BUSINESS_GROUPS: {
    path: '/user-management/business-groups',
    pathMain: '/business-groups',
    name: 'Mantenedor de grupos empresariales',
    subRoutes: {}
  }
}

```

## src/shared/services/index.tsx

```tsx
import axios from 'axios'
import {
  httpMenu,
  httpParticipants,
  httpProfileQuery
} from 'store/mf-axiosConfig'

import { ProfileMode } from '@/features/profile-management/utils/profileRoutes'

import { get } from '../config/method'
import { API_ROUTES } from '../constants/endpoints'
import { getCommonHeaders } from '../utils/headerServices'
import isDevMode from '../utils/isDevMode'

type ParamsGroup = {
  text?: string
  page: number
  size: number
}

export const getProfiles = async (participantId?: number) => {
  try {
    const headers = await getCommonHeaders()
    const url = `${API_ROUTES.PROFILES}?page=0&size=100`
    const params: any = {}
    if (participantId) params.participantId = participantId

    const response = await httpProfileQuery.get(url, {
      headers,
      params: params
    })
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error || 'Failed to get profiles')
    }
    throw new Error('Failed to get profiles')
  }
}

export const lastModifyUserAutocomplete = async (
  params: ParamsGroup & {
    profileId?: string
    participantId?: number
    participantUserNubo?: boolean
  }
) => {
  const searchParams = new URLSearchParams()
  if (params.text) searchParams.append('profileName', params.text)
  if (params.profileId) searchParams.append('profileId', params.profileId)
  if (params.participantId) {
    searchParams.append('participantId', params.participantId.toString())
  } else {
    searchParams.append(
      'participantNubo',
      params?.participantUserNubo ? 'true' : 'false'
    )
  }
  searchParams.append('page', params.page.toString())
  searchParams.append('size', params.size.toString())

  const urlWithParams = `${API_ROUTES.LAST_MODIFY_USER_DISTINCT}?${searchParams.toString()}`
  try {
    const { data } = await get({
      axiosInstance: httpProfileQuery,
      urlWithParams
    })
    return data
  } catch (error) {
    if (isDevMode()) {
      console.error('Error getting profiles:', error)
    }
    throw error
  }
}
export const getProfilesAutocomplete = async (
  params: ParamsGroup & {
    profileId?: string
    participantId?: number
    participantUserNubo?: boolean
    mode?: ProfileMode
  }
) => {
  const searchParams = new URLSearchParams()
  if (params.text) searchParams.append('profileName', params.text)
  if (params.profileId) searchParams.append('profileId', params.profileId)
  if (params.participantId) {
    searchParams.append('participantId', params.participantId.toString())
  } else {
    searchParams.append(
      'participantNubo',
      params?.participantUserNubo ? 'true' : 'false'
    )
  }
  searchParams.append('page', params.page.toString())
  searchParams.append('size', params.size.toString())

  const urlWithParams = `${params.mode === 'internal-external' ? API_ROUTES.PROFILES_DISTINCT : API_ROUTES.PROFILES}?${searchParams.toString()}`
  try {
    const { data } = await get({
      axiosInstance: httpProfileQuery,
      urlWithParams
    })
    return data
  } catch (error) {
    if (isDevMode()) {
      console.error('Error getting profiles:', error)
    }
    throw error
  }
}

export const getParticipant = async () => {
  try {
    const headers = await getCommonHeaders()

    const response = await httpParticipants.get(
      `/participant?page=0&size=50&statusId=510`,
      {
        headers
      }
    )
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error || 'Failed to get profiles')
    }
    throw new Error('Failed to get profiles')
  }
}

export const getPermissions = async (enabled: boolean = false) => {
  try {
    const headers = await getCommonHeaders()

    const response = await httpMenu.get(
      `/permission${enabled ? '?enabled=true' : ''}`,
      {
        headers
      }
    )
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error || 'Failed to get permissions')
    }
    throw new Error('Failed to get permissions')
  }
}

```

## src/shared/services/statusService.tsx

```tsx
import { httpFilterParameters } from 'store/mf-axiosConfig'

import { get } from '../config/method'
import { API_ROUTES } from '../constants/endpoints'

export const getStatus = async (category: string) => {
  const urlWithParams = `${API_ROUTES.STATUS_CATEGORY}/${category}`
  try {
    const { data } = await get({
      axiosInstance: httpFilterParameters,
      urlWithParams
    })
    return data.map((item: any) => ({
      id: item.id,
      name: item.description
    }))
  } catch (error) {
    console.error('Error getting special trade:', error)
    throw error
  }
}

```

## src/shared/store/RegisterProfile/registerProfile.ts

```typescript
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface FormData {
  name: string
  entity: string
  functionalities: []
  userCreated: boolean
}

const initialState: FormData = {
  name: '',
  entity: '',
  functionalities: [],
  userCreated: false
}

const formSliceMantainer = createSlice({
  name: 'formMantainer',
  initialState,
  reducers: {
    updateFormDataMantainer: (
      state,
      action: PayloadAction<Partial<FormData>>
    ) => {
      Object.assign(state, action.payload)
    },
    resetFormDataMantainer: () => initialState,
    resetFormDataMantainerExceptUserCreated: (state) => {
      return {
        ...initialState,
        userCreated: state.userCreated
      }
    }
  }
})

export const {
  updateFormDataMantainer,
  resetFormDataMantainer,
  resetFormDataMantainerExceptUserCreated
} = formSliceMantainer.actions
export default formSliceMantainer.reducer

```

## src/shared/store/Store.ts

```typescript
import { configureStore } from '@reduxjs/toolkit'

import formSliceMantainer from './RegisterProfile/registerProfile'

export const store = configureStore({
  reducer: {
    registerProfileStore: formSliceMantainer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

```

## src/shared/types/declare.d.ts

```typescript
export interface CounterState {
  value: number
}
export interface StepperProps {
  active: number
}
export interface InputProps {
  label: string
  id: string
  type: string
}

export interface ButtonProps {
  name: string
  onClick: () => void
  type?: 'button' | 'submit' | 'reset'
  size?: 'small' | 'medium' | 'large'
  variant?: 'primary' | 'secondary' | 'outline'
  disabled?: boolean
  className?: string
}

interface Option {
  label: string
  value: string | number | boolean
}

export interface CalendarRangeProps {
  onDateChange?: (date: { from?: Date; to?: Date }) => void
}

export interface SelectProps {
  label: string
  options: Option[]
  required: boolean
  searchable?: boolean
}

export interface SelectPropsFilters {
  label: string
  options: Option[] | { options: Option[] }
  required: boolean
  onChange: (label: string, value: string | number | boolean) => void
  value: string | number | boolean
  error?: string
  className?: string
  placeholder?: string
  width?: string
}
export interface HeaderProps {
  user: string
  onClick: () => void
}

export interface InfoLabelsProps {
  info: { label: string; value: string }[]
  title?: string
}

export interface TableProps {
  data: { perfil: string; alcance: string }[]
}

export interface ModalAlertProps {
  title: string
  orientation?: 'horizontal' | 'vertical'
  message: string // El mensaje puede contener HTML
  variant?: 'success' | 'error' | 'warning'
  textSuccess?: string
  textCancel?: string
  handleCancel?: () => void
  onClick: () => void
}

export interface ModalContentProps {
  className?: string
  children: ReactNode
  handleClose: (arg: boolean) => void
  handleAccept: () => void
  title?: string
  description?: string
  btnAceptText?: string
  btnCancelText?: string
  btnDisabled?: boolean
  iconClose?: boolean
  parentClassName?: string
  ItShouldHaveButtons?: boolean
  showBtnAccept?: boolean
  showBtnClose?: boolean
}

export interface ModalProps {
  children?: React.ReactNode
}

export interface EditIconProps {
  color: string
  width: string
  height: string
  showTooltip?: boolean
}

interface Country {
  id: number
  name: string
  currency: string
  timeZone: string
}

export interface CountrySelectProps {
  label?: string
  required: boolean
  onChange: (value: Country) => void
  value: Country | null
  error?: string
  className?: string
  placeholder?: string
  width?: string
}

interface Column {
  name: string
  width: number
  render?: (row: any) => JSX.Element
}

interface Action {
  label: string
  type: string
  url?: string
}

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  rowsPerPage: number
  onRowsPerPageChange: (rows: number) => void
}

export interface NewTableProps {
  columns: Column[]
  data: any[]
  headerActions?: Action[]
  onAction?: (action: Action) => void
  rowsPerPageOptions?: number[]
  renderPagination?: (props: PaginationProps) => JSX.Element
}
//

export interface ContentWrapperProps {
  children: React.ReactNode
  title: string
}

interface ITreeNode {
  id: string
  name: string
  isChecked: boolean
  children?: ITreeNode[]
}

export interface TreeCheckboxProps {
  data: ITreeNode[]
  showSearch?: boolean
  filterKey?: string
  placeHolderSearch?: string
}
export interface SidePanelProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children?: React.ReactNode
}

export interface ToastProps {
  text: string
  duration?: number
  onClose: () => void
}

export interface TooltipProps {
  message: string
  children: React.ReactNode
}

export interface ModalLoadProps {
  reset: () => void
  progress: number
  message: string
  fileName: string
}

export interface ToggleProps {
  checked: boolean
  onChange: () => void
  className?: string
}

export interface Child {
  id: number
  url?: string
  name: string
  isChecked?: boolean
  children: Child[]
  [key: string]: any
}

export interface Node {
  url?: unknown
  id: number
  items?: Child[]
  name: string
  children: Node[]
  level?: number
  isChecked?: boolean
  isAction?: boolean // New property to identify actions
}

export interface CustomTabsProps {
  tabs: { label: string }[]
  tabsContent?: React.ReactNode[]
}

export interface FilterBarProps {
  config: any
}

export interface ISimpleTableColumn {
  headerName: string
  align?: 'left' | 'center' | 'right'
  field?: string
  renderCell?: (row: Record<string, any>) => React.ReactNode
}

interface ISimpleTable {
  columns: ISimpleTableColumn[]
  rows: Record<string, any>[]
}

```

## src/shared/types/methods.d.ts

```typescript
import type { AxiosInstance } from 'axios'

export type MethodsProps = {
  axiosInstance: AxiosInstance
  data?: any // eslint-disable-line @typescript-eslint/no-explicit-any
  urlWithParams: string
  params?: any
}

```

## src/shared/types/routes.d.ts

```typescript

```

## src/shared/types/states.d.ts

```typescript
import { ModalAlertProps, ToastProps } from './declare'

export interface ModalAlertState extends ModalAlertProps {
  open?: boolean
}

export interface ToastState extends ToastProps {
  open?: boolean
}

```

## src/shared/utils/createStepComponentResolver.ts

```typescript
import type { FC } from 'react'

export const createStepComponentResolver = (
  map: Record<number, FC>,
  fallback: FC
) => {
  return (step: number): FC => map[step] || fallback
}

```

## src/shared/utils/decryptPassword.ts

```typescript
import CryptoJS from 'crypto-js'

export const decryptPassword = (
  encryptedPassword: string,
  secretKeyString = 'FC691174F23188E7756E8AA787D7E4465A8E5D14C685AA7C9A19BC98124DDBFA'
) => {
  const generateSecretKey = (keyString: any) => {
    const keyBytes = CryptoJS.SHA256(keyString)
    return CryptoJS.enc.Hex.parse(keyBytes.toString().substring(0, 32)) // Truncate to 16 bytes
  }

  const decryptData = () => {
    const key = generateSecretKey(secretKeyString)

    const ivAndEncryptedText = CryptoJS.enc.Base64.parse(encryptedPassword)

    const iv = CryptoJS.lib.WordArray.create(
      ivAndEncryptedText.words.slice(0, 4)
    ) // 16 bytes / 4 words
    const encryptedData = CryptoJS.lib.WordArray.create(
      ivAndEncryptedText.words.slice(4)
    )

    try {
      const decrypted = CryptoJS.AES.decrypt(
        { ciphertext: encryptedData },
        key,
        { iv: iv }
      )

      const originalData = decrypted.toString(CryptoJS.enc.Utf8)
      return originalData || 'Error al descifrar'
    } catch (error) {
      console.error('Error de descifrado:', error)
      return 'Error al descifrar: ' + error.message
    }
  }

  return decryptData()
}

```

## src/shared/utils/generateExcelReport.ts

```typescript
import * as XLSX from 'xlsx'

import { formattedDate } from 'remoteUtilities/formattedDate'

/**
 * Genera un reporte en Excel a partir de los datos y columnas proporcionados.
 *
 * @param data - Un array de objetos de datos que se incluirán en el reporte.
 * @param columns - Un array de definiciones de columnas, cada una conteniendo un `header` y `dataKey`.
 *
 * Ejemplo de uso:
 *
 * const data = [
 *     { id: 1, nombre: 'Juan', edad: 30 },
 *     { id: 2, nombre: 'Ana', edad: 25 }
 * ];
 *
 * const columns = [
 *     { header: 'ID', dataKey: 'id', width: 10 },
 *     { header: 'Nombre', dataKey: 'nombre', width: 20 },
 *     { header: 'Edad', dataKey: 'edad', width: 10 }
 * ];
 *
 * generateExcelReport(data, columns);
 */
export const generateExcelReport = (data: any[], columns: any[]) => {
  const limitedData = data.slice(0, 3000)

  const tableColumns = columns.map((col) => ({
    header: col.header,
    dataKey: col.dataKey
  }))

  const tableRows = limitedData.map((row) => {
    const rowData: { [key: string]: any } = {}
    tableColumns.forEach((col) => {
      rowData[col.dataKey] = row[col.dataKey]
    })
    return rowData
  })

  const worksheetData = [
    tableColumns.map((col) => col.header),
    ...tableRows.map((row) => tableColumns.map((col) => row[col.dataKey]))
  ]
  const worksheet = XLSX.utils.aoa_to_sheet(worksheetData)

  const headerStyle = {
    font: { bold: true },
    fill: { fgColor: { rgb: 'FFFF00' } },
    alignment: { horizontal: 'center' }
  }

  tableColumns.forEach((_, index) => {
    const cellAddress = XLSX.utils.encode_cell({ c: index, r: 0 })
    if (!worksheet[cellAddress]) worksheet[cellAddress] = {}
    worksheet[cellAddress].s = headerStyle
  })

  const columnWidths = columns.map((col) => ({
    wch: col.width || 20
  }))
  worksheet['!cols'] = columnWidths

  worksheet['!autofilter'] = {
    ref: `A1:${String.fromCharCode(65 + tableColumns.length - 1)}${tableRows.length + 1}`
  }

  const workbook = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Datos de Perfiles')

  const formatDate = formattedDate()

  XLSX.writeFile(workbook, `Report_perfiles_${formatDate}.xlsx`)
}

```

## src/shared/utils/getInfoUser.ts

```typescript
import { RootState } from 'store/mf-store'

type UserInfo = {
  userType: string
  id: number
  name: string
  participantId: number
}

export const getUserInfo = (state: RootState): UserInfo => {
  const userInfo = state.auth.infoUserNubo?.[0] || state.auth.infoUserNubo
  return {
    userType: userInfo?.userType || '',
    id: userInfo?.id,
    name: userInfo?.name || '',
    participantId: userInfo?.participantId || 0
  }
}

export const getParticipantCountry = (
  participantId: number,
  participants: any[] | undefined
): number | undefined => {
  if (!Array.isArray(participants)) return undefined
  const found = participants.find((p) => p?.id === participantId)
  return found?.country?.id
}

```

## src/shared/utils/getRegisterBasePath.ts

```typescript
import { STEP_FLOW } from '@/shared/constants'

/**
 * Retorna un path base reemplazando :step por un valor real
 * @param routePath Ruta con `:step`
 * @param step Paso numérico a reemplazar (por defecto, 1)
 * @returns Ruta con el paso reemplazado
 */
export const getRegisterBasePath = (
  routePath: string,
  step: number = STEP_FLOW.DEFAULT_STEP
): string => {
  return routePath.replace(':step', `${step}`)
}

```

## src/shared/utils/headerServices.ts

```typescript
import axios from 'axios'

export const formatClientDatetime = (): string => {
  const date = new Date()
  const offset = date.getTimezoneOffset() * 60000
  const localDate = new Date(date.getTime() - offset)
  return localDate.toISOString().split('.')[0]
}

export const getCommonHeaders = async () => {
  const token = localStorage.getItem('access_token')
  const client_datetime = formatClientDatetime()

  return {
    Authorization: `Bearer ${token}`,
    client_user: localStorage.getItem('username'),
    client_datetime: client_datetime
  }
}

```

## src/shared/utils/isDevMode.ts

```typescript
import { DEVELOPMENT_MODE, NODE_ENV } from '../constants/enviroments'

const isDevMode = (): boolean => {
  return DEVELOPMENT_MODE === NODE_ENV
}

export default isDevMode

```

## src/shared/utils/localStorageUtil.ts

```typescript
export const localStorageUtil = () => {
  const saveToLocalStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value))
  }

  const loadFromLocalStorage = (key: string) => {
    const storedValue = localStorage.getItem(key)
    return storedValue ? JSON.parse(storedValue) : null
  }
  return {
    loadFromLocalStorage,
    saveToLocalStorage
  }
}

```

## src/vite-env.d.ts

```typescript
/// <reference types="vite/client" />

```

## tailwind.config.js

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  corePlugins: {
    preflight: false
  },
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        btn: '4px 20px 4px 20px',
        alert: '4px 4px 4px 20px'
      },
      fontFamily: {
        Roboto: ['"Roboto"', 'serif']
      },
      fontSize: {
        '13px': '13px'
      },
      letterSpacing: {
        '0.14px': '0.14994px'
      },
      maxHeight: {
        '94vh': '94vh',
        '80vh': '80vh',
        '70vh': '70vh',
        '60vh': '60vh',
        '55vh': '55vh',
        '40vh': '40vh'
      },
      maxWidth: {
        '50%': '50%'
      },
      minWidth: {
        '460px': '460px'
      }
    }
  },
  daisyui: { themes: false, base: false },
  plugins: []
}

```

## tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "paths": {
      "@/*": ["./src/*"]
    },
    /* Bundler mode */
    "moduleResolution": "Bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["src"]
}

```

## vite.config.ts

```typescript
import federation from '@originjs/vite-plugin-federation'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import viteCompression from 'vite-plugin-compression'

import packageJson from './package.json'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      react(),
      federation({
        name: 'remote-user-management',
        filename: 'remoteEntry.js',
        remotes: {
          remoteUtilities: env.VITE_REMOTE_UTILITIES,
          store: env.VITE_REMOTE_PARENT
        },
        exposes: {
          './mf-user-management': './src/main.tsx',
          './mf-maintainer-store':
            './src/shared/store/RegisterProfile/registerProfile.ts'
        },
        shared: packageJson.dependencies
      }),
      // ====================================
      // PRE-COMPRESIÓN GZIP
      // ====================================
      viteCompression({
        verbose: true, // Log de archivos comprimidos
        disable: false,
        threshold: 10240, // Solo comprimir archivos > 10KB
        algorithm: 'gzip',
        ext: '.gz',
        deleteOriginFile: false // Mantener archivo original
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    build: {
      modulePreload: false,
      target: 'esnext',
      minify: false,
      cssCodeSplit: false
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/setupTests.ts',
      css: true
    }
  }
})

```
