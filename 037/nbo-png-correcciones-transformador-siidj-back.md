# nbo-png-correcciones-transformador-siidj-back

Código Java de producción y configuraciones, sin tests. Cada sección contiene el archivo original completo y su ruta. Captura: 28/10/2026.

## Índice

1. `.mvn/wrapper/maven-wrapper.properties`
2. `mvnw`
3. `mvnw.cmd`
4. `pom.xml`
5. `src/main/java/com/nubo/transformation/corrections/api/TransformationCorrectionsApiApplication.java`
6. `src/main/java/com/nubo/transformation/corrections/api/application/config/KafkaConsumerConfig.java`
7. `src/main/java/com/nubo/transformation/corrections/api/application/config/KafkaProducerConfig.java`
8. `src/main/java/com/nubo/transformation/corrections/api/application/config/SwaggerConfig.java`
9. `src/main/java/com/nubo/transformation/corrections/api/application/config/WebConfig.java`
10. `src/main/java/com/nubo/transformation/corrections/api/application/context/GlobalContext.java`
11. `src/main/java/com/nubo/transformation/corrections/api/application/database/NamingStrategyConfig.java`
12. `src/main/java/com/nubo/transformation/corrections/api/application/database/UpperNamingConfig.java`
13. `src/main/java/com/nubo/transformation/corrections/api/application/filters/GlobalFilter.java`
14. `src/main/java/com/nubo/transformation/corrections/api/application/interceptors/GlobalInterceptor.java`
15. `src/main/java/com/nubo/transformation/corrections/api/application/properties/PropertiesConfig.java`
16. `src/main/java/com/nubo/transformation/corrections/api/application/properties/PropertiesContext.java`
17. `src/main/java/com/nubo/transformation/corrections/api/application/util/ApplicationUtils.java`
18. `src/main/java/com/nubo/transformation/corrections/api/application/util/RestClientUtils.java`
19. `src/main/java/com/nubo/transformation/corrections/api/client/kafka/consumer/KafkaNuboAdapterConsumer.java`
20. `src/main/java/com/nubo/transformation/corrections/api/client/kafka/producer/KafkaNuboAdapterProducer.java`
21. `src/main/java/com/nubo/transformation/corrections/api/exception/ServiceException.java`
22. `src/main/java/com/nubo/transformation/corrections/api/exception/error/ErrorCode.java`
23. `src/main/java/com/nubo/transformation/corrections/api/exception/error/ErrorResponse.java`
24. `src/main/java/com/nubo/transformation/corrections/api/exception/error/ErrorValidation.java`
25. `src/main/java/com/nubo/transformation/corrections/api/exception/handler/GlobalExceptionHandler.java`
26. `src/main/java/com/nubo/transformation/corrections/api/exception/kafka/KafkaErrorBuild.java`
27. `src/main/java/com/nubo/transformation/corrections/api/helpers/OperacionCorregidaContext.java`
28. `src/main/java/com/nubo/transformation/corrections/api/helpers/OperacionCorregidaOutMapper.java`
29. `src/main/java/com/nubo/transformation/corrections/api/models/dto/request/CityInDto.java`
30. `src/main/java/com/nubo/transformation/corrections/api/models/dto/request/CountryInDto.java`
31. `src/main/java/com/nubo/transformation/corrections/api/models/dto/request/CurrencyInDto.java`
32. `src/main/java/com/nubo/transformation/corrections/api/models/dto/request/CustodianInDto.java`
33. `src/main/java/com/nubo/transformation/corrections/api/models/dto/request/DepartmentInDto.java`
34. `src/main/java/com/nubo/transformation/corrections/api/models/dto/request/DepositoryInDto.java`
35. `src/main/java/com/nubo/transformation/corrections/api/models/dto/request/DirectDepositorInDto.java`
36. `src/main/java/com/nubo/transformation/corrections/api/models/dto/request/EntityTypeInDto.java`
37. `src/main/java/com/nubo/transformation/corrections/api/models/dto/request/FractionEventKafkaInDto.java`
38. `src/main/java/com/nubo/transformation/corrections/api/models/dto/request/GicsInDto.java`
39. `src/main/java/com/nubo/transformation/corrections/api/models/dto/request/IdentificationTypeInDto.java`
40. `src/main/java/com/nubo/transformation/corrections/api/models/dto/request/InvestorAccountInDto.java`
41. `src/main/java/com/nubo/transformation/corrections/api/models/dto/request/InvestorInDto.java`
42. `src/main/java/com/nubo/transformation/corrections/api/models/dto/request/ParticipantAccountInDto.java`
43. `src/main/java/com/nubo/transformation/corrections/api/models/dto/request/ParticipantInDto.java`
44. `src/main/java/com/nubo/transformation/corrections/api/models/dto/request/PayloadInDto.java`
45. `src/main/java/com/nubo/transformation/corrections/api/models/dto/request/QuoteTypeInDto.java`
46. `src/main/java/com/nubo/transformation/corrections/api/models/dto/request/SideInDto.java`
47. `src/main/java/com/nubo/transformation/corrections/api/models/dto/request/SourceQuoteTypeInDto.java`
48. `src/main/java/com/nubo/transformation/corrections/api/models/dto/request/StatusInDto.java`
49. `src/main/java/com/nubo/transformation/corrections/api/models/dto/request/TaxStatusInDto.java`
50. `src/main/java/com/nubo/transformation/corrections/api/models/dto/request/TradeCorrectionInDto.java`
51. `src/main/java/com/nubo/transformation/corrections/api/models/dto/request/TradingSystemInDto.java`
52. `src/main/java/com/nubo/transformation/corrections/api/models/dto/request/TypeInDto.java`
53. `src/main/java/com/nubo/transformation/corrections/api/models/dto/response/OperacionCorregidaOutDto.java`
54. `src/main/java/com/nubo/transformation/corrections/api/models/dto/response/TransformacionesCorreccionesKafkaOutDto.java`
55. `src/main/java/com/nubo/transformation/corrections/api/models/entity/CfiEntity.java`
56. `src/main/java/com/nubo/transformation/corrections/api/models/entity/CityEntity.java`
57. `src/main/java/com/nubo/transformation/corrections/api/models/entity/CountryEntity.java`
58. `src/main/java/com/nubo/transformation/corrections/api/models/entity/CurrencyEntity.java`
59. `src/main/java/com/nubo/transformation/corrections/api/models/entity/DailyOperationCounterEntity.java`
60. `src/main/java/com/nubo/transformation/corrections/api/models/entity/DepartmentEntity.java`
61. `src/main/java/com/nubo/transformation/corrections/api/models/entity/DepositoryEntity.java`
62. `src/main/java/com/nubo/transformation/corrections/api/models/entity/DepositoryMappingEntity.java`
63. `src/main/java/com/nubo/transformation/corrections/api/models/entity/DirectDepositoryEntity.java`
64. `src/main/java/com/nubo/transformation/corrections/api/models/entity/GicsEntity.java`
65. `src/main/java/com/nubo/transformation/corrections/api/models/entity/IdentificationTypeEntity.java`
66. `src/main/java/com/nubo/transformation/corrections/api/models/entity/InvestorAccountEntity.java`
67. `src/main/java/com/nubo/transformation/corrections/api/models/entity/InvestorEntity.java`
68. `src/main/java/com/nubo/transformation/corrections/api/models/entity/IsinNumberEntity.java`
69. `src/main/java/com/nubo/transformation/corrections/api/models/entity/MarketEntity.java`
70. `src/main/java/com/nubo/transformation/corrections/api/models/entity/ParticipantAccountEntity.java`
71. `src/main/java/com/nubo/transformation/corrections/api/models/entity/ParticipantCodeEntity.java`
72. `src/main/java/com/nubo/transformation/corrections/api/models/entity/ParticipantEntity.java`
73. `src/main/java/com/nubo/transformation/corrections/api/models/entity/SecurityTitleEntity.java`
74. `src/main/java/com/nubo/transformation/corrections/api/models/entity/SettlementEntity.java`
75. `src/main/java/com/nubo/transformation/corrections/api/models/entity/SettlementInstructionsEntity.java`
76. `src/main/java/com/nubo/transformation/corrections/api/models/entity/SettlementKey.java`
77. `src/main/java/com/nubo/transformation/corrections/api/models/entity/SideEntity.java`
78. `src/main/java/com/nubo/transformation/corrections/api/models/entity/StatusEntity.java`
79. `src/main/java/com/nubo/transformation/corrections/api/models/entity/TaxStatusEntity.java`
80. `src/main/java/com/nubo/transformation/corrections/api/models/entity/TradeEntity.java`
81. `src/main/java/com/nubo/transformation/corrections/api/models/entity/TradingSessionEntity.java`
82. `src/main/java/com/nubo/transformation/corrections/api/models/entity/TradingSystemEntity.java`
83. `src/main/java/com/nubo/transformation/corrections/api/models/entity/TypeEntity.java`
84. `src/main/java/com/nubo/transformation/corrections/api/models/entity/UserNuboEntity.java`
85. `src/main/java/com/nubo/transformation/corrections/api/models/enums/CorrectionsEnum.java`
86. `src/main/java/com/nubo/transformation/corrections/api/models/enums/CountryEnum.java`
87. `src/main/java/com/nubo/transformation/corrections/api/models/enums/MarketEnum.java`
88. `src/main/java/com/nubo/transformation/corrections/api/models/enums/PropertiesEnum.java`
89. `src/main/java/com/nubo/transformation/corrections/api/models/enums/SideEnum.java`
90. `src/main/java/com/nubo/transformation/corrections/api/models/enums/StatusEnum.java`
91. `src/main/java/com/nubo/transformation/corrections/api/models/enums/TypeEnum.java`
92. `src/main/java/com/nubo/transformation/corrections/api/models/enums/VersionApiEnum.java`
93. `src/main/java/com/nubo/transformation/corrections/api/repository/DailyOperationCounterRepository.java`
94. `src/main/java/com/nubo/transformation/corrections/api/repository/DepositoryMappingRepository.java`
95. `src/main/java/com/nubo/transformation/corrections/api/repository/DirectDepositoryRepository.java`
96. `src/main/java/com/nubo/transformation/corrections/api/repository/InvestorAccountRepository.java`
97. `src/main/java/com/nubo/transformation/corrections/api/repository/IsinNumberRepository.java`
98. `src/main/java/com/nubo/transformation/corrections/api/repository/ParticipantCodeRepository.java`
99. `src/main/java/com/nubo/transformation/corrections/api/repository/SecurityTitleRepository.java`
100. `src/main/java/com/nubo/transformation/corrections/api/repository/SettlementInstructionsRepository.java`
101. `src/main/java/com/nubo/transformation/corrections/api/repository/SettlementRepository.java`
102. `src/main/java/com/nubo/transformation/corrections/api/repository/StatusRepository.java`
103. `src/main/java/com/nubo/transformation/corrections/api/repository/TradeRepository.java`
104. `src/main/java/com/nubo/transformation/corrections/api/repository/UserNuboRepository.java`
105. `src/main/java/com/nubo/transformation/corrections/api/service/TransformationCorrectionService.java`
106. `src/main/java/com/nubo/transformation/corrections/api/service/impl/TransformationCorrectionServiceImpl.java`
107. `src/main/resources/application-dev.yml`
108. `src/main/resources/application-local.yml`
109. `src/main/resources/application-prod.yml`
110. `src/main/resources/application-qa.yml`
111. `src/main/resources/application-uat.yml`
112. `src/main/resources/application.yml`
113. `src/main/resources/banner.txt`
114. `src/main/resources/log/JsonEventLayout_error.json`
115. `src/main/resources/log/JsonEventLayout_info.json`
116. `src/main/resources/log/JsonEventLayout_trace.json`
117. `src/main/resources/log/log4j2-prod.properties`
118. `src/main/resources/log/log4j2.properties`

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
		<relativePath/>
	</parent>
	<groupId>com.nubo.transformation.corrections.api</groupId>
	<artifactId>transformation-corrections-api</artifactId>
	<version>0.42.5</version>
	<name>${project.artifactId}</name>
	<description>Transformation corrections SIIDJ</description>

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
			<groupId>commons-beanutils</groupId>
			<artifactId>commons-beanutils</artifactId>
			<version>1.11.0</version>
		</dependency>
		<dependency>
			<groupId>org.apache.commons</groupId>
			<artifactId>commons-lang3</artifactId>
			<version>3.18.0</version>
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
								<exclude>**/TrasnformationCorrectionsApiApplication.class</exclude>
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

## src/main/java/com/nubo/transformation/corrections/api/TransformationCorrectionsApiApplication.java

```java
package com.nubo.transformation.corrections.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TransformationCorrectionsApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(TransformationCorrectionsApiApplication.class, args);
	}

}

```

## src/main/java/com/nubo/transformation/corrections/api/application/config/KafkaConsumerConfig.java

```java
package com.nubo.transformation.corrections.api.application.config;

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
import org.springframework.kafka.support.serializer.JsonDeserializer;
import org.springframework.util.backoff.FixedBackOff;

import com.nubo.transformation.corrections.api.application.properties.PropertiesConfig;
import com.nubo.transformation.corrections.api.exception.ServiceException;
import com.nubo.transformation.corrections.api.exception.error.ErrorCode;
import com.nubo.transformation.corrections.api.exception.kafka.KafkaErrorBuild;
import com.nubo.transformation.corrections.api.models.dto.request.FractionEventKafkaInDto;

import lombok.RequiredArgsConstructor;

@EnableKafka
@Configuration
@RequiredArgsConstructor
public class KafkaConsumerConfig {

    private final Environment environment;
    private final PropertiesConfig propertiesConfig;

    @Bean
    public ConsumerFactory<String, FractionEventKafkaInDto> consumerFactoryKafkaNubo() {
        Map<String, Object> configProps = new HashMap<>();
        configProps.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, propertiesConfig.getKafkaNuboBootstrapServers());
        configProps.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);
        configProps.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, JsonDeserializer.class);
        configProps.put(ConsumerConfig.GROUP_ID_CONFIG, propertiesConfig.getKafkaNuboGroupId());
        configProps.put(ConsumerConfig.AUTO_OFFSET_RESET_CONFIG, propertiesConfig.getKafkaNuboAutoOffsetReset());
        configProps.put("security.protocol", propertiesConfig.getKafkaNuboSecurityProtocol());

        configProps.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, ErrorHandlingDeserializer.class);
        configProps.put(ErrorHandlingDeserializer.VALUE_DESERIALIZER_CLASS, JsonDeserializer.class);
        configProps.put(JsonDeserializer.VALUE_DEFAULT_TYPE, FractionEventKafkaInDto.class);
        configProps.put(JsonDeserializer.TRUSTED_PACKAGES, " com.nubo.transformation.corrections.api");

        if (!isLocalProfile()) {
            configProps.put("sasl.mechanism", propertiesConfig.getKafkaNuboSaslMechanism());
            configProps.put("sasl.jaas.config", propertiesConfig.getKafkaNuboSaslJaasConfig());
        }

        return new DefaultKafkaConsumerFactory<>(
                configProps,
                new StringDeserializer(),
                new ErrorHandlingDeserializer<>(new JsonDeserializer<>(FractionEventKafkaInDto.class))
        );
    }

    @Bean("kafkaNuboListenerContainerFactory")
    public ConcurrentKafkaListenerContainerFactory<String, FractionEventKafkaInDto> kafkaNuboListenerContainerFactory(
            DefaultErrorHandler errorHandler) {
        ConcurrentKafkaListenerContainerFactory<String, FractionEventKafkaInDto> factory =
                new ConcurrentKafkaListenerContainerFactory<>();
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

## src/main/java/com/nubo/transformation/corrections/api/application/config/KafkaProducerConfig.java

```java
package com.nubo.transformation.corrections.api.application.config;

import com.nubo.transformation.corrections.api.application.properties.PropertiesConfig;
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

## src/main/java/com/nubo/transformation/corrections/api/application/config/SwaggerConfig.java

```java
package com.nubo.transformation.corrections.api.application.config;
import com.nubo.transformation.corrections.api.exception.error.ErrorResponse;
import com.nubo.transformation.corrections.api.exception.error.ErrorValidation;
import com.nubo.transformation.corrections.api.models.enums.PropertiesEnum;
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

        return new OpenAPI()
                .components(new Components())
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

## src/main/java/com/nubo/transformation/corrections/api/application/config/WebConfig.java

```java
package com.nubo.transformation.corrections.api.application.config;

import java.util.Locale;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestClient;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.i18n.SessionLocaleResolver;

import com.nubo.transformation.corrections.api.application.interceptors.GlobalInterceptor;

import lombok.RequiredArgsConstructor;

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

## src/main/java/com/nubo/transformation/corrections/api/application/context/GlobalContext.java

```java
package com.nubo.transformation.corrections.api.application.context;

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

## src/main/java/com/nubo/transformation/corrections/api/application/database/NamingStrategyConfig.java

```java
package com.nubo.transformation.corrections.api.application.database;

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

## src/main/java/com/nubo/transformation/corrections/api/application/database/UpperNamingConfig.java

```java
package com.nubo.transformation.corrections.api.application.database;

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

## src/main/java/com/nubo/transformation/corrections/api/application/filters/GlobalFilter.java

```java
package com.nubo.transformation.corrections.api.application.filters;

import com.nubo.transformation.corrections.api.application.context.GlobalContext;
import com.nubo.transformation.corrections.api.application.util.ApplicationUtils;
import com.nubo.transformation.corrections.api.exception.ServiceException;
import com.nubo.transformation.corrections.api.exception.error.ErrorCode;
import com.nubo.transformation.corrections.api.exception.error.ErrorResponse;
import com.nubo.transformation.corrections.api.models.enums.PropertiesEnum;
import com.nubo.transformation.corrections.api.models.enums.VersionApiEnum;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.annotation.Order;
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
        response.getWriter().write(ApplicationUtils.convertObjectToJson(errorResponse));
        response.setStatus(exception.getHttpStatus().value());

        log.error("Error -> {}", errorResponse);
    }

}



```

## src/main/java/com/nubo/transformation/corrections/api/application/interceptors/GlobalInterceptor.java

```java
package com.nubo.transformation.corrections.api.application.interceptors;

import com.nubo.transformation.corrections.api.application.context.GlobalContext;
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

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {
        return true;
    }

}
```

## src/main/java/com/nubo/transformation/corrections/api/application/properties/PropertiesConfig.java

```java
package com.nubo.transformation.corrections.api.application.properties;

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

    @Value("${kafka.nubo.producer.topic-name}")
    private String kafkaNuboTopicNameProducer;

    @Value("${kafka.nubo.consumer.topic-name}")
    private String kafkaNuboTopicNameConsumer;

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

## src/main/java/com/nubo/transformation/corrections/api/application/properties/PropertiesContext.java

```java
package com.nubo.transformation.corrections.api.application.properties;

import com.nubo.transformation.corrections.api.application.context.GlobalContext;
import com.nubo.transformation.corrections.api.application.util.ApplicationUtils;
import com.nubo.transformation.corrections.api.models.enums.PropertiesEnum;

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



}


```

## src/main/java/com/nubo/transformation/corrections/api/application/util/ApplicationUtils.java

```java
package com.nubo.transformation.corrections.api.application.util;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.nubo.transformation.corrections.api.exception.ServiceException;
import com.nubo.transformation.corrections.api.exception.error.ErrorCode;

public class ApplicationUtils {

     private static final ObjectMapper MAPPER = new ObjectMapper();
    private static final String FORMAT_DATETIME = "yyyy-MM-dd'T'HH:mm:ss";
    private static final String FORMAT_DATE = "yyyy-MM-dd";

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

    public static String getLocalDateTimeNow() {
        return LocalDateTime.now().format(DateTimeFormatter.ofPattern(ApplicationUtils.getFormatDatetime()));
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

}

```

## src/main/java/com/nubo/transformation/corrections/api/application/util/RestClientUtils.java

```java
package com.nubo.transformation.corrections.api.application.util;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestClient;

import java.net.URI;

@Component
@RequiredArgsConstructor
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

    public void requestBodyWithNoResponse(URI url, HttpMethod method, HttpHeaders headers,
            Object requestBody) {
        restClient.method(method)
                .uri(url)
                .headers(h -> h.addAll(headers))
                .body(requestBody)
                .retrieve()
                .toBodilessEntity();
    }

    public <T> ResponseEntity<T> requestNoBodyWithResponseObject(URI url, HttpMethod method, HttpHeaders headers,
            Class<T> responseType) {
        return restClient.method(method)
                .uri(url)
                .headers(h -> h.addAll(headers))
                .retrieve()
                .toEntity(responseType);
    }

    public void requestWithNoResponse(URI url, HttpMethod method, HttpHeaders headers) {
        restClient.method(method)
                .uri(url)
                .headers(h -> h.addAll(headers))
                .retrieve()
                .toBodilessEntity();
    }

}

```

## src/main/java/com/nubo/transformation/corrections/api/client/kafka/consumer/KafkaNuboAdapterConsumer.java

```java
package com.nubo.transformation.corrections.api.client.kafka.consumer;

import java.util.List;
import java.util.Set;

import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.support.KafkaHeaders;
import org.springframework.messaging.handler.annotation.Header;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Component;
import org.springframework.util.ObjectUtils;

import com.nubo.transformation.corrections.api.application.context.GlobalContext;
import com.nubo.transformation.corrections.api.application.util.ApplicationUtils;
import com.nubo.transformation.corrections.api.models.dto.request.FractionEventKafkaInDto;
import com.nubo.transformation.corrections.api.models.dto.request.TradeCorrectionInDto;
import com.nubo.transformation.corrections.api.models.enums.PropertiesEnum;
import com.nubo.transformation.corrections.api.service.TransformationCorrectionService;

import jakarta.validation.ConstraintViolation;
import jakarta.validation.Validator;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Component
@RequiredArgsConstructor
@Slf4j
public class KafkaNuboAdapterConsumer {

    private final TransformationCorrectionService transformationCorrectionService;
    private final Validator validator;

    @KafkaListener(topics = "#{propertiesConfig.kafkaNuboTopicNameConsumer}",
            containerFactory = "kafkaNuboListenerContainerFactory")
    public void listenKafka(
            @Payload FractionEventKafkaInDto message,
            @Header(KafkaHeaders.RECEIVED_PARTITION) int partition,
            @Header(KafkaHeaders.OFFSET) long offset,
            @Header(KafkaHeaders.RECEIVED_TOPIC) String topic,
            @Header(KafkaHeaders.DELIVERY_ATTEMPT) int retry) {
        log.info("New received Message -- Topic: {} -- Partition : {} -- Offset : {} -- retry: {}",
                topic, partition, offset, retry);

        if (!validateObject(message)) {
            log.error("Validation failed for message from Topic: {} -- Partition: {} -- Offset: {}",
                    topic, partition, offset);
            return;
        }

        log.info("tradeId: {}, sideId: {}, action: {}", message.getTradeId(), message.getSideId(),
                message.getAction());

        List<TradeCorrectionInDto> corrections = message.getResponse();
        String clientUser = ObjectUtils.isEmpty(message.getClientUser()) ? topic
                : message.getClientUser();
        this.setProperties(message.getClientIp(), clientUser);

        log.info("Parsed {} corrections", corrections.size());
        transformationCorrectionService.processCorrections(message);

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

## src/main/java/com/nubo/transformation/corrections/api/client/kafka/producer/KafkaNuboAdapterProducer.java

```java
package com.nubo.transformation.corrections.api.client.kafka.producer;

import com.nubo.transformation.corrections.api.application.properties.PropertiesConfig;
import com.nubo.transformation.corrections.api.exception.ServiceException;
import com.nubo.transformation.corrections.api.exception.error.ErrorCode;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.SendResult;
import org.springframework.stereotype.Component;

import java.util.concurrent.CompletableFuture;

@Component
@RequiredArgsConstructor
@Slf4j
public class KafkaNuboAdapterProducer {

    private final PropertiesConfig propertiesConfig;
    private final KafkaTemplate<String, String> kafkaNuboTemplate;

    public void sendMessage(String message) {
        String topic = propertiesConfig.getKafkaNuboTopicNameProducer();
        CompletableFuture<SendResult<String, String>> future = kafkaNuboTemplate.send(topic, message).toCompletableFuture();

        future.thenAccept(result -> log.info("Send message -- Topic: {} -- offset: {} -- json: {} ",
                        topic, result.getRecordMetadata().offset(), message) )
                .exceptionally(ex -> {
                    throw new ServiceException(ErrorCode.ERROR_KAFKA_PRODUCER_NUBO, ex);
                });
    }
}

```

## src/main/java/com/nubo/transformation/corrections/api/exception/ServiceException.java

```java
package com.nubo.transformation.corrections.api.exception;

import com.nubo.transformation.corrections.api.exception.error.ErrorCode;
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

    public ServiceException(ErrorCode errorCode, String errorMessage) {
        super(errorCode.getMessage(), new Throwable(errorMessage));
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

## src/main/java/com/nubo/transformation/corrections/api/exception/error/ErrorCode.java

```java
package com.nubo.transformation.corrections.api.exception.error;

import lombok.Getter;

@Getter
public enum ErrorCode {

    UNAUTHORIZED("Not unauthorized"),
    ERROR_KAFKA_PRODUCER_NUBO("Error Producer Kafka Nubo"),
    ERROR_KAFKA_CONSUMER_NUBO("Error Producer Kafka Nubo"),
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
    ERROR_DESERIALIZER_JSON("Error Deserializer Json"),
    SECURITY_TITLE_NOT_FOUND("Security Title not found"),
    ISIN_NUMBER_NOT_FOUND("Isin Number not found"),
    CURRENCY_NOT_FOUND("Currency not found"),
    COUNTRY_NOT_FOUND("Country not found"),
    ERROR_NOT_FOUND("Error not found"),
    MARKET_NOT_FOUND("Market not found"),
    MANUAL_TYPE_NOT_FOUND("Manual Type not found"),
    DEPOSITORY_MAPPING_NOT_FOUND("Depository Mapping not found"),

    STATUS_NOT_FOUND("Status not found in database"),
    PARTICIPANT_CODE_NOT_FOUND("Participant Code not found in database");


    private final String message;

    ErrorCode(String message) {
        this.message = message;
    }

    public String getName() {
        return this.name();
    }

}

```

## src/main/java/com/nubo/transformation/corrections/api/exception/error/ErrorResponse.java

```java
package com.nubo.transformation.corrections.api.exception.error;

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

## src/main/java/com/nubo/transformation/corrections/api/exception/error/ErrorValidation.java

```java
package com.nubo.transformation.corrections.api.exception.error;

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

## src/main/java/com/nubo/transformation/corrections/api/exception/handler/GlobalExceptionHandler.java

```java
package com.nubo.transformation.corrections.api.exception.handler;

import java.util.List;
import java.util.Objects;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

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

import com.nubo.transformation.corrections.api.application.properties.PropertiesContext;
import com.nubo.transformation.corrections.api.exception.ServiceException;
import com.nubo.transformation.corrections.api.exception.error.ErrorCode;
import com.nubo.transformation.corrections.api.exception.error.ErrorResponse;
import com.nubo.transformation.corrections.api.exception.error.ErrorValidation;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

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

## src/main/java/com/nubo/transformation/corrections/api/exception/kafka/KafkaErrorBuild.java

```java
package com.nubo.transformation.corrections.api.exception.kafka;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

import com.nubo.transformation.corrections.api.application.properties.PropertiesConfig;
import com.nubo.transformation.corrections.api.application.util.ApplicationUtils;
import com.nubo.transformation.corrections.api.exception.error.ErrorCode;
import com.nubo.transformation.corrections.api.exception.error.ErrorResponse;
import com.nubo.transformation.corrections.api.exception.error.ErrorValidation;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

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

## src/main/java/com/nubo/transformation/corrections/api/helpers/OperacionCorregidaContext.java

```java
package com.nubo.transformation.corrections.api.helpers;

import java.util.List;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class OperacionCorregidaContext {

    private List<String> operationNumbers;
    private Integer sellDepositorCodeMapped;
    private Integer buyDepositorCodeMapped;
    private String deposit;

}
```

## src/main/java/com/nubo/transformation/corrections/api/helpers/OperacionCorregidaOutMapper.java

```java
package com.nubo.transformation.corrections.api.helpers;

import com.nubo.transformation.corrections.api.exception.ServiceException;
import com.nubo.transformation.corrections.api.exception.error.ErrorCode;
import com.nubo.transformation.corrections.api.models.dto.request.TradeCorrectionInDto;
import com.nubo.transformation.corrections.api.models.dto.response.OperacionCorregidaOutDto;
import com.nubo.transformation.corrections.api.models.entity.ParticipantEntity;
import com.nubo.transformation.corrections.api.models.entity.SettlementEntity;
import com.nubo.transformation.corrections.api.models.entity.TradeEntity;
import com.nubo.transformation.corrections.api.models.enums.CorrectionsEnum;
import com.nubo.transformation.corrections.api.models.enums.SideEnum;

import lombok.experimental.UtilityClass;

import java.math.BigDecimal;
import java.math.MathContext;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@UtilityClass
public class OperacionCorregidaOutMapper {

    private static final DateTimeFormatter DATE_FORMAT = DateTimeFormatter.ofPattern("yyyyMMdd");

    public List<OperacionCorregidaOutDto> mapToOperacionCorregidaDtos(TradeCorrectionInDto kafkaCorrection,
                                                                      TradeEntity trade,
                                                                      List<SettlementEntity> settlementsOpuesta,
                                                                      SettlementEntity settlementCorregido,
                                                                      SideEnum currentSide,
                                                                      OperacionCorregidaContext context) {

        List<OperacionCorregidaOutDto> result = new ArrayList<>();

        boolean fraccionar = SideEnum.BUY.equals(currentSide) && settlementsOpuesta.size() > 1;

        BigDecimal totalFraction = settlementCorregido.getFractionQuantity();
        BigDecimal totalAmount = settlementCorregido.getSettlementAmount();

        BigDecimal totalFraccionesOpuestas = settlementsOpuesta.stream()
                .map(SettlementEntity::getFractionQuantity)
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        for (int i = 0; i < settlementsOpuesta.size(); i++) {
            SettlementEntity puntaOpuesta = settlementsOpuesta.get(i);
            String operationNumber = context.getOperationNumbers().get(i);

            String cuentaVendedor = kafkaCorrection.getInvestorAccount() != null
                    ? kafkaCorrection.getInvestorAccount().getAccountNumber()
                    : null;

            String cuentaComprador = puntaOpuesta.getInvestorAccount() != null
                    ? puntaOpuesta.getInvestorAccount().getAccountNumber()
                    : null;

            if (SideEnum.SELL.equals(currentSide)) {
                String tmp = cuentaVendedor;
                cuentaVendedor = cuentaComprador;
                cuentaComprador = tmp;
            }

            String isinCode = trade.getSecurityTitle() != null
                    ? trade.getSecurityTitle().getIsin()
                    : null;

            if (isinCode == null) {
                throw new ServiceException(
                        ErrorCode.SECURITY_TITLE_NOT_FOUND,
                        new RuntimeException("El equityCode del SecurityTitle no puede ser nulo")
                );
            }

            BigDecimal proporcion = BigDecimal.ZERO;
            if (fraccionar && totalFraccionesOpuestas.compareTo(BigDecimal.ZERO) > 0) {
                proporcion = puntaOpuesta.getFractionQuantity().divide(totalFraccionesOpuestas, MathContext.DECIMAL64);
            }

            BigDecimal unitValue = fraccionar
                    ? totalFraction.multiply(proporcion, MathContext.DECIMAL64)
                    : BigDecimal.valueOf(kafkaCorrection.getFractionQuantity());

            BigDecimal cashValue = fraccionar
                    ? totalAmount.multiply(proporcion, MathContext.DECIMAL64)
                    : BigDecimal.valueOf(kafkaCorrection.getSettlementAmount());

            Integer sellCustodianCode = toIntId(puntaOpuesta.getCustodian());
            if (sellCustodianCode == null) {
                sellCustodianCode = toIntId(puntaOpuesta.getDirectDepositor());
            }

            Integer buyCustodianCode = toIntId(trade.getCustodianBuy());
            if (buyCustodianCode == null) {
                buyCustodianCode = toIntId(trade.getParticipantBuy());
            }

            OperacionCorregidaOutDto dto = OperacionCorregidaOutDto.builder()
                    .operationIndicator(CorrectionsEnum.OPERATION_INDICATOR.getValue())
                    .plazaCode(CorrectionsEnum.PLAZA_CODE.getValue())
                    .operationMode(CorrectionsEnum.OPERATION_MODE.getValue())
                    .operationRegistrationDate(trade.getMatchDate() != null ? trade.getMatchDate().format(DATE_FORMAT) : null)
                    .operationNumber(operationNumber)
                    .processType(CorrectionsEnum.PROCESS_TYPE.getValue())
                    .countedSettlementType(CorrectionsEnum.COUNTED_SETTLEMENT_TYPE.getValue())
                    .termSettlementType(CorrectionsEnum.TERM_SETTLEMENT_TYPE.getValue())
                    .countedSettlementDate(trade.getClearingDate() != null ? trade.getClearingDate().format(DATE_FORMAT) : null)
                    .termSettlementDate(trade.getClearingDate() != null ? trade.getClearingDate().format(DATE_FORMAT) : null)
                    .sellDepositorCode(context.getSellDepositorCodeMapped())//
                    .sellCustodianCode(sellCustodianCode)
                    .sellInvestorAccount(cuentaVendedor)
                    .sellCud(Integer.toString(CorrectionsEnum.SELL_CUD.getValue()))
                    .buyDepositorCode(context.getBuyDepositorCodeMapped())//
                    .buyCustodianCode(buyCustodianCode)
                    .buyInvestorAccount(cuentaComprador)
                    .buyCud(Integer.toString(CorrectionsEnum.BUY_CUD.getValue()))
                    .isin(isinCode)
                    .deposit(context.getDeposit())
                    .unitValue(unitValue)
                    .cashValue(cashValue)
                    .currencyCode(CorrectionsEnum.CURRENCY_CODE.getValue())
                    .buySettlementIndicator(CorrectionsEnum.BUY_SETTLEMENT_INDICATOR.getValue())
                    .sellSettlementIndicator(CorrectionsEnum.SELL_SETTLEMENT_INDICATOR.getValue())
                    .referencePlazaCode(CorrectionsEnum.REFERENCE_PLAZA_CODE.getValue())
                    .referenceOperationMode(CorrectionsEnum.REFERENCE_OPERATION_MODE.getValue())
                    .referenceOperationRegistrationDate(LocalDate.now().format(DATE_FORMAT))
                    .referenceOperationNumber(trade.getMatchId() != null ? trade.getMatchId().toString() : null)
                    .build();

            result.add(dto);
        }

        return result;

    }

    private static Integer toIntId(ParticipantEntity participant) {
        return participant != null && participant.getId() != null
                ? participant.getId().intValue()
                : null;
    }

}

```

## src/main/java/com/nubo/transformation/corrections/api/models/dto/request/CityInDto.java

```java
package com.nubo.transformation.corrections.api.models.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
class CityInDto {

    private Long id;

    private String description;
}

```

## src/main/java/com/nubo/transformation/corrections/api/models/dto/request/CountryInDto.java

```java
package com.nubo.transformation.corrections.api.models.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
class CountryInDto {
    private Long id;
    private String code;
    private String name;
    private CurrencyInDto currency;
    private String timeZone;
}

```

## src/main/java/com/nubo/transformation/corrections/api/models/dto/request/CurrencyInDto.java

```java
package com.nubo.transformation.corrections.api.models.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
class CurrencyInDto {
    private Long id;
    private String code;
    private String name;
}

```

## src/main/java/com/nubo/transformation/corrections/api/models/dto/request/CustodianInDto.java

```java
package com.nubo.transformation.corrections.api.models.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
class CustodianInDto {
    private ParticipantInDto participant;
}

```

## src/main/java/com/nubo/transformation/corrections/api/models/dto/request/DepartmentInDto.java

```java
package com.nubo.transformation.corrections.api.models.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
class DepartmentInDto {
    private String id;
    private String description;
}

```

## src/main/java/com/nubo/transformation/corrections/api/models/dto/request/DepositoryInDto.java

```java
package com.nubo.transformation.corrections.api.models.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
class DepositoryInDto {
    private String id;
    private String description;
}

```

## src/main/java/com/nubo/transformation/corrections/api/models/dto/request/DirectDepositorInDto.java

```java
package com.nubo.transformation.corrections.api.models.dto.request;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class DirectDepositorInDto {
    private Long id;
    private String code;
    private String documentNumber;
    private IdentificationTypeInDto identificationType;
    private String name;
    private String shortName;
    private TypeInDto type;
    private String mnemonic;
    private CountryInDto country;
    private String registrationDate;
    private String taxCode;
    private DepartmentInDto department;
    private String mainAddress;
    private String webPage;
    private String phoneNumber;
    private StatusInDto status;
    private String nitClearingHouse;
    private StatusInDto taxStatus;
    private String typeEntity;
    private String marginAccount;
    private String masterAccount;
    private String directAllocation;
    private String marketMaker;
    private Boolean enabled;
    private Boolean custodian;
}

```

## src/main/java/com/nubo/transformation/corrections/api/models/dto/request/EntityTypeInDto.java

```java
package com.nubo.transformation.corrections.api.models.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
class EntityTypeInDto {
    private Long id;
    private String description;
    private String category;
}

```

## src/main/java/com/nubo/transformation/corrections/api/models/dto/request/FractionEventKafkaInDto.java

```java
package com.nubo.transformation.corrections.api.models.dto.request;

import java.time.LocalDateTime;
import java.util.List;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class FractionEventKafkaInDto {

    @NotNull
    private String clientIp;

    private String clientUser;

    @NotNull
    private LocalDateTime clientDateTime;

    @NotNull
    private Long tradeId;

    @NotNull
    private String sideId;

    private String action;

    @Valid
    private List<PayloadInDto> payload;

    @Valid
    private List<TradeCorrectionInDto> response;

    @Valid
    private List<TradeCorrectionInDto> previous;

}

```

## src/main/java/com/nubo/transformation/corrections/api/models/dto/request/GicsInDto.java

```java
package com.nubo.transformation.corrections.api.models.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
class GicsInDto {
    private Long id;
    private String description;
}

```

## src/main/java/com/nubo/transformation/corrections/api/models/dto/request/IdentificationTypeInDto.java

```java
package com.nubo.transformation.corrections.api.models.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
class IdentificationTypeInDto {
    private Long id;
    private String description;
}
```

## src/main/java/com/nubo/transformation/corrections/api/models/dto/request/InvestorAccountInDto.java

```java
package com.nubo.transformation.corrections.api.models.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class InvestorAccountInDto {
    private Long id;
    private InvestorInDto investor;
    private String accountNumber;
    private StatusInDto status;
    private Object originType;
    private TypeInDto type;
    private DepositoryInDto depository;
    private ParticipantInDto participant;
}
```

## src/main/java/com/nubo/transformation/corrections/api/models/dto/request/InvestorInDto.java

```java
package com.nubo.transformation.corrections.api.models.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class InvestorInDto {
    private Long id;
    private String code;
    private String firstName;
    private String lastName;
    private String companyName;
    private TypeInDto type;
    private StatusInDto status;
    private CountryInDto country;
    private DepartmentInDto department;
    private CityInDto city;
    private String documentNumber;
    private IdentificationTypeInDto identificationType;
    private String nationality;
    private String address;
    private String phoneNumber;
    private String email;
    private String clearinghouseCode;
    private GicsInDto gics;
    private Boolean moneyLaunderingFlag;
    private TaxStatusInDto taxStatus;
}

```

## src/main/java/com/nubo/transformation/corrections/api/models/dto/request/ParticipantAccountInDto.java

```java
package com.nubo.transformation.corrections.api.models.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
class ParticipantAccountInDto {
    private Long id;
    private ParticipantInDto participant;
    private String accountNumber;
    private StatusInDto status;
    private EntityTypeInDto type;
    private EntityTypeInDto originType;
}
```

## src/main/java/com/nubo/transformation/corrections/api/models/dto/request/ParticipantInDto.java

```java
package com.nubo.transformation.corrections.api.models.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
class ParticipantInDto {
    private Long id;
    private String code;
    private String documentNumber;
    private IdentificationTypeInDto identificationType;
    private String name;
    private String shortName;
    private TypeInDto type;
    private String mnemonic;
    private CountryInDto country;
    private String registrationDate;
    private String taxCode;
    private DepartmentInDto department;
    private String mainAddress;
    private String webPage;
    private String phoneNumber;
    private StatusInDto status;
    private String nitClearingHouse;
    private StatusInDto taxStatus;
    private String typeEntity;
    private String marginAccount;
    private String masterAccount;
    private String directAllocation;
    private String marketMaker;
    private Boolean enabled;
    private Boolean custodian;
}
```

## src/main/java/com/nubo/transformation/corrections/api/models/dto/request/PayloadInDto.java

```java
package com.nubo.transformation.corrections.api.models.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PayloadInDto {
    private Integer fraction;
    private Long investorAccountId;
    private Long participantAccountId;
    private Boolean fiduciarySpecialist;
    private Integer sourceQuoteTypeId;
    private String reference;
    private Integer fractionQuantity;
    private Integer commissionPercentage;
    private Integer valTax;
}

```

## src/main/java/com/nubo/transformation/corrections/api/models/dto/request/QuoteTypeInDto.java

```java
package com.nubo.transformation.corrections.api.models.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
class QuoteTypeInDto {
    private Long id;
    private String description;
    private String category;
}
```

## src/main/java/com/nubo/transformation/corrections/api/models/dto/request/SideInDto.java

```java
package com.nubo.transformation.corrections.api.models.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SideInDto {
    private String id;
    private String description;
}

```

## src/main/java/com/nubo/transformation/corrections/api/models/dto/request/SourceQuoteTypeInDto.java

```java
package com.nubo.transformation.corrections.api.models.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SourceQuoteTypeInDto {
    private Integer id;
    private String description;
    private String category;
}

```

## src/main/java/com/nubo/transformation/corrections/api/models/dto/request/StatusInDto.java

```java
package com.nubo.transformation.corrections.api.models.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
class StatusInDto {
    private Integer id;
    private String description;
    private String category;
}

```

## src/main/java/com/nubo/transformation/corrections/api/models/dto/request/TaxStatusInDto.java

```java
package com.nubo.transformation.corrections.api.models.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
class TaxStatusInDto {
    private Long id;
    private String description;
}

```

## src/main/java/com/nubo/transformation/corrections/api/models/dto/request/TradeCorrectionInDto.java

```java
package com.nubo.transformation.corrections.api.models.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TradeCorrectionInDto {

    private Long tradeId;
    private Integer fraction;
    private SideInDto side;
    private InvestorInDto investor;
    private InvestorAccountInDto investorAccount;
    private ParticipantAccountInDto participantAccount;
    private Integer fractionQuantity;
    private Double fractionVolume;
    private Boolean fiduciarySpecialist;
    private Integer commissionPercentage;
    private Double commissionAmount;
    private Integer valTax;
    private Double valTaxAmount;
    private Double withholdingTax;
    private Double withholdingTaxAmount;
    private Double netAmount;
    private Double transferValue;
    private Boolean issuedReceipt;
    private String issuedReceiptNumber;
    private Integer referenceAllocId;
    private Double repoAmount;
    private Double fundingAmount;
    private Double netOutFlowTotal;
    private Double outFlowTurnoverValue;
    private Double returnTurnoverValue;
    private Double deliveryVersusPaymentValue;
    private Double settlementAmount;
    private TradingSystemInDto tradingSystem;
    private StatusInDto status;
    private Double brokerageService;
    private Long custodianId;
    private CustodianInDto custodian;
    private Long bankAccountId;
    private String reference;
    private Double capitalGainValue;
    private Double disbursementValue;
    private SourceQuoteTypeInDto sourceQuoteType;
    private Long ficAdministratorId;
    private DirectDepositorInDto directDepositor;
    private Boolean jointAccount;
    private Boolean masterAccount;
}

```

## src/main/java/com/nubo/transformation/corrections/api/models/dto/request/TradingSystemInDto.java

```java
package com.nubo.transformation.corrections.api.models.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
class TradingSystemInDto {
    private Long id;
    private String description;
}

```

## src/main/java/com/nubo/transformation/corrections/api/models/dto/request/TypeInDto.java

```java
package com.nubo.transformation.corrections.api.models.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TypeInDto {
    private Integer id;
    private String description;
    private String category;
}
```

## src/main/java/com/nubo/transformation/corrections/api/models/dto/response/OperacionCorregidaOutDto.java

```java
package com.nubo.transformation.corrections.api.models.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OperacionCorregidaOutDto {

    private Integer operationIndicator;
    private Integer plazaCode;
    private Integer operationMode;
    private String operationRegistrationDate;
    private String operationNumber;
    private Integer processType;
    private Integer countedSettlementType;
    private Integer termSettlementType;
    private String countedSettlementDate;
    private String termSettlementDate;
    private Integer sellDepositorCode;
    private Integer sellCustodianCode;
    private String sellInvestorAccount;
    private String sellCud;
    private Integer buyDepositorCode;
    private Integer buyCustodianCode;
    private String buyInvestorAccount;
    private String buyCud;
    private String isin;
    private String deposit;
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

## src/main/java/com/nubo/transformation/corrections/api/models/dto/response/TransformacionesCorreccionesKafkaOutDto.java

```java
package com.nubo.transformation.corrections.api.models.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TransformacionesCorreccionesKafkaOutDto {
    private OperacionCorregidaOutDto operacionCorregida;
}
```

## src/main/java/com/nubo/transformation/corrections/api/models/entity/CfiEntity.java

```java
package com.nubo.transformation.corrections.api.models.entity;

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

## src/main/java/com/nubo/transformation/corrections/api/models/entity/CityEntity.java

```java
package com.nubo.transformation.corrections.api.models.entity;

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

## src/main/java/com/nubo/transformation/corrections/api/models/entity/CountryEntity.java

```java
package com.nubo.transformation.corrections.api.models.entity;

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

## src/main/java/com/nubo/transformation/corrections/api/models/entity/CurrencyEntity.java

```java
package com.nubo.transformation.corrections.api.models.entity;

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

## src/main/java/com/nubo/transformation/corrections/api/models/entity/DailyOperationCounterEntity.java

```java
package com.nubo.transformation.corrections.api.models.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"DAILY_OPERATION_COUNTER\"", schema = "\"NUANBODB\"")
public class DailyOperationCounterEntity {

    @Id
    @Column(name = "\"OPERATION_DATE\"", nullable = false)
    private LocalDate operationDate;

    @Column(name = "\"COUNTER\"", nullable = false)
    private Integer counter;
}

```

## src/main/java/com/nubo/transformation/corrections/api/models/entity/DepartmentEntity.java

```java
package com.nubo.transformation.corrections.api.models.entity;

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

## src/main/java/com/nubo/transformation/corrections/api/models/entity/DepositoryEntity.java

```java
package com.nubo.transformation.corrections.api.models.entity;

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

## src/main/java/com/nubo/transformation/corrections/api/models/entity/DepositoryMappingEntity.java

```java
package com.nubo.transformation.corrections.api.models.entity;

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
@Table(name = "\"DEPOSITORY_MAPPING\"", schema = "\"NUANBODB\"")
public class DepositoryMappingEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"DEPOSITORY_MAPPING_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"EXTERNAL_SYSTEM\"", nullable = false, length = 30)
    private String externalSystem;

    @Column(name = "\"EXTERNAL_CODE\"", length = 20)
    private String externalCode;

    @Column(name = "\"EXTERNAL_DESCRIPTION\"", nullable = false, length = 255)
    private String externalDescription;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"DEPOSITORY_ID\"", nullable = false)
    private DepositoryEntity depository;

    @Column(name = "\"LAST_MODIFY_USER\"", nullable = false, length = 250)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", nullable = false, length = 250)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", nullable = false, length = 50)
    private String lastModifyIp;

    @Column(name = "\"CATEGORY\"", length = 30)
    private String category;
}

```

## src/main/java/com/nubo/transformation/corrections/api/models/entity/DirectDepositoryEntity.java

```java
package com.nubo.transformation.corrections.api.models.entity;

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
@Table(name = "\"DIRECT_DEPOSITORY\"", schema = "\"NUANBODB\"")
public class DirectDepositoryEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"DIRECT_DEPOSITORY_ID\"", nullable = false)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"PARTICIPANT_ID\"", nullable = false)
    private ParticipantEntity participant;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"DEPOSITORY_ID\"", nullable = false)
    private DepositoryEntity depository;

    @Column(name = "\"DIRECT_DEPOSITORY_NUMBER\"", length = 80)
    private String directDepositoryNumber;

    @Column(name = "\"LAST_MODIFY_USER\"", nullable = false, length = 250)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", nullable = false, length = 250)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", nullable = false, length = 50)
    private String lastModifyIp;
}

```

## src/main/java/com/nubo/transformation/corrections/api/models/entity/GicsEntity.java

```java
package com.nubo.transformation.corrections.api.models.entity;

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

## src/main/java/com/nubo/transformation/corrections/api/models/entity/IdentificationTypeEntity.java

```java
package com.nubo.transformation.corrections.api.models.entity;

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

## src/main/java/com/nubo/transformation/corrections/api/models/entity/InvestorAccountEntity.java

```java
package com.nubo.transformation.corrections.api.models.entity;

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
    @JoinColumn(name = "\"ORIGIN_TYPE_ID\"", nullable = false)
    private TypeEntity originType;

    @ManyToOne
    @JoinColumn(name = "\"TYPE_ID\"")
    private TypeEntity type;

    @ManyToOne
    @JoinColumn(name = "\"DEPOSITORY_ID\"")
    private DepositoryEntity depository;

    @ManyToOne
    @JoinColumn(name = "\"PARTICIPANT_ID\"", nullable = false)
    private ParticipantEntity participant;

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

## src/main/java/com/nubo/transformation/corrections/api/models/entity/InvestorEntity.java

```java
package com.nubo.transformation.corrections.api.models.entity;

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

## src/main/java/com/nubo/transformation/corrections/api/models/entity/IsinNumberEntity.java

```java
package com.nubo.transformation.corrections.api.models.entity;

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
@Table(name = "\"ISIN_NUMBER\"", schema = "\"NUANBODB\"")
public class IsinNumberEntity {

    @Id
    @Column(name = "\"ISIN_NUMBER_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"ISIN_NUMBER\"", length = 100, nullable = false)
    private String isinNumber;

    @Column(name = "\"COUNTRY_ID\"", nullable = false)
    private Long countryId;

    @Column(name = "\"MARKET_ID\"", length = 2, nullable = false)
    private String marketId;

    @Column(name = "\"CURRENCY_ID\"", nullable = false)
    private Long currencyId;

    @Column(name = "\"SECURITY_ID\"", nullable = false)
    private Long securityId;

    @Column(name = "\"DESCRIPTION\"", length = 255)
    private String description;

    @Column(name = "\"ISSUE_DATE\"")
    private LocalDate issueDate;

    @Column(name = "\"MATURITY_DATE\"")
    private LocalDate maturityDate;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 250, nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50, nullable = false)
    private String lastModifyIp;

    @Column(name = "\"DURATION\"")
    private Integer duration;

    @Column(name = "\"CREDIT_RATING\"", length = 5)
    private String creditRating;

    @Column(name = "\"SPREAD\"", precision = 5, scale = 2)
    private BigDecimal spread;

    @Column(name = "\"RATE_VALUE\"", precision = 5, scale = 2)
    private BigDecimal rateValue;

    @Column(name = "\"USE_RATE_CONDITION_ID\"")
    private Long useRateConditionId;

    @Column(name = "\"PERIODICITY_CONDITION_ID\"")
    private Long periodicityConditionId;

    @Column(name = "\"PAYMENT_CONDITION_ID\"")
    private Long paymentConditionId;

    @Column(name = "\"RATE_CONDITION_ID\"")
    private Long rateConditionId;

    @Column(name = "\"DEPOSITORY_ID\"", length = 2)
    private String depositoryId;

    @Column(name = "\"MINIMUM_INVESTMENT\"", precision = 16, scale = 4)
    private BigDecimal minimumInvestment;

    @Column(name = "\"FRACTIONATION_MULTIPLE\"", precision = 16, scale = 4)
    private BigDecimal fractionationMultiple;
}

```

## src/main/java/com/nubo/transformation/corrections/api/models/entity/MarketEntity.java

```java
package com.nubo.transformation.corrections.api.models.entity;

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

## src/main/java/com/nubo/transformation/corrections/api/models/entity/ParticipantAccountEntity.java

```java
package com.nubo.transformation.corrections.api.models.entity;

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

    @ManyToOne
    @JoinColumn(name = "\"ORIGIN_TYPE_ID\"", nullable = false)
    private TypeEntity originType;

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

## src/main/java/com/nubo/transformation/corrections/api/models/entity/ParticipantCodeEntity.java

```java
package com.nubo.transformation.corrections.api.models.entity;


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
@Table(name = "\"PARTICIPANT_CODE\"", schema = "\"NUANBODB\"")
public class ParticipantCodeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"PARTICIPANT_CODE_ID\"", nullable = false)
    private Long participantCodeId;

    @Column(name = "\"NUAM_CODE\"", nullable = false, length = 6)
    private String nuamCode;

    @Column(name = "\"INTO_DEPOSITORY_CODE\"")
    private Integer intoDepositoryCode;

    @Column(name = "\"CRCC_NEGOTIATOR_CODE\"", length = 18)
    private String crccNegotiatorCode;

    @Column(name = "\"CRCC_COMPENSATOR_CODE\"", length = 18)
    private String crccCompensatorCode;

    @Column(name = "\"CRCC_CUSTODIAN_CODE\"", length = 18)
    private String crccCustodianCode;

    @Column(name = "\"LAST_MODIFY_USER\"", nullable = false, length = 250)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", nullable = false, length = 250)
    private String lastModifyApplic;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", nullable = false, length = 50)
    private String lastModifyIp;


}


```

## src/main/java/com/nubo/transformation/corrections/api/models/entity/ParticipantEntity.java

```java
package com.nubo.transformation.corrections.api.models.entity;

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

    @Column(name = "\"CODE\"", nullable = false)
    private String code;

    @Column(name = "\"IDENTIFICATION_TYPE_ID\"", nullable = false)
    private Integer identificationTypeId;

    @Column(name = "\"NAME\"", nullable = false)
    private String name;

    @Column(name = "\"SHORT_NAME\"", nullable = false)
    private String shortName;

    @Column(name = "\"TYPE_ID\"", nullable = false)
    private Integer typeId;

    @Column(name = "\"MNEMONIC\"", length = 4)
    private String mnemonic;

    @Column(name = "\"COUNTRY_ID\"", nullable = false)
    private Long countryId;

    @Column(name = "\"REGISTRATION_DATE\"")
    private LocalDate registrationDate;

    @Column(name = "\"TAX_CODE\"", length = 20)
    private String taxCode;

    @Column(name = "\"DEPARTMENT_ID\"", length = 20)
    private String departmentId;

    @Column(name = "\"MAIN_ADDRESS\"", length = 100)
    private String mainAddress;

    @Column(name = "\"WEB_PAGE\"", length = 100)
    private String webPage;

    @Column(name = "\"PHONE_NUMBER\"", length = 20)
    private String phoneNumber;

    @Column(name = "\"STATUS_ID\"")
    private Integer statusId;

    @Column(name = "\"TAX_STATUS_ID\"")
    private Integer taxStatusId;

    @Column(name = "\"TYPE_ENTITY\"", length = 1)
    private String typeEntity;

    @Column(name = "\"MASTER_ACCOUNT\"", length = 1)
    private String masterAccount;

    @Column(name = "\"MARKET_MAKER\"", length = 1)
    private String marketMaker;

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

## src/main/java/com/nubo/transformation/corrections/api/models/entity/SecurityTitleEntity.java

```java
package com.nubo.transformation.corrections.api.models.entity;

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

## src/main/java/com/nubo/transformation/corrections/api/models/entity/SettlementEntity.java

```java
package com.nubo.transformation.corrections.api.models.entity;

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

    @ManyToOne
    @JoinColumn(name = "\"CUSTODIAN_ID\"")
    private ParticipantEntity custodian;

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

    @ManyToOne
    @JoinColumn(name = "\"DIRECT_DEPOSITOR\"")
    private ParticipantEntity directDepositor;

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

## src/main/java/com/nubo/transformation/corrections/api/models/entity/SettlementInstructionsEntity.java

```java
package com.nubo.transformation.corrections.api.models.entity;

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
@Table(name = "\"SETTLEMENT_INSTRUCTIONS\"", schema = "\"NUANBODB\"")
public class SettlementInstructionsEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"SETTLEMENT_INSTRUCTIONS_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"TRADE_ID\"", nullable = false)
    private Long tradeId;

    @Column(name = "\"FRACTION\"")
    private Integer fraction;

    @Column(name = "\"PARTICIPANT_SELL_ID\"", nullable = false)
    private Long participantSellId;

    @Column(name = "\"CUSTODIAN_SELL_ID\"")
    private Long custodianSellId;

    @Column(name = "\"INVESTOR_SELL_ID\"", nullable = false)
    private Long investorSellId;

    @Column(name = "\"INVESTOR_ACCOUNT_SELL_ID\"", nullable = false)
    private Long investorAccountSellId;

    @Column(name = "\"PARTICIPANT_BUY_ID\"", nullable = false)
    private Long participantBuyId;

    @Column(name = "\"CUSTODIAN_BUY_ID\"")
    private Long custodianBuyId;

    @Column(name = "\"INVESTOR_BUY_ID\"", nullable = false)
    private Long investorBuyId;

    @Column(name = "\"INVESTOR_ACCOUNT_BUY_ID\"", nullable = false)
    private Long investorAccountBuyId;

    @Column(name = "\"COUNTRY_ID\"", nullable = false)
    private Long countryId;

    @Column(name = "\"DEPOSITORY_ID\"", nullable = false)
    private String depositoryId;

    @Column(name = "\"ISIN_NUMBER_ID\"", nullable = false)
    private Long isinNumberId;

    @Column(name = "\"SECURITY_ID\"", nullable = false)
    private Long securityId;

    @Column(name = "\"CURRENCY_ID\"", nullable = false)
    private Long currencyId;

    @Column(name = "\"QUANTITY\"", precision = 16, scale = 4)
    private BigDecimal quantity;

    @Column(name = "\"AMOUNT\"", precision = 16, scale = 4)
    private BigDecimal amount;

    @Column(name = "\"REFERENCE_TRANSACTION_DATE\"")
    private LocalDate referenceTransactionDate;

    @Column(name = "\"REFERENCE_TRANSACTION_NUMBER\"", length = 30)
    private String referenceTransactionNumber;

    @Column(name = "\"LAST_MODIFY_USER\"", nullable = false, length = 250)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", nullable = false, length = 250)
    private String lastModifyApplic;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", nullable = false, length = 50)
    private String lastModifyIp;
}

```

## src/main/java/com/nubo/transformation/corrections/api/models/entity/SettlementKey.java

```java
package com.nubo.transformation.corrections.api.models.entity;

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

## src/main/java/com/nubo/transformation/corrections/api/models/entity/SideEntity.java

```java
package com.nubo.transformation.corrections.api.models.entity;

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

## src/main/java/com/nubo/transformation/corrections/api/models/entity/StatusEntity.java

```java
package com.nubo.transformation.corrections.api.models.entity;

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
    @Column(name = "\"STATUS_ID\"")
    private Integer id;

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

## src/main/java/com/nubo/transformation/corrections/api/models/entity/TaxStatusEntity.java

```java
package com.nubo.transformation.corrections.api.models.entity;

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

## src/main/java/com/nubo/transformation/corrections/api/models/entity/TradeEntity.java

```java
package com.nubo.transformation.corrections.api.models.entity;

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

    @Column(name = "\"MATCH_DATE\"", nullable = false)
    private LocalDate matchDate;

    @Column(name = "\"MATCH_ID\"", precision = 19, nullable = false)
    private Long matchId;

    @Column(name = "\"CLEARING_DATE\"", nullable = false)
    private LocalDate clearingDate;

    @Column(name = "\"RETURN_CLEARING_DATE\"", nullable = false)
    private LocalDate returnClearingDate;

    @ManyToOne
    @JoinColumn(name = "\"DEPOSITORY_ID\"", nullable = false)
    private DepositoryEntity depository;

    @ManyToOne
    @JoinColumn(name = "\"COUNTRY_ID\"", nullable = false)
    private CountryEntity country;

    @ManyToOne
    @JoinColumn(name = "\"TYPE_ID\"", nullable = false)
    private TypeEntity type;

    @ManyToOne
    @JoinColumn(name="\"MARKET_ID\"", nullable = false)
    private MarketEntity market;

    @ManyToOne
    @JoinColumn(name="\"ISSUANCE_MARKET_ID\"", nullable = false)
    private MarketEntity issuanceMarket;

    @ManyToOne
    @JoinColumn(name = "\"SECURITY_ID\"", nullable = false)
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

    @Column(name = "\"ASSIGNMENT_MARK_BUY\"", nullable = false)
    private Boolean assignmentMarkBuy;

    @Column(name = "\"ASSIGNMENT_MARK_SELL\"", nullable = false)
    private Boolean assignmentMarkSell;

    @Column(name = "\"FRACTIONAL_MARK_BUY\"", nullable = false)
    private Boolean fractionalMarkBuy;

    @Column(name = "\"FRACTIONAL_MARK_SELL\"", nullable = false)
    private Boolean fractionalMarkSell;

    @Column(name = "\"ADVANCE_STATUS\"", nullable = false)
    private Integer advanceStatus;

    @Column(name = "\"EXIT_INDICATOR_SETTLEMENT\"", nullable = false)
    private Boolean exitIndicatorSettlement;

    @Column(name = "\"CANCELED_STATUS\"", nullable = false)
    private Boolean canceledStatus;

    @Column(name = "\"QUANTITY\"", precision = 16, scale = 4, nullable = false)
    private BigDecimal quantity;

    @Column(name = "\"PRICE\"", precision = 16, scale = 6, nullable = false)
    private BigDecimal price;

    @Column(name = "\"VOLUME\"", precision = 16, scale = 4, nullable = false)
    private BigDecimal volume;

    @Column(name = "\"REPURCHASE_RATE\"", precision = 6, scale = 4, nullable = false)
    private BigDecimal repurchaseRate;

    @Column(name = "\"REPURCHASE_AMOUNT\"", precision = 16, scale = 4, nullable = false)
    private BigDecimal repurchaseAmount;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"", nullable = false)
    private StatusEntity status;

    @Column(name = "\"MATCH_TIME\"", nullable = false)
    private LocalDateTime matchTime;

    @Column(name = "\"OWN_POSITION_SELL\"")
    private Boolean ownPositionSell;

    @Column(name = "\"OWN_POSITION_BUY\"")
    private Boolean ownPositionBuy;

    @ManyToOne
    @JoinColumn(name = "\"CURRENCY_ID\"", nullable = false)
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

    @Column(name = "\"SETTLEMENT_INDICATOR_OUTGOING\"")
    private Boolean settlementIndicatorOutgoing;

    @Column(name = "\"SETTLEMENT_INDICATOR_RETURN\"")
    private Boolean settlementIndicatorReturn;

    @Column(name = "\"RESETTLEMENT_INDICATOR_ADVANCE\"")
    private Boolean resettlementIndicatorAdvance;

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

    @Column(name = "\"SALES_GUARANTEE\"")
    private Boolean salesGuarantee;

    @Column(name = "\"PURCHASE_GUARANTEE\"")
    private Boolean purchaseGuarantee;

    @Column(name = "\"PURCHASE_PAYMENT_INDICATOR\"")
    private Boolean purchasePaymentIndicator;

    @Column(name = "\"RETURN_INDICATOR_SETTLEMENT\"")
    private Boolean returnIndicatorSettlement;

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

## src/main/java/com/nubo/transformation/corrections/api/models/entity/TradingSessionEntity.java

```java
package com.nubo.transformation.corrections.api.models.entity;

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

## src/main/java/com/nubo/transformation/corrections/api/models/entity/TradingSystemEntity.java

```java
package com.nubo.transformation.corrections.api.models.entity;

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

## src/main/java/com/nubo/transformation/corrections/api/models/entity/TypeEntity.java

```java
package com.nubo.transformation.corrections.api.models.entity;

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

## src/main/java/com/nubo/transformation/corrections/api/models/entity/UserNuboEntity.java

```java
package com.nubo.transformation.corrections.api.models.entity;

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
@Table(name = "\"USER_NUBO\"", schema = "\"NUANBODB\"")
public class UserNuboEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"USER_NUBO_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"USER_NAME\"", unique = true, length = 80, nullable = false)
    private String userName;

    @Column(name = "\"USER_TYPE\"", length = 20)
    private String userType;

    @Column(name = "\"PREVIOUS_SESSION\"")
    private Boolean previousSession;

    @ManyToOne
    @JoinColumn(name = "\"PARTICIPANT_ID\"", nullable = false)
    private ParticipantEntity participant;

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

## src/main/java/com/nubo/transformation/corrections/api/models/enums/CorrectionsEnum.java

```java
package com.nubo.transformation.corrections.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum CorrectionsEnum {
    OPERATION_INDICATOR(1),
    PLAZA_CODE(7),
    OPERATION_MODE(1),
    PROCESS_TYPE(0),
    COUNTED_SETTLEMENT_TYPE(1),
    TERM_SETTLEMENT_TYPE(1),
    BUY_CUD(0),
    SELL_CUD(0),
    CURRENCY_CODE(1),
    BUY_SETTLEMENT_INDICATOR(0),
    SELL_SETTLEMENT_INDICATOR(0),
    REFERENCE_PLAZA_CODE(7),
    REFERENCE_OPERATION_MODE(1);

    private final int value;

}

```

## src/main/java/com/nubo/transformation/corrections/api/models/enums/CountryEnum.java

```java
package com.nubo.transformation.corrections.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Arrays;

@Getter
@RequiredArgsConstructor
public enum CountryEnum {

    COLOMBIA(37, "CO", "Colombia"),
    CHILE(35, "CL", "Chile"),
    PERU(135, "PE", "Peru");

    private final int id;
    private final String code;
    private final String descripcion;

    public static CountryEnum fromDescripcion(String descripcion) {
        return Arrays.stream(values())
                .filter(e -> e.getDescripcion().equalsIgnoreCase(descripcion))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("País no válido: " + descripcion));
    }

    public static int getIdFromDescripcion(String descripcion) {
        return fromDescripcion(descripcion).getId();
    }
}
```

## src/main/java/com/nubo/transformation/corrections/api/models/enums/MarketEnum.java

```java
package com.nubo.transformation.corrections.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum MarketEnum {

    RF("RF", "2"),
    RV("RV", "1"),
    EF("EF", "3");

    private final String value;
    private final String id;

    public static String getIdByValue(String value) {
        for (MarketEnum market : MarketEnum.values()) {
            if (market.getValue().equalsIgnoreCase(value)) {
                return market.getId();
            }
        }
        return "";
    }
}

```

## src/main/java/com/nubo/transformation/corrections/api/models/enums/PropertiesEnum.java

```java
package com.nubo.transformation.corrections.api.models.enums;

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

## src/main/java/com/nubo/transformation/corrections/api/models/enums/SideEnum.java

```java
package com.nubo.transformation.corrections.api.models.enums;

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
    SELL("2"),
    UNKNOWN("0");

    private final String value;

    @JsonValue
    public String getValue() {
        return value;
    }

    @JsonCreator
    public static SideEnum fromValue(String value) {
        return Arrays.stream(SideEnum.values())
                .filter(side -> Objects.equals(side.value, value))
                .findFirst()
                .orElse(UNKNOWN);
    }
}

```

## src/main/java/com/nubo/transformation/corrections/api/models/enums/StatusEnum.java

```java
package com.nubo.transformation.corrections.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum StatusEnum {

    IN_PROCESS(703),
    WHIT_ERRORS(702),
    NOT_PROCESS(701),
    SUCCESSFUL(700),

    SEND_TO_DEPOSIT(8);

    private final Integer id;

}

```

## src/main/java/com/nubo/transformation/corrections/api/models/enums/TypeEnum.java

```java
package com.nubo.transformation.corrections.api.models.enums;

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

## src/main/java/com/nubo/transformation/corrections/api/models/enums/VersionApiEnum.java

```java
package com.nubo.transformation.corrections.api.models.enums;

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

## src/main/java/com/nubo/transformation/corrections/api/repository/DailyOperationCounterRepository.java

```java
package com.nubo.transformation.corrections.api.repository;

import com.nubo.transformation.corrections.api.models.entity.DailyOperationCounterEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;

public interface DailyOperationCounterRepository extends JpaRepository<DailyOperationCounterEntity, LocalDate> {

    @Query(value = """
        INSERT INTO daily_operation_counter(operation_date, counter)
        VALUES (CURRENT_DATE, 1)
        ON CONFLICT (operation_date) DO UPDATE
            SET counter = daily_operation_counter.counter + 1
        RETURNING counter
        """, nativeQuery = true)
    Integer getNextDailyCounter();

    @Query(value = """
        INSERT INTO daily_operation_counter(operation_date, counter)
        VALUES (CURRENT_DATE, :increment)
        ON CONFLICT (operation_date) DO UPDATE
            SET counter = daily_operation_counter.counter + :increment
        RETURNING counter
        """, nativeQuery = true)
    Integer incrementAndGetCounter(@Param("increment") int increment);
}


```

## src/main/java/com/nubo/transformation/corrections/api/repository/DepositoryMappingRepository.java

```java
package com.nubo.transformation.corrections.api.repository;

import com.nubo.transformation.corrections.api.models.entity.DepositoryMappingEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface DepositoryMappingRepository extends JpaRepository<DepositoryMappingEntity, Long> {
    Optional<DepositoryMappingEntity> findByExternalSystemAndDepository_Id(String externalSystem, String depositoryId);

}

```

## src/main/java/com/nubo/transformation/corrections/api/repository/DirectDepositoryRepository.java

```java
package com.nubo.transformation.corrections.api.repository;

import com.nubo.transformation.corrections.api.models.entity.DirectDepositoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface DirectDepositoryRepository extends JpaRepository<DirectDepositoryEntity, Long> {
    @Query("""
           select d.directDepositoryNumber
           from DirectDepositoryEntity d
           where d.participant.id = :participantId
             and d.depository.id = :depositoryId
           """)
    Optional<String> findDirectDepositoryNumberByParticipantIdAndDepositoryId(
            @Param("participantId") Long participantId,
            @Param("depositoryId") String depositoryId
    );
}

```

## src/main/java/com/nubo/transformation/corrections/api/repository/InvestorAccountRepository.java

```java
package com.nubo.transformation.corrections.api.repository;

import com.nubo.transformation.corrections.api.models.entity.InvestorAccountEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InvestorAccountRepository extends JpaRepository<InvestorAccountEntity, Long> {
}

```

## src/main/java/com/nubo/transformation/corrections/api/repository/IsinNumberRepository.java

```java
package com.nubo.transformation.corrections.api.repository;

import com.nubo.transformation.corrections.api.models.entity.IsinNumberEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IsinNumberRepository extends JpaRepository<IsinNumberEntity, Long> {
    Optional<IsinNumberEntity> findByIsinNumber(String isinNumber);
}

```

## src/main/java/com/nubo/transformation/corrections/api/repository/ParticipantCodeRepository.java

```java
package com.nubo.transformation.corrections.api.repository;

import com.nubo.transformation.corrections.api.models.entity.ParticipantCodeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ParticipantCodeRepository extends JpaRepository<ParticipantCodeEntity, Long> {

    Optional<ParticipantCodeEntity> findByNuamCode(String nuamCode);
}

```

## src/main/java/com/nubo/transformation/corrections/api/repository/SecurityTitleRepository.java

```java
package com.nubo.transformation.corrections.api.repository;

import com.nubo.transformation.corrections.api.models.entity.SecurityTitleEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SecurityTitleRepository extends JpaRepository<SecurityTitleEntity, Long> {
}

```

## src/main/java/com/nubo/transformation/corrections/api/repository/SettlementInstructionsRepository.java

```java
package com.nubo.transformation.corrections.api.repository;

import com.nubo.transformation.corrections.api.models.entity.SettlementInstructionsEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SettlementInstructionsRepository extends JpaRepository<SettlementInstructionsEntity, Long> {
}

```

## src/main/java/com/nubo/transformation/corrections/api/repository/SettlementRepository.java

```java
package com.nubo.transformation.corrections.api.repository;

import com.nubo.transformation.corrections.api.models.entity.SettlementEntity;
import com.nubo.transformation.corrections.api.models.entity.SettlementKey;
import com.nubo.transformation.corrections.api.models.entity.StatusEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.data.repository.query.Param;

import java.time.LocalDateTime;
import java.util.List;

public interface SettlementRepository extends JpaRepository<SettlementEntity, SettlementKey> {

    List<SettlementEntity> findByTradeIdAndSideId(Long tradeId, String sideId);
    List<SettlementEntity> findByTradeIdAndFractionAndSideId(Long tradeId, Integer fraction, String sideId);

    @Modifying
    @Transactional
    @Query("""
            UPDATE SettlementEntity s
            SET s.status = :status, s.lastModifyUser = :user, s.lastModifyDate = :date,
                    s.lastModifyApplication = :app, s.lastModifyIp = :ip
            WHERE s.trade.id = :tradeId
            AND s.fraction = :fraction
            AND s.side.id = :sideId
            """)
    int updateStatus(
            @Param("status") StatusEntity status,
            @Param("tradeId") Long tradeId,
            @Param("fraction") Integer fraction,
            @Param("sideId") String sideId,
            @Param("user") String user,
            @Param("date") LocalDateTime date,
            @Param("app") String app,
            @Param("ip") String ip
    );
}

```

## src/main/java/com/nubo/transformation/corrections/api/repository/StatusRepository.java

```java
package com.nubo.transformation.corrections.api.repository;

import com.nubo.transformation.corrections.api.models.entity.StatusEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StatusRepository extends JpaRepository<StatusEntity, Integer> {
}

```

## src/main/java/com/nubo/transformation/corrections/api/repository/TradeRepository.java

```java
package com.nubo.transformation.corrections.api.repository;

import com.nubo.transformation.corrections.api.models.entity.TradeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TradeRepository extends JpaRepository<TradeEntity, Long> {
}
```

## src/main/java/com/nubo/transformation/corrections/api/repository/UserNuboRepository.java

```java
package com.nubo.transformation.corrections.api.repository;

import com.nubo.transformation.corrections.api.models.entity.UserNuboEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface UserNuboRepository extends JpaRepository<UserNuboEntity, Long> {

    @Query("SELECT u FROM UserNuboEntity u " +
            "WHERE u.userName = :userName")
    Optional<UserNuboEntity> findByUserName(String userName);

}

```

## src/main/java/com/nubo/transformation/corrections/api/service/TransformationCorrectionService.java

```java
package com.nubo.transformation.corrections.api.service;

import com.nubo.transformation.corrections.api.models.dto.request.FractionEventKafkaInDto;

public interface TransformationCorrectionService {
    void processCorrections(FractionEventKafkaInDto kafkaMessage);
}

```

## src/main/java/com/nubo/transformation/corrections/api/service/impl/TransformationCorrectionServiceImpl.java

```java
package com.nubo.transformation.corrections.api.service.impl;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.nubo.transformation.corrections.api.helpers.OperacionCorregidaContext;
import com.nubo.transformation.corrections.api.models.entity.*;
import com.nubo.transformation.corrections.api.repository.*;
import org.springframework.stereotype.Service;

import com.nubo.transformation.corrections.api.application.properties.PropertiesConfig;
import com.nubo.transformation.corrections.api.application.properties.PropertiesContext;
import com.nubo.transformation.corrections.api.application.util.ApplicationUtils;
import com.nubo.transformation.corrections.api.client.kafka.producer.KafkaNuboAdapterProducer;
import com.nubo.transformation.corrections.api.exception.ServiceException;
import com.nubo.transformation.corrections.api.exception.error.ErrorCode;
import com.nubo.transformation.corrections.api.helpers.OperacionCorregidaOutMapper;
import com.nubo.transformation.corrections.api.models.dto.request.FractionEventKafkaInDto;
import com.nubo.transformation.corrections.api.models.dto.request.TradeCorrectionInDto;
import com.nubo.transformation.corrections.api.models.dto.response.OperacionCorregidaOutDto;
import com.nubo.transformation.corrections.api.models.enums.SideEnum;
import com.nubo.transformation.corrections.api.models.enums.StatusEnum;
import com.nubo.transformation.corrections.api.service.TransformationCorrectionService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@RequiredArgsConstructor
public class TransformationCorrectionServiceImpl implements TransformationCorrectionService {

    private final TradeRepository tradeRepository;
    private final SettlementRepository settlementRepository;
    private final SettlementInstructionsRepository settlementInstructionsRepository;
    private final StatusRepository statusRepository;
    private final IsinNumberRepository isinNumberRepository;
    private final DailyOperationCounterRepository dailyCounterRepository;
    private final DepositoryMappingRepository depositoryMappingRepository;
    private final DepositoryMappingRepository depositoryMappingRepository;
    private final PropertiesConfig propertiesConfig;
    private final KafkaNuboAdapterProducer kafkaNuboAdapterProducer;

    @Override
    public void processCorrections(FractionEventKafkaInDto kafkaMessage) {
        List<OperacionCorregidaOutDto> totalOperaciones = new ArrayList<>();

        SideEnum currentSide = SideEnum.fromValue(kafkaMessage.getSideId());
        SideEnum oppositeSide = (SideEnum.BUY.equals(currentSide)) ? SideEnum.SELL : SideEnum.BUY;

        Integer sellDepositorCodeMapped = participantCodeRepository.findByNuamCode("1")
                .map(ParticipantCodeEntity::getIntoDepositoryCode)
                .orElseThrow(() -> new ServiceException(ErrorCode.PARTICIPANT_CODE_NOT_FOUND,
                        "PARTICIPANT_CODE with NUAM_CODE = '1' not found"));

        Integer buyDepositorCodeMapped = participantCodeRepository.findByNuamCode("1")
                .map(ParticipantCodeEntity::getIntoDepositoryCode)
                .orElseThrow(() -> new ServiceException(ErrorCode.PARTICIPANT_CODE_NOT_FOUND,
                        "PARTICIPANT_CODE with NUAM_CODE = '1' not found"));

        String decevalExternalCode = depositoryMappingRepository
                .findByExternalSystemAndDepository_Id("DECEVAL", "1")
                .map(DepositoryMappingEntity::getExternalCode)
                .orElseThrow(() -> new ServiceException(
                        ErrorCode.DEPOSITORY_MAPPING_NOT_FOUND,
                        "DEPOSITORY_MAPPING not found for EXTERNAL_SYSTEM=DECEVAL and DEPOSITORY_ID=1"
                ));

        for (TradeCorrectionInDto correction : kafkaMessage.getResponse()) {
            try {
                Optional<TradeEntity> tradeOpt = tradeRepository.findById(correction.getTradeId());
                if (tradeOpt.isEmpty()) {
                    log.warn("Trade not found with id {}", correction.getTradeId());
                    continue;
                }
                TradeEntity trade = tradeOpt.get();

                List<SettlementEntity> settlementCorregidoList = settlementRepository.findByTradeIdAndSideId(
                        correction.getTradeId(), currentSide.getValue());
                if (settlementCorregidoList.isEmpty()) {
                    log.warn("Corrected settlement not found for tradeId {} and sideId {}",
                            correction.getTradeId(), currentSide.getValue());
                    continue;
                }
                SettlementEntity settlementCorregido = settlementCorregidoList.get(0);

                List<SettlementEntity> settlementsOpuestos = settlementRepository.findByTradeIdAndSideId(
                        correction.getTradeId(), oppositeSide.toString());

                if (settlementsOpuestos.isEmpty()) {
                    log.warn("Opposite settlements not found for tradeId {} and sideId {}",
                            correction.getTradeId(), oppositeSide);
                    continue;
                }
                int size = settlementsOpuestos.size();
                Integer finalCounter = dailyCounterRepository.incrementAndGetCounter(size);
                int baseCounter = finalCounter - size + 1;

                List<String> operationNumbers = new ArrayList<>();
                for (int i = 0; i < size; i++) {
                    SettlementEntity settlementOpuesto = settlementsOpuestos.get(i);
                    int currentCounter = baseCounter + i;
                    String operationNumber = buildOperationNumber(trade, settlementOpuesto, currentCounter);
                    operationNumbers.add(operationNumber);
                }
                OperacionCorregidaContext context = OperacionCorregidaContext.builder()
                        .operationNumbers(operationNumbers)
                        .sellDepositorCodeMapped(sellDepositorCodeMapped)
                        .buyDepositorCodeMapped(buyDepositorCodeMapped)
                        .deposit(decevalExternalCode)
                        .build();

                List<OperacionCorregidaOutDto> operacionDtos = OperacionCorregidaOutMapper
                        .mapToOperacionCorregidaDtos(correction, trade, settlementsOpuestos, settlementCorregido,
                                currentSide, context);

                List<SettlementInstructionsEntity> instructionsEntities = new ArrayList<>();
                for (int i = 0; i < operacionDtos.size(); i++) {

                    Long isinNumberId = isinNumberRepository
                            .findByIsinNumber(trade.getSecurityTitle().getIsin())
                            .map(IsinNumberEntity::getId)
                            .orElse(null);

                    SettlementEntity settlementOpuesto = settlementsOpuestos.get(i);

                    SettlementInstructionsEntity instructions = SettlementInstructionsEntity.builder()
                            .tradeId(trade.getId())
                            .fraction(settlementCorregido.getFraction())
                            .participantSellId(trade.getParticipantSell().getId())
                            .custodianSellId(trade.getCustodianSell() != null ? trade.getCustodianSell().getId() : null)
                            .investorSellId(SideEnum.BUY.equals(currentSide)
                                    ? (settlementCorregido.getInvestor() != null
                                            ? settlementCorregido.getInvestor().getId()
                                            : null)
                                    : (settlementOpuesto.getInvestor() != null
                                            ? settlementOpuesto.getInvestor().getId()
                                            : null))
                            .investorAccountSellId(SideEnum.BUY.equals(currentSide)
                                    ? (settlementCorregido.getInvestorAccount() != null
                                            ? settlementCorregido.getInvestorAccount().getId()
                                            : null)
                                    : (settlementOpuesto.getInvestorAccount() != null
                                            ? settlementOpuesto.getInvestorAccount().getId()
                                            : null))
                            .participantBuyId(trade.getParticipantBuy().getId())
                            .custodianBuyId(trade.getCustodianBuy() != null ? trade.getCustodianBuy().getId() : null)
                            .investorBuyId(SideEnum.BUY.equals(currentSide)
                                    ? (settlementOpuesto.getInvestor() != null
                                            ? settlementOpuesto.getInvestor().getId()
                                            : null)
                                    : (settlementCorregido.getInvestor() != null
                                            ? settlementCorregido.getInvestor().getId()
                                            : null))
                            .investorAccountBuyId(SideEnum.BUY.equals(currentSide)
                                    ? (settlementOpuesto.getInvestorAccount() != null
                                            ? settlementOpuesto.getInvestorAccount().getId()
                                            : null)
                                    : (settlementCorregido.getInvestorAccount() != null
                                            ? settlementCorregido.getInvestorAccount().getId()
                                            : null))
                            .countryId(trade.getCountry().getId())
                            .depositoryId(trade.getDepository().getId())
                            .isinNumberId(isinNumberId)
                            .securityId(trade.getSecurityTitle().getId())
                            .currencyId(trade.getCurrency().getId())
                            .quantity(trade.getQuantity())
                            .amount(trade.getVolume())
                            .referenceTransactionDate(trade.getMatchDate())
                            .referenceTransactionNumber(trade.getMatchId().toString())
                            .lastModifyApplic(propertiesConfig.getApiName())
                            .lastModifyIp(PropertiesContext.getClientIp())
                            .lastModifyUser(PropertiesContext.getClientUser())
                            .lastModifyDate(PropertiesContext.getClientDatetime())
                            .build();

                    instructionsEntities.add(instructions);
                }

                settlementInstructionsRepository.saveAll(instructionsEntities);

                StatusEntity newStatus = statusRepository.findById(StatusEnum.SEND_TO_DEPOSIT.getId())
                        .orElseThrow(() -> new ServiceException(ErrorCode.STATUS_NOT_FOUND, "StatusId: " + StatusEnum.SEND_TO_DEPOSIT.getId() + " not found"));

                // trade.setStatus(newStatus);
                // tradeRepository.save(trade);

                List<SettlementEntity> settlementsToUpdate = settlementRepository
                        .findByTradeIdAndFractionAndSideId(
                                correction.getTradeId(),
                                settlementCorregido.getFraction(),
                                currentSide.toString());

                if (settlementsToUpdate.isEmpty()) {
                    log.warn("Settlements to update not found for tradeId={}, fraction={}, sideId={}",
                            correction.getTradeId(),
                            settlementCorregido.getFraction(),
                            currentSide.toString());
                } else {
                    for (SettlementEntity settlement : settlementsToUpdate) {
                        log.info(
                                "Updating SettlementEntity: tradeId={}, fraction={}, sideId={}, newStatus={}",
                                settlement.getTrade() != null ? settlement.getTrade().getId() : "null",
                                settlement.getFraction(),
                                settlement.getSide() != null ? settlement.getSide().getId() : "null",
                                newStatus.getDescription());

                        settlementRepository.updateStatus(
                                newStatus,
                                settlement.getTrade().getId(),
                                settlement.getFraction(),
                                settlement.getSide().getId(),
                                PropertiesContext.getClientUser(),
                                LocalDateTime.now(),
                                propertiesConfig.getApiName(),
                                PropertiesContext.getClientIp());
                    }
                }

                totalOperaciones.addAll(operacionDtos);

            } catch (Exception e) {
                log.error("Error processing correction for tradeId {}: {}", correction.getTradeId(), e.getMessage(),
                        e);
            }
        }

        if (!totalOperaciones.isEmpty()) {
            sendOperacionCorregidaOutDtoBatch(totalOperaciones);
            log.info("Sent batch of {} OperacionCorregidaOutDto(s)", totalOperaciones.size());
        }
    }

    private void sendOperacionCorregidaOutDtoBatch(List<OperacionCorregidaOutDto> dtoList) {
        for (OperacionCorregidaOutDto dto : dtoList) {
            try {
                String json = ApplicationUtils.convertObjectToJson(dto);
                kafkaNuboAdapterProducer.sendMessage(json);
                log.info("Message sent to Kafka: {}", json);
            } catch (Exception e) {
                log.error("Error serializing individual OperacionCorregidaOutDto", e);
            }
        }
    }

    private String buildOperationNumber(TradeEntity trade, SettlementEntity settlement, int counter) {
        String suffix = String.format("%02d", counter % 100);

        Integer fraction = settlement.getFraction();
        String matchPart = trade.getMatchId() != null ? trade.getMatchId().toString() : "";
        String fractionPart = (fraction != null)
                ? String.format("%02d", fraction)
                : "";

        return matchPart + fractionPart + suffix;
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
    group-id: ${KAFKA_NUBO_GROUP_ID}
    security:
      protocol: ${KAFKA_PROPERTIES_SECURITY_PROTOCOL}
    sasl:
      mechanism: ${KAFKA_PROPERTIES_SASL_MECHANISM}
      jaas:
        config: ${KAFKA_PROPERTIES_SASL_JAAS_CONFIG}
    producer:
      topic-name: ${KAFKA_NUBO_TOPIC_NAME_PRODUCER}
    consumer:
      topic-name: ${KAFKA_NUBO_TOPIC_NAME_CONSUMER}
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
    group-id: ${KAFKA_NUBO_GROUP_ID}
    security:
      protocol: ${KAFKA_PROPERTIES_SECURITY_PROTOCOL}
    sasl:
      mechanism: ${KAFKA_PROPERTIES_SASL_MECHANISM}
      jaas:
        config: ${KAFKA_PROPERTIES_SASL_JAAS_CONFIG}
    producer:
      topic-name: ${KAFKA_NUBO_TOPIC_NAME_PRODUCER}
    consumer:
      topic-name: ${KAFKA_NUBO_TOPIC_NAME_CONSUMER}
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
    group-id: ${KAFKA_NUBO_GROUP_ID}
    security:
      protocol: ${KAFKA_PROPERTIES_SECURITY_PROTOCOL}
    sasl:
      mechanism: ${KAFKA_PROPERTIES_SASL_MECHANISM}
      jaas:
        config: ${KAFKA_PROPERTIES_SASL_JAAS_CONFIG}
    producer:
      topic-name: ${KAFKA_NUBO_TOPIC_NAME_PRODUCER}
    consumer:
      topic-name: ${KAFKA_NUBO_TOPIC_NAME_CONSUMER}
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
    group-id: ${KAFKA_NUBO_GROUP_ID}
    security:
      protocol: ${KAFKA_PROPERTIES_SECURITY_PROTOCOL}
    sasl:
      mechanism: ${KAFKA_PROPERTIES_SASL_MECHANISM}
      jaas:
        config: ${KAFKA_PROPERTIES_SASL_JAAS_CONFIG}
    producer:
      topic-name: ${KAFKA_NUBO_TOPIC_NAME_PRODUCER}
    consumer:
      topic-name: ${KAFKA_NUBO_TOPIC_NAME_CONSUMER}
logging:
  config: classpath:log/log4j2.properties
  level:
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
    group-id: ${KAFKA_NUBO_GROUP_ID}
    security:
      protocol: ${KAFKA_PROPERTIES_SECURITY_PROTOCOL}
    sasl:
      mechanism: ${KAFKA_PROPERTIES_SASL_MECHANISM}
      jaas:
        config: ${KAFKA_PROPERTIES_SASL_JAAS_CONFIG}
    producer:
      topic-name: ${KAFKA_NUBO_TOPIC_NAME_PRODUCER}
    consumer:
      topic-name: ${KAFKA_NUBO_TOPIC_NAME_CONSUMER}
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
,--------.,------.   ,---.  ,--.  ,--. ,---. ,------.,-----. ,------. ,--.   ,--.  ,---. ,--------.,--. ,-----. ,--.  ,--. ,-----. ,-----. ,------. ,------. ,------. ,-----.,--------.,--. ,-----. ,--.  ,--. ,---.
'--.  .--'|  .--. ' /  O  \ |  ,'.|  |'   .-'|  .---'  .-.  '|  .--. '|   `.'   | /  O  \'--.  .--'|  |'  .-.  '|  ,'.|  |'  .--./'  .-.  '|  .--. '|  .--. '|  .---''  .--./'--.  .--'|  |'  .-.  '|  ,'.|  |'   .-'
   |  |   |  '--'.'|  .-.  ||  |' '  |`.  `-.|  `--,|  | |  ||  '--'.'|  |'.'|  ||  .-.  |  |  |   |  ||  | |  ||  |' '  ||  |    |  | |  ||  '--'.'|  '--'.'|  `--, |  |       |  |   |  ||  | |  ||  |' '  |`.  `-.
   |  |   |  |\  \ |  | |  ||  | `   |.-'    |  |`  '  '-'  '|  |\  \ |  |   |  ||  | |  |  |  |   |  |'  '-'  '|  | `   |'  '--'\'  '-'  '|  |\  \ |  |\  \ |  `---.'  '--'\   |  |   |  |'  '-'  '|  | `   |.-'    |
   `--'   `--' '--'`--' `--'`--'  `--'`-----'`--'    `-----' `--' '--'`--'   `--'`--' `--'  `--'   `--' `-----' `--'  `--' `-----' `-----' `--' '--'`--' '--'`------' `-----'   `--'   `--' `-----' `--'  `--'`-----'

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
