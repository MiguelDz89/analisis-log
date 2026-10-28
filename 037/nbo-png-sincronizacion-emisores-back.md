# nbo-png-sincronizacion-emisores-back

Código Java de producción y configuraciones, sin tests. Cada sección contiene el archivo original completo y su ruta. Captura: 28/10/2026.

## Índice

1. `.mvn/wrapper/maven-wrapper.properties`
2. `mvnw`
3. `mvnw.cmd`
4. `pom.xml`
5. `src/main/java/com/nubo/issuer/sync/IssuerSyncApplication.java`
6. `src/main/java/com/nubo/issuer/sync/application/config/CacheConfig.java`
7. `src/main/java/com/nubo/issuer/sync/application/config/KafkaConsumerConfig.java`
8. `src/main/java/com/nubo/issuer/sync/application/config/KafkaProducerConfig.java`
9. `src/main/java/com/nubo/issuer/sync/application/context/GlobalContext.java`
10. `src/main/java/com/nubo/issuer/sync/application/database/NamingStrategyConfig.java`
11. `src/main/java/com/nubo/issuer/sync/application/database/UpperNamingConfig.java`
12. `src/main/java/com/nubo/issuer/sync/application/properties/PropertiesConfig.java`
13. `src/main/java/com/nubo/issuer/sync/application/util/ApplicationUtils.java`
14. `src/main/java/com/nubo/issuer/sync/exception/ServiceException.java`
15. `src/main/java/com/nubo/issuer/sync/exception/error/ErrorCode.java`
16. `src/main/java/com/nubo/issuer/sync/exception/error/ErrorResponse.java`
17. `src/main/java/com/nubo/issuer/sync/exception/error/ErrorValidation.java`
18. `src/main/java/com/nubo/issuer/sync/exception/handler/CustomKafkaErrorHandler.java`
19. `src/main/java/com/nubo/issuer/sync/exception/kafka/KafkaErrorBuild.java`
20. `src/main/java/com/nubo/issuer/sync/kafka/consumer/KafkaNuboAdapter.java`
21. `src/main/java/com/nubo/issuer/sync/kafka/producer/KafkaNuboProducer.java`
22. `src/main/java/com/nubo/issuer/sync/models/domain/IssuerEventMessage.java`
23. `src/main/java/com/nubo/issuer/sync/models/domain/IssuerKafkaEvent.java`
24. `src/main/java/com/nubo/issuer/sync/models/dto/request/IssuerInDto.java`
25. `src/main/java/com/nubo/issuer/sync/models/dto/response/ErrorResponseOutDto.java`
26. `src/main/java/com/nubo/issuer/sync/models/entity/CountryEntity.java`
27. `src/main/java/com/nubo/issuer/sync/models/entity/CurrencyEntity.java`
28. `src/main/java/com/nubo/issuer/sync/models/entity/DepositoryEntity.java`
29. `src/main/java/com/nubo/issuer/sync/models/entity/DepositoryMappingEntity.java`
30. `src/main/java/com/nubo/issuer/sync/models/entity/GicsEntity.java`
31. `src/main/java/com/nubo/issuer/sync/models/entity/IssuerEntity.java`
32. `src/main/java/com/nubo/issuer/sync/models/entity/StatusEntity.java`
33. `src/main/java/com/nubo/issuer/sync/models/entity/StatusMappingEntity.java`
34. `src/main/java/com/nubo/issuer/sync/models/entity/TypeEntity.java`
35. `src/main/java/com/nubo/issuer/sync/models/enums/DepositoryDefaultEnum.java`
36. `src/main/java/com/nubo/issuer/sync/models/enums/EventTypeEnum.java`
37. `src/main/java/com/nubo/issuer/sync/models/enums/ExternalSystemEnum.java`
38. `src/main/java/com/nubo/issuer/sync/models/enums/StatusMappingEnum.java`
39. `src/main/java/com/nubo/issuer/sync/repository/CountryRepository.java`
40. `src/main/java/com/nubo/issuer/sync/repository/DepositoryMappingRepository.java`
41. `src/main/java/com/nubo/issuer/sync/repository/DepositoryRepository.java`
42. `src/main/java/com/nubo/issuer/sync/repository/GicsRepository.java`
43. `src/main/java/com/nubo/issuer/sync/repository/IssuerRepository.java`
44. `src/main/java/com/nubo/issuer/sync/repository/StatusMappingRepository.java`
45. `src/main/java/com/nubo/issuer/sync/repository/StatusRepository.java`
46. `src/main/java/com/nubo/issuer/sync/repository/TypeRepository.java`
47. `src/main/java/com/nubo/issuer/sync/service/BatchCacheService.java`
48. `src/main/java/com/nubo/issuer/sync/service/Impl/BatchCacheServiceImpl.java`
49. `src/main/java/com/nubo/issuer/sync/service/Impl/IssuerSyncServiceImpl.java`
50. `src/main/java/com/nubo/issuer/sync/service/IssuerSyncService.java`
51. `src/main/resources/application-dev.yml`
52. `src/main/resources/application-local.yml`
53. `src/main/resources/application-prod.yml`
54. `src/main/resources/application-qa.yml`
55. `src/main/resources/application-uat.yml`
56. `src/main/resources/application.yml`
57. `src/main/resources/banner.txt`
58. `src/main/resources/log/JsonEventLayout_error.json`
59. `src/main/resources/log/JsonEventLayout_info.json`
60. `src/main/resources/log/JsonEventLayout_trace.json`
61. `src/main/resources/log/log4j2-prod.properties`
62. `src/main/resources/log/log4j2.properties`

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
	<groupId>com.nubo.issuer.sync</groupId>
	<artifactId>issuer-sync</artifactId>
	<version>0.37.0-alpha.1</version>
	<name>${project.artifactId}</name>
	<description>Issuer Sync</description>

	<properties>
		<java.version>17</java.version>
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
			<version>2.8.5</version>
		</dependency>
		<!-- Security -->
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-security</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-oauth2-resource-server</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.security</groupId>
			<artifactId>spring-security-test</artifactId>
			<scope>test</scope>
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
		<!-- Json -->
		<dependency>
			<groupId>com.google.code.gson</groupId>
			<artifactId>gson</artifactId>
			<version>2.11.0</version>
		</dependency>
		<!-- Cache  -->
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-cache</artifactId>
		</dependency>
		<dependency>
			<groupId>com.github.ben-manes.caffeine</groupId>
			<artifactId>caffeine</artifactId>
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
			<groupId>org.xmlunit</groupId>
			<artifactId>xmlunit-core</artifactId>
			<version>2.10.0</version>
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
								<exclude>**/IssuerSyncApplication.class</exclude>
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

## src/main/java/com/nubo/issuer/sync/IssuerSyncApplication.java

```java
package com.nubo.issuer.sync;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class IssuerSyncApplication {

	public static void main(String[] args) {
		SpringApplication.run(IssuerSyncApplication.class, args);
	}

}

```

## src/main/java/com/nubo/issuer/sync/application/config/CacheConfig.java

```java
package com.nubo.issuer.sync.application.config;

import java.util.Arrays;
import java.util.concurrent.TimeUnit;

import org.springframework.cache.Cache;
import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.cache.caffeine.CaffeineCache;
import org.springframework.cache.support.SimpleCacheManager;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.github.benmanes.caffeine.cache.Caffeine;

@Configuration
@EnableCaching
public class CacheConfig {

    @Bean
    @SuppressWarnings("null")
    public CacheManager cacheManager() {
        SimpleCacheManager cacheManager = new SimpleCacheManager();

        cacheManager.setCaches(Arrays.asList(
                buildCache("types", 1, TimeUnit.HOURS),
                buildCache("depositories", 1, TimeUnit.HOURS),
                buildCache("status", 1, TimeUnit.HOURS),
                buildCache("countries", 1, TimeUnit.HOURS),

                buildCache("gics", 10, TimeUnit.MINUTES)));

        return cacheManager;
    }

    @SuppressWarnings("null")
    private Cache buildCache(String name, long duration, TimeUnit timeUnit) {
        return new CaffeineCache(name, Caffeine.newBuilder()
                .expireAfterWrite(duration, timeUnit)
                .maximumSize(2000)
                .recordStats()
                .build());
    }

}

```

## src/main/java/com/nubo/issuer/sync/application/config/KafkaConsumerConfig.java

```java
package com.nubo.issuer.sync.application.config;

import com.nubo.issuer.sync.application.properties.PropertiesConfig;
import com.nubo.issuer.sync.application.util.ApplicationUtils;
import com.nubo.issuer.sync.exception.ServiceException;
import com.nubo.issuer.sync.exception.error.ErrorCode;
import com.nubo.issuer.sync.exception.kafka.KafkaErrorBuild;
import com.nubo.issuer.sync.models.dto.request.IssuerInDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.kafka.clients.consumer.ConsumerConfig;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.apache.kafka.common.header.Header;
import org.apache.kafka.common.serialization.StringDeserializer;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.kafka.annotation.EnableKafka;
import org.springframework.kafka.config.ConcurrentKafkaListenerContainerFactory;
import org.springframework.kafka.core.ConsumerFactory;
import org.springframework.kafka.core.DefaultKafkaConsumerFactory;
import org.springframework.kafka.listener.CommonErrorHandler;
import org.springframework.kafka.listener.DefaultErrorHandler;
import org.springframework.kafka.listener.ListenerExecutionFailedException;
import org.springframework.kafka.support.KafkaHeaders;
import org.springframework.kafka.support.serializer.DeserializationException;
import org.springframework.kafka.support.serializer.ErrorHandlingDeserializer;
import org.springframework.kafka.support.serializer.JsonDeserializer;
import org.springframework.util.backoff.FixedBackOff;

import java.nio.ByteBuffer;
import java.util.HashMap;
import java.util.Map;

@Slf4j
@EnableKafka
@Configuration
@RequiredArgsConstructor
public class KafkaConsumerConfig {

    private final PropertiesConfig propertiesConfig;
    private final Environment environment;

    @Bean
    public ConsumerFactory<String, IssuerInDto> consumerFactoryKafkaNubo() {

        Map<String, Object> configProps = new HashMap<>();

        configProps.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, propertiesConfig.getKafkaNuboBootstrapServers());
        configProps.put(ConsumerConfig.GROUP_ID_CONFIG, propertiesConfig.getKafkaNuboConsumerGroupId());
        configProps.put(ConsumerConfig.AUTO_OFFSET_RESET_CONFIG,propertiesConfig.getKafkaNuboAutoOffsetReset());
        configProps.put(ConsumerConfig.MAX_POLL_RECORDS_CONFIG, propertiesConfig.getKafkaNuboConsumerMaxPollRecords());
        configProps.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG,StringDeserializer.class);
        configProps.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG,ErrorHandlingDeserializer.class);
        configProps.put(ErrorHandlingDeserializer.VALUE_DESERIALIZER_CLASS,JsonDeserializer.class);
        configProps.put(JsonDeserializer.VALUE_DEFAULT_TYPE,IssuerInDto.class);
        configProps.put(JsonDeserializer.TRUSTED_PACKAGES,"com.nubo.issuer.sync");

        configProps.put("security.protocol",
                propertiesConfig.getKafkaNuboSecurityProtocol());

        if (!isLocalProfile()) {
            configProps.put("sasl.mechanism",
                    propertiesConfig.getKafkaNuboSaslMechanism());
            configProps.put("sasl.jaas.config",
                    propertiesConfig.getKafkaNuboSaslJaasConfig());
        }

        return new DefaultKafkaConsumerFactory<>(
                configProps,
                new StringDeserializer(),
                new ErrorHandlingDeserializer<>(new JsonDeserializer<>(IssuerInDto.class))
        );
    }

    @Bean
    public ConcurrentKafkaListenerContainerFactory<String, IssuerInDto>
    kafkaNuboListenerContainerFactory(
            @Qualifier("kafkaErrorHandler") CommonErrorHandler errorHandler) {

        ConcurrentKafkaListenerContainerFactory<String, IssuerInDto> factory =
                new ConcurrentKafkaListenerContainerFactory<>();

        factory.setConsumerFactory(consumerFactoryKafkaNubo());
        factory.setCommonErrorHandler(errorHandler);
        factory.setConcurrency(propertiesConfig.getKafkaNuboConsumerConcurrency());
        factory.getContainerProperties().setDeliveryAttemptHeader(true);

        return factory;
    }

    @Bean(name = "kafkaErrorHandler")
    public DefaultErrorHandler kafkaErrorHandler(KafkaErrorBuild kafkaErrorBuilder) {

        FixedBackOff backOff =
                new FixedBackOff(2000L, propertiesConfig.getKafkaNuboRetries());

        DefaultErrorHandler errorHandler = new DefaultErrorHandler(
                (record, exception) -> {

                    Integer deliveryAttempt = getDeliveryAttempt(record);

                    ErrorCode errorCode = resolveKafkaErrorCode(exception);

                    String messageIssuers = safeConvertPayloadToJson(record.value());

                    Throwable rootCause = getRootCause(exception);

                    log.error(
                            """
                            Kafka consumer error detected.
                            errorCode: {}
                            topic: {}
                            partition: {}
                            offset: {}
                            key: {}
                            deliveryAttempt: {}
                            exceptionClass: {}
                            exceptionMessage: {}
                            rootCauseClass: {}
                            rootCauseMessage: {}
                            causeChain: {}
                            payload: {}
                            """,
                            errorCode,
                            record.topic(),
                            record.partition(),
                            record.offset(),
                            record.key(),
                            deliveryAttempt,
                            exception.getClass().getName(),
                            exception.getMessage(),
                            rootCause.getClass().getName(),
                            rootCause.getMessage(),
                            buildCauseChain(exception),
                            messageIssuers,
                            exception
                    );

                    kafkaErrorBuilder.buildError(
                            exception,
                            errorCode,
                            record.offset(),
                            record.topic(),
                            deliveryAttempt,
                            record.partition(),
                            messageIssuers
                    );
                },
                backOff
        );

        errorHandler.addNotRetryableExceptions(DeserializationException.class);
        errorHandler.addNotRetryableExceptions(ServiceException.class);
        errorHandler.setCommitRecovered(true);
        errorHandler.setAckAfterHandle(true);

        return errorHandler;
    }

    private Integer getDeliveryAttempt(ConsumerRecord<?, ?> record) {
        Header header = record.headers().lastHeader(KafkaHeaders.DELIVERY_ATTEMPT);
        return header != null ? ByteBuffer.wrap(header.value()).getInt() : null;
    }

    private boolean isLocalProfile() {
        for (String profile : environment.getActiveProfiles()) {
            if ("local".equals(profile)) {
                return true;
            }
        }
        return false;
    }

    private ErrorCode resolveKafkaErrorCode(Exception exception) {

        DeserializationException deserializationException =
                findCause(exception, DeserializationException.class);

        if (deserializationException != null) {
            return ErrorCode.ERROR_DESERIALIZER_JSON;
        }

        ServiceException serviceException =
                findCause(exception, ServiceException.class);

        if (serviceException != null) {
            return serviceException.getErrorCode();
        }

        return ErrorCode.ERROR_KAFKA_CONSUMER_NUBO;
    }

    private <T extends Throwable> T findCause(Throwable throwable, Class<T> expectedType) {
        Throwable current = throwable;

        while (current != null) {
            if (expectedType.isInstance(current)) {
                return expectedType.cast(current);
            }

            current = current.getCause();
        }

        return null;
    }

    private Throwable getRootCause(Throwable throwable) {
        Throwable rootCause = throwable;

        while (rootCause.getCause() != null) {
            rootCause = rootCause.getCause();
        }

        return rootCause;
    }

    private String buildCauseChain(Throwable throwable) {
        StringBuilder builder = new StringBuilder();
        Throwable current = throwable;

        while (current != null) {
            if (builder.length() > 0) {
                builder.append(" -> ");
            }

            builder.append(current.getClass().getSimpleName());

            if (current.getMessage() != null) {
                builder.append(": ").append(current.getMessage());
            }

            current = current.getCause();
        }

        return builder.toString();
    }

    private String safeConvertPayloadToJson(Object value) {
        if (value == null) {
            return null;
        }

        try {
            return ApplicationUtils.convertObjectToJson(value);
        } catch (Exception e) {
            log.warn("Could not convert Kafka payload to JSON. valueClass: {}", value.getClass().getName(), e);
            return String.valueOf(value);
        }
    }
}

```

## src/main/java/com/nubo/issuer/sync/application/config/KafkaProducerConfig.java

```java
package com.nubo.issuer.sync.application.config;


import com.nubo.issuer.sync.application.properties.PropertiesConfig;
import lombok.RequiredArgsConstructor;
import org.apache.kafka.clients.producer.ProducerConfig;
import org.apache.kafka.common.serialization.StringSerializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.core.DefaultKafkaProducerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.core.ProducerFactory;
import org.springframework.core.env.Environment;

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

## src/main/java/com/nubo/issuer/sync/application/context/GlobalContext.java

```java
package com.nubo.issuer.sync.application.context;

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

## src/main/java/com/nubo/issuer/sync/application/database/NamingStrategyConfig.java

```java
package com.nubo.issuer.sync.application.database;

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

## src/main/java/com/nubo/issuer/sync/application/database/UpperNamingConfig.java

```java
package com.nubo.issuer.sync.application.database;

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

## src/main/java/com/nubo/issuer/sync/application/properties/PropertiesConfig.java

```java
package com.nubo.issuer.sync.application.properties;

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

    @Value("${kafka.nubo.consumer.topic-name}")
    private String kafkaNuboConsumerTopicName;

    @Value("${kafka.nubo.consumer.group-id}")
    private String kafkaNuboConsumerGroupId;

    @Value("${kafka.nubo.consumer.concurrency}")
    private Integer kafkaNuboConsumerConcurrency;

    @Value("${kafka.nubo.consumer.max-poll-records:500}")
    private Integer kafkaNuboConsumerMaxPollRecords;

    @Value("${kafka.nubo.producer.topic-name}")
    private String kafkaNuboProducerTopicName;

    @Value("${kafka.nubo.producer.topic-name-error-response}")
    private String kafkaNuboProducerTopicNameErrorResponse;

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

    @Value("${issuer-sync.processing.chunk-size:1000}")
    private Integer issuerProcessingChunkSize;

}

```

## src/main/java/com/nubo/issuer/sync/application/util/ApplicationUtils.java

```java
package com.nubo.issuer.sync.application.util;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.nubo.issuer.sync.exception.ServiceException;
import com.nubo.issuer.sync.exception.error.ErrorCode;


import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class ApplicationUtils {

    static final String FORMAT_DATETIME = "yyyy-MM-dd'T'HH:mm:ss";
    static final String FORMAT_DATE = "yyyy-MM-dd";

    private ApplicationUtils() {
    }

    public static String getFormatDatetime() {
        return FORMAT_DATETIME;
    }

    public static String getLocalDateTimeNow() {
        return LocalDateTime.now().format(DateTimeFormatter.ofPattern(ApplicationUtils.getFormatDatetime()));
    }

    public static LocalDateTime convertStringToLocalDateTime(String timeString) {
        return LocalDateTime.parse(timeString, DateTimeFormatter.ofPattern(FORMAT_DATETIME));
    }

    public static LocalDate convertStringToLocalDate(String timeString) {
        if(timeString == null) return null;
        return LocalDate.parse(timeString, DateTimeFormatter.ofPattern(FORMAT_DATE));
    }

    public static String convertObjectToJson(Object object) {
        try {
            return new ObjectMapper().writeValueAsString(object);
        } catch (JsonProcessingException ex) {
            throw new ServiceException(ErrorCode.ERROR_SERIALIZER_JSON, ex);
        }
    }

    public static <T> T convertJsonToObject(String json, Class<T> clazz) {
        try {
            return new ObjectMapper().convertValue(json, clazz);
        } catch (Exception ex) {
            throw new ServiceException(ErrorCode.ERROR_DESERIALIZER_JSON, ex);
        }
    }

}


```

## src/main/java/com/nubo/issuer/sync/exception/ServiceException.java

```java
package com.nubo.issuer.sync.exception;

import com.nubo.issuer.sync.exception.error.ErrorCode;
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

## src/main/java/com/nubo/issuer/sync/exception/error/ErrorCode.java

```java
package com.nubo.issuer.sync.exception.error;

import lombok.Getter;

@Getter
public enum ErrorCode {

    UNEXPECTED("Not unexpected"),
    COUNTRY_NOT_FOUND("Country Not Found"),
    SECTOR_OR_SUBSECTOR_NULL("Sector or SubSector must not be null"),
    GICS_NOT_FOUND("GICS not found for sector '%s' and subSector '%s'"),
    STATUS_NOT_FOUND("Status Not Found"),
    STATUS_MAPPING_NOT_FOUND("Status Mapping Not Found"),
    INVALID_GICS_ID_FORMAT("Invalid gics id format"),
    DEPOSITORY_NOT_FOUND("Depository not found"),
    DEPOSITORY_MAPPING_NOT_FOUND("Depository Mapping not found"),
    TYPE_NOT_FOUND("Type Not Found"),
    ERROR_SERIALIZER_JSON("Error Serializar Json"),
    ERROR_DESERIALIZER_JSON("Error Deserializer Json"),
    ERROR_KAFKA_PRODUCER_NUBO("Error Producer Kafka Nubo"),
    ERROR_KAFKA_CONSUMER_NUBO("Error Consumer Kafka Nubo");

    private final String message;

    ErrorCode(String message) {
        this.message = message;
    }

    public String getName() {
        return this.name();
    }

}

```

## src/main/java/com/nubo/issuer/sync/exception/error/ErrorResponse.java

```java
package com.nubo.issuer.sync.exception.error;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.nubo.issuer.sync.application.util.ApplicationUtils;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ErrorResponse {

    private Integer httpCode;
    private String httpMethod;
    private String url;
    private String timestamp;
    private String errorCode;
    private String errorMessage;
    private String errorMessageDetail;
    private List<ErrorValidation> errorDetails;

    @Override
    public String toString() {
        return ApplicationUtils.convertObjectToJson(this);
    }
}


```

## src/main/java/com/nubo/issuer/sync/exception/error/ErrorValidation.java

```java
package com.nubo.issuer.sync.exception.error;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ErrorValidation {

    private String id;
    private String description;

}

```

## src/main/java/com/nubo/issuer/sync/exception/handler/CustomKafkaErrorHandler.java

```java
package com.nubo.issuer.sync.exception.handler;


import com.nubo.issuer.sync.exception.ServiceException;
import com.nubo.issuer.sync.exception.error.ErrorCode;
import com.nubo.issuer.sync.exception.kafka.KafkaErrorBuild;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.kafka.clients.consumer.Consumer;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.apache.kafka.common.errors.RecordDeserializationException;
import org.springframework.kafka.listener.CommonErrorHandler;
import org.springframework.kafka.listener.MessageListenerContainer;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
@Slf4j
public class CustomKafkaErrorHandler implements CommonErrorHandler {

    private final KafkaErrorBuild kafkaErrorBuild;

    @Override
    public void handleOtherException(@NonNull Exception thrownException, Consumer<?, ?> consumer,
                                     MessageListenerContainer container, boolean batchListener) {
        handle(thrownException, consumer);
    }

    @Override
    public boolean handleOne(@NonNull Exception thrownException, ConsumerRecord<?, ?> record, Consumer<?, ?> consumer,
                             MessageListenerContainer container) {
        handle(thrownException, consumer);
        return true;
    }

    private void handle(Exception exception, Consumer<?, ?> consumer) {
        if (exception instanceof ServiceException ex) {
            kafkaErrorBuild.buildError(exception, ex.getErrorCode());
        } else if (exception instanceof RecordDeserializationException ex) {
            kafkaErrorBuild.buildError(exception, ErrorCode.ERROR_DESERIALIZER_JSON, ex.offset());
            consumer.seek(ex.topicPartition(), ex.offset() + 1L);
            consumer.commitSync();
        } else {
            kafkaErrorBuild.buildError(exception, ErrorCode.ERROR_KAFKA_CONSUMER_NUBO);
        }
    }

}

```

## src/main/java/com/nubo/issuer/sync/exception/kafka/KafkaErrorBuild.java

```java
package com.nubo.issuer.sync.exception.kafka;


import com.nubo.issuer.sync.application.properties.PropertiesConfig;
import com.nubo.issuer.sync.exception.error.ErrorCode;
import com.nubo.issuer.sync.exception.error.ErrorResponse;
import com.nubo.issuer.sync.kafka.producer.KafkaNuboProducer;
import com.nubo.issuer.sync.models.dto.response.ErrorResponseOutDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.util.ObjectUtils;

import java.time.LocalDateTime;

@Component
@RequiredArgsConstructor
@Slf4j
public class KafkaErrorBuild {

    private final PropertiesConfig propertiesConfig;
    private final KafkaNuboProducer kafkaNuboProducer;

    public void buildError(Exception exception, ErrorCode errorCode) {
        this.buildErrorResponse(exception, errorCode, null, null, null);
    }

    public void buildError(Exception exception, ErrorCode errorCode, Long offset) {
        this.buildErrorResponse(exception, errorCode, offset, null, null);
    }

    public void buildError(Exception exception, ErrorCode errorCode, Long offset, String topic, Integer retry) {
        this.buildErrorResponse(exception, errorCode, offset, topic, retry);
    }

    public void buildError(Exception exception,
                           ErrorCode errorCode,
                           Long offset,
                           String topic,
                           Integer retry,
                           Integer partition,
                           String messageIssuers) {
        this.buildErrorResponse(exception, errorCode, offset, topic, retry, partition, messageIssuers);
    }

    private void buildErrorResponse(Exception exception, ErrorCode errorCode, Long offset, String topic, Integer retry) {
        this.buildErrorResponse(exception, errorCode, offset, topic, retry, null, null);
    }

    private void buildErrorResponse(Exception exception,
                                    ErrorCode errorCode,
                                    Long offset,
                                    String topic,
                                    Integer retry,
                                    Integer partition,
                                    String messageIssuers) {
        String description = errorCode.getMessage().concat(" - ")
                .concat(offset != null ? "Offset: ".concat(String.valueOf(offset)).concat(" - ") : "")
                .concat(topic != null ? "Topic: ".concat(topic).concat(" - ") : "")
                .concat(retry != null ? "Retries: ".concat(String.valueOf(retry)).concat(" - ") : "");

        ErrorResponse errorResponse = ErrorResponse.builder()
                .httpCode(500)
                .url(propertiesConfig.getKafkaNuboBootstrapServers())
                .errorCode(errorCode.getName())
                .errorMessage(description)
                .errorMessageDetail(ObjectUtils.isEmpty(exception.getCause()) ?
                        exception.getMessage() : exception.getCause().getMessage())
                .timestamp(String.valueOf(LocalDateTime.now()))
                .build();

            kafkaNuboProducer.sendErrorResponse(
                ErrorResponseOutDto.builder()
                    .errorMessage(description)
                    .partition(partition)
                    .offset(offset)
                    .messageIssuers(messageIssuers)
                    .build()
            );

        log.error("Error -> {}", errorResponse);
    }

}
```

## src/main/java/com/nubo/issuer/sync/kafka/consumer/KafkaNuboAdapter.java

```java
package com.nubo.issuer.sync.kafka.consumer;

import com.nubo.issuer.sync.application.properties.PropertiesConfig;
import com.nubo.issuer.sync.models.dto.request.IssuerInDto;
import com.nubo.issuer.sync.service.IssuerSyncService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.support.KafkaHeaders;
import org.springframework.messaging.handler.annotation.Header;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
@Slf4j
public class KafkaNuboAdapter {

    private final PropertiesConfig propertiesConfig;
    private final IssuerSyncService issuerSyncService;

    @KafkaListener(
            topics = "#{propertiesConfig.getKafkaNuboConsumerTopicName}",
            containerFactory = "kafkaNuboListenerContainerFactory")
    public void listenKafka(
            @Payload IssuerInDto issuerInDto,
            @Header(KafkaHeaders.RECEIVED_PARTITION) int partition,
            @Header(KafkaHeaders.OFFSET) long offset,
            @Header(KafkaHeaders.RECEIVED_TOPIC) String topic,
            @Header(KafkaHeaders.DELIVERY_ATTEMPT) int retry) {

                if (log.isDebugEnabled()) {
                        log.debug("New received Message -- Topic: {} -- Partition : {} -- Offset : {} -- retry: {}",
                                        topic, partition, offset, retry);
                }

        issuerSyncService.sendBatchToDataBase(List.of(issuerInDto));
    }
}

```

## src/main/java/com/nubo/issuer/sync/kafka/producer/KafkaNuboProducer.java

```java
package com.nubo.issuer.sync.kafka.producer;

import com.nubo.issuer.sync.application.properties.PropertiesConfig;
import com.nubo.issuer.sync.application.util.ApplicationUtils;
import com.nubo.issuer.sync.exception.ServiceException;
import com.nubo.issuer.sync.exception.error.ErrorCode;
import com.nubo.issuer.sync.models.domain.IssuerKafkaEvent;
import com.nubo.issuer.sync.models.dto.request.IssuerInDto;
import com.nubo.issuer.sync.models.dto.response.ErrorResponseOutDto;
import com.nubo.issuer.sync.models.enums.EventTypeEnum;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.SendResult;
import org.springframework.stereotype.Component;

import java.util.concurrent.CompletableFuture;

@Component
@RequiredArgsConstructor
@Slf4j
public class KafkaNuboProducer {

    private final PropertiesConfig propertiesConfig;
    private final KafkaTemplate<String, String> kafkaNuboTemplate;

    public void sendMessage(String message) {
        String topic = propertiesConfig.getKafkaNuboProducerTopicName();
        CompletableFuture<SendResult<String, String>> future = kafkaNuboTemplate.send(topic, message).toCompletableFuture();

        future.thenAccept(result -> log.info("Send message -- Topic: {} -- offset: {} -- json: {} ",
                        topic, result.getRecordMetadata().offset(), message))
                .exceptionally(ex -> {
                    throw new ServiceException(ErrorCode.ERROR_KAFKA_PRODUCER_NUBO, ex);
                });
    }

    public void sendIssuerNotification(EventTypeEnum eventType, IssuerInDto issuer) {
        String topic = propertiesConfig.getKafkaNuboProducerTopicName();
        IssuerKafkaEvent event = new IssuerKafkaEvent(eventType.getValue(), issuer);

        String eventJson = ApplicationUtils.convertObjectToJson(event);

        CompletableFuture<SendResult<String, String>> future =
                kafkaNuboTemplate.send(topic, issuer.getIssuerCode(), eventJson).toCompletableFuture();

        future.thenAccept(result -> log.info("Sent issuer event to topic: {} -- offset: {} -- issuerCode: {} -- eventType: {}",
                        topic, result.getRecordMetadata().offset(), issuer.getIssuerCode(), eventType))
                .exceptionally(ex -> {
                    log.error("Failed to send issuer event to Kafka", ex);
                    throw new ServiceException(ErrorCode.ERROR_KAFKA_PRODUCER_NUBO, ex);
                });
    }

    public void sendErrorResponse(ErrorResponseOutDto errorResponseOutDto) {
        String topic = propertiesConfig.getKafkaNuboProducerTopicNameErrorResponse();
        String messageJson = ApplicationUtils.convertObjectToJson(errorResponseOutDto);

        CompletableFuture<SendResult<String, String>> future;
        try {
            future = kafkaNuboTemplate.send(topic, messageJson).toCompletableFuture();
        } catch (Exception ex) {
            log.error("Error response topic publish failed immediately. Topic: {} -- json: {} -- Exception: {}",
                    topic,
                    messageJson,
                    ex.getMessage(),
                    ex);
            return;
        }

        future.thenAccept(result -> log.debug("Send error response message -- Topic: {} -- partition: {} -- offset: {} -- json: {}",
                        topic,
                        result.getRecordMetadata().partition(),
                        result.getRecordMetadata().offset(),
                        messageJson))
                .exceptionally(ex -> {
                    log.error("Error sending message to topic: {} -- json: {}, Exception: {}",
                            topic,
                            messageJson,
                            ex.getMessage());
                    return null;
                });
    }
}

```

## src/main/java/com/nubo/issuer/sync/models/domain/IssuerEventMessage.java

```java
package com.nubo.issuer.sync.models.domain;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
public class IssuerEventMessage {

    private String issuerCode;

    private String eventType;

    private LocalDateTime eventTimestamp;
}

```

## src/main/java/com/nubo/issuer/sync/models/domain/IssuerKafkaEvent.java

```java
package com.nubo.issuer.sync.models.domain;

import com.nubo.issuer.sync.models.dto.request.IssuerInDto;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class IssuerKafkaEvent {

    private String eventType;

    private IssuerInDto issuerData;

}
```

## src/main/java/com/nubo/issuer/sync/models/dto/request/IssuerInDto.java

```java
package com.nubo.issuer.sync.models.dto.request;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class IssuerInDto {

    private Long id;

    private String issuerCode;

    private String name;

    private String shortName;

    private String issuerType;

    private String countryCode;

    private String sector;

    private String subSector;

    private String entryDate;

    private String countryOfOrigin;

    private String lei;

    private String taxCode;

    private String status;

    private String retirementDate;

    private String regulatorCode;

    private String entityType;

    private String depositCode;

    private String description;

    private String email;

    private String website;

    private String contactPhone;

    private String issuerAddress;

    private String action;

    private Long idMmeParticipant;

}

```

## src/main/java/com/nubo/issuer/sync/models/dto/response/ErrorResponseOutDto.java

```java
package com.nubo.issuer.sync.models.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ErrorResponseOutDto {

    private String errorMessage;

    private Integer partition;

    private Long offset;

    private String messageIssuers;
}
```

## src/main/java/com/nubo/issuer/sync/models/entity/CountryEntity.java

```java
package com.nubo.issuer.sync.models.entity;

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
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"COUNTRY\"", schema = "\"NUANBODB\"")
public class CountryEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"COUNTRY_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"CODE\"", length = 2)
    private String code;

    @Column(name = "\"NAME\"", length = 80)
    private String name;

    @ManyToOne
    @JoinColumn(name = "\"CURRENCY_ID\"", nullable = false)
    private CurrencyEntity currency;

    @Column(name = "\"TIME_ZONE\"", length = 30)
    private String timeZone;

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

## src/main/java/com/nubo/issuer/sync/models/entity/CurrencyEntity.java

```java
package com.nubo.issuer.sync.models.entity;

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
@Table(name = "\"CURRENCY\"", schema = "\"NUANBODB\"")
public class CurrencyEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"CURRENCY_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"CODE\"", length = 3)
    private String code;

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

## src/main/java/com/nubo/issuer/sync/models/entity/DepositoryEntity.java

```java
package com.nubo.issuer.sync.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
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
@Table(name = "\"DEPOSITORY\"", schema = "\"NUANBODB\"")
public class DepositoryEntity {

    @Id
    @Column(name = "\"DEPOSITORY_ID\"", length = 2, nullable = false)
    private String id;

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

}
```

## src/main/java/com/nubo/issuer/sync/models/entity/DepositoryMappingEntity.java

```java
package com.nubo.issuer.sync.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.OffsetDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"DEPOSITORY_MAPPING\"", schema = "\"NUANBODB\"")
public class DepositoryMappingEntity {

    @Id
    @Column(name = "\"DEPOSITORY_MAPPING_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"EXTERNAL_SYSTEM\"", length = 30, nullable = false)
    private String externalSystem;

    @Column(name = "\"EXTERNAL_CODE\"", length = 20)
    private String externalCode;

    @Column(name = "\"EXTERNAL_DESCRIPTION\"", length = 255, nullable = false)
    private String externalDescription;

    @Column(name = "\"DEPOSITORY_ID\"", length = 2, nullable = false)
    private String depositoryId;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 250, nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private OffsetDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50, nullable = false)
    private String lastModifyIp;

    @Column(name = "\"CATEGORY\"", length = 30)
    private String category;
}

```

## src/main/java/com/nubo/issuer/sync/models/entity/GicsEntity.java

```java
package com.nubo.issuer.sync.models.entity;

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
@Table(name = "\"GICS\"", schema = "\"NUANBODB\"")
public class GicsEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"GICS_ID\"", nullable = false)
    private Long id;

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

}

```

## src/main/java/com/nubo/issuer/sync/models/entity/IssuerEntity.java

```java
package com.nubo.issuer.sync.models.entity;

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

import java.time.LocalDate;
import java.time.OffsetDateTime;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"ISSUER\"", schema = "\"NUANBODB\"")
public class IssuerEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"ISSUER_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"CODE\"", length = 10)
    private String code;

    @Column(name = "\"NAME\"", length = 100)
    private String name;

    @Column(name = "\"SHORT_NAME\"", length = 100)
    private String shortName;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"TYPE_ID\"", nullable = false)
    private TypeEntity type;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"COUNTRY_ID\"", nullable = false)
    private CountryEntity country;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"GICS_ID\"")
    private GicsEntity gics;

    @Column(name = "\"DATE_ENTRY\"")
    private LocalDate dateEntry;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"COUNTRY_ORIGIN\"", nullable = false)
    private CountryEntity countryOrigin;

    @Column(name = "\"CUSIP\"", length = 15)
    private String cusip;

    @Column(name = "\"TAX_CODE\"", length = 20)
    private String taxCode;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"STATUS_ID\"", nullable = false)
    private StatusEntity status;

    @Column(name = "\"WITHDRAWAL_DATE\"")
    private LocalDate withdrawalDate;

    @Column(name = "\"MAIN_MARKET\"", length = 20)
    private String mainMarket;

    @Column(name = "\"REGULATOR_CODE\"", length = 80)
    private String regulatorCode;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"DEPOSITORY_ID\"")
    private DepositoryEntity depository;

    @Column(name = "\"DVL_CODE\"", length = 5)
    private String dvlCode;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 250, nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private OffsetDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50)
    private String lastModifyIp;
}
```

## src/main/java/com/nubo/issuer/sync/models/entity/StatusEntity.java

```java
package com.nubo.issuer.sync.models.entity;

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
    @Column(name = "\"STATUS_ID\"")
    private Long id;

    @Column(name = "\"DESCRIPTION\"", length = 80)
    private String description;

    @Column(name = "\"CATEGORY\"", length = 30)
    private String category;

    @Column(name = "\"DETAIL\"", length = 255)
    private String detail;

    @Column(name = "\"SHORTNAME\"")
    private String shortName;

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

## src/main/java/com/nubo/issuer/sync/models/entity/StatusMappingEntity.java

```java
package com.nubo.issuer.sync.models.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"STATUS_MAPPING\"", schema = "\"NUANBODB\"")
public class StatusMappingEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"STATUS_MAPPING_ID\"")
    private Long id;

    @Column(name = "\"EXTERNAL_SYSTEM\"", length = 30, nullable = false)
    private String externalSystem;

    @Column(name = "\"EXTERNAL_CODE\"", length = 20)
    private String externalCode;

    @Column(name = "\"CATEGORY\"", length = 30)
    private String category;

    @Column(name = "\"EXTERNAL_DESCRIPTION\"", length = 255)
    private String externalDescription;

    @Column(name = "\"STATUS_ID\"", nullable = false)
    private Integer statusId;

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

## src/main/java/com/nubo/issuer/sync/models/entity/TypeEntity.java

```java
package com.nubo.issuer.sync.models.entity;

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

## src/main/java/com/nubo/issuer/sync/models/enums/DepositoryDefaultEnum.java

```java
package com.nubo.issuer.sync.models.enums;

import com.nubo.issuer.sync.models.entity.DepositoryEntity;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum DepositoryDefaultEnum {
    DVL(1L, "DVL");

    private final Long id;
    private final String description;

    public DepositoryEntity toEntity() {
        DepositoryEntity entity = new DepositoryEntity();
        entity.setId(String.valueOf(id));
        entity.setDescription(description);
        return entity;
    }


}

```

## src/main/java/com/nubo/issuer/sync/models/enums/EventTypeEnum.java

```java
package com.nubo.issuer.sync.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum EventTypeEnum {

    CREATE("CREATE"),
    UPDATE("UPDATE");

    private final String value;
}

```

## src/main/java/com/nubo/issuer/sync/models/enums/ExternalSystemEnum.java

```java
package com.nubo.issuer.sync.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum ExternalSystemEnum {

    REFERENCE_DATA("REFERENCE_DATA");

    private final String value;
}

```

## src/main/java/com/nubo/issuer/sync/models/enums/StatusMappingEnum.java

```java
package com.nubo.issuer.sync.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum StatusMappingEnum {

    EMISOR_REFERENCE_DATA(
            "REFENCE DATA",
            "EMISOR"
    );

    private final String externalSystem;
    private final String category;
}



```

## src/main/java/com/nubo/issuer/sync/repository/CountryRepository.java

```java
package com.nubo.issuer.sync.repository;

import com.nubo.issuer.sync.models.entity.CountryEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CountryRepository extends JpaRepository<CountryEntity, Long> {
    Optional<CountryEntity> findByCode(String countryCode);
}

```

## src/main/java/com/nubo/issuer/sync/repository/DepositoryMappingRepository.java

```java
package com.nubo.issuer.sync.repository;

import com.nubo.issuer.sync.models.entity.DepositoryMappingEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface DepositoryMappingRepository extends JpaRepository<DepositoryMappingEntity, Long> {

    Optional<DepositoryMappingEntity>
    findByExternalSystemAndExternalCodeAndCategory(
            String externalSystem,
            String externalCode,
            String category
    );
}

```

## src/main/java/com/nubo/issuer/sync/repository/DepositoryRepository.java

```java
package com.nubo.issuer.sync.repository;

import com.nubo.issuer.sync.models.entity.DepositoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface DepositoryRepository  extends JpaRepository<DepositoryEntity, Long> {
    Optional<DepositoryEntity> findByDescription(String description);
}

```

## src/main/java/com/nubo/issuer/sync/repository/GicsRepository.java

```java
package com.nubo.issuer.sync.repository;

import com.nubo.issuer.sync.models.entity.GicsEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface GicsRepository extends JpaRepository<GicsEntity, Long> {
    Optional<GicsEntity> findById(Long id);
}

```

## src/main/java/com/nubo/issuer/sync/repository/IssuerRepository.java

```java
package com.nubo.issuer.sync.repository;

import com.nubo.issuer.sync.models.entity.IssuerEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

public interface IssuerRepository extends JpaRepository<IssuerEntity, Long> {
    Optional<IssuerEntity> findByCode(String code);

    List<IssuerEntity> findByCodeIn(Collection<String> codes);
}

```

## src/main/java/com/nubo/issuer/sync/repository/StatusMappingRepository.java

```java
package com.nubo.issuer.sync.repository;

import com.nubo.issuer.sync.models.entity.StatusMappingEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface StatusMappingRepository extends JpaRepository<StatusMappingEntity, Long> {

    Optional<StatusMappingEntity> findByExternalSystemAndExternalCodeAndCategory(
            String externalSystem,
            String externalCode,
            String category
    );
}

```

## src/main/java/com/nubo/issuer/sync/repository/StatusRepository.java

```java
package com.nubo.issuer.sync.repository;

import com.nubo.issuer.sync.models.entity.StatusEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StatusRepository extends JpaRepository<StatusEntity, Long> {

}

```

## src/main/java/com/nubo/issuer/sync/repository/TypeRepository.java

```java
package com.nubo.issuer.sync.repository;

import com.nubo.issuer.sync.models.entity.TypeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface TypeRepository extends JpaRepository<TypeEntity, Long> {

}

```

## src/main/java/com/nubo/issuer/sync/service/BatchCacheService.java

```java
package com.nubo.issuer.sync.service;

import com.nubo.issuer.sync.models.entity.CountryEntity;
import com.nubo.issuer.sync.models.entity.DepositoryEntity;
import com.nubo.issuer.sync.models.entity.GicsEntity;
import com.nubo.issuer.sync.models.entity.IssuerEntity;
import com.nubo.issuer.sync.models.entity.StatusEntity;
import com.nubo.issuer.sync.models.entity.TypeEntity;

import java.util.Optional;

public interface BatchCacheService {

    TypeEntity validateTypeEntity(String issuerType);

    DepositoryEntity validateDepositoryEntity(String depositCode);

    StatusEntity findStatusEntityFromMapping(String externalStatusCode);

    CountryEntity validateCountryEntity(String countryCode);

    GicsEntity validateSectorAndSubsectorEntity(String sector, String subSector);
}

```

## src/main/java/com/nubo/issuer/sync/service/Impl/BatchCacheServiceImpl.java

```java
package com.nubo.issuer.sync.service.Impl;

import com.nubo.issuer.sync.exception.ServiceException;
import com.nubo.issuer.sync.exception.error.ErrorCode;
import com.nubo.issuer.sync.models.entity.CountryEntity;
import com.nubo.issuer.sync.models.entity.DepositoryEntity;
import com.nubo.issuer.sync.models.entity.DepositoryMappingEntity;
import com.nubo.issuer.sync.models.entity.GicsEntity;
import com.nubo.issuer.sync.models.entity.StatusEntity;
import com.nubo.issuer.sync.models.entity.StatusMappingEntity;
import com.nubo.issuer.sync.models.entity.TypeEntity;
import com.nubo.issuer.sync.models.enums.ExternalSystemEnum;
import com.nubo.issuer.sync.models.enums.StatusMappingEnum;
import com.nubo.issuer.sync.repository.CountryRepository;
import com.nubo.issuer.sync.repository.DepositoryMappingRepository;
import com.nubo.issuer.sync.repository.DepositoryRepository;
import com.nubo.issuer.sync.repository.GicsRepository;
import com.nubo.issuer.sync.repository.StatusMappingRepository;
import com.nubo.issuer.sync.repository.StatusRepository;
import com.nubo.issuer.sync.repository.TypeRepository;
import com.nubo.issuer.sync.service.BatchCacheService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class BatchCacheServiceImpl implements BatchCacheService {

    private final TypeRepository typeRepository;
    private final CountryRepository countryRepository;
    private final GicsRepository gicsRepository;
    private final StatusRepository statusRepository;
    private final DepositoryRepository depositoryRepository;
    private final DepositoryMappingRepository depositoryMappingRepository;
    private final StatusMappingRepository statusMappingRepository;

    public static String normalizeCacheKey(String value) {
        if (ObjectUtils.isEmpty(value)) {
            return null;
        }

        String trimmedValue = value.trim();
        return trimmedValue.isEmpty() ? null : trimmedValue;
    }

    public static String normalizeGicsCacheKey(String sector, String subSector) {
        String valueToUse = !ObjectUtils.isEmpty(sector) ? sector : subSector;
        return normalizeCacheKey(valueToUse);
    }

    @Override
    @Cacheable(
            value = "types",
            key = "T(com.nubo.issuer.sync.service.Impl.BatchCacheServiceImpl).normalizeCacheKey(#issuerType)",
            sync = true,
            condition = "!T(org.springframework.util.ObjectUtils).isEmpty(#issuerType)"
    )
    public TypeEntity validateTypeEntity(String issuerType) {
        String normalizedIssuerType = normalizeCacheKey(issuerType);
        String issuerTypeToUse = normalizedIssuerType != null ? normalizedIssuerType : issuerType;

        Long typeId = Long.valueOf(issuerTypeToUse);
        return typeRepository.findById(typeId)
                .orElseThrow(() -> new ServiceException(ErrorCode.TYPE_NOT_FOUND));
    }

    @Override
    @Cacheable(
            value = "depositories",
            key = "T(com.nubo.issuer.sync.service.Impl.BatchCacheServiceImpl).normalizeCacheKey(#depositCode)",
            sync = true,
            condition = "!T(org.springframework.util.ObjectUtils).isEmpty(#depositCode)"
    )
    public DepositoryEntity validateDepositoryEntity(String depositCode) {

        // empty or null return null
        if (ObjectUtils.isEmpty(depositCode)) {
            log.warn("DepositCode is null or empty. Returning null.");
            return null;
        }

        String trimmedDepositCode = depositCode.trim();

        // findby xode y category
        Optional<DepositoryMappingEntity> optionalMapping =
                depositoryMappingRepository
                        .findByExternalSystemAndExternalCodeAndCategory(
                                ExternalSystemEnum.REFERENCE_DATA.getValue(),
                                trimmedDepositCode,
                                "PARTICIPANTES_EQUIVALENCIA"
                        );

        // repository not found return null
        if (optionalMapping.isEmpty()) {
            log.warn("No depository mapping found for externalCode: {}. Returning null.", trimmedDepositCode);
            return null;
        }

        DepositoryMappingEntity mapping = optionalMapping.get();

        // not valid id
        Long depositoryId;
        try {
            depositoryId = Long.valueOf(mapping.getDepositoryId());
        } catch (NumberFormatException e) {
            log.warn("Invalid depositoryId format: {}. Returning null.", mapping.getDepositoryId());
            return null;
        }
        return depositoryRepository.findById(depositoryId)
                .orElseGet(() -> {
                    log.warn("Depository ID {} not found. Returning null.", depositoryId);
                    return null;
                });
    }

    @Override
    @Cacheable(
            value = "status",
            key = "T(com.nubo.issuer.sync.service.Impl.BatchCacheServiceImpl).normalizeCacheKey(#externalStatusCode)",
            sync = true,
            condition = "!T(org.springframework.util.ObjectUtils).isEmpty(#externalStatusCode)"
    )
    public StatusEntity findStatusEntityFromMapping(String externalStatusCode) {

        if (ObjectUtils.isEmpty(externalStatusCode)) {
            throw new ServiceException(ErrorCode.STATUS_MAPPING_NOT_FOUND);
        }

        String normalizedExternalStatusCode = normalizeCacheKey(externalStatusCode);
        String externalStatusCodeToUse = normalizedExternalStatusCode != null ? normalizedExternalStatusCode : externalStatusCode;

        StatusMappingEntity mapping = statusMappingRepository
                .findByExternalSystemAndExternalCodeAndCategory(
                        StatusMappingEnum.EMISOR_REFERENCE_DATA.getExternalSystem(),
                externalStatusCodeToUse,
                        StatusMappingEnum.EMISOR_REFERENCE_DATA.getCategory()
                )
                .orElseThrow(() ->
                        new ServiceException(ErrorCode.STATUS_MAPPING_NOT_FOUND)
                );

        return statusRepository.findById(mapping.getStatusId().longValue())
                .orElseThrow(() ->
                        new ServiceException(ErrorCode.STATUS_NOT_FOUND)
                );
    }


    @Override
    @Cacheable(
            value = "countries",
            key = "T(com.nubo.issuer.sync.service.Impl.BatchCacheServiceImpl).normalizeCacheKey(#countryCode)",
            sync = true,
            condition = "!T(org.springframework.util.ObjectUtils).isEmpty(#countryCode)"
    )
    public CountryEntity validateCountryEntity(String countryCode) {
        String normalizedCountryCode = normalizeCacheKey(countryCode);
        String countryCodeToUse = normalizedCountryCode != null ? normalizedCountryCode : countryCode;

        return countryRepository.findByCode(countryCodeToUse)
                .orElseThrow(() -> new ServiceException(ErrorCode.COUNTRY_NOT_FOUND));
    }

    @Override
    @Cacheable(
            value = "gics",
            key = "T(com.nubo.issuer.sync.service.Impl.BatchCacheServiceImpl).normalizeGicsCacheKey(#sector, #subSector)",
            condition = "!T(org.springframework.util.ObjectUtils).isEmpty(#sector) || !T(org.springframework.util.ObjectUtils).isEmpty(#subSector)",
            sync = true
    )
    public GicsEntity validateSectorAndSubsectorEntity(String sector, String subSector) {
        String valueToUse = !ObjectUtils.isEmpty(sector) ? sector : subSector;

        if (ObjectUtils.isEmpty(valueToUse)) {
            throw new ServiceException(ErrorCode.SECTOR_OR_SUBSECTOR_NULL);
        }

        String normalizedValueToUse = valueToUse.trim();

        try {
            Long gicsId = Long.valueOf(normalizedValueToUse);
            return gicsRepository.findById(gicsId)
                    .orElseThrow(() -> new ServiceException(ErrorCode.GICS_NOT_FOUND));
        } catch (NumberFormatException e) {
            throw new ServiceException(ErrorCode.INVALID_GICS_ID_FORMAT);
        }
    }

}

```

## src/main/java/com/nubo/issuer/sync/service/Impl/IssuerSyncServiceImpl.java

```java
package com.nubo.issuer.sync.service.Impl;

import com.nubo.issuer.sync.application.properties.PropertiesConfig;
import com.nubo.issuer.sync.application.util.ApplicationUtils;
import com.nubo.issuer.sync.kafka.producer.KafkaNuboProducer;
import com.nubo.issuer.sync.models.dto.request.IssuerInDto;
import com.nubo.issuer.sync.models.entity.IssuerEntity;
import com.nubo.issuer.sync.models.enums.EventTypeEnum;
import com.nubo.issuer.sync.repository.IssuerRepository;
import com.nubo.issuer.sync.service.BatchCacheService;
import com.nubo.issuer.sync.service.IssuerSyncService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class IssuerSyncServiceImpl implements IssuerSyncService {

    private final IssuerRepository issuerRepository;
    private final PropertiesConfig propertiesConfig;
    private final KafkaNuboProducer kafkaNuboProducer;
    private final BatchCacheService batchCacheService;

    @Override
    public void sendBatchToDataBase(List<IssuerInDto> issuerInDtoList) {
        if (issuerInDtoList == null || issuerInDtoList.isEmpty()) {
            log.warn("No issuer records to persist.");
            return;
        }

        long startTime = System.currentTimeMillis();
        List<IssuerEntity> issuerEntityList = new ArrayList<>();
        List<IssuerInDto> createIssuerInDtoList = new ArrayList<>();
        List<IssuerInDto> updateIssuerInDtoList = new ArrayList<>();
        Map<String, IssuerEntity> existingIssuersByCode = loadExistingIssuersByCode(issuerInDtoList);

        for (IssuerInDto issuerInDto : issuerInDtoList) {
            IssuerEntity existingEntity = existingIssuersByCode.get(normalizeCode(issuerInDto.getIssuerCode()));

            if (existingEntity != null) {
                IssuerEntity updatedEntity = updateIssuerEntity(existingEntity, issuerInDto);
                issuerEntityList.add(updatedEntity);
                updateIssuerInDtoList.add(issuerInDto);

            } else {
                IssuerEntity newEntity = createIssuerEntity(issuerInDto);
                issuerEntityList.add(newEntity);
                createIssuerInDtoList.add(issuerInDto);

            }
        }
        saveAllInChunks(issuerEntityList);
        this.sendEventKafka(createIssuerInDtoList, EventTypeEnum.CREATE);
        this.sendEventKafka(updateIssuerInDtoList, EventTypeEnum.UPDATE);
        log.info("Issuer batch processed -- total: {} -- creates: {} -- updates: {} -- elapsedMs: {}",
                issuerInDtoList.size(),
                createIssuerInDtoList.size(),
                updateIssuerInDtoList.size(),
                System.currentTimeMillis() - startTime);

    }

    private IssuerEntity createIssuerEntity(IssuerInDto issuerInDto) {
        return IssuerEntity.builder()
                .code(issuerInDto.getIssuerCode())
                .name(issuerInDto.getName())
                .shortName(issuerInDto.getShortName())
                .type(this.batchCacheService.validateTypeEntity(issuerInDto.getIssuerType()))
                .country(this.batchCacheService.validateCountryEntity(issuerInDto.getCountryCode()))
                .gics(this.batchCacheService.validateSectorAndSubsectorEntity(issuerInDto.getSector(), issuerInDto.getSubSector()))
                .dateEntry(ApplicationUtils.convertStringToLocalDate(issuerInDto.getEntryDate()))
                .countryOrigin(this.batchCacheService.validateCountryEntity(resolveCountryOriginCode(issuerInDto)))
                .taxCode(issuerInDto.getTaxCode())
                .status(this.batchCacheService.findStatusEntityFromMapping(issuerInDto.getStatus()))
                .withdrawalDate(ApplicationUtils.convertStringToLocalDate(issuerInDto.getRetirementDate()))
                .regulatorCode(issuerInDto.getRegulatorCode())
                .depository(ObjectUtils.isEmpty(issuerInDto.getDepositCode()) ? null :
                        this.batchCacheService.validateDepositoryEntity(issuerInDto.getDepositCode()))
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyIp(propertiesConfig.getApiName())
                .lastModifyUser(propertiesConfig.getApiName())
                .lastModifyDate(OffsetDateTime.now())
                .build();

    }

    private IssuerEntity updateIssuerEntity(IssuerEntity issuerEntityLast, IssuerInDto issuerInDto) {
        String countryOriginCode = resolveCountryOriginCode(issuerInDto);

        issuerEntityLast.setCode(ObjectUtils.isEmpty(issuerInDto.getIssuerCode()) ?
                issuerEntityLast.getCode() : issuerInDto.getIssuerCode());
        issuerEntityLast.setName(ObjectUtils.isEmpty(issuerInDto.getName()) ?
                issuerEntityLast.getName() : issuerInDto.getName());
        issuerEntityLast.setShortName(ObjectUtils.isEmpty(issuerInDto.getShortName()) ?
                issuerEntityLast.getShortName() : issuerInDto.getShortName());
        issuerEntityLast.setType(ObjectUtils.isEmpty(issuerInDto.getIssuerType()) ?
                issuerEntityLast.getType() : this.batchCacheService.validateTypeEntity(issuerInDto.getIssuerType()));
        issuerEntityLast.setCountry(ObjectUtils.isEmpty(issuerInDto.getCountryCode()) ?
                issuerEntityLast.getCountry() : this.batchCacheService.validateCountryEntity(issuerInDto.getCountryCode()));
        issuerEntityLast.setGics(ObjectUtils.isEmpty(issuerInDto.getSector()) && ObjectUtils.isEmpty(issuerInDto.getSubSector())
                ? issuerEntityLast.getGics()
                : this.batchCacheService.validateSectorAndSubsectorEntity(issuerInDto.getSector(), issuerInDto.getSubSector()));
        issuerEntityLast.setDateEntry(ObjectUtils.isEmpty(issuerInDto.getEntryDate()) ?
                issuerEntityLast.getDateEntry() : ApplicationUtils.convertStringToLocalDate(issuerInDto.getEntryDate()));
        if (hasText(countryOriginCode)) {
            issuerEntityLast.setCountryOrigin(this.batchCacheService.validateCountryEntity(countryOriginCode));
        }
        issuerEntityLast.setTaxCode(ObjectUtils.isEmpty(issuerInDto.getTaxCode()) ?
                issuerEntityLast.getTaxCode() : issuerInDto.getTaxCode());
        issuerEntityLast.setStatus(ObjectUtils.isEmpty(issuerInDto.getStatus())
                ? issuerEntityLast.getStatus()
                : this.batchCacheService.findStatusEntityFromMapping(issuerInDto.getStatus()));
        issuerEntityLast.setWithdrawalDate(ObjectUtils.isEmpty(issuerInDto.getRetirementDate()) ?
                issuerEntityLast.getWithdrawalDate() : ApplicationUtils.convertStringToLocalDate(issuerInDto.getRetirementDate()));
        issuerEntityLast.setRegulatorCode(ObjectUtils.isEmpty(issuerInDto.getRegulatorCode()) ?
                issuerEntityLast.getRegulatorCode() : issuerInDto.getRegulatorCode());
        issuerEntityLast.setDepository(ObjectUtils.isEmpty(issuerInDto.getDepositCode()) ?
                issuerEntityLast.getDepository() : this.batchCacheService.validateDepositoryEntity(issuerInDto.getDepositCode()));
        issuerEntityLast.setLastModifyApplication(propertiesConfig.getApiName());
        issuerEntityLast.setLastModifyIp(propertiesConfig.getApiName());
        issuerEntityLast.setLastModifyUser(propertiesConfig.getApiName());
        issuerEntityLast.setLastModifyDate(OffsetDateTime.now());

        return issuerEntityLast;
    }

    private void sendEventKafka(List<IssuerInDto> issuerInDtoList, EventTypeEnum eventTypeEnum) {
        for (IssuerInDto issuerInDto : issuerInDtoList) {
            kafkaNuboProducer.sendIssuerNotification(eventTypeEnum, issuerInDto);
        }
    }

    private Map<String, IssuerEntity> loadExistingIssuersByCode(List<IssuerInDto> issuerInDtoList) {
        List<String> issuerCodes = issuerInDtoList.stream()
                .map(IssuerInDto::getIssuerCode)
                .map(this::normalizeCode)
                .filter(this::hasText)
                .distinct()
                .toList();

        if (issuerCodes.isEmpty()) {
            return Map.of();
        }

        long startTime = System.currentTimeMillis();
        List<IssuerEntity> existingIssuers = issuerRepository.findByCodeIn(issuerCodes);
        log.debug("Existing issuers preloaded -- requestedCodes: {} -- found: {} -- elapsedMs: {}",
                issuerCodes.size(),
                existingIssuers.size(),
                System.currentTimeMillis() - startTime);

        return existingIssuers.stream()
                .filter(issuerEntity -> hasText(issuerEntity.getCode()))
                .collect(Collectors.toMap(
                        issuerEntity -> normalizeCode(issuerEntity.getCode()),
                        Function.identity(),
                        (first, second) -> first
                ));
    }

    private void saveAllInChunks(List<IssuerEntity> issuerEntityList) {
        int chunkSize = propertiesConfig.getIssuerProcessingChunkSize() != null
                && propertiesConfig.getIssuerProcessingChunkSize() > 0
                ? propertiesConfig.getIssuerProcessingChunkSize()
                : 1000;

        for (int start = 0; start < issuerEntityList.size(); start += chunkSize) {
            int end = Math.min(start + chunkSize, issuerEntityList.size());
            List<IssuerEntity> chunk = issuerEntityList.subList(start, end);
            long chunkStartTime = System.currentTimeMillis();
            issuerRepository.saveAll(chunk);
            log.debug("Issuer chunk persisted -- chunkStart: {} -- chunkEnd: {} -- size: {} -- elapsedMs: {}",
                    start,
                    end,
                    chunk.size(),
                    System.currentTimeMillis() - chunkStartTime);
        }
    }

    private String normalizeCode(String value) {
        return hasText(value) ? value.trim() : null;
    }

    /*
    Corrige si el CountryOfOrigin viene vacio o nulo, se intenta resolver con el CountryCode.
    Si ambos son vacíos o nulos, se devuelve null.
     */
    private String resolveCountryOriginCode(IssuerInDto issuerInDto) {
        if (hasText(issuerInDto.getCountryOfOrigin())) {
            return issuerInDto.getCountryOfOrigin().trim();
        }

        if (hasText(issuerInDto.getCountryCode())) {
            return issuerInDto.getCountryCode().trim();
        }

        return null;
    }

    private boolean hasText(String value) {
        return value != null && !value.trim().isEmpty();
    }

}

```

## src/main/java/com/nubo/issuer/sync/service/IssuerSyncService.java

```java
package com.nubo.issuer.sync.service;

import com.nubo.issuer.sync.models.dto.request.IssuerInDto;

import java.util.List;

public interface IssuerSyncService {

    void sendBatchToDataBase(List<IssuerInDto> issuerInDtoList);


}

```

## src/main/resources/application-dev.yml

```yaml
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
    properties:
      hibernate:
        jdbc:
          batch_size: ${HIBERNATE_JDBC_BATCH_SIZE:100}
          batch_versioned_data: ${HIBERNATE_JDBC_BATCH_VERSIONED_DATA:true}
        order_inserts: ${HIBERNATE_ORDER_INSERTS:true}
        order_updates: ${HIBERNATE_ORDER_UPDATES:true}
    show-sql: 'false'
    database-platform: org.hibernate.dialect.PostgreSQLDialect
kafka:
  nubo:
    retries: ${KAFKA_NUBO_RETRIES:2}
    bootstrap-servers: ${KAFKA_NUBO_BOOTSTRAP_SERVER}
    auto-offset-reset: ${KAFKA_NUBO_AUTO_OFFSET_RESET:latest}
    security:
      protocol: ${KAFKA_PROPERTIES_SECURITY_PROTOCOL}
    sasl:
      mechanism: ${KAFKA_PROPERTIES_SASL_MECHANISM}
      jaas:
        config: ${KAFKA_PROPERTIES_SASL_JAAS_CONFIG}
    consumer:
      topic-name: ${KAFKA_NUBO_CONSUMER_TOPIC}
      group-id: ${KAFKA_NUBO_GROUP_ID}
      concurrency: ${KAFKA_NUBO_CONCURRENCY:3}
      max-poll-records: ${KAFKA_NUBO_MAX_POLL_RECORDS:500}
    producer:
      topic-name: ${KAFKA_NUBO_TOPIC_NAME_SEND_NOTIFICATIONS}
      topic-name-error-response: ${KAFKA_NUBO_TOPIC_NAME_ERROR_REFERENCE_DATA_ISSUER}
issuer-sync:
  processing:
    chunk-size: ${ISSUER_SYNC_PROCESSING_CHUNK_SIZE:1000}
logging:
  config: classpath:log/log4j2.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR

```

## src/main/resources/application-local.yml

```yaml
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
    properties:
      hibernate:
        jdbc:
          batch_size: ${HIBERNATE_JDBC_BATCH_SIZE:100}
          batch_versioned_data: ${HIBERNATE_JDBC_BATCH_VERSIONED_DATA:true}
        order_inserts: ${HIBERNATE_ORDER_INSERTS:true}
        order_updates: ${HIBERNATE_ORDER_UPDATES:true}
    show-sql: 'false'
    database-platform: org.hibernate.dialect.PostgreSQLDialect
kafka:
  nubo:
    retries: ${KAFKA_NUBO_RETRIES:5}
    bootstrap-servers: ${KAFKA_NUBO_BOOTSTRAP_SERVER}
    auto-offset-reset: ${KAFKA_NUBO_AUTO_OFFSET_RESET:latest}
    security:
      protocol: ${KAFKA_PROPERTIES_SECURITY_PROTOCOL}
    sasl:
      mechanism: ${KAFKA_PROPERTIES_SASL_MECHANISM}
      jaas:
        config: ${KAFKA_PROPERTIES_SASL_JAAS_CONFIG}
    consumer:
      topic-name: ${KAFKA_NUBO_CONSUMER_TOPIC}
      group-id: ${KAFKA_NUBO_GROUP_ID}
      concurrency: ${KAFKA_NUBO_CONCURRENCY:3}
      max-poll-records: ${KAFKA_NUBO_MAX_POLL_RECORDS:500}
    producer:
      topic-name: ${KAFKA_NUBO_TOPIC_NAME_SEND_NOTIFICATIONS}
      topic-name-error-response: ${KAFKA_NUBO_TOPIC_NAME_ERROR_REFERENCE_DATA_ISSUER}
issuer-sync:
  processing:
    chunk-size: ${ISSUER_SYNC_PROCESSING_CHUNK_SIZE:1000}
logging:
  config: classpath:log/log4j2.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR

```

## src/main/resources/application-prod.yml

```yaml
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
    properties:
      hibernate:
        jdbc:
          batch_size: ${HIBERNATE_JDBC_BATCH_SIZE:100}
          batch_versioned_data: ${HIBERNATE_JDBC_BATCH_VERSIONED_DATA:true}
        order_inserts: ${HIBERNATE_ORDER_INSERTS:true}
        order_updates: ${HIBERNATE_ORDER_UPDATES:true}
    show-sql: 'false'
    database-platform: org.hibernate.dialect.PostgreSQLDialect
kafka:
  nubo:
    retries: ${KAFKA_NUBO_RETRIES:2}
    bootstrap-servers: ${KAFKA_NUBO_BOOTSTRAP_SERVER}
    auto-offset-reset: ${KAFKA_NUBO_AUTO_OFFSET_RESET:latest}
    security:
      protocol: ${KAFKA_PROPERTIES_SECURITY_PROTOCOL}
    sasl:
      mechanism: ${KAFKA_PROPERTIES_SASL_MECHANISM}
      jaas:
        config: ${KAFKA_PROPERTIES_SASL_JAAS_CONFIG}
    consumer:
      topic-name: ${KAFKA_NUBO_CONSUMER_TOPIC}
      group-id: ${KAFKA_NUBO_GROUP_ID}
      concurrency: ${KAFKA_NUBO_CONCURRENCY:3}
      max-poll-records: ${KAFKA_NUBO_MAX_POLL_RECORDS:500}
    producer:
      topic-name: ${KAFKA_NUBO_TOPIC_NAME_SEND_NOTIFICATIONS}
      topic-name-error-response: ${KAFKA_NUBO_TOPIC_NAME_ERROR_REFERENCE_DATA_ISSUER}
issuer-sync:
  processing:
    chunk-size: ${ISSUER_SYNC_PROCESSING_CHUNK_SIZE:1000}
logging:
  config: classpath:log/log4j2-prod.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR

```

## src/main/resources/application-qa.yml

```yaml
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
    properties:
      hibernate:
        jdbc:
          batch_size: ${HIBERNATE_JDBC_BATCH_SIZE:100}
          batch_versioned_data: ${HIBERNATE_JDBC_BATCH_VERSIONED_DATA:true}
        order_inserts: ${HIBERNATE_ORDER_INSERTS:true}
        order_updates: ${HIBERNATE_ORDER_UPDATES:true}
    show-sql: 'false'
    database-platform: org.hibernate.dialect.PostgreSQLDialect
kafka:
  nubo:
    retries: ${KAFKA_NUBO_RETRIES:2}
    bootstrap-servers: ${KAFKA_NUBO_BOOTSTRAP_SERVER}
    auto-offset-reset: ${KAFKA_NUBO_AUTO_OFFSET_RESET:latest}
    security:
      protocol: ${KAFKA_PROPERTIES_SECURITY_PROTOCOL}
    sasl:
      mechanism: ${KAFKA_PROPERTIES_SASL_MECHANISM}
      jaas:
        config: ${KAFKA_PROPERTIES_SASL_JAAS_CONFIG}
    consumer:
      topic-name: ${KAFKA_NUBO_CONSUMER_TOPIC}
      group-id: ${KAFKA_NUBO_GROUP_ID}
      concurrency: ${KAFKA_NUBO_CONCURRENCY:3}
      max-poll-records: ${KAFKA_NUBO_MAX_POLL_RECORDS:500}
    producer:
      topic-name: ${KAFKA_NUBO_TOPIC_NAME_SEND_NOTIFICATIONS}
      topic-name-error-response: ${KAFKA_NUBO_TOPIC_NAME_ERROR_REFERENCE_DATA_ISSUER}
issuer-sync:
  processing:
    chunk-size: ${ISSUER_SYNC_PROCESSING_CHUNK_SIZE:1000}
logging:
  config: classpath:log/log4j2.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR

```

## src/main/resources/application-uat.yml

```yaml
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
    properties:
      hibernate:
        jdbc:
          batch_size: ${HIBERNATE_JDBC_BATCH_SIZE:100}
          batch_versioned_data: ${HIBERNATE_JDBC_BATCH_VERSIONED_DATA:true}
        order_inserts: ${HIBERNATE_ORDER_INSERTS:true}
        order_updates: ${HIBERNATE_ORDER_UPDATES:true}
    show-sql: 'false'
    database-platform: org.hibernate.dialect.PostgreSQLDialect
kafka:
  nubo:
    retries: ${KAFKA_NUBO_RETRIES:2}
    bootstrap-servers: ${KAFKA_NUBO_BOOTSTRAP_SERVER}
    auto-offset-reset: ${KAFKA_NUBO_AUTO_OFFSET_RESET:latest}
    security:
      protocol: ${KAFKA_PROPERTIES_SECURITY_PROTOCOL}
    sasl:
      mechanism: ${KAFKA_PROPERTIES_SASL_MECHANISM}
      jaas:
        config: ${KAFKA_PROPERTIES_SASL_JAAS_CONFIG}
    consumer:
      topic-name: ${KAFKA_NUBO_CONSUMER_TOPIC}
      group-id: ${KAFKA_NUBO_GROUP_ID}
      concurrency: ${KAFKA_NUBO_CONCURRENCY:3}
      max-poll-records: ${KAFKA_NUBO_MAX_POLL_RECORDS:500}
    producer:
      topic-name: ${KAFKA_NUBO_TOPIC_NAME_SEND_NOTIFICATIONS}
      topic-name-error-response: ${KAFKA_NUBO_TOPIC_NAME_ERROR_REFERENCE_DATA_ISSUER}
issuer-sync:
  processing:
    chunk-size: ${ISSUER_SYNC_PROCESSING_CHUNK_SIZE:1000}
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
```

## src/main/resources/banner.txt

```
,--. ,---.   ,---.  ,--. ,--.,------.,------.  ,---.,--.   ,--.,--.  ,--. ,-----.,--.  ,--.,------.  ,-----. ,--.  ,--.,--.,-------.  ,---. ,--------.,--. ,-----. ,--.  ,--.
|  |'   .-' '   .-' |  | |  ||  .---'|  .--. ''   .-'\  `.'  / |  ,'.|  |'  .--./|  '--'  ||  .--. ''  .-.  '|  ,'.|  ||  |`--.   /  /  O  \'--.  .--'|  |'  .-.  '|  ,'.|  |
|  |`.  `-. `.  `-. |  | |  ||  `--, |  '--'.'`.  `-. '.    /  |  |' '  ||  |    |  .--.  ||  '--'.'|  | |  ||  |' '  ||  |  /   /  |  .-.  |  |  |   |  ||  | |  ||  |' '  |
|  |.-'    |.-'    |'  '-'  '|  `---.|  |\  \ .-'    |  |  |   |  | `   |'  '--'\|  |  |  ||  |\  \ '  '-'  '|  | `   ||  | /   `--.|  | |  |  |  |   |  |'  '-'  '|  | `   |
`--'`-----' `-----'  `-----' `------'`--' '--'`-----'   `--'   `--'  `--' `-----'`--'  `--'`--' '--' `-----' `--'  `--'`--'`-------'`--' `--'  `--'   `--' `-----' `--'  `--'

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
