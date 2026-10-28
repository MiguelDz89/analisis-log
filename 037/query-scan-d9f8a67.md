# query-scan-d9f8a67

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
13. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/application/properties/AutomaticPackagingProperties.java`
14. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/application/properties/PropertiesConfig.java`
15. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/application/properties/PropertiesContext.java`
16. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/application/util/ApplicationUtils.java`
17. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/application/util/RestClientUtils.java`
18. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/client/PackageCustodianCmdClient.java`
19. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/component/AutomaticPackageGrouper.java`
20. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/exception/ClientException.java`
21. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/exception/ServiceException.java`
22. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/exception/error/ErrorCode.java`
23. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/exception/error/ErrorResponse.java`
24. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/exception/error/ErrorValidation.java`
25. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/exception/handler/GlobalExceptionHandler.java`
26. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/helpers/MapperPageUtil.java`
27. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/helpers/MapperUtil.java`
28. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/dto/internal/AutomaticPackageCandidateDto.java`
29. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/dto/internal/AutomaticPackageGroupKey.java`
30. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/dto/request/AutomaticCustodianPackageRunRequestDto.java`
31. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/dto/request/PackageCustodianAutomaticInDto.java`
32. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/dto/response/AutomaticCustodianPackageRunResponseDto.java`
33. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/dto/response/PackageCustodianAutomaticOutDto.java`
34. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/dto/response/PageResponseOutDto.java`
35. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/enums/PropertiesEnum.java`
36. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/models/enums/VersionApiEnum.java`
37. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/repository/AutomaticCustodianPackagingRepository.java`
38. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/repository/impl/AutomaticCustodianPackagingRepositoryImpl.java`
39. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/service/AutomaticCustodianPackagingService.java`
40. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/service/impl/AutomaticCustodianPackagingServiceImpl.java`
41. `src/main/java/com/nubo/operations/custody/automatic/packages/query/api/web/controller/AutomaticCustodianPackagingRestController.java`
42. `src/main/resources/application-dev.yml`
43. `src/main/resources/application-local.yml`
44. `src/main/resources/application-prod.yml`
45. `src/main/resources/application-qa.yml`
46. `src/main/resources/application-uat.yml`
47. `src/main/resources/application.yml`
48. `src/main/resources/banner.txt`
49. `src/main/resources/log/JsonEventLayout_error.json`
50. `src/main/resources/log/JsonEventLayout_info.json`
51. `src/main/resources/log/JsonEventLayout_trace.json`
52. `src/main/resources/log/log4j2-prod.properties`
53. `src/main/resources/log/log4j2.properties`

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
import com.nubo.operations.custody.automatic.packages.query.api.models.enums.VersionApiEnum;
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
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Component
@ConfigurationProperties(prefix = "automatic-packaging")
public class AutomaticPackagingProperties {

    private Candidate candidate = new Candidate();
    private Cmd cmd = new Cmd();

    @Getter
    @Setter
    public static class Candidate {
        private List<Long> allowedCustodianStatusIds = new ArrayList<>();
        private List<Long> excludedCustodianStatusIds = new ArrayList<>();
        private List<Long> excludedTradeStatusIds = new ArrayList<>();
        private List<Long> includedSettlementStatusIds = new ArrayList<>();
        private boolean excludeAlreadyPackaged = true;
        private boolean requireFinalAssignment = true;
    }

    @Getter
    @Setter
    public static class Cmd {
        private String baseUrl = "http://localhost:8083/packages-custody-cmd-api";
        private String version = "v1";
        private String automaticPath = "/{version}/package-custodian/automatic";
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

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/client/PackageCustodianCmdClient.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.client;

import com.nubo.operations.custody.automatic.packages.query.api.application.properties.AutomaticPackagingProperties;
import com.nubo.operations.custody.automatic.packages.query.api.application.properties.PropertiesContext;
import com.nubo.operations.custody.automatic.packages.query.api.application.util.ApplicationUtils;
import com.nubo.operations.custody.automatic.packages.query.api.application.util.RestClientUtils;
import com.nubo.operations.custody.automatic.packages.query.api.exception.ClientException;
import com.nubo.operations.custody.automatic.packages.query.api.exception.error.ErrorCode;
import com.nubo.operations.custody.automatic.packages.query.api.models.dto.request.PackageCustodianAutomaticInDto;
import com.nubo.operations.custody.automatic.packages.query.api.models.dto.response.PackageCustodianAutomaticOutDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestClientException;

import java.net.URI;

@Component
@RequiredArgsConstructor
@Slf4j
public class PackageCustodianCmdClient {

    private final RestClientUtils restClientUtils;
    private final AutomaticPackagingProperties properties;

    public PackageCustodianAutomaticOutDto createAutomaticPackages(PackageCustodianAutomaticInDto request) {
        URI uri = buildUri();
        HttpHeaders headers = buildHeaders();
        try {
            log.info("Calling CMD automatic custodian packaging endpoint, url={}, packages={}, details={}",
                    uri, request.getPackages().size(), countDetails(request));
            ResponseEntity<PackageCustodianAutomaticOutDto> response = restClientUtils.requestWithResponseObject(
                    uri, HttpMethod.POST, headers, request, PackageCustodianAutomaticOutDto.class);
            return response.getBody();
        } catch (RestClientException ex) {
            log.error("Error calling CMD automatic custodian packaging endpoint, url={}, message={}",
                    uri, ex.getMessage(), ex);
            throw new ClientException(ErrorCode.CMD_AUTOMATIC_PACKAGING_ERROR,
                    org.springframework.http.HttpStatus.BAD_GATEWAY, ex);
        }
    }

    public URI buildUri() {
        AutomaticPackagingProperties.Cmd cmd = properties.getCmd();
        String path = cmd.getAutomaticPath().replace("{version}", cmd.getVersion());
        String baseUrl = cmd.getBaseUrl().endsWith("/")
                ? cmd.getBaseUrl().substring(0, cmd.getBaseUrl().length() - 1)
                : cmd.getBaseUrl();
        return URI.create(baseUrl + path);
    }

    private HttpHeaders buildHeaders() {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setAccept(java.util.List.of(MediaType.APPLICATION_JSON));
        headers.add("client_user", PropertiesContext.getClientUser());
        headers.add("client_ip", PropertiesContext.getClientIp());
        headers.add("client_datetime", ApplicationUtils.convertLocalDateTimeToString(PropertiesContext.getClientDatetime()));
        return headers;
    }

    private long countDetails(PackageCustodianAutomaticInDto request) {
        return request.getPackages().stream().mapToLong(pkg -> pkg.getDetails().size()).sum();
    }

}

```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/component/AutomaticPackageGrouper.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.component;

import com.nubo.operations.custody.automatic.packages.query.api.models.dto.internal.AutomaticPackageCandidateDto;
import com.nubo.operations.custody.automatic.packages.query.api.models.dto.internal.AutomaticPackageGroupKey;
import com.nubo.operations.custody.automatic.packages.query.api.models.dto.request.PackageCustodianAutomaticInDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.util.ObjectUtils;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.function.Function;

@Component
@Slf4j
public class AutomaticPackageGrouper {

    private static final BigDecimal ONE_HUNDRED = new BigDecimal("100.0000");
    private static final int SCALE = 4;

    public PackageCustodianAutomaticInDto buildRequest(String sourceApplication, LocalDate executionDate,
                                                       String cutType, Boolean sameDaySettlement,
                                                       List<AutomaticPackageCandidateDto> candidates) {
        Map<AutomaticPackageGroupKey, List<AutomaticPackageCandidateDto>> grouped = new LinkedHashMap<>();
        for (AutomaticPackageCandidateDto candidate : candidates) {
            grouped.computeIfAbsent(buildKey(candidate), key -> new ArrayList<>()).add(candidate);
        }

        List<PackageCustodianAutomaticInDto.PackageDto> packages = grouped.values().stream()
                .map(this::buildPackage)
                .toList();

        log.info("Automatic custodian packages grouped, groups={}, details={}", packages.size(), candidates.size());
        return PackageCustodianAutomaticInDto.builder()
                .sourceApplication(sourceApplication)
                .executionDate(executionDate)
                .cutType(cutType)
                .sameDaySettlement(sameDaySettlement)
                .packages(packages)
                .build();
    }

    public List<String> validateAndBuildDiscardReasons(List<AutomaticPackageCandidateDto> candidates,
                                                       List<AutomaticPackageCandidateDto> validCandidates) {
        List<String> discardReasons = new ArrayList<>();
        Set<Long> uniqueFractionIds = new HashSet<>();
        Set<String> tradeSideFractionKeys = new HashSet<>();

        for (AutomaticPackageCandidateDto candidate : candidates) {
            String reason = getDiscardReason(candidate, uniqueFractionIds, tradeSideFractionKeys);
            if (reason == null) {
                validCandidates.add(candidate);
            } else {
                discardReasons.add(reason);
                log.warn("Automatic packaging candidate discarded: {}", reason);
            }
        }
        return discardReasons;
    }

    private String getDiscardReason(AutomaticPackageCandidateDto candidate, Set<Long> uniqueFractionIds,
                                    Set<String> tradeSideFractionKeys) {
        if (candidate.getTradeId() == null || ObjectUtils.isEmpty(candidate.getSideId())
                || candidate.getFraction() == null) {
            return "Missing tradeId/sideId/fraction for candidate " + candidate;
        }
        if (candidate.getUniqueFractionId() == null || candidate.getUniqueFractionId() == 0L) {
            return "Missing uniqueFractionId for tradeId=%s, sideId=%s, fraction=%s"
                    .formatted(candidate.getTradeId(), candidate.getSideId(), candidate.getFraction());
        }
        if (!uniqueFractionIds.add(candidate.getUniqueFractionId())) {
            return "Duplicated uniqueFractionId=%s in request".formatted(candidate.getUniqueFractionId());
        }
        String tradeSideFraction = candidate.getTradeId() + "|" + candidate.getSideId() + "|" + candidate.getFraction();
        if (!tradeSideFractionKeys.add(tradeSideFraction)) {
            return "Duplicated trade/side/fraction=%s in request".formatted(tradeSideFraction);
        }
        if (candidate.getCustodianId() == null) {
            return "Missing custodianId for uniqueFractionId=" + candidate.getUniqueFractionId();
        }
        if (candidate.getParticipantId() == null) {
            return "Missing participantId for uniqueFractionId=" + candidate.getUniqueFractionId();
        }
        if (candidate.getInvestorId() == null) {
            return "Missing investorId for uniqueFractionId=" + candidate.getUniqueFractionId();
        }
        if (candidate.getInvestorAccountId() == null) {
            return "Missing investorAccountId for uniqueFractionId=" + candidate.getUniqueFractionId();
        }
        if (candidate.getTypeId() == null) {
            return "Missing typeId for uniqueFractionId=" + candidate.getUniqueFractionId();
        }
        if (ObjectUtils.isEmpty(candidate.getDepositoryId())) {
            return "Missing depositoryId for uniqueFractionId=" + candidate.getUniqueFractionId();
        }
        if (candidate.getSecurityId() == null && candidate.getIsinNumberId() == null) {
            return "Missing securityId/isinNumberId for uniqueFractionId=" + candidate.getUniqueFractionId();
        }
        return null;
    }

    private AutomaticPackageGroupKey buildKey(AutomaticPackageCandidateDto candidate) {
        return new AutomaticPackageGroupKey(
                candidate.getMarketId(),
                candidate.getClearingDate(),
                candidate.getReturnClearingDate(),
                candidate.getSecurityId(),
                candidate.getIsinNumberId(),
                candidate.getTypeId(),
                candidate.getDepositoryId(),
                candidate.getInvestorIdentificationType(),
                candidate.getInvestorDocumentNumber(),
                candidate.getSideId(),
                candidate.getCustodianId(),
                candidate.getReferenceAllocId(),
                candidate.getFicAdministratorId(),
                candidate.getParticipantId(),
                candidate.getInvestorId(),
                candidate.getInvestorAccountId()
        );
    }

    private PackageCustodianAutomaticInDto.PackageDto buildPackage(List<AutomaticPackageCandidateDto> candidates) {
        AutomaticPackageCandidateDto first = candidates.get(0);
        BigDecimal totalQuantity = sum(candidates, AutomaticPackageCandidateDto::getFractionQuantity);
        BigDecimal totalVolume = sum(candidates, AutomaticPackageCandidateDto::getFractionVolume);
        BigDecimal totalNetAmount = sum(candidates, AutomaticPackageCandidateDto::getNetAmount);
        BigDecimal totalCommission = sum(candidates, AutomaticPackageCandidateDto::getCommissionAmount);
        BigDecimal totalValTax = sum(candidates, AutomaticPackageCandidateDto::getValTaxAmount);
        BigDecimal totalReturnNetAmount = sum(candidates, AutomaticPackageCandidateDto::getReturnNetAmount);

        return PackageCustodianAutomaticInDto.PackageDto.builder()
                .marketId(first.getMarketId())
                .codeSCB(first.getParticipantCode())
                .sideId(first.getSideId())
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
                .averagePrice(scale(weightedAverage(candidates, AutomaticPackageCandidateDto::getPrice,
                        AutomaticPackageCandidateDto::getFractionQuantity)))
                .totalFractionVolume(scale(totalVolume))
                .totalNetAmount(scale(totalNetAmount))
                .totalCommissionAmount(scale(totalCommission))
                .totalValTaxAmount(scale(totalValTax))
                .clearingPercentage(ONE_HUNDRED)
                .averageFractionVolume(scale(average(candidates, AutomaticPackageCandidateDto::getFractionVolume)))
                .returnNetAmount(scale(totalReturnNetAmount))
                .averageRate(scale(weightedAverage(candidates, AutomaticPackageCandidateDto::getRate,
                        AutomaticPackageCandidateDto::getFractionQuantity)))
                .details(candidates.stream().map(this::buildDetail).toList())
                .build();
    }

    private PackageCustodianAutomaticInDto.DetailDto buildDetail(AutomaticPackageCandidateDto candidate) {
        return PackageCustodianAutomaticInDto.DetailDto.builder()
                .tradeId(candidate.getTradeId())
                .sideId(candidate.getSideId())
                .fraction(candidate.getFraction())
                .matchDate(candidate.getMatchDate())
                .uniqueFractionId(candidate.getUniqueFractionId())
                .investorId(candidate.getInvestorId())
                .custodianId(candidate.getCustodianId())
                .participantId(candidate.getParticipantId())
                .clearingDate(candidate.getClearingDate())
                .returnClearingDate(candidate.getReturnClearingDate())
                .fractionQuantity(scale(candidate.getFractionQuantity()))
                .price(scale(candidate.getPrice()))
                .rate(scale(candidate.getRate()))
                .indicateExitReturn(Boolean.TRUE.equals(candidate.getIndicateExitReturn()))
                .build();
    }

    private BigDecimal sum(List<AutomaticPackageCandidateDto> candidates,
                           Function<AutomaticPackageCandidateDto, BigDecimal> mapper) {
        return candidates.stream()
                .map(mapper)
                .map(this::zeroIfNull)
                .reduce(BigDecimal.ZERO, BigDecimal::add);
    }

    private BigDecimal average(List<AutomaticPackageCandidateDto> candidates,
                               Function<AutomaticPackageCandidateDto, BigDecimal> mapper) {
        if (candidates.isEmpty()) {
            return BigDecimal.ZERO;
        }
        return sum(candidates, mapper).divide(BigDecimal.valueOf(candidates.size()), 6, RoundingMode.HALF_UP);
    }

    private BigDecimal weightedAverage(List<AutomaticPackageCandidateDto> candidates,
                                       Function<AutomaticPackageCandidateDto, BigDecimal> valueMapper,
                                       Function<AutomaticPackageCandidateDto, BigDecimal> weightMapper) {
        BigDecimal totalWeight = sum(candidates, weightMapper);
        if (BigDecimal.ZERO.compareTo(totalWeight) == 0) {
            return average(candidates, valueMapper);
        }
        BigDecimal weightedTotal = candidates.stream()
                .map(candidate -> zeroIfNull(valueMapper.apply(candidate)).multiply(zeroIfNull(weightMapper.apply(candidate))))
                .reduce(BigDecimal.ZERO, BigDecimal::add);
        return weightedTotal.divide(totalWeight, 6, RoundingMode.HALF_UP);
    }

    private BigDecimal zeroIfNull(BigDecimal value) {
        return value == null ? BigDecimal.ZERO : value;
    }

    private BigDecimal scale(BigDecimal value) {
        return zeroIfNull(value).setScale(SCALE, RoundingMode.HALF_UP);
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
        String marketId,
        LocalDate clearingDate,
        LocalDate returnClearingDate,
        Long securityId,
        Long isinNumberId,
        Long typeId,
        String depositoryId,
        String investorIdentificationType,
        String investorDocumentNumber,
        String sideId,
        Long custodianId,
        String referenceAllocId,
        Long ficAdministratorId,
        Long participantId,
        Long investorId,
        Long investorAccountId
) {
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
        private LocalDate clearingDate;
        private LocalDate returnClearingDate;
        private BigDecimal fractionQuantity;
        private BigDecimal price;
        private BigDecimal rate;
        private Boolean indicateExitReturn;
    }

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

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/repository/AutomaticCustodianPackagingRepository.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.repository;

import com.nubo.operations.custody.automatic.packages.query.api.models.dto.internal.AutomaticPackageCandidateDto;

import java.time.LocalDate;
import java.util.List;

public interface AutomaticCustodianPackagingRepository {

    List<AutomaticPackageCandidateDto> findCandidates(LocalDate executionDate, Boolean sameDaySettlement);

    String getLastExecutedSql();

}

```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/repository/impl/AutomaticCustodianPackagingRepositoryImpl.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.repository.impl;

import com.nubo.operations.custody.automatic.packages.query.api.application.properties.AutomaticPackagingProperties;
import com.nubo.operations.custody.automatic.packages.query.api.models.dto.internal.AutomaticPackageCandidateDto;
import com.nubo.operations.custody.automatic.packages.query.api.repository.AutomaticCustodianPackagingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.util.CollectionUtils;

import java.math.BigDecimal;
import java.sql.Date;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDate;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class AutomaticCustodianPackagingRepositoryImpl implements AutomaticCustodianPackagingRepository {

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
                t."ISIN_NUMBER_ID" as isin_number_id,
                t."TYPE_ID" as type_id,
                case
                    when s."SIDE_ID" = 'C' then coalesce(t."DEPOSITORY_ID_BUY", t."DEPOSITORY_ID")
                    when s."SIDE_ID" = 'V' then coalesce(t."DEPOSITORY_ID_SELL", t."DEPOSITORY_ID")
                    else t."DEPOSITORY_ID"
                end as depository_id,
                s."CUSTODIAN_STATUS_ID" as custodian_status_id,
                s."CUSTODIAN_ID" as custodian_id,
                s."FIC_ADMINISTRATOR_ID" as fic_administrator_id,
                s."INVESTOR_ID" as investor_id,
                s."INVESTOR_ACCOUNT_ID" as investor_account_id,
                case
                    when s."SIDE_ID" = 'C' then t."PARTICIPANT_ID_BUY"
                    when s."SIDE_ID" = 'V' then t."PARTICIPANT_ID_SELL"
                    else t."PARTICIPANT_ID_BUY"
                end as participant_id,
                p."CODE" as participant_code,
                trim(i."DOCUMENT_NUMBER") as investor_document_number,
                it."CODE" as investor_identification_type,
                cast(s."REFERENCE_ALLOC_ID" as varchar) as reference_alloc_id,
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
            left join "NUANBODB"."PARTICIPANT" p
                on p."PARTICIPANT_ID" = case
                    when s."SIDE_ID" = 'C' then t."PARTICIPANT_ID_BUY"
                    when s."SIDE_ID" = 'V' then t."PARTICIPANT_ID_SELL"
                    else t."PARTICIPANT_ID_BUY"
                end
            left join "NUANBODB"."INVESTOR" i
                on i."INVESTOR_ID" = s."INVESTOR_ID"
            left join "NUANBODB"."IDENTIFICATION_TYPE" it
                on it."IDENTIFICATION_TYPE_ID" = i."IDENTIFICATION_TYPE_ID"
            where coalesce(t."CANCELED_STATUS", false) = false
              and s."CUSTODIAN_ID" is not null
              and s."INVESTOR_ID" is not null
              and s."INVESTOR_ACCOUNT_ID" is not null
              and s."SIDE_ID" is not null
              and t."TYPE_ID" is not null
              and (
                    case
                        when s."SIDE_ID" = 'C' then coalesce(t."DEPOSITORY_ID_BUY", t."DEPOSITORY_ID")
                        when s."SIDE_ID" = 'V' then coalesce(t."DEPOSITORY_ID_SELL", t."DEPOSITORY_ID")
                        else t."DEPOSITORY_ID"
                    end
                  ) is not null
              and t."CLEARING_DATE" %s :executionDate
            """;

    private final NamedParameterJdbcTemplate jdbcTemplate;
    private final AutomaticPackagingProperties properties;
    private String lastExecutedSql;

    @Override
    public List<AutomaticPackageCandidateDto> findCandidates(LocalDate executionDate, Boolean sameDaySettlement) {
        MapSqlParameterSource params = new MapSqlParameterSource()
                .addValue("executionDate", executionDate);
        StringBuilder sql = new StringBuilder(BASE_QUERY.formatted(Boolean.TRUE.equals(sameDaySettlement) ? "=" : "<>"));

        AutomaticPackagingProperties.Candidate candidateProperties = properties.getCandidate();
        appendInClause(sql, params, "t.\"STATUS_ID\"", "excludedTradeStatusIds",
                candidateProperties.getExcludedTradeStatusIds(), false);
        appendInClause(sql, params, "s.\"STATUS_ID\"", "includedSettlementStatusIds",
                candidateProperties.getIncludedSettlementStatusIds(), true);
        appendInClause(sql, params, "s.\"CUSTODIAN_STATUS_ID\"", "allowedCustodianStatusIds",
                candidateProperties.getAllowedCustodianStatusIds(), true);
        appendInClause(sql, params, "s.\"CUSTODIAN_STATUS_ID\"", "excludedCustodianStatusIds",
                candidateProperties.getExcludedCustodianStatusIds(), false);

        if (candidateProperties.isRequireFinalAssignment()) {
            sql.append("""
                    
                      and (
                            (s."SIDE_ID" = 'C' and coalesce(t."FINAL_ASSIGNMENT_MARK_BUY", false) = true)
                            or
                            (s."SIDE_ID" = 'V' and coalesce(t."FINAL_ASSIGNMENT_MARK_SELL", false) = true)
                          )
                    """);
        }

        if (candidateProperties.isExcludeAlreadyPackaged()) {
            sql.append("""
                    
                      and not exists (
                            select 1
                            from "NUANBODB"."PACKAGE_DETAIL" pd
                            where pd."UNIQUE_FRACTION_ID" = s."UNIQUE_FRACTION_ID"
                          )
                    """);
        }

        sql.append("""
                
                order by t."CLEARING_DATE", t."TRADE_ID", s."SIDE_ID", s."FRACTION"
                """);

        this.lastExecutedSql = sql.toString();
        return jdbcTemplate.query(sql.toString(), params, new CandidateRowMapper());
    }

    @Override
    public String getLastExecutedSql() {
        return lastExecutedSql;
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

    private static class CandidateRowMapper implements RowMapper<AutomaticPackageCandidateDto> {
        @Override
        public AutomaticPackageCandidateDto mapRow(ResultSet rs, int rowNum) throws SQLException {
            return AutomaticPackageCandidateDto.builder()
                    .tradeId(getLong(rs, "trade_id"))
                    .marketId(rs.getString("market_id"))
                    .uniqueFractionId(getLong(rs, "unique_fraction_id"))
                    .fraction(getLong(rs, "fraction"))
                    .sideId(rs.getString("side_id"))
                    .matchDate(getLocalDate(rs, "match_date"))
                    .clearingDate(getLocalDate(rs, "clearing_date"))
                    .returnClearingDate(getLocalDate(rs, "return_clearing_date"))
                    .securityId(getLong(rs, "security_id"))
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
                    .fractionQuantity(rs.getBigDecimal("fraction_quantity"))
                    .fractionVolume(rs.getBigDecimal("fraction_volume"))
                    .netAmount(rs.getBigDecimal("net_amount"))
                    .commissionAmount(rs.getBigDecimal("commission_amount"))
                    .valTaxAmount(rs.getBigDecimal("val_tax_amount"))
                    .price(rs.getBigDecimal("price"))
                    .rate(rs.getBigDecimal("rate"))
                    .returnNetAmount(rs.getBigDecimal("return_net_amount"))
                    .indicateExitReturn(getBoolean(rs, "indicate_exit_return"))
                    .build();
        }

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
    }

}

```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/service/AutomaticCustodianPackagingService.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.service;

import com.nubo.operations.custody.automatic.packages.query.api.models.dto.request.AutomaticCustodianPackageRunRequestDto;
import com.nubo.operations.custody.automatic.packages.query.api.models.dto.response.AutomaticCustodianPackageRunResponseDto;

public interface AutomaticCustodianPackagingService {

    AutomaticCustodianPackageRunResponseDto runAutomaticPackaging(AutomaticCustodianPackageRunRequestDto request);

}

```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/service/impl/AutomaticCustodianPackagingServiceImpl.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.service.impl;

import com.nubo.operations.custody.automatic.packages.query.api.application.properties.PropertiesConfig;
import com.nubo.operations.custody.automatic.packages.query.api.client.PackageCustodianCmdClient;
import com.nubo.operations.custody.automatic.packages.query.api.component.AutomaticPackageGrouper;
import com.nubo.operations.custody.automatic.packages.query.api.models.dto.internal.AutomaticPackageCandidateDto;
import com.nubo.operations.custody.automatic.packages.query.api.models.dto.request.AutomaticCustodianPackageRunRequestDto;
import com.nubo.operations.custody.automatic.packages.query.api.models.dto.request.PackageCustodianAutomaticInDto;
import com.nubo.operations.custody.automatic.packages.query.api.models.dto.response.AutomaticCustodianPackageRunResponseDto;
import com.nubo.operations.custody.automatic.packages.query.api.models.dto.response.PackageCustodianAutomaticOutDto;
import com.nubo.operations.custody.automatic.packages.query.api.repository.AutomaticCustodianPackagingRepository;
import com.nubo.operations.custody.automatic.packages.query.api.service.AutomaticCustodianPackagingService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class AutomaticCustodianPackagingServiceImpl implements AutomaticCustodianPackagingService {

    private final AutomaticCustodianPackagingRepository repository;
    private final AutomaticPackageGrouper grouper;
    private final PackageCustodianCmdClient cmdClient;
    private final PropertiesConfig propertiesConfig;

    @Override
    public AutomaticCustodianPackageRunResponseDto runAutomaticPackaging(AutomaticCustodianPackageRunRequestDto request) {
        log.info("Start automatic custodian packaging, executionDate={}, cutType={}, sameDaySettlement={}",
                request.getExecutionDate(), request.getCutType(), request.getSameDaySettlement());

        List<AutomaticPackageCandidateDto> candidates = repository.findCandidates(
                request.getExecutionDate(), request.getSameDaySettlement());
        List<AutomaticPackageCandidateDto> validCandidates = new ArrayList<>();
        List<String> discardReasons = grouper.validateAndBuildDiscardReasons(candidates, validCandidates);

        log.info("Automatic custodian packaging candidates found={}, discarded={}, valid={}",
                candidates.size(), discardReasons.size(), validCandidates.size());

        if (validCandidates.isEmpty()) {
            return AutomaticCustodianPackageRunResponseDto.builder()
                    .executionDate(request.getExecutionDate())
                    .cutType(request.getCutType())
                    .sameDaySettlement(request.getSameDaySettlement())
                    .candidatesFound(candidates.size())
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
        }

        PackageCustodianAutomaticInDto cmdRequest = grouper.buildRequest(
                propertiesConfig.getApiName(),
                request.getExecutionDate(),
                request.getCutType(),
                request.getSameDaySettlement(),
                validCandidates);

        PackageCustodianAutomaticOutDto cmdResponse = cmdClient.createAutomaticPackages(cmdRequest);

        int packagesBuilt = cmdRequest.getPackages().size();
        int detailsBuilt = cmdRequest.getPackages().stream().mapToInt(pkg -> pkg.getDetails().size()).sum();
        log.info("End automatic custodian packaging, packagesBuilt={}, detailsBuilt={}, cmdStatus={}",
                packagesBuilt, detailsBuilt, cmdResponse == null ? null : cmdResponse.getStatus());

        return AutomaticCustodianPackageRunResponseDto.builder()
                .executionDate(request.getExecutionDate())
                .cutType(request.getCutType())
                .sameDaySettlement(request.getSameDaySettlement())
                .candidatesFound(candidates.size())
                .candidatesDiscarded(discardReasons.size())
                .packagesBuilt(packagesBuilt)
                .detailsBuilt(detailsBuilt)
                .cmdStatus(cmdResponse == null ? "EMPTY_RESPONSE" : cmdResponse.getStatus())
                .cmdProcessedPackages(cmdResponse == null ? 0 : cmdResponse.getProcessedPackages())
                .cmdCreatedPackages(cmdResponse == null ? 0 : cmdResponse.getCreatedPackages())
                .cmdProcessedDetails(cmdResponse == null ? 0 : cmdResponse.getProcessedDetails())
                .cmdCreatedDetails(cmdResponse == null ? 0 : cmdResponse.getCreatedDetails())
                .discardReasons(discardReasons)
                .build();
    }

}

```

## src/main/java/com/nubo/operations/custody/automatic/packages/query/api/web/controller/AutomaticCustodianPackagingRestController.java

```java
package com.nubo.operations.custody.automatic.packages.query.api.web.controller;

import com.nubo.operations.custody.automatic.packages.query.api.models.dto.request.AutomaticCustodianPackageRunRequestDto;
import com.nubo.operations.custody.automatic.packages.query.api.models.dto.response.AutomaticCustodianPackageRunResponseDto;
import com.nubo.operations.custody.automatic.packages.query.api.service.AutomaticCustodianPackagingService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/{version}/automatic-custodian-packages")
@RequiredArgsConstructor
public class AutomaticCustodianPackagingRestController {

    private final AutomaticCustodianPackagingService service;

    @PostMapping("/run")
    public ResponseEntity<AutomaticCustodianPackageRunResponseDto> runAutomaticPackaging(
            @PathVariable String version,
            @Valid @RequestBody AutomaticCustodianPackageRunRequestDto request) {
        return ResponseEntity.ok(service.runAutomaticPackaging(request));
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
  port: 8082
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
automatic-packaging:
  candidate:
    allowed-custodian-status-ids: ${AUT_PACK_ALLOWED_CUSTODIAN_STATUS_IDS:}
    excluded-custodian-status-ids: ${AUT_PACK_EXCLUDED_CUSTODIAN_STATUS_IDS:}
    excluded-trade-status-ids: ${AUT_PACK_EXCLUDED_TRADE_STATUS_IDS:}
    included-settlement-status-ids: ${AUT_PACK_INCLUDED_SETTLEMENT_STATUS_IDS:}
    exclude-already-packaged: ${AUT_PACK_EXCLUDE_ALREADY_PACKAGED:true}
    require-final-assignment: ${AUT_PACK_REQUIRE_FINAL_ASSIGNMENT:true}
  cmd:
    base-url: ${PACKAGES_CUSTODY_CMD_BASE_URL:http://localhost:8083/packages-custody-cmd-api}
    version: ${PACKAGES_CUSTODY_CMD_VERSION:v1}
    automatic-path: ${PACKAGES_CUSTODY_CMD_AUTOMATIC_PATH:/{version}/package-custodian/automatic}

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
