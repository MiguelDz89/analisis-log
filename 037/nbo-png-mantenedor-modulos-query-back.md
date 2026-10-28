# nbo-png-mantenedor-modulos-query-back

Código Java de producción y configuraciones, sin tests. Cada sección contiene el archivo original completo y su ruta. Captura: 28/10/2026.

## Índice

1. `.mvn/wrapper/maven-wrapper.properties`
2. `mvnw`
3. `mvnw.cmd`
4. `pom.xml`
5. `src/main/java/com/nubo/module/maintainer/query/api/ModuleMaintainerQueryApiApplication.java`
6. `src/main/java/com/nubo/module/maintainer/query/api/application/config/SwaggerConfig.java`
7. `src/main/java/com/nubo/module/maintainer/query/api/application/config/WebConfig.java`
8. `src/main/java/com/nubo/module/maintainer/query/api/application/context/GlobalContext.java`
9. `src/main/java/com/nubo/module/maintainer/query/api/application/database/NamingStrategyConfig.java`
10. `src/main/java/com/nubo/module/maintainer/query/api/application/database/UpperNamingConfig.java`
11. `src/main/java/com/nubo/module/maintainer/query/api/application/filters/GlobalFilter.java`
12. `src/main/java/com/nubo/module/maintainer/query/api/application/interceptors/GlobalInterceptor.java`
13. `src/main/java/com/nubo/module/maintainer/query/api/application/properties/PropertiesConfig.java`
14. `src/main/java/com/nubo/module/maintainer/query/api/application/properties/PropertiesContext.java`
15. `src/main/java/com/nubo/module/maintainer/query/api/application/util/ApplicationUtils.java`
16. `src/main/java/com/nubo/module/maintainer/query/api/exception/ServiceException.java`
17. `src/main/java/com/nubo/module/maintainer/query/api/exception/error/ErrorCode.java`
18. `src/main/java/com/nubo/module/maintainer/query/api/exception/error/ErrorResponse.java`
19. `src/main/java/com/nubo/module/maintainer/query/api/exception/error/ErrorValidation.java`
20. `src/main/java/com/nubo/module/maintainer/query/api/exception/handler/GlobalExceptionHandler.java`
21. `src/main/java/com/nubo/module/maintainer/query/api/helpers/MapperMenuConfigurationDynamicSearch.java`
22. `src/main/java/com/nubo/module/maintainer/query/api/helpers/MapperPageUtil.java`
23. `src/main/java/com/nubo/module/maintainer/query/api/helpers/MapperUtil.java`
24. `src/main/java/com/nubo/module/maintainer/query/api/models/domain/MenuConfigurationParams.java`
25. `src/main/java/com/nubo/module/maintainer/query/api/models/dto/response/AccessTypeOutDto.java`
26. `src/main/java/com/nubo/module/maintainer/query/api/models/dto/response/AvaibleToChangeOutDto.java`
27. `src/main/java/com/nubo/module/maintainer/query/api/models/dto/response/CategoryOutDto.java`
28. `src/main/java/com/nubo/module/maintainer/query/api/models/dto/response/MenuConfigurationOutDto.java`
29. `src/main/java/com/nubo/module/maintainer/query/api/models/dto/response/ModuleOutDto.java`
30. `src/main/java/com/nubo/module/maintainer/query/api/models/dto/response/PageResponseOutDto.java`
31. `src/main/java/com/nubo/module/maintainer/query/api/models/dto/response/ScreenActionOutDto.java`
32. `src/main/java/com/nubo/module/maintainer/query/api/models/dto/response/ScreenOutDto.java`
33. `src/main/java/com/nubo/module/maintainer/query/api/models/dto/response/SmallScreenOutDto.java`
34. `src/main/java/com/nubo/module/maintainer/query/api/models/dto/response/StatusOutDto.java`
35. `src/main/java/com/nubo/module/maintainer/query/api/models/dto/response/SubmoduleOutDto.java`
36. `src/main/java/com/nubo/module/maintainer/query/api/models/dto/response/TypeOutDto.java`
37. `src/main/java/com/nubo/module/maintainer/query/api/models/entity/AccessTypeEntity.java`
38. `src/main/java/com/nubo/module/maintainer/query/api/models/entity/CategoryAccessTypeEntity.java`
39. `src/main/java/com/nubo/module/maintainer/query/api/models/entity/CategoryAccessTypeKey.java`
40. `src/main/java/com/nubo/module/maintainer/query/api/models/entity/CategoryEntity.java`
41. `src/main/java/com/nubo/module/maintainer/query/api/models/entity/MenuConfigurationAccessTypeEntity.java`
42. `src/main/java/com/nubo/module/maintainer/query/api/models/entity/MenuConfigurationAccessTypeKey.java`
43. `src/main/java/com/nubo/module/maintainer/query/api/models/entity/MenuConfigurationEntity.java`
44. `src/main/java/com/nubo/module/maintainer/query/api/models/entity/ModuleAccessTypeEntity.java`
45. `src/main/java/com/nubo/module/maintainer/query/api/models/entity/ModuleAccessTypeKey.java`
46. `src/main/java/com/nubo/module/maintainer/query/api/models/entity/ModuleEntity.java`
47. `src/main/java/com/nubo/module/maintainer/query/api/models/entity/ScreenActionAccessTypeEntity.java`
48. `src/main/java/com/nubo/module/maintainer/query/api/models/entity/ScreenActionAccessTypeKey.java`
49. `src/main/java/com/nubo/module/maintainer/query/api/models/entity/ScreenActionEntity.java`
50. `src/main/java/com/nubo/module/maintainer/query/api/models/entity/ScreenEntity.java`
51. `src/main/java/com/nubo/module/maintainer/query/api/models/entity/StatusEntity.java`
52. `src/main/java/com/nubo/module/maintainer/query/api/models/entity/SubmoduleAccessTypeEntity.java`
53. `src/main/java/com/nubo/module/maintainer/query/api/models/entity/SubmoduleAccessTypeKey.java`
54. `src/main/java/com/nubo/module/maintainer/query/api/models/entity/SubmoduleEntity.java`
55. `src/main/java/com/nubo/module/maintainer/query/api/models/entity/TypeAccessTypeEntity.java`
56. `src/main/java/com/nubo/module/maintainer/query/api/models/entity/TypeAccessTypeKey.java`
57. `src/main/java/com/nubo/module/maintainer/query/api/models/entity/TypeEntity.java`
58. `src/main/java/com/nubo/module/maintainer/query/api/models/enums/PropertiesEnum.java`
59. `src/main/java/com/nubo/module/maintainer/query/api/models/enums/SearchOperationEnum.java`
60. `src/main/java/com/nubo/module/maintainer/query/api/models/enums/UserTypeEnum.java`
61. `src/main/java/com/nubo/module/maintainer/query/api/models/enums/VersionApiEnum.java`
62. `src/main/java/com/nubo/module/maintainer/query/api/repository/AccessTypeRepository.java`
63. `src/main/java/com/nubo/module/maintainer/query/api/repository/CategoryRepository.java`
64. `src/main/java/com/nubo/module/maintainer/query/api/repository/MenuConfigurationRepository.java`
65. `src/main/java/com/nubo/module/maintainer/query/api/repository/ModuleRepository.java`
66. `src/main/java/com/nubo/module/maintainer/query/api/repository/SubmoduleRepository.java`
67. `src/main/java/com/nubo/module/maintainer/query/api/repository/TypeAccessTypeRepository.java`
68. `src/main/java/com/nubo/module/maintainer/query/api/service/MenuConfigurationService.java`
69. `src/main/java/com/nubo/module/maintainer/query/api/service/impl/MenuConfigurationServiceImpl.java`
70. `src/main/java/com/nubo/module/maintainer/query/api/web/controller/MenuConfigurationRestController.java`
71. `src/main/resources/application-dev.yml`
72. `src/main/resources/application-local.yml`
73. `src/main/resources/application-prod.yml`
74. `src/main/resources/application-qa.yml`
75. `src/main/resources/application-uat.yml`
76. `src/main/resources/application.yml`
77. `src/main/resources/banner.txt`
78. `src/main/resources/log/JsonEventLayout_error.json`
79. `src/main/resources/log/JsonEventLayout_info.json`
80. `src/main/resources/log/JsonEventLayout_trace.json`
81. `src/main/resources/log/log4j2-prod.properties`
82. `src/main/resources/log/log4j2.properties`

## .mvn/wrapper/maven-wrapper.properties

```properties
wrapperVersion=3.3.4
distributionType=only-script
distributionUrl=https://repo.maven.apache.org/maven2/org/apache/maven/apache-maven/3.9.11/apache-maven-3.9.11-bin.zip

```

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
		<version>3.5.6</version>
		<relativePath/>
	</parent>
	<groupId>com.nubo.module.maintainer.query.api</groupId>
	<artifactId>module-maintainer-query-api</artifactId>
	<version>0.17.0</version>
	<name>${project.artifactId}</name>
	<description>Module Maintainer Query Api</description>

	<properties>
		<java.version>17</java.version>
		<spring.port>8080</spring.port>
		<test.skip>false</test.skip>
		<datasource.url.application.name>ApplicationName=${project.artifactId}</datasource.url.application.name>
		<hikari.pool.name>${project.artifactId}-pool</hikari.pool.name>
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
		</dependency>
		<!-- Logging -->
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-log4j2</artifactId>
		</dependency>
		<dependency>
			<groupId>org.apache.logging.log4j</groupId>
			<artifactId>log4j-spring-boot</artifactId>
		</dependency>
		<dependency>
			<groupId>org.apache.logging.log4j</groupId>
			<artifactId>log4j-layout-template-json</artifactId>
			<version>2.22.1</version>
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
								<exclude>**/ModuleMaintainerQueryApiApplication.class</exclude>
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

## src/main/java/com/nubo/module/maintainer/query/api/ModuleMaintainerQueryApiApplication.java

```java
package com.nubo.module.maintainer.query.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ModuleMaintainerQueryApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(ModuleMaintainerQueryApiApplication.class, args);
	}

}

```

## src/main/java/com/nubo/module/maintainer/query/api/application/config/SwaggerConfig.java

```java
package com.nubo.module.maintainer.query.api.application.config;

import com.nubo.module.maintainer.query.api.exception.error.ErrorResponse;
import com.nubo.module.maintainer.query.api.exception.error.ErrorValidation;
import com.nubo.module.maintainer.query.api.models.enums.PropertiesEnum;
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

## src/main/java/com/nubo/module/maintainer/query/api/application/config/WebConfig.java

```java
package com.nubo.module.maintainer.query.api.application.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.http.HttpMethod;
import org.springframework.web.client.RestClient;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
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

    @Bean
    public RestClient restClient() {
        return RestClient.create();
    }

}

```

## src/main/java/com/nubo/module/maintainer/query/api/application/context/GlobalContext.java

```java
package com.nubo.module.maintainer.query.api.application.context;

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

## src/main/java/com/nubo/module/maintainer/query/api/application/database/NamingStrategyConfig.java

```java
package com.nubo.module.maintainer.query.api.application.database;

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

## src/main/java/com/nubo/module/maintainer/query/api/application/database/UpperNamingConfig.java

```java
package com.nubo.module.maintainer.query.api.application.database;

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

## src/main/java/com/nubo/module/maintainer/query/api/application/filters/GlobalFilter.java

```java
package com.nubo.module.maintainer.query.api.application.filters;

import com.nubo.module.maintainer.query.api.application.context.GlobalContext;
import com.nubo.module.maintainer.query.api.application.util.ApplicationUtils;
import com.nubo.module.maintainer.query.api.exception.ServiceException;
import com.nubo.module.maintainer.query.api.exception.error.ErrorCode;
import com.nubo.module.maintainer.query.api.exception.error.ErrorResponse;
import com.nubo.module.maintainer.query.api.models.enums.PropertiesEnum;
import com.nubo.module.maintainer.query.api.models.enums.VersionApiEnum;
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

## src/main/java/com/nubo/module/maintainer/query/api/application/interceptors/GlobalInterceptor.java

```java
package com.nubo.module.maintainer.query.api.application.interceptors;

import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import com.nubo.module.maintainer.query.api.application.context.GlobalContext;

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

## src/main/java/com/nubo/module/maintainer/query/api/application/properties/PropertiesConfig.java

```java
package com.nubo.module.maintainer.query.api.application.properties;

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

## src/main/java/com/nubo/module/maintainer/query/api/application/properties/PropertiesContext.java

```java
package com.nubo.module.maintainer.query.api.application.properties;

import com.nubo.module.maintainer.query.api.application.context.GlobalContext;
import com.nubo.module.maintainer.query.api.application.util.ApplicationUtils;
import com.nubo.module.maintainer.query.api.models.enums.PropertiesEnum;

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

## src/main/java/com/nubo/module/maintainer/query/api/application/util/ApplicationUtils.java

```java
package com.nubo.module.maintainer.query.api.application.util;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.nubo.module.maintainer.query.api.exception.ServiceException;
import com.nubo.module.maintainer.query.api.exception.error.ErrorCode;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class ApplicationUtils {

    private static final ObjectMapper MAPPER = new ObjectMapper();
    private static final String FORMAT_DATETIME = "yyyy-MM-dd'T'HH:mm:ss";
    private static final String FORMAT_DATE = "yyyy-MM-dd";

    static {
        JavaTimeModule javaTimeModule = new JavaTimeModule();
        MAPPER.registerModule(javaTimeModule);
        MAPPER.disable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS);
    }

    private ApplicationUtils() {
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
        } catch (JsonProcessingException e) {
            throw new ServiceException(ErrorCode.UNEXPECTED, e);
        }
    }

    public static <T> T convertJsonToObject(String json, Class<T> clazz) {
        try {
            return MAPPER.readValue(json, clazz);
        } catch (JsonProcessingException e) {
            throw new ServiceException(ErrorCode.UNEXPECTED, e);
        }
    }

}
```

## src/main/java/com/nubo/module/maintainer/query/api/exception/ServiceException.java

```java
package com.nubo.module.maintainer.query.api.exception;

import com.nubo.module.maintainer.query.api.exception.error.ErrorCode;
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

    public ServiceException(ErrorCode errorCode, String messageError) {
        super(messageError);
        this.errorCode = errorCode;
        this.httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
    }

    public HttpStatus getHttpStatusOrDefault() {
        return this.httpStatus != null ? this.httpStatus : HttpStatus.INTERNAL_SERVER_ERROR;
    }

}

```

## src/main/java/com/nubo/module/maintainer/query/api/exception/error/ErrorCode.java

```java
package com.nubo.module.maintainer.query.api.exception.error;


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
    HEADER_CLIENT_IP_REQUIRED("Header client_ip required"),
    HEADER_CLIENT_IP_INVALID("Header client_ip is invalid"),
    HEADER_CLIENT_USER_REQUIRED("Header client_user is required"),
    HEADER_CLIENT_DATETIME_REQUIRED("Header client_datetime is required"),
    HEADER_CLIENT_DATETIME_INVALID("Header client_datetime is invalid"),
    CATEGORY_ORDERITEM_ALREADY_EXISTS("Exist a category with that orderitem"),
    MODULE_ORDERITEM_ALREADY_EXISTS("Exist a module with that orderitem"),
    CATEGORY_NOT_FOUND("category not found"),
    MODULE_NOT_FOUND("module not found"),
    CATEGORY_ALREADY_EXISTS("The category already exist"),
    MODULE_ALREADY_EXISTS("The module already exist"),
    MENU_CONFIGURATION_NOT_FOUND("Menu configuration not found"),
    VERSION_API_NOT_FOUND("Version API not found");


    private final String message;

    ErrorCode(String message) {
        this.message = message;
    }

    public String getName() {
        return this.name();
    }

}
```

## src/main/java/com/nubo/module/maintainer/query/api/exception/error/ErrorResponse.java

```java
package com.nubo.module.maintainer.query.api.exception.error;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
@JsonInclude(JsonInclude.Include.NON_EMPTY)
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

## src/main/java/com/nubo/module/maintainer/query/api/exception/error/ErrorValidation.java

```java
package com.nubo.module.maintainer.query.api.exception.error;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ErrorValidation {

    private String id;
    private String description;

}

```

## src/main/java/com/nubo/module/maintainer/query/api/exception/handler/GlobalExceptionHandler.java

```java
package com.nubo.module.maintainer.query.api.exception.handler;

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

import com.nubo.module.maintainer.query.api.application.properties.PropertiesContext;
import com.nubo.module.maintainer.query.api.exception.ServiceException;
import com.nubo.module.maintainer.query.api.exception.error.ErrorCode;
import com.nubo.module.maintainer.query.api.exception.error.ErrorResponse;
import com.nubo.module.maintainer.query.api.exception.error.ErrorValidation;

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

## src/main/java/com/nubo/module/maintainer/query/api/helpers/MapperMenuConfigurationDynamicSearch.java

```java
package com.nubo.module.maintainer.query.api.helpers;

import com.nubo.module.maintainer.query.api.models.entity.MenuConfigurationEntity;
import com.nubo.module.maintainer.query.api.models.enums.SearchOperationEnum;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.Path;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.util.ObjectUtils;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.function.Function;

@Slf4j
public class MapperMenuConfigurationDynamicSearch {

    public static Specification<MenuConfigurationEntity> buildCombinedSpecification(String fieldName, String fieldValue, String operation) {

        return (root, query, criteriaBuilder) -> {

            List<Predicate> predicates = new ArrayList<>();

            if (!ObjectUtils.isEmpty(fieldName) && !ObjectUtils.isEmpty(fieldValue) && !ObjectUtils.isEmpty(operation)) {
                SearchOperationEnum searchOperation = SearchOperationEnum.fromValue(operation);
                if (searchOperation != null) {
                    Predicate dynamicPredicate = buildUserNuboFieldPredicate(criteriaBuilder, getMenuConfigurationFieldPath(root, fieldName), fieldValue, searchOperation);
                    if (dynamicPredicate != null) {
                        predicates.add(dynamicPredicate);
                    }
                }
            }

            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
            
        };
    }

    private static final Map<String, Function<Root<MenuConfigurationEntity>, Path<?>>> FIELD_PATH_MAPPING = Map.ofEntries(
        Map.entry("categoryName", root -> root.get("category").get("name")),
            Map.entry("moduleName", root -> root.get("module").get("name")),
            Map.entry("submoduleName", root -> root.get("submodule").get("name"))
    );

    private static final Map<Class<?>, Function<String, Object>> TYPE_PARSERS = Map.of(
        Long.class, Long::valueOf,
        long.class, Long::valueOf,
        Integer.class, Integer::valueOf,
        int.class, Integer::valueOf,
        Boolean.class, Boolean::valueOf,
        boolean.class, Boolean::valueOf,
        LocalDate.class, LocalDate::parse,
        LocalDateTime.class, LocalDateTime::parse,
        BigDecimal.class, BigDecimal::new,
        String.class, value -> value
    );

    private enum ComparisonType {
        GREATER_THAN, GREATER_THAN_OR_EQUAL, LESS_THAN, LESS_THAN_OR_EQUAL
    }

    @FunctionalInterface
    private interface PredicateBuilder {
        Predicate build(CriteriaBuilder criteriaBuilder, 
                       Path<?> fieldPath, 
                       String fieldValue);
    }

    private static final Map<SearchOperationEnum, PredicateBuilder> OPERATION_BUILDERS = Map.ofEntries(
        Map.entry(SearchOperationEnum.CONTAINS, (cb, path, value) ->
            cb.like(cb.lower(path.as(String.class)), "%" + value.toLowerCase() + "%")),
        Map.entry(SearchOperationEnum.NOT_CONTAINS, (cb, path, value) ->
            cb.notLike(cb.lower(path.as(String.class)), "%" + value.toLowerCase() + "%")),
        Map.entry(SearchOperationEnum.EQUALS, (cb, path, value) -> {
            Object parsedValue = parseFieldValue(path, value);
            if (path.getJavaType() == String.class) {
                return cb.equal(cb.lower(path.as(String.class)), parsedValue.toString().toLowerCase());
            }
            return cb.equal(path, parsedValue);
        }),
        Map.entry(SearchOperationEnum.NOT_EQUALS, (cb, path, value) -> {
            Object parsedValue = parseFieldValue(path, value);
            if (path.getJavaType() == String.class) {
                return cb.notEqual(cb.lower(path.as(String.class)), parsedValue.toString().toLowerCase());
            }
            return cb.notEqual(path, parsedValue);
        }),
        Map.entry(SearchOperationEnum.STARTS_WITH, (cb, path, value) ->
            cb.like(cb.lower(path.as(String.class)), value.toLowerCase() + "%")),
        Map.entry(SearchOperationEnum.ENDS_WITH, (cb, path, value) ->
            cb.like(cb.lower(path.as(String.class)), "%" + value.toLowerCase())),
        Map.entry(SearchOperationEnum.GREATER_THAN, (cb, path, value) ->
            buildComparisonPredicate(cb, path, value, ComparisonType.GREATER_THAN)),
        Map.entry(SearchOperationEnum.GREATER_THAN_OR_EQUAL, (cb, path, value) ->
            buildComparisonPredicate(cb, path, value, ComparisonType.GREATER_THAN_OR_EQUAL)),
        Map.entry(SearchOperationEnum.LESS_THAN, (cb, path, value) ->
            buildComparisonPredicate(cb, path, value, ComparisonType.LESS_THAN)),
        Map.entry(SearchOperationEnum.LESS_THAN_OR_EQUAL, (cb, path, value) ->
            buildComparisonPredicate(cb, path, value, ComparisonType.LESS_THAN_OR_EQUAL)),
        Map.entry(SearchOperationEnum.IS_EMPTY, (cb, path, value) ->
            cb.or(cb.isNull(path), cb.equal(path.as(String.class), ""))),
        Map.entry(SearchOperationEnum.IS_NOT_EMPTY, (cb, path, value) ->
            cb.and(cb.isNotNull(path), cb.notEqual(path.as(String.class), ""))),
        Map.entry(SearchOperationEnum.IS_ANY_OF, (cb, path, value) -> {
            String[] values = value.split(",");
            CriteriaBuilder.In<Object> inClause = cb.in(path);
            for (String val : values) {
                inClause.value(parseFieldValue(path, val.trim()));
            }
            return inClause;
        })
    );

    @SuppressWarnings("unchecked")
    private static Predicate buildComparisonPredicate(CriteriaBuilder criteriaBuilder,
                                                     Path<?> fieldPath,
                                                     String fieldValue,
                                                     ComparisonType comparisonType) {
        try {
            Object parsedValue = parseFieldValue(fieldPath, fieldValue);
            Class<?> fieldType = fieldPath.getJavaType();

            if (Number.class.isAssignableFrom(fieldType) || fieldType.isPrimitive()) {
                Path<Number> numberPath = (Path<Number>) fieldPath;
                Number numberValue = (Number) parsedValue;

                return switch (comparisonType) {
                    case GREATER_THAN -> criteriaBuilder.gt(numberPath, numberValue);
                    case GREATER_THAN_OR_EQUAL -> criteriaBuilder.ge(numberPath, numberValue);
                    case LESS_THAN -> criteriaBuilder.lt(numberPath, numberValue);
                    case LESS_THAN_OR_EQUAL -> criteriaBuilder.le(numberPath, numberValue);
                };
            } else if (Comparable.class.isAssignableFrom(fieldType)) {
                Path<Comparable<Object>> comparablePath = (Path<Comparable<Object>>) fieldPath;
                Comparable<Object> comparableValue = (Comparable<Object>) parsedValue;

                return switch (comparisonType) {
                    case GREATER_THAN -> criteriaBuilder.greaterThan(comparablePath, comparableValue);
                    case GREATER_THAN_OR_EQUAL -> criteriaBuilder.greaterThanOrEqualTo(comparablePath, comparableValue);
                    case LESS_THAN -> criteriaBuilder.lessThan(comparablePath, comparableValue);
                    case LESS_THAN_OR_EQUAL -> criteriaBuilder.lessThanOrEqualTo(comparablePath, comparableValue);
                };
            } else {
                log.warn("Tipo de campo no soportado para comparación: {}", fieldType);
                return null;
            }
        } catch (Exception e) {
            log.error("Error en buildComparisonPredicate para tipo {}: {}", comparisonType, e.getMessage());
            return null;
        }
    }

    public static Path<?> getMenuConfigurationFieldPath(Root<MenuConfigurationEntity> root, String fieldName) {
        try {
            Function<Root<MenuConfigurationEntity>, Path<?>> pathFunction = FIELD_PATH_MAPPING.get(fieldName);
            if (pathFunction != null) {
                return pathFunction.apply(root);
            }
            log.warn("Campo no reconocido: {}", fieldName);
            return null;
        } catch (Exception e) {
            log.error("Error obteniendo ruta del campo {}: {}", fieldName, e.getMessage());
            return null;
        }
    }

    public static Predicate buildUserNuboFieldPredicate(CriteriaBuilder criteriaBuilder, 
                                                       Path<?> fieldPath, 
                                                       String fieldValue, 
                                                       SearchOperationEnum operation) {
        try {
            PredicateBuilder builder = OPERATION_BUILDERS.get(operation);
            if (builder == null) {
                log.warn("Operación no soportada: {}", operation);
                return null;
            }

            return builder.build(criteriaBuilder, fieldPath, fieldValue);
        } catch (Exception e) {
            log.error("Error construyendo predicado para operación {}: {}", operation, e.getMessage());
            return null;
        }
    }

    public static Object parseFieldValue(Path<?> fieldPath, String value) {
        try {
            Class<?> fieldType = fieldPath.getJavaType();
            Function<String, Object> parser = TYPE_PARSERS.get(fieldType);
            return parser != null ? parser.apply(value) : value;
        } catch (IllegalArgumentException e) {
            log.warn("Error parseando valor {} para tipo {}: {}", value, fieldPath.getJavaType(), e.getMessage());
            return value;
        }
    }
}

```

## src/main/java/com/nubo/module/maintainer/query/api/helpers/MapperPageUtil.java

```java
package com.nubo.module.maintainer.query.api.helpers;

import com.nubo.module.maintainer.query.api.models.dto.response.PageResponseOutDto;
import org.springframework.data.domain.Page;
import java.util.List;

public class MapperPageUtil {

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

    public static <T> PageResponseOutDto<T> pageToPageResponseOutDto(List<T> list, int page, int size, int totalElements) {
        PageResponseOutDto<T> paginationResponseDto = new PageResponseOutDto<>();
        paginationResponseDto.setContent(list);
        paginationResponseDto.setPageSize(size);
        paginationResponseDto.setPageNumber(page);
        paginationResponseDto.setTotalElements((long) totalElements);
        paginationResponseDto.setTotalPages(size > 0 ? (int) Math.ceil((double) totalElements / size) : 1);
        return paginationResponseDto;
    }
}

```

## src/main/java/com/nubo/module/maintainer/query/api/helpers/MapperUtil.java

```java
package com.nubo.module.maintainer.query.api.helpers;

import com.nubo.module.maintainer.query.api.models.dto.response.AccessTypeOutDto;
import com.nubo.module.maintainer.query.api.models.dto.response.CategoryOutDto;
import com.nubo.module.maintainer.query.api.models.dto.response.MenuConfigurationOutDto;
import com.nubo.module.maintainer.query.api.models.dto.response.ModuleOutDto;
import com.nubo.module.maintainer.query.api.models.dto.response.ScreenActionOutDto;
import com.nubo.module.maintainer.query.api.models.dto.response.ScreenOutDto;
import com.nubo.module.maintainer.query.api.models.dto.response.SmallScreenOutDto;
import com.nubo.module.maintainer.query.api.models.dto.response.StatusOutDto;
import com.nubo.module.maintainer.query.api.models.dto.response.SubmoduleOutDto;
import com.nubo.module.maintainer.query.api.models.dto.response.TypeOutDto;
import com.nubo.module.maintainer.query.api.models.entity.AccessTypeEntity;
import com.nubo.module.maintainer.query.api.models.entity.CategoryAccessTypeEntity;
import com.nubo.module.maintainer.query.api.models.entity.CategoryEntity;
import com.nubo.module.maintainer.query.api.models.entity.MenuConfigurationEntity;
import com.nubo.module.maintainer.query.api.models.entity.ModuleAccessTypeEntity;
import com.nubo.module.maintainer.query.api.models.entity.ModuleEntity;
import com.nubo.module.maintainer.query.api.models.entity.ScreenActionAccessTypeEntity;
import com.nubo.module.maintainer.query.api.models.entity.ScreenActionEntity;
import com.nubo.module.maintainer.query.api.models.entity.ScreenEntity;
import com.nubo.module.maintainer.query.api.models.entity.StatusEntity;
import com.nubo.module.maintainer.query.api.models.entity.SubmoduleAccessTypeEntity;
import com.nubo.module.maintainer.query.api.models.entity.SubmoduleEntity;
import com.nubo.module.maintainer.query.api.models.entity.TypeEntity;
import org.springframework.util.ObjectUtils;

import java.util.ArrayList;
import java.util.List;

public final class MapperUtil {

    private MapperUtil() {
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

    public static MenuConfigurationOutDto menuConfigurationEntityToMenuConfigurationOutDto(
            MenuConfigurationEntity menuConfigurationEntity) {
        if (ObjectUtils.isEmpty(menuConfigurationEntity))
            return null;
        List<AccessTypeEntity> accessTypeEntities = new ArrayList<>();
        StatusEntity statusEntity = null;

        if (menuConfigurationEntity.getSubmodule() != null) {
            statusEntity = menuConfigurationEntity.getSubmodule().getStatus();
            accessTypeEntities = menuConfigurationEntity.getSubmodule().getActiveAccessTypes().stream()
                    .map(SubmoduleAccessTypeEntity::getAccessType)
                    .toList();

        } else if (menuConfigurationEntity.getModule() != null) {
            statusEntity = menuConfigurationEntity.getModule().getStatus();
            accessTypeEntities = menuConfigurationEntity.getModule().getActiveAccessTypes().stream()
                    .map(ModuleAccessTypeEntity::getAccessType)
                    .toList();
        }

        else if (menuConfigurationEntity.getCategory() != null) {
            statusEntity = menuConfigurationEntity.getCategory().getStatus();
            accessTypeEntities = menuConfigurationEntity.getCategory().getActiveAccessTypes().stream()
                    .map(CategoryAccessTypeEntity::getAccessType)
                    .toList();

        }

        return MenuConfigurationOutDto.builder()
                .id(menuConfigurationEntity.getId())
                .name(menuConfigurationEntity.getName())
                .description(menuConfigurationEntity.getDescription())
                .enabled(menuConfigurationEntity.getEnabled())
                .category(categoryEntityToCategoryOutDto(menuConfigurationEntity.getCategory()))
                .module(moduleEntityToModuleOutDto(menuConfigurationEntity.getModule()))
                .submodule(submoduleEntityToSubmoduleOutDto(menuConfigurationEntity.getSubmodule()))
                .screen(screenEntityToScreenOutDto(menuConfigurationEntity.getScreen()))
                .accessTypes(accessTypeEntities.stream()
                        .map(MapperUtil::accessTypeEntityToAccessTypeOutDto)
                        .toList())
                .enabled(menuConfigurationEntity.getEnabled())
                .statusOfLastNode(statusEntityToStatusOutDto(statusEntity))
                .build();
    }

    public static CategoryOutDto categoryEntityToCategoryOutDto(CategoryEntity categoryEntity) {
        if (ObjectUtils.isEmpty(categoryEntity))
            return null;
        return CategoryOutDto.builder()
                .id(categoryEntity.getId())
                .description(categoryEntity.getDescription())
                .name(categoryEntity.getName())
                .collapsible(categoryEntity.getCollapsible())
                .orderItem(categoryEntity.getOrderItem())
                .categoryDeleted((categoryEntity.getCategoryDeleted()))
                .type(typeEntityToTypeOutDto(categoryEntity.getType()))
                .accessTypeEntities(categoryEntity.getActiveAccessTypes().stream()
                        .map(CategoryAccessTypeEntity::getAccessType)
                        .map(MapperUtil::accessTypeEntityToAccessTypeOutDto)
                        .toList())
                .status(statusEntityToStatusOutDto(categoryEntity.getStatus()))
                .build();
    }

    public static ModuleOutDto moduleEntityToModuleOutDto(ModuleEntity moduleEntity) {
        if (ObjectUtils.isEmpty(moduleEntity))
            return null;
        return ModuleOutDto.builder()
                .id(moduleEntity.getId())
                .category(categoryEntityToCategoryOutDto(moduleEntity.getCategory()))
                .description(moduleEntity.getDescription())
                .name(moduleEntity.getName())
                .collapsible(moduleEntity.getCollapsible())
                .orderItem(moduleEntity.getOrderItem())
                .moduleDeleted(moduleEntity.getModuleDeleted())
                .type(typeEntityToTypeOutDto(moduleEntity.getType()))
                .accessTypeEntities(moduleEntity.getActiveAccessTypes().stream()
                        .map(ModuleAccessTypeEntity::getAccessType)
                        .map(MapperUtil::accessTypeEntityToAccessTypeOutDto)
                        .toList())
                .status(statusEntityToStatusOutDto(moduleEntity.getStatus()))
                .build();
    }

    public static SubmoduleOutDto submoduleEntityToSubmoduleOutDto(SubmoduleEntity submoduleEntity) {
        if (ObjectUtils.isEmpty(submoduleEntity))
            return null;
        return SubmoduleOutDto.builder()
                .id(submoduleEntity.getId())
                .module(moduleEntityToModuleOutDto(submoduleEntity.getModule()))
                .description(submoduleEntity.getDescription())
                .name(submoduleEntity.getName())
                .collapsible(submoduleEntity.getCollapsible())
                .orderItem(submoduleEntity.getOrderItem())
                .submoduleDeleted(submoduleEntity.getSubmoduleDeleted())
                .type(typeEntityToTypeOutDto(submoduleEntity.getType()))
                .accessTypeEntities(submoduleEntity.getActiveAccessTypes().stream()
                        .map(SubmoduleAccessTypeEntity::getAccessType)
                        .map(MapperUtil::accessTypeEntityToAccessTypeOutDto)
                        .toList())
                .status(statusEntityToStatusOutDto(submoduleEntity.getStatus()))
                .build();
    }

    public static ScreenOutDto screenEntityToScreenOutDto(ScreenEntity screenEntity) {
        if (ObjectUtils.isEmpty(screenEntity))
            return null;
        return ScreenOutDto.builder()
                .id(screenEntity.getId())
                .code(screenEntity.getCode())
                .description(screenEntity.getDescription())
                .screenActionList(screenEntity.getActions().stream()
                        .map(MapperUtil::screenActionEntityToScreenActionOutDto)
                        .toList())
                .build();
    }

    public static ScreenActionOutDto screenActionEntityToScreenActionOutDto(ScreenActionEntity screenActionEntity) {
        if (ObjectUtils.isEmpty(screenActionEntity))
            return null;
        return ScreenActionOutDto.builder()
                .id(screenActionEntity.getId())
                .code(screenActionEntity.getCode())
                .description(screenActionEntity.getDescription())
                .enabled(screenActionEntity.getEnabled())
                .activeAccessTypes(screenActionEntity.getActiveAccessTypeList().stream()
                        .map(ScreenActionAccessTypeEntity::getAccessType)
                        .map(MapperUtil::accessTypeEntityToAccessTypeOutDto)
                        .toList())
                .screen(smallScreenEntityToSmallScreenOutDto(screenActionEntity.getScreen()))
                .screenPattern(smallScreenEntityToSmallScreenOutDto(screenActionEntity.getScreenPattern()))
                .build();
    }

    public static AccessTypeOutDto accessTypeEntityToAccessTypeOutDto(AccessTypeEntity accessTypeEntity) {
        if (ObjectUtils.isEmpty(accessTypeEntity))
            return null;
        return AccessTypeOutDto.builder()
                .id(accessTypeEntity.getId())
                .code(accessTypeEntity.getCode())
                .description(accessTypeEntity.getDescription())
                .name(accessTypeEntity.getName())
                .build();
    }

    public static SmallScreenOutDto smallScreenEntityToSmallScreenOutDto(ScreenEntity screenEntity) {
        if (ObjectUtils.isEmpty(screenEntity))
            return null;
        return SmallScreenOutDto.builder()
                .id(screenEntity.getId())
                .code(screenEntity.getCode())
                .description(screenEntity.getDescription())
                .build();
    }
}

```

## src/main/java/com/nubo/module/maintainer/query/api/models/domain/MenuConfigurationParams.java

```java
package com.nubo.module.maintainer.query.api.models.domain;

public record MenuConfigurationParams(
    int page, 
    int size, 
    String fieldName, 
    String fieldValue, 
    String operation, 
    String sort, 
    String order, 
    boolean all) {
}

```

## src/main/java/com/nubo/module/maintainer/query/api/models/dto/response/AccessTypeOutDto.java

```java
package com.nubo.module.maintainer.query.api.models.dto.response;

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
public class AccessTypeOutDto {

    private Long id;

    private Integer code;

    private String description;

    private String name;
}
```

## src/main/java/com/nubo/module/maintainer/query/api/models/dto/response/AvaibleToChangeOutDto.java

```java
package com.nubo.module.maintainer.query.api.models.dto.response;

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
public class AvaibleToChangeOutDto {

    private boolean avaibleToChange;
}
```

## src/main/java/com/nubo/module/maintainer/query/api/models/dto/response/CategoryOutDto.java

```java
package com.nubo.module.maintainer.query.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

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

    private List<AccessTypeOutDto> accessTypeEntities;

    private Boolean categoryDeleted;

    private TypeOutDto type;

    private StatusOutDto status;
}
```

## src/main/java/com/nubo/module/maintainer/query/api/models/dto/response/MenuConfigurationOutDto.java

```java
package com.nubo.module.maintainer.query.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonInclude(JsonInclude.Include.ALWAYS)
public class MenuConfigurationOutDto {

    private Long id;

    private String name;

    private String description;

    private Boolean enabled;

    private CategoryOutDto category;

    private ModuleOutDto module;

    private SubmoduleOutDto submodule;

    private StatusOutDto statusOfLastNode;

    private ScreenOutDto screen;

    private List<AccessTypeOutDto> accessTypes;
}
```

## src/main/java/com/nubo/module/maintainer/query/api/models/dto/response/ModuleOutDto.java

```java
package com.nubo.module.maintainer.query.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonInclude(JsonInclude.Include.ALWAYS)
public class ModuleOutDto {

    private Long id;

    private CategoryOutDto category;

    private String name;

    private String description;

    private Boolean collapsible;

    private Integer orderItem;

    private List<AccessTypeOutDto> accessTypeEntities;

    private Boolean moduleDeleted;

    private TypeOutDto type;

    private StatusOutDto status;

}
```

## src/main/java/com/nubo/module/maintainer/query/api/models/dto/response/PageResponseOutDto.java

```java
package com.nubo.module.maintainer.query.api.models.dto.response;

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
@JsonInclude(JsonInclude.Include.ALWAYS)
public class PageResponseOutDto<T> {

    private List<T> content;

    private Integer pageSize;

    private Integer pageNumber;

    private Long totalElements;

    private Integer totalPages;

}
```

## src/main/java/com/nubo/module/maintainer/query/api/models/dto/response/ScreenActionOutDto.java

```java
package com.nubo.module.maintainer.query.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonInclude(JsonInclude.Include.ALWAYS)
public class ScreenActionOutDto {

    private Long id;

    private String code;

    private String description;

    private Boolean enabled;

    private SmallScreenOutDto screen;

    private SmallScreenOutDto screenPattern;

    private List<AccessTypeOutDto> activeAccessTypes;

}
```

## src/main/java/com/nubo/module/maintainer/query/api/models/dto/response/ScreenOutDto.java

```java
package com.nubo.module.maintainer.query.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonInclude(JsonInclude.Include.ALWAYS)
public class ScreenOutDto {

    private Long id;

    private String code;

    private String description;

    private List<ScreenActionOutDto> screenActionList;

}
```

## src/main/java/com/nubo/module/maintainer/query/api/models/dto/response/SmallScreenOutDto.java

```java
package com.nubo.module.maintainer.query.api.models.dto.response;

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
public class SmallScreenOutDto {

    private Long id;

    private String code;

    private String description;

}
```

## src/main/java/com/nubo/module/maintainer/query/api/models/dto/response/StatusOutDto.java

```java
package com.nubo.module.maintainer.query.api.models.dto.response;

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

## src/main/java/com/nubo/module/maintainer/query/api/models/dto/response/SubmoduleOutDto.java

```java
package com.nubo.module.maintainer.query.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonInclude(JsonInclude.Include.ALWAYS)
public class SubmoduleOutDto {

    private Long id;

    private ModuleOutDto module;

    private String description;

    private String name;

    private Boolean collapsible;

    private Integer orderItem;

    private List<AccessTypeOutDto> accessTypeEntities;

    private Boolean submoduleDeleted;

    private TypeOutDto type;

    private StatusOutDto status;

}
```

## src/main/java/com/nubo/module/maintainer/query/api/models/dto/response/TypeOutDto.java

```java
package com.nubo.module.maintainer.query.api.models.dto.response;

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

## src/main/java/com/nubo/module/maintainer/query/api/models/entity/AccessTypeEntity.java

```java
package com.nubo.module.maintainer.query.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
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

}

```

## src/main/java/com/nubo/module/maintainer/query/api/models/entity/CategoryAccessTypeEntity.java

```java
package com.nubo.module.maintainer.query.api.models.entity;

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
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"CATEGORY_ACCESS_TYPE\"", schema = "\"NUANBODB\"")
@IdClass(CategoryAccessTypeKey.class)
public class CategoryAccessTypeEntity {

    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"CATEGORY_ID\"", nullable = false)
    private CategoryEntity category;

    @Id
    @ManyToOne(fetch = FetchType.LAZY)
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
}

```

## src/main/java/com/nubo/module/maintainer/query/api/models/entity/CategoryAccessTypeKey.java

```java
package com.nubo.module.maintainer.query.api.models.entity;

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

## src/main/java/com/nubo/module/maintainer/query/api/models/entity/CategoryEntity.java

```java
package com.nubo.module.maintainer.query.api.models.entity;

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
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
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

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"TYPE_ID\"", nullable = false)
    private TypeEntity type;

    @ManyToOne(fetch = FetchType.LAZY)
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
    @OneToMany(mappedBy = "category", fetch = FetchType.LAZY)
    private List<CategoryAccessTypeEntity> activeAccessTypes = new ArrayList<>();

}

```

## src/main/java/com/nubo/module/maintainer/query/api/models/entity/MenuConfigurationAccessTypeEntity.java

```java
package com.nubo.module.maintainer.query.api.models.entity;

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
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"MENU_CONFIGURATION_ACCESS_TYPE\"", schema = "\"NUANBODB\"")
@IdClass(MenuConfigurationAccessTypeKey.class)
public class MenuConfigurationAccessTypeEntity {

    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"MENU_CONFIGURATION_ID\"", nullable = false)
    private MenuConfigurationEntity menuConfiguration;

    @Id
    @ManyToOne(fetch = FetchType.LAZY)
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
}

```

## src/main/java/com/nubo/module/maintainer/query/api/models/entity/MenuConfigurationAccessTypeKey.java

```java
package com.nubo.module.maintainer.query.api.models.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MenuConfigurationAccessTypeKey implements Serializable {

    private Long menuConfiguration;

    private Long accessType;

}

```

## src/main/java/com/nubo/module/maintainer/query/api/models/entity/MenuConfigurationEntity.java

```java
package com.nubo.module.maintainer.query.api.models.entity;

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
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
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

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"CATEGORY_ID\"", nullable = false)
    private CategoryEntity category;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"MODULE_ID\"", nullable = false)
    private ModuleEntity module;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"SUBMODULE_ID\"", nullable = false)
    private SubmoduleEntity submodule;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"SCREEN_ID\"", nullable = false)
    private ScreenEntity screen;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"SCREEN_ACTION_ID\"", nullable = false)
    private ScreenActionEntity screenAction;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 250, nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50, nullable = false)
    private String lastModifyIp;

}

```

## src/main/java/com/nubo/module/maintainer/query/api/models/entity/ModuleAccessTypeEntity.java

```java
package com.nubo.module.maintainer.query.api.models.entity;

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
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"MODULE_ACCESS_TYPE\"", schema = "\"NUANBODB\"")
@IdClass(ModuleAccessTypeKey.class)
public class ModuleAccessTypeEntity {

    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"MODULE_ID\"", nullable = false)
    private ModuleEntity module;

    @Id
    @ManyToOne(fetch = FetchType.LAZY)
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
}

```

## src/main/java/com/nubo/module/maintainer/query/api/models/entity/ModuleAccessTypeKey.java

```java
package com.nubo.module.maintainer.query.api.models.entity;

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

## src/main/java/com/nubo/module/maintainer/query/api/models/entity/ModuleEntity.java

```java
package com.nubo.module.maintainer.query.api.models.entity;

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
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
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

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"CATEGORY_ID\"", nullable = false)
    private CategoryEntity category;

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

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"TYPE_ID\"", nullable = false)
    private TypeEntity type;

    @ManyToOne(fetch = FetchType.LAZY)
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
    private List<ModuleAccessTypeEntity> activeAccessTypes = new ArrayList<>();

}

```

## src/main/java/com/nubo/module/maintainer/query/api/models/entity/ScreenActionAccessTypeEntity.java

```java
package com.nubo.module.maintainer.query.api.models.entity;

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
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"SCREEN_ACTION_ACCESS_TYPE\"", schema = "\"NUANBODB\"")
@IdClass(ScreenActionAccessTypeKey.class)
public class ScreenActionAccessTypeEntity {

    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"SCREEN_ACTION_ID\"", nullable = false)
    private ScreenActionEntity screenAction;

    @Id
    @ManyToOne(fetch = FetchType.LAZY)
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
}

```

## src/main/java/com/nubo/module/maintainer/query/api/models/entity/ScreenActionAccessTypeKey.java

```java
package com.nubo.module.maintainer.query.api.models.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ScreenActionAccessTypeKey implements Serializable {

    private Long screenAction;

    private Long accessType;

}

```

## src/main/java/com/nubo/module/maintainer/query/api/models/entity/ScreenActionEntity.java

```java
package com.nubo.module.maintainer.query.api.models.entity;

import jakarta.persistence.CascadeType;
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
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
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

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"SCREEN_ID\"", nullable = false)
    private ScreenEntity screen;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"PATERN_SCREEN_ID\"", nullable = false)
    private ScreenEntity screenPattern;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 250, nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50, nullable = false)
    private String lastModifyIp;

    @Builder.Default
    @OneToMany(mappedBy = "screenAction", fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ScreenActionAccessTypeEntity> activeAccessTypeList = new ArrayList<>();

}

```

## src/main/java/com/nubo/module/maintainer/query/api/models/entity/ScreenEntity.java

```java
package com.nubo.module.maintainer.query.api.models.entity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
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

    @Builder.Default
    @OneToMany(mappedBy = "screen", fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ScreenActionEntity> actions = new ArrayList<>();

}

```

## src/main/java/com/nubo/module/maintainer/query/api/models/entity/StatusEntity.java

```java
package com.nubo.module.maintainer.query.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
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

}

```

## src/main/java/com/nubo/module/maintainer/query/api/models/entity/SubmoduleAccessTypeEntity.java

```java
package com.nubo.module.maintainer.query.api.models.entity;

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
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"SUBMODULE_ACCESS_TYPE\"", schema = "\"NUANBODB\"")
@IdClass(SubmoduleAccessTypeKey.class)
public class SubmoduleAccessTypeEntity {

    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"SUBMODULE_ID\"", nullable = false)
    private SubmoduleEntity submodule;

    @Id
    @ManyToOne(fetch = FetchType.LAZY)
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
}

```

## src/main/java/com/nubo/module/maintainer/query/api/models/entity/SubmoduleAccessTypeKey.java

```java
package com.nubo.module.maintainer.query.api.models.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SubmoduleAccessTypeKey implements Serializable {

    private Long submodule;

    private Long accessType;

}

```

## src/main/java/com/nubo/module/maintainer/query/api/models/entity/SubmoduleEntity.java

```java
package com.nubo.module.maintainer.query.api.models.entity;

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
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
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

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"MODULE_ID\"", nullable = false)
    private ModuleEntity module;

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

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"TYPE_ID\"", nullable = false)
    private TypeEntity type;

    @Builder.Default
    @OneToMany(mappedBy = "submodule", fetch = FetchType.LAZY)
    private List<SubmoduleAccessTypeEntity> activeAccessTypes = new ArrayList<>();

    @ManyToOne(fetch = FetchType.LAZY)
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

}

```

## src/main/java/com/nubo/module/maintainer/query/api/models/entity/TypeAccessTypeEntity.java

```java
package com.nubo.module.maintainer.query.api.models.entity;

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
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"TYPE_ACCESS_TYPE\"", schema = "\"NUANBODB\"")
@IdClass(TypeAccessTypeKey.class)
public class TypeAccessTypeEntity {

    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"TYPE_ID\"", nullable = false)
    private TypeEntity type;

    @Id
    @ManyToOne(fetch = FetchType.LAZY)
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
}

```

## src/main/java/com/nubo/module/maintainer/query/api/models/entity/TypeAccessTypeKey.java

```java
package com.nubo.module.maintainer.query.api.models.entity;

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

## src/main/java/com/nubo/module/maintainer/query/api/models/entity/TypeEntity.java

```java
package com.nubo.module.maintainer.query.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
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

}

```

## src/main/java/com/nubo/module/maintainer/query/api/models/enums/PropertiesEnum.java

```java
package com.nubo.module.maintainer.query.api.models.enums;

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
    VERSION_API("version_api"),
    AUTH_TOKEN("auth_token"),
    PREVIOUS_SESSION("previous_session"),
    CLIENT_CREDENTIALS("client_credentials");

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

## src/main/java/com/nubo/module/maintainer/query/api/models/enums/SearchOperationEnum.java

```java
package com.nubo.module.maintainer.query.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum SearchOperationEnum {
    CONTAINS("contains"),
    NOT_CONTAINS("notContains"),
    EQUALS("equals"),
    NOT_EQUALS("notEquals"),
    STARTS_WITH("startsWith"),
    ENDS_WITH("endsWith"),
    IS_EMPTY("isEmpty"),
    IS_NOT_EMPTY("isNotEmpty"),
    IS_ANY_OF("isAnyOf"),
    GREATER_THAN("greaterThan"),
    GREATER_THAN_OR_EQUAL("greaterThanOrEqual"),
    LESS_THAN("lessThan"),
    LESS_THAN_OR_EQUAL("lessThanOrEqual"),
    IN("in"),
    NOT_IN("notIn");

    private final String value;

    public static SearchOperationEnum fromValue(String value) {
        for (SearchOperationEnum operation : SearchOperationEnum.values()) {
            if (operation.getValue().equalsIgnoreCase(value)) {
                return operation;
            }
        }
        return null;
    }
}

```

## src/main/java/com/nubo/module/maintainer/query/api/models/enums/UserTypeEnum.java

```java
package com.nubo.module.maintainer.query.api.models.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Arrays;

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
                .filter(status -> status.value.equalsIgnoreCase(value))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Unknown value: " + value));
    }

    @Converter(autoApply = true)
    public static class UserTypeEnumConverter implements AttributeConverter<UserTypeEnum, String> {

        @Override
        public String convertToDatabaseColumn(UserTypeEnum status) {
            return status != null ? status.getValue() : null;
        }

        @Override
        public UserTypeEnum convertToEntityAttribute(String dbData) {
            return dbData != null ? UserTypeEnum.fromValue(dbData) : null;
        }
    }

}

```

## src/main/java/com/nubo/module/maintainer/query/api/models/enums/VersionApiEnum.java

```java
package com.nubo.module.maintainer.query.api.models.enums;

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

## src/main/java/com/nubo/module/maintainer/query/api/repository/AccessTypeRepository.java

```java
package com.nubo.module.maintainer.query.api.repository;

import com.nubo.module.maintainer.query.api.models.entity.AccessTypeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface AccessTypeRepository extends JpaRepository<AccessTypeEntity, Long>,
        JpaSpecificationExecutor<AccessTypeEntity> {

}

```

## src/main/java/com/nubo/module/maintainer/query/api/repository/CategoryRepository.java

```java
package com.nubo.module.maintainer.query.api.repository;

import com.nubo.module.maintainer.query.api.models.entity.CategoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface CategoryRepository extends JpaRepository<CategoryEntity, Long>,
        JpaSpecificationExecutor<CategoryEntity> {

    @Query("""
        SELECT u FROM CategoryEntity u 
        WHERE LOWER(u.name) = LOWER(:name)
        """)
    Optional<CategoryEntity> findByName(String name);

    @Query("""
        SELECT u FROM CategoryEntity u 
        WHERE u.orderItem = :orderItem
        """)
    Optional<CategoryEntity> findByOrderItem(Integer orderItem);
}

```

## src/main/java/com/nubo/module/maintainer/query/api/repository/MenuConfigurationRepository.java

```java
package com.nubo.module.maintainer.query.api.repository;

import com.nubo.module.maintainer.query.api.models.entity.MenuConfigurationEntity;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface MenuConfigurationRepository extends
        JpaRepository<MenuConfigurationEntity, Long>, JpaSpecificationExecutor<MenuConfigurationEntity> {
}

```

## src/main/java/com/nubo/module/maintainer/query/api/repository/ModuleRepository.java

```java
package com.nubo.module.maintainer.query.api.repository;

import com.nubo.module.maintainer.query.api.models.entity.ModuleEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface ModuleRepository extends JpaRepository<ModuleEntity, Long>,
        JpaSpecificationExecutor<ModuleEntity> {
    @Query("""
        SELECT u FROM ModuleEntity u 
        WHERE u.category.id = :categoryId and u.orderItem = :orderItem
        """)
    Optional<ModuleEntity> findByOrderItem(Integer orderItem, Long categoryId);

    @Query("""
        SELECT u FROM ModuleEntity u 
        WHERE LOWER(u.name) = LOWER(:name)
        """)
    Optional<ModuleEntity> findByName(String name);
}

```

## src/main/java/com/nubo/module/maintainer/query/api/repository/SubmoduleRepository.java

```java
package com.nubo.module.maintainer.query.api.repository;

import com.nubo.module.maintainer.query.api.models.entity.SubmoduleEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface SubmoduleRepository extends JpaRepository<SubmoduleEntity, Long>,
        JpaSpecificationExecutor<SubmoduleEntity> {

    @Query("""
        SELECT u FROM SubmoduleEntity u 
        WHERE u.module.id = :moduleId and u.orderItem = :orderItem
        """)
    Optional<SubmoduleEntity> findByOrderItem(Integer orderItem, Long moduleId);

    @Query("""
        SELECT u FROM SubmoduleEntity u 
        WHERE LOWER(u.name) = LOWER(:name)
        """)
    Optional<SubmoduleEntity> findByName(String name);

}

```

## src/main/java/com/nubo/module/maintainer/query/api/repository/TypeAccessTypeRepository.java

```java
package com.nubo.module.maintainer.query.api.repository;

import com.nubo.module.maintainer.query.api.models.entity.TypeAccessTypeEntity;
import com.nubo.module.maintainer.query.api.models.entity.TypeAccessTypeKey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;

public interface TypeAccessTypeRepository extends JpaRepository<TypeAccessTypeEntity, TypeAccessTypeKey>,
        JpaSpecificationExecutor<TypeAccessTypeEntity> {

    List<TypeAccessTypeEntity> findByTypeId(Long typeId);

}

```

## src/main/java/com/nubo/module/maintainer/query/api/service/MenuConfigurationService.java

```java
package com.nubo.module.maintainer.query.api.service;

import com.nubo.module.maintainer.query.api.models.domain.MenuConfigurationParams;
import com.nubo.module.maintainer.query.api.models.dto.response.AccessTypeOutDto;
import com.nubo.module.maintainer.query.api.models.dto.response.AvaibleToChangeOutDto;
import com.nubo.module.maintainer.query.api.models.dto.response.CategoryOutDto;
import com.nubo.module.maintainer.query.api.models.dto.response.MenuConfigurationOutDto;
import com.nubo.module.maintainer.query.api.models.dto.response.ModuleOutDto;
import com.nubo.module.maintainer.query.api.models.dto.response.PageResponseOutDto;
import com.nubo.module.maintainer.query.api.models.dto.response.SubmoduleOutDto;

import java.util.List;

public interface MenuConfigurationService {

    PageResponseOutDto<MenuConfigurationOutDto> findAllMenus(MenuConfigurationParams menuConfigurationParams);

    List<CategoryOutDto> findAllCategories();

    List<ModuleOutDto> findAllModules(Long categoryId);

    List<SubmoduleOutDto> findAllSubmodules(Long categoryId, Long moduleId);

    MenuConfigurationOutDto findMenuDetailById(Long menuId);

    List<AccessTypeOutDto> findAllAcessStatus();

    AvaibleToChangeOutDto validateIsPresent(String node, Long categoryId, Long idNode, String nameNode, Integer orderItemNode);

}

```

## src/main/java/com/nubo/module/maintainer/query/api/service/impl/MenuConfigurationServiceImpl.java

```java

package com.nubo.module.maintainer.query.api.service.impl;

import com.nubo.module.maintainer.query.api.application.properties.PropertiesContext;
import com.nubo.module.maintainer.query.api.exception.ServiceException;
import com.nubo.module.maintainer.query.api.exception.error.ErrorCode;
import com.nubo.module.maintainer.query.api.helpers.MapperMenuConfigurationDynamicSearch;
import com.nubo.module.maintainer.query.api.helpers.MapperPageUtil;
import com.nubo.module.maintainer.query.api.helpers.MapperUtil;
import com.nubo.module.maintainer.query.api.models.domain.MenuConfigurationParams;
import com.nubo.module.maintainer.query.api.models.dto.response.AccessTypeOutDto;
import com.nubo.module.maintainer.query.api.models.dto.response.AvaibleToChangeOutDto;
import com.nubo.module.maintainer.query.api.models.dto.response.CategoryOutDto;
import com.nubo.module.maintainer.query.api.models.dto.response.MenuConfigurationOutDto;
import com.nubo.module.maintainer.query.api.models.dto.response.ModuleOutDto;
import com.nubo.module.maintainer.query.api.models.dto.response.PageResponseOutDto;
import com.nubo.module.maintainer.query.api.models.dto.response.SubmoduleOutDto;
import com.nubo.module.maintainer.query.api.models.entity.CategoryEntity;
import com.nubo.module.maintainer.query.api.models.entity.MenuConfigurationEntity;
import com.nubo.module.maintainer.query.api.models.entity.ModuleEntity;
import com.nubo.module.maintainer.query.api.models.entity.SubmoduleEntity;
import com.nubo.module.maintainer.query.api.models.enums.VersionApiEnum;
import com.nubo.module.maintainer.query.api.repository.AccessTypeRepository;
import com.nubo.module.maintainer.query.api.repository.CategoryRepository;
import com.nubo.module.maintainer.query.api.repository.MenuConfigurationRepository;
import com.nubo.module.maintainer.query.api.repository.ModuleRepository;
import com.nubo.module.maintainer.query.api.repository.SubmoduleRepository;
import com.nubo.module.maintainer.query.api.service.MenuConfigurationService;
import jakarta.persistence.criteria.Predicate;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class MenuConfigurationServiceImpl implements MenuConfigurationService {

    private final MenuConfigurationRepository menuConfigurationRepository;
    private final CategoryRepository categoryRepository;
    private final ModuleRepository moduleRepository;
    private final SubmoduleRepository submoduleRepository;
    private final AccessTypeRepository accessTypeRepository;

    @Override
    public PageResponseOutDto<MenuConfigurationOutDto> findAllMenus(MenuConfigurationParams menuConfigurationParams) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllMenusV1(menuConfigurationParams);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<MenuConfigurationOutDto> findAllMenusV1(
            MenuConfigurationParams menuConfigurationParams) {
        log.info("Start method findAllMenusV1 with {}", menuConfigurationParams);

        Specification<MenuConfigurationEntity> spec = MapperMenuConfigurationDynamicSearch
                .buildCombinedSpecification(null, null, null);

        Sort.Direction direction = "desc".equalsIgnoreCase(menuConfigurationParams.order()) ? Sort.Direction.DESC
                : Sort.Direction.ASC;
        Sort sortObj = Sort.by(direction,
                menuConfigurationParams.sort() != null ? menuConfigurationParams.sort() : "id");

        if (menuConfigurationParams.all()) {
            List<MenuConfigurationEntity> allResults = menuConfigurationRepository.findAll(spec, sortObj);
            List<MenuConfigurationOutDto> dtoList = allResults.stream()
                    .map(MapperUtil::menuConfigurationEntityToMenuConfigurationOutDto)
                    .toList();
            return MapperPageUtil.pageToPageResponseOutDto(dtoList, 0, dtoList.size(), dtoList.size());
        } else {
            Pageable pageable = PageRequest.of(menuConfigurationParams.page(), menuConfigurationParams.size(), sortObj);
            Page<MenuConfigurationEntity> usersPage = menuConfigurationRepository.findAll(spec, pageable);
            List<MenuConfigurationOutDto> menuConfigurationOutDtoList = usersPage.getContent().stream()
                    .map(MapperUtil::menuConfigurationEntityToMenuConfigurationOutDto)
                    .toList();
            return MapperPageUtil.pageToPageResponseOutDto(menuConfigurationOutDtoList, usersPage);
        }
    }

    @Override
    public List<CategoryOutDto> findAllCategories() {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllCategoriesV1();
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<CategoryOutDto> findAllCategoriesV1() {
        log.info("Start method findAllCategoriesV1");

        List<CategoryOutDto> allCategories = categoryRepository.findAll().stream()
                .map(MapperUtil::categoryEntityToCategoryOutDto)
                .filter(CategoryOutDto::getCollapsible)
                .distinct().toList();

        log.info("End method findAllCategoriesV1 with size: {}", allCategories.size());
        return allCategories;
    }

    @Override
    public List<ModuleOutDto> findAllModules(Long categoryId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllModulesV1(categoryId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<ModuleOutDto> findAllModulesV1(Long categoryId) {
        log.info("Start method findAllModulesV1");

        Specification<ModuleEntity> specification = moduleEntitySpecification(categoryId);

        List<ModuleOutDto> allModules = moduleRepository.findAll(specification).stream()
                .map(MapperUtil::moduleEntityToModuleOutDto)
                .filter(ModuleOutDto::getCollapsible)
                .distinct().toList();

        log.info("End method findAllModulesV1 with size: {}", allModules.size());
        return allModules;
    }

    @Override
    public List<SubmoduleOutDto> findAllSubmodules(Long categoryId, Long moduleId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllSubmodulesV1(categoryId, moduleId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<SubmoduleOutDto> findAllSubmodulesV1(Long categoryId, Long moduleId) {
        log.info("Start method findAllSubmodulesV1");

        Specification<SubmoduleEntity> specification = submoduleEntitySpecification(categoryId, moduleId);

        List<SubmoduleOutDto> allSubmodules = submoduleRepository.findAll(specification).stream()
                .map(MapperUtil::submoduleEntityToSubmoduleOutDto)
                .distinct().toList();

        log.info("End method findAllSubmodulesV1 with size: {}", allSubmodules.size());
        return allSubmodules;
    }

    @Override
    public MenuConfigurationOutDto findMenuDetailById(Long menuId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findMenuDetailByIdV1(menuId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private MenuConfigurationOutDto findMenuDetailByIdV1(Long menuId) {
        log.info("Start method findMenuDetailByIdV1");

        MenuConfigurationOutDto menuConfigurationOutDto = menuConfigurationRepository.findById(menuId)
                .map(MapperUtil::menuConfigurationEntityToMenuConfigurationOutDto)
                .orElseThrow(() -> new ServiceException(ErrorCode.MENU_CONFIGURATION_NOT_FOUND, HttpStatus.NOT_FOUND));

        log.info("End method findMenuDetailByIdV1: {}", menuConfigurationOutDto);
        return menuConfigurationOutDto;
    }

    @Override
    public List<AccessTypeOutDto> findAllAcessStatus() {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllAcessStatusV1();
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<AccessTypeOutDto> findAllAcessStatusV1() {
        log.info("Start method findAllAcessStatusV1");

        List<AccessTypeOutDto> allAccessStatus = accessTypeRepository.findAll().stream()
                .map(MapperUtil::accessTypeEntityToAccessTypeOutDto)
                .distinct().toList();

        log.info("End method findAllAcessStatusV1 with {}", allAccessStatus);
        return allAccessStatus;
    }

    @Override
    public AvaibleToChangeOutDto validateIsPresent(String node, Long categoryId, Long idNode, String nameNode,
            Integer orderItemNode) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return validateIsPresentV1(node, categoryId, idNode, nameNode, orderItemNode);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private AvaibleToChangeOutDto validateIsPresentV1(String node, Long categoryId, Long idNode, String nameNode,
            Integer orderItemNode) {
        log.info("Start method validateIsPresentV1");

        AvaibleToChangeOutDto avaibleToChangeOutDto = AvaibleToChangeOutDto.builder().avaibleToChange(true).build();

        if (node.toLowerCase().equals("category")) {
            CategoryEntity categoryEntityLast = categoryRepository.findById(idNode)
                    .orElseThrow(() -> new ServiceException(ErrorCode.CATEGORY_NOT_FOUND, HttpStatus.NOT_FOUND));

            Optional<CategoryEntity> categoryName = categoryRepository.findByName(nameNode);

            if (categoryName.isPresent() && !categoryEntityLast.getName().equals(categoryName.get().getName())) {
                throw new ServiceException(ErrorCode.CATEGORY_ALREADY_EXISTS, HttpStatus.NOT_FOUND);
            }

            Optional<CategoryEntity> categoryByOrderItem = categoryRepository.findByOrderItem(orderItemNode);

            if (categoryByOrderItem.isPresent()
                    && categoryEntityLast.getOrderItem() != categoryByOrderItem.get().getOrderItem()) {
                throw new ServiceException(ErrorCode.CATEGORY_ORDERITEM_ALREADY_EXISTS, HttpStatus.NOT_FOUND);
            }

        } else if (node.toLowerCase().equals("module")) {
            ModuleEntity moduleEntityLast = moduleRepository.findById(idNode)
                    .orElseThrow(() -> new ServiceException(ErrorCode.MODULE_NOT_FOUND, HttpStatus.NOT_FOUND));

            Optional<ModuleEntity> moduleName = moduleRepository.findByName(nameNode);

            if (moduleName.isPresent() && !moduleEntityLast.getName().equals(moduleName.get().getName())) {
                throw new ServiceException(ErrorCode.MODULE_ALREADY_EXISTS, HttpStatus.NOT_FOUND);
            }

            Optional<ModuleEntity> moduleByOrderItem = moduleRepository.findByOrderItem(orderItemNode, categoryId);

            if (moduleByOrderItem.isPresent()
                    && moduleEntityLast.getOrderItem() != moduleByOrderItem.get().getOrderItem()) {
                throw new ServiceException(ErrorCode.MODULE_ORDERITEM_ALREADY_EXISTS, HttpStatus.NOT_FOUND);
            }
        } else {

        }

        log.info("End method validateIsPresentV1");
        return avaibleToChangeOutDto;
    }

    private Specification<ModuleEntity> moduleEntitySpecification(Long categoryId) {
        return (root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();
            if (!ObjectUtils.isEmpty(categoryId)) {
                predicates.add(criteriaBuilder.equal(root.get("category").get("id"), categoryId));
            }

            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }

    private Specification<SubmoduleEntity> submoduleEntitySpecification(Long categoryId, Long moduleId) {
        return (root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();
            if (!ObjectUtils.isEmpty(categoryId)) {
                predicates.add(criteriaBuilder.equal(root.get("module").get("category").get("id"), categoryId));
            }
            if (!ObjectUtils.isEmpty(moduleId)) {
                predicates.add(criteriaBuilder.equal(root.get("module").get("id"), moduleId));
            }

            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }
}

```

## src/main/java/com/nubo/module/maintainer/query/api/web/controller/MenuConfigurationRestController.java

```java
package com.nubo.module.maintainer.query.api.web.controller;

import com.nubo.module.maintainer.query.api.models.domain.MenuConfigurationParams;
import com.nubo.module.maintainer.query.api.models.dto.response.AccessTypeOutDto;
import com.nubo.module.maintainer.query.api.models.dto.response.AvaibleToChangeOutDto;
import com.nubo.module.maintainer.query.api.models.dto.response.CategoryOutDto;
import com.nubo.module.maintainer.query.api.models.dto.response.MenuConfigurationOutDto;
import com.nubo.module.maintainer.query.api.models.dto.response.ModuleOutDto;
import com.nubo.module.maintainer.query.api.models.dto.response.PageResponseOutDto;
import com.nubo.module.maintainer.query.api.models.dto.response.SubmoduleOutDto;
import com.nubo.module.maintainer.query.api.service.MenuConfigurationService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Tag(name = "Menu")
@RequestMapping("/{version}/menu")
@RestController
@RequiredArgsConstructor
public class MenuConfigurationRestController {

    private final MenuConfigurationService menuConfigurationService;

    @Operation(summary = "Find all menus", description = "Find all menus")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = MenuConfigurationOutDto[].class)))})
    @GetMapping
    public ResponseEntity<PageResponseOutDto<MenuConfigurationOutDto>> findAllMenus(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(required = false) String fieldName,
            @RequestParam(required = false) String fieldValue,
            @RequestParam(required = false) String operation,
            @RequestParam(defaultValue = "id") String sort,
            @RequestParam(defaultValue = "asc") String order,
            @RequestParam(defaultValue = "false") boolean all) {
        MenuConfigurationParams params = new MenuConfigurationParams(page, size, fieldName, fieldValue, operation, sort, order, all);
        return ResponseEntity.ok(menuConfigurationService.findAllMenus(params));
    }

    @Operation(summary = "Find all categories", description = "Find all categories")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = CategoryOutDto[].class)))})
    @GetMapping("/categories")
    public ResponseEntity<List<CategoryOutDto>> findAllCategories() {
        return ResponseEntity.ok(menuConfigurationService.findAllCategories());
    }

    @Operation(summary = "Find all modules", description = "Find all modules")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = ModuleOutDto[].class)))})
    @GetMapping("/modules")
    public ResponseEntity<List<ModuleOutDto>> findAllModules(
            @RequestParam(required = false) Long categoryId) {
        return ResponseEntity.ok(menuConfigurationService.findAllModules(categoryId));
    }

    @Operation(summary = "Find all submodules", description = "Find all submodules")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = SubmoduleOutDto[].class)))})
    @GetMapping("/submodules")
    public ResponseEntity<List<SubmoduleOutDto>> findAllSubmodules(
            @RequestParam(required = false) Long categoryId,
            @RequestParam(required = false) Long moduleId) {
        return ResponseEntity.ok(menuConfigurationService.findAllSubmodules(categoryId, moduleId));
    }

    @Operation(summary = "Get detail of menu", description = "Get detail of menu")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = MenuConfigurationOutDto[].class)))})
    @GetMapping("/{menuId}/detail")
    public ResponseEntity<MenuConfigurationOutDto> findMenuDetailById(
            @PathVariable Long menuId) {
        return ResponseEntity.ok(menuConfigurationService.findMenuDetailById(menuId));
    }

    @Operation(summary = "Get all access type of menu", description = "Get all access type of menu")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = AccessTypeOutDto[].class)))})
    @GetMapping("/accessType")
    public ResponseEntity<List<AccessTypeOutDto>> findAllAcessStatus() {
        return ResponseEntity.ok(menuConfigurationService.findAllAcessStatus());
    }

    @Operation(summary = "Validate if exist a category, module or submodule",
            description = "Validate if exist a category, module or submodule")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = AccessTypeOutDto[].class)))})
    @GetMapping("/exist")
    public ResponseEntity<AvaibleToChangeOutDto> validateIsPresent(
            @RequestParam(required = true) String node,
            @RequestParam(required = false) Long categoryId,
            @RequestParam(required = true) Long idNode,
            @RequestParam(required = true) String nameNode,
            @RequestParam(required = true) Integer orderItemNode) {
        return ResponseEntity.ok(menuConfigurationService.validateIsPresent(node, categoryId, idNode, nameNode, orderItemNode));
    }

}

```

## src/main/resources/application-dev.yml

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

## src/main/resources/application-prod.yml

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
    name: @project.name@
    type: service
server:
  servlet:
    context-path: /${spring.application.name}
application:
  version: @project.version@
  description: 'Documentation Endpoints'
  title: @project.description@
  group: ${spring.application.name}
management:
  health:
    probes:
      enabled: true
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
,--.   ,--. ,-----. ,------.  ,--. ,--.,--.   ,------.,--.   ,--.  ,---.  ,--.,--.  ,--.,--------. ,---.  ,--.,--.  ,--.,------.,------.  ,-----.   ,--. ,--.,------.,------.,--.   ,--.,---.  ,------. ,--.
|   `.'   |'  .-.  '|  .-.  \ |  | |  ||  |   |  .---'|   `.'   | /  O  \ |  ||  ,'.|  |'--.  .--'/  O  \ |  ||  ,'.|  ||  .---'|  .--. ''  .-.  '  |  | |  ||  .---'|  .--. '\  `.'  //  O  \ |  .--. '|  |
|  |'.'|  ||  | |  ||  |  \  :|  | |  ||  |   |  `--, |  |'.'|  ||  .-.  ||  ||  |' '  |   |  |  |  .-.  ||  ||  |' '  ||  `--, |  '--'.'|  | |  |  |  | |  ||  `--, |  '--'.' '.    /|  .-.  ||  '--' ||  |
|  |   |  |'  '-'  '|  '--'  /'  '-'  '|  '--.|  `---.|  |   |  ||  | |  ||  ||  | `   |   |  |  |  | |  ||  ||  | `   ||  `---.|  |\  \ '  '-'  '-.'  '-'  '|  `---.|  |\  \    |  | |  | |  ||  | --' |  |
`--'   `--' `-----' `-------'  `-----' `-----'`------'`--'   `--'`--' `--'`--'`--'  `--'   `--'  `--' `--'`--'`--'  `--'`------'`--' '--' `-----'--' `-----' `------'`--' '--'   `--' `--' `--'`--'     `--'
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
