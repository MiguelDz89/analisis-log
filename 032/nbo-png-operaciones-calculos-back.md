# nbo-png-operaciones-calculos-back

Código fuente de producción y configuraciones. Captura local: 28/10/2026.

Incluye 54 archivos Java y 16 archivos de configuración, recursos y compilación/despliegue.

Cada sección identifica la ruta original y contiene el archivo completo, salvo valores de credenciales ocultados. Los Java conservan sus implementaciones, imports, anotaciones y comentarios. Se excluyen src/test, resultados de compilación, binarios y herramientas/perfiles de pruebas de rendimiento.

Incluye src/main, descriptor Maven, wrapper y archivos auxiliares de configuración disponibles.

Valores de credenciales ocultados en configuraciones: 0. Referencias a variables de entorno conservadas.

## Índice

1. `mvnw`
2. `mvnw.cmd`
3. `pom.xml`
4. `.mvn/wrapper/maven-wrapper.properties`
5. `src/main/resources/application-dev.yml`
6. `src/main/resources/application-local.yml`
7. `src/main/resources/application-prod.yml`
8. `src/main/resources/application-qa.yml`
9. `src/main/resources/application-uat.yml`
10. `src/main/resources/application.yml`
11. `src/main/resources/banner.txt`
12. `src/main/resources/log/JsonEventLayout_error.json`
13. `src/main/resources/log/JsonEventLayout_info.json`
14. `src/main/resources/log/JsonEventLayout_trace.json`
15. `src/main/resources/log/log4j2-prod.properties`
16. `src/main/resources/log/log4j2.properties`
17. `src/main/java/com/nubo/operations/calculation/api/OperationsCalculationApiApplication.java`
18. `src/main/java/com/nubo/operations/calculation/api/application/annotations/ValidBigDecimal.java`
19. `src/main/java/com/nubo/operations/calculation/api/application/config/SwaggerConfig.java`
20. `src/main/java/com/nubo/operations/calculation/api/application/config/ValidBigDecimalConfig.java`
21. `src/main/java/com/nubo/operations/calculation/api/application/config/WebConfig.java`
22. `src/main/java/com/nubo/operations/calculation/api/application/context/GlobalContext.java`
23. `src/main/java/com/nubo/operations/calculation/api/application/database/NamingStrategyConfig.java`
24. `src/main/java/com/nubo/operations/calculation/api/application/database/UpperNamingConfig.java`
25. `src/main/java/com/nubo/operations/calculation/api/application/filters/GlobalFilter.java`
26. `src/main/java/com/nubo/operations/calculation/api/application/interceptors/GlobalInterceptor.java`
27. `src/main/java/com/nubo/operations/calculation/api/application/properties/PropertiesConfig.java`
28. `src/main/java/com/nubo/operations/calculation/api/application/properties/PropertiesContext.java`
29. `src/main/java/com/nubo/operations/calculation/api/application/serializers/BigDecimalSerializer.java`
30. `src/main/java/com/nubo/operations/calculation/api/application/util/ApplicationUtils.java`
31. `src/main/java/com/nubo/operations/calculation/api/exception/ServiceException.java`
32. `src/main/java/com/nubo/operations/calculation/api/exception/error/ErrorCode.java`
33. `src/main/java/com/nubo/operations/calculation/api/exception/error/ErrorResponse.java`
34. `src/main/java/com/nubo/operations/calculation/api/exception/error/ErrorValidation.java`
35. `src/main/java/com/nubo/operations/calculation/api/exception/handler/GlobalExceptionHandler.java`
36. `src/main/java/com/nubo/operations/calculation/api/helpers/MapperPageUtil.java`
37. `src/main/java/com/nubo/operations/calculation/api/helpers/MapperUtil.java`
38. `src/main/java/com/nubo/operations/calculation/api/helpers/RfMapperUtil.java`
39. `src/main/java/com/nubo/operations/calculation/api/helpers/RfSettleAccountsUtil.java`
40. `src/main/java/com/nubo/operations/calculation/api/helpers/SettleAccountsUtil.java`
41. `src/main/java/com/nubo/operations/calculation/api/models/dto/request/CalculationInDto.java`
42. `src/main/java/com/nubo/operations/calculation/api/models/dto/request/RfSettleAccountsInDto.java`
43. `src/main/java/com/nubo/operations/calculation/api/models/dto/request/SettleAccountsInDto.java`
44. `src/main/java/com/nubo/operations/calculation/api/models/dto/response/CalculationOutDto.java`
45. `src/main/java/com/nubo/operations/calculation/api/models/dto/response/PageResponseOutDto.java`
46. `src/main/java/com/nubo/operations/calculation/api/models/dto/response/RfSettleAccountsOutDto.java`
47. `src/main/java/com/nubo/operations/calculation/api/models/dto/response/SettleAccountsOutDto.java`
48. `src/main/java/com/nubo/operations/calculation/api/models/dto/response/SideOutDto.java`
49. `src/main/java/com/nubo/operations/calculation/api/models/dto/response/StatusOutDto.java`
50. `src/main/java/com/nubo/operations/calculation/api/models/entity/CalculationEntity.java`
51. `src/main/java/com/nubo/operations/calculation/api/models/entity/CalculationKey.java`
52. `src/main/java/com/nubo/operations/calculation/api/models/entity/SideEntity.java`
53. `src/main/java/com/nubo/operations/calculation/api/models/entity/StatusEntity.java`
54. `src/main/java/com/nubo/operations/calculation/api/models/entity/TradeEntity.java`
55. `src/main/java/com/nubo/operations/calculation/api/models/entity/TypeEntity.java`
56. `src/main/java/com/nubo/operations/calculation/api/models/enums/CommissionTypeEnum.java`
57. `src/main/java/com/nubo/operations/calculation/api/models/enums/PropertiesEnum.java`
58. `src/main/java/com/nubo/operations/calculation/api/models/enums/SideEnum.java`
59. `src/main/java/com/nubo/operations/calculation/api/models/enums/TypeEnum.java`
60. `src/main/java/com/nubo/operations/calculation/api/models/enums/VersionApiEnum.java`
61. `src/main/java/com/nubo/operations/calculation/api/repository/CalculationRepository.java`
62. `src/main/java/com/nubo/operations/calculation/api/repository/SideRepository.java`
63. `src/main/java/com/nubo/operations/calculation/api/repository/StatusRepository.java`
64. `src/main/java/com/nubo/operations/calculation/api/repository/TradeRepository.java`
65. `src/main/java/com/nubo/operations/calculation/api/service/CalculationService.java`
66. `src/main/java/com/nubo/operations/calculation/api/service/RfCalculationService.java`
67. `src/main/java/com/nubo/operations/calculation/api/service/impl/CalculationServiceImpl.java`
68. `src/main/java/com/nubo/operations/calculation/api/service/impl/RfCalculationServiceImpl.java`
69. `src/main/java/com/nubo/operations/calculation/api/web/controller/CalculationRestController.java`
70. `src/main/java/com/nubo/operations/calculation/api/web/controller/RfCalculationRestController.java`

## mvnw

```
#!/bin/sh
# ----------------------------------------------------------------------------
# Licensed to the Apache Software Foundation (ASF) under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  The ASF licenses this file
# to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
# KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.
# ----------------------------------------------------------------------------

# ----------------------------------------------------------------------------
# Apache Maven Wrapper startup batch script, version 3.3.2
#
# Optional ENV vars
# -----------------
#   JAVA_HOME - location of a JDK home dir, required when download maven via java source
#   MVNW_REPOURL - repo url base for downloading maven distribution
#   MVNW_USERNAME/MVNW_PASSWORD - user and password for downloading maven
#   MVNW_VERBOSE - true: enable verbose log; debug: trace the mvnw script; others: silence the output
# ----------------------------------------------------------------------------

set -euf
[ "${MVNW_VERBOSE-}" != debug ] || set -x

# OS specific support.
native_path() { printf %s\\n "$1"; }
case "$(uname)" in
CYGWIN* | MINGW*)
  [ -z "${JAVA_HOME-}" ] || JAVA_HOME="$(cygpath --unix "$JAVA_HOME")"
  native_path() { cygpath --path --windows "$1"; }
  ;;
esac

# set JAVACMD and JAVACCMD
set_java_home() {
  # For Cygwin and MinGW, ensure paths are in Unix format before anything is touched
  if [ -n "${JAVA_HOME-}" ]; then
    if [ -x "$JAVA_HOME/jre/sh/java" ]; then
      # IBM's JDK on AIX uses strange locations for the executables
      JAVACMD="$JAVA_HOME/jre/sh/java"
      JAVACCMD="$JAVA_HOME/jre/sh/javac"
    else
      JAVACMD="$JAVA_HOME/bin/java"
      JAVACCMD="$JAVA_HOME/bin/javac"

      if [ ! -x "$JAVACMD" ] || [ ! -x "$JAVACCMD" ]; then
        echo "The JAVA_HOME environment variable is not defined correctly, so mvnw cannot run." >&2
        echo "JAVA_HOME is set to \"$JAVA_HOME\", but \"\$JAVA_HOME/bin/java\" or \"\$JAVA_HOME/bin/javac\" does not exist." >&2
        return 1
      fi
    fi
  else
    JAVACMD="$(
      'set' +e
      'unset' -f command 2>/dev/null
      'command' -v java
    )" || :
    JAVACCMD="$(
      'set' +e
      'unset' -f command 2>/dev/null
      'command' -v javac
    )" || :

    if [ ! -x "${JAVACMD-}" ] || [ ! -x "${JAVACCMD-}" ]; then
      echo "The java/javac command does not exist in PATH nor is JAVA_HOME set, so mvnw cannot run." >&2
      return 1
    fi
  fi
}

# hash string like Java String::hashCode
hash_string() {
  str="${1:-}" h=0
  while [ -n "$str" ]; do
    char="${str%"${str#?}"}"
    h=$(((h * 31 + $(LC_CTYPE=C printf %d "'$char")) % 4294967296))
    str="${str#?}"
  done
  printf %x\\n $h
}

verbose() { :; }
[ "${MVNW_VERBOSE-}" != true ] || verbose() { printf %s\\n "${1-}"; }

die() {
  printf %s\\n "$1" >&2
  exit 1
}

trim() {
  # MWRAPPER-139:
  #   Trims trailing and leading whitespace, carriage returns, tabs, and linefeeds.
  #   Needed for removing poorly interpreted newline sequences when running in more
  #   exotic environments such as mingw bash on Windows.
  printf "%s" "${1}" | tr -d '[:space:]'
}

# parse distributionUrl and optional distributionSha256Sum, requires .mvn/wrapper/maven-wrapper.properties
while IFS="=" read -r key value; do
  case "${key-}" in
  distributionUrl) distributionUrl=$(trim "${value-}") ;;
  distributionSha256Sum) distributionSha256Sum=$(trim "${value-}") ;;
  esac
done <"${0%/*}/.mvn/wrapper/maven-wrapper.properties"
[ -n "${distributionUrl-}" ] || die "cannot read distributionUrl property in ${0%/*}/.mvn/wrapper/maven-wrapper.properties"

case "${distributionUrl##*/}" in
maven-mvnd-*bin.*)
  MVN_CMD=mvnd.sh _MVNW_REPO_PATTERN=/maven/mvnd/
  case "${PROCESSOR_ARCHITECTURE-}${PROCESSOR_ARCHITEW6432-}:$(uname -a)" in
  *AMD64:CYGWIN* | *AMD64:MINGW*) distributionPlatform=windows-amd64 ;;
  :Darwin*x86_64) distributionPlatform=darwin-amd64 ;;
  :Darwin*arm64) distributionPlatform=darwin-aarch64 ;;
  :Linux*x86_64*) distributionPlatform=linux-amd64 ;;
  *)
    echo "Cannot detect native platform for mvnd on $(uname)-$(uname -m), use pure java version" >&2
    distributionPlatform=linux-amd64
    ;;
  esac
  distributionUrl="${distributionUrl%-bin.*}-$distributionPlatform.zip"
  ;;
maven-mvnd-*) MVN_CMD=mvnd.sh _MVNW_REPO_PATTERN=/maven/mvnd/ ;;
*) MVN_CMD="mvn${0##*/mvnw}" _MVNW_REPO_PATTERN=/org/apache/maven/ ;;
esac

# apply MVNW_REPOURL and calculate MAVEN_HOME
# maven home pattern: ~/.m2/wrapper/dists/{apache-maven-<version>,maven-mvnd-<version>-<platform>}/<hash>
[ -z "${MVNW_REPOURL-}" ] || distributionUrl="$MVNW_REPOURL$_MVNW_REPO_PATTERN${distributionUrl#*"$_MVNW_REPO_PATTERN"}"
distributionUrlName="${distributionUrl##*/}"
distributionUrlNameMain="${distributionUrlName%.*}"
distributionUrlNameMain="${distributionUrlNameMain%-bin}"
MAVEN_USER_HOME="${MAVEN_USER_HOME:-${HOME}/.m2}"
MAVEN_HOME="${MAVEN_USER_HOME}/wrapper/dists/${distributionUrlNameMain-}/$(hash_string "$distributionUrl")"

exec_maven() {
  unset MVNW_VERBOSE MVNW_USERNAME MVNW_PASSWORD MVNW_REPOURL || :
  exec "$MAVEN_HOME/bin/$MVN_CMD" "$@" || die "cannot exec $MAVEN_HOME/bin/$MVN_CMD"
}

if [ -d "$MAVEN_HOME" ]; then
  verbose "found existing MAVEN_HOME at $MAVEN_HOME"
  exec_maven "$@"
fi

case "${distributionUrl-}" in
*?-bin.zip | *?maven-mvnd-?*-?*.zip) ;;
*) die "distributionUrl is not valid, must match *-bin.zip or maven-mvnd-*.zip, but found '${distributionUrl-}'" ;;
esac

# prepare tmp dir
if TMP_DOWNLOAD_DIR="$(mktemp -d)" && [ -d "$TMP_DOWNLOAD_DIR" ]; then
  clean() { rm -rf -- "$TMP_DOWNLOAD_DIR"; }
  trap clean HUP INT TERM EXIT
else
  die "cannot create temp dir"
fi

mkdir -p -- "${MAVEN_HOME%/*}"

# Download and Install Apache Maven
verbose "Couldn't find MAVEN_HOME, downloading and installing it ..."
verbose "Downloading from: $distributionUrl"
verbose "Downloading to: $TMP_DOWNLOAD_DIR/$distributionUrlName"

# select .zip or .tar.gz
if ! command -v unzip >/dev/null; then
  distributionUrl="${distributionUrl%.zip}.tar.gz"
  distributionUrlName="${distributionUrl##*/}"
fi

# verbose opt
__MVNW_QUIET_WGET=--quiet __MVNW_QUIET_CURL=--silent __MVNW_QUIET_UNZIP=-q __MVNW_QUIET_TAR=''
[ "${MVNW_VERBOSE-}" != true ] || __MVNW_QUIET_WGET='' __MVNW_QUIET_CURL='' __MVNW_QUIET_UNZIP='' __MVNW_QUIET_TAR=v

# normalize http auth
case "${MVNW_PASSWORD:+has-password}" in
'') MVNW_USERNAME='' MVNW_PASSWORD='' ;;
has-password) [ -n "${MVNW_USERNAME-}" ] || MVNW_USERNAME='' MVNW_PASSWORD='' ;;
esac

if [ -z "${MVNW_USERNAME-}" ] && command -v wget >/dev/null; then
  verbose "Found wget ... using wget"
  wget ${__MVNW_QUIET_WGET:+"$__MVNW_QUIET_WGET"} "$distributionUrl" -O "$TMP_DOWNLOAD_DIR/$distributionUrlName" || die "wget: Failed to fetch $distributionUrl"
elif [ -z "${MVNW_USERNAME-}" ] && command -v curl >/dev/null; then
  verbose "Found curl ... using curl"
  curl ${__MVNW_QUIET_CURL:+"$__MVNW_QUIET_CURL"} -f -L -o "$TMP_DOWNLOAD_DIR/$distributionUrlName" "$distributionUrl" || die "curl: Failed to fetch $distributionUrl"
elif set_java_home; then
  verbose "Falling back to use Java to download"
  javaSource="$TMP_DOWNLOAD_DIR/Downloader.java"
  targetZip="$TMP_DOWNLOAD_DIR/$distributionUrlName"
  cat >"$javaSource" <<-END
	public class Downloader extends java.net.Authenticator
	{
	  protected java.net.PasswordAuthentication getPasswordAuthentication()
	  {
	    return new java.net.PasswordAuthentication( System.getenv( "MVNW_USERNAME" ), System.getenv( "MVNW_PASSWORD" ).toCharArray() );
	  }
	  public static void main( String[] args ) throws Exception
	  {
	    setDefault( new Downloader() );
	    java.nio.file.Files.copy( java.net.URI.create( args[0] ).toURL().openStream(), java.nio.file.Paths.get( args[1] ).toAbsolutePath().normalize() );
	  }
	}
	END
  # For Cygwin/MinGW, switch paths to Windows format before running javac and java
  verbose " - Compiling Downloader.java ..."
  "$(native_path "$JAVACCMD")" "$(native_path "$javaSource")" || die "Failed to compile Downloader.java"
  verbose " - Running Downloader.java ..."
  "$(native_path "$JAVACMD")" -cp "$(native_path "$TMP_DOWNLOAD_DIR")" Downloader "$distributionUrl" "$(native_path "$targetZip")"
fi

# If specified, validate the SHA-256 sum of the Maven distribution zip file
if [ -n "${distributionSha256Sum-}" ]; then
  distributionSha256Result=false
  if [ "$MVN_CMD" = mvnd.sh ]; then
    echo "Checksum validation is not supported for maven-mvnd." >&2
    echo "Please disable validation by removing 'distributionSha256Sum' from your maven-wrapper.properties." >&2
    exit 1
  elif command -v sha256sum >/dev/null; then
    if echo "$distributionSha256Sum  $TMP_DOWNLOAD_DIR/$distributionUrlName" | sha256sum -c >/dev/null 2>&1; then
      distributionSha256Result=true
    fi
  elif command -v shasum >/dev/null; then
    if echo "$distributionSha256Sum  $TMP_DOWNLOAD_DIR/$distributionUrlName" | shasum -a 256 -c >/dev/null 2>&1; then
      distributionSha256Result=true
    fi
  else
    echo "Checksum validation was requested but neither 'sha256sum' or 'shasum' are available." >&2
    echo "Please install either command, or disable validation by removing 'distributionSha256Sum' from your maven-wrapper.properties." >&2
    exit 1
  fi
  if [ $distributionSha256Result = false ]; then
    echo "Error: Failed to validate Maven distribution SHA-256, your Maven distribution might be compromised." >&2
    echo "If you updated your Maven version, you need to update the specified distributionSha256Sum property." >&2
    exit 1
  fi
fi

# unzip and move
if command -v unzip >/dev/null; then
  unzip ${__MVNW_QUIET_UNZIP:+"$__MVNW_QUIET_UNZIP"} "$TMP_DOWNLOAD_DIR/$distributionUrlName" -d "$TMP_DOWNLOAD_DIR" || die "failed to unzip"
else
  tar xzf${__MVNW_QUIET_TAR:+"$__MVNW_QUIET_TAR"} "$TMP_DOWNLOAD_DIR/$distributionUrlName" -C "$TMP_DOWNLOAD_DIR" || die "failed to untar"
fi
printf %s\\n "$distributionUrl" >"$TMP_DOWNLOAD_DIR/$distributionUrlNameMain/mvnw.url"
mv -- "$TMP_DOWNLOAD_DIR/$distributionUrlNameMain" "$MAVEN_HOME" || [ -d "$MAVEN_HOME" ] || die "fail to move MAVEN_HOME"

clean || :
exec_maven "$@"

```

## mvnw.cmd

```
<# : batch portion
@REM ----------------------------------------------------------------------------
@REM Licensed to the Apache Software Foundation (ASF) under one
@REM or more contributor license agreements.  See the NOTICE file
@REM distributed with this work for additional information
@REM regarding copyright ownership.  The ASF licenses this file
@REM to you under the Apache License, Version 2.0 (the
@REM "License"); you may not use this file except in compliance
@REM with the License.  You may obtain a copy of the License at
@REM
@REM    http://www.apache.org/licenses/LICENSE-2.0
@REM
@REM Unless required by applicable law or agreed to in writing,
@REM software distributed under the License is distributed on an
@REM "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
@REM KIND, either express or implied.  See the License for the
@REM specific language governing permissions and limitations
@REM under the License.
@REM ----------------------------------------------------------------------------

@REM ----------------------------------------------------------------------------
@REM Apache Maven Wrapper startup batch script, version 3.3.2
@REM
@REM Optional ENV vars
@REM   MVNW_REPOURL - repo url base for downloading maven distribution
@REM   MVNW_USERNAME/MVNW_PASSWORD - user and password for downloading maven
@REM   MVNW_VERBOSE - true: enable verbose log; others: silence the output
@REM ----------------------------------------------------------------------------

@IF "%__MVNW_ARG0_NAME__%"=="" (SET __MVNW_ARG0_NAME__=%~nx0)
@SET __MVNW_CMD__=
@SET __MVNW_ERROR__=
@SET __MVNW_PSMODULEP_SAVE=%PSModulePath%
@SET PSModulePath=
@FOR /F "usebackq tokens=1* delims==" %%A IN (`powershell -noprofile "& {$scriptDir='%~dp0'; $script='%__MVNW_ARG0_NAME__%'; icm -ScriptBlock ([Scriptblock]::Create((Get-Content -Raw '%~f0'))) -NoNewScope}"`) DO @(
  IF "%%A"=="MVN_CMD" (set __MVNW_CMD__=%%B) ELSE IF "%%B"=="" (echo %%A) ELSE (echo %%A=%%B)
)
@SET PSModulePath=%__MVNW_PSMODULEP_SAVE%
@SET __MVNW_PSMODULEP_SAVE=
@SET __MVNW_ARG0_NAME__=
@SET MVNW_USERNAME=
@SET MVNW_PASSWORD=
@IF NOT "%__MVNW_CMD__%"=="" (%__MVNW_CMD__% %*)
@echo Cannot start maven from wrapper >&2 && exit /b 1
@GOTO :EOF
: end batch / begin powershell #>

$ErrorActionPreference = "Stop"
if ($env:MVNW_VERBOSE -eq "true") {
  $VerbosePreference = "Continue"
}

# calculate distributionUrl, requires .mvn/wrapper/maven-wrapper.properties
$distributionUrl = (Get-Content -Raw "$scriptDir/.mvn/wrapper/maven-wrapper.properties" | ConvertFrom-StringData).distributionUrl
if (!$distributionUrl) {
  Write-Error "cannot read distributionUrl property in $scriptDir/.mvn/wrapper/maven-wrapper.properties"
}

switch -wildcard -casesensitive ( $($distributionUrl -replace '^.*/','') ) {
  "maven-mvnd-*" {
    $USE_MVND = $true
    $distributionUrl = $distributionUrl -replace '-bin\.[^.]*$',"-windows-amd64.zip"
    $MVN_CMD = "mvnd.cmd"
    break
  }
  default {
    $USE_MVND = $false
    $MVN_CMD = $script -replace '^mvnw','mvn'
    break
  }
}

# apply MVNW_REPOURL and calculate MAVEN_HOME
# maven home pattern: ~/.m2/wrapper/dists/{apache-maven-<version>,maven-mvnd-<version>-<platform>}/<hash>
if ($env:MVNW_REPOURL) {
  $MVNW_REPO_PATTERN = if ($USE_MVND) { "/org/apache/maven/" } else { "/maven/mvnd/" }
  $distributionUrl = "$env:MVNW_REPOURL$MVNW_REPO_PATTERN$($distributionUrl -replace '^.*'+$MVNW_REPO_PATTERN,'')"
}
$distributionUrlName = $distributionUrl -replace '^.*/',''
$distributionUrlNameMain = $distributionUrlName -replace '\.[^.]*$','' -replace '-bin$',''
$MAVEN_HOME_PARENT = "$HOME/.m2/wrapper/dists/$distributionUrlNameMain"
if ($env:MAVEN_USER_HOME) {
  $MAVEN_HOME_PARENT = "$env:MAVEN_USER_HOME/wrapper/dists/$distributionUrlNameMain"
}
$MAVEN_HOME_NAME = ([System.Security.Cryptography.MD5]::Create().ComputeHash([byte[]][char[]]$distributionUrl) | ForEach-Object {$_.ToString("x2")}) -join ''
$MAVEN_HOME = "$MAVEN_HOME_PARENT/$MAVEN_HOME_NAME"

if (Test-Path -Path "$MAVEN_HOME" -PathType Container) {
  Write-Verbose "found existing MAVEN_HOME at $MAVEN_HOME"
  Write-Output "MVN_CMD=$MAVEN_HOME/bin/$MVN_CMD"
  exit $?
}

if (! $distributionUrlNameMain -or ($distributionUrlName -eq $distributionUrlNameMain)) {
  Write-Error "distributionUrl is not valid, must end with *-bin.zip, but found $distributionUrl"
}

# prepare tmp dir
$TMP_DOWNLOAD_DIR_HOLDER = New-TemporaryFile
$TMP_DOWNLOAD_DIR = New-Item -Itemtype Directory -Path "$TMP_DOWNLOAD_DIR_HOLDER.dir"
$TMP_DOWNLOAD_DIR_HOLDER.Delete() | Out-Null
trap {
  if ($TMP_DOWNLOAD_DIR.Exists) {
    try { Remove-Item $TMP_DOWNLOAD_DIR -Recurse -Force | Out-Null }
    catch { Write-Warning "Cannot remove $TMP_DOWNLOAD_DIR" }
  }
}

New-Item -Itemtype Directory -Path "$MAVEN_HOME_PARENT" -Force | Out-Null

# Download and Install Apache Maven
Write-Verbose "Couldn't find MAVEN_HOME, downloading and installing it ..."
Write-Verbose "Downloading from: $distributionUrl"
Write-Verbose "Downloading to: $TMP_DOWNLOAD_DIR/$distributionUrlName"

$webclient = New-Object System.Net.WebClient
if ($env:MVNW_USERNAME -and $env:MVNW_PASSWORD) {
  $webclient.Credentials = New-Object System.Net.NetworkCredential($env:MVNW_USERNAME, $env:MVNW_PASSWORD)
}
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$webclient.DownloadFile($distributionUrl, "$TMP_DOWNLOAD_DIR/$distributionUrlName") | Out-Null

# If specified, validate the SHA-256 sum of the Maven distribution zip file
$distributionSha256Sum = (Get-Content -Raw "$scriptDir/.mvn/wrapper/maven-wrapper.properties" | ConvertFrom-StringData).distributionSha256Sum
if ($distributionSha256Sum) {
  if ($USE_MVND) {
    Write-Error "Checksum validation is not supported for maven-mvnd. `nPlease disable validation by removing 'distributionSha256Sum' from your maven-wrapper.properties."
  }
  Import-Module $PSHOME\Modules\Microsoft.PowerShell.Utility -Function Get-FileHash
  if ((Get-FileHash "$TMP_DOWNLOAD_DIR/$distributionUrlName" -Algorithm SHA256).Hash.ToLower() -ne $distributionSha256Sum) {
    Write-Error "Error: Failed to validate Maven distribution SHA-256, your Maven distribution might be compromised. If you updated your Maven version, you need to update the specified distributionSha256Sum property."
  }
}

# unzip and move
Expand-Archive "$TMP_DOWNLOAD_DIR/$distributionUrlName" -DestinationPath "$TMP_DOWNLOAD_DIR" | Out-Null
Rename-Item -Path "$TMP_DOWNLOAD_DIR/$distributionUrlNameMain" -NewName $MAVEN_HOME_NAME | Out-Null
try {
  Move-Item -Path "$TMP_DOWNLOAD_DIR/$MAVEN_HOME_NAME" -Destination $MAVEN_HOME_PARENT | Out-Null
} catch {
  if (! (Test-Path -Path "$MAVEN_HOME" -PathType Container)) {
    Write-Error "fail to move MAVEN_HOME"
  }
} finally {
  try { Remove-Item $TMP_DOWNLOAD_DIR -Recurse -Force | Out-Null }
  catch { Write-Warning "Cannot remove $TMP_DOWNLOAD_DIR" }
}

Write-Output "MVN_CMD=$MAVEN_HOME/bin/$MVN_CMD"

```

## pom.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>4.1.1</version>
        <relativePath/>
    </parent>

    <groupId>com.nubo.operations.calculation.api</groupId>
    <artifactId>operations-calculation-api</artifactId>
    <version>0.27.1-beta.2</version>
    <name>${project.artifactId}</name>
    <description>Operations Calculation Api</description>

    <properties>
        <java.version>21</java.version>
        <spring.port>8080</spring.port>
        <test.skip>false</test.skip>
        <datasource.url.application.name>ApplicationName=${project.artifactId}</datasource.url.application.name>
        <hikari.pool.name>${project.artifactId}-pool</hikari.pool.name>
        <log4j2.version>2.25.5</log4j2.version>
        <tomcat.version>11.0.25</tomcat.version>
    </properties>

    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-webmvc</artifactId>
            <exclusions>
                <exclusion>
                    <groupId>org.springframework.boot</groupId>
                    <artifactId>spring-boot-starter-logging</artifactId>
                </exclusion>
            </exclusions>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
            <exclusions>
				<exclusion>
					<groupId>org.springframework.boot</groupId>
					<artifactId>spring-boot-starter-logging</artifactId>
				</exclusion>
			</exclusions>
        </dependency>
        <!-- Logging -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-log4j2</artifactId>
        </dependency>
        <dependency>
            <groupId>org.apache.logging.log4j</groupId>
            <artifactId>log4j-layout-template-json</artifactId>
            <version>${log4j2.version}</version>
            <scope>runtime</scope>
        </dependency>
        <dependency>
            <groupId>commons-logging</groupId>
            <artifactId>commons-logging</artifactId>
            <version>1.2</version>
        </dependency>
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <optional>true</optional>
            <scope>provided</scope>
        </dependency>
        <!-- Database -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-jpa</artifactId>
        </dependency>
        <dependency>
            <groupId>org.postgresql</groupId>
            <artifactId>postgresql</artifactId>
            <scope>runtime</scope>
        </dependency>
        <!-- Swagger -->
        <dependency>
            <groupId>org.springdoc</groupId>
            <artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>
            <version>3.1.0</version>
        </dependency>
        <!-- Validation -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-validation</artifactId>
        </dependency>
        <!-- Actuator -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-actuator</artifactId>
        </dependency>
        <!-- vulnerability adjustment  -->
        <dependency>
            <groupId>org.apache.commons</groupId>
            <artifactId>commons-lang3</artifactId>
            <version>3.18.0</version>
        </dependency>

    </dependencies>

    <build>
        <finalName>${project.artifactId}</finalName>
        <resources>
            <resource>
                <directory>src/main/resources</directory>
                <filtering>true</filtering>
            </resource>
        </resources>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <configuration>
                    <release>${java.version}</release>
                    <parameters>true</parameters>
                </configuration>
            </plugin>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
                <configuration>
                    <excludes>
                        <exclude>
                            <groupId>org.projectlombok</groupId>
                            <artifactId>lombok</artifactId>
                        </exclude>
                    </excludes>
                </configuration>
            </plugin>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-surefire-plugin</artifactId>
                <configuration>
                    <skipTests>${test.skip}</skipTests>
                </configuration>
            </plugin>
            <plugin>
                <groupId>org.jacoco</groupId>
                <artifactId>jacoco-maven-plugin</artifactId>
                <version>0.8.12</version>
                <executions>
                    <execution>
                        <id>prepare-agent</id>
                        <goals>
                            <goal>prepare-agent</goal>
                        </goals>
                    </execution>
                    <execution>
                        <id>report</id>
                        <phase>test</phase>
                        <goals>
                            <goal>report</goal>
                        </goals>
                        <configuration>
                            <excludes>
                                <exclude>**/application/**</exclude>
                                <exclude>**/models/**</exclude>
                                <exclude>**/repository/**</exclude>
                                <exclude>**/OperationsCalculationApiApplication.class</exclude>
                            </excludes>
                            <includes>
                                <include>**/*.class</include>
                            </includes>
                        </configuration>
                    </execution>
                    <execution>
                        <id>post-unit-test</id>
                        <phase>test</phase>
                        <goals>
                            <goal>report</goal>
                        </goals>
                        <configuration>
                            <outputDirectory>${project.build.directory}/jacoco-report</outputDirectory>
                        </configuration>
                    </execution>
                </executions>
            </plugin>
        </plugins>
    </build>

</project>

```

## .mvn/wrapper/maven-wrapper.properties

```properties
# Licensed to the Apache Software Foundation (ASF) under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  The ASF licenses this file
# to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
#
#   http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
# KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.
wrapperVersion=3.3.2
distributionType=only-script
distributionUrl=https://repo.maven.apache.org/maven2/org/apache/maven/apache-maven/3.9.9/apache-maven-3.9.9-bin.zip

```

## src/main/resources/application-dev.yml

```yaml
server:
  port: "@spring.port@"
spring:
  datasource:
    username: ${DB_USERNAME}
    password: ${DB_PASSWORD}
    url: ${DB_URL}?@datasource.url.application.name@
    hikari:
      maximum-pool-size: ${DB_HIKARI_MAXIMUM_POOL_SIZE}
      minimum-idle: ${DB_HIKARI_MINIMUM_IDLE}
      idle-timeout: ${DB_HIKARI_IDLE_TIMEOUT}
      validation-timeout: ${DB_HIKARI_VALIDATION_TIMEOUT}
      max-lifetime: ${DB_HIKARI_MAX_LIFETIME}
      connection-timeout: ${DB_HIKARI_CONNECTION_TIMEOUT}
      leak-detection-threshold: ${DB_HIKARI_LEAK_DETECTION_THRESHOLD}
      connection-test-query: SELECT 1
      pool-name: "@hikari.pool.name@"
  jpa:
    hibernate:
      ddl-auto: none
      default_schema: NUANBODB
    show-sql: 'false'
    database-platform: org.hibernate.dialect.PostgreSQLDialect
logging:
  config: classpath:log/log4j2.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR

```

## src/main/resources/application-local.yml

```yaml
server:
  port: 8081
spring:
  datasource:
    username: ${DB_USERNAME}
    password: ${DB_PASSWORD}
    url: ${DB_URL}?@datasource.url.application.name@
    hikari:
      maximum-pool-size: ${DB_HIKARI_MAXIMUM_POOL_SIZE:10}
      minimum-idle: ${DB_HIKARI_MINIMUM_IDLE:2}
      idle-timeout: ${DB_HIKARI_IDLE_TIMEOUT:600000}
      validation-timeout: ${DB_HIKARI_VALIDATION_TIMEOUT:5000}
      max-lifetime: ${DB_HIKARI_MAX_LIFETIME:1800000}
      connection-timeout: ${DB_HIKARI_CONNECTION_TIMEOUT:30000}
      leak-detection-threshold: ${DB_HIKARI_LEAK_DETECTION_THRESHOLD:0}
      connection-test-query: SELECT 1
      pool-name: "@hikari.pool.name@"
  jpa:
    hibernate:
      ddl-auto: none
      default_schema: NUANBODB
    show-sql: 'false'
    database-platform: org.hibernate.dialect.PostgreSQLDialect
logging:
  config: classpath:log/log4j2.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR

```

## src/main/resources/application-prod.yml

```yaml
server:
  port: "@spring.port@"
spring:
  datasource:
    username: ${DB_USERNAME}
    password: ${DB_PASSWORD}
    url: ${DB_URL}?@datasource.url.application.name@
    hikari:
      maximum-pool-size: ${DB_HIKARI_MAXIMUM_POOL_SIZE}
      minimum-idle: ${DB_HIKARI_MINIMUM_IDLE}
      idle-timeout: ${DB_HIKARI_IDLE_TIMEOUT}
      validation-timeout: ${DB_HIKARI_VALIDATION_TIMEOUT}
      max-lifetime: ${DB_HIKARI_MAX_LIFETIME}
      connection-timeout: ${DB_HIKARI_CONNECTION_TIMEOUT}
      leak-detection-threshold: ${DB_HIKARI_LEAK_DETECTION_THRESHOLD}
      connection-test-query: SELECT 1
      pool-name: "@hikari.pool.name@"
  jpa:
    hibernate:
      ddl-auto: none
      default_schema: NUANBODB
    show-sql: 'false'
    database-platform: org.hibernate.dialect.PostgreSQLDialect
logging:
  config: classpath:log/log4j2-prod.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR

```

## src/main/resources/application-qa.yml

```yaml
server:
  port: @spring.port@
spring:
  datasource:
    username: ${DB_USERNAME}
    password: ${DB_PASSWORD}
    url: ${DB_URL}?@datasource.url.application.name@
    hikari:
      maximum-pool-size: ${DB_HIKARI_MAXIMUM_POOL_SIZE}
      minimum-idle: ${DB_HIKARI_MINIMUM_IDLE}
      idle-timeout: ${DB_HIKARI_IDLE_TIMEOUT}
      validation-timeout: ${DB_HIKARI_VALIDATION_TIMEOUT}
      max-lifetime: ${DB_HIKARI_MAX_LIFETIME}
      connection-timeout: ${DB_HIKARI_CONNECTION_TIMEOUT}
      leak-detection-threshold: ${DB_HIKARI_LEAK_DETECTION_THRESHOLD}
      connection-test-query: SELECT 1
      pool-name: @hikari.pool.name@
  jpa:
    hibernate:
      ddl-auto: none
      default_schema: NUANBODB
    show-sql: 'false'
    database-platform: org.hibernate.dialect.PostgreSQLDialect
logging:
  config: classpath:log/log4j2.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR


```

## src/main/resources/application-uat.yml

```yaml
server:
  port: @spring.port@
spring:
  datasource:
    username: ${DB_USERNAME}
    password: ${DB_PASSWORD}
    url: ${DB_URL}?@datasource.url.application.name@
    hikari:
      maximum-pool-size: ${DB_HIKARI_MAXIMUM_POOL_SIZE}
      minimum-idle: ${DB_HIKARI_MINIMUM_IDLE}
      idle-timeout: ${DB_HIKARI_IDLE_TIMEOUT}
      validation-timeout: ${DB_HIKARI_VALIDATION_TIMEOUT}
      max-lifetime: ${DB_HIKARI_MAX_LIFETIME}
      connection-timeout: ${DB_HIKARI_CONNECTION_TIMEOUT}
      leak-detection-threshold: ${DB_HIKARI_LEAK_DETECTION_THRESHOLD}
      connection-test-query: SELECT 1
      pool-name: @hikari.pool.name@
  jpa:
    hibernate:
      ddl-auto: none
      default_schema: NUANBODB
    show-sql: 'false'
    database-platform: org.hibernate.dialect.PostgreSQLDialect
logging:
  config: classpath:log/log4j2.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR


```

## src/main/resources/application.yml

```yaml
spring:
  profiles:
    active: ${SPRING_PROFILES_ACTIVE}
  application:
    name: "@project.name@"
    type: service
server:
  servlet:
    context-path: /${spring.application.name}
application:
  version: "@project.version@"
  description: 'Documentation Endpoints'
  title: "@project.description@"
  group: ${spring.application.name}
management:
  health:
    probes:
      livenessState:
        enabled: true
      readinessState:
        enabled: true
  endpoint:
    health:
      probes:
        enabled: true
  endpoints:
    web:
      exposure:
        include: health,info,metrics
  metrics:
    enable:
      hikari: true

```

## src/main/resources/banner.txt

```
 ,-----. ,------. ,------.,------.   ,---. ,--------.,--. ,-----. ,--.  ,--. ,---.   ,-----.  ,---.  ,--.    ,-----.,--. ,--.,--.     ,---. ,--------.,--. ,-----. ,--.  ,--.  ,---.  ,------. ,--.
'  .-.  '|  .--. '|  .---'|  .--. ' /  O  \'--.  .--'|  |'  .-.  '|  ,'.|  |'   .-' '  .--./ /  O  \ |  |   '  .--./|  | |  ||  |    /  O  \'--.  .--'|  |'  .-.  '|  ,'.|  | /  O  \ |  .--. '|  |
|  | |  ||  '--' ||  `--, |  '--'.'|  .-.  |  |  |   |  ||  | |  ||  |' '  |`.  `-. |  |    |  .-.  ||  |   |  |    |  | |  ||  |   |  .-.  |  |  |   |  ||  | |  ||  |' '  ||  .-.  ||  '--' ||  |
'  '-'  '|  | --' |  `---.|  |\  \ |  | |  |  |  |   |  |'  '-'  '|  | `   |.-'    |'  '--'\|  | |  ||  '--.'  '--'\'  '-'  '|  '--.|  | |  |  |  |   |  |'  '-'  '|  | `   ||  | |  ||  | --' |  |
 `-----' `--'     `------'`--' '--'`--' `--'  `--'   `--' `-----' `--'  `--'`-----'  `-----'`--' `--'`-----' `-----' `-----' `-----'`--' `--'  `--'   `--' `-----' `--'  `--'`--' `--'`--'     `--'

${application.title} ${application.version}
Powered by Spring Boot ${spring-boot.version}
```

## src/main/resources/log/JsonEventLayout_error.json

```json
{
  "timestamp": {
    "$resolver": "timestamp",
    "pattern": {
      "format": "yyyy-MM-dd HH:mm:ss,SSS",
      "timeZone": "UTC"
    }
  },
  "level": {
    "$resolver": "level",
    "field": "name"
  },
  "class": {
    "$resolver": "source",
    "field": "className"
  },
  "method": {
    "$resolver": "source",
    "field": "methodName"
  },
  "file": {
    "$resolver": "source",
    "field": "fileName"
  },
  "line": {
    "$resolver": "source",
    "field": "lineNumber"
  },
  "process.thread.name": {
    "$resolver": "thread",
    "field": "name"
  },
  "process.thread.id": {
    "$resolver": "thread",
    "field": "name"
  },
  "exception": {
    "exception_class": {
      "$resolver": "exception",
      "field": "className"
    },
    "exception_message": {
      "$resolver": "exception",
      "field": "message"
    },
    "stackTrace": {
      "$resolver": "exception",
      "field": "stackTrace",
      "elementTemplate": {
        "class": {
          "$resolver": "stackTraceElement",
          "field": "className"
        },
        "method": {
          "$resolver": "stackTraceElement",
          "field": "methodName"
        },
        "file": {
          "$resolver": "stackTraceElement",
          "field": "fileName"
        },
        "line": {
          "$resolver": "stackTraceElement",
          "field": "lineNumber"
        }
      }
    }
  }
}
```

## src/main/resources/log/JsonEventLayout_info.json

```json
{
  "timestamp": {
    "$resolver": "timestamp",
    "pattern": {
      "format": "yyyy-MM-dd HH:mm:ss,SSS",
      "timeZone": "UTC"
    }
  },
  "level": {
    "$resolver": "level",
    "field": "name"
  },
  "class": {
    "$resolver": "source",
    "field": "className"
  }
}
```

## src/main/resources/log/JsonEventLayout_trace.json

```json
{
  "timestamp": {
    "$resolver": "timestamp",
    "pattern": {
      "format": "yyyy-MM-dd HH:mm:ss,SSS",
      "timeZone": "UTC"
    }
  },
  "level": {
    "$resolver": "level",
    "field": "name"
  },
  "class": {
    "$resolver": "source",
    "field": "className"
  },
  "method": {
    "$resolver": "source",
    "field": "methodName"
  },
  "file": {
    "$resolver": "source",
    "field": "fileName"
  }
}
```

## src/main/resources/log/log4j2-prod.properties

```properties
# Properties
property.CONSOLE_PATTERN = %style{%d{ISO8601}}{black} %highlight{%-5level} [%style{%t}{bright,blue}] %style{%C{1}}{cyan} - %msg%n

property.TIMESTAMP_FORMAT = $${date:yyyy-MM-dd HH:mm:ss,SSS}
property.APPLICATION_NAME = $${spring:spring.application.name}
property.APPLICATION_TYPE = $${spring:spring.application.type}
property.ROLLING_FILE_PATTERN = $${date:yyyy-MM}/${sys:APPLICATION_NAME}-%d{-dd-MMMM-yyyy}-%i.log.gz
property.LOG_DIR = target/logs

rootLogger = INFO, STDOUT_JSON, jsonrollinglog

appender.console.name = STDOUT_JSON
appender.console.type = Console
appender.console.layout.type = JsonTemplateLayout
appender.console.layout.eventTemplateUri = classpath:log/JsonEventLayout_error.json
appender.console.layout.locationInfoEnabled = true
appender.console.layout.eventTemplateAdditionalField[0].type = EventTemplateAdditionalField
appender.console.layout.eventTemplateAdditionalField[0].key = marker
appender.console.layout.eventTemplateAdditionalField[0].value = {"$resolver": "marker", "field": "name"}
appender.console.layout.eventTemplateAdditionalField[0].format = JSON
appender.console.layout.eventTemplateAdditionalField[1].type = EventTemplateAdditionalField
appender.console.layout.eventTemplateAdditionalField[1].key = message
appender.console.layout.eventTemplateAdditionalField[1].value = {"$resolver": "message", "field": "name", "style": "bold", "color": "green"}
appender.console.layout.eventTemplateAdditionalField[1].format = JSON
appender.console.layout.eventTemplateAdditionalField[2].type = EventTemplateAdditionalField
appender.console.layout.eventTemplateAdditionalField[2].key = application_name
appender.console.layout.eventTemplateAdditionalField[2].value = ${sys:APPLICATION_NAME}
appender.console.layout.eventTemplateAdditionalField[3].type = EventTemplateAdditionalField
appender.console.layout.eventTemplateAdditionalField[3].key = application_type
appender.console.layout.eventTemplateAdditionalField[3].value = ${sys:APPLICATION_TYPE}

appender.rolling.name = jsonrollinglog
appender.rolling.type = RollingFile
appender.rolling.fileName = ${sys:LOG_DIR}/${sys:APPLICATION_NAME}.log
appender.rolling.filePattern = ${sys:LOG_DIR}/${sys:ROLLING_FILE_PATTERN}
appender.rolling.layout.type = JsonTemplateLayout
appender.rolling.layout.eventTemplateUri = classpath:log/JsonEventLayout_trace.json
appender.rolling.layout.locationInfoEnabled = true
appender.rolling.layout.eventTemplateAdditionalField[0].type = EventTemplateAdditionalField
appender.rolling.layout.eventTemplateAdditionalField[0].key = marker
appender.rolling.layout.eventTemplateAdditionalField[0].value = {"$resolver": "marker", "field": "name"}
appender.rolling.layout.eventTemplateAdditionalField[0].format = JSON
appender.rolling.layout.eventTemplateAdditionalField[1].type = EventTemplateAdditionalField
appender.rolling.layout.eventTemplateAdditionalField[1].key = message
appender.rolling.layout.eventTemplateAdditionalField[1].value = {"$resolver": "message", "field": "name", "style": "italic", "color": "blue"}
appender.rolling.layout.eventTemplateAdditionalField[1].format = JSON
appender.rolling.layout.eventTemplateAdditionalField[2].type = EventTemplateAdditionalField
appender.rolling.layout.eventTemplateAdditionalField[2].key = application_name
appender.rolling.layout.eventTemplateAdditionalField[2].value = ${sys:APPLICATION_NAME}
appender.rolling.layout.eventTemplateAdditionalField[3].type = EventTemplateAdditionalField
appender.rolling.layout.eventTemplateAdditionalField[3].key = application_type
appender.rolling.layout.eventTemplateAdditionalField[3].value = ${sys:APPLICATION_TYPE}
appender.rolling.policies.type = Policies
appender.rolling.policies.size.type = SizeBasedTriggeringPolicy
appender.rolling.policies.size.size=10MB
appender.rolling.filter.threshold.type = ThresholdFilter
appender.rolling.filter.threshold.level = TRACE

logger.rolling.name = com.nuamx
logger.rolling.level = trace
logger.rolling.additivity = true
logger.rolling.appenderRef.rolling.ref = jsonrollinglog

```

## src/main/resources/log/log4j2.properties

```properties
# Properties
property.CONSOLE_PATTERN = %style{%d{ISO8601}}{black} %highlight{%-5level }[%style{%t}{bright,blue}] %style{%C{1}}{cyan} - %msg%n

appender.console.name = STDOUT
appender.console.type = Console
appender.console.layout.type = PatternLayout
appender.console.layout.pattern = ${sys:CONSOLE_PATTERN}

rootLogger = INFO, STDOUT

```

## src/main/java/com/nubo/operations/calculation/api/OperationsCalculationApiApplication.java

```java
package com.nubo.operations.calculation.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class OperationsCalculationApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(OperationsCalculationApiApplication.class, args);
	}

}

```

## src/main/java/com/nubo/operations/calculation/api/application/annotations/ValidBigDecimal.java

```java
package com.nubo.operations.calculation.api.application.annotations;

import com.nubo.operations.calculation.api.application.config.ValidBigDecimalConfig;
import jakarta.validation.Constraint;
import jakarta.validation.Payload;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Constraint(validatedBy = ValidBigDecimalConfig.class)
@Target({ ElementType.METHOD, ElementType.FIELD, ElementType.ANNOTATION_TYPE, ElementType.PARAMETER })
@Retention(RetentionPolicy.RUNTIME)
public @interface ValidBigDecimal {
    String message() default "";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};

    int precision();
    int scale();
}
```

## src/main/java/com/nubo/operations/calculation/api/application/config/SwaggerConfig.java

```java
package com.nubo.operations.calculation.api.application.config;

import com.nubo.operations.calculation.api.exception.error.ErrorResponse;
import com.nubo.operations.calculation.api.exception.error.ErrorValidation;
import com.nubo.operations.calculation.api.models.enums.PropertiesEnum;
import io.swagger.v3.oas.annotations.Hidden;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.enums.ParameterIn;
import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.media.Content;
import io.swagger.v3.oas.models.media.MediaType;
import io.swagger.v3.oas.models.media.Schema;
import io.swagger.v3.oas.models.parameters.HeaderParameter;
import io.swagger.v3.oas.models.parameters.Parameter;
import io.swagger.v3.oas.models.responses.ApiResponse;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;
import org.springdoc.core.customizers.GlobalOpenApiCustomizer;
import org.springdoc.core.models.GroupedOpenApi;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@Configuration
@Controller
public class SwaggerConfig {

    @GetMapping(value = "/")
    @Hidden
    @Operation(description = "Redirect to api home page")
    public ModelAndView index() {
        return new ModelAndView("redirect:/swagger-ui/index.html");
    }

    @Bean
    public GroupedOpenApi publicApi(@Value("${application.group}") String appGroup) {
        return GroupedOpenApi.builder().group(appGroup).pathsToMatch("/**").build();
    }

    @Bean
    public OpenAPI customOpenAPI(
            @Value("${application.title}") String appTitle,
            @Value("${application.description}") String appDescription,
            @Value("${application.version}") String appVersion) {
        final String securitySchemeName = "bearerAuth";

        return new OpenAPI()
                .addSecurityItem(new SecurityRequirement().addList(securitySchemeName))
                .components(new Components()
                        .addSecuritySchemes(securitySchemeName, new SecurityScheme()
                                .name(securitySchemeName).type(SecurityScheme.Type.HTTP)
                                .scheme("bearer").bearerFormat("JWT")))
                .info(new Info()
                        .title(appTitle)
                        .description(appDescription)
                        .version(appVersion));
    }

    @Bean
    public GlobalOpenApiCustomizer customizer() {
        Content content = createErrorResponse();
        return openApi -> openApi.getPaths().values().stream().flatMap(pathItem -> pathItem.readOperations().stream())
                .forEach(operation -> {
                    operation.addParametersItem(new HeaderParameter().name(PropertiesEnum.CLIENT_IP.getValue())
                                    .in(ParameterIn.HEADER.toString()).required(true).example("127.0.0.1"))
                            .addParametersItem(new HeaderParameter().name(PropertiesEnum.CLIENT_USER.getValue())
                                    .in(ParameterIn.HEADER.toString()).required(true).example("admin"))
                            .addParametersItem(new HeaderParameter().name(PropertiesEnum.CLIENT_DATETIME.getValue())
                                    .in(ParameterIn.HEADER.toString()).required(true).example("2024-09-11T15:30:00"))
                            .addParametersItem(new Parameter().name("version").in(ParameterIn.PATH.toString())
                                    .required(true).example("v1"))
                            .getResponses()
                            .addApiResponse("500", new ApiResponse().description("Error Response").content(content));
                });
    }

    private Content createErrorResponse() {
        var errorValidationSchema = new Schema<ErrorValidation>()
                .addProperty("id", new Schema<String>())
                .addProperty("description", new Schema<String>());
        var errorDetailsSchema = new Schema<List<ErrorValidation>>()
                .items(errorValidationSchema);
        var errorResponseSchema = new Schema<ErrorResponse>()
                .addProperty("httpCode", new Schema<String>())
                .addProperty("httpMethod", new Schema<String>())
                .addProperty("url", new Schema<String>())
                .addProperty("timestamp", new Schema<String>())
                .addProperty("errorCode", new Schema<String>())
                .addProperty("errorMessage", new Schema<String>())
                .addProperty("errorMessageDetail", new Schema<String>())
                .addProperty("errorDetails", errorDetailsSchema);
        return new Content().addMediaType("application/json", new MediaType().schema(errorResponseSchema));
    }

}

```

## src/main/java/com/nubo/operations/calculation/api/application/config/ValidBigDecimalConfig.java

```java
package com.nubo.operations.calculation.api.application.config;

import com.nubo.operations.calculation.api.application.annotations.ValidBigDecimal;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;
import java.math.BigDecimal;

public class ValidBigDecimalConfig implements ConstraintValidator<ValidBigDecimal, BigDecimal> {
    private int precision;
    private int scale;
    private String message;

    @Override
    public void initialize(ValidBigDecimal constraintAnnotation) {
        this.precision = constraintAnnotation.precision();
        this.scale = constraintAnnotation.scale();
        this.message = constraintAnnotation.message();
    }

    @Override
    public boolean isValid(BigDecimal value, ConstraintValidatorContext context) {
        if (value == null) {
            return true;
        }
        int integerPartLength = value.precision() - value.scale();
        boolean isValid = integerPartLength + scale <= precision && value.scale() <= scale;
        if (!isValid) {
            context.disableDefaultConstraintViolation();
            context.buildConstraintViolationWithTemplate(
                    message.isEmpty() ?
                            String.format("The value must have a maximum precision of %d, a maximum scale of %d " +
                                            "and round to an absolute value less than 10^%d.",
                                    precision, scale, precision - scale) : message
            ).addConstraintViolation();
        }
        return isValid;
    }
}
```

## src/main/java/com/nubo/operations/calculation/api/application/config/WebConfig.java

```java
package com.nubo.operations.calculation.api.application.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.i18n.SessionLocaleResolver;

import java.util.Locale;

@Configuration
@RequiredArgsConstructor
public class WebConfig implements WebMvcConfigurer {

    @Bean
    public LocaleResolver localeResolver() {
        SessionLocaleResolver slr = new SessionLocaleResolver();
        slr.setDefaultLocale(Locale.ENGLISH);
        return slr;
    }

}

```

## src/main/java/com/nubo/operations/calculation/api/application/context/GlobalContext.java

```java
package com.nubo.operations.calculation.api.application.context;

import java.util.HashMap;
import java.util.Map;

public class GlobalContext {

    private static final ThreadLocal<Map<String, String>> context = ThreadLocal.withInitial(HashMap::new);

    private GlobalContext() {
    }

    public static void setProperty(String key, String value) {
        context.get().put(key, value);
    }

    public static String getProperty(String key) {
        Object value = context.get().get(key);
        return value != null ? String.valueOf(value) : null;
    }

    public static void remove() {
        context.remove();
    }

}

```

## src/main/java/com/nubo/operations/calculation/api/application/database/NamingStrategyConfig.java

```java
package com.nubo.operations.calculation.api.application.database;

import org.hibernate.boot.model.naming.PhysicalNamingStrategy;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class NamingStrategyConfig {

    @Bean
    public PhysicalNamingStrategy physicalNamingStrategy() {
        return new UpperNamingConfig();
    }

}
```

## src/main/java/com/nubo/operations/calculation/api/application/database/UpperNamingConfig.java

```java
package com.nubo.operations.calculation.api.application.database;

import org.hibernate.boot.model.naming.Identifier;
import org.hibernate.boot.model.naming.PhysicalNamingStrategy;
import org.hibernate.engine.jdbc.env.spi.JdbcEnvironment;

public class UpperNamingConfig implements PhysicalNamingStrategy {

    @Override
    public Identifier toPhysicalCatalogName(Identifier name, JdbcEnvironment context) {
        return convertToUpperCase(name);
    }

    @Override
    public Identifier toPhysicalSchemaName(Identifier name, JdbcEnvironment context) {
        return convertToUpperCase(name);
    }

    @Override
    public Identifier toPhysicalSequenceName(Identifier name, JdbcEnvironment context) {
        return convertToUpperCase(name);
    }

    @Override
    public Identifier toPhysicalTableName(Identifier name, JdbcEnvironment context) {
        return convertToUpperCase(name);
    }

    @Override
    public Identifier toPhysicalColumnName(Identifier name, JdbcEnvironment context) {
        return convertToUpperCase(name);
    }

    private Identifier convertToUpperCase(Identifier identifier) {
        if (identifier == null) {
            return null;
        }
        return new Identifier(identifier.getText().toUpperCase(), identifier.isQuoted());
    }

}
```

## src/main/java/com/nubo/operations/calculation/api/application/filters/GlobalFilter.java

```java
package com.nubo.operations.calculation.api.application.filters;

import com.nubo.operations.calculation.api.application.context.GlobalContext;
import com.nubo.operations.calculation.api.application.util.ApplicationUtils;
import com.nubo.operations.calculation.api.exception.ServiceException;
import com.nubo.operations.calculation.api.exception.error.ErrorCode;
import com.nubo.operations.calculation.api.exception.error.ErrorResponse;
import com.nubo.operations.calculation.api.models.enums.PropertiesEnum;
import com.nubo.operations.calculation.api.models.enums.VersionApiEnum;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.util.ObjectUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.net.InetAddress;
import java.time.LocalDateTime;

@Component
@Order(1)
@Slf4j
public class GlobalFilter extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
            throws ServletException, IOException {
        try {
            String uri = request.getRequestURI();
            if (uri.contains("/v3/api-docs") || uri.contains("/swagger-ui") || uri.contains("/actuator")) {
                chain.doFilter(request, response);
                return;
            }
            String versionPath = this.validateVersionPath(request);
            String clientIpHeader = this.validateClientIpHeader(request);
            String clientUserHeader = this.validateClientUserHeader(request);
            String clientDatetime = this.validateClientDatetimeHeader(request);

            GlobalContext.setProperty(PropertiesEnum.VERSION_API.getValue(), VersionApiEnum.fromValue(versionPath).getValue());
            GlobalContext.setProperty(PropertiesEnum.CLIENT_IP.getValue(), clientIpHeader);
            GlobalContext.setProperty(PropertiesEnum.CLIENT_USER.getValue(), clientUserHeader);
            GlobalContext.setProperty(PropertiesEnum.CLIENT_DATETIME.getValue(), clientDatetime);

            chain.doFilter(request, response);

        } catch (ServiceException ex) {
            handleServiceException(ex, request, response);
        }
    }

    private String validateClientIpHeader(HttpServletRequest request) {
        String clientIp = request.getHeader(PropertiesEnum.CLIENT_IP.getValue());
        if (clientIp == null || clientIp.isEmpty()) {
            throw new ServiceException(ErrorCode.HEADER_CLIENT_IP_REQUIRED, HttpStatus.BAD_REQUEST);
        }
        try {
            InetAddress ip = InetAddress.getByName(clientIp);
            if (!ip.getHostAddress().equals(clientIp)) {
                throw new ServiceException(ErrorCode.HEADER_CLIENT_IP_INVALID, HttpStatus.BAD_REQUEST);
            }
        } catch (Exception e) {
            throw new ServiceException(ErrorCode.HEADER_CLIENT_IP_INVALID, HttpStatus.BAD_REQUEST);
        }
        return clientIp;
    }

    private String validateClientUserHeader(HttpServletRequest request) {
        String clientUser = request.getHeader(PropertiesEnum.CLIENT_USER.getValue());
        if (clientUser == null || clientUser.isEmpty()) {
            throw new ServiceException(ErrorCode.HEADER_CLIENT_USER_REQUIRED, HttpStatus.BAD_REQUEST);
        }
        log.info("----------- Client User: {} ----------", clientUser);
        return clientUser;
    }

    private String validateClientDatetimeHeader(HttpServletRequest request) {
        String clientDatetime = request.getHeader(PropertiesEnum.CLIENT_DATETIME.getValue());
        if (clientDatetime == null || clientDatetime.isEmpty()) {
            throw new ServiceException(ErrorCode.HEADER_CLIENT_DATETIME_REQUIRED, HttpStatus.BAD_REQUEST);
        }
        String datetimePattern = "\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}";
        if (!clientDatetime.matches(datetimePattern)) {
            throw new ServiceException(ErrorCode.HEADER_CLIENT_DATETIME_INVALID, HttpStatus.BAD_REQUEST);
        }
        return clientDatetime;
    }

    private String validateVersionPath(HttpServletRequest request) {
        String requestURI = request.getRequestURI();
        String contextPath = request.getContextPath();
        if (requestURI.startsWith(contextPath)) {
            String pathInfo = requestURI.replace(contextPath.concat("/"), "");
            if (pathInfo.matches("v[1-9]\\d?(/.*)?")) {
                String version = pathInfo.split("/")[0];
                try {
                    return version;
                } catch (IllegalArgumentException e) {
                    throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
                }
            }
        }
        throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
    }

    private void handleServiceException(ServiceException exception, HttpServletRequest request,
                                        HttpServletResponse response) throws IOException {
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        ErrorResponse errorResponse = ErrorResponse.builder()
                .httpCode(String.valueOf(exception.getHttpStatus().value()))
                .httpMethod(request.getMethod())
                .url(request.getRequestURL().toString())
                .errorCode(exception.getErrorCode().getName())
                .errorMessage(exception.getMessage())
                .errorMessageDetail(ObjectUtils.isEmpty(exception.getCause()) ?
                        exception.getMessage() : exception.getCause().getMessage())
                .timestamp(String.valueOf(LocalDateTime.now()))
                .build();
        response.getWriter().write(ApplicationUtils.convertObjectToJson(errorResponse));
        response.setStatus(exception.getHttpStatus().value());

        log.error("Error -> {}", errorResponse);
    }

}



```

## src/main/java/com/nubo/operations/calculation/api/application/interceptors/GlobalInterceptor.java

```java
package com.nubo.operations.calculation.api.application.interceptors;

import com.nubo.operations.calculation.api.application.context.GlobalContext;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

@Component
@Order(2)
@RequiredArgsConstructor
public class GlobalInterceptor implements HandlerInterceptor {

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler,
            Exception ex) {
        GlobalContext.remove();
    }
    
}

```

## src/main/java/com/nubo/operations/calculation/api/application/properties/PropertiesConfig.java

```java
package com.nubo.operations.calculation.api.application.properties;

import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
@Getter
public class PropertiesConfig {

    @Value("${spring.application.name}")
    private String apiName;

}

```

## src/main/java/com/nubo/operations/calculation/api/application/properties/PropertiesContext.java

```java
package com.nubo.operations.calculation.api.application.properties;

import com.nubo.operations.calculation.api.application.context.GlobalContext;
import com.nubo.operations.calculation.api.application.util.ApplicationUtils;
import com.nubo.operations.calculation.api.models.enums.PropertiesEnum;
import org.springframework.util.ObjectUtils;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class PropertiesContext {

    private PropertiesContext() {
    }

    public static String getClientIp() {
        return GlobalContext.getProperty(PropertiesEnum.CLIENT_IP.getValue());
    }

    public static String getClientUser() {
        return GlobalContext.getProperty(PropertiesEnum.CLIENT_USER.getValue());
    }

    public static LocalDateTime getClientDatetime() {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern(ApplicationUtils.getFormatDatetime());
        String clientDatetime = GlobalContext.getProperty(PropertiesEnum.CLIENT_DATETIME.getValue());
        if (ObjectUtils.isEmpty(clientDatetime)) {
            return LocalDateTime.now();
        }
        return LocalDateTime.parse(clientDatetime, formatter);
    }

    public static String getVersion() {
        return GlobalContext.getProperty(PropertiesEnum.VERSION_API.getValue());
    }

}


```

## src/main/java/com/nubo/operations/calculation/api/application/serializers/BigDecimalSerializer.java

```java
package com.nubo.operations.calculation.api.application.serializers;

import java.math.BigDecimal;

import tools.jackson.core.JacksonException;
import tools.jackson.core.JsonGenerator;
import tools.jackson.databind.SerializationContext;
import tools.jackson.databind.ValueSerializer;

public class BigDecimalSerializer extends ValueSerializer<BigDecimal> {

    @Override
    public void serialize(BigDecimal value, JsonGenerator gen, SerializationContext serializers) throws JacksonException {
        if (value != null) {
            gen.writeNumber(value.stripTrailingZeros().toPlainString());
        } else {
            gen.writeNull();
        }
    }
}

```

## src/main/java/com/nubo/operations/calculation/api/application/util/ApplicationUtils.java

```java
package com.nubo.operations.calculation.api.application.util;

import com.nubo.operations.calculation.api.exception.ServiceException;
import com.nubo.operations.calculation.api.exception.error.ErrorCode;

import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import tools.jackson.databind.ObjectMapper;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public final class ApplicationUtils {

    private final ObjectMapper objectMapper;

    private static ObjectMapper MAPPER = new ObjectMapper();
    private static final String FORMAT_DATETIME = "yyyy-MM-dd'T'HH:mm:ss";
    private static final String FORMAT_DATE = "yyyy-MM-dd";

    @PostConstruct
    private void init() {
        MAPPER = this.objectMapper;
    }

    public static String getFormatDatetime() {
        return FORMAT_DATETIME;
    }

    public static String getLocalDateTimeNow() {
        return LocalDateTime.now().format(DateTimeFormatter.ofPattern(ApplicationUtils.getFormatDatetime()));
    }

    public static String convertLocalDateTimeToString(LocalDateTime localDateTime) {
        return localDateTime.format(DateTimeFormatter.ofPattern(ApplicationUtils.getFormatDatetime()));
    }

    public static LocalDateTime convertStringToLocalDateTime(String timeString) {
        return LocalDateTime.parse(timeString, DateTimeFormatter.ofPattern(FORMAT_DATETIME));
    }

    public static LocalDate convertStringToLocalDate(String dateString) {
        return LocalDate.parse(dateString, DateTimeFormatter.ofPattern(FORMAT_DATE));
    }

    public static String convertObjectToJson(Object object) {
        try {
            return MAPPER.writeValueAsString(object);
        } catch (Exception e) {
            throw new ServiceException(ErrorCode.UNEXPECTED, e);
        }
    }

    public static <T> T convertJsonToObject(String json, Class<T> clazz) {
        try {
            return MAPPER.readValue(json, clazz);
        } catch (Exception e) {
            throw new ServiceException(ErrorCode.UNEXPECTED, e);
        }
    }

}

```

## src/main/java/com/nubo/operations/calculation/api/exception/ServiceException.java

```java
package com.nubo.operations.calculation.api.exception;

import com.nubo.operations.calculation.api.exception.error.ErrorCode;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public class ServiceException extends RuntimeException {

    private final ErrorCode errorCode;
    private final HttpStatus httpStatus;

    public ServiceException(ErrorCode errorCode) {
        super(errorCode.getMessage());
        this.errorCode = errorCode;
        this.httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
    }

    public ServiceException(ErrorCode errorCode, HttpStatus httpStatus) {
        super(errorCode.getMessage());
        this.errorCode = errorCode;
        this.httpStatus = httpStatus;
    }

    public ServiceException(ErrorCode errorCode, Throwable throwable) {
        super(errorCode.getMessage(), throwable);
        this.errorCode = errorCode;
        this.httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
    }

    public ServiceException(ErrorCode errorCode, HttpStatus httpStatus, Throwable throwable) {
        super(errorCode.getMessage(), throwable);
        this.errorCode = errorCode;
        this.httpStatus = httpStatus;
    }

    public HttpStatus getHttpStatusOrDefault() {
        return this.httpStatus != null ? this.httpStatus : HttpStatus.INTERNAL_SERVER_ERROR;
    }

}

```

## src/main/java/com/nubo/operations/calculation/api/exception/error/ErrorCode.java

```java
package com.nubo.operations.calculation.api.exception.error;

import lombok.Getter;

@Getter
public enum ErrorCode {

    UNAUTHORIZED("Not unauthorized"),
    FORBIDDEN("Access denied"),
    UNEXPECTED("An unexpected error occurred"),
    METHOD_ARGUMENT_TYPE("Invalid request path"),
    METHOD_NOT_ALLOWED("Http method not allowed"),
    NOT_FOUND("Resource not found"),
    UNSUPPORTED_MEDIA_TYPE("Content Type is not supported"),
    MESSAGE_NOT_READABLE("Error reading the message body request"),
    BAD_REQUEST("Invalid request body"),
    RATE_LIMITING_EXCEEDED("Rate Limiting Exceeded"),
    HEADER_CLIENT_IP_REQUIRED("Header client_ip required"),
    HEADER_CLIENT_IP_INVALID("Header client_ip is invalid"),
    HEADER_CLIENT_USER_REQUIRED("Header client_user is required"),
    HEADER_CLIENT_DATETIME_REQUIRED("Header client_datetime is required"),
    HEADER_CLIENT_DATETIME_INVALID("Header client_datetime is invalid"),
    VERSION_API_NOT_FOUND("Version API not found"),
    TRADE_NOT_FOUND("Trade not found"),
    CALCULATION_NOT_FOUND("Calculation not found"),
    CALCULATION_EXISTS("Calculation already exists"),
    SIDE_NOT_FOUND("Side not found");


    private final String message;

    ErrorCode(String message) {
        this.message = message;
    }

    public String getName() {
        return this.name();
    }

}

```

## src/main/java/com/nubo/operations/calculation/api/exception/error/ErrorResponse.java

```java
package com.nubo.operations.calculation.api.exception.error;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ErrorResponse {

    private String httpCode;
    private String httpMethod;
    private String url;
    private String timestamp;
    private String errorCode;
    private String errorMessage;
    private String errorMessageDetail;
    private List<ErrorValidation> errorDetails;

}

```

## src/main/java/com/nubo/operations/calculation/api/exception/error/ErrorValidation.java

```java
package com.nubo.operations.calculation.api.exception.error;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ErrorValidation {

    private String id;
    private String description;

}

```

## src/main/java/com/nubo/operations/calculation/api/exception/handler/GlobalExceptionHandler.java

```java
package com.nubo.operations.calculation.api.exception.handler;

import com.nubo.operations.calculation.api.application.properties.PropertiesContext;
import com.nubo.operations.calculation.api.exception.ServiceException;
import com.nubo.operations.calculation.api.exception.error.ErrorCode;
import com.nubo.operations.calculation.api.exception.error.ErrorResponse;
import com.nubo.operations.calculation.api.exception.error.ErrorValidation;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.util.ObjectUtils;
import org.springframework.web.HttpMediaTypeNotSupportedException;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;
import org.springframework.web.servlet.resource.NoResourceFoundException;

import java.util.List;

@RestControllerAdvice
@Slf4j
@RequiredArgsConstructor
public class GlobalExceptionHandler {

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handlerGeneralException(Exception exception,
                                                                 HttpServletRequest request) {
        return buildErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, exception, request, ErrorCode.UNEXPECTED);
    }

    @ExceptionHandler(ServiceException.class)
    public ResponseEntity<ErrorResponse> handlerServiceException(ServiceException exception,
                                                                 HttpServletRequest request) {
        HttpStatus httpStatus = exception.getHttpStatus();
        return buildErrorResponse(httpStatus, exception, request, exception.getErrorCode());
    }

    @ExceptionHandler(NoResourceFoundException.class)
    public ResponseEntity<ErrorResponse> handlerNoResourceFoundException(NoResourceFoundException exception,
                                                                         HttpServletRequest request) {
        return buildErrorResponse(HttpStatus.NOT_FOUND, exception, request, ErrorCode.NOT_FOUND);
    }

    @ExceptionHandler(HttpRequestMethodNotSupportedException.class)
    public ResponseEntity<ErrorResponse> handlerHttpRequestMethodNotSupportedException(HttpRequestMethodNotSupportedException exception,
                                                                                       HttpServletRequest request) {
        return buildErrorResponse(HttpStatus.METHOD_NOT_ALLOWED, exception, request, ErrorCode.METHOD_NOT_ALLOWED);
    }

    @ExceptionHandler(MethodArgumentTypeMismatchException.class)
    public ResponseEntity<ErrorResponse> handlerMethodArgumentTypeMismatchException(MethodArgumentTypeMismatchException exception,
                                                                                    HttpServletRequest request) {
        return buildErrorResponse(HttpStatus.BAD_REQUEST, exception, request, ErrorCode.METHOD_ARGUMENT_TYPE);
    }

    @ExceptionHandler(HttpMediaTypeNotSupportedException.class)
    public ResponseEntity<ErrorResponse> handlerHttpMediaTypeNotSupportedException(HttpMediaTypeNotSupportedException exception,
                                                                                   HttpServletRequest request) {
        return buildErrorResponse(HttpStatus.UNSUPPORTED_MEDIA_TYPE, exception, request, ErrorCode.UNSUPPORTED_MEDIA_TYPE);
    }

    @ExceptionHandler(HttpMessageNotReadableException.class)
    public ResponseEntity<ErrorResponse> handlerHttpMessageNotReadableException(HttpMessageNotReadableException exception,
                                                                                HttpServletRequest request) {
        return buildErrorResponse(HttpStatus.BAD_REQUEST, exception, request, ErrorCode.MESSAGE_NOT_READABLE);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorResponse> handlerMethodArgumentNotValidException(MethodArgumentNotValidException exception,
                                                                                HttpServletRequest request) {
        List<ErrorValidation> errors = exception.getBindingResult().getFieldErrors().stream()
                .map(error -> ErrorValidation.builder()
                        .id(error.getField())
                        .description(error.getDefaultMessage())
                        .build())
                .toList();
        return buildErrorResponse(HttpStatus.BAD_REQUEST, exception, request, ErrorCode.BAD_REQUEST, errors);
    }

    private ResponseEntity<ErrorResponse> buildErrorResponse(HttpStatus status, Exception exception,
                                                             HttpServletRequest request, ErrorCode errorCode) {
        return buildErrorResponse(status, exception, request, errorCode, null);
    }

    private ResponseEntity<ErrorResponse> buildErrorResponse(HttpStatus status, Exception exception,
                                                             HttpServletRequest request, ErrorCode errorCode,
                                                             List<ErrorValidation> errorDetails) {
        ErrorResponse errorResponse = ErrorResponse.builder()
                .httpCode(String.valueOf(status.value()))
                .httpMethod(request.getMethod())
                .url(request.getRequestURL().toString())
                .errorCode(errorCode.getName())
                .errorMessage(errorCode.getMessage())
                .errorMessageDetail(ObjectUtils.isEmpty(exception.getCause()) ?
                        exception.getMessage() : exception.getCause().getMessage())
                .timestamp(ObjectUtils.isEmpty(String.valueOf(PropertiesContext.getClientDatetime())) ? null :
                        String.valueOf(PropertiesContext.getClientDatetime()))
                .errorDetails(errorDetails)
                .build();

        log.error("Error -> {}", errorResponse);

        return ResponseEntity.status(status).body(errorResponse);
    }

}

```

## src/main/java/com/nubo/operations/calculation/api/helpers/MapperPageUtil.java

```java
package com.nubo.operations.calculation.api.helpers;

import com.nubo.operations.calculation.api.models.dto.response.PageResponseOutDto;
import org.springframework.data.domain.Page;

import java.util.List;

public final class MapperPageUtil {

    private MapperPageUtil() {
    }

    public static <T, U> PageResponseOutDto<T> pageToPageResponseOutDto(List<T> list, Page<U> page) {
        PageResponseOutDto<T> paginationResponseDto = new PageResponseOutDto<>();
        paginationResponseDto.setContent(list);
        paginationResponseDto.setPageSize(page.getSize());
        paginationResponseDto.setPageNumber(page.getNumber());
        paginationResponseDto.setTotalElements(page.getTotalElements());
        paginationResponseDto.setTotalPages(page.getTotalPages());

        return paginationResponseDto;
    }
}

```

## src/main/java/com/nubo/operations/calculation/api/helpers/MapperUtil.java

```java
package com.nubo.operations.calculation.api.helpers;

import org.springframework.util.ObjectUtils;

import com.nubo.operations.calculation.api.models.dto.response.CalculationOutDto;
import com.nubo.operations.calculation.api.models.dto.response.SettleAccountsOutDto;
import com.nubo.operations.calculation.api.models.dto.response.SideOutDto;
import com.nubo.operations.calculation.api.models.entity.CalculationEntity;
import com.nubo.operations.calculation.api.models.entity.SideEntity;

public final class MapperUtil {

    private MapperUtil() {
    }

    public static CalculationOutDto calculationEntityToCalculationOutDto(CalculationEntity calculationEntity) {
        return CalculationOutDto.builder()
                .tradeId(calculationEntity.getTradeId())
                .fraction(calculationEntity.getFraction())
                .side(ObjectUtils.isEmpty(calculationEntity.getSide()) ? null
                        : sideEntityToSideOutDto(calculationEntity.getSide()))
                .build();
    }

    public static SideOutDto sideEntityToSideOutDto(SideEntity sideEntity) {
        return SideOutDto.builder()
                .id(sideEntity.getId())
                .description(sideEntity.getDescription())
                .build();
    }

    public static SettleAccountsOutDto settleAccountsUtilToSettleAccountsOutDto(SettleAccountsUtil settleAccountsUtil) {
        return SettleAccountsOutDto.builder()
                .amount(settleAccountsUtil.getAmount())
                .commissionAmount(settleAccountsUtil.getCommissionAmount())
                .valTaxAmount(settleAccountsUtil.getValTaxAmount())
                .netAmount(settleAccountsUtil.getNetAmount())
                .transferValue(settleAccountsUtil.getTransferValue())
                .netOutflowTotal(settleAccountsUtil.getNetOutflowTotal())
                .outflowTurnoverValue(settleAccountsUtil.getOutflowTurnoverValue())
                .returnTurnoverValue(settleAccountsUtil.getReturnTurnoverValue())
                .build();
    }
}

```

## src/main/java/com/nubo/operations/calculation/api/helpers/RfMapperUtil.java

```java
package com.nubo.operations.calculation.api.helpers;

import com.nubo.operations.calculation.api.models.dto.response.RfSettleAccountsOutDto;

public final class RfMapperUtil {

    private RfMapperUtil() {
    }

    public static RfSettleAccountsOutDto toOutDto(RfSettleAccountsUtil util) {
        return RfSettleAccountsOutDto.builder()
                .amount(util.getAmount())
                .commissionAmount(util.getCommissionAmount())
                .valTaxAmount(util.getValTaxAmount())
                .netAmount(util.getNetAmount())
                .returnAmount(util.getReturnAmount())
                .build();
    }
}

```

## src/main/java/com/nubo/operations/calculation/api/helpers/RfSettleAccountsUtil.java

```java
package com.nubo.operations.calculation.api.helpers;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.Objects;

import com.nubo.operations.calculation.api.models.enums.CommissionTypeEnum;
import com.nubo.operations.calculation.api.models.enums.SideEnum;

import jakarta.validation.constraints.NotNull;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class RfSettleAccountsUtil {

    private static final int SCALE = 6;
    private static final BigDecimal ONE_HUNDRED = new BigDecimal("100");

    private final BigDecimal quantity;
    private final BigDecimal price;
    private final BigDecimal commission;
    private final CommissionTypeEnum commissionType;
    private final BigDecimal valTax;
    private final SideEnum sideEnum;
    private final boolean taxExempt;
    private final boolean forwardOperation;
    private final BigDecimal forwardPrice;

    public RfSettleAccountsUtil(
            BigDecimal quantity,
            BigDecimal price,
            BigDecimal commission,
            CommissionTypeEnum commissionType,
            BigDecimal valTax,
            @NotNull SideEnum sideEnum,
            Boolean taxExempt,
            Boolean forwardOperation,
            BigDecimal forwardPrice) {
        this.quantity = quantity == null ? BigDecimal.ZERO : quantity;
        this.price = price == null ? BigDecimal.ZERO : price;
        this.commission = commission == null ? BigDecimal.ZERO : commission;
        this.commissionType = commissionType == null ? CommissionTypeEnum.PERCENTAGE : commissionType;
        this.valTax = valTax == null ? BigDecimal.ZERO : valTax;
        this.sideEnum = sideEnum;
        this.taxExempt = Boolean.TRUE.equals(taxExempt);
        this.forwardOperation = Boolean.TRUE.equals(forwardOperation);
        this.forwardPrice = forwardPrice == null ? BigDecimal.ZERO : forwardPrice;
    }

    public BigDecimal getAmount() {
        return this.quantity.multiply(this.price)
                .divide(ONE_HUNDRED, SCALE, RoundingMode.HALF_UP);
    }

    public BigDecimal getCommissionAmount() {
        if (Objects.equals(this.commissionType, CommissionTypeEnum.PRICE)) {
            return getAmount()
                    .subtract(this.quantity.multiply(this.commission)
                            .divide(ONE_HUNDRED, SCALE, RoundingMode.HALF_UP))
                    .setScale(SCALE, RoundingMode.HALF_UP);
        }
        BigDecimal percentage = this.commission.divide(ONE_HUNDRED, SCALE, RoundingMode.HALF_UP);
        return getAmount().multiply(percentage).setScale(SCALE, RoundingMode.HALF_UP);
    }

    public BigDecimal getValTaxAmount() {
        if (this.taxExempt) {
            return BigDecimal.ZERO.setScale(SCALE, RoundingMode.HALF_UP);
        }
        BigDecimal taxPct = this.valTax.divide(ONE_HUNDRED, SCALE, RoundingMode.HALF_UP);
        return getCommissionAmount().multiply(taxPct).setScale(SCALE, RoundingMode.HALF_UP);
    }

    public BigDecimal getNetAmount() {
        if (this.sideEnum == SideEnum.SELL) {
            return getAmount().subtract(getCommissionAmount()).setScale(SCALE, RoundingMode.HALF_UP);
        }
        return getAmount().add(getCommissionAmount()).setScale(SCALE, RoundingMode.HALF_UP);
    }

    public BigDecimal getReturnAmount() {
        if (!this.forwardOperation) {
            return null;
        }
        return this.quantity.multiply(this.forwardPrice)
                .divide(ONE_HUNDRED, SCALE, RoundingMode.HALF_UP);
    }
}

```

## src/main/java/com/nubo/operations/calculation/api/helpers/SettleAccountsUtil.java

```java
package com.nubo.operations.calculation.api.helpers;

import com.nubo.operations.calculation.api.models.enums.SideEnum;
import com.nubo.operations.calculation.api.models.enums.TypeEnum;

import jakarta.validation.constraints.NotNull;
import lombok.extern.slf4j.Slf4j;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.Objects;

@Slf4j
public class SettleAccountsUtil {

    private static final int SCALE = 6;
    private static final BigDecimal ONE_HUNDRED = new BigDecimal("100");

    private final BigDecimal quantity;
    private final BigDecimal price;
    private final BigDecimal commission;
    private final BigDecimal valTax;
    private final SideEnum sideEnum;
    private final BigDecimal forwardPrice;
    private final TypeEnum typeEnum;
    private final BigDecimal volume;

    public SettleAccountsUtil(BigDecimal quantity, BigDecimal price, BigDecimal commission,
            BigDecimal valTax, @NotNull SideEnum sideEnum, BigDecimal forwardPrice, TypeEnum typeEnum, BigDecimal volume) {

        this.quantity = quantity == null ? BigDecimal.ZERO : quantity;
        this.price = price == null ? BigDecimal.ZERO : price;
        this.commission = commission == null ? BigDecimal.ZERO : commission;
        this.valTax = valTax == null ? BigDecimal.ZERO : valTax;
        this.sideEnum = sideEnum;
        this.forwardPrice = forwardPrice == null ? BigDecimal.ZERO : forwardPrice;
        this.typeEnum = typeEnum == null ? TypeEnum.CONTADO_OPERATION : typeEnum;
        this.volume = volume == null ? BigDecimal.ZERO : volume;
    }

    public BigDecimal getAmount() {
        return this.quantity.multiply(price).setScale(SCALE, RoundingMode.HALF_UP);
    }

    public BigDecimal getCommissionAmount() {
        BigDecimal amountValue = getAmount();
        BigDecimal percentageCommission = this.commission.divide(ONE_HUNDRED, SCALE, RoundingMode.HALF_UP);
        return amountValue.multiply(percentageCommission).setScale(SCALE, RoundingMode.HALF_UP);
    }

    public BigDecimal getValTaxAmount() {
        BigDecimal commissionAmount = getCommissionAmount();
        BigDecimal percentageTax = this.valTax.divide(ONE_HUNDRED, SCALE, RoundingMode.HALF_UP);
        return commissionAmount.multiply(percentageTax).setScale(SCALE, RoundingMode.HALF_UP);
    }

    public BigDecimal getNetAmount() {
        if (this.sideEnum.equals(SideEnum.BUY)) {
            return getNetAmountBuy();
        }
        if (this.sideEnum.equals(SideEnum.SELL)) {
            return getNetAmountSell();
        }
        return BigDecimal.ZERO;
    }

    public BigDecimal getTransferValue() {
        if (this.sideEnum.equals(SideEnum.BUY)) {
            return getTransferValueBuy();
        }
        if (this.sideEnum.equals(SideEnum.SELL)) {
            return getTransferValueSell();
        }
        return BigDecimal.ZERO;
    }

    public BigDecimal getNetOutflowTotal() {
        if (this.sideEnum.equals(SideEnum.BUY)) {
            return getNetOutflowTotalBuy();
        }
        if (this.sideEnum.equals(SideEnum.SELL)) {
            return getNetOutflowTotalSell();
        }
        return BigDecimal.ZERO;
    }

    public BigDecimal getOutflowTurnoverValue() {
        if (Objects.equals(this.typeEnum, TypeEnum.REPO_OPERATION)) {
            return this.quantity.multiply(this.forwardPrice);
        } else {
            return BigDecimal.ZERO;
        }
    }

    public BigDecimal getReturnTurnoverValue() {
        if (this.sideEnum.equals(SideEnum.BUY)) {
            return getReturnTurnoverValueBuy();
        }
        if (this.sideEnum.equals(SideEnum.SELL)) {
            return getReturnTurnoverValueSell();
        }
        return BigDecimal.ZERO;
    }

    private BigDecimal getNetAmountSell() {
        BigDecimal amountValue = getAmount();
        BigDecimal commissionAmount = getCommissionAmount();
        BigDecimal valTaxAmount = getValTaxAmount();
        return amountValue.subtract(commissionAmount.add(valTaxAmount));
    }

    private BigDecimal getNetAmountBuy() {
        BigDecimal amountValue = getAmount();
        BigDecimal commissionAmount = getCommissionAmount();
        BigDecimal valTaxAmount = getValTaxAmount();
        return amountValue.add(commissionAmount.add(valTaxAmount));
    }

    private BigDecimal getTransferValueSell() {
        BigDecimal netValue = getNetAmountSell();
        BigDecimal commissionAmount = getCommissionAmount();
        BigDecimal valTaxAmount = getValTaxAmount();
        return netValue.add(commissionAmount).add(valTaxAmount);
    }

    private BigDecimal getTransferValueBuy() {
        BigDecimal netValue = getNetAmountBuy();
        BigDecimal commissionAmount = getCommissionAmount();
        BigDecimal valTaxAmount = getValTaxAmount();
        return netValue.subtract(commissionAmount).subtract(valTaxAmount);
    }

    private BigDecimal getNetOutflowTotalBuy() {
        if (Objects.equals(this.typeEnum, TypeEnum.REPO_OPERATION)) {
            BigDecimal commissionAmount = getCommissionAmount();
            BigDecimal valTaxAmount = getValTaxAmount();
            return this.volume.add(commissionAmount).add(valTaxAmount);
        } else {
            return BigDecimal.ZERO;
        }
    }

    private BigDecimal getNetOutflowTotalSell() {
        if (Objects.equals(this.typeEnum, TypeEnum.REPO_OPERATION)) {
            BigDecimal commissionAmount = getCommissionAmount();
            BigDecimal valTaxAmount = getValTaxAmount();
            return this.volume.subtract(commissionAmount).subtract(valTaxAmount);
        } else {
            return BigDecimal.ZERO;
        }
    }

    private BigDecimal getReturnTurnoverValueBuy() {
        if (Objects.equals(this.typeEnum, TypeEnum.REPO_OPERATION)) {
            BigDecimal commissionAmount = getCommissionAmount();
            BigDecimal valTaxAmount = getValTaxAmount();
            BigDecimal outflowTurnoverValue = getOutflowTurnoverValue();
            return outflowTurnoverValue.add(commissionAmount).add(valTaxAmount);
        } else {
            return BigDecimal.ZERO;
        }
    }

    private BigDecimal getReturnTurnoverValueSell() {
        if (Objects.equals(this.typeEnum, TypeEnum.REPO_OPERATION)) {
            BigDecimal commissionAmount = getCommissionAmount();
            BigDecimal valTaxAmount = getValTaxAmount();
            BigDecimal outflowTurnoverValue = getOutflowTurnoverValue();
            return outflowTurnoverValue.subtract(commissionAmount).subtract(valTaxAmount);
        } else {
            return BigDecimal.ZERO;
        }
    }

}

```

## src/main/java/com/nubo/operations/calculation/api/models/dto/request/CalculationInDto.java

```java
package com.nubo.operations.calculation.api.models.dto.request;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CalculationInDto {

    @NotNull
    @Min(value = 1)
    private Long tradeId;

    @NotNull
    @Min(value = 0)
    @Max(value = 99)
    private Integer fraction;

    @NotNull
    private String sideId;

}

```

## src/main/java/com/nubo/operations/calculation/api/models/dto/request/RfSettleAccountsInDto.java

```java
package com.nubo.operations.calculation.api.models.dto.request;

import java.math.BigDecimal;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.nubo.operations.calculation.api.application.annotations.ValidBigDecimal;
import com.nubo.operations.calculation.api.models.enums.CommissionTypeEnum;
import com.nubo.operations.calculation.api.models.enums.SideEnum;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RfSettleAccountsInDto {

    @NotNull
    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal quantity;

    @NotNull
    @ValidBigDecimal(precision = 16, scale = 6)
    private BigDecimal price;

    @NotNull
    @ValidBigDecimal(precision = 8, scale = 4)
    private BigDecimal commission;

    @NotNull
    @Builder.Default
    private CommissionTypeEnum commissionType = CommissionTypeEnum.PERCENTAGE;

    @NotNull
    @ValidBigDecimal(precision = 6, scale = 4)
    private BigDecimal valTax;

    @NotNull
    @JsonProperty("sideId")
    private SideEnum sideEnum;

    @Builder.Default
    private Boolean taxExempt = Boolean.FALSE;

    @Builder.Default
    private Boolean forwardOperation = Boolean.FALSE;

    @ValidBigDecimal(precision = 16, scale = 6)
    private BigDecimal forwardPrice;
}

```

## src/main/java/com/nubo/operations/calculation/api/models/dto/request/SettleAccountsInDto.java

```java
package com.nubo.operations.calculation.api.models.dto.request;

import java.math.BigDecimal;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.nubo.operations.calculation.api.application.annotations.ValidBigDecimal;
import com.nubo.operations.calculation.api.models.enums.SideEnum;
import com.nubo.operations.calculation.api.models.enums.TypeEnum;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SettleAccountsInDto {

    @NotNull
    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal quantity;

    @NotNull
    @ValidBigDecimal(precision = 16, scale = 6)
    private BigDecimal price;

    @NotNull
    @ValidBigDecimal(precision = 6, scale = 4)
    private BigDecimal commission;

    @NotNull
    @ValidBigDecimal(precision = 6, scale = 4)
    private BigDecimal valTax;

    @NotNull
    @JsonProperty("sideId")
    private SideEnum sideEnum;

    @JsonProperty("typeId")
    private TypeEnum typeEnum;

    @ValidBigDecimal(precision = 12, scale = 6)
    private BigDecimal forwardPrice;

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal volume;

}

```

## src/main/java/com/nubo/operations/calculation/api/models/dto/response/CalculationOutDto.java

```java
package com.nubo.operations.calculation.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.ALWAYS)
public class CalculationOutDto {

    private Long tradeId;

    private Integer fraction;

    private SideOutDto side;

}

```

## src/main/java/com/nubo/operations/calculation/api/models/dto/response/PageResponseOutDto.java

```java
package com.nubo.operations.calculation.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.ALWAYS)
public class PageResponseOutDto<T> {

    private List<T> content;

    private Integer pageSize;

    private Integer pageNumber;

    private Long totalElements;

    private Integer totalPages;
}

```

## src/main/java/com/nubo/operations/calculation/api/models/dto/response/RfSettleAccountsOutDto.java

```java
package com.nubo.operations.calculation.api.models.dto.response;

import java.math.BigDecimal;

import com.fasterxml.jackson.annotation.JsonInclude;
import tools.jackson.databind.annotation.JsonSerialize;
import com.nubo.operations.calculation.api.application.serializers.BigDecimalSerializer;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.ALWAYS)
public class RfSettleAccountsOutDto {

    @JsonSerialize(using = BigDecimalSerializer.class)
    private BigDecimal amount;

    @JsonSerialize(using = BigDecimalSerializer.class)
    private BigDecimal commissionAmount;

    @JsonSerialize(using = BigDecimalSerializer.class)
    private BigDecimal valTaxAmount;

    @JsonSerialize(using = BigDecimalSerializer.class)
    private BigDecimal netAmount;

    @JsonSerialize(using = BigDecimalSerializer.class)
    private BigDecimal returnAmount;
}

```

## src/main/java/com/nubo/operations/calculation/api/models/dto/response/SettleAccountsOutDto.java

```java
package com.nubo.operations.calculation.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import tools.jackson.databind.annotation.JsonSerialize;
import com.nubo.operations.calculation.api.application.serializers.BigDecimalSerializer;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.ALWAYS)
public class SettleAccountsOutDto {

    @JsonSerialize(using = BigDecimalSerializer.class)
    private BigDecimal amount;

    @JsonSerialize(using = BigDecimalSerializer.class)
    private BigDecimal commissionAmount;

    @JsonSerialize(using = BigDecimalSerializer.class)
    private BigDecimal valTaxAmount;

    @JsonSerialize(using = BigDecimalSerializer.class)
    private BigDecimal netAmount;

    @JsonSerialize(using = BigDecimalSerializer.class)
    private BigDecimal transferValue;

    @JsonSerialize(using = BigDecimalSerializer.class)
    private BigDecimal netOutflowTotal;

    @JsonSerialize(using = BigDecimalSerializer.class)
    private BigDecimal outflowTurnoverValue;

    @JsonSerialize(using = BigDecimalSerializer.class)
    private BigDecimal returnTurnoverValue;

}

```

## src/main/java/com/nubo/operations/calculation/api/models/dto/response/SideOutDto.java

```java
package com.nubo.operations.calculation.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.ALWAYS)
public class SideOutDto {

    private String id;

    private String description;

}

```

## src/main/java/com/nubo/operations/calculation/api/models/dto/response/StatusOutDto.java

```java
package com.nubo.operations.calculation.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.ALWAYS)
public class StatusOutDto {

    private Long id;

    private String description;

    private String category;
}

```

## src/main/java/com/nubo/operations/calculation/api/models/entity/CalculationEntity.java

```java
package com.nubo.operations.calculation.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@IdClass(CalculationKey.class)
@Table(name = "\"CALCULATION\"", schema = "\"NUANBODB\"")
public class CalculationEntity {

    @Id
    @Column(name = "\"TRADE_ID\"", nullable = false)
    private Long tradeId;

    @Id
    @Column(name = "\"FRACTION\"", nullable = false)
    private Integer fraction;

    @Id
    @ManyToOne
    @JoinColumn(name = "\"SIDE_ID\"", nullable = false)
    private SideEntity side;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CalculationEntity that = (CalculationEntity) o;
        return tradeId.equals(that.tradeId) && fraction.equals(that.fraction) && side.equals(that.side);
    }

    @Override
    public int hashCode() {
        int result = tradeId != null ? tradeId.hashCode() : 0;
        result = 31 * result + (fraction != null ? fraction.hashCode() : 0);
        result = 31 * result + (side != null ? side.hashCode() : 0);
        return result;
    }

}

```

## src/main/java/com/nubo/operations/calculation/api/models/entity/CalculationKey.java

```java
package com.nubo.operations.calculation.api.models.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CalculationKey implements Serializable {

    private Long tradeId;

    private Integer fraction;

    private String side;

}
```

## src/main/java/com/nubo/operations/calculation/api/models/entity/SideEntity.java

```java
package com.nubo.operations.calculation.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import java.util.Objects;
import lombok.NoArgsConstructor;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"SIDE\"", schema = "\"NUANBODB\"")
public class SideEntity {

    @Id
    @Column(name = "\"SIDE_ID\"", length = 2)
    private String id;

    @Column(name = "\"DESCRIPTION\"", length = 80)
    private String description;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        SideEntity that = (SideEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/calculation/api/models/entity/StatusEntity.java

```java
package com.nubo.operations.calculation.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.util.Objects;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"STATUS\"", schema = "\"NUANBODB\"")
public class StatusEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"STATUS_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"DESCRIPTION\"", length = 80)
    private String description;

    @Column(name = "\"CATEGORY\"", length = 30)
    private String category;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        StatusEntity that = (StatusEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

}

```

## src/main/java/com/nubo/operations/calculation/api/models/entity/TradeEntity.java

```java
package com.nubo.operations.calculation.api.models.entity;

import java.math.BigDecimal;
import java.util.Objects;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"TRADE\"", schema = "\"NUANBODB\"")
public class TradeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"TRADE_ID\"")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "\"TYPE_ID\"")
    private TypeEntity type;

    @Column(name = "\"QUANTITY\"", precision = 16, scale = 4, nullable = false)
    private BigDecimal quantity;

    @Column(name = "\"PRICE\"", precision = 16, scale = 6, nullable = false)
    private BigDecimal price;

    @Column(name = "\"FORWARD_PRICE\"", precision = 12, scale = 6)
    private BigDecimal forwardPrice;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        TradeEntity that = (TradeEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

}

```

## src/main/java/com/nubo/operations/calculation/api/models/entity/TypeEntity.java

```java
package com.nubo.operations.calculation.api.models.entity;

import java.util.Objects;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"TYPE\"", schema = "\"NUANBODB\"")
public class TypeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"TYPE_ID\"")
    private Long id;

    @Column(name = "\"DESCRIPTION\"", length = 80, nullable = false)
    private String description;

    @Column(name = "\"CATEGORY\"", length = 30, nullable = false)
    private String category;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TypeEntity that = (TypeEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/calculation/api/models/enums/CommissionTypeEnum.java

```java
package com.nubo.operations.calculation.api.models.enums;

import java.util.Arrays;
import java.util.Locale;
import java.util.Objects;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum CommissionTypeEnum {

    PERCENTAGE("PERCENTAGE"),
    PRICE("PRICE");

    private final String value;

    @JsonValue
    public String getValue() {
        return value;
    }

    @JsonCreator
    public static CommissionTypeEnum fromValue(String value) {
        if (value == null || value.isBlank()) {
            return PERCENTAGE;
        }
        String normalized = value.trim().toUpperCase(Locale.ROOT);
        return Arrays.stream(values())
                .filter(item -> Objects.equals(item.value, normalized))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Commission type not implemented: " + value));
    }
}

```

## src/main/java/com/nubo/operations/calculation/api/models/enums/PropertiesEnum.java

```java
package com.nubo.operations.calculation.api.models.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Arrays;

@Getter
@RequiredArgsConstructor
public enum PropertiesEnum {

    CLIENT_IP("client_ip"),
    CLIENT_USER("client_user"),
    CLIENT_DATETIME("client_datetime"),
    VERSION_API("version_api");

    private final String value;

    @JsonValue
    public String getValue() {
        return value;
    }

    @JsonCreator
    public static PropertiesEnum fromValue(String value) {
        return Arrays.stream(PropertiesEnum.values())
                .filter(status -> status.value.equalsIgnoreCase(value))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Unknown value: " + value));
    }

    @Converter(autoApply = true)
    public static class PropertiesEnumConverter implements AttributeConverter<PropertiesEnum, String> {

        @Override
        public String convertToDatabaseColumn(PropertiesEnum status) {
            return status != null ? status.getValue() : null;
        }

        @Override
        public PropertiesEnum convertToEntityAttribute(String dbData) {
            return dbData != null ? PropertiesEnum.fromValue(dbData) : null;
        }
    }

}

```

## src/main/java/com/nubo/operations/calculation/api/models/enums/SideEnum.java

```java
package com.nubo.operations.calculation.api.models.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Arrays;
import java.util.Objects;

@Getter
@RequiredArgsConstructor
public enum SideEnum {

    BUY("1", "COMPRA"),
    SELL("2", "VENTA");

    private final String id;
    private final String description;

    @JsonValue
    public String getId() {
        return id;
    }

    @JsonCreator
    public static SideEnum fromId(String id) {
        return Arrays.stream(SideEnum.values())
                .filter(side -> Objects.equals(side.id, id))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Side not implemented, id: " + id));
    }
}

```

## src/main/java/com/nubo/operations/calculation/api/models/enums/TypeEnum.java

```java
package com.nubo.operations.calculation.api.models.enums;

import java.util.Arrays;
import java.util.Objects;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum TypeEnum {

    REPO_OPERATION(61L, "REPO"),
    CONTADO_OPERATION(60L, "CONTADO"),
    OTHER(0L, "OTHER");

    private final Long id;
    private final String description;

    @JsonValue
    public Long getId() {
        return id;
    }

    @JsonCreator
    public static TypeEnum fromId(Long id) {
        return Arrays.stream(TypeEnum.values())
                .filter(type -> Objects.equals(type.id, id))
                .findFirst()
                .orElse(OTHER);
    }

}

```

## src/main/java/com/nubo/operations/calculation/api/models/enums/VersionApiEnum.java

```java
package com.nubo.operations.calculation.api.models.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Arrays;

@Getter
@RequiredArgsConstructor
public enum VersionApiEnum {

    V1("v1"),
    V2("v2"),
    VERSION_NOT_IMPLEMENTED("VERSION_NOT_IMPLEMENTED");

    private final String value;

    @JsonValue
    public String getValue() {
        return value;
    }

    @JsonCreator
    public static VersionApiEnum fromValue(String value) {
        return Arrays.stream(VersionApiEnum.values())
                .filter(version -> version.value.equalsIgnoreCase(value))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Version not implemented: " + value));
    }

    @Converter(autoApply = true)
    public static class VersionApiEnumConverter implements AttributeConverter<VersionApiEnum, String> {
        @Override
        public String convertToDatabaseColumn(VersionApiEnum status) {
            return status != null ? status.getValue() : null;
        }

        @Override
        public VersionApiEnum convertToEntityAttribute(String dbData) {
            return dbData != null ? VersionApiEnum.fromValue(dbData) : null;
        }
    }

}

```

## src/main/java/com/nubo/operations/calculation/api/repository/CalculationRepository.java

```java
package com.nubo.operations.calculation.api.repository;

import com.nubo.operations.calculation.api.models.entity.CalculationEntity;
import com.nubo.operations.calculation.api.models.entity.CalculationKey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface CalculationRepository extends JpaRepository<CalculationEntity, CalculationKey>,
        JpaSpecificationExecutor<CalculationEntity> {
}

```

## src/main/java/com/nubo/operations/calculation/api/repository/SideRepository.java

```java
package com.nubo.operations.calculation.api.repository;

import com.nubo.operations.calculation.api.models.entity.SideEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SideRepository extends JpaRepository<SideEntity, String> {
}


```

## src/main/java/com/nubo/operations/calculation/api/repository/StatusRepository.java

```java
package com.nubo.operations.calculation.api.repository;

import com.nubo.operations.calculation.api.models.entity.StatusEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StatusRepository extends JpaRepository<StatusEntity, Long> {
}


```

## src/main/java/com/nubo/operations/calculation/api/repository/TradeRepository.java

```java
package com.nubo.operations.calculation.api.repository;

import com.nubo.operations.calculation.api.models.entity.TradeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface TradeRepository extends JpaRepository<TradeEntity, Long>, JpaSpecificationExecutor<TradeEntity> {
}

```

## src/main/java/com/nubo/operations/calculation/api/service/CalculationService.java

```java
package com.nubo.operations.calculation.api.service;

import com.nubo.operations.calculation.api.models.dto.request.SettleAccountsInDto;
import com.nubo.operations.calculation.api.models.dto.response.SettleAccountsOutDto;

public interface CalculationService {

    SettleAccountsOutDto settleAccounts(SettleAccountsInDto settleAccountsInDto);

}

```

## src/main/java/com/nubo/operations/calculation/api/service/RfCalculationService.java

```java
package com.nubo.operations.calculation.api.service;

import com.nubo.operations.calculation.api.models.dto.request.RfSettleAccountsInDto;
import com.nubo.operations.calculation.api.models.dto.response.RfSettleAccountsOutDto;

public interface RfCalculationService {

    RfSettleAccountsOutDto settleAccounts(RfSettleAccountsInDto request);
}

```

## src/main/java/com/nubo/operations/calculation/api/service/impl/CalculationServiceImpl.java

```java
package com.nubo.operations.calculation.api.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.concurrent.TimeUnit;

import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;
import org.springframework.util.StopWatch;

import com.nubo.operations.calculation.api.application.properties.PropertiesContext;
import com.nubo.operations.calculation.api.exception.ServiceException;
import com.nubo.operations.calculation.api.exception.error.ErrorCode;
import com.nubo.operations.calculation.api.helpers.MapperUtil;
import com.nubo.operations.calculation.api.helpers.SettleAccountsUtil;
import com.nubo.operations.calculation.api.models.dto.request.SettleAccountsInDto;
import com.nubo.operations.calculation.api.models.dto.response.SettleAccountsOutDto;
import com.nubo.operations.calculation.api.models.entity.CalculationEntity;
import com.nubo.operations.calculation.api.models.entity.SideEntity;
import com.nubo.operations.calculation.api.models.entity.TradeEntity;
import com.nubo.operations.calculation.api.models.enums.VersionApiEnum;
import com.nubo.operations.calculation.api.repository.SideRepository;
import com.nubo.operations.calculation.api.repository.TradeRepository;
import com.nubo.operations.calculation.api.service.CalculationService;

import jakarta.persistence.criteria.Predicate;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class CalculationServiceImpl implements CalculationService {

    private final TradeRepository tradeRepository;
    private final SideRepository sideRepository;

    @Override
    public SettleAccountsOutDto settleAccounts(SettleAccountsInDto settleAccountsInDto) {
        StopWatch stopWatch = new StopWatch("assignment-calculation");
        long totalStartNanos = System.nanoTime();
        String result = "ERROR";
        try {
            stopWatch.start("validation");
            VersionApiEnum version = Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion()));
            stopWatch.stop();
            if (version == VersionApiEnum.V1) {
                SettleAccountsOutDto response = settleAccountsV1(settleAccountsInDto, stopWatch);
                result = "SUCCESS";
                return response;
            }
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        } finally {
            if (stopWatch.isRunning()) {
                stopWatch.stop();
            }
            logSettleAccountsPerformance(settleAccountsInDto, result, totalStartNanos, stopWatch);
        }
    }

    private SettleAccountsOutDto settleAccountsV1(SettleAccountsInDto settleAccountsInDto, StopWatch stopWatch) {
        log.info("Start method settleAccountsV1, side -> {}", settleAccountsInDto.getSideEnum());

        stopWatch.start("calculation-and-mapping");
        SettleAccountsUtil settleAccountsUtil = new SettleAccountsUtil(settleAccountsInDto.getQuantity(),
                settleAccountsInDto.getPrice(), settleAccountsInDto.getCommission(),
                settleAccountsInDto.getValTax(), settleAccountsInDto.getSideEnum(),
                settleAccountsInDto.getForwardPrice(),
                settleAccountsInDto.getTypeEnum(), settleAccountsInDto.getVolume());

        SettleAccountsOutDto settleAccountsOutDto = MapperUtil
                .settleAccountsUtilToSettleAccountsOutDto(settleAccountsUtil);
        stopWatch.stop();

        log.info("End method settleAccountsV1");
        return settleAccountsOutDto;
    }

    private void logSettleAccountsPerformance(SettleAccountsInDto request, String result,
            long totalStartNanos, StopWatch stopWatch) {
        log.info(
                "PERF_ASSIGNMENT service=calculos operation=settleAccounts result={} side={} fractionCount=1 totalMs={} validationMs={} calculationAndMappingMs={} dbQueryCount=0",
                result,
                request == null ? null : request.getSideEnum(),
                TimeUnit.NANOSECONDS.toMillis(System.nanoTime() - totalStartNanos),
                taskMillis(stopWatch, "validation"),
                taskMillis(stopWatch, "calculation-and-mapping"));
    }

    private long taskMillis(StopWatch stopWatch, String taskName) {
        for (StopWatch.TaskInfo taskInfo : stopWatch.getTaskInfo()) {
            if (taskName.equals(taskInfo.getTaskName())) {
                return taskInfo.getTimeMillis();
            }
        }
        return 0;
    }

    private Specification<CalculationEntity> calculationEntitySpecification(Long tradeId) {
        return (root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();
            if (!ObjectUtils.isEmpty(tradeId)) {
                predicates.add(criteriaBuilder.equal(root.get("tradeId"), tradeId));
            }
            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }

    private TradeEntity validateTrade(Long tradeId) {
        return tradeRepository.findById(tradeId)
                .orElseThrow(() -> new ServiceException(ErrorCode.TRADE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private SideEntity validateSide(String sideId) {
        return sideRepository.findById(sideId)
                .orElseThrow(() -> new ServiceException(ErrorCode.SIDE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }
}

```

## src/main/java/com/nubo/operations/calculation/api/service/impl/RfCalculationServiceImpl.java

```java
package com.nubo.operations.calculation.api.service.impl;

import java.util.Objects;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.nubo.operations.calculation.api.application.properties.PropertiesContext;
import com.nubo.operations.calculation.api.exception.ServiceException;
import com.nubo.operations.calculation.api.exception.error.ErrorCode;
import com.nubo.operations.calculation.api.helpers.RfMapperUtil;
import com.nubo.operations.calculation.api.helpers.RfSettleAccountsUtil;
import com.nubo.operations.calculation.api.models.dto.request.RfSettleAccountsInDto;
import com.nubo.operations.calculation.api.models.dto.response.RfSettleAccountsOutDto;
import com.nubo.operations.calculation.api.models.enums.VersionApiEnum;
import com.nubo.operations.calculation.api.service.RfCalculationService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class RfCalculationServiceImpl implements RfCalculationService {

    @Override
    public RfSettleAccountsOutDto settleAccounts(RfSettleAccountsInDto request) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return settleAccountsV1(request);
        }
        throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
    }

    private RfSettleAccountsOutDto settleAccountsV1(RfSettleAccountsInDto request) {
        log.info("Start method settleAccountsV1 (RF), request -> {}", request);

        RfSettleAccountsUtil util = new RfSettleAccountsUtil(
                request.getQuantity(),
                request.getPrice(),
                request.getCommission(),
                request.getCommissionType(),
                request.getValTax(),
                request.getSideEnum(),
                request.getTaxExempt(),
                request.getForwardOperation(),
                request.getForwardPrice());

        RfSettleAccountsOutDto response = RfMapperUtil.toOutDto(util);
        log.info("End method settleAccountsV1 (RF), response -> {}", response);
        return response;
    }
}

```

## src/main/java/com/nubo/operations/calculation/api/web/controller/CalculationRestController.java

```java
package com.nubo.operations.calculation.api.web.controller;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nubo.operations.calculation.api.models.dto.request.SettleAccountsInDto;
import com.nubo.operations.calculation.api.models.dto.response.SettleAccountsOutDto;
import com.nubo.operations.calculation.api.service.CalculationService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@Tag(name = "RV Calculation")
@RequestMapping("/{version}/calculation")
@RestController
@RequiredArgsConstructor
public class CalculationRestController {

    private final CalculationService calculationService;

    @Operation(summary = "Settle Accounts", description = "Settle Accounts")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = SettleAccountsOutDto.class)))})
    @PostMapping("/settle-accounts")
    public ResponseEntity<SettleAccountsOutDto> settleAccounts(@Valid @RequestBody SettleAccountsInDto settleAccountsInDto) {
        return ResponseEntity.ok(calculationService.settleAccounts(settleAccountsInDto));
    }

}

```

## src/main/java/com/nubo/operations/calculation/api/web/controller/RfCalculationRestController.java

```java
package com.nubo.operations.calculation.api.web.controller;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nubo.operations.calculation.api.models.dto.request.RfSettleAccountsInDto;
import com.nubo.operations.calculation.api.models.dto.response.RfSettleAccountsOutDto;
import com.nubo.operations.calculation.api.service.RfCalculationService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@Tag(name = "RF Calculation")
@RequestMapping("/{version}/rf/calculation")
@RestController
@RequiredArgsConstructor
public class RfCalculationRestController {

    private final RfCalculationService rfCalculationService;

    @Operation(summary = "Settle accounts (Fixed Income)")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response",
                    content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                            schema = @Schema(implementation = RfSettleAccountsOutDto.class)))
    })
    @PostMapping("/settle-accounts")
    public ResponseEntity<RfSettleAccountsOutDto> settleAccounts(
            @Valid @RequestBody RfSettleAccountsInDto request) {
        return ResponseEntity.ok(rfCalculationService.settleAccounts(request));
    }
}

```
