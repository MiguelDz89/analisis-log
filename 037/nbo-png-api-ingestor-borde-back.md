# nbo-png-api-ingestor-borde-back

Código Java de producción y configuraciones, sin tests. Cada sección contiene el archivo original completo y su ruta. Captura: 28/10/2026.

## Índice

1. `.mvn/wrapper/maven-wrapper.properties`
2. `mvnw`
3. `mvnw.cmd`
4. `pom.xml`
5. `src/main/java/com/nubo/ingestor/edge/api/IngestorEdgeApiApplication.java`
6. `src/main/java/com/nubo/ingestor/edge/api/application/config/KafkaProducerConfig.java`
7. `src/main/java/com/nubo/ingestor/edge/api/application/config/SwaggerConfig.java`
8. `src/main/java/com/nubo/ingestor/edge/api/application/config/SynchronizationExecutorConfig.java`
9. `src/main/java/com/nubo/ingestor/edge/api/application/config/WebConfig.java`
10. `src/main/java/com/nubo/ingestor/edge/api/application/context/GlobalContext.java`
11. `src/main/java/com/nubo/ingestor/edge/api/application/filters/GlobalFilter.java`
12. `src/main/java/com/nubo/ingestor/edge/api/application/interceptors/GlobalInterceptor.java`
13. `src/main/java/com/nubo/ingestor/edge/api/application/properties/PropertiesConfig.java`
14. `src/main/java/com/nubo/ingestor/edge/api/application/properties/PropertiesContext.java`
15. `src/main/java/com/nubo/ingestor/edge/api/application/util/ApplicationUtils.java`
16. `src/main/java/com/nubo/ingestor/edge/api/application/util/ContentAsStringListDeserializer.java`
17. `src/main/java/com/nubo/ingestor/edge/api/application/util/RestClientUtils.java`
18. `src/main/java/com/nubo/ingestor/edge/api/client/kafka/producer/KafkaNuboAdapter.java`
19. `src/main/java/com/nubo/ingestor/edge/api/client/reference/data/models/dto/response/AccessTokenOutDto.java`
20. `src/main/java/com/nubo/ingestor/edge/api/client/reference/data/models/dto/response/DataReferenceArrayOutDto.java`
21. `src/main/java/com/nubo/ingestor/edge/api/client/reference/data/models/dto/response/DataReferenceOutDto.java`
22. `src/main/java/com/nubo/ingestor/edge/api/client/reference/data/models/dto/response/PageMetadataOutDto.java`
23. `src/main/java/com/nubo/ingestor/edge/api/client/reference/data/service/ClientReferenceDataService.java`
24. `src/main/java/com/nubo/ingestor/edge/api/client/reference/data/service/ReferenceDataTokenService.java`
25. `src/main/java/com/nubo/ingestor/edge/api/client/reference/data/service/impl/ClientReferenceDataServiceImpl.java`
26. `src/main/java/com/nubo/ingestor/edge/api/client/reference/data/service/impl/ReferenceDataTokenServiceImpl.java`
27. `src/main/java/com/nubo/ingestor/edge/api/exception/ClientException.java`
28. `src/main/java/com/nubo/ingestor/edge/api/exception/ServiceException.java`
29. `src/main/java/com/nubo/ingestor/edge/api/exception/error/ErrorCode.java`
30. `src/main/java/com/nubo/ingestor/edge/api/exception/error/ErrorResponse.java`
31. `src/main/java/com/nubo/ingestor/edge/api/exception/error/ErrorValidation.java`
32. `src/main/java/com/nubo/ingestor/edge/api/exception/handler/GlobalExceptionHandler.java`
33. `src/main/java/com/nubo/ingestor/edge/api/models/dto/response/SynchronizeOutDto.java`
34. `src/main/java/com/nubo/ingestor/edge/api/models/enums/PropertiesEnum.java`
35. `src/main/java/com/nubo/ingestor/edge/api/models/enums/ResponseMode.java`
36. `src/main/java/com/nubo/ingestor/edge/api/models/enums/VersionApiEnum.java`
37. `src/main/java/com/nubo/ingestor/edge/api/service/SynchronizationService.java`
38. `src/main/java/com/nubo/ingestor/edge/api/service/impl/SynchronizationServiceImpl.java`
39. `src/main/java/com/nubo/ingestor/edge/api/web/controller/SynchronizationRestController.java`
40. `src/main/resources/application-dev.yml`
41. `src/main/resources/application-local.yml`
42. `src/main/resources/application-prod.yml`
43. `src/main/resources/application-qa.yml`
44. `src/main/resources/application-uat.yml`
45. `src/main/resources/application.yml`
46. `src/main/resources/banner.txt`
47. `src/main/resources/log/JsonEventLayout_error.json`
48. `src/main/resources/log/JsonEventLayout_info.json`
49. `src/main/resources/log/JsonEventLayout_trace.json`
50. `src/main/resources/log/log4j2-prod.properties`
51. `src/main/resources/log/log4j2.properties`

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
distributionUrl=https://repo.maven.apache.org/maven2/org/apache/maven/apache-maven/3.9.10/apache-maven-3.9.10-bin.zip

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
	<groupId>com.nubo.ingestor.edge.api</groupId>
	<artifactId>ingestor-edge-api</artifactId>
	<version>0.17.0-alpha.1</version>
	<name>${project.artifactId}</name>
	<description>Ingestor Edge API</description>

	<properties>
		<java.version>17</java.version>
		<spring.port>8080</spring.port>
		<test.skip>false</test.skip>
		<datasource.url.application.name>ApplicationName=${project.artifactId}</datasource.url.application.name>
		<hikari.pool.name>${project.artifactId}-pool</hikari.pool.name>
        <!-- vulnerability adjustment -->
        <log4j2.version>2.25.4</log4j2.version>
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
		<dependency>
			<groupId>io.micrometer</groupId>
			<artifactId>micrometer-registry-prometheus</artifactId>
		</dependency>
		<!-- Kafka -->
		<dependency>
			<groupId>org.springframework.kafka</groupId>
			<artifactId>spring-kafka</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.kafka</groupId>
			<artifactId>spring-kafka-test</artifactId>
			<scope>test</scope>
			<exclusions>
				<exclusion>
					<groupId>org.apache.kafka</groupId>
					<artifactId>kafka-clients</artifactId>
				</exclusion>
				<exclusion>
					<groupId>org.apache.kafka</groupId>
					<artifactId>kafka-server-common</artifactId>
				</exclusion>
				<exclusion>
					<groupId>ch.qos.logback</groupId>
					<artifactId>logback-classic</artifactId>
				</exclusion>
				<exclusion>
					<groupId>org.slf4j</groupId>
					<artifactId>slf4j-log4j12</artifactId>
				</exclusion>
			</exclusions>
		</dependency>
		<!-- vulnerability adjustment  -->
		<dependency>
			<groupId>commons-io</groupId>
			<artifactId>commons-io</artifactId>
			<version>2.20.0</version>
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
								<exclude>**/IngestorEdgeApiApplication.class</exclude>
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

## src/main/java/com/nubo/ingestor/edge/api/IngestorEdgeApiApplication.java

```java
package com.nubo.ingestor.edge.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class IngestorEdgeApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(IngestorEdgeApiApplication.class, args);
	}

}

```

## src/main/java/com/nubo/ingestor/edge/api/application/config/KafkaProducerConfig.java

```java
package com.nubo.ingestor.edge.api.application.config;

import com.nubo.ingestor.edge.api.application.properties.PropertiesConfig;
import lombok.RequiredArgsConstructor;
import org.apache.kafka.clients.producer.ProducerConfig;
import org.apache.kafka.common.serialization.StringSerializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.kafka.core.DefaultKafkaProducerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.core.ProducerFactory;

import java.util.HashMap;
import java.util.Map;

@Configuration
@RequiredArgsConstructor
public class KafkaProducerConfig {

    private final Environment environment;
    private final PropertiesConfig propertiesConfig;

    @Bean
    public ProducerFactory<String, String> producerFactoryKafkaNubo() {
        Map<String, Object> configProps = new HashMap<>();
        configProps.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, propertiesConfig.getKafkaNuboBootstrapServers());
        configProps.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class);
        configProps.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, StringSerializer.class);
        configProps.put(ProducerConfig.ACKS_CONFIG, propertiesConfig.getKafkaNuboProducerAcks());
        configProps.put(ProducerConfig.COMPRESSION_TYPE_CONFIG, propertiesConfig.getKafkaNuboProducerCompressionType());
        configProps.put(ProducerConfig.BATCH_SIZE_CONFIG, propertiesConfig.getKafkaNuboProducerBatchSize());
        configProps.put(ProducerConfig.LINGER_MS_CONFIG, propertiesConfig.getKafkaNuboProducerLingerMs());
        configProps.put(ProducerConfig.MAX_IN_FLIGHT_REQUESTS_PER_CONNECTION,
            propertiesConfig.getKafkaNuboProducerMaxInFlightRequestsPerConnection());
        configProps.put(ProducerConfig.DELIVERY_TIMEOUT_MS_CONFIG, propertiesConfig.getKafkaNuboProducerDeliveryTimeoutMs());
        configProps.put("security.protocol", propertiesConfig.getKafkaNuboSecurityProtocol());

        if (!isLocalProfile()) {
            configProps.put("sasl.mechanism", propertiesConfig.getKafkaNuboSaslMechanism());
            configProps.put("sasl.jaas.config", propertiesConfig.getKafkaNuboSaslJaasConfig());
        }

        return new DefaultKafkaProducerFactory<>(configProps);
    }

    @Bean
    public KafkaTemplate<String, String> kafkaNuboTemplate() {
        return new KafkaTemplate<>(producerFactoryKafkaNubo());
    }

    private boolean isLocalProfile() {
        String[] activeProfiles = environment.getActiveProfiles();
        for (String profile : activeProfiles) {
            if ("local".equals(profile)) {
                return true;
            }
        }
        return false;
    }

}

```

## src/main/java/com/nubo/ingestor/edge/api/application/config/SwaggerConfig.java

```java
package com.nubo.ingestor.edge.api.application.config;

import com.nubo.ingestor.edge.api.exception.error.ErrorResponse;
import com.nubo.ingestor.edge.api.exception.error.ErrorValidation;
import com.nubo.ingestor.edge.api.models.enums.PropertiesEnum;
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

        return new OpenAPI()
                .components(new Components())
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

## src/main/java/com/nubo/ingestor/edge/api/application/config/SynchronizationExecutorConfig.java

```java
package com.nubo.ingestor.edge.api.application.config;

import com.nubo.ingestor.edge.api.application.properties.PropertiesConfig;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;

import java.util.concurrent.Executor;

@Configuration
@RequiredArgsConstructor
public class SynchronizationExecutorConfig {

    private final PropertiesConfig propertiesConfig;

    @Bean(name = "synchronizationTaskExecutor")
    public Executor synchronizationTaskExecutor() {
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        int concurrency = Math.max(1, propertiesConfig.getSyncPageConcurrency());
        executor.setCorePoolSize(concurrency);
        executor.setMaxPoolSize(concurrency);
        executor.setQueueCapacity(concurrency * 4);
        executor.setThreadNamePrefix("sync-page-");
        executor.initialize();
        return executor;
    }
}
```

## src/main/java/com/nubo/ingestor/edge/api/application/config/WebConfig.java

```java
package com.nubo.ingestor.edge.api.application.config;


import com.nubo.ingestor.edge.api.application.interceptors.GlobalInterceptor;
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
    public RestClient restClientCreate() {
        return RestClient.create();
    }

}

```

## src/main/java/com/nubo/ingestor/edge/api/application/context/GlobalContext.java

```java
package com.nubo.ingestor.edge.api.application.context;

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

## src/main/java/com/nubo/ingestor/edge/api/application/filters/GlobalFilter.java

```java
package com.nubo.ingestor.edge.api.application.filters;


import com.nubo.ingestor.edge.api.application.context.GlobalContext;
import com.nubo.ingestor.edge.api.application.util.ApplicationUtils;
import com.nubo.ingestor.edge.api.exception.ServiceException;
import com.nubo.ingestor.edge.api.exception.error.ErrorCode;
import com.nubo.ingestor.edge.api.exception.error.ErrorResponse;
import com.nubo.ingestor.edge.api.models.enums.PropertiesEnum;
import com.nubo.ingestor.edge.api.models.enums.VersionApiEnum;
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

## src/main/java/com/nubo/ingestor/edge/api/application/interceptors/GlobalInterceptor.java

```java
package com.nubo.ingestor.edge.api.application.interceptors;


import com.nubo.ingestor.edge.api.application.context.GlobalContext;
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

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {
        return true;
    }

}
```

## src/main/java/com/nubo/ingestor/edge/api/application/properties/PropertiesConfig.java

```java
package com.nubo.ingestor.edge.api.application.properties;

import com.nubo.ingestor.edge.api.models.enums.ResponseMode;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
@Getter
public class PropertiesConfig {

    @Value("${spring.application.name}")
    private String apiName;

    @Value("${kafka.nubo.bootstrap-servers}")
    private String kafkaNuboBootstrapServers;

    @Value("${kafka.nubo.producer.topic-name}")
    private String kafkaNuboTopicName;

    @Value("${kafka.nubo.producer.acks:all}")
    private String kafkaNuboProducerAcks;

    @Value("${kafka.nubo.producer.compression-type:snappy}")
    private String kafkaNuboProducerCompressionType;

    @Value("${kafka.nubo.producer.batch-size:65536}")
    private Integer kafkaNuboProducerBatchSize;

    @Value("${kafka.nubo.producer.linger-ms:20}")
    private Integer kafkaNuboProducerLingerMs;

    @Value("${kafka.nubo.producer.max-in-flight-requests-per-connection:5}")
    private Integer kafkaNuboProducerMaxInFlightRequestsPerConnection;

    @Value("${kafka.nubo.producer.delivery-timeout-ms:120000}")
    private Integer kafkaNuboProducerDeliveryTimeoutMs;

    @Value("${kafka.nubo.group-id}")
    private String kafkaNuboGroupId;

    @Value("${kafka.nubo.sasl.mechanism}")
    private String kafkaNuboSaslMechanism;

    @Value("${kafka.nubo.sasl.jaas.config}")
    private String kafkaNuboSaslJaasConfig;

    @Value("${kafka.nubo.security.protocol}")
    private String kafkaNuboSecurityProtocol;

    @Value("${kafka.nubo.auto-offset-reset}")
    private String kafkaNuboAutoOffsetReset;

    @Value("${kafka.nubo.retries}")
    private Integer kafkaNuboRetries;

    @Value("${client.reference-data.url}")
    private String referenceDataUrl;

    @Value("${client.reference-data.complement}")
    private String complementUrl;

    @Value("${client.reference-data.response-mode:PAGE}")
    private ResponseMode responseMode;

    @Value("${client.reference-data.auth.enabled:false}")
    private boolean referenceDataAuthEnabled;

    @Value("${client.reference-data.auth.token-url:}")
    private String referenceDataAuthTokenUrl;

    @Value("${client.reference-data.auth.grant-type:password}")
    private String referenceDataAuthGrantType;

    @Value("${client.reference-data.auth.client-id:}")
    private String referenceDataAuthClientId;

    @Value("${client.reference-data.auth.client-secret:}")
    private String referenceDataAuthClientSecret;

    @Value("${client.reference-data.auth.username:}")
    private String referenceDataAuthUsername;

    @Value("${client.reference-data.auth.password:}")
    private String referenceDataAuthPassword;

    @Value("${performance.sync.default-page-size:500}")
    private Integer syncDefaultPageSize;

    @Value("${performance.sync.page-concurrency:4}")
    private Integer syncPageConcurrency;

    @Value("${performance.sync.publish-timeout-seconds:180}")
    private Integer syncPublishTimeoutSeconds;

    @Value("${performance.sync.startup-enabled:true}")
    private boolean syncStartupEnabled;

}

```

## src/main/java/com/nubo/ingestor/edge/api/application/properties/PropertiesContext.java

```java
package com.nubo.ingestor.edge.api.application.properties;



import com.nubo.ingestor.edge.api.application.context.GlobalContext;
import com.nubo.ingestor.edge.api.application.util.ApplicationUtils;
import com.nubo.ingestor.edge.api.models.enums.PropertiesEnum;

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
        assert clientDatetime != null;
        return LocalDateTime.parse(clientDatetime, formatter);
    }

    public static String getVersion() {
        return GlobalContext.getProperty(PropertiesEnum.VERSION_API.getValue());
    }

}


```

## src/main/java/com/nubo/ingestor/edge/api/application/util/ApplicationUtils.java

```java
package com.nubo.ingestor.edge.api.application.util;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.nubo.ingestor.edge.api.exception.ServiceException;
import com.nubo.ingestor.edge.api.exception.error.ErrorCode;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class ApplicationUtils {

    private static final ObjectMapper MAPPER = new ObjectMapper();
    private static final String FORMAT_DATETIME = "yyyy-MM-dd'T'HH:mm:ss";

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

    public static String writeValueAsString(Object object) {
        try {
            return MAPPER.writeValueAsString(object);
        } catch (JsonProcessingException e) {
            throw new ServiceException(ErrorCode.UNEXPECTED, e);
        }
    }
}

```

## src/main/java/com/nubo/ingestor/edge/api/application/util/ContentAsStringListDeserializer.java

```java
package com.nubo.ingestor.edge.api.application.util;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.JsonNode;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class ContentAsStringListDeserializer extends JsonDeserializer<List<String>> {

    @Override
    public List<String> deserialize(JsonParser p, DeserializationContext ctxt) throws IOException {
        List<String> list = new ArrayList<>();
        JsonNode node = p.getCodec().readTree(p);
        for (JsonNode element : node) {
            list.add(element.toString());
        }
        return list;
    }
}

```

## src/main/java/com/nubo/ingestor/edge/api/application/util/RestClientUtils.java

```java
package com.nubo.ingestor.edge.api.application.util;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestClient;

import java.net.URI;

@Slf4j
@Component
@RequiredArgsConstructor
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

    public <T> ResponseEntity<T> requestNoBodyWithResponseObject(URI url, HttpMethod method, HttpHeaders headers,
            Class<T> responseType) {
        log.info("Client [{}] {}", method, url);
        return restClient.method(method)
                .uri(url)
                .headers(h -> h.addAll(headers))
                .retrieve()
                .toEntity(responseType);
    }

    public <T> ResponseEntity<T> requestNoBodyWithResponseObject(URI url, HttpMethod method, HttpHeaders headers,
            ParameterizedTypeReference<T> responseType) {
        log.info("Client [{}] {}", method, url);
        return restClient.method(method)
                .uri(url)
                .headers(h -> h.addAll(headers))
                .retrieve()
                .toEntity(responseType);
    }

}

```

## src/main/java/com/nubo/ingestor/edge/api/client/kafka/producer/KafkaNuboAdapter.java

```java
package com.nubo.ingestor.edge.api.client.kafka.producer;

import com.nubo.ingestor.edge.api.application.properties.PropertiesConfig;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.SendResult;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.CompletableFuture;

@Component
@RequiredArgsConstructor
@Slf4j
public class KafkaNuboAdapter {

    private final PropertiesConfig propertiesConfig;
    private final KafkaTemplate<String, String> kafkaNuboTemplate;

    public void sendMessage(String message) {
        sendSingleAsync(resolveTopic(), message);
    }

    public CompletableFuture<Long> sendMessagesBatch(List<String> messages) {
        if (messages == null || messages.isEmpty()) {
            return CompletableFuture.completedFuture(0L);
        }

        String topic = resolveTopic();
        List<CompletableFuture<SendResult<String, String>>> futures = new ArrayList<>(messages.size());
        for (String message : messages) {
            futures.add(sendSingleAsync(topic, message));
        }

        return CompletableFuture.allOf(futures.toArray(new CompletableFuture[0]))
                .thenApply(ignored -> (long) messages.size());
    }

    private CompletableFuture<SendResult<String, String>> sendSingleAsync(String topic, String message) {
        CompletableFuture<SendResult<String, String>> future = kafkaNuboTemplate.send(topic, message)
                .toCompletableFuture();

        future.thenAccept(result -> {
            if (log.isDebugEnabled()) {
                log.debug("Kafka ack topic={} partition={} offset={}",
                        topic,
                        result.getRecordMetadata().partition(),
                        result.getRecordMetadata().offset());
            }
        }).exceptionally(ex -> {
            log.error("Error sending message to Kafka topic {}: {}", topic, ex.getMessage());
            return null;
        });

        return future;
    }

    private String resolveTopic() {
        return propertiesConfig.getKafkaNuboTopicName();
    }
}

```

## src/main/java/com/nubo/ingestor/edge/api/client/reference/data/models/dto/response/AccessTokenOutDto.java

```java
package com.nubo.ingestor.edge.api.client.reference.data.models.dto.response;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class AccessTokenOutDto {

    @JsonProperty("access_token")
    private String accessToken;

    @JsonProperty("expires_in")
    private Long expiresIn;

    @JsonProperty("refresh_token")
    private String refreshToken;

}

```

## src/main/java/com/nubo/ingestor/edge/api/client/reference/data/models/dto/response/DataReferenceArrayOutDto.java

```java
package com.nubo.ingestor.edge.api.client.reference.data.models.dto.response;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.nubo.ingestor.edge.api.application.util.ContentAsStringListDeserializer;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class DataReferenceArrayOutDto {

    @NotNull
    @JsonDeserialize(using = ContentAsStringListDeserializer.class)
    private List<String> content;

}

```

## src/main/java/com/nubo/ingestor/edge/api/client/reference/data/models/dto/response/DataReferenceOutDto.java

```java
package com.nubo.ingestor.edge.api.client.reference.data.models.dto.response;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.nubo.ingestor.edge.api.application.util.ContentAsStringListDeserializer;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class DataReferenceOutDto {

    @NotNull
    @JsonDeserialize(using = ContentAsStringListDeserializer.class)
    private List<String> content;

    private PageMetadataOutDto page;

}

```

## src/main/java/com/nubo/ingestor/edge/api/client/reference/data/models/dto/response/PageMetadataOutDto.java

```java
package com.nubo.ingestor.edge.api.client.reference.data.models.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PageMetadataOutDto {

    private Integer size;

    private Integer number;

    private Long totalElements;

    private Integer totalPages;


}

```

## src/main/java/com/nubo/ingestor/edge/api/client/reference/data/service/ClientReferenceDataService.java

```java
package com.nubo.ingestor.edge.api.client.reference.data.service;

import com.nubo.ingestor.edge.api.client.reference.data.models.dto.response.DataReferenceOutDto;

public interface ClientReferenceDataService {

    DataReferenceOutDto getExternalInformation(Integer size);

    DataReferenceOutDto getExternalInformation(Integer size, Integer page);
}

```

## src/main/java/com/nubo/ingestor/edge/api/client/reference/data/service/ReferenceDataTokenService.java

```java
package com.nubo.ingestor.edge.api.client.reference.data.service;

public interface ReferenceDataTokenService {

    String getValidAccessToken();

}
```

## src/main/java/com/nubo/ingestor/edge/api/client/reference/data/service/impl/ClientReferenceDataServiceImpl.java

```java
package com.nubo.ingestor.edge.api.client.reference.data.service.impl;

import java.net.URI;
import java.time.LocalDate;
import java.util.List;
import java.util.Objects;

import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;
import org.springframework.util.StringUtils;
import org.springframework.web.util.UriComponentsBuilder;

import com.nubo.ingestor.edge.api.application.properties.PropertiesConfig;
import com.nubo.ingestor.edge.api.application.util.ApplicationUtils;
import com.nubo.ingestor.edge.api.application.util.RestClientUtils;
import com.nubo.ingestor.edge.api.client.reference.data.models.dto.response.DataReferenceOutDto;
import com.nubo.ingestor.edge.api.client.reference.data.models.dto.response.PageMetadataOutDto;
import com.nubo.ingestor.edge.api.client.reference.data.service.ClientReferenceDataService;
import com.nubo.ingestor.edge.api.client.reference.data.service.ReferenceDataTokenService;
import com.nubo.ingestor.edge.api.exception.ClientException;
import com.nubo.ingestor.edge.api.exception.error.ErrorCode;
import com.nubo.ingestor.edge.api.models.enums.ResponseMode;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class ClientReferenceDataServiceImpl implements ClientReferenceDataService {

    private final RestClientUtils restClientUtils;
    private final PropertiesConfig propertiesConfig;
    private final ReferenceDataTokenService referenceDataTokenService;

    @Override
    public DataReferenceOutDto getExternalInformation(Integer size) {
        return getExternalInformation(size, 0);
    }

    @Override
    public DataReferenceOutDto getExternalInformation(Integer size, Integer page) {
        if (propertiesConfig.getResponseMode() == ResponseMode.ARRAY) {
            return getArrayResponse();
        }
        return getPageResponse(size, page);
    }

    private DataReferenceOutDto getPageResponse(Integer size, Integer page) {
        try {
            URI uri = buildUriWithSize(size, page);
            HttpMethod method = HttpMethod.GET;

            log.info("Consulting external URI -> [GET] {}", uri);

            ResponseEntity<DataReferenceOutDto> response = restClientUtils.requestNoBodyWithResponseObject(
                    uri,
                    method,
                    getHttpHeaders(),
                    DataReferenceOutDto.class);

            if (!ObjectUtils.isEmpty(response.getBody())) {
                DataReferenceOutDto dataReferenceOutDto = response.getBody();
                log.info("Client response, page -> {}", dataReferenceOutDto.getPage());
                return dataReferenceOutDto;
            }

        } catch (ClientException ex) {
            throw ex;
        } catch (Exception ex) {
            throw new ClientException(ErrorCode.CLIENT_REFERENCE_DATA_ERROR, HttpStatus.BAD_GATEWAY, ex);
        }

        return DataReferenceOutDto.builder().build();
    }

    private DataReferenceOutDto getArrayResponse() {
        try {
            URI uri = buildUriWithDate();
            log.info("Consulting ARRAY endpoint -> [GET] {}", uri);

            ResponseEntity<List<?>> response = restClientUtils.requestNoBodyWithResponseObject(
                    uri,
                    HttpMethod.GET,
                    getHttpHeaders(),
                    new ParameterizedTypeReference<List<?>>() {
                    });

            if (response.getBody() != null) {
                List<?> rawList = response.getBody();
                List<String> content = rawList.stream()
                        .map(obj -> {
                            try {
                                if (obj instanceof String) {
                                    return (String) obj;
                                }
                                return ApplicationUtils.writeValueAsString(obj);
                            } catch (Exception e) {
                                log.error("Error serializing object in getArrayResponse", e);
                                return null;
                            }
                        })
                        .filter(Objects::nonNull)
                        .toList();

                return buildDataReferenceOutDto(content);
            } else {
                log.warn("Empty or unsuccessful response in getArrayResponse: status {}", response.getStatusCode());
                return buildDataReferenceOutDto(List.of());
            }
        } catch (ClientException ex) {
            throw ex;
        } catch (Exception ex) {
            log.error("Error in getArrayResponse", ex);
            throw new ClientException(ErrorCode.CLIENT_REFERENCE_DATA_ERROR, HttpStatus.BAD_GATEWAY, ex);
        }
    }

    private HttpHeaders getHttpHeaders() {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        if (propertiesConfig.isReferenceDataAuthEnabled()) {
            headers.setBearerAuth(referenceDataTokenService.getValidAccessToken());
        }
        return headers;
    }

    private URI buildUriWithSize(Integer size, Integer page) {
        String complement = propertiesConfig.getComplementUrl();
        String baseUrl = propertiesConfig.getReferenceDataUrl();
        String v2Prefix = propertiesConfig.isReferenceDataAuthEnabled() ? "/v2" : "";

        String fullUrl = baseUrl;
        if (StringUtils.hasText(complement)) {
            fullUrl = baseUrl + v2Prefix + (complement.startsWith("/") ? complement : "/" + complement);
        }

        return UriComponentsBuilder.fromUriString(fullUrl)
                .queryParam("size", size != null ? size : 500)
                .queryParam("page", page != null ? page : 0)
                .build()
                .toUri();
    }

    private URI buildUriWithDate() {
        String complement = propertiesConfig.getComplementUrl();
        String baseUrl = propertiesConfig.getReferenceDataUrl();
        String v2Prefix = propertiesConfig.isReferenceDataAuthEnabled() ? "/v2" : "";

        String today = LocalDate.now().toString();

        if (StringUtils.hasText(complement)) {
            complement = complement.replace("{date}", today);
        }

        return UriComponentsBuilder
                .fromUriString(baseUrl)
                .path(v2Prefix)
                .path(complement)
                .build()
                .toUri();
    }

    private DataReferenceOutDto buildDataReferenceOutDto(List<String> content) {
        return DataReferenceOutDto.builder()
                .content(content)
                .page(PageMetadataOutDto.builder()
                        .size(content.size())
                        .totalElements((long) content.size())
                        .totalPages(1)
                        .number(0)
                        .build())
                .build();
    }

}

```

## src/main/java/com/nubo/ingestor/edge/api/client/reference/data/service/impl/ReferenceDataTokenServiceImpl.java

```java
package com.nubo.ingestor.edge.api.client.reference.data.service.impl;

import com.nubo.ingestor.edge.api.application.properties.PropertiesConfig;
import com.nubo.ingestor.edge.api.application.util.RestClientUtils;
import com.nubo.ingestor.edge.api.client.reference.data.models.dto.response.AccessTokenOutDto;
import com.nubo.ingestor.edge.api.client.reference.data.service.ReferenceDataTokenService;
import com.nubo.ingestor.edge.api.exception.ClientException;
import com.nubo.ingestor.edge.api.exception.error.ErrorCode;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.util.StringUtils;

import java.net.URI;
import java.time.Instant;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class ReferenceDataTokenServiceImpl implements ReferenceDataTokenService {

    private static final long TOKEN_EXPIRATION_SAFETY_SECONDS = 30L;

    private final RestClientUtils restClientUtils;
    private final PropertiesConfig propertiesConfig;

    private volatile String cachedAccessToken;
    private volatile Instant accessTokenExpiresAt = Instant.EPOCH;

    @Override
    public String getValidAccessToken() {
        if (StringUtils.hasText(cachedAccessToken) && Instant.now().isBefore(accessTokenExpiresAt)) {
            return cachedAccessToken;
        }

        synchronized (this) {
            if (StringUtils.hasText(cachedAccessToken) && Instant.now().isBefore(accessTokenExpiresAt)) {
                return cachedAccessToken;
            }

            AccessTokenOutDto tokenResponse = requestToken();

            if (tokenResponse == null || !StringUtils.hasText(tokenResponse.getAccessToken())) {
                throw new ClientException(ErrorCode.CLIENT_REFERENCE_DATA_ERROR, HttpStatus.BAD_GATEWAY);
            }

            long expiresIn = tokenResponse.getExpiresIn() != null ? tokenResponse.getExpiresIn() : 60L;
            long cachedTtl = Math.max(1L, expiresIn - TOKEN_EXPIRATION_SAFETY_SECONDS);

            cachedAccessToken = tokenResponse.getAccessToken();
            accessTokenExpiresAt = Instant.now().plusSeconds(cachedTtl);

            log.info("Access token refreshed for reference-data client. Expires in {} seconds", expiresIn);
            return cachedAccessToken;
        }
    }

    private AccessTokenOutDto requestToken() {
        String tokenUrl = requireAuthValue(propertiesConfig.getReferenceDataAuthTokenUrl(), "client.reference-data.auth.token-url");
        String grantType = propertiesConfig.getReferenceDataAuthGrantType();
        String clientId = requireAuthValue(propertiesConfig.getReferenceDataAuthClientId(), "client.reference-data.auth.client-id");
        String clientSecret = requireAuthValue(propertiesConfig.getReferenceDataAuthClientSecret(), "client.reference-data.auth.client-secret");
        String username = requireAuthValue(propertiesConfig.getReferenceDataAuthUsername(), "client.reference-data.auth.username");
        String password = requireAuthValue(propertiesConfig.getReferenceDataAuthPassword(), "client.reference-data.auth.password");

        MultiValueMap<String, String> body = new LinkedMultiValueMap<>();
        body.add("grant_type", StringUtils.hasText(grantType) ? grantType : "password");
        body.add("client_id", clientId);
        body.add("client_secret", clientSecret);
        body.add("username", username);
        body.add("password", password);

        try {
            ResponseEntity<AccessTokenOutDto> tokenResponse = restClientUtils.requestWithResponseObject(
                    URI.create(tokenUrl),
                    HttpMethod.POST,
                    getTokenRequestHeaders(),
                    body,
                    AccessTokenOutDto.class);

            return tokenResponse.getBody();
        } catch (Exception ex) {
            throw new ClientException(ErrorCode.CLIENT_REFERENCE_DATA_ERROR, HttpStatus.BAD_GATEWAY, ex);
        }
    }

    private HttpHeaders getTokenRequestHeaders() {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
        headers.setAccept(List.of(MediaType.APPLICATION_JSON));
        return headers;
    }

    private String requireAuthValue(String value, String propertyName) {
        if (!StringUtils.hasText(value)) {
            throw new ClientException(ErrorCode.CLIENT_REFERENCE_DATA_ERROR, HttpStatus.INTERNAL_SERVER_ERROR,
                    new IllegalArgumentException("Missing required property: " + propertyName));
        }
        return value;
    }
}
```

## src/main/java/com/nubo/ingestor/edge/api/exception/ClientException.java

```java
package com.nubo.ingestor.edge.api.exception;

import com.nubo.ingestor.edge.api.exception.error.ErrorCode;
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

## src/main/java/com/nubo/ingestor/edge/api/exception/ServiceException.java

```java
package com.nubo.ingestor.edge.api.exception;


import com.nubo.ingestor.edge.api.exception.error.ErrorCode;
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

## src/main/java/com/nubo/ingestor/edge/api/exception/error/ErrorCode.java

```java
package com.nubo.ingestor.edge.api.exception.error;

import lombok.Getter;

@Getter
public enum ErrorCode {

    ERROR_KAFKA_PRODUCER_NUBO("Error Producer Kafka Nubo"),
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
    CLIENT_REFERENCE_DATA_ERROR("Error Occurred In Reference Data");

    private final String message;

    ErrorCode(String message) {
        this.message = message;
    }

    public String getName() {
        return this.name();
    }

}

```

## src/main/java/com/nubo/ingestor/edge/api/exception/error/ErrorResponse.java

```java
package com.nubo.ingestor.edge.api.exception.error;

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

## src/main/java/com/nubo/ingestor/edge/api/exception/error/ErrorValidation.java

```java
package com.nubo.ingestor.edge.api.exception.error;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ErrorValidation {

    private String id;
    private String description;

}

```

## src/main/java/com/nubo/ingestor/edge/api/exception/handler/GlobalExceptionHandler.java

```java
package com.nubo.ingestor.edge.api.exception.handler;


import com.nubo.ingestor.edge.api.application.properties.PropertiesContext;
import com.nubo.ingestor.edge.api.application.util.ApplicationUtils;
import com.nubo.ingestor.edge.api.exception.ClientException;
import com.nubo.ingestor.edge.api.exception.ServiceException;
import com.nubo.ingestor.edge.api.exception.error.ErrorCode;
import com.nubo.ingestor.edge.api.exception.error.ErrorResponse;
import com.nubo.ingestor.edge.api.exception.error.ErrorValidation;
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

## src/main/java/com/nubo/ingestor/edge/api/models/dto/response/SynchronizeOutDto.java

```java
package com.nubo.ingestor.edge.api.models.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SynchronizeOutDto {

    private LocalDateTime processingStartTime;

    private LocalDateTime processingEndTime;

    private Long totalProcessed;

}

```

## src/main/java/com/nubo/ingestor/edge/api/models/enums/PropertiesEnum.java

```java
package com.nubo.ingestor.edge.api.models.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
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
}

```

## src/main/java/com/nubo/ingestor/edge/api/models/enums/ResponseMode.java

```java
package com.nubo.ingestor.edge.api.models.enums;

public enum ResponseMode {
    PAGE,
    ARRAY
}

```

## src/main/java/com/nubo/ingestor/edge/api/models/enums/VersionApiEnum.java

```java
package com.nubo.ingestor.edge.api.models.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Arrays;

@Getter
@RequiredArgsConstructor
public enum VersionApiEnum {

    V1("v1"),
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

## src/main/java/com/nubo/ingestor/edge/api/service/SynchronizationService.java

```java
package com.nubo.ingestor.edge.api.service;

import com.nubo.ingestor.edge.api.models.dto.response.SynchronizeOutDto;

public interface SynchronizationService {

    SynchronizeOutDto synchronizeDataReference(Integer size);
}

```

## src/main/java/com/nubo/ingestor/edge/api/service/impl/SynchronizationServiceImpl.java

```java
package com.nubo.ingestor.edge.api.service.impl;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.CompletionException;
import java.util.concurrent.Executor;
import java.util.concurrent.TimeUnit;

import org.springframework.http.HttpStatus;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.util.StopWatch;

import com.nubo.ingestor.edge.api.application.properties.PropertiesConfig;
import com.nubo.ingestor.edge.api.application.properties.PropertiesContext;
import com.nubo.ingestor.edge.api.client.kafka.producer.KafkaNuboAdapter;
import com.nubo.ingestor.edge.api.client.reference.data.models.dto.response.DataReferenceOutDto;
import com.nubo.ingestor.edge.api.client.reference.data.models.dto.response.PageMetadataOutDto;
import com.nubo.ingestor.edge.api.client.reference.data.service.ClientReferenceDataService;
import com.nubo.ingestor.edge.api.exception.ServiceException;
import com.nubo.ingestor.edge.api.exception.error.ErrorCode;
import com.nubo.ingestor.edge.api.models.dto.response.SynchronizeOutDto;
import com.nubo.ingestor.edge.api.models.enums.VersionApiEnum;
import com.nubo.ingestor.edge.api.service.SynchronizationService;

import io.micrometer.core.instrument.MeterRegistry;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class SynchronizationServiceImpl implements SynchronizationService {

    private final ClientReferenceDataService clientReferenceDataService;
    private final KafkaNuboAdapter kafkaNuboAdapter;
    private final PropertiesConfig propertiesConfig;
    @Qualifier("synchronizationTaskExecutor")
    private final Executor synchronizationTaskExecutor;
    private final MeterRegistry meterRegistry;

    @PostConstruct
    private void initSynchronizeDataReference() {
        if (!propertiesConfig.isSyncStartupEnabled()) {
            log.info("Skipping startup synchronization because performance.sync.startup-enabled=false");
            return;
        }

        try {
            LocalDateTime startDateTime = LocalDateTime.now();
            DataReferenceOutDto data = clientReferenceDataService
                    .getExternalInformation(propertiesConfig.getSyncDefaultPageSize(), 0);
            long totalProcessed = sendMessages(data.getContent(), 0);
            log.info("{}", SynchronizeOutDto.builder()
                    .processingStartTime(startDateTime)
                    .processingEndTime(LocalDateTime.now())
                    .totalProcessed(totalProcessed)
                    .build());
        } catch (Exception e) {
            log.error("Error PostConstruct -> {}", e.getMessage());
        }
    }

    @Override
    public SynchronizeOutDto synchronizeDataReference(Integer size) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return synchronizeDataReferenceV1(size);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private SynchronizeOutDto synchronizeDataReferenceV1(Integer pageSize) {
        log.info("Start method synchronizeDataReferenceV1");

        LocalDateTime startDateTime = LocalDateTime.now();
        StopWatch stopWatch = new StopWatch("synchronizeDataReferenceV1");
        stopWatch.start("sync_total");

        long totalProcessed = 0L;
        int requestedPageSize = pageSize != null ? pageSize : propertiesConfig.getSyncDefaultPageSize();

        DataReferenceOutDto firstPage = clientReferenceDataService.getExternalInformation(requestedPageSize, 0);
        totalProcessed += sendMessages(firstPage.getContent(), 0);

        PageMetadataOutDto pageMetadata = firstPage.getPage();
        if (pageMetadata != null && pageMetadata.getTotalPages() != null) {
            int totalPages = pageMetadata.getTotalPages();
            totalProcessed += processRemainingPages(requestedPageSize, totalPages);
            if (log.isInfoEnabled()) {
                log.info("Synchronization pages processed: {}", totalPages);
            }
        }

        stopWatch.stop();
        meterRegistry.timer("ingestor.sync.total.time").record(stopWatch.getTotalTimeNanos(), TimeUnit.NANOSECONDS);
        meterRegistry.counter("ingestor.sync.records.processed").increment(totalProcessed);

        log.info("End method synchronizeDataReferenceV1");
        return SynchronizeOutDto.builder()
                .processingStartTime(startDateTime)
                .processingEndTime(LocalDateTime.now())
                .totalProcessed(totalProcessed)
                .build();
    }

    private long processRemainingPages(int pageSize, int totalPages) {
        int pageConcurrency = Math.max(1, propertiesConfig.getSyncPageConcurrency());
        long totalProcessed = 0L;

        for (int startPage = 1; startPage < totalPages; startPage += pageConcurrency) {
            int endPageExclusive = Math.min(startPage + pageConcurrency, totalPages);
            List<CompletableFuture<Long>> chunk = new ArrayList<>(endPageExclusive - startPage);

            for (int currentPage = startPage; currentPage < endPageExclusive; currentPage++) {
                final int page = currentPage;
                chunk.add(CompletableFuture.supplyAsync(
                                () -> clientReferenceDataService.getExternalInformation(pageSize, page),
                                synchronizationTaskExecutor)
                        .thenApply(data -> sendMessages(data.getContent(), page)));
            }

            for (CompletableFuture<Long> future : chunk) {
                totalProcessed += safeJoin(future);
            }
        }

        return totalProcessed;
    }

    private long sendMessages(List<String> content, int pageNumber) {
        if (content == null || content.isEmpty()) {
            return 0L;
        }

        StopWatch stopWatch = new StopWatch("kafka_batch_publish");
        stopWatch.start("publish_batch");
        long processed = safeJoin(kafkaNuboAdapter.sendMessagesBatch(content));
        stopWatch.stop();

        meterRegistry.timer("ingestor.sync.kafka.batch.time")
                .record(stopWatch.getTotalTimeNanos(), TimeUnit.NANOSECONDS);
        if (log.isDebugEnabled()) {
            log.debug("Published page {} with {} records in {} ms",
                    pageNumber,
                    processed,
                    stopWatch.getTotalTimeMillis());
        }
        return processed;
    }

    private long safeJoin(CompletableFuture<Long> future) {
        try {
            return future.get(propertiesConfig.getSyncPublishTimeoutSeconds(), TimeUnit.SECONDS);
        } catch (Exception ex) {
            throw new CompletionException(ex);
        }
    }
}

```

## src/main/java/com/nubo/ingestor/edge/api/web/controller/SynchronizationRestController.java

```java
package com.nubo.ingestor.edge.api.web.controller;

import com.nubo.ingestor.edge.api.models.dto.response.SynchronizeOutDto;
import com.nubo.ingestor.edge.api.service.SynchronizationService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@Tag(name = "Synchronization")
@RequestMapping("/{version}/synchronization")
@RestController
@RequiredArgsConstructor
public class SynchronizationRestController {

    private final SynchronizationService synchronizationService;

    @Operation(summary = "Synchronize Data Reference and Participants Nubo", description = "Synchronize Data Reference and Participants Nubo")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = SynchronizeOutDto.class)))})
    @GetMapping("/reference-data")
    public ResponseEntity<SynchronizeOutDto> synchronize(@RequestParam(required = false) Integer size) {
        return ResponseEntity.ok(synchronizationService.synchronizeDataReference(size));
    }
}
```

## src/main/resources/application-dev.yml

```yaml
kafka:
  nubo:
    retries: ${KAFKA_NUBO_RETRIES:5}
    bootstrap-servers: ${KAFKA_NUBO_BOOTSTRAP_SERVER}
    auto-offset-reset: ${KAFKA_NUBO_AUTO_OFFSET_RESET:latest}
    group-id: ${KAFKA_NUBO_GROUP_ID}
    security:
      protocol: ${KAFKA_PROPERTIES_SECURITY_PROTOCOL}
    sasl:
      mechanism: ${KAFKA_PROPERTIES_SASL_MECHANISM}
      jaas:
        config: ${KAFKA_PROPERTIES_SASL_JAAS_CONFIG}
    producer:
      topic-name: ${KAFKA_NUBO_TOPIC_NAME}
      acks: ${KAFKA_NUBO_ACKS:all}
      compression-type: ${KAFKA_NUBO_COMPRESSION_TYPE:snappy}
      batch-size: ${KAFKA_NUBO_BATCH_SIZE:65536}
      linger-ms: ${KAFKA_NUBO_LINGER_MS:20}
      max-in-flight-requests-per-connection: ${KAFKA_NUBO_MAX_IN_FLIGHT:5}
      delivery-timeout-ms: ${KAFKA_NUBO_DELIVERY_TIMEOUT_MS:120000}
logging:
  config: classpath:log/log4j2.properties
client:
  reference-data:
    url: ${REFERENCE_DATA_HOST}
    complement: ${REFERENCE_DATA_COMPLEMENT_URL}
    response-mode: ${REFERENCE_DATA_RESPONSE_MODE:PAGE}
    auth:
      token-url: ${REFERENCE_DATA_TOKEN_URL:}
      grant-type: ${REFERENCE_DATA_TOKEN_GRANT_TYPE:password}
      client-id: ${REFERENCE_DATA_TOKEN_CLIENT_ID:}
      client-secret: ${REFERENCE_DATA_TOKEN_CLIENT_SECRET:}
      enabled: ${REFERENCE_DATA_AUTH_ENABLED:false}
      username: ${REFERENCE_DATA_TOKEN_USERNAME:}
      password: ${REFERENCE_DATA_TOKEN_PASSWORD:}
performance:
  sync:
    default-page-size: ${SYNC_DEFAULT_PAGE_SIZE:500}
    page-concurrency: ${SYNC_PAGE_CONCURRENCY:4}
    publish-timeout-seconds: ${SYNC_PUBLISH_TIMEOUT_SECONDS:180}
    startup-enabled: ${SYNC_STARTUP_ENABLED:true}
```

## src/main/resources/application-local.yml

```yaml
kafka:
  nubo:
    retries: ${KAFKA_NUBO_RETRIES:5}
    bootstrap-servers: ${KAFKA_NUBO_BOOTSTRAP_SERVER}
    auto-offset-reset: ${KAFKA_NUBO_AUTO_OFFSET_RESET:latest}
    group-id: ${KAFKA_NUBO_GROUP_ID}
    security:
      protocol: PLAINTEXT
    sasl:
      mechanism: ""
      jaas:
        config: "org.apache.kafka.common.security.scram.ScramLoginModule required;"
    producer:
      topic-name: ${KAFKA_NUBO_TOPIC_NAME}
      acks: ${KAFKA_NUBO_ACKS:all}
      compression-type: ${KAFKA_NUBO_COMPRESSION_TYPE:snappy}
      batch-size: ${KAFKA_NUBO_BATCH_SIZE:65536}
      linger-ms: ${KAFKA_NUBO_LINGER_MS:20}
      max-in-flight-requests-per-connection: ${KAFKA_NUBO_MAX_IN_FLIGHT:5}
      delivery-timeout-ms: ${KAFKA_NUBO_DELIVERY_TIMEOUT_MS:120000}
logging:
  config: classpath:log/log4j2.properties
client:
  reference-data:
    url: ${REFERENCE_DATA_HOST}
    complement: ${REFERENCE_DATA_COMPLEMENT_URL}
    response-mode: ${REFERENCE_DATA_RESPONSE_MODE:PAGE}
    auth:
      token-url: ${REFERENCE_DATA_TOKEN_URL:}
      grant-type: ${REFERENCE_DATA_TOKEN_GRANT_TYPE:password}
      client-id: ${REFERENCE_DATA_TOKEN_CLIENT_ID:}
      client-secret: ${REFERENCE_DATA_TOKEN_CLIENT_SECRET:}
      enabled: ${REFERENCE_DATA_AUTH_ENABLED:false}
      username: ${REFERENCE_DATA_TOKEN_USERNAME:}
      password: ${REFERENCE_DATA_TOKEN_PASSWORD:}

performance:
  sync:
    default-page-size: ${SYNC_DEFAULT_PAGE_SIZE:500}
    page-concurrency: ${SYNC_PAGE_CONCURRENCY:4}
    publish-timeout-seconds: ${SYNC_PUBLISH_TIMEOUT_SECONDS:180}
    startup-enabled: ${SYNC_STARTUP_ENABLED:true}


```

## src/main/resources/application-prod.yml

```yaml
kafka:
  nubo:
    retries: ${KAFKA_NUBO_RETRIES:5}
    bootstrap-servers: ${KAFKA_NUBO_BOOTSTRAP_SERVER}
    auto-offset-reset: ${KAFKA_NUBO_AUTO_OFFSET_RESET:latest}
    group-id: ${KAFKA_NUBO_GROUP_ID}
    security:
      protocol: ${KAFKA_PROPERTIES_SECURITY_PROTOCOL}
    sasl:
      mechanism: ${KAFKA_PROPERTIES_SASL_MECHANISM}
      jaas:
        config: ${KAFKA_PROPERTIES_SASL_JAAS_CONFIG}
    producer:
      topic-name: ${KAFKA_NUBO_TOPIC_NAME}
      acks: ${KAFKA_NUBO_ACKS:all}
      compression-type: ${KAFKA_NUBO_COMPRESSION_TYPE:snappy}
      batch-size: ${KAFKA_NUBO_BATCH_SIZE:65536}
      linger-ms: ${KAFKA_NUBO_LINGER_MS:20}
      max-in-flight-requests-per-connection: ${KAFKA_NUBO_MAX_IN_FLIGHT:5}
      delivery-timeout-ms: ${KAFKA_NUBO_DELIVERY_TIMEOUT_MS:120000}
logging:
  config: classpath:log/log4j2-prod.properties
client:
  reference-data:
    url: ${REFERENCE_DATA_HOST}
    complement: ${REFERENCE_DATA_COMPLEMENT_URL}
    response-mode: ${REFERENCE_DATA_RESPONSE_MODE:PAGE}
    auth:
      token-url: ${REFERENCE_DATA_TOKEN_URL:}
      grant-type: ${REFERENCE_DATA_TOKEN_GRANT_TYPE:password}
      client-id: ${REFERENCE_DATA_TOKEN_CLIENT_ID:}
      client-secret: ${REFERENCE_DATA_TOKEN_CLIENT_SECRET:}
      enabled: ${REFERENCE_DATA_AUTH_ENABLED:false}
      username: ${REFERENCE_DATA_TOKEN_USERNAME:}
      password: ${REFERENCE_DATA_TOKEN_PASSWORD:}
performance:
  sync:
    default-page-size: ${SYNC_DEFAULT_PAGE_SIZE:500}
    page-concurrency: ${SYNC_PAGE_CONCURRENCY:4}
    publish-timeout-seconds: ${SYNC_PUBLISH_TIMEOUT_SECONDS:180}
    startup-enabled: ${SYNC_STARTUP_ENABLED:true}
```

## src/main/resources/application-qa.yml

```yaml
kafka:
  nubo:
    retries: ${KAFKA_NUBO_RETRIES:5}
    bootstrap-servers: ${KAFKA_NUBO_BOOTSTRAP_SERVER}
    auto-offset-reset: ${KAFKA_NUBO_AUTO_OFFSET_RESET:latest}
    group-id: ${KAFKA_NUBO_GROUP_ID}
    security:
      protocol: ${KAFKA_PROPERTIES_SECURITY_PROTOCOL}
    sasl:
      mechanism: ${KAFKA_PROPERTIES_SASL_MECHANISM}
      jaas:
        config: ${KAFKA_PROPERTIES_SASL_JAAS_CONFIG}
    producer:
      topic-name: ${KAFKA_NUBO_TOPIC_NAME}
      acks: ${KAFKA_NUBO_ACKS:all}
      compression-type: ${KAFKA_NUBO_COMPRESSION_TYPE:snappy}
      batch-size: ${KAFKA_NUBO_BATCH_SIZE:65536}
      linger-ms: ${KAFKA_NUBO_LINGER_MS:20}
      max-in-flight-requests-per-connection: ${KAFKA_NUBO_MAX_IN_FLIGHT:5}
      delivery-timeout-ms: ${KAFKA_NUBO_DELIVERY_TIMEOUT_MS:120000}
logging:
  config: classpath:log/log4j2.properties
client:
  reference-data:
    url: ${REFERENCE_DATA_HOST}
    complement: ${REFERENCE_DATA_COMPLEMENT_URL}
    response-mode: ${REFERENCE_DATA_RESPONSE_MODE:PAGE}
    auth:
      token-url: ${REFERENCE_DATA_TOKEN_URL:}
      grant-type: ${REFERENCE_DATA_TOKEN_GRANT_TYPE:password}
      client-id: ${REFERENCE_DATA_TOKEN_CLIENT_ID:}
      client-secret: ${REFERENCE_DATA_TOKEN_CLIENT_SECRET:}
      enabled: ${REFERENCE_DATA_AUTH_ENABLED:false}
      username: ${REFERENCE_DATA_TOKEN_USERNAME:}
      password: ${REFERENCE_DATA_TOKEN_PASSWORD:}
performance:
  sync:
    default-page-size: ${SYNC_DEFAULT_PAGE_SIZE:500}
    page-concurrency: ${SYNC_PAGE_CONCURRENCY:4}
    publish-timeout-seconds: ${SYNC_PUBLISH_TIMEOUT_SECONDS:180}
    startup-enabled: ${SYNC_STARTUP_ENABLED:true}
```

## src/main/resources/application-uat.yml

```yaml
kafka:
  nubo:
    retries: ${KAFKA_NUBO_RETRIES:5}
    bootstrap-servers: ${KAFKA_NUBO_BOOTSTRAP_SERVER}
    auto-offset-reset: ${KAFKA_NUBO_AUTO_OFFSET_RESET:latest}
    group-id: ${KAFKA_NUBO_GROUP_ID}
    security:
      protocol: ${KAFKA_PROPERTIES_SECURITY_PROTOCOL}
    sasl:
      mechanism:  ${KAFKA_PROPERTIES_SASL_MECHANISM}
      jaas:
        config: ${KAFKA_PROPERTIES_SASL_JAAS_CONFIG}
    producer:
      topic-name: ${KAFKA_NUBO_TOPIC_NAME}
      acks: ${KAFKA_NUBO_ACKS:all}
      compression-type: ${KAFKA_NUBO_COMPRESSION_TYPE:snappy}
      batch-size: ${KAFKA_NUBO_BATCH_SIZE:65536}
      linger-ms: ${KAFKA_NUBO_LINGER_MS:20}
      max-in-flight-requests-per-connection: ${KAFKA_NUBO_MAX_IN_FLIGHT:5}
      delivery-timeout-ms: ${KAFKA_NUBO_DELIVERY_TIMEOUT_MS:120000}
logging:
  config: classpath:log/log4j2.properties
client:
  reference-data:
    url: ${REFERENCE_DATA_HOST}
    complement: ${REFERENCE_DATA_COMPLEMENT_URL}
    response-mode: ${REFERENCE_DATA_RESPONSE_MODE:PAGE}
    auth:
      token-url: ${REFERENCE_DATA_TOKEN_URL:}
      grant-type: ${REFERENCE_DATA_TOKEN_GRANT_TYPE:password}
      client-id: ${REFERENCE_DATA_TOKEN_CLIENT_ID:}
      client-secret: ${REFERENCE_DATA_TOKEN_CLIENT_SECRET:}
      enabled: ${REFERENCE_DATA_AUTH_ENABLED:false}
      username: ${REFERENCE_DATA_TOKEN_USERNAME:}
      password: ${REFERENCE_DATA_TOKEN_PASSWORD:}
performance:
  sync:
    default-page-size: ${SYNC_DEFAULT_PAGE_SIZE:500}
    page-concurrency: ${SYNC_PAGE_CONCURRENCY:4}
    publish-timeout-seconds: ${SYNC_PUBLISH_TIMEOUT_SECONDS:180}
    startup-enabled: ${SYNC_STARTUP_ENABLED:true}
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
  endpoints:
    web:
      exposure:
        include: health,info,metrics,prometheus
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
```

## src/main/resources/banner.txt

```
,--.,--.  ,--. ,----.   ,------. ,---.,--------.,-----. ,------. ,------.,------.   ,----.   ,------.  ,---.  ,------. ,--.
|  ||  ,'.|  |'  .-./   |  .---''   .-'--.  .--'  .-.  '|  .--. '|  .---'|  .-.  \ '  .-./   |  .---' /  O  \ |  .--. '|  |
|  ||  |' '  ||  | .---.|  `--, `.  `-.  |  |  |  | |  ||  '--'.'|  `--, |  |  \  :|  | .---.|  `--, |  .-.  ||  '--' ||  |
|  ||  | `   |'  '--'  ||  `---..-'    | |  |  '  '-'  '|  |\  \ |  `---.|  '--'  /'  '--'  ||  `---.|  | |  ||  | --' |  |
`--'`--'  `--' `------' `------'`-----'  `--'   `-----' `--' '--'`------'`-------'  `------' `------'`--' `--'`--'     `--'

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
