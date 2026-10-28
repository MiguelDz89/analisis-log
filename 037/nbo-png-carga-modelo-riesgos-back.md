# nbo-png-carga-modelo-riesgos-back

Código Java de producción y configuraciones, sin tests. Cada sección contiene el archivo original completo y su ruta. Captura: 28/10/2026.

## Índice

1. `.mvn/wrapper/maven-wrapper.properties`
2. `mvnw`
3. `mvnw.cmd`
4. `pom.xml`
5. `src/main/java/com/nubo/risk/model/load/api/RiskModelLoadApiApplication.java`
6. `src/main/java/com/nubo/risk/model/load/api/application/config/KafkaProducerConfig.java`
7. `src/main/java/com/nubo/risk/model/load/api/application/config/SwaggerConfig.java`
8. `src/main/java/com/nubo/risk/model/load/api/application/config/WebConfig.java`
9. `src/main/java/com/nubo/risk/model/load/api/application/context/GlobalContext.java`
10. `src/main/java/com/nubo/risk/model/load/api/application/database/NamingStrategyConfig.java`
11. `src/main/java/com/nubo/risk/model/load/api/application/database/UpperNamingConfig.java`
12. `src/main/java/com/nubo/risk/model/load/api/application/filters/GlobalFilter.java`
13. `src/main/java/com/nubo/risk/model/load/api/application/interceptors/GlobalInterceptor.java`
14. `src/main/java/com/nubo/risk/model/load/api/application/properties/PropertiesConfig.java`
15. `src/main/java/com/nubo/risk/model/load/api/application/properties/PropertiesContext.java`
16. `src/main/java/com/nubo/risk/model/load/api/application/util/ApplicationUtils.java`
17. `src/main/java/com/nubo/risk/model/load/api/application/util/CsvValidatorUtils.java`
18. `src/main/java/com/nubo/risk/model/load/api/application/util/NonEmptyLineFilter.java`
19. `src/main/java/com/nubo/risk/model/load/api/client/kafka/producer/dto/request/RiskModelInDto.java`
20. `src/main/java/com/nubo/risk/model/load/api/client/kafka/producer/service/KafkaNuboProducer.java`
21. `src/main/java/com/nubo/risk/model/load/api/client/kafka/producer/service/impl/KafkaNuboProducerImpl.java`
22. `src/main/java/com/nubo/risk/model/load/api/client/risk/model/loader/models/dto/response/InstrumentFinancialOutDto.java`
23. `src/main/java/com/nubo/risk/model/load/api/client/risk/model/loader/service/RiskModelLoadFastApiService.java`
24. `src/main/java/com/nubo/risk/model/load/api/client/risk/model/loader/service/impl/RiskModelLoadFastApiServiceImpl.java`
25. `src/main/java/com/nubo/risk/model/load/api/exception/ServiceException.java`
26. `src/main/java/com/nubo/risk/model/load/api/exception/error/ErrorCode.java`
27. `src/main/java/com/nubo/risk/model/load/api/exception/error/ErrorResponse.java`
28. `src/main/java/com/nubo/risk/model/load/api/exception/error/ErrorValidation.java`
29. `src/main/java/com/nubo/risk/model/load/api/exception/handler/CsvFileExceptionHandler.java`
30. `src/main/java/com/nubo/risk/model/load/api/exception/handler/CustomKafkaErrorHandler.java`
31. `src/main/java/com/nubo/risk/model/load/api/exception/handler/GlobalExceptionHandler.java`
32. `src/main/java/com/nubo/risk/model/load/api/exception/kafka/KafkaErrorBuild.java`
33. `src/main/java/com/nubo/risk/model/load/api/helpers/SendNotificationUtil.java`
34. `src/main/java/com/nubo/risk/model/load/api/models/dto/request/NotificationRequestDto.java`
35. `src/main/java/com/nubo/risk/model/load/api/models/dto/request/RiskModelParameterCsvInDto.java`
36. `src/main/java/com/nubo/risk/model/load/api/models/dto/response/RiskModelExternalOutDto.java`
37. `src/main/java/com/nubo/risk/model/load/api/models/dto/response/RiskModelLoadOutDto.java`
38. `src/main/java/com/nubo/risk/model/load/api/models/entity/LogEventEntity.java`
39. `src/main/java/com/nubo/risk/model/load/api/models/entity/ParticipantEntity.java`
40. `src/main/java/com/nubo/risk/model/load/api/models/entity/PermissionEntity.java`
41. `src/main/java/com/nubo/risk/model/load/api/models/entity/ProfileEntity.java`
42. `src/main/java/com/nubo/risk/model/load/api/models/entity/TypeEntity.java`
43. `src/main/java/com/nubo/risk/model/load/api/models/entity/UserNuboEntity.java`
44. `src/main/java/com/nubo/risk/model/load/api/models/enums/ErrorLoadEnum.java`
45. `src/main/java/com/nubo/risk/model/load/api/models/enums/FileCsvColumnEnum.java`
46. `src/main/java/com/nubo/risk/model/load/api/models/enums/NotificationMessageEnum.java`
47. `src/main/java/com/nubo/risk/model/load/api/models/enums/NotificationProfileEnum.java`
48. `src/main/java/com/nubo/risk/model/load/api/models/enums/NotificationTypeEnum.java`
49. `src/main/java/com/nubo/risk/model/load/api/models/enums/PropertiesEnum.java`
50. `src/main/java/com/nubo/risk/model/load/api/models/enums/TypeEnum.java`
51. `src/main/java/com/nubo/risk/model/load/api/models/enums/UserGroupEnum.java`
52. `src/main/java/com/nubo/risk/model/load/api/models/enums/UserTypeEnum.java`
53. `src/main/java/com/nubo/risk/model/load/api/models/enums/VersionApiEnum.java`
54. `src/main/java/com/nubo/risk/model/load/api/repository/LogEventRepository.java`
55. `src/main/java/com/nubo/risk/model/load/api/repository/TypeRepository.java`
56. `src/main/java/com/nubo/risk/model/load/api/repository/UserNuboRepository.java`
57. `src/main/java/com/nubo/risk/model/load/api/service/RiskModelApiLoadService.java`
58. `src/main/java/com/nubo/risk/model/load/api/service/RiskModelAutomaticService.java`
59. `src/main/java/com/nubo/risk/model/load/api/service/RiskModelInterface.java`
60. `src/main/java/com/nubo/risk/model/load/api/service/RiskModelLoadService.java`
61. `src/main/java/com/nubo/risk/model/load/api/service/impl/RiskModelApiLoadServiceImpl.java`
62. `src/main/java/com/nubo/risk/model/load/api/service/impl/RiskModelAutomaticServiceImpl.java`
63. `src/main/java/com/nubo/risk/model/load/api/service/impl/RiskModelLoadServiceImpl.java`
64. `src/main/java/com/nubo/risk/model/load/api/web/controller/RiskModelLoadRestController.java`
65. `src/main/resources/application-dev.yml`
66. `src/main/resources/application-local.yml`
67. `src/main/resources/application-prod.yml`
68. `src/main/resources/application-qa.yml`
69. `src/main/resources/application-uat.yml`
70. `src/main/resources/application.yml`
71. `src/main/resources/banner.txt`
72. `src/main/resources/log/JsonEventLayout_error.json`
73. `src/main/resources/log/JsonEventLayout_info.json`
74. `src/main/resources/log/JsonEventLayout_trace.json`
75. `src/main/resources/log/log4j2-prod.properties`
76. `src/main/resources/log/log4j2.properties`

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
        <version>3.5.6</version>
        <relativePath/>
    </parent>
    <groupId>com.nubo.risk.model.load.api</groupId>
    <artifactId>risk-model-load-api</artifactId>
    <version>0.19.4</version>
    <name>${project.artifactId}</name>
    <description>Risk Model Load Api</description>

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
            <version>42.7.7</version>
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
        <!-- Json -->
        <dependency>
            <groupId>com.google.code.gson</groupId>
            <artifactId>gson</artifactId>
            <version>2.11.0</version>
        </dependency>
        <!-- File CSV -->
        <dependency>
            <groupId>com.opencsv</groupId>
            <artifactId>opencsv</artifactId>
            <version>5.11</version>
        </dependency>
        <dependency>
            <groupId>commons-beanutils</groupId>
            <artifactId>commons-beanutils</artifactId>
            <version>1.11.0</version>
        </dependency>
        <dependency>
            <groupId>org.apache.tika</groupId>
            <artifactId>tika-parsers-standard-package</artifactId>
            <version>3.2.2</version>
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
            <groupId>org.apache.tomcat.embed</groupId>
            <artifactId>tomcat-embed-core</artifactId>
            <version>10.1.47</version>
        </dependency>
        <dependency>
            <groupId>commons-io</groupId>
            <artifactId>commons-io</artifactId>
            <version>2.18.0</version>
        </dependency>
        <dependency>
            <groupId>org.xmlunit</groupId>
            <artifactId>xmlunit-core</artifactId>
            <version>2.10.0</version>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>org.eclipse.jetty</groupId>
            <artifactId>jetty-http</artifactId>
            <version>12.1.2</version>
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
                                <exclude>**/RiskModelLoadApiApplication.class</exclude>
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

## src/main/java/com/nubo/risk/model/load/api/RiskModelLoadApiApplication.java

```java
package com.nubo.risk.model.load.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.retry.annotation.EnableRetry;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
public class RiskModelLoadApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(RiskModelLoadApiApplication.class, args);
	}

}

```

## src/main/java/com/nubo/risk/model/load/api/application/config/KafkaProducerConfig.java

```java
package com.nubo.risk.model.load.api.application.config;

import com.nubo.risk.model.load.api.application.properties.PropertiesConfig;
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

## src/main/java/com/nubo/risk/model/load/api/application/config/SwaggerConfig.java

```java
package com.nubo.risk.model.load.api.application.config;

import com.nubo.risk.model.load.api.exception.error.ErrorResponse;
import com.nubo.risk.model.load.api.exception.error.ErrorValidation;
import com.nubo.risk.model.load.api.models.enums.PropertiesEnum;
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

## src/main/java/com/nubo/risk/model/load/api/application/config/WebConfig.java

```java
package com.nubo.risk.model.load.api.application.config;

import com.nubo.risk.model.load.api.application.interceptors.GlobalInterceptor;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestClient;
import org.springframework.web.servlet.LocaleResolver;
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

## src/main/java/com/nubo/risk/model/load/api/application/context/GlobalContext.java

```java
package com.nubo.risk.model.load.api.application.context;

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

## src/main/java/com/nubo/risk/model/load/api/application/database/NamingStrategyConfig.java

```java
package com.nubo.risk.model.load.api.application.database;

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

## src/main/java/com/nubo/risk/model/load/api/application/database/UpperNamingConfig.java

```java
package com.nubo.risk.model.load.api.application.database;

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

## src/main/java/com/nubo/risk/model/load/api/application/filters/GlobalFilter.java

```java
package com.nubo.risk.model.load.api.application.filters;

import com.nubo.risk.model.load.api.application.context.GlobalContext;
import com.nubo.risk.model.load.api.application.util.ApplicationUtils;
import com.nubo.risk.model.load.api.exception.ServiceException;
import com.nubo.risk.model.load.api.exception.error.ErrorCode;
import com.nubo.risk.model.load.api.exception.error.ErrorResponse;
import com.nubo.risk.model.load.api.models.enums.PropertiesEnum;
import com.nubo.risk.model.load.api.models.enums.VersionApiEnum;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpHeaders;
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
        response.getWriter().write(ApplicationUtils.convertObjectToJson(errorResponse, false));
        response.setStatus(exception.getHttpStatus().value());

        log.error("Error -> {}", errorResponse);
    }

}



```

## src/main/java/com/nubo/risk/model/load/api/application/interceptors/GlobalInterceptor.java

```java
package com.nubo.risk.model.load.api.application.interceptors;

import com.nubo.risk.model.load.api.application.context.GlobalContext;
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

## src/main/java/com/nubo/risk/model/load/api/application/properties/PropertiesConfig.java

```java
package com.nubo.risk.model.load.api.application.properties;

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

    @Value("${kafka.nubo.sasl.mechanism}")
    private String kafkaNuboSaslMechanism;

    @Value("${kafka.nubo.sasl.jaas.config}")
    private String kafkaNuboSaslJaasConfig;

    @Value("${kafka.nubo.security.protocol}")
    private String kafkaNuboSecurityProtocol;

    @Value("${kafka.nubo.retries}")
    private Integer kafkaNuboRetries;

    @Value("${kafka.nubo.auto-offset-reset}")
    private String kafkaNuboAutoOffsetReset;

    @Value("${kafka.nubo.topic-name-risk-model-load}")
    private String kafkaNuboTopicNameRiskModelLoad;

    @Value("${kafka.nubo.notification.id:23}")
    private String kafkaNuboNotificationId;

    @Value("${kafka.nubo.notification.event-type}")
    private String kafkaNuboNotificationEventType;

    @Value("${kafka.nubo.notification.module}")
    private String kafkaNuboNotificationModule;

    @Value("${kafka.nubo.notification.kafka-notification-request-topic}")
    private String kafkaNuboNotificationTopic;

}

```

## src/main/java/com/nubo/risk/model/load/api/application/properties/PropertiesContext.java

```java
package com.nubo.risk.model.load.api.application.properties;

import com.nubo.risk.model.load.api.application.context.GlobalContext;
import com.nubo.risk.model.load.api.application.util.ApplicationUtils;
import com.nubo.risk.model.load.api.models.enums.PropertiesEnum;

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

    public static String getAuthToken() {
        return GlobalContext.getProperty(PropertiesEnum.AUTH_TOKEN.getValue());
    }

}


```

## src/main/java/com/nubo/risk/model/load/api/application/util/ApplicationUtils.java

```java
package com.nubo.risk.model.load.api.application.util;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

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

    public static String convertObjectToJson(Object object, boolean isFile) {
        GsonBuilder builder = new GsonBuilder();
        if (isFile) {
            builder.disableHtmlEscaping();
        }
        Gson gson = builder.create();
        return gson.toJson(object);
    }

}


```

## src/main/java/com/nubo/risk/model/load/api/application/util/CsvValidatorUtils.java

```java
package com.nubo.risk.model.load.api.application.util;

import lombok.extern.slf4j.Slf4j;
import org.apache.tika.parser.txt.CharsetDetector;
import org.apache.tika.parser.txt.CharsetMatch;

import java.io.BufferedInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.util.Arrays;
import java.util.Comparator;
import java.util.Map;
import java.util.regex.Pattern;

@Slf4j
public class CsvValidatorUtils {

    private CsvValidatorUtils() {
    }

    private static final int DETECTION_BUFFER_SIZE = 4096;

    public static InputStreamReader getReaderAdaptive(InputStream is) throws IOException {
        BufferedInputStream bis = new BufferedInputStream(is);
        bis.mark(DETECTION_BUFFER_SIZE);

        CharsetDetector detector = new CharsetDetector();
        detector.setText(bis);
        CharsetMatch match = detector.detect();
        bis.reset();
        Charset charset = (match != null) ? Charset.forName(match.getName()) : StandardCharsets.UTF_8;

        bis.mark(3);
        byte[] bom = new byte[3];
        int bomRead = bis.read(bom);
        if (!(bomRead == 3 &&
                (bom[0] & 0xFF) == 0xEF &&
                (bom[1] & 0xFF) == 0xBB &&
                (bom[2] & 0xFF) == 0xBF)) {
            bis.reset();
        }

        return new InputStreamReader(bis, charset);
    }

    public static String detectSeparator(String headerLine) {
        String[] possibleSeparators = {",", ";", "\t", "|"};
        return Arrays.stream(possibleSeparators)
                .map(sep -> Map.entry(sep, countOccurrences(headerLine, sep)))
                .max(Comparator.comparingInt(Map.Entry::getValue))
                .orElse(Map.entry(",", 0))
                .getKey();
    }

    private static int countOccurrences(String line, String separator) {
        return line.split(Pattern.quote(separator), -1).length - 1;
    }
}

```

## src/main/java/com/nubo/risk/model/load/api/application/util/NonEmptyLineFilter.java

```java
package com.nubo.risk.model.load.api.application.util;

import com.opencsv.bean.CsvToBeanFilter;

public class NonEmptyLineFilter implements CsvToBeanFilter {
    @Override
    public boolean allowLine(String[] line) {
        for (String cell : line) {
            if (cell != null && !cell.trim().isEmpty()) {
                return true;
            }
        }
        return false;
    }
}

```

## src/main/java/com/nubo/risk/model/load/api/client/kafka/producer/dto/request/RiskModelInDto.java

```java
package com.nubo.risk.model.load.api.client.kafka.producer.dto.request;

import com.nubo.risk.model.load.api.models.dto.response.RiskModelExternalOutDto;
import com.nubo.risk.model.load.api.service.RiskModelInterface;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RiskModelInDto {

    private String clientIp;

    private String clientUser;

    private String loadType;

    private List<RiskModelInterface> riskModels;

    private List<RiskModelExternalOutDto> riskModelExternal;
}

```

## src/main/java/com/nubo/risk/model/load/api/client/kafka/producer/service/KafkaNuboProducer.java

```java
package com.nubo.risk.model.load.api.client.kafka.producer.service;

import com.nubo.risk.model.load.api.client.kafka.producer.dto.request.RiskModelInDto;

public interface KafkaNuboProducer {

    void sendMessageRiskModelLoad(RiskModelInDto riskModelOutDto);

}

```

## src/main/java/com/nubo/risk/model/load/api/client/kafka/producer/service/impl/KafkaNuboProducerImpl.java

```java
package com.nubo.risk.model.load.api.client.kafka.producer.service.impl;

import com.nubo.risk.model.load.api.application.properties.PropertiesConfig;
import com.nubo.risk.model.load.api.application.properties.PropertiesContext;
import com.nubo.risk.model.load.api.application.util.ApplicationUtils;
import com.nubo.risk.model.load.api.client.kafka.producer.dto.request.RiskModelInDto;
import com.nubo.risk.model.load.api.client.kafka.producer.service.KafkaNuboProducer;
import com.nubo.risk.model.load.api.exception.ServiceException;
import com.nubo.risk.model.load.api.exception.error.ErrorCode;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.SendResult;
import org.springframework.stereotype.Service;

import java.util.concurrent.CompletableFuture;

@Service
@RequiredArgsConstructor
@Slf4j
public class KafkaNuboProducerImpl implements KafkaNuboProducer {

    private final PropertiesConfig propertiesConfig;
    private final KafkaTemplate<String, String> kafkaNuboTemplate;

    public void sendMessageRiskModelLoad(RiskModelInDto riskModelInDto) {
        log.debug("Start method sendKafkaMessageRiskModelLoad, riskModelInDto -> {}", riskModelInDto);

        riskModelInDto.setClientUser(PropertiesContext.getClientUser());
        riskModelInDto.setClientIp(PropertiesContext.getClientIp());

        String topic = propertiesConfig.getKafkaNuboTopicNameRiskModelLoad();
        String jsonString = ApplicationUtils.convertObjectToJson(riskModelInDto, true);
        CompletableFuture<SendResult<String, String>> future = kafkaNuboTemplate.send(topic, jsonString).toCompletableFuture();

        future.thenAccept(result -> log.info("Send message Kafka Risk Model -- Topic: {} -- offset: {} -- json: {} ",
                        topic, result.getRecordMetadata().offset(), jsonString))
                .exceptionally(ex -> {
                    throw new ServiceException(ErrorCode.ERROR_KAFKA_PRODUCER_NUBO, ex);
                });
    }

    public void sendMessageNotification(String message) {
        if(message != null){
            String topic = propertiesConfig.getKafkaNuboNotificationTopic();
            CompletableFuture<SendResult<String, String>> future = kafkaNuboTemplate.send(topic, message).toCompletableFuture();

            future.thenAccept(result -> log.info("Send message -- Topic: {} -- offset: {} -- json: {} ",
                            topic, result.getRecordMetadata().offset(), message) )
                    .exceptionally(ex -> {
                        throw new ServiceException(ErrorCode.ERROR_KAFKA_PRODUCER_NUBO, ex);
                    });
        }
    }

}

```

## src/main/java/com/nubo/risk/model/load/api/client/risk/model/loader/models/dto/response/InstrumentFinancialOutDto.java

```java
package com.nubo.risk.model.load.api.client.risk.model.loader.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.nubo.risk.model.load.api.service.RiskModelInterface;
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
public class InstrumentFinancialOutDto implements RiskModelInterface {

    @NotNull
    @JsonProperty("Fecha")
    private String date;

    @JsonProperty("Nemotecnico")
    private String mnemonic;

    @JsonProperty("ISIN")
    private String isin;

    @JsonProperty("Precio")
    private String price;

    @JsonProperty("Mercado")
    private String market;

    @JsonProperty("Moneda")
    private String currency;

    @JsonProperty("Pais")
    private String country;

    @JsonProperty("Admisibilidad")
    private String admissibility;

    @JsonProperty("Riesgo_General")
    private String generalRisk;

    @JsonProperty("Riesgo_Moneda")
    private String currencyRisk;

    @JsonProperty("Cantidad_registros")
    private String quantity;
}

```

## src/main/java/com/nubo/risk/model/load/api/client/risk/model/loader/service/RiskModelLoadFastApiService.java

```java
package com.nubo.risk.model.load.api.client.risk.model.loader.service;

import com.nubo.risk.model.load.api.client.risk.model.loader.models.dto.response.InstrumentFinancialOutDto;

import java.util.List;

public interface RiskModelLoadFastApiService {

    List<InstrumentFinancialOutDto> getInstrumentsFastAPI();

}

```

## src/main/java/com/nubo/risk/model/load/api/client/risk/model/loader/service/impl/RiskModelLoadFastApiServiceImpl.java

```java
package com.nubo.risk.model.load.api.client.risk.model.loader.service.impl;


import com.nubo.risk.model.load.api.application.properties.PropertiesConfig;
import com.nubo.risk.model.load.api.client.risk.model.loader.models.dto.response.InstrumentFinancialOutDto;
import com.nubo.risk.model.load.api.client.risk.model.loader.service.RiskModelLoadFastApiService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
@Slf4j
public class RiskModelLoadFastApiServiceImpl implements RiskModelLoadFastApiService {

    private final PropertiesConfig propertiesConfig;

    private static final String SLASH = "/";
    private static final String AUTHORIZATION = "Authorization";
    private static final String BEARER = "Bearer";
    private static final String PATH_OPERATION_SPECIAL_RULES = "operation-special-business-rules";
    private final RestTemplate restTemplate = new RestTemplate();
    private static final String BASE_URL = "http://api-modelo-riesgos-service";


    public List<InstrumentFinancialOutDto> getInstrumentsFastAPI() {
        String url = BASE_URL + "/instrumentos";
        ResponseEntity<InstrumentFinancialOutDto[]> response =
                restTemplate.getForEntity(url, InstrumentFinancialOutDto[].class);
        return Arrays.asList(Objects.requireNonNull(response.getBody()));
    }
}

```

## src/main/java/com/nubo/risk/model/load/api/exception/ServiceException.java

```java
package com.nubo.risk.model.load.api.exception;

import com.nubo.risk.model.load.api.exception.error.ErrorCode;
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

## src/main/java/com/nubo/risk/model/load/api/exception/error/ErrorCode.java

```java
package com.nubo.risk.model.load.api.exception.error;

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
    RATE_LIMITING_EXCEEDED("Rate Limiting Exceeded"),
    HEADER_CLIENT_IP_REQUIRED("Header client_ip required"),
    HEADER_CLIENT_IP_INVALID("Header client_ip is invalid"),
    HEADER_CLIENT_USER_REQUIRED("Header client_user is required"),
    HEADER_CLIENT_DATETIME_REQUIRED("Header client_datetime is required"),
    HEADER_CLIENT_DATETIME_INVALID("Header client_datetime is invalid"),
    VERSION_API_NOT_FOUND("Version API not found"),
    MANUAL_TYPE_NOT_FOUND("Manual Type not found"),
    AUTOMATIC_TYPE_NOT_FOUND("Automatic Type not found"),
    ERROR_KAFKA_PRODUCER_NUBO("Error Producer Kafka Nubo"),
    ERROR_DESERIALIZER_JSON("Error Deserializer Json"),
    ERROR_INVALID_FILE("Error Invalid File"),
    ERROR_UNSUPPORTED_MEDIA_TYPE("Error Invalid Format File"),
    INVALID_CSV_STRUCTURE("Error invalid structure file");

    private final String message;

    ErrorCode(String message) {
        this.message = message;
    }

    public String getName() {
        return this.name();
    }

}

```

## src/main/java/com/nubo/risk/model/load/api/exception/error/ErrorResponse.java

```java
package com.nubo.risk.model.load.api.exception.error;

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

## src/main/java/com/nubo/risk/model/load/api/exception/error/ErrorValidation.java

```java
package com.nubo.risk.model.load.api.exception.error;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ErrorValidation {

    private String id;
    private String description;

}

```

## src/main/java/com/nubo/risk/model/load/api/exception/handler/CsvFileExceptionHandler.java

```java
package com.nubo.risk.model.load.api.exception.handler;

import com.nubo.risk.model.load.api.exception.error.ErrorCode;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public class CsvFileExceptionHandler extends RuntimeException {
    private final HttpStatus status;
    private final ErrorCode errorCode;

    public CsvFileExceptionHandler(String message, HttpStatus status, ErrorCode errorCode) {
        super(message);
        this.status = status;
        this.errorCode = errorCode;
    }

}

```

## src/main/java/com/nubo/risk/model/load/api/exception/handler/CustomKafkaErrorHandler.java

```java
package com.nubo.risk.model.load.api.exception.handler;

import com.nubo.risk.model.load.api.exception.ServiceException;
import com.nubo.risk.model.load.api.exception.error.ErrorCode;
import com.nubo.risk.model.load.api.exception.kafka.KafkaErrorBuild;
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
            kafkaErrorBuild.buildError(exception, ErrorCode.ERROR_KAFKA_PRODUCER_NUBO);
        }
    }

}
```

## src/main/java/com/nubo/risk/model/load/api/exception/handler/GlobalExceptionHandler.java

```java
package com.nubo.risk.model.load.api.exception.handler;

import com.nubo.risk.model.load.api.application.properties.PropertiesContext;
import com.nubo.risk.model.load.api.exception.ServiceException;
import com.nubo.risk.model.load.api.exception.error.ErrorCode;
import com.nubo.risk.model.load.api.exception.error.ErrorResponse;
import com.nubo.risk.model.load.api.exception.error.ErrorValidation;
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
import org.springframework.web.method.annotation.HandlerMethodValidationException;
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

    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<ErrorResponse> handlerRuntimeException(RuntimeException exception,
                                                                 HttpServletRequest request) {
        return buildErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, exception, request, ErrorCode.UNEXPECTED);
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

    @ExceptionHandler(CsvFileExceptionHandler.class)
    public ResponseEntity<ErrorResponse> handleCsvFileException(CsvFileExceptionHandler exception,
                                                                HttpServletRequest request) {
        HttpStatus status = exception.getStatus() != null ? exception.getStatus() : HttpStatus.BAD_REQUEST;
        ErrorCode errorCode = exception.getErrorCode();
        return buildErrorResponse(status, exception, request, errorCode);
    }

    @ExceptionHandler(HandlerMethodValidationException.class)
    public ResponseEntity<ErrorResponse> handleMethodValidationException(HandlerMethodValidationException exception,
                                                                         HttpServletRequest request) {

        List<ErrorValidation> errors = exception.getParameterValidationResults().stream()
                .flatMap(parameterValidationResult -> parameterValidationResult.getResolvableErrors().stream()
                        .map(error -> ErrorValidation.builder()
                                .id(error != null ? "[" + parameterValidationResult.getContainerIndex() + "]." +
                                        removeIntermediatePart(Objects.requireNonNull(error.getCodes())[1]) : "unknown")
                                .description(error != null ? error.getDefaultMessage() : "unknown")
                                .build()))
                .toList();
        return buildErrorResponse(HttpStatus.BAD_REQUEST, exception, request, ErrorCode.BAD_REQUEST, errors);
    }

    private String removeIntermediatePart(String str) {
        Pattern pattern = Pattern.compile("\\.(\\w+)$");
        Matcher matcher = pattern.matcher(str);
        if (matcher.find()) {
            return matcher.group(1);
        }
        return str;
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
                .timestamp(String.valueOf(PropertiesContext.getClientDatetime()))
                .errorDetails(errorDetails)
                .build();

        log.error("Error -> {}", errorResponse);

        return ResponseEntity.status(status).body(errorResponse);
    }

}


```

## src/main/java/com/nubo/risk/model/load/api/exception/kafka/KafkaErrorBuild.java

```java
package com.nubo.risk.model.load.api.exception.kafka;

import com.nubo.risk.model.load.api.application.properties.PropertiesConfig;
import com.nubo.risk.model.load.api.exception.error.ErrorCode;
import com.nubo.risk.model.load.api.exception.error.ErrorResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
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
        ErrorResponse errorResponse = ErrorResponse.builder()
                .httpCode(String.valueOf(HttpStatus.INTERNAL_SERVER_ERROR.value()))
                .url(propertiesConfig.getKafkaNuboBootstrapServers())
                .errorCode(errorCode.getName())
                .errorMessage(errorCode.getMessage())
                .errorMessageDetail(ObjectUtils.isEmpty(exception.getCause()) ?
                        exception.getMessage() : exception.getCause().getMessage())
                .timestamp(String.valueOf(LocalDateTime.now()))
                .build();

        log.error("Error -> {}", errorResponse);
    }

}
```

## src/main/java/com/nubo/risk/model/load/api/helpers/SendNotificationUtil.java

```java
package com.nubo.risk.model.load.api.helpers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.nubo.risk.model.load.api.application.properties.PropertiesConfig;
import com.nubo.risk.model.load.api.client.kafka.producer.service.impl.KafkaNuboProducerImpl;
import com.nubo.risk.model.load.api.models.dto.request.NotificationRequestDto;
import com.nubo.risk.model.load.api.models.enums.NotificationMessageEnum;
import com.nubo.risk.model.load.api.models.enums.NotificationTypeEnum;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Log4j2
@Component
@RequiredArgsConstructor
public class SendNotificationUtil {
    
    private final ObjectMapper objectMapper;
    private final PropertiesConfig propertiesConfig;
    
    @Autowired(required = false)
    private KafkaNuboProducerImpl kafkaNuboAdapter;
    
    public void sendNotification(NotificationTypeEnum notificationType, NotificationMessageEnum notificationMessage, Long scheduleExtensionId, List<Long> userIds) {
        if (kafkaNuboAdapter != null) {
            log.info("Enviando notificación tipo: {} - mensaje: {} - scheduleExtensionId: {} - userIds: {}", 
                    notificationType.getDescription(), notificationMessage.getDescription(), scheduleExtensionId, userIds);
            try {
                ObjectMapper mapper = new ObjectMapper();
                ObjectNode metadataNode = mapper.createObjectNode();
                if (scheduleExtensionId != null) {
                    metadataNode.put("id", scheduleExtensionId.toString());
                }
                
                NotificationRequestDto notification = NotificationRequestDto.builder()
                        .notificacionId(notificationMessage.getCode().longValue())
                        .tipoNotificacion(notificationType.getDescription())
                        .eventType(propertiesConfig.getKafkaNuboNotificationEventType())
                        .modulo(propertiesConfig.getKafkaNuboNotificationModule())
                        .usuariosIds(userIds != null ? userIds : List.of())
                        .timestamp(
                                java.time.OffsetDateTime.now(java.time.ZoneOffset.UTC)
                                        .withNano(0)
                                        .toString())
                        .metadata(metadataNode)
                        .build();
                        
                kafkaNuboAdapter.sendMessageNotification(objectMapper.writeValueAsString(notification));
                log.info("Notificación enviada exitosamente para usuarios: {}", userIds);
                
            } catch (Exception e) {
                log.error("Error enviando notificación a Kafka", e);
            }
        } else {
            log.info("KafkaNuboAdapter no disponible, omitiendo envío de notificación");
        }
    }
}

```

## src/main/java/com/nubo/risk/model/load/api/models/dto/request/NotificationRequestDto.java

```java
package com.nubo.risk.model.load.api.models.dto.request;

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
public class NotificationRequestDto
{

    String eventType;

    Long notificacionId;

    List<Long> usuariosIds;

    String modulo;

    List<String> perfiles;

    String tipoNotificacion;

    JsonNode metadata;

    String timestamp;

}

```

## src/main/java/com/nubo/risk/model/load/api/models/dto/request/RiskModelParameterCsvInDto.java

```java
package com.nubo.risk.model.load.api.models.dto.request;

import com.nubo.risk.model.load.api.service.RiskModelInterface;
import com.opencsv.bean.CsvBindByName;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RiskModelParameterCsvInDto implements RiskModelInterface {

    @CsvBindByName(column = "fecha", required = true)
    private String date;

    @CsvBindByName(column = "nemotecnico", required = true)
    private String mnemonic;

    @CsvBindByName(column = "isin", required = true)
    private String isin;

    @CsvBindByName(column = "Precio", required = true)
    private String price;

    @CsvBindByName(column = "Mercado", required = true)
    private String market;

    @CsvBindByName(column = "Moneda", required = true)
    private String currency;

    @CsvBindByName(column = "Pais", required = true)
    private String country;

    @CsvBindByName(column = "Admisibilidad", required = true)
    private String admissibility;

    @CsvBindByName(column = "Riesgo General", required = true)
    private String generalRisk;

    @CsvBindByName(column = "Riesgo Moneda", required = true)
    private String currencyRisk;
}

```

## src/main/java/com/nubo/risk/model/load/api/models/dto/response/RiskModelExternalOutDto.java

```java
package com.nubo.risk.model.load.api.models.dto.response;

import com.nubo.risk.model.load.api.service.RiskModelInterface;
import com.opencsv.bean.CsvBindByName;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RiskModelExternalOutDto  {

    private String date;

    private String mnemonic;

    private String isin;

    private String market;

    private String price;

    private String currency;

    private String country;

    private String admissibility;

    private String generalRisk;

    private String currencyRisk;
    
    private String quantity;
}

```

## src/main/java/com/nubo/risk/model/load/api/models/dto/response/RiskModelLoadOutDto.java

```java
package com.nubo.risk.model.load.api.models.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RiskModelLoadOutDto {

    private LocalDate uploadDate;

    private boolean isLoaded;

}

```

## src/main/java/com/nubo/risk/model/load/api/models/entity/LogEventEntity.java

```java
package com.nubo.risk.model.load.api.models.entity;

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
@Table(name = "\"LOG_EVENT\"", schema = "\"NUANBODB\"")
public class LogEventEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"LOG_EVENT_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"NUMBER\"")
    private Integer number;

    @Column(name = "\"DESCRIPTION\"", columnDefinition = "TEXT", nullable = false)
    private String description;

    @Column(name = "\"UUID\"", length = 36)
    private String uuid;

    @Column(name = "\"TRACKING\"", nullable = false)
    private LocalDateTime tracking;

    @Column(name = "\"ORIGIN\"", columnDefinition = "TEXT")
    private String origin;

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

## src/main/java/com/nubo/risk/model/load/api/models/entity/ParticipantEntity.java

```java
package com.nubo.risk.model.load.api.models.entity;

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
@Table(name = "\"PARTICIPANT\"", schema = "\"NUANBODB\"")
public class ParticipantEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"PARTICIPANT_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"CODE\"", nullable = false)
    private String code;

    @Column(name = "\"DOCUMENT_NUMBER\"", length = 20, nullable = false)
    private String documentNumber;

    @Column(name = "\"NAME\"", nullable = false)
    private String name;

    @Column(name = "\"SHORT_NAME\"", nullable = false)
    private String shortName;

    @Column(name = "\"CUSTODIAN\"")
    private Boolean custodian;

    @Column(name = "\"LAST_MODIFY_USER\"", nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", nullable = false)
    private String lastModifyIp;
}

```

## src/main/java/com/nubo/risk/model/load/api/models/entity/PermissionEntity.java

```java
package com.nubo.risk.model.load.api.models.entity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"PERMISSION\"", schema = "\"NUANBODB\"")
public class PermissionEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"PERMISSION_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"NAME\"", length = 80)
    private String name;

    @Column(name = "\"DESCRIPTION\"", length = 120)
    private String description;

    @Column(name = "\"URL\"", length = 100)
    private String url;

    @Column(name = "\"LEVEL\"")
    private Integer level;

    @Column(name = "\"COLLAPSIBLE\"")
    private Boolean collapsible;

    @Column(name = "\"ORDER_ITEM\"")
    private Integer orderItem;

    @Column(name = "\"ENABLED\"")
    private Boolean enabled;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "\"PARENT_ID\"")
    private PermissionEntity parent;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "\"PROFILE_PERMISSION\"",
            schema = "\"NUANBODB\"",
            joinColumns = @JoinColumn(name = "\"PERMISSION_ID\""),
            inverseJoinColumns = @JoinColumn(name = "\"PROFILE_ID\"")
    )
    private List<ProfileEntity> profiles;

    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    @OneToMany(mappedBy = "parent", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<PermissionEntity> items;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 50, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 50, nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50, nullable = false)
    private String lastModifyIp;

}

```

## src/main/java/com/nubo/risk/model/load/api/models/entity/ProfileEntity.java

```java
package com.nubo.risk.model.load.api.models.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"PROFILE\"", schema = "\"NUANBODB\"")
public class ProfileEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"PROFILE_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"NAME\"", length = 80)
    private String name;

    @Column(name = "\"DESCRIPTION\"", length = 120)
    private String description;

}


```

## src/main/java/com/nubo/risk/model/load/api/models/entity/TypeEntity.java

```java
package com.nubo.risk.model.load.api.models.entity;


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

## src/main/java/com/nubo/risk/model/load/api/models/entity/UserNuboEntity.java

```java
package com.nubo.risk.model.load.api.models.entity;

import com.nubo.risk.model.load.api.models.enums.UserGroupEnum;
import com.nubo.risk.model.load.api.models.enums.UserTypeEnum;
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
public class UserNuboEntity
{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"USER_NUBO_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"USER_NAME\"", unique = true, length = 80, nullable = false)
    private String userName;

    @Column(name = "\"EMAIL\"", unique = true, length = 150, nullable = false)
    private String email;

    @Column(name = "\"FIRST_NAME\"", length = 100, nullable = false)
    private String firstName;

    @Column(name = "\"LAST_NAME\"", length = 100, nullable = false)
    private String lastName;

    @ManyToOne
    @JoinColumn(name = "\"PARTICIPANT_ID\"", nullable = false)
    private ParticipantEntity participant;

    @Column(name = "\"USER_TYPE\"", length = 20, nullable = false)
    @Enumerated(EnumType.STRING)
    private UserTypeEnum userType;

    @Column(name = "\"USER_GROUP\"", length = 20, nullable = true)
    @Enumerated(EnumType.STRING)
    private UserGroupEnum userGroup;

    @Column(name = "\"PROFILE_ID\"", insertable = false, updatable = false)
    private Long profileId;

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

## src/main/java/com/nubo/risk/model/load/api/models/enums/ErrorLoadEnum.java

```java
package com.nubo.risk.model.load.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum ErrorLoadEnum {

    EMPTY_FILE("El archivo se encuentra vacío"),
    INVALID_EXTENSION("El archivo debe tener extensión .csv"),
    INVALID_CONTENT("Tipo de contenido no válido. Se espera text/csv"),
    INVALID_FORMAT("Error en formato/cabecera del archivo CSV"),
    INVALID_READ("Error leyendo el archivo CSV");


    private final String value;
}

```

## src/main/java/com/nubo/risk/model/load/api/models/enums/FileCsvColumnEnum.java

```java
package com.nubo.risk.model.load.api.models.enums;

import lombok.Getter;

import java.util.HashMap;
import java.util.Map;

@Getter
public enum FileCsvColumnEnum {
    DATE("fecha", "date"),
    MNEMONIC("nemotecnico", "mnemonic"),
    ISIN("isin", "isin"),
    MARKET("Mercado", "market"),
    PRICE("Precio", "price"),
    CURRENCY("Moneda", "currency"),
    COUNTRY("Pais", "country"),
    ADMISSIBILITY("Admisibilidad", "admissibility"),
    CURRENCY_RISK("Riesgo Moneda", "generalRisk"),
    GENERAL_RISK("Riesgo General", "currencyRisk"),
    REGISTER_COUNT("Cantidad registros", "");

    private final String csvHeader;
    private final String dtoField;

    FileCsvColumnEnum(String csvHeader, String dtoField) {
        this.csvHeader = csvHeader;
        this.dtoField = dtoField;
    }

    public String getCsvHeader() {
        return csvHeader;
    }

    public String getDtoField() {
        return dtoField;
    }

    public static Map<String, String> toColumnMapping() {
        Map<String, String> map = new HashMap<>();
        for (FileCsvColumnEnum column : values()) {
            map.put(column.getCsvHeader(), column.getDtoField());
        }
        return map;
    }
}

```

## src/main/java/com/nubo/risk/model/load/api/models/enums/NotificationMessageEnum.java

```java
package com.nubo.risk.model.load.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum NotificationMessageEnum {
    
    UPLOAD_RISK_MODEL_STAR(31, "Upload risk model to STAR"),
    UPLOAD_RISK_MODEL_SUCCESS(32, "Upload risk model successful"),
    UPLOAD_RISK_MODEL_FAILED(33, "Upload risk model failed");

    
    private final Integer code;
    private final String description;
}
```

## src/main/java/com/nubo/risk/model/load/api/models/enums/NotificationProfileEnum.java

```java
package com.nubo.risk.model.load.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum NotificationProfileEnum {
    
    ADMIN_PROFILE(1L),
    SUPERVISOR_PROFILE(2L);
    
    private final Long profileId;
}
```

## src/main/java/com/nubo/risk/model/load/api/models/enums/NotificationTypeEnum.java

```java
package com.nubo.risk.model.load.api.models.enums;

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

## src/main/java/com/nubo/risk/model/load/api/models/enums/PropertiesEnum.java

```java
package com.nubo.risk.model.load.api.models.enums;

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

## src/main/java/com/nubo/risk/model/load/api/models/enums/TypeEnum.java

```java
package com.nubo.risk.model.load.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum TypeEnum {

    LOAD_MANUAL(700),
    LOAD_AUTOMATIC(701);

    private final Integer id;

}

```

## src/main/java/com/nubo/risk/model/load/api/models/enums/UserGroupEnum.java

```java
package com.nubo.risk.model.load.api.models.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Arrays;

@Getter
@RequiredArgsConstructor
public enum UserGroupEnum
{

    NA("N/A"),
    USER_GROUP("USER_GROUP"),
    ADMIN_GROUP("ADMIN_GROUP");

    private final String value;

    @JsonValue
    public String getValue()
    {
        return value;
    }

    @JsonCreator
    public static UserGroupEnum fromValue(String value)
    {
        return Arrays.stream(UserGroupEnum.values())
                .filter(status -> status.value.equalsIgnoreCase(value))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Unknown value: " + value));
    }

    @Converter(autoApply = true)
    public static class UserGroupEnumConverter implements AttributeConverter<UserGroupEnum, String>
    {

        @Override
        public String convertToDatabaseColumn(UserGroupEnum status)
        {
            return status != null ? status.getValue() : null;
        }

        @Override
        public UserGroupEnum convertToEntityAttribute(String dbData)
        {
            return dbData != null ? UserGroupEnum.fromValue(dbData) : null;
        }
    }

}

```

## src/main/java/com/nubo/risk/model/load/api/models/enums/UserTypeEnum.java

```java
package com.nubo.risk.model.load.api.models.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Arrays;

@Getter
@RequiredArgsConstructor
public enum UserTypeEnum
{

    INTERNAL("INTERNAL"),
    EXTERNAL("EXTERNAL");

    private final String value;

    @JsonValue
    public String getValue()
    {
        return value;
    }

    @JsonCreator
    public static UserTypeEnum fromValue(String value)
    {
        return Arrays.stream(UserTypeEnum.values())
                .filter(status -> status.value.equalsIgnoreCase(value))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Unknown value: " + value));
    }

    @Converter(autoApply = true)
    public static class UserTypeEnumConverter implements AttributeConverter<UserTypeEnum, String>
    {

        @Override
        public String convertToDatabaseColumn(UserTypeEnum status)
        {
            return status != null ? status.getValue() : null;
        }

        @Override
        public UserTypeEnum convertToEntityAttribute(String dbData)
        {
            return dbData != null ? UserTypeEnum.fromValue(dbData) : null;
        }
    }

}

```

## src/main/java/com/nubo/risk/model/load/api/models/enums/VersionApiEnum.java

```java
package com.nubo.risk.model.load.api.models.enums;

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

## src/main/java/com/nubo/risk/model/load/api/repository/LogEventRepository.java

```java
package com.nubo.risk.model.load.api.repository;

import com.nubo.risk.model.load.api.models.entity.LogEventEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LogEventRepository extends JpaRepository<LogEventEntity, Long> {
}

```

## src/main/java/com/nubo/risk/model/load/api/repository/TypeRepository.java

```java
package com.nubo.risk.model.load.api.repository;

import com.nubo.risk.model.load.api.models.entity.TypeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TypeRepository extends JpaRepository<TypeEntity, Integer> {
}

```

## src/main/java/com/nubo/risk/model/load/api/repository/UserNuboRepository.java

```java
package com.nubo.risk.model.load.api.repository;


import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.nubo.risk.model.load.api.models.entity.UserNuboEntity;
import com.nubo.risk.model.load.api.models.enums.UserGroupEnum;
import com.nubo.risk.model.load.api.models.enums.UserTypeEnum;

public interface UserNuboRepository extends JpaRepository<UserNuboEntity, Long>
{

    @Query("SELECT u FROM UserNuboEntity u " +
            "WHERE u.userName = :userName")
    Optional<UserNuboEntity> findByUserName(String userName);

    @Query("SELECT u.email FROM UserNuboEntity u " +
            "WHERE u.userGroup = :userGroup")
    List<String> findAllEmailsByUserGroup(UserGroupEnum userGroup);

    @Query("SELECT u.email FROM UserNuboEntity u " +
            "WHERE u.userGroup = :userGroup AND u.userType = :userType")
    List<String> findAllEmailsByUserGroupAndUserType(UserGroupEnum userGroup, UserTypeEnum userType);

    @Query("SELECT u.id FROM UserNuboEntity u WHERE u.profileId = :profileId")
    List<Long> findAllIdsByProfileId(Long profileId);

    @Query("SELECT u.id FROM UserNuboEntity u WHERE u.profileId IN :profileIds")
    List<Long> findAllIdsByProfileIds(List<Long> profileIds);
}

```

## src/main/java/com/nubo/risk/model/load/api/service/RiskModelApiLoadService.java

```java
package com.nubo.risk.model.load.api.service;

import com.nubo.risk.model.load.api.client.risk.model.loader.models.dto.response.InstrumentFinancialOutDto;
import com.nubo.risk.model.load.api.models.dto.response.RiskModelExternalOutDto;

import java.util.List;

public interface RiskModelApiLoadService {
     List<InstrumentFinancialOutDto> findAllApis();
}

```

## src/main/java/com/nubo/risk/model/load/api/service/RiskModelAutomaticService.java

```java
package com.nubo.risk.model.load.api.service;

import com.nubo.risk.model.load.api.models.dto.response.RiskModelLoadOutDto;

public interface RiskModelAutomaticService {
    RiskModelLoadOutDto getFinancialInstrument();
}

```

## src/main/java/com/nubo/risk/model/load/api/service/RiskModelInterface.java

```java
package com.nubo.risk.model.load.api.service;

public interface RiskModelInterface {
}

```

## src/main/java/com/nubo/risk/model/load/api/service/RiskModelLoadService.java

```java
package com.nubo.risk.model.load.api.service;

import com.nubo.risk.model.load.api.models.dto.response.RiskModelLoadOutDto;
import org.springframework.web.multipart.MultipartFile;

public interface RiskModelLoadService {
    RiskModelLoadOutDto loadManualRiskModel(MultipartFile file);
}

```

## src/main/java/com/nubo/risk/model/load/api/service/impl/RiskModelApiLoadServiceImpl.java

```java
package com.nubo.risk.model.load.api.service.impl;

import com.nubo.risk.model.load.api.application.properties.PropertiesContext;
import com.nubo.risk.model.load.api.client.risk.model.loader.models.dto.response.InstrumentFinancialOutDto;
import com.nubo.risk.model.load.api.exception.ServiceException;
import com.nubo.risk.model.load.api.exception.error.ErrorCode;
import com.nubo.risk.model.load.api.models.dto.response.RiskModelExternalOutDto;
import com.nubo.risk.model.load.api.models.enums.VersionApiEnum;
import com.nubo.risk.model.load.api.service.RiskModelApiLoadService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;
@Service
@RequiredArgsConstructor
@Slf4j
public class RiskModelApiLoadServiceImpl implements RiskModelApiLoadService {


    @Override
    @Transactional
    public List<InstrumentFinancialOutDto> findAllApis()
    {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1)
        {
            return findAllApisV1();
        }
        else
        {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<InstrumentFinancialOutDto> findAllApisV1()
    {
        log.info("Start method findAllApisV1");

        List<InstrumentFinancialOutDto> result = List.of(
                InstrumentFinancialOutDto.builder()
                        .date("20/11/2025")
                        .mnemonic("CDTAVVILLA08")
                        .isin("PRU012345028")
                        .market("RV")
                        .price("123.43761")
                        .currency("COP")
                        .country("CO")
                        .admissibility("Y")
                        .currencyRisk("2")
                        .generalRisk("3")
                        .quantity("1")
                        .build(),
                InstrumentFinancialOutDto.builder()
                        .date("20/11/2025")
                        .mnemonic("CDTAVVILLA09")
                        .isin("PRU012345029")
                        .market("RV")
                        .price("345.43761")
                        .currency("COP")
                        .country("CO")
                        .admissibility("Y")
                        .currencyRisk("2")
                        .generalRisk("3")
                        .quantity("2")
                        .build(),
                InstrumentFinancialOutDto.builder()
                        .date("20/11/2025")
                        .mnemonic("CDTAVVILLA10")
                        .isin("PRU012345030")
                        .market("RV")
                        .price("567.43761")
                        .currency("COP")
                        .country("CO")
                        .admissibility("Y")
                        .currencyRisk("2")
                        .generalRisk("3")
                        .quantity("3")
                        .build()
        );

        log.info("End method findAllApisV1, number of records: {}", result.size());
        return result;
    }
}

```

## src/main/java/com/nubo/risk/model/load/api/service/impl/RiskModelAutomaticServiceImpl.java

```java
package com.nubo.risk.model.load.api.service.impl;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import com.nubo.risk.model.load.api.models.dto.response.RiskModelExternalOutDto;
import com.nubo.risk.model.load.api.service.RiskModelApiLoadService;
import org.springframework.http.HttpStatus;
import org.springframework.retry.annotation.Backoff;
import org.springframework.retry.annotation.Retryable;
import org.springframework.stereotype.Service;

import com.nubo.risk.model.load.api.application.properties.PropertiesContext;
import com.nubo.risk.model.load.api.client.kafka.producer.dto.request.RiskModelInDto;
import com.nubo.risk.model.load.api.client.kafka.producer.service.KafkaNuboProducer;
import com.nubo.risk.model.load.api.client.risk.model.loader.models.dto.response.InstrumentFinancialOutDto;
import com.nubo.risk.model.load.api.client.risk.model.loader.service.RiskModelLoadFastApiService;
import com.nubo.risk.model.load.api.exception.ServiceException;
import com.nubo.risk.model.load.api.exception.error.ErrorCode;
import com.nubo.risk.model.load.api.helpers.SendNotificationUtil;
import com.nubo.risk.model.load.api.models.dto.response.RiskModelLoadOutDto;
import com.nubo.risk.model.load.api.models.entity.TypeEntity;
import com.nubo.risk.model.load.api.models.enums.NotificationMessageEnum;
import com.nubo.risk.model.load.api.models.enums.NotificationProfileEnum;
import com.nubo.risk.model.load.api.models.enums.NotificationTypeEnum;
import com.nubo.risk.model.load.api.models.enums.TypeEnum;
import com.nubo.risk.model.load.api.models.enums.VersionApiEnum;
import com.nubo.risk.model.load.api.repository.TypeRepository;
import com.nubo.risk.model.load.api.repository.UserNuboRepository;
import com.nubo.risk.model.load.api.service.RiskModelAutomaticService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class RiskModelAutomaticServiceImpl implements RiskModelAutomaticService {

    private final TypeRepository typeRepository;
    private final RiskModelLoadFastApiService riskModelLoadFastApiService;
    private final KafkaNuboProducer kafkaNuboProducer;
    private final UserNuboRepository userNuboRepository;
    private final SendNotificationUtil sendNotificationUtil;
    private final RiskModelApiLoadService riskModelApiLoadService;

    @Retryable(value = {RuntimeException.class}, maxAttempts = 3, backoff = @Backoff(delay = 3000))
    public RiskModelLoadOutDto getFinancialInstrument() {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return getFinancialInstrumentV1();
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private RiskModelLoadOutDto getFinancialInstrumentV1() {
        log.info("Start method getFinancialInstrumentV1  -> ");

        List<Long> userIds = getUserIdsByProfiles(NotificationProfileEnum.values());
        sendNotificationUtil.sendNotification(NotificationTypeEnum.INFORMATIVE, NotificationMessageEnum.UPLOAD_RISK_MODEL_STAR, null, userIds);

        RiskModelLoadOutDto riskModelLoadOutDto = RiskModelLoadOutDto.builder()
                .isLoaded(false)
                .build();

        try {
            List<InstrumentFinancialOutDto> listInstrument = riskModelApiLoadService.findAllApis();

            //List<InstrumentFinancialOutDto> listInstrument = riskModelLoadFastApiService.getInstrumentsFastAPI();

            if (!listInstrument.isEmpty()) {

                RiskModelInDto riskModelInDto = RiskModelInDto.builder()
                        .riskModels(new ArrayList<>(listInstrument))
                        .loadType(getAutomaticType().getDescription())
                        .build();
                log.info("before sendKafkaMessageRiskModelAutomatic");
                sendKafkaMessageRiskModelAutomatic(riskModelInDto);

                riskModelLoadOutDto.setLoaded(true);
                riskModelLoadOutDto.setUploadDate(LocalDate.now());

                log.info("before sendNotification");
                sendNotificationUtil.sendNotification(NotificationTypeEnum.INFORMATIVE, NotificationMessageEnum.UPLOAD_RISK_MODEL_SUCCESS, null, userIds);

            }

            log.info("End method getFinancialInstrumentV1, listInstrument -> {}", listInstrument.size());

            return riskModelLoadOutDto;

        } catch (Exception e) {
            log.error("Error processing automatic risk model load: {}", e.getMessage());
            sendNotificationUtil.sendNotification(NotificationTypeEnum.ERROR, NotificationMessageEnum.UPLOAD_RISK_MODEL_FAILED, null, userIds);
            throw e;
        }
    }

    private TypeEntity getAutomaticType() {
        return typeRepository.findById(TypeEnum.LOAD_AUTOMATIC.getId())
                .orElseThrow(() -> new ServiceException(ErrorCode.AUTOMATIC_TYPE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private void sendKafkaMessageRiskModelAutomatic(
            RiskModelInDto riskModelInDto) {
        log.debug("Start method sendKafkaMessageRiskModelAutomatic, riskModelInDto -> {}", riskModelInDto);
        try {
            kafkaNuboProducer.sendMessageRiskModelLoad(riskModelInDto);
        } catch (Exception ex) {
            log.error("Error sendKafkaMessageRiskModelAutomatic -> {}", ex.getMessage());
        }
        log.info("End method sendKafkaMessageRiskModelAutomatic");
    }

    private List<Long> getUserIdsByProfiles(NotificationProfileEnum... profiles) {
        if (profiles.length == 1) {
            return userNuboRepository.findAllIdsByProfileId(profiles[0].getProfileId());
        }
        List<Long> profileIds = List.of(profiles).stream()
                .map(NotificationProfileEnum::getProfileId)
                .toList();
        return userNuboRepository.findAllIdsByProfileIds(profileIds);
    }

}

```

## src/main/java/com/nubo/risk/model/load/api/service/impl/RiskModelLoadServiceImpl.java

```java
package com.nubo.risk.model.load.api.service.impl;

import com.nubo.risk.model.load.api.application.properties.PropertiesContext;
import com.nubo.risk.model.load.api.application.util.CsvValidatorUtils;
import com.nubo.risk.model.load.api.application.util.NonEmptyLineFilter;
import com.nubo.risk.model.load.api.client.kafka.producer.dto.request.RiskModelInDto;
import com.nubo.risk.model.load.api.client.kafka.producer.service.KafkaNuboProducer;
import com.nubo.risk.model.load.api.exception.ServiceException;
import com.nubo.risk.model.load.api.exception.error.ErrorCode;
import com.nubo.risk.model.load.api.exception.handler.CsvFileExceptionHandler;
import com.nubo.risk.model.load.api.helpers.SendNotificationUtil;
import com.nubo.risk.model.load.api.models.dto.request.RiskModelParameterCsvInDto;
import com.nubo.risk.model.load.api.models.dto.response.RiskModelLoadOutDto;
import com.nubo.risk.model.load.api.models.entity.TypeEntity;
import com.nubo.risk.model.load.api.models.enums.ErrorLoadEnum;
import com.nubo.risk.model.load.api.models.enums.FileCsvColumnEnum;
import com.nubo.risk.model.load.api.models.enums.NotificationMessageEnum;
import com.nubo.risk.model.load.api.models.enums.NotificationProfileEnum;
import com.nubo.risk.model.load.api.models.enums.NotificationTypeEnum;
import com.nubo.risk.model.load.api.models.enums.TypeEnum;
import com.nubo.risk.model.load.api.models.enums.VersionApiEnum;
import com.nubo.risk.model.load.api.repository.TypeRepository;
import com.nubo.risk.model.load.api.repository.UserNuboRepository;
import com.nubo.risk.model.load.api.service.RiskModelLoadService;
import com.opencsv.CSVParser;
import com.opencsv.CSVParserBuilder;
import com.opencsv.CSVReader;
import com.opencsv.CSVReaderBuilder;
import com.opencsv.bean.CsvToBean;
import com.opencsv.bean.CsvToBeanBuilder;
import com.opencsv.bean.HeaderColumnNameTranslateMappingStrategy;
import com.opencsv.enums.CSVReaderNullFieldIndicator;
import com.opencsv.exceptions.CsvValidationException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;
import java.util.stream.IntStream;

@Service
@RequiredArgsConstructor
@Slf4j
public class RiskModelLoadServiceImpl implements RiskModelLoadService {

    private final TypeRepository typeRepository;
    private final KafkaNuboProducer kafkaNuboProducer;
    private final UserNuboRepository userNuboRepository;
    private final SendNotificationUtil sendNotificationUtil;

    public RiskModelLoadOutDto loadManualRiskModel(MultipartFile file) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return loadManualRiskModelV1(file);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private RiskModelLoadOutDto loadManualRiskModelV1(MultipartFile file) {
        log.info("Start method loadManualRiskModelV1, file -> {}", file.getOriginalFilename());

        List<Long> userIds = getUserIdsByProfiles(NotificationProfileEnum.values());
        sendNotificationUtil.sendNotification(NotificationTypeEnum.INFORMATIVE, NotificationMessageEnum.UPLOAD_RISK_MODEL_STAR, null, userIds);

        validateFileIsCsv(file);

        try {
            List<RiskModelParameterCsvInDto> dataFile = parseAndValidateCsv(file);

            RiskModelInDto riskModelInDto = RiskModelInDto.builder()
                    .riskModels(new ArrayList<>(dataFile))
                    .loadType(getManualType().getDescription())
                    .build();

            sendKafkaMessageRiskModelManual(riskModelInDto);

            sendNotificationUtil.sendNotification(NotificationTypeEnum.INFORMATIVE, NotificationMessageEnum.UPLOAD_RISK_MODEL_SUCCESS, null, userIds);

            log.debug("End method loadManualRiskModelV1, size dataFile -> {}", dataFile.size());

            return RiskModelLoadOutDto.builder()
                    .isLoaded(true)
                    .uploadDate(LocalDate.now())
                    .build();

        } catch (IOException e) {
            log.error("IOException reading CSV file: {}", e.getMessage());
            sendNotificationUtil.sendNotification(NotificationTypeEnum.ERROR, NotificationMessageEnum.UPLOAD_RISK_MODEL_FAILED, null, userIds);
            throw new CsvFileExceptionHandler(ErrorLoadEnum.INVALID_READ.getValue(), HttpStatus.BAD_REQUEST,
                    ErrorCode.INVALID_CSV_STRUCTURE);
        } catch (Exception e) {
            log.error("Processing error CSV: {}", e.getMessage());
            sendNotificationUtil.sendNotification(NotificationTypeEnum.ERROR, NotificationMessageEnum.UPLOAD_RISK_MODEL_FAILED, null, userIds);
            throw new CsvFileExceptionHandler(ErrorLoadEnum.INVALID_FORMAT.getValue(),
                    HttpStatus.BAD_REQUEST, ErrorCode.INVALID_CSV_STRUCTURE);
        }
    }

    private void validateFileIsCsv(MultipartFile file) {
        String filename = file.getOriginalFilename();
        String contentType = file.getContentType();

        if (file.isEmpty()) {
            throw new CsvFileExceptionHandler(ErrorLoadEnum.EMPTY_FILE.getValue(),
                    HttpStatus.BAD_REQUEST, ErrorCode.ERROR_INVALID_FILE);
        }

        if (filename == null || !filename.toLowerCase().endsWith(".csv")) {
            throw new CsvFileExceptionHandler(ErrorLoadEnum.INVALID_EXTENSION.getValue(),
                    HttpStatus.UNSUPPORTED_MEDIA_TYPE,
                    ErrorCode.ERROR_UNSUPPORTED_MEDIA_TYPE);
        }

        if (contentType == null || !contentType.equals("text/csv")) {
            throw new CsvFileExceptionHandler(ErrorLoadEnum.INVALID_CONTENT.getValue(),
                    HttpStatus.UNSUPPORTED_MEDIA_TYPE,
                    ErrorCode.ERROR_UNSUPPORTED_MEDIA_TYPE);
        }
    }

    private List<RiskModelParameterCsvInDto> parseAndValidateCsv(MultipartFile file) throws IOException, CsvValidationException {
        InputStream inputStream = file.getInputStream();
        BufferedReader reader = new BufferedReader(CsvValidatorUtils.getReaderAdaptive(inputStream));
        reader.mark(10 * 1024);
        String header = reader.readLine();
        reader.reset();
        String separator = CsvValidatorUtils.detectSeparator(header);

        CSVParser parser = new CSVParserBuilder()
                .withSeparator(separator.charAt(0))
                .build();
        CSVReader headerReader = new CSVReaderBuilder(reader)
                .withCSVParser(parser)
                .build();
        String[] headerLine = headerReader.readNext();
        if (!validateHeaderLine(headerLine)) {
            throw new CsvFileExceptionHandler(ErrorLoadEnum.INVALID_FORMAT.getValue(),
                    HttpStatus.BAD_REQUEST, ErrorCode.INVALID_CSV_STRUCTURE);
        }
        reader.reset();

        CSVReader dataReader = new CSVReaderBuilder(reader)
                .withCSVParser(parser)
                .build();
        HeaderColumnNameTranslateMappingStrategy<RiskModelParameterCsvInDto> strategy = new HeaderColumnNameTranslateMappingStrategy<>();
        strategy.setType(RiskModelParameterCsvInDto.class);
        strategy.setColumnMapping(FileCsvColumnEnum.toColumnMapping());

        CsvToBean<RiskModelParameterCsvInDto> csvToBean = new CsvToBeanBuilder<RiskModelParameterCsvInDto>(dataReader)
                .withMappingStrategy(strategy)
                .withIgnoreLeadingWhiteSpace(true)
                .withFieldAsNull(CSVReaderNullFieldIndicator.EMPTY_SEPARATORS)
                .withFilter(new NonEmptyLineFilter())
                .build();

        return csvToBean.parse();

    }

    private boolean validateHeaderLine(String[] headerLine) {
        if (!headerLine[0].trim().equalsIgnoreCase(FileCsvColumnEnum.DATE.getCsvHeader())) {
            return false;
        }
        List<String> expectedHeaders = Arrays.stream(FileCsvColumnEnum.values())
                .map(FileCsvColumnEnum::getCsvHeader)
                .filter(h -> h != null && !h.isBlank())
                .toList();

        int start = IntStream.range(0, headerLine.length)
                .filter(i -> headerLine[i] != null && !headerLine[i].trim().isEmpty())
                .findFirst()
                .orElse(headerLine.length);

        int end = IntStream.iterate(headerLine.length - 1, i -> i - 1)
                .limit(headerLine.length)
                .filter(i -> headerLine[i] != null && !headerLine[i].trim().isEmpty())
                .findFirst()
                .orElse(-1);

        if (end < start) {
            log.debug("Completely empty CSV header or no valid columns. Original: {}", Arrays.toString(headerLine));
            return false;
        }

        List<String> actualHeaders = Arrays.stream(headerLine, start, end + 1)
                .map(String::trim)
                .toList();
        List<String> expectedLower = expectedHeaders.stream()
                .map(String::toLowerCase)
                .toList();
        List<String> actualLower = actualHeaders.stream()
                .map(String::toLowerCase)
                .toList();

        if (!expectedLower.equals(actualLower)) {
            log.debug("CSV header validation failed. Expected: {}, but found: {}", expectedHeaders, actualHeaders);
            return false;
        }
        return true;
    }

    private TypeEntity getManualType() {
        return typeRepository.findById(TypeEnum.LOAD_MANUAL.getId())
                .orElseThrow(() -> new ServiceException(ErrorCode.MANUAL_TYPE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private void sendKafkaMessageRiskModelManual(
            RiskModelInDto riskModelInDto) {
        log.debug("Start method sendKafkaMessageRiskModelManualLoad, riskModelInDto -> {}", riskModelInDto);
        try {
            kafkaNuboProducer.sendMessageRiskModelLoad(riskModelInDto);
        } catch (Exception ex) {
            log.error("Error sendKafkaMessageRiskModelManualLoad -> {}", ex.getMessage());
        }
        log.info("End method sendKafkaMessageRiskModelManualLoad");
    }

    private List<Long> getUserIdsByProfiles(NotificationProfileEnum... profiles) {
        if (profiles.length == 1) {
            return userNuboRepository.findAllIdsByProfileId(profiles[0].getProfileId());
        }
        List<Long> profileIds = List.of(profiles).stream()
                .map(NotificationProfileEnum::getProfileId)
                .toList();
        return userNuboRepository.findAllIdsByProfileIds(profileIds);
    }

}
```

## src/main/java/com/nubo/risk/model/load/api/web/controller/RiskModelLoadRestController.java

```java
package com.nubo.risk.model.load.api.web.controller;

import com.nubo.risk.model.load.api.client.risk.model.loader.models.dto.response.InstrumentFinancialOutDto;
import com.nubo.risk.model.load.api.models.dto.response.RiskModelExternalOutDto;
import com.nubo.risk.model.load.api.models.dto.response.RiskModelLoadOutDto;
import com.nubo.risk.model.load.api.service.RiskModelApiLoadService;
import com.nubo.risk.model.load.api.service.RiskModelAutomaticService;
import com.nubo.risk.model.load.api.service.RiskModelLoadService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;
import java.util.List;

@Tag(name = "Risk Model Load")
@RestController
@RequestMapping("/{version}/risk-model")
@RequiredArgsConstructor
public class RiskModelLoadRestController {

    private final RiskModelLoadService riskModelLoadService;
    private final RiskModelAutomaticService riskModelAutomaticService;
    private final RiskModelApiLoadService riskModelApiLoadService;

    @Operation(summary = "Allow to load the risk model", description = "Allow to load the risk model")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = RiskModelLoadOutDto.class)))})
    @PostMapping("/load")
    public ResponseEntity<RiskModelLoadOutDto> loadManualRiskModel(@RequestParam("file") MultipartFile file) {
        return ResponseEntity.ok(riskModelLoadService.loadManualRiskModel(file));
    }


    @PostMapping("/instrumentos")
    public ResponseEntity<String> getFinancialInstrument() {
        riskModelAutomaticService.getFinancialInstrument();
        return ResponseEntity.ok("Importación ejecutada correctamente.");
    }


    @Operation(summary = "API Load ", description = "API Load ")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = RiskModelExternalOutDto[].class)))
    })
    @GetMapping("/load-api")
    public ResponseEntity<List<InstrumentFinancialOutDto>> findAllTrades() {

        return ResponseEntity.ok(riskModelApiLoadService.findAllApis());
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
    producer:
      topic-name-risk-model-load: ${KAFKA_NUBO_TOPIC_NAME_RISK_MODEL_LOAD}
    notification:
      id: ${KAFKA_NUBO_NOTIFICATION_ID:23}
      event-type: ${KAFKA_NUBO_NOTIFICATION_EVENT_TYPE:NOTIFICACION_LISTA_PARA_USUARIO}
      module: ${KAFKA_NUBO_NOTIFICATION_MODULE:HORARIOS}
      kafka-notification-request-topic: ${KAFKA_NUBO_NOTIFICATION_REQUEST_TOPIC}
      group-id: ${KAFKA_NUBO_GROUP_ID}
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
    producer:
      topic-name-risk-model-load: ${KAFKA_NUBO_TOPIC_NAME_RISK_MODEL_LOAD}
    notification:
      id: ${KAFKA_NUBO_NOTIFICATION_ID:23}
      event-type: ${KAFKA_NUBO_NOTIFICATION_EVENT_TYPE:NOTIFICACION_LISTA_PARA_USUARIO}
      module: ${KAFKA_NUBO_NOTIFICATION_MODULE:HORARIOS}
      kafka-notification-request-topic: ${KAFKA_NUBO_NOTIFICATION_REQUEST_TOPIC}
      group-id: ${KAFKA_NUBO_GROUP_ID}
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
    producer:
      topic-name-risk-model-load: ${KAFKA_NUBO_TOPIC_NAME_RISK_MODEL_LOAD}
    notification:
      id: ${KAFKA_NUBO_NOTIFICATION_ID:23}
      event-type: ${KAFKA_NUBO_NOTIFICATION_EVENT_TYPE:NOTIFICACION_LISTA_PARA_USUARIO}
      module: ${KAFKA_NUBO_NOTIFICATION_MODULE:HORARIOS}
      kafka-notification-request-topic: ${KAFKA_NUBO_NOTIFICATION_REQUEST_TOPIC}
      group-id: ${KAFKA_NUBO_GROUP_ID}
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
    producer:
      topic-name-risk-model-load: ${KAFKA_NUBO_TOPIC_NAME_RISK_MODEL_LOAD}
    notification:
      id: ${KAFKA_NUBO_NOTIFICATION_ID:23}
      event-type: ${KAFKA_NUBO_NOTIFICATION_EVENT_TYPE:NOTIFICACION_LISTA_PARA_USUARIO}
      module: ${KAFKA_NUBO_NOTIFICATION_MODULE:HORARIOS}
      kafka-notification-request-topic: ${KAFKA_NUBO_NOTIFICATION_REQUEST_TOPIC}
      group-id: ${KAFKA_NUBO_GROUP_ID}


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
    producer:
      topic-name-risk-model-load: ${KAFKA_NUBO_TOPIC_NAME_RISK_MODEL_LOAD}
    notification:
      id: ${KAFKA_NUBO_NOTIFICATION_ID:23}
      event-type: ${KAFKA_NUBO_NOTIFICATION_EVENT_TYPE:NOTIFICACION_LISTA_PARA_USUARIO}
      module: ${KAFKA_NUBO_NOTIFICATION_MODULE:HORARIOS}
      kafka-notification-request-topic: ${KAFKA_NUBO_NOTIFICATION_REQUEST_TOPIC}
      group-id: ${KAFKA_NUBO_GROUP_ID}


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
,------. ,--. ,---.  ,--. ,--.,--.   ,--. ,-----. ,------.  ,------.,--.   ,--.    ,-----.   ,---.  ,------.    ,---.  ,------. ,--.
|  .--. '|  |'   .-' |  .'   /|   `.'   |'  .-.  '|  .-.  \ |  .---'|  |   |  |   '  .-.  ' /  O  \ |  .-.  \  /  O  \ |  .--. '|  |
|  '--'.'|  |`.  `-. |  .   ' |  |'.'|  ||  | |  ||  |  \  :|  `--, |  |   |  |   |  | |  ||  .-.  ||  |  \  :|  .-.  ||  '--' ||  |
|  |\  \ |  |.-'    ||  |\   \|  |   |  |'  '-'  '|  '--'  /|  `---.|  '--.|  '--.'  '-'  '|  | |  ||  '--'  /|  | |  ||  | --' |  |
`--' '--'`--'`-----' `--' '--'`--'   `--' `-----' `-------' `------'`-----'`-----' `-----' `--' `--'`-------' `--' `--'`--'     `--'
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
