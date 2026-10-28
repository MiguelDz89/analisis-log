# nbo-png-perfiles-query-back

Código fuente de producción y configuraciones. Captura local: 28/10/2026.

Incluye 86 archivos Java y 16 archivos de configuración, recursos y compilación/despliegue.

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
17. `src/main/java/com/nubo/profile/query/api/ProfileQueryApiApplication.java`
18. `src/main/java/com/nubo/profile/query/api/application/annotations/ValidBigDecimal.java`
19. `src/main/java/com/nubo/profile/query/api/application/config/SwaggerConfig.java`
20. `src/main/java/com/nubo/profile/query/api/application/config/ValidBigDecimalConfig.java`
21. `src/main/java/com/nubo/profile/query/api/application/config/WebConfig.java`
22. `src/main/java/com/nubo/profile/query/api/application/context/GlobalContext.java`
23. `src/main/java/com/nubo/profile/query/api/application/database/NamingStrategyConfig.java`
24. `src/main/java/com/nubo/profile/query/api/application/database/UpperNamingConfig.java`
25. `src/main/java/com/nubo/profile/query/api/application/filters/GlobalFilter.java`
26. `src/main/java/com/nubo/profile/query/api/application/interceptors/GlobalInterceptor.java`
27. `src/main/java/com/nubo/profile/query/api/application/properties/PropertiesConfig.java`
28. `src/main/java/com/nubo/profile/query/api/application/properties/PropertiesContext.java`
29. `src/main/java/com/nubo/profile/query/api/application/util/ApplicationUtils.java`
30. `src/main/java/com/nubo/profile/query/api/exception/ServiceException.java`
31. `src/main/java/com/nubo/profile/query/api/exception/error/ErrorCode.java`
32. `src/main/java/com/nubo/profile/query/api/exception/error/ErrorResponse.java`
33. `src/main/java/com/nubo/profile/query/api/exception/error/ErrorValidation.java`
34. `src/main/java/com/nubo/profile/query/api/exception/handler/GlobalExceptionHandler.java`
35. `src/main/java/com/nubo/profile/query/api/helpers/MapperMenuTreeUtil.java`
36. `src/main/java/com/nubo/profile/query/api/helpers/MapperPageUtil.java`
37. `src/main/java/com/nubo/profile/query/api/helpers/MapperUtil.java`
38. `src/main/java/com/nubo/profile/query/api/helpers/ProfileSearchCriteria.java`
39. `src/main/java/com/nubo/profile/query/api/models/domain/MenuConfiguration.java`
40. `src/main/java/com/nubo/profile/query/api/models/domain/ProfileParams.java`
41. `src/main/java/com/nubo/profile/query/api/models/dto/response/CategoryTreeOutDto.java`
42. `src/main/java/com/nubo/profile/query/api/models/dto/response/CountryOutDto.java`
43. `src/main/java/com/nubo/profile/query/api/models/dto/response/EnterpriseGroupOutDto.java`
44. `src/main/java/com/nubo/profile/query/api/models/dto/response/IdentificationTypeOutDto.java`
45. `src/main/java/com/nubo/profile/query/api/models/dto/response/MenuTreeOutDto.java`
46. `src/main/java/com/nubo/profile/query/api/models/dto/response/ModuleTreeOutDto.java`
47. `src/main/java/com/nubo/profile/query/api/models/dto/response/PageResponseOutDto.java`
48. `src/main/java/com/nubo/profile/query/api/models/dto/response/ParticipantOutDto.java`
49. `src/main/java/com/nubo/profile/query/api/models/dto/response/ProfileDistinctOutDto.java`
50. `src/main/java/com/nubo/profile/query/api/models/dto/response/ProfileOutDto.java`
51. `src/main/java/com/nubo/profile/query/api/models/dto/response/ScreenActionOutDto.java`
52. `src/main/java/com/nubo/profile/query/api/models/dto/response/ScreenOutDto.java`
53. `src/main/java/com/nubo/profile/query/api/models/dto/response/StatusOutDto.java`
54. `src/main/java/com/nubo/profile/query/api/models/dto/response/SubmoduleTreeOutDto.java`
55. `src/main/java/com/nubo/profile/query/api/models/dto/response/TypeOutDto.java`
56. `src/main/java/com/nubo/profile/query/api/models/dto/response/ValidationOutDto.java`
57. `src/main/java/com/nubo/profile/query/api/models/entity/AccessTypeEntity.java`
58. `src/main/java/com/nubo/profile/query/api/models/entity/CategoryAccessTypeEntity.java`
59. `src/main/java/com/nubo/profile/query/api/models/entity/CategoryAccessTypeKey.java`
60. `src/main/java/com/nubo/profile/query/api/models/entity/CategoryEntity.java`
61. `src/main/java/com/nubo/profile/query/api/models/entity/CountryEntity.java`
62. `src/main/java/com/nubo/profile/query/api/models/entity/EnterpriseGroupEntity.java`
63. `src/main/java/com/nubo/profile/query/api/models/entity/IdentificationTypeEntity.java`
64. `src/main/java/com/nubo/profile/query/api/models/entity/MenuAssignmentEntity.java`
65. `src/main/java/com/nubo/profile/query/api/models/entity/MenuConfigurationEntity.java`
66. `src/main/java/com/nubo/profile/query/api/models/entity/ModuleAccessTypeEntity.java`
67. `src/main/java/com/nubo/profile/query/api/models/entity/ModuleAccessTypeKey.java`
68. `src/main/java/com/nubo/profile/query/api/models/entity/ModuleEntity.java`
69. `src/main/java/com/nubo/profile/query/api/models/entity/ParticipantEntity.java`
70. `src/main/java/com/nubo/profile/query/api/models/entity/ProfileEntity.java`
71. `src/main/java/com/nubo/profile/query/api/models/entity/ScreenActionAccessTypeEntity.java`
72. `src/main/java/com/nubo/profile/query/api/models/entity/ScreenActionAccessTypeKey.java`
73. `src/main/java/com/nubo/profile/query/api/models/entity/ScreenActionEntity.java`
74. `src/main/java/com/nubo/profile/query/api/models/entity/ScreenEntity.java`
75. `src/main/java/com/nubo/profile/query/api/models/entity/StatusEntity.java`
76. `src/main/java/com/nubo/profile/query/api/models/entity/SubmoduleAccessTypeEntity.java`
77. `src/main/java/com/nubo/profile/query/api/models/entity/SubmoduleAccessTypeKey.java`
78. `src/main/java/com/nubo/profile/query/api/models/entity/SubmoduleEntity.java`
79. `src/main/java/com/nubo/profile/query/api/models/entity/TypeAccessTypeEntity.java`
80. `src/main/java/com/nubo/profile/query/api/models/entity/TypeAccessTypeKey.java`
81. `src/main/java/com/nubo/profile/query/api/models/entity/TypeEntity.java`
82. `src/main/java/com/nubo/profile/query/api/models/entity/UserNuboEntity.java`
83. `src/main/java/com/nubo/profile/query/api/models/enums/ParticipantEnum.java`
84. `src/main/java/com/nubo/profile/query/api/models/enums/PropertiesEnum.java`
85. `src/main/java/com/nubo/profile/query/api/models/enums/StatusEnum.java`
86. `src/main/java/com/nubo/profile/query/api/models/enums/TypeEnum.java`
87. `src/main/java/com/nubo/profile/query/api/models/enums/UserTypeEnum.java`
88. `src/main/java/com/nubo/profile/query/api/models/enums/VersionApiEnum.java`
89. `src/main/java/com/nubo/profile/query/api/repository/CategoryAccessTypeRepository.java`
90. `src/main/java/com/nubo/profile/query/api/repository/MenuConfigurationRepository.java`
91. `src/main/java/com/nubo/profile/query/api/repository/ModuleAccessTypeRepository.java`
92. `src/main/java/com/nubo/profile/query/api/repository/ProfileRepository.java`
93. `src/main/java/com/nubo/profile/query/api/repository/ScreenActionRepository.java`
94. `src/main/java/com/nubo/profile/query/api/repository/SubmoduleAccessTypeRepository.java`
95. `src/main/java/com/nubo/profile/query/api/repository/TypeAccessTypeRepository.java`
96. `src/main/java/com/nubo/profile/query/api/repository/UserNuboRepository.java`
97. `src/main/java/com/nubo/profile/query/api/service/MenuConfigurationService.java`
98. `src/main/java/com/nubo/profile/query/api/service/ProfileService.java`
99. `src/main/java/com/nubo/profile/query/api/service/impl/MenuConfigurationServiceImpl.java`
100. `src/main/java/com/nubo/profile/query/api/service/impl/ProfileServiceImpl.java`
101. `src/main/java/com/nubo/profile/query/api/web/controller/MenuConfigurationRestController.java`
102. `src/main/java/com/nubo/profile/query/api/web/controller/ProfileRestController.java`

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
	<groupId>com.nubo.profile.query.api</groupId>
	<artifactId>profile-query-api</artifactId>
	<version>0.23.0-beta.5</version>
	<name>${project.artifactId}</name>
	<description>Profile Query API</description>

	<properties>
		<java.version>21</java.version>
		<spring.port>8080</spring.port>
		<test.skip>false</test.skip>
		<datasource.url.application.name>ApplicationName=${project.artifactId}</datasource.url.application.name>
		<hikari.pool.name>${project.artifactId}-pool</hikari.pool.name>

        <!-- vulnerability adjustment -->
        <log4j2.version>2.25.4</log4j2.version>
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
								<exclude>**/ProfileQueryApiApplication.class</exclude>
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
,------. ,------.  ,-----. ,------.,--.,--.   ,------. ,-----.   ,--. ,--.,------.,------.,--.   ,--.,---.  ,------. ,--. 
|  .--. '|  .--. ''  .-.  '|  .---'|  ||  |   |  .---''  .-.  '  |  | |  ||  .---'|  .--. '\  `.'  //  O  \ |  .--. '|  | 
|  '--' ||  '--'.'|  | |  ||  `--, |  ||  |   |  `--, |  | |  |  |  | |  ||  `--, |  '--'.' '.    /|  .-.  ||  '--' ||  | 
|  | --' |  |\  \ '  '-'  '|  |`   |  ||  '--.|  `---.'  '-'  '-.'  '-'  '|  `---.|  |\  \    |  | |  | |  ||  | --' |  | 
`--'     `--' '--' `-----' `--'    `--'`-----'`------' `-----'--' `-----' `------'`--' '--'   `--' `--' `--'`--'     `--' 
                                                                                                                          
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

## src/main/java/com/nubo/profile/query/api/ProfileQueryApiApplication.java

```java
package com.nubo.profile.query.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ProfileQueryApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProfileQueryApiApplication.class, args);
	}

}

```

## src/main/java/com/nubo/profile/query/api/application/annotations/ValidBigDecimal.java

```java
package com.nubo.profile.query.api.application.annotations;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import com.nubo.profile.query.api.application.config.ValidBigDecimalConfig;

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

## src/main/java/com/nubo/profile/query/api/application/config/SwaggerConfig.java

```java
package com.nubo.profile.query.api.application.config;

import com.nubo.profile.query.api.exception.error.ErrorResponse;
import com.nubo.profile.query.api.exception.error.ErrorValidation;
import com.nubo.profile.query.api.models.enums.PropertiesEnum;
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

## src/main/java/com/nubo/profile/query/api/application/config/ValidBigDecimalConfig.java

```java
package com.nubo.profile.query.api.application.config;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

import java.math.BigDecimal;

import com.nubo.profile.query.api.application.annotations.ValidBigDecimal;

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

## src/main/java/com/nubo/profile/query/api/application/config/WebConfig.java

```java
package com.nubo.profile.query.api.application.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestClient;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.i18n.SessionLocaleResolver;

import com.nubo.profile.query.api.application.interceptors.GlobalInterceptor;

import java.util.Locale;

@Configuration
@RequiredArgsConstructor
public class WebConfig implements WebMvcConfigurer {

    private final GlobalInterceptor globalInterceptor;

    @Bean
    public LocaleResolver localeResolver() {
        SessionLocaleResolver slr = new SessionLocaleResolver();
        slr.setDefaultLocale(Locale.ENGLISH);
        return slr;
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(globalInterceptor)
                .addPathPatterns("/**");
    }

    @Bean
    public RestClient restClientCreate() {
        return RestClient.create();
    }

}

```

## src/main/java/com/nubo/profile/query/api/application/context/GlobalContext.java

```java
package com.nubo.profile.query.api.application.context;

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

## src/main/java/com/nubo/profile/query/api/application/database/NamingStrategyConfig.java

```java
package com.nubo.profile.query.api.application.database;

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

## src/main/java/com/nubo/profile/query/api/application/database/UpperNamingConfig.java

```java
package com.nubo.profile.query.api.application.database;

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

## src/main/java/com/nubo/profile/query/api/application/filters/GlobalFilter.java

```java
package com.nubo.profile.query.api.application.filters;

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

import com.nubo.profile.query.api.application.context.GlobalContext;
import com.nubo.profile.query.api.application.util.ApplicationUtils;
import com.nubo.profile.query.api.exception.ServiceException;
import com.nubo.profile.query.api.exception.error.ErrorCode;
import com.nubo.profile.query.api.exception.error.ErrorResponse;
import com.nubo.profile.query.api.models.enums.PropertiesEnum;
import com.nubo.profile.query.api.models.enums.VersionApiEnum;

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

## src/main/java/com/nubo/profile/query/api/application/interceptors/GlobalInterceptor.java

```java
package com.nubo.profile.query.api.application.interceptors;

import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import com.nubo.profile.query.api.application.context.GlobalContext;

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

## src/main/java/com/nubo/profile/query/api/application/properties/PropertiesConfig.java

```java
package com.nubo.profile.query.api.application.properties;

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

## src/main/java/com/nubo/profile/query/api/application/properties/PropertiesContext.java

```java
package com.nubo.profile.query.api.application.properties;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import com.nubo.profile.query.api.application.context.GlobalContext;
import com.nubo.profile.query.api.application.util.ApplicationUtils;
import com.nubo.profile.query.api.models.enums.PropertiesEnum;

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

## src/main/java/com/nubo/profile/query/api/application/util/ApplicationUtils.java

```java
package com.nubo.profile.query.api.application.util;

import tools.jackson.databind.ObjectMapper;
import com.nubo.profile.query.api.exception.ServiceException;
import com.nubo.profile.query.api.exception.error.ErrorCode;

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

## src/main/java/com/nubo/profile/query/api/exception/ServiceException.java

```java
package com.nubo.profile.query.api.exception;


import lombok.Getter;
import org.springframework.http.HttpStatus;

import com.nubo.profile.query.api.exception.error.ErrorCode;

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

    public ServiceException(ErrorCode errorCode, HttpStatus httpStatus, String messageError) {
        super(errorCode.getMessage(), new Throwable(messageError));
        this.errorCode = errorCode;
        this.httpStatus = httpStatus;
    }

    public HttpStatus getHttpStatusOrDefault() {
        return this.httpStatus != null ? this.httpStatus : HttpStatus.INTERNAL_SERVER_ERROR;
    }

}

```

## src/main/java/com/nubo/profile/query/api/exception/error/ErrorCode.java

```java
package com.nubo.profile.query.api.exception.error;


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
    ERROR_DESERIALIZER_JSON("Error Deserializer Json"),
    TRADE_VALIDATION_FAILED("Trade validation failed"),
    ERROR_KAFKA_PRODUCER_NUBO("Error Producer Kafka Nubo"),
    STATUS_NOT_FOUND("Status not found in database"),
    UNKNOWN_VALUE("Unknown value provided"),
    VERSION_API_NOT_FOUND("Version API not found"),
    PROFILE_NOT_FOUND("Profile not found"),
    USER_NOT_FOUND("User not found");


    private final String message;

    ErrorCode(String message) {
        this.message = message;
    }

    public String getName() {
        return this.name();
    }

}

```

## src/main/java/com/nubo/profile/query/api/exception/error/ErrorResponse.java

```java
package com.nubo.profile.query.api.exception.error;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
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

## src/main/java/com/nubo/profile/query/api/exception/error/ErrorValidation.java

```java
package com.nubo.profile.query.api.exception.error;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ErrorValidation {

    private String id;
    private String description;

}
```

## src/main/java/com/nubo/profile/query/api/exception/handler/GlobalExceptionHandler.java

```java
package com.nubo.profile.query.api.exception.handler;

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

import com.nubo.profile.query.api.application.properties.PropertiesContext;
import com.nubo.profile.query.api.exception.ServiceException;
import com.nubo.profile.query.api.exception.error.ErrorCode;
import com.nubo.profile.query.api.exception.error.ErrorResponse;
import com.nubo.profile.query.api.exception.error.ErrorValidation;

import java.util.List;


@RestControllerAdvice
@Slf4j
@RequiredArgsConstructor
public class GlobalExceptionHandler {

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handlerGeneralException(Exception exception, HttpServletRequest request) {
        return buildErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, exception, request, ErrorCode.UNEXPECTED);
    }

    @ExceptionHandler(ServiceException.class)
    public ResponseEntity<ErrorResponse> handlerServiceException(ServiceException exception, HttpServletRequest request) {
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
        List<ErrorValidation> errors = exception.getBindingResult().getFieldErrors().stream().map(error ->
                ErrorValidation.builder().id(error.getField()).description(error.getDefaultMessage()).build()).toList();
        return buildErrorResponse(HttpStatus.BAD_REQUEST, exception, request, ErrorCode.BAD_REQUEST, errors);
    }

    private ResponseEntity<ErrorResponse> buildErrorResponse(HttpStatus status, Exception exception,
                                                             HttpServletRequest request, ErrorCode errorCode) {
        return buildErrorResponse(status, exception, request, errorCode, null);
    }

    private ResponseEntity<ErrorResponse> buildErrorResponse(HttpStatus status, Exception exception, HttpServletRequest request,
                                                             ErrorCode errorCode, List<ErrorValidation> errorDetails) {

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

## src/main/java/com/nubo/profile/query/api/helpers/MapperMenuTreeUtil.java

```java
package com.nubo.profile.query.api.helpers;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.util.ObjectUtils;

import com.nubo.profile.query.api.models.domain.MenuConfiguration;
import com.nubo.profile.query.api.models.dto.response.CategoryTreeOutDto;
import com.nubo.profile.query.api.models.dto.response.MenuTreeOutDto;
import com.nubo.profile.query.api.models.dto.response.ModuleTreeOutDto;
import com.nubo.profile.query.api.models.dto.response.ScreenActionOutDto;
import com.nubo.profile.query.api.models.dto.response.SubmoduleTreeOutDto;
import com.nubo.profile.query.api.models.entity.AccessTypeEntity;
import com.nubo.profile.query.api.models.entity.CategoryAccessTypeEntity;
import com.nubo.profile.query.api.models.entity.CategoryEntity;
import com.nubo.profile.query.api.models.entity.MenuAssignmentEntity;
import com.nubo.profile.query.api.models.entity.ModuleAccessTypeEntity;
import com.nubo.profile.query.api.models.entity.ModuleEntity;
import com.nubo.profile.query.api.models.entity.SubmoduleAccessTypeEntity;
import com.nubo.profile.query.api.models.entity.SubmoduleEntity;

public final class MapperMenuTreeUtil {

    private MapperMenuTreeUtil() {
    }

    public static MenuTreeOutDto menuAssignmentEntityToMenuTreeOutDto(
            List<MenuAssignmentEntity> menuAssignmentEntityList) {
        if (ObjectUtils.isEmpty(menuAssignmentEntityList)) {
            return MenuTreeOutDto.builder()
                    .categories(new ArrayList<>())
                    .build();
        }

        Map<Long, List<ScreenActionOutDto>> screenActionsByMenuConfig = menuAssignmentEntityList.stream()
                .filter(Objects::nonNull)
                .filter(assignment -> assignment.getMenuConfiguration() != null)
                .filter(assignment -> assignment.getScreenAction() != null)
                .collect(Collectors.groupingBy(
                        assignment -> assignment.getMenuConfiguration().getId(),
                        Collectors.mapping(
                                assignment -> MapperUtil
                                        .screenActionEntityToScreenActionOutDto(assignment.getScreenAction()),
                                Collectors.filtering(Objects::nonNull, Collectors.toList()))));

        Set<MenuConfiguration> menuConfigurationSet = menuAssignmentEntityList.stream()
                .filter(Objects::nonNull)
                .filter(assignment -> assignment.getMenuConfiguration() != null
                        && Boolean.TRUE.equals(assignment.getMenuConfiguration().getEnabled()))
                .collect(Collectors.toMap(
                        assignment -> assignment.getMenuConfiguration().getId(),
                        assignment -> createMenuConfigurationOutDto(assignment, screenActionsByMenuConfig),
                        (existing, replacement) -> existing,
                        LinkedHashMap::new))
                .values()
                .stream()
                .collect(Collectors.toSet());

        return menuConfigurationSetToMenuTreeOutDto(menuConfigurationSet);
    }

    public static MenuTreeOutDto menuConfigurationSetToMenuTreeOutDto(
            Set<MenuConfiguration> menuConfigurationSet) {
        if (ObjectUtils.isEmpty(menuConfigurationSet)) {
            return MenuTreeOutDto.builder()
                    .categories(new ArrayList<>())
                    .build();
        }
        Map<CategoryEntity, List<MenuConfiguration>> categoriesMap = menuConfigurationSet.stream()
                .filter(menu -> menu.getCategoryEntity() != null)
                .collect(Collectors.groupingBy(MenuConfiguration::getCategoryEntity));

        List<CategoryTreeOutDto> categoryTreeList = categoriesMap.entrySet().stream()
                .map(categoryEntry -> {
                    CategoryEntity categoryEntity = categoryEntry.getKey();
                    List<MenuConfiguration> categoryMenus = categoryEntry.getValue();

                    Map<ModuleEntity, List<MenuConfiguration>> modulesMap = categoryMenus.stream()
                            .filter(menu -> menu.getModuleEntity() != null)
                            .collect(Collectors.groupingBy(MenuConfiguration::getModuleEntity));

                    List<ModuleTreeOutDto> moduleTreeList = modulesMap.entrySet().stream()
                            .map(moduleEntry -> {
                                ModuleEntity moduleEntity = moduleEntry.getKey();
                                List<MenuConfiguration> moduleMenus = moduleEntry.getValue();

                                Map<SubmoduleEntity, List<MenuConfiguration>> submodulesMap = moduleMenus.stream()
                                        .filter(menu -> menu.getSubmoduleEntity() != null)
                                        .collect(Collectors.groupingBy(MenuConfiguration::getSubmoduleEntity));

                                List<SubmoduleTreeOutDto> submoduleTreeList = submodulesMap.entrySet().stream()
                                        .map(submoduleEntry -> toSubmoduleTreeOutDto(
                                                submoduleEntry.getKey(),
                                                submoduleEntry.getValue()))
                                        .filter(Objects::nonNull)
                                        .sorted((s1, s2) -> Integer.compare(
                                                s1.getOrderItem() != null ? s1.getOrderItem() : 0,
                                                s2.getOrderItem() != null ? s2.getOrderItem() : 0))
                                        .collect(Collectors.toList());

                                return toModuleTreeOutDto(moduleEntity, submoduleTreeList, moduleMenus);
                            })
                            .filter(Objects::nonNull)
                            .sorted((m1, m2) -> Integer.compare(
                                    m1.getOrderItem() != null ? m1.getOrderItem() : 0,
                                    m2.getOrderItem() != null ? m2.getOrderItem() : 0))
                            .collect(Collectors.toList());

                    return toCategoryTreeOutDto(categoryEntity, moduleTreeList, categoryMenus);
                })
                .filter(Objects::nonNull)
                .sorted((c1, c2) -> Integer.compare(
                        c1.getOrderItem() != null ? c1.getOrderItem() : 0,
                        c2.getOrderItem() != null ? c2.getOrderItem() : 0))
                .collect(Collectors.toList());

        return MenuTreeOutDto.builder()
                .categories(categoryTreeList)
                .build();
    }

    public static MenuTreeOutDto menuConfigurationSetToMenuTreeOutDto(
            Set<MenuConfiguration> menuConfigurationSet,
            Set<Long> allowedAccessTypeIds) {
        if (ObjectUtils.isEmpty(menuConfigurationSet)) {
            return MenuTreeOutDto.builder()
                    .categories(new ArrayList<>())
                    .build();
        }
        Map<CategoryEntity, List<MenuConfiguration>> categoriesMap = menuConfigurationSet.stream()
                .filter(menu -> menu.getCategoryEntity() != null)
                .collect(Collectors.groupingBy(MenuConfiguration::getCategoryEntity));

        List<CategoryTreeOutDto> categoryTreeList = categoriesMap.entrySet().stream()
                .map(categoryEntry -> {
                    CategoryEntity categoryEntity = categoryEntry.getKey();

                    List<Long> categoryAccessTypeIds = categoryEntity.getCategoryAccessTypeList()
                            .stream()
                            .map(CategoryAccessTypeEntity::getAccessType)
                            .map(AccessTypeEntity::getId)
                            .collect(Collectors.toList());
                    if (!categoryAccessTypeIds.isEmpty() &&
                            categoryAccessTypeIds.stream().noneMatch(allowedAccessTypeIds::contains)) {
                        return null;
                    }

                    List<MenuConfiguration> categoryMenus = categoryEntry.getValue();

                    Map<ModuleEntity, List<MenuConfiguration>> modulesMap = categoryMenus.stream()
                            .filter(menu -> menu.getModuleEntity() != null)
                            .collect(Collectors.groupingBy(MenuConfiguration::getModuleEntity));

                    List<ModuleTreeOutDto> moduleTreeList = modulesMap.entrySet().stream()
                            .map(moduleEntry -> {
                                ModuleEntity moduleEntity = moduleEntry.getKey();

                                List<Long> moduleAccessTypeIds = moduleEntity.getModuleAccessTypeList()
                                        .stream()
                                        .map(ModuleAccessTypeEntity::getAccessType)
                                        .map(AccessTypeEntity::getId)
                                        .collect(Collectors.toList());
                                if (!moduleAccessTypeIds.isEmpty() &&
                                        moduleAccessTypeIds.stream().noneMatch(allowedAccessTypeIds::contains)) {
                                    return null;
                                }

                                List<MenuConfiguration> moduleMenus = moduleEntry.getValue();

                                Map<SubmoduleEntity, List<MenuConfiguration>> submodulesMap = moduleMenus.stream()
                                        .filter(menu -> menu.getSubmoduleEntity() != null)
                                        .collect(Collectors.groupingBy(MenuConfiguration::getSubmoduleEntity));

                                List<SubmoduleTreeOutDto> submoduleTreeList = submodulesMap.entrySet().stream()
                                        .map(submoduleEntry -> {
                                            SubmoduleEntity submoduleEntity = submoduleEntry.getKey();
                                            List<Long> submoduleAccessTypeIds = submoduleEntity
                                                    .getSubmoduleAccessTypeList()
                                                    .stream()
                                                    .map(SubmoduleAccessTypeEntity::getAccessType)
                                                    .map(AccessTypeEntity::getId)
                                                    .collect(Collectors.toList());
                                            if (!submoduleAccessTypeIds.isEmpty() &&
                                                    submoduleAccessTypeIds.stream()
                                                            .noneMatch(allowedAccessTypeIds::contains)) {
                                                return null;
                                            }

                                            return toSubmoduleTreeOutDto(
                                                submoduleEntity,
                                                submoduleEntry.getValue());
                                        })
                                        .filter(Objects::nonNull)
                                        .sorted((s1, s2) -> Integer.compare(
                                                s1.getOrderItem() != null ? s1.getOrderItem() : 0,
                                                s2.getOrderItem() != null ? s2.getOrderItem() : 0))
                                        .collect(Collectors.toList());

                                return toModuleTreeOutDto(moduleEntity, submoduleTreeList, moduleMenus);
                            })
                            .filter(Objects::nonNull)
                            .sorted((m1, m2) -> Integer.compare(
                                    m1.getOrderItem() != null ? m1.getOrderItem() : 0,
                                    m2.getOrderItem() != null ? m2.getOrderItem() : 0))
                            .collect(Collectors.toList());

                    return toCategoryTreeOutDto(categoryEntity, moduleTreeList, categoryMenus);
                })
                .filter(Objects::nonNull)
                .sorted((c1, c2) -> Integer.compare(
                        c1.getOrderItem() != null ? c1.getOrderItem() : 0,
                        c2.getOrderItem() != null ? c2.getOrderItem() : 0))
                .collect(Collectors.toList());

        return MenuTreeOutDto.builder()
                .categories(categoryTreeList)
                .build();
    }

    private static CategoryTreeOutDto toCategoryTreeOutDto(CategoryEntity categoryEntity,
            List<ModuleTreeOutDto> modules, List<MenuConfiguration> menuConfigurationList) {
        MenuConfiguration categoryMenus = menuConfigurationList.stream()
                .filter(Objects::nonNull)
                .findFirst()
                .orElse(null);
        return CategoryTreeOutDto.builder()
                .id(categoryEntity.getId())
                .name(categoryEntity.getName())
                .description(categoryEntity.getDescription())
                .collapsible(categoryEntity.getCollapsible())
                .orderItem(categoryEntity.getOrderItem())
                .categoryDeleted(categoryEntity.getCategoryDeleted())
                .status(MapperUtil.statusEntityToStatusOutDto(categoryEntity.getStatus()))
                .modules(modules)
                .menuConfigurationId(ObjectUtils.isEmpty(modules) && categoryMenus != null
                        ? categoryMenus.getId()
                        : null)
                .screen(ObjectUtils.isEmpty(modules) && categoryMenus != null
                        ? categoryMenus.getScreenOutDto()
                        : null)
                .build();
    }

    private static ModuleTreeOutDto toModuleTreeOutDto(ModuleEntity moduleEntity,
            List<SubmoduleTreeOutDto> submodules, List<MenuConfiguration> menuConfigurationList) {
        MenuConfiguration moduleMenus = menuConfigurationList.stream()
                .filter(Objects::nonNull)
                .findFirst()
                .orElse(null);
        return ModuleTreeOutDto.builder()
                .id(moduleEntity.getId())
                .name(moduleEntity.getName())
                .description(moduleEntity.getDescription())
                .collapsible(moduleEntity.getCollapsible())
                .orderItem(moduleEntity.getOrderItem())
                .moduleDeleted(moduleEntity.getModuleDeleted())
                .status(MapperUtil.statusEntityToStatusOutDto(moduleEntity.getStatus()))
                .submodules(submodules)
                .menuConfigurationId(ObjectUtils.isEmpty(submodules) && moduleMenus != null
                        ? moduleMenus.getId()
                        : null)
                .screen(ObjectUtils.isEmpty(submodules) && moduleMenus != null
                        ? moduleMenus.getScreenOutDto()
                        : null)
                .build();
    }

    private static SubmoduleTreeOutDto toSubmoduleTreeOutDto(SubmoduleEntity submoduleEntity,
            List<MenuConfiguration> menuConfigurationList) {
        return menuConfigurationList.stream()
                .filter(Objects::nonNull)
                .findFirst()
                .map(menuConfiguration -> SubmoduleTreeOutDto.builder()
                        .id(submoduleEntity.getId())
                        .name(submoduleEntity.getName())
                        .description(submoduleEntity.getDescription())
                        .collapsible(submoduleEntity.getCollapsible())
                        .orderItem(submoduleEntity.getOrderItem())
                        .submoduleDeleted(submoduleEntity.getSubmoduleDeleted())
                        .status(MapperUtil.statusEntityToStatusOutDto(submoduleEntity.getStatus()))
                        .menuConfigurationId(menuConfiguration.getId())
                        .screen(menuConfiguration.getScreenOutDto())
                        .build())
                .orElse(SubmoduleTreeOutDto.builder()
                        .id(submoduleEntity.getId())
                        .name(submoduleEntity.getName())
                        .description(submoduleEntity.getDescription())
                        .collapsible(submoduleEntity.getCollapsible())
                        .orderItem(submoduleEntity.getOrderItem())
                        .submoduleDeleted(submoduleEntity.getSubmoduleDeleted())
                        .status(MapperUtil.statusEntityToStatusOutDto(submoduleEntity.getStatus()))
                        .menuConfigurationId(null)
                        .screen(null)
                        .build());
    }

    private static MenuConfiguration createMenuConfigurationOutDto(
            MenuAssignmentEntity menuAssignment,
            Map<Long, List<ScreenActionOutDto>> screenActionsByMenuConfig) {

        Long menuConfigId = menuAssignment.getMenuConfiguration().getId();
        List<ScreenActionOutDto> screenActions = screenActionsByMenuConfig.getOrDefault(menuConfigId, List.of());

        return MapperUtil.menuConfigurationEntityToMenuConfiguration(
                menuAssignment.getMenuConfiguration(),
                screenActions);
    }
}

```

## src/main/java/com/nubo/profile/query/api/helpers/MapperPageUtil.java

```java
package com.nubo.profile.query.api.helpers;

import org.springframework.data.domain.Page;

import com.nubo.profile.query.api.models.dto.response.PageResponseOutDto;

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

    public static <T> PageResponseOutDto<T> pageToPageResponseOutDto(List<T> content, int page, int size,
            int totalElements) {
        PageResponseOutDto<T> pageResponse = new PageResponseOutDto<>();
        pageResponse.setContent(content);
        pageResponse.setPageNumber(page);
        pageResponse.setPageSize(size);
        pageResponse.setTotalElements((long) totalElements);
        pageResponse.setTotalPages(size > 0 ? (int) Math.ceil((double) totalElements / size) : 0);
        return pageResponse;
    }

}

```

## src/main/java/com/nubo/profile/query/api/helpers/MapperUtil.java

```java
package com.nubo.profile.query.api.helpers;

import java.util.List;
import java.util.Objects;

import com.nubo.profile.query.api.models.enums.StatusEnum;
import org.springframework.util.ObjectUtils;

import com.nubo.profile.query.api.models.domain.MenuConfiguration;
import com.nubo.profile.query.api.models.dto.response.CountryOutDto;
import com.nubo.profile.query.api.models.dto.response.EnterpriseGroupOutDto;
import com.nubo.profile.query.api.models.dto.response.IdentificationTypeOutDto;
import com.nubo.profile.query.api.models.dto.response.ParticipantOutDto;
import com.nubo.profile.query.api.models.dto.response.ProfileOutDto;
import com.nubo.profile.query.api.models.dto.response.ScreenActionOutDto;
import com.nubo.profile.query.api.models.dto.response.ScreenOutDto;
import com.nubo.profile.query.api.models.dto.response.StatusOutDto;
import com.nubo.profile.query.api.models.dto.response.TypeOutDto;
import com.nubo.profile.query.api.models.entity.CountryEntity;
import com.nubo.profile.query.api.models.entity.EnterpriseGroupEntity;
import com.nubo.profile.query.api.models.entity.IdentificationTypeEntity;
import com.nubo.profile.query.api.models.entity.MenuConfigurationEntity;
import com.nubo.profile.query.api.models.entity.ParticipantEntity;
import com.nubo.profile.query.api.models.entity.ProfileEntity;
import com.nubo.profile.query.api.models.entity.ScreenActionEntity;
import com.nubo.profile.query.api.models.entity.ScreenEntity;
import com.nubo.profile.query.api.models.entity.StatusEntity;
import com.nubo.profile.query.api.models.entity.TypeEntity;
import com.nubo.profile.query.api.models.enums.TypeEnum;

public final class MapperUtil {

    private MapperUtil() {
    }

    public static ProfileOutDto profileEntityToProfileOutDto(ProfileEntity profileEntity) {
        if (ObjectUtils.isEmpty(profileEntity))
            return null;
        return ProfileOutDto.builder()
                .id(profileEntity.getId())
                .name(profileEntity.getName())
                .description(ObjectUtils.isEmpty(profileEntity.getDescription())
                        ? null
                        : profileEntity.getDescription())
                .participant(participantEntityToParticipantOutDto(profileEntity.getParticipant()))
                .status(statusEntityToStatusOutDto(profileEntity.getStatus()))
                .type(typeEntityToTypeOutDto(profileEntity.getType()))
                .isAdmin(isAdmin(profileEntity.getType()))
                .lastModifyUser(profileEntity.getLastModifyUser())
                .lastModifyDateTime(profileEntity.getLastModifyDateTime())
                .lastModifyDate(ObjectUtils.isEmpty(profileEntity.getLastModifyDateTime())
                        ? null
                        : profileEntity.getLastModifyDateTime().toLocalDate())
                .menuConfiguration(MapperMenuTreeUtil.menuAssignmentEntityToMenuTreeOutDto(
                        profileEntity.getMenuAssignmentEntityList()))
                .isActive(StatusEnum.PROFILE_ACTIVE.getId().equals(profileEntity.getStatus().getId()))
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
                .enterpriseGroup(enterpriseGroupEntityToEnterpriseGroupOutDto(participantEntity.getEnterpriseGroup()))
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

    public static MenuConfiguration menuConfigurationEntityToMenuConfiguration(
            MenuConfigurationEntity menuConfigurationEntity, List<ScreenActionOutDto> screenActionOutDtoList) {
        if (ObjectUtils.isEmpty(menuConfigurationEntity))
            return null;
        return MenuConfiguration.builder()
                .id(menuConfigurationEntity.getId())
                .name(menuConfigurationEntity.getName())
                .description(menuConfigurationEntity.getDescription())
                .enabled(menuConfigurationEntity.getEnabled())
                .screenOutDto(screenEntityToScreenOutDto(menuConfigurationEntity.getScreen(),
                        screenActionOutDtoList))
                .categoryEntity(menuConfigurationEntity.getCategory())
                .moduleEntity(menuConfigurationEntity.getModule())
                .submoduleEntity(menuConfigurationEntity.getSubmodule())
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
                .path(screenActionEntity.getPath())
                .build();
    }

    public static ScreenOutDto screenEntityToScreenOutDto(ScreenEntity screenEntity,
            List<ScreenActionOutDto> screenActionOutDtoList) {
        if (ObjectUtils.isEmpty(screenEntity))
            return null;
        return ScreenOutDto.builder()
                .id(screenEntity.getId())
                .code(screenEntity.getCode())
                .description(screenEntity.getDescription())
                .screenActions(screenActionOutDtoList)
                .build();
    }
}

```

## src/main/java/com/nubo/profile/query/api/helpers/ProfileSearchCriteria.java

```java
package com.nubo.profile.query.api.helpers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.jpa.domain.Specification;
import org.springframework.util.ObjectUtils;

import com.nubo.profile.query.api.models.domain.ProfileParams;
import com.nubo.profile.query.api.models.entity.ProfileEntity;
import com.nubo.profile.query.api.models.enums.ParticipantEnum;
import com.nubo.profile.query.api.models.enums.StatusEnum;
import com.nubo.profile.query.api.models.enums.TypeEnum;
import com.nubo.profile.query.api.models.enums.UserTypeEnum;

import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;

public final class ProfileSearchCriteria {

    private ProfileSearchCriteria() {
    }

    public static Specification<ProfileEntity> createSpecification(ProfileParams profileParams) {
        return (root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();

            Predicate participantPredicate = buildParticipantPredicate(root, criteriaBuilder,
                    profileParams.participantId(),
                    profileParams.participantNubo());
            if (participantPredicate != null) {
                predicates.add(participantPredicate);
            }

            if (!ObjectUtils.isEmpty(profileParams.onlyActive()) && profileParams.onlyActive()) {
                predicates.add(criteriaBuilder.equal(
                        root.get("status").get("id"), StatusEnum.PROFILE_ACTIVE.getId()));
            }

            if (!ObjectUtils.isEmpty(profileParams.profileName())) {
                String profileNameLower = "%" + profileParams.profileName().toLowerCase().trim() + "%";
                predicates.add(criteriaBuilder.like(
                        criteriaBuilder.lower(root.get("name")), profileNameLower));
            }
            if (!ObjectUtils.isEmpty(profileParams.profileId())) {
                predicates.add(criteriaBuilder.equal(
                        root.get("id"), profileParams.profileId()));
            }
            if (!ObjectUtils.isEmpty(profileParams.lastModifyDate())) {
                predicates.add(criteriaBuilder.greaterThanOrEqualTo(
                        root.get("lastModifyDateTime"),
                        profileParams.lastModifyDate().atStartOfDay()));
                predicates.add(criteriaBuilder.lessThan(
                        root.get("lastModifyDateTime"),
                        profileParams.lastModifyDate().plusDays(1).atStartOfDay()));
            }
            if (!ObjectUtils.isEmpty(profileParams.lastModifyUser())) {
                String lastModifyUserLower = "%" + profileParams.lastModifyUser().toLowerCase().trim() + "%";
                predicates.add(criteriaBuilder.like(
                        criteriaBuilder.lower(root.get("lastModifyUser")), lastModifyUserLower));
            }
            if (!ObjectUtils.isEmpty(profileParams.userType())) {
                if (UserTypeEnum.EXTERNAL.getValue().equalsIgnoreCase(profileParams.userType())) {
                    predicates.add(criteriaBuilder.or(
                            criteriaBuilder.isNull(root.get("type")),
                            criteriaBuilder.notEqual(
                                    root.get("type").get("id"), TypeEnum.ADMIN.getTypeId())));
                }
            }

            return predicates.isEmpty()
                    ? criteriaBuilder.conjunction()
                    : criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }

    public static Specification<ProfileEntity> createSpecification(Long participantId, Boolean participantNubo) {
        return (root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();

            // Always exclude deleted profiles
            predicates.add(criteriaBuilder.notEqual(
                    root.get("status").get("id"), StatusEnum.PROFILE_DELETED.getId()));

            Predicate participantPredicate = buildParticipantPredicate(root, criteriaBuilder,
                    participantId,
                    participantNubo);
            if (participantPredicate != null) {
                predicates.add(participantPredicate);
            }
            return predicates.isEmpty()
                    ? criteriaBuilder.conjunction()
                    : criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }

    private static Predicate buildParticipantPredicate(
            Root<ProfileEntity> root, CriteriaBuilder criteriaBuilder, Long participantId, Boolean participantNubo) {
        final String attributeParticipant = "participant";
        if (participantId != null) {
            if (Boolean.TRUE.equals(participantNubo)
                    && !participantId.equals(ParticipantEnum.PARTICIPANT_NUBO.getId())) {
                return criteriaBuilder.or(
                        criteriaBuilder.equal(root.get(attributeParticipant)
                                .get("id"), ParticipantEnum.PARTICIPANT_NUBO.getId()),
                        criteriaBuilder.equal(root.get(attributeParticipant)
                                .get("id"), participantId));
            } else {
                return criteriaBuilder.equal(root.get(attributeParticipant).get("id"), participantId);
            }
        } else {
            if (Boolean.TRUE.equals(participantNubo)) {
                return criteriaBuilder.equal(
                        root.get(attributeParticipant)
                                .get("id"),
                        ParticipantEnum.PARTICIPANT_NUBO.getId());
            } else if (Boolean.FALSE.equals(participantNubo)) {
                return criteriaBuilder.notEqual(
                        root.get(attributeParticipant)
                                .get("id"),
                        ParticipantEnum.PARTICIPANT_NUBO.getId());
            }
        }
        return null;
    }
}

```

## src/main/java/com/nubo/profile/query/api/models/domain/MenuConfiguration.java

```java
package com.nubo.profile.query.api.models.domain;

import java.util.Objects;

import com.nubo.profile.query.api.models.dto.response.ScreenOutDto;
import com.nubo.profile.query.api.models.entity.CategoryEntity;
import com.nubo.profile.query.api.models.entity.ModuleEntity;
import com.nubo.profile.query.api.models.entity.SubmoduleEntity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MenuConfiguration {

    private Long id;

    private String name;

    private String description;

    private Boolean enabled;

    private ScreenOutDto screenOutDto;

    private CategoryEntity categoryEntity;

    private ModuleEntity moduleEntity;

    private SubmoduleEntity submoduleEntity;

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null || getClass() != obj.getClass())
            return false;

        MenuConfiguration that = (MenuConfiguration) obj;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

}

```

## src/main/java/com/nubo/profile/query/api/models/domain/ProfileParams.java

```java
package com.nubo.profile.query.api.models.domain;

import java.time.LocalDate;

public record ProfileParams(
        Integer page,
        Integer size,
        String sort,
        String order,
        Long participantId,
        String profileName,
        Long profileId,
        LocalDate lastModifyDate,
        Boolean participantNubo,
        Boolean all,
        String lastModifyUser,
        String userType,
        Boolean onlyActive) {
}

```

## src/main/java/com/nubo/profile/query/api/models/dto/response/CategoryTreeOutDto.java

```java
package com.nubo.profile.query.api.models.dto.response;

import java.util.List;

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
public class CategoryTreeOutDto {

    private Long id;

    private String name;

    private String description;

    private Boolean collapsible;

    private Integer orderItem;

    private Boolean categoryDeleted;

    private StatusOutDto status;

    private List<ModuleTreeOutDto> modules;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private Long menuConfigurationId;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private ScreenOutDto screen;

}

```

## src/main/java/com/nubo/profile/query/api/models/dto/response/CountryOutDto.java

```java
package com.nubo.profile.query.api.models.dto.response;

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

## src/main/java/com/nubo/profile/query/api/models/dto/response/EnterpriseGroupOutDto.java

```java
package com.nubo.profile.query.api.models.dto.response;

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

## src/main/java/com/nubo/profile/query/api/models/dto/response/IdentificationTypeOutDto.java

```java
package com.nubo.profile.query.api.models.dto.response;

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

## src/main/java/com/nubo/profile/query/api/models/dto/response/MenuTreeOutDto.java

```java
package com.nubo.profile.query.api.models.dto.response;

import java.util.List;

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
public class MenuTreeOutDto {

    private List<CategoryTreeOutDto> categories;

}

```

## src/main/java/com/nubo/profile/query/api/models/dto/response/ModuleTreeOutDto.java

```java
package com.nubo.profile.query.api.models.dto.response;

import java.util.List;

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
public class ModuleTreeOutDto {

    private Long id;

    private String name;

    private String description;

    private Boolean collapsible;

    private Integer orderItem;

    private Boolean moduleDeleted;

    private StatusOutDto status;

    private List<SubmoduleTreeOutDto> submodules;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private Long menuConfigurationId;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private ScreenOutDto screen;

}

```

## src/main/java/com/nubo/profile/query/api/models/dto/response/PageResponseOutDto.java

```java
package com.nubo.profile.query.api.models.dto.response;

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

    @Override
    public String toString() {
        return "PageResponseOutDto{" +
                "contentType="
                + (content != null && !content.isEmpty() ? content.get(0).getClass().getSimpleName() : "empty") +
                ", pageSize=" + pageSize +
                ", pageNumber=" + pageNumber +
                ", totalElements=" + totalElements +
                ", totalPages=" + totalPages +
                '}';
    }
}

```

## src/main/java/com/nubo/profile/query/api/models/dto/response/ParticipantOutDto.java

```java
package com.nubo.profile.query.api.models.dto.response;

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

## src/main/java/com/nubo/profile/query/api/models/dto/response/ProfileDistinctOutDto.java

```java
package com.nubo.profile.query.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ProfileDistinctOutDto {

    private String name;

    private String lastModifyUser;

}

```

## src/main/java/com/nubo/profile/query/api/models/dto/response/ProfileOutDto.java

```java
package com.nubo.profile.query.api.models.dto.response;

import java.time.LocalDate;
import java.time.LocalDateTime;

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

    private MenuTreeOutDto menuConfiguration;

    private Boolean isActive;

}

```

## src/main/java/com/nubo/profile/query/api/models/dto/response/ScreenActionOutDto.java

```java
package com.nubo.profile.query.api.models.dto.response;

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

    private String path;

}

```

## src/main/java/com/nubo/profile/query/api/models/dto/response/ScreenOutDto.java

```java
package com.nubo.profile.query.api.models.dto.response;

import java.util.List;

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

    private List<ScreenActionOutDto> screenActions;

}

```

## src/main/java/com/nubo/profile/query/api/models/dto/response/StatusOutDto.java

```java
package com.nubo.profile.query.api.models.dto.response;

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

## src/main/java/com/nubo/profile/query/api/models/dto/response/SubmoduleTreeOutDto.java

```java
package com.nubo.profile.query.api.models.dto.response;

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
public class SubmoduleTreeOutDto {

    private Long id;

    private String name;

    private String description;

    private Boolean collapsible;

    private Integer orderItem;

    private Boolean submoduleDeleted;

    private StatusOutDto status;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private Long menuConfigurationId;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private ScreenOutDto screen;

}

```

## src/main/java/com/nubo/profile/query/api/models/dto/response/TypeOutDto.java

```java
package com.nubo.profile.query.api.models.dto.response;

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

## src/main/java/com/nubo/profile/query/api/models/dto/response/ValidationOutDto.java

```java
package com.nubo.profile.query.api.models.dto.response;

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
public class ValidationOutDto {

    private Boolean isValid;

}

```

## src/main/java/com/nubo/profile/query/api/models/entity/AccessTypeEntity.java

```java
package com.nubo.profile.query.api.models.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Builder
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"ACCESS_TYPE\"", schema = "\"NUANBODB\"")
public class AccessTypeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"ACCESS_TYPE_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"CODE\"")
    private Integer code;

    @Column(name = "\"DESCRIPTION\"", nullable = false, length = 200)
    private String description;

    @Column(name = "\"NAME\"", length = 80)
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

        AccessTypeEntity that = (AccessTypeEntity) o;
        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

}

```

## src/main/java/com/nubo/profile/query/api/models/entity/CategoryAccessTypeEntity.java

```java
package com.nubo.profile.query.api.models.entity;

import java.time.LocalDateTime;
import java.util.Objects;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"CATEGORY_ACCESS_TYPE\"", schema = "\"NUANBODB\"")
@IdClass(CategoryAccessTypeKey.class)
public class CategoryAccessTypeEntity {

    @Id
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "\"CATEGORY_ID\"", nullable = false)
    private CategoryEntity category;

    @Id
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "\"ACCESS_TYPE_ID\"", nullable = false)
    private AccessTypeEntity accessType;

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

        CategoryAccessTypeEntity that = (CategoryAccessTypeEntity) o;

        if (!Objects.equals(category, that.category))
            return false;
        return Objects.equals(accessType, that.accessType);
    }

    @Override
    public int hashCode() {
        int result = Objects.hashCode(category);
        result = 31 * result + Objects.hashCode(accessType);
        return result;
    }
}

```

## src/main/java/com/nubo/profile/query/api/models/entity/CategoryAccessTypeKey.java

```java
package com.nubo.profile.query.api.models.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CategoryAccessTypeKey implements Serializable {

    private Long category;

    private Long accessType;

}

```

## src/main/java/com/nubo/profile/query/api/models/entity/CategoryEntity.java

```java
package com.nubo.profile.query.api.models.entity;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Builder
@Setter
@Getter
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

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"", nullable = false)
    private StatusEntity status;

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

    @Builder.Default
    @OneToMany(mappedBy = "category", fetch = FetchType.LAZY)
    private List<CategoryAccessTypeEntity> categoryAccessTypeList = new ArrayList<>();

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;

        CategoryEntity that = (CategoryEntity) o;
        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/profile/query/api/models/entity/CountryEntity.java

```java
package com.nubo.profile.query.api.models.entity;

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

## src/main/java/com/nubo/profile/query/api/models/entity/EnterpriseGroupEntity.java

```java
package com.nubo.profile.query.api.models.entity;

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

import java.time.LocalDateTime;

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

        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/profile/query/api/models/entity/IdentificationTypeEntity.java

```java
package com.nubo.profile.query.api.models.entity;

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

    @Column(name = "\"CODE\"")
    private String code;

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

## src/main/java/com/nubo/profile/query/api/models/entity/MenuAssignmentEntity.java

```java
package com.nubo.profile.query.api.models.entity;

import java.time.LocalDateTime;

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

@Builder
@Setter
@Getter
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
    @JoinColumn(name = "\"MENU_CONFIGURATION_ID\"")
    private MenuConfigurationEntity menuConfiguration;

    @ManyToOne
    @JoinColumn(name = "\"PROFILE_ID\"")
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
        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

}

```

## src/main/java/com/nubo/profile/query/api/models/entity/MenuConfigurationEntity.java

```java
package com.nubo.profile.query.api.models.entity;

import java.time.LocalDateTime;

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

@Builder
@Setter
@Getter
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

    @ManyToOne()
    @JoinColumn(name = "\"CATEGORY_ID\"")
    private CategoryEntity category;

    @ManyToOne()
    @JoinColumn(name = "\"MODULE_ID\"")
    private ModuleEntity module;

    @ManyToOne()
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
        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

}

```

## src/main/java/com/nubo/profile/query/api/models/entity/ModuleAccessTypeEntity.java

```java
package com.nubo.profile.query.api.models.entity;

import java.time.LocalDateTime;
import java.util.Objects;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
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
@Table(name = "\"MODULE_ACCESS_TYPE\"", schema = "\"NUANBODB\"")
@IdClass(ModuleAccessTypeKey.class)
public class ModuleAccessTypeEntity {

    @Id
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "\"MODULE_ID\"", nullable = false)
    private ModuleEntity module;

    @Id
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "\"ACCESS_TYPE_ID\"", nullable = false)
    private AccessTypeEntity accessType;

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

        ModuleAccessTypeEntity that = (ModuleAccessTypeEntity) o;

        if (!Objects.equals(module, that.module))
            return false;
        return Objects.equals(accessType, that.accessType);
    }

    @Override
    public int hashCode() {
        int result = Objects.hashCode(module);
        result = 31 * result + Objects.hashCode(accessType);
        return result;
    }
}

```

## src/main/java/com/nubo/profile/query/api/models/entity/ModuleAccessTypeKey.java

```java
package com.nubo.profile.query.api.models.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ModuleAccessTypeKey implements Serializable {

    private Long module;

    private Long accessType;

}

```

## src/main/java/com/nubo/profile/query/api/models/entity/ModuleEntity.java

```java
package com.nubo.profile.query.api.models.entity;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Builder
@Setter
@Getter
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

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"", nullable = false)
    private StatusEntity status;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 250, nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50, nullable = false)
    private String lastModifyIp;

    @Builder.Default
    @OneToMany(mappedBy = "module", fetch = FetchType.LAZY)
    private List<ModuleAccessTypeEntity> moduleAccessTypeList = new ArrayList<>();

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;

        ModuleEntity that = (ModuleEntity) o;
        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

}

```

## src/main/java/com/nubo/profile/query/api/models/entity/ParticipantEntity.java

```java
package com.nubo.profile.query.api.models.entity;

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

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;

        ParticipantEntity that = (ParticipantEntity) o;

        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

}

```

## src/main/java/com/nubo/profile/query/api/models/entity/ProfileEntity.java

```java
package com.nubo.profile.query.api.models.entity;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Builder
@Setter
@Getter
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

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "\"STATUS_ID\"", nullable = false)
    private StatusEntity status;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "\"PARTICIPANT_ID\"", nullable = true)
    private ParticipantEntity participant;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "\"TYPE_ID\"")
    private TypeEntity type;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 250, nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDateTime;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50, nullable = false)
    private String lastModifyIp;

    @Builder.Default
    @OneToMany(mappedBy = "profile", fetch = FetchType.EAGER)
    private List<MenuAssignmentEntity> menuAssignmentEntityList = new ArrayList<>();

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null || getClass() != obj.getClass())
            return false;
        ProfileEntity other = (ProfileEntity) obj;
        return id != null && id.equals(other.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

}

```

## src/main/java/com/nubo/profile/query/api/models/entity/ScreenActionAccessTypeEntity.java

```java
package com.nubo.profile.query.api.models.entity;

import java.time.LocalDateTime;
import java.util.Objects;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
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
@Table(name = "\"SCREEN_ACTION_ACCESS_TYPE\"", schema = "\"NUANBODB\"")
@IdClass(ScreenActionAccessTypeKey.class)
public class ScreenActionAccessTypeEntity {

    @Id
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "\"SCREEN_ACTION_ID\"", nullable = false)
    private ScreenActionEntity screenAction;

    @Id
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "\"ACCESS_TYPE_ID\"", nullable = false)
    private AccessTypeEntity accessType;

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

        ScreenActionAccessTypeEntity that = (ScreenActionAccessTypeEntity) o;

        if (!Objects.equals(screenAction, that.screenAction))
            return false;
        return Objects.equals(accessType, that.accessType);
    }

    @Override
    public int hashCode() {
        int result = Objects.hashCode(screenAction);
        result = 31 * result + Objects.hashCode(accessType);
        return result;
    }

}

```

## src/main/java/com/nubo/profile/query/api/models/entity/ScreenActionAccessTypeKey.java

```java
package com.nubo.profile.query.api.models.entity;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ScreenActionAccessTypeKey implements Serializable {

    private Long screenAction;

    private Long accessType;
}

```

## src/main/java/com/nubo/profile/query/api/models/entity/ScreenActionEntity.java

```java
package com.nubo.profile.query.api.models.entity;

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

    @Column(name = "\"PATH\"")
    private String path;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;

        ScreenActionEntity that = (ScreenActionEntity) o;

        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/profile/query/api/models/entity/ScreenEntity.java

```java
package com.nubo.profile.query.api.models.entity;

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

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;

        ScreenEntity that = (ScreenEntity) o;

        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

}

```

## src/main/java/com/nubo/profile/query/api/models/entity/StatusEntity.java

```java
package com.nubo.profile.query.api.models.entity;

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
    @Column(name = "\"STATUS_ID\"")
    private Long id;

    @Column(name = "\"DESCRIPTION\"", length = 80, nullable = false)
    private String description;

    @Column(name = "\"CATEGORY\"", length = 30, nullable = false)
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

## src/main/java/com/nubo/profile/query/api/models/entity/SubmoduleAccessTypeEntity.java

```java
package com.nubo.profile.query.api.models.entity;

import java.time.LocalDateTime;
import java.util.Objects;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
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
@Table(name = "\"SUBMODULE_ACCESS_TYPE\"", schema = "\"NUANBODB\"")
@IdClass(SubmoduleAccessTypeKey.class)
public class SubmoduleAccessTypeEntity {

    @Id
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "\"SUBMODULE_ID\"", nullable = false)
    private SubmoduleEntity submodule;

    @Id
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "\"ACCESS_TYPE_ID\"", nullable = false)
    private AccessTypeEntity accessType;

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

        SubmoduleAccessTypeEntity that = (SubmoduleAccessTypeEntity) o;

        if (!Objects.equals(submodule, that.submodule))
            return false;
        return Objects.equals(accessType, that.accessType);
    }

    @Override
    public int hashCode() {
        int result = Objects.hashCode(submodule);
        result = 31 * result + Objects.hashCode(accessType);
        return result;
    }
}

```

## src/main/java/com/nubo/profile/query/api/models/entity/SubmoduleAccessTypeKey.java

```java
package com.nubo.profile.query.api.models.entity;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SubmoduleAccessTypeKey implements Serializable {

    private Long submodule;

    private Long accessType;

}

```

## src/main/java/com/nubo/profile/query/api/models/entity/SubmoduleEntity.java

```java
package com.nubo.profile.query.api.models.entity;

import java.time.LocalDateTime;
import java.util.List;
import java.util.ArrayList;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Builder
@Setter
@Getter
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

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"", nullable = false)
    private StatusEntity status;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 250, nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50, nullable = false)
    private String lastModifyIp;

    @Builder.Default
    @OneToMany(mappedBy = "submodule", fetch = FetchType.LAZY)
    private List<SubmoduleAccessTypeEntity> submoduleAccessTypeList = new ArrayList<>();

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;

        SubmoduleEntity that = (SubmoduleEntity) o;
        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/profile/query/api/models/entity/TypeAccessTypeEntity.java

```java
package com.nubo.profile.query.api.models.entity;

import java.time.LocalDateTime;
import java.util.Objects;

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
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"TYPE_ACCESS_TYPE\"", schema = "\"NUANBODB\"")
@IdClass(TypeAccessTypeKey.class)
public class TypeAccessTypeEntity {

    @Id
    @ManyToOne()
    @JoinColumn(name = "\"TYPE_ID\"", nullable = false)
    private TypeEntity type;

    @Id
    @ManyToOne()
    @JoinColumn(name = "\"ACCESS_TYPE_ID\"", nullable = false)
    private AccessTypeEntity accessType;

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

        TypeAccessTypeEntity that = (TypeAccessTypeEntity) o;

        if (!Objects.equals(type, that.type))
            return false;
        return Objects.equals(accessType, that.accessType);
    }

    @Override
    public int hashCode() {
        int result = Objects.hashCode(type);
        result = 31 * result + Objects.hashCode(accessType);
        return result;
    }
}

```

## src/main/java/com/nubo/profile/query/api/models/entity/TypeAccessTypeKey.java

```java
package com.nubo.profile.query.api.models.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TypeAccessTypeKey implements Serializable {

    private Long type;

    private Long accessType;

}

```

## src/main/java/com/nubo/profile/query/api/models/entity/TypeEntity.java

```java
package com.nubo.profile.query.api.models.entity;

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

## src/main/java/com/nubo/profile/query/api/models/entity/UserNuboEntity.java

```java
package com.nubo.profile.query.api.models.entity;

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
import lombok.ToString;

@Getter
@Setter
@Builder
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"USER_NUBO\"", schema = "\"NUANBODB\"")
public class UserNuboEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"USER_NUBO_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"USER_NAME\"", unique = true, length = 80, nullable = false)
    private String userName;

    @Column(name = "\"PREVIOUS_SESSION\"", nullable = false)
    private Boolean previousSession;

    @Column(name = "\"USER_TYPE\"", nullable = false)
    private String userType;

    @Column(name = "\"PARTICIPANT_ID\"", nullable = false)
    private Long participantId;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;

        UserNuboEntity that = (UserNuboEntity) o;

        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/profile/query/api/models/enums/ParticipantEnum.java

```java
package com.nubo.profile.query.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum ParticipantEnum {

    PARTICIPANT_NUBO(1L);

    private final Long id;
}

```

## src/main/java/com/nubo/profile/query/api/models/enums/PropertiesEnum.java

```java
package com.nubo.profile.query.api.models.enums;

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

## src/main/java/com/nubo/profile/query/api/models/enums/StatusEnum.java

```java
package com.nubo.profile.query.api.models.enums;

import java.util.Arrays;
import java.util.Objects;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum StatusEnum {

    PROFILE_ACTIVE(505L),
    PROFILE_INACTIVE(506L),
    PROFILE_SUSPENDED(507L),
    PROFILE_BLOCKED(508L),
    PROFILE_DELETED(509L),
    MENU_ACTIVE(1083L),
    MENU_INACTIVE(1084L),;

    private final Long id;

    @JsonValue
    public Long getId() {
        return id;
    }

    @JsonCreator
    public static StatusEnum fromValue(Long value) {
        return Arrays.stream(StatusEnum.values())
                .filter(status -> Objects.equals(status.id, value))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Unknown value: " + value));
    }
}

```

## src/main/java/com/nubo/profile/query/api/models/enums/TypeEnum.java

```java
package com.nubo.profile.query.api.models.enums;

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

## src/main/java/com/nubo/profile/query/api/models/enums/UserTypeEnum.java

```java
package com.nubo.profile.query.api.models.enums;

import java.util.Arrays;
import java.util.Objects;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum UserTypeEnum {

    INTERNAL("INTERNAL"),
    EXTERNAL("EXTERNAL");

    private final String value;

    @JsonValue
    public String getValue() {
        return value;
    }

    @JsonCreator
    public static UserTypeEnum fromValue(String value) {
        return Arrays.stream(UserTypeEnum.values())
                .filter(side -> Objects.equals(side.value, value))
                .findFirst()
                .orElse(null);
    }
}

```

## src/main/java/com/nubo/profile/query/api/models/enums/VersionApiEnum.java

```java
package com.nubo.profile.query.api.models.enums;

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

## src/main/java/com/nubo/profile/query/api/repository/CategoryAccessTypeRepository.java

```java
package com.nubo.profile.query.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.nubo.profile.query.api.models.entity.CategoryAccessTypeEntity;
import com.nubo.profile.query.api.models.entity.CategoryAccessTypeKey;

public interface CategoryAccessTypeRepository extends JpaRepository<CategoryAccessTypeEntity, CategoryAccessTypeKey> {

    @Query("SELECT cat.accessType.id FROM CategoryAccessTypeEntity cat WHERE cat.category.id = :categoryId")
    List<Long> findAccessTypeIdsByCategoryId(@Param("categoryId") Long categoryId);

}

```

## src/main/java/com/nubo/profile/query/api/repository/MenuConfigurationRepository.java

```java
package com.nubo.profile.query.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.nubo.profile.query.api.models.entity.MenuConfigurationEntity;

public interface MenuConfigurationRepository
        extends JpaRepository<MenuConfigurationEntity, Long>, JpaSpecificationExecutor<MenuConfigurationEntity> {

    @Query("""
            SELECT DISTINCT mc FROM MenuConfigurationEntity mc
            LEFT JOIN FETCH mc.category
            LEFT JOIN FETCH mc.module
            LEFT JOIN FETCH mc.submodule
            LEFT JOIN FETCH mc.screen
            WHERE (
                mc.submodule IS NOT NULL AND EXISTS (
                    SELECT 1 FROM SubmoduleAccessTypeEntity sat
                    JOIN TypeAccessTypeEntity tat ON tat.accessType = sat.accessType
                    WHERE sat.submodule = mc.submodule
                        AND tat.type.id = :typeId
                        AND mc.enabled = true
                )
            ) OR (
                mc.submodule IS NULL AND mc.module IS NOT NULL AND EXISTS (
                    SELECT 1 FROM ModuleAccessTypeEntity mat
                    JOIN TypeAccessTypeEntity tat ON tat.accessType = mat.accessType
                    WHERE mat.module = mc.module
                        AND tat.type.id = :typeId
                        AND mc.enabled = true
                )
            ) OR (
                mc.submodule IS NULL AND mc.module IS NULL AND mc.category IS NOT NULL AND EXISTS (
                    SELECT 1 FROM CategoryAccessTypeEntity cat
                    JOIN TypeAccessTypeEntity tat ON tat.accessType = cat.accessType
                    WHERE cat.category = mc.category
                        AND tat.type.id = :typeId
                        AND mc.enabled = true
                )
            )
            """)
    List<MenuConfigurationEntity> findAllByTypeId(@Param("typeId") Long typeId);

}

```

## src/main/java/com/nubo/profile/query/api/repository/ModuleAccessTypeRepository.java

```java
package com.nubo.profile.query.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.nubo.profile.query.api.models.entity.ModuleAccessTypeEntity;
import com.nubo.profile.query.api.models.entity.ModuleAccessTypeKey;

public interface ModuleAccessTypeRepository extends JpaRepository<ModuleAccessTypeEntity, ModuleAccessTypeKey> {

    @Query("SELECT mat.accessType.id FROM ModuleAccessTypeEntity mat WHERE mat.module.id = :moduleId")
    List<Long> findAccessTypeIdsByModuleId(@Param("moduleId") Long moduleId);

}

```

## src/main/java/com/nubo/profile/query/api/repository/ProfileRepository.java

```java
package com.nubo.profile.query.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.nubo.profile.query.api.models.entity.ProfileEntity;

public interface ProfileRepository extends JpaRepository<ProfileEntity, Long>, JpaSpecificationExecutor<ProfileEntity> {

    @Query("""
            SELECT CASE WHEN COUNT(p) > 0 THEN true ELSE false END
            FROM ProfileEntity p
            WHERE LOWER(p.name) = LOWER(:profileName)
            AND p.status.id <> :excludedStatusId
            AND p.participant.id = :participantId
            """)
    boolean existsByNameIgnoreCaseAndParticipantIdAndStatusIdNot(
            @Param("profileName") String profileName,
            @Param("participantId") Long participantId,
            @Param("excludedStatusId") Long excludedStatusId);
}

```

## src/main/java/com/nubo/profile/query/api/repository/ScreenActionRepository.java

```java
package com.nubo.profile.query.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.nubo.profile.query.api.models.entity.ScreenActionEntity;
import com.nubo.profile.query.api.models.entity.ScreenEntity;

public interface ScreenActionRepository extends JpaRepository<ScreenActionEntity, Long> {

    @Query("""
            SELECT DISTINCT sa FROM ScreenActionEntity sa
            JOIN ScreenActionAccessTypeEntity saat ON saat.screenAction.id = sa.id
            JOIN TypeAccessTypeEntity tat ON tat.accessType.id = saat.accessType.id
            WHERE sa.screen = :screen
            AND sa.enabled = true
            AND tat.type.id = :typeId
            """)
    List<ScreenActionEntity> findByScreenAndEnabledTrueAndTypeId(
            @Param("screen") ScreenEntity screen,
            @Param("typeId") Long typeId);

}

```

## src/main/java/com/nubo/profile/query/api/repository/SubmoduleAccessTypeRepository.java

```java
package com.nubo.profile.query.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.nubo.profile.query.api.models.entity.SubmoduleAccessTypeEntity;
import com.nubo.profile.query.api.models.entity.SubmoduleAccessTypeKey;

public interface SubmoduleAccessTypeRepository
        extends JpaRepository<SubmoduleAccessTypeEntity, SubmoduleAccessTypeKey> {

    @Query("SELECT sat.accessType.id FROM SubmoduleAccessTypeEntity sat WHERE sat.submodule.id = :submoduleId")
    List<Long> findAccessTypeIdsBySubmoduleId(@Param("submoduleId") Long submoduleId);

}

```

## src/main/java/com/nubo/profile/query/api/repository/TypeAccessTypeRepository.java

```java
package com.nubo.profile.query.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.profile.query.api.models.entity.TypeAccessTypeEntity;
import com.nubo.profile.query.api.models.entity.TypeAccessTypeKey;

public interface TypeAccessTypeRepository extends JpaRepository<TypeAccessTypeEntity, TypeAccessTypeKey> {

    List<TypeAccessTypeEntity> findByTypeId(Long typeId);
    
}

```

## src/main/java/com/nubo/profile/query/api/repository/UserNuboRepository.java

```java
package com.nubo.profile.query.api.repository;

import com.nubo.profile.query.api.models.entity.UserNuboEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface UserNuboRepository extends JpaRepository<UserNuboEntity, Long> {

    @Query("""
            SELECT u FROM UserNuboEntity u
            WHERE u.userName = :userName
            """)
    Optional<UserNuboEntity> findByUserName(String userName);

}

```

## src/main/java/com/nubo/profile/query/api/service/MenuConfigurationService.java

```java
package com.nubo.profile.query.api.service;

import com.nubo.profile.query.api.models.dto.response.MenuTreeOutDto;

public interface MenuConfigurationService {

    MenuTreeOutDto findAllMenusConfiguration(Long typeId);

}

```

## src/main/java/com/nubo/profile/query/api/service/ProfileService.java

```java
package com.nubo.profile.query.api.service;

import java.util.List;

import com.nubo.profile.query.api.models.domain.ProfileParams;
import com.nubo.profile.query.api.models.dto.response.PageResponseOutDto;
import com.nubo.profile.query.api.models.dto.response.ProfileDistinctOutDto;
import com.nubo.profile.query.api.models.dto.response.ProfileOutDto;
import com.nubo.profile.query.api.models.dto.response.ScreenActionOutDto;
import com.nubo.profile.query.api.models.dto.response.ValidationOutDto;

public interface ProfileService {

    PageResponseOutDto<ProfileOutDto> findAllProfiles(ProfileParams profileParams);

    ProfileOutDto findProfileById(Long profileId);

    List<ProfileOutDto> findAllProfilesByParticipant(Long participantId, String profileName, Long profileId);

    ValidationOutDto validateProfileName(String profileName, Long participantId);

    PageResponseOutDto<ProfileDistinctOutDto> findDistinctLastModifyUsers(int page, int size,
            Boolean participantNubo, Long participantId);

    PageResponseOutDto<ProfileDistinctOutDto> findDistinctProfileNames(int page, int size,
            Boolean participantNubo, Long participantId);

    List<ScreenActionOutDto> findScreenActionsByProfileId(Long profileId, List<String> screenCodes);
}

```

## src/main/java/com/nubo/profile/query/api/service/impl/MenuConfigurationServiceImpl.java

```java
package com.nubo.profile.query.api.service.impl;

import java.util.List;
import java.util.Objects;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.nubo.profile.query.api.application.properties.PropertiesContext;
import com.nubo.profile.query.api.exception.ServiceException;
import com.nubo.profile.query.api.exception.error.ErrorCode;
import com.nubo.profile.query.api.helpers.MapperMenuTreeUtil;
import com.nubo.profile.query.api.helpers.MapperUtil;
import com.nubo.profile.query.api.models.domain.MenuConfiguration;
import com.nubo.profile.query.api.models.dto.response.MenuTreeOutDto;
import com.nubo.profile.query.api.models.dto.response.ScreenActionOutDto;
import com.nubo.profile.query.api.models.entity.MenuConfigurationEntity;
import com.nubo.profile.query.api.models.enums.VersionApiEnum;
import com.nubo.profile.query.api.repository.MenuConfigurationRepository;
import com.nubo.profile.query.api.repository.ScreenActionRepository;
import com.nubo.profile.query.api.service.MenuConfigurationService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class MenuConfigurationServiceImpl implements MenuConfigurationService {

    private final MenuConfigurationRepository menuConfigurationRepository;
    private final ScreenActionRepository screenActionRepository;

    @Override
    public MenuTreeOutDto findAllMenusConfiguration(Long typeId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllMenusConfigurationV1(typeId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private MenuTreeOutDto findAllMenusConfigurationV1(Long typeId) {
        log.info("Start method findAllMenusConfigurationV1 with [typeId: {}]", typeId);

        List<MenuConfigurationEntity> menuConfigurationEntityList = menuConfigurationRepository.findAllByTypeId(typeId);
        log.info("menuConfigurationEntityList, size: {}", menuConfigurationEntityList.size());

        Set<MenuConfiguration> menuConfigurationSet = menuConfigurationEntityList.stream()
                .filter(Objects::nonNull)
                .map(entity -> createMenuConfigurationOutDto(entity, typeId))
                .collect(Collectors.toSet());
        log.debug("menuConfigurationSet, size: {}", menuConfigurationSet.size());

        MenuTreeOutDto menuTreeOutDto = MapperMenuTreeUtil.menuConfigurationSetToMenuTreeOutDto(
                menuConfigurationSet);

        log.info("End method findAllMenusConfigurationV1");
        return menuTreeOutDto;
    }

    private MenuConfiguration createMenuConfigurationOutDto(
            MenuConfigurationEntity menuConfigurationEntity, Long typeId) {
        List<ScreenActionOutDto> screenActions = screenActionRepository.findByScreenAndEnabledTrueAndTypeId(
                menuConfigurationEntity.getScreen(), typeId)
                .stream()
                .map(MapperUtil::screenActionEntityToScreenActionOutDto)
                .collect(Collectors.toList());

        return MapperUtil.menuConfigurationEntityToMenuConfiguration(menuConfigurationEntity, screenActions);
    }

}

```

## src/main/java/com/nubo/profile/query/api/service/impl/ProfileServiceImpl.java

```java
package com.nubo.profile.query.api.service.impl;

import java.util.List;
import java.util.Objects;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.nubo.profile.query.api.application.properties.PropertiesContext;
import com.nubo.profile.query.api.exception.ServiceException;
import com.nubo.profile.query.api.exception.error.ErrorCode;
import com.nubo.profile.query.api.helpers.MapperPageUtil;
import com.nubo.profile.query.api.helpers.MapperUtil;
import com.nubo.profile.query.api.helpers.ProfileSearchCriteria;
import com.nubo.profile.query.api.models.domain.ProfileParams;
import com.nubo.profile.query.api.models.dto.response.PageResponseOutDto;
import com.nubo.profile.query.api.models.dto.response.ProfileDistinctOutDto;
import com.nubo.profile.query.api.models.dto.response.ProfileOutDto;
import com.nubo.profile.query.api.models.dto.response.ScreenActionOutDto;
import com.nubo.profile.query.api.models.dto.response.ValidationOutDto;
import com.nubo.profile.query.api.models.entity.MenuAssignmentEntity;
import com.nubo.profile.query.api.models.entity.ProfileEntity;
import com.nubo.profile.query.api.models.entity.UserNuboEntity;
import com.nubo.profile.query.api.models.enums.StatusEnum;
import com.nubo.profile.query.api.models.enums.VersionApiEnum;
import com.nubo.profile.query.api.repository.ProfileRepository;
import com.nubo.profile.query.api.repository.UserNuboRepository;
import com.nubo.profile.query.api.service.ProfileService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class ProfileServiceImpl implements ProfileService {

    private final ProfileRepository profileRepository;
    private final UserNuboRepository userNuboRepository;

    @Override
    public PageResponseOutDto<ProfileOutDto> findAllProfiles(ProfileParams profileParams) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllProfilesV1(profileParams);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<ProfileOutDto> findAllProfilesV1(ProfileParams profileParams) {
        log.info("Start method findAllProfilesV1 with profileParams: {}", profileParams);

        Specification<ProfileEntity> profileEntitySpecification = ProfileSearchCriteria
                .createSpecification(profileParams);

        Sort.Direction direction = "desc".equalsIgnoreCase(profileParams.order()) ? Sort.Direction.DESC
                : Sort.Direction.ASC;
        Sort sortObj = Sort.by(direction, profileParams.sort() != null ? profileParams.sort() : "id");

        if (Boolean.TRUE.equals(profileParams.all())) {
            List<ProfileEntity> allResults = profileRepository.findAll(profileEntitySpecification, sortObj);

            List<ProfileOutDto> profileOutDtoList = allResults.stream()
                    .map(MapperUtil::profileEntityToProfileOutDto)
                    .toList();

            int count = profileOutDtoList.size();
            PageResponseOutDto<ProfileOutDto> response = MapperPageUtil.pageToPageResponseOutDto(profileOutDtoList, 0,
                    count, count);
            log.info("End method findAllProfilesV1, all profiles: {}", response);
            return response;
        } else {
            Pageable pageable = PageRequest.of(profileParams.page(), profileParams.size(), sortObj);
            Page<ProfileEntity> profilesPage = profileRepository.findAll(profileEntitySpecification, pageable);

            List<ProfileOutDto> profileOutDtoList = profilesPage.getContent().stream()
                    .map(MapperUtil::profileEntityToProfileOutDto)
                    .toList();

            PageResponseOutDto<ProfileOutDto> response = MapperPageUtil.pageToPageResponseOutDto(profileOutDtoList,
                    profilesPage);
            log.info("End method findAllProfilesV1, profiles: {}", response);
            return response;
        }
    }

    @Override
    public ProfileOutDto findProfileById(Long profileId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findProfileByIdV1(profileId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private ProfileOutDto findProfileByIdV1(Long profileId) {
        log.info("Start method findProfileByIdV1, profileId -> {}", profileId);

        ProfileEntity profileEntity = profileRepository.findById(profileId)
                .orElseThrow(
                        () -> new ServiceException(ErrorCode.PROFILE_NOT_FOUND, HttpStatus.NOT_FOUND));

        ProfileOutDto profileOutDto = MapperUtil.profileEntityToProfileOutDto(profileEntity);

        log.info("End method findProfileByIdV1, profile -> {}", profileOutDto);
        return profileOutDto;
    }

    @Override
    public List<ProfileOutDto> findAllProfilesByParticipant(Long participantId, String name, Long profileId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllProfilesByParticipantV1(participantId, name, profileId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<ProfileOutDto> findAllProfilesByParticipantV1(Long participantId, String profileName, Long profileId) {
        log.info(
                "Start method findAllProfilesByParticipantV1 with participantId: {} and profileName: {} and profileId: {}",
                participantId, profileName, profileId);

        UserNuboEntity userNuboEntity = validateUserExists(PropertiesContext.getClientUser());
        ProfileParams profileParams = new ProfileParams(null, null, null, null, participantId,
                profileName, profileId, null, null, null, null, userNuboEntity.getUserType(), true);

        Specification<ProfileEntity> profileEntitySpecification = ProfileSearchCriteria
                .createSpecification(profileParams);
        List<ProfileEntity> allProfilesEntity = profileRepository.findAll(profileEntitySpecification);

        List<ProfileOutDto> profileOutDtoList = allProfilesEntity.stream()
                .map(MapperUtil::profileEntityToProfileOutDto)
                .toList();

        log.info("End method findAllProfilesByParticipantV1, size: " + profileOutDtoList.size());
        return profileOutDtoList;
    }

    @Override
    public ValidationOutDto validateProfileName(String profileName, Long participantId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return validateProfileNameV1(profileName, participantId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private ValidationOutDto validateProfileNameV1(String profileName, Long participantId) {
        log.info("Start method validateProfileNameV1 with profileName: {} and participantId: {}",
                profileName, participantId);

        boolean exists = profileRepository.existsByNameIgnoreCaseAndParticipantIdAndStatusIdNot(profileName,
                participantId, StatusEnum.PROFILE_DELETED.getId());

        ValidationOutDto validationOutDto = ValidationOutDto.builder()
                .isValid(!exists)
                .build();

        log.info("End method validateProfileNameV1, validationOutDto: {}", validationOutDto);
        return validationOutDto;
    }

    @Override
    public PageResponseOutDto<ProfileDistinctOutDto> findDistinctLastModifyUsers(int page, int size,
            Boolean participantNubo, Long participantId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findDistinctLastModifyUsersV1(page, size, participantNubo, participantId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<ProfileDistinctOutDto> findDistinctLastModifyUsersV1(int page, int size,
            Boolean participantNubo, Long participantId) {
        log.info(
                "Start method findDistinctLastModifyUsersV1 with page: {}, size: {}, participantNubo: {}, participantId: {}",
                page, size, participantNubo, participantId);
        if (page < 0 || size <= 0) {
            throw new ServiceException(ErrorCode.BAD_REQUEST, HttpStatus.BAD_REQUEST,
                    "'Page' must not be less than zero and 'Size' must be greater than zero");
        }
        Specification<ProfileEntity> profileEntitySpecification = ProfileSearchCriteria
                .createSpecification(participantId, participantNubo);

        List<ProfileEntity> allProfilesEntity = profileRepository.findAll(profileEntitySpecification);

        List<String> distinctLastModifyUsers = allProfilesEntity.stream()
                .filter(profile -> profile.getLastModifyUser() != null)
                .map(ProfileEntity::getLastModifyUser)
                .distinct()
                .toList();

        int totalElements = distinctLastModifyUsers.size();
        int start = page * size;
        int end = Math.min(start + size, totalElements);

        List<ProfileDistinctOutDto> profileDistinctOutDtoList = start < totalElements
                ? distinctLastModifyUsers.subList(start, end).stream()
                        .map(lastModifyUser -> ProfileDistinctOutDto.builder()
                                .lastModifyUser(lastModifyUser)
                                .build())
                        .toList()
                : List.of();

        PageResponseOutDto<ProfileDistinctOutDto> response = MapperPageUtil
                .pageToPageResponseOutDto(profileDistinctOutDtoList, page, size, totalElements);
        log.info("End method findDistinctLastModifyUsersV1, profileDistinctOutDtoList: {}", response);
        return response;
    }

    @Override
    public PageResponseOutDto<ProfileDistinctOutDto> findDistinctProfileNames(int page, int size,
            Boolean participantNubo, Long participantId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findDistinctProfileNamesV1(page, size, participantNubo, participantId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<ProfileDistinctOutDto> findDistinctProfileNamesV1(int page, int size,
            Boolean participantNubo, Long participantId) {
        log.info(
                "Start method findDistinctProfileNamesV1 with page: {}, size: {}, participantNubo: {}, participantId: {}",
                page, size, participantNubo, participantId);
        if (page < 0 || size <= 0) {
            throw new ServiceException(ErrorCode.BAD_REQUEST, HttpStatus.BAD_REQUEST,
                    "'Page' must not be less than zero and 'Size' must be greater than zero");
        }
        Specification<ProfileEntity> profileEntitySpecification = ProfileSearchCriteria
                .createSpecification(participantId, participantNubo);

        List<ProfileEntity> allProfilesEntity = profileRepository.findAll(profileEntitySpecification);

        List<String> distinctProfileNames = allProfilesEntity.stream()
                .filter(profile -> profile.getName() != null)
                .map(ProfileEntity::getName)
                .distinct()
                .toList();

        int totalElements = distinctProfileNames.size();
        int start = page * size;
        int end = Math.min(start + size, totalElements);

        List<ProfileDistinctOutDto> profileDistinctOutDtoList = start < totalElements
                ? distinctProfileNames.subList(start, end).stream()
                        .map(profileName -> ProfileDistinctOutDto.builder()
                                .name(profileName)
                                .build())
                        .toList()
                : List.of();

        PageResponseOutDto<ProfileDistinctOutDto> response = MapperPageUtil
                .pageToPageResponseOutDto(profileDistinctOutDtoList, page, size, totalElements);
        log.info("End method findDistinctProfileNamesV1, profileNames: {}", response);
        return response;
    }

    @Override
    public List<ScreenActionOutDto> findScreenActionsByProfileId(Long profileId, List<String> screenCodes) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            ProfileEntity profileEntity = profileRepository.findById(profileId).orElseThrow(
                    () -> new ServiceException(ErrorCode.PROFILE_NOT_FOUND, HttpStatus.NOT_FOUND));
            List<ScreenActionOutDto> screenActions = profileEntity.getMenuAssignmentEntityList().stream()
                    .filter(m -> screenCodes == null ||
                            (m.getScreen() != null &&
                                    screenCodes.contains(m.getScreen().getCode())))
                    .map(MenuAssignmentEntity::getScreenAction)
                    .filter(Objects::nonNull)
                    .map(MapperUtil::screenActionEntityToScreenActionOutDto)
                    .toList();
            return screenActions;
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

     private UserNuboEntity validateUserExists(String clientUser) {
        return userNuboRepository.findByUserName(clientUser)
                .orElseThrow(() -> new ServiceException(ErrorCode.USER_NOT_FOUND, HttpStatus.NOT_FOUND));
    }
}

```

## src/main/java/com/nubo/profile/query/api/web/controller/MenuConfigurationRestController.java

```java
package com.nubo.profile.query.api.web.controller;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nubo.profile.query.api.models.dto.response.MenuTreeOutDto;
import com.nubo.profile.query.api.service.MenuConfigurationService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@Tag(name = "Menu")
@RequestMapping("/{version}/menu")
@RestController
@RequiredArgsConstructor
public class MenuConfigurationRestController {

    private final MenuConfigurationService menuConfigurationService;

    @Operation(summary = "Find all tree menus", description = "Find all tree menus")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = MenuTreeOutDto.class)))})
    @GetMapping("/category/tree")
    public ResponseEntity<MenuTreeOutDto> findAllTreeMenus(
            @Parameter(example = "1") @RequestParam(required = true) Long typeId) {
        return ResponseEntity.ok(menuConfigurationService.findAllMenusConfiguration(typeId));
    }

}

```

## src/main/java/com/nubo/profile/query/api/web/controller/ProfileRestController.java

```java
package com.nubo.profile.query.api.web.controller;

import java.time.LocalDate;
import java.util.List;

import com.nubo.profile.query.api.models.dto.response.ScreenActionOutDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nubo.profile.query.api.models.domain.ProfileParams;
import com.nubo.profile.query.api.models.dto.response.PageResponseOutDto;
import com.nubo.profile.query.api.models.dto.response.ProfileDistinctOutDto;
import com.nubo.profile.query.api.models.dto.response.ProfileOutDto;
import com.nubo.profile.query.api.models.dto.response.ValidationOutDto;
import com.nubo.profile.query.api.service.ProfileService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@Tag(name = "Profile")
@RequestMapping("/{version}/profile")
@RestController
@RequiredArgsConstructor
public class ProfileRestController {

    private final ProfileService profileService;

    @Operation(summary = "Find all profiles", description = "Find all profiles")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response",
                    content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                            schema = @Schema(implementation = ProfileOutDto[].class))) })
    @GetMapping
    public ResponseEntity<PageResponseOutDto<ProfileOutDto>> findAllProfiles(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "id") String sort,
            @Parameter(example = "asc") @RequestParam(defaultValue = "desc") String order,
            @Parameter(example = "1") @RequestParam(required = false) Long participantId,
            @Parameter(example = "ABC") @RequestParam(required = false) String profileName,
            @Parameter(example = "1") @RequestParam(required = false) Long profileId,
            @Parameter(example = "2025-01-01") @RequestParam(required = false) LocalDate lastModifyDate,
            @Parameter(example = "true") @RequestParam(required = false) Boolean participantNubo,
            @Parameter(example = "false") @RequestParam(defaultValue = "false") boolean all,
            @Parameter(example = "user") @RequestParam(required = false) String lastModifyUser,
            @Parameter(example = "false") @RequestParam(defaultValue = "false") boolean onlyActive) {
        ProfileParams profileParams = new ProfileParams(page, size, sort, order, participantId, profileName, profileId,
                lastModifyDate, participantNubo, all, lastModifyUser, null, onlyActive);
        return ResponseEntity.ok(profileService.findAllProfiles(profileParams));
    }

    @Operation(summary = "Find a profile by id ", description = "Find a profile by id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response",
                    content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                            schema = @Schema(implementation = ProfileOutDto.class))) })
    @GetMapping("/{profileId}")
    public ResponseEntity<ProfileOutDto> findProfileById(@PathVariable Long profileId) {
        ProfileOutDto profileOutDto = profileService.findProfileById(profileId);
        return ResponseEntity.status(HttpStatus.OK).body(profileOutDto);
    }

    @Operation(summary = "Find all profiles, record by participant",
            description = "Find all profiles, record by participant")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response",
                    content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                            schema = @Schema(implementation = ProfileOutDto[].class))) })
    @GetMapping("/participant/{participantId}")
    public ResponseEntity<List<ProfileOutDto>> findAllProfilesByParticipant(
            @PathVariable Long participantId,
            @RequestParam(required = false) String profileName,
            @RequestParam(required = false) Long profileId) {
        return ResponseEntity.ok(profileService.findAllProfilesByParticipant(participantId, profileName, profileId));
    }

    @Operation(summary = "Validate profile name availability", description = "Validates if a profile name is available")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response",
                    content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                            schema = @Schema(implementation = ValidationOutDto.class))) })
    @GetMapping("/name/validate")
    public ResponseEntity<ValidationOutDto> validateProfileName(
            @Parameter(example = "ABC") @RequestParam(required = true) String profileName,
            @Parameter(example = "1") @RequestParam(required = true) Long participantId) {
        return ResponseEntity.ok(profileService.validateProfileName(profileName, participantId));
    }

    @Operation(summary = "Find all users who have made the latest changes to profiles",
            description = "Find all users who have made the latest changes to profiles")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response",
                    content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                            schema = @Schema(implementation = ProfileDistinctOutDto[].class))) })
    @GetMapping("/distinct/last-modify-user")
    public ResponseEntity<PageResponseOutDto<ProfileDistinctOutDto>> findDistinctLastModifyUsers(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @Parameter(example = "true") @RequestParam(required = false) Boolean participantNubo,
            @Parameter(example = "1") @RequestParam(required = false) Long participantId) {
        return ResponseEntity.ok(profileService.findDistinctLastModifyUsers(page, size,
                participantNubo, participantId));
    }

    @Operation(summary = "Find all distinct profile names",
            description = "Find all distinct profile names with pagination support")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response",
                    content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                            schema = @Schema(implementation = ProfileDistinctOutDto[].class))) })
    @GetMapping("/distinct/profile-name")
    public ResponseEntity<PageResponseOutDto<ProfileDistinctOutDto>> findDistinctProfileNames(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @Parameter(example = "true") @RequestParam(required = false) Boolean participantNubo,
            @Parameter(example = "1") @RequestParam(required = false) Long participantId) {
        return ResponseEntity.ok(profileService.findDistinctProfileNames(page, size, participantNubo,
                participantId));
    }

    @Operation(summary = "Find screen actions by profile id", description = "Find screen actions by profile id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response",
                    content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                            schema = @Schema(implementation = ScreenActionOutDto[].class))) })
    @GetMapping("/{profileId}/screen-actions")
    public ResponseEntity<List<ScreenActionOutDto>> findScreenActionsByProfileId(
            @PathVariable Long profileId,
            @Parameter(example = "001,002,003") @RequestParam(required = false) List<String> screenCodes) {
        List<ScreenActionOutDto> screenActionOutDtos = profileService.findScreenActionsByProfileId(profileId, screenCodes);
        return ResponseEntity.status(HttpStatus.OK).body(screenActionOutDtos);
    }
}

```
