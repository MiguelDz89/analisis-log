# nbo-png-ops-custodio-emp-aut-query-back

Código fuente completo de producción y configuraciones. Captura local: 28/10/2026.

Incluye 71 archivos Java y 16 archivos de configuración, recursos y compilación.

Cada sección identifica la ruta original y contiene el archivo completo. Los Java conservan sus implementaciones, imports, anotaciones y comentarios. Se excluyen src/test, clases de prueba, resultados de compilación, librerías binarias y herramientas/perfiles de pruebas de rendimiento.

Credenciales literales ocultadas en configuraciones: 0. Las referencias a variables de entorno se conservan.

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
17. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/OperationsCustodyAutomaticPackagesQueryApiApplication.java`
18. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/application/config/ClockConfig.java`
19. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/application/config/SwaggerConfig.java`
20. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/application/config/WebClientConfig.java`
21. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/application/config/WebConfig.java`
22. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/application/context/GlobalContext.java`
23. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/application/database/NamingStrategyConfig.java`
24. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/application/database/UpperNamingConfig.java`
25. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/application/filters/GlobalFilter.java`
26. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/application/interceptors/GlobalInterceptor.java`
27. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/application/properties/AutomaticPackagingProperties.java`
28. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/application/properties/PropertiesConfig.java`
29. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/application/properties/PropertiesContext.java`
30. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/application/util/ApplicationUtils.java`
31. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/application/util/JsonRequestSpool.java`
32. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/application/util/RestClientUtils.java`
33. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/application/util/WebClientUtils.java`
34. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/client/PackageCustodianCmdClient.java`
35. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/client/impl/PackageCustodianCmdClientImpl.java`
36. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/component/AutomaticPackageGrouper.java`
37. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/exception/ClientException.java`
38. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/exception/ServiceException.java`
39. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/exception/error/ErrorCode.java`
40. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/exception/error/ErrorResponse.java`
41. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/exception/error/ErrorValidation.java`
42. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/exception/handler/GlobalExceptionHandler.java`
43. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/helpers/MapperPageUtil.java`
44. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/helpers/MapperUtil.java`
45. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/dto/internal/AutomaticPackageCandidateDto.java`
46. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/dto/internal/AutomaticPackageGroupKey.java`
47. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/dto/internal/SettlementUpdateKeyDto.java`
48. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/dto/request/AutomaticCustodianPackageRunRequestDto.java`
49. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/dto/request/PackageCustodianAutomaticInDto.java`
50. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/dto/request/PackageGroupingRequestDto.java`
51. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/dto/request/PackageTransferRequestDto.java`
52. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/dto/response/AutomaticCustodianPackageRunResponseDto.java`
53. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/dto/response/PackageCustodianAutomaticOutDto.java`
54. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/dto/response/PackageFractionReferenceDto.java`
55. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/dto/response/PackageGroupingResponseDto.java`
56. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/dto/response/PackageTransferResponseDto.java`
57. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/dto/response/PageResponseOutDto.java`
58. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/entity/PackageCustodianEntity.java`
59. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/entity/PackageCustodianHistoryEntity.java`
60. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/entity/PackageCustodianHistoryId.java`
61. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/entity/PackageCustodianId.java`
62. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/entity/PackageDetailEntity.java`
63. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/entity/PackageDetailHistoryEntity.java`
64. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/entity/PackageDetailHistoryId.java`
65. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/entity/PackageDetailId.java`
66. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/entity/SettlementEntity.java`
67. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/entity/SettlementId.java`
68. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/entity/TradeEntity.java`
69. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/enums/AutomaticCutType.java`
70. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/enums/PropertiesEnum.java`
71. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/enums/SettlementUpdateSource.java`
72. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/enums/VersionApiEnum.java`
73. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/repository/AutomaticCustodianPackagingRepository.java`
74. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/repository/PackageCustodianHistoryRepository.java`
75. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/repository/PackageCustodianRepository.java`
76. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/repository/PackageDetailHistoryRepository.java`
77. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/repository/PackageDetailRepository.java`
78. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/repository/SettlementRepository.java`
79. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/repository/TradeRepository.java`
80. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/repository/impl/AutomaticCustodianPackagingRepositoryImpl.java`
81. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/repository/projection/ExistingPackageProjection.java`
82. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/repository/projection/PackageTransferProjection.java`
83. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/repository/projection/SettlementCandidateProjection.java`
84. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/service/AutomaticCustodianPackagingService.java`
85. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/service/impl/AutomaticCustodianPackagingServiceImpl.java`
86. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/service/impl/SettlementCustodianStatusUpdater.java`
87. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/web/controller/AutomaticCustodianPackagingRestController.java`

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
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">

    <modelVersion>4.0.0</modelVersion>

    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>4.1.1</version>
        <relativePath/>
    </parent>

    <groupId>com.nubo.operations.custody.automatic.packages.query.api</groupId>
    <artifactId>operations-custody-automatic-packages-api</artifactId>
    <version>0.3.0-beta.1</version>
    <name>${project.artifactId}</name>
    <description>Operations Custody Automatic Packages Query API</description>

    <properties>
        <java.version>21</java.version>
        <spring.port>8080</spring.port>
        <test.skip>false</test.skip>

        <datasource.url.application.name>ApplicationName=${project.artifactId}</datasource.url.application.name>
        <hikari.pool.name>${project.artifactId}-pool</hikari.pool.name>

        <!-- Spring Boot 4.1.1 manages Spring Framework 7.0.9 and Netty 4.2.17.Final. -->
        <!-- Patched security overrides (two Jackson major lines coexist where needed). -->
        <jackson-bom.version>3.1.7</jackson-bom.version>
        <jackson-2-bom.version>2.21.7</jackson-2-bom.version>
        <tomcat.version>11.0.25</tomcat.version>

        <log4j2.version>2.26.1</log4j2.version>
        <postgresql.version>42.7.12</postgresql.version>
        <commons-lang3.version>3.18.0</commons-lang3.version>
        <springdoc-openapi.version>3.1.1</springdoc-openapi.version>
        <gson.version>2.13.2</gson.version>
        <xmlunit.version>2.12.0</xmlunit.version>
        <jacoco.version>0.8.12</jacoco.version>
    </properties>

    <!-- Let the Spring Boot parent manage Jackson 2/3, Netty and Log4j BOMs. -->
    <dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>org.xmlunit</groupId>
                <artifactId>xmlunit-core</artifactId>
                <version>${xmlunit.version}</version>
            </dependency>
        </dependencies>
    </dependencyManagement>

    <dependencies>
        <!-- MVC / embedded Tomcat 11 -->
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

        <!-- WebClient without adding an unnecessary reactive server starter -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-webclient</artifactId>
            <exclusions>
                <exclusion>
                    <groupId>org.springframework.boot</groupId>
                    <artifactId>spring-boot-starter-logging</artifactId>
                </exclusion>
            </exclusions>
        </dependency>

        <dependency>
            <groupId>org.apache.commons</groupId>
            <artifactId>commons-lang3</artifactId>
        </dependency>

        <!-- A single logging implementation: Log4j2. -->
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
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <optional>true</optional>
            <scope>provided</scope>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-jpa</artifactId>
            <exclusions>
                <exclusion>
                    <groupId>org.springframework.boot</groupId>
                    <artifactId>spring-boot-starter-logging</artifactId>
                </exclusion>
            </exclusions>
        </dependency>
        <dependency>
            <groupId>org.postgresql</groupId>
            <artifactId>postgresql</artifactId>
            <scope>runtime</scope>
        </dependency>

        <dependency>
            <groupId>org.springdoc</groupId>
            <artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>
            <version>${springdoc-openapi.version}</version>
            <exclusions>
                <exclusion>
                    <groupId>org.apache.commons</groupId>
                    <artifactId>commons-lang3</artifactId>
                </exclusion>
            </exclusions>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-validation</artifactId>
            <exclusions>
                <exclusion>
                    <groupId>org.springframework.boot</groupId>
                    <artifactId>spring-boot-starter-logging</artifactId>
                </exclusion>
            </exclusions>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-actuator</artifactId>
            <exclusions>
                <exclusion>
                    <groupId>org.springframework.boot</groupId>
                    <artifactId>spring-boot-starter-logging</artifactId>
                </exclusion>
            </exclusions>
        </dependency>

        <dependency>
            <groupId>com.google.code.gson</groupId>
            <artifactId>gson</artifactId>
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
        <!-- Web MVC testing moved to a dedicated starter in Boot 4. -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-webmvc-test</artifactId>
            <scope>test</scope>
            <exclusions>
                <exclusion>
                    <groupId>org.springframework.boot</groupId>
                    <artifactId>spring-boot-starter-logging</artifactId>
                </exclusion>
            </exclusions>
        </dependency>
        <dependency>
            <groupId>org.xmlunit</groupId>
            <artifactId>xmlunit-core</artifactId>
            <scope>test</scope>
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
                    <testFailureIgnore>false</testFailureIgnore>
                </configuration>
            </plugin>
            <plugin>
                <groupId>org.jacoco</groupId>
                <artifactId>jacoco-maven-plugin</artifactId>
                <version>${jacoco.version}</version>
                <executions>
                    <execution>
                        <id>prepare-agent</id>
                        <goals><goal>prepare-agent</goal></goals>
                    </execution>
                    <execution>
                        <id>report</id>
                        <phase>test</phase>
                        <goals><goal>report</goal></goals>
                        <configuration>
                            <excludes>
                                <exclude>**/application/**</exclude>
                                <exclude>**/models/**</exclude>
                                <exclude>**/repository/**</exclude>
                                <exclude>**/OperationsCustodyAutomaticPackagesQueryApiApplication.class</exclude>
                            </excludes>
                            <includes><include>**/*.class</include></includes>
                        </configuration>
                    </execution>
                    <execution>
                        <id>post-unit-test</id>
                        <phase>test</phase>
                        <goals><goal>report</goal></goals>
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
    open-in-view: false
    hibernate:
      ddl-auto: none
      default_schema: NUANBODB
    show-sql: 'false'
    database-platform: org.hibernate.dialect.PostgreSQLDialect
    properties:
      hibernate:
        jdbc:
          batch_size: ${HIBERNATE_JDBC_BATCH_SIZE:50}
          batch_versioned_data: true
        order_inserts: ${HIBERNATE_ORDER_INSERTS:true}
        order_updates: ${HIBERNATE_ORDER_UPDATES:true}
automatic-packaging:
  max-details-per-package: ${AUTOMATIC_PACKAGING_MAX_DETAILS_PER_PACKAGE:50000}
  business-zone: ${AUTOMATIC_PACKAGING_BUSINESS_ZONE:America/Lima}
  candidate:
    allowed-custodian-status-ids: ${AUT_PACK_ALLOWED_CUSTODIAN_STATUS_IDS:}
    excluded-custodian-status-ids: ${AUT_PACK_EXCLUDED_CUSTODIAN_STATUS_IDS:}
    excluded-trade-status-ids: ${AUT_PACK_EXCLUDED_TRADE_STATUS_IDS:}
    excluded-trade-type-ids: ${AUT_PACK_EXCLUDED_TRADE_TYPE_IDS:59}
    included-settlement-status-ids:
      - 2
    rejected-custodian-status-ids: ${AUT_PACK_REJECTED_CUSTODIAN_STATUS_IDS:1074,1071}
    rejected-package-detail-status-id: ${AUT_PACK_REJECTED_PACKAGE_DETAIL_STATUS_ID:1074}
    exclude-already-packaged: ${AUT_PACK_EXCLUDE_ALREADY_PACKAGED:true}
    require-final-assignment: ${AUT_PACK_REQUIRE_FINAL_ASSIGNMENT:true}
  dispatch:
    cmd-package-chunk-size: ${AUTOMATIC_PACKAGING_CMD_PACKAGE_CHUNK_SIZE:500}
  settlement:
    transferred-status-id: ${AUTOMATIC_PACKAGING_SETTLEMENT_TRANSFERRED_STATUS_ID:1071}
    update-source: ${AUTOMATIC_PACKAGING_SETTLEMENT_UPDATE_SOURCE:QUERY_REQUEST}
logging:
  config: classpath:log/log4j2.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR
client:
  nubo:
    packages-custody-cmd:
      base-url: ${NUBO_URL_PACKAGES_CUSTODY_CMD_BASE_URL}
      version: ${NUBO_PACKAGES_CUSTODY_CMD_VERSION}
      automatic-path: ${NUBO_PACKAGES_CUSTODY_CMD_AUTOMATIC_PATH}
      connect-timeout-ms: ${PACKAGES_CUSTODY_CMD_CONNECT_TIMEOUT_MS:5000}
      read-timeout-ms: ${PACKAGES_CUSTODY_CMD_READ_TIMEOUT_MS:30000}
      max-in-memory-size-mb: ${PACKAGES_CUSTODY_CMD_MAX_IN_MEMORY_SIZE_MB:10}


```

## src/main/resources/application-local.yml

```yaml
server:
  port: 8082
spring:
  datasource:
    username: ${DB_USERNAME}
    password: ${DB_PASSWORD}
    url: ${DB_URL_DEV}?@datasource.url.application.name@
    hikari:
      maximum-pool-size: ${DB_HIKARI_MAXIMUM_POOL_SIZE:10}
      minimum-idle: ${DB_HIKARI_MINIMUM_IDLE:2}
      idle-timeout: ${DB_HIKARI_IDLE_TIMEOUT:600000}
      validation-timeout: ${DB_HIKARI_VALIDATION_TIMEOUT:5000}
      max-lifetime: ${DB_HIKARI_MAX_LIFETIME:1800000}
      connection-timeout: ${DB_HIKARI_CONNECTION_TIMEOUT:30000}
      leak-detection-threshold: ${DB_HIKARI_LEAK_DETECTION_THRESHOLD:0}
      connection-test-query: SELECT 1

      pool-name: @hikari.pool.name@
  jpa:
    open-in-view: false
    hibernate:
      ddl-auto: none
      default_schema: NUANBODB
    show-sql: 'false'
    database-platform: org.hibernate.dialect.PostgreSQLDialect
    properties:
      hibernate:
        jdbc:
          batch_size: ${HIBERNATE_JDBC_BATCH_SIZE:50}
          batch_versioned_data: true
        order_inserts: ${HIBERNATE_ORDER_INSERTS:true}
        order_updates: ${HIBERNATE_ORDER_UPDATES:true}
automatic-packaging:
  max-details-per-package: ${AUTOMATIC_PACKAGING_MAX_DETAILS_PER_PACKAGE:50000}
  business-zone: ${AUTOMATIC_PACKAGING_BUSINESS_ZONE:America/Lima}
  candidate:
    allowed-custodian-status-ids: ${AUT_PACK_ALLOWED_CUSTODIAN_STATUS_IDS:}
    excluded-custodian-status-ids: ${AUT_PACK_EXCLUDED_CUSTODIAN_STATUS_IDS:}
    excluded-trade-status-ids: ${AUT_PACK_EXCLUDED_TRADE_STATUS_IDS:}
    excluded-trade-type-ids: ${AUT_PACK_EXCLUDED_TRADE_TYPE_IDS:59}
    included-settlement-status-ids:
      - 2
      - 9
      - 15
    rejected-custodian-status-ids: ${AUT_PACK_REJECTED_CUSTODIAN_STATUS_IDS:1074,1075}
    rejected-package-detail-status-id: ${AUT_PACK_REJECTED_PACKAGE_DETAIL_STATUS_ID:1074}
    exclude-already-packaged: ${AUT_PACK_EXCLUDE_ALREADY_PACKAGED:true}
    require-final-assignment: ${AUT_PACK_REQUIRE_FINAL_ASSIGNMENT:true}
  dispatch:
    cmd-package-chunk-size: ${AUTOMATIC_PACKAGING_CMD_PACKAGE_CHUNK_SIZE:500}
  settlement:
    transferred-status-id: ${AUTOMATIC_PACKAGING_SETTLEMENT_TRANSFERRED_STATUS_ID:1071}
    update-source: ${AUTOMATIC_PACKAGING_SETTLEMENT_UPDATE_SOURCE:QUERY_REQUEST}
logging:
  config: classpath:log/log4j2.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR
client:
  nubo:
    packages-custody-cmd:
      base-url: ${NUBO_URL_PACKAGES_CUSTODY_CMD_BASE_URL:http://localhost:8083/packages-custody-cmd-api}
      version: ${NUBO_PACKAGES_CUSTODY_CMD_VERSION:v1}
      automatic-path: ${NUBO_PACKAGES_CUSTODY_CMD_AUTOMATIC_PATH:/{version}/package-custodian/automatic}
      connect-timeout-ms: ${PACKAGES_CUSTODY_CMD_CONNECT_TIMEOUT_MS:5000}
      read-timeout-ms: ${PACKAGES_CUSTODY_CMD_READ_TIMEOUT_MS:300000}
      max-in-memory-size-mb: ${PACKAGES_CUSTODY_CMD_MAX_IN_MEMORY_SIZE_MB:10}


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
    open-in-view: false
    hibernate:
      ddl-auto: none
      default_schema: NUANBODB
    show-sql: 'false'
    database-platform: org.hibernate.dialect.PostgreSQLDialect
    properties:
      hibernate:
        jdbc:
          batch_size: ${HIBERNATE_JDBC_BATCH_SIZE:50}
          batch_versioned_data: true
        order_inserts: ${HIBERNATE_ORDER_INSERTS:true}
        order_updates: ${HIBERNATE_ORDER_UPDATES:true}
automatic-packaging:
  max-details-per-package: ${AUTOMATIC_PACKAGING_MAX_DETAILS_PER_PACKAGE:50000}
  business-zone: ${AUTOMATIC_PACKAGING_BUSINESS_ZONE:America/Lima}
  candidate:
    allowed-custodian-status-ids: ${AUT_PACK_ALLOWED_CUSTODIAN_STATUS_IDS:}
    excluded-custodian-status-ids: ${AUT_PACK_EXCLUDED_CUSTODIAN_STATUS_IDS:}
    excluded-trade-status-ids: ${AUT_PACK_EXCLUDED_TRADE_STATUS_IDS:}
    excluded-trade-type-ids: ${AUT_PACK_EXCLUDED_TRADE_TYPE_IDS:59}
    included-settlement-status-ids:
      - 2
      - 9
      - 15
    rejected-custodian-status-ids: ${AUT_PACK_REJECTED_CUSTODIAN_STATUS_IDS:1074,1075}
    rejected-package-detail-status-id: ${AUT_PACK_REJECTED_PACKAGE_DETAIL_STATUS_ID:1074}
    exclude-already-packaged: ${AUT_PACK_EXCLUDE_ALREADY_PACKAGED:true}
    require-final-assignment: ${AUT_PACK_REQUIRE_FINAL_ASSIGNMENT:true}
  dispatch:
    cmd-package-chunk-size: ${AUTOMATIC_PACKAGING_CMD_PACKAGE_CHUNK_SIZE:500}
  settlement:
    transferred-status-id: ${AUTOMATIC_PACKAGING_SETTLEMENT_TRANSFERRED_STATUS_ID:1071}
    update-source: ${AUTOMATIC_PACKAGING_SETTLEMENT_UPDATE_SOURCE:QUERY_REQUEST}
logging:
  config: classpath:log/log4j2-prod.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR
client:
  nubo:
    packages-custody-cmd:
      base-url: ${NUBO_URL_PACKAGES_CUSTODY_CMD_BASE_URL}
      version: ${NUBO_PACKAGES_CUSTODY_CMD_VERSION}
      automatic-path: ${NUBO_PACKAGES_CUSTODY_CMD_AUTOMATIC_PATH}
      connect-timeout-ms: ${PACKAGES_CUSTODY_CMD_CONNECT_TIMEOUT_MS:5000}
      read-timeout-ms: ${PACKAGES_CUSTODY_CMD_READ_TIMEOUT_MS:30000}
      max-in-memory-size-mb: ${PACKAGES_CUSTODY_CMD_MAX_IN_MEMORY_SIZE_MB:10}


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
    open-in-view: false
    hibernate:
      ddl-auto: none
      default_schema: NUANBODB
    show-sql: 'false'
    database-platform: org.hibernate.dialect.PostgreSQLDialect
    properties:
      hibernate:
        jdbc:
          batch_size: ${HIBERNATE_JDBC_BATCH_SIZE:50}
          batch_versioned_data: true
        order_inserts: ${HIBERNATE_ORDER_INSERTS:true}
        order_updates: ${HIBERNATE_ORDER_UPDATES:true}
automatic-packaging:
  max-details-per-package: ${AUTOMATIC_PACKAGING_MAX_DETAILS_PER_PACKAGE:500000}
  business-zone: ${AUTOMATIC_PACKAGING_BUSINESS_ZONE:America/Lima}
  candidate:
    allowed-custodian-status-ids: ${AUT_PACK_ALLOWED_CUSTODIAN_STATUS_IDS:}
    excluded-custodian-status-ids: ${AUT_PACK_EXCLUDED_CUSTODIAN_STATUS_IDS:}
    excluded-trade-status-ids: ${AUT_PACK_EXCLUDED_TRADE_STATUS_IDS:}
    excluded-trade-type-ids: ${AUT_PACK_EXCLUDED_TRADE_TYPE_IDS:59}
    included-settlement-status-ids:
      - 2
    rejected-custodian-status-ids: ${AUT_PACK_REJECTED_CUSTODIAN_STATUS_IDS:1074,1071}
    rejected-package-detail-status-id: ${AUT_PACK_REJECTED_PACKAGE_DETAIL_STATUS_ID:1074}
    exclude-already-packaged: ${AUT_PACK_EXCLUDE_ALREADY_PACKAGED:true}
    require-final-assignment: ${AUT_PACK_REQUIRE_FINAL_ASSIGNMENT:true}
  dispatch:
    cmd-package-chunk-size: ${AUTOMATIC_PACKAGING_CMD_PACKAGE_CHUNK_SIZE:500}
  settlement:
    transferred-status-id: ${AUTOMATIC_PACKAGING_SETTLEMENT_TRANSFERRED_STATUS_ID:1071}
    update-source: ${AUTOMATIC_PACKAGING_SETTLEMENT_UPDATE_SOURCE:QUERY_REQUEST}
logging:
  config: classpath:log/log4j2.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR
client:
  nubo:
    packages-custody-cmd:
      base-url: ${NUBO_URL_PACKAGES_CUSTODY_CMD_BASE_URL}
      version: ${NUBO_PACKAGES_CUSTODY_CMD_VERSION}
      automatic-path: ${NUBO_PACKAGES_CUSTODY_CMD_AUTOMATIC_PATH}
      connect-timeout-ms: ${PACKAGES_CUSTODY_CMD_CONNECT_TIMEOUT_MS:5000}
      read-timeout-ms: ${PACKAGES_CUSTODY_CMD_READ_TIMEOUT_MS:300000}
      max-in-memory-size-mb: ${PACKAGES_CUSTODY_CMD_MAX_IN_MEMORY_SIZE_MB:10}
      request-spool-enabled: ${AUTOMATIC_PACKAGING_REQUEST_SPOOL_ENABLED:true}
      request-spool-max-bytes: ${AUTOMATIC_PACKAGING_REQUEST_SPOOL_MAX_BYTES:1073741824}


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
    open-in-view: false
    hibernate:
      ddl-auto: none
      default_schema: NUANBODB
    show-sql: 'false'
    database-platform: org.hibernate.dialect.PostgreSQLDialect
    properties:
      hibernate:
        jdbc:
          batch_size: ${HIBERNATE_JDBC_BATCH_SIZE:50}
          batch_versioned_data: true
        order_inserts: ${HIBERNATE_ORDER_INSERTS:true}
        order_updates: ${HIBERNATE_ORDER_UPDATES:true}
automatic-packaging:
  max-details-per-package: ${AUTOMATIC_PACKAGING_MAX_DETAILS_PER_PACKAGE:50000}
  business-zone: ${AUTOMATIC_PACKAGING_BUSINESS_ZONE:America/Lima}
  candidate:
    allowed-custodian-status-ids: ${AUT_PACK_ALLOWED_CUSTODIAN_STATUS_IDS:}
    excluded-custodian-status-ids: ${AUT_PACK_EXCLUDED_CUSTODIAN_STATUS_IDS:}
    excluded-trade-status-ids: ${AUT_PACK_EXCLUDED_TRADE_STATUS_IDS:}
    excluded-trade-type-ids: ${AUT_PACK_EXCLUDED_TRADE_TYPE_IDS:59}
    included-settlement-status-ids:
      - 2
      - 9
      - 15
    rejected-custodian-status-ids: ${AUT_PACK_REJECTED_CUSTODIAN_STATUS_IDS:1074,1075}
    rejected-package-detail-status-id: ${AUT_PACK_REJECTED_PACKAGE_DETAIL_STATUS_ID:1074}
    exclude-already-packaged: ${AUT_PACK_EXCLUDE_ALREADY_PACKAGED:true}
    require-final-assignment: ${AUT_PACK_REQUIRE_FINAL_ASSIGNMENT:true}
  dispatch:
    cmd-package-chunk-size: ${AUTOMATIC_PACKAGING_CMD_PACKAGE_CHUNK_SIZE:500}
  settlement:
    transferred-status-id: ${AUTOMATIC_PACKAGING_SETTLEMENT_TRANSFERRED_STATUS_ID:1071}
    update-source: ${AUTOMATIC_PACKAGING_SETTLEMENT_UPDATE_SOURCE:QUERY_REQUEST}
logging:
  config: classpath:log/log4j2.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR
client:
  nubo:
    packages-custody-cmd:
      base-url: ${NUBO_URL_PACKAGES_CUSTODY_CMD_BASE_URL}
      version: ${NUBO_PACKAGES_CUSTODY_CMD_VERSION}
      automatic-path: ${NUBO_PACKAGES_CUSTODY_CMD_AUTOMATIC_PATH}
      connect-timeout-ms: ${PACKAGES_CUSTODY_CMD_CONNECT_TIMEOUT_MS:5000}
      read-timeout-ms: ${PACKAGES_CUSTODY_CMD_READ_TIMEOUT_MS:30000}
      max-in-memory-size-mb: ${PACKAGES_CUSTODY_CMD_MAX_IN_MEMORY_SIZE_MB:10}

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
client:
  nubo:
    url-custodio-aut-packages: ${NUBO_URL_CUSTODIO_AUT_PACKAGES:local}
    packages-custody-cmd:
      base-url: ${PACKAGES_CUSTODY_CMD_BASE_URL:http://localhost:8083/packages-custody-cmd-api}
      version: ${PACKAGES_CUSTODY_CMD_VERSION:v1}
      automatic-path: ${PACKAGES_CUSTODY_CMD_AUTOMATIC_PATH:/{version}/package-custodian/automatic}
      connect-timeout-ms: ${PACKAGES_CUSTODY_CMD_CONNECT_TIMEOUT_MS:5000}
      read-timeout-ms: ${PACKAGES_CUSTODY_CMD_READ_TIMEOUT_MS:30000}

```

## src/main/resources/banner.txt

```
   ___                       _   _                  ____          _            _          _         _                        _   _      ____            _                          ___                           _          _
  / _ \ _ __   ___ _ __ __ _| |_(_) ___  _ __  ___ / ___|   _ ___| |_ ___   __| |_   _   / \  _   _| |_ ___  _ __ ___   __ _| |_(_) ___|  _ \ __ _  ___| | ____ _  __ _  ___  ___ / _ \ _   _  ___ _ __ _   _   / \   _ __ (_)
 | | | | '_ \ / _ \ '__/ _` | __| |/ _ \| '_ \/ __| |  | | | / __| __/ _ \ / _` | | | | / _ \| | | | __/ _ \| '_ ` _ \ / _` | __| |/ __| |_) / _` |/ __| |/ / _` |/ _` |/ _ \/ __| | | | | | |/ _ \ '__| | | | / _ \ | '_ \| |
 | |_| | |_) |  __/ | | (_| | |_| | (_) | | | \__ \ |__| |_| \__ \ || (_) | (_| | |_| |/ ___ \ |_| | || (_) | | | | | | (_| | |_| | (__|  __/ (_| | (__|   < (_| | (_| |  __/\__ \ |_| | |_| |  __/ |  | |_| |/ ___ \| |_) | |
  \___/| .__/ \___|_|  \__,_|\__|_|\___/|_| |_|___/\____\__,_|___/\__\___/ \__,_|\__, /_/   \_\__,_|\__\___/|_| |_| |_|\__,_|\__|_|\___|_|   \__,_|\___|_|\_\__,_|\__, |\___||___/\__\_\\__,_|\___|_|   \__, /_/   \_\ .__/|_|
       |_|                                                                       |___/                                                                            |___/                                 |___/        |_|
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
property.CONSOLE_PATTERN=%style{%d{ISO8601}}{black} %highlight{%-5level} [%style{%t}{bright,blue}] %style{%C{1}}{cyan} - %msg%n
property.TIMESTAMP_FORMAT=$${date:yyyy-MM-dd HH:mm:ss,SSS}
property.APPLICATION_NAME=$${spring:spring.application.name}
property.APPLICATION_TYPE=$${spring:spring.application.type}
property.ROLLING_FILE_PATTERN=$${date:yyyy-MM}/${sys:APPLICATION_NAME}-%d{-dd-MMMM-yyyy}-%i.log.gz
property.LOG_DIR=target/logs
rootLogger=INFO, STDOUT_JSON, jsonrollinglog
appender.console.name=STDOUT_JSON
appender.console.type=Console
appender.console.layout.type=JsonTemplateLayout
appender.console.layout.eventTemplateUri=classpath:log/JsonEventLayout_error.json
appender.console.layout.locationInfoEnabled=true
appender.console.layout.eventTemplateAdditionalField[0].type=EventTemplateAdditionalField
appender.console.layout.eventTemplateAdditionalField[0].key=marker
appender.console.layout.eventTemplateAdditionalField[0].value={"$resolver": "marker", "field": "name"}
appender.console.layout.eventTemplateAdditionalField[0].format=JSON
appender.console.layout.eventTemplateAdditionalField[1].type=EventTemplateAdditionalField
appender.console.layout.eventTemplateAdditionalField[1].key=message
appender.console.layout.eventTemplateAdditionalField[1].value={"$resolver": "message", "field": "name", "style": "bold", "color": "green"}
appender.console.layout.eventTemplateAdditionalField[1].format=JSON
appender.console.layout.eventTemplateAdditionalField[2].type=EventTemplateAdditionalField
appender.console.layout.eventTemplateAdditionalField[2].key=application_name
appender.console.layout.eventTemplateAdditionalField[2].value=${sys:APPLICATION_NAME}
appender.console.layout.eventTemplateAdditionalField[3].type=EventTemplateAdditionalField
appender.console.layout.eventTemplateAdditionalField[3].key=application_type
appender.console.layout.eventTemplateAdditionalField[3].value=${sys:APPLICATION_TYPE}
appender.rolling.name=jsonrollinglog
appender.rolling.type=RollingFile
appender.rolling.fileName=${sys:LOG_DIR}/${sys:APPLICATION_NAME}.log
appender.rolling.filePattern=${sys:LOG_DIR}/${sys:ROLLING_FILE_PATTERN}
appender.rolling.layout.type=JsonTemplateLayout
appender.rolling.layout.eventTemplateUri=classpath:log/JsonEventLayout_trace.json
appender.rolling.layout.locationInfoEnabled=true
appender.rolling.layout.eventTemplateAdditionalField[0].type=EventTemplateAdditionalField
appender.rolling.layout.eventTemplateAdditionalField[0].key=marker
appender.rolling.layout.eventTemplateAdditionalField[0].value={"$resolver": "marker", "field": "name"}
appender.rolling.layout.eventTemplateAdditionalField[0].format=JSON
appender.rolling.layout.eventTemplateAdditionalField[1].type=EventTemplateAdditionalField
appender.rolling.layout.eventTemplateAdditionalField[1].key=message
appender.rolling.layout.eventTemplateAdditionalField[1].value={"$resolver": "message", "field": "name", "style": "italic", "color": "blue"}
appender.rolling.layout.eventTemplateAdditionalField[1].format=JSON
appender.rolling.layout.eventTemplateAdditionalField[2].type=EventTemplateAdditionalField
appender.rolling.layout.eventTemplateAdditionalField[2].key=application_name
appender.rolling.layout.eventTemplateAdditionalField[2].value=${sys:APPLICATION_NAME}
appender.rolling.layout.eventTemplateAdditionalField[3].type=EventTemplateAdditionalField
appender.rolling.layout.eventTemplateAdditionalField[3].key=application_type
appender.rolling.layout.eventTemplateAdditionalField[3].value=${sys:APPLICATION_TYPE}
appender.rolling.policies.type=Policies
appender.rolling.policies.size.type=SizeBasedTriggeringPolicy
appender.rolling.policies.size.size=10MB
appender.rolling.filter.threshold.type=ThresholdFilter
appender.rolling.filter.threshold.level=TRACE
logger.rolling.name=com.nuamx
logger.rolling.level=trace
logger.rolling.additivity=true
logger.rolling.appenderRef.rolling.ref=jsonrollinglog

```

## src/main/resources/log/log4j2.properties

```properties
# Properties
property.CONSOLE_PATTERN=%style{%d{ISO8601}}{black} %highlight{%-5level }[%style{%t}{bright,blue}] %style{%C{1}}{cyan} - %msg%n
appender.console.name=STDOUT
appender.console.type=Console
appender.console.layout.type=PatternLayout
appender.console.layout.pattern=${sys:CONSOLE_PATTERN}
rootLogger=INFO, STDOUT

```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/OperationsCustodyAutomaticPackagesQueryApiApplication.java

```java
package com.nubo.operations.custody.automatic.packages.query.api;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class OperationsCustodyAutomaticPackagesQueryApiApplication {

    public static void main(String[] args) {
        SpringApplication.run(OperationsCustodyAutomaticPackagesQueryApiApplication.class, args);
    }

}

```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/application/config/ClockConfig.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.application.config;

import com.nubo.operations.custody.automatic.packages.query.api.application.properties.AutomaticPackagingProperties;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.Clock;

@Configuration
@RequiredArgsConstructor
public class ClockConfig {

    private final AutomaticPackagingProperties automaticPackagingProperties;

    @Bean
    public Clock clock() {
        return Clock.system(automaticPackagingProperties.getBusinessZone());
    }

}

```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/application/config/SwaggerConfig.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.application.config;

import com.nubo.operations.custody.automatic.packages.query.api.exception.error.ErrorResponse;
import com.nubo.operations.custody.automatic.packages.query.api.exception.error.ErrorValidation;
import com.nubo.operations.custody.automatic.packages.query.api.models.enums.PropertiesEnum;
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

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/application/config/WebClientConfig.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.application.config;

import com.nubo.operations.custody.automatic.packages.query.api.application.properties.PropertiesConfig;
import io.netty.channel.ChannelOption;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.client.reactive.ReactorClientHttpConnector;
import org.springframework.web.reactive.function.client.ExchangeStrategies;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.netty.http.client.HttpClient;

import java.time.Duration;

@Configuration
@RequiredArgsConstructor
public class WebClientConfig {

    private final PropertiesConfig propertiesConfig;

    @Bean
    public WebClient webClient() {
        HttpClient httpClient = HttpClient.create()
                .option(ChannelOption.CONNECT_TIMEOUT_MILLIS,
                        propertiesConfig.getPackagesCustodyCmdConnectTimeoutMs())
                .responseTimeout(Duration.ofMillis(propertiesConfig.getPackagesCustodyCmdReadTimeoutMs()));
        int maxInMemorySizeMb = propertiesConfig.getPackagesCustodyCmdMaxInMemorySizeMb() == null
                ? 10
                : propertiesConfig.getPackagesCustodyCmdMaxInMemorySizeMb();
        if (maxInMemorySizeMb < 1) throw new IllegalArgumentException("Response memory budget must be positive");
        int maxInMemorySizeBytes = Math.multiplyExact(maxInMemorySizeMb, 1024 * 1024);
        ExchangeStrategies exchangeStrategies = ExchangeStrategies.builder()
                .codecs(configurer -> configurer.defaultCodecs().maxInMemorySize(maxInMemorySizeBytes))
                .build();

        return WebClient.builder()
                .clientConnector(new ReactorClientHttpConnector(httpClient))
                .exchangeStrategies(exchangeStrategies)
                .build();
    }
}

```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/application/config/WebConfig.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.application.config;
import com.nubo.operations.custody.automatic.packages.query.api.application.interceptors.GlobalInterceptor;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.http.HttpMethod;
import org.springframework.web.client.RestClient;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.i18n.SessionLocaleResolver;

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
    @Profile({"local", "dev", "qa"})
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOriginPatterns("*")
                .allowedMethods(HttpMethod.GET.name(),
                        HttpMethod.POST.name(),
                        HttpMethod.PUT.name(),
                        HttpMethod.PATCH.name(),
                        HttpMethod.DELETE.name(),
                        HttpMethod.OPTIONS.name())
                .allowedHeaders("*")
                .allowCredentials(true);
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(globalInterceptor)
                .addPathPatterns("/**");
    }

    @Bean
    public RestClient restClient() {
        return RestClient.create();
    }

}

```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/application/context/GlobalContext.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.application.context;
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
        return value!=null ? String.valueOf(value):null;
    }

    public static void remove() {
        context.remove();
    }

}

```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/application/database/NamingStrategyConfig.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.application.database;

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

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/application/database/UpperNamingConfig.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.application.database;

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
        if (identifier==null) {
            return null;
        }
        return new Identifier(identifier.getText().toUpperCase(), identifier.isQuoted());
    }

}
```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/application/filters/GlobalFilter.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.application.filters;

import com.nubo.operations.custody.automatic.packages.query.api.application.context.GlobalContext;
import com.nubo.operations.custody.automatic.packages.query.api.application.util.ApplicationUtils;
import com.nubo.operations.custody.automatic.packages.query.api.exception.ServiceException;
import com.nubo.operations.custody.automatic.packages.query.api.exception.error.ErrorCode;
import com.nubo.operations.custody.automatic.packages.query.api.exception.error.ErrorResponse;
import com.nubo.operations.custody.automatic.packages.query.api.models.enums.PropertiesEnum;
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
            String clientIpHeader = this.validateClientIpHeader(request);
            String clientUserHeader = this.validateClientUserHeader(request);
            String clientDatetime = this.validateClientDatetimeHeader(request);

            GlobalContext.setProperty(PropertiesEnum.CLIENT_IP.getValue(), clientIpHeader);
            GlobalContext.setProperty(PropertiesEnum.CLIENT_USER.getValue(), clientUserHeader);
            GlobalContext.setProperty(PropertiesEnum.CLIENT_DATETIME.getValue(), clientDatetime);
            GlobalContext.setProperty(PropertiesEnum.AUTH_TOKEN.getValue(), request.getHeader("Authorization"));

            chain.doFilter(request, response);

        } catch (ServiceException ex) {
            handleServiceException(ex, request, response);
        }
    }

    private String validateClientIpHeader(HttpServletRequest request) {
        String clientIp = request.getHeader(PropertiesEnum.CLIENT_IP.getValue());
        if (clientIp==null || clientIp.isEmpty()) {
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
        if (clientUser==null || clientUser.isEmpty()) {
            throw new ServiceException(ErrorCode.HEADER_CLIENT_USER_REQUIRED, HttpStatus.BAD_REQUEST);
        }
        return clientUser;
    }

    private String validateClientDatetimeHeader(HttpServletRequest request) {
        String clientDatetime = request.getHeader(PropertiesEnum.CLIENT_DATETIME.getValue());
        if (clientDatetime==null || clientDatetime.isEmpty()) {
            throw new ServiceException(ErrorCode.HEADER_CLIENT_DATETIME_REQUIRED, HttpStatus.BAD_REQUEST);
        }
        String datetimePattern = "\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}";
        if (!clientDatetime.matches(datetimePattern)) {
            throw new ServiceException(ErrorCode.HEADER_CLIENT_DATETIME_INVALID, HttpStatus.BAD_REQUEST);
        }
        return clientDatetime;
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
                        exception.getMessage():exception.getCause().getMessage())
                .timestamp(String.valueOf(LocalDateTime.now()))
                .build();
        response.getWriter().write(ApplicationUtils.convertObjectToJson(errorResponse));
        response.setStatus(exception.getHttpStatus().value());

        log.error("Error -> {}", errorResponse);
    }

}

```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/application/interceptors/GlobalInterceptor.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.application.interceptors;

import com.nubo.operations.custody.automatic.packages.query.api.application.context.GlobalContext;
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
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) {
        GlobalContext.remove();
    }

}
```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/application/properties/AutomaticPackagingProperties.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.application.properties;

import lombok.Getter;
import lombok.Setter;
import com.nubo.operations.custody.automatic.packages.query.api.models.enums.SettlementUpdateSource;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.validation.annotation.Validated;
import org.springframework.stereotype.Component;
import jakarta.validation.constraints.Min;

import java.time.ZoneId;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Component
@ConfigurationProperties(prefix = "automatic-packaging")
@Validated
public class AutomaticPackagingProperties {

    private static final int DEFAULT_CMD_PACKAGE_CHUNK_SIZE = 500;

    private ZoneId businessZone = ZoneId.of("America/Lima");
    @Min(1)
    private int maxDetailsPerPackage = 50_000;
    private Candidate candidate = new Candidate();
    private Settlement settlement = new Settlement();
    private Dispatch dispatch = new Dispatch();

    public int getCmdPackageChunkSize() {
        if (dispatch == null || dispatch.getCmdPackageChunkSize() == null
                || dispatch.getCmdPackageChunkSize() < 1) {
            return DEFAULT_CMD_PACKAGE_CHUNK_SIZE;
        }
        return dispatch.getCmdPackageChunkSize();
    }

    @Getter
    @Setter
    public static class Candidate {
        private List<Long> allowedCustodianStatusIds = new ArrayList<>();
        private List<Long> excludedCustodianStatusIds = new ArrayList<>();
        private List<Long> excludedTradeStatusIds = new ArrayList<>();
        // 59 = PRESTAMOS OTC RV: préstamos traslada un paquete por fracción al guardar la asignación (CAUNA-10211)
        private List<Long> excludedTradeTypeIds = new ArrayList<>(List.of(59L));
        private List<Long> includedSettlementStatusIds = new ArrayList<>(List.of(2L, 9L, 15L));
        private List<Long> rejectedCustodianStatusIds = new ArrayList<>(List.of(1074L, 1075L));
        private Long rejectedPackageDetailStatusId = 1074L;
        private boolean excludeAlreadyPackaged = true;
        private boolean requireFinalAssignment = true;
    }

    @Getter
    @Setter
    public static class Settlement {
        private Long transferredStatusId = 1071L;
        private SettlementUpdateSource updateSource = SettlementUpdateSource.QUERY_REQUEST;
    }

    @Getter
    @Setter
    public static class Dispatch {
        private Integer cmdPackageChunkSize = DEFAULT_CMD_PACKAGE_CHUNK_SIZE;
    }

}

```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/application/properties/PropertiesConfig.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.application.properties;

import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
@Getter
public class PropertiesConfig {

    @Value("${spring.application.name}")
    private String apiName;

    @Value("${client.nubo.packages-custody-cmd.base-url}")
    private String packagesCustodyCmdBaseUrl;

    @Value("${client.nubo.packages-custody-cmd.version}")
    private String packagesCustodyCmdVersion;

    @Value("${client.nubo.packages-custody-cmd.automatic-path}")
    private String packagesCustodyCmdAutomaticPath;

    @Value("${client.nubo.packages-custody-cmd.connect-timeout-ms}")
    private Integer packagesCustodyCmdConnectTimeoutMs;

    @Value("${client.nubo.packages-custody-cmd.read-timeout-ms}")
    private Integer packagesCustodyCmdReadTimeoutMs;

    @Value("${client.nubo.packages-custody-cmd.max-in-memory-size-mb:10}")
    private Integer packagesCustodyCmdMaxInMemorySizeMb;

    @Value("${client.nubo.packages-custody-cmd.request-spool-enabled:false}")
    private boolean packagesCustodyCmdRequestSpoolEnabled;

    @Value("${client.nubo.packages-custody-cmd.request-spool-max-bytes:1073741824}")
    private long packagesCustodyCmdRequestSpoolMaxBytes;

}

```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/application/properties/PropertiesContext.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.application.properties;

import com.nubo.operations.custody.automatic.packages.query.api.application.context.GlobalContext;
import com.nubo.operations.custody.automatic.packages.query.api.application.util.ApplicationUtils;
import com.nubo.operations.custody.automatic.packages.query.api.models.enums.PropertiesEnum;
import org.springframework.util.ObjectUtils;

import java.time.LocalDate;
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

    public static LocalDate getClientDate() {
        String clientDatetime = GlobalContext.getProperty(PropertiesEnum.CLIENT_DATETIME.getValue());
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern(ApplicationUtils.getFormatDate());
        assert clientDatetime!=null;
        return LocalDate.parse(clientDatetime.split("T")[0], formatter);
    }

    public static String getVersion() {
        return GlobalContext.getProperty(PropertiesEnum.VERSION_API.getValue());
    }

    public static String getAuthToken() {
        return GlobalContext.getProperty(PropertiesEnum.AUTH_TOKEN.getValue());
    }

}


```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/application/util/ApplicationUtils.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.application.util;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonDeserializer;
import com.google.gson.JsonPrimitive;
import com.google.gson.JsonSerializer;

import java.lang.reflect.Type;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

public class ApplicationUtils {

    private static final DateTimeFormatter DATE_FMT = DateTimeFormatter.ISO_LOCAL_DATE;
    private static final DateTimeFormatter TIME_FMT = DateTimeFormatter.ISO_LOCAL_TIME;
    private static final DateTimeFormatter DATETIME_FMT = DateTimeFormatter.ISO_LOCAL_DATE_TIME;

    private static final Gson gson = new GsonBuilder()
            .registerTypeAdapter(LocalDate.class,
                    (JsonSerializer<LocalDate>) (src, typeOfSrc, context) ->
                            new JsonPrimitive(src.format(DATE_FMT)))
            .registerTypeAdapter(LocalDate.class,
                    (JsonDeserializer<LocalDate>) (json, type, context) ->
                            LocalDate.parse(json.getAsString(), DATE_FMT))
            .registerTypeAdapter(LocalDateTime.class,
                    (JsonSerializer<LocalDateTime>) (src, typeOfSrc, context) ->
                            new JsonPrimitive(src.format(DATETIME_FMT)))
            .registerTypeAdapter(LocalDateTime.class,
                    (JsonDeserializer<LocalDateTime>) (json, type, context) ->
                            LocalDateTime.parse(json.getAsString(), DATETIME_FMT))
            .registerTypeAdapter(LocalTime.class,
                    (JsonSerializer<LocalTime>) (src, typeOfSrc, context) ->
                            new JsonPrimitive(src.format(TIME_FMT)))
            .registerTypeAdapter(LocalTime.class,
                    (JsonDeserializer<LocalTime>) (json, type, context) ->
                            LocalTime.parse(json.getAsString(), TIME_FMT))
            .create();

    static final String FORMAT_DATETIME = "yyyy-MM-dd'T'HH:mm:ss";
    static final String FORMAT_DATE = "yyyy-MM-dd";
    static final String FORMAT_TIME = "HH:mm:ss";
    static final String FORMAT_DATE_PLANE = "yyyyMMdd";
    static final String FORMAT_DD_MM_YYYY_HHMMSS = "dd-MM-yyyy_HHmmss";

    private ApplicationUtils() {
    }

    public static String getFormatDatetime() {
        return FORMAT_DATETIME;
    }

    public static String getFormatDate() {
        return FORMAT_DATE;
    }

    public static String getFormatDatePlane() {
        return FORMAT_DATE_PLANE;
    }

    public static String getLocalDateTimeNow() {
        return LocalDateTime.now().format(DateTimeFormatter.ofPattern(ApplicationUtils.getFormatDatetime()));
    }

    public static String getLocalDateNow() {
        return LocalDateTime.now().format(DateTimeFormatter.ofPattern(ApplicationUtils.getFormatDate()));
    }

    public static String getLocalDateTimeCustomFormat() {
        return LocalDateTime.now()
                .format(DateTimeFormatter.ofPattern(FORMAT_DD_MM_YYYY_HHMMSS));
    }

    public static String convertObjectToJsonWithJavaTime(Object object) {
        return gson.toJson(object);
    }

    public static String convertObjectToJson(Object object) {
        return new Gson().toJson(object);
    }

    public static Object convertJsonToObject(String json, Object object) {
        return new Gson().fromJson(json, (Type) object);
    }

    public static String convertLocalDateTimeToString(LocalDateTime localDateTime) {
        return localDateTime.format(DateTimeFormatter.ofPattern(ApplicationUtils.getFormatDatetime()));
    }

    public static BigDecimal divide(BigDecimal numerator, BigDecimal denominator) {
        if (numerator==null || denominator==null || BigDecimal.ZERO.compareTo(denominator)==0) {
            return BigDecimal.ZERO;
        }
        return numerator.divide(denominator, 6, RoundingMode.HALF_UP);
    }

    public static String getFormatTime() {
        return FORMAT_TIME;
    }

}
```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/application/util/JsonRequestSpool.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.application.util;

import java.io.FilterOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import tools.jackson.databind.json.JsonMapper;

/** Same JSON contract, serialized on disk rather than a request-sized byte array. */
public final class JsonRequestSpool implements AutoCloseable {
    private final Path path;

    private JsonRequestSpool(Path path) { this.path = path; }
    public Path path() { return path; }

    public static JsonRequestSpool create(Object request, long maxBytes) throws IOException {
        if (maxBytes < 1) throw new IllegalArgumentException("request-spool-max-bytes must be positive");
        Path path = Files.createTempFile("custodian-request-", ".json");
        try {
            try (OutputStream stream = new FilterOutputStream(Files.newOutputStream(path)) {
                private long written;
                @Override public void write(int value) throws IOException {
                    ensureCapacity(1); out.write(value); written++;
                }
                @Override public void write(byte[] values, int offset, int length) throws IOException {
                    ensureCapacity(length); out.write(values, offset, length); written += length;
                }
                private void ensureCapacity(int length) throws IOException {
                    if (length > maxBytes - written) throw new IOException("JSON request exceeds spool byte budget");
                }
            }) {
                new JsonMapper().writeValue(stream, request);
            }
            return new JsonRequestSpool(path);
        } catch (Exception ex) {
            Files.deleteIfExists(path);
            throw ex;
        }
    }

    @Override public void close() throws IOException { Files.deleteIfExists(path); }
}

```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/application/util/RestClientUtils.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.application.util;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestClient;

import java.net.URI;

@Component
@RequiredArgsConstructor
@Slf4j
public class RestClientUtils {

    private final RestClient restClient;

    public <T> ResponseEntity<T> requestWithResponseObject(URI url, HttpMethod method, HttpHeaders headers,
                                                           Object requestBody, Class<T> responseType) {
        return restClient.method(method)
                .uri(url)
                .headers(h -> h.addAll(headers))
                .body(requestBody)
                .retrieve()
                .toEntity(responseType);
    }

    public <T> ResponseEntity<T> requestWithoutBodyWithResponseObject(URI url, HttpMethod method, HttpHeaders headers,
                                                                      Class<T> responseType) {
        return restClient.method(method)
                .uri(url)
                .headers(h -> h.addAll(headers))
                .retrieve()
                .toEntity(responseType);
    }

    public <T> ResponseEntity<T> requestWithResponseObject(URI url, HttpMethod method, HttpHeaders headers,
                                                           Object requestBody, ParameterizedTypeReference<T> responseType) {
        return restClient.method(method)
                .uri(url)
                .headers(h -> h.addAll(headers))
                .body(requestBody)
                .retrieve()
                .toEntity(responseType);
    }

    public void requestWithoutResponseObject(URI url, HttpMethod method, HttpHeaders headers, Object requestBody) {
        restClient.method(method)
                .uri(url)
                .headers(h -> h.addAll(headers))
                .body(requestBody)
                .retrieve()
                .toBodilessEntity();
    }

}

```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/application/util/WebClientUtils.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.application.util;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.net.URI;

@Component
@RequiredArgsConstructor
@Slf4j
public class WebClientUtils {

    private final WebClient webClient;

    public <T> ResponseEntity<T> requestJsonFileWithResponseObject(
            URI url, HttpMethod method, HttpHeaders headers, java.nio.file.Path file, Class<T> responseType)
            throws java.io.IOException {
        return webClient.method(method).uri(url).headers(h -> h.addAll(headers))
                .contentType(org.springframework.http.MediaType.APPLICATION_JSON)
                .contentLength(java.nio.file.Files.size(file))
                .body(org.springframework.core.io.buffer.DataBufferUtils.read(file,
                        org.springframework.core.io.buffer.DefaultDataBufferFactory.sharedInstance, 65536),
                        org.springframework.core.io.buffer.DataBuffer.class)
                .retrieve().toEntity(responseType).block();
    }

    public <T> Mono<ResponseEntity<T>> requestBodyWithResponseObjectAsync(
            URI url, HttpMethod method, HttpHeaders headers, Object requestBody, Class<T> responseType) {
        log.info("WebClient [{}] {}", method, url);
        return webClient.method(method)
                .uri(url)
                .headers(h -> h.addAll(headers))
                .bodyValue(requestBody)
                .retrieve()
                .toEntity(responseType);
    }

    public <T> Mono<ResponseEntity<T>> requestWithResponseObjectAsync(
            URI url, HttpMethod method, HttpHeaders headers, Class<T> responseType) {
        log.info("WebClient [{}] {}", method, url);
        return webClient.method(method)
                .uri(url)
                .headers(h -> h.addAll(headers))
                .retrieve()
                .toEntity(responseType);
    }

    public <T> Mono<ResponseEntity<T>> requestBodyWithResponseTypeAsync(
            URI url, HttpMethod method, HttpHeaders headers, Object requestBody,
            ParameterizedTypeReference<T> responseType) {
        log.info("WebClient [{}] {}", method, url);
        return webClient.method(method)
                .uri(url)
                .headers(h -> h.addAll(headers))
                .bodyValue(requestBody)
                .retrieve()
                .toEntity(responseType);
    }

    public <T> ResponseEntity<T> requestBodyWithResponseObject(
            URI url, HttpMethod method, HttpHeaders headers, Object requestBody, Class<T> responseType) {
        return requestBodyWithResponseObjectAsync(url, method, headers, requestBody, responseType).block();
    }

    public <T> ResponseEntity<T> requestWithResponseObject(
            URI url, HttpMethod method, HttpHeaders headers, Class<T> responseType) {
        return requestWithResponseObjectAsync(url, method, headers, responseType).block();
    }

    public <T> ResponseEntity<T> requestBodyWithResponseType(
            URI url, HttpMethod method, HttpHeaders headers, Object requestBody,
            ParameterizedTypeReference<T> responseType) {
        return requestBodyWithResponseTypeAsync(url, method, headers, requestBody, responseType).block();
    }
}

```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/client/PackageCustodianCmdClient.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.client;

import com.nubo.operations.custody.automatic.packages.query.api.models.dto.request.PackageCustodianAutomaticInDto;
import com.nubo.operations.custody.automatic.packages.query.api.models.dto.response.PackageCustodianAutomaticOutDto;

public interface PackageCustodianCmdClient {

    PackageCustodianAutomaticOutDto createAutomaticPackages(PackageCustodianAutomaticInDto request);
}

```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/client/impl/PackageCustodianCmdClientImpl.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.client.impl;

import com.nubo.operations.custody.automatic.packages.query.api.application.properties.PropertiesConfig;
import com.nubo.operations.custody.automatic.packages.query.api.application.properties.PropertiesContext;
import com.nubo.operations.custody.automatic.packages.query.api.application.util.ApplicationUtils;
import com.nubo.operations.custody.automatic.packages.query.api.application.util.WebClientUtils;
import com.nubo.operations.custody.automatic.packages.query.api.client.PackageCustodianCmdClient;
import com.nubo.operations.custody.automatic.packages.query.api.exception.ClientException;
import com.nubo.operations.custody.automatic.packages.query.api.exception.error.ErrorCode;
import com.nubo.operations.custody.automatic.packages.query.api.models.dto.request.PackageCustodianAutomaticInDto;
import com.nubo.operations.custody.automatic.packages.query.api.models.dto.response.PackageCustodianAutomaticOutDto;
import com.nubo.operations.custody.automatic.packages.query.api.models.enums.PropertiesEnum;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.buffer.DataBufferLimitException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;
import org.springframework.web.reactive.function.client.WebClientResponseException;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class PackageCustodianCmdClientImpl implements PackageCustodianCmdClient {

    private static final String VERSION_PLACEHOLDER = "{version}";
    private static final String AUTHORIZATION = "Authorization";
    private static final String BEARER = "Bearer";

    private final PropertiesConfig propertiesConfig;
    private final WebClientUtils webClientUtils;

    @Override
    public PackageCustodianAutomaticOutDto createAutomaticPackages(PackageCustodianAutomaticInDto request) {
        URI uri = buildUri();
        int packages = request == null || request.getPackages() == null ? 0 : request.getPackages().size();
        long details = countDetails(request);

        try {
            log.info("Calling CMD automatic custodian packaging, uri={}, executionDate={}, cutType={}, sameDaySettlement={}, packages={}, details={}",
                    uri, request == null ? null : request.getExecutionDate(), request == null ? null : request.getCutType(),
                    request == null ? null : request.getSameDaySettlement(), packages, details);

            ResponseEntity<PackageCustodianAutomaticOutDto> response;
            if (propertiesConfig.isPackagesCustodyCmdRequestSpoolEnabled()) {
                try (var spool = com.nubo.operations.custody.automatic.packages.query.api.application.util.JsonRequestSpool
                        .create(request, propertiesConfig.getPackagesCustodyCmdRequestSpoolMaxBytes())) {
                    log.info("CMD_REQUEST_SPOOL details={} bytes={}", details, java.nio.file.Files.size(spool.path()));
                    response = webClientUtils.requestJsonFileWithResponseObject(uri, HttpMethod.POST, getHttpHeaders(),
                            spool.path(), PackageCustodianAutomaticOutDto.class);
                }
            } else {
                response = webClientUtils.requestBodyWithResponseObject(
                        uri, HttpMethod.POST, getHttpHeaders(), request, PackageCustodianAutomaticOutDto.class);
            }

            if (!ObjectUtils.isEmpty(response) && !ObjectUtils.isEmpty(response.getBody())) {
                log.info("CMD automatic custodian packaging response received, status={}, packages={}, details={}",
                        response.getBody().getStatus(), response.getBody().getCreatedPackages(),
                        response.getBody().getCreatedDetails());
                return response.getBody();
            }

            log.error("CMD automatic custodian packaging returned empty response, uri={}, packages={}, details={}",
                    uri, packages, details);
            throw new ClientException(ErrorCode.CMD_AUTOMATIC_PACKAGING_ERROR, HttpStatus.BAD_GATEWAY);
        } catch (WebClientResponseException ex) {
            String errorBody = ex.getResponseBodyAsString();
            if (errorBody.length() > 2048) {
                errorBody = errorBody.substring(0, 2048) + " [truncated]";
            }
            int statusCode = ex.getStatusCode().value();
            log.error("HTTP error calling CMD automatic custodian packaging, uri={}, status={}, executionDate={}, cutType={}, sameDaySettlement={}, packages={}, details={}, responseBody={}",
                    uri, statusCode, request == null ? null : request.getExecutionDate(),
                    request == null ? null : request.getCutType(),
                    request == null ? null : request.getSameDaySettlement(), packages, details, errorBody);
            throw new ClientException(ErrorCode.CMD_AUTOMATIC_PACKAGING_ERROR, HttpStatus.BAD_GATEWAY,
                    errorBody, ex);
        } catch (ClientException ex) {
            throw ex;
        } catch (DataBufferLimitException ex) {
            log.error("CMD automatic custodian packaging response exceeded WebClient max in-memory size, uri={}, maxInMemorySizeMb={}, executionDate={}, cutType={}, sameDaySettlement={}, packages={}, details={}, message={}",
                    uri, propertiesConfig.getPackagesCustodyCmdMaxInMemorySizeMb(),
                    request == null ? null : request.getExecutionDate(),
                    request == null ? null : request.getCutType(),
                    request == null ? null : request.getSameDaySettlement(), packages, details, ex.getMessage(), ex);
            throw new ClientException(ErrorCode.CMD_AUTOMATIC_PACKAGING_ERROR, HttpStatus.BAD_GATEWAY,
                    "CMD response exceeded max in-memory size: " + ex.getMessage(), ex);
        } catch (org.springframework.core.codec.DecodingException
                 | org.springframework.web.reactive.function.client.WebClientRequestException ex) {
            log.error("Error reading/deserializing CMD automatic custodian packaging response, uri={}, executionDate={}, cutType={}, sameDaySettlement={}, packages={}, details={}, message={}",
                    uri, request == null ? null : request.getExecutionDate(),
                    request == null ? null : request.getCutType(),
                    request == null ? null : request.getSameDaySettlement(), packages, details, ex.getMessage(), ex);
            throw new ClientException(ErrorCode.CMD_AUTOMATIC_PACKAGING_ERROR, HttpStatus.BAD_GATEWAY, ex);
        } catch (Exception ex) {
            Throwable dataBufferLimit = findCause(ex, DataBufferLimitException.class);
            if (dataBufferLimit != null) {
                log.error("CMD automatic custodian packaging response exceeded WebClient max in-memory size, uri={}, maxInMemorySizeMb={}, executionDate={}, cutType={}, sameDaySettlement={}, packages={}, details={}, message={}",
                        uri, propertiesConfig.getPackagesCustodyCmdMaxInMemorySizeMb(),
                        request == null ? null : request.getExecutionDate(),
                        request == null ? null : request.getCutType(),
                        request == null ? null : request.getSameDaySettlement(), packages, details,
                        dataBufferLimit.getMessage(), ex);
                throw new ClientException(ErrorCode.CMD_AUTOMATIC_PACKAGING_ERROR, HttpStatus.BAD_GATEWAY,
                        "CMD response exceeded max in-memory size: " + dataBufferLimit.getMessage(), ex);
            }
            log.error("Unexpected error calling CMD automatic custodian packaging, uri={}, executionDate={}, cutType={}, sameDaySettlement={}, packages={}, details={}, message={}",
                    uri, request == null ? null : request.getExecutionDate(), request == null ? null : request.getCutType(),
                    request == null ? null : request.getSameDaySettlement(), packages, details, ex.getMessage(), ex);
            throw new ClientException(ErrorCode.CMD_AUTOMATIC_PACKAGING_ERROR, HttpStatus.BAD_GATEWAY, ex);
        }
    }

    public URI buildUri() {
        String automaticPath = propertiesConfig.getPackagesCustodyCmdAutomaticPath()
                .replace(VERSION_PLACEHOLDER, propertiesConfig.getPackagesCustodyCmdVersion());
        return UriComponentsBuilder
                .fromUriString(propertiesConfig.getPackagesCustodyCmdBaseUrl())
                .path(automaticPath)
                .build()
                .toUri();
    }

    private HttpHeaders getHttpHeaders() {
        HttpHeaders headers = new HttpHeaders();
        String authToken = PropertiesContext.getAuthToken();
        if (!ObjectUtils.isEmpty(authToken)) {
            headers.set(AUTHORIZATION, authToken.startsWith(BEARER) ? authToken : BEARER.concat(" ").concat(authToken));
        }
        headers.set(PropertiesEnum.CLIENT_IP.getValue(), PropertiesContext.getClientIp());
        headers.set(PropertiesEnum.CLIENT_USER.getValue(), propertiesConfig.getApiName());
        headers.set(PropertiesEnum.CLIENT_DATETIME.getValue(),
                ApplicationUtils.convertLocalDateTimeToString(LocalDateTime.now()));
        headers.set(PropertiesEnum.CLIENT_BACKEND.getValue(), "true");
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setAccept(List.of(MediaType.APPLICATION_JSON));
        return headers;
    }

    private long countDetails(PackageCustodianAutomaticInDto request) {
        if (request == null || request.getPackages() == null) {
            return 0;
        }
        return request.getPackages().stream()
                .filter(pkg -> pkg.getDetails() != null)
                .mapToLong(pkg -> pkg.getDetails().size())
                .sum();
    }

    private Throwable findCause(Throwable throwable, Class<? extends Throwable> expectedType) {
        Throwable current = throwable;
        while (current != null) {
            if (expectedType.isInstance(current)) {
                return current;
            }
            current = current.getCause();
        }
        return null;
    }
}

```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/component/AutomaticPackageGrouper.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.component;

import com.nubo.operations.custody.automatic.packages.query.api.application.properties.AutomaticPackagingProperties;
import com.nubo.operations.custody.automatic.packages.query.api.models.dto.internal.AutomaticPackageCandidateDto;
import com.nubo.operations.custody.automatic.packages.query.api.models.dto.internal.AutomaticPackageGroupKey;
import com.nubo.operations.custody.automatic.packages.query.api.models.dto.request.PackageCustodianAutomaticInDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.util.*;

@Component
@Slf4j
public class AutomaticPackageGrouper {

    private static final int SCALE = 4;
    private static final BigDecimal FULL_CLEARING_PERCENTAGE =
            BigDecimal.ONE.setScale(SCALE, RoundingMode.HALF_UP);
    private final int maxDetailsPerPackage;

    public AutomaticPackageGrouper(AutomaticPackagingProperties properties) {
        this.maxDetailsPerPackage = properties.getMaxDetailsPerPackage();
        if (maxDetailsPerPackage < 1) {
            throw new IllegalArgumentException("automatic-packaging.max-details-per-package must be positive");
        }
    }

    public PackageCustodianAutomaticInDto buildRequest(String sourceApplication, LocalDate executionDate,
                                                       String cutType, Boolean sameDaySettlement,
                                                       List<AutomaticPackageCandidateDto> candidates) {
        return buildRequestFromGroups(sourceApplication, executionDate, cutType, sameDaySettlement,
                groupCandidates(candidates));
    }

    public PackageCustodianAutomaticInDto buildRequestFromGroups(String sourceApplication, LocalDate executionDate,
                                                                 String cutType, Boolean sameDaySettlement,
                                                                 Map<AutomaticPackageGroupKey,
                                                                         List<AutomaticPackageCandidateDto>> grouped) {
        List<PackageCustodianAutomaticInDto.PackageDto> packages = new ArrayList<>();
        int detailCount = 0;
        for (Map.Entry<AutomaticPackageGroupKey, List<AutomaticPackageCandidateDto>> entry : grouped.entrySet()) {
            List<AutomaticPackageCandidateDto> group = entry.getValue();
            detailCount = Math.addExact(detailCount, group.size());
            int generatedPackages = 0;
            for (int start = 0; start < group.size();) {
                int end = (int) Math.min((long) start + maxDetailsPerPackage, group.size());
                packages.add(buildPackage(group.subList(start, end)));
                generatedPackages++;
                start = end;
            }
            if (generatedPackages > 1) {
                log.info("AUTOMATIC_PACKAGE_GROUP_SPLIT groupKey={}, candidateCount={}, maxDetailsPerPackage={}, generatedPackages={}",
                        entry.getKey(), group.size(), maxDetailsPerPackage, generatedPackages);
            }
        }

        log.info("Automatic custodian packages grouped, functionalGroups={}, packagesBuilt={}, detailsBuilt={}, maxDetailsPerPackage={}",
                grouped.size(), packages.size(), detailCount, maxDetailsPerPackage);
        return PackageCustodianAutomaticInDto.builder()
                .sourceApplication(sourceApplication)
                .executionDate(executionDate)
                .cutType(cutType)
                .sameDaySettlement(sameDaySettlement)
                .packages(packages)
                .build();
    }

    public ValidatedCandidates validateAndGroupCandidates(List<AutomaticPackageCandidateDto> candidates) {
        List<String> discardReasons = new ArrayList<>();
        List<AutomaticPackageCandidateDto> validCandidates = new ArrayList<>(candidates.size());
        Set<String> uniqueDetailKeys = new HashSet<>();
        Map<AutomaticPackageGroupKey, List<AutomaticPackageCandidateDto>> grouped = new LinkedHashMap<>();

        for (AutomaticPackageCandidateDto candidate : candidates) {
            String reason = getDiscardReason(candidate, uniqueDetailKeys);
            if (reason == null) {
                validCandidates.add(candidate);
                grouped.computeIfAbsent(buildKey(candidate), key -> new ArrayList<>()).add(candidate);
            } else {
                discardReasons.add(reason);
                log.debug("Automatic packaging candidate discarded: {}", reason);
            }
        }

        discardReasons.addAll(discardHeaderInconsistentGroups(grouped, validCandidates));
        return new ValidatedCandidates(validCandidates, discardReasons, grouped);
    }

    public List<String> validateAndBuildDiscardReasons(List<AutomaticPackageCandidateDto> candidates,
                                                       List<AutomaticPackageCandidateDto> validCandidates) {
        ValidatedCandidates result = validateAndGroupCandidates(candidates);
        validCandidates.addAll(result.validCandidates());
        return result.discardReasons();
    }

    private String getDiscardReason(AutomaticPackageCandidateDto candidate, Set<String> uniqueDetailKeys) {
        if (candidate.getTradeId() == null || !StringUtils.hasText(candidate.getSideId())
                || candidate.getFraction() == null) {
            return "Missing tradeId/sideId/fraction for candidate " + candidate;
        }

        if (candidate.getUniqueFractionId() == null || candidate.getUniqueFractionId() == 0L) {
            return "Missing uniqueFractionId for tradeId=%s, sideId=%s, fraction=%s"
                    .formatted(candidate.getTradeId(), candidate.getSideId(), candidate.getFraction());
        }

        String uniqueDetailKey = buildDetailKey(candidate);
        if (!uniqueDetailKeys.add(uniqueDetailKey)) {
            return "Duplicated trade/side/fraction/uniqueFractionId=%s in request".formatted(uniqueDetailKey);
        }

        if (!"1".equals(candidate.getSideId()) && !"2".equals(candidate.getSideId())) {
            return "Invalid sideId=%s for candidate=%s"
                    .formatted(candidate.getSideId(), candidateIdentity(candidate));
        }

        if (!StringUtils.hasText(candidate.getMarketId())) {
            return "Missing marketId for candidate=" + candidateIdentity(candidate);
        }

        if (candidate.getMatchDate() == null) {
            return "Missing matchDate for candidate=" + candidateIdentity(candidate);
        }

        if (candidate.getClearingDate() == null) {
            return "Missing clearingDate for candidate=" + candidateIdentity(candidate);
        }

        if (candidate.getSecurityId() == null) {
            return "Missing securityId for candidate=" + candidateIdentity(candidate);
        }

        if (candidate.getIsinNumberId() == null) {
            return "Missing isinNumberId for candidate=" + candidateIdentity(candidate);
        }

        if (!StringUtils.hasText(candidate.getInvestorDocumentNumber())) {
            return "Missing investorDocumentNumber for candidate=" + candidateIdentity(candidate);
        }

        if (!StringUtils.hasText(candidate.getInvestorIdentificationType())) {
            return "Missing investorIdentificationType for candidate=" + candidateIdentity(candidate);
        }

        if (candidate.getCustodianId() == null) {
            return "Missing custodianId for candidate=" + candidateIdentity(candidate);
        }

        if (candidate.getParticipantId() == null) {
            return "Missing participantId for candidate=" + candidateIdentity(candidate);
        }

        if (candidate.getInvestorId() == null) {
            return "Missing investorId for candidate=" + candidateIdentity(candidate);
        }

        if (candidate.getInvestorAccountId() == null) {
            return "Missing investorAccountId for candidate=" + candidateIdentity(candidate);
        }

        if (candidate.getTypeId() == null) {
            return "Missing typeId for candidate=" + candidateIdentity(candidate);
        }

        if (!StringUtils.hasText(candidate.getDepositoryId())) {
            return "Missing depositoryId for candidate=" + candidateIdentity(candidate);
        }

        return null;
    }

    private List<String> discardHeaderInconsistentGroups(
            Map<AutomaticPackageGroupKey, List<AutomaticPackageCandidateDto>> grouped,
            List<AutomaticPackageCandidateDto> validCandidates) {
        List<String> reasons = new ArrayList<>();
        Set<String> detailKeysToDiscard = new HashSet<>();
        Set<AutomaticPackageGroupKey> groupKeysToDiscard = new HashSet<>();

        for (Map.Entry<AutomaticPackageGroupKey, List<AutomaticPackageCandidateDto>> entry : grouped.entrySet()) {
            String inconsistency = getHeaderInconsistency(entry.getValue());
            if (inconsistency != null) {
                String reason = "Functional group discarded due to header inconsistency: " + inconsistency;
                reasons.add(reason);
                log.warn("Automatic packaging group discarded: {}", reason);

                entry.getValue().stream()
                        .map(this::buildDetailKey)
                        .forEach(detailKeysToDiscard::add);
                groupKeysToDiscard.add(entry.getKey());
            }
        }

        if (!detailKeysToDiscard.isEmpty()) {
            validCandidates.removeIf(candidate -> detailKeysToDiscard.contains(buildDetailKey(candidate)));
        }
        groupKeysToDiscard.forEach(grouped::remove);

        return reasons;
    }

    private String getHeaderInconsistency(List<AutomaticPackageCandidateDto> candidates) {
        AutomaticPackageCandidateDto first = candidates.get(0);
        for (AutomaticPackageCandidateDto candidate : candidates) {
            if (!Objects.equals(first.getMarketId(), candidate.getMarketId())) {
                return "marketId differs for group " + buildKey(first);
            }
            if (!Objects.equals(first.getInvestorId(), candidate.getInvestorId())) {
                return "investorId differs for group " + buildKey(first);
            }
            if (!Objects.equals(first.getInvestorAccountId(), candidate.getInvestorAccountId())) {
                return "investorAccountId differs for group " + buildKey(first);
            }
            if (!Objects.equals(normalize(first.getInvestorIdentificationType()),
                    normalize(candidate.getInvestorIdentificationType()))) {
                return "investorIdentificationType differs for group " + buildKey(first);
            }
            if (!Objects.equals(first.getReturnClearingDate(), candidate.getReturnClearingDate())) {
                return "returnClearingDate differs for group " + buildKey(first);
            }
            if (!Objects.equals(normalize(first.getSecurityMnemonic()), normalize(candidate.getSecurityMnemonic()))) {
                return "securityMnemonic differs for group " + buildKey(first);
            }
            if (!Objects.equals(first.getFicAdministratorId(), candidate.getFicAdministratorId())) {
                return "ficAdministratorId differs for group " + buildKey(first);
            }
            if (!Objects.equals(normalizeReferencePackage(first.getReferencePackage()),
                    normalizeReferencePackage(candidate.getReferencePackage()))) {
                return "referencePackage differs for group " + buildKey(first);
            }
        }
        return null;
    }

    private AutomaticPackageGroupKey buildKey(AutomaticPackageCandidateDto candidate) {
        return new AutomaticPackageGroupKey(
                candidate.getSideId(),
                candidate.getClearingDate(),
                candidate.getReturnClearingDate(),
                candidate.getSecurityId(),
                normalize(candidate.getSecurityMnemonic()),
                candidate.getDepositoryId(),
                candidate.getTypeId(),
                candidate.getIsinNumberId(),
                normalize(candidate.getInvestorIdentificationType()),
                normalize(candidate.getInvestorDocumentNumber()),
                candidate.getParticipantId(),
                candidate.getInvestorId(),
                candidate.getInvestorAccountId(),
                candidate.getCustodianId(),
                candidate.getFicAdministratorId(),
                normalizeReferencePackage(candidate.getReferencePackage())
        );
    }

    private PackageCustodianAutomaticInDto.PackageDto buildPackage(List<AutomaticPackageCandidateDto> candidates) {
        AutomaticPackageCandidateDto first = candidates.get(0);
        BigDecimal totalQuantity = BigDecimal.ZERO;
        BigDecimal totalVolume = BigDecimal.ZERO;
        BigDecimal totalNetAmount = BigDecimal.ZERO;
        BigDecimal totalCommission = BigDecimal.ZERO;
        BigDecimal totalValTax = BigDecimal.ZERO;
        BigDecimal totalReturnNetAmount = BigDecimal.ZERO;
        BigDecimal totalPrice = BigDecimal.ZERO;
        BigDecimal totalRate = BigDecimal.ZERO;
        List<PackageCustodianAutomaticInDto.DetailDto> details = new ArrayList<>(candidates.size());

        for (AutomaticPackageCandidateDto candidate : candidates) {
            totalQuantity = totalQuantity.add(zeroIfNull(candidate.getFractionQuantity()));
            totalVolume = totalVolume.add(zeroIfNull(candidate.getFractionVolume()));
            totalNetAmount = totalNetAmount.add(zeroIfNull(candidate.getNetAmount()));
            totalCommission = totalCommission.add(zeroIfNull(candidate.getCommissionAmount()));
            totalValTax = totalValTax.add(zeroIfNull(candidate.getValTaxAmount()));
            totalReturnNetAmount = totalReturnNetAmount.add(zeroIfNull(candidate.getReturnNetAmount()));
            totalPrice = totalPrice.add(zeroIfNull(candidate.getPrice()));
            totalRate = totalRate.add(zeroIfNull(candidate.getRate()));
            details.add(buildDetail(candidate));
        }
        BigDecimal detailCount = BigDecimal.valueOf(candidates.size());

        return PackageCustodianAutomaticInDto.PackageDto.builder()
                .marketId(first.getMarketId())
                .codeSCB(toThreeDigitParticipantCode(first.getParticipantCode()))
                .sideId(first.getSideId())
                .investorDocumentNumber(first.getInvestorDocumentNumber())
                .referencePackage(normalizeReferencePackage(first.getReferencePackage()))
                .investorId(first.getInvestorId())
                .participantId(first.getParticipantId())
                .investorAccountId(first.getInvestorAccountId())
                .isinNumberId(first.getIsinNumberId())
                .securityId(first.getSecurityId())
                .typeId(first.getTypeId())
                .depositoryId(first.getDepositoryId())
                .clearingDate(first.getClearingDate())
                .returnClearingDate(first.getReturnClearingDate())
                .custodianStatusId(first.getCustodianStatusId())
                .custodianId(first.getCustodianId())
                .ficAdministratorId(first.getFicAdministratorId())
                .totalFractionQuantity(scale(totalQuantity))
                .averagePrice(scale(totalPrice.divide(detailCount, 6, RoundingMode.HALF_UP)))
                .totalFractionVolume(scale(totalVolume))
                .totalNetAmount(scale(totalNetAmount))
                .totalCommissionAmount(scale(totalCommission))
                .totalValTaxAmount(scale(totalValTax))
                .clearingPercentage(FULL_CLEARING_PERCENTAGE)
                .averageFractionVolume(scale(totalVolume.divide(detailCount, 6, RoundingMode.HALF_UP)))
                .returnNetAmount(scale(totalReturnNetAmount))
                .averageRate(scale(totalRate.divide(detailCount, 6, RoundingMode.HALF_UP)))
                .details(details)
                .build();
    }

    private String toThreeDigitParticipantCode(String participantCode) {
        if (participantCode == null || participantCode.isBlank()) {
            return null;
        }
        String trimmed = participantCode.trim();
        return trimmed.length() <= 3 ? trimmed : trimmed.substring(trimmed.length() - 3);
    }

    private PackageCustodianAutomaticInDto.DetailDto buildDetail(AutomaticPackageCandidateDto candidate) {
        return PackageCustodianAutomaticInDto.DetailDto.builder()
                .tradeId(candidate.getTradeId())
                .sideId(candidate.getSideId())
                .fraction(candidate.getFraction())
                .matchDate(candidate.getMatchDate())
                .investorId(candidate.getInvestorId())
                .custodianId(candidate.getCustodianId())
                .participantId(candidate.getParticipantId())
                .ficAdministratorId(candidate.getFicAdministratorId())
                .clearingDate(candidate.getClearingDate())
                .returnClearingDate(candidate.getReturnClearingDate())
                .fractionQuantity(scale(candidate.getFractionQuantity()))
                .price(scale(candidate.getPrice()))
                .rate(scale(candidate.getRate()))
                .indicateExitReturn(Boolean.TRUE.equals(candidate.getIndicateExitReturn()))
                .referencePackage(normalizeReferencePackage(candidate.getReferencePackage()))
                .uniqueFractionId(candidate.getUniqueFractionId())
                .build();
    }

    private String normalize(String value) {
        return value == null || value.isBlank() ? null : value.trim();
    }

    private String normalizeReferencePackage(String value) {
        return normalize(value);
    }

    private BigDecimal zeroIfNull(BigDecimal value) {
        return value == null ? BigDecimal.ZERO : value;
    }

    private BigDecimal scale(BigDecimal value) {
        return zeroIfNull(value).setScale(SCALE, RoundingMode.HALF_UP);
    }

    private String buildDetailKey(AutomaticPackageCandidateDto candidate) {
        return candidate.getTradeId()
                + "|" + candidate.getSideId()
                + "|" + candidate.getFraction()
                + "|" + candidate.getUniqueFractionId();
    }

    private String candidateIdentity(AutomaticPackageCandidateDto candidate) {
        return buildDetailKey(candidate);
    }

    private Map<AutomaticPackageGroupKey, List<AutomaticPackageCandidateDto>> groupCandidates(
            List<AutomaticPackageCandidateDto> candidates) {
        Map<AutomaticPackageGroupKey, List<AutomaticPackageCandidateDto>> grouped = new LinkedHashMap<>();
        for (AutomaticPackageCandidateDto candidate : candidates) {
            grouped.computeIfAbsent(buildKey(candidate), key -> new ArrayList<>()).add(candidate);
        }
        return grouped;
    }

    public record ValidatedCandidates(
            List<AutomaticPackageCandidateDto> validCandidates,
            List<String> discardReasons,
            Map<AutomaticPackageGroupKey, List<AutomaticPackageCandidateDto>> groupedCandidates
    ) {
    }

}

```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/exception/ClientException.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.exception;

import com.nubo.operations.custody.automatic.packages.query.api.exception.error.ErrorCode;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public class ClientException extends RuntimeException {

    private final ErrorCode errorCode;
    private final HttpStatus httpStatus;

    public ClientException(ErrorCode errorCode) {
        super(errorCode.getMessage());
        this.errorCode = errorCode;
        this.httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
    }

    public ClientException(ErrorCode errorCode, HttpStatus httpStatus) {
        super(errorCode.getMessage());
        this.errorCode = errorCode;
        this.httpStatus = httpStatus;
    }

    public ClientException(ErrorCode errorCode, Throwable throwable) {
        super(errorCode.getMessage(), throwable);
        this.errorCode = errorCode;
        this.httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
    }

    public ClientException(ErrorCode errorCode, HttpStatus httpStatus, Throwable throwable) {
        super(errorCode.getMessage(), throwable);
        this.errorCode = errorCode;
        this.httpStatus = httpStatus;
    }

    public ClientException(ErrorCode errorCode, HttpStatus httpStatus, String message, Throwable throwable) {
        super(message, throwable);
        this.errorCode = errorCode;
        this.httpStatus = httpStatus;
    }

    public HttpStatus getHttpStatusOrDefault() {
        return this.httpStatus != null ? this.httpStatus : HttpStatus.INTERNAL_SERVER_ERROR;
    }

}

```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/exception/ServiceException.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.exception;

import com.nubo.operations.custody.automatic.packages.query.api.exception.error.ErrorCode;
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
        return this.httpStatus!=null ? this.httpStatus:HttpStatus.INTERNAL_SERVER_ERROR;
    }

}

```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/exception/error/ErrorCode.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.exception.error;

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
    VERSION_API_NOT_FOUND("Version API not found"),
    CMD_AUTOMATIC_PACKAGING_ERROR("Error calling automatic custodian packaging CMD");

    private final String message;

    ErrorCode(String message) {
        this.message = message;
    }

    public String getName() {
        return this.name();
    }

}

```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/exception/error/ErrorResponse.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.exception.error;

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

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/exception/error/ErrorValidation.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.exception.error;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ErrorValidation {

    private String id;
    private String description;

}

```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/exception/handler/GlobalExceptionHandler.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.exception.handler;

import com.nubo.operations.custody.automatic.packages.query.api.application.properties.PropertiesContext;
import com.nubo.operations.custody.automatic.packages.query.api.application.util.ApplicationUtils;
import com.nubo.operations.custody.automatic.packages.query.api.exception.ClientException;
import com.nubo.operations.custody.automatic.packages.query.api.exception.ServiceException;
import com.nubo.operations.custody.automatic.packages.query.api.exception.error.ErrorCode;
import com.nubo.operations.custody.automatic.packages.query.api.exception.error.ErrorResponse;
import com.nubo.operations.custody.automatic.packages.query.api.exception.error.ErrorValidation;
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
import java.util.Objects;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

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

    @ExceptionHandler(ClientException.class)
    public ResponseEntity<ErrorResponse> handlerClientException(ClientException exception,
                                                                HttpServletRequest request) {
        HttpStatus httpStatus = exception.getHttpStatus();
        ResponseEntity<ErrorResponse> errorResponseResponseEntity = null;
        if (!ObjectUtils.isEmpty(exception.getMessage())
                && !exception.getMessage().equals(exception.getErrorCode().getMessage())) {
            errorResponseResponseEntity = this.buildClientErrorResponse(httpStatus, exception.getErrorCode(),
                    exception.getMessage());
        }
        if (!ObjectUtils.isEmpty(exception.getCause())) {
            String message = exception.getCause().getMessage();
            if (errorResponseResponseEntity == null) {
                errorResponseResponseEntity = this.buildClientErrorResponse(httpStatus, exception.getErrorCode(), message);
            }
        }
        return Objects.requireNonNullElseGet(errorResponseResponseEntity,
                () -> buildErrorResponse(httpStatus, exception, request, exception.getErrorCode()));
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
                        exception.getMessage():exception.getCause().getMessage())
                .timestamp(ObjectUtils.isEmpty(String.valueOf(PropertiesContext.getClientDatetime())) ? null:
                        String.valueOf(PropertiesContext.getClientDatetime()))
                .errorDetails(errorDetails)
                .build();

        log.error("Error -> {}", errorResponse);

        return ResponseEntity.status(status).body(errorResponse);
    }

    private ResponseEntity<ErrorResponse> buildClientErrorResponse(HttpStatus status, ErrorCode errorCode, String cause) {
        try {
            Pattern pattern = Pattern.compile("\\{.*\\}");
            Matcher matcher = pattern.matcher(cause);

            if (matcher.find()) {
                String json = matcher.group();
                ErrorResponse errorResponse = (ErrorResponse) ApplicationUtils.convertJsonToObject(json, ErrorResponse.class);
                errorResponse.setHttpCode(String.valueOf(status.value()));

                log.error("Error Client -> {}", errorResponse);

                return ResponseEntity.status(status).body(errorResponse);

            } else {
                log.error("Error en buildClientErrorResponse -> No JSON found in the string");
            }
        } catch (Exception ex) {
            log.error("Error en buildClientErrorResponse -> {}", ex.getMessage());
        }
        ErrorResponse errorResponse = ErrorResponse.builder()
                .httpCode(String.valueOf(status.value()))
                .errorCode(errorCode.getName())
                .errorMessage(errorCode.getMessage())
                .errorMessageDetail(cause)
                .timestamp(ObjectUtils.isEmpty(String.valueOf(PropertiesContext.getClientDatetime())) ? null :
                        String.valueOf(PropertiesContext.getClientDatetime()))
                .build();
        log.error("Error Client fallback -> {}", errorResponse);
        return ResponseEntity.status(status).body(errorResponse);
    }

}

```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/helpers/MapperPageUtil.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.helpers;

import com.nubo.operations.custody.automatic.packages.query.api.models.dto.response.PageResponseOutDto;
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

}

```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/helpers/MapperUtil.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.helpers;


public class MapperUtil {

    private MapperUtil() {
    }



}

```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/dto/internal/AutomaticPackageCandidateDto.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.models.dto.internal;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AutomaticPackageCandidateDto {

    private Long tradeId;
    private String marketId;
    private Long uniqueFractionId;
    private Long fraction;
    private String sideId;
    private LocalDate matchDate;
    private LocalDate clearingDate;
    private LocalDate returnClearingDate;
    private Long securityId;
    private String securityMnemonic;
    private Long isinNumberId;
    private Long typeId;
    private String depositoryId;
    private Long custodianStatusId;
    private Long custodianId;
    private Long ficAdministratorId;
    private Long investorId;
    private Long investorAccountId;
    private Long participantId;
    private String participantCode;
    private String investorDocumentNumber;
    private String investorIdentificationType;
    private String referenceAllocId;
    private String referencePackage;
    private BigDecimal fractionQuantity;
    private BigDecimal fractionVolume;
    private BigDecimal netAmount;
    private BigDecimal commissionAmount;
    private BigDecimal valTaxAmount;
    private BigDecimal price;
    private BigDecimal rate;
    private BigDecimal returnNetAmount;
    private Boolean indicateExitReturn;

}

```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/dto/internal/AutomaticPackageGroupKey.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.models.dto.internal;

import java.time.LocalDate;

public record AutomaticPackageGroupKey(
        String sideId,
        LocalDate clearingDate,
        LocalDate returnClearingDate,
        Long securityId,
        String securityMnemonic,
        String depositoryId,
        Long typeId,
        Long isinNumberId,
        String investorIdentificationType,
        String investorDocumentNumber,
        Long participantId,
        Long investorId,
        Long investorAccountId,
        Long custodianId,
        Long ficAdministratorId,
        String referencePackage
) {
}

```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/dto/internal/SettlementUpdateKeyDto.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.models.dto.internal;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SettlementUpdateKeyDto {
    private Long tradeId;
    private String sideId;
    private Long fraction;
    private Long uniqueFractionId;
    private String marketId;
    private java.time.LocalDate matchDate;

    public SettlementUpdateKeyDto(Long tradeId, String sideId, Long fraction, Long uniqueFractionId) {
        this(tradeId, sideId, fraction, uniqueFractionId, null, null);
    }
}

```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/dto/request/AutomaticCustodianPackageRunRequestDto.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.models.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AutomaticCustodianPackageRunRequestDto {

    @NotNull
    private LocalDate executionDate;

    @NotBlank
    private String cutType;

    @NotNull
    private Boolean sameDaySettlement;

}

```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/dto/request/PackageCustodianAutomaticInDto.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.models.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PackageCustodianAutomaticInDto {

    private String sourceApplication;
    private LocalDate executionDate;
    private String cutType;
    private Boolean sameDaySettlement;

    @Builder.Default
    private List<PackageDto> packages = new ArrayList<>();

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class PackageDto {
        private String marketId;
        private String codeSCB;
        private String sideId;
        private String investorDocumentNumber;
        private String referencePackage;
        private Long investorId;
        private Long participantId;
        private Long investorAccountId;
        private Long isinNumberId;
        private Long securityId;
        private Long typeId;
        private String depositoryId;
        private LocalDate clearingDate;
        private LocalDate returnClearingDate;
        private Long custodianStatusId;
        private Long custodianId;
        private Long ficAdministratorId;
        private BigDecimal totalFractionQuantity;
        private BigDecimal averagePrice;
        private BigDecimal totalFractionVolume;
        private BigDecimal totalNetAmount;
        private BigDecimal totalCommissionAmount;
        private BigDecimal totalValTaxAmount;
        private BigDecimal clearingPercentage;
        private BigDecimal averageFractionVolume;
        private BigDecimal returnNetAmount;
        private BigDecimal averageRate;

        @Builder.Default
        private List<DetailDto> details = new ArrayList<>();
    }

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class DetailDto {
        private Long tradeId;
        private String sideId;
        private Long fraction;
        private LocalDate matchDate;
        private Long uniqueFractionId;
        private Long investorId;
        private Long custodianId;
        private Long participantId;
        private Long ficAdministratorId;
        private LocalDate clearingDate;
        private LocalDate returnClearingDate;
        private BigDecimal fractionQuantity;
        private BigDecimal price;
        private BigDecimal rate;
        private Boolean indicateExitReturn;
        private String referencePackage;
    }

}

```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/dto/request/PackageGroupingRequestDto.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.models.dto.request;

import com.fasterxml.jackson.annotation.JsonAlias;
import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import java.time.OffsetDateTime;
import java.util.List;

public record PackageGroupingRequestDto(
        @NotBlank String marketId,
        @NotNull Long assignedTradeStatusId,
        @JsonProperty("custodianStatusIds")
        @JsonAlias("eligibleCustodianStatusIds")
        @Schema(description = "Valores de SETTLEMENT.CUSTODIAN_STATUS_ID que pueden entrar al agrupamiento")
        @NotEmpty List<Long> custodianStatusIds,
        OffsetDateTime evaluationTimestampUtc) {
}
```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/dto/request/PackageTransferRequestDto.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.models.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import java.util.List;

public record PackageTransferRequestDto(
        @NotEmpty List<Long> packageCustodianIds,
        @NotNull Long sourceCustodianStatusId,
        @NotNull Long targetCustodianStatusId,
        @NotNull Long settlementTransferStatusId,
        @NotBlank String user,
        @NotBlank String application,
        @NotBlank String ip) {
}
```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/dto/response/AutomaticCustodianPackageRunResponseDto.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.models.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AutomaticCustodianPackageRunResponseDto {

    private LocalDate executionDate;
    private String cutType;
    private Boolean sameDaySettlement;
    private Integer candidatesFound;
    private Integer candidatesDiscarded;
    private Integer packagesBuilt;
    private Integer detailsBuilt;
    private String cmdStatus;
    private Integer cmdProcessedPackages;
    private Integer cmdCreatedPackages;
    private Integer cmdProcessedDetails;
    private Integer cmdCreatedDetails;

    @Builder.Default
    private List<String> discardReasons = new ArrayList<>();

}

```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/dto/response/PackageCustodianAutomaticOutDto.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.models.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PackageCustodianAutomaticOutDto {

    private Integer processedPackages;
    private Integer createdPackages;
    private Integer processedDetails;
    private Integer createdDetails;
    private String status;

    @Builder.Default
    private List<PackageResultDto> packages = new ArrayList<>();

    @Builder.Default
    private List<ProcessedDetailDto> processedDetailsList = new ArrayList<>();

    public List<ProcessedDetailDto> getProcessedDetailsList() {
        return processedDetailsList;
    }

    public void setProcessedDetailsList(List<ProcessedDetailDto> processedDetailsList) {
        this.processedDetailsList = processedDetailsList;
    }

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class PackageResultDto {
        private Long packageCustodianId;
        private String packageNumber;
        private String marketId;
        private LocalDate packageDate;
        private Long participantId;
        private String participantCode;
        private Long sequence;
        private Integer detailsCreated;
    }

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class ProcessedDetailDto {
        private Long packageCustodianId;
        private String packageNumber;
        private String marketId;
        private LocalDate packageDate;
        private Long tradeId;
        private String sideId;
        private Long fraction;
        private Long uniqueFractionId;
        private Long investorId;
        private Long participantId;
        private Long custodianId;
        private Long ficAdministratorId;
    }

}

```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/dto/response/PackageFractionReferenceDto.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.models.dto.response;

public record PackageFractionReferenceDto(
        Long tradeId,
        Integer fraction,
        String sideId,
        Long uniqueFractionId) {
}
```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/dto/response/PackageGroupingResponseDto.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.models.dto.response;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

public record PackageGroupingResponseDto(
        Long packageCustodianId,
        String packageNumber,
        Long sequence,
        String marketId,
        LocalDate packageDate,
        LocalTime appliedCutTime,
        boolean reusedExistingPackage,
        String participantCode,
        Long participantId,
        Long investorId,
        Long investorAccountId,
        String investorIdentificationType,
        String investorDocumentNumber,
        String sideId,
        Long typeId,
        String depositoryId,
        Long custodianId,
        Long ficAdministratorId,
        Long securityId,
        Long isinNumberId,
        LocalDate clearingDate,
        LocalDate returnClearingDate,
        String referenceAllocationId,
        BigDecimal totalFractionQuantity,
        BigDecimal totalFractionVolume,
        BigDecimal totalNetAmount,
        BigDecimal totalCommissionAmount,
        BigDecimal totalValTaxAmount,
        BigDecimal averagePrice,
        BigDecimal averageRate,
        BigDecimal averageFractionVolume,
        List<PackageFractionReferenceDto> fractions) {
}
```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/dto/response/PackageTransferResponseDto.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.models.dto.response;

import java.util.List;

public record PackageTransferResponseDto(
        int updatedPackages,
        int updatedFractions,
        List<Long> packageCustodianIds) {
}
```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/dto/response/PageResponseOutDto.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.models.dto.response;

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

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/entity/PackageCustodianEntity.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.Table;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
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
@IdClass(PackageCustodianId.class)
@Table(name = "\"PACKAGE_CUSTODIAN\"", schema = "\"NUANBODB\"")
public class PackageCustodianEntity {

    @Id
    @Column(name = "\"PACKAGE_CUSTODIAN_ID\"", nullable = false)
    private Long packageCustodianId;

    @Id
    @Column(name = "\"PACKAGE_DATE\"", nullable = false)
    private LocalDate packageDate;

    @Column(name = "\"PARTICIPANT_CODE\"", nullable = false, length = 3)
    private String participantCode;

    @Column(name = "\"SEQUENCE\"", nullable = false)
    private Long sequence;

    @Id
    @Column(name = "\"MARKET_ID\"", nullable = false, length = 2)
    private String marketId;

    @Column(name = "\"CODE_SCB\"", length = 3)
    private String codeScb;

    @Column(name = "\"PACKAGE_NUMBER\"", nullable = false, length = 18)
    private String packageNumber;

    @Column(name = "\"SIDE_ID\"", nullable = false, length = 2)
    private String sideId;

    @Column(name = "\"INVESTOR_ID\"", nullable = false)
    private Long investorId;

    @Column(name = "\"PARTICIPANT_ID\"", nullable = false)
    private Long participantId;

    @Column(name = "\"INVESTOR_ACCOUNT_ID\"", nullable = false)
    private Long investorAccountId;

    @Column(name = "\"ISIN_NUMBER_ID\"", nullable = false)
    private Long isinNumberId;

    @Column(name = "\"SECURITY_ID\"", nullable = false)
    private Long securityId;

    @Column(name = "\"TYPE_ID\"", nullable = false)
    private Long typeId;

    @Column(name = "\"DEPOSITORY_ID\"", nullable = false, length = 2)
    private String depositoryId;

    @Column(name = "\"CLEARING_DATE\"")
    private LocalDate clearingDate;

    @Column(name = "\"RETURN_CLEARING_DATE\"")
    private LocalDate returnClearingDate;

    @Column(name = "\"PACKAGE_STATUS_ID\"")
    private Long packageStatusId;

    @Column(name = "\"CUSTODIAN_ID\"", nullable = false)
    private Long custodianId;

    @Column(name = "\"FIC_ADMINISTRATOR_ID\"")
    private Long ficAdministratorId;

    @Column(name = "\"TOTAL_FRACTION_QUANTITY\"", precision = 24, scale = 4)
    private BigDecimal totalFractionQuantity;

    @Column(name = "\"AVERAGE_PRICE\"", precision = 16, scale = 4)
    private BigDecimal averagePrice;

    @Column(name = "\"TOTAL_FRACTION_VOLUME\"", precision = 24, scale = 4)
    private BigDecimal totalFractionVolume;

    @Column(name = "\"TOTAL_NET_AMOUNT\"", precision = 24, scale = 4)
    private BigDecimal totalNetAmount;

    @Column(name = "\"TOTAL_COMMISSION_AMOUNT\"", precision = 24, scale = 4)
    private BigDecimal totalCommissionAmount;

    @Column(name = "\"TOTAL_VAL_TAX_AMOUNT\"", precision = 24, scale = 4)
    private BigDecimal totalValTaxAmount;

    @Column(name = "\"CLEARING_PERCENTAGE\"", precision = 6, scale = 4)
    private BigDecimal clearingPercentage;

    @Column(name = "\"AVERAGE_FRACTION_VOLUME\"", precision = 24, scale = 4)
    private BigDecimal averageFractionVolume;

    @Column(name = "\"RETURN_NET_AMOUNT\"", precision = 24, scale = 4)
    private BigDecimal returnNetAmount;

    @Column(name = "\"AVERAGE_RATE\"", precision = 16, scale = 4)
    private BigDecimal averageRate;

    @Column(name = "\"LAST_MODIFY_USER\"", nullable = false, length = 250)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", nullable = false, length = 250)
    private String lastModifyApplic;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50)
    private String lastModifyIp;

    @Column(name = "\"REFERENCE_PACKAGE\"", length = 10)
    private String referencePackage;
}

```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/entity/PackageCustodianHistoryEntity.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.Table;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
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
@IdClass(PackageCustodianHistoryId.class)
@Table(name = "\"PACKAGE_CUSTODIAN_HISTORY\"", schema = "\"NUANBODB\"")
public class PackageCustodianHistoryEntity {

    @Id
    @Column(name = "\"PACKAGE_CUSTODIAN_ID\"", nullable = false)
    private Long packageCustodianId;

    @Id
    @Column(name = "\"PACKAGE_DATE\"", nullable = false)
    private LocalDate packageDate;

    @Column(name = "\"PARTICIPANT_CODE\"", nullable = false, length = 3)
    private String participantCode;

    @Column(name = "\"SEQUENCE\"", nullable = false)
    private Long sequence;

    @Id
    @Column(name = "\"MARKET_ID\"", nullable = false, length = 2)
    private String marketId;

    @Column(name = "\"CODE_SCB\"", length = 3)
    private String codeScb;

    @Column(name = "\"PACKAGE_NUMBER\"", nullable = false, length = 18)
    private String packageNumber;

    @Column(name = "\"SIDE_ID\"", nullable = false, length = 2)
    private String sideId;

    @Column(name = "\"INVESTOR_ID\"", nullable = false)
    private Long investorId;

    @Column(name = "\"GENERATING_PARTICIPANT_ID\"", nullable = false)
    private Long generatingParticipantId;

    @Column(name = "\"EVENT_TIME\"")
    private LocalDateTime eventTime;

    @Column(name = "\"INVESTOR_ACCOUNT_ID\"", nullable = false)
    private Long investorAccountId;

    @Column(name = "\"CUSTODIAN_STATUS_ID\"", nullable = false)
    private Long custodianStatusId;

    @Column(name = "\"CUSTODIAN_ID\"", nullable = false)
    private Long custodianId;

    @Column(name = "\"FIC_ADMINISTRATOR_ID\"")
    private Long ficAdministratorId;

    @Column(name = "\"REJECTION_REASON_ID\"")
    private Long rejectionReasonId;

    @Column(name = "\"TOTAL_FRACTION_QUANTITY\"", precision = 24, scale = 4)
    private BigDecimal totalFractionQuantity;

    @Column(name = "\"TOTAL_FRACTION_VOLUME\"", precision = 24, scale = 4)
    private BigDecimal totalFractionVolume;

    @Column(name = "\"TOTAL_NET_AMOUNT\"", precision = 24, scale = 4)
    private BigDecimal totalNetAmount;

    @Column(name = "\"TOTAL_COMMISSION_AMOUNT\"", precision = 24, scale = 4)
    private BigDecimal totalCommissionAmount;

    @Column(name = "\"TOTAL_VAL_TAX_AMOUNT\"", precision = 24, scale = 4)
    private BigDecimal totalValTaxAmount;

    @Column(name = "\"AVERAGE_PRICE\"", precision = 16, scale = 4)
    private BigDecimal averagePrice;

    @Column(name = "\"CLEARING_DATE\"")
    private LocalDate clearingDate;

    @Column(name = "\"RETURN_CLEARING_DATE\"")
    private LocalDate returnClearingDate;

    @Column(name = "\"AVERAGE_FRACTION_VOLUME\"", precision = 24, scale = 4)
    private BigDecimal averageFractionVolume;

    @Column(name = "\"AVERAGE_RATE\"", precision = 16, scale = 4)
    private BigDecimal averageRate;

    @Column(name = "\"RETURN_NET_AMOUNT\"", precision = 24, scale = 4)
    private BigDecimal returnNetAmount;

    @Column(name = "\"LAST_MODIFY_USER\"", nullable = false, length = 250)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", nullable = false, length = 250)
    private String lastModifyApplic;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50)
    private String lastModifyIp;
}

```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/entity/PackageCustodianHistoryId.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.models.entity;

import java.io.Serializable;
import java.time.LocalDate;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class PackageCustodianHistoryId implements Serializable {

    private Long packageCustodianId;
    private String marketId;
    private LocalDate packageDate;
}
```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/entity/PackageCustodianId.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.models.entity;

import java.io.Serializable;
import java.time.LocalDate;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class PackageCustodianId implements Serializable {

    private Long packageCustodianId;
    private String marketId;
    private LocalDate packageDate;
}
```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/entity/PackageDetailEntity.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.Table;
import java.time.LocalDate;
import java.time.LocalDateTime;
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
@IdClass(PackageDetailId.class)
@Table(name = "\"PACKAGE_DETAIL\"", schema = "\"NUANBODB\"")
public class PackageDetailEntity {

    @Id
    @Column(name = "\"PACKAGE_CUSTODIAN_ID\"", nullable = false)
    private Long packageCustodianId;

    @Id
    @Column(name = "\"PACKAGE_DATE\"", nullable = false)
    private LocalDate packageDate;

    @Column(name = "\"PARTICIPANT_CODE\"", nullable = false, length = 3)
    private String participantCode;

    @Column(name = "\"SEQUENCE\"", nullable = false)
    private Long sequence;

    @Id
    @Column(name = "\"MARKET_ID\"", nullable = false, length = 2)
    private String marketId;

    @Column(name = "\"PACKAGE_NUMBER\"", nullable = false, length = 18)
    private String packageNumber;

    @Id
    @Column(name = "\"TRADE_ID\"", nullable = false)
    private Long tradeId;

    @Id
    @Column(name = "\"SIDE_ID\"", nullable = false, length = 2)
    private String sideId;

    @Id
    @Column(name = "\"FRACTION\"", nullable = false)
    private Long fraction;

    @Column(name = "\"MATCH_DATE\"", nullable = false)
    private LocalDate matchDate;

    @Column(name = "\"UNIQUE_FRACTION_ID\"", nullable = false)
    private Long uniqueFractionId;

    @Column(name = "\"INVESTOR_ID\"", nullable = false)
    private Long investorId;

    @Column(name = "\"CUSTODIAN_ID\"")
    private Long custodianId;

    @Column(name = "\"PARTICIPANT_ID\"", nullable = false)
    private Long participantId;

    @Column(name = "\"PACKAGE_STATUS_ID\"")
    private Long packageStatusId;

    @Column(name = "\"LAST_MODIFY_USER\"", nullable = false, length = 250)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", nullable = false, length = 250)
    private String lastModifyApplic;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50)
    private String lastModifyIp;
}

```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/entity/PackageDetailHistoryEntity.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.Table;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
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
@IdClass(PackageDetailHistoryId.class)
@Table(name = "\"PACKAGE_DETAIL_HISTORY\"", schema = "\"NUANBODB\"")
public class PackageDetailHistoryEntity {

    @Id
    @Column(name = "\"PACKAGE_CUSTODIAN_ID\"", nullable = false)
    private Long packageCustodianId;

    @Column(name = "\"PACKAGE_DATE\"", nullable = false)
    private LocalDate packageDate;

    @Column(name = "\"PARTICIPANT_CODE\"", nullable = false, length = 3)
    private String participantCode;

    @Column(name = "\"SEQUENCE\"", nullable = false)
    private Long sequence;

    @Id
    @Column(name = "\"MARKET_ID\"", nullable = false, length = 2)
    private String marketId;

    @Column(name = "\"PACKAGE_NUMBER\"", nullable = false, length = 18)
    private String packageNumber;

    @Column(name = "\"PACKAGE_EVENT_ID\"")
    private Long packageEventId;

    @Column(name = "\"STATUS_TIME\"")
    private LocalDateTime statusTime;

    @Id
    @Column(name = "\"TRADE_ID\"", nullable = false)
    private Long tradeId;

    @Id
    @Column(name = "\"SIDE_ID\"", nullable = false, length = 2)
    private String sideId;

    @Id
    @Column(name = "\"FRACTION\"", nullable = false)
    private Long fraction;

    @Column(name = "\"UNIQUE_FRACTION_ID\"", nullable = false)
    private Long uniqueFractionId;

    @Id
    @Column(name = "\"MATCH_DATE\"", nullable = false)
    private LocalDate matchDate;

    @Column(name = "\"CLEARING_DATE\"", nullable = false)
    private LocalDate clearingDate;

    @Column(name = "\"RETURN_CLEARING_DATE\"")
    private LocalDate returnClearingDate;

    @Column(name = "\"FRACTION_QUANTITY\"", precision = 16, scale = 4)
    private BigDecimal fractionQuantity;

    @Column(name = "\"PRICE\"", precision = 16, scale = 4)
    private BigDecimal price;

    @Column(name = "\"RATE\"", precision = 16, scale = 4)
    private BigDecimal rate;

    @Column(name = "\"INDICATE_EXIT_RETURN\"")
    private Boolean indicateExitReturn;

    @Column(name = "\"CUSTODIAN_ID\"")
    private Long custodianId;

    @Column(name = "\"PARTICIPANT_ID\"", nullable = false)
    private Long participantId;

    @Column(name = "\"LAST_MODIFY_USER\"", nullable = false, length = 250)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", nullable = false, length = 250)
    private String lastModifyApplic;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50)
    private String lastModifyIp;
}
```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/entity/PackageDetailHistoryId.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.models.entity;

import java.io.Serializable;
import java.time.LocalDate;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class PackageDetailHistoryId implements Serializable {

    private Long packageCustodianId;
    private String marketId;
    private LocalDate matchDate;
    private Long tradeId;
    private String sideId;
    private Long fraction;
}
```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/entity/PackageDetailId.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.models.entity;

import java.io.Serializable;
import java.time.LocalDate;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class PackageDetailId implements Serializable {

    private Long packageCustodianId;
    private String marketId;
    private LocalDate packageDate;
    private Long tradeId;
    private String sideId;
    private Long fraction;
}
```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/entity/SettlementEntity.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.Table;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.OffsetDateTime;
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
@IdClass(SettlementId.class)
@Table(name = "\"SETTLEMENT\"", schema = "\"NUANBODB\"")
public class SettlementEntity {

    @Id
    @Column(name = "\"TRADE_ID\"", nullable = false)
    private Long tradeId;

    @Id
    @Column(name = "\"FRACTION\"", nullable = false)
    private Integer fraction;

    @Id
    @Column(name = "\"SIDE_ID\"", nullable = false, length = 2)
    private String sideId;

    @Column(name = "\"INVESTOR_ID\"")
    private Long investorId;

    @Column(name = "\"INVESTOR_ACCOUNT_ID\"")
    private Long investorAccountId;

    @Column(name = "\"PARTICIPANT_ACCOUNT_ID\"")
    private Long participantAccountId;

    @Column(name = "\"FRACTION_QUANTITY\"", precision = 16, scale = 4)
    private BigDecimal fractionQuantity;

    @Column(name = "\"FRACTION_VOLUME\"", precision = 16, scale = 4)
    private BigDecimal fractionVolume;

    @Column(name = "\"FRACTION_VOLUME_LOCAL_PRICE\"", precision = 16, scale = 4)
    private BigDecimal fractionVolumeLocalPrice;

    @Column(name = "\"FIDUCIARY_SPECIALIST\"")
    private Boolean fiduciarySpecialist;

    @Column(name = "\"COMMISSION_PERCENTAGE\"", precision = 6, scale = 4)
    private BigDecimal commissionPercentage;

    @Column(name = "\"COMMISSION_AMOUNT\"", precision = 16, scale = 4)
    private BigDecimal commissionAmount;

    @Column(name = "\"VAL_TAX\"", precision = 6, scale = 4)
    private BigDecimal valTax;

    @Column(name = "\"VAL_TAX_AMOUNT\"", precision = 16, scale = 4)
    private BigDecimal valTaxAmount;

    @Column(name = "\"WITHHOLDING_TAX\"", precision = 6, scale = 4)
    private BigDecimal withholdingTax;

    @Column(name = "\"WITHHOLDING_TAX_AMOUNT\"", precision = 16, scale = 4)
    private BigDecimal withholdingTaxAmount;

    @Column(name = "\"NET_AMOUNT\"", precision = 16, scale = 4)
    private BigDecimal netAmount;

    @Column(name = "\"TRANSFER_VALUE\"", precision = 16, scale = 4)
    private BigDecimal transferValue;

    @Column(name = "\"ISSUED_RECEIPT\"")
    private Boolean issuedReceipt;

    @Column(name = "\"ISSUED_RECEIPT_NUMBER\"", length = 50)
    private String issuedReceiptNumber;

    @Column(name = "\"REFERENCE_ALLOC_ID\"", precision = 19)
    private BigDecimal referenceAllocId;

    @Column(name = "\"REPO_RATE\"", precision = 16, scale = 4)
    private BigDecimal repoRate;

    @Column(name = "\"REPO_AMOUNT\"", precision = 16, scale = 4)
    private BigDecimal repoAmount;

    @Column(name = "\"LATE_PENALITY\"", precision = 16, scale = 4)
    private BigDecimal latePenality;

    @Column(name = "\"FUNDING_AMOUNT\"", precision = 16, scale = 4)
    private BigDecimal fundingAmount;

    @Column(name = "\"NET_OUTFLOW_TOTAL\"", precision = 16, scale = 4)
    private BigDecimal netOutflowTotal;

    @Column(name = "\"OUTFLOW_TURNOVER_VALUE\"", precision = 16, scale = 4)
    private BigDecimal outflowTurnoverValue;

    @Column(name = "\"RETURN_TURNOVER_VALUE\"", precision = 16, scale = 4)
    private BigDecimal returnTurnoverValue;

    @Column(name = "\"DELIVERY_VERSUS_PAYMENT_VALUE\"", precision = 16, scale = 4)
    private BigDecimal deliveryVersusPaymentValue;

    @Column(name = "\"SETTLEMENT_AMOUNT\"", precision = 16, scale = 4)
    private BigDecimal settlementAmount;

    @Column(name = "\"TRADING_SYSTEM_ID\"", nullable = false)
    private Long tradingSystemId;

    @Column(name = "\"STATUS_ID\"", nullable = false)
    private Long statusId;

    @Column(name = "\"BROKERAGE_SERVICE\"", precision = 16, scale = 4)
    private BigDecimal brokerageService;

    @Column(name = "\"CUSTODIAN_ID\"")
    private Long custodianId;

    @Column(name = "\"BANK_ACCOUNT_ID\"")
    private Long bankAccountId;

    @Column(name = "\"REFERENCE\"", length = 255)
    private String reference;

    @Column(name = "\"CAPITAL_GAIN_VALUE\"", precision = 16, scale = 4)
    private BigDecimal capitalGainValue;

    @Column(name = "\"DISBURSEMENT_VALUE\"", precision = 166, scale = 4)
    private BigDecimal disbursementValue;

    @Column(name = "\"SOURCE_QUOTE_TYPE_ID\"")
    private Long sourceQuoteTypeId;

    @Column(name = "\"FIC_ADMINISTRATOR_ID\"")
    private Long ficAdministratorId;

    @Column(name = "\"CUSTODIAN_STATUS_ID\"")
    private Long custodianStatusId;

    @Column(name = "\"SETTLEMENT_STATUS_ID\"")
    private Long settlementStatusId;

    @Column(name = "\"BLOQUING_STATUS_ID\"")
    private Long bloquingStatusId;

    @Column(name = "\"REJECTION_REASON\"", length = 255)
    private String rejectionReason;

    @Column(name = "\"LAST_MODIFY_USER\"", nullable = false, length = 250)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", nullable = false, length = 250)
    private String lastModifyApplic;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private OffsetDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50)
    private String lastModifyIp;

    @Column(name = "\"DIRECT_DEPOSITOR\"")
    private Long directDepositor;

    @Column(name = "\"PARTICIPANT_BANK_ACCOUNT_ID\"")
    private Long participantBankAccountId;

    @Column(name = "\"BANK_TRANSACTION_MARK\"")
    private Boolean bankTransactionMark;

    @Column(name = "\"AFP_FUND_ID\"")
    private Long afpFundId;

    @Column(name = "\"FRACTION_VOLUME_DVD\"", precision = 16, scale = 4)
    private BigDecimal fractionVolumeDvd;

    @Column(name = "\"FRACTION_VOLUME_DVP\"", precision = 16, scale = 4)
    private BigDecimal fractionVolumeDvp;

    @Column(name = "\"FRACTION_VOLUME_LP\"", precision = 16, scale = 4)
    private BigDecimal fractionVolumeLp;

    @Column(name = "\"GURANTEE_INDICATOR\"")
    private Boolean guranteeIndicator;

    @Column(name = "\"CASH_ACCOUNT\"", precision = 20)
    private BigDecimal cashAccount;

    @Column(name = "\"IND_MASTER\"")
    private Boolean indMaster;

    @Column(name = "\"TRANSFER_PARTICIPANT_ID\"")
    private Long transferParticipantId;

    @Column(name = "\"MILA_DIRECT_DEPOSITOR\"")
    private Long milaDirectDepositor;

    @Column(name = "\"UNIQUE_FRACTION_ID\"", nullable = false)
    private Long uniqueFractionId;

    @Column(name = "\"COMMISSION_TYPE_ID\"")
    private Long commissionTypeId;

    @Column(name = "\"DISPOSAL_VALUE\"", precision = 20, scale = 4)
    private BigDecimal disposalValue;

    @Column(name = "\"DISPOSAL_DATE\"")
    private LocalDate disposalDate;

    @Column(name = "\"ACTIVE\"")
    private Boolean active;

    @Column(name = "\"MARKET_ID\"", length = 2)
    private String marketId;

    @Column(name = "\"MATCH_DATE\"")
    private LocalDate matchDate;

    @Column(name = "\"REFERENCE_PACKAGE\"", length = 10)
    private String referencePackage;
}

```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/entity/SettlementId.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.models.entity;

import java.io.Serializable;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class SettlementId implements Serializable {

    private Long tradeId;
    private Integer fraction;
    private String sideId;
}
```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/entity/TradeEntity.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.OffsetDateTime;
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
    @Column(name = "\"TRADE_ID\"")
    private Long tradeId;

    @Column(name = "\"MATCH_DATE\"")
    private LocalDate matchDate;

    @Column(name = "\"MATCH_ID\"", precision = 19)
    private BigDecimal matchId;

    @Column(name = "\"CLEARING_DATE\"", nullable = false)
    private LocalDate clearingDate;

    @Column(name = "\"RETURN_CLEARING_DATE\"")
    private LocalDate returnClearingDate;

    @Column(name = "\"DEPOSITORY_ID\"", length = 2)
    private String depositoryId;

    @Column(name = "\"COUNTRY_ID\"", nullable = false)
    private Long countryId;

    @Column(name = "\"TYPE_ID\"", nullable = false)
    private Long typeId;

    @Column(name = "\"MARKET_ID\"", nullable = false, length = 2)
    private String marketId;

    @Column(name = "\"ISSUANCE_MARKET_ID\"", length = 2)
    private String issuanceMarketId;

    @Column(name = "\"SECURITY_ID\"", nullable = false)
    private Long securityId;

    @Column(name = "\"PARTICIPANT_ID_BUY\"", nullable = false)
    private Long participantIdBuy;

    @Column(name = "\"PARTICIPANT_ID_SELL\"", nullable = false)
    private Long participantIdSell;

    @Column(name = "\"CUSTODIAN_ID_BUY\"")
    private Long custodianIdBuy;

    @Column(name = "\"CUSTODIAN_ID_SELL\"")
    private Long custodianIdSell;

    @Column(name = "\"ASSIGNMENT_MARK_BUY\"")
    private Boolean assignmentMarkBuy;

    @Column(name = "\"ASSIGNMENT_MARK_SELL\"")
    private Boolean assignmentMarkSell;

    @Column(name = "\"FRACTIONAL_MARK_BUY\"")
    private Boolean fractionalMarkBuy;

    @Column(name = "\"FRACTIONAL_MARK_SELL\"")
    private Boolean fractionalMarkSell;

    @Column(name = "\"ADVANCE_STATUS\"")
    private Integer advanceStatus;

    @Column(name = "\"EXIT_INDICATOR_SETTLEMENT\"")
    private Boolean exitIndicatorSettlement;

    @Column(name = "\"CANCELED_STATUS\"")
    private Boolean canceledStatus;

    @Column(name = "\"QUANTITY\"", precision = 16, scale = 4)
    private BigDecimal quantity;

    @Column(name = "\"VOLUME\"", precision = 16, scale = 4)
    private BigDecimal volume;

    @Column(name = "\"VOLUME_LOCAL_PRICE\"", precision = 16, scale = 4)
    private BigDecimal volumeLocalPrice;

    @Column(name = "\"REPURCHASE_RATE\"", precision = 16, scale = 4)
    private BigDecimal repurchaseRate;

    @Column(name = "\"REPURCHASE_AMOUNT\"", precision = 16, scale = 4)
    private BigDecimal repurchaseAmount;

    @Column(name = "\"STATUS_ID\"", nullable = false)
    private Long statusId;

    @Column(name = "\"MATCH_TIME\"")
    private OffsetDateTime matchTime;

    @Column(name = "\"OWN_POSITION_SELL\"")
    private Boolean ownPositionSell;

    @Column(name = "\"OWN_POSITION_BUY\"")
    private Boolean ownPositionBuy;

    @Column(name = "\"CURRENCY_ID\"", nullable = false)
    private Long currencyId;

    @Column(name = "\"TRADING_SYSTEM_ID\"", nullable = false)
    private Long tradingSystemId;

    @Column(name = "\"TRADING_SESSION_ID\"", length = 2)
    private String tradingSessionId;

    @Column(name = "\"REPURCHASE_AGREEMENT_DATE\"")
    private LocalDate repurchaseAgreementDate;

    @Column(name = "\"DAYS_TO_SETTLEMENT\"")
    private Integer daysToSettlement;

    @Column(name = "\"REPO_RATE\"", precision = 16, scale = 4)
    private BigDecimal repoRate;

    @Column(name = "\"REPO_AMOUNT\"", precision = 16, scale = 4)
    private BigDecimal repoAmount;

    @Column(name = "\"FUNDING_AMOUNT\"", precision = 16, scale = 4)
    private BigDecimal fundingAmount;

    @Column(name = "\"NET_OUTFLOW_TOTAL\"", precision = 16, scale = 4)
    private BigDecimal netOutflowTotal;

    @Column(name = "\"OUTFLOW_TURNOVER_VALUE\"", precision = 16, scale = 4)
    private BigDecimal outflowTurnoverValue;

    @Column(name = "\"TOTAL_NET_RETURN\"", precision = 16, scale = 4)
    private BigDecimal totalNetReturn;

    @Column(name = "\"RETURN_TURNOVER_VALUE\"", precision = 16, scale = 4)
    private BigDecimal returnTurnoverValue;

    @Column(name = "\"DELIVERY_VERSUS_PAYMENT_VALUE\"", precision = 16, scale = 4)
    private BigDecimal deliveryVersusPaymentValue;

    @Column(name = "\"REALLOCATION_INDICATOR\"")
    private Boolean reallocationIndicator;

    @Column(name = "\"BUSINESS_TYPE_ID\"")
    private Long businessTypeId;

    @Column(name = "\"MARKET_TYPE_ID\"", nullable = false)
    private Long marketTypeId;

    @Column(name = "\"ORIGIN_TYPE_ID\"")
    private Long originTypeId;

    @Column(name = "\"SETTLEMENT_INDICATOR_OUTGOING\"")
    private Boolean settlementIndicatorOutgoing;

    @Column(name = "\"SETTLEMENT_INDICATOR_RETURN\"")
    private Boolean settlementIndicatorReturn;

    @Column(name = "\"RESETTLEMENT_INDICATOR_ADVANCE\"")
    private Boolean resettlementIndicatorAdvance;

    @Column(name = "\"SPECIAL_TRADE_ID\"")
    private Long specialTradeId;

    @Column(name = "\"PAYMENT_TYPE_ID\"")
    private Long paymentTypeId;

    @Column(name = "\"SETTLEMENT_TYPE_ID\"")
    private Long settlementTypeId;

    @Column(name = "\"CUSTODIAN_STATUS_ID\"")
    private Long custodianStatusId;

    @Column(name = "\"SETTLEMENT_STATUS_ID\"")
    private Long settlementStatusId;

    @Column(name = "\"BLOQUING_STATUS_ID\"")
    private Long bloquingStatusId;

    @Column(name = "\"PURCHASE_PAYMENT_INDICATOR\"")
    private Boolean purchasePaymentIndicator;

    @Column(name = "\"RETURN_INDICATOR_SETTLEMENT\"")
    private Boolean returnIndicatorSettlement;

    @Column(name = "\"ISIN_NUMBER_ID\"")
    private Long isinNumberId;

    @Column(name = "\"AFP_FUND_ID\"")
    private Long afpFundId;

    @Column(name = "\"REJECTION_REASON\"", length = 255)
    private String rejectionReason;

    @Column(name = "\"LAST_MODIFY_USER\"", nullable = false, length = 250)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", nullable = false, length = 250)
    private String lastModifyApplic;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private OffsetDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50)
    private String lastModifyIp;

    @Column(name = "\"SOURCE_QUOTE_BUY_TYPE\"")
    private Long sourceQuoteBuyType;

    @Column(name = "\"SOURCE_QUOTE_SELL_TYPE\"")
    private Integer sourceQuoteSellType;

    @Column(name = "\"VOLUME_DVP\"", precision = 16, scale = 4)
    private BigDecimal volumeDvp;

    @Column(name = "\"VOLUME_LP\"", precision = 16, scale = 4)
    private BigDecimal volumeLp;

    @Column(name = "\"VOLUME_DVD\"", precision = 16, scale = 4)
    private BigDecimal volumeDvd;

    @Column(name = "\"SELL_STATUS_ID\"")
    private Long sellStatusId;

    @Column(name = "\"BUY_STATUS_ID\"")
    private Long buyStatusId;

    @Column(name = "\"PARENT_MATCHI_ID\"", precision = 19)
    private BigDecimal parentMatchiId;

    @Column(name = "\"SALES_GUARANTEE\"")
    private Integer salesGuarantee;

    @Column(name = "\"PURCHASE_GUARANTEE\"")
    private Integer purchaseGuarantee;

    @Column(name = "\"AFP_FUND_SELL\"")
    private Long afpFundSell;

    @Column(name = "\"AFP_FUND_BUY\"")
    private Long afpFundBuy;

    @Column(name = "\"DEPOSITORY_ID_BUY\"", length = 2)
    private String depositoryIdBuy;

    @Column(name = "\"DEPOSITORY_ID_SELL\"", length = 2)
    private String depositoryIdSell;

    @Column(name = "\"PURCHASE_COLLECTION_STATUS_ID\"")
    private Long purchaseCollectionStatusId;

    @Column(name = "\"SALE_PAYMENT_STATUS_ID\"")
    private Long salePaymentStatusId;

    @Column(name = "\"PREVIOUS_CYCLE_STATUS_ID\"")
    private Long previousCycleStatusId;

    @Column(name = "\"SUBSEQUENT_CYCLE_STATUS_ID\"")
    private Long subsequentCycleStatusId;

    @Column(name = "\"ENTERING_FIRM_BUY\"", length = 20)
    private String enteringFirmBuy;

    @Column(name = "\"ENTERING_FIRM_SELL\"", length = 20)
    private String enteringFirmSell;

    @Column(name = "\"PRICE\"", precision = 16, scale = 4)
    private BigDecimal price;

    @Column(name = "\"LOCAL_CURRENCY_PRICE\"", precision = 16, scale = 4)
    private BigDecimal localCurrencyPrice;

    @Column(name = "\"FORWARD_PRICE\"", precision = 12, scale = 6)
    private BigDecimal forwardPrice;

    @Column(name = "\"IND_MASTER_BUY\"")
    private Boolean indMasterBuy;

    @Column(name = "\"IND_MASTER_SELL\"")
    private Boolean indMasterSell;

    @Column(name = "\"FINAL_ASSIGNMENT_MARK_BUY\"")
    private Boolean finalAssignmentMarkBuy;

    @Column(name = "\"FINAL_ASSIGNMENT_MARK_SELL\"")
    private Boolean finalAssignmentMarkSell;

    @Column(name = "\"CLEARING_DATE_OLD\"")
    private LocalDate clearingDateOld;

    @Column(name = "\"RECALCULATION_INDICATOR_ADVANCE\"")
    private Boolean recalculationIndicatorAdvance;

    @Column(name = "\"EXIGENCY_GUARANTEE_BUY\"")
    private Boolean exigencyGuaranteeBuy;

    @Column(name = "\"EXIGENCY_GUARANTEE_SELL\"")
    private Boolean exigencyGuaranteeSell;
}
```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/enums/AutomaticCutType.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.models.enums;

import java.util.Arrays;
import java.util.Optional;

public enum AutomaticCutType {

    SAME_DAY_CUT_1(true, true),
    SAME_DAY_CUT_2(true, false),
    SAME_DAY_CUT_3(true, false),
    FUTURE_DAY_CUT_1(false, true),
    FUTURE_DAY_CUT_2(false, false),
    FUTURE_DAY_CUT_3(false, false);

    private final boolean sameDay;
    private final boolean firstCut;

    AutomaticCutType(boolean sameDay, boolean firstCut) {
        this.sameDay = sameDay;
        this.firstCut = firstCut;
    }

    public boolean isFirstCut() {
        return firstCut;
    }

    public boolean isReprocessCut() {
        return !firstCut;
    }

    public boolean isSameDayCut() {
        return sameDay;
    }

    public boolean isFutureDayCut() {
        return !sameDay;
    }

    public boolean isCompatibleWith(Boolean sameDaySettlement) {
        return sameDaySettlement != null && sameDay == sameDaySettlement;
    }

    public static Optional<AutomaticCutType> from(String cutType) {
        return Arrays.stream(values())
                .filter(value -> value.name().equalsIgnoreCase(cutType))
                .findFirst();
    }
}

```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/enums/PropertiesEnum.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.models.enums;

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
    CLIENT_BACKEND("client_backend"),
    VERSION_API("version_api"),
    AUTH_TOKEN("auth_token");

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
            return status!=null ? status.getValue():null;
        }

        @Override
        public PropertiesEnum convertToEntityAttribute(String dbData) {
            return dbData!=null ? PropertiesEnum.fromValue(dbData):null;
        }
    }

}

```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/enums/SettlementUpdateSource.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.models.enums;

public enum SettlementUpdateSource {
    QUERY_REQUEST,
    CMD_RESPONSE_LEGACY
}

```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/enums/VersionApiEnum.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.models.enums;

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
            return status!=null ? status.getValue():null;
        }

        @Override
        public VersionApiEnum convertToEntityAttribute(String dbData) {
            return dbData!=null ? VersionApiEnum.fromValue(dbData):null;
        }
    }

}

```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/repository/AutomaticCustodianPackagingRepository.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.repository;

import com.nubo.operations.custody.automatic.packages.query.api.models.dto.internal.AutomaticPackageCandidateDto;
import com.nubo.operations.custody.automatic.packages.query.api.models.dto.internal.SettlementUpdateKeyDto;

import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.util.List;


public interface AutomaticCustodianPackagingRepository {

    List<AutomaticPackageCandidateDto> findCandidates(LocalDate executionDate, Boolean sameDaySettlement,
                                                      String cutType);

    int updateSettlementCustodianStatusToTransferred(Long tradeId, String sideId, Long fraction,
                                                     Long uniqueFractionId, Long transferredStatusId,
                                                     String user, String applic, OffsetDateTime date, String ip);

    int updateSettlementsCustodianStatusToTransferredBatch(
            List<SettlementUpdateKeyDto> details,
            Long transferredStatusId,
            String user,
            String applic,
            OffsetDateTime date,
            String ip);

    String getLastExecutedSql();

}

```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/repository/PackageCustodianHistoryRepository.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.repository;

import com.nubo.operations.custody.automatic.packages.query.api.models.entity.PackageCustodianHistoryEntity;
import com.nubo.operations.custody.automatic.packages.query.api.models.entity.PackageCustodianHistoryId;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PackageCustodianHistoryRepository extends JpaRepository<PackageCustodianHistoryEntity, PackageCustodianHistoryId> {
}
```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/repository/PackageCustodianRepository.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.repository;

import com.nubo.operations.custody.automatic.packages.query.api.models.entity.PackageCustodianEntity;
import com.nubo.operations.custody.automatic.packages.query.api.models.entity.PackageCustodianId;
import com.nubo.operations.custody.automatic.packages.query.api.repository.projection.ExistingPackageProjection;
import java.time.LocalDate;
import java.util.Collection;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface PackageCustodianRepository extends JpaRepository<PackageCustodianEntity, PackageCustodianId> {

    List<PackageCustodianEntity> findByPackageCustodianIdIn(Collection<Long> packageCustodianIds);

    @Query("""
            select coalesce(max(pc.sequence), 0)
            from PackageCustodianEntity pc
            where pc.marketId = :marketId
              and pc.packageDate = :packageDate
            """)
    Long findMaxSequenceByMarketAndDate(@Param("marketId") String marketId, @Param("packageDate") LocalDate packageDate);

    @Query(value = """
            select distinct on (pc.\"PACKAGE_CUSTODIAN_ID\")
                pc.\"PACKAGE_CUSTODIAN_ID\" as packageCustodianId,
                pc.\"PACKAGE_NUMBER\" as packageNumber,
                pc.\"SEQUENCE\" as sequence,
                pc.\"MARKET_ID\" as marketId,
                pc.\"PACKAGE_DATE\" as packageDate,
                pc.\"PARTICIPANT_CODE\" as participantCode,
                pc.\"PARTICIPANT_ID\" as participantId,
                pc.\"INVESTOR_ID\" as investorId,
                pc.\"INVESTOR_ACCOUNT_ID\" as investorAccountId,
                it.\"CODE\" as investorIdentificationType,
                trim(i.\"DOCUMENT_NUMBER\") as investorDocumentNumber,
                pc.\"SIDE_ID\" as sideId,
                pc.\"TYPE_ID\" as typeId,
                pc.\"DEPOSITORY_ID\" as depositoryId,
                pc.\"CUSTODIAN_ID\" as custodianId,
                pc.\"FIC_ADMINISTRATOR_ID\" as ficAdministratorId,
                pc.\"SECURITY_ID\" as securityId,
                pc.\"ISIN_NUMBER_ID\" as isinNumberId,
                pc.\"CLEARING_DATE\" as clearingDate,
                pc.\"RETURN_CLEARING_DATE\" as returnClearingDate,
                s.\"REFERENCE_ALLOC_ID\" as referenceAllocId
            from \"NUANBODB\".\"PACKAGE_CUSTODIAN\" pc
            join \"NUANBODB\".\"PACKAGE_DETAIL\" pd
              on pd.\"PACKAGE_CUSTODIAN_ID\" = pc.\"PACKAGE_CUSTODIAN_ID\"
             and pd.\"MARKET_ID\" = pc.\"MARKET_ID\"
             and pd.\"PACKAGE_DATE\" = pc.\"PACKAGE_DATE\"
            left join \"NUANBODB\".\"SETTLEMENT\" s
              on s.\"TRADE_ID\" = pd.\"TRADE_ID\"
             and s.\"SIDE_ID\" = pd.\"SIDE_ID\"
             and s.\"FRACTION\" = pd.\"FRACTION\"
            left join \"NUANBODB\".\"INVESTOR\" i on i.\"INVESTOR_ID\" = pc.\"INVESTOR_ID\"
            left join \"NUANBODB\".\"IDENTIFICATION_TYPE\" it on it.\"IDENTIFICATION_TYPE_ID\" = i.\"IDENTIFICATION_TYPE_ID\"
            where pc.\"MARKET_ID\" = :marketId
              and pc.\"PACKAGE_DATE\" = :packageDate
            order by pc.\"PACKAGE_CUSTODIAN_ID\", pd.\"MATCH_DATE\" desc
            """, nativeQuery = true)
    List<ExistingPackageProjection> findReusablePackages(@Param("marketId") String marketId,
                                                         @Param("packageDate") LocalDate packageDate);
}
```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/repository/PackageDetailHistoryRepository.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.repository;

import com.nubo.operations.custody.automatic.packages.query.api.models.entity.PackageDetailHistoryEntity;
import com.nubo.operations.custody.automatic.packages.query.api.models.entity.PackageDetailHistoryId;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PackageDetailHistoryRepository extends JpaRepository<PackageDetailHistoryEntity, PackageDetailHistoryId> {
}
```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/repository/PackageDetailRepository.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.repository;

import com.nubo.operations.custody.automatic.packages.query.api.models.entity.PackageDetailEntity;
import com.nubo.operations.custody.automatic.packages.query.api.models.entity.PackageDetailId;
import com.nubo.operations.custody.automatic.packages.query.api.repository.projection.PackageTransferProjection;
import java.util.Collection;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface PackageDetailRepository extends JpaRepository<PackageDetailEntity, PackageDetailId> {

    List<PackageDetailEntity> findByPackageCustodianIdIn(Collection<Long> packageCustodianIds);

    @Query(value = """
            select
                pd.\"PACKAGE_CUSTODIAN_ID\" as packageCustodianId,
                pd.\"PACKAGE_DATE\" as packageDate,
                pd.\"PARTICIPANT_CODE\" as participantCode,
                pd.\"SEQUENCE\" as sequence,
                pd.\"MARKET_ID\" as marketId,
                pd.\"PACKAGE_NUMBER\" as packageNumber,
                pd.\"TRADE_ID\" as tradeId,
                pd.\"SIDE_ID\" as sideId,
                pd.\"FRACTION\" as fraction,
                pd.\"UNIQUE_FRACTION_ID\" as uniqueFractionId,
                pd.\"MATCH_DATE\" as matchDate,
                t.\"CLEARING_DATE\" as clearingDate,
                t.\"RETURN_CLEARING_DATE\" as returnClearingDate,
                s.\"FRACTION_QUANTITY\" as fractionQuantity,
                t.\"PRICE\" as price,
                t.\"REPO_RATE\" as rate,
                t.\"EXIT_INDICATOR_SETTLEMENT\" as indicateExitReturn,
                pd.\"CUSTODIAN_ID\" as custodianId,
                pd.\"PARTICIPANT_ID\" as participantId
            from \"NUANBODB\".\"PACKAGE_DETAIL\" pd
            join \"NUANBODB\".\"TRADE\" t on t.\"TRADE_ID\" = pd.\"TRADE_ID\"
            join \"NUANBODB\".\"SETTLEMENT\" s
              on s.\"TRADE_ID\" = pd.\"TRADE_ID\"
             and s.\"SIDE_ID\" = pd.\"SIDE_ID\"
             and s.\"FRACTION\" = pd.\"FRACTION\"
            where pd.\"PACKAGE_CUSTODIAN_ID\" in (:packageCustodianIds)
            """, nativeQuery = true)
    List<PackageTransferProjection> findTransferRows(@Param("packageCustodianIds") Collection<Long> packageCustodianIds);
}
```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/repository/SettlementRepository.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.repository;

import com.nubo.operations.custody.automatic.packages.query.api.models.entity.SettlementEntity;
import com.nubo.operations.custody.automatic.packages.query.api.models.entity.SettlementId;
import com.nubo.operations.custody.automatic.packages.query.api.repository.projection.SettlementCandidateProjection;
import java.util.Collection;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface SettlementRepository extends JpaRepository<SettlementEntity, SettlementId> {

    @Query(value = """
            select
                t.\"TRADE_ID\" as tradeId,
                s.\"UNIQUE_FRACTION_ID\" as uniqueFractionId,
                s.\"FRACTION\" as fraction,
                s.\"SIDE_ID\" as sideId,
                t.\"MATCH_DATE\" as matchDate,
                t.\"CLEARING_DATE\" as clearingDate,
                t.\"RETURN_CLEARING_DATE\" as returnClearingDate,
                t.\"SECURITY_ID\" as securityId,
                t.\"ISIN_NUMBER_ID\" as isinNumberId,
                t.\"TYPE_ID\" as typeId,
                case
                    when s.\"SIDE_ID\" = 'C' then coalesce(t.\"DEPOSITORY_ID_BUY\", t.\"DEPOSITORY_ID\")
                    when s.\"SIDE_ID\" = 'V' then coalesce(t.\"DEPOSITORY_ID_SELL\", t.\"DEPOSITORY_ID\")
                    else t.\"DEPOSITORY_ID\"
                end as depositoryId,
                s.\"CUSTODIAN_ID\" as custodianId,
                s.\"FIC_ADMINISTRATOR_ID\" as ficAdministratorId,
                s.\"INVESTOR_ID\" as investorId,
                s.\"INVESTOR_ACCOUNT_ID\" as investorAccountId,
                case
                    when s.\"SIDE_ID\" = 'C' then t.\"PARTICIPANT_ID_BUY\"
                    when s.\"SIDE_ID\" = 'V' then t.\"PARTICIPANT_ID_SELL\"
                    else t.\"PARTICIPANT_ID_BUY\"
                end as participantId,
                p.\"CODE\" as participantCode,
                trim(i.\"DOCUMENT_NUMBER\") as investorDocumentNumber,
                it.\"CODE\" as investorIdentificationType,
                s.\"REFERENCE_ALLOC_ID\" as referenceAllocId,
                s.\"FRACTION_QUANTITY\" as fractionQuantity,
                s.\"FRACTION_VOLUME\" as fractionVolume,
                s.\"NET_AMOUNT\" as netAmount,
                s.\"COMMISSION_AMOUNT\" as commissionAmount,
                s.\"VAL_TAX_AMOUNT\" as valTaxAmount,
                t.\"PRICE\" as price,
                t.\"REPO_RATE\" as rate,
                t.\"EXIT_INDICATOR_SETTLEMENT\" as indicateExitReturn
            from \"NUANBODB\".\"SETTLEMENT\" s
            join \"NUANBODB\".\"TRADE\" t on t.\"TRADE_ID\" = s.\"TRADE_ID\"
            left join \"NUANBODB\".\"PARTICIPANT\" p on p.\"PARTICIPANT_ID\" = case
                when s.\"SIDE_ID\" = 'C' then t.\"PARTICIPANT_ID_BUY\"
                when s.\"SIDE_ID\" = 'V' then t.\"PARTICIPANT_ID_SELL\"
                else t.\"PARTICIPANT_ID_BUY\"
            end
            left join \"NUANBODB\".\"INVESTOR\" i on i.\"INVESTOR_ID\" = s.\"INVESTOR_ID\"
            left join \"NUANBODB\".\"IDENTIFICATION_TYPE\" it on it.\"IDENTIFICATION_TYPE_ID\" = i.\"IDENTIFICATION_TYPE_ID\"
            where t.\"MARKET_ID\" = :marketId
              and t.\"STATUS_ID\" = :assignedTradeStatusId
                            and s.\"CUSTODIAN_STATUS_ID\" in (:custodianStatusIds)
              and s.\"CUSTODIAN_ID\" is not null
              and s.\"CUSTODIAN_ID\" > 0
            """, nativeQuery = true)
    List<SettlementCandidateProjection> findGroupingCandidates(
            @Param("marketId") String marketId,
            @Param("assignedTradeStatusId") Long assignedTradeStatusId,
                        @Param("custodianStatusIds") Collection<Long> custodianStatusIds);
}
```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/repository/TradeRepository.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.repository;

import com.nubo.operations.custody.automatic.packages.query.api.models.entity.TradeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TradeRepository extends JpaRepository<TradeEntity, Long> {
}
```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/repository/impl/AutomaticCustodianPackagingRepositoryImpl.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.repository.impl;

import com.nubo.operations.custody.automatic.packages.query.api.application.properties.AutomaticPackagingProperties;
import com.nubo.operations.custody.automatic.packages.query.api.models.dto.internal.AutomaticPackageCandidateDto;
import com.nubo.operations.custody.automatic.packages.query.api.models.dto.internal.SettlementUpdateKeyDto;
import com.nubo.operations.custody.automatic.packages.query.api.models.enums.AutomaticCutType;
import com.nubo.operations.custody.automatic.packages.query.api.repository.AutomaticCustodianPackagingRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.util.CollectionUtils;

import java.sql.Date;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.util.List;

@Repository
@RequiredArgsConstructor
@Slf4j
public class AutomaticCustodianPackagingRepositoryImpl implements AutomaticCustodianPackagingRepository {

    private static final List<Long> DEFAULT_INCLUDED_SETTLEMENT_STATUS_IDS = List.of(2L, 9L, 15L);
    private static final List<Long> DEFAULT_EXCLUDED_TRADE_TYPE_IDS = List.of(59L);

    private static final String BASE_QUERY = """
            select
                t."TRADE_ID" as trade_id,
                t."MARKET_ID" as market_id,
                s."UNIQUE_FRACTION_ID" as unique_fraction_id,
                s."FRACTION" as fraction,
                s."SIDE_ID" as side_id,
                t."MATCH_DATE" as match_date,
                t."CLEARING_DATE" as clearing_date,
                t."RETURN_CLEARING_DATE" as return_clearing_date,
                t."SECURITY_ID" as security_id,
                cast(null as varchar) as security_mnemonic, -- TODO: map from "NUANBODB"."SECURITY_TITLE" when the real mnemonic/code column is confirmed.
                coalesce(t."ISIN_NUMBER_ID", isin_fallback."ISIN_NUMBER_ID") as isin_number_id,
                t."TYPE_ID" as type_id,
                case
                    when s."SIDE_ID" = '1' then coalesce(t."DEPOSITORY_ID_BUY", t."DEPOSITORY_ID")
                    when s."SIDE_ID" = '2' then coalesce(t."DEPOSITORY_ID_SELL", t."DEPOSITORY_ID")
                    else null
                end as depository_id,
                s."CUSTODIAN_STATUS_ID" as custodian_status_id,
                s."CUSTODIAN_ID" as custodian_id,
                s."FIC_ADMINISTRATOR_ID" as fic_administrator_id,
                s."INVESTOR_ID" as investor_id,
                s."INVESTOR_ACCOUNT_ID" as investor_account_id,
                case
                    when s."SIDE_ID" = '1' then t."PARTICIPANT_ID_BUY"
                    when s."SIDE_ID" = '2' then t."PARTICIPANT_ID_SELL"
                    else null
                end as participant_id,
                p."CODE" as participant_code,
                trim(i."DOCUMENT_NUMBER") as investor_document_number,
                it."CODE" as investor_identification_type,
                cast(s."REFERENCE_ALLOC_ID" as varchar) as reference_alloc_id,
                nullif(trim(s."REFERENCE_PACKAGE"), '') as reference_package,
                s."FRACTION_QUANTITY" as fraction_quantity,
                s."FRACTION_VOLUME" as fraction_volume,
                s."NET_AMOUNT" as net_amount,
                s."COMMISSION_AMOUNT" as commission_amount,
                s."VAL_TAX_AMOUNT" as val_tax_amount,
                coalesce(t."PRICE", 0) as price,
                coalesce(s."REPO_RATE", t."REPO_RATE", t."REPURCHASE_RATE") as rate,
                t."TOTAL_NET_RETURN" as return_net_amount,
                t."EXIT_INDICATOR_SETTLEMENT" as indicate_exit_return
            from "NUANBODB"."SETTLEMENT" s
            join "NUANBODB"."TRADE" t
                on t."TRADE_ID" = s."TRADE_ID"
                   and t."MARKET_ID" = s."MARKET_ID"
                   and t."MATCH_DATE" = s."MATCH_DATE"
            left join "NUANBODB"."PARTICIPANT" p
                on p."PARTICIPANT_ID" = case
                    when s."SIDE_ID" = '1' then t."PARTICIPANT_ID_BUY"
                    when s."SIDE_ID" = '2' then t."PARTICIPANT_ID_SELL"
                    else null
                end
            left join "NUANBODB"."INVESTOR" i
                on i."INVESTOR_ID" = s."INVESTOR_ID"
            left join "NUANBODB"."IDENTIFICATION_TYPE" it
                on it."IDENTIFICATION_TYPE_ID" = i."IDENTIFICATION_TYPE_ID"
            left join (
                select
                    inum."SECURITY_ID",
                    min(inum."ISIN_NUMBER_ID") as "ISIN_NUMBER_ID"
                from "NUANBODB"."ISIN_NUMBER" inum
                group by inum."SECURITY_ID"
            ) isin_fallback
                on isin_fallback."SECURITY_ID" = t."SECURITY_ID"
            where coalesce(t."CANCELED_STATUS", false) = false
              and coalesce(s."ACTIVE", true) = true
              and s."SIDE_ID" in ('1', '2')
              and s."CUSTODIAN_ID" is not null
              and s."INVESTOR_ID" is not null
              and s."INVESTOR_ACCOUNT_ID" is not null
              and t."TYPE_ID" is not null
              and (
                    s."CUSTODIAN_STATUS_ID" is null
                    or s."CUSTODIAN_STATUS_ID" in (:rejectedCustodianStatusIds)
                  )
              and (
                    case
                        when s."SIDE_ID" = '1' then coalesce(t."DEPOSITORY_ID_BUY", t."DEPOSITORY_ID")
                        when s."SIDE_ID" = '2' then coalesce(t."DEPOSITORY_ID_SELL", t."DEPOSITORY_ID")
                        else null
                    end
                  ) is not null
              and t."CLEARING_DATE" %s :executionDate
            """;
    private static final int SET_BASED_UPDATE_CHUNK_SIZE = 1000;
    private final NamedParameterJdbcTemplate jdbcTemplate;
    private final AutomaticPackagingProperties properties;
    private String lastExecutedSql;

    @Override
    public List<AutomaticPackageCandidateDto> findCandidates(LocalDate executionDate, Boolean sameDaySettlement,
                                                             String cutType) {
        MapSqlParameterSource params = new MapSqlParameterSource()
                .addValue("executionDate", executionDate);
        StringBuilder sql = new StringBuilder(BASE_QUERY.formatted(Boolean.TRUE.equals(sameDaySettlement) ? "=" : ">"));
        boolean firstCut = AutomaticCutType.from(cutType)
                .map(AutomaticCutType::isFirstCut)
                .orElse(false);

        AutomaticPackagingProperties.Candidate candidateProperties = properties.getCandidate();
        List<Long> rejectedCustodianStatusIds = candidateProperties.getRejectedCustodianStatusIds();

        if (CollectionUtils.isEmpty(rejectedCustodianStatusIds)) {
            rejectedCustodianStatusIds = List.of(1074L, 1075L);
        }

        params.addValue("rejectedCustodianStatusIds", rejectedCustodianStatusIds);
        params.addValue("rejectedPackageDetailStatusId", candidateProperties.getRejectedPackageDetailStatusId());
        appendInClause(sql, params, "t.\"STATUS_ID\"", "excludedTradeStatusIds",
                candidateProperties.getExcludedTradeStatusIds(), false);
        List<Long> excludedTradeTypeIds = candidateProperties.getExcludedTradeTypeIds();
        if (CollectionUtils.isEmpty(excludedTradeTypeIds)) {
            excludedTradeTypeIds = DEFAULT_EXCLUDED_TRADE_TYPE_IDS;
        }
        appendInClause(sql, params, "t.\"TYPE_ID\"", "excludedTradeTypeIds", excludedTradeTypeIds, false);
        List<Long> includedSettlementStatusIds = candidateProperties.getIncludedSettlementStatusIds();
        if (CollectionUtils.isEmpty(includedSettlementStatusIds)) {
            includedSettlementStatusIds = DEFAULT_INCLUDED_SETTLEMENT_STATUS_IDS;
        }
        appendInClause(sql, params, "s.\"STATUS_ID\"", "includedSettlementStatusIds",
                includedSettlementStatusIds, true);

        if (candidateProperties.isRequireFinalAssignment()) {
            sql.append("""
                    
                      and (
                            (s."SIDE_ID" = '1' and coalesce(t."FINAL_ASSIGNMENT_MARK_BUY", false) = false)
                            or
                            (s."SIDE_ID" = '2' and coalesce(t."FINAL_ASSIGNMENT_MARK_SELL", false) = false)
                          )
                    """);
        }

        boolean excludeAlreadyPackaged = candidateProperties.isExcludeAlreadyPackaged()
                && shouldSendOnlyNewDetails(AutomaticCutType.from(cutType).orElse(null));

        if (excludeAlreadyPackaged) {
            sql.append("""
                    
                      and not exists (
                            select 1
                            from "NUANBODB"."PACKAGE_DETAIL" pd
                            where pd."TRADE_ID" = s."TRADE_ID"
                                and pd."SIDE_ID" = s."SIDE_ID"
                                and pd."FRACTION" = s."FRACTION"
                                and pd."UNIQUE_FRACTION_ID" = s."UNIQUE_FRACTION_ID"
                                and coalesce(pd."PACKAGE_STATUS_ID", 0) <> :rejectedPackageDetailStatusId
                          )
                    """);
        }

        sql.append("""
                
                order by t."CLEARING_DATE", t."TRADE_ID", s."SIDE_ID", s."FRACTION"
                """);

        this.lastExecutedSql = sql.toString();
        log.info("Automatic packaging SQL executed: {}", this.lastExecutedSql);
        log.info("Automatic packaging params: executionDate={}, sameDaySettlement={}, cutType={}, rejectedCustodianStatusIds={}",
                executionDate, sameDaySettlement, cutType, rejectedCustodianStatusIds);
        return jdbcTemplate.query(sql.toString(), params, new CandidateRowMapper());
    }

    @Override
    public String getLastExecutedSql() {
        return lastExecutedSql;
    }

    @Override
    public int updateSettlementCustodianStatusToTransferred(Long tradeId, String sideId, Long fraction,
                                                            Long uniqueFractionId, Long transferredStatusId,
                                                            String user, String applic, OffsetDateTime date,
                                                            String ip) {
        String sql = """
                update "NUANBODB"."SETTLEMENT"
                   set "CUSTODIAN_STATUS_ID" = :transferredStatusId,
                       "LAST_MODIFY_USER" = :user,
                       "LAST_MODIFY_APPLIC" = :applic,
                       "LAST_MODIFY_DATE" = :date,
                       "LAST_MODIFY_IP" = :ip
                 where "TRADE_ID" = :tradeId
                   and "SIDE_ID" = :sideId
                   and "FRACTION" = :fraction
                   and "UNIQUE_FRACTION_ID" = :uniqueFractionId
                """;
        MapSqlParameterSource params = new MapSqlParameterSource()
                .addValue("transferredStatusId", transferredStatusId)
                .addValue("user", user)
                .addValue("applic", applic)
                .addValue("date", date)
                .addValue("ip", ip)
                .addValue("tradeId", tradeId)
                .addValue("sideId", sideId)
                .addValue("fraction", fraction)
                .addValue("uniqueFractionId", uniqueFractionId);
        return jdbcTemplate.update(sql, params);
    }

    @Override
    public int updateSettlementsCustodianStatusToTransferredBatch(
            List<SettlementUpdateKeyDto> details,
            Long transferredStatusId,
            String user,
            String applic,
            OffsetDateTime date,
            String ip) {
        if (CollectionUtils.isEmpty(details)) {
            return 0;
        }
        int totalUpdated = 0;
        for (int start = 0; start < details.size(); start += SET_BASED_UPDATE_CHUNK_SIZE) {
            int end = Math.min(start + SET_BASED_UPDATE_CHUNK_SIZE, details.size());
            totalUpdated += updateSettlementsCustodianStatusChunk(
                    details.subList(start, end),
                    transferredStatusId,
                    user,
                    applic,
                    date,
                    ip);
        }
        log.info("Query settlement transferred status set-based update completed, details={}, updatedRows={}, chunkSize={}",
                details.size(), totalUpdated, SET_BASED_UPDATE_CHUNK_SIZE);
        return totalUpdated;
    }

    private int updateSettlementsCustodianStatusChunk(
            List<SettlementUpdateKeyDto> details,
            Long transferredStatusId,
            String user,
            String applic,
            OffsetDateTime date,
            String ip) {
        boolean partitionKeys = details.stream().allMatch(detail -> detail.getMarketId() != null && detail.getMatchDate() != null);
        StringBuilder values = new StringBuilder();
        MapSqlParameterSource params = new MapSqlParameterSource()
                .addValue("transferredStatusId", transferredStatusId)
                .addValue("user", user)
                .addValue("applic", applic)
                .addValue("date", date)
                .addValue("ip", ip);

        for (int i = 0; i < details.size(); i++) {
            if (i > 0) {
                values.append(", ");
            }
            values.append("(:tradeId").append(i)
                    .append(", :sideId").append(i)
                    .append(", :fraction").append(i)
                    .append(", :uniqueFractionId").append(i);
            if (partitionKeys) {
                values.append(", cast(:marketId").append(i).append(" as varchar(2))")
                        .append(", cast(:matchDate").append(i).append(" as date)");
                params.addValue("marketId" + i, details.get(i).getMarketId())
                        .addValue("matchDate" + i, details.get(i).getMatchDate());
            }
            values.append(")");
            SettlementUpdateKeyDto detail = details.get(i);
            params.addValue("tradeId" + i, detail.getTradeId())
                    .addValue("sideId" + i, detail.getSideId())
                    .addValue("fraction" + i, detail.getFraction())
                    .addValue("uniqueFractionId" + i, detail.getUniqueFractionId());
        }

        String sql = """
                update "NUANBODB"."SETTLEMENT" s
                   set "CUSTODIAN_STATUS_ID" = :transferredStatusId,
                       "LAST_MODIFY_USER" = :user,
                       "LAST_MODIFY_APPLIC" = :applic,
                       "LAST_MODIFY_DATE" = :date,
                       "LAST_MODIFY_IP" = :ip
                  from (values %s) as v("TRADE_ID", "SIDE_ID", "FRACTION", "UNIQUE_FRACTION_ID"%s)
                 where s."TRADE_ID" = v."TRADE_ID"
                   and s."SIDE_ID" = v."SIDE_ID"
                   and s."FRACTION" = v."FRACTION"
                   and s."UNIQUE_FRACTION_ID" = v."UNIQUE_FRACTION_ID"
                %s
                """.formatted(values, partitionKeys ? ", \"MARKET_ID\", \"MATCH_DATE\"" : "",
                        partitionKeys ? "and s.\"MARKET_ID\" = v.\"MARKET_ID\" and s.\"MATCH_DATE\" = v.\"MATCH_DATE\"" : "");
        return jdbcTemplate.update(sql, params);
    }

    private void appendInClause(StringBuilder sql, MapSqlParameterSource params, String column, String paramName,
                                List<Long> values, boolean include) {
        if (CollectionUtils.isEmpty(values)) {
            return;
        }
        params.addValue(paramName, values);
        sql.append(System.lineSeparator())
                .append("  and ")
                .append(column)
                .append(include ? " in (:" : " not in (:")
                .append(paramName)
                .append(")");
    }

    private boolean shouldSendOnlyNewDetails(AutomaticCutType cutType) {
        if (cutType == null) {
            return false;
        }

        return cutType.isFirstCut() || cutType.isReprocessCut();
    }

    private static class CandidateRowMapper implements RowMapper<AutomaticPackageCandidateDto> {
        private static Long getLong(ResultSet rs, String column) throws SQLException {
            long value = rs.getLong(column);
            return rs.wasNull() ? null : value;
        }

        private static LocalDate getLocalDate(ResultSet rs, String column) throws SQLException {
            Date date = rs.getDate(column);
            return date == null ? null : date.toLocalDate();
        }

        private static Boolean getBoolean(ResultSet rs, String column) throws SQLException {
            boolean value = rs.getBoolean(column);
            return rs.wasNull() ? null : value;
        }

        @Override
        public AutomaticPackageCandidateDto mapRow(ResultSet rs, int rowNum) throws SQLException {
            return AutomaticPackageCandidateDto.builder()
                    .tradeId(getLong(rs, "trade_id"))
                    .marketId(rs.getString("market_id"))
                    .fraction(getLong(rs, "fraction"))
                    .sideId(rs.getString("side_id"))
                    .matchDate(getLocalDate(rs, "match_date"))
                    .clearingDate(getLocalDate(rs, "clearing_date"))
                    .returnClearingDate(getLocalDate(rs, "return_clearing_date"))
                    .securityId(getLong(rs, "security_id"))
                    .securityMnemonic(rs.getString("security_mnemonic"))
                    .isinNumberId(getLong(rs, "isin_number_id"))
                    .typeId(getLong(rs, "type_id"))
                    .depositoryId(rs.getString("depository_id"))
                    .custodianStatusId(getLong(rs, "custodian_status_id"))
                    .custodianId(getLong(rs, "custodian_id"))
                    .ficAdministratorId(getLong(rs, "fic_administrator_id"))
                    .investorId(getLong(rs, "investor_id"))
                    .investorAccountId(getLong(rs, "investor_account_id"))
                    .participantId(getLong(rs, "participant_id"))
                    .participantCode(rs.getString("participant_code"))
                    .investorDocumentNumber(rs.getString("investor_document_number"))
                    .investorIdentificationType(rs.getString("investor_identification_type"))
                    .referenceAllocId(rs.getString("reference_alloc_id"))
                    .referencePackage(rs.getString("reference_package"))
                    .fractionQuantity(rs.getBigDecimal("fraction_quantity"))
                    .fractionVolume(rs.getBigDecimal("fraction_volume"))
                    .netAmount(rs.getBigDecimal("net_amount"))
                    .commissionAmount(rs.getBigDecimal("commission_amount"))
                    .valTaxAmount(rs.getBigDecimal("val_tax_amount"))
                    .price(rs.getBigDecimal("price"))
                    .rate(rs.getBigDecimal("rate"))
                    .returnNetAmount(rs.getBigDecimal("return_net_amount"))
                    .indicateExitReturn(getBoolean(rs, "indicate_exit_return"))
                    .uniqueFractionId(getLong(rs, "unique_fraction_id"))
                    .build();
        }
    }

}

```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/repository/projection/ExistingPackageProjection.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.repository.projection;

import java.math.BigDecimal;
import java.time.LocalDate;

public interface ExistingPackageProjection {

    Long getPackageCustodianId();
    String getPackageNumber();
    Long getSequence();
    String getMarketId();
    LocalDate getPackageDate();
    String getParticipantCode();
    Long getParticipantId();
    Long getInvestorId();
    Long getInvestorAccountId();
    String getInvestorIdentificationType();
    String getInvestorDocumentNumber();
    String getSideId();
    Long getTypeId();
    String getDepositoryId();
    Long getCustodianId();
    Long getFicAdministratorId();
    Long getSecurityId();
    Long getIsinNumberId();
    LocalDate getClearingDate();
    LocalDate getReturnClearingDate();
    BigDecimal getReferenceAllocId();
}
```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/repository/projection/PackageTransferProjection.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.repository.projection;

import java.math.BigDecimal;
import java.time.LocalDate;

public interface PackageTransferProjection {

    Long getPackageCustodianId();
    LocalDate getPackageDate();
    String getParticipantCode();
    Long getSequence();
    String getMarketId();
    String getPackageNumber();
    Long getTradeId();
    String getSideId();
    Long getFraction();
    Long getUniqueFractionId();
    LocalDate getMatchDate();
    LocalDate getClearingDate();
    LocalDate getReturnClearingDate();
    BigDecimal getFractionQuantity();
    BigDecimal getPrice();
    BigDecimal getRate();
    Boolean getIndicateExitReturn();
    Long getCustodianId();
    Long getParticipantId();
}
```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/repository/projection/SettlementCandidateProjection.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.repository.projection;

import java.math.BigDecimal;
import java.time.LocalDate;

public interface SettlementCandidateProjection {

    Long getTradeId();
    Long getUniqueFractionId();
    Integer getFraction();
    String getSideId();
    LocalDate getMatchDate();
    LocalDate getClearingDate();
    LocalDate getReturnClearingDate();
    Long getSecurityId();
    Long getIsinNumberId();
    Long getTypeId();
    String getDepositoryId();
    Long getCustodianId();
    Long getFicAdministratorId();
    Long getInvestorId();
    Long getInvestorAccountId();
    Long getParticipantId();
    String getParticipantCode();
    String getInvestorDocumentNumber();
    String getInvestorIdentificationType();
    BigDecimal getReferenceAllocId();
    BigDecimal getFractionQuantity();
    BigDecimal getFractionVolume();
    BigDecimal getNetAmount();
    BigDecimal getCommissionAmount();
    BigDecimal getValTaxAmount();
    BigDecimal getPrice();
    BigDecimal getRate();
    Boolean getIndicateExitReturn();
}
```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/service/AutomaticCustodianPackagingService.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.service;

import com.nubo.operations.custody.automatic.packages.query.api.models.dto.request.AutomaticCustodianPackageRunRequestDto;
import com.nubo.operations.custody.automatic.packages.query.api.models.dto.response.AutomaticCustodianPackageRunResponseDto;

public interface AutomaticCustodianPackagingService {

    AutomaticCustodianPackageRunResponseDto runAutomaticPackaging(AutomaticCustodianPackageRunRequestDto request);

    AutomaticCustodianPackageRunResponseDto runSameDayAutomaticPackaging(String cutType);

    AutomaticCustodianPackageRunResponseDto runFutureDayAutomaticPackaging(String cutType);

}

```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/service/impl/AutomaticCustodianPackagingServiceImpl.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.service.impl;


import com.nubo.operations.custody.automatic.packages.query.api.application.properties.PropertiesConfig;
import com.nubo.operations.custody.automatic.packages.query.api.application.properties.AutomaticPackagingProperties;
import com.nubo.operations.custody.automatic.packages.query.api.application.properties.PropertiesContext;
import com.nubo.operations.custody.automatic.packages.query.api.client.PackageCustodianCmdClient;
import com.nubo.operations.custody.automatic.packages.query.api.component.AutomaticPackageGrouper;
import com.nubo.operations.custody.automatic.packages.query.api.exception.ServiceException;
import com.nubo.operations.custody.automatic.packages.query.api.exception.error.ErrorCode;
import com.nubo.operations.custody.automatic.packages.query.api.models.dto.internal.AutomaticPackageCandidateDto;
import com.nubo.operations.custody.automatic.packages.query.api.models.dto.request.AutomaticCustodianPackageRunRequestDto;
import com.nubo.operations.custody.automatic.packages.query.api.models.dto.request.PackageCustodianAutomaticInDto;
import com.nubo.operations.custody.automatic.packages.query.api.models.dto.response.AutomaticCustodianPackageRunResponseDto;
import com.nubo.operations.custody.automatic.packages.query.api.models.dto.response.PackageCustodianAutomaticOutDto;
import com.nubo.operations.custody.automatic.packages.query.api.models.enums.AutomaticCutType;
import com.nubo.operations.custody.automatic.packages.query.api.models.enums.SettlementUpdateSource;
import com.nubo.operations.custody.automatic.packages.query.api.repository.AutomaticCustodianPackagingRepository;
import com.nubo.operations.custody.automatic.packages.query.api.service.AutomaticCustodianPackagingService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.StopWatch;

import java.time.Clock;
import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class AutomaticCustodianPackagingServiceImpl implements AutomaticCustodianPackagingService {

    private static final int DEFAULT_CMD_PACKAGE_CHUNK_SIZE = 500;

    private final AutomaticCustodianPackagingRepository repository;
    private final AutomaticPackageGrouper grouper;
    private final PackageCustodianCmdClient cmdClient;
    private final PropertiesConfig propertiesConfig;
    private final AutomaticPackagingProperties automaticPackagingProperties;
    private final SettlementCustodianStatusUpdater settlementCustodianStatusUpdater;
    private final Clock clock;

    @Override
    public AutomaticCustodianPackageRunResponseDto runSameDayAutomaticPackaging(String cutType) {
        AutomaticCutType automaticCutType = validateAutomaticCutType(cutType);
        if (!automaticCutType.isSameDayCut()) {
            throw new ServiceException(ErrorCode.BAD_REQUEST, HttpStatus.BAD_REQUEST);
        }
        return executeAutomaticPackaging(
                toRunRequest(LocalDate.now(clock), automaticCutType.name(), true), true);
    }

    @Override
    public AutomaticCustodianPackageRunResponseDto runFutureDayAutomaticPackaging(String cutType) {
        AutomaticCutType automaticCutType = validateAutomaticCutType(cutType);
        if (!automaticCutType.isFutureDayCut()) {
            throw new ServiceException(ErrorCode.BAD_REQUEST, HttpStatus.BAD_REQUEST);
        }
        return executeAutomaticPackaging(
                toRunRequest(LocalDate.now(clock), automaticCutType.name(), false), true);
    }

    @Override
    public AutomaticCustodianPackageRunResponseDto runAutomaticPackaging(AutomaticCustodianPackageRunRequestDto request) {
        return executeAutomaticPackaging(request, false);
    }

    private AutomaticCustodianPackageRunResponseDto executeAutomaticPackaging(
            AutomaticCustodianPackageRunRequestDto request, boolean chunkedDispatch) {
        StopWatch sw = new StopWatch("automatic-custodian-packaging-query");
        log.info("Start automatic custodian packaging, executionDate={}, cutType={}, sameDaySettlement={}",
                request.getExecutionDate(), request.getCutType(), request.getSameDaySettlement());

        List<AutomaticPackageCandidateDto> candidates = List.of();
        List<AutomaticPackageCandidateDto> validCandidates = new ArrayList<>();
        List<String> discardReasons = List.of();
        PackageCustodianAutomaticInDto cmdRequest = null;
        PackageCustodianAutomaticOutDto cmdResponse = null;
        int candidatesFound = 0;
        int validCandidateCount = 0;
        int packagesBuilt = 0;
        int detailsBuilt = 0;
        int settlementsUpdated = 0;

        try {
        sw.start("validate-cut");
        validateCut(request.getCutType(), request.getSameDaySettlement());
        sw.stop();

        sw.start("find-candidates");
        candidates = repository.findCandidates(
                request.getExecutionDate(), request.getSameDaySettlement(), request.getCutType());
        sw.stop();

        candidatesFound = candidates.size();
        sw.start("validate-candidates");
        AutomaticPackageGrouper.ValidatedCandidates validation = grouper.validateAndGroupCandidates(candidates);
        validCandidates = validation.validCandidates();
        discardReasons = validation.discardReasons();
        validCandidateCount = validCandidates.size();
        sw.stop();

        log.info("Automatic custodian packaging candidates found={}, discarded={}, valid={}",
                candidates.size(), discardReasons.size(), validCandidates.size());

        if (validCandidates.isEmpty()) {
            sw.start("build-response");
            AutomaticCustodianPackageRunResponseDto response = AutomaticCustodianPackageRunResponseDto.builder()
                    .executionDate(request.getExecutionDate())
                    .cutType(request.getCutType())
                    .sameDaySettlement(request.getSameDaySettlement())
                    .candidatesFound(candidatesFound)
                    .candidatesDiscarded(discardReasons.size())
                    .packagesBuilt(0)
                    .detailsBuilt(0)
                    .cmdStatus("NO_CANDIDATES")
                    .cmdProcessedPackages(0)
                    .cmdCreatedPackages(0)
                    .cmdProcessedDetails(0)
                    .cmdCreatedDetails(0)
                    .discardReasons(discardReasons)
                    .build();
            sw.stop();
            return response;
        }

        sw.start("build-cmd-request");
        cmdRequest = grouper.buildRequestFromGroups(
                propertiesConfig.getApiName(),
                request.getExecutionDate(),
                request.getCutType(),
                request.getSameDaySettlement(),
                validation.groupedCandidates());
        // The transfer DTO owns its detail objects; release source rows before serialization/dispatch.
        candidates = List.of();
        validCandidates = List.of();
        validation = null;
        packagesBuilt = cmdRequest.getPackages().size();
        detailsBuilt = Math.toIntExact(cmdRequest.getPackages().stream().mapToLong(pkg -> pkg.getDetails().size()).sum());
        sw.stop();

        log.info("Calling CMD automatic packaging from Query, mode={}, packages={}, details={}, chunkSize={}",
                chunkedDispatch ? "sequential-chunks" : "single-request",
                packagesBuilt,
                detailsBuilt,
                chunkedDispatch ? resolveChunkSize() : "n/a");

        ChunkDispatchResult dispatchResult = chunkedDispatch
                ? dispatchChunks(cmdRequest, sw)
                : dispatchSingle(cmdRequest, sw);
        cmdResponse = dispatchResult.response();
        settlementsUpdated = dispatchResult.settlementsUpdated();

        log.info("End automatic custodian packaging, packagesBuilt={}, detailsBuilt={}, cmdStatus={}",
                packagesBuilt, detailsBuilt, cmdResponse == null ? null : cmdResponse.getStatus());

        sw.start("build-response");
        AutomaticCustodianPackageRunResponseDto response = AutomaticCustodianPackageRunResponseDto.builder()
                .executionDate(request.getExecutionDate())
                .cutType(request.getCutType())
                .sameDaySettlement(request.getSameDaySettlement())
                .candidatesFound(candidatesFound)
                .candidatesDiscarded(discardReasons.size())
                .packagesBuilt(packagesBuilt)
                .detailsBuilt(detailsBuilt)
                .cmdStatus(cmdResponse == null ? "EMPTY_RESPONSE" : cmdResponse.getStatus())
                .cmdProcessedPackages(cmdResponse == null ? 0 : zeroIfNull(cmdResponse.getProcessedPackages()))
                .cmdCreatedPackages(cmdResponse == null ? 0 : zeroIfNull(cmdResponse.getCreatedPackages()))
                .cmdProcessedDetails(cmdResponse == null ? 0 : zeroIfNull(cmdResponse.getProcessedDetails()))
                .cmdCreatedDetails(cmdResponse == null ? 0 : zeroIfNull(cmdResponse.getCreatedDetails()))
                .discardReasons(discardReasons)
                .build();
        sw.stop();
        return response;
        } finally {
            if (sw.isRunning()) {
                sw.stop();
            }
            log.info("Automatic custodian packaging timing: {}", sw.prettyPrint());
            log.info("Automatic custodian packaging summary, candidatesFound={}, validCandidates={}, packagesBuilt={}, detailsBuilt={}, maxDetailsPerPackage={}, cmdStatus={}, settlementsUpdated={}",
                    candidatesFound,
                    validCandidateCount,
                    packagesBuilt,
                    detailsBuilt,
                    automaticPackagingProperties.getMaxDetailsPerPackage(),
                    cmdResponse == null ? null : cmdResponse.getStatus(),
                    settlementsUpdated);
        }
    }

    private void validateCut(String cutType, Boolean sameDaySettlement) {
        AutomaticCutType automaticCutType = AutomaticCutType.from(cutType)
                .orElseThrow(() -> new ServiceException(ErrorCode.BAD_REQUEST, HttpStatus.UNPROCESSABLE_ENTITY));
        if (!automaticCutType.isCompatibleWith(sameDaySettlement)) {
            throw new ServiceException(ErrorCode.BAD_REQUEST, HttpStatus.UNPROCESSABLE_ENTITY);
        }
    }

    private AutomaticCutType validateAutomaticCutType(String cutType) {
        return AutomaticCutType.from(cutType)
                .orElseThrow(() -> new ServiceException(ErrorCode.BAD_REQUEST, HttpStatus.BAD_REQUEST));
    }

    private int zeroIfNull(Integer value) {
        return value == null ? 0 : value;
    }

    private int resolveChunkSize() {
        int configuredChunkSize = automaticPackagingProperties.getCmdPackageChunkSize();
        return configuredChunkSize > 0 ? configuredChunkSize : DEFAULT_CMD_PACKAGE_CHUNK_SIZE;
    }

    private ChunkDispatchResult dispatchChunks(PackageCustodianAutomaticInDto request, StopWatch sw) {
        PackageCustodianAutomaticOutDto aggregateResponse = PackageCustodianAutomaticOutDto.builder()
                .status("SUCCESS")
                .processedPackages(0)
                .createdPackages(0)
                .processedDetails(0)
                .createdDetails(0)
                .build();
        int chunkSize = resolveChunkSize();
        int settlementsUpdated = 0;
        int chunksSent = 0;
        boolean partialFailure = false;

        for (int start = 0; start < request.getPackages().size(); start += chunkSize) {
            int end = (int) Math.min((long) start + chunkSize, request.getPackages().size());
            PackageCustodianAutomaticInDto chunkRequest = copyRequestWithPackages(
                    request, request.getPackages().subList(start, end));
            int chunkNumber = chunksSent + 1;
            log.info("Calling CMD automatic packaging chunk, chunk={}, packages={}, details={}",
                    chunkNumber, chunkRequest.getPackages().size(), countDetails(chunkRequest));

            PackageCustodianAutomaticOutDto chunkResponse;
            sw.start("call-cmd-chunk-" + chunkNumber);
            try {
                chunkResponse = cmdClient.createAutomaticPackages(chunkRequest);
            } finally {
                sw.stop();
            }
            chunksSent++;

            accumulateResponse(aggregateResponse, chunkResponse);
            log.info("CMD automatic packaging chunk response received, chunk={}, status={}, processedPackages={}, processedDetails={}",
                    chunkNumber,
                    chunkResponse == null ? null : chunkResponse.getStatus(),
                    chunkResponse == null ? null : chunkResponse.getProcessedPackages(),
                    chunkResponse == null ? null : chunkResponse.getProcessedDetails());

            if (chunkResponse == null || !"SUCCESS".equalsIgnoreCase(chunkResponse.getStatus())) {
                partialFailure = chunksSent > 1;
                aggregateResponse.setStatus(partialFailure ? "PARTIAL_FAILURE"
                        : chunkResponse == null ? "EMPTY_RESPONSE" : chunkResponse.getStatus());
                log.warn("Automatic packaging stopped after unsuccessful CMD chunk, chunk={}, status={}",
                        chunkNumber, chunkResponse == null ? null : chunkResponse.getStatus());
                break;
            }

            sw.start("update-settlements-chunk-" + chunkNumber);
            try {
                settlementsUpdated = Math.addExact(settlementsUpdated, updateSettlementsAfterSuccess(chunkResponse, chunkRequest));
            } finally {
                sw.stop();
            }
        }

        log.info("Automatic packaging chunks completed, chunksSent={}, settlementsUpdated={}, status={}",
                chunksSent, settlementsUpdated, aggregateResponse.getStatus());
        return new ChunkDispatchResult(aggregateResponse, settlementsUpdated, partialFailure);
    }

    private ChunkDispatchResult dispatchSingle(PackageCustodianAutomaticInDto request, StopWatch sw) {
        PackageCustodianAutomaticOutDto response;
        sw.start("call-cmd");
        try {
            response = cmdClient.createAutomaticPackages(request);
        } finally {
            sw.stop();
        }

        log.info("CMD automatic packaging response received, status={}, processedPackages={}, processedDetails={}",
                response == null ? null : response.getStatus(),
                response == null ? null : response.getProcessedPackages(),
                response == null ? null : response.getProcessedDetails());

        int settlementsUpdated = 0;
        if (response != null && "SUCCESS".equalsIgnoreCase(response.getStatus())) {
            sw.start("update-settlements");
            try {
                settlementsUpdated = updateSettlementsAfterSuccess(response, request);
            } finally {
                sw.stop();
            }
        }
        return new ChunkDispatchResult(response, settlementsUpdated, false);
    }

    private int updateSettlementsAfterSuccess(PackageCustodianAutomaticOutDto cmdResponse,
                                               PackageCustodianAutomaticInDto cmdRequest) {
        AutomaticPackagingProperties.Settlement settlementProperties =
                automaticPackagingProperties.getSettlement();
        if (settlementProperties == null) {
            throw new ServiceException(ErrorCode.BAD_REQUEST, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        if (SettlementUpdateSource.CMD_RESPONSE_LEGACY.equals(settlementProperties.getUpdateSource())) {
            return settlementCustodianStatusUpdater.updateToTransferredFromCmdResponseLegacy(
                    cmdResponse,
                    settlementProperties.getTransferredStatusId(),
                    PropertiesContext.getClientUser(),
                    propertiesConfig.getApiName(),
                    OffsetDateTime.now(),
                    PropertiesContext.getClientIp());
        }
        return settlementCustodianStatusUpdater.updateToTransferredFromRequest(
                cmdRequest,
                settlementProperties.getTransferredStatusId(),
                PropertiesContext.getClientUser(),
                propertiesConfig.getApiName(),
                OffsetDateTime.now(),
                PropertiesContext.getClientIp());
    }

    private PackageCustodianAutomaticInDto copyRequestWithPackages(
            PackageCustodianAutomaticInDto request,
            List<PackageCustodianAutomaticInDto.PackageDto> packages) {
        return PackageCustodianAutomaticInDto.builder()
                .sourceApplication(request.getSourceApplication())
                .executionDate(request.getExecutionDate())
                .cutType(request.getCutType())
                .sameDaySettlement(request.getSameDaySettlement())
                .packages(new ArrayList<>(packages))
                .build();
    }

    private long countDetails(PackageCustodianAutomaticInDto request) {
        if (request == null || request.getPackages() == null) {
            return 0;
        }
        return request.getPackages().stream()
                .filter(pkg -> pkg != null && pkg.getDetails() != null)
                .mapToLong(pkg -> pkg.getDetails().size())
                .sum();
    }

    private void accumulateResponse(PackageCustodianAutomaticOutDto aggregate,
                                    PackageCustodianAutomaticOutDto chunkResponse) {
        if (chunkResponse == null) {
            return;
        }
        aggregate.setProcessedPackages(Math.addExact(aggregate.getProcessedPackages(), zeroIfNull(chunkResponse.getProcessedPackages())));
        aggregate.setCreatedPackages(Math.addExact(aggregate.getCreatedPackages(), zeroIfNull(chunkResponse.getCreatedPackages())));
        aggregate.setProcessedDetails(Math.addExact(aggregate.getProcessedDetails(), zeroIfNull(chunkResponse.getProcessedDetails())));
        aggregate.setCreatedDetails(Math.addExact(aggregate.getCreatedDetails(), zeroIfNull(chunkResponse.getCreatedDetails())));
    }

    private record ChunkDispatchResult(
            PackageCustodianAutomaticOutDto response,
            int settlementsUpdated,
            boolean partialFailure) {
    }

    private AutomaticCustodianPackageRunRequestDto toRunRequest(
            LocalDate executionDate, String cutType, boolean sameDaySettlement) {
        return AutomaticCustodianPackageRunRequestDto.builder()
                .executionDate(executionDate)
                .cutType(cutType)
                .sameDaySettlement(sameDaySettlement)
                .build();
    }

}

```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/service/impl/SettlementCustodianStatusUpdater.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.service.impl;

import com.nubo.operations.custody.automatic.packages.query.api.models.dto.internal.SettlementUpdateKeyDto;
import com.nubo.operations.custody.automatic.packages.query.api.models.dto.request.PackageCustodianAutomaticInDto;
import com.nubo.operations.custody.automatic.packages.query.api.models.dto.response.PackageCustodianAutomaticOutDto;
import com.nubo.operations.custody.automatic.packages.query.api.repository.AutomaticCustodianPackagingRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.OffsetDateTime;
import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
@Slf4j
public class SettlementCustodianStatusUpdater {

    private final AutomaticCustodianPackagingRepository repository;

    @Transactional
    public int updateToTransferredFromRequest(PackageCustodianAutomaticInDto cmdRequest,
                                              Long transferredStatusId,
                                              String user,
                                              String applic,
                                              OffsetDateTime date,
                                              String ip) {
        List<SettlementUpdateKeyDto> details = extractDetailsFromRequest(cmdRequest);
        if (details.isEmpty()) {
            log.warn("CMD SUCCESS response received but Query request does not contain details. SETTLEMENT will not be updated");
            return 0;
        }
        return repository.updateSettlementsCustodianStatusToTransferredBatch(
                details,
                transferredStatusId,
                user,
                applic,
                date,
                ip);
    }

    @Transactional
    public int updateToTransferredFromCmdResponseLegacy(PackageCustodianAutomaticOutDto cmdResponse,
                                                        Long transferredStatusId,
                                                        String user,
                                                        String applic,
                                                        OffsetDateTime date,
                                                        String ip) {
        if (cmdResponse.getProcessedDetailsList() == null || cmdResponse.getProcessedDetailsList().isEmpty()) {
            log.warn("CMD SUCCESS response does not contain processedDetailsList. SETTLEMENT will not be updated");
            return 0;
        }
        return repository.updateSettlementsCustodianStatusToTransferredBatch(
                cmdResponse.getProcessedDetailsList().stream()
                        .filter(Objects::nonNull)
                        .map(detail -> SettlementUpdateKeyDto.builder()
                                .tradeId(detail.getTradeId())
                                .sideId(detail.getSideId())
                                .fraction(detail.getFraction())
                                .uniqueFractionId(detail.getUniqueFractionId())
                                .build())
                        .filter(this::isCompleteKey)
                        .distinct()
                        .toList(),
                transferredStatusId,
                user,
                applic,
                date,
                ip);
    }

    private List<SettlementUpdateKeyDto> extractDetailsFromRequest(PackageCustodianAutomaticInDto cmdRequest) {
        if (cmdRequest == null || cmdRequest.getPackages() == null || cmdRequest.getPackages().isEmpty()) {
            return List.of();
        }
        return cmdRequest.getPackages().stream()
                .filter(Objects::nonNull)
                .filter(pkg -> pkg.getDetails() != null)
                .flatMap(pkg -> pkg.getDetails().stream().filter(Objects::nonNull)
                        .map(detail -> SettlementUpdateKeyDto.builder()
                                .tradeId(detail.getTradeId()).sideId(detail.getSideId())
                                .fraction(detail.getFraction()).uniqueFractionId(detail.getUniqueFractionId())
                                .marketId(pkg.getMarketId()).matchDate(detail.getMatchDate()).build()))
                .filter(this::isCompleteKey)
                .distinct()
                .toList();
    }

    private boolean isCompleteKey(SettlementUpdateKeyDto key) {
        return key.getTradeId() != null
                && key.getSideId() != null
                && key.getFraction() != null
                && key.getUniqueFractionId() != null;
    }
}

```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/web/controller/AutomaticCustodianPackagingRestController.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.web.controller;

import com.nubo.operations.custody.automatic.packages.query.api.models.dto.request.AutomaticCustodianPackageRunRequestDto;
import com.nubo.operations.custody.automatic.packages.query.api.models.dto.response.AutomaticCustodianPackageRunResponseDto;
import com.nubo.operations.custody.automatic.packages.query.api.service.AutomaticCustodianPackagingService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "Automatic Custodian Packages")
@RestController
@RequestMapping("/{version}/automatic-custodian-packages")
@RequiredArgsConstructor
public class AutomaticCustodianPackagingRestController {

    private final AutomaticCustodianPackagingService service;

    @Operation(summary = "Run automatic custodian packaging",
            description = "Query candidate operations, group them and call packages custody CMD")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = AutomaticCustodianPackageRunResponseDto.class)))})
    @PostMapping("/run")
    public ResponseEntity<AutomaticCustodianPackageRunResponseDto> runAutomaticPackaging(
            @Valid @RequestBody AutomaticCustodianPackageRunRequestDto request) {
        return ResponseEntity.ok(service.runAutomaticPackaging(request));
    }

    @Operation(summary = "Run same-day automatic custodian packaging",
            description = "Runs automatic custodian packaging using the current business date and the supplied same-day cut type")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = AutomaticCustodianPackageRunResponseDto.class))),
            @ApiResponse(responseCode = "400", description = "Invalid or incompatible cut type")})
    @PostMapping("/same-day/run/{cutType}")
    public ResponseEntity<AutomaticCustodianPackageRunResponseDto> runSameDayAutomaticPackaging(
            @Parameter(description = "Automatic cut type", required = true, example = "SAME_DAY_CUT_1")
            @PathVariable("cutType") String cutType) {
        return ResponseEntity.ok(service.runSameDayAutomaticPackaging(cutType));
    }


    @Operation(summary = "Run future-day automatic custodian packaging",
            description = "Runs automatic custodian packaging using the current business date and the supplied future-day cut type")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = AutomaticCustodianPackageRunResponseDto.class))),
            @ApiResponse(responseCode = "400", description = "Invalid or incompatible cut type")})
    @PostMapping("/future-day/run/{cutType}")
    public ResponseEntity<AutomaticCustodianPackageRunResponseDto> runFutureDayAutomaticPackaging(
            @Parameter(description = "Automatic cut type", required = true, example = "FUTURE_DAY_CUT_1")
            @PathVariable("cutType") String cutType) {
        return ResponseEntity.ok(service.runFutureDayAutomaticPackaging(cutType));
    }

}

```
