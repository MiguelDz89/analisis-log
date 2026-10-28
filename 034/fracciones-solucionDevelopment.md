# fracciones-solucionDevelopment

Código fuente de producción y configuraciones. Captura local: 28/10/2026.

Incluye 154 archivos Java y 16 archivos de configuración, recursos y compilación/despliegue.

Cada sección identifica la ruta original y contiene el archivo completo, salvo valores de credenciales ocultados. Los Java conservan sus implementaciones, imports, anotaciones y comentarios. Se excluyen src/test, resultados de compilación, binarios y herramientas/perfiles de pruebas de rendimiento. El nombre del repositorio puede contener test; se incluyen únicamente sus fuentes de producción.

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
17. `src/main/java/com/nubo/operations/fractionation/api/OperationsFractionationApiApplication.java`
18. `src/main/java/com/nubo/operations/fractionation/api/application/annotations/DecimalScale.java`
19. `src/main/java/com/nubo/operations/fractionation/api/application/annotations/ValidBigDecimal.java`
20. `src/main/java/com/nubo/operations/fractionation/api/application/config/BatchAssignmentTransactionMetricsConfig.java`
21. `src/main/java/com/nubo/operations/fractionation/api/application/config/CacheConfig.java`
22. `src/main/java/com/nubo/operations/fractionation/api/application/config/KafkaProducerConfig.java`
23. `src/main/java/com/nubo/operations/fractionation/api/application/config/SwaggerConfig.java`
24. `src/main/java/com/nubo/operations/fractionation/api/application/config/ValidBigDecimalConfig.java`
25. `src/main/java/com/nubo/operations/fractionation/api/application/config/WebConfig.java`
26. `src/main/java/com/nubo/operations/fractionation/api/application/context/GlobalContext.java`
27. `src/main/java/com/nubo/operations/fractionation/api/application/database/NamingStrategyConfig.java`
28. `src/main/java/com/nubo/operations/fractionation/api/application/database/UpperNamingConfig.java`
29. `src/main/java/com/nubo/operations/fractionation/api/application/filters/GlobalFilter.java`
30. `src/main/java/com/nubo/operations/fractionation/api/application/interceptors/GlobalInterceptor.java`
31. `src/main/java/com/nubo/operations/fractionation/api/application/properties/AssignmentPersistenceProperties.java`
32. `src/main/java/com/nubo/operations/fractionation/api/application/properties/PropertiesConfig.java`
33. `src/main/java/com/nubo/operations/fractionation/api/application/properties/PropertiesContext.java`
34. `src/main/java/com/nubo/operations/fractionation/api/application/serializers/BigDecimalSerializer.java`
35. `src/main/java/com/nubo/operations/fractionation/api/application/util/ApplicationUtils.java`
36. `src/main/java/com/nubo/operations/fractionation/api/application/util/RestClientUtils.java`
37. `src/main/java/com/nubo/operations/fractionation/api/client/kafka/producer/dto/request/NotificationInDto.java`
38. `src/main/java/com/nubo/operations/fractionation/api/client/kafka/producer/dto/request/PackageCustodianInDto.java`
39. `src/main/java/com/nubo/operations/fractionation/api/client/kafka/producer/service/KafkaNuboProducer.java`
40. `src/main/java/com/nubo/operations/fractionation/api/client/kafka/producer/service/impl/KafkaNuboProducerImpl.java`
41. `src/main/java/com/nubo/operations/fractionation/api/client/operation/calculation/models/dto/request/SettleAccountsInDto.java`
42. `src/main/java/com/nubo/operations/fractionation/api/client/operation/calculation/models/dto/response/SettleAccountsOutDto.java`
43. `src/main/java/com/nubo/operations/fractionation/api/client/operation/calculation/service/OperationCalculationClient.java`
44. `src/main/java/com/nubo/operations/fractionation/api/client/operation/calculation/service/impl/OperationCalculationClientImpl.java`
45. `src/main/java/com/nubo/operations/fractionation/api/client/operation/rules/models/dto/request/BatchStatusUpdateTradeInDto.java`
46. `src/main/java/com/nubo/operations/fractionation/api/client/operation/rules/models/dto/request/BatchStatusUpdateTradeItemInDto.java`
47. `src/main/java/com/nubo/operations/fractionation/api/client/operation/rules/models/dto/request/StatusUpdateSettlementInDto.java`
48. `src/main/java/com/nubo/operations/fractionation/api/client/operation/rules/models/dto/request/StatusUpdateTradeInDto.java`
49. `src/main/java/com/nubo/operations/fractionation/api/client/operation/rules/models/dto/response/BatchStatusUpdateTradeItemOutDto.java`
50. `src/main/java/com/nubo/operations/fractionation/api/client/operation/rules/models/dto/response/BatchStatusUpdateTradeOutDto.java`
51. `src/main/java/com/nubo/operations/fractionation/api/client/operation/rules/models/dto/response/StatusClientOutDto.java`
52. `src/main/java/com/nubo/operations/fractionation/api/client/operation/rules/models/dto/response/StatusUpdateSettlementOutDto.java`
53. `src/main/java/com/nubo/operations/fractionation/api/client/operation/rules/models/dto/response/StatusUpdateTradeOutDto.java`
54. `src/main/java/com/nubo/operations/fractionation/api/client/operation/rules/service/OperationBusinessRuleClient.java`
55. `src/main/java/com/nubo/operations/fractionation/api/client/operation/rules/service/impl/OperationBusinessRuleClientImpl.java`
56. `src/main/java/com/nubo/operations/fractionation/api/exception/ClientException.java`
57. `src/main/java/com/nubo/operations/fractionation/api/exception/ServiceException.java`
58. `src/main/java/com/nubo/operations/fractionation/api/exception/error/ErrorCode.java`
59. `src/main/java/com/nubo/operations/fractionation/api/exception/error/ErrorResponse.java`
60. `src/main/java/com/nubo/operations/fractionation/api/exception/error/ErrorValidation.java`
61. `src/main/java/com/nubo/operations/fractionation/api/exception/handler/GlobalExceptionHandler.java`
62. `src/main/java/com/nubo/operations/fractionation/api/exception/kafka/KafkaErrorBuild.java`
63. `src/main/java/com/nubo/operations/fractionation/api/helpers/MapperUtil.java`
64. `src/main/java/com/nubo/operations/fractionation/api/models/domain/BatchDirectDepositoryLookup.java`
65. `src/main/java/com/nubo/operations/fractionation/api/models/domain/BatchPreparedReferences.java`
66. `src/main/java/com/nubo/operations/fractionation/api/models/domain/SettlementData.java`
67. `src/main/java/com/nubo/operations/fractionation/api/models/dto/request/BatchAssignmentInDto.java`
68. `src/main/java/com/nubo/operations/fractionation/api/models/dto/request/BatchAssignmentItemInDto.java`
69. `src/main/java/com/nubo/operations/fractionation/api/models/dto/request/CorrectionInDto.java`
70. `src/main/java/com/nubo/operations/fractionation/api/models/dto/request/FractionCustodianAdmitInDto.java`
71. `src/main/java/com/nubo/operations/fractionation/api/models/dto/request/FractionInDto.java`
72. `src/main/java/com/nubo/operations/fractionation/api/models/dto/response/BatchAssignmentItemOutDto.java`
73. `src/main/java/com/nubo/operations/fractionation/api/models/dto/response/BatchAssignmentOutDto.java`
74. `src/main/java/com/nubo/operations/fractionation/api/models/dto/response/CityOutDto.java`
75. `src/main/java/com/nubo/operations/fractionation/api/models/dto/response/CountryOutDto.java`
76. `src/main/java/com/nubo/operations/fractionation/api/models/dto/response/CurrencyOutDto.java`
77. `src/main/java/com/nubo/operations/fractionation/api/models/dto/response/DepartmentOutDto.java`
78. `src/main/java/com/nubo/operations/fractionation/api/models/dto/response/DepositoryOutDto.java`
79. `src/main/java/com/nubo/operations/fractionation/api/models/dto/response/DirectDepositoryOutDto.java`
80. `src/main/java/com/nubo/operations/fractionation/api/models/dto/response/FractionAccountOutDto.java`
81. `src/main/java/com/nubo/operations/fractionation/api/models/dto/response/GicsOutDto.java`
82. `src/main/java/com/nubo/operations/fractionation/api/models/dto/response/IdentificationTypeOutDto.java`
83. `src/main/java/com/nubo/operations/fractionation/api/models/dto/response/InvestorAccountOutDto.java`
84. `src/main/java/com/nubo/operations/fractionation/api/models/dto/response/InvestorOutDto.java`
85. `src/main/java/com/nubo/operations/fractionation/api/models/dto/response/ParticipantAccountOutDto.java`
86. `src/main/java/com/nubo/operations/fractionation/api/models/dto/response/ParticipantOutDto.java`
87. `src/main/java/com/nubo/operations/fractionation/api/models/dto/response/ParticipantShortOutDto.java`
88. `src/main/java/com/nubo/operations/fractionation/api/models/dto/response/SettlementCustodyAdmitOutDto.java`
89. `src/main/java/com/nubo/operations/fractionation/api/models/dto/response/SettlementOutDto.java`
90. `src/main/java/com/nubo/operations/fractionation/api/models/dto/response/SideOutDto.java`
91. `src/main/java/com/nubo/operations/fractionation/api/models/dto/response/StatusOutDto.java`
92. `src/main/java/com/nubo/operations/fractionation/api/models/dto/response/TaxStatusOutDto.java`
93. `src/main/java/com/nubo/operations/fractionation/api/models/dto/response/TradingSystemOutDto.java`
94. `src/main/java/com/nubo/operations/fractionation/api/models/dto/response/TypeOutDto.java`
95. `src/main/java/com/nubo/operations/fractionation/api/models/entity/CountryEntity.java`
96. `src/main/java/com/nubo/operations/fractionation/api/models/entity/DepositoryEntity.java`
97. `src/main/java/com/nubo/operations/fractionation/api/models/entity/DirectDepositoryEntity.java`
98. `src/main/java/com/nubo/operations/fractionation/api/models/entity/InvestorAccountEntity.java`
99. `src/main/java/com/nubo/operations/fractionation/api/models/entity/InvestorEntity.java`
100. `src/main/java/com/nubo/operations/fractionation/api/models/entity/MarketEntity.java`
101. `src/main/java/com/nubo/operations/fractionation/api/models/entity/MilaDepositoryEntity.java`
102. `src/main/java/com/nubo/operations/fractionation/api/models/entity/PackageCustodianEntity.java`
103. `src/main/java/com/nubo/operations/fractionation/api/models/entity/PackageCustodianHistoryEntity.java`
104. `src/main/java/com/nubo/operations/fractionation/api/models/entity/PackageCustodianHistoryKey.java`
105. `src/main/java/com/nubo/operations/fractionation/api/models/entity/PackageCustodianKey.java`
106. `src/main/java/com/nubo/operations/fractionation/api/models/entity/PackageDetailEntity.java`
107. `src/main/java/com/nubo/operations/fractionation/api/models/entity/PackageDetailKey.java`
108. `src/main/java/com/nubo/operations/fractionation/api/models/entity/ParticipantAccountEntity.java`
109. `src/main/java/com/nubo/operations/fractionation/api/models/entity/ParticipantEntity.java`
110. `src/main/java/com/nubo/operations/fractionation/api/models/entity/SecurityTitleEntity.java`
111. `src/main/java/com/nubo/operations/fractionation/api/models/entity/SettlementCorrectionEntity.java`
112. `src/main/java/com/nubo/operations/fractionation/api/models/entity/SettlementEntity.java`
113. `src/main/java/com/nubo/operations/fractionation/api/models/entity/SettlementKey.java`
114. `src/main/java/com/nubo/operations/fractionation/api/models/entity/SideEntity.java`
115. `src/main/java/com/nubo/operations/fractionation/api/models/entity/StatusEntity.java`
116. `src/main/java/com/nubo/operations/fractionation/api/models/entity/TaxesEntity.java`
117. `src/main/java/com/nubo/operations/fractionation/api/models/entity/TradeEntity.java`
118. `src/main/java/com/nubo/operations/fractionation/api/models/entity/TradeStatusHistoryEntity.java`
119. `src/main/java/com/nubo/operations/fractionation/api/models/entity/TradeStatusHistoryKey.java`
120. `src/main/java/com/nubo/operations/fractionation/api/models/entity/TradingSessionEntity.java`
121. `src/main/java/com/nubo/operations/fractionation/api/models/entity/TradingSystemEntity.java`
122. `src/main/java/com/nubo/operations/fractionation/api/models/entity/TypeEntity.java`
123. `src/main/java/com/nubo/operations/fractionation/api/models/entity/UserNuboEntity.java`
124. `src/main/java/com/nubo/operations/fractionation/api/models/enums/BusinessRuleEnum.java`
125. `src/main/java/com/nubo/operations/fractionation/api/models/enums/PropertiesEnum.java`
126. `src/main/java/com/nubo/operations/fractionation/api/models/enums/ReassignmentTypeEnum.java`
127. `src/main/java/com/nubo/operations/fractionation/api/models/enums/SideEnum.java`
128. `src/main/java/com/nubo/operations/fractionation/api/models/enums/StatusEnum.java`
129. `src/main/java/com/nubo/operations/fractionation/api/models/enums/TaxesEnum.java`
130. `src/main/java/com/nubo/operations/fractionation/api/models/enums/TypeEnum.java`
131. `src/main/java/com/nubo/operations/fractionation/api/models/enums/VersionApiEnum.java`
132. `src/main/java/com/nubo/operations/fractionation/api/repository/DirectDepositoryRepository.java`
133. `src/main/java/com/nubo/operations/fractionation/api/repository/InvestorAccountRepository.java`
134. `src/main/java/com/nubo/operations/fractionation/api/repository/MilaDepositoryRepository.java`
135. `src/main/java/com/nubo/operations/fractionation/api/repository/PackageCustodianHistoryRepository.java`
136. `src/main/java/com/nubo/operations/fractionation/api/repository/PackageCustodianRepository.java`
137. `src/main/java/com/nubo/operations/fractionation/api/repository/PackageDetailRepository.java`
138. `src/main/java/com/nubo/operations/fractionation/api/repository/ParticipantAccountRepository.java`
139. `src/main/java/com/nubo/operations/fractionation/api/repository/ParticipantRepository.java`
140. `src/main/java/com/nubo/operations/fractionation/api/repository/SettlementCorrectionRepository.java`
141. `src/main/java/com/nubo/operations/fractionation/api/repository/SettlementRepository.java`
142. `src/main/java/com/nubo/operations/fractionation/api/repository/SideRepository.java`
143. `src/main/java/com/nubo/operations/fractionation/api/repository/StatusRepository.java`
144. `src/main/java/com/nubo/operations/fractionation/api/repository/TaxesRepository.java`
145. `src/main/java/com/nubo/operations/fractionation/api/repository/TradeRepository.java`
146. `src/main/java/com/nubo/operations/fractionation/api/repository/TradeStatusHistoryRepository.java`
147. `src/main/java/com/nubo/operations/fractionation/api/repository/TypeRepository.java`
148. `src/main/java/com/nubo/operations/fractionation/api/repository/UserNuboRepository.java`
149. `src/main/java/com/nubo/operations/fractionation/api/repository/projection/TradeParticipantProjection.java`
150. `src/main/java/com/nubo/operations/fractionation/api/service/BatchAssignmentService.java`
151. `src/main/java/com/nubo/operations/fractionation/api/service/BatchCacheService.java`
152. `src/main/java/com/nubo/operations/fractionation/api/service/BatchFractionationService.java`
153. `src/main/java/com/nubo/operations/fractionation/api/service/CustodianService.java`
154. `src/main/java/com/nubo/operations/fractionation/api/service/FractionationService.java`
155. `src/main/java/com/nubo/operations/fractionation/api/service/impl/BatchAssignmentHibernateStatisticsDiagnostics.java`
156. `src/main/java/com/nubo/operations/fractionation/api/service/impl/BatchAssignmentItemProcessor.java`
157. `src/main/java/com/nubo/operations/fractionation/api/service/impl/BatchAssignmentPerformanceContext.java`
158. `src/main/java/com/nubo/operations/fractionation/api/service/impl/BatchAssignmentPersistenceDiagnosticsContext.java`
159. `src/main/java/com/nubo/operations/fractionation/api/service/impl/BatchAssignmentPrefetchMetrics.java`
160. `src/main/java/com/nubo/operations/fractionation/api/service/impl/BatchAssignmentPreparationService.java`
161. `src/main/java/com/nubo/operations/fractionation/api/service/impl/BatchAssignmentPreparedContext.java`
162. `src/main/java/com/nubo/operations/fractionation/api/service/impl/BatchAssignmentServiceImpl.java`
163. `src/main/java/com/nubo/operations/fractionation/api/service/impl/BatchAssignmentTransactionExecutionListener.java`
164. `src/main/java/com/nubo/operations/fractionation/api/service/impl/BatchAssignmentTransactionMetricsContext.java`
165. `src/main/java/com/nubo/operations/fractionation/api/service/impl/BatchCacheServiceImpl.java`
166. `src/main/java/com/nubo/operations/fractionation/api/service/impl/BatchFractionationServiceImpl.java`
167. `src/main/java/com/nubo/operations/fractionation/api/service/impl/BatchRulesValidationContext.java`
168. `src/main/java/com/nubo/operations/fractionation/api/service/impl/CustodianServiceImpl.java`
169. `src/main/java/com/nubo/operations/fractionation/api/service/impl/FractionationServiceImpl.java`
170. `src/main/java/com/nubo/operations/fractionation/api/web/controller/FractionationRestController.java`

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
	<groupId>com.nubo.operations.fractionation.api</groupId>
	<artifactId>operations-fractionation-api</artifactId>
	<version>0.68.4-alpha.30</version>
	<name>${project.artifactId}</name>
	<description>Operations Fractionation Api</description>

	<properties>
		<java.version>21</java.version>
		<spring.port>8080</spring.port>
		<test.skip>false</test.skip>
		<datasource.url.application.name>ApplicationName=${project.artifactId}</datasource.url.application.name>
		<hikari.pool.name>${project.artifactId}-pool</hikari.pool.name>
		<tomcat.version>11.0.25</tomcat.version>
	</properties>

	<dependencies>
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
			<version>3.1.0</version>
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
				<exclusion>
					<groupId>org.apache.commons</groupId>
					<artifactId>commons-io</artifactId>
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
								<exclude>**/OperationsFractionationApiApplication.class</exclude>
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
    open-in-view: false
    hibernate:
      ddl-auto: none
      default_schema: NUANBODB
    show-sql: 'false'
    database-platform: org.hibernate.dialect.PostgreSQLDialect
    properties:
      hibernate:
        jdbc:
          batch_size: 99
          fetch_size: 200
          batch_versioned_data: true
        default_batch_fetch_size: 50
        order_inserts: true
        order_updates: true
        generate_statistics: ${assignment.persistence.hibernate-statistics.enabled}
logging:
  config: classpath:log/log4j2.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR
    org.hibernate.SQL: ${LOGGING_LEVEL_HIBERNATE_SQL:ERROR}
    org.hibernate.orm.jdbc.bind: ${LOGGING_LEVEL_HIBERNATE_BIND:ERROR}
    org.hibernate.orm.jdbc.batch: ${LOGGING_LEVEL_HIBERNATE_JDBC_BATCH:ERROR}
    # generate_statistics must not create one INFO Session Metrics block per item.
    org.hibernate.engine.internal.StatisticalLoggingSessionEventListener: ${LOGGING_LEVEL_HIBERNATE_STATISTICAL_SESSION:WARN}
client:
  nubo:
    url-operation-calculation: ${NUBO_URL_OPERATION_CALCULATION}
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
    producer:
      topic-name-notification-request: ${KAFKA_NUBO_NOTIFICATION_REQUEST_TOPIC}
      acks: ${KAFKA_NUBO_PRODUCER_ACKS:all}
      compression-type: ${KAFKA_NUBO_PRODUCER_COMPRESSION:lz4}
      linger-ms: ${KAFKA_NUBO_PRODUCER_LINGER_MS:5}
      batch-size: ${KAFKA_NUBO_PRODUCER_BATCH_SIZE:32768}
      delivery-timeout-ms: ${KAFKA_NUBO_PRODUCER_DELIVERY_TIMEOUT_MS:120000}
      request-timeout-ms: ${KAFKA_NUBO_PRODUCER_REQUEST_TIMEOUT_MS:30000}
      enable-idempotence: ${KAFKA_NUBO_PRODUCER_ENABLE_IDEMPOTENCE:true}
      max-in-flight-requests: ${KAFKA_NUBO_PRODUCER_MAX_IN_FLIGHT:5}

```

## src/main/resources/application-local.yml

```yaml
server:
  port: 8084
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
    open-in-view: false
    hibernate:
      ddl-auto: none
      default_schema: NUANBODB
    show-sql: 'false'
    database-platform: org.hibernate.dialect.PostgreSQLDialect
    properties:
      hibernate:
        jdbc:
          batch_size: 99
          fetch_size: 200
          batch_versioned_data: true
        default_batch_fetch_size: 50
        order_inserts: true
        order_updates: true
logging:
  config: classpath:log/log4j2.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR
client:
  nubo:
    url-operation-calculation: ${NUBO_URL_OPERATION_CALCULATION}
    url-operation-rules: ${NUBO_URL_OPERATION_RULES:localhost}
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
    producer:
      topic-name-notification-request: ${KAFKA_NUBO_NOTIFICATION_REQUEST_TOPIC}
      acks: ${KAFKA_NUBO_PRODUCER_ACKS:all}
      compression-type: ${KAFKA_NUBO_PRODUCER_COMPRESSION:lz4}
      linger-ms: ${KAFKA_NUBO_PRODUCER_LINGER_MS:5}
      batch-size: ${KAFKA_NUBO_PRODUCER_BATCH_SIZE:32768}
      delivery-timeout-ms: ${KAFKA_NUBO_PRODUCER_DELIVERY_TIMEOUT_MS:120000}
      request-timeout-ms: ${KAFKA_NUBO_PRODUCER_REQUEST_TIMEOUT_MS:30000}
      enable-idempotence: ${KAFKA_NUBO_PRODUCER_ENABLE_IDEMPOTENCE:true}
      max-in-flight-requests: ${KAFKA_NUBO_PRODUCER_MAX_IN_FLIGHT:5}

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
    open-in-view: false
    hibernate:
      ddl-auto: none
      default_schema: NUANBODB
    show-sql: 'false'
    database-platform: org.hibernate.dialect.PostgreSQLDialect
    properties:
      hibernate:
        jdbc:
          batch_size: 99
          fetch_size: 200
          batch_versioned_data: true
        default_batch_fetch_size: 50
        order_inserts: true
        order_updates: true
logging:
  config: classpath:log/log4j2-prod.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR
client:
  nubo:
    url-operation-calculation: ${NUBO_URL_OPERATION_CALCULATION}
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
    producer:
      topic-name-notification-request: ${KAFKA_NUBO_NOTIFICATION_REQUEST_TOPIC}
      acks: ${KAFKA_NUBO_PRODUCER_ACKS:all}
      compression-type: ${KAFKA_NUBO_PRODUCER_COMPRESSION:lz4}
      linger-ms: ${KAFKA_NUBO_PRODUCER_LINGER_MS:5}
      batch-size: ${KAFKA_NUBO_PRODUCER_BATCH_SIZE:32768}
      delivery-timeout-ms: ${KAFKA_NUBO_PRODUCER_DELIVERY_TIMEOUT_MS:120000}
      request-timeout-ms: ${KAFKA_NUBO_PRODUCER_REQUEST_TIMEOUT_MS:30000}
      enable-idempotence: ${KAFKA_NUBO_PRODUCER_ENABLE_IDEMPOTENCE:true}
      max-in-flight-requests: ${KAFKA_NUBO_PRODUCER_MAX_IN_FLIGHT:5}

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
    open-in-view: false
    hibernate:
      ddl-auto: none
      default_schema: NUANBODB
    show-sql: 'false'
    database-platform: org.hibernate.dialect.PostgreSQLDialect
    properties:
      hibernate:
        jdbc:
          batch_size: 99
          fetch_size: 200
          batch_versioned_data: true
        default_batch_fetch_size: 50
        order_inserts: true
        order_updates: true
logging:
  config: classpath:log/log4j2.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR
client:
  nubo:
    url-operation-calculation: ${NUBO_URL_OPERATION_CALCULATION}
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
    producer:
      topic-name-notification-request: ${KAFKA_NUBO_NOTIFICATION_REQUEST_TOPIC}
      acks: ${KAFKA_NUBO_PRODUCER_ACKS:all}
      compression-type: ${KAFKA_NUBO_PRODUCER_COMPRESSION:lz4}
      linger-ms: ${KAFKA_NUBO_PRODUCER_LINGER_MS:5}
      batch-size: ${KAFKA_NUBO_PRODUCER_BATCH_SIZE:32768}
      delivery-timeout-ms: ${KAFKA_NUBO_PRODUCER_DELIVERY_TIMEOUT_MS:120000}
      request-timeout-ms: ${KAFKA_NUBO_PRODUCER_REQUEST_TIMEOUT_MS:30000}
      enable-idempotence: ${KAFKA_NUBO_PRODUCER_ENABLE_IDEMPOTENCE:true}
      max-in-flight-requests: ${KAFKA_NUBO_PRODUCER_MAX_IN_FLIGHT:5}

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
    open-in-view: false
    hibernate:
      ddl-auto: none
      default_schema: NUANBODB
    show-sql: 'false'
    database-platform: org.hibernate.dialect.PostgreSQLDialect
    properties:
      hibernate:
        jdbc:
          batch_size: 99
          fetch_size: 200
          batch_versioned_data: true
        default_batch_fetch_size: 50
        order_inserts: true
        order_updates: true
logging:
  config: classpath:log/log4j2.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR
client:
  nubo:
    url-operation-calculation: ${NUBO_URL_OPERATION_CALCULATION}
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
    producer:
      topic-name-notification-request: ${KAFKA_NUBO_NOTIFICATION_REQUEST_TOPIC}
      acks: ${KAFKA_NUBO_PRODUCER_ACKS:all}
      compression-type: ${KAFKA_NUBO_PRODUCER_COMPRESSION:lz4}
      linger-ms: ${KAFKA_NUBO_PRODUCER_LINGER_MS:5}
      batch-size: ${KAFKA_NUBO_PRODUCER_BATCH_SIZE:32768}
      delivery-timeout-ms: ${KAFKA_NUBO_PRODUCER_DELIVERY_TIMEOUT_MS:120000}
      request-timeout-ms: ${KAFKA_NUBO_PRODUCER_REQUEST_TIMEOUT_MS:30000}
      enable-idempotence: ${KAFKA_NUBO_PRODUCER_ENABLE_IDEMPOTENCE:true}
      max-in-flight-requests: ${KAFKA_NUBO_PRODUCER_MAX_IN_FLIGHT:5}

```

## src/main/resources/application.yml

```yaml
spring:
  profiles:
    active: ${SPRING_PROFILES_ACTIVE}
  jpa:
    properties:
      hibernate:
        # Disabled by default; enable only for a controlled persistence benchmark.
        generate_statistics: ${assignment.persistence.hibernate-statistics.enabled}
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
assignment:
  rules:
    batch:
      enabled: ${ASSIGNMENT_RULES_BATCH_ENABLED:true}
  persistence:
    diagnostics:
      enabled: ${ASSIGNMENT_PERSISTENCE_DIAGNOSTICS_ENABLED:true}
    hibernate-statistics:
      enabled: ${ASSIGNMENT_PERSISTENCE_HIBERNATE_STATISTICS_ENABLED:false}
    preserve-context-after-settlement-delete:
      enabled: ${ASSIGNMENT_PRESERVE_CONTEXT_AFTER_SETTLEMENT_DELETE_ENABLED:true}
nubo:
  assignment:
    batch:
      processing-size: ${NUBO_ASSIGNMENT_BATCH_PROCESSING_SIZE:80}
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
 ,-----. ,------. ,------.,------.   ,---. ,--------.,--. ,-----. ,--.  ,--. ,---. ,------.,------.   ,---.   ,-----.,--------.,--. ,-----. ,--.  ,--.  ,---. ,--------.,--. ,-----. ,--.  ,--.  ,---.  ,------. ,--.
'  .-.  '|  .--. '|  .---'|  .--. ' /  O  \'--.  .--'|  |'  .-.  '|  ,'.|  |'   .-'|  .---'|  .--. ' /  O  \ '  .--./'--.  .--'|  |'  .-.  '|  ,'.|  | /  O  \'--.  .--'|  |'  .-.  '|  ,'.|  | /  O  \ |  .--. '|  |
|  | |  ||  '--' ||  `--, |  '--'.'|  .-.  |  |  |   |  ||  | |  ||  |' '  |`.  `-.|  `--, |  '--'.'|  .-.  ||  |       |  |   |  ||  | |  ||  |' '  ||  .-.  |  |  |   |  ||  | |  ||  |' '  ||  .-.  ||  '--' ||  |
'  '-'  '|  | --' |  `---.|  |\  \ |  | |  |  |  |   |  |'  '-'  '|  | `   |.-'    |  |`   |  |\  \ |  | |  |'  '--'\   |  |   |  |'  '-'  '|  | `   ||  | |  |  |  |   |  |'  '-'  '|  | `   ||  | |  ||  | --' |  |
 `-----' `--'     `------'`--' '--'`--' `--'  `--'   `--' `-----' `--'  `--'`-----'`--'    `--' '--'`--' `--' `-----'   `--'   `--' `-----' `--'  `--'`--' `--'  `--'   `--' `-----' `--'  `--'`--' `--'`--'     `--'

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

## src/main/java/com/nubo/operations/fractionation/api/OperationsFractionationApiApplication.java

```java
package com.nubo.operations.fractionation.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class OperationsFractionationApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(OperationsFractionationApiApplication.class, args);
	}

}

```

## src/main/java/com/nubo/operations/fractionation/api/application/annotations/DecimalScale.java

```java
package com.nubo.operations.fractionation.api.application.annotations;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import java.math.RoundingMode;

@Target({ ElementType.FIELD })
@Retention(RetentionPolicy.RUNTIME)
public @interface DecimalScale {
    int value() default 2;

    RoundingMode roundingMode() default RoundingMode.HALF_UP;
}

```

## src/main/java/com/nubo/operations/fractionation/api/application/annotations/ValidBigDecimal.java

```java
package com.nubo.operations.fractionation.api.application.annotations;

import com.nubo.operations.fractionation.api.application.config.ValidBigDecimalConfig;
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

## src/main/java/com/nubo/operations/fractionation/api/application/config/BatchAssignmentTransactionMetricsConfig.java

```java
package com.nubo.operations.fractionation.api.application.config;

import java.util.ArrayList;
import java.util.List;

import jakarta.annotation.PostConstruct;
import org.springframework.context.annotation.Configuration;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.TransactionExecutionListener;
import org.springframework.transaction.support.AbstractPlatformTransactionManager;

import com.nubo.operations.fractionation.api.service.impl.BatchAssignmentTransactionExecutionListener;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Configuration
@RequiredArgsConstructor
@Slf4j
public class BatchAssignmentTransactionMetricsConfig {

    private final PlatformTransactionManager transactionManager;
    private final BatchAssignmentTransactionExecutionListener transactionExecutionListener;

    @PostConstruct
    void registerTransactionExecutionListener() {
        if (!(transactionManager instanceof AbstractPlatformTransactionManager platformTransactionManager)) {
            log.warn("PERF_ASSIGNMENT_TX_CONFIG service=fracciones transactionManager={} listenerRegistered=false reason=UNSUPPORTED_TRANSACTION_MANAGER",
                    transactionManager.getClass().getName());
            return;
        }

        List<TransactionExecutionListener> listeners = new ArrayList<>(
                platformTransactionManager.getTransactionExecutionListeners());
        if (!listeners.contains(transactionExecutionListener)) {
            listeners.add(transactionExecutionListener);
            platformTransactionManager.setTransactionExecutionListeners(listeners);
        }
        log.info("PERF_ASSIGNMENT_TX_CONFIG service=fracciones transactionManager={} listenerRegistered=true listenerCount={}",
                transactionManager.getClass().getName(), listeners.size());
    }
}

```

## src/main/java/com/nubo/operations/fractionation/api/application/config/CacheConfig.java

```java
package com.nubo.operations.fractionation.api.application.config;

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
                buildCache("sides", 1, TimeUnit.HOURS),
                buildCache("status", 1, TimeUnit.HOURS),
                buildCache("investorAccounts", 1, TimeUnit.HOURS),
                buildCache("participantAccounts", 1, TimeUnit.HOURS),
                buildCache("milaDepositories", 1, TimeUnit.HOURS),
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

## src/main/java/com/nubo/operations/fractionation/api/application/config/KafkaProducerConfig.java

```java
package com.nubo.operations.fractionation.api.application.config;

import com.nubo.operations.fractionation.api.application.properties.PropertiesConfig;
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
        configProps.put(ProducerConfig.ACKS_CONFIG,
            environment.getProperty("kafka.nubo.producer.acks", "all"));
        configProps.put(ProducerConfig.COMPRESSION_TYPE_CONFIG,
            environment.getProperty("kafka.nubo.producer.compression-type", "lz4"));
        configProps.put(ProducerConfig.LINGER_MS_CONFIG,
            environment.getProperty("kafka.nubo.producer.linger-ms", Integer.class, 5));
        configProps.put(ProducerConfig.BATCH_SIZE_CONFIG,
            environment.getProperty("kafka.nubo.producer.batch-size", Integer.class, 32768));
        configProps.put(ProducerConfig.DELIVERY_TIMEOUT_MS_CONFIG,
            environment.getProperty("kafka.nubo.producer.delivery-timeout-ms", Integer.class, 120000));
        configProps.put(ProducerConfig.REQUEST_TIMEOUT_MS_CONFIG,
            environment.getProperty("kafka.nubo.producer.request-timeout-ms", Integer.class, 30000));
        configProps.put(ProducerConfig.ENABLE_IDEMPOTENCE_CONFIG,
            environment.getProperty("kafka.nubo.producer.enable-idempotence", Boolean.class, true));
        configProps.put(ProducerConfig.MAX_IN_FLIGHT_REQUESTS_PER_CONNECTION,
            environment.getProperty("kafka.nubo.producer.max-in-flight-requests", Integer.class, 5));
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

## src/main/java/com/nubo/operations/fractionation/api/application/config/SwaggerConfig.java

```java
package com.nubo.operations.fractionation.api.application.config;

import com.nubo.operations.fractionation.api.exception.error.ErrorResponse;
import com.nubo.operations.fractionation.api.exception.error.ErrorValidation;
import com.nubo.operations.fractionation.api.models.enums.PropertiesEnum;
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

## src/main/java/com/nubo/operations/fractionation/api/application/config/ValidBigDecimalConfig.java

```java
package com.nubo.operations.fractionation.api.application.config;

import com.nubo.operations.fractionation.api.application.annotations.ValidBigDecimal;
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

## src/main/java/com/nubo/operations/fractionation/api/application/config/WebConfig.java

```java
package com.nubo.operations.fractionation.api.application.config;

import com.nubo.operations.fractionation.api.application.interceptors.GlobalInterceptor;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.http.HttpMethod;
import org.springframework.web.client.RestClient;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
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

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(globalInterceptor)
                .addPathPatterns("/**");
    }

    @Bean
    public RestClient restClient() {
        return RestClient.create();
    }

}

```

## src/main/java/com/nubo/operations/fractionation/api/application/context/GlobalContext.java

```java
package com.nubo.operations.fractionation.api.application.context;

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

## src/main/java/com/nubo/operations/fractionation/api/application/database/NamingStrategyConfig.java

```java
package com.nubo.operations.fractionation.api.application.database;

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

## src/main/java/com/nubo/operations/fractionation/api/application/database/UpperNamingConfig.java

```java
package com.nubo.operations.fractionation.api.application.database;

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

## src/main/java/com/nubo/operations/fractionation/api/application/filters/GlobalFilter.java

```java
package com.nubo.operations.fractionation.api.application.filters;

import com.nubo.operations.fractionation.api.application.context.GlobalContext;
import com.nubo.operations.fractionation.api.application.util.ApplicationUtils;
import com.nubo.operations.fractionation.api.exception.ServiceException;
import com.nubo.operations.fractionation.api.exception.error.ErrorCode;
import com.nubo.operations.fractionation.api.exception.error.ErrorResponse;
import com.nubo.operations.fractionation.api.models.entity.UserNuboEntity;
import com.nubo.operations.fractionation.api.models.enums.PropertiesEnum;
import com.nubo.operations.fractionation.api.models.enums.VersionApiEnum;
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
            String clientUserHeader = this.validateClientUserHeader(request);
            String clientDatetime = this.validateClientDatetimeHeader(request);

            String clientIpHeader;
            UserNuboEntity userNuboEntity;
            if (Boolean.TRUE.equals(validateClientBackend(request))) {
                clientIpHeader = "127.0.0.1";
            } else {
                clientIpHeader = this.validateClientIpHeader(request);
            }

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

    private Boolean validateClientBackend(HttpServletRequest request) {
        String headerClientBackend = request.getHeader(PropertiesEnum.CLIENT_BACKEND.getValue());
        if (headerClientBackend == null || headerClientBackend.isEmpty()) {
            return false;
        }
        try {
            return Boolean.parseBoolean(headerClientBackend);
        } catch (Exception e) {
            return false;
        }
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

## src/main/java/com/nubo/operations/fractionation/api/application/interceptors/GlobalInterceptor.java

```java
package com.nubo.operations.fractionation.api.application.interceptors;

import com.nubo.operations.fractionation.api.application.context.GlobalContext;
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
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler,
            Exception ex) {
        GlobalContext.remove();
    }

}

```

## src/main/java/com/nubo/operations/fractionation/api/application/properties/AssignmentPersistenceProperties.java

```java
package com.nubo.operations.fractionation.api.application.properties;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import lombok.Getter;

/**
 * Resolved, non-sensitive persistence experiment flags for assignment batches.
 */
@Component
@Getter
public class AssignmentPersistenceProperties {

    @Value("${assignment.persistence.diagnostics.enabled:false}")
    private boolean diagnosticsEnabled;

    @Value("${assignment.persistence.hibernate-statistics.enabled:false}")
    private boolean hibernateStatisticsEnabled;

    @Value("${assignment.persistence.preserve-context-after-settlement-delete.enabled:true}")
    private boolean preserveContextAfterSettlementDelete;
}

```

## src/main/java/com/nubo/operations/fractionation/api/application/properties/PropertiesConfig.java

```java
package com.nubo.operations.fractionation.api.application.properties;

import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
@Getter
public class PropertiesConfig {

    @Value("${spring.application.name}")
    private String apiName;

    @Value("${client.nubo.url-operation-calculation}")
    private String urlNuboOperationCalculation;

    @Value("${client.nubo.url-operation-rules}")
    private String urlNuboOperationRules;

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

    @Value("${kafka.nubo.producer.topic-name-notification-request}")
    private String kafkaNuboProducerTopicNameNotifications;

}

```

## src/main/java/com/nubo/operations/fractionation/api/application/properties/PropertiesContext.java

```java
package com.nubo.operations.fractionation.api.application.properties;

import com.nubo.operations.fractionation.api.application.context.GlobalContext;
import com.nubo.operations.fractionation.api.application.util.ApplicationUtils;
import com.nubo.operations.fractionation.api.models.enums.PropertiesEnum;
import org.springframework.util.ObjectUtils;

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

    public static String getVersion() {
        return GlobalContext.getProperty(PropertiesEnum.VERSION_API.getValue());
    }

    public static String getAuthToken() {
        return GlobalContext.getProperty(PropertiesEnum.AUTH_TOKEN.getValue());
    }

}


```

## src/main/java/com/nubo/operations/fractionation/api/application/serializers/BigDecimalSerializer.java

```java
package com.nubo.operations.fractionation.api.application.serializers;

import java.io.IOException;
import java.math.BigDecimal;
import java.math.RoundingMode;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.BeanProperty;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.ContextualSerializer;
import com.nubo.operations.fractionation.api.application.annotations.DecimalScale;

public class BigDecimalSerializer extends JsonSerializer<BigDecimal> implements ContextualSerializer {

    private final Integer exactScale;
    private final RoundingMode roundingMode;

    public BigDecimalSerializer() {
        this.exactScale = null;
        this.roundingMode = RoundingMode.HALF_UP;
    }

    public BigDecimalSerializer(int exactScale) {
        this.exactScale = exactScale;
        this.roundingMode = RoundingMode.HALF_UP;
    }

    public BigDecimalSerializer(int exactScale, RoundingMode roundingMode) {
        this.exactScale = exactScale;
        this.roundingMode = roundingMode;
    }

    @Override
    public void serialize(BigDecimal value, JsonGenerator gen, SerializerProvider serializers) throws IOException {
        if (value != null) {
            BigDecimal result;

            if (exactScale != null) {
                result = value.setScale(exactScale, roundingMode);
            } else {
                result = value.stripTrailingZeros();
            }

            gen.writeNumber(result.toPlainString());
        } else {
            gen.writeNull();
        }
    }

    @Override
    public JsonSerializer<?> createContextual(SerializerProvider prov, BeanProperty property)
            throws JsonMappingException {
        if (property != null) {
            DecimalScale annotation = property.getAnnotation(DecimalScale.class);
            if (annotation != null) {
                return new BigDecimalSerializer(annotation.value(), annotation.roundingMode());
            }
        }
        return this;
    }
}

```

## src/main/java/com/nubo/operations/fractionation/api/application/util/ApplicationUtils.java

```java
package com.nubo.operations.fractionation.api.application.util;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.nubo.operations.fractionation.api.exception.ServiceException;
import com.nubo.operations.fractionation.api.exception.error.ErrorCode;

import java.time.LocalDate;
import java.time.LocalDateTime;
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

## src/main/java/com/nubo/operations/fractionation/api/application/util/RestClientUtils.java

```java
package com.nubo.operations.fractionation.api.application.util;

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

    public void requestWithoutBodyWithoutResponse(URI url, HttpMethod method, HttpHeaders headers) {
        restClient.method(method)
                .uri(url)
                .headers(h -> h.addAll(headers))
                .retrieve()
                .toBodilessEntity();
    }

}

```

## src/main/java/com/nubo/operations/fractionation/api/client/kafka/producer/dto/request/NotificationInDto.java

```java
package com.nubo.operations.fractionation.api.client.kafka.producer.dto.request;

import java.time.LocalDateTime;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.JsonNode;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.ALWAYS)
public class NotificationInDto {

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

## src/main/java/com/nubo/operations/fractionation/api/client/kafka/producer/dto/request/PackageCustodianInDto.java

```java
package com.nubo.operations.fractionation.api.client.kafka.producer.dto.request;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PackageCustodianInDto {

    private String clientUser;

    @NotNull
    private String marketId;

    @NotNull
    private Long uniqueFractionId;

    @NotNull
    private Long participantId;

    private String codeSCB;

}

```

## src/main/java/com/nubo/operations/fractionation/api/client/kafka/producer/service/KafkaNuboProducer.java

```java
package com.nubo.operations.fractionation.api.client.kafka.producer.service;

import com.nubo.operations.fractionation.api.client.kafka.producer.dto.request.NotificationInDto;

public interface KafkaNuboProducer {

    void sendNotificationsAsync(NotificationInDto notificationInDto);

}

```

## src/main/java/com/nubo/operations/fractionation/api/client/kafka/producer/service/impl/KafkaNuboProducerImpl.java

```java
package com.nubo.operations.fractionation.api.client.kafka.producer.service.impl;

import java.util.concurrent.CompletableFuture;
import java.util.concurrent.TimeUnit;

import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.SendResult;
import org.springframework.stereotype.Service;

import com.nubo.operations.fractionation.api.application.properties.PropertiesConfig;
import com.nubo.operations.fractionation.api.application.util.ApplicationUtils;
import com.nubo.operations.fractionation.api.client.kafka.producer.dto.request.NotificationInDto;
import com.nubo.operations.fractionation.api.client.kafka.producer.dto.request.PackageCustodianInDto;
import com.nubo.operations.fractionation.api.client.kafka.producer.service.KafkaNuboProducer;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class KafkaNuboProducerImpl implements KafkaNuboProducer {

    private final PropertiesConfig propertiesConfig;
    private final KafkaTemplate<String, String> kafkaNuboTemplate;

    @Override
    public void sendNotificationsAsync(NotificationInDto notificationInDto) {
        String topic = propertiesConfig.getKafkaNuboProducerTopicNameNotifications();
        String jsonString = ApplicationUtils.convertObjectToJson(notificationInDto);
        CompletableFuture<SendResult<String, String>> future = kafkaNuboTemplate.send(topic, jsonString)
                .toCompletableFuture();

        future.thenAccept(result -> log.debug("Send message -- Topic: {} -- partition: {} -- offset: {} -- json: {} ",
                topic, result.getRecordMetadata().partition(), result.getRecordMetadata().offset(), jsonString))
                .exceptionally(ex -> {
                    log.error("Error sending message to topic: {} -- json: {}, Exception: {}", topic, jsonString, ex);
                    return null;
                });
    }

}

```

## src/main/java/com/nubo/operations/fractionation/api/client/operation/calculation/models/dto/request/SettleAccountsInDto.java

```java
package com.nubo.operations.fractionation.api.client.operation.calculation.models.dto.request;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.nubo.operations.fractionation.api.application.annotations.DecimalScale;
import com.nubo.operations.fractionation.api.application.serializers.BigDecimalSerializer;

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
public class SettleAccountsInDto {

    @NotNull
    @DecimalScale(4)
    @JsonSerialize(using = BigDecimalSerializer.class)
    private BigDecimal quantity;

    @NotNull
    @DecimalScale(6)
    @JsonSerialize(using = BigDecimalSerializer.class)
    private BigDecimal price;

    @NotNull
    @DecimalScale(4)
    @JsonSerialize(using = BigDecimalSerializer.class)
    private BigDecimal commission;

    @NotNull
    @DecimalScale(4)
    @JsonSerialize(using = BigDecimalSerializer.class)
    private BigDecimal valTax;

    @NotNull
    private String sideId;

    @NotNull
    private Long typeId;

    @DecimalScale(6)
    @JsonSerialize(using = BigDecimalSerializer.class)
    private BigDecimal forwardPrice;

    @DecimalScale(4)
    @JsonSerialize(using = BigDecimalSerializer.class)
    private BigDecimal volume;

}

```

## src/main/java/com/nubo/operations/fractionation/api/client/operation/calculation/models/dto/response/SettleAccountsOutDto.java

```java
package com.nubo.operations.fractionation.api.client.operation.calculation.models.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SettleAccountsOutDto {

    private BigDecimal amount;

    private BigDecimal commissionAmount;

    private BigDecimal valTaxAmount;

    private BigDecimal netAmount;

    private BigDecimal transferValue;

    private BigDecimal netOutflowTotal;

    private BigDecimal outflowTurnoverValue;

    private BigDecimal returnTurnoverValue;
}

```

## src/main/java/com/nubo/operations/fractionation/api/client/operation/calculation/service/OperationCalculationClient.java

```java
package com.nubo.operations.fractionation.api.client.operation.calculation.service;

import com.nubo.operations.fractionation.api.client.operation.calculation.models.dto.request.SettleAccountsInDto;
import com.nubo.operations.fractionation.api.client.operation.calculation.models.dto.response.SettleAccountsOutDto;

public interface OperationCalculationClient {

    SettleAccountsOutDto getSettleAccounts(SettleAccountsInDto settleAccountsInDto);
}

```

## src/main/java/com/nubo/operations/fractionation/api/client/operation/calculation/service/impl/OperationCalculationClientImpl.java

```java
package com.nubo.operations.fractionation.api.client.operation.calculation.service.impl;

import com.nubo.operations.fractionation.api.application.properties.PropertiesConfig;
import com.nubo.operations.fractionation.api.application.properties.PropertiesContext;
import com.nubo.operations.fractionation.api.application.util.ApplicationUtils;
import com.nubo.operations.fractionation.api.application.util.RestClientUtils;
import com.nubo.operations.fractionation.api.client.operation.calculation.models.dto.request.SettleAccountsInDto;
import com.nubo.operations.fractionation.api.client.operation.calculation.models.dto.response.SettleAccountsOutDto;
import com.nubo.operations.fractionation.api.client.operation.calculation.service.OperationCalculationClient;
import com.nubo.operations.fractionation.api.exception.ClientException;
import com.nubo.operations.fractionation.api.exception.error.ErrorCode;
import com.nubo.operations.fractionation.api.models.enums.PropertiesEnum;
import com.nubo.operations.fractionation.api.models.enums.VersionApiEnum;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import java.net.URI;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;
import org.springframework.web.util.UriComponentsBuilder;

@Service
@RequiredArgsConstructor
@Slf4j
public class OperationCalculationClientImpl implements OperationCalculationClient {

    private final PropertiesConfig propertiesConfig;
    private final RestClientUtils restClientUtils;

    private static final String PATH_SETTLE_ACCOUNTS = "calculation/settle-accounts";

    @Override
    public SettleAccountsOutDto getSettleAccounts(SettleAccountsInDto settleAccountsInDto) {
        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getUrlNuboOperationCalculation())
                .pathSegment(VersionApiEnum.V1.getValue(), PATH_SETTLE_ACCOUNTS)
                .build()
                .toUri();

        try {
            ResponseEntity<SettleAccountsOutDto> response = restClientUtils.requestWithResponseObject(uri,
                    HttpMethod.POST, getHttpHeaders(), settleAccountsInDto, SettleAccountsOutDto.class);
            if (!ObjectUtils.isEmpty(response.getBody())) {
                return response.getBody();
            }
        } catch (Exception ex) {
            throw new ClientException(ErrorCode.CLIENT_OPERATION_CALCULATION_ERROR, HttpStatus.BAD_GATEWAY, ex);
        }

        return SettleAccountsOutDto.builder().build();
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

## src/main/java/com/nubo/operations/fractionation/api/client/operation/rules/models/dto/request/BatchStatusUpdateTradeInDto.java

```java
package com.nubo.operations.fractionation.api.client.operation.rules.models.dto.request;

import java.util.List;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BatchStatusUpdateTradeInDto {

    @NotBlank
    private String batchId;

    @NotEmpty
    @Valid
    private List<BatchStatusUpdateTradeItemInDto> items;
}

```

## src/main/java/com/nubo/operations/fractionation/api/client/operation/rules/models/dto/request/BatchStatusUpdateTradeItemInDto.java

```java
package com.nubo.operations.fractionation.api.client.operation.rules.models.dto.request;

import com.nubo.operations.fractionation.api.models.enums.BusinessRuleEnum;

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
public class BatchStatusUpdateTradeItemInDto {

    @NotBlank
    private String itemId;

    @NotNull
    private Long tradeId;

    @NotBlank
    private String sideId;

    @NotNull
    private BusinessRuleEnum code;
}

```

## src/main/java/com/nubo/operations/fractionation/api/client/operation/rules/models/dto/request/StatusUpdateSettlementInDto.java

```java
package com.nubo.operations.fractionation.api.client.operation.rules.models.dto.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.nubo.operations.fractionation.api.models.enums.BusinessRuleEnum;
import com.nubo.operations.fractionation.api.models.enums.SideEnum;
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

## src/main/java/com/nubo/operations/fractionation/api/client/operation/rules/models/dto/request/StatusUpdateTradeInDto.java

```java
package com.nubo.operations.fractionation.api.client.operation.rules.models.dto.request;

import com.nubo.operations.fractionation.api.models.enums.BusinessRuleEnum;

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

## src/main/java/com/nubo/operations/fractionation/api/client/operation/rules/models/dto/response/BatchStatusUpdateTradeItemOutDto.java

```java
package com.nubo.operations.fractionation.api.client.operation.rules.models.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BatchStatusUpdateTradeItemOutDto {

    private String itemId;
    private Long tradeId;
    private String sideId;
    private Boolean prevalidated;
    private StatusUpdateTradeOutDto result;
    private String fallbackReason;
    private String errorCode;
    private String errorMessage;
}

```

## src/main/java/com/nubo/operations/fractionation/api/client/operation/rules/models/dto/response/BatchStatusUpdateTradeOutDto.java

```java
package com.nubo.operations.fractionation.api.client.operation.rules.models.dto.response;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BatchStatusUpdateTradeOutDto {

    private String batchId;
    private List<BatchStatusUpdateTradeItemOutDto> items;
}

```

## src/main/java/com/nubo/operations/fractionation/api/client/operation/rules/models/dto/response/StatusClientOutDto.java

```java
package com.nubo.operations.fractionation.api.client.operation.rules.models.dto.response;

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

## src/main/java/com/nubo/operations/fractionation/api/client/operation/rules/models/dto/response/StatusUpdateSettlementOutDto.java

```java
package com.nubo.operations.fractionation.api.client.operation.rules.models.dto.response;

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
public class StatusUpdateSettlementOutDto {

    private Boolean isValid;

    private String description;

    private String code;

    private StatusClientOutDto newStatus;

    private StatusClientOutDto newStatusCustodian;

}

```

## src/main/java/com/nubo/operations/fractionation/api/client/operation/rules/models/dto/response/StatusUpdateTradeOutDto.java

```java
package com.nubo.operations.fractionation.api.client.operation.rules.models.dto.response;

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

    private StatusClientOutDto newStatusCustodianFraction;

}

```

## src/main/java/com/nubo/operations/fractionation/api/client/operation/rules/service/OperationBusinessRuleClient.java

```java
package com.nubo.operations.fractionation.api.client.operation.rules.service;

import com.nubo.operations.fractionation.api.client.operation.rules.models.dto.request.StatusUpdateSettlementInDto;
import com.nubo.operations.fractionation.api.client.operation.rules.models.dto.request.StatusUpdateTradeInDto;
import com.nubo.operations.fractionation.api.client.operation.rules.models.dto.request.BatchStatusUpdateTradeInDto;
import com.nubo.operations.fractionation.api.client.operation.rules.models.dto.response.StatusUpdateSettlementOutDto;
import com.nubo.operations.fractionation.api.client.operation.rules.models.dto.response.StatusUpdateTradeOutDto;
import com.nubo.operations.fractionation.api.client.operation.rules.models.dto.response.BatchStatusUpdateTradeOutDto;

public interface OperationBusinessRuleClient {

    StatusUpdateTradeOutDto validateUpdateStatusTrade(StatusUpdateTradeInDto statusUpdateTradeInDto);

    BatchStatusUpdateTradeOutDto validateUpdateStatusTradeBatch(BatchStatusUpdateTradeInDto batchRequest);

    StatusUpdateSettlementOutDto validateUpdateStatusSettlement(StatusUpdateSettlementInDto statusUpdateSettlementInDto);

}

```

## src/main/java/com/nubo/operations/fractionation/api/client/operation/rules/service/impl/OperationBusinessRuleClientImpl.java

```java
package com.nubo.operations.fractionation.api.client.operation.rules.service.impl;

import com.nubo.operations.fractionation.api.application.properties.PropertiesConfig;
import com.nubo.operations.fractionation.api.application.properties.PropertiesContext;
import com.nubo.operations.fractionation.api.application.util.ApplicationUtils;
import com.nubo.operations.fractionation.api.application.util.RestClientUtils;
import com.nubo.operations.fractionation.api.client.operation.rules.models.dto.request.StatusUpdateSettlementInDto;
import com.nubo.operations.fractionation.api.client.operation.rules.models.dto.request.StatusUpdateTradeInDto;
import com.nubo.operations.fractionation.api.client.operation.rules.models.dto.request.BatchStatusUpdateTradeInDto;
import com.nubo.operations.fractionation.api.client.operation.rules.models.dto.response.StatusUpdateSettlementOutDto;
import com.nubo.operations.fractionation.api.client.operation.rules.models.dto.response.StatusUpdateTradeOutDto;
import com.nubo.operations.fractionation.api.client.operation.rules.models.dto.response.BatchStatusUpdateTradeOutDto;
import com.nubo.operations.fractionation.api.client.operation.rules.service.OperationBusinessRuleClient;
import com.nubo.operations.fractionation.api.exception.ClientException;
import com.nubo.operations.fractionation.api.exception.error.ErrorCode;
import com.nubo.operations.fractionation.api.models.enums.PropertiesEnum;
import com.nubo.operations.fractionation.api.models.enums.VersionApiEnum;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;

@Service
@RequiredArgsConstructor
@Slf4j
public class OperationBusinessRuleClientImpl implements OperationBusinessRuleClient {

    private final PropertiesConfig propertiesConfig;
    private final RestClientUtils restClientUtils;

    private static final String OPERATION_STATUS_UPDATE_BUSINESS_RULE = "status-update-business-rule";

    @Override
    public StatusUpdateTradeOutDto validateUpdateStatusTrade(StatusUpdateTradeInDto statusUpdateTradeInDto) {
        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getUrlNuboOperationRules())
                .pathSegment(VersionApiEnum.V1.getValue(), OPERATION_STATUS_UPDATE_BUSINESS_RULE)
                .path("/trade/validation")
                .build()
                .toUri();

        try {
            ResponseEntity<StatusUpdateTradeOutDto> response = restClientUtils.requestWithResponseObject(uri,
                    HttpMethod.POST, getHttpHeaders(), statusUpdateTradeInDto, StatusUpdateTradeOutDto.class);

            if (!ObjectUtils.isEmpty(response.getBody())) {
                return response.getBody();
            }
        } catch (Exception ex) {
            throw new ClientException(ErrorCode.CLIENT_OPERATION_RULES_ERROR, HttpStatus.BAD_GATEWAY, ex);
        }

        return StatusUpdateTradeOutDto.builder().build();
    }

    @Override
    public BatchStatusUpdateTradeOutDto validateUpdateStatusTradeBatch(BatchStatusUpdateTradeInDto batchRequest) {
        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getUrlNuboOperationRules())
                .pathSegment(VersionApiEnum.V1.getValue(), OPERATION_STATUS_UPDATE_BUSINESS_RULE)
                .path("/trade/validation/batch")
                .build()
                .toUri();
        try {
            ResponseEntity<BatchStatusUpdateTradeOutDto> response = restClientUtils.requestWithResponseObject(uri,
                    HttpMethod.POST, getHttpHeaders(), batchRequest, BatchStatusUpdateTradeOutDto.class);
            if (!ObjectUtils.isEmpty(response.getBody())) {
                return response.getBody();
            }
        } catch (Exception ex) {
            throw new ClientException(ErrorCode.CLIENT_OPERATION_RULES_ERROR, HttpStatus.BAD_GATEWAY, ex);
        }
        return BatchStatusUpdateTradeOutDto.builder().build();
    }

    @Override
    public StatusUpdateSettlementOutDto validateUpdateStatusSettlement(
            StatusUpdateSettlementInDto statusUpdateSettlementInDto) {
        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getUrlNuboOperationRules())
                .pathSegment(VersionApiEnum.V1.getValue(), OPERATION_STATUS_UPDATE_BUSINESS_RULE)
                .path("/settlement/validation")
                .build()
                .toUri();

        try {
            ResponseEntity<StatusUpdateSettlementOutDto> response = restClientUtils.requestWithResponseObject(uri,
                    HttpMethod.POST, getHttpHeaders(), statusUpdateSettlementInDto, StatusUpdateSettlementOutDto.class);

            if (!ObjectUtils.isEmpty(response.getBody())) {
                return response.getBody();
            }
        } catch (Exception ex) {
            throw new ClientException(ErrorCode.CLIENT_OPERATION_RULES_ERROR, HttpStatus.BAD_GATEWAY, ex);
        }

        return StatusUpdateSettlementOutDto.builder().build();
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

## src/main/java/com/nubo/operations/fractionation/api/exception/ClientException.java

```java
package com.nubo.operations.fractionation.api.exception;

import lombok.Getter;
import org.springframework.http.HttpStatus;

import com.nubo.operations.fractionation.api.exception.error.ErrorCode;

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

## src/main/java/com/nubo/operations/fractionation/api/exception/ServiceException.java

```java
package com.nubo.operations.fractionation.api.exception;

import com.nubo.operations.fractionation.api.exception.error.ErrorCode;
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

    public ServiceException(ErrorCode errorCode, String errorMessage, HttpStatus httpStatus) {
        super(errorCode.getMessage(), new Throwable(errorMessage));
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

## src/main/java/com/nubo/operations/fractionation/api/exception/error/ErrorCode.java

```java
package com.nubo.operations.fractionation.api.exception.error;

import lombok.Getter;

@Getter
public enum ErrorCode {

    UNAUTHORIZED("Not unauthorized"),
    FORBIDDEN("Access denied"),
    UNEXPECTED("An unexpected error occurred"),
    METHOD_ARGUMENT_TYPE("Invalid request path"),
    METHOD_NOT_ALLOWED("Http method not allowed"),
    NOT_FOUND("Resource not found"),
    BAD_GATEWAY("Bad Gateway"),
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
    STATUS_NOT_FOUND("Status not found"),
    SIDE_NOT_FOUND("Side not found"),
    TYPE_NOT_FOUND("Type not found"),
    SETTLEMENT_NOT_FOUND("Settlement not found"),
    TRADE_NOT_FOUND("Trade not found"),
    INVESTOR_ACCOUNT_NOT_FOUND("Investor account not found"),
    PARTICIPANT_NOT_FOUND("Participant not found"),
    PARTICIPANT_ACCOUNT_NOT_FOUND("Participant Account not found"),
    MILA_DEPOSITORY_NOT_FOUND("Mila depository not found"),
    CLIENT_OPERATION_CALCULATION_ERROR("An unexpected error occurred in Operation Calculation"),
    ERROR_DESERIALIZER_JSON("Error Deserializer Json"),
    ERROR_KAFKA_PRODUCER_NUBO("Error Producer Kafka Nubo"),
    CLIENT_OPERATION_RULES_ERROR("An unexpected error occurred in Operation Rules"),
    MASTER_ACCOUNT_REQUIRED("Master account is required"),
    TAXES_NOT_FOUND("Taxes not found"),
    MARKET_NOT_FOUND_FOR_CUSTODIAN("Market not found for custodian assignment");

    private final String message;

    ErrorCode(String message) {
        this.message = message;
    }

    public String getName() {
        return this.name();
    }

}

```

## src/main/java/com/nubo/operations/fractionation/api/exception/error/ErrorResponse.java

```java
package com.nubo.operations.fractionation.api.exception.error;

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

## src/main/java/com/nubo/operations/fractionation/api/exception/error/ErrorValidation.java

```java
package com.nubo.operations.fractionation.api.exception.error;

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

## src/main/java/com/nubo/operations/fractionation/api/exception/handler/GlobalExceptionHandler.java

```java
package com.nubo.operations.fractionation.api.exception.handler;

import com.nubo.operations.fractionation.api.application.properties.PropertiesContext;
import com.nubo.operations.fractionation.api.application.util.ApplicationUtils;
import com.nubo.operations.fractionation.api.exception.ClientException;
import com.nubo.operations.fractionation.api.exception.ServiceException;
import com.nubo.operations.fractionation.api.exception.error.ErrorCode;
import com.nubo.operations.fractionation.api.exception.error.ErrorResponse;
import com.nubo.operations.fractionation.api.exception.error.ErrorValidation;

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

    private ResponseEntity<ErrorResponse> buildClientErrorResponse(HttpStatus status, ErrorCode errorCode,
            String cause) {
        try {
            Pattern pattern = Pattern.compile("\\{.*\\}");
            Matcher matcher = pattern.matcher(cause);

            if (matcher.find()) {
                String json = matcher.group();
                ErrorResponse errorResponse = ApplicationUtils.convertJsonToObject(json,
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

## src/main/java/com/nubo/operations/fractionation/api/exception/kafka/KafkaErrorBuild.java

```java
package com.nubo.operations.fractionation.api.exception.kafka;

import com.nubo.operations.fractionation.api.application.properties.PropertiesConfig;
import com.nubo.operations.fractionation.api.application.util.ApplicationUtils;
import com.nubo.operations.fractionation.api.exception.error.ErrorCode;
import com.nubo.operations.fractionation.api.exception.error.ErrorResponse;
import com.nubo.operations.fractionation.api.exception.error.ErrorValidation;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.util.ObjectUtils;

import java.time.LocalDateTime;
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

## src/main/java/com/nubo/operations/fractionation/api/helpers/MapperUtil.java

```java
package com.nubo.operations.fractionation.api.helpers;

import org.springframework.util.ObjectUtils;

import com.nubo.operations.fractionation.api.models.dto.response.CountryOutDto;
import com.nubo.operations.fractionation.api.models.dto.response.DepositoryOutDto;
import com.nubo.operations.fractionation.api.models.dto.response.DirectDepositoryOutDto;
import com.nubo.operations.fractionation.api.models.dto.response.InvestorAccountOutDto;
import com.nubo.operations.fractionation.api.models.dto.response.InvestorOutDto;
import com.nubo.operations.fractionation.api.models.dto.response.ParticipantAccountOutDto;
import com.nubo.operations.fractionation.api.models.dto.response.ParticipantOutDto;
import com.nubo.operations.fractionation.api.models.dto.response.ParticipantShortOutDto;
import com.nubo.operations.fractionation.api.models.dto.response.SettlementCustodyAdmitOutDto;
import com.nubo.operations.fractionation.api.models.dto.response.SettlementOutDto;
import com.nubo.operations.fractionation.api.models.dto.response.SideOutDto;
import com.nubo.operations.fractionation.api.models.dto.response.StatusOutDto;
import com.nubo.operations.fractionation.api.models.dto.response.TradingSystemOutDto;
import com.nubo.operations.fractionation.api.models.dto.response.TypeOutDto;
import com.nubo.operations.fractionation.api.models.entity.CountryEntity;
import com.nubo.operations.fractionation.api.models.entity.DepositoryEntity;
import com.nubo.operations.fractionation.api.models.entity.DirectDepositoryEntity;
import com.nubo.operations.fractionation.api.models.entity.InvestorAccountEntity;
import com.nubo.operations.fractionation.api.models.entity.InvestorEntity;
import com.nubo.operations.fractionation.api.models.entity.ParticipantAccountEntity;
import com.nubo.operations.fractionation.api.models.entity.ParticipantEntity;
import com.nubo.operations.fractionation.api.models.entity.SettlementEntity;
import com.nubo.operations.fractionation.api.models.entity.SideEntity;
import com.nubo.operations.fractionation.api.models.entity.StatusEntity;
import com.nubo.operations.fractionation.api.models.entity.TradingSystemEntity;
import com.nubo.operations.fractionation.api.models.entity.TypeEntity;

public final class MapperUtil {

    private MapperUtil() {
    }

    public static SettlementOutDto settlementEntityToSettlementOutDto(SettlementEntity settlementEntity) {
        return settlementEntityToSettlementOutDto(settlementEntity, null, false);
    }

    /**
     * Batch-only overload. The direct depository DTO was captured during the
     * batch bulk read, so mapping the response does not initialize a managed
     * DirectDepository proxy once per item.
     */
    public static SettlementOutDto settlementEntityToSettlementOutDto(SettlementEntity settlementEntity,
            DirectDepositoryOutDto directDepositoryOutDto) {
        return settlementEntityToSettlementOutDto(settlementEntity, directDepositoryOutDto, true);
    }

    private static SettlementOutDto settlementEntityToSettlementOutDto(SettlementEntity settlementEntity,
            DirectDepositoryOutDto directDepositoryOutDto, boolean usePreparedDirectDepository) {
        return SettlementOutDto.builder()
                .tradeId(settlementEntity.getTrade().getId())
                .fraction(settlementEntity.getFraction())
                .side(ObjectUtils.isEmpty(settlementEntity.getSide()) ? null
                        : sideEntityToSideOutDto(settlementEntity.getSide()))
                .uniqueFractionId(settlementEntity.getUniqueFractionId())
                .investor(ObjectUtils.isEmpty(settlementEntity.getInvestor()) ? null
                        : investorEntityToInvestorOutDto(settlementEntity.getInvestor()))
                .investorAccount(ObjectUtils.isEmpty(settlementEntity.getInvestorAccount()) ? null
                        : investorAccountEntityToInvestorAccountOutDto(settlementEntity.getInvestorAccount()))
                .participantAccount(ObjectUtils.isEmpty(settlementEntity.getParticipantAccount()) ? null
                        : participantAccountEntityToParticipantAccountOutDto(settlementEntity.getParticipantAccount()))
                .fractionQuantity(settlementEntity.getFractionQuantity())
                .fractionVolume(settlementEntity.getFractionVolume())
                .fiduciarySpecialist(settlementEntity.getFiduciarySpecialist())
                .commissionPercentage(settlementEntity.getCommissionPercentage())
                .commissionAmount(settlementEntity.getCommissionAmount())
                .valTax(settlementEntity.getValTax())
                .valTaxAmount(settlementEntity.getValTaxAmount())
                .withholdingTax(settlementEntity.getWithholdingTax())
                .withholdingTaxAmount(settlementEntity.getWithholdingTaxAmount())
                .netAmount(settlementEntity.getNetAmount())
                .transferValue(settlementEntity.getTransferValue())
                .issuedReceipt(settlementEntity.getIssuedReceipt())
                .issuedReceiptNumber(settlementEntity.getIssuedReceiptNumber())
                .referenceAllocId(settlementEntity.getReferenceAllocId())
                .repoAmount(settlementEntity.getRepoAmount())
                .fundingAmount(settlementEntity.getFundingAmount())
                .netOutFlowTotal(settlementEntity.getNetOutFlowTotal())
                .outFlowTurnoverValue(settlementEntity.getOutFlowTurnoverValue())
                .returnTurnoverValue(settlementEntity.getReturnTurnoverValue())
                .deliveryVersusPaymentValue(settlementEntity.getDeliveryVersusPaymentValue())
                .settlementAmount(settlementEntity.getSettlementAmount())
                .tradingSystem(ObjectUtils.isEmpty(settlementEntity.getTradingSystem()) ? null
                        : tradingSystemEntityToTradingSystemOutDto(settlementEntity.getTradingSystem()))
                .status(ObjectUtils.isEmpty(settlementEntity.getStatus()) ? null
                        : statusEntityToStatusOutDto(settlementEntity.getStatus()))
                .brokerageService(settlementEntity.getBrokerageService())
                .custodianId(settlementEntity.getCustodianId())
                .bankAccountId(settlementEntity.getBankAccountId())
                .reference(settlementEntity.getReference())
                .capitalGainValue(settlementEntity.getCapitalGainValue())
                .disbursementValue(settlementEntity.getDisbursementValue())
                .sourceQuoteType(ObjectUtils.isEmpty(settlementEntity.getSourceQuoteType()) ? null
                        : typeEntityToTypeOutDto(settlementEntity.getSourceQuoteType()))
                .ficAdministratorId(settlementEntity.getFicAdministratorId())
                .directDepositor(usePreparedDirectDepository ? directDepositoryOutDto
                        : ObjectUtils.isEmpty(settlementEntity.getDirectDepositor()) ? null
                                : directDepositoryEntityToDirectDepositoryOutDto(settlementEntity.getDirectDepositor()))
                .cashAccount(ObjectUtils.isEmpty(settlementEntity.getCashAccount()) ? null : settlementEntity.getCashAccount())
                .indMaster(settlementEntity.getIndMaster())
                .custodianStatus(ObjectUtils.isEmpty(settlementEntity.getCustodianStatus()) ? null
                        : statusEntityToStatusOutDto(settlementEntity.getCustodianStatus()))
                .build();
    }

    public static SettlementCustodyAdmitOutDto settlementEntityToSettlementCustodyAdmitOutDto(SettlementEntity settlementEntity) {
        return SettlementCustodyAdmitOutDto.builder()
                .tradeId(settlementEntity.getTrade().getId())
                .fraction(settlementEntity.getFraction())
                .side(ObjectUtils.isEmpty(settlementEntity.getSide()) ? null
                        : sideEntityToSideOutDto(settlementEntity.getSide()))
                .build();
    }

    public static ParticipantOutDto participantEntityToParticipantOutDto(ParticipantEntity participantEntity) {
        return ParticipantOutDto.builder()
                .id(participantEntity.getId())
                .code(participantEntity.getCode())
                .documentNumber(participantEntity.getDocumentNumber())
                .name(participantEntity.getName())
                .shortName(participantEntity.getShortName())
                .type(ObjectUtils.isEmpty(participantEntity.getType())
                        ? null
                        : typeEntityToTypeOutDto(participantEntity.getType()))
                .mnemonic(participantEntity.getMnemonic())
                .country(ObjectUtils.isEmpty(participantEntity.getCountry())
                        ? null
                        : countryEntityToCountryOutDto(participantEntity.getCountry()))
                .registrationDate(participantEntity.getRegistrationDate())
                .taxCode(participantEntity.getTaxCode())
                .mainAddress(participantEntity.getMainAddress())
                .webPage(participantEntity.getWebPage())
                .phoneNumber(participantEntity.getPhoneNumber())
                .status(ObjectUtils.isEmpty(participantEntity.getStatus())
                        ? null
                        : statusEntityToStatusOutDto(participantEntity.getStatus()))
                .nitClearingHouse(participantEntity.getNitClearingHouse())
                .typeEntity(participantEntity.getTypeEntity())
                .marginAccount(participantEntity.getMarginAccount())
                .masterAccount(participantEntity.getMasterAccount())
                .directAllocation(participantEntity.getDirectAllocation())
                .marketMaker(participantEntity.getMarketMaker())
                .enabled(participantEntity.getEnabled())
                .custodian(participantEntity.getCustodian())
                .build();
    }

    public static InvestorOutDto investorEntityToInvestorOutDto(InvestorEntity investorEntity) {
        return InvestorOutDto.builder()
                .id(investorEntity.getId())
                .code(investorEntity.getCode())
                .firstName(investorEntity.getFirstName())
                .lastName(investorEntity.getLastName())
                .companyName(investorEntity.getCompanyName())
                .type(ObjectUtils.isEmpty(investorEntity.getType()) ? null
                        : typeEntityToTypeOutDto(investorEntity.getType()))
                .status(ObjectUtils.isEmpty(investorEntity.getStatus()) ? null
                        : statusEntityToStatusOutDto(investorEntity.getStatus()))
                .country(ObjectUtils.isEmpty(investorEntity.getCountry()) ? null
                        : countryEntityToCountryOutDto(investorEntity.getCountry()))
                .documentNumber(investorEntity.getDocumentNumber())
                .nationality(investorEntity.getNationality())
                .address(investorEntity.getAddress())
                .phoneNumber(investorEntity.getPhoneNumber())
                .email(investorEntity.getEmail())
                .clearinghouseCode(investorEntity.getClearinghouseCode())
                .moneyLaunderingFlag(investorEntity.getMoneyLaunderingFlag())
                .build();
    }

    public static InvestorAccountOutDto investorAccountEntityToInvestorAccountOutDto(
            InvestorAccountEntity investorAccountEntity) {
        return InvestorAccountOutDto.builder()
                .id(investorAccountEntity.getId())
                .investor(ObjectUtils.isEmpty(investorAccountEntity.getInvestor()) ? null
                        : investorEntityToInvestorOutDto(investorAccountEntity.getInvestor()))
                .accountNumber(investorAccountEntity.getAccountNumber())
                .status(ObjectUtils.isEmpty(investorAccountEntity.getStatus()) ? null
                        : statusEntityToStatusOutDto(investorAccountEntity.getStatus()))
                .type(ObjectUtils.isEmpty(investorAccountEntity.getType()) ? null
                        : typeEntityToTypeOutDto(investorAccountEntity.getType()))
                .depository(ObjectUtils.isEmpty(investorAccountEntity.getDepository()) ? null
                        : depositoryEntityToDepositoryOutDto(investorAccountEntity.getDepository()))
                .participant(ObjectUtils.isEmpty(investorAccountEntity.getParticipant()) ? null
                        : participantEntityToParticipantShortOutDto(investorAccountEntity.getParticipant()))
                .build();
    }

    public static ParticipantAccountOutDto participantAccountEntityToParticipantAccountOutDto(
            ParticipantAccountEntity participantAccountEntity) {
        return ParticipantAccountOutDto.builder()
                .id(participantAccountEntity.getId())
                .participant(ObjectUtils.isEmpty(participantAccountEntity.getParticipant()) ? null
                        : participantEntityToParticipantShortOutDto(participantAccountEntity.getParticipant()))
                .accountNumber(participantAccountEntity.getAccountNumber())
                .taxExemp(participantAccountEntity.getTaxExemp())
                .status(ObjectUtils.isEmpty(participantAccountEntity.getStatus()) ? null
                        : statusEntityToStatusOutDto(participantAccountEntity.getStatus()))
                .type(ObjectUtils.isEmpty(participantAccountEntity.getType()) ? null
                        : typeEntityToTypeOutDto(participantAccountEntity.getType()))
                .build();
    }

    public static SideOutDto sideEntityToSideOutDto(SideEntity sideEntity) {
        return SideOutDto.builder()
                .id(sideEntity.getId())
                .description(sideEntity.getDescription())
                .build();
    }

    public static TypeOutDto typeEntityToTypeOutDto(TypeEntity typeEntity) {
        return TypeOutDto.builder()
                .id(typeEntity.getId())
                .description(typeEntity.getDescription())
                .category(typeEntity.getCategory())
                .build();
    }

    public static StatusOutDto statusEntityToStatusOutDto(StatusEntity statusEntity) {
        return StatusOutDto.builder()
                .id(statusEntity.getId())
                .description(statusEntity.getDescription())
                .category(statusEntity.getCategory())
                .shortName(statusEntity.getShortName())
                .build();
    }

    public static CountryOutDto countryEntityToCountryOutDto(CountryEntity countryEntity) {
        return CountryOutDto.builder()
                .id(countryEntity.getId())
                .code(countryEntity.getCode())
                .name(countryEntity.getName())
                .timeZone(countryEntity.getTimeZone())
                .build();
    }

    public static TradingSystemOutDto tradingSystemEntityToTradingSystemOutDto(
            TradingSystemEntity tradingSystemEntity) {
        return TradingSystemOutDto.builder()
                .id(tradingSystemEntity.getId())
                .description(tradingSystemEntity.getDescription())
                .build();
    }

    public static DepositoryOutDto depositoryEntityToDepositoryOutDto(DepositoryEntity depositoryEntity) {
        return DepositoryOutDto.builder()
                .id(depositoryEntity.getId())
                .description(depositoryEntity.getDescription())
                .build();
    }

    public static DirectDepositoryOutDto directDepositoryEntityToDirectDepositoryOutDto(
            DirectDepositoryEntity directDepositoryEntity) {
        if (ObjectUtils.isEmpty(directDepositoryEntity)) {
            return null;
        }
        return DirectDepositoryOutDto.builder()
                .id(directDepositoryEntity.getId())
                .participant(participantEntityToParticipantOutDto(directDepositoryEntity.getParticipant()))
                .depository(depositoryEntityToDepositoryOutDto(directDepositoryEntity.getDepository()))
                .directDepositoryNumber(directDepositoryEntity.getDirectDepositoryNumber())
                .crccCompensatorCode(directDepositoryEntity.getCrccCompensatorCode())
                .crccCustodianCode(directDepositoryEntity.getCrccCustodianCode())
                .crccNegotiatorCode(directDepositoryEntity.getCrccCompensatorCode())
                .build();

    }

    public static ParticipantShortOutDto participantEntityToParticipantShortOutDto(
            ParticipantEntity participantEntity) {
        if (ObjectUtils.isEmpty(participantEntity))
            return null;
        return ParticipantShortOutDto.builder()
                .id(participantEntity.getId())
                .code(participantEntity.getCode())
                .shortName(participantEntity.getShortName())
                .masterAccount(participantEntity.getMasterAccount())
                .build();
    }

}

```

## src/main/java/com/nubo/operations/fractionation/api/models/domain/BatchDirectDepositoryLookup.java

```java
package com.nubo.operations.fractionation.api.models.domain;

import java.util.Map;

import com.nubo.operations.fractionation.api.models.dto.response.DirectDepositoryOutDto;

/**
 * Immutable, request-scoped data prepared for a single fractionation batch.
 * No JPA entity is retained, so item transactions never receive a detached
 * DirectDepositoryEntity.
 */
public record BatchDirectDepositoryLookup(
        boolean available,
        Map<Long, Long> directDepositoryIdByParticipantId,
        Map<Long, DirectDepositoryOutDto> directDepositoryOutByParticipantId) {

    public BatchDirectDepositoryLookup {
        directDepositoryIdByParticipantId = Map.copyOf(directDepositoryIdByParticipantId);
        directDepositoryOutByParticipantId = Map.copyOf(directDepositoryOutByParticipantId);
    }

    public static BatchDirectDepositoryLookup unavailable() {
        return new BatchDirectDepositoryLookup(false, Map.of(), Map.of());
    }

    public Long directDepositoryIdFor(Long participantId) {
        return directDepositoryIdByParticipantId.get(participantId);
    }

    public DirectDepositoryOutDto directDepositoryOutFor(Long participantId) {
        return directDepositoryOutByParticipantId.get(participantId);
    }
}

```

## src/main/java/com/nubo/operations/fractionation/api/models/domain/BatchPreparedReferences.java

```java
package com.nubo.operations.fractionation.api.models.domain;

import java.util.Map;

/**
 * Read-only batch preparation result. It deliberately carries identifiers,
 * never JPA entities, so item transactions resolve their own managed state.
 */
public record BatchPreparedReferences(Map<Long, Long> directDepositoryIdByParticipantId) {

    public static BatchPreparedReferences empty() {
        return new BatchPreparedReferences(Map.of());
    }

    public Long directDepositoryIdFor(Long participantId) {
        return directDepositoryIdByParticipantId.get(participantId);
    }
}

```

## src/main/java/com/nubo/operations/fractionation/api/models/domain/SettlementData.java

```java
package com.nubo.operations.fractionation.api.models.domain;

import com.nubo.operations.fractionation.api.models.entity.PackageCustodianHistoryEntity;
import com.nubo.operations.fractionation.api.models.entity.SettlementEntity;

public record SettlementData(
        SettlementEntity newSettlementEntity,
        PackageCustodianHistoryEntity newPackageCustodianHistoryEntity) {
}

```

## src/main/java/com/nubo/operations/fractionation/api/models/dto/request/BatchAssignmentInDto.java

```java
package com.nubo.operations.fractionation.api.models.dto.request;

import java.util.List;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BatchAssignmentInDto {

    @NotBlank
    private String batchId;

    @NotEmpty
    @Valid
    private List<BatchAssignmentItemInDto> items;
}

```

## src/main/java/com/nubo/operations/fractionation/api/models/dto/request/BatchAssignmentItemInDto.java

```java
package com.nubo.operations.fractionation.api.models.dto.request;

import java.util.List;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BatchAssignmentItemInDto {

    @NotBlank
    private String itemId;
    private String topic;
    private Integer partition;
    private Long offset;
    private String key;
    private String correlationId;

    @NotNull
    private Long tradeId;

    @NotBlank
    private String sideId;

    @NotBlank
    private String operationType;

    @NotEmpty
    @Valid
    private List<FractionInDto> fractions;
}

```

## src/main/java/com/nubo/operations/fractionation/api/models/dto/request/CorrectionInDto.java

```java
package com.nubo.operations.fractionation.api.models.dto.request;

import java.math.BigDecimal;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.nubo.operations.fractionation.api.application.annotations.ValidBigDecimal;

import jakarta.validation.constraints.AssertTrue;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CorrectionInDto {

    @NotNull
    private Integer fraction;

    private String reference;

    @NotNull
    @ValidBigDecimal(precision = 6, scale = 4)
    private BigDecimal commissionPercentage;

    private List<Long> settlementCorrectionIds;

    private Long investorAccountId;

    private Long participantAccountId;

    private BigDecimal fractionQuantity;

    private Long sourceQuoteTypeId;

    // --- Assert validations ----

    @JsonIgnore
    @AssertTrue(message = "investorAccountId and participantAccountId cannot both be provided at the same time")
    public boolean isOnlyAccountRequired() {
        return !(investorAccountId != null && participantAccountId != null);
    }

}

```

## src/main/java/com/nubo/operations/fractionation/api/models/dto/request/FractionCustodianAdmitInDto.java

```java
package com.nubo.operations.fractionation.api.models.dto.request;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.validation.constraints.AssertTrue;
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
public class FractionCustodianAdmitInDto {

    @Min(value = 1)
    private Long investorAccountId;

    @Min(value = 1)
    private Long participantAccountId;

    @NotNull
    @Min(value = 1)
    private Long sourceQuoteTypeId;

    //--- Assert validations ----

    @JsonIgnore
    @AssertTrue(message = "exactly one of investorAccountId or participantAccountId must be provided, not both and not neither")
    public boolean isOnlyAccountRequired() {
        return (investorAccountId != null) ^ (participantAccountId != null);
    }

}

```

## src/main/java/com/nubo/operations/fractionation/api/models/dto/request/FractionInDto.java

```java
package com.nubo.operations.fractionation.api.models.dto.request;

import java.math.BigDecimal;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.nubo.operations.fractionation.api.application.annotations.ValidBigDecimal;

import jakarta.validation.constraints.AssertTrue;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

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
    @Positive
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

    @Min(value = 1)
    private Long transferParticipantId;

    private Boolean haveAssignmentMark;

    private Boolean haveAutomaticMark;

    @Min(value = 1)
    private Long milaDirectDepositorId;

    @Min(value = 0)
    private Long uniqueFractionId;

    private Long custodianStatusId;

    private Boolean ownPositionFraction;

    private String referencePackage;

    // --- Assert validations ----

    @JsonIgnore
    @AssertTrue(message = "exactly one of investorAccountId or participantAccountId must be provided, not both and not neither")
    public boolean isOnlyAccountRequired() {
        return (investorAccountId != null) ^ (participantAccountId != null);
    }

    @JsonIgnore
    @AssertTrue(message = "referencePackage must be null or empty when custodianId is null")
    public boolean isReferencePackageNullWhenCustodianIdIsNull() {
        if (custodianId == null) {
            return referencePackage == null || referencePackage.isEmpty();
        }
        return true;
    }
}

```

## src/main/java/com/nubo/operations/fractionation/api/models/dto/response/BatchAssignmentItemOutDto.java

```java
package com.nubo.operations.fractionation.api.models.dto.response;

import java.util.List;

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
    private String topic;
    private Integer partition;
    private Long offset;
    private String key;
    private String correlationId;
    private Long tradeId;
    private String sideId;
    private Boolean success;
    private List<SettlementOutDto> settlements;
    private String errorCode;
    private String errorMessage;
    private long rulesMs;
    private long calculationsMs;
    private long dbMs;
}

```

## src/main/java/com/nubo/operations/fractionation/api/models/dto/response/BatchAssignmentOutDto.java

```java
package com.nubo.operations.fractionation.api.models.dto.response;

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

## src/main/java/com/nubo/operations/fractionation/api/models/dto/response/CityOutDto.java

```java
package com.nubo.operations.fractionation.api.models.dto.response;

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
public class CityOutDto {

    private Long id;

    private String description;

}

```

## src/main/java/com/nubo/operations/fractionation/api/models/dto/response/CountryOutDto.java

```java
package com.nubo.operations.fractionation.api.models.dto.response;

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

## src/main/java/com/nubo/operations/fractionation/api/models/dto/response/CurrencyOutDto.java

```java
package com.nubo.operations.fractionation.api.models.dto.response;

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

## src/main/java/com/nubo/operations/fractionation/api/models/dto/response/DepartmentOutDto.java

```java
package com.nubo.operations.fractionation.api.models.dto.response;

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
public class DepartmentOutDto {

    private String id;

    private String description;

}
```

## src/main/java/com/nubo/operations/fractionation/api/models/dto/response/DepositoryOutDto.java

```java
package com.nubo.operations.fractionation.api.models.dto.response;

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

## src/main/java/com/nubo/operations/fractionation/api/models/dto/response/DirectDepositoryOutDto.java

```java
package com.nubo.operations.fractionation.api.models.dto.response;

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
public class DirectDepositoryOutDto {

    private Long id;

    private ParticipantOutDto participant;

    private DepositoryOutDto depository;

    private String directDepositoryNumber;

    private String crccCompensatorCode;

    private String crccCustodianCode;

    private String crccNegotiatorCode;

}

```

## src/main/java/com/nubo/operations/fractionation/api/models/dto/response/FractionAccountOutDto.java

```java
package com.nubo.operations.fractionation.api.models.dto.response;

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

}
```

## src/main/java/com/nubo/operations/fractionation/api/models/dto/response/GicsOutDto.java

```java
package com.nubo.operations.fractionation.api.models.dto.response;

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

## src/main/java/com/nubo/operations/fractionation/api/models/dto/response/IdentificationTypeOutDto.java

```java
package com.nubo.operations.fractionation.api.models.dto.response;

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

## src/main/java/com/nubo/operations/fractionation/api/models/dto/response/InvestorAccountOutDto.java

```java
package com.nubo.operations.fractionation.api.models.dto.response;

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

    private String accountName;

    private Boolean taxExemp;

    private StatusOutDto status;

    private TypeOutDto originType;

    private TypeOutDto type;

    private DepositoryOutDto depository;

    private ParticipantShortOutDto participant;

}

```

## src/main/java/com/nubo/operations/fractionation/api/models/dto/response/InvestorOutDto.java

```java
package com.nubo.operations.fractionation.api.models.dto.response;

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

    private DepartmentOutDto department;

    private CityOutDto city;

    private String documentNumber;

    private IdentificationTypeOutDto identificationType;

    private String nationality;

    private String address;

    private String phoneNumber;

    private String email;

    private String clearinghouseCode;

    private GicsOutDto gics;

    private Boolean moneyLaunderingFlag;

    private TaxStatusOutDto taxStatus;

}

```

## src/main/java/com/nubo/operations/fractionation/api/models/dto/response/ParticipantAccountOutDto.java

```java
package com.nubo.operations.fractionation.api.models.dto.response;

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

    private ParticipantShortOutDto participant;

    private String accountNumber;

    private Boolean taxExemp;

    private StatusOutDto status;

    private TypeOutDto type;

}

```

## src/main/java/com/nubo/operations/fractionation/api/models/dto/response/ParticipantOutDto.java

```java
package com.nubo.operations.fractionation.api.models.dto.response;

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

    private DepartmentOutDto department;

    private String mainAddress;

    private String webPage;

    private String phoneNumber;

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

## src/main/java/com/nubo/operations/fractionation/api/models/dto/response/ParticipantShortOutDto.java

```java
package com.nubo.operations.fractionation.api.models.dto.response;

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
public class ParticipantShortOutDto {

    private Long id;

    private String code;

    private String shortName;

    private String masterAccount;

}

```

## src/main/java/com/nubo/operations/fractionation/api/models/dto/response/SettlementCustodyAdmitOutDto.java

```java
package com.nubo.operations.fractionation.api.models.dto.response;

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
public class SettlementCustodyAdmitOutDto {

    private Long tradeId;

    private Integer fraction;

    private SideOutDto side;

}

```

## src/main/java/com/nubo/operations/fractionation/api/models/dto/response/SettlementOutDto.java

```java
package com.nubo.operations.fractionation.api.models.dto.response;

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

    private TradingSystemOutDto tradingSystem;

    private StatusOutDto status;

    private BigDecimal brokerageService;

    private Long custodianId;

    private Long bankAccountId;

    private String reference;

    private BigDecimal capitalGainValue;

    private BigDecimal disbursementValue;

    private TypeOutDto sourceQuoteType;

    private Long ficAdministratorId;

    private DirectDepositoryOutDto directDepositor;

    private Boolean jointAccount;

    private Boolean masterAccount;

    private BigDecimal cashAccount;

    private Boolean indMaster;

    private StatusOutDto custodianStatus;

}

```

## src/main/java/com/nubo/operations/fractionation/api/models/dto/response/SideOutDto.java

```java
package com.nubo.operations.fractionation.api.models.dto.response;

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

## src/main/java/com/nubo/operations/fractionation/api/models/dto/response/StatusOutDto.java

```java
package com.nubo.operations.fractionation.api.models.dto.response;

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

## src/main/java/com/nubo/operations/fractionation/api/models/dto/response/TaxStatusOutDto.java

```java
package com.nubo.operations.fractionation.api.models.dto.response;

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

## src/main/java/com/nubo/operations/fractionation/api/models/dto/response/TradingSystemOutDto.java

```java
package com.nubo.operations.fractionation.api.models.dto.response;

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

## src/main/java/com/nubo/operations/fractionation/api/models/dto/response/TypeOutDto.java

```java
package com.nubo.operations.fractionation.api.models.dto.response;

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

## src/main/java/com/nubo/operations/fractionation/api/models/entity/CountryEntity.java

```java
package com.nubo.operations.fractionation.api.models.entity;

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
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CountryEntity that = (CountryEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/fractionation/api/models/entity/DepositoryEntity.java

```java
package com.nubo.operations.fractionation.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
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
@Table(name = "\"DEPOSITORY\"", schema = "\"NUANBODB\"")
public class DepositoryEntity {

    @Id
    @Column(name = "\"DEPOSITORY_ID\"", length = 2)
    private String id;

    @Column(name = "\"DESCRIPTION\"", length = 80, nullable = false)
    private String description;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        DepositoryEntity that = (DepositoryEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/fractionation/api/models/entity/DirectDepositoryEntity.java

```java
package com.nubo.operations.fractionation.api.models.entity;

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
@Table(name = "\"DIRECT_DEPOSITORY\"", schema = "\"NUANBODB\"")
public class DirectDepositoryEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"DIRECT_DEPOSITORY_ID\"", nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "\"PARTICIPANT_ID\"", nullable = false)
    private ParticipantEntity participant;

    @ManyToOne
    @JoinColumn(name = "\"DEPOSITORY_ID\"", nullable = false)
    private DepositoryEntity depository;

    @Column(name = "\"DIRECT_DEPOSITORY_NUMBER\"", length = 80)
    private String directDepositoryNumber;

    @Column(name = "\"CRCC_COMPENSATOR_CODE\"", length = 18)
    private String crccCompensatorCode;

    @Column(name = "\"CRCC_CUSTODIAN_CODE\"", length = 18)
    private String crccCustodianCode;

    @Column(name = "\"CRCC_NEGOTIATOR_CODE\"", length = 18)
    private String crccNegotiatorCode;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;

        DirectDepositoryEntity that = (DirectDepositoryEntity) o;

        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/fractionation/api/models/entity/InvestorAccountEntity.java

```java
package com.nubo.operations.fractionation.api.models.entity;

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

    @Column(name = "\"ACCOUNT_NAME\"", length = 100)
    private String accountName;

    @Column(name = "\"TAX_EXEMP\"")
    private Boolean taxExemp;

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
    @JoinColumn(name = "\"PARTICIPANT_ID\"", nullable = true)
    private ParticipantEntity participant;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        InvestorAccountEntity that = (InvestorAccountEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/fractionation/api/models/entity/InvestorEntity.java

```java
package com.nubo.operations.fractionation.api.models.entity;

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

    @Column(name = "\"MONEY_LAUNDERING_FLAG\"")
    private Boolean moneyLaunderingFlag;

    @Column(name = "\"TAX_EXEMP\"")
    private Boolean taxExemp;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        InvestorEntity that = (InvestorEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/fractionation/api/models/entity/MarketEntity.java

```java
package com.nubo.operations.fractionation.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
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
@Table(name = "\"MARKET\"", schema = "\"NUANBODB\"")
public class MarketEntity {

    @Id
    @Column(name = "\"MARKET_ID\"", length = 2)
    private String id;

    @Column(name = "\"DESCRIPTION\"", length = 80)
    private String description;

    @Column(name = "\"CATEGORY\"", length = 50)
    private String category;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        MarketEntity that = (MarketEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/fractionation/api/models/entity/MilaDepositoryEntity.java

```java
package com.nubo.operations.fractionation.api.models.entity;

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
@Table(name = "\"MILA_DEPOSITORY\"", schema = "\"NUANBODB\"")
public class MilaDepositoryEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"MILA_DEPOSITORY_ID\"")
    private Long id;

    @Column(name = "\"CODE\"", length = 80)
    private String code;

    @Column(name = "\"IDENTIFICATION_TYPE_ID\"", nullable = false)
    private Long identificationTypeId;

    @Column(name = "\"DOCUMENT_NUMBER\"", length = 20)
    private String documentNumber;

    @Column(name = "\"DIRECT_DEPOSITORY_NUMBER\"", length = 80)
    private String directDepositoryNumber;

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof MilaDepositoryEntity that)) {
            return false;
        }
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/fractionation/api/models/entity/PackageCustodianEntity.java

```java
package com.nubo.operations.fractionation.api.models.entity;

import java.math.BigDecimal;
import java.time.LocalDate;
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
@Builder(toBuilder = true)
@NoArgsConstructor
@AllArgsConstructor
@Entity
@IdClass(PackageCustodianKey.class)
@Table(name = "\"PACKAGE_CUSTODIAN\"", schema = "\"NUANBODB\"")
public class PackageCustodianEntity {

    @Id
    @Column(name = "\"PACKAGE_CUSTODIAN_ID\"", nullable = false)
    private Long packageCustodianId;

    @Id
    @Column(name = "\"MARKET_ID\"", nullable = false)
    private String marketId;

    @Id
    @Column(name = "\"PACKAGE_DATE\"", nullable = false)
    private LocalDate packageDate;

    @Column(name = "\"PARTICIPANT_CODE\"", length = 6, nullable = false)
    private String participantCode;

    @Column(name = "\"SEQUENCE\"", nullable = false)
    private Long sequence;

    @Column(name = "\"CODE_SCB\"", length = 3)
    private String codeScb;

    @Column(name = "\"PACKAGE_NUMBER\"", length = 18, nullable = false)
    private String packageNumber;

    @ManyToOne
    @JoinColumn(name = "\"SIDE_ID\"", nullable = false)
    private SideEntity side;

    @ManyToOne
    @JoinColumn(name = "\"INVESTOR_ID\"", nullable = false)
    private InvestorEntity investor;

    @ManyToOne
    @JoinColumn(name = "\"PARTICIPANT_ID\"", nullable = false)
    private ParticipantEntity participant;

    @ManyToOne
    @JoinColumn(name = "\"INVESTOR_ACCOUNT_ID\"", nullable = false)
    private InvestorAccountEntity investorAccount;

    @Column(name = "\"ISIN_NUMBER_ID\"", nullable = false)
    private Long isinNumberId;

    @ManyToOne
    @JoinColumn(name = "\"SECURITY_ID\"", nullable = false)
    private SecurityTitleEntity security;

    @ManyToOne
    @JoinColumn(name = "\"TYPE_ID\"", nullable = false)
    private TypeEntity type;

    @ManyToOne
    @JoinColumn(name = "\"DEPOSITORY_ID\"", nullable = false)
    private DepositoryEntity depository;

    @Column(name = "\"CLEARING_DATE\"")
    private LocalDate clearingDate;

    @Column(name = "\"RETURN_CLEARING_DATE\"")
    private LocalDate returnClearingDate;

    @ManyToOne
    @JoinColumn(name = "\"PACKAGE_STATUS_ID\"", nullable = false)
    private StatusEntity packageStatus;

    @ManyToOne
    @JoinColumn(name = "\"CUSTODIAN_ID\"", nullable = false)
    private ParticipantEntity custodian;

    @ManyToOne
    @JoinColumn(name = "\"FIC_ADMINISTRATOR_ID\"")
    private ParticipantEntity ficAdministrator;

    @Column(name = "\"TOTAL_FRACTION_QUANTITY\"", precision = 24, scale = 4)
    private BigDecimal totalFractionQuantity;

    @Column(name = "\"AVERAGE_PRICE\"", precision = 16, scale = 4)
    private BigDecimal averagePrice;

    @Column(name = "\"TOTAL_FRACTION_VOLUME\"", precision = 24, scale = 4)
    private BigDecimal totalFractionVolume;

    @Column(name = "\"TOTAL_NET_AMOUNT\"", precision = 24, scale = 4)
    private BigDecimal totalNetAmount;

    @Column(name = "\"TOTAL_COMMISSION_AMOUNT\"", precision = 24, scale = 4)
    private BigDecimal totalCommissionAmount;

    @Column(name = "\"TOTAL_VAL_TAX_AMOUNT\"", precision = 24, scale = 4)
    private BigDecimal totalValTaxAmount;

    @Column(name = "\"CLEARING_PERCENTAGE\"", precision = 6, scale = 4)
    private BigDecimal clearingPercentage;

    @Column(name = "\"AVERAGE_FRACTION_VOLUME\"", precision = 24, scale = 4)
    private BigDecimal averageFractionVolume;

    @Column(name = "\"RETURN_NET_AMOUNT\"", precision = 24, scale = 4)
    private BigDecimal returnNetAmount;

    @Column(name = "\"AVERAGE_RATE\"", precision = 16, scale = 4)
    private BigDecimal averageRate;

    @Column(name = "\"REFERENCE_PACKAGE\"", length = 10)
    private String referencePackage;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 250, nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50)
    private String lastModifyIp;

    @ManyToOne
    @JoinColumn(name = "\"OLD_INVESTOR_ACCOUNT_ID\"")
    private InvestorAccountEntity oldInvestorAccount;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        PackageCustodianEntity that = (PackageCustodianEntity) o;
        return Objects.equals(packageCustodianId, that.packageCustodianId)
                && Objects.equals(marketId, that.marketId)
                && Objects.equals(packageDate, that.packageDate);
    }

    @Override
    public int hashCode() {
        return Objects.hash(packageCustodianId, marketId, packageDate);
    }
}

```

## src/main/java/com/nubo/operations/fractionation/api/models/entity/PackageCustodianHistoryEntity.java

```java
package com.nubo.operations.fractionation.api.models.entity;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
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
@IdClass(PackageCustodianHistoryKey.class)
@Table(name = "\"PACKAGE_CUSTODIAN_HISTORY\"", schema = "\"NUANBODB\"")
public class PackageCustodianHistoryEntity {

    @Id
    @Column(name = "\"PACKAGE_CUSTODIAN_ID\"", nullable = false)
    private Long packageCustodianId;

    @Id
    @Column(name = "\"MARKET_ID\"", nullable = false)
    private String marketId;

    @Id
    @Column(name = "\"PACKAGE_DATE\"", nullable = false)
    private LocalDate packageDate;

    @Id
    @Column(name = "\"EVENT_TIME\"", nullable = false)
    private OffsetDateTime eventTime;

    @Column(name = "\"PARTICIPANT_CODE\"", length = 3, nullable = false)
    private String participantCode;

    @Column(name = "\"SEQUENCE\"", nullable = false)
    private Long sequence;

    @Column(name = "\"CODE_SCB\"", length = 3)
    private String codeScb;

    @Column(name = "\"PACKAGE_NUMBER\"", length = 18, nullable = false)
    private String packageNumber;

    @ManyToOne
    @JoinColumn(name = "\"SIDE_ID\"", nullable = false)
    private SideEntity side;

    @ManyToOne
    @JoinColumn(name = "\"INVESTOR_ID\"", nullable = false)
    private InvestorEntity investor;

    @ManyToOne
    @JoinColumn(name = "\"GENERATING_PARTICIPANT_ID\"", nullable = false)
    private ParticipantEntity generatingParticipant;

    @ManyToOne
    @JoinColumn(name = "\"INVESTOR_ACCOUNT_ID\"", nullable = false)
    private InvestorAccountEntity investorAccount;

    @ManyToOne
    @JoinColumn(name = "\"CUSTODIAN_STATUS_ID\"", nullable = false)
    private StatusEntity custodianStatus;

    @ManyToOne
    @JoinColumn(name = "\"CUSTODIAN_ID\"", nullable = false)
    private ParticipantEntity custodian;

    @ManyToOne
    @JoinColumn(name = "\"FIC_ADMINISTRATOR_ID\"")
    private ParticipantEntity ficAdministrator;

    @Column(name = "\"REJECTION_REASON_ID\"")
    private Long rejectionReasonId;

    @Column(name = "\"TOTAL_FRACTION_QUANTITY\"", precision = 24, scale = 4)
    private BigDecimal totalFractionQuantity;

    @Column(name = "\"TOTAL_FRACTION_VOLUME\"", precision = 24, scale = 4)
    private BigDecimal totalFractionVolume;

    @Column(name = "\"TOTAL_NET_AMOUNT\"", precision = 24, scale = 4)
    private BigDecimal totalNetAmount;

    @Column(name = "\"TOTAL_COMMISSION_AMOUNT\"", precision = 24, scale = 4)
    private BigDecimal totalCommissionAmount;

    @Column(name = "\"TOTAL_VAL_TAX_AMOUNT\"", precision = 24, scale = 4)
    private BigDecimal totalValTaxAmount;

    @Column(name = "\"AVERAGE_PRICE\"", precision = 16, scale = 4)
    private BigDecimal averagePrice;

    @Column(name = "\"CLEARING_DATE\"")
    private LocalDate clearingDate;

    @Column(name = "\"RETURN_CLEARING_DATE\"")
    private LocalDate returnClearingDate;

    @Column(name = "\"AVERAGE_FRACTION_VOLUME\"", precision = 24, scale = 4)
    private BigDecimal averageFractionVolume;

    @Column(name = "\"AVERAGE_RATE\"", precision = 16, scale = 4)
    private BigDecimal averageRate;

    @Column(name = "\"RETURN_NET_AMOUNT\"", precision = 24, scale = 4)
    private BigDecimal returnNetAmount;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 250, nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50)
    private String lastModifyIp;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        PackageCustodianHistoryEntity that = (PackageCustodianHistoryEntity) o;
        return Objects.equals(packageCustodianId, that.packageCustodianId)
                && Objects.equals(marketId, that.marketId)
                && Objects.equals(packageDate, that.packageDate)
                && Objects.equals(eventTime, that.eventTime);
    }

    @Override
    public int hashCode() {
        return Objects.hash(packageCustodianId, marketId, packageDate, eventTime);
    }
}

```

## src/main/java/com/nubo/operations/fractionation/api/models/entity/PackageCustodianHistoryKey.java

```java
package com.nubo.operations.fractionation.api.models.entity;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.OffsetDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PackageCustodianHistoryKey implements Serializable {

    private Long packageCustodianId;

    private String marketId;

    private LocalDate packageDate;

    private OffsetDateTime eventTime;
}

```

## src/main/java/com/nubo/operations/fractionation/api/models/entity/PackageCustodianKey.java

```java
package com.nubo.operations.fractionation.api.models.entity;

import java.io.Serializable;
import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PackageCustodianKey implements Serializable {

    private Long packageCustodianId;

    private String marketId;

    private LocalDate packageDate;
}

```

## src/main/java/com/nubo/operations/fractionation/api/models/entity/PackageDetailEntity.java

```java
package com.nubo.operations.fractionation.api.models.entity;

import java.time.LocalDate;
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
@Builder(toBuilder = true)
@NoArgsConstructor
@AllArgsConstructor
@Entity
@IdClass(PackageDetailKey.class)
@Table(name = "\"PACKAGE_DETAIL\"", schema = "\"NUANBODB\"")
public class PackageDetailEntity {

    @Id
    @Column(name = "\"PACKAGE_CUSTODIAN_ID\"", nullable = false)
    private Long packageCustodianId;

    @Id
    @Column(name = "\"MARKET_ID\"", nullable = false)
    private String marketId;

    @Id
    @Column(name = "\"PACKAGE_DATE\"", nullable = false)
    private LocalDate packageDate;

    @Id
    @Column(name = "\"TRADE_ID\"", nullable = false)
    private Long tradeId;

    @Id
    @Column(name = "\"SIDE_ID\"", length = 2, nullable = false)
    private String sideId;

    @Id
    @Column(name = "\"UNIQUE_FRACTION_ID\"", nullable = false)
    private Long uniqueFractionId;

    @Column(name = "\"PARTICIPANT_CODE\"", length = 6, nullable = false)
    private String participantCode;

    @Column(name = "\"SEQUENCE\"", nullable = false)
    private Long sequence;

    @Column(name = "\"PACKAGE_NUMBER\"", length = 18, nullable = false)
    private String packageNumber;

    @Column(name = "\"MATCH_DATE\"", nullable = false)
    private LocalDate matchDate;

    @ManyToOne
    @JoinColumn(name = "\"INVESTOR_ID\"", nullable = false)
    private InvestorEntity investor;

    @ManyToOne
    @JoinColumn(name = "\"CUSTODIAN_ID\"")
    private ParticipantEntity custodian;

    @ManyToOne
    @JoinColumn(name = "\"PARTICIPANT_ID\"", nullable = false)
    private ParticipantEntity participant;

    @ManyToOne
    @JoinColumn(name = "\"PACKAGE_STATUS_ID\"", nullable = false)
    private StatusEntity packageStatus;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 250, nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50)
    private String lastModifyIp;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        PackageDetailEntity that = (PackageDetailEntity) o;
        return Objects.equals(packageCustodianId, that.packageCustodianId)
                && Objects.equals(marketId, that.marketId)
                && Objects.equals(packageDate, that.packageDate)
                && Objects.equals(tradeId, that.tradeId)
                && Objects.equals(sideId, that.sideId)
                && Objects.equals(uniqueFractionId, that.uniqueFractionId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(packageCustodianId, marketId, packageDate, tradeId, sideId, uniqueFractionId);
    }
}

```

## src/main/java/com/nubo/operations/fractionation/api/models/entity/PackageDetailKey.java

```java
package com.nubo.operations.fractionation.api.models.entity;

import java.io.Serializable;
import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PackageDetailKey implements Serializable {

    private Long packageCustodianId;

    private String marketId;

    private LocalDate packageDate;

    private Long tradeId;

    private String sideId;

    private Long uniqueFractionId;
}

```

## src/main/java/com/nubo/operations/fractionation/api/models/entity/ParticipantAccountEntity.java

```java
package com.nubo.operations.fractionation.api.models.entity;

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

    @Column(name = "\"IND_MASTER\"")
    private Boolean indMaster;

    @Column(name = "\"TAX_EXEMP\"")
    private Boolean taxExemp;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ParticipantAccountEntity that = (ParticipantAccountEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/fractionation/api/models/entity/ParticipantEntity.java

```java
package com.nubo.operations.fractionation.api.models.entity;

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

import java.time.LocalDate;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ParticipantEntity that = (ParticipantEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/fractionation/api/models/entity/SecurityTitleEntity.java

```java
package com.nubo.operations.fractionation.api.models.entity;

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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        SecurityTitleEntity that = (SecurityTitleEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/fractionation/api/models/entity/SettlementCorrectionEntity.java

```java
package com.nubo.operations.fractionation.api.models.entity;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

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
@Table(name = "\"SETTLEMENT_CORRECTIONS\"", schema = "\"NUANBODB\"")
public class SettlementCorrectionEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"SETTLEMENT_CORRECTIONS_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"TRADE_ID\"", nullable = false)
    private Long tradeId;

    @Column(name = "\"FRACTION\"", nullable = false)
    private Integer fraction;

    @ManyToOne
    @JoinColumn(name = "\"SIDE_ID\"", nullable = false)
    private SideEntity side;

    @Column(name = "\"REQUEST_DATE\"")
    private LocalDate requestDate;

    @Column(name = "\"REQUEST_TIME\"")
    private LocalTime requestTime;

    @ManyToOne
    @JoinColumn(name = "\"PROCESS_TYPE_ID\"", nullable = false)
    private TypeEntity processType;

    @ManyToOne
    @JoinColumn(name = "\"INVESTOR_ACCOUNT_ID\"")
    private InvestorAccountEntity investorAccount;

    @ManyToOne
    @JoinColumn(name = "\"PARTICIPANT_ACCOUNT_ID\"")
    private ParticipantAccountEntity participantAccount;

    @ManyToOne
    @JoinColumn(name = "\"REASSIGNMENT_TYPE_ID\"", nullable = false)
    private TypeEntity reassignmentType;

    @Column(name = "\"DETAIL\"", length = 255)
    private String detail;

    @Column(name = "\"CORRECTION_NUMBER\"", length = 15)
    private String correctionNumber;

    @Column(name = "\"CLEARING_DATE\"")
    private LocalDate clearingDate;

    @Column(name = "\"COMMISSION_PERCENTAGE\"", precision = 10, scale = 4)
    private BigDecimal commissionPercentage;

    @Column(name = "\"REFERENCE\"", length = 255)
    private String reference;

    @Column(name = "\"FRACTION_QUANTITY\"", precision = 16, scale = 4)
    private BigDecimal fractionQuantity;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 250, nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50, nullable = false)
    private String lastModifyIp;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"", nullable = false)
    private StatusEntity status;

    @ManyToOne
    @JoinColumn(name = "\"SOURCE_QUOTE_TYPE_ID\"")
    private TypeEntity sourceQuoteType;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;

        SettlementCorrectionEntity that = (SettlementCorrectionEntity) o;

        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/fractionation/api/models/entity/SettlementEntity.java

```java
package com.nubo.operations.fractionation.api.models.entity;

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

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Objects;

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

    @Column(name = "\"UNIQUE_FRACTION_ID\"", nullable = false)
    private Long uniqueFractionId;

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
    @JoinColumn(name = "\"TRADING_SYSTEM_ID\"", nullable = false)
    private TradingSystemEntity tradingSystem;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"", nullable = false)
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

    @ManyToOne
    @JoinColumn(name = "\"DIRECT_DEPOSITOR\"")
    private DirectDepositoryEntity directDepositor;

    @Column(name = "\"CASH_ACCOUNT\"", precision = 20, scale = 0)
    private BigDecimal cashAccount;

    @Column(name = "\"IND_MASTER\"")
    private Boolean indMaster;

    @ManyToOne
    @JoinColumn(name = "\"CUSTODIAN_STATUS_ID\"")
    private StatusEntity custodianStatus;

    @Column(name = "\"TRANSFER_PARTICIPANT_ID\"")
    private Long transferParticipantId;

    @ManyToOne
    @JoinColumn(name = "\"MILA_DIRECT_DEPOSITOR\"")
    private MilaDepositoryEntity milaDirectDepositor;

    @Column(name = "\"REFERENCE_PACKAGE\"")
    private String referencePackage;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 30, nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 30, nullable = false)
    private String lastModifyIp;

    @Column(name = "\"MATCH_DATE\"")
    private LocalDate matchDate;

    @Column(name = "\"MARKET_ID\"")
    private String marketId;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        SettlementEntity that = (SettlementEntity) o;
        return Objects.equals(trade, that.trade) && Objects.equals(fraction, that.fraction)
                && Objects.equals(side, that.side);
    }

    @Override
    public int hashCode() {
        return Objects.hash(trade, fraction, side);
    }
}

```

## src/main/java/com/nubo/operations/fractionation/api/models/entity/SettlementKey.java

```java
package com.nubo.operations.fractionation.api.models.entity;

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

## src/main/java/com/nubo/operations/fractionation/api/models/entity/SideEntity.java

```java
package com.nubo.operations.fractionation.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
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
@Table(name = "\"SIDE\"", schema = "\"NUANBODB\"")
public class SideEntity {

    @Id
    @Column(name = "\"SIDE_ID\"", length = 2)
    private String id;

    @Column(name = "\"DESCRIPTION\"", length = 80, nullable = false)
    private String description;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        SideEntity that = (SideEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/fractionation/api/models/entity/StatusEntity.java

```java
package com.nubo.operations.fractionation.api.models.entity;

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
    @Column(name = "\"STATUS_ID\"")
    private Long id;

    @Column(name = "\"DESCRIPTION\"", length = 80, nullable = false)
    private String description;

    @Column(name = "\"CATEGORY\"", length = 30, nullable = false)
    private String category;

    @Column(name = "\"SHORTNAME\"")
    private String shortName;

    @Column(name = "\"DETAIL\"", length = 255)
    private String detail;

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

## src/main/java/com/nubo/operations/fractionation/api/models/entity/TaxesEntity.java

```java
package com.nubo.operations.fractionation.api.models.entity;

import java.math.BigDecimal;
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

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        TaxesEntity that = (TaxesEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/fractionation/api/models/entity/TradeEntity.java

```java
package com.nubo.operations.fractionation.api.models.entity;

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
import java.time.LocalDateTime;
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
    private Long matchId;

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
    @JoinColumn(name="\"MARKET_ID\"", nullable = false)
    private MarketEntity market;

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

    @Column(name = "\"AUTOMATIC_ASSIGNMENT_MARK_BUY\"")
    private Boolean automaticMarkBuy;

    @Column(name = "\"AUTOMATIC_ASSIGNMENT_MARK_SELL\"")
    private Boolean automaticMarkSell;

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
    @JoinColumn(name = "\"TRADING_SYSTEM_ID\"")
    private TradingSystemEntity tradingSystem;

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

    @Column(name = "\"SETTLEMENT_INDICATOR_OUTGOING\"")
    private Boolean settlementIndicatorOutgoing;

    @Column(name = "\"SETTLEMENT_INDICATOR_RETURN\"")
    private Boolean settlementIndicatorReturn;

    @Column(name = "\"RESETTLEMENT_INDICATOR_ADVANCE\"")
    private Boolean resettlementIndicatorAdvance;

    @Column(name = "\"SPECIAL_TRADE_ID\"")
    private Long specialTradeId;

    @ManyToOne
    @JoinColumn(name = "\"CUSTODIAN_STATUS_ID\"")
    private StatusEntity custodianStatus;

    @Column(name = "\"PURCHASE_PAYMENT_INDICATOR\"")
    private Boolean purchasePaymentIndicator;

    @Column(name = "\"RETURN_INDICATOR_SETTLEMENT\"")
    private Boolean returnIndicatorSettlement;

    @ManyToOne
    @JoinColumn(name = "\"SELL_STATUS_ID\"")
    private StatusEntity sellStatus;

    @ManyToOne
    @JoinColumn(name = "\"BUY_STATUS_ID\"")
    private StatusEntity buyStatus;

    @Column(name = "\"IND_MASTER_BUY\"")
    private Boolean indMasterBuy;

    @Column(name = "\"IND_MASTER_SELL\"")
    private Boolean indMasterSell;

    @Column(name = "\"FORWARD_PRICE\"", precision = 12, scale = 6)
    private BigDecimal forwardPrice;

    @Column(name = "\"FINAL_ASSIGNMENT_MARK_BUY\"")
    private Boolean finalAssignmentMarkBuy;

    @Column(name = "\"FINAL_ASSIGNMENT_MARK_SELL\"")
    private Boolean finalAssignmentMarkSell;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 250, nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50, nullable = false)
    private String lastModifyIp;

    @ManyToOne
    @JoinColumn(name = "\"SOURCE_QUOTE_BUY_TYPE\"")
    private TypeEntity sourceQuoteBuyType;

    @ManyToOne
    @JoinColumn(name = "\"SOURCE_QUOTE_SELL_TYPE\"")
    private TypeEntity sourceQuoteSellType;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TradeEntity that = (TradeEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

}

```

## src/main/java/com/nubo/operations/fractionation/api/models/entity/TradeStatusHistoryEntity.java

```java
package com.nubo.operations.fractionation.api.models.entity;

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
@Builder(toBuilder = true)
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"TRADE_STATUS_HISTORY\"", schema = "\"NUANBODB\"")
@IdClass(TradeStatusHistoryKey.class)
public class TradeStatusHistoryEntity {

    @Id
    @Column(name = "\"TRADE_ID\"", nullable = false)
    private Long tradeId;

    @Id
    @Column(name = "\"TIME\"", nullable = false)
    private LocalDateTime time;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"")
    private StatusEntity status;

    @Column(name = "\"DETAIL\"", length = 255)
    private String detail;

    @ManyToOne
    @JoinColumn(name = "\"SIDE_ID\"")
    private SideEntity side;

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
        TradeStatusHistoryEntity that = (TradeStatusHistoryEntity) o;
        return Objects.equals(tradeId, that.tradeId) && Objects.equals(time, that.time);
    }

    @Override
    public int hashCode() {
        return Objects.hash(tradeId, time);
    }
}

```

## src/main/java/com/nubo/operations/fractionation/api/models/entity/TradeStatusHistoryKey.java

```java
package com.nubo.operations.fractionation.api.models.entity;

import java.io.Serializable;
import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TradeStatusHistoryKey implements Serializable {

    private Long tradeId;

    private LocalDateTime time;
}

```

## src/main/java/com/nubo/operations/fractionation/api/models/entity/TradingSessionEntity.java

```java
package com.nubo.operations.fractionation.api.models.entity;

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
@Table(name = "\"TRADING_SESSION\"", schema = "\"NUANBODB\"")
public class TradingSessionEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"TRADING_SESSION_ID\"", length = 2)
    private String id;

    @Column(name = "\"DESCRIPTION\"", length = 80)
    private String description;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TradingSessionEntity that = (TradingSessionEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/fractionation/api/models/entity/TradingSystemEntity.java

```java
package com.nubo.operations.fractionation.api.models.entity;

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
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TradingSystemEntity that = (TradingSystemEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/fractionation/api/models/entity/TypeEntity.java

```java
package com.nubo.operations.fractionation.api.models.entity;

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

## src/main/java/com/nubo/operations/fractionation/api/models/entity/UserNuboEntity.java

```java
package com.nubo.operations.fractionation.api.models.entity;

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

import java.time.LocalDateTime;
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

    @Column(name = "\"PREVIOUS_SESSION\"", nullable = false)
    private Boolean previousSession;

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
        UserNuboEntity that = (UserNuboEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}


```

## src/main/java/com/nubo/operations/fractionation/api/models/enums/BusinessRuleEnum.java

```java
package com.nubo.operations.fractionation.api.models.enums;

import java.util.Arrays;
import java.util.Objects;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum BusinessRuleEnum {

    RULE_ASSIGNMENT("RULE_ASSIGNMENT"),
    RULE_REASSIGNMENT("RULE_REASSIGNMENT"),
    RULE_CUSTODIAN_ACCEPT("RULE_CUSTODIAN_ACCEPT"),
    RULE_ASSIGNMENT_OWN_POSITION("RULE_ASSIGNMENT_OWN_POSITION");

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

## src/main/java/com/nubo/operations/fractionation/api/models/enums/PropertiesEnum.java

```java
package com.nubo.operations.fractionation.api.models.enums;

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

## src/main/java/com/nubo/operations/fractionation/api/models/enums/ReassignmentTypeEnum.java

```java
package com.nubo.operations.fractionation.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum ReassignmentTypeEnum {

    INITIAL(2130L),
    CURRENT(2131L);

    private final Long id;

    public static boolean isInitial(Long typeId) {
        return typeId != null && INITIAL.getId().equals(typeId);
    }

    public static boolean isCurrent(Long typeId) {
        return typeId != null && CURRENT.getId().equals(typeId);
    }
}

```

## src/main/java/com/nubo/operations/fractionation/api/models/enums/SideEnum.java

```java
package com.nubo.operations.fractionation.api.models.enums;

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
    OTHER("0");

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
                .orElseThrow(() -> new IllegalArgumentException("Side not implemented: " + value));
    }
}

```

## src/main/java/com/nubo/operations/fractionation/api/models/enums/StatusEnum.java

```java
package com.nubo.operations.fractionation.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum StatusEnum {

    NOT_STATUS(0L, "NO ESTADO", ""),
    CUSTODIAN_PACKAGE_CREATE(1075L, "CREADO", "CUSTODIO"),
    CORRECTION_REQUEST(7L, "SOLICITADA", "REASIGNACION_CORRECCION"),
    CORRECTION_ACCEPTED(9L, "ACEPTADA", "REASIGNACION_CORRECCION"),
    CORRECTION_REJECTED(10L, "RECHAZADA", "REASIGNACION_CORRECCION"),
    ACCEPTED(15L, "ACEPTADA", "ASIGNACION"),
    CUSTODIAN_TRANSFERRED(1071L, "TRASLADADA", "CUSTODIO"),
    CUSTODIAN_PRE_MATCH(1072L, "PRE-MATCH", "CUSTODIO"),
    CUSTODIAN_ADMITTED(1073L, "ADMITIDA", "CUSTODIO"),
    CUSTODIAN_REJECTED(1074L, "RECHAZADA", "CUSTODIO");

    private final long id;
    private final String description;
    private final String category;

}

```

## src/main/java/com/nubo/operations/fractionation/api/models/enums/TaxesEnum.java

```java
package com.nubo.operations.fractionation.api.models.enums;

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

## src/main/java/com/nubo/operations/fractionation/api/models/enums/TypeEnum.java

```java
package com.nubo.operations.fractionation.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Arrays;
import java.util.Objects;

@Getter
@RequiredArgsConstructor
public enum TypeEnum {

    MASTER_ACCOUNT(24L),
    OWN_POSITION_POINT_ORIGIN(121L);

    private final Long value;

    public static TypeEnum fromValue(Long value) {
        return Arrays.stream(TypeEnum.values())
                .filter(status -> Objects.equals(status.value, value))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Unknown value: " + value));
    }

}

```

## src/main/java/com/nubo/operations/fractionation/api/models/enums/VersionApiEnum.java

```java
package com.nubo.operations.fractionation.api.models.enums;

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

## src/main/java/com/nubo/operations/fractionation/api/repository/DirectDepositoryRepository.java

```java
package com.nubo.operations.fractionation.api.repository;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.operations.fractionation.api.models.entity.DirectDepositoryEntity;

public interface DirectDepositoryRepository extends JpaRepository<DirectDepositoryEntity, Long> {

    Optional<DirectDepositoryEntity> findFirstByParticipantIdOrderByIdAsc(Long participantId);

    List<DirectDepositoryEntity> findAllByParticipantIdInOrderByParticipantIdAscIdAsc(
            Collection<Long> participantIds);
}

```

## src/main/java/com/nubo/operations/fractionation/api/repository/InvestorAccountRepository.java

```java
package com.nubo.operations.fractionation.api.repository;

import com.nubo.operations.fractionation.api.models.entity.InvestorAccountEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InvestorAccountRepository extends JpaRepository<InvestorAccountEntity, Long> {
}

```

## src/main/java/com/nubo/operations/fractionation/api/repository/MilaDepositoryRepository.java

```java
package com.nubo.operations.fractionation.api.repository;

import com.nubo.operations.fractionation.api.models.entity.MilaDepositoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MilaDepositoryRepository extends JpaRepository<MilaDepositoryEntity, Long> {

    Optional<MilaDepositoryEntity> findFirstByIdentificationTypeIdAndDocumentNumber(
            Long identificationTypeId,
            String documentNumber
    );
}

```

## src/main/java/com/nubo/operations/fractionation/api/repository/PackageCustodianHistoryRepository.java

```java
package com.nubo.operations.fractionation.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.operations.fractionation.api.models.entity.PackageCustodianHistoryEntity;
import com.nubo.operations.fractionation.api.models.entity.PackageCustodianHistoryKey;

public interface PackageCustodianHistoryRepository
        extends JpaRepository<PackageCustodianHistoryEntity, PackageCustodianHistoryKey> {

}

```

## src/main/java/com/nubo/operations/fractionation/api/repository/PackageCustodianRepository.java

```java
package com.nubo.operations.fractionation.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.operations.fractionation.api.models.entity.PackageCustodianEntity;
import com.nubo.operations.fractionation.api.models.entity.PackageCustodianKey;

public interface PackageCustodianRepository extends JpaRepository<PackageCustodianEntity, PackageCustodianKey> {

}

```

## src/main/java/com/nubo/operations/fractionation/api/repository/PackageDetailRepository.java

```java
package com.nubo.operations.fractionation.api.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.nubo.operations.fractionation.api.models.entity.PackageDetailEntity;
import com.nubo.operations.fractionation.api.models.entity.PackageDetailKey;

public interface PackageDetailRepository extends JpaRepository<PackageDetailEntity, PackageDetailKey> {

    @Query("""
            SELECT pde FROM PackageDetailEntity pde
            WHERE pde.uniqueFractionId = :uniqueFractionId
            AND pde.tradeId = :tradeId
            AND pde.packageStatus.id != :packageStatusId
            """)
    Optional<PackageDetailEntity> findByUniqueFractionIdAndTradeIdExcludingStatus(
            Long uniqueFractionId, Long tradeId, Long packageStatusId);

}

```

## src/main/java/com/nubo/operations/fractionation/api/repository/ParticipantAccountRepository.java

```java
package com.nubo.operations.fractionation.api.repository;

import com.nubo.operations.fractionation.api.models.entity.ParticipantAccountEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ParticipantAccountRepository extends JpaRepository<ParticipantAccountEntity, Long> {
}

```

## src/main/java/com/nubo/operations/fractionation/api/repository/ParticipantRepository.java

```java
package com.nubo.operations.fractionation.api.repository;

import com.nubo.operations.fractionation.api.models.entity.ParticipantEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ParticipantRepository extends JpaRepository<ParticipantEntity, Long> {
}

```

## src/main/java/com/nubo/operations/fractionation/api/repository/SettlementCorrectionRepository.java

```java
package com.nubo.operations.fractionation.api.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.nubo.operations.fractionation.api.models.entity.SettlementCorrectionEntity;
import com.nubo.operations.fractionation.api.models.entity.StatusEntity;

public interface SettlementCorrectionRepository extends JpaRepository<SettlementCorrectionEntity, Long> {

    Optional<SettlementCorrectionEntity> findByCorrectionNumberAndReassignmentTypeId(
            String correctionNumber,
            Long reassignmentTypeId);

    @Modifying(clearAutomatically = true, flushAutomatically = false)
    @Query("""
            UPDATE SettlementCorrectionEntity sc
            SET sc.status = :status,
                sc.lastModifyUser = :lastModifyUser,
                sc.lastModifyApplication = :lastModifyApplication,
                sc.lastModifyDate = :lastModifyDate
            WHERE sc.id IN :ids
            """)
    int bulkUpdateStatusByIds(
            @Param("ids") List<Long> ids,
            @Param("status") StatusEntity status,
            @Param("lastModifyUser") String lastModifyUser,
            @Param("lastModifyApplication") String lastModifyApplication,
            @Param("lastModifyDate") java.time.LocalDateTime lastModifyDate);

}

```

## src/main/java/com/nubo/operations/fractionation/api/repository/SettlementRepository.java

```java
package com.nubo.operations.fractionation.api.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.nubo.operations.fractionation.api.models.entity.SettlementEntity;
import com.nubo.operations.fractionation.api.models.entity.SettlementKey;
import org.springframework.data.repository.query.Param;

public interface SettlementRepository extends JpaRepository<SettlementEntity, SettlementKey>,
        JpaSpecificationExecutor<SettlementEntity> {

    @Modifying(clearAutomatically = true, flushAutomatically = false)
    @Query("DELETE FROM SettlementEntity s WHERE s.trade.id = :tradeId AND s.side.id = :sideId")
    int deleteByTradeIdAndSideId(Long tradeId, String sideId);

    @Modifying(clearAutomatically = false, flushAutomatically = false)
    @Query("DELETE FROM SettlementEntity s WHERE s.trade.id = :tradeId AND s.side.id = :sideId")
    int deleteByTradeIdAndSideIdPreservingContext(Long tradeId, String sideId);

    @Query("""
            SELECT s FROM SettlementEntity s JOIN s.trade t JOIN s.side si
            WHERE t.id  = :tradeId
            AND s.fraction = :fraction
            AND si.id = :sideId
            """)
    Optional<SettlementEntity> findByTradeIdAndFractionAndSideId(Long tradeId, Integer fraction, String sideId);

    @Query("""
            SELECT s FROM SettlementEntity s JOIN s.trade t JOIN s.side si
            WHERE t.id  = :tradeId
            AND si.id = :sideId
            """)
    List<SettlementEntity> findByTradeIdAndSideId(Long tradeId, String sideId);

    @Query("""
                SELECT MAX(s.fraction) FROM SettlementEntity s
                WHERE s.trade.id = :tradeId
                AND s.side.id = :sideId
            """)
    Optional<Integer> findMaxFractionByTradeIdAndSideId(Long tradeId, String sideId);

    @Query("""
                SELECT s FROM SettlementEntity s
                WHERE s.trade.id = :tradeId
                AND s.side.id = :sideId
            """)
    List<SettlementEntity> findAllByTradeIdAndSideId(Long tradeId, String sideId);

    /**
     * Adquiere un lock lógico transaccional en Postgres (pg_advisory_xact_lock)
     * usando como llave la combinación tradeId + sideId.
     * <p>
     * A diferencia de un SELECT ... FOR UPDATE, este lock NO depende de que
     * existan filas en la tabla, por lo que sí protege el caso en el que dos
     * usuarios concurrentes ejecutan por primera vez la asignación sobre el
     * mismo trade+side (phantom insert).
     * <p>
     * La segunda petición queda en espera hasta que la primera transacción
     * hace commit/rollback; luego continúa el flujo normal (delete + insert),
     * por lo que la última asignación prevalece SIN lanzar errores.
     * <p>
     * El lock se libera automáticamente al finalizar la transacción actual.
     */
    @Query(value = "SELECT pg_advisory_xact_lock(hashtextextended(:key, 0))", nativeQuery = true)
    void acquireAdvisoryLockOnTradeSide(@Param("key") String key);

}

```

## src/main/java/com/nubo/operations/fractionation/api/repository/SideRepository.java

```java
package com.nubo.operations.fractionation.api.repository;

import com.nubo.operations.fractionation.api.models.entity.SideEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SideRepository extends JpaRepository<SideEntity, String> {
}

```

## src/main/java/com/nubo/operations/fractionation/api/repository/StatusRepository.java

```java
package com.nubo.operations.fractionation.api.repository;

import com.nubo.operations.fractionation.api.models.entity.StatusEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface StatusRepository extends JpaRepository<StatusEntity, Long> {
    Optional<StatusEntity> findByCategoryIgnoreCaseAndDescriptionIgnoreCase(String category, String description);
}

```

## src/main/java/com/nubo/operations/fractionation/api/repository/TaxesRepository.java

```java
package com.nubo.operations.fractionation.api.repository;

import com.nubo.operations.fractionation.api.models.entity.TaxesEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface TaxesRepository extends JpaRepository<TaxesEntity, Long> {

    @Query("SELECT t FROM TaxesEntity t JOIN t.country c " +
            "WHERE c.id = :countryId AND t.code = :code")
    Optional<TaxesEntity> findByCountryIdAndCode(Long countryId, String code);

}

```

## src/main/java/com/nubo/operations/fractionation/api/repository/TradeRepository.java

```java
package com.nubo.operations.fractionation.api.repository;

import com.nubo.operations.fractionation.api.models.entity.TradeEntity;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.nubo.operations.fractionation.api.repository.projection.TradeParticipantProjection;

public interface TradeRepository extends JpaRepository<TradeEntity, Long>, JpaSpecificationExecutor<TradeEntity> {

    @EntityGraph(attributePaths = {
            "type",
            "participantBuy",
            "participantSell",
            "custodianBuy",
            "custodianSell",
            "tradingSystem",
            "buyStatus",
            "sellStatus",
            "status"
    })
    Optional<TradeEntity> findById(Long id);

    @Query("""
            select t.id as tradeId,
                   participantBuy.id as participantBuyId,
                   participantSell.id as participantSellId
            from TradeEntity t
            left join t.participantBuy participantBuy
            left join t.participantSell participantSell
            where t.id in :tradeIds
            """)
    List<TradeParticipantProjection> findParticipantIdsByIdIn(@Param("tradeIds") Collection<Long> tradeIds);
}

```

## src/main/java/com/nubo/operations/fractionation/api/repository/TradeStatusHistoryRepository.java

```java
package com.nubo.operations.fractionation.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.operations.fractionation.api.models.entity.TradeStatusHistoryEntity;
import com.nubo.operations.fractionation.api.models.entity.TradeStatusHistoryKey;


public interface TradeStatusHistoryRepository extends JpaRepository<TradeStatusHistoryEntity, TradeStatusHistoryKey> {

}

```

## src/main/java/com/nubo/operations/fractionation/api/repository/TypeRepository.java

```java
package com.nubo.operations.fractionation.api.repository;

import com.nubo.operations.fractionation.api.models.entity.TypeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TypeRepository extends JpaRepository<TypeEntity, Long> {
}

```

## src/main/java/com/nubo/operations/fractionation/api/repository/UserNuboRepository.java

```java
package com.nubo.operations.fractionation.api.repository;

import com.nubo.operations.fractionation.api.models.entity.UserNuboEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface UserNuboRepository extends JpaRepository<UserNuboEntity, Long> {

    @Query("SELECT u FROM UserNuboEntity u " +
            "WHERE u.userName = :userName")
    Optional<UserNuboEntity> findByUserName(String userName);

}

```

## src/main/java/com/nubo/operations/fractionation/api/repository/projection/TradeParticipantProjection.java

```java
package com.nubo.operations.fractionation.api.repository.projection;

/**
 * Batch-only read model. It intentionally contains only the identifiers needed
 * to resolve the participant for a trade side.
 */
public interface TradeParticipantProjection {

    Long getTradeId();

    Long getParticipantBuyId();

    Long getParticipantSellId();
}

```

## src/main/java/com/nubo/operations/fractionation/api/service/BatchAssignmentService.java

```java
package com.nubo.operations.fractionation.api.service;

import com.nubo.operations.fractionation.api.models.dto.request.BatchAssignmentInDto;
import com.nubo.operations.fractionation.api.models.dto.response.BatchAssignmentOutDto;

public interface BatchAssignmentService {

    BatchAssignmentOutDto process(BatchAssignmentInDto request);
}

```

## src/main/java/com/nubo/operations/fractionation/api/service/BatchCacheService.java

```java
package com.nubo.operations.fractionation.api.service;

import com.nubo.operations.fractionation.api.models.entity.*;

import java.util.Optional;

public interface BatchCacheService {

    Optional<SideEntity> validateSide(String sideId);

    Optional<StatusEntity> validateStatus(Long statusId);

    Optional<TypeEntity> validateType(Long typeId);

    Optional<InvestorAccountEntity> validateInvestorAccount(Long investorAccountId);

    Optional<ParticipantAccountEntity> validateParticipantAccount(Long participantAccountId);

    Optional<MilaDepositoryEntity> validateMilaDepositor(Long milaDepositoryId);


}

```

## src/main/java/com/nubo/operations/fractionation/api/service/BatchFractionationService.java

```java
package com.nubo.operations.fractionation.api.service;

import java.util.List;

import com.nubo.operations.fractionation.api.client.operation.rules.models.dto.response.StatusUpdateTradeOutDto;
import com.nubo.operations.fractionation.api.models.dto.request.FractionInDto;
import com.nubo.operations.fractionation.api.models.dto.response.SettlementOutDto;
import com.nubo.operations.fractionation.api.models.domain.BatchPreparedReferences;

public interface BatchFractionationService {

    List<SettlementOutDto> createFractions(Long tradeId, String sideId, List<FractionInDto> fractions,
            BatchPreparedReferences references, StatusUpdateTradeOutDto prevalidatedRules);

    List<SettlementOutDto> updateAssignment(Long tradeId, String sideId, List<FractionInDto> fractions,
            BatchPreparedReferences references, StatusUpdateTradeOutDto prevalidatedRules);
}

```

## src/main/java/com/nubo/operations/fractionation/api/service/CustodianService.java

```java
package com.nubo.operations.fractionation.api.service;

import java.util.List;

import com.nubo.operations.fractionation.api.models.entity.PackageCustodianHistoryEntity;
import com.nubo.operations.fractionation.api.models.entity.SettlementEntity;
import com.nubo.operations.fractionation.api.models.entity.StatusEntity;

public interface CustodianService {

    PackageCustodianHistoryEntity createPackageCustodianHistoryEntity(SettlementEntity settlementEntity,
            StatusEntity newCustodianStatus);

    void savePackageCustodianHistoryEntity(List<PackageCustodianHistoryEntity> packageCustodianHistoryEntityList);

}

```

## src/main/java/com/nubo/operations/fractionation/api/service/FractionationService.java

```java
package com.nubo.operations.fractionation.api.service;

import com.nubo.operations.fractionation.api.models.dto.request.CorrectionInDto;
import com.nubo.operations.fractionation.api.models.dto.request.FractionInDto;
import com.nubo.operations.fractionation.api.models.dto.response.SettlementOutDto;

import java.util.List;

public interface FractionationService {

    List<SettlementOutDto> createFractions(Long tradeId, String sideId, List<FractionInDto> fractionInDtoList);

    List<SettlementOutDto> updateAssignment(Long tradeId, String sideId, List<FractionInDto> fractionInDtoList);

    List<SettlementOutDto> updateCorrection(Long tradeId, String sideId,
            List<CorrectionInDto> correctionInDtoList);

    SettlementOutDto createCorrectionNewFraction(Long tradeId, String sideId, Integer fraction,
                                                 Long settlementCorrectionInitial, Long settlementCorrectionActual);
}

```

## src/main/java/com/nubo/operations/fractionation/api/service/impl/BatchAssignmentHibernateStatisticsDiagnostics.java

```java
package com.nubo.operations.fractionation.api.service.impl;

import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.metamodel.EntityType;
import jakarta.persistence.metamodel.Metamodel;
import org.hibernate.SessionFactory;
import org.hibernate.stat.EntityStatistics;
import org.hibernate.stat.Statistics;
import org.springframework.stereotype.Component;

import com.nubo.operations.fractionation.api.application.properties.AssignmentPersistenceProperties;
import com.nubo.operations.fractionation.api.models.entity.SettlementEntity;
import com.nubo.operations.fractionation.api.models.entity.TradeEntity;
import com.nubo.operations.fractionation.api.models.entity.TradeStatusHistoryEntity;

import lombok.RequiredArgsConstructor;

/**
 * Read-only Hibernate Statistics snapshots for controlled assignment benchmarks.
 * Hibernate exposes counters at SessionFactory/pod scope, therefore this component
 * never clears them and reports only before/after deltas.
 */
@Component
@RequiredArgsConstructor
public class BatchAssignmentHibernateStatisticsDiagnostics {

    private final EntityManagerFactory entityManagerFactory;
    private final AssignmentPersistenceProperties persistenceProperties;

    public Snapshot capture() {
        if (!persistenceProperties.isHibernateStatisticsEnabled()) {
            return Snapshot.disabled();
        }

        SessionFactory sessionFactory = entityManagerFactory.unwrap(SessionFactory.class);
        Statistics statistics = sessionFactory.getStatistics();
        if (!statistics.isStatisticsEnabled()) {
            return Snapshot.unavailable();
        }

        return new Snapshot(true, true,
                statistics.getPrepareStatementCount(),
                statistics.getEntityLoadCount(),
                statistics.getEntityInsertCount(),
                statistics.getEntityUpdateCount(),
                statistics.getEntityDeleteCount(),
                statistics.getEntityFetchCount(),
                statistics.getCollectionFetchCount(),
                statistics.getFlushCount(),
                statistics.getTransactionCount(),
                statistics.getSuccessfulTransactionCount(),
                statistics.getOptimisticFailureCount(),
                entitySnapshot(sessionFactory, statistics, SettlementEntity.class),
                entitySnapshot(sessionFactory, statistics, TradeEntity.class),
                entitySnapshot(sessionFactory, statistics, TradeStatusHistoryEntity.class));
    }

    public Delta delta(Snapshot before, Snapshot after) {
        if (!before.available() || !after.available()) {
            return Delta.unavailable(before.requested() || after.requested());
        }
        return new Delta(true, true, counterResetDetected(before, after),
                difference(after.prepareStatementCount(), before.prepareStatementCount()),
                difference(after.entityLoadCount(), before.entityLoadCount()),
                difference(after.entityInsertCount(), before.entityInsertCount()),
                difference(after.entityUpdateCount(), before.entityUpdateCount()),
                difference(after.entityDeleteCount(), before.entityDeleteCount()),
                difference(after.entityFetchCount(), before.entityFetchCount()),
                difference(after.collectionFetchCount(), before.collectionFetchCount()),
                difference(after.flushCount(), before.flushCount()),
                difference(after.transactionCount(), before.transactionCount()),
                difference(after.successfulTransactionCount(), before.successfulTransactionCount()),
                difference(after.optimisticFailureCount(), before.optimisticFailureCount()),
                EntityDelta.of(before.settlement(), after.settlement()),
                EntityDelta.of(before.trade(), after.trade()),
                EntityDelta.of(before.history(), after.history()));
    }

    private EntitySnapshot entitySnapshot(SessionFactory sessionFactory, Statistics statistics, Class<?> entityType) {
        Metamodel metamodel = sessionFactory.getMetamodel();
        EntityType<?> entity = metamodel.entity(entityType);
        EntityStatistics entityStatistics = statistics.getEntityStatistics(entity.getName());
        return new EntitySnapshot(entityStatistics.getLoadCount(), entityStatistics.getInsertCount(),
                entityStatistics.getUpdateCount(), entityStatistics.getDeleteCount(), entityStatistics.getFetchCount());
    }

    private boolean counterResetDetected(Snapshot before, Snapshot after) {
        return decreased(after.prepareStatementCount(), before.prepareStatementCount())
                || decreased(after.entityLoadCount(), before.entityLoadCount())
                || decreased(after.entityInsertCount(), before.entityInsertCount())
                || decreased(after.entityUpdateCount(), before.entityUpdateCount())
                || decreased(after.entityDeleteCount(), before.entityDeleteCount())
                || decreased(after.entityFetchCount(), before.entityFetchCount())
                || decreased(after.collectionFetchCount(), before.collectionFetchCount())
                || decreased(after.flushCount(), before.flushCount())
                || decreased(after.transactionCount(), before.transactionCount())
                || decreased(after.successfulTransactionCount(), before.successfulTransactionCount())
                || decreased(after.optimisticFailureCount(), before.optimisticFailureCount())
                || entityCounterResetDetected(before.settlement(), after.settlement())
                || entityCounterResetDetected(before.trade(), after.trade())
                || entityCounterResetDetected(before.history(), after.history());
    }

    private boolean entityCounterResetDetected(EntitySnapshot before, EntitySnapshot after) {
        return decreased(after.loadCount(), before.loadCount())
                || decreased(after.insertCount(), before.insertCount())
                || decreased(after.updateCount(), before.updateCount())
                || decreased(after.deleteCount(), before.deleteCount())
                || decreased(after.fetchCount(), before.fetchCount());
    }

    private boolean decreased(long after, long before) {
        return after < before;
    }

    private long difference(long after, long before) {
        return Math.max(0L, after - before);
    }

    public record Snapshot(boolean requested, boolean available, long prepareStatementCount, long entityLoadCount,
            long entityInsertCount, long entityUpdateCount, long entityDeleteCount, long entityFetchCount,
            long collectionFetchCount, long flushCount, long transactionCount, long successfulTransactionCount,
            long optimisticFailureCount, EntitySnapshot settlement, EntitySnapshot trade, EntitySnapshot history) {

        static Snapshot disabled() {
            return new Snapshot(false, false, 0L, 0L, 0L, 0L, 0L, 0L, 0L, 0L, 0L, 0L, 0L,
                    EntitySnapshot.EMPTY, EntitySnapshot.EMPTY, EntitySnapshot.EMPTY);
        }

        static Snapshot unavailable() {
            return new Snapshot(true, false, 0L, 0L, 0L, 0L, 0L, 0L, 0L, 0L, 0L, 0L, 0L,
                    EntitySnapshot.EMPTY, EntitySnapshot.EMPTY, EntitySnapshot.EMPTY);
        }
    }

    public record Delta(boolean requested, boolean available, boolean counterResetDetected,
            long prepareStatementCount, long entityLoadCount,
            long entityInsertCount, long entityUpdateCount, long entityDeleteCount, long entityFetchCount,
            long collectionFetchCount, long flushCount, long transactionCount, long successfulTransactionCount,
            long optimisticFailureCount, EntityDelta settlement, EntityDelta trade, EntityDelta history) {

        static Delta unavailable(boolean requested) {
            return new Delta(requested, false, false, 0L, 0L, 0L, 0L, 0L, 0L, 0L, 0L, 0L, 0L, 0L,
                    EntityDelta.EMPTY, EntityDelta.EMPTY, EntityDelta.EMPTY);
        }
    }

    public record EntitySnapshot(long loadCount, long insertCount, long updateCount, long deleteCount,
            long fetchCount) {

        private static final EntitySnapshot EMPTY = new EntitySnapshot(0L, 0L, 0L, 0L, 0L);
    }

    public record EntityDelta(long loadCount, long insertCount, long updateCount, long deleteCount,
            long fetchCount) {

        private static final EntityDelta EMPTY = new EntityDelta(0L, 0L, 0L, 0L, 0L);

        private static EntityDelta of(EntitySnapshot before, EntitySnapshot after) {
            return new EntityDelta(Math.max(0L, after.loadCount() - before.loadCount()),
                    Math.max(0L, after.insertCount() - before.insertCount()),
                    Math.max(0L, after.updateCount() - before.updateCount()),
                    Math.max(0L, after.deleteCount() - before.deleteCount()),
                    Math.max(0L, after.fetchCount() - before.fetchCount()));
        }
    }
}

```

## src/main/java/com/nubo/operations/fractionation/api/service/impl/BatchAssignmentItemProcessor.java

```java
package com.nubo.operations.fractionation.api.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.http.HttpStatus;

import com.nubo.operations.fractionation.api.exception.ClientException;
import com.nubo.operations.fractionation.api.exception.ServiceException;
import com.nubo.operations.fractionation.api.exception.error.ErrorCode;
import com.nubo.operations.fractionation.api.models.dto.request.BatchAssignmentItemInDto;
import com.nubo.operations.fractionation.api.models.dto.response.BatchAssignmentItemOutDto;
import com.nubo.operations.fractionation.api.models.dto.response.SettlementOutDto;
import com.nubo.operations.fractionation.api.models.domain.BatchPreparedReferences;
import com.nubo.operations.fractionation.api.client.operation.rules.models.dto.response.StatusUpdateTradeOutDto;
import com.nubo.operations.fractionation.api.service.BatchFractionationService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BatchAssignmentItemProcessor {

    private static final String ASSIGNMENT = "A";
    private static final String REASSIGNMENT = "R";

    private final BatchFractionationService batchFractionationService;
    private final BatchAssignmentPerformanceContext performanceContext;

    public BatchAssignmentItemOutDto process(BatchAssignmentItemInDto item,
            BatchPreparedReferences references) {
        return process(item, references, null);
    }

    public BatchAssignmentItemOutDto process(BatchAssignmentItemInDto item,
            BatchPreparedReferences references, StatusUpdateTradeOutDto prevalidatedRules) {
        performanceContext.begin();
        List<SettlementOutDto> settlements = null;
        RuntimeException failure = null;
        try {
            if (!ASSIGNMENT.equalsIgnoreCase(item.getOperationType())
                    && !REASSIGNMENT.equalsIgnoreCase(item.getOperationType())) {
                throw new ServiceException(ErrorCode.BAD_REQUEST, HttpStatus.BAD_REQUEST);
            }
            settlements = createOrUpdate(item, references, prevalidatedRules);
        } catch (RuntimeException ex) {
            failure = ex;
        }

        BatchAssignmentPerformanceContext.ItemMetrics metrics = performanceContext.finish();
        if (failure == null) {
            return BatchAssignmentItemOutDto.builder()
                    .itemId(item.getItemId())
                    .topic(item.getTopic())
                    .partition(item.getPartition())
                    .offset(item.getOffset())
                    .key(item.getKey())
                    .correlationId(item.getCorrelationId())
                    .tradeId(item.getTradeId())
                    .sideId(item.getSideId())
                    .success(true)
                    .settlements(settlements)
                    .rulesMs(metrics.rulesMs())
                    .calculationsMs(metrics.calculationsMs())
                    .dbMs(metrics.dbMs())
                    .build();
        }

        return BatchAssignmentItemOutDto.builder()
                .itemId(item.getItemId())
                .topic(item.getTopic())
                .partition(item.getPartition())
                .offset(item.getOffset())
                .key(item.getKey())
                .correlationId(item.getCorrelationId())
                .tradeId(item.getTradeId())
                .sideId(item.getSideId())
                .success(false)
                .settlements(List.of())
                .errorCode(errorCode(failure))
                .errorMessage(failure.getMessage())
                .rulesMs(metrics.rulesMs())
                .calculationsMs(metrics.calculationsMs())
                .dbMs(metrics.dbMs())
                .build();
    }

    private List<SettlementOutDto> createOrUpdate(BatchAssignmentItemInDto item,
            BatchPreparedReferences references, StatusUpdateTradeOutDto prevalidatedRules) {
        if (ASSIGNMENT.equalsIgnoreCase(item.getOperationType())) {
            return batchFractionationService.createFractions(item.getTradeId(), item.getSideId(), item.getFractions(),
                    references, prevalidatedRules);
        }
        if (REASSIGNMENT.equalsIgnoreCase(item.getOperationType())) {
            return batchFractionationService.updateAssignment(item.getTradeId(), item.getSideId(), item.getFractions(),
                    references, prevalidatedRules);
        }
        throw new ServiceException(ErrorCode.BAD_REQUEST, HttpStatus.BAD_REQUEST);
    }

    private String errorCode(RuntimeException failure) {
        if (failure instanceof ServiceException serviceException) {
            return serviceException.getErrorCode().name();
        }
        if (failure instanceof ClientException clientException) {
            return clientException.getErrorCode().name();
        }
        return "UNEXPECTED";
    }
}

```

## src/main/java/com/nubo/operations/fractionation/api/service/impl/BatchAssignmentPerformanceContext.java

```java
package com.nubo.operations.fractionation.api.service.impl;

import org.springframework.stereotype.Component;

@Component
public class BatchAssignmentPerformanceContext {

    private final ThreadLocal<ItemMetrics> current = new ThreadLocal<>();
    private final ThreadLocal<ItemMetrics> lastFinished = new ThreadLocal<>();

    public void begin() {
        lastFinished.remove();
        current.set(ItemMetrics.EMPTY);
    }

    public void capture(ItemMetrics metrics) {
        if (current.get() != null) {
            current.set(metrics);
        }
    }

    public ItemMetrics finish() {
        ItemMetrics metrics = current.get();
        current.remove();
        ItemMetrics result = metrics == null ? ItemMetrics.EMPTY : metrics;
        lastFinished.set(result);
        return result;
    }

    public ItemMetrics consumeLastFinished() {
        ItemMetrics metrics = lastFinished.get();
        lastFinished.remove();
        return metrics == null ? ItemMetrics.EMPTY : metrics;
    }

    public record ItemMetrics(long serviceItemMs, long performanceFinalizeMs, long rulesMs, long legacyRulesMs,
            long applyPrevalidatedRulesMs,
            long calculationsMs, long buildSettlementsMs, long mappingMs, long settlementsCreated,
            long settlementsDeleted, long dbMs,
            long loadTradeMs, long loadSettlementMs, long deleteSettlementMs,
            long directDepositoryMs, long directDepositoryRepositoryMs,
            long directDepositoryPrefetchedResolutionMs, long saveSettlementMs, long custodyHistoryMs,
            long updateTradeMs, long tradeSaveMs, long saveHistoryMs, long flushMs,
            long repositoryCalls, long loadTradeCalls, long loadSettlementCalls,
            long deleteSettlementCalls, long directDepositoryCalls, long saveSettlementCalls, long historyCalls,
            long updateTradeCalls, long tradeSaveCalls, long flushCalls, long rulesHttpCalls, long calculationsHttpCalls,
            long referenceResolutionMs) {
        private static final ItemMetrics EMPTY = new ItemMetrics(0L, 0L, 0L, 0L, 0L, 0L, 0L, 0L, 0L, 0L,
                0L, 0L, 0L, 0L, 0L, 0L, 0L, 0L, 0L, 0L, 0L, 0L, 0L, 0L, 0L,
                0L, 0L, 0L, 0L, 0L, 0L, 0L, 0L, 0L, 0L, 0L);
    }
}

```

## src/main/java/com/nubo/operations/fractionation/api/service/impl/BatchAssignmentPersistenceDiagnosticsContext.java

```java
package com.nubo.operations.fractionation.api.service.impl;

import java.util.List;

import org.springframework.stereotype.Component;

/**
 * Observes the JPA state of the Trade instance used by one synchronous batch
 * item. It deliberately has no participation in persistence or transaction
 * decisions; callers activate it only when diagnostics are enabled.
 */
@Component
public class BatchAssignmentPersistenceDiagnosticsContext {

    private final ThreadLocal<ItemPersistenceMetrics> current = new ThreadLocal<>();

    public void begin() {
        current.set(ItemPersistenceMetrics.EMPTY);
    }

    public void recordAfterLoad(boolean managed) {
        update(metrics -> metrics.withAfterLoad(managed));
    }

    public void recordBeforeDelete(boolean managed) {
        update(metrics -> metrics.withBeforeDelete(managed));
    }

    public void recordAfterDelete(boolean managed) {
        update(metrics -> metrics.withAfterDelete(managed));
    }

    public void recordBeforeUpdate(boolean managed) {
        update(metrics -> metrics.withBeforeUpdate(managed));
    }

    public void recordBeforeSave(boolean managed) {
        update(metrics -> metrics.withBeforeSave(managed));
    }

    public void recordAfterSave(boolean managed, boolean returnedEntityManaged) {
        update(metrics -> metrics.withAfterSave(managed, returnedEntityManaged));
    }

    public ItemPersistenceMetrics finishAndClear() {
        ItemPersistenceMetrics metrics = current.get();
        current.remove();
        return metrics == null ? ItemPersistenceMetrics.EMPTY : metrics;
    }

    public void clear() {
        current.remove();
    }

    public BatchPersistenceMetrics summarize(List<ItemPersistenceMetrics> itemMetrics) {
        return new BatchPersistenceMetrics(itemMetrics.size(),
                sum(itemMetrics, ItemPersistenceMetrics::afterLoadObserved),
                sum(itemMetrics, ItemPersistenceMetrics::afterLoadManaged),
                sum(itemMetrics, ItemPersistenceMetrics::beforeDeleteObserved),
                sum(itemMetrics, ItemPersistenceMetrics::beforeDeleteManaged),
                sum(itemMetrics, ItemPersistenceMetrics::afterDeleteObserved),
                sum(itemMetrics, ItemPersistenceMetrics::afterDeleteManaged),
                sum(itemMetrics, ItemPersistenceMetrics::beforeUpdateObserved),
                sum(itemMetrics, ItemPersistenceMetrics::beforeUpdateManaged),
                sum(itemMetrics, ItemPersistenceMetrics::beforeSaveObserved),
                sum(itemMetrics, ItemPersistenceMetrics::beforeSaveManaged),
                sum(itemMetrics, ItemPersistenceMetrics::afterSaveObserved),
                sum(itemMetrics, ItemPersistenceMetrics::afterSaveManaged),
                sum(itemMetrics, ItemPersistenceMetrics::afterSaveReturnedObserved),
                sum(itemMetrics, ItemPersistenceMetrics::afterSaveReturnedManaged));
    }

    private void update(java.util.function.UnaryOperator<ItemPersistenceMetrics> updater) {
        ItemPersistenceMetrics metrics = current.get();
        if (metrics != null) {
            current.set(updater.apply(metrics));
        }
    }

    private long sum(List<ItemPersistenceMetrics> metrics,
            java.util.function.ToLongFunction<ItemPersistenceMetrics> selector) {
        return metrics.stream().mapToLong(selector).sum();
    }

    public record ItemPersistenceMetrics(long afterLoadObserved, long afterLoadManaged,
            long beforeDeleteObserved, long beforeDeleteManaged,
            long afterDeleteObserved, long afterDeleteManaged,
            long beforeUpdateObserved, long beforeUpdateManaged,
            long beforeSaveObserved, long beforeSaveManaged,
            long afterSaveObserved, long afterSaveManaged,
            long afterSaveReturnedObserved, long afterSaveReturnedManaged) {

        public static final ItemPersistenceMetrics EMPTY = new ItemPersistenceMetrics(0L, 0L, 0L, 0L, 0L,
                0L, 0L, 0L, 0L, 0L, 0L, 0L, 0L, 0L);

        private ItemPersistenceMetrics withAfterLoad(boolean managed) {
            return new ItemPersistenceMetrics(1L, asLong(managed), beforeDeleteObserved, beforeDeleteManaged,
                    afterDeleteObserved, afterDeleteManaged, beforeUpdateObserved, beforeUpdateManaged,
                    beforeSaveObserved, beforeSaveManaged, afterSaveObserved, afterSaveManaged,
                    afterSaveReturnedObserved, afterSaveReturnedManaged);
        }

        private ItemPersistenceMetrics withBeforeDelete(boolean managed) {
            return new ItemPersistenceMetrics(afterLoadObserved, afterLoadManaged, 1L, asLong(managed),
                    afterDeleteObserved, afterDeleteManaged, beforeUpdateObserved, beforeUpdateManaged,
                    beforeSaveObserved, beforeSaveManaged, afterSaveObserved, afterSaveManaged,
                    afterSaveReturnedObserved, afterSaveReturnedManaged);
        }

        private ItemPersistenceMetrics withAfterDelete(boolean managed) {
            return new ItemPersistenceMetrics(afterLoadObserved, afterLoadManaged, beforeDeleteObserved,
                    beforeDeleteManaged, 1L, asLong(managed), beforeUpdateObserved, beforeUpdateManaged,
                    beforeSaveObserved, beforeSaveManaged, afterSaveObserved, afterSaveManaged,
                    afterSaveReturnedObserved, afterSaveReturnedManaged);
        }

        private ItemPersistenceMetrics withBeforeUpdate(boolean managed) {
            return new ItemPersistenceMetrics(afterLoadObserved, afterLoadManaged, beforeDeleteObserved,
                    beforeDeleteManaged, afterDeleteObserved, afterDeleteManaged, 1L, asLong(managed),
                    beforeSaveObserved, beforeSaveManaged, afterSaveObserved, afterSaveManaged,
                    afterSaveReturnedObserved, afterSaveReturnedManaged);
        }

        private ItemPersistenceMetrics withBeforeSave(boolean managed) {
            return new ItemPersistenceMetrics(afterLoadObserved, afterLoadManaged, beforeDeleteObserved,
                    beforeDeleteManaged, afterDeleteObserved, afterDeleteManaged, beforeUpdateObserved,
                    beforeUpdateManaged, 1L, asLong(managed), afterSaveObserved, afterSaveManaged,
                    afterSaveReturnedObserved, afterSaveReturnedManaged);
        }

        private ItemPersistenceMetrics withAfterSave(boolean managed, boolean returnedEntityManaged) {
            return new ItemPersistenceMetrics(afterLoadObserved, afterLoadManaged, beforeDeleteObserved,
                    beforeDeleteManaged, afterDeleteObserved, afterDeleteManaged, beforeUpdateObserved,
                    beforeUpdateManaged, beforeSaveObserved, beforeSaveManaged, 1L, asLong(managed), 1L,
                    asLong(returnedEntityManaged));
        }

        private static long asLong(boolean value) {
            return value ? 1L : 0L;
        }
    }

    public record BatchPersistenceMetrics(long items,
            long afterLoadObserved, long afterLoadManaged,
            long beforeDeleteObserved, long beforeDeleteManaged,
            long afterDeleteObserved, long afterDeleteManaged,
            long beforeUpdateObserved, long beforeUpdateManaged,
            long beforeSaveObserved, long beforeSaveManaged,
            long afterSaveObserved, long afterSaveManaged,
            long afterSaveReturnedObserved, long afterSaveReturnedManaged) {
    }
}

```

## src/main/java/com/nubo/operations/fractionation/api/service/impl/BatchAssignmentPrefetchMetrics.java

```java
package com.nubo.operations.fractionation.api.service.impl;

public record BatchAssignmentPrefetchMetrics(
        long tradeRequested,
        long tradeUnique,
        long tradeRepositoryCalls,
        long tradeRowsLoaded,
        long tradeProjectionMs,
        long directDepositoryRequested,
        long directDepositoryUniqueParticipants,
        long directDepositoryRepositoryCalls,
        long directDepositoryRowsLoaded,
        long directDepositorySelectedRows,
        long directDepositoryPrefetchMs,
        long investorAccountRequested,
        long investorAccountUnique,
        long investorAccountRepositoryCalls,
        long investorAccountRowsLoaded,
        long investorAccountMs,
        long participantAccountRequested,
        long participantAccountUnique,
        long participantAccountRepositoryCalls,
        long participantAccountRowsLoaded,
        long participantAccountMs,
        long milaDepositoryRequested,
        long milaDepositoryUnique,
        long milaDepositoryRepositoryCalls,
        long milaDepositoryRowsLoaded,
        long milaDepositoryMs,
        long sideRequested,
        long sideUnique,
        long sideRepositoryCalls,
        long sideRowsLoaded,
        long sideMs,
        long typeRequested,
        long typeUnique,
        long typeRepositoryCalls,
        long typeRowsLoaded,
        long typeMs,
        long knownStatusRequested,
        long knownStatusUnique,
        long statusRepositoryCalls,
        long statusRowsLoaded,
        long statusMs,
        long totalRepositoryCalls,
        long estimatedReadsBefore,
        long totalMs,
        String result) {

    public static BatchAssignmentPrefetchMetrics empty(String result) {
        return new BatchAssignmentPrefetchMetrics(
                0L, 0L, 0L, 0L, 0L,
                0L, 0L, 0L, 0L, 0L, 0L,
                0L, 0L, 0L, 0L, 0L,
                0L, 0L, 0L, 0L, 0L,
                0L, 0L, 0L, 0L, 0L,
                0L, 0L, 0L, 0L, 0L,
                0L, 0L, 0L, 0L, 0L,
                0L, 0L, 0L, 0L, 0L,
                0L, 0L, 0L, result);
    }

    public long readsAvoided() {
        return Math.max(0L, estimatedReadsBefore - totalRepositoryCalls);
    }

    public long reductionPercent() {
        return estimatedReadsBefore == 0L ? 0L : Math.round(readsAvoided() * 100.0D / estimatedReadsBefore);
    }
}

```

## src/main/java/com/nubo/operations/fractionation/api/service/impl/BatchAssignmentPreparationService.java

```java
package com.nubo.operations.fractionation.api.service.impl;

import java.util.Collection;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
import java.util.function.Function;
import java.util.stream.Collectors;

import org.springframework.cache.Cache;
import org.springframework.cache.CacheManager;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.nubo.operations.fractionation.api.models.dto.request.BatchAssignmentInDto;
import com.nubo.operations.fractionation.api.models.dto.request.FractionInDto;
import com.nubo.operations.fractionation.api.models.domain.BatchDirectDepositoryLookup;
import com.nubo.operations.fractionation.api.models.dto.response.DirectDepositoryOutDto;
import com.nubo.operations.fractionation.api.helpers.MapperUtil;
import com.nubo.operations.fractionation.api.models.entity.DirectDepositoryEntity;
import com.nubo.operations.fractionation.api.models.entity.InvestorAccountEntity;
import com.nubo.operations.fractionation.api.models.entity.MilaDepositoryEntity;
import com.nubo.operations.fractionation.api.models.entity.ParticipantAccountEntity;
import com.nubo.operations.fractionation.api.models.entity.SideEntity;
import com.nubo.operations.fractionation.api.models.entity.StatusEntity;
import com.nubo.operations.fractionation.api.models.entity.TypeEntity;
import com.nubo.operations.fractionation.api.models.enums.TypeEnum;
import com.nubo.operations.fractionation.api.repository.InvestorAccountRepository;
import com.nubo.operations.fractionation.api.repository.DirectDepositoryRepository;
import com.nubo.operations.fractionation.api.repository.MilaDepositoryRepository;
import com.nubo.operations.fractionation.api.repository.ParticipantAccountRepository;
import com.nubo.operations.fractionation.api.repository.SideRepository;
import com.nubo.operations.fractionation.api.repository.StatusRepository;
import com.nubo.operations.fractionation.api.repository.TypeRepository;
import com.nubo.operations.fractionation.api.repository.TradeRepository;
import com.nubo.operations.fractionation.api.repository.projection.TradeParticipantProjection;
import com.nubo.operations.fractionation.api.models.enums.SideEnum;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * Batch-only, read-only preparation. Trade entities remain loaded inside each
 * item transaction; only a minimal participant projection is read here to
 * resolve DirectDepository in bulk.
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class BatchAssignmentPreparationService {

    private final InvestorAccountRepository investorAccountRepository;
    private final ParticipantAccountRepository participantAccountRepository;
    private final MilaDepositoryRepository milaDepositoryRepository;
    private final SideRepository sideRepository;
    private final TypeRepository typeRepository;
    private final StatusRepository statusRepository;
    private final TradeRepository tradeRepository;
    private final DirectDepositoryRepository directDepositoryRepository;
    private final CacheManager cacheManager;

    public BatchAssignmentPreparedContext prepare(BatchAssignmentInDto request) {
        long startedNanos = System.nanoTime();
        BatchKeys keys = BatchKeys.from(request);
        try {
            LoadResult<Long, TradeParticipantProjection> tradeParticipants = loadTradeParticipants(keys.tradeIds());
            ParticipantKeys directDepositoryParticipants = directDepositoryParticipants(request,
                    tradeParticipants.values());
            DirectDepositoryLoadResult directDepositories = loadDirectDepositories(
                    directDepositoryParticipants.participantIds());
            LoadResult<Long, InvestorAccountEntity> investorAccounts = loadById(investorAccountRepository,
                    keys.investorAccountIds(), InvestorAccountEntity::getId);
            LoadResult<Long, ParticipantAccountEntity> participantAccounts = loadById(participantAccountRepository,
                    keys.participantAccountIds(), ParticipantAccountEntity::getId);
            LoadResult<Long, MilaDepositoryEntity> milaDepositories = loadById(milaDepositoryRepository,
                    keys.milaDepositoryIds(), MilaDepositoryEntity::getId);
            LoadResult<String, SideEntity> sides = loadById(sideRepository, keys.sideIds(), SideEntity::getId);
            LoadResult<Long, TypeEntity> types = loadById(typeRepository, keys.typeIds(), TypeEntity::getId);
            LoadResult<Long, StatusEntity> knownStatuses = loadById(statusRepository, keys.knownStatusIds(), StatusEntity::getId);

            prime("investorAccounts", investorAccounts.values());
            prime("participantAccounts", participantAccounts.values());
            prime("milaDepositories", milaDepositories.values());
            prime("sides", sides.values());
            prime("types", types.values());
            prime("status", knownStatuses.values());

            BatchDirectDepositoryLookup directDepositoryLookup = directDepositoryLookup(directDepositories.values());
            BatchAssignmentPrefetchMetrics metrics = metrics(keys, tradeParticipants, directDepositoryParticipants,
                    directDepositories, directDepositoryLookup, investorAccounts, participantAccounts,
                    milaDepositories, sides, types, knownStatuses, "SUCCESS", startedNanos);
            return new BatchAssignmentPreparedContext(investorAccounts.values(), participantAccounts.values(),
                    milaDepositories.values(), sides.values(), types.values(), knownStatuses.values(),
                    tradeParticipants.values(), directDepositoryLookup, metrics);
        } catch (DataAccessException ex) {
            log.warn("PERF_BATCH_PREFETCH service=fracciones batchId={} result=FALLBACK exceptionType={} message={}",
                    request.getBatchId(), ex.getClass().getSimpleName(), ex.getMessage(), ex);
            return BatchAssignmentPreparedContext.empty(BatchAssignmentPrefetchMetrics.empty("FALLBACK"));
        }
    }

    private BatchAssignmentPrefetchMetrics metrics(BatchKeys keys,
            LoadResult<Long, TradeParticipantProjection> tradeParticipants,
            ParticipantKeys directDepositoryParticipants,
            DirectDepositoryLoadResult directDepositories,
            BatchDirectDepositoryLookup directDepositoryLookup,
            LoadResult<Long, InvestorAccountEntity> investorAccounts,
            LoadResult<Long, ParticipantAccountEntity> participantAccounts,
            LoadResult<Long, MilaDepositoryEntity> milaDepositories,
            LoadResult<String, SideEntity> sides,
            LoadResult<Long, TypeEntity> types,
            LoadResult<Long, StatusEntity> knownStatuses,
            String result, long startedNanos) {
        long tradeCalls = callsFor(keys.tradeIds());
        long directDepositoryCalls = callsFor(directDepositoryParticipants.participantIds());
        long investorCalls = callsFor(keys.investorAccountIds());
        long participantCalls = callsFor(keys.participantAccountIds());
        long milaCalls = callsFor(keys.milaDepositoryIds());
        long sideCalls = callsFor(keys.sideIds());
        long typeCalls = callsFor(keys.typeIds());
        long statusCalls = callsFor(keys.knownStatusIds());
        long totalCalls = tradeCalls + directDepositoryCalls + investorCalls + participantCalls + milaCalls + sideCalls
                + typeCalls + statusCalls;
        long estimatedBefore = keys.investorAccountIds().size() + keys.participantAccountIds().size()
                + keys.milaDepositoryIds().size() + keys.sideIds().size() + keys.typeIds().size()
                + keys.knownStatusIds().size() + directDepositoryParticipants.requested();
        return new BatchAssignmentPrefetchMetrics(
                keys.tradeRequested(), keys.tradeIds().size(), tradeCalls, tradeParticipants.values().size(), tradeParticipants.millis(),
                directDepositoryParticipants.requested(), directDepositoryParticipants.participantIds().size(),
                directDepositoryCalls, directDepositories.values().size(),
                directDepositoryLookup.directDepositoryIdByParticipantId().size(), directDepositories.millis(),
                keys.investorAccountRequested(), keys.investorAccountIds().size(), investorCalls, investorAccounts.values().size(), investorAccounts.millis(),
                keys.participantAccountRequested(), keys.participantAccountIds().size(), participantCalls, participantAccounts.values().size(), participantAccounts.millis(),
                keys.milaDepositoryRequested(), keys.milaDepositoryIds().size(), milaCalls, milaDepositories.values().size(), milaDepositories.millis(),
                keys.sideRequested(), keys.sideIds().size(), sideCalls, sides.values().size(), sides.millis(),
                keys.typeRequested(), keys.typeIds().size(), typeCalls, types.values().size(), types.millis(),
                keys.knownStatusRequested(), keys.knownStatusIds().size(), statusCalls, knownStatuses.values().size(), knownStatuses.millis(),
                totalCalls, estimatedBefore, (System.nanoTime() - startedNanos) / 1_000_000L, result);
    }

    private LoadResult<Long, TradeParticipantProjection> loadTradeParticipants(Set<Long> tradeIds) {
        if (tradeIds.isEmpty()) {
            return new LoadResult<>(Map.of(), 0L);
        }
        long startedNanos = System.nanoTime();
        List<TradeParticipantProjection> projections = tradeRepository.findParticipantIdsByIdIn(tradeIds);
        return new LoadResult<>(projections.stream().collect(Collectors.toMap(TradeParticipantProjection::getTradeId,
                Function.identity(), (left, ignored) -> left)), (System.nanoTime() - startedNanos) / 1_000_000L);
    }

    private ParticipantKeys directDepositoryParticipants(BatchAssignmentInDto request,
            Map<Long, TradeParticipantProjection> tradeParticipantsById) {
        long requested = 0L;
        Set<Long> participantIds = new LinkedHashSet<>();
        for (var item : request.getItems()) {
            if (item == null || item.getTradeId() == null) {
                continue;
            }
            TradeParticipantProjection trade = tradeParticipantsById.get(item.getTradeId());
            if (trade == null) {
                continue;
            }
            requested++;
            participantIds.add(participantIdForSide(item.getSideId(), trade));
        }
        return new ParticipantKeys(requested, participantIds);
    }

    private Long participantIdForSide(String sideId, TradeParticipantProjection trade) {
        if (SideEnum.BUY.getValue().equalsIgnoreCase(sideId)) {
            return Objects.requireNonNullElse(trade.getParticipantBuyId(), 0L);
        }
        if (SideEnum.SELL.getValue().equalsIgnoreCase(sideId)) {
            return Objects.requireNonNullElse(trade.getParticipantSellId(), 0L);
        }
        return 0L;
    }

    private DirectDepositoryLoadResult loadDirectDepositories(Set<Long> participantIds) {
        if (participantIds.isEmpty()) {
            return new DirectDepositoryLoadResult(List.of(), 0L);
        }
        long startedNanos = System.nanoTime();
        return new DirectDepositoryLoadResult(
                directDepositoryRepository.findAllByParticipantIdInOrderByParticipantIdAscIdAsc(participantIds),
                (System.nanoTime() - startedNanos) / 1_000_000L);
    }

    private BatchDirectDepositoryLookup directDepositoryLookup(List<DirectDepositoryEntity> directDepositories) {
        Map<Long, Long> ids = new java.util.LinkedHashMap<>();
        Map<Long, DirectDepositoryOutDto> outputs = new java.util.LinkedHashMap<>();
        directDepositories.forEach(directDepository -> {
            Long participantId = directDepository.getParticipant().getId();
            if (!ids.containsKey(participantId)) {
                ids.put(participantId, directDepository.getId());
                outputs.put(participantId, MapperUtil.directDepositoryEntityToDirectDepositoryOutDto(directDepository));
            }
        });
        return new BatchDirectDepositoryLookup(true, ids, outputs);
    }

    private long callsFor(Collection<?> ids) {
        return ids.isEmpty() ? 0L : 1L;
    }

    private <K, V> LoadResult<K, V> loadById(org.springframework.data.repository.CrudRepository<V, K> repository,
            Set<K> ids, Function<V, K> idExtractor) {
        if (ids.isEmpty()) {
            return new LoadResult<>(Map.of(), 0L);
        }
        long startedNanos = System.nanoTime();
        return new LoadResult<>(toMap(repository.findAllById(ids), idExtractor),
                (System.nanoTime() - startedNanos) / 1_000_000L);
    }

    private <K, V> Map<K, V> toMap(Iterable<V> values, Function<V, K> idExtractor) {
        return stream(values).collect(Collectors.toMap(idExtractor, Function.identity(), (left, ignored) -> left));
    }

    private <T> java.util.stream.Stream<T> stream(Iterable<T> values) {
        return java.util.stream.StreamSupport.stream(values.spliterator(), false);
    }

    private <K, V> void prime(String cacheName, Map<K, V> values) {
        Cache cache = cacheManager.getCache(cacheName);
        if (cache != null) {
            values.forEach(cache::put);
        }
    }

    private record LoadResult<K, V>(Map<K, V> values, long millis) {
    }

    private record DirectDepositoryLoadResult(List<DirectDepositoryEntity> values, long millis) {
    }

    private record ParticipantKeys(long requested, Set<Long> participantIds) {
    }

    private record BatchKeys(
            long tradeRequested,
            Set<Long> tradeIds,
            long investorAccountRequested,
            Set<Long> investorAccountIds,
            long participantAccountRequested,
            Set<Long> participantAccountIds,
            long milaDepositoryRequested,
            Set<Long> milaDepositoryIds,
            long sideRequested,
            Set<String> sideIds,
            long typeRequested,
            Set<Long> typeIds,
            long knownStatusRequested,
            Set<Long> knownStatusIds) {

        private static BatchKeys from(BatchAssignmentInDto request) {
            List<FractionInDto> fractions = request.getItems().stream()
                    .filter(Objects::nonNull)
                    .flatMap(item -> item.getFractions() == null ? java.util.stream.Stream.empty()
                            : item.getFractions().stream())
                    .filter(Objects::nonNull)
                    .toList();
            Set<Long> typeIds = ids(fractions, FractionInDto::getSourceQuoteTypeId);
            if (fractions.stream().anyMatch(fraction -> Boolean.TRUE.equals(fraction.getOwnPositionFraction()))) {
                typeIds.add(TypeEnum.OWN_POSITION_POINT_ORIGIN.getValue());
            }
            return new BatchKeys(
                    request.getItems().stream().filter(item -> item != null && item.getTradeId() != null).count(),
                    request.getItems().stream().filter(Objects::nonNull).map(item -> item.getTradeId())
                            .filter(Objects::nonNull).collect(Collectors.toCollection(LinkedHashSet::new)),
                    count(fractions, FractionInDto::getInvestorAccountId), ids(fractions, FractionInDto::getInvestorAccountId),
                    count(fractions, FractionInDto::getParticipantAccountId), ids(fractions, FractionInDto::getParticipantAccountId),
                    count(fractions, FractionInDto::getMilaDirectDepositorId), ids(fractions, FractionInDto::getMilaDirectDepositorId),
                    request.getItems().stream().filter(item -> item != null && item.getSideId() != null).count(),
                    request.getItems().stream().filter(Objects::nonNull).map(item -> item.getSideId())
                            .filter(Objects::nonNull).collect(Collectors.toCollection(LinkedHashSet::new)),
                    count(fractions, FractionInDto::getSourceQuoteTypeId), typeIds,
                    count(fractions, FractionInDto::getCustodianStatusId), ids(fractions, FractionInDto::getCustodianStatusId));
        }

        private static long count(List<FractionInDto> fractions, Function<FractionInDto, Long> extractor) {
            return fractions.stream().map(extractor).filter(Objects::nonNull).count();
        }

        private static Set<Long> ids(List<FractionInDto> fractions, Function<FractionInDto, Long> extractor) {
            return fractions.stream().map(extractor).filter(Objects::nonNull)
                    .collect(Collectors.toCollection(LinkedHashSet::new));
        }
    }
}

```

## src/main/java/com/nubo/operations/fractionation/api/service/impl/BatchAssignmentPreparedContext.java

```java
package com.nubo.operations.fractionation.api.service.impl;

import java.util.Map;

import com.nubo.operations.fractionation.api.models.entity.InvestorAccountEntity;
import com.nubo.operations.fractionation.api.models.entity.MilaDepositoryEntity;
import com.nubo.operations.fractionation.api.models.entity.ParticipantAccountEntity;
import com.nubo.operations.fractionation.api.models.entity.SideEntity;
import com.nubo.operations.fractionation.api.models.entity.StatusEntity;
import com.nubo.operations.fractionation.api.models.entity.TypeEntity;
import com.nubo.operations.fractionation.api.models.domain.BatchDirectDepositoryLookup;
import com.nubo.operations.fractionation.api.models.domain.BatchPreparedReferences;
import com.nubo.operations.fractionation.api.repository.projection.TradeParticipantProjection;

/**
 * Read-only snapshot used exclusively to prewarm the existing local reference
 * caches before a sequential batch is processed. Its entities are not passed to
 * transactional write methods, because they may be detached by then.
 */
public record BatchAssignmentPreparedContext(
        Map<Long, InvestorAccountEntity> investorAccountsById,
        Map<Long, ParticipantAccountEntity> participantAccountsById,
        Map<Long, MilaDepositoryEntity> milaDepositoriesById,
        Map<String, SideEntity> sidesById,
        Map<Long, TypeEntity> typesById,
        Map<Long, StatusEntity> knownStatusesById,
        Map<Long, TradeParticipantProjection> tradeParticipantsByTradeId,
        BatchDirectDepositoryLookup directDepositoryLookup,
        BatchAssignmentPrefetchMetrics metrics) {

    /**
     * Immutable identifiers that may safely cross into an item REQUIRES_NEW
     * transaction. None of the prefetched JPA entities above are exposed to
     * the mutation service.
     */
    public BatchPreparedReferences preparedReferences() {
        return new BatchPreparedReferences(Map.copyOf(directDepositoryLookup.directDepositoryIdByParticipantId()));
    }

    public static BatchAssignmentPreparedContext empty(BatchAssignmentPrefetchMetrics metrics) {
        return new BatchAssignmentPreparedContext(Map.of(), Map.of(), Map.of(), Map.of(), Map.of(), Map.of(), Map.of(),
                BatchDirectDepositoryLookup.unavailable(), metrics);
    }

    public static BatchAssignmentPreparedContext empty() {
        return empty(BatchAssignmentPrefetchMetrics.empty("SKIPPED"));
    }
}

```

## src/main/java/com/nubo/operations/fractionation/api/service/impl/BatchAssignmentServiceImpl.java

```java
package com.nubo.operations.fractionation.api.service.impl;

import java.util.List;
import java.util.LongSummaryStatistics;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;

import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.util.StopWatch;

import com.nubo.operations.fractionation.api.models.dto.request.BatchAssignmentInDto;
import com.nubo.operations.fractionation.api.models.dto.request.BatchAssignmentItemInDto;
import com.nubo.operations.fractionation.api.models.dto.response.BatchAssignmentItemOutDto;
import com.nubo.operations.fractionation.api.models.dto.response.BatchAssignmentOutDto;
import com.nubo.operations.fractionation.api.exception.ServiceException;
import com.nubo.operations.fractionation.api.exception.error.ErrorCode;
import com.nubo.operations.fractionation.api.service.BatchAssignmentService;
import com.nubo.operations.fractionation.api.client.operation.rules.models.dto.request.BatchStatusUpdateTradeInDto;
import com.nubo.operations.fractionation.api.client.operation.rules.models.dto.request.BatchStatusUpdateTradeItemInDto;
import com.nubo.operations.fractionation.api.client.operation.rules.models.dto.response.BatchStatusUpdateTradeOutDto;
import com.nubo.operations.fractionation.api.client.operation.rules.models.dto.response.BatchStatusUpdateTradeItemOutDto;
import com.nubo.operations.fractionation.api.client.operation.rules.service.OperationBusinessRuleClient;
import com.nubo.operations.fractionation.api.models.enums.BusinessRuleEnum;
import com.nubo.operations.fractionation.api.models.enums.VersionApiEnum;
import com.nubo.operations.fractionation.api.application.properties.AssignmentPersistenceProperties;
import com.nubo.operations.fractionation.api.application.properties.PropertiesContext;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class BatchAssignmentServiceImpl implements BatchAssignmentService {

    private final BatchAssignmentItemProcessor itemProcessor;
    private final BatchAssignmentPerformanceContext performanceContext;
    private final BatchAssignmentTransactionMetricsContext transactionMetricsContext;
    private final BatchAssignmentPersistenceDiagnosticsContext persistenceDiagnosticsContext;
    private final BatchAssignmentHibernateStatisticsDiagnostics hibernateStatisticsDiagnostics;
    private final AssignmentPersistenceProperties assignmentPersistenceProperties;
    private final BatchAssignmentPreparationService preparationService;
    private final OperationBusinessRuleClient operationBusinessRuleClient;

    @Value("${nubo.assignment.batch.processing-size:50}")
    private int maxBatchSize = 50;

    @Value("${assignment.rules.batch.enabled:false}")
    private boolean rulesBatchEnabled;

    @PostConstruct
    void logAssignmentConfiguration() {
        String podName = podName();
        log.info("PERF_ASSIGNMENT_CONFIG service=fracciones podName={} batchProcessingSize={} rulesBatchEnabled={}",
                podName, maxBatchSize, rulesBatchEnabled);
        log.info("PERF_ASSIGNMENT_PERSISTENCE_CONFIG service=fracciones podName={} persistenceDiagnosticsEnabled={} hibernateStatisticsEnabled={} preserveContextAfterSettlementDelete={}",
                podName, assignmentPersistenceProperties.isDiagnosticsEnabled(),
                assignmentPersistenceProperties.isHibernateStatisticsEnabled(),
                assignmentPersistenceProperties.isPreserveContextAfterSettlementDelete());
    }

    @Override
    public BatchAssignmentOutDto process(BatchAssignmentInDto request) {
        if (java.util.Objects.requireNonNull(
                VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return processV1(request);
        }
        throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
    }

    private BatchAssignmentOutDto processV1(BatchAssignmentInDto request) {
        log.info("Start method processV1 with batchId -> {}, itemCount -> {}", request.getBatchId(),
                request.getItems().size());
        if (request.getItems().size() > maxBatchSize) {
            throw new ServiceException(ErrorCode.BAD_REQUEST, HttpStatus.BAD_REQUEST);
        }
        long startNanos = System.nanoTime();
        BatchAssignmentPreparedContext preparedContext = preparationService.prepare(request);
        logPrefetch(request.getBatchId(), request.getItems().size(), preparedContext.metrics());
        BatchRulesValidationContext rulesValidation = prepareRulesBatchValidation(request);
        // Intentionally excludes preparation and Rules Batch: this delta scopes Hibernate work to item transactions.
        BatchAssignmentHibernateStatisticsDiagnostics.Snapshot hibernateStatisticsBefore = hibernateStatisticsDiagnostics
                .capture();
        StopWatch batchStopWatch = new StopWatch("assignment-fractionation-batch");
        batchStopWatch.start("process-items");
        List<TimedItemResult> timedResults = request.getItems().stream()
                .map(item -> processItemWithTiming(request.getBatchId(), item, preparedContext, rulesValidation))
                .toList();
        batchStopWatch.stop();

        List<BatchAssignmentItemOutDto> results = timedResults.stream()
                .map(TimedItemResult::result)
                .toList();
        List<Long> itemDurationsMs = timedResults.stream()
                .map(TimedItemResult::durationMs)
                .sorted()
                .toList();
        LongSummaryStatistics itemDurationStatistics = itemDurationsMs.stream()
                .mapToLong(Long::longValue)
                .summaryStatistics();
        long itemTotalMinMs = itemDurationsMs.isEmpty() ? 0L : itemDurationStatistics.getMin();
        long itemTotalAvgMs = itemDurationsMs.isEmpty() ? 0L : Math.round(itemDurationStatistics.getAverage());
        long itemTotalP50Ms = percentile(itemDurationsMs, 0.50);
        long itemTotalP95Ms = percentile(itemDurationsMs, 0.95);
        long itemTotalP99Ms = percentile(itemDurationsMs, 0.99);
        long itemTotalMaxMs = itemDurationsMs.isEmpty() ? 0L : itemDurationStatistics.getMax();

        List<BatchAssignmentPerformanceContext.ItemMetrics> itemMetrics = timedResults.stream()
                .map(TimedItemResult::metrics)
                .toList();
        long rulesMs = results.stream().mapToLong(BatchAssignmentItemOutDto::getRulesMs).sum();
        long legacyRulesMs = sum(itemMetrics, BatchAssignmentPerformanceContext.ItemMetrics::legacyRulesMs);
        long applyPrevalidatedRulesMs = sum(itemMetrics,
                BatchAssignmentPerformanceContext.ItemMetrics::applyPrevalidatedRulesMs);
        long rulesItemStageMs = legacyRulesMs + applyPrevalidatedRulesMs;
        long rulesEffectiveTotalMs = rulesValidation.batchMs() + rulesItemStageMs;
        long serviceItemMs = sum(itemMetrics, BatchAssignmentPerformanceContext.ItemMetrics::serviceItemMs);
        long preloadMs = preparedContext.metrics().totalMs();
        long buildSettlementsMs = sum(itemMetrics, BatchAssignmentPerformanceContext.ItemMetrics::buildSettlementsMs);
        long calculationsHttpMs = sum(itemMetrics, BatchAssignmentPerformanceContext.ItemMetrics::calculationsMs);
        long mappingMs = sum(itemMetrics, BatchAssignmentPerformanceContext.ItemMetrics::mappingMs);
        long referenceResolutionMs = sum(itemMetrics,
                BatchAssignmentPerformanceContext.ItemMetrics::referenceResolutionMs);
        long settlementRowsCreated = sum(itemMetrics, BatchAssignmentPerformanceContext.ItemMetrics::settlementsCreated);
        long settlementRowsDeleted = sum(itemMetrics, BatchAssignmentPerformanceContext.ItemMetrics::settlementsDeleted);
        long transactionWrapperMs = timedResults.stream().mapToLong(TimedItemResult::durationMs).sum();
        long transactionWrapperAvgMs = timedResults.isEmpty() ? 0L
                : Math.round((double) transactionWrapperMs / timedResults.size());
        long transactionWrapperMaxMs = timedResults.stream().mapToLong(TimedItemResult::durationMs).max().orElse(0L);
        long unaccountedItemMs = Math.max(0L, transactionWrapperMs - serviceItemMs);
        BatchAssignmentTransactionMetricsContext.BatchTransactionMetrics transactionMetrics = transactionMetricsContext
                .summarize(timedResults.stream().map(TimedItemResult::transactionMetrics).toList());
        long transactionMeasuredMs = transactionMetrics.measuredMs();
        long performanceFinalizeMs = sum(itemMetrics, BatchAssignmentPerformanceContext.ItemMetrics::performanceFinalizeMs);
        long transactionResidualMs = unaccountedItemMs - transactionMeasuredMs - performanceFinalizeMs;
        long calculationsMs = results.stream().mapToLong(BatchAssignmentItemOutDto::getCalculationsMs).sum();
        long dbMs = results.stream().mapToLong(BatchAssignmentItemOutDto::getDbMs).sum();
        long successCount = results.stream().filter(result -> Boolean.TRUE.equals(result.getSuccess())).count();
        long totalMs = Math.max(batchStopWatch.getTotalTimeMillis(),
                TimeUnit.NANOSECONDS.toMillis(System.nanoTime() - startNanos));
        long serviceKnownStagesMs = sum(itemMetrics, BatchAssignmentPerformanceContext.ItemMetrics::loadTradeMs)
                + referenceResolutionMs
                + rulesItemStageMs
                + sum(itemMetrics, BatchAssignmentPerformanceContext.ItemMetrics::deleteSettlementMs)
                + sum(itemMetrics, BatchAssignmentPerformanceContext.ItemMetrics::directDepositoryMs)
                + buildSettlementsMs
                + sum(itemMetrics, BatchAssignmentPerformanceContext.ItemMetrics::saveSettlementMs)
                + sum(itemMetrics, BatchAssignmentPerformanceContext.ItemMetrics::custodyHistoryMs)
                + sum(itemMetrics, BatchAssignmentPerformanceContext.ItemMetrics::updateTradeMs)
                + sum(itemMetrics, BatchAssignmentPerformanceContext.ItemMetrics::saveHistoryMs);
        long serviceOtherMs = Math.max(0L, serviceItemMs - serviceKnownStagesMs);
        long batchOrchestrationMs = Math.max(0L, totalMs - preloadMs - rulesValidation.batchMs()
                - transactionWrapperMs);
        long repositoryReadMs = sum(itemMetrics, BatchAssignmentPerformanceContext.ItemMetrics::loadTradeMs)
                + referenceResolutionMs
                + sum(itemMetrics, BatchAssignmentPerformanceContext.ItemMetrics::directDepositoryRepositoryMs);
        long repositoryWriteMs = sum(itemMetrics, BatchAssignmentPerformanceContext.ItemMetrics::deleteSettlementMs)
                + sum(itemMetrics, BatchAssignmentPerformanceContext.ItemMetrics::saveSettlementMs)
                + sum(itemMetrics, BatchAssignmentPerformanceContext.ItemMetrics::custodyHistoryMs)
                + sum(itemMetrics, BatchAssignmentPerformanceContext.ItemMetrics::updateTradeMs)
                + sum(itemMetrics, BatchAssignmentPerformanceContext.ItemMetrics::saveHistoryMs);
        BatchAssignmentHibernateStatisticsDiagnostics.Delta hibernateStatistics = hibernateStatisticsDiagnostics.delta(
                hibernateStatisticsBefore, hibernateStatisticsDiagnostics.capture());

        String podName = podName();
        log.info("PERF_ASSIGNMENT_FRACTION_BATCH service=fracciones podName={} batchId={} configuredMaxBatchSize={} receivedBatchSize={} processingThreads=1 maxConcurrentItems=1 itemTotalMinMs={} itemTotalAvgMs={} itemTotalP50Ms={} itemTotalP95Ms={} itemTotalP99Ms={} itemTotalMaxMs={} preloadMs={} batchOrchestrationMs={} serviceItemMs={} serviceKnownStagesMs={} serviceOtherMs={} transactionWrapperMs={} transactionWrapperAvgMs={} transactionWrapperMaxMs={} unaccountedItemMs={} performanceFinalizeMs={} txBeginAttemptCount={} txBeginSuccessCount={} txBeginFailureCount={} txBeginTotalMs={} txBeginFailureTotalMs={} txBeginAvgMs={} txBeginMaxMs={} txCompletionSuccessCount={} txCompletionFailureCount={} txCompletionTotalMs={} txCompletionFailureTotalMs={} txCompletionAvgMs={} txCompletionP50Ms={} txCompletionP95Ms={} txCompletionP99Ms={} txCompletionMaxMs={} txRollbackSuccessCount={} txRollbackFailureCount={} txRollbackTotalMs={} txRollbackFailureTotalMs={} txNoTransactionItemCount={} transactionMeasuredMs={} transactionResidualMs={} rulesMs={} legacyRulesMs={} applyPrevalidatedRulesMs={} rulesItemStageMs={} rulesBatchMs={} rulesEffectiveTotalMs={} buildSettlementsMs={} mappingMs={} referenceResolutionMs={} calculationsMs={} calculationsHttpMs={} repositoryReadMs={} repositoryWriteMs={} settlementRowsDeleted={} settlementRowsCreated={} dbMs={} rulesLegacyHttpCalls={} rulesBatchHttpCalls={} rulesBatchEligible={} rulesBatchResult={} rulesBatchFallbackReason={} rulesBatchRequestedItems={} rulesBatchResponseItems={} rulesBatchPrevalidatedCount={} rulesBatchBusinessValidCount={} rulesBatchBusinessRejectedCount={} rulesBatchMissingItemCount={} rulesBatchInvalidItemCount={} rulesBatchItemFallbackCount={} successCount={} failureCount={} totalMs={}",
                podName, request.getBatchId(), maxBatchSize, results.size(), itemTotalMinMs, itemTotalAvgMs, itemTotalP50Ms,
                itemTotalP95Ms, itemTotalP99Ms, itemTotalMaxMs, preloadMs, batchOrchestrationMs, serviceItemMs,
                serviceKnownStagesMs, serviceOtherMs, transactionWrapperMs,
                transactionWrapperAvgMs, transactionWrapperMaxMs, unaccountedItemMs,
                performanceFinalizeMs,
                transactionMetrics.beginAttemptCount(), transactionMetrics.beginCount(), transactionMetrics.beginFailureCount(),
                transactionMetrics.beginTotalMs(), transactionMetrics.beginFailureTotalMs(), transactionMetrics.beginAvgMs(),
                transactionMetrics.beginMaxMs(), transactionMetrics.completionCount(),
                transactionMetrics.completionFailureCount(), transactionMetrics.completionTotalMs(),
                transactionMetrics.completionFailureTotalMs(), transactionMetrics.completionAvgMs(), transactionMetrics.completionPercentileMs(0.50d),
                transactionMetrics.completionPercentileMs(0.95d), transactionMetrics.completionPercentileMs(0.99d),
                transactionMetrics.completionMaxMs(), transactionMetrics.rollbackCount(),
                transactionMetrics.rollbackFailureCount(), transactionMetrics.rollbackTotalMs(),
                transactionMetrics.rollbackFailureTotalMs(),
                transactionMetrics.noTransactionItemCount(), transactionMeasuredMs, transactionResidualMs, rulesMs,
                legacyRulesMs, applyPrevalidatedRulesMs, rulesItemStageMs, rulesValidation.batchMs(), rulesEffectiveTotalMs,
                buildSettlementsMs, mappingMs, referenceResolutionMs, calculationsMs, calculationsHttpMs, repositoryReadMs, repositoryWriteMs,
                settlementRowsDeleted, settlementRowsCreated, dbMs,
                sum(itemMetrics, BatchAssignmentPerformanceContext.ItemMetrics::rulesHttpCalls),
                rulesValidation.batchCallMade() ? 1 : 0, rulesValidation.eligible(),
                rulesBatchResult(rulesValidation), rulesValidation.fallbackReason(), rulesValidation.requestedItemCount(),
                rulesValidation.responseItemCount(), rulesValidation.prevalidatedCount(), rulesValidation.businessValidCount(),
                rulesValidation.businessRejectedCount(), rulesValidation.missingItemCount(), rulesValidation.invalidItemCount(),
                rulesValidation.itemFallbackCount(), successCount,
                results.size() - successCount, totalMs);
        logPersistenceBatch(request.getBatchId(), podName, itemMetrics, transactionMetrics, hibernateStatistics);
        logDbSummary(request.getBatchId(), podName, itemMetrics);
        if (assignmentPersistenceProperties.isDiagnosticsEnabled()) {
            logPersistenceContextSummary(request.getBatchId(), podName,
                    persistenceDiagnosticsContext.summarize(timedResults.stream()
                            .map(TimedItemResult::persistenceMetrics).toList()));
        }

        BatchAssignmentOutDto response = BatchAssignmentOutDto.builder()
                .batchId(request.getBatchId())
                .items(results)
                .build();
        log.info("End method processV1 with batchId -> {}, itemCount -> {}", request.getBatchId(),
                request.getItems().size());
        return response;
    }

    private void logPrefetch(String batchId, int itemCount, BatchAssignmentPrefetchMetrics metrics) {
        String podName = podName();
        log.info("PERF_BATCH_PREFETCH service=fracciones podName={} batchId={} items={} tradeRequested={} tradeUnique={} tradeRepositoryCalls={} tradeRowsLoaded={} tradeProjectionMs={} settlementRequestedPairs={} settlementUniquePairs={} settlementRepositoryCalls={} settlementRowsLoaded={} settlementRowsAccepted={} settlementRowsFiltered={} directDepositoryRequested={} directDepositoryUniqueParticipants={} directDepositoryRepositoryCalls={} directDepositoryRowsLoaded={} directDepositorySelectedRows={} directDepositoryPrefetchMs={} investorAccountRequested={} investorAccountUnique={} investorAccountRepositoryCalls={} investorAccountRowsLoaded={} investorAccountMs={} participantAccountRequested={} participantAccountUnique={} participantAccountRepositoryCalls={} participantAccountRowsLoaded={} participantAccountMs={} sideRequested={} sideUnique={} sideRepositoryCalls={} sideMs={} typeRequested={} typeUnique={} typeRepositoryCalls={} typeMs={} milaDepositoryRequested={} milaDepositoryUnique={} milaDepositoryRepositoryCalls={} milaDepositoryMs={} knownStatusRequested={} knownStatusUnique={} statusRepositoryCalls={} statusMs={} otherReferenceRepositoryCalls={} totalRepositoryCalls={} totalMs={} result={}",
                podName, batchId, itemCount,
                metrics.tradeRequested(), metrics.tradeUnique(), metrics.tradeRepositoryCalls(), metrics.tradeRowsLoaded(), metrics.tradeProjectionMs(),
                0, 0, 0, 0, 0, 0,
                metrics.directDepositoryRequested(), metrics.directDepositoryUniqueParticipants(), metrics.directDepositoryRepositoryCalls(),
                metrics.directDepositoryRowsLoaded(), metrics.directDepositorySelectedRows(), metrics.directDepositoryPrefetchMs(),
                metrics.investorAccountRequested(), metrics.investorAccountUnique(), metrics.investorAccountRepositoryCalls(), metrics.investorAccountRowsLoaded(), metrics.investorAccountMs(),
                metrics.participantAccountRequested(), metrics.participantAccountUnique(), metrics.participantAccountRepositoryCalls(), metrics.participantAccountRowsLoaded(), metrics.participantAccountMs(),
                metrics.sideRequested(), metrics.sideUnique(), metrics.sideRepositoryCalls(), metrics.sideMs(),
                metrics.typeRequested(), metrics.typeUnique(), metrics.typeRepositoryCalls(), metrics.typeMs(),
                metrics.milaDepositoryRequested(), metrics.milaDepositoryUnique(), metrics.milaDepositoryRepositoryCalls(), metrics.milaDepositoryMs(),
                metrics.knownStatusRequested(), metrics.knownStatusUnique(), metrics.statusRepositoryCalls(), metrics.statusMs(), 0,
                metrics.totalRepositoryCalls(), metrics.totalMs(), metrics.result());
        log.info("PERF_BATCH_READ_REDUCTION service=fracciones podName={} batchId={} scope=preparation-only claimedReadReduction=false preparationEstimatedReads={} preparationRepositoryCalls={} itemTransactionReads=measured-separately",
                podName, batchId, metrics.estimatedReadsBefore(), metrics.totalRepositoryCalls());
    }

    private String podName() {
        String podName = System.getenv("POD_NAME");
        if (podName != null && !podName.isBlank()) {
            return podName;
        }
        return System.getenv().getOrDefault("HOSTNAME", "unknown");
    }

    private TimedItemResult processItemWithTiming(String batchId, BatchAssignmentItemInDto item,
            BatchAssignmentPreparedContext preparedContext, BatchRulesValidationContext rulesValidation) {
        long started = System.nanoTime();
        BatchAssignmentHibernateStatisticsDiagnostics.Snapshot hibernateStatisticsBefore = hibernateStatisticsDiagnostics
                .capture();
        transactionMetricsContext.activate(batchId, item.getTradeId(), item.getSideId(), item.getOperationType());
        if (assignmentPersistenceProperties.isDiagnosticsEnabled()) {
            persistenceDiagnosticsContext.begin();
        }
        try {
            BatchAssignmentItemOutDto result = itemProcessor.process(item, preparedContext.preparedReferences(),
                    rulesValidation.prevalidatedResult(item.getItemId()));
            logHibernateStatisticsItem(batchId, item, hibernateStatisticsDiagnostics.delta(hibernateStatisticsBefore,
                    hibernateStatisticsDiagnostics.capture()));
            return new TimedItemResult(result, TimeUnit.NANOSECONDS.toMillis(System.nanoTime() - started),
                    performanceContext.consumeLastFinished(), transactionMetricsContext.finishAndClear(),
                    assignmentPersistenceProperties.isDiagnosticsEnabled() ? persistenceDiagnosticsContext.finishAndClear()
                            : BatchAssignmentPersistenceDiagnosticsContext.ItemPersistenceMetrics.EMPTY);
        } finally {
            transactionMetricsContext.clear();
            persistenceDiagnosticsContext.clear();
        }
    }

    private void logPersistenceBatch(String batchId, String podName,
            List<BatchAssignmentPerformanceContext.ItemMetrics> metrics,
            BatchAssignmentTransactionMetricsContext.BatchTransactionMetrics transactionMetrics,
            BatchAssignmentHibernateStatisticsDiagnostics.Delta hibernateStatistics) {
        long tradeLoadCalls = sum(metrics, BatchAssignmentPerformanceContext.ItemMetrics::loadTradeCalls);
        long tradeLoadMs = sum(metrics, BatchAssignmentPerformanceContext.ItemMetrics::loadTradeMs);
        long referenceResolutionMs = sum(metrics, BatchAssignmentPerformanceContext.ItemMetrics::referenceResolutionMs);
        long settlementDeleteCalls = sum(metrics, BatchAssignmentPerformanceContext.ItemMetrics::deleteSettlementCalls);
        long settlementDeleteMs = sum(metrics, BatchAssignmentPerformanceContext.ItemMetrics::deleteSettlementMs);
        long settlementSaveCalls = sum(metrics, BatchAssignmentPerformanceContext.ItemMetrics::saveSettlementCalls);
        long settlementSaveMs = sum(metrics, BatchAssignmentPerformanceContext.ItemMetrics::saveSettlementMs);
        long historySaveCalls = sum(metrics, BatchAssignmentPerformanceContext.ItemMetrics::historyCalls);
        long historySaveMs = sum(metrics, BatchAssignmentPerformanceContext.ItemMetrics::saveHistoryMs);
        long tradeSaveCalls = sum(metrics, BatchAssignmentPerformanceContext.ItemMetrics::tradeSaveCalls);
        long tradeSaveMs = sum(metrics, BatchAssignmentPerformanceContext.ItemMetrics::tradeSaveMs);
        long calculationHttpCalls = sum(metrics, BatchAssignmentPerformanceContext.ItemMetrics::calculationsHttpCalls);
        long calculationHttpMs = sum(metrics, BatchAssignmentPerformanceContext.ItemMetrics::calculationsMs);

        log.info("PERF_ASSIGNMENT_PERSISTENCE_BATCH service=fracciones podName={} batchId={} itemCount={} tradeLoadCalls={} tradeLoadMs={} referenceResolutionMs={} settlementDeleteCalls={} settlementDeleteMs={} settlementSaveCalls={} settlementSaveMs={} historySaveCalls={} historySaveMs={} tradeSaveCalls={} tradeSaveMs={} calculationHttpCalls={} calculationHttpMs={} txBeginAttemptCount={} txBeginSuccessCount={} txBeginFailureCount={} txBeginTotalMs={} txBeginFailureTotalMs={} txCompletionSuccessCount={} txCompletionFailureCount={} txCompletionTotalMs={} txCompletionFailureTotalMs={} txCompletionP50Ms={} txCompletionP95Ms={} txCompletionMaxMs={} txRollbackSuccessCount={} txRollbackFailureCount={} txRollbackTotalMs={} txRollbackFailureTotalMs={} txMeasuredMs={} repositoryCalls={} hibernateStatisticsRequested={} hibernateStatisticsAvailable={} hibernateStatisticsScope=pod-global-snapshot-delta hibernateStatisticsCounterResetDetected={} hibernatePrepareStatementCount={} hibernateEntityLoadCount={} hibernateEntityInsertCount={} hibernateEntityUpdateCount={} hibernateEntityDeleteCount={} hibernateEntityFetchCount={} hibernateCollectionFetchCount={} hibernateFlushCount={} hibernateTransactionCount={} hibernateSuccessfulTransactionCount={} hibernateOptimisticFailureCount={} settlementEntityLoadCount={} settlementEntityInsertCount={} settlementEntityUpdateCount={} settlementEntityDeleteCount={} tradeEntityLoadCount={} tradeEntityInsertCount={} tradeEntityUpdateCount={} historyEntityInsertCount={}",
                podName, batchId, metrics.size(), tradeLoadCalls, tradeLoadMs, referenceResolutionMs, settlementDeleteCalls,
                settlementDeleteMs, settlementSaveCalls, settlementSaveMs, historySaveCalls, historySaveMs,
                tradeSaveCalls, tradeSaveMs, calculationHttpCalls, calculationHttpMs,
                transactionMetrics.beginAttemptCount(), transactionMetrics.beginCount(), transactionMetrics.beginFailureCount(),
                transactionMetrics.beginTotalMs(), transactionMetrics.beginFailureTotalMs(), transactionMetrics.completionCount(),
                transactionMetrics.completionFailureCount(), transactionMetrics.completionTotalMs(),
                transactionMetrics.completionFailureTotalMs(),
                transactionMetrics.completionPercentileMs(0.50d), transactionMetrics.completionPercentileMs(0.95d),
                transactionMetrics.completionMaxMs(), transactionMetrics.rollbackCount(),
                transactionMetrics.rollbackFailureCount(), transactionMetrics.rollbackTotalMs(),
                transactionMetrics.rollbackFailureTotalMs(),
                transactionMetrics.measuredMs(),
                sum(metrics, BatchAssignmentPerformanceContext.ItemMetrics::repositoryCalls),
                hibernateStatistics.requested(), hibernateStatistics.available(),
                hibernateStatistics.counterResetDetected(),
                hibernateStatistics.prepareStatementCount(), hibernateStatistics.entityLoadCount(),
                hibernateStatistics.entityInsertCount(), hibernateStatistics.entityUpdateCount(),
                hibernateStatistics.entityDeleteCount(), hibernateStatistics.entityFetchCount(),
                hibernateStatistics.collectionFetchCount(), hibernateStatistics.flushCount(),
                hibernateStatistics.transactionCount(), hibernateStatistics.successfulTransactionCount(),
                hibernateStatistics.optimisticFailureCount(), hibernateStatistics.settlement().loadCount(),
                hibernateStatistics.settlement().insertCount(), hibernateStatistics.settlement().updateCount(),
                hibernateStatistics.settlement().deleteCount(), hibernateStatistics.trade().loadCount(),
                hibernateStatistics.trade().insertCount(), hibernateStatistics.trade().updateCount(),
                hibernateStatistics.history().insertCount());
    }

    private void logHibernateStatisticsItem(String batchId, BatchAssignmentItemInDto item,
            BatchAssignmentHibernateStatisticsDiagnostics.Delta hibernateStatistics) {
        if (!hibernateStatistics.available() || !log.isDebugEnabled()) {
            return;
        }
        log.debug("PERF_ASSIGNMENT_PERSISTENCE_ITEM service=fracciones batchId={} itemId={} tradeId={} sideId={} hibernatePrepareStatementCount={} hibernateEntityLoadCount={} hibernateEntityInsertCount={} hibernateEntityUpdateCount={} hibernateFlushCount={} hibernateTransactionCount={} hibernateSuccessfulTransactionCount={}",
                batchId, item.getItemId(), item.getTradeId(), item.getSideId(),
                hibernateStatistics.prepareStatementCount(), hibernateStatistics.entityLoadCount(),
                hibernateStatistics.entityInsertCount(), hibernateStatistics.entityUpdateCount(),
                hibernateStatistics.flushCount(), hibernateStatistics.transactionCount(),
                hibernateStatistics.successfulTransactionCount());
    }

    private BatchRulesValidationContext prepareRulesBatchValidation(BatchAssignmentInDto request) {
        if (!rulesBatchEnabled) {
            return BatchRulesValidationContext.fallback("FEATURE_DISABLED", 0L, request.getItems().size());
        }
        if (request.getItems().size() <= 1) {
            return BatchRulesValidationContext.fallback("SINGLE_ITEM", 0L, request.getItems().size());
        }
        Set<Long> tradeIds = new HashSet<>();
        Set<String> itemIds = new HashSet<>();
        if (request.getItems().stream().anyMatch(item -> !tradeIds.add(item.getTradeId()))) {
            return BatchRulesValidationContext.fallback("DUPLICATE_TRADE_ID", 0L, request.getItems().size());
        }
        if (request.getItems().stream().anyMatch(item -> !itemIds.add(item.getItemId()))) {
            return BatchRulesValidationContext.fallback("DUPLICATE_ITEM_ID", 0L, request.getItems().size());
        }
        if (request.getItems().stream().anyMatch(item -> !isSupportedOperation(item))) {
            return BatchRulesValidationContext.fallback("UNSUPPORTED_OPERATION_TYPE", 0L, request.getItems().size());
        }

        long startedNanos = System.nanoTime();
        try {
            BatchStatusUpdateTradeInDto batchRequest = BatchStatusUpdateTradeInDto.builder()
                    .batchId(request.getBatchId())
                    .items(request.getItems().stream().map(this::toRulesBatchItem).toList())
                    .build();
            BatchStatusUpdateTradeOutDto response = operationBusinessRuleClient.validateUpdateStatusTradeBatch(batchRequest);
            if (response == null || response.getItems() == null) {
                return BatchRulesValidationContext.failure("EMPTY_RULES_BATCH_RESPONSE",
                        TimeUnit.NANOSECONDS.toMillis(System.nanoTime() - startedNanos), request.getItems().size());
            }
            return correlateRulesBatchResponse(request, response,
                    TimeUnit.NANOSECONDS.toMillis(System.nanoTime() - startedNanos));
        } catch (RuntimeException exception) {
            log.warn("PERF_RULES_BATCH_CLIENT_FAILURE service=fracciones batchId={} exceptionType={} message={}",
                    request.getBatchId(), exception.getClass().getSimpleName(), exception.getMessage(), exception);
            return BatchRulesValidationContext.failure("RULES_BATCH_CLIENT_FAILURE",
                    TimeUnit.NANOSECONDS.toMillis(System.nanoTime() - startedNanos), request.getItems().size());
        }
    }

    private BatchRulesValidationContext correlateRulesBatchResponse(BatchAssignmentInDto request,
            BatchStatusUpdateTradeOutDto response, long batchMs) {
        if (!java.util.Objects.equals(request.getBatchId(), response.getBatchId())) {
            return BatchRulesValidationContext.failure("BATCH_ID_MISMATCH", batchMs, request.getItems().size());
        }

        Map<String, BatchAssignmentItemInDto> expectedByItemId = request.getItems().stream()
                .collect(Collectors.toMap(BatchAssignmentItemInDto::getItemId, item -> item));
        Map<String, BatchStatusUpdateTradeItemOutDto> prevalidatedItems = new HashMap<>();
        Map<String, String> fallbackReasons = new HashMap<>();
        Set<String> responseItemIds = new HashSet<>();
        int businessValidCount = 0;
        int businessRejectedCount = 0;
        int invalidItemCount = 0;

        for (BatchStatusUpdateTradeItemOutDto responseItem : response.getItems()) {
            if (responseItem == null || responseItem.getItemId() == null) {
                return BatchRulesValidationContext.failure("INVALID_RULES_BATCH_RESPONSE", batchMs,
                        request.getItems().size());
            }
            if (!responseItemIds.add(responseItem.getItemId())) {
                return BatchRulesValidationContext.failure("DUPLICATE_RESPONSE_ITEM_ID", batchMs,
                        request.getItems().size());
            }
            BatchAssignmentItemInDto expectedItem = expectedByItemId.get(responseItem.getItemId());
            if (expectedItem == null) {
                return BatchRulesValidationContext.failure("UNKNOWN_RESPONSE_ITEM_ID", batchMs,
                        request.getItems().size());
            }
            if (!java.util.Objects.equals(expectedItem.getTradeId(), responseItem.getTradeId())
                    || !java.util.Objects.equals(expectedItem.getSideId(), responseItem.getSideId())) {
                fallbackReasons.put(responseItem.getItemId(), "RESPONSE_ITEM_METADATA_MISMATCH");
                invalidItemCount++;
                continue;
            }
            if (!Boolean.TRUE.equals(responseItem.getPrevalidated())) {
                fallbackReasons.put(responseItem.getItemId(), "RESPONSE_ITEM_NOT_PREVALIDATED");
                invalidItemCount++;
                continue;
            }
            if (responseItem.getResult() == null) {
                fallbackReasons.put(responseItem.getItemId(), "PREVALIDATED_RESULT_MISSING");
                invalidItemCount++;
                continue;
            }
            prevalidatedItems.put(responseItem.getItemId(), responseItem);
            if (Boolean.TRUE.equals(responseItem.getResult().getIsValid())) {
                businessValidCount++;
            } else {
                businessRejectedCount++;
            }
        }

        int missingItemCount = 0;
        for (String expectedItemId : expectedByItemId.keySet()) {
            if (!responseItemIds.contains(expectedItemId)) {
                fallbackReasons.put(expectedItemId, "MISSING_RESPONSE_ITEM");
                missingItemCount++;
            }
        }
        return BatchRulesValidationContext.result(batchMs, request.getItems().size(), response.getItems().size(),
                businessValidCount, businessRejectedCount, missingItemCount, invalidItemCount,
                prevalidatedItems, fallbackReasons);
    }

    private boolean isSupportedOperation(BatchAssignmentItemInDto item) {
        return "A".equalsIgnoreCase(item.getOperationType()) || "R".equalsIgnoreCase(item.getOperationType());
    }

    private BatchStatusUpdateTradeItemInDto toRulesBatchItem(BatchAssignmentItemInDto item) {
        BusinessRuleEnum code;
        if ("R".equalsIgnoreCase(item.getOperationType())) {
            code = BusinessRuleEnum.RULE_REASSIGNMENT;
        } else {
            boolean assignmentMark = Boolean.TRUE.equals(item.getFractions().get(0).getHaveAssignmentMark());
            code = assignmentMark ? BusinessRuleEnum.RULE_ASSIGNMENT_OWN_POSITION : BusinessRuleEnum.RULE_ASSIGNMENT;
        }
        return BatchStatusUpdateTradeItemInDto.builder()
                .itemId(item.getItemId())
                .tradeId(item.getTradeId())
                .sideId(item.getSideId())
                .code(code)
                .build();
    }

    private String rulesBatchResult(BatchRulesValidationContext rulesValidation) {
        if (!rulesValidation.eligible()) {
            return rulesValidation.batchCallMade() ? "FAILURE" : "FALLBACK";
        }
        return rulesValidation.itemFallbackCount() == 0 ? "SUCCESS" : "FALLBACK";
    }

    private void logDbSummary(String batchId, String podName,
            List<BatchAssignmentPerformanceContext.ItemMetrics> metrics) {
        log.info("PERF_DB_SUMMARY service=fracciones podName={} batchId={} items={} repositoryCalls={} loadTradeCalls={} loadTradeMs={} referenceResolutionMs={} loadSettlementCalls={} loadSettlementMs={} deleteSettlementCalls={} deleteSettlementMs={} settlementRowsDeleted={} directDepositoryCalls={} directDepositoryRepositoryMs={} directDepositoryPrefetchedResolutionMs={} directDepositoryMs={} saveSettlementCalls={} saveSettlementMs={} settlementRowsCreated={} custodyHistoryMs={} historyCalls={} historyMs={} updateTradeCalls={} updateTradeMs={} flushCalls={} flushMs={} rulesHttpCalls={} calculationsHttpCalls={} totalDbMs={}",
                podName, batchId, metrics.size(), sum(metrics, BatchAssignmentPerformanceContext.ItemMetrics::repositoryCalls),
                sum(metrics, BatchAssignmentPerformanceContext.ItemMetrics::loadTradeCalls), sum(metrics, BatchAssignmentPerformanceContext.ItemMetrics::loadTradeMs),
                sum(metrics, BatchAssignmentPerformanceContext.ItemMetrics::referenceResolutionMs),
                sum(metrics, BatchAssignmentPerformanceContext.ItemMetrics::loadSettlementCalls), sum(metrics, BatchAssignmentPerformanceContext.ItemMetrics::loadSettlementMs),
                sum(metrics, BatchAssignmentPerformanceContext.ItemMetrics::deleteSettlementCalls), sum(metrics, BatchAssignmentPerformanceContext.ItemMetrics::deleteSettlementMs),
                sum(metrics, BatchAssignmentPerformanceContext.ItemMetrics::settlementsDeleted),
                sum(metrics, BatchAssignmentPerformanceContext.ItemMetrics::directDepositoryCalls),
                sum(metrics, BatchAssignmentPerformanceContext.ItemMetrics::directDepositoryRepositoryMs),
                sum(metrics, BatchAssignmentPerformanceContext.ItemMetrics::directDepositoryPrefetchedResolutionMs),
                sum(metrics, BatchAssignmentPerformanceContext.ItemMetrics::directDepositoryMs),
                sum(metrics, BatchAssignmentPerformanceContext.ItemMetrics::saveSettlementCalls), sum(metrics, BatchAssignmentPerformanceContext.ItemMetrics::saveSettlementMs),
                sum(metrics, BatchAssignmentPerformanceContext.ItemMetrics::settlementsCreated),
                sum(metrics, BatchAssignmentPerformanceContext.ItemMetrics::custodyHistoryMs),
                sum(metrics, BatchAssignmentPerformanceContext.ItemMetrics::historyCalls), sum(metrics, BatchAssignmentPerformanceContext.ItemMetrics::saveHistoryMs),
                sum(metrics, BatchAssignmentPerformanceContext.ItemMetrics::updateTradeCalls), sum(metrics, BatchAssignmentPerformanceContext.ItemMetrics::updateTradeMs),
                sum(metrics, BatchAssignmentPerformanceContext.ItemMetrics::flushCalls), sum(metrics, BatchAssignmentPerformanceContext.ItemMetrics::flushMs),
                sum(metrics, BatchAssignmentPerformanceContext.ItemMetrics::rulesHttpCalls), sum(metrics, BatchAssignmentPerformanceContext.ItemMetrics::calculationsHttpCalls),
                sum(metrics, BatchAssignmentPerformanceContext.ItemMetrics::dbMs));
    }

    private void logPersistenceContextSummary(String batchId, String podName,
            BatchAssignmentPersistenceDiagnosticsContext.BatchPersistenceMetrics metrics) {
        log.info("PERF_PERSISTENCE_CONTEXT service=fracciones podName={} batchId={} items={} preserveContextAfterDelete={} tradeManagedAfterLoad={} tradeObservedAfterLoad={} tradeManagedBeforeDelete={} tradeObservedBeforeDelete={} tradeManagedAfterDelete={} tradeObservedAfterDelete={} tradeManagedBeforeUpdate={} tradeObservedBeforeUpdate={} tradeManagedBeforeSave={} tradeObservedBeforeSave={} tradeManagedAfterSave={} tradeObservedAfterSave={} tradeManagedAfterSaveReturned={} tradeObservedAfterSaveReturned={}",
                podName, batchId, metrics.items(), assignmentPersistenceProperties.isPreserveContextAfterSettlementDelete(), metrics.afterLoadManaged(), metrics.afterLoadObserved(),
                metrics.beforeDeleteManaged(), metrics.beforeDeleteObserved(), metrics.afterDeleteManaged(),
                metrics.afterDeleteObserved(), metrics.beforeUpdateManaged(), metrics.beforeUpdateObserved(),
                metrics.beforeSaveManaged(), metrics.beforeSaveObserved(), metrics.afterSaveManaged(),
                metrics.afterSaveObserved(), metrics.afterSaveReturnedManaged(), metrics.afterSaveReturnedObserved());
    }

    private long sum(List<BatchAssignmentPerformanceContext.ItemMetrics> metrics,
            java.util.function.ToLongFunction<BatchAssignmentPerformanceContext.ItemMetrics> selector) {
        return metrics.stream().mapToLong(selector).sum();
    }

    private long percentile(List<Long> sortedDurationsMs, double percentile) {
        if (sortedDurationsMs.isEmpty()) {
            return 0L;
        }
        int index = (int) Math.ceil(percentile * sortedDurationsMs.size()) - 1;
        return sortedDurationsMs.get(index);
    }

    private record TimedItemResult(BatchAssignmentItemOutDto result, long durationMs,
            BatchAssignmentPerformanceContext.ItemMetrics metrics,
            BatchAssignmentTransactionMetricsContext.ItemTransactionMetrics transactionMetrics,
            BatchAssignmentPersistenceDiagnosticsContext.ItemPersistenceMetrics persistenceMetrics) {
    }
}

```

## src/main/java/com/nubo/operations/fractionation/api/service/impl/BatchAssignmentTransactionExecutionListener.java

```java
package com.nubo.operations.fractionation.api.service.impl;

import org.springframework.stereotype.Component;
import org.springframework.transaction.TransactionExecution;
import org.springframework.transaction.TransactionExecutionListener;

import lombok.RequiredArgsConstructor;

/** Observes only the transaction that is active in the batch item context. */
@Component
@RequiredArgsConstructor
public class BatchAssignmentTransactionExecutionListener implements TransactionExecutionListener {

    private final BatchAssignmentTransactionMetricsContext metricsContext;

    @Override
    public void beforeBegin(TransactionExecution transaction) {
        metricsContext.beforeBegin(transaction);
    }

    @Override
    public void afterBegin(TransactionExecution transaction, Throwable beginFailure) {
        metricsContext.afterBegin(transaction, beginFailure);
    }

    @Override
    public void beforeCommit(TransactionExecution transaction) {
        metricsContext.beforeCommit(transaction);
    }

    @Override
    public void afterCommit(TransactionExecution transaction, Throwable commitFailure) {
        metricsContext.afterCommit(transaction, commitFailure);
    }

    @Override
    public void beforeRollback(TransactionExecution transaction) {
        metricsContext.beforeRollback(transaction);
    }

    @Override
    public void afterRollback(TransactionExecution transaction, Throwable rollbackFailure) {
        metricsContext.afterRollback(transaction, rollbackFailure);
    }
}

```

## src/main/java/com/nubo/operations/fractionation/api/service/impl/BatchAssignmentTransactionMetricsContext.java

```java
package com.nubo.operations.fractionation.api.service.impl;

import java.util.ArrayList;
import java.util.IdentityHashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.springframework.stereotype.Component;
import org.springframework.transaction.TransactionExecution;

import lombok.extern.slf4j.Slf4j;

/**
 * Request-local transaction timing for one synchronous batch assignment item.
 * It is deliberately observational: it does not participate in transaction
 * creation, completion, propagation, or rollback decisions.
 */
@Component
@Slf4j
public class BatchAssignmentTransactionMetricsContext {

    private final ThreadLocal<ActiveItemMetrics> current = new ThreadLocal<>();

    public void activate(String batchId, Long tradeId, String sideId, String operationType) {
        current.set(new ActiveItemMetrics(batchId, tradeId, sideId, operationType));
    }

    public ItemTransactionMetrics finishAndClear() {
        ActiveItemMetrics metrics = current.get();
        current.remove();
        return metrics == null ? ItemTransactionMetrics.EMPTY : metrics.snapshot();
    }

    public void clear() {
        current.remove();
    }

    public boolean isActive() {
        return current.get() != null;
    }

    public void beforeBegin(TransactionExecution transaction) {
        active().ifPresent(metrics -> {
            metrics.beforeBegin(transaction);
            logDebug(metrics, "BEFORE_BEGIN", null);
        });
    }

    public void afterBegin(TransactionExecution transaction, Throwable beginFailure) {
        active().ifPresent(metrics -> {
            metrics.afterBegin(transaction, beginFailure);
            logDebug(metrics, "AFTER_BEGIN", beginFailure);
        });
    }

    public void beforeCommit(TransactionExecution transaction) {
        active().ifPresent(metrics -> {
            metrics.beforeCommit(transaction);
            logDebug(metrics, "BEFORE_COMMIT", null);
        });
    }

    public void afterCommit(TransactionExecution transaction, Throwable commitFailure) {
        active().ifPresent(metrics -> {
            metrics.afterCommit(transaction, commitFailure);
            logDebug(metrics, "AFTER_COMMIT", commitFailure);
        });
    }

    public void beforeRollback(TransactionExecution transaction) {
        active().ifPresent(metrics -> {
            metrics.beforeRollback(transaction);
            logDebug(metrics, "BEFORE_ROLLBACK", null);
        });
    }

    public void afterRollback(TransactionExecution transaction, Throwable rollbackFailure) {
        active().ifPresent(metrics -> {
            metrics.afterRollback(transaction, rollbackFailure);
            logDebug(metrics, "AFTER_ROLLBACK", rollbackFailure);
        });
    }

    public BatchTransactionMetrics summarize(List<ItemTransactionMetrics> itemMetrics) {
        long beginNanos = itemMetrics.stream().mapToLong(ItemTransactionMetrics::beginTotalNanos).sum();
        long beginFailureNanos = itemMetrics.stream().mapToLong(ItemTransactionMetrics::beginFailureTotalNanos).sum();
        long completionNanos = itemMetrics.stream().mapToLong(ItemTransactionMetrics::completionTotalNanos).sum();
        long completionFailureNanos = itemMetrics.stream()
                .mapToLong(ItemTransactionMetrics::completionFailureTotalNanos).sum();
        long rollbackNanos = itemMetrics.stream().mapToLong(ItemTransactionMetrics::rollbackTotalNanos).sum();
        long rollbackFailureNanos = itemMetrics.stream().mapToLong(ItemTransactionMetrics::rollbackFailureTotalNanos)
                .sum();
        long beginCount = itemMetrics.stream().mapToLong(ItemTransactionMetrics::beginCount).sum();
        long beginFailureCount = itemMetrics.stream().mapToLong(ItemTransactionMetrics::beginFailureCount).sum();
        long completionCount = itemMetrics.stream().mapToLong(ItemTransactionMetrics::completionCount).sum();
        long completionFailureCount = itemMetrics.stream().mapToLong(ItemTransactionMetrics::completionFailureCount).sum();
        long rollbackCount = itemMetrics.stream().mapToLong(ItemTransactionMetrics::rollbackCount).sum();
        long rollbackFailureCount = itemMetrics.stream().mapToLong(ItemTransactionMetrics::rollbackFailureCount).sum();
        long noTransactionItemCount = itemMetrics.stream().filter(metrics -> metrics.totalCount() == 0).count();
        List<Long> completionDurationsNanos = itemMetrics.stream()
                .flatMap(metrics -> metrics.completionDurationsNanos().stream())
                .sorted()
                .toList();
        List<Long> beginDurationsNanos = itemMetrics.stream()
                .flatMap(metrics -> metrics.beginDurationsNanos().stream())
                .sorted()
                .toList();
        return new BatchTransactionMetrics(beginCount, beginNanos, beginFailureCount, beginFailureNanos,
                completionCount, completionNanos,
                completionFailureCount, completionFailureNanos, rollbackCount, rollbackNanos, rollbackFailureCount,
                rollbackFailureNanos, beginDurationsNanos, completionDurationsNanos, noTransactionItemCount);
    }

    private java.util.Optional<ActiveItemMetrics> active() {
        return java.util.Optional.ofNullable(current.get());
    }

    private void logDebug(ActiveItemMetrics metrics, String stage, Throwable failure) {
        log.debug("PERF_ASSIGNMENT_TX batchId={} tradeId={} sideId={} operationType={} stage={} exceptionType={}",
                metrics.batchId, metrics.tradeId, metrics.sideId, metrics.operationType, stage,
                failure == null ? null : failure.getClass().getSimpleName());
    }

    public record ItemTransactionMetrics(long beginCount, long beginTotalNanos, long beginFailureCount,
            long beginFailureTotalNanos, long completionCount,
            long completionTotalNanos, long completionFailureCount, long completionFailureTotalNanos,
            long rollbackCount, long rollbackTotalNanos, long rollbackFailureCount, long rollbackFailureTotalNanos,
            List<Long> beginDurationsNanos, List<Long> completionDurationsNanos) {
        private static final ItemTransactionMetrics EMPTY = new ItemTransactionMetrics(0L, 0L, 0L, 0L, 0L, 0L,
                0L, 0L, 0L, 0L, 0L, 0L, List.of(), List.of());

        long totalCount() {
            return beginCount + beginFailureCount + completionCount + completionFailureCount + rollbackCount
                    + rollbackFailureCount;
        }
    }

    public record BatchTransactionMetrics(long beginCount, long beginTotalNanos, long beginFailureCount,
            long beginFailureTotalNanos, long completionCount,
            long completionTotalNanos, long completionFailureCount, long completionFailureTotalNanos,
            long rollbackCount, long rollbackTotalNanos, long rollbackFailureCount, long rollbackFailureTotalNanos,
            List<Long> beginDurationsNanos, List<Long> completionDurationsNanos, long noTransactionItemCount) {

        public long beginTotalMs() {
            return TimeUnit.NANOSECONDS.toMillis(beginTotalNanos);
        }

        public long beginAvgMs() {
            return beginCount == 0 ? 0L : Math.round((double) beginTotalMs() / beginCount);
        }

        public long beginMaxMs() {
            return beginDurationsNanos.isEmpty() ? 0L
                    : TimeUnit.NANOSECONDS.toMillis(beginDurationsNanos.get(beginDurationsNanos.size() - 1));
        }

        public long beginAttemptCount() {
            return beginCount + beginFailureCount;
        }

        public long beginFailureTotalMs() {
            return TimeUnit.NANOSECONDS.toMillis(beginFailureTotalNanos);
        }

        public long completionTotalMs() {
            return TimeUnit.NANOSECONDS.toMillis(completionTotalNanos);
        }

        public long completionAvgMs() {
            return completionCount == 0 ? 0L : Math.round((double) completionTotalMs() / completionCount);
        }

        public long completionPercentileMs(double percentile) {
            if (completionDurationsNanos.isEmpty()) {
                return 0L;
            }
            int index = (int) Math.ceil(percentile * completionDurationsNanos.size()) - 1;
            return TimeUnit.NANOSECONDS.toMillis(completionDurationsNanos.get(index));
        }

        public long completionMaxMs() {
            return completionPercentileMs(1.0d);
        }

        public long rollbackTotalMs() {
            return TimeUnit.NANOSECONDS.toMillis(rollbackTotalNanos);
        }

        public long completionFailureTotalMs() {
            return TimeUnit.NANOSECONDS.toMillis(completionFailureTotalNanos);
        }

        public long rollbackFailureTotalMs() {
            return TimeUnit.NANOSECONDS.toMillis(rollbackFailureTotalNanos);
        }

        public long measuredMs() {
            return TimeUnit.NANOSECONDS.toMillis(beginTotalNanos + beginFailureTotalNanos + completionTotalNanos
                    + completionFailureTotalNanos + rollbackTotalNanos + rollbackFailureTotalNanos);
        }
    }

    private static final class ActiveItemMetrics {
        private final String batchId;
        private final Long tradeId;
        private final String sideId;
        private final String operationType;
        private final Map<TransactionExecution, Long> beginStartedNanos = new IdentityHashMap<>();
        private final Map<TransactionExecution, Long> commitStartedNanos = new IdentityHashMap<>();
        private final Map<TransactionExecution, Long> rollbackStartedNanos = new IdentityHashMap<>();
        private long beginCount;
        private long beginTotalNanos;
        private long beginFailureCount;
        private long beginFailureTotalNanos;
        private long completionCount;
        private long completionTotalNanos;
        private long completionFailureCount;
        private long completionFailureTotalNanos;
        private long rollbackCount;
        private long rollbackTotalNanos;
        private long rollbackFailureCount;
        private long rollbackFailureTotalNanos;
        private final List<Long> beginDurationsNanos = new ArrayList<>();
        private final List<Long> completionDurationsNanos = new ArrayList<>();

        private ActiveItemMetrics(String batchId, Long tradeId, String sideId, String operationType) {
            this.batchId = batchId;
            this.tradeId = tradeId;
            this.sideId = sideId;
            this.operationType = operationType;
        }

        private void beforeBegin(TransactionExecution transaction) {
            beginStartedNanos.put(transaction, System.nanoTime());
        }

        private void afterBegin(TransactionExecution transaction, Throwable beginFailure) {
            Long started = beginStartedNanos.remove(transaction);
            if (started != null) {
                long elapsedNanos = System.nanoTime() - started;
                if (beginFailure != null) {
                    beginFailureCount++;
                    beginFailureTotalNanos += elapsedNanos;
                    return;
                }
                beginCount++;
                beginTotalNanos += elapsedNanos;
                beginDurationsNanos.add(elapsedNanos);
            }
        }

        private void beforeCommit(TransactionExecution transaction) {
            commitStartedNanos.put(transaction, System.nanoTime());
        }

        private void afterCommit(TransactionExecution transaction, Throwable commitFailure) {
            Long started = commitStartedNanos.remove(transaction);
            if (started != null) {
                if (commitFailure != null) {
                    completionFailureCount++;
                    completionFailureTotalNanos += System.nanoTime() - started;
                    return;
                }
                long elapsedNanos = System.nanoTime() - started;
                completionCount++;
                completionTotalNanos += elapsedNanos;
                completionDurationsNanos.add(elapsedNanos);
            }
        }

        private void beforeRollback(TransactionExecution transaction) {
            rollbackStartedNanos.put(transaction, System.nanoTime());
        }

        private void afterRollback(TransactionExecution transaction, Throwable rollbackFailure) {
            Long started = rollbackStartedNanos.remove(transaction);
            if (started != null) {
                long elapsedNanos = System.nanoTime() - started;
                if (rollbackFailure != null) {
                    rollbackFailureCount++;
                    rollbackFailureTotalNanos += elapsedNanos;
                    return;
                }
                rollbackCount++;
                rollbackTotalNanos += elapsedNanos;
            }
        }

        private ItemTransactionMetrics snapshot() {
            return new ItemTransactionMetrics(beginCount, beginTotalNanos, beginFailureCount, beginFailureTotalNanos,
                    completionCount, completionTotalNanos, completionFailureCount, completionFailureTotalNanos,
                    rollbackCount, rollbackTotalNanos, rollbackFailureCount, rollbackFailureTotalNanos,
                    List.copyOf(beginDurationsNanos),
                    List.copyOf(completionDurationsNanos));
        }
    }
}

```

## src/main/java/com/nubo/operations/fractionation/api/service/impl/BatchCacheServiceImpl.java

```java
package com.nubo.operations.fractionation.api.service.impl;

import com.nubo.operations.fractionation.api.models.entity.*;
import com.nubo.operations.fractionation.api.repository.*;
import com.nubo.operations.fractionation.api.service.BatchCacheService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class BatchCacheServiceImpl implements BatchCacheService {

    private final SideRepository sideRepository;
    private final StatusRepository statusRepository;
    private final TypeRepository typeRepository;
    private final InvestorAccountRepository investorAccountRepository;
    private final ParticipantAccountRepository participantAccountRepository;
    private final MilaDepositoryRepository milaDepositoryRepository;

    @Override
    @Cacheable(value = "sides", key = "#sideId")
    public Optional<SideEntity> validateSide(String sideId) {
        return sideRepository.findById(sideId);
    }

    @Override
    @Cacheable(value = "status", key = "#statusId")
    public Optional<StatusEntity> validateStatus(Long statusId) {
        return statusRepository.findById(statusId);
    }

    @Override
    @Cacheable(value = "types", key = "#typeId")
    public Optional<TypeEntity> validateType(Long typeId) {
        return typeRepository.findById(typeId);
    }

    @Override
    @Cacheable(value = "investorAccounts", key = "#investorAccountId")
    public Optional<InvestorAccountEntity> validateInvestorAccount(Long investorAccountId) {
        return investorAccountRepository.findById(investorAccountId);
    }

    @Override
    @Cacheable(value = "participantAccounts", key = "#participantAccountId")
    public Optional<ParticipantAccountEntity> validateParticipantAccount(Long participantAccountId) {
        return participantAccountRepository.findById(participantAccountId);
    }

    @Override
    @Cacheable(value = "milaDepositories", key = "#milaDepositoryId")
    public Optional<MilaDepositoryEntity> validateMilaDepositor(Long milaDepositoryId) {
        return milaDepositoryRepository.findById(milaDepositoryId);
    }

}

```

## src/main/java/com/nubo/operations/fractionation/api/service/impl/BatchFractionationServiceImpl.java

```java
package com.nubo.operations.fractionation.api.service.impl;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;
import java.util.concurrent.atomic.AtomicLong;
import java.util.concurrent.TimeUnit;
import java.util.stream.IntStream;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.nubo.operations.fractionation.api.application.properties.PropertiesConfig;
import com.nubo.operations.fractionation.api.application.properties.PropertiesContext;
import com.nubo.operations.fractionation.api.client.operation.calculation.models.dto.request.SettleAccountsInDto;
import com.nubo.operations.fractionation.api.client.operation.calculation.models.dto.response.SettleAccountsOutDto;
import com.nubo.operations.fractionation.api.client.operation.calculation.service.OperationCalculationClient;
import com.nubo.operations.fractionation.api.client.operation.rules.models.dto.request.StatusUpdateTradeInDto;
import com.nubo.operations.fractionation.api.client.operation.rules.models.dto.response.StatusClientOutDto;
import com.nubo.operations.fractionation.api.client.operation.rules.models.dto.response.StatusUpdateTradeOutDto;
import com.nubo.operations.fractionation.api.client.operation.rules.service.OperationBusinessRuleClient;
import com.nubo.operations.fractionation.api.exception.ServiceException;
import com.nubo.operations.fractionation.api.exception.error.ErrorCode;
import com.nubo.operations.fractionation.api.helpers.MapperUtil;
import com.nubo.operations.fractionation.api.models.domain.BatchPreparedReferences;
import com.nubo.operations.fractionation.api.models.dto.request.FractionInDto;
import com.nubo.operations.fractionation.api.models.dto.response.SettlementOutDto;
import com.nubo.operations.fractionation.api.models.entity.DirectDepositoryEntity;
import com.nubo.operations.fractionation.api.models.entity.InvestorAccountEntity;
import com.nubo.operations.fractionation.api.models.entity.MilaDepositoryEntity;
import com.nubo.operations.fractionation.api.models.entity.ParticipantAccountEntity;
import com.nubo.operations.fractionation.api.models.entity.ParticipantEntity;
import com.nubo.operations.fractionation.api.models.entity.SettlementEntity;
import com.nubo.operations.fractionation.api.models.entity.SideEntity;
import com.nubo.operations.fractionation.api.models.entity.StatusEntity;
import com.nubo.operations.fractionation.api.models.entity.TradeEntity;
import com.nubo.operations.fractionation.api.models.entity.TradeStatusHistoryEntity;
import com.nubo.operations.fractionation.api.models.entity.TypeEntity;
import com.nubo.operations.fractionation.api.models.enums.BusinessRuleEnum;
import com.nubo.operations.fractionation.api.models.enums.SideEnum;
import com.nubo.operations.fractionation.api.models.enums.VersionApiEnum;
import com.nubo.operations.fractionation.api.repository.DirectDepositoryRepository;
import com.nubo.operations.fractionation.api.repository.InvestorAccountRepository;
import com.nubo.operations.fractionation.api.repository.MilaDepositoryRepository;
import com.nubo.operations.fractionation.api.repository.ParticipantAccountRepository;
import com.nubo.operations.fractionation.api.repository.SettlementRepository;
import com.nubo.operations.fractionation.api.repository.SideRepository;
import com.nubo.operations.fractionation.api.repository.StatusRepository;
import com.nubo.operations.fractionation.api.repository.TradeRepository;
import com.nubo.operations.fractionation.api.repository.TradeStatusHistoryRepository;
import com.nubo.operations.fractionation.api.repository.TypeRepository;
import com.nubo.operations.fractionation.api.service.BatchFractionationService;

import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * Mutable batch implementation deliberately isolated from the legacy manual service.
 * Every JPA association is resolved in the current item transaction.
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class BatchFractionationServiceImpl implements BatchFractionationService {

    private static final AtomicLong UNIQUE_FRACTION_SEQUENCE = new AtomicLong(System.currentTimeMillis() * 1_000_000L);

    private final EntityManager entityManager;
    private final TradeRepository tradeRepository;
    private final TradeStatusHistoryRepository tradeStatusHistoryRepository;
    private final SettlementRepository settlementRepository;
    private final SideRepository sideRepository;
    private final StatusRepository statusRepository;
    private final TypeRepository typeRepository;
    private final InvestorAccountRepository investorAccountRepository;
    private final ParticipantAccountRepository participantAccountRepository;
    private final MilaDepositoryRepository milaDepositoryRepository;
    private final DirectDepositoryRepository directDepositoryRepository;
    private final OperationCalculationClient operationCalculationClient;
    private final OperationBusinessRuleClient operationBusinessRuleClient;
    private final PropertiesConfig propertiesConfig;
    private final BatchAssignmentPerformanceContext performanceContext;
    private final BatchAssignmentPersistenceDiagnosticsContext persistenceDiagnosticsContext;

    private final ThreadLocal<MutableItemMetrics> currentMetrics = new ThreadLocal<>();

    @Override
    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public List<SettlementOutDto> createFractions(Long tradeId, String sideId, List<FractionInDto> fractions,
            BatchPreparedReferences references, StatusUpdateTradeOutDto prevalidatedRules) {
        beginMetrics();
        try {
            if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
                return createFractionsV1(tradeId, sideId, fractions, references, prevalidatedRules);
            }
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        } finally {
            finishMetrics();
        }
    }

    private List<SettlementOutDto> createFractionsV1(Long tradeId, String sideId, List<FractionInDto> fractions,
            BatchPreparedReferences references, StatusUpdateTradeOutDto prevalidatedRules) {
        log.info("Start method createFractionsV1 with tradeId -> {}, sideId -> {}", tradeId, sideId);
        acquireConcurrencyLock(tradeId, sideId);
        validateExistingTradeAndSide(tradeId, sideId);
        boolean assignmentMark = Boolean.TRUE.equals(fractions.get(0).getHaveAssignmentMark());
        boolean automaticMark = Boolean.TRUE.equals(fractions.get(0).getHaveAutomaticMark());
        StatusUpdateTradeOutDto rules = rules(tradeId, sideId,
                assignmentMark ? BusinessRuleEnum.RULE_ASSIGNMENT_OWN_POSITION : BusinessRuleEnum.RULE_ASSIGNMENT,
                prevalidatedRules);
        if (!Boolean.TRUE.equals(rules.getIsValid()) && !assignmentMark) {
            return updateAssignmentInternal(tradeId, sideId, fractions, references, null, true);
        }
        List<SettlementOutDto> settlements = persistAssignment(tradeId, sideId, fractions, references, rules,
                assignmentMark, automaticMark);
        log.info("End method createFractionsV1");
        return settlements;
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public List<SettlementOutDto> updateAssignment(Long tradeId, String sideId, List<FractionInDto> fractions,
            BatchPreparedReferences references, StatusUpdateTradeOutDto prevalidatedRules) {
        beginMetrics();
        try {
            if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
                return updateAssignmentV1(tradeId, sideId, fractions, references, prevalidatedRules);
            }
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        } finally {
            finishMetrics();
        }
    }

    private List<SettlementOutDto> updateAssignmentV1(Long tradeId, String sideId, List<FractionInDto> fractions,
            BatchPreparedReferences references, StatusUpdateTradeOutDto prevalidatedRules) {
        log.info("Start method updateAssignmentV1 with tradeId -> {}, sideId -> {}", tradeId, sideId);
        List<SettlementOutDto> settlements = updateAssignmentInternal(tradeId, sideId, fractions, references,
                prevalidatedRules, false);
        log.info("End method updateAssignmentV1");
        return settlements;
    }

    private List<SettlementOutDto> updateAssignmentInternal(Long tradeId, String sideId, List<FractionInDto> fractions,
            BatchPreparedReferences references, StatusUpdateTradeOutDto prevalidatedRules, boolean lockAlreadyHeld) {
        if (!lockAlreadyHeld) {
            acquireConcurrencyLock(tradeId, sideId);
        }
        validateExistingTradeAndSide(tradeId, sideId);
        StatusUpdateTradeOutDto rules = rules(tradeId, sideId, BusinessRuleEnum.RULE_REASSIGNMENT, prevalidatedRules);
        validateRules(rules);
        return persistAssignment(tradeId, sideId, fractions, references, rules, false, false);
    }

    private List<SettlementOutDto> persistAssignment(Long tradeId, String sideId, List<FractionInDto> fractions,
            BatchPreparedReferences references, StatusUpdateTradeOutDto rules, boolean assignmentMark,
            boolean automaticMark) {
        // clearAutomatically=true on the bulk delete detaches every managed entity.
        // Load all associations used by the new settlements only after that boundary.
        MutableItemMetrics metrics = metrics();
        long started = System.nanoTime();
        metrics.settlementsDeleted += settlementRepository.deleteByTradeIdAndSideId(tradeId, sideId);
        metrics.deleteSettlementNanos += System.nanoTime() - started;
        metrics.deleteSettlementCalls++;
        metrics.repositoryCalls++;

        started = System.nanoTime();
        TradeEntity trade = findTrade(tradeId);
        metrics.loadTradeNanos += System.nanoTime() - started;

        started = System.nanoTime();
        SideEntity side = findSide(sideId);
        StatusEntity sideStatus = status(rules.getNewStatusSide());
        StatusEntity fractionStatus = status(rules.getNewStatusFraction());
        StatusEntity custodianStatus = status(rules.getNewStatusCustodianFraction());
        StatusEntity tradeStatus = status(rules.getNewStatusTrade());
        metrics.referenceLoadNanos += System.nanoTime() - started;
        persistenceDiagnosticsContext.recordAfterLoad(entityManager.contains(trade));

        started = System.nanoTime();
        DirectDepositoryEntity depository = resolveDirectDepository(trade, side, references);
        metrics.directDepositoryNanos += System.nanoTime() - started;
        if (references.directDepositoryIdFor(participantForSide(trade, side).getId()) != null) {
            metrics.directDepositoryPrefetchedResolutionNanos += metrics.directDepositoryNanos;
        } else {
            metrics.directDepositoryRepositoryNanos += metrics.directDepositoryNanos;
            metrics.directDepositoryCalls++;
            metrics.repositoryCalls++;
        }
        started = System.nanoTime();
        List<SettlementEntity> settlements = createSettlements(trade, side, fractionStatus, custodianStatus, fractions,
                depository);
        metrics.buildSettlementsNanos += System.nanoTime() - started;
        metrics.settlementsCreated += settlements.size();

        started = System.nanoTime();
        settlementRepository.saveAll(settlements);
        metrics.saveSettlementNanos += System.nanoTime() - started;
        metrics.saveSettlementCalls++;
        metrics.repositoryCalls++;
        persistenceDiagnosticsContext.recordBeforeUpdate(entityManager.contains(trade));
        updateTrade(fractions.size(), trade, side, sideStatus, tradeStatus, settlements, assignmentMark, automaticMark);
        started = System.nanoTime();
        List<SettlementOutDto> response = settlements.stream().map(MapperUtil::settlementEntityToSettlementOutDto).toList();
        metrics.mappingNanos += System.nanoTime() - started;
        return response;
    }

    private StatusUpdateTradeOutDto rules(Long tradeId, String sideId, BusinessRuleEnum code,
            StatusUpdateTradeOutDto prevalidatedRules) {
        long started = System.nanoTime();
        try {
            if (prevalidatedRules != null) {
                return prevalidatedRules;
            }
            metrics().rulesHttpCalls++;
            return operationBusinessRuleClient.validateUpdateStatusTrade(StatusUpdateTradeInDto.builder()
                    .tradeId(tradeId).sideId(sideId).code(code).build());
        } finally {
            long elapsed = System.nanoTime() - started;
            metrics().rulesNanos += elapsed;
            if (prevalidatedRules == null) {
                metrics().legacyRulesNanos += elapsed;
            } else {
                metrics().applyPrevalidatedRulesNanos += elapsed;
            }
        }
    }

    private void validateRules(StatusUpdateTradeOutDto rules) {
        if (!Boolean.TRUE.equals(rules.getIsValid())) {
            throw new ServiceException(ErrorCode.CLIENT_OPERATION_RULES_ERROR, rules.getDescription(),
                    HttpStatus.BAD_REQUEST);
        }
    }

    private List<SettlementEntity> createSettlements(TradeEntity trade, SideEntity side, StatusEntity fractionStatus,
            StatusEntity custodianStatus, List<FractionInDto> fractions, DirectDepositoryEntity depository) {
        LocalDateTime now = PropertiesContext.getClientDatetime();
        return IntStream.range(0, fractions.size()).mapToObj(index -> createSettlement(trade, side, fractionStatus,
                custodianStatus, fractions.size() > 1 ? index + 1 : 0, fractions.get(index), depository, now)).toList();
    }

    private SettlementEntity createSettlement(TradeEntity trade, SideEntity side, StatusEntity fractionStatus,
            StatusEntity custodianStatus, Integer fraction, FractionInDto input, DirectDepositoryEntity depository,
            LocalDateTime now) {
        long calculationStarted = System.nanoTime();
        SettleAccountsOutDto calculation;
        try {
            calculation = operationCalculationClient.getSettleAccounts(SettleAccountsInDto.builder()
                    .quantity(input.getFractionQuantity()).price(trade.getPrice()).commission(input.getCommissionPercentage())
                    .valTax(input.getValTax()).sideId(side.getId()).typeId(trade.getType().getId())
                    .forwardPrice(trade.getForwardPrice()).volume(trade.getVolume()).build());
        } finally {
            metrics().calculationsNanos += System.nanoTime() - calculationStarted;
            metrics().calculationsHttpCalls++;
        }
        long referenceStarted = System.nanoTime();
        InvestorAccountEntity investorAccount = input.getInvestorAccountId() == null ? null
                : findInvestorAccount(input.getInvestorAccountId());
        ParticipantAccountEntity participantAccount = input.getParticipantAccountId() == null ? null
                : findParticipantAccount(input.getParticipantAccountId());
        MilaDepositoryEntity mila = input.getMilaDirectDepositorId() == null ? null
                : findMilaDepository(input.getMilaDirectDepositorId());
        boolean hasCustodian = input.getCustodianId() != null;
        StatusEntity resolvedCustodianStatus = input.getCustodianStatusId() == null ? custodianStatus
                : findStatus(input.getCustodianStatusId());
        TypeEntity sourceQuoteType = findType(input.getSourceQuoteTypeId());
        metrics().referenceLoadNanos += System.nanoTime() - referenceStarted;
        Long uniqueId = input.getUniqueFractionId() == null || input.getUniqueFractionId() == 0
                ? UNIQUE_FRACTION_SEQUENCE.incrementAndGet() : input.getUniqueFractionId();

        return SettlementEntity.builder().trade(trade).fraction(fraction).side(side).uniqueFractionId(uniqueId)
                .status(fractionStatus).investor(investorAccount == null ? null : investorAccount.getInvestor())
                .investorAccount(investorAccount).participantAccount(participantAccount)
                .fiduciarySpecialist(input.getFiduciarySpecialist()).directDepositor(depository)
                .sourceQuoteType(sourceQuoteType).fractionQuantity(input.getFractionQuantity()).reference(input.getReference())
                .commissionPercentage(input.getCommissionPercentage()).valTax(input.getValTax())
                .tradingSystem(trade.getTradingSystem()).fractionVolume(calculation.getAmount())
                .commissionAmount(calculation.getCommissionAmount()).valTaxAmount(calculation.getValTaxAmount())
                .netAmount(calculation.getNetAmount()).settlementAmount(calculation.getTransferValue())
                .cashAccount(input.getCashAccount()).indMaster(participantAccount != null && participantAccount.getIndMaster())
                .custodianId(hasCustodian ? input.getCustodianId() : null)
                .custodianStatus(hasCustodian ? resolvedCustodianStatus : null)
                .ficAdministratorId(input.getFicAdministratorId()).returnTurnoverValue(calculation.getReturnTurnoverValue())
                .netOutFlowTotal(calculation.getNetOutflowTotal()).outFlowTurnoverValue(calculation.getOutflowTurnoverValue())
                .transferParticipantId(hasCustodian ? input.getTransferParticipantId() : null).milaDirectDepositor(mila)
                .referencePackage(input.getReferencePackage()).lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyIp(PropertiesContext.getClientIp()).lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyDate(now).matchDate(trade.getMatchDate())
                .marketId(trade.getMarket() == null ? "" : trade.getMarket().getId()).build();
    }

    private DirectDepositoryEntity resolveDirectDepository(TradeEntity trade, SideEntity side,
            BatchPreparedReferences references) {
        Long participantId = participantForSide(trade, side).getId();
        Long id = references.directDepositoryIdFor(participantId);
        if (id != null) {
            return entityManager.getReference(DirectDepositoryEntity.class, id);
        }
        return directDepositoryRepository.findFirstByParticipantIdOrderByIdAsc(participantId).orElse(null);
    }

    private void updateTrade(int count, TradeEntity trade, SideEntity side, StatusEntity sideStatus,
            StatusEntity tradeStatus, List<SettlementEntity> settlements, boolean assignmentMark, boolean automaticMark) {
        boolean buy = SideEnum.BUY.getValue().equals(side.getId());
        boolean sell = SideEnum.SELL.getValue().equals(side.getId());
        boolean master = settlements.stream().anyMatch(settlement -> Boolean.TRUE.equals(settlement.getIndMaster()));
        trade.setAssignmentMarkBuy(buy ? Boolean.TRUE : trade.getAssignmentMarkBuy());
        trade.setAssignmentMarkSell(sell ? Boolean.TRUE : trade.getAssignmentMarkSell());
        trade.setFractionalMarkBuy(buy ? Boolean.valueOf(count > 1) : trade.getFractionalMarkBuy());
        trade.setFractionalMarkSell(sell ? Boolean.valueOf(count > 1) : trade.getFractionalMarkSell());
        trade.setBuyStatus(buy ? sideStatus : trade.getBuyStatus());
        trade.setSellStatus(sell ? sideStatus : trade.getSellStatus());
        trade.setStatus(tradeStatus == null ? trade.getStatus() : tradeStatus);
        trade.setIndMasterBuy(buy ? Boolean.valueOf(master) : trade.getIndMasterBuy());
        trade.setIndMasterSell(sell ? Boolean.valueOf(master) : trade.getIndMasterSell());
        trade.setFinalAssignmentMarkBuy(buy ? Boolean.valueOf(assignmentMark) : trade.getFinalAssignmentMarkBuy());
        trade.setFinalAssignmentMarkSell(sell ? Boolean.valueOf(assignmentMark) : trade.getFinalAssignmentMarkSell());
        trade.setAutomaticMarkBuy(buy ? Boolean.valueOf(automaticMark) : trade.getAutomaticMarkBuy());
        trade.setAutomaticMarkSell(sell ? Boolean.valueOf(automaticMark) : trade.getAutomaticMarkSell());
        trade.setLastModifyApplication(propertiesConfig.getApiName());
        trade.setLastModifyIp(PropertiesContext.getClientIp());
        trade.setLastModifyUser(PropertiesContext.getClientUser());
        trade.setLastModifyDate(PropertiesContext.getClientDatetime());
        persistenceDiagnosticsContext.recordBeforeSave(entityManager.contains(trade));
        long started = System.nanoTime();
        TradeEntity savedTrade = tradeRepository.save(trade);
        metrics().tradeSaveNanos += System.nanoTime() - started;
        metrics().tradeSaveCalls++;
        metrics().updateTradeCalls++;
        metrics().repositoryCalls++;
        persistenceDiagnosticsContext.recordAfterSave(entityManager.contains(trade), entityManager.contains(savedTrade));
        started = System.nanoTime();
        tradeStatusHistoryRepository.save(TradeStatusHistoryEntity.builder().tradeId(trade.getId())
                .time(PropertiesContext.getClientDatetime()).side(side).status(sideStatus)
                .detail(assignmentMark ? "Asignado automáticamente por el sistema" : "Operación Asignada")
                .lastModifyApplication(propertiesConfig.getApiName()).lastModifyIp(PropertiesContext.getClientIp())
                .lastModifyUser(PropertiesContext.getClientUser()).lastModifyDate(PropertiesContext.getClientDatetime()).build());
        metrics().saveHistoryNanos += System.nanoTime() - started;
        metrics().historyCalls++;
        metrics().repositoryCalls++;
    }

    private TradeEntity findTrade(Long id) {
        if (id == null) {
            throw new ServiceException(ErrorCode.TRADE_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
        metrics().loadTradeCalls++;
        metrics().repositoryCalls++;
        return tradeRepository.findById(id)
                .orElseThrow(() -> new ServiceException(ErrorCode.TRADE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private SideEntity findSide(String id) {
        if (id == null) {
            throw new ServiceException(ErrorCode.SIDE_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
        metrics().repositoryCalls++;
        return sideRepository.findById(id)
                .orElseThrow(() -> new ServiceException(ErrorCode.SIDE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private StatusEntity status(StatusClientOutDto value) {
        return value == null || value.getId() == null ? null : findStatus(value.getId());
    }

    private StatusEntity findStatus(Long id) {
        metrics().repositoryCalls++;
        return statusRepository.findById(id)
                .orElseThrow(() -> new ServiceException(ErrorCode.STATUS_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private TypeEntity findType(Long id) {
        if (id == null) {
            throw new ServiceException(ErrorCode.TYPE_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
        metrics().repositoryCalls++;
        return typeRepository.findById(id)
                .orElseThrow(() -> new ServiceException(ErrorCode.TYPE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    /**
     * Validation happens before rules; these managed instances are deliberately
     * discarded before the bulk delete and never associated to new settlements.
     */
    private void validateExistingTradeAndSide(Long tradeId, String sideId) {
        validateTradeExists(tradeId);
        validateSideExists(sideId);
    }

    private void validateTradeExists(Long id) {
        if (id == null) {
            throw new ServiceException(ErrorCode.TRADE_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
        metrics().repositoryCalls++;
        tradeRepository.findById(id)
                .orElseThrow(() -> new ServiceException(ErrorCode.TRADE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private void validateSideExists(String id) {
        metrics().repositoryCalls++;
        sideRepository.findById(id)
                .orElseThrow(() -> new ServiceException(ErrorCode.SIDE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private InvestorAccountEntity findInvestorAccount(Long id) {
        metrics().repositoryCalls++;
        return investorAccountRepository.findById(id)
                .orElseThrow(() -> new ServiceException(ErrorCode.INVESTOR_ACCOUNT_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private ParticipantAccountEntity findParticipantAccount(Long id) {
        metrics().repositoryCalls++;
        return participantAccountRepository.findById(id)
                .orElseThrow(() -> new ServiceException(ErrorCode.PARTICIPANT_ACCOUNT_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private MilaDepositoryEntity findMilaDepository(Long id) {
        metrics().repositoryCalls++;
        return milaDepositoryRepository.findById(id)
                .orElseThrow(() -> new ServiceException(ErrorCode.MILA_DEPOSITORY_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private ParticipantEntity participantForSide(TradeEntity trade, SideEntity side) {
        ParticipantEntity participant = SideEnum.BUY.getValue().equalsIgnoreCase(side.getId()) ? trade.getParticipantBuy()
                : SideEnum.SELL.getValue().equalsIgnoreCase(side.getId()) ? trade.getParticipantSell() : null;
        return participant == null ? ParticipantEntity.builder().id(0L).build() : participant;
    }

    private void acquireConcurrencyLock(Long tradeId, String sideId) {
        metrics().repositoryCalls++;
        settlementRepository.acquireAdvisoryLockOnTradeSide("fractionation:trade:" + tradeId + ":side:" + sideId);
    }

    private void beginMetrics() {
        currentMetrics.set(new MutableItemMetrics(System.nanoTime()));
    }

    private MutableItemMetrics metrics() {
        MutableItemMetrics metrics = currentMetrics.get();
        if (metrics == null) {
            metrics = new MutableItemMetrics(System.nanoTime());
            currentMetrics.set(metrics);
        }
        return metrics;
    }

    private void finishMetrics() {
        MutableItemMetrics metrics = currentMetrics.get();
        if (metrics != null) {
            long finalizeStarted = System.nanoTime();
            performanceContext.capture(metrics.snapshot(System.nanoTime() - metrics.startedNanos,
                    System.nanoTime() - finalizeStarted));
        }
        currentMetrics.remove();
    }

    private static long millis(long nanos) {
        return TimeUnit.NANOSECONDS.toMillis(nanos);
    }

    private static final class MutableItemMetrics {
        private final long startedNanos;
        private long rulesNanos;
        private long legacyRulesNanos;
        private long applyPrevalidatedRulesNanos;
        private long calculationsNanos;
        private long buildSettlementsNanos;
        private long mappingNanos;
        private long deleteSettlementNanos;
        private long loadTradeNanos;
        private long referenceLoadNanos;
        private long directDepositoryNanos;
        private long directDepositoryRepositoryNanos;
        private long directDepositoryPrefetchedResolutionNanos;
        private long saveSettlementNanos;
        private long tradeSaveNanos;
        private long saveHistoryNanos;
        private long settlementsCreated;
        private long settlementsDeleted;
        private long repositoryCalls;
        private long loadTradeCalls;
        private long deleteSettlementCalls;
        private long directDepositoryCalls;
        private long saveSettlementCalls;
        private long historyCalls;
        private long updateTradeCalls;
        private long tradeSaveCalls;
        private long rulesHttpCalls;
        private long calculationsHttpCalls;

        private MutableItemMetrics(long startedNanos) {
            this.startedNanos = startedNanos;
        }

        private BatchAssignmentPerformanceContext.ItemMetrics snapshot(long serviceItemNanos,
                long performanceFinalizeNanos) {
            long dbNanos = loadTradeNanos + referenceLoadNanos + deleteSettlementNanos + directDepositoryNanos
                    + saveSettlementNanos + tradeSaveNanos + saveHistoryNanos;
            return new BatchAssignmentPerformanceContext.ItemMetrics(millis(serviceItemNanos),
                    millis(performanceFinalizeNanos), millis(rulesNanos), millis(legacyRulesNanos),
                    millis(applyPrevalidatedRulesNanos), millis(calculationsNanos), millis(buildSettlementsNanos),
                    millis(mappingNanos), settlementsCreated, settlementsDeleted, millis(dbNanos),
                    millis(loadTradeNanos), 0L, millis(deleteSettlementNanos), millis(directDepositoryNanos),
                    millis(directDepositoryRepositoryNanos), millis(directDepositoryPrefetchedResolutionNanos),
                    millis(saveSettlementNanos), 0L, millis(tradeSaveNanos), millis(tradeSaveNanos),
                    millis(saveHistoryNanos), 0L, repositoryCalls, loadTradeCalls, 0L, deleteSettlementCalls,
                    directDepositoryCalls, saveSettlementCalls, historyCalls, updateTradeCalls, tradeSaveCalls, 0L,
                    rulesHttpCalls, calculationsHttpCalls, millis(referenceLoadNanos));
        }
    }

}

```

## src/main/java/com/nubo/operations/fractionation/api/service/impl/BatchRulesValidationContext.java

```java
package com.nubo.operations.fractionation.api.service.impl;

import java.util.Map;

import com.nubo.operations.fractionation.api.client.operation.rules.models.dto.response.BatchStatusUpdateTradeItemOutDto;
import com.nubo.operations.fractionation.api.client.operation.rules.models.dto.response.StatusUpdateTradeOutDto;

/** Request-local correlation and outcome of the isolated Rules batch call. */
public record BatchRulesValidationContext(
        boolean eligible,
        boolean batchCallMade,
        long batchMs,
        String fallbackReason,
        int requestedItemCount,
        int responseItemCount,
        int prevalidatedCount,
        int businessValidCount,
        int businessRejectedCount,
        int missingItemCount,
        int invalidItemCount,
        Map<String, BatchStatusUpdateTradeItemOutDto> prevalidatedItemsById,
        Map<String, String> fallbackReasonByItemId) {

    public static BatchRulesValidationContext fallback(String reason, long batchMs, int requestedItemCount) {
        return new BatchRulesValidationContext(false, false, batchMs, reason, requestedItemCount, 0,
                0, 0, 0, 0, 0, Map.of(), Map.of());
    }

    public static BatchRulesValidationContext failure(String reason, long batchMs, int requestedItemCount) {
        return new BatchRulesValidationContext(false, true, batchMs, reason, requestedItemCount, 0,
                0, 0, 0, 0, 0, Map.of(), Map.of());
    }

    public static BatchRulesValidationContext result(long batchMs, int requestedItemCount, int responseItemCount,
            int businessValidCount, int businessRejectedCount, int missingItemCount, int invalidItemCount,
            Map<String, BatchStatusUpdateTradeItemOutDto> prevalidatedItemsById,
            Map<String, String> fallbackReasonByItemId) {
        return new BatchRulesValidationContext(true, true, batchMs, null, requestedItemCount, responseItemCount,
                prevalidatedItemsById.size(), businessValidCount, businessRejectedCount, missingItemCount,
                invalidItemCount, Map.copyOf(prevalidatedItemsById), Map.copyOf(fallbackReasonByItemId));
    }

    public StatusUpdateTradeOutDto prevalidatedResult(String itemId) {
        BatchStatusUpdateTradeItemOutDto item = prevalidatedItemsById.get(itemId);
        return item == null ? null : item.getResult();
    }

    public long itemFallbackCount() {
        return Math.max(0, requestedItemCount - prevalidatedCount);
    }
}

```

## src/main/java/com/nubo/operations/fractionation/api/service/impl/CustodianServiceImpl.java

```java
package com.nubo.operations.fractionation.api.service.impl;

import java.time.OffsetDateTime;
import java.util.List;

import org.springframework.stereotype.Service;

import com.nubo.operations.fractionation.api.models.enums.StatusEnum;

import com.nubo.operations.fractionation.api.application.properties.PropertiesConfig;
import com.nubo.operations.fractionation.api.application.properties.PropertiesContext;
import com.nubo.operations.fractionation.api.models.entity.PackageCustodianEntity;
import com.nubo.operations.fractionation.api.models.entity.PackageCustodianHistoryEntity;
import com.nubo.operations.fractionation.api.models.entity.PackageCustodianKey;
import com.nubo.operations.fractionation.api.models.entity.PackageDetailEntity;
import com.nubo.operations.fractionation.api.models.entity.SettlementEntity;
import com.nubo.operations.fractionation.api.models.entity.StatusEntity;
import com.nubo.operations.fractionation.api.repository.PackageCustodianHistoryRepository;
import com.nubo.operations.fractionation.api.repository.PackageCustodianRepository;
import com.nubo.operations.fractionation.api.repository.PackageDetailRepository;
import com.nubo.operations.fractionation.api.service.CustodianService;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class CustodianServiceImpl implements CustodianService {

    private final PackageDetailRepository packageDetailRepository;
    private final PackageCustodianRepository packageCustodianRepository;
    private final PackageCustodianHistoryRepository packageCustodianHistoryRepository;
    private final PropertiesConfig propertiesConfig;

    @Override
    public PackageCustodianHistoryEntity createPackageCustodianHistoryEntity(SettlementEntity settlementEntity,
            StatusEntity newCustodianStatus) {
        log.info("Creating new package custodian history for settlement with uniqueFractionId: {}",
                settlementEntity.getUniqueFractionId());

        Long uniqueFractionId = settlementEntity.getUniqueFractionId();
        Long tradeId = settlementEntity.getTrade().getId();
        Long packageStatusId = StatusEnum.CUSTODIAN_REJECTED.getId();
        PackageDetailEntity packageDetailEntity = packageDetailRepository
                .findByUniqueFractionIdAndTradeIdExcludingStatus(uniqueFractionId, tradeId, packageStatusId)
                .orElseThrow(() -> new EntityNotFoundException(String.format(
                        "PackageDetailEntity not found for uniqueFractionId: %s and tradeId: %s, excluding packageStatusId: %s",
                        uniqueFractionId, tradeId, packageStatusId)));

        PackageCustodianKey packageCustodianKey = PackageCustodianKey.builder()
                .packageCustodianId(packageDetailEntity.getPackageCustodianId())
                .marketId(packageDetailEntity.getMarketId())
                .packageDate(packageDetailEntity.getPackageDate())
                .build();
        PackageCustodianEntity packageCustodianEntity = packageCustodianRepository.findById(packageCustodianKey)
                .orElseThrow(() -> new EntityNotFoundException(String.format(
                        "PackageCustodianEntity not found for packageCustodianKey: %s",
                        packageCustodianKey)));

        PackageCustodianHistoryEntity packageCustodianHistoryEntity = PackageCustodianHistoryEntity.builder()
                .packageCustodianId(packageCustodianEntity.getPackageCustodianId())
                .marketId(packageCustodianEntity.getMarketId())
                .packageDate(packageCustodianEntity.getPackageDate())
                .eventTime(OffsetDateTime.now())
                .participantCode(packageCustodianEntity.getParticipantCode())
                .sequence(packageCustodianEntity.getSequence())
                .codeScb(packageCustodianEntity.getCodeScb())
                .packageNumber(packageCustodianEntity.getPackageNumber())
                .side(packageCustodianEntity.getSide())
                .investor(packageCustodianEntity.getInvestor())
                .generatingParticipant(packageCustodianEntity.getParticipant())
                .investorAccount(packageCustodianEntity.getInvestorAccount())
                .custodianStatus(newCustodianStatus)
                .custodian(packageCustodianEntity.getCustodian())
                .ficAdministrator(packageCustodianEntity.getFicAdministrator())
                .rejectionReasonId(null)
                .totalFractionQuantity(packageCustodianEntity.getTotalFractionQuantity())
                .totalFractionVolume(packageCustodianEntity.getTotalFractionVolume())
                .totalNetAmount(packageCustodianEntity.getTotalNetAmount())
                .totalCommissionAmount(packageCustodianEntity.getTotalCommissionAmount())
                .totalValTaxAmount(packageCustodianEntity.getTotalValTaxAmount())
                .averagePrice(packageCustodianEntity.getAveragePrice())
                .clearingDate(packageCustodianEntity.getClearingDate())
                .returnClearingDate(packageCustodianEntity.getReturnClearingDate())
                .averageFractionVolume(packageCustodianEntity.getAverageFractionVolume())
                .averageRate(packageCustodianEntity.getAverageRate())
                .returnNetAmount(packageCustodianEntity.getReturnNetAmount())
                .lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyDate(PropertiesContext.getClientDatetime())
                .lastModifyIp(PropertiesContext.getClientIp())
                .build();

        log.info("Package custodian history created successfully for settlement with uniqueFractionId: {}",
                settlementEntity.getUniqueFractionId());

        return packageCustodianHistoryEntity;
    }

    public void savePackageCustodianHistoryEntity(
            List<PackageCustodianHistoryEntity> packageCustodianHistoryEntityList) {
        log.info("Saving package custodian history entities, count: {}", packageCustodianHistoryEntityList.size());
        packageCustodianHistoryRepository.saveAll(packageCustodianHistoryEntityList);
        log.info("Package custodian history entities saved successfully.");
    }

}

```

## src/main/java/com/nubo/operations/fractionation/api/service/impl/FractionationServiceImpl.java

```java
package com.nubo.operations.fractionation.api.service.impl;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicLong;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;

import com.nubo.operations.fractionation.api.application.properties.PropertiesConfig;
import com.nubo.operations.fractionation.api.application.properties.PropertiesContext;
import com.nubo.operations.fractionation.api.client.operation.calculation.models.dto.request.SettleAccountsInDto;
import com.nubo.operations.fractionation.api.client.operation.calculation.models.dto.response.SettleAccountsOutDto;
import com.nubo.operations.fractionation.api.client.operation.calculation.service.OperationCalculationClient;
import com.nubo.operations.fractionation.api.client.operation.rules.models.dto.request.StatusUpdateTradeInDto;
import com.nubo.operations.fractionation.api.client.operation.rules.models.dto.response.StatusClientOutDto;
import com.nubo.operations.fractionation.api.client.operation.rules.models.dto.response.StatusUpdateTradeOutDto;
import com.nubo.operations.fractionation.api.client.operation.rules.service.OperationBusinessRuleClient;
import com.nubo.operations.fractionation.api.exception.ServiceException;
import com.nubo.operations.fractionation.api.exception.error.ErrorCode;
import com.nubo.operations.fractionation.api.helpers.MapperUtil;
import com.nubo.operations.fractionation.api.models.dto.request.CorrectionInDto;
import com.nubo.operations.fractionation.api.models.dto.request.FractionInDto;
import com.nubo.operations.fractionation.api.models.dto.response.SettlementOutDto;
import com.nubo.operations.fractionation.api.models.entity.DirectDepositoryEntity;
import com.nubo.operations.fractionation.api.models.entity.InvestorAccountEntity;
import com.nubo.operations.fractionation.api.models.entity.MilaDepositoryEntity;
import com.nubo.operations.fractionation.api.models.entity.ParticipantAccountEntity;
import com.nubo.operations.fractionation.api.models.entity.ParticipantEntity;
import com.nubo.operations.fractionation.api.models.entity.SettlementCorrectionEntity;
import com.nubo.operations.fractionation.api.models.entity.SettlementEntity;
import com.nubo.operations.fractionation.api.models.entity.SideEntity;
import com.nubo.operations.fractionation.api.models.entity.StatusEntity;
import com.nubo.operations.fractionation.api.models.entity.TaxesEntity;
import com.nubo.operations.fractionation.api.models.entity.TradeEntity;
import com.nubo.operations.fractionation.api.models.entity.TradeStatusHistoryEntity;
import com.nubo.operations.fractionation.api.models.entity.TypeEntity;
import com.nubo.operations.fractionation.api.models.enums.BusinessRuleEnum;
import com.nubo.operations.fractionation.api.models.enums.SideEnum;
import com.nubo.operations.fractionation.api.models.enums.StatusEnum;
import com.nubo.operations.fractionation.api.models.enums.TaxesEnum;
import com.nubo.operations.fractionation.api.models.enums.TypeEnum;
import com.nubo.operations.fractionation.api.models.enums.VersionApiEnum;
import com.nubo.operations.fractionation.api.repository.DirectDepositoryRepository;
import com.nubo.operations.fractionation.api.repository.InvestorAccountRepository;
import com.nubo.operations.fractionation.api.repository.MilaDepositoryRepository;
import com.nubo.operations.fractionation.api.repository.ParticipantAccountRepository;
import com.nubo.operations.fractionation.api.repository.SettlementCorrectionRepository;
import com.nubo.operations.fractionation.api.repository.SettlementRepository;
import com.nubo.operations.fractionation.api.repository.TaxesRepository;
import com.nubo.operations.fractionation.api.repository.TradeRepository;
import com.nubo.operations.fractionation.api.repository.TradeStatusHistoryRepository;
import com.nubo.operations.fractionation.api.service.BatchCacheService;
import com.nubo.operations.fractionation.api.service.FractionationService;

import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class FractionationServiceImpl implements FractionationService {

    private static final AtomicLong UNIQUE_FRACTION_SEQUENCE = new AtomicLong(System.currentTimeMillis() * 1_000_000L);

    private final EntityManager entityManager;
    private final TradeRepository tradeRepository;
    private final TradeStatusHistoryRepository tradeStatusHistoryRepository;
    private final SettlementRepository settlementRepository;
    private final OperationCalculationClient operationCalculationClient;
    private final OperationBusinessRuleClient operationBusinessRuleClient;
    private final DirectDepositoryRepository directDepositoryRepository;
    private final SettlementCorrectionRepository settlementCorrectionRepository;
    private final PropertiesConfig propertiesConfig;
    private final BatchCacheService batchCacheService;
    private final TaxesRepository taxesRepository;

    @Override
    @Transactional
    public List<SettlementOutDto> createFractions(Long tradeId, String sideId,
            List<FractionInDto> fractionInDtoList) {
        if (Objects.requireNonNull(
                VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return createFractionsV1(tradeId, sideId, fractionInDtoList);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<SettlementOutDto> createFractionsV1(Long tradeId, String sideId,
            List<FractionInDto> fractionInDtoList) {
        log.info(
                "Start method createFractionsV1 with tradeId -> {}, sideId -> {}, fractionInDtoList -> {}",
                tradeId, sideId, fractionInDtoList);

        // Serializa a nivel de BD las peticiones concurrentes sobre el mismo trade+side.
        // La 2da request queda esperando hasta que la 1ra haga commit; luego continúa
        // el flujo normal (delete + insert) y su asignación prevalece (última gana),
        // sin lanzar errores al front.
        this.acquireConcurrencyLock(tradeId, sideId);

        TradeEntity tradeEntity = validateTrade(tradeId);
        SideEntity sideEntity = this.findSideEntity(sideId);

        boolean assignmentMark = Boolean.TRUE.equals(fractionInDtoList.get(0).getHaveAssignmentMark());
        boolean automaticMark = Boolean.TRUE.equals(fractionInDtoList.get(0).getHaveAutomaticMark());
        BusinessRuleEnum businessRuleEnum = assignmentMark
                ? BusinessRuleEnum.RULE_ASSIGNMENT_OWN_POSITION
                : BusinessRuleEnum.RULE_ASSIGNMENT;

        StatusUpdateTradeInDto statusUpdateTradeInDto = StatusUpdateTradeInDto.builder()
                .code(businessRuleEnum)
                .tradeId(tradeId)
                .sideId(sideId)
                .build();

        StatusUpdateTradeOutDto statusUpdateTradeOutDto = operationBusinessRuleClient
                .validateUpdateStatusTrade(statusUpdateTradeInDto);

        if (!Boolean.TRUE.equals(statusUpdateTradeOutDto.getIsValid()) && !assignmentMark) {

           log.info("The assignment validation failed, trying reassignment validation for tradeId -> {}, sideId -> {}", tradeId, sideId);

           return this.updateAssignmentV1(tradeId, sideId, fractionInDtoList);
        }

        StatusEntity statusSide = Optional.ofNullable(statusUpdateTradeOutDto.getNewStatusSide())
                .map(StatusClientOutDto::getId)
                .flatMap(batchCacheService::validateStatus)
                .orElse(null);

        StatusEntity statusFraction = Optional.ofNullable(statusUpdateTradeOutDto.getNewStatusFraction())
                .map(StatusClientOutDto::getId)
                .flatMap(batchCacheService::validateStatus)
                .orElse(null);

        StatusEntity statusEntityCustodianFraction = Optional
                .ofNullable(statusUpdateTradeOutDto.getNewStatusCustodianFraction())
                .map(StatusClientOutDto::getId)
                .flatMap(batchCacheService::validateStatus)
                .orElse(null);

        StatusEntity statusTrade = Optional.ofNullable(statusUpdateTradeOutDto.getNewStatusTrade())
                .map(StatusClientOutDto::getId)
                .flatMap(batchCacheService::validateStatus)
                .orElse(null);

        this.deleteSettlementByTradeIdAndSideId(tradeId, sideId);

        List<SettlementEntity> settlementList = createFractionSettlementEntity(tradeEntity,
                sideEntity, statusFraction, statusEntityCustodianFraction, fractionInDtoList);
        this.saveAllSettlement(settlementList);

        this.updateTradeMarksAndStatus(fractionInDtoList.size(), tradeEntity, sideEntity, statusSide, statusTrade,
                settlementList, assignmentMark, automaticMark);

        List<SettlementOutDto> settlementOutDtoList = settlementList.stream()
                .filter(Objects::nonNull)
                .map(MapperUtil::settlementEntityToSettlementOutDto)
                .toList();

        log.info("End method createFractionsV1");

        return settlementOutDtoList;
    }

    @Override
    @Transactional
    public List<SettlementOutDto> updateAssignment(Long tradeId, String sideId,
            List<FractionInDto> fractionInDtoList) {
        if (Objects.requireNonNull(
                VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return updateAssignmentV1(tradeId, sideId, fractionInDtoList);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<SettlementOutDto> updateAssignmentV1(Long tradeId, String sideId,
            List<FractionInDto> fractionInDtoList) {
        log.info(
                "Start method updateAssignmentV1 with tradeId -> {}, sideId -> {}, assignmentInDtoList -> {}",
                tradeId, sideId, fractionInDtoList);

        // Serializa a nivel de BD las peticiones concurrentes sobre el mismo trade+side.
        // Ver comentario en createFractionsV1 para el detalle.
        this.acquireConcurrencyLock(tradeId, sideId);

        TradeEntity tradeEntity = validateTrade(tradeId);
        SideEntity sideEntity = this.findSideEntity(sideId);

        StatusUpdateTradeInDto statusUpdateTradeInDto = StatusUpdateTradeInDto.builder()
                .code(BusinessRuleEnum.RULE_REASSIGNMENT)
                .tradeId(tradeId)
                .sideId(sideId)
                .build();

        StatusUpdateTradeOutDto statusUpdateTradeOutDto = operationBusinessRuleClient
                .validateUpdateStatusTrade(statusUpdateTradeInDto);

        if (!statusUpdateTradeOutDto.getIsValid()) {
            throw new ServiceException(ErrorCode.CLIENT_OPERATION_RULES_ERROR,
                    statusUpdateTradeOutDto.getDescription(),
                    HttpStatus.BAD_REQUEST);
        }

        StatusEntity statusEntitySide = Optional.ofNullable(statusUpdateTradeOutDto.getNewStatusSide())
                .map(StatusClientOutDto::getId)
                .flatMap(batchCacheService::validateStatus)
                .orElse(null);

        StatusEntity statusEntityFraction = Optional.ofNullable(statusUpdateTradeOutDto.getNewStatusFraction())
                .map(StatusClientOutDto::getId)
                .flatMap(batchCacheService::validateStatus)
                .orElse(null);

        StatusEntity statusEntityCustodianFraction = Optional
                .ofNullable(statusUpdateTradeOutDto.getNewStatusCustodianFraction())
                .map(StatusClientOutDto::getId)
                .flatMap(batchCacheService::validateStatus)
                .orElse(null);

        StatusEntity statusEntityFolio = Optional.ofNullable(statusUpdateTradeOutDto.getNewStatusTrade())
                .map(StatusClientOutDto::getId)
                .flatMap(batchCacheService::validateStatus)
                .orElse(null);

        this.deleteSettlementByTradeIdAndSideId(tradeId, sideId);

        List<SettlementEntity> settlementList = this.createFractionSettlementEntity(tradeEntity, sideEntity,
                statusEntityFraction, statusEntityCustodianFraction, fractionInDtoList);

        this.saveAllSettlement(settlementList);
        this.updateTradeMarksAndStatus(fractionInDtoList.size(), tradeEntity, sideEntity, statusEntitySide,
                statusEntityFolio, settlementList, false, false);

        List<SettlementOutDto> settlementOutDtoList = settlementList.stream()
                .filter(Objects::nonNull)
                .map(MapperUtil::settlementEntityToSettlementOutDto)
                .toList();

        log.info("End method updateAssignmentV1");
        return settlementOutDtoList;
    }

    @Override
    @Transactional
    public List<SettlementOutDto> updateCorrection(Long tradeId, String sideId,
            List<CorrectionInDto> correctionInDtoList) {
        if (Objects.requireNonNull(
                VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return updateCorrectionV1(tradeId, sideId, correctionInDtoList);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<SettlementOutDto> updateCorrectionV1(Long tradeId, String sideId,
            List<CorrectionInDto> correctionInDtoList) {
        log.info(
                "Start method updateCorrectionV1 with tradeId -> {}, sideId -> {}, statusId -> {}, correctionInDtoList -> {}",
                tradeId, sideId, correctionInDtoList);
        if (correctionInDtoList == null || correctionInDtoList.isEmpty()) {
            throw new ServiceException(ErrorCode.BAD_REQUEST, HttpStatus.BAD_REQUEST);
        }

        TradeEntity tradeEntity = validateTrade(tradeId);
        SideEntity sideEntity = findSideEntity(sideId);
        StatusEntity statusEntity = findStatusEntity(StatusEnum.CORRECTION_ACCEPTED.getId());


        List<SettlementEntity> settlementList = correctionInDtoList.stream()
                .map(correctionInDto -> updateSettlementEntityForCorrection(tradeEntity, sideEntity,
                        statusEntity,
                        correctionInDto))
                .toList();

        List<SettlementEntity> settlementSaveList = settlementRepository.saveAll(settlementList);

        List<SettlementEntity> settlementEntitiesWithIndMaster = settlementSaveList.stream()
                .filter(SettlementEntity::getIndMaster)
                .toList();

        boolean hasMaster = !settlementEntitiesWithIndMaster.isEmpty();
        if (sideEntity.getId().equals(SideEnum.SELL.getValue())) {
            tradeEntity.setIndMasterSell(hasMaster);
        }
        if (sideEntity.getId().equals(SideEnum.BUY.getValue())) {
            tradeEntity.setIndMasterBuy(hasMaster);
        }
        TradeEntity tradeupdate = tradeRepository.save(tradeEntity);

        updateTradeStatusIfNeeded(tradeupdate, sideId);

        correctionInDtoList.forEach(
                correctionInDto -> updateSettlementCorrectionEntity(correctionInDto.getSettlementCorrectionIds(),
                        statusEntity));

        List<SettlementOutDto> settlementOutDtoList = settlementSaveList.stream()
                .map(MapperUtil::settlementEntityToSettlementOutDto)
                .toList();

        log.info("End method updateCorrectionV1");
        return settlementOutDtoList;
    }

    @Override
    @Transactional
    public SettlementOutDto createCorrectionNewFraction(Long tradeId, String sideId, Integer fraction,
            Long settlementCorrectionInitial, Long settlementCorrectionActual) {
        if (Objects.requireNonNull(
                VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return createCorrectionNewFractionV1(tradeId, sideId, fraction,
                    settlementCorrectionInitial, settlementCorrectionActual);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private SettlementOutDto createCorrectionNewFractionV1(Long tradeId, String sideId, Integer fraction,
            Long settlementCorrectionInitial, Long settlementCorrectionActual) {
        log.info(
                "Start method createCorrectionNewFractionV1 with tradeId -> {}, sideId -> {}, fraction -> {}, settlementCorrectionInitial -> {}"
                        +
                        ", settlementCorrectionActual -> {}",
                tradeId, sideId, fraction, settlementCorrectionInitial, settlementCorrectionActual);

        // TradeEntity tradeEntity = validateTrade(tradeId);
        // SideEntity sideEntity = findSideEntity(sideId);
        StatusEntity statusEntity = findStatusEntity(StatusEnum.CORRECTION_ACCEPTED.getId());

        SettlementEntity settlementMaster = findSettlement(tradeId, fraction, sideId);
        SettlementCorrectionEntity settlementCorrectionEntityInitial = findCorrection(settlementCorrectionInitial);
        SettlementCorrectionEntity settlementCorrectionEntityActual = findCorrection(settlementCorrectionActual);

        Integer newFraction = getNextAvailableFraction(tradeId, sideId);

        SettlementEntity newSettlementEntity = settlementRepository
                .save(createNewSettlementFromCorrection(settlementMaster,
                        settlementCorrectionEntityActual, newFraction, statusEntity));

        updateMasterSettlementQuantity(settlementMaster, settlementCorrectionEntityActual.getFractionQuantity());

        updateTradeStatusIfNeeded(settlementMaster.getTrade(), sideId);

        updateCorrectionStatus(settlementCorrectionEntityActual);
        updateCorrectionStatus(settlementCorrectionEntityInitial);

        log.info("End method createCorrectionNewFractionV1");
        return MapperUtil.settlementEntityToSettlementOutDto(newSettlementEntity);
    }

    private SettlementEntity createNewSettlementFromCorrection(SettlementEntity masterSettlement,
            SettlementCorrectionEntity correctionEntity, Integer newFraction, StatusEntity newStatusEntity) {
        LocalDateTime now = LocalDateTime.now();

        SettleAccountsInDto settleAccountsInDto = SettleAccountsInDto.builder()
                .quantity(masterSettlement.getFractionQuantity())
                .price(masterSettlement.getTrade().getPrice())
                .commission(correctionEntity.getCommissionPercentage())
                .valTax(masterSettlement.getValTax())
                .sideId(masterSettlement.getSide().getId())
                .build();
        SettleAccountsOutDto settleAccountsOutDto = operationCalculationClient
                .getSettleAccounts(settleAccountsInDto);

        return SettlementEntity.builder()
                .trade(masterSettlement.getTrade())
                .fraction(newFraction)
                .side(masterSettlement.getSide())
                .investor(
                        correctionEntity.getInvestorAccount() != null
                                && correctionEntity.getInvestorAccount().getInvestor() != null
                                        ? correctionEntity.getInvestorAccount().getInvestor()
                                        : null)
                .investorAccount(correctionEntity.getInvestorAccount() != null
                        ? correctionEntity.getInvestorAccount()
                        : null)
                .participantAccount(correctionEntity.getParticipantAccount() != null
                        ? correctionEntity.getParticipantAccount()
                        : null)
                .fractionQuantity(correctionEntity.getFractionQuantity())
                .fiduciarySpecialist(masterSettlement.getFiduciarySpecialist())
                .commissionPercentage(correctionEntity.getCommissionPercentage() != null
                        ? correctionEntity.getCommissionPercentage()
                        : masterSettlement.getCommissionPercentage())
                .valTax(masterSettlement.getValTax())
                .withholdingTax(masterSettlement.getWithholdingTax())
                .withholdingTaxAmount(masterSettlement.getWithholdingTaxAmount())
                .transferValue(masterSettlement.getTransferValue())
                .issuedReceipt(masterSettlement.getIssuedReceipt())
                .issuedReceiptNumber(masterSettlement.getIssuedReceiptNumber())
                .referenceAllocId(masterSettlement.getReferenceAllocId())
                .repoAmount(masterSettlement.getRepoAmount())
                .fundingAmount(masterSettlement.getFundingAmount())
                .netOutFlowTotal(masterSettlement.getNetOutFlowTotal())
                .outFlowTurnoverValue(masterSettlement.getOutFlowTurnoverValue())
                .returnTurnoverValue(masterSettlement.getReturnTurnoverValue())
                .deliveryVersusPaymentValue(masterSettlement.getDeliveryVersusPaymentValue())
                .tradingSystem(masterSettlement.getTradingSystem())
                .status(newStatusEntity)
                .brokerageService(masterSettlement.getBrokerageService())
                .custodianId(masterSettlement.getCustodianId())
                .bankAccountId(masterSettlement.getBankAccountId())
                .reference(correctionEntity.getReference() != null
                        ? correctionEntity.getReference()
                        : masterSettlement.getReference())
                .capitalGainValue(masterSettlement.getCapitalGainValue())
                .disbursementValue(masterSettlement.getDisbursementValue())
                .sourceQuoteType(correctionEntity.getSourceQuoteType())
                .ficAdministratorId(masterSettlement.getFicAdministratorId())
                .directDepositor(masterSettlement.getDirectDepositor())
                .indMaster(false)
                .fractionVolume(settleAccountsOutDto.getAmount())
                .commissionAmount(settleAccountsOutDto.getCommissionAmount())
                .valTaxAmount(settleAccountsOutDto.getValTaxAmount())
                .netAmount(settleAccountsOutDto.getNetAmount())
                .settlementAmount(settleAccountsOutDto.getTransferValue())
                .uniqueFractionId(generateUniqueFractionId())
                .lastModifyUser(masterSettlement.getLastModifyUser())
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyDate(now)
                .lastModifyIp(masterSettlement.getLastModifyIp())
                .matchDate(masterSettlement.getMatchDate())
                .marketId(masterSettlement.getMarketId())
                .build();
    }

    private List<SettlementEntity> createFractionSettlementEntity(
            TradeEntity tradeEntity, SideEntity sideEntity, StatusEntity statusFraction,
            StatusEntity statusCustodianFraction, List<FractionInDto> fractionInDtoList) {
        int size = fractionInDtoList.size();
        DirectDepositoryEntity directDepositoryEntity = directDepositoryRepository
                .findFirstByParticipantIdOrderByIdAsc(validateParticipantBySide(tradeEntity, sideEntity).getId())
                .orElse(null);
        LocalDateTime clientDatetime = PropertiesContext.getClientDatetime();

        return IntStream.range(0, size)
                .mapToObj(i -> createSettlementEntity(
                        tradeEntity,
                        sideEntity,
                        statusFraction,
                        statusCustodianFraction,
                        size > 1 ? i + 1 : 0,
                        fractionInDtoList.get(i),
                        directDepositoryEntity,
                        clientDatetime))
                .toList();
    }

    private SettlementEntity createSettlementEntity(
            TradeEntity tradeEntity,
            SideEntity sideEntity,
            StatusEntity statusFraction,
            StatusEntity statusCustodianFraction,
            Integer fraction,
            FractionInDto fractionInDto,
            DirectDepositoryEntity directDepositoryEntity,
            LocalDateTime clientDatetime) {

        SettleAccountsInDto settleAccountsInDto = SettleAccountsInDto.builder()
                .quantity(fractionInDto.getFractionQuantity())
                .price(tradeEntity.getPrice())
                .commission(fractionInDto.getCommissionPercentage())
                .valTax(fractionInDto.getValTax())
                .sideId(sideEntity.getId())
                .typeId(tradeEntity.getType().getId())
                .forwardPrice(tradeEntity.getForwardPrice())
                .volume(tradeEntity.getVolume())
                .build();
        SettleAccountsOutDto settleAccountsOutDto = operationCalculationClient
                .getSettleAccounts(settleAccountsInDto);

        MilaDepositoryEntity milaDepositoryEntity = ObjectUtils.isEmpty(fractionInDto.getMilaDirectDepositorId())
                ? null
                : validateMilaDirectDepositor(fractionInDto.getMilaDirectDepositorId());

        boolean existsCustodian = !ObjectUtils.isEmpty(fractionInDto.getCustodianId());
        StatusEntity statusEntityCustodianFraction = fractionInDto.getCustodianStatusId() != null
                ? findStatusEntity(fractionInDto.getCustodianStatusId())
                : statusCustodianFraction;
        Long uniqueFractionId = fractionInDto.getUniqueFractionId() != null && fractionInDto.getUniqueFractionId() != 0
                ? fractionInDto.getUniqueFractionId()
                : generateUniqueFractionId();

        // Optimización: Validar una sola vez y reutilizar (evita llamadas duplicadas)
        InvestorAccountEntity investorAccountEntity = ObjectUtils.isEmpty(fractionInDto.getInvestorAccountId())
                ? null
                : validateInvestorAccount(fractionInDto.getInvestorAccountId());

        ParticipantAccountEntity participantAccountEntity = ObjectUtils.isEmpty(fractionInDto.getParticipantAccountId())
                ? null
                : validateParticipantAccount(fractionInDto.getParticipantAccountId());

        Boolean indMaster = participantAccountEntity != null && participantAccountEntity.getIndMaster();

        SettlementEntity settlementEntity = SettlementEntity.builder()
                .trade(tradeEntity)
                .fraction(fraction)
                .side(sideEntity)
                .uniqueFractionId(uniqueFractionId)
                .status(statusFraction)
                .investor(investorAccountEntity != null ? investorAccountEntity.getInvestor() : null)
                .investorAccount(investorAccountEntity)
                .participantAccount(participantAccountEntity)
                .fiduciarySpecialist(fractionInDto.getFiduciarySpecialist())
                .directDepositor(directDepositoryEntity)
                .sourceQuoteType(findTypeEntity(fractionInDto.getSourceQuoteTypeId()))
                .fractionQuantity(fractionInDto.getFractionQuantity())
                .reference(fractionInDto.getReference())
                .commissionPercentage(fractionInDto.getCommissionPercentage())
                .valTax(fractionInDto.getValTax())
                .tradingSystem(tradeEntity.getTradingSystem())
                .fractionVolume(settleAccountsOutDto.getAmount())
                .commissionAmount(settleAccountsOutDto.getCommissionAmount())
                .valTaxAmount(settleAccountsOutDto.getValTaxAmount())
                .netAmount(settleAccountsOutDto.getNetAmount())
                .settlementAmount(settleAccountsOutDto.getTransferValue())
                .cashAccount(fractionInDto.getCashAccount())
                .indMaster(indMaster)
                .custodianId(existsCustodian ? fractionInDto.getCustodianId() : null)
                .custodianStatus(existsCustodian ? statusEntityCustodianFraction : null)
                .ficAdministratorId(ObjectUtils.isEmpty(fractionInDto.getFicAdministratorId()) ? null
                        : fractionInDto.getFicAdministratorId())
                .returnTurnoverValue(settleAccountsOutDto.getReturnTurnoverValue())
                .netOutFlowTotal(settleAccountsOutDto.getNetOutflowTotal())
                .outFlowTurnoverValue(settleAccountsOutDto.getOutflowTurnoverValue())
                .transferParticipantId(existsCustodian ? fractionInDto.getTransferParticipantId() : null)
                .milaDirectDepositor(milaDepositoryEntity)
                .referencePackage(fractionInDto.getReferencePackage())
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyIp(PropertiesContext.getClientIp())
                .lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyDate(clientDatetime)
                .matchDate(tradeEntity.getMatchDate())
                .marketId(tradeEntity.getMarket() == null ? "" : tradeEntity.getMarket().getId())
                .build();

        return settlementEntity;
    }

    private void updateTradeMarksAndStatus(Integer numberFraction, TradeEntity tradeEntity,
            SideEntity sideEntity, StatusEntity statusSide, StatusEntity statusTrade,
            List<SettlementEntity> settlementList,
            boolean assignmentMark, boolean automaticMark) {
        boolean isBuySide = SideEnum.BUY.getValue().equals(sideEntity.getId());
        boolean isSellSide = SideEnum.SELL.getValue().equals(sideEntity.getId());
        boolean isFractional = numberFraction > 1;
        boolean isMasterAccount = this.hasMasterSettlement(settlementList);

        tradeEntity.setAssignmentMarkBuy(isBuySide ? Boolean.TRUE : tradeEntity.getAssignmentMarkBuy());
        tradeEntity.setAssignmentMarkSell(isSellSide ? Boolean.TRUE : tradeEntity.getAssignmentMarkSell());
        tradeEntity.setFractionalMarkBuy(isBuySide ? Boolean.valueOf(isFractional)
                : tradeEntity.getFractionalMarkBuy());
        tradeEntity.setFractionalMarkSell(isSellSide ? Boolean.valueOf(isFractional)
                : tradeEntity.getFractionalMarkSell());
        tradeEntity.setBuyStatus(isBuySide ? statusSide : tradeEntity.getBuyStatus());
        tradeEntity.setSellStatus(isSellSide ? statusSide : tradeEntity.getSellStatus());
        tradeEntity.setStatus(ObjectUtils.isEmpty(statusTrade) ? tradeEntity.getStatus() : statusTrade);
        tradeEntity.setIndMasterBuy(isBuySide ? Boolean.valueOf(isMasterAccount) : tradeEntity.getIndMasterBuy());
        tradeEntity.setIndMasterSell(isSellSide ? Boolean.valueOf(isMasterAccount) : tradeEntity.getIndMasterSell());
        tradeEntity.setFinalAssignmentMarkBuy(
                isBuySide ? Boolean.valueOf(assignmentMark) : tradeEntity.getFinalAssignmentMarkBuy());
        tradeEntity.setFinalAssignmentMarkSell(
                isSellSide ? Boolean.valueOf(assignmentMark) : tradeEntity.getFinalAssignmentMarkSell());
        tradeEntity.setAutomaticMarkBuy(
                isBuySide ? Boolean.valueOf(automaticMark) : tradeEntity.getAutomaticMarkBuy());
        tradeEntity.setAutomaticMarkSell(
                isSellSide ? Boolean.valueOf(automaticMark) : tradeEntity.getAutomaticMarkSell());
        tradeEntity.setLastModifyApplication(propertiesConfig.getApiName());
        tradeEntity.setLastModifyIp(PropertiesContext.getClientIp());
        tradeEntity.setLastModifyUser(PropertiesContext.getClientUser());
        tradeEntity.setLastModifyDate(PropertiesContext.getClientDatetime());

        log.info("Updating trade id={}, matchId={}, matchDate={}",
                tradeEntity.getId(), tradeEntity.getMatchId(), tradeEntity.getMatchDate());
        TradeStatusHistoryEntity tradeStatusHistoryEntityBySide = TradeStatusHistoryEntity.builder()
                .tradeId(tradeEntity.getId())
                .time(PropertiesContext.getClientDatetime())
                .side(sideEntity)
                .status(statusSide)
                .detail(assignmentMark ? "Asignado automáticamente por el sistema" : "Operación Asignada")
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyIp(PropertiesContext.getClientIp())
                .lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyDate(PropertiesContext.getClientDatetime())
                .build();

        tradeRepository.save(tradeEntity);
        tradeStatusHistoryRepository.save(tradeStatusHistoryEntityBySide);
    }

    private SettlementEntity updateSettlementEntityForCorrection(TradeEntity tradeEntity, SideEntity sideEntity,
            StatusEntity newStatusEntity, CorrectionInDto correctionInDto) {
        SettlementEntity settlementLast = settlementRepository
                .findByTradeIdAndFractionAndSideId(tradeEntity.getId(), correctionInDto.getFraction(),
                        sideEntity.getId())
                .orElseThrow(() -> new ServiceException(ErrorCode.SETTLEMENT_NOT_FOUND, HttpStatus.NOT_FOUND));

        TaxesEntity taxesEntity = taxesRepository
                .findByCountryIdAndCode(tradeEntity.getCountry().getId(), TaxesEnum.IVA.getValue())
                .orElseThrow(() -> new ServiceException(ErrorCode.TAXES_NOT_FOUND, HttpStatus.NOT_FOUND));

        InvestorAccountEntity investorAccountEntity = correctionInDto.getInvestorAccountId() != null
                ? validateInvestorAccount(correctionInDto.getInvestorAccountId())
                : (correctionInDto.getParticipantAccountId() != null
                        ? null
                        : settlementLast.getInvestorAccount());

        SettleAccountsInDto settleAccountsInDto = SettleAccountsInDto.builder()
                .quantity(settlementLast.getFractionQuantity())
                .price(settlementLast.getTrade().getPrice())
                .commission(correctionInDto.getCommissionPercentage())
                .valTax(investorAccountEntity != null
                        ? (Boolean.TRUE.equals(investorAccountEntity.getTaxExemp())
                                ? BigDecimal.ZERO
                                : taxesEntity.getValue())
                        : taxesEntity.getValue())
                .sideId(settlementLast.getSide().getId())
                .build();
        SettleAccountsOutDto settleAccountsOutDto = operationCalculationClient
                .getSettleAccounts(settleAccountsInDto);

        ParticipantAccountEntity participantAccountEntity = correctionInDto.getParticipantAccountId() != null
                ? validateParticipantAccount(correctionInDto.getParticipantAccountId())
                : correctionInDto.getInvestorAccountId() != null ? null : settlementLast.getParticipantAccount();

        return settlementLast.toBuilder()
                .investorAccount(investorAccountEntity)
                .investor(investorAccountEntity != null
                        ? investorAccountEntity.getInvestor()
                        : null)
                .participantAccount(participantAccountEntity)
                .fractionQuantity(correctionInDto.getFractionQuantity() != null ? correctionInDto.getFractionQuantity()
                        : settlementLast.getFractionQuantity())
                .reference(correctionInDto.getReference() == null
                        ? settlementLast.getReference()
                        : correctionInDto.getReference())
                .status(newStatusEntity)
                .fractionVolume(settleAccountsOutDto.getAmount())
                .commissionPercentage(correctionInDto.getCommissionPercentage())
                .commissionAmount(settleAccountsOutDto.getCommissionAmount())
                .valTaxAmount(settleAccountsOutDto.getValTaxAmount())
                .netAmount(settleAccountsOutDto.getNetAmount())
                .settlementAmount(settleAccountsOutDto.getTransferValue())
                .indMaster(participantAccountEntity != null ? participantAccountEntity.getIndMaster() : false)
                .sourceQuoteType(ObjectUtils.isEmpty(correctionInDto.getSourceQuoteTypeId()) ? null
                        : findTypeEntity(correctionInDto.getSourceQuoteTypeId()))
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyDate(PropertiesContext.getClientDatetime())
                .build();
    }

    private void updateSettlementCorrectionEntity(List<Long> settlementCorrectionIds, StatusEntity newStatusEntity) {
        if (settlementCorrectionIds == null || settlementCorrectionIds.isEmpty()) {
            return;
        }
        settlementCorrectionRepository.bulkUpdateStatusByIds(
                settlementCorrectionIds,
                newStatusEntity,
                PropertiesContext.getClientUser(),
                propertiesConfig.getApiName(),
                PropertiesContext.getClientDatetime());
    }

    private void saveAllSettlement(List<SettlementEntity> settlementList) {
        List<SettlementEntity> settlementEntityList = settlementList.stream()
                .filter(Objects::nonNull)
                .toList();

        settlementRepository.saveAll(settlementEntityList);
    }

    private void deleteSettlementByTradeIdAndSideId(Long tradeId, String sideId) {
        settlementRepository.deleteByTradeIdAndSideId(tradeId, sideId);
    }

    /**
     * Adquiere un advisory lock transaccional en Postgres para serializar
     * peticiones concurrentes de creación/actualización de fracciones sobre el
     * mismo tradeId + sideId. Debe invocarse dentro de la transacción
     * (@Transactional) del flujo. El lock se libera automáticamente al hacer
     * commit/rollback.
     */
    private void acquireConcurrencyLock(Long tradeId, String sideId) {
        String key = "fractionation:trade:" + tradeId + ":side:" + sideId;
        log.debug("Acquiring advisory lock for key -> {}", key);
        settlementRepository.acquireAdvisoryLockOnTradeSide(key);
        log.debug("Advisory lock acquired for key -> {}", key);
    }

    private TradeEntity validateTrade(Long tradeId) {
        if (tradeId == null) {
            throw new ServiceException(ErrorCode.TRADE_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
        return tradeRepository.findById(tradeId)
                .orElseThrow(() -> new ServiceException(ErrorCode.TRADE_NOT_FOUND,
                        HttpStatus.NOT_FOUND));
    }

    private InvestorAccountEntity validateInvestorAccount(Long investorAccountId) {
        if (investorAccountId == null) {
            throw new ServiceException(ErrorCode.INVESTOR_ACCOUNT_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
        return batchCacheService.validateInvestorAccount(investorAccountId)
                .orElseThrow(() -> new ServiceException(ErrorCode.INVESTOR_ACCOUNT_NOT_FOUND,
                        HttpStatus.NOT_FOUND));
    }

    private ParticipantAccountEntity validateParticipantAccount(Long participantAccountId) {
        if (participantAccountId == null) {
            throw new ServiceException(ErrorCode.PARTICIPANT_ACCOUNT_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
        return batchCacheService.validateParticipantAccount(participantAccountId)
                .orElseThrow(() -> new ServiceException(ErrorCode.PARTICIPANT_ACCOUNT_NOT_FOUND,
                        HttpStatus.NOT_FOUND));
    }

    private StatusEntity findStatusEntity(Long statusId) {
        if (statusId == null) {
            throw new ServiceException(ErrorCode.STATUS_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
        return batchCacheService.validateStatus(statusId)
                .orElseThrow(() -> new ServiceException(ErrorCode.STATUS_NOT_FOUND,
                        HttpStatus.NOT_FOUND));
    }

    private TypeEntity findTypeEntity(Long typeId) {
        if (typeId == null) {
            throw new ServiceException(ErrorCode.TYPE_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
        return this.batchCacheService.validateType(typeId)
                .orElseThrow(() -> new ServiceException(ErrorCode.TYPE_NOT_FOUND,
                        HttpStatus.NOT_FOUND));
    }

    private SideEntity findSideEntity(String sideId) {
        if (sideId == null) {
            throw new ServiceException(ErrorCode.SIDE_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
        return this.batchCacheService.validateSide(sideId)
                .orElseThrow(() -> new ServiceException(ErrorCode.SIDE_NOT_FOUND,
                        HttpStatus.NOT_FOUND));
    }

    public boolean hasMasterSettlement(List<SettlementEntity> settlements) {
        return settlements.stream()
                .filter(Objects::nonNull)
                .anyMatch(newSettlementEntity -> Boolean.TRUE
                        .equals(newSettlementEntity.getIndMaster()));
    }

    private ParticipantEntity validateParticipantBySide(TradeEntity tradeEntity, SideEntity sideEntity) {
        ParticipantEntity participantEntity = null;
        if (SideEnum.BUY.getValue().equalsIgnoreCase(sideEntity.getId())) {
            participantEntity = tradeEntity.getParticipantBuy();
        }
        if (SideEnum.SELL.getValue().equalsIgnoreCase(sideEntity.getId())) {
            participantEntity = tradeEntity.getParticipantSell();
        }
        return participantEntity != null ? participantEntity : ParticipantEntity.builder().id(0L).build();
    }

    private MilaDepositoryEntity validateMilaDirectDepositor(Long milaDirectDepositorId) {
        if (milaDirectDepositorId == null) {
            return null;
        }

        return batchCacheService.validateMilaDepositor(milaDirectDepositorId)
                .orElseThrow(() -> new ServiceException(ErrorCode.MILA_DEPOSITORY_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private Long generateUniqueFractionId() {
        return UNIQUE_FRACTION_SEQUENCE.incrementAndGet();
    }

    private SettlementEntity findSettlement(Long tradeId, Integer fraction, String sideId) {
        return settlementRepository.findByTradeIdAndFractionAndSideId(tradeId, fraction, sideId)
                .orElseThrow(() -> new EntityNotFoundException(
                        String.format("Settlement not found for tradeId: %d, fraction: %d, side: %s", tradeId, fraction,
                                sideId)));
    }

    private SettlementCorrectionEntity findCorrection(Long correctionId) {
        return settlementCorrectionRepository
                .findById(
                        correctionId)
                .orElseThrow(() -> new EntityNotFoundException(
                        String.format("SettlementCorrection not found for correctionId: %d", correctionId)));
    }

    private Integer getNextAvailableFraction(Long tradeId, String sideId) {
        Integer maxFraction = settlementRepository.findMaxFractionByTradeIdAndSideId(tradeId, sideId)
                .orElse(0);
        return maxFraction + 1;
    }

    private void updateTradeStatusIfNeeded(TradeEntity tradeEntity, String sideId) {
        List<SettlementEntity> settlements = settlementRepository
                .findAllByTradeIdAndSideId(tradeEntity.getId(), sideId);

        Map<Long, Long> statusCountMap = settlements.stream()
                .collect(Collectors.groupingBy(s -> s.getStatus().getId(), Collectors.counting()));

        long correctionRequestCount = statusCountMap.getOrDefault(StatusEnum.CORRECTION_REQUEST.getId(), 0L);
        long correctionAcceptedCount = statusCountMap.getOrDefault(StatusEnum.CORRECTION_ACCEPTED.getId(), 0L);
        long correctionRejectedCount = statusCountMap.getOrDefault(StatusEnum.CORRECTION_REJECTED.getId(), 0L);
        long acceptedCount = statusCountMap.getOrDefault(StatusEnum.ACCEPTED.getId(), 0L);

        log.debug(
                "Settlement status counts for tradeId {} side {} -> CORRECTION_REQUEST: {}, CORRECTION_ACCEPTED: {}, CORRECTION_REJECTED: {}, ACCEPTED: {}",
                tradeEntity.getId(), sideId,
                correctionRequestCount, correctionAcceptedCount, correctionRejectedCount, acceptedCount);

        if (correctionRequestCount > 0) {
            log.info("Trade {} and side {} has pending correction requests, status not updated",
                    tradeEntity.getId(), sideId);

        } else if (correctionRejectedCount > 0) {
            StatusEntity newStatus = findStatusEntity(StatusEnum.CORRECTION_REJECTED.getId());
            if (SideEnum.BUY.getValue().equals(sideId)) {
                tradeEntity.setBuyStatus(newStatus);
            } else if (SideEnum.SELL.getValue().equals(sideId)) {
                tradeEntity.setSellStatus(newStatus);
            }

            tradeEntity.setLastModifyApplication(propertiesConfig.getApiName());
            tradeRepository.save(tradeEntity);

            log.info("Trade status updated: tradeId {} and side {} -> status {} (id: {})", tradeEntity.getId(),
                    sideId, newStatus.getDescription(), newStatus.getId());
        } else if (correctionAcceptedCount + acceptedCount == settlements.size()) {
            StatusEntity newStatus = findStatusEntity(StatusEnum.CORRECTION_ACCEPTED.getId());
            if (SideEnum.BUY.getValue().equals(sideId)) {
                tradeEntity.setBuyStatus(newStatus);
            } else if (SideEnum.SELL.getValue().equals(sideId)) {
                tradeEntity.setSellStatus(newStatus);
            }

            tradeEntity.setLastModifyApplication(propertiesConfig.getApiName());
            tradeRepository.save(tradeEntity);

            log.info("Trade status updated: tradeId {} and side {} -> status {} (id: {})", tradeEntity.getId(),
                    sideId, newStatus.getDescription(), newStatus.getId());
        } else {
            log.info(
                    "No status update needed for tradeId {} and side {}, all settlements are in accepted or other statuses",
                    tradeEntity.getId(), sideId);
        }
    }

    private void updateCorrectionStatus(SettlementCorrectionEntity correction) {
        Long newStatusId = StatusEnum.CORRECTION_ACCEPTED.getId();

        StatusEntity newStatus = findStatusEntity(newStatusId);
        correction.setStatus(newStatus);
        correction.setLastModifyApplication(propertiesConfig.getApiName());
        correction.setLastModifyDate(LocalDateTime.now());

        settlementCorrectionRepository.save(correction);
        log.info(correction.getReassignmentType().getDescription() + " correction status updated: correctionNumber {} -> status {}",
                correction.getCorrectionNumber(), newStatus.getShortName());
    }

    private void updateInitialCorrectionStatus(SettlementCorrectionEntity correctionInicial) {
        Long newStatusId = StatusEnum.CORRECTION_ACCEPTED.getId();

        StatusEntity newStatus = findStatusEntity(newStatusId);
        correctionInicial.setStatus(newStatus);
        correctionInicial.setLastModifyApplication(propertiesConfig.getApiName());
        correctionInicial.setLastModifyDate(LocalDateTime.now());

        settlementCorrectionRepository.save(correctionInicial);
        log.info("Initial correction status updated: correctionNumber {} -> status {}",
                correctionInicial.getCorrectionNumber(), newStatus.getShortName());
    }

    private void updateMasterSettlementQuantity(SettlementEntity masterSettlement, BigDecimal acceptedQuantity) {
        BigDecimal currentQuantity = masterSettlement.getFractionQuantity();
        BigDecimal remainingQuantity = currentQuantity.subtract(acceptedQuantity);

        masterSettlement.setFractionQuantity(remainingQuantity);
        masterSettlement.setLastModifyApplication(propertiesConfig.getApiName());
        masterSettlement.setLastModifyDate(LocalDateTime.now());

        settlementRepository.save(masterSettlement);
        log.info("Updated master settlement quantity - tradeId: {}, fraction: {}, remaining: {}",
                masterSettlement.getTrade().getId(), masterSettlement.getFraction(), remainingQuantity);
    }

}

```

## src/main/java/com/nubo/operations/fractionation/api/web/controller/FractionationRestController.java

```java
package com.nubo.operations.fractionation.api.web.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nubo.operations.fractionation.api.models.dto.request.CorrectionInDto;
import com.nubo.operations.fractionation.api.models.dto.request.BatchAssignmentInDto;
import com.nubo.operations.fractionation.api.models.dto.request.FractionInDto;
import com.nubo.operations.fractionation.api.models.dto.response.BatchAssignmentOutDto;
import com.nubo.operations.fractionation.api.models.dto.response.SettlementOutDto;
import com.nubo.operations.fractionation.api.service.BatchAssignmentService;
import com.nubo.operations.fractionation.api.service.FractionationService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotEmpty;
import lombok.RequiredArgsConstructor;

@Tag(name = "Fractionation")
@RestController
@RequestMapping("/{version}/fractionation")
@RequiredArgsConstructor
public class FractionationRestController {

    private final FractionationService fractionationService;
    private final BatchAssignmentService batchAssignmentService;

    @Operation(summary = "Process fractionation batch", description = "Process batch assignments independently")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = BatchAssignmentOutDto.class)))})
    @PostMapping("/batch")
    public ResponseEntity<BatchAssignmentOutDto> processBatch(
            @Valid @RequestBody BatchAssignmentInDto request) {
        return ResponseEntity.ok(batchAssignmentService.process(request));
    }

    @Operation(summary = "Create fraction by tradeId and sideId", description = "Create fraction by tradeId and sideId")
    @ApiResponses(value = {@ApiResponse(responseCode = "201", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = SettlementOutDto[].class)))})
    @PostMapping("/create-fractions/trade/{tradeId}/side/{sideId}")
    public ResponseEntity<List<SettlementOutDto>> createFractions(
            @PathVariable Long tradeId,
            @PathVariable String sideId,
            @NotEmpty @Valid @RequestBody List<FractionInDto> fractionInDtoList) {
        List<SettlementOutDto> createdSettlementList = fractionationService.createFractions(tradeId, sideId,
                fractionInDtoList);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdSettlementList);
    }

    @Operation(summary = "Update fraction by tradeId and sideId", description = "Create fraction by tradeId and sideId")
    @ApiResponses(value = {@ApiResponse(responseCode = "201", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = SettlementOutDto[].class)))})
    @PutMapping("/update-fraction/trade/{tradeId}/side/{sideId}")
    public ResponseEntity<List<SettlementOutDto>> updateAssignment(
            @PathVariable Long tradeId,
            @PathVariable String sideId,
            @NotEmpty @Valid @RequestBody List<FractionInDto> fractionInDtoList) {
        List<SettlementOutDto> createdSettlementList = fractionationService.updateAssignment(tradeId, sideId,
                fractionInDtoList);
        return ResponseEntity.ok(createdSettlementList);
    }

    @Operation(summary = "Update fraction by tradeId and sideId", description = "Create fraction by tradeId and sideId")
    @ApiResponses(value = {@ApiResponse(responseCode = "201", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = SettlementOutDto[].class)))})
    @PutMapping("/update-correction/trade/{tradeId}/side/{sideId}")
    public ResponseEntity<List<SettlementOutDto>> updateCorrection(
            @PathVariable Long tradeId,
            @PathVariable String sideId,
            @NotEmpty @Valid @RequestBody List<CorrectionInDto> correctionInDtoList) {
        List<SettlementOutDto> createdSettlementList = fractionationService.updateCorrection(tradeId, sideId,
                correctionInDtoList);
        return ResponseEntity.ok(createdSettlementList);
    }

    @Operation(summary = "Create fraction by correction", description = "Create fraction by correction")
    @ApiResponses(value = {@ApiResponse(responseCode = "201", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = SettlementOutDto.class)))})
    @PostMapping("/create-correction-new/trade/{tradeId}/side/{sideId}/fraction/{fraction}")
    public ResponseEntity<SettlementOutDto> createCorrectionNewFraction(
            @PathVariable Long tradeId,
            @PathVariable String sideId,
            @PathVariable Integer fraction,
            @RequestParam(required = true) Long settlementCorrectionInitial,
            @RequestParam(required = true) Long settlementCorrectionActual) {
        SettlementOutDto createdSettlementOutDto = fractionationService.createCorrectionNewFraction(tradeId, sideId, fraction,
                settlementCorrectionInitial, settlementCorrectionActual);
        return ResponseEntity.ok(createdSettlementOutDto);
    }

}

```
