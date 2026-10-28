# nbo-png-operaciones-orquestador-ext-back

Código fuente completo de producción y configuraciones. Captura local: 28/10/2026.

Incluye 131 archivos Java y 17 archivos de configuración, recursos y compilación.

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
12. `src/main/resources/cause-catalog.yml`
13. `src/main/resources/log/JsonEventLayout_error.json`
14. `src/main/resources/log/JsonEventLayout_info.json`
15. `src/main/resources/log/JsonEventLayout_trace.json`
16. `src/main/resources/log/log4j2-prod.properties`
17. `src/main/resources/log/log4j2.properties`
18. `src/main/java/com/nubo/operation/orchestrator/ext/api/ExternalOperationsOrchestratorApiApplication.java`
19. `src/main/java/com/nubo/operation/orchestrator/ext/api/application/annotations/ValidBigDecimal.java`
20. `src/main/java/com/nubo/operation/orchestrator/ext/api/application/cause/CauseCatalog.java`
21. `src/main/java/com/nubo/operation/orchestrator/ext/api/application/cause/CauseCatalogProperties.java`
22. `src/main/java/com/nubo/operation/orchestrator/ext/api/application/cause/CauseEntry.java`
23. `src/main/java/com/nubo/operation/orchestrator/ext/api/application/config/AssignmentLaneExecutorConfig.java`
24. `src/main/java/com/nubo/operation/orchestrator/ext/api/application/config/AsyncConfig.java`
25. `src/main/java/com/nubo/operation/orchestrator/ext/api/application/config/KafkaConsumerConfig.java`
26. `src/main/java/com/nubo/operation/orchestrator/ext/api/application/config/KafkaProducerConfig.java`
27. `src/main/java/com/nubo/operation/orchestrator/ext/api/application/config/SwaggerConfig.java`
28. `src/main/java/com/nubo/operation/orchestrator/ext/api/application/config/ValidBigDecimalConfig.java`
29. `src/main/java/com/nubo/operation/orchestrator/ext/api/application/config/WebConfig.java`
30. `src/main/java/com/nubo/operation/orchestrator/ext/api/application/context/GlobalContext.java`
31. `src/main/java/com/nubo/operation/orchestrator/ext/api/application/database/NamingStrategyConfig.java`
32. `src/main/java/com/nubo/operation/orchestrator/ext/api/application/database/UpperNamingConfig.java`
33. `src/main/java/com/nubo/operation/orchestrator/ext/api/application/filters/GlobalFilter.java`
34. `src/main/java/com/nubo/operation/orchestrator/ext/api/application/interceptors/GlobalInterceptor.java`
35. `src/main/java/com/nubo/operation/orchestrator/ext/api/application/properties/PropertiesConfig.java`
36. `src/main/java/com/nubo/operation/orchestrator/ext/api/application/properties/PropertiesContext.java`
37. `src/main/java/com/nubo/operation/orchestrator/ext/api/application/util/ApplicationUtils.java`
38. `src/main/java/com/nubo/operation/orchestrator/ext/api/application/util/RestClientUtils.java`
39. `src/main/java/com/nubo/operation/orchestrator/ext/api/application/util/ValidatorUtil.java`
40. `src/main/java/com/nubo/operation/orchestrator/ext/api/application/util/WebClientUtils.java`
41. `src/main/java/com/nubo/operation/orchestrator/ext/api/client/kafka/consumer/service/KafkaNuboAdapterConsumer.java`
42. `src/main/java/com/nubo/operation/orchestrator/ext/api/client/kafka/consumer/service/impl/KafkaNuboAdapterConsumerImpl.java`
43. `src/main/java/com/nubo/operation/orchestrator/ext/api/client/kafka/producer/service/KafkaNuboAdapterProducer.java`
44. `src/main/java/com/nubo/operation/orchestrator/ext/api/client/kafka/producer/service/impl/KafkaNuboAdapterProducerImpl.java`
45. `src/main/java/com/nubo/operation/orchestrator/ext/api/client/operation/cmd/models/dto/request/AssignmentClosureInDto.java`
46. `src/main/java/com/nubo/operation/orchestrator/ext/api/client/operation/cmd/models/dto/request/BatchAssignmentInDto.java`
47. `src/main/java/com/nubo/operation/orchestrator/ext/api/client/operation/cmd/models/dto/request/BatchAssignmentItemInDto.java`
48. `src/main/java/com/nubo/operation/orchestrator/ext/api/client/operation/cmd/models/dto/request/BatchAssignmentValidationFractionInDto.java`
49. `src/main/java/com/nubo/operation/orchestrator/ext/api/client/operation/cmd/models/dto/request/BatchAssignmentValidationInDto.java`
50. `src/main/java/com/nubo/operation/orchestrator/ext/api/client/operation/cmd/models/dto/request/BatchAssignmentValidationItemInDto.java`
51. `src/main/java/com/nubo/operation/orchestrator/ext/api/client/operation/cmd/models/dto/request/FractionInDto.java`
52. `src/main/java/com/nubo/operation/orchestrator/ext/api/client/operation/cmd/models/dto/response/AssignmentClosureOutDto.java`
53. `src/main/java/com/nubo/operation/orchestrator/ext/api/client/operation/cmd/models/dto/response/AssignmentClosureValidateOutDto.java`
54. `src/main/java/com/nubo/operation/orchestrator/ext/api/client/operation/cmd/models/dto/response/BatchAssignmentItemOutDto.java`
55. `src/main/java/com/nubo/operation/orchestrator/ext/api/client/operation/cmd/models/dto/response/BatchAssignmentOutDto.java`
56. `src/main/java/com/nubo/operation/orchestrator/ext/api/client/operation/cmd/models/dto/response/BatchAssignmentValidationItemOutDto.java`
57. `src/main/java/com/nubo/operation/orchestrator/ext/api/client/operation/cmd/models/dto/response/BatchAssignmentValidationOutDto.java`
58. `src/main/java/com/nubo/operation/orchestrator/ext/api/client/operation/cmd/models/dto/response/FractionAccountOutDto.java`
59. `src/main/java/com/nubo/operation/orchestrator/ext/api/client/operation/cmd/models/dto/response/OperationCmdErrorResponseDto.java`
60. `src/main/java/com/nubo/operation/orchestrator/ext/api/client/operation/cmd/models/dto/response/ParticipantClientOutDto.java`
61. `src/main/java/com/nubo/operation/orchestrator/ext/api/client/operation/cmd/models/dto/response/SettlementOutDto.java`
62. `src/main/java/com/nubo/operation/orchestrator/ext/api/client/operation/cmd/service/OperationCmdClient.java`
63. `src/main/java/com/nubo/operation/orchestrator/ext/api/client/operation/cmd/service/impl/OperationCmdClientImpl.java`
64. `src/main/java/com/nubo/operation/orchestrator/ext/api/client/schedule/validate/models/dto/response/ScheduleValidationOutDto.java`
65. `src/main/java/com/nubo/operation/orchestrator/ext/api/client/schedule/validate/service/ScheduleValidateClient.java`
66. `src/main/java/com/nubo/operation/orchestrator/ext/api/client/schedule/validate/service/impl/ScheduleValidateClientImpl.java`
67. `src/main/java/com/nubo/operation/orchestrator/ext/api/exception/ClientException.java`
68. `src/main/java/com/nubo/operation/orchestrator/ext/api/exception/DefinitiveAssignmentRuleException.java`
69. `src/main/java/com/nubo/operation/orchestrator/ext/api/exception/ServiceException.java`
70. `src/main/java/com/nubo/operation/orchestrator/ext/api/exception/error/ErrorCode.java`
71. `src/main/java/com/nubo/operation/orchestrator/ext/api/exception/error/ErrorResponse.java`
72. `src/main/java/com/nubo/operation/orchestrator/ext/api/exception/error/ErrorValidation.java`
73. `src/main/java/com/nubo/operation/orchestrator/ext/api/exception/handler/CustomKafkaErrorHandler.java`
74. `src/main/java/com/nubo/operation/orchestrator/ext/api/exception/handler/GlobalExceptionHandler.java`
75. `src/main/java/com/nubo/operation/orchestrator/ext/api/exception/kafka/KafkaErrorBuild.java`
76. `src/main/java/com/nubo/operation/orchestrator/ext/api/helpers/MapperUtil.java`
77. `src/main/java/com/nubo/operation/orchestrator/ext/api/models/domain/KafkaMessage.java`
78. `src/main/java/com/nubo/operation/orchestrator/ext/api/models/dto/request/FractionKafkaInDto.java`
79. `src/main/java/com/nubo/operation/orchestrator/ext/api/models/dto/request/MessageInDto.java`
80. `src/main/java/com/nubo/operation/orchestrator/ext/api/models/dto/response/ApiClientCauseDto.java`
81. `src/main/java/com/nubo/operation/orchestrator/ext/api/models/dto/response/BusinessRuleCodeOutDto.java`
82. `src/main/java/com/nubo/operation/orchestrator/ext/api/models/dto/response/CauseType.java`
83. `src/main/java/com/nubo/operation/orchestrator/ext/api/models/dto/response/CountryOutDto.java`
84. `src/main/java/com/nubo/operation/orchestrator/ext/api/models/dto/response/CurrencyOutDto.java`
85. `src/main/java/com/nubo/operation/orchestrator/ext/api/models/dto/response/DepositoryOutDto.java`
86. `src/main/java/com/nubo/operation/orchestrator/ext/api/models/dto/response/GicsOutDto.java`
87. `src/main/java/com/nubo/operation/orchestrator/ext/api/models/dto/response/IdentificationTypeOutDto.java`
88. `src/main/java/com/nubo/operation/orchestrator/ext/api/models/dto/response/InvestorAccountOutDto.java`
89. `src/main/java/com/nubo/operation/orchestrator/ext/api/models/dto/response/InvestorOutDto.java`
90. `src/main/java/com/nubo/operation/orchestrator/ext/api/models/dto/response/KafkaErrorMessageOutDto.java`
91. `src/main/java/com/nubo/operation/orchestrator/ext/api/models/dto/response/KafkaErrorResponseDto.java`
92. `src/main/java/com/nubo/operation/orchestrator/ext/api/models/dto/response/KafkaProcessResponseDto.java`
93. `src/main/java/com/nubo/operation/orchestrator/ext/api/models/dto/response/ParticipantAccountOutDto.java`
94. `src/main/java/com/nubo/operation/orchestrator/ext/api/models/dto/response/ParticipantOutDto.java`
95. `src/main/java/com/nubo/operation/orchestrator/ext/api/models/dto/response/SideOutDto.java`
96. `src/main/java/com/nubo/operation/orchestrator/ext/api/models/dto/response/StatusOutDto.java`
97. `src/main/java/com/nubo/operation/orchestrator/ext/api/models/dto/response/TaxStatusOutDto.java`
98. `src/main/java/com/nubo/operation/orchestrator/ext/api/models/dto/response/TradingSessionOutDto.java`
99. `src/main/java/com/nubo/operation/orchestrator/ext/api/models/dto/response/TradingSystemOutDto.java`
100. `src/main/java/com/nubo/operation/orchestrator/ext/api/models/dto/response/TypeOutDto.java`
101. `src/main/java/com/nubo/operation/orchestrator/ext/api/models/entity/CfiEntity.java`
102. `src/main/java/com/nubo/operation/orchestrator/ext/api/models/entity/ClassEntity.java`
103. `src/main/java/com/nubo/operation/orchestrator/ext/api/models/entity/CountryEntity.java`
104. `src/main/java/com/nubo/operation/orchestrator/ext/api/models/entity/CurrencyEntity.java`
105. `src/main/java/com/nubo/operation/orchestrator/ext/api/models/entity/DepositoryEntity.java`
106. `src/main/java/com/nubo/operation/orchestrator/ext/api/models/entity/GicsEntity.java`
107. `src/main/java/com/nubo/operation/orchestrator/ext/api/models/entity/IdentificationTypeEntity.java`
108. `src/main/java/com/nubo/operation/orchestrator/ext/api/models/entity/InvestorAccountEntity.java`
109. `src/main/java/com/nubo/operation/orchestrator/ext/api/models/entity/InvestorEntity.java`
110. `src/main/java/com/nubo/operation/orchestrator/ext/api/models/entity/IssuerEntity.java`
111. `src/main/java/com/nubo/operation/orchestrator/ext/api/models/entity/MarketEntity.java`
112. `src/main/java/com/nubo/operation/orchestrator/ext/api/models/entity/ParticipantAccountEntity.java`
113. `src/main/java/com/nubo/operation/orchestrator/ext/api/models/entity/ParticipantEntity.java`
114. `src/main/java/com/nubo/operation/orchestrator/ext/api/models/entity/SecurityTitleEntity.java`
115. `src/main/java/com/nubo/operation/orchestrator/ext/api/models/entity/SideEntity.java`
116. `src/main/java/com/nubo/operation/orchestrator/ext/api/models/entity/StatusEntity.java`
117. `src/main/java/com/nubo/operation/orchestrator/ext/api/models/entity/TaxStatusEntity.java`
118. `src/main/java/com/nubo/operation/orchestrator/ext/api/models/entity/TradeEntity.java`
119. `src/main/java/com/nubo/operation/orchestrator/ext/api/models/entity/TradingSessionEntity.java`
120. `src/main/java/com/nubo/operation/orchestrator/ext/api/models/entity/TradingSystemEntity.java`
121. `src/main/java/com/nubo/operation/orchestrator/ext/api/models/entity/TypeEntity.java`
122. `src/main/java/com/nubo/operation/orchestrator/ext/api/models/entity/TypeMappingEntity.java`
123. `src/main/java/com/nubo/operation/orchestrator/ext/api/models/enums/OperationTypeEnum.java`
124. `src/main/java/com/nubo/operation/orchestrator/ext/api/models/enums/PropertiesEnum.java`
125. `src/main/java/com/nubo/operation/orchestrator/ext/api/models/enums/SideEnum.java`
126. `src/main/java/com/nubo/operation/orchestrator/ext/api/models/enums/TypeMappingEnum.java`
127. `src/main/java/com/nubo/operation/orchestrator/ext/api/models/enums/VersionApiEnum.java`
128. `src/main/java/com/nubo/operation/orchestrator/ext/api/repository/InvestorAccountRepository.java`
129. `src/main/java/com/nubo/operation/orchestrator/ext/api/repository/ParticipantAccountRepository.java`
130. `src/main/java/com/nubo/operation/orchestrator/ext/api/repository/ParticipantRepository.java`
131. `src/main/java/com/nubo/operation/orchestrator/ext/api/repository/SideRepository.java`
132. `src/main/java/com/nubo/operation/orchestrator/ext/api/repository/TradeRepository.java`
133. `src/main/java/com/nubo/operation/orchestrator/ext/api/repository/TypeMappingRepository.java`
134. `src/main/java/com/nubo/operation/orchestrator/ext/api/service/ProcessMessageService.java`
135. `src/main/java/com/nubo/operation/orchestrator/ext/api/service/ScheduleValidationService.java`
136. `src/main/java/com/nubo/operation/orchestrator/ext/api/service/impl/AssignmentBatchConcurrencyLimiter.java`
137. `src/main/java/com/nubo/operation/orchestrator/ext/api/service/impl/BatchPreparationMetrics.java`
138. `src/main/java/com/nubo/operation/orchestrator/ext/api/service/impl/ProcessMessageServiceImpl.java`
139. `src/main/java/com/nubo/operation/orchestrator/ext/api/service/impl/ScheduleValidationServiceImpl.java`
140. `src/main/java/com/nubo/operation/orchestrator/ext/api/service/impl/lanes/AssignmentLane.java`
141. `src/main/java/com/nubo/operation/orchestrator/ext/api/service/impl/lanes/AssignmentLaneCoordinator.java`
142. `src/main/java/com/nubo/operation/orchestrator/ext/api/service/impl/lanes/AssignmentLaneProcessor.java`
143. `src/main/java/com/nubo/operation/orchestrator/ext/api/service/impl/lanes/AssignmentLanesResult.java`
144. `src/main/java/com/nubo/operation/orchestrator/ext/api/service/impl/lanes/LaneResult.java`
145. `src/main/java/com/nubo/operation/orchestrator/ext/api/service/impl/lanes/ParsedBatchItem.java`
146. `src/main/java/com/nubo/operation/orchestrator/ext/api/service/impl/lanes/TradeBusinessKey.java`
147. `src/main/java/com/nubo/operation/orchestrator/ext/api/service/impl/lanes/TradeBusinessKeyFactory.java`
148. `src/main/java/com/nubo/operation/orchestrator/ext/api/service/impl/lanes/TradeLanePartitioner.java`

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
	</parent>

	<groupId>com.nubo.operation.orchestrator.ext.api</groupId>
	<artifactId>ext-operations-orchestrator-api</artifactId>
	<version>0.8.12-beta.16</version>

	<name>${project.artifactId}</name>
	<description>External Operations Orchestrator Api</description>

	<properties>
		<java.version>21</java.version>
		<spring.port>8080</spring.port>
		<datasource.url.application.name>ApplicationName=${project.artifactId}</datasource.url.application.name>
		<hikari.pool.name>
			${project.artifactId}-pool
		</hikari.pool.name>
		<!-- Security remediation: Apache Tomcat -->
		<tomcat.version>11.0.25</tomcat.version>

		<jackson-2-bom.version>2.21.7</jackson-2-bom.version>
		<jackson-bom.version>3.1.7</jackson-bom.version>
	</properties>

	<dependencies>

		<!-- Spring MVC -->
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-webmvc</artifactId>
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
			<artifactId>log4j-layout-template-json</artifactId>
			<scope>runtime</scope>
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

		<!-- Swagger / OpenAPI -->
		<dependency>
			<groupId>org.springdoc</groupId>
			<artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>
			<version>3.1.1</version>
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

		<!-- Vulnerability adjustment -->
		<dependency>
			<groupId>org.apache.commons</groupId>
			<artifactId>commons-lang3</artifactId>
			<version>3.18.0</version>
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
			<groupId>org.springframework.retry</groupId>
			<artifactId>spring-retry</artifactId>
			<version>2.0.13</version>
		</dependency>

		<dependency>
			<groupId>at.yawk.lz4</groupId>
			<artifactId>lz4-java</artifactId>
			<version>1.11.4</version>
		</dependency>

		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-webclient</artifactId>
			<exclusions>
				<!-- Avoid native epoll transport when not required -->
				<exclusion>
					<groupId>io.netty</groupId>
					<artifactId>netty-transport-native-epoll</artifactId>
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

			<plugin>
				<groupId>org.apache.maven.plugins</groupId>
				<artifactId>maven-compiler-plugin</artifactId>
				<configuration>
					<release>${java.version}</release>
					<parameters>true</parameters>
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
								<exclude>**/ExternalOperationsOrchestratorApiApplication.class</exclude>
							</excludes>
						</configuration>
					</execution>

					<execution>
						<id>jacoco-report</id>
						<phase>test</phase>
						<goals>
							<goal>report</goal>
						</goals>
						<configuration>
							<outputDirectory>
								${project.build.directory}/jacoco-report
							</outputDirectory>
							<excludes>
								<exclude>**/application/**</exclude>
								<exclude>**/models/**</exclude>
								<exclude>**/repository/**</exclude>
								<exclude>**/ExternalOperationsOrchestratorApiApplication.class</exclude>
							</excludes>
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
distributionUrl=https://repo.maven.apache.org/maven2/org/apache/maven/apache-maven/3.9.12/apache-maven-3.9.12-bin.zip

```

## src/main/resources/application-dev.yml

```yaml
server:
  port: @spring.port@
spring:
  config:
    import: "optional:file:/app/config/cause-catalog.yml"
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
    retries: 0
    bootstrap-servers: ${KAFKA_NUBO_BOOTSTRAP_SERVER}
    auto-offset-reset: ${KAFKA_NUBO_AUTO_OFFSET_RESET:latest}
    security:
      protocol: ${KAFKA_PROPERTIES_SECURITY_PROTOCOL}
    sasl:
      mechanism: ${KAFKA_PROPERTIES_SASL_MECHANISM}
      jaas:
        config: ${KAFKA_PROPERTIES_SASL_JAAS_CONFIG}
    consumer:
      topic-name: ${KAFKA_NUBO_TOPIC_NAME_API_ASIGNMENT_REQUEST}
      group-id: ${KAFKA_NUBO_GROUP_ID}
      max-poll-records: ${KAFKA_NUBO_CONSUMER_MAX_POLL_RECORDS:10}
      fetch-max-wait-ms: ${KAFKA_NUBO_CONSUMER_FETCH_MAX_WAIT_MS:500}
    producer:
      topic-name: ${KAFKA_NUBO_TOPIC_NAME_API_ASIGNMENT_RESPONSE}
async:
  executor:
    core-pool-size: ${ASYNC_EXECUTOR_CORE_POOL_SIZE:5}
    max-pool-size: ${ASYNC_EXECUTOR_MAX_POOL_SIZE:10}
    queue-capacity: ${ASYNC_EXECUTOR_QUEUE_CAPACITY:100}
    thread-name-prefix: ${ASYNC_EXECUTOR_THREAD_NAME_PREFIX:msg-proc-}
    await-termination-seconds: ${ASYNC_EXECUTOR_AWAIT_TERMINATION_SECONDS:60}
logging:
  config: classpath:log/log4j2.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR
client:
  nubo:
    url-operation-cmd: ${NUBO_URL_OPERATION_CMD}
    url-schedule-validate: ${NUBO_URL_SCHEDULE_VALIDATION}
schedule:
  screen-action-code:
    assignment: ${SCHEDULE_SCREEN_ACTION_CODE_ASSIGNMENT:238}
    final-assignment: ${SCHEDULE_SCREEN_ACTION_CODE_FINAL_ASSIGNMENT:239}
```

## src/main/resources/application-local.yml

```yaml
server:
  port: 8082
spring:
  config:
    import: "classpath:cause-catalog.yml"
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
    admin:
      auto-create: true
    auto-offset-reset: ${KAFKA_NUBO_AUTO_OFFSET_RESET:latest}
    security:
      protocol: PLAINTEXT
    sasl:
      mechanism: ""
      jaas:
        config: "org.apache.kafka.common.security.scram.ScramLoginModule required;"
    consumer:
      topic-name: ${KAFKA_NUBO_TOPIC_NAME_API_ASIGNMENT_REQUEST}
      group-id: ${KAFKA_NUBO_GROUP_ID}
      max-poll-records: ${KAFKA_NUBO_CONSUMER_MAX_POLL_RECORDS:10}
      fetch-max-wait-ms: ${KAFKA_NUBO_CONSUMER_FETCH_MAX_WAIT_MS:500}
    producer:
      topic-name: ${KAFKA_NUBO_TOPIC_NAME_API_ASIGNMENT_RESPONSE}
async:
  executor:
    core-pool-size: ${ASYNC_EXECUTOR_CORE_POOL_SIZE:5}
    max-pool-size: ${ASYNC_EXECUTOR_MAX_POOL_SIZE:10}
    queue-capacity: ${ASYNC_EXECUTOR_QUEUE_CAPACITY:100}
    thread-name-prefix: ${ASYNC_EXECUTOR_THREAD_NAME_PREFIX:msg-proc-}
    await-termination-seconds: ${ASYNC_EXECUTOR_AWAIT_TERMINATION_SECONDS:60}
logging:
  config: classpath:log/log4j2.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR
client:
  nubo:
    url-operation-cmd: ${NUBO_URL_OPERATION_CMD}
    url-schedule-validate: ${NUBO_URL_SCHEDULE_VALIDATION}
schedule:
  screen-action-code:
    assignment: ${SCHEDULE_SCREEN_ACTION_CODE_ASSIGNMENT:238}
    final-assignment: ${SCHEDULE_SCREEN_ACTION_CODE_FINAL_ASSIGNMENT:239}


```

## src/main/resources/application-prod.yml

```yaml
server:
  port: @spring.port@
spring:
  config:
    import: "optional:file:/app/config/cause-catalog.yml"
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
    retries: 0
    bootstrap-servers: ${KAFKA_NUBO_BOOTSTRAP_SERVER}
    auto-offset-reset: ${KAFKA_NUBO_AUTO_OFFSET_RESET:latest}
    security:
      protocol: ${KAFKA_PROPERTIES_SECURITY_PROTOCOL}
    sasl:
      mechanism: ${KAFKA_PROPERTIES_SASL_MECHANISM}
      jaas:
        config: ${KAFKA_PROPERTIES_SASL_JAAS_CONFIG}
    consumer:
      topic-name: ${KAFKA_NUBO_TOPIC_NAME_API_ASIGNMENT_REQUEST}
      group-id: ${KAFKA_NUBO_GROUP_ID}
      max-poll-records: ${KAFKA_NUBO_CONSUMER_MAX_POLL_RECORDS:10}
      fetch-max-wait-ms: ${KAFKA_NUBO_CONSUMER_FETCH_MAX_WAIT_MS:500}
    producer:
      topic-name: ${KAFKA_NUBO_TOPIC_NAME_API_ASIGNMENT_RESPONSE}
async:
  executor:
    core-pool-size: ${ASYNC_EXECUTOR_CORE_POOL_SIZE:5}
    max-pool-size: ${ASYNC_EXECUTOR_MAX_POOL_SIZE:10}
    queue-capacity: ${ASYNC_EXECUTOR_QUEUE_CAPACITY:100}
    thread-name-prefix: ${ASYNC_EXECUTOR_THREAD_NAME_PREFIX:msg-proc-}
    await-termination-seconds: ${ASYNC_EXECUTOR_AWAIT_TERMINATION_SECONDS:60}
logging:
  config: classpath:log/log4j2-prod.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR
client:
  nubo:
    url-operation-cmd: ${NUBO_URL_OPERATION_CMD}
    url-schedule-validate: ${NUBO_URL_SCHEDULE_VALIDATION}
schedule:
  screen-action-code:
    assignment: ${SCHEDULE_SCREEN_ACTION_CODE_ASSIGNMENT:238}
    final-assignment: ${SCHEDULE_SCREEN_ACTION_CODE_FINAL_ASSIGNMENT:239}
```

## src/main/resources/application-qa.yml

```yaml
server:
  port: @spring.port@
spring:
  config:
    import: "optional:file:/app/config/cause-catalog.yml"
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
    retries: 0
    bootstrap-servers: ${KAFKA_NUBO_BOOTSTRAP_SERVER}
    auto-offset-reset: ${KAFKA_NUBO_AUTO_OFFSET_RESET:latest}
    security:
      protocol: ${KAFKA_PROPERTIES_SECURITY_PROTOCOL}
    sasl:
      mechanism: ${KAFKA_PROPERTIES_SASL_MECHANISM}
      jaas:
        config: ${KAFKA_PROPERTIES_SASL_JAAS_CONFIG}
    consumer:
      topic-name: ${KAFKA_NUBO_TOPIC_NAME_API_ASIGNMENT_REQUEST}
      group-id: ${KAFKA_NUBO_GROUP_ID}
      max-poll-records: ${KAFKA_NUBO_CONSUMER_MAX_POLL_RECORDS:10}
      fetch-max-wait-ms: ${KAFKA_NUBO_CONSUMER_FETCH_MAX_WAIT_MS:500}
    producer:
      topic-name: ${KAFKA_NUBO_TOPIC_NAME_API_ASIGNMENT_RESPONSE}
async:
  executor:
    core-pool-size: ${ASYNC_EXECUTOR_CORE_POOL_SIZE:5}
    max-pool-size: ${ASYNC_EXECUTOR_MAX_POOL_SIZE:10}
    queue-capacity: ${ASYNC_EXECUTOR_QUEUE_CAPACITY:100}
    thread-name-prefix: ${ASYNC_EXECUTOR_THREAD_NAME_PREFIX:msg-proc-}
    await-termination-seconds: ${ASYNC_EXECUTOR_AWAIT_TERMINATION_SECONDS:60}
logging:
  config: classpath:log/log4j2.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR
client:
  nubo:
    url-operation-cmd: ${NUBO_URL_OPERATION_CMD}
    url-schedule-validate: ${NUBO_URL_SCHEDULE_VALIDATION}
schedule:
  screen-action-code:
    assignment: ${SCHEDULE_SCREEN_ACTION_CODE_ASSIGNMENT:238}
    final-assignment: ${SCHEDULE_SCREEN_ACTION_CODE_FINAL_ASSIGNMENT:239}
```

## src/main/resources/application-uat.yml

```yaml
server:
  port: @spring.port@
spring:
  config:
    import: "optional:file:/app/config/cause-catalog.yml"
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
    retries: 0
    bootstrap-servers: ${KAFKA_NUBO_BOOTSTRAP_SERVER}
    auto-offset-reset: ${KAFKA_NUBO_AUTO_OFFSET_RESET:latest}
    security:
      protocol: ${KAFKA_PROPERTIES_SECURITY_PROTOCOL}
    sasl:
      mechanism: ${KAFKA_PROPERTIES_SASL_MECHANISM}
      jaas:
        config: ${KAFKA_PROPERTIES_SASL_JAAS_CONFIG}
    consumer:
      topic-name: ${KAFKA_NUBO_TOPIC_NAME_API_ASIGNMENT_REQUEST}
      group-id: ${KAFKA_NUBO_GROUP_ID}
      max-poll-records: ${KAFKA_NUBO_CONSUMER_MAX_POLL_RECORDS:10}
      fetch-max-wait-ms: ${KAFKA_NUBO_CONSUMER_FETCH_MAX_WAIT_MS:500}
    producer:
      topic-name: ${KAFKA_NUBO_TOPIC_NAME_API_ASIGNMENT_RESPONSE}
async:
  executor:
    core-pool-size: ${ASYNC_EXECUTOR_CORE_POOL_SIZE:5}
    max-pool-size: ${ASYNC_EXECUTOR_MAX_POOL_SIZE:10}
    queue-capacity: ${ASYNC_EXECUTOR_QUEUE_CAPACITY:100}
    thread-name-prefix: ${ASYNC_EXECUTOR_THREAD_NAME_PREFIX:msg-proc-}
    await-termination-seconds: ${ASYNC_EXECUTOR_AWAIT_TERMINATION_SECONDS:60}
logging:
  config: classpath:log/log4j2.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR
client:
  nubo:
    url-operation-cmd: ${NUBO_URL_OPERATION_CMD}
    url-schedule-validate: ${NUBO_URL_SCHEDULE_VALIDATION}
schedule:
  screen-action-code:
    assignment: ${SCHEDULE_SCREEN_ACTION_CODE_ASSIGNMENT:238}
    final-assignment: ${SCHEDULE_SCREEN_ACTION_CODE_FINAL_ASSIGNMENT:239}
```

## src/main/resources/application.yml

```yaml
spring:
  profiles:
    active: ${SPRING_PROFILES_ACTIVE}
  application:
    name: @project.name@
    type: service
  config:
    import: "optional:file:/app/config/cause-catalog.yml"
server:
  servlet:
    context-path: /${spring.application.name}
application:
  version: @project.version@
  description: 'Documentation Endpoints'
  title: @project.description@
  group: ${spring.application.name}
nubo:
  assignment:
    batch:
      processing-size: ${NUBO_ASSIGNMENT_BATCH_PROCESSING_SIZE:80}
    kafka:
      batch-concurrency: ${NUBO_ASSIGNMENT_KAFKA_BATCH_CONCURRENCY:5}
    lanes:
      enabled: ${NUBO_ASSIGNMENT_LANES_ENABLED:false}
      parallelism: ${NUBO_ASSIGNMENT_LANES_PARALLELISM:2}
      await-termination-seconds: ${NUBO_ASSIGNMENT_LANES_AWAIT_TERMINATION_SECONDS:60}
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
,------.,--.   ,--.,--------.,------.,------. ,--.  ,--.  ,---.  ,--.    ,-----. ,------. ,------.,------.   ,---. ,--------.,--. ,-----. ,--.  ,--. ,---.   ,-----. ,------.  ,-----.,--.  ,--.,------. ,---.,--------.,------.   ,---. ,--------.,-----. ,------.   ,---.  ,------. ,--.
|  .---' \  `.'  / '--.  .--'|  .---'|  .--. '|  ,'.|  | /  O  \ |  |   '  .-.  '|  .--. '|  .---'|  .--. ' /  O  \'--.  .--'|  |'  .-.  '|  ,'.|  |'   .-' '  .-.  '|  .--. ''  .--./|  '--'  ||  .---''   .-'--.  .--'|  .--. ' /  O  \'--.  .--'  .-.  '|  .--. ' /  O  \ |  .--. '|  |
|  `--,   .'    \     |  |   |  `--, |  '--'.'|  |' '  ||  .-.  ||  |   |  | |  ||  '--' ||  `--, |  '--'.'|  .-.  |  |  |   |  ||  | |  ||  |' '  |`.  `-. |  | |  ||  '--'.'|  |    |  .--.  ||  `--, `.  `-.  |  |   |  '--'.'|  .-.  |  |  |  |  | |  ||  '--'.'|  .-.  ||  '--' ||  |
|  `---. /  .'.  \    |  |   |  `---.|  |\  \ |  | `   ||  | |  ||  '--.'  '-'  '|  | --' |  `---.|  |\  \ |  | |  |  |  |   |  |'  '-'  '|  | `   |.-'    |'  '-'  '|  |\  \ '  '--'\|  |  |  ||  `---..-'    | |  |   |  |\  \ |  | |  |  |  |  '  '-'  '|  |\  \ |  | |  ||  | --' |  |
`------''--'   '--'   `--'   `------'`--' '--'`--'  `--'`--' `--'`-----' `-----' `--'     `------'`--' '--'`--' `--'  `--'   `--' `-----' `--'  `--'`-----'  `-----' `--' '--' `-----'`--'  `--'`------'`-----'  `--'   `--' '--'`--' `--'  `--'   `-----' `--' '--'`--' `--'`--'     `--'

${application.title} ${application.version}
Powered by Spring Boot ${spring-boot.version}

```

## src/main/resources/cause-catalog.yml

```yaml
# Fuente: docs/plans/2026-09-17-mapa-errores-cadena-orquestador-depurado.md, tabla maestra §6 (filas
# 1-53: ErrorCode de orquestador y cmd-back; filas 63-64/69/72/76/78: causeCode propios de
# fracciones-contado-back reenviados sin envolver por cmd-back; más las claves compuestas
# RULE_REASSIGNMENT_BY_SIDE (Fase 4, filas 63-64) y RULE_FINAL_ASSIGNMENT_BY_SIDE/_BY_FRACTION/
# _BY_FRACTION_CUSTODIAN (Fase 5, filas 65-68)). Ver §9.3.1 para el diseño de este archivo y §9.6-b
# para la reconciliación completa de por qué 80 filas de §6 producen 64 entradas acá (exclusiones
# deliberadas + dedup de causeCode compartidos entre repos + claves compuestas sumadas, no 1:1).
cause-catalog:
  entries:
    # --- orquestador (filas 1-5) ---
    DEFINITIVE_ASSIGNMENT_ERROR:
      code: ARA-001
      message: "No fue posible completar la asignación definitiva: existen validaciones de negocio pendientes para la punta."
      type: BUSINESS
    VALIDATION_ERROR:
      code: ARA-002
      message: "El mensaje recibido no cumple con el formato o las validaciones esperadas."
      type: TECHNICAL
    CLIENT_OPERATIONS_CMD_ERROR:
      code: ARA-003
      message: "Ocurrió un error al procesar la solicitud. (003)"
      detailedMessage: "Ocurrió un error inesperado al comunicarse con el servicio de comandos de operaciones."
      type: TECHNICAL
    ERROR_KAFKA_CONSUMER_NUBO:
      code: ARA-004
      message: "Ocurrió un error al procesar la solicitud. (004)"
      detailedMessage: "El consumidor de Kafka del orquestador no pudo procesar el mensaje recibido."
      type: TECHNICAL
    ERROR_DESERIALIZER_JSON:
      code: ARA-005
      message: "Ocurrió un error al procesar la solicitud. (005)"
      detailedMessage: "El mensaje de Kafka no pudo ser deserializado a un objeto JSON válido."
      type: TECHNICAL

    # --- cmd-back (filas 6-53) ---
    UNAUTHORIZED:
      code: ARA-006
      message: "Ocurrió un error al procesar la solicitud. (006)"
      detailedMessage: "La solicitud no está autorizada."
      type: TECHNICAL
    UNEXPECTED:
      code: ARA-007
      message: "Ocurrió un error inesperado al procesar la solicitud. (007)"
      type: TECHNICAL
    METHOD_ARGUMENT_TYPE:
      code: ARA-008
      message: "Ocurrió un error al procesar la solicitud. (008)"
      detailedMessage: "La ruta de la solicitud no es válida."
      type: TECHNICAL
    METHOD_NOT_ALLOWED:
      code: ARA-009
      message: "Ocurrió un error al procesar la solicitud. (009)"
      detailedMessage: "El método HTTP utilizado no está permitido para este recurso."
      type: TECHNICAL
    NOT_FOUND:
      code: ARA-010
      message: "Ocurrió un error al procesar la solicitud. (010)"
      detailedMessage: "El recurso solicitado no existe."
      type: TECHNICAL
    UNSUPPORTED_MEDIA_TYPE:
      code: ARA-011
      message: "Ocurrió un error al procesar la solicitud. (011)"
      detailedMessage: "El tipo de contenido (Content-Type) de la solicitud no es compatible."
      type: TECHNICAL
    MESSAGE_NOT_READABLE:
      code: ARA-012
      message: "Ocurrió un error al procesar la solicitud. (012)"
      detailedMessage: "No fue posible leer el cuerpo de la solicitud."
      type: TECHNICAL
    BAD_REQUEST:
      code: ARA-013
      message: "Ocurrió un error al procesar la solicitud. (013)"
      detailedMessage: "El cuerpo de la solicitud no es válido."
      type: TECHNICAL
    HEADER_CLIENT_IP_REQUIRED:
      code: ARA-014
      message: "Ocurrió un error al procesar la solicitud. (014)"
      detailedMessage: "Falta el encabezado obligatorio client_ip."
      type: TECHNICAL
    HEADER_CLIENT_IP_INVALID:
      code: ARA-015
      message: "Ocurrió un error al procesar la solicitud. (015)"
      detailedMessage: "El encabezado client_ip no es válido."
      type: TECHNICAL
    HEADER_CLIENT_USER_REQUIRED:
      code: ARA-016
      message: "Ocurrió un error al procesar la solicitud. (016)"
      detailedMessage: "Falta el encabezado obligatorio client_user."
      type: TECHNICAL
    HEADER_CLIENT_DATETIME_REQUIRED:
      code: ARA-017
      message: "Ocurrió un error al procesar la solicitud. (017)"
      detailedMessage: "Falta el encabezado obligatorio client_datetime."
      type: TECHNICAL
    HEADER_CLIENT_DATETIME_INVALID:
      code: ARA-018
      message: "Ocurrió un error al procesar la solicitud. (018)"
      detailedMessage: "El encabezado client_datetime no es válido."
      type: TECHNICAL
    VERSION_API_NOT_FOUND:
      code: ARA-019
      message: "Ocurrió un error al procesar la solicitud. (019)"
      detailedMessage: "La versión de la API solicitada no existe."
      type: TECHNICAL
    TRADE_NOT_FOUND:
      code: ARA-020
      message: "No se encontró la operación informada."
      type: BUSINESS
    PARTICIPANT_NOT_FOUND:
      code: ARA-021
      message: "No se encontró el participante informado."
      type: BUSINESS
    PARTICIPANT_NOT_IN_SIDE:
      code: ARA-022
      message: "El participante informado no corresponde a la punta de la operación."
      type: BUSINESS
    CUSTODIAN_NOT_FOUND:
      code: ARA-023
      message: "No se encontró el custodio informado."
      type: BUSINESS
    FIC_ADMIN_NOT_FOUND:
      code: ARA-024
      message: "No se encontró el administrador de fondos (FIC) informado."
      type: BUSINESS
    INVESTOR_ACCOUNT_NOT_FOUND:
      code: ARA-025
      message: "No se encontró la cuenta de inversionista informada."
      type: BUSINESS
    PARTICIPANT_ACCOUNT_NOT_FOUND:
      code: ARA-026
      message: "No se encontró la cuenta del participante informada."
      type: BUSINESS
    TYPE_NOT_FOUND:
      code: ARA-027
      message: "Ocurrió un error al procesar la solicitud. (027)"
      detailedMessage: "No se encontró el tipo informado."
      type: BUSINESS
    ACCOUNT_NOT_FOUND:
      code: ARA-028
      message: "No se encontró la cuenta informada."
      type: BUSINESS
    SIDE_NOT_FOUND:
      code: ARA-029
      message: "No se encontró la punta informada."
      type: BUSINESS
    TAXES_NOT_FOUND:
      code: ARA-030
      message: "Ocurrió un error al procesar la solicitud. (030)"
      detailedMessage: "No se encontró la configuración de impuestos aplicable."
      type: BUSINESS
    TYPE_MAPPING_NOT_FOUND:
      code: ARA-031
      message: "Ocurrió un error al procesar la solicitud. (031)"
      detailedMessage: "No se encontró el mapeo de tipos correspondiente."
      type: BUSINESS
    TRADE_DEPOSITORY_REQUIRED:
      code: ARA-032
      message: "Se requiere el depósito de la operación."
      type: BUSINESS
    TYPE_COUNTED_OR_REPO_OPERATION_REQUIRED:
      code: ARA-033
      message: "El tipo de operación debe ser contado o repo."
      type: BUSINESS
    ACCOUNT_DEPOSITORY_NOT_CORRESPOND_TO_TRADE:
      code: ARA-034
      message: "El depósito de la cuenta no corresponde al de la operación."
      type: BUSINESS
    SOURCE_QUOTE_TYPE_REQUIRED:
      code: ARA-035
      message: "Ocurrió un error al procesar la solicitud. (035)"
      detailedMessage: "Se requiere el tipo de cotización de origen."
      type: BUSINESS
    FRACTION_TOTAL_QUANTITY_NOT_CORRESPOND_QUANTITY_TRADE:
      code: ARA-036
      message: "La suma de las cantidades de las fracciones no corresponde a la cantidad total de la operación."
      type: BUSINESS
    MAXIMUM_LIMIT_FRACTIONS_EXCEED:
      code: ARA-037
      message: "Se superó el límite máximo de fracciones permitido."
      type: BUSINESS
    INVALID_BUSINESS_RULE_VALUE:
      code: ARA-038
      message: "El valor no es válido para la regla de negocio aplicada."
      type: TECHNICAL
    ACCOUNT_NOT_ACTIVE:
      code: ARA-039
      message: "La cuenta informada no está activa."
      type: BUSINESS
    PARTICIPANT_ACCOUNT_OR_INVESTOR_ACCOUNT_NOT_FOUND:
      code: ARA-040
      message: "No se encontró una cuenta de participante ni de inversionista para el origen especificado."
      type: BUSINESS
    INVESTOR_ACCOUNT_DUPLICATED:
      code: ARA-041
      message: "La cuenta de inversionista no puede estar duplicada."
      type: BUSINESS
    PARTICIPANT_ACCOUNT_DUPLICATED:
      code: ARA-042
      message: "La cuenta del participante no puede estar duplicada."
      type: BUSINESS
    FRACTION_CUSTODIAN_STATUS_DONT_BE_EDIT:
      code: ARA-043
      message: "La fracción está en proceso de custodia y no puede editarse."
      type: BUSINESS
    CUD_ACCOUNT_CANT_BE_EMPTY_TO_COLOMBIA_OPERATION:
      code: ARA-044
      message: "La cuenta CUD no puede estar vacía para una operación de Colombia."
      type: BUSINESS
    OWN_POSITION_ONLY_ONE_FRACTION_ALLOWED:
      code: ARA-045
      message: "La posición propia solo permite una fracción."
      type: BUSINESS
    OWN_POSITION_COMMISSION_MUST_BE_ZERO:
      code: ARA-046
      message: "La comisión debe ser cero para la posición propia."
      type: BUSINESS
    ACCOUNT_NOT_MATCH_OF_OWN_POSITION:
      code: ARA-047
      message: "La cuenta no corresponde a la posición propia."
      type: BUSINESS
    CUD_ACCOUNT_CANT_BE_EMPTY_OR_DIFFERENT_TO_ASSIGNMENT_MARK:
      code: ARA-048
      message: "La cuenta CUD no puede estar vacía ni ser distinta de la marca de asignación."
      type: BUSINESS
    CUD_ACCOUNT_NOT_FOUND:
      code: ARA-049
      message: "No se encontró la cuenta CUD informada."
      type: BUSINESS
    CUSTODIAN_AND_FIC_MUST_BE_EMPTY_TO_ASSIGNMENT_MARK:
      code: ARA-050
      message: "El custodio y el administrador de fondos (FIC) deben estar vacíos para la marca de asignación."
      type: BUSINESS
    CUSTODIAN_AND_FIC_MUST_BE_EMPTY_TO_MASTER_ACCOUNT:
      code: ARA-051
      message: "El custodio y el administrador de fondos (FIC) deben estar vacíos para la cuenta maestra."
      type: BUSINESS
    CLIENT_OPERATION_FRACTIONATION_ERROR:
      code: ARA-052
      message: "Ocurrió un error al procesar la solicitud. (052)"
      detailedMessage: "Ocurrió un error inesperado al comunicarse con el servicio de fraccionamiento de operaciones."
      type: TECHNICAL
    CLIENT_OPERATION_RULES_ERROR:
      code: ARA-053
      message: "Ocurrió un error al procesar la solicitud. (053)"
      detailedMessage: "Ocurrió un error inesperado al comunicarse con el servicio de reglas de negocio."
      type: TECHNICAL

    CLIENT_OPERATION_RULES_ERROR-RULE_REASSIGNMENT_BY_SIDE-B:
      code: ARA-054
      message: "La fecha de cumplimiento no permite la reasignación."
      type: BUSINESS
    CLIENT_OPERATION_RULES_ERROR-RULE_REASSIGNMENT_BY_SIDE-C:
      code: ARA-055
      message: "El estado actual de la punta no permite procesar la solicitud de reasignación."
      type: BUSINESS
    CLIENT_OPERATION_RULES_ERROR-RULE_ASSIGNMENT_OWN_POSITION_BY_SIDE-C:
      code: ARA-056
      message: "El estado actual de la punta no permite procesar la solicitud de asignación."
      type: BUSINESS

    # --- fracciones-contado-back (filas 69-78 de §6; alcanzables vía el forward verbatim de
    # BatchAssignmentItemOutDto.errorCode en cmd-back, ver Fase 3). TRADE_NOT_FOUND, SIDE_NOT_FOUND,
    # TYPE_NOT_FOUND, TAXES_NOT_FOUND, INVESTOR_ACCOUNT_NOT_FOUND y PARTICIPANT_ACCOUNT_NOT_FOUND
    # (filas 70/71/73/74/75/77) reusan el mismo ErrorCode.name() que cmd-back y ya están catalogados
    # arriba — solo se agregan acá las 4 entradas que cmd-back no tiene (fila 69, 72, 76, 78). Fila 79
    # (CLIENT_OPERATION_RULES_ERROR) también reusa la entrada de cmd-back de arriba. Filas 54-62
    # (reglas-back, HTTP directo) y 80 (calculos-back) quedan fuera deliberadamente: no son
    # alcanzables vía el pipeline real del orquestador (ver §6/§9.3) — catalogarlas sería código
    # muerto en este archivo.
    STATUS_NOT_FOUND:
      code: ARA-057
      message: "Ocurrió un error al procesar la solicitud. (057)"
      detailedMessage: "No se encontró el estado informado."
      type: BUSINESS
    SETTLEMENT_NOT_FOUND:
      code: ARA-058
      message: "Ocurrió un error al procesar la solicitud. (058)"
      detailedMessage: "No se encontró la liquidación informada."
      type: BUSINESS
    MILA_DEPOSITORY_NOT_FOUND:
      code: ARA-059
      message: "Ocurrió un error al procesar la solicitud. (059)"
      detailedMessage: "No se encontró el depósito MILA informado."
      type: BUSINESS
    CLIENT_OPERATION_CALCULATION_ERROR:
      code: ARA-060
      message: "Ocurrió un error al procesar la solicitud. (060)"
      detailedMessage: "Ocurrió un error inesperado al comunicarse con el servicio de cálculo de operaciones."
      type: TECHNICAL

    # --- asignación definitiva (filas 65-68 de §6; DEFINITIVE_ASSIGNMENT_ERROR, Fase 5). Mismo mecanismo
    # que las 2 claves compuestas de reasignación de arriba: businessRuleCode viaja intacto desde
    # reglas-back (validateUpdateStatusTradeV1, sin cambios -- ya era genérico) hasta cmd-back
    # (AssignmentClosureServiceImpl, directo a reglas-back, no pasa por fracciones-contado-back) y
    # orquestador concatena. NO reusa ARA-106 pese a que §8 lo reservaba conceptualmente para 238-A:
    # ese código ya está tomado por la entrada de reasignación 233-C de arriba (ver nota de esa
    # sección) -- se le asigna numeración secuencial propia en su lugar.
    DEFINITIVE_ASSIGNMENT_ERROR-RULE_FINAL_ASSIGNMENT_BY_SIDE-B:
      code: ARA-061
      message: "El estado de la punta no permite la asignación definitiva."
      type: BUSINESS
    DEFINITIVE_ASSIGNMENT_ERROR-RULE_FINAL_ASSIGNMENT_BY_SIDE-C:
      code: ARA-062
      message: "La fecha de cumplimiento no permite el envío a CCP."
      type: BUSINESS
    DEFINITIVE_ASSIGNMENT_ERROR-RULE_FINAL_ASSIGNMENT_BY_FRACTION-A:
      code: ARA-063
      message: "La punta no ha sido asignada."
      type: BUSINESS
    DEFINITIVE_ASSIGNMENT_ERROR-RULE_FINAL_ASSIGNMENT_BY_FRACTION_CUSTODIAN-A:
      code: ARA-064
      message: "Existen procesos de custodia pendientes para la punta."
      type: BUSINESS

    CLIENT_OPERATION_RULES_ERROR-RULE_ASSIGNMENT_OWN_POSITION_BY_SIDE-B:
      code: ARA-065
      message: "La fecha de cumplimiento no permite realizar la asignación."
      type: BUSINESS
    CLIENT_OPERATION_RULES_ERROR-RULE_ASSIGNMENT_OWN_POSITION_BY_SIDE-D:
      code: ARA-066
      message: "La punta ya ha sido asignada."
      type: BUSINESS
    CLIENT_OPERATION_RULES_ERROR-RULE_ASSIGNMENT_OWN_POSITION_BY_SIDE-E:
      code: ARA-067
      message: "La punta no es de tipo posición propia."
      type: BUSINESS

    NOT_BUSINESS_DAY:
      code: ARA-068
      message: "La operación no puede procesarse: hoy no es un día hábil."
      type: BUSINESS
    OUTSIDE_BUSINESS_HOURS:
      code: ARA-069
      message: "La operación no puede procesarse fuera del horario habilitado."
      type: BUSINESS
    SCHEDULE_VALIDATION_API_ERROR:
      code: ARA-070
      message: "Ocurrió un error al procesar la solicitud. (070)"
      detailedMessage: "Ocurrió un error inesperado al comunicarse con el servicio de validación de horarios."
      type: TECHNICAL
    COUNTRY_NOT_FOUND:
      code: ARA-071
      message: "No se encontró el país del participante."
      type: BUSINESS

    UNCLASSIFIED:
      code: ARA-000
      message: "Ocurrió un error no clasificado al procesar la solicitud."
      type: TECHNICAL

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

## src/main/java/com/nubo/operation/orchestrator/ext/api/ExternalOperationsOrchestratorApiApplication.java

```java
package com.nubo.operation.orchestrator.ext.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ExternalOperationsOrchestratorApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(ExternalOperationsOrchestratorApiApplication.class, args);
	}

}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/application/annotations/ValidBigDecimal.java

```java
package com.nubo.operation.orchestrator.ext.api.application.annotations;

import com.nubo.operation.orchestrator.ext.api.application.config.ValidBigDecimalConfig;
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

## src/main/java/com/nubo/operation/orchestrator/ext/api/application/cause/CauseCatalog.java

```java
package com.nubo.operation.orchestrator.ext.api.application.cause;

import com.nubo.operation.orchestrator.ext.api.models.dto.response.ApiClientCauseDto;
import com.nubo.operation.orchestrator.ext.api.models.dto.response.BusinessRuleCodeOutDto;
import com.nubo.operation.orchestrator.ext.api.models.dto.response.CauseType;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
@Slf4j
public class CauseCatalog {

    private static final String UNCLASSIFIED_KEY = "UNCLASSIFIED";
    private static final String HARD_FALLBACK_CODE = "ARA-000";
    private static final String HARD_FALLBACK_MESSAGE = "No fue posible procesar la solicitud. Contacte a soporte.";
    private static final CauseType HARD_FALLBACK_TYPE = CauseType.TECHNICAL;

    private final CauseCatalogProperties properties;

    /** Prueba primero la clave compuesta {@code causeCode-ruleCode-validationCode} (ej.
      * "CLIENT_OPERATION_RULES_ERROR-RULE_REASSIGNMENT_BY_SIDE-B") si businessRuleCode viene completo;
      * si esa clave no está en el catalogo, cae al causeCode plano. Es el único lugar de toda la
      * cadena (reglas-back -> fracciones-contado-back -> cmd-back -> orquestador) donde ruleCode y
      * validationCode se concatenan -- en los 3 repos anteriores viajan como objeto, sin tocar. */
    public ApiClientCauseDto resolve(String causeCode, BusinessRuleCodeOutDto businessRuleCode) {
        if (businessRuleCode != null && businessRuleCode.getRuleCode() != null
                && businessRuleCode.getValidationCode() != null) {
            String compositeKey = causeCode + "-" + businessRuleCode.getRuleCode() + "-"
                    + businessRuleCode.getValidationCode();
            if (properties.getEntries().containsKey(compositeKey)) {
                return resolve(compositeKey);
            }
        }
        return resolve(causeCode);
    }

    /** causeCode (ej. "TRADE_NOT_FOUND", "233-B") -> apiClient completo (causeCode + code + message + type). Nunca lanza. */
    public ApiClientCauseDto resolve(String causeCode) {
        String key = causeCode == null ? UNCLASSIFIED_KEY : causeCode;
        CauseEntry entry = properties.getEntries().get(key);
        if (entry == null) {
            log.warn("causeCode={} sin entrada en cause-catalog.yml -- resolviendo a {} -- agregar la entrada "
                    + "al catalogo (Fase 0/6)", key, UNCLASSIFIED_KEY);
            entry = properties.getEntries().get(UNCLASSIFIED_KEY);
        }
        if (entry == null) {
            log.error("cause-catalog.yml no tiene ni siquiera la entrada {} configurada -- revisar el despliegue "
                    + "del archivo", UNCLASSIFIED_KEY);
            return ApiClientCauseDto.builder().causeCode(key).code(HARD_FALLBACK_CODE).message(HARD_FALLBACK_MESSAGE)
                    .type(HARD_FALLBACK_TYPE).build();
        }
        return ApiClientCauseDto.builder().causeCode(key).code(entry.code()).message(entry.message())
                .type(entry.type()).build();
    }
}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/application/cause/CauseCatalogProperties.java

```java
package com.nubo.operation.orchestrator.ext.api.application.cause;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import java.util.LinkedHashMap;
import java.util.Map;

@Component
@ConfigurationProperties(prefix = "cause-catalog")
public class CauseCatalogProperties {

    private Map<String, CauseEntry> entries = new LinkedHashMap<>();

    public Map<String, CauseEntry> getEntries() {
        return entries;
    }

    public void setEntries(Map<String, CauseEntry> entries) {
        this.entries = entries;
    }
}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/application/cause/CauseEntry.java

```java
package com.nubo.operation.orchestrator.ext.api.application.cause;

import com.nubo.operation.orchestrator.ext.api.models.dto.response.CauseType;

public record CauseEntry(String code, String message, CauseType type) {
}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/application/config/AssignmentLaneExecutorConfig.java

```java
package com.nubo.operation.orchestrator.ext.api.application.config;

import com.nubo.operation.orchestrator.ext.api.application.properties.PropertiesConfig;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;

@Configuration
@RequiredArgsConstructor
public class AssignmentLaneExecutorConfig {

    private final PropertiesConfig propertiesConfig;

    @Bean("assignmentBatchExecutor")
    public ThreadPoolTaskExecutor assignmentBatchExecutor() {
        int parallelism = propertiesConfig.isAssignmentLanesEnabled()
                ? propertiesConfig.getAssignmentLanesParallelism() : 1;
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        executor.setCorePoolSize(parallelism);
        executor.setMaxPoolSize(parallelism);
        executor.setQueueCapacity(parallelism);
        executor.setThreadNamePrefix("assignment-lane-");
        executor.setWaitForTasksToCompleteOnShutdown(true);
        executor.setAwaitTerminationSeconds(propertiesConfig.getAssignmentLanesAwaitTerminationSeconds());
        executor.initialize();
        return executor;
    }
}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/application/config/AsyncConfig.java

```java
package com.nubo.operation.orchestrator.ext.api.application.config;

import com.nubo.operation.orchestrator.ext.api.application.properties.PropertiesConfig;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;

import java.util.concurrent.Executor;

@Slf4j
@Configuration
@EnableAsync
@RequiredArgsConstructor
public class AsyncConfig {

    private final PropertiesConfig propertiesConfig;

    /** @deprecated Assignment batch lanes use the dedicated assignmentBatchExecutor. */
    @Bean(name = "messageProcessorExecutor")
    @Deprecated(since = "0.8.12-alpha.7", forRemoval = true)
    public Executor messageProcessorExecutor() {
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        executor.setCorePoolSize(propertiesConfig.getAsyncExecutorCorePoolSize());
        executor.setMaxPoolSize(propertiesConfig.getAsyncExecutorMaxPoolSize());
        executor.setQueueCapacity(propertiesConfig.getAsyncExecutorQueueCapacity());
        executor.setThreadNamePrefix(propertiesConfig.getAsyncExecutorThreadNamePrefix());
        executor.setWaitForTasksToCompleteOnShutdown(true);
        executor.setAwaitTerminationSeconds(propertiesConfig.getAsyncExecutorAwaitTerminationSeconds());
        executor.initialize();

        log.info("Message processor executor initialized with corePoolSize: {}, maxPoolSize: {}, queueCapacity: {}",
                propertiesConfig.getAsyncExecutorCorePoolSize(),
                propertiesConfig.getAsyncExecutorMaxPoolSize(),
                propertiesConfig.getAsyncExecutorQueueCapacity());

        return executor;
    }
}


```

## src/main/java/com/nubo/operation/orchestrator/ext/api/application/config/KafkaConsumerConfig.java

```java
package com.nubo.operation.orchestrator.ext.api.application.config;

import com.nubo.operation.orchestrator.ext.api.application.properties.PropertiesConfig;
import com.nubo.operation.orchestrator.ext.api.exception.handler.CustomKafkaErrorHandler;
import com.nubo.operation.orchestrator.ext.api.models.dto.request.MessageInDto;
import lombok.RequiredArgsConstructor;
import org.apache.kafka.clients.consumer.ConsumerConfig;
import org.apache.kafka.common.serialization.StringDeserializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.kafka.annotation.EnableKafka;
import org.springframework.kafka.config.ConcurrentKafkaListenerContainerFactory;
import org.springframework.kafka.core.ConsumerFactory;
import org.springframework.kafka.core.DefaultKafkaConsumerFactory;
import org.springframework.kafka.support.serializer.JsonDeserializer;
import org.springframework.retry.backoff.ExponentialBackOffPolicy;
import org.springframework.retry.policy.SimpleRetryPolicy;
import org.springframework.retry.support.RetryTemplate;

import java.util.HashMap;
import java.util.Map;

@EnableKafka
@Configuration
@RequiredArgsConstructor
public class KafkaConsumerConfig {

    private final Environment environment;
    private final PropertiesConfig propertiesConfig;

    /** @deprecated The active Kafka path uses {@link #consumerFactoryKafkaNuboBatch()}. */
    @Bean
    @Deprecated(since = "0.8.12-alpha.7", forRemoval = true)
    public ConsumerFactory<String, MessageInDto> consumerFactoryKafkaNubo() {
        Map<String, Object> configProps = new HashMap<>();
        configProps.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, propertiesConfig.getKafkaNuboBootstrapServers());
        configProps.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);
        configProps.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, JsonDeserializer.class);
        configProps.put(ConsumerConfig.GROUP_ID_CONFIG, propertiesConfig.getKafkaNuboConsumerGroupId());
        configProps.put(ConsumerConfig.AUTO_OFFSET_RESET_CONFIG, propertiesConfig.getKafkaNuboAutoOffsetReset());

        configProps.put("security.protocol", propertiesConfig.getKafkaNuboSecurityProtocol());
        configProps.put("sasl.mechanism", propertiesConfig.getKafkaNuboSaslMechanism());
        configProps.put("sasl.jaas.config", propertiesConfig.getKafkaNuboSaslJaasConfig());

        JsonDeserializer<MessageInDto> deserializer = new JsonDeserializer<>(MessageInDto.class);
        deserializer.addTrustedPackages("*");

        return new DefaultKafkaConsumerFactory<>(configProps, new StringDeserializer(), deserializer);
    }

    @Bean
    public ConsumerFactory<String, String> consumerFactoryKafkaNuboBatch() {
        Map<String, Object> configProps = new HashMap<>();
        configProps.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, propertiesConfig.getKafkaNuboBootstrapServers());
        configProps.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);
        configProps.put(ConsumerConfig.GROUP_ID_CONFIG, propertiesConfig.getKafkaNuboConsumerGroupId());
        configProps.put(ConsumerConfig.AUTO_OFFSET_RESET_CONFIG, propertiesConfig.getKafkaNuboAutoOffsetReset());

        // Configuración de seguridad
        configProps.put("security.protocol", propertiesConfig.getKafkaNuboSecurityProtocol());
        configProps.put("sasl.mechanism", propertiesConfig.getKafkaNuboSaslMechanism());
        configProps.put("sasl.jaas.config", propertiesConfig.getKafkaNuboSaslJaasConfig());

        // Configuración optimizada para BATCH
        configProps.put(ConsumerConfig.ENABLE_AUTO_COMMIT_CONFIG, false);
        configProps.put(ConsumerConfig.MAX_POLL_RECORDS_CONFIG, propertiesConfig.getKafkaNuboConsumerMaxPollRecords());
        configProps.put(ConsumerConfig.FETCH_MIN_BYTES_CONFIG, 50_000);
        configProps.put(ConsumerConfig.FETCH_MAX_WAIT_MS_CONFIG, propertiesConfig.getKafkaNuboConsumerFetchMaxWaitMs());
        configProps.put("isolation.level", "read_committed");

        return new DefaultKafkaConsumerFactory<>(configProps, new StringDeserializer(), new StringDeserializer());
    }

    /** @deprecated The active Kafka path uses {@link #kafkaNuboBatchListenerContainerFactory(CustomKafkaErrorHandler)}. */
    @Bean
    @Deprecated(since = "0.8.12-alpha.7", forRemoval = true)
    public ConcurrentKafkaListenerContainerFactory<String, MessageInDto> kafkaNuboListenerContainerFactory(
            CustomKafkaErrorHandler errorHandler) {
        ConcurrentKafkaListenerContainerFactory<String, MessageInDto> factory =
                new ConcurrentKafkaListenerContainerFactory<>();
        factory.setConsumerFactory(consumerFactoryKafkaNubo());
        factory.setCommonErrorHandler(errorHandler);
        return factory;
    }

    @Bean
    public ConcurrentKafkaListenerContainerFactory<String, String> kafkaNuboBatchListenerContainerFactory(
            CustomKafkaErrorHandler errorHandler) {
        ConcurrentKafkaListenerContainerFactory<String, String> factory =
                new ConcurrentKafkaListenerContainerFactory<>();
        factory.setConsumerFactory(consumerFactoryKafkaNuboBatch());
        factory.setCommonErrorHandler(errorHandler);
        factory.setBatchListener(true);
        factory.setConcurrency(propertiesConfig.getAssignmentKafkaBatchConcurrency());
        factory.getContainerProperties().setAckMode(org.springframework.kafka.listener.ContainerProperties.AckMode.BATCH);
        return factory;
    }

    @Bean
    public RetryTemplate retryTemplate() {
        SimpleRetryPolicy retryPolicy = new SimpleRetryPolicy();
        retryPolicy.setMaxAttempts(propertiesConfig.getKafkaNuboRetries());

        ExponentialBackOffPolicy backOffPolicy = new ExponentialBackOffPolicy();
        backOffPolicy.setInitialInterval(1000);
        backOffPolicy.setMaxInterval(10000);

        RetryTemplate retryTemplate = new RetryTemplate();
        retryTemplate.setRetryPolicy(retryPolicy);
        retryTemplate.setBackOffPolicy(backOffPolicy);

        return retryTemplate;
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

## src/main/java/com/nubo/operation/orchestrator/ext/api/application/config/KafkaProducerConfig.java

```java
package com.nubo.operation.orchestrator.ext.api.application.config;

import com.nubo.operation.orchestrator.ext.api.application.properties.PropertiesConfig;
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

## src/main/java/com/nubo/operation/orchestrator/ext/api/application/config/SwaggerConfig.java

```java
package com.nubo.operation.orchestrator.ext.api.application.config;

import com.nubo.operation.orchestrator.ext.api.exception.error.ErrorResponse;
import com.nubo.operation.orchestrator.ext.api.exception.error.ErrorValidation;
import com.nubo.operation.orchestrator.ext.api.models.enums.PropertiesEnum;
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

## src/main/java/com/nubo/operation/orchestrator/ext/api/application/config/ValidBigDecimalConfig.java

```java
package com.nubo.operation.orchestrator.ext.api.application.config;

import com.nubo.operation.orchestrator.ext.api.application.annotations.ValidBigDecimal;
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

## src/main/java/com/nubo/operation/orchestrator/ext/api/application/config/WebConfig.java

```java
package com.nubo.operation.orchestrator.ext.api.application.config;

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

## src/main/java/com/nubo/operation/orchestrator/ext/api/application/context/GlobalContext.java

```java
package com.nubo.operation.orchestrator.ext.api.application.context;

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

## src/main/java/com/nubo/operation/orchestrator/ext/api/application/database/NamingStrategyConfig.java

```java
package com.nubo.operation.orchestrator.ext.api.application.database;

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

## src/main/java/com/nubo/operation/orchestrator/ext/api/application/database/UpperNamingConfig.java

```java
package com.nubo.operation.orchestrator.ext.api.application.database;

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

## src/main/java/com/nubo/operation/orchestrator/ext/api/application/filters/GlobalFilter.java

```java
package com.nubo.operation.orchestrator.ext.api.application.filters;

import com.nubo.operation.orchestrator.ext.api.application.context.GlobalContext;
import com.nubo.operation.orchestrator.ext.api.application.util.ApplicationUtils;
import com.nubo.operation.orchestrator.ext.api.exception.ServiceException;
import com.nubo.operation.orchestrator.ext.api.exception.error.ErrorCode;
import com.nubo.operation.orchestrator.ext.api.exception.error.ErrorResponse;
import com.nubo.operation.orchestrator.ext.api.models.enums.PropertiesEnum;
import com.nubo.operation.orchestrator.ext.api.models.enums.VersionApiEnum;
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
            if (uri.contains("/v3/api-docs") || uri.contains("/swagger-ui") ||
                    uri.contains("/v1/websocket") || uri.contains("/actuator")) {
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

## src/main/java/com/nubo/operation/orchestrator/ext/api/application/interceptors/GlobalInterceptor.java

```java
package com.nubo.operation.orchestrator.ext.api.application.interceptors;

import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import com.nubo.operation.orchestrator.ext.api.application.context.GlobalContext;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@Component
@Order(2)
@RequiredArgsConstructor
public class GlobalInterceptor implements HandlerInterceptor {

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler,
            Exception ex) {
        GlobalContext.remove();
    }
}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/application/properties/PropertiesConfig.java

```java
package com.nubo.operation.orchestrator.ext.api.application.properties;

import jakarta.annotation.PostConstruct;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
@Data
@Slf4j
public class PropertiesConfig {

    private static final int MIN_ASSIGNMENT_LANES_PARALLELISM = 1;
    private static final int MAX_ASSIGNMENT_LANES_PARALLELISM = 6;

    @Value("${spring.application.name}")
    private String apiName;

    // Kafka Configuration
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

    @Value("${kafka.nubo.consumer.topic-name}")
    private String kafkaNuboConsumerTopicName;

    @Value("${kafka.nubo.consumer.group-id}")
    private String kafkaNuboConsumerGroupId;

    @Value("${kafka.nubo.producer.topic-name}")
    private String kafkaNuboProducerTopicName;

    @Value("${kafka.nubo.auto-offset-reset}")
    private String kafkaNuboAutoOffsetReset;

    // Kafka Batch Configuration
    @Value("${kafka.nubo.consumer.max-poll-records:100}")
    private Integer kafkaNuboConsumerMaxPollRecords;

    @Value("${kafka.nubo.consumer.fetch-max-wait-ms:500}")
    private Integer kafkaNuboConsumerFetchMaxWaitMs;

    // Async Thread Pool Configuration
    @Value("${async.executor.core-pool-size:10}")
    private Integer asyncExecutorCorePoolSize;

    @Value("${async.executor.max-pool-size:20}")
    private Integer asyncExecutorMaxPoolSize;

    @Value("${async.executor.queue-capacity:500}")
    private Integer asyncExecutorQueueCapacity;

    @Value("${async.executor.thread-name-prefix:message-processor-}")
    private String asyncExecutorThreadNamePrefix;

    @Value("${async.executor.await-termination-seconds:60}")
    private Integer asyncExecutorAwaitTerminationSeconds;

    @Value("${nubo.assignment.batch.processing-size:50}")
    private Integer assignmentBatchProcessingSize;

    @Value("${nubo.assignment.kafka.batch-concurrency:1}")
    private Integer assignmentKafkaBatchConcurrency;

    @Value("${nubo.assignment.lanes.enabled:false}")
    private Boolean assignmentLanesEnabled;

    @Value("${nubo.assignment.lanes.parallelism:1}")
    private Integer assignmentLanesParallelism;

    @Value("${nubo.assignment.lanes.await-termination-seconds:60}")
    private Integer assignmentLanesAwaitTerminationSeconds;

    @Value("${client.nubo.url-operation-cmd}")
    private String urlNuboOperationCmd;

    @Value("${client.nubo.url-schedule-validate}")
    private String urlScheduleValidate;

    @Value("${schedule.screen-action-code.assignment:238}")
    private Integer scheduleScreenActionCodeAssignment;

    @Value("${schedule.screen-action-code.final-assignment:239}")
    private Integer scheduleScreenActionCodeFinalAssignment;

    @PostConstruct
    void logAssignmentConfiguration() {
        log.info("PERF_ASSIGNMENT_CONFIG service=orquestador podName={} maxPollRecords={} batchProcessingSize={} batchConcurrency={} lanesEnabled={} lanesParallelism={}",
                System.getenv().getOrDefault("HOSTNAME", "unknown"), kafkaNuboConsumerMaxPollRecords, assignmentBatchProcessingSize,
                getAssignmentKafkaBatchConcurrency(), isAssignmentLanesEnabled(), getAssignmentLanesParallelism());
    }

    public int getAssignmentKafkaBatchConcurrency() {
        return Math.max(1, Math.min(5, assignmentKafkaBatchConcurrency == null ? 1 : assignmentKafkaBatchConcurrency));
    }

    public boolean isAssignmentLanesEnabled() {
        return Boolean.TRUE.equals(assignmentLanesEnabled);
    }

    public int getAssignmentLanesParallelism() {
        return Math.max(MIN_ASSIGNMENT_LANES_PARALLELISM,
                Math.min(MAX_ASSIGNMENT_LANES_PARALLELISM,
                        assignmentLanesParallelism == null ? MIN_ASSIGNMENT_LANES_PARALLELISM
                                : assignmentLanesParallelism));
    }

    public int getAssignmentLanesAwaitTerminationSeconds() {
        return Math.max(1, assignmentLanesAwaitTerminationSeconds == null ? 60 : assignmentLanesAwaitTerminationSeconds);
    }

    /*
    @Value("${token.jwt.secret}")
    private String tokenJwtSecret;
     */

}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/application/properties/PropertiesContext.java

```java
package com.nubo.operation.orchestrator.ext.api.application.properties;

import com.nubo.operation.orchestrator.ext.api.application.context.GlobalContext;
import com.nubo.operation.orchestrator.ext.api.application.util.ApplicationUtils;
import com.nubo.operation.orchestrator.ext.api.models.enums.PropertiesEnum;

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
        if(clientDatetime != null){
            return LocalDateTime.parse(clientDatetime, formatter);
        }
        return LocalDateTime.now();
    }


    public static String getAuthToken() {
        return GlobalContext.getProperty(PropertiesEnum.AUTH_TOKEN.getValue());
    }


    public static String getVersion() {
        return GlobalContext.getProperty(PropertiesEnum.VERSION_API.getValue());
    }

}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/application/util/ApplicationUtils.java

```java
package com.nubo.operation.orchestrator.ext.api.application.util;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.nubo.operation.orchestrator.ext.api.exception.ServiceException;
import com.nubo.operation.orchestrator.ext.api.exception.error.ErrorCode;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;

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

    public static LocalDate getLocalDateNow(String zoneId) {
        try {
            return LocalDate.now(ZoneId.of(zoneId));
        } catch (Exception e) {
            return LocalDate.now();
        }
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

## src/main/java/com/nubo/operation/orchestrator/ext/api/application/util/RestClientUtils.java

```java
package com.nubo.operation.orchestrator.ext.api.application.util;

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

    public <T> ResponseEntity<T> requestBodyWithResponseObject(URI url, HttpMethod method, HttpHeaders headers,
            Object requestBody, Class<T> responseType) {
        log.info("Client [{}] {}", method, url);
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

    // Método para tipos parametrizados (List, Set, etc.)
    public <T> ResponseEntity<T> requestBodyWithResponseType(URI url, HttpMethod method, HttpHeaders headers,
            Object requestBody, ParameterizedTypeReference<T> responseType) {
        log.info("Client [{}] {}", method, url);
        return restClient.method(method)
                .uri(url)
                .headers(h -> h.addAll(headers))
                .body(requestBody)
                .retrieve()
                .toEntity(responseType);
    }

}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/application/util/ValidatorUtil.java

```java
package com.nubo.operation.orchestrator.ext.api.application.util;

import com.nubo.operation.orchestrator.ext.api.exception.ServiceException;
import com.nubo.operation.orchestrator.ext.api.exception.error.ErrorCode;
import jakarta.validation.ConstraintViolation;
import jakarta.validation.Validator;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.util.Set;

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

## src/main/java/com/nubo/operation/orchestrator/ext/api/application/util/WebClientUtils.java

```java
package com.nubo.operation.orchestrator.ext.api.application.util;

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

## src/main/java/com/nubo/operation/orchestrator/ext/api/client/kafka/consumer/service/KafkaNuboAdapterConsumer.java

```java
package com.nubo.operation.orchestrator.ext.api.client.kafka.consumer.service;

import org.apache.kafka.clients.consumer.ConsumerRecord;

import java.util.List;

public interface KafkaNuboAdapterConsumer {

    void listenKafkaBatch(List<ConsumerRecord<String, String>> records);

}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/client/kafka/consumer/service/impl/KafkaNuboAdapterConsumerImpl.java

```java
package com.nubo.operation.orchestrator.ext.api.client.kafka.consumer.service.impl;

import com.nubo.operation.orchestrator.ext.api.application.properties.PropertiesConfig;
import com.nubo.operation.orchestrator.ext.api.client.kafka.consumer.service.KafkaNuboAdapterConsumer;
import com.nubo.operation.orchestrator.ext.api.models.domain.KafkaMessage;
import com.nubo.operation.orchestrator.ext.api.models.dto.request.MessageInDto;
import com.nubo.operation.orchestrator.ext.api.service.ProcessMessageService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.support.Acknowledgment;
import org.springframework.kafka.support.KafkaHeaders;
import org.springframework.messaging.handler.annotation.Header;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.UUID;
import java.nio.charset.StandardCharsets;

@Component
@RequiredArgsConstructor
@Slf4j
public class KafkaNuboAdapterConsumerImpl implements KafkaNuboAdapterConsumer {

    private final PropertiesConfig propertiesConfig;
    private final ProcessMessageService processMessageService;

    // COMENTADO: Listener individual - usar solo listener por lotes
    /*
    @KafkaListener(
            topics = "#{propertiesConfig.getKafkaNuboConsumerTopicName}",
            containerFactory = "kafkaNuboListenerContainerFactory")
    public void listenKafka(@Payload MessageInDto messageInDto,
                            @Header(KafkaHeaders.RECEIVED_PARTITION) int partition,
                            @Header(KafkaHeaders.OFFSET) long offset,
                            @Header(KafkaHeaders.RECEIVED_TOPIC) String topic) {
        log.info("New received Message -- Topic: {} -- Partition : {} -- Offset : {}",
                topic, partition, offset);

        processMessageService.processMessage(messageInDto);
    }
    */

    @KafkaListener(
            topics = "#{propertiesConfig.getKafkaNuboConsumerTopicName}",
            containerFactory = "kafkaNuboBatchListenerContainerFactory")
    public void listenKafkaBatch(List<ConsumerRecord<String, String>> records) {
        if (records.isEmpty()) {
            return;
        }
        ConsumerRecord<String, String> firstRecord = records.get(0);
        final String topic = firstRecord.topic();
        final String batchId = UUID.randomUUID().toString();
        log.info("New received Batch -- Topic: {} -- Batch ID: {} -- Partition: {}", topic, batchId, firstRecord.partition());

        List<KafkaMessage> kafkaMessageList = records.stream()
                .map(record -> toEnvelope(record, batchId))
                .toList();

        processMessageService.processMessagesBatch(kafkaMessageList, batchId);
    }

    private KafkaMessage toEnvelope(ConsumerRecord<String, String> record, String batchId) {
        String itemId = record.topic() + ":" + record.partition() + ":" + record.offset();
        String correlationId = record.headers().lastHeader("correlationId") == null
                ? itemId
                : new String(record.headers().lastHeader("correlationId").value(), StandardCharsets.UTF_8);
        return new KafkaMessage(batchId, itemId, record.topic(), record.partition(), record.offset(), record.key(),
                correlationId, record.value());
    }
}


```

## src/main/java/com/nubo/operation/orchestrator/ext/api/client/kafka/producer/service/KafkaNuboAdapterProducer.java

```java
package com.nubo.operation.orchestrator.ext.api.client.kafka.producer.service;

import com.nubo.operation.orchestrator.ext.api.models.dto.response.KafkaErrorMessageOutDto;
import com.nubo.operation.orchestrator.ext.api.models.dto.response.KafkaErrorResponseDto;
import com.nubo.operation.orchestrator.ext.api.models.dto.response.KafkaProcessResponseDto;
import org.springframework.kafka.support.SendResult;

import java.util.concurrent.CompletableFuture;

public interface KafkaNuboAdapterProducer {

    CompletableFuture<SendResult<String, String>> sendAcceptedResponse(KafkaProcessResponseDto message);

    CompletableFuture<SendResult<String, String>> sendRejectionResponse(KafkaErrorMessageOutDto message);

    CompletableFuture<SendResult<String, String>> sendAcceptedResponse(KafkaProcessResponseDto message, String key,
            String correlationId);

    CompletableFuture<SendResult<String, String>> sendRejectionResponse(KafkaErrorMessageOutDto message, String key,
            String correlationId);
}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/client/kafka/producer/service/impl/KafkaNuboAdapterProducerImpl.java

```java
package com.nubo.operation.orchestrator.ext.api.client.kafka.producer.service.impl;

import com.nubo.operation.orchestrator.ext.api.application.properties.PropertiesConfig;
import com.nubo.operation.orchestrator.ext.api.application.util.ApplicationUtils;
import com.nubo.operation.orchestrator.ext.api.client.kafka.producer.service.KafkaNuboAdapterProducer;
import com.nubo.operation.orchestrator.ext.api.models.dto.response.KafkaErrorMessageOutDto;
import com.nubo.operation.orchestrator.ext.api.models.dto.response.KafkaErrorResponseDto;
import com.nubo.operation.orchestrator.ext.api.models.dto.response.KafkaProcessResponseDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.SendResult;
import org.apache.kafka.clients.producer.ProducerRecord;
import org.apache.kafka.common.header.internals.RecordHeader;
import org.springframework.stereotype.Service;

import java.util.concurrent.CompletableFuture;

@Service
@RequiredArgsConstructor
@Slf4j
public class KafkaNuboAdapterProducerImpl implements KafkaNuboAdapterProducer {

    private final PropertiesConfig propertiesConfig;
    private final KafkaTemplate<String, String> kafkaNuboTemplate;

    @Override
    public CompletableFuture<SendResult<String, String>> sendAcceptedResponse(KafkaProcessResponseDto message) {
        return sendAcceptedResponse(message, null, null);
    }

    @Override
    public CompletableFuture<SendResult<String, String>> sendAcceptedResponse(KafkaProcessResponseDto message,
            String key, String correlationId) {
        log.debug("Start method sendAcceptedResponse");

        String topic = propertiesConfig.getKafkaNuboProducerTopicName();
        String jsonString = ApplicationUtils.convertObjectToJson(message);
        CompletableFuture<SendResult<String, String>> future = kafkaNuboTemplate.send(
                producerRecord(topic, key, correlationId, jsonString))
                .toCompletableFuture();

        future.whenComplete((result, ex) -> {
            if (ex == null) {
                log.info("Assignment response sent -- Topic: {} -- offset: {}", topic,
                        result.getRecordMetadata().offset());
            } else {
                log.error("Error sending accepted assignment response -- Topic: {}", topic, ex);
            }
        });
        return future;
    }

    @Override
    public CompletableFuture<SendResult<String, String>> sendRejectionResponse(KafkaErrorMessageOutDto message) {
        return sendRejectionResponse(message, null, null);
    }

    @Override
    public CompletableFuture<SendResult<String, String>> sendRejectionResponse(KafkaErrorMessageOutDto message,
            String key, String correlationId) {
        log.debug("Start method sendMessageCorrection");

        String topic = propertiesConfig.getKafkaNuboProducerTopicName();
        String jsonString = ApplicationUtils.convertObjectToJson(message);
        CompletableFuture<SendResult<String, String>> future = kafkaNuboTemplate.send(
                producerRecord(topic, key, correlationId, jsonString))
                .toCompletableFuture();

        future.whenComplete((result, ex) -> {
            if (ex == null) {
                log.info("Assignment rejection sent -- Topic: {} -- offset: {}", topic,
                        result.getRecordMetadata().offset());
            } else {
                log.error("Error sending rejected assignment response -- Topic: {}", topic, ex);
            }
        });
        return future;
    }

    private ProducerRecord<String, String> producerRecord(String topic, String key, String correlationId,
            String payload) {
        ProducerRecord<String, String> record = new ProducerRecord<>(topic, key, payload);
        if (correlationId != null) {
            record.headers().add(new RecordHeader("correlationId", correlationId.getBytes(java.nio.charset.StandardCharsets.UTF_8)));
        }
        return record;
    }

}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/client/operation/cmd/models/dto/request/AssignmentClosureInDto.java

```java
package com.nubo.operation.orchestrator.ext.api.client.operation.cmd.models.dto.request;

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
public class AssignmentClosureInDto {

    @NotNull
    private Long tradeId;

    @NotBlank
    private String sideId;

}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/client/operation/cmd/models/dto/request/BatchAssignmentInDto.java

```java
package com.nubo.operation.orchestrator.ext.api.client.operation.cmd.models.dto.request;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BatchAssignmentInDto {
    private String batchId;
    private List<BatchAssignmentItemInDto> items;
}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/client/operation/cmd/models/dto/request/BatchAssignmentItemInDto.java

```java
package com.nubo.operation.orchestrator.ext.api.client.operation.cmd.models.dto.request;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BatchAssignmentItemInDto {
    private String itemId;
    private String correlationId;
    private String topic;
    private Integer partition;
    private Long offset;
    private String key;
    private Long tradeId;
    private String sideId;
    private Long matchId;
    private java.time.LocalDate registrationDate;
    private String participantCode;
    private String operationType;
    private List<FractionInDto> fractions;
    private List<BatchAssignmentValidationFractionInDto> rawFractions;
}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/client/operation/cmd/models/dto/request/BatchAssignmentValidationFractionInDto.java

```java
package com.nubo.operation.orchestrator.ext.api.client.operation.cmd.models.dto.request;
import java.math.BigDecimal;
import lombok.*;
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class BatchAssignmentValidationFractionInDto {
 private String reference; private String titleAccount; private BigDecimal cashAccount; private BigDecimal fractionQuantity; private BigDecimal commissionPercentage;
 private String custodianCode; private String ficAdministratorCode; private String referencePackage;
}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/client/operation/cmd/models/dto/request/BatchAssignmentValidationInDto.java

```java
package com.nubo.operation.orchestrator.ext.api.client.operation.cmd.models.dto.request;
import java.util.List;
import lombok.*;
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class BatchAssignmentValidationInDto { private String batchId; private List<BatchAssignmentValidationItemInDto> items; }

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/client/operation/cmd/models/dto/request/BatchAssignmentValidationItemInDto.java

```java
package com.nubo.operation.orchestrator.ext.api.client.operation.cmd.models.dto.request;
import java.time.LocalDate;
import java.util.List;
import lombok.*;
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class BatchAssignmentValidationItemInDto {
 private String itemId; private String correlationId; private String topic; private Integer partition; private Long offset; private String key;
 private Long matchId; private LocalDate registrationDate; private LocalDate clearingDate; private String side; private String participantCode; private String operationType;
 private List<BatchAssignmentValidationFractionInDto> fractions;
}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/client/operation/cmd/models/dto/request/FractionInDto.java

```java
package com.nubo.operation.orchestrator.ext.api.client.operation.cmd.models.dto.request;

import com.nubo.operation.orchestrator.ext.api.application.annotations.ValidBigDecimal;
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

    @Min(value = 1)
    private Long directDepositorId;

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

    @com.fasterxml.jackson.annotation.JsonProperty("referencePackage")
    @com.fasterxml.jackson.annotation.JsonAlias({"reference_package","referenceCode"})
    @jakarta.validation.constraints.Size(max = 10)
    private String referencePackage;

}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/client/operation/cmd/models/dto/response/AssignmentClosureOutDto.java

```java

package com.nubo.operation.orchestrator.ext.api.client.operation.cmd.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.nubo.operation.orchestrator.ext.api.models.dto.response.BusinessRuleCodeOutDto;
import com.nubo.operation.orchestrator.ext.api.models.dto.response.ParticipantOutDto;
import com.nubo.operation.orchestrator.ext.api.models.dto.response.SideOutDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.ALWAYS)
public class AssignmentClosureOutDto {

    private String message;
    
    private Long tradeId;

    private LocalDate matchDate;

    private Long matchId;

    private LocalDate clearingDate;

    private SideOutDto side;

    private ParticipantOutDto participant;

    private BusinessRuleCodeOutDto businessRuleCode;

}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/client/operation/cmd/models/dto/response/AssignmentClosureValidateOutDto.java

```java
package com.nubo.operation.orchestrator.ext.api.client.operation.cmd.models.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AssignmentClosureValidateOutDto {

    private List<AssignmentClosureOutDto> successfulAssignmentClosure;

    private List<AssignmentClosureOutDto> errorAssignmentClosure;

}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/client/operation/cmd/models/dto/response/BatchAssignmentItemOutDto.java

```java
package com.nubo.operation.orchestrator.ext.api.client.operation.cmd.models.dto.response;

import java.util.List;

import com.nubo.operation.orchestrator.ext.api.models.dto.response.BusinessRuleCodeOutDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BatchAssignmentItemOutDto {
    private String itemId;
    private String correlationId;
    private String topic;
    private Integer partition;
    private Long offset;
    private String key;
    private Long tradeId;
    private String sideId;
    private Boolean success;
    private List<SettlementOutDto> settlements;
    private String errorCode;
    private String errorMessage;
    private BusinessRuleCodeOutDto businessRuleCode;
}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/client/operation/cmd/models/dto/response/BatchAssignmentOutDto.java

```java
package com.nubo.operation.orchestrator.ext.api.client.operation.cmd.models.dto.response;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BatchAssignmentOutDto {
    private String batchId;
    private List<BatchAssignmentItemOutDto> items;
}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/client/operation/cmd/models/dto/response/BatchAssignmentValidationItemOutDto.java

```java
package com.nubo.operation.orchestrator.ext.api.client.operation.cmd.models.dto.response;
import com.nubo.operation.orchestrator.ext.api.client.operation.cmd.models.dto.request.BatchAssignmentItemInDto;
import lombok.*;
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class BatchAssignmentValidationItemOutDto { private String itemId; private Boolean valid; private String errorCode; private String errorMessage; private BatchAssignmentItemInDto preparedItem; }

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/client/operation/cmd/models/dto/response/BatchAssignmentValidationOutDto.java

```java
package com.nubo.operation.orchestrator.ext.api.client.operation.cmd.models.dto.response;
import java.util.List;
import lombok.*;
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class BatchAssignmentValidationOutDto { private String batchId; private String validationToken; private int total; private int validCount; private int invalidCount; private List<BatchAssignmentValidationItemOutDto> items; }

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/client/operation/cmd/models/dto/response/FractionAccountOutDto.java

```java
package com.nubo.operation.orchestrator.ext.api.client.operation.cmd.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.nubo.operation.orchestrator.ext.api.models.dto.response.InvestorAccountOutDto;
import com.nubo.operation.orchestrator.ext.api.models.dto.response.ParticipantAccountOutDto;
import com.nubo.operation.orchestrator.ext.api.models.dto.response.TypeOutDto;
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

## src/main/java/com/nubo/operation/orchestrator/ext/api/client/operation/cmd/models/dto/response/OperationCmdErrorResponseDto.java

```java
package com.nubo.operation.orchestrator.ext.api.client.operation.cmd.models.dto.response;

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
public class OperationCmdErrorResponseDto {

    private String httpCode;
    private String httpMethod;
    private String url;
    private String timestamp;
    private String errorCode;
    private String errorMessage;
    private String errorMessageDetail;
}


```

## src/main/java/com/nubo/operation/orchestrator/ext/api/client/operation/cmd/models/dto/response/ParticipantClientOutDto.java

```java
package com.nubo.operation.orchestrator.ext.api.client.operation.cmd.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.nubo.operation.orchestrator.ext.api.models.dto.response.CountryOutDto;
import com.nubo.operation.orchestrator.ext.api.models.dto.response.StatusOutDto;
import com.nubo.operation.orchestrator.ext.api.models.dto.response.TypeOutDto;
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

## src/main/java/com/nubo/operation/orchestrator/ext/api/client/operation/cmd/models/dto/response/SettlementOutDto.java

```java
package com.nubo.operation.orchestrator.ext.api.client.operation.cmd.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.nubo.operation.orchestrator.ext.api.models.dto.response.*;
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

## src/main/java/com/nubo/operation/orchestrator/ext/api/client/operation/cmd/service/OperationCmdClient.java

```java
package com.nubo.operation.orchestrator.ext.api.client.operation.cmd.service;

import com.nubo.operation.orchestrator.ext.api.client.operation.cmd.models.dto.request.AssignmentClosureInDto;
import com.nubo.operation.orchestrator.ext.api.client.operation.cmd.models.dto.request.FractionInDto;
import com.nubo.operation.orchestrator.ext.api.client.operation.cmd.models.dto.request.BatchAssignmentInDto;
import com.nubo.operation.orchestrator.ext.api.client.operation.cmd.models.dto.request.BatchAssignmentValidationInDto;
import com.nubo.operation.orchestrator.ext.api.client.operation.cmd.models.dto.response.BatchAssignmentOutDto;
import com.nubo.operation.orchestrator.ext.api.client.operation.cmd.models.dto.response.BatchAssignmentValidationOutDto;
import com.nubo.operation.orchestrator.ext.api.client.operation.cmd.models.dto.response.AssignmentClosureValidateOutDto;
import com.nubo.operation.orchestrator.ext.api.client.operation.cmd.models.dto.response.FractionAccountOutDto;
import com.nubo.operation.orchestrator.ext.api.client.operation.cmd.models.dto.response.SettlementOutDto;

import java.util.List;

public interface OperationCmdClient {

    BatchAssignmentOutDto processBatch(BatchAssignmentInDto request);
    BatchAssignmentValidationOutDto validateBatch(BatchAssignmentValidationInDto request);

    List<SettlementOutDto> createFractions(Long tradeId, String sideId, List<FractionInDto> fractionInDtoList);

    List<SettlementOutDto> updateAssignment(Long tradeId, String sideId, List<FractionInDto> fractionInDtoList);

    AssignmentClosureValidateOutDto confirmDefinitive(List<AssignmentClosureInDto> assignmentClosureInDtoList);

    FractionAccountOutDto validateAccountFractionAssignment(String accountNumber, Long tradeId, String sideId,
                                                            Long originId);
}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/client/operation/cmd/service/impl/OperationCmdClientImpl.java

```java
package com.nubo.operation.orchestrator.ext.api.client.operation.cmd.service.impl;

import com.nubo.operation.orchestrator.ext.api.application.properties.PropertiesConfig;
import com.nubo.operation.orchestrator.ext.api.application.properties.PropertiesContext;
import com.nubo.operation.orchestrator.ext.api.application.util.ApplicationUtils;
import com.nubo.operation.orchestrator.ext.api.application.util.WebClientUtils;
import com.nubo.operation.orchestrator.ext.api.client.operation.cmd.models.dto.request.AssignmentClosureInDto;
import com.nubo.operation.orchestrator.ext.api.client.operation.cmd.models.dto.request.FractionInDto;
import com.nubo.operation.orchestrator.ext.api.client.operation.cmd.models.dto.request.BatchAssignmentInDto;
import com.nubo.operation.orchestrator.ext.api.client.operation.cmd.models.dto.request.BatchAssignmentValidationInDto;
import com.nubo.operation.orchestrator.ext.api.client.operation.cmd.models.dto.response.BatchAssignmentOutDto;
import com.nubo.operation.orchestrator.ext.api.client.operation.cmd.models.dto.response.BatchAssignmentValidationOutDto;
import com.nubo.operation.orchestrator.ext.api.client.operation.cmd.models.dto.response.AssignmentClosureValidateOutDto;
import com.nubo.operation.orchestrator.ext.api.client.operation.cmd.models.dto.response.FractionAccountOutDto;
import com.nubo.operation.orchestrator.ext.api.client.operation.cmd.models.dto.response.SettlementOutDto;
import com.nubo.operation.orchestrator.ext.api.client.operation.cmd.service.OperationCmdClient;
import com.nubo.operation.orchestrator.ext.api.exception.ClientException;
import com.nubo.operation.orchestrator.ext.api.exception.error.ErrorCode;
import com.nubo.operation.orchestrator.ext.api.models.enums.PropertiesEnum;
import com.nubo.operation.orchestrator.ext.api.models.enums.VersionApiEnum;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;
import org.springframework.web.reactive.function.client.WebClientResponseException;
import org.springframework.web.reactive.function.client.WebClientException;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class OperationCmdClientImpl implements OperationCmdClient {

    private final PropertiesConfig propertiesConfig;
    private final WebClientUtils webClientUtils;

    private static final String PATH_FRACTIONATION = "fractionation/counted-operation";
    private static final String PATH_ASSIGNMENT_CLOSURE = "assignment-closure";
    private static final String PATH_ACCOUNT_VALIDATION = "validate/counted-fraction";
    private static final String AUTHORIZATION = "Authorization";
    private static final String BEARER = "Bearer";

    @Override
    public BatchAssignmentValidationOutDto validateBatch(BatchAssignmentValidationInDto request) {
        URI uri = UriComponentsBuilder.fromUriString(propertiesConfig.getUrlNuboOperationCmd())
                .pathSegment(VersionApiEnum.V1.getValue(), PATH_FRACTIONATION).path("/batch/validate").build().toUri();
        try {
            ResponseEntity<BatchAssignmentValidationOutDto> response = webClientUtils.requestBodyWithResponseObject(uri,
                    HttpMethod.POST, getHttpHeaders(), request, BatchAssignmentValidationOutDto.class);
            if (!ObjectUtils.isEmpty(response.getBody())) return response.getBody();
        } catch (WebClientResponseException ex) {
            throw new ClientException(ErrorCode.CLIENT_OPERATIONS_CMD_ERROR, HttpStatus.BAD_GATEWAY, ex.getResponseBodyAsString(), ex);
        } catch (Exception ex) {
            throw new ClientException(ErrorCode.CLIENT_OPERATIONS_CMD_ERROR, HttpStatus.BAD_GATEWAY, null, ex);
        }
        return BatchAssignmentValidationOutDto.builder().batchId(request.getBatchId()).items(List.of()).build();
    }

    @Override
    public BatchAssignmentOutDto processBatch(BatchAssignmentInDto request) {
        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getUrlNuboOperationCmd())
                .pathSegment(VersionApiEnum.V1.getValue(), PATH_FRACTIONATION)
                .path("/batch")
                .build()
                .toUri();
        try {
            ResponseEntity<BatchAssignmentOutDto> response = webClientUtils.requestBodyWithResponseObject(uri,
                    HttpMethod.POST, getHttpHeaders(), request, BatchAssignmentOutDto.class);
            if (!ObjectUtils.isEmpty(response.getBody())) {
                return response.getBody();
            }
        } catch (WebClientResponseException ex) {
            throw new ClientException(ErrorCode.CLIENT_OPERATIONS_CMD_ERROR, HttpStatus.BAD_GATEWAY,
                    ex.getResponseBodyAsString(), ex);
        } catch (WebClientException ex) {
            throw new ClientException(ErrorCode.CLIENT_OPERATIONS_CMD_ERROR, HttpStatus.BAD_GATEWAY, null, ex);
        }
        return BatchAssignmentOutDto.builder().batchId(request.getBatchId()).items(List.of()).build();
    }

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

    @Override
    public List<SettlementOutDto> updateAssignment(Long tradeId, String sideId, List<FractionInDto> fractionInDtoList) {
        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getUrlNuboOperationCmd())
                .pathSegment(VersionApiEnum.V1.getValue(), PATH_FRACTIONATION)
                .path("/update-assignments/trade/{tradeId}/side/{sideId}")
                .buildAndExpand(tradeId, sideId)
                .toUri();

        try {
            ParameterizedTypeReference<List<SettlementOutDto>> responseType =
                    new ParameterizedTypeReference<List<SettlementOutDto>>() {};

            ResponseEntity<List<SettlementOutDto>> response = webClientUtils.requestBodyWithResponseType(uri,
                    HttpMethod.PUT, getHttpHeaders(), fractionInDtoList, responseType);
            if (!ObjectUtils.isEmpty(response.getBody())) {
                return response.getBody();
            }
        }catch (WebClientResponseException ex) {
            String errorBody = ex.getResponseBodyAsString();
            int statusCode = ex.getStatusCode().value();

            log.error("Error calling updateAssignment - URI: {} - Status: {} - Response Body: {}",
                    uri, statusCode, errorBody);
            throw new ClientException(ErrorCode.CLIENT_OPERATIONS_CMD_ERROR, HttpStatus.BAD_GATEWAY, errorBody, ex);

        } catch (Exception ex) {
            throw new ClientException(ErrorCode.CLIENT_OPERATIONS_CMD_ERROR, HttpStatus.BAD_GATEWAY, null, ex);
        }

        return List.of();
    }

    @Override
    public AssignmentClosureValidateOutDto confirmDefinitive(List<AssignmentClosureInDto> assignmentClosureInDtoList) {
        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getUrlNuboOperationCmd())
                .pathSegment(VersionApiEnum.V1.getValue(), PATH_ASSIGNMENT_CLOSURE)
                .path("/confirm-definitive")
                .buildAndExpand()
                .toUri();

        try {
            ResponseEntity<AssignmentClosureValidateOutDto> response = webClientUtils.requestBodyWithResponseObject(uri,
                    HttpMethod.POST, getHttpHeaders(), assignmentClosureInDtoList, AssignmentClosureValidateOutDto.class);
            if (!ObjectUtils.isEmpty(response.getBody())) {
                return response.getBody();
            }
        } catch (WebClientResponseException ex) {
            String errorBody = ex.getResponseBodyAsString();
            int statusCode = ex.getStatusCode().value();

            log.error("Error calling confirmDefinitive - URI: {} - Status: {} - Response Body: {}",
                    uri, statusCode, errorBody);
            throw new ClientException(ErrorCode.CLIENT_OPERATIONS_CMD_ERROR, HttpStatus.BAD_GATEWAY, errorBody, ex);

        } catch (Exception ex) {
            throw new ClientException(ErrorCode.CLIENT_OPERATIONS_CMD_ERROR, HttpStatus.BAD_GATEWAY, null, ex);
        }

        return AssignmentClosureValidateOutDto.builder().build();
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
            ResponseEntity<FractionAccountOutDto> response = webClientUtils.requestWithResponseObject(uri,
                    HttpMethod.GET, getHttpHeaders(), FractionAccountOutDto.class);
            if (!ObjectUtils.isEmpty(response.getBody())) {
                return response.getBody();
            }
        } catch (WebClientResponseException ex) {
            String errorBody = ex.getResponseBodyAsString();
            int statusCode = ex.getStatusCode().value();

            log.error("Error calling validateAccountFractionAssignment - URI: {} - Status: {} - Response Body: {}",
                    uri, statusCode, errorBody);
            throw new ClientException(ErrorCode.CLIENT_OPERATIONS_CMD_ERROR, HttpStatus.BAD_GATEWAY, errorBody, ex);

        } catch (Exception ex) {
            throw new ClientException(ErrorCode.CLIENT_OPERATIONS_CMD_ERROR, HttpStatus.BAD_GATEWAY, null, ex);
        }

        return FractionAccountOutDto.builder().build();
    }

    private static HttpHeaders getHttpHeaders() {
        HttpHeaders headers = new HttpHeaders();
        //headers.set(AUTHORIZATION, BEARER.concat(" ").concat(PropertiesContext.getAuthToken()));
        headers.set(PropertiesEnum.CLIENT_IP.getValue(), PropertiesContext.getClientIp());
        headers.set(PropertiesEnum.CLIENT_USER.getValue(), "operaciones-orquestador-ext-back");
        headers.set(PropertiesEnum.CLIENT_DATETIME.getValue(),
                ApplicationUtils.convertLocalDateTimeToString(LocalDateTime.now()));
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set(PropertiesEnum.CLIENT_BACKEND.getValue(), "true");
        return headers;
    }

}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/client/schedule/validate/models/dto/response/ScheduleValidationOutDto.java

```java
package com.nubo.operation.orchestrator.ext.api.client.schedule.validate.models.dto.response;

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
public class ScheduleValidationOutDto {

    private Boolean inSchedule;
    private Boolean isBusinessDay;
    private String message;
}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/client/schedule/validate/service/ScheduleValidateClient.java

```java
package com.nubo.operation.orchestrator.ext.api.client.schedule.validate.service;

import com.nubo.operation.orchestrator.ext.api.client.schedule.validate.models.dto.response.ScheduleValidationOutDto;

public interface ScheduleValidateClient {

    ScheduleValidationOutDto validate(Integer screenActionCode, Long participantId, Long countryId,
            boolean isClosingTimeSecondary);
}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/client/schedule/validate/service/impl/ScheduleValidateClientImpl.java

```java
package com.nubo.operation.orchestrator.ext.api.client.schedule.validate.service.impl;

import com.nubo.operation.orchestrator.ext.api.application.properties.PropertiesConfig;
import com.nubo.operation.orchestrator.ext.api.application.util.ApplicationUtils;
import com.nubo.operation.orchestrator.ext.api.application.util.WebClientUtils;
import com.nubo.operation.orchestrator.ext.api.client.schedule.validate.models.dto.response.ScheduleValidationOutDto;
import com.nubo.operation.orchestrator.ext.api.client.schedule.validate.service.ScheduleValidateClient;
import com.nubo.operation.orchestrator.ext.api.exception.ClientException;
import com.nubo.operation.orchestrator.ext.api.exception.error.ErrorCode;
import com.nubo.operation.orchestrator.ext.api.models.enums.PropertiesEnum;
import com.nubo.operation.orchestrator.ext.api.models.enums.VersionApiEnum;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClientResponseException;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.InetAddress;
import java.net.URI;
import java.net.UnknownHostException;

@Service
@RequiredArgsConstructor
@Slf4j
public class ScheduleValidateClientImpl implements ScheduleValidateClient {

    private static final String PATH_SCHEDULE_VALIDATION = "schedule-validation";
    private static final String PATH_VALIDATE_USER_SCHEDULE = "/validate/user/schedule";
    private static final String USER_TYPE_EXTERNAL = "EXTERNAL";
    private static final String LOOPBACK_IP = "127.0.0.1";

    private final PropertiesConfig propertiesConfig;
    private final WebClientUtils webClientUtils;

    @Override
    public ScheduleValidationOutDto validate(Integer screenActionCode, Long participantId, Long countryId,
            boolean isClosingTimeSecondary) {
        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getUrlScheduleValidate())
                .pathSegment(VersionApiEnum.V1.getValue(), PATH_SCHEDULE_VALIDATION)
                .path(PATH_VALIDATE_USER_SCHEDULE)
                .queryParam("screenActionCode", screenActionCode)
                .queryParam("participantId", participantId)
                .queryParam("countryId", countryId)
                .queryParam("userType", USER_TYPE_EXTERNAL)
                .queryParam("bypass", false)
                .queryParam("isClosingTimeSecondary", isClosingTimeSecondary)
                .build()
                .toUri();

        log.info("Calling schedule-validation for screenActionCode: {}, participantId: {}, countryId: {}, "
                + "isClosingTimeSecondary: {}", screenActionCode, participantId, countryId, isClosingTimeSecondary);

        ResponseEntity<ScheduleValidationOutDto> response;
        try {
            response = webClientUtils.requestWithResponseObject(uri, HttpMethod.GET, getHttpHeaders(),
                    ScheduleValidationOutDto.class);
        } catch (WebClientResponseException ex) {
            log.error("Error calling schedule-validation - URI: {} - Status: {} - Response Body: {}", uri,
                    ex.getStatusCode().value(), ex.getResponseBodyAsString());
            throw new ClientException(ErrorCode.SCHEDULE_VALIDATION_API_ERROR, HttpStatus.BAD_GATEWAY,
                    ex.getResponseBodyAsString(), ex);
        } catch (Exception ex) {
            throw new ClientException(ErrorCode.SCHEDULE_VALIDATION_API_ERROR, HttpStatus.BAD_GATEWAY, ex);
        }

        if (response == null || response.getBody() == null) {
            throw new ClientException(ErrorCode.SCHEDULE_VALIDATION_API_ERROR, HttpStatus.BAD_GATEWAY);
        }
        return response.getBody();
    }

    private HttpHeaders getHttpHeaders() {
        HttpHeaders headers = new HttpHeaders();
        headers.set(PropertiesEnum.CLIENT_IP.getValue(), LOOPBACK_IP);
        headers.set(PropertiesEnum.CLIENT_USER.getValue(), propertiesConfig.getApiName());
        headers.set(PropertiesEnum.CLIENT_DATETIME.getValue(), ApplicationUtils.getLocalDateTimeNow());
        headers.setContentType(MediaType.APPLICATION_JSON);
        return headers;
    }
}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/exception/ClientException.java

```java
package com.nubo.operation.orchestrator.ext.api.exception;

import com.nubo.operation.orchestrator.ext.api.exception.error.ErrorCode;
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

## src/main/java/com/nubo/operation/orchestrator/ext/api/exception/DefinitiveAssignmentRuleException.java

```java
package com.nubo.operation.orchestrator.ext.api.exception;

import com.nubo.operation.orchestrator.ext.api.exception.error.ErrorCode;
import com.nubo.operation.orchestrator.ext.api.models.dto.response.BusinessRuleCodeOutDto;
import lombok.Getter;

@Getter
public class DefinitiveAssignmentRuleException extends ServiceException {

    private final BusinessRuleCodeOutDto businessRuleCode;

    public DefinitiveAssignmentRuleException(ErrorCode errorCode, String messageError,
            BusinessRuleCodeOutDto businessRuleCode) {
        super(errorCode, messageError);
        this.businessRuleCode = businessRuleCode;
    }
}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/exception/ServiceException.java

```java
package com.nubo.operation.orchestrator.ext.api.exception;

import com.nubo.operation.orchestrator.ext.api.exception.error.ErrorCode;
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

    public ServiceException(ErrorCode errorCode, String messageError) {
        super(messageError);
        this.errorCode = errorCode;
        this.httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
    }

    public ServiceException(ErrorCode errorCode, HttpStatus httpStatus, String messageError) {
        super(messageError);
        this.errorCode = errorCode;
        this.httpStatus = httpStatus;
    }

    public HttpStatus getHttpStatusOrDefault() {
        return this.httpStatus != null ? this.httpStatus : HttpStatus.INTERNAL_SERVER_ERROR;
    }

}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/exception/error/ErrorCode.java

```java
package com.nubo.operation.orchestrator.ext.api.exception.error;

import lombok.Getter;

@Getter
public enum ErrorCode {

    UNAUTHORIZED("Not unauthorized"),
    FORBIDDEN("Access denied"),
    UNEXPECTED("An unexpected error occurred"),
    ILLEGALVALUE("Invalid operation number: "),
    ENTITYNOTFOUND("Entity not found during processing: "),
    ERROR_KAFKA_CONSUMER_NUBO("Error Consumer Kafka Nubo"),
    ERROR_KAFKA_PRODUCER_NUBO("Error Producer Kafka Nubo"),
    ERROR_DESERIALIZER_JSON("Error Deserializer Json"),
    ERROR_SERIALIZER_JSON("Error Serializer Json"),
    CLIENT_GUARANTEE_CALCULATE_VOLUME_WORKER_ERROR("An unexpected error occurred in Guarantee Calculate Volume Worker"),
    HEADER_CLIENT_IP_REQUIRED("Header client_ip required"),
    HEADER_CLIENT_IP_INVALID("Header client_ip is invalid"),
    HEADER_CLIENT_USER_REQUIRED("Header client_user is required"),
    HEADER_CLIENT_DATETIME_REQUIRED("Header client_datetime is required"),
    HEADER_CLIENT_DATETIME_INVALID("Header client_datetime is invalid"),
    VERSION_API_NOT_FOUND("Version API not found"),
    METHOD_ARGUMENT_TYPE("Invalid request path"),
    METHOD_NOT_ALLOWED("Http method not allowed"),
    NOT_FOUND("Resource not found"),
    UNSUPPORTED_MEDIA_TYPE("Content Type is not supported"),
    MESSAGE_NOT_READABLE("Error reading the message body request"),
    BAD_REQUEST("Invalid request body"),
    CLIENT_OPERATIONS_CMD_ERROR("An unexpected error occurred in Operation CMD"),
    TRADE_NOT_FOUND("Trade not found"),
    TRADE_INVALID_DATES("Trade dates (matchDate or clearingDate) cannot be null"),
    SIDE_NOT_FOUND("Side not found"),
    STATUS_NOT_FOUND("Status not found"),
    TYPE_MAPPING_NOT_FOUND("Type Mapping not found"),
    PARTICIPANT_NOT_FOUND("Participant not found"),
    PARTICIPANT_NOT_IN_SIDE("The participant is not part of the side"),
    CUSTODIAN_NOT_FOUND("Custodian not found"),
    FIC_ADMIN_NOT_FOUND("Fic Administrator not found"),
    OPERATION_TYPE_NOT_SUPPORTED("Operation type not supported"),
    DEFINITIVE_ASSIGNMENT_ERROR("An unexpected error occurred in definitive assignment process"),
    VALIDATION_ERROR("Validation Error"),
    NOT_BUSINESS_DAY("Not a business day"),
    OUTSIDE_BUSINESS_HOURS("Outside business hours"),
    SCHEDULE_VALIDATION_API_ERROR("Error calling schedule-validation API"),
    COUNTRY_NOT_FOUND("Country not found"),
    ACCOUNT_NOT_FOUND("Account not found");

    private final String message;

    ErrorCode(String message) {
        this.message = message;
    }

    public String getName() {
        return this.name();
    }

}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/exception/error/ErrorResponse.java

```java
package com.nubo.operation.orchestrator.ext.api.exception.error;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
@JsonInclude(JsonInclude.Include.NON_EMPTY)
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

## src/main/java/com/nubo/operation/orchestrator/ext/api/exception/error/ErrorValidation.java

```java
package com.nubo.operation.orchestrator.ext.api.exception.error;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ErrorValidation {

    private String id;
    private String description;

}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/exception/handler/CustomKafkaErrorHandler.java

```java
package com.nubo.operation.orchestrator.ext.api.exception.handler;


import com.nubo.operation.orchestrator.ext.api.exception.ServiceException;
import com.nubo.operation.orchestrator.ext.api.exception.error.ErrorCode;
import com.nubo.operation.orchestrator.ext.api.exception.kafka.KafkaErrorBuild;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.kafka.clients.consumer.Consumer;
import org.apache.kafka.clients.consumer.ConsumerRecords;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.apache.kafka.common.TopicPartition;
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

    @Override
    public void handleBatch(@NonNull Exception thrownException, ConsumerRecords<?, ?> records, Consumer<?, ?> consumer,
                            MessageListenerContainer container, Runnable invokeListener) {
        log.error("Kafka assignment batch failed; seeking {} partition(s) for redelivery without committing offsets",
                records.partitions().size(), thrownException);
        handle(thrownException, consumer);
        for (TopicPartition partition : records.partitions()) {
            records.records(partition).stream().findFirst()
                    .ifPresent(record -> consumer.seek(partition, record.offset()));
        }
    }

    @Override
    public boolean seeksAfterHandling() {
        return true;
    }

    @Override
    public boolean isAckAfterHandle() {
        return false;
    }

    private void handle(Exception exception, Consumer<?, ?> consumer) {
        if (exception instanceof ServiceException ex) {
            kafkaErrorBuild.buildError(exception, ex.getErrorCode());
        } else if (exception instanceof RecordDeserializationException ex) {
            kafkaErrorBuild.buildError(exception, ErrorCode.ERROR_DESERIALIZER_JSON, ex.offset());
            consumer.seek(ex.topicPartition(), ex.offset() + 1L);
            consumer.commitSync();
        } else {
            kafkaErrorBuild.buildError(exception, ErrorCode.ERROR_KAFKA_CONSUMER_NUBO);
        }
    }

}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/exception/handler/GlobalExceptionHandler.java

```java
package com.nubo.operation.orchestrator.ext.api.exception.handler;

import com.nubo.operation.orchestrator.ext.api.application.properties.PropertiesContext;
import com.nubo.operation.orchestrator.ext.api.application.util.ApplicationUtils;
import com.nubo.operation.orchestrator.ext.api.exception.ClientException;
import com.nubo.operation.orchestrator.ext.api.exception.ServiceException;
import com.nubo.operation.orchestrator.ext.api.exception.error.ErrorCode;
import com.nubo.operation.orchestrator.ext.api.exception.error.ErrorResponse;
import com.nubo.operation.orchestrator.ext.api.exception.error.ErrorValidation;
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
import java.util.Objects;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

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

    @ExceptionHandler(ClientException.class)
    public ResponseEntity<ErrorResponse> handlerClientException(ClientException exception,
                                                                HttpServletRequest request) {
        HttpStatus httpStatus = exception.getHttpStatus();
        ResponseEntity<ErrorResponse> errorResponseResponseEntity = null;
        if (!ObjectUtils.isEmpty(exception.getCause())) {
            String message = exception.getCause().getMessage();
            errorResponseResponseEntity = this.buildClientErrorResponse(httpStatus, exception.getErrorCode(), message);
        }
        return Objects.requireNonNullElseGet(errorResponseResponseEntity,
                () -> buildErrorResponse(httpStatus, exception, request, exception.getErrorCode()));
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

    private ResponseEntity<ErrorResponse> buildClientErrorResponse(HttpStatus status, ErrorCode errorCode,
                                                                   String cause) {
        try {
            Pattern pattern = Pattern.compile("\\{.*\\}");
            Matcher matcher = pattern.matcher(cause);

            if (matcher.find()) {
                String json = matcher.group();
                ErrorResponse errorResponse = (ErrorResponse) ApplicationUtils.convertJsonToObject(json,
                        ErrorResponse.class);
                errorResponse.setHttpCode(String.valueOf(status.value()));

                log.error("Error Client -> {}", errorResponse);

                return ResponseEntity.status(status).body(errorResponse);

            } else {
                log.error("Error en buildClientErrorResponse -> No JSON found in the string");
            }
        } catch (Exception ex) {
            log.error("Error en buildClientErrorResponse -> {}", ex.getMessage());
        }
        return null;
    }

}
```

## src/main/java/com/nubo/operation/orchestrator/ext/api/exception/kafka/KafkaErrorBuild.java

```java
package com.nubo.operation.orchestrator.ext.api.exception.kafka;

import com.nubo.operation.orchestrator.ext.api.application.properties.PropertiesConfig;
import com.nubo.operation.orchestrator.ext.api.application.util.ApplicationUtils;
import com.nubo.operation.orchestrator.ext.api.exception.error.ErrorCode;
import com.nubo.operation.orchestrator.ext.api.exception.error.ErrorResponse;
import com.nubo.operation.orchestrator.ext.api.exception.error.ErrorValidation;
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

        List<ErrorValidation> errorDetails = getErrorValidations(exception);
        if (!errorDetails.isEmpty()) {
            errorResponse.setErrorDetails(errorDetails);
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

## src/main/java/com/nubo/operation/orchestrator/ext/api/helpers/MapperUtil.java

```java
package com.nubo.operation.orchestrator.ext.api.helpers;

import org.springframework.util.ObjectUtils;


public final class MapperUtil {

    private MapperUtil() {
    }

}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/models/domain/KafkaMessage.java

```java
package com.nubo.operation.orchestrator.ext.api.models.domain;

public record KafkaMessage(
        String batchId,
        String itemId,
        String topic,
        Integer partition,
        Long offset,
        String key,
        String correlationId,
        String payload) {

    public KafkaMessage(String payload, Integer partition, Long offset) {
        this(null, "unknown:" + partition + ":" + offset, "unknown", partition, offset, null,
                "unknown:" + partition + ":" + offset, payload);
    }
}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/models/dto/request/FractionKafkaInDto.java

```java
package com.nubo.operation.orchestrator.ext.api.models.dto.request;

import com.fasterxml.jackson.annotation.JsonAlias;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.nubo.operation.orchestrator.ext.api.application.annotations.ValidBigDecimal;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FractionKafkaInDto {

    @Size(max = 200)
    private String reference;

    @Size(min = 1, max= 50)
    private String titleAccount;

    @ValidBigDecimal(precision = 20, scale = 0)
    private BigDecimal cashAccount;

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal fractionQuantity;

    @ValidBigDecimal(precision = 6, scale = 4)
    private BigDecimal commissionPercentage;

    @Size(min = 1, max= 50)
    private String custodianCode;

    @Size(min = 1, max= 50)
    private String ficAdministratorCode;

    @JsonProperty("referencePackage")
    @JsonAlias({"reference_package", "packageCode", "package_code", "referenceCode"})
    @Size(max = 10)
    private String referencePackage;
}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/models/dto/request/MessageInDto.java

```java
package com.nubo.operation.orchestrator.ext.api.models.dto.request;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@JsonIgnoreProperties(ignoreUnknown = true)
public class MessageInDto {

    private String uuid;
    private String operationType;
    private String participantCode;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate registrationDate;

    private BigDecimal matchId;

    private String side;
    private Boolean finalAssignment;
    @Valid
    private List<FractionKafkaInDto> fractions;

}


```

## src/main/java/com/nubo/operation/orchestrator/ext/api/models/dto/response/ApiClientCauseDto.java

```java
package com.nubo.operation.orchestrator.ext.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ApiClientCauseDto {

    private String causeCode;
    private String code;
    private String message;
    private CauseType type;
}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/models/dto/response/BusinessRuleCodeOutDto.java

```java
package com.nubo.operation.orchestrator.ext.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class BusinessRuleCodeOutDto {

    private String ruleCode;

    private String validationCode;

}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/models/dto/response/CauseType.java

```java
package com.nubo.operation.orchestrator.ext.api.models.dto.response;

public enum CauseType {
    BUSINESS,
    TECHNICAL
}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/models/dto/response/CountryOutDto.java

```java
package com.nubo.operation.orchestrator.ext.api.models.dto.response;

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

    private CurrencyOutDto currency;

    private String timeZone;

}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/models/dto/response/CurrencyOutDto.java

```java
package com.nubo.operation.orchestrator.ext.api.models.dto.response;

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
public class CurrencyOutDto {

    private Long id;

    private String code;

    private String name;
}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/models/dto/response/DepositoryOutDto.java

```java
package com.nubo.operation.orchestrator.ext.api.models.dto.response;

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

## src/main/java/com/nubo/operation/orchestrator/ext/api/models/dto/response/GicsOutDto.java

```java
package com.nubo.operation.orchestrator.ext.api.models.dto.response;

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

## src/main/java/com/nubo/operation/orchestrator/ext/api/models/dto/response/IdentificationTypeOutDto.java

```java
package com.nubo.operation.orchestrator.ext.api.models.dto.response;

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

## src/main/java/com/nubo/operation/orchestrator/ext/api/models/dto/response/InvestorAccountOutDto.java

```java
package com.nubo.operation.orchestrator.ext.api.models.dto.response;

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

## src/main/java/com/nubo/operation/orchestrator/ext/api/models/dto/response/InvestorOutDto.java

```java
package com.nubo.operation.orchestrator.ext.api.models.dto.response;

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

## src/main/java/com/nubo/operation/orchestrator/ext/api/models/dto/response/KafkaErrorMessageOutDto.java

```java
package com.nubo.operation.orchestrator.ext.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class KafkaErrorMessageOutDto {

    private KafkaProcessResponseDto details;
    private KafkaErrorResponseDto cause;
}


```

## src/main/java/com/nubo/operation/orchestrator/ext/api/models/dto/response/KafkaErrorResponseDto.java

```java
package com.nubo.operation.orchestrator.ext.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class KafkaErrorResponseDto {

    private int code;
    private String description;
    private String message;
    private String additionalMessages;
    private ApiClientCauseDto apiClient;
}


```

## src/main/java/com/nubo/operation/orchestrator/ext/api/models/dto/response/KafkaProcessResponseDto.java

```java
package com.nubo.operation.orchestrator.ext.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class KafkaProcessResponseDto {

    private BigDecimal folio;
    private Boolean asignacion;
    private Boolean reasignacion;
    private Boolean asignacionDefinitiva;
    private String referencePackage;

    private String originUuid;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate registrationDate;
    private String side;
    private Instant processedDate;

}


```

## src/main/java/com/nubo/operation/orchestrator/ext/api/models/dto/response/ParticipantAccountOutDto.java

```java
package com.nubo.operation.orchestrator.ext.api.models.dto.response;

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

## src/main/java/com/nubo/operation/orchestrator/ext/api/models/dto/response/ParticipantOutDto.java

```java
package com.nubo.operation.orchestrator.ext.api.models.dto.response;

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

## src/main/java/com/nubo/operation/orchestrator/ext/api/models/dto/response/SideOutDto.java

```java
package com.nubo.operation.orchestrator.ext.api.models.dto.response;

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

## src/main/java/com/nubo/operation/orchestrator/ext/api/models/dto/response/StatusOutDto.java

```java
package com.nubo.operation.orchestrator.ext.api.models.dto.response;

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

## src/main/java/com/nubo/operation/orchestrator/ext/api/models/dto/response/TaxStatusOutDto.java

```java
package com.nubo.operation.orchestrator.ext.api.models.dto.response;

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

## src/main/java/com/nubo/operation/orchestrator/ext/api/models/dto/response/TradingSessionOutDto.java

```java
package com.nubo.operation.orchestrator.ext.api.models.dto.response;

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
public class TradingSessionOutDto {

    private String id;

    private String description;
}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/models/dto/response/TradingSystemOutDto.java

```java
package com.nubo.operation.orchestrator.ext.api.models.dto.response;

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

## src/main/java/com/nubo/operation/orchestrator/ext/api/models/dto/response/TypeOutDto.java

```java
package com.nubo.operation.orchestrator.ext.api.models.dto.response;

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

## src/main/java/com/nubo/operation/orchestrator/ext/api/models/entity/CfiEntity.java

```java
package com.nubo.operation.orchestrator.ext.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

import java.time.LocalDateTime;
import java.util.Objects;

@Getter
@Setter
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

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        CfiEntity that = (CfiEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/models/entity/ClassEntity.java

```java
package com.nubo.operation.orchestrator.ext.api.models.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Objects;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"CLASS\"", schema = "\"NUANBODB\"")
public class ClassEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"CLASS_ID\"", length = 2, nullable = false)
    private String id;

    @Column(name = "\"DESCRIPTION\"")
    private String description;

    @Column(name = "\"CATEGORY\"")
    private String category;

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

## src/main/java/com/nubo/operation/orchestrator/ext/api/models/entity/CountryEntity.java

```java
package com.nubo.operation.orchestrator.ext.api.models.entity;

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

## src/main/java/com/nubo/operation/orchestrator/ext/api/models/entity/CurrencyEntity.java

```java
package com.nubo.operation.orchestrator.ext.api.models.entity;

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

## src/main/java/com/nubo/operation/orchestrator/ext/api/models/entity/DepositoryEntity.java

```java
package com.nubo.operation.orchestrator.ext.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

import java.time.LocalDateTime;
import java.util.Objects;

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

## src/main/java/com/nubo/operation/orchestrator/ext/api/models/entity/GicsEntity.java

```java
package com.nubo.operation.orchestrator.ext.api.models.entity;

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
        if (o == null || getClass() != o.getClass())
            return false;
        GicsEntity that = (GicsEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/models/entity/IdentificationTypeEntity.java

```java
package com.nubo.operation.orchestrator.ext.api.models.entity;

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

## src/main/java/com/nubo/operation/orchestrator/ext/api/models/entity/InvestorAccountEntity.java

```java
package com.nubo.operation.orchestrator.ext.api.models.entity;

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

## src/main/java/com/nubo/operation/orchestrator/ext/api/models/entity/InvestorEntity.java

```java
package com.nubo.operation.orchestrator.ext.api.models.entity;

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

    @ManyToOne
    @JoinColumn(name = "\"GICS_ID\"", nullable = false)
    private GicsEntity gics;

    @Column(name = "\"MONEY_LAUNDERING_FLAG\"")
    private Boolean moneyLaunderingFlag;

    @Column(name = "\"TAX_EXEMP\"")
    private Boolean taxExemp;

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

## src/main/java/com/nubo/operation/orchestrator/ext/api/models/entity/IssuerEntity.java

```java
package com.nubo.operation.orchestrator.ext.api.models.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Objects;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"ISSUER\"", schema = "\"NUANBODB\"")
public class IssuerEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"ISSUER_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"CODE\"")
    private String code;

    @Column(name = "\"NAME\"")
    private String name;

    @Column(name = "\"SHORT_NAME\"")
    private String shortName;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        IssuerEntity that = (IssuerEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/models/entity/MarketEntity.java

```java
package com.nubo.operation.orchestrator.ext.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

import java.time.LocalDateTime;
import java.util.Objects;

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
        MarketEntity that = (MarketEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/models/entity/ParticipantAccountEntity.java

```java
package com.nubo.operation.orchestrator.ext.api.models.entity;

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

## src/main/java/com/nubo/operation/orchestrator/ext/api/models/entity/ParticipantEntity.java

```java
package com.nubo.operation.orchestrator.ext.api.models.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
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

    @Column(name = "\"MNEMONIC\"", length = 4)
    private String mnemonic;

    @ManyToOne
    @JoinColumn(name = "\"COUNTRY_ID\"")
    private CountryEntity country;

    @Column(name = "\"REGISTRATION_DATE\"")
    private LocalDate registrationDate;

    @Column(name = "\"TAX_CODE\"", length = 20)
    private String taxCode;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"")
    private StatusEntity status;

    @Column(name = "\"NIT_CLEARING_HOUSE\"", length = 20)
    private String nitClearingHouse;

    @ManyToOne
    @JoinColumn(name = "\"TAX_STATUS_ID\"")
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

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 250)
    private String lastModifyApplication;

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
        ParticipantEntity that = (ParticipantEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/models/entity/SecurityTitleEntity.java

```java
package com.nubo.operation.orchestrator.ext.api.models.entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Objects;

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

    @ManyToOne
    @JoinColumn(name = "\"ISSUER_ID\"")
    private IssuerEntity issuer;

    @Column(name = "\"COUNTRY_ID\"", nullable = false)
    private Integer countryId;

    @Column(name = "\"AMOUNT_ISSUED\"", precision = 20, nullable = false)
    private BigInteger amountIssued;

    @ManyToOne
    @JoinColumn(name = "\"CLASS_ID\"")
    private ClassEntity clazz;

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

## src/main/java/com/nubo/operation/orchestrator/ext/api/models/entity/SideEntity.java

```java
package com.nubo.operation.orchestrator.ext.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

import java.time.LocalDateTime;
import java.util.Objects;

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

## src/main/java/com/nubo/operation/orchestrator/ext/api/models/entity/StatusEntity.java

```java
package com.nubo.operation.orchestrator.ext.api.models.entity;

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
@Table(name = "\"STATUS\"", schema = "\"NUANBODB\"")
public class StatusEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"STATUS_ID\"")
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
        StatusEntity that = (StatusEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/models/entity/TaxStatusEntity.java

```java
package com.nubo.operation.orchestrator.ext.api.models.entity;

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

## src/main/java/com/nubo/operation/orchestrator/ext/api/models/entity/TradeEntity.java

```java
package com.nubo.operation.orchestrator.ext.api.models.entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.OffsetDateTime;
import java.util.Objects;

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
    @Column(name = "\"TRADE_ID\"")
    private Long id;

    @Column(name = "\"MATCH_DATE\"", nullable = false)
    private LocalDate matchDate;

    @Column(name = "\"MATCH_ID\"", precision = 19, nullable = false)
    private BigDecimal matchId;

    @Column(name = "\"CLEARING_DATE\"", nullable = false)
    private LocalDate clearingDate;

    @Column(name = "\"RETURN_CLEARING_DATE\"", nullable = false)
    private LocalDate returnClearingDate;

    @ManyToOne
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
    private OffsetDateTime matchTime;

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

    @Column(name = "\"PURCHASE_PAYMENT_INDICATOR\"")
    private Boolean purchasePaymentIndicator;

    @Column(name = "\"RETURN_INDICATOR_SETTLEMENT\"")
    private Boolean returnIndicatorSettlement;

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
        TradeEntity that = (TradeEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/models/entity/TradingSessionEntity.java

```java
package com.nubo.operation.orchestrator.ext.api.models.entity;

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

## src/main/java/com/nubo/operation/orchestrator/ext/api/models/entity/TradingSystemEntity.java

```java
package com.nubo.operation.orchestrator.ext.api.models.entity;

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

## src/main/java/com/nubo/operation/orchestrator/ext/api/models/entity/TypeEntity.java

```java
package com.nubo.operation.orchestrator.ext.api.models.entity;

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

## src/main/java/com/nubo/operation/orchestrator/ext/api/models/entity/TypeMappingEntity.java

```java
package com.nubo.operation.orchestrator.ext.api.models.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "\"TYPE_MAPPING\"", schema = "\"NUANBODB\"")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TypeMappingEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"TYPE_MAPPING_ID\"")
    private Long id;

    @Column(name = "\"EXTERNAL_SYSTEM\"", nullable = false)
    private String externalSystem;

    @Column(name = "\"EXTERNAL_CODE\"", nullable = false)
    private String externalCode;

    @Column(name = "\"EXTERNAL_DESCRIPTION\"")
    private String externalDescription;

    @ManyToOne
    @JoinColumn(name = "\"TYPE_ID\"")
    private TypeEntity type;

    @Column(name = "\"LAST_MODIFY_USER\"")
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"")
    private String lastModifyApplic;

    @Column(name = "\"LAST_MODIFY_DATE\"")
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"")
    private String lastModifyIp;
}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/models/enums/OperationTypeEnum.java

```java
package com.nubo.operation.orchestrator.ext.api.models.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Arrays;
import java.util.Objects;

@Getter
@RequiredArgsConstructor
public enum OperationTypeEnum {

    ASSIGNMENT_TYPE("A"),
    REASSIGNMENT_TYPE("R");

    private final String value;
    
    @JsonValue
    public String getValue() {
        return value;
    }

    @JsonCreator
    public static OperationTypeEnum fromValue(String value) {
        return Arrays.stream(OperationTypeEnum.values())
                .filter(type -> Objects.equals(type.value, value))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Type Option is not implemented: " + value));
    }
}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/models/enums/PropertiesEnum.java

```java
package com.nubo.operation.orchestrator.ext.api.models.enums;

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
    AUTH_TOKEN("auth_token"),
    PREVIOUS_SESSION("previous_session"),
    CLIENT_BACKEND("client_backend"),
    CLIENT_CREDENTIALS("client_credentials");

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

## src/main/java/com/nubo/operation/orchestrator/ext/api/models/enums/SideEnum.java

```java
package com.nubo.operation.orchestrator.ext.api.models.enums;

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
    public static SideEnum fromValue(String value) {
        return Arrays.stream(SideEnum.values())
                .filter(side -> Objects.equals(side.id, value))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Side not implemented: " + value));
    }
}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/models/enums/TypeMappingEnum.java

```java
package com.nubo.operation.orchestrator.ext.api.models.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Arrays;
import java.util.Objects;

@Getter
@RequiredArgsConstructor
public enum TypeMappingEnum {

    //External_System
    REFERENCE_DATA("REFERENCE_DATA"),

    //CATEGORY
    CUSTODIO("Custodio"),
    ADMIN_FIC("Administradora General de Fondos");

    private final String value;
    
    @JsonValue
    public String getValue() {
        return value;
    }

    @JsonCreator
    public static TypeMappingEnum fromValue(String value) {
        return Arrays.stream(TypeMappingEnum.values())
                .filter(type -> Objects.equals(type.value, value))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Type Option is not implemented: " + value));
    }
}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/models/enums/VersionApiEnum.java

```java
package com.nubo.operation.orchestrator.ext.api.models.enums;

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

## src/main/java/com/nubo/operation/orchestrator/ext/api/repository/InvestorAccountRepository.java

```java
package com.nubo.operation.orchestrator.ext.api.repository;

import com.nubo.operation.orchestrator.ext.api.models.entity.InvestorAccountEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface InvestorAccountRepository extends JpaRepository<InvestorAccountEntity, Long> {

    Optional<InvestorAccountEntity> findFirstByAccountNumber(
            String accountNumber
    );

}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/repository/ParticipantAccountRepository.java

```java
package com.nubo.operation.orchestrator.ext.api.repository;

import com.nubo.operation.orchestrator.ext.api.models.entity.ParticipantAccountEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ParticipantAccountRepository extends JpaRepository<ParticipantAccountEntity, Long> {

    Optional<ParticipantAccountEntity> findFirstByAccountNumber(String accountNumber);

}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/repository/ParticipantRepository.java

```java
package com.nubo.operation.orchestrator.ext.api.repository;

import com.nubo.operation.orchestrator.ext.api.models.entity.ParticipantEntity;
import com.nubo.operation.orchestrator.ext.api.models.entity.TypeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ParticipantRepository extends JpaRepository<ParticipantEntity, Long> {

    Optional<ParticipantEntity> findByCodeIgnoreCaseAndType(String code, TypeEntity type);

    Optional<ParticipantEntity> findByCodeIgnoreCase(String code);
}


```

## src/main/java/com/nubo/operation/orchestrator/ext/api/repository/SideRepository.java

```java
package com.nubo.operation.orchestrator.ext.api.repository;

import com.nubo.operation.orchestrator.ext.api.models.entity.SideEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SideRepository extends JpaRepository<SideEntity, String> {
}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/repository/TradeRepository.java

```java
package com.nubo.operation.orchestrator.ext.api.repository;

import com.nubo.operation.orchestrator.ext.api.models.entity.TradeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

public interface TradeRepository extends JpaRepository<TradeEntity, Long>, JpaSpecificationExecutor<TradeEntity> {

    Optional<TradeEntity> findByMatchIdAndMatchDateAndClearingDate(BigDecimal matchId, LocalDate matchDate, LocalDate clearingDate);

    @Query("""
            SELECT t.clearingDate AS clearingDate, t.returnClearingDate AS returnClearingDate
            FROM TradeEntity t
            WHERE t.matchId = :matchId
              AND t.matchDate = :matchDate
              AND t.market.id IN :marketIds
            """)
    List<TradeClearingDates> findClearingDates(@Param("matchId") BigDecimal matchId,
            @Param("matchDate") LocalDate matchDate, @Param("marketIds") Collection<String> marketIds);

    interface TradeClearingDates {
        LocalDate getClearingDate();

        LocalDate getReturnClearingDate();
    }
}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/repository/TypeMappingRepository.java

```java
package com.nubo.operation.orchestrator.ext.api.repository;

import com.nubo.operation.orchestrator.ext.api.models.entity.TypeMappingEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TypeMappingRepository extends JpaRepository<TypeMappingEntity, Long> {
    Optional<TypeMappingEntity> findByExternalSystemAndExternalDescription(String externalSystem, String externalDescription);
}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/service/ProcessMessageService.java

```java
package com.nubo.operation.orchestrator.ext.api.service;

import com.nubo.operation.orchestrator.ext.api.models.domain.KafkaMessage;
import com.nubo.operation.orchestrator.ext.api.models.dto.request.MessageInDto;

import java.util.List;

public interface ProcessMessageService {
    /**
     * @deprecated Replaced for Kafka ingestion by {@link #processMessagesBatch(List, String)} and deterministic lanes.
     */
    @Deprecated(since = "0.8.12-alpha.7")
    void processMessage(MessageInDto messageInDto);
    void processMessagesBatch(List<KafkaMessage> messages, String batchId);
}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/service/ScheduleValidationService.java

```java
package com.nubo.operation.orchestrator.ext.api.service;

import java.math.BigDecimal;
import java.time.LocalDate;

public interface ScheduleValidationService {

    /**
     * Valida día hábil y horario del proceso de asignación para el país del participante.
     * Retorna sin excepción solo si el participante puede operar en este momento.
     * El trade (matchId + matchDate) solo se consulta para decidir si aplica el cierre secundario.
     * El horario consultado depende del tipo de asignación: asignación (screenActionCode 238) cuando
     * {@code finalAssignment} es false, asignación definitiva (screenActionCode 239) cuando es true.
     */
    void validate(String participantCode, BigDecimal matchId, LocalDate matchDate, boolean finalAssignment);
}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/service/impl/AssignmentBatchConcurrencyLimiter.java

```java
package com.nubo.operation.orchestrator.ext.api.service.impl;

import java.util.concurrent.Semaphore;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicInteger;

/** Per-pod guard for concurrent Kafka listener invocations; it creates no threads. */
final class AssignmentBatchConcurrencyLimiter {

    private final AtomicInteger activeBatches = new AtomicInteger();
    private final AtomicInteger maxConcurrentBatches = new AtomicInteger();
    private volatile Semaphore permits;
    private volatile int configuredConcurrency;

    AssignmentBatchConcurrencyLimiter(int requestedConcurrency) {
        configure(requestedConcurrency);
    }

    void configure(int requestedConcurrency) {
        configuredConcurrency = Math.max(1, Math.min(2, requestedConcurrency));
        permits = new Semaphore(configuredConcurrency);
    }

    BatchLease acquire() {
        long queuedAtNanos = System.nanoTime();
        try {
            permits.acquire();
        } catch (InterruptedException exception) {
            Thread.currentThread().interrupt();
            throw new IllegalStateException("Interrupted while waiting for assignment batch capacity", exception);
        }
        int active = activeBatches.incrementAndGet();
        int maximum = maxConcurrentBatches.accumulateAndGet(active, Math::max);
        return new BatchLease(configuredConcurrency,
                TimeUnit.NANOSECONDS.toMillis(System.nanoTime() - queuedAtNanos), active, maximum);
    }

    void release() {
        activeBatches.decrementAndGet();
        permits.release();
    }

    record BatchLease(int configuredBatchConcurrency, long batchQueueWaitMs,
            int activeCmdBatches, int maxConcurrentCmdBatches) {
    }
}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/service/impl/BatchPreparationMetrics.java

```java
package com.nubo.operation.orchestrator.ext.api.service.impl;

import com.nubo.operation.orchestrator.ext.api.exception.error.ErrorCode;

import java.util.EnumMap;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.concurrent.TimeUnit;

final class BatchPreparationMetrics {

    static final int MAX_FAILURE_SAMPLES_PER_STAGE_AND_CODE = 3;

    enum Stage {
        VALIDATE_TRADE,
        VALIDATE_SIDE,
        VALIDATE_PARTICIPANT,
        BUILD_FRACTIONS,
        VALIDATE_TITLE_ACCOUNT,
        BUILD_CMD_ITEM
    }

    private final EnumMap<Stage, Long> elapsedNanosByStage = new EnumMap<>(Stage.class);
    private final EnumMap<Stage, Integer> failuresByStage = new EnumMap<>(Stage.class);
    private final Map<String, Integer> failuresByCode = new LinkedHashMap<>();
    private final Map<FailureSampleKey, Integer> failureSamples = new LinkedHashMap<>();
    private int prepareFailureCount;
    private int preparedCount;
    private int cmdItemCount;
    private int accountValidationFailureCount;
    private int otherFailureCount;

    void recordDuration(Stage stage, long elapsedNanos) {
        elapsedNanosByStage.merge(stage, Math.max(0L, elapsedNanos), Long::sum);
    }

    boolean recordFailure(Stage stage, String errorCode) {
        String normalizedCode = errorCode == null ? ErrorCode.UNEXPECTED.name() : errorCode;
        prepareFailureCount++;
        failuresByStage.merge(stage, 1, Integer::sum);
        failuresByCode.merge(normalizedCode, 1, Integer::sum);

        if (!isKnownPreparationCode(normalizedCode)) {
            if (stage == Stage.VALIDATE_TITLE_ACCOUNT) {
                accountValidationFailureCount++;
            } else {
                otherFailureCount++;
            }
        }

        FailureSampleKey sampleKey = new FailureSampleKey(stage, normalizedCode);
        int sampleCount = failureSamples.merge(sampleKey, 1, Integer::sum);
        return sampleCount <= MAX_FAILURE_SAMPLES_PER_STAGE_AND_CODE;
    }

    void recordPrepared() {
        preparedCount++;
    }

    void recordCmdItem() {
        cmdItemCount++;
    }

    long elapsedMillis(Stage stage) {
        return TimeUnit.NANOSECONDS.toMillis(elapsedNanosByStage.getOrDefault(stage, 0L));
    }

    int prepareFailureCount() {
        return prepareFailureCount;
    }

    int preparedCount() {
        return preparedCount;
    }

    int cmdItemCount() {
        return cmdItemCount;
    }

    int failureCount(String errorCode) {
        return failuresByCode.getOrDefault(errorCode, 0);
    }

    int accountValidationFailureCount() {
        return accountValidationFailureCount;
    }

    int otherFailureCount() {
        return otherFailureCount;
    }

    Map<String, Integer> failuresByStage() {
        Map<String, Integer> result = new LinkedHashMap<>();
        for (Stage stage : Stage.values()) {
            int count = failuresByStage.getOrDefault(stage, 0);
            if (count > 0) {
                result.put(stage.name(), count);
            }
        }
        return result;
    }

    Map<String, Integer> failuresByCode() {
        return new LinkedHashMap<>(failuresByCode);
    }

    private boolean isKnownPreparationCode(String errorCode) {
        return ErrorCode.TRADE_NOT_FOUND.name().equals(errorCode)
                || ErrorCode.SIDE_NOT_FOUND.name().equals(errorCode)
                || ErrorCode.PARTICIPANT_NOT_FOUND.name().equals(errorCode)
                || ErrorCode.PARTICIPANT_NOT_IN_SIDE.name().equals(errorCode);
    }

    private record FailureSampleKey(Stage stage, String errorCode) {
    }
}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/service/impl/ProcessMessageServiceImpl.java

```java
package com.nubo.operation.orchestrator.ext.api.service.impl;

import com.nubo.operation.orchestrator.ext.api.application.cause.CauseCatalog;
import com.nubo.operation.orchestrator.ext.api.application.context.GlobalContext;
import com.nubo.operation.orchestrator.ext.api.application.properties.PropertiesConfig;
import com.nubo.operation.orchestrator.ext.api.application.util.ApplicationUtils;
import com.nubo.operation.orchestrator.ext.api.application.util.ValidatorUtil;
import com.nubo.operation.orchestrator.ext.api.client.kafka.producer.service.KafkaNuboAdapterProducer;
import com.nubo.operation.orchestrator.ext.api.client.operation.cmd.models.dto.request.*;
import com.nubo.operation.orchestrator.ext.api.client.operation.cmd.models.dto.request.BatchAssignmentInDto;
import com.nubo.operation.orchestrator.ext.api.client.operation.cmd.models.dto.request.BatchAssignmentItemInDto;
import com.nubo.operation.orchestrator.ext.api.client.operation.cmd.models.dto.request.BatchAssignmentValidationInDto;
import com.nubo.operation.orchestrator.ext.api.client.operation.cmd.models.dto.request.BatchAssignmentValidationItemInDto;
import com.nubo.operation.orchestrator.ext.api.client.operation.cmd.models.dto.request.BatchAssignmentValidationFractionInDto;
import com.nubo.operation.orchestrator.ext.api.client.operation.cmd.models.dto.response.*;
import com.nubo.operation.orchestrator.ext.api.client.operation.cmd.models.dto.response.BatchAssignmentItemOutDto;
import com.nubo.operation.orchestrator.ext.api.client.operation.cmd.models.dto.response.BatchAssignmentOutDto;
import com.nubo.operation.orchestrator.ext.api.client.operation.cmd.models.dto.response.BatchAssignmentValidationItemOutDto;
import com.nubo.operation.orchestrator.ext.api.client.operation.cmd.models.dto.response.BatchAssignmentValidationOutDto;
import com.nubo.operation.orchestrator.ext.api.client.operation.cmd.service.OperationCmdClient;
import com.nubo.operation.orchestrator.ext.api.exception.ClientException;
import com.nubo.operation.orchestrator.ext.api.exception.ServiceException;
import com.nubo.operation.orchestrator.ext.api.exception.error.ErrorCode;
import com.nubo.operation.orchestrator.ext.api.models.domain.KafkaMessage;
import com.nubo.operation.orchestrator.ext.api.models.dto.request.FractionKafkaInDto;
import com.nubo.operation.orchestrator.ext.api.models.dto.request.MessageInDto;
import com.nubo.operation.orchestrator.ext.api.models.dto.response.ApiClientCauseDto;
import com.nubo.operation.orchestrator.ext.api.models.dto.response.KafkaErrorMessageOutDto;
import com.nubo.operation.orchestrator.ext.api.models.dto.response.KafkaErrorResponseDto;
import com.nubo.operation.orchestrator.ext.api.models.dto.response.KafkaProcessResponseDto;
import com.nubo.operation.orchestrator.ext.api.models.entity.*;
import com.nubo.operation.orchestrator.ext.api.models.enums.OperationTypeEnum;
import com.nubo.operation.orchestrator.ext.api.models.enums.PropertiesEnum;
import com.nubo.operation.orchestrator.ext.api.models.enums.SideEnum;
import com.nubo.operation.orchestrator.ext.api.models.enums.TypeMappingEnum;
import com.nubo.operation.orchestrator.ext.api.repository.*;
import com.nubo.operation.orchestrator.ext.api.service.ProcessMessageService;
import com.nubo.operation.orchestrator.ext.api.service.ScheduleValidationService;
import com.nubo.operation.orchestrator.ext.api.service.impl.lanes.AssignmentLaneCoordinator;
import com.nubo.operation.orchestrator.ext.api.service.impl.lanes.AssignmentLanesResult;
import com.nubo.operation.orchestrator.ext.api.service.impl.lanes.ParsedBatchItem;
import com.fasterxml.jackson.core.JsonProcessingException;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;
import org.springframework.util.StopWatch;

import java.math.BigDecimal;
import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;
import java.util.Set;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.TimeUnit;
import java.util.function.Supplier;

@Service
@RequiredArgsConstructor
@Slf4j
public class ProcessMessageServiceImpl implements ProcessMessageService {

    private final TradeRepository tradeRepository;
    private final SideRepository sideRepository;
    private final OperationCmdClient operationCmdClient;
    private final ParticipantAccountRepository participantAccountRepository;
    private final InvestorAccountRepository investorAccountRepository;
    private final ParticipantRepository participantRepository;
    private final TypeMappingRepository typeMappingRepository;
    private final KafkaNuboAdapterProducer kafkaNuboProducer;
    private final ValidatorUtil validatorUtil;
    private final PropertiesConfig propertiesConfig;
    private final AssignmentLaneCoordinator assignmentLaneCoordinator;
    private final CauseCatalog causeCatalog;
    private final ScheduleValidationService scheduleValidationService;
    private final AssignmentBatchConcurrencyLimiter batchConcurrencyLimiter = new AssignmentBatchConcurrencyLimiter(1);

    @PostConstruct
    void configureAssignmentBatchConcurrency() {
        batchConcurrencyLimiter.configure(propertiesConfig.getAssignmentKafkaBatchConcurrency());
    }

    /**
     * @deprecated Replaced for Kafka ingestion by the deterministic assignment lane pipeline.
     */
    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    @Deprecated(since = "0.8.12-alpha.7")
    public void processMessage(MessageInDto dto) {
        log.info("Kafka Message received (debug): {}", dto);

        try {
            log.info("TRADE-MATCH_ID " + dto.getMatchId());

            TradeEntity tradeEntity = validateTrade(dto.getMatchId(), dto.getRegistrationDate(), null);
            SideEntity sideEntity = validateSide(dto.getSide());
            validateParticipant(dto.getParticipantCode(), tradeEntity, sideEntity);

            List<FractionInDto> fractionInDtoList = returnFracctionsToOperation(dto, tradeEntity, sideEntity);
            List<SettlementOutDto> settlementOutDtoList;

            Boolean isAssignment = false;
            Boolean isReassignment = false;
            Boolean isDefinitiveAssignment = false;

            if(dto.getOperationType().equals(OperationTypeEnum.ASSIGNMENT_TYPE.getValue())){
                log.info("Start assignment to: {}", tradeEntity.getId());
                settlementOutDtoList = operationCmdClient.createFractions(tradeEntity.getId(), sideEntity.getId(), fractionInDtoList);
                log.info("Assingment Complete. Total settlements created: {}", settlementOutDtoList.size());
                isAssignment = true;
                isDefinitiveAssignment = sendDefinitiveAssignment(dto.getFinalAssignment(), tradeEntity, sideEntity);
            }else if(dto.getOperationType().equals(OperationTypeEnum.REASSIGNMENT_TYPE.getValue())){
                log.info("Start reassignment to: {}", tradeEntity.getId());
                settlementOutDtoList = operationCmdClient.updateAssignment(tradeEntity.getId(), sideEntity.getId(), fractionInDtoList);
                log.info("Reassingment Complete. Total settlements created: {}", settlementOutDtoList.size());
                isReassignment = true;
                isDefinitiveAssignment = sendDefinitiveAssignment(dto.getFinalAssignment(), tradeEntity, sideEntity);
            } else {
                log.error("The type operations isnt recognized: {}", dto.getOperationType());
                throw new ServiceException(ErrorCode.OPERATION_TYPE_NOT_SUPPORTED, HttpStatus.BAD_REQUEST);
            }

            String referencePackage = !dto.getFractions().isEmpty() ? dto.getFractions().get(0).getReferencePackage() : null;
            
            KafkaProcessResponseDto successResponse = KafkaProcessResponseDto.builder()
                    .folio(tradeEntity.getMatchId())
                    .asignacion(isAssignment)
                    .reasignacion(isReassignment)
                    .asignacionDefinitiva(isDefinitiveAssignment)
                    .referencePackage(referencePackage)
                    .originUuid(dto.getUuid())
                    .side(dto.getSide())
                    .registrationDate(dto.getRegistrationDate())
                    .processedDate(Instant.now())
                    .build();

            log.info("Complete Process, {}", successResponse);

            kafkaNuboProducer.sendAcceptedResponse(successResponse);

        } catch (ClientException e) {
            String referencePackageError = !dto.getFractions().isEmpty() ? dto.getFractions().get(0).getReferencePackage() : null;
            
            KafkaProcessResponseDto detail = KafkaProcessResponseDto.builder()
                    .folio(dto.getMatchId())
                    .asignacion(dto.getOperationType().equals(OperationTypeEnum.ASSIGNMENT_TYPE.getValue()) ? true : false)
                    .reasignacion(dto.getOperationType().equals(OperationTypeEnum.REASSIGNMENT_TYPE.getValue()) ? true : false)
                    .asignacionDefinitiva(dto.getFinalAssignment())
                    .referencePackage(referencePackageError)
                    .originUuid(dto.getUuid())
                    .side(dto.getSide())
                    .registrationDate(dto.getRegistrationDate())
                    .processedDate(Instant.now())
                    .build();
            
            // Intentar parsear el error body estructurado del servicio CMD
            String errorMessage = e.getMessage();
            String errorDetail = "No additional details";
            
            if (e.getErrorResponseBody() != null) {
                try {
                    OperationCmdErrorResponseDto cmdError = ApplicationUtils.convertJsonToObject(
                            e.getErrorResponseBody(), 
                            OperationCmdErrorResponseDto.class
                    );
                    
                    // Usar los detalles del error del servicio CMD
                    errorMessage = cmdError.getErrorMessage() != null ? cmdError.getErrorMessage() : errorMessage;
                    errorDetail = cmdError.getErrorMessageDetail() != null ? cmdError.getErrorMessageDetail() : errorDetail;
                    
                    log.error("CMD Error - Code: {}, Message: {}, Detail: {}", 
                            cmdError.getErrorCode(), errorMessage, errorDetail);
                } catch (Exception parseEx) {
                    log.warn("Could not parse CMD error response body, using raw message: {}", parseEx.getMessage());
                    errorDetail = extractCauseMessage(e.getErrorResponseBody());
                }
            } else if (e.getCause() != null && e.getCause().getMessage() != null) {
                errorDetail = extractCauseMessage(e.getCause().getMessage());
            }
            
            KafkaErrorResponseDto cause = buildErrorResponse(
                    e.getHttpStatus().value(), 
                    e.getErrorCode().getMessage(), 
                    errorMessage, 
                    errorDetail
            );
            
            KafkaErrorMessageOutDto errorResponse = KafkaErrorMessageOutDto.builder()
                    .details(detail)
                    .cause(cause)
                    .build();

            log.info("Error al procesar, {}", errorResponse);
            kafkaNuboProducer.sendRejectionResponse(errorResponse);
        } catch (Exception e) {
            String referencePackageExc = !dto.getFractions().isEmpty() ? dto.getFractions().get(0).getReferencePackage() : null;
            
            KafkaProcessResponseDto detail = KafkaProcessResponseDto.builder()
                    .folio(dto.getMatchId())
                    .asignacion(dto.getOperationType().equals(OperationTypeEnum.ASSIGNMENT_TYPE.getValue()) ? true : false)
                    .reasignacion(dto.getOperationType().equals(OperationTypeEnum.REASSIGNMENT_TYPE.getValue()) ? true : false)
                    .asignacionDefinitiva(dto.getFinalAssignment())
                    .referencePackage(referencePackageExc)
                    .originUuid(dto.getUuid())
                    .side(dto.getSide())
                    .registrationDate(dto.getRegistrationDate())
                    .processedDate(Instant.now())
                    .build();
            KafkaErrorResponseDto cause = buildErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR.value(), ErrorCode.UNEXPECTED.getMessage(), e.getMessage(), e.getCause() != null ? e.getCause().getMessage() : "No additional details");
            KafkaErrorMessageOutDto errorResponse = KafkaErrorMessageOutDto.builder()
                    .details(detail)
                    .cause(cause)
                    .build();

            log.info("Error to process, {}", errorResponse);
            kafkaNuboProducer.sendRejectionResponse(errorResponse);
        }
    }

    @Override
    public void processMessagesBatch(List<KafkaMessage> messages, String batchId) {
        if (messages == null || messages.isEmpty()) {
            log.warn("No Operations records to process.");
            return;
        }

        AssignmentBatchConcurrencyLimiter.BatchLease lease = batchConcurrencyLimiter.acquire();
        try {
            processMessagesBatchInFlight(messages, batchId, lease);
        } finally {
            batchConcurrencyLimiter.release();
        }
    }

    private void processMessagesBatchInFlight(List<KafkaMessage> messages, String batchId,
            AssignmentBatchConcurrencyLimiter.BatchLease lease) {

        StopWatch stopWatch = new StopWatch("assignment-orchestrator-batch");
        long totalStartNanos = System.nanoTime();
        int processingSize = Math.max(1, propertiesConfig.getAssignmentBatchProcessingSize());
        List<CompletableFuture<?>> responseFutures = new ArrayList<>();
        List<ParsedBatchItem> parsedItems = new ArrayList<>();
        int invalidCount = 0;
        int invalidMatchIdCount = 0;
        int duplicateCount = 0;
        int scheduleRejectedCount = 0;
        long scheduleNanos = 0L;
        int successCount = 0;
        int failureCount = 0;
        int validationBatchCalls = 0;
        int validationInputCount = 0;
        int validationValidCount = 0;
        int validationInvalidCount = 0;
        int cmdProcessingCalls;
        int cmdProcessingInputCount;
        BatchPreparationMetrics preparationMetrics = new BatchPreparationMetrics();

        stopWatch.start("parse");
        for (KafkaMessage message : messages) {
            try {
                MessageInDto dto = buildMessageInDtoFromMessage(message.payload());
                long scheduleStartNanos = System.nanoTime();
                try {
                    scheduleValidationService.validate(dto.getParticipantCode(), dto.getMatchId(),
                            dto.getRegistrationDate(), Boolean.TRUE.equals(dto.getFinalAssignment()));
                    parsedItems.add(new ParsedBatchItem(message, dto));
                } catch (RuntimeException ex) {
                    scheduleRejectedCount++;
                    failureCount++;
                    FailureDetails failure = failureDetails(ex);
                    responseFutures.add(sendRejection(message, dto, failure.httpStatus(), failure.errorCode(),
                            failure.message()));
                } finally {
                    scheduleNanos += System.nanoTime() - scheduleStartNanos;
                }
            } catch (InvalidKafkaMessageException ex) {
                invalidCount++;
                failureCount++;
                if (ex.inputFailureType() == InputFailureType.MATCH_ID_NOT_LONG) {
                    invalidMatchIdCount++;
                }
                responseFutures.add(sendRejection(message, null, HttpStatus.BAD_REQUEST.value(),
                        ErrorCode.VALIDATION_ERROR.getMessage(), ex.getMessage(),
                        ex.errorCode() == null ? ErrorCode.VALIDATION_ERROR.getMessage() : ex.errorCode().name()));
            } catch (ServiceException ex) {
                if (!isRecoverableMessageFailure(ex)) {
                    throw ex;
                }
                invalidCount++;
                failureCount++;
                responseFutures.add(sendRejection(message, null, HttpStatus.BAD_REQUEST.value(),
                        ErrorCode.VALIDATION_ERROR.getMessage(), ex.getMessage()));
            }
        }
        stopWatch.stop();

        stopWatch.start("dedupe");
        Set<AssignmentKey> seen = new HashSet<>();
        List<ParsedBatchItem> uniqueItems = new ArrayList<>();
        for (ParsedBatchItem item : parsedItems) {
            AssignmentKey key = AssignmentKey.from(item.dto());
            if (!seen.add(key)) {
                duplicateCount++;
                failureCount++;
                responseFutures.add(sendRejection(item.envelope(), item.dto(), HttpStatus.CONFLICT.value(),
                        "DUPLICATE_IN_POLL", "Duplicate matchId, registrationDate and side in Kafka poll"));
            } else {
                uniqueItems.add(item);
            }
        }
        stopWatch.stop();

        stopWatch.start("lane-processing");
        AssignmentLanesResult lanesResult = assignmentLaneCoordinator.process(batchId, uniqueItems, processingSize);
        stopWatch.stop();
        responseFutures.addAll(lanesResult.responseFutures());
        successCount += lanesResult.successCount();
        failureCount += lanesResult.failureCount();
        cmdProcessingCalls = lanesResult.cmdProcessingCalls();
        cmdProcessingInputCount = lanesResult.cmdProcessingInputCount();

        log.info("PERF_ASSIGNMENT_LANES service=orquestador batchId={} lanesEnabled={} configuredParallelism={} activeLanes={} maxConcurrentLanes={} lane0Items={} lane0Ms={} lane1Items={} lane1Ms={} laneWorkSumMs={} parallelWallMs={} successCount={} failureCount={}",
                batchId, propertiesConfig.isAssignmentLanesEnabled(), lanesResult.configuredParallelism(),
                lanesResult.activeLanes(), lanesResult.maxConcurrentLanes(), laneItemCount(lanesResult, 0),
                laneElapsedMs(lanesResult, 0), laneItemCount(lanesResult, 1), laneElapsedMs(lanesResult, 1),
                lanesResult.laneWorkSumMs(), lanesResult.parallelWallMs(), lanesResult.successCount(),
                lanesResult.failureCount());

        log.info("ASSIGNMENT_BATCH_FAILURE_SUMMARY batchId={} inputFailuresByCode={} prepareFailureCount={} tradeNotFoundCount={} sideNotFoundCount={} participantNotFoundCount={} participantNotInSideCount={} accountValidationFailureCount={} otherFailureCount={} failuresByStage={} failuresByCode={}",
                batchId, invalidMatchIdCount == 0 ? Map.of()
                        : Map.of(ErrorCode.VALIDATION_ERROR.name(), invalidMatchIdCount),
                preparationMetrics.prepareFailureCount(),
                preparationMetrics.failureCount(ErrorCode.TRADE_NOT_FOUND.name()),
                preparationMetrics.failureCount(ErrorCode.SIDE_NOT_FOUND.name()),
                preparationMetrics.failureCount(ErrorCode.PARTICIPANT_NOT_FOUND.name()),
                preparationMetrics.failureCount(ErrorCode.PARTICIPANT_NOT_IN_SIDE.name()),
                preparationMetrics.accountValidationFailureCount(), preparationMetrics.otherFailureCount(),
                preparationMetrics.failuresByStage(), preparationMetrics.failuresByCode());

        stopWatch.start("kafka-response");
        CompletableFuture.allOf(responseFutures.toArray(new CompletableFuture[0])).join();
        stopWatch.stop();

        long totalMs = TimeUnit.NANOSECONDS.toMillis(System.nanoTime() - totalStartNanos);
        double throughput = totalMs == 0 ? messages.size() : messages.size() * 1000.0d / totalMs;
        int chunkCount = lanesResult.chunkCount();
        log.info("PERF_ASSIGNMENT_BATCH service=orquestador batchId={} kafkaBatchSize={} parsedCount={} invalidCount={} duplicateCount={} scheduleRejectedCount={} validCount={} uniqueCount={} preparedCount={} cmdItemCount={} processingChunkSize={} chunkCount={} configuredBatchConcurrency={} activeCmdBatches={} maxConcurrentCmdBatches={} batchQueueWaitMs={} cmdBatchCalls={} processingThreads=1 maxConcurrentItems=1 validationBatchCalls={} validationInputCount={} validationValidCount={} validationInvalidCount={} validationMs={} cmdProcessingCalls={} cmdProcessingInputCount={} parseMs={} scheduleMs={} dedupeMs={} cmdValidationMs={} validateTradeMs={} validateSideMs={} validateParticipantMs={} buildFractionsMs={} validateTitleAccountMs={} buildCmdItemMs={} cmdProcessingMs={} kafkaResponseMs={} successCount={} failureCount={} totalMs={} throughputOpsSec={}",
                batchId, messages.size(), parsedItems.size() + scheduleRejectedCount, invalidCount, duplicateCount,
                scheduleRejectedCount, uniqueItems.size(),
                uniqueItems.size(), preparationMetrics.preparedCount(), preparationMetrics.cmdItemCount(),
                processingSize, chunkCount, lease.configuredBatchConcurrency(), lease.activeCmdBatches(),
                lease.maxConcurrentCmdBatches(), lease.batchQueueWaitMs(), cmdProcessingCalls,
                validationBatchCalls, validationInputCount, validationValidCount,
                validationInvalidCount, taskMillis(stopWatch, "cmd-validation"), cmdProcessingCalls, cmdProcessingInputCount,
                taskMillis(stopWatch, "parse") - TimeUnit.NANOSECONDS.toMillis(scheduleNanos),
                TimeUnit.NANOSECONDS.toMillis(scheduleNanos), taskMillis(stopWatch, "dedupe"),
                taskMillis(stopWatch, "cmd-validation"),
                preparationMetrics.elapsedMillis(BatchPreparationMetrics.Stage.VALIDATE_TRADE),
                preparationMetrics.elapsedMillis(BatchPreparationMetrics.Stage.VALIDATE_SIDE),
                preparationMetrics.elapsedMillis(BatchPreparationMetrics.Stage.VALIDATE_PARTICIPANT),
                preparationMetrics.elapsedMillis(BatchPreparationMetrics.Stage.BUILD_FRACTIONS),
                preparationMetrics.elapsedMillis(BatchPreparationMetrics.Stage.VALIDATE_TITLE_ACCOUNT),
                preparationMetrics.elapsedMillis(BatchPreparationMetrics.Stage.BUILD_CMD_ITEM),
                taskMillis(stopWatch, "lane-processing"),
                taskMillis(stopWatch, "kafka-response"), successCount, failureCount, totalMs,
                String.format(java.util.Locale.ROOT, "%.2f", throughput));
    }

    /** @deprecated Raw batch processing is handled by AssignmentLaneProcessor. */
    @Deprecated(since = "0.8.12-alpha.7", forRemoval = true)
    private PreparedBatchItem prepareBatchItem(ParsedBatchItem parsed, PreparationStageContext stageContext) {
        MessageInDto dto = parsed.dto();
        TradeEntity trade = stageContext.measure(BatchPreparationMetrics.Stage.VALIDATE_TRADE,
                () -> validateTrade(dto.getMatchId(), dto.getRegistrationDate(), null));
        SideEntity side = stageContext.measure(BatchPreparationMetrics.Stage.VALIDATE_SIDE,
                () -> validateSide(dto.getSide()));
        stageContext.measure(BatchPreparationMetrics.Stage.VALIDATE_PARTICIPANT,
                () -> validateParticipant(dto.getParticipantCode(), trade, side));
        List<FractionInDto> fractions = stageContext.measure(BatchPreparationMetrics.Stage.BUILD_FRACTIONS,
                () -> returnFracctionsToOperation(dto, trade, side, stageContext));
        BatchAssignmentItemInDto cmdItem = stageContext.measure(BatchPreparationMetrics.Stage.BUILD_CMD_ITEM,
                () -> BatchAssignmentItemInDto.builder()
                        .itemId(parsed.envelope().itemId())
                        .correlationId(parsed.envelope().correlationId())
                        .topic(parsed.envelope().topic())
                        .partition(parsed.envelope().partition())
                        .offset(parsed.envelope().offset())
                        .key(parsed.envelope().key())
                        .tradeId(trade.getId())
                        .sideId(side.getId())
                        .operationType(dto.getOperationType())
                        .fractions(fractions)
                        .build());
        return new PreparedBatchItem(parsed, trade, side, cmdItem);
    }

    /** Batch flow forwards raw Kafka fields to CMD; legacy processMessage keeps the local preparation path. */
    private BatchAssignmentValidationItemInDto toValidationItem(ParsedBatchItem parsed) {
        MessageInDto dto = parsed.dto();
        final long matchId;
        try {
            matchId = dto.getMatchId().longValueExact();
        } catch (ArithmeticException ex) {
            throw new ServiceException(ErrorCode.VALIDATION_ERROR, HttpStatus.BAD_REQUEST);
        }
        return BatchAssignmentValidationItemInDto.builder().itemId(parsed.envelope().itemId())
                .correlationId(parsed.envelope().correlationId()).topic(parsed.envelope().topic())
                .partition(parsed.envelope().partition()).offset(parsed.envelope().offset()).key(parsed.envelope().key())
                .matchId(matchId).registrationDate(dto.getRegistrationDate())
                .side(dto.getSide()).participantCode(dto.getParticipantCode()).operationType(dto.getOperationType())
                .fractions(dto.getFractions().stream().map(this::toValidationFraction).toList()).build();
    }

    private BatchAssignmentValidationFractionInDto toValidationFraction(FractionKafkaInDto fraction) {
        return BatchAssignmentValidationFractionInDto.builder().reference(fraction.getReference())
                .titleAccount(fraction.getTitleAccount()).cashAccount(fraction.getCashAccount())
                .fractionQuantity(fraction.getFractionQuantity()).commissionPercentage(fraction.getCommissionPercentage())
                .custodianCode(fraction.getCustodianCode()).ficAdministratorCode(fraction.getFicAdministratorCode())
                .referencePackage(fraction.getReferencePackage()).build();
    }

    /** @deprecated Raw batch processing is handled by AssignmentLaneProcessor. */
    @Deprecated(since = "0.8.12-alpha.7", forRemoval = true)
    private BatchAssignmentValidationOutDto localValidationFallback(String batchId, List<ParsedBatchItem> chunk) {
        List<BatchAssignmentValidationItemOutDto> results = new ArrayList<>();
        for (ParsedBatchItem parsed : chunk) {
            try {
                PreparedBatchItem prepared = prepareBatchItem(parsed, new PreparationStageContext(new BatchPreparationMetrics()));
                results.add(BatchAssignmentValidationItemOutDto.builder().itemId(parsed.envelope().itemId()).valid(true)
                        .preparedItem(prepared.cmdItem()).build());
            } catch (RuntimeException ex) {
                results.add(BatchAssignmentValidationItemOutDto.builder().itemId(parsed.envelope().itemId()).valid(false)
                        .errorCode(failureDetails(ex).errorCode()).errorMessage(ex.getMessage()).build());
            }
        }
        long valid = results.stream().filter(item -> Boolean.TRUE.equals(item.getValid())).count();
        return BatchAssignmentValidationOutDto.builder().batchId(batchId).total(results.size()).validCount((int) valid)
                .invalidCount(results.size() - (int) valid).items(results).build();
    }

    private FailureDetails failureDetails(RuntimeException failure) {
        if (failure instanceof ClientException clientException) {
            return new FailureDetails(clientException.getHttpStatusOrDefault().value(),
                    clientException.getErrorCode().name(), failure.getMessage());
        }
        if (failure instanceof ServiceException serviceException) {
            return new FailureDetails(serviceException.getHttpStatusOrDefault().value(),
                    serviceException.getErrorCode().name(), failure.getMessage());
        }
        return new FailureDetails(HttpStatus.INTERNAL_SERVER_ERROR.value(), ErrorCode.UNEXPECTED.name(),
                failure.getMessage());
    }

    private CompletableFuture<?> sendRejection(KafkaMessage envelope, MessageInDto dto, int statusCode,
            String description, String message) {
        return sendRejection(envelope, dto, statusCode, description, message, description);
    }

    private CompletableFuture<?> sendRejection(KafkaMessage envelope, MessageInDto dto, int statusCode,
            String description, String message, String causeCode) {
        String referencePackage = dto == null || dto.getFractions() == null || dto.getFractions().isEmpty()
                ? null
                : dto.getFractions().get(0).getReferencePackage();
        KafkaProcessResponseDto detail = KafkaProcessResponseDto.builder()
                .folio(dto == null ? null : dto.getMatchId())
                .asignacion(dto != null && OperationTypeEnum.ASSIGNMENT_TYPE.getValue().equals(dto.getOperationType()))
                .reasignacion(dto != null && OperationTypeEnum.REASSIGNMENT_TYPE.getValue().equals(dto.getOperationType()))
                .asignacionDefinitiva(dto != null && Boolean.TRUE.equals(dto.getFinalAssignment()))
                .referencePackage(referencePackage)
                .originUuid(dto != null ? dto.getUuid(): null)
                .side(dto != null ? dto.getSide() : null)
                .registrationDate(dto != null ? dto.getRegistrationDate(): null)
                .processedDate(Instant.now())
                .build();
        KafkaErrorMessageOutDto response = KafkaErrorMessageOutDto.builder()
                .details(detail)
                .cause(buildErrorResponse(statusCode, description == null ? "BATCH_ITEM_ERROR" : description,
                        message == null ? "Batch item processing failed" : message, "No additional details", causeCode))
                .build();
        return kafkaNuboProducer.sendRejectionResponse(response, envelope.key(), envelope.correlationId());
    }

    private long taskMillis(StopWatch stopWatch, String taskName) {
        long total = 0;
        for (StopWatch.TaskInfo taskInfo : stopWatch.getTaskInfo()) {
            if (taskName.equals(taskInfo.getTaskName())) {
                total += taskInfo.getTimeMillis();
            }
        }
        return total;
    }

    private int laneItemCount(AssignmentLanesResult lanesResult, int laneIndex) {
        return lanesResult.lanes().stream().filter(result -> result.laneIndex() == laneIndex)
                .findFirst().map(result -> result.itemCount()).orElse(0);
    }

    private long laneElapsedMs(AssignmentLanesResult lanesResult, int laneIndex) {
        return lanesResult.lanes().stream().filter(result -> result.laneIndex() == laneIndex)
                .findFirst().map(result -> result.elapsedMs()).orElse(0L);
    }

    private record PreparedBatchItem(ParsedBatchItem parsed, TradeEntity trade, SideEntity side,
            BatchAssignmentItemInDto cmdItem) {
    }

    private record FailureDetails(int httpStatus, String errorCode, String message) {
    }

    private static final class PreparationStageContext {
        private final BatchPreparationMetrics metrics;
        private BatchPreparationMetrics.Stage currentStage = BatchPreparationMetrics.Stage.VALIDATE_TRADE;
        private BatchPreparationMetrics.Stage failureStage;

        private PreparationStageContext(BatchPreparationMetrics metrics) {
            this.metrics = metrics;
        }

        private <T> T measure(BatchPreparationMetrics.Stage stage, Supplier<T> action) {
            BatchPreparationMetrics.Stage enclosingStage = currentStage;
            currentStage = stage;
            long startNanos = System.nanoTime();
            try {
                return action.get();
            } catch (RuntimeException ex) {
                if (failureStage == null) {
                    failureStage = stage;
                }
                throw ex;
            } finally {
                metrics.recordDuration(stage, System.nanoTime() - startNanos);
                currentStage = enclosingStage;
            }
        }

        private void measure(BatchPreparationMetrics.Stage stage, Runnable action) {
            measure(stage, () -> {
                action.run();
                return null;
            });
        }

        private BatchPreparationMetrics.Stage failureStage() {
            return failureStage == null ? currentStage : failureStage;
        }
    }

    private record AssignmentKey(BigDecimal matchId, LocalDate registrationDate, String side) {
        private static AssignmentKey from(MessageInDto dto) {
            BigDecimal normalizedMatchId = dto.getMatchId() == null ? null : dto.getMatchId().stripTrailingZeros();
            String normalizedSide = dto.getSide() == null ? null : dto.getSide().trim().toUpperCase();
            return new AssignmentKey(normalizedMatchId, dto.getRegistrationDate(), normalizedSide);
        }
    }

    private MessageInDto buildMessageInDtoFromMessage(String message) {
        if (message == null || message.isBlank()) {
            throw new InvalidKafkaMessageException("Kafka message payload must not be empty");
        }
        final MessageInDto messageInDto;
        try {
            messageInDto = ApplicationUtils.convertJsonToObject(message, MessageInDto.class);
        } catch (ServiceException ex) {
            if (hasCause(ex, JsonProcessingException.class)) {
                throw new InvalidKafkaMessageException(ErrorCode.UNEXPECTED.getMessage(), ex);
            }
            throw ex;
        }
        if (messageInDto == null) {
            throw new InvalidKafkaMessageException("Kafka message payload must contain an object");
        }
        if (messageInDto.getMatchId() == null) {
            throw new InvalidKafkaMessageException("matchId is required");
        }
        try {
            messageInDto.getMatchId().longValueExact();
        } catch (ArithmeticException ex) {
            throw new InvalidKafkaMessageException("tradeId must be an integer within the signed 64-bit range", ex,
                    InputFailureType.MATCH_ID_NOT_LONG);
        }
        if (messageInDto.getFractions() == null || messageInDto.getFractions().stream().anyMatch(Objects::isNull)) {
            throw new InvalidKafkaMessageException("Fractions must be present and cannot contain null items");
        }
        validatorUtil.validateObject(messageInDto);
        return messageInDto;
    }

    private boolean isRecoverableMessageFailure(ServiceException failure) {
        return failure.getErrorCode() == ErrorCode.VALIDATION_ERROR
                || hasCause(failure, JsonProcessingException.class);
    }

    private boolean hasCause(Throwable failure, Class<? extends Throwable> expectedType) {
        for (Throwable cause = failure; cause != null && cause.getCause() != cause; cause = cause.getCause()) {
            if (expectedType.isInstance(cause)) {
                return true;
            }
        }
        return false;
    }

    private enum InputFailureType {
        GENERIC_INPUT,
        JSON_PARSE,
        MATCH_ID_NOT_LONG
    }

    private static final class InvalidKafkaMessageException extends RuntimeException {
        private final InputFailureType inputFailureType;

        private InvalidKafkaMessageException(String message) {
            super(message);
            this.inputFailureType = InputFailureType.GENERIC_INPUT;
        }

        private InvalidKafkaMessageException(String message, Throwable cause) {
            super(message, cause);
            this.inputFailureType = InputFailureType.JSON_PARSE;
        }

        private InvalidKafkaMessageException(String message, Throwable cause, InputFailureType inputFailureType) {
            super(message, cause);
            this.inputFailureType = inputFailureType;
        }

        private InputFailureType inputFailureType() {
            return inputFailureType;
        }

        private ErrorCode errorCode() {
            return inputFailureType == InputFailureType.MATCH_ID_NOT_LONG ? ErrorCode.VALIDATION_ERROR : null;
        }
    }

    private TradeEntity validateTrade(BigDecimal matchId, LocalDate matchDate, LocalDate clearingDate) {
        if (matchId == null) {
            throw new ServiceException(ErrorCode.TRADE_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
        if (matchDate == null) {
            throw new ServiceException(ErrorCode.TRADE_INVALID_DATES, HttpStatus.BAD_REQUEST);
        }
        return tradeRepository.findByMatchIdAndMatchDateAndClearingDate(matchId, matchDate, clearingDate)
                .orElseThrow(() -> new ServiceException(ErrorCode.TRADE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private SideEntity validateSide(String sideId) {
        if (sideId == null) {
            throw new ServiceException(ErrorCode.SIDE_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
        return sideRepository.findById(sideId)
                .orElseThrow(() -> new ServiceException(ErrorCode.SIDE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private void validateParticipant(String code, TradeEntity tradeEntity, SideEntity sideEntity) {
        ParticipantEntity participantEntity = participantRepository.findByCodeIgnoreCase(code)
                .orElseThrow(() -> new ServiceException(ErrorCode.PARTICIPANT_NOT_FOUND, HttpStatus.NOT_FOUND));

        if(SideEnum.BUY.getId().equalsIgnoreCase(sideEntity.getId()) && !participantEntity.getId().equals(tradeEntity.getParticipantBuy().getId())){
            throw new ServiceException(ErrorCode.PARTICIPANT_NOT_IN_SIDE, HttpStatus.BAD_REQUEST);
        } else if(SideEnum.SELL.getId().equalsIgnoreCase(sideEntity.getId()) && !participantEntity.getId().equals(tradeEntity.getParticipantSell().getId())){
            throw new ServiceException(ErrorCode.PARTICIPANT_NOT_IN_SIDE, HttpStatus.BAD_REQUEST);
        }
    }

    private ParticipantEntity validateCustodian(String code) {
        TypeEntity custodianType = typeMappingRepository.findByExternalSystemAndExternalDescription(TypeMappingEnum.REFERENCE_DATA.getValue(), TypeMappingEnum.CUSTODIO.getValue())
                .orElseThrow(() -> new ServiceException(ErrorCode.TYPE_MAPPING_NOT_FOUND, HttpStatus.NOT_FOUND)).getType();
        return participantRepository.findByCodeIgnoreCaseAndType(code, custodianType)
                .orElseThrow(() -> new ServiceException(ErrorCode.CUSTODIAN_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private ParticipantEntity validateFicAdministrator(String code) {
        TypeEntity ficAdminType = typeMappingRepository.findByExternalSystemAndExternalDescription(TypeMappingEnum.REFERENCE_DATA.getValue(), TypeMappingEnum.ADMIN_FIC.getValue())
                .orElseThrow(() -> new ServiceException(ErrorCode.TYPE_MAPPING_NOT_FOUND, HttpStatus.NOT_FOUND)).getType();
        return participantRepository.findByCodeIgnoreCaseAndType(code, ficAdminType)
                .orElseThrow(() -> new ServiceException(ErrorCode.FIC_ADMIN_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private FractionAccountOutDto validateTittleAccount(String titleAccount, Long tradeId, String sideId, Long originId) {
        log.debug("Validando cuenta titulo: {}", titleAccount);

        return operationCmdClient.validateAccountFractionAssignment(titleAccount, tradeId, sideId, originId);
    }

    private List<FractionInDto> returnFracctionsToOperation(MessageInDto dto, TradeEntity tradeEntity, SideEntity sideEntity){
        return returnFracctionsToOperation(dto, tradeEntity, sideEntity, null);
    }

    private List<FractionInDto> returnFracctionsToOperation(MessageInDto dto, TradeEntity tradeEntity,
            SideEntity sideEntity, PreparationStageContext stageContext){
        List<FractionKafkaInDto> fractionKafkaInDtos = dto.getFractions();
        List<FractionInDto> fractionInDtoList = new ArrayList<>();

        for (FractionKafkaInDto fractionKafkaInDto : fractionKafkaInDtos) {
            TypeEntity typeEntity = sideEntity.getId().equals(SideEnum.BUY.getId()) ? tradeEntity.getSourceQuoteBuyType() : tradeEntity.getSourceQuoteSellType();

            log.debug("Processing fraction reference: {} - referencePackage: {}",
                fractionKafkaInDto.getReference(), fractionKafkaInDto.getReferencePackage());

            FractionAccountOutDto tittleAccount = stageContext == null
                    ? validateTittleAccount(fractionKafkaInDto.getTitleAccount(), tradeEntity.getId(),
                            sideEntity.getId(), typeEntity.getId())
                    : stageContext.measure(BatchPreparationMetrics.Stage.VALIDATE_TITLE_ACCOUNT,
                            () -> validateTittleAccount(fractionKafkaInDto.getTitleAccount(), tradeEntity.getId(),
                                    sideEntity.getId(), typeEntity.getId()));

            Boolean isInvestorAccount = tittleAccount.getInvestorAccount() != null;
            Boolean isParticipantAccount = tittleAccount.getParticipantAccount() != null;

            FractionInDto fractionInDto = FractionInDto.builder()
                    .investorAccountId(isInvestorAccount ? tittleAccount.getInvestorAccount().getId() : null)
                    .participantAccountId(isParticipantAccount ?  tittleAccount.getParticipantAccount().getId() : null)
                    .directDepositorId(tradeEntity.getDepository() != null ? Long.valueOf(tradeEntity.getDepository().getId()) : 1L)
                    .fiduciarySpecialist(false)
                    .sourceQuoteTypeId(sideEntity.getId().equals(SideEnum.BUY.getId()) ? tradeEntity.getSourceQuoteBuyType().getId() : tradeEntity.getSourceQuoteSellType().getId())
                    .reference(fractionKafkaInDto.getReference())
                    .referencePackage(fractionKafkaInDto.getReferencePackage())
                    .fractionQuantity(fractionKafkaInDto.getFractionQuantity())
                    .commissionPercentage(fractionKafkaInDto.getCommissionPercentage())
                    .valTax(BigDecimal.ZERO) //DUDA
                    .cashAccount(fractionKafkaInDto.getCashAccount())
                    .custodianId(ObjectUtils.isEmpty(fractionKafkaInDto.getCustodianCode()) ?
                            tittleAccount.getCustodian() != null ? tittleAccount.getCustodian().getId()
                                                                : null
                                    : validateCustodian(fractionKafkaInDto.getCustodianCode()).getId())
                    .ficAdministratorId(ObjectUtils.isEmpty(fractionKafkaInDto.getFicAdministratorCode()) ? null : validateFicAdministrator(fractionKafkaInDto.getFicAdministratorCode()).getId())
                    .build();

            fractionInDtoList.add(fractionInDto);
        }

        return fractionInDtoList;
    }

    @Async("messageProcessorExecutor")
    public CompletableFuture<Void> processMessageAsync(MessageInDto dto) {

        return CompletableFuture.runAsync(() -> {
            try {
                log.info("Asynchronous processing started for message with matchId: {}", dto.getMatchId());

                processMessage(dto);

                log.info("Asynchronous processing completed for message with matchId: {}", dto.getMatchId());
            } catch (Exception e) {
                log.error("Asynchronous processing error with matchId: {}", dto.getMatchId(), e);
            }
        });
    }

    private Boolean sendDefinitiveAssignment(Boolean isFinalAssignment, TradeEntity tradeEntity, SideEntity sideEntity){
        return sendDefinitiveAssignment(isFinalAssignment, tradeEntity.getId(), sideEntity.getId());
    }

    private Boolean sendDefinitiveAssignment(Boolean isFinalAssignment, Long tradeId, String sideId){
        if(isFinalAssignment){
            log.info("Inicia asignacion definitiva para: {}", tradeId);
            AssignmentClosureInDto assignmentClosureInDto = AssignmentClosureInDto.builder()
                    .tradeId(tradeId)
                    .sideId(sideId)
                    .build();

            AssignmentClosureValidateOutDto assignmentClosureValidateOutDto = operationCmdClient.confirmDefinitive(List.of(assignmentClosureInDto));
            log.info("Operation closure without errors: {}", assignmentClosureValidateOutDto.getSuccessfulAssignmentClosure());
            log.info("Operation closure with errors: {}", assignmentClosureValidateOutDto.getErrorAssignmentClosure());
            if(!assignmentClosureValidateOutDto.getErrorAssignmentClosure().isEmpty()){

                String errorMessages = assignmentClosureValidateOutDto.getErrorAssignmentClosure().stream()
                        .map(error -> error.getMessage())
                        .reduce((msg1, msg2) -> msg1 + "; " + msg2)
                        .orElse("Error desconocido");
                throw new ServiceException(ErrorCode.DEFINITIVE_ASSIGNMENT_ERROR, errorMessages);
            }
            return true;
        }else{
            log.info("Asignacion definitiva es: {}", isFinalAssignment);
            return false;
        }
    }

    private KafkaErrorResponseDto buildErrorResponse(int statusCode, String error, String message, String cause) {
        return buildErrorResponse(statusCode, error, message, cause, error);
    }

    private KafkaErrorResponseDto buildErrorResponse(int statusCode, String error, String message, String cause,
            String causeCode) {
        ApiClientCauseDto apiClient = causeCatalog.resolve(causeCode == null ? "UNKNOWN" : causeCode);
        return KafkaErrorResponseDto.builder()
                .code(statusCode)
                .description(error)
                .message(message)
                .additionalMessages(cause)
                .apiClient(apiClient)
                .build();
    }

    private String extractCauseMessage(String msg) {
        String key = "\"errorMessageDetail\":\"";
        int startIndex = msg.indexOf(key);

        if (startIndex == -1) {
            return msg;
        }

        startIndex += key.length();
        int endIndex = msg.indexOf("\"", startIndex);

        if (endIndex == -1) {
            return msg.substring(startIndex);
        }

        return msg.substring(startIndex, endIndex);
    }
}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/service/impl/ScheduleValidationServiceImpl.java

```java
package com.nubo.operation.orchestrator.ext.api.service.impl;

import com.nubo.operation.orchestrator.ext.api.application.properties.PropertiesConfig;
import com.nubo.operation.orchestrator.ext.api.application.util.ApplicationUtils;
import com.nubo.operation.orchestrator.ext.api.client.schedule.validate.models.dto.response.ScheduleValidationOutDto;
import com.nubo.operation.orchestrator.ext.api.client.schedule.validate.service.ScheduleValidateClient;
import com.nubo.operation.orchestrator.ext.api.exception.ServiceException;
import com.nubo.operation.orchestrator.ext.api.exception.error.ErrorCode;
import com.nubo.operation.orchestrator.ext.api.models.entity.ParticipantEntity;
import com.nubo.operation.orchestrator.ext.api.repository.ParticipantRepository;
import com.nubo.operation.orchestrator.ext.api.repository.TradeRepository;
import com.nubo.operation.orchestrator.ext.api.service.ScheduleValidationService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Set;

@Service
@RequiredArgsConstructor
@Slf4j
public class ScheduleValidationServiceImpl implements ScheduleValidationService {

    // Renta Variable y Mercado Global, igual que asignacion-srv17-back al buscar el trade.
    private static final Set<String> TRADE_MARKET_IDS = Set.of("1", "6");

    private final ScheduleValidateClient scheduleValidateClient;
    private final ParticipantRepository participantRepository;
    private final TradeRepository tradeRepository;
    private final PropertiesConfig propertiesConfig;

    @Override
    public void validate(String participantCode, BigDecimal matchId, LocalDate matchDate, boolean finalAssignment) {
        Integer screenActionCode = finalAssignment
                ? propertiesConfig.getScheduleScreenActionCodeFinalAssignment()
                : propertiesConfig.getScheduleScreenActionCodeAssignment();
        if (!StringUtils.hasText(propertiesConfig.getUrlScheduleValidate()) || screenActionCode == null) {
            log.error("schedule-validation no configurado: client.nubo.url-schedule-validate y "
                            + "schedule.screen-action-code.{} son obligatorios para validar horarios",
                    finalAssignment ? "final-assignment" : "assignment");
            throw new ServiceException(ErrorCode.SCHEDULE_VALIDATION_API_ERROR, HttpStatus.BAD_GATEWAY);
        }

        ParticipantEntity participant = participantRepository.findByCodeIgnoreCase(participantCode)
                .orElseThrow(() -> new ServiceException(ErrorCode.PARTICIPANT_NOT_FOUND, HttpStatus.NOT_FOUND));
        if (participant.getCountry() == null || participant.getCountry().getId() == null) {
            throw new ServiceException(ErrorCode.COUNTRY_NOT_FOUND, HttpStatus.NOT_FOUND);
        }

        boolean isClosingTimeSecondary = isClosingTimeSecondary(matchId, matchDate,
                participant.getCountry().getTimeZone());
        ScheduleValidationOutDto validation = scheduleValidateClient.validate(screenActionCode, participant.getId(),
                participant.getCountry().getId(), isClosingTimeSecondary);

        if (Boolean.FALSE.equals(validation.getIsBusinessDay())) {
            log.warn("Schedule validation rejected: not a business day for participant {}", participant.getId());
            throw rejection(ErrorCode.NOT_BUSINESS_DAY, validation.getMessage());
        }
        if (Boolean.FALSE.equals(validation.getInSchedule())) {
            log.warn("Schedule validation rejected: out of schedule for participant {}", participant.getId());
            throw rejection(ErrorCode.OUTSIDE_BUSINESS_HOURS, validation.getMessage());
        }
        if (!Boolean.TRUE.equals(validation.getInSchedule())) {
            log.warn("Schedule validation rejected: invalid response for participant {}", participant.getId());
            throw new ServiceException(ErrorCode.SCHEDULE_VALIDATION_API_ERROR, HttpStatus.BAD_GATEWAY);
        }
        log.info("Schedule validation passed for participant {}", participant.getId());
    }

    /**
     * El cierre secundario aplica solo cuando hoy (en la zona horaria del país) es la fecha de liquidación o la
     * de liquidación de retorno del trade. Si el trade no se encuentra, se usa el cierre principal; la
     * inexistencia del trade la rechaza la validación posterior.
     */
    private boolean isClosingTimeSecondary(BigDecimal matchId, LocalDate matchDate, String timeZone) {
        if (matchId == null || matchDate == null) {
            return false;
        }
        LocalDate today = ApplicationUtils.getLocalDateNow(timeZone);
        return tradeRepository.findClearingDates(matchId, matchDate, TRADE_MARKET_IDS).stream()
                .findFirst()
                .map(trade -> today.equals(trade.getClearingDate()) || today.equals(trade.getReturnClearingDate()))
                .orElse(false);
    }

    private ServiceException rejection(ErrorCode errorCode, String apiMessage) {
        String message = StringUtils.hasText(apiMessage) ? apiMessage : errorCode.getMessage();
        return new ServiceException(errorCode, HttpStatus.BAD_REQUEST, message);
    }
}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/service/impl/lanes/AssignmentLane.java

```java
package com.nubo.operation.orchestrator.ext.api.service.impl.lanes;

import java.util.List;

/** Ordered, immutable work assigned to one deterministic Trade lane. */
public record AssignmentLane(int laneIndex, List<ParsedBatchItem> items) {

    public AssignmentLane {
        items = List.copyOf(items);
    }
}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/service/impl/lanes/AssignmentLaneCoordinator.java

```java
package com.nubo.operation.orchestrator.ext.api.service.impl.lanes;

import com.nubo.operation.orchestrator.ext.api.application.properties.PropertiesConfig;
import com.nubo.operation.orchestrator.ext.api.application.context.GlobalContext;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.Executor;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicInteger;

/** Coordinates deterministic Trade lanes and waits for every lane before returning. */
@Component
@RequiredArgsConstructor
@Slf4j
public class AssignmentLaneCoordinator {

    private final AssignmentLaneProcessor assignmentLaneProcessor;
    private final TradeLanePartitioner tradeLanePartitioner;
    private final PropertiesConfig propertiesConfig;
    @Qualifier("assignmentBatchExecutor")
    private final Executor assignmentBatchExecutor;

    public AssignmentLanesResult process(String batchId, List<ParsedBatchItem> items, int processingSize) {
        int configuredParallelism = effectiveParallelism();
        List<AssignmentLane> lanes = tradeLanePartitioner.partition(items, configuredParallelism);
        long startedNanos = System.nanoTime();
        AtomicInteger activeLanes = new AtomicInteger();
        AtomicInteger maxConcurrentLanes = new AtomicInteger();
        List<LaneResult> results;
        ExecutorMetrics executorMetrics = executorMetrics();

        log.info("PERF_ASSIGNMENT_LANES_STARTED service=orquestador batchId={} itemCount={} configuredParallelism={} activeLanes={} executorCorePoolSize={} executorMaxPoolSize={} executorPoolSize={} executorActiveCount={} executorQueueSize={} executorQueueRemainingCapacity={}",
                batchId, items.size(), configuredParallelism, lanes.size(), executorMetrics.corePoolSize(),
                executorMetrics.maxPoolSize(), executorMetrics.poolSize(), executorMetrics.activeCount(),
                executorMetrics.queueSize(), executorMetrics.queueRemainingCapacity());

        if (configuredParallelism == 1 || lanes.size() <= 1) {
            results = lanes.stream().map(lane -> processLane(batchId, lane, processingSize, activeLanes,
                    maxConcurrentLanes)).toList();
        } else {
            List<CompletableFuture<LaneResult>> futures = new ArrayList<>();
            try {
                for (AssignmentLane lane : lanes) {
                    futures.add(CompletableFuture.supplyAsync(
                            () -> processLane(batchId, lane, processingSize, activeLanes, maxConcurrentLanes),
                            assignmentBatchExecutor));
                }
            } catch (RuntimeException submissionFailure) {
                awaitSubmittedLanesToSettle(futures);
                throw submissionFailure;
            }
            awaitSubmittedLanes(futures);
            results = futures.stream().map(CompletableFuture::join).toList();
        }

        AssignmentLanesResult result = new AssignmentLanesResult(configuredParallelism, lanes.size(),
                maxConcurrentLanes.get(), TimeUnit.NANOSECONDS.toMillis(System.nanoTime() - startedNanos), results);
        log.info("PERF_ASSIGNMENT_LANES_COMPLETED service=orquestador batchId={} itemCount={} configuredParallelism={} activeLanes={} maxConcurrentLanes={} durationMs={} successCount={} failureCount={}",
                batchId, items.size(), result.configuredParallelism(), result.activeLanes(), result.maxConcurrentLanes(),
                result.parallelWallMs(), result.successCount(), result.failureCount());
        return result;
    }

    private LaneResult processLane(String batchId, AssignmentLane lane, int processingSize,
                                   AtomicInteger activeLanes, AtomicInteger maxConcurrentLanes) {
        int active = activeLanes.incrementAndGet();
        maxConcurrentLanes.accumulateAndGet(active, Math::max);
        long startedNanos = System.nanoTime();
        log.info("PERF_ASSIGNMENT_LANE_STARTED service=orquestador batchId={} laneIndex={} itemCount={} activeLanes={} thread={}",
                batchId, lane.laneIndex(), lane.items().size(), active, Thread.currentThread().getName());
        try {
            LaneResult result = assignmentLaneProcessor.process(batchId, lane, processingSize);
            log.info("PERF_ASSIGNMENT_LANE_COMPLETED service=orquestador batchId={} laneIndex={} itemCount={} durationMs={} successCount={} failureCount={} cmdProcessingCalls={} thread={}",
                    batchId, lane.laneIndex(), lane.items().size(),
                    TimeUnit.NANOSECONDS.toMillis(System.nanoTime() - startedNanos), result.successCount(),
                    result.failureCount(), result.cmdProcessingCalls(), Thread.currentThread().getName());
            return result;
        } catch (RuntimeException exception) {
            log.info("PERF_ASSIGNMENT_LANE_FAILED service=orquestador batchId={} laneIndex={} itemCount={} durationMs={} exceptionClass={}",
                    batchId, lane.laneIndex(), lane.items().size(),
                    TimeUnit.NANOSECONDS.toMillis(System.nanoTime() - startedNanos), exception.getClass().getName());
            throw exception;
        } finally {
            activeLanes.decrementAndGet();
            GlobalContext.remove();
        }
    }

    private int effectiveParallelism() {
        return propertiesConfig.isAssignmentLanesEnabled()
                ? propertiesConfig.getAssignmentLanesParallelism() : 1;
    }

    private void awaitSubmittedLanes(List<CompletableFuture<LaneResult>> futures) {
        CompletableFuture.allOf(futures.toArray(new CompletableFuture[0])).join();
    }

    private void awaitSubmittedLanesToSettle(List<CompletableFuture<LaneResult>> futures) {
        try {
            awaitSubmittedLanes(futures);
        } catch (RuntimeException ignored) {
            // The submission failure remains the batch failure after every admitted lane has settled.
        }
    }

    private ExecutorMetrics executorMetrics() {
        if (!(assignmentBatchExecutor instanceof ThreadPoolTaskExecutor executor)) {
            return ExecutorMetrics.unavailable();
        }
        java.util.concurrent.ThreadPoolExecutor threadPoolExecutor = executor.getThreadPoolExecutor();
        return new ExecutorMetrics(executor.getCorePoolSize(), executor.getMaxPoolSize(), executor.getPoolSize(),
                executor.getActiveCount(), threadPoolExecutor.getQueue().size(),
                threadPoolExecutor.getQueue().remainingCapacity());
    }

    private record ExecutorMetrics(int corePoolSize, int maxPoolSize, int poolSize, int activeCount,
                                   int queueSize, int queueRemainingCapacity) {

        private static ExecutorMetrics unavailable() {
            return new ExecutorMetrics(-1, -1, -1, -1, -1, -1);
        }
    }
}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/service/impl/lanes/AssignmentLaneProcessor.java

```java
package com.nubo.operation.orchestrator.ext.api.service.impl.lanes;

import com.nubo.operation.orchestrator.ext.api.client.kafka.producer.service.KafkaNuboAdapterProducer;
import com.nubo.operation.orchestrator.ext.api.client.operation.cmd.models.dto.request.AssignmentClosureInDto;
import com.nubo.operation.orchestrator.ext.api.client.operation.cmd.models.dto.request.BatchAssignmentInDto;
import com.nubo.operation.orchestrator.ext.api.client.operation.cmd.models.dto.request.BatchAssignmentItemInDto;
import com.nubo.operation.orchestrator.ext.api.client.operation.cmd.models.dto.request.BatchAssignmentValidationFractionInDto;
import com.nubo.operation.orchestrator.ext.api.client.operation.cmd.models.dto.response.AssignmentClosureValidateOutDto;
import com.nubo.operation.orchestrator.ext.api.client.operation.cmd.models.dto.response.BatchAssignmentItemOutDto;
import com.nubo.operation.orchestrator.ext.api.client.operation.cmd.models.dto.response.BatchAssignmentOutDto;
import com.nubo.operation.orchestrator.ext.api.application.cause.CauseCatalog;
import com.nubo.operation.orchestrator.ext.api.client.operation.cmd.service.OperationCmdClient;
import com.nubo.operation.orchestrator.ext.api.exception.ClientException;
import com.nubo.operation.orchestrator.ext.api.exception.DefinitiveAssignmentRuleException;
import com.nubo.operation.orchestrator.ext.api.exception.ServiceException;
import com.nubo.operation.orchestrator.ext.api.exception.error.ErrorCode;
import com.nubo.operation.orchestrator.ext.api.models.domain.KafkaMessage;
import com.nubo.operation.orchestrator.ext.api.models.dto.request.FractionKafkaInDto;
import com.nubo.operation.orchestrator.ext.api.models.dto.request.MessageInDto;
import com.nubo.operation.orchestrator.ext.api.models.dto.response.ApiClientCauseDto;
import com.nubo.operation.orchestrator.ext.api.models.dto.response.BusinessRuleCodeOutDto;
import com.nubo.operation.orchestrator.ext.api.models.dto.response.KafkaErrorMessageOutDto;
import com.nubo.operation.orchestrator.ext.api.models.dto.response.KafkaErrorResponseDto;
import com.nubo.operation.orchestrator.ext.api.models.dto.response.KafkaProcessResponseDto;
import com.nubo.operation.orchestrator.ext.api.models.enums.OperationTypeEnum;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;

/** Executes one lane sequentially. It intentionally owns all mutable lane state. */
@Component
@RequiredArgsConstructor
@Slf4j
public class AssignmentLaneProcessor {

    private final OperationCmdClient operationCmdClient;
    private final KafkaNuboAdapterProducer kafkaNuboProducer;
    private final CauseCatalog causeCatalog;

    public LaneResult process(String batchId, AssignmentLane lane, int processingSize) {
        long startedNanos = System.nanoTime();
        int effectiveChunkSize = Math.max(1, processingSize);
        int successCount = 0;
        int failureCount = 0;
        int cmdProcessingCalls = 0;
        int cmdProcessingInputCount = 0;
        int chunkCount = 0;
        List<CompletableFuture<?>> responseFutures = new ArrayList<>();

        for (int from = 0; from < lane.items().size(); from += effectiveChunkSize) {
            int to = Math.min(from + effectiveChunkSize, lane.items().size());
            List<ParsedBatchItem> chunk = lane.items().subList(from, to);
            long chunkStartedNanos = System.nanoTime();
            chunkCount++;
            List<BatchAssignmentItemInDto> cmdItems = new ArrayList<>();
            Map<String, ArithmeticException> preparationFailures = new java.util.LinkedHashMap<>();
            for (ParsedBatchItem parsed : chunk) {
                try {
                    cmdItems.add(toRawBatchItem(parsed));
                } catch (ArithmeticException ex) {
                    preparationFailures.put(parsed.envelope().itemId(), ex);
                    log.warn("ASSIGNMENT_ITEM_PREPARATION_FAILED batchId={} laneIndex={} chunkIndex={} itemId={} "
                                    + "matchIdPrecision={} matchIdSignum={} exceptionType={} message={}",
                            batchId, lane.laneIndex(), chunkCount - 1, parsed.envelope().itemId(),
                            parsed.dto().getMatchId().precision(), parsed.dto().getMatchId().signum(),
                            ex.getClass().getSimpleName(), ex.getMessage());
                }
            }

            if (cmdItems.isEmpty()) {
                for (ParsedBatchItem parsed : chunk) {
                    ArithmeticException failure = preparationFailures.get(parsed.envelope().itemId());
                    if (failure != null) {
                        failureCount++;
                        responseFutures.add(sendPreparationFailure(parsed));
                    }
                }
                log.info("ASSIGNMENT_LANE_CHUNK_PROCESS batchId={} laneIndex={} chunkIndex={} inputCount={} "
                                + "cmdItemCount=0 processMs={}",
                        batchId, lane.laneIndex(), chunkCount - 1, chunk.size(),
                        TimeUnit.NANOSECONDS.toMillis(System.nanoTime() - chunkStartedNanos));
                continue;
            }

            cmdProcessingCalls++;
            cmdProcessingInputCount += cmdItems.size();
            BatchAssignmentOutDto cmdResponse;
            try {
                cmdResponse = operationCmdClient.processBatch(
                        BatchAssignmentInDto.builder().batchId(batchId).items(cmdItems).build());
            } catch (ClientException | ServiceException ex) {
                FailureDetails details = failureDetails(ex);
                logCmdResult(batchId, lane.laneIndex(), cmdItems.size(), String.valueOf(details.httpStatus()),
                        "EXCEPTION", details.errorCode(), details.message(), 0, cmdItems.size());
                for (ParsedBatchItem parsed : chunk) {
                    ArithmeticException preparationFailure = preparationFailures.get(parsed.envelope().itemId());
                    failureCount++;
                    responseFutures.add(preparationFailure == null
                            ? sendFailure(parsed.envelope(), parsed.dto(), ex)
                            : sendPreparationFailure(parsed));
                }
                logChunkProcessed(batchId, lane, chunkCount, chunk.size(), cmdItems.size(), chunkStartedNanos);
                continue;
            }

            List<BatchAssignmentItemOutDto> cmdResults;
            if (cmdResponse == null || cmdResponse.getItems() == null) {
                logCmdResult(batchId, lane.laneIndex(), cmdItems.size(), "NOT_AVAILABLE",
                        "EMPTY_RESPONSE", "MISSING_BATCH_RESULT", "CMD returned an empty batch response",
                        0, cmdItems.size());
                cmdResults = List.of();
            } else {
                cmdResults = cmdResponse.getItems();
            }
            Map<String, BatchAssignmentItemOutDto> resultsById = cmdResults.stream()
                    .collect(Collectors.toMap(BatchAssignmentItemOutDto::getItemId,
                            result -> result, (first, ignored) -> first));
            long cmdSuccessCount = cmdItems.stream()
                    .map(BatchAssignmentItemInDto::getItemId)
                    .map(resultsById::get)
                    .filter(result -> result != null && Boolean.TRUE.equals(result.getSuccess()))
                    .count();
            String cmdErrorCodes = resultsById.values().stream()
                    .filter(result -> !Boolean.TRUE.equals(result.getSuccess()))
                    .map(BatchAssignmentItemOutDto::getErrorCode)
                    .filter(code -> code != null && !code.isBlank())
                    .distinct()
                    .collect(Collectors.joining(","));
            String cmdMessages = resultsById.values().stream()
                    .filter(result -> !Boolean.TRUE.equals(result.getSuccess()))
                    .map(BatchAssignmentItemOutDto::getErrorMessage)
                    .filter(message -> message != null && !message.isBlank())
                    .distinct()
                    .limit(3)
                    .collect(Collectors.joining(" | "));
            logCmdResult(batchId, lane.laneIndex(), cmdItems.size(), "NOT_AVAILABLE",
                    "ITEM_RESULTS", cmdErrorCodes.isBlank() ? "NONE" : cmdErrorCodes,
                    cmdMessages.isBlank() ? "NONE" : cmdMessages, cmdSuccessCount,
                    cmdItems.size() - cmdSuccessCount);

            for (ParsedBatchItem parsed : chunk) {
                ArithmeticException preparationFailure = preparationFailures.get(parsed.envelope().itemId());
                if (preparationFailure != null) {
                    failureCount++;
                    responseFutures.add(sendPreparationFailure(parsed));
                    continue;
                }
                BatchAssignmentItemOutDto result = resultsById.get(parsed.envelope().itemId());
                if (result == null) {
                    failureCount++;
                    responseFutures.add(sendRejection(parsed.envelope(), parsed.dto(), HttpStatus.BAD_GATEWAY.value(),
                            "MISSING_BATCH_RESULT", "CMD did not return a result for the batch item", null));
                } else if (Boolean.TRUE.equals(result.getSuccess())) {
                    try {
                        boolean definitive = sendDefinitiveAssignment(parsed.dto().getFinalAssignment(),
                                result.getTradeId(), result.getSideId());
                        responseFutures.add(sendSuccess(parsed, definitive));
                        successCount++;
                    } catch (ClientException | ServiceException ex) {
                        failureCount++;
                        responseFutures.add(sendFailure(parsed.envelope(), parsed.dto(), ex));
                    }
                } else {
                    failureCount++;
                    responseFutures.add(sendRejection(parsed.envelope(), parsed.dto(), HttpStatus.BAD_REQUEST.value(),
                            result.getErrorCode(), result.getErrorMessage(), result.getBusinessRuleCode()));
                }
            }
            logChunkProcessed(batchId, lane, chunkCount, chunk.size(), cmdItems.size(), chunkStartedNanos);
        }

        return new LaneResult(lane.laneIndex(), lane.items().size(), successCount, failureCount,
                cmdProcessingCalls, cmdProcessingInputCount, chunkCount,
                TimeUnit.NANOSECONDS.toMillis(System.nanoTime() - startedNanos), responseFutures);
    }

    private CompletableFuture<?> sendPreparationFailure(ParsedBatchItem parsed) {
        return sendRejection(parsed.envelope(), parsed.dto(), HttpStatus.BAD_REQUEST.value(),
                ErrorCode.VALIDATION_ERROR.getMessage(),
                "tradeId must be an integer within the signed 64-bit range", null,
                ErrorCode.VALIDATION_ERROR.name());
    }

    private void logChunkProcessed(String batchId, AssignmentLane lane, int chunkCount, int inputCount,
                                   int cmdItemCount, long chunkStartedNanos) {
        log.info("ASSIGNMENT_LANE_CHUNK_PROCESS batchId={} laneIndex={} chunkIndex={} inputCount={} "
                        + "cmdItemCount={} processMs={}",
                batchId, lane.laneIndex(), chunkCount - 1, inputCount, cmdItemCount,
                TimeUnit.NANOSECONDS.toMillis(System.nanoTime() - chunkStartedNanos));
    }

    private BatchAssignmentItemInDto toRawBatchItem(ParsedBatchItem parsed) {
        MessageInDto dto = parsed.dto();
        return BatchAssignmentItemInDto.builder().itemId(parsed.envelope().itemId())
                .correlationId(parsed.envelope().correlationId()).topic(parsed.envelope().topic())
                .partition(parsed.envelope().partition()).offset(parsed.envelope().offset()).key(parsed.envelope().key())
                .matchId(dto.getMatchId().longValueExact()).registrationDate(dto.getRegistrationDate())
                .sideId(dto.getSide()).participantCode(dto.getParticipantCode())
                .operationType(dto.getOperationType()).rawFractions(dto.getFractions().stream()
                        .map(this::toValidationFraction).toList()).build();
    }

    private void logCmdResult(
            String batchId,
            int laneIndex,
            int itemCount,
            String httpStatus,
            String cmdResult,
            String cmdCode,
            String cmdMessage,
            long successCount,
            long failureCount) {
        log.info(
                "ASSIGNMENT_CMD_RESULT batchId={} laneIndex={} itemCount={} httpStatus={} cmdResult={} "
                        + "cmdCode={} cmdMessage={} successCount={} failureCount={}",
                batchId,
                laneIndex,
                itemCount,
                httpStatus,
                cmdResult,
                cmdCode,
                cmdMessage,
                successCount,
                failureCount);
    }

    private BatchAssignmentValidationFractionInDto toValidationFraction(FractionKafkaInDto fraction) {
        return BatchAssignmentValidationFractionInDto.builder().reference(fraction.getReference())
                .titleAccount(fraction.getTitleAccount()).cashAccount(fraction.getCashAccount())
                .fractionQuantity(fraction.getFractionQuantity()).commissionPercentage(fraction.getCommissionPercentage())
                .custodianCode(fraction.getCustodianCode()).ficAdministratorCode(fraction.getFicAdministratorCode())
                .referencePackage(fraction.getReferencePackage()).build();
    }

    private CompletableFuture<?> sendSuccess(ParsedBatchItem parsed, boolean definitiveAssignment) {
        MessageInDto dto = parsed.dto();
        String referencePackage = dto.getFractions().isEmpty() ? null : dto.getFractions().get(0).getReferencePackage();
        KafkaProcessResponseDto response = KafkaProcessResponseDto.builder().folio(dto.getMatchId())
                .asignacion(OperationTypeEnum.ASSIGNMENT_TYPE.getValue().equals(dto.getOperationType()))
                .reasignacion(OperationTypeEnum.REASSIGNMENT_TYPE.getValue().equals(dto.getOperationType()))
                .asignacionDefinitiva(definitiveAssignment).referencePackage(referencePackage)
                .originUuid(dto.getUuid())
                .side(dto.getSide())
                .registrationDate(dto.getRegistrationDate())
                .processedDate(Instant.now())
                .build();
        return kafkaNuboProducer.sendAcceptedResponse(response, parsed.envelope().key(), parsed.envelope().correlationId());
    }

    private CompletableFuture<?> sendFailure(KafkaMessage envelope, MessageInDto dto, RuntimeException failure) {
        FailureDetails details = failureDetails(failure);
        return sendRejection(envelope, dto, details.httpStatus(), details.errorCode(), details.message(),
                businessRuleCode(failure));
    }

    private BusinessRuleCodeOutDto businessRuleCode(RuntimeException failure) {
        return failure instanceof DefinitiveAssignmentRuleException definitiveEx
                ? definitiveEx.getBusinessRuleCode()
                : null;
    }

    private CompletableFuture<?> sendRejection(KafkaMessage envelope, MessageInDto dto, int statusCode,
                                                String description, String message,
                                                BusinessRuleCodeOutDto businessRuleCode) {
        return sendRejection(envelope, dto, statusCode, description, message, businessRuleCode, description);
    }

    private CompletableFuture<?> sendRejection(KafkaMessage envelope, MessageInDto dto, int statusCode,
                                                String description, String message,
                                                BusinessRuleCodeOutDto businessRuleCode, String causeCode) {
        String referencePackage = dto == null || dto.getFractions() == null || dto.getFractions().isEmpty() ? null
                : dto.getFractions().get(0).getReferencePackage();
        KafkaProcessResponseDto detail = KafkaProcessResponseDto.builder().folio(dto == null ? null : dto.getMatchId())
                .asignacion(dto != null && OperationTypeEnum.ASSIGNMENT_TYPE.getValue().equals(dto.getOperationType()))
                .reasignacion(dto != null && OperationTypeEnum.REASSIGNMENT_TYPE.getValue().equals(dto.getOperationType()))
                .asignacionDefinitiva(dto != null && Boolean.TRUE.equals(dto.getFinalAssignment()))
                .originUuid(dto.getUuid())
                .side(dto.getSide())
                .registrationDate(dto.getRegistrationDate())
                .processedDate(Instant.now())
                .referencePackage(referencePackage).build();
        ApiClientCauseDto apiClient = causeCatalog.resolve(causeCode == null ? "BATCH_ITEM_ERROR" : causeCode,
                businessRuleCode);
        KafkaErrorMessageOutDto response = KafkaErrorMessageOutDto.builder().details(detail)
                .cause(KafkaErrorResponseDto.builder().code(statusCode)
                        .description(description == null ? "BATCH_ITEM_ERROR" : description)
                        .message(message == null ? "Batch item processing failed" : message)
                        .additionalMessages("No additional details")
                        .apiClient(apiClient)
                        .build())
                .build();
        return kafkaNuboProducer.sendRejectionResponse(response, envelope.key(), envelope.correlationId());
    }

    private boolean sendDefinitiveAssignment(Boolean isFinalAssignment, Long tradeId, String sideId) {
        if (!Boolean.TRUE.equals(isFinalAssignment)) {
            return false;
        }
        AssignmentClosureValidateOutDto response = operationCmdClient.confirmDefinitive(List.of(
                AssignmentClosureInDto.builder().tradeId(tradeId).sideId(sideId).build()));
        if (!response.getErrorAssignmentClosure().isEmpty()) {
            String messages = response.getErrorAssignmentClosure().stream().map(error -> error.getMessage())
                    .reduce((first, second) -> first + "; " + second).orElse("Error desconocido");
            BusinessRuleCodeOutDto businessRuleCode = response.getErrorAssignmentClosure().get(0).getBusinessRuleCode();
            throw new DefinitiveAssignmentRuleException(ErrorCode.DEFINITIVE_ASSIGNMENT_ERROR, messages, businessRuleCode);
        }
        return true;
    }

    private FailureDetails failureDetails(RuntimeException failure) {
        if (failure instanceof ClientException clientException) {
            return new FailureDetails(clientException.getHttpStatusOrDefault().value(),
                    clientException.getErrorCode().name(), failure.getMessage());
        }
        if (failure instanceof ServiceException serviceException) {
            return new FailureDetails(serviceException.getHttpStatusOrDefault().value(),
                    serviceException.getErrorCode().name(), failure.getMessage());
        }
        return new FailureDetails(HttpStatus.INTERNAL_SERVER_ERROR.value(), ErrorCode.UNEXPECTED.name(), failure.getMessage());
    }

    private record FailureDetails(int httpStatus, String errorCode, String message) {
    }
}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/service/impl/lanes/AssignmentLanesResult.java

```java
package com.nubo.operation.orchestrator.ext.api.service.impl.lanes;

import java.util.List;
import java.util.concurrent.CompletableFuture;

/** Consolidated lane work, assembled only after all lane futures complete. */
public record AssignmentLanesResult(int configuredParallelism, int activeLanes, int maxConcurrentLanes,
                                    long parallelWallMs, List<LaneResult> lanes) {

    public AssignmentLanesResult {
        lanes = List.copyOf(lanes);
    }

    public int successCount() {
        return lanes.stream().mapToInt(LaneResult::successCount).sum();
    }

    public int failureCount() {
        return lanes.stream().mapToInt(LaneResult::failureCount).sum();
    }

    public int cmdProcessingCalls() {
        return lanes.stream().mapToInt(LaneResult::cmdProcessingCalls).sum();
    }

    public int cmdProcessingInputCount() {
        return lanes.stream().mapToInt(LaneResult::cmdProcessingInputCount).sum();
    }

    public int chunkCount() {
        return lanes.stream().mapToInt(LaneResult::chunkCount).sum();
    }

    public long laneWorkSumMs() {
        return lanes.stream().mapToLong(LaneResult::elapsedMs).sum();
    }

    public List<CompletableFuture<?>> responseFutures() {
        return lanes.stream().flatMap(result -> result.responseFutures().stream()).toList();
    }
}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/service/impl/lanes/LaneResult.java

```java
package com.nubo.operation.orchestrator.ext.api.service.impl.lanes;

import java.util.List;
import java.util.concurrent.CompletableFuture;

/** Per-lane result; all mutable state remains confined to the lane thread. */
public record LaneResult(int laneIndex, int itemCount, int successCount, int failureCount,
                         int cmdProcessingCalls, int cmdProcessingInputCount, int chunkCount,
                         long elapsedMs, List<CompletableFuture<?>> responseFutures) {

    public LaneResult {
        responseFutures = List.copyOf(responseFutures);
    }
}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/service/impl/lanes/ParsedBatchItem.java

```java
package com.nubo.operation.orchestrator.ext.api.service.impl.lanes;

import com.nubo.operation.orchestrator.ext.api.models.domain.KafkaMessage;
import com.nubo.operation.orchestrator.ext.api.models.dto.request.MessageInDto;

/** Immutable Kafka item accepted by the batch parse stage. */
public record ParsedBatchItem(KafkaMessage envelope, MessageInDto dto) {
}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/service/impl/lanes/TradeBusinessKey.java

```java
package com.nubo.operation.orchestrator.ext.api.service.impl.lanes;

/**
 * Canonical identity used only to serialize mutations of the same Trade inside
 * one Kafka poll. Side is deliberately excluded because BUY and SELL update
 * the same Trade row downstream.
 */
public record TradeBusinessKey(String value) {
}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/service/impl/lanes/TradeBusinessKeyFactory.java

```java
package com.nubo.operation.orchestrator.ext.api.service.impl.lanes;

import com.nubo.operation.orchestrator.ext.api.models.dto.request.MessageInDto;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;

@Component
public class TradeBusinessKeyFactory {

    private static final String VERSION = "trade-v1";

    public TradeBusinessKey from(MessageInDto dto) {
        return new TradeBusinessKey(String.join("|", VERSION, normalizeMatchId(dto.getMatchId()),
                String.valueOf(dto.getRegistrationDate())));
    }

    private String normalizeMatchId(BigDecimal matchId) {
        return matchId == null ? "null" : matchId.stripTrailingZeros().toPlainString();
    }
}

```

## src/main/java/com/nubo/operation/orchestrator/ext/api/service/impl/lanes/TradeLanePartitioner.java

```java
package com.nubo.operation.orchestrator.ext.api.service.impl.lanes;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
@RequiredArgsConstructor
public class TradeLanePartitioner {

    private final TradeBusinessKeyFactory tradeBusinessKeyFactory;

    public List<AssignmentLane> partition(List<ParsedBatchItem> items, int parallelism) {
        int effectiveParallelism = Math.max(1, parallelism);
        List<List<ParsedBatchItem>> laneItems = new ArrayList<>(effectiveParallelism);
        for (int laneIndex = 0; laneIndex < effectiveParallelism; laneIndex++) {
            laneItems.add(new ArrayList<>());
        }

        for (ParsedBatchItem item : items) {
            TradeBusinessKey tradeKey = tradeBusinessKeyFactory.from(item.dto());
            int laneIndex = Math.floorMod(tradeKey.value().hashCode(), effectiveParallelism);
            laneItems.get(laneIndex).add(item);
        }

        List<AssignmentLane> lanes = new ArrayList<>(effectiveParallelism);
        for (int laneIndex = 0; laneIndex < effectiveParallelism; laneIndex++) {
            if (!laneItems.get(laneIndex).isEmpty()) {
                lanes.add(new AssignmentLane(laneIndex, laneItems.get(laneIndex)));
            }
        }
        return List.copyOf(lanes);
    }
}

```
