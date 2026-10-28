# nbo-png-reportes-corregidas-borde-back

Código Java de producción y configuraciones, sin tests. Cada sección contiene el archivo original completo y su ruta. Captura: 28/10/2026.

## Índice

1. `.mvn/wrapper/maven-wrapper.properties`
2. `mvnw`
3. `mvnw.cmd`
4. `pom.xml`
5. `src/main/java/com/nubo/corrected/reports/borde/CorrectedReportsBordeApplication.java`
6. `src/main/java/com/nubo/corrected/reports/borde/application/annotations/CsvBigDecimal.java`
7. `src/main/java/com/nubo/corrected/reports/borde/application/annotations/CsvColumn.java`
8. `src/main/java/com/nubo/corrected/reports/borde/application/annotations/ValidBigDecimal.java`
9. `src/main/java/com/nubo/corrected/reports/borde/application/config/FieldOrderMappingStrategy.java`
10. `src/main/java/com/nubo/corrected/reports/borde/application/config/KafkaConsumerConfig.java`
11. `src/main/java/com/nubo/corrected/reports/borde/application/config/KafkaProducerConfig.java`
12. `src/main/java/com/nubo/corrected/reports/borde/application/config/ValidBigDecimalConfig.java`
13. `src/main/java/com/nubo/corrected/reports/borde/application/config/WebConfig.java`
14. `src/main/java/com/nubo/corrected/reports/borde/application/context/GlobalContext.java`
15. `src/main/java/com/nubo/corrected/reports/borde/application/database/NamingStrategyConfig.java`
16. `src/main/java/com/nubo/corrected/reports/borde/application/database/UpperNamingConfig.java`
17. `src/main/java/com/nubo/corrected/reports/borde/application/properties/PropertiesConfig.java`
18. `src/main/java/com/nubo/corrected/reports/borde/application/properties/PropertiesContext.java`
19. `src/main/java/com/nubo/corrected/reports/borde/application/serializers/AnnotatedBigDecimalCsvSerializer.java`
20. `src/main/java/com/nubo/corrected/reports/borde/application/serializers/BooleanCsvSerializer.java`
21. `src/main/java/com/nubo/corrected/reports/borde/application/util/ApplicationUtils.java`
22. `src/main/java/com/nubo/corrected/reports/borde/client/ftp/FtpAdapter.java`
23. `src/main/java/com/nubo/corrected/reports/borde/exception/ServiceException.java`
24. `src/main/java/com/nubo/corrected/reports/borde/exception/error/ErrorCode.java`
25. `src/main/java/com/nubo/corrected/reports/borde/exception/error/ErrorResponse.java`
26. `src/main/java/com/nubo/corrected/reports/borde/exception/error/ErrorValidation.java`
27. `src/main/java/com/nubo/corrected/reports/borde/exception/handler/GlobalExceptionHandler.java`
28. `src/main/java/com/nubo/corrected/reports/borde/exception/kafka/KafkaErrorBuild.java`
29. `src/main/java/com/nubo/corrected/reports/borde/helpers/GenerateCsvUtil.java`
30. `src/main/java/com/nubo/corrected/reports/borde/helpers/MapperUtil.java`
31. `src/main/java/com/nubo/corrected/reports/borde/kafka/consumer/KafkaNuboListenerAdapter.java`
32. `src/main/java/com/nubo/corrected/reports/borde/kafka/producer/KafkaNuboAdapter.java`
33. `src/main/java/com/nubo/corrected/reports/borde/models/domain/CorrectedReports.java`
34. `src/main/java/com/nubo/corrected/reports/borde/models/dto/request/InvestorInDto.java`
35. `src/main/java/com/nubo/corrected/reports/borde/models/dto/request/ParticipantInDto.java`
36. `src/main/java/com/nubo/corrected/reports/borde/models/dto/request/ReportFileFractionInDto.java`
37. `src/main/java/com/nubo/corrected/reports/borde/models/dto/request/ReportFileInDto.java`
38. `src/main/java/com/nubo/corrected/reports/borde/models/dto/request/ReportFileOperationInDto.java`
39. `src/main/java/com/nubo/corrected/reports/borde/models/dto/request/SecurityTitleInDto.java`
40. `src/main/java/com/nubo/corrected/reports/borde/models/dto/response/MetaDataOutDto.java`
41. `src/main/java/com/nubo/corrected/reports/borde/models/dto/response/NotificationOutDto.java`
42. `src/main/java/com/nubo/corrected/reports/borde/models/entity/FileGenerateEntity.java`
43. `src/main/java/com/nubo/corrected/reports/borde/models/entity/StatusEntity.java`
44. `src/main/java/com/nubo/corrected/reports/borde/models/entity/TypeEntity.java`
45. `src/main/java/com/nubo/corrected/reports/borde/models/entity/UserNuboEntity.java`
46. `src/main/java/com/nubo/corrected/reports/borde/models/enums/FileNameEnum.java`
47. `src/main/java/com/nubo/corrected/reports/borde/models/enums/FtpEnum.java`
48. `src/main/java/com/nubo/corrected/reports/borde/models/enums/NotificationEnum.java`
49. `src/main/java/com/nubo/corrected/reports/borde/models/enums/NotificationTypeEnum.java`
50. `src/main/java/com/nubo/corrected/reports/borde/models/enums/PropertiesEnum.java`
51. `src/main/java/com/nubo/corrected/reports/borde/models/enums/StatusFileEnum.java`
52. `src/main/java/com/nubo/corrected/reports/borde/models/enums/TypeFileEnum.java`
53. `src/main/java/com/nubo/corrected/reports/borde/models/enums/UserTypeEnum.java`
54. `src/main/java/com/nubo/corrected/reports/borde/models/enums/VersionApiEnum.java`
55. `src/main/java/com/nubo/corrected/reports/borde/repository/FileGenerateRepository.java`
56. `src/main/java/com/nubo/corrected/reports/borde/repository/StatusRepository.java`
57. `src/main/java/com/nubo/corrected/reports/borde/repository/UserNuboRepository.java`
58. `src/main/java/com/nubo/corrected/reports/borde/service/ProcessMessageService.java`
59. `src/main/java/com/nubo/corrected/reports/borde/service/impl/ProcessMessageServiceImpl.java`
60. `src/main/resources/application-dev.yml`
61. `src/main/resources/application-local.yml`
62. `src/main/resources/application-prod.yml`
63. `src/main/resources/application-qa.yml`
64. `src/main/resources/application-uat.yml`
65. `src/main/resources/application.yml`
66. `src/main/resources/banner.txt`
67. `src/main/resources/log/JsonEventLayout_error.json`
68. `src/main/resources/log/JsonEventLayout_info.json`
69. `src/main/resources/log/JsonEventLayout_trace.json`
70. `src/main/resources/log/log4j2-prod.properties`
71. `src/main/resources/log/log4j2.properties`

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
		<version>3.5.8</version>
		<relativePath/> <!-- lookup parent from repository -->
	</parent>
	<groupId>com.nubo.corrected.reports.borde</groupId>
	<artifactId>corrected-reports-borde</artifactId>
<<<<<<< HEAD
	<version>0.3.16</version>
=======
	<version>0.3.19</version>
>>>>>>> c4361c935c4b268e8cbb3cc14c9595d3f43c0fba
	<name>${project.artifactId}</name>
	<description>Corrected Reports Borde</description>

	<properties>
		<java.version>17</java.version>
		<spring.port>8080</spring.port>
		<test.skip>false</test.skip>
		<datasource.url.application.name>ApplicationName=${project.artifactId}</datasource.url.application.name>
		<hikari.pool.name>${project.artifactId}-pool</hikari.pool.name>
		<camel.version>4.11.0</camel.version>
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
				<exclusion>
					<groupId>org.apache.commons</groupId>
					<artifactId>commons-io</artifactId>
				</exclusion>
			</exclusions>
		</dependency>
        <!-- CSV Generation with OpenCSV -->
		<dependency>
			<groupId>com.opencsv</groupId>
			<artifactId>opencsv</artifactId>
			<version>5.12.0</version>
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
								<exclude>**/CorrectedReportsBordeApplication.class</exclude>
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

## src/main/java/com/nubo/corrected/reports/borde/CorrectedReportsBordeApplication.java

```java
package com.nubo.corrected.reports.borde;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CorrectedReportsBordeApplication {

	public static void main(String[] args) {
		SpringApplication.run(CorrectedReportsBordeApplication.class, args);
	}

}

```

## src/main/java/com/nubo/corrected/reports/borde/application/annotations/CsvBigDecimal.java

```java
package com.nubo.corrected.reports.borde.application.annotations;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * Annotation to configure BigDecimal formatting in CSV output
 */
@Target({ ElementType.FIELD })
@Retention(RetentionPolicy.RUNTIME)
public @interface CsvBigDecimal {

    /**
     * Number of decimal places to show
     * 
     * @return decimal places (0-10)
     */
    int scale() default 2;

    /**
     * Whether to use thousands separator (comma)
     * 
     * @return true to use grouping separator
     */
    boolean useGrouping() default false;

    /**
     * Value to show for null BigDecimal values
     * 
     * @return null representation (if empty, will use "0" + decimals)
     */
    String nullValue() default "";
}

```

## src/main/java/com/nubo/corrected/reports/borde/application/annotations/CsvColumn.java

```java
package com.nubo.corrected.reports.borde.application.annotations;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * Custom annotation to define both position and column name for CSV generation.
 * Works in conjunction with @CsvBindByPosition to provide descriptive headers.
 */
@Target({ ElementType.FIELD })
@Retention(RetentionPolicy.RUNTIME)
public @interface CsvColumn {

    /**
     * The name of the column header in the CSV file
     *
     * @return column name
     */
    String value();
}

```

## src/main/java/com/nubo/corrected/reports/borde/application/annotations/ValidBigDecimal.java

```java
package com.nubo.corrected.reports.borde.application.annotations;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import com.nubo.corrected.reports.borde.application.config.ValidBigDecimalConfig;

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

## src/main/java/com/nubo/corrected/reports/borde/application/config/FieldOrderMappingStrategy.java

```java
package com.nubo.corrected.reports.borde.application.config;

import java.lang.reflect.Field;
import java.util.Arrays;
import java.util.Comparator;

import com.nubo.corrected.reports.borde.application.annotations.CsvColumn;
import com.opencsv.bean.ColumnPositionMappingStrategy;
import com.opencsv.bean.CsvBindByPosition;
import com.opencsv.bean.CsvCustomBindByPosition;
import com.opencsv.exceptions.CsvRequiredFieldEmptyException;

/**
 * Custom mapping strategy that uses @CsvBindByPosition for field ordering
 * and @CsvColumn for column header names.
 *
 * @param <T> The type of bean to be mapped
 */
public class FieldOrderMappingStrategy<T> extends ColumnPositionMappingStrategy<T> {

    private String[] columnNames;

    public FieldOrderMappingStrategy(Class<? extends T> clazz) {
        setType(clazz);
        buildColumnMapping(clazz);
    }

    private void buildColumnMapping(Class<? extends T> clazz) {
        Field[] fields = clazz.getDeclaredFields();

        // Build column names array
        columnNames = Arrays.stream(fields)
                .filter(field -> field.isAnnotationPresent(CsvBindByPosition.class)
                        || field.isAnnotationPresent(CsvCustomBindByPosition.class))
                .sorted(Comparator.comparingInt(field -> {
                    CsvBindByPosition bindPos = field.getAnnotation(CsvBindByPosition.class);
                    if (bindPos != null)
                        return bindPos.position();
                    CsvCustomBindByPosition customBindPos = field.getAnnotation(CsvCustomBindByPosition.class);
                    return customBindPos != null ? customBindPos.position() : Integer.MAX_VALUE;
                }))
                .map(field -> {
                    CsvColumn csvColumn = field.getAnnotation(CsvColumn.class);
                    return csvColumn != null ? csvColumn.value() : field.getName();
                })
                .toArray(String[]::new);

        // Set column mapping for ColumnPositionMappingStrategy
        setColumnMapping(columnNames);
    }

    @Override
    public String[] generateHeader(T bean) throws CsvRequiredFieldEmptyException {
        return columnNames;
    }
}

```

## src/main/java/com/nubo/corrected/reports/borde/application/config/KafkaConsumerConfig.java

```java
package com.nubo.corrected.reports.borde.application.config;

import lombok.RequiredArgsConstructor;
import org.apache.kafka.clients.consumer.ConsumerConfig;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.apache.kafka.common.header.Header;
import org.apache.kafka.common.serialization.StringDeserializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
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

import com.nubo.corrected.reports.borde.application.properties.PropertiesConfig;
import com.nubo.corrected.reports.borde.exception.ServiceException;
import com.nubo.corrected.reports.borde.exception.error.ErrorCode;
import com.nubo.corrected.reports.borde.exception.kafka.KafkaErrorBuild;
import com.nubo.corrected.reports.borde.models.dto.request.ReportFileInDto;

import java.nio.ByteBuffer;
import java.util.HashMap;
import java.util.Map;

@EnableKafka
@Configuration
@RequiredArgsConstructor
public class KafkaConsumerConfig {

    private final Environment environment;
    private final PropertiesConfig propertiesConfig;

    @Bean
    public <T> ConsumerFactory<String, T> consumerFactoryKafkaNubo(Class<T> responseType) {
        Map<String, Object> configProps = new HashMap<>();
        configProps.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, propertiesConfig.getKafkaNuboBootstrapServers());
        configProps.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);
        configProps.put(ConsumerConfig.GROUP_ID_CONFIG, propertiesConfig.getKafkaNuboConsumerGroupId());
        configProps.put(ConsumerConfig.AUTO_OFFSET_RESET_CONFIG, propertiesConfig.getKafkaNuboAutoOffsetReset());
        configProps.put("security.protocol", propertiesConfig.getKafkaNuboSecurityProtocol());

        configProps.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, ErrorHandlingDeserializer.class);
        configProps.put(ErrorHandlingDeserializer.VALUE_DESERIALIZER_CLASS, JsonDeserializer.class);
        configProps.put(JsonDeserializer.VALUE_DEFAULT_TYPE, responseType);
        configProps.put(JsonDeserializer.TRUSTED_PACKAGES, "com.nubo.corrected.reports.borde");

        if (!isLocalProfile()) {
            configProps.put("sasl.mechanism", propertiesConfig.getKafkaNuboSaslMechanism());
            configProps.put("sasl.jaas.config", propertiesConfig.getKafkaNuboSaslJaasConfig());
        }

        return new DefaultKafkaConsumerFactory<>(
                configProps,
                new StringDeserializer(),
                new ErrorHandlingDeserializer<>(new JsonDeserializer<>(responseType))
        );
    }

    @Bean
    public ConcurrentKafkaListenerContainerFactory<String, ReportFileInDto> kafkaNuboListenerContainerFactory(
            DefaultErrorHandler errorHandler) {
        ConcurrentKafkaListenerContainerFactory<String, ReportFileInDto> factory = new ConcurrentKafkaListenerContainerFactory<>();
        factory.setConsumerFactory(consumerFactoryKafkaNubo(ReportFileInDto.class));
        factory.setCommonErrorHandler(errorHandler);
        factory.getContainerProperties().setDeliveryAttemptHeader(true);
        return factory;
    }

    @Bean
    public DefaultErrorHandler kafkaErrorHandler(KafkaErrorBuild kafkaErrorBuilder) {
        FixedBackOff backOff = new FixedBackOff(2000L, propertiesConfig.getKafkaNuboRetries());

        DefaultErrorHandler errorHandler =  new DefaultErrorHandler(
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
                    kafkaErrorBuilder.buildError(exception, errorCode, record.offset(), record.topic(), deliveryAttempt);
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

## src/main/java/com/nubo/corrected/reports/borde/application/config/KafkaProducerConfig.java

```java
package com.nubo.corrected.reports.borde.application.config;

import lombok.RequiredArgsConstructor;
import org.apache.kafka.clients.producer.ProducerConfig;
import org.apache.kafka.common.serialization.StringSerializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.kafka.core.DefaultKafkaProducerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.core.ProducerFactory;

import com.nubo.corrected.reports.borde.application.properties.PropertiesConfig;

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

## src/main/java/com/nubo/corrected/reports/borde/application/config/ValidBigDecimalConfig.java

```java
package com.nubo.corrected.reports.borde.application.config;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

import java.math.BigDecimal;

import com.nubo.corrected.reports.borde.application.annotations.ValidBigDecimal;

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

## src/main/java/com/nubo/corrected/reports/borde/application/config/WebConfig.java

```java
package com.nubo.corrected.reports.borde.application.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestClient;
import org.springframework.web.servlet.LocaleResolver;
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
    public RestClient restClientCreate() {
        return RestClient.create();
    }

}

```

## src/main/java/com/nubo/corrected/reports/borde/application/context/GlobalContext.java

```java
package com.nubo.corrected.reports.borde.application.context;

import java.util.HashMap;
import java.util.Map;

public class GlobalContext {

    private static final ThreadLocal<Map<String, Object>> context = ThreadLocal.withInitial(HashMap::new);

    private GlobalContext() {
    }

    public static void setProperty(String key, Object value) {
        context.get().put(key, value);
    }

    public static String getPropertyString(String key) {
        Object value = context.get().get(key);
        return value != null ? String.valueOf(value) : null;
    }

    public static Object getProperty(String key) {
        Object value = context.get().get(key);
        return value;
    }

    public static void remove() {
        context.remove();
    }

}

```

## src/main/java/com/nubo/corrected/reports/borde/application/database/NamingStrategyConfig.java

```java
package com.nubo.corrected.reports.borde.application.database;

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

## src/main/java/com/nubo/corrected/reports/borde/application/database/UpperNamingConfig.java

```java
package com.nubo.corrected.reports.borde.application.database;

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

## src/main/java/com/nubo/corrected/reports/borde/application/properties/PropertiesConfig.java

```java
package com.nubo.corrected.reports.borde.application.properties;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import lombok.Getter;

@Component
@Getter
public class PropertiesConfig {

    @Value("${spring.application.name}")
    private String apiName;

    @Value("${kafka.nubo.bootstrap-servers}")
    private String kafkaNuboBootstrapServers;

    @Value("${kafka.nubo.sasl.mechanism}")
    private String kafkaNuboSaslMechanism;

    @Value("${kafka.nubo.sasl.jaas.config}")
    private String kafkaNuboSaslJaasConfig;

    @Value("${kafka.nubo.security.protocol}")
    private String kafkaNuboSecurityProtocol;

    @Value("${kafka.nubo.retries}")
    private Integer kafkaNuboRetries;

    @Value("${kafka.nubo.producer.topic-name-notification-request}")
    private String kafkaNuboProducerTopicNameNotifications;

    @Value("${kafka.nubo.consumer.topic-name-operation-corrected-reports}")
    private String kafkaNuboConsumerTopicNameOperationCorrectedReports;

    @Value("${kafka.nubo.consumer.group-id}")
    private String kafkaNuboConsumerGroupId;

    @Value("${kafka.nubo.auto-offset-reset}")
    private String kafkaNuboAutoOffsetReset;

    @Value("${client.ftp.host}")
    private String ftpHost;

    @Value("${client.ftp.port}")
    private int ftpPort;

    @Value("${client.ftp.user}")
    private String ftpUser;

    @Value("${client.ftp.password}")
    private String ftpPassword;

    @Value("${client.ftp.input-folder}")
    private String ftpInputFolder;

    @Value("${client.ftp.connection-timeout-ms}")
    private Integer ftpConnectionTimeoutMs;

    @Value("${client.ftp.data-timeout-ms}")
    private Integer ftpDataTimeoutMs;

    @Value("${client.ftp.retry-attempts}")
    private Integer ftpRetryAttempts;

    @Value("${client.ftp.passive-mode}")
    private Boolean ftpPassiveMode;

    @Value("${client.ftp.protocol}")
    private String ftpProtocol;

}

```

## src/main/java/com/nubo/corrected/reports/borde/application/properties/PropertiesContext.java

```java
package com.nubo.corrected.reports.borde.application.properties;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import com.nubo.corrected.reports.borde.application.context.GlobalContext;
import com.nubo.corrected.reports.borde.application.util.ApplicationUtils;
import com.nubo.corrected.reports.borde.models.entity.UserNuboEntity;
import com.nubo.corrected.reports.borde.models.enums.PropertiesEnum;

public class PropertiesContext {

     public static String getClientIp() {
        return GlobalContext.getPropertyString(PropertiesEnum.CLIENT_IP.getValue());
    }

    public static String getClientUser() {
        return GlobalContext.getPropertyString(PropertiesEnum.CLIENT_USER.getValue());
    }

    public static LocalDateTime getClientDatetime() {
        String clientDatetime = GlobalContext.getPropertyString(PropertiesEnum.CLIENT_DATETIME.getValue());
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern(ApplicationUtils.getFormatDatetime());
        if (clientDatetime != null) {
            return LocalDateTime.parse(clientDatetime, formatter);
        }
        return LocalDateTime.now();
    }

    public static String getVersion() {
        return GlobalContext.getPropertyString(PropertiesEnum.VERSION_API.getValue());
    }

    public static UserNuboEntity getClientUserEntity() {
        return (UserNuboEntity) GlobalContext.getProperty(PropertiesEnum.CLIENT_USER_ENTITY.getValue());
    }
}

```

## src/main/java/com/nubo/corrected/reports/borde/application/serializers/AnnotatedBigDecimalCsvSerializer.java

```java
package com.nubo.corrected.reports.borde.application.serializers;

import java.lang.reflect.Field;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.text.DecimalFormat;
import java.text.DecimalFormatSymbols;
import java.util.Locale;

import com.nubo.corrected.reports.borde.application.annotations.CsvBigDecimal;
import com.opencsv.bean.AbstractBeanField;
import com.opencsv.exceptions.CsvConstraintViolationException;
import com.opencsv.exceptions.CsvDataTypeMismatchException;

/**
 * BigDecimal CSV converter that reads formatting configuration
 * from @CsvBigDecimal annotation
 */
public class AnnotatedBigDecimalCsvSerializer extends AbstractBeanField<BigDecimal, String> {

    private static final char DECIMAL_SEPARATOR = ',';
    private static final char GROUPING_SEPARATOR = '.';

    private DecimalFormat formatter;
    private String nullValue;
    private int scale;

    @Override
    public void setField(Field field) {
        super.setField(field);
        configureFromAnnotation();
    }

    private void configureFromAnnotation() {
        // Get the field and its annotation
        Field field = getField();
        CsvBigDecimal annotation = field.getAnnotation(CsvBigDecimal.class);

        if (annotation != null) {
            this.scale = Math.max(0, Math.min(10, annotation.scale()));
            boolean useGrouping = annotation.useGrouping();
            this.nullValue = annotation.nullValue().isEmpty() ? getDefaultNullValue(scale) : annotation.nullValue();

            this.formatter = createFormatter(scale, useGrouping);
        } else {
            // Default configuration
            this.scale = 2;
            this.nullValue = getDefaultNullValue(2);
            this.formatter = createFormatter(2, false);
        }
    }

    private DecimalFormat createFormatter(int decimalPlaces, boolean useGrouping) {
        DecimalFormatSymbols symbols = new DecimalFormatSymbols(Locale.US);
        symbols.setDecimalSeparator(DECIMAL_SEPARATOR);
        symbols.setGroupingSeparator(GROUPING_SEPARATOR);

        StringBuilder pattern = new StringBuilder();

        if (useGrouping) {
            pattern.append("#,##0");
        } else {
            pattern.append("0");
        }

        if (decimalPlaces > 0) {
            pattern.append(".");
            pattern.append("0".repeat(decimalPlaces));
        }

        DecimalFormat format = new DecimalFormat(pattern.toString(), symbols);
        format.setRoundingMode(RoundingMode.HALF_UP);
        format.setGroupingUsed(useGrouping);

        return format;
    }

    private String getDefaultNullValue(int decimalPlaces) {
        if (decimalPlaces == 0) {
            return "0";
        }
        return "0" + DECIMAL_SEPARATOR + "0".repeat(decimalPlaces);
    }

    @Override
    protected Object convert(String value) throws CsvDataTypeMismatchException, CsvConstraintViolationException {
        if (value == null || value.trim().isEmpty()) {
            return null;
        }

        try {
            String cleanValue = value.replace(String.valueOf(GROUPING_SEPARATOR), "")
                    .replace(String.valueOf(DECIMAL_SEPARATOR), ".");
            return new BigDecimal(cleanValue);
        } catch (NumberFormatException e) {
            throw new CsvDataTypeMismatchException(value, BigDecimal.class,
                    "Unable to convert string to BigDecimal: " + value);
        }
    }

    @Override
    protected String convertToWrite(Object value) throws CsvDataTypeMismatchException {
        if (value == null) {
            return nullValue;
        }

        if (value instanceof BigDecimal bigDecimal) {
            return formatter.format(bigDecimal);
        }

        if (value instanceof Number number) {
            return formatter.format(number);
        }

        throw new CsvDataTypeMismatchException(
                String.format("Cannot convert %s to String. Expected BigDecimal or Number type.",
                        value.getClass().getSimpleName()));
    }
}

```

## src/main/java/com/nubo/corrected/reports/borde/application/serializers/BooleanCsvSerializer.java

```java
package com.nubo.corrected.reports.borde.application.serializers;

import com.opencsv.bean.AbstractBeanField;
import com.opencsv.exceptions.CsvConstraintViolationException;
import com.opencsv.exceptions.CsvDataTypeMismatchException;

/**
 * Custom boolean serializer for CSV output that converts Boolean values
 * to custom string representations.
 *
 * By default converts:
 * - true → "SI"
 * - false → "NO"
 * - null → "" (empty string)
 */
public class BooleanCsvSerializer extends AbstractBeanField<Boolean, String> {

    private final String trueValue;
    private final String falseValue;
    private final String nullValue;

    /**
     * Default constructor that uses "SI" for true, "NO" for false, and empty string
     * for null
     */
    public BooleanCsvSerializer() {
        this("SI", "NO", "");
    }

    /**
     * Constructor with custom values
     *
     * @param trueValue  String representation for true values
     * @param falseValue String representation for false values
     * @param nullValue  String representation for null values
     */
    public BooleanCsvSerializer(String trueValue, String falseValue, String nullValue) {
        this.trueValue = trueValue;
        this.falseValue = falseValue;
        this.nullValue = nullValue;
    }

    @Override
    protected Object convert(String value) throws CsvDataTypeMismatchException, CsvConstraintViolationException {
        if (value == null || value.trim().isEmpty()) {
            return null;
        }

        String trimmedValue = value.trim();

        if (trueValue.equalsIgnoreCase(trimmedValue)) {
            return Boolean.TRUE;
        } else if (falseValue.equalsIgnoreCase(trimmedValue)) {
            return Boolean.FALSE;
        }

        // Try common boolean representations
        if ("true".equalsIgnoreCase(trimmedValue) || "1".equals(trimmedValue) ||
                "sí".equalsIgnoreCase(trimmedValue) || "si".equalsIgnoreCase(trimmedValue) ||
                "yes".equalsIgnoreCase(trimmedValue) || "y".equalsIgnoreCase(trimmedValue)) {
            return Boolean.TRUE;
        } else if ("false".equalsIgnoreCase(trimmedValue) || "0".equals(trimmedValue) ||
                "no".equalsIgnoreCase(trimmedValue) || "n".equalsIgnoreCase(trimmedValue)) {
            return Boolean.FALSE;
        }

        throw new CsvDataTypeMismatchException(
                String.format("Cannot convert '%s' to Boolean. Expected values: %s/%s",
                        value, trueValue, falseValue));
    }

    @Override
    protected String convertToWrite(Object value) throws CsvDataTypeMismatchException {
        if (value == null) {
            return nullValue;
        }

        if (value instanceof Boolean) {
            return ((Boolean) value) ? trueValue : falseValue;
        }

        throw new CsvDataTypeMismatchException(
                String.format("Cannot convert %s to String. Expected Boolean type.",
                        value.getClass().getSimpleName()));
    }
}

```

## src/main/java/com/nubo/corrected/reports/borde/application/util/ApplicationUtils.java

```java
package com.nubo.corrected.reports.borde.application.util;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.nubo.corrected.reports.borde.exception.ServiceException;
import com.nubo.corrected.reports.borde.exception.error.ErrorCode;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class ApplicationUtils {

    private static final ObjectMapper MAPPER = new ObjectMapper();
    private static final String FORMAT_DATETIME = "yyyy-MM-dd'T'HH:mm:ss";
    private static final String FORMAT_DATE = "yyyy-MM-dd";
    private static final String FILE_FORMAT_DATETIME = "dd-MM-yyyy_HHmmss";

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

    public static String getFileFormatDatetime() {
        return FILE_FORMAT_DATETIME;
    }

    public static String getLocalDateTimeNow() {
        return LocalDateTime.now().format(DateTimeFormatter.ofPattern(ApplicationUtils.getFormatDatetime()));
    }

    public static String getFileFormatDatetimeNow() {
        return LocalDateTime.now().format(DateTimeFormatter.ofPattern(ApplicationUtils.getFileFormatDatetime()));
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

    public static JsonNode convertObjectToJsonNode(Object object) {
        return MAPPER.valueToTree(object);
    }

}

```

## src/main/java/com/nubo/corrected/reports/borde/client/ftp/FtpAdapter.java

```java
package com.nubo.corrected.reports.borde.client.ftp;

import org.apache.camel.Exchange;
import org.apache.camel.LoggingLevel;
import org.apache.camel.builder.RouteBuilder;
import org.springframework.stereotype.Component;

import com.nubo.corrected.reports.borde.application.properties.PropertiesConfig;
import com.nubo.corrected.reports.borde.models.enums.FtpEnum;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class FtpAdapter extends RouteBuilder {

    private final PropertiesConfig propertiesConfig;

    @Override
    public void configure() {

        onException(Exception.class)
                .maximumRedeliveries(0)
                .handled(true)
                .log(LoggingLevel.ERROR,
                        "Error in FTP route: ${routeId}, Exception: ${exception.class.name} - ${exception.message}");

        from(FtpEnum.FROM_WHITE_PROCESS_FILE.getValue())
                .routeId("sftp-write-input-folder")
                .log(LoggingLevel.INFO, "Preparing to upload file to SFTP: ${header.CamelFileName}")
                .process(exchange -> {
                    String fileName = exchange.getIn().getHeader(Exchange.FILE_NAME, String.class);
                    exchange.getIn().setHeader("FullRemotePath",
                            fullRemotePath(propertiesConfig.getFtpInputFolder(), fileName));
                })
                .toD(buildFtpUri(propertiesConfig.getFtpInputFolder(), false))
                .log(LoggingLevel.INFO, "SFTP upload successful. Full path: ${header.FullRemotePath}");

    }

    private String buildFtpUri(String folder, boolean isReadOperation) {
        log.info("buildFtpUri Init");
        StringBuilder uri = new StringBuilder();
        uri.append(baseUri())
                .append(folder.startsWith("/") ? folder : "/" + folder)
                .append("?binary=false")
                .append("&charset=UTF-8")
                .append("&passiveMode=true");

        if (!isReadOperation) {
            uri.append("&fileExist=Override");
        }

        uri.append("&password=").append(propertiesConfig.getFtpPassword());

        log.info("SFTP URI for folder {}: {}", folder,
                uri.toString().replaceAll("password=[^&]*", "password=****"));

        return uri.toString();
    }

    private String fullRemotePath(String folder, String fileName) {
        StringBuilder path = new StringBuilder();
        path.append(baseUri())
                .append(folder.startsWith("/") ? folder : "/" + folder)
                .append("/").append(fileName);
        return path.toString();
    }

    private StringBuilder baseUri() {
        StringBuilder uri = new StringBuilder();
        uri.append(propertiesConfig.getFtpProtocol()).append("://")
                .append(propertiesConfig.getFtpUser()).append("@")
                .append(propertiesConfig.getFtpHost()).append(":")
                .append(propertiesConfig.getFtpPort());
        return uri;
    }
}

```

## src/main/java/com/nubo/corrected/reports/borde/exception/ServiceException.java

```java
package com.nubo.corrected.reports.borde.exception;


import lombok.Getter;
import org.springframework.http.HttpStatus;

import com.nubo.corrected.reports.borde.exception.error.ErrorCode;

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

## src/main/java/com/nubo/corrected/reports/borde/exception/error/ErrorCode.java

```java
package com.nubo.corrected.reports.borde.exception.error;


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
    ERROR_DESERIALIZER_JSON("Error Deserializer Json"),
    TRADE_VALIDATION_FAILED("Trade validation failed"),
    ERROR_KAFKA_PRODUCER_NUBO("Error Producer Kafka Nubo"),
    ERROR_KAFKA_CONSUMER_NUBO("Error Consumer Kafka Nubo"),
    VERSION_API_NOT_FOUND("Version API not found"),
    USER_NOT_FOUND("User not found"),
    FILE_GENERATE_NOT_FOUND("FileGenerateEntity not found"),
    ERROR_GENERATING_CSV("Error generating CSV"),
    STATUS_NOT_FOUND("Status not found");


    private final String message;

    ErrorCode(String message) {
        this.message = message;
    }

    public String getName() {
        return this.name();
    }

}

```

## src/main/java/com/nubo/corrected/reports/borde/exception/error/ErrorResponse.java

```java
package com.nubo.corrected.reports.borde.exception.error;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
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

## src/main/java/com/nubo/corrected/reports/borde/exception/error/ErrorValidation.java

```java
package com.nubo.corrected.reports.borde.exception.error;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ErrorValidation {

    private String id;
    private String description;

}

```

## src/main/java/com/nubo/corrected/reports/borde/exception/handler/GlobalExceptionHandler.java

```java
package com.nubo.corrected.reports.borde.exception.handler;

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

import com.nubo.corrected.reports.borde.application.properties.PropertiesContext;
import com.nubo.corrected.reports.borde.exception.ServiceException;
import com.nubo.corrected.reports.borde.exception.error.ErrorCode;
import com.nubo.corrected.reports.borde.exception.error.ErrorResponse;
import com.nubo.corrected.reports.borde.exception.error.ErrorValidation;

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

## src/main/java/com/nubo/corrected/reports/borde/exception/kafka/KafkaErrorBuild.java

```java
package com.nubo.corrected.reports.borde.exception.kafka;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import com.nubo.corrected.reports.borde.application.properties.PropertiesConfig;
import com.nubo.corrected.reports.borde.application.util.ApplicationUtils;
import com.nubo.corrected.reports.borde.exception.error.ErrorCode;
import com.nubo.corrected.reports.borde.exception.error.ErrorResponse;
import com.nubo.corrected.reports.borde.exception.error.ErrorValidation;

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
                .httpCode("500")
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

## src/main/java/com/nubo/corrected/reports/borde/helpers/GenerateCsvUtil.java

```java
package com.nubo.corrected.reports.borde.helpers;

import java.io.StringWriter;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.camel.Exchange;
import org.apache.camel.ProducerTemplate;
import org.springframework.stereotype.Component;

import com.nubo.corrected.reports.borde.application.config.FieldOrderMappingStrategy;
import com.nubo.corrected.reports.borde.application.util.ApplicationUtils;
import com.nubo.corrected.reports.borde.exception.ServiceException;
import com.nubo.corrected.reports.borde.exception.error.ErrorCode;
import com.nubo.corrected.reports.borde.models.domain.CorrectedReports;
import com.nubo.corrected.reports.borde.models.dto.request.ReportFileInDto;
import com.nubo.corrected.reports.borde.models.dto.request.ReportFileOperationInDto;
import com.nubo.corrected.reports.borde.models.enums.FileNameEnum;
import com.nubo.corrected.reports.borde.models.enums.FtpEnum;
import com.opencsv.bean.StatefulBeanToCsv;
import com.opencsv.bean.StatefulBeanToCsvBuilder;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Component
@RequiredArgsConstructor
@Slf4j
public class GenerateCsvUtil {

    private final ProducerTemplate producerTemplate;

    public String processSftpCsvFile(ReportFileInDto reportFileInDto) {

        List<CorrectedReports> correctedReportsList = convertToReportObjects(reportFileInDto.getContent());

        byte[] csvContent = generateCsvContent(correctedReportsList);
        String fileName = generateFileName(reportFileInDto.getFileName());

        log.info("CSV successfully generated with OpenCSV. Records: {}, Size: {} bytes",
                correctedReportsList.size(), csvContent.length);

        Map<String, Object> headers = Map.of(Exchange.FILE_NAME, fileName);
        Exchange exchange = producerTemplate.request(
                FtpEnum.FROM_WHITE_PROCESS_FILE.getValue(),
                processor -> {
                    processor.getIn().setBody(csvContent);
                    processor.getIn().setHeaders(headers);
                });

        Exception exception = exchange.getProperty(Exchange.EXCEPTION_CAUGHT, Exception.class);
        if (exception != null) {
            log.error("Error during SFTP upload: {}", exception.getMessage(), exception);
            throw new ServiceException(ErrorCode.ERROR_GENERATING_CSV, exception);
        }

        String remotePath = exchange.getMessage().getHeader("FullRemotePath", String.class);
        if (remotePath == null) {
            remotePath = fileName;
        }

        log.info("CSV file {} successfully sent via SFTP", fileName);
        return remotePath;
    }

    private String generateFileName(String fileName) {
        if (fileName == null || fileName.isEmpty()) {
            String datetimeNow = ApplicationUtils.getFileFormatDatetimeNow();
            fileName = FileNameEnum.INTERNAL_WITHOUT_PARTICIPANT.getPrefix() + datetimeNow;
        }
        if (fileName.contains(".")) {
            fileName = fileName.substring(0, fileName.lastIndexOf("."));
        }
        return String.format("%s.csv", fileName);
    }

    public List<CorrectedReports> convertToReportObjects(List<ReportFileOperationInDto> reportFileOperationInDtoList) {
        List<CorrectedReports> reportsList = new ArrayList<>();

        for (ReportFileOperationInDto operation : reportFileOperationInDtoList) {
            if (operation.getFractions() == null || operation.getFractions().isEmpty()) {
                CorrectedReports report = MapperUtil.reportFileOperationInDtoToCorrectedReports(operation);
                reportsList.add(report);
                continue;
            } else {
                List<CorrectedReports> reportList = operation.getFractions().stream()
                        .map(fraction -> MapperUtil.reportFileFractionInDtoToCorrectedReports(operation, fraction))
                        .toList();
                reportsList.addAll(reportList);
            }
        }

        return reportsList;
    }

    public byte[] generateCsvContent(List<CorrectedReports> reports) {
        try (StringWriter writer = new StringWriter()) {

            log.debug("Generating CSV for {} reports", reports.size());
            if (reports.isEmpty()) {
                log.warn("Reports list is empty. Generating CSV with headers only.");
                CorrectedReports emptyReport = new CorrectedReports();
                reports = List.of(emptyReport);
            }

            // Create custom mapping strategy to preserve field order
            FieldOrderMappingStrategy<CorrectedReports> mappingStrategy = new FieldOrderMappingStrategy<>(
                    CorrectedReports.class);

            StatefulBeanToCsv<CorrectedReports> beanToCsv = new StatefulBeanToCsvBuilder<CorrectedReports>(writer)
                    .withMappingStrategy(mappingStrategy)
                    .withSeparator(';')
                    .withQuotechar('"')
                    .withEscapechar('\\')
                    .withApplyQuotesToAll(false)
                    .build();

            beanToCsv.write(reports);

            String csvContent = writer.toString();
            byte[] result = csvContent.getBytes(StandardCharsets.UTF_8);

            log.info("CSV generated successfully. {} reports, {} bytes",
                    reports.size(), result.length);

            return result;

        } catch (Exception e) {
            log.error("Error generating CSV content: {}", e.getMessage(), e);
            throw new ServiceException(ErrorCode.ERROR_GENERATING_CSV, e);
        }
    }
}

```

## src/main/java/com/nubo/corrected/reports/borde/helpers/MapperUtil.java

```java
package com.nubo.corrected.reports.borde.helpers;

import com.nubo.corrected.reports.borde.models.domain.CorrectedReports;
import com.nubo.corrected.reports.borde.models.dto.request.ReportFileFractionInDto;
import com.nubo.corrected.reports.borde.models.dto.request.ReportFileOperationInDto;

public final class MapperUtil {

    private MapperUtil() {
    }

    public static CorrectedReports reportFileOperationInDtoToCorrectedReports(
            ReportFileOperationInDto operation) {
        CorrectedReports report = new CorrectedReports();

        report.setMatchDate(operation.getMatchDate());
        report.setClearingDate(operation.getClearingDate());
        report.setCorrectionDate(operation.getCorrectionDate());
        report.setCorrectionValue(operation.getCorrectionValue());

        report.setMatchId(operation.getMatchId());
        report.setDeposit(operation.getDepositDescription());
        report.setCountryName(operation.getCountryName());
        report.setOperationType(operation.getTypeDescription());

        if (operation.getSecurityTitle() != null) {
            report.setMnemonic(operation.getSecurityTitle().getMnemonic());
            report.setInstrumentType(operation.getSecurityTitle().getClassDescription());
            report.setIsin(operation.getSecurityTitle().getIsin());
        }

        if (operation.getParticipantBuy() != null) {
            report.setParticipantBuyCode(operation.getParticipantBuy().getCode());
            report.setParticipantNameBuy(operation.getParticipantBuy().getName());
        }

        if (operation.getParticipantSell() != null) {
            report.setParticipantSellCode(operation.getParticipantSell().getCode());
            report.setParticipantNameSell(operation.getParticipantSell().getName());
        }

        if (operation.getCustodianBuy() != null) {
            report.setCustodianBuyCode(operation.getCustodianBuy().getCode());
        }

        if (operation.getCustodianSell() != null) {
            report.setCustodianSellCode(operation.getCustodianSell().getCode());
        }

        report.setBuyAssignmentIndicator(operation.getAssignmentMarkBuy());
        report.setSellAssignmentIndicator(operation.getAssignmentMarkSell());

        boolean isFractional = (operation.getFractionalMarkBuy() != null && operation.getFractionalMarkBuy()) ||
                (operation.getFractionalMarkSell() != null && operation.getFractionalMarkSell());
        report.setFractionalOperationIndicator(isFractional);

        report.setCancelledOperationIndicator(operation.getCanceledStatus());
        report.setOperationStatus(operation.getStatusName());

        report.setTradingSystem(operation.getTradingSystemDescription());
        report.setTradingSession(operation.getTradingSessionDescription());
        report.setMarket(operation.getMarketTypeDescription());

        report.setQuantity(operation.getQuantity());
        report.setPrice(operation.getPrice());
        report.setAmount(operation.getVolume());
        report.setCurrency(operation.getCurrencyCode());

        report.setReassignmentIndicator(operation.getReallocationIndicator());

        report.setForeignBrokerCode(operation.getForeignBrokerBuy());
        report.setOperationResponsibleCode(operation.getResponsibleTradeBuy());
        report.setSellDirectDepositorCode(operation.getDirectDepositorSell());
        report.setBuyDirectDepositorCode(operation.getDirectDepositorBuy());
        report.setReferenceBuySell(operation.getReferenceBuy());
        report.setBuyOriginDestinationIndicator(operation.getSourceQuoteBuyTypeDescription());
        report.setSellOriginDestinationIndicator(operation.getSourceQuoteSellTypeDescription());

        // Mapear indicadores especiales fiduciarios
        // TODO: Agregar estos campos cuando estén disponibles en operation
        // report.setBuyFiduciarySpecialIndicator(operation.getBuyFiduciarySpecialIndicator());
        // report.setSellFiduciarySpecialIndicator(operation.getSellFiduciarySpecialIndicator());

        // Indicador de anticipo
        // TODO: Agregar este campo cuando esté disponible en operation
        // report.setAdvanceIndicator(operation.getAdvanceIndicator());

        return report;
    }

    public static CorrectedReports reportFileFractionInDtoToCorrectedReports(
            ReportFileOperationInDto operation, ReportFileFractionInDto fraction) {
        CorrectedReports report = reportFileOperationInDtoToCorrectedReports(operation);

        if (fraction.getInvestorInitial() != null) {
            report.setInitialBeneficiaryIdType(fraction.getInvestorInitial().getDocumentType());
            report.setInitialBeneficiaryId(fraction.getInvestorInitial().getDocumentNumber());
            report.setInitialBeneficiaryName(fraction.getInvestorInitial().getName());
        }

        if (fraction.getInvestorFinal() != null) {
            report.setNewBeneficiaryIdType(fraction.getInvestorFinal().getDocumentType());
            report.setNewBeneficiaryId(fraction.getInvestorFinal().getDocumentNumber());
            report.setNewBeneficiaryName(fraction.getInvestorFinal().getName());
        }

        report.setNewMasterAccountIndicator(fraction.getNewMasterAccountIndicator());

        report.setInitialBeneficiaryAccount(fraction.getInvestorAccountNumber());
        report.setNewBeneficiaryAccount(fraction.getInvestorAccountNumber());
        report.setCommissionPercentage(fraction.getCommissionPercentage());
        report.setCommissionAmount(fraction.getCommissionAmount());
        report.setCommissionVat(fraction.getValTaxAmount());
        report.setNetAmount(fraction.getNetAmount());
        report.setTransferValue(fraction.getTransferValue());

        report.setCorrectionDate(fraction.getCorrectionDate());

        return report;
    }


}

```

## src/main/java/com/nubo/corrected/reports/borde/kafka/consumer/KafkaNuboListenerAdapter.java

```java
package com.nubo.corrected.reports.borde.kafka.consumer;

import java.util.Set;

import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.support.KafkaHeaders;
import org.springframework.messaging.handler.annotation.Header;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Component;
import org.springframework.util.ObjectUtils;

import com.nubo.corrected.reports.borde.application.context.GlobalContext;
import com.nubo.corrected.reports.borde.application.util.ApplicationUtils;
import com.nubo.corrected.reports.borde.models.dto.request.ReportFileInDto;
import com.nubo.corrected.reports.borde.models.enums.PropertiesEnum;
import com.nubo.corrected.reports.borde.service.ProcessMessageService;

import jakarta.validation.ConstraintViolation;
import jakarta.validation.Validator;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Component
@RequiredArgsConstructor
@Slf4j
public class KafkaNuboListenerAdapter {

    private final ProcessMessageService processMessageService;
    private final Validator validator;

    @KafkaListener(topics = "#{propertiesConfig.kafkaNuboConsumerTopicNameOperationCorrectedReports}",
            containerFactory = "kafkaNuboListenerContainerFactory")
    public void listenKafka(@Payload ReportFileInDto reportFileInDto,
            @Header(KafkaHeaders.RECEIVED_PARTITION) int partition,
            @Header(KafkaHeaders.OFFSET) long offset,
            @Header(KafkaHeaders.RECEIVED_TOPIC) String topic,
            @Header(KafkaHeaders.DELIVERY_ATTEMPT) int retry) {
        log.info("New received Message -- Topic: {} -- Partition : {} -- Offset : {} -- retry: {}",
                topic, partition, offset, retry);

        if (!validateObject(reportFileInDto)) {
            log.error("Validation failed for message from Topic: {} -- Partition: {} -- Offset: {}",
                    topic, partition, offset);
            return;
        }

        String clientUser = ObjectUtils.isEmpty(reportFileInDto.getClientUser()) ? topic
                : reportFileInDto.getClientUser();
        this.setProperties(reportFileInDto.getClientIp(), clientUser);
        processMessageService.generateFile(reportFileInDto);
    }

    private void setProperties(String clientIp, String clientUser) {
        GlobalContext.setProperty(PropertiesEnum.CLIENT_IP.getValue(), clientIp);
        GlobalContext.setProperty(PropertiesEnum.CLIENT_USER.getValue(), clientUser);
        GlobalContext.setProperty(PropertiesEnum.CLIENT_DATETIME.getValue(),
                ApplicationUtils.getLocalDateTimeNow());
    }

    private <T> boolean validateObject(T object) {
        Set<ConstraintViolation<T>> violations = validator.validate(object);
        if (!violations.isEmpty()) {
            log.error("Validation errors found for object: {}", object.toString());
            for (ConstraintViolation<T> violation : violations) {
                log.error("Field: {} - Error: {} - Invalid value: {}",
                        violation.getPropertyPath(),
                        violation.getMessage(),
                        violation.getInvalidValue());
            }
            return false;
        }
        log.debug("Object validation successful for type: {}", object.getClass().getSimpleName());
        return true;
    }

}

```

## src/main/java/com/nubo/corrected/reports/borde/kafka/producer/KafkaNuboAdapter.java

```java
package com.nubo.corrected.reports.borde.kafka.producer;

import java.util.concurrent.CompletableFuture;

import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.SendResult;
import org.springframework.stereotype.Component;

import com.nubo.corrected.reports.borde.application.properties.PropertiesConfig;
import com.nubo.corrected.reports.borde.application.util.ApplicationUtils;
import com.nubo.corrected.reports.borde.exception.ServiceException;
import com.nubo.corrected.reports.borde.exception.error.ErrorCode;
import com.nubo.corrected.reports.borde.models.dto.response.NotificationOutDto;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Component
@RequiredArgsConstructor
@Slf4j
public class KafkaNuboAdapter {

    private final PropertiesConfig propertiesConfig;
    private final KafkaTemplate<String, String> kafkaNuboTemplate;

    public void sendNotifications(NotificationOutDto notificationOutDto) {
        String topic = propertiesConfig.getKafkaNuboProducerTopicNameNotifications();
        String jsonString = ApplicationUtils.convertObjectToJson(notificationOutDto);
        CompletableFuture<SendResult<String, String>> future = kafkaNuboTemplate.send(topic, jsonString)
                .toCompletableFuture();

        future.thenAccept(result -> log.info("Send message -- Topic: {} -- partition: {} -- offset: {} -- json: {} ",
                        topic, result.getRecordMetadata().partition(), result.getRecordMetadata().offset(), jsonString))
                .exceptionally(ex -> {
                    throw new ServiceException(ErrorCode.ERROR_KAFKA_PRODUCER_NUBO, ex);
                });
    }
}

```

## src/main/java/com/nubo/corrected/reports/borde/models/domain/CorrectedReports.java

```java
package com.nubo.corrected.reports.borde.models.domain;

import java.time.LocalDate;

import com.nubo.corrected.reports.borde.application.annotations.CsvColumn;
import com.nubo.corrected.reports.borde.application.serializers.BooleanCsvSerializer;
import com.opencsv.bean.CsvBindByPosition;
import com.opencsv.bean.CsvCustomBindByPosition;
import com.opencsv.bean.CsvDate;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CorrectedReports {

    @CsvBindByPosition(position = 0)
    @CsvColumn("Fecha de registro")
    @CsvDate("yyyy-MM-dd")
    private LocalDate matchDate;

    @CsvBindByPosition(position = 1)
    @CsvColumn("Folio")
    private Long matchId;

    @CsvBindByPosition(position = 2)
    @CsvColumn("Fecha de cumplimiento")
    @CsvDate("yyyy-MM-dd")
    private LocalDate clearingDate;

    @CsvBindByPosition(position = 3)
    @CsvColumn("Fecha de corrección")
    @CsvDate("yyyy-MM-dd")
    private LocalDate correctionDate;

    @CsvBindByPosition(position = 4)
    @CsvColumn("Valor corrección")
    private String correctionValue;

    @CsvBindByPosition(position = 5)
    @CsvColumn("Depósito")
    private String deposit;

    @CsvBindByPosition(position = 6)
    @CsvColumn("Pais de origen del activo")
    private String countryName;

    @CsvBindByPosition(position = 7)
    @CsvColumn("Tipo de Operación")
    private String operationType;

    @CsvBindByPosition(position = 8)
    @CsvColumn("Nemotecnico")
    private String mnemonic;

    @CsvBindByPosition(position = 9)
    @CsvColumn("ID Participante Compra")
    private String participantBuyCode;

    @CsvBindByPosition(position = 10)
    @CsvColumn("ID Participante Venta")
    private String participantSellCode;

    @CsvBindByPosition(position = 11)
    @CsvColumn("ID Custodio por Compra")
    private String custodianBuyCode;

    @CsvBindByPosition(position = 12)
    @CsvColumn("ID Custodio por Venta")
    private String custodianSellCode;

    @CsvCustomBindByPosition(position = 13, converter = BooleanCsvSerializer.class)
    @CsvColumn("Indicador de asignación por compra")
    private Boolean buyAssignmentIndicator;

    @CsvCustomBindByPosition(position = 14, converter = BooleanCsvSerializer.class)
    @CsvColumn("Indicador de asignación por Venta")
    private Boolean sellAssignmentIndicator;

    @CsvCustomBindByPosition(position = 15, converter = BooleanCsvSerializer.class)
    @CsvColumn("Indicador Operación Fraccionada (compra -venta)")
    private Boolean fractionalOperationIndicator;

    @CsvBindByPosition(position = 16)
    @CsvColumn("Indicador anticipo")
    private String advanceIndicator;

    @CsvCustomBindByPosition(position = 17, converter = BooleanCsvSerializer.class)
    @CsvColumn("Indicador Operación anulada")
    private Boolean cancelledOperationIndicator;

    @CsvBindByPosition(position = 18)
    @CsvColumn("Estado de la operación")
    private String operationStatus;

    @CsvBindByPosition(position = 19)
    @CsvColumn("Sistema de negociación")
    private String tradingSystem;

    @CsvBindByPosition(position = 20)
    @CsvColumn("Rueda de negociación")
    private String tradingSession;

    @CsvBindByPosition(position = 21)
    @CsvColumn("Mercado")
    private String market;

    @CsvBindByPosition(position = 22)
    @CsvColumn("Cantidad")
    private String quantity;

    @CsvBindByPosition(position = 23)
    @CsvColumn("Precio")
    private String price;

    @CsvBindByPosition(position = 24)
    @CsvColumn("Monto")
    private String amount;

    @CsvBindByPosition(position = 25)
    @CsvColumn("Moneda")
    private String currency;

    @CsvBindByPosition(position = 26)
    @CsvColumn("Tipo de instrumento")
    private String instrumentType;

    @CsvBindByPosition(position = 27)
    @CsvColumn("ISIN")
    private String isin;

    @CsvCustomBindByPosition(position = 28, converter = BooleanCsvSerializer.class)
    @CsvColumn("indicador de re asignación")
    private Boolean reassignmentIndicator;

    @CsvBindByPosition(position = 29)
    @CsvColumn("Nombre participante venta")
    private String participantNameSell;

    @CsvBindByPosition(position = 30)
    @CsvColumn("Nombre participante de compra")
    private String participantNameBuy;

    @CsvBindByPosition(position = 31)
    @CsvColumn("Código comisionista extranjero  ")
    private Integer foreignBrokerCode;

    @CsvBindByPosition(position = 32)
    @CsvColumn("Código del responsable de la operación  ")
    private Integer operationResponsibleCode;

    @CsvBindByPosition(position = 33)
    @CsvColumn("Código del depositante directo en el depósito venta")
    private Integer sellDirectDepositorCode;

    @CsvBindByPosition(position = 34)
    @CsvColumn("Código del depositante directo en el depósito compra")
    private Integer buyDirectDepositorCode;

    @CsvBindByPosition(position = 35)
    @CsvColumn("referencia por compra y venta")
    private String referenceBuySell;

    @CsvBindByPosition(position = 36)
    @CsvColumn("indicador origen/destino por compra")
    private String buyOriginDestinationIndicator;

    @CsvBindByPosition(position = 37)
    @CsvColumn("indicador origen/destino por venta")
    private String sellOriginDestinationIndicator;

    @CsvBindByPosition(position = 38)
    @CsvColumn("Indicador Especial fiduciario por compra")
    private String buyFiduciarySpecialIndicator;

    @CsvBindByPosition(position = 39)
    @CsvColumn("Indicador Especial fiduciario por venta")
    private String sellFiduciarySpecialIndicator;

    @CsvBindByPosition(position = 40)
    @CsvColumn("cuenta inversionista beneficiario final inicial ")
    private String initialBeneficiaryAccount;

    @CsvBindByPosition(position = 41)
    @CsvColumn("Tipo ID Beneficiario final inicial  ")
    private String initialBeneficiaryIdType;

    @CsvBindByPosition(position = 42)
    @CsvColumn("ID Beneficiario final inicial")
    private String initialBeneficiaryId;

    @CsvBindByPosition(position = 43)
    @CsvColumn("Nombre beneficiario final inicial")
    private String initialBeneficiaryName;

    @CsvBindByPosition(position = 44)
    @CsvColumn("Indicador de cuenta master inicial")
    private String initialMasterAccountIndicator;

    @CsvBindByPosition(position = 45)
    @CsvColumn("cuenta inversionista beneficiario final nueva ")
    private String newBeneficiaryAccount;

    @CsvBindByPosition(position = 46)
    @CsvColumn("Tipo ID Beneficiario final nueva ")
    private String newBeneficiaryIdType;

    @CsvBindByPosition(position = 47)
    @CsvColumn("ID Beneficiario final nueva  ")
    private String newBeneficiaryId;

    @CsvBindByPosition(position = 48)
    @CsvColumn("Nombre beneficiario final nueva  ")
    private String newBeneficiaryName;

    @CsvBindByPosition(position = 49)
    @CsvColumn("Indicador de cuenta master nueva  ")
    private String newMasterAccountIndicator;

    @CsvBindByPosition(position = 50)
    @CsvColumn("% comisión Por compra y venta")
    private String commissionPercentage;

    @CsvBindByPosition(position = 51)
    @CsvColumn("Valor de la comisión Por compra y venta")
    private String commissionAmount;

    @CsvBindByPosition(position = 52)
    @CsvColumn("IVA Comisión Por compra y venta")
    private String commissionVat;

    @CsvBindByPosition(position = 53)
    @CsvColumn("Monto neto ")
    private String netAmount;

    @CsvBindByPosition(position = 54)
    @CsvColumn("Valor de giro ")
    private String transferValue;


}

```

## src/main/java/com/nubo/corrected/reports/borde/models/dto/request/InvestorInDto.java

```java
package com.nubo.corrected.reports.borde.models.dto.request;

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
public class InvestorInDto {

    private Long id;

    private String code;

    private String name;

    private String documentType;

    private String documentNumber;

}

```

## src/main/java/com/nubo/corrected/reports/borde/models/dto/request/ParticipantInDto.java

```java
package com.nubo.corrected.reports.borde.models.dto.request;

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
public class ParticipantInDto {

    private Long id;

    private String code;

    private String name;

    private String shortName;

}

```

## src/main/java/com/nubo/corrected/reports/borde/models/dto/request/ReportFileFractionInDto.java

```java
package com.nubo.corrected.reports.borde.models.dto.request;


import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonInclude(JsonInclude.Include.ALWAYS)
public class ReportFileFractionInDto {

    private Integer fraction;

    private String sideDescription;

    private String investorAccountNumber;

    private InvestorInDto investorInitial;

    // Indicador de cuenta master inicial (por compra y venta)

    private InvestorInDto investorFinal;

    private String newMasterAccountIndicator;

    private String commissionPercentage;

    private String commissionAmount;

    private String valTaxAmount;

    private String netAmount;

    private String transferValue;



    private LocalDate correctionDate;//

    private String correctionValue;//

}

```

## src/main/java/com/nubo/corrected/reports/borde/models/dto/request/ReportFileInDto.java

```java
package com.nubo.corrected.reports.borde.models.dto.request;

import java.time.LocalDateTime;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonInclude(JsonInclude.Include.ALWAYS)
public class ReportFileInDto {

    private String clientIp;

    private String clientUser;

    private LocalDateTime clientDateTime;

    @NotNull
    private Long fileGenerateId;

    @NotNull
    private String fileName;

    private String fileType;

    @Valid
    private List<ReportFileOperationInDto> content;


}

```

## src/main/java/com/nubo/corrected/reports/borde/models/dto/request/ReportFileOperationInDto.java

```java
package com.nubo.corrected.reports.borde.models.dto.request;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonInclude(JsonInclude.Include.ALWAYS)
public class ReportFileOperationInDto {

    @NotNull
    private LocalDate matchDate;

    @NotNull
    private Long matchId;

    private LocalDate clearingDate;

    private LocalDate correctionDate;//

    private String correctionValue;//

    private String depositDescription;

    private String countryName;

    private String typeDescription;

    private SecurityTitleInDto securityTitle;

    private ParticipantInDto participantBuy;

    private ParticipantInDto participantSell;

    private ParticipantInDto custodianBuy;

    private ParticipantInDto custodianSell;

    private Boolean assignmentMarkBuy;

    private Boolean assignmentMarkSell;

    private Boolean fractionalMarkBuy;

    private Boolean fractionalMarkSell;

    // TODO Indicador anticipo

    private Boolean canceledStatus;

    private String statusName;

    private String tradingSystemDescription;

    private String tradingSessionDescription;

    private String marketTypeDescription;

    private String quantity;

    private String price;

    private String volume;

    private String currencyCode;

    private Boolean reallocationIndicator;

    private Integer foreignBrokerBuy;

    private Integer foreignBrokerSell;

    private Integer responsibleTradeBuy;

    private Integer responsibleTradeSell;

    private Integer directDepositorBuy;

    private Integer directDepositorSell;

    private String referenceBuy;

    private String referenceSell;

    private String sourceQuoteBuyTypeDescription;

    private String sourceQuoteSellTypeDescription;

    // TODO Indicador Especial fiduciario por compra

    // TODO Indicador Especial fiduciario por venta

    private List<ReportFileFractionInDto> fractions;
}

```

## src/main/java/com/nubo/corrected/reports/borde/models/dto/request/SecurityTitleInDto.java

```java
package com.nubo.corrected.reports.borde.models.dto.request;

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
public class SecurityTitleInDto {

    private String isin;

    private String mnemonic;

    private String classDescription;


}

```

## src/main/java/com/nubo/corrected/reports/borde/models/dto/response/MetaDataOutDto.java

```java
package com.nubo.corrected.reports.borde.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class MetaDataOutDto {

    private String fileName;

    private String depositoryCode;

    private String currencyCode;

}

```

## src/main/java/com/nubo/corrected/reports/borde/models/dto/response/NotificationOutDto.java

```java
package com.nubo.corrected.reports.borde.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.JsonNode;

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
public class NotificationOutDto {

    String eventType;

    @JsonProperty("notificacionId")
    Long notificationId;

    @JsonProperty("usuariosIds")
    List<Long> userIds;

    @JsonProperty("modulo")
    String module;

    @JsonProperty("perfiles")
    List<String> profiles;

    @JsonProperty("tipoNotificacion")
    String typeNotification;

    JsonNode metadata;

    String timestamp;
}

```

## src/main/java/com/nubo/corrected/reports/borde/models/entity/FileGenerateEntity.java

```java
package com.nubo.corrected.reports.borde.models.entity;

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
@Builder(toBuilder = true)
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"FILE_GENERATION\"", schema = "\"NUANBODB\"")
public class FileGenerateEntity {

    @Id
    @Column(name = "\"FILE_GENERATION_ID\"")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "\"FILE_NAME\"", length = 255)
    private String fileName;

    @Column(name = "\"FILE_TYPE\"", length = 50)
    private String fileType;

    @Column(name = "\"FILE_PATH\"", length = 512)
    private String filePath;

    @Column(name = "\"GENERATED_AT\"")
    private LocalDateTime generatedAt;

    @Column(name = "\"GENERATED_BY\"", length = 100)
    private String generatedBy;

    @Column(name = "\"PARTICIPANT_ID\"")
    private Long participantId;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "\"GENERATION_STATUS_ID\"")
    private StatusEntity generationStatus;

    @Column(name = "\"RECORD_DATE\"")
    private LocalDate recordDate;

    @Column(name = "\"FILE_CONSECUTIVE\"", length = 100)
    private Long fileConsecutive;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 100)
    private String lastModifyUser;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "\"OPERATION_STATUS_ID\"")
    private StatusEntity operationStatus;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "\"TYPE_ID\"")
    private TypeEntity type;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 100)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"")
    private LocalDateTime lastModifyDateTime;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50)
    private String lastModifyIp;

}

```

## src/main/java/com/nubo/corrected/reports/borde/models/entity/StatusEntity.java

```java
package com.nubo.corrected.reports.borde.models.entity;

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

    @Column(name = "\"SHORTNAME\"")
    private String shortName;

    @Column(name = "\"DETAIL\"", length = 255)
    private String detail;

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

## src/main/java/com/nubo/corrected/reports/borde/models/entity/TypeEntity.java

```java
package com.nubo.corrected.reports.borde.models.entity;

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
    @Column(name = "\"TYPE_ID\"")
    private Long id;

    @Column(name = "\"DESCRIPTION\"", length = 80, nullable = false)
    private String description;

    @Column(name = "\"CATEGORY\"", length = 30, nullable = false)
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

## src/main/java/com/nubo/corrected/reports/borde/models/entity/UserNuboEntity.java

```java
package com.nubo.corrected.reports.borde.models.entity;

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
@Table(name = "\"USER_NUBO\"", schema = "\"NUANBODB\"")
public class UserNuboEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"USER_NUBO_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"USER_NAME\"", length = 80)
    private String userName;

    @Column(name = "\"USER_TYPE\"", length = 80)
    private String userType;

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

## src/main/java/com/nubo/corrected/reports/borde/models/enums/FileNameEnum.java

```java
package com.nubo.corrected.reports.borde.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum FileNameEnum {

    EXTERNAL("RPT_CORRECCIONES_ENTIDAD_", "csv"),
    INTERNAL_WITH_PARTICIPANT("RPT_CORRECCIONES_ENTIDAD_", "csv"),
    INTERNAL_WITHOUT_PARTICIPANT("RPT_CORRECCIONES_", "csv");

    private final String prefix;
    private final String extension;

}

```

## src/main/java/com/nubo/corrected/reports/borde/models/enums/FtpEnum.java

```java
package com.nubo.corrected.reports.borde.models.enums;

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

## src/main/java/com/nubo/corrected/reports/borde/models/enums/NotificationEnum.java

```java
package com.nubo.corrected.reports.borde.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum NotificationEnum {

    ID_FILE_CORRECTED_REPORTS_SUCCESS(39L, "NOTIFICACION_LISTA_PARA_USUARIO"),
    ID_FILE_CORRECTED_REPORTS_ERROR(40L, "NOTIFICACION_LISTA_PARA_USUARIO");

    private final Long id;
    private final String value;

}

```

## src/main/java/com/nubo/corrected/reports/borde/models/enums/NotificationTypeEnum.java

```java
package com.nubo.corrected.reports.borde.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum NotificationTypeEnum {

    INFORMATIVE(123, "INFORMATIVE"),
    ERROR(124, "ERROR"),
    WARNING(125, "WARNING");

    private final Integer code;
    private final String description;
}

```

## src/main/java/com/nubo/corrected/reports/borde/models/enums/PropertiesEnum.java

```java
package com.nubo.corrected.reports.borde.models.enums;

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
    VERSION_API("version_api"),
    CLIENT_USER_ENTITY("client_user_entity");

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

## src/main/java/com/nubo/corrected/reports/borde/models/enums/StatusFileEnum.java

```java
package com.nubo.corrected.reports.borde.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum StatusFileEnum {

    IN_PROCESS(900L),
    GENERATED(901L);

    private final Long statusId;

}

```

## src/main/java/com/nubo/corrected/reports/borde/models/enums/TypeFileEnum.java

```java
package com.nubo.corrected.reports.borde.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum TypeFileEnum {

    CORRECTED_REPORTS(163L);

    private final Long id;
}

```

## src/main/java/com/nubo/corrected/reports/borde/models/enums/UserTypeEnum.java

```java
package com.nubo.corrected.reports.borde.models.enums;

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

## src/main/java/com/nubo/corrected/reports/borde/models/enums/VersionApiEnum.java

```java
package com.nubo.corrected.reports.borde.models.enums;

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

## src/main/java/com/nubo/corrected/reports/borde/repository/FileGenerateRepository.java

```java
package com.nubo.corrected.reports.borde.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.corrected.reports.borde.models.entity.FileGenerateEntity;


public interface FileGenerateRepository extends JpaRepository<FileGenerateEntity, Long> {

}

```

## src/main/java/com/nubo/corrected/reports/borde/repository/StatusRepository.java

```java
package com.nubo.corrected.reports.borde.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.corrected.reports.borde.models.entity.StatusEntity;

public interface StatusRepository extends JpaRepository<StatusEntity, Long> {

}

```

## src/main/java/com/nubo/corrected/reports/borde/repository/UserNuboRepository.java

```java
package com.nubo.corrected.reports.borde.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.nubo.corrected.reports.borde.models.entity.UserNuboEntity;

public interface UserNuboRepository extends JpaRepository<UserNuboEntity, Long> {

    @Query("""
            SELECT u FROM UserNuboEntity u
            WHERE u.userName = :userName
            """)
    Optional<UserNuboEntity> findByUserName(String userName);

}

```

## src/main/java/com/nubo/corrected/reports/borde/service/ProcessMessageService.java

```java
package com.nubo.corrected.reports.borde.service;

import com.nubo.corrected.reports.borde.models.dto.request.ReportFileInDto;

public interface ProcessMessageService {

    void generateFile(ReportFileInDto reportFileInDto);

}

```

## src/main/java/com/nubo/corrected/reports/borde/service/impl/ProcessMessageServiceImpl.java

```java
package com.nubo.corrected.reports.borde.service.impl;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import com.nubo.corrected.reports.borde.application.properties.PropertiesConfig;
import com.nubo.corrected.reports.borde.application.properties.PropertiesContext;
import com.nubo.corrected.reports.borde.application.util.ApplicationUtils;
import com.nubo.corrected.reports.borde.exception.ServiceException;
import com.nubo.corrected.reports.borde.exception.error.ErrorCode;
import com.nubo.corrected.reports.borde.helpers.GenerateCsvUtil;
import com.nubo.corrected.reports.borde.kafka.producer.KafkaNuboAdapter;
import com.nubo.corrected.reports.borde.models.dto.request.ReportFileInDto;
import com.nubo.corrected.reports.borde.models.dto.response.MetaDataOutDto;
import com.nubo.corrected.reports.borde.models.dto.response.NotificationOutDto;
import com.nubo.corrected.reports.borde.models.entity.FileGenerateEntity;
import com.nubo.corrected.reports.borde.models.entity.StatusEntity;
import com.nubo.corrected.reports.borde.models.entity.UserNuboEntity;
import com.nubo.corrected.reports.borde.models.enums.NotificationEnum;
import com.nubo.corrected.reports.borde.models.enums.NotificationTypeEnum;
import com.nubo.corrected.reports.borde.models.enums.StatusFileEnum;
import com.nubo.corrected.reports.borde.repository.FileGenerateRepository;
import com.nubo.corrected.reports.borde.repository.StatusRepository;
import com.nubo.corrected.reports.borde.repository.UserNuboRepository;
import com.nubo.corrected.reports.borde.service.ProcessMessageService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class ProcessMessageServiceImpl implements ProcessMessageService {

    private final FileGenerateRepository fileGenerateRepository;
    private final StatusRepository statusRepository;
    private final UserNuboRepository userNuboRepository;
    private final GenerateCsvUtil generateCsvUtil;
    private final PropertiesConfig propertiesConfig;
    private final KafkaNuboAdapter kafkaNuboAdapter;

    @Override
    public void generateFile(ReportFileInDto reportFileInDto) {
        log.info("Start method generateFile, fileName: {}", reportFileInDto.getFileName());

        if (ObjectUtils.isEmpty(reportFileInDto.getContent())) {
            log.warn("There is no content to generate the CSV file.");
            return;
        }

        Optional<FileGenerateEntity> fileGenerateEntity = fileGenerateRepository
                .findById(reportFileInDto.getFileGenerateId());
        if (fileGenerateEntity.isEmpty()) {
            log.warn("FileGenerateEntity not found for id: {}", reportFileInDto.getFileGenerateId());
            return;
        }
        try {
            String filePath = generateCsvUtil.processSftpCsvFile(reportFileInDto);
            updateFileGenerateEntity(fileGenerateEntity.get(), filePath);

            this.sendNotification(reportFileInDto.getFileName(), reportFileInDto.getClientUser());

        } catch (Exception e) {
            log.error("Error, {}", e.getMessage());
            return;
        }
        log.info("End method generateFile");
    }

    private FileGenerateEntity updateFileGenerateEntity(FileGenerateEntity fileGenerateEntity, String filePath) {
        FileGenerateEntity fileGenerateEntitySave = fileGenerateEntity.toBuilder()
                .generationStatus(validateStatusEntity(StatusFileEnum.GENERATED.getStatusId()))
                .filePath(filePath)
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyIp(PropertiesContext.getClientIp())
                .lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyDateTime(LocalDateTime.now())
                .build();

        log.info("update fileGenerateEntity");
        return fileGenerateRepository.save(fileGenerateEntitySave);
    }

    private StatusEntity validateStatusEntity(Long statusId) {
        return statusRepository.findById(statusId)
                .orElseThrow(() -> new ServiceException(ErrorCode.STATUS_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private void sendNotification(String fileName, String userName) {
        UserNuboEntity userNuboEntity = userNuboRepository.findByUserName(userName)
                .orElseThrow(() -> new ServiceException(ErrorCode.USER_NOT_FOUND, HttpStatus.NOT_FOUND));

        NotificationOutDto notificationOutDto = NotificationOutDto.builder()
                .eventType(NotificationEnum.ID_FILE_CORRECTED_REPORTS_SUCCESS.getValue())
                .notificationId(NotificationEnum.ID_FILE_CORRECTED_REPORTS_SUCCESS.getId())
                .userIds(List.of(userNuboEntity.getId()))
                .module("DEFAULT")
                .profiles(List.of())
                .typeNotification(NotificationTypeEnum.INFORMATIVE.getDescription())
                .metadata(ApplicationUtils.convertObjectToJsonNode(MetaDataOutDto.builder()
                        .fileName(fileName)
                        .build()))
                .timestamp(ApplicationUtils.convertLocalDateTimeToString(PropertiesContext.getClientDatetime()))
                .build();
        kafkaNuboAdapter.sendNotifications(notificationOutDto);
        log.info("Notification sent successfully for user: {}", userName);
    }

}

```

## src/main/resources/application-dev.yml

```yaml
server:
  port: '@spring.port@'
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
      pool-name: '@hikari.pool.name@'
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
      topic-name-operation-corrected-reports: ${KAFKA_NUBO_TOPIC_NAME_OPERATION_CORRECTED_REPORTS}
      group-id: ${KAFKA_NUBO_GROUP_ID}
    producer:
      topic-name-notification-request: ${KAFKA_NUBO_NOTIFICATION_REQUEST_TOPIC}
client:
  ftp:
    protocol: ${FTP_PROTOCOL}
    host: ${FTP_HOST}
    port: ${FTP_PORT}
    user: ${FTP_USER}
    password: ${FTP_PASSWORD}
    input-folder: ${SFTP_CORRECTED_REPORTS_INPUT_FOLDER}
    connection-timeout-ms: ${FTP_CONNECTION_TIMEOUT_MS:30000}
    data-timeout-ms: ${FTP_DATA_TIMEOUT_MS:60000}
    retry-attempts: ${FTP_RETRY_ATTEMPTS:3}
    passive-mode: ${FTP_PASSIVE_MODE:true}
resilience4j:
  retry:
    instances:
      ftp-service:
        maxAttempts: ${FTP_RETRY_MAX_ATTEMPTS:3}
        waitDuration: ${FTP_RETRY_WAIT_DURATION_MS:1000}
        retryExceptions:
          - java.io.IOException
          - java.net.ConnectException
        ignoreExceptions:
          - java.lang.IllegalArgumentException

```

## src/main/resources/application-local.yml

```yaml
server:
  port: 8083
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
      pool-name: '@hikari.pool.name@'
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
kafka:
  nubo:
    retries: ${KAFKA_NUBO_RETRIES:5}
    bootstrap-servers: ${KAFKA_NUBO_BOOTSTRAP_SERVER}
    auto-offset-reset: ${KAFKA_NUBO_AUTO_OFFSET_RESET:latest}
    security:
      protocol: PLAINTEXT
    sasl:
      mechanism: ""
      jaas:
        config: "org.apache.kafka.common.security.scram.ScramLoginModule required;"
    consumer:
      topic-name-operation-corrected-reports: ${KAFKA_NUBO_TOPIC_NAME_OPERATION_CORRECTED_REPORTS}
      group-id: ${KAFKA_NUBO_GROUP_ID}
    producer:
      topic-name-notification-request: ${KAFKA_NUBO_NOTIFICATION_REQUEST_TOPIC}
client:
  ftp:
    protocol: ${FTP_PROTOCOL}
    host: ${FTP_HOST}
    port: ${FTP_PORT}
    user: ${FTP_USER}
    password: ${FTP_PASSWORD}
    input-folder: ${SFTP_CORRECTED_REPORTS_INPUT_FOLDER}
    connection-timeout-ms: ${FTP_CONNECTION_TIMEOUT_MS:30000}
    data-timeout-ms: ${FTP_DATA_TIMEOUT_MS:60000}
    retry-attempts: ${FTP_RETRY_ATTEMPTS:3}
    passive-mode: ${FTP_PASSIVE_MODE:true}
resilience4j:
  retry:
    instances:
      ftp-service:
        maxAttempts: ${FTP_RETRY_MAX_ATTEMPTS:3}
        waitDuration: ${FTP_RETRY_WAIT_DURATION_MS:1000}
        retryExceptions:
          - java.io.IOException
          - java.net.ConnectException
        ignoreExceptions:
          - java.lang.IllegalArgumentException

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
      topic-name-operation-corrected-reports: ${KAFKA_NUBO_TOPIC_NAME_OPERATION_CORRECTED_REPORTS}
      group-id: ${KAFKA_NUBO_GROUP_ID}
    producer:
      topic-name-notification-request: ${KAFKA_NUBO_NOTIFICATION_REQUEST_TOPIC}
client:
  ftp:
    protocol: ${FTP_PROTOCOL}
    host: ${FTP_HOST}
    port: ${FTP_PORT}
    user: ${FTP_USER}
    password: ${FTP_PASSWORD}
    input-folder: ${SFTP_CORRECTED_REPORTS_INPUT_FOLDER}
    connection-timeout-ms: ${FTP_CONNECTION_TIMEOUT_MS:30000}
    data-timeout-ms: ${FTP_DATA_TIMEOUT_MS:60000}
    retry-attempts: ${FTP_RETRY_ATTEMPTS:3}
    passive-mode: ${FTP_PASSIVE_MODE:true}
resilience4j:
  retry:
    instances:
      ftp-service:
        maxAttempts: ${FTP_RETRY_MAX_ATTEMPTS:3}
        waitDuration: ${FTP_RETRY_WAIT_DURATION_MS:1000}
        retryExceptions:
          - java.io.IOException
          - java.net.ConnectException
        ignoreExceptions:
          - java.lang.IllegalArgumentException

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
      topic-name-operation-corrected-reports: ${KAFKA_NUBO_TOPIC_NAME_OPERATION_CORRECTED_REPORTS}
      group-id: ${KAFKA_NUBO_GROUP_ID}
    producer:
      topic-name-notification-request: ${KAFKA_NUBO_NOTIFICATION_REQUEST_TOPIC}
client:
  ftp:
    protocol: ${FTP_PROTOCOL}
    host: ${FTP_HOST}
    port: ${FTP_PORT}
    user: ${FTP_USER}
    password: ${FTP_PASSWORD}
    input-folder: ${SFTP_CORRECTED_REPORTS_INPUT_FOLDER}
    connection-timeout-ms: ${FTP_CONNECTION_TIMEOUT_MS:30000}
    data-timeout-ms: ${FTP_DATA_TIMEOUT_MS:60000}
    retry-attempts: ${FTP_RETRY_ATTEMPTS:3}
    passive-mode: ${FTP_PASSIVE_MODE:true}
resilience4j:
  retry:
    instances:
      ftp-service:
        maxAttempts: ${FTP_RETRY_MAX_ATTEMPTS:3}
        waitDuration: ${FTP_RETRY_WAIT_DURATION_MS:1000}
        retryExceptions:
          - java.io.IOException
          - java.net.ConnectException
        ignoreExceptions:
          - java.lang.IllegalArgumentException

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
      topic-name-operation-corrected-reports: ${KAFKA_NUBO_TOPIC_NAME_OPERATION_CORRECTED_REPORTS}
      group-id: ${KAFKA_NUBO_GROUP_ID}
    producer:
      topic-name-notification-request: ${KAFKA_NUBO_NOTIFICATION_REQUEST_TOPIC}
client:
  ftp:
    protocol: ${FTP_PROTOCOL}
    host: ${FTP_HOST}
    port: ${FTP_PORT}
    user: ${FTP_USER}
    password: ${FTP_PASSWORD}
    input-folder: ${SFTP_CORRECTED_REPORTS_INPUT_FOLDER}
    connection-timeout-ms: ${FTP_CONNECTION_TIMEOUT_MS:30000}
    data-timeout-ms: ${FTP_DATA_TIMEOUT_MS:60000}
    retry-attempts: ${FTP_RETRY_ATTEMPTS:3}
    passive-mode: ${FTP_PASSIVE_MODE:true}
resilience4j:
  retry:
    instances:
      ftp-service:
        maxAttempts: ${FTP_RETRY_MAX_ATTEMPTS:3}
        waitDuration: ${FTP_RETRY_WAIT_DURATION_MS:1000}
        retryExceptions:
          - java.io.IOException
          - java.net.ConnectException
        ignoreExceptions:
          - java.lang.IllegalArgumentException

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
 ,-----. ,-----. ,------. ,------. ,------. ,-----.,--------.,------.,------.   ,------. ,------.,------. ,-----. ,------.,--------.,---.   ,-----.   ,-----. ,------. ,------.  ,------.
'  .--./'  .-.  '|  .--. '|  .--. '|  .---''  .--./'--.  .--'|  .---'|  .-.  \  |  .--. '|  .---'|  .--. '  .-.  '|  .--. '--.  .--'   .-'  |  |) /_ '  .-.  '|  .--. '|  .-.  \ |  .---'
|  |    |  | |  ||  '--'.'|  '--'.'|  `--, |  |       |  |   |  `--, |  |  \  : |  '--'.'|  `--, |  '--' |  | |  ||  '--'.'  |  |  `.  `-.  |  .-.  \|  | |  ||  '--'.'|  |  \  :|  `--,
'  '--'\'  '-'  '|  |\  \ |  |\  \ |  `---.'  '--'\   |  |   |  `---.|  '--'  / |  |\  \ |  `---.|  | --''  '-'  '|  |\  \   |  |  .-'    | |  '--' /'  '-'  '|  |\  \ |  '--'  /|  `---.
 `-----' `-----' `--' '--'`--' '--'`------' `-----'   `--'   `------'`-------'  `--' '--'`------'`--'     `-----' `--' '--'  `--'  `-----'  `------'  `-----' `--' '--'`-------' `------'

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
