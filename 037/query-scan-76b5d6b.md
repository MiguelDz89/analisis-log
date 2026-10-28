# query-scan-76b5d6b

Código Java de producción y configuraciones, sin tests. Cada sección contiene el archivo original completo y su ruta. Captura: 28/10/2026.

## Índice

1. `.mvn/wrapper/maven-wrapper.properties`
2. `mvnw`
3. `mvnw.cmd`
4. `pom.xml`
5. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/OperationsCustodyAutomaticPackagesQueryApiApplication.java`
6. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/application/config/SwaggerConfig.java`
7. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/application/config/WebConfig.java`
8. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/application/context/GlobalContext.java`
9. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/application/database/NamingStrategyConfig.java`
10. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/application/database/UpperNamingConfig.java`
11. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/application/filters/GlobalFilter.java`
12. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/application/interceptors/GlobalInterceptor.java`
13. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/application/properties/PropertiesConfig.java`
14. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/application/properties/PropertiesContext.java`
15. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/application/util/ApplicationUtils.java`
16. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/application/util/RestClientUtils.java`
17. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/exception/ClientException.java`
18. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/exception/ServiceException.java`
19. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/exception/error/ErrorCode.java`
20. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/exception/error/ErrorResponse.java`
21. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/exception/error/ErrorValidation.java`
22. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/exception/handler/GlobalExceptionHandler.java`
23. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/helpers/MapperPageUtil.java`
24. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/helpers/MapperUtil.java`
25. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/dto/request/PackageGroupingRequestDto.java`
26. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/dto/request/PackageTransferRequestDto.java`
27. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/dto/response/PackageFractionReferenceDto.java`
28. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/dto/response/PackageGroupingResponseDto.java`
29. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/dto/response/PackageTransferResponseDto.java`
30. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/dto/response/PageResponseOutDto.java`
31. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/entity/PackageCustodianEntity.java`
32. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/entity/PackageCustodianHistoryEntity.java`
33. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/entity/PackageCustodianHistoryId.java`
34. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/entity/PackageCustodianId.java`
35. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/entity/PackageDetailEntity.java`
36. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/entity/PackageDetailHistoryEntity.java`
37. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/entity/PackageDetailHistoryId.java`
38. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/entity/PackageDetailId.java`
39. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/entity/SettlementEntity.java`
40. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/entity/SettlementId.java`
41. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/entity/TradeEntity.java`
42. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/enums/PropertiesEnum.java`
43. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/enums/VersionApiEnum.java`
44. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/repository/PackageCustodianHistoryRepository.java`
45. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/repository/PackageCustodianRepository.java`
46. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/repository/PackageDetailHistoryRepository.java`
47. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/repository/PackageDetailRepository.java`
48. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/repository/SettlementRepository.java`
49. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/repository/TradeRepository.java`
50. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/repository/projection/ExistingPackageProjection.java`
51. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/repository/projection/PackageTransferProjection.java`
52. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/repository/projection/SettlementCandidateProjection.java`
53. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/service/AutomaticPackageService.java`
54. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/service/impl/AutomaticPackageServiceImpl.java`
55. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/web/controller/CustodianAutomaticPackageController.java`
56. `src/main/resources/application-dev.yml`
57. `src/main/resources/application-local.yml`
58. `src/main/resources/application-prod.yml`
59. `src/main/resources/application-qa.yml`
60. `src/main/resources/application-uat.yml`
61. `src/main/resources/application.yml`
62. `src/main/resources/banner.txt`
63. `src/main/resources/log/JsonEventLayout_error.json`
64. `src/main/resources/log/JsonEventLayout_info.json`
65. `src/main/resources/log/JsonEventLayout_trace.json`
66. `src/main/resources/log/log4j2-prod.properties`
67. `src/main/resources/log/log4j2.properties`

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
        <version>3.5.15</version>
        <relativePath/>
    </parent>
    <groupId>com.nubo.operations.custody.automatic.packages.query.api</groupId>
    <artifactId>operations-custody-automatic-packages-query-api</artifactId>
    <version>0.1.0</version>
    <name>${project.artifactId}</name>
    <description>Operations Custody Automatic Packages Query API</description>

    <properties>
        <java.version>17</java.version>
        <spring.port>8080</spring.port>
        <test.skip>false</test.skip>

        <datasource.url.application.name>ApplicationName=${project.artifactId}</datasource.url.application.name>
        <hikari.pool.name>${project.artifactId}-pool</hikari.pool.name>

        <!-- Vulnerability fixes / dependency alignment -->
        <spring-framework.version>6.2.19</spring-framework.version>
        <jackson-bom.version>2.22.0</jackson-bom.version>
        <log4j2.version>2.26.0</log4j2.version>
        <tomcat.version>10.1.55</tomcat.version>
        <postgresql.version>42.7.11</postgresql.version>
        <commons-lang3.version>3.18.0</commons-lang3.version>
        <springdoc-openapi.version>2.8.16</springdoc-openapi.version>
        <gson.version>2.13.2</gson.version>
        <xmlunit.version>2.12.0</xmlunit.version>
        <jacoco.version>0.8.12</jacoco.version>
    </properties>


    <dependencyManagement>
        <dependencies>

            <!-- Align all Jackson modules: jackson-core, jackson-databind, jackson-annotations, etc. -->
            <dependency>
                <groupId>com.fasterxml.jackson</groupId>
                <artifactId>jackson-bom</artifactId>
                <version>${jackson-bom.version}</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>

            <!-- Align all Log4j artifacts -->
            <dependency>
                <groupId>org.apache.logging.log4j</groupId>
                <artifactId>log4j-bom</artifactId>
                <version>${log4j2.version}</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>

            <!-- Force patched commons-lang3 -->
            <dependency>
                <groupId>org.apache.commons</groupId>
                <artifactId>commons-lang3</artifactId>
                <version>${commons-lang3.version}</version>
            </dependency>

            <!-- Force patched Gson -->
            <dependency>
                <groupId>com.google.code.gson</groupId>
                <artifactId>gson</artifactId>
                <version>${gson.version}</version>
            </dependency>

            <!-- Force patched XMLUnit for tests -->
            <dependency>
                <groupId>org.xmlunit</groupId>
                <artifactId>xmlunit-core</artifactId>
                <version>${xmlunit.version}</version>
            </dependency>

        </dependencies>
    </dependencyManagement>

    <dependencies>

        <!-- Web -->
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

        <!-- Commons -->
        <dependency>
            <groupId>org.apache.commons</groupId>
            <artifactId>commons-lang3</artifactId>
        </dependency>

        <!-- Logging with Log4j2 -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-log4j2</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-jcl</artifactId>
        </dependency>

        <dependency>
            <groupId>org.apache.logging.log4j</groupId>
            <artifactId>log4j-spring-boot</artifactId>
        </dependency>

        <dependency>
            <groupId>org.apache.logging.log4j</groupId>
            <artifactId>log4j-layout-template-json</artifactId>
            <scope>runtime</scope>
        </dependency>

        <!-- Lombok -->
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

        <!-- Swagger / OpenAPI -->
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

        <!-- JSON -->
        <dependency>
            <groupId>com.google.code.gson</groupId>
            <artifactId>gson</artifactId>
        </dependency>

        <!-- Test -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
            <exclusions>
                <exclusion>
                    <groupId>org.xmlunit</groupId>
                    <artifactId>xmlunit-core</artifactId>
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
                                <exclude>**/OperationsCustodyAutomaticPackagesQueryApiApplication.class</exclude>
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

    @Value("${client.nubo.url-custodio-aut-packages}")
    private String urlCustodioAutPackages;

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
        if (!ObjectUtils.isEmpty(exception.getCause())) {
            String message = exception.getCause().getMessage();
            errorResponseResponseEntity = this.buildClientErrorResponse(httpStatus, exception.getErrorCode(), message);
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
        return null;
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

    @Column(name = "\"CUSTODIAN_STATUS_ID\"", nullable = false)
    private Long custodianStatusId;

    @Column(name = "\"CUSTODIAN_ID\"", nullable = false)
    private Long custodianId;

    @Column(name = "\"FIC_ADMINISTRATOR_ID\"", nullable = false)
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

    @Column(name = "\"FIC_ADMINISTRATOR_ID\"", nullable = false)
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

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/service/AutomaticPackageService.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.service;

import com.nubo.operations.custody.automatic.packages.query.api.models.dto.request.PackageGroupingRequestDto;
import com.nubo.operations.custody.automatic.packages.query.api.models.dto.request.PackageTransferRequestDto;
import com.nubo.operations.custody.automatic.packages.query.api.models.dto.response.PackageGroupingResponseDto;
import com.nubo.operations.custody.automatic.packages.query.api.models.dto.response.PackageTransferResponseDto;
import java.util.List;

public interface AutomaticPackageService {

    List<PackageGroupingResponseDto> evaluateGrouping(PackageGroupingRequestDto request);

    PackageTransferResponseDto transferPackages(PackageTransferRequestDto request);
}
```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/service/impl/AutomaticPackageServiceImpl.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.service.impl;

import com.nubo.operations.custody.automatic.packages.query.api.exception.ServiceException;
import com.nubo.operations.custody.automatic.packages.query.api.exception.error.ErrorCode;
import com.nubo.operations.custody.automatic.packages.query.api.models.dto.request.PackageGroupingRequestDto;
import com.nubo.operations.custody.automatic.packages.query.api.models.dto.request.PackageTransferRequestDto;
import com.nubo.operations.custody.automatic.packages.query.api.models.dto.response.PackageFractionReferenceDto;
import com.nubo.operations.custody.automatic.packages.query.api.models.dto.response.PackageGroupingResponseDto;
import com.nubo.operations.custody.automatic.packages.query.api.models.dto.response.PackageTransferResponseDto;
import com.nubo.operations.custody.automatic.packages.query.api.models.entity.PackageCustodianEntity;
import com.nubo.operations.custody.automatic.packages.query.api.models.entity.PackageCustodianHistoryEntity;
import com.nubo.operations.custody.automatic.packages.query.api.models.entity.PackageDetailHistoryEntity;
import com.nubo.operations.custody.automatic.packages.query.api.models.entity.SettlementEntity;
import com.nubo.operations.custody.automatic.packages.query.api.models.entity.SettlementId;
import com.nubo.operations.custody.automatic.packages.query.api.repository.PackageCustodianHistoryRepository;
import com.nubo.operations.custody.automatic.packages.query.api.repository.PackageCustodianRepository;
import com.nubo.operations.custody.automatic.packages.query.api.repository.PackageDetailHistoryRepository;
import com.nubo.operations.custody.automatic.packages.query.api.repository.PackageDetailRepository;
import com.nubo.operations.custody.automatic.packages.query.api.repository.SettlementRepository;
import com.nubo.operations.custody.automatic.packages.query.api.repository.projection.ExistingPackageProjection;
import com.nubo.operations.custody.automatic.packages.query.api.repository.projection.PackageTransferProjection;
import com.nubo.operations.custody.automatic.packages.query.api.repository.projection.SettlementCandidateProjection;
import com.nubo.operations.custody.automatic.packages.query.api.service.AutomaticPackageService;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.OffsetDateTime;
import java.time.ZoneOffset;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Comparator;
import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class AutomaticPackageServiceImpl implements AutomaticPackageService {

    private static final ZoneOffset BUSINESS_OFFSET = ZoneOffset.ofHours(-5);
    private static final DateTimeFormatter PACKAGE_DATE_FORMAT = DateTimeFormatter.ofPattern("ddMMyyyy");
    private static final LocalTime TODAY_FIRST_CUT = LocalTime.of(8, 30);
    private static final LocalTime TODAY_SECOND_CUT = LocalTime.of(10, 30);
    private static final LocalTime FUTURE_FIRST_CUT = LocalTime.of(10, 0);
    private static final LocalTime FUTURE_SECOND_CUT = LocalTime.of(15, 0);

    private final SettlementRepository settlementRepository;
    private final PackageCustodianRepository packageCustodianRepository;
    private final PackageDetailRepository packageDetailRepository;
    private final PackageCustodianHistoryRepository packageCustodianHistoryRepository;
    private final PackageDetailHistoryRepository packageDetailHistoryRepository;

    @Override
    @Transactional(readOnly = true)
    public List<PackageGroupingResponseDto> evaluateGrouping(PackageGroupingRequestDto request) {
        validateGroupingRequest(request);

        OffsetDateTime evaluationUtc = request.evaluationTimestampUtc() != null
                ? request.evaluationTimestampUtc().withOffsetSameInstant(ZoneOffset.UTC)
                : OffsetDateTime.now(ZoneOffset.UTC);
        LocalDate packageDate = evaluationUtc.atZoneSameInstant(BUSINESS_OFFSET).toLocalDate();
        LocalTime currentBusinessTime = evaluationUtc.atZoneSameInstant(BUSINESS_OFFSET).toLocalTime();

        List<CandidateRow> eligibleCandidates = settlementRepository.findGroupingCandidates(
                request.marketId(), request.assignedTradeStatusId(), request.custodianStatusIds())
                .stream()
                .map(CandidateRow::from)
                .filter(candidate -> reachedCut(candidate.clearingDate(), packageDate, currentBusinessTime) != null)
                .sorted(Comparator.comparing(CandidateRow::clearingDate)
                        .thenComparing(CandidateRow::participantCode, Comparator.nullsLast(String::compareTo))
                        .thenComparing(CandidateRow::tradeId)
                        .thenComparing(CandidateRow::fraction))
                .toList();

        if (eligibleCandidates.isEmpty()) {
            return List.of();
        }

        Set<CandidateIdentity> individualizedFractions = resolveIndividualizedFractions(eligibleCandidates);
        Map<BaseGroupingKey, ExistingPackageProjection> reusablePackages = packageCustodianRepository
                .findReusablePackages(request.marketId(), packageDate)
                .stream()
                .collect(Collectors.toMap(this::toBaseKey, projection -> projection, (left, right) -> left));

        long nextSequence = safeSequence(packageCustodianRepository.findMaxSequenceByMarketAndDate(
                request.marketId(), packageDate));

        Map<FinalGroupingKey, List<CandidateRow>> buckets = new LinkedHashMap<>();
        for (CandidateRow candidate : eligibleCandidates) {
            BaseGroupingKey baseKey = toBaseKey(candidate);
            boolean individual = individualizedFractions.contains(new CandidateIdentity(
                    candidate.tradeId(), candidate.sideId(), candidate.fraction(), candidate.uniqueFractionId()));
            FinalGroupingKey finalKey = new FinalGroupingKey(baseKey, individual ? candidate.uniqueFractionId() : null);
            buckets.computeIfAbsent(finalKey, ignored -> new ArrayList<>()).add(candidate);
        }

        List<PackageGroupingResponseDto> response = new ArrayList<>();
        for (Map.Entry<FinalGroupingKey, List<CandidateRow>> entry : buckets.entrySet()) {
            FinalGroupingKey finalKey = entry.getKey();
            List<CandidateRow> group = entry.getValue();
            CandidateRow sample = group.get(0);
            ExistingPackageProjection reusable = finalKey.individualUniqueFractionId() == null
                    ? reusablePackages.get(finalKey.baseKey())
                    : null;

            Long packageCustodianId = reusable != null ? reusable.getPackageCustodianId() : null;
            Long sequence = reusable != null ? reusable.getSequence() : ++nextSequence;
            String packageNumber = reusable != null
                    ? reusable.getPackageNumber()
                    : generatePackageNumber(packageDate, sample.participantCode(), sample.typeId(), sequence);

            response.add(new PackageGroupingResponseDto(
                    packageCustodianId,
                    packageNumber,
                    sequence,
                    request.marketId(),
                    packageDate,
                    Objects.requireNonNull(reachedCut(sample.clearingDate(), packageDate, currentBusinessTime)),
                    reusable != null,
                    sample.participantCode(),
                    sample.participantId(),
                    sample.investorId(),
                    sample.investorAccountId(),
                    sample.investorIdentificationType(),
                    sample.investorDocumentNumber(),
                    sample.sideId(),
                    sample.typeId(),
                    sample.depositoryId(),
                    sample.custodianId(),
                    sample.ficAdministratorId(),
                    sample.securityId(),
                    sample.isinNumberId(),
                    sample.clearingDate(),
                    sample.returnClearingDate(),
                    sample.referenceAllocId() != null ? sample.referenceAllocId().toPlainString() : null,
                    sum(group, CandidateRow::fractionQuantity),
                    sum(group, CandidateRow::fractionVolume),
                    sum(group, CandidateRow::netAmount),
                    sum(group, CandidateRow::commissionAmount),
                    sum(group, CandidateRow::valTaxAmount),
                    average(group, CandidateRow::price),
                    average(group, CandidateRow::rate),
                    average(sum(group, CandidateRow::fractionVolume), group.size()),
                    group.stream()
                            .map(item -> new PackageFractionReferenceDto(
                                    item.tradeId(), item.fraction(), item.sideId(), item.uniqueFractionId()))
                            .toList()));
        }

        return response;
    }

    @Override
    @Transactional
    public PackageTransferResponseDto transferPackages(PackageTransferRequestDto request) {
        if (request.packageCustodianIds() == null || request.packageCustodianIds().isEmpty()) {
            throw new ServiceException(ErrorCode.BAD_REQUEST, HttpStatus.BAD_REQUEST);
        }

        List<PackageCustodianEntity> packages = packageCustodianRepository.findByPackageCustodianIdIn(request.packageCustodianIds());
        if (packages.isEmpty()) {
            throw new ServiceException(ErrorCode.NOT_FOUND, HttpStatus.NOT_FOUND);
        }

        List<PackageTransferProjection> transferRows = packageDetailRepository.findTransferRows(request.packageCustodianIds());
        if (transferRows.isEmpty()) {
            throw new ServiceException(ErrorCode.NOT_FOUND, HttpStatus.NOT_FOUND);
        }

        LocalDateTime auditDateTime = LocalDateTime.now(BUSINESS_OFFSET);
        OffsetDateTime settlementAuditDateTime = OffsetDateTime.now(ZoneOffset.UTC);

        for (PackageCustodianEntity packageEntity : packages) {
            if (!Objects.equals(packageEntity.getCustodianStatusId(), request.sourceCustodianStatusId())) {
                throw new ServiceException(ErrorCode.BAD_REQUEST, HttpStatus.BAD_REQUEST);
            }
            packageEntity.setCustodianStatusId(request.targetCustodianStatusId());
            packageEntity.setLastModifyUser(request.user());
            packageEntity.setLastModifyApplic(request.application());
            packageEntity.setLastModifyIp(request.ip());
            packageEntity.setLastModifyDate(auditDateTime);
        }

        Map<SettlementId, SettlementEntity> settlementsById = settlementRepository.findAllById(
                        transferRows.stream()
                                .map(row -> new SettlementId(row.getTradeId(), row.getFraction().intValue(), row.getSideId()))
                                .toList())
                .stream()
                .collect(Collectors.toMap(
                        settlement -> new SettlementId(settlement.getTradeId(), settlement.getFraction(), settlement.getSideId()),
                        settlement -> settlement));

        List<PackageCustodianHistoryEntity> packageHistories = new ArrayList<>();
        List<PackageDetailHistoryEntity> detailHistories = new ArrayList<>();

        for (PackageTransferProjection row : transferRows) {
            SettlementId settlementId = new SettlementId(row.getTradeId(), row.getFraction().intValue(), row.getSideId());
            SettlementEntity settlement = settlementsById.get(settlementId);
            if (settlement == null) {
                throw new ServiceException(ErrorCode.NOT_FOUND, HttpStatus.NOT_FOUND);
            }
            settlement.setStatusId(request.settlementTransferStatusId());
            settlement.setCustodianStatusId(request.targetCustodianStatusId());
            settlement.setLastModifyUser(request.user());
            settlement.setLastModifyApplic(request.application());
            settlement.setLastModifyIp(request.ip());
            settlement.setLastModifyDate(settlementAuditDateTime);

            detailHistories.add(PackageDetailHistoryEntity.builder()
                    .packageCustodianId(row.getPackageCustodianId())
                    .packageDate(row.getPackageDate())
                    .participantCode(row.getParticipantCode())
                    .sequence(row.getSequence())
                    .marketId(row.getMarketId())
                    .packageNumber(row.getPackageNumber())
                    .packageEventId(null)
                    .statusTime(auditDateTime)
                    .tradeId(row.getTradeId())
                    .sideId(row.getSideId())
                    .fraction(row.getFraction())
                    .uniqueFractionId(row.getUniqueFractionId())
                    .matchDate(row.getMatchDate())
                    .clearingDate(row.getClearingDate())
                    .returnClearingDate(row.getReturnClearingDate())
                    .fractionQuantity(row.getFractionQuantity())
                    .price(row.getPrice())
                    .rate(row.getRate())
                    .indicateExitReturn(row.getIndicateExitReturn())
                    .custodianId(row.getCustodianId())
                    .participantId(row.getParticipantId())
                    .lastModifyUser(request.user())
                    .lastModifyApplic(request.application())
                    .lastModifyDate(auditDateTime)
                    .lastModifyIp(request.ip())
                    .build());
        }

        for (PackageCustodianEntity packageEntity : packages) {
            packageHistories.add(PackageCustodianHistoryEntity.builder()
                    .packageCustodianId(packageEntity.getPackageCustodianId())
                    .packageDate(packageEntity.getPackageDate())
                    .participantCode(packageEntity.getParticipantCode())
                    .sequence(packageEntity.getSequence())
                    .marketId(packageEntity.getMarketId())
                    .codeScb(packageEntity.getCodeScb())
                    .packageNumber(packageEntity.getPackageNumber())
                    .sideId(packageEntity.getSideId())
                    .investorId(packageEntity.getInvestorId())
                    .generatingParticipantId(packageEntity.getParticipantId())
                    .eventTime(auditDateTime)
                    .investorAccountId(packageEntity.getInvestorAccountId())
                    .custodianStatusId(packageEntity.getCustodianStatusId())
                    .custodianId(packageEntity.getCustodianId())
                    .ficAdministratorId(packageEntity.getFicAdministratorId())
                    .rejectionReasonId(null)
                    .totalFractionQuantity(packageEntity.getTotalFractionQuantity())
                    .totalFractionVolume(packageEntity.getTotalFractionVolume())
                    .totalNetAmount(packageEntity.getTotalNetAmount())
                    .totalCommissionAmount(packageEntity.getTotalCommissionAmount())
                    .totalValTaxAmount(packageEntity.getTotalValTaxAmount())
                    .averagePrice(packageEntity.getAveragePrice())
                    .clearingDate(packageEntity.getClearingDate())
                    .returnClearingDate(packageEntity.getReturnClearingDate())
                    .averageFractionVolume(packageEntity.getAverageFractionVolume())
                    .averageRate(packageEntity.getAverageRate())
                    .returnNetAmount(packageEntity.getReturnNetAmount())
                    .lastModifyUser(request.user())
                    .lastModifyApplic(request.application())
                    .lastModifyDate(auditDateTime)
                    .lastModifyIp(request.ip())
                    .build());
        }

        settlementRepository.saveAll(settlementsById.values());
        packageCustodianRepository.saveAll(packages);
        packageCustodianHistoryRepository.saveAll(packageHistories);
        packageDetailHistoryRepository.saveAll(detailHistories);

        return new PackageTransferResponseDto(packages.size(), settlementsById.size(), request.packageCustodianIds());
    }

    private void validateGroupingRequest(PackageGroupingRequestDto request) {
        if (request.marketId() == null || request.marketId().isBlank()
            || request.assignedTradeStatusId() == null
            || request.custodianStatusIds() == null
            || request.custodianStatusIds().isEmpty()) {
            throw new ServiceException(ErrorCode.BAD_REQUEST, HttpStatus.BAD_REQUEST);
        }
    }

    private Set<CandidateIdentity> resolveIndividualizedFractions(List<CandidateRow> candidates) {
        Map<TradeSideKey, List<CandidateRow>> byTradeSide = candidates.stream()
                .collect(Collectors.groupingBy(candidate -> new TradeSideKey(candidate.tradeId(), candidate.sideId())));
        Set<CandidateIdentity> individualized = new HashSet<>();
        for (List<CandidateRow> fractions : byTradeSide.values()) {
            if (fractions.size() <= 1) {
                continue;
            }
            long distinctKeys = fractions.stream().map(this::toBaseKey).distinct().count();
            if (distinctKeys > 1) {
                fractions.forEach(candidate -> individualized.add(new CandidateIdentity(
                        candidate.tradeId(), candidate.sideId(), candidate.fraction(), candidate.uniqueFractionId())));
            }
        }
        return individualized;
    }

    private BaseGroupingKey toBaseKey(CandidateRow row) {
        return new BaseGroupingKey(
                row.clearingDate(),
                row.returnClearingDate(),
                row.securityId(),
                row.isinNumberId(),
                normalize(row.investorIdentificationType()),
                normalize(row.investorDocumentNumber()),
                row.sideId(),
                row.typeId(),
                row.depositoryId(),
                row.custodianId(),
                row.participantId(),
                row.investorId(),
                row.investorAccountId(),
                row.ficAdministratorId(),
                row.referenceAllocId());
    }

    private BaseGroupingKey toBaseKey(ExistingPackageProjection projection) {
        return new BaseGroupingKey(
                projection.getClearingDate(),
                projection.getReturnClearingDate(),
                projection.getSecurityId(),
                projection.getIsinNumberId(),
                normalize(projection.getInvestorIdentificationType()),
                normalize(projection.getInvestorDocumentNumber()),
                projection.getSideId(),
                projection.getTypeId(),
                projection.getDepositoryId(),
                projection.getCustodianId(),
                projection.getParticipantId(),
                projection.getInvestorId(),
                projection.getInvestorAccountId(),
                projection.getFicAdministratorId(),
                projection.getReferenceAllocId());
    }

    private LocalTime reachedCut(LocalDate clearingDate, LocalDate businessDate, LocalTime currentBusinessTime) {
        LocalTime firstCut = Objects.equals(clearingDate, businessDate) ? TODAY_FIRST_CUT : FUTURE_FIRST_CUT;
        LocalTime secondCut = Objects.equals(clearingDate, businessDate) ? TODAY_SECOND_CUT : FUTURE_SECOND_CUT;
        if (!currentBusinessTime.isBefore(secondCut)) {
            return secondCut;
        }
        if (!currentBusinessTime.isBefore(firstCut)) {
            return firstCut;
        }
        return null;
    }

    private long safeSequence(Long maxSequence) {
        return maxSequence == null ? 0L : maxSequence;
    }

    private String generatePackageNumber(LocalDate packageDate, String participantCode, Long typeId, Long sequence) {
        String datePart = packageDate.format(PACKAGE_DATE_FORMAT);
        String participantPart = lastThreeDigits(participantCode);
        long typeDigit = typeId == null ? 0L : Math.abs(typeId) % 10;
        String sequencePart = String.format("%d%06d", typeDigit, sequence);
        return datePart + participantPart + sequencePart;
    }

    private String lastThreeDigits(String participantCode) {
        String digits = participantCode == null ? "" : participantCode.replaceAll("\\D", "");
        if (digits.length() >= 3) {
            return digits.substring(digits.length() - 3);
        }
        return String.format("%3s", digits).replace(' ', '0');
    }

    private BigDecimal sum(Collection<CandidateRow> rows, java.util.function.Function<CandidateRow, BigDecimal> extractor) {
        return rows.stream()
                .map(extractor)
                .filter(Objects::nonNull)
                .reduce(BigDecimal.ZERO, BigDecimal::add);
    }

    private BigDecimal average(Collection<CandidateRow> rows, java.util.function.Function<CandidateRow, BigDecimal> extractor) {
        List<BigDecimal> values = rows.stream().map(extractor).filter(Objects::nonNull).toList();
        if (values.isEmpty()) {
            return null;
        }
        return average(values.stream().reduce(BigDecimal.ZERO, BigDecimal::add), values.size());
    }

    private BigDecimal average(BigDecimal total, int count) {
        if (count == 0) {
            return null;
        }
        return total.divide(BigDecimal.valueOf(count), 4, RoundingMode.HALF_UP);
    }

    private String normalize(String value) {
        return value == null ? null : value.trim();
    }

    private record TradeSideKey(Long tradeId, String sideId) {
    }

    private record CandidateIdentity(Long tradeId, String sideId, Integer fraction, Long uniqueFractionId) {
    }

    private record BaseGroupingKey(
            LocalDate clearingDate,
            LocalDate returnClearingDate,
            Long securityId,
            Long isinNumberId,
            String investorIdentificationType,
            String investorDocumentNumber,
            String sideId,
            Long typeId,
            String depositoryId,
            Long custodianId,
            Long participantId,
            Long investorId,
            Long investorAccountId,
            Long ficAdministratorId,
            BigDecimal referenceAllocId) {
    }

    private record FinalGroupingKey(BaseGroupingKey baseKey, Long individualUniqueFractionId) {
    }

    private record CandidateRow(
            String marketId,
            Long tradeId,
            Long uniqueFractionId,
            Integer fraction,
            String sideId,
            LocalDate matchDate,
            LocalDate clearingDate,
            LocalDate returnClearingDate,
            Long securityId,
            Long isinNumberId,
            Long typeId,
            String depositoryId,
            Long custodianId,
            Long ficAdministratorId,
            Long investorId,
            Long investorAccountId,
            Long participantId,
            String participantCode,
            String investorDocumentNumber,
            String investorIdentificationType,
            BigDecimal referenceAllocId,
            BigDecimal fractionQuantity,
            BigDecimal fractionVolume,
            BigDecimal netAmount,
            BigDecimal commissionAmount,
            BigDecimal valTaxAmount,
            BigDecimal price,
            BigDecimal rate,
            Boolean indicateExitReturn) {

        private static CandidateRow from(SettlementCandidateProjection projection) {
            return new CandidateRow(
                    null,
                    projection.getTradeId(),
                    projection.getUniqueFractionId(),
                    projection.getFraction(),
                    projection.getSideId(),
                    projection.getMatchDate(),
                    projection.getClearingDate(),
                    projection.getReturnClearingDate(),
                    projection.getSecurityId(),
                    projection.getIsinNumberId(),
                    projection.getTypeId(),
                    projection.getDepositoryId(),
                    projection.getCustodianId(),
                    projection.getFicAdministratorId(),
                    projection.getInvestorId(),
                    projection.getInvestorAccountId(),
                    projection.getParticipantId(),
                    projection.getParticipantCode(),
                    projection.getInvestorDocumentNumber(),
                    projection.getInvestorIdentificationType(),
                    projection.getReferenceAllocId(),
                    projection.getFractionQuantity(),
                    projection.getFractionVolume(),
                    projection.getNetAmount(),
                    projection.getCommissionAmount(),
                    projection.getValTaxAmount(),
                    projection.getPrice(),
                    projection.getRate(),
                    projection.getIndicateExitReturn());
        }
    }
}
```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/web/controller/CustodianAutomaticPackageController.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.web.controller;

import com.nubo.operations.custody.automatic.packages.query.api.models.dto.request.PackageGroupingRequestDto;
import com.nubo.operations.custody.automatic.packages.query.api.models.dto.request.PackageTransferRequestDto;
import com.nubo.operations.custody.automatic.packages.query.api.models.dto.response.PackageGroupingResponseDto;
import com.nubo.operations.custody.automatic.packages.query.api.models.dto.response.PackageTransferResponseDto;
import com.nubo.operations.custody.automatic.packages.query.api.service.AutomaticPackageService;
import jakarta.validation.Valid;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/custodian-packages")
public class CustodianAutomaticPackageController {

    private final AutomaticPackageService automaticPackageService;

    @PostMapping("/groupings/evaluate")
    public ResponseEntity<List<PackageGroupingResponseDto>> evaluateGrouping(
            @Valid @RequestBody PackageGroupingRequestDto request) {
        return ResponseEntity.ok(automaticPackageService.evaluateGrouping(request));
    }

    @PostMapping("/transfer")
    public ResponseEntity<PackageTransferResponseDto> transferPackages(
            @Valid @RequestBody PackageTransferRequestDto request) {
        return ResponseEntity.ok(automaticPackageService.transferPackages(request));
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
client:
  nubo:
    url-custodio-aut-packages: ${NUBO_URL_CUSTODIO_AUT_PACKAGES}

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
client:
  nubo:
    url-custodio-aut-packages: ${NUBO_URL_CUSTODIO_AUT_PACKAGES:local}
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
client:
  nubo:
    url-custodio-aut-packages: ${NUBO_URL_CUSTODIO_AUT_PACKAGES}
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
client:
  nubo:
    url-custodio-aut-packages: ${NUBO_URL_CUSTODIO_AUT_PACKAGES}
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
client:
  nubo:
    url-custodio-aut-packages: ${NUBO_URL_CUSTODIO_AUT_PACKAGES}
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
 ____  ____  _____ ____  ____ _____ _  ____  _      ____  ____  _     ____ _____ ____  ____ ___  _ _____ ____  ____  _      ____  _____ _____ ____  ____  _     _____ ____ ___  _ ____  ____  _
/  _ \/  __\/  __//  __\/  _ Y__ __Y \/  _ \/ \  /|/ ___\/   _\/ \ /\/ ___Y__ __Y  _ \/  _ \\  \///__ __Y  __\/  _ \/ \  /|/ ___\/    //  __//  __\/  _ \/ \ /\/  __//  __\\  \///  _ \/  __\/ \
| / \||  \/||  \  |  \/|| / \| / \ | || / \|| |\ |||    \|  /  | | |||    \ / \ | / \|| | \| \  /   / \ |  \/|| / \|| |\ |||    \|  __\|  \  |  \/|| / \|| | |||  \  |  \/| \  / | / \||  \/|| |
| \_/||  __/|  /_ |    /| |-|| | | | || \_/|| | \||\___ ||  \__| \_/|\___ | | | | \_/|| |_/| / /    | | |    /| |-||| | \||\___ || |   |  /_ |    /| \_\|| \_/||  /_ |    / / /  | |-|||  __/| |
\____/\_/   \____\\_/\_\\_/ \| \_/ \_/\____/\_/  \|\____/\____/\____/\____/ \_/ \____/\____//_/     \_/ \_/\_\\_/ \|\_/  \|\____/\_/   \____\\_/\_\\____\\____/\____\\_/\_\/_/   \_/ \|\_/   \_/

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
