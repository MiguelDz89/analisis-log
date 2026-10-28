# nbo-png-correcciones-borde-back

Código Java de producción y configuraciones, sin tests. Cada sección contiene el archivo original completo y su ruta. Captura: 28/10/2026.

## Índice

1. `.mvn/wrapper/maven-wrapper.properties`
2. `mvnw`
3. `mvnw.cmd`
4. `pom.xml`
5. `src/main/java/com/nubo/siidj/correction/sender/SiidjCorrectionSenderApplication.java`
6. `src/main/java/com/nubo/siidj/correction/sender/application/config/KafkaConsumerConfig.java`
7. `src/main/java/com/nubo/siidj/correction/sender/application/properties/PropertiesConfig.java`
8. `src/main/java/com/nubo/siidj/correction/sender/application/util/ApplicationUtils.java`
9. `src/main/java/com/nubo/siidj/correction/sender/exception/ServiceException.java`
10. `src/main/java/com/nubo/siidj/correction/sender/exception/error/ErrorCode.java`
11. `src/main/java/com/nubo/siidj/correction/sender/exception/error/ErrorResponse.java`
12. `src/main/java/com/nubo/siidj/correction/sender/exception/error/ErrorValidation.java`
13. `src/main/java/com/nubo/siidj/correction/sender/exception/kafka/KafkaErrorBuild.java`
14. `src/main/java/com/nubo/siidj/correction/sender/helpers/MapperUtil.java`
15. `src/main/java/com/nubo/siidj/correction/sender/kafka/consumer/KafkaNuboAdapter.java`
16. `src/main/java/com/nubo/siidj/correction/sender/kafka/producer/KafkaRegionalAdapter.java`
17. `src/main/java/com/nubo/siidj/correction/sender/models/dto/request/SendingCorrection.java`
18. `src/main/java/com/nubo/siidj/correction/sender/service/ProcessMessageService.java`
19. `src/main/java/com/nubo/siidj/correction/sender/service/impl/ProcessMessageServiceImpl.java`
20. `src/main/resources/application-dev.yml`
21. `src/main/resources/application-local.yml`
22. `src/main/resources/application-prod.yml`
23. `src/main/resources/application-qa.yml`
24. `src/main/resources/application-uat.yml`
25. `src/main/resources/application.yml`
26. `src/main/resources/banner.txt`
27. `src/main/resources/log/JsonEventLayout_error.json`
28. `src/main/resources/log/JsonEventLayout_info.json`
29. `src/main/resources/log/JsonEventLayout_trace.json`
30. `src/main/resources/log/log4j2-prod.properties`
31. `src/main/resources/log/log4j2.properties`

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
		<version>3.5.6</version>
		<relativePath/> <!-- lookup parent from repository -->
	</parent>
	<groupId>com.nubo.siidj.correction.sender</groupId>
	<artifactId>siidj-correction-sender</artifactId>
	<version>0.13.0</version>
	<name>${project.artifactId}</name>
	<description>Siidj Correction Sender</description>

	<properties>
		<java.version>17</java.version>
		<test.skip>false</test.skip>
	</properties>

	<dependencies>
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
		<!-- lib BUS Kafka Nuamx -->
		<dependency>
			<groupId>com.nuamx</groupId>
			<artifactId>bus-lib</artifactId>
			<version>0.0.5</version>
		</dependency>
		<dependency>
			<groupId>com.nuamx</groupId>
			<artifactId>bus-messages</artifactId>
			<version>0.0.11</version>
		</dependency>
		<!-- vulnerability adjustment  -->
		<dependency>
			<groupId>com.squareup.wire</groupId>
			<artifactId>wire-runtime-jvm</artifactId>
			<version>5.3.1</version>
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
					<!--suppress UnresolvedMavenProperty -->
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
								<exclude>**/SiidjCorrectionSenderApplication.class</exclude>
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
	<repositories>
		<repository>
			<id>central</id>
			<url>https://artifactory.nuamexchange.com/artifactory/nuam</url>
		</repository>
		<repository>
			<id>confluent</id>
			<url>https://packages.confluent.io/maven/</url>
		</repository>
	</repositories>
</project>

```

## src/main/java/com/nubo/siidj/correction/sender/SiidjCorrectionSenderApplication.java

```java
package com.nubo.siidj.correction.sender;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"com.nubo.siidj.correction.sender", "com.nuamx.bus.*"})
public class SiidjCorrectionSenderApplication {

	public static void main(String[] args) {
		SpringApplication.run(SiidjCorrectionSenderApplication.class, args);
	}

}

```

## src/main/java/com/nubo/siidj/correction/sender/application/config/KafkaConsumerConfig.java

```java
package com.nubo.siidj.correction.sender.application.config;

import com.fasterxml.jackson.core.type.TypeReference;
import com.nubo.siidj.correction.sender.application.properties.PropertiesConfig;
import com.nubo.siidj.correction.sender.exception.ServiceException;
import com.nubo.siidj.correction.sender.exception.error.ErrorCode;
import com.nubo.siidj.correction.sender.exception.kafka.KafkaErrorBuild;
import com.nubo.siidj.correction.sender.models.dto.request.SendingCorrection;
import lombok.RequiredArgsConstructor;
import org.apache.kafka.clients.consumer.ConsumerConfig;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.apache.kafka.common.header.Header;
import org.apache.kafka.common.serialization.StringDeserializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.annotation.EnableKafka;
import org.springframework.kafka.config.ConcurrentKafkaListenerContainerFactory;
import org.springframework.kafka.core.ConsumerFactory;
import org.springframework.kafka.core.DefaultKafkaConsumerFactory;
import org.springframework.kafka.listener.DefaultErrorHandler;
import org.springframework.kafka.listener.ListenerExecutionFailedException;
import org.springframework.kafka.support.KafkaHeaders;
import org.springframework.kafka.support.serializer.DeserializationException;
import org.springframework.kafka.support.serializer.ErrorHandlingDeserializer;
import org.springframework.kafka.support.serializer.JsonDeserializer;
import org.springframework.util.backoff.FixedBackOff;

import java.nio.ByteBuffer;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@EnableKafka
@Configuration
@RequiredArgsConstructor
public class KafkaConsumerConfig {

    private final PropertiesConfig propertiesConfig;

    @Bean
    public ConsumerFactory<String, SendingCorrection> consumerFactoryKafkaNubo() {
        Map<String, Object> configProps = new HashMap<>();
        configProps.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, propertiesConfig.getKafkaNuboBootstrapServers());
        configProps.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);
        configProps.put(ConsumerConfig.GROUP_ID_CONFIG, propertiesConfig.getKafkaNuboGroupId());
        configProps.put(ConsumerConfig.AUTO_OFFSET_RESET_CONFIG, propertiesConfig.getKafkaNuboAutoOffsetReset());
        configProps.put("security.protocol", propertiesConfig.getKafkaNuboSecurityProtocol());
        configProps.put("sasl.mechanism", propertiesConfig.getKafkaNuboSaslMechanism());
        configProps.put("sasl.jaas.config", propertiesConfig.getKafkaNuboSaslJaasConfig());

        JsonDeserializer<SendingCorrection> jsonDeserializer = new JsonDeserializer<>(new TypeReference<>() {});
        jsonDeserializer.addTrustedPackages("com.nubo.siidj.correction.sender");

        return new DefaultKafkaConsumerFactory<>(
                configProps,
                new StringDeserializer(),
                new ErrorHandlingDeserializer<>(jsonDeserializer)
        );
    }

    @Bean
    public ConcurrentKafkaListenerContainerFactory<String, SendingCorrection> kafkaNuboListenerContainerFactory(
            DefaultErrorHandler errorHandler) {
        ConcurrentKafkaListenerContainerFactory<String, SendingCorrection> factory = new ConcurrentKafkaListenerContainerFactory<>();
        factory.setConsumerFactory(consumerFactoryKafkaNubo());
        factory.setCommonErrorHandler(errorHandler);
        factory.getContainerProperties().setDeliveryAttemptHeader(true);
        return factory;
    }

    @Bean
    public DefaultErrorHandler kafkaErrorHandler(KafkaErrorBuild kafkaErrorBuild) {
        FixedBackOff backOff = new FixedBackOff(2000L, propertiesConfig.getKafkaNuboRetries());

        DefaultErrorHandler errorHandler = new DefaultErrorHandler(
                (record, exception) -> {
                    Integer deliveryAttempt = getDeliveryAttempt(record);

                    ErrorCode errorCode;
                    if (exception instanceof ListenerExecutionFailedException e) {
                        Throwable cause = e.getCause();
                        if (cause instanceof DeserializationException) {
                            errorCode = ErrorCode.ERROR_DESERIALIZER_JSON;
                        } else if (cause instanceof ServiceException se) {
                            errorCode = se.getErrorCode();
                        } else {
                            errorCode = ErrorCode.ERROR_KAFKA_CONSUMER_NUBO;
                        }
                    } else if (exception instanceof ServiceException ex) {
                        errorCode = ex.getErrorCode();
                    } else {
                        errorCode = ErrorCode.ERROR_KAFKA_CONSUMER_NUBO;
                    }
                    kafkaErrorBuild.buildError(exception, errorCode, record.offset(), record.topic(), deliveryAttempt);
                },
                backOff
        );
        errorHandler.addNotRetryableExceptions(DeserializationException.class);
        errorHandler.setCommitRecovered(true);
        errorHandler.setAckAfterHandle(true);

        return errorHandler;
    }

    private Integer getDeliveryAttempt(ConsumerRecord<?, ?> record) {
        Header header = record.headers().lastHeader(KafkaHeaders.DELIVERY_ATTEMPT);
        return header != null ? ByteBuffer.wrap(header.value()).getInt() : null;
    }

}
```

## src/main/java/com/nubo/siidj/correction/sender/application/properties/PropertiesConfig.java

```java
package com.nubo.siidj.correction.sender.application.properties;

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

    @Value("${kafka.nubo.topic-name}")
    private String kafkaNuboTopicName;

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

    @Value("${kafka.nubo.group-id}")
    private String kafkaNuboGroupId;

    @Value("${spring.kafka.nuam.producer.topic-name}")
    private String kafkaNuamProducerTopicName;

}

```

## src/main/java/com/nubo/siidj/correction/sender/application/util/ApplicationUtils.java

```java
package com.nubo.siidj.correction.sender.application.util;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.protobuf.Timestamp;
import com.nubo.siidj.correction.sender.exception.ServiceException;
import com.nubo.siidj.correction.sender.exception.error.ErrorCode;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.time.format.DateTimeFormatter;

public class ApplicationUtils {

    static final String FORMAT_DATETIME = "yyyy-MM-dd'T'HH:mm:ss";
    static final String FORMAT_BASIC_DATE = "yyyyMMdd";

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
        return LocalDate.parse(timeString, DateTimeFormatter.ofPattern(FORMAT_BASIC_DATE));
    }

    public static String convertObjectToJson(Object object) {
        try {
            ObjectMapper mapper = new ObjectMapper();
            return mapper.writeValueAsString(object);
        } catch (JsonProcessingException e) {
            throw new ServiceException(ErrorCode.UNEXPECTED, e);
        }
    }

    public static <T> T convertJsonToObject(String json, Class<T> clazz) {
        try {
            ObjectMapper mapper = new ObjectMapper();
            return mapper.readValue(json, clazz);
        } catch (JsonProcessingException e) {
            throw new ServiceException(ErrorCode.UNEXPECTED, e);
        }
    }


}
```

## src/main/java/com/nubo/siidj/correction/sender/exception/ServiceException.java

```java
package com.nubo.siidj.correction.sender.exception;

import com.nubo.siidj.correction.sender.exception.error.ErrorCode;
import lombok.Getter;

@Getter
public class ServiceException extends RuntimeException {

    private final ErrorCode errorCode;

    public ServiceException(ErrorCode errorCode) {
        super(errorCode.getMessage());
        this.errorCode = errorCode;
    }

    public ServiceException(ErrorCode errorCode, Throwable throwable) {
        super(errorCode.getMessage(), throwable);
        this.errorCode = errorCode;
    }

    public ServiceException(ErrorCode errorCode, String message) {
        super(errorCode.getMessage() + " " + message);
        this.errorCode = errorCode;
    }

}

```

## src/main/java/com/nubo/siidj/correction/sender/exception/error/ErrorCode.java

```java
package com.nubo.siidj.correction.sender.exception.error;

import lombok.Getter;

@Getter
public enum ErrorCode {

    UNEXPECTED("An unexpected error occurred"),
    ERROR_KAFKA_PRODUCER_REGIONAL("Error Producer Kafka Regional"),
    ERROR_KAFKA_CONSUMER_NUBO("Error Producer Kafka Nubo"),
    ERROR_DESERIALIZER_JSON("Error Deserializer Json"),
    ERROR_SERIALIZER_JSON("Error Serializer Json");

    private final String message;

    ErrorCode(String message) {
        this.message = message;
    }

    public String getName() {
        return this.name();
    }

}

```

## src/main/java/com/nubo/siidj/correction/sender/exception/error/ErrorResponse.java

```java
package com.nubo.siidj.correction.sender.exception.error;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.nubo.siidj.correction.sender.application.util.ApplicationUtils;
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

## src/main/java/com/nubo/siidj/correction/sender/exception/error/ErrorValidation.java

```java
package com.nubo.siidj.correction.sender.exception.error;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ErrorValidation {

    private String id;
    private String description;

}
```

## src/main/java/com/nubo/siidj/correction/sender/exception/kafka/KafkaErrorBuild.java

```java
package com.nubo.siidj.correction.sender.exception.kafka;

import com.nubo.siidj.correction.sender.application.properties.PropertiesConfig;
import com.nubo.siidj.correction.sender.exception.error.ErrorCode;
import com.nubo.siidj.correction.sender.exception.error.ErrorResponse;
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

    public void buildError(Exception exception, ErrorCode errorCode) {
        this.buildErrorResponse(exception, errorCode, null, null, null);
    }

    public void buildError(Exception exception, ErrorCode errorCode, Long offset) {
        this.buildErrorResponse(exception, errorCode, offset, null, null);
    }

    public void buildError(Exception exception, ErrorCode errorCode, Long offset, String topic, Integer retry) {
        this.buildErrorResponse(exception, errorCode, offset, topic, retry);
    }

    private void buildErrorResponse(Exception exception, ErrorCode errorCode, Long offset, String topic, Integer retry) {
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

        log.error("Error -> {}", errorResponse);
    }

}

```

## src/main/java/com/nubo/siidj/correction/sender/helpers/MapperUtil.java

```java
package com.nubo.siidj.correction.sender.helpers;

import com.nuamx.bus.message.common.Currency;
import com.nuamx.bus.message.common.Date;
import com.nubo.siidj.correction.sender.application.util.ApplicationUtils;

import java.time.LocalDate;
import java.time.LocalDateTime;

public class MapperUtil {
    private MapperUtil() {}

    public static Date stringToDate(String string){
        if (string == null || string.equals("0") || string.equals("00000000") ) {
            return Date.newBuilder()
                    .setYear(0)
                    .setMonth(0)
                    .setDay(0)
                    .build();
        }
        LocalDate localDate = ApplicationUtils.convertStringToLocalDate(string);
        return Date.newBuilder()
                .setYear(localDate.getYear())
                .setMonth(localDate.getMonthValue())
                .setDay(localDate.getDayOfMonth())
                .build();
    }

    public static Currency fromCode(Integer code){
        Currency currency = Currency.forNumber(code);
        return currency != null ? currency :Currency.UNRECOGNIZED;
    }

}

```

## src/main/java/com/nubo/siidj/correction/sender/kafka/consumer/KafkaNuboAdapter.java

```java
package com.nubo.siidj.correction.sender.kafka.consumer;

import com.nubo.siidj.correction.sender.application.properties.PropertiesConfig;
import com.nubo.siidj.correction.sender.models.dto.request.SendingCorrection;
import com.nubo.siidj.correction.sender.service.ProcessMessageService;
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
    private final ProcessMessageService processMessageService;

    @KafkaListener(
            topics = "#{propertiesConfig.getKafkaNuboTopicName}",
            containerFactory = "kafkaNuboListenerContainerFactory")
    public void listenKafka(@Payload SendingCorrection sendingCorrection,
                            @Header(KafkaHeaders.RECEIVED_PARTITION) int partition,
                            @Header(KafkaHeaders.OFFSET) long offset,
                            @Header(KafkaHeaders.RECEIVED_TOPIC) String topic,
                            @Header(KafkaHeaders.DELIVERY_ATTEMPT) int retry) {
        log.info("New received Message -- Topic: {} -- Partition : {} -- Offset : {} -- retry: {}",
                topic, partition, offset, retry);

        processMessageService.sendMessageToKafkaRegional(sendingCorrection);
    }
}
```

## src/main/java/com/nubo/siidj/correction/sender/kafka/producer/KafkaRegionalAdapter.java

```java
package com.nubo.siidj.correction.sender.kafka.producer;

import com.google.protobuf.Message;
import com.nubo.siidj.correction.sender.application.properties.PropertiesConfig;
import com.nubo.siidj.correction.sender.exception.ServiceException;
import com.nubo.siidj.correction.sender.exception.error.ErrorCode;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.SendResult;
import org.springframework.stereotype.Component;

import java.util.concurrent.CompletableFuture;

@Component
@RequiredArgsConstructor
@Slf4j
public class KafkaRegionalAdapter {

    private final PropertiesConfig propertiesConfig;
    private final KafkaTemplate<String, Message> kafkaTemplate;

    public void sendMessage(Message message) {
        String topic = propertiesConfig.getKafkaNuamProducerTopicName();
        CompletableFuture<SendResult<String, Message>> future = kafkaTemplate.send(topic, message).toCompletableFuture();

        future.thenAccept(result -> log.info("Send message -- Topic: {} -- Partition : {} -- Offset : {} ",
                        topic, result.getRecordMetadata().partition(), result.getRecordMetadata().offset()))
                .exceptionally(ex -> {
                    throw new ServiceException(ErrorCode.ERROR_KAFKA_PRODUCER_REGIONAL, ex);
                });
    }
}

```

## src/main/java/com/nubo/siidj/correction/sender/models/dto/request/SendingCorrection.java

```java
package com.nubo.siidj.correction.sender.models.dto.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SendingCorrection {

    private Integer operationIndicator;

    private Integer plazaCode;

    private Integer operationMode;

    private String operationRegistrationDate;

    private String operationNumber;

    private Integer processType ;

    private Integer countedSettlementType ;

    private Integer termSettlementType;

    private String countedSettlementDate;

    private String termSettlementDate;

    private Integer sellDepositorCode;

    private Integer sellCustodianCode;

    private String  sellInvestorAccount;

    private String sellCud;

    private Integer buyDepositorCode;

    private Integer buyCustodianCode;

    private String buyInvestorAccount;

    private String buyCud;

    private String isin;

    private Integer deposit;

    private BigDecimal unitValue;

    private BigDecimal cashValue;

    private Integer currencyCode;

    private Integer buySettlementIndicator;

    private Integer sellSettlementIndicator;

    private Integer referencePlazaCode;

    private Integer referenceOperationMode;

    private String referenceOperationRegistrationDate;

    private String referenceOperationNumber;
}

```

## src/main/java/com/nubo/siidj/correction/sender/service/ProcessMessageService.java

```java
package com.nubo.siidj.correction.sender.service;

import com.nubo.siidj.correction.sender.models.dto.request.SendingCorrection;

import java.util.List;

public interface ProcessMessageService {

    void sendMessageToKafkaRegional(SendingCorrection sendingCorrection);
}

```

## src/main/java/com/nubo/siidj/correction/sender/service/impl/ProcessMessageServiceImpl.java

```java
package com.nubo.siidj.correction.sender.service.impl;

import com.nuamx.bus.message.common.Decimal;
import com.nuamx.bus.message.settlement.NuboInstruction;
import com.nubo.siidj.correction.sender.helpers.MapperUtil;
import com.nubo.siidj.correction.sender.kafka.producer.KafkaRegionalAdapter;
import com.nubo.siidj.correction.sender.models.dto.request.SendingCorrection;
import com.nubo.siidj.correction.sender.service.ProcessMessageService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class ProcessMessageServiceImpl implements ProcessMessageService {

    private final KafkaRegionalAdapter kafkaRegionalAdapter;

    @Override
    public void sendMessageToKafkaRegional(SendingCorrection sendingCorrection) {
        log.debug("Start method sendMessageToKafkaNubo,-> {}", sendingCorrection);
        log.info("Received batch of {} messages", sendingCorrection);

            sendKafkaRegional(sendingCorrection);

        log.debug("End method sendMessageToKafkaNubo");
    }

    private void sendKafkaRegional(SendingCorrection sendingCorrection) {
        NuboInstruction nuboInstruction = NuboInstruction.newBuilder()
                .setIndicadorOperacion(sendingCorrection.getOperationIndicator())
                .setCodigoPlaza(sendingCorrection.getPlazaCode())
                .setModalidadOperacion(sendingCorrection.getOperationMode())
                .setFechaRegistroOp(MapperUtil.stringToDate(sendingCorrection.getOperationRegistrationDate()))
                .setNumeroOperacion(Long.parseLong(sendingCorrection.getOperationNumber()))
                .setTipoProceso(sendingCorrection.getProcessType())
                .setTipoLiquidacionContado(sendingCorrection.getCountedSettlementType())
                .setTipoLiquidacionPlazo(sendingCorrection.getTermSettlementType())
                .setFechaLiquidacionContado(MapperUtil.stringToDate(sendingCorrection.getCountedSettlementDate()))
                .setFechaLiquidacionPlazo(MapperUtil.stringToDate(sendingCorrection.getTermSettlementDate()))
                .setCodigoDepositanteVendedor(sendingCorrection.getSellDepositorCode())
                .setCodigoCustodioComprador(sendingCorrection.getSellCustodianCode())
                .setCuentaInversionistaVendedor(Integer.parseInt(sendingCorrection.getSellInvestorAccount()))
                .setCudVendedor(sendingCorrection.getSellCud())
                .setCodigoDepositanteComprador(sendingCorrection.getBuyDepositorCode())
                .setCodigoCustodioVendedor(sendingCorrection.getBuyCustodianCode())
                .setCuentaInversionistaComprador(Integer.parseInt(sendingCorrection.getBuyInvestorAccount()))
                .setCudComprador(sendingCorrection.getBuyCud())
                .setIsin(sendingCorrection.getIsin())
                .setDeposito(sendingCorrection.getDeposit())
                .setValorUnidades(Decimal.fromBigDecimal(sendingCorrection.getUnitValue()))
                .setValorEfectivo(Decimal.fromBigDecimal(sendingCorrection.getCashValue()))
                .setMoneda(MapperUtil.fromCode(sendingCorrection.getCurrencyCode()))
                .setIndicadorLiquidacionCompra(sendingCorrection.getBuySettlementIndicator())
                .setIndicadorLiquidacionVenta(sendingCorrection.getSellSettlementIndicator())
                .setCodigoPlazaRef(sendingCorrection.getReferencePlazaCode())
                .setModalidadOperacionRef(sendingCorrection.getReferenceOperationMode())
                .setFechaRegistroOperacionRef(MapperUtil.stringToDate(sendingCorrection.getReferenceOperationRegistrationDate()))
                .setNumeroOperacionRef(Long.parseLong(sendingCorrection.getReferenceOperationNumber()))
                .build();

        kafkaRegionalAdapter.sendMessage(nuboInstruction);
    }
}

```

## src/main/resources/application-dev.yml

```yaml
spring:
  kafka.nuam:
    bootstrap-servers: ${KAFKA_REGIONAL_BOOTSTRAP_SERVER}
    security:
      protocol: SSL
    producer:
      bootstrap-servers: ${KAFKA_REGIONAL_BOOTSTRAP_SERVER}
      topic-name: ${KAFKA_REGIONAL_TOPIC_NAME}
    properties:
      schema.registry:
        url: ${KAFKA_REGIONAL_SCHEMA_REGISTRY_URL}
        ssl:
          truststore:
            location: ${SSL_TRUSTSTORE_LOCATION}
            password: ${SSL_TRUSTSTORE_PASSWORD}
            type: JKS
      ssl:
        truststore:
          location: ${SSL_TRUSTSTORE_LOCATION}
          password: ${SSL_TRUSTSTORE_PASSWORD}
          type: JKS
        keystore:
          location: ${SSL_KEYSTORE_LOCATION}
          password: ${SSL_KEYSTORE_PASSWORD}
          type: JKS
kafka:
  nubo:
    bootstrap-servers: ${KAFKA_NUBO_BOOTSTRAP_SERVER}
    topic-name: ${KAFKA_NUBO_TOPIC_NAME}
    group-id: ${KAFKA_NUBO_GROUP_ID}
    retries: ${KAFKA_NUBO_RETRIES:5}
    auto-offset-reset: ${KAFKA_NUBO_AUTO_OFFSET_RESET:latest}
    security:
      protocol: ${KAFKA_PROPERTIES_SECURITY_PROTOCOL}
    sasl:
      mechanism: ${KAFKA_PROPERTIES_SASL_MECHANISM}
      jaas:
        config: ${KAFKA_PROPERTIES_SASL_JAAS_CONFIG}
logging:
  config: classpath:log/log4j2.properties

```

## src/main/resources/application-local.yml

```yaml
spring:
  kafka.nuam:
    bootstrap-servers: ${KAFKA_REGIONAL_BOOTSTRAP_SERVER}
    security:
      protocol: SSL
    producer:
      bootstrap-servers: ${KAFKA_REGIONAL_BOOTSTRAP_SERVER}
      topic-name: ${KAFKA_REGIONAL_TOPIC_NAME}
    properties:
      schema.registry:
        url: ${KAFKA_REGIONAL_SCHEMA_REGISTRY_URL}
        ssl:
          truststore:
            location: ${SSL_TRUSTSTORE_LOCATION}
            password: ${SSL_TRUSTSTORE_PASSWORD}
            type: JKS
      ssl:
        truststore:
          location: ${SSL_TRUSTSTORE_LOCATION}
          password: ${SSL_TRUSTSTORE_PASSWORD}
          type: JKS
        keystore:
          location: ${SSL_KEYSTORE_LOCATION}
          password: ${SSL_KEYSTORE_PASSWORD}
          type: JKS

kafka:
  nubo:
    bootstrap-servers: ${KAFKA_NUBO_BOOTSTRAP_SERVER}
    topic-name: ${KAFKA_NUBO_TOPIC_NAME}
    group-id: ${KAFKA_NUBO_GROUP_ID}
    retries: ${KAFKA_NUBO_RETRIES:5}
    auto-offset-reset: ${KAFKA_NUBO_AUTO_OFFSET_RESET:latest}
    security:
      protocol: SASL_PLAINTEXT
    sasl:
      mechanism: SCRAM-SHA-256
      jaas:
        config: "org.apache.kafka.common.security.scram.ScramLoginModule required username=${KAFKA_NUBO_SASL_USER} password=${KAFKA_NUBO_SASL_PASSWORD};"
logging:
  config: classpath:log/log4j2.properties

```

## src/main/resources/application-prod.yml

```yaml
spring:
  kafka.nuam:
    bootstrap-servers: ${KAFKA_REGIONAL_BOOTSTRAP_SERVER}
    security:
      protocol: SSL
    producer:
      bootstrap-servers: ${KAFKA_REGIONAL_BOOTSTRAP_SERVER}
      topic-name: ${KAFKA_REGIONAL_TOPIC_NAME}
    properties:
      schema.registry:
        url: ${KAFKA_REGIONAL_SCHEMA_REGISTRY_URL}
        ssl:
          truststore:
            location: ${SSL_TRUSTSTORE_LOCATION}
            password: ${SSL_TRUSTSTORE_PASSWORD}
            type: JKS
      ssl:
        truststore:
          location: ${SSL_TRUSTSTORE_LOCATION}
          password: ${SSL_TRUSTSTORE_PASSWORD}
          type: JKS
        keystore:
          location: ${SSL_KEYSTORE_LOCATION}
          password: ${SSL_KEYSTORE_PASSWORD}
          type: JKS
kafka:
  nubo:
    bootstrap-servers: ${KAFKA_NUBO_BOOTSTRAP_SERVER}
    topic-name: ${KAFKA_NUBO_TOPIC_NAME}
    group-id: ${KAFKA_NUBO_GROUP_ID}
    retries: ${KAFKA_NUBO_RETRIES:5}
    auto-offset-reset: ${KAFKA_NUBO_AUTO_OFFSET_RESET:latest}
    security:
      protocol: ${KAFKA_PROPERTIES_SECURITY_PROTOCOL}
    sasl:
      mechanism: ${KAFKA_PROPERTIES_SASL_MECHANISM}
      jaas:
        config: ${KAFKA_PROPERTIES_SASL_JAAS_CONFIG}
logging:
  config: classpath:log/log4j2-prod.properties

```

## src/main/resources/application-qa.yml

```yaml
spring:
  kafka.nuam:
    bootstrap-servers: ${KAFKA_REGIONAL_BOOTSTRAP_SERVER}
    security:
      protocol: SSL
    producer:
      bootstrap-servers: ${KAFKA_REGIONAL_BOOTSTRAP_SERVER}
      topic-name: ${KAFKA_REGIONAL_TOPIC_NAME}
    properties:
      schema.registry:
        url: ${KAFKA_REGIONAL_SCHEMA_REGISTRY_URL}
        ssl:
          truststore:
            location: ${SSL_TRUSTSTORE_LOCATION}
            password: ${SSL_TRUSTSTORE_PASSWORD}
            type: JKS
      ssl:
        truststore:
          location: ${SSL_TRUSTSTORE_LOCATION}
          password: ${SSL_TRUSTSTORE_PASSWORD}
          type: JKS
        keystore:
          location: ${SSL_KEYSTORE_LOCATION}
          password: ${SSL_KEYSTORE_PASSWORD}
          type: JKS
kafka:
  nubo:
    bootstrap-servers: ${KAFKA_NUBO_BOOTSTRAP_SERVER}
    topic-name: ${KAFKA_NUBO_TOPIC_NAME}
    group-id: ${KAFKA_NUBO_GROUP_ID}
    retries: ${KAFKA_NUBO_RETRIES:5}
    auto-offset-reset: ${KAFKA_NUBO_AUTO_OFFSET_RESET:latest}
    security:
      protocol: ${KAFKA_PROPERTIES_SECURITY_PROTOCOL}
    sasl:
      mechanism: ${KAFKA_PROPERTIES_SASL_MECHANISM}
      jaas:
        config: ${KAFKA_PROPERTIES_SASL_JAAS_CONFIG}
logging:
  config: classpath:log/log4j2.properties

```

## src/main/resources/application-uat.yml

```yaml
spring:
  kafka.nuam:
    bootstrap-servers: ${KAFKA_REGIONAL_BOOTSTRAP_SERVER}
    security:
      protocol: SSL
    producer:
      bootstrap-servers: ${KAFKA_REGIONAL_BOOTSTRAP_SERVER}
      topic-name: ${KAFKA_REGIONAL_TOPIC_NAME}
    properties:
      schema.registry:
        url: ${KAFKA_REGIONAL_SCHEMA_REGISTRY_URL}
        ssl:
          truststore:
            location: ${SSL_TRUSTSTORE_LOCATION}
            password: ${SSL_TRUSTSTORE_PASSWORD}
            type: JKS
      ssl:
        truststore:
          location: ${SSL_TRUSTSTORE_LOCATION}
          password: ${SSL_TRUSTSTORE_PASSWORD}
          type: JKS
        keystore:
          location: ${SSL_KEYSTORE_LOCATION}
          password: ${SSL_KEYSTORE_PASSWORD}
          type: JKS
kafka:
  nubo:
    bootstrap-servers: ${KAFKA_NUBO_BOOTSTRAP_SERVER}
    topic-name: ${KAFKA_NUBO_TOPIC_NAME}
    group-id: ${KAFKA_NUBO_GROUP_ID}
    retries: ${KAFKA_NUBO_RETRIES:5}
    auto-offset-reset: ${KAFKA_NUBO_AUTO_OFFSET_RESET:latest}
    security:
      protocol: ${KAFKA_PROPERTIES_SECURITY_PROTOCOL}
    sasl:
      mechanism: ${KAFKA_PROPERTIES_SASL_MECHANISM}
      jaas:
        config: ${KAFKA_PROPERTIES_SASL_JAAS_CONFIG}
logging:
  config: classpath:log/log4j2.properties

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
 ,---. ,--.,--.,------.       ,--. ,-----. ,-----. ,------. ,------. ,------. ,-----.,--------.,--. ,-----. ,--.  ,--. ,---. ,------.,--.  ,--.,------.  ,------.,------.
'   .-'|  ||  ||  .-.  \      |  |'  .--./'  .-.  '|  .--. '|  .--. '|  .---''  .--./'--.  .--'|  |'  .-.  '|  ,'.|  |'   .-'|  .---'|  ,'.|  ||  .-.  \ |  .---'|  .--. '
`.  `-.|  ||  ||  |  \  :,--. |  ||  |    |  | |  ||  '--'.'|  '--'.'|  `--, |  |       |  |   |  ||  | |  ||  |' '  |`.  `-.|  `--, |  |' '  ||  |  \  :|  `--, |  '--'.'
.-'    |  ||  ||  '--'  /|  '-'  /'  '--'\'  '-'  '|  |\  \ |  |\  \ |  `---.'  '--'\   |  |   |  |'  '-'  '|  | `   |.-'    |  `---.|  | `   ||  '--'  /|  `---.|  |\  \
`-----'`--'`--'`-------'  `-----'  `-----' `-----' `--' '--'`--' '--'`------' `-----'   `--'   `--' `-----' `--'  `--'`-----'`------'`--'  `--'`-------' `------'`--' '--'

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
