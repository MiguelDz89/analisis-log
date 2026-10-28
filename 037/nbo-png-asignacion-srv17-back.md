# nbo-png-asignacion-srv17-back

Código Java de producción y configuraciones, sin tests. Cada sección contiene el archivo original completo y su ruta. Captura: 28/10/2026.

## Índice

1. `.mvn/wrapper/maven-wrapper.properties`
2. `mvnw`
3. `mvnw.cmd`
4. `pom.xml`
5. `src/main/java/com/nubo/assignment/service17/AssignmentService17Application.java`
6. `src/main/java/com/nubo/assignment/service17/application/annotations/ValidBigDecimal.java`
7. `src/main/java/com/nubo/assignment/service17/application/config/KafkaConsumerConfig.java`
8. `src/main/java/com/nubo/assignment/service17/application/config/KafkaProducerConfig.java`
9. `src/main/java/com/nubo/assignment/service17/application/config/ValidBigDecimalConfig.java`
10. `src/main/java/com/nubo/assignment/service17/application/config/WebConfig.java`
11. `src/main/java/com/nubo/assignment/service17/application/context/GlobalContext.java`
12. `src/main/java/com/nubo/assignment/service17/application/database/NamingStrategyConfig.java`
13. `src/main/java/com/nubo/assignment/service17/application/database/UpperNamingConfig.java`
14. `src/main/java/com/nubo/assignment/service17/application/properties/PropertiesConfig.java`
15. `src/main/java/com/nubo/assignment/service17/application/properties/PropertiesContext.java`
16. `src/main/java/com/nubo/assignment/service17/application/util/ApplicationUtils.java`
17. `src/main/java/com/nubo/assignment/service17/application/util/RestClientUtils.java`
18. `src/main/java/com/nubo/assignment/service17/client/operations/cmd/models/request/FractionClientInDto.java`
19. `src/main/java/com/nubo/assignment/service17/client/operations/cmd/models/response/CountryOutDto.java`
20. `src/main/java/com/nubo/assignment/service17/client/operations/cmd/models/response/FractionAccountOutDto.java`
21. `src/main/java/com/nubo/assignment/service17/client/operations/cmd/models/response/InvestorAccountOutDto.java`
22. `src/main/java/com/nubo/assignment/service17/client/operations/cmd/models/response/InvestorOutDto.java`
23. `src/main/java/com/nubo/assignment/service17/client/operations/cmd/models/response/ParticipantAccountOutDto.java`
24. `src/main/java/com/nubo/assignment/service17/client/operations/cmd/models/response/ParticipantBankAccountOutDto.java`
25. `src/main/java/com/nubo/assignment/service17/client/operations/cmd/models/response/ParticipantClientOutDto.java`
26. `src/main/java/com/nubo/assignment/service17/client/operations/cmd/models/response/SettlementOutDto.java`
27. `src/main/java/com/nubo/assignment/service17/client/operations/cmd/models/response/SideClientOutDto.java`
28. `src/main/java/com/nubo/assignment/service17/client/operations/cmd/models/response/StatusOutDto.java`
29. `src/main/java/com/nubo/assignment/service17/client/operations/cmd/models/response/TypeOutDto.java`
30. `src/main/java/com/nubo/assignment/service17/client/operations/cmd/service/OperationsCmdClient.java`
31. `src/main/java/com/nubo/assignment/service17/client/operations/cmd/service/impl/OperationsCmdClientImpl.java`
32. `src/main/java/com/nubo/assignment/service17/client/operations/rules/models/dto/request/StatusAllowedOptionsInDto.java`
33. `src/main/java/com/nubo/assignment/service17/client/operations/rules/models/dto/request/StatusUpdateTradeInDto.java`
34. `src/main/java/com/nubo/assignment/service17/client/operations/rules/models/dto/response/ActionOutDto.java`
35. `src/main/java/com/nubo/assignment/service17/client/operations/rules/models/dto/response/BusinessRuleOutDto.java`
36. `src/main/java/com/nubo/assignment/service17/client/operations/rules/models/dto/response/CountryOutDto.java`
37. `src/main/java/com/nubo/assignment/service17/client/operations/rules/models/dto/response/StatusAllowedOptionsOutDto.java`
38. `src/main/java/com/nubo/assignment/service17/client/operations/rules/models/dto/response/StatusClientOutDto.java`
39. `src/main/java/com/nubo/assignment/service17/client/operations/rules/models/dto/response/StatusUpdateTradeOutDto.java`
40. `src/main/java/com/nubo/assignment/service17/client/operations/rules/service/OperationBusinessRuleClient.java`
41. `src/main/java/com/nubo/assignment/service17/client/operations/rules/service/impl/OperationBusinessRuleClientImpl.java`
42. `src/main/java/com/nubo/assignment/service17/exception/ClientException.java`
43. `src/main/java/com/nubo/assignment/service17/exception/ServiceException.java`
44. `src/main/java/com/nubo/assignment/service17/exception/error/ErrorCode.java`
45. `src/main/java/com/nubo/assignment/service17/exception/error/ErrorResponse.java`
46. `src/main/java/com/nubo/assignment/service17/exception/error/ErrorValidation.java`
47. `src/main/java/com/nubo/assignment/service17/exception/kafka/KafkaErrorBuild.java`
48. `src/main/java/com/nubo/assignment/service17/helpers/ExceptionMessageUtil.java`
49. `src/main/java/com/nubo/assignment/service17/helpers/MapperUtil.java`
50. `src/main/java/com/nubo/assignment/service17/helpers/ValidatorUtil.java`
51. `src/main/java/com/nubo/assignment/service17/kafka/consumer/KafkaNuboListenerAdapter.java`
52. `src/main/java/com/nubo/assignment/service17/kafka/producer/KafkaNuboProducerAdapter.java`
53. `src/main/java/com/nubo/assignment/service17/models/domain/TradeSide.java`
54. `src/main/java/com/nubo/assignment/service17/models/dto/request/AssignmentFractionInDto.java`
55. `src/main/java/com/nubo/assignment/service17/models/dto/request/AssignmentInDto.java`
56. `src/main/java/com/nubo/assignment/service17/models/dto/request/BeneficiaryInDto.java`
57. `src/main/java/com/nubo/assignment/service17/models/dto/request/Trama.java`
58. `src/main/java/com/nubo/assignment/service17/models/dto/response/AssignmentFractionOutDto.java`
59. `src/main/java/com/nubo/assignment/service17/models/dto/response/AssignmentOutDto.java`
60. `src/main/java/com/nubo/assignment/service17/models/dto/response/PackageCustodianOutDto.java`
61. `src/main/java/com/nubo/assignment/service17/models/dto/response/ParticipantOutDto.java`
62. `src/main/java/com/nubo/assignment/service17/models/dto/response/SideOutDto.java`
63. `src/main/java/com/nubo/assignment/service17/models/entity/InvestorAccountEntity.java`
64. `src/main/java/com/nubo/assignment/service17/models/entity/InvestorEntity.java`
65. `src/main/java/com/nubo/assignment/service17/models/entity/ParticipantAccountEntity.java`
66. `src/main/java/com/nubo/assignment/service17/models/entity/ParticipantEntity.java`
67. `src/main/java/com/nubo/assignment/service17/models/entity/SettlementEntity.java`
68. `src/main/java/com/nubo/assignment/service17/models/entity/SettlementKey.java`
69. `src/main/java/com/nubo/assignment/service17/models/entity/SideEntity.java`
70. `src/main/java/com/nubo/assignment/service17/models/entity/StatusEntity.java`
71. `src/main/java/com/nubo/assignment/service17/models/entity/TradeEntity.java`
72. `src/main/java/com/nubo/assignment/service17/models/entity/TradingSystemEntity.java`
73. `src/main/java/com/nubo/assignment/service17/models/entity/TypeEntity.java`
74. `src/main/java/com/nubo/assignment/service17/models/enums/AccountTransactionTypeEnum.java`
75. `src/main/java/com/nubo/assignment/service17/models/enums/CustodianEquivalenceEnum.java`
76. `src/main/java/com/nubo/assignment/service17/models/enums/PropertiesEnum.java`
77. `src/main/java/com/nubo/assignment/service17/models/enums/SideEnum.java`
78. `src/main/java/com/nubo/assignment/service17/models/enums/TradingSystemeEnum.java`
79. `src/main/java/com/nubo/assignment/service17/models/enums/VersionApiEnum.java`
80. `src/main/java/com/nubo/assignment/service17/repository/InvestorAccountRepository.java`
81. `src/main/java/com/nubo/assignment/service17/repository/ParticipantAccountRepository.java`
82. `src/main/java/com/nubo/assignment/service17/repository/ParticipantRepository.java`
83. `src/main/java/com/nubo/assignment/service17/repository/SettlementRepository.java`
84. `src/main/java/com/nubo/assignment/service17/repository/SideRepository.java`
85. `src/main/java/com/nubo/assignment/service17/repository/TradeRepository.java`
86. `src/main/java/com/nubo/assignment/service17/repository/TradingSystemRepository.java`
87. `src/main/java/com/nubo/assignment/service17/service/ProcessMessageService.java`
88. `src/main/java/com/nubo/assignment/service17/service/impl/ProcessMessageServiceImpl.java`
89. `src/main/resources/application-dev.yml`
90. `src/main/resources/application-local.yml`
91. `src/main/resources/application-prod.yml`
92. `src/main/resources/application-qa.yml`
93. `src/main/resources/application-uat.yml`
94. `src/main/resources/application.yml`
95. `src/main/resources/banner.txt`
96. `src/main/resources/log/JsonEventLayout_error.json`
97. `src/main/resources/log/JsonEventLayout_info.json`
98. `src/main/resources/log/JsonEventLayout_trace.json`
99. `src/main/resources/log/log4j2-prod.properties`
100. `src/main/resources/log/log4j2.properties`

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
		<version>3.5.14</version>
		<relativePath/>
	</parent>
	<groupId>com.nubo.assignment.service17</groupId>
	<artifactId>assignment-service-17</artifactId>
	<version>0.23.6-beta.1</version>
	<name>${project.artifactId}</name>
	<description>Assignment Service 17</description>

	<properties>
		<java.version>17</java.version>
		<test.skip>false</test.skip>
		<datasource.url.application.name>ApplicationName=${project.artifactId}</datasource.url.application.name>
		<hikari.pool.name>${project.artifactId}-pool</hikari.pool.name>
		<log4j2.version>2.25.5</log4j2.version>
		<spring-framework.version>6.2.19</spring-framework.version>
		<jackson-bom.version>2.21.5</jackson-bom.version>
		<spring-kafka.version>3.3.16</spring-kafka.version>
	</properties>

	<dependencyManagement>
		<dependencies>
			<dependency>
				<groupId>com.fasterxml.jackson</groupId>
				<artifactId>jackson-bom</artifactId>
				<version>${jackson-bom.version}</version>
				<type>pom</type>
				<scope>import</scope>
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
					<artifactId>spring-boot-starter-tomcat</artifactId>
				</exclusion>
				<exclusion>
					<groupId>org.springframework.boot</groupId>
					<artifactId>spring-boot-starter-logging</artifactId>
				</exclusion>
			</exclusions>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-undertow</artifactId>
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
			</exclusions>
		</dependency>
		<!-- vulnerability adjustment  -->
		<dependency>
			<groupId>commons-io</groupId>
			<artifactId>commons-io</artifactId>
			<version>2.18.0</version>
		</dependency>
        <dependency>
            <groupId>com.fasterxml.jackson.core</groupId>
            <artifactId>jackson-core</artifactId>
            <scope>compile</scope>
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
								<exclude>**/AssignmentService17Application.class</exclude>
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

## src/main/java/com/nubo/assignment/service17/AssignmentService17Application.java

```java
package com.nubo.assignment.service17;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AssignmentService17Application {

	public static void main(String[] args) {
		SpringApplication.run(AssignmentService17Application.class, args);
	}

}

```

## src/main/java/com/nubo/assignment/service17/application/annotations/ValidBigDecimal.java

```java
package com.nubo.assignment.service17.application.annotations;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import com.nubo.assignment.service17.application.config.ValidBigDecimalConfig;

@Constraint(validatedBy = ValidBigDecimalConfig.class)
@Target({ ElementType.METHOD, ElementType.FIELD, ElementType.ANNOTATION_TYPE, ElementType.PARAMETER })
@Retention(RetentionPolicy.RUNTIME)
public @interface ValidBigDecimal {
    String message() default "";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};

    int precision();
    int scale();
}

```

## src/main/java/com/nubo/assignment/service17/application/config/KafkaConsumerConfig.java

```java
package com.nubo.assignment.service17.application.config;

import com.nubo.assignment.service17.application.properties.PropertiesConfig;
import com.nubo.assignment.service17.exception.ServiceException;
import com.nubo.assignment.service17.exception.error.ErrorCode;
import com.nubo.assignment.service17.exception.kafka.KafkaErrorBuild;
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
import org.springframework.util.backoff.FixedBackOff;

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
    public ConsumerFactory<String, String> consumerFactoryKafkaNubo() {
        Map<String, Object> configProps = new HashMap<>();
        configProps.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, propertiesConfig.getKafkaNuboBootstrapServers());
        configProps.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);
        configProps.put(ConsumerConfig.GROUP_ID_CONFIG, propertiesConfig.getKafkaNuboConsumerGroupId());
        configProps.put(ConsumerConfig.AUTO_OFFSET_RESET_CONFIG, propertiesConfig.getKafkaNuboAutoOffsetReset());
        configProps.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);

        configProps.put("security.protocol", propertiesConfig.getKafkaNuboSecurityProtocol());
        if (!isLocalProfile()) {
            configProps.put("sasl.mechanism", propertiesConfig.getKafkaNuboSaslMechanism());
            configProps.put("sasl.jaas.config", propertiesConfig.getKafkaNuboSaslJaasConfig());
        }

        return new DefaultKafkaConsumerFactory<>(
                configProps,
                new StringDeserializer(),
                new StringDeserializer()
        );
    }

    @Bean
    public ConcurrentKafkaListenerContainerFactory<String, String> kafkaNuboListenerContainerFactory(
            DefaultErrorHandler errorHandler) {
        ConcurrentKafkaListenerContainerFactory<String, String> factory = new ConcurrentKafkaListenerContainerFactory<>();
        factory.setConsumerFactory(consumerFactoryKafkaNubo());
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

## src/main/java/com/nubo/assignment/service17/application/config/KafkaProducerConfig.java

```java
package com.nubo.assignment.service17.application.config;

import com.nubo.assignment.service17.application.properties.PropertiesConfig;
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

## src/main/java/com/nubo/assignment/service17/application/config/ValidBigDecimalConfig.java

```java
package com.nubo.assignment.service17.application.config;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

import java.math.BigDecimal;

import com.nubo.assignment.service17.application.annotations.ValidBigDecimal;

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

## src/main/java/com/nubo/assignment/service17/application/config/WebConfig.java

```java
package com.nubo.assignment.service17.application.config;

import java.time.Duration;
import java.util.Locale;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.client.SimpleClientHttpRequestFactory;
import org.springframework.web.client.RestClient;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.i18n.SessionLocaleResolver;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Bean
    public LocaleResolver localeResolver() {
        SessionLocaleResolver slr = new SessionLocaleResolver();
        slr.setDefaultLocale(Locale.ENGLISH);
        return slr;
    }

    @Bean
    public RestClient restClient() {
        SimpleClientHttpRequestFactory factory = new SimpleClientHttpRequestFactory();
        factory.setConnectTimeout(Duration.ofSeconds(5)); // Timeout de conexión
        factory.setReadTimeout(Duration.ofSeconds(30)); // Timeout de lectura

        return RestClient.builder()
                .requestFactory(factory)
                .build();
    }

}

```

## src/main/java/com/nubo/assignment/service17/application/context/GlobalContext.java

```java
package com.nubo.assignment.service17.application.context;

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

## src/main/java/com/nubo/assignment/service17/application/database/NamingStrategyConfig.java

```java
package com.nubo.assignment.service17.application.database;

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

## src/main/java/com/nubo/assignment/service17/application/database/UpperNamingConfig.java

```java
package com.nubo.assignment.service17.application.database;

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

## src/main/java/com/nubo/assignment/service17/application/properties/PropertiesConfig.java

```java
package com.nubo.assignment.service17.application.properties;

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

    @Value("${kafka.nubo.consumer.topic-name-assignment-request}")
    private String kafkaNuboConsumerTopicNameAssignmentRequest;

    @Value("${kafka.nubo.consumer.group-id}")
    private String kafkaNuboConsumerGroupId;

    @Value("${kafka.nubo.producer.topic-name-assignment-response}")
    private String kafkaNuboProducerTopicNameAssignmentResponse;

    @Value("${kafka.nubo.auto-offset-reset}")
    private String kafkaNuboAutoOffsetReset;

    @Value("${client.nubo.url-operation-cmd}")
    private String urlNuboOperationCmd;

    @Value("${client.nubo.url-operation-rules}")
    private String urlNuboOperationRules;

    @Value("${kafka.nubo.producer.topic-create-package-custody}")
    private String kafkaNuboProducerTopicCreatePackageCustody;
}

```

## src/main/java/com/nubo/assignment/service17/application/properties/PropertiesContext.java

```java
package com.nubo.assignment.service17.application.properties;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import org.springframework.util.ObjectUtils;

import com.nubo.assignment.service17.application.context.GlobalContext;
import com.nubo.assignment.service17.application.util.ApplicationUtils;
import com.nubo.assignment.service17.models.enums.PropertiesEnum;


public class PropertiesContext {

    public static String getClientIp() {
        return GlobalContext.getPropertyString(PropertiesEnum.CLIENT_IP.getValue());
    }

    public static String getClientUser() {
        return GlobalContext.getPropertyString(PropertiesEnum.CLIENT_USER.getValue());
    }

    public static LocalDateTime getClientDatetime() {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern(ApplicationUtils.getFormatDatetime());
        String clientDatetime = GlobalContext.getPropertyString(PropertiesEnum.CLIENT_DATETIME.getValue());
        if (ObjectUtils.isEmpty(clientDatetime)) {
            return LocalDateTime.now();
        }
        return LocalDateTime.parse(clientDatetime, formatter);
    }

    public static String getVersion() {
        return GlobalContext.getPropertyString(PropertiesEnum.VERSION_API.getValue());
    }

}

```

## src/main/java/com/nubo/assignment/service17/application/util/ApplicationUtils.java

```java
package com.nubo.assignment.service17.application.util;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.nubo.assignment.service17.exception.ServiceException;
import com.nubo.assignment.service17.exception.error.ErrorCode;

public final class ApplicationUtils {

    private static final ObjectMapper MAPPER = new ObjectMapper();
    private static final String FORMAT_DATETIME = "yyyy-MM-dd'T'HH:mm:ss";
    private static final String FORMAT_DATE = "yyyy-MM-dd";

    static {
        JavaTimeModule javaTimeModule = new JavaTimeModule();
        MAPPER.registerModule(javaTimeModule);
        MAPPER.disable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS);
        MAPPER.disable(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES);
    }

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

    public static String convertLocalDateTimeToString(LocalDateTime localDateTime) {
        return localDateTime.format(DateTimeFormatter.ofPattern(ApplicationUtils.getFormatDatetime()));
    }

    public static LocalDate convertStringToLocalDate(String timeString) {
        if (timeString == null)
            return null;
        return LocalDate.parse(timeString, DateTimeFormatter.ofPattern(FORMAT_DATE));
    }

    public static String convertObjectToJson(Object object) {
        try {
            return MAPPER.writeValueAsString(object);
        } catch (JsonProcessingException ex) {
            throw new ServiceException(ErrorCode.ERROR_SERIALIZER_JSON, ex);
        }
    }

    public static <T> T convertJsonToObject(String json, Class<T> clazz) {
        try {
            return MAPPER.readValue(json, clazz);
        } catch (JsonProcessingException e) {
            throw new ServiceException(ErrorCode.ERROR_DESERIALIZER_JSON, e);
        }
    }

}

```

## src/main/java/com/nubo/assignment/service17/application/util/RestClientUtils.java

```java
package com.nubo.assignment.service17.application.util;

import java.net.URI;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestClient;

import jakarta.validation.constraints.NotNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Component
@RequiredArgsConstructor
@Slf4j
public class RestClientUtils {

    private final RestClient restClient;

    public <T> ResponseEntity<T> requestBodyWithResponseObject(@NotNull URI url, @NotNull HttpMethod method,
            @NotNull HttpHeaders headers, @NotNull Object requestBody, @NotNull Class<T> responseType) {
        log.info("Client [{}] {}", method, url);
        log.debug("Request Body: {}", requestBody);
        return restClient.method(method)
                .uri(url)
                .headers(h -> h.addAll(headers))
                .body(requestBody)
                .retrieve()
                .toEntity(responseType);
    }

    public <T> ResponseEntity<T> requestWithResponseObject(@NotNull URI url, @NotNull HttpMethod method,
            @NotNull HttpHeaders headers, @NotNull Class<T> responseType) {
        log.info("Client [{}] {}", method, url);
        return restClient.method(method)
                .uri(url)
                .headers(h -> h.addAll(headers))
                .retrieve()
                .toEntity(responseType);
    }

}

```

## src/main/java/com/nubo/assignment/service17/client/operations/cmd/models/request/FractionClientInDto.java

```java
package com.nubo.assignment.service17.client.operations.cmd.models.request;

import java.math.BigDecimal;

import com.nubo.assignment.service17.application.util.ApplicationUtils;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FractionClientInDto {

    @Min(value = 1)
    private Long investorAccountId;

    @Min(value = 1)
    private Long participantAccountId;

    @Min(value = 1)
    private Long directDepositorId;

    @NotNull
    private Boolean fiduciarySpecialist;

    @NotNull
    @Min(value = 1)
    private Long sourceQuoteTypeId;

    private String reference;

    @NotNull
    private BigDecimal fractionQuantity;

    @NotNull
    private BigDecimal commissionPercentage;

    @NotNull
    private BigDecimal valTax;

    private String cashAccount;

    @Min(value = 1)
    private Long custodianId;

    @Min(value = 1)
    private Long ficAdministratorId;

    private String referencePackage;

    @Override
    public String toString() {
        return ApplicationUtils.convertObjectToJson(this);
    }
}

```

## src/main/java/com/nubo/assignment/service17/client/operations/cmd/models/response/CountryOutDto.java

```java
package com.nubo.assignment.service17.client.operations.cmd.models.response;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.ALWAYS)
public class CountryOutDto {

    private Long id;

    private String code;

    private String name;

    private String timeZone;

}

```

## src/main/java/com/nubo/assignment/service17/client/operations/cmd/models/response/FractionAccountOutDto.java

```java
package com.nubo.assignment.service17.client.operations.cmd.models.response;

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
public class FractionAccountOutDto {

    private ParticipantAccountOutDto participantAccount;

    private InvestorAccountOutDto investorAccount;

    private TypeOutDto sourceQuoteType;

    private Boolean fiduciarySpecialist;

    private Boolean jointAccount;

    private Boolean masterAccount;

    private ParticipantClientOutDto custodian;

}

```

## src/main/java/com/nubo/assignment/service17/client/operations/cmd/models/response/InvestorAccountOutDto.java

```java
package com.nubo.assignment.service17.client.operations.cmd.models.response;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.ALWAYS)
public class InvestorAccountOutDto {

    private Long id;

    private InvestorOutDto investor;

    private String accountNumber;

    private StatusOutDto status;

    private TypeOutDto originType;

    private TypeOutDto type;

    //private DepositoryOutDto depository;

    private ParticipantClientOutDto participant;

}

```

## src/main/java/com/nubo/assignment/service17/client/operations/cmd/models/response/InvestorOutDto.java

```java
package com.nubo.assignment.service17.client.operations.cmd.models.response;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.ALWAYS)
public class InvestorOutDto {

    private Long id;

    private String code;

    private String firstName;

    private String lastName;

    private String companyName;

    private TypeOutDto type;

    private StatusOutDto status;

    private CountryOutDto country;

    private String documentNumber;

    //private IdentificationTypeOutDto identificationType;

    private String nationality;

    private String clearinghouseCode;

    //private GicsOutDto gics;

    private Boolean moneyLaunderingFlag;

    //private TaxStatusOutDto taxStatus;

}

```

## src/main/java/com/nubo/assignment/service17/client/operations/cmd/models/response/ParticipantAccountOutDto.java

```java
package com.nubo.assignment.service17.client.operations.cmd.models.response;

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
public class ParticipantAccountOutDto {

    private Long id;

    private ParticipantClientOutDto participant;

    private String accountNumber;

    private StatusOutDto status;

    private TypeOutDto type;

    private TypeOutDto originType;

}

```

## src/main/java/com/nubo/assignment/service17/client/operations/cmd/models/response/ParticipantBankAccountOutDto.java

```java
package com.nubo.assignment.service17.client.operations.cmd.models.response;

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
public class ParticipantBankAccountOutDto {

    private Long id;

    private Long bankId;

    private Long participantId;

    private String bankAccount;

    private Boolean principal;

}

```

## src/main/java/com/nubo/assignment/service17/client/operations/cmd/models/response/ParticipantClientOutDto.java

```java
package com.nubo.assignment.service17.client.operations.cmd.models.response;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder(toBuilder = true)
@JsonInclude(JsonInclude.Include.ALWAYS)
public class ParticipantClientOutDto {

    private Long id;

    private String code;

    private String documentNumber;

    //private IdentificationTypeOutDto identificationType;

    private String name;

    private String shortName;

    private TypeOutDto type;

    private String mnemonic;

    private CountryOutDto country;

    private LocalDate registrationDate;

    private String taxCode;

    private StatusOutDto status;

    private String nitClearingHouse;

    //private TaxStatusOutDto taxStatus;

    private String typeEntity;

    private String marginAccount;

    private String masterAccount;

    private String directAllocation;

    private String marketMaker;

    private Boolean enabled;

    private Boolean custodian;

}

```

## src/main/java/com/nubo/assignment/service17/client/operations/cmd/models/response/SettlementOutDto.java

```java
package com.nubo.assignment.service17.client.operations.cmd.models.response;

import java.math.BigDecimal;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.ALWAYS)
public class SettlementOutDto {

    private Long tradeId;

    private Integer fraction;

    private SideClientOutDto side;

    private Long uniqueFractionId;

    private InvestorOutDto investor;

    private InvestorAccountOutDto investorAccount;

    private ParticipantAccountOutDto participantAccount;

    private BigDecimal fractionQuantity;

    private BigDecimal fractionVolume;

    private Boolean fiduciarySpecialist;

    private BigDecimal commissionPercentage;

    private BigDecimal commissionAmount;

    private BigDecimal valTax;

    private BigDecimal valTaxAmount;

    private BigDecimal withholdingTax;

    private BigDecimal withholdingTaxAmount;

    private BigDecimal netAmount;

    private BigDecimal transferValue;

    private Boolean issuedReceipt;

    private String issuedReceiptNumber;

    private BigDecimal referenceAllocId;

    private BigDecimal repoAmount;

    private BigDecimal fundingAmount;

    private BigDecimal netOutFlowTotal;

    private BigDecimal outFlowTurnoverValue;

    private BigDecimal returnTurnoverValue;

    private BigDecimal deliveryVersusPaymentValue;

    private BigDecimal settlementAmount;

    private StatusOutDto status;

    private BigDecimal brokerageService;

    private Long custodianId;

    private ParticipantClientOutDto custodian;

    private Long bankAccountId;

    private String reference;

    private BigDecimal capitalGainValue;

    private BigDecimal disbursementValue;

    private TypeOutDto sourceQuoteType;

    private Long ficAdministratorId;

    private ParticipantClientOutDto directDepositor;

    private Boolean jointAccount;

    private Boolean masterAccount;

    private BigDecimal cashAccount;

    private Boolean indMaster;

    private StatusOutDto custodianStatus;

}

```

## src/main/java/com/nubo/assignment/service17/client/operations/cmd/models/response/SideClientOutDto.java

```java
package com.nubo.assignment.service17.client.operations.cmd.models.response;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.ALWAYS)
public class SideClientOutDto {

    private String id;

    private String description;

}

```

## src/main/java/com/nubo/assignment/service17/client/operations/cmd/models/response/StatusOutDto.java

```java
package com.nubo.assignment.service17.client.operations.cmd.models.response;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.ALWAYS)
public class StatusOutDto {

    private Long id;

    private String description;

    private String category;
}

```

## src/main/java/com/nubo/assignment/service17/client/operations/cmd/models/response/TypeOutDto.java

```java
package com.nubo.assignment.service17.client.operations.cmd.models.response;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.ALWAYS)
public class TypeOutDto {

    private Long id;

    private String description;

    private String category;
}

```

## src/main/java/com/nubo/assignment/service17/client/operations/cmd/service/OperationsCmdClient.java

```java
package com.nubo.assignment.service17.client.operations.cmd.service;

import java.util.List;

import com.nubo.assignment.service17.client.operations.cmd.models.request.FractionClientInDto;
import com.nubo.assignment.service17.client.operations.cmd.models.response.FractionAccountOutDto;
import com.nubo.assignment.service17.client.operations.cmd.models.response.ParticipantBankAccountOutDto;
import com.nubo.assignment.service17.client.operations.cmd.models.response.SettlementOutDto;

public interface OperationsCmdClient {

    List<SettlementOutDto> fractionationCreateAssignment(Long tradeId, String sideId,
            List<FractionClientInDto> fractionInDtoList);

    List<SettlementOutDto> fractionationUpdateAssignment(Long tradeId, String sideId,
            List<FractionClientInDto> fractionInDtoList);

    FractionAccountOutDto validateAccountFractionAssignment(String accountNumber, Long tradeId, String sideId,
            Long originId);

    ParticipantBankAccountOutDto validateCudAccountFractionAssignment(Long tradeId, String sideId);
}

```

## src/main/java/com/nubo/assignment/service17/client/operations/cmd/service/impl/OperationsCmdClientImpl.java

```java
package com.nubo.assignment.service17.client.operations.cmd.service.impl;

import java.net.URI;
import java.util.List;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;
import org.springframework.web.util.UriComponentsBuilder;

import com.nubo.assignment.service17.application.properties.PropertiesConfig;
import com.nubo.assignment.service17.application.properties.PropertiesContext;
import com.nubo.assignment.service17.application.util.ApplicationUtils;
import com.nubo.assignment.service17.application.util.RestClientUtils;
import com.nubo.assignment.service17.client.operations.cmd.models.request.FractionClientInDto;
import com.nubo.assignment.service17.client.operations.cmd.models.response.FractionAccountOutDto;
import com.nubo.assignment.service17.client.operations.cmd.models.response.ParticipantBankAccountOutDto;
import com.nubo.assignment.service17.client.operations.cmd.models.response.SettlementOutDto;
import com.nubo.assignment.service17.client.operations.cmd.service.OperationsCmdClient;
import com.nubo.assignment.service17.exception.ClientException;
import com.nubo.assignment.service17.exception.error.ErrorCode;
import com.nubo.assignment.service17.models.enums.PropertiesEnum;
import com.nubo.assignment.service17.models.enums.VersionApiEnum;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class OperationsCmdClientImpl implements OperationsCmdClient {

    private final PropertiesConfig propertiesConfig;
    private final RestClientUtils restClientUtils;

    private static final String PATH_FRACTIONATION = "fractionation/counted-operation";
    private static final String PATH_ACCOUNT_VALIDATION = "validate/counted-fraction";

    @Override
    public List<SettlementOutDto> fractionationCreateAssignment(Long tradeId, String sideId,
            List<FractionClientInDto> fractionInDtoList) {
        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getUrlNuboOperationCmd())
                .pathSegment(VersionApiEnum.V1.getValue(), PATH_FRACTIONATION)
                .path("/create-fractions/trade/{tradeId}/side/{sideId}")
                .buildAndExpand(tradeId, sideId)
                .toUri();

        try {
            ResponseEntity<SettlementOutDto[]> response = restClientUtils.requestBodyWithResponseObject(uri,
                    HttpMethod.POST, getHttpHeaders(), fractionInDtoList, SettlementOutDto[].class);
            if (!ObjectUtils.isEmpty(response.getBody())) {
                return List.of(response.getBody());
            }
        } catch (Exception ex) {
            throw new ClientException(ErrorCode.CLIENT_OPERATION_FRACTIONATION_ERROR, HttpStatus.BAD_GATEWAY, ex);
        }

        return List.of(SettlementOutDto.builder().build());
    }

    @Override
    public List<SettlementOutDto> fractionationUpdateAssignment(Long tradeId, String sideId,
            List<FractionClientInDto> fractionInDtoList) {
        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getUrlNuboOperationCmd())
                .pathSegment(VersionApiEnum.V1.getValue(), PATH_FRACTIONATION)
                .path("/update-assignments/trade/{tradeId}/side/{sideId}")
                .buildAndExpand(tradeId, sideId)
                .toUri();

        try {
            ResponseEntity<SettlementOutDto[]> response = restClientUtils.requestBodyWithResponseObject(uri,
                    HttpMethod.PUT, getHttpHeaders(), fractionInDtoList, SettlementOutDto[].class);
            if (!ObjectUtils.isEmpty(response.getBody())) {
                return List.of(response.getBody());
            }
        } catch (Exception ex) {
            throw new ClientException(ErrorCode.CLIENT_OPERATION_FRACTIONATION_ERROR, HttpStatus.BAD_GATEWAY, ex);
        }

        return List.of(SettlementOutDto.builder().build());
    }

    @Override
    public FractionAccountOutDto validateAccountFractionAssignment(String accountNumber, Long tradeId, String sideId,
            Long originId) {
        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getUrlNuboOperationCmd())
                .pathSegment(VersionApiEnum.V1.getValue(), PATH_ACCOUNT_VALIDATION)
                .path("/assignment/account-fraction/account-number/{accountNumber}/trade/{tradeId}/side/{sideId}/origin/{originId}")
                .buildAndExpand(accountNumber, tradeId, sideId, originId)
                .toUri();

        try {
            ResponseEntity<FractionAccountOutDto> response = restClientUtils.requestWithResponseObject(uri,
                    HttpMethod.GET, getHttpHeaders(), FractionAccountOutDto.class);
            if (!ObjectUtils.isEmpty(response.getBody())) {
                return response.getBody();
            }
        } catch (Exception ex) {
            throw new ClientException(ErrorCode.CLIENT_OPERATION_ACCOUNT_VALIDATION_ERROR, HttpStatus.BAD_GATEWAY, ex);
        }

        return FractionAccountOutDto.builder().build();
    }

    @Override
    public ParticipantBankAccountOutDto validateCudAccountFractionAssignment(Long tradeId, String sideId) {
        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getUrlNuboOperationCmd())
                .pathSegment(VersionApiEnum.V1.getValue(), PATH_ACCOUNT_VALIDATION)
                .path("/assignment/cud-account/trade/{tradeId}/side/{sideId}")
                .buildAndExpand(tradeId, sideId)
                .toUri();

        try {
            ResponseEntity<ParticipantBankAccountOutDto> response = restClientUtils.requestWithResponseObject(uri,
                    HttpMethod.GET, getHttpHeaders(), ParticipantBankAccountOutDto.class);
            if (!ObjectUtils.isEmpty(response.getBody())) {
                return response.getBody();
            }
        } catch (Exception ex) {
            throw new ClientException(ErrorCode.CLIENT_OPERATION_ACCOUNT_VALIDATION_ERROR, HttpStatus.BAD_GATEWAY, ex);
        }

        return ParticipantBankAccountOutDto.builder().build();
    }

    private static HttpHeaders getHttpHeaders() {
        HttpHeaders headers = new HttpHeaders();
        headers.set(PropertiesEnum.CLIENT_BACKEND.getValue(), "true");
        headers.set(PropertiesEnum.CLIENT_USER.getValue(), PropertiesContext.getClientUser());
        headers.set(PropertiesEnum.CLIENT_DATETIME.getValue(),
                ApplicationUtils.convertLocalDateTimeToString(PropertiesContext.getClientDatetime()));
        headers.setContentType(MediaType.APPLICATION_JSON);
        log.debug("Generated HTTP Headers for client request: {}", headers);
        return headers;
    }
}

```

## src/main/java/com/nubo/assignment/service17/client/operations/rules/models/dto/request/StatusAllowedOptionsInDto.java

```java
package com.nubo.assignment.service17.client.operations.rules.models.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class StatusAllowedOptionsInDto {

    private String code;

    private Long statusId;

    private Long countryId;

    private Long typeId;

}

```

## src/main/java/com/nubo/assignment/service17/client/operations/rules/models/dto/request/StatusUpdateTradeInDto.java

```java
package com.nubo.assignment.service17.client.operations.rules.models.dto.request;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class StatusUpdateTradeInDto {

    @NotNull
    private Long tradeId;

    @NotNull
    private String sideId;

    @NotNull
    private String code;

}

```

## src/main/java/com/nubo/assignment/service17/client/operations/rules/models/dto/response/ActionOutDto.java

```java
package com.nubo.assignment.service17.client.operations.rules.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.ALWAYS)
public class ActionOutDto {

    private Boolean valid;

    private StatusClientOutDto status;

    private String description;

    private String value;

}

```

## src/main/java/com/nubo/assignment/service17/client/operations/rules/models/dto/response/BusinessRuleOutDto.java

```java
package com.nubo.assignment.service17.client.operations.rules.models.dto.response;

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
@JsonInclude(JsonInclude.Include.NON_NULL)
public class BusinessRuleOutDto {

    private Long id;

    private String code;

    private String description;

    private String category;

    private String value;

    private CountryOutDto country;

    private List<ActionOutDto> actions;

}

```

## src/main/java/com/nubo/assignment/service17/client/operations/rules/models/dto/response/CountryOutDto.java

```java
package com.nubo.assignment.service17.client.operations.rules.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.ALWAYS)
public class CountryOutDto {

    private Long id;

    private String code;

    private String name;

    private String timeZone;

}

```

## src/main/java/com/nubo/assignment/service17/client/operations/rules/models/dto/response/StatusAllowedOptionsOutDto.java

```java
package com.nubo.assignment.service17.client.operations.rules.models.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class StatusAllowedOptionsOutDto {

    private Boolean isValid;

    private String code;

    private String description;

    private StatusClientOutDto newStatus;

}

```

## src/main/java/com/nubo/assignment/service17/client/operations/rules/models/dto/response/StatusClientOutDto.java

```java
package com.nubo.assignment.service17.client.operations.rules.models.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class StatusClientOutDto {

    private Long id;

    private String description;

    private String category;

    private String shortName;

    private String detail;
}

```

## src/main/java/com/nubo/assignment/service17/client/operations/rules/models/dto/response/StatusUpdateTradeOutDto.java

```java
package com.nubo.assignment.service17.client.operations.rules.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.ALWAYS)
public class StatusUpdateTradeOutDto {

    private Boolean isValid;

    private String description;

    private String code;

    private StatusClientOutDto newStatusFraction;

    private StatusClientOutDto newStatusSide;

    private StatusClientOutDto newStatusTrade;

}

```

## src/main/java/com/nubo/assignment/service17/client/operations/rules/service/OperationBusinessRuleClient.java

```java
package com.nubo.assignment.service17.client.operations.rules.service;

import com.nubo.assignment.service17.client.operations.rules.models.dto.request.StatusUpdateTradeInDto;
import com.nubo.assignment.service17.client.operations.rules.models.dto.response.BusinessRuleOutDto;
import com.nubo.assignment.service17.client.operations.rules.models.dto.response.StatusUpdateTradeOutDto;

public interface OperationBusinessRuleClient {

    BusinessRuleOutDto findBusinessRuleByCountryIdAndCode(Long countryId, String code);

    StatusUpdateTradeOutDto validateUpdateStatusTrade(StatusUpdateTradeInDto statusUpdateTradeInDto);

    BusinessRuleOutDto findBusinessRuleByCountryIdAndCodeValid(Long countryId, String code);

}

```

## src/main/java/com/nubo/assignment/service17/client/operations/rules/service/impl/OperationBusinessRuleClientImpl.java

```java
package com.nubo.assignment.service17.client.operations.rules.service.impl;

import java.net.URI;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;
import org.springframework.web.util.UriComponentsBuilder;

import com.nubo.assignment.service17.application.properties.PropertiesConfig;
import com.nubo.assignment.service17.application.properties.PropertiesContext;
import com.nubo.assignment.service17.application.util.ApplicationUtils;
import com.nubo.assignment.service17.application.util.RestClientUtils;
import com.nubo.assignment.service17.client.operations.rules.models.dto.request.StatusUpdateTradeInDto;
import com.nubo.assignment.service17.client.operations.rules.models.dto.response.BusinessRuleOutDto;
import com.nubo.assignment.service17.client.operations.rules.models.dto.response.StatusUpdateTradeOutDto;
import com.nubo.assignment.service17.client.operations.rules.service.OperationBusinessRuleClient;
import com.nubo.assignment.service17.exception.ClientException;
import com.nubo.assignment.service17.exception.error.ErrorCode;
import com.nubo.assignment.service17.models.enums.PropertiesEnum;
import com.nubo.assignment.service17.models.enums.VersionApiEnum;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class OperationBusinessRuleClientImpl implements OperationBusinessRuleClient {

    private final PropertiesConfig propertiesConfig;
    private final RestClientUtils restClientUtils;

    private static final String OPERATION_BUSINESS_RULE = "operation-business-rule";
    private static final String OPERATION_ACTION_BUSINESS_RULE = "operation-action-business-rule";
    private static final String OPERATION_STATUS_UPDATE_BUSINESS_RULE = "status-update-business-rule";

    @Override
    public BusinessRuleOutDto findBusinessRuleByCountryIdAndCode(Long countryId, String code) {
        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getUrlNuboOperationRules())
                .pathSegment(VersionApiEnum.V1.getValue(), OPERATION_BUSINESS_RULE)
                .path("/country/{countryId}/code/{code}")
                .buildAndExpand(countryId, code)
                .toUri();

        try {
            ResponseEntity<BusinessRuleOutDto> response = restClientUtils.requestWithResponseObject(uri,
                    HttpMethod.GET, getHttpHeaders(), BusinessRuleOutDto.class);

            if (!ObjectUtils.isEmpty(response.getBody())) {
                return response.getBody();
            }
        } catch (Exception ex) {
            throw new ClientException(ErrorCode.CLIENT_OPERATION_RULES_ERROR, HttpStatus.BAD_GATEWAY, ex);
        }

        return BusinessRuleOutDto.builder().build();
    }

    @Override
    public BusinessRuleOutDto findBusinessRuleByCountryIdAndCodeValid(Long countryId, String code) {
        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getUrlNuboOperationRules())
                .pathSegment(VersionApiEnum.V1.getValue(), OPERATION_ACTION_BUSINESS_RULE)
                .path("/country/{countryId}/code/{code}/valid")
                .buildAndExpand(countryId, code)
                .toUri();

        try {
            ResponseEntity<BusinessRuleOutDto> response = restClientUtils.requestWithResponseObject(uri,
                    HttpMethod.GET, getHttpHeaders(), BusinessRuleOutDto.class);

            if (!ObjectUtils.isEmpty(response.getBody())) {
                return response.getBody();
            }
        } catch (Exception ex) {
            throw new ClientException(ErrorCode.CLIENT_OPERATION_RULES_ERROR, HttpStatus.BAD_GATEWAY, ex);
        }

        return BusinessRuleOutDto.builder().build();
    }

    @Override
    public StatusUpdateTradeOutDto validateUpdateStatusTrade(StatusUpdateTradeInDto statusUpdateTradeInDto) {
        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getUrlNuboOperationRules())
                .pathSegment(VersionApiEnum.V1.getValue(), OPERATION_STATUS_UPDATE_BUSINESS_RULE)
                .path("/trade/validation")
                .build()
                .toUri();

        try {
            ResponseEntity<StatusUpdateTradeOutDto> response = restClientUtils.requestBodyWithResponseObject(uri,
                    HttpMethod.POST, getHttpHeaders(), statusUpdateTradeInDto, StatusUpdateTradeOutDto.class);

            if (!ObjectUtils.isEmpty(response.getBody())) {
                return response.getBody();
            }
        } catch (Exception ex) {
            throw new ClientException(ErrorCode.CLIENT_OPERATION_RULES_ERROR, HttpStatus.BAD_GATEWAY, ex);
        }

        return StatusUpdateTradeOutDto.builder().build();
    }

    private static HttpHeaders getHttpHeaders() {
        HttpHeaders headers = new HttpHeaders();
        headers.set(PropertiesEnum.CLIENT_IP.getValue(), PropertiesContext.getClientIp());
        headers.set(PropertiesEnum.CLIENT_USER.getValue(), PropertiesContext.getClientUser());
        headers.set(PropertiesEnum.CLIENT_DATETIME.getValue(),
                ApplicationUtils.convertLocalDateTimeToString(PropertiesContext.getClientDatetime()));
        headers.setContentType(MediaType.APPLICATION_JSON);
        return headers;
    }
}

```

## src/main/java/com/nubo/assignment/service17/exception/ClientException.java

```java
package com.nubo.assignment.service17.exception;

import org.springframework.http.HttpStatus;

import com.nubo.assignment.service17.exception.error.ErrorCode;

import lombok.Getter;

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

## src/main/java/com/nubo/assignment/service17/exception/ServiceException.java

```java
package com.nubo.assignment.service17.exception;

import org.springframework.http.HttpStatus;

import com.nubo.assignment.service17.exception.error.ErrorCode;
import lombok.Getter;

@Getter
public class ServiceException extends RuntimeException {

    private final HttpStatus httpStatus;
    private final ErrorCode errorCode;

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

    public ServiceException(ErrorCode errorCode, String message) {
        super(errorCode.getMessage(), new Throwable(message));
        this.errorCode = errorCode;
        this.httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
    }

    public ServiceException(ErrorCode errorCode, String message, HttpStatus httpStatus) {
        super(errorCode.getMessage(), new Throwable(message));
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

## src/main/java/com/nubo/assignment/service17/exception/error/ErrorCode.java

```java
package com.nubo.assignment.service17.exception.error;

import lombok.Getter;

@Getter
public enum ErrorCode {

    UNEXPECTED("An unexpected error occurred"),
    SYSTEM_NOT_FOUND("System Not  Found"),
    TRADE_NOT_FOUND("Trade Not Found "),
    INVESTOR_ACCOUNT_NOT_FOUND("Inventor Account Not Found"),
    ERROR_KAFKA_CONSUMER_NUBO("Error Consumer Kafka Nubo"),
    ERROR_KAFKA_PRODUCER_NUBO("Error Producer Kafka Nubo"),
    ERROR_DESERIALIZER_JSON("Error Deserializer Json"),
    VALIDATION_ERROR("Validation Error"),
    ERROR_SERIALIZER_JSON("Error Serializer Json"),
    CLIENT_OPERATION_FRACTIONATION_ERROR("Error Client Operation Fractionation"),
    CLIENT_OPERATION_RULES_ERROR("Error Client Operation Rules"),
    CLIENT_OPERATION_ACCOUNT_VALIDATION_ERROR("Error Client Operation Account Validation");

    private final String message;

    ErrorCode(String message) {
        this.message = message;
    }

    public String getName() {
        return this.name();
    }

}

```

## src/main/java/com/nubo/assignment/service17/exception/error/ErrorResponse.java

```java
package com.nubo.assignment.service17.exception.error;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.nubo.assignment.service17.application.util.ApplicationUtils;

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

## src/main/java/com/nubo/assignment/service17/exception/error/ErrorValidation.java

```java
package com.nubo.assignment.service17.exception.error;

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

## src/main/java/com/nubo/assignment/service17/exception/kafka/KafkaErrorBuild.java

```java
package com.nubo.assignment.service17.exception.kafka;

import com.nubo.assignment.service17.application.properties.PropertiesConfig;
import com.nubo.assignment.service17.application.util.ApplicationUtils;
import com.nubo.assignment.service17.exception.error.ErrorCode;
import com.nubo.assignment.service17.exception.error.ErrorResponse;
import com.nubo.assignment.service17.exception.error.ErrorValidation;
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

## src/main/java/com/nubo/assignment/service17/helpers/ExceptionMessageUtil.java

```java
package com.nubo.assignment.service17.helpers;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.springframework.stereotype.Component;

import com.nubo.assignment.service17.application.util.ApplicationUtils;
import com.nubo.assignment.service17.exception.ClientException;
import com.nubo.assignment.service17.exception.error.ErrorResponse;

import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class ExceptionMessageUtil {

    public String buildErrorMessage(Exception ex) {
        if (ex == null) {
            return "Unknown error";
        }

        StringBuilder builder = new StringBuilder();

        appendIfPresent(builder, ex.getMessage());

        if (ex instanceof ClientException clientException && clientException.getCause() != null) {
            ErrorResponse clientError = buildClientErrorResponse(clientException.getCause().getMessage());
            appendIfPresent(builder, clientError != null ? clientError.getErrorMessageDetail() : null);
        }

        appendCauseMessage(builder, ex);

        String clean = builder.toString().replaceAll("null", "").replaceAll("\\s+", " ").trim();
        if (!clean.isEmpty()) {
            return clean;
        }

        String fallback = ex.getClass().getSimpleName();
        if ("Exception".equals(fallback) && ex.getStackTrace() != null && ex.getStackTrace().length > 0) {
            fallback += " at " + ex.getStackTrace()[0];
        }
        return fallback;
    }

    private void appendCauseMessage(StringBuilder builder, Exception ex) {
        if (ex.getCause() == null || !hasText(ex.getCause().getMessage())) {
            return;
        }

        ErrorResponse errorResponse = buildClientErrorResponse(ex.getCause().getMessage());

        if (errorResponse != null) {
            String message = hasText(errorResponse.getErrorMessageDetail())
                    ? errorResponse.getErrorMessageDetail()
                    : errorResponse.getErrorMessage();
            String prefix = hasText(errorResponse.getErrorCode()) ? errorResponse.getErrorCode() : "Cause";
            appendIfPresent(builder, hasText(message) ? prefix + ": " + message.trim() : null);
        } else {
            String cleaned = ex.getCause().getMessage()
                    .replaceAll("\\{[^}]*\\}", "")
                    .replaceAll("\\d{3}\\s*:\\s*\".*", "")
                    .trim();
            if (!cleaned.isEmpty()) {
                appendWithSeparator(builder, "Cause: " + cleaned);
            } else {
                Matcher m = Pattern.compile("^(\\d{3})").matcher(ex.getCause().getMessage());
                if (m.find()) {
                    appendWithSeparator(builder, "Cause: HTTP " + m.group(1));
                }
            }
        }
    }

    private void appendIfPresent(StringBuilder builder, String message) {
        if (hasText(message)) {
            appendWithSeparator(builder, message.trim());
        }
    }

    private void appendWithSeparator(StringBuilder builder, String message) {
        if (builder.length() > 0) {
            builder.append(" | ");
        }
        builder.append(message);
    }

    private boolean hasText(String str) {
        return str != null && !str.trim().isEmpty();
    }

    public ErrorResponse buildClientErrorResponse(String cause) {
        try {
            Matcher matcher = Pattern.compile("\\{.*\\}").matcher(cause);
            if (matcher.find()) {
                ErrorResponse errorResponse = (ErrorResponse) ApplicationUtils.convertJsonToObject(
                        matcher.group(), ErrorResponse.class);
                log.warn("Warn Client -> {}", errorResponse);
                return errorResponse;
            } else {
                log.warn("Warn en buildClientErrorResponse -> No JSON found in the string");
            }
        } catch (Exception ex) {
            log.error("Error en buildClientErrorResponse -> {}", ex.getMessage());
        }
        return null;
    }

}

```

## src/main/java/com/nubo/assignment/service17/helpers/MapperUtil.java

```java
package com.nubo.assignment.service17.helpers;

import com.nubo.assignment.service17.models.dto.response.ParticipantOutDto;
import com.nubo.assignment.service17.models.dto.response.SideOutDto;
import com.nubo.assignment.service17.models.entity.ParticipantEntity;
import com.nubo.assignment.service17.models.entity.SideEntity;

import org.springframework.util.ObjectUtils;

public final class MapperUtil {

    private MapperUtil() {
        // Private constructor to prevent instantiation
    }

    public static ParticipantOutDto participantEntityToParticipantOutDto(ParticipantEntity participantEntity) {
        if (ObjectUtils.isEmpty(participantEntity)) {
            return null;
        }
        return ParticipantOutDto.builder()
                .id(participantEntity.getId())
                .code(participantEntity.getCode())
                .name(participantEntity.getName())
                .build();
    }

    public static SideOutDto sideEntityToSideOutDto(SideEntity sideEntity) {
        if (ObjectUtils.isEmpty(sideEntity)) {
            return null;
        }
        return SideOutDto.builder()
                .id(sideEntity.getId())
                .name(sideEntity.getDescription())
                .build();
    }
}

```

## src/main/java/com/nubo/assignment/service17/helpers/ValidatorUtil.java

```java
package com.nubo.assignment.service17.helpers;

import java.util.Set;

import org.springframework.stereotype.Component;

import com.nubo.assignment.service17.exception.ServiceException;
import com.nubo.assignment.service17.exception.error.ErrorCode;

import jakarta.validation.ConstraintViolation;
import jakarta.validation.Validator;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
@RequiredArgsConstructor
public class ValidatorUtil {

    private final Validator validator;

    public <T> void validateObject(T object) {
        Set<ConstraintViolation<T>> violations = validator.validate(object);
        if (!violations.isEmpty()) {
            String messageError = "";
            log.error("Validation errors found for object: {}", object.toString());
            for (ConstraintViolation<T> violation : violations) {
                String message =  String.format("Field: %s - Error: %s - Invalid value: %s",
                        violation.getPropertyPath(),
                        violation.getMessage(),
                        violation.getInvalidValue());
                messageError += message + "; ";
                log.error(message);
            }
            throw new ServiceException(ErrorCode.VALIDATION_ERROR,
                    "Validation failed for object of type: " + object.getClass().getSimpleName() + " - " + messageError);
        }
        log.debug("Object validation successful for type: {}", object.getClass().getSimpleName());
    }
}

```

## src/main/java/com/nubo/assignment/service17/kafka/consumer/KafkaNuboListenerAdapter.java

```java
package com.nubo.assignment.service17.kafka.consumer;

import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.support.KafkaHeaders;
import org.springframework.messaging.handler.annotation.Header;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Component;

import com.nubo.assignment.service17.application.context.GlobalContext;
import com.nubo.assignment.service17.application.properties.PropertiesConfig;
import com.nubo.assignment.service17.application.util.ApplicationUtils;
import com.nubo.assignment.service17.models.enums.PropertiesEnum;
import com.nubo.assignment.service17.service.ProcessMessageService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Component
@RequiredArgsConstructor
@Slf4j
public class KafkaNuboListenerAdapter {

    private final ProcessMessageService processMessageService;
    private final PropertiesConfig propertiesConfig;

    @KafkaListener(
            topics = "#{propertiesConfig.kafkaNuboConsumerTopicNameAssignmentRequest}",
            containerFactory = "kafkaNuboListenerContainerFactory")
    public void listenKafka(@Payload String messageJson,
            @Header(KafkaHeaders.RECEIVED_PARTITION) int partition,
            @Header(KafkaHeaders.OFFSET) long offset,
            @Header(KafkaHeaders.RECEIVED_TOPIC) String topic,
            @Header(value = KafkaHeaders.DELIVERY_ATTEMPT, required = false) Integer retry) {
        log.info("New received Message -- Topic: {} -- Partition : {} -- Offset : {} -- retry: {}",
                topic, partition, offset, retry);
        this.setProperties();
        processMessageService.assignmentFractionSrv17(messageJson);

        GlobalContext.remove();
    }

    private void setProperties() {
        String clientUserContext = propertiesConfig.getApiName();
        GlobalContext.setProperty(PropertiesEnum.CLIENT_USER.getValue(), clientUserContext);
        GlobalContext.setProperty(PropertiesEnum.CLIENT_DATETIME.getValue(),
                ApplicationUtils.getLocalDateTimeNow());
    }

}

```

## src/main/java/com/nubo/assignment/service17/kafka/producer/KafkaNuboProducerAdapter.java

```java
package com.nubo.assignment.service17.kafka.producer;

import java.util.concurrent.CompletableFuture;

import org.apache.kafka.clients.producer.ProducerRecord;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.SendResult;
import org.springframework.stereotype.Component;

import com.nubo.assignment.service17.application.properties.PropertiesConfig;
import com.nubo.assignment.service17.application.properties.PropertiesContext;
import com.nubo.assignment.service17.application.util.ApplicationUtils;
import com.nubo.assignment.service17.models.dto.response.AssignmentOutDto;
import com.nubo.assignment.service17.models.dto.response.PackageCustodianOutDto;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Component
@RequiredArgsConstructor
@Slf4j
public class KafkaNuboProducerAdapter {

    private final PropertiesConfig propertiesConfig;
    private final KafkaTemplate<String, String> kafkaNuboTemplate;

    public void sendResponseSrv17(AssignmentOutDto assignmentOutDto) {
        String topic = propertiesConfig.getKafkaNuboProducerTopicNameAssignmentResponse();
        String jsonString = ApplicationUtils.convertObjectToJson(assignmentOutDto);
        ProducerRecord<String, String> record = new ProducerRecord<>(topic, jsonString);

        record.headers().add("client_user", PropertiesContext.getClientUser().getBytes());
        record.headers().add("timestamp", String.valueOf(System.currentTimeMillis()).getBytes());
        record.headers().add("service_id", "srv17".getBytes());

        CompletableFuture<SendResult<String, String>> future = kafkaNuboTemplate.send(record)
                .toCompletableFuture();

        future.thenAccept(result -> log.info("Send message -- Topic: {} -- offset: {} -- json: {} ",
                topic, result.getRecordMetadata().offset(), jsonString))
                .exceptionally(ex -> {
                    log.error("Error sending message to Kafka topic: {}, exception: {}", topic, ex.getMessage(), ex);
                    return null;
                });
    }

    public void sendCreatePackageCustodySync(PackageCustodianOutDto packageCustodianOutDto) {
        String topic = propertiesConfig.getKafkaNuboProducerTopicCreatePackageCustody();
        String jsonString = ApplicationUtils.convertObjectToJson(packageCustodianOutDto);
        try {
            kafkaNuboTemplate.send(topic, jsonString).get();
            log.debug("Send message -- Topic: {} -- json: {} ", topic, jsonString);
        } catch (Exception ex) {
            log.error("Error sending message to topic: {} -- json: {}, Exception: {}", topic, jsonString, ex);
        }
    }
}

```

## src/main/java/com/nubo/assignment/service17/models/domain/TradeSide.java

```java
package com.nubo.assignment.service17.models.domain;

import java.time.LocalDate;

import com.nubo.assignment.service17.client.operations.cmd.models.response.ParticipantBankAccountOutDto;
import com.nubo.assignment.service17.models.entity.ParticipantEntity;
import com.nubo.assignment.service17.models.entity.SideEntity;
import com.nubo.assignment.service17.models.entity.TypeEntity;

public record TradeSide(
        Long tradeId,
        Long matchId,
        LocalDate matchDate,
        SideEntity sideEntity,
        ParticipantEntity participantEntity,
        TypeEntity sourceQuoteType,
        Boolean assignmentMark,
        String affiliate,
        ParticipantBankAccountOutDto participantBankAccountOutDto,
        String marketId) {
}

```

## src/main/java/com/nubo/assignment/service17/models/dto/request/AssignmentFractionInDto.java

```java
package com.nubo.assignment.service17.models.dto.request;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonAlias;
import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AssignmentFractionInDto {

    @NotBlank
    private String dvlDcvAccount;

    @Builder.Default
    private BigDecimal commissionPercentage = BigDecimal.ZERO;

    @NotNull
    private BigDecimal fractionalNominal;

    @Size(max = 3)
    private String referenceCode;

    @JsonProperty("referencePackage")
    @JsonAlias({ "reference_package", "packageCode", "package_code", "referenceCode" })
    @Size(max = 10)
    private String referencePackage;

    private Long custodian;

    // ---  not used ---
    
    private Integer fractionNumber;

    private List<BeneficiaryInDto> beneficiary;

    private String depositorCode;

    private String sebraAccount;

    private String holderIndicator;

    private String compensatingNit;

    private String entityCode;

    private String origin;

    private String tradedOnStockExchange;

    private String commissionIndicator;

    private String commissionPrice;

    private String certificateIndicator;

    private String baseDescription;

    private String certificateValue;

    private LocalDate certificateDate;

    private String certificateRate;

    private LocalDate initialDate;

    private LocalDate finalDate;

    private String finalPrice;

    private String radicaNumber;

    private String responsibleCode;

    private String address;

    private String adrIdentificationType;

    private String adrIdentificationNumber;

    private String adrSpecial;

    private String adrName;

    private String country;

    private String reference;

    private String marginAccount;

    private String securitiesAccount;
}

```

## src/main/java/com/nubo/assignment/service17/models/dto/request/AssignmentInDto.java

```java
package com.nubo.assignment.service17.models.dto.request;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.ALWAYS)
public class AssignmentInDto {

    @NotBlank
    private String affiliate;

    @NotNull
    @JsonProperty("folio")
    private Long matchId;

    @NotNull
    private LocalDate operationDate;

    @NotBlank
    private String side;

    @Valid
    @JsonProperty("complementations")
    private List<AssignmentFractionInDto> assignmentFractions;

    // --- not used ---

    private LocalDateTime dateTime;

    private Integer totalFractions;

    private String publicOffer;

    private String operationType;

    private String isin;

    private String fungible;

    private String specialCase;

    private String saleFolio;

    private LocalDate saleDate;

    private String saleQuantity;

    private String alienationConsent;

    private String generatePapeleta;

    private String pensionBond;
}

```

## src/main/java/com/nubo/assignment/service17/models/dto/request/BeneficiaryInDto.java

```java
package com.nubo.assignment.service17.models.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BeneficiaryInDto {

    private String identificationNum;

    private String identificationType;
    
    private String fiduciaryFund;

}

```

## src/main/java/com/nubo/assignment/service17/models/dto/request/Trama.java

```java
package com.nubo.assignment.service17.models.dto.request;

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
public class Trama {

    @JsonProperty("TIPO_TRAMA")
    private String type;

    @JsonProperty("DIGITO")
    private String digit;

    @JsonProperty("CODIGO")
    private String code;

    @JsonProperty("AFILIADO")
    private String affiliate;

    @JsonProperty("HORA_TRAMA")
    private String dateTime;

    @JsonProperty("FECHA_OPERACION")
    private String operationDate;

    @JsonProperty("FOLIO")
    private Long folio;

    @JsonProperty("PUNTA")
    private String side;

    @JsonProperty("NUM_IND_ADICIONAL")
    private Integer fractionNumber;

    @JsonProperty("TOT_ADICIONALES")
    private Integer totalFractions;

    @JsonProperty("OFE_PUBLICA")
    private String publicOffer;

    @JsonProperty("TIPO_IDENTIFICACION1")
    private String identificationType1;

    @JsonProperty("NUM_DENTIFICACION1")
    private String identificationNum1;

    @JsonProperty("FDO_FIDUCIARIO1")
    private String fiduciaryFund1;

    @JsonProperty("TIPO_IDENTIFICACION2")
    private String identificationType2;

    @JsonProperty("NUM_DENTIFICACION2")
    private String identificationNum2;

    @JsonProperty("FDO_FIDUCIARIO2")
    private String fiduciaryFund2;

    @JsonProperty("TIPO_IDENTIFICACION3")
    private String identificationType3;

    @JsonProperty("NUM_DENTIFICACION3")
    private String identificationNum3;

    @JsonProperty("FDO_FIDUCIARIO3")
    private String fiduciaryFund3;

    @JsonProperty("COD_DEPOSITANTE")
    private String depositorCode;

    @JsonProperty("CTA_DVL_DCV")
    private String dvlDcvAccount;

    @JsonProperty("CTA_SEBRA")
    private String sebraAccount;

    @JsonProperty("IND_TITULAR")
    private String holderIndicator;

    @JsonProperty("NIT-COMPEN")
    private String compensatingNit;

    @JsonProperty("CODIGO_ENTIDAD")
    private String entityCode;

    @JsonProperty("ORIGEN")
    private String origin;

    @JsonProperty("TRAS_SER_BOLSA")
    private String tradedOnStockExchange;

    @JsonProperty("TIPO_OPERACION")
    private String operationType;

    @JsonProperty("NRO_SWAP")
    private String swapNumber;

    @JsonProperty("IND_COMISION")
    private String commissionIndicator;

    @JsonProperty("PORC_COMISION")
    private String commissionPercentage;

    @JsonProperty("PRECIO_COMISION")
    private String commissionPrice;

    @JsonProperty("IND_CONSTANCIA")
    private String certificateIndicator;

    @JsonProperty("DESC_BASE")
    private String baseDescription;

    @JsonProperty("VAL_CONSTANCIA")
    private String certificateValue;

    @JsonProperty("FEC_CONSTANCIA")
    private String certificateDate;

    @JsonProperty("TASA_CONSTANCIA")
    private String certificateRate;

    @JsonProperty("NOMINAL_FRACCION")
    private String fractionalNominal;

    @JsonProperty("ISIN")
    private String isin;

    @JsonProperty("FUNGIBLE")
    private String fungible;

    @JsonProperty("FEC_INICIAL")
    private String initialDate;

    @JsonProperty("FEC_FINAL")
    private String finalDate;

    @JsonProperty("PRECIO_FINAL")
    private String finalPrice;

    @JsonProperty("CASO_ESP")
    private String specialCase;

    @JsonProperty("FOLIO_VTA")
    private String saleFolio;

    @JsonProperty("FECHA_VTA")
    private String saleDate;

    @JsonProperty("CANT_VTA")
    private String saleQuantity;

    @JsonProperty("NUM_RADICA")
    private String radicaNumber;

    @JsonProperty("COD_RESPON")
    private String responsibleCode;

    @JsonProperty("ADR")
    private String address;

    @JsonProperty("TIPOID_ADR")
    private String addressIdType;

    @JsonProperty("IDENTIF_ADR")
    private String addressIdNumber;

    @JsonProperty("ESP_ADR")
    private String addressSpecial;

    @JsonProperty("NOMBRE_ADR")
    private String addressName;

    @JsonProperty("PAIS_ADR")
    private String addressCountry;

    @JsonProperty("REFERENCIA")
    private String reference;

    @JsonProperty("CONS_ENAJENA")
    private String alienationConsent;

    @JsonProperty("GEN_PAPELETA")
    private String generatePapeleta;

    @JsonProperty("CODIGO_REFERENCIA")
    private String referenceCode;

    @JsonProperty("CUENTA_MARGEN")
    private String marginAccount;

    @JsonProperty("BONO_PENSIONAL")
    private String pensionBond;

    @JsonProperty("ACTIVAR_DVP")
    private String activateDvp;

    @JsonProperty("CUENTA_VALORES")
    private String securitiesAccount;
}

```

## src/main/java/com/nubo/assignment/service17/models/dto/response/AssignmentFractionOutDto.java

```java
package com.nubo.assignment.service17.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.ALWAYS)
public class AssignmentFractionOutDto {

    private Integer fraction;

    private String code;

    private String message;

}

```

## src/main/java/com/nubo/assignment/service17/models/dto/response/AssignmentOutDto.java

```java
package com.nubo.assignment.service17.models.dto.response;

import java.time.Instant;
import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.ALWAYS)
public class AssignmentOutDto {

    private String affiliate;

    private Long tradeId;

    private Long matchId;

    private LocalDate matchDate;

    private SideOutDto side;

    private ParticipantOutDto participant;

    private Instant timestamp;

    private String messageAssignment;

}

```

## src/main/java/com/nubo/assignment/service17/models/dto/response/PackageCustodianOutDto.java

```java
package com.nubo.assignment.service17.models.dto.response;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PackageCustodianOutDto {

    private String clientUser;

    @NotNull
    private String marketId;

    @NotNull
    private Long uniqueFractionId;

    @NotNull
    private Long participantId;

    private String codeSCB;

    private String referencePackage;

}

```

## src/main/java/com/nubo/assignment/service17/models/dto/response/ParticipantOutDto.java

```java
package com.nubo.assignment.service17.models.dto.response;

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
public class ParticipantOutDto {

    private Long id;

    private String code;

    private String name;

}

```

## src/main/java/com/nubo/assignment/service17/models/dto/response/SideOutDto.java

```java
package com.nubo.assignment.service17.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.ALWAYS)
public class SideOutDto {

    private String id;

    private String name;

}

```

## src/main/java/com/nubo/assignment/service17/models/entity/InvestorAccountEntity.java

```java
package com.nubo.assignment.service17.models.entity;

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
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
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

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;

        InvestorAccountEntity that = (InvestorAccountEntity) o;

        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

}

```

## src/main/java/com/nubo/assignment/service17/models/entity/InvestorEntity.java

```java
package com.nubo.assignment.service17.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
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

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;

        InvestorEntity that = (InvestorEntity) o;

        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

}

```

## src/main/java/com/nubo/assignment/service17/models/entity/ParticipantAccountEntity.java

```java
package com.nubo.assignment.service17.models.entity;

import java.time.LocalDateTime;

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
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
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

    @Column(name = "\"LAST_MODIFY_USER\"", nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", nullable = false)
    private String lastModifyIp;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;

        ParticipantAccountEntity that = (ParticipantAccountEntity) o;

        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/assignment/service17/models/entity/ParticipantEntity.java

```java
package com.nubo.assignment.service17.models.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
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

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;

        ParticipantEntity that = (ParticipantEntity) o;

        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

}

```

## src/main/java/com/nubo/assignment/service17/models/entity/SettlementEntity.java

```java
package com.nubo.assignment.service17.models.entity;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
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
    @JoinColumn(name = "\"INVESTOR_ID\"", nullable = false)
    private InvestorEntity investor;

    @ManyToOne
    @JoinColumn(name = "\"INVESTOR_ACCOUNT_ID\"", nullable = false)
    private InvestorAccountEntity investorAccount;

    @ManyToOne
    @JoinColumn(name = "\"PARTICIPANT_ACCOUNT_ID\"", nullable = false)
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

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 30, nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 30, nullable = false)
    private String lastModifyIp;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;

        SettlementEntity that = (SettlementEntity) o;

        if (trade != null ? !trade.equals(that.trade) : that.trade != null)
            return false;
        if (fraction != null ? !fraction.equals(that.fraction) : that.fraction != null)
            return false;
        return side != null ? side.equals(that.side) : that.side == null;
    }

    @Override
    public int hashCode() {
        int result = trade != null ? trade.hashCode() : 0;
        result = 31 * result + (fraction != null ? fraction.hashCode() : 0);
        result = 31 * result + (side != null ? side.hashCode() : 0);
        return result;
    }
}

```

## src/main/java/com/nubo/assignment/service17/models/entity/SettlementKey.java

```java
package com.nubo.assignment.service17.models.entity;

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

## src/main/java/com/nubo/assignment/service17/models/entity/SideEntity.java

```java
package com.nubo.assignment.service17.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Setter
@Getter
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

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;

        SideEntity that = (SideEntity) o;

        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/assignment/service17/models/entity/StatusEntity.java

```java
package com.nubo.assignment.service17.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
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

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;

        StatusEntity that = (StatusEntity) o;

        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

}

```

## src/main/java/com/nubo/assignment/service17/models/entity/TradeEntity.java

```java
package com.nubo.assignment.service17.models.entity;

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
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDate;

@Setter
@Getter
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

    @Column(name = "\"MATCH_DATE\"", nullable = false)
    private LocalDate matchDate;

    @Column(name = "\"MATCH_ID\"", precision = 19, nullable = false)
    private Long matchId;

    @Column(name = "\"QUANTITY\"", precision = 16, scale = 4)
    private BigDecimal quantity;

    @ManyToOne
    @JoinColumn(name = "\"PARTICIPANT_ID_BUY\"")
    private ParticipantEntity participantBuy;

    @ManyToOne
    @JoinColumn(name = "\"PARTICIPANT_ID_SELL\"")
    private ParticipantEntity participantSell;

    @Column(name = "\"ASSIGNMENT_MARK_BUY\"")
    private Boolean assignmentMarkBuy;

    @Column(name = "\"ASSIGNMENT_MARK_SELL\"")
    private Boolean assignmentMarkSell;

    @ManyToOne
    @JoinColumn(name = "\"SOURCE_QUOTE_BUY_TYPE\"")
    private TypeEntity sourceQuoteBuyType;

    @ManyToOne
    @JoinColumn(name = "\"SOURCE_QUOTE_SELL_TYPE\"")
    private TypeEntity sourceQuoteSellType;

    @ManyToOne
    @JoinColumn(name = "\"SELL_STATUS_ID\"")
    private StatusEntity sellStatus;

    @ManyToOne
    @JoinColumn(name = "\"BUY_STATUS_ID\"")
    private StatusEntity buyStatus;

    @Column(name = "\"MARKET_ID\"")
    private String marketId;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;

        TradeEntity that = (TradeEntity) o;

        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

}

```

## src/main/java/com/nubo/assignment/service17/models/entity/TradingSystemEntity.java

```java
package com.nubo.assignment.service17.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
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

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;

        TradingSystemEntity that = (TradingSystemEntity) o;

        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

}

```

## src/main/java/com/nubo/assignment/service17/models/entity/TypeEntity.java

```java
package com.nubo.assignment.service17.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
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

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;

        TypeEntity that = (TypeEntity) o;

        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/assignment/service17/models/enums/AccountTransactionTypeEnum.java

```java
package com.nubo.assignment.service17.models.enums;

import lombok.Getter;

@Getter
public enum AccountTransactionTypeEnum {
    ACCOUNT_TX_TYPE_ALLOCATION_TO("ACCOUNT_TX_TYPE_ALLOCATION_TO");

    private final String code;

    AccountTransactionTypeEnum(String code) {
        this.code = code;
    }

}

```

## src/main/java/com/nubo/assignment/service17/models/enums/CustodianEquivalenceEnum.java

```java
package com.nubo.assignment.service17.models.enums;

import java.util.Arrays;
import java.util.Optional;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum CustodianEquivalenceEnum {

    CITITRUST_COLOMBIA_SF(1L, "CO0700"),
    SANTANDER_CONSUMER(2L, "CO0641"),
    BNP_PARIBAS_SECURITIES_SER_SF(3L, "CO0701");

    private final Long srvExch;
    private final String participantCode;

    public static Optional<CustodianEquivalenceEnum> fromSrvExch(Long srvExch) {
        return Arrays.stream(values())
                .filter(value -> value.srvExch.equals(srvExch))
                .findFirst();
    }
}

```

## src/main/java/com/nubo/assignment/service17/models/enums/PropertiesEnum.java

```java
package com.nubo.assignment.service17.models.enums;

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
    AUTH_TOKEN("auth_token"),
    CLIENT_BACKEND("client_backend");

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

## src/main/java/com/nubo/assignment/service17/models/enums/SideEnum.java

```java
package com.nubo.assignment.service17.models.enums;

import java.util.Arrays;
import java.util.Objects;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum SideEnum {

    BUY("1", "COMPRA"),
    SELL("2", "VENTA");

    private final String id;
    private final String description;

    @JsonValue
    public String getId() {
        return id;
    }

    @JsonCreator
    public static SideEnum fromId(String id) {
        return Arrays.stream(SideEnum.values())
                .filter(side -> Objects.equals(side.id, id))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Side not implemented: " + id));
    }
}

```

## src/main/java/com/nubo/assignment/service17/models/enums/TradingSystemeEnum.java

```java
package com.nubo.assignment.service17.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Arrays;

@Getter
@RequiredArgsConstructor
public enum TradingSystemeEnum {

    CRCP(2L);

    private final Long value;

    public static Long getValueByName(String name) {
        return Arrays.stream(TradingSystemeEnum.values())
                .filter(enumValue -> enumValue.name().equalsIgnoreCase(name))
                .map(TradingSystemeEnum::getValue)
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("No enum constant with name " + name));
    }

}

```

## src/main/java/com/nubo/assignment/service17/models/enums/VersionApiEnum.java

```java
package com.nubo.assignment.service17.models.enums;

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

## src/main/java/com/nubo/assignment/service17/repository/InvestorAccountRepository.java

```java
package com.nubo.assignment.service17.repository;

import com.nubo.assignment.service17.models.entity.InvestorAccountEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InvestorAccountRepository extends JpaRepository<InvestorAccountEntity,Long> {
    InvestorAccountEntity findByAccountNumber(String accountNumber);
}

```

## src/main/java/com/nubo/assignment/service17/repository/ParticipantAccountRepository.java

```java
package com.nubo.assignment.service17.repository;

import com.nubo.assignment.service17.models.entity.ParticipantAccountEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ParticipantAccountRepository extends JpaRepository<ParticipantAccountEntity,Long> {

}

```

## src/main/java/com/nubo/assignment/service17/repository/ParticipantRepository.java

```java
package com.nubo.assignment.service17.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.assignment.service17.models.entity.ParticipantEntity;

public interface ParticipantRepository extends JpaRepository<ParticipantEntity, Long> {

    Optional<ParticipantEntity> findByCode(String code);

    Optional<ParticipantEntity> findFirstByCodeAndCustodianTrueAndEnabledTrueOrderByIdAsc(String code);
}

```

## src/main/java/com/nubo/assignment/service17/repository/SettlementRepository.java

```java
package com.nubo.assignment.service17.repository;

import com.nubo.assignment.service17.models.entity.SettlementEntity;
import com.nubo.assignment.service17.models.entity.SettlementKey;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface SettlementRepository extends JpaRepository<SettlementEntity, SettlementKey> {

    @Query("""
            SELECT COUNT(s)
            FROM SettlementEntity s
            WHERE s.trade.id = :tradeId AND s.side.id = :sideId
            """)
    Long countByTradeIdAndSideId(Long tradeId, Long sideId);

    @Query("""
            SELECT COALESCE(MAX(s.fraction), 0)
            FROM SettlementEntity s
            WHERE s.trade.id = :tradeId AND s.side.id = :sideId
            """)
    Integer findMaxFractionByTradeIdAndSideId(Long tradeId, Long sideId);
}
```

## src/main/java/com/nubo/assignment/service17/repository/SideRepository.java

```java
package com.nubo.assignment.service17.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.assignment.service17.models.entity.SideEntity;

public interface SideRepository extends JpaRepository<SideEntity, String> {

}

```

## src/main/java/com/nubo/assignment/service17/repository/TradeRepository.java

```java
package com.nubo.assignment.service17.repository;

import com.nubo.assignment.service17.models.entity.TradeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.time.LocalDate;
import java.util.Optional;

public interface TradeRepository extends JpaRepository<TradeEntity, Long>, JpaSpecificationExecutor<TradeEntity> {

    Optional<TradeEntity> findByMatchIdAndMatchDate(Long matchId, LocalDate matchDate);
}

```

## src/main/java/com/nubo/assignment/service17/repository/TradingSystemRepository.java

```java
package com.nubo.assignment.service17.repository;

import com.nubo.assignment.service17.models.entity.TradingSystemEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TradingSystemRepository extends JpaRepository<TradingSystemEntity, Long> {

    TradingSystemEntity findByDescription(String description);
}
```

## src/main/java/com/nubo/assignment/service17/service/ProcessMessageService.java

```java
package com.nubo.assignment.service17.service;

public interface ProcessMessageService {

    void assignmentFractionSrv17(String messageJson);

}

```

## src/main/java/com/nubo/assignment/service17/service/impl/ProcessMessageServiceImpl.java

```java
package com.nubo.assignment.service17.service.impl;

import java.math.BigDecimal;
import java.time.Instant;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.nubo.assignment.service17.application.util.ApplicationUtils;
import com.nubo.assignment.service17.client.operations.cmd.models.request.FractionClientInDto;
import com.nubo.assignment.service17.client.operations.cmd.models.response.FractionAccountOutDto;
import com.nubo.assignment.service17.client.operations.cmd.models.response.ParticipantBankAccountOutDto;
import com.nubo.assignment.service17.client.operations.cmd.models.response.SettlementOutDto;
import com.nubo.assignment.service17.client.operations.cmd.service.OperationsCmdClient;
import com.nubo.assignment.service17.exception.ServiceException;
import com.nubo.assignment.service17.exception.error.ErrorCode;
import com.nubo.assignment.service17.helpers.ExceptionMessageUtil;
import com.nubo.assignment.service17.helpers.MapperUtil;
import com.nubo.assignment.service17.helpers.ValidatorUtil;
import com.nubo.assignment.service17.kafka.producer.KafkaNuboProducerAdapter;
import com.nubo.assignment.service17.models.domain.TradeSide;
import com.nubo.assignment.service17.models.dto.request.AssignmentFractionInDto;
import com.nubo.assignment.service17.models.dto.request.AssignmentInDto;
import com.nubo.assignment.service17.models.dto.response.AssignmentOutDto;
import com.nubo.assignment.service17.models.dto.response.PackageCustodianOutDto;
import com.nubo.assignment.service17.models.entity.ParticipantEntity;
import com.nubo.assignment.service17.models.entity.SideEntity;
import com.nubo.assignment.service17.models.entity.TradeEntity;
import com.nubo.assignment.service17.models.enums.CustodianEquivalenceEnum;
import com.nubo.assignment.service17.models.enums.SideEnum;
import com.nubo.assignment.service17.repository.ParticipantRepository;
import com.nubo.assignment.service17.repository.SideRepository;
import com.nubo.assignment.service17.repository.TradeRepository;
import com.nubo.assignment.service17.service.ProcessMessageService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class ProcessMessageServiceImpl implements ProcessMessageService {

    private final KafkaNuboProducerAdapter kafkaNuboProducerAdapter;
    private final TradeRepository tradeRepository;
        private final ParticipantRepository participantRepository;
    private final SideRepository sideRepository;
    private final OperationsCmdClient operationsCmdClient;
    private final ValidatorUtil validatorUtil;
    private final ExceptionMessageUtil exceptionMessageUtil;

    @Override
    public void assignmentFractionSrv17(String messageJson) {
        log.info("Start method assignmentFractionSrv17");
        try {
            AssignmentInDto assignmentInDto = buildAssignmentInDto(messageJson);
            AssignmentOutDto assignmentOutDto = validateAssignment(assignmentInDto);
            kafkaNuboProducerAdapter.sendResponseSrv17(assignmentOutDto);
        } catch (Exception e) {
            AssignmentOutDto assignmentOutDto = AssignmentOutDto.builder()
                    .messageAssignment(exceptionMessageUtil.buildErrorMessage(e))
                    .timestamp(Instant.now())
                    .build();
            kafkaNuboProducerAdapter.sendResponseSrv17(assignmentOutDto);
        }
        log.info("End method assignmentFractionSrv17");
    }

    private AssignmentOutDto validateAssignment(AssignmentInDto assignmentInDto) {
        Optional<SideEntity> sideEntityOp = sideRepository.findById(assignmentInDto.getSide());
        Optional<TradeEntity> tradeEntityOp = tradeRepository.findByMatchIdAndMatchDate(assignmentInDto.getMatchId(),
                assignmentInDto.getOperationDate());

        if (tradeEntityOp.isEmpty() || sideEntityOp.isEmpty()) {
            return buildAssignmentOutDtoError(assignmentInDto, "Message does not exist in TRADE");
        }

        TradeEntity tradeEntity = tradeEntityOp.get();
        SideEntity sideEntity = sideEntityOp.get();

        ParticipantBankAccountOutDto participantBankAccountOutDto = operationsCmdClient
                .validateCudAccountFractionAssignment(tradeEntity.getId(), sideEntity.getId());

        String participantCode = assignmentInDto.getAffiliate().startsWith("CO0")
                ? assignmentInDto.getAffiliate()
                : "CO0" + assignmentInDto.getAffiliate();
        ParticipantEntity participantEntityBuy = tradeEntity.getParticipantBuy();
        ParticipantEntity participantEntitySell = tradeEntity.getParticipantSell();

        if (SideEnum.BUY.getId().equalsIgnoreCase(sideEntity.getId())
                && participantEntityBuy.getCode().equalsIgnoreCase(participantCode)) {
            TradeSide tradeSide = new TradeSide(tradeEntity.getId(), tradeEntity.getMatchId(),
                    tradeEntity.getMatchDate(), sideEntity, participantEntityBuy,
                    tradeEntity.getSourceQuoteBuyType(), tradeEntity.getAssignmentMarkBuy(),
                    assignmentInDto.getAffiliate(), participantBankAccountOutDto,
                    tradeEntity.getMarketId());
            return processAssignment(tradeSide, assignmentInDto.getAssignmentFractions());

        } else if (SideEnum.SELL.getId().equalsIgnoreCase(sideEntity.getId())
                && participantEntitySell.getCode().equalsIgnoreCase(participantCode)) {
            TradeSide tradeSide = new TradeSide(tradeEntity.getId(), tradeEntity.getMatchId(),
                    tradeEntity.getMatchDate(), sideEntity, participantEntitySell,
                    tradeEntity.getSourceQuoteSellType(), tradeEntity.getAssignmentMarkSell(),
                    assignmentInDto.getAffiliate(), participantBankAccountOutDto,
                    tradeEntity.getMarketId());
            return processAssignment(tradeSide, assignmentInDto.getAssignmentFractions());

        } else {
            log.warn("Participant code {} does not match BUY or SELL participant for sideId {}", participantCode,
                    sideEntity.getId());
            return buildAssignmentOutDtoError(assignmentInDto,
                    "Participant not found for sideId: " + sideEntity.getId());
        }
    }

    private AssignmentOutDto processAssignment(TradeSide tradeSide,
            List<AssignmentFractionInDto> assignmentFractionInDtoList) {
        log.debug("Processing assignment for TradeSide: {}, with {} fractions", tradeSide,
                assignmentFractionInDtoList.size());
        try {
            List<FractionClientInDto> fractionInDtoList = assignmentFractionInDtoList.stream()
                    .map(assignmentFractionInDto -> buildFractionClientInDto(tradeSide, assignmentFractionInDto))
                    .toList();
            List<SettlementOutDto> settlementOutDtoList;
            if (Boolean.TRUE.equals(tradeSide.assignmentMark())) {
                settlementOutDtoList = operationsCmdClient.fractionationUpdateAssignment(tradeSide.tradeId(),
                        tradeSide.sideEntity().getId(), fractionInDtoList);
            } else {
                settlementOutDtoList = operationsCmdClient.fractionationCreateAssignment(tradeSide.tradeId(),
                        tradeSide.sideEntity().getId(), fractionInDtoList);
            }

            processCreatePackage(tradeSide, assignmentFractionInDtoList, settlementOutDtoList);

            return buildAssignmentOutDto(tradeSide, "Assignment processed successfully");
        } catch (Exception e) {
            return buildAssignmentOutDto(tradeSide,
                    "Error processing assignment: " + exceptionMessageUtil.buildErrorMessage(e));
        }
    }

    private FractionClientInDto buildFractionClientInDto(TradeSide tradeSide,
            AssignmentFractionInDto assignmentFractionInDto) {
        FractionAccountOutDto fractionAccountOutDto = operationsCmdClient.validateAccountFractionAssignment(
                assignmentFractionInDto.getDvlDcvAccount(), tradeSide.tradeId(), tradeSide.sideEntity().getId(),
                tradeSide.sourceQuoteType().getId());

        return FractionClientInDto.builder()
                .investorAccountId(fractionAccountOutDto.getInvestorAccount() == null
                        ? null
                        : fractionAccountOutDto.getInvestorAccount().getId())
                .participantAccountId(fractionAccountOutDto.getParticipantAccount() == null
                        ? null
                        : fractionAccountOutDto.getParticipantAccount().getId())
                .directDepositorId(null)
                .fiduciarySpecialist(fractionAccountOutDto.getFiduciarySpecialist())
                .sourceQuoteTypeId(tradeSide.sourceQuoteType().getId())
                .reference(assignmentFractionInDto.getReference())
                .fractionQuantity(assignmentFractionInDto.getFractionalNominal())
                .commissionPercentage(assignmentFractionInDto.getCommissionPercentage() == null
                        ? BigDecimal.ZERO
                        : assignmentFractionInDto.getCommissionPercentage())
                .cashAccount(tradeSide.participantBankAccountOutDto().getBankAccount())
                .custodianId(resolveCustodianId(assignmentFractionInDto, fractionAccountOutDto))
                .ficAdministratorId(null)
                                .referencePackage(resolveReferencePackage(assignmentFractionInDto))
                .build();
    }

        private String resolveReferencePackage(AssignmentFractionInDto assignmentFractionInDto) {
                if (assignmentFractionInDto == null) {
                        return null;
                }
                if (assignmentFractionInDto.getReferencePackage() != null
                                && !assignmentFractionInDto.getReferencePackage().isBlank()) {
                        return assignmentFractionInDto.getReferencePackage();
                }
                return null;
        }

    private Long resolveCustodianId(AssignmentFractionInDto assignmentFractionInDto,
            FractionAccountOutDto fractionAccountOutDto) {
        Long inputCustodianId = assignmentFractionInDto.getCustodian();
        if (inputCustodianId != null) {
            if (inputCustodianId < 1) {
                throw new ServiceException(ErrorCode.VALIDATION_ERROR,
                        "Error de validación: El campo 'custodian' falta o tiene un valor inválido.");
            }

            CustodianEquivalenceEnum equivalence = CustodianEquivalenceEnum.fromSrvExch(inputCustodianId)
                    .orElseThrow(() -> new ServiceException(ErrorCode.VALIDATION_ERROR,
                            "Error de validación: El campo 'custodian' falta o tiene un valor inválido."));

            ParticipantEntity participantEntity = participantRepository
                    .findFirstByCodeAndCustodianTrueAndEnabledTrueOrderByIdAsc(equivalence.getParticipantCode())
                    .orElseThrow(() -> new ServiceException(ErrorCode.VALIDATION_ERROR,
                            "Error de validación: El campo 'custodian' falta o tiene un valor inválido."));

            return participantEntity.getId();
        }

        return fractionAccountOutDto.getCustodian() == null
                ? null
                : fractionAccountOutDto.getCustodian().getId();
    }

    private AssignmentOutDto buildAssignmentOutDtoError(AssignmentInDto assignmentInDto, String messageError) {
        return AssignmentOutDto.builder()
                .matchId(assignmentInDto.getMatchId())
                .matchDate(assignmentInDto.getOperationDate())
                .affiliate(assignmentInDto.getAffiliate())
                .messageAssignment(messageError)
                .timestamp(Instant.now())
                .build();
    }

    private AssignmentOutDto buildAssignmentOutDto(TradeSide tradeSide, String message) {
        return AssignmentOutDto.builder()
                .affiliate(tradeSide.affiliate())
                .tradeId(tradeSide.tradeId())
                .matchId(tradeSide.matchId())
                .matchDate(tradeSide.matchDate())
                .side(MapperUtil.sideEntityToSideOutDto(tradeSide.sideEntity()))
                .participant(MapperUtil.participantEntityToParticipantOutDto(tradeSide.participantEntity()))
                .timestamp(Instant.now())
                .messageAssignment(message)
                .build();
    }

    private AssignmentInDto buildAssignmentInDto(String messageJson) {
        AssignmentInDto assignmentInDto = ApplicationUtils.convertJsonToObject(messageJson, AssignmentInDto.class);
        validatorUtil.validateObject(assignmentInDto);
        return assignmentInDto;
    }

    private void processCreatePackage(TradeSide tradeSide, List<AssignmentFractionInDto> assignmentFractionInDtoList,
            List<SettlementOutDto> settlementOutDtoList) {
        log.info("Processing create package");
        Map<String, AssignmentFractionInDto> mapAccountNumberAndFraction = assignmentFractionInDtoList.stream()
                .filter(a -> a.getDvlDcvAccount() != null)
                .collect(Collectors.toMap(AssignmentFractionInDto::getDvlDcvAccount,
                        a -> a,
                        (existing, replacement) -> existing));

        for (SettlementOutDto settlementOutDto : settlementOutDtoList) {
            if (settlementOutDto.getCustodianStatus() == null) {
                if (settlementOutDto.getInvestorAccount() != null
                        && mapAccountNumberAndFraction
                                .containsKey(settlementOutDto.getInvestorAccount().getAccountNumber())) {
                    AssignmentFractionInDto fractionData = mapAccountNumberAndFraction
                            .get(settlementOutDto.getInvestorAccount().getAccountNumber());
                    PackageCustodianOutDto packageCustodianOutDto = PackageCustodianOutDto.builder()
                            .clientUser(tradeSide.affiliate())
                            .marketId(tradeSide.marketId())
                            .uniqueFractionId(settlementOutDto.getUniqueFractionId())
                            .participantId(tradeSide.participantEntity() != null
                                    ? tradeSide.participantEntity().getId()
                                    : 0L)
                            .codeSCB(fractionData.getReferenceCode())
                            .referencePackage(resolveReferencePackage(fractionData))
                            .build();
                    kafkaNuboProducerAdapter.sendCreatePackageCustodySync(packageCustodianOutDto);

                } else if (settlementOutDto.getParticipantAccount() != null
                        && mapAccountNumberAndFraction
                                .containsKey(settlementOutDto.getParticipantAccount().getAccountNumber())) {
                    AssignmentFractionInDto fractionData = mapAccountNumberAndFraction
                            .get(settlementOutDto.getParticipantAccount().getAccountNumber());
                    PackageCustodianOutDto packageCustodianOutDto = PackageCustodianOutDto.builder()
                            .clientUser(tradeSide.affiliate())
                            .marketId(tradeSide.marketId())
                            .uniqueFractionId(settlementOutDto.getUniqueFractionId())
                            .participantId(tradeSide.participantEntity() != null
                                    ? tradeSide.participantEntity().getId()
                                    : 0L)
                            .codeSCB(fractionData.getReferenceCode())
                            .referencePackage(resolveReferencePackage(fractionData))
                            .build();
                    kafkaNuboProducerAdapter.sendCreatePackageCustodySync(packageCustodianOutDto);
                }
            }
        }
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
      pool-name: "@hikari.pool.name@"
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
      topic-name-assignment-request: ${KAFKA_NUBO_TOPIC_ASSIGNMENT_SRV17_REQUEST}
      group-id: ${KAFKA_NUBO_GROUP_ID}
    producer:
      topic-name-assignment-response: ${KAFKA_NUBO_TOPIC_ASSIGNMENT_SRV17_RESPONSE:kafka-nubo-assignment-srv-17-response}
      topic-create-package-custody: ${KAFKA_NUBO_TOPIC_NAME_CREATE_PACKAGE_CUSTODY}
logging:
  config: classpath:log/log4j2.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR
    com.nubo.assignment.service17: DEBUG
client:
  nubo:
    url-operation-rules: ${NUBO_URL_OPERATION_RULES}
    url-operation-cmd: ${NUBO_URL_OPERATION_CMD}

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
      pool-name: "@hikari.pool.name@"
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
      protocol: PLAINTEXT
    sasl:
      mechanism: ""
      jaas:
        config: "org.apache.kafka.common.security.scram.ScramLoginModule required;"
    consumer:
      topic-name-assignment-request: ${KAFKA_NUBO_TOPIC_ASSIGNMENT_SRV17_REQUEST}
      group-id: ${KAFKA_NUBO_GROUP_ID}
    producer:
      topic-name-assignment-response: ${KAFKA_NUBO_TOPIC_ASSIGNMENT_SRV17_RESPONSE:kafka-nubo-assignment-srv-17-response}
      topic-create-package-custody: ${KAFKA_NUBO_TOPIC_NAME_CREATE_PACKAGE_CUSTODY}
logging:
  config: classpath:log/log4j2.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR
    com.nubo.assignment.service17: DEBUG
client:
  nubo:
    url-operation-rules: ${NUBO_URL_OPERATION_RULES}
    url-operation-cmd: ${NUBO_URL_OPERATION_CMD}

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
      pool-name: "@hikari.pool.name@"
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
      topic-name-assignment-request: ${KAFKA_NUBO_TOPIC_ASSIGNMENT_SRV17_REQUEST}
      group-id: ${KAFKA_NUBO_GROUP_ID}
    producer:
      topic-name-assignment-response: ${KAFKA_NUBO_TOPIC_ASSIGNMENT_SRV17_RESPONSE:kafka-nubo-assignment-srv-17-response}
      topic-create-package-custody: ${KAFKA_NUBO_TOPIC_NAME_CREATE_PACKAGE_CUSTODY}
logging:
  config: classpath:log/log4j2-prod.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR
client:
  nubo:
    url-operation-rules: ${NUBO_URL_OPERATION_RULES}
    url-operation-cmd: ${NUBO_URL_OPERATION_CMD}

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
      pool-name: "@hikari.pool.name@"
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
      topic-name-assignment-request: ${KAFKA_NUBO_TOPIC_ASSIGNMENT_SRV17_REQUEST}
      group-id: ${KAFKA_NUBO_GROUP_ID}
    producer:
      topic-name-assignment-response: ${KAFKA_NUBO_TOPIC_ASSIGNMENT_SRV17_RESPONSE:kafka-nubo-assignment-srv-17-response}
      topic-create-package-custody: ${KAFKA_NUBO_TOPIC_NAME_CREATE_PACKAGE_CUSTODY}
logging:
  config: classpath:log/log4j2.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR
client:
  nubo:
    url-operation-rules: ${NUBO_URL_OPERATION_RULES}
    url-operation-cmd: ${NUBO_URL_OPERATION_CMD}

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
      pool-name: "@hikari.pool.name@"
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
      topic-name-assignment-request: ${KAFKA_NUBO_TOPIC_ASSIGNMENT_SRV17_REQUEST}
      group-id: ${KAFKA_NUBO_GROUP_ID}
    producer:
      topic-name-assignment-response: ${KAFKA_NUBO_TOPIC_ASSIGNMENT_SRV17_RESPONSE:kafka-nubo-assignment-srv-17-response}
      topic-create-package-custody: ${KAFKA_NUBO_TOPIC_NAME_CREATE_PACKAGE_CUSTODY}
logging:
  config: classpath:log/log4j2.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR
client:
  nubo:
    url-operation-rules: ${NUBO_URL_OPERATION_RULES}
    url-operation-cmd: ${NUBO_URL_OPERATION_CMD}

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
  ,---.   ,---.   ,---. ,--. ,----.   ,--.  ,--.,--.   ,--.,------.,--.  ,--.,--------.,---. ,------.,------.,--.   ,--.,--. ,-----.,------. ,--.,-----.
 /  O  \ '   .-' '   .-'|  |'  .-./   |  ,'.|  ||   `.'   ||  .---'|  ,'.|  |'--.  .--'   .-'|  .---'|  .--. '\  `.'  / |  |'  .--./|  .---'/   |'--,  /
|  .-.  |`.  `-. `.  `-.|  ||  | .---.|  |' '  ||  |'.'|  ||  `--, |  |' '  |   |  |  `.  `-.|  `--, |  '--'.' \     /  |  ||  |    |  `--, `|  | .'  /
|  | |  |.-'    |.-'    |  |'  '--'  ||  | `   ||  |   |  ||  `---.|  | `   |   |  |  .-'    |  `---.|  |\  \   \   /   |  |'  '--'\|  `---. |  |/   /
`--' `--'`-----' `-----'`--' `------' `--'  `--'`--'   `--'`------'`--'  `--'   `--'  `-----'`------'`--' '--'   `-'    `--' `-----'`------' `--'`--'

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
appender.console.layout.charset = UTF-8

rootLogger = INFO, STDOUT

```
