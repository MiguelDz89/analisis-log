# nbo-png-persistencia-asignacion-vericlear-back

Código Java de producción y configuraciones, sin tests. Cada sección contiene el archivo original completo y su ruta. Captura: 28/10/2026.

## Índice

1. `.mvn/wrapper/maven-wrapper.properties`
2. `mvnw`
3. `mvnw.cmd`
4. `pom.xml`
5. `src/main/java/com/nubo/persistence/assignment/vericlear/PersistenceAssignmentVericlearApplication.java`
6. `src/main/java/com/nubo/persistence/assignment/vericlear/application/config/KafkaConsumerConfig.java`
7. `src/main/java/com/nubo/persistence/assignment/vericlear/application/database/NamingStrategyConfig.java`
8. `src/main/java/com/nubo/persistence/assignment/vericlear/application/database/UpperNamingConfig.java`
9. `src/main/java/com/nubo/persistence/assignment/vericlear/application/properties/PropertiesConfig.java`
10. `src/main/java/com/nubo/persistence/assignment/vericlear/application/util/ApplicationUtils.java`
11. `src/main/java/com/nubo/persistence/assignment/vericlear/application/util/ObjectUtils.java`
12. `src/main/java/com/nubo/persistence/assignment/vericlear/exception/ServiceException.java`
13. `src/main/java/com/nubo/persistence/assignment/vericlear/exception/error/ErrorCode.java`
14. `src/main/java/com/nubo/persistence/assignment/vericlear/exception/error/ErrorResponse.java`
15. `src/main/java/com/nubo/persistence/assignment/vericlear/exception/error/ErrorValidation.java`
16. `src/main/java/com/nubo/persistence/assignment/vericlear/exception/kafka/KafkaErrorBuild.java`
17. `src/main/java/com/nubo/persistence/assignment/vericlear/kafka/consumer/KafkaNuboAdapter.java`
18. `src/main/java/com/nubo/persistence/assignment/vericlear/models/dto/request/SimpleDateInDto.java`
19. `src/main/java/com/nubo/persistence/assignment/vericlear/models/dto/request/TradeAllocationMessageInDto.java`
20. `src/main/java/com/nubo/persistence/assignment/vericlear/models/dto/request/ValueInDto.java`
21. `src/main/java/com/nubo/persistence/assignment/vericlear/models/dto/request/VericlearInDto.java`
22. `src/main/java/com/nubo/persistence/assignment/vericlear/models/entity/CfiEntity.java`
23. `src/main/java/com/nubo/persistence/assignment/vericlear/models/entity/CityEntity.java`
24. `src/main/java/com/nubo/persistence/assignment/vericlear/models/entity/CountryEntity.java`
25. `src/main/java/com/nubo/persistence/assignment/vericlear/models/entity/CurrencyEntity.java`
26. `src/main/java/com/nubo/persistence/assignment/vericlear/models/entity/DepartmentEntity.java`
27. `src/main/java/com/nubo/persistence/assignment/vericlear/models/entity/DepositoryEntity.java`
28. `src/main/java/com/nubo/persistence/assignment/vericlear/models/entity/DepositoryMappingEntity.java`
29. `src/main/java/com/nubo/persistence/assignment/vericlear/models/entity/GicsEntity.java`
30. `src/main/java/com/nubo/persistence/assignment/vericlear/models/entity/IdentificationTypeEntity.java`
31. `src/main/java/com/nubo/persistence/assignment/vericlear/models/entity/InvestorAccountEntity.java`
32. `src/main/java/com/nubo/persistence/assignment/vericlear/models/entity/InvestorEntity.java`
33. `src/main/java/com/nubo/persistence/assignment/vericlear/models/entity/MarketEntity.java`
34. `src/main/java/com/nubo/persistence/assignment/vericlear/models/entity/ParticipantAccountEntity.java`
35. `src/main/java/com/nubo/persistence/assignment/vericlear/models/entity/ParticipantEntity.java`
36. `src/main/java/com/nubo/persistence/assignment/vericlear/models/entity/SecurityTitleEntity.java`
37. `src/main/java/com/nubo/persistence/assignment/vericlear/models/entity/SettlementEntity.java`
38. `src/main/java/com/nubo/persistence/assignment/vericlear/models/entity/SettlementKey.java`
39. `src/main/java/com/nubo/persistence/assignment/vericlear/models/entity/SettlementStatusHistoryEntity.java`
40. `src/main/java/com/nubo/persistence/assignment/vericlear/models/entity/SettlementStatusHistoryKey.java`
41. `src/main/java/com/nubo/persistence/assignment/vericlear/models/entity/SideEntity.java`
42. `src/main/java/com/nubo/persistence/assignment/vericlear/models/entity/StatusEntity.java`
43. `src/main/java/com/nubo/persistence/assignment/vericlear/models/entity/TaxStatusEntity.java`
44. `src/main/java/com/nubo/persistence/assignment/vericlear/models/entity/TaxesEntity.java`
45. `src/main/java/com/nubo/persistence/assignment/vericlear/models/entity/TradeEntity.java`
46. `src/main/java/com/nubo/persistence/assignment/vericlear/models/entity/TradingSessionEntity.java`
47. `src/main/java/com/nubo/persistence/assignment/vericlear/models/entity/TradingSystemEntity.java`
48. `src/main/java/com/nubo/persistence/assignment/vericlear/models/entity/TypeEntity.java`
49. `src/main/java/com/nubo/persistence/assignment/vericlear/models/enums/BankAccountIdEnum.java`
50. `src/main/java/com/nubo/persistence/assignment/vericlear/models/enums/SideEnum.java`
51. `src/main/java/com/nubo/persistence/assignment/vericlear/models/enums/StatusOperationAssigmentEnum.java`
52. `src/main/java/com/nubo/persistence/assignment/vericlear/models/enums/TaxesEnum.java`
53. `src/main/java/com/nubo/persistence/assignment/vericlear/repository/DepositoryMappingRepository.java`
54. `src/main/java/com/nubo/persistence/assignment/vericlear/repository/InvestorAccountRepository.java`
55. `src/main/java/com/nubo/persistence/assignment/vericlear/repository/ParticipantAccountRepository.java`
56. `src/main/java/com/nubo/persistence/assignment/vericlear/repository/SettlementRepository.java`
57. `src/main/java/com/nubo/persistence/assignment/vericlear/repository/SettlementStatusHistoryRepository.java`
58. `src/main/java/com/nubo/persistence/assignment/vericlear/repository/SideRepository.java`
59. `src/main/java/com/nubo/persistence/assignment/vericlear/repository/StatusRepository.java`
60. `src/main/java/com/nubo/persistence/assignment/vericlear/repository/TaxesRepository.java`
61. `src/main/java/com/nubo/persistence/assignment/vericlear/repository/TradeRepository.java`
62. `src/main/java/com/nubo/persistence/assignment/vericlear/repository/TradingSystemRepository.java`
63. `src/main/java/com/nubo/persistence/assignment/vericlear/repository/TypeRepository.java`
64. `src/main/java/com/nubo/persistence/assignment/vericlear/service/ProcessMessageService.java`
65. `src/main/java/com/nubo/persistence/assignment/vericlear/service/impl/ProcessMessageServiceImpl.java`
66. `src/main/resources/application-dev.yml`
67. `src/main/resources/application-local.yml`
68. `src/main/resources/application-prod.yml`
69. `src/main/resources/application-qa.yml`
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
		<version>3.5.8</version>
		<relativePath/> <!-- lookup parent from repository -->
	</parent>

	<groupId>com.nubo.persistence.assignment.vericlear</groupId>
	<artifactId>persistence-assignment-vericlear</artifactId>
	<version>0.19.3</version>
	<name>${project.artifactId}</name>
	<description>Vericlear Assignment Persistence</description>

	<properties>
		<java.version>17</java.version>
		<test.skip>false</test.skip>
		<datasource.url.application.name>ApplicationName=${project.artifactId}</datasource.url.application.name>
		<hikari.pool.name>${project.artifactId}-pool</hikari.pool.name>
		<kafka.clients.version>3.9.1</kafka.clients.version>
		<spring.core.version>6.2.11</spring.core.version>
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
		<!-- Database -->
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-data-jpa</artifactId>
		</dependency>
		<dependency>
			<groupId>org.postgresql</groupId>
			<artifactId>postgresql</artifactId>
			<version>42.7.3</version>
			<scope>runtime</scope>
		</dependency>
		<!-- jackson -->
		<dependency>
			<groupId>com.fasterxml.jackson.core</groupId>
			<artifactId>jackson-core</artifactId>
		</dependency>
		<dependency>
			<groupId>com.fasterxml.jackson.core</groupId>
			<artifactId>jackson-databind</artifactId>
			<version>2.19.0</version>
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
		<dependency>
			<groupId>org.apache.kafka</groupId>
			<artifactId>kafka-clients</artifactId>
			<version>${kafka.clients.version}</version>
		</dependency>
		<dependency>
			<groupId>org.springframework</groupId>
			<artifactId>spring-core</artifactId>
			<version>${spring.core.version}</version>
		</dependency>
		<!-- Json -->
		<dependency>
			<groupId>com.google.code.gson</groupId>
			<artifactId>gson</artifactId>
			<version>2.11.0</version>
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
								<exclude>**/PersistenceAssignmentVericlearApplication.class</exclude>
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

## src/main/java/com/nubo/persistence/assignment/vericlear/PersistenceAssignmentVericlearApplication.java

```java
package com.nubo.persistence.assignment.vericlear;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class PersistenceAssignmentVericlearApplication {

	public static void main(String[] args) {
		SpringApplication.run(PersistenceAssignmentVericlearApplication.class, args);
	}

}

```

## src/main/java/com/nubo/persistence/assignment/vericlear/application/config/KafkaConsumerConfig.java

```java
package com.nubo.persistence.assignment.vericlear.application.config;


import com.nubo.persistence.assignment.vericlear.application.properties.PropertiesConfig;
import com.nubo.persistence.assignment.vericlear.exception.ServiceException;
import com.nubo.persistence.assignment.vericlear.exception.error.ErrorCode;
import com.nubo.persistence.assignment.vericlear.exception.kafka.KafkaErrorBuild;
import com.nubo.persistence.assignment.vericlear.models.dto.request.TradeAllocationMessageInDto;
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
import java.util.Map;

@EnableKafka
@Configuration
@RequiredArgsConstructor
public class KafkaConsumerConfig {

    private final PropertiesConfig propertiesConfig;

    @Bean
    public ConsumerFactory<String, TradeAllocationMessageInDto> consumerFactoryKafkaNubo() {
        Map<String, Object> configProps = new HashMap<>();
        configProps.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, propertiesConfig.getKafkaNuboBootstrapServers());
        configProps.put(ConsumerConfig.GROUP_ID_CONFIG, propertiesConfig.getKafkaNuboGroupId());
        configProps.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);
        configProps.put(ConsumerConfig.AUTO_OFFSET_RESET_CONFIG, propertiesConfig.getKafkaNuboAutoOffsetReset());
        configProps.put("security.protocol", propertiesConfig.getKafkaNuboSecurityProtocol());
        configProps.put("sasl.mechanism", propertiesConfig.getKafkaNuboSaslMechanism());
        configProps.put("sasl.jaas.config", propertiesConfig.getKafkaNuboSaslJaasConfig());

        JsonDeserializer<TradeAllocationMessageInDto> jsonDeserializer = new JsonDeserializer<>(TradeAllocationMessageInDto.class);
        jsonDeserializer.addTrustedPackages("com.nubo.persistence.assignment.vericlear");

        return new DefaultKafkaConsumerFactory<>(
                configProps,
                new StringDeserializer(),
                new ErrorHandlingDeserializer<>(jsonDeserializer)
        );
    }
    @Bean
    public ConcurrentKafkaListenerContainerFactory<String, TradeAllocationMessageInDto> kafkaNuboListenerContainerFactory(
            DefaultErrorHandler errorHandler) {
        ConcurrentKafkaListenerContainerFactory<String, TradeAllocationMessageInDto> factory = new ConcurrentKafkaListenerContainerFactory<>();
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

## src/main/java/com/nubo/persistence/assignment/vericlear/application/database/NamingStrategyConfig.java

```java
package com.nubo.persistence.assignment.vericlear.application.database;

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

## src/main/java/com/nubo/persistence/assignment/vericlear/application/database/UpperNamingConfig.java

```java
package com.nubo.persistence.assignment.vericlear.application.database;

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

## src/main/java/com/nubo/persistence/assignment/vericlear/application/properties/PropertiesConfig.java

```java
package com.nubo.persistence.assignment.vericlear.application.properties;

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
}

```

## src/main/java/com/nubo/persistence/assignment/vericlear/application/util/ApplicationUtils.java

```java
package com.nubo.persistence.assignment.vericlear.application.util;

import com.google.gson.Gson;

import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.Optional;

public class ApplicationUtils {

    static final String FORMAT_DATETIME = "yyyy-MM-dd";

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
        return new Gson().toJson(object);
    }

    public static <T> T convertJsonToObject(String json, Class<T> clazz) {
        return new Gson().fromJson(json, clazz);
    }

    public static LocalDate convertNanoTimestampToLocalDate(Long nanoTimestamp) {
        return Optional.ofNullable(nanoTimestamp)
                .map(time -> Instant.ofEpochMilli(time / 1_000_000L)
                        .atZone(ZoneId.systemDefault())
                        .toLocalDate())
                .orElse(LocalDate.now());
    }
}


```

## src/main/java/com/nubo/persistence/assignment/vericlear/application/util/ObjectUtils.java

```java
package com.nubo.persistence.assignment.vericlear.application.util;

public class ObjectUtils {
}

```

## src/main/java/com/nubo/persistence/assignment/vericlear/exception/ServiceException.java

```java
package com.nubo.persistence.assignment.vericlear.exception;


import com.nubo.persistence.assignment.vericlear.exception.error.ErrorCode;
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
        super(errorCode.getMessage().concat(" " + message));
        this.errorCode = errorCode;
    }

}

```

## src/main/java/com/nubo/persistence/assignment/vericlear/exception/error/ErrorCode.java

```java
package com.nubo.persistence.assignment.vericlear.exception.error;

import lombok.Getter;

@Getter
public enum ErrorCode {

    SYSTEM_NOT_FOUND("System not found "),
    STATUS_NOT_FOUND("Status not Found"),
    SIDE_NOT_FOUND("Side Not Found"),
    INVALID_TRADE_SIDE("Invalid Trade Side"),
    INVESTOR_ACCOUNT_NOT_FOUND("Investor account not found"),
    PARTICIPANT_ACCOUNT_NOT_FOUND("Participant account not found"),
    TYPE_NOT_FOUND("type not found"),
    TRADE_NOT_FOUND("Trade not found"),
    TAXES_NOT_FOUND("Taxes not found"),
    EMPTY_ALLOCATIONS("Allocations is null"),
    ERROR_KAFKA_CONSUMER_NUBO("Error Producer Kafka Nubo"),
    ERROR_DESERIALIZER_JSON("Error Deserializer Json");

    private final String message;

    ErrorCode(String message) {
        this.message = message;
    }

    public String getName() {
        return this.name();
    }

}
```

## src/main/java/com/nubo/persistence/assignment/vericlear/exception/error/ErrorResponse.java

```java
package com.nubo.persistence.assignment.vericlear.exception.error;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class ErrorResponse {

    private Integer httpCode;
    private String httpMethod;
    private String url;
    private String timestamp;
    private String errorCode;
    private String errorMessage;
    private String errorMessageDetail;
    private List<ErrorValidation> errorDetails;

}

```

## src/main/java/com/nubo/persistence/assignment/vericlear/exception/error/ErrorValidation.java

```java
package com.nubo.persistence.assignment.vericlear.exception.error;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ErrorValidation {

    private String id;
    private String description;

}

```

## src/main/java/com/nubo/persistence/assignment/vericlear/exception/kafka/KafkaErrorBuild.java

```java
package com.nubo.persistence.assignment.vericlear.exception.kafka;


import com.nubo.persistence.assignment.vericlear.application.properties.PropertiesConfig;
import com.nubo.persistence.assignment.vericlear.exception.error.ErrorCode;
import com.nubo.persistence.assignment.vericlear.exception.error.ErrorResponse;
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

## src/main/java/com/nubo/persistence/assignment/vericlear/kafka/consumer/KafkaNuboAdapter.java

```java
package com.nubo.persistence.assignment.vericlear.kafka.consumer;

import com.nubo.persistence.assignment.vericlear.application.properties.PropertiesConfig;
import com.nubo.persistence.assignment.vericlear.exception.ServiceException;
import com.nubo.persistence.assignment.vericlear.exception.error.ErrorCode;
import com.nubo.persistence.assignment.vericlear.exception.kafka.KafkaErrorBuild;
import com.nubo.persistence.assignment.vericlear.models.dto.request.TradeAllocationMessageInDto;
import com.nubo.persistence.assignment.vericlear.models.dto.request.VericlearInDto;
import com.nubo.persistence.assignment.vericlear.service.ProcessMessageService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.support.KafkaHeaders;
import org.springframework.messaging.handler.annotation.Header;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.retry.support.RetryTemplate;
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
    public void listenKafka(@Payload TradeAllocationMessageInDto tradeAllocationMessageInDto,
                            @Header(KafkaHeaders.RECEIVED_PARTITION) int partition,
                            @Header(KafkaHeaders.OFFSET) long offset,
                            @Header(KafkaHeaders.RECEIVED_TOPIC) String topic,
                            @Header(KafkaHeaders.DELIVERY_ATTEMPT) int retry) {
        log.info("New received Message -- Topic: {} -- Partition : {} -- Offset : {} -- retry: {}",
                topic, partition, offset, retry);

        processMessageService.sendVericlearToDataBase(tradeAllocationMessageInDto);
    }
}

```

## src/main/java/com/nubo/persistence/assignment/vericlear/models/dto/request/SimpleDateInDto.java

```java
package com.nubo.persistence.assignment.vericlear.models.dto.request;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class SimpleDateInDto {

    private int year;

    private int month;

    private int day;

    public LocalDate toLocalDate() {
        return LocalDate.of(this.year, this.month, this.day);
    }
}
```

## src/main/java/com/nubo/persistence/assignment/vericlear/models/dto/request/TradeAllocationMessageInDto.java

```java
package com.nubo.persistence.assignment.vericlear.models.dto.request;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
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
public class TradeAllocationMessageInDto {

    private List<VericlearInDto> allocations;


}

```

## src/main/java/com/nubo/persistence/assignment/vericlear/models/dto/request/ValueInDto.java

```java
package com.nubo.persistence.assignment.vericlear.models.dto.request;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import java.math.BigDecimal;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class ValueInDto {

    private BigDecimal value;

}

```

## src/main/java/com/nubo/persistence/assignment/vericlear/models/dto/request/VericlearInDto.java

```java
package com.nubo.persistence.assignment.vericlear.models.dto.request;

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
public class VericlearInDto {

    private String accountTransactionType;

    private String accountTransactionStatus;

    private Integer tradeId;

    private String reference;

    private String segmentCode;

    private String clearingMemberCode;

    private String tradingMemberCode;

    private String accountId;

    private String accountGroupCode;

    private String accountGroupType;

    private String ccpCode;

    private String csdCode;

    private String csdAccountCode;

    private String symbol;

    private String isin;

    private Integer status;

    private String instrumentTypeStatus;

    private SimpleDateInDto clearingDate;

    private String tradeSide;

    private ValueInDto price;

    private ValueInDto quantity;

    private String lastUpdatedTimestamp;

    private String lastUpdatedUser;

    private int dealId;

    private String messageDealId;

    private String exchange;

    private String tradeEntryType;

    private SimpleDateInDto tradeDate;

    private SimpleDateInDto settlementDate;

    private String counterpartyClearingMemberCode;

    private String counterpartyTradingMemberCode;

    private String giveupLinkId;

    private int allocationLinkId;

    private int allocationReferenceId;

    private String reasonCode;

    private String earlySettlementRequestStatus;

    //private String accounttype;

}

```

## src/main/java/com/nubo/persistence/assignment/vericlear/models/entity/CfiEntity.java

```java
package com.nubo.persistence.assignment.vericlear.models.entity;

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
@Table(name = "\"CFI\"", schema = "\"NUANBODB\"")
public class CfiEntity {

    @Id
    @Column(name = "\"CFI_ID\"", length = 6, nullable = false)
    private String id;

    @Column(name = "\"DESCRIPTION\"", length = 80, nullable = false)
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

## src/main/java/com/nubo/persistence/assignment/vericlear/models/entity/CityEntity.java

```java
package com.nubo.persistence.assignment.vericlear.models.entity;

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
@Table(name = "\"CITY\"", schema = "\"NUANBODB\"")
public class CityEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"CITY_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"DESCRIPTION\"", length = 80, nullable = false)
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

## src/main/java/com/nubo/persistence/assignment/vericlear/models/entity/CountryEntity.java

```java
package com.nubo.persistence.assignment.vericlear.models.entity;

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
@Table(name = "\"COUNTRY\"", schema = "\"NUANBODB\"")
public class CountryEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"COUNTRY_ID\"")
    private Long id;

    @Column(name = "\"CODE\"", length = 3, nullable = false)
    private String code;

    @Column(name = "\"NAME\"", length = 30, nullable = false)
    private String name;

    @ManyToOne
    @JoinColumn(name = "\"CURRENCY_ID\"", nullable = false)
    private CurrencyEntity currency;

    @Column(name = "\"TIME_ZONE\"", length = 30, nullable = false)
    private String timeZone;

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

## src/main/java/com/nubo/persistence/assignment/vericlear/models/entity/CurrencyEntity.java

```java
package com.nubo.persistence.assignment.vericlear.models.entity;

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
@Table(name = "\"CURRENCY\"", schema = "\"NUANBODB\"")
public class CurrencyEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"CURRENCY_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"CODE\"", length = 3, nullable = false)
    private String code;

    @Column(name = "\"NAME\"", length = 30, nullable = false)
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

## src/main/java/com/nubo/persistence/assignment/vericlear/models/entity/DepartmentEntity.java

```java
package com.nubo.persistence.assignment.vericlear.models.entity;

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
@Table(name = "\"DEPARTMENT\"", schema = "\"NUANBODB\"")
public class DepartmentEntity {

    @Id
    @Column(name = "\"DEPARTMENT_ID\"", length = 10, nullable = false)
    private String id;

    @Column(name = "\"DESCRIPTION\"", length = 80, nullable = false)
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

## src/main/java/com/nubo/persistence/assignment/vericlear/models/entity/DepositoryEntity.java

```java
package com.nubo.persistence.assignment.vericlear.models.entity;

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
    @Column(name = "\"DEPOSITORY_ID\"", length = 2)
    private String id;

    @Column(name = "\"DESCRIPTION\"", length = 80, nullable = false)
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

## src/main/java/com/nubo/persistence/assignment/vericlear/models/entity/DepositoryMappingEntity.java

```java
package com.nubo.persistence.assignment.vericlear.models.entity;

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
@Table(name = "\"DEPOSITORY_MAPPING\"", schema = "\"NUANBODB\"")
public class DepositoryMappingEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"DEPOSITORY_MAPPING_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"EXTERNAL_SYSTEM\"", length = 30, nullable = false)
    private String externalSystem;

    @Column(name = "\"EXTERNAL_CODE\"", length = 20)
    private String externalCode;

    @Column(name = "\"EXTERNAL_DESCRIPTION\"", length = 255, nullable = false)
    private String externalDescription;

    @ManyToOne
    @JoinColumn(name = "\"DEPOSITORY_ID\"", nullable = false)
    private DepositoryEntity depository;

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

## src/main/java/com/nubo/persistence/assignment/vericlear/models/entity/GicsEntity.java

```java
package com.nubo.persistence.assignment.vericlear.models.entity;

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
@Table(name = "\"GICS\"", schema = "\"NUANBODB\"")
public class GicsEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"GICS_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"DESCRIPTION\"", length = 80, nullable = false)
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

## src/main/java/com/nubo/persistence/assignment/vericlear/models/entity/IdentificationTypeEntity.java

```java
package com.nubo.persistence.assignment.vericlear.models.entity;

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
@Table(name = "\"IDENTIFICATION_TYPE\"", schema = "\"NUANBODB\"")
public class IdentificationTypeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"IDENTIFICATION_TYPE_ID\"", nullable = false)
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

## src/main/java/com/nubo/persistence/assignment/vericlear/models/entity/InvestorAccountEntity.java

```java
package com.nubo.persistence.assignment.vericlear.models.entity;

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
@Table(name = "\"INVESTOR_ACCOUNT\"", schema = "\"NUANBODB\"")
public class InvestorAccountEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"INVESTOR_ACCOUNT_ID\"", nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "\"INVESTOR_ID\"")
    private InvestorEntity investor;

    @Column(name = "\"ACCOUNT_NUMBER\"", length = 50)
    private String accountNumber;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"")
    private StatusEntity status;

    @ManyToOne
    @JoinColumn(name = "\"TYPE_ID\"")
    private TypeEntity type;

    @ManyToOne
    @JoinColumn(name = "\"DEPOSITORY_ID\"")
    private DepositoryEntity depository;

    @Column(name = "\"PARTICIPANT_ID\"")
    private Long participantId;

    @Column(name = "\"ORIGIN_TYPE_ID\"")
    private Integer originTypeId;

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

## src/main/java/com/nubo/persistence/assignment/vericlear/models/entity/InvestorEntity.java

```java
package com.nubo.persistence.assignment.vericlear.models.entity;

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
@Table(name = "\"INVESTOR\"", schema = "\"NUANBODB\"")
public class InvestorEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"INVESTOR_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"CODE\"", length = 10, nullable = false)
    private String code;

    @Column(name = "\"FIRST_NAME\"", length = 60)
    private String firstName;

    @Column(name = "\"LAST_NAME\"", length = 60)
    private String lastName;

    @Column(name = "\"COMPANY_NAME\"", length = 100)
    private String companyName;

    @ManyToOne
    @JoinColumn(name = "\"TYPE_ID\"", nullable = false)
    private TypeEntity type;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"", nullable = false)
    private StatusEntity status;

    @ManyToOne
    @JoinColumn(name = "\"COUNTRY_ID\"", nullable = false)
    private CountryEntity country;

    @ManyToOne
    @JoinColumn(name = "\"DEPARTMENT_ID\"", nullable = false)
    private DepartmentEntity department;

    @ManyToOne
    @JoinColumn(name = "\"CITY_ID\"", nullable = false)
    private CityEntity city;

    @Column(name = "\"DOCUMENT_NUMBER\"", length = 20)
    private String documentNumber;

    @ManyToOne
    @JoinColumn(name = "\"IDENTIFICATION_TYPE_ID\"", nullable = false)
    private IdentificationTypeEntity identificationType;

    @Column(name = "\"NATIONALITY\"", length = 2)
    private String nationality;

    @Column(name = "\"ADDRESS\"", length = 100)
    private String address;

    @Column(name = "\"PHONE_NUMBER\"", length = 20)
    private String phoneNumber;

    @Column(name = "\"EMAIL\"", length = 50)
    private String email;

    @Column(name = "\"CLEARINGHOUSE_CODE\"", length = 20)
    private String clearinghouseCode;

    @ManyToOne
    @JoinColumn(name = "\"GICS_ID\"", nullable = false)
    private GicsEntity gics;

    @Column(name = "\"MONEY_LAUNDERING_FLAG\"", length = 1)
    private String moneyLaunderingFlag;

    @ManyToOne
    @JoinColumn(name = "\"TAX_STATUS_ID\"", nullable = false)
    private TaxStatusEntity taxStatus;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 250, nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", nullable = false, length = 30)
    private String lastModifyIp;

}
```

## src/main/java/com/nubo/persistence/assignment/vericlear/models/entity/MarketEntity.java

```java
package com.nubo.persistence.assignment.vericlear.models.entity;

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
@Table(name = "\"MARKET\"", schema = "\"NUANBODB\"")
public class MarketEntity {

    @Id
    @Column(name = "\"MARKET_ID\"", length = 2)
    private String id;

    @Column(name = "\"DESCRIPTION\"", length = 80)
    private String description;

    @Column(name = "\"CATEGORY\"", length = 50)
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

## src/main/java/com/nubo/persistence/assignment/vericlear/models/entity/ParticipantAccountEntity.java

```java
package com.nubo.persistence.assignment.vericlear.models.entity;

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
@Table(name = "\"PARTICIPANT_ACCOUNT\"", schema = "\"NUANBODB\"")
public class ParticipantAccountEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"PARTICIPANT_ACCOUNT_ID\"", nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "\"PARTICIPANT_ID\"")
    private ParticipantEntity participant;

    @Column(name = "\"ACCOUNT_NUMBER\"")
    private String accountNumber;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"")
    private StatusEntity status;

    @ManyToOne
    @JoinColumn(name = "\"TYPE_ID\"")
    private TypeEntity type;

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

## src/main/java/com/nubo/persistence/assignment/vericlear/models/entity/ParticipantEntity.java

```java
package com.nubo.persistence.assignment.vericlear.models.entity;

import jakarta.persistence.*;
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

    @ManyToOne
    @JoinColumn(name = "\"IDENTIFICATION_TYPE_ID\"", nullable = false)
    private IdentificationTypeEntity identificationType;

    @Column(name = "\"NAME\"", length = 100)
    private String name;

    @Column(name = "\"SHORT_NAME\"", length = 50)
    private String shortName;

    @ManyToOne
    @JoinColumn(name = "\"TYPE_ID\"", nullable = false)
    private TypeEntity type;

    @Column(name = "\"MNEMONIC\"", length = 4)
    private String mnemonic;

    @ManyToOne
    @JoinColumn(name = "\"COUNTRY_ID\"", nullable = false)
    private CountryEntity country;

    @Column(name = "\"REGISTRATION_DATE\"")
    private LocalDate registrationDate;

    @Column(name = "\"TAX_CODE\"", length = 20)
    private String taxCode;

    @ManyToOne
    @JoinColumn(name = "\"DEPARTMENT_ID\"", nullable = false)
    private DepartmentEntity department;

    @Column(name = "\"MAIN_ADDRESS\"", length = 100)
    private String mainAddress;

    @Column(name = "\"WEB_PAGE\"", length = 100)
    private String webPage;

    @Column(name = "\"PHONE_NUMBER\"", length = 20)
    private String phoneNumber;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"", nullable = false)
    private StatusEntity status;

    @Column(name = "\"NIT_CLEARING_HOUSE\"", length = 20)
    private String nitClearingHouse;

    @ManyToOne
    @JoinColumn(name = "\"TAX_STATUS_ID\"", nullable = false)
    private TaxStatusEntity taxStatus;

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

## src/main/java/com/nubo/persistence/assignment/vericlear/models/entity/SecurityTitleEntity.java

```java
package com.nubo.persistence.assignment.vericlear.models.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"SECURITY_TITLE\"", schema = "\"NUANBODB\"")
public class SecurityTitleEntity {

    @Id
    @Column(name = "\"SECURITY_ID\"", nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "\"MARKET_ID\"", nullable = false)
    private MarketEntity market;

    @Column(name = "\"EQUITY_CODE\"", length = 15)
    private String equityCode;

    @Column(name = "\"MNEMONIC\"", length = 20, nullable = false)
    private String mnemonic;

    @Column(name = "\"ISIN\"", length = 20, nullable = false)
    private String isin;

    @ManyToOne
    @JoinColumn(name = "\"CFI_ID\"", nullable = false)
    private CfiEntity cfi;

    @Column(name = "\"CURRENCY_ID\"", nullable = false)
    private Integer currencyId;

    @Column(name = "\"SETTLEMENT_PERIOD\"", length = 2, nullable = false)
    private String settlementPeriod;

    @Column(name = "\"LISTING_DATE\"", nullable = false)
    private LocalDateTime listingDate;

    @Column(name = "\"DELISTING_DATE\"", nullable = false)
    private LocalDate delistingDate;

    @Column(name = "\"PARENT\"")
    private Boolean parent;

    @Column(name = "\"PARENT_ID\"")
    private Long parentId;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"", nullable = false)
    private StatusEntity status;

    @Column(name= "\"ISSUER_ID\"", nullable = false)
    private Integer issuerId;

    @Column(name = "\"COUNTRY_ID\"", nullable = false)
    private Integer countryId;

    @Column(name = "\"AMOUNT_ISSUED\"", precision = 20, nullable = false)
    private BigInteger amountIssued;

    @Column(name = "\"CLASS_ID\"", length = 2, nullable = false)
    private String classId;

    @Column(name = "\"SEGMENT_ID\"", nullable = false)
    private Integer segmentId;

    @Column(name = "\"CATEGORY\"", length = 20, nullable = false)
    private String category;

    @ManyToOne
    @JoinColumn(name = "\"DEPOSITORY_ID\"", nullable = false)
    private DepositoryEntity depository;

    @Column(name = "\"PUNISHMENT_REPO\"", precision = 5, scale = 4)
    private BigDecimal punishmentRepo;

    @Column(name = "\"REGULATORY_CODE\"", length = 2, nullable = false)
    private String regulatoryCode;

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

## src/main/java/com/nubo/persistence/assignment/vericlear/models/entity/SettlementEntity.java

```java
package com.nubo.persistence.assignment.vericlear.models.entity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@IdClass(SettlementKey.class)
@Table(name = "\"SETTLEMENT\"", schema = "\"NUANBODB\"")
public class SettlementEntity {

    @Id
    @ManyToOne
    @JoinColumn(name = "\"TRADE_ID\"", nullable = false)
    private TradeEntity trade;

    @Id
    @Column(name = "\"FRACTION\"", nullable = false)
    private Integer fraction;

    @Id
    @ManyToOne
    @JoinColumn(name = "\"SIDE_ID\"", nullable = false)
    private SideEntity side;

    @ManyToOne
    @JoinColumn(name = "\"INVESTOR_ID\"")
    private InvestorEntity investor;

    @ManyToOne
    @JoinColumn(name = "\"INVESTOR_ACCOUNT_ID\"")
    private InvestorAccountEntity investorAccount;

    @ManyToOne
    @JoinColumn(name = "\"PARTICIPANT_ACCOUNT_ID\"")
    private ParticipantAccountEntity participantAccount;

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

    @Column(name = "\"VAL_TAX_AMOUNT\"", precision = 19, scale = 4)
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

    @Column(name = "\"REPO_AMOUNT\"", precision = 16, scale = 4)
    private BigDecimal repoAmount;

    @Column(name = "\"FUNDING_AMOUNT\"", precision = 16, scale = 4)
    private BigDecimal fundingAmount;

    @Column(name = "\"NET_OUTFLOW_TOTAL\"", precision = 16, scale = 4)
    private BigDecimal netOutFlowTotal;

    @Column(name = "\"OUTFLOW_TURNOVER_VALUE\"", precision = 16, scale = 4)
    private BigDecimal outFlowTurnoverValue;

    @Column(name = "\"RETURN_TURNOVER_VALUE\"", precision = 16, scale = 4)
    private BigDecimal returnTurnoverValue;

    @Column(name = "\"DELIVERY_VERSUS_PAYMENT_VALUE\"", precision = 16, scale = 4)
    private BigDecimal deliveryVersusPaymentValue;

    @Column(name = "\"SETTLEMENT_AMOUNT\"", precision = 16, scale = 4)
    private BigDecimal settlementAmount;

    @ManyToOne
    @JoinColumn(name = "\"TRADING_SYSTEM_ID\"")
    private TradingSystemEntity tradingSystem;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"")
    private StatusEntity status;

    @Column(name = "\"BROKERAGE_SERVICE\"", precision = 16, scale = 4)
    private BigDecimal brokerageService;

    @Column(name = "\"CUSTODIAN_ID\"")
    private Long custodianId;

    @Column(name = "\"BANK_ACCOUNT_ID\"")
    private Long bankAccountId;

    @Column(name = "\"REFERENCE\"")
    private String reference;

    @Column(name = "\"CAPITAL_GAIN_VALUE\"", precision = 16, scale = 4)
    private BigDecimal capitalGainValue;

    @Column(name = "\"DISBURSEMENT_VALUE\"", precision = 18, scale = 2)
    private BigDecimal disbursementValue;

    @ManyToOne
    @JoinColumn(name = "\"SOURCE_QUOTE_TYPE_ID\"")
    private TypeEntity sourceQuoteType;

    @Column(name = "\"FIC_ADMINISTRATOR_ID\"")
    private Long ficAdministratorId;

    @Column(name = "\"DIRECT_DEPOSITOR\"")
    private Long directDepositor;


    @Column(name = "\"LAST_MODIFY_USER\"", length = 250, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 30, nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 30, nullable = false)
    private String lastModifyIp;
}
```

## src/main/java/com/nubo/persistence/assignment/vericlear/models/entity/SettlementKey.java

```java
package com.nubo.persistence.assignment.vericlear.models.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SettlementKey implements Serializable {

    private Long trade;

    private Integer fraction;

    private String side;
}

```

## src/main/java/com/nubo/persistence/assignment/vericlear/models/entity/SettlementStatusHistoryEntity.java

```java
package com.nubo.persistence.assignment.vericlear.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
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
@IdClass(SettlementStatusHistoryKey.class)
@Table(name = "\"SETTLEMENT_STATUS_HISTORY\"", schema = "\"NUANBODB\"")
public class SettlementStatusHistoryEntity {

    @Id
    @ManyToOne
    @JoinColumn(name = "\"TRADE_ID\"", nullable = false)
    private TradeEntity trade;

    @Id
    @Column(name = "\"FRACTION\"", nullable = false)
    private Integer fraction;

    @Id
    @ManyToOne
    @JoinColumn(name = "\"SIDE_ID\"", insertable = false, updatable = false)
    private SideEntity side;

    @Id
    @Column(name = "\"TIME\"", nullable = false)
    private LocalDateTime time;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"", nullable = false)
    private StatusEntity status;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 30, nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 30, nullable = false)
    private String lastModifyIp;
}

```

## src/main/java/com/nubo/persistence/assignment/vericlear/models/entity/SettlementStatusHistoryKey.java

```java
package com.nubo.persistence.assignment.vericlear.models.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SettlementStatusHistoryKey {

    private Long trade;

    private Integer fraction;

    private String side;

    private LocalDateTime time;

}

```

## src/main/java/com/nubo/persistence/assignment/vericlear/models/entity/SideEntity.java

```java
package com.nubo.persistence.assignment.vericlear.models.entity;

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
@Table(name = "\"SIDE\"", schema = "\"NUANBODB\"")
public class SideEntity {

    @Id
    @Column(name = "\"SIDE_ID\"", length = 2)
    private String id;

    @Column(name = "\"DESCRIPTION\"", length = 80, nullable = false)
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

## src/main/java/com/nubo/persistence/assignment/vericlear/models/entity/StatusEntity.java

```java
package com.nubo.persistence.assignment.vericlear.models.entity;

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

## src/main/java/com/nubo/persistence/assignment/vericlear/models/entity/TaxStatusEntity.java

```java
package com.nubo.persistence.assignment.vericlear.models.entity;

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
@Table(name = "\"TAX_STATUS\"", schema = "\"NUANBODB\"")
public class TaxStatusEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"TAX_STATUS_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"DESCRIPTION\"", length = 80, nullable = false)
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

## src/main/java/com/nubo/persistence/assignment/vericlear/models/entity/TaxesEntity.java

```java
package com.nubo.persistence.assignment.vericlear.models.entity;

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

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"TAXES\"", schema = "\"NUANBODB\"")
public class TaxesEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"TAXES_ID\"", nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "\"COUNTRY_ID\"", nullable = false)
    private CountryEntity country;

    @Column(name = "\"CODE\"", length = 50, nullable = false)
    private String code;

    @Column(name = "\"DESCRIPTION\"", length = 250, nullable = false)
    private String description;

    @Column(name = "\"VALUE\"", precision = 16, scale = 4, nullable = false)
    private BigDecimal value;

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

## src/main/java/com/nubo/persistence/assignment/vericlear/models/entity/TradeEntity.java

```java
package com.nubo.persistence.assignment.vericlear.models.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"TRADE\"", schema = "\"NUANBODB\"")
public class TradeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"TRADE_ID\"")
    private Long id;

    @Column(name = "\"MATCH_DATE\"")
    private LocalDate matchDate;

    @Column(name = "\"MATCH_ID\"", precision = 19)
    private Long matchId;

    @Column(name = "\"ASSIGNMENT_MARK_BUY\"")
    private Boolean assignmentMarkBuy;

    @Column(name = "\"ASSIGNMENT_MARK_SELL\"")
    private Boolean assignmentMarkSell;

    @ManyToOne
    @JoinColumn(name = "\"COUNTRY_ID\"")
    private CountryEntity country;

    @Column(name = "\"FRACTIONAL_MARK_BUY\"")
    private Boolean fractionalMarkBuy;

    @Column(name = "\"FRACTIONAL_MARK_SELL\"")
    private Boolean fractionalMarkSell;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"", nullable = false)
    private StatusEntity status;

}

```

## src/main/java/com/nubo/persistence/assignment/vericlear/models/entity/TradingSessionEntity.java

```java
package com.nubo.persistence.assignment.vericlear.models.entity;

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
@Table(name = "\"TRADING_SESSION\"", schema = "\"NUANBODB\"")
public class TradingSessionEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"TRADING_SESSION_ID\"", length = 2)
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

## src/main/java/com/nubo/persistence/assignment/vericlear/models/entity/TradingSystemEntity.java

```java
package com.nubo.persistence.assignment.vericlear.models.entity;

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
@Table(name = "\"TRADING_SYSTEM\"", schema = "\"NUANBODB\"")
public class TradingSystemEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"TRADING_SYSTEM_ID\"")
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

## src/main/java/com/nubo/persistence/assignment/vericlear/models/entity/TypeEntity.java

```java
package com.nubo.persistence.assignment.vericlear.models.entity;

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

## src/main/java/com/nubo/persistence/assignment/vericlear/models/enums/BankAccountIdEnum.java

```java
package com.nubo.persistence.assignment.vericlear.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Arrays;

@Getter
@RequiredArgsConstructor
public enum BankAccountIdEnum {

    BIGINT(0L);


    private final Long value;


}
```

## src/main/java/com/nubo/persistence/assignment/vericlear/models/enums/SideEnum.java

```java
package com.nubo.persistence.assignment.vericlear.models.enums;

public enum SideEnum {
    BUY("1"),
    SELL("2");

    private final String id;

    SideEnum(String id) { this.id = id; }

    public String getId() { return id; }

    public static SideEnum fromTradeSide(String tradeSide) {
        if (tradeSide == null) throw new IllegalArgumentException("tradeSide null");
        return switch (tradeSide.trim().toUpperCase()) {
            case "ORDER_SIDE_BUY"  -> BUY;
            case "ORDER_SIDE_SELL" -> SELL;
            default -> throw new IllegalArgumentException("tradeSide inválido: " + tradeSide);
        };
    }
}

```

## src/main/java/com/nubo/persistence/assignment/vericlear/models/enums/StatusOperationAssigmentEnum.java

```java
package com.nubo.persistence.assignment.vericlear.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Arrays;
import java.util.Map;
import java.util.Objects;
import java.util.function.Function;
import java.util.stream.Collectors;
@Getter
@RequiredArgsConstructor
public enum StatusOperationAssigmentEnum {
    REGISTRADA(1L, "REGISTRADA"),
    ASIGNADA(2L, "ASIGNADA"),
    CANCELADA(11L, "CANCELADA"),
    REASIGNADA(12L, "REASIGNADA");

    private final Long id;
    private final String label;


    public Long getId() { return id; }
    public String getLabel() { return label; }

    private static final Map<Long, StatusOperationAssigmentEnum> BY_ID =
            Arrays.stream(values()).collect(Collectors.toMap(StatusOperationAssigmentEnum::getId, Function.identity()));

}

```

## src/main/java/com/nubo/persistence/assignment/vericlear/models/enums/TaxesEnum.java

```java
package com.nubo.persistence.assignment.vericlear.models.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Arrays;

@Getter
@RequiredArgsConstructor
public enum TaxesEnum {

    IVA("IVA");

    private final String value;

    @JsonValue
    public String getValue() {
        return value;
    }

    @JsonCreator
    public static TaxesEnum fromValue(String value) {
        return Arrays.stream(TaxesEnum.values())
                .filter(version -> version.value.equalsIgnoreCase(value))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Version not implemented: " + value));
    }

    @Converter(autoApply = true)
    public static class TaxesEnumConverter implements AttributeConverter<TaxesEnum, String> {
        @Override
        public String convertToDatabaseColumn(TaxesEnum status) {
            return status != null ? status.getValue() : null;
        }

        @Override
        public TaxesEnum convertToEntityAttribute(String dbData) {
            return dbData != null ? TaxesEnum.fromValue(dbData) : null;
        }
    }

}
```

## src/main/java/com/nubo/persistence/assignment/vericlear/repository/DepositoryMappingRepository.java

```java
package com.nubo.persistence.assignment.vericlear.repository;

import com.nubo.persistence.assignment.vericlear.models.entity.DepositoryMappingEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface DepositoryMappingRepository extends JpaRepository<DepositoryMappingEntity, Long> {

    Optional<DepositoryMappingEntity> findByExternalCodeAndCategory(String externalCode, String category);

    // Optional<DepositoryMappingEntity> findByExternalCodeIgnoreCaseAndCategoryIgnoreCase(String externalCode, String category);
}
```

## src/main/java/com/nubo/persistence/assignment/vericlear/repository/InvestorAccountRepository.java

```java
package com.nubo.persistence.assignment.vericlear.repository;

import com.nubo.persistence.assignment.vericlear.models.entity.InvestorAccountEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface InvestorAccountRepository extends JpaRepository<InvestorAccountEntity, Long> {

    InvestorAccountEntity findByAccountNumber(String accountNumber);
}

```

## src/main/java/com/nubo/persistence/assignment/vericlear/repository/ParticipantAccountRepository.java

```java
package com.nubo.persistence.assignment.vericlear.repository;

import com.nubo.persistence.assignment.vericlear.models.entity.InvestorAccountEntity;
import com.nubo.persistence.assignment.vericlear.models.entity.ParticipantAccountEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ParticipantAccountRepository extends JpaRepository<ParticipantAccountEntity, Long> {

    ParticipantAccountEntity findByAccountNumber(String accountNumber);
}

```

## src/main/java/com/nubo/persistence/assignment/vericlear/repository/SettlementRepository.java

```java
package com.nubo.persistence.assignment.vericlear.repository;

import com.nubo.persistence.assignment.vericlear.models.entity.SettlementEntity;
import com.nubo.persistence.assignment.vericlear.models.entity.SideEntity;
import com.nubo.persistence.assignment.vericlear.models.entity.TradeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SettlementRepository extends JpaRepository<SettlementEntity, Long> {
    List<SettlementEntity> findByTradeAndSide(TradeEntity trade, SideEntity side);


}

```

## src/main/java/com/nubo/persistence/assignment/vericlear/repository/SettlementStatusHistoryRepository.java

```java
package com.nubo.persistence.assignment.vericlear.repository;

import com.nubo.persistence.assignment.vericlear.models.entity.SettlementStatusHistoryEntity;
import com.nubo.persistence.assignment.vericlear.models.entity.SettlementStatusHistoryKey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;

public interface SettlementStatusHistoryRepository extends JpaRepository<SettlementStatusHistoryEntity, SettlementStatusHistoryKey>,
        JpaSpecificationExecutor<SettlementStatusHistoryEntity> {

}

```

## src/main/java/com/nubo/persistence/assignment/vericlear/repository/SideRepository.java

```java
package com.nubo.persistence.assignment.vericlear.repository;

import com.nubo.persistence.assignment.vericlear.models.entity.SideEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SideRepository extends JpaRepository<SideEntity, String> {
}
```

## src/main/java/com/nubo/persistence/assignment/vericlear/repository/StatusRepository.java

```java
package com.nubo.persistence.assignment.vericlear.repository;

import com.nubo.persistence.assignment.vericlear.models.entity.StatusEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StatusRepository extends JpaRepository<StatusEntity, Long> {
}

```

## src/main/java/com/nubo/persistence/assignment/vericlear/repository/TaxesRepository.java

```java
package com.nubo.persistence.assignment.vericlear.repository;

import com.nubo.persistence.assignment.vericlear.models.entity.TaxesEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface TaxesRepository extends JpaRepository<TaxesEntity, Long> {

    @Query("SELECT t FROM TaxesEntity t JOIN t.country c " +
            "WHERE c.id = :countryId AND t.code = :code")
    Optional<TaxesEntity> findByCountryIdAndCode(Long countryId, String code);

}

```

## src/main/java/com/nubo/persistence/assignment/vericlear/repository/TradeRepository.java

```java
package com.nubo.persistence.assignment.vericlear.repository;


import com.nubo.persistence.assignment.vericlear.models.entity.TradeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.Optional;

public interface TradeRepository extends JpaRepository<TradeEntity, Long>{

    Optional<TradeEntity> findByMatchIdAndMatchDate(Long matchId, LocalDate matchDate);
}
```

## src/main/java/com/nubo/persistence/assignment/vericlear/repository/TradingSystemRepository.java

```java
package com.nubo.persistence.assignment.vericlear.repository;

import com.nubo.persistence.assignment.vericlear.models.entity.TradingSystemEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TradingSystemRepository extends JpaRepository<TradingSystemEntity, String> {

    Optional<TradingSystemEntity> findByDescription(String description);

}

```

## src/main/java/com/nubo/persistence/assignment/vericlear/repository/TypeRepository.java

```java
package com.nubo.persistence.assignment.vericlear.repository;


import com.nubo.persistence.assignment.vericlear.models.entity.TypeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TypeRepository extends JpaRepository<TypeEntity, Integer> {
}

```

## src/main/java/com/nubo/persistence/assignment/vericlear/service/ProcessMessageService.java

```java
package com.nubo.persistence.assignment.vericlear.service;


import com.nubo.persistence.assignment.vericlear.models.dto.request.TradeAllocationMessageInDto;

public interface ProcessMessageService {

    void sendVericlearToDataBase(TradeAllocationMessageInDto tradeAllocationMessageInDto);

}

```

## src/main/java/com/nubo/persistence/assignment/vericlear/service/impl/ProcessMessageServiceImpl.java

```java
package com.nubo.persistence.assignment.vericlear.service.impl;

import com.nubo.persistence.assignment.vericlear.application.properties.PropertiesConfig;
import com.nubo.persistence.assignment.vericlear.exception.ServiceException;
import com.nubo.persistence.assignment.vericlear.exception.error.ErrorCode;
import com.nubo.persistence.assignment.vericlear.models.dto.request.TradeAllocationMessageInDto;
import com.nubo.persistence.assignment.vericlear.models.dto.request.ValueInDto;
import com.nubo.persistence.assignment.vericlear.models.dto.request.VericlearInDto;
import com.nubo.persistence.assignment.vericlear.models.entity.*;
import com.nubo.persistence.assignment.vericlear.models.enums.BankAccountIdEnum;
import com.nubo.persistence.assignment.vericlear.models.enums.SideEnum;
import com.nubo.persistence.assignment.vericlear.models.enums.StatusOperationAssigmentEnum;
import com.nubo.persistence.assignment.vericlear.models.enums.TaxesEnum;
import com.nubo.persistence.assignment.vericlear.repository.*;
import com.nubo.persistence.assignment.vericlear.service.ProcessMessageService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class ProcessMessageServiceImpl implements ProcessMessageService {

    private final SettlementRepository settlementRepository;
    private final SettlementStatusHistoryRepository settlementStatusHistoryRepository;
    private final PropertiesConfig propertiesConfig;
    private final TradingSystemRepository tradingSystemRepository;
    private final TradeRepository tradeRepository;
    private final InvestorAccountRepository investorAccountRepository;
    private final ParticipantAccountRepository participantAccountRepository;
    private final SideRepository sideRepository;
    private final StatusRepository statusRepository;
    private final TaxesRepository taxesRepository;

    @Override
    public void sendVericlearToDataBase(TradeAllocationMessageInDto tradeAllocationMessageInDto) {
        var allocations = tradeAllocationMessageInDto.getAllocations();

        if (allocations == null || allocations.isEmpty()) {
            throw new ServiceException(ErrorCode.EMPTY_ALLOCATIONS);
        }

        var firstAllocation = allocations.get(0);
        TradeEntity tradeEntity = validateAndGetTrade(
                Long.valueOf(firstAllocation.getMessageDealId()),
                firstAllocation.getTradeDate().toLocalDate()
        );
        log.info("Trade: {} {} ",tradeEntity.getAssignmentMarkBuy(), tradeEntity.getAssignmentMarkSell());

        SideEntity side = resolveSide(firstAllocation.getTradeSide());
        List<SettlementEntity> existing = settlementRepository.findByTradeAndSide(tradeEntity, side);
        if (!existing.isEmpty()) {
            settlementRepository.deleteAll(existing);
        }

        TaxesEntity taxesEntity = taxesRepository.findByCountryIdAndCode(tradeEntity.getCountry().getId(), TaxesEnum.IVA.getValue())
                .orElseThrow(() -> new ServiceException(ErrorCode.TAXES_NOT_FOUND));

        List<SettlementEntity> settlements = new ArrayList<>();

        for (int i = 0; i < allocations.size(); i++) {
            var allocation = allocations.get(i);
            String csdAccountCode = allocation.getCsdAccountCode();
            InvestorAccountEntity investorAccount = null;
            InvestorEntity investor = null;
            ParticipantAccountEntity participantAccount =
                    validateParticipantAccountByAccountNumber(csdAccountCode);
            if (participantAccount == null) {
                investorAccount = validateInvestorAccountByAccountNumber(csdAccountCode);
                investor = investorAccount.getInvestor();
            }
            StatusEntity statusEntity = statusRepository.findById(Long.valueOf(allocation.getStatus()))
                    .orElseThrow(() -> new ServiceException(ErrorCode.STATUS_NOT_FOUND));

            SettlementEntity settlement = SettlementEntity.builder()
                    .trade(tradeEntity)
                    .fraction(allocations.size() == 1 ? 0 : i + 1)
                    .side(resolveSide(allocation.getTradeSide()))
                    .participantAccount(participantAccount)
                    .investorAccount(investorAccount)
                    .investor(investor)
                    .fractionQuantity(getBigDecimalOrZero(allocation.getQuantity()))
                    .fiduciarySpecialist(Boolean.FALSE)
                    .fractionVolume(calculateVolume(allocation))
                    .fractionVolumeLocalPrice(calculateVolume(allocation))
                    .transferValue(BigDecimal.ZERO)
                    .issuedReceipt(Boolean.FALSE)
                    .referenceAllocId(ObjectUtils.isEmpty(allocation.getAllocationReferenceId())
                            ? BigDecimal.ZERO
                            : new BigDecimal(allocation.getAllocationReferenceId()))
                    .repoAmount(BigDecimal.ZERO)
                    .fundingAmount(BigDecimal.ZERO)
                    .outFlowTurnoverValue(BigDecimal.ZERO)
                    .returnTurnoverValue(BigDecimal.ZERO)
                    .deliveryVersusPaymentValue(BigDecimal.ZERO)
                    .tradingSystem(validateTradingSystemEntity(allocation.getCcpCode()))
                    .status(statusEntity)
                    .netAmount(calculateVolume(allocation))
                    .commissionPercentage(BigDecimal.ZERO)
                    .commissionAmount(BigDecimal.ZERO)
                    .valTax(taxesEntity.getValue())
                    .valTaxAmount(BigDecimal.ZERO)
                    .settlementAmount(calculateVolume(allocation))
                    .withholdingTax(BigDecimal.ZERO)
                    .withholdingTaxAmount(BigDecimal.ZERO)
                    .brokerageService(BigDecimal.ZERO)
                    .disbursementValue(calculateVolume(allocation))
                    .bankAccountId(BankAccountIdEnum.BIGINT.getValue())
                    .directDepositor(null)
                    .lastModifyApplication(propertiesConfig.getApiName())
                    .lastModifyIp(propertiesConfig.getApiName())
                    .lastModifyUser(propertiesConfig.getApiName())
                    .lastModifyDate(LocalDateTime.now())
                    .build();

            settlements.add(settlement);
        }

        settlementRepository.saveAll(settlements);

        if (!settlements.isEmpty()) {
            saveSettlementStatusHistory(settlements);
        }

        updateTradeFromSettlements(tradeEntity);

        log.info("Successfully persisted {} settlement record(s) for dealId {}", settlements.size(), firstAllocation.getMessageDealId());
    }

    private TradeEntity validateAndGetTrade(Long matchId, LocalDate matchDate) {
        log.info("Buscando MATCH_ID={} con MATCH_DATE={} (class={})",
                matchId,
                matchDate,
                matchDate != null ? matchDate.getClass().getName() : "null");

        return tradeRepository.findByMatchIdAndMatchDate(matchId, matchDate)
                .orElseThrow(() -> new ServiceException(ErrorCode.TRADE_NOT_FOUND) );
    }

    private InvestorAccountEntity validateInvestorAccountByAccountNumber(String csdAccountCode) {
        log.info("Find InvestorAccountEntity csdAccountCode={} ",csdAccountCode);
        return Optional.ofNullable(investorAccountRepository.findByAccountNumber(csdAccountCode))
                .orElseThrow(() -> new ServiceException(ErrorCode.INVESTOR_ACCOUNT_NOT_FOUND));
    }

    private ParticipantAccountEntity validateParticipantAccountByAccountNumber(String csdAccountCode) {
        log.info("Find ParticipantAccountEntity csdAccountCode={} ",csdAccountCode);
        return participantAccountRepository.findByAccountNumber(csdAccountCode);
    }

    private TradingSystemEntity validateTradingSystemEntity(String systemName) {
        return tradingSystemRepository.findByDescription(systemName)
                .orElseThrow(() -> new ServiceException(ErrorCode.SYSTEM_NOT_FOUND));
    }

    private BigDecimal getBigDecimalOrZero(ValueInDto valueDto) {
        return ObjectUtils.isEmpty(valueDto) ? BigDecimal.ZERO : new BigDecimal(String.valueOf(valueDto.getValue()));
    }

    private BigDecimal calculateVolume(VericlearInDto  dto) {
        return getBigDecimalOrZero(dto.getQuantity()).multiply(getBigDecimalOrZero(dto.getPrice()));
    }

    private String mapTradeSideToSideId(String tradeSide) {
        return switch (tradeSide) {
            case "ORDER_SIDE_BUY" -> "1";
            case "ORDER_SIDE_SELL" -> "2";
            default -> throw new ServiceException(ErrorCode.INVALID_TRADE_SIDE);
        };
    }

    private SideEntity resolveSide(String tradeSide) {
        String sideId = mapTradeSideToSideId(tradeSide);
        return sideRepository.findById(sideId)
                .orElseThrow(() -> new ServiceException(ErrorCode.SIDE_NOT_FOUND));
    }

    private void saveSettlementStatusHistory(List<SettlementEntity> settlements) {
        List<SettlementStatusHistoryEntity> historyList = new ArrayList<>();

        for (SettlementEntity settlement : settlements) {
            SettlementStatusHistoryEntity history = buildSettlementStatusHistoryEntity(settlement);
            historyList.add(history);
        }

        settlementStatusHistoryRepository.saveAll(historyList);
        log.info("Inserted {} settlement status history record(s) for trade {}",
                historyList.size(),
                settlements.get(0).getTrade().getId());
    }

    private SettlementStatusHistoryEntity buildSettlementStatusHistoryEntity(SettlementEntity settlementEntity) {
        LocalDateTime now = LocalDateTime.now();
        return SettlementStatusHistoryEntity.builder()
                .trade(settlementEntity.getTrade())
                .side(settlementEntity.getSide())
                .fraction(settlementEntity.getFraction())
                .time(now)
                .status(settlementEntity.getStatus())
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyIp(propertiesConfig.getApiName())
                .lastModifyUser(propertiesConfig.getApiName())
                .lastModifyDate(now)
                .build();
    }

    private void updateTradeFromSettlements(TradeEntity tradeEntity) {
        updateAssignmentAndFractionalMarks(tradeEntity);
    }

    private void updateAssignmentAndFractionalMarks(TradeEntity tradeEntity) {
        SideEntity buySide = sideRepository.findById(SideEnum.BUY.getId())
                .orElseThrow(() -> new ServiceException(ErrorCode.SIDE_NOT_FOUND));
        SideEntity sellSide = sideRepository.findById(SideEnum.SELL.getId())
                .orElseThrow(() -> new ServiceException(ErrorCode.SIDE_NOT_FOUND));

        List<SettlementEntity> buySetts = settlementRepository.findByTradeAndSide(tradeEntity, buySide);
        boolean assignmentBuy = !buySetts.isEmpty() &&
                buySetts.stream().allMatch(s -> s.getStatus() != null &&
                        StatusOperationAssigmentEnum.ASIGNADA.getId().equals(s.getStatus().getId()));
        boolean fractionalBuy = buySetts.size() > 1;

        List<SettlementEntity> sellSetts = settlementRepository.findByTradeAndSide(tradeEntity, sellSide);
        boolean assignmentSell = !sellSetts.isEmpty() &&
                sellSetts.stream().allMatch(s -> s.getStatus() != null &&
                        StatusOperationAssigmentEnum.ASIGNADA.getId().equals(s.getStatus().getId()));
        boolean fractionalSell = sellSetts.size() > 1;

        tradeEntity.setAssignmentMarkBuy(assignmentBuy);
        tradeEntity.setAssignmentMarkSell(assignmentSell);
        tradeEntity.setFractionalMarkBuy(fractionalBuy);
        tradeEntity.setFractionalMarkSell(fractionalSell);


        StatusEntity currentStatus = tradeEntity.getStatus();
        if (currentStatus != null
                && StatusOperationAssigmentEnum.REGISTRADA.getId().equals(currentStatus.getId())
                && assignmentBuy && assignmentSell) {

            StatusEntity assigned = statusRepository.findById(StatusOperationAssigmentEnum.ASIGNADA.getId())
                    .orElseThrow(() -> new ServiceException(ErrorCode.STATUS_NOT_FOUND));

            tradeEntity.setStatus(assigned);
            log.info("Trade {} cambia de REGISTRADA(1) a ASIGNADA(2) al tener ambas puntas asignadas.", tradeEntity.getId());
        }

        tradeRepository.save(tradeEntity);
        log.info("Updated trade {} flags: assignmentMarkBuy={}, assignmentMarkSell={}",
                tradeEntity.getId(), assignmentBuy, assignmentSell);
    }
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
      topic-name: ${KAFKA_NUBO_TOPIC_NAME}
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
      topic-name: ${KAFKA_NUBO_TOPIC_NAME}
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
      topic-name: ${KAFKA_NUBO_TOPIC_NAME}
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
      topic-name: ${KAFKA_NUBO_TOPIC_NAME}
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
,------. ,------.,------.  ,-----.,--. ,---.,--------.,------.,--.  ,--. ,-----.,------.  ,---.   ,---.   ,---. ,--. ,----.   ,--.  ,--.,--.   ,--.,------.,--.  ,--.,--------.,--.   ,--.,------.,------. ,--. ,-----.,--.   ,------.  ,---.  ,------.
|  .--. '|  .---'|  .--. ''  .--./|  |'   .-'--.  .--'|  .---'|  ,'.|  |'  .--./|  .---' /  O  \ '   .-' '   .-'|  |'  .-./   |  ,'.|  ||   `.'   ||  .---'|  ,'.|  |'--.  .--' \  `.'  / |  .---'|  .--. '|  |'  .--./|  |   |  .---' /  O  \ |  .--. '
|  '--' ||  `--, |  '--'.'|  |    |  |`.  `-.  |  |   |  `--, |  |' '  ||  |    |  `--, |  .-.  |`.  `-. `.  `-.|  ||  | .---.|  |' '  ||  |'.'|  ||  `--, |  |' '  |   |  |     \     /  |  `--, |  '--'.'|  ||  |    |  |   |  `--, |  .-.  ||  '--'.'
|  | --' |  `---.|  |\  \ '  '--'\|  |.-'    | |  |   |  `---.|  | `   |'  '--'\|  `---.|  | |  |.-'    |.-'    |  |'  '--'  ||  | `   ||  |   |  ||  `---.|  | `   |   |  |      \   /   |  `---.|  |\  \ |  |'  '--'\|  '--.|  `---.|  | |  ||  |\  \
`--'     `------'`--' '--' `-----'`--'`-----'  `--'   `------'`--'  `--' `-----'`------'`--' `--'`-----' `-----'`--' `------' `--'  `--'`--'   `--'`------'`--'  `--'   `--'       `-'    `------'`--' '--'`--' `-----'`-----'`------'`--' `--'`--' '--'

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
