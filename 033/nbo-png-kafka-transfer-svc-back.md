# nbo-png-kafka-transfer-svc-back

Código fuente completo de producción y configuraciones. Captura local: 28/10/2026.

Incluye 17 archivos Java y 17 archivos de configuración, recursos y compilación.

Cada sección identifica la ruta original y contiene el archivo completo. Los Java conservan sus implementaciones, imports, anotaciones y comentarios. Se excluyen src/test, clases de prueba, resultados de compilación, librerías binarias y herramientas/perfiles de pruebas de rendimiento.

Credenciales literales ocultadas en configuraciones: 0. Las referencias a variables de entorno se conservan.

## Índice

1. `lombok.config`
2. `mvnw`
3. `mvnw.cmd`
4. `pom.xml`
5. `.mvn/wrapper/maven-wrapper.properties`
6. `src/main/resources/application-dev.yml`
7. `src/main/resources/application-local.yml`
8. `src/main/resources/application-prod.yml`
9. `src/main/resources/application-qa.yml`
10. `src/main/resources/application-uat.yml`
11. `src/main/resources/application.yml`
12. `src/main/resources/banner.txt`
13. `src/main/resources/log/JsonEventLayout_error.json`
14. `src/main/resources/log/JsonEventLayout_info.json`
15. `src/main/resources/log/JsonEventLayout_trace.json`
16. `src/main/resources/log/log4j2-prod.properties`
17. `src/main/resources/log/log4j2.properties`
18. `src/main/java/com/nubo/kafka/transfer/svc/KafkaTransferSvcApplication.java`
19. `src/main/java/com/nubo/kafka/transfer/svc/application/config/ApicurioRegistryCertImporter.java`
20. `src/main/java/com/nubo/kafka/transfer/svc/application/config/KafkaConsumerConfig.java`
21. `src/main/java/com/nubo/kafka/transfer/svc/application/config/KafkaProducerConfig.java`
22. `src/main/java/com/nubo/kafka/transfer/svc/application/context/GlobalContext.java`
23. `src/main/java/com/nubo/kafka/transfer/svc/application/properties/PropertiesConfig.java`
24. `src/main/java/com/nubo/kafka/transfer/svc/application/util/ApplicationUtils.java`
25. `src/main/java/com/nubo/kafka/transfer/svc/exception/ServiceException.java`
26. `src/main/java/com/nubo/kafka/transfer/svc/exception/error/ErrorCode.java`
27. `src/main/java/com/nubo/kafka/transfer/svc/exception/error/ErrorResponse.java`
28. `src/main/java/com/nubo/kafka/transfer/svc/exception/error/ErrorValidation.java`
29. `src/main/java/com/nubo/kafka/transfer/svc/exception/kafka/KafkaDeserializationErrorHandler.java`
30. `src/main/java/com/nubo/kafka/transfer/svc/exception/kafka/KafkaErrorBuild.java`
31. `src/main/java/com/nubo/kafka/transfer/svc/kafka/consumer/KafkaRegionalAdapter.java`
32. `src/main/java/com/nubo/kafka/transfer/svc/kafka/producer/KafkaNuboAdapter.java`
33. `src/main/java/com/nubo/kafka/transfer/svc/service/ProcessMessageService.java`
34. `src/main/java/com/nubo/kafka/transfer/svc/service/impl/ProcessMessageServiceImpl.java`

## lombok.config

```
lombok.copyableAnnotations += org.springframework.beans.factory.annotation.Qualifier

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
		<version>4.1.1</version>
		<relativePath/>
	</parent>
	<groupId>com.kafka.transfer.svc</groupId>
	<artifactId>kafka-transfer-svc</artifactId>
	<version>0.41.0-beta.4</version>
	<name>${project.artifactId}</name>
	<description>Kafka transfer svc</description>

	<properties>
		<java.version>21</java.version>
        <spring.port>8080</spring.port>
		<test.skip>false</test.skip>
		<jacoco.version>0.8.12</jacoco.version>
		<log4j2.version>2.25.5</log4j2.version>

		<!-- Security overrides for Spring Boot 4.1.1 -->
		<tomcat.version>11.0.25</tomcat.version>
		<jackson-2-bom.version>2.21.7</jackson-2-bom.version>
		<jackson-bom.version>3.1.7</jackson-bom.version>

		<!-- must match io.confluent:common-parent 7.9.0 protobuf.version to avoid VerifyError against GeneratedMessageV3 -->
		<protobuf.version>3.25.5</protobuf.version>
	</properties>

	<dependencyManagement>
		<dependencies>
			<dependency>
				<groupId>com.google.protobuf</groupId>
				<artifactId>protobuf-java</artifactId>
				<version>${protobuf.version}</version>
			</dependency>
			<dependency>
				<groupId>com.google.protobuf</groupId>
				<artifactId>protobuf-java-util</artifactId>
				<version>${protobuf.version}</version>
			</dependency>
			<dependency>
				<groupId>at.yawk.lz4</groupId>
				<artifactId>lz4-java</artifactId>
				<version>1.11.4</version>
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
			<artifactId>spring-boot-starter-test</artifactId>
			<scope>test</scope>
			<exclusions>
				<exclusion>
					<groupId>org.springframework.boot</groupId>
					<artifactId>spring-boot-starter-logging</artifactId>
				</exclusion>
			</exclusions>
		</dependency>
		<!-- Actuator -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-actuator</artifactId>
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
			<version>1.3.0</version>
		</dependency>
		<dependency>
			<groupId>org.projectlombok</groupId>
			<artifactId>lombok</artifactId>
			<optional>true</optional>
			<scope>provided</scope>
		</dependency>
        <!-- Kafka -->
        <dependency>
            <groupId>org.springframework.kafka</groupId>
            <artifactId>spring-kafka</artifactId>
        </dependency>
		<!-- lib BUS Kafka Nuamx -->
		<dependency>
			<groupId>com.nuamx</groupId>
			<artifactId>bus-lib</artifactId>
			<version>1.0.4</version>
			<exclusions>
				<exclusion>
					<groupId>org.springframework.boot</groupId>
					<artifactId>spring-boot-starter-logging</artifactId>
				</exclusion>
				<exclusion>
					<groupId>ch.qos.logback</groupId>
					<artifactId>logback-classic</artifactId>
				</exclusion>
			</exclusions>
		</dependency>
		<dependency>
			<groupId>com.nuamx</groupId>
			<artifactId>bus-messages</artifactId>
			<version>2.0.9</version>
		</dependency>
        <dependency>
			<groupId>io.confluent</groupId>
			<artifactId>kafka-schema-registry-client</artifactId>
			<version>7.9.0</version>
		</dependency>
        <!-- Kafka Avro -->
        <dependency>
            <groupId>io.confluent</groupId>
            <artifactId>kafka-avro-serializer</artifactId>
            <version>7.9.0</version>
        </dependency>
        <dependency>
			<groupId>org.apache.avro</groupId>
			<artifactId>avro</artifactId>
			<version>1.12.0</version>
		</dependency>
		<!-- vulnerability adjustment  -->
		<dependency>
			<groupId>com.squareup.wire</groupId>
			<artifactId>wire-runtime-jvm</artifactId>
			<version>6.4.0</version>
		</dependency>
		<dependency>
			<groupId>org.apache.commons</groupId>
			<artifactId>commons-lang3</artifactId>
			<version>3.19.0</version>
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
				<version>${jacoco.version}</version>
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
								<exclude>**/KafkaTransferSvcApplication.class</exclude>
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
			<id>nuam</id>
			<url>https://artifactory.nuamexchange.com/artifactory/nuam</url>
		</repository>
		<repository>
			<id>confluent</id>
			<url>https://packages.confluent.io/maven/</url>
		</repository>
	</repositories>

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
spring:
  kafka.nuam:
    bootstrap-servers: ${KAFKA_REGIONAL_BOOTSTRAP_SERVER}
    listener:
      mode: ${KAFKA_REGIONAL_LISTENER_MODE:PROTOBUF}
    security:
      protocol: SSL
    consumer:
      bootstrap-servers: ${KAFKA_REGIONAL_BOOTSTRAP_SERVER}
      topic-name: ${KAFKA_REGIONAL_TOPIC_NAME}
      retries: ${KAFKA_REGIONAL_RETRIES:5}
      group-id: ${KAFKA_REGIONAL_GROUP_ID}
      properties:
        auto.offset.reset: ${KAFKA_REGIONAL_AUTO_OFFSET_RESET:latest}
        use.latest.version: false
        auto.register.schemas: false
        derive.type: true
    properties:
      ssl:
        endpoint:
          identification:
            algorithm: https
        truststore:
          location: ${SSL_TRUSTSTORE_LOCATION}
          password: ${SSL_TRUSTSTORE_PASSWORD}
          type: JKS
        keystore:
          location: ${SSL_KEYSTORE_LOCATION}
          password: ${SSL_KEYSTORE_PASSWORD}
          type: JKS
      apicurio.registry:
        url: ${KAFKA_REGIONAL_APICURIO_REGISTRY_URL}
      schema.registry:
        url: ${KAFKA_REGIONAL_SCHEMA_REGISTRY_URL}
kafka:
  nubo:
    bootstrap-servers: ${KAFKA_NUBO_BOOTSTRAP_SERVER}
    topic-name: ${KAFKA_NUBO_TOPIC_NAME}
    security:
      protocol: ${KAFKA_PROPERTIES_SECURITY_PROTOCOL}
    sasl:
      mechanism: ${KAFKA_PROPERTIES_SASL_MECHANISM}
      jaas:
        config: ${KAFKA_PROPERTIES_SASL_JAAS_CONFIG}
logging:
  config: classpath:log/log4j2.properties
  level:
    com.nubo.kafka.transfer.svc: DEBUG
    com.nuamx.bus: INFO

```

## src/main/resources/application-local.yml

```yaml
spring:
  kafka.nuam:
    bootstrap-servers: ${KAFKA_REGIONAL_BOOTSTRAP_SERVER}
    listener:
      mode: ${KAFKA_REGIONAL_LISTENER_MODE:PROTOBUF}
    security:
      protocol: SSL
    consumer:
      bootstrap-servers: ${KAFKA_REGIONAL_BOOTSTRAP_SERVER}
      topic-name: ${KAFKA_REGIONAL_TOPIC_NAME}
      retries: ${KAFKA_REGIONAL_RETRIES:5}
      group-id: ${KAFKA_REGIONAL_GROUP_ID}
      properties:
        auto.offset.reset: ${KAFKA_REGIONAL_AUTO_OFFSET_RESET:latest}
    properties:
      ssl:
        endpoint:
          identification:
            algorithm: https
        truststore:
          location: ${SSL_TRUSTSTORE_LOCATION}
          password: ${SSL_TRUSTSTORE_PASSWORD}
          type: JKS
        keystore:
          location: ${SSL_KEYSTORE_LOCATION}
          password: ${SSL_KEYSTORE_PASSWORD}
          type: JKS
      apicurio.registry:
        url: ${KAFKA_REGIONAL_APICURIO_REGISTRY_URL}
      schema.registry:
        url: ${KAFKA_REGIONAL_SCHEMA_REGISTRY_URL}
kafka:
  nubo:
    bootstrap-servers: ${KAFKA_NUBO_BOOTSTRAP_SERVER}
    topic-name: ${KAFKA_NUBO_TOPIC_NAME}
    security:
      protocol: SASL_PLAINTEXT
    sasl:
      mechanism: SCRAM-SHA-256
      jaas:
        config: "org.apache.kafka.common.security.scram.ScramLoginModule required username=${KAFKA_NUBO_SASL_USER} password=${KAFKA_NUBO_SASL_PASSWORD};"
logging:
  config: classpath:log/log4j2.properties
  level:
    com.nubo.kafka.transfer.svc: DEBUG
    com.nuamx.bus: DEBUG

```

## src/main/resources/application-prod.yml

```yaml
spring:
  kafka.nuam:
    bootstrap-servers: ${KAFKA_REGIONAL_BOOTSTRAP_SERVER}
    listener:
      mode: ${KAFKA_REGIONAL_LISTENER_MODE:PROTOBUF}
    security:
      protocol: SSL
    consumer:
      bootstrap-servers: ${KAFKA_REGIONAL_BOOTSTRAP_SERVER}
      topic-name: ${KAFKA_REGIONAL_TOPIC_NAME}
      retries: ${KAFKA_REGIONAL_RETRIES:5}
      group-id: ${KAFKA_REGIONAL_GROUP_ID}
      properties:
        auto.offset.reset: ${KAFKA_REGIONAL_AUTO_OFFSET_RESET:latest}
        use.latest.version: false
        auto.register.schemas: false
        derive.type: true
    properties:
      ssl:
        endpoint:
          identification:
            algorithm: https
        truststore:
          location: ${SSL_TRUSTSTORE_LOCATION}
          password: ${SSL_TRUSTSTORE_PASSWORD}
          type: JKS
        keystore:
          location: ${SSL_KEYSTORE_LOCATION}
          password: ${SSL_KEYSTORE_PASSWORD}
          type: JKS
      apicurio.registry:
        url: ${KAFKA_REGIONAL_APICURIO_REGISTRY_URL}
      schema.registry:
        url: ${KAFKA_REGIONAL_SCHEMA_REGISTRY_URL}
kafka:
  nubo:
    bootstrap-servers: ${KAFKA_NUBO_BOOTSTRAP_SERVER}
    topic-name: ${KAFKA_NUBO_TOPIC_NAME}
    security:
      protocol: ${KAFKA_PROPERTIES_SECURITY_PROTOCOL}
    sasl:
      mechanism: ${KAFKA_PROPERTIES_SASL_MECHANISM}
      jaas:
        config: ${KAFKA_PROPERTIES_SASL_JAAS_CONFIG}
logging:
  config: classpath:log/log4j2-prod.properties
  level:
    com.nubo.kafka.transfer.svc: INFO
    com.nuamx.bus: INFO

```

## src/main/resources/application-qa.yml

```yaml
spring:
  kafka.nuam:
    bootstrap-servers: ${KAFKA_REGIONAL_BOOTSTRAP_SERVER}
    listener:
      mode: ${KAFKA_REGIONAL_LISTENER_MODE:PROTOBUF}
    security:
      protocol: SSL
    consumer:
      bootstrap-servers: ${KAFKA_REGIONAL_BOOTSTRAP_SERVER}
      topic-name: ${KAFKA_REGIONAL_TOPIC_NAME}
      retries: ${KAFKA_REGIONAL_RETRIES:5}
      group-id: ${KAFKA_REGIONAL_GROUP_ID}
      properties:
        auto.offset.reset: ${KAFKA_REGIONAL_AUTO_OFFSET_RESET:latest}
        value.subject.name.strategy: io.confluent.kafka.serializers.subject.TopicNameStrategy
        use.latest.version: false
        auto.register.schemas: false
        derive.type: true
    properties:
      ssl:
        endpoint:
          identification:
            algorithm: https
        truststore:
          location: ${SSL_TRUSTSTORE_LOCATION}
          password: ${SSL_TRUSTSTORE_PASSWORD}
          type: JKS
        keystore:
          location: ${SSL_KEYSTORE_LOCATION}
          password: ${SSL_KEYSTORE_PASSWORD}
          type: JKS
      apicurio.registry:
        url: ${KAFKA_REGIONAL_APICURIO_REGISTRY_URL}
      schema.registry:
        url: ${KAFKA_REGIONAL_SCHEMA_REGISTRY_URL}
kafka:
  nubo:
    bootstrap-servers: ${KAFKA_NUBO_BOOTSTRAP_SERVER}
    topic-name: ${KAFKA_NUBO_TOPIC_NAME}
    security:
      protocol: ${KAFKA_PROPERTIES_SECURITY_PROTOCOL}
    sasl:
      mechanism: ${KAFKA_PROPERTIES_SASL_MECHANISM}
      jaas:
        config: ${KAFKA_PROPERTIES_SASL_JAAS_CONFIG}
logging:
  config: classpath:log/log4j2.properties
  level:
    com.nubo.kafka.transfer.svc: INFO
    com.nuamx.bus: INFO

```

## src/main/resources/application-uat.yml

```yaml
spring:
  kafka.nuam:
    bootstrap-servers: ${KAFKA_REGIONAL_BOOTSTRAP_SERVER}
    listener:
      mode: ${KAFKA_REGIONAL_LISTENER_MODE:PROTOBUF}
    security:
      protocol: SSL
    consumer:
      bootstrap-servers: ${KAFKA_REGIONAL_BOOTSTRAP_SERVER}
      topic-name: ${KAFKA_REGIONAL_TOPIC_NAME}
      retries: ${KAFKA_REGIONAL_RETRIES:5}
      group-id: ${KAFKA_REGIONAL_GROUP_ID}
      properties:
        auto.offset.reset: ${KAFKA_REGIONAL_AUTO_OFFSET_RESET:latest}
        use.latest.version: false
        auto.register.schemas: false
        derive.type: true
    properties:
      ssl:
        endpoint:
          identification:
            algorithm: https
        truststore:
          location: ${SSL_TRUSTSTORE_LOCATION}
          password: ${SSL_TRUSTSTORE_PASSWORD}
          type: JKS
        keystore:
          location: ${SSL_KEYSTORE_LOCATION}
          password: ${SSL_KEYSTORE_PASSWORD}
          type: JKS
      apicurio.registry:
        url: ${KAFKA_REGIONAL_APICURIO_REGISTRY_URL}
      schema.registry:
        url: ${KAFKA_REGIONAL_SCHEMA_REGISTRY_URL}
kafka:
  nubo:
    bootstrap-servers: ${KAFKA_NUBO_BOOTSTRAP_SERVER}
    topic-name: ${KAFKA_NUBO_TOPIC_NAME}
    security:
      protocol: ${KAFKA_PROPERTIES_SECURITY_PROTOCOL}
    sasl:
      mechanism: ${KAFKA_PROPERTIES_SASL_MECHANISM}
      jaas:
        config: ${KAFKA_PROPERTIES_SASL_JAAS_CONFIG}
logging:
  config: classpath:log/log4j2.properties
  level:
    com.nubo.kafka.transfer.svc: INFO
    com.nuamx.bus: INFO

```

## src/main/resources/application.yml

```yaml
server:
  port: "@spring.port@"
spring:
  profiles:
    active: ${SPRING_PROFILES_ACTIVE}
  application:
    name: "@project.name@"
    type: service
  main:
    allow-bean-definition-overriding: true
application:
  version: "@project.version@"
  description: 'Documentation Endpoints'
  title: "@project.description@"
  group: ${spring.application.name}

```

## src/main/resources/banner.txt

```
,--. ,--.  ,---.  ,------.,--. ,--.  ,---. ,--------.,------.   ,---.  ,--.  ,--. ,---. ,------.,------.,------.  ,---.,--.   ,--.,-----.
|  .'   / /  O  \ |  .---'|  .'   / /  O  \'--.  .--'|  .--. ' /  O  \ |  ,'.|  |'   .-'|  .---'|  .---'|  .--. ''   .-'\  `.'  /'  .--./
|  .   ' |  .-.  ||  `--, |  .   ' |  .-.  |  |  |   |  '--'.'|  .-.  ||  |' '  |`.  `-.|  `--, |  `--, |  '--'.'`.  `-. \     / |  |
|  |\   \|  | |  ||  |`   |  |\   \|  | |  |  |  |   |  |\  \ |  | |  ||  | `   |.-'    |  |`   |  `---.|  |\  \ .-'    | \   /  '  '--'\
`--' '--'`--' `--'`--'    `--' '--'`--' `--'  `--'   `--' '--'`--' `--'`--'  `--'`-----'`--'    `------'`--' '--'`-----'   `-'    `-----'

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

## src/main/java/com/nubo/kafka/transfer/svc/KafkaTransferSvcApplication.java

```java
package com.nubo.kafka.transfer.svc;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"com.nubo.kafka.transfer.svc", "com.nuamx.bus.*"})
public class KafkaTransferSvcApplication {

	public static void main(String[] args) {
		SpringApplication.run(KafkaTransferSvcApplication.class, args);
	}

}

```

## src/main/java/com/nubo/kafka/transfer/svc/application/config/ApicurioRegistryCertImporter.java

```java
package com.nubo.kafka.transfer.svc.application.config;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.net.URI;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.security.KeyStore;
import java.security.cert.CertificateException;
import java.security.cert.X509Certificate;

import javax.net.ssl.SSLContext;
import javax.net.ssl.SSLSocket;
import javax.net.ssl.SSLSocketFactory;
import javax.net.ssl.TrustManager;
import javax.net.ssl.TrustManagerFactory;
import javax.net.ssl.X509TrustManager;

import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import com.nubo.kafka.transfer.svc.application.properties.PropertiesConfig;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
@Order(Ordered.HIGHEST_PRECEDENCE)
@RequiredArgsConstructor
public class ApicurioRegistryCertImporter implements ApplicationRunner {

    private final PropertiesConfig propertiesConfig;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        String registryUrl = propertiesConfig.getKafkaRegionalApicurioRegistryUrl();

        if (registryUrl == null || registryUrl.isBlank() || !registryUrl.startsWith("https")) {
            log.info("Apicurio Registry URL not configured or not HTTPS, skipping certificate import");
            return;
        }

        URI uri = URI.create(registryUrl);
        String host = uri.getHost();
        int port = uri.getPort() == -1 ? 443 : uri.getPort();

        String originalTruststorePath = propertiesConfig.getSslTruststoreLocation();
        String truststorePassword = propertiesConfig.getSslTruststorePassword();
        String truststoreType = propertiesConfig.getSslTruststoreType();

        // Always work on a writable temp copy to support read-only mounted filesystems
        Path tempTruststore = Paths.get(System.getProperty("java.io.tmpdir"), "truststore-extended.jks");
        Files.copy(Paths.get(originalTruststorePath), tempTruststore, StandardCopyOption.REPLACE_EXISTING);

        KeyStore truststore = KeyStore.getInstance(truststoreType);
        try (FileInputStream fis = new FileInputStream(tempTruststore.toFile())) {
            truststore.load(fis, truststorePassword.toCharArray());
        }

        X509Certificate[] chain = downloadCertificateChain(host, port);
        if (chain == null || chain.length == 0) {
            log.warn("No certificates received from Apicurio Registry at {}:{}", host, port);
            return;
        }

        boolean modified = false;
        for (int i = 0; i < chain.length; i++) {
            X509Certificate cert = chain[i];
            String alias = "apicurio-registry-" + i;
            if (truststore.containsAlias(alias)) {
                log.debug("Alias '{}' already present in truststore, skipping", alias);
                continue;
            }
            truststore.setCertificateEntry(alias, cert);
            log.info("Imported certificate [{}] subject='{}' into temp truststore",
                    alias, cert.getSubjectX500Principal().getName());
            modified = true;
        }

        if (modified) {
            try (FileOutputStream fos = new FileOutputStream(tempTruststore.toFile())) {
                truststore.store(fos, truststorePassword.toCharArray());
            }
            log.info("Temp truststore written to: {}", tempTruststore);
        } else {
            log.info("Truststore already contains all Apicurio Registry certificates, no changes made");
        }

        // Point PropertiesConfig to the writable temp copy so lazy Kafka beans pick it
        // up
        propertiesConfig.setSslTruststoreLocation(tempTruststore.toString());
        log.info("SSL truststore location updated to: {}", tempTruststore);

        // Update the JVM default SSLContext so the Apicurio HTTP client (which does
        // not use the JKS file properties) also trusts the registry certificates
        TrustManagerFactory tmf = TrustManagerFactory.getInstance(TrustManagerFactory.getDefaultAlgorithm());
        tmf.init(truststore);
        SSLContext jvmSslContext = SSLContext.getInstance("TLS");
        jvmSslContext.init(null, tmf.getTrustManagers(), null);
        SSLContext.setDefault(jvmSslContext);
        log.info("JVM default SSLContext updated with Apicurio Registry certificates");
    }

    /**
     * Opens a TLS connection to the target host and captures the server certificate
     * chain.
     * Uses a trust-all TrustManager intentionally — the purpose is to discover and
     * import
     * the certificate, not to validate it at this stage.
     */
    private X509Certificate[] downloadCertificateChain(String host, int port) throws Exception {
        CapturingTrustManager capturingTm = new CapturingTrustManager();

        SSLContext sslContext = SSLContext.getInstance("TLS");
        sslContext.init(null, new TrustManager[] { capturingTm }, null);

        SSLSocketFactory factory = sslContext.getSocketFactory();
        try (SSLSocket socket = (SSLSocket) factory.createSocket(host, port)) {
            socket.setSoTimeout(10_000);
            socket.startHandshake();
        } catch (Exception e) {
            log.debug("SSL handshake exception during cert download (expected if cert is untrusted): {}",
                    e.getMessage());
        }

        return capturingTm.getCertificates();
    }

    private static class CapturingTrustManager implements X509TrustManager {

        private X509Certificate[] certificates;

        @Override
        public void checkClientTrusted(X509Certificate[] chain, String authType) {
            // Not used
        }

        @Override
        public void checkServerTrusted(X509Certificate[] chain, String authType) throws CertificateException {
            this.certificates = chain;
        }

        @Override
        public X509Certificate[] getAcceptedIssuers() {
            return new X509Certificate[0];
        }

        public X509Certificate[] getCertificates() {
            return certificates;
        }
    }
}

```

## src/main/java/com/nubo/kafka/transfer/svc/application/config/KafkaConsumerConfig.java

```java
package com.nubo.kafka.transfer.svc.application.config;

import java.nio.ByteBuffer;
import java.util.HashMap;
import java.util.Map;

import org.apache.avro.generic.GenericRecord;
import org.apache.kafka.clients.consumer.ConsumerConfig;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.apache.kafka.common.header.Header;
import org.apache.kafka.common.serialization.StringDeserializer;
import org.springframework.beans.factory.SmartInitializingSingleton;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Lazy;
import org.springframework.kafka.config.ConcurrentKafkaListenerContainerFactory;
import org.springframework.kafka.core.ConsumerFactory;
import org.springframework.kafka.core.DefaultKafkaConsumerFactory;
import org.springframework.kafka.listener.ConsumerRecordRecoverer;
import org.springframework.kafka.listener.ListenerExecutionFailedException;
import org.springframework.kafka.support.KafkaHeaders;
import org.springframework.util.backoff.BackOff;
import org.springframework.util.backoff.FixedBackOff;

import com.nubo.kafka.transfer.svc.application.properties.PropertiesConfig;
import com.nubo.kafka.transfer.svc.exception.ServiceException;
import com.nubo.kafka.transfer.svc.exception.error.ErrorCode;
import com.nubo.kafka.transfer.svc.exception.kafka.KafkaDeserializationErrorHandler;
import com.nubo.kafka.transfer.svc.exception.kafka.KafkaErrorBuild;

import io.confluent.kafka.serializers.KafkaAvroDeserializer;
import lombok.RequiredArgsConstructor;

@Configuration
@RequiredArgsConstructor
public class KafkaConsumerConfig {

    private final PropertiesConfig propertiesConfig;

    /**
     * Attaches the {@link KafkaDeserializationErrorHandler} to the
     * {@code kafkaListenerContainerFactory} bean defined in {@code NuamKafkaConfig}
     * (bus-lib) after all singletons are instantiated but before the Kafka listener
     * containers start.
     * <p>
     * Using {@link SmartInitializingSingleton} avoids bean-definition-override race
     * conditions caused by auto-configuration ordering.
     * </p>
     */
    @Bean
    SmartInitializingSingleton configureKafkaListenerErrorHandler(
            @Qualifier("kafkaListenerContainerFactory") ConcurrentKafkaListenerContainerFactory<?, ?> factory,
            KafkaDeserializationErrorHandler errorHandler) {
        return () -> factory.setCommonErrorHandler(errorHandler);
    }

    @Bean
    KafkaDeserializationErrorHandler errorHandler(KafkaErrorBuild kafkaErrorBuilder) {
        BackOff fixedBackOff = new FixedBackOff(1000, propertiesConfig.getKafkaRegionalRetries());

        ConsumerRecordRecoverer recoverer = (record, ex) -> {
            Integer deliveryAttempt = getDeliveryAttempt(record);
            ErrorCode errorCode;
            if (ex instanceof ListenerExecutionFailedException e) {
                Throwable cause = e.getCause();
                if (cause instanceof ServiceException se) {
                    errorCode = se.getErrorCode();
                } else {
                    errorCode = ErrorCode.ERROR_KAFKA_CONSUMER_REGIONAL;
                }
            } else if (ex instanceof ServiceException se) {
                errorCode = se.getErrorCode();
            } else {
                errorCode = ErrorCode.ERROR_KAFKA_CONSUMER_REGIONAL;
            }
            kafkaErrorBuilder.buildError(ex, errorCode, record.offset(), record.topic(), deliveryAttempt);
        };

        KafkaDeserializationErrorHandler errorHandler = new KafkaDeserializationErrorHandler(kafkaErrorBuilder,
                recoverer, fixedBackOff);
        errorHandler.setCommitRecovered(true);
        return errorHandler;
    }

    private Integer getDeliveryAttempt(ConsumerRecord<?, ?> record) {
        Header header = record.headers().lastHeader(KafkaHeaders.DELIVERY_ATTEMPT);
        return header != null ? ByteBuffer.wrap(header.value()).getInt() : null;
    }

    @Lazy
    @Bean("kafkaAvroListenerContainerFactory")
    ConcurrentKafkaListenerContainerFactory<String, GenericRecord> kafkaAvroListenerContainerFactory(
            KafkaDeserializationErrorHandler errorHandler) {
        ConcurrentKafkaListenerContainerFactory<String, GenericRecord> factory = new ConcurrentKafkaListenerContainerFactory<>();
        factory.setConsumerFactory(this.consumerFactoryAvro());
        factory.setCommonErrorHandler(errorHandler);
        return factory;
    }

    private ConsumerFactory<String, GenericRecord> consumerFactoryAvro() {
        Map<String, Object> configProps = new HashMap<>();
        configProps.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, propertiesConfig.getKafkaRegionalBootstrapServers());
        configProps.put(ConsumerConfig.GROUP_ID_CONFIG, propertiesConfig.getKafkaRegionalGroupId());
        configProps.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);
        configProps.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, KafkaAvroDeserializer.class);
        configProps.put("security.protocol", propertiesConfig.getKafkaRegionalSecurityProtocol());

        configProps.put("ssl.keystore.location", propertiesConfig.getSslKeystoreLocation());
        configProps.put("ssl.keystore.password", propertiesConfig.getSslKeystorePassword());
        configProps.put("ssl.keystore.type", propertiesConfig.getSslKeystoreType());
        configProps.put("ssl.truststore.location", propertiesConfig.getSslTruststoreLocation());
        configProps.put("ssl.truststore.password", propertiesConfig.getSslTruststorePassword());
        configProps.put("ssl.truststore.type", propertiesConfig.getSslTruststoreType());

        configProps.put("schema.registry.url", propertiesConfig.getKafkaRegionalSchemaRegistryUrl());
        configProps.put("schema.registry.ssl.truststore.location", propertiesConfig.getSslTruststoreLocation());
        configProps.put("schema.registry.ssl.truststore.password", propertiesConfig.getSslTruststorePassword());
        configProps.put("schema.registry.ssl.truststore.type", propertiesConfig.getSslTruststoreType());

        return new DefaultKafkaConsumerFactory<>(configProps);
    }

}

```

## src/main/java/com/nubo/kafka/transfer/svc/application/config/KafkaProducerConfig.java

```java
package com.nubo.kafka.transfer.svc.application.config;

import com.nubo.kafka.transfer.svc.application.properties.PropertiesConfig;
import lombok.RequiredArgsConstructor;
import org.apache.kafka.clients.producer.ProducerConfig;
import org.apache.kafka.common.serialization.StringSerializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.core.DefaultKafkaProducerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.core.ProducerFactory;

import java.util.HashMap;
import java.util.Map;

@Configuration
@RequiredArgsConstructor
public class KafkaProducerConfig {

    private final PropertiesConfig propertiesConfig;

    @Bean("producerFactoryKafkaNubo")
    ProducerFactory<String, String> producerFactoryKafkaNubo() {
        Map<String, Object> configProps = new HashMap<>();
        configProps.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, propertiesConfig.getKafkaNuboBootstrapServers());
        configProps.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class);
        configProps.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, StringSerializer.class);
        configProps.put("security.protocol", propertiesConfig.getKafkaNuboSecurityProtocol());

        configProps.put("sasl.mechanism", propertiesConfig.getKafkaNuboSaslMechanism());
        configProps.put("sasl.jaas.config",propertiesConfig.getKafkaNuboSaslJaasConfig());

        return new DefaultKafkaProducerFactory<>(configProps);
    }

    @Bean("kafkaNuboTemplate")
    KafkaTemplate<String, String> kafkaNuboTemplate() {
        return new KafkaTemplate<>(this.producerFactoryKafkaNubo());
    }
}

```

## src/main/java/com/nubo/kafka/transfer/svc/application/context/GlobalContext.java

```java
package com.nubo.kafka.transfer.svc.application.context;

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

## src/main/java/com/nubo/kafka/transfer/svc/application/properties/PropertiesConfig.java

```java
package com.nubo.kafka.transfer.svc.application.properties;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import lombok.Getter;
import lombok.Setter;

@Component
@Getter
public class PropertiesConfig {

    @Value("${spring.application.name}")
    private String apiName;

    @Value("${spring.kafka.nuam.bootstrap-servers}")
    private String kafkaRegionalBootstrapServers;

    @Value("${spring.kafka.nuam.consumer.topic-name}")
    private String kafkaRegionalTopicName;

    @Value("${spring.kafka.nuam.consumer.group-id}")
    private String kafkaRegionalGroupId;

    @Value("${spring.kafka.nuam.consumer.retries}")
    private Integer KafkaRegionalRetries;

    @Value("${spring.kafka.nuam.security.protocol}")
    private String kafkaRegionalSecurityProtocol;

    @Value("${spring.kafka.nuam.properties.schema.registry.url}")
    private String kafkaRegionalSchemaRegistryUrl;

    @Value("${spring.kafka.nuam.properties.apicurio.registry.url:}")
    private String kafkaRegionalApicurioRegistryUrl;

    @Value("${spring.kafka.nuam.properties.ssl.keystore.location}")
    private String sslKeystoreLocation;

    @Value("${spring.kafka.nuam.properties.ssl.keystore.password}")
    private String sslKeystorePassword;

    @Value("${spring.kafka.nuam.properties.ssl.keystore.type}")
    private String sslKeystoreType;

    @Value("${spring.kafka.nuam.properties.ssl.truststore.location}")
    @Setter
    private String sslTruststoreLocation;

    @Value("${spring.kafka.nuam.properties.ssl.truststore.password}")
    private String sslTruststorePassword;

    @Value("${spring.kafka.nuam.properties.ssl.truststore.type}")
    private String sslTruststoreType;

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

    @Value("${spring.kafka.nuam.listener.mode:PROTOBUF}")
    private String listenerMode;

    public boolean isProtobufListenerEnabled() {
        return !"AVRO".equalsIgnoreCase(listenerMode);
    }

    public boolean isAvroListenerEnabled() {
        return "AVRO".equalsIgnoreCase(listenerMode);
    }

}

```

## src/main/java/com/nubo/kafka/transfer/svc/application/util/ApplicationUtils.java

```java
package com.nubo.kafka.transfer.svc.application.util;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.protobuf.Message;
import com.google.protobuf.util.JsonFormat;
import com.nubo.kafka.transfer.svc.exception.ServiceException;
import com.nubo.kafka.transfer.svc.exception.error.ErrorCode;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import org.apache.avro.generic.GenericRecord;

public class ApplicationUtils {

    static final String FORMAT_DATETIME = "yyyy-MM-dd'T'HH:mm:ss";

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

    public static String convertObjectToJson(Object object) {
        try {
            ObjectMapper mapper = new ObjectMapper();
            return mapper.writeValueAsString(object);
        } catch (JsonProcessingException e) {
            throw new ServiceException(ErrorCode.ERROR_CONVERT_JSON, e);
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

    public static String convertProtobufToJson(Message message) {
        try {
            return JsonFormat.printer().includingDefaultValueFields().print(message);
        } catch (Exception e) {
            throw new ServiceException(ErrorCode.ERROR_CONVERT_PROTOBUF_JSON, e);
        }
    }

    public static String convertAvroToJson(GenericRecord avroMessage) {
        try {
            return avroMessage.toString();
        } catch (Exception e) {
            throw new ServiceException(ErrorCode.ERROR_CONVERT_AVRO_JSON, e);
        }
    }

}

```

## src/main/java/com/nubo/kafka/transfer/svc/exception/ServiceException.java

```java
package com.nubo.kafka.transfer.svc.exception;

import com.nubo.kafka.transfer.svc.exception.error.ErrorCode;
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

## src/main/java/com/nubo/kafka/transfer/svc/exception/error/ErrorCode.java

```java
package com.nubo.kafka.transfer.svc.exception.error;

import lombok.Getter;

@Getter
public enum ErrorCode {

    UNEXPECTED("An unexpected error occurred"),
    ERROR_KAFKA_CONSUMER_REGIONAL("Error Consumer Kafka Regional"),
    ERROR_KAFKA_PRODUCER_NUBO("Error Producer Kafka Nubo"),
    ERROR_CONVERT_JSON("Error convert Object To Json"),
    ERROR_DESERIALIZER_MESSAGE("Error Deserializer Message Kafka"),
    ERROR_CONVERT_AVRO_JSON("Error convert Avro To Json"),
    ERROR_CONVERT_PROTOBUF_JSON("Error convert Protobuf To Json");

    private final String message;

    ErrorCode(String message) {
        this.message = message;
    }

    public String getName() {
        return this.name();
    }

}

```

## src/main/java/com/nubo/kafka/transfer/svc/exception/error/ErrorResponse.java

```java
package com.nubo.kafka.transfer.svc.exception.error;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.nubo.kafka.transfer.svc.application.util.ApplicationUtils;

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

## src/main/java/com/nubo/kafka/transfer/svc/exception/error/ErrorValidation.java

```java
package com.nubo.kafka.transfer.svc.exception.error;

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

## src/main/java/com/nubo/kafka/transfer/svc/exception/kafka/KafkaDeserializationErrorHandler.java

```java
package com.nubo.kafka.transfer.svc.exception.kafka;

import org.apache.kafka.clients.consumer.Consumer;
import org.apache.kafka.common.errors.RecordDeserializationException;
import org.springframework.kafka.listener.ConsumerRecordRecoverer;
import org.springframework.kafka.listener.DefaultErrorHandler;
import org.springframework.kafka.listener.MessageListenerContainer;
import org.springframework.util.backoff.BackOff;

import com.nubo.kafka.transfer.svc.exception.error.ErrorCode;

import lombok.extern.slf4j.Slf4j;

/**
 * Extends {@link DefaultErrorHandler} to handle
 * {@link RecordDeserializationException}
 * (wrapping Confluent's {@code SerializationException}) at poll time, which the
 * base class
 * rejects with an {@link IllegalStateException}.
 * <p>
 * When a poison-pill message cannot be deserialized, this handler seeks the
 * consumer
 * past the bad offset so that consumption continues uninterrupted.
 * </p>
 */
@Slf4j
public class KafkaDeserializationErrorHandler extends DefaultErrorHandler {

    private final KafkaErrorBuild kafkaErrorBuilder;

    public KafkaDeserializationErrorHandler(KafkaErrorBuild kafkaErrorBuilder,
            ConsumerRecordRecoverer recoverer, BackOff backOff) {
        super(recoverer, backOff);
        this.kafkaErrorBuilder = kafkaErrorBuilder;
    }

    /**
     * Intercepts {@link RecordDeserializationException} before the base class
     * rejects it.
     * Seeks the consumer to {@code offset + 1} to skip the unreadable record and
     * reports
     * the error. All other exceptions are delegated to the base implementation.
     */
    @Override
    public void handleOtherException(Exception thrownException, Consumer<?, ?> consumer,
            MessageListenerContainer container, boolean batchListener) {
        if (thrownException instanceof RecordDeserializationException rde) {
            log.error("Deserialization error on topic [{}] partition [{}] offset [{}] — skipping record",
                    rde.topicPartition().topic(), rde.topicPartition().partition(), rde.offset());
            kafkaErrorBuilder.buildError(rde, ErrorCode.ERROR_KAFKA_CONSUMER_REGIONAL,
                    rde.offset(), rde.topicPartition().topic(), null);
            consumer.seek(rde.topicPartition(), rde.offset() + 1);
            return;
        }
        super.handleOtherException(thrownException, consumer, container, batchListener);
    }
}

```

## src/main/java/com/nubo/kafka/transfer/svc/exception/kafka/KafkaErrorBuild.java

```java
package com.nubo.kafka.transfer.svc.exception.kafka;

import com.nubo.kafka.transfer.svc.application.properties.PropertiesConfig;
import com.nubo.kafka.transfer.svc.application.util.ApplicationUtils;
import com.nubo.kafka.transfer.svc.exception.error.ErrorCode;
import com.nubo.kafka.transfer.svc.exception.error.ErrorResponse;
import com.nubo.kafka.transfer.svc.exception.error.ErrorValidation;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

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
        StringBuilder description = new StringBuilder(errorCode.getMessage());
        if (offset != null) description.append(" - Offset: ").append(offset);
        if (topic != null)  description.append(" - Topic: ").append(topic);
        if (retry != null)  description.append(" - Retries: ").append(retry);

        ErrorResponse errorResponse = ErrorResponse.builder()
                .httpCode(500)
                .url(propertiesConfig.getKafkaNuboBootstrapServers())
                .errorCode(errorCode.getName())
                .errorMessage(description.toString())
                .errorMessageDetail(exception.getMessage())
                .timestamp(ApplicationUtils.getLocalDateTimeNow())
                .build();

        List<ErrorValidation> errorValidationList = getErrorValidations(exception);
        if(!errorValidationList.isEmpty()) {
            errorResponse.setErrorDetails(errorValidationList);
        }

        log.error("Error -> {}", errorResponse);
    }

    private List<ErrorValidation> getErrorValidations(Throwable throwable) {
        List<ErrorValidation> errorDetails = new ArrayList<>();
        Throwable cause = throwable.getCause();
        while (cause != null) {
            String msg = cause.getMessage();
            if (msg != null && !msg.isBlank()) {
                errorDetails.add(ErrorValidation.builder()
                        .description(msg)
                        .build());
            }
            cause = cause.getCause();
        }
        return errorDetails;
    }

}

```

## src/main/java/com/nubo/kafka/transfer/svc/kafka/consumer/KafkaRegionalAdapter.java

```java
package com.nubo.kafka.transfer.svc.kafka.consumer;

import org.apache.avro.generic.GenericRecord;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.support.KafkaHeaders;
import org.springframework.messaging.handler.annotation.Header;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Component;

import com.google.protobuf.Message;
import com.nubo.kafka.transfer.svc.service.ProcessMessageService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Component
@RequiredArgsConstructor
@Slf4j
public class KafkaRegionalAdapter {

    private final ProcessMessageService processMessageService;

    @KafkaListener(
            id = "kafka-regional-listener-protobuf",
            topics = "#{propertiesConfig.kafkaRegionalTopicName}",
            groupId = "#{propertiesConfig.kafkaRegionalGroupId}",
            containerFactory = "kafkaListenerContainerFactory",
            autoStartup = "#{propertiesConfig.isProtobufListenerEnabled()}")
    public void listenKafkaProtobuf(@Payload ConsumerRecord<String, Message> consumerRecord,
            @Header(KafkaHeaders.RECEIVED_PARTITION) int partition,
            @Header(KafkaHeaders.OFFSET) long offset,
            @Header(KafkaHeaders.RECEIVED_TOPIC) String topic) {
        String key = consumerRecord.key();
        Message messageProtobuf = consumerRecord.value();
        log.info("New received Message Protobuf -- Topic: {} -- Partition : {} -- Offset : {} -- record-class: {}",
                topic, partition, offset, messageProtobuf.getClass());

        processMessageService.sendMessageProtobufToKafkaNubo(key, messageProtobuf);
    }

    @KafkaListener(
            id = "kafka-regional-listener-avro",
            topics = "#{propertiesConfig.kafkaRegionalTopicName}",
            groupId = "#{propertiesConfig.kafkaRegionalGroupId}",
            containerFactory = "kafkaAvroListenerContainerFactory",
            autoStartup = "#{propertiesConfig.isAvroListenerEnabled()}")
    public void listenKafkaAvro(@Payload ConsumerRecord<String, GenericRecord> consumerRecord,
            @Header(KafkaHeaders.RECEIVED_PARTITION) int partition,
            @Header(KafkaHeaders.OFFSET) long offset,
            @Header(KafkaHeaders.RECEIVED_TOPIC) String topic) {
        log.info("New received Message Avro -- Topic: {} -- Partition : {} -- Offset : {}",
                topic, partition, offset);
        String key = consumerRecord.key();
        GenericRecord messageAvro = consumerRecord.value();
        processMessageService.sendMessageAvroToKafkaNubo(key, messageAvro);
    }


}

```

## src/main/java/com/nubo/kafka/transfer/svc/kafka/producer/KafkaNuboAdapter.java

```java
package com.nubo.kafka.transfer.svc.kafka.producer;

import java.util.concurrent.CompletableFuture;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.SendResult;
import org.springframework.stereotype.Component;

import com.nubo.kafka.transfer.svc.application.properties.PropertiesConfig;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Component
@RequiredArgsConstructor
@Slf4j
public class KafkaNuboAdapter {

    @Qualifier("kafkaNuboTemplate")
    private final KafkaTemplate<String, String> kafkaNuboTemplate;
    private final PropertiesConfig propertiesConfig;

    public CompletableFuture<SendResult<String, String>> sendMessageAsync(String key, String message) {
        String topic = propertiesConfig.getKafkaNuboTopicName();
        CompletableFuture<SendResult<String, String>> future = kafkaNuboTemplate.send(topic, key, message)
                .toCompletableFuture();

        return future.thenApply(result -> {
            log.info("Send message -- Topic: {} -- Key: {} -- Partition: {} -- Offset: {}",
                    topic, key, result.getRecordMetadata().partition(), result.getRecordMetadata().offset());
            log.debug("Json: {}", message);
            return result;
        }).exceptionally(ex -> {
            log.error("Error sending message to topic: {}, Key: {}, Exception: {}", topic, key, ex);
            throw new RuntimeException("Failed to send message to topic: " + topic, ex);
        });
    }
}

```

## src/main/java/com/nubo/kafka/transfer/svc/service/ProcessMessageService.java

```java
package com.nubo.kafka.transfer.svc.service;

import org.apache.avro.generic.GenericRecord;

import com.google.protobuf.Message;

public interface ProcessMessageService {

    void sendMessageProtobufToKafkaNubo(String key, Message message);

    void sendMessageAvroToKafkaNubo(String key, GenericRecord messageAvro);

}

```

## src/main/java/com/nubo/kafka/transfer/svc/service/impl/ProcessMessageServiceImpl.java

```java
package com.nubo.kafka.transfer.svc.service.impl;

import org.apache.avro.generic.GenericRecord;
import org.springframework.stereotype.Service;

import com.google.protobuf.Message;
import com.nubo.kafka.transfer.svc.application.util.ApplicationUtils;
import com.nubo.kafka.transfer.svc.kafka.producer.KafkaNuboAdapter;
import com.nubo.kafka.transfer.svc.service.ProcessMessageService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class ProcessMessageServiceImpl implements ProcessMessageService {

    private final KafkaNuboAdapter kafkaNuboAdapter;

    @Override
    public void sendMessageProtobufToKafkaNubo(String key, Message message) {
        log.debug("Start method sendMessageProtobufToKafkaNubo, object -> {}", message);

        String json = ApplicationUtils.convertProtobufToJson(message);

        // Sync send message to Kafka Nubo
        kafkaNuboAdapter.sendMessageAsync(key, json).join();

        log.debug("End method sendMessageProtobufToKafkaNubo");
    }

    @Override
    public void sendMessageAvroToKafkaNubo(String key, GenericRecord messageAvro) {
        log.debug("Start method sendMessageAvroToKafkaNubo, object -> {}", messageAvro);

        String json = ApplicationUtils.convertAvroToJson(messageAvro);

        // Sync send message to Kafka Nubo
        kafkaNuboAdapter.sendMessageAsync(key, json).join();

        log.debug("End method sendMessageAvroToKafkaNubo");
    }

}

```
