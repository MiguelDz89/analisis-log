# nbo-png-operacion-vericlear-confirmada

Código fuente completo de producción y configuraciones. Captura local: 28/10/2026.

Incluye 103 archivos Java y 18 archivos de configuración, recursos y compilación.

Cada sección identifica la ruta original y contiene el archivo completo. Los Java conservan sus implementaciones, imports, anotaciones y comentarios. Se excluyen src/test, clases de prueba, resultados de compilación, librerías binarias y herramientas/perfiles de pruebas de rendimiento.

Credenciales literales ocultadas en configuraciones: 0. Las referencias a variables de entorno se conservan.

## Índice

1. `mvnw`
2. `mvnw.cmd`
3. `pom.xml`
4. `.mvn/wrapper/maven-wrapper.properties`
5. `scripts/sql/bug1023_consultar_estados.sql`
6. `scripts/sql/bug1023_rejected_a_cancelada.sql`
7. `src/main/resources/application-dev.yml`
8. `src/main/resources/application-local.yml`
9. `src/main/resources/application-prod.yml`
10. `src/main/resources/application-qa.yml`
11. `src/main/resources/application-uat.yml`
12. `src/main/resources/application.yml`
13. `src/main/resources/banner.txt`
14. `src/main/resources/log/JsonEventLayout_error.json`
15. `src/main/resources/log/JsonEventLayout_info.json`
16. `src/main/resources/log/JsonEventLayout_trace.json`
17. `src/main/resources/log/log4j2-prod.properties`
18. `src/main/resources/log/log4j2.properties`
19. `src/main/java/com/nubo/operation/vericlear/confirmed/OperationVericlearConfirmedApplication.java`
20. `src/main/java/com/nubo/operation/vericlear/confirmed/application/annotations/ValidBigDecimal.java`
21. `src/main/java/com/nubo/operation/vericlear/confirmed/application/config/CacheConfig.java`
22. `src/main/java/com/nubo/operation/vericlear/confirmed/application/config/KafkaConsumerConfig.java`
23. `src/main/java/com/nubo/operation/vericlear/confirmed/application/config/KafkaProducerConfig.java`
24. `src/main/java/com/nubo/operation/vericlear/confirmed/application/config/ValidBigDecimalConfig.java`
25. `src/main/java/com/nubo/operation/vericlear/confirmed/application/config/WebConfig.java`
26. `src/main/java/com/nubo/operation/vericlear/confirmed/application/context/GlobalContext.java`
27. `src/main/java/com/nubo/operation/vericlear/confirmed/application/database/NamingStrategyConfig.java`
28. `src/main/java/com/nubo/operation/vericlear/confirmed/application/database/UpperNamingConfig.java`
29. `src/main/java/com/nubo/operation/vericlear/confirmed/application/properties/PropertiesConfig.java`
30. `src/main/java/com/nubo/operation/vericlear/confirmed/application/properties/PropertiesContext.java`
31. `src/main/java/com/nubo/operation/vericlear/confirmed/application/util/ApplicationUtils.java`
32. `src/main/java/com/nubo/operation/vericlear/confirmed/application/util/RestClientUtils.java`
33. `src/main/java/com/nubo/operation/vericlear/confirmed/application/util/WebClientUtils.java`
34. `src/main/java/com/nubo/operation/vericlear/confirmed/client/email/models/dto/request/EmailTemplateInDto.java`
35. `src/main/java/com/nubo/operation/vericlear/confirmed/client/email/models/dto/response/EmailNuboOutDto.java`
36. `src/main/java/com/nubo/operation/vericlear/confirmed/client/email/service/EmailClient.java`
37. `src/main/java/com/nubo/operation/vericlear/confirmed/client/email/service/impl/EmailClientImpl.java`
38. `src/main/java/com/nubo/operation/vericlear/confirmed/client/kafka/consumer/KafkaNuboListenerAdapter.java`
39. `src/main/java/com/nubo/operation/vericlear/confirmed/client/kafka/producer/KafkaNuboAdapter.java`
40. `src/main/java/com/nubo/operation/vericlear/confirmed/client/operation/cmd/models/dto/request/FractionInDto.java`
41. `src/main/java/com/nubo/operation/vericlear/confirmed/client/operation/cmd/models/dto/response/CountryOutDto.java`
42. `src/main/java/com/nubo/operation/vericlear/confirmed/client/operation/cmd/models/dto/response/DepositoryOutDto.java`
43. `src/main/java/com/nubo/operation/vericlear/confirmed/client/operation/cmd/models/dto/response/GicsOutDto.java`
44. `src/main/java/com/nubo/operation/vericlear/confirmed/client/operation/cmd/models/dto/response/IdentificationTypeOutDto.java`
45. `src/main/java/com/nubo/operation/vericlear/confirmed/client/operation/cmd/models/dto/response/InvestorAccountOutDto.java`
46. `src/main/java/com/nubo/operation/vericlear/confirmed/client/operation/cmd/models/dto/response/InvestorOutDto.java`
47. `src/main/java/com/nubo/operation/vericlear/confirmed/client/operation/cmd/models/dto/response/ParticipantAccountOutDto.java`
48. `src/main/java/com/nubo/operation/vericlear/confirmed/client/operation/cmd/models/dto/response/ParticipantOutDto.java`
49. `src/main/java/com/nubo/operation/vericlear/confirmed/client/operation/cmd/models/dto/response/SettlementOutDto.java`
50. `src/main/java/com/nubo/operation/vericlear/confirmed/client/operation/cmd/models/dto/response/SideOutDto.java`
51. `src/main/java/com/nubo/operation/vericlear/confirmed/client/operation/cmd/models/dto/response/StatusOutDto.java`
52. `src/main/java/com/nubo/operation/vericlear/confirmed/client/operation/cmd/models/dto/response/TaxStatusOutDto.java`
53. `src/main/java/com/nubo/operation/vericlear/confirmed/client/operation/cmd/models/dto/response/TradingSystemOutDto.java`
54. `src/main/java/com/nubo/operation/vericlear/confirmed/client/operation/cmd/models/dto/response/TypeOutDto.java`
55. `src/main/java/com/nubo/operation/vericlear/confirmed/client/operation/cmd/service/OperationCmdClient.java`
56. `src/main/java/com/nubo/operation/vericlear/confirmed/client/operation/cmd/service/impl/OperationCmdClientImpl.java`
57. `src/main/java/com/nubo/operation/vericlear/confirmed/exception/ClientException.java`
58. `src/main/java/com/nubo/operation/vericlear/confirmed/exception/ServiceException.java`
59. `src/main/java/com/nubo/operation/vericlear/confirmed/exception/TradeNotYetAvailableException.java`
60. `src/main/java/com/nubo/operation/vericlear/confirmed/exception/error/ErrorCode.java`
61. `src/main/java/com/nubo/operation/vericlear/confirmed/exception/error/ErrorResponse.java`
62. `src/main/java/com/nubo/operation/vericlear/confirmed/exception/error/ErrorValidation.java`
63. `src/main/java/com/nubo/operation/vericlear/confirmed/exception/handler/GlobalExceptionHandler.java`
64. `src/main/java/com/nubo/operation/vericlear/confirmed/exception/kafka/KafkaErrorBuild.java`
65. `src/main/java/com/nubo/operation/vericlear/confirmed/helpers/ExceptionMessageUtil.java`
66. `src/main/java/com/nubo/operation/vericlear/confirmed/helpers/MapperUtil.java`
67. `src/main/java/com/nubo/operation/vericlear/confirmed/helpers/ValidatorUtil.java`
68. `src/main/java/com/nubo/operation/vericlear/confirmed/models/dto/request/AutomaticAssignmentInDto.java`
69. `src/main/java/com/nubo/operation/vericlear/confirmed/models/dto/request/DateInDto.java`
70. `src/main/java/com/nubo/operation/vericlear/confirmed/models/dto/request/TradeConfirmVericlearInDto.java`
71. `src/main/java/com/nubo/operation/vericlear/confirmed/models/dto/response/ErrorMessageVericlearOutDto.java`
72. `src/main/java/com/nubo/operation/vericlear/confirmed/models/dto/response/MetaDataOutDto.java`
73. `src/main/java/com/nubo/operation/vericlear/confirmed/models/dto/response/NotificationOutDto.java`
74. `src/main/java/com/nubo/operation/vericlear/confirmed/models/entity/CountryEntity.java`
75. `src/main/java/com/nubo/operation/vericlear/confirmed/models/entity/DepositoryEntity.java`
76. `src/main/java/com/nubo/operation/vericlear/confirmed/models/entity/DepositoryMappingEntity.java`
77. `src/main/java/com/nubo/operation/vericlear/confirmed/models/entity/DirectDepositoryEntity.java`
78. `src/main/java/com/nubo/operation/vericlear/confirmed/models/entity/IdentificationTypeEntity.java`
79. `src/main/java/com/nubo/operation/vericlear/confirmed/models/entity/InvestorAccountEntity.java`
80. `src/main/java/com/nubo/operation/vericlear/confirmed/models/entity/InvestorEntity.java`
81. `src/main/java/com/nubo/operation/vericlear/confirmed/models/entity/ParticipantAccountEntity.java`
82. `src/main/java/com/nubo/operation/vericlear/confirmed/models/entity/ParticipantBankAccountEntity.java`
83. `src/main/java/com/nubo/operation/vericlear/confirmed/models/entity/ParticipantEntity.java`
84. `src/main/java/com/nubo/operation/vericlear/confirmed/models/entity/SettlementEntity.java`
85. `src/main/java/com/nubo/operation/vericlear/confirmed/models/entity/SettlementKey.java`
86. `src/main/java/com/nubo/operation/vericlear/confirmed/models/entity/SideEntity.java`
87. `src/main/java/com/nubo/operation/vericlear/confirmed/models/entity/StatusEntity.java`
88. `src/main/java/com/nubo/operation/vericlear/confirmed/models/entity/StatusMappingEntity.java`
89. `src/main/java/com/nubo/operation/vericlear/confirmed/models/entity/TradeConfirmEntity.java`
90. `src/main/java/com/nubo/operation/vericlear/confirmed/models/entity/TradeEntity.java`
91. `src/main/java/com/nubo/operation/vericlear/confirmed/models/entity/TradeStatusHistoryEntity.java`
92. `src/main/java/com/nubo/operation/vericlear/confirmed/models/entity/TradeStatusHistoryKey.java`
93. `src/main/java/com/nubo/operation/vericlear/confirmed/models/entity/TypeEntity.java`
94. `src/main/java/com/nubo/operation/vericlear/confirmed/models/enums/CountryCodeEnum.java`
95. `src/main/java/com/nubo/operation/vericlear/confirmed/models/enums/DirectAllocationEnum.java`
96. `src/main/java/com/nubo/operation/vericlear/confirmed/models/enums/ExternalSystemEnum.java`
97. `src/main/java/com/nubo/operation/vericlear/confirmed/models/enums/NotificationEnum.java`
98. `src/main/java/com/nubo/operation/vericlear/confirmed/models/enums/NotificationTypeEnum.java`
99. `src/main/java/com/nubo/operation/vericlear/confirmed/models/enums/PropertiesEnum.java`
100. `src/main/java/com/nubo/operation/vericlear/confirmed/models/enums/ScreenEnum.java`
101. `src/main/java/com/nubo/operation/vericlear/confirmed/models/enums/SideEnum.java`
102. `src/main/java/com/nubo/operation/vericlear/confirmed/models/enums/StatusEnum.java`
103. `src/main/java/com/nubo/operation/vericlear/confirmed/models/enums/TypeEnum.java`
104. `src/main/java/com/nubo/operation/vericlear/confirmed/models/enums/VersionApiEnum.java`
105. `src/main/java/com/nubo/operation/vericlear/confirmed/repository/DepositoryMappingRepository.java`
106. `src/main/java/com/nubo/operation/vericlear/confirmed/repository/DirectDepositoryRepository.java`
107. `src/main/java/com/nubo/operation/vericlear/confirmed/repository/InvestorAccountRepository.java`
108. `src/main/java/com/nubo/operation/vericlear/confirmed/repository/ParticipantAccountRepository.java`
109. `src/main/java/com/nubo/operation/vericlear/confirmed/repository/ParticipantBankAccountRepository.java`
110. `src/main/java/com/nubo/operation/vericlear/confirmed/repository/SettlementRepository.java`
111. `src/main/java/com/nubo/operation/vericlear/confirmed/repository/StatusMappingRepository.java`
112. `src/main/java/com/nubo/operation/vericlear/confirmed/repository/TradeConfirmRepository.java`
113. `src/main/java/com/nubo/operation/vericlear/confirmed/repository/TradeRepository.java`
114. `src/main/java/com/nubo/operation/vericlear/confirmed/repository/TradeStatusHistoryRepository.java`
115. `src/main/java/com/nubo/operation/vericlear/confirmed/repository/TypeRepository.java`
116. `src/main/java/com/nubo/operation/vericlear/confirmed/service/BatchCacheService.java`
117. `src/main/java/com/nubo/operation/vericlear/confirmed/service/ProcessMessageService.java`
118. `src/main/java/com/nubo/operation/vericlear/confirmed/service/TradeTransactionService.java`
119. `src/main/java/com/nubo/operation/vericlear/confirmed/service/impl/BatchCacheServiceImpl.java`
120. `src/main/java/com/nubo/operation/vericlear/confirmed/service/impl/ProcessMessageServiceImpl.java`
121. `src/main/java/com/nubo/operation/vericlear/confirmed/service/impl/TradeTransactionServiceImpl.java`

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
		<version>4.1.1</version>
		<relativePath/>
	</parent>
	<groupId>com.nubo.operation.vericlear.confirmed</groupId>
	<artifactId>operation-vericlear-confirmed</artifactId>
	<version>0.19.0-beta.4</version>
	<name>${project.artifactId}</name>
	<description>Operation confirmed vericlear</description>

	<properties>
		<java.version>21</java.version>
        <test.skip>false</test.skip>
        <datasource.url.application.name>ApplicationName=${project.artifactId}</datasource.url.application.name>
        <hikari.pool.name>${project.artifactId}-pool</hikari.pool.name>
        <!-- Override necesario para los CVE de Log4j -->
        <log4j2.version>2.25.4</log4j2.version>
        <tomcat.version>11.0.25</tomcat.version>
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
        <!-- WebFlux for WebClient -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-webflux</artifactId>
            <exclusions>
                <!-- Exclude native epoll transport to avoid CVE-2026-42577 if not needed -->
                <exclusion>
                    <groupId>io.netty</groupId>
                    <artifactId>netty-transport-native-epoll</artifactId>
                </exclusion>
            </exclusions>
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
distributionUrl=https://repo.maven.apache.org/maven2/org/apache/maven/apache-maven/3.9.11/apache-maven-3.9.11-bin.zip

```

## scripts/sql/bug1023_consultar_estados.sql

```sql
-- PostgreSQL. El servicio filtra por EXTERNAL_SYSTEM y EXTERNAL_CODE,
-- sin filtrar CATEGORY. Consultar todos permite detectar duplicados.
SELECT sm."STATUS_MAPPING_ID", sm."EXTERNAL_SYSTEM", sm."EXTERNAL_CODE",
       sm."CATEGORY" AS "MAPPING_CATEGORY", sm."EXTERNAL_DESCRIPTION",
       s."STATUS_ID", s."DESCRIPTION", s."CATEGORY" AS "STATUS_CATEGORY", s."DETAIL"
FROM "NUANBODB"."STATUS_MAPPING" sm
LEFT JOIN "NUANBODB"."STATUS" s ON s."STATUS_ID" = sm."STATUS_ID"
WHERE sm."EXTERNAL_SYSTEM" = 'CAMARA'
ORDER BY sm."EXTERNAL_CODE", sm."STATUS_MAPPING_ID";

-- Debe existir CANCELADA / REGISTRO_OPERACION con ID 11.
SELECT * FROM "NUANBODB"."STATUS" WHERE "STATUS_ID" = 11;

-- La anotacion JPA dice length=20, pero este codigo requiere 32 caracteres.
-- La longitud real de la BD es la que determina si puede insertarse.
SELECT column_name, data_type, character_maximum_length, column_default, is_identity
FROM information_schema.columns
WHERE table_schema = 'NUANBODB' AND table_name = 'STATUS_MAPPING'
  AND column_name IN ('EXTERNAL_CODE', 'STATUS_MAPPING_ID');

```

## scripts/sql/bug1023_rejected_a_cancelada.sql

```sql
-- PostgreSQL. Ejecutar manualmente en el ambiente correspondiente.
-- No crea un nuevo STATUS: reutiliza CANCELADA (11).
-- Repetible: si el mapeo correcto ya existe no modifica nada.
BEGIN;

-- Serializa la comprobacion y la insercion, incluso sin indice unico.
LOCK TABLE "NUANBODB"."STATUS_MAPPING" IN SHARE ROW EXCLUSIVE MODE;

DO $bug1023$
DECLARE
    v_code CONSTANT text := 'EQUITY_SPOT_DEAL_STATUS_REJECTED';
    v_count integer;
    v_length integer;
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM "NUANBODB"."STATUS"
        WHERE "STATUS_ID" = 11 AND "DESCRIPTION" = 'CANCELADA'
          AND "CATEGORY" = 'REGISTRO_OPERACION'
    ) THEN
        RAISE EXCEPTION 'Se esperaba STATUS_ID=11, CANCELADA / REGISTRO_OPERACION';
    END IF;

    SELECT character_maximum_length INTO v_length
    FROM information_schema.columns
    WHERE table_schema = 'NUANBODB' AND table_name = 'STATUS_MAPPING'
      AND column_name = 'EXTERNAL_CODE';
    IF v_length < length(v_code) THEN
        RAISE EXCEPTION 'EXTERNAL_CODE admite % caracteres; se requieren %. Revisar DDL antes de ejecutar.',
            v_length, length(v_code);
    END IF;

    SELECT count(*) INTO v_count FROM "NUANBODB"."STATUS_MAPPING"
    WHERE "EXTERNAL_SYSTEM" = 'CAMARA' AND "EXTERNAL_CODE" = v_code;
    IF v_count > 1 THEN
        RAISE EXCEPTION 'Existen mapeos duplicados para CAMARA / REJECTED; corregir antes de continuar';
    ELSIF v_count = 1 THEN
        IF NOT EXISTS (
            SELECT 1 FROM "NUANBODB"."STATUS_MAPPING"
            WHERE "EXTERNAL_SYSTEM" = 'CAMARA' AND "EXTERNAL_CODE" = v_code
              AND "STATUS_ID" = 11 AND "CATEGORY" = 'NEGOCIACION'
        ) THEN
            RAISE EXCEPTION 'El mapeo REJECTED existente difiere del esperado (11 / NEGOCIACION)';
        END IF;
        RAISE NOTICE 'El mapeo REJECTED -> CANCELADA (11) ya existe';
    ELSE
        -- STATUS_MAPPING_ID usa el identity/default de la BD, segun la entidad JPA.
        INSERT INTO "NUANBODB"."STATUS_MAPPING" (
            "EXTERNAL_SYSTEM", "EXTERNAL_CODE", "CATEGORY", "EXTERNAL_DESCRIPTION",
            "STATUS_ID", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP"
        ) VALUES (
            'CAMARA', v_code, 'NEGOCIACION', 'Operacion rechazada en Vericlear; cancelada en nuBO',
            11, current_user, 'BUG1023', LOCALTIMESTAMP,
            COALESCE(inet_client_addr()::text, '127.0.0.1')
        );
    END IF;
END;
$bug1023$;

SELECT sm."STATUS_MAPPING_ID", sm."EXTERNAL_CODE", s."STATUS_ID", s."DESCRIPTION"
FROM "NUANBODB"."STATUS_MAPPING" sm
JOIN "NUANBODB"."STATUS" s ON s."STATUS_ID" = sm."STATUS_ID"
WHERE sm."EXTERNAL_SYSTEM" = 'CAMARA'
  AND sm."EXTERNAL_CODE" = 'EQUITY_SPOT_DEAL_STATUS_REJECTED';

COMMIT;

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
        show-sql: "false"
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
        concurrency: ${KAFKA_NUBO_CONCURRENCY:3}
        bootstrap-servers: ${KAFKA_NUBO_BOOTSTRAP_SERVER}
        auto-offset-reset: ${KAFKA_NUBO_AUTO_OFFSET_RESET:latest}
        security:
            protocol: ${KAFKA_PROPERTIES_SECURITY_PROTOCOL}
        sasl:
            mechanism: ${KAFKA_PROPERTIES_SASL_MECHANISM}
            jaas:
                config: ${KAFKA_PROPERTIES_SASL_JAAS_CONFIG}
        consumer:
            topic-name-vericlear-confirm: ${KAFKA_NUBO_TOPIC_NAME_OPERATION_VERICLEAR_CONFIRM}
            group-id: ${KAFKA_NUBO_GROUP_ID}
            topic-name-automatic-assignment: ${KAFKA_NUBO_TOPIC_AUTOMATIC_ASSIGNMENT}
        producer:
            topic-name-error-message-vericlear: ${KAFKA_NUBO_TOPIC_ERROR_MESSAGE_VERICLEAR_CONFIRM}
            topic-name-notification-request: ${KAFKA_NUBO_NOTIFICATION_REQUEST_TOPIC}
client:
    nubo:
        url-operation-cmd: ${NUBO_URL_OPERATION_CMD}
        url-email-api: ${NUBO_URL_EMAIL_API}

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
        show-sql: "false"
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
        concurrency: ${KAFKA_NUBO_CONCURRENCY:3}
        bootstrap-servers: ${KAFKA_NUBO_BOOTSTRAP_SERVER}
        auto-offset-reset: ${KAFKA_NUBO_AUTO_OFFSET_RESET:latest}
        security:
            protocol: PLAINTEXT
        sasl:
            mechanism: PLAIN
            jaas:
                config: ""
        consumer:
            topic-name-vericlear-confirm: ${KAFKA_NUBO_TOPIC_NAME_OPERATION_VERICLEAR_CONFIRM}
            group-id: ${KAFKA_NUBO_GROUP_ID}
            topic-name-automatic-assignment: ${KAFKA_NUBO_TOPIC_AUTOMATIC_ASSIGNMENT}
        producer:
            topic-name-error-message-vericlear: ${KAFKA_NUBO_TOPIC_ERROR_MESSAGE_VERICLEAR_CONFIRM}
            topic-name-notification-request: ${KAFKA_NUBO_NOTIFICATION_REQUEST_TOPIC}
client:
    nubo:
        url-operation-cmd: ${NUBO_URL_OPERATION_CMD}
        url-email-api: ${NUBO_URL_EMAIL_API}

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
        show-sql: "false"
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
        concurrency: ${KAFKA_NUBO_CONCURRENCY:3}
        bootstrap-servers: ${KAFKA_NUBO_BOOTSTRAP_SERVER}
        auto-offset-reset: ${KAFKA_NUBO_AUTO_OFFSET_RESET:latest}
        security:
            protocol: ${KAFKA_PROPERTIES_SECURITY_PROTOCOL}
        sasl:
            mechanism: ${KAFKA_PROPERTIES_SASL_MECHANISM}
            jaas:
                config: ${KAFKA_PROPERTIES_SASL_JAAS_CONFIG}
        consumer:
            topic-name-vericlear-confirm: ${KAFKA_NUBO_TOPIC_NAME_OPERATION_VERICLEAR_CONFIRM}
            group-id: ${KAFKA_NUBO_GROUP_ID}
            topic-name-automatic-assignment: ${KAFKA_NUBO_TOPIC_AUTOMATIC_ASSIGNMENT}
        producer:
            topic-name-error-message-vericlear: ${KAFKA_NUBO_TOPIC_ERROR_MESSAGE_VERICLEAR_CONFIRM}
            topic-name-notification-request: ${KAFKA_NUBO_NOTIFICATION_REQUEST_TOPIC}
client:
    nubo:
        url-operation-cmd: ${NUBO_URL_OPERATION_CMD}
        url-email-api: ${NUBO_URL_EMAIL_API}

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
        show-sql: "false"
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
        concurrency: ${KAFKA_NUBO_CONCURRENCY:3}
        bootstrap-servers: ${KAFKA_NUBO_BOOTSTRAP_SERVER}
        auto-offset-reset: ${KAFKA_NUBO_AUTO_OFFSET_RESET:latest}
        security:
            protocol: ${KAFKA_PROPERTIES_SECURITY_PROTOCOL}
        sasl:
            mechanism: ${KAFKA_PROPERTIES_SASL_MECHANISM}
            jaas:
                config: ${KAFKA_PROPERTIES_SASL_JAAS_CONFIG}
        consumer:
            topic-name-vericlear-confirm: ${KAFKA_NUBO_TOPIC_NAME_OPERATION_VERICLEAR_CONFIRM}
            group-id: ${KAFKA_NUBO_GROUP_ID}
            topic-name-automatic-assignment: ${KAFKA_NUBO_TOPIC_AUTOMATIC_ASSIGNMENT}
        producer:
            topic-name-error-message-vericlear: ${KAFKA_NUBO_TOPIC_ERROR_MESSAGE_VERICLEAR_CONFIRM}
            topic-name-notification-request: ${KAFKA_NUBO_NOTIFICATION_REQUEST_TOPIC}
client:
    nubo:
        url-operation-cmd: ${NUBO_URL_OPERATION_CMD}
        url-email-api: ${NUBO_URL_EMAIL_API}

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
        show-sql: "false"
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
        concurrency: ${KAFKA_NUBO_CONCURRENCY:3}
        bootstrap-servers: ${KAFKA_NUBO_BOOTSTRAP_SERVER}
        auto-offset-reset: ${KAFKA_NUBO_AUTO_OFFSET_RESET:latest}
        security:
            protocol: ${KAFKA_PROPERTIES_SECURITY_PROTOCOL}
        sasl:
            mechanism: ${KAFKA_PROPERTIES_SASL_MECHANISM}
            jaas:
                config: ${KAFKA_PROPERTIES_SASL_JAAS_CONFIG}
        consumer:
            topic-name-vericlear-confirm: ${KAFKA_NUBO_TOPIC_NAME_OPERATION_VERICLEAR_CONFIRM}
            group-id: ${KAFKA_NUBO_GROUP_ID}
            topic-name-automatic-assignment: ${KAFKA_NUBO_TOPIC_AUTOMATIC_ASSIGNMENT}
        producer:
            topic-name-error-message-vericlear: ${KAFKA_NUBO_TOPIC_ERROR_MESSAGE_VERICLEAR_CONFIRM}
            topic-name-notification-request: ${KAFKA_NUBO_NOTIFICATION_REQUEST_TOPIC}
client:
    nubo:
        url-operation-cmd: ${NUBO_URL_OPERATION_CMD}
        url-email-api: ${NUBO_URL_EMAIL_API}

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
 ,-----. ,------. ,------.,------.   ,---. ,--------.,--. ,-----. ,--.  ,--. ,--.   ,--.,------.,------. ,--. ,-----.,--.   ,------.  ,---.  ,------.   ,-----. ,-----. ,--.  ,--.,------.,--.,------. ,--.   ,--.,------.,------.
'  .-.  '|  .--. '|  .---'|  .--. ' /  O  \'--.  .--'|  |'  .-.  '|  ,'.|  |  \  `.'  / |  .---'|  .--. '|  |'  .--./|  |   |  .---' /  O  \ |  .--. ' '  .--./'  .-.  '|  ,'.|  ||  .---'|  ||  .--. '|   `.'   ||  .---'|  .-.  \
|  | |  ||  '--' ||  `--, |  '--'.'|  .-.  |  |  |   |  ||  | |  ||  |' '  |   \     /  |  `--, |  '--'.'|  ||  |    |  |   |  `--, |  .-.  ||  '--'.' |  |    |  | |  ||  |' '  ||  `--, |  ||  '--'.'|  |'.'|  ||  `--, |  |  \  :
'  '-'  '|  | --' |  `---.|  |\  \ |  | |  |  |  |   |  |'  '-'  '|  | `   |    \   /   |  `---.|  |\  \ |  |'  '--'\|  '--.|  `---.|  | |  ||  |\  \  '  '--'\'  '-'  '|  | `   ||  |`   |  ||  |\  \ |  |   |  ||  `---.|  '--'  /
 `-----' `--'     `------'`--' '--'`--' `--'  `--'   `--' `-----' `--'  `--'     `-'    `------'`--' '--'`--' `-----'`-----'`------'`--' `--'`--' '--'  `-----' `-----' `--'  `--'`--'    `--'`--' '--'`--'   `--'`------'`-------'

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

## src/main/java/com/nubo/operation/vericlear/confirmed/OperationVericlearConfirmedApplication.java

```java
package com.nubo.operation.vericlear.confirmed;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class OperationVericlearConfirmedApplication {

	public static void main(String[] args) {
		SpringApplication.run(OperationVericlearConfirmedApplication.class, args);
	}

}

```

## src/main/java/com/nubo/operation/vericlear/confirmed/application/annotations/ValidBigDecimal.java

```java
package com.nubo.operation.vericlear.confirmed.application.annotations;


import com.nubo.operation.vericlear.confirmed.application.config.ValidBigDecimalConfig;
import jakarta.validation.Constraint;
import jakarta.validation.Payload;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

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

## src/main/java/com/nubo/operation/vericlear/confirmed/application/config/CacheConfig.java

```java
package com.nubo.operation.vericlear.confirmed.application.config;

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
                buildCache("types", 1, TimeUnit.HOURS),
                buildCache("depositoryMapping", 1, TimeUnit.HOURS),
                buildCache("statusMapping", 10, TimeUnit.MINUTES)));

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

## src/main/java/com/nubo/operation/vericlear/confirmed/application/config/KafkaConsumerConfig.java

```java
package com.nubo.operation.vericlear.confirmed.application.config;

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
import org.springframework.kafka.annotation.EnableKafka;
import org.springframework.kafka.config.ConcurrentKafkaListenerContainerFactory;
import org.springframework.kafka.core.ConsumerFactory;
import org.springframework.kafka.core.DefaultKafkaConsumerFactory;
import org.springframework.kafka.listener.DefaultErrorHandler;
import org.springframework.kafka.listener.ListenerExecutionFailedException;
import org.springframework.kafka.support.KafkaHeaders;
import org.springframework.kafka.support.serializer.DeserializationException;
import org.springframework.kafka.support.serializer.ErrorHandlingDeserializer;
import org.springframework.kafka.support.serializer.JacksonJsonDeserializer;
import org.springframework.util.backoff.FixedBackOff;

import com.nubo.operation.vericlear.confirmed.application.properties.PropertiesConfig;
import com.nubo.operation.vericlear.confirmed.exception.ServiceException;
import com.nubo.operation.vericlear.confirmed.exception.error.ErrorCode;
import com.nubo.operation.vericlear.confirmed.exception.kafka.KafkaErrorBuild;
import com.nubo.operation.vericlear.confirmed.models.dto.request.AutomaticAssignmentInDto;
import com.nubo.operation.vericlear.confirmed.models.dto.request.TradeConfirmVericlearInDto;

import lombok.RequiredArgsConstructor;

@EnableKafka
@Configuration
@RequiredArgsConstructor
public class KafkaConsumerConfig {

    private final Environment environment;
    private final PropertiesConfig propertiesConfig;

    private <T> ConsumerFactory<String, T> consumerFactoryKafkaNubo(Class<T> responseType) {
        Map<String, Object> configProps = new HashMap<>();
        configProps.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, propertiesConfig.getKafkaNuboBootstrapServers());
        configProps.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);
        configProps.put(ConsumerConfig.GROUP_ID_CONFIG, propertiesConfig.getKafkaNuboConsumerGroupId());
        configProps.put(ConsumerConfig.AUTO_OFFSET_RESET_CONFIG, propertiesConfig.getKafkaNuboAutoOffsetReset());
        configProps.put("security.protocol", propertiesConfig.getKafkaNuboSecurityProtocol());

        configProps.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, ErrorHandlingDeserializer.class);
        configProps.put(ErrorHandlingDeserializer.VALUE_DESERIALIZER_CLASS, JacksonJsonDeserializer.class);
        configProps.put(JacksonJsonDeserializer.VALUE_DEFAULT_TYPE, responseType);
        configProps.put(JacksonJsonDeserializer.TRUSTED_PACKAGES, "com.nubo.operation.vericlear.confirmed");

        if (!isLocalProfile()) {
            configProps.put("sasl.mechanism", propertiesConfig.getKafkaNuboSaslMechanism());
            configProps.put("sasl.jaas.config", propertiesConfig.getKafkaNuboSaslJaasConfig());
        }

        return new DefaultKafkaConsumerFactory<>(
                configProps,
                new StringDeserializer(),
                new ErrorHandlingDeserializer<>(new JacksonJsonDeserializer<>(responseType)));
    }

    @Bean("kafkaNuboListenerContainerFactory")
    ConcurrentKafkaListenerContainerFactory<String, TradeConfirmVericlearInDto> kafkaNuboListenerContainerFactory(
            DefaultErrorHandler errorHandler) {
        ConcurrentKafkaListenerContainerFactory<String, TradeConfirmVericlearInDto> factory = new ConcurrentKafkaListenerContainerFactory<>();
        factory.setConsumerFactory(consumerFactoryKafkaNubo(TradeConfirmVericlearInDto.class));
        factory.setConcurrency(propertiesConfig.getKafkaNuboConcurrency());
        factory.setCommonErrorHandler(errorHandler);
        factory.getContainerProperties().setDeliveryAttemptHeader(true);

        return factory;
    }

    @Bean("kafkaNuboListenerContainerFactoryAutomaticAssignment")
    ConcurrentKafkaListenerContainerFactory<String, AutomaticAssignmentInDto> kafkaNuboListenerContainerFactoryAutomaticAssignment(
            DefaultErrorHandler errorHandler) {
        ConcurrentKafkaListenerContainerFactory<String, AutomaticAssignmentInDto> factory = new ConcurrentKafkaListenerContainerFactory<>();
        factory.setConsumerFactory(consumerFactoryKafkaNubo(AutomaticAssignmentInDto.class));
        factory.setCommonErrorHandler(errorHandler);
        factory.getContainerProperties().setDeliveryAttemptHeader(true);

        return factory;
    }

    @Bean
    DefaultErrorHandler kafkaErrorHandler(KafkaErrorBuild kafkaErrorBuilder) {
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

## src/main/java/com/nubo/operation/vericlear/confirmed/application/config/KafkaProducerConfig.java

```java
package com.nubo.operation.vericlear.confirmed.application.config;

import java.util.HashMap;
import java.util.Map;

import org.apache.kafka.clients.producer.ProducerConfig;
import org.apache.kafka.common.serialization.StringSerializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.kafka.core.DefaultKafkaProducerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.core.ProducerFactory;
import org.springframework.kafka.support.serializer.JacksonJsonSerializer;

import com.nubo.operation.vericlear.confirmed.application.properties.PropertiesConfig;

import lombok.RequiredArgsConstructor;

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

    @Bean("retryKafkaNuboTemplate")
    public KafkaTemplate<String, Object> retryKafkaNuboTemplate() {
        Map<String, Object> configProps = new HashMap<>();
        configProps.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, propertiesConfig.getKafkaNuboBootstrapServers());
        configProps.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class);
        configProps.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, JacksonJsonSerializer.class);
        configProps.put(JacksonJsonSerializer.ADD_TYPE_INFO_HEADERS, false);
        configProps.put("security.protocol", propertiesConfig.getKafkaNuboSecurityProtocol());

        if (!isLocalProfile()) {
            configProps.put("sasl.mechanism", propertiesConfig.getKafkaNuboSaslMechanism());
            configProps.put("sasl.jaas.config", propertiesConfig.getKafkaNuboSaslJaasConfig());
        }

        return new KafkaTemplate<>(new DefaultKafkaProducerFactory<>(configProps));
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

## src/main/java/com/nubo/operation/vericlear/confirmed/application/config/ValidBigDecimalConfig.java

```java
package com.nubo.operation.vericlear.confirmed.application.config;

import com.nubo.operation.vericlear.confirmed.application.annotations.ValidBigDecimal;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

import java.math.BigDecimal;

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

## src/main/java/com/nubo/operation/vericlear/confirmed/application/config/WebConfig.java

```java
package com.nubo.operation.vericlear.confirmed.application.config;

import io.netty.channel.ChannelOption;
import io.netty.handler.timeout.ReadTimeoutHandler;
import io.netty.handler.timeout.WriteTimeoutHandler;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.http.HttpMethod;
import org.springframework.http.client.reactive.ReactorClientHttpConnector;
import org.springframework.web.client.RestClient;
import org.springframework.web.reactive.function.client.ExchangeStrategies;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.i18n.SessionLocaleResolver;
import reactor.netty.http.client.HttpClient;
import reactor.netty.resources.ConnectionProvider;

import java.time.Duration;
import java.util.Locale;
import java.util.concurrent.TimeUnit;

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

    @Bean
    public WebClient webClient() {
        ConnectionProvider connectionProvider = ConnectionProvider.builder("custom")
                .maxConnections(500)
                .maxIdleTime(Duration.ofSeconds(20))
                .maxLifeTime(Duration.ofSeconds(60))
                .pendingAcquireTimeout(Duration.ofSeconds(60))
                .evictInBackground(Duration.ofSeconds(120))
                .build();

        HttpClient httpClient = HttpClient.create(connectionProvider)
                .option(ChannelOption.CONNECT_TIMEOUT_MILLIS, 10000)
                .responseTimeout(Duration.ofSeconds(30))
                .doOnConnected(conn ->
                        conn.addHandlerLast(new ReadTimeoutHandler(30, TimeUnit.SECONDS))
                                .addHandlerLast(new WriteTimeoutHandler(30, TimeUnit.SECONDS)));

        ExchangeStrategies strategies = ExchangeStrategies.builder()
                .codecs(configurer -> configurer
                        .defaultCodecs()
                        .maxInMemorySize(16 * 1024 * 1024))  // 16MB buffer
                .build();

        return WebClient.builder()
                .clientConnector(new ReactorClientHttpConnector(httpClient))
                .exchangeStrategies(strategies)
                .build();
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
                .allowCredentials(true);
    }

}

```

## src/main/java/com/nubo/operation/vericlear/confirmed/application/context/GlobalContext.java

```java
package com.nubo.operation.vericlear.confirmed.application.context;

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

## src/main/java/com/nubo/operation/vericlear/confirmed/application/database/NamingStrategyConfig.java

```java
package com.nubo.operation.vericlear.confirmed.application.database;

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

## src/main/java/com/nubo/operation/vericlear/confirmed/application/database/UpperNamingConfig.java

```java
package com.nubo.operation.vericlear.confirmed.application.database;

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

## src/main/java/com/nubo/operation/vericlear/confirmed/application/properties/PropertiesConfig.java

```java
package com.nubo.operation.vericlear.confirmed.application.properties;

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

    @Value("${kafka.nubo.concurrency:3}")
    private Integer kafkaNuboConcurrency;

    @Value("${kafka.nubo.consumer.topic-name-vericlear-confirm}")
    private String kafkaNuboConsumerTopicNameVericlearConfirm;

    @Value("${kafka.nubo.consumer.group-id}")
    private String kafkaNuboConsumerGroupId;

    @Value("${kafka.nubo.auto-offset-reset}")
    private String kafkaNuboAutoOffsetReset;

    @Value("${kafka.nubo.producer.topic-name-notification-request}")
    private String kafkaNuboProducerTopicNameNotifications;

    @Value("${kafka.nubo.producer.topic-name-error-message-vericlear}")
    private String kafkaNuboProducerTopicNameErrorMessage;

    @Value("${client.nubo.url-operation-cmd}")
    private String urlNuboOperationCmd;

    @Value("${kafka.nubo.consumer.topic-name-automatic-assignment}")
    private String kafkaNuboConsumerTopicNameAutomaticAssignment;

    @Value("${client.nubo.url-email-api}")
    private String urlNuboEmailNotification;

}

```

## src/main/java/com/nubo/operation/vericlear/confirmed/application/properties/PropertiesContext.java

```java
package com.nubo.operation.vericlear.confirmed.application.properties;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import com.nubo.operation.vericlear.confirmed.application.context.GlobalContext;
import com.nubo.operation.vericlear.confirmed.application.util.ApplicationUtils;
import com.nubo.operation.vericlear.confirmed.models.enums.PropertiesEnum;

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

    public static String getAuthToken() {
        return GlobalContext.getPropertyString(PropertiesEnum.AUTH_TOKEN.getValue());
    }

    public static String getKafkaTopic() {
        return GlobalContext.getPropertyString(PropertiesEnum.KAFKA_TOPIC.getValue());
    }

    public static String getKafkaPartition() {
        return GlobalContext.getPropertyString(PropertiesEnum.KAFKA_PARTITION.getValue());
    }

    public static String getKafkaOffset() {
        return GlobalContext.getPropertyString(PropertiesEnum.KAFKA_OFFSET.getValue());
    }

}

```

## src/main/java/com/nubo/operation/vericlear/confirmed/application/util/ApplicationUtils.java

```java
package com.nubo.operation.vericlear.confirmed.application.util;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.OffsetDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;

import org.springframework.stereotype.Component;

import com.nubo.operation.vericlear.confirmed.exception.ServiceException;
import com.nubo.operation.vericlear.confirmed.exception.error.ErrorCode;

import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import tools.jackson.core.JacksonException;
import tools.jackson.databind.JsonNode;
import tools.jackson.databind.ObjectMapper;

@Component
@RequiredArgsConstructor
public class ApplicationUtils {

    private final ObjectMapper objectMapper;

    private static ObjectMapper MAPPER;

    private static final ZoneId SERVER_ZONE_ID = ZoneId.systemDefault();
    private static final String FORMAT_DATETIME = "yyyy-MM-dd'T'HH:mm:ss";
    private static final String FORMAT_DATE = "yyyy-MM-dd";

    @PostConstruct
    private void init() {
        MAPPER = this.objectMapper;
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
        } catch (JacksonException e) {
            throw new ServiceException(ErrorCode.UNEXPECTED, e);
        }
    }

    public static <T> T convertJsonToObject(String json, Class<T> clazz) {
        try {
            return MAPPER.readValue(json, clazz);
        } catch (JacksonException e) {
            throw new ServiceException(ErrorCode.UNEXPECTED, e);
        }
    }

    public static JsonNode convertObjectToJsonNode(Object object) {
        return MAPPER.valueToTree(object);
    }

}

```

## src/main/java/com/nubo/operation/vericlear/confirmed/application/util/RestClientUtils.java

```java
package com.nubo.operation.vericlear.confirmed.application.util;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.ParameterizedTypeReference;
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

    public <T> ResponseEntity<T> requestWithResponseObject(URI url, HttpMethod method, HttpHeaders headers,
                                                           Object requestBody, Class<T> responseType) {
        return restClient.method(method)
                .uri(url)
                .headers(h -> h.addAll(headers))
                .body(requestBody)
                .retrieve()
                .toEntity(responseType);
    }

    public <T> ResponseEntity<T> requestWithoutBodyWithResponseObject(URI url, HttpMethod method, HttpHeaders headers,
                                                                      Class<T> responseType) {
        return restClient.method(method)
                .uri(url)
                .headers(h -> h.addAll(headers))
                .retrieve()
                .toEntity(responseType);
    }

    public <T> ResponseEntity<T> requestWithResponseObject(URI url, HttpMethod method, HttpHeaders headers,
                                                           Object requestBody, ParameterizedTypeReference<T> responseType) {
        return restClient.method(method)
                .uri(url)
                .headers(h -> h.addAll(headers))
                .body(requestBody)
                .retrieve()
                .toEntity(responseType);
    }

    public <T> ResponseEntity<T> requestBodyWithResponseObject(URI url, HttpMethod method, HttpHeaders headers,
                                                               Object requestBody, Class<T> responseType) {
        return restClient.method(method)
                .uri(url)
                .headers(h -> h.addAll(headers))
                .body(requestBody)
                .retrieve()
                .toEntity(responseType);
    }


}

```

## src/main/java/com/nubo/operation/vericlear/confirmed/application/util/WebClientUtils.java

```java
package com.nubo.operation.vericlear.confirmed.application.util;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.net.URI;

@Component
@RequiredArgsConstructor
@Slf4j
public class WebClientUtils {

    private final WebClient webClient;

    /**
     * Ejecuta una petición HTTP con cuerpo y respuesta de tipo Class
     * Retorna Mono para procesamiento reactivo
     */
    public <T> Mono<ResponseEntity<T>> requestBodyWithResponseObjectAsync(
            URI url, HttpMethod method, HttpHeaders headers,
            Object requestBody, Class<T> responseType) {
        log.info("WebClient [{}] {}", method, url);

        return webClient.method(method)
                .uri(url)
                .headers(h -> h.addAll(headers))
                .bodyValue(requestBody)
                .retrieve()
                .toEntity(responseType);
    }

    /**
     * Ejecuta una petición HTTP sin cuerpo y respuesta de tipo Class
     * Retorna Mono para procesamiento reactivo
     */
    public <T> Mono<ResponseEntity<T>> requestWithResponseObjectAsync(
            URI url, HttpMethod method, HttpHeaders headers,
            Class<T> responseType) {
        log.info("WebClient [{}] {}", method, url);

        return webClient.method(method)
                .uri(url)
                .headers(h -> h.addAll(headers))
                .retrieve()
                .toEntity(responseType);
    }

    /**
     * Ejecuta una petición HTTP con cuerpo y respuesta de tipo parametrizado (List, Set, etc.)
     * Retorna Mono para procesamiento reactivo
     */
    public <T> Mono<ResponseEntity<T>> requestBodyWithResponseTypeAsync(
            URI url, HttpMethod method, HttpHeaders headers,
            Object requestBody, ParameterizedTypeReference<T> responseType) {
        log.info("WebClient [{}] {}", method, url);

        return webClient.method(method)
                .uri(url)
                .headers(h -> h.addAll(headers))
                .bodyValue(requestBody)
                .retrieve()
                .toEntity(responseType);
    }

    /**
     * Versión síncrona (bloqueante) para mantener compatibilidad
     * Usa .block() para convertir Mono a valor síncrono
     */
    public <T> ResponseEntity<T> requestBodyWithResponseObject(
            URI url, HttpMethod method, HttpHeaders headers,
            Object requestBody, Class<T> responseType) {
        return requestBodyWithResponseObjectAsync(url, method, headers, requestBody, responseType)
                .block();
    }

    /**
     * Versión síncrona (bloqueante) para mantener compatibilidad
     */
    public <T> ResponseEntity<T> requestWithResponseObject(
            URI url, HttpMethod method, HttpHeaders headers,
            Class<T> responseType) {
        return requestWithResponseObjectAsync(url, method, headers, responseType)
                .block();
    }

    /**
     * Versión síncrona (bloqueante) para tipos parametrizados
     */
    public <T> ResponseEntity<T> requestBodyWithResponseType(
            URI url, HttpMethod method, HttpHeaders headers,
            Object requestBody, ParameterizedTypeReference<T> responseType) {
        return requestBodyWithResponseTypeAsync(url, method, headers, requestBody, responseType)
                .block();
    }
}


```

## src/main/java/com/nubo/operation/vericlear/confirmed/client/email/models/dto/request/EmailTemplateInDto.java

```java
package com.nubo.operation.vericlear.confirmed.client.email.models.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EmailTemplateInDto {

    private String userName;

    @Email
    @NotBlank
    private String toEmail;

    @NotBlank
    private String subject;

    @NotBlank
    private String htmlTemplate;

}
```

## src/main/java/com/nubo/operation/vericlear/confirmed/client/email/models/dto/response/EmailNuboOutDto.java

```java
package com.nubo.operation.vericlear.confirmed.client.email.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class EmailNuboOutDto {

    private Long id;

    private String body;

    private String response;

    private String toEmail;

    private String fromEmail;

    private String subject;

    private String text;

}

```

## src/main/java/com/nubo/operation/vericlear/confirmed/client/email/service/EmailClient.java

```java
package com.nubo.operation.vericlear.confirmed.client.email.service;

import com.nubo.operation.vericlear.confirmed.client.email.models.dto.request.EmailTemplateInDto;
import com.nubo.operation.vericlear.confirmed.client.email.models.dto.response.EmailNuboOutDto;
import com.nubo.operation.vericlear.confirmed.models.enums.TypeEnum;

import java.math.BigDecimal;
import java.time.LocalDate;

public interface EmailClient {

    EmailNuboOutDto sendEmailToOriginsNotAllowed(Long matchId, LocalDate registrationDateFrom, TypeEnum type);
}

```

## src/main/java/com/nubo/operation/vericlear/confirmed/client/email/service/impl/EmailClientImpl.java

```java
package com.nubo.operation.vericlear.confirmed.client.email.service.impl;

import com.nubo.operation.vericlear.confirmed.application.properties.PropertiesConfig;
import com.nubo.operation.vericlear.confirmed.application.properties.PropertiesContext;
import com.nubo.operation.vericlear.confirmed.application.util.ApplicationUtils;
import com.nubo.operation.vericlear.confirmed.application.util.RestClientUtils;
import com.nubo.operation.vericlear.confirmed.application.util.WebClientUtils;
import com.nubo.operation.vericlear.confirmed.client.email.models.dto.request.EmailTemplateInDto;
import com.nubo.operation.vericlear.confirmed.client.email.models.dto.response.EmailNuboOutDto;
import com.nubo.operation.vericlear.confirmed.client.email.service.EmailClient;
import com.nubo.operation.vericlear.confirmed.client.operation.cmd.models.dto.request.FractionInDto;
import com.nubo.operation.vericlear.confirmed.client.operation.cmd.models.dto.response.SettlementOutDto;
import com.nubo.operation.vericlear.confirmed.client.operation.cmd.service.OperationCmdClient;
import com.nubo.operation.vericlear.confirmed.exception.ClientException;
import com.nubo.operation.vericlear.confirmed.exception.error.ErrorCode;
import com.nubo.operation.vericlear.confirmed.models.enums.PropertiesEnum;
import com.nubo.operation.vericlear.confirmed.models.enums.TypeEnum;
import com.nubo.operation.vericlear.confirmed.models.enums.VersionApiEnum;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;
import org.springframework.web.client.RestClient;
import org.springframework.web.reactive.function.client.WebClientResponseException;
import org.springframework.web.util.UriComponentsBuilder;

import java.math.BigDecimal;
import java.net.URI;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class EmailClientImpl implements EmailClient {

    private final PropertiesConfig propertiesConfig;
    private final RestClientUtils restClient;

    private static final String PATH = "notification";

    @Override
    public EmailNuboOutDto sendEmailToOriginsNotAllowed(Long matchId, LocalDate registrationDateFrom, TypeEnum type) {
        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getUrlNuboEmailNotification())
                .pathSegment(VersionApiEnum.V1.getValue(), PATH)
                .path("/send-email/code-template/origin")
                .queryParam("matchId", matchId)
                .queryParam("registrationDateFrom", registrationDateFrom)
                .queryParam("type", type)
                .build()
                .toUri();

        try {
            ResponseEntity<EmailNuboOutDto> response = restClient.requestWithoutBodyWithResponseObject(uri,
                    HttpMethod.POST, getHttpHeaders(), EmailNuboOutDto.class);
            if (!ObjectUtils.isEmpty(response.getBody())) {
                return response.getBody();
            }
        } catch (Exception ex) {
            throw new ClientException(ErrorCode.CLIENT_EMAIL_ERROR, HttpStatus.BAD_GATEWAY, ex);
        }

        return EmailNuboOutDto.builder().build();
    }

    private HttpHeaders getHttpHeaders() {
        HttpHeaders headers = new HttpHeaders();

        headers.set(PropertiesEnum.CLIENT_IP.getValue(), PropertiesContext.getClientIp());
        headers.set(PropertiesEnum.CLIENT_USER.getValue(), propertiesConfig.getApiName());
        headers.set(PropertiesEnum.CLIENT_DATETIME.getValue(),
                ApplicationUtils.convertLocalDateTimeToString(LocalDateTime.now()));
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set(PropertiesEnum.CLIENT_BACKEND.getValue(), "true");
        return headers;
    }

}

```

## src/main/java/com/nubo/operation/vericlear/confirmed/client/kafka/consumer/KafkaNuboListenerAdapter.java

```java
package com.nubo.operation.vericlear.confirmed.client.kafka.consumer;

import org.springframework.kafka.annotation.BackOff;
import org.springframework.kafka.annotation.DltHandler;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.annotation.RetryableTopic;
import org.springframework.kafka.retrytopic.DltStrategy;
import org.springframework.kafka.support.KafkaHeaders;
import org.springframework.messaging.handler.annotation.Header;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Component;

import com.nubo.operation.vericlear.confirmed.application.context.GlobalContext;
import com.nubo.operation.vericlear.confirmed.application.util.ApplicationUtils;
import com.nubo.operation.vericlear.confirmed.exception.TradeNotYetAvailableException;
import com.nubo.operation.vericlear.confirmed.exception.error.ErrorCode;
import com.nubo.operation.vericlear.confirmed.exception.kafka.KafkaErrorBuild;
import com.nubo.operation.vericlear.confirmed.helpers.ValidatorUtil;
import com.nubo.operation.vericlear.confirmed.models.dto.request.AutomaticAssignmentInDto;
import com.nubo.operation.vericlear.confirmed.models.dto.request.TradeConfirmVericlearInDto;
import com.nubo.operation.vericlear.confirmed.models.enums.PropertiesEnum;
import com.nubo.operation.vericlear.confirmed.service.ProcessMessageService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Component
@RequiredArgsConstructor
@Slf4j
public class KafkaNuboListenerAdapter {

    private final ProcessMessageService processMessageService;
    private final ValidatorUtil validatorUtil;
    private final KafkaErrorBuild kafkaErrorBuild;

    @RetryableTopic(attempts = "4", backOff = @BackOff(delay = 3000, multiplier = 1.5), include = {
            TradeNotYetAvailableException.class }, dltStrategy = DltStrategy.FAIL_ON_ERROR, kafkaTemplate = "retryKafkaNuboTemplate")
    @KafkaListener(topics = "#{propertiesConfig.kafkaNuboConsumerTopicNameVericlearConfirm}", containerFactory = "kafkaNuboListenerContainerFactory")
    public void listen(@Payload TradeConfirmVericlearInDto tradeConfirmVericlear,
            @Header(KafkaHeaders.RECEIVED_PARTITION) int partition,
            @Header(KafkaHeaders.OFFSET) long offset,
            @Header(KafkaHeaders.RECEIVED_TOPIC) String topic,
            @Header(name = KafkaHeaders.RECEIVED_KEY, required = false) String key,
            @Header(name = KafkaHeaders.DELIVERY_ATTEMPT, required = false) Integer retry) {
        log.info("New received Message -- Topic: {} -- Partition : {} -- Offset : {} -- Key : {} -- retry : {}",
                topic, partition, offset, key, retry);

        if (!validateObject(tradeConfirmVericlear)) {
            log.error("Validation failed for message from Topic: {} -- Partition: {} -- Offset: {}",
                    topic, partition, offset);
            return;
        }

        this.setProperties("127.0.0.1", "user", topic, partition, offset);
        processMessageService.processConfirmVericlear(tradeConfirmVericlear);
    }

    @KafkaListener(topics = "#{propertiesConfig.kafkaNuboConsumerTopicNameAutomaticAssignment}", containerFactory = "kafkaNuboListenerContainerFactoryAutomaticAssignment")
    public void listenAutomaticAssignment(@Payload AutomaticAssignmentInDto automaticAssignmentInDto,
            @Header(KafkaHeaders.RECEIVED_PARTITION) int partition,
            @Header(KafkaHeaders.OFFSET) long offset,
            @Header(KafkaHeaders.RECEIVED_TOPIC) String topic,
            @Header(name = KafkaHeaders.RECEIVED_KEY, required = false) String key,
            @Header(name = KafkaHeaders.DELIVERY_ATTEMPT, required = false) Integer retry) {
        log.info("New received Message -- Topic: {} -- Partition : {} -- Offset : {} -- Key : {} -- retry : {}",
                topic, partition, offset, key, retry);

        if (!validateObject(automaticAssignmentInDto)) {
            log.error("Validation failed for message from Topic: {} -- Partition: {} -- Offset: {}",
                    topic, partition, offset);
            return;
        }

        this.setProperties("127.0.0.1", "user", topic, partition, offset);
        processMessageService.processAutomaticAssignment(automaticAssignmentInDto);
    }

    @DltHandler
    public void handleDlt(TradeConfirmVericlearInDto tradeConfirmVericlear,
            @Header(KafkaHeaders.RECEIVED_TOPIC) String topic,
            @Header(KafkaHeaders.OFFSET) long offset) {
        log.error("Message exhausted retries and sent to DLT -- Topic: {} -- Offset: {} -- matchId: {}",
                topic, offset, tradeConfirmVericlear != null ? tradeConfirmVericlear.getMatchId() : "null");
        kafkaErrorBuild.buildError(
                new RuntimeException("Trade not available after all retries for matchId: "
                        + (tradeConfirmVericlear != null ? tradeConfirmVericlear.getMatchId() : "unknown")),
                ErrorCode.TRADE_NOT_FOUND, offset, topic, null);
    }

    private void setProperties(String clientIp, String clientUser, String topic, int partition, long offset) {
        GlobalContext.setProperty(PropertiesEnum.CLIENT_IP.getValue(), clientIp);
        GlobalContext.setProperty(PropertiesEnum.CLIENT_USER.getValue(), clientUser);
        GlobalContext.setProperty(PropertiesEnum.CLIENT_DATETIME.getValue(),
                ApplicationUtils.getLocalDateTimeNow());
        GlobalContext.setProperty(PropertiesEnum.KAFKA_TOPIC.getValue(), topic);
        GlobalContext.setProperty(PropertiesEnum.KAFKA_PARTITION.getValue(), String.valueOf(partition));
        GlobalContext.setProperty(PropertiesEnum.KAFKA_OFFSET.getValue(), String.valueOf(offset));
    }

    private boolean validateObject(Object object) {
        try {
            validatorUtil.validateObject(object);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

}

```

## src/main/java/com/nubo/operation/vericlear/confirmed/client/kafka/producer/KafkaNuboAdapter.java

```java
package com.nubo.operation.vericlear.confirmed.client.kafka.producer;

import java.util.concurrent.CompletableFuture;

import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.SendResult;
import org.springframework.stereotype.Component;

import com.nubo.operation.vericlear.confirmed.application.properties.PropertiesConfig;
import com.nubo.operation.vericlear.confirmed.application.util.ApplicationUtils;
import com.nubo.operation.vericlear.confirmed.models.dto.response.ErrorMessageVericlearOutDto;
import com.nubo.operation.vericlear.confirmed.models.dto.response.NotificationOutDto;

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

    public void sendErrorMessage(ErrorMessageVericlearOutDto errorMessageVericlearOutDto) {
        String topic = propertiesConfig.getKafkaNuboProducerTopicNameErrorMessage();
        String jsonString = ApplicationUtils.convertObjectToJson(errorMessageVericlearOutDto);
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

## src/main/java/com/nubo/operation/vericlear/confirmed/client/operation/cmd/models/dto/request/FractionInDto.java

```java
package com.nubo.operation.vericlear.confirmed.client.operation.cmd.models.dto.request;

import com.nubo.operation.vericlear.confirmed.application.annotations.ValidBigDecimal;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FractionInDto {

    @Min(value = 1)
    private Long investorAccountId;

    @Min(value = 1)
    private Long participantAccountId;

    @NotNull
    private Boolean fiduciarySpecialist;

    @NotNull
    @Min(value = 1)
    private Long sourceQuoteTypeId;

    private String reference;

    @NotNull
    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal fractionQuantity;

    @NotNull
    @ValidBigDecimal(precision = 6, scale = 4)
    private BigDecimal commissionPercentage;

    @NotNull
    @ValidBigDecimal(precision = 6, scale = 4)
    private BigDecimal valTax;

    @ValidBigDecimal(precision = 20, scale = 0)
    private BigDecimal cashAccount;

    @Min(value = 1)
    private Long custodianId;

    @Min(value = 1)
    private Long ficAdministratorId;

}

```

## src/main/java/com/nubo/operation/vericlear/confirmed/client/operation/cmd/models/dto/response/CountryOutDto.java

```java
package com.nubo.operation.vericlear.confirmed.client.operation.cmd.models.dto.response;

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

## src/main/java/com/nubo/operation/vericlear/confirmed/client/operation/cmd/models/dto/response/DepositoryOutDto.java

```java
package com.nubo.operation.vericlear.confirmed.client.operation.cmd.models.dto.response;

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
public class DepositoryOutDto {

    private String id;

    private String description;

}

```

## src/main/java/com/nubo/operation/vericlear/confirmed/client/operation/cmd/models/dto/response/GicsOutDto.java

```java
package com.nubo.operation.vericlear.confirmed.client.operation.cmd.models.dto.response;

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
public class GicsOutDto {

    private Long id;

    private String description;

}

```

## src/main/java/com/nubo/operation/vericlear/confirmed/client/operation/cmd/models/dto/response/IdentificationTypeOutDto.java

```java
package com.nubo.operation.vericlear.confirmed.client.operation.cmd.models.dto.response;

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
public class IdentificationTypeOutDto {

    private Long id;

    private String description;

}

```

## src/main/java/com/nubo/operation/vericlear/confirmed/client/operation/cmd/models/dto/response/InvestorAccountOutDto.java

```java
package com.nubo.operation.vericlear.confirmed.client.operation.cmd.models.dto.response;

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

    private DepositoryOutDto depository;

    private ParticipantOutDto participant;

}

```

## src/main/java/com/nubo/operation/vericlear/confirmed/client/operation/cmd/models/dto/response/InvestorOutDto.java

```java
package com.nubo.operation.vericlear.confirmed.client.operation.cmd.models.dto.response;

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

    private IdentificationTypeOutDto identificationType;

    private String nationality;

    private String clearinghouseCode;

    private GicsOutDto gics;

    private Boolean moneyLaunderingFlag;

    private TaxStatusOutDto taxStatus;

}

```

## src/main/java/com/nubo/operation/vericlear/confirmed/client/operation/cmd/models/dto/response/ParticipantAccountOutDto.java

```java
package com.nubo.operation.vericlear.confirmed.client.operation.cmd.models.dto.response;

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

    private ParticipantOutDto participant;

    private String accountNumber;

    private StatusOutDto status;

    private TypeOutDto type;

    private TypeOutDto originType;

}

```

## src/main/java/com/nubo/operation/vericlear/confirmed/client/operation/cmd/models/dto/response/ParticipantOutDto.java

```java
package com.nubo.operation.vericlear.confirmed.client.operation.cmd.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder(toBuilder = true)
@JsonInclude(JsonInclude.Include.ALWAYS)
public class ParticipantOutDto {

    private Long id;

    private String code;

    private String documentNumber;

    private IdentificationTypeOutDto identificationType;

    private String name;

    private String shortName;

    private TypeOutDto type;

    private String mnemonic;

    private CountryOutDto country;

    private LocalDate registrationDate;

    private String taxCode;

    private StatusOutDto status;

    private String nitClearingHouse;

    private TaxStatusOutDto taxStatus;

    private String typeEntity;

    private String marginAccount;

    private String masterAccount;

    private String directAllocation;

    private String marketMaker;

    private Boolean enabled;

    private Boolean custodian;

}

```

## src/main/java/com/nubo/operation/vericlear/confirmed/client/operation/cmd/models/dto/response/SettlementOutDto.java

```java
package com.nubo.operation.vericlear.confirmed.client.operation.cmd.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.ALWAYS)
public class SettlementOutDto {

    private Long tradeId;

    private Integer fraction;

    private SideOutDto side;

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

    private TradingSystemOutDto tradingSystem;

    private StatusOutDto status;

    private BigDecimal brokerageService;

    private Long custodianId;

    private ParticipantOutDto custodian;

    private Long bankAccountId;

    private String reference;

    private BigDecimal capitalGainValue;

    private BigDecimal disbursementValue;

    private TypeOutDto sourceQuoteType;

    private Long ficAdministratorId;

    private ParticipantOutDto directDepositor;

    private Boolean jointAccount;

    private Boolean masterAccount;

    private BigDecimal cashAccount;

    private Boolean indMaster;

    private StatusOutDto custodianStatus;

}

```

## src/main/java/com/nubo/operation/vericlear/confirmed/client/operation/cmd/models/dto/response/SideOutDto.java

```java
package com.nubo.operation.vericlear.confirmed.client.operation.cmd.models.dto.response;

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

    private String description;

}

```

## src/main/java/com/nubo/operation/vericlear/confirmed/client/operation/cmd/models/dto/response/StatusOutDto.java

```java
package com.nubo.operation.vericlear.confirmed.client.operation.cmd.models.dto.response;

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

## src/main/java/com/nubo/operation/vericlear/confirmed/client/operation/cmd/models/dto/response/TaxStatusOutDto.java

```java
package com.nubo.operation.vericlear.confirmed.client.operation.cmd.models.dto.response;

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
public class TaxStatusOutDto {

    private Long id;

    private String description;

}

```

## src/main/java/com/nubo/operation/vericlear/confirmed/client/operation/cmd/models/dto/response/TradingSystemOutDto.java

```java
package com.nubo.operation.vericlear.confirmed.client.operation.cmd.models.dto.response;

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
public class TradingSystemOutDto {

    private Long id;

    private String description;
}

```

## src/main/java/com/nubo/operation/vericlear/confirmed/client/operation/cmd/models/dto/response/TypeOutDto.java

```java
package com.nubo.operation.vericlear.confirmed.client.operation.cmd.models.dto.response;

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

## src/main/java/com/nubo/operation/vericlear/confirmed/client/operation/cmd/service/OperationCmdClient.java

```java
package com.nubo.operation.vericlear.confirmed.client.operation.cmd.service;

import com.nubo.operation.vericlear.confirmed.client.operation.cmd.models.dto.request.FractionInDto;
import com.nubo.operation.vericlear.confirmed.client.operation.cmd.models.dto.response.SettlementOutDto;

import java.util.List;

public interface OperationCmdClient {

    List<SettlementOutDto> createFractions(Long tradeId, String sideId, List<FractionInDto> fractionInDtoList);
}

```

## src/main/java/com/nubo/operation/vericlear/confirmed/client/operation/cmd/service/impl/OperationCmdClientImpl.java

```java
package com.nubo.operation.vericlear.confirmed.client.operation.cmd.service.impl;

import java.net.URI;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;
import org.springframework.web.reactive.function.client.WebClientResponseException;
import org.springframework.web.util.UriComponentsBuilder;

import com.nubo.operation.vericlear.confirmed.application.properties.PropertiesConfig;
import com.nubo.operation.vericlear.confirmed.application.properties.PropertiesContext;
import com.nubo.operation.vericlear.confirmed.application.util.ApplicationUtils;
import com.nubo.operation.vericlear.confirmed.application.util.WebClientUtils;
import com.nubo.operation.vericlear.confirmed.client.operation.cmd.models.dto.request.FractionInDto;
import com.nubo.operation.vericlear.confirmed.client.operation.cmd.models.dto.response.SettlementOutDto;
import com.nubo.operation.vericlear.confirmed.client.operation.cmd.service.OperationCmdClient;
import com.nubo.operation.vericlear.confirmed.exception.ClientException;
import com.nubo.operation.vericlear.confirmed.exception.error.ErrorCode;
import com.nubo.operation.vericlear.confirmed.models.enums.PropertiesEnum;
import com.nubo.operation.vericlear.confirmed.models.enums.VersionApiEnum;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class OperationCmdClientImpl implements OperationCmdClient {

    private final PropertiesConfig propertiesConfig;
    private final WebClientUtils webClientUtils;

    private static final String PATH_FRACTIONATION = "fractionation/counted-operation";

    @Override
    public List<SettlementOutDto> createFractions(Long tradeId, String sideId, List<FractionInDto> fractionInDtoList) {
        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getUrlNuboOperationCmd())
                .pathSegment(VersionApiEnum.V1.getValue(), PATH_FRACTIONATION)
                .path("/create-fractions/trade/{tradeId}/side/{sideId}")
                .buildAndExpand(tradeId, sideId)
                .toUri();

        try {
            ParameterizedTypeReference<List<SettlementOutDto>> responseType =
                    new ParameterizedTypeReference<List<SettlementOutDto>>() {};

            ResponseEntity<List<SettlementOutDto>> response = webClientUtils.requestBodyWithResponseType(uri,
                    HttpMethod.POST, getHttpHeaders(), fractionInDtoList, responseType);
            if (!ObjectUtils.isEmpty(response.getBody())) {
                return response.getBody();
            }
        } catch (WebClientResponseException ex) {
            String errorBody = ex.getResponseBodyAsString();
            int statusCode = ex.getStatusCode().value();

            log.error("Error calling createFractions - URI: {} - Status: {} - Response Body: {}",
                      uri, statusCode, errorBody);
            throw new ClientException(ErrorCode.CLIENT_OPERATIONS_CMD_ERROR, HttpStatus.BAD_GATEWAY, errorBody, ex);

        } catch (Exception ex) {
            log.error("Error calling createFractions - URI: {} - Error: {}", uri, ex);
            throw new ClientException(ErrorCode.CLIENT_OPERATIONS_CMD_ERROR, HttpStatus.BAD_GATEWAY, null, ex);
        }

        return List.of();
    }

    private HttpHeaders getHttpHeaders() {
        HttpHeaders headers = new HttpHeaders();

        headers.set(PropertiesEnum.CLIENT_IP.getValue(), PropertiesContext.getClientIp());
        headers.set(PropertiesEnum.CLIENT_USER.getValue(), propertiesConfig.getApiName());
        headers.set(PropertiesEnum.CLIENT_DATETIME.getValue(),
                ApplicationUtils.convertLocalDateTimeToString(LocalDateTime.now()));
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set(PropertiesEnum.CLIENT_BACKEND.getValue(), "true");
        return headers;
    }

}

```

## src/main/java/com/nubo/operation/vericlear/confirmed/exception/ClientException.java

```java
package com.nubo.operation.vericlear.confirmed.exception;

import com.nubo.operation.vericlear.confirmed.exception.error.ErrorCode;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public class ClientException extends RuntimeException {

    private final ErrorCode errorCode;
    private final HttpStatus httpStatus;
    private final String errorResponseBody;

    public ClientException(ErrorCode errorCode) {
        super(errorCode.getMessage());
        this.errorCode = errorCode;
        this.httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
        this.errorResponseBody = null;
    }

    public ClientException(ErrorCode errorCode, HttpStatus httpStatus) {
        super(errorCode.getMessage());
        this.errorCode = errorCode;
        this.httpStatus = httpStatus;
        this.errorResponseBody = null;
    }

    public ClientException(ErrorCode errorCode, Throwable throwable) {
        super(errorCode.getMessage(), throwable);
        this.errorCode = errorCode;
        this.httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
        this.errorResponseBody = null;
    }

    public ClientException(ErrorCode errorCode, HttpStatus httpStatus, Throwable throwable) {
        super(errorCode.getMessage(), throwable);
        this.errorCode = errorCode;
        this.httpStatus = httpStatus;
        this.errorResponseBody = null;
    }

    public ClientException(ErrorCode errorCode, HttpStatus httpStatus, String errorResponseBody, Throwable throwable) {
        super(errorCode.getMessage(), throwable);
        this.errorCode = errorCode;
        this.httpStatus = httpStatus;
        this.errorResponseBody = errorResponseBody;
    }

    public HttpStatus getHttpStatusOrDefault() {
        return this.httpStatus != null ? this.httpStatus : HttpStatus.INTERNAL_SERVER_ERROR;
    }

}

```

## src/main/java/com/nubo/operation/vericlear/confirmed/exception/ServiceException.java

```java
package com.nubo.operation.vericlear.confirmed.exception;


import lombok.Getter;
import org.springframework.http.HttpStatus;

import com.nubo.operation.vericlear.confirmed.exception.error.ErrorCode;

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

    public ServiceException(ErrorCode errorCode, String message) {
        super(errorCode.getMessage(), new Throwable(message));
        this.errorCode = errorCode;
        this.httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
    }

}

```

## src/main/java/com/nubo/operation/vericlear/confirmed/exception/TradeNotYetAvailableException.java

```java
package com.nubo.operation.vericlear.confirmed.exception;

import com.nubo.operation.vericlear.confirmed.exception.error.ErrorCode;

import lombok.Getter;

/**
 * Excepción lanzada cuando el trade aún no ha sido persistido por el servicio de NASDAQ.
 * Esta excepción es retriable: el mensaje será reenviado a un topic de reintento
 * en Kafka sin bloquear el hilo del consumidor.
 */
@Getter
public class TradeNotYetAvailableException extends RuntimeException {

    private final ErrorCode errorCode;

    public TradeNotYetAvailableException(Long matchId) {
        super("Trade not yet available for matchId: " + matchId + ". Will be retried via Kafka retry topic.");
        this.errorCode = ErrorCode.TRADE_NOT_FOUND;
    }

}

```

## src/main/java/com/nubo/operation/vericlear/confirmed/exception/error/ErrorCode.java

```java
package com.nubo.operation.vericlear.confirmed.exception.error;

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
    ERROR_KAFKA_CONSUMER_NUBO("Error Consumer Kafka Nubo"),
    DEPOSITORY_NOT_FOUND("Despository not found"),
    TYPE_NOT_FOUND("Type not found"),
    STATUS_MAPPING_NOT_FOUND("Status mapping not found"),
    DEPOSITORY_MAPPING_NOT_FOUND("Depository mapping not found"),
    SETTLEMENT_NOT_FOUND("Settlement not found in database"),
    CLIENT_OPERATIONS_CMD_ERROR("An unexpected error occurred in Operation CMD"),
    ACCOUNT_NOT_FOUND("Account not found"),
    DIRECT_DEPOSITORY_NOT_FOUND("Direct depository not found in database"),
    TRADE_STATUS_UNCHANGED("The status has not changed"),
    VALIDATION_ERROR("Validation error"),
    TRADE_ASSIGNMENT_MARKED("The trade has already been assigned"),
    CLIENT_EMAIL_ERROR("An unexpected error occurred in Email Client");

    private final String message;

    ErrorCode(String message) {
        this.message = message;
    }

    public String getName() {
        return this.name();
    }

}

```

## src/main/java/com/nubo/operation/vericlear/confirmed/exception/error/ErrorResponse.java

```java
package com.nubo.operation.vericlear.confirmed.exception.error;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.nubo.operation.vericlear.confirmed.application.util.ApplicationUtils;

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

## src/main/java/com/nubo/operation/vericlear/confirmed/exception/error/ErrorValidation.java

```java
package com.nubo.operation.vericlear.confirmed.exception.error;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.nubo.operation.vericlear.confirmed.application.util.ApplicationUtils;

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

## src/main/java/com/nubo/operation/vericlear/confirmed/exception/handler/GlobalExceptionHandler.java

```java
package com.nubo.operation.vericlear.confirmed.exception.handler;

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

import com.nubo.operation.vericlear.confirmed.application.properties.PropertiesContext;
import com.nubo.operation.vericlear.confirmed.exception.ServiceException;
import com.nubo.operation.vericlear.confirmed.exception.error.ErrorCode;
import com.nubo.operation.vericlear.confirmed.exception.error.ErrorResponse;
import com.nubo.operation.vericlear.confirmed.exception.error.ErrorValidation;

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

## src/main/java/com/nubo/operation/vericlear/confirmed/exception/kafka/KafkaErrorBuild.java

```java
package com.nubo.operation.vericlear.confirmed.exception.kafka;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import com.nubo.operation.vericlear.confirmed.application.properties.PropertiesConfig;
import com.nubo.operation.vericlear.confirmed.application.util.ApplicationUtils;
import com.nubo.operation.vericlear.confirmed.exception.error.ErrorCode;
import com.nubo.operation.vericlear.confirmed.exception.error.ErrorResponse;
import com.nubo.operation.vericlear.confirmed.exception.error.ErrorValidation;

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

## src/main/java/com/nubo/operation/vericlear/confirmed/helpers/ExceptionMessageUtil.java

```java
package com.nubo.operation.vericlear.confirmed.helpers;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.springframework.stereotype.Component;

import com.nubo.operation.vericlear.confirmed.application.util.ApplicationUtils;
import com.nubo.operation.vericlear.confirmed.exception.ClientException;
import com.nubo.operation.vericlear.confirmed.exception.error.ErrorResponse;

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

        if (ex instanceof ClientException) {
            ErrorResponse errorResponse = buildClientErrorResponse(ex.getCause().getMessage());

            if (errorResponse != null) {
                String message = hasText(errorResponse.getErrorMessageDetail())
                        ? errorResponse.getErrorMessageDetail()
                        : errorResponse.getErrorMessage();
                String prefix = hasText(errorResponse.getErrorCode()) ? errorResponse.getErrorCode() : "Cause";
                appendIfPresent(builder, hasText(message) ? prefix + ": " + message.trim() : null);
                return;
            }
        }

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

## src/main/java/com/nubo/operation/vericlear/confirmed/helpers/MapperUtil.java

```java
package com.nubo.operation.vericlear.confirmed.helpers;

public final class MapperUtil {

    private MapperUtil() {
        // Private constructor to prevent instantiation
    }
}

```

## src/main/java/com/nubo/operation/vericlear/confirmed/helpers/ValidatorUtil.java

```java
package com.nubo.operation.vericlear.confirmed.helpers;

import java.util.Set;

import org.springframework.stereotype.Component;

import com.nubo.operation.vericlear.confirmed.exception.ServiceException;
import com.nubo.operation.vericlear.confirmed.exception.error.ErrorCode;

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

## src/main/java/com/nubo/operation/vericlear/confirmed/models/dto/request/AutomaticAssignmentInDto.java

```java
package com.nubo.operation.vericlear.confirmed.models.dto.request;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AutomaticAssignmentInDto {

    @NotNull
    private Long tradeId;

    private String message;

}

```

## src/main/java/com/nubo/operation/vericlear/confirmed/models/dto/request/DateInDto.java

```java
package com.nubo.operation.vericlear.confirmed.models.dto.request;

import com.fasterxml.jackson.annotation.JsonInclude;

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
public class DateInDto {

    @NotNull(message = "Year is required")
    private Integer year;

    @NotNull(message = "Month is required")
    private Integer month;

    @NotNull(message = "Day is required")
    private Integer day;

}

```

## src/main/java/com/nubo/operation/vericlear/confirmed/models/dto/request/TradeConfirmVericlearInDto.java

```java
package com.nubo.operation.vericlear.confirmed.models.dto.request;

import com.fasterxml.jackson.annotation.JsonAlias;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

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
    @JsonAlias("message_deal_id")
    private Long matchId;

    @Valid
    @JsonProperty("clearingDate")
    private DateInDto clearingDate;

    @NotNull
    @Valid
    @JsonProperty("tradeDate")
    @JsonAlias("trade_date")
    private DateInDto matchDate;

    @NotNull
    @JsonProperty("status")
    private String status;

    @JsonProperty("buyCsdCode")
    @JsonAlias("buy_csd_code")
    private String buyCsdCode;

    @JsonProperty("sellCsdCode")
    @JsonAlias("sell_csd_code")
    private String sellCsdCode;

    @JsonProperty("settlementDate")
    private DateInDto settlementDate;

    @JsonProperty("reason")
    private String reason;

}

```

## src/main/java/com/nubo/operation/vericlear/confirmed/models/dto/response/ErrorMessageVericlearOutDto.java

```java
package com.nubo.operation.vericlear.confirmed.models.dto.response;

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
public class ErrorMessageVericlearOutDto {

    private String errorMessage;

    private String topic;

    private String partition;

    private String offset;

    private String messageVericlear;

}

```

## src/main/java/com/nubo/operation/vericlear/confirmed/models/dto/response/MetaDataOutDto.java

```java
package com.nubo.operation.vericlear.confirmed.models.dto.response;

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

## src/main/java/com/nubo/operation/vericlear/confirmed/models/dto/response/NotificationOutDto.java

```java
package com.nubo.operation.vericlear.confirmed.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import tools.jackson.databind.JsonNode;

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

## src/main/java/com/nubo/operation/vericlear/confirmed/models/entity/CountryEntity.java

```java
package com.nubo.operation.vericlear.confirmed.models.entity;

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
        if (o == null || getClass() != o.getClass())
            return false;
        CountryEntity that = (CountryEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operation/vericlear/confirmed/models/entity/DepositoryEntity.java

```java
package com.nubo.operation.vericlear.confirmed.models.entity;

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

## src/main/java/com/nubo/operation/vericlear/confirmed/models/entity/DepositoryMappingEntity.java

```java
package com.nubo.operation.vericlear.confirmed.models.entity;

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

## src/main/java/com/nubo/operation/vericlear/confirmed/models/entity/DirectDepositoryEntity.java

```java
package com.nubo.operation.vericlear.confirmed.models.entity;

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

## src/main/java/com/nubo/operation/vericlear/confirmed/models/entity/IdentificationTypeEntity.java

```java
package com.nubo.operation.vericlear.confirmed.models.entity;

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

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        IdentificationTypeEntity that = (IdentificationTypeEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operation/vericlear/confirmed/models/entity/InvestorAccountEntity.java

```java
package com.nubo.operation.vericlear.confirmed.models.entity;

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
    @JoinColumn(name = "\"ORIGIN_TYPE_ID\"")
    private TypeEntity originType;

    @ManyToOne
    @JoinColumn(name = "\"TYPE_ID\"")
    private TypeEntity type;

    @ManyToOne
    @JoinColumn(name = "\"DEPOSITORY_ID\"")
    private DepositoryEntity depository;

    @ManyToOne
    @JoinColumn(name = "\"PARTICIPANT_ID\"")
    private ParticipantEntity participant;

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
        InvestorAccountEntity that = (InvestorAccountEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operation/vericlear/confirmed/models/entity/InvestorEntity.java

```java
package com.nubo.operation.vericlear.confirmed.models.entity;

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

    @Column(name = "\"DOCUMENT_NUMBER\"", length = 20)
    private String documentNumber;

    @ManyToOne
    @JoinColumn(name = "\"IDENTIFICATION_TYPE_ID\"", nullable = false)
    private IdentificationTypeEntity identificationType;

    @Column(name = "\"NATIONALITY\"", length = 2)
    private String nationality;

    @Column(name = "\"CLEARINGHOUSE_CODE\"", length = 20)
    private String clearinghouseCode;

    @Column(name = "\"MONEY_LAUNDERING_FLAG\"")
    private Boolean moneyLaunderingFlag;

    @Column(name = "\"TAX_EXEMP\"")
    private Boolean taxExemp;

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
        if (o == null || getClass() != o.getClass())
            return false;
        InvestorEntity that = (InvestorEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operation/vericlear/confirmed/models/entity/ParticipantAccountEntity.java

```java
package com.nubo.operation.vericlear.confirmed.models.entity;

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

    @ManyToOne
    @JoinColumn(name = "\"ORIGIN_TYPE_ID\"", nullable = false)
    private TypeEntity originType;

    @ManyToOne
    @JoinColumn(name = "\"DEPOSITORY_ID\"")
    private DepositoryEntity depository;

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
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operation/vericlear/confirmed/models/entity/ParticipantBankAccountEntity.java

```java
package com.nubo.operation.vericlear.confirmed.models.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder()
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"PARTICIPANT_BANK_ACCOUNT\"", schema = "\"NUANBODB\"")
public class ParticipantBankAccountEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"PARTICIPANT_BANK_ACCOUNT_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"BANK_ID\"", nullable = false)
    private Long bankId;

    @Column(name = "\"PARTICIPANT_ID\"", nullable = false)
    private Long participantId;

    @Column(name = "\"BANK_ACCOUNT\"", length = 30)
    private String bankAccount;

    @Column(name = "\"PRINCIPAL\"")
    private Boolean principal;

    @ManyToOne
    @JoinColumn(name = "\"ORIGIN_TYPE_ID\"")
    private TypeEntity originType;

    @ManyToOne
    @JoinColumn(name = "\"CONCEPT_TYPE_ID\"")
    private TypeEntity conceptType;

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

        ParticipantBankAccountEntity that = (ParticipantBankAccountEntity) o;

        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operation/vericlear/confirmed/models/entity/ParticipantEntity.java

```java
package com.nubo.operation.vericlear.confirmed.models.entity;

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

    @ManyToOne
    @JoinColumn(name = "\"COUNTRY_ID\"")
    private CountryEntity country;


    @Column(name = "\"DIRECT_ALLOCATION\"")
    private String directAllocation;

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

## src/main/java/com/nubo/operation/vericlear/confirmed/models/entity/SettlementEntity.java

```java
package com.nubo.operation.vericlear.confirmed.models.entity;

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

## src/main/java/com/nubo/operation/vericlear/confirmed/models/entity/SettlementKey.java

```java
package com.nubo.operation.vericlear.confirmed.models.entity;

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

## src/main/java/com/nubo/operation/vericlear/confirmed/models/entity/SideEntity.java

```java
package com.nubo.operation.vericlear.confirmed.models.entity;

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

## src/main/java/com/nubo/operation/vericlear/confirmed/models/entity/StatusEntity.java

```java
package com.nubo.operation.vericlear.confirmed.models.entity;

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

## src/main/java/com/nubo/operation/vericlear/confirmed/models/entity/StatusMappingEntity.java

```java
package com.nubo.operation.vericlear.confirmed.models.entity;

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

## src/main/java/com/nubo/operation/vericlear/confirmed/models/entity/TradeConfirmEntity.java

```java
package com.nubo.operation.vericlear.confirmed.models.entity;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Objects;

import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import com.nubo.operation.vericlear.confirmed.models.dto.request.TradeConfirmVericlearInDto;

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

    @JdbcTypeCode(SqlTypes.JSON)
    @Column(name = "\"VERICLEAR_CONFIRM_REG\"", columnDefinition = "jsonb")
    private TradeConfirmVericlearInDto vericlearConfirmReg;

    @Column(name = "\"CSDCODE_BUY\"", length = 50)
    private String csdCodeBuy;

    @Column(name = "\"CSDCODE_SELL\"", length = 50)
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

## src/main/java/com/nubo/operation/vericlear/confirmed/models/entity/TradeEntity.java

```java
package com.nubo.operation.vericlear.confirmed.models.entity;

import java.math.BigDecimal;
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

    @ManyToOne
    @JoinColumn(name = "\"DEPOSITORY_ID\"")
    private DepositoryEntity depository;

    @ManyToOne
    @JoinColumn(name = "\"DEPOSITORY_ID_BUY\"")
    private DepositoryEntity depositoryBuy;

    @ManyToOne
    @JoinColumn(name = "\"DEPOSITORY_ID_SELL\"")
    private DepositoryEntity depositorySell;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"")
    private StatusEntity status;

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

    @ManyToOne
    @JoinColumn(name = "\"PARTICIPANT_ID_BUY\"")
    private ParticipantEntity participantBuy;

    @ManyToOne
    @JoinColumn(name = "\"PARTICIPANT_ID_SELL\"")
    private ParticipantEntity participantSell;

    @ManyToOne
    @JoinColumn(name = "\"SOURCE_QUOTE_BUY_TYPE\"")
    private TypeEntity sourceQuoteBuyType;

    @ManyToOne
    @JoinColumn(name = "\"SOURCE_QUOTE_SELL_TYPE\"")
    private TypeEntity sourceQuoteSellType;

    @Column(name = "\"QUANTITY\"", precision = 16, scale = 4, nullable = false)
    private BigDecimal quantity;

    @Column(name = "\"ASSIGNMENT_MARK_BUY\"")
    private Boolean assignmentMarkBuy;

    @Column(name = "\"ASSIGNMENT_MARK_SELL\"")
    private Boolean assignmentMarkSell;

    @Column(name = "\"FINAL_ASSIGNMENT_MARK_BUY\"")
    private Boolean finalAssignmentMarkBuy;

    @Column(name = "\"FINAL_ASSIGNMENT_MARK_SELL\"")
    private Boolean finalAssignmentMarkSell;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 250, nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private OffsetDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50)
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

## src/main/java/com/nubo/operation/vericlear/confirmed/models/entity/TradeStatusHistoryEntity.java

```java
package com.nubo.operation.vericlear.confirmed.models.entity;

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

## src/main/java/com/nubo/operation/vericlear/confirmed/models/entity/TradeStatusHistoryKey.java

```java
package com.nubo.operation.vericlear.confirmed.models.entity;

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

## src/main/java/com/nubo/operation/vericlear/confirmed/models/entity/TypeEntity.java

```java
package com.nubo.operation.vericlear.confirmed.models.entity;

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
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TypeEntity that = (TypeEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operation/vericlear/confirmed/models/enums/CountryCodeEnum.java

```java
package com.nubo.operation.vericlear.confirmed.models.enums;


import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.Arrays;


@Getter
@AllArgsConstructor
public enum CountryCodeEnum {

    COLOMBIA("CO"),
    PERU("PE");

    private final String code;

    public static boolean isAllowed(String code) {
        if (code == null) return false;

        return Arrays.stream(values()).anyMatch(c -> c.code.equalsIgnoreCase(code));
    }
}


```

## src/main/java/com/nubo/operation/vericlear/confirmed/models/enums/DirectAllocationEnum.java

```java
package com.nubo.operation.vericlear.confirmed.models.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Arrays;
import java.util.Objects;

@Getter
@RequiredArgsConstructor
public enum DirectAllocationEnum {

    TRUE("S"),
    FALSE("N");

    private final String id;

    @JsonValue
    public String getId() {
        return id;
    }

    @JsonCreator
    public static DirectAllocationEnum fromId(String id) {
        return Arrays.stream(DirectAllocationEnum.values())
                .filter(side -> Objects.equals(side.id, id))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Side not implemented: " + id));
    }
}

```

## src/main/java/com/nubo/operation/vericlear/confirmed/models/enums/ExternalSystemEnum.java

```java
package com.nubo.operation.vericlear.confirmed.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum ExternalSystemEnum {

    VERICLEAR("CAMARA");

    private final String code;

}

```

## src/main/java/com/nubo/operation/vericlear/confirmed/models/enums/NotificationEnum.java

```java
package com.nubo.operation.vericlear.confirmed.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum NotificationEnum {

    NOTIFICATION_SILENT("NOTIFICACION_LISTA_SILENCIOSA");

    private final String value;
}

```

## src/main/java/com/nubo/operation/vericlear/confirmed/models/enums/NotificationTypeEnum.java

```java
package com.nubo.operation.vericlear.confirmed.models.enums;

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

## src/main/java/com/nubo/operation/vericlear/confirmed/models/enums/PropertiesEnum.java

```java
package com.nubo.operation.vericlear.confirmed.models.enums;

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
    CLIENT_BACKEND("client_backend"),
    CLIENT_USER_ENTITY("client_user_entity"),
    KAFKA_TOPIC("kafka_topic"),
    KAFKA_PARTITION("kafka_partition"),
    KAFKA_OFFSET("kafka_offset");

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

## src/main/java/com/nubo/operation/vericlear/confirmed/models/enums/ScreenEnum.java

```java
package com.nubo.operation.vericlear.confirmed.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum ScreenEnum {

    OPERATION_MANAGEMENT("031");

    private final String code;
}

```

## src/main/java/com/nubo/operation/vericlear/confirmed/models/enums/SideEnum.java

```java
package com.nubo.operation.vericlear.confirmed.models.enums;

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

## src/main/java/com/nubo/operation/vericlear/confirmed/models/enums/StatusEnum.java

```java
package com.nubo.operation.vericlear.confirmed.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum StatusEnum {

    REGISTERED(1L, "Operación registrada en Cámara"),
    CANCELED(11L, "Operación anulada en el sistema de negociación");

    private final Long id;
    private final String message;

}

```

## src/main/java/com/nubo/operation/vericlear/confirmed/models/enums/TypeEnum.java

```java
package com.nubo.operation.vericlear.confirmed.models.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Arrays;
import java.util.Objects;

@Getter
@RequiredArgsConstructor
public enum TypeEnum {

    JOINT_ACCOUNT(22L, "CUENTA AHORROS", "CUENTA"),
    MASTER_ACCOUNT(24L, "CUENTAS MASTER", "CUENTA"),
    COUNTED_OPERATION(60L, "CONTADO","OPERACIÓN"),
    REPO_OPERATION(61L, "REPO", "OPERACIÓN"),
    THIRD_PARTIES_POINT_ORIGIN(120L, "TERCEROS", "ORIGEN PUNTA"),
    OWN_POSITION_POINT_ORIGIN(121L, "POSICIÓN PROPIA", "ORIGEN PUNTA"),
    COLLECTIVE_PORTFOLIO_POINT_ORIGIN(122L, "CARTERA COLECTIVA", "ORIGEN PUNTA"),
    ACCOUNT_CUD(25L, "CUENTA CUD", "CUENTA CUD"),
    COMPENSATION(134L, "COMPENSACION", "CONCEPTO_CUENTA"),
    OWN_TO_OWN_ORIGIN(9999L, "PROPIA-PROPIA", "PROPIA-PROPIA"),
    COLLECTIVE_PORFOLIO_TO_COLLECTIVE_PORTFOLIO_ORIGIN(9998L, "CARTERA-CARTERA", "CARTERA-CARTERA");

    private final Long id;
    private final String description;
    private final String category;

    @JsonValue
    public Long getId() {
        return id;
    }

    @JsonCreator
    public static TypeEnum fromId(Long id) {
        return Arrays.stream(TypeEnum.values())
                .filter(type -> Objects.equals(type.id, id))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Unknown value: " + id));
    }

    @Converter(autoApply = true)
    public static class TypeEnumConverter implements AttributeConverter<TypeEnum, Long> {

        @Override
        public Long convertToDatabaseColumn(TypeEnum status) {
            return status != null ? status.getId() : null;
        }

        @Override
        public TypeEnum convertToEntityAttribute(Long dbData) {
            return dbData != null ? TypeEnum.fromId(dbData) : null;
        }
    }

}

```

## src/main/java/com/nubo/operation/vericlear/confirmed/models/enums/VersionApiEnum.java

```java
package com.nubo.operation.vericlear.confirmed.models.enums;

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

## src/main/java/com/nubo/operation/vericlear/confirmed/repository/DepositoryMappingRepository.java

```java
package com.nubo.operation.vericlear.confirmed.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.operation.vericlear.confirmed.models.entity.DepositoryMappingEntity;

public interface DepositoryMappingRepository extends JpaRepository<DepositoryMappingEntity, Long> {

    Optional<DepositoryMappingEntity> findByExternalCodeAndExternalSystem(String externalCode, String externalSystem);
}

```

## src/main/java/com/nubo/operation/vericlear/confirmed/repository/DirectDepositoryRepository.java

```java
package com.nubo.operation.vericlear.confirmed.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.operation.vericlear.confirmed.models.entity.DepositoryEntity;
import com.nubo.operation.vericlear.confirmed.models.entity.DirectDepositoryEntity;

public interface DirectDepositoryRepository extends JpaRepository<DirectDepositoryEntity, Long> {

    Optional<DirectDepositoryEntity> findByDepository(DepositoryEntity depositoryEntity);
}

```

## src/main/java/com/nubo/operation/vericlear/confirmed/repository/InvestorAccountRepository.java

```java
package com.nubo.operation.vericlear.confirmed.repository;

import com.nubo.operation.vericlear.confirmed.models.entity.InvestorAccountEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface InvestorAccountRepository extends JpaRepository<InvestorAccountEntity, Long> {

    Optional<InvestorAccountEntity> findFirstByInvestorDocumentNumberAndOriginTypeIdAndDepositoryIdOrderByIdAsc(
            String documentNumber,
            Long originTypeId,
            String depositoryId);

}

```

## src/main/java/com/nubo/operation/vericlear/confirmed/repository/ParticipantAccountRepository.java

```java
package com.nubo.operation.vericlear.confirmed.repository;


import com.nubo.operation.vericlear.confirmed.models.entity.DepositoryEntity;
import com.nubo.operation.vericlear.confirmed.models.entity.ParticipantAccountEntity;
import com.nubo.operation.vericlear.confirmed.models.entity.ParticipantEntity;
import com.nubo.operation.vericlear.confirmed.models.entity.TypeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ParticipantAccountRepository extends JpaRepository<ParticipantAccountEntity, Long> {

    Optional<ParticipantAccountEntity> findFirstByParticipantAndOriginTypeAndDepository(ParticipantEntity participant, TypeEntity originType, DepositoryEntity depositoryEntity);

}

```

## src/main/java/com/nubo/operation/vericlear/confirmed/repository/ParticipantBankAccountRepository.java

```java
package com.nubo.operation.vericlear.confirmed.repository;

import com.nubo.operation.vericlear.confirmed.models.entity.ParticipantBankAccountEntity;
import com.nubo.operation.vericlear.confirmed.models.entity.TypeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ParticipantBankAccountRepository extends JpaRepository<ParticipantBankAccountEntity, Long> {

    ParticipantBankAccountEntity findFirstByParticipantIdAndOriginTypeAndConceptTypeOrderByIdAsc(Long participantId,
                                                                                                 TypeEntity originType,
                                                                                                 TypeEntity conceptType);
}

```

## src/main/java/com/nubo/operation/vericlear/confirmed/repository/SettlementRepository.java

```java
package com.nubo.operation.vericlear.confirmed.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.operation.vericlear.confirmed.models.entity.SettlementEntity;
import com.nubo.operation.vericlear.confirmed.models.entity.SettlementKey;
import com.nubo.operation.vericlear.confirmed.models.entity.TradeEntity;

public interface SettlementRepository extends JpaRepository<SettlementEntity, SettlementKey> {

    List<SettlementEntity> findByTrade(TradeEntity tradeEntity);

}

```

## src/main/java/com/nubo/operation/vericlear/confirmed/repository/StatusMappingRepository.java

```java
package com.nubo.operation.vericlear.confirmed.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.operation.vericlear.confirmed.models.entity.StatusMappingEntity;

public interface StatusMappingRepository extends JpaRepository<StatusMappingEntity, Long> {

    Optional<StatusMappingEntity> findByExternalCodeAndExternalSystem(String externalCode, String externalSystem);
}

```

## src/main/java/com/nubo/operation/vericlear/confirmed/repository/TradeConfirmRepository.java

```java
package com.nubo.operation.vericlear.confirmed.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.operation.vericlear.confirmed.models.entity.TradeConfirmEntity;

public interface TradeConfirmRepository extends JpaRepository<TradeConfirmEntity, Long> {

}

```

## src/main/java/com/nubo/operation/vericlear/confirmed/repository/TradeRepository.java

```java
package com.nubo.operation.vericlear.confirmed.repository;


import com.nubo.operation.vericlear.confirmed.models.entity.TradeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.Optional;

public interface TradeRepository extends JpaRepository<TradeEntity, Long>{

    Optional<TradeEntity> findFirstByMatchIdAndMatchDateOrderByIdDesc(Long matchId, LocalDate matchDate);

}

```

## src/main/java/com/nubo/operation/vericlear/confirmed/repository/TradeStatusHistoryRepository.java

```java
package com.nubo.operation.vericlear.confirmed.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.operation.vericlear.confirmed.models.entity.TradeStatusHistoryEntity;
import com.nubo.operation.vericlear.confirmed.models.entity.TradeStatusHistoryKey;

public interface TradeStatusHistoryRepository extends JpaRepository<TradeStatusHistoryEntity, TradeStatusHistoryKey> {

}

```

## src/main/java/com/nubo/operation/vericlear/confirmed/repository/TypeRepository.java

```java
package com.nubo.operation.vericlear.confirmed.repository;

import com.nubo.operation.vericlear.confirmed.models.entity.TypeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TypeRepository extends JpaRepository<TypeEntity, Long> {

    Optional<TypeEntity> findByCategoryIgnoreCaseAndDescriptionIgnoreCase(String category, String description);
}

```

## src/main/java/com/nubo/operation/vericlear/confirmed/service/BatchCacheService.java

```java
package com.nubo.operation.vericlear.confirmed.service;

import com.nubo.operation.vericlear.confirmed.models.entity.DepositoryEntity;
import com.nubo.operation.vericlear.confirmed.models.entity.StatusEntity;
import com.nubo.operation.vericlear.confirmed.models.entity.TypeEntity;

public interface BatchCacheService {

    TypeEntity findByCategoryAndDescription(String category, String description);

    DepositoryEntity validateDepositoryEntity(String externalCode, String externalSystem);

    StatusEntity validateStatus(String statusExternalCode, String externalSystem);

}

```

## src/main/java/com/nubo/operation/vericlear/confirmed/service/ProcessMessageService.java

```java
package com.nubo.operation.vericlear.confirmed.service;

import com.nubo.operation.vericlear.confirmed.models.dto.request.AutomaticAssignmentInDto;
import com.nubo.operation.vericlear.confirmed.models.dto.request.TradeConfirmVericlearInDto;

public interface ProcessMessageService {

    void processConfirmVericlear(TradeConfirmVericlearInDto tradeConfirmVericlear);

    void processAutomaticAssignment(AutomaticAssignmentInDto automaticAssignmentInDto);
}

```

## src/main/java/com/nubo/operation/vericlear/confirmed/service/TradeTransactionService.java

```java
package com.nubo.operation.vericlear.confirmed.service;

import com.nubo.operation.vericlear.confirmed.models.dto.request.TradeConfirmVericlearInDto;
import com.nubo.operation.vericlear.confirmed.models.entity.TradeConfirmEntity;
import com.nubo.operation.vericlear.confirmed.models.entity.TradeEntity;

public interface TradeTransactionService {

    TradeEntity updateTradeByStatus(TradeConfirmVericlearInDto tradeConfirmVericlear);

    TradeConfirmEntity saveTradeConfirm(TradeConfirmVericlearInDto tradeConfirmVericlear);

    TradeEntity findTradeById(Long tradeId);
}

```

## src/main/java/com/nubo/operation/vericlear/confirmed/service/impl/BatchCacheServiceImpl.java

```java
package com.nubo.operation.vericlear.confirmed.service.impl;

import com.nubo.operation.vericlear.confirmed.exception.ServiceException;
import com.nubo.operation.vericlear.confirmed.exception.error.ErrorCode;
import com.nubo.operation.vericlear.confirmed.models.entity.DepositoryEntity;
import com.nubo.operation.vericlear.confirmed.models.entity.DepositoryMappingEntity;
import com.nubo.operation.vericlear.confirmed.models.entity.StatusEntity;
import com.nubo.operation.vericlear.confirmed.models.entity.StatusMappingEntity;
import com.nubo.operation.vericlear.confirmed.models.entity.TypeEntity;
import com.nubo.operation.vericlear.confirmed.repository.DepositoryMappingRepository;
import com.nubo.operation.vericlear.confirmed.repository.StatusMappingRepository;
import com.nubo.operation.vericlear.confirmed.repository.TypeRepository;
import com.nubo.operation.vericlear.confirmed.service.BatchCacheService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class BatchCacheServiceImpl implements BatchCacheService {

    private final TypeRepository typeRepository;
    private final DepositoryMappingRepository depositoryMappingRepository;
    private final StatusMappingRepository statusMappingRepository;

    @Override
    @Cacheable(value = "types", key = "#category + '-' + #description")
    public TypeEntity findByCategoryAndDescription(String category, String description) {
        return typeRepository.findByCategoryIgnoreCaseAndDescriptionIgnoreCase(category, description)
                .orElseThrow(() -> new ServiceException(ErrorCode.TYPE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    @Override
    @Cacheable(value = "depositoryMapping", key = "#externalCode + '-' + #externalSystem")
    public DepositoryEntity validateDepositoryEntity(String externalCode, String externalSystem) {
        DepositoryMappingEntity mapping = depositoryMappingRepository
                .findByExternalCodeAndExternalSystem(externalCode, externalSystem)
                .orElseThrow(() -> new ServiceException(ErrorCode.DEPOSITORY_MAPPING_NOT_FOUND));
        return mapping.getDepository();
    }

    @Cacheable(value = "statusMapping", key = "#statusExternalCode + '-' + #externalSystem")
    public StatusEntity validateStatus(String statusExternalCode, String externalSystem) {
        StatusMappingEntity statusMappingEntity = statusMappingRepository
                .findByExternalCodeAndExternalSystem(statusExternalCode, externalSystem)
                .orElseThrow(() -> new ServiceException(ErrorCode.STATUS_MAPPING_NOT_FOUND));
        return statusMappingEntity.getStatus();
    }

}

```

## src/main/java/com/nubo/operation/vericlear/confirmed/service/impl/ProcessMessageServiceImpl.java

```java
package com.nubo.operation.vericlear.confirmed.service.impl;

import java.math.BigDecimal;
import java.util.List;
import java.util.concurrent.TimeUnit;

import com.nubo.operation.vericlear.confirmed.client.email.service.EmailClient;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import com.nubo.operation.vericlear.confirmed.application.properties.PropertiesContext;
import com.nubo.operation.vericlear.confirmed.application.util.ApplicationUtils;
import com.nubo.operation.vericlear.confirmed.client.kafka.producer.KafkaNuboAdapter;
import com.nubo.operation.vericlear.confirmed.client.operation.cmd.models.dto.request.FractionInDto;
import com.nubo.operation.vericlear.confirmed.client.operation.cmd.service.OperationCmdClient;
import com.nubo.operation.vericlear.confirmed.exception.ServiceException;
import com.nubo.operation.vericlear.confirmed.exception.TradeNotYetAvailableException;
import com.nubo.operation.vericlear.confirmed.exception.error.ErrorCode;
import com.nubo.operation.vericlear.confirmed.helpers.ExceptionMessageUtil;
import com.nubo.operation.vericlear.confirmed.models.dto.request.AutomaticAssignmentInDto;
import com.nubo.operation.vericlear.confirmed.models.dto.request.TradeConfirmVericlearInDto;
import com.nubo.operation.vericlear.confirmed.models.dto.response.ErrorMessageVericlearOutDto;
import com.nubo.operation.vericlear.confirmed.models.dto.response.MetaDataOutDto;
import com.nubo.operation.vericlear.confirmed.models.dto.response.NotificationOutDto;
import com.nubo.operation.vericlear.confirmed.models.entity.DepositoryEntity;
import com.nubo.operation.vericlear.confirmed.models.entity.InvestorAccountEntity;
import com.nubo.operation.vericlear.confirmed.models.entity.ParticipantAccountEntity;
import com.nubo.operation.vericlear.confirmed.models.entity.ParticipantBankAccountEntity;
import com.nubo.operation.vericlear.confirmed.models.entity.ParticipantEntity;
import com.nubo.operation.vericlear.confirmed.models.entity.TradeEntity;
import com.nubo.operation.vericlear.confirmed.models.entity.TypeEntity;
import com.nubo.operation.vericlear.confirmed.models.enums.CountryCodeEnum;
import com.nubo.operation.vericlear.confirmed.models.enums.DirectAllocationEnum;
import com.nubo.operation.vericlear.confirmed.models.enums.NotificationEnum;
import com.nubo.operation.vericlear.confirmed.models.enums.NotificationTypeEnum;
import com.nubo.operation.vericlear.confirmed.models.enums.ScreenEnum;
import com.nubo.operation.vericlear.confirmed.models.enums.SideEnum;
import com.nubo.operation.vericlear.confirmed.models.enums.TypeEnum;
import com.nubo.operation.vericlear.confirmed.repository.InvestorAccountRepository;
import com.nubo.operation.vericlear.confirmed.repository.ParticipantAccountRepository;
import com.nubo.operation.vericlear.confirmed.repository.ParticipantBankAccountRepository;
import com.nubo.operation.vericlear.confirmed.service.BatchCacheService;
import com.nubo.operation.vericlear.confirmed.service.ProcessMessageService;
import com.nubo.operation.vericlear.confirmed.service.TradeTransactionService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class ProcessMessageServiceImpl implements ProcessMessageService {

    private final InvestorAccountRepository investorAccountRepository;
    private final ParticipantAccountRepository participantAccountRepository;
    private final ParticipantBankAccountRepository participantBankAccountRepository;
    private final OperationCmdClient operationCmdClient;
    private final TradeTransactionService tradeTransactionService;
    private final KafkaNuboAdapter kafkaNuboAdapter;
    private final BatchCacheService batchCacheService;
    private final ExceptionMessageUtil exceptionMessageUtil;
    private final EmailClient emailClient;

    @Override
    public void processConfirmVericlear(TradeConfirmVericlearInDto tradeConfirmVericlear) {
        log.info("Start method updateOperation");
        if (ObjectUtils.isEmpty(tradeConfirmVericlear)) {
            log.warn("No Confirmation records to persist.");
            return;
        }

        long totalStartNanos = System.nanoTime();
        long saveConfirmNanos = 0L;
        long saveTradeNanos = 0L;
        long assignmentNanos = 0L;
        long notificationNanos = 0L;
        long errorHandlingNanos = 0L;
        String outcome = "success";

        try {
            long phaseStart = System.nanoTime();
            tradeTransactionService.saveTradeConfirm(tradeConfirmVericlear);
            saveConfirmNanos = System.nanoTime() - phaseStart;

            phaseStart = System.nanoTime();
            TradeEntity tradeEntitySaved = tradeTransactionService.updateTradeByStatus(tradeConfirmVericlear);
            saveTradeNanos = System.nanoTime() - phaseStart;

        } catch (TradeNotYetAvailableException e) {
            outcome = "retry";
            log.info("Trade not yet available, will be retried via Kafka retry topic. matchId: {}",
                    tradeConfirmVericlear.getMatchId());
            throw e;
        } catch (Exception e) {
            outcome = "error";
            log.warn("Error processing message, Error: {}", e.getMessage());
            long phaseStart = System.nanoTime();
            this.sendErrorMessage(tradeConfirmVericlear, e);
            errorHandlingNanos = System.nanoTime() - phaseStart;
        } finally {
            logProcessingMetrics(tradeConfirmVericlear, outcome, saveConfirmNanos, saveTradeNanos,
                    assignmentNanos, notificationNanos, errorHandlingNanos, System.nanoTime() - totalStartNanos);
        }

        log.info("End method updateOperation");
    }

    @Override
    public void processAutomaticAssignment(AutomaticAssignmentInDto automaticAssignmentInDto) {
        log.info("Start method processAutomaticAssignment");

        if (ObjectUtils.isEmpty(automaticAssignmentInDto)) {
            log.warn("No Automatic Assignment records to process.");
            return;
        }

        TradeEntity tradeEntityLast = tradeTransactionService.findTradeById(automaticAssignmentInDto.getTradeId());
        boolean validationOrigins = validationInSourceQuoteBySides(tradeEntityLast);

        if(!validationOrigins){
            this.sendAutomaticAssignment(tradeEntityLast);
        }
        log.info("End method processAutomaticAssignment");
    }

    private void logProcessingMetrics(TradeConfirmVericlearInDto tradeConfirmVericlear,
            String outcome,
            long saveConfirmNanos,
            long saveTradeNanos,
            long assignmentNanos,
            long notificationNanos,
            long errorHandlingNanos,
            long totalNanos) {
        Long matchId = tradeConfirmVericlear != null ? tradeConfirmVericlear.getMatchId() : null;
        log.info(
                "VericlearMetrics outcome={} matchId={} saveConfirmMs={} saveTradeMs={} assignmentMs={} notificationMs={} errorHandlingMs={} totalMs={}",
                outcome,
                matchId,
                TimeUnit.NANOSECONDS.toMillis(saveConfirmNanos),
                TimeUnit.NANOSECONDS.toMillis(saveTradeNanos),
                TimeUnit.NANOSECONDS.toMillis(assignmentNanos),
                TimeUnit.NANOSECONDS.toMillis(notificationNanos),
                TimeUnit.NANOSECONDS.toMillis(errorHandlingNanos),
                TimeUnit.NANOSECONDS.toMillis(totalNanos));
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

    private void sendAutomaticAssignment(TradeEntity tradeEntity) {
        log.info("Validation to sendAutomaticAssignment for tradeId: {}", tradeEntity.getId());

        ParticipantEntity participantBuy = tradeEntity.getParticipantBuy();
        ParticipantEntity participantSell = tradeEntity.getParticipantSell();

        if ((participantBuy != null && participantBuy.getCountry() != null
                && participantBuy.getCountry().getCode().equalsIgnoreCase(CountryCodeEnum.COLOMBIA.getCode())) &&
                participantBuy.getDirectAllocation().equalsIgnoreCase(DirectAllocationEnum.TRUE.getId()) &&
                tradeEntity.getSourceQuoteBuyType().getId().equals(TypeEnum.OWN_POSITION_POINT_ORIGIN.getId())) {
            log.info("Generate assignment by BUY side");
            try {
                List<FractionInDto> fractionInDtoListByBuy = fractionByOwmPosition(tradeEntity, participantBuy,
                        tradeEntity.getDepositoryBuy(), tradeEntity.getSourceQuoteBuyType());

                operationCmdClient.createFractions(tradeEntity.getId(),
                        SideEnum.BUY.getId(), fractionInDtoListByBuy);
            } catch (Exception e) {
                log.error("Error processing automatic assignment for BUY side, tradeId: {}. Error: {}",
                        tradeEntity.getId(), e.getMessage());
            }
        }
        if ((participantSell != null && participantSell.getCountry() != null
                && participantSell.getCountry().getCode().equalsIgnoreCase(CountryCodeEnum.COLOMBIA.getCode())) &&
                participantSell.getDirectAllocation().equalsIgnoreCase(DirectAllocationEnum.TRUE.getId()) &&
                tradeEntity.getSourceQuoteSellType().getId().equals(TypeEnum.OWN_POSITION_POINT_ORIGIN.getId())) {
            log.info("Generate assignment by SELL side");
            try {
                List<FractionInDto> fractionInDtoListBySell = fractionByOwmPosition(tradeEntity, participantSell,
                        tradeEntity.getDepositorySell(), tradeEntity.getSourceQuoteSellType());

                operationCmdClient.createFractions(tradeEntity.getId(),
                        SideEnum.SELL.getId(), fractionInDtoListBySell);
            } catch (Exception e) {
                log.error("Error processing automatic assignment for SELL side, tradeId: {}. Error: {}",
                        tradeEntity.getId(), e.getMessage());
            }
        } else {
            log.info("No conditions met for automatic assignment for tradeId: {}", tradeEntity.getId());
        }
    }

    private List<FractionInDto> fractionByOwmPosition(TradeEntity tradeEntity, ParticipantEntity participantBySide,
            DepositoryEntity depositoryBySide, TypeEntity typeBySide) {

        Object titleAccount = searchTitleAccount(participantBySide, depositoryBySide, typeBySide);

        Long investorAccountId = titleAccount instanceof InvestorAccountEntity investorAccount
                ? investorAccount.getId()
                : null;
        Long participantAccountId = titleAccount instanceof ParticipantAccountEntity participantAccount
                ? participantAccount.getId()
                : null;

        FractionInDto fractionInDto = FractionInDto.builder()
                .investorAccountId(investorAccountId)
                .participantAccountId(participantAccountId)
                .fiduciarySpecialist(false)
                .sourceQuoteTypeId(typeBySide.getId())
                .reference("")
                .fractionQuantity(tradeEntity.getQuantity())
                .commissionPercentage(BigDecimal.ZERO)
                .valTax(BigDecimal.ZERO)
                .cashAccount(validateCudAccountFractionAssignmentV1(participantBySide))
                .custodianId(null)
                .ficAdministratorId(null)
                .build();

        return List.of(fractionInDto);
    }

    private Object searchTitleAccount(ParticipantEntity participantBySide, DepositoryEntity depositoryEntity,
            TypeEntity ownOriginType) {
        log.info("Validando cuenta titulo para: {}", participantBySide);

        return participantAccountRepository
                .findFirstByParticipantAndOriginTypeAndDepository(participantBySide, ownOriginType, depositoryEntity)
                .<Object>map(account -> account)
                .orElseGet(() -> investorAccountRepository
                        .findFirstByInvestorDocumentNumberAndOriginTypeIdAndDepositoryIdOrderByIdAsc(
                                participantBySide.getDocumentNumber(), ownOriginType.getId(), depositoryEntity.getId())
                        .orElseThrow(() -> new ServiceException(ErrorCode.ACCOUNT_NOT_FOUND, HttpStatus.NOT_FOUND)));
    }

    private BigDecimal validateCudAccountFractionAssignmentV1(ParticipantEntity participantBySide) {
        BigDecimal cudAccount = BigDecimal.ONE;

        TypeEntity originType = this.batchCacheService.findByCategoryAndDescription(
                TypeEnum.ACCOUNT_CUD.getCategory(), TypeEnum.ACCOUNT_CUD.getDescription());

        TypeEntity conceptType = this.batchCacheService.findByCategoryAndDescription(
                TypeEnum.COMPENSATION.getCategory(), TypeEnum.COMPENSATION.getDescription());

        ParticipantBankAccountEntity participantBankAccountOutDto = participantBankAccountRepository
                .findFirstByParticipantIdAndOriginTypeAndConceptTypeOrderByIdAsc(participantBySide.getId(),
                        originType, conceptType);

        if (participantBankAccountOutDto != null
                && !ObjectUtils.isEmpty(participantBankAccountOutDto.getBankAccount())) {
            cudAccount = new BigDecimal(participantBankAccountOutDto.getBankAccount());
        }

        log.info("End method validateCudAccountFractionAssignmentV1");
        return cudAccount;
    }

    private void sendErrorMessage(TradeConfirmVericlearInDto tradeConfirmVericlear, Exception e) {
        ErrorMessageVericlearOutDto errorMessage = ErrorMessageVericlearOutDto.builder()
                .errorMessage(exceptionMessageUtil.buildErrorMessage(e))
                .topic(PropertiesContext.getKafkaTopic())
                .partition(PropertiesContext.getKafkaPartition())
                .offset(PropertiesContext.getKafkaOffset())
                .messageVericlear(ApplicationUtils.convertObjectToJson(tradeConfirmVericlear))
                .build();
        kafkaNuboAdapter.sendErrorMessage(errorMessage);
    }

    public boolean validationInSourceQuoteBySides(TradeEntity tradeEntity) {
        if (tradeEntity == null) {
            log.warn("Trade entity is null.");
            throw new ServiceException(ErrorCode.TRADE_NOT_FOUND, "Trade entity cannot be null");
        }

        boolean ownPositionInBothSides = TypeEnum.OWN_POSITION_POINT_ORIGIN.getId().equals(tradeEntity.getSourceQuoteBuyType().getId())
                && TypeEnum.OWN_POSITION_POINT_ORIGIN.getId().equals(tradeEntity.getSourceQuoteSellType().getId());

        boolean collectivePortfolioInBothSides = TypeEnum.COLLECTIVE_PORTFOLIO_POINT_ORIGIN.getId().equals(tradeEntity.getSourceQuoteBuyType().getId())
                && TypeEnum.COLLECTIVE_PORTFOLIO_POINT_ORIGIN.getId().equals(tradeEntity.getSourceQuoteSellType().getId());

        if(ownPositionInBothSides || collectivePortfolioInBothSides){
            log.info("Trade with ID {} has the same source quote type in both sides: {}",
                    tradeEntity.getId(),
                    ownPositionInBothSides ? "OWN_POSITION_POINT_ORIGIN" : "COLLECTIVE_PORTFOLIO_POINT_ORIGIN");

            log.info("Email notification will be sent for trade with tradeId: {}", tradeEntity.getId());
            emailClient.sendEmailToOriginsNotAllowed(tradeEntity.getMatchId(), tradeEntity.getMatchDate(),
                    ownPositionInBothSides ? TypeEnum.OWN_TO_OWN_ORIGIN : TypeEnum.COLLECTIVE_PORFOLIO_TO_COLLECTIVE_PORTFOLIO_ORIGIN);
            return true;

        }else{
            log.info("Validation of origin types for trade with ID {} passed. Source quote types are different for BUY and SELL sides.", tradeEntity.getId());
            return false;
        }
    }
}

```

## src/main/java/com/nubo/operation/vericlear/confirmed/service/impl/TradeTransactionServiceImpl.java

```java
package com.nubo.operation.vericlear.confirmed.service.impl;

import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.util.Objects;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;

import com.nubo.operation.vericlear.confirmed.application.properties.PropertiesConfig;
import com.nubo.operation.vericlear.confirmed.application.properties.PropertiesContext;
import com.nubo.operation.vericlear.confirmed.application.util.ApplicationUtils;
import com.nubo.operation.vericlear.confirmed.exception.ServiceException;
import com.nubo.operation.vericlear.confirmed.exception.TradeNotYetAvailableException;
import com.nubo.operation.vericlear.confirmed.exception.error.ErrorCode;
import com.nubo.operation.vericlear.confirmed.models.dto.request.DateInDto;
import com.nubo.operation.vericlear.confirmed.models.dto.request.TradeConfirmVericlearInDto;
import com.nubo.operation.vericlear.confirmed.models.entity.StatusEntity;
import com.nubo.operation.vericlear.confirmed.models.entity.TradeConfirmEntity;
import com.nubo.operation.vericlear.confirmed.models.entity.TradeEntity;
import com.nubo.operation.vericlear.confirmed.models.entity.TradeStatusHistoryEntity;
import com.nubo.operation.vericlear.confirmed.models.enums.ExternalSystemEnum;
import com.nubo.operation.vericlear.confirmed.models.enums.StatusEnum;
import com.nubo.operation.vericlear.confirmed.repository.TradeConfirmRepository;
import com.nubo.operation.vericlear.confirmed.repository.TradeRepository;
import com.nubo.operation.vericlear.confirmed.repository.TradeStatusHistoryRepository;
import com.nubo.operation.vericlear.confirmed.service.BatchCacheService;
import com.nubo.operation.vericlear.confirmed.service.TradeTransactionService;

import jakarta.validation.constraints.NotNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class TradeTransactionServiceImpl implements TradeTransactionService {

    private final TradeRepository tradeRepository;
    private final TradeConfirmRepository tradeConfirmRepository;
    private final TradeStatusHistoryRepository tradeStatusHistoryRepository;
    private final PropertiesConfig propertiesConfig;
    private final BatchCacheService batchCacheService;

    @Transactional
    @Override
    public TradeEntity updateTradeByStatus(TradeConfirmVericlearInDto tradeConfirmVericlear) {
        if (ObjectUtils.isEmpty(tradeConfirmVericlear)) {
            log.warn("TradeConfirmVericlear is null or empty, skipping save operation");
            return null;
        }
        TradeEntity tradeEntityLast = validateTrade(tradeConfirmVericlear.getMatchId(),
                convertToLocalDate(tradeConfirmVericlear.getMatchDate()));

        StatusEntity newStatusEntity = batchCacheService.validateStatus(tradeConfirmVericlear.getStatus(),
                ExternalSystemEnum.VERICLEAR.getCode());

        if (!Objects.equals(StatusEnum.CANCELED.getId(), newStatusEntity.getId())) {
            log.warn("The new status is not CANCELED for matchId: {} - matchDate: {}. "
                    + "Will be retried via Kafka retry topic.", tradeConfirmVericlear.getMatchId(),
                    tradeConfirmVericlear.getMatchDate());
            return tradeEntityLast;
        }
        if (Objects.equals(tradeEntityLast.getStatus(), newStatusEntity)) {
            throw new ServiceException(ErrorCode.TRADE_STATUS_UNCHANGED,
                    "The new status is the same as the current status for tradeId: " + tradeEntityLast.getId());
        }
        if (!StatusEnum.CANCELED.getId().equals(newStatusEntity.getId())
                && (Boolean.TRUE.equals(tradeEntityLast.getAssignmentMarkBuy())
                        || Boolean.TRUE.equals(tradeEntityLast.getAssignmentMarkSell()))) {
            throw new ServiceException(ErrorCode.TRADE_ASSIGNMENT_MARKED,
                    "The trade has already been assigned for tradeId: " + tradeEntityLast.getId());
        }
        /*
        DepositoryEntity depositoryBuy = null;
        DepositoryEntity depositorySell = ObjectUtils.isEmpty(tradeConfirmVericlear.getSellCsdCode()) ? null
                : batchCacheService.validateDepositoryEntity(tradeConfirmVericlear.getSellCsdCode(),
                        ExternalSystemEnum.VERICLEAR.getCode());

        if (depositoryBuy == null && depositorySell == null) {
            throw new ServiceException(ErrorCode.DEPOSITORY_NOT_FOUND);
        }
        DepositoryEntity depository = depositorySell == null ? depositoryBuy : depositorySell;
        */
        TradeEntity tradeEntity = tradeEntityLast.toBuilder()
                .status(newStatusEntity)
                .depositoryBuy(tradeEntityLast.getDepositoryBuy())
                .depositorySell(tradeEntityLast.getDepositorySell())
                .canceledStatus(StatusEnum.CANCELED.getId().equals(newStatusEntity.getId()))
                .matchTime(ApplicationUtils.getOffsetDateTimeNow())
                .buyStatus(newStatusEntity)
                .sellStatus(newStatusEntity)
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyIp(PropertiesContext.getClientIp())
                .lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyDate(ApplicationUtils.getOffsetDateTimeNow())
                .build();

        TradeEntity tradeEntitySaved = tradeRepository.save(tradeEntity);
        log.info("Trade updated, tradeId: {}", tradeEntitySaved.getId());
        this.saveTradeStatusHistory(tradeEntitySaved, newStatusEntity);

        return tradeEntitySaved;
    }

    @Transactional
    @Override
    public TradeConfirmEntity saveTradeConfirm(TradeConfirmVericlearInDto tradeConfirmVericlear) {
        if (ObjectUtils.isEmpty(tradeConfirmVericlear)) {
            log.warn("TradeConfirmVericlear is null or empty, skipping save operation");
            return null;
        }
        TradeConfirmEntity tradeConfirmEntity = TradeConfirmEntity.builder()
                .matchId(tradeConfirmVericlear.getMatchId())
                .matchDate(convertToLocalDate(tradeConfirmVericlear.getMatchDate()))
                .status(tradeConfirmVericlear.getStatus())
                .csdCodeBuy(tradeConfirmVericlear.getBuyCsdCode())
                .csdCodeSell(tradeConfirmVericlear.getSellCsdCode())
                .vericlearConfirmReg(tradeConfirmVericlear)
                .dealId(tradeConfirmVericlear.getDealId())
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyIp(PropertiesContext.getClientIp())
                .lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyDateTime(PropertiesContext.getClientDatetime())
                .build();
        TradeConfirmEntity tradeConfirmEntitySaved = tradeConfirmRepository.save(tradeConfirmEntity);
        log.info("TradeConfirm saved: matchId {} - matchDate {}", tradeConfirmEntitySaved.getMatchId(),
                tradeConfirmEntitySaved.getMatchDate());
        return tradeConfirmEntitySaved;
    }

    @Override
    public TradeEntity findTradeById(Long tradeId) {
        if (tradeId == null) {
            log.warn("Trade ID is null.");
            throw new ServiceException(ErrorCode.TRADE_NOT_FOUND, "Trade ID cannot be null");
        }
        return tradeRepository.findById(tradeId)
                .orElseThrow(() -> new ServiceException(ErrorCode.TRADE_NOT_FOUND,
                        "Trade not found for tradeId: " + tradeId));
    }


    private TradeEntity validateTrade(Long matchId, LocalDate matchDate) {
        return tradeRepository
                .findFirstByMatchIdAndMatchDateOrderByIdDesc(matchId, matchDate)
                .orElseThrow(() -> {
                    log.warn("Trade not found for matchId: {} - matchDate: {}. "
                            + "Will be retried via Kafka retry topic.", matchId, matchDate);
                    return new TradeNotYetAvailableException(matchId);
                });
    }

    private void saveTradeStatusHistory(@NotNull TradeEntity tradeEntity, @NotNull StatusEntity statusEntity) {
        OffsetDateTime now = ApplicationUtils.getOffsetDateTimeNow();
        TradeStatusHistoryEntity tradeStatusHistoryEntity = TradeStatusHistoryEntity.builder()
                .trade(tradeEntity)
                .time(now)
                .status(statusEntity)
                .detail(StatusEnum.CANCELED.getId().equals(statusEntity.getId())
                        ? StatusEnum.CANCELED.getMessage()
                        : StatusEnum.REGISTERED.getMessage())
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyIp(PropertiesContext.getClientIp())
                .lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyDate(now)
                .build();
        tradeStatusHistoryRepository.save(tradeStatusHistoryEntity);
        log.info("Trade Status History saved for tradeId: {}", tradeEntity.getId());
    }

    private LocalDate convertToLocalDate(DateInDto dateInDto) {
        if (dateInDto == null) {
            return null;
        }
        return LocalDate.of(dateInDto.getYear(), dateInDto.getMonth(), dateInDto.getDay());
    }

}

```
