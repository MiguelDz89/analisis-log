# nbo-png-reportes-descarga-cmd

Código Java de producción y configuraciones, sin tests. Cada sección contiene el archivo original completo y su ruta. Captura: 28/10/2026.

## Índice

1. `.mvn/wrapper/maven-wrapper.properties`
2. `mvnw`
3. `mvnw.cmd`
4. `pom.xml`
5. `src/main/java/com/nubo/report/downloader/SettlementReportGeneratorApplication.java`
6. `src/main/java/com/nubo/report/downloader/application/config/SwaggerConfig.java`
7. `src/main/java/com/nubo/report/downloader/application/config/WebConfig.java`
8. `src/main/java/com/nubo/report/downloader/application/context/GlobalContext.java`
9. `src/main/java/com/nubo/report/downloader/application/database/NamingStrategyConfig.java`
10. `src/main/java/com/nubo/report/downloader/application/database/UpperNamingConfig.java`
11. `src/main/java/com/nubo/report/downloader/application/filters/GlobalFilter.java`
12. `src/main/java/com/nubo/report/downloader/application/interceptors/GlobalInterceptor.java`
13. `src/main/java/com/nubo/report/downloader/application/properties/PropertiesConfig.java`
14. `src/main/java/com/nubo/report/downloader/application/properties/PropertiesContext.java`
15. `src/main/java/com/nubo/report/downloader/application/util/ApplicationUtils.java`
16. `src/main/java/com/nubo/report/downloader/client/ftp/FtpAdapter.java`
17. `src/main/java/com/nubo/report/downloader/client/sftp/SftpAdapter.java`
18. `src/main/java/com/nubo/report/downloader/exception/ServiceException.java`
19. `src/main/java/com/nubo/report/downloader/exception/error/ErrorCode.java`
20. `src/main/java/com/nubo/report/downloader/exception/error/ErrorResponse.java`
21. `src/main/java/com/nubo/report/downloader/exception/error/ErrorValidation.java`
22. `src/main/java/com/nubo/report/downloader/exception/handler/GlobalExceptionHandler.java`
23. `src/main/java/com/nubo/report/downloader/helpers/CustomMultipartFile.java`
24. `src/main/java/com/nubo/report/downloader/helpers/FileDownloadHelper.java`
25. `src/main/java/com/nubo/report/downloader/helpers/FixedWidthCsvGeneratorUtil.java`
26. `src/main/java/com/nubo/report/downloader/models/dto/FileDownloadResponse.java`
27. `src/main/java/com/nubo/report/downloader/models/dto/FileDownloadResult.java`
28. `src/main/java/com/nubo/report/downloader/models/dto/request/EventKafkaInDto.java`
29. `src/main/java/com/nubo/report/downloader/models/dto/request/SettlementReportFileOutDto.java`
30. `src/main/java/com/nubo/report/downloader/models/dto/request/SettlementReportOutDto.java`
31. `src/main/java/com/nubo/report/downloader/models/entity/FileGenerateEntity.java`
32. `src/main/java/com/nubo/report/downloader/models/entity/FilePathEntity.java`
33. `src/main/java/com/nubo/report/downloader/models/entity/ParticipantEntity.java`
34. `src/main/java/com/nubo/report/downloader/models/entity/StatusEntity.java`
35. `src/main/java/com/nubo/report/downloader/models/entity/TypeEntity.java`
36. `src/main/java/com/nubo/report/downloader/models/entity/UserNuboEntity.java`
37. `src/main/java/com/nubo/report/downloader/models/enums/FtpEnum.java`
38. `src/main/java/com/nubo/report/downloader/models/enums/PropertiesEnum.java`
39. `src/main/java/com/nubo/report/downloader/models/enums/SettlementFieldEnum.java`
40. `src/main/java/com/nubo/report/downloader/models/enums/SftpEnum.java`
41. `src/main/java/com/nubo/report/downloader/models/enums/StatusFileGeneratorStatusEnum.java`
42. `src/main/java/com/nubo/report/downloader/models/enums/UserTypeEnum.java`
43. `src/main/java/com/nubo/report/downloader/models/enums/VersionApiEnum.java`
44. `src/main/java/com/nubo/report/downloader/repository/FileGenerateRepository.java`
45. `src/main/java/com/nubo/report/downloader/repository/ParticipantRepository.java`
46. `src/main/java/com/nubo/report/downloader/repository/StatusRepository.java`
47. `src/main/java/com/nubo/report/downloader/repository/UserNuboRepository.java`
48. `src/main/java/com/nubo/report/downloader/service/FileDownloadService.java`
49. `src/main/java/com/nubo/report/downloader/service/impl/FileDownloadServiceImpl.java`
50. `src/main/java/com/nubo/report/downloader/web/controller/FileDownloadController.java`
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
        <version>3.5.8</version>
        <relativePath/>
    </parent>
    <groupId>com.nubo.report.downloader</groupId>
    <artifactId>report-downloader-api</artifactId>
    <version>0.10.1</version>
    <name>${project.artifactId}</name>
    <description>Report Downloader API</description>

    <properties>
        <java.version>17</java.version>
        <spring.port>8080</spring.port>
        <test.skip>false</test.skip>
        <datasource.url.application.name>ApplicationName=${project.artifactId}</datasource.url.application.name>
        <hikari.pool.name>${project.artifactId}-pool</hikari.pool.name>
        <camel.version>4.11.0</camel.version>
        <spring-framework.version>6.2.12</spring-framework.version>
        <commons-lang3.version>3.18.0</commons-lang3.version>
        <tomcat.version>10.1.47</tomcat.version>
    </properties>

    <dependencyManagement>
        <dependencies>
            <!-- Override Spring Framework versions to fix vulnerabilities -->
            <dependency>
                <groupId>org.springframework</groupId>
                <artifactId>spring-framework-bom</artifactId>
                <version>${spring-framework.version}</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
            <!-- Override commons-lang3 version to fix CVE-2025-48924 -->
            <dependency>
                <groupId>org.apache.commons</groupId>
                <artifactId>commons-lang3</artifactId>
                <version>${commons-lang3.version}</version>
            </dependency>
            <!-- Override Tomcat versions to fix multiple CVEs -->
            <dependency>
                <groupId>org.apache.tomcat.embed</groupId>
                <artifactId>tomcat-embed-core</artifactId>
                <version>${tomcat.version}</version>
            </dependency>
            <dependency>
                <groupId>org.apache.tomcat.embed</groupId>
                <artifactId>tomcat-embed-websocket</artifactId>
                <version>${tomcat.version}</version>
            </dependency>
            <dependency>
                <groupId>org.apache.tomcat.embed</groupId>
                <artifactId>tomcat-embed-el</artifactId>
                <version>${tomcat.version}</version>
            </dependency>
        </dependencies>
    </dependencyManagement>

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
            <artifactId>spring-boot-starter</artifactId>
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
        <!-- Swagger/OpenAPI -->
        <dependency>
            <groupId>org.springdoc</groupId>
            <artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>
            <version>2.8.9</version>
        </dependency>
        <!-- Json -->
        <dependency>
            <groupId>com.google.code.gson</groupId>
            <artifactId>gson</artifactId>
            <version>2.11.0</version>
        </dependency>
        <!-- Camel - Sftp -->
        <dependency>
            <groupId>org.apache.camel.springboot</groupId>
            <artifactId>camel-spring-boot-starter</artifactId>
            <version>${camel.version}</version>
        </dependency>
        <dependency>
            <groupId>org.apache.camel.springboot</groupId>
            <artifactId>camel-ftp-starter</artifactId>
            <version>${camel.version}</version>
        </dependency>
        <dependency>
            <groupId>org.apache.camel</groupId>
            <artifactId>camel-test-spring-junit5</artifactId>
            <version>${camel.version}</version>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>com.github.mwiede</groupId>
            <artifactId>jsch</artifactId>
            <version>0.2.25</version>
        </dependency>
        <!-- vulnerability adjustment  -->
        <dependency>
            <groupId>commons-io</groupId>
            <artifactId>commons-io</artifactId>
            <version>2.18.0</version>
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
                                <exclude>**/SettlementReportGeneratorApplication.class</exclude>
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

## src/main/java/com/nubo/report/downloader/SettlementReportGeneratorApplication.java

```java
package com.nubo.report.downloader;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SettlementReportGeneratorApplication {

	public static void main(String[] args) {
		SpringApplication.run(SettlementReportGeneratorApplication.class, args);
	}

}

```

## src/main/java/com/nubo/report/downloader/application/config/SwaggerConfig.java

```java
package com.nubo.report.downloader.application.config;

import java.util.List;

import org.springdoc.core.customizers.GlobalOpenApiCustomizer;
import org.springdoc.core.models.GroupedOpenApi;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

import com.nubo.report.downloader.exception.error.ErrorResponse;
import com.nubo.report.downloader.exception.error.ErrorValidation;
import com.nubo.report.downloader.models.enums.PropertiesEnum;

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

## src/main/java/com/nubo/report/downloader/application/config/WebConfig.java

```java
package com.nubo.report.downloader.application.config;

import java.util.Locale;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.i18n.SessionLocaleResolver;

import com.nubo.report.downloader.application.interceptors.GlobalInterceptor;

import lombok.RequiredArgsConstructor;

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
                .exposedHeaders("X-File-Name", "X-File-Extension", "X-Full-File-Name", "X-File-Size", "X-Mime-Type", "Content-Disposition")
                .allowCredentials(true);
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(globalInterceptor)
                .addPathPatterns("/**");
    }

}

```

## src/main/java/com/nubo/report/downloader/application/context/GlobalContext.java

```java
package com.nubo.report.downloader.application.context;

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

## src/main/java/com/nubo/report/downloader/application/database/NamingStrategyConfig.java

```java
package com.nubo.report.downloader.application.database;

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

## src/main/java/com/nubo/report/downloader/application/database/UpperNamingConfig.java

```java
package com.nubo.report.downloader.application.database;

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

## src/main/java/com/nubo/report/downloader/application/filters/GlobalFilter.java

```java
package com.nubo.report.downloader.application.filters;


import com.nubo.report.downloader.application.context.GlobalContext;
import com.nubo.report.downloader.application.util.ApplicationUtils;
import com.nubo.report.downloader.exception.ServiceException;
import com.nubo.report.downloader.exception.error.ErrorCode;
import com.nubo.report.downloader.exception.error.ErrorResponse;
import com.nubo.report.downloader.models.enums.PropertiesEnum;
import com.nubo.report.downloader.models.enums.VersionApiEnum;
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
            String method = request.getMethod();
            
            // Skip validation for OPTIONS requests (CORS preflight)
            if ("OPTIONS".equals(method)) {
                chain.doFilter(request, response);
                return;
            }
            
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

## src/main/java/com/nubo/report/downloader/application/interceptors/GlobalInterceptor.java

```java
package com.nubo.report.downloader.application.interceptors;


import com.nubo.report.downloader.application.context.GlobalContext;
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

## src/main/java/com/nubo/report/downloader/application/properties/PropertiesConfig.java

```java
package com.nubo.report.downloader.application.properties;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import lombok.Getter;

@Component
@Getter
public class PropertiesConfig {

    @Value("${spring.application.name}")
    private String apiName;

    @Value("${client.ftp.host}")
    private String ftpHost;

    @Value("${client.ftp.port}")
    private String ftpPort;

    @Value("${client.ftp.user}")
    private String ftpUser;

    @Value("${client.ftp.password}")
    private String ftpPassword;

    @Value("${client.ftp.input-folder}")
    private String ftpInputFolder;

    @Value("${client.sftp.host}")
    private String sftpHost;

    @Value("${client.sftp.port}")
    private String sftpPort;

    @Value("${client.sftp.user}")
    private String sftpUser;

    @Value("${client.sftp.password}")
    private String sftpPassword;

    @Value("${client.sftp.input-folder}")
    private String sftpInputFolder;

}

```

## src/main/java/com/nubo/report/downloader/application/properties/PropertiesContext.java

```java
package com.nubo.report.downloader.application.properties;

import com.nubo.report.downloader.application.context.GlobalContext;
import com.nubo.report.downloader.application.util.ApplicationUtils;
import com.nubo.report.downloader.models.enums.PropertiesEnum;
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
        assert clientDatetime != null;
        return LocalDate.parse(clientDatetime.split("T")[0], formatter);
    }

    public static String getVersion() {
        return GlobalContext.getProperty(PropertiesEnum.VERSION_API.getValue());
    }

}


```

## src/main/java/com/nubo/report/downloader/application/util/ApplicationUtils.java

```java
package com.nubo.report.downloader.application.util;

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

## src/main/java/com/nubo/report/downloader/client/ftp/FtpAdapter.java

```java
package com.nubo.report.downloader.client.ftp;

import com.nubo.report.downloader.application.properties.PropertiesConfig;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.net.ftp.FTPClient;
import org.apache.commons.net.ftp.FTP;
import org.springframework.stereotype.Component;

import java.io.ByteArrayOutputStream;
import java.io.IOException;

@Component
@RequiredArgsConstructor
@Slf4j
public class FtpAdapter {

    private final PropertiesConfig propertiesConfig;

    /**
     * Descarga un archivo específico del servidor FTP
     */
    public byte[] downloadFile(String filePath) throws IOException {
        FTPClient ftpClient = new FTPClient();
        
        try {
            // Conectar al servidor FTP
            ftpClient.connect(propertiesConfig.getFtpHost(), Integer.parseInt(propertiesConfig.getFtpPort()));
            
            // Autenticar
            boolean loginSuccess = ftpClient.login(propertiesConfig.getFtpUser(), propertiesConfig.getFtpPassword());
            if (!loginSuccess) {
                throw new IOException("Error de autenticación FTP para usuario: " + propertiesConfig.getFtpUser());
            }
            
            // Configurar modo pasivo y binario
            ftpClient.enterLocalPassiveMode();
            ftpClient.setFileType(FTP.BINARY_FILE_TYPE);
            
            // Descargar archivo
            ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
            boolean downloadSuccess = ftpClient.retrieveFile(filePath, outputStream);
            
            if (!downloadSuccess) {
                throw new IOException("Error descargando archivo: " + filePath);
            }
            
            byte[] fileBytes = outputStream.toByteArray();
            log.info("Archivo FTP descargado exitosamente: {} ({} bytes)", filePath, fileBytes.length);
            
            return fileBytes;
            
        } finally {
            try {
                if (ftpClient.isConnected()) {
                    ftpClient.logout();
                    ftpClient.disconnect();
                }
            } catch (IOException e) {
                log.warn("Error cerrando conexión FTP", e);
            }
        }
    }

    /**
     * Lista archivos en un directorio FTP
     */
    public String[] listFiles(String directoryPath) throws IOException {
        FTPClient ftpClient = new FTPClient();
        
        try {
            ftpClient.connect(propertiesConfig.getFtpHost(), Integer.parseInt(propertiesConfig.getFtpPort()));
            
            boolean loginSuccess = ftpClient.login(propertiesConfig.getFtpUser(), propertiesConfig.getFtpPassword());
            if (!loginSuccess) {
                throw new IOException("Error de autenticación FTP");
            }
            
            ftpClient.enterLocalPassiveMode();
            
            return ftpClient.listNames(directoryPath);
            
        } finally {
            try {
                if (ftpClient.isConnected()) {
                    ftpClient.logout();
                    ftpClient.disconnect();
                }
            } catch (IOException e) {
                log.warn("Error cerrando conexión FTP", e);
            }
        }
    }
}

```

## src/main/java/com/nubo/report/downloader/client/sftp/SftpAdapter.java

```java
package com.nubo.report.downloader.client.sftp;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;

import com.jcraft.jsch.Channel;
import com.jcraft.jsch.ChannelSftp;
import com.jcraft.jsch.JSch;
import com.jcraft.jsch.JSchException;
import com.jcraft.jsch.Session;
import com.jcraft.jsch.SftpException;
import com.nubo.report.downloader.application.properties.PropertiesConfig;
import com.nubo.report.downloader.exception.ServiceException;
import com.nubo.report.downloader.exception.error.ErrorCode;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Component
@RequiredArgsConstructor
@Slf4j
public class SftpAdapter {

    private final PropertiesConfig propertiesConfig;

  
    private boolean validateConnection() {
        JSch jsch = new JSch();
        Session session = null;
        
        try {
            session = jsch.getSession(
                propertiesConfig.getSftpUser(), 
                propertiesConfig.getSftpHost(), 
                Integer.parseInt(propertiesConfig.getSftpPort())
            );
            
            session.setPassword(propertiesConfig.getSftpPassword());
            session.setConfig("StrictHostKeyChecking", "no");
            
            session.setTimeout(15000);
            session.connect(15000);
            
            log.debug("Validación de conexión SFTP exitosa para host: {}", propertiesConfig.getSftpHost());
            return true;
            
        } catch (JSchException e) {
            log.warn("Fallo en validación de conexión SFTP: {}", e.getMessage());
            return false;
        } finally {
            if (session != null && session.isConnected()) {
                session.disconnect();
            }
        }
    }

   
    public byte[] downloadFile(String filePath) {

        if (!validateConnection()) {
            log.error("No se pudo validar conexión SFTP para descarga: {}", filePath);
            throw new ServiceException(ErrorCode.ERROR_SFTP, 
                "SFTP server connection failed for file: " + filePath, HttpStatus.SERVICE_UNAVAILABLE);
        }
        
        JSch jsch = new JSch();
        Session session = null;
        ChannelSftp sftpChannel = null;
        
        try {

            session = jsch.getSession(
                propertiesConfig.getSftpUser(), 
                propertiesConfig.getSftpHost(), 
                Integer.parseInt(propertiesConfig.getSftpPort())
            );
            
            session.setPassword(propertiesConfig.getSftpPassword());
            session.setConfig("StrictHostKeyChecking", "no");
            
            session.setTimeout(30000);
            session.connect(10000);
            

            Channel channel = session.openChannel("sftp");
            channel.connect(10000);
            sftpChannel = (ChannelSftp) channel;
            

            try {
                sftpChannel.lstat(filePath);
            } catch (SftpException e) {
                if (e.id == ChannelSftp.SSH_FX_NO_SUCH_FILE) {
                    log.error("Archivo no encontrado en SFTP: {}", filePath);
                    throw new ServiceException(ErrorCode.FILE_GENERATE_NOT_FOUND, 
                        "File not found on SFTP server: " + filePath, HttpStatus.NOT_FOUND);
                }
                throw e;
            }
            

            try (InputStream inputStream = sftpChannel.get(filePath);
                 ByteArrayOutputStream outputStream = new ByteArrayOutputStream()) {
                
                byte[] buffer = new byte[8192]; // Buffer más grande para mejor rendimiento
                int bytesRead;
                while ((bytesRead = inputStream.read(buffer)) != -1) {
                    outputStream.write(buffer, 0, bytesRead);
                }
                
                byte[] fileBytes = outputStream.toByteArray();
                log.info("Archivo SFTP descargado exitosamente: {} ({} bytes)", filePath, fileBytes.length);
                
                return fileBytes;
            }
            
        } catch (ServiceException e) {
            throw e;
        } catch (JSchException e) {
            log.error("Error de conexión SFTP para archivo {}: {}", filePath, e.getMessage());
            throw new ServiceException(ErrorCode.ERROR_SFTP, 
                "SFTP connection error for file " + filePath + ": " + e.getMessage(), HttpStatus.SERVICE_UNAVAILABLE);
        } catch (SftpException e) {
            log.error("Error SFTP descargando archivo {}: {}", filePath, e.getMessage());
            if (e.id == ChannelSftp.SSH_FX_NO_SUCH_FILE) {
                throw new ServiceException(ErrorCode.FILE_GENERATE_NOT_FOUND, 
                    "File not found on SFTP server: " + filePath, HttpStatus.NOT_FOUND);
            } else {
                throw new ServiceException(ErrorCode.ERROR_SFTP, 
                    "SFTP error downloading file " + filePath + ": " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
            }
        } catch (IOException e) {
            log.error("Error I/O descargando archivo SFTP {}: {}", filePath, e.getMessage());
            throw new ServiceException(ErrorCode.ERROR_SFTP, 
                "I/O error downloading SFTP file " + filePath + ": " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        } catch (Exception e) {
            log.error("Error inesperado descargando archivo SFTP {}: {}", filePath, e.getMessage());
            throw new ServiceException(ErrorCode.UNEXPECTED, 
                "Unexpected error downloading SFTP file " + filePath + ": " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        } finally {
            if (sftpChannel != null && sftpChannel.isConnected()) {
                sftpChannel.disconnect();
            }
            if (session != null && session.isConnected()) {
                session.disconnect();
            }
        }
    }


    public String[] listFiles(String directoryPath) {
        if (!validateConnection()) {
            log.error("No se pudo validar conexión SFTP para listar directorio: {}", directoryPath);
            throw new ServiceException(ErrorCode.ERROR_SFTP, 
                "SFTP server connection failed for directory listing: " + directoryPath, HttpStatus.SERVICE_UNAVAILABLE);
        }
        
        JSch jsch = new JSch();
        Session session = null;
        ChannelSftp sftpChannel = null;
        
        try {
            session = jsch.getSession(
                propertiesConfig.getSftpUser(), 
                propertiesConfig.getSftpHost(), 
                Integer.parseInt(propertiesConfig.getSftpPort())
            );
            
            session.setPassword(propertiesConfig.getSftpPassword());
            session.setConfig("StrictHostKeyChecking", "no");
            
            session.setTimeout(60000);
            session.connect(20000);
            
            Channel channel = session.openChannel("sftp");
            channel.connect(20000);
            sftpChannel = (ChannelSftp) channel;            return sftpChannel.ls(directoryPath).stream()
                .map(entry -> ((ChannelSftp.LsEntry) entry).getFilename())
                .filter(name -> !name.equals(".") && !name.equals(".."))
                .toArray(String[]::new);
                
        } catch (JSchException e) {
            log.error("Error de conexión SFTP para listar directorio {}: {}", directoryPath, e.getMessage());
            throw new ServiceException(ErrorCode.ERROR_SFTP, 
                "SFTP connection error for directory listing " + directoryPath + ": " + e.getMessage(), HttpStatus.SERVICE_UNAVAILABLE);
        } catch (SftpException e) {
            log.error("Error SFTP listando directorio {}: {}", directoryPath, e.getMessage());
            if (e.id == ChannelSftp.SSH_FX_NO_SUCH_FILE) {
                throw new ServiceException(ErrorCode.FILE_GENERATE_NOT_FOUND, 
                    "Directory not found on SFTP server: " + directoryPath, HttpStatus.NOT_FOUND);
            } else {
                throw new ServiceException(ErrorCode.ERROR_SFTP, 
                    "SFTP error listing directory " + directoryPath + ": " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
            }
        } catch (Exception e) {
            log.error("Error inesperado listando directorio SFTP {}: {}", directoryPath, e.getMessage());
            throw new ServiceException(ErrorCode.UNEXPECTED, 
                "Unexpected error listing SFTP directory " + directoryPath + ": " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        } finally {
            if (sftpChannel != null && sftpChannel.isConnected()) {
                sftpChannel.disconnect();
            }
            if (session != null && session.isConnected()) {
                session.disconnect();
            }
        }
    }
}
```

## src/main/java/com/nubo/report/downloader/exception/ServiceException.java

```java
package com.nubo.report.downloader.exception;

import com.nubo.report.downloader.exception.error.ErrorCode;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public class ServiceException extends RuntimeException {

    private final ErrorCode errorCode;
    private final HttpStatus httpStatus;


    public ServiceException(ErrorCode errorCode, String message, HttpStatus httpStatus) {
        super(errorCode.getMessage().concat(", ").concat(message));
        this.errorCode = errorCode;
        this.httpStatus = httpStatus;
    }


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

## src/main/java/com/nubo/report/downloader/exception/error/ErrorCode.java

```java
package com.nubo.report.downloader.exception.error;

import lombok.Getter;

@Getter
public enum ErrorCode {

    NOT_FOUND("Resource not found"),
    ERROR_DESERIALIZER_JSON("Error Deserializer Json"),
    ERROR_KAFKA_CONSUMER_NUBO("Error Consumer Kafka Nubo"),
    STATUS_NOT_FOUND("Status not found"),
    FILE_GENERATE_NOT_FOUND("File generate not found"),
    ERROR_SFTP("Error SFTP"),
    UNAUTHORIZED("Not unauthorized"),
    FORBIDDEN("Access denied"),
    UNEXPECTED("An unexpected error occurred"),
    METHOD_ARGUMENT_TYPE("Invalid request path"),
    METHOD_NOT_ALLOWED("Http method not allowed"),
    UNSUPPORTED_MEDIA_TYPE("Content Type is not supported"),
    MESSAGE_NOT_READABLE("Error reading the message body request"),
    BAD_REQUEST("Invalid request body"),
    RATE_LIMITING_EXCEEDED("Rate Limiting Exceeded"),
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

## src/main/java/com/nubo/report/downloader/exception/error/ErrorResponse.java

```java
package com.nubo.report.downloader.exception.error;

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

## src/main/java/com/nubo/report/downloader/exception/error/ErrorValidation.java

```java
package com.nubo.report.downloader.exception.error;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ErrorValidation {

    private String id;
    private String description;

}

```

## src/main/java/com/nubo/report/downloader/exception/handler/GlobalExceptionHandler.java

```java
package com.nubo.report.downloader.exception.handler;

import com.nubo.report.downloader.application.properties.PropertiesContext;
import com.nubo.report.downloader.exception.ServiceException;
import com.nubo.report.downloader.exception.error.ErrorCode;
import com.nubo.report.downloader.exception.error.ErrorResponse;
import com.nubo.report.downloader.exception.error.ErrorValidation;
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
                        exception.getMessage():exception.getCause().getMessage())
                .timestamp(ObjectUtils.isEmpty(String.valueOf(PropertiesContext.getClientDatetime())) ? null:
                        String.valueOf(PropertiesContext.getClientDatetime()))
                .errorDetails(errorDetails)
                .build();

        log.error("Error -> {}", errorResponse);

        return ResponseEntity.status(status).body(errorResponse);
    }

}
```

## src/main/java/com/nubo/report/downloader/helpers/CustomMultipartFile.java

```java
package com.nubo.report.downloader.helpers;

import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;

import org.springframework.web.multipart.MultipartFile;

public class CustomMultipartFile implements MultipartFile {
    
    private final byte[] bytes;
    private final String name;
    private final String originalFilename;
    private final String contentType;
    
    public CustomMultipartFile(byte[] bytes, String name, String originalFilename, String contentType) {
        this.bytes = bytes;
        this.name = name;
        this.originalFilename = originalFilename;
        this.contentType = contentType;
    }
    
    @Override
    public String getName() { 
        return name; 
    }
    
    @Override
    public String getOriginalFilename() { 
        return originalFilename; 
    }
    
    @Override
    public String getContentType() { 
        return contentType; 
    }
    
    @Override
    public boolean isEmpty() { 
        return bytes.length == 0; 
    }
    
    @Override
    public long getSize() { 
        return bytes.length; 
    }
    
    @Override
    public byte[] getBytes() { 
        return bytes; 
    }
    
    @Override
    public InputStream getInputStream() { 
        return new ByteArrayInputStream(bytes); 
    }
    
    @Override
    public void transferTo(File dest) throws IOException {
        Files.write(dest.toPath(), bytes);
    }
}
```

## src/main/java/com/nubo/report/downloader/helpers/FileDownloadHelper.java

```java
package com.nubo.report.downloader.helpers;

import java.io.InputStream;
import java.util.Arrays;
import java.util.Map;
import java.util.Optional;

import com.nubo.report.downloader.service.impl.FileDownloadServiceImpl;

public class FileDownloadHelper {

    public enum ProtocolStrategy {
        FTP("ftp"),
        SFTP("sftp"),
        RELATIVE("relative");
        
        private final String protocol;
        
        ProtocolStrategy(String protocol) {
            this.protocol = protocol;
        }
        
        public static Optional<ProtocolStrategy> fromProtocol(String protocol) {
            return Arrays.stream(values())
                .filter(strategy -> strategy.protocol.equals(protocol))
                .findFirst();
        }
        
        public InputStream download(FileDownloadServiceImpl service, String extractedPath) {
            return switch (this) {
                case FTP -> service.downloadFromFtp(extractedPath);
                case SFTP -> service.downloadFromSftp(extractedPath);
                case RELATIVE -> service.downloadFromBothServers(extractedPath);
            };
        }
        
        public String extractPath(FileDownloadServiceImpl service, String fullUri) {
            return switch (this) {
                case FTP -> service.extractFtpPath(fullUri);
                case SFTP -> service.extractSftpPath(fullUri);
                case RELATIVE -> fullUri;
            };
        }
    }

    public static final Map<String, String> CONTENT_TYPE_MAP = Map.of(
        "csv", "text/csv",
        "txt", "text/plain",
        "pdf", "application/pdf",
        "zip", "application/zip",
        "dat", "application/octet-stream",
        "xml", "application/xml",
        "json", "application/json"
    );

    private FileDownloadHelper() {
        // Utility class - no instances allowed
    }
}
```

## src/main/java/com/nubo/report/downloader/helpers/FixedWidthCsvGeneratorUtil.java

```java
package com.nubo.report.downloader.helpers;

import java.io.IOException;
import java.io.StringWriter;
import java.lang.reflect.Method;
import java.util.List;

import com.nubo.report.downloader.models.dto.request.SettlementReportOutDto;
import com.nubo.report.downloader.models.enums.SettlementFieldEnum;

public class FixedWidthCsvGeneratorUtil {

    public static String writeFixedWidthFile(List<SettlementReportOutDto> data, String filePath) throws IOException {
        StringWriter writer = new StringWriter();
        for (SettlementReportOutDto dto : data) {
            StringBuilder line = new StringBuilder();
            for (SettlementFieldEnum field : SettlementFieldEnum.values()) {
                Object value = getFieldValue(dto, field.getFieldName());
                line.append(fixedWidth(value, field.getLength(), field.getType()));
            }
            writer.write(line.toString());
            writer.write(System.lineSeparator());
        }
        return writer.toString();
    }

    private static Object getFieldValue(SettlementReportOutDto dto, String fieldName) {
        try {
            String methodName = "get" + Character.toUpperCase(fieldName.charAt(0)) + fieldName.substring(1);
            Method method = dto.getClass().getMethod(methodName);
            return method.invoke(dto);
        } catch (Exception e) {
            return "";
        }
    }

    private static String fixedWidth(Object value, int width, char type) {

    String str = value == null ? "" : value.toString();

    if (type == 'N') {
        
        if (str.length() > width) {
            str = str.substring(0, width);
            
            if (str.endsWith(".")) {
                str = str.substring(0, str.length() - 1);
                
                if (str.length() < width) {
                    str = String.format("%" + width + "s", str).replace(' ', '0');
                }
            }
        }

        if (str.length() < width) {
            str = String.format("%" + width + "s", str).replace(' ', '0');
        }

        return str;

    } else {

        if (str.length() > width) {
            str = str.substring(0, width);
        }

        return String.format("%-" + width + "s", str);
    }
    
    }

}
```

## src/main/java/com/nubo/report/downloader/models/dto/FileDownloadResponse.java

```java
package com.nubo.report.downloader.models.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Schema(description = "Response containing file data with metadata")
public class FileDownloadResponse {

    @Schema(description = "File name without extension", example = "report_2024")
    private String fileName;
    
    @Schema(description = "File extension", example = "csv")
    private String fileExtension;
    
    @Schema(description = "Complete file name with extension", example = "report_2024.csv")
    private String fullFileName;
    
    @Schema(description = "File size in bytes", example = "1024")
    private Long fileSize;
    
    @Schema(description = "File content as byte array", hidden = true)
    @JsonIgnore
    private byte[] fileContent;
    
    @Schema(description = "MIME type of the file", example = "text/csv")
    private String mimeType;

    public static FileDownloadResponse fromFileNameAndContent(String fullName, byte[] content) {
        String fileName;
        String extension;
        String mimeType = "application/octet-stream"; // default
        
        if (fullName != null && fullName.contains(".")) {
            int lastDotIndex = fullName.lastIndexOf('.');
            fileName = fullName.substring(0, lastDotIndex);
            extension = fullName.substring(lastDotIndex + 1);

            switch (extension.toLowerCase()) {
                case "csv":
                    mimeType = "text/csv";
                    break;
                case "txt":
                    mimeType = "text/plain";
                    break;
                case "pdf":
                    mimeType = "application/pdf";
                    break;
                case "xlsx":
                    mimeType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
                    break;
                case "xls":
                    mimeType = "application/vnd.ms-excel";
                    break;
                case "json":
                    mimeType = "application/json";
                    break;
                case "xml":
                    mimeType = "application/xml";
                    break;
                default:
                    mimeType = "application/octet-stream";
            }
        } else {
            fileName = fullName != null ? fullName : "unknown";
            extension = "bin";
        }
        
        return FileDownloadResponse.builder()
                .fileName(fileName)
                .fileExtension(extension)
                .fullFileName(fullName)
                .fileSize(content != null ? (long) content.length : 0L)
                .fileContent(content)
                .mimeType(mimeType)
                .build();
    }
}
```

## src/main/java/com/nubo/report/downloader/models/dto/FileDownloadResult.java

```java
package com.nubo.report.downloader.models.dto;

import java.io.InputStream;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FileDownloadResult {

    private InputStream fileStream;
    private String fileName;
    private String originalPath;
    private String extractedPath;
    private String protocol;
    private long fileSize;
    private String contentType;
    

    private boolean success;
    

    private String errorMessage;
}
```

## src/main/java/com/nubo/report/downloader/models/dto/request/EventKafkaInDto.java

```java
package com.nubo.report.downloader.models.dto.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EventKafkaInDto {

    private String clientIp;

    private String clientUser;

    private String clientDateTime;

    @JsonProperty("payload")
    private SettlementReportFileOutDto settlementReportFileOutDto;

}
```

## src/main/java/com/nubo/report/downloader/models/dto/request/SettlementReportFileOutDto.java

```java
package com.nubo.report.downloader.models.dto.request;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SettlementReportFileOutDto {

    private Long fileGenerateId;

    private List<SettlementReportOutDto> totalSettlements;
}

```

## src/main/java/com/nubo/report/downloader/models/dto/request/SettlementReportOutDto.java

```java
package com.nubo.report.downloader.models.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SettlementReportOutDto {

    private String recordingDate;

    private String recordingTime;

    private String operationDate;

    private String operationNumber;

    private String sequenceNumber;

    private String operationSide;

    private String transactionType;

    private String marketType;

    private String securityMnemonic;

    private String buyerAffiliateCode;

    private String sellerAffiliateCode;

    private String buyerOperatorCode;

    private String sellerOperatorCode;

    private BigDecimal quantity;

    private Integer repoTermDays;

    private BigDecimal repoCaptureValue;

    private BigDecimal repoRepurchaseAmount;

    private String tradingRing;

    private String complementationStatus;
}
```

## src/main/java/com/nubo/report/downloader/models/entity/FileGenerateEntity.java

```java
package com.nubo.report.downloader.models.entity;

import java.time.LocalDate;
import java.time.LocalDateTime;

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

@Data
@Builder(toBuilder=true)
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"FILE_GENERATION\"", schema = "\"NUANBODB\"")
public class FileGenerateEntity {

    @Id
    @Column(name = "\"FILE_GENERATION_ID\"")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "\"FILE_NAME\"", nullable = false, length = 255)
    private String fileName;

    @Column(name = "\"FILE_TYPE\"", nullable = false, length = 50)
    private String fileType;

    @Column(name = "\"FILE_PATH\"", nullable = false, length = 512)
    private String filePath;

    @Column(name = "\"GENERATED_AT\"", nullable = false)
    private LocalDateTime generatedAt;

    @Column(name = "\"GENERATED_BY\"", nullable = false, length = 100)
    private String generatedBy;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"PARTICIPANT_ID\"", nullable = false)
    private ParticipantEntity participant;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"GENERATION_STATUS_ID\"", nullable = false)
    private StatusEntity generationStatus;

    @Column(name = "\"RECORD_DATE\"", nullable = false)
    private LocalDate recordDate;

    @Column(name = "\"FILE_CONSECUTIVE\"", length = 100)
    private Integer fileConsecutive;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 100)
    private String lastModifyUser;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"OPERATION_STATUS_ID\"", nullable = false)
    private StatusEntity operationStatus;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 100)
    private String lastModifyApplic;

    @Column(name = "\"LAST_MODIFY_DATE\"")
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50)
    private String lastModifyIp;

    @Column(name = "\"TYPE_ID\"")
    private Long typeId;

}
```

## src/main/java/com/nubo/report/downloader/models/entity/FilePathEntity.java

```java
package com.nubo.report.downloader.models.entity;

import java.time.LocalDateTime;

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

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"FILE_PATH\"", schema = "\"NUANBODB\"")
public class FilePathEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"FILE_PATH_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"FILE_PATH\"")
    private String filePath;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"PARTICIPANT_ID\"", nullable = false)
    private ParticipantEntity participant;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"TYPE_ID\"", nullable = false)
    private TypeEntity type;

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

## src/main/java/com/nubo/report/downloader/models/entity/ParticipantEntity.java

```java
package com.nubo.report.downloader.models.entity;

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

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
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

    @Column(name = "\"NAME\"", length = 100)
    private String name;

    @Column(name = "\"SHORT_NAME\"", length = 50)
    private String shortName;

    @Column(name = "\"MNEMONIC\"", length = 4)
    private String mnemonic;

    @Column(name = "\"REGISTRATION_DATE\"")
    private LocalDate registrationDate;

    @Column(name = "\"TAX_CODE\"", length = 20)
    private String taxCode;

    @Column(name = "\"MAIN_ADDRESS\"", length = 100)
    private String mainAddress;

    @Column(name = "\"WEB_PAGE\"", length = 100)
    private String webPage;

    @Column(name = "\"PHONE_NUMBER\"", length = 20)
    private String phoneNumber;

    @Column(name = "\"NIT_CLEARING_HOUSE\"", length = 20)
    private String nitClearingHouse;

    @Column(name = "\"TYPE_ENTITY\"", length = 1)
    private String typeEntity;

    @Column(name = "\"MARGIN_ACCOUNT\"", length = 1)
    private String marginAccount;

    @Column(name = "\"MASTER_ACCOUNT\"", length = 1)
    private String masterAccount;

    @Column(name = "\"DIRECT_ALLOCATION\"", length = 1)
    private String directAllocation;

    @Column(name = "\"MARKET_MAKER\"", length = 1)
    private String marketMaker;

    @Column(name = "\"ENABLED\"")
    private Boolean enabled;

    @Column(name = "\"CUSTODIAN\"")
    private Boolean custodian;

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

## src/main/java/com/nubo/report/downloader/models/entity/StatusEntity.java

```java
package com.nubo.report.downloader.models.entity;

import jakarta.persistence.*;
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

## src/main/java/com/nubo/report/downloader/models/entity/TypeEntity.java

```java
package com.nubo.report.downloader.models.entity;

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

## src/main/java/com/nubo/report/downloader/models/entity/UserNuboEntity.java

```java
package com.nubo.report.downloader.models.entity;

import com.nubo.report.downloader.models.enums.UserTypeEnum;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
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
@Table(name = "\"USER_NUBO\"", schema = "\"NUANBODB\"")
public class UserNuboEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"USER_NUBO_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"USER_NAME\"", unique = true, length = 80, nullable = false)
    private String userName;

    @ManyToOne
    @JoinColumn(name = "\"PARTICIPANT_ID\"", nullable = false)
    private ParticipantEntity participant;

    @Column(name = "\"USER_TYPE\"", length = 20, nullable = false)
    @Enumerated(EnumType.STRING)
    private UserTypeEnum userType;

    @Column(name = "\"PREVIOUS_SESSION\"")
    private Boolean previousSession;

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

## src/main/java/com/nubo/report/downloader/models/enums/FtpEnum.java

```java
package com.nubo.report.downloader.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum FtpEnum {

    FROM_READ_FILE("direct:readFile"),
    FROM_WHITE_PROCESS_FILE("direct:whiteProcessFile"),
    FROM_WHITE_ERROR_FILE("direct:whiteErrorFile");

    private final String value;
}

```

## src/main/java/com/nubo/report/downloader/models/enums/PropertiesEnum.java

```java
package com.nubo.report.downloader.models.enums;

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
            return status != null ? status.getValue() : null;
        }

        @Override
        public PropertiesEnum convertToEntityAttribute(String dbData) {
            return dbData != null ? PropertiesEnum.fromValue(dbData) : null;
        }
    }

}

```

## src/main/java/com/nubo/report/downloader/models/enums/SettlementFieldEnum.java

```java
package com.nubo.report.downloader.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum SettlementFieldEnum {

    RECORDING_DATE("recordingDate", 8, 'A'),
    RECORDING_TIME("recordingTime", 8, 'A'),
    OPERATION_DATE("operationDate", 8, 'N'),
    OPERATION_NUMBER("operationNumber", 9, 'N'),
    SEQUENCE_NUMBER("sequenceNumber", 3, 'N'),
    OPERATION_SIDE("operationSide", 1, 'A'),
    TRANSACTION_TYPE("transactionType", 1, 'A'),
    MARKET_TYPE("marketType", 1, 'A'),
    SECURITY_MNEMONIC("securityMnemonic", 10, 'A'),
    BUYER_AFFILIATE_CODE("buyerAffiliateCode", 3, 'N'),
    SELLER_AFFILIATE_CODE("sellerAffiliateCode", 3, 'N'),
    BUYER_OPERATOR_CODE("buyerOperatorCode", 3, 'A'),
    SELLER_OPERATOR_CODE("sellerOperatorCode", 3, 'A'),
    QUANTITY("quantity", 15, 'N'),
    REPO_TERM_DAYS("repoTermDays", 5, 'N'),
    REPO_CAPTURE_VALUE("repoCaptureValue", 15, 'N'),
    REPO_REPURCHASE_AMOUNT("repoRepurchaseAmount", 19, 'N'),
    TRADING_RING("tradingRing", 1, 'A'),
    COMPLEMENTATION_STATUS("complementationStatus", 1, 'A');

    private final String fieldName;
    private final int length;
    private final char type;

}

```

## src/main/java/com/nubo/report/downloader/models/enums/SftpEnum.java

```java
package com.nubo.report.downloader.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum SftpEnum {

    FROM_READ_FILE("direct:sftpReadFile"),
    FROM_WHITE_PROCESS_FILE("direct:sftpWhiteProcessFile"),
    FROM_WHITE_ERROR_FILE("direct:sftpWhiteErrorFile");

    private final String value;
}
```

## src/main/java/com/nubo/report/downloader/models/enums/StatusFileGeneratorStatusEnum.java

```java
package com.nubo.report.downloader.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum StatusFileGeneratorStatusEnum {

    IN_PROCESS(900L),
    GENERATED(901L);

    private final Long value;

}

```

## src/main/java/com/nubo/report/downloader/models/enums/UserTypeEnum.java

```java
package com.nubo.report.downloader.models.enums;

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

## src/main/java/com/nubo/report/downloader/models/enums/VersionApiEnum.java

```java
package com.nubo.report.downloader.models.enums;

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

## src/main/java/com/nubo/report/downloader/repository/FileGenerateRepository.java

```java
package com.nubo.report.downloader.repository;

import com.nubo.report.downloader.models.entity.FileGenerateEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FileGenerateRepository extends JpaRepository<FileGenerateEntity, Long> {
}

```

## src/main/java/com/nubo/report/downloader/repository/ParticipantRepository.java

```java
package com.nubo.report.downloader.repository;

import com.nubo.report.downloader.models.entity.ParticipantEntity;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ParticipantRepository extends JpaRepository<ParticipantEntity, Long> {
}

```

## src/main/java/com/nubo/report/downloader/repository/StatusRepository.java

```java
package com.nubo.report.downloader.repository;

import com.nubo.report.downloader.models.entity.StatusEntity;
import org.springframework.data.jpa.repository.JpaRepository;


public interface StatusRepository extends JpaRepository<StatusEntity, Long> {
}

```

## src/main/java/com/nubo/report/downloader/repository/UserNuboRepository.java

```java
package com.nubo.report.downloader.repository;

import com.nubo.report.downloader.models.entity.UserNuboEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface UserNuboRepository extends JpaRepository<UserNuboEntity, Long> {

    @Query("SELECT u FROM UserNuboEntity u " +
            "WHERE u.userName = :userName")
    Optional<UserNuboEntity> findByUserName(String userName);

}

```

## src/main/java/com/nubo/report/downloader/service/FileDownloadService.java

```java
package com.nubo.report.downloader.service;

import org.springframework.http.ResponseEntity;

import com.nubo.report.downloader.models.dto.FileDownloadResult;
import com.nubo.report.downloader.models.dto.FileDownloadResponse;

public interface FileDownloadService {

    ResponseEntity<FileDownloadResponse> downloadFile(String filePath);

    ResponseEntity<FileDownloadResult> getFileInfo(String filePath);

    ResponseEntity<byte[]> downloadFileById(Long fileId);

    ResponseEntity<FileDownloadResult> getFileInfoById(Long fileId);

    ResponseEntity<byte[]> downloadFileAsByteArray(Long fileId);

}
```

## src/main/java/com/nubo/report/downloader/service/impl/FileDownloadServiceImpl.java

```java
package com.nubo.report.downloader.service.impl;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.net.URI;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.nubo.report.downloader.application.properties.PropertiesContext;
import com.nubo.report.downloader.client.ftp.FtpAdapter;
import com.nubo.report.downloader.client.sftp.SftpAdapter;
import com.nubo.report.downloader.exception.ServiceException;
import com.nubo.report.downloader.exception.error.ErrorCode;
import com.nubo.report.downloader.helpers.FileDownloadHelper;
import com.nubo.report.downloader.models.dto.FileDownloadResponse;
import com.nubo.report.downloader.models.dto.FileDownloadResult;
import com.nubo.report.downloader.models.entity.FileGenerateEntity;
import com.nubo.report.downloader.models.enums.VersionApiEnum;
import com.nubo.report.downloader.repository.FileGenerateRepository;
import com.nubo.report.downloader.service.FileDownloadService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class FileDownloadServiceImpl implements FileDownloadService {

    private final FileGenerateRepository fileGenerateRepository;
    private final FtpAdapter ftpAdapter;
    private final SftpAdapter sftpAdapter;

    @Override
    public ResponseEntity<FileDownloadResponse> downloadFile(String filePath) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return downloadFileV1(filePath);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public ResponseEntity<FileDownloadResult> getFileInfo(String filePath) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return getFileInfoV1(filePath);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public ResponseEntity<byte[]> downloadFileById(Long fileId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return downloadFileByIdV1(fileId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public ResponseEntity<FileDownloadResult> getFileInfoById(Long fileId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return getFileInfoByIdV1(fileId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public ResponseEntity<byte[]> downloadFileAsByteArray(Long fileId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return downloadFileAsByteArrayV1(fileId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private ResponseEntity<FileDownloadResponse> downloadFileV1(String filePath) {
        try {
            InputStream inputStream = downloadFileOriginal(filePath);
            byte[] bytes = inputStream.readAllBytes();
            String fileName = extractFileName(filePath);
            
            FileDownloadResponse response = FileDownloadResponse.fromFileNameAndContent(fileName, bytes);
            
            return ResponseEntity.ok(response);

        } catch (Exception e) {
            log.error("Error processing file download: {}", filePath, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    private ResponseEntity<FileDownloadResult> getFileInfoV1(String filePath) {
        try {
            String protocol = determineProtocol(filePath);
            String extractedPath = extractPathFromUri(filePath);
            
            FileDownloadResult result = FileDownloadResult.builder()
                    .fileName(extractFileName(filePath))
                    .originalPath(extractedPath)
                    .extractedPath(extractedPath)
                    .protocol(protocol)
                    .success(true)
                    .build();
                    
            return ResponseEntity.ok(result);
            
        } catch (Exception e) {
            log.error("Error getting file information: {}", filePath, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    private ResponseEntity<byte[]> downloadFileByIdV1(Long fileId) {
        try {
            Optional<FileGenerateEntity> fileEntityOpt = fileGenerateRepository.findById(fileId);
            if (fileEntityOpt.isEmpty()) {
                return ResponseEntity.notFound().build();
            }

            FileGenerateEntity fileEntity = fileEntityOpt.get();
            InputStream inputStream = downloadFileOriginal(fileEntity.getFilePath());

            if (inputStream == null) {
                return ResponseEntity.status(HttpStatus.CREATED)
                        .header("X-File-Found", "false")
                        .header("X-File-Name", fileEntity.getFileName())
                        .header("X-File-Path", fileEntity.getFilePath())
                        .header("X-Message", "File not found on server")
                        .build();
            }

            byte[] fileBytes = inputStream.readAllBytes();
            String actualFileName = extractFileName(fileEntity.getFilePath());
            FileDownloadResponse fileResponse = FileDownloadResponse.fromFileNameAndContent(actualFileName, fileBytes);
            
            return ResponseEntity.ok()
                    .header("X-File-Found", "true")
                    .header("X-File-Name", fileResponse.getFileName())
                    .header("X-File-Extension", fileResponse.getFileExtension())
                    .header("X-Full-File-Name", fileResponse.getFullFileName())
                    .header("X-File-Size", String.valueOf(fileResponse.getFileSize()))
                    .header("X-Mime-Type", fileResponse.getMimeType())
                    .header("Content-Disposition", "attachment; filename=\"" + fileResponse.getFullFileName() + "\"")
                    .contentType(org.springframework.http.MediaType.parseMediaType(fileResponse.getMimeType()))
                    .body(fileBytes);

        } catch (Exception e) {
            log.error("Error downloading file by ID: {}", fileId, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    private ResponseEntity<FileDownloadResult> getFileInfoByIdV1(Long fileId) {
        try {
            Optional<FileGenerateEntity> fileEntityOpt = fileGenerateRepository.findById(fileId);
            
            if (fileEntityOpt.isEmpty()) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body(FileDownloadResult.builder()
                                .fileName("unknown")
                                .success(false)
                                .errorMessage("File not found")
                                .build());
            }
            
            FileGenerateEntity fileEntity = fileEntityOpt.get();
            String protocol = determineProtocol(fileEntity.getFilePath());
            String extractedPath = extractPathFromUri(fileEntity.getFilePath());
            
            FileDownloadResult result = FileDownloadResult.builder()
                    .fileName(fileEntity.getFileName())
                    .originalPath(fileEntity.getFilePath())
                    .extractedPath(extractedPath)
                    .protocol(protocol)
                    .success(true)
                    .build();
                    
            return ResponseEntity.ok(result);
            
        } catch (Exception e) {
            log.error("Error getting file information by ID: {}", fileId, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    private ResponseEntity<byte[]> downloadFileAsByteArrayV1(Long fileId) {
        try {
            Optional<FileGenerateEntity> fileEntityOpt = fileGenerateRepository.findById(fileId);
            if (fileEntityOpt.isEmpty()) {
                return ResponseEntity.notFound().build();
            }

            FileGenerateEntity fileEntity = fileEntityOpt.get();
            InputStream inputStream = downloadFileOriginal(fileEntity.getFilePath());
            
            if (inputStream == null) {
                return ResponseEntity.status(HttpStatus.CREATED)
                        .header("X-File-Found", "false")
                        .header("X-File-Name", fileEntity.getFileName())
                        .header("X-File-Path", fileEntity.getFilePath())
                        .header("X-Message", "File not found on server")
                        .build();
            }
            
            byte[] fileBytes = inputStream.readAllBytes();
            String actualFileName = extractFileName(fileEntity.getFilePath());

            return ResponseEntity.ok()
                    .header("X-File-Found", "true")
                    .header("Content-Disposition", "attachment; filename=\"" + actualFileName + "\"")
                    .header("Content-Type", "application/octet-stream")
                    .body(fileBytes);

        } catch (Exception e) {
            log.error("Error downloading file as byte array by ID: {}", fileId, e);
            return ResponseEntity.internalServerError().build();
        }
    }

    private InputStream downloadFileOriginal(String filePath) {
        try {
            String protocol = determineProtocol(filePath);
            Optional<FileDownloadHelper.ProtocolStrategy> strategy = FileDownloadHelper.ProtocolStrategy.fromProtocol(protocol);
            if (strategy.isPresent()) {
                return strategy.get().download(this, filePath);
            } else {
                return downloadFromBothServers(filePath);
            }
        } catch (ServiceException e) {
            throw e;
        } catch (Exception e) {
            log.error("Unexpected error downloading file: {}", filePath, e);
            throw new ServiceException(ErrorCode.UNEXPECTED, 
                "Unexpected error downloading file " + filePath + ": " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public InputStream downloadFromFtp(String filePath) {
        try {
            String cleanedUri = cleanUri(filePath);
            String extractedPath = extractFtpPath(cleanedUri);
            log.debug("FTP - Original path: {}, Cleaned URI: {}, Extracted path: {}", 
                      filePath, cleanedUri, extractedPath);
            byte[] fileBytes = ftpAdapter.downloadFile(extractedPath);
            return new ByteArrayInputStream(fileBytes);
        } catch (ServiceException e) {
            String cleanedUri = cleanUri(filePath);
            String extractedPath = extractFtpPath(cleanedUri);
            if (e.getMessage() != null && e.getMessage().contains("File not found")) {
                log.info("File not found in FTP - Path: {}", extractedPath);
                return null;
            }
            log.warn("ServiceException in FTP - Original path: {}, Extracted path: {}, Error: {}", 
                     filePath, extractedPath, e.getMessage());
            throw e;
        } catch (Exception e) {
            String cleanedUri = cleanUri(filePath);
            String extractedPath = extractFtpPath(cleanedUri);
            log.error("Unexpected error downloading file from FTP - Original path: {}, Extracted path: {}", 
                      filePath, extractedPath, e);
            throw new ServiceException(ErrorCode.ERROR_SFTP, 
                "Unexpected error downloading FTP file " + filePath + ": " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public InputStream downloadFromSftp(String filePath) {
        try {
            String cleanedUri = cleanUri(filePath);
            String extractedPath = extractSftpPath(cleanedUri);
            log.debug("SFTP - Original path: {}, Cleaned URI: {}, Extracted path: {}", 
                      filePath, cleanedUri, extractedPath);
            byte[] fileBytes = sftpAdapter.downloadFile(extractedPath);
            return new ByteArrayInputStream(fileBytes);
        } catch (ServiceException e) {
            String cleanedUri = cleanUri(filePath);
            String extractedPath = extractSftpPath(cleanedUri);
            if (e.getMessage() != null && e.getMessage().contains("File not found")) {
                log.info("File not found in SFTP - Path: {}", extractedPath);
                return null;
            }
            log.warn("ServiceException in SFTP - Original path: {}, Extracted path: {}, Error: {}", 
                     filePath, extractedPath, e.getMessage());
            throw e;
        } catch (Exception e) {
            String cleanedUri = cleanUri(filePath);
            String extractedPath = extractSftpPath(cleanedUri);
            log.error("Unexpected error downloading file from SFTP - Original path: {}, Extracted path: {}", 
                      filePath, extractedPath, e);
            throw new ServiceException(ErrorCode.ERROR_SFTP, 
                "Unexpected error downloading SFTP file " + filePath + ": " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    
    
    private String cleanUri(String uri) {
        if (uri == null || uri.trim().isEmpty()) {
            return uri;
        }
        
        String cleanUri = uri.split("\\?")[0];
        cleanUri = cleanUri.split("#")[0];
        cleanUri = cleanUri.trim();
        
        log.debug("URI cleaned - Original: {}, Clean: {}", uri, cleanUri);
        
        return cleanUri;
    }

    public String extractPathFromUri(String fullUri) {
        if (fullUri == null || fullUri.trim().isEmpty()) {
            throw new IllegalArgumentException("URI cannot be empty");
        }
        
        String cleanedUri = cleanUri(fullUri);
        
        if (cleanedUri.startsWith("ftp://")) {
            return extractFtpPath(cleanedUri);
        } else if (cleanedUri.startsWith("sftp://")) {
            return extractSftpPath(cleanedUri);
        } else {
            return cleanedUri;
        }
    }

    public String determineProtocol(String filePath) {
        if (filePath.startsWith("ftp://")) {
            return "ftp";
        } else if (filePath.startsWith("sftp://")) {
            return "sftp";
        } else {
            Optional<FileDownloadHelper.ProtocolStrategy> strategy = FileDownloadHelper.ProtocolStrategy.fromProtocol(filePath);
            return strategy.map(Enum::name).orElse("UNKNOWN");
        }
    }

    public String extractFtpPath(String ftpUri) {
        try {
            String cleanUri = ftpUri.split("\\?")[0];
            
            Pattern pattern = Pattern.compile("ftp://[^/]+(.*)");
            Matcher matcher = pattern.matcher(cleanUri);
            
            if (matcher.find()) {
                String path = matcher.group(1);
                return path.isEmpty() ? "/" : path;
            }
            
            URI uri = URI.create(cleanUri);
            String path = uri.getPath();
            return path == null || path.isEmpty() ? "/" : path;
        } catch (Exception e) {
            log.error("Error processing FTP URI: {}", ftpUri, e);
            throw new RuntimeException("Error processing FTP URI: " + ftpUri, e);
        }
    }

    public String extractSftpPath(String sftpUri) {
        try {
            String cleanUri = sftpUri.split("\\?")[0];
            
            Pattern pattern = Pattern.compile("sftp://[^/]+(.*)");
            Matcher matcher = pattern.matcher(cleanUri);
            
            if (matcher.find()) {
                String path = matcher.group(1);
                return path.isEmpty() ? "/" : path;
            }
            
            URI uri = URI.create(cleanUri);
            String path = uri.getPath();
            return path == null || path.isEmpty() ? "/" : path;
        } catch (Exception e) {
            log.error("Error processing SFTP URI: {}", sftpUri, e);
            throw new RuntimeException("Error processing SFTP URI: " + sftpUri, e);
        }
    }

    public InputStream downloadFromBothServers(String filePath) {
        try {
            InputStream ftpResult = downloadFromFtp(filePath);
            if (ftpResult != null) {
                return ftpResult;
            }
        } catch (ServiceException e) {
            log.warn("FTP failed, trying SFTP: {}", e.getMessage());
        } catch (Exception e) {
            log.warn("FTP failed with unexpected error, trying SFTP: {}", e.getMessage());
        }
        
        try {
            InputStream sftpResult = downloadFromSftp(filePath);
            if (sftpResult != null) {
                return sftpResult;
            }
        } catch (ServiceException e) {
            log.warn("SFTP also failed: {}", e.getMessage());
        } catch (Exception e) {
            log.warn("SFTP failed with unexpected error: {}", e.getMessage());
        }
        
        log.info("File not found in both FTP and SFTP servers: {}", filePath);
        return null;
    }

    private String extractFileName(String filePath) {
        if (filePath == null || filePath.trim().isEmpty()) {
            return "unknown_file";
        }
        
        String cleanPath = filePath.replaceAll("\\\\", "/");
        
        if (cleanPath.contains("?")) {
            cleanPath = cleanPath.substring(0, cleanPath.indexOf("?"));
        }
        
        String[] parts = cleanPath.split("/");
        if (parts.length > 0) {
            return parts[parts.length - 1];
        }
        
        return "unknown_file";
    }

    public List<String> listSftpDirectory(String path) {
        try {
            String[] files = sftpAdapter.listFiles(path);
            return Arrays.asList(files);
        } catch (Exception e) {
            log.error("Error listing SFTP directory: {}", path, e);
            return Collections.emptyList();
        }
    }

}

```

## src/main/java/com/nubo/report/downloader/web/controller/FileDownloadController.java

```java
package com.nubo.report.downloader.web.controller;

import java.time.LocalDateTime;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nubo.report.downloader.models.dto.FileDownloadResponse;
import com.nubo.report.downloader.models.dto.FileDownloadResult;
import com.nubo.report.downloader.service.FileDownloadService;
import com.nubo.report.downloader.service.impl.FileDownloadServiceImpl;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Tag(name = "File Download Operations")
@RestController
@RequestMapping("/{version}/file-download")
@RequiredArgsConstructor
@Slf4j
public class FileDownloadController {

    private final FileDownloadService fileDownloadService;

    
    @Operation(
            summary = "Download file by path",
            description = "Downloads a file from FTP/SFTP server using the file path from FileGenerate entity"
    )
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully downloaded file with metadata",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = FileDownloadResponse.class)))})
    @GetMapping(value = "/download", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<FileDownloadResponse> downloadFile(@RequestParam String filePath) {
        return fileDownloadService.downloadFile(filePath);
    }

    @Operation(
            summary = "Get file information by path",
            description = "Returns file information without downloading the file"
    )
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully retrieved file information",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = FileDownloadResult.class)))})
    @GetMapping(value = "/info", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<FileDownloadResult> getFileInfo(@RequestParam String filePath) {
        return fileDownloadService.getFileInfo(filePath);
    }

    @Operation(
            summary = "Download file by ID",
            description = "Downloads a file using the FileGenerate entity ID from database"
    )
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully downloaded file with metadata",
            content = @Content(mediaType = MediaType.APPLICATION_OCTET_STREAM_VALUE))})
    @GetMapping(value = "/download/{fileId}", produces = MediaType.APPLICATION_OCTET_STREAM_VALUE)
    public ResponseEntity<byte[]> downloadFileById(@PathVariable Long fileId) {
        return fileDownloadService.downloadFileById(fileId);
    }

    @Operation(
            summary = "Get file information by ID",
            description = "Returns file information using the FileGenerate entity ID from database"
    )
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully retrieved file information",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = FileDownloadResult.class)))})
    @GetMapping(value = "/info/{fileId}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<FileDownloadResult> getFileInfoById(@PathVariable Long fileId) {
        return fileDownloadService.getFileInfoById(fileId);
    }

    @Operation(
            summary = "Download file as byte array by ID",
            description = "Downloads file content as raw byte array with proper headers for download"
    )
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully downloaded file as byte array",
            content = @Content(mediaType = MediaType.APPLICATION_OCTET_STREAM_VALUE))})
    @GetMapping(value = "/download/{fileId}/raw", produces = MediaType.APPLICATION_OCTET_STREAM_VALUE)
    public ResponseEntity<byte[]> downloadFileAsByteArray(@PathVariable Long fileId) {
        return fileDownloadService.downloadFileAsByteArray(fileId);
    }

    @Operation(
            summary = "List SFTP directory contents (TEST ONLY)",
            description = "Lists all files and directories in the specified SFTP path. This is a temporary testing endpoint."
    )
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully listed directory contents")})
    @GetMapping(value = "/test/sftp/list", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Map<String, Object>> listSftpDirectory(
            @RequestParam(defaultValue = "/") String path,
            @RequestParam(defaultValue = "false") boolean recursive) {
        try {
            List<String> files = ((FileDownloadServiceImpl) fileDownloadService).listSftpDirectory(path);
            
            Map<String, Object> response = new HashMap<>();
            response.put("path", path);
            response.put("files", files);
            response.put("count", files.size());
            response.put("timestamp", LocalDateTime.now());
            
            if (recursive) {
                Map<String, Object> subdirectories = new HashMap<>();
                for (String file : files) {
                    if (file.endsWith("/")) {
                        String subdirName = file.substring(0, file.length() - 1);
                        String subdirPath = path.endsWith("/") ? path + subdirName : path + "/" + subdirName;
                        try {
                            List<String> subfiles = ((FileDownloadServiceImpl) fileDownloadService).listSftpDirectory(subdirPath);
                            Map<String, Object> subdirInfo = new HashMap<>();
                            subdirInfo.put("path", subdirPath);
                            subdirInfo.put("files", subfiles);
                            subdirInfo.put("count", subfiles.size());
                            subdirectories.put(subdirName, subdirInfo);
                        } catch (Exception e) {
                            Map<String, Object> errorInfo = new HashMap<>();
                            errorInfo.put("path", subdirPath);
                            errorInfo.put("error", e.getMessage());
                            errorInfo.put("files", Collections.emptyList());
                            errorInfo.put("count", 0);
                            subdirectories.put(subdirName, errorInfo);
                        }
                    }
                    
                }
                response.put("subdirectories", subdirectories);
            }
            
            return ResponseEntity.ok()
                    .header("X-Directory-Path", path)
                    .header("X-Files-Count", String.valueOf(files.size()))
                    .header("X-Recursive", String.valueOf(recursive))
                    .body(response);
        } catch (Exception e) {
            log.error("Error listing SFTP directory: {}", path, e);
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("path", path);
            errorResponse.put("error", e.getMessage());
            errorResponse.put("files", Collections.emptyList());
            errorResponse.put("count", 0);
            
            return ResponseEntity.status(500)
                    .header("X-Directory-Path", path)
                    .header("X-Files-Count", "0")
                    .body(errorResponse);
        }
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
  ftp:
    host: ${FTP_HOST}
    port: ${FTP_PORT}
    user: ${FTP_USER}
    password: ${FTP_PASSWORD}
    input-folder: ${FTP_SETTLEMENT_INPUT_FOLDER:/}
  sftp:
    host: ${FILE_TRANSFER_HOST}
    port: ${FILE_TRANSFER_PORT}
    user: ${FILE_TRANSFER_USER}
    password: ${FILE_TRANSFER_PASSWORD}
    input-folder: ${SFTP_SETTLEMENT_INPUT_FOLDER}
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
  ftp:
    host: ${FTP_HOST:172.22.32.1}
    port: ${FTP_PORT:21}
    user: ${FTP_USER:Anderson}
    password: ${FTP_PASSWORD:893029}
    input-folder: ${FTP_SETTLEMENT_INPUT_FOLDER:/}
  sftp:
    host: ${FILE_TRANSFER_HOST:192.168.18.4}
    port: ${FILE_TRANSFER_PORT:65500}
    user: ${FILE_TRANSFER_USER:sftp1}
    password: ${FILE_TRANSFER_PASSWORD:123}
    input-folder: ${SFTP_SETTLEMENT_INPUT_FOLDER:/}
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
  ftp:
    host: ${FTP_HOST}
    port: ${FTP_PORT}
    user: ${FTP_USER}
    password: ${FTP_PASSWORD}
    input-folder: ${FTP_SETTLEMENT_INPUT_FOLDER}
  sftp:
    host: ${FILE_TRANSFER_HOST}
    port: ${FILE_TRANSFER_PORT}
    user: ${FILE_TRANSFER_USER}
    password: ${FILE_TRANSFER_PASSWORD}
    input-folder: ${SFTP_SETTLEMENT_INPUT_FOLDER}
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
  ftp:
    host: ${FTP_HOST}
    port: ${FTP_PORT}
    user: ${FTP_USER}
    password: ${FTP_PASSWORD}
    input-folder: ${FTP_SETTLEMENT_INPUT_FOLDER}
  sftp:
    host: ${FILE_TRANSFER_HOST}
    port: ${FILE_TRANSFER_PORT}
    user: ${FILE_TRANSFER_USER}
    password: ${FILE_TRANSFER_PASSWORD}
    input-folder: ${SFTP_SETTLEMENT_INPUT_FOLDER}


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
  ftp:
    host: ${FTP_HOST}
    port: ${FTP_PORT}
    user: ${FTP_USER}
    password: ${FTP_PASSWORD}
    input-folder: ${FTP_SETTLEMENT_INPUT_FOLDER}
  sftp:
    host: ${FILE_TRANSFER_HOST}
    port: ${FILE_TRANSFER_PORT}
    user: ${FILE_TRANSFER_USER}
    password: ${FILE_TRANSFER_PASSWORD}
    input-folder: ${SFTP_SETTLEMENT_INPUT_FOLDER}


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
,------. ,------.,------. ,-----. ,------.,--------. ,------.   ,-----. ,--.   ,--.,--.  ,--.,--.    ,-----.   ,---.  ,------.  ,------.,------.    ,---.  ,------. ,--. 
|  .--. '|  .---'|  .--. '  .-.  '|  .--. '--.  .--' |  .-.  \ '  .-.  '|  |   |  ||  ,'.|  ||  |   '  .-.  ' /  O  \ |  .-.  \ |  .---'|  .--. '  /  O  \ |  .--. '|  | 
|  '--'.'|  `--, |  '--' |  | |  ||  '--'.'  |  |    |  |  \  :|  | |  ||  |.'.|  ||  |' '  ||  |   |  | |  ||  .-.  ||  |  \  :|  `--, |  '--'.' |  .-.  ||  '--' ||  | 
|  |\  \ |  `---.|  | --''  '-'  '|  |\  \   |  |    |  '--'  /'  '-'  '|   ,'.   ||  | `   ||  '--.'  '-'  '|  | |  ||  '--'  /|  `---.|  |\  \  |  | |  ||  | --' |  | 
`--' '--'`------'`--'     `-----' `--' '--'  `--'    `-------'  `-----' '--'   '--'`--'  `--'`-----' `-----' `--' `--'`-------' `------'`--' '--' `--' `--'`--'     `--' 
                                                                                                                                                                         
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
