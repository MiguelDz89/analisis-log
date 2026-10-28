# nbo-png-ms-generador-csv-borde-back

Código fuente de producción y configuraciones. Captura local: 28/10/2026.

Incluye 105 archivos Java y 16 archivos de configuración, recursos y compilación/despliegue.

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
17. `src/main/java/com/nubo/settlement/report/generator/SettlementReportGeneratorApplication.java`
18. `src/main/java/com/nubo/settlement/report/generator/application/annotations/FixedWidth.java`
19. `src/main/java/com/nubo/settlement/report/generator/application/config/CacheConfig.java`
20. `src/main/java/com/nubo/settlement/report/generator/application/config/KafkaConsumerConfig.java`
21. `src/main/java/com/nubo/settlement/report/generator/application/config/KafkaProducerConfig.java`
22. `src/main/java/com/nubo/settlement/report/generator/application/context/GlobalContext.java`
23. `src/main/java/com/nubo/settlement/report/generator/application/database/NamingStrategyConfig.java`
24. `src/main/java/com/nubo/settlement/report/generator/application/database/UpperNamingConfig.java`
25. `src/main/java/com/nubo/settlement/report/generator/application/properties/PropertiesConfig.java`
26. `src/main/java/com/nubo/settlement/report/generator/application/properties/PropertiesContext.java`
27. `src/main/java/com/nubo/settlement/report/generator/application/util/ApplicationUtils.java`
28. `src/main/java/com/nubo/settlement/report/generator/application/util/FixedWidthStrategy.java`
29. `src/main/java/com/nubo/settlement/report/generator/client/ftp/FtpAdapter.java`
30. `src/main/java/com/nubo/settlement/report/generator/client/ftp/SftpConnectionHealthCheck.java`
31. `src/main/java/com/nubo/settlement/report/generator/client/kafka/consumer/KafkaCustodianListenerAdapter.java`
32. `src/main/java/com/nubo/settlement/report/generator/client/kafka/consumer/KafkaNuboListenerAdapter.java`
33. `src/main/java/com/nubo/settlement/report/generator/client/kafka/producer/KafkaNuboAdapter.java`
34. `src/main/java/com/nubo/settlement/report/generator/exception/ServiceException.java`
35. `src/main/java/com/nubo/settlement/report/generator/exception/error/ErrorCode.java`
36. `src/main/java/com/nubo/settlement/report/generator/exception/error/ErrorResponse.java`
37. `src/main/java/com/nubo/settlement/report/generator/exception/error/ErrorValidation.java`
38. `src/main/java/com/nubo/settlement/report/generator/exception/kafka/KafkaErrorBuild.java`
39. `src/main/java/com/nubo/settlement/report/generator/helpers/CustodianCsvGeneratorUtil.java`
40. `src/main/java/com/nubo/settlement/report/generator/helpers/CustodianReportSpecificationFactory.java`
41. `src/main/java/com/nubo/settlement/report/generator/helpers/CustodianUpdatesReportSpecificationFactory.java`
42. `src/main/java/com/nubo/settlement/report/generator/helpers/FixedWidthCsvGeneratorUtil.java`
43. `src/main/java/com/nubo/settlement/report/generator/helpers/MapperCustodianUtil.java`
44. `src/main/java/com/nubo/settlement/report/generator/helpers/MapperLiquidaUtil.java`
45. `src/main/java/com/nubo/settlement/report/generator/helpers/MapperPapeletaUtil.java`
46. `src/main/java/com/nubo/settlement/report/generator/helpers/ValidatorUtil.java`
47. `src/main/java/com/nubo/settlement/report/generator/models/domain/CustodianPackageReportData.java`
48. `src/main/java/com/nubo/settlement/report/generator/models/domain/CustodianReportCsvData.java`
49. `src/main/java/com/nubo/settlement/report/generator/models/domain/CustodianUpdatesReportCsvData.java`
50. `src/main/java/com/nubo/settlement/report/generator/models/domain/LiquidaReportData.java`
51. `src/main/java/com/nubo/settlement/report/generator/models/domain/PapeletaReportData.java`
52. `src/main/java/com/nubo/settlement/report/generator/models/dto/request/CustodianReportFilterInDto.java`
53. `src/main/java/com/nubo/settlement/report/generator/models/dto/request/CustodianReportPayloadInDto.java`
54. `src/main/java/com/nubo/settlement/report/generator/models/dto/request/CustodianUpdatesReportFilterInDto.java`
55. `src/main/java/com/nubo/settlement/report/generator/models/dto/request/CustodianUpdatesReportPayloadInDto.java`
56. `src/main/java/com/nubo/settlement/report/generator/models/dto/request/EventKafkaCustodianReportInDto.java`
57. `src/main/java/com/nubo/settlement/report/generator/models/dto/request/EventKafkaCustodianUpdatesReportInDto.java`
58. `src/main/java/com/nubo/settlement/report/generator/models/dto/request/EventKafkaInDto.java`
59. `src/main/java/com/nubo/settlement/report/generator/models/dto/request/NotificationRequestDto.java`
60. `src/main/java/com/nubo/settlement/report/generator/models/dto/request/SettlementReportFileInDto.java`
61. `src/main/java/com/nubo/settlement/report/generator/models/entity/ClassEntity.java`
62. `src/main/java/com/nubo/settlement/report/generator/models/entity/CountryEntity.java`
63. `src/main/java/com/nubo/settlement/report/generator/models/entity/CurrencyEntity.java`
64. `src/main/java/com/nubo/settlement/report/generator/models/entity/CustodianIncidentsReportViewEntity.java`
65. `src/main/java/com/nubo/settlement/report/generator/models/entity/CustodianReportViewEntity.java`
66. `src/main/java/com/nubo/settlement/report/generator/models/entity/DepositoryEntity.java`
67. `src/main/java/com/nubo/settlement/report/generator/models/entity/FileGenerateEntity.java`
68. `src/main/java/com/nubo/settlement/report/generator/models/entity/IdentificationTypeEntity.java`
69. `src/main/java/com/nubo/settlement/report/generator/models/entity/InvestorAccountEntity.java`
70. `src/main/java/com/nubo/settlement/report/generator/models/entity/InvestorEntity.java`
71. `src/main/java/com/nubo/settlement/report/generator/models/entity/IsinNumberEntity.java`
72. `src/main/java/com/nubo/settlement/report/generator/models/entity/MarketEntity.java`
73. `src/main/java/com/nubo/settlement/report/generator/models/entity/ParticipantAccountEntity.java`
74. `src/main/java/com/nubo/settlement/report/generator/models/entity/ParticipantEntity.java`
75. `src/main/java/com/nubo/settlement/report/generator/models/entity/ParticipantUserNuboEntity.java`
76. `src/main/java/com/nubo/settlement/report/generator/models/entity/ParticipantUserNuboKey.java`
77. `src/main/java/com/nubo/settlement/report/generator/models/entity/SecurityTitleEntity.java`
78. `src/main/java/com/nubo/settlement/report/generator/models/entity/SettlementEntity.java`
79. `src/main/java/com/nubo/settlement/report/generator/models/entity/SettlementKey.java`
80. `src/main/java/com/nubo/settlement/report/generator/models/entity/SideEntity.java`
81. `src/main/java/com/nubo/settlement/report/generator/models/entity/StatusEntity.java`
82. `src/main/java/com/nubo/settlement/report/generator/models/entity/TaxStatusEntity.java`
83. `src/main/java/com/nubo/settlement/report/generator/models/entity/TradeEntity.java`
84. `src/main/java/com/nubo/settlement/report/generator/models/entity/TradeEquityEntity.java`
85. `src/main/java/com/nubo/settlement/report/generator/models/entity/TradingSessionEntity.java`
86. `src/main/java/com/nubo/settlement/report/generator/models/entity/TradingSystemEntity.java`
87. `src/main/java/com/nubo/settlement/report/generator/models/entity/TypeEntity.java`
88. `src/main/java/com/nubo/settlement/report/generator/models/entity/UserNuboEntity.java`
89. `src/main/java/com/nubo/settlement/report/generator/models/enums/CustodianUpdateSideFilterEnum.java`
90. `src/main/java/com/nubo/settlement/report/generator/models/enums/CustodianUpdateStatusFilterEnum.java`
91. `src/main/java/com/nubo/settlement/report/generator/models/enums/FileTypeOptionEnum.java`
92. `src/main/java/com/nubo/settlement/report/generator/models/enums/FtpEnum.java`
93. `src/main/java/com/nubo/settlement/report/generator/models/enums/IdentificationTypeEnum.java`
94. `src/main/java/com/nubo/settlement/report/generator/models/enums/MarketEnum.java`
95. `src/main/java/com/nubo/settlement/report/generator/models/enums/NotificationMessageEnum.java`
96. `src/main/java/com/nubo/settlement/report/generator/models/enums/NotificationTypeEnum.java`
97. `src/main/java/com/nubo/settlement/report/generator/models/enums/PropertiesEnum.java`
98. `src/main/java/com/nubo/settlement/report/generator/models/enums/SettlementFieldEnum.java`
99. `src/main/java/com/nubo/settlement/report/generator/models/enums/SideEnum.java`
100. `src/main/java/com/nubo/settlement/report/generator/models/enums/StatusEnum.java`
101. `src/main/java/com/nubo/settlement/report/generator/models/enums/TypeEnum.java`
102. `src/main/java/com/nubo/settlement/report/generator/models/enums/UserTypeEnum.java`
103. `src/main/java/com/nubo/settlement/report/generator/models/enums/VersionApiEnum.java`
104. `src/main/java/com/nubo/settlement/report/generator/models/enums/VoucherTypeEnum.java`
105. `src/main/java/com/nubo/settlement/report/generator/repository/CustodianReportViewRepository.java`
106. `src/main/java/com/nubo/settlement/report/generator/repository/CustodianUpdatesReportRepository.java`
107. `src/main/java/com/nubo/settlement/report/generator/repository/FileGenerateRepository.java`
108. `src/main/java/com/nubo/settlement/report/generator/repository/ParticipantRepository.java`
109. `src/main/java/com/nubo/settlement/report/generator/repository/ParticipantUserNuboRepository.java`
110. `src/main/java/com/nubo/settlement/report/generator/repository/SettlementRepository.java`
111. `src/main/java/com/nubo/settlement/report/generator/repository/StatusRepository.java`
112. `src/main/java/com/nubo/settlement/report/generator/repository/TradeRepository.java`
113. `src/main/java/com/nubo/settlement/report/generator/repository/TypeRepository.java`
114. `src/main/java/com/nubo/settlement/report/generator/service/BatchService.java`
115. `src/main/java/com/nubo/settlement/report/generator/service/CustodianReportGeneratorService.java`
116. `src/main/java/com/nubo/settlement/report/generator/service/NotificationService.java`
117. `src/main/java/com/nubo/settlement/report/generator/service/SettlementReportGeneratorService.java`
118. `src/main/java/com/nubo/settlement/report/generator/service/impl/BatchServiceImpl.java`
119. `src/main/java/com/nubo/settlement/report/generator/service/impl/CustodianReportGeneratorServiceImpl.java`
120. `src/main/java/com/nubo/settlement/report/generator/service/impl/NotificationServiceImpl.java`
121. `src/main/java/com/nubo/settlement/report/generator/service/impl/SettlementReportGeneratorServiceImpl.java`

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
    <groupId>com.nubo.setlement.report.generator</groupId>
    <artifactId>settlement-report</artifactId>
    <version>0.53.0-beta.14</version>
    <name>${project.artifactId}</name>
    <description>Operations Settlement Report Generator</description>

    <properties>
        <java.version>21</java.version>
        <spring.port>8080</spring.port>
        <test.skip>false</test.skip>
        <datasource.url.application.name>ApplicationName=${project.artifactId}</datasource.url.application.name>
        <hikari.pool.name>${project.artifactId}-pool</hikari.pool.name>
        <camel.version>4.19.0</camel.version>
        <log4j2.version>2.25.5</log4j2.version>

        <!--  Security fixes for CVEs  -->
        <tomcat.version>11.0.25</tomcat.version>
        <!-- CVE-2026-91777: jackson-databind quadratic forward-reference completion, fixed in 3.1.7 (jackson 3) / 2.21.7 (jackson 2, pulled in transitively) -->
        <jackson-bom.version>3.1.7</jackson-bom.version>
        <jackson-2-bom.version>2.21.7</jackson-2-bom.version>

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
        <!-- CVE-2026-59949: lz4-java JNI XXHash byte array validation, fixed in 1.11.1, pulled in transitively by kafka-clients -->
        <dependency>
            <groupId>at.yawk.lz4</groupId>
            <artifactId>lz4-java</artifactId>
            <version>1.11.1</version>
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
                    <release>${java.version}</release>
                    <annotationProcessorPaths>
                        <path>
                            <groupId>org.projectlombok</groupId>
                            <artifactId>lombok</artifactId>
                            <version>${lombok.version}</version>
                        </path>
                    </annotationProcessorPaths>
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
server:
  port: "@spring.port@"
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
    com.nubo.settlement.report.generator: DEBUG
client:
  ftp:
    protocol: ${FTP_PROTOCOL:sftp}
    host: ${FTP_HOST}
    port: ${FTP_PORT}
    user: ${FTP_USER}
    password: ${FTP_PASSWORD}
    input-folder: ${FTP_SETTLEMENT_INPUT_FOLDER}
    custodian-report-folder: ${SFTP_CUSTODIAN_REPORT_INPUT_FOLDER:custodian/report}
    custodian-updates-report-folder: ${SFTP_CUSTODIAN_UPDATES_REPORT_INPUT_FOLDER:custodian/updates}
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
      listener-mode: ${KAFKA_NUBO_LISTENER_MODE_CSV_BORDE:LIQUIDA}
      group-id: ${KAFKA_NUBO_GROUP_ID}
      topic-name-report-liquida: ${KAFKA_NUBO_TOPIC_REPORT_LIQUIDA_FILE}
      topic-name-report-papeleta: ${KAFKA_NUBO_TOPIC_REPORT_PAPELETA_FILE}
      topic-name-custodian-report: ${KAFKA_NUBO_TOPIC_NAME_CUSTODIAN_REPORT}
      topic-name-custodian-updates-report: ${KAFKA_NUBO_TOPIC_NAME_CUSTODIAN_UPDATE_REPORT}
    notification:
      id: ${KAFKA_NUBO_NOTIFICATION_ID:23}
      event-type: ${KAFKA_NUBO_NOTIFICATION_EVENT_TYPE:NOTIFICACION_LISTA_PARA_USUARIO}
      module: ${KAFKA_NUBO_NOTIFICATION_MODULE:DEFAULT}
      kafka-notification-request-topic: ${KAFKA_NUBO_NOTIFICATION_REQUEST_TOPIC}

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
      pool-name: "@hikari.pool.name@"
  jpa:
    hibernate:
      ddl-auto: none
      default_schema: NUANBODB
    show-sql: "true"
    database-platform: org.hibernate.dialect.PostgreSQLDialect
logging:
  config: classpath:log/log4j2.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR
    com.nubo.settlement.report.generator: DEBUG
client:
  ftp:
    protocol: ${FTP_PROTOCOL:sftp}
    host: ${FTP_HOST}
    port: ${FTP_PORT}
    user: ${FTP_USER}
    password: ${FTP_PASSWORD}
    input-folder: ${FTP_SETTLEMENT_INPUT_FOLDER}
    custodian-report-folder: ${FTP_CUSTODIAN_REPORT_INPUT_FOLDER:custodian/report}
    custodian-updates-report-folder: ${FTP_CUSTODIAN_UPDATES_REPORT_INPUT_FOLDER:custodian/updates}
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
      listener-mode: ${KAFKA_NUBO_LISTENER_MODE_CSV_BORDE:LIQUIDA}
      group-id: ${KAFKA_NUBO_GROUP_ID}
      topic-name-report-liquida: ${KAFKA_NUBO_TOPIC_REPORT_LIQUIDA_FILE}
      topic-name-report-papeleta: ${KAFKA_NUBO_TOPIC_REPORT_PAPELETA_FILE}
      topic-name-custodian-report: ${KAFKA_NUBO_TOPIC_NAME_CUSTODIAN_REPORT}
      topic-name-custodian-updates-report: ${KAFKA_NUBO_TOPIC_NAME_CUSTODIAN_UPDATE_REPORT:custodian-updates-report-local}
    notification:
      id: ${KAFKA_NUBO_NOTIFICATION_ID:23}
      event-type: ${KAFKA_NUBO_NOTIFICATION_EVENT_TYPE:NOTIFICACION_LISTA_PARA_USUARIO}
      module: ${KAFKA_NUBO_NOTIFICATION_MODULE:DEFAULT}
      kafka-notification-request-topic: ${KAFKA_NUBO_NOTIFICATION_REQUEST_TOPIC}

```

## src/main/resources/application-prod.yml

```yaml
server:
  port: "@spring.port@"
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
client:
  ftp:
    protocol: ${FTP_PROTOCOL:sftp}
    host: ${FTP_HOST}
    port: ${FTP_PORT}
    user: ${FTP_USER}
    password: ${FTP_PASSWORD}
    input-folder: ${FTP_SETTLEMENT_INPUT_FOLDER}
    custodian-report-folder: ${SFTP_CUSTODIAN_REPORT_INPUT_FOLDER:custodian/report}
    custodian-updates-report-folder: ${SFTP_CUSTODIAN_UPDATES_REPORT_INPUT_FOLDER:custodian/updates}
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
      listener-mode: ${KAFKA_NUBO_LISTENER_MODE_CSV_BORDE:LIQUIDA}
      group-id: ${KAFKA_NUBO_GROUP_ID}
      topic-name-report-liquida: ${KAFKA_NUBO_TOPIC_REPORT_LIQUIDA_FILE}
      topic-name-report-papeleta: ${KAFKA_NUBO_TOPIC_REPORT_PAPELETA_FILE}
      topic-name-custodian-report: ${KAFKA_NUBO_TOPIC_NAME_CUSTODIAN_REPORT}
      topic-name-custodian-updates-report: ${KAFKA_NUBO_TOPIC_NAME_CUSTODIAN_UPDATE_REPORT}
    notification:
      id: ${KAFKA_NUBO_NOTIFICATION_ID:23}
      event-type: ${KAFKA_NUBO_NOTIFICATION_EVENT_TYPE:NOTIFICACION_LISTA_PARA_USUARIO}
      module: ${KAFKA_NUBO_NOTIFICATION_MODULE:DEFAULT}
      kafka-notification-request-topic: ${KAFKA_NUBO_NOTIFICATION_REQUEST_TOPIC}

```

## src/main/resources/application-qa.yml

```yaml
server:
  port: "@spring.port@"
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
client:
  ftp:
    protocol: ${FTP_PROTOCOL:sftp}
    host: ${FTP_HOST}
    port: ${FTP_PORT}
    user: ${FTP_USER}
    password: ${FTP_PASSWORD}
    input-folder: ${FTP_SETTLEMENT_INPUT_FOLDER}
    custodian-report-folder: ${SFTP_CUSTODIAN_REPORT_INPUT_FOLDER:custodian/report}
    custodian-updates-report-folder: ${SFTP_CUSTODIAN_UPDATES_REPORT_INPUT_FOLDER:custodian/updates}
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
      listener-mode: ${KAFKA_NUBO_LISTENER_MODE_CSV_BORDE:LIQUIDA}
      group-id: ${KAFKA_NUBO_GROUP_ID}
      topic-name-report-liquida: ${KAFKA_NUBO_TOPIC_REPORT_LIQUIDA_FILE}
      topic-name-report-papeleta: ${KAFKA_NUBO_TOPIC_REPORT_PAPELETA_FILE}
      topic-name-custodian-report: ${KAFKA_NUBO_TOPIC_NAME_CUSTODIAN_REPORT}
      topic-name-custodian-updates-report: ${KAFKA_NUBO_TOPIC_NAME_CUSTODIAN_UPDATE_REPORT}
    notification:
      id: ${KAFKA_NUBO_NOTIFICATION_ID:23}
      event-type: ${KAFKA_NUBO_NOTIFICATION_EVENT_TYPE:NOTIFICACION_LISTA_PARA_USUARIO}
      module: ${KAFKA_NUBO_NOTIFICATION_MODULE:DEFAULT}
      kafka-notification-request-topic: ${KAFKA_NUBO_NOTIFICATION_REQUEST_TOPIC}

```

## src/main/resources/application-uat.yml

```yaml
server:
  port: "@spring.port@"
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
client:
  ftp:
    protocol: ${FTP_PROTOCOL:sftp}
    host: ${FTP_HOST}
    port: ${FTP_PORT}
    user: ${FTP_USER}
    password: ${FTP_PASSWORD}
    input-folder: ${FTP_SETTLEMENT_INPUT_FOLDER}
    custodian-report-folder: ${SFTP_CUSTODIAN_REPORT_INPUT_FOLDER:custodian/report}
    custodian-updates-report-folder: ${SFTP_CUSTODIAN_UPDATES_REPORT_INPUT_FOLDER:custodian/updates}
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

      listener-mode: ${KAFKA_NUBO_LISTENER_MODE_CSV_BORDE:LIQUIDA}
      group-id: ${KAFKA_NUBO_GROUP_ID}
      topic-name-report-liquida: ${KAFKA_NUBO_TOPIC_REPORT_LIQUIDA_FILE}
      topic-name-report-papeleta: ${KAFKA_NUBO_TOPIC_REPORT_PAPELETA_FILE}
      topic-name-custodian-report: ${KAFKA_NUBO_TOPIC_NAME_CUSTODIAN_REPORT}
      topic-name-custodian-updates-report: ${KAFKA_NUBO_TOPIC_NAME_CUSTODIAN_UPDATE_REPORT}
    notification:
      id: ${KAFKA_NUBO_NOTIFICATION_ID:23}
      event-type: ${KAFKA_NUBO_NOTIFICATION_EVENT_TYPE:NOTIFICACION_LISTA_PARA_USUARIO}
      module: ${KAFKA_NUBO_NOTIFICATION_MODULE:DEFAULT}
      kafka-notification-request-topic: ${KAFKA_NUBO_NOTIFICATION_REQUEST_TOPIC}

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

,------. ,------.,------. ,-----. ,------.,--------.  ,----.   ,------.,--.  ,--.,------.,------.   ,---. ,--------.,-----. ,------.  ,-----.   ,-----. ,------. ,------.  ,------.
|  .--. '|  .---'|  .--. '  .-.  '|  .--. '--.  .--' '  .-./   |  .---'|  ,'.|  ||  .---'|  .--. ' /  O  \'--.  .--'  .-.  '|  .--. ' |  |) /_ '  .-.  '|  .--. '|  .-.  \ |  .---'
|  '--'.'|  `--, |  '--' |  | |  ||  '--'.'  |  |    |  | .---.|  `--, |  |' '  ||  `--, |  '--'.'|  .-.  |  |  |  |  | |  ||  '--'.' |  .-.  \|  | |  ||  '--'.'|  |  \  :|  `--,
|  |\  \ |  `---.|  | --''  '-'  '|  |\  \   |  |    '  '--'  ||  `---.|  | `   ||  `---.|  |\  \ |  | |  |  |  |  '  '-'  '|  |\  \  |  '--' /'  '-'  '|  |\  \ |  '--'  /|  `---.
`--' '--'`------'`--'     `-----' `--' '--'  `--'     `------' `------'`--'  `--'`------'`--' '--'`--' `--'  `--'   `-----' `--' '--' `------'  `-----' `--' '--'`-------' `------'

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

## src/main/java/com/nubo/settlement/report/generator/SettlementReportGeneratorApplication.java

```java
package com.nubo.settlement.report.generator;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SettlementReportGeneratorApplication {

	public static void main(String[] args) {
		SpringApplication.run(SettlementReportGeneratorApplication.class, args);
	}

}

```

## src/main/java/com/nubo/settlement/report/generator/application/annotations/FixedWidth.java

```java
package com.nubo.settlement.report.generator.application.annotations;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.FIELD)
public @interface FixedWidth {

    int order();

    int length();

    Direction direction() default Direction.RIGHT;

    char paddingChar() default ' ';

    char firstChar() default '\0';

    enum Direction {
        LEFT,
        RIGHT
    }
}

```

## src/main/java/com/nubo/settlement/report/generator/application/config/CacheConfig.java

```java
package com.nubo.settlement.report.generator.application.config;

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
                buildCache("status", 1, TimeUnit.HOURS),
                buildCache("types", 10, TimeUnit.MINUTES)));

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

## src/main/java/com/nubo/settlement/report/generator/application/config/KafkaConsumerConfig.java

```java
package com.nubo.settlement.report.generator.application.config;

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

import com.nubo.settlement.report.generator.application.properties.PropertiesConfig;
import com.nubo.settlement.report.generator.exception.ServiceException;
import com.nubo.settlement.report.generator.exception.error.ErrorCode;
import com.nubo.settlement.report.generator.exception.kafka.KafkaErrorBuild;
import com.nubo.settlement.report.generator.models.dto.request.EventKafkaCustodianReportInDto;
import com.nubo.settlement.report.generator.models.dto.request.EventKafkaCustodianUpdatesReportInDto;
import com.nubo.settlement.report.generator.models.dto.request.EventKafkaInDto;

import lombok.RequiredArgsConstructor;

@EnableKafka
@Configuration
@RequiredArgsConstructor
public class KafkaConsumerConfig {

    private final Environment environment;
    private final PropertiesConfig propertiesConfig;

    @Bean
    ConcurrentKafkaListenerContainerFactory<String, EventKafkaInDto> kafkaNuboListenerContainerFactory(
            DefaultErrorHandler errorHandler) {
        ConcurrentKafkaListenerContainerFactory<String, EventKafkaInDto> factory = new ConcurrentKafkaListenerContainerFactory<>();
        factory.setConsumerFactory(consumerFactoryKafkaNubo(EventKafkaInDto.class));
        factory.setCommonErrorHandler(errorHandler);
        factory.getContainerProperties().setDeliveryAttemptHeader(true);
        return factory;
    }

    @Bean
    ConcurrentKafkaListenerContainerFactory<String, EventKafkaCustodianReportInDto> kafkaCustodianReportListenerContainerFactory(
            DefaultErrorHandler errorHandler) {
        ConcurrentKafkaListenerContainerFactory<String, EventKafkaCustodianReportInDto> factory = new ConcurrentKafkaListenerContainerFactory<>();
        factory.setConsumerFactory(consumerFactoryKafkaNubo(EventKafkaCustodianReportInDto.class));
        factory.setCommonErrorHandler(errorHandler);
        factory.getContainerProperties().setDeliveryAttemptHeader(true);
        return factory;
    }

    @Bean
    ConcurrentKafkaListenerContainerFactory<String, EventKafkaCustodianUpdatesReportInDto> kafkaCustodianUpdatesReportListenerContainerFactory(
            DefaultErrorHandler errorHandler) {
        ConcurrentKafkaListenerContainerFactory<String, EventKafkaCustodianUpdatesReportInDto> factory = new ConcurrentKafkaListenerContainerFactory<>();
        factory.setConsumerFactory(consumerFactoryKafkaNubo(EventKafkaCustodianUpdatesReportInDto.class));
        factory.setCommonErrorHandler(errorHandler);
        factory.getContainerProperties().setDeliveryAttemptHeader(true);
        return factory;
    }

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
        configProps.put(JacksonJsonDeserializer.TRUSTED_PACKAGES, "com.nubo");

        if (!isLocalProfile()) {
            configProps.put("sasl.mechanism", propertiesConfig.getKafkaNuboSaslMechanism());
            configProps.put("sasl.jaas.config", propertiesConfig.getKafkaNuboSaslJaasConfig());
        }

        return new DefaultKafkaConsumerFactory<>(
                configProps,
                new StringDeserializer(),
                new ErrorHandlingDeserializer<>(new JacksonJsonDeserializer<>(responseType)));
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

## src/main/java/com/nubo/settlement/report/generator/application/config/KafkaProducerConfig.java

```java
package com.nubo.settlement.report.generator.application.config;


import com.nubo.settlement.report.generator.application.properties.PropertiesConfig;
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

## src/main/java/com/nubo/settlement/report/generator/application/context/GlobalContext.java

```java
package com.nubo.settlement.report.generator.application.context;

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

## src/main/java/com/nubo/settlement/report/generator/application/database/NamingStrategyConfig.java

```java
package com.nubo.settlement.report.generator.application.database;

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

## src/main/java/com/nubo/settlement/report/generator/application/database/UpperNamingConfig.java

```java
package com.nubo.settlement.report.generator.application.database;

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

## src/main/java/com/nubo/settlement/report/generator/application/properties/PropertiesConfig.java

```java
package com.nubo.settlement.report.generator.application.properties;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import lombok.Getter;

@Component
@Getter
public class PropertiesConfig {

    @Value("${spring.application.name}")
    private String apiName;

    @Value("${client.ftp.protocol}")
    private String ftpProtocol;

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

    @Value("${client.ftp.custodian-report-folder:custodian/report}")
    private String ftpCustodianReportFolder;

    @Value("${client.ftp.custodian-updates-report-folder:custodian/updates}")
    private String ftpCustodianUpdatesReportFolder;

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

    @Value("${kafka.nubo.consumer.topic-name-report-liquida}")
    private String kafkaNuboConsumerTopicNameReportLiquida;

    @Value("${kafka.nubo.consumer.topic-name-report-papeleta}")
    private String kafkaNuboConsumerTopicNameReportPapeleta;

    @Value("${kafka.nubo.consumer.topic-name-custodian-report}")
    private String kafkaNuboCustodianReportTopic;

    @Value("${kafka.nubo.consumer.topic-name-custodian-updates-report}")
    private String kafkaNuboCustodianUpdatesReportTopic;

    @Value("${kafka.nubo.consumer.group-id}")
    private String kafkaNuboConsumerGroupId;

    @Value("${kafka.nubo.notification.id}")
    private String kafkaNuboNotificationId;

    @Value("${kafka.nubo.notification.event-type}")
    private String kafkaNuboNotificationEventType;

    @Value("${kafka.nubo.notification.module}")
    private String kafkaNuboNotificationModule;

    @Value("${kafka.nubo.notification.kafka-notification-request-topic}")
    private String kafkaNuboNotificationTopic;

    @Value("${kafka.nubo.consumer.listener-mode:LIQUIDA}")
    private String listenerMode;

    public boolean isLiquidaListenerEnabled() {
        return "LIQUIDA".equalsIgnoreCase(listenerMode);
    }

    public boolean isPapeletaListenerEnabled() {
        return "PAPELETA".equalsIgnoreCase(listenerMode);
    }

    public boolean isCustodianListenerEnabled() {
        return "CUSTODIAN".equalsIgnoreCase(listenerMode);
    }

    public boolean isCustodianUpdateListenerEnabled() {
        return "CUSTODIAN_UPDATE".equalsIgnoreCase(listenerMode);
    }
}

```

## src/main/java/com/nubo/settlement/report/generator/application/properties/PropertiesContext.java

```java
package com.nubo.settlement.report.generator.application.properties;

import com.nubo.settlement.report.generator.application.context.GlobalContext;
import com.nubo.settlement.report.generator.application.util.ApplicationUtils;
import com.nubo.settlement.report.generator.models.enums.PropertiesEnum;
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

## src/main/java/com/nubo/settlement/report/generator/application/util/ApplicationUtils.java

```java
package com.nubo.settlement.report.generator.application.util;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

import org.springframework.stereotype.Component;

import com.nubo.settlement.report.generator.exception.ServiceException;
import com.nubo.settlement.report.generator.exception.error.ErrorCode;

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

    private static final String FORMAT_DATETIME = "yyyy-MM-dd'T'HH:mm:ss";
    private static final String FORMAT_DATE = "yyyy-MM-dd";
    private static final String FORMAT_DATE_PLANE = "yyyyMMdd";
    private static final String FORMAT_DD_MM_YYYY_HHMMSS = "dd-MM-yyyy_HHmmss";
    private static final String FORMAT_TIME = "HH:mm:ss";

    @PostConstruct
    private void init() {
        MAPPER = this.objectMapper;
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

    public static String convertLocalDateTimeToString(LocalDateTime localDateTime) {
        return localDateTime.format(DateTimeFormatter.ofPattern(ApplicationUtils.getFormatDatetime()));
    }

    public static String convertLocalDateTimeToStringDdMmYyyyHhmmss(LocalDateTime localDateTime) {
        return localDateTime.format(DateTimeFormatter.ofPattern(FORMAT_DD_MM_YYYY_HHMMSS));
    }

    public static LocalDateTime convertStringToLocalDateTime(String timeString) {
        return LocalDateTime.parse(timeString, DateTimeFormatter.ofPattern(FORMAT_DATETIME));
    }

    public static LocalDate convertStringToLocalDate(String dateString) {
        return LocalDate.parse(dateString, DateTimeFormatter.ofPattern(FORMAT_DATE));
    }

    public static String convertLocalTimeToString(LocalTime localTime) {
        return localTime.format(DateTimeFormatter.ofPattern(FORMAT_TIME));
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

    public static <T> T convertJsonNodeToObject(JsonNode jsonNode, Class<T> clazz) {
        try {
            return MAPPER.treeToValue(jsonNode, clazz);
        } catch (JacksonException e) {
            throw new ServiceException(ErrorCode.ERROR_DESERIALIZER_JSON, e);
        }
    }

    public static JsonNode convertObjectToJsonNode(Object object) {
        return MAPPER.valueToTree(object);
    }

    public static String localDateToPlane(LocalDate date) {
        if (date == null) {
            return null;
        }
        return date.format(DateTimeFormatter.ofPattern(FORMAT_DATE_PLANE));
    }

    public static String localDateTimeToPlane(LocalDateTime dateTime) {
        if (dateTime == null) {
            return null;
        }
        return dateTime.format(DateTimeFormatter.ofPattern(FORMAT_DATE_PLANE));
    }

}

```

## src/main/java/com/nubo/settlement/report/generator/application/util/FixedWidthStrategy.java

```java
package com.nubo.settlement.report.generator.application.util;

import java.io.IOException;
import java.io.StringWriter;
import java.io.Writer;
import java.lang.reflect.Field;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;

import com.nubo.settlement.report.generator.application.annotations.FixedWidth;
import com.nubo.settlement.report.generator.application.annotations.FixedWidth.Direction;

public class FixedWidthStrategy {

    private static final String CRLF = "\r\n";

    /**
     * Generates a fixed-width file from a list of objects annotated
     * with @FixedWidth
     *
     * @param data
     *             List of objects to process
     * @param <T>
     *             Object type that must have fields annotated with @FixedWidth
     * @return String with the fixed-width file content
     */
    public static <T> String generate(List<T> data) {
        if (data == null || data.isEmpty()) {
            return "";
        }

        StringWriter writer = new StringWriter();

        for (T object : data) {
            StringBuilder line = new StringBuilder();

            // Get all fields annotated with @FixedWidth and sort them by order
            Field[] fields = object.getClass().getDeclaredFields();
            Arrays.stream(fields)
                    .filter(field -> field.isAnnotationPresent(FixedWidth.class))
                    .sorted(Comparator.comparingInt(field -> field.getAnnotation(FixedWidth.class).order()))
                    .forEach(field -> {
                        try {
                            field.setAccessible(true);
                            Object value = field.get(object);
                            FixedWidth annotation = field.getAnnotation(FixedWidth.class);

                            String formattedValue = formatValue(
                                    value,
                                    annotation.length(),
                                    annotation.direction(),
                                    annotation.paddingChar(),
                                    annotation.firstChar());

                            line.append(formattedValue);
                        } catch (IllegalAccessException e) {
                            throw new RuntimeException("Error accessing field: " + field.getName(), e);
                        }
                    });

            writer.write(line.toString());
            writer.write(CRLF);
        }

        return writer.toString();
    }

    public static <T> void generateToWriter(List<T> data, Writer writer) {
        if (data == null || data.isEmpty()) {
            return;
        }

        try {
            for (T object : data) {
                StringBuilder line = new StringBuilder();

                Field[] fields = object.getClass().getDeclaredFields();
                Arrays.stream(fields)
                        .filter(field -> field.isAnnotationPresent(FixedWidth.class))
                        .sorted(Comparator.comparingInt(field -> field.getAnnotation(FixedWidth.class).order()))
                        .forEach(field -> {
                            try {
                                field.setAccessible(true);
                                Object value = field.get(object);
                                FixedWidth annotation = field.getAnnotation(FixedWidth.class);

                                String formattedValue = formatValue(
                                        value,
                                        annotation.length(),
                                        annotation.direction(),
                                        annotation.paddingChar(),
                                        annotation.firstChar());

                                line.append(formattedValue);
                            } catch (IllegalAccessException e) {
                                throw new RuntimeException("Error accessing field: " + field.getName(), e);
                            }
                        });

                writer.write(line.toString());
                writer.write(CRLF);
            }
            writer.flush();
        } catch (IOException e) {
            throw new RuntimeException("Error writing fixed-width data", e);
        }
    }

    /**
     * Formats a value according to fixed-width specifications
     *
     * @param value
     *                    Value to format
     * @param length
     *                    Field length
     * @param direction
     *                    Padding direction (LEFT or RIGHT)
     * @param paddingChar
     *                    Padding character
     * @return Formatted string with the specified width
     */
    private static String formatValue(Object value, int length, Direction direction, char paddingChar, char firstChar) {
        String str = value == null ? "" : value.toString();

        boolean hasFirstChar = firstChar != '\0';
        int contentLength = hasFirstChar ? length - 1 : length;

        // If value exceeds contentLength, truncate
        if (str.length() > contentLength) {
            str = str.substring(0, contentLength);

            // If ends with dot after truncating, remove it
            if (str.endsWith(".")) {
                str = str.substring(0, str.length() - 1);
            }
        }

        // If value is shorter than contentLength, apply padding
        if (str.length() < contentLength) {
            int paddingSize = contentLength - str.length();
            String padding = String.valueOf(paddingChar).repeat(paddingSize);

            if (direction == Direction.LEFT) {
                str = padding + str;
            } else {
                str = str + padding;
            }
        }

        return hasFirstChar ? firstChar + str : str;
    }

    public static String formatField(String value, int length, boolean removePunctuation) {
        if (value == null)
            value = "";

        if (removePunctuation) {
            value = value.replaceAll("[-_.\\s]", "");
        } else {
            value = value.replaceAll("[^a-zA-Z0-9]", "");
        }

        value = value.substring(0, Math.min(value.length(), length));

        return String.format("%" + length + "s", value);
    }

    public static String formatNumber(java.math.BigDecimal number) {
        if (number == null)
            return "0";
        return String.format("%,.2f", number.doubleValue()).replace(",", "");
    }

    public static String formatNumber(Double number) {
        if (number == null)
            return "0";
        return String.format("%,.2f", number).replace(",", "");
    }
}

```

## src/main/java/com/nubo/settlement/report/generator/client/ftp/FtpAdapter.java

```java
package com.nubo.settlement.report.generator.client.ftp;

import org.apache.camel.Exchange;
import org.apache.camel.LoggingLevel;
import org.apache.camel.builder.RouteBuilder;
import org.springframework.stereotype.Component;

import com.nubo.settlement.report.generator.application.properties.PropertiesConfig;
import com.nubo.settlement.report.generator.models.enums.FtpEnum;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Component
@RequiredArgsConstructor
@Slf4j
public class FtpAdapter extends RouteBuilder {

    private final PropertiesConfig propertiesConfig;

    @Override
    public void configure() {

        onException(Exception.class)
                .maximumRedeliveries(0)
                .handled(true)
                .log(LoggingLevel.ERROR,
                        "Error in FTP route: ${routeId}, Exception: ${exception.class.name} - ${exception.message}");

        from(FtpEnum.FROM_READ_FILE.getValue())
                .routeId("ftp-read-on-demand")
                .pollEnrich(buildFtpUri(propertiesConfig.getFtpInputFolder(), true), 2000)
                .choice()
                .when(body().isNull())
                .log(LoggingLevel.ERROR, "No file found in FTP")
                .stop()
                .otherwise()
                .log("Processing file: ${file:name}")
                .convertBodyTo(String.class)
                .end();

        from(FtpEnum.FROM_WHITE_PROCESS_FILE.getValue())
                .routeId("ftp-write-process")
                .log(LoggingLevel.INFO, "Preparing to upload file to SFTP: ${header.CamelFileName}")
                .process(exchange -> {
                    String fileName = exchange.getIn().getHeader(Exchange.FILE_NAME, String.class);
                    exchange.getIn().setHeader("FullRemotePath",
                            fullRemotePath(propertiesConfig.getFtpInputFolder(), fileName));
                })
                .toD(buildFtpUri(propertiesConfig.getFtpInputFolder(), false))
                .log(LoggingLevel.INFO, "FTP, Valid file: ${file:name} → created.");
    }

    private String buildFtpUri(String folder, boolean isReadOperation) {
        log.info("buildFtpUri Init");
        StringBuilder uri = new StringBuilder();
        boolean isSftp = "sftp".equalsIgnoreCase(propertiesConfig.getFtpProtocol());

        uri.append(baseUri())
                .append(folder.startsWith("/") ? folder : "/" + folder)
                .append("?binary=false")
                .append("&charset=UTF-8")
                .append("&passiveMode=true")
                .append("&autoCreate=true")
                .append("&connectTimeout=30000")
                .append("&soTimeout=30000");

        if (isSftp) {
            uri.append("&strictHostKeyChecking=no")
                    .append("&knownHostsFile=/dev/null");
        } else {
            uri.append("&ftpClientParameters.passiveNatWorkaround=true");
        }

        if (!isReadOperation) {
            uri.append("&fileExist=Override");
        }

        uri.append("&password=").append(propertiesConfig.getFtpPassword());

        log.info("SFTP URI for folder '{}': {}", folder,
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
        uri.append(propertiesConfig.getFtpProtocol().toLowerCase()).append("://")
                .append(propertiesConfig.getFtpUser()).append("@")
                .append(propertiesConfig.getFtpHost()).append(":")
                .append(propertiesConfig.getFtpPort());
        return uri;
    }

}

```

## src/main/java/com/nubo/settlement/report/generator/client/ftp/SftpConnectionHealthCheck.java

```java
package com.nubo.settlement.report.generator.client.ftp;

import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

import com.jcraft.jsch.ChannelSftp;
import com.jcraft.jsch.JSch;
import com.jcraft.jsch.Session;
import com.nubo.settlement.report.generator.application.properties.PropertiesConfig;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Component
@RequiredArgsConstructor
@Slf4j
public class SftpConnectionHealthCheck {

    private final PropertiesConfig propertiesConfig;

    @EventListener(ApplicationReadyEvent.class)
    public void testSftpConnection() {
        log.info("Testing SFTP connection to {}:{}", propertiesConfig.getFtpHost(), propertiesConfig.getFtpPort());
        Session session = null;
        ChannelSftp channel = null;

        try {
            JSch jsch = new JSch();
            session = jsch.getSession(
                    propertiesConfig.getFtpUser(),
                    propertiesConfig.getFtpHost(),
                    Integer.parseInt(propertiesConfig.getFtpPort()));
            session.setPassword(propertiesConfig.getFtpPassword());
            session.setConfig("StrictHostKeyChecking", "no");
            session.setTimeout(10000);
            session.connect();

            channel = (ChannelSftp) session.openChannel("sftp");
            channel.connect(10000);

            log.info("SFTP connection test SUCCESSFUL - connected to {}:{}", propertiesConfig.getFtpHost(),
                    propertiesConfig.getFtpPort());
        } catch (Exception e) {
            log.error("SFTP connection test FAILED - unable to connect to {}:{} - Error: {}",
                    propertiesConfig.getFtpHost(), propertiesConfig.getFtpPort(), e.getMessage(), e);
        } finally {
            if (channel != null && channel.isConnected()) {
                channel.disconnect();
            }
            if (session != null && session.isConnected()) {
                session.disconnect();
            }
        }
    }
}

```

## src/main/java/com/nubo/settlement/report/generator/client/kafka/consumer/KafkaCustodianListenerAdapter.java

```java
package com.nubo.settlement.report.generator.client.kafka.consumer;

import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.support.KafkaHeaders;
import org.springframework.messaging.handler.annotation.Header;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Component;
import org.springframework.util.ObjectUtils;

import com.nubo.settlement.report.generator.application.context.GlobalContext;
import com.nubo.settlement.report.generator.application.util.ApplicationUtils;
import com.nubo.settlement.report.generator.helpers.ValidatorUtil;
import com.nubo.settlement.report.generator.models.dto.request.EventKafkaCustodianReportInDto;
import com.nubo.settlement.report.generator.models.dto.request.EventKafkaCustodianUpdatesReportInDto;
import com.nubo.settlement.report.generator.models.enums.PropertiesEnum;
import com.nubo.settlement.report.generator.service.CustodianReportGeneratorService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Component
@RequiredArgsConstructor
@Slf4j
public class KafkaCustodianListenerAdapter {

    private final CustodianReportGeneratorService custodianReportGeneratorService;
    private final ValidatorUtil validatorUtil;

    @KafkaListener(
            id = "kafka-nubo-listener-custodian",
            topics = "#{propertiesConfig.kafkaNuboCustodianReportTopic}",
            groupId = "#{propertiesConfig.kafkaNuboConsumerGroupId}",
            containerFactory = "kafkaCustodianReportListenerContainerFactory",
            autoStartup = "#{propertiesConfig.isCustodianListenerEnabled()}")
    public void listenCustodianReport(@Payload EventKafkaCustodianReportInDto message,
            @Header(KafkaHeaders.RECEIVED_PARTITION) int partition,
            @Header(KafkaHeaders.OFFSET) long offset,
            @Header(KafkaHeaders.RECEIVED_TOPIC) String topic,
            @Header(name = KafkaHeaders.RECEIVED_KEY, required = false) String key,
            @Header(name = KafkaHeaders.DELIVERY_ATTEMPT, required = false) Integer retry) {
        log.info(
                "Custodian Report message received -- Topic: {} -- Partition: {} -- Offset: {} -- Key: {} -- retry: {}",
                topic, partition, offset, key, retry);

        if (!validateObject(message)) {
            log.error("Validation failed for custodian-report message, topic: {}, offset: {}", topic, offset);
            return;
        }

        setContext(message.getClientIp(), message.getClientUser(), message.getClientDateTime());
        custodianReportGeneratorService.generateCustodianReport(message, topic, key);
    }

    @KafkaListener(
            id = "kafka-nubo-listener-custodian-updates",
            topics = "#{propertiesConfig.kafkaNuboCustodianUpdatesReportTopic}",
            groupId = "#{propertiesConfig.kafkaNuboConsumerGroupId}",
            containerFactory = "kafkaCustodianUpdatesReportListenerContainerFactory",
            autoStartup = "#{propertiesConfig.isCustodianUpdateListenerEnabled()}")
    public void listenCustodianUpdatesReport(@Payload EventKafkaCustodianUpdatesReportInDto message,
            @Header(KafkaHeaders.RECEIVED_PARTITION) int partition,
            @Header(KafkaHeaders.OFFSET) long offset,
            @Header(KafkaHeaders.RECEIVED_TOPIC) String topic,
            @Header(name = KafkaHeaders.RECEIVED_KEY, required = false) String key,
            @Header(name = KafkaHeaders.DELIVERY_ATTEMPT, required = false) Integer retry) {
        log.info(
                "Custodian Updates message received -- Topic: {} -- Partition: {} -- Offset: {} -- Key: {} -- retry: {}",
                topic, partition, offset, key, retry);

        if (!validateObject(message)) {
            log.error("Validation failed for custodian-updates message, topic: {}, offset: {}", topic, offset);
            return;
        }

        setContext(message.getClientIp(), message.getClientUser(), message.getClientDateTime());
        custodianReportGeneratorService.generateCustodianUpdatesReport(message, topic, key);
    }

    private boolean validateObject(Object message) {
        if (ObjectUtils.isEmpty(message)) {
            return false;
        }
        try {
            validatorUtil.validateObject(message);
            return true;
        } catch (Exception ex) {
            return false;
        }
    }

    private void setContext(String clientIp, String clientUser, String clientDateTime) {
        GlobalContext.setProperty(PropertiesEnum.CLIENT_IP.getValue(), clientIp);
        GlobalContext.setProperty(PropertiesEnum.CLIENT_USER.getValue(), clientUser);
        GlobalContext.setProperty(PropertiesEnum.CLIENT_DATETIME.getValue(),
                ObjectUtils.isEmpty(clientDateTime) ? ApplicationUtils.getLocalDateTimeNow() : clientDateTime);
    }
}

```

## src/main/java/com/nubo/settlement/report/generator/client/kafka/consumer/KafkaNuboListenerAdapter.java

```java
package com.nubo.settlement.report.generator.client.kafka.consumer;

import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.support.KafkaHeaders;
import org.springframework.messaging.handler.annotation.Header;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Component;
import org.springframework.util.ObjectUtils;

import com.nubo.settlement.report.generator.application.context.GlobalContext;
import com.nubo.settlement.report.generator.application.util.ApplicationUtils;
import com.nubo.settlement.report.generator.helpers.ValidatorUtil;
import com.nubo.settlement.report.generator.models.dto.request.EventKafkaInDto;
import com.nubo.settlement.report.generator.models.enums.PropertiesEnum;
import com.nubo.settlement.report.generator.service.SettlementReportGeneratorService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Component
@RequiredArgsConstructor
@Slf4j
public class KafkaNuboListenerAdapter {

    private final SettlementReportGeneratorService settlementReportGeneratorService;
    private final ValidatorUtil validatorUtil;

    @KafkaListener(
            id = "kafka-nubo-listener-liquida",
            topics = "#{propertiesConfig.kafkaNuboConsumerTopicNameReportLiquida}",
            groupId = "#{propertiesConfig.kafkaNuboConsumerGroupId}",
            containerFactory = "kafkaNuboListenerContainerFactory",
            autoStartup = "#{propertiesConfig.isLiquidaListenerEnabled()}")
    public void listenKafkaLiquida(@Payload EventKafkaInDto message,
            @Header(KafkaHeaders.RECEIVED_PARTITION) int partition,
            @Header(KafkaHeaders.OFFSET) long offset,
            @Header(KafkaHeaders.RECEIVED_TOPIC) String topic,
            @Header(name = KafkaHeaders.RECEIVED_KEY, required = false) String key,
            @Header(name = KafkaHeaders.DELIVERY_ATTEMPT, required = false) Integer retry) {
        log.info("New received Message -- Topic: {} -- Partition : {} -- Offset : {} -- Key: {} -- retry: {}",
                topic, partition, offset, key, retry);

        if (!validateObject(message)) {
            log.error("Validation failed for message from Topic: {} -- Partition: {} -- Offset: {}",
                    topic, partition, offset);
            return;
        }

        String clientUser = ObjectUtils.isEmpty(message.getClientUser()) ? topic
                : message.getClientUser();
        this.setProperties(message.getClientIp(), clientUser);

        settlementReportGeneratorService.generateLiquidaReport(message);
    }

    @KafkaListener(
            id = "kafka-nubo-listener-papeleta",
            topics = "#{propertiesConfig.kafkaNuboConsumerTopicNameReportPapeleta}",
            groupId = "#{propertiesConfig.kafkaNuboConsumerGroupId}",
            containerFactory = "kafkaNuboListenerContainerFactory",
            autoStartup = "#{propertiesConfig.isPapeletaListenerEnabled()}")
    public void listenKafkaPapeleta(@Payload EventKafkaInDto message,
            @Header(KafkaHeaders.RECEIVED_PARTITION) int partition,
            @Header(KafkaHeaders.OFFSET) long offset,
            @Header(KafkaHeaders.RECEIVED_TOPIC) String topic,
            @Header(name = KafkaHeaders.RECEIVED_KEY, required = false) String key,
            @Header(name = KafkaHeaders.DELIVERY_ATTEMPT, required = false) Integer retry) {
        log.info("New received Message -- Topic: {} -- Partition : {} -- Offset : {} -- Key: {} -- retry: {}",
                topic, partition, offset, key, retry);

        if (!validateObject(message)) {
            log.error("Validation failed for message from Topic: {} -- Partition: {} -- Offset: {}",
                    topic, partition, offset);
            return;
        }

        String clientUser = ObjectUtils.isEmpty(message.getClientUser()) ? topic
                : message.getClientUser();
        this.setProperties(message.getClientIp(), clientUser);

        settlementReportGeneratorService.generatePapeletaReport(message);
    }

    private void setProperties(String clientIp, String clientUser) {
        GlobalContext.setProperty(PropertiesEnum.CLIENT_IP.getValue(), clientIp);
        GlobalContext.setProperty(PropertiesEnum.CLIENT_USER.getValue(), clientUser);
        GlobalContext.setProperty(PropertiesEnum.CLIENT_DATETIME.getValue(),
                ApplicationUtils.getLocalDateTimeNow());
    }

    private boolean validateObject(Object message) {
        if (ObjectUtils.isEmpty(message)) {
            log.error("Received null or empty message");
            return false;
        }
        try {
            validatorUtil.validateObject(message);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}

```

## src/main/java/com/nubo/settlement/report/generator/client/kafka/producer/KafkaNuboAdapter.java

```java
package com.nubo.settlement.report.generator.client.kafka.producer;

import com.nubo.settlement.report.generator.application.properties.PropertiesConfig;
import com.nubo.settlement.report.generator.exception.ServiceException;
import com.nubo.settlement.report.generator.exception.error.ErrorCode;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.SendResult;
import org.springframework.stereotype.Component;

import java.util.concurrent.CompletableFuture;

@Component
@RequiredArgsConstructor
@Slf4j
public class KafkaNuboAdapter {

    private final PropertiesConfig propertiesConfig;
    private final KafkaTemplate<String, String> kafkaNuboTemplate;

    public void sendMessageNotification(String message) {
        if (message != null) {
            String topic = propertiesConfig.getKafkaNuboNotificationTopic();
            CompletableFuture<SendResult<String, String>> future = kafkaNuboTemplate.send(topic, message)
                    .toCompletableFuture();

            future.thenAccept(result -> log.info("Send message -- Topic: {} -- offset: {} -- json: {} ",
                    topic, result.getRecordMetadata().offset(), message))
                    .exceptionally(ex -> {
                        throw new ServiceException(ErrorCode.ERROR_KAFKA_PRODUCER_NUBO, ex);
                    });
        }
    }

}

```

## src/main/java/com/nubo/settlement/report/generator/exception/ServiceException.java

```java
package com.nubo.settlement.report.generator.exception;

import com.nubo.settlement.report.generator.exception.error.ErrorCode;
import lombok.Getter;

@Getter
public class ServiceException extends RuntimeException {

    private final ErrorCode errorCode;

    public ServiceException(ErrorCode errorCode) {
        super(errorCode.getMessage());
        this.errorCode = errorCode;
    }

    public ServiceException(ErrorCode errorCode, String message) {
        super(errorCode.getMessage().concat(", ").concat(message));
        this.errorCode = errorCode;
    }

    public ServiceException(ErrorCode errorCode, Throwable throwable) {
        super(errorCode.getMessage(), throwable);
        this.errorCode = errorCode;
    }

}

```

## src/main/java/com/nubo/settlement/report/generator/exception/error/ErrorCode.java

```java
package com.nubo.settlement.report.generator.exception.error;

import lombok.Getter;

@Getter
public enum ErrorCode {

    NOT_FOUND("Resource not found"),
    ERROR_DESERIALIZER_JSON("Error Deserializer Json"),
    ERROR_SERIALIZER_JSON("Error Serializer Json"),
    ERROR_KAFKA_CONSUMER_NUBO("Error Consumer Kafka Nubo"),
    STATUS_NOT_FOUND("Status not found"),
    FILE_GENERATE_NOT_FOUND("File generate not found"),
    ERROR_SFTP("Error SFTP"),
    ERROR_GENERATE_FILE_FTP("An error occurred during the file generation process"),
    ERROR_KAFKA_PRODUCER_NUBO("Error Producer Kafka Nubo"),
    ERROR_GENERATING_FILE("Error generating file"),
    TYPE_NOT_FOUND("Type not found in database"),
    INVALID_VOUCHER_TYPE("Invalid voucher type"),
    VALIDATION_ERROR("Validation error"),
    KAFKA_PROCESSING_ERROR("Error processing Kafka message"),
    CUSTODIAN_INVALID_PAYLOAD("Custodian payload invalid"),
    CUSTODIAN_IDEMPOTENT_SKIP("Custodian report already generated"),
    CUSTODIAN_QUERY_ERROR("Error querying custodian report data"),
    CUSTODIAN_CSV_GENERATION_ERROR("Error generating custodian CSV"),
    INVALID_TYPE_FOR_PATH("Invalid type for path"),
    ERROR_GENERATING_REPORT("Error generating report"),
    ERROR_LOCAL_FILE("Error reading local file");

    private final String message;

    ErrorCode(String message) {
        this.message = message;
    }

    public String getName() {
        return this.name();
    }

}

```

## src/main/java/com/nubo/settlement/report/generator/exception/error/ErrorResponse.java

```java
package com.nubo.settlement.report.generator.exception.error;

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

## src/main/java/com/nubo/settlement/report/generator/exception/error/ErrorValidation.java

```java
package com.nubo.settlement.report.generator.exception.error;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ErrorValidation {

    private String id;
    private String description;

}

```

## src/main/java/com/nubo/settlement/report/generator/exception/kafka/KafkaErrorBuild.java

```java
package com.nubo.settlement.report.generator.exception.kafka;

import com.nubo.settlement.report.generator.application.properties.PropertiesConfig;
import com.nubo.settlement.report.generator.application.util.ApplicationUtils;
import com.nubo.settlement.report.generator.exception.error.ErrorCode;
import com.nubo.settlement.report.generator.exception.error.ErrorResponse;
import com.nubo.settlement.report.generator.exception.error.ErrorValidation;

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

    private void buildErrorResponse(Exception exception, ErrorCode errorCode, Long offset, String topic,
            Integer retry) {
        StringBuilder description = new StringBuilder(errorCode.getMessage());
        if (offset != null)
            description.append(" - Offset: ").append(offset);
        if (topic != null)
            description.append(" - Topic: ").append(topic);
        if (retry != null)
            description.append(" - Retries: ").append(retry);

        ErrorResponse errorResponse = ErrorResponse.builder()
                .httpCode("500")
                .url(propertiesConfig.getKafkaNuboBootstrapServers())
                .errorCode(errorCode.getName())
                .errorMessage(description.toString())
                .errorMessageDetail(exception.getMessage())
                .timestamp(ApplicationUtils.getLocalDateTimeNow())
                .build();

        List<ErrorValidation> errorValidationList = getErrorValidations(exception);
        if (!errorValidationList.isEmpty()) {
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

## src/main/java/com/nubo/settlement/report/generator/helpers/CustodianCsvGeneratorUtil.java

```java
package com.nubo.settlement.report.generator.helpers;

import java.io.IOException;
import java.io.Writer;
import java.lang.reflect.Field;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.stream.Collectors;

import com.nubo.settlement.report.generator.models.domain.CustodianReportCsvData;
import com.nubo.settlement.report.generator.models.domain.CustodianUpdatesReportCsvData;

public final class CustodianCsvGeneratorUtil {

    private static final String REPORT_DELIMITER = ";";
    private static final String UPDATES_DELIMITER = ",";
    private static final String LINE_SEPARATOR = "\r\n";
    private static final DateTimeFormatter DATE_FORMATTER = DateTimeFormatter.ofPattern("yyyyMMdd");
    private static final DateTimeFormatter TIME_FORMATTER = DateTimeFormatter.ofPattern("HH:mm:ss");

    private static final String REPORT_HEADER_LINE = String.join(REPORT_DELIMITER,
            "record_type", "PAQ-D-TIPO-REG-1", "PAQ-D-FECHACREACION", "PAQ-D-FECHATRASLADO",
            "PAQ-D-FECHADMISION", "PAQ-D-CONSECUTIVO-1", "PAQ-D-REFERENCIA", "PAQ-D-ESTADO",
            "PAQ-D-AFILIADO", "PAQ-D-CUSTODIO", "PAQ-D-ADMINISTRADOR", "PAQ-D-FECHACUMPLINICIAL",
            "PAQ-D-FECHACUMPLIFINAL", "PAQ-D-PUNTA", "PAQ-D-NEMO", "PAQ_COLATERAL", "PAQ-D-ISIN-EMI",
            "PAQ-D-DEPOSITO", "PAQ-D-TIPOOP", "PAQ-D-TIPOID", "PAQ-D-NUMEROID", "PAQ-D-NOMINVERS",
            "PAQ-D-TIPOID", "PAQ-D-NUMEROID", "PAQ-D-NOMINVERS", "PAQ-D-TIPOID", "PAQ-D-NUMEROID",
            "PAQ-D-NOMINVERS", "PAQ-D-CUENTADEP", "PAQ-D-CANTIDADTOTAL", "PAQ-D-PRECIOPROM",
            "PAQ-D-TASAPROM", "PAQ-D-TOTALVRBRUTO", "PAQ-D-TOTALVRBRUTO_REG", "PAQ-D-TOTALVRNETO",
            "PAQ-D-TOTALNETO-REG-1", "PAQ-D-TOTALVR-GIRO", "PAQ-D-TOTALVRGIROREG", "PAQ-D-TOTALCOMISION",
            "PAQ-D-TOTALIVACOMIS", "PAQ-D-CUMPLPAQUETE", "PAQ-D-MERCADO", "PAQ-D-TIPO-REG-2",
            "PAQ-D-CONSECUTIVO-2", "PAQ-D-REGISTRO", "PAQ-D-FOLIO", "PAQ-D-SECUENCIA", "PAQ-D-FECHACUMPLI",
            "PAQ-D-FECHACUMPLIREG", "PAQ-D-CANTIDADOP", "PAQ-D-PRECIOP", "PAQ-D-TASAOP", "PAQ-D-VRBRUTOP",
            "PAQ-D-VRBRUTO-REG", "PAQ-D-SANEXTEMPO", "PAQ-D-POSICEXTEMPO", "PAQ-D-TOTALNETO",
            "PAQ-D-TOTALNETO-REG-2", "PAQ-D-VR GIRO", "PAQ-D-VRGIROREG", "PAQ-D-PORCOMISION",
            "PAQ-D-COMISOP", "PAQ-D-IVACOMISOP", "PAQ-D-VRETENCION", "PAQ-D-VRTRASRETE",
            "PAQ-D-VRETENCIONREG", "PAQ-D-VRTRASRETEREG", "PAQ-D-CUMPLIDA", "PAQ-D-CUMPLIDA-REG",
            "PAQ-D-TIPOP", "PAQ-D-CUENTADEPOSITO");

    private CustodianCsvGeneratorUtil() {
    }

    @SuppressWarnings("unchecked")
    public static <T> String generateCsv(List<T> rows, Class<T> rowClass) {
        if (rowClass == CustodianReportCsvData.class) {
            return generateCustodianReportCsv((List<CustodianReportCsvData>) (rows == null ? List.of() : rows));
        }
        if (rowClass == CustodianUpdatesReportCsvData.class) {
            return generateCustodianUpdatesCsv(
                    (List<CustodianUpdatesReportCsvData>) (rows == null ? List.of() : rows));
        }

        return generateDefaultCsv(rows == null ? List.of() : rows, rowClass);
    }

    private static <T> String generateDefaultCsv(List<T> rows, Class<T> rowClass) {
        List<String> lines = new ArrayList<>();
        List<Field> fields = List.of(rowClass.getDeclaredFields());
        lines.add(fields.stream().map(Field::getName).collect(Collectors.joining(REPORT_DELIMITER)));

        for (T row : rows) {
            List<String> values = new ArrayList<>();
            for (Field field : fields) {
                field.setAccessible(true);
                Object value;
                try {
                    value = field.get(row);
                } catch (IllegalAccessException ex) {
                    value = null;
                }
                values.add(escape(formatValue(value), REPORT_DELIMITER));
            }
            lines.add(String.join(REPORT_DELIMITER, values));
        }
        return String.join(LINE_SEPARATOR, lines);
    }

    private static String generateCustodianReportCsv(List<CustodianReportCsvData> rows) {
        List<String> lines = new ArrayList<>();
        lines.add(REPORT_HEADER_LINE);

        Map<String, List<CustodianReportCsvData>> rowsByPackage = new LinkedHashMap<>();
        for (CustodianReportCsvData row : rows) {
            rowsByPackage.computeIfAbsent(row.getPacketCode(), key -> new ArrayList<>()).add(row);
        }

        for (List<CustodianReportCsvData> packageRows : rowsByPackage.values()) {
            lines.add(buildCustodianPackageLine(packageRows.get(0)));
            for (CustodianReportCsvData row : packageRows) {
                lines.add(buildCustodianDetailLine(row));
            }
        }
        return String.join(LINE_SEPARATOR, lines);
    }

    public static void generateCustodianReportCsvToWriter(
            Iterator<List<CustodianReportCsvData>> batches, Writer writer) {
        if (writer == null) {
            return;
        }
        try {
            writer.write(REPORT_HEADER_LINE);
            writer.write(LINE_SEPARATOR);

            List<CustodianReportCsvData> currentPackageRows = new ArrayList<>();
            String currentPacketCode = null;

            while (batches != null && batches.hasNext()) {
                List<CustodianReportCsvData> batch = batches.next();
                if (batch == null) {
                    continue;
                }
                for (CustodianReportCsvData row : batch) {
                    String packetCode = row.getPacketCode();
                    if (currentPacketCode == null) {
                        currentPacketCode = packetCode;
                    }
                    if (!Objects.equals(currentPacketCode, packetCode)) {
                        writeCustodianPackage(writer, currentPackageRows);
                        currentPackageRows = new ArrayList<>();
                        currentPacketCode = packetCode;
                    }
                    currentPackageRows.add(row);
                }
            }

            if (!currentPackageRows.isEmpty()) {
                writeCustodianPackage(writer, currentPackageRows);
            }
            writer.flush();
        } catch (IOException ex) {
            throw new RuntimeException("Error writing custodian report CSV", ex);
        }
    }

    private static void writeCustodianPackage(Writer writer, List<CustodianReportCsvData> packageRows)
            throws IOException {
        writer.write(buildCustodianPackageLine(packageRows.get(0)));
        writer.write(LINE_SEPARATOR);
        for (CustodianReportCsvData row : packageRows) {
            writer.write(buildCustodianDetailLine(row));
            writer.write(LINE_SEPARATOR);
        }
    }

    private static String buildCustodianPackageLine(CustodianReportCsvData row) {
        List<String> packageValues = new ArrayList<>();
        packageValues.add("1");
        packageValues.add("1");
        packageValues.add(formatValue(row.getCreationDate()));
        packageValues.add(formatValue(row.getTransferDate()));
        packageValues.add(formatValue(row.getAdmissionDate()));
        packageValues.add(formatValue(row.getPacketCode()));
        packageValues.add(formatValue(row.getReferenceCode()));
        packageValues.add(formatValue(row.getOperationStatus()));
        packageValues.add(formatValue(row.getAffiliate()));
        packageValues.add(formatValue(row.getCustodian()));
        packageValues.add(formatValue(row.getAdministrator()));
        packageValues.add(formatValue(row.getClearingDate()));
        packageValues.add(formatValue(row.getReturnDate()));
        packageValues.add(formatValue(row.getSide()));
        packageValues.add(formatValue(row.getMnemonic()));
        packageValues.add("0");
        packageValues.add(formatValue(row.getIsin()));
        packageValues.add(formatValue(row.getDepository()));
        packageValues.add(formatValue(row.getOperationType()));
        packageValues.add(formatValue(row.getInvestorIdentificationType()));
        packageValues.add(formatValue(row.getInvestorDocument()));
        packageValues.add(formatValue(row.getInvestorName()));
        packageValues.add("0");
        packageValues.add("0");
        packageValues.add("0");
        packageValues.add("0");
        packageValues.add("0");
        packageValues.add("0");
        packageValues.add(formatValue(row.getInvestorAccount()));
        packageValues.add(formatFixedDecimal(row.getQuantityProm(), 16, 2));
        packageValues.add(formatFixedDecimal(row.getPriceProm(), 16, 4));
        packageValues.add(formatSignedFixedDecimal(row.getRateProm(), 3, 4));
        packageValues.add(formatFixedDecimal(row.getTotalGross(), 16, 2));
        packageValues.add(formatFixedDecimal(BigDecimal.ZERO, 16, 2));
        packageValues.add(formatFixedDecimal(row.getTotalNet(), 16, 2));
        packageValues.add("0");
        packageValues.add(formatFixedDecimal(row.getTotalGiro(), 16, 2));
        packageValues.add(formatFixedDecimal(row.getTotalGiroReg(), 16, 2));
        packageValues.add(formatFixedDecimal(row.getTotalCommission(), 16, 2));
        packageValues.add(formatFixedDecimal(row.getTotalTaxCommission(), 16, 2));
        packageValues.add(formatCumpPercentage(row.getCumpPercentage()));
        packageValues.add(formatValue(row.getMarket()));
        packageValues.addAll(List.of(
                "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
                "", "", "", "", "", "", "", "", "", "", "", "", "", ""));

        return packageValues.stream().map(v -> escape(v, REPORT_DELIMITER))
                .collect(Collectors.joining(REPORT_DELIMITER));
    }

    private static String buildCustodianDetailLine(CustodianReportCsvData row) {
        List<String> detailValues = new ArrayList<>();
        detailValues.add("2");
        detailValues.addAll(List.of(
                "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
                "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
                ""));
        detailValues.add("2");
        detailValues.add(formatValue(row.getSecondaryPacketCode()));
        detailValues.add(formatValue(row.getRegisterDate()));
        detailValues.add(formatValue(row.getFolio()));
        detailValues.add(formatValue(row.getFraction()));
        detailValues.add(formatValue(row.getClearingDate()));
        detailValues.add(formatValue(row.getReturnDate()));
        detailValues.add(formatFixedDecimal(row.getQuantity(), 15, 2));
        detailValues.add(formatFixedDecimal(row.getPrice(), 12, 4));
        detailValues.add(formatSignedFixedDecimal(row.getRate(), 3, 4));
        detailValues.add(formatFixedDecimal(row.getGrossOutValue(), 16, 2));
        detailValues.add(formatFixedDecimal(row.getGrossReturnValue(), 16, 2));
        detailValues.add(formatFixedDecimal(row.getSanction(), 16, 2));
        detailValues.add(formatValue(row.getPsan()));
        detailValues.add(formatFixedDecimal(row.getNetValue(), 16, 2));
        detailValues.add(formatFixedDecimal(row.getNetReturnValue(), 16, 2));
        detailValues.add(formatFixedDecimal(row.getGrossGiroValue(), 16, 2));
        detailValues.add(formatFixedDecimal(row.getGrossReturnGiroValue(), 16, 2));
        detailValues.add(formatFixedDecimal(row.getCommissionPercentage(), 16, 2));
        detailValues.add(formatFixedDecimal(row.getCommissionAmount(), 16, 2));
        detailValues.add(formatFixedDecimal(row.getTaxCommissionAmount(), 16, 2));
        detailValues.add("0");
        detailValues.add("0");
        detailValues.add("0");
        detailValues.add("0");
        detailValues.add(formatValue(row.getStatusSalida()));
        detailValues.add(formatValue(row.getStatusRegreso()));
        detailValues.add(formatValue(row.getType()));
        detailValues.add(formatValue(row.getInvestorAccount()));

        return detailValues.stream().map(v -> escape(v, REPORT_DELIMITER))
                .collect(Collectors.joining(REPORT_DELIMITER));
    }

    private static String generateCustodianUpdatesCsv(List<CustodianUpdatesReportCsvData> rows) {
        List<String> lines = new ArrayList<>();
        // Sección 1: encabezado general (una sola fila al inicio)
        lines.add(String.join(UPDATES_DELIMITER,
                "SECCION", "FECHA_DE_PROCESO", "HORA_DE_PROCESO", "ENTIDAD", "NOMBRE_ENTIDAD", "PAQUETE",
                "NEMOTECNICO", "PUNTA", "REFERENCIA_PAQUETE_AFILIADO", "ADMINISTRADOR",
                "FECHA_DEL_EVENTO", "HORA", "EVENTO", "AFIL", "CUST", "ENTIDAD_GENERA", "ESTADO_PAQUET",
                "CANTIDAD_ACCIONES", "PRECIO_PROMEDIO", "TASA_PROMEDIO", "VR_BRUTO_PAQUETE",
                "VR_COMISION_PAQUETE", "VR_NETO_PAQUETE", "VR_NETO_REGRESO", "SUBEST", "TIP_ID", "NO_ID",
                "CUENTA_DEPOSITO", "SANCION_APLICADA", "FOLIO", "FRAC", "CANTIDAD_OPERACION",
                "PRECIO_OPERACION", "TASA_OPERACION", "FECHA_REGI", "FECHA_CUMP",
                "FECHA_CUMP_REGRESO", "SALIDA_REGRESO", "DIAS_SANCION", "TASA_SANCION"));

        for (CustodianUpdatesReportCsvData row : rows) {
            int section = row.getSection() != null ? row.getSection() : 2;
            List<String> v = new ArrayList<>();

            if (section == 2) {
                // Sección 2: información del paquete
                v.add(formatValue(row.getSection())); // SECCION
                v.add(formatDisplayDate(row.getProcessDate())); // FECHA_DE_PROCESO
                v.add(formatValue(row.getProcessTime())); // HORA_DE_PROCESO
                v.add(formatValue(row.getEventAffiliateCode())); // ENTIDAD (razón social entidad que genera)
                v.add(formatValue(row.getAffiliateName())); // NOMBRE_ENTIDAD
                v.add(formatPackageNumber(row.getPackageNumber())); // PAQUETE
                v.add(formatValue(row.getSecurityMnemonic())); // NEMOTECNICO
                v.add(formatValue(row.getTradingSide())); // PUNTA
                v.add(formatValue(row.getAffiliatePackageReference())); // REFERENCIA_PAQUETE_AFILIADO
                v.add(formatValue(row.getFicAdministrator())); // ADMINISTRADOR
                v.add(formatDisplayDate(row.getEventDate())); // FECHA_DEL_EVENTO
                v.add(formatValue(row.getEventTime())); // HORA
                v.add(formatValue(row.getEventStatus())); // EVENTO
                v.add(formatValue(row.getEventAffiliateCode())); // AFIL
                v.add(formatValue(row.getEventCustodianCode())); // CUST
                v.add(formatValue(row.getEventGeneratingEntityCode())); // ENTIDAD_GENERA
                v.add(formatValue(row.getPackageStateEvent())); // ESTADO_PAQUET
                v.add(formatFixedDecimal(row.getQuantity(), 16, 2)); // CANTIDAD_ACCIONES
                v.add(formatFixedDecimal(row.getAveragePrice(), 16, 4)); // PRECIO_PROMEDIO
                v.add(formatRate(row.getAverageRate())); // TASA_PROMEDIO
                v.add(formatFixedDecimal(row.getGrossPackageValue(), 16, 2)); // VR_BRUTO_PAQUETE
                v.add(formatFixedDecimal(row.getCommissionPackageValue(), 16, 2)); // VR_COMISION_PAQUETE
                v.add(formatFixedDecimal(row.getNetPackageValue(), 16, 2)); // VR_NETO_PAQUETE
                v.add(formatFixedDecimal(row.getNetReturnValue(), 16, 2)); // VR_NETO_REGRESO
                v.add(formatValue(row.getRejectionReasonCode())); // SUBEST
                v.add(formatValue(row.getIdentificationType())); // TIP_ID
                v.add(formatValue(row.getIdentificationNumber())); // NO_ID
                v.add(formatValue(row.getDepositAccount())); // CUENTA_DEPOSITO
                v.add(formatFixedDecimal(row.getAppliedPenalty(), 16, 2)); // SANCION_APLICADA
                // Campos de sección 3: vacíos para tipo 2
                v.add(""); // FOLIO
                v.add(""); // FRAC
                v.add(""); // CANTIDAD_OPERACION
                v.add(""); // PRECIO_OPERACION
                v.add(""); // TASA_OPERACION
                v.add(""); // FECHA_REGI
                v.add(""); // FECHA_CUMP (solo en tipo 3)
                v.add(""); // FECHA_CUMP_REGRESO
                v.add(""); // SALIDA_REGRESO
                v.add(""); // DIAS_SANCION
                v.add(""); // TASA_SANCION
            } else {
                // Sección 3: información de la operación
                v.add(formatValue(row.getSection())); // SECCION
                v.add(formatDisplayDate(row.getProcessDate())); // FECHA_DE_PROCESO
                v.add(formatValue(row.getProcessTime())); // HORA_DE_PROCESO
                v.add(formatValue(row.getEventAffiliateCode())); // ENTIDAD
                v.add(formatValue(row.getAffiliateName())); // NOMBRE_ENTIDAD
                v.add(formatPackageNumber(row.getPackageNumber())); // PAQUETE
                v.add(formatValue(row.getSecurityMnemonic())); // NEMOTECNICO
                v.add(formatValue(row.getTradingSide())); // PUNTA
                v.add(formatValue(row.getAffiliatePackageReference())); // REFERENCIA_PAQUETE_AFILIADO
                v.add(formatValue(row.getFicAdministrator())); // ADMINISTRADOR
                v.add(formatDisplayDate(row.getEventDate())); // FECHA_DEL_EVENTO
                v.add(formatValue(row.getEventTime())); // HORA
                v.add(formatValue(row.getEventStatus())); // EVENTO
                v.add(formatValue(row.getEventAffiliateCode())); // AFIL
                v.add(formatValue(row.getEventCustodianCode())); // CUST
                v.add(formatValue(row.getEventGeneratingEntityCode())); // ENTIDAD_GENERA
                v.add(""); // ESTADO_PAQUET: no aplica en tipo 3
                // Campos de paquete: vacíos para tipo 3
                v.add(""); // CANTIDAD_ACCIONES
                v.add(""); // PRECIO_PROMEDIO
                v.add(""); // TASA_PROMEDIO
                v.add(""); // VR_BRUTO_PAQUETE
                v.add(""); // VR_COMISION_PAQUETE
                v.add(""); // VR_NETO_PAQUETE
                v.add(""); // VR_NETO_REGRESO
                v.add(""); // SUBEST
                v.add(""); // TIP_ID
                v.add(""); // NO_ID
                v.add(""); // CUENTA_DEPOSITO
                v.add(""); // SANCION_APLICADA (tipo 2 la tiene; tipo 3 tiene su propia al final)
                // Campos propios de sección 3
                v.add(formatValue(row.getEventFolio())); // FOLIO
                v.add(formatValue(row.getFractionNumber())); // FRAC
                v.add(formatFixedDecimal(row.getOperationQuantity(), 16, 2)); // CANTIDAD_OPERACION
                v.add(formatFixedDecimal(row.getOperationPrice(), 16, 4)); // PRECIO_OPERACION
                v.add(formatRate(row.getOperationRate())); // TASA_OPERACION
                v.add(formatDisplayDate(row.getOperationRegistrationDate())); // FECHA_REGI
                v.add(formatDisplayDate(row.getOperationClearingDate())); // FECHA_CUMP
                v.add(formatReturnFulfillmentDate(row.getReturnFulfillmentDate())); // FECHA_CUMP_REGRESO
                v.add(formatValue(row.getReturnExitFlow())); // SALIDA_REGRESO
                v.add(formatValue(row.getPenaltyDays())); // DIAS_SANCION
                v.add(formatRate(row.getPenaltyRate())); // TASA_SANCION
            }

            lines.add(v.stream().map(val -> escape(val, UPDATES_DELIMITER))
                    .collect(Collectors.joining(UPDATES_DELIMITER)));
        }
        return String.join(LINE_SEPARATOR, lines);
    }

    private static String formatValue(Object value) {
        if (value == null) {
            return "";
        }
        if (value instanceof LocalDate localDate) {
            return localDate.format(DATE_FORMATTER);
        }
        if (value instanceof LocalTime localTime) {
            return localTime.format(TIME_FORMATTER);
        }
        return String.valueOf(value);
    }

    private static String formatPackageNumber(String value) {
        return value == null ? "" : value;
    }

    private static String formatDisplayDate(LocalDate value) {
        if (value == null) {
            return "";
        }
        return value.format(DateTimeFormatter.ofPattern("dd/MM/yyyy"));
    }

    private static String formatReturnFulfillmentDate(LocalDate value) {
        if (value == null) {
            return "00-00-0000";
        }
        return formatDisplayDate(value);
    }

    private static String formatFixedDecimal(BigDecimal value, int integerDigits, int decimalDigits) {
        if (value == null) {
            return "";
        }
        BigDecimal absValue = value.abs().setScale(decimalDigits, RoundingMode.HALF_UP);

        BigDecimal maxValue = BigDecimal.TEN.pow(integerDigits);
        if (absValue.compareTo(maxValue) >= 0) {
            return "9".repeat(integerDigits)
                    + (decimalDigits > 0 ? "." + "9".repeat(decimalDigits) : "");
        }

        String[] parts = absValue.toPlainString().split("\\.");
        String intPart = String.format("%0" + integerDigits + "d", Long.parseLong(parts[0]));
        if (decimalDigits > 0) {
            String decPart = parts.length > 1 ? parts[1] : "0".repeat(decimalDigits);
            return intPart + "." + decPart;
        }
        return intPart;
    }

    private static String formatSignedFixedDecimal(BigDecimal value, int integerDigits, int decimalDigits) {
        if (value == null) {
            return "";
        }
        String sign = value.compareTo(BigDecimal.ZERO) >= 0 ? "+" : "-";
        BigDecimal absValue = value.abs().setScale(decimalDigits, RoundingMode.HALF_UP);

        BigDecimal maxValue = BigDecimal.TEN.pow(integerDigits);
        if (absValue.compareTo(maxValue) >= 0) {
            String nines = "9".repeat(integerDigits)
                    + (decimalDigits > 0 ? "." + "9".repeat(decimalDigits) : "");
            return sign + nines;
        }

        String[] parts = absValue.toPlainString().split("\\.");
        String intPart = String.format("%0" + integerDigits + "d", Long.parseLong(parts[0]));
        if (decimalDigits > 0) {
            String decPart = parts.length > 1 ? parts[1] : "0".repeat(decimalDigits);
            return sign + intPart + "." + decPart;
        }
        return sign + intPart;
    }

    private static String formatRate(BigDecimal value) {
        if (value != null && value.compareTo(BigDecimal.ZERO) == 0) {
            return "0";
        }
        return formatSignedFixedDecimal(value, 3, 4);
    }

    private static String formatCumpPercentage(BigDecimal value) {
        if (value == null || value.compareTo(BigDecimal.ZERO) == 0) {
            return "0";
        }
        return formatFixedDecimal(value, 3, 4);
    }

    private static String formatPercentage(BigDecimal value) {
        if (value == null) {
            return "";
        }
        BigDecimal scaled = value.setScale(4, RoundingMode.HALF_UP);
        boolean negative = scaled.signum() < 0;
        String[] parts = scaled.abs().toPlainString().split("\\.");
        String integerPart = String.format("%03d", Long.parseLong(parts[0]));
        String decimalPart = parts.length > 1 ? parts[1] : "0000";
        return (negative ? "-" : "") + integerPart + "." + decimalPart;
    }

    private static String escape(String value, String delimiter) {
        String escaped = value == null ? "" : value.replace("\"", "\"\"");
        if (escaped.contains(delimiter) || escaped.contains("\n") || escaped.contains("\r")
                || escaped.contains("\"")) {
            return "\"" + escaped + "\"";
        }
        return escaped;
    }
}

```

## src/main/java/com/nubo/settlement/report/generator/helpers/CustodianReportSpecificationFactory.java

```java
package com.nubo.settlement.report.generator.helpers;

import java.time.LocalDate;

import org.springframework.data.jpa.domain.Specification;

import com.nubo.settlement.report.generator.models.dto.request.CustodianReportFilterInDto;
import com.nubo.settlement.report.generator.models.entity.CustodianReportViewEntity;

public final class CustodianReportSpecificationFactory {

    private CustodianReportSpecificationFactory() {
    }

    public static Specification<CustodianReportViewEntity> createFilter(CustodianReportFilterInDto filter) {
        Specification<CustodianReportViewEntity> spec = Specification.unrestricted();
        if (filter == null) {
            return spec;
        }

        String normalizedPackageStatus = normalizePackageStatus(filter.getPackageStatus());

        return spec
                .and(equalDate("pacInitialClearingDate", filter.getPackageClearingDate()))
                .and(equalDate("pacCreationDate", filter.getPackageCreationDate()))
                .and(containsIgnoreCase("pacCustodian", filter.getCustodian()))
                .and(containsIgnoreCase("pacAffiliate", filter.getAffiliate()))
                .and(containsIgnoreCase("pacFicAdministrator", filter.getFic()))
                .and(equalIgnoreCase("pacStatus", normalizedPackageStatus))
                .and(containsIgnoreCase("pacConsecutive1", filter.getPackageNumber()))
                .and(containsIgnoreCase("pacTransactionType", filter.getOperationType()));
    }

    private static Specification<CustodianReportViewEntity> containsIgnoreCase(String field, String value) {
        return (root, query, builder) -> {
            if (value == null || value.isBlank()) {
                return builder.conjunction();
            }
            return builder.like(builder.lower(root.get(field)), "%" + value.toLowerCase() + "%");
        };
    }

    private static Specification<CustodianReportViewEntity> equalIgnoreCase(String field, String value) {
        return (root, query, builder) -> {
            if (value == null || value.isBlank()) {
                return builder.conjunction();
            }
            return builder.equal(builder.lower(root.get(field)), value.toLowerCase());
        };
    }

    private static Specification<CustodianReportViewEntity> equalDate(String field, LocalDate value) {
        return (root, query, criteriaBuilder) -> {
            if (value == null) {
                return criteriaBuilder.conjunction();
            }
            return criteriaBuilder.equal(root.get(field), value);
        };
    }

    private static String normalizePackageStatus(String packageStatus) {
        if (packageStatus == null || packageStatus.isBlank()) {
            return null;
        }

        return switch (packageStatus.trim().toUpperCase()) {
            case "T", "TRASLADO", "TRASLADADA", "TRANSFERRED" -> "T";
            case "P", "PREMATCH", "PRE-MATCH" -> "P";
            case "A", "ADMITIDO", "ADMITIDA", "ADMITTED" -> "A";
            case "R", "RECHAZADO", "RECHAZADA", "REJECTED" -> "R";
            case "S", "SIN SOLICITUD", "WITHOUT REQUEST" -> "S";
            default -> packageStatus;
        };
    }
}

```

## src/main/java/com/nubo/settlement/report/generator/helpers/CustodianUpdatesReportSpecificationFactory.java

```java
package com.nubo.settlement.report.generator.helpers;

import java.time.LocalDate;

import org.springframework.data.jpa.domain.Specification;

import com.nubo.settlement.report.generator.models.dto.request.CustodianUpdatesReportFilterInDto;
import com.nubo.settlement.report.generator.models.entity.CustodianIncidentsReportViewEntity;
import com.nubo.settlement.report.generator.models.enums.CustodianUpdateSideFilterEnum;
import com.nubo.settlement.report.generator.models.enums.CustodianUpdateStatusFilterEnum;

public final class CustodianUpdatesReportSpecificationFactory {

    private CustodianUpdatesReportSpecificationFactory() {
    }

    public static Specification<CustodianIncidentsReportViewEntity> createFilter(
            CustodianUpdatesReportFilterInDto filter) {
        Specification<CustodianIncidentsReportViewEntity> specification = Specification.unrestricted();

        if (filter == null) {
            return specification;
        }

        CustodianUpdateSideFilterEnum sideFilter = CustodianUpdateSideFilterEnum.fromValue(filter.getSide());

        specification = specification
                .and(equalDate("detClearingDate", filter.getComplianceDate()))
                .and(equalDate("heaCreaDate", filter.getPackageCreationDate()))
                .and(equalIgnoreCase("pacCustodian", filter.getCustodian()))
                .and(equalIgnoreCase("pacAffiliate", filter.getAffiliatedCode()))
                .and(equalIgnoreCase("heaPackageCode", filter.getPackageNumber()))
                .and(!sideFilter.isAll() ? equalIgnoreCase("heaSide", sideFilter.getViewValue())
                        : (root, query, criteriaBuilder) -> criteriaBuilder.conjunction());

        CustodianUpdateStatusFilterEnum statusFilter = CustodianUpdateStatusFilterEnum.fromValue(filter.getStatus());
        if (!statusFilter.isAll()) {
            String statusValue = statusFilter.getViewValue();
            specification = specification.and(equalIgnoreCase("pacPackageStatus", statusValue));
        }

        return specification;
    }

    private static Specification<CustodianIncidentsReportViewEntity> equalIgnoreCase(String field, String value) {
        return (root, query, criteriaBuilder) -> {
            if (value == null || value.isBlank()) {
                return criteriaBuilder.conjunction();
            }
            return criteriaBuilder.equal(criteriaBuilder.lower(root.get(field)), value.toLowerCase());
        };
    }

    private static Specification<CustodianIncidentsReportViewEntity> equalDate(String field, LocalDate value) {
        return (root, query, criteriaBuilder) -> {
            if (value == null) {
                return criteriaBuilder.conjunction();
            }
            return criteriaBuilder.equal(root.get(field), value);
        };
    }

}

```

## src/main/java/com/nubo/settlement/report/generator/helpers/FixedWidthCsvGeneratorUtil.java

```java
package com.nubo.settlement.report.generator.helpers;

import java.util.List;

import com.nubo.settlement.report.generator.application.util.FixedWidthStrategy;
import com.nubo.settlement.report.generator.models.domain.LiquidaReportData;

public class FixedWidthCsvGeneratorUtil {

    public static String writeFixedWidthFileData(List<LiquidaReportData> liquidaReportDataList) {
        return FixedWidthStrategy.generate(liquidaReportDataList);
    }

}

```

## src/main/java/com/nubo/settlement/report/generator/helpers/MapperCustodianUtil.java

```java
package com.nubo.settlement.report.generator.helpers;

import java.math.BigDecimal;
import java.math.RoundingMode;

import com.nubo.settlement.report.generator.application.util.ApplicationUtils;
import com.nubo.settlement.report.generator.models.domain.CustodianPackageReportData;
import com.nubo.settlement.report.generator.models.entity.CustodianReportViewEntity;

public final class MapperCustodianUtil {

    private MapperCustodianUtil() {
    }

    public static CustodianPackageReportData custodianPackageReportViewEntityToReportData(
            CustodianReportViewEntity entity) {
        return CustodianPackageReportData.builder()
                .pacTypeReg1(entity.getPacTypeReg1())
                .pacCreationDate(ApplicationUtils.localDateToPlane(entity.getPacCreationDate()))
                .pacTraslateDate(ApplicationUtils.localDateTimeToPlane(entity.getPacTraslateDate()))
                .pacAdmitDate(ApplicationUtils.localDateTimeToPlane(entity.getPacAdmitDate()))
                .pacPackageNumber(entity.getPacConsecutive1())
                .pacReferenceCode(entity.getPacReferenceCode())
                .pacStatus(entity.getPacStatus())
                .pacAffiliate(entity.getPacAffiliate())
                .pacCustodian(entity.getPacCustodian())
                .pacFicAdministrator(entity.getPacFicAdministrator())
                .pacInitialClearingDate(ApplicationUtils.localDateToPlane(entity.getPacInitialClearingDate()))
                .pacFinalClearingDate(ApplicationUtils.localDateToPlane(entity.getPacFinalClearingDate()))
                .pacSide(entity.getPacSide())
                .pacMnemonic(entity.getPacMnemonic())
                .pacCollateral(entity.getPacCollateral())
                .pacIsin(entity.getPacIsin())
                .pacDepository(entity.getPacDepository())
                .pacTransactionType(entity.getPacTransactionType())
                .pacInvestorIdentificationType1(entity.getPacInvestorIdentificationType1())
                .pacInvestorIdentificationNumber1(entity.getPacInvestorIdentificationNumber1())
                .pacInvestorName1(entity.getPacInvestorName1())
                .pacInvestorIdentificationType2(entity.getPacInvestorIdentificationType2())
                .pacInvestorIdentificationNumber2(entity.getPacInvestorIdentificationNumber2())
                .pacInvestorName2(entity.getPacInvestorName2())
                .pacInvestorIdentificationType3(entity.getPacInvestorIdentificationType3())
                .pacInvestorIdentificationNumber3(entity.getPacInvestorIdentificationNumber3())
                .pacInvestorName3(entity.getPacInvestorName3())
                .pacInvestorAccount(entity.getPacInvestorAccount())
                .pacTotalQuantity(formatFixedDecimal(entity.getPacTotalQuantity(), 16, 2))
                .pacAverangPrice(formatFixedDecimal(entity.getPacAverangePrice(), 16, 2))
                .pacAverageRate(formatFixedDecimal(entity.getPacAverageRate(), 3, 4, true))
                .pacTotalVolume(formatFixedDecimal(entity.getPacTotalVolume(), 16, 2))
                .pacTotalReturnVolume(formatFixedDecimal(entity.getPacTotalReturnVolume(), 16, 2))
                .pacTotalNetAmount(formatFixedDecimal(entity.getPacTotalNetAmount(), 16, 2))
                .pacTotalReturnNetAmount(formatFixedDecimal(entity.getPacTotalReturnNetAmount(), 16, 2))
                .pacTotalTransferAmount(formatFixedDecimal(entity.getPacTotalTransferAmount(), 16, 2))
                .pacTotalReturnTransferAmount(formatFixedDecimal(BigDecimal.ZERO, 16, 2))
                .pacTotalCommissionAmount(formatFixedDecimal(entity.getPacTotalCommissionAmount(), 16, 2))
                .pacTotalValTaxAmount(formatFixedDecimal(entity.getPacTotalValTaxAmount(), 16, 2))
                .pacClearingPercentage(formatFixedDecimal(entity.getPacClearingPercentage(), 3, 4))
                .pacMarket(entity.getPacMarket())
                .build();
    }

    private static String formatFixedDecimal(String value, int integerDigits, int decimalDigits) {
        try {
            BigDecimal decimalValue = new BigDecimal(value);
            return formatFixedDecimal(decimalValue, integerDigits, decimalDigits, false);
        } catch (Exception e) {
            return formatFixedDecimal(BigDecimal.ZERO, integerDigits, decimalDigits, false);
        }
    }

    private static String formatFixedDecimal(BigDecimal value, int integerDigits, int decimalDigits) {
        return formatFixedDecimal(value, integerDigits, decimalDigits, false);
    }

    private static String formatFixedDecimal(BigDecimal value, int integerDigits, int decimalDigits,
            boolean includeSign) {
        boolean isNegative = value != null && value.signum() < 0;
        String sign = isNegative ? "-" : (includeSign ? "+" : "");

        if (value == null) {
            String zeros = "0".repeat(integerDigits)
                    + (decimalDigits > 0 ? "." + "0".repeat(decimalDigits) : "");
            return sign + zeros;
        }
        BigDecimal absValue = value.abs().setScale(decimalDigits, RoundingMode.HALF_UP);

        BigDecimal maxValue = BigDecimal.TEN.pow(integerDigits);
        if (absValue.compareTo(maxValue) >= 0) {
            return sign + "9".repeat(integerDigits)
                    + (decimalDigits > 0 ? "." + "9".repeat(decimalDigits) : "");
        }

        String[] parts = absValue.toPlainString().split("\\.");
        String intPart = String.format("%0" + integerDigits + "d", Long.parseLong(parts[0]));
        if (decimalDigits > 0) {
            String decPart = parts.length > 1 ? parts[1] : "0".repeat(decimalDigits);
            return sign + intPart + "." + decPart;
        }
        return sign + intPart;
    }

}

```

## src/main/java/com/nubo/settlement/report/generator/helpers/MapperLiquidaUtil.java

```java
package com.nubo.settlement.report.generator.helpers;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.Objects;

import com.nubo.settlement.report.generator.models.domain.LiquidaReportData;
import com.nubo.settlement.report.generator.models.entity.InvestorAccountEntity;
import com.nubo.settlement.report.generator.models.entity.InvestorEntity;
import com.nubo.settlement.report.generator.models.entity.MarketEntity;
import com.nubo.settlement.report.generator.models.entity.ParticipantAccountEntity;
import com.nubo.settlement.report.generator.models.entity.ParticipantEntity;
import com.nubo.settlement.report.generator.models.entity.SecurityTitleEntity;
import com.nubo.settlement.report.generator.models.entity.SettlementEntity;
import com.nubo.settlement.report.generator.models.entity.StatusEntity;
import com.nubo.settlement.report.generator.models.entity.TradeEntity;
import com.nubo.settlement.report.generator.models.entity.TradeEquityEntity;
import com.nubo.settlement.report.generator.models.entity.TypeEntity;
import com.nubo.settlement.report.generator.models.enums.IdentificationTypeEnum;
import com.nubo.settlement.report.generator.models.enums.MarketEnum;
import com.nubo.settlement.report.generator.models.enums.SideEnum;
import com.nubo.settlement.report.generator.models.enums.StatusEnum;
import com.nubo.settlement.report.generator.models.enums.TypeEnum;

public final class MapperLiquidaUtil {

    private MapperLiquidaUtil() {
    }

    public static LiquidaReportData settlementEntityToLiquidaReportData(SettlementEntity settlement) {
        TradeEntity trade = settlement.getTrade();
        SideEnum sideEnum = SideEnum.fromId(settlement.getSide().getId());
        TradeEquityEntity tradeEquity = trade.getTradeEquity();
        SecurityTitleEntity securityTitleEntity = trade.getSecurityTitle();
        LocalDateTime localDateTime = LocalDateTime.now();
        IdentificationInfo identificationInfo = resolveIdentification(settlement.getInvestorAccount(),
                settlement.getParticipantAccount());

        return LiquidaReportData.builder()
                .recordingDate(dateWithBasicIsoDate(localDateTime.toLocalDate()))
                .recordingTime(timeWithBasicIsoDate(localDateTime.toLocalTime()))
                .operationDate(dateWithBasicIsoDate(trade.getMatchDate()))
                .operationNumber(getOperationNumber(trade))
                .sequenceNumber(getStringValueOrEmpty(settlement.getFraction()))
                .operationSide(sideEnum.getDescription())
                .transactionType(mapTransactionType(trade))
                .marketType(mapMarketType(trade.getMarket()))
                .securityMnemonic(securityTitleEntity != null && securityTitleEntity.getMnemonic() != null
                        ? securityTitleEntity.getMnemonic()
                        : "")
                .buyerAffiliateCode(handleBuyerCode(trade.getParticipantBuy(), trade.getParticipantSell(), sideEnum))
                .sellerAffiliateCode(handleSellerCode(trade.getParticipantBuy(), trade.getParticipantSell(), sideEnum))
                .buyerOperatorCode(handleBuyerCode(trade.getParticipantBuy(), trade.getParticipantSell(), sideEnum))
                .sellerOperatorCode(handleSellerCode(trade.getParticipantBuy(), trade.getParticipantSell(), sideEnum))
                .quantity(getQuantity(trade, settlement))
                .daysToMaturity(trade.getDaysToSettlement() != null ? trade.getDaysToSettlement() : 0)
                .pricePercentage("000.000")
                .interestRatePercent(formatSignedFixedDecimal(trade.getRepoRate(), 10, 4))
                .transactionAmount(getTransactionAmount(trade, settlement))
                .unitPriceAmount(formatFixedDecimal(trade.getPrice(), 10, 2))
                .fixedIncomeIssueDate("0")
                .fixedIncomeMaturityDate("0")
                .issuanceTermDays(0)
                .referenceRateCode("0")
                .adjustmentPointsValue(formatSignedFixedDecimal(BigDecimal.ZERO, 10, 4))
                .issuanceRateValue(formatSignedFixedDecimal(BigDecimal.ZERO, 10, 4))
                .interestCalculationBase("N")
                .interestPaymentFrequency("PV")
                .reinvestInterest("N")
                .auctionIdentifier(mapAuctionIdentifier(trade.getMarket()))
                .settlementTermDays(trade.getDaysToSettlement() == null ? 0
                        : trade.getDaysToSettlement())
                .settlementDate(dateWithBasicIsoDate(trade.getClearingDate()))
                .settlementModeType("F")
                .fixedPriceIndicator(tradeEquity != null
                        ? (Boolean.TRUE.equals(tradeEquity.getExdividendPeriod())
                                ? "S"
                                : "N")
                        : "")
                .exDividendIndicator(tradeEquity != null
                        ? (Boolean.TRUE.equals(tradeEquity.getExdividendPeriod())
                                ? "S"
                                : "N")
                        : "")
                .originIndicator(mapOriginIndicator(trade, sideEnum))
                .offerTypeCode(trade.getBusinessType() == null ? ""
                        : trade.getBusinessType().getDescription())
                .marketIndicator(trade.getIssuanceMarket() == null ? ""
                        : trade.getIssuanceMarket().getDescription())
                .swapFlagIndicator("N")
                .swapReferenceNumber("0")
                .repoInterestRate(formatSignedFixedDecimal(trade.getRepoRate(), 10, 4))
                .repoTermDays(getStringValueOrEmpty(trade.getDaysToSettlement()))
                .repoCaptureValue(formatFixedDecimal(settlement.getRepoAmount(), 12, 2))
                .repoRepurchaseVolume(formatFixedDecimal(trade.getRepurchaseAmount(), 16, 2))
                .depositoryCode(trade.getDepository() == null ? ""
                        : trade.getDepository().getCode())
                .fractionQuantityValue(formatFixedDecimal(settlement.getFractionQuantity(), 12, 2))
                .fractionVolumeValue(formatFixedDecimal(settlement.getFractionVolume(), 12, 2))
                .commissionPercentage(getStringValueOrZero(settlement.getCommissionPercentage()))
                .commissionAmountValue(formatFixedDecimal(settlement.getCommissionAmount(), 10, 2))
                .netFractionPrice("000.000")
                .netFractionRate(formatSignedFixedDecimal(BigDecimal.ZERO, 10, 4))
                .netFractionAmount(formatFixedDecimal(settlement.getNetAmount(), 16, 2))
                .numberOfPrints(Boolean.TRUE.equals(settlement.getIssuedReceipt()) ? 1 : 0)
                .serviceChargeVolume(formatFixedDecimal(BigDecimal.ZERO, 9, 2))
                .serviceChargeOperationValue(formatFixedDecimal(BigDecimal.ZERO, 9, 2))
                .traderCodeIdentifier(mapTraderCodeIdentifier(tradeEquity, sideEnum))
                .totalFractionsCount(0)
                .brokerReferenceValue(settlement.getReference())
                .client1IdentificationType(identificationInfo.type())
                .client1IdentificationNumber(IdentificationTypeEnum.NIT.getCode().equals(identificationInfo.type())
                        ? insertNitVerificationDigit(identificationInfo.number())
                        : identificationInfo.number())
                .fiduciary1IdentificationType("")
                .client2IdentificationType("")
                .client2IdentificationNumber("")
                .fiduciary2IdentificationType("")
                .client3IdentificationType("")
                .client3IdentificationNumber("")
                .fiduciary3IdentificationType("")
                .carouselIndicatorFlag("N")
                .operationStatusIndicator(mapOperationStatusIndicator(trade))
                .withholdingBaseCollectValue(formatFixedDecimal(BigDecimal.ZERO, 12, 2))
                .withholdingPercentageCollectValue(formatFixedDecimal(BigDecimal.ZERO, 3, 2))
                .withholdingValueCollect(formatFixedDecimal(BigDecimal.ZERO, 10, 2))
                .withholdingBaseTransferValue(formatFixedDecimal(BigDecimal.ZERO, 12, 2))
                .withholdingPercentageTransferValue(formatFixedDecimal(BigDecimal.ZERO, 3, 2))
                .withholdingValueTransfer(formatFixedDecimal(BigDecimal.ZERO, 10, 2))
                .vatPercentageValue(formatFixedDecimal(settlement.getValTax(), 3, 3))
                .vatAmountValue(formatFixedDecimal(BigDecimal.ZERO, 10, 2))
                .exchangeServiceTransferClientValue("B")
                .generateReceiptFlag("N")
                .receiptDateValue("0")
                .receiptAmountValue(formatFixedDecimal(BigDecimal.ZERO, 16, 2))
                .issueReceiptBuyerFlagValue("N")
                .counterPaymentValue(formatFixedDecimal(BigDecimal.ZERO, 16, 2))
                .sendWithholdingIndicator("N")
                .liquidityPromoterFlag("N")
                .rateUsageMethod("")
                .longSecurityMnemonic("")
                .lateValue(formatFixedDecimal(BigDecimal.ZERO, 16, 2))
                .latePosition("")
                .lateAccount("N")
                .reinvestment("N")
                .marketSegmentId("EQTY")
                .cashSettlementCompletionStatus(mapCashSettlementCompletionStatus(trade, sideEnum))
                .build();
    }

    private static String mapTransactionType(TradeEntity trade) {
        if (trade == null || trade.getOriginType() == null) {
            return "";
        }
        for (TypeEnum typeEnum : TypeEnum.values()) {
            if (typeEnum.getId() == trade.getOriginType().getId()) {
                return switch (typeEnum) {
                    case NEGOTIATION -> "T";
                    case REGISTRATION -> "R";
                    default -> "";
                };
            }
        }
        return "";
    }

    private static String mapMarketType(MarketEntity market) {
        if (market == null || market.getId() == null) {
            return "";
        }
        for (MarketEnum marketEnum : MarketEnum.values()) {
            if (marketEnum.getId().equals(market.getId())) {
                return switch (marketEnum) {
                    case FIXED_INCOME -> "R";
                    case EQUITY, GLOBAL_MARKET -> "A";
                    default -> "";
                };
            }
        }
        return "";
    }

    private static String handleBuyerCode(ParticipantEntity participantBuy, ParticipantEntity participantSell,
            SideEnum sideEnum) {
        if (participantBuy == null || participantSell == null) {
            return "";
        }
        String code;
        if (sideEnum == SideEnum.SELL) {
            code = Objects.equals(participantBuy.getId(), participantSell.getId())
                    ? participantBuy.getCode()
                    : "999";
        } else {
            code = participantBuy.getCode();
        }
        return code != null && code.length() >= 3 ? code.substring(code.length() - 3) : code != null ? code : "";
    }

    private static String handleSellerCode(ParticipantEntity participantBuy, ParticipantEntity participantSell,
            SideEnum sideEnum) {
        if (participantBuy == null || participantSell == null) {
            return "";
        }
        String code;
        if (sideEnum == SideEnum.BUY) {
            code = Objects.equals(participantBuy.getId(), participantSell.getId())
                    ? participantSell.getCode()
                    : "999";
        } else {
            code = participantSell.getCode();
        }
        return code != null && code.length() >= 3 ? code.substring(code.length() - 3) : code != null ? code : "";
    }

    private static String mapTraderCodeIdentifier(TradeEquityEntity tradeEquityEntity, SideEnum sideEnum) {
        if (tradeEquityEntity == null) {
            return "";
        }
        if (SideEnum.BUY.equals(sideEnum)) {
            if (tradeEquityEntity.getForeignBrokerBuy() != null) {
                return tradeEquityEntity.getForeignBrokerBuy();
            }
        }
        if (SideEnum.SELL.equals(sideEnum)) {
            if (tradeEquityEntity.getForeignBrokerSell() != null) {
                return tradeEquityEntity.getForeignBrokerSell();
            }
        }
        return "";
    }

    private static String tradeEquityReference(TradeEntity tradeEntity) {
        TradeEquityEntity tradeEquityEntity = tradeEntity.getTradeEquity();
        if (tradeEquityEntity == null)
            return "";
        return tradeEquityEntity.getReferenceBuy() != null ? tradeEquityEntity.getReferenceBuy()
                : tradeEquityEntity.getReferenceSell();
    }

    private static String mapOriginIndicator(TradeEntity tradeEntity, SideEnum sideEnum) {
        TypeEntity sourceType = SideEnum.BUY.equals(sideEnum)
                ? tradeEntity.getSourceQuoteBuyType()
                : tradeEntity.getSourceQuoteSellType();
        if (sourceType == null) {
            return "";
        }
        for (TypeEnum typeEnum : TypeEnum.values()) {
            if (typeEnum.getId() == sourceType.getId()) {
                return switch (typeEnum) {
                    case THIRD_PARTIES_POINT_ORIGIN -> "T";
                    case OWN_POSITION_POINT_ORIGIN -> "P";
                    case COLLECTIVE_PORTFOLIO_POINT_ORIGIN -> "E";
                    default -> "";
                };
            }
        }
        return "";
    }

    private static String mapOperationStatusIndicator(TradeEntity tradeEntity) {
        if (tradeEntity == null || tradeEntity.getStatus() == null) {
            return "";
        }
        if (Boolean.TRUE.equals(tradeEntity.getCanceledStatus())) {
            return "A";
        } else {
            return "I";
        }
    }

    private static String dateWithBasicIsoDate(LocalDate localDate) {
        return localDate == null ? ""
                : localDate.format(DateTimeFormatter.BASIC_ISO_DATE);
    }

    private static String timeWithBasicIsoDate(LocalTime localTime) {
        return localTime == null ? ""
                : localTime.format(DateTimeFormatter.ISO_LOCAL_TIME);
    }

    private static IdentificationInfo resolveIdentification(InvestorAccountEntity investorAccountEntity,
            ParticipantAccountEntity participantAccountEntity) {
        if (investorAccountEntity != null && investorAccountEntity.getInvestor() != null) {
            InvestorEntity investor = investorAccountEntity.getInvestor();
            return new IdentificationInfo(
                    investor.getIdentificationType() != null ? investor.getIdentificationType().getCode() : "",
                    investor.getDocumentNumber() != null ? investor.getDocumentNumber() : "");
        }
        if (participantAccountEntity != null && participantAccountEntity.getParticipant() != null) {
            ParticipantEntity participant = participantAccountEntity.getParticipant();
            return new IdentificationInfo(
                    participant.getIdentificationType() != null ? participant.getIdentificationType().getCode() : "",
                    participant.getDocumentNumber() != null ? participant.getDocumentNumber() : "");
        }
        return new IdentificationInfo("", "");
    }

    private static String insertNitVerificationDigit(String documentNumber) {
        if (documentNumber.length() < 2 || documentNumber.contains("-")) {
            return documentNumber;
        }
        String previousPart = documentNumber.substring(0, documentNumber.length() - 1);
        return previousPart + "-" + documentNumber.substring(documentNumber.length() - 1);
    }

    private static String getStringValueOrEmpty(Object value) {
        return value != null ? value.toString() : "";
    }

    private static String getStringValueOrZero(BigDecimal value) {
        return value != null ? value.toPlainString() : "0";
    }

    private static String formatFixedDecimal(BigDecimal value, int integerDigits, int decimalDigits) {
        if (value == null) {
            String zeros = "0".repeat(integerDigits)
                    + (decimalDigits > 0 ? "." + "0".repeat(decimalDigits) : "");
            return zeros;
        }
        BigDecimal absValue = value.abs().setScale(decimalDigits, RoundingMode.HALF_UP);

        BigDecimal maxValue = BigDecimal.TEN.pow(integerDigits);
        if (absValue.compareTo(maxValue) >= 0) {
            return "9".repeat(integerDigits)
                    + (decimalDigits > 0 ? "." + "9".repeat(decimalDigits) : "");
        }

        String[] parts = absValue.toPlainString().split("\\.");
        String intPart = String.format("%0" + integerDigits + "d", Long.parseLong(parts[0]));
        if (decimalDigits > 0) {
            String decPart = parts.length > 1 ? parts[1] : "0".repeat(decimalDigits);
            return intPart + "." + decPart;
        }
        return intPart;
    }

    private static String formatSignedFixedDecimal(BigDecimal value, int integerDigits, int decimalDigits) {
        if (value == null) {
            String zeros = "0".repeat(integerDigits)
                    + (decimalDigits > 0 ? "." + "0".repeat(decimalDigits) : "");
            return "+" + zeros;
        }
        String sign = value.compareTo(BigDecimal.ZERO) >= 0 ? "+" : "-";
        BigDecimal absValue = value.abs().setScale(decimalDigits, RoundingMode.HALF_UP);

        // If integer part exceeds allowed digits, return max value with nines
        BigDecimal maxValue = BigDecimal.TEN.pow(integerDigits);
        if (absValue.compareTo(maxValue) >= 0) {
            String nines = "9".repeat(integerDigits)
                    + (decimalDigits > 0 ? "." + "9".repeat(decimalDigits) : "");
            return sign + nines;
        }

        String[] parts = absValue.toPlainString().split("\\.");
        String intPart = String.format("%0" + integerDigits + "d", Long.parseLong(parts[0]));
        if (decimalDigits > 0) {
            String decPart = parts.length > 1 ? parts[1] : "0".repeat(decimalDigits);
            return sign + intPart + "." + decPart;
        }
        return sign + intPart;
    }

    private static String mapAuctionIdentifier(MarketEntity marketEntity) {
        if (marketEntity == null || marketEntity.getDescription() == null) {
            return "";
        }
        for (MarketEnum marketEnum : MarketEnum.values()) {
            if (marketEnum.getId().equals(marketEntity.getId())) {
                return switch (marketEnum) {
                    case GLOBAL_MARKET -> "MG";
                    case EQUITY -> "EQ";
                    default -> "";
                };
            }
        }
        return "";
    }

    private static String mapCashSettlementCompletionStatus(TradeEntity trade, SideEnum sideEnum) {
        StatusEntity statusEntity = SideEnum.BUY.equals(sideEnum)
                ? trade.getBuyStatus()
                : trade.getSellStatus();
        if (statusEntity == null) {
            return "";
        }
        for (StatusEnum statusEnum : StatusEnum.values()) {
            if (statusEnum.getId().equals(statusEntity.getId())) {
                return switch (statusEnum) {
                    case REGISTERED -> "N";
                    case ASSIGNED, SENT -> "X";
                    case REJECTED -> "R";
                    case ACCEPTED -> "S";
                    case CORRECTION_ACCEPTED -> "A";
                    default -> "";
                };
            }
        }
        return "";
    }

    private static String getTransactionAmount(TradeEntity trade, SettlementEntity settlement) {
        BigDecimal fractionVolume = settlement.getFractionVolume();
        BigDecimal volume = (fractionVolume == null || fractionVolume.compareTo(BigDecimal.ZERO) == 0)
                ? trade.getVolume()
                : fractionVolume;
        return formatFixedDecimal(volume, 16, 2);
    }

    private static String getQuantity(TradeEntity trade, SettlementEntity settlement) {
        BigDecimal fractionQuantity = settlement.getFractionQuantity();
        BigDecimal quantity = (fractionQuantity == null || fractionQuantity.compareTo(BigDecimal.ZERO) == 0)
                ? trade.getQuantity()
                : fractionQuantity;
        return formatFixedDecimal(quantity, 15, 2);
    }

    private static String getOperationNumber(TradeEntity trade) {
        if (trade == null || trade.getMatchId() == null || trade.getMarket() == null) {
            return "";
        }
        return trade.getMatchId().toString();
    }

    // records
    private record IdentificationInfo(String type, String number) {
    }

}

```

## src/main/java/com/nubo/settlement/report/generator/helpers/MapperPapeletaUtil.java

```java
package com.nubo.settlement.report.generator.helpers;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.text.DecimalFormat;
import java.text.DecimalFormatSymbols;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.Locale;

import com.nubo.settlement.report.generator.models.domain.PapeletaReportData;
import com.nubo.settlement.report.generator.models.entity.InvestorAccountEntity;
import com.nubo.settlement.report.generator.models.entity.InvestorEntity;
import com.nubo.settlement.report.generator.models.entity.IsinNumberEntity;
import com.nubo.settlement.report.generator.models.entity.ParticipantAccountEntity;
import com.nubo.settlement.report.generator.models.entity.ParticipantEntity;
import com.nubo.settlement.report.generator.models.entity.SecurityTitleEntity;
import com.nubo.settlement.report.generator.models.entity.SettlementEntity;
import com.nubo.settlement.report.generator.models.entity.SideEntity;
import com.nubo.settlement.report.generator.models.entity.TradeEntity;
import com.nubo.settlement.report.generator.models.enums.IdentificationTypeEnum;
import com.nubo.settlement.report.generator.models.enums.SideEnum;

public final class MapperPapeletaUtil {

    private MapperPapeletaUtil() {
        // Private constructor to prevent instantiation
    }

    public static PapeletaReportData settlementEntityToPapeletaReportData(SettlementEntity settlementEntity) {
        LocalDateTime currentDateTime = LocalDateTime.now();
        TradeEntity tradeEntity = settlementEntity.getTrade();
        SecurityTitleEntity securityTitleEntity = tradeEntity.getSecurityTitle();
        IsinNumberEntity isinNumberEntity = securityTitleEntity.getIsinNumberList().isEmpty() ? null
                : securityTitleEntity.getIsinNumberList().get(0);
        IdentificationInfo identificationInfo = resolveIdentification(settlementEntity.getInvestorAccount(),
                settlementEntity.getParticipantAccount());

        return PapeletaReportData.builder()
                .side(settlementEntity.getSide().getDescription())
                .operationDate(dateWithBasicIsoDate(tradeEntity.getMatchDate()))
                .consecutiveNumber(getConsecutiveNumber(tradeEntity))
                .fractionNumber(settlementEntity.getFraction().toString())
                .settlementDate(dateWithBasicIsoDate(tradeEntity.getClearingDate()))
                .condition(null)
                .securityMnemonic(securityTitleEntity.getMnemonic())
                .speciesDescription(isinNumberEntity == null ? "" : isinNumberEntity.getDescription())
                .client1Name(
                        getClientName(settlementEntity.getInvestorAccount(), settlementEntity.getParticipantAccount()))
                .client1IdType(identificationInfo.type())
                .client1DocumentNumber(IdentificationTypeEnum.NIT.getCode().equals(identificationInfo.type())
                        ? insertNitVerificationDigit(identificationInfo.number())
                        : identificationInfo.number())
                .fiscalCondition(null)
                .client2Name(null)
                .client2IdType(null)
                .client2DocumentNumber(null)
                .client3Name(null)
                .client3IdType(null)
                .client3DocumentNumber(null)
                .affiliateName(affiliateName(tradeEntity, settlementEntity.getSide()))
                .affiliateNit(affiliateNit(tradeEntity, settlementEntity.getSide()))
                .affiliateFiscalCondition(null)
                .userCode("0")
                .deadline(null)
                .nominalRateSpread(null)
                .reinvestmentModality(null)
                .reinvestment(null)
                .issueDate("0")
                .maturityDate("0")
                .maturityDays(null)
                .settlementCurrencyValue(null)
                .currencyValueDate("0")
                .operationType(tradeEntity.getType() == null ? "" : tradeEntity.getType().getDescription())
                .conformedCode("0")
                .businessType("NORMAL")
                .market(tradeEntity.getMarket() == null ? "" : tradeEntity.getMarket().getDescription())
                .operationOrigin("NEGOCIACION")
                .depository(getDepositoryName(tradeEntity, settlementEntity.getSide()))
                .repoRate(formatSignedFixedDecimal(BigDecimal.ZERO, 3, 4))
                .repoStartDate("0")
                .repoEndDate("0")
                .repoTermDays(null)
                .exitValueAAA(null)
                .returnValueBBB(null)
                .repurchaseRate(formatSignedFixedDecimal(BigDecimal.ZERO, 3, 4))
                .repurchaseDate("0")
                .repurchaseValue(null)
                .captureValue(null)
                .equivalentRate365(formatSignedFixedDecimal(BigDecimal.ZERO, 3, 4))
                .currentIndicator(null)
                .currentIndicatorDate("0")
                .previousIndicatorValue(null)
                .previousIndicatorDate("0")
                .maxCorridorIndicatorValue(null)
                .minCorridorIndicatorValue(null)
                .assignmentPrice(null)
                .registrationYield(formatSignedFixedDecimal(BigDecimal.ZERO, 3, 3))
                .commissionYield(formatSignedFixedDecimal(BigDecimal.ZERO, 3, 3))
                .yieldDifferenceBuySell(formatSignedFixedDecimal(BigDecimal.ZERO, 3, 3))
                .netYield(formatSignedFixedDecimal(BigDecimal.ZERO, 3, 3))
                .nominalQuantity(formatWithCommaDecimal(settlementEntity.getFractionQuantity(), false))
                .totalCessionPrice(formatWithCommaDecimal(tradeEntity.getPrice(), true))
                .value(formatWithCommaDecimal(settlementEntity.getFractionVolume(), true))
                .commissionPercentage(formatFixedDecimal(settlementEntity.getCommissionPercentage(), 3, 4))
                .commissionValue(formatWithCommaDecimal(settlementEntity.getCommissionAmount(), true))
                .stockExchangeServiceValue(null)
                .WithholdingTax(formatFixedDecimal(BigDecimal.ZERO, 3, 3))
                .withholdingTaxValue(null)
                .transferredWithholdingPercentage(formatFixedDecimal(BigDecimal.ZERO, 3, 3))
                .transferredWithholdingValue(null)
                .netValue(formatWithCommaDecimal(settlementEntity.getNetAmount(), true))
                .vatCommissionPercentage(formatFixedDecimal(settlementEntity.getValTax(), 3, 2))
                .vatCommissionValue(formatWithCommaDecimal(settlementEntity.getValTaxAmount(), true))
                .netAmountIncludingVat(formatWithCommaDecimal(settlementEntity.getTransferValue(), true))
                .deliveryVsPayment(null)
                .yieldAmount(null)
                .appliedRate(formatSignedFixedDecimal(BigDecimal.ZERO, 3, 4))
                .yieldPeriodStartDate("0")
                .yieldPeriodEndDate("0")
                .observations(null)
                .controlNumber(getStringValueOrEmpty(settlementEntity.getIssuedReceiptNumber()))
                .generationDate(dateWithBasicIsoDate(currentDateTime.toLocalDate()))
                .generationTime(timeWithBasicIsoDate(currentDateTime.toLocalTime()))
                .lateSettlementAmount(null)
                .acceptingEntity(null)
                .build();
    }

    private static String dateWithBasicIsoDate(LocalDate localDate) {
        return localDate == null ? ""
                : localDate.format(DateTimeFormatter.BASIC_ISO_DATE);
    }

    private static String timeWithBasicIsoDate(LocalTime localTime) {
        return localTime == null ? ""
                : localTime.format(DateTimeFormatter.ISO_LOCAL_TIME);
    }

    private static String affiliateName(TradeEntity tradeEntity, SideEntity sideEntity) {
        if (SideEnum.BUY.getId().equals(sideEntity.getId())) {
            return tradeEntity.getParticipantBuy().getName();
        } else if (SideEnum.SELL.getId().equals(sideEntity.getId())) {
            return tradeEntity.getParticipantSell().getName();
        }
        return "";
    }

    private static String affiliateNit(TradeEntity tradeEntity, SideEntity sideEntity) {
        if (SideEnum.BUY.getId().equals(sideEntity.getId())) {
            return tradeEntity.getParticipantBuy().getDocumentNumber();
        } else if (SideEnum.SELL.getId().equals(sideEntity.getId())) {
            return tradeEntity.getParticipantSell().getDocumentNumber();
        }
        return "";
    }

    private static String getDepositoryName(TradeEntity tradeEntity, SideEntity sideEntity) {
        if (SideEnum.BUY.getId().equals(sideEntity.getId())) {
            return tradeEntity.getDepositoryBuy() == null ? "" : tradeEntity.getDepositoryBuy().getDescription();
        } else if (SideEnum.SELL.getId().equals(sideEntity.getId())) {
            return tradeEntity.getDepositorySell() == null ? "" : tradeEntity.getDepositorySell().getDescription();
        }
        return "";
    }

    private static String getClientName(InvestorAccountEntity investorAccountEntity,
            ParticipantAccountEntity participantAccountEntity) {
        if (investorAccountEntity != null && investorAccountEntity.getInvestor() != null) {
            return investorAccountEntity.getAccountName() == null ? ""
                    : investorAccountEntity.getAccountName();
        }
        if (participantAccountEntity != null && participantAccountEntity.getParticipant() != null) {
            return participantAccountEntity.getParticipant().getName() == null ? ""
                    : participantAccountEntity.getParticipant().getName();
        }
        return "";
    }

    private static IdentificationInfo resolveIdentification(InvestorAccountEntity investorAccountEntity,
            ParticipantAccountEntity participantAccountEntity) {
        if (investorAccountEntity != null && investorAccountEntity.getInvestor() != null) {
            InvestorEntity investor = investorAccountEntity.getInvestor();
            return new IdentificationInfo(
                    investor.getIdentificationType() != null ? investor.getIdentificationType().getCode() : "",
                    investor.getDocumentNumber() != null ? investor.getDocumentNumber() : "");
        }
        if (participantAccountEntity != null && participantAccountEntity.getParticipant() != null) {
            ParticipantEntity participant = participantAccountEntity.getParticipant();
            return new IdentificationInfo(
                    participant.getIdentificationType() != null ? participant.getIdentificationType().getCode() : "",
                    participant.getDocumentNumber() != null ? participant.getDocumentNumber() : "");
        }
        return new IdentificationInfo("", "");
    }

    private static String insertNitVerificationDigit(String documentNumber) {
        if (documentNumber.length() < 2) {
            return documentNumber;
        }
        return documentNumber.substring(0, documentNumber.length() - 1) + "-"
                + documentNumber.substring(documentNumber.length() - 1);
    }

    public static String formatWithCommaDecimal(BigDecimal number, boolean trailingMinus) {
        if (number == null) {
            return "0";
        }

        // Configures dots for thousands and commas for decimals
        DecimalFormatSymbols symbols = new DecimalFormatSymbols(Locale.GERMANY);

        // Select the pattern dynamically based on the boolean flag
        String pattern = trailingMinus ? "#,##0.##;#,##0.##-" : "#,##0.##";

        DecimalFormat formatter = new DecimalFormat(pattern, symbols);
        return formatter.format(number);
    }

    private static String formatSignedFixedDecimal(BigDecimal value, int integerDigits, int decimalDigits) {
        if (value == null) {
            String zeros = "0".repeat(integerDigits)
                    + (decimalDigits > 0 ? "." + "0".repeat(decimalDigits) : "");
            return "+" + zeros;
        }
        String sign = value.compareTo(BigDecimal.ZERO) >= 0 ? "+" : "-";
        BigDecimal absValue = value.abs().setScale(decimalDigits, RoundingMode.HALF_UP);

        // If integer part exceeds allowed digits, return max value with nines
        BigDecimal maxValue = BigDecimal.TEN.pow(integerDigits);
        if (absValue.compareTo(maxValue) >= 0) {
            String nines = "9".repeat(integerDigits)
                    + (decimalDigits > 0 ? "." + "9".repeat(decimalDigits) : "");
            return sign + nines;
        }

        String[] parts = absValue.toPlainString().split("\\.");
        String intPart = String.format("%0" + integerDigits + "d", Long.parseLong(parts[0]));
        if (decimalDigits > 0) {
            String decPart = parts.length > 1 ? parts[1] : "0".repeat(decimalDigits);
            return sign + intPart + "." + decPart;
        }
        return sign + intPart;
    }

    private static String formatFixedDecimal(BigDecimal value, int integerDigits, int decimalDigits) {
        if (value == null) {
            String zeros = "0".repeat(integerDigits)
                    + (decimalDigits > 0 ? "." + "0".repeat(decimalDigits) : "");
            return zeros;
        }
        BigDecimal absValue = value.abs().setScale(decimalDigits, RoundingMode.HALF_UP);

        BigDecimal maxValue = BigDecimal.TEN.pow(integerDigits);
        if (absValue.compareTo(maxValue) >= 0) {
            return "9".repeat(integerDigits)
                    + (decimalDigits > 0 ? "." + "9".repeat(decimalDigits) : "");
        }

        String[] parts = absValue.toPlainString().split("\\.");
        String intPart = String.format("%0" + integerDigits + "d", Long.parseLong(parts[0]));
        if (decimalDigits > 0) {
            String decPart = parts.length > 1 ? parts[1] : "0".repeat(decimalDigits);
            return intPart + "." + decPart;
        }
        return intPart;
    }

    private static String getStringValueOrEmpty(Object value) {
        return value != null ? value.toString() : "";
    }

    private static String getConsecutiveNumber(TradeEntity trade) {
        if (trade == null || trade.getMatchId() == null || trade.getMarket() == null) {
            return "";
        }

        String operationsNumber = trade.getMatchId().toString();
        operationsNumber = String.format("%9s", operationsNumber).replace(' ', '0');
        return String.format("%S-%s", dateWithBasicIsoDate(trade.getMatchDate()), operationsNumber);
    }

    // records
    private record IdentificationInfo(String type, String number) {
    }

}

```

## src/main/java/com/nubo/settlement/report/generator/helpers/ValidatorUtil.java

```java
package com.nubo.settlement.report.generator.helpers;

import java.util.Set;

import org.springframework.stereotype.Component;

import com.nubo.settlement.report.generator.exception.ServiceException;
import com.nubo.settlement.report.generator.exception.error.ErrorCode;

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

## src/main/java/com/nubo/settlement/report/generator/models/domain/CustodianPackageReportData.java

```java
package com.nubo.settlement.report.generator.models.domain;

import com.nubo.settlement.report.generator.application.annotations.FixedWidth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CustodianPackageReportData {

    @FixedWidth(order = 1, length = 1, paddingChar = '0')
    private String pacTypeReg1;

    @FixedWidth(order = 2, length = 8, paddingChar = '0')
    private String pacCreationDate;

    @FixedWidth(order = 3, length = 8, paddingChar = '0')
    private String pacTraslateDate;

    @FixedWidth(order = 4, length = 8, paddingChar = '0')
    private String pacAdmitDate;

    @FixedWidth(order = 5, length = 18, paddingChar = '0')
    private String pacPackageNumber;

    @FixedWidth(order = 6, length = 3)
    private String pacReferenceCode;

    @FixedWidth(order = 7, length = 1)
    private String pacStatus;

    @FixedWidth(order = 8, length = 3, paddingChar = '0')
    private String pacAffiliate;

    @FixedWidth(order = 9, length = 3, paddingChar = '0')
    private String pacCustodian;

    @FixedWidth(order = 10, length = 3, paddingChar = '0')
    private String pacFicAdministrator;

    @FixedWidth(order = 11, length = 8, paddingChar = '0')
    private String pacInitialClearingDate;

    @FixedWidth(order = 12, length = 8, paddingChar = '0')
    private String pacFinalClearingDate;

    @FixedWidth(order = 13, length = 1)
    private String pacSide;

    @FixedWidth(order = 14, length = 12)
    private String pacMnemonic;

    @FixedWidth(order = 15, length = 3)
    private String pacCollateral;

    @FixedWidth(order = 16, length = 12)
    private String pacIsin;

    @FixedWidth(order = 17, length = 3)
    private String pacDepository;

    @FixedWidth(order = 18, length = 1)
    private String pacTransactionType;

    @FixedWidth(order = 19, length = 1)
    private String pacInvestorIdentificationType1;

    @FixedWidth(order = 20, length = 12)
    private String pacInvestorIdentificationNumber1;

    @FixedWidth(order = 21, length = 44)
    private String pacInvestorName1;

    @FixedWidth(order = 22, length = 1)
    private String pacInvestorIdentificationType2;

    @FixedWidth(order = 23, length = 12)
    private String pacInvestorIdentificationNumber2;

    @FixedWidth(order = 24, length = 44)
    private String pacInvestorName2;

    @FixedWidth(order = 25, length = 1)
    private String pacInvestorIdentificationType3;

    @FixedWidth(order = 26, length = 12)
    private String pacInvestorIdentificationNumber3;

    @FixedWidth(order = 27, length = 44)
    private String pacInvestorName3;

    @FixedWidth(order = 28, length = 10)
    private String pacInvestorAccount;

    @FixedWidth(order = 29, length = 19)
    private String pacTotalQuantity;

    @FixedWidth(order = 30, length = 19)
    private String pacAverangPrice;

    @FixedWidth(order = 31, length = 9)
    private String pacAverageRate;

    @FixedWidth(order = 32, length = 19)
    private String pacTotalVolume;

    @FixedWidth(order = 33, length = 19)
    private String pacTotalReturnVolume;

    @FixedWidth(order = 34, length = 19)
    private String pacTotalNetAmount;

    @FixedWidth(order = 35, length = 19)
    private String pacTotalReturnNetAmount;

    @FixedWidth(order = 36, length = 19)
    private String pacTotalTransferAmount;

    @FixedWidth(order = 37, length = 19)
    private String pacTotalReturnTransferAmount;

    @FixedWidth(order = 38, length = 19)
    private String pacTotalCommissionAmount;

    @FixedWidth(order = 39, length = 19)
    private String pacTotalValTaxAmount;

    @FixedWidth(order = 40, length = 8)
    private String pacClearingPercentage;

    @FixedWidth(order = 41, length = 2)
    private String pacMarket;
}

```

## src/main/java/com/nubo/settlement/report/generator/models/domain/CustodianReportCsvData.java

```java
package com.nubo.settlement.report.generator.models.domain;

import java.math.BigDecimal;
import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CustodianReportCsvData {

    private LocalDate processDate;
    private String processTime;
    private LocalDate creationDate;
    private LocalDate transferDate;
    private LocalDate admissionDate;
    private LocalDate clearingOutDate;
    private String clearingReturnDate;
    private String mnemonic;
    private String isin;
    private String market;
    private String packetCode;
    private String secondaryPacketCode;
    private String referenceCode;
    private String operationStatus;
    private String side;
    private String operationType;
    private String affiliate;
    private String custodian;
    private String administrator;
    private String investorIdentificationType;
    private String investorDocument;
    private String investorName;
    private String investorAccount;
    private String depository;
    private String affiliateName;
    private String custodianName;
    private String administratorName;
    private LocalDate registerDate;
    private String folio;
    private Integer fraction;
    private LocalDate clearingDate;
    private LocalDate returnDate;
    private BigDecimal quantity;
    private BigDecimal price;
    private BigDecimal rate;
    private BigDecimal grossOutValue;
    private BigDecimal grossReturnValue;
    private BigDecimal commissionPercentage;
    private BigDecimal commissionAmount;
    private BigDecimal taxCommissionAmount;
    private BigDecimal netValue;
    private BigDecimal netReturnValue;
    private BigDecimal grossGiroValue;
    private BigDecimal grossReturnGiroValue;
    private String statusSalida;
    private String statusRegreso;
    private BigDecimal sanction;
    private String psan;
    private String type;
    private BigDecimal quantityProm;
    private BigDecimal priceProm;
    private BigDecimal rateProm;
    private BigDecimal totalGross;
    private BigDecimal totalGrossReg;
    private BigDecimal totalNet;
    private BigDecimal totalNetReg;
    private BigDecimal totalGiro;
    private BigDecimal totalGiroReg;
    private BigDecimal totalCommission;
    private BigDecimal totalTaxCommission;
    private BigDecimal cumpPercentage;
}

```

## src/main/java/com/nubo/settlement/report/generator/models/domain/CustodianUpdatesReportCsvData.java

```java
package com.nubo.settlement.report.generator.models.domain;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CustodianUpdatesReportCsvData {

    private Integer section;
    private LocalDate processDate;
    private LocalTime processTime;
    private String affiliateCode;
    private String affiliateName;
    private String packageNumber;
    private String securityMnemonic;
    private String tradingSide;
    private String affiliatePackageReference;
    private String ficAdministrator;
    private LocalDate eventDate;
    private LocalTime eventTime;
    private String eventStatus;
    private String eventAffiliateCode;
    private String eventCustodianCode;
    private String eventGeneratingEntityCode;
    private String packageStateEvent;
    private BigDecimal quantity;
    private BigDecimal averagePrice;
    private BigDecimal averageRate;
    private BigDecimal grossPackageValue;
    private BigDecimal commissionPackageValue;
    private BigDecimal netPackageValue;
    private BigDecimal netReturnValue;
    private String rejectionReasonCode;
    private String identificationType;
    private String identificationNumber;
    private String depositAccount;
    private BigDecimal appliedPenalty;
    private String eventFolio;
    private Integer fractionNumber;
    private BigDecimal operationQuantity;
    private BigDecimal operationPrice;
    private BigDecimal operationRate;
    private LocalDate operationRegistrationDate;
    private LocalDate operationClearingDate;
    private LocalDate returnFulfillmentDate;
    private String returnExitFlow;
    private BigDecimal penaltyValue;
    private Integer penaltyDays;
    private BigDecimal penaltyRate;
}

```

## src/main/java/com/nubo/settlement/report/generator/models/domain/LiquidaReportData.java

```java
package com.nubo.settlement.report.generator.models.domain;

import com.nubo.settlement.report.generator.application.annotations.FixedWidth;
import com.nubo.settlement.report.generator.application.annotations.FixedWidth.Direction;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class LiquidaReportData {

    @FixedWidth(order = 1, length = 8)
    private String recordingDate;

    @FixedWidth(order = 2, length = 8)
    private String recordingTime;

    @FixedWidth(order = 3, length = 8, paddingChar = '0', direction = Direction.LEFT)
    private String operationDate;

    @FixedWidth(order = 4, length = 9, paddingChar = '0', direction = Direction.LEFT)
    private String operationNumber;

    @FixedWidth(order = 5, length = 3, paddingChar = '0', direction = Direction.LEFT)
    private String sequenceNumber;

    @FixedWidth(order = 6, length = 1)
    private String operationSide;

    @FixedWidth(order = 7, length = 1)
    private String transactionType;

    @FixedWidth(order = 8, length = 1)
    private String marketType;

    @FixedWidth(order = 9, length = 10)
    private String securityMnemonic;

    @FixedWidth(order = 10, length = 3, paddingChar = '0', direction = Direction.LEFT)
    private String buyerAffiliateCode;

    @FixedWidth(order = 11, length = 3, paddingChar = '0', direction = Direction.LEFT)
    private String sellerAffiliateCode;

    @FixedWidth(order = 12, length = 3)
    private String buyerOperatorCode;

    @FixedWidth(order = 13, length = 3)
    private String sellerOperatorCode;

    @FixedWidth(order = 14, length = 18, paddingChar = '0', direction = Direction.LEFT)
    private String quantity;

    @FixedWidth(order = 15, length = 5, paddingChar = '0', direction = Direction.LEFT)
    private Integer daysToMaturity;

    @FixedWidth(order = 16, length = 7, paddingChar = '0', direction = Direction.LEFT)
    private String pricePercentage;

    @FixedWidth(order = 17, length = 16, paddingChar = ' ', direction = Direction.LEFT)
    private String interestRatePercent;

    @FixedWidth(order = 18, length = 19, paddingChar = '0', direction = Direction.LEFT)
    private String transactionAmount;

    @FixedWidth(order = 19, length = 13, paddingChar = '0', direction = Direction.LEFT)
    private String unitPriceAmount;

    @FixedWidth(order = 20, length = 8, paddingChar = '0', direction = Direction.LEFT)
    private String fixedIncomeIssueDate;

    @FixedWidth(order = 21, length = 8, paddingChar = '0', direction = Direction.LEFT)
    private String fixedIncomeMaturityDate;

    @FixedWidth(order = 22, length = 5, paddingChar = '0', direction = Direction.LEFT)
    private Integer issuanceTermDays;

    @FixedWidth(order = 23, length = 1)
    private String referenceRateCode;

    @FixedWidth(order = 24, length = 16, paddingChar = '0', direction = Direction.LEFT)
    private String adjustmentPointsValue;

    @FixedWidth(order = 25, length = 16, paddingChar = '0', direction = Direction.LEFT)
    private String issuanceRateValue;

    @FixedWidth(order = 26, length = 1)
    private String interestCalculationBase;

    @FixedWidth(order = 27, length = 2, paddingChar = '0', direction = Direction.LEFT)
    private String interestPaymentFrequency;

    @FixedWidth(order = 28, length = 1)
    private String reinvestInterest;

    @FixedWidth(order = 29, length = 2)
    private String auctionIdentifier;

    @FixedWidth(order = 30, length = 3, paddingChar = '0', direction = Direction.LEFT)
    private Integer settlementTermDays;

    @FixedWidth(order = 31, length = 8)
    private String settlementDate;

    @FixedWidth(order = 32, length = 1)
    private String settlementModeType;

    @FixedWidth(order = 33, length = 1)
    private String fixedPriceIndicator;

    @FixedWidth(order = 34, length = 1)
    private String exDividendIndicator;

    @FixedWidth(order = 35, length = 1)
    private String originIndicator;

    @FixedWidth(order = 36, length = 1)
    private String offerTypeCode;

    @FixedWidth(order = 37, length = 1)
    private String marketIndicator;

    @FixedWidth(order = 38, length = 1)
    private String swapFlagIndicator;

    @FixedWidth(order = 39, length = 8, paddingChar = '0', direction = Direction.LEFT)
    private String swapReferenceNumber;

    @FixedWidth(order = 40, length = 16, paddingChar = '0', direction = Direction.LEFT)
    private String repoInterestRate;

    @FixedWidth(order = 41, length = 5, paddingChar = '0', direction = Direction.LEFT)
    private String repoTermDays;

    @FixedWidth(order = 42, length = 15, paddingChar = '0', direction = Direction.LEFT)
    private String repoCaptureValue;

    @FixedWidth(order = 43, length = 19, paddingChar = '0', direction = Direction.LEFT)
    private String repoRepurchaseVolume;

    @FixedWidth(order = 44, length = 3)
    private String depositoryCode;

    @FixedWidth(order = 45, length = 15, paddingChar = '0', direction = Direction.LEFT)
    private String fractionQuantityValue;

    @FixedWidth(order = 46, length = 19, paddingChar = '0', direction = Direction.LEFT)
    private String fractionVolumeValue;

    @FixedWidth(order = 47, length = 8, paddingChar = '0', direction = Direction.LEFT)
    private String commissionPercentage;

    @FixedWidth(order = 48, length = 13, paddingChar = '0', direction = Direction.LEFT)
    private String commissionAmountValue;

    @FixedWidth(order = 49, length = 7, paddingChar = '0', direction = Direction.LEFT)
    private String netFractionPrice;

    @FixedWidth(order = 50, length = 16, paddingChar = '0', direction = Direction.LEFT)
    private String netFractionRate;

    @FixedWidth(order = 51, length = 19, paddingChar = '0', direction = Direction.LEFT)
    private String netFractionAmount;

    @FixedWidth(order = 52, length = 2, paddingChar = '0', direction = Direction.LEFT)
    private Integer numberOfPrints;

    @FixedWidth(order = 53, length = 12, paddingChar = '0', direction = Direction.LEFT)
    private String serviceChargeVolume;

    @FixedWidth(order = 54, length = 12, paddingChar = '0', direction = Direction.LEFT)
    private String serviceChargeOperationValue;

    @FixedWidth(order = 55, length = 8, paddingChar = '0', direction = Direction.LEFT)
    private String traderCodeIdentifier;

    @FixedWidth(order = 56, length = 3, paddingChar = '0', direction = Direction.LEFT)
    private Integer totalFractionsCount;

    @FixedWidth(order = 57, length = 8)
    private String brokerReferenceValue;

    @FixedWidth(order = 58, length = 1)
    private String client1IdentificationType;

    @FixedWidth(order = 59, length = 12)
    private String client1IdentificationNumber;

    @FixedWidth(order = 60, length = 3)
    private String fiduciary1IdentificationType;

    @FixedWidth(order = 61, length = 1)
    private String client2IdentificationType;

    @FixedWidth(order = 62, length = 12)
    private String client2IdentificationNumber;

    @FixedWidth(order = 63, length = 3)
    private String fiduciary2IdentificationType;

    @FixedWidth(order = 64, length = 1)
    private String client3IdentificationType;

    @FixedWidth(order = 65, length = 12)
    private String client3IdentificationNumber;

    @FixedWidth(order = 66, length = 3)
    private String fiduciary3IdentificationType;

    @FixedWidth(order = 67, length = 1)
    private String carouselIndicatorFlag;

    @FixedWidth(order = 68, length = 1)
    private String operationStatusIndicator;

    @FixedWidth(order = 69, length = 15, paddingChar = '0', direction = Direction.LEFT)
    private String withholdingBaseCollectValue;

    @FixedWidth(order = 70, length = 6, paddingChar = '0', direction = Direction.LEFT)
    private String withholdingPercentageCollectValue;

    @FixedWidth(order = 71, length = 13, paddingChar = '0', direction = Direction.LEFT)
    private String withholdingValueCollect;

    @FixedWidth(order = 72, length = 15, paddingChar = '0', direction = Direction.LEFT)
    private String withholdingBaseTransferValue;

    @FixedWidth(order = 73, length = 6, paddingChar = '0', direction = Direction.LEFT)
    private String withholdingPercentageTransferValue;

    @FixedWidth(order = 74, length = 13, paddingChar = '0', direction = Direction.LEFT)
    private String withholdingValueTransfer;

    @FixedWidth(order = 75, length = 7, paddingChar = '0', direction = Direction.LEFT)
    private String vatPercentageValue;

    @FixedWidth(order = 76, length = 13, paddingChar = '0', direction = Direction.LEFT)
    private String vatAmountValue;

    @FixedWidth(order = 77, length = 1)
    private String exchangeServiceTransferClientValue;

    @FixedWidth(order = 78, length = 1)
    private String generateReceiptFlag;

    @FixedWidth(order = 79, length = 8, paddingChar = '0', direction = Direction.LEFT)
    private String receiptDateValue;

    @FixedWidth(order = 80, length = 19, paddingChar = '0', direction = Direction.LEFT)
    private String receiptAmountValue;

    @FixedWidth(order = 81, length = 1)
    private String issueReceiptBuyerFlagValue;

    @FixedWidth(order = 82, length = 19, paddingChar = '0', direction = Direction.LEFT)
    private String counterPaymentValue;

    @FixedWidth(order = 83, length = 1)
    private String sendWithholdingIndicator;

    @FixedWidth(order = 84, length = 1)
    private String liquidityPromoterFlag;

    @FixedWidth(order = 85, length = 1)
    private String rateUsageMethod;

    @FixedWidth(order = 86, length = 12)
    private String longSecurityMnemonic;

    @FixedWidth(order = 87, length = 19, paddingChar = '0', direction = Direction.LEFT)
    private String lateValue;

    @FixedWidth(order = 88, length = 1)
    private String latePosition;

    @FixedWidth(order = 89, length = 1)
    private String lateAccount;

    @FixedWidth(order = 90, length = 1)
    private String reinvestment;

    @FixedWidth(order = 91, length = 4)
    private String marketSegmentId;

    @FixedWidth(order = 92, length = 1)
    private String cashSettlementCompletionStatus;

}

```

## src/main/java/com/nubo/settlement/report/generator/models/domain/PapeletaReportData.java

```java
package com.nubo.settlement.report.generator.models.domain;

import com.nubo.settlement.report.generator.application.annotations.FixedWidth;
import com.nubo.settlement.report.generator.application.annotations.FixedWidth.Direction;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PapeletaReportData {

    @FixedWidth(order = 1, length = 6)
    private String side;

    @FixedWidth(order = 2, length = 8)
    private String operationDate;

    @FixedWidth(order = 3, length = 18)
    private String consecutiveNumber;

    @FixedWidth(order = 4, length = 6, paddingChar = '0', direction = Direction.LEFT)
    private String fractionNumber;

    @FixedWidth(order = 5, length = 8, paddingChar = '0', direction = Direction.LEFT)
    private String settlementDate;

    @FixedWidth(order = 6, length = 9)
    private String condition;

    @FixedWidth(order = 7, length = 12)
    private String securityMnemonic;

    @FixedWidth(order = 8, length = 33)
    private String speciesDescription;

    @FixedWidth(order = 9, length = 44)
    private String client1Name;

    @FixedWidth(order = 10, length = 3)
    private String client1IdType;

    @FixedWidth(order = 11, length = 15)
    private String client1DocumentNumber;

    @FixedWidth(order = 12, length = 12)
    private String fiscalCondition;

    @FixedWidth(order = 13, length = 44)
    private String client2Name;

    @FixedWidth(order = 14, length = 3)
    private String client2IdType;

    @FixedWidth(order = 15, length = 15)
    private String client2DocumentNumber;

    @FixedWidth(order = 16, length = 44)
    private String client3Name;

    @FixedWidth(order = 17, length = 3)
    private String client3IdType;

    @FixedWidth(order = 18, length = 15)
    private String client3DocumentNumber;

    @FixedWidth(order = 19, length = 35)
    private String affiliateName;

    @FixedWidth(order = 20, length = 15)
    private String affiliateNit;

    @FixedWidth(order = 21, length = 12)
    private String affiliateFiscalCondition;

    @FixedWidth(order = 22, length = 3, paddingChar = '0', direction = Direction.LEFT)
    private String userCode;

    @FixedWidth(order = 23, length = 6)
    private String deadline;

    @FixedWidth(order = 24, length = 11)
    private String nominalRateSpread;

    @FixedWidth(order = 25, length = 2)
    private String reinvestmentModality;

    @FixedWidth(order = 26, length = 2)
    private String reinvestment;

    @FixedWidth(order = 27, length = 8, paddingChar = '0', direction = Direction.LEFT)
    private String issueDate;

    @FixedWidth(order = 28, length = 8, paddingChar = '0', direction = Direction.LEFT)
    private String maturityDate;

    @FixedWidth(order = 29, length = 6)
    private String maturityDays;

    @FixedWidth(order = 30, length = 11)
    private String settlementCurrencyValue;

    @FixedWidth(order = 31, length = 8, paddingChar = '0', direction = Direction.LEFT)
    private String currencyValueDate;

    @FixedWidth(order = 32, length = 17)
    private String operationType;

    @FixedWidth(order = 33, length = 3, paddingChar = '0', direction = Direction.LEFT)
    private String conformedCode;

    @FixedWidth(order = 34, length = 15)
    private String businessType;

    @FixedWidth(order = 35, length = 10)
    private String market;

    @FixedWidth(order = 36, length = 11)
    private String operationOrigin;

    @FixedWidth(order = 37, length = 10)
    private String depository;

    @FixedWidth(order = 38, length = 9, paddingChar = '0', direction = Direction.LEFT)
    private String repoRate;

    @FixedWidth(order = 39, length = 8, paddingChar = '0', direction = Direction.LEFT)
    private String repoStartDate;

    @FixedWidth(order = 40, length = 8, paddingChar = '0', direction = Direction.LEFT)
    private String repoEndDate;

    @FixedWidth(order = 41, length = 6)
    private String repoTermDays;

    @FixedWidth(order = 42, length = 25)
    private String exitValueAAA;

    @FixedWidth(order = 43, length = 25)
    private String returnValueBBB;

    @FixedWidth(order = 44, length = 9, paddingChar = '0', direction = Direction.LEFT)
    private String repurchaseRate;

    @FixedWidth(order = 45, length = 8, paddingChar = '0', direction = Direction.LEFT)
    private String repurchaseDate;

    @FixedWidth(order = 46, length = 25)
    private String repurchaseValue;

    @FixedWidth(order = 47, length = 25)
    private String captureValue;

    @FixedWidth(order = 48, length = 9, paddingChar = '0', direction = Direction.LEFT)
    private String equivalentRate365;

    @FixedWidth(order = 49, length = 11)
    private String currentIndicator;

    @FixedWidth(order = 50, length = 8, paddingChar = '0', direction = Direction.LEFT)
    private String currentIndicatorDate;

    @FixedWidth(order = 51, length = 11)
    private String previousIndicatorValue;

    @FixedWidth(order = 52, length = 8, paddingChar = '0', direction = Direction.LEFT)
    private String previousIndicatorDate;

    @FixedWidth(order = 53, length = 11)
    private String maxCorridorIndicatorValue;

    @FixedWidth(order = 54, length = 11)
    private String minCorridorIndicatorValue;

    @FixedWidth(order = 55, length = 11)
    private String assignmentPrice;

    @FixedWidth(order = 56, length = 8, paddingChar = '0', direction = Direction.LEFT)
    private String registrationYield;

    @FixedWidth(order = 57, length = 8, paddingChar = '0', direction = Direction.LEFT)
    private String commissionYield;

    @FixedWidth(order = 58, length = 8, paddingChar = '0', direction = Direction.LEFT)
    private String yieldDifferenceBuySell;

    @FixedWidth(order = 59, length = 8, paddingChar = '0', direction = Direction.LEFT)
    private String netYield;

    @FixedWidth(order = 60, length = 25, firstChar = '$', paddingChar = '*', direction = Direction.LEFT)
    private String nominalQuantity;

    @FixedWidth(order = 61, length = 20, firstChar = '$', paddingChar = '*', direction = Direction.LEFT)
    private String totalCessionPrice;

    @FixedWidth(order = 62, length = 25, firstChar = '$', paddingChar = '*', direction = Direction.LEFT)
    private String value;

    @FixedWidth(order = 63, length = 8)
    private String commissionPercentage;

    @FixedWidth(order = 64, length = 25, firstChar = '$', paddingChar = '*', direction = Direction.LEFT)
    private String commissionValue;

    @FixedWidth(order = 65, length = 24)
    private String stockExchangeServiceValue;

    @FixedWidth(order = 66, length = 7, paddingChar = '0', direction = Direction.LEFT)
    private String WithholdingTax;

    @FixedWidth(order = 67, length = 25)
    private String withholdingTaxValue;

    @FixedWidth(order = 68, length = 7, paddingChar = '0', direction = Direction.LEFT)
    private String transferredWithholdingPercentage;

    @FixedWidth(order = 69, length = 25)
    private String transferredWithholdingValue;

    @FixedWidth(order = 70, length = 25, firstChar = '$', paddingChar = '*', direction = Direction.LEFT)
    private String netValue;

    @FixedWidth(order = 71, length = 6)
    private String vatCommissionPercentage;

    @FixedWidth(order = 72, length = 25, firstChar = '$', paddingChar = '*', direction = Direction.LEFT)
    private String vatCommissionValue;

    @FixedWidth(order = 73, length = 25, firstChar = '$', paddingChar = '*', direction = Direction.LEFT)
    private String netAmountIncludingVat;

    @FixedWidth(order = 74, length = 25)
    private String deliveryVsPayment;

    @FixedWidth(order = 75, length = 25)
    private String yieldAmount;

    @FixedWidth(order = 76, length = 9)
    private String appliedRate;

    @FixedWidth(order = 77, length = 8, paddingChar = '0', direction = Direction.LEFT)
    private String yieldPeriodStartDate;

    @FixedWidth(order = 78, length = 8, paddingChar = '0', direction = Direction.LEFT)
    private String yieldPeriodEndDate;

    @FixedWidth(order = 79, length = 500)
    private String observations;

    @FixedWidth(order = 80, length = 10)
    private String controlNumber;

    @FixedWidth(order = 81, length = 8, paddingChar = '0', direction = Direction.LEFT)
    private String generationDate;

    @FixedWidth(order = 82, length = 8, paddingChar = '0', direction = Direction.LEFT)
    private String generationTime;

    @FixedWidth(order = 83, length = 19)
    private String lateSettlementAmount;

    @FixedWidth(order = 84, length = 1)
    private String acceptingEntity;

}

```

## src/main/java/com/nubo/settlement/report/generator/models/dto/request/CustodianReportFilterInDto.java

```java
package com.nubo.settlement.report.generator.models.dto.request;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.nubo.settlement.report.generator.models.enums.FileTypeOptionEnum;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class CustodianReportFilterInDto {

    private LocalDate packageClearingDate;

    private LocalDate packageCreationDate;

    private String custodian;

    private String fic;

    private String packageStatus;

    private String packageNumber;

    private String operationType;

    private String affiliate;

    @Builder.Default
    private FileTypeOptionEnum fileType = FileTypeOptionEnum.CSV;
}

```

## src/main/java/com/nubo/settlement/report/generator/models/dto/request/CustodianReportPayloadInDto.java

```java
package com.nubo.settlement.report.generator.models.dto.request;

import java.time.LocalDate;

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
public class CustodianReportPayloadInDto {

    @NotNull
    private Long fileGenerateId;

    @NotNull
    private Long participantId;

    private Long totalRecords;

    @NotNull
    private LocalDate date;

    private String reportName;

    private String sourceView;

    @NotNull
    @Valid
    private CustodianReportFilterInDto filter;
}

```

## src/main/java/com/nubo/settlement/report/generator/models/dto/request/CustodianUpdatesReportFilterInDto.java

```java
package com.nubo.settlement.report.generator.models.dto.request;

import java.time.LocalDate;

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
public class CustodianUpdatesReportFilterInDto {

    private LocalDate complianceDate;

    private LocalDate packageCreationDate;

    private String custodian;

    private String affiliatedCode;

    private String packageNumber;

    private String side;

    private String status;

}

```

## src/main/java/com/nubo/settlement/report/generator/models/dto/request/CustodianUpdatesReportPayloadInDto.java

```java
package com.nubo.settlement.report.generator.models.dto.request;

import java.time.LocalDate;

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
public class CustodianUpdatesReportPayloadInDto {

    @NotNull
    private Long fileGenerateId;

    @NotNull
    private Long participantId;

    private Long totalRecords;

    @NotNull
    private LocalDate date;

    private String reportName;

    private String sourceView;

    @NotNull
    @Valid
    private CustodianUpdatesReportFilterInDto filter;
}

```

## src/main/java/com/nubo/settlement/report/generator/models/dto/request/EventKafkaCustodianReportInDto.java

```java
package com.nubo.settlement.report.generator.models.dto.request;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

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
public class EventKafkaCustodianReportInDto {

    private Long targetUserId;
    private String clientIp;
    private String clientUser;
    private String clientDateTime;

    @Valid
    @JsonProperty("payload")
    private CustodianReportPayloadInDto payload;
}

```

## src/main/java/com/nubo/settlement/report/generator/models/dto/request/EventKafkaCustodianUpdatesReportInDto.java

```java
package com.nubo.settlement.report.generator.models.dto.request;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

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
public class EventKafkaCustodianUpdatesReportInDto {

    private Long targetUserId;
    private String clientIp;
    private String clientUser;
    private String clientDateTime;

    @Valid
    @JsonProperty("payload")
    private CustodianUpdatesReportPayloadInDto payload;
}

```

## src/main/java/com/nubo/settlement/report/generator/models/dto/request/EventKafkaInDto.java

```java
package com.nubo.settlement.report.generator.models.dto.request;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EventKafkaInDto {

    private Long targetUserId;

    private String clientIp;

    private String clientUser;

    private String clientDateTime;

    private Long participantId;

    @Valid
    @JsonProperty("payload")
    private SettlementReportFileInDto settlementReportFileOutDto;

}

```

## src/main/java/com/nubo/settlement/report/generator/models/dto/request/NotificationRequestDto.java

```java
package com.nubo.settlement.report.generator.models.dto.request;

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
public class NotificationRequestDto {

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

## src/main/java/com/nubo/settlement/report/generator/models/dto/request/SettlementReportFileInDto.java

```java
package com.nubo.settlement.report.generator.models.dto.request;

import java.time.LocalDate;
import java.util.List;

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
public class SettlementReportFileInDto {

    @NotNull
    private Long fileGenerateId;

    @NotNull
    private Long participantId;

    private List<Long> searchStatusIds;

    @NotNull
    @Size(min = 1)
    private List<Long> tradeTypeIds;

    private Long statusRegisteredId;

    private Long countryId;

    private Long reportsSize;

    @NotNull
    private LocalDate date;
}

```

## src/main/java/com/nubo/settlement/report/generator/models/entity/ClassEntity.java

```java
package com.nubo.settlement.report.generator.models.entity;

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
@Table(name = "\"CLASS\"", schema = "\"NUANBODB\"")
public class ClassEntity {

    @Id
    @Column(name = "\"CLASS_ID\"", length = 2, nullable = false)
    private String id;

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

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        ClassEntity that = (ClassEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/settlement/report/generator/models/entity/CountryEntity.java

```java
package com.nubo.settlement.report.generator.models.entity;

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

## src/main/java/com/nubo/settlement/report/generator/models/entity/CurrencyEntity.java

```java
package com.nubo.settlement.report.generator.models.entity;

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
@Table(name = "\"CURRENCY\"", schema = "\"NUANBODB\"")
public class CurrencyEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"CURRENCY_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"CODE\"", length = 3)
    private String code;

    @Column(name = "\"NAME\"", length = 80)
    private String name;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        CurrencyEntity that = (CurrencyEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/settlement/report/generator/models/entity/CustodianIncidentsReportViewEntity.java

```java
package com.nubo.settlement.report.generator.models.entity;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalTime;

import org.hibernate.annotations.Immutable;
import org.hibernate.annotations.Subselect;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Immutable
@Subselect("""
        SELECT v.*,
            COALESCE(
                (SELECT p."NAME" FROM "NUANBODB"."PARTICIPANT" p
                  WHERE right(p."CODE", 3) = v.pac_custodian
                    AND v.pac_custodian ~ '^[0-9]+$'
                  LIMIT 1),
                ''
            ) AS entity_name,
            (
                COALESCE(v.section_2::text, '-1') || '|'
                || COALESCE(v.hea_package_code, '') || '|'
                || COALESCE(v.pac_event_date::text, '') || '|'
                || COALESCE(v.pac_even_hour::text, '') || '|'
                || COALESCE(v.pac_event, '') || '|'
                || COALESCE(v.pac_affiliate, '') || '|'
                || COALESCE(v.pac_custodian, '') || '|'
                || COALESCE(v.hea_reference, '') || '|'
                || COALESCE(v.hea_administrator, '') || '|'
                || COALESCE(v.det_match_id::text, '-1') || '|'
                || COALESCE(v.det_fraction::text, '0')
            ) AS row_key
        FROM "NUANBODB".vw_custodian_incidents_report v
        """)
public class CustodianIncidentsReportViewEntity {

    @Id
    @Column(name = "row_key")
    private String rowKey;

    @Column(name = "entity_name")
    private String entityName;

    @Column(name = "section_2")
    private Integer section2;

    @Column(name = "hea_package_code")
    private String heaPackageCode;

    @Column(name = "hea_fecha_crea")
    private LocalDate heaCreaDate;

    @Column(name = "hea_process_date")
    private LocalDate heaProcessDate;

    @Column(name = "hea_process_hour")
    private LocalTime heaProcessHour;

    @Column(name = "hea_entity")
    private String heaEntity;

    @Column(name = "hea_entity_name")
    private String heaEntityName;

    @Column(name = "hea_mnemonic")
    private String heaMnemonic;

    @Column(name = "hea_side")
    private String heaSide;

    @Column(name = "hea_reference")
    private String heaReference;

    @Column(name = "hea_administrator")
    private String heaAdministrator;

    @Column(name = "pac_event_date")
    private LocalDate pacEventDate;

    @Column(name = "pac_even_hour")
    private String pacEvenHour;

    @Column(name = "pac_event")
    private String pacEvent;

    @Column(name = "pac_affiliate")
    private String pacAffiliate;

    @Column(name = "pac_custodian")
    private String pacCustodian;

    @Column(name = "pac_generating_entity")
    private String pacGeneratingEntity;

    @Column(name = "pac_package_status")
    private String pacPackageStatus;

    @Column(name = "pac_quantity")
    private BigDecimal pacQuantity;

    @Column(name = "pac_averange_price")
    private BigDecimal pacAverangePrice;

    @Column(name = "pac_averange_rate")
    private BigDecimal pacAverangeRate;

    @Column(name = "pac_total_volume")
    private BigDecimal pacTotalVolume;

    @Column(name = "pac_total_commission")
    private BigDecimal pacTotalCommission;

    @Column(name = "pac_total_net_amount")
    private BigDecimal pacTotalNetAmount;

    @Column(name = "pac_total_return_net_amount")
    private BigDecimal pacTotalReturnNetAmount;

    @Column(name = "pac_substate")
    private String pacSubstate;

    @Column(name = "pac_investor_identification_type")
    private String pacInvestorIdentificationType;

    @Column(name = "pac_investor_identification_number")
    private String pacInvestorIdentificationNumber;

    @Column(name = "pac_investor_account")
    private String pacInvestorAccount;

    @Column(name = "pac_extense_penality")
    private BigDecimal pacExtensePenality;

    @Column(name = "det_match_id")
    private BigDecimal detMatchId;

    @Column(name = "det_fraction")
    private Long detFraction;

    @Column(name = "det_match_date")
    private LocalDate detMatchDate;

    @Column(name = "det_clearing_date")
    private LocalDate detClearingDate;

    @Column(name = "det_return_clearing_date")
    private LocalDate detReturnClearingDate;

    @Column(name = "det_quantity")
    private BigDecimal detQuantity;

    @Column(name = "det_price")
    private BigDecimal detPrice;

    @Column(name = "det_rate")
    private BigDecimal detRate;

    @Column(name = "det_departure_return")
    private String detDepartureReturn;

    @Column(name = "det_days_penality")
    private Integer detDaysPenality;

    @Column(name = "det_rate_penality")
    private Integer detRatePenality;
}

```

## src/main/java/com/nubo/settlement/report/generator/models/entity/CustodianReportViewEntity.java

```java
package com.nubo.settlement.report.generator.models.entity;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Objects;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import org.hibernate.annotations.Immutable;
import org.hibernate.annotations.Subselect;
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
@Immutable
@Subselect("""
        SELECT *, (pac_consecutive_1 || '|' || COALESCE(pac_consecutive_2, '') || '|'
                || COALESCE(det_match_id::text, '-1') || '|' || COALESCE(det_fraction::text, '0')) AS row_key
        FROM "NUANBODB".vw_custodian_package_report
        """)
public class CustodianReportViewEntity {

    @Id
    @Column(name = "row_key")
    private String rowKey;

    @Column(name = "pac_type_reg_1")
    private String pacTypeReg1;

    @Column(name = "pac_consecutive_1")
    private String pacConsecutive1;

    @Column(name = "pac_consecutive_2")
    private String pacConsecutive2;

    @Column(name = "det_match_id")
    private String detMatchId;

    @Column(name = "pac_creation_date")
    private LocalDate pacCreationDate;

    @Column(name = "pac_traslate_date")
    private LocalDateTime pacTraslateDate;

    @Column(name = "pac_admit_date")
    private LocalDateTime pacAdmitDate;

    @Column(name = "pac_initial_clearing_date")
    private LocalDate pacInitialClearingDate;

    @Column(name = "pac_final_clearing_date")
    private LocalDate pacFinalClearingDate;

    @Column(name = "pac_mnemonic")
    private String pacMnemonic;

    @Column(name = "pac_isin")
    private String pacIsin;

    @Column(name = "pac_collateral")
    private String pacCollateral;

    @Column(name = "pac_market")
    private String pacMarket;

    @Column(name = "pac_reference_code")
    private String pacReferenceCode;

    @Column(name = "pac_status")
    private String pacStatus;

    @Column(name = "pac_side")
    private String pacSide;

    @Column(name = "pac_transaction_type")
    private String pacTransactionType;

    @Column(name = "pac_affiliate")
    private String pacAffiliate;

    @Column(name = "pac_custodian")
    private String pacCustodian;

    @Column(name = "pac_fic_administrator")
    private String pacFicAdministrator;

    @Column(name = "pac_investor_identification_type_1")
    private String pacInvestorIdentificationType1;

    @Column(name = "pac_investor_identification_number_1")
    private String pacInvestorIdentificationNumber1;

    @Column(name = "pac_investor_name_1")
    private String pacInvestorName1;

    @Column(name = "pac_investor_identification_type_2")
    private String pacInvestorIdentificationType2;

    @Column(name = "pac_investor_identification_number_2")
    private String pacInvestorIdentificationNumber2;

    @Column(name = "pac_investor_name_2")
    private String pacInvestorName2;

    @Column(name = "pac_investor_identification_type_3")
    private String pacInvestorIdentificationType3;

    @Column(name = "pac_investor_identification_number_3")
    private String pacInvestorIdentificationNumber3;

    @Column(name = "pac_investor_name_3")
    private String pacInvestorName3;

    @Column(name = "pac_investor_account")
    private String pacInvestorAccount;

    @Column(name = "pac_depository")
    private String pacDepository;

    @Column(name = "det_match_date")
    private LocalDate detMatchDate;

    @Column(name = "det_fraction")
    private Integer detFraction;

    @Column(name = "det_clearing_date")
    private LocalDate detClearingDate;

    @Column(name = "det_return_clearing_date")
    private LocalDate detReturnClearingDate;

    @Column(name = "det_quantity")
    private BigDecimal detQuantity;

    @Column(name = "det_price")
    private BigDecimal detPrice;

    @Column(name = "det_rate")
    private BigDecimal detRate;

    @Column(name = "det_volume")
    private BigDecimal detVolume;

    @Column(name = "det_percentaje_commission")
    private BigDecimal detPercentajeCommission;

    @Column(name = "det_commission_amount")
    private BigDecimal detCommissionAmount;

    @Column(name = "det_val_tax_amount")
    private BigDecimal detValTaxAmount;

    @Column(name = "det_net_amount")
    private BigDecimal detNetAmount;

    @Column(name = "det_compliance_indicator")
    private String detComplianceIndicator;

    @Column(name = "det_return_compliance_indicator")
    private String detReturnComplianceIndicator;

    @Column(name = "det_extense_penality")
    private String detExtensePenality;

    @Column(name = "det_extense_position")
    private String detExtensePosition;

    @Column(name = "det_transfer_amount")
    private String detTransferAmount;

    @Column(name = "det_return_transfer_amount")
    private String detReturnTransferAmount;

    @Column(name = "pac_clearing_percentage")
    private BigDecimal pacClearingPercentage;

    @Column(name = "pac_total_volume")
    private BigDecimal pacTotalVolume;

    @Column(name = "pac_total_return_volume")
    private String pacTotalReturnVolume;

    @Column(name = "pac_total_net_amount")
    private BigDecimal pacTotalNetAmount;

    @Column(name = "pac_total_return_net_amount")
    private String pacTotalReturnNetAmount;

    @Column(name = "pac_total_commission_amount")
    private BigDecimal pacTotalCommissionAmount;

    @Column(name = "pac_total_val_tax_amount")
    private BigDecimal pacTotalValTaxAmount;

    @Column(name = "pac_total_quantity")
    private BigDecimal pacTotalQuantity;

    @Column(name = "pac_average_rate")
    private BigDecimal pacAverageRate;

    @Column(name = "pac_averange_price")
    private BigDecimal pacAverangePrice;

    @Column(name = "pac_total_transfer_amount")
    private String pacTotalTransferAmount;

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        CustodianReportViewEntity that = (CustodianReportViewEntity) o;
        return Objects.equals(rowKey, that.rowKey);
    }

    @Override
    public int hashCode() {
        return Objects.hash(rowKey);
    }
}

```

## src/main/java/com/nubo/settlement/report/generator/models/entity/DepositoryEntity.java

```java
package com.nubo.settlement.report.generator.models.entity;

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
    @Column(name = "\"DEPOSITORY_ID\"", length = 2, nullable = false)
    private String id;

    @Column(name = "\"DESCRIPTION\"", length = 80)
    private String description;

    @Column(name = "\"CODE\"")
    private String code;

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

## src/main/java/com/nubo/settlement/report/generator/models/entity/FileGenerateEntity.java

```java
package com.nubo.settlement.report.generator.models.entity;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.OffsetDateTime;
import java.util.Objects;

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
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
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

    @Column(name = "\"FILE_NAME\"", nullable = false, length = 255)
    private String fileName;

    @Column(name = "\"FILE_TYPE\"", nullable = false, length = 50)
    private String fileType;

    @Column(name = "\"FILE_PATH\"", nullable = false, length = 512)
    private String filePath;

    @Column(name = "\"MESSAGE\"", length = 2000)
    private String message;

    @Column(name = "\"GENERATED_AT\"", nullable = false)
    private OffsetDateTime generatedAt;

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
    @JoinColumn(name = "\"OPERATION_STATUS_ID\"")
    private StatusEntity operationStatus;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"TYPE_ID\"")
    private TypeEntity type;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 100)
    private String lastModifyApplic;

    @Column(name = "\"LAST_MODIFY_DATE\"")
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50)
    private String lastModifyIp;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        FileGenerateEntity that = (FileGenerateEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

}

```

## src/main/java/com/nubo/settlement/report/generator/models/entity/IdentificationTypeEntity.java

```java
package com.nubo.settlement.report.generator.models.entity;

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
@Table(name = "\"IDENTIFICATION_TYPE\"", schema = "\"NUANBODB\"")
public class IdentificationTypeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"IDENTIFICATION_TYPE_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"DESCRIPTION\"", length = 80, nullable = false)
    private String description;

    @Column(name = "\"CODE\"", length = 3, nullable = false)
    private String code;

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

## src/main/java/com/nubo/settlement/report/generator/models/entity/InvestorAccountEntity.java

```java
package com.nubo.settlement.report.generator.models.entity;

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

    @Column(name = "\"ACCOUNT_NAME\"", length = 50)
    private String accountName;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"", nullable = false)
    private StatusEntity status;

    @ManyToOne
    @JoinColumn(name = "\"TYPE_ID\"", nullable = false)
    private TypeEntity type;

    @ManyToOne
    @JoinColumn(name = "\"DEPOSITORY_ID\"", nullable = false)
    private DepositoryEntity depository;

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

## src/main/java/com/nubo/settlement/report/generator/models/entity/InvestorEntity.java

```java
package com.nubo.settlement.report.generator.models.entity;

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
    @JoinColumn(name = "\"COUNTRY_ID\"", nullable = false)
    private CountryEntity country;

    @Column(name = "\"DOCUMENT_NUMBER\"", length = 20)
    private String documentNumber;

    @ManyToOne
    @JoinColumn(name = "\"IDENTIFICATION_TYPE_ID\"", nullable = false)
    private IdentificationTypeEntity identificationType;

    @Column(name = "\"ADDRESS\"", length = 100)
    private String address;

    @ManyToOne
    @JoinColumn(name = "\"TAX_STATUS_ID\"", nullable = false)
    private TaxStatusEntity taxStatus;

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

## src/main/java/com/nubo/settlement/report/generator/models/entity/IsinNumberEntity.java

```java
package com.nubo.settlement.report.generator.models.entity;

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
@Table(name = "\"ISIN_NUMBER\"", schema = "\"NUANBODB\"")
public class IsinNumberEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"ISIN_NUMBER_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"SECURITY_ID\"")
    private Long securityTitleId;

    @Column(name = "\"DESCRIPTION\"")
    private String description;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        IsinNumberEntity that = (IsinNumberEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

}

```

## src/main/java/com/nubo/settlement/report/generator/models/entity/MarketEntity.java

```java
package com.nubo.settlement.report.generator.models.entity;

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
@Table(name = "\"MARKET\"", schema = "\"NUANBODB\"")
public class MarketEntity {

    @Id
    @Column(name = "\"MARKET_ID\"", length = 2)
    private String id;

    @Column(name = "\"DESCRIPTION\"", length = 80)
    private String description;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        MarketEntity that = (MarketEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/settlement/report/generator/models/entity/ParticipantAccountEntity.java

```java
package com.nubo.settlement.report.generator.models.entity;

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
@Table(name = "\"PARTICIPANT_ACCOUNT\"", schema = "\"NUANBODB\"")
public class ParticipantAccountEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"PARTICIPANT_ACCOUNT_ID\"", nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "\"PARTICIPANT_ID\"")
    private ParticipantEntity participant;

    @Column(name = "\"ACCOUNT_NUMBER\"", length = 50)
    private String accountNumber;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"", nullable = false)
    private StatusEntity status;

    @ManyToOne
    @JoinColumn(name = "\"TYPE_ID\"", nullable = false)
    private TypeEntity type;

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

## src/main/java/com/nubo/settlement/report/generator/models/entity/ParticipantEntity.java

```java
package com.nubo.settlement.report.generator.models.entity;

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

import java.util.Objects;

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
    @JoinColumn(name = "\"IDENTIFICATION_TYPE_ID\"")
    private IdentificationTypeEntity identificationType;

    @Column(name = "\"NAME\"", length = 100)
    private String name;

    @Column(name = "\"SHORT_NAME\"", length = 50)
    private String shortName;

    @ManyToOne
    @JoinColumn(name = "\"TYPE_ID\"")
    private TypeEntity type;

    @ManyToOne
    @JoinColumn(name = "\"COUNTRY_ID\"")
    private CountryEntity country;

    @Column(name = "\"MAIN_ADDRESS\"", length = 100)
    private String mainAddress;

    @ManyToOne
    @JoinColumn(name = "\"TAX_STATUS_ID\"")
    private TaxStatusEntity taxStatus;

    @Column(name = "\"ENABLED\"")
    private Boolean enabled;

    @Column(name = "\"CUSTODIAN\"")
    private Boolean custodian;

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

## src/main/java/com/nubo/settlement/report/generator/models/entity/ParticipantUserNuboEntity.java

```java
package com.nubo.settlement.report.generator.models.entity;

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
@IdClass(ParticipantUserNuboKey.class)
@Table(name = "\"PARTICIPANT_USER_NUBO\"", schema = "\"NUANBODB\"")
public class ParticipantUserNuboEntity {

    @Id
    @ManyToOne
    @JoinColumn(name = "\"PARTICIPANT_ID\"", nullable = false)
    private ParticipantEntity participant;

    @Id
    @ManyToOne
    @JoinColumn(name = "\"USER_NUBO_ID\"", nullable = false)
    private UserNuboEntity userNubo;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        ParticipantUserNuboEntity that = (ParticipantUserNuboEntity) o;
        return participant != null && participant.equals(that.participant) &&
                userNubo != null && userNubo.equals(that.userNubo);
    }

    @Override
    public int hashCode() {
        return java.util.Objects.hash(participant, userNubo);
    }

}

```

## src/main/java/com/nubo/settlement/report/generator/models/entity/ParticipantUserNuboKey.java

```java
package com.nubo.settlement.report.generator.models.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ParticipantUserNuboKey implements Serializable {

    private Long participant;

    private Long userNubo;

}

```

## src/main/java/com/nubo/settlement/report/generator/models/entity/SecurityTitleEntity.java

```java
package com.nubo.settlement.report.generator.models.entity;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import org.hibernate.annotations.BatchSize;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
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

    @ManyToOne
    @JoinColumn(name = "\"MARKET_ID\"", nullable = false)
    private MarketEntity market;

    @Column(name = "\"EQUITY_CODE\"", length = 15)
    private String equityCode;

    @Column(name = "\"MNEMONIC\"", length = 20, nullable = false)
    private String mnemonic;

    @Column(name = "\"ISIN\"", length = 20)
    private String isin;

    @ManyToOne
    @JoinColumn(name = "\"CLASS_ID\"", nullable = false)
    private ClassEntity classId;

    @ManyToOne
    @JoinColumn(name = "\"DEPOSITORY_ID\"", nullable = false)
    private DepositoryEntity depository;

    @Builder.Default
    @OneToMany(fetch = FetchType.EAGER)
    @JoinColumn(name = "\"SECURITY_ID\"")
    @BatchSize(size = 100)
    private List<IsinNumberEntity> isinNumberList = new ArrayList<>();

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        SecurityTitleEntity that = (SecurityTitleEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/settlement/report/generator/models/entity/SettlementEntity.java

```java
package com.nubo.settlement.report.generator.models.entity;

import java.math.BigDecimal;
import java.time.LocalDateTime;
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
@IdClass(SettlementKey.class)
@Table(name = "\"SETTLEMENT\"", schema = "\"NUANBODB\"")
public class SettlementEntity {

    @Id
    @ManyToOne()
    @JoinColumn(name = "\"TRADE_ID\"", insertable = false, updatable = false)
    private TradeEntity trade;

    @Id
    @Column(name = "\"FRACTION\"", nullable = false)
    private Integer fraction;

    @Id
    @ManyToOne
    @JoinColumn(name = "\"SIDE_ID\"", insertable = false, updatable = false)
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

    @Column(name = "\"FIDUCIARY_SPECIALIST\"")
    private Boolean fiduciarySpecialist;

    @Column(name = "\"COMMISSION_PERCENTAGE\"", precision = 6, scale = 4)
    private BigDecimal commissionPercentage;

    @Column(name = "\"COMMISSION_AMOUNT\"", precision = 16, scale = 4)
    private BigDecimal commissionAmount;

    @Column(name = "\"VAL_TAX\"", precision = 6, scale = 4)
    private BigDecimal valTax;

    @Column(name = "\"VAL_TAX_AMOUNT\"", precision = 16, scale = 4)
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

    @Column(name = "\"REPO_RATE\"", precision = 16, scale = 4)
    private BigDecimal repoRate;

    @Column(name = "\"REPO_AMOUNT\"", precision = 16, scale = 4)
    private BigDecimal repoAmount;

    @Column(name = "\"LATE_PENALITY\"", precision = 16, scale = 4)
    private BigDecimal latePenality;

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

    @Column(name = "\"TRADING_SYSTEM_ID\"", nullable = false)
    private Long tradingSystemId;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"", nullable = false)
    private StatusEntity status;

    @Column(name = "\"BROKERAGE_SERVICE\"", precision = 16, scale = 4)
    private BigDecimal brokerageService;

    @Column(name = "\"CUSTODIAN_ID\"")
    private Long custodianId;

    @Column(name = "\"REFERENCE\"")
    private String reference;

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

## src/main/java/com/nubo/settlement/report/generator/models/entity/SettlementKey.java

```java
package com.nubo.settlement.report.generator.models.entity;

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

## src/main/java/com/nubo/settlement/report/generator/models/entity/SideEntity.java

```java
package com.nubo.settlement.report.generator.models.entity;

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

    @Column(name = "\"DESCRIPTION\"", length = 80)
    private String description;

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

## src/main/java/com/nubo/settlement/report/generator/models/entity/StatusEntity.java

```java
package com.nubo.settlement.report.generator.models.entity;

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

## src/main/java/com/nubo/settlement/report/generator/models/entity/TaxStatusEntity.java

```java
package com.nubo.settlement.report.generator.models.entity;

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
@Table(name = "\"TAX_STATUS\"", schema = "\"NUANBODB\"")
public class TaxStatusEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"TAX_STATUS_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"DESCRIPTION\"", length = 80)
    private String description;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        TaxStatusEntity that = (TaxStatusEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/settlement/report/generator/models/entity/TradeEntity.java

```java
package com.nubo.settlement.report.generator.models.entity;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Objects;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
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

    @Column(name = "\"CLEARING_DATE\"")
    private LocalDate clearingDate;

    @Column(name = "\"RETURN_CLEARING_DATE\"")
    private LocalDate returnClearingDate;

    @ManyToOne(fetch = FetchType.LAZY, optional = true)
    @JoinColumn(name = "\"DEPOSITORY_ID\"")
    private DepositoryEntity depository;

    @ManyToOne
    @JoinColumn(name = "\"COUNTRY_ID\"")
    private CountryEntity country;

    @ManyToOne
    @JoinColumn(name = "\"TYPE_ID\"")
    private TypeEntity type;

    @ManyToOne
    @JoinColumn(name = "\"MARKET_ID\"")
    private MarketEntity market;

    @ManyToOne
    @JoinColumn(name = "\"ISSUANCE_MARKET_ID\"")
    private MarketEntity issuanceMarket;

    @ManyToOne
    @JoinColumn(name = "\"SECURITY_ID\"")
    private SecurityTitleEntity securityTitle;

    @ManyToOne
    @JoinColumn(name = "\"PARTICIPANT_ID_BUY\"")
    private ParticipantEntity participantBuy;

    @ManyToOne
    @JoinColumn(name = "\"PARTICIPANT_ID_SELL\"")
    private ParticipantEntity participantSell;

    @ManyToOne
    @JoinColumn(name = "\"CUSTODIAN_ID_BUY\"")
    private ParticipantEntity custodianBuy;

    @ManyToOne
    @JoinColumn(name = "\"CUSTODIAN_ID_SELL\"")
    private ParticipantEntity custodianSell;

    @Column(name = "\"ASSIGNMENT_MARK_BUY\"")
    private Boolean assignmentMarkBuy;

    @Column(name = "\"ASSIGNMENT_MARK_SELL\"")
    private Boolean assignmentMarkSell;

    @Column(name = "\"FRACTIONAL_MARK_BUY\"")
    private Boolean fractionalMarkBuy;

    @Column(name = "\"FRACTIONAL_MARK_SELL\"")
    private Boolean fractionalMarkSell;

    @Column(name = "\"ADVANCE_STATUS\"")
    private Integer advanceStatus;

    @Column(name = "\"EXIT_INDICATOR_SETTLEMENT\"")
    private Boolean exitIndicatorSettlement;

    @Column(name = "\"RETURN_INDICATOR_SETTLEMENT\"")
    private Boolean returnIndicatorSettlement;

    @Column(name = "\"CANCELED_STATUS\"")
    private Boolean canceledStatus;

    @Column(name = "\"QUANTITY\"", precision = 16, scale = 4)
    private BigDecimal quantity;

    @Column(name = "\"PRICE\"", precision = 16, scale = 6)
    private BigDecimal price;

    @Column(name = "\"VOLUME\"", precision = 16, scale = 4)
    private BigDecimal volume;

    @Column(name = "\"REPURCHASE_RATE\"", precision = 6, scale = 4)
    private BigDecimal repurchaseRate;

    @Column(name = "\"REPURCHASE_AMOUNT\"", precision = 16, scale = 4)
    private BigDecimal repurchaseAmount;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"", nullable = false)
    private StatusEntity status;

    @Column(name = "\"MATCH_TIME\"")
    private LocalDateTime matchTime;

    @Column(name = "\"OWN_POSITION_SELL\"")
    private Boolean ownPositionSell;

    @Column(name = "\"OWN_POSITION_BUY\"")
    private Boolean ownPositionBuy;

    @ManyToOne
    @JoinColumn(name = "\"CURRENCY_ID\"")
    private CurrencyEntity currency;

    @ManyToOne
    @JoinColumn(name = "\"TRADING_SYSTEM_ID\"")
    private TradingSystemEntity tradingSystem;

    @ManyToOne
    @JoinColumn(name = "\"TRADING_SESSION_ID\"")
    private TradingSessionEntity tradingSession;

    @Column(name = "\"REPURCHASE_AGREEMENT_DATE\"")
    private LocalDate repurchaseAgreementDate;

    @Column(name = "\"DAYS_TO_SETTLEMENT\"")
    private Integer daysToSettlement;

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

    @ManyToOne
    @JoinColumn(name = "\"BUSINESS_TYPE_ID\"")
    private TypeEntity businessType;

    @ManyToOne
    @JoinColumn(name = "\"MARKET_TYPE_ID\"")
    private TypeEntity marketType;

    @ManyToOne
    @JoinColumn(name = "\"ORIGIN_TYPE_ID\"")
    private TypeEntity originType;

    @Column(name = "\"SPECIAL_TRADE_ID\"")
    private Long specialTradeId;

    @ManyToOne
    @JoinColumn(name = "\"SETTLEMENT_TYPE_ID\"")
    private TypeEntity settlementType;

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
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50, nullable = false)
    private String lastModifyIp;

    @OneToOne(mappedBy = "trade", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private TradeEquityEntity tradeEquity;

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

## src/main/java/com/nubo/settlement/report/generator/models/entity/TradeEquityEntity.java

```java
package com.nubo.settlement.report.generator.models.entity;

import java.math.BigInteger;
import java.util.Objects;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.MapsId;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "\"TRADE_EQUITY\"", schema = "\"NUANBODB\"")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TradeEquityEntity {

    @Id
    @Column(name = "\"TRADE_ID\"")
    private Long tradeId;

    @MapsId
    @OneToOne(fetch = FetchType.LAZY)
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

    @Column(name = "\"REFERENCE_BUY\"")
    private String referenceBuy;

    @Column(name = "\"REFERENCE_SELL\"")
    private String referenceSell;

    @Column(name = "\"ORDER_BOOK_ID\"")
    private BigInteger orderBookId;

    @Column(name = "\"PREARRANGED_OPERATION\"")
    private Boolean prearrangedOperation;

    @Column(name = "\"AGGRESSIVE_TIP\"")
    private Integer aggressiveTip;

    @Column(name = "\"EXDIVIDEND_PERIOD\"")
    private Boolean exdividendPeriod;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        TradeEquityEntity that = (TradeEquityEntity) o;
        return Objects.equals(tradeId, that.tradeId);
    }

    @Override
    public int hashCode() {
        return tradeId != null ? tradeId.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/settlement/report/generator/models/entity/TradingSessionEntity.java

```java
package com.nubo.settlement.report.generator.models.entity;

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
@Table(name = "\"TRADING_SESSION\"", schema = "\"NUANBODB\"")
public class TradingSessionEntity {

    @Id
    @Column(name = "\"TRADING_SESSION_ID\"", length = 2, nullable = false)
    private String id;

    @Column(name = "\"DESCRIPTION\"", length = 80)
    private String description;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        TradingSessionEntity that = (TradingSessionEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/settlement/report/generator/models/entity/TradingSystemEntity.java

```java
package com.nubo.settlement.report.generator.models.entity;

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
@Table(name = "\"TRADING_SYSTEM\"", schema = "\"NUANBODB\"")
public class TradingSystemEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"TRADING_SYSTEM_ID\"", nullable = false)
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
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/settlement/report/generator/models/entity/TypeEntity.java

```java
package com.nubo.settlement.report.generator.models.entity;

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

## src/main/java/com/nubo/settlement/report/generator/models/entity/UserNuboEntity.java

```java
package com.nubo.settlement.report.generator.models.entity;

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

import java.util.Objects;

@Getter
@Setter
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

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        UserNuboEntity that = (UserNuboEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

}

```

## src/main/java/com/nubo/settlement/report/generator/models/enums/CustodianUpdateSideFilterEnum.java

```java
package com.nubo.settlement.report.generator.models.enums;

import java.util.Arrays;
import java.util.Set;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum CustodianUpdateSideFilterEnum {

    BUY("1", "COMPRA", Set.of("COMPRA", "C", "1")),
    SELL("2", "VENTA", Set.of("VENTA", "V", "2")),
    ALL(null, null, Set.of());

    private final String databaseValue;
    private final String viewValue;
    private final Set<String> aliases;

    public static CustodianUpdateSideFilterEnum fromValue(String value) {
        if (value == null || value.isBlank()) {
            return ALL;
        }

        String normalized = value.trim().toUpperCase();
        return Arrays.stream(values())
                .filter(side -> side.aliases.contains(normalized))
                .findFirst()
                .orElse(ALL);
    }

    public boolean isAll() {
        return this == ALL;
    }
}

```

## src/main/java/com/nubo/settlement/report/generator/models/enums/CustodianUpdateStatusFilterEnum.java

```java
package com.nubo.settlement.report.generator.models.enums;

import java.util.Arrays;
import java.util.Set;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum CustodianUpdateStatusFilterEnum {

    WITHOUT_REQUEST("SIN SOLICITUD", "S", 1075L, Set.of("S", "SIN SOLICITUD")),
    TRANSFERRED("TRASLADADA", "T", 1071L, Set.of("T", "TRASLADADA")),
    PRE_MATCH("PRE-MATCH", "P", 1072L, Set.of("P", "PREMATCH", "PRE-MATCH")),
    ADMITTED("ADMITIDA", "A", 1073L, Set.of("A", "ADMITIDA", "ADMITTED")),
    REJECTED("RECHAZADA", "R", 1074L, Set.of("R", "RECHAZADA", "REJECTED")),
    ALL(null, null, null, Set.of("ALL", "TODOS"));

    private final String catalogValue;
    private final String viewValue;
    private final Long incidentsStatusId;
    private final Set<String> aliases;

    public static CustodianUpdateStatusFilterEnum fromValue(String value) {
        if (value == null || value.isBlank()) {
            return ALL;
        }

        String normalized = value.trim().toUpperCase();
        return Arrays.stream(values())
                .filter(status -> status.aliases.contains(normalized))
                .findFirst()
                .orElse(ALL);
    }

    public boolean isAll() {
        return this == ALL;
    }
}

```

## src/main/java/com/nubo/settlement/report/generator/models/enums/FileTypeOptionEnum.java

```java
package com.nubo.settlement.report.generator.models.enums;

import java.util.Arrays;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

public enum FileTypeOptionEnum {
    TXT,
    CSV;

    @JsonValue
    public String toValue() {
        return this.name();
    }

    @JsonCreator
    public static FileTypeOptionEnum fromId(String id) {
        return Arrays.stream(FileTypeOptionEnum.values())
                .filter(fileType -> fileType.name().equalsIgnoreCase(id))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException(
                        "Invalid fileType '" + id + "'. Allowed values: " + Arrays.toString(values())));
    }
}

```

## src/main/java/com/nubo/settlement/report/generator/models/enums/FtpEnum.java

```java
package com.nubo.settlement.report.generator.models.enums;

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

## src/main/java/com/nubo/settlement/report/generator/models/enums/IdentificationTypeEnum.java

```java
package com.nubo.settlement.report.generator.models.enums;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum IdentificationTypeEnum {

    NIT(7L,"NIT");

    private final Long id;
    private final String code;

}

```

## src/main/java/com/nubo/settlement/report/generator/models/enums/MarketEnum.java

```java
package com.nubo.settlement.report.generator.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum MarketEnum {

    EQUITY("1", "RENTA VARIABLE", "TIPO_ACTIVO"),
    FIXED_INCOME("2", "RENTA FIJA", "TIPO_ACTIVO"),
    GLOBAL_MARKET("6", "MERCADO GLOBAL", "TIPO_ACTIVO"),
    CASH("9", "EFECTIVO", "TIPO_ACTIVO");

    private final String id;
    private final String description;
    private final String category;

}

```

## src/main/java/com/nubo/settlement/report/generator/models/enums/NotificationMessageEnum.java

```java
package com.nubo.settlement.report.generator.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum NotificationMessageEnum {

    REQUEST_FAILED(36L, "Operation request FAILED"),
    REQUEST_SUCCESS(35L, "Operation request SUCCESS");

    private final Long id;
    private final String description;
}

```

## src/main/java/com/nubo/settlement/report/generator/models/enums/NotificationTypeEnum.java

```java
package com.nubo.settlement.report.generator.models.enums;

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

## src/main/java/com/nubo/settlement/report/generator/models/enums/PropertiesEnum.java

```java
package com.nubo.settlement.report.generator.models.enums;

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

## src/main/java/com/nubo/settlement/report/generator/models/enums/SettlementFieldEnum.java

```java
package com.nubo.settlement.report.generator.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum SettlementFieldEnum {

    LENGTH_TOTAL(654);

    private final int length;

}

```

## src/main/java/com/nubo/settlement/report/generator/models/enums/SideEnum.java

```java
package com.nubo.settlement.report.generator.models.enums;

import java.util.Arrays;

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
                .filter(side -> side.id.equalsIgnoreCase(id))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Side not implemented, id: " + id));
    }

}

```

## src/main/java/com/nubo/settlement/report/generator/models/enums/StatusEnum.java

```java
package com.nubo.settlement.report.generator.models.enums;

import java.util.Arrays;
import java.util.Objects;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum StatusEnum {

    REGISTERED(1L, "REGISTRADA", "REGISTRO_OPERACION"),
    ASSIGNED(2L, "ASIGNADA", "ASIGNACION"),
    CORRECTION_REQUEST(7L, "SOLICITADA", "REASIGNACION_CORRECCION"),
    CORRECTION_ACCEPTED(9L, "ACEPTADA", "REASIGNACION_CORRECCION"),
    CORRECTION_REJECTED(10L, "RECHAZADA", "REASIGNACION_CORRECCION"),
    CANCELED(11L, "CANCELADA", "REGISTRO_OPERACION"),
    NEGOCIATED(13L, "NEGOCIADA", "REGISTRO_OPERACION"),
    SENT(14L, "ENVIADA", "ASIGNACION"),
    ACCEPTED(15L, "ACEPTADA", "ASIGNACION"),
    REJECTED(16L, "RECHAZADA", "ASIGNACION"),
    NOT_STATUS(0L, "NO ESTADO", ""),
    CUSTODIAN_TRANSFERRED(1071L, "TRASLADADA", "CUSTODIO"),
    CUSTODIAN_PRE_MATCH(1072L, "PRE-MATCH", "CUSTODIO"),
    CUSTODIAN_ADMITTED(1073L, "ADMITIDA", "CUSTODIO"),
    CUSTODIAN_REJECTED(1074L, "RECHAZADA", "CUSTODIO"),
    FILE_GENERATED(901L, "GENERADA", "ARCHIVO LIQUIDA"),
    FILE_IN_PROCESS(900L, "EN PROCESO", "ARCHIVO LIQUIDA"),
    FILE_ERROR(902L, "FALLIDO", "ARCHIVO LIQUIDA");

    private final Long id;
    private final String description;
    private final String category;

    @JsonValue
    public Long getId() {
        return id;
    }

    @JsonCreator
    public static StatusEnum fromId(Long id) {
        return Arrays.stream(StatusEnum.values())
                .filter(status -> Objects.equals(status.id, id))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Unknown value: " + id));
    }

}

```

## src/main/java/com/nubo/settlement/report/generator/models/enums/TypeEnum.java

```java
package com.nubo.settlement.report.generator.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum TypeEnum {

    FILE_LIQUIDA_TODAY(160, "ARCHIVO LIQ. CONTADO REPO DIARIO", "TIPO_RUTA"),
    FILE_LIQUIDA_HISTORY(165, "ARCHIVO LIQ. CONTADO REPO HISTORICO", "TIPO_RUTA"),
    FILE_CORRECTIONS(163, "REPORTE CORRECCIÓN OPERACIONES", "TIPO_RUTA"),
    FILE_PAPELETA_TODAY(166, "ARCHIVO PAPELETA CONTADO REPO DIARIO", "TIPO_RUTA"),
    FILE_PAPELETA_HISTORY(167, "ARCHIVO PAPELETA CONTADO REPO HISTORICO", "TIPO_RUTA"),
    FILE_CUSTODIAN_REPORT(168, "REPORTE DETALLADO DE PAQUETES CUSTODIO", "TIPO_RUTA"),
    FILE_CUSTODIAN_UPDATES_REPORT(169, "REPORTE DETALLADO DE NOVEDADES CUSTODIO", "TIPO_RUTA"),
    CONT(60L, "CONTADO", "OPERACIÓN"),
    REPO(61L, "REPO", "OPERACIÓN"),
    THIRD_PARTIES_POINT_ORIGIN(120L, "TERCEROS", "ORIGEN PUNTA"),
    OWN_POSITION_POINT_ORIGIN(121L, "POSICION PROPIA", "ORIGEN PUNTA"),
    COLLECTIVE_PORTFOLIO_POINT_ORIGIN(122L, "CARTERA COLECTIVA", "ORIGEN PUNTA"),
    NEGOTIATION(90L, "NEGOCIACIÓN", "ORIGEN"),
    REGISTRATION(91L, "REGISTRO", "ORIGEN");

    private final long id;
    private final String description;
    private final String category;
}

```

## src/main/java/com/nubo/settlement/report/generator/models/enums/UserTypeEnum.java

```java
package com.nubo.settlement.report.generator.models.enums;

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

## src/main/java/com/nubo/settlement/report/generator/models/enums/VersionApiEnum.java

```java
package com.nubo.settlement.report.generator.models.enums;

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

## src/main/java/com/nubo/settlement/report/generator/models/enums/VoucherTypeEnum.java

```java
package com.nubo.settlement.report.generator.models.enums;

import java.util.Arrays;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum VoucherTypeEnum {

    LIQ_FILE("ARCHIVO_LIQUIDA"),
    RECEIPT("COMPROBANTE"),
    SLIP("PAPELETA");

    private final String value;

    @JsonValue
    public String getValue() {
        return value;
    }

    @JsonCreator
    public static VoucherTypeEnum fromValue(String value) {
        return Arrays.stream(VoucherTypeEnum.values())
                .filter(voucherType -> voucherType.value.equalsIgnoreCase(value))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Voucher type not implemented: " + value));
    }
}

```

## src/main/java/com/nubo/settlement/report/generator/repository/CustodianReportViewRepository.java

```java
package com.nubo.settlement.report.generator.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.nubo.settlement.report.generator.models.entity.CustodianReportViewEntity;

public interface CustodianReportViewRepository
        extends JpaRepository<CustodianReportViewEntity, String>,
        JpaSpecificationExecutor<CustodianReportViewEntity> {
}

```

## src/main/java/com/nubo/settlement/report/generator/repository/CustodianUpdatesReportRepository.java

```java
package com.nubo.settlement.report.generator.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.nubo.settlement.report.generator.models.entity.CustodianIncidentsReportViewEntity;

public interface CustodianUpdatesReportRepository
        extends JpaRepository<CustodianIncidentsReportViewEntity, String>,
        JpaSpecificationExecutor<CustodianIncidentsReportViewEntity> {
}

```

## src/main/java/com/nubo/settlement/report/generator/repository/FileGenerateRepository.java

```java
package com.nubo.settlement.report.generator.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.nubo.settlement.report.generator.models.entity.FileGenerateEntity;

public interface FileGenerateRepository extends JpaRepository<FileGenerateEntity, Long>
{

    @Query("""
            SELECT f FROM FileGenerateEntity f
            JOIN FETCH f.type
            JOIN FETCH f.participant
            WHERE f.id = :id
            """)
    Optional<FileGenerateEntity> findByIdWithTypeAndParticipant(Long id);

    @Query("""
            SELECT CASE WHEN COUNT(f) > 0 THEN true ELSE false END
            FROM FileGenerateEntity f
            WHERE f.id = :fileGenerateId
              AND f.generationStatus.id = :statusId
            """)
    boolean existsByIdAndGenerationStatusId(@Param("fileGenerateId") Long fileGenerateId,
            @Param("statusId") Long statusId);
}

```

## src/main/java/com/nubo/settlement/report/generator/repository/ParticipantRepository.java

```java
package com.nubo.settlement.report.generator.repository;

import com.nubo.settlement.report.generator.models.entity.ParticipantEntity;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ParticipantRepository extends JpaRepository<ParticipantEntity, Long> {
}

```

## src/main/java/com/nubo/settlement/report/generator/repository/ParticipantUserNuboRepository.java

```java
package com.nubo.settlement.report.generator.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.nubo.settlement.report.generator.models.entity.ParticipantUserNuboEntity;
import com.nubo.settlement.report.generator.models.entity.ParticipantUserNuboKey;

public interface ParticipantUserNuboRepository
        extends JpaRepository<ParticipantUserNuboEntity, ParticipantUserNuboKey> {

    List<ParticipantUserNuboEntity> findByParticipant_Id(Long participantId);

    @Query("""
            SELECT pun.userNubo.id
            FROM ParticipantUserNuboEntity pun
            WHERE pun.participant.id = :participantId
            """)
    List<Long> findUserNuboIdsByParticipantId(@Param("participantId") Long participantId);
}

```

## src/main/java/com/nubo/settlement/report/generator/repository/SettlementRepository.java

```java
package com.nubo.settlement.report.generator.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.nubo.settlement.report.generator.models.entity.SettlementEntity;
import com.nubo.settlement.report.generator.models.entity.SettlementKey;

public interface SettlementRepository extends JpaRepository<SettlementEntity, SettlementKey>,
        JpaSpecificationExecutor<SettlementEntity> {

    @Query("""
            SELECT set FROM SettlementEntity set JOIN set.trade t
            JOIN set.side si
            WHERE t.id = :tradeId AND si.id = :sideId
            """)
    List<SettlementEntity> findByTradeIdAndSideId(Long tradeId, String sideId);

    @Query("""
            SELECT set FROM SettlementEntity set JOIN set.trade t
            JOIN set.side si
            WHERE t.id = :tradeId
            """)
    List<SettlementEntity> findByTradeId(Long tradeId);

    @Query("""
            SELECT s FROM SettlementEntity s
            JOIN FETCH s.trade t
            LEFT JOIN FETCH t.tradeEquity
            LEFT JOIN FETCH t.depository
            LEFT JOIN FETCH t.securityTitle st
            LEFT JOIN FETCH t.market
            LEFT JOIN FETCH t.participantBuy
            LEFT JOIN FETCH t.participantSell
            LEFT JOIN FETCH t.custodianBuy
            LEFT JOIN FETCH t.custodianSell
            LEFT JOIN FETCH t.settlementType
            LEFT JOIN FETCH t.businessType
            LEFT JOIN FETCH t.originType
            LEFT JOIN FETCH t.issuanceMarket
            LEFT JOIN FETCH s.investor inv
            LEFT JOIN FETCH inv.identificationType
            WHERE t.matchDate = :date
            AND t.participantSell.id = :participantSellId
            AND t.type.id IN (:tradeTypeIds)
            AND t.sellStatus.id IN (:sellStatusIds)
            AND (:countryId IS NULL OR t.country.id = :countryId)
            AND (t.canceledStatus IS NULL OR t.canceledStatus = false)
            AND t.assignmentMarkSell = true
            AND s.side.id = :sellSideId
            """)
    Slice<SettlementEntity> findSettlementReportSellPage(
            @Param("date") LocalDate date,
            @Param("participantSellId") Long participantSellId,
            @Param("tradeTypeIds") List<Long> tradeTypeIds,
            @Param("sellStatusIds") List<Long> sellStatusIds,
            @Param("countryId") Long countryId,
            @Param("sellSideId") String sellSideId,
            Pageable pageable);

    @Query("""
            SELECT s FROM SettlementEntity s
            JOIN FETCH s.trade t
            LEFT JOIN FETCH t.tradeEquity
            LEFT JOIN FETCH t.depository
            LEFT JOIN FETCH t.securityTitle st
            LEFT JOIN FETCH t.market
            LEFT JOIN FETCH t.participantBuy
            LEFT JOIN FETCH t.participantSell
            LEFT JOIN FETCH t.custodianBuy
            LEFT JOIN FETCH t.custodianSell
            LEFT JOIN FETCH t.settlementType
            LEFT JOIN FETCH t.businessType
            LEFT JOIN FETCH t.originType
            LEFT JOIN FETCH t.issuanceMarket
            LEFT JOIN FETCH s.investor inv
            LEFT JOIN FETCH inv.identificationType
            WHERE t.matchDate = :date
            AND t.participantBuy.id = :participantBuyId
            AND t.type.id IN (:tradeTypeIds)
            AND t.buyStatus.id IN (:buyStatusIds)
            AND (:countryId IS NULL OR t.country.id = :countryId)
            AND (t.canceledStatus IS NULL OR t.canceledStatus = false)
            AND t.assignmentMarkBuy = true
            AND s.side.id = :buySideId
            """)
    Slice<SettlementEntity> findSettlementReportBuyPage(
            @Param("date") LocalDate date,
            @Param("participantBuyId") Long participantBuyId,
            @Param("tradeTypeIds") List<Long> tradeTypeIds,
            @Param("buyStatusIds") List<Long> buyStatusIds,
            @Param("countryId") Long countryId,
            @Param("buySideId") String buySideId,
            Pageable pageable);
}

```

## src/main/java/com/nubo/settlement/report/generator/repository/StatusRepository.java

```java
package com.nubo.settlement.report.generator.repository;

import com.nubo.settlement.report.generator.models.entity.StatusEntity;
import org.springframework.data.jpa.repository.JpaRepository;


public interface StatusRepository extends JpaRepository<StatusEntity, Long> {
}

```

## src/main/java/com/nubo/settlement/report/generator/repository/TradeRepository.java

```java
package com.nubo.settlement.report.generator.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.nubo.settlement.report.generator.models.entity.TradeEntity;

public interface TradeRepository extends JpaRepository<TradeEntity, Long>, JpaSpecificationExecutor<TradeEntity> {

    @Query("""
            SELECT t FROM TradeEntity t
            LEFT JOIN FETCH t.tradeEquity
            LEFT JOIN FETCH t.depository
            LEFT JOIN FETCH t.securityTitle st
            LEFT JOIN FETCH t.market
            LEFT JOIN FETCH t.participantBuy
            LEFT JOIN FETCH t.participantSell
            LEFT JOIN FETCH t.custodianBuy
            LEFT JOIN FETCH t.custodianSell
            LEFT JOIN FETCH t.settlementType
            LEFT JOIN FETCH t.businessType
            LEFT JOIN FETCH t.originType
            LEFT JOIN FETCH t.issuanceMarket
            WHERE t.matchDate = :date
            AND t.participantBuy.id = :participantBuyId
            AND t.type.id IN (:tradeTypeIds)
            AND t.buyStatus.id = :buyStatusId
            AND (:countryId IS NULL OR t.country.id = :countryId)
            AND (t.canceledStatus IS NULL OR t.canceledStatus = false)
            """)
    Slice<TradeEntity> findSettlementReportBuy(
            @Param("date") LocalDate date,
            @Param("participantBuyId") Long participantBuyId,
            @Param("tradeTypeIds") List<Long> tradeTypeIds,
            @Param("buyStatusId") Long buyStatusId,
            @Param("countryId") Long countryId,
            Pageable pageable);

    @Query("""
            SELECT t FROM TradeEntity t
            LEFT JOIN FETCH t.tradeEquity
            LEFT JOIN FETCH t.depository
            LEFT JOIN FETCH t.securityTitle st
            LEFT JOIN FETCH t.market
            LEFT JOIN FETCH t.participantBuy
            LEFT JOIN FETCH t.participantSell
            LEFT JOIN FETCH t.custodianBuy
            LEFT JOIN FETCH t.custodianSell
            LEFT JOIN FETCH t.settlementType
            LEFT JOIN FETCH t.businessType
            LEFT JOIN FETCH t.originType
            LEFT JOIN FETCH t.issuanceMarket
            WHERE t.matchDate = :date
            AND t.participantSell.id = :participantSellId
            AND t.type.id IN (:tradeTypeIds)
            AND t.sellStatus.id = :sellStatusId
            AND (:countryId IS NULL OR t.country.id = :countryId)
            AND (t.canceledStatus IS NULL OR t.canceledStatus = false)
            """)
    Slice<TradeEntity> findSettlementReportSell(
            @Param("date") LocalDate date,
            @Param("participantSellId") Long participantSellId,
            @Param("tradeTypeIds") List<Long> tradeTypeIds,
            @Param("sellStatusId") Long sellStatusId,
            @Param("countryId") Long countryId,
            Pageable pageable);

}

```

## src/main/java/com/nubo/settlement/report/generator/repository/TypeRepository.java

```java
package com.nubo.settlement.report.generator.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.settlement.report.generator.models.entity.TypeEntity;

public interface TypeRepository extends JpaRepository<TypeEntity, Long> {
}

```

## src/main/java/com/nubo/settlement/report/generator/service/BatchService.java

```java
package com.nubo.settlement.report.generator.service;

import java.io.Writer;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.domain.Specification;

import com.nubo.settlement.report.generator.models.entity.CustodianReportViewEntity;
import com.nubo.settlement.report.generator.models.entity.StatusEntity;
import com.nubo.settlement.report.generator.models.entity.TypeEntity;

public interface BatchService {

    Optional<StatusEntity> findStatusCache(Long statusId);

    Optional<TypeEntity> findTypeCache(Long typeId);

    void writeLiquidaWithTradeInBatches(LocalDate date,
            Long participantId, Long countryId, Long statusId, List<Long> tradeTypeIds, Writer writer);

    void writeLiquidaWithSettlementInBatches(LocalDate date, Long participantId, Long countryId,
            List<Long> statusIds, List<Long> tradeTypeIds, Writer writer);

    void writePapeletaWithSettlementInBatches(LocalDate date, Long participantId, Long countryId,
            List<Long> statusIds, List<Long> tradeTypeIds, Writer writer);

    void writeCustodianReportInBatches(Specification<CustodianReportViewEntity> spec, Writer writer);

}

```

## src/main/java/com/nubo/settlement/report/generator/service/CustodianReportGeneratorService.java

```java
package com.nubo.settlement.report.generator.service;

import com.nubo.settlement.report.generator.models.dto.request.EventKafkaCustodianReportInDto;
import com.nubo.settlement.report.generator.models.dto.request.EventKafkaCustodianUpdatesReportInDto;

public interface CustodianReportGeneratorService {

    void generateCustodianReport(EventKafkaCustodianReportInDto message, String topic, String key);

    void generateCustodianUpdatesReport(EventKafkaCustodianUpdatesReportInDto message, String topic, String key);
}

```

## src/main/java/com/nubo/settlement/report/generator/service/NotificationService.java

```java
package com.nubo.settlement.report.generator.service;

import com.nubo.settlement.report.generator.models.enums.NotificationMessageEnum;
import com.nubo.settlement.report.generator.models.enums.NotificationTypeEnum;

public interface NotificationService {

    void sendNotification(NotificationTypeEnum notificationType, NotificationMessageEnum notificationMessage,
            String fileName, Long fileId, Long participantId);

}

```

## src/main/java/com/nubo/settlement/report/generator/service/SettlementReportGeneratorService.java

```java
package com.nubo.settlement.report.generator.service;

import com.nubo.settlement.report.generator.models.dto.request.EventKafkaInDto;

public interface SettlementReportGeneratorService {

    void generateLiquidaReport(EventKafkaInDto kafkaDto);

    void generatePapeletaReport(EventKafkaInDto kafkaDto);
}

```

## src/main/java/com/nubo/settlement/report/generator/service/impl/BatchServiceImpl.java

```java
package com.nubo.settlement.report.generator.service.impl;

import java.io.Writer;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Slice;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nubo.settlement.report.generator.application.properties.PropertiesConfig;
import com.nubo.settlement.report.generator.application.properties.PropertiesContext;
import com.nubo.settlement.report.generator.application.util.FixedWidthStrategy;
import com.nubo.settlement.report.generator.helpers.MapperCustodianUtil;
import com.nubo.settlement.report.generator.helpers.MapperLiquidaUtil;
import com.nubo.settlement.report.generator.helpers.MapperPapeletaUtil;
import com.nubo.settlement.report.generator.models.domain.CustodianPackageReportData;
import com.nubo.settlement.report.generator.models.domain.LiquidaReportData;
import com.nubo.settlement.report.generator.models.domain.PapeletaReportData;
import com.nubo.settlement.report.generator.models.entity.CustodianReportViewEntity;
import com.nubo.settlement.report.generator.models.entity.SettlementEntity;
import com.nubo.settlement.report.generator.models.entity.SideEntity;
import com.nubo.settlement.report.generator.models.entity.StatusEntity;
import com.nubo.settlement.report.generator.models.entity.TradeEntity;
import com.nubo.settlement.report.generator.models.entity.TypeEntity;
import com.nubo.settlement.report.generator.models.enums.SideEnum;
import com.nubo.settlement.report.generator.repository.CustodianReportViewRepository;
import com.nubo.settlement.report.generator.repository.SettlementRepository;
import com.nubo.settlement.report.generator.repository.StatusRepository;
import com.nubo.settlement.report.generator.repository.TradeRepository;
import com.nubo.settlement.report.generator.repository.TypeRepository;
import com.nubo.settlement.report.generator.service.BatchService;

import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class BatchServiceImpl implements BatchService {

    private final StatusRepository statusRepository;
    private final TypeRepository typeRepository;
    private final TradeRepository tradeRepository;
    private final SettlementRepository settlementRepository;
    private final PropertiesConfig propertiesConfig;
    private final EntityManager entityManager;
    private final CustodianReportViewRepository custodianReportViewRepository;

    @Override
    @Cacheable(value = "status", key = "#statusId")
    public Optional<StatusEntity> findStatusCache(Long statusId) {
        return statusRepository.findById(statusId);
    }

    @Override
    @Cacheable(value = "types", key = "#typeId")
    public Optional<TypeEntity> findTypeCache(Long typeId) {
        return typeRepository.findById(typeId);
    }

    @Transactional(readOnly = true)
    @Override
    public void writeLiquidaWithTradeInBatches(LocalDate date,
            Long participantId, Long countryId, Long statusId, List<Long> tradeTypeIds, Writer writer) {
        final int batchSize = 5000;
        int totalRecords = 0;

        int page = 0;
        Slice<TradeEntity> tradeSliceBuy;
        do {
            tradeSliceBuy = tradeRepository.findSettlementReportBuy(
                    date, participantId, tradeTypeIds, statusId, countryId,
                    PageRequest.of(page, batchSize));
            List<LiquidaReportData> batch = tradeSliceBuy.getContent().stream()
                    .map(trade -> createPlaceholderSettlement(trade, SideEnum.BUY))
                    .map(MapperLiquidaUtil::settlementEntityToLiquidaReportData)
                    .toList();
            FixedWidthStrategy.generateToWriter(batch, writer);
            totalRecords += batch.size();
            entityManager.clear();
            page++;
            log.debug("Processed page {} for BUY trades (writeTradeWithSettlement)", page);
        } while (tradeSliceBuy.hasNext());

        page = 0;
        Slice<TradeEntity> tradeSliceSell;
        do {
            tradeSliceSell = tradeRepository.findSettlementReportSell(
                    date, participantId, tradeTypeIds, statusId, countryId,
                    PageRequest.of(page, batchSize));
            List<LiquidaReportData> batch = tradeSliceSell.getContent().stream()
                    .map(trade -> createPlaceholderSettlement(trade, SideEnum.SELL))
                    .map(MapperLiquidaUtil::settlementEntityToLiquidaReportData)
                    .toList();
            FixedWidthStrategy.generateToWriter(batch, writer);
            totalRecords += batch.size();
            entityManager.clear();
            page++;
            log.debug("Processed page {} for SELL trades (writeTradeWithSettlement)", page);
        } while (tradeSliceSell.hasNext());

        log.debug("End method writeLiquidaWithTradeInBatches, total records: {}", totalRecords);
    }

    @Transactional(readOnly = true)
    @Override
    public void writeLiquidaWithSettlementInBatches(LocalDate date, Long participantId, Long countryId,
            List<Long> searchStatusIds, List<Long> tradeTypeIds, Writer writer) {
        final int batchSize = 5000;
        int totalRecords = 0;

        int page = 0;
        Slice<SettlementEntity> settlementSliceBuy;
        do {
            settlementSliceBuy = settlementRepository.findSettlementReportBuyPage(
                    date, participantId, tradeTypeIds, searchStatusIds, countryId,
                    SideEnum.BUY.getId(), PageRequest.of(page, batchSize));
            List<LiquidaReportData> batch = settlementSliceBuy.getContent().stream()
                    .map(MapperLiquidaUtil::settlementEntityToLiquidaReportData)
                    .toList();
            FixedWidthStrategy.generateToWriter(batch, writer);
            totalRecords += batch.size();
            entityManager.clear();
            page++;
            log.debug("Processed page {} for BUY settlements (streaming)", page);
        } while (settlementSliceBuy.hasNext());

        page = 0;
        Slice<SettlementEntity> settlementSliceSell;
        do {
            settlementSliceSell = settlementRepository.findSettlementReportSellPage(
                    date, participantId, tradeTypeIds, searchStatusIds, countryId,
                    SideEnum.SELL.getId(), PageRequest.of(page, batchSize));
            List<LiquidaReportData> batch = settlementSliceSell.getContent().stream()
                    .map(MapperLiquidaUtil::settlementEntityToLiquidaReportData)
                    .toList();
            FixedWidthStrategy.generateToWriter(batch, writer);
            totalRecords += batch.size();
            entityManager.clear();
            page++;
            log.debug("Processed page {} for SELL settlements (streaming)", page);
        } while (settlementSliceSell.hasNext());

        log.debug("End method writeLiquidaWithSettlementInBatches, total records: {}", totalRecords);
    }

    @Transactional(readOnly = true)
    @Override
    public void writePapeletaWithSettlementInBatches(LocalDate date, Long participantId, Long countryId,
            List<Long> searchStatusIds, List<Long> tradeTypeIds, Writer writer) {
        final int batchSize = 5000;
        int totalRecords = 0;

        int page = 0;
        Slice<SettlementEntity> settlementSliceBuy;
        do {
            settlementSliceBuy = settlementRepository.findSettlementReportBuyPage(
                    date, participantId, tradeTypeIds, searchStatusIds, countryId,
                    SideEnum.BUY.getId(), PageRequest.of(page, batchSize));
            List<PapeletaReportData> batch = settlementSliceBuy.getContent().stream()
                    .map(MapperPapeletaUtil::settlementEntityToPapeletaReportData)
                    .toList();
            FixedWidthStrategy.generateToWriter(batch, writer);
            totalRecords += batch.size();
            entityManager.clear();
            page++;
            log.debug("Processed page {} for BUY settlements (streaming)", page);
        } while (settlementSliceBuy.hasNext());

        page = 0;
        Slice<SettlementEntity> settlementSliceSell;
        do {
            settlementSliceSell = settlementRepository.findSettlementReportSellPage(
                    date, participantId, tradeTypeIds, searchStatusIds, countryId,
                    SideEnum.SELL.getId(), PageRequest.of(page, batchSize));
            List<PapeletaReportData> batch = settlementSliceSell.getContent().stream()
                    .map(MapperPapeletaUtil::settlementEntityToPapeletaReportData)
                    .toList();
            FixedWidthStrategy.generateToWriter(batch, writer);
            totalRecords += batch.size();
            entityManager.clear();
            page++;
            log.debug("Processed page {} for SELL settlements (streaming)", page);
        } while (settlementSliceSell.hasNext());

        log.debug("End method writePapeletaWithSettlementInBatches, total records: {}", totalRecords);
    }

    private SettlementEntity createPlaceholderSettlement(TradeEntity trade, SideEnum sideEnum) {
        SideEntity side = SideEntity.builder()
                .id(sideEnum.getId())
                .description(sideEnum.getDescription())
                .build();

        return SettlementEntity.builder()
                .trade(trade)
                .fraction(0)
                .side(side)
                .netAmount(BigDecimal.ZERO)
                .valTaxAmount(BigDecimal.ZERO)
                .issuedReceipt(false)
                .issuedReceiptNumber(null)
                .lastModifyDate(PropertiesContext.getClientDatetime())
                .lastModifyUser("SYSTEM")
                .lastModifyIp(PropertiesContext.getClientIp())
                .lastModifyApplication(propertiesConfig.getApiName())
                .build();
    }

    @Transactional(readOnly = true)
    @Override
    public void writeCustodianReportInBatches(Specification<CustodianReportViewEntity> spec, Writer writer) {
        final int batchSize = 5000;
        int totalRecords = 0;
        int page = 0;

        Page<CustodianReportViewEntity> pageCustodianReport;
            do {
                pageCustodianReport = custodianReportViewRepository.findAll(spec, PageRequest.of(page, batchSize));
                List<CustodianPackageReportData> batchEntityList = pageCustodianReport.getContent().stream()
                        .map(entity -> MapperCustodianUtil.custodianPackageReportViewEntityToReportData(entity))
                        .toList();
                FixedWidthStrategy.generateToWriter(batchEntityList, writer);
                totalRecords += batchEntityList.size();
                entityManager.clear();
                page++;
                log.debug("Processed page {} for CUSTODIAN trades (writeCustodianReportInBatches)", page);
            } while (pageCustodianReport.hasNext());
        log.debug("End method writeCustodianReportInBatches, total records: {}", totalRecords);
    }
}

```

## src/main/java/com/nubo/settlement/report/generator/service/impl/CustodianReportGeneratorServiceImpl.java

```java
package com.nubo.settlement.report.generator.service.impl;

import java.io.BufferedWriter;
import java.io.IOException;
import java.io.Writer;
import java.math.BigDecimal;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.OffsetDateTime;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;

import org.apache.camel.Exchange;
import org.apache.camel.ProducerTemplate;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import com.nubo.settlement.report.generator.application.properties.PropertiesConfig;
import com.nubo.settlement.report.generator.application.properties.PropertiesContext;
import com.nubo.settlement.report.generator.application.util.ApplicationUtils;
import com.nubo.settlement.report.generator.exception.ServiceException;
import com.nubo.settlement.report.generator.exception.error.ErrorCode;
import com.nubo.settlement.report.generator.helpers.CustodianCsvGeneratorUtil;
import com.nubo.settlement.report.generator.helpers.CustodianReportSpecificationFactory;
import com.nubo.settlement.report.generator.helpers.CustodianUpdatesReportSpecificationFactory;
import com.nubo.settlement.report.generator.models.domain.CustodianReportCsvData;
import com.nubo.settlement.report.generator.models.domain.CustodianUpdatesReportCsvData;
import com.nubo.settlement.report.generator.models.dto.request.CustodianReportFilterInDto;
import com.nubo.settlement.report.generator.models.dto.request.EventKafkaCustodianReportInDto;
import com.nubo.settlement.report.generator.models.dto.request.EventKafkaCustodianUpdatesReportInDto;
import com.nubo.settlement.report.generator.models.entity.CustodianIncidentsReportViewEntity;
import com.nubo.settlement.report.generator.models.entity.CustodianReportViewEntity;
import com.nubo.settlement.report.generator.models.entity.FileGenerateEntity;
import com.nubo.settlement.report.generator.models.entity.StatusEntity;
import com.nubo.settlement.report.generator.models.enums.FileTypeOptionEnum;
import com.nubo.settlement.report.generator.models.enums.FtpEnum;
import com.nubo.settlement.report.generator.models.enums.NotificationMessageEnum;
import com.nubo.settlement.report.generator.models.enums.NotificationTypeEnum;
import com.nubo.settlement.report.generator.models.enums.StatusEnum;
import com.nubo.settlement.report.generator.repository.CustodianReportViewRepository;
import com.nubo.settlement.report.generator.repository.CustodianUpdatesReportRepository;
import com.nubo.settlement.report.generator.repository.FileGenerateRepository;
import com.nubo.settlement.report.generator.service.BatchService;
import com.nubo.settlement.report.generator.service.CustodianReportGeneratorService;
import com.nubo.settlement.report.generator.service.NotificationService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class CustodianReportGeneratorServiceImpl implements CustodianReportGeneratorService {

    private final CustodianReportViewRepository custodianReportViewRepository;
    private final CustodianUpdatesReportRepository custodianUpdatesReportRepository;
    private final FileGenerateRepository fileGenerateRepository;
    private final BatchService batchService;
    private final NotificationService notificationService;
    private final ProducerTemplate producerTemplate;
    private final PropertiesConfig propertiesConfig;

    @Override
    public void generateCustodianReport(EventKafkaCustodianReportInDto message, String topic, String key) {
        Long fileGenerateId = validateCustodianReportPayload(message);
        Long participantId = message.getPayload().getParticipantId();

        if (fileGenerateRepository.existsByIdAndGenerationStatusId(fileGenerateId, StatusEnum.FILE_GENERATED.getId())) {
            log.info("Skipping custodian report because fileGenerateId={} already in generated state", fileGenerateId);
            return;
        }

        FileGenerateEntity file = findFileGenerateEntity(fileGenerateId);
        Path tempFile = null;
        try {
            LocalDateTime now = LocalDateTime.now();
            LocalDate processDate = now.toLocalDate();
            String processTime = ApplicationUtils.convertLocalTimeToString(now.toLocalTime());
            CustodianReportFilterInDto filter = message.getPayload().getFilter();

            Specification<CustodianReportViewEntity> spec = CustodianReportSpecificationFactory
                    .createFilter(filter);
            FileTypeOptionEnum fileType = filter != null ? filter.getFileType() : null;
            if (fileType == null || fileType == FileTypeOptionEnum.CSV) {
                tempFile = generateCustodianReportCsvTempFile(spec, processDate, processTime);
            } else if (fileType == FileTypeOptionEnum.TXT) {
                tempFile = generateCustodianReportTxtTempFile(spec);
            } else {
                log.warn("Unsupported file type: {}", fileType);
            }

            GeneratedFileInfo fileInfo = getCustodianReportFileInfo(file, LocalDateTime.now());

            String uploadedPath = processFileFromPath(fileInfo.remotePath(), tempFile);
            updateFileStatus(file, StatusEnum.FILE_GENERATED.getId(), uploadedPath, null);
            notificationService.sendNotification(NotificationTypeEnum.INFORMATIVE,
                    NotificationMessageEnum.REQUEST_SUCCESS, fileInfo.fileName(), fileGenerateId, participantId);

            log.info(
                    "Custodian report generated and uploaded successfully. topic={} key={} fileGenerateId={} participantId={} path={}",
                    topic, key, fileGenerateId, participantId, uploadedPath);
        } catch (Exception ex) {
            updateFileStatusOnError(file, ex);
            notificationService.sendNotification(NotificationTypeEnum.ERROR,
                    NotificationMessageEnum.REQUEST_FAILED, "", fileGenerateId, participantId);
            throw new ServiceException(ErrorCode.ERROR_GENERATE_FILE_FTP, ex);
        } finally {
            deleteTempFile(tempFile);
        }
    }

    @Override
    public void generateCustodianUpdatesReport(EventKafkaCustodianUpdatesReportInDto message, String topic,
            String key) {
        Long fileGenerateId = validateCustodianUpdatesPayload(message);
        Long participantId = message.getPayload().getParticipantId();

        if (fileGenerateRepository.existsByIdAndGenerationStatusId(fileGenerateId, StatusEnum.FILE_GENERATED.getId())) {
            log.info("Skipping custodian updates report because fileGenerateId={} already in generated state",
                    fileGenerateId);
            return;
        }

        FileGenerateEntity file = findFileGenerateEntity(fileGenerateId);
        Path tempFile = null;
        try {
            LocalDate processDate = LocalDate.now();
            LocalTime processTime = LocalTime.now();

            Specification<CustodianIncidentsReportViewEntity> spec = CustodianUpdatesReportSpecificationFactory
                    .createFilter(message.getPayload().getFilter());

            List<CustodianIncidentsReportViewEntity> rows = custodianUpdatesReportRepository.findAll(spec);

            List<CustodianUpdatesReportCsvData> csvRows = rows.stream()
                    .map(row -> mapRowToDto(row, processDate, processTime, file.getParticipant().getShortName()))
                    .toList();

            String csv = CustodianCsvGeneratorUtil.generateCsv(csvRows, CustodianUpdatesReportCsvData.class);
            tempFile = writeCsvToTemp(csv, "custodian-updates-");

            GeneratedFileInfo fileInfo = getCustodianUpdatesFileInfo(file, LocalDateTime.now());

            String uploadedPath = processFileFromPath(fileInfo.remotePath(), tempFile);
            updateFileStatus(file, StatusEnum.FILE_GENERATED.getId(), uploadedPath, null);
            notificationService.sendNotification(NotificationTypeEnum.INFORMATIVE,
                    NotificationMessageEnum.REQUEST_SUCCESS, fileInfo.fileName(), fileGenerateId, participantId);

            log.info(
                    "Custodian updates report generated and uploaded successfully. topic={} key={} fileGenerateId={} participantId={} path={}",
                    topic, key, fileGenerateId, participantId, uploadedPath);
        } catch (Exception ex) {
            updateFileStatusOnError(file, ex);
            notificationService.sendNotification(NotificationTypeEnum.ERROR,
                    NotificationMessageEnum.REQUEST_FAILED, "", fileGenerateId, participantId);
            throw new ServiceException(ErrorCode.ERROR_GENERATE_FILE_FTP, ex);
        } finally {
            deleteTempFile(tempFile);
        }
    }

    private Long validateCustodianReportPayload(EventKafkaCustodianReportInDto message) {
        if (message == null || message.getPayload() == null || message.getPayload().getFileGenerateId() == null
                || message.getPayload().getParticipantId() == null || message.getPayload().getFilter() == null) {
            throw new ServiceException(ErrorCode.CUSTODIAN_INVALID_PAYLOAD);
        }
        return message.getPayload().getFileGenerateId();
    }

    private Long validateCustodianUpdatesPayload(EventKafkaCustodianUpdatesReportInDto message) {
        if (message == null || message.getPayload() == null || message.getPayload().getFileGenerateId() == null
                || message.getPayload().getParticipantId() == null || message.getPayload().getFilter() == null) {
            throw new ServiceException(ErrorCode.CUSTODIAN_INVALID_PAYLOAD);
        }
        return message.getPayload().getFileGenerateId();
    }

    private FileGenerateEntity findFileGenerateEntity(Long fileGenerateId) {
        return fileGenerateRepository.findByIdWithTypeAndParticipant(fileGenerateId)
                .orElseThrow(() -> new ServiceException(ErrorCode.FILE_GENERATE_NOT_FOUND));
    }

    private Path writeCsvToTemp(String csvContent, String prefix) {
        try {
            Path tempFile = Files.createTempFile(prefix, ".csv");
            Files.writeString(tempFile, csvContent, StandardCharsets.UTF_8);
            return tempFile;
        } catch (IOException ex) {
            throw new ServiceException(ErrorCode.CUSTODIAN_CSV_GENERATION_ERROR, ex);
        }
    }

    private Path generateCustodianReportCsvTempFile(Specification<CustodianReportViewEntity> spec,
            LocalDate processDate, String processTime) {
        try {
            Path tempFile = Files.createTempFile("custodian-report-", ".csv");
            try (Writer writer = Files.newBufferedWriter(tempFile, StandardCharsets.UTF_8)) {
                final int batchSize = 5000;
                final Sort sort = Sort.by(Sort.Direction.ASC, "pacConsecutive1", "detMatchId", "detFraction");
                CustodianCsvGeneratorUtil.generateCustodianReportCsvToWriter(new Iterator<>() {
                    private int pageNumber = 0;
                    private Page<CustodianReportViewEntity> page = loadPage();

                    @Override
                    public boolean hasNext() {
                        return page != null && page.hasContent();
                    }

                    @Override
                    public List<CustodianReportCsvData> next() {
                        if (!hasNext()) {
                            throw new NoSuchElementException();
                        }
                        List<CustodianReportCsvData> batch = page.getContent().stream()
                                .map(entity -> mapToCsvRow(entity, processDate, processTime))
                                .toList();
                        page = page.hasNext() ? loadPage() : null;
                        return batch;
                    }

                    private Page<CustodianReportViewEntity> loadPage() {
                        return custodianReportViewRepository
                                .findAll(spec, PageRequest.of(pageNumber++, batchSize, sort));
                    }
                }, writer);
            }
            return tempFile;
        } catch (IOException ex) {
            throw new ServiceException(ErrorCode.CUSTODIAN_CSV_GENERATION_ERROR, ex);
        }
    }

    private Path generateCustodianReportTxtTempFile(Specification<CustodianReportViewEntity> spec) throws IOException {
        Path tempFile = Files.createTempFile("custodian-report-", ".txt");
        try (BufferedWriter writer = Files.newBufferedWriter(tempFile)) {
            batchService.writeCustodianReportInBatches(spec, writer);
        }
        return tempFile;
    }

    private String processFileFromPath(String pathFilename, Path filePath) {
        int maxRetries = 3;
        int retryCount = 0;
        Exception lastException = null;

        byte[] fileContent;
        try {
            fileContent = Files.readAllBytes(filePath);
        } catch (IOException e) {
            throw new ServiceException(ErrorCode.ERROR_LOCAL_FILE, e);
        }

        while (retryCount < maxRetries) {
            try {
                Map<String, Object> headers = Map.of(Exchange.FILE_NAME, pathFilename);
                Exchange exchange = producerTemplate.request(
                        FtpEnum.FROM_WHITE_PROCESS_FILE.getValue(),
                        processor -> {
                            processor.getIn().setBody(fileContent);
                            processor.getIn().setHeaders(headers);
                        });

                Exception exception = exchange.getProperty(Exchange.EXCEPTION_CAUGHT, Exception.class);
                if (exception != null) {
                    throw exception;
                }

                String remotePath = exchange.getMessage().getHeader("FullRemotePath", String.class);
                return remotePath == null ? pathFilename : remotePath;
            } catch (Exception e) {
                lastException = e;
                retryCount++;
                log.warn("FTP upload attempt {} failed for {}: {}", retryCount, pathFilename, e.getMessage());
                if (retryCount < maxRetries) {
                    try {
                        Thread.sleep(2000);
                    } catch (InterruptedException ie) {
                        Thread.currentThread().interrupt();
                    }
                }
            }
        }
        throw new ServiceException(ErrorCode.ERROR_GENERATING_REPORT, lastException);
    }

    private void deleteTempFile(Path tempFile) {
        if (tempFile != null) {
            try {
                Files.deleteIfExists(tempFile);
            } catch (IOException e) {
                log.warn("Failed to delete temp file: {}", tempFile, e);
            }
        }
    }

    private void updateFileStatus(FileGenerateEntity file, Long statusId, String remotePath, String message) {
        if (file == null) {
            return;
        }

        StatusEntity status = batchService.findStatusCache(statusId)
                .orElseThrow(() -> new ServiceException(ErrorCode.STATUS_NOT_FOUND));

        FileGenerateEntity updated = file.toBuilder()
                .filePath(remotePath)
                .message(message)
                .generatedAt(OffsetDateTime.now())
                .generationStatus(status)
                .lastModifyApplic(propertiesConfig.getApiName())
                .lastModifyIp(PropertiesContext.getClientIp())
                .lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyDate(PropertiesContext.getClientDatetime())
                .build();

        fileGenerateRepository.save(updated);
    }

    private void updateFileStatusOnError(FileGenerateEntity file, Exception ex) {
        try {
            updateFileStatus(file, StatusEnum.FILE_ERROR.getId(),
                    ObjectUtils.isEmpty(file) ? "" : file.getFilePath(), truncateMessage(ex));
        } catch (Exception statusEx) {
            log.error("Unable to update file status to ERROR. cause={} secondary={}", ex.getMessage(),
                    statusEx.getMessage());
        }
    }

    private String truncateMessage(Exception ex) {
        if (ex == null) {
            return null;
        }
        Throwable cause = ex;
        while (cause.getCause() != null && cause.getCause() != cause) {
            cause = cause.getCause();
        }
        String message = cause != null && cause.getMessage() != null ? cause.getMessage() : ex.getMessage();
        if (message == null) {
            message = ex.getClass().getSimpleName();
        }
        return message.length() > 1500 ? message.substring(0, 1500) : message;
    }

    private GeneratedFileInfo getCustodianReportFileInfo(FileGenerateEntity fileGenerateEntity,
            LocalDateTime dateTime) {
        String participantCode = fileGenerateEntity.getParticipant().getCode();
        String fileType = fileGenerateEntity.getFileType();
        String fileName = String.format("DetalladodePaquetes_%s.%s",
                ApplicationUtils.convertLocalDateTimeToStringDdMmYyyyHhmmss(dateTime), fileType);
        String remotePath = String.format("%s/custodian/%s", participantCode, fileName);
        return new GeneratedFileInfo(participantCode, fileName, remotePath);
    }

    private GeneratedFileInfo getCustodianUpdatesFileInfo(FileGenerateEntity fileGenerateEntity,
            LocalDateTime dateTime) {
        String participantCode = fileGenerateEntity.getParticipant().getCode();
        String fileType = fileGenerateEntity.getFileType();
        String fileName = String.format("ReporteDeNovedades.%s.%s",
                ApplicationUtils.convertLocalDateTimeToStringDdMmYyyyHhmmss(dateTime), fileType);
        String remotePath = String.format("%s/custodian/%s", participantCode, fileName);
        return new GeneratedFileInfo(participantCode, fileName, remotePath);
    }

    private CustodianReportCsvData mapToCsvRow(CustodianReportViewEntity entity, LocalDate processDate,
            String processTime) {
        return CustodianReportCsvData.builder()
                .processDate(processDate)
                .processTime(processTime)
                .creationDate(entity.getPacCreationDate())
                .transferDate(entity.getPacTraslateDate() != null ? entity.getPacTraslateDate().toLocalDate() : null)
                .admissionDate(entity.getPacAdmitDate() != null ? entity.getPacAdmitDate().toLocalDate() : null)
                .clearingOutDate(entity.getPacInitialClearingDate())
                .clearingReturnDate(formatDateAsString(entity.getPacFinalClearingDate()))
                .mnemonic(entity.getPacMnemonic())
                .isin(entity.getPacIsin())
                .market(entity.getPacMarket())
                .packetCode(entity.getPacConsecutive1())
                .secondaryPacketCode(entity.getPacConsecutive2())
                .referenceCode(entity.getPacReferenceCode())
                .operationStatus(entity.getPacStatus())
                .side(entity.getPacSide())
                .operationType(entity.getPacTransactionType())
                .affiliate(entity.getPacAffiliate())
                .custodian(entity.getPacCustodian())
                .administrator(entity.getPacFicAdministrator())
                .investorIdentificationType(entity.getPacInvestorIdentificationType1())
                .investorDocument(entity.getPacInvestorIdentificationNumber1())
                .investorName(entity.getPacInvestorName1())
                .investorAccount(entity.getPacInvestorAccount())
                .depository(entity.getPacDepository())
                .affiliateName(entity.getPacAffiliate())
                .custodianName(entity.getPacCustodian())
                .administratorName(entity.getPacFicAdministrator())
                .registerDate(entity.getDetMatchDate())
                .folio(entity.getDetMatchId())
                .fraction(entity.getDetFraction())
                .clearingDate(entity.getDetClearingDate())
                .returnDate(entity.getDetReturnClearingDate())
                .quantity(entity.getDetQuantity())
                .price(entity.getDetPrice())
                .rate(entity.getDetRate())
                .grossOutValue(entity.getDetVolume())
                .grossReturnValue(null)
                .commissionPercentage(entity.getDetPercentajeCommission())
                .commissionAmount(entity.getDetCommissionAmount())
                .taxCommissionAmount(entity.getDetValTaxAmount())
                .netValue(entity.getDetNetAmount())
                .netReturnValue(null)
                .grossGiroValue(parseBigDecimalOrNull(entity.getDetTransferAmount()))
                .grossReturnGiroValue(parseBigDecimalOrNull(entity.getDetReturnTransferAmount()))
                .statusSalida(entity.getDetComplianceIndicator())
                .statusRegreso(entity.getDetReturnComplianceIndicator())
                .sanction(parseBigDecimalOrDefault(entity.getDetExtensePenality(), BigDecimal.ZERO))
                .psan(entity.getDetExtensePosition())
                .type(entity.getPacTransactionType())
                .quantityProm(entity.getPacTotalQuantity())
                .priceProm(entity.getPacAverangePrice())
                .rateProm(BigDecimal.ZERO)
                .totalGross(entity.getPacTotalVolume())
                .totalGrossReg(null)
                .totalNet(entity.getPacTotalNetAmount())
                .totalNetReg(null)
                .totalGiro(parseBigDecimalOrNull(entity.getPacTotalTransferAmount()))
                .totalGiroReg(BigDecimal.ZERO)
                .totalCommission(entity.getPacTotalCommissionAmount())
                .totalTaxCommission(entity.getPacTotalValTaxAmount())
                .cumpPercentage(parseBigDecimalOrDefault(entity.getPacClearingPercentage(), BigDecimal.ZERO))
                .build();
    }

    private String formatDateAsString(LocalDate value) {
        if (value == null) {
            return null;
        }
        return value.toString();
    }

    private BigDecimal parseBigDecimalOrNull(String value) {
        if (value == null || value.isBlank()) {
            return null;
        }
        try {
            return new BigDecimal(value);
        } catch (NumberFormatException exception) {
            return null;
        }
    }

    private BigDecimal parseBigDecimalOrDefault(String value, BigDecimal defaultValue) {
        BigDecimal parsed = parseBigDecimalOrNull(value);
        return parsed == null ? defaultValue : parsed;
    }

    private BigDecimal parseBigDecimalOrDefault(BigDecimal value, BigDecimal defaultValue) {
        return value == null ? defaultValue : value;
    }

    private String mapIncidentSide(String sideId) {
        if ("COMPRA".equalsIgnoreCase(sideId) || "VENTA".equalsIgnoreCase(sideId)) {
            return sideId.toUpperCase();
        }
        if ("1".equals(sideId)) {
            return "COMPRA";
        }
        if ("2".equals(sideId)) {
            return "VENTA";
        }
        return sideId;
    }

    private String mapIncidentPackageStatus(String packageStatusId) {
        if ("S".equalsIgnoreCase(packageStatusId) || "R".equalsIgnoreCase(packageStatusId)
                || "A".equalsIgnoreCase(packageStatusId) || "P".equalsIgnoreCase(packageStatusId)
                || "T".equalsIgnoreCase(packageStatusId)) {
            return packageStatusId.toUpperCase();
        }
        if ("1075".equals(packageStatusId)) {
            return "S";
        }
        if ("1074".equals(packageStatusId)) {
            return "R";
        }
        if ("1073".equals(packageStatusId)) {
            return "A";
        }
        if ("1072".equals(packageStatusId)) {
            return "P";
        }
        if ("1071".equals(packageStatusId)) {
            return "T";
        }
        return packageStatusId;
    }

    private CustodianUpdatesReportCsvData mapRowToDto(CustodianIncidentsReportViewEntity row, LocalDate processDate,
            LocalTime processTime, String participantName) {
        return CustodianUpdatesReportCsvData.builder()
                .section(row.getSection2())
                .processDate(processDate)
                .processTime(processTime)
                .affiliateCode(row.getPacAffiliate())
                .affiliateName(participantName)
                .packageNumber(row.getHeaPackageCode())
                .securityMnemonic(row.getHeaMnemonic())
                .tradingSide(mapIncidentSide(row.getHeaSide()))
                .affiliatePackageReference(row.getHeaReference())
                .ficAdministrator(row.getHeaAdministrator())
                .eventDate(row.getPacEventDate())
                .eventTime(parseTimeOrNull(row.getPacEvenHour()))
                .eventStatus(row.getPacEvent())
                .eventAffiliateCode(row.getPacAffiliate())
                .eventCustodianCode(row.getPacCustodian())
                .eventGeneratingEntityCode(row.getPacGeneratingEntity())
                .packageStateEvent(mapIncidentPackageStatus(row.getPacPackageStatus()))
                .quantity(row.getPacQuantity())
                .averagePrice(row.getPacAverangePrice())
                .averageRate(row.getPacAverangeRate())
                .grossPackageValue(row.getPacTotalVolume())
                .commissionPackageValue(row.getPacTotalCommission())
                .netPackageValue(row.getPacTotalNetAmount())
                .netReturnValue(row.getPacTotalReturnNetAmount())
                .rejectionReasonCode(row.getPacSubstate())
                .identificationType(row.getPacInvestorIdentificationType())
                .identificationNumber(row.getPacInvestorIdentificationNumber())
                .depositAccount(row.getPacInvestorAccount())
                .appliedPenalty(row.getPacExtensePenality())
                .eventFolio(toStringValue(row.getDetMatchId()))
                .fractionNumber(toInteger(row.getDetFraction()))
                .operationQuantity(row.getDetQuantity())
                .operationPrice(row.getDetPrice())
                .operationRate(row.getDetRate())
                .operationRegistrationDate(row.getDetMatchDate())
                .operationClearingDate(row.getDetClearingDate())
                .returnFulfillmentDate(row.getDetReturnClearingDate())
                .returnExitFlow(row.getDetDepartureReturn())
                .penaltyValue(row.getPacExtensePenality())
                .penaltyDays(row.getDetDaysPenality())
                .penaltyRate(toBigDecimal(row.getDetRatePenality()))
                .build();
    }

    private LocalTime parseTimeOrNull(String value) {
        if (value == null || value.isBlank()) {
            return null;
        }
        return LocalTime.parse(value);
    }

    private String toStringValue(Object value) {
        return value == null ? null : String.valueOf(value);
    }

    private BigDecimal toBigDecimal(Integer value) {
        return value == null ? null : BigDecimal.valueOf(value);
    }

    private Integer toInteger(Long value) {
        return value == null ? null : Math.toIntExact(value);
    }

    private record GeneratedFileInfo(
            String participantCode,
            String fileName,
            String remotePath) {
    }
}

```

## src/main/java/com/nubo/settlement/report/generator/service/impl/NotificationServiceImpl.java

```java
package com.nubo.settlement.report.generator.service.impl;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.nubo.settlement.report.generator.application.properties.PropertiesConfig;
import com.nubo.settlement.report.generator.application.util.ApplicationUtils;
import com.nubo.settlement.report.generator.client.kafka.producer.KafkaNuboAdapter;
import com.nubo.settlement.report.generator.models.dto.request.NotificationRequestDto;
import com.nubo.settlement.report.generator.models.enums.NotificationMessageEnum;
import com.nubo.settlement.report.generator.models.enums.NotificationTypeEnum;
import com.nubo.settlement.report.generator.repository.ParticipantUserNuboRepository;
import com.nubo.settlement.report.generator.service.NotificationService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import tools.jackson.databind.JsonNode;

@Service
@RequiredArgsConstructor
@Slf4j
public class NotificationServiceImpl implements NotificationService {

    private final PropertiesConfig propertiesConfig;
    private final KafkaNuboAdapter kafkaNuboAdapter;
    private final ParticipantUserNuboRepository participantUserNuboRepository;

    public void sendNotification(NotificationTypeEnum notificationType, NotificationMessageEnum notificationMessage,
            String fileName, Long fileId, Long participantId) {
        log.info("Sending notification type: {} - message: {} - scheduleExtensionId: {}",
                notificationType.getDescription(), notificationMessage.getDescription(), fileId);
        try {
            Map<String, String> metadata = new HashMap<>();
            if (fileId != null) {
                metadata.put("id", fileId.toString());
                metadata.put("fileName", fileName);
            }
            JsonNode metadataNode = ApplicationUtils.convertObjectToJsonNode(metadata);

            List<Long> userIds = participantUserNuboRepository
                    .findUserNuboIdsByParticipantId(participantId);

            if (userIds.isEmpty()) {
                log.warn("No user IDs found for participant ID: {}", participantId);
                return;
            }

            NotificationRequestDto notification = NotificationRequestDto.builder()
                    .notificationId(notificationMessage.getId())
                    .typeNotification(notificationType.getDescription())
                    .eventType(propertiesConfig.getKafkaNuboNotificationEventType())
                    .module(propertiesConfig.getKafkaNuboNotificationModule())
                    .userIds(userIds != null ? userIds : List.of())
                    .timestamp(LocalDateTime.now().withNano(0).toString())
                    .metadata(metadataNode)
                    .build();

            kafkaNuboAdapter.sendMessageNotification(ApplicationUtils.convertObjectToJson(notification));
            log.info("Notification sent successfully for users: {}", userIds);

        } catch (Exception e) {
            log.error("Error sending notification to Kafka", e);
        }

    }

}

```

## src/main/java/com/nubo/settlement/report/generator/service/impl/SettlementReportGeneratorServiceImpl.java

```java
package com.nubo.settlement.report.generator.service.impl;

import java.io.BufferedWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.time.OffsetDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Map;

import org.apache.camel.Exchange;
import org.apache.camel.ProducerTemplate;
import org.springframework.stereotype.Service;

import com.nubo.settlement.report.generator.application.properties.PropertiesConfig;
import com.nubo.settlement.report.generator.application.properties.PropertiesContext;
import com.nubo.settlement.report.generator.application.util.ApplicationUtils;
import com.nubo.settlement.report.generator.exception.ServiceException;
import com.nubo.settlement.report.generator.exception.error.ErrorCode;
import com.nubo.settlement.report.generator.models.dto.request.EventKafkaInDto;
import com.nubo.settlement.report.generator.models.dto.request.SettlementReportFileInDto;
import com.nubo.settlement.report.generator.models.entity.FileGenerateEntity;
import com.nubo.settlement.report.generator.models.entity.StatusEntity;
import com.nubo.settlement.report.generator.models.enums.FtpEnum;
import com.nubo.settlement.report.generator.models.enums.NotificationMessageEnum;
import com.nubo.settlement.report.generator.models.enums.NotificationTypeEnum;
import com.nubo.settlement.report.generator.models.enums.StatusEnum;
import com.nubo.settlement.report.generator.models.enums.TypeEnum;
import com.nubo.settlement.report.generator.repository.FileGenerateRepository;
import com.nubo.settlement.report.generator.service.BatchService;
import com.nubo.settlement.report.generator.service.NotificationService;
import com.nubo.settlement.report.generator.service.SettlementReportGeneratorService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class SettlementReportGeneratorServiceImpl implements SettlementReportGeneratorService {

    private final FileGenerateRepository fileGenerateRepository;
    private final ProducerTemplate producerTemplate;
    private final PropertiesConfig propertiesConfig;
    private final NotificationService notificationService;
    private final BatchService batchService;

    @Override
    public void generateLiquidaReport(EventKafkaInDto eventKafkaInDto) {
        log.info("Start method generateLiquidaReport");

        SettlementReportFileInDto settlementReportFileInDto = eventKafkaInDto.getSettlementReportFileOutDto();
        FileGenerateEntity fileGenerateEntityLast = validateFileGenerateEntity(
                settlementReportFileInDto.getFileGenerateId());

        Path tempFile = null;
        try {
            tempFile = Files.createTempFile("liquida-temporary-", ".dat");
            this.writeLiquidaReportDataToFile(settlementReportFileInDto, tempFile);

            // Después de escribir el archivo, se procesa para enviarlo al FTP
            fileGenerateEntityLast = validateFileGenerateEntity(settlementReportFileInDto.getFileGenerateId());
            String path = generateFullPathLiquida(fileGenerateEntityLast);
            String remotePath = processFileFromPath(path, tempFile);
            log.info("Remote path '{}'", remotePath);

            FileGenerateEntity fileGenerateEntityUpdate = fileGenerateEntityLast.toBuilder()
                    .filePath(remotePath)
                    .generatedAt(OffsetDateTime.now())
                    .generationStatus(findStatusEntity(StatusEnum.FILE_GENERATED.getId()))
                    .lastModifyApplic(propertiesConfig.getApiName())
                    .lastModifyIp(PropertiesContext.getClientIp())
                    .lastModifyUser(PropertiesContext.getClientUser())
                    .lastModifyDate(PropertiesContext.getClientDatetime())
                    .build();
            fileGenerateEntityUpdate = fileGenerateRepository.save(fileGenerateEntityUpdate);

            notificationService.sendNotification(
                    NotificationTypeEnum.INFORMATIVE,
                    NotificationMessageEnum.REQUEST_SUCCESS,
                    fileGenerateEntityUpdate.getFileName(),
                    fileGenerateEntityUpdate.getId(),
                    settlementReportFileInDto.getParticipantId());

            log.info("File '{}' was successfully uploaded to FTP server.", fileGenerateEntityLast.getFileName());

            log.info("End method generateLiquidaReport");

        } catch (Exception ex) {
            notificationService.sendNotification(
                    NotificationTypeEnum.ERROR,
                    NotificationMessageEnum.REQUEST_FAILED,
                    new String(),
                    settlementReportFileInDto.getFileGenerateId(),
                    settlementReportFileInDto.getParticipantId());

            throw new ServiceException(ErrorCode.ERROR_GENERATE_FILE_FTP, ex);
        } finally {
            deleteTempFile(tempFile);
        }
    }

    @Override
    public void generatePapeletaReport(EventKafkaInDto eventKafkaInDto) {
        SettlementReportFileInDto settlementReportFileInDto = eventKafkaInDto.getSettlementReportFileOutDto();
        FileGenerateEntity fileGenerateEntityLast = validateFileGenerateEntity(
                settlementReportFileInDto.getFileGenerateId());

        Path tempFile = null;
        try {
            tempFile = Files.createTempFile("papeleta-temporary-", ".dat");
            this.writePapeletaReportDataToFile(settlementReportFileInDto, tempFile);

            // Después de escribir el archivo, se procesa para enviarlo al FTP
            fileGenerateEntityLast = validateFileGenerateEntity(settlementReportFileInDto.getFileGenerateId());
            String path = generateFullPathPapeleta(fileGenerateEntityLast);
            String remotePath = processFileFromPath(path, tempFile);
            log.info("Remote path '{}'", remotePath);

            FileGenerateEntity fileGenerateEntityUpdate = fileGenerateEntityLast.toBuilder()
                    .filePath(remotePath)
                    .generatedAt(OffsetDateTime.now())
                    .generationStatus(findStatusEntity(StatusEnum.FILE_GENERATED.getId()))
                    .lastModifyApplic(propertiesConfig.getApiName())
                    .lastModifyIp(PropertiesContext.getClientIp())
                    .lastModifyUser(PropertiesContext.getClientUser())
                    .lastModifyDate(PropertiesContext.getClientDatetime())
                    .build();
            fileGenerateEntityUpdate = fileGenerateRepository.save(fileGenerateEntityUpdate);

            notificationService.sendNotification(
                    NotificationTypeEnum.INFORMATIVE,
                    NotificationMessageEnum.REQUEST_SUCCESS,
                    fileGenerateEntityUpdate.getFileName(),
                    fileGenerateEntityUpdate.getId(),
                    settlementReportFileInDto.getParticipantId());

            log.info("File '{}' was successfully uploaded to FTP server.", fileGenerateEntityLast.getFileName());

            log.info("End method generatePapeletaReport");

        } catch (Exception ex) {
            notificationService.sendNotification(
                    NotificationTypeEnum.ERROR,
                    NotificationMessageEnum.REQUEST_FAILED,
                    new String(),
                    settlementReportFileInDto.getFileGenerateId(),
                    settlementReportFileInDto.getParticipantId());

            throw new ServiceException(ErrorCode.ERROR_GENERATE_FILE_FTP, ex);
        } finally {
            deleteTempFile(tempFile);
        }
    }

    private void writeLiquidaReportDataToFile(SettlementReportFileInDto settlementReportFileInDto, Path tempFile)
            throws IOException {
        try (BufferedWriter writer = Files.newBufferedWriter(tempFile)) {
            if (settlementReportFileInDto.getStatusRegisteredId() != null) {
                batchService.writeLiquidaWithTradeInBatches(
                        settlementReportFileInDto.getDate(),
                        settlementReportFileInDto.getParticipantId(),
                        settlementReportFileInDto.getCountryId(),
                        settlementReportFileInDto.getStatusRegisteredId(),
                        settlementReportFileInDto.getTradeTypeIds(),
                        writer);
            } else {
                batchService.writeLiquidaWithSettlementInBatches(
                        settlementReportFileInDto.getDate(),
                        settlementReportFileInDto.getParticipantId(),
                        settlementReportFileInDto.getCountryId(),
                        settlementReportFileInDto.getSearchStatusIds(),
                        settlementReportFileInDto.getTradeTypeIds(),
                        writer);
            }
        }
    }

    private void writePapeletaReportDataToFile(SettlementReportFileInDto settlementReportFileInDto, Path tempFile)
            throws IOException {
        try (BufferedWriter writer = Files.newBufferedWriter(tempFile)) {
            batchService.writePapeletaWithSettlementInBatches(
                    settlementReportFileInDto.getDate(),
                    settlementReportFileInDto.getParticipantId(),
                    settlementReportFileInDto.getCountryId(),
                    settlementReportFileInDto.getSearchStatusIds(),
                    settlementReportFileInDto.getTradeTypeIds(),
                    writer);
        }
    }

    private String processFileFromPath(String pathFilename, Path filePath) {
        int maxRetries = 3;
        int retryCount = 0;
        Exception lastException = null;

        byte[] fileContent;
        try {
            fileContent = Files.readAllBytes(filePath);
        } catch (IOException e) {
            throw new ServiceException(ErrorCode.ERROR_LOCAL_FILE, e);
        }

        log.info("Starting FTP upload for file: {} (Size: {} bytes / {} MB)",
                pathFilename, fileContent.length, String.format("%.2f", fileContent.length / 1024.0 / 1024.0));

        while (retryCount < maxRetries) {
            try {
                long startTime = System.currentTimeMillis();

                Map<String, Object> headers = Map.of(Exchange.FILE_NAME, pathFilename);
                Exchange exchange = producerTemplate.request(
                        FtpEnum.FROM_WHITE_PROCESS_FILE.getValue(),
                        processor -> {
                            processor.getIn().setBody(fileContent);
                            processor.getIn().setHeaders(headers);
                        });

                Exception exception = exchange.getProperty(Exchange.EXCEPTION_CAUGHT, Exception.class);
                if (exception != null) {
                    throw exception;
                }

                String remotePath = exchange.getMessage().getHeader("FullRemotePath", String.class);
                if (remotePath == null) {
                    remotePath = pathFilename;
                }

                long elapsedTime = System.currentTimeMillis() - startTime;
                double elapsedSeconds = elapsedTime / 1000.0;
                double speedMbps = (fileContent.length / 1024.0 / 1024.0) / elapsedSeconds;

                log.info("File {} successfully uploaded via SFTP in {} seconds ({} MB/s)",
                        remotePath, String.format("%.2f", elapsedSeconds), String.format("%.2f", speedMbps));
                return remotePath;

            } catch (Exception e) {
                lastException = e;
                retryCount++;
                log.warn("FTP upload attempt {} failed for {}: {}. Retrying...",
                        retryCount, pathFilename, e.getMessage());

                if (retryCount < maxRetries) {
                    try {
                        Thread.sleep(2000);
                    } catch (InterruptedException ie) {
                        Thread.currentThread().interrupt();
                    }
                }
            }
        }
        log.error("FTP upload failed after {} attempts: {}", maxRetries, lastException);
        throw new ServiceException(ErrorCode.ERROR_GENERATING_REPORT, lastException);
    }

    private void deleteTempFile(Path tempFile) {
        if (tempFile != null) {
            try {
                Files.deleteIfExists(tempFile);
            } catch (IOException e) {
                log.warn("Failed to delete temp file: {}", tempFile, e);
            }
        }
    }

    private StatusEntity findStatusEntity(Long statusId) {
        return batchService.findStatusCache(statusId)
                .orElseThrow(() -> new ServiceException(ErrorCode.STATUS_NOT_FOUND));
    }

    private FileGenerateEntity validateFileGenerateEntity(Long fileGenerateId) {
        return fileGenerateRepository.findByIdWithTypeAndParticipant(fileGenerateId)
                .orElseThrow(() -> new ServiceException(ErrorCode.FILE_GENERATE_NOT_FOUND));
    }

    private String generateFullPathLiquida(FileGenerateEntity fileGenerateEntity) {
        Long typeId = fileGenerateEntity.getType().getId();
        String participantCode = fileGenerateEntity.getParticipant().getCode();
        String filename = fileGenerateEntity.getFileName().concat(".dat");

        if (TypeEnum.FILE_LIQUIDA_HISTORY.getId() == typeId) {
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern(ApplicationUtils.getFormatDatePlane());
            String today = fileGenerateEntity.getRecordDate().format(formatter);
            return String.format("%s/liquida/historico/%s/%s", participantCode, today, filename);
        }
        if (TypeEnum.FILE_LIQUIDA_TODAY.getId() == typeId) {
            return String.format("%s/liquida/diario/%s", participantCode, filename);
        }

        throw new ServiceException(ErrorCode.INVALID_TYPE_FOR_PATH);
    }

    private String generateFullPathPapeleta(FileGenerateEntity fileGenerateEntity) {
        Long typeId = fileGenerateEntity.getType().getId();
        String participantCode = fileGenerateEntity.getParticipant().getCode();
        String filename = fileGenerateEntity.getFileName().concat(".dat");

        if (TypeEnum.FILE_PAPELETA_HISTORY.getId() == typeId) {
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern(ApplicationUtils.getFormatDatePlane());
            String today = fileGenerateEntity.getRecordDate().format(formatter);
            return String.format("%s/papeleta/historico/%s/%s", participantCode, today, filename);
        }
        if (TypeEnum.FILE_PAPELETA_TODAY.getId() == typeId) {
            return String.format("%s/papeleta/diario/%s", participantCode, filename);
        }

        throw new ServiceException(ErrorCode.INVALID_TYPE_FOR_PATH);
    }

}

```
