# nbo-png-recepcion-anticipos-back

Código fuente completo de producción y configuraciones. Captura local: 28/10/2026.

Incluye 84 archivos Java y 16 archivos de configuración, recursos y compilación.

Cada sección identifica la ruta original y contiene el archivo completo. Los Java conservan sus implementaciones, imports, anotaciones y comentarios. Se excluyen src/test, clases de prueba, resultados de compilación, librerías binarias y herramientas/perfiles de pruebas de rendimiento.

Credenciales literales ocultadas en configuraciones: 0. Las referencias a variables de entorno se conservan.

## Índice

1. `mvnw`
2. `mvnw.cmd`
3. `pom.xml`
4. `.mvn/wrapper/maven-wrapper.properties`
5. `src/main/resources/application-dev.yml`
6. `src/main/resources/application-local.yml`
7. `src/main/resources/application-prod.yml`
8. `src/main/resources/application-qa.yml`
9. `src/main/resources/application-uat.yml`
10. `src/main/resources/application.yml`
11. `src/main/resources/banner.txt`
12. `src/main/resources/log/JsonEventLayout_error.json`
13. `src/main/resources/log/JsonEventLayout_info.json`
14. `src/main/resources/log/JsonEventLayout_trace.json`
15. `src/main/resources/log/log4j2-prod.properties`
16. `src/main/resources/log/log4j2.properties`
17. `src/main/java/com/nubo/reception/advance/payment/ReceptionAdvancePaymentApplication.java`
18. `src/main/java/com/nubo/reception/advance/payment/application/config/CacheConfig.java`
19. `src/main/java/com/nubo/reception/advance/payment/application/config/KafkaConsumerConfig.java`
20. `src/main/java/com/nubo/reception/advance/payment/application/config/KafkaProducerConfig.java`
21. `src/main/java/com/nubo/reception/advance/payment/application/config/WebConfig.java`
22. `src/main/java/com/nubo/reception/advance/payment/application/context/GlobalContext.java`
23. `src/main/java/com/nubo/reception/advance/payment/application/database/NamingStrategyConfig.java`
24. `src/main/java/com/nubo/reception/advance/payment/application/database/UpperNamingConfig.java`
25. `src/main/java/com/nubo/reception/advance/payment/application/properties/PropertiesConfig.java`
26. `src/main/java/com/nubo/reception/advance/payment/application/properties/PropertiesContext.java`
27. `src/main/java/com/nubo/reception/advance/payment/application/util/ApplicationUtils.java`
28. `src/main/java/com/nubo/reception/advance/payment/application/util/RestClientUtils.java`
29. `src/main/java/com/nubo/reception/advance/payment/client/kafka/consumer/KafkaNuboListenerAdapter.java`
30. `src/main/java/com/nubo/reception/advance/payment/client/kafka/producer/KafkaNuboAdapter.java`
31. `src/main/java/com/nubo/reception/advance/payment/client/rules/models/dto/request/StatusUpdateSettlementInDto.java`
32. `src/main/java/com/nubo/reception/advance/payment/client/rules/models/dto/request/StatusUpdateTradeInDto.java`
33. `src/main/java/com/nubo/reception/advance/payment/client/rules/models/dto/response/ActionOutDto.java`
34. `src/main/java/com/nubo/reception/advance/payment/client/rules/models/dto/response/BusinessRuleOutDto.java`
35. `src/main/java/com/nubo/reception/advance/payment/client/rules/models/dto/response/StatusAllowedOptionsOutDto.java`
36. `src/main/java/com/nubo/reception/advance/payment/client/rules/models/dto/response/StatusClientOutDto.java`
37. `src/main/java/com/nubo/reception/advance/payment/client/rules/models/dto/response/StatusUpdateTradeOutDto.java`
38. `src/main/java/com/nubo/reception/advance/payment/client/rules/service/OperationBusinessRuleClient.java`
39. `src/main/java/com/nubo/reception/advance/payment/client/rules/service/impl/OperationBusinessRuleClientImpl.java`
40. `src/main/java/com/nubo/reception/advance/payment/exception/ClientException.java`
41. `src/main/java/com/nubo/reception/advance/payment/exception/ServiceException.java`
42. `src/main/java/com/nubo/reception/advance/payment/exception/error/ErrorCode.java`
43. `src/main/java/com/nubo/reception/advance/payment/exception/error/ErrorResponse.java`
44. `src/main/java/com/nubo/reception/advance/payment/exception/error/ErrorValidation.java`
45. `src/main/java/com/nubo/reception/advance/payment/exception/handler/GlobalExceptionHandler.java`
46. `src/main/java/com/nubo/reception/advance/payment/exception/kafka/KafkaErrorBuild.java`
47. `src/main/java/com/nubo/reception/advance/payment/models/dto/request/AdvancePaymentVericlearInDto.java`
48. `src/main/java/com/nubo/reception/advance/payment/models/dto/request/AmountDto.java`
49. `src/main/java/com/nubo/reception/advance/payment/models/dto/request/BaseDto.java`
50. `src/main/java/com/nubo/reception/advance/payment/models/dto/request/DateDto.java`
51. `src/main/java/com/nubo/reception/advance/payment/models/dto/request/InstrumentDto.java`
52. `src/main/java/com/nubo/reception/advance/payment/models/dto/request/MetaDataDto.java`
53. `src/main/java/com/nubo/reception/advance/payment/models/dto/request/TradeConfirmVericlearInDto.java`
54. `src/main/java/com/nubo/reception/advance/payment/models/dto/response/CountryOutDto.java`
55. `src/main/java/com/nubo/reception/advance/payment/models/dto/response/MetaDataOutDto.java`
56. `src/main/java/com/nubo/reception/advance/payment/models/dto/response/NotificationOutDto.java`
57. `src/main/java/com/nubo/reception/advance/payment/models/dto/response/StatusOutDto.java`
58. `src/main/java/com/nubo/reception/advance/payment/models/entity/CountryEntity.java`
59. `src/main/java/com/nubo/reception/advance/payment/models/entity/DepositoryEntity.java`
60. `src/main/java/com/nubo/reception/advance/payment/models/entity/DepositoryMappingEntity.java`
61. `src/main/java/com/nubo/reception/advance/payment/models/entity/DirectDepositoryEntity.java`
62. `src/main/java/com/nubo/reception/advance/payment/models/entity/HolidayEntity.java`
63. `src/main/java/com/nubo/reception/advance/payment/models/entity/ParticipantEntity.java`
64. `src/main/java/com/nubo/reception/advance/payment/models/entity/SettlementEntity.java`
65. `src/main/java/com/nubo/reception/advance/payment/models/entity/SettlementKey.java`
66. `src/main/java/com/nubo/reception/advance/payment/models/entity/SettlementStatusHistoryEntity.java`
67. `src/main/java/com/nubo/reception/advance/payment/models/entity/SettlementStatusHistoryKey.java`
68. `src/main/java/com/nubo/reception/advance/payment/models/entity/SideEntity.java`
69. `src/main/java/com/nubo/reception/advance/payment/models/entity/StatusEntity.java`
70. `src/main/java/com/nubo/reception/advance/payment/models/entity/StatusMappingEntity.java`
71. `src/main/java/com/nubo/reception/advance/payment/models/entity/TradeConfirmEntity.java`
72. `src/main/java/com/nubo/reception/advance/payment/models/entity/TradeEntity.java`
73. `src/main/java/com/nubo/reception/advance/payment/models/entity/TradeStatusHistoryEntity.java`
74. `src/main/java/com/nubo/reception/advance/payment/models/entity/TradeStatusHistoryKey.java`
75. `src/main/java/com/nubo/reception/advance/payment/models/entity/TypeEntity.java`
76. `src/main/java/com/nubo/reception/advance/payment/models/enums/BusinessRuleEnum.java`
77. `src/main/java/com/nubo/reception/advance/payment/models/enums/ExternalSystemEnum.java`
78. `src/main/java/com/nubo/reception/advance/payment/models/enums/InstructionEnum.java`
79. `src/main/java/com/nubo/reception/advance/payment/models/enums/NotificationEnum.java`
80. `src/main/java/com/nubo/reception/advance/payment/models/enums/NotificationTypeEnum.java`
81. `src/main/java/com/nubo/reception/advance/payment/models/enums/OperationTypeEnum.java`
82. `src/main/java/com/nubo/reception/advance/payment/models/enums/PropertiesEnum.java`
83. `src/main/java/com/nubo/reception/advance/payment/models/enums/ScreenEnum.java`
84. `src/main/java/com/nubo/reception/advance/payment/models/enums/SideEnum.java`
85. `src/main/java/com/nubo/reception/advance/payment/models/enums/StatusEnum.java`
86. `src/main/java/com/nubo/reception/advance/payment/models/enums/VersionApiEnum.java`
87. `src/main/java/com/nubo/reception/advance/payment/repository/DepositoryMappingRepository.java`
88. `src/main/java/com/nubo/reception/advance/payment/repository/DirectDepositoryRepository.java`
89. `src/main/java/com/nubo/reception/advance/payment/repository/HolidayRepository.java`
90. `src/main/java/com/nubo/reception/advance/payment/repository/SettlementRepository.java`
91. `src/main/java/com/nubo/reception/advance/payment/repository/SideRepository.java`
92. `src/main/java/com/nubo/reception/advance/payment/repository/StatusMappingRepository.java`
93. `src/main/java/com/nubo/reception/advance/payment/repository/StatusRepository.java`
94. `src/main/java/com/nubo/reception/advance/payment/repository/TradeConfirmRepository.java`
95. `src/main/java/com/nubo/reception/advance/payment/repository/TradeRepository.java`
96. `src/main/java/com/nubo/reception/advance/payment/repository/TradeStatusHistoryRepository.java`
97. `src/main/java/com/nubo/reception/advance/payment/service/BatchCacheService.java`
98. `src/main/java/com/nubo/reception/advance/payment/service/ProcessMessageService.java`
99. `src/main/java/com/nubo/reception/advance/payment/service/impl/BatchCacheServiceImpl.java`
100. `src/main/java/com/nubo/reception/advance/payment/service/impl/ProcessMessageServiceImpl.java`

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
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">

    <modelVersion>4.0.0</modelVersion>

    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>4.1.1</version>
        <relativePath/>
    </parent>

    <groupId>com.nubo.reception.advance.payment</groupId>
    <artifactId>reception-advance</artifactId>
    <version>0.7.10-beta.9</version>

    <name>${project.artifactId}</name>
    <description>Reception Advance</description>

    <properties>
        <java.version>21</java.version>
        <test.skip>false</test.skip>

        <datasource.url.application.name>ApplicationName=${project.artifactId}</datasource.url.application.name>
        <hikari.pool.name>${project.artifactId}-pool</hikari.pool.name>

        <!-- Security overrides -->
        <tomcat.version>11.0.25</tomcat.version>

        <!-- Jackson 3 - Spring Boot 4 -->
        <jackson-bom.version>3.1.7</jackson-bom.version>

        <!-- Jackson 2 - legacy application compatibility -->
        <jackson-2-bom.version>2.21.7</jackson-2-bom.version>

        <!-- LZ4 security fixes -->
        <lz4-java.version>1.11.4</lz4-java.version>
    </properties>

    <dependencies>

        <!--
            Base Spring Boot starter.
            Remove default Logback stack because this application uses Log4j2.
        -->
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

        <!-- Web -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
            <exclusions>
                <exclusion>
                    <groupId>org.springframework.boot</groupId>
                    <artifactId>spring-boot-starter-logging</artifactId>
                </exclusion>
                <exclusion>
                    <groupId>ch.qos.logback</groupId>
                    <artifactId>logback-classic</artifactId>
                </exclusion>
                <exclusion>
                    <groupId>org.apache.logging.log4j</groupId>
                    <artifactId>log4j-to-slf4j</artifactId>
                </exclusion>
            </exclusions>
        </dependency>

        <!--
            Jackson 2 kept because existing application code /
            Kafka deserializer still uses com.fasterxml.jackson.*
        -->
        <dependency>
            <groupId>com.fasterxml.jackson.core</groupId>
            <artifactId>jackson-databind</artifactId>
        </dependency>

        <dependency>
            <groupId>com.fasterxml.jackson.datatype</groupId>
            <artifactId>jackson-datatype-jsr310</artifactId>
        </dependency>

        <!-- Logging: Log4j2 -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-log4j2</artifactId>
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

        <!-- Database / JPA -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-jpa</artifactId>
            <exclusions>
                <exclusion>
                    <groupId>org.springframework.boot</groupId>
                    <artifactId>spring-boot-starter-logging</artifactId>
                </exclusion>
                <exclusion>
                    <groupId>ch.qos.logback</groupId>
                    <artifactId>logback-classic</artifactId>
                </exclusion>
                <exclusion>
                    <groupId>org.apache.logging.log4j</groupId>
                    <artifactId>log4j-to-slf4j</artifactId>
                </exclusion>
            </exclusions>
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
            <exclusions>
                <exclusion>
                    <groupId>org.springframework.boot</groupId>
                    <artifactId>spring-boot-starter-logging</artifactId>
                </exclusion>
                <exclusion>
                    <groupId>ch.qos.logback</groupId>
                    <artifactId>logback-classic</artifactId>
                </exclusion>
                <exclusion>
                    <groupId>org.apache.logging.log4j</groupId>
                    <artifactId>log4j-to-slf4j</artifactId>
                </exclusion>
            </exclusions>
        </dependency>

        <!-- Actuator -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-actuator</artifactId>
            <exclusions>
                <exclusion>
                    <groupId>org.springframework.boot</groupId>
                    <artifactId>spring-boot-starter-logging</artifactId>
                </exclusion>
                <exclusion>
                    <groupId>ch.qos.logback</groupId>
                    <artifactId>logback-classic</artifactId>
                </exclusion>
                <exclusion>
                    <groupId>org.apache.logging.log4j</groupId>
                    <artifactId>log4j-to-slf4j</artifactId>
                </exclusion>
            </exclusions>
        </dependency>

        <!-- Kafka -->
        <dependency>
            <groupId>org.springframework.kafka</groupId>
            <artifactId>spring-kafka</artifactId>
            <exclusions>
                <exclusion>
                    <groupId>ch.qos.logback</groupId>
                    <artifactId>logback-classic</artifactId>
                </exclusion>
                <exclusion>
                    <groupId>org.apache.logging.log4j</groupId>
                    <artifactId>log4j-to-slf4j</artifactId>
                </exclusion>
            </exclusions>
        </dependency>

        <!-- Patched LZ4 -->
        <dependency>
            <groupId>at.yawk.lz4</groupId>
            <artifactId>lz4-java</artifactId>
            <version>${lz4-java.version}</version>
        </dependency>

        <!-- Cache -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-cache</artifactId>
            <exclusions>
                <exclusion>
                    <groupId>org.springframework.boot</groupId>
                    <artifactId>spring-boot-starter-logging</artifactId>
                </exclusion>
                <exclusion>
                    <groupId>ch.qos.logback</groupId>
                    <artifactId>logback-classic</artifactId>
                </exclusion>
                <exclusion>
                    <groupId>org.apache.logging.log4j</groupId>
                    <artifactId>log4j-to-slf4j</artifactId>
                </exclusion>
            </exclusions>
        </dependency>

        <dependency>
            <groupId>com.github.ben-manes.caffeine</groupId>
            <artifactId>caffeine</artifactId>
        </dependency>

        <!-- Commons IO -->
        <dependency>
            <groupId>commons-io</groupId>
            <artifactId>commons-io</artifactId>
            <version>2.18.0</version>
        </dependency>

        <!-- Tests -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
            <exclusions>
                <exclusion>
                    <groupId>org.springframework.boot</groupId>
                    <artifactId>spring-boot-starter-logging</artifactId>
                </exclusion>
                <exclusion>
                    <groupId>ch.qos.logback</groupId>
                    <artifactId>logback-classic</artifactId>
                </exclusion>
                <exclusion>
                    <groupId>org.apache.logging.log4j</groupId>
                    <artifactId>log4j-to-slf4j</artifactId>
                </exclusion>
            </exclusions>
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
                    <groupId>org.springframework.boot</groupId>
                    <artifactId>spring-boot-starter-logging</artifactId>
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
                    <groupId>org.apache.logging.log4j</groupId>
                    <artifactId>log4j-to-slf4j</artifactId>
                </exclusion>

            </exclusions>
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

            <!-- Java 21 -->
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <configuration>
                    <release>${java.version}</release>
                </configuration>
            </plugin>

            <!-- Spring Boot -->
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

            <!-- Unit tests -->
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-surefire-plugin</artifactId>
                <configuration>
                    <skipTests>${test.skip}</skipTests>
                    <testFailureIgnore>true</testFailureIgnore>
                </configuration>
            </plugin>

            <!-- JaCoCo -->
            <plugin>
                <groupId>org.jacoco</groupId>
                <artifactId>jacoco-maven-plugin</artifactId>
                <version>0.8.14</version>

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
                                <exclude>**/OperationVericlearConfirmedApplication.class</exclude>
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

## .mvn/wrapper/maven-wrapper.properties

```properties
wrapperVersion=3.3.4
distributionType=only-script
distributionUrl=https://repo.maven.apache.org/maven2/org/apache/maven/apache-maven/3.9.16/apache-maven-3.9.16-bin.zip

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
      pool-name: '@hikari.pool.name@'
  jpa:
    hibernate:
      ddl-auto: none
      default_schema: NUANBODB
    show-sql: 'true'
    database-platform: org.hibernate.dialect.PostgreSQLDialect
logging:
  config: classpath:log/log4j2.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR
client:
  nubo:
    url-operation-rules: ${NUBO_URL_OPERATION_RULES:localhost}
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
      topic-reception-advance-co-confirm: ${KAFKA_NUBO_TOPIC_RECEPTION_ADVANCE_CO_RECEPTION_RESULT}
      group-id: ${KAFKA_NUBO_GROUP_ID}
    producer:
      topic-name-notification-request: ${KAFKA_NUBO_NOTIFICATION_REQUEST_TOPIC}

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
client:
  nubo:
    url-operation-rules: ${NUBO_URL_OPERATION_RULES:localhost}
kafka:
  nubo:
    retries: ${KAFKA_NUBO_RETRIES:5}
    bootstrap-servers: ${KAFKA_NUBO_BOOTSTRAP_SERVER}
    auto-offset-reset: ${KAFKA_NUBO_AUTO_OFFSET_RESET:latest}
    security:
      protocol: PLAINTEXT
    sasl:
      mechanism: PLAIN
      jaas:
        config: ""
    consumer:
      topic-reception-advance-co-confirm: ${KAFKA_NUBO_TOPIC_RECEPTION_ADVANCE_CO_RECEPTION_RESULT}
      group-id: ${KAFKA_NUBO_GROUP_ID}
    producer:
      topic-name-notification-request: ${KAFKA_NUBO_NOTIFICATION_REQUEST_TOPIC}

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
      pool-name: '@hikari.pool.name@'
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
    url-operation-rules: ${NUBO_URL_OPERATION_RULES:localhost}
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
      topic-reception-advance-co-confirm: ${KAFKA_NUBO_TOPIC_RECEPTION_ADVANCE_CO_RECEPTION_RESULT}
      group-id: ${KAFKA_NUBO_GROUP_ID}
    producer:
      topic-name-notification-request: ${KAFKA_NUBO_NOTIFICATION_REQUEST_TOPIC}

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
client:
  nubo:
    url-operation-rules: ${NUBO_URL_OPERATION_RULES:localhost}
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
      topic-reception-advance-co-confirm: ${KAFKA_NUBO_TOPIC_RECEPTION_ADVANCE_CO_RECEPTION_RESULT}
      group-id: ${KAFKA_NUBO_GROUP_ID}
    producer:
      topic-name-notification-request: ${KAFKA_NUBO_NOTIFICATION_REQUEST_TOPIC}

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
client:
  nubo:
    url-operation-rules: ${NUBO_URL_OPERATION_RULES:localhost}
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
      topic-reception-advance-co-confirm: ${KAFKA_NUBO_TOPIC_RECEPTION_ADVANCE_CO_RECEPTION_RESULT}
      group-id: ${KAFKA_NUBO_GROUP_ID}
    producer:
      topic-name-notification-request: ${KAFKA_NUBO_NOTIFICATION_REQUEST_TOPIC}

```

## src/main/resources/application.yml

```yaml
spring:
  profiles:
    active: ${SPRING_PROFILES_ACTIVE}
  application:
    name: '@project.name@'
    type: service
server:
  servlet:
    context-path: /${spring.application.name}
application:
  version: '@project.version@'
  description: 'Documentation Endpoints'
  title: '@project.description@'
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
,------. ,------. ,-----.,------.,------.,--------.,--. ,-----. ,--.  ,--.  ,---.  ,------.,--.   ,--.,---.  ,--.  ,--. ,-----.,------.
|  .--. '|  .---''  .--./|  .---'|  .--. '--.  .--'|  |'  .-.  '|  ,'.|  | /  O  \ |  .-.  \\  `.'  //  O  \ |  ,'.|  |'  .--./|  .---'
|  '--'.'|  `--, |  |    |  `--, |  '--' |  |  |   |  ||  | |  ||  |' '  ||  .-.  ||  |  \  :\     /|  .-.  ||  |' '  ||  |    |  `--,
|  |\  \ |  `---.'  '--'\|  `---.|  | --'   |  |   |  |'  '-'  '|  | `   ||  | |  ||  '--'  / \   / |  | |  ||  | `   |'  '--'\|  `---.
`--' '--'`------' `-----'`------'`--'       `--'   `--' `-----' `--'  `--'`--' `--'`-------'   `-'  `--' `--'`--'  `--' `-----'`------'

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

## src/main/java/com/nubo/reception/advance/payment/ReceptionAdvancePaymentApplication.java

```java
package com.nubo.reception.advance.payment;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ReceptionAdvancePaymentApplication {

	public static void main(String[] args) {
		SpringApplication.run(ReceptionAdvancePaymentApplication.class, args);
	}

}

```

## src/main/java/com/nubo/reception/advance/payment/application/config/CacheConfig.java

```java
package com.nubo.reception.advance.payment.application.config;

import com.github.benmanes.caffeine.cache.Caffeine;
import org.springframework.cache.Cache;
import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.cache.caffeine.CaffeineCache;
import org.springframework.cache.support.SimpleCacheManager;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Arrays;
import java.util.concurrent.TimeUnit;

@Configuration
@EnableCaching
public class CacheConfig {

    @Bean
    @SuppressWarnings("null")
    public CacheManager cacheManager() {
        SimpleCacheManager cacheManager = new SimpleCacheManager();

        cacheManager.setCaches(Arrays.asList(
                buildCache("findHolidayDatesInRange", 10, TimeUnit.MINUTES)));

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

## src/main/java/com/nubo/reception/advance/payment/application/config/KafkaConsumerConfig.java

```java
package com.nubo.reception.advance.payment.application.config;

import java.nio.ByteBuffer;
import java.util.HashMap;
import java.util.Map;

import com.nubo.reception.advance.payment.application.properties.PropertiesConfig;
import com.nubo.reception.advance.payment.exception.ServiceException;
import com.nubo.reception.advance.payment.exception.error.ErrorCode;
import com.nubo.reception.advance.payment.exception.kafka.KafkaErrorBuild;
import com.nubo.reception.advance.payment.models.dto.request.AdvancePaymentVericlearInDto;
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


import lombok.RequiredArgsConstructor;

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
        configProps.put(JsonDeserializer.TRUSTED_PACKAGES, "com.nubo.reception.advance.payment");

        if (!isLocalProfile()) {
            configProps.put("sasl.mechanism", propertiesConfig.getKafkaNuboSaslMechanism());
            configProps.put("sasl.jaas.config", propertiesConfig.getKafkaNuboSaslJaasConfig());
        }

        return new DefaultKafkaConsumerFactory<>(
                configProps,
                new StringDeserializer(),
                new ErrorHandlingDeserializer<>(new JsonDeserializer<>(responseType)));
    }

    @Bean("kafkaNuboListenerContainerFactory")
    public ConcurrentKafkaListenerContainerFactory<String, AdvancePaymentVericlearInDto> kafkaNuboListenerContainerFactory(
            DefaultErrorHandler errorHandler) {
        ConcurrentKafkaListenerContainerFactory<String, AdvancePaymentVericlearInDto> factory = new ConcurrentKafkaListenerContainerFactory<>();
        factory.setConsumerFactory(consumerFactoryKafkaNubo(AdvancePaymentVericlearInDto.class));
        factory.setCommonErrorHandler(errorHandler);
        factory.getContainerProperties().setDeliveryAttemptHeader(true);
        return factory;
    }

    @Bean
    public DefaultErrorHandler kafkaErrorHandler(KafkaErrorBuild kafkaErrorBuilder) {
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
                    kafkaErrorBuilder.buildError(exception, errorCode, record.offset(), record.topic(),
                            deliveryAttempt);
                },
                backOff);
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

## src/main/java/com/nubo/reception/advance/payment/application/config/KafkaProducerConfig.java

```java
package com.nubo.reception.advance.payment.application.config;

import com.nubo.reception.advance.payment.application.properties.PropertiesConfig;
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

## src/main/java/com/nubo/reception/advance/payment/application/config/WebConfig.java

```java
package com.nubo.reception.advance.payment.application.config;

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
    public RestClient restClient() {
        return RestClient.create();
    }

}

```

## src/main/java/com/nubo/reception/advance/payment/application/context/GlobalContext.java

```java
package com.nubo.reception.advance.payment.application.context;

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

## src/main/java/com/nubo/reception/advance/payment/application/database/NamingStrategyConfig.java

```java
package com.nubo.reception.advance.payment.application.database;

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

## src/main/java/com/nubo/reception/advance/payment/application/database/UpperNamingConfig.java

```java
package com.nubo.reception.advance.payment.application.database;

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

## src/main/java/com/nubo/reception/advance/payment/application/properties/PropertiesConfig.java

```java
package com.nubo.reception.advance.payment.application.properties;

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

    @Value("${kafka.nubo.consumer.topic-reception-advance-co-confirm}")
    private String kafkaNuboConsumerTopicNameReceptionAdvance;

    @Value("${kafka.nubo.consumer.group-id}")
    private String kafkaNuboConsumerGroupId;

    @Value("${kafka.nubo.auto-offset-reset}")
    private String kafkaNuboAutoOffsetReset;

    @Value("${kafka.nubo.producer.topic-name-notification-request}")
    private String kafkaNuboProducerTopicNameNotifications;

    @Value("${client.nubo.url-operation-rules}")
    private String urlNuboOperationRules;

}

```

## src/main/java/com/nubo/reception/advance/payment/application/properties/PropertiesContext.java

```java
package com.nubo.reception.advance.payment.application.properties;

import com.nubo.reception.advance.payment.application.context.GlobalContext;
import com.nubo.reception.advance.payment.application.util.ApplicationUtils;
import com.nubo.reception.advance.payment.models.enums.PropertiesEnum;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;


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

}

```

## src/main/java/com/nubo/reception/advance/payment/application/util/ApplicationUtils.java

```java
package com.nubo.reception.advance.payment.application.util;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.nubo.reception.advance.payment.exception.ServiceException;
import com.nubo.reception.advance.payment.exception.error.ErrorCode;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.OffsetDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;

public class ApplicationUtils {

    private static final ZoneId SERVER_ZONE_ID;
    private static final ObjectMapper MAPPER = new ObjectMapper();
    private static final String FORMAT_DATETIME = "yyyy-MM-dd'T'HH:mm:ss";
    private static final String FORMAT_DATE = "yyyy-MM-dd";

    static {
        JavaTimeModule javaTimeModule = new JavaTimeModule();
        MAPPER.registerModule(javaTimeModule);
        MAPPER.disable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS);
        SERVER_ZONE_ID = ZoneId.systemDefault();
    }

    private ApplicationUtils() {
    }

    public static String getFormatDatetime() {
        return FORMAT_DATETIME;
    }

    public static String getLocalDateTimeNow() {
        return LocalDateTime.now().format(DateTimeFormatter.ofPattern(ApplicationUtils.getFormatDatetime()));
    }

    public static OffsetDateTime getOffsetDateTimeNow() {
        return OffsetDateTime.now(SERVER_ZONE_ID);
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

## src/main/java/com/nubo/reception/advance/payment/application/util/RestClientUtils.java

```java
package com.nubo.reception.advance.payment.application.util;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
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

    public <T> ResponseEntity<T> requestBodyWithResponseObject(URI url, HttpMethod method, HttpHeaders headers,
            Object requestBody, Class<T> responseType) {
        log.info("Client [{}] {}", method, url);
        log.debug("Request Body: {}", requestBody);
        return restClient.method(method)
                .uri(url)
                .headers(h -> h.addAll(headers))
                .body(requestBody)
                .retrieve()
                .toEntity(responseType);
    }

    public <T> ResponseEntity<T> requestWithResponseObject(URI url, HttpMethod method, HttpHeaders headers,
            Class<T> responseType) {
        log.info("Client [{}] {}", method, url);
        return restClient.method(method)
                .uri(url)
                .headers(h -> h.addAll(headers))
                .retrieve()
                .toEntity(responseType);
    }

}

```

## src/main/java/com/nubo/reception/advance/payment/client/kafka/consumer/KafkaNuboListenerAdapter.java

```java
package com.nubo.reception.advance.payment.client.kafka.consumer;

import java.util.Set;

import com.nubo.reception.advance.payment.application.context.GlobalContext;
import com.nubo.reception.advance.payment.application.util.ApplicationUtils;
import com.nubo.reception.advance.payment.models.dto.request.AdvancePaymentVericlearInDto;
import com.nubo.reception.advance.payment.models.enums.PropertiesEnum;
import com.nubo.reception.advance.payment.service.ProcessMessageService;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.support.KafkaHeaders;
import org.springframework.messaging.handler.annotation.Header;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Component;


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

    @KafkaListener(topics = "#{propertiesConfig.kafkaNuboConsumerTopicNameReceptionAdvance}", containerFactory = "kafkaNuboListenerContainerFactory")
    public void listen(@Payload AdvancePaymentVericlearInDto tradeConfirmVericlear,
            @Header(KafkaHeaders.RECEIVED_PARTITION) int partition,
            @Header(KafkaHeaders.OFFSET) long offset,
            @Header(KafkaHeaders.RECEIVED_TOPIC) String topic,
            @Header(name = KafkaHeaders.DELIVERY_ATTEMPT, required = false) Integer retry) {
        log.info(
                "Advance message received. topic: {} - partition: {} - offset: {} - " +
                        "deliveryAttempt: {} - instructionId: {} - dealId: {} - " +
                        "instructionType: {} - status: {}",
                topic,
                partition,
                offset,
                retry,
                tradeConfirmVericlear != null
                        ? tradeConfirmVericlear.getInstructionId() : null,
                tradeConfirmVericlear != null
                        ? tradeConfirmVericlear.getDealId() : null,
                tradeConfirmVericlear != null
                        ? tradeConfirmVericlear.getInstructionType() : null,
                tradeConfirmVericlear != null
                        ? tradeConfirmVericlear.getStatus() : null);

        if (!validateObject(tradeConfirmVericlear)) {
            log.error("Validation failed for message from Topic: {} -- Partition: {} -- Offset: {}",
                    topic, partition, offset);
            return;
        }

        this.setProperties(topic, topic);
        try {
            processMessageService.updateOperation(tradeConfirmVericlear);
        } catch (Exception e) {
            log.error("ERROR -> processing message from Topic: {} -- Partition: {} -- Offset: {} -- Error: {}",
                    topic, partition, offset, e.getMessage());
            throw e;
        }

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

## src/main/java/com/nubo/reception/advance/payment/client/kafka/producer/KafkaNuboAdapter.java

```java
package com.nubo.reception.advance.payment.client.kafka.producer;

import java.util.concurrent.CompletableFuture;

import com.nubo.reception.advance.payment.application.properties.PropertiesConfig;
import com.nubo.reception.advance.payment.application.util.ApplicationUtils;
import com.nubo.reception.advance.payment.models.dto.response.NotificationOutDto;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.SendResult;
import org.springframework.stereotype.Component;


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
                    log.error("Error sending message to topic: {} -- json: {}, Exception: {}", topic, jsonString, ex);
                    return null;
                });
    }
}

```

## src/main/java/com/nubo/reception/advance/payment/client/rules/models/dto/request/StatusUpdateSettlementInDto.java

```java
package com.nubo.reception.advance.payment.client.rules.models.dto.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.nubo.reception.advance.payment.models.enums.BusinessRuleEnum;
import com.nubo.reception.advance.payment.models.enums.SideEnum;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class StatusUpdateSettlementInDto {

    @NotNull
    private Long tradeId;

    @NotNull
    @JsonProperty("sideId")
    private SideEnum sideEnum;

    @NotNull
    private Integer fraction;

    @NotNull
    private BusinessRuleEnum code;

}

```

## src/main/java/com/nubo/reception/advance/payment/client/rules/models/dto/request/StatusUpdateTradeInDto.java

```java
package com.nubo.reception.advance.payment.client.rules.models.dto.request;

import com.nubo.reception.advance.payment.models.enums.BusinessRuleEnum;
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
    private BusinessRuleEnum code;

}

```

## src/main/java/com/nubo/reception/advance/payment/client/rules/models/dto/response/ActionOutDto.java

```java
package com.nubo.reception.advance.payment.client.rules.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.nubo.reception.advance.payment.models.dto.response.StatusOutDto;
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
    
    private StatusOutDto status;

    private String description;

    private String value;

}

```

## src/main/java/com/nubo/reception/advance/payment/client/rules/models/dto/response/BusinessRuleOutDto.java

```java
package com.nubo.reception.advance.payment.client.rules.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.nubo.reception.advance.payment.models.dto.response.CountryOutDto;
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

## src/main/java/com/nubo/reception/advance/payment/client/rules/models/dto/response/StatusAllowedOptionsOutDto.java

```java
package com.nubo.reception.advance.payment.client.rules.models.dto.response;

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

## src/main/java/com/nubo/reception/advance/payment/client/rules/models/dto/response/StatusClientOutDto.java

```java
package com.nubo.reception.advance.payment.client.rules.models.dto.response;

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

## src/main/java/com/nubo/reception/advance/payment/client/rules/models/dto/response/StatusUpdateTradeOutDto.java

```java
package com.nubo.reception.advance.payment.client.rules.models.dto.response;

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

## src/main/java/com/nubo/reception/advance/payment/client/rules/service/OperationBusinessRuleClient.java

```java
package com.nubo.reception.advance.payment.client.rules.service;

import com.nubo.reception.advance.payment.client.rules.models.dto.request.StatusUpdateTradeInDto;
import com.nubo.reception.advance.payment.client.rules.models.dto.response.BusinessRuleOutDto;
import com.nubo.reception.advance.payment.client.rules.models.dto.response.StatusUpdateTradeOutDto;
import com.nubo.reception.advance.payment.models.enums.BusinessRuleEnum;

public interface OperationBusinessRuleClient {

    BusinessRuleOutDto findBusinessRuleByCountryIdAndCode(Long countryId, BusinessRuleEnum code);

    BusinessRuleOutDto findBusinessRuleByCode(BusinessRuleEnum code);

    StatusUpdateTradeOutDto validateUpdateStatusTrade(StatusUpdateTradeInDto statusUpdateTradeInDto);

    BusinessRuleOutDto findBusinessRuleByCountryIdAndCodeValid(Long countryId, BusinessRuleEnum code);

}

```

## src/main/java/com/nubo/reception/advance/payment/client/rules/service/impl/OperationBusinessRuleClientImpl.java

```java
package com.nubo.reception.advance.payment.client.rules.service.impl;

import com.nubo.reception.advance.payment.application.properties.PropertiesConfig;
import com.nubo.reception.advance.payment.application.util.ApplicationUtils;
import com.nubo.reception.advance.payment.application.util.RestClientUtils;
import com.nubo.reception.advance.payment.client.rules.models.dto.request.StatusUpdateTradeInDto;
import com.nubo.reception.advance.payment.client.rules.models.dto.response.BusinessRuleOutDto;
import com.nubo.reception.advance.payment.client.rules.models.dto.response.StatusUpdateTradeOutDto;
import com.nubo.reception.advance.payment.client.rules.service.OperationBusinessRuleClient;
import com.nubo.reception.advance.payment.exception.ClientException;
import com.nubo.reception.advance.payment.exception.error.ErrorCode;
import com.nubo.reception.advance.payment.models.enums.BusinessRuleEnum;
import com.nubo.reception.advance.payment.models.enums.PropertiesEnum;
import com.nubo.reception.advance.payment.models.enums.VersionApiEnum;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.time.LocalDateTime;

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
    public BusinessRuleOutDto findBusinessRuleByCountryIdAndCode(Long countryId, BusinessRuleEnum code) {
        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getUrlNuboOperationRules())
                .pathSegment(VersionApiEnum.V1.getValue(), OPERATION_BUSINESS_RULE)
                .path("/country/{countryId}/code/{code}")
                .buildAndExpand(countryId, code.getValue())
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
    public BusinessRuleOutDto findBusinessRuleByCode(BusinessRuleEnum code) {
        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getUrlNuboOperationRules())
                .pathSegment(VersionApiEnum.V1.getValue(), OPERATION_BUSINESS_RULE)
                .path("/code/{code}")
                .buildAndExpand(code.getValue())
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
    public BusinessRuleOutDto findBusinessRuleByCountryIdAndCodeValid(Long countryId, BusinessRuleEnum code) {
        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getUrlNuboOperationRules())
                .pathSegment(VersionApiEnum.V1.getValue(), OPERATION_ACTION_BUSINESS_RULE)
                .path("/country/{countryId}/code/{code}/valid")
                .buildAndExpand(countryId, code.getValue())
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
        headers.set(PropertiesEnum.CLIENT_IP.getValue(), "127.0.0.1");
        headers.set(PropertiesEnum.CLIENT_USER.getValue(), "recepcion-anticipos-back");
        headers.set(PropertiesEnum.CLIENT_DATETIME.getValue(),
                ApplicationUtils.convertLocalDateTimeToString(LocalDateTime.now()));
        headers.setContentType(MediaType.APPLICATION_JSON);
        return headers;
    }
}

```

## src/main/java/com/nubo/reception/advance/payment/exception/ClientException.java

```java
package com.nubo.reception.advance.payment.exception;
import com.nubo.reception.advance.payment.exception.error.ErrorCode;
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

## src/main/java/com/nubo/reception/advance/payment/exception/ServiceException.java

```java
package com.nubo.reception.advance.payment.exception;


import com.nubo.reception.advance.payment.exception.error.ErrorCode;
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

## src/main/java/com/nubo/reception/advance/payment/exception/error/ErrorCode.java

```java
package com.nubo.reception.advance.payment.exception.error;


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
    ERROR_DESERIALIZER_JSON("Error Deserializer Json"),
    TRADE_VALIDATION_FAILED("Trade validation failed"),
    ERROR_KAFKA_PRODUCER_NUBO("Error Producer Kafka Nubo"),
    STATUS_NOT_FOUND("Status not found in database"),
    TRADE_NOT_FOUND("Trade not found"),
    VERSION_API_NOT_FOUND("Version API not found"),
    USER_NOT_FOUND("User not found"),
    COUNTRY_NOT_FOUND("Country not found"),
    ERROR_KAFKA_CONSUMER_NUBO("Error Consumer Kafka Nubo"),
    DEPOSITORY_NOT_FOUND("Despository not found"),
    TYPE_NOT_FOUND("Type not found"),
    SIDE_NOT_FOUND("Side Not Found"),
    STATUS_MAPPING_NOT_FOUND("Status mapping not found"),
    DEPOSITORY_MAPPING_NOT_FOUND("Depository mapping not found"),
    SETTLEMENT_NOT_FOUND("Settlement not found in database"),
    DIRECT_DEPOSITORY_NOT_FOUND("Direct depository not found in database"),
    TRADE_CONFIRM_NOT_FOUND("Trade confirm not found in database"),
    INVALID_DATE("Invalid date format"),
    INVALID_ADVANCE_DATE("Invalid advance date"),
    INVALID_MATCH_ID("Invalid match Id"),
    INVALID_BUSINESS_DATE("Invalid business date"),
    INVALID_TRADE_DATE("Invalid trade date"),
    CLIENT_OPERATION_RULES_ERROR("An unexpected error occurred in Operation Rules"),
    INVALID_DEAL_ID("Invalid deal Id"),
    INCONSISTENT_ADVANCE_STATE("Inconsistent advance state"),
    TRADE_NOT_READY_FOR_ADVANCE("Trade is not ready for advance"),;


    private final String message;

    ErrorCode(String message) {
        this.message = message;
    }

    public String getName() {
        return this.name();
    }

}

```

## src/main/java/com/nubo/reception/advance/payment/exception/error/ErrorResponse.java

```java
package com.nubo.reception.advance.payment.exception.error;

import com.fasterxml.jackson.annotation.JsonInclude;

import com.nubo.reception.advance.payment.application.util.ApplicationUtils;
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

    private String httpCode;
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

## src/main/java/com/nubo/reception/advance/payment/exception/error/ErrorValidation.java

```java
package com.nubo.reception.advance.payment.exception.error;

import com.fasterxml.jackson.annotation.JsonInclude;

import com.nubo.reception.advance.payment.application.util.ApplicationUtils;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ErrorValidation {

    private String id;
    private String description;

    @Override
    public String toString() {
        return ApplicationUtils.convertObjectToJson(this);
    }

}

```

## src/main/java/com/nubo/reception/advance/payment/exception/handler/GlobalExceptionHandler.java

```java
package com.nubo.reception.advance.payment.exception.handler;

import com.nubo.reception.advance.payment.application.properties.PropertiesContext;
import com.nubo.reception.advance.payment.exception.ServiceException;
import com.nubo.reception.advance.payment.exception.error.ErrorCode;
import com.nubo.reception.advance.payment.exception.error.ErrorResponse;
import com.nubo.reception.advance.payment.exception.error.ErrorValidation;
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

## src/main/java/com/nubo/reception/advance/payment/exception/kafka/KafkaErrorBuild.java

```java
package com.nubo.reception.advance.payment.exception.kafka;

import com.nubo.reception.advance.payment.application.properties.PropertiesConfig;
import com.nubo.reception.advance.payment.application.util.ApplicationUtils;
import com.nubo.reception.advance.payment.exception.error.ErrorCode;
import com.nubo.reception.advance.payment.exception.error.ErrorResponse;
import com.nubo.reception.advance.payment.exception.error.ErrorValidation;
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

## src/main/java/com/nubo/reception/advance/payment/models/dto/request/AdvancePaymentVericlearInDto.java

```java
package com.nubo.reception.advance.payment.models.dto.request;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.*;

@Data
@Builder(toBuilder = true)
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonIgnoreProperties(ignoreUnknown = true)
public class AdvancePaymentVericlearInDto {

    private BaseDto base;

    private String instructionType;

    private String instructionId;

    private String sequenceNumber;

    private DateDto businessDate;

    private String csdCode;

    private String ccpCode;

    private String tradingMemberCode;

    private String accountGroupCode;

    private String accountGroupType;

    private DateDto tradeDate;

    private DateDto settlementDate;

    private InstrumentDto instrument;

    private String quantity;

    private String settledQuantity;

    private String pendingQuantity;

    private String currency;

    private AmountDto cashAmount;

    private AmountDto cashSettledAmount;

    private String cmCsdParticipantCode;

    private String tmCsdParticipantCode;

    private String custodianCsdParticipantCode;

    private String csdAccountCode;

    private String status;

    private String segmentCode;

    private String productCode;

    private String tradeId;

    private String dealId;

    private String accountId;

    private String lastUpdatedTimestamp;

    private String nettingType;

}
```

## src/main/java/com/nubo/reception/advance/payment/models/dto/request/AmountDto.java

```java
package com.nubo.reception.advance.payment.models.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AmountDto {

    private String value;
}

```

## src/main/java/com/nubo/reception/advance/payment/models/dto/request/BaseDto.java

```java
package com.nubo.reception.advance.payment.models.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BaseDto {

    private MetaDataDto metadata;
}

```

## src/main/java/com/nubo/reception/advance/payment/models/dto/request/DateDto.java

```java
package com.nubo.reception.advance.payment.models.dto.request;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DateDto {

    private Integer year;
    private Integer month;
    private Integer day;
}

```

## src/main/java/com/nubo/reception/advance/payment/models/dto/request/InstrumentDto.java

```java
package com.nubo.reception.advance.payment.models.dto.request;

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
public class InstrumentDto {

    private String symbol;
    private String isin;
    private String securityType;
    private String securitySubType;
    private String exchange;
}

```

## src/main/java/com/nubo/reception/advance/payment/models/dto/request/MetaDataDto.java

```java
package com.nubo.reception.advance.payment.models.dto.request;

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
public class MetaDataDto {

    private String key;
    private String timestamp;
    private String busTime;
    private String topic;
}

```

## src/main/java/com/nubo/reception/advance/payment/models/dto/request/TradeConfirmVericlearInDto.java

```java
package com.nubo.reception.advance.payment.models.dto.request;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

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
public class TradeConfirmVericlearInDto {

    @JsonProperty("@type")
    private String typeMessage;

    @JsonProperty("type")
    private String type;

    @JsonProperty("tradeId_BUY")
    private Long tradeIdBuy;

    @JsonProperty("tradeId_SELL")
    private Long tradeIdSell;

    @JsonProperty("dealId")
    private Long dealId;

    @NotNull
    @JsonProperty("messageDealId")
    private Long matchId;

    @NotNull
    @JsonProperty("clearingDate")
    private LocalDate clearingDate;

    @JsonProperty("tradeDate")
    private LocalDate matchDate;

    @NotNull
    @JsonProperty("status")
    private String status;

    @JsonProperty("csdCode_BUY")
    private String csdCodeBuy;

    @JsonProperty("csdCode_SELL")
    private String csdCodeSell;

    @JsonProperty("settlementDate")
    private LocalDate settlementDate;

    @JsonProperty("reason")
    private String reason;

}

```

## src/main/java/com/nubo/reception/advance/payment/models/dto/response/CountryOutDto.java

```java
package com.nubo.reception.advance.payment.models.dto.response;

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

## src/main/java/com/nubo/reception/advance/payment/models/dto/response/MetaDataOutDto.java

```java
package com.nubo.reception.advance.payment.models.dto.response;

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

    private String code;

    private String action;

}

```

## src/main/java/com/nubo/reception/advance/payment/models/dto/response/NotificationOutDto.java

```java
package com.nubo.reception.advance.payment.models.dto.response;

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

    String screenCode;
}

```

## src/main/java/com/nubo/reception/advance/payment/models/dto/response/StatusOutDto.java

```java
package com.nubo.reception.advance.payment.models.dto.response;

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

    private String shortName;
}

```

## src/main/java/com/nubo/reception/advance/payment/models/entity/CountryEntity.java

```java
package com.nubo.reception.advance.payment.models.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
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

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (!(o instanceof CountryEntity))
            return false;
        CountryEntity that = (CountryEntity) o;
        return id != null && id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/reception/advance/payment/models/entity/DepositoryEntity.java

```java
package com.nubo.reception.advance.payment.models.entity;

import java.time.LocalDateTime;
import java.util.Objects;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
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

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        DepositoryEntity that = (DepositoryEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

}

```

## src/main/java/com/nubo/reception/advance/payment/models/entity/DepositoryMappingEntity.java

```java
package com.nubo.reception.advance.payment.models.entity;

import java.time.LocalDateTime;
import java.util.Objects;

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

@Getter
@Setter
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

    @ManyToOne()
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

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        DepositoryMappingEntity that = (DepositoryMappingEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

}

```

## src/main/java/com/nubo/reception/advance/payment/models/entity/DirectDepositoryEntity.java

```java
package com.nubo.reception.advance.payment.models.entity;

import java.time.LocalDateTime;
import java.util.Objects;

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

@Getter
@Setter
@Builder(toBuilder = true)
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"DIRECT_DEPOSITORY\"", schema = "\"NUANBODB\"")
public class DirectDepositoryEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"DIRECT_DEPOSITORY_ID\"")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "\"PARTICIPANT_ID\"", nullable = false)
    private ParticipantEntity participant;

    @ManyToOne
    @JoinColumn(name = "\"DEPOSITORY_ID\"", nullable = false)
    private DepositoryEntity depository;

    @Column(name = "\"DIRECT_DEPOSITORY_NUMBER\"", length = 80)
    private String directDepositoryNumber;

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
        DirectDepositoryEntity that = (DirectDepositoryEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/reception/advance/payment/models/entity/HolidayEntity.java

```java
package com.nubo.reception.advance.payment.models.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"HOLIDAY\"", schema = "\"NUANBODB\"")
public class HolidayEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"HOLIDAY_ID\"")
    private Long id;

    @ManyToOne(optional = false)
    @JoinColumn(name = "\"COUNTRY_ID\"", nullable = false)
    private CountryEntity country;

    @Column(name = "\"HOLIDAY_DATE\"")
    private LocalDate holidayDate;

    @Column(name = "\"DESCRIPTION\"", length = 200)
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
        if (!(o instanceof HolidayEntity))
            return false;
        HolidayEntity that = (HolidayEntity) o;
        return id != null && id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/reception/advance/payment/models/entity/ParticipantEntity.java

```java
package com.nubo.reception.advance.payment.models.entity;

import java.time.LocalDateTime;
import java.util.Objects;

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

@Getter
@Setter
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

    @Column(name = "\"IDENTIFICATION_TYPE_ID\"", nullable = false)
    private Long identificationTypeId;

    @Column(name = "\"NAME\"", length = 100)
    private String name;

    @Column(name = "\"SHORT_NAME\"", length = 50)
    private String shortName;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"", nullable = false)
    private StatusEntity status;

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
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

}

```

## src/main/java/com/nubo/reception/advance/payment/models/entity/SettlementEntity.java

```java
package com.nubo.reception.advance.payment.models.entity;

import java.time.OffsetDateTime;
import java.util.Objects;

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

@Getter
@Setter
@Builder(toBuilder = true)
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
    @JoinColumn(name = "\"DIRECT_DEPOSITOR\"")
    private ParticipantEntity directDepositor;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"")
    private StatusEntity status;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 30, nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private OffsetDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 30, nullable = false)
    private String lastModifyIp;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        SettlementEntity that = (SettlementEntity) o;
        return Objects.equals(trade, that.trade) &&
                Objects.equals(fraction, that.fraction) &&
                Objects.equals(side, that.side);
    }

    @Override
    public int hashCode() {
        return Objects.hash(trade, fraction, side);
    }
}

```

## src/main/java/com/nubo/reception/advance/payment/models/entity/SettlementKey.java

```java
package com.nubo.reception.advance.payment.models.entity;

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

## src/main/java/com/nubo/reception/advance/payment/models/entity/SettlementStatusHistoryEntity.java

```java
package com.nubo.reception.advance.payment.models.entity;

import java.time.OffsetDateTime;
import java.util.Objects;

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

@Getter
@Setter
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
    private OffsetDateTime time;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"", nullable = false)
    private StatusEntity status;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 30, nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private OffsetDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 30, nullable = false)
    private String lastModifyIp;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        SettlementStatusHistoryEntity that = (SettlementStatusHistoryEntity) o;
        return Objects.equals(trade, that.trade) &&
                Objects.equals(fraction, that.fraction) &&
                Objects.equals(side, that.side) &&
                Objects.equals(time, that.time);
    }

    @Override
    public int hashCode() {
        return Objects.hash(trade, fraction, side, time);
    }
}

```

## src/main/java/com/nubo/reception/advance/payment/models/entity/SettlementStatusHistoryKey.java

```java
package com.nubo.reception.advance.payment.models.entity;

import java.io.Serializable;
import java.time.OffsetDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SettlementStatusHistoryKey implements Serializable {

    private Long trade;

    private Integer fraction;

    private String side;

    private OffsetDateTime time;

}

```

## src/main/java/com/nubo/reception/advance/payment/models/entity/SideEntity.java

```java
package com.nubo.reception.advance.payment.models.entity;

import java.time.LocalDateTime;
import java.util.Objects;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
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
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/reception/advance/payment/models/entity/StatusEntity.java

```java
package com.nubo.reception.advance.payment.models.entity;

import java.time.LocalDateTime;
import java.util.Objects;

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

@Getter
@Setter
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

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        StatusEntity that = (StatusEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/reception/advance/payment/models/entity/StatusMappingEntity.java

```java
package com.nubo.reception.advance.payment.models.entity;

import java.time.LocalDateTime;
import java.util.Objects;

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

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"STATUS_MAPPING\"", schema = "\"NUANBODB\"")
public class StatusMappingEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"STATUS_MAPPING_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"EXTERNAL_SYSTEM\"", length = 30, nullable = false)
    private String externalSystem;

    @Column(name = "\"EXTERNAL_CODE\"", length = 20)
    private String externalCode;

    @Column(name = "\"CATEGORY\"", length = 30)
    private String category;

    @Column(name = "\"EXTERNAL_DESCRIPTION\"", length = 255)
    private String externalDescription;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"", nullable = false)
    private StatusEntity status;

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
        StatusMappingEntity that = (StatusMappingEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/reception/advance/payment/models/entity/TradeConfirmEntity.java

```java
package com.nubo.reception.advance.payment.models.entity;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Objects;

import com.nubo.reception.advance.payment.models.dto.request.TradeConfirmVericlearInDto;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;


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

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"TRADE_CONFIRM\"", schema = "\"NUANBODB\"")
public class TradeConfirmEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"TRADE_CONFIRM_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"MATCH_DATE\"", nullable = false)
    private LocalDate matchDate;

    @Column(name = "\"MATCH_ID\"", precision = 19, nullable = false)
    private Long matchId;

    @Column(name = "\"STATUS\"", nullable = false)
    private String status;


    @Column(name = "\"CSDCODE_BUY\"", length = 20)
    private String csdCodeBuy;

    @Column(name = "\"CSDCODE_SELL\"", length = 20)
    private String csdCodeSell;

    @Column(name = "\"DEAL_ID\"")
    private Long dealId;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 250, nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDateTime;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50, nullable = false)
    private String lastModifyIp;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        TradeConfirmEntity that = (TradeConfirmEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/reception/advance/payment/models/entity/TradeEntity.java

```java
package com.nubo.reception.advance.payment.models.entity;


import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.util.Objects;

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

@Getter
@Setter
@Builder(toBuilder = true)
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"TRADE\"", schema = "\"NUANBODB\"")
public class TradeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"TRADE_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"MATCH_DATE\"")
    private LocalDate matchDate;

    @Column(name = "\"MATCH_ID\"", precision = 19)
    private Long matchId;

    @Column(name = "\"CLEARING_DATE\"", nullable = false)
    private LocalDate clearingDate;

    @Column(name = "\"RETURN_CLEARING_DATE\"", nullable = false)
    private LocalDate returnClearingDate;

    @ManyToOne
    @JoinColumn(name = "\"COUNTRY_ID\"", nullable = false)
    private CountryEntity country;

    @ManyToOne
    @JoinColumn(name = "\"DEPOSITORY_ID\"", nullable = true)
    private DepositoryEntity depository;

    @ManyToOne
    @JoinColumn(name = "\"DEPOSITORY_ID_BUY\"", nullable = true)
    private DepositoryEntity depositoryBuy;

    @ManyToOne
    @JoinColumn(name = "\"DEPOSITORY_ID_SELL\"", nullable = true)
    private DepositoryEntity depositorySell;


    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"", nullable = false)
    private StatusEntity status;

    @ManyToOne
    @JoinColumn(name = "\"TYPE_ID\"")
    private TypeEntity type;

    @Column(name = "\"CANCELED_STATUS\"")
    private Boolean canceledStatus;

    @Column(name = "\"MATCH_TIME\"")
    private OffsetDateTime matchTime;

    @ManyToOne
    @JoinColumn(name = "\"SELL_STATUS_ID\"")
    private StatusEntity sellStatus;

    @ManyToOne
    @JoinColumn(name = "\"BUY_STATUS_ID\"")
    private StatusEntity buyStatus;

    @Column(name = "\"RESETTLEMENT_INDICATOR_ADVANCE\"")
    private Boolean resettlementIndicatorAdvance;

    @Column(name = "\"CLEARING_DATE_OLD\"")
    private OffsetDateTime clearingDateOld;

    @Column(name = "\"DAYS_TO_SETTLEMENT\"")
    private Long daysToSettlement;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 250, nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private OffsetDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50, nullable = false)
    private String lastModifyIp;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        TradeEntity that = (TradeEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

}

```

## src/main/java/com/nubo/reception/advance/payment/models/entity/TradeStatusHistoryEntity.java

```java
package com.nubo.reception.advance.payment.models.entity;

import java.time.OffsetDateTime;
import java.util.Objects;

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

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@IdClass(TradeStatusHistoryKey.class)
@Table(name = "\"TRADE_STATUS_HISTORY\"", schema = "\"NUANBODB\"")
public class TradeStatusHistoryEntity {

    @Id
    @ManyToOne
    @JoinColumn(name = "\"TRADE_ID\"", nullable = false)
    private TradeEntity trade;

    @Id
    @Column(name = "\"TIME\"", nullable = false)
    private OffsetDateTime time;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"", nullable = false)
    private StatusEntity status;

    @Column(name = "\"DETAIL\"", length = 255)
    private String detail;

    @Column(name = "\"SIDE_ID\"")
    private String sideId;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 250, nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private OffsetDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50, nullable = false)
    private String lastModifyIp;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        TradeStatusHistoryEntity that = (TradeStatusHistoryEntity) o;
        return Objects.equals(trade, that.trade) &&
                Objects.equals(time, that.time);
    }

    @Override
    public int hashCode() {
        return Objects.hash(trade, time);
    }
}

```

## src/main/java/com/nubo/reception/advance/payment/models/entity/TradeStatusHistoryKey.java

```java
package com.nubo.reception.advance.payment.models.entity;

import java.io.Serializable;
import java.time.OffsetDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TradeStatusHistoryKey implements Serializable {

    private Long trade;

    private OffsetDateTime time;

}

```

## src/main/java/com/nubo/reception/advance/payment/models/entity/TypeEntity.java

```java
package com.nubo.reception.advance.payment.models.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.Objects;

@Getter
@Setter
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

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        TypeEntity that = (TypeEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/reception/advance/payment/models/enums/BusinessRuleEnum.java

```java
package com.nubo.reception.advance.payment.models.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Arrays;
import java.util.Objects;

@Getter
@RequiredArgsConstructor
public enum BusinessRuleEnum {

    RULE_OPERATION_CORRECTION("RULE_OPERATION_CORRECTION"),
    RULE_OPERATION_CORRECTION_BY_SIDE("RULE_OPERATION_CORRECTION_BY_SIDE"),
    RULE_OPERATION_CORRECTION_ALLOWED_DAYS("RULE_OPERATION_CORRECTION_ALLOWED_DAYS"),
    RULE_OPERATION_CORRECTION_CUSTODIAN("RULE_OPERATION_CORRECTION_CUSTODIAN"),
    RULE_OPERATION_CORRECTION_SPECIAL_FIDUCIARY("RULE_OPERATION_CORRECTION_SPECIAL_FIDUCIARY"),
    RULE_OPERATION_CORRECTION_MAXIMUM_FRACTION_LIMIT("RULE_OPERATION_CORRECTION_MAXIMUM_FRACTION_LIMIT"),
    RULE_OPERATION_ASSIGNMENT_MAXIMUM_FRACTION_LIMIT("RULE_OPERATION_ASSIGNMENT_MAXIMUM_FRACTION_LIMIT"),
    RULE_ASSIGNMENT("RULE_ASSIGNMENT"),
    RULE_REASSIGNMENT_BY_FRACTION_CUSTODIAN("RULE_REASSIGNMENT_BY_FRACTION_CUSTODIAN"),
    RULE_OPERATION_PREPAYMENT("RULE_OPERATION_PREPAYMENT"),
    RULE_FINAL_ASSIGNMENT("RULE_FINAL_ASSIGNMENT");

    private final String value;

    @JsonValue
    public String getValue() {
        return value;
    }

    @JsonCreator
    public static BusinessRuleEnum fromValue(String value) {
        return Arrays.stream(BusinessRuleEnum.values())
                .filter(status -> Objects.equals(status.value, value))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Unknown value: " + value));
    }
}

```

## src/main/java/com/nubo/reception/advance/payment/models/enums/ExternalSystemEnum.java

```java
package com.nubo.reception.advance.payment.models.enums;


import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum ExternalSystemEnum {

    VERICLEAR("CAMARA");

    private final String code;

}

```

## src/main/java/com/nubo/reception/advance/payment/models/enums/InstructionEnum.java

```java
package com.nubo.reception.advance.payment.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum InstructionEnum {

    INSTRUCTION_TYPE_RVP("INSTRUCTION_TYPE_RVP"),
    INSTRUCTION_STATUS_SETTLED("INSTRUCTION_STATUS_SETTLED"),
    NETTING_TYPE_GROSS("NETTING_TYPE_GROSS");

    private final String value;
}
```

## src/main/java/com/nubo/reception/advance/payment/models/enums/NotificationEnum.java

```java
package com.nubo.reception.advance.payment.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum NotificationEnum {

    NOTIFICATION_SILENT("NOTIFICACION_LISTA_SILENCIOSA");

    private final String value;
}

```

## src/main/java/com/nubo/reception/advance/payment/models/enums/NotificationTypeEnum.java

```java
package com.nubo.reception.advance.payment.models.enums;

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

## src/main/java/com/nubo/reception/advance/payment/models/enums/OperationTypeEnum.java

```java
package com.nubo.reception.advance.payment.models.enums;

import lombok.Getter;

import java.util.Arrays;

@Getter
public enum OperationTypeEnum {

    CONTADO("CONTADO", "Contado RV"),
    REPO("REPO", "Repo"),;

    private final String id;
    private final String description;

    OperationTypeEnum(String id, String description) {
        this.id = id;
        this.description = description;
    }

    public static OperationTypeEnum fromId(String id) {
        return Arrays.stream(OperationTypeEnum.values())
                .filter(e -> e.id.equals(id))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Invalid OperationTypeEnum id: " + id));
    }
}
```

## src/main/java/com/nubo/reception/advance/payment/models/enums/PropertiesEnum.java

```java
package com.nubo.reception.advance.payment.models.enums;

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

## src/main/java/com/nubo/reception/advance/payment/models/enums/ScreenEnum.java

```java
package com.nubo.reception.advance.payment.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum ScreenEnum {

    OPERATION_MANAGEMENT("031");

    private final String code;
}

```

## src/main/java/com/nubo/reception/advance/payment/models/enums/SideEnum.java

```java
package com.nubo.reception.advance.payment.models.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Arrays;
import java.util.Objects;

@Getter
@RequiredArgsConstructor
public enum SideEnum {

    BUY("1"),
    SELL("2");

    private final String id;

    @JsonValue
    public String getId() {
        return id;
    }

    @JsonCreator
    public static SideEnum fromId(String id) {
        return Arrays.stream(SideEnum.values())
                .filter(side -> Objects.equals(side.id, id))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Side not implemented, id: " + id));
    }
}

```

## src/main/java/com/nubo/reception/advance/payment/models/enums/StatusEnum.java

```java
package com.nubo.reception.advance.payment.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum StatusEnum {

    REGISTERED(1L, "Operación registrada en Cámara"),
    ASSIGNED(2L, "Operación asignada por anticipo"),
    CANCELED(11L, "Operación anulada en el sistema de negociación"),
    ACCEPTED(15L, "Folio aceptado por Cámara"),;

    private final Long id;
    private final String message;

}

```

## src/main/java/com/nubo/reception/advance/payment/models/enums/VersionApiEnum.java

```java
package com.nubo.reception.advance.payment.models.enums;

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

## src/main/java/com/nubo/reception/advance/payment/repository/DepositoryMappingRepository.java

```java
package com.nubo.reception.advance.payment.repository;

import java.util.Optional;

import com.nubo.reception.advance.payment.models.entity.DepositoryMappingEntity;
import org.springframework.data.jpa.repository.JpaRepository;


public interface DepositoryMappingRepository extends JpaRepository<DepositoryMappingEntity, Long> {

    Optional<DepositoryMappingEntity> findByExternalCodeAndExternalSystem(String externalCode, String externalSystem);
}

```

## src/main/java/com/nubo/reception/advance/payment/repository/DirectDepositoryRepository.java

```java
package com.nubo.reception.advance.payment.repository;

import java.util.Optional;

import com.nubo.reception.advance.payment.models.entity.DepositoryEntity;
import com.nubo.reception.advance.payment.models.entity.DirectDepositoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;


public interface DirectDepositoryRepository extends JpaRepository<DirectDepositoryEntity, Long> {

    Optional<DirectDepositoryEntity> findByDepository(DepositoryEntity depositoryEntity);
}

```

## src/main/java/com/nubo/reception/advance/payment/repository/HolidayRepository.java

```java
package com.nubo.reception.advance.payment.repository;

import com.nubo.reception.advance.payment.models.entity.HolidayEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface HolidayRepository extends JpaRepository<HolidayEntity, Long> {

    @Query("""
            SELECT h.holidayDate
            FROM HolidayEntity h
            WHERE h.country.id = :countryId
            AND h.holidayDate BETWEEN :from AND :to
                """)
    List<LocalDate> findHolidayDatesInRange(
            @Param("countryId") Long countryId,
            @Param("from") LocalDate startDate,
            @Param("to") LocalDate endDate);
}

```

## src/main/java/com/nubo/reception/advance/payment/repository/SettlementRepository.java

```java
package com.nubo.reception.advance.payment.repository;

import java.util.List;

import com.nubo.reception.advance.payment.models.entity.SettlementEntity;
import com.nubo.reception.advance.payment.models.entity.SettlementKey;
import com.nubo.reception.advance.payment.models.entity.SideEntity;
import com.nubo.reception.advance.payment.models.entity.TradeEntity;
import org.springframework.data.jpa.repository.JpaRepository;


public interface SettlementRepository extends JpaRepository<SettlementEntity, SettlementKey> {

    List<SettlementEntity> findByTrade(TradeEntity tradeEntity);
    List<SettlementEntity> findByTradeAndSide(TradeEntity trade, SideEntity side);

}

```

## src/main/java/com/nubo/reception/advance/payment/repository/SideRepository.java

```java
package com.nubo.reception.advance.payment.repository;

import com.nubo.reception.advance.payment.models.entity.SideEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SideRepository extends JpaRepository<SideEntity, String> {
}

```

## src/main/java/com/nubo/reception/advance/payment/repository/StatusMappingRepository.java

```java
package com.nubo.reception.advance.payment.repository;

import java.util.Optional;

import com.nubo.reception.advance.payment.models.entity.StatusMappingEntity;
import org.springframework.data.jpa.repository.JpaRepository;


public interface StatusMappingRepository extends JpaRepository<StatusMappingEntity, Long> {

    Optional<StatusMappingEntity> findByExternalCodeAndExternalSystem(String externalCode, String externalSystem);
}

```

## src/main/java/com/nubo/reception/advance/payment/repository/StatusRepository.java

```java
package com.nubo.reception.advance.payment.repository;

import com.nubo.reception.advance.payment.models.entity.StatusEntity;
import com.nubo.reception.advance.payment.models.entity.StatusMappingEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface StatusRepository extends JpaRepository<StatusEntity, Long> {

}

```

## src/main/java/com/nubo/reception/advance/payment/repository/TradeConfirmRepository.java

```java
package com.nubo.reception.advance.payment.repository;

import com.nubo.reception.advance.payment.models.entity.TradeConfirmEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface TradeConfirmRepository extends JpaRepository<TradeConfirmEntity, Long> {

    Optional<TradeConfirmEntity> findFirstByDealIdOrderByIdDesc(Long dealId);
}

```

## src/main/java/com/nubo/reception/advance/payment/repository/TradeRepository.java

```java
package com.nubo.reception.advance.payment.repository;


import com.nubo.reception.advance.payment.models.entity.TradeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.Optional;

public interface TradeRepository extends JpaRepository<TradeEntity, Long>{

    Optional<TradeEntity> findFirstByMatchIdAndMatchDateOrderByIdDesc(Long matchId, LocalDate matchDate);

}

```

## src/main/java/com/nubo/reception/advance/payment/repository/TradeStatusHistoryRepository.java

```java
package com.nubo.reception.advance.payment.repository;

import com.nubo.reception.advance.payment.models.entity.TradeStatusHistoryEntity;
import com.nubo.reception.advance.payment.models.entity.TradeStatusHistoryKey;
import org.springframework.data.jpa.repository.JpaRepository;


public interface TradeStatusHistoryRepository extends JpaRepository<TradeStatusHistoryEntity, TradeStatusHistoryKey> {

}

```

## src/main/java/com/nubo/reception/advance/payment/service/BatchCacheService.java

```java
package com.nubo.reception.advance.payment.service;

import java.time.LocalDate;
import java.util.List;

public interface BatchCacheService {

    List<LocalDate> findHolidayDatesInRange(Long countryId, LocalDate startDate, LocalDate endDate);

}

```

## src/main/java/com/nubo/reception/advance/payment/service/ProcessMessageService.java

```java
package com.nubo.reception.advance.payment.service;


import com.nubo.reception.advance.payment.models.dto.request.AdvancePaymentVericlearInDto;

public interface ProcessMessageService {

    void updateOperation(AdvancePaymentVericlearInDto advancePaymentVericlearInDto);
}

```

## src/main/java/com/nubo/reception/advance/payment/service/impl/BatchCacheServiceImpl.java

```java
package com.nubo.reception.advance.payment.service.impl;

import com.nubo.reception.advance.payment.repository.HolidayRepository;
import com.nubo.reception.advance.payment.service.BatchCacheService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class BatchCacheServiceImpl implements BatchCacheService {

    private final HolidayRepository holidayRepository;

    @Override
    @Cacheable(value = "findHolidayDatesInRange", key = "#countryId + '_' + #matchDate + '_' + #clearingDate")
    public List<LocalDate> findHolidayDatesInRange(Long countryId, LocalDate startDate, LocalDate endDate) {
        return holidayRepository.findHolidayDatesInRange(countryId, startDate, endDate);
    }

}

```

## src/main/java/com/nubo/reception/advance/payment/service/impl/ProcessMessageServiceImpl.java

```java
package com.nubo.reception.advance.payment.service.impl;


import com.nubo.reception.advance.payment.application.properties.PropertiesConfig;
import com.nubo.reception.advance.payment.application.properties.PropertiesContext;
import com.nubo.reception.advance.payment.application.util.ApplicationUtils;
import com.nubo.reception.advance.payment.client.rules.models.dto.request.StatusUpdateTradeInDto;
import com.nubo.reception.advance.payment.client.rules.models.dto.response.StatusUpdateTradeOutDto;
import com.nubo.reception.advance.payment.client.rules.service.OperationBusinessRuleClient;
import com.nubo.reception.advance.payment.exception.ServiceException;
import com.nubo.reception.advance.payment.exception.error.ErrorCode;
import com.nubo.reception.advance.payment.client.kafka.producer.KafkaNuboAdapter;
import com.nubo.reception.advance.payment.models.dto.request.AdvancePaymentVericlearInDto;
import com.nubo.reception.advance.payment.models.dto.request.DateDto;
import com.nubo.reception.advance.payment.models.dto.response.MetaDataOutDto;
import com.nubo.reception.advance.payment.models.dto.response.NotificationOutDto;
import com.nubo.reception.advance.payment.models.entity.*;
import com.nubo.reception.advance.payment.models.enums.*;
import com.nubo.reception.advance.payment.repository.*;
import com.nubo.reception.advance.payment.service.BatchCacheService;
import com.nubo.reception.advance.payment.service.ProcessMessageService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
@RequiredArgsConstructor
@Slf4j
public class ProcessMessageServiceImpl implements ProcessMessageService {

    private final TradeRepository tradeRepository;
    private final PropertiesConfig propertiesConfig;
    private final KafkaNuboAdapter kafkaNuboAdapter;
    private final TradeConfirmRepository tradeConfirmRepository;
    private final OperationBusinessRuleClient operationBusinessRuleClient;
    private final BatchCacheService batchCacheService;

    @Override
    @Transactional
    public void updateOperation(AdvancePaymentVericlearInDto advancePaymentVericlearInDto) {
        log.info("Start method updateOperation");
        if (ObjectUtils.isEmpty(advancePaymentVericlearInDto)) {
            log.warn("No Confirmation records to persist.");
            return;
        }
        log.info(
                "Processing advance. instructionId: {} - dealId: {} - instructionType: {} - status: {}",
                advancePaymentVericlearInDto.getInstructionId(),
                advancePaymentVericlearInDto.getDealId(),
                advancePaymentVericlearInDto.getInstructionType(),
                advancePaymentVericlearInDto.getStatus());

        if (!InstructionEnum.INSTRUCTION_TYPE_RVP.getValue().equals(advancePaymentVericlearInDto.getInstructionType())) {
            log.info(
                    "Advance ignored because instructionType is not RVP. " +
                            "instructionId: {} - dealId: {} - instructionType: {}",
                    advancePaymentVericlearInDto.getInstructionId(),
                    advancePaymentVericlearInDto.getDealId(),
                    advancePaymentVericlearInDto.getInstructionType());
            return;
        }
        if(ObjectUtils.isEmpty(advancePaymentVericlearInDto.getTradeId()) || ObjectUtils.isEmpty(advancePaymentVericlearInDto.getDealId()) ||
                ObjectUtils.isEmpty(advancePaymentVericlearInDto.getNettingType())){
            log.warn("No advance confirmation.");
            return;
        }

        if (!InstructionEnum.INSTRUCTION_STATUS_SETTLED.getValue().equals(advancePaymentVericlearInDto.getStatus())) {
            return;
        }



        if(!InstructionEnum.NETTING_TYPE_GROSS.getValue().equals(advancePaymentVericlearInDto.getNettingType())) {
            log.info("Message ignored. nettingType is not {}. nettingType: {}",
                    InstructionEnum.NETTING_TYPE_GROSS.getValue(),
                    advancePaymentVericlearInDto.getNettingType());
            return;
        }


        if (ObjectUtils.isEmpty(advancePaymentVericlearInDto.getDealId())) {
            log.warn(
                    "Advance rejected because dealId is empty. instructionId: {}",
                    advancePaymentVericlearInDto.getInstructionId());

            throw new ServiceException(
                    ErrorCode.INVALID_DEAL_ID);
        }

        LocalDate settlementDate = buildLocalDate( advancePaymentVericlearInDto.getSettlementDate());

        LocalDate tradeDate = buildLocalDate(advancePaymentVericlearInDto.getTradeDate());

        String dealId = advancePaymentVericlearInDto.getDealId();

        if (ObjectUtils.isEmpty(dealId)) {
            throw new ServiceException(ErrorCode.INVALID_DEAL_ID);
        }

        TradeConfirmEntity tradeConfirmEntity = validateTradeConfirm(parseDealId(dealId));

        validateTradeDate(tradeDate, tradeConfirmEntity.getMatchDate());

        TradeEntity tradeEntityLast = validateTrade(
                tradeConfirmEntity.getMatchId(),
                tradeConfirmEntity.getMatchDate()
        );

        validateTradeReadyForAdvance(tradeEntityLast,advancePaymentVericlearInDto);
        StatusUpdateTradeInDto statusUpdateTradeInDto = StatusUpdateTradeInDto.builder()
                .code(BusinessRuleEnum.RULE_OPERATION_PREPAYMENT)
                .tradeId(tradeEntityLast.getId())
                .sideId("1")
                .build();

        StatusUpdateTradeOutDto statusUpdateTradeOutDto = operationBusinessRuleClient
                .validateUpdateStatusTrade(statusUpdateTradeInDto);

        if (!statusUpdateTradeOutDto.getIsValid()) {
            log.warn("Trade cannot be advanced because STATUS is not ASSIGN. tradeId: {}",
                    tradeEntityLast.getId());
            return;
        }

        if (isSameAdvanceAlreadyApplied(tradeEntityLast,settlementDate)) {
            return;
        }

        validateAdvanceDateRule(tradeEntityLast, settlementDate);

        TradeEntity tradeEntity = buildAdvancedTrade(tradeEntityLast, settlementDate);

        TradeEntity tradeEntitySaved = tradeRepository.save(tradeEntity);


        log.info("Trade updated, tradeId: {}", tradeEntitySaved.getId());

        this.sendNotification();
        log.info("End method updateOperation");
    }


    private TradeEntity validateTrade(Long matchId, LocalDate matchDate) {
        return tradeRepository.findFirstByMatchIdAndMatchDateOrderByIdDesc(matchId,matchDate)
                .orElseThrow(() -> {
                    log.warn("Trade not found for advance. matchId: {} - matchDate: {}",matchId,matchDate);
                    return new ServiceException(ErrorCode.TRADE_NOT_FOUND);
                });
    }

    private boolean canAdvanceTrade(TradeEntity tradeEntity) {
        boolean buyAccepted = tradeEntity.getBuyStatus() != null
                && StatusEnum.ACCEPTED.getId().equals(tradeEntity.getBuyStatus().getId());

        boolean sellAccepted = tradeEntity.getSellStatus() != null
                && StatusEnum.ACCEPTED.getId().equals(tradeEntity.getSellStatus().getId());

        log.info("Advance validation for tradeId: {} - buyStatusId: {} - sellStatusId: {} - buyAccepted: {} - sellAccepted: {}",
                tradeEntity.getId(),
                tradeEntity.getBuyStatus() != null ? tradeEntity.getBuyStatus().getId() : null,
                tradeEntity.getSellStatus() != null ? tradeEntity.getSellStatus().getId() : null,
                buyAccepted,
                sellAccepted);

        return buyAccepted && sellAccepted;
    }

    private boolean isAlreadyAdvanced(TradeEntity tradeEntity) {
        return Boolean.TRUE.equals(tradeEntity.getResettlementIndicatorAdvance());
    }

    private OffsetDateTime resolveClearingDateOld(TradeEntity tradeEntity) {
        if (tradeEntity.getClearingDateOld() != null) {
            return tradeEntity.getClearingDateOld();
        }

        return tradeEntity.getClearingDate()
                .atStartOfDay()
                .atOffset(java.time.ZoneOffset.of("-05:00"));
    }

    private void validateAdvanceDateRule(TradeEntity tradeEntity, LocalDate newSettlementDate) {
        LocalDate matchDate = tradeEntity.getMatchDate();
        LocalDate clearingDate = tradeEntity.getClearingDate();

        if (matchDate == null || clearingDate == null || newSettlementDate == null) {
            log.error("Invalid advance date. Required dates are missing. tradeId: {} - matchDate: {} - clearingDate: {} - newSettlementDate: {}",
                    tradeEntity.getId(), matchDate, clearingDate, newSettlementDate);
            throw new ServiceException(ErrorCode.INVALID_DATE);
        }

        boolean isBeforeMatchDate = newSettlementDate.isBefore(matchDate);
        boolean isAfterClearingDate = newSettlementDate.isAfter(clearingDate);

        if (isBeforeMatchDate || isAfterClearingDate) {
            log.warn("Invalid advance date. settlementDate must be between matchDate and clearingDate. tradeId: {} - matchDate: {} - clearingDate: {} - receivedSettlementDate: {}",
                    tradeEntity.getId(), matchDate, clearingDate, newSettlementDate);
            throw new ServiceException(ErrorCode.INVALID_ADVANCE_DATE);
        }

        log.info("Advance date rule valid. tradeId: {} - matchDate: {} - clearingDate: {} - receivedSettlementDate: {}",
                tradeEntity.getId(), matchDate, clearingDate, newSettlementDate);
    }

    private boolean isRepoTrade(TradeEntity tradeEntity) {
        return tradeEntity.getType() != null
                && OperationTypeEnum.REPO.getId().equals(tradeEntity.getType().getDescription());
    }

    private TradeEntity buildAdvancedTrade(TradeEntity tradeEntityLast, LocalDate settlementDate) {
        boolean isContado = tradeEntityLast.getType() != null
                && OperationTypeEnum.CONTADO.getId().equals(tradeEntityLast.getType().getDescription());

        boolean isRepo = tradeEntityLast.getType() != null
                && OperationTypeEnum.REPO.getId().equals(tradeEntityLast.getType().getDescription());

        TradeEntity.TradeEntityBuilder tradeBuilder = tradeEntityLast.toBuilder()
                .resettlementIndicatorAdvance(true)
                .clearingDateOld(resolveClearingDateOld(tradeEntityLast))
                .clearingDate(isContado ? settlementDate : null)
                .returnClearingDate(isRepo ? settlementDate : null)
                .daysToSettlement(isRepo
                        ? calculateCalendarDays(tradeEntityLast.getClearingDate(), settlementDate)
                        : calculateBusinessDays(tradeEntityLast.getMatchDate(), settlementDate, tradeEntityLast.getCountry().getId()))
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyIp(PropertiesContext.getClientIp())
                .lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyDate(ApplicationUtils.getOffsetDateTimeNow());

        if (isRepoTrade(tradeEntityLast)) {
            tradeBuilder.returnClearingDate(settlementDate);
        } else {
            tradeBuilder.clearingDate(settlementDate);
        }

        return tradeBuilder.build();
    }

    private void sendNotification() {
        NotificationOutDto notificationOutDto = NotificationOutDto.builder()
                .eventType(NotificationEnum.NOTIFICATION_SILENT.getValue())
                .userIds(List.of())
                .module("DEFAULT")
                .profiles(List.of())
                .typeNotification(NotificationTypeEnum.INFORMATIVE.getDescription())
                .metadata(ApplicationUtils.convertObjectToJsonNode(MetaDataOutDto.builder()
                        .code(ScreenEnum.OPERATION_MANAGEMENT.getCode())
                        .action("reload")
                        .build()))
                .timestamp(ApplicationUtils.convertLocalDateTimeToString(PropertiesContext.getClientDatetime()))
                .screenCode(ScreenEnum.OPERATION_MANAGEMENT.getCode())
                .build();

        kafkaNuboAdapter.sendNotifications(notificationOutDto);
        log.info("Notification sent successfully");
    }

    private LocalDate buildLocalDate(DateDto dateDto) {
        if (dateDto == null
                || dateDto.getYear() == null
                || dateDto.getMonth() == null
                || dateDto.getDay() == null) {
            throw new ServiceException(ErrorCode.INVALID_DATE);
        }

        return LocalDate.of(dateDto.getYear(), dateDto.getMonth(), dateDto.getDay());
    }

    private Long parseDealId(String dealId) {
        try {
            return Long.valueOf(dealId);
        } catch (NumberFormatException exception) {
            throw new ServiceException(ErrorCode.INVALID_DEAL_ID);
        }
    }

    private TradeConfirmEntity validateTradeConfirm(Long dealId) {
        return tradeConfirmRepository.findFirstByDealIdOrderByIdDesc(dealId)
                .orElseThrow(() -> new ServiceException(ErrorCode.TRADE_CONFIRM_NOT_FOUND));
    }

    private void validateTradeDate(LocalDate tradeDate, LocalDate tradeConfirmMatchDate) {
        if (!tradeDate.equals(tradeConfirmMatchDate)) {
            log.warn("Business date does not match TRADE_CONFIRM matchDate. tradeDate[message]: {} - tradeConfirmMatchDate: {}",
                    tradeDate, tradeConfirmMatchDate);
            throw new ServiceException(ErrorCode.INVALID_TRADE_DATE);
        }
    }

    private Long calculateBusinessDays(LocalDate startDate, LocalDate endDate, Long countryId) {
        if (startDate == null || endDate == null) {
            return 0L;
        }
        if (startDate.equals(endDate)) {
            return 0L;
        }

        LocalDate minDate;
        LocalDate maxDate;
        int direction;
        if (endDate.isAfter(startDate)) {
            minDate = startDate;
            maxDate = endDate;
            direction = 1;
        } else {
            minDate = endDate;
            maxDate = startDate;
            direction = -1;
        }

        Set<LocalDate> holidaySet = new HashSet<>(
                batchCacheService.findHolidayDatesInRange(countryId, minDate.plusDays(1), maxDate));
        long businessDaysCount = minDate.plusDays(1)
                .datesUntil(maxDate.plusDays(1))
                .filter(date -> isBusinessDay(date, holidaySet))
                .count();

        return businessDaysCount * direction;
    }

    private boolean isBusinessDay(LocalDate date, Set<LocalDate> holidays) {
        DayOfWeek dow = date.getDayOfWeek();
        boolean weekend = (dow == DayOfWeek.SATURDAY || dow == DayOfWeek.SUNDAY);
        if (weekend)
            return false;
        return !holidays.contains(date);
    }

    private Long calculateCalendarDays(LocalDate startDate, LocalDate endDate) {
        if (startDate == null || endDate == null) {
            return 0L;
        }
        if (startDate.equals(endDate)) {
            return 0L;
        }
        long calendarDays = endDate.toEpochDay() - startDate.toEpochDay();
        return calendarDays;
    }

    private void validateTradeReadyForAdvance(
            TradeEntity tradeEntity,
            AdvancePaymentVericlearInDto input) {

        Long buyStatusId = tradeEntity.getBuyStatus() != null
                ? tradeEntity.getBuyStatus().getId()
                : null;

        Long sellStatusId = tradeEntity.getSellStatus() != null
                ? tradeEntity.getSellStatus().getId()
                : null;

        boolean buyAccepted = StatusEnum.ACCEPTED.getId().equals(buyStatusId);
        boolean sellAccepted = StatusEnum.ACCEPTED.getId().equals(sellStatusId);

        if (!buyAccepted || !sellAccepted) {
            log.warn(
                    "Advance rejected because trade is not ready. " +
                            "instructionId: {} - dealId: {} - tradeId: {} - matchId: {} - " +
                            "buyStatusId: {} - sellStatusId: {} - settlementDate: {}",
                    input.getInstructionId(),
                    input.getDealId(),
                    tradeEntity.getId(),
                    tradeEntity.getMatchId(),
                    buyStatusId,
                    sellStatusId,
                    input.getSettlementDate());

            throw new ServiceException(ErrorCode.TRADE_NOT_READY_FOR_ADVANCE);
        }
    }

    private boolean isSameAdvanceAlreadyApplied(
            TradeEntity tradeEntity,
            LocalDate settlementDate) {

        if (!Boolean.TRUE.equals(
                tradeEntity.getResettlementIndicatorAdvance())) {
            return false;
        }

        LocalDate currentSettlementDate = isRepoTrade(tradeEntity)
                ? tradeEntity.getReturnClearingDate()
                : tradeEntity.getClearingDate();

        if (settlementDate.equals(currentSettlementDate)) {
            log.info(
                    "Advance already applied. tradeId: {} - matchId: {} - settlementDate: {}",
                    tradeEntity.getId(),
                    tradeEntity.getMatchId(),
                    settlementDate);

            return true;
        }

        log.error(
                "Inconsistent advance detected. tradeId: {} - matchId: {} - " +
                        "advanceIndicator: true - persistedSettlementDate: {} - requestedSettlementDate: {}",
                tradeEntity.getId(),
                tradeEntity.getMatchId(),
                currentSettlementDate,
                settlementDate);

        throw new ServiceException(
                ErrorCode.INCONSISTENT_ADVANCE_STATE);
    }
}

```
