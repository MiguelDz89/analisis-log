# nbo-png-perfiles-cmd-back

Código fuente de producción y configuraciones. Captura local: 28/10/2026.

Incluye 68 archivos Java y 16 archivos de configuración, recursos y compilación/despliegue.

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
17. `src/main/java/com/nubo/profile/cmd/api/ProfileCmdApiApplication.java`
18. `src/main/java/com/nubo/profile/cmd/api/application/annotations/ValidBigDecimal.java`
19. `src/main/java/com/nubo/profile/cmd/api/application/config/SwaggerConfig.java`
20. `src/main/java/com/nubo/profile/cmd/api/application/config/ValidBigDecimalConfig.java`
21. `src/main/java/com/nubo/profile/cmd/api/application/config/WebConfig.java`
22. `src/main/java/com/nubo/profile/cmd/api/application/context/GlobalContext.java`
23. `src/main/java/com/nubo/profile/cmd/api/application/database/NamingStrategyConfig.java`
24. `src/main/java/com/nubo/profile/cmd/api/application/database/UpperNamingConfig.java`
25. `src/main/java/com/nubo/profile/cmd/api/application/filters/GlobalFilter.java`
26. `src/main/java/com/nubo/profile/cmd/api/application/interceptors/GlobalInterceptor.java`
27. `src/main/java/com/nubo/profile/cmd/api/application/properties/PropertiesConfig.java`
28. `src/main/java/com/nubo/profile/cmd/api/application/properties/PropertiesContext.java`
29. `src/main/java/com/nubo/profile/cmd/api/application/util/ApplicationUtils.java`
30. `src/main/java/com/nubo/profile/cmd/api/exception/ServiceException.java`
31. `src/main/java/com/nubo/profile/cmd/api/exception/error/ErrorCode.java`
32. `src/main/java/com/nubo/profile/cmd/api/exception/error/ErrorResponse.java`
33. `src/main/java/com/nubo/profile/cmd/api/exception/error/ErrorValidation.java`
34. `src/main/java/com/nubo/profile/cmd/api/exception/handler/GlobalExceptionHandler.java`
35. `src/main/java/com/nubo/profile/cmd/api/helpers/MapperUtil.java`
36. `src/main/java/com/nubo/profile/cmd/api/models/dto/request/MenuConfigurationInDto.java`
37. `src/main/java/com/nubo/profile/cmd/api/models/dto/request/ProfileInDto.java`
38. `src/main/java/com/nubo/profile/cmd/api/models/dto/request/ProfileUpdateInDto.java`
39. `src/main/java/com/nubo/profile/cmd/api/models/dto/response/CategoryOutDto.java`
40. `src/main/java/com/nubo/profile/cmd/api/models/dto/response/CountryOutDto.java`
41. `src/main/java/com/nubo/profile/cmd/api/models/dto/response/EnterpriseGroupOutDto.java`
42. `src/main/java/com/nubo/profile/cmd/api/models/dto/response/IdentificationTypeOutDto.java`
43. `src/main/java/com/nubo/profile/cmd/api/models/dto/response/MenuAssignmentOutDto.java`
44. `src/main/java/com/nubo/profile/cmd/api/models/dto/response/MenuConfigurationOutDto.java`
45. `src/main/java/com/nubo/profile/cmd/api/models/dto/response/ModuleOutDto.java`
46. `src/main/java/com/nubo/profile/cmd/api/models/dto/response/ParticipantOutDto.java`
47. `src/main/java/com/nubo/profile/cmd/api/models/dto/response/ProfileOutDto.java`
48. `src/main/java/com/nubo/profile/cmd/api/models/dto/response/ProfileValidateOutDto.java`
49. `src/main/java/com/nubo/profile/cmd/api/models/dto/response/ScreenActionOutDto.java`
50. `src/main/java/com/nubo/profile/cmd/api/models/dto/response/ScreenOutDto.java`
51. `src/main/java/com/nubo/profile/cmd/api/models/dto/response/StatusOutDto.java`
52. `src/main/java/com/nubo/profile/cmd/api/models/dto/response/SubmoduleOutDto.java`
53. `src/main/java/com/nubo/profile/cmd/api/models/dto/response/TypeOutDto.java`
54. `src/main/java/com/nubo/profile/cmd/api/models/entity/CategoryEntity.java`
55. `src/main/java/com/nubo/profile/cmd/api/models/entity/CountryEntity.java`
56. `src/main/java/com/nubo/profile/cmd/api/models/entity/EnterpriseGroupEntity.java`
57. `src/main/java/com/nubo/profile/cmd/api/models/entity/IdentificationTypeEntity.java`
58. `src/main/java/com/nubo/profile/cmd/api/models/entity/MenuAssignmentEntity.java`
59. `src/main/java/com/nubo/profile/cmd/api/models/entity/MenuConfigurationEntity.java`
60. `src/main/java/com/nubo/profile/cmd/api/models/entity/ModuleEntity.java`
61. `src/main/java/com/nubo/profile/cmd/api/models/entity/ParticipantEntity.java`
62. `src/main/java/com/nubo/profile/cmd/api/models/entity/ProfileEntity.java`
63. `src/main/java/com/nubo/profile/cmd/api/models/entity/ProfileUserNuboEntity.java`
64. `src/main/java/com/nubo/profile/cmd/api/models/entity/ProfileUserNuboKey.java`
65. `src/main/java/com/nubo/profile/cmd/api/models/entity/ScreenActionEntity.java`
66. `src/main/java/com/nubo/profile/cmd/api/models/entity/ScreenEntity.java`
67. `src/main/java/com/nubo/profile/cmd/api/models/entity/StatusEntity.java`
68. `src/main/java/com/nubo/profile/cmd/api/models/entity/SubmoduleEntity.java`
69. `src/main/java/com/nubo/profile/cmd/api/models/entity/TypeEntity.java`
70. `src/main/java/com/nubo/profile/cmd/api/models/enums/PropertiesEnum.java`
71. `src/main/java/com/nubo/profile/cmd/api/models/enums/StatusProfileEnum.java`
72. `src/main/java/com/nubo/profile/cmd/api/models/enums/TypeEnum.java`
73. `src/main/java/com/nubo/profile/cmd/api/models/enums/VersionApiEnum.java`
74. `src/main/java/com/nubo/profile/cmd/api/repository/MenuAssignmentRepository.java`
75. `src/main/java/com/nubo/profile/cmd/api/repository/MenuConfigurationRepository.java`
76. `src/main/java/com/nubo/profile/cmd/api/repository/ParticipantRepository.java`
77. `src/main/java/com/nubo/profile/cmd/api/repository/ProfileRepository.java`
78. `src/main/java/com/nubo/profile/cmd/api/repository/ProfileUserNuboRepository.java`
79. `src/main/java/com/nubo/profile/cmd/api/repository/ScreenActionRepository.java`
80. `src/main/java/com/nubo/profile/cmd/api/repository/StatusRepository.java`
81. `src/main/java/com/nubo/profile/cmd/api/repository/TypeRepository.java`
82. `src/main/java/com/nubo/profile/cmd/api/service/ProfileService.java`
83. `src/main/java/com/nubo/profile/cmd/api/service/impl/ProfileServiceImpl.java`
84. `src/main/java/com/nubo/profile/cmd/api/web/controller/ProfileRestController.java`

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
# Apache Maven Wrapper startup batch script, version 3.3.4
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

scriptDir="$(dirname "$0")"
scriptName="$(basename "$0")"

# parse distributionUrl and optional distributionSha256Sum, requires .mvn/wrapper/maven-wrapper.properties
while IFS="=" read -r key value; do
  case "${key-}" in
  distributionUrl) distributionUrl=$(trim "${value-}") ;;
  distributionSha256Sum) distributionSha256Sum=$(trim "${value-}") ;;
  esac
done <"$scriptDir/.mvn/wrapper/maven-wrapper.properties"
[ -n "${distributionUrl-}" ] || die "cannot read distributionUrl property in $scriptDir/.mvn/wrapper/maven-wrapper.properties"

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
*) MVN_CMD="mvn${scriptName#mvnw}" _MVNW_REPO_PATTERN=/org/apache/maven/ ;;
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
    if echo "$distributionSha256Sum  $TMP_DOWNLOAD_DIR/$distributionUrlName" | sha256sum -c - >/dev/null 2>&1; then
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

# Find the actual extracted directory name (handles snapshots where filename != directory name)
actualDistributionDir=""

# First try the expected directory name (for regular distributions)
if [ -d "$TMP_DOWNLOAD_DIR/$distributionUrlNameMain" ]; then
  if [ -f "$TMP_DOWNLOAD_DIR/$distributionUrlNameMain/bin/$MVN_CMD" ]; then
    actualDistributionDir="$distributionUrlNameMain"
  fi
fi

# If not found, search for any directory with the Maven executable (for snapshots)
if [ -z "$actualDistributionDir" ]; then
  # enable globbing to iterate over items
  set +f
  for dir in "$TMP_DOWNLOAD_DIR"/*; do
    if [ -d "$dir" ]; then
      if [ -f "$dir/bin/$MVN_CMD" ]; then
        actualDistributionDir="$(basename "$dir")"
        break
      fi
    fi
  done
  set -f
fi

if [ -z "$actualDistributionDir" ]; then
  verbose "Contents of $TMP_DOWNLOAD_DIR:"
  verbose "$(ls -la "$TMP_DOWNLOAD_DIR")"
  die "Could not find Maven distribution directory in extracted archive"
fi

verbose "Found extracted Maven distribution directory: $actualDistributionDir"
printf %s\\n "$distributionUrl" >"$TMP_DOWNLOAD_DIR/$actualDistributionDir/mvnw.url"
mv -- "$TMP_DOWNLOAD_DIR/$actualDistributionDir" "$MAVEN_HOME" || [ -d "$MAVEN_HOME" ] || die "fail to move MAVEN_HOME"

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
@REM Apache Maven Wrapper startup batch script, version 3.3.4
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
@IF NOT "%__MVNW_CMD__%"=="" ("%__MVNW_CMD__%" %*)
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
  $MVNW_REPO_PATTERN = if ($USE_MVND -eq $False) { "/org/apache/maven/" } else { "/maven/mvnd/" }
  $distributionUrl = "$env:MVNW_REPOURL$MVNW_REPO_PATTERN$($distributionUrl -replace "^.*$MVNW_REPO_PATTERN",'')"
}
$distributionUrlName = $distributionUrl -replace '^.*/',''
$distributionUrlNameMain = $distributionUrlName -replace '\.[^.]*$','' -replace '-bin$',''

$MAVEN_M2_PATH = "$HOME/.m2"
if ($env:MAVEN_USER_HOME) {
  $MAVEN_M2_PATH = "$env:MAVEN_USER_HOME"
}

if (-not (Test-Path -Path $MAVEN_M2_PATH)) {
    New-Item -Path $MAVEN_M2_PATH -ItemType Directory | Out-Null
}

$MAVEN_WRAPPER_DISTS = $null
if ((Get-Item $MAVEN_M2_PATH).Target[0] -eq $null) {
  $MAVEN_WRAPPER_DISTS = "$MAVEN_M2_PATH/wrapper/dists"
} else {
  $MAVEN_WRAPPER_DISTS = (Get-Item $MAVEN_M2_PATH).Target[0] + "/wrapper/dists"
}

$MAVEN_HOME_PARENT = "$MAVEN_WRAPPER_DISTS/$distributionUrlNameMain"
$MAVEN_HOME_NAME = ([System.Security.Cryptography.SHA256]::Create().ComputeHash([byte[]][char[]]$distributionUrl) | ForEach-Object {$_.ToString("x2")}) -join ''
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

# Find the actual extracted directory name (handles snapshots where filename != directory name)
$actualDistributionDir = ""

# First try the expected directory name (for regular distributions)
$expectedPath = Join-Path "$TMP_DOWNLOAD_DIR" "$distributionUrlNameMain"
$expectedMvnPath = Join-Path "$expectedPath" "bin/$MVN_CMD"
if ((Test-Path -Path $expectedPath -PathType Container) -and (Test-Path -Path $expectedMvnPath -PathType Leaf)) {
  $actualDistributionDir = $distributionUrlNameMain
}

# If not found, search for any directory with the Maven executable (for snapshots)
if (!$actualDistributionDir) {
  Get-ChildItem -Path "$TMP_DOWNLOAD_DIR" -Directory | ForEach-Object {
    $testPath = Join-Path $_.FullName "bin/$MVN_CMD"
    if (Test-Path -Path $testPath -PathType Leaf) {
      $actualDistributionDir = $_.Name
    }
  }
}

if (!$actualDistributionDir) {
  Write-Error "Could not find Maven distribution directory in extracted archive"
}

Write-Verbose "Found extracted Maven distribution directory: $actualDistributionDir"
Rename-Item -Path "$TMP_DOWNLOAD_DIR/$actualDistributionDir" -NewName $MAVEN_HOME_NAME | Out-Null
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
	<groupId>com.nubo.profile.cmd.api</groupId>
	<artifactId>profile-cmd-api</artifactId>
	<version>0.18.0-beta.3</version>
	<name>${project.artifactId}</name>
	<description>Profile Command API</description>

	<properties>
		<java.version>21</java.version>
		<spring.port>8080</spring.port>
		<test.skip>false</test.skip>
		<datasource.url.application.name>ApplicationName=${project.artifactId}</datasource.url.application.name>
		<hikari.pool.name>${project.artifactId}-pool</hikari.pool.name>

        <!--  Security fixes for CVEs  -->
        <log4j2.version>2.25.5</log4j2.version>
        <tomcat.version>11.0.25</tomcat.version>
        <jackson3.version>3.0.0</jackson3.version>
	</properties>

	<dependencies>
		<dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
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
			<version>2.8.9</version>
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
					<source>${java.version}</source>
					<target>${java.version}</target>
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
					<testFailureIgnore>true</testFailureIgnore>
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
								<exclude>**/ProfileCmdApiApplication.class</exclude>
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
wrapperVersion=3.3.4
distributionType=only-script
distributionUrl=https://repo.maven.apache.org/maven2/org/apache/maven/apache-maven/3.9.11/apache-maven-3.9.11-bin.zip

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
  port: 8082
spring:
  datasource:
    username: ${DB_USERNAME}
    password: ${DB_PASSWORD}
    url: ${DB_URL}?@datasource.url.application.name@
    hikari:
      maximum-pool-size: ${DB_HIKARI_MAXIMUM_POOL_SIZE:10}
      minimum-idle: ${DB_HIKARI_MINIMUM_IDLE:5}
      idle-timeout: ${DB_HIKARI_IDLE_TIMEOUT:600000}
      validation-timeout: ${DB_HIKARI_VALIDATION_TIMEOUT:5000}
      max-lifetime: ${DB_HIKARI_MAX_LIFETIME:600000}
      connection-timeout: ${DB_HIKARI_CONNECTION_TIMEOUT:30000}
      leak-detection-threshold: ${DB_HIKARI_LEAK_DETECTION_THRESHOLD:2000}
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

## src/main/resources/application-uat.yml

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
,------. ,------.  ,-----. ,------.,--.,--.   ,------.  ,-----.,--.   ,--.,------.     ,---.  ,------. ,--. 
|  .--. '|  .--. ''  .-.  '|  .---'|  ||  |   |  .---' '  .--./|   `.'   ||  .-.  \   /  O  \ |  .--. '|  | 
|  '--' ||  '--'.'|  | |  ||  `--, |  ||  |   |  `--,  |  |    |  |'.'|  ||  |  \  : |  .-.  ||  '--' ||  | 
|  | --' |  |\  \ '  '-'  '|  |`   |  ||  '--.|  `---. '  '--'\|  |   |  ||  '--'  / |  | |  ||  | --' |  | 
`--'     `--' '--' `-----' `--'    `--'`-----'`------'  `-----'`--'   `--'`-------'  `--' `--'`--'     `--' 
                                                                                                            
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

## src/main/java/com/nubo/profile/cmd/api/ProfileCmdApiApplication.java

```java
package com.nubo.profile.cmd.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ProfileCmdApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProfileCmdApiApplication.class, args);
	}

}

```

## src/main/java/com/nubo/profile/cmd/api/application/annotations/ValidBigDecimal.java

```java
package com.nubo.profile.cmd.api.application.annotations;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import com.nubo.profile.cmd.api.application.config.ValidBigDecimalConfig;

@Constraint(validatedBy = ValidBigDecimalConfig.class)
@Target({ElementType.METHOD, ElementType.FIELD, ElementType.ANNOTATION_TYPE, ElementType.PARAMETER})
@Retention(RetentionPolicy.RUNTIME)
public @interface ValidBigDecimal {
    String message() default "";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};

    int precision();

    int scale();
}
```

## src/main/java/com/nubo/profile/cmd/api/application/config/SwaggerConfig.java

```java
package com.nubo.profile.cmd.api.application.config;

import com.nubo.profile.cmd.api.exception.error.ErrorResponse;
import com.nubo.profile.cmd.api.exception.error.ErrorValidation;
import com.nubo.profile.cmd.api.models.enums.PropertiesEnum;
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

## src/main/java/com/nubo/profile/cmd/api/application/config/ValidBigDecimalConfig.java

```java
package com.nubo.profile.cmd.api.application.config;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

import java.math.BigDecimal;

import com.nubo.profile.cmd.api.application.annotations.ValidBigDecimal;

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

## src/main/java/com/nubo/profile/cmd/api/application/config/WebConfig.java

```java
package com.nubo.profile.cmd.api.application.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestClient;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.i18n.SessionLocaleResolver;

import com.nubo.profile.cmd.api.application.interceptors.GlobalInterceptor;

import java.util.Locale;

@Configuration
@RequiredArgsConstructor
public class WebConfig implements WebMvcConfigurer {

    private final GlobalInterceptor globalInterceptor;

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(globalInterceptor)
                .addPathPatterns("/**");
    }

    @Bean
    public LocaleResolver localeResolver() {
        SessionLocaleResolver slr = new SessionLocaleResolver();
        slr.setDefaultLocale(Locale.ENGLISH);
        return slr;
    }

    @Bean
    public RestClient restClientCreate() {
        return RestClient.create();
    }

}

```

## src/main/java/com/nubo/profile/cmd/api/application/context/GlobalContext.java

```java
package com.nubo.profile.cmd.api.application.context;

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

## src/main/java/com/nubo/profile/cmd/api/application/database/NamingStrategyConfig.java

```java
package com.nubo.profile.cmd.api.application.database;

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

## src/main/java/com/nubo/profile/cmd/api/application/database/UpperNamingConfig.java

```java
package com.nubo.profile.cmd.api.application.database;

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

## src/main/java/com/nubo/profile/cmd/api/application/filters/GlobalFilter.java

```java
package com.nubo.profile.cmd.api.application.filters;

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

import com.nubo.profile.cmd.api.application.context.GlobalContext;
import com.nubo.profile.cmd.api.application.util.ApplicationUtils;
import com.nubo.profile.cmd.api.exception.ServiceException;
import com.nubo.profile.cmd.api.exception.error.ErrorCode;
import com.nubo.profile.cmd.api.exception.error.ErrorResponse;
import com.nubo.profile.cmd.api.models.enums.PropertiesEnum;
import com.nubo.profile.cmd.api.models.enums.VersionApiEnum;

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
            if (uri.contains("/v3/api-docs") || uri.contains("/swagger-ui") ||
                    uri.contains("/v1/websocket") || uri.contains("/actuator")) {
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

## src/main/java/com/nubo/profile/cmd/api/application/interceptors/GlobalInterceptor.java

```java
package com.nubo.profile.cmd.api.application.interceptors;

import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import com.nubo.profile.cmd.api.application.context.GlobalContext;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

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

## src/main/java/com/nubo/profile/cmd/api/application/properties/PropertiesConfig.java

```java
package com.nubo.profile.cmd.api.application.properties;

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

## src/main/java/com/nubo/profile/cmd/api/application/properties/PropertiesContext.java

```java
package com.nubo.profile.cmd.api.application.properties;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import com.nubo.profile.cmd.api.application.context.GlobalContext;
import com.nubo.profile.cmd.api.application.util.ApplicationUtils;
import com.nubo.profile.cmd.api.models.enums.PropertiesEnum;

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
        String clientDatetime = GlobalContext.getProperty(PropertiesEnum.CLIENT_DATETIME.getValue());
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern(ApplicationUtils.getFormatDatetime());
        if(clientDatetime != null){
            return LocalDateTime.parse(clientDatetime, formatter);
        }
        return LocalDateTime.now();
    }

    public static String getVersion() {
        return GlobalContext.getProperty(PropertiesEnum.VERSION_API.getValue());
    }

}


```

## src/main/java/com/nubo/profile/cmd/api/application/util/ApplicationUtils.java

```java
package com.nubo.profile.cmd.api.application.util;

import com.nubo.profile.cmd.api.exception.ServiceException;
import com.nubo.profile.cmd.api.exception.error.ErrorCode;
import tools.jackson.databind.ObjectMapper;

import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class ApplicationUtils {

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

## src/main/java/com/nubo/profile/cmd/api/exception/ServiceException.java

```java
package com.nubo.profile.cmd.api.exception;

import lombok.Getter;
import org.springframework.http.HttpStatus;

import com.nubo.profile.cmd.api.exception.error.ErrorCode;

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

## src/main/java/com/nubo/profile/cmd/api/exception/error/ErrorCode.java

```java
package com.nubo.profile.cmd.api.exception.error;

import lombok.Getter;

@Getter
public enum ErrorCode {

    UNEXPECTED("An unexpected error occurred"),
    METHOD_ARGUMENT_TYPE("Invalid request path"),
    METHOD_NOT_ALLOWED("Http method not allowed"),
    NOT_FOUND("Resource not found"),
    UNSUPPORTED_MEDIA_TYPE("Content Type is not supported"),
    MESSAGE_NOT_READABLE("Error reading the message body request"),
    BAD_REQUEST("Invalid request body"),
    HEADER_CLIENT_IP_REQUIRED("Header client_ip required"),
    HEADER_CLIENT_IP_INVALID("Header client_ip is invalid"),
    HEADER_CLIENT_USER_REQUIRED("Header client_user is required"),
    HEADER_CLIENT_DATETIME_REQUIRED("Header client_datetime is required"),
    HEADER_CLIENT_DATETIME_INVALID("Header client_datetime is invalid"),
    VERSION_API_NOT_FOUND("Version API not found"),
    STATUS_NOT_FOUND("Status not found in the database"),
    PARTICIPANT_NOT_FOUND("Participant not found in the database"),
    MENU_CONFIGURATION_NOT_FOUND("Menu Configuration not found in the database"),
    PROFILE_NOT_FOUND("Profile not found in the database"),
    PERMISSION_NOT_FOUND("Permission not found in the database"),
    PROFILE_USER_NUBO_EXIST("Profile is associated with a Nubo user"),
    PROFILE_NAME_ALREADY_EXISTS("Profile name already exists"),
    SCREEN_ACTION_NOT_FOUND("Screen actions not found for the given screen"),
    TYPE_NOT_FOUND("Type not found in the database"),
    PARTICIPANT_ALREADY_HAS_ADMIN_PROFILE("Participant already has an admin profile");

    private final String message;

    ErrorCode(String message) {
        this.message = message;
    }

    public String getName() {
        return this.name();
    }

}

```

## src/main/java/com/nubo/profile/cmd/api/exception/error/ErrorResponse.java

```java
package com.nubo.profile.cmd.api.exception.error;

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

## src/main/java/com/nubo/profile/cmd/api/exception/error/ErrorValidation.java

```java
package com.nubo.profile.cmd.api.exception.error;

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

## src/main/java/com/nubo/profile/cmd/api/exception/handler/GlobalExceptionHandler.java

```java
package com.nubo.profile.cmd.api.exception.handler;

import java.util.Collections;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.util.ObjectUtils;
import org.springframework.web.HttpMediaTypeNotSupportedException;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.method.annotation.HandlerMethodValidationException;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;
import org.springframework.web.servlet.resource.NoResourceFoundException;

import com.nubo.profile.cmd.api.application.properties.PropertiesContext;
import com.nubo.profile.cmd.api.exception.ServiceException;
import com.nubo.profile.cmd.api.exception.error.ErrorCode;
import com.nubo.profile.cmd.api.exception.error.ErrorResponse;
import com.nubo.profile.cmd.api.exception.error.ErrorValidation;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestControllerAdvice
@Slf4j
@RequiredArgsConstructor
public class GlobalExceptionHandler {

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handlerGeneralException(Exception exception, HttpServletRequest request) {
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
    public ResponseEntity<ErrorResponse> handlerHttpRequestMethodNotSupportedException(
            HttpRequestMethodNotSupportedException exception,
            HttpServletRequest request) {
        return buildErrorResponse(HttpStatus.METHOD_NOT_ALLOWED, exception, request, ErrorCode.METHOD_NOT_ALLOWED);
    }

    @ExceptionHandler(MethodArgumentTypeMismatchException.class)
    public ResponseEntity<ErrorResponse> handlerMethodArgumentTypeMismatchException(
            MethodArgumentTypeMismatchException exception,
            HttpServletRequest request) {
        return buildErrorResponse(HttpStatus.BAD_REQUEST, exception, request, ErrorCode.METHOD_ARGUMENT_TYPE);
    }

    @ExceptionHandler(HttpMediaTypeNotSupportedException.class)
    public ResponseEntity<ErrorResponse> handlerHttpMediaTypeNotSupportedException(
            HttpMediaTypeNotSupportedException exception,
            HttpServletRequest request) {
        return buildErrorResponse(HttpStatus.UNSUPPORTED_MEDIA_TYPE, exception, request,
                ErrorCode.UNSUPPORTED_MEDIA_TYPE);
    }

    @ExceptionHandler(HttpMessageNotReadableException.class)
    public ResponseEntity<ErrorResponse> handlerHttpMessageNotReadableException(
            HttpMessageNotReadableException exception,
            HttpServletRequest request) {
        return buildErrorResponse(HttpStatus.BAD_REQUEST, exception, request, ErrorCode.MESSAGE_NOT_READABLE);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorResponse> handlerMethodArgumentNotValidException(
            MethodArgumentNotValidException exception,
            HttpServletRequest request) {
        List<ErrorValidation> errors = exception.getBindingResult().getFieldErrors().stream().map(
                error -> ErrorValidation.builder().id(error.getField()).description(error.getDefaultMessage()).build())
                .toList();
        return buildErrorResponse(HttpStatus.BAD_REQUEST, exception, request, ErrorCode.BAD_REQUEST, errors);
    }

    @ExceptionHandler(HandlerMethodValidationException.class)
    public ResponseEntity<ErrorResponse> handleMethodValidationException(HandlerMethodValidationException exception,
            HttpServletRequest request) {

        List<ErrorValidation> errors = Optional.ofNullable(exception.getParameterValidationResults())
                .orElse(Collections.emptyList())
                .stream()
                .flatMap(parameterValidationResult -> parameterValidationResult.getResolvableErrors().stream()
                        .map(error -> ErrorValidation.builder()
                                .id(error != null ? "[" + parameterValidationResult.getContainerIndex() + "]." +
                                        removeIntermediatePart(Objects.requireNonNull(error.getCodes())[1]) : "unknown")
                                .description(error != null ? error.getDefaultMessage() : "unknown")
                                .build()))
                .toList();
        return buildErrorResponse(HttpStatus.BAD_REQUEST, exception, request, ErrorCode.BAD_REQUEST, errors);
    }

    private String removeIntermediatePart(String str) {
        Pattern pattern = Pattern.compile("\\.(\\w+)$");
        Matcher matcher = pattern.matcher(str);
        if (matcher.find()) {
            return matcher.group(1);
        }
        return str;
    }

    private ResponseEntity<ErrorResponse> buildErrorResponse(HttpStatus status, Exception exception,
            HttpServletRequest request, ErrorCode errorCode) {
        return buildErrorResponse(status, exception, request, errorCode, null);
    }

    private ResponseEntity<ErrorResponse> buildErrorResponse(HttpStatus status, Exception exception,
            HttpServletRequest request,
            ErrorCode errorCode, List<ErrorValidation> errorDetails) {

        ErrorResponse errorResponse = ErrorResponse.builder()
                .httpCode(String.valueOf(status.value()))
                .httpMethod(request.getMethod())
                .url(request.getRequestURL().toString())
                .errorCode(errorCode.getName())
                .errorMessage(errorCode.getMessage())
                .errorMessageDetail(ObjectUtils.isEmpty(exception.getCause()) ? exception.getMessage()
                        : exception.getCause().getMessage())
                .timestamp(ObjectUtils.isEmpty(String.valueOf(PropertiesContext.getClientDatetime())) ? null
                        : String.valueOf(PropertiesContext.getClientDatetime()))
                .errorDetails(errorDetails)
                .build();

        log.error("Error -> {}", errorResponse);

        return ResponseEntity.status(status).body(errorResponse);
    }

}

```

## src/main/java/com/nubo/profile/cmd/api/helpers/MapperUtil.java

```java
package com.nubo.profile.cmd.api.helpers;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import org.springframework.util.ObjectUtils;

import com.nubo.profile.cmd.api.models.dto.response.CategoryOutDto;
import com.nubo.profile.cmd.api.models.dto.response.CountryOutDto;
import com.nubo.profile.cmd.api.models.dto.response.EnterpriseGroupOutDto;
import com.nubo.profile.cmd.api.models.dto.response.IdentificationTypeOutDto;
import com.nubo.profile.cmd.api.models.dto.response.MenuAssignmentOutDto;
import com.nubo.profile.cmd.api.models.dto.response.MenuConfigurationOutDto;
import com.nubo.profile.cmd.api.models.dto.response.ModuleOutDto;
import com.nubo.profile.cmd.api.models.dto.response.ParticipantOutDto;
import com.nubo.profile.cmd.api.models.dto.response.ProfileOutDto;
import com.nubo.profile.cmd.api.models.dto.response.ScreenActionOutDto;
import com.nubo.profile.cmd.api.models.dto.response.ScreenOutDto;
import com.nubo.profile.cmd.api.models.dto.response.StatusOutDto;
import com.nubo.profile.cmd.api.models.dto.response.SubmoduleOutDto;
import com.nubo.profile.cmd.api.models.dto.response.TypeOutDto;
import com.nubo.profile.cmd.api.models.entity.CategoryEntity;
import com.nubo.profile.cmd.api.models.entity.CountryEntity;
import com.nubo.profile.cmd.api.models.entity.EnterpriseGroupEntity;
import com.nubo.profile.cmd.api.models.entity.IdentificationTypeEntity;
import com.nubo.profile.cmd.api.models.entity.MenuAssignmentEntity;
import com.nubo.profile.cmd.api.models.entity.MenuConfigurationEntity;
import com.nubo.profile.cmd.api.models.entity.ModuleEntity;
import com.nubo.profile.cmd.api.models.entity.ParticipantEntity;
import com.nubo.profile.cmd.api.models.entity.ProfileEntity;
import com.nubo.profile.cmd.api.models.entity.ScreenActionEntity;
import com.nubo.profile.cmd.api.models.entity.ScreenEntity;
import com.nubo.profile.cmd.api.models.entity.StatusEntity;
import com.nubo.profile.cmd.api.models.entity.SubmoduleEntity;
import com.nubo.profile.cmd.api.models.entity.TypeEntity;
import com.nubo.profile.cmd.api.models.enums.TypeEnum;

public final class MapperUtil {

    private MapperUtil() {
    }

    public static ProfileOutDto toProfileOutDto(ProfileEntity profileEntity,
            List<MenuAssignmentEntity> menuAssignmentEntityList) {
        if (ObjectUtils.isEmpty(profileEntity))
            return null;
        return ProfileOutDto.builder()
                .id(profileEntity.getId())
                .name(profileEntity.getName())
                .description(ObjectUtils.isEmpty(profileEntity.getDescription()) ? null
                        : profileEntity.getDescription())
                .participant(participantEntityToParticipantOutDto(profileEntity.getParticipant()))
                .status(statusEntityToStatusOutDto(profileEntity.getStatus()))
                .type(typeEntityToTypeOutDto(profileEntity.getType()))
                .isAdmin(isAdmin(profileEntity.getType()))
                .lastModifyUser(profileEntity.getLastModifyUser())
                .lastModifyDateTime(profileEntity.getLastModifyDateTime())
                .lastModifyDate(!ObjectUtils.isEmpty(profileEntity.getLastModifyDateTime())
                        ? profileEntity.getLastModifyDateTime().toLocalDate()
                        : null)
                .menuAssignments(menuAssignmentEntityList.stream()
                        .map(MapperUtil::menuAssignmentEntityToMenuAssignmentOutDto)
                        .collect(Collectors.toList()))
                .build();
    }

    private static Boolean isAdmin(TypeEntity typeEntity) {
        if (ObjectUtils.isEmpty(typeEntity))
            return false;
        return Objects.equals(TypeEnum.ADMIN.getTypeId(), typeEntity.getId());
    }

    public static ParticipantOutDto participantEntityToParticipantOutDto(ParticipantEntity participantEntity) {
        if (ObjectUtils.isEmpty(participantEntity))
            return null;
        return ParticipantOutDto.builder()
                .id(participantEntity.getId())
                .code(participantEntity.getCode())
                .documentNumber(participantEntity.getDocumentNumber())
                .identificationType(identificationTypeEntityToIdentificationTypeOutDto(
                        participantEntity.getIdentificationType()))
                .name(participantEntity.getName())
                .shortName(participantEntity.getShortName())
                .type(typeEntityToTypeOutDto(participantEntity.getType()))
                .country(countryEntityToCountryOutDto(participantEntity.getCountry()))
                .status(statusEntityToStatusOutDto(participantEntity.getStatus()))
                .enterpriseGroup(ObjectUtils.isEmpty(participantEntity.getEnterpriseGroup()) ? null
                        : enterpriseGroupEntityToEnterpriseGroupOutDto(participantEntity.getEnterpriseGroup()))
                .build();
    }

    public static CountryOutDto countryEntityToCountryOutDto(CountryEntity countryEntity) {
        if (ObjectUtils.isEmpty(countryEntity))
            return null;
        return CountryOutDto.builder()
                .id(countryEntity.getId())
                .code(countryEntity.getCode())
                .name(countryEntity.getName())
                .timeZone(countryEntity.getTimeZone())
                .build();
    }

    public static StatusOutDto statusEntityToStatusOutDto(StatusEntity statusEntity) {
        if (ObjectUtils.isEmpty(statusEntity))
            return null;
        return StatusOutDto.builder()
                .id(statusEntity.getId())
                .description(statusEntity.getDescription())
                .category(statusEntity.getCategory())
                .build();
    }

    public static TypeOutDto typeEntityToTypeOutDto(TypeEntity typeEntity) {
        if (ObjectUtils.isEmpty(typeEntity))
            return null;
        return TypeOutDto.builder()
                .id(typeEntity.getId())
                .description(typeEntity.getDescription())
                .category(typeEntity.getCategory())
                .build();
    }

    public static IdentificationTypeOutDto identificationTypeEntityToIdentificationTypeOutDto(
            IdentificationTypeEntity identificationTypeEntity) {
        if (ObjectUtils.isEmpty(identificationTypeEntity))
            return null;
        return IdentificationTypeOutDto.builder()
                .id(identificationTypeEntity.getId())
                .description(identificationTypeEntity.getDescription())
                .build();
    }

    public static EnterpriseGroupOutDto enterpriseGroupEntityToEnterpriseGroupOutDto(
            EnterpriseGroupEntity enterpriseGroupEntity) {
        if (ObjectUtils.isEmpty(enterpriseGroupEntity))
            return null;
        return EnterpriseGroupOutDto.builder()
                .id(enterpriseGroupEntity.getId())
                .code(enterpriseGroupEntity.getCode())
                .name(enterpriseGroupEntity.getName())
                .build();
    }

    public static MenuConfigurationOutDto menuConfigurationEntityToMenuConfigurationOutDto(
            MenuConfigurationEntity menuConfigurationEntity) {
        if (ObjectUtils.isEmpty(menuConfigurationEntity))
            return null;
        return MenuConfigurationOutDto.builder()
                .id(menuConfigurationEntity.getId())
                .name(menuConfigurationEntity.getName())
                .description(menuConfigurationEntity.getDescription())
                .enabled(menuConfigurationEntity.getEnabled())
                .screen(screenEntityToScreenOutDto(menuConfigurationEntity.getScreen()))
                .category(categoryEntityToCategoryOutDto(menuConfigurationEntity.getCategory()))
                .module(moduleEntityToModuleOutDto(menuConfigurationEntity.getModule()))
                .submodule(submoduleEntityToSubmoduleOutDto(menuConfigurationEntity.getSubmodule()))
                .build();
    }

    public static MenuAssignmentOutDto menuAssignmentEntityToMenuAssignmentOutDto(
            MenuAssignmentEntity menuAssignmentEntity) {
        if (ObjectUtils.isEmpty(menuAssignmentEntity))
            return null;
        return MenuAssignmentOutDto.builder()
                .id(menuAssignmentEntity.getId())
                .menuConfiguration(menuConfigurationEntityToMenuConfigurationOutDto(
                        menuAssignmentEntity.getMenuConfiguration()))
                .screenAction(screenActionEntityToScreenActionOutDto(menuAssignmentEntity.getScreenAction()))
                .screen(screenEntityToScreenOutDto(menuAssignmentEntity.getScreen()))
                .build();
    }

    public static ScreenActionOutDto screenActionEntityToScreenActionOutDto(
            ScreenActionEntity screenActionEntity) {
        if (ObjectUtils.isEmpty(screenActionEntity))
            return null;
        return ScreenActionOutDto.builder()
                .id(screenActionEntity.getId())
                .code(screenActionEntity.getCode())
                .description(screenActionEntity.getDescription())
                .enabled(screenActionEntity.getEnabled())
                .build();
    }

    public static ScreenOutDto screenEntityToScreenOutDto(ScreenEntity screenEntity) {
        if (ObjectUtils.isEmpty(screenEntity))
            return null;
        return ScreenOutDto.builder()
                .id(screenEntity.getId())
                .code(screenEntity.getCode())
                .description(screenEntity.getDescription())
                .build();
    }

    public static CategoryOutDto categoryEntityToCategoryOutDto(CategoryEntity categoryEntity) {
        if (ObjectUtils.isEmpty(categoryEntity))
            return null;
        return CategoryOutDto.builder()
                .id(categoryEntity.getId())
                .name(categoryEntity.getName())
                .description(categoryEntity.getDescription())
                .collapsible(categoryEntity.getCollapsible())
                .orderItem(categoryEntity.getOrderItem())
                .categoryDeleted(categoryEntity.getCategoryDeleted())
                .build();
    }

    public static ModuleOutDto moduleEntityToModuleOutDto(ModuleEntity moduleEntity) {
        if (ObjectUtils.isEmpty(moduleEntity))
            return null;
        return ModuleOutDto.builder()
                .id(moduleEntity.getId())
                .name(moduleEntity.getName())
                .description(moduleEntity.getDescription())
                .collapsible(moduleEntity.getCollapsible())
                .orderItem(moduleEntity.getOrderItem())
                .moduleDeleted(moduleEntity.getModuleDeleted())
                .build();
    }

    public static SubmoduleOutDto submoduleEntityToSubmoduleOutDto(SubmoduleEntity submoduleEntity) {
        if (ObjectUtils.isEmpty(submoduleEntity))
            return null;
        return SubmoduleOutDto.builder()
                .id(submoduleEntity.getId())
                .name(submoduleEntity.getName())
                .description(submoduleEntity.getDescription())
                .collapsible(submoduleEntity.getCollapsible())
                .orderItem(submoduleEntity.getOrderItem())
                .submoduleDeleted(submoduleEntity.getSubmoduleDeleted())
                .build();
    }

}

```

## src/main/java/com/nubo/profile/cmd/api/models/dto/request/MenuConfigurationInDto.java

```java
package com.nubo.profile.cmd.api.models.dto.request;

import java.util.List;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MenuConfigurationInDto {

    @NotNull
    private Long menuConfigurationId;

    @NotNull
    @Valid
    private List<Long> screenActionIds;

}

```

## src/main/java/com/nubo/profile/cmd/api/models/dto/request/ProfileInDto.java

```java
package com.nubo.profile.cmd.api.models.dto.request;

import java.util.List;

import jakarta.validation.Valid;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProfileInDto {

    @NotNull
    @Size(max = 50)
    private String name;

    @Size(max = 200)
    private String description;

    @NotNull
    @Min(value = 1)
    private Long participantId;

    @NotNull
    private Boolean isAdmin;

    @NotNull
    @Valid
    private List<MenuConfigurationInDto> menuConfigurations;

}

```

## src/main/java/com/nubo/profile/cmd/api/models/dto/request/ProfileUpdateInDto.java

```java
package com.nubo.profile.cmd.api.models.dto.request;

import java.util.List;

import jakarta.validation.Valid;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProfileUpdateInDto {

    @Size(max = 50)
    private String name;

    @Size(max = 200)
    private String description;

    @Min(value = 1)
    private Long statusId;

    @Min(value = 1)
    private Long participantId;

    private Boolean isAdmin;

    @NotNull
    @Valid
    private List<MenuConfigurationInDto> menuConfigurations;

}

```

## src/main/java/com/nubo/profile/cmd/api/models/dto/response/CategoryOutDto.java

```java
package com.nubo.profile.cmd.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonInclude(JsonInclude.Include.ALWAYS)
public class CategoryOutDto {

    private Long id;

    private String name;

    private String description;

    private Boolean collapsible;

    private Integer orderItem;

    private Boolean categoryDeleted;
}

```

## src/main/java/com/nubo/profile/cmd/api/models/dto/response/CountryOutDto.java

```java
package com.nubo.profile.cmd.api.models.dto.response;

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
public class CountryOutDto {

    private Long id;

    private String code;

    private String name;

    private String timeZone;

}

```

## src/main/java/com/nubo/profile/cmd/api/models/dto/response/EnterpriseGroupOutDto.java

```java
package com.nubo.profile.cmd.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonInclude(JsonInclude.Include.ALWAYS)
public class EnterpriseGroupOutDto {

    private Long id;

    private String code;

    private String name;
}

```

## src/main/java/com/nubo/profile/cmd/api/models/dto/response/IdentificationTypeOutDto.java

```java
package com.nubo.profile.cmd.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonInclude(JsonInclude.Include.ALWAYS)
public class IdentificationTypeOutDto {

    private Long id;

    private String description;

}

```

## src/main/java/com/nubo/profile/cmd/api/models/dto/response/MenuAssignmentOutDto.java

```java
package com.nubo.profile.cmd.api.models.dto.response;

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
public class MenuAssignmentOutDto {

    private Long id;

    private MenuConfigurationOutDto menuConfiguration;

    private ScreenActionOutDto screenAction;

    private ScreenOutDto screen;

}

```

## src/main/java/com/nubo/profile/cmd/api/models/dto/response/MenuConfigurationOutDto.java

```java
package com.nubo.profile.cmd.api.models.dto.response;

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
public class MenuConfigurationOutDto {

    private Long id;

    private String name;

    private String description;

    private Boolean enabled;

    private ScreenOutDto screen;

    private CategoryOutDto category;

    private ModuleOutDto module;

    private SubmoduleOutDto submodule;

}

```

## src/main/java/com/nubo/profile/cmd/api/models/dto/response/ModuleOutDto.java

```java
package com.nubo.profile.cmd.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonInclude(JsonInclude.Include.ALWAYS)
public class ModuleOutDto {

    private Long id;

    private String name;

    private String description;

    private Boolean collapsible;

    private Integer orderItem;

    private Boolean moduleDeleted;

}

```

## src/main/java/com/nubo/profile/cmd/api/models/dto/response/ParticipantOutDto.java

```java
package com.nubo.profile.cmd.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonInclude(JsonInclude.Include.ALWAYS)
public class ParticipantOutDto {

    private Long id;

    private String code;

    private String documentNumber;

    private IdentificationTypeOutDto identificationType;

    private String name;

    private String shortName;

    private StatusOutDto status;

    private CountryOutDto country;

    private TypeOutDto type;

    private EnterpriseGroupOutDto enterpriseGroup;

}

```

## src/main/java/com/nubo/profile/cmd/api/models/dto/response/ProfileOutDto.java

```java
package com.nubo.profile.cmd.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.ALWAYS)
public class ProfileOutDto {

    private Long id;

    private String name;

    private String description;

    private StatusOutDto status;

    private ParticipantOutDto participant;

    private Boolean isAdmin;

    private TypeOutDto type;

    private String lastModifyUser;

    private LocalDate lastModifyDate;

    private LocalDateTime lastModifyDateTime;

    private List<MenuAssignmentOutDto> menuAssignments;

}

```

## src/main/java/com/nubo/profile/cmd/api/models/dto/response/ProfileValidateOutDto.java

```java
package com.nubo.profile.cmd.api.models.dto.response;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import com.fasterxml.jackson.annotation.JsonInclude;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.ALWAYS)
public class ProfileValidateOutDto {

    private Boolean isParticipantAdmin;

    private Long profileId;

    private String profileName;

}

```

## src/main/java/com/nubo/profile/cmd/api/models/dto/response/ScreenActionOutDto.java

```java
package com.nubo.profile.cmd.api.models.dto.response;

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
public class ScreenActionOutDto {

    private Long id;

    private String code;

    private String description;

    private Boolean enabled;

}

```

## src/main/java/com/nubo/profile/cmd/api/models/dto/response/ScreenOutDto.java

```java
package com.nubo.profile.cmd.api.models.dto.response;

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
public class ScreenOutDto {

    private Long id;

    private String code;

    private String description;

}

```

## src/main/java/com/nubo/profile/cmd/api/models/dto/response/StatusOutDto.java

```java
package com.nubo.profile.cmd.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonInclude(JsonInclude.Include.ALWAYS)
public class StatusOutDto {

    private Long id;

    private String description;

    private String category;

}

```

## src/main/java/com/nubo/profile/cmd/api/models/dto/response/SubmoduleOutDto.java

```java
package com.nubo.profile.cmd.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonInclude(JsonInclude.Include.ALWAYS)
public class SubmoduleOutDto {

    private Long id;

    private String name;

    private String description;

    private Boolean collapsible;

    private Integer orderItem;

    private Boolean submoduleDeleted;

}

```

## src/main/java/com/nubo/profile/cmd/api/models/dto/response/TypeOutDto.java

```java
package com.nubo.profile.cmd.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonInclude(JsonInclude.Include.ALWAYS)
public class TypeOutDto {

    private Long id;

    private String description;

    private String category;

}

```

## src/main/java/com/nubo/profile/cmd/api/models/entity/CategoryEntity.java

```java
package com.nubo.profile.cmd.api.models.entity;

import java.time.LocalDateTime;
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
@Table(name = "\"CATEGORY\"", schema = "\"NUANBODB\"")
public class CategoryEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"CATEGORY_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"NAME\"", length = 80)
    private String name;

    @Column(name = "\"DESCRIPTION\"", length = 200, nullable = false)
    private String description;

    @Column(name = "\"COLLAPSIBLE\"")
    private Boolean collapsible;

    @Column(name = "\"ORDER_ITEM\"", nullable = false)
    private Integer orderItem;

    @Column(name = "\"CATEGORY_DELETED\"")
    private Boolean categoryDeleted;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 250, nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50, nullable = false)
    private String lastModifyIp;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        CategoryEntity that = (CategoryEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/profile/cmd/api/models/entity/CountryEntity.java

```java
package com.nubo.profile.cmd.api.models.entity;

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
@Table(name = "\"COUNTRY\"", schema = "\"NUANBODB\"")
public class CountryEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"COUNTRY_ID\"")
    private Long id;

    @Column(name = "\"CODE\"", length = 3, nullable = false)
    private String code;

    @Column(name = "\"NAME\"", length = 30, nullable = false)
    private String name;

    @Column(name = "\"TIME_ZONE\"", length = 30, nullable = false)
    private String timeZone;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        CountryEntity that = (CountryEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/profile/cmd/api/models/entity/EnterpriseGroupEntity.java

```java
package com.nubo.profile.cmd.api.models.entity;

import java.time.LocalDateTime;
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
@Table(name = "\"ENTERPRISE_GROUP\"", schema = "\"NUANBODB\"")
public class EnterpriseGroupEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"ENTERPRISE_GROUP_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"CODE\"", length = 6)
    private String code;

    @Column(name = "\"NAME\"", length = 100)
    private String name;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 250, nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50, nullable = false)
    private String lastModifyIp;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        EnterpriseGroupEntity that = (EnterpriseGroupEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/profile/cmd/api/models/entity/IdentificationTypeEntity.java

```java
package com.nubo.profile.cmd.api.models.entity;

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
@Table(name = "\"IDENTIFICATION_TYPE\"", schema = "\"NUANBODB\"")
public class IdentificationTypeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"IDENTIFICATION_TYPE_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"DESCRIPTION\"", length = 80)
    private String description;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        IdentificationTypeEntity that = (IdentificationTypeEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/profile/cmd/api/models/entity/MenuAssignmentEntity.java

```java
package com.nubo.profile.cmd.api.models.entity;

import java.time.LocalDateTime;
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
@Table(name = "\"MENU_ASSIGNMENT\"", schema = "\"NUANBODB\"")
public class MenuAssignmentEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"MENU_ASSIGNMENT_ID\"", nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "\"MENU_CONFIGURATION_ID\"", nullable = false)
    private MenuConfigurationEntity menuConfiguration;

    @ManyToOne
    @JoinColumn(name = "\"PROFILE_ID\"", nullable = false)
    private ProfileEntity profile;

    @ManyToOne
    @JoinColumn(name = "\"SCREEN_ACTION_ID\"")
    private ScreenActionEntity screenAction;

    @ManyToOne
    @JoinColumn(name = "\"SCREEN_ID\"")
    private ScreenEntity screen;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 250, nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDateTime;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50, nullable = false)
    private String lastModifyIp;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        MenuAssignmentEntity that = (MenuAssignmentEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/profile/cmd/api/models/entity/MenuConfigurationEntity.java

```java
package com.nubo.profile.cmd.api.models.entity;

import java.time.LocalDateTime;
import java.util.Objects;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
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
@Table(name = "\"MENU_CONFIGURATION\"", schema = "\"NUANBODB\"")
public class MenuConfigurationEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"MENU_CONFIGURATION_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"NAME\"", length = 80)
    private String name;

    @Column(name = "\"DESCRIPTION\"", length = 200, nullable = false)
    private String description;

    @Column(name = "\"ENABLED\"")
    private Boolean enabled;

    @ManyToOne
    @JoinColumn(name = "\"SCREEN_ID\"")
    private ScreenEntity screen;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"CATEGORY_ID\"", nullable = false)
    private CategoryEntity category;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"MODULE_ID\"")
    private ModuleEntity module;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"SUBMODULE_ID\"")
    private SubmoduleEntity submodule;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 250, nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50, nullable = false)
    private String lastModifyIp;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        MenuConfigurationEntity that = (MenuConfigurationEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/profile/cmd/api/models/entity/ModuleEntity.java

```java
package com.nubo.profile.cmd.api.models.entity;

import java.time.LocalDateTime;
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
@Table(name = "\"MODULE\"", schema = "\"NUANBODB\"")
public class ModuleEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"MODULE_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"NAME\"", length = 80)
    private String name;

    @Column(name = "\"DESCRIPTION\"", length = 200, nullable = false)
    private String description;

    @Column(name = "\"COLLAPSIBLE\"")
    private Boolean collapsible;

    @Column(name = "\"ORDER_ITEM\"", nullable = false)
    private Integer orderItem;

    @Column(name = "\"MODULE_DELETED\"")
    private Boolean moduleDeleted;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 250, nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50, nullable = false)
    private String lastModifyIp;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        ModuleEntity that = (ModuleEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/profile/cmd/api/models/entity/ParticipantEntity.java

```java
package com.nubo.profile.cmd.api.models.entity;

import java.time.LocalDateTime;
import java.util.Objects;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
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
@Table(name = "\"PARTICIPANT\"", schema = "\"NUANBODB\"")
public class ParticipantEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"PARTICIPANT_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"CODE\"", length = 6)
    private String code;

    @Column(name = "\"DOCUMENT_NUMBER\"", length = 20)
    private String documentNumber;

    @ManyToOne
    @JoinColumn(name = "\"IDENTIFICATION_TYPE_ID\"", nullable = false)
    private IdentificationTypeEntity identificationType;

    @Column(name = "\"NAME\"", length = 100)
    private String name;

    @Column(name = "\"SHORT_NAME\"", length = 50)
    private String shortName;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"", nullable = false)
    private StatusEntity status;

    @ManyToOne
    @JoinColumn(name = "\"COUNTRY_ID\"", nullable = false)
    private CountryEntity country;

    @ManyToOne
    @JoinColumn(name = "\"TYPE_ID\"", nullable = false)
    private TypeEntity type;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"ENTERPRISE_GROUP_ID\"")
    private EnterpriseGroupEntity enterpriseGroup;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 250, nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50, nullable = false)
    private String lastModifyIp;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        ParticipantEntity that = (ParticipantEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/profile/cmd/api/models/entity/ProfileEntity.java

```java
package com.nubo.profile.cmd.api.models.entity;

import java.time.LocalDateTime;
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
@Builder(toBuilder = true)
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"PROFILE\"", schema = "\"NUANBODB\"")
public class ProfileEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"PROFILE_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"NAME\"", length = 80)
    private String name;

    @Column(name = "\"DESCRIPTION\"", length = 120)
    private String description;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"", nullable = false)
    private StatusEntity status;

    @ManyToOne
    @JoinColumn(name = "\"PARTICIPANT_ID\"")
    private ParticipantEntity participant;

    @ManyToOne
    @JoinColumn(name = "\"TYPE_ID\"")
    private TypeEntity type;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 250, nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDateTime;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50)
    private String lastModifyIp;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        ProfileEntity that = (ProfileEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

    @Override
    public String toString() {
        return "ProfileEntity{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", lastModifyUser='" + lastModifyUser + '\'' +
                ", lastModifyApplication='" + lastModifyApplication + '\'' +
                ", lastModifyDateTime=" + lastModifyDateTime +
                ", lastModifyIp='" + lastModifyIp + '\'' +
                '}';
    }
}

```

## src/main/java/com/nubo/profile/cmd/api/models/entity/ProfileUserNuboEntity.java

```java
package com.nubo.profile.cmd.api.models.entity;

import java.time.LocalDateTime;
import java.util.Objects;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
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
@IdClass(ProfileUserNuboKey.class)
@Table(name = "\"PROFILE_USER_NUBO\"", schema = "\"NUANBODB\"")
public class ProfileUserNuboEntity {

    @Id
    @Column(name = "\"PROFILE_ID\"", nullable = false)
    private Long profileId;

    @Id
    @Column(name = "\"USER_NUBO_ID\"", nullable = false)
    private Long userNuboId;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 250, nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50, nullable = false)
    private String lastModifyIp;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        ProfileUserNuboEntity that = (ProfileUserNuboEntity) o;
        return Objects.equals(profileId, that.profileId) && Objects.equals(userNuboId, that.userNuboId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(profileId, userNuboId);
    }
}

```

## src/main/java/com/nubo/profile/cmd/api/models/entity/ProfileUserNuboKey.java

```java
package com.nubo.profile.cmd.api.models.entity;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProfileUserNuboKey implements Serializable {

    private Long profileId;

    private Long userNuboId;
}

```

## src/main/java/com/nubo/profile/cmd/api/models/entity/ScreenActionEntity.java

```java
package com.nubo.profile.cmd.api.models.entity;

import java.time.LocalDateTime;
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
@Table(name = "\"SCREEN_ACTION\"", schema = "\"NUANBODB\"")
public class ScreenActionEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"SCREEN_ACTION_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"CODE\"", length = 5)
    private String code;

    @Column(name = "\"DESCRIPTION\"", length = 80)
    private String description;

    @Column(name = "\"ENABLED\"")
    private Boolean enabled;

    @ManyToOne
    @JoinColumn(name = "\"SCREEN_ID\"", nullable = false)
    private ScreenEntity screen;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 250, nullable = false)
    private String lastModifyApplic;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50, nullable = false)
    private String lastModifyIp;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        ScreenActionEntity that = (ScreenActionEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/profile/cmd/api/models/entity/ScreenEntity.java

```java
package com.nubo.profile.cmd.api.models.entity;

import java.time.LocalDateTime;
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
@Table(name = "\"SCREEN\"", schema = "\"NUANBODB\"")
public class ScreenEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"SCREEN_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"CODE\"", length = 5)
    private String code;

    @Column(name = "\"DESCRIPTION\"", length = 80)
    private String description;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 250, nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50, nullable = false)
    private String lastModifyIp;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        ScreenEntity that = (ScreenEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/profile/cmd/api/models/entity/StatusEntity.java

```java
package com.nubo.profile.cmd.api.models.entity;

import java.time.LocalDateTime;
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

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 250, nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50, nullable = false)
    private String lastModifyIp;

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

## src/main/java/com/nubo/profile/cmd/api/models/entity/SubmoduleEntity.java

```java
package com.nubo.profile.cmd.api.models.entity;

import java.time.LocalDateTime;
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
@Table(name = "\"SUBMODULE\"", schema = "\"NUANBODB\"")
public class SubmoduleEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"SUBMODULE_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"DESCRIPTION\"", length = 200, nullable = false)
    private String description;

    @Column(name = "\"NAME\"", length = 80)
    private String name;

    @Column(name = "\"COLLAPSIBLE\"")
    private Boolean collapsible;

    @Column(name = "\"ORDER_ITEM\"")
    private Integer orderItem;

    @Column(name = "\"SUBMODULE_DELETED\"")
    private Boolean submoduleDeleted;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 250, nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50, nullable = false)
    private String lastModifyIp;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        SubmoduleEntity that = (SubmoduleEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/profile/cmd/api/models/entity/TypeEntity.java

```java
package com.nubo.profile.cmd.api.models.entity;

import java.time.LocalDateTime;
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
    @Column(name = "\"TYPE_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"DESCRIPTION\"", length = 80)
    private String description;

    @Column(name = "\"CATEGORY\"", length = 30)
    private String category;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 250, nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50, nullable = false)
    private String lastModifyIp;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        TypeEntity that = (TypeEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/profile/cmd/api/models/enums/PropertiesEnum.java

```java
package com.nubo.profile.cmd.api.models.enums;

import java.util.Arrays;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

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
}

```

## src/main/java/com/nubo/profile/cmd/api/models/enums/StatusProfileEnum.java

```java
package com.nubo.profile.cmd.api.models.enums;

import java.util.Arrays;
import java.util.Objects;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum StatusProfileEnum {

    ACTIVE(505L),
    INACTIVE(506L),
    SUSPENDED(507L),
    BLOCKED(508L),
    DELETED(509L);

    private final Long statusId;

    @JsonValue
    public Long getStatusId() {
        return statusId;
    }

    @JsonCreator
    public static StatusProfileEnum fromValue(Long value) {
        return Arrays.stream(StatusProfileEnum.values())
                .filter(status -> Objects.equals(status.statusId, value))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Unknown value: " + value));
    }

    @Converter(autoApply = true)
    public static class StatusProfileEnumConverter implements AttributeConverter<StatusProfileEnum, Long> {

        @Override
        public Long convertToDatabaseColumn(StatusProfileEnum status) {
            return status != null ? status.getStatusId() : null;
        }

        @Override
        public StatusProfileEnum convertToEntityAttribute(Long dbData) {
            return dbData != null ? StatusProfileEnum.fromValue(dbData) : null;
        }
    }

}

```

## src/main/java/com/nubo/profile/cmd/api/models/enums/TypeEnum.java

```java
package com.nubo.profile.cmd.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum TypeEnum {

    ADMIN(3500L, "ADMINISTRATIVO", "TIPO_PERFIL"),
    NOT_ADMIN(3501L, "NO ADMINISTRATIVO", "TIPO_PERFIL");

    private final Long typeId;
    private final String description;
    private final String category;

}

```

## src/main/java/com/nubo/profile/cmd/api/models/enums/VersionApiEnum.java

```java
package com.nubo.profile.cmd.api.models.enums;

import java.util.Arrays;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

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
}

```

## src/main/java/com/nubo/profile/cmd/api/repository/MenuAssignmentRepository.java

```java
package com.nubo.profile.cmd.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.nubo.profile.cmd.api.models.entity.MenuAssignmentEntity;

public interface MenuAssignmentRepository extends JpaRepository<MenuAssignmentEntity, Long> {

    @Modifying(flushAutomatically = true)
    @Query("DELETE FROM MenuAssignmentEntity m WHERE m.profile.id = :profileId")
    void deleteAllByProfile_Id(Long profileId);

    List<MenuAssignmentEntity> findAllByProfile_Id(Long profileId);

}

```

## src/main/java/com/nubo/profile/cmd/api/repository/MenuConfigurationRepository.java

```java
package com.nubo.profile.cmd.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.profile.cmd.api.models.entity.MenuConfigurationEntity;

public interface MenuConfigurationRepository extends JpaRepository<MenuConfigurationEntity, Long> {

}

```

## src/main/java/com/nubo/profile/cmd/api/repository/ParticipantRepository.java

```java
package com.nubo.profile.cmd.api.repository;

import com.nubo.profile.cmd.api.models.entity.ParticipantEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ParticipantRepository extends JpaRepository<ParticipantEntity, Long> {

}

```

## src/main/java/com/nubo/profile/cmd/api/repository/ProfileRepository.java

```java
package com.nubo.profile.cmd.api.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.data.jpa.repository.Query;

import com.nubo.profile.cmd.api.models.entity.ProfileEntity;

import jakarta.persistence.LockModeType;
import jakarta.validation.constraints.NotNull;

public interface ProfileRepository extends JpaRepository<ProfileEntity, Long>, JpaSpecificationExecutor<ProfileEntity> {

    @Lock(LockModeType.PESSIMISTIC_WRITE)
    @Query("SELECT p FROM ProfileEntity p WHERE p.id = :profileId")
    Optional<ProfileEntity> findByIdForUpdate(@NotNull Long profileId);

    @Query("""
            SELECT CASE WHEN COUNT(p) > 0 THEN true ELSE false END
            FROM ProfileEntity p
            WHERE LOWER(p.name) = LOWER(:profileName)
            AND p.status.id <> :excludedStatusId
            AND p.participant.id = :participantId
                 """)
    boolean existsByNameIgnoreCaseAndParticipantIdAndStatusIdNot(
            @NotNull String profileName,
            @NotNull Long participantId,
            @NotNull Long excludedStatusId);

    @Query("""
            SELECT CASE WHEN COUNT(p) > 0 THEN true ELSE false END
            FROM ProfileEntity p
            WHERE p.participant.id = :participantId
            AND p.type.id = :typeId
            AND p.status.id <> :excludedStatusId
                 """)
    boolean existsByParticipantIdAndTypeId(
            @NotNull Long participantId,
            @NotNull Long typeId,
            @NotNull Long excludedStatusId);

    @Query("""
            SELECT CASE WHEN COUNT(p) > 0 THEN true ELSE false END
            FROM ProfileEntity p
            WHERE p.participant.id = :participantId
            AND p.type.id = :typeId
            AND p.status.id <> :excludedStatusId
            AND p.id <> :profileId
                 """)
    boolean existsByParticipantIdAndTypeIdNotProfileId(
            @NotNull Long participantId,
            @NotNull Long typeId,
            @NotNull Long excludedStatusId,
            @NotNull Long profileId);

    @Query("""
            SELECT p FROM ProfileEntity p
            WHERE p.participant.id = :participantId
            AND p.type.id = :typeId
            AND p.status.id <> :excludedStatusId
                 """)
    List<ProfileEntity> findByParticipantIdAndTypeId(
            @NotNull Long participantId,
            @NotNull Long typeId,
            @NotNull Long excludedStatusId);
}

```

## src/main/java/com/nubo/profile/cmd/api/repository/ProfileUserNuboRepository.java

```java
package com.nubo.profile.cmd.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.profile.cmd.api.models.entity.ProfileUserNuboEntity;
import com.nubo.profile.cmd.api.models.entity.ProfileUserNuboKey;

public interface ProfileUserNuboRepository extends JpaRepository<ProfileUserNuboEntity, ProfileUserNuboKey> {

    List<ProfileUserNuboEntity> findByProfileId(Long profileId);
}

```

## src/main/java/com/nubo/profile/cmd/api/repository/ScreenActionRepository.java

```java
package com.nubo.profile.cmd.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.profile.cmd.api.models.entity.ScreenActionEntity;

public interface ScreenActionRepository extends JpaRepository<ScreenActionEntity, Long> {

}

```

## src/main/java/com/nubo/profile/cmd/api/repository/StatusRepository.java

```java
package com.nubo.profile.cmd.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.profile.cmd.api.models.entity.StatusEntity;

public interface StatusRepository extends JpaRepository<StatusEntity, Long> {
}

```

## src/main/java/com/nubo/profile/cmd/api/repository/TypeRepository.java

```java
package com.nubo.profile.cmd.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.profile.cmd.api.models.entity.TypeEntity;

public interface TypeRepository extends JpaRepository<TypeEntity, Long>{

}

```

## src/main/java/com/nubo/profile/cmd/api/service/ProfileService.java

```java
package com.nubo.profile.cmd.api.service;

import com.nubo.profile.cmd.api.models.dto.request.ProfileInDto;
import com.nubo.profile.cmd.api.models.dto.request.ProfileUpdateInDto;
import com.nubo.profile.cmd.api.models.dto.response.ProfileOutDto;
import com.nubo.profile.cmd.api.models.dto.response.ProfileValidateOutDto;

public interface ProfileService {

    ProfileOutDto createProfile(ProfileInDto profileInDto);

    ProfileOutDto updateProfile(Long profileId, ProfileUpdateInDto profileUpdateInDto);

    void deleteProfileById(Long profileId);

    ProfileValidateOutDto validateProfileAdminByParticipant(Long participantId);

}

```

## src/main/java/com/nubo/profile/cmd/api/service/impl/ProfileServiceImpl.java

```java
package com.nubo.profile.cmd.api.service.impl;

import java.util.List;
import java.util.Objects;

import org.apache.commons.lang3.ObjectUtils;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nubo.profile.cmd.api.application.properties.PropertiesConfig;
import com.nubo.profile.cmd.api.application.properties.PropertiesContext;
import com.nubo.profile.cmd.api.exception.ServiceException;
import com.nubo.profile.cmd.api.exception.error.ErrorCode;
import com.nubo.profile.cmd.api.helpers.MapperUtil;
import com.nubo.profile.cmd.api.models.dto.request.MenuConfigurationInDto;
import com.nubo.profile.cmd.api.models.dto.request.ProfileInDto;
import com.nubo.profile.cmd.api.models.dto.request.ProfileUpdateInDto;
import com.nubo.profile.cmd.api.models.dto.response.ProfileOutDto;
import com.nubo.profile.cmd.api.models.dto.response.ProfileValidateOutDto;
import com.nubo.profile.cmd.api.models.entity.MenuAssignmentEntity;
import com.nubo.profile.cmd.api.models.entity.MenuConfigurationEntity;
import com.nubo.profile.cmd.api.models.entity.ParticipantEntity;
import com.nubo.profile.cmd.api.models.entity.ProfileEntity;
import com.nubo.profile.cmd.api.models.entity.ProfileUserNuboEntity;
import com.nubo.profile.cmd.api.models.entity.ScreenActionEntity;
import com.nubo.profile.cmd.api.models.entity.StatusEntity;
import com.nubo.profile.cmd.api.models.entity.TypeEntity;
import com.nubo.profile.cmd.api.models.enums.StatusProfileEnum;
import com.nubo.profile.cmd.api.models.enums.TypeEnum;
import com.nubo.profile.cmd.api.models.enums.VersionApiEnum;
import com.nubo.profile.cmd.api.repository.MenuAssignmentRepository;
import com.nubo.profile.cmd.api.repository.MenuConfigurationRepository;
import com.nubo.profile.cmd.api.repository.ParticipantRepository;
import com.nubo.profile.cmd.api.repository.ProfileRepository;
import com.nubo.profile.cmd.api.repository.ProfileUserNuboRepository;
import com.nubo.profile.cmd.api.repository.ScreenActionRepository;
import com.nubo.profile.cmd.api.repository.StatusRepository;
import com.nubo.profile.cmd.api.repository.TypeRepository;
import com.nubo.profile.cmd.api.service.ProfileService;

import jakarta.validation.constraints.NotNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class ProfileServiceImpl implements ProfileService {

    private final ProfileRepository profileRepository;
    private final StatusRepository statusRepository;
    private final ParticipantRepository participantRepository;
    private final MenuAssignmentRepository menuAssignmentRepository;
    private final MenuConfigurationRepository menuConfigurationRepository;
    private final ProfileUserNuboRepository profileUserNuboRepository;
    private final ScreenActionRepository screenActionRepository;
    private final TypeRepository typeRepository;
    private final PropertiesConfig propertiesConfig;

    @Transactional
    @Override
    public ProfileOutDto createProfile(ProfileInDto profileInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return createProfileV1(profileInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private ProfileOutDto createProfileV1(ProfileInDto profileInDto) {
        log.info("Start method createProfileV1, profile -> {}", profileInDto);

        ParticipantEntity participantEntity = validateParticipant(profileInDto.getParticipantId());
        TypeEnum typeEnum = Boolean.TRUE.equals(profileInDto.getIsAdmin()) ? TypeEnum.ADMIN : TypeEnum.NOT_ADMIN;
        if (typeEnum == TypeEnum.ADMIN && hasParticipantProfileAdmin(participantEntity)) {
            throw new ServiceException(ErrorCode.PARTICIPANT_ALREADY_HAS_ADMIN_PROFILE, HttpStatus.BAD_REQUEST);
        }

        ProfileEntity newProfileEntity = ProfileEntity.builder()
                .name(validateProfileNameUnique(profileInDto.getName(), profileInDto.getParticipantId()))
                .description(profileInDto.getDescription())
                .status(validateStatus(StatusProfileEnum.ACTIVE.getStatusId()))
                .participant(participantEntity)
                .type(validateType(typeEnum.getTypeId()))
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyIp(PropertiesContext.getClientIp())
                .lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyDateTime(PropertiesContext.getClientDatetime())
                .build();
        ProfileEntity profileEntitySave = profileRepository.save(newProfileEntity);
        log.info("Profile saved -> {}", profileEntitySave);

        List<MenuAssignmentEntity> newMenuAssignmentEntityList = profileInDto.getMenuConfigurations().stream()
                .flatMap(menuConfiguration -> createAllMenuAssignment(profileEntitySave, menuConfiguration).stream())
                .toList();

        List<MenuAssignmentEntity> menuAssignmentEntitySaveList = menuAssignmentRepository
                .saveAll(newMenuAssignmentEntityList);
        log.info("Menu assignments saved, size -> {}", menuAssignmentEntitySaveList.size());

        ProfileOutDto profileOutDto = MapperUtil.toProfileOutDto(profileEntitySave, menuAssignmentEntitySaveList);

        log.info("End method createProfileV1, profile -> {}", profileOutDto);
        return profileOutDto;
    }

    @Transactional
    @Override
    public ProfileOutDto updateProfile(Long profileId, ProfileUpdateInDto profileUpdateInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return updateProfileV1(profileId, profileUpdateInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private ProfileOutDto updateProfileV1(Long profileId, ProfileUpdateInDto profileUpdateInDto) {
        log.info("Start method updateProfileV1, profileId -> {}, profile -> {}", profileId, profileUpdateInDto);

        ProfileEntity profileEntityLast = validateProfileForUpdate(profileId);

        ParticipantEntity participantEntity = ObjectUtils.isEmpty(profileUpdateInDto.getParticipantId())
                        ? profileEntityLast.getParticipant()
                        : validateParticipant(profileUpdateInDto.getParticipantId());
        TypeEnum typeEnum = Boolean.TRUE.equals(profileUpdateInDto.getIsAdmin()) ? TypeEnum.ADMIN : TypeEnum.NOT_ADMIN;
        if (typeEnum == TypeEnum.ADMIN && hasParticipantProfileAdmin(participantEntity, profileId)) {
            throw new ServiceException(ErrorCode.PARTICIPANT_ALREADY_HAS_ADMIN_PROFILE, HttpStatus.BAD_REQUEST);
        }

        ProfileEntity profileEntity = profileEntityLast.toBuilder()
                .name(ObjectUtils.isEmpty(profileUpdateInDto.getName())
                        ? profileEntityLast.getName()
                        : validateProfileNameUnique(profileUpdateInDto.getName(), profileEntityLast,
                                profileUpdateInDto.getParticipantId()))
                .description(ObjectUtils.isEmpty(profileUpdateInDto.getDescription())
                        ? profileEntityLast.getDescription()
                        : profileUpdateInDto.getDescription())
                .status(ObjectUtils.isEmpty(profileUpdateInDto.getStatusId())
                        ? profileEntityLast.getStatus()
                        : validateStatus(profileUpdateInDto.getStatusId()))
                .participant(participantEntity)
                .type(ObjectUtils.isEmpty(profileUpdateInDto.getIsAdmin())
                        ? profileEntityLast.getType()
                        : validateType(typeEnum.getTypeId()))
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyIp(PropertiesContext.getClientIp())
                .lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyDateTime(PropertiesContext.getClientDatetime())
                .build();
        ProfileEntity profileEntitySave = profileRepository.save(profileEntity);
        log.info("Profile saved -> {}", profileEntitySave);

        List<MenuAssignmentEntity> menuAssignmentEntityList = profileUpdateInDto.getMenuConfigurations().stream()
                .flatMap(menuConfiguration -> createAllMenuAssignment(profileEntitySave, menuConfiguration).stream())
                .toList();

        List<MenuAssignmentEntity> menuAssignmentEntitySaveList = updateAllMenuAssignmentEntity(profileId,
                menuAssignmentEntityList);
        log.info("Menu assignments saved, size -> {}", menuAssignmentEntitySaveList.size());

        ProfileOutDto profileOutDto = MapperUtil.toProfileOutDto(profileEntitySave, menuAssignmentEntitySaveList);
        log.info("End method updateProfileV1, profile -> {}", profileOutDto);
        return profileOutDto;
    }

    @Transactional
    @Override
    public void deleteProfileById(Long profileId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            deleteProfileByIdV1(profileId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private void deleteProfileByIdV1(Long profileId) {
        log.info("Start method deleteProfileByIdV1, profileId -> {}", profileId);

        ProfileEntity profileEntityLast = validateProfileForUpdate(profileId);
        List<ProfileUserNuboEntity> profileUserNuboEntity = profileUserNuboRepository.findByProfileId(profileId);

        if (!profileUserNuboEntity.isEmpty()) {
            throw new ServiceException(ErrorCode.PROFILE_USER_NUBO_EXIST, HttpStatus.BAD_REQUEST);
        }

        ProfileEntity profileUpdate = profileEntityLast.toBuilder()
                .status(validateStatus(StatusProfileEnum.DELETED.getStatusId()))
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyIp(PropertiesContext.getClientIp())
                .lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyDateTime(PropertiesContext.getClientDatetime())
                .build();

        profileRepository.save(profileUpdate);

        log.info("End method deleteProfileByIdV1, profileId -> {}", profileId);
    }

    @Override
    public ProfileValidateOutDto validateProfileAdminByParticipant(Long participantId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return validateProfileAdminByParticipantV1(participantId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private ProfileValidateOutDto validateProfileAdminByParticipantV1(Long participantId) {
        log.info("Start method validateProfileAdminByParticipantV1, participantId -> {}", participantId);

        ParticipantEntity participantEntity = validateParticipant(participantId);

        List<ProfileEntity> profileAdminList = profileRepository.findByParticipantIdAndTypeId(
                participantEntity.getId(),
                TypeEnum.ADMIN.getTypeId(),
                StatusProfileEnum.DELETED.getStatusId());

        boolean isParticipantAdmin = !profileAdminList.isEmpty();
        Long profileId = isParticipantAdmin ? profileAdminList.get(0).getId() : null;
        String profileName = isParticipantAdmin ? profileAdminList.get(0).getName() : null;

        ProfileValidateOutDto profileValidateOutDto = ProfileValidateOutDto.builder()
                .isParticipantAdmin(isParticipantAdmin)
                .profileId(profileId)
                .profileName(profileName)
                .build();

        log.info("End method validateProfileAdminByParticipantV1, response -> {}", profileValidateOutDto);
        return profileValidateOutDto;
    }

    private boolean hasParticipantProfileAdmin(ParticipantEntity participantEntity) {
        return profileRepository.existsByParticipantIdAndTypeId(
                participantEntity.getId(),
                TypeEnum.ADMIN.getTypeId(),
                StatusProfileEnum.DELETED.getStatusId());
    }

    private boolean hasParticipantProfileAdmin(ParticipantEntity participantEntity, Long profileId) {
        return profileRepository.existsByParticipantIdAndTypeIdNotProfileId(
                participantEntity.getId(),
                TypeEnum.ADMIN.getTypeId(),
                StatusProfileEnum.DELETED.getStatusId(),
                profileId);
    }

    private ProfileEntity validateProfileForUpdate(Long profileId) {
        return profileRepository.findByIdForUpdate(profileId)
                .orElseThrow(() -> new ServiceException(ErrorCode.PROFILE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private StatusEntity validateStatus(Long statusId) {
        return statusRepository.findById(statusId)
                .orElseThrow(() -> new ServiceException(ErrorCode.STATUS_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private TypeEntity validateType(Long typeId) {
        return typeRepository.findById(typeId)
                .orElseThrow(() -> new ServiceException(ErrorCode.TYPE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private ParticipantEntity validateParticipant(Long participantId) {
        return participantRepository.findById(participantId)
                .orElseThrow(() -> new ServiceException(ErrorCode.PARTICIPANT_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private MenuConfigurationEntity validateMenuConfiguration(Long menuConfigurationId) {
        return menuConfigurationRepository.findById(menuConfigurationId)
                .orElseThrow(() -> new ServiceException(ErrorCode.MENU_CONFIGURATION_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private List<ScreenActionEntity> validateAllScreenAction(List<Long> screenActionIds) {
        List<ScreenActionEntity> screenActionEntityList = screenActionRepository.findAllById(screenActionIds);
        if (screenActionEntityList.size() != screenActionIds.size()) {
            throw new ServiceException(ErrorCode.SCREEN_ACTION_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
        return screenActionEntityList;
    }

    private String validateProfileNameUnique(@NotNull String name, @NotNull Long participantId) {
        boolean exists = profileRepository.existsByNameIgnoreCaseAndParticipantIdAndStatusIdNot(
                name, participantId, StatusProfileEnum.DELETED.getStatusId());
        if (exists) {
            throw new ServiceException(ErrorCode.PROFILE_NAME_ALREADY_EXISTS, HttpStatus.BAD_REQUEST);
        }
        return name;
    }

    private String validateProfileNameUnique(@NotNull String name, @NotNull ProfileEntity profileEntity,
            Long participantId) {
        if (ObjectUtils.isEmpty(participantId)) {
            participantId = profileEntity.getParticipant().getId();
        }
        if (!profileEntity.getName().equalsIgnoreCase(name)
                && profileRepository.existsByNameIgnoreCaseAndParticipantIdAndStatusIdNot(name,
                        participantId, StatusProfileEnum.DELETED.getStatusId())) {
            throw new ServiceException(ErrorCode.PROFILE_NAME_ALREADY_EXISTS, HttpStatus.BAD_REQUEST);
        }
        return name;
    }

    private List<MenuAssignmentEntity> createAllMenuAssignment(ProfileEntity profileEntity,
            MenuConfigurationInDto menuConfigurationInDto) {
        MenuConfigurationEntity menuConfigurationEntity = validateMenuConfiguration(
                menuConfigurationInDto.getMenuConfigurationId());
        if (menuConfigurationInDto.getScreenActionIds().isEmpty()) {
            return List.of(MenuAssignmentEntity.builder()
                    .profile(profileEntity)
                    .menuConfiguration(menuConfigurationEntity)
                    .screen(menuConfigurationEntity.getScreen())
                    .screenAction(null)
                    .lastModifyApplication(propertiesConfig.getApiName())
                    .lastModifyIp(PropertiesContext.getClientIp())
                    .lastModifyUser(PropertiesContext.getClientUser())
                    .lastModifyDateTime(PropertiesContext.getClientDatetime())
                    .build());
        }
        List<ScreenActionEntity> screenActionEntityList = validateAllScreenAction(
                menuConfigurationInDto.getScreenActionIds());
        return screenActionEntityList.stream()
                .map(screenAction -> MenuAssignmentEntity.builder()
                        .profile(profileEntity)
                        .menuConfiguration(menuConfigurationEntity)
                        .screen(menuConfigurationEntity.getScreen())
                        .screenAction(screenAction)
                        .lastModifyApplication(propertiesConfig.getApiName())
                        .lastModifyIp(PropertiesContext.getClientIp())
                        .lastModifyUser(PropertiesContext.getClientUser())
                        .lastModifyDateTime(PropertiesContext.getClientDatetime())
                        .build())
                .toList();
    }

    private List<MenuAssignmentEntity> updateAllMenuAssignmentEntity(Long profileId,
            List<MenuAssignmentEntity> menuAssignmentEntityList) {
        menuAssignmentRepository.deleteAllByProfile_Id(profileId);
        return menuAssignmentRepository.saveAll(menuAssignmentEntityList);
    }

}

```

## src/main/java/com/nubo/profile/cmd/api/web/controller/ProfileRestController.java

```java
package com.nubo.profile.cmd.api.web.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nubo.profile.cmd.api.models.dto.request.ProfileInDto;
import com.nubo.profile.cmd.api.models.dto.request.ProfileUpdateInDto;
import com.nubo.profile.cmd.api.models.dto.response.ProfileOutDto;
import com.nubo.profile.cmd.api.models.dto.response.ProfileValidateOutDto;
import com.nubo.profile.cmd.api.service.ProfileService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@Tag(name = "Profile")
@RequestMapping("/{version}/profile")
@RestController
@RequiredArgsConstructor
public class ProfileRestController {

    private final ProfileService profileService;

    @Operation(summary = "Create a new profile", description = "Creates a new profile")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = ProfileOutDto.class))) })
    @PostMapping
    public ResponseEntity<ProfileOutDto> createProfile(@Valid @RequestBody ProfileInDto profileInDto) {
        ProfileOutDto profileOutDto = profileService.createProfile(profileInDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(profileOutDto);
    }

    @Operation(summary = "Update an existing profile", description = "Updates an existing profile")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = ProfileOutDto.class))) })
    @PatchMapping("/{profileId}")
    public ResponseEntity<ProfileOutDto> updateProfile(@PathVariable Long profileId,
            @Valid @RequestBody ProfileUpdateInDto profileUpdateInDto) {
        ProfileOutDto profileOutDto = profileService.updateProfile(profileId, profileUpdateInDto);
        return ResponseEntity.status(HttpStatus.OK).body(profileOutDto);
    }

    @Operation(summary = "Delete profile by id",
            description = "Performs logical deletion of a profile by changing its status to DELETED")
    @ApiResponses(value = { @ApiResponse(responseCode = "204", description = "Successfully Response") })
    @DeleteMapping("/{profileId}")
    public ResponseEntity<Void> deleteProfileById(@PathVariable Long profileId) {
        profileService.deleteProfileById(profileId);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    @Operation(summary = "Validate profile by participant", description = "Validates a profile by participant")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = ProfileValidateOutDto.class))) })
    @GetMapping("/admin/validate/participant/{participantId}")
    public ResponseEntity<ProfileValidateOutDto> validateProfileAdminByParticipant(@PathVariable Long participantId) {
        ProfileValidateOutDto profileValidateOutDto = profileService.validateProfileAdminByParticipant(participantId);
        return ResponseEntity.status(HttpStatus.OK).body(profileValidateOutDto);
    }

}

```
