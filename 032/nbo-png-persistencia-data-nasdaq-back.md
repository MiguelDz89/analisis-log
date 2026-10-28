# nbo-png-persistencia-data-nasdaq-back

Código fuente de producción y configuraciones. Captura local: 28/10/2026.

Incluye 94 archivos Java y 16 archivos de configuración, recursos y compilación/despliegue.

Cada sección identifica la ruta original y contiene el archivo completo, salvo valores de credenciales ocultados. Los Java conservan sus implementaciones, imports, anotaciones y comentarios. Se excluyen src/test, resultados de compilación, binarios y herramientas/perfiles de pruebas de rendimiento.

Incluye src/main, descriptor Maven, wrapper y archivos auxiliares de configuración disponibles.

Valores de credenciales ocultados en configuraciones: 0. Referencias a variables de entorno conservadas.

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
17. `src/main/java/com/nubo/persistence/data/nasdaq/PersistenceDataNasdaqApplication.java`
18. `src/main/java/com/nubo/persistence/data/nasdaq/application/config/CacheConfig.java`
19. `src/main/java/com/nubo/persistence/data/nasdaq/application/config/KafkaConsumerConfig.java`
20. `src/main/java/com/nubo/persistence/data/nasdaq/application/config/KafkaProducerConfig.java`
21. `src/main/java/com/nubo/persistence/data/nasdaq/application/context/GlobalContext.java`
22. `src/main/java/com/nubo/persistence/data/nasdaq/application/database/NamingStrategyConfig.java`
23. `src/main/java/com/nubo/persistence/data/nasdaq/application/database/UpperNamingConfig.java`
24. `src/main/java/com/nubo/persistence/data/nasdaq/application/properties/PropertiesConfig.java`
25. `src/main/java/com/nubo/persistence/data/nasdaq/application/properties/PropertiesContext.java`
26. `src/main/java/com/nubo/persistence/data/nasdaq/application/util/ApplicationUtils.java`
27. `src/main/java/com/nubo/persistence/data/nasdaq/application/util/ValidatorUtil.java`
28. `src/main/java/com/nubo/persistence/data/nasdaq/exception/ServiceException.java`
29. `src/main/java/com/nubo/persistence/data/nasdaq/exception/error/ErrorCode.java`
30. `src/main/java/com/nubo/persistence/data/nasdaq/exception/error/ErrorResponse.java`
31. `src/main/java/com/nubo/persistence/data/nasdaq/exception/error/ErrorValidation.java`
32. `src/main/java/com/nubo/persistence/data/nasdaq/exception/kafka/KafkaErrorBuild.java`
33. `src/main/java/com/nubo/persistence/data/nasdaq/helpers/CacheWarmer.java`
34. `src/main/java/com/nubo/persistence/data/nasdaq/kafka/consumer/KafkaNuboAdapter.java`
35. `src/main/java/com/nubo/persistence/data/nasdaq/kafka/producer/KafkaNuboProducerAdapter.java`
36. `src/main/java/com/nubo/persistence/data/nasdaq/models/domain/NasdaqMessage.java`
37. `src/main/java/com/nubo/persistence/data/nasdaq/models/dto/request/BuyerSideDto.java`
38. `src/main/java/com/nubo/persistence/data/nasdaq/models/dto/request/InstrumentDto.java`
39. `src/main/java/com/nubo/persistence/data/nasdaq/models/dto/request/NasdaqInDto.java`
40. `src/main/java/com/nubo/persistence/data/nasdaq/models/dto/request/PartyDto.java`
41. `src/main/java/com/nubo/persistence/data/nasdaq/models/dto/request/RepoAttributeDto.java`
42. `src/main/java/com/nubo/persistence/data/nasdaq/models/dto/request/SellerSideDto.java`
43. `src/main/java/com/nubo/persistence/data/nasdaq/models/dto/response/AutomaticAssignmentOutDto.java`
44. `src/main/java/com/nubo/persistence/data/nasdaq/models/dto/response/ErrorNasdaqOutDto.java`
45. `src/main/java/com/nubo/persistence/data/nasdaq/models/dto/response/MetaDataOutDto.java`
46. `src/main/java/com/nubo/persistence/data/nasdaq/models/dto/response/NotificationOutDto.java`
47. `src/main/java/com/nubo/persistence/data/nasdaq/models/entity/CityEntity.java`
48. `src/main/java/com/nubo/persistence/data/nasdaq/models/entity/CountryEntity.java`
49. `src/main/java/com/nubo/persistence/data/nasdaq/models/entity/CurrencyEntity.java`
50. `src/main/java/com/nubo/persistence/data/nasdaq/models/entity/DepartmentEntity.java`
51. `src/main/java/com/nubo/persistence/data/nasdaq/models/entity/DepositoryEntity.java`
52. `src/main/java/com/nubo/persistence/data/nasdaq/models/entity/DepositoryMappingEntity.java`
53. `src/main/java/com/nubo/persistence/data/nasdaq/models/entity/GicsEntity.java`
54. `src/main/java/com/nubo/persistence/data/nasdaq/models/entity/HolidayEntity.java`
55. `src/main/java/com/nubo/persistence/data/nasdaq/models/entity/IdentificationTypeEntity.java`
56. `src/main/java/com/nubo/persistence/data/nasdaq/models/entity/InvestorAccountEntity.java`
57. `src/main/java/com/nubo/persistence/data/nasdaq/models/entity/InvestorEntity.java`
58. `src/main/java/com/nubo/persistence/data/nasdaq/models/entity/MarketEntity.java`
59. `src/main/java/com/nubo/persistence/data/nasdaq/models/entity/MarketMappingEntity.java`
60. `src/main/java/com/nubo/persistence/data/nasdaq/models/entity/ParticipantAccountEntity.java`
61. `src/main/java/com/nubo/persistence/data/nasdaq/models/entity/ParticipantEntity.java`
62. `src/main/java/com/nubo/persistence/data/nasdaq/models/entity/SecurityTitleEntity.java`
63. `src/main/java/com/nubo/persistence/data/nasdaq/models/entity/SettlementEntity.java`
64. `src/main/java/com/nubo/persistence/data/nasdaq/models/entity/SettlementKey.java`
65. `src/main/java/com/nubo/persistence/data/nasdaq/models/entity/SideEntity.java`
66. `src/main/java/com/nubo/persistence/data/nasdaq/models/entity/StatusEntity.java`
67. `src/main/java/com/nubo/persistence/data/nasdaq/models/entity/StatusMappingEntity.java`
68. `src/main/java/com/nubo/persistence/data/nasdaq/models/entity/TaxStatusEntity.java`
69. `src/main/java/com/nubo/persistence/data/nasdaq/models/entity/TradeEntity.java`
70. `src/main/java/com/nubo/persistence/data/nasdaq/models/entity/TradeEquityEntity.java`
71. `src/main/java/com/nubo/persistence/data/nasdaq/models/entity/TradeStatusHistoryEntity.java`
72. `src/main/java/com/nubo/persistence/data/nasdaq/models/entity/TradeStatusHistoryKey.java`
73. `src/main/java/com/nubo/persistence/data/nasdaq/models/entity/TradingSessionEntity.java`
74. `src/main/java/com/nubo/persistence/data/nasdaq/models/entity/TradingSystemEntity.java`
75. `src/main/java/com/nubo/persistence/data/nasdaq/models/entity/TypeEntity.java`
76. `src/main/java/com/nubo/persistence/data/nasdaq/models/enums/AccountTypeEnum.java`
77. `src/main/java/com/nubo/persistence/data/nasdaq/models/enums/BooleanStatusEnum.java`
78. `src/main/java/com/nubo/persistence/data/nasdaq/models/enums/BusinessTradeAttributeEnum.java`
79. `src/main/java/com/nubo/persistence/data/nasdaq/models/enums/BusinessTypeEnum.java`
80. `src/main/java/com/nubo/persistence/data/nasdaq/models/enums/CountryEnum.java`
81. `src/main/java/com/nubo/persistence/data/nasdaq/models/enums/DepositoryMappingEnum.java`
82. `src/main/java/com/nubo/persistence/data/nasdaq/models/enums/ExternalSystemEnum.java`
83. `src/main/java/com/nubo/persistence/data/nasdaq/models/enums/MarketEnum.java`
84. `src/main/java/com/nubo/persistence/data/nasdaq/models/enums/MarketScopeEnum.java`
85. `src/main/java/com/nubo/persistence/data/nasdaq/models/enums/NotificationEnum.java`
86. `src/main/java/com/nubo/persistence/data/nasdaq/models/enums/OperationTypeEnum.java`
87. `src/main/java/com/nubo/persistence/data/nasdaq/models/enums/PropertiesEnum.java`
88. `src/main/java/com/nubo/persistence/data/nasdaq/models/enums/RepoSupplementaryEnum.java`
89. `src/main/java/com/nubo/persistence/data/nasdaq/models/enums/ScreenEnum.java`
90. `src/main/java/com/nubo/persistence/data/nasdaq/models/enums/StatusEnum.java`
91. `src/main/java/com/nubo/persistence/data/nasdaq/models/enums/VersionApiEnum.java`
92. `src/main/java/com/nubo/persistence/data/nasdaq/repository/CountryRepository.java`
93. `src/main/java/com/nubo/persistence/data/nasdaq/repository/CurrencyRepository.java`
94. `src/main/java/com/nubo/persistence/data/nasdaq/repository/DepositoryMappingRepository.java`
95. `src/main/java/com/nubo/persistence/data/nasdaq/repository/HolidayRepository.java`
96. `src/main/java/com/nubo/persistence/data/nasdaq/repository/MarketMappingRepository.java`
97. `src/main/java/com/nubo/persistence/data/nasdaq/repository/ParticipantRepository.java`
98. `src/main/java/com/nubo/persistence/data/nasdaq/repository/SecurityTitleRepository.java`
99. `src/main/java/com/nubo/persistence/data/nasdaq/repository/StatusMappingRepository.java`
100. `src/main/java/com/nubo/persistence/data/nasdaq/repository/TradeRepository.java`
101. `src/main/java/com/nubo/persistence/data/nasdaq/repository/TradeStatusHistoryRepository.java`
102. `src/main/java/com/nubo/persistence/data/nasdaq/repository/TradingSessionRepository.java`
103. `src/main/java/com/nubo/persistence/data/nasdaq/repository/TradingSystemRepository.java`
104. `src/main/java/com/nubo/persistence/data/nasdaq/repository/TypeRepository.java`
105. `src/main/java/com/nubo/persistence/data/nasdaq/service/BatchCacheService.java`
106. `src/main/java/com/nubo/persistence/data/nasdaq/service/ProcessMessageService.java`
107. `src/main/java/com/nubo/persistence/data/nasdaq/service/TradeTransactionService.java`
108. `src/main/java/com/nubo/persistence/data/nasdaq/service/impl/BatchCacheServiceImpl.java`
109. `src/main/java/com/nubo/persistence/data/nasdaq/service/impl/ProcessMessageServiceImpl.java`
110. `src/main/java/com/nubo/persistence/data/nasdaq/service/impl/TradeTransactionServiceImpl.java`

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
	<groupId>com.nubo.persistence.data.nasdaq</groupId>
	<artifactId>persistence-data-nasdaq</artifactId>
	<version>0.73.0-beta.3</version>
	<name>${project.artifactId}</name>
	<description>Persistence Data Nasdaq</description>

    <properties>
        <java.version>21</java.version>
        <spring.port>8080</spring.port>
        <test.skip>false</test.skip>
        <datasource.url.application.name>ApplicationName=${project.artifactId}</datasource.url.application.name>
        <hikari.pool.name>${project.artifactId}-pool</hikari.pool.name>
        <dynamic.hikari.pool.name>${project.artifactId}-dynamic-pool</dynamic.hikari.pool.name>

        <tomcat.version>11.0.25</tomcat.version>
        <!-- CVE-2026-91777: jackson-databind quadratic forward-reference completion, fixed in 3.1.7 (jackson 3) / 2.21.7 (jackson 2, pulled in transitively) -->
        <jackson-bom.version>3.1.7</jackson-bom.version>
        <jackson-2-bom.version>2.21.7</jackson-2-bom.version>
        <!-- CVE-2026-106451: lz4-java Native.load() usa File.createTempFile de forma insegura, corregido en 1.11.4 -->
        <lz4-java.version>1.11.4</lz4-java.version>
    </properties>

    <dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>at.yawk.lz4</groupId>
                <artifactId>lz4-java</artifactId>
                <version>${lz4-java.version}</version>
            </dependency>
        </dependencies>
    </dependencyManagement>
    <dependencies>
        <!-- Web -->
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

        <!-- Test -->
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
            <version>1.2</version>
        </dependency>

        <!-- Lombok -->
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
            <version>42.7.13</version>
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

        <!-- Cache -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-cache</artifactId>
        </dependency>

        <dependency>
            <groupId>com.github.ben-manes.caffeine</groupId>
            <artifactId>caffeine</artifactId>
        </dependency>

        <!-- Vulnerability adjustment -->
        <dependency>
            <groupId>commons-io</groupId>
            <artifactId>commons-io</artifactId>
            <version>2.18.0</version>
        </dependency>

        <dependency>
            <groupId>at.yawk.lz4</groupId>
            <artifactId>lz4-java</artifactId>
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
                                <exclude>**/PersistenceDataNasdaqApplication.class</exclude>
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
                            <outputDirectory>
                                ${project.build.directory}/jacoco-report
                            </outputDirectory>
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
  datasource:
    username: ${DB_USERNAME}
    password: ${DB_PASSWORD}
    url: ${DB_URL}?@datasource.url.application.name@
    hikari:
      maximum-pool-size: ${DB_HIKARI_MAXIMUM_POOL_SIZE:30}
      minimum-idle: ${DB_HIKARI_MINIMUM_IDLE:15}
      idle-timeout: ${DB_HIKARI_IDLE_TIMEOUT}
      validation-timeout: ${DB_HIKARI_VALIDATION_TIMEOUT}
      max-lifetime: ${DB_HIKARI_MAX_LIFETIME}
      connection-timeout: ${DB_HIKARI_CONNECTION_TIMEOUT}
      leak-detection-threshold: ${DB_HIKARI_LEAK_DETECTION_THRESHOLD}
      connection-test-query: SELECT 1
      pool-name: "@hikari.pool.name@"
      data-source-properties:
        reWriteBatchedInserts: true
  jpa:
    hibernate:
      ddl-auto: none
      default_schema: NUANBODB
    show-sql: "false"
    database-platform: org.hibernate.dialect.PostgreSQLDialect
    properties:
      hibernate:
        jdbc:
          batch_size: 50
        order_inserts: true
        order_updates: true
  kafka:
    consumer:
      enable-auto-commit: false
      max-poll-records: 100
      fetch-max-wait: 1000
      properties:
        isolation.level: read_committed
    listener:
      ack-mode: manual
      type: batch
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
      concurrency: ${KAFKA_NUBO_CONCURRENCY:5}
      max-poll-records: ${KAFKA_NUBO_MAX_POLL_RECORDS_CONFIG:100}
      fetch-max-wait-ms: ${KAFKA_NUBO_FETCH_MAX_WAIT_MS:500}
      topic-name: ${KAFKA_NUBO_TOPIC_NAME_NASDAQ}
      data:
        country: ${KAFKA_NUBO_DATA_COUNTRY:CO}
        prefix-folio: ${KAFKA_NUBO_DATA_PREFIX_FOLIO:true}
    producer:
      topic-name-error: ${KAFKA_NUBO_TOPIC_DTL}
      topic-name-notification-request: ${KAFKA_NUBO_NOTIFICATION_REQUEST_TOPIC}
      topic-name-automatic-assignment: ${KAFKA_NUBO_TOPIC_AUTOMATIC_ASSIGNMENT}
logging:
  config: classpath:log/log4j2.properties
  level:
    com.nubo.persistence.data.nasdaq: INFO
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
      maximum-pool-size: ${DB_HIKARI_MAXIMUM_POOL_SIZE:30}
      minimum-idle: ${DB_HIKARI_MINIMUM_IDLE:15}
      idle-timeout: ${DB_HIKARI_IDLE_TIMEOUT}
      validation-timeout: ${DB_HIKARI_VALIDATION_TIMEOUT}
      max-lifetime: ${DB_HIKARI_MAX_LIFETIME}
      connection-timeout: ${DB_HIKARI_CONNECTION_TIMEOUT}
      leak-detection-threshold: ${DB_HIKARI_LEAK_DETECTION_THRESHOLD}
      connection-test-query: SELECT 1
      pool-name: "@hikari.pool.name@"
      data-source-properties:
        reWriteBatchedInserts: true
  jpa:
    hibernate:
      ddl-auto: none
      default_schema: NUANBODB
    show-sql: "false"
    database-platform: org.hibernate.dialect.PostgreSQLDialect
    properties:
      hibernate:
        jdbc:
          batch_size: 50
        order_inserts: true
        order_updates: true
  kafka:
    consumer:
      enable-auto-commit: false
      max-poll-records: 100
      fetch-min-bytes: 50000
      fetch-max-wait: 1000
      properties:
        isolation.level: read_committed
    listener:
      ack-mode: manual
      type: batch
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
        config: ""
    consumer:
      concurrency: ${KAFKA_NUBO_CONCURRENCY:5}
      max-poll-records: ${KAFKA_NUBO_MAX_POLL_RECORDS_CONFIG:100}
      fetch-max-wait-ms: ${KAFKA_NUBO_FETCH_MAX_WAIT_MS:2000}
      topic-name: ${KAFKA_NUBO_TOPIC_NAME_NASDAQ}
      data:
        country: ${KAFKA_NUBO_DATA_COUNTRY:CO}
        prefix-folio: ${KAFKA_NUBO_DATA_PREFIX_FOLIO:true}
    producer:
      topic-name-error: ${KAFKA_NUBO_TOPIC_DTL}
      topic-name-notification-request: ${KAFKA_NUBO_NOTIFICATION_REQUEST_TOPIC}
      topic-name-automatic-assignment: ${KAFKA_NUBO_TOPIC_AUTOMATIC_ASSIGNMENT}
logging:
  config: classpath:log/log4j2.properties
  level:
    com.nubo.persistence.data.nasdaq: DEBUG
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
      maximum-pool-size: ${DB_HIKARI_MAXIMUM_POOL_SIZE:30}
      minimum-idle: ${DB_HIKARI_MINIMUM_IDLE:15}
      idle-timeout: ${DB_HIKARI_IDLE_TIMEOUT}
      validation-timeout: ${DB_HIKARI_VALIDATION_TIMEOUT}
      max-lifetime: ${DB_HIKARI_MAX_LIFETIME}
      connection-timeout: ${DB_HIKARI_CONNECTION_TIMEOUT}
      leak-detection-threshold: ${DB_HIKARI_LEAK_DETECTION_THRESHOLD}
      connection-test-query: SELECT 1
      pool-name: "@hikari.pool.name@"
      data-source-properties:
        reWriteBatchedInserts: true
  jpa:
    hibernate:
      ddl-auto: none
      default_schema: NUANBODB
    show-sql: "false"
    database-platform: org.hibernate.dialect.PostgreSQLDialect
    properties:
      hibernate:
        jdbc:
          batch_size: 50
        order_inserts: true
        order_updates: true
  kafka:
    consumer:
      enable-auto-commit: false
      max-poll-records: 100
      fetch-max-wait: 1000
      properties:
        isolation.level: read_committed
    listener:
      ack-mode: manual
      type: batch
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
      concurrency: ${KAFKA_NUBO_CONCURRENCY:5}
      max-poll-records: ${KAFKA_NUBO_MAX_POLL_RECORDS_CONFIG:100}
      fetch-max-wait-ms: ${KAFKA_NUBO_FETCH_MAX_WAIT_MS:500}
      topic-name: ${KAFKA_NUBO_TOPIC_NAME_NASDAQ}
      data:
        country: ${KAFKA_NUBO_DATA_COUNTRY:CO}
        prefix-folio: ${KAFKA_NUBO_DATA_PREFIX_FOLIO:true}
    producer:
      topic-name-error: ${KAFKA_NUBO_TOPIC_DTL}
      topic-name-notification-request: ${KAFKA_NUBO_NOTIFICATION_REQUEST_TOPIC}
      topic-name-automatic-assignment: ${KAFKA_NUBO_TOPIC_AUTOMATIC_ASSIGNMENT}
logging:
  config: classpath:log/log4j2-prod.properties
  level:
    com.nubo.persistence.data.nasdaq: INFO
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
      maximum-pool-size: ${DB_HIKARI_MAXIMUM_POOL_SIZE:30}
      minimum-idle: ${DB_HIKARI_MINIMUM_IDLE:15}
      idle-timeout: ${DB_HIKARI_IDLE_TIMEOUT}
      validation-timeout: ${DB_HIKARI_VALIDATION_TIMEOUT}
      max-lifetime: ${DB_HIKARI_MAX_LIFETIME}
      connection-timeout: ${DB_HIKARI_CONNECTION_TIMEOUT}
      leak-detection-threshold: ${DB_HIKARI_LEAK_DETECTION_THRESHOLD}
      connection-test-query: SELECT 1
      pool-name: "@hikari.pool.name@"
      data-source-properties:
        reWriteBatchedInserts: true
  jpa:
    hibernate:
      ddl-auto: none
      default_schema: NUANBODB
    show-sql: "false"
    database-platform: org.hibernate.dialect.PostgreSQLDialect
    properties:
      hibernate:
        jdbc:
          batch_size: 50
        order_inserts: true
        order_updates: true
  kafka:
    consumer:
      enable-auto-commit: false
      max-poll-records: 100
      fetch-max-wait: 1000
      properties:
        isolation.level: read_committed
    listener:
      ack-mode: manual
      type: batch
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
      concurrency: ${KAFKA_NUBO_CONCURRENCY:5}
      max-poll-records: ${KAFKA_NUBO_MAX_POLL_RECORDS_CONFIG:100}
      fetch-max-wait-ms: ${KAFKA_NUBO_FETCH_MAX_WAIT_MS:500}
      topic-name: ${KAFKA_NUBO_TOPIC_NAME_NASDAQ}
      data:
        country: ${KAFKA_NUBO_DATA_COUNTRY:CO}
        prefix-folio: ${KAFKA_NUBO_DATA_PREFIX_FOLIO:true}
    producer:
      topic-name-error: ${KAFKA_NUBO_TOPIC_DTL}
      topic-name-notification-request: ${KAFKA_NUBO_NOTIFICATION_REQUEST_TOPIC}
      topic-name-automatic-assignment: ${KAFKA_NUBO_TOPIC_AUTOMATIC_ASSIGNMENT}
logging:
  config: classpath:log/log4j2.properties
  level:
    com.nubo.persistence.data.nasdaq: INFO
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
      maximum-pool-size: ${DB_HIKARI_MAXIMUM_POOL_SIZE:30}
      minimum-idle: ${DB_HIKARI_MINIMUM_IDLE:15}
      idle-timeout: ${DB_HIKARI_IDLE_TIMEOUT}
      validation-timeout: ${DB_HIKARI_VALIDATION_TIMEOUT}
      max-lifetime: ${DB_HIKARI_MAX_LIFETIME}
      connection-timeout: ${DB_HIKARI_CONNECTION_TIMEOUT}
      leak-detection-threshold: ${DB_HIKARI_LEAK_DETECTION_THRESHOLD}
      connection-test-query: SELECT 1
      pool-name: "@hikari.pool.name@"
      data-source-properties:
        reWriteBatchedInserts: true
  jpa:
    hibernate:
      ddl-auto: none
      default_schema: NUANBODB
    show-sql: "false"
    database-platform: org.hibernate.dialect.PostgreSQLDialect
    properties:
      hibernate:
        jdbc:
          batch_size: 50
        order_inserts: true
        order_updates: true
  kafka:
    consumer:
      enable-auto-commit: false
      max-poll-records: 100
      fetch-max-wait: 1000
      properties:
        isolation.level: read_committed
    listener:
      ack-mode: manual
      type: batch
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
      concurrency: ${KAFKA_NUBO_CONCURRENCY:5}
      max-poll-records: ${KAFKA_NUBO_MAX_POLL_RECORDS_CONFIG:100}
      fetch-max-wait-ms: ${KAFKA_NUBO_FETCH_MAX_WAIT_MS:500}
      topic-name: ${KAFKA_NUBO_TOPIC_NAME_NASDAQ}
      data:
        country: ${KAFKA_NUBO_DATA_COUNTRY:CO}
        prefix-folio: ${KAFKA_NUBO_DATA_PREFIX_FOLIO:true}
    producer:
      topic-name-error: ${KAFKA_NUBO_TOPIC_DTL}
      topic-name-notification-request: ${KAFKA_NUBO_NOTIFICATION_REQUEST_TOPIC}
      topic-name-automatic-assignment: ${KAFKA_NUBO_TOPIC_AUTOMATIC_ASSIGNMENT}
logging:
  config: classpath:log/log4j2.properties
  level:
    com.nubo.persistence.data.nasdaq: INFO
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
    name: "@project.name@"
    type: service
server:
  servlet:
    context-path: /${spring.application.name}
application:
  version: "@project.version@"
  description: 'Documentation Endpoints'
  title: "@project.description@"
  group: ${spring.application.name}
management:
  health:
    probes:
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
,------. ,------.,------.  ,---.  ,--. ,---. ,--------.,------.,--.  ,--. ,-----.,------.,------.    ,---. ,--------. ,---.  ,--.  ,--.  ,---.   ,---.  ,------.    ,---.   ,-----.
|  .--. '|  .---'|  .--. ''   .-' |  |'   .-''--.  .--'|  .---'|  ,'.|  |'  .--./|  .---'|  .-.  \  /  O  \'--.  .--'/  O  \ |  ,'.|  | /  O  \ '   .-' |  .-.  \  /  O  \ '  .-.  '
|  '--' ||  `--, |  '--'.'`.  `-. |  |`.  `-.   |  |   |  `--, |  |' '  ||  |    |  `--, |  |  \  :|  .-.  |  |  |  |  .-.  ||  |' '  ||  .-.  |`.  `-. |  |  \  :|  .-.  ||  | |  |
|  | --' |  `---.|  |\  \ .-'    ||  |.-'    |  |  |   |  `---.|  | `   |'  '--'\|  `---.|  '--'  /|  | |  |  |  |  |  | |  ||  | `   ||  | |  |.-'    ||  '--'  /|  | |  |'  '-'  '-.
`--'     `------'`--' '--'`-----' `--'`-----'   `--'   `------'`--'  `--' `-----'`------'`-------' `--' `--'  `--'  `--' `--'`--'  `--'`--' `--'`-----' `-------' `--' `--' `-----'--'

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

## src/main/java/com/nubo/persistence/data/nasdaq/PersistenceDataNasdaqApplication.java

```java
package com.nubo.persistence.data.nasdaq;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class PersistenceDataNasdaqApplication {

	public static void main(String[] args) {
		SpringApplication.run(PersistenceDataNasdaqApplication.class, args);
	}

}

```

## src/main/java/com/nubo/persistence/data/nasdaq/application/config/CacheConfig.java

```java
package com.nubo.persistence.data.nasdaq.application.config;

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
                buildCache("countries", 1, TimeUnit.HOURS),
                buildCache("currencies", 1, TimeUnit.HOURS),
                buildCache("tradingSystems", 1, TimeUnit.HOURS),
                buildCache("tradingSessions", 1, TimeUnit.HOURS),
                buildCache("types", 1, TimeUnit.HOURS),

                buildCache("participants", 30, TimeUnit.MINUTES),
                buildCache("securities", 30, TimeUnit.MINUTES),
                buildCache("status", 10, TimeUnit.MINUTES),
                buildCache("depositoryMapping", 10, TimeUnit.MINUTES),
                buildCache("markets", 10, TimeUnit.MINUTES),

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

## src/main/java/com/nubo/persistence/data/nasdaq/application/config/KafkaConsumerConfig.java

```java
package com.nubo.persistence.data.nasdaq.application.config;

import java.nio.ByteBuffer;
import java.util.HashMap;
import java.util.Map;

import org.apache.kafka.clients.consumer.ConsumerConfig;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.apache.kafka.common.header.Header;
import org.apache.kafka.common.serialization.StringDeserializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.dao.RecoverableDataAccessException;
import org.springframework.dao.TransientDataAccessException;
import org.springframework.kafka.annotation.EnableKafka;
import org.springframework.kafka.config.ConcurrentKafkaListenerContainerFactory;
import org.springframework.kafka.core.ConsumerFactory;
import org.springframework.kafka.core.DefaultKafkaConsumerFactory;
import org.springframework.kafka.listener.ContainerProperties;
import org.springframework.kafka.listener.DefaultErrorHandler;
import org.springframework.kafka.listener.ListenerExecutionFailedException;
import org.springframework.kafka.support.KafkaHeaders;
import org.springframework.kafka.support.serializer.DeserializationException;
import org.springframework.util.backoff.FixedBackOff;

import com.nubo.persistence.data.nasdaq.application.properties.PropertiesConfig;
import com.nubo.persistence.data.nasdaq.exception.ServiceException;
import com.nubo.persistence.data.nasdaq.exception.error.ErrorCode;
import com.nubo.persistence.data.nasdaq.exception.kafka.KafkaErrorBuild;

import lombok.RequiredArgsConstructor;

@EnableKafka
@Configuration
@RequiredArgsConstructor
public class KafkaConsumerConfig {

    private final Environment environment;
    private final PropertiesConfig propertiesConfig;

    @Bean
    public ConsumerFactory<String, String> consumerFactoryKafkaNuboBatch() {
        Map<String, Object> configProps = new HashMap<>();
        configProps.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, propertiesConfig.getKafkaNuboBootstrapServers());
        configProps.put(ConsumerConfig.GROUP_ID_CONFIG, propertiesConfig.getKafkaNuboGroupId());
        configProps.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);
        configProps.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);
        configProps.put(ConsumerConfig.AUTO_OFFSET_RESET_CONFIG, propertiesConfig.getKafkaNuboAutoOffsetReset());

        configProps.put("security.protocol", propertiesConfig.getKafkaNuboSecurityProtocol());

        if (!isLocalProfile()) {
            configProps.put("sasl.mechanism", propertiesConfig.getKafkaNuboSaslMechanism());
            configProps.put("sasl.jaas.config", propertiesConfig.getKafkaNuboSaslJaasConfig());
        }

        // Config Batch
        configProps.put(ConsumerConfig.ENABLE_AUTO_COMMIT_CONFIG, false);
        configProps.put(ConsumerConfig.MAX_POLL_RECORDS_CONFIG, propertiesConfig.getKafkaNuboConsumerMaxPollRecords());
        configProps.put(ConsumerConfig.FETCH_MIN_BYTES_CONFIG, propertiesConfig.getKafkaNuboConsumerFetchMinBytes());
        configProps.put(ConsumerConfig.FETCH_MAX_WAIT_MS_CONFIG, propertiesConfig.getKafkaNuboConsumerFetchMaxWaitMs());
        configProps.put("isolation.level", "read_committed");

        return new DefaultKafkaConsumerFactory<>(configProps, new StringDeserializer(), new StringDeserializer());
    }

    @Bean
    public ConcurrentKafkaListenerContainerFactory<String, String> kafkaNuboBatchContainerFactory(
            DefaultErrorHandler errorHandler) {
        ConcurrentKafkaListenerContainerFactory<String, String> factory = new ConcurrentKafkaListenerContainerFactory<>();
        factory.setConsumerFactory(consumerFactoryKafkaNuboBatch());
        factory.setCommonErrorHandler(errorHandler);
        factory.getContainerProperties().setDeliveryAttemptHeader(true);

        factory.setBatchListener(true);
        factory.getContainerProperties().setAckMode(ContainerProperties.AckMode.BATCH);
        factory.setConcurrency(propertiesConfig.getKafkaNuboConsumerConcurrency());

        return factory;
    }

    @Bean
    public DefaultErrorHandler kafkaErrorHandler(KafkaErrorBuild kafkaErrorBuilder) {
        FixedBackOff backOff = new FixedBackOff(1000L, 3L);

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

                    // Si es error transitorio (BD caída, timeout), NO hacer commit → re-lanzar
                    if (isTransientException(exception)) {
                        kafkaErrorBuilder.buildError((Exception) exception, errorCode, record.offset(),
                                record.topic(), deliveryAttempt);
                        throw new RuntimeException("Transient error exhausted retries, will not commit offset",
                                exception);
                    }

                    // Error de datos permanente → log + DLT, commit y continuar
                    kafkaErrorBuilder.buildError((Exception) exception, errorCode, record.offset(), record.topic(),
                            deliveryAttempt);
                },
                backOff);

        // Errores permanentes de datos: NO reintentar, directo al recovery (DLT)
        errorHandler.addNotRetryableExceptions(DeserializationException.class);
        errorHandler.addNotRetryableExceptions(ServiceException.class);

        // Solo commit para errores permanentes que llegan al recovery
        errorHandler.setCommitRecovered(true);
        errorHandler.setAckAfterHandle(true);

        return errorHandler;
    }

    private boolean isTransientException(Throwable exception) {
        Throwable cause = exception;
        while (cause != null) {
            if (cause instanceof TransientDataAccessException
                    || cause instanceof RecoverableDataAccessException
                    || cause instanceof java.net.ConnectException
                    || cause instanceof java.sql.SQLTransientConnectionException) {
                return true;
            }
            cause = cause.getCause();
        }
        return false;
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

## src/main/java/com/nubo/persistence/data/nasdaq/application/config/KafkaProducerConfig.java

```java
package com.nubo.persistence.data.nasdaq.application.config;

import com.nubo.persistence.data.nasdaq.application.properties.PropertiesConfig;
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

    @Bean
    public ProducerFactory<String, String> producerFactoryKafkaNubo() {
        Map<String, Object> configProps = new HashMap<>();
        configProps.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, propertiesConfig.getKafkaNuboBootstrapServers());
        configProps.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class);
        configProps.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, StringSerializer.class);
        configProps.put("security.protocol", propertiesConfig.getKafkaNuboSecurityProtocol());

        configProps.put("sasl.mechanism", propertiesConfig.getKafkaNuboSaslMechanism());
        configProps.put("sasl.jaas.config",propertiesConfig.getKafkaNuboSaslJaasConfig());

        return new DefaultKafkaProducerFactory<>(configProps);
    }

    @Bean
    public KafkaTemplate<String, String> kafkaNuboTemplate() {
        return new KafkaTemplate<>(producerFactoryKafkaNubo());
    }
}

```

## src/main/java/com/nubo/persistence/data/nasdaq/application/context/GlobalContext.java

```java
package com.nubo.persistence.data.nasdaq.application.context;

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

    public static Map<String, String> getContextSnapshot() {
        return new HashMap<>(context.get());
    }

    public static void restoreContext(Map<String, String> snapshot) {
        context.get().clear();
        if (snapshot != null) {
            context.get().putAll(snapshot);
        }
    }

    public static void remove() {
        context.remove();
    }

}

```

## src/main/java/com/nubo/persistence/data/nasdaq/application/database/NamingStrategyConfig.java

```java
package com.nubo.persistence.data.nasdaq.application.database;

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

## src/main/java/com/nubo/persistence/data/nasdaq/application/database/UpperNamingConfig.java

```java
package com.nubo.persistence.data.nasdaq.application.database;

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
        if (identifier.isQuoted()) {
            return identifier;
        }
        return new Identifier(identifier.getText().toUpperCase(), identifier.isQuoted());
    }

}

```

## src/main/java/com/nubo/persistence/data/nasdaq/application/properties/PropertiesConfig.java

```java
package com.nubo.persistence.data.nasdaq.application.properties;

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

    @Value("${kafka.nubo.consumer.max-poll-records}")
    private String kafkaNuboConsumerMaxPollRecords;

    @Value("${kafka.nubo.consumer.fetch-max-wait-ms}")
    private String kafkaNuboConsumerFetchMaxWaitMs;

    @Value("${kafka.nubo.consumer.fetch-min-bytes:1024}")
    private Integer kafkaNuboConsumerFetchMinBytes;

    @Value("${kafka.nubo.consumer.concurrency}")
    private Integer kafkaNuboConsumerConcurrency;

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

    @Value("${kafka.nubo.producer.topic-name-error}")
    private String kafkaNuboProducerTopicNameError;

    @Value("${kafka.nubo.producer.topic-name-notification-request}")
    private String kafkaNuboProducerTopicNameNotifications;

    @Value("${kafka.nubo.producer.topic-name-automatic-assignment}")
    private String kafkaNuboProducerTopicNameAutomaticAssignment;

    @Value("${kafka.nubo.consumer.data.country}")
    private String kafkaNuboDataCountry;

    @Value("${kafka.nubo.consumer.data.prefix-folio}")
    private Boolean kafkaNuboDataPrefixFolio;

}

```

## src/main/java/com/nubo/persistence/data/nasdaq/application/properties/PropertiesContext.java

```java
package com.nubo.persistence.data.nasdaq.application.properties;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import com.nubo.persistence.data.nasdaq.application.context.GlobalContext;
import com.nubo.persistence.data.nasdaq.application.util.ApplicationUtils;
import com.nubo.persistence.data.nasdaq.models.enums.PropertiesEnum;

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

## src/main/java/com/nubo/persistence/data/nasdaq/application/util/ApplicationUtils.java

```java
package com.nubo.persistence.data.nasdaq.application.util;

import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Component;
import lombok.RequiredArgsConstructor;

import com.nubo.persistence.data.nasdaq.exception.ServiceException;
import com.nubo.persistence.data.nasdaq.exception.error.ErrorCode;
import jakarta.validation.constraints.NotNull;
import tools.jackson.core.JacksonException;
import tools.jackson.databind.JsonNode;
import tools.jackson.databind.ObjectMapper;

import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.OffsetDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;

@Component
@RequiredArgsConstructor
public class ApplicationUtils {

    private final ObjectMapper objectMapper;

    private static ObjectMapper MAPPER;
    private static ZoneId SERVER_ZONE_ID;

    private static final String FORMAT_DATETIME = "yyyy-MM-dd'T'HH:mm:ss";

    @PostConstruct
    private void init() {
        MAPPER = this.objectMapper;
        SERVER_ZONE_ID = ZoneId.systemDefault();
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

    public static LocalDateTime convertStringToLocalDateTime(String timeString) {
        return LocalDateTime.parse(timeString, DateTimeFormatter.ofPattern(FORMAT_DATETIME));
    }

    public static String convertObjectToJson(Object object) {
        try {
            return MAPPER.writeValueAsString(object);
        } catch (JacksonException e) {
            throw new ServiceException(ErrorCode.ERROR_SERIALIZER_JSON, e);
        }
    }

    public static <T> T convertJsonToObject(String json, Class<T> clazz) {
        try {
            return MAPPER.readValue(json, clazz);
        } catch (JacksonException e) {
            throw new ServiceException(ErrorCode.ERROR_DESERIALIZER_JSON, e);
        }
    }

    public static LocalDate convertTimestampToLocalDate(@NotNull Long timestamp) {
        long millis;
        if (timestamp > 1000000000000000L) {
            millis = timestamp / 1000000L;
        } else if (timestamp > 1000000000000L) {
            millis = timestamp;
        } else {
            millis = timestamp * 1000L;
        }
        return Instant.ofEpochMilli(millis)
                .atZone(SERVER_ZONE_ID)
                .toLocalDate();
    }

    public static JsonNode convertObjectToJsonNode(Object object) {
        return MAPPER.valueToTree(object);
    }
}

```

## src/main/java/com/nubo/persistence/data/nasdaq/application/util/ValidatorUtil.java

```java
package com.nubo.persistence.data.nasdaq.application.util;

import java.util.Set;

import org.springframework.stereotype.Component;

import com.nubo.persistence.data.nasdaq.exception.ServiceException;
import com.nubo.persistence.data.nasdaq.exception.error.ErrorCode;

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

## src/main/java/com/nubo/persistence/data/nasdaq/exception/ServiceException.java

```java
package com.nubo.persistence.data.nasdaq.exception;

import org.springframework.http.HttpStatus;

import com.nubo.persistence.data.nasdaq.exception.error.ErrorCode;
import lombok.Getter;

@Getter
public class ServiceException extends RuntimeException {

    private final ErrorCode errorCode;
    private final HttpStatus httpStatus;

    public ServiceException(ErrorCode errorCode) {
        super(errorCode.getMessage());
        this.errorCode = errorCode;
        this.httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
    }

    public ServiceException(ErrorCode errorCode, Throwable throwable) {
        super(errorCode.getMessage(), throwable);
        this.errorCode = errorCode;
        this.httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
    }

    public ServiceException(ErrorCode errorCode, String message) {
        super(errorCode.getMessage(), new Throwable(message));
        this.errorCode = errorCode;
        this.httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
    }

    public ServiceException(ErrorCode errorCode, HttpStatus httpStatus) {
        super(errorCode.getMessage());
        this.errorCode = errorCode;
        this.httpStatus = httpStatus;
    }

}

```

## src/main/java/com/nubo/persistence/data/nasdaq/exception/error/ErrorCode.java

```java
package com.nubo.persistence.data.nasdaq.exception.error;

import lombok.Getter;

@Getter
public enum ErrorCode {

    HEADER_CLIENT_IP_REQUIRED("Header client_ip required"),
    HEADER_CLIENT_IP_INVALID("Header client_ip is invalid"),
    HEADER_CLIENT_USER_REQUIRED("Header client_user is required"),
    HEADER_CLIENT_DATETIME_REQUIRED("Header client_datetime is required"),
    HEADER_CLIENT_DATETIME_INVALID("Header client_datetime is invalid"),
    VERSION_API_NOT_FOUND("Version API not found"),
    TYPE_NOT_SUPPORTED("Type not supportes"),
    ERROR_KAFKA_CONSUMER_NUBO("Error Producer Kafka Nubo"),
    COUNTRY_NOT_FOUND("Country Not Found"),
    MARKET_NOT_FOUND("Market Not Found"),
    MARKET_MAPPING_NOT_FOUND("Market Mapping Not Found"),
    SECURITY_TITLE_NOT_FOUND("SecurityTitle Not Found"),
    CURRENCY_NOT_FOUND("Currency Not Found"),
    STATUS_NOT_FOUND("Status Not Found"),
    SYSTEM_NOT_FOUND("System Not Found in Data Base"),
    TRADE_TO_CANCEL("Trade Operation Canceled"),
    TRADING_SESSION_NOT_FOUND("Trading session not fund"),
    TYPE_NOT_FOUND("Type Not Found"),
    PARTICIPANT_NOT_FOUND("Participant Not Found"),
    DEPOSITORY_NOT_FOUND("Depository not found"),
    DEPOSITORY_MAPPING_NOT_FOUND("Depository mapping not found"),
    ERROR_DESERIALIZER_JSON("Error Deserializer Json"),
    ERROR_SERIALIZER_JSON("Error Serializer Json"),
    VALIDATION_ERROR("Validation Error"),
    TRADE_ALREADY_EXISTS("Trade already exists"),
    STATUS_MAPPING_NOT_FOUND("Status Mapping Not Found"),
    ERROR_KAFKA_PRODUCER_NUBO("Error Producer Kafka Nubo"),
    ERROR_VALIDATE_COUNTRY_CODE("Error Validate Country Code");


    private final String message;

    ErrorCode(String message) {
        this.message = message;
    }

    public String getName() {
        return this.name();
    }

}

```

## src/main/java/com/nubo/persistence/data/nasdaq/exception/error/ErrorResponse.java

```java
package com.nubo.persistence.data.nasdaq.exception.error;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

import com.nubo.persistence.data.nasdaq.application.util.ApplicationUtils;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
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

## src/main/java/com/nubo/persistence/data/nasdaq/exception/error/ErrorValidation.java

```java
package com.nubo.persistence.data.nasdaq.exception.error;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.nubo.persistence.data.nasdaq.application.util.ApplicationUtils;

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

## src/main/java/com/nubo/persistence/data/nasdaq/exception/kafka/KafkaErrorBuild.java

```java
package com.nubo.persistence.data.nasdaq.exception.kafka;

import com.nubo.persistence.data.nasdaq.application.properties.PropertiesConfig;
import com.nubo.persistence.data.nasdaq.application.util.ApplicationUtils;
import com.nubo.persistence.data.nasdaq.exception.error.ErrorCode;
import com.nubo.persistence.data.nasdaq.exception.error.ErrorResponse;
import com.nubo.persistence.data.nasdaq.exception.error.ErrorValidation;
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

## src/main/java/com/nubo/persistence/data/nasdaq/helpers/CacheWarmer.java

```java
package com.nubo.persistence.data.nasdaq.helpers;

import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

import com.nubo.persistence.data.nasdaq.repository.CountryRepository;
import com.nubo.persistence.data.nasdaq.repository.CurrencyRepository;
import com.nubo.persistence.data.nasdaq.repository.TradingSessionRepository;
import com.nubo.persistence.data.nasdaq.repository.TradingSystemRepository;
import com.nubo.persistence.data.nasdaq.repository.TypeRepository;
import com.nubo.persistence.data.nasdaq.service.BatchCacheService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Component
@RequiredArgsConstructor
@Slf4j
public class CacheWarmer {

    private final CountryRepository countryRepository;
    private final CurrencyRepository currencyRepository;
    private final TradingSystemRepository tradingSystemRepository;
    private final TradingSessionRepository tradingSessionRepository;
    private final TypeRepository typeRepository;
    private final BatchCacheService batchCacheService;

    @EventListener(ApplicationReadyEvent.class)
    public void preloadCaches() {
        log.info("Starting cache warm-up...");
        long start = System.currentTimeMillis();

        try {
            warmCountries();
            warmCurrencies();
            warmTradingSystems();
            warmTradingSessions();
            warmTypes();
        } catch (Exception e) {
            log.warn("Cache warm-up completed with errors: {}", e.getMessage());
        }

        long elapsed = System.currentTimeMillis() - start;
        log.info("Cache warm-up completed in {}ms", elapsed);
    }

    private void warmCountries() {
        countryRepository.findAll().forEach(country -> {
            try {
                batchCacheService.findCountryEntityByCode(country.getCode());
            } catch (Exception ignored) { }
        });
        log.info("Cache 'countries' warmed");
    }

    private void warmCurrencies() {
        currencyRepository.findAll().forEach(currency -> {
            try {
                batchCacheService.findCurrencyEntityByCode(currency.getCode());
            } catch (Exception ignored) { }
        });
        log.info("Cache 'currencies' warmed");
    }

    private void warmTradingSystems() {
        tradingSystemRepository.findAll().forEach(system -> {
            try {
                batchCacheService.findTradingSystemEntity(system.getDescription());
            } catch (Exception ignored) { }
        });
        log.info("Cache 'tradingSystems' warmed");
    }

    private void warmTradingSessions() {
        tradingSessionRepository.findAll().forEach(session -> {
            try {
                batchCacheService.findTradingSessionEntity(session.getDescription());
            } catch (Exception ignored) { }
        });
        log.info("Cache 'tradingSessions' warmed");
    }

    private void warmTypes() {
        typeRepository.findAll().forEach(type -> {
            try {
                batchCacheService.findTypeEntityById(type.getId());
            } catch (Exception ignored) { }
        });
        log.info("Cache 'types' warmed");
    }

}

```

## src/main/java/com/nubo/persistence/data/nasdaq/kafka/consumer/KafkaNuboAdapter.java

```java
package com.nubo.persistence.data.nasdaq.kafka.consumer;

import java.util.List;
import java.util.UUID;

import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

import com.nubo.persistence.data.nasdaq.application.context.GlobalContext;
import com.nubo.persistence.data.nasdaq.application.util.ApplicationUtils;
import com.nubo.persistence.data.nasdaq.models.domain.NasdaqMessage;
import com.nubo.persistence.data.nasdaq.models.enums.ExternalSystemEnum;
import com.nubo.persistence.data.nasdaq.models.enums.PropertiesEnum;
import com.nubo.persistence.data.nasdaq.service.ProcessMessageService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Component
@RequiredArgsConstructor
@Slf4j
public class KafkaNuboAdapter {

    private final ProcessMessageService processMessageService;

    @KafkaListener(topics = "#{propertiesConfig.kafkaNuboConsumerTopicName}",
            containerFactory = "kafkaNuboBatchContainerFactory")
    public void listenBatch(List<ConsumerRecord<String, String>> records) {
        if (records.isEmpty()) {
            return;
        }
        ConsumerRecord<String, String> firstRecord = records.get(0);
        final String topic = firstRecord.topic();
        final String batchId = UUID.randomUUID().toString();
        log.info("NASDAQ_KAFKA_BATCH_RECEIVED batchId={} topic={} recordCount={}", batchId, topic, records.size());
        log.info("New received Batch -- Topic: {} -- Batch ID: {}", topic, batchId);

        for (int index = 0; index < records.size(); index++) {
            ConsumerRecord<String, String> record = records.get(index);
            log.info("NASDAQ_KAFKA_RECORD_RECEIVED batchId={} index={} topic={} partition={} offset={} key={} timestamp={}",
                    batchId, index, record.topic(), record.partition(), record.offset(), record.key(), record.timestamp());
        }

        this.setProperties();

        List<NasdaqMessage> nasdaqMessageList = records.stream()
                .map(record -> new NasdaqMessage(record.value(), record.partition(), record.offset(), record.key(),
                        record.topic()))
                .toList();

        try {
            processMessageService.sendMassageToDataBase(nasdaqMessageList, batchId);
            log.info("NASDAQ_KAFKA_BATCH_COMPLETED batchId={} topic={} recordCount={} status=SUCCESS",
                    batchId, topic, records.size());
        } catch (RuntimeException ex) {
            log.error("NASDAQ_KAFKA_BATCH_FAILED batchId={} topic={} recordCount={} exceptionType={} message={}",
                    batchId, topic, records.size(), ex.getClass().getName(), ex.getMessage(), ex);
            throw ex;
        }
    }

    private void setProperties() {
        GlobalContext.setProperty(PropertiesEnum.CLIENT_IP.getValue(), "127.0.0.1");
        GlobalContext.setProperty(PropertiesEnum.CLIENT_USER.getValue(), ExternalSystemEnum.MME_RV.getCode());
        GlobalContext.setProperty(PropertiesEnum.CLIENT_DATETIME.getValue(),
                ApplicationUtils.getLocalDateTimeNow());
    }

}

```

## src/main/java/com/nubo/persistence/data/nasdaq/kafka/producer/KafkaNuboProducerAdapter.java

```java
package com.nubo.persistence.data.nasdaq.kafka.producer;

import java.util.concurrent.CompletableFuture;

import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.SendResult;
import org.springframework.stereotype.Service;

import com.nubo.persistence.data.nasdaq.application.properties.PropertiesConfig;
import com.nubo.persistence.data.nasdaq.application.util.ApplicationUtils;
import com.nubo.persistence.data.nasdaq.models.dto.response.AutomaticAssignmentOutDto;
import com.nubo.persistence.data.nasdaq.models.dto.response.ErrorNasdaqOutDto;
import com.nubo.persistence.data.nasdaq.models.dto.response.NotificationOutDto;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class KafkaNuboProducerAdapter {

    private final KafkaTemplate<String, String> kafkaTemplate;
    private final PropertiesConfig propertiesConfig;

    public void sendMessageErrorAsync(String key, ErrorNasdaqOutDto errorNasdaqOutDto) {
        String topicName = propertiesConfig.getKafkaNuboProducerTopicNameError();
        String messageJson = ApplicationUtils.convertObjectToJson(errorNasdaqOutDto);

        CompletableFuture<SendResult<String, String>> future = kafkaTemplate.send(topicName, key, messageJson)
                .toCompletableFuture();

        future.thenAccept(result -> log.debug("Send message -- Topic: {} -- partition: {} -- offset: {} -- json: {} ",
                topicName, result.getRecordMetadata().partition(), result.getRecordMetadata().offset(), messageJson))
                .exceptionally(ex -> {
                    log.error("Error sending message to topic: {} -- json: {}, Exception: {}", topicName, messageJson,
                            ex);
                    return null;
                });
    }

    public void sendNotificationsAsync(String key, NotificationOutDto notificationOutDto) {
        String topic = propertiesConfig.getKafkaNuboProducerTopicNameNotifications();
        String jsonString = ApplicationUtils.convertObjectToJson(notificationOutDto);
        CompletableFuture<SendResult<String, String>> future = kafkaTemplate.send(topic, key, jsonString)
                .toCompletableFuture();

        future.thenAccept(result -> log.debug("Send message -- Topic: {} -- partition: {} -- offset: {} -- json: {} ",
                topic, result.getRecordMetadata().partition(), result.getRecordMetadata().offset(), jsonString))
                .exceptionally(ex -> {
                    log.error("Error sending message to topic: {} -- json: {}, Exception: {}", topic, jsonString, ex);
                    return null;
                });
    }

    public void sendAutomaticAssignmentAsync(String key, AutomaticAssignmentOutDto automaticAssignmentOutDto) {
        String topic = propertiesConfig.getKafkaNuboProducerTopicNameAutomaticAssignment();
        String jsonString = ApplicationUtils.convertObjectToJson(automaticAssignmentOutDto);
        Long tradeId = automaticAssignmentOutDto.getTradeId();
        log.info("NASDAQ_AUTO_ASSIGNMENT_KAFKA_SEND tradeId={} key={} topic={}", tradeId, key, topic);
        CompletableFuture<SendResult<String, String>> future;
        try {
            future = kafkaTemplate.send(topic, key, jsonString).toCompletableFuture();
            log.info("NASDAQ_AUTO_ASSIGNMENT_KAFKA_SEND_ACCEPTED tradeId={} key={} topic={}", tradeId, key, topic);
        } catch (RuntimeException ex) {
            log.error("NASDAQ_AUTO_ASSIGNMENT_KAFKA_FAILED topic={} key={} exceptionType={} message={}",
                    topic, key, ex.getClass().getName(), ex.getMessage(), ex);
            throw ex;
        }

        future.thenAccept(result -> {
            log.info("NASDAQ_AUTO_ASSIGNMENT_KAFKA_SUCCESS topic={} partition={} offset={} key={}",
                    topic, result.getRecordMetadata().partition(), result.getRecordMetadata().offset(), key);
            log.debug("Send message -- Topic: {} -- partition: {} -- offset: {} -- json: {} ",
                    topic, result.getRecordMetadata().partition(), result.getRecordMetadata().offset(), jsonString);
        })
                .exceptionally(ex -> {
                    log.error("NASDAQ_AUTO_ASSIGNMENT_KAFKA_FAILED topic={} key={} exceptionType={} message={}",
                            topic, key, ex.getClass().getName(), ex.getMessage(), ex);
                    return null;
                });
    }

}

```

## src/main/java/com/nubo/persistence/data/nasdaq/models/domain/NasdaqMessage.java

```java
package com.nubo.persistence.data.nasdaq.models.domain;

public record NasdaqMessage(
        String messageJson,
        Integer partition,
        Long offset,
        String key,
        String topic) {
}

```

## src/main/java/com/nubo/persistence/data/nasdaq/models/dto/request/BuyerSideDto.java

```java
package com.nubo.persistence.data.nasdaq.models.dto.request;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class BuyerSideDto {

    private String clOrdId;

    private String cumQty;

    private String leavesQty;

    private String ordQty;

    private String orderId;

    private String orderType;

    @Valid
    private PartyDto party;

    private String price;

    private String side;

    private String status;

    private Long submitterId;

    private Long timeChanged;

    private String timeInForce;

    private Long transactTime;
}

```

## src/main/java/com/nubo/persistence/data/nasdaq/models/dto/request/InstrumentDto.java

```java
package com.nubo.persistence.data.nasdaq.models.dto.request;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.validation.constraints.NotBlank;
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

    private String assetId;

    private String assetTypeDescription;

    private String currencyIssue;

    private String exchange;

    private String isin;

    private Long marketId;

    private String orderBookId;

    private String securityType;

    @NotBlank
    private String symbol;
}

```

## src/main/java/com/nubo/persistence/data/nasdaq/models/dto/request/NasdaqInDto.java

```java
package com.nubo.persistence.data.nasdaq.models.dto.request;

import java.math.BigDecimal;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class NasdaqInDto {

    @Valid
    @NotNull
    private BuyerSideDto buyerSide;

    @Valid
    @NotNull
    private SellerSideDto sellerSide;

    @Valid
    @NotNull
    private InstrumentDto instrument;

    private String conditions;

    private String country;

    private String currency;

    private String exchange;

    private String execType;

    private String market;

    @NotNull
    private Long numericTradeId;

    private BigDecimal price;

    private BigDecimal quantity;

    private Integer combinationGroupId;

    @Valid
    private RepoAttributeDto repoAttribute;

    private String settlementType;

    private String sourceSystem;

    private String sourceSystemExecId;

    private String sourceTradeId;

    private Long tradeDate;

    @NotNull
    private String tradeStatus;

    private String tradeUniqueId;

    private String tradingSession;

    private Long transactTime;

    private Long settlDate;

    private BigDecimal amount;
}

```

## src/main/java/com/nubo/persistence/data/nasdaq/models/dto/request/PartyDto.java

```java
package com.nubo.persistence.data.nasdaq.models.dto.request;
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
public class PartyDto {

    private String clientId;

    private String enteringFirm;

    private String executingFirm;

    private String enteringTrader;

    private String executingTrader;

    private String accountType;

    private String customerInfo;

}

```

## src/main/java/com/nubo/persistence/data/nasdaq/models/dto/request/RepoAttributeDto.java

```java
package com.nubo.persistence.data.nasdaq.models.dto.request;

import java.math.BigDecimal;

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
public class RepoAttributeDto {

    private Integer expirationDate;

    private BigDecimal forwardPrice;

    private BigDecimal initialAmount;

    private String maxRate;

    private String partiallyFill;

    private String prePayment;

    private BigDecimal rate;

    private Integer repoType;

    private BigDecimal returnAmount;

    private Long returnDate;

    private String segment;

}

```

## src/main/java/com/nubo/persistence/data/nasdaq/models/dto/request/SellerSideDto.java

```java
package com.nubo.persistence.data.nasdaq.models.dto.request;
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
public class SellerSideDto {

    private String clOrdId;

    private String cumQty;

    private String leavesQty;

    private String ordQty;

    private String orderId;

    private String orderType;

    private PartyDto party;

    private String price;

    private String side;

    private String status;

    private Long submitterId;

    private Long timeChanged;

    private String timeInForce;

    private Long transactTime;
}
```

## src/main/java/com/nubo/persistence/data/nasdaq/models/dto/response/AutomaticAssignmentOutDto.java

```java
package com.nubo.persistence.data.nasdaq.models.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AutomaticAssignmentOutDto {

    private Long tradeId;

    private String message;

}

```

## src/main/java/com/nubo/persistence/data/nasdaq/models/dto/response/ErrorNasdaqOutDto.java

```java
package com.nubo.persistence.data.nasdaq.models.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ErrorNasdaqOutDto {

    private String errorMessage;

    private Integer partition;

    private Long offset;

    private String topic;

    private String key;

    private String messageNasdaq;

}

```

## src/main/java/com/nubo/persistence/data/nasdaq/models/dto/response/MetaDataOutDto.java

```java
package com.nubo.persistence.data.nasdaq.models.dto.response;

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

## src/main/java/com/nubo/persistence/data/nasdaq/models/dto/response/NotificationOutDto.java

```java
package com.nubo.persistence.data.nasdaq.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import tools.jackson.databind.JsonNode;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
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

    LocalDateTime timestamp;

    String screenCode;
}

```

## src/main/java/com/nubo/persistence/data/nasdaq/models/entity/CityEntity.java

```java
package com.nubo.persistence.data.nasdaq.models.entity;

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

@Getter
@Setter
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

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (!(o instanceof CityEntity))
            return false;
        CityEntity that = (CityEntity) o;
        return id != null && id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/persistence/data/nasdaq/models/entity/CountryEntity.java

```java
package com.nubo.persistence.data.nasdaq.models.entity;

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

## src/main/java/com/nubo/persistence/data/nasdaq/models/entity/CurrencyEntity.java

```java
package com.nubo.persistence.data.nasdaq.models.entity;

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

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (!(o instanceof CurrencyEntity))
            return false;
        CurrencyEntity that = (CurrencyEntity) o;
        return id != null && id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/persistence/data/nasdaq/models/entity/DepartmentEntity.java

```java
package com.nubo.persistence.data.nasdaq.models.entity;

import java.time.LocalDateTime;

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

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (!(o instanceof DepartmentEntity))
            return false;
        DepartmentEntity that = (DepartmentEntity) o;
        return id != null && id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/persistence/data/nasdaq/models/entity/DepositoryEntity.java

```java
package com.nubo.persistence.data.nasdaq.models.entity;

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

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (!(o instanceof DepositoryEntity))
            return false;
        DepositoryEntity that = (DepositoryEntity) o;
        return id != null && id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/persistence/data/nasdaq/models/entity/DepositoryMappingEntity.java

```java
package com.nubo.persistence.data.nasdaq.models.entity;

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

## src/main/java/com/nubo/persistence/data/nasdaq/models/entity/GicsEntity.java

```java
package com.nubo.persistence.data.nasdaq.models.entity;

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

@Getter
@Setter
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

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (!(o instanceof GicsEntity))
            return false;
        GicsEntity that = (GicsEntity) o;
        return id != null && id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/persistence/data/nasdaq/models/entity/HolidayEntity.java

```java
package com.nubo.persistence.data.nasdaq.models.entity;

import java.time.LocalDate;
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

## src/main/java/com/nubo/persistence/data/nasdaq/models/entity/IdentificationTypeEntity.java

```java
package com.nubo.persistence.data.nasdaq.models.entity;

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
@Table(name = "\"IDENTIFICATION_TYPE\"", schema = "\"NUANBODB\"")
public class IdentificationTypeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"IDENTIFICATION_TYPE_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"DESCRIPTION\"", length = 80)
    private String description;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (!(o instanceof IdentificationTypeEntity))
            return false;
        IdentificationTypeEntity that = (IdentificationTypeEntity) o;
        return id != null && id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/persistence/data/nasdaq/models/entity/InvestorAccountEntity.java

```java
package com.nubo.persistence.data.nasdaq.models.entity;

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

@Getter
@Setter
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
        if (!(o instanceof InvestorAccountEntity))
            return false;
        InvestorAccountEntity that = (InvestorAccountEntity) o;
        return id != null && id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/persistence/data/nasdaq/models/entity/InvestorEntity.java

```java
package com.nubo.persistence.data.nasdaq.models.entity;

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

@Getter
@Setter
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

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (!(o instanceof InvestorEntity))
            return false;
        InvestorEntity that = (InvestorEntity) o;
        return id != null && id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/persistence/data/nasdaq/models/entity/MarketEntity.java

```java
package com.nubo.persistence.data.nasdaq.models.entity;


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
@Table(name = "\"MARKET\"", schema = "\"NUANBODB\"")
public class MarketEntity {

    @Id
    @Column(name = "\"MARKET_ID\"", length = 2)
    private String id;

    @Column(name = "\"DESCRIPTION\"", length = 80)
    private String description;

    @Column(name = "\"CATEGORY\"", length = 50)
    private String category;

    @Column(name = "\"CODE\"")
    private String code;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (!(o instanceof MarketEntity))
            return false;
        MarketEntity that = (MarketEntity) o;
        return id != null && id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/persistence/data/nasdaq/models/entity/MarketMappingEntity.java

```java
package com.nubo.persistence.data.nasdaq.models.entity;

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

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"MARKET_MAPPING\"", schema = "\"NUANBODB\"")
public class MarketMappingEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"MARKET_MAPPING_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"EXTERNAL_SYSTEM\"", length = 30, nullable = false)
    private String externalSystem;

    @Column(name = "\"EXTERNAL_CODE\"", length = 20)
    private String externalCode;

    @Column(name = "\"CATEGORY\"", length = 30)
    private String category;

    @Column(name = "\"EXTERNAL_DESCRIPTION\"", length = 255, nullable = false)
    private String externalDescription;

    @ManyToOne
    @JoinColumn(name = "\"MARKET_ID\"", nullable = false)
    private MarketEntity market;

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
        if (!(o instanceof MarketMappingEntity))
            return false;
        MarketMappingEntity that = (MarketMappingEntity) o;
        return id != null && id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/persistence/data/nasdaq/models/entity/ParticipantAccountEntity.java

```java
package com.nubo.persistence.data.nasdaq.models.entity;

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

@Getter
@Setter
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

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (!(o instanceof ParticipantAccountEntity))
            return false;
        ParticipantAccountEntity that = (ParticipantAccountEntity) o;
        return id != null && id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/persistence/data/nasdaq/models/entity/ParticipantEntity.java

```java
package com.nubo.persistence.data.nasdaq.models.entity;

import java.time.LocalDate;
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
    @JoinColumn(name = "\"STATUS_ID\"", nullable = false)
    private StatusEntity status;

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

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (!(o instanceof ParticipantEntity))
            return false;
        ParticipantEntity that = (ParticipantEntity) o;
        return id != null && id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/persistence/data/nasdaq/models/entity/SecurityTitleEntity.java

```java
package com.nubo.persistence.data.nasdaq.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
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
@Table(name = "\"SECURITY_TITLE\"", schema = "\"NUANBODB\"")
public class SecurityTitleEntity {

    @Id
    @Column(name = "\"SECURITY_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"MNEMONIC\"", length = 20, nullable = false)
    private String mnemonic;

    @Column(name = "\"ISIN\"", length = 20, nullable = false)
    private String isin;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"", nullable = false)
    private StatusEntity status;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (!(o instanceof SecurityTitleEntity))
            return false;
        SecurityTitleEntity that = (SecurityTitleEntity) o;
        return id != null && id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/persistence/data/nasdaq/models/entity/SettlementEntity.java

```java
package com.nubo.persistence.data.nasdaq.models.entity;

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

@Getter
@Setter
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
        if (!(o instanceof SettlementEntity))
            return false;
        SettlementEntity that = (SettlementEntity) o;
        return trade != null && trade.getId() != null
                && trade.getId().equals(that.trade != null ? that.trade.getId() : null)
                && fraction != null && fraction.equals(that.fraction)
                && side != null && side.getId() != null
                && side.getId().equals(that.side != null ? that.side.getId() : null);
    }

    @Override
    public int hashCode() {
        int result = trade != null && trade.getId() != null ? trade.getId().hashCode() : 0;
        result = 31 * result + (fraction != null ? fraction.hashCode() : 0);
        result = 31 * result + (side != null && side.getId() != null ? side.getId().hashCode() : 0);
        return result;
    }
}

```

## src/main/java/com/nubo/persistence/data/nasdaq/models/entity/SettlementKey.java

```java
package com.nubo.persistence.data.nasdaq.models.entity;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

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

## src/main/java/com/nubo/persistence/data/nasdaq/models/entity/SideEntity.java

```java
package com.nubo.persistence.data.nasdaq.models.entity;

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

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (!(o instanceof SideEntity))
            return false;
        SideEntity that = (SideEntity) o;
        return id != null && id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/persistence/data/nasdaq/models/entity/StatusEntity.java

```java
package com.nubo.persistence.data.nasdaq.models.entity;

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

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (!(o instanceof StatusEntity))
            return false;
        StatusEntity that = (StatusEntity) o;
        return id != null && id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/persistence/data/nasdaq/models/entity/StatusMappingEntity.java

```java
package com.nubo.persistence.data.nasdaq.models.entity;

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
        if (!(o instanceof StatusMappingEntity))
            return false;
        StatusMappingEntity that = (StatusMappingEntity) o;
        return id != null && id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/persistence/data/nasdaq/models/entity/TaxStatusEntity.java

```java
package com.nubo.persistence.data.nasdaq.models.entity;

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

@Getter
@Setter
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

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (!(o instanceof TaxStatusEntity))
            return false;
        TaxStatusEntity that = (TaxStatusEntity) o;
        return id != null && id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/persistence/data/nasdaq/models/entity/TradeEntity.java

```java
package com.nubo.persistence.data.nasdaq.models.entity;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.OffsetDateTime;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
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
@Table(name = "\"TRADE\"", schema = "\"NUANBODB\"", uniqueConstraints = @UniqueConstraint(columnNames = {
        "\"MATCH_ID\"", "\"MATCH_DATE\"" }))
public class TradeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "trade_seq")
    @SequenceGenerator(name = "trade_seq", schema = "\"NUANBODB\"", sequenceName = "\"TRADE_TRADE_ID_seq\"", allocationSize = 1)
    @Column(name = "\"TRADE_ID\"")
    private Long id;

    @Column(name = "\"MATCH_DATE\"")
    private LocalDate matchDate;

    @Column(name = "\"MATCH_ID\"", precision = 19)
    private Long matchId;

    @Column(name = "\"CLEARING_DATE\"")
    private LocalDate clearingDate;

    @Column(name = "\"RETURN_CLEARING_DATE\"")
    private LocalDate returnClearingDate;

    @ManyToOne
    @JoinColumn(name = "\"COUNTRY_ID\"", nullable = false)
    private CountryEntity country;

    @ManyToOne
    @JoinColumn(name = "\"TYPE_ID\"", nullable = false)
    private TypeEntity type;

    @ManyToOne
    @JoinColumn(name = "\"MARKET_ID\"", nullable = false)
    private MarketEntity market;

    @Column(name = "\"ISSUANCE_MARKET_ID\"", length = 2, nullable = false)
    private String issuanceMarketId;

    @ManyToOne
    @JoinColumn(name = "\"SECURITY_ID\"", nullable = false)
    private SecurityTitleEntity securityTitle;

    @ManyToOne
    @JoinColumn(name = "\"PARTICIPANT_ID_BUY\"", nullable = false)
    private ParticipantEntity participantBuy;

    @ManyToOne
    @JoinColumn(name = "\"PARTICIPANT_ID_SELL\"", nullable = false)
    private ParticipantEntity participantSell;

    @Column(name = "\"CUSTODIAN_ID_BUY\"")
    private Long custodianBuy;

    @Column(name = "\"CUSTODIAN_ID_SELL\"")
    private Long custodianSell;

    @Column(name = "\"ASSIGNMENT_MARK_BUY\"")
    private Boolean assignmentMarkBuy;

    @Column(name = "\"ASSIGNMENT_MARK_SELL\"")
    private Boolean assignmentMarkSell;

    @Column(name = "\"FINAL_ASSIGNMENT_MARK_BUY\"")
    private Boolean finalAssignmentMarkBuy;

    @Column(name = "\"FINAL_ASSIGNMENT_MARK_SELL\"")
    private Boolean finalAssignmentMarkSell;

    @Column(name = "\"FRACTIONAL_MARK_BUY\"")
    private Boolean fractionalMarkBuy;

    @Column(name = "\"FRACTIONAL_MARK_SELL\"")
    private Boolean fractionalMarkSell;

    @Column(name = "\"ADVANCE_STATUS\"")
    private Integer advanceStatus;

    @Column(name = "\"EXIT_INDICATOR_SETTLEMENT\"")
    private Boolean exitIndicatorSettlement;

    @Column(name = "\"CANCELED_STATUS\"")
    private Boolean canceledStatus;

    @Column(name = "\"QUANTITY\"", precision = 16, scale = 4)
    private BigDecimal quantity;

    @Column(name = "\"PRICE\"", precision = 16, scale = 4)
    private BigDecimal price;

    @Column(name = "\"LOCAL_CURRENCY_PRICE\"", precision = 16, scale = 4)
    private BigDecimal localCurrencyPrice;

    @Column(name = "\"VOLUME\"", precision = 16, scale = 4)
    private BigDecimal volume;

    @Column(name = "\"VOLUME_LOCAL_PRICE\"", precision = 16, scale = 4)
    private BigDecimal volumeLocalPrice;

    @Column(name = "\"REPURCHASE_RATE\"", precision = 6, scale = 4)
    private BigDecimal repurchaseRate;

    @Column(name = "\"REPURCHASE_AMOUNT\"", precision = 16, scale = 4)
    private BigDecimal repurchaseAmount;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"", nullable = false)
    private StatusEntity status;

    @ManyToOne
    @JoinColumn(name = "\"SELL_STATUS_ID\"")
    private StatusEntity sellStatus;

    @ManyToOne
    @JoinColumn(name = "\"BUY_STATUS_ID\"")
    private StatusEntity buyStatus;

    @Column(name = "\"MATCH_TIME\"")
    private OffsetDateTime matchTime;

    @Column(name = "\"OWN_POSITION_SELL\"")

    private Boolean ownPositionSell;

    @Column(name = "\"OWN_POSITION_BUY\"")
    private Boolean ownPositionBuy;

    @ManyToOne
    @JoinColumn(name = "\"CURRENCY_ID\"", nullable = false)
    private CurrencyEntity currency;

    @ManyToOne
    @JoinColumn(name = "\"TRADING_SYSTEM_ID\"", nullable = false)
    private TradingSystemEntity tradingSystem;

    @ManyToOne
    @JoinColumn(name = "\"TRADING_SESSION_ID\"", nullable = false)
    private TradingSessionEntity tradingSession;

    @Column(name = "\"REPURCHASE_AGREEMENT_DATE\"")
    private LocalDate repurchaseAgreementDate;

    @Column(name = "\"DAYS_TO_SETTLEMENT\"")
    private Long daysToSettlement;

    @Column(name = "\"REPO_RATE\"", precision = 16, scale = 4)
    private BigDecimal repoRate;

    @Column(name = "\"REPO_AMOUNT\"", precision = 16, scale = 4)
    private BigDecimal repoAmount;

    @Column(name = "\"FUNDING_AMOUNT\"", precision = 16, scale = 4)
    private BigDecimal fundingAmount;

    @Column(name = "\"NET_OUTFLOW_TOTAL\"", precision = 16, scale = 4)
    private BigDecimal netOutFlowTotal;

    @Column(name = "\"OUTFLOW_TURNOVER_VALUE\"", precision = 16, scale = 4)
    private BigDecimal outFlowTurnOverValue;

    @Column(name = "\"TOTAL_NET_RETURN\"", precision = 16, scale = 4)
    private BigDecimal totalNetReturn;

    @Column(name = "\"RETURN_TURNOVER_VALUE\"", precision = 16, scale = 4)
    private BigDecimal returnTurnoverValue;

    @Column(name = "\"DELIVERY_VERSUS_PAYMENT_VALUE\"", precision = 16, scale = 4)
    private BigDecimal deliveryVersusPaymentValue;

    @Column(name = "\"REALLOCATION_INDICATOR\"")
    private Boolean reallocationIndicator;

    @Column(name = "\"BUSINESS_TYPE_ID\"")
    private Long businessType;

    @Column(name = "\"MARKET_TYPE_ID\"", nullable = false)
    private Long marketType;

    @Column(name = "\"ORIGIN_TYPE_ID\"")
    private Long originType;

    @Column(name = "\"SPECIAL_TRADE_ID\"")
    private Long specialTradeId;

    @ManyToOne
    @JoinColumn(name = "\"PAYMENT_TYPE_ID\"")
    private TypeEntity paymentType;

    @ManyToOne
    @JoinColumn(name = "\"SETTLEMENT_TYPE_ID\"")
    private TypeEntity settlementType;

    @ManyToOne
    @JoinColumn(name = "\"CUSTODIAN_STATUS_ID\"")
    private StatusEntity custodianStatus;

    @ManyToOne
    @JoinColumn(name = "\"SETTLEMENT_STATUS_ID\"")
    private StatusEntity settlementStatus;

    @ManyToOne
    @JoinColumn(name = "\"BLOQUING_STATUS_ID\"")
    private StatusEntity bloquingStatus;

    @ManyToOne
    @JoinColumn(name = "\"SOURCE_QUOTE_BUY_TYPE\"")
    private TypeEntity sourceQuoteBuy;

    @ManyToOne
    @JoinColumn(name = "\"SOURCE_QUOTE_SELL_TYPE\"")
    private TypeEntity sourceQuoteSell;

    @Column(name = "\"ENTERING_FIRM_SELL\"")
    private String enteringFirmSell;

    @Column(name = "\"ENTERING_FIRM_BUY\"")
    private String enteringFirmBuy;

    @Column(name = "\"FORWARD_PRICE\"", precision = 12, scale = 6)
    private BigDecimal forwardPrice;

    @ManyToOne
    @JoinColumn(name = "\"DEPOSITORY_ID\"")
    private DepositoryEntity depository;

    @ManyToOne
    @JoinColumn(name = "\"DEPOSITORY_ID_BUY\"")
    private DepositoryEntity depositoryBuy;

    @ManyToOne
    @JoinColumn(name = "\"DEPOSITORY_ID_SELL\"")
    private DepositoryEntity depositorySell;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 250, nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private OffsetDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50, nullable = false)
    private String lastModifyIp;

    @OneToOne(cascade = CascadeType.ALL, mappedBy = "trade")
    private TradeEquityEntity tradeEquity;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (!(o instanceof TradeEntity))
            return false;
        TradeEntity that = (TradeEntity) o;
        return id != null && id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/persistence/data/nasdaq/models/entity/TradeEquityEntity.java

```java
package com.nubo.persistence.data.nasdaq.models.entity;

import java.math.BigDecimal;
import java.time.OffsetDateTime;
import java.util.Objects;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
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
@Table(name = "\"TRADE_EQUITY\"", schema = "\"NUANBODB\"")
public class TradeEquityEntity {

    @Id
    @ManyToOne
    @JoinColumn(name = "\"TRADE_ID\"")
    private TradeEntity trade;

    @Column(name = "\"FOREIGN_BROKER_BUY\"")
    private String foreignBrokerBuy;

    @Column(name = "\"FOREIGN_BROKER_SELL\"")
    private String foreignBrokerSell;

    @Column(name = "\"DIRECT_DEPOSITOR_BUY\"")
    private Integer directDepositorBuy;

    @Column(name = "\"DIRECT_DEPOSITOR_SELL\"")
    private Integer directDepositorSell;

    @Column(name = "\"SOURCE_INDICATOR_BUY\"")
    private Integer sourceIndicatorBuy;

    @Column(name = "\"SOURCE_INDICATOR_SELL\"")
    private Integer sourceIndicatorSell;

    @Column(name = "\"RESPONSIBLE_TRADE_BUY\"")
    private Integer responsibleTradeBuy;

    @Column(name = "\"RESPONSIBLE_TRADE_SELL\"")
    private Integer responsibleTradeSell;

    @Column(name = "\"REFERENCE_BUY\"", length = 30)
    private String referenceBuy;

    @Column(name = "\"REFERENCE_SELL\"", length = 30)
    private String referenceSell;

    @Column(name = "\"ORDER_BOOK_ID\"", precision = 19)
    private BigDecimal orderBookId;

    @Column(name = "\"PREARRANGED_OPERATION\"")
    private Boolean prearrangedOperation;

    @Column(name = "\"AGGRESSIVE_TIP\"")
    private Integer aggressiveTip;

    @Column(name = "\"EXDIVIDEND_PERIOD\"")
    private Boolean exdividendPeriod;

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
        TradeEquityEntity that = (TradeEquityEntity) o;
        return Objects.equals(trade, that.trade);
    }

    @Override
    public int hashCode() {
        return trade != null ? trade.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/persistence/data/nasdaq/models/entity/TradeStatusHistoryEntity.java

```java
package com.nubo.persistence.data.nasdaq.models.entity;

import java.time.OffsetDateTime;

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
    @Column(name = "\"TRADE_ID\"", nullable = false)
    private Long tradeId;

    @Id
    @Column(name = "\"TIME\"", nullable = false)
    private OffsetDateTime time;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"", nullable = false)
    private StatusEntity status;

    @Column(name = "\"DETAIL\"", length = 255)
    private String detail;

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
        if (!(o instanceof TradeStatusHistoryEntity))
            return false;
        TradeStatusHistoryEntity that = (TradeStatusHistoryEntity) o;
        return tradeId != null && tradeId.equals(that.tradeId)
                && time != null && time.equals(that.time);
    }

    @Override
    public int hashCode() {
        int result = tradeId != null ? tradeId.hashCode() : 0;
        result = 31 * result + (time != null ? time.hashCode() : 0);
        return result;
    }
}

```

## src/main/java/com/nubo/persistence/data/nasdaq/models/entity/TradeStatusHistoryKey.java

```java
package com.nubo.persistence.data.nasdaq.models.entity;

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

    private Long tradeId;

    private OffsetDateTime time;

}

```

## src/main/java/com/nubo/persistence/data/nasdaq/models/entity/TradingSessionEntity.java

```java
package com.nubo.persistence.data.nasdaq.models.entity;

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

@Getter
@Setter
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

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (!(o instanceof TradingSessionEntity))
            return false;
        TradingSessionEntity that = (TradingSessionEntity) o;
        return id != null && id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/persistence/data/nasdaq/models/entity/TradingSystemEntity.java

```java
package com.nubo.persistence.data.nasdaq.models.entity;

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

@Getter
@Setter
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

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (!(o instanceof TradingSystemEntity))
            return false;
        TradingSystemEntity that = (TradingSystemEntity) o;
        return id != null && id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/persistence/data/nasdaq/models/entity/TypeEntity.java

```java
package com.nubo.persistence.data.nasdaq.models.entity;

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
        if (!(o instanceof TypeEntity))
            return false;
        TypeEntity that = (TypeEntity) o;
        return id != null && id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/persistence/data/nasdaq/models/enums/AccountTypeEnum.java

```java
package com.nubo.persistence.data.nasdaq.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum AccountTypeEnum {

    THIRD_PARTIES(120L, "I", "Client", "Terceros"),
    OWN_POSITION(121L, "A", "House", "Propia"),
    COLLECTIVE_PORTFOLIO(122L, "G", "Fund", "Carteras");

    private final long id;
    private final String code;
    private final String enLabel;
    private final String esLabel;

    public static AccountTypeEnum fromRaw(String raw) {
        if (raw == null || raw.isBlank()) {
            return THIRD_PARTIES;
        }
        String value = raw.trim();
        String upper = value.toUpperCase();

        return switch (upper) {
            case "I", "CLIENT" -> THIRD_PARTIES;
            case "A", "HOUSE" -> OWN_POSITION;
            case "G", "FUND" -> COLLECTIVE_PORTFOLIO;
            default -> THIRD_PARTIES;
        };
    }
}

```

## src/main/java/com/nubo/persistence/data/nasdaq/models/enums/BooleanStatusEnum.java

```java
package com.nubo.persistence.data.nasdaq.models.enums;

public enum BooleanStatusEnum {
    TRUE(true, 1),
    FALSE(false, 0);

    private final boolean boolValue;
    private final int intValue;

    BooleanStatusEnum(boolean boolValue, int intValue) {
        this.boolValue = boolValue;
        this.intValue = intValue;
    }

    public boolean asBoolean() { return boolValue; }
    public int asInt() { return intValue; }

    public static BooleanStatusEnum fromBoolean(boolean value) {
        return value ? TRUE : FALSE;
    }

    public static BooleanStatusEnum fromInt(Integer code) {
        if (code == null) throw new IllegalArgumentException("code is null");
        return switch (code) {
            case 1 -> TRUE;
            case 0 -> FALSE;
            default -> throw new IllegalArgumentException("Unsupported code: " + code);
        };
    }
}

```

## src/main/java/com/nubo/persistence/data/nasdaq/models/enums/BusinessTradeAttributeEnum.java

```java
package com.nubo.persistence.data.nasdaq.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum BusinessTradeAttributeEnum {

    ADVANCE_STATUS(1L),
    ORIGIN_TYPE_ID(90L),
    MARKET_TYPE_ID(81L);

    private final long id;
}

```

## src/main/java/com/nubo/persistence/data/nasdaq/models/enums/BusinessTypeEnum.java

```java
package com.nubo.persistence.data.nasdaq.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum BusinessTypeEnum {

    NORMAL(70L, "NEGOCIO"),
    REPO_ACCIONES(71L, "NEGOCIO");

    private final long id;
    private final String category;;
}

```

## src/main/java/com/nubo/persistence/data/nasdaq/models/enums/CountryEnum.java

```java
package com.nubo.persistence.data.nasdaq.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum CountryEnum {

    COLOMBIA("CO"),
    PERU("PE"),
    CHILE("CL");

    private final String countryCode;

}

```

## src/main/java/com/nubo/persistence/data/nasdaq/models/enums/DepositoryMappingEnum.java

```java
package com.nubo.persistence.data.nasdaq.models.enums;

import java.util.Arrays;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum DepositoryMappingEnum {

    DEPOSITORY_COLOMBIA(CountryEnum.COLOMBIA, ExternalSystemEnum.CAMARA, "CSD_DECEVAL"),
    DEPOSITORY_PERU(CountryEnum.PERU, ExternalSystemEnum.CAMARA, "CSD_CAVALI"),
    DEPOSITORY_CHILE(CountryEnum.CHILE, ExternalSystemEnum.CAMARA, "CSD_DCV_CHILE");

    private final CountryEnum countryEnum;
    private final ExternalSystemEnum externalSystem;
    private final String externalCode;

    public static DepositoryMappingEnum fromCountryCode(String countryCode) {
        return Arrays.stream(DepositoryMappingEnum.values())
                .filter(depository -> depository.countryEnum.getCountryCode().equalsIgnoreCase(countryCode))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Unknown country code: " + countryCode));
    }

}

```

## src/main/java/com/nubo/persistence/data/nasdaq/models/enums/ExternalSystemEnum.java

```java
package com.nubo.persistence.data.nasdaq.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum ExternalSystemEnum {

    MME_RV("MME_RV"),
    CAMARA("CAMARA"),
    GTIARIESGO("GTIARIESGO"),
    MME("MME");

    private final String code;
}

```

## src/main/java/com/nubo/persistence/data/nasdaq/models/enums/MarketEnum.java

```java
package com.nubo.persistence.data.nasdaq.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum MarketEnum {

    VARIABLE_INCOME("1"),
    FIXED_INCOME("2"),
    PRIMARY("10"),
    SECONDARY("11"),
    ACTIONS("21");
    private final String id;

}

```

## src/main/java/com/nubo/persistence/data/nasdaq/models/enums/MarketScopeEnum.java

```java
package com.nubo.persistence.data.nasdaq.models.enums;

import java.util.Arrays;
import java.util.Optional;

import com.nubo.persistence.data.nasdaq.exception.ServiceException;
import com.nubo.persistence.data.nasdaq.exception.error.ErrorCode;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum MarketScopeEnum {

    LOCAL(4L, 100L),
    GLOBAL(16L, 700L);

    private final Long marketId;
    private final Long matchIdPrefix;

    /**
     * Si el marketId no corresponde a Local (4) ni Global (16), no se rechaza:
     * se retorna vacio para que el llamador conserve el NumericTradeId sin prefijo.
     */
    public static Optional<MarketScopeEnum> fromMarketId(Long marketId) {
        return Arrays.stream(MarketScopeEnum.values())
                .filter(scope -> scope.marketId.equals(marketId))
                .findFirst();
    }

    public Long buildMatchId(Long numericTradeId) {
        if (numericTradeId == null) {
            throw new ServiceException(ErrorCode.TYPE_NOT_FOUND, "NumericTradeId is null");
        }
        return Long.parseLong(matchIdPrefix.toString() + numericTradeId);
    }

}

```

## src/main/java/com/nubo/persistence/data/nasdaq/models/enums/NotificationEnum.java

```java
package com.nubo.persistence.data.nasdaq.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum NotificationEnum {

    NOTIFICATION_SILENT(0, "NOTIFICACION_LISTA_SILENCIOSA"),
    INFORMATIVE(123, "INFORMATIVE"),
    ERROR(124, "ERROR"),
    WARNING(125, "WARNING");

    private final int id;
    private final String value;

}

```

## src/main/java/com/nubo/persistence/data/nasdaq/models/enums/OperationTypeEnum.java

```java
package com.nubo.persistence.data.nasdaq.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum OperationTypeEnum {

    SPOT_TRANSACTION(60L, "OPERACION"),
    REPO_TRANSACTION(61L, "OPERACION");

    private final long id;
    private final String category;;

}

```

## src/main/java/com/nubo/persistence/data/nasdaq/models/enums/PropertiesEnum.java

```java
package com.nubo.persistence.data.nasdaq.models.enums;

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

## src/main/java/com/nubo/persistence/data/nasdaq/models/enums/RepoSupplementaryEnum.java

```java
package com.nubo.persistence.data.nasdaq.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum RepoSupplementaryEnum {

    DEPOSITORY(11L),
    NOT_CUSTODIAN(0L);

    private final long id;
}

```

## src/main/java/com/nubo/persistence/data/nasdaq/models/enums/ScreenEnum.java

```java
package com.nubo.persistence.data.nasdaq.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum ScreenEnum {

    OPERATION_MANAGEMENT("031");

    private final String code;
}

```

## src/main/java/com/nubo/persistence/data/nasdaq/models/enums/StatusEnum.java

```java
package com.nubo.persistence.data.nasdaq.models.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Arrays;

@Getter
@RequiredArgsConstructor
public enum StatusEnum {

    REGISTERED(1L, "Operación registrada en Cámara"),
    NEGOTIATED(13L, "Operación calzada");

    private final long id;
    private final String message;

    @JsonValue
    public long getId() {
        return id;
    }

    @JsonCreator
    public static StatusEnum fromName(String name) {
        return Arrays.stream(StatusEnum.values())
                .filter(status -> status.name().equalsIgnoreCase(name))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Unknown status name: " + name));
    }

}

```

## src/main/java/com/nubo/persistence/data/nasdaq/models/enums/VersionApiEnum.java

```java
package com.nubo.persistence.data.nasdaq.models.enums;

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

## src/main/java/com/nubo/persistence/data/nasdaq/repository/CountryRepository.java

```java
package com.nubo.persistence.data.nasdaq.repository;

import com.nubo.persistence.data.nasdaq.models.entity.CountryEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CountryRepository extends JpaRepository<CountryEntity, Long> {
    Optional<CountryEntity> findByCode(String code);
}
```

## src/main/java/com/nubo/persistence/data/nasdaq/repository/CurrencyRepository.java

```java
package com.nubo.persistence.data.nasdaq.repository;


import com.nubo.persistence.data.nasdaq.models.entity.CurrencyEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CurrencyRepository extends JpaRepository<CurrencyEntity, Long> {
    Optional<CurrencyEntity> findByCode(String currency);
}
```

## src/main/java/com/nubo/persistence/data/nasdaq/repository/DepositoryMappingRepository.java

```java
package com.nubo.persistence.data.nasdaq.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.persistence.data.nasdaq.models.entity.DepositoryMappingEntity;

public interface DepositoryMappingRepository extends JpaRepository<DepositoryMappingEntity, Long> {

    Optional<DepositoryMappingEntity> findByExternalCodeAndExternalSystem(String externalCode, String externalSystem);
}

```

## src/main/java/com/nubo/persistence/data/nasdaq/repository/HolidayRepository.java

```java
package com.nubo.persistence.data.nasdaq.repository;

import com.nubo.persistence.data.nasdaq.models.entity.HolidayEntity;
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

## src/main/java/com/nubo/persistence/data/nasdaq/repository/MarketMappingRepository.java

```java
package com.nubo.persistence.data.nasdaq.repository;

import com.nubo.persistence.data.nasdaq.models.entity.MarketMappingEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MarketMappingRepository extends JpaRepository<MarketMappingEntity, Long> {

    Optional<MarketMappingEntity> findByExternalCodeAndExternalSystemIgnoreCase(String externalCode, String externalSystem);

}

```

## src/main/java/com/nubo/persistence/data/nasdaq/repository/ParticipantRepository.java

```java
package com.nubo.persistence.data.nasdaq.repository;

import com.nubo.persistence.data.nasdaq.models.entity.ParticipantEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ParticipantRepository extends JpaRepository<ParticipantEntity, Long> {

    Optional<ParticipantEntity> findByCode(String code);
}

```

## src/main/java/com/nubo/persistence/data/nasdaq/repository/SecurityTitleRepository.java

```java
package com.nubo.persistence.data.nasdaq.repository;

import com.nubo.persistence.data.nasdaq.models.entity.SecurityTitleEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SecurityTitleRepository extends JpaRepository<SecurityTitleEntity, Long> {

    Optional<SecurityTitleEntity> findByIsin(String isin);
    Optional<SecurityTitleEntity> findByMnemonic(String mnemonic);


}

```

## src/main/java/com/nubo/persistence/data/nasdaq/repository/StatusMappingRepository.java

```java
package com.nubo.persistence.data.nasdaq.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.persistence.data.nasdaq.models.entity.StatusMappingEntity;

public interface StatusMappingRepository extends JpaRepository<StatusMappingEntity, Long> {

    Optional<StatusMappingEntity> findByExternalCodeAndExternalSystem(String externalCode, String externalSystem);
}

```

## src/main/java/com/nubo/persistence/data/nasdaq/repository/TradeRepository.java

```java
package com.nubo.persistence.data.nasdaq.repository;

import com.nubo.persistence.data.nasdaq.models.entity.TradeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.Optional;

public interface TradeRepository extends JpaRepository<TradeEntity, Long>{

    Optional<TradeEntity> findByMatchIdAndMatchDate(Long matchId, LocalDate matchDate);

}
```

## src/main/java/com/nubo/persistence/data/nasdaq/repository/TradeStatusHistoryRepository.java

```java
package com.nubo.persistence.data.nasdaq.repository;

import com.nubo.persistence.data.nasdaq.models.entity.TradeStatusHistoryEntity;
import com.nubo.persistence.data.nasdaq.models.entity.TradeStatusHistoryKey;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TradeStatusHistoryRepository extends JpaRepository<TradeStatusHistoryEntity, TradeStatusHistoryKey> {
}

```

## src/main/java/com/nubo/persistence/data/nasdaq/repository/TradingSessionRepository.java

```java
package com.nubo.persistence.data.nasdaq.repository;

import com.nubo.persistence.data.nasdaq.models.entity.TradingSessionEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TradingSessionRepository extends JpaRepository<TradingSessionEntity, String> {
    Optional<TradingSessionEntity> findByDescription(String description);

}

```

## src/main/java/com/nubo/persistence/data/nasdaq/repository/TradingSystemRepository.java

```java
package com.nubo.persistence.data.nasdaq.repository;

import com.nubo.persistence.data.nasdaq.models.entity.TradingSystemEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TradingSystemRepository extends JpaRepository<TradingSystemEntity, Long> {

    Optional<TradingSystemEntity> findByDescription(String description);

}

```

## src/main/java/com/nubo/persistence/data/nasdaq/repository/TypeRepository.java

```java
package com.nubo.persistence.data.nasdaq.repository;

import com.nubo.persistence.data.nasdaq.models.entity.TypeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TypeRepository extends JpaRepository<TypeEntity, Long>{
}

```

## src/main/java/com/nubo/persistence/data/nasdaq/service/BatchCacheService.java

```java
package com.nubo.persistence.data.nasdaq.service;

import java.time.LocalDate;
import java.util.List;

import com.nubo.persistence.data.nasdaq.models.dto.request.PartyDto;
import com.nubo.persistence.data.nasdaq.models.entity.CountryEntity;
import com.nubo.persistence.data.nasdaq.models.entity.CurrencyEntity;
import com.nubo.persistence.data.nasdaq.models.entity.DepositoryEntity;
import com.nubo.persistence.data.nasdaq.models.entity.MarketEntity;
import com.nubo.persistence.data.nasdaq.models.entity.ParticipantEntity;
import com.nubo.persistence.data.nasdaq.models.entity.SecurityTitleEntity;
import com.nubo.persistence.data.nasdaq.models.entity.StatusMappingEntity;
import com.nubo.persistence.data.nasdaq.models.entity.TradingSessionEntity;
import com.nubo.persistence.data.nasdaq.models.entity.TradingSystemEntity;
import com.nubo.persistence.data.nasdaq.models.entity.TypeEntity;

public interface BatchCacheService {

    CountryEntity findCountryEntityByCode(String countryCode);

    CurrencyEntity findCurrencyEntityByCode(String code);

    TradingSystemEntity findTradingSystemEntity(String description);

    TradingSessionEntity findTradingSessionEntity(String description);

    ParticipantEntity findParticipantEntityByCode(CountryEntity country, String code);

    SecurityTitleEntity findSecurityTitleEntityByMnemonic(String mnemonic);

    StatusMappingEntity findStatusByExternalCode(String statusExternalCode);

    MarketEntity findMarketEntityByExternalCode(Integer externalCode);

    TypeEntity findTypeEntityById(Long typeId);

    TypeEntity validateSourceQuote(PartyDto party);

    List<LocalDate> findHolidayDatesInRange(Long countryId, LocalDate startDate, LocalDate endDate);

    DepositoryEntity findDepositoryEntity(String externalCode, String externalSystem);

}

```

## src/main/java/com/nubo/persistence/data/nasdaq/service/ProcessMessageService.java

```java
package com.nubo.persistence.data.nasdaq.service;

import java.util.List;

import com.nubo.persistence.data.nasdaq.models.domain.NasdaqMessage;

public interface ProcessMessageService {

    void sendMassageToDataBase(List<NasdaqMessage> nasdaqMessageList, String batchId);

}

```

## src/main/java/com/nubo/persistence/data/nasdaq/service/TradeTransactionService.java

```java
package com.nubo.persistence.data.nasdaq.service;

import com.nubo.persistence.data.nasdaq.models.dto.request.NasdaqInDto;
import com.nubo.persistence.data.nasdaq.models.entity.TradeEntity;
import com.nubo.persistence.data.nasdaq.models.entity.TradeStatusHistoryEntity;

public interface TradeTransactionService {

    TradeEntity buildTradeEntity(NasdaqInDto nasdaqInDto);

    TradeStatusHistoryEntity buildTradeStatusHistory(TradeEntity tradeEntity);

}

```

## src/main/java/com/nubo/persistence/data/nasdaq/service/impl/BatchCacheServiceImpl.java

```java
package com.nubo.persistence.data.nasdaq.service.impl;

import java.time.LocalDate;
import java.util.List;

import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import com.nubo.persistence.data.nasdaq.exception.ServiceException;
import com.nubo.persistence.data.nasdaq.exception.error.ErrorCode;
import com.nubo.persistence.data.nasdaq.models.dto.request.PartyDto;
import com.nubo.persistence.data.nasdaq.models.entity.CountryEntity;
import com.nubo.persistence.data.nasdaq.models.entity.CurrencyEntity;
import com.nubo.persistence.data.nasdaq.models.entity.DepositoryEntity;
import com.nubo.persistence.data.nasdaq.models.entity.DepositoryMappingEntity;
import com.nubo.persistence.data.nasdaq.models.entity.MarketEntity;
import com.nubo.persistence.data.nasdaq.models.entity.MarketMappingEntity;
import com.nubo.persistence.data.nasdaq.models.entity.ParticipantEntity;
import com.nubo.persistence.data.nasdaq.models.entity.SecurityTitleEntity;
import com.nubo.persistence.data.nasdaq.models.entity.StatusMappingEntity;
import com.nubo.persistence.data.nasdaq.models.entity.TradingSessionEntity;
import com.nubo.persistence.data.nasdaq.models.entity.TradingSystemEntity;
import com.nubo.persistence.data.nasdaq.models.entity.TypeEntity;
import com.nubo.persistence.data.nasdaq.models.enums.AccountTypeEnum;
import com.nubo.persistence.data.nasdaq.models.enums.ExternalSystemEnum;
import com.nubo.persistence.data.nasdaq.repository.CountryRepository;
import com.nubo.persistence.data.nasdaq.repository.CurrencyRepository;
import com.nubo.persistence.data.nasdaq.repository.DepositoryMappingRepository;
import com.nubo.persistence.data.nasdaq.repository.HolidayRepository;
import com.nubo.persistence.data.nasdaq.repository.MarketMappingRepository;
import com.nubo.persistence.data.nasdaq.repository.ParticipantRepository;
import com.nubo.persistence.data.nasdaq.repository.SecurityTitleRepository;
import com.nubo.persistence.data.nasdaq.repository.StatusMappingRepository;
import com.nubo.persistence.data.nasdaq.repository.TradingSessionRepository;
import com.nubo.persistence.data.nasdaq.repository.TradingSystemRepository;
import com.nubo.persistence.data.nasdaq.repository.TypeRepository;
import com.nubo.persistence.data.nasdaq.service.BatchCacheService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class BatchCacheServiceImpl implements BatchCacheService {

    private final CountryRepository countryRepository;
    private final TradingSystemRepository tradingSystemRepository;
    private final CurrencyRepository currencyRepository;
    private final TypeRepository typeRepository;
    private final SecurityTitleRepository securityTitleRepository;
    private final TradingSessionRepository tradingSessionRepository;
    private final ParticipantRepository participantRepository;
    private final HolidayRepository holidayRepository;
    private final MarketMappingRepository marketMappingRepository;
    private final StatusMappingRepository statusMappingRepository;
    private final DepositoryMappingRepository depositoryMappingRepository;

    @Override
    @Cacheable(value = "countries", key = "#countryCode", condition = "#countryCode != null")
    public CountryEntity findCountryEntityByCode(String countryCode) {
        if (countryCode == null) {
            throw new ServiceException(ErrorCode.COUNTRY_NOT_FOUND, "countryCode:null");
        }
        return countryRepository.findByCode(countryCode)
                .orElseThrow(() -> new ServiceException(ErrorCode.COUNTRY_NOT_FOUND, "countryCode:" + countryCode));
    }

    @Override
    @Cacheable(value = "currencies", key = "#code", condition = "#code != null")
    public CurrencyEntity findCurrencyEntityByCode(String code) {
        if (code == null) {
            throw new ServiceException(ErrorCode.CURRENCY_NOT_FOUND, "currencyCode:null");
        }
        return currencyRepository.findByCode(code)
                .orElseThrow(() -> new ServiceException(ErrorCode.CURRENCY_NOT_FOUND, "currencyCode:" + code));
    }

    @Override
    @Cacheable(value = "tradingSystems", key = "#description", condition = "#description != null")
    public TradingSystemEntity findTradingSystemEntity(String description) {
        if (description == null) {
            throw new ServiceException(ErrorCode.SYSTEM_NOT_FOUND, "tradingSystemDescription:null");
        }
        return tradingSystemRepository.findByDescription(description)
                .orElseThrow(() -> new ServiceException(ErrorCode.SYSTEM_NOT_FOUND,
                        "tradingSystemDescription:" + description));
    }

    @Override
    @Cacheable(value = "tradingSessions", key = "#description", condition = "#description != null")
    public TradingSessionEntity findTradingSessionEntity(String description) {
        if (description == null) {
            throw new ServiceException(ErrorCode.TRADING_SESSION_NOT_FOUND, "tradingSessionDescription:null");
        }
        return tradingSessionRepository.findByDescription(description)
                .orElseThrow(() -> new ServiceException(ErrorCode.TRADING_SESSION_NOT_FOUND,
                        "tradingSessionDescription:" + description));
    }

    @Override
    @Cacheable(value = "participants", key = "#country.id + '_' + #participantCode", condition = "#country != null and #participantCode != null")
    public ParticipantEntity findParticipantEntityByCode(CountryEntity country, String participantCode) {
        String code = createParticipantCode(country, participantCode);
        if (code == null) {
            throw new ServiceException(ErrorCode.PARTICIPANT_NOT_FOUND, "participantCode:null");
        }
        return participantRepository.findByCode(code)
                .orElseThrow(() -> new ServiceException(ErrorCode.PARTICIPANT_NOT_FOUND, "participantCode:" + code));
    }

    @Override
    @Cacheable(value = "securities", key = "#mnemonic", condition = "#mnemonic != null")
    public SecurityTitleEntity findSecurityTitleEntityByMnemonic(String mnemonic) {
        if (mnemonic == null) {
            throw new ServiceException(ErrorCode.SECURITY_TITLE_NOT_FOUND, "securityTitleSymbol:null");
        }
        return securityTitleRepository.findByMnemonic(mnemonic)
                .orElseThrow(() -> new ServiceException(ErrorCode.SECURITY_TITLE_NOT_FOUND,
                        "securityTitleSymbol:" + mnemonic));
    }

    @Override
    @Cacheable(value = "status", key = "#statusExternalCode", condition = "#statusExternalCode != null")
    public StatusMappingEntity findStatusByExternalCode(String statusExternalCode) {
        if (statusExternalCode == null) {
            throw new ServiceException(ErrorCode.STATUS_MAPPING_NOT_FOUND, "statusExternalCode:null");
        }
        return statusMappingRepository
                .findByExternalCodeAndExternalSystem(statusExternalCode, ExternalSystemEnum.MME_RV.getCode())
                .orElseThrow(() -> new ServiceException(ErrorCode.STATUS_MAPPING_NOT_FOUND));
    }

    @Override
    @Cacheable(value = "markets", key = "#externalCode", condition = "#externalCode != null")
    public MarketEntity findMarketEntityByExternalCode(Integer externalCode) {
        if (externalCode == null) {
            throw new ServiceException(ErrorCode.MARKET_NOT_FOUND, "marketCode:null");
        }
        final String code = String.valueOf(externalCode).trim();
        MarketMappingEntity mm = marketMappingRepository
                .findByExternalCodeAndExternalSystemIgnoreCase(code, ExternalSystemEnum.MME_RV.getCode())
                .orElseThrow(() -> new ServiceException(ErrorCode.MARKET_MAPPING_NOT_FOUND,
                        "externalCode:" + code + ", externalSystem:" + ExternalSystemEnum.MME_RV.getCode()));
        MarketEntity market = mm.getMarket();
        if (market == null) {
            throw new ServiceException(ErrorCode.MARKET_MAPPING_NOT_FOUND,
                    "mappingId:" + mm.getId() + " Market not found");
        }
        return market;
    }

    @Override
    @Cacheable(value = "types", key = "#typeId", condition = "#typeId != null")
    public TypeEntity findTypeEntityById(Long typeId) {
        if (typeId == null) {
            throw new ServiceException(ErrorCode.TYPE_NOT_FOUND, "typeId:null");
        }
        return typeRepository.findById(typeId)
                .orElseThrow(() -> new ServiceException(ErrorCode.TYPE_NOT_FOUND, "typeId:" + typeId));
    }

    @Override
    public TypeEntity validateSourceQuote(PartyDto party) {
        if (party == null) {
            throw new ServiceException(ErrorCode.TYPE_NOT_FOUND, "party:null");
        }
        Long typeId = AccountTypeEnum.fromRaw(party.getAccountType()).getId();
        return findTypeEntityById(typeId);
    }

    @Override
    @Cacheable(value = "findHolidayDatesInRange", key = "#countryId + '_' + #startDate + '_' + #endDate")
    public List<LocalDate> findHolidayDatesInRange(Long countryId, LocalDate startDate, LocalDate endDate) {
        return holidayRepository.findHolidayDatesInRange(countryId, startDate, endDate);
    }

    private String createParticipantCode(CountryEntity country, String participantCode) {
        if (country == null || participantCode == null) {
            return "";
        }
        String trimmed = participantCode.trim();
        String last4;
        if (trimmed.length() >= 4) {
            last4 = trimmed.substring(trimmed.length() - 4);
        } else {
            last4 = String.format("%-4s", trimmed).replace(' ', '0');
        }
        return country.getCode() + last4;
    }

    @Override
    @Cacheable(value = "depositoryMapping", key = "#externalCode + '-' + #externalSystem")
    public DepositoryEntity findDepositoryEntity(String externalCode, String externalSystem) {
        DepositoryMappingEntity mapping = depositoryMappingRepository
                .findByExternalCodeAndExternalSystem(externalCode, externalSystem)
                .orElseThrow(() -> new ServiceException(ErrorCode.DEPOSITORY_MAPPING_NOT_FOUND,
                        "externalCode:" + externalCode + ", externalSystem:" + externalSystem));
        return mapping.getDepository();
    }

}

```

## src/main/java/com/nubo/persistence/data/nasdaq/service/impl/ProcessMessageServiceImpl.java

```java
package com.nubo.persistence.data.nasdaq.service.impl;

import java.util.ArrayList;
import java.util.Collections;
import java.util.IdentityHashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;
import java.lang.reflect.Method;
import java.sql.SQLException;

import org.springframework.context.annotation.AutoProxyRegistrar;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.nubo.persistence.data.nasdaq.application.context.GlobalContext;
import com.nubo.persistence.data.nasdaq.application.properties.PropertiesContext;
import com.nubo.persistence.data.nasdaq.application.util.ApplicationUtils;
import com.nubo.persistence.data.nasdaq.application.util.ValidatorUtil;
import com.nubo.persistence.data.nasdaq.kafka.producer.KafkaNuboProducerAdapter;
import com.nubo.persistence.data.nasdaq.models.domain.NasdaqMessage;
import com.nubo.persistence.data.nasdaq.models.dto.request.NasdaqInDto;
import com.nubo.persistence.data.nasdaq.models.dto.response.AutomaticAssignmentOutDto;
import com.nubo.persistence.data.nasdaq.models.dto.response.ErrorNasdaqOutDto;
import com.nubo.persistence.data.nasdaq.models.dto.response.MetaDataOutDto;
import com.nubo.persistence.data.nasdaq.models.dto.response.NotificationOutDto;
import com.nubo.persistence.data.nasdaq.models.entity.TradeEntity;
import com.nubo.persistence.data.nasdaq.models.entity.TradeStatusHistoryEntity;
import com.nubo.persistence.data.nasdaq.models.enums.NotificationEnum;
import com.nubo.persistence.data.nasdaq.models.enums.ScreenEnum;
import com.nubo.persistence.data.nasdaq.repository.TradeRepository;
import com.nubo.persistence.data.nasdaq.repository.TradeStatusHistoryRepository;
import com.nubo.persistence.data.nasdaq.service.ProcessMessageService;
import com.nubo.persistence.data.nasdaq.service.TradeTransactionService;

import io.micrometer.core.instrument.Counter;
import io.micrometer.core.instrument.MeterRegistry;
import io.micrometer.core.instrument.Timer;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class ProcessMessageServiceImpl implements ProcessMessageService {

    private final TradeRepository tradeRepository;
    private final KafkaNuboProducerAdapter kafkaNuboProducerAdapter;
    private final ValidatorUtil validatorUtil;
    private final TradeTransactionService tradeTransactionService;
    private final MeterRegistry meterRegistry;
    private final TradeStatusHistoryRepository tradeStatusHistoryRepository;

    private final ExecutorService batchExecutor = Executors.newFixedThreadPool(
            Math.max(Runtime.getRuntime().availableProcessors() * 2, 20));

    private record TradeWithMessage(TradeEntity tradeEntity, NasdaqMessage nasdaqMessage) {
    }

    @Override
    public void sendMassageToDataBase(List<NasdaqMessage> nasdaqMessageList, String batchId) {
        if (nasdaqMessageList == null || nasdaqMessageList.isEmpty()) {
            log.warn("No Nasdaq records to persist.");
            return;
        }

        final int totalElement = nasdaqMessageList.size();
        final long batchStartNanos = System.nanoTime();
        log.info("Batch ID {} - Starting batch processing - message count: {}", batchId, totalElement);

        List<TradeWithMessage> tradeWithMessageList = new ArrayList<>(totalElement);
        List<ErrorNasdaqOutDto> errorNasdaqOutDtoList = new ArrayList<>();
        int persistedCount = 0;
        long transformDurationNanos = 0L;
        long persistDurationNanos = 0L;
        long dltDurationNanos = 0L;
        long transformStartNanos = System.nanoTime();

        if (totalElement > 5) {
            // Transformar mensajes en paralelo para batches grandes
            final Map<String, String> contextSnapshot = GlobalContext.getContextSnapshot();
            List<CompletableFuture<TradeWithMessage>> futures = nasdaqMessageList.stream()
                    .map(nasdaqMessage -> CompletableFuture.supplyAsync(() -> {
                        GlobalContext.restoreContext(contextSnapshot);
                        NasdaqInDto nasdaqInDto = buildNasdaqInDtoFromMessage(nasdaqMessage, batchId);
                        TradeEntity tradeEntity = tradeTransactionService.buildTradeEntity(nasdaqInDto);
                        logEntityBuilt(batchId, nasdaqMessage, tradeEntity);
                        return new TradeWithMessage(tradeEntity, nasdaqMessage);
                    }, batchExecutor).exceptionally(ex -> {
                        log.warn("Batch ID {} - Error processing item: {}", batchId, ex.getMessage());
                        synchronized (errorNasdaqOutDtoList) {
                            errorNasdaqOutDtoList.add(ErrorNasdaqOutDto.builder()
                                    .errorMessage(buildErrorMessage(
                                            ex.getCause() instanceof Exception cause ? cause
                                                    : new RuntimeException(ex)))
                                    .messageNasdaq(nasdaqMessage.messageJson())
                                    .partition(nasdaqMessage.partition())
                                    .offset(nasdaqMessage.offset())
                                    .topic(nasdaqMessage.topic())
                                    .key(nasdaqMessage.key())
                                    .build());
                        }
                        return null;
                    }))
                    .toList();

            futures.forEach(future -> {
                TradeWithMessage result = future.join();
                if (result != null) {
                    tradeWithMessageList.add(result);
                }
            });
        } else {
            // Procesamiento secuencial para batches pequeños
            for (NasdaqMessage nasdaqMessage : nasdaqMessageList) {
                try {
                    NasdaqInDto nasdaqInDto = buildNasdaqInDtoFromMessage(nasdaqMessage, batchId);
                    TradeEntity tradeEntity = tradeTransactionService.buildTradeEntity(nasdaqInDto);
                    logEntityBuilt(batchId, nasdaqMessage, tradeEntity);
                    tradeWithMessageList.add(new TradeWithMessage(tradeEntity, nasdaqMessage));
                } catch (Exception ex) {
                    log.warn("Batch ID {} - Error processing item: {}", batchId, ex.getMessage());
                    errorNasdaqOutDtoList.add(ErrorNasdaqOutDto.builder()
                            .errorMessage(buildErrorMessage(ex))
                            .messageNasdaq(nasdaqMessage.messageJson())
                            .partition(nasdaqMessage.partition())
                            .offset(nasdaqMessage.offset())
                            .topic(nasdaqMessage.topic())
                            .key(nasdaqMessage.key())
                            .build());
                }
            }
        }
        transformDurationNanos = System.nanoTime() - transformStartNanos;

        if (!tradeWithMessageList.isEmpty()) {
            long persistStartNanos = System.nanoTime();
            List<TradeEntity> tradeEntityLastList = persistWithBatchFallback(
                    tradeWithMessageList, errorNasdaqOutDtoList, batchId);
            persistedCount = tradeEntityLastList.size();

            if (!tradeEntityLastList.isEmpty()) {
                List<TradeStatusHistoryEntity> histories = tradeEntityLastList.stream()
                        .filter(Objects::nonNull)
                        .map(tradeTransactionService::buildTradeStatusHistory)
                        .toList();
                this.saveStatusHistoryBatch(histories);
                log.info("Batch ID {} - Successfully persisted {} trade entities", batchId,
                        tradeEntityLastList.size());

                this.sendNotificationNewMessages(batchId);
                this.sendAutomaticAssignment(tradeEntityLastList);
            }
            persistDurationNanos = System.nanoTime() - persistStartNanos;
        }

        if (!errorNasdaqOutDtoList.isEmpty()) {
            long dltStartNanos = System.nanoTime();
            log.warn("Batch ID {} - {} records failed and will be sent to DLT", batchId, errorNasdaqOutDtoList.size());
            this.sendToDeadLetter(errorNasdaqOutDtoList);
            dltDurationNanos = System.nanoTime() - dltStartNanos;
        }

        long totalDurationNanos = System.nanoTime() - batchStartNanos;
        recordBatchMetrics(batchId, totalElement, tradeWithMessageList.size(), persistedCount, errorNasdaqOutDtoList.size(),
                transformDurationNanos, persistDurationNanos, dltDurationNanos, totalDurationNanos);
    }

    private void recordBatchMetrics(String batchId, int totalMessages, int transformedCount, int persistedCount,
            int errorCount,
            long transformDurationNanos, long persistDurationNanos, long dltDurationNanos, long totalDurationNanos) {
        double totalSeconds = Math.max(0.001, totalDurationNanos / 1_000_000_000d);
        double throughput = totalMessages / totalSeconds;

        log.info(
                "BatchMetrics batchId={} total={} success={} error={} transformMs={} persistMs={} dltMs={} totalMs={} throughputMsgPerSec={}",
                batchId,
                totalMessages,
                transformedCount,
                errorCount,
                TimeUnit.NANOSECONDS.toMillis(transformDurationNanos),
                TimeUnit.NANOSECONDS.toMillis(persistDurationNanos),
                TimeUnit.NANOSECONDS.toMillis(dltDurationNanos),
                TimeUnit.NANOSECONDS.toMillis(totalDurationNanos),
                String.format("%.2f", throughput));

        log.info(
                "NASDAQ_BATCH_METRICS batchId={} total={} transformed={} persisted={} error={} transformMs={} persistMs={} dltMs={} totalMs={} throughputMsgPerSec={}",
                batchId,
                totalMessages,
                transformedCount,
                persistedCount,
                errorCount,
                TimeUnit.NANOSECONDS.toMillis(transformDurationNanos),
                TimeUnit.NANOSECONDS.toMillis(persistDurationNanos),
                TimeUnit.NANOSECONDS.toMillis(dltDurationNanos),
                TimeUnit.NANOSECONDS.toMillis(totalDurationNanos),
                String.format("%.2f", throughput));

        if (meterRegistry == null) {
            return;
        }

        Timer.builder("nasdaq.batch.total.duration")
                .description("Total batch processing duration")
                .register(meterRegistry)
                .record(totalDurationNanos, TimeUnit.NANOSECONDS);

        Timer.builder("nasdaq.batch.transform.duration")
                .description("Batch transformation phase duration")
                .register(meterRegistry)
                .record(transformDurationNanos, TimeUnit.NANOSECONDS);

        Timer.builder("nasdaq.batch.persist.duration")
                .description("Batch persistence phase duration")
                .register(meterRegistry)
                .record(persistDurationNanos, TimeUnit.NANOSECONDS);

        if (dltDurationNanos > 0L) {
            Timer.builder("nasdaq.batch.dlt.duration")
                    .description("Batch DLT publish phase duration")
                    .register(meterRegistry)
                    .record(dltDurationNanos, TimeUnit.NANOSECONDS);
        }

        Counter.builder("nasdaq.batch.messages.processed")
                .description("Total batch messages processed")
                .register(meterRegistry)
                .increment(totalMessages);

        Counter.builder("nasdaq.batch.messages.success")
                .description("Total batch messages successfully transformed")
                .register(meterRegistry)
                .increment(transformedCount);

        if (errorCount > 0) {
            Counter.builder("nasdaq.batch.messages.error")
                    .description("Total batch messages sent to DLT")
                    .register(meterRegistry)
                    .increment(errorCount);
        }
    }

    private void sendToDeadLetter(List<ErrorNasdaqOutDto> errorNasdaqOutDtoList) {
        errorNasdaqOutDtoList.forEach(errorNasdaqOutDto -> kafkaNuboProducerAdapter
                .sendMessageErrorAsync(errorNasdaqOutDto.getKey(), errorNasdaqOutDto));
    }

    private void sendNotificationNewMessages(String batchId) {
        NotificationOutDto notificationOutDto = NotificationOutDto.builder()
                .eventType(NotificationEnum.NOTIFICATION_SILENT.getValue())
                .userIds(List.of())
                .module("DEFAULT")
                .profiles(List.of())
                .typeNotification(NotificationEnum.INFORMATIVE.getValue())
                .metadata(ApplicationUtils.convertObjectToJsonNode(MetaDataOutDto.builder()
                        .code(ScreenEnum.OPERATION_MANAGEMENT.getCode())
                        .action("reload")
                        .build()))
                .timestamp(PropertiesContext.getClientDatetime())
                .screenCode(ScreenEnum.OPERATION_MANAGEMENT.getCode())
                .build();
        String key = ScreenEnum.OPERATION_MANAGEMENT.getCode();
        kafkaNuboProducerAdapter.sendNotificationsAsync(key, notificationOutDto);
        log.info("Batch ID {} - Notification sent successfully", batchId);
    }

    private void sendAutomaticAssignment(List<TradeEntity> tradeEntityList) {
        log.info("Send notification automatic assignment");
        for (TradeEntity tradeEntity : tradeEntityList) {
            AutomaticAssignmentOutDto automaticAssignmentOutDto = AutomaticAssignmentOutDto.builder()
                    .tradeId(tradeEntity.getId())
                    .message("New trade persisted with ID: " + tradeEntity.getId())
                    .build();
            String key = String.valueOf(tradeEntity.getId());
            log.info("NASDAQ_AUTO_ASSIGNMENT_SEND_START tradeId={} matchId={} key={}",
                    tradeEntity.getId(), tradeEntity.getMatchId(), key);
            try {
                kafkaNuboProducerAdapter.sendAutomaticAssignmentAsync(key, automaticAssignmentOutDto);
                log.info("NASDAQ_AUTO_ASSIGNMENT_SEND_INVOKED tradeId={} matchId={}",
                        tradeEntity.getId(), tradeEntity.getMatchId());
            } catch (RuntimeException ex) {
                log.error("NASDAQ_AUTO_ASSIGNMENT_SEND_FAILED tradeId={} matchId={} exceptionType={} message={}",
                        tradeEntity.getId(), tradeEntity.getMatchId(), ex.getClass().getName(), ex.getMessage(), ex);
                throw ex;
            }
        }
    }

    private String buildErrorMessage(Exception ex) {
        if (ex == null) {
            return "Unknown error";
        }

        String mainMessage = ex.getMessage();
        if (mainMessage == null || mainMessage.trim().isEmpty()) {
            mainMessage = ex.getClass().getSimpleName();
            if (mainMessage == null || mainMessage.isEmpty()) {
                mainMessage = "Exception";
            }
        }
        if (ex.getCause() != null) {
            String causeMessage = ex.getCause().getMessage();
            if (causeMessage != null && !causeMessage.trim().isEmpty()) {
                return mainMessage + " | Cause: " + causeMessage;
            }
        }

        return mainMessage;
    }

    private NasdaqInDto buildNasdaqInDtoFromMessage(NasdaqMessage nasdaqMessage, String batchId) {
        NasdaqInDto nasdaqInDto = ApplicationUtils.convertJsonToObject(nasdaqMessage.messageJson(), NasdaqInDto.class);
        validatorUtil.validateObject(nasdaqInDto);
        log.info("NASDAQ_DTO_OK batchId={} topic={} partition={} offset={} numericTradeId={}",
                batchId, nasdaqMessage.topic(), nasdaqMessage.partition(), nasdaqMessage.offset(),
                nasdaqInDto.getNumericTradeId());
        return nasdaqInDto;
    }

    private void logEntityBuilt(String batchId, NasdaqMessage nasdaqMessage, TradeEntity tradeEntity) {
        log.info("NASDAQ_ENTITY_BUILT batchId={} topic={} partition={} offset={} tradeId={} matchId={} matchDate={} clearingDate={}",
                batchId, nasdaqMessage.topic(), nasdaqMessage.partition(), nasdaqMessage.offset(), tradeEntity.getId(),
                tradeEntity.getMatchId(), tradeEntity.getMatchDate(), tradeEntity.getClearingDate());
    }

    private List<TradeEntity> persistWithBatchFallback(
            List<TradeWithMessage> tradeWithMessageList,
            List<ErrorNasdaqOutDto> errorNasdaqOutDtoList,
            String batchId) {

        List<TradeEntity> successfulTradeEntityList = new ArrayList<>();

        try {
            List<TradeEntity> tradeEntityList = tradeWithMessageList.stream()
                    .map(twm -> twm.tradeEntity)
                    .toList();

            logTradeStates(batchId, "BEFORE_SAVE_ALL", tradeEntityList);
            List<TradeEntity> savedEntities = tradeRepository.saveAll(tradeEntityList);
            logTradeStates(batchId, "AFTER_SAVE_ALL_BEFORE_FLUSH", savedEntities);
            tradeRepository.flush();
            logTradeStates(batchId, "AFTER_FLUSH", savedEntities);
            successfulTradeEntityList.addAll(savedEntities);
            log.debug("Batch ID {} - Batch insert successful for {} entities", batchId, savedEntities.size());

        } catch (Exception ex) {
            log.error("NASDAQ_PERSIST_BATCH_FAILED batchId={} exceptionType={} message={}",
                    batchId, ex.getClass().getName(), ex.getMessage(), ex);
            logSqlErrors(ex, batchId, "SAVE_ALL_OR_FLUSH");
            logTradeStates(batchId, "AFTER_FAILED_BATCH", tradeWithMessageList.stream()
                    .map(TradeWithMessage::tradeEntity)
                    .toList());
            log.warn("Batch ID {} - Batch insert failed, falling back to parallel individual inserts: {}",
                    batchId, ex.getMessage());

            final Map<String, String> contextSnapshot = GlobalContext.getContextSnapshot();
            List<CompletableFuture<TradeEntity>> futures = tradeWithMessageList.stream()
                    .map(tradeWithMessage -> CompletableFuture
                            .supplyAsync(
                                    () -> {
                                        GlobalContext.restoreContext(contextSnapshot);
                                        return saveSingleTrade(tradeWithMessage.tradeEntity);
                                    },
                                    batchExecutor)
                            .exceptionally(individualEx -> {
                                logSqlErrors(individualEx, batchId, "FALLBACK_SAVE_SINGLE");
                                log.warn(
                                        "Batch ID {} - Error persisting trade entity (matchId: {}, matchDate: {}): {}",
                                        batchId,
                                        tradeWithMessage.tradeEntity.getMatchId(),
                                        tradeWithMessage.tradeEntity.getMatchDate(),
                                        individualEx.getMessage());
                                synchronized (errorNasdaqOutDtoList) {
                                    errorNasdaqOutDtoList.add(ErrorNasdaqOutDto.builder()
                                            .errorMessage(buildErrorMessage(
                                                    individualEx.getCause() instanceof Exception e ? e
                                                            : new RuntimeException(individualEx)))
                                            .messageNasdaq(tradeWithMessage.nasdaqMessage.messageJson())
                                            .partition(tradeWithMessage.nasdaqMessage.partition())
                                            .offset(tradeWithMessage.nasdaqMessage.offset())
                                            .topic(tradeWithMessage.nasdaqMessage.topic())
                                            .key(tradeWithMessage.nasdaqMessage.key())
                                            .build());
                                }
                                return null;
                            }))
                    .toList();

            futures.forEach(future -> {
                TradeEntity result = future.join();
                if (result != null) {
                    synchronized (successfulTradeEntityList) {
                        successfulTradeEntityList.add(result);
                    }
                }
            });
        }

        return successfulTradeEntityList;
    }

    private void logTradeStates(String batchId, String stage, List<TradeEntity> tradeEntityList) {
        tradeEntityList.forEach(tradeEntity -> log.info(
                "NASDAQ_TRADE_STATE batchId={} stage={} tradeId={} matchId={} matchDate={}",
                batchId, stage, tradeEntity.getId(), tradeEntity.getMatchId(), tradeEntity.getMatchDate()));
    }

    private void logSqlErrors(Throwable throwable, String batchId, String stage) {
        Set<Throwable> visitedCauses = Collections.newSetFromMap(new IdentityHashMap<>());
        Throwable current = throwable;
        while (current != null && visitedCauses.add(current)) {
            if (current instanceof SQLException sqlException) {
                logSqlError(batchId, stage, sqlException);
                Set<SQLException> visitedNextExceptions = Collections.newSetFromMap(new IdentityHashMap<>());
                SQLException nextException = sqlException.getNextException();
                while (nextException != null && visitedNextExceptions.add(nextException)) {
                    logSqlError(batchId, stage + "_NEXT", nextException);
                    nextException = nextException.getNextException();
                }
            }
            current = current.getCause();
        }
    }

    private void logSqlError(String batchId, String stage, SQLException sqlException) {
        log.error("NASDAQ_SQL_ERROR batchId={} stage={} sqlState={} constraint={} detail={} message={}",
                batchId, stage, sqlException.getSQLState(), postgresErrorField(sqlException, "getConstraint"),
                postgresErrorField(sqlException, "getDetail"), sqlException.getMessage());
    }

    private String postgresErrorField(SQLException sqlException, String getterName) {
        try {
            Method getServerErrorMessage = sqlException.getClass().getMethod("getServerErrorMessage");
            Object serverErrorMessage = getServerErrorMessage.invoke(sqlException);
            if (serverErrorMessage == null) {
                return null;
            }
            Method getter = serverErrorMessage.getClass().getMethod(getterName);
            Object value = getter.invoke(serverErrorMessage);
            return value != null ? value.toString() : null;
        } catch (ReflectiveOperationException ignored) {
            return null;
        }
    }

    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public TradeEntity saveSingleTrade(TradeEntity tradeEntity) {
        // El id pudo quedar asignado por la secuencia si esta entidad participó en un
        // saveAll que hizo rollback; sin limpiarlo, Spring Data ejecutaría un UPDATE
        // (merge) sobre una fila inexistente en vez de un INSERT (persist).
        tradeEntity.setId(null);
        log.debug("Saving single trade matchId: {}", tradeEntity.getMatchId());
        return tradeRepository.saveAndFlush(tradeEntity);
    }

    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public void saveStatusHistory(TradeStatusHistoryEntity history) {
        if (history != null) {
            tradeStatusHistoryRepository.save(history);
        }
    }

    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public void saveStatusHistoryBatch(List<TradeStatusHistoryEntity> histories) {
        List<TradeStatusHistoryEntity> valid = histories.stream()
                .filter(Objects::nonNull)
                .toList();
        if (!valid.isEmpty()) {
            tradeStatusHistoryRepository.saveAll(valid);
        }
    }



}

```

## src/main/java/com/nubo/persistence/data/nasdaq/service/impl/TradeTransactionServiceImpl.java

```java
package com.nubo.persistence.data.nasdaq.service.impl;

import java.math.BigDecimal;
import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import com.nubo.persistence.data.nasdaq.application.properties.PropertiesConfig;
import com.nubo.persistence.data.nasdaq.application.properties.PropertiesContext;
import com.nubo.persistence.data.nasdaq.application.util.ApplicationUtils;
import com.nubo.persistence.data.nasdaq.exception.ServiceException;
import com.nubo.persistence.data.nasdaq.exception.error.ErrorCode;
import com.nubo.persistence.data.nasdaq.models.dto.request.BuyerSideDto;
import com.nubo.persistence.data.nasdaq.models.dto.request.NasdaqInDto;
import com.nubo.persistence.data.nasdaq.models.dto.request.RepoAttributeDto;
import com.nubo.persistence.data.nasdaq.models.dto.request.SellerSideDto;
import com.nubo.persistence.data.nasdaq.models.entity.CountryEntity;
import com.nubo.persistence.data.nasdaq.models.entity.DepositoryEntity;
import com.nubo.persistence.data.nasdaq.models.entity.StatusEntity;
import com.nubo.persistence.data.nasdaq.models.entity.StatusMappingEntity;
import com.nubo.persistence.data.nasdaq.models.entity.TradeEntity;
import com.nubo.persistence.data.nasdaq.models.entity.TradeEquityEntity;
import com.nubo.persistence.data.nasdaq.models.entity.TradeStatusHistoryEntity;
import com.nubo.persistence.data.nasdaq.models.enums.BooleanStatusEnum;
import com.nubo.persistence.data.nasdaq.models.enums.BusinessTradeAttributeEnum;
import com.nubo.persistence.data.nasdaq.models.enums.BusinessTypeEnum;
import com.nubo.persistence.data.nasdaq.models.enums.DepositoryMappingEnum;
import com.nubo.persistence.data.nasdaq.models.enums.MarketEnum;
import com.nubo.persistence.data.nasdaq.models.enums.MarketScopeEnum;
import com.nubo.persistence.data.nasdaq.models.enums.OperationTypeEnum;
import com.nubo.persistence.data.nasdaq.models.enums.RepoSupplementaryEnum;
import com.nubo.persistence.data.nasdaq.models.enums.StatusEnum;
import com.nubo.persistence.data.nasdaq.service.BatchCacheService;
import com.nubo.persistence.data.nasdaq.service.TradeTransactionService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class TradeTransactionServiceImpl implements TradeTransactionService {

    private final PropertiesConfig propertiesConfig;
    private final BatchCacheService batchCacheService;

    @Override
    public TradeEntity buildTradeEntity(NasdaqInDto nasdaqInDto) {
        RepoAttributeDto repoAttributeDto = nasdaqInDto.getRepoAttribute();
        OperationTypeEnum operationTypeEnum = getOperationTypeEnum(repoAttributeDto);

        CountryEntity countryEntity = batchCacheService.findCountryEntityByCode(nasdaqInDto.getCountry());
        if (!Objects.equals(propertiesConfig.getKafkaNuboDataCountry(), countryEntity.getCode())) {
            log.warn("Country code mismatch: expected {}, but found {}", propertiesConfig.getKafkaNuboDataCountry(),
                    countryEntity.getCode());
            throw new ServiceException(ErrorCode.ERROR_VALIDATE_COUNTRY_CODE,
                    "Country code mismatch: expected " + propertiesConfig.getKafkaNuboDataCountry() +
                            ", but found " + countryEntity.getCode());
        }

        StatusMappingEntity statusMappingEntity = batchCacheService
                .findStatusByExternalCode(nasdaqInDto.getTradeStatus());
        BuyerSideDto buyerSideDto = nasdaqInDto.getBuyerSide();
        SellerSideDto sellerSideDto = nasdaqInDto.getSellerSide();
        DepositoryMappingEnum depositoryMappingEnum = DepositoryMappingEnum.fromCountryCode(countryEntity.getCode());
        DepositoryEntity depositoryEntity = batchCacheService.findDepositoryEntity(
                depositoryMappingEnum.getExternalCode(), depositoryMappingEnum.getExternalSystem().getCode());

        final OffsetDateTime offsetDateTime = ApplicationUtils.getOffsetDateTimeNow();
        final LocalDate today = offsetDateTime.toLocalDate();
        final Long matchId = resolveMatchId(nasdaqInDto, operationTypeEnum);
        final LocalDate matchDate = ObjectUtils.isEmpty(nasdaqInDto.getTransactTime())
                ? today
                : ApplicationUtils.convertTimestampToLocalDate(nasdaqInDto.getTransactTime());
        final LocalDate clearingDate = ObjectUtils.isEmpty(nasdaqInDto.getSettlDate())
                ? today
                : ApplicationUtils.convertTimestampToLocalDate(nasdaqInDto.getSettlDate());
        final LocalDate returnClearingDate = ObjectUtils.isEmpty(nasdaqInDto.getTransactTime())
                ? today
                : getReturnClearingDate(repoAttributeDto);

        StatusEntity statusEntity = statusMappingEntity.getStatus();
        log.debug("Trade register matchDate {} , matchId {} , status {}", matchDate, matchId,
                statusEntity.getDescription());

        TradeEntity tradeEntity = TradeEntity.builder()
                .matchDate(matchDate)
                .matchId(matchId)
                .clearingDate(clearingDate)
                .returnClearingDate(returnClearingDate)
                .country(countryEntity)
                .type(batchCacheService.findTypeEntityById(operationTypeEnum.getId()))
                .market(batchCacheService
                        .findMarketEntityByExternalCode(Math.toIntExact(nasdaqInDto.getInstrument().getMarketId())))
                .issuanceMarketId(MarketEnum.SECONDARY.getId())
                .securityTitle(batchCacheService
                        .findSecurityTitleEntityByMnemonic(nasdaqInDto.getInstrument().getSymbol()))
                .participantBuy(batchCacheService.findParticipantEntityByCode(countryEntity,
                        buyerSideDto.getParty().getExecutingFirm()))
                .participantSell(batchCacheService.findParticipantEntityByCode(countryEntity,
                        sellerSideDto.getParty().getExecutingFirm()))
                .custodianBuy(RepoSupplementaryEnum.NOT_CUSTODIAN.getId())
                .custodianSell(RepoSupplementaryEnum.NOT_CUSTODIAN.getId())
                .assignmentMarkBuy(false)
                .assignmentMarkSell(false)
                .finalAssignmentMarkBuy(false)
                .finalAssignmentMarkSell(false)
                .fractionalMarkBuy(false)
                .fractionalMarkSell(false)
                .daysToSettlement(OperationTypeEnum.REPO_TRANSACTION.equals(operationTypeEnum)
                        ? calculateCalendarDays(clearingDate, returnClearingDate)
                        : calculateBusinessDays(matchDate, clearingDate, countryEntity.getId()))
                .repoRate(ObjectUtils.isEmpty(repoAttributeDto) || ObjectUtils.isEmpty(repoAttributeDto.getRate())
                        ? BigDecimal.ZERO
                        : repoAttributeDto.getRate())
                .returnTurnoverValue(
                        ObjectUtils.isEmpty(repoAttributeDto) || ObjectUtils.isEmpty(repoAttributeDto.getReturnAmount())
                                ? BigDecimal.ZERO
                                : repoAttributeDto.getReturnAmount())
                .repurchaseRate(ObjectUtils.isEmpty(repoAttributeDto) || ObjectUtils.isEmpty(repoAttributeDto.getRate())
                        ? BigDecimal.ZERO
                        : repoAttributeDto.getRate())
                .quantity(ObjectUtils.isEmpty(nasdaqInDto.getQuantity())
                        ? BigDecimal.ZERO
                        : nasdaqInDto.getQuantity())
                .price(ObjectUtils.isEmpty(nasdaqInDto.getPrice())
                        ? BigDecimal.ZERO
                        : nasdaqInDto.getPrice())
                .localCurrencyPrice(ObjectUtils.isEmpty(nasdaqInDto.getPrice())
                        ? BigDecimal.ZERO
                        : nasdaqInDto.getPrice())
                .volume(getVolumeByRepoOrSpot(repoAttributeDto, nasdaqInDto.getAmount()))
                .volumeLocalPrice(ObjectUtils.isEmpty(nasdaqInDto.getAmount())
                        ? BigDecimal.ZERO
                        : nasdaqInDto.getAmount())
                .status(statusEntity)
                .buyStatus(statusEntity)
                .sellStatus(statusEntity)
                .currency(batchCacheService.findCurrencyEntityByCode(nasdaqInDto.getCurrency()))
                .tradingSystem(batchCacheService.findTradingSystemEntity(nasdaqInDto.getSourceSystem()))
                .tradingSession(batchCacheService.findTradingSessionEntity(nasdaqInDto.getExchange()))
                .advanceStatus(BooleanStatusEnum.FALSE.asInt())
                .businessType(getBusinessType(repoAttributeDto).getId())
                .marketType(BusinessTradeAttributeEnum.MARKET_TYPE_ID.getId())
                .originType(BusinessTradeAttributeEnum.ORIGIN_TYPE_ID.getId())
                .canceledStatus(BooleanStatusEnum.FALSE.asBoolean())
                .sourceQuoteBuy(batchCacheService.validateSourceQuote(buyerSideDto.getParty()))
                .sourceQuoteSell(batchCacheService.validateSourceQuote(sellerSideDto.getParty()))
                .enteringFirmBuy(buyerSideDto.getParty().getExecutingFirm())
                .enteringFirmSell(sellerSideDto.getParty().getExecutingFirm())
                .forwardPrice(
                        ObjectUtils.isEmpty(repoAttributeDto) || ObjectUtils.isEmpty(repoAttributeDto.getForwardPrice())
                                ? BigDecimal.ZERO
                                : repoAttributeDto.getForwardPrice())
                .totalNetReturn(BigDecimal.ZERO)
                .depository(depositoryEntity)
                .depositoryBuy(depositoryEntity)
                .depositorySell(depositoryEntity)
                .matchTime(offsetDateTime)
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyIp("")
                .lastModifyUser(truncateString(resolveUser(), 250))
                .lastModifyDate(offsetDateTime)
                .build();

        TradeEquityEntity tradeEquityEntity = TradeEquityEntity.builder()
                .trade(tradeEntity)
                .foreignBrokerBuy(buyerSideDto.getParty().getExecutingTrader())
                .foreignBrokerSell(sellerSideDto.getParty().getExecutingTrader())
                .referenceBuy(buyerSideDto.getParty().getCustomerInfo())
                .referenceSell(sellerSideDto.getParty().getCustomerInfo())
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyIp("")
                .lastModifyUser(truncateString(resolveUser(), 250))
                .lastModifyDate(ApplicationUtils.getOffsetDateTimeNow())
                .build();

        tradeEntity.setTradeEquity(tradeEquityEntity);

        return tradeEntity;
    }

    @Override
    public TradeStatusHistoryEntity buildTradeStatusHistory(TradeEntity tradeEntity) {
        if (tradeEntity == null) {
            return null;
        }
        OffsetDateTime now = ApplicationUtils.getOffsetDateTimeNow();
        return TradeStatusHistoryEntity.builder()
                .tradeId(tradeEntity.getId())
                .time(now)
                .status(tradeEntity.getStatus())
                .detail(StatusEnum.REGISTERED.getMessage())
                .lastModifyApplication(truncateString(propertiesConfig.getApiName(), 250))
                .lastModifyIp(truncateString(propertiesConfig.getApiName(), 50))
                .lastModifyUser(truncateString(propertiesConfig.getApiName(), 250))
                .lastModifyDate(now)
                .build();
    }

    /**
     * REPO y mercados fuera de LOCAL/GLOBAL usan el NumericTradeId tal cual;
     * en spot de LOCAL/GLOBAL se antepone el prefijo del mercado.
     */
    private Long resolveMatchId(NasdaqInDto nasdaqInDto, OperationTypeEnum operationTypeEnum) {
        final Long numericTradeId = nasdaqInDto.getNumericTradeId();
        if (OperationTypeEnum.REPO_TRANSACTION.equals(operationTypeEnum)) {
            return numericTradeId;
        }
        if (Boolean.TRUE.equals(propertiesConfig.getKafkaNuboDataPrefixFolio())) {
            return MarketScopeEnum.fromMarketId(nasdaqInDto.getInstrument().getMarketId())
                    .map(scope -> scope.buildMatchId(numericTradeId))
                    .orElse(numericTradeId);
        }
        return numericTradeId;
    }

    private OperationTypeEnum getOperationTypeEnum(RepoAttributeDto repoAttributeDto) {
        if (repoAttributeDto == null) {
            return OperationTypeEnum.SPOT_TRANSACTION;
        }

        Integer repoType = repoAttributeDto.getRepoType();
        if (repoType == null) {
            throw new ServiceException(ErrorCode.TYPE_NOT_FOUND, "RepoType is null");
        }

        if (Integer.valueOf(10).equals(repoType)) {
            return OperationTypeEnum.REPO_TRANSACTION;
        }

        throw new ServiceException(ErrorCode.TYPE_NOT_FOUND,
                "Unsupported RepoType: " + repoType + ". Expected value: 10");
    }

    private LocalDate getReturnClearingDate(RepoAttributeDto repoAttributeDto) {
        if (repoAttributeDto == null || repoAttributeDto.getReturnDate() == null) {
            return null;
        }
        return ApplicationUtils.convertTimestampToLocalDate(repoAttributeDto.getReturnDate());
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

    private boolean isBusinessDay(LocalDate date, Set<LocalDate> holidays) {
        DayOfWeek dow = date.getDayOfWeek();
        boolean weekend = (dow == DayOfWeek.SATURDAY || dow == DayOfWeek.SUNDAY);
        if (weekend)
            return false;
        return !holidays.contains(date);
    }

    private BigDecimal getVolumeByRepoOrSpot(RepoAttributeDto repoAttributeDto, BigDecimal spotVolume) {
        if (repoAttributeDto == null || ObjectUtils.isEmpty(repoAttributeDto.getInitialAmount())) {
            return spotVolume != null ? spotVolume : BigDecimal.ZERO;
        }
        return repoAttributeDto.getInitialAmount();
    }

    private BusinessTypeEnum getBusinessType(RepoAttributeDto repoAttributeDto) {
        OperationTypeEnum typeOperationEnum = getOperationTypeEnum(repoAttributeDto);
        if (OperationTypeEnum.SPOT_TRANSACTION.equals(typeOperationEnum)) {
            return BusinessTypeEnum.NORMAL;
        }
        if (OperationTypeEnum.REPO_TRANSACTION.equals(typeOperationEnum)) {
            return BusinessTypeEnum.REPO_ACCIONES;
        }
        throw new ServiceException(ErrorCode.TYPE_NOT_SUPPORTED, ":" + typeOperationEnum);
    }

    private String resolveUser() {
        String user = PropertiesContext.getClientUser();
        return (user != null && !user.isBlank()) ? user : propertiesConfig.getApiName();
    }

    private String truncateString(String value, int maxLength) {
        if (value == null) {
            return null;
        }
        return value.length() > maxLength ? value.substring(0, maxLength) : value;
    }

}

```
