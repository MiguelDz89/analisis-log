# nbo-png-asignacion-definitiva-auto-back

Código fuente de producción y configuraciones. Captura local: 28/10/2026.

Incluye 180 archivos Java y 16 archivos de configuración, recursos y compilación/despliegue.

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
17. `src/main/java/com/nubo/definitive/assignment/api/DefinitiveAssignmentApiApplication.java`
18. `src/main/java/com/nubo/definitive/assignment/api/application/annotations/ValidBigDecimal.java`
19. `src/main/java/com/nubo/definitive/assignment/api/application/config/CacheConfig.java`
20. `src/main/java/com/nubo/definitive/assignment/api/application/config/FinalAssignmentExecutorConfig.java`
21. `src/main/java/com/nubo/definitive/assignment/api/application/config/KafkaProducerConfig.java`
22. `src/main/java/com/nubo/definitive/assignment/api/application/config/SwaggerConfig.java`
23. `src/main/java/com/nubo/definitive/assignment/api/application/config/ValidBigDecimalConfig.java`
24. `src/main/java/com/nubo/definitive/assignment/api/application/config/WebConfig.java`
25. `src/main/java/com/nubo/definitive/assignment/api/application/context/GlobalContext.java`
26. `src/main/java/com/nubo/definitive/assignment/api/application/database/NamingStrategyConfig.java`
27. `src/main/java/com/nubo/definitive/assignment/api/application/database/UpperNamingConfig.java`
28. `src/main/java/com/nubo/definitive/assignment/api/application/filters/GlobalFilter.java`
29. `src/main/java/com/nubo/definitive/assignment/api/application/interceptors/GlobalInterceptor.java`
30. `src/main/java/com/nubo/definitive/assignment/api/application/properties/PropertiesConfig.java`
31. `src/main/java/com/nubo/definitive/assignment/api/application/properties/PropertiesContext.java`
32. `src/main/java/com/nubo/definitive/assignment/api/application/util/ApplicationUtils.java`
33. `src/main/java/com/nubo/definitive/assignment/api/application/util/ProcessTraceContext.java`
34. `src/main/java/com/nubo/definitive/assignment/api/application/util/RestClientUtils.java`
35. `src/main/java/com/nubo/definitive/assignment/api/application/util/TradeStatusHierarchyUtil.java`
36. `src/main/java/com/nubo/definitive/assignment/api/client/calculation/model/dto/response/BusinessDayOutDto.java`
37. `src/main/java/com/nubo/definitive/assignment/api/client/calculation/service/BusinessDayCalculationClient.java`
38. `src/main/java/com/nubo/definitive/assignment/api/client/calculation/service/impl/BusinessDayCalculationClientImpl.java`
39. `src/main/java/com/nubo/definitive/assignment/api/client/fractional/model/dto/request/BatchCreateFractionInDto.java`
40. `src/main/java/com/nubo/definitive/assignment/api/client/fractional/model/dto/request/BatchCreateFractionItemInDto.java`
41. `src/main/java/com/nubo/definitive/assignment/api/client/fractional/model/dto/request/CreateFractionInDto.java`
42. `src/main/java/com/nubo/definitive/assignment/api/client/fractional/model/dto/response/BatchCreateFractionItemOutDto.java`
43. `src/main/java/com/nubo/definitive/assignment/api/client/fractional/model/dto/response/BatchCreateFractionOutDto.java`
44. `src/main/java/com/nubo/definitive/assignment/api/client/fractional/model/dto/response/CreateFractionOutDto.java`
45. `src/main/java/com/nubo/definitive/assignment/api/client/fractional/service/FractionationClient.java`
46. `src/main/java/com/nubo/definitive/assignment/api/client/fractional/service/impl/FractionationClientImpl.java`
47. `src/main/java/com/nubo/definitive/assignment/api/client/kafka/model/dto/request/CountryInDto.java`
48. `src/main/java/com/nubo/definitive/assignment/api/client/kafka/model/dto/request/DepositoryInDto.java`
49. `src/main/java/com/nubo/definitive/assignment/api/client/kafka/model/dto/request/DirectDepositoryInDto.java`
50. `src/main/java/com/nubo/definitive/assignment/api/client/kafka/model/dto/request/FinalAssignmentFractionInDto.java`
51. `src/main/java/com/nubo/definitive/assignment/api/client/kafka/model/dto/request/FinalAssignmentInDto.java`
52. `src/main/java/com/nubo/definitive/assignment/api/client/kafka/model/dto/request/InvestorAccountInDto.java`
53. `src/main/java/com/nubo/definitive/assignment/api/client/kafka/model/dto/request/InvestorInDto.java`
54. `src/main/java/com/nubo/definitive/assignment/api/client/kafka/model/dto/request/ParticipantAccountInDto.java`
55. `src/main/java/com/nubo/definitive/assignment/api/client/kafka/model/dto/request/ParticipantBankAccountInDto.java`
56. `src/main/java/com/nubo/definitive/assignment/api/client/kafka/model/dto/request/ParticipantInDto.java`
57. `src/main/java/com/nubo/definitive/assignment/api/client/kafka/model/dto/request/SideInDto.java`
58. `src/main/java/com/nubo/definitive/assignment/api/client/kafka/model/dto/request/TypeInDto.java`
59. `src/main/java/com/nubo/definitive/assignment/api/client/kafka/producer/FinalAssignmentBatchPublisher.java`
60. `src/main/java/com/nubo/definitive/assignment/api/client/kafka/producer/KafkaDeliveryException.java`
61. `src/main/java/com/nubo/definitive/assignment/api/client/kafka/producer/KafkaNuboAdapterProducer.java`
62. `src/main/java/com/nubo/definitive/assignment/api/client/packaging/exception/BatchPackagingHttpException.java`
63. `src/main/java/com/nubo/definitive/assignment/api/client/packaging/exception/BatchResponseContractException.java`
64. `src/main/java/com/nubo/definitive/assignment/api/client/packaging/model/dto/request/BatchCustodyRejectInDto.java`
65. `src/main/java/com/nubo/definitive/assignment/api/client/packaging/model/dto/request/BatchCustodyRejectItemInDto.java`
66. `src/main/java/com/nubo/definitive/assignment/api/client/packaging/model/dto/request/BatchPackageRejectInDto.java`
67. `src/main/java/com/nubo/definitive/assignment/api/client/packaging/model/dto/request/RejectInDto.java`
68. `src/main/java/com/nubo/definitive/assignment/api/client/packaging/model/dto/request/RejectPackageInDto.java`
69. `src/main/java/com/nubo/definitive/assignment/api/client/packaging/model/dto/response/BatchCustodyActionItemOutDto.java`
70. `src/main/java/com/nubo/definitive/assignment/api/client/packaging/model/dto/response/BatchCustodyActionItemStatus.java`
71. `src/main/java/com/nubo/definitive/assignment/api/client/packaging/model/dto/response/BatchCustodyActionOutDto.java`
72. `src/main/java/com/nubo/definitive/assignment/api/client/packaging/service/PackagingClient.java`
73. `src/main/java/com/nubo/definitive/assignment/api/client/packaging/service/impl/BatchCustodyActionResponseValidator.java`
74. `src/main/java/com/nubo/definitive/assignment/api/client/packaging/service/impl/PackagingClientImpl.java`
75. `src/main/java/com/nubo/definitive/assignment/api/client/rules/models/dto/request/BatchStatusUpdateTradeInDto.java`
76. `src/main/java/com/nubo/definitive/assignment/api/client/rules/models/dto/request/BatchStatusUpdateTradeItemInDto.java`
77. `src/main/java/com/nubo/definitive/assignment/api/client/rules/models/dto/request/FractionRuleInDto.java`
78. `src/main/java/com/nubo/definitive/assignment/api/client/rules/models/dto/request/StatusAllowedOptionsInDto.java`
79. `src/main/java/com/nubo/definitive/assignment/api/client/rules/models/dto/request/StatusUpdateTradeInDto.java`
80. `src/main/java/com/nubo/definitive/assignment/api/client/rules/models/dto/response/ActionOutDto.java`
81. `src/main/java/com/nubo/definitive/assignment/api/client/rules/models/dto/response/BatchStatusUpdateTradeItemOutDto.java`
82. `src/main/java/com/nubo/definitive/assignment/api/client/rules/models/dto/response/BatchStatusUpdateTradeOutDto.java`
83. `src/main/java/com/nubo/definitive/assignment/api/client/rules/models/dto/response/BusinessRuleOutDto.java`
84. `src/main/java/com/nubo/definitive/assignment/api/client/rules/models/dto/response/StatusAllowedOptionsOutDto.java`
85. `src/main/java/com/nubo/definitive/assignment/api/client/rules/models/dto/response/StatusClientOutDto.java`
86. `src/main/java/com/nubo/definitive/assignment/api/client/rules/models/dto/response/StatusUpdateTradeOutDto.java`
87. `src/main/java/com/nubo/definitive/assignment/api/client/rules/service/OperationBusinessRuleClient.java`
88. `src/main/java/com/nubo/definitive/assignment/api/client/rules/service/impl/OperationBusinessRuleClientImpl.java`
89. `src/main/java/com/nubo/definitive/assignment/api/exception/ClientException.java`
90. `src/main/java/com/nubo/definitive/assignment/api/exception/ServiceException.java`
91. `src/main/java/com/nubo/definitive/assignment/api/exception/error/ErrorCode.java`
92. `src/main/java/com/nubo/definitive/assignment/api/exception/error/ErrorResponse.java`
93. `src/main/java/com/nubo/definitive/assignment/api/exception/error/ErrorValidation.java`
94. `src/main/java/com/nubo/definitive/assignment/api/exception/handler/GlobalExceptionHandler.java`
95. `src/main/java/com/nubo/definitive/assignment/api/helpers/MapperUtil.java`
96. `src/main/java/com/nubo/definitive/assignment/api/models/dto/response/AutomaticAssignmentProcessResponseDto.java`
97. `src/main/java/com/nubo/definitive/assignment/api/models/dto/response/CountryOutDto.java`
98. `src/main/java/com/nubo/definitive/assignment/api/models/dto/response/CurrencyOutDto.java`
99. `src/main/java/com/nubo/definitive/assignment/api/models/dto/response/PageResponseOutDto.java`
100. `src/main/java/com/nubo/definitive/assignment/api/models/dto/response/StatusOutDto.java`
101. `src/main/java/com/nubo/definitive/assignment/api/models/entity/AfpFundEntity.java`
102. `src/main/java/com/nubo/definitive/assignment/api/models/entity/BankAccountEntity.java`
103. `src/main/java/com/nubo/definitive/assignment/api/models/entity/BankEntity.java`
104. `src/main/java/com/nubo/definitive/assignment/api/models/entity/CfiEntity.java`
105. `src/main/java/com/nubo/definitive/assignment/api/models/entity/ClassEntity.java`
106. `src/main/java/com/nubo/definitive/assignment/api/models/entity/CountryEntity.java`
107. `src/main/java/com/nubo/definitive/assignment/api/models/entity/CurrencyEntity.java`
108. `src/main/java/com/nubo/definitive/assignment/api/models/entity/DepositoryEntity.java`
109. `src/main/java/com/nubo/definitive/assignment/api/models/entity/DirectDepositoryEntity.java`
110. `src/main/java/com/nubo/definitive/assignment/api/models/entity/ExchangeRateEntity.java`
111. `src/main/java/com/nubo/definitive/assignment/api/models/entity/FicAdministratorEntity.java`
112. `src/main/java/com/nubo/definitive/assignment/api/models/entity/GicsEntity.java`
113. `src/main/java/com/nubo/definitive/assignment/api/models/entity/HolidayEntity.java`
114. `src/main/java/com/nubo/definitive/assignment/api/models/entity/IdentificationTypeEntity.java`
115. `src/main/java/com/nubo/definitive/assignment/api/models/entity/InvestorAccountEntity.java`
116. `src/main/java/com/nubo/definitive/assignment/api/models/entity/InvestorEntity.java`
117. `src/main/java/com/nubo/definitive/assignment/api/models/entity/MarketEntity.java`
118. `src/main/java/com/nubo/definitive/assignment/api/models/entity/PackageCustodianEntity.java`
119. `src/main/java/com/nubo/definitive/assignment/api/models/entity/PackageDetailEntity.java`
120. `src/main/java/com/nubo/definitive/assignment/api/models/entity/PackageDetailKey.java`
121. `src/main/java/com/nubo/definitive/assignment/api/models/entity/ParticipantAccountEntity.java`
122. `src/main/java/com/nubo/definitive/assignment/api/models/entity/ParticipantBankAccountEntity.java`
123. `src/main/java/com/nubo/definitive/assignment/api/models/entity/ParticipantEntity.java`
124. `src/main/java/com/nubo/definitive/assignment/api/models/entity/SecurityTitleEntity.java`
125. `src/main/java/com/nubo/definitive/assignment/api/models/entity/SettlementEntity.java`
126. `src/main/java/com/nubo/definitive/assignment/api/models/entity/SettlementKey.java`
127. `src/main/java/com/nubo/definitive/assignment/api/models/entity/SideEntity.java`
128. `src/main/java/com/nubo/definitive/assignment/api/models/entity/StatusEntity.java`
129. `src/main/java/com/nubo/definitive/assignment/api/models/entity/TaxStatusEntity.java`
130. `src/main/java/com/nubo/definitive/assignment/api/models/entity/TradeEntity.java`
131. `src/main/java/com/nubo/definitive/assignment/api/models/entity/TradeEquityEntity.java`
132. `src/main/java/com/nubo/definitive/assignment/api/models/entity/TradeStatusHistoryEntity.java`
133. `src/main/java/com/nubo/definitive/assignment/api/models/entity/TradeStatusHistoryKey.java`
134. `src/main/java/com/nubo/definitive/assignment/api/models/entity/TradingSessionEntity.java`
135. `src/main/java/com/nubo/definitive/assignment/api/models/entity/TradingSystemEntity.java`
136. `src/main/java/com/nubo/definitive/assignment/api/models/entity/TypeEntity.java`
137. `src/main/java/com/nubo/definitive/assignment/api/models/enums/AssignModeEnum.java`
138. `src/main/java/com/nubo/definitive/assignment/api/models/enums/BankAccountTypeEnum.java`
139. `src/main/java/com/nubo/definitive/assignment/api/models/enums/BusinessRuleEnum.java`
140. `src/main/java/com/nubo/definitive/assignment/api/models/enums/CountryCodeEnum.java`
141. `src/main/java/com/nubo/definitive/assignment/api/models/enums/CustodianStatusEnum.java`
142. `src/main/java/com/nubo/definitive/assignment/api/models/enums/DepositoryEnum.java`
143. `src/main/java/com/nubo/definitive/assignment/api/models/enums/FractionOperationTypeEnum.java`
144. `src/main/java/com/nubo/definitive/assignment/api/models/enums/MarketTypeEnum.java`
145. `src/main/java/com/nubo/definitive/assignment/api/models/enums/PropertiesEnum.java`
146. `src/main/java/com/nubo/definitive/assignment/api/models/enums/SideEnum.java`
147. `src/main/java/com/nubo/definitive/assignment/api/models/enums/SourceQuotePositionEnum.java`
148. `src/main/java/com/nubo/definitive/assignment/api/models/enums/SourceQuoteTypeEnum.java`
149. `src/main/java/com/nubo/definitive/assignment/api/models/enums/StatusEnum.java`
150. `src/main/java/com/nubo/definitive/assignment/api/models/enums/TradeTypeEnum.java`
151. `src/main/java/com/nubo/definitive/assignment/api/models/enums/VersionApiEnum.java`
152. `src/main/java/com/nubo/definitive/assignment/api/repository/CountryRepository.java`
153. `src/main/java/com/nubo/definitive/assignment/api/repository/DepositoryRepository.java`
154. `src/main/java/com/nubo/definitive/assignment/api/repository/DirectDepositoryRepository.java`
155. `src/main/java/com/nubo/definitive/assignment/api/repository/MarketRepository.java`
156. `src/main/java/com/nubo/definitive/assignment/api/repository/PackageCustodianRepository.java`
157. `src/main/java/com/nubo/definitive/assignment/api/repository/PackageDetailRepository.java`
158. `src/main/java/com/nubo/definitive/assignment/api/repository/ParticipantAccountRepository.java`
159. `src/main/java/com/nubo/definitive/assignment/api/repository/ParticipantBankAccountRepository.java`
160. `src/main/java/com/nubo/definitive/assignment/api/repository/SettlementRepository.java`
161. `src/main/java/com/nubo/definitive/assignment/api/repository/SideRepository.java`
162. `src/main/java/com/nubo/definitive/assignment/api/repository/StatusRepository.java`
163. `src/main/java/com/nubo/definitive/assignment/api/repository/TradeEquityRepository.java`
164. `src/main/java/com/nubo/definitive/assignment/api/repository/TradeRepository.java`
165. `src/main/java/com/nubo/definitive/assignment/api/repository/TradeStatusHistoryRepository.java`
166. `src/main/java/com/nubo/definitive/assignment/api/repository/TypeRepository.java`
167. `src/main/java/com/nubo/definitive/assignment/api/service/AutomaticDefinitiveAssignmentService.java`
168. `src/main/java/com/nubo/definitive/assignment/api/service/CatalogCacheService.java`
169. `src/main/java/com/nubo/definitive/assignment/api/service/RejectedFractionsService.java`
170. `src/main/java/com/nubo/definitive/assignment/api/service/impl/AutomaticDefinitiveAssignmentServiceImpl.java`
171. `src/main/java/com/nubo/definitive/assignment/api/service/impl/CashAccountBatchResolver.java`
172. `src/main/java/com/nubo/definitive/assignment/api/service/impl/CatalogCacheServiceImpl.java`
173. `src/main/java/com/nubo/definitive/assignment/api/service/impl/CustodianSettlementBatchProcessor.java`
174. `src/main/java/com/nubo/definitive/assignment/api/service/impl/FinalAssignmentBatchProcessor.java`
175. `src/main/java/com/nubo/definitive/assignment/api/service/impl/FinalAssignmentMessageBuilder.java`
176. `src/main/java/com/nubo/definitive/assignment/api/service/impl/FinalAssignmentRunContext.java`
177. `src/main/java/com/nubo/definitive/assignment/api/service/impl/ParallelPartitionRunner.java`
178. `src/main/java/com/nubo/definitive/assignment/api/service/impl/RegisteredSidesBatchProcessor.java`
179. `src/main/java/com/nubo/definitive/assignment/api/service/impl/RejectedFractionsServiceImpl.java`
180. `src/main/java/com/nubo/definitive/assignment/api/service/impl/batch/BatchChunk.java`
181. `src/main/java/com/nubo/definitive/assignment/api/service/impl/batch/BatchExecutionResult.java`
182. `src/main/java/com/nubo/definitive/assignment/api/service/impl/batch/BatchItemFailure.java`
183. `src/main/java/com/nubo/definitive/assignment/api/service/impl/batch/BatchRun.java`
184. `src/main/java/com/nubo/definitive/assignment/api/service/impl/batch/BatchStopReason.java`
185. `src/main/java/com/nubo/definitive/assignment/api/service/impl/batch/DefinitiveCustodyBatchChunker.java`
186. `src/main/java/com/nubo/definitive/assignment/api/service/impl/batch/DefinitiveCustodyBatchExecutor.java`
187. `src/main/java/com/nubo/definitive/assignment/api/service/impl/batch/DefinitiveCustodyBatchPlan.java`
188. `src/main/java/com/nubo/definitive/assignment/api/service/impl/batch/DefinitiveCustodyBatchPlanner.java`
189. `src/main/java/com/nubo/definitive/assignment/api/service/impl/batch/DefinitiveCustodyLocalUpdateWorker.java`
190. `src/main/java/com/nubo/definitive/assignment/api/service/impl/batch/LocalSettlementSyncException.java`
191. `src/main/java/com/nubo/definitive/assignment/api/service/impl/batch/PackageProcessingContext.java`
192. `src/main/java/com/nubo/definitive/assignment/api/service/impl/batch/PlanningIssue.java`
193. `src/main/java/com/nubo/definitive/assignment/api/service/impl/batch/PlanningIssueReason.java`
194. `src/main/java/com/nubo/definitive/assignment/api/service/impl/batch/RejectType.java`
195. `src/main/java/com/nubo/definitive/assignment/api/service/impl/batch/SettlementReference.java`
196. `src/main/java/com/nubo/definitive/assignment/api/web/controller/AutomaticDefinitiveAssignmentController.java`

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

    <groupId>com.nubo.definitive.assignment.api</groupId>
    <artifactId>definitive-assignment-api</artifactId>
    <version>0.56.0-alpha.4</version>
    <name>${project.artifactId}</name>
    <description>Definitive Assignment Api</description>

    <properties>
        <java.version>17</java.version>
        <spring.port>8080</spring.port>
        <test.skip>false</test.skip>
        <datasource.url.application.name>ApplicationName=${project.artifactId}</datasource.url.application.name>
        <hikari.pool.name>${project.artifactId}-pool</hikari.pool.name>
        <log4j2.version>2.25.4</log4j2.version>
        <commons-io.version>2.22.0</commons-io.version>
        <commons-lang3.version>3.18.0</commons-lang3.version>
        <tomcat.version>11.0.25</tomcat.version>
        <httpcore5.version>5.4.3</httpcore5.version>
    </properties>

    <dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>com.fasterxml.jackson.core</groupId>
                <artifactId>jackson-core</artifactId>
                <version>2.21.5</version>
            </dependency>
            <dependency>
                <groupId>com.fasterxml.jackson.core</groupId>
                <artifactId>jackson-databind</artifactId>
                <version>2.21.5</version>
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

        <!-- Logging Log4j2 -->
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
            <exclusions>
                <exclusion>
                    <groupId>org.springframework.boot</groupId>
                    <artifactId>spring-boot-starter-logging</artifactId>
                </exclusion>
            </exclusions>
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
            <version>3.1.0</version>
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
            </exclusions>
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
            </exclusions>
        </dependency>

        <dependency>
            <groupId>com.github.ben-manes.caffeine</groupId>
            <artifactId>caffeine</artifactId>
        </dependency>

        <!-- HTTP Client -->
        <dependency>
            <groupId>org.apache.httpcomponents.client5</groupId>
            <artifactId>httpclient5</artifactId>
        </dependency>

        <!-- Kafka -->
        <dependency>
            <groupId>org.springframework.kafka</groupId>
            <artifactId>spring-kafka</artifactId>
        </dependency>


        <dependency>
            <groupId>org.apache.commons</groupId>
            <artifactId>commons-lang3</artifactId>
            <version>${commons-lang3.version}</version>
        </dependency>

        <!-- Jackson -->
        <dependency>
            <groupId>tools.jackson.core</groupId>
            <artifactId>jackson-databind</artifactId>
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

        <dependency>
            <groupId>org.xmlunit</groupId>
            <artifactId>xmlunit-core</artifactId>
            <scope>test</scope>
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
                    <groupId>commons-io</groupId>
                    <artifactId>commons-io</artifactId>
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
                                <exclude>**/DefinitiveAssignmentApiApplication.class</exclude>
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
      maximum-pool-size: ${DB_HIKARI_MAXIMUM_POOL_SIZE:40}
      minimum-idle: ${DB_HIKARI_MINIMUM_IDLE:20}
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
          batch_size: ${HIBERNATE_JDBC_BATCH_SIZE:500}
        order_inserts: ${HIBERNATE_ORDER_INSERTS:true}
        order_updates: ${HIBERNATE_ORDER_UPDATES:true}
        default_batch_fetch_size: ${HIBERNATE_DEFAULT_BATCH_FETCH_SIZE:50}
logging:
  config: classpath:log/log4j2.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR
config:
  application:
    http:
      connect-timeout-ms: ${HTTP_CONNECT_TIMEOUT_MS:3000}
      read-timeout-ms: ${HTTP_READ_TIMEOUT_MS:5000}
      fractionation-batch-read-timeout-ms: ${FRACTIONATION_BATCH_READ_TIMEOUT_MS:60000}
    performance:
      batch-write-size: ${BATCH_WRITE_SIZE:500}
      max-response-messages: ${MAX_RESPONSE_MESSAGES:10000}
      rule-validation-threads: ${FINAL_ASSIGNMENT_THREADS:3}
      rules-batch-enabled: ${RULES_BATCH_ENABLED:true}
      rules-batch-size: ${RULES_BATCH_SIZE:120}
      fractionation-batch-size: ${NUBO_ASSIGNMENT_BATCH_PROCESSING_SIZE:120}
      custody-reject-batch-size: ${CUSTODY_REJECT_BATCH_SIZE:50}
      kafka-batch-size: ${KAFKA_BATCH_SIZE:500}
      kafka-send-timeout-ms: ${KAFKA_SEND_TIMEOUT_MS:15000}
      transaction-timeout-seconds: ${FINAL_ASSIGNMENT_TX_TIMEOUT_SECONDS:60}
      partition-await-timeout-ms: ${FINAL_ASSIGNMENT_AWAIT_TIMEOUT_MS:1800000}
client:
  nubo:
    url-businessday-calculation: ${NUBO_URL_BUSINESS_DAY_CALCULATION}
    url-fractionation: ${NUBO_URL_OPERATION_FRACTIONATION}
    url-operation-rules: ${NUBO_URL_OPERATION_RULES}
    url-custody-actions: ${NUBO_URL_OPERATION_CUSTODY_ACTIONS}
kafka:
  nubo:
    retries: ${KAFKA_NUBO_RETRIES:2}
    bootstrap-servers: ${KAFKA_NUBO_BOOTSTRAP_SERVER}
    auto-offset-reset: ${KAFKA_NUBO_AUTO_OFFSET_RESET:latest}
    security:
      protocol: ${KAFKA_PROPERTIES_SECURITY_PROTOCOL}
    sasl:
      mechanism: ${KAFKA_PROPERTIES_SASL_MECHANISM}
      jaas:
        config: ${KAFKA_PROPERTIES_SASL_JAAS_CONFIG}
    producer:
      topic-name-final-assignment-request: ${KAFKA_NUBO_TOPIC_NAME_FINAL_ASSIGNMENT_REQUEST}
      acks: ${KAFKA_NUBO_PRODUCER_ACKS:all}
      compression-type: ${KAFKA_NUBO_PRODUCER_COMPRESSION_TYPE:lz4}
      enable-idempotence: ${KAFKA_NUBO_PRODUCER_ENABLE_IDEMPOTENCE:true}
      retries: ${KAFKA_NUBO_PRODUCER_RETRIES:5}
      linger-ms: ${KAFKA_NUBO_PRODUCER_LINGER_MS:20}
      batch-size: ${KAFKA_NUBO_PRODUCER_BATCH_SIZE:65536}
      delivery-timeout-ms: ${KAFKA_NUBO_PRODUCER_DELIVERY_TIMEOUT_MS:120000}
      request-timeout-ms: ${KAFKA_NUBO_PRODUCER_REQUEST_TIMEOUT_MS:30000}
      max-in-flight-requests-per-connection: ${KAFKA_NUBO_PRODUCER_MAX_IN_FLIGHT_REQUESTS_PER_CONNECTION:5}

```

## src/main/resources/application-local.yml

```yaml
server:
  port: 8085
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
          batch_size: ${HIBERNATE_JDBC_BATCH_SIZE:500}
        order_inserts: ${HIBERNATE_ORDER_INSERTS:true}
        order_updates: ${HIBERNATE_ORDER_UPDATES:true}
        default_batch_fetch_size: ${HIBERNATE_DEFAULT_BATCH_FETCH_SIZE:50}
logging:
  config: classpath:log/log4j2.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR
config:
  application:
    performance:
      batch-write-size: ${BATCH_WRITE_SIZE:500}
      max-response-messages: ${MAX_RESPONSE_MESSAGES:10000}
      rule-validation-threads: ${FINAL_ASSIGNMENT_THREADS:3}
      rules-batch-enabled: ${RULES_BATCH_ENABLED:true}
      rules-batch-size: ${RULES_BATCH_SIZE:120}
      fractionation-batch-size: ${NUBO_ASSIGNMENT_BATCH_PROCESSING_SIZE:120}
      custody-reject-batch-size: ${CUSTODY_REJECT_BATCH_SIZE:50}
      kafka-batch-size: ${KAFKA_BATCH_SIZE:500}
      kafka-send-timeout-ms: ${KAFKA_SEND_TIMEOUT_MS:15000}
      transaction-timeout-seconds: ${FINAL_ASSIGNMENT_TX_TIMEOUT_SECONDS:60}
      partition-await-timeout-ms: ${FINAL_ASSIGNMENT_AWAIT_TIMEOUT_MS:1800000}
client:
  nubo:
    url-businessday-calculation: ${NUBO_URL_BUSINESS_DAY_CALCULATION}
    url-fractionation: ${NUBO_URL_OPERATION_FRACTIONATION}
    url-operation-rules: ${NUBO_URL_OPERATION_RULES}
    url-custody-actions: ${NUBO_URL_OPERATION_CUSTODY_ACTIONS}
kafka:
  nubo:
    retries: ${KAFKA_NUBO_RETRIES:2}
    bootstrap-servers: ${KAFKA_NUBO_BOOTSTRAP_SERVER}
    auto-offset-reset: ${KAFKA_NUBO_AUTO_OFFSET_RESET:latest}
    security:
      protocol: ${KAFKA_PROPERTIES_SECURITY_PROTOCOL}
    sasl:
      mechanism: ${KAFKA_PROPERTIES_SASL_MECHANISM}
      jaas:
        config: ${KAFKA_PROPERTIES_SASL_JAAS_CONFIG}
    producer:
      topic-name-final-assignment-request: ${KAFKA_NUBO_TOPIC_NAME_FINAL_ASSIGNMENT_REQUEST}

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
          batch_size: ${HIBERNATE_JDBC_BATCH_SIZE:500}
        order_inserts: ${HIBERNATE_ORDER_INSERTS:true}
        order_updates: ${HIBERNATE_ORDER_UPDATES:true}
        default_batch_fetch_size: ${HIBERNATE_DEFAULT_BATCH_FETCH_SIZE:50}
logging:
  config: classpath:log/log4j2-prod.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR
config:
  application:
    performance:
      batch-write-size: ${BATCH_WRITE_SIZE:500}
      max-response-messages: ${MAX_RESPONSE_MESSAGES:10000}
      rule-validation-threads: ${FINAL_ASSIGNMENT_THREADS:3}
      rules-batch-enabled: ${RULES_BATCH_ENABLED:true}
      rules-batch-size: ${RULES_BATCH_SIZE:120}
      fractionation-batch-size: ${NUBO_ASSIGNMENT_BATCH_PROCESSING_SIZE:120}
      custody-reject-batch-size: ${CUSTODY_REJECT_BATCH_SIZE:50}
      kafka-batch-size: ${KAFKA_BATCH_SIZE:500}
      kafka-send-timeout-ms: ${KAFKA_SEND_TIMEOUT_MS:15000}
      transaction-timeout-seconds: ${FINAL_ASSIGNMENT_TX_TIMEOUT_SECONDS:60}
      partition-await-timeout-ms: ${FINAL_ASSIGNMENT_AWAIT_TIMEOUT_MS:1800000}
client:
  nubo:
    url-businessday-calculation: ${NUBO_URL_BUSINESS_DAY_CALCULATION}
    url-fractionation: ${NUBO_URL_OPERATION_FRACTIONATION}
    url-operation-rules: ${NUBO_URL_OPERATION_RULES}
    url-custody-actions: ${NUBO_URL_OPERATION_CUSTODY_ACTIONS}
kafka:
  nubo:
    retries: ${KAFKA_NUBO_RETRIES:2}
    bootstrap-servers: ${KAFKA_NUBO_BOOTSTRAP_SERVER}
    auto-offset-reset: ${KAFKA_NUBO_AUTO_OFFSET_RESET:latest}
    security:
      protocol: ${KAFKA_PROPERTIES_SECURITY_PROTOCOL}
    sasl:
      mechanism: ${KAFKA_PROPERTIES_SASL_MECHANISM}
      jaas:
        config: ${KAFKA_PROPERTIES_SASL_JAAS_CONFIG}
    producer:
      topic-name-final-assignment-request: ${KAFKA_NUBO_TOPIC_NAME_FINAL_ASSIGNMENT_REQUEST}

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
          batch_size: ${HIBERNATE_JDBC_BATCH_SIZE:500}
        order_inserts: ${HIBERNATE_ORDER_INSERTS:true}
        order_updates: ${HIBERNATE_ORDER_UPDATES:true}
        default_batch_fetch_size: ${HIBERNATE_DEFAULT_BATCH_FETCH_SIZE:50}
logging:
  config: classpath:log/log4j2.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR
config:
  application:
    performance:
      batch-write-size: ${BATCH_WRITE_SIZE:500}
      max-response-messages: ${MAX_RESPONSE_MESSAGES:10000}
      rule-validation-threads: ${FINAL_ASSIGNMENT_THREADS:3}
      rules-batch-enabled: ${RULES_BATCH_ENABLED:true}
      rules-batch-size: ${RULES_BATCH_SIZE:120}
      fractionation-batch-size: ${NUBO_ASSIGNMENT_BATCH_PROCESSING_SIZE:120}
      custody-reject-batch-size: ${CUSTODY_REJECT_BATCH_SIZE:50}
      kafka-batch-size: ${KAFKA_BATCH_SIZE:500}
      kafka-send-timeout-ms: ${KAFKA_SEND_TIMEOUT_MS:15000}
      transaction-timeout-seconds: ${FINAL_ASSIGNMENT_TX_TIMEOUT_SECONDS:60}
      partition-await-timeout-ms: ${FINAL_ASSIGNMENT_AWAIT_TIMEOUT_MS:1800000}
client:
  nubo:
    url-businessday-calculation: ${NUBO_URL_BUSINESS_DAY_CALCULATION}
    url-fractionation: ${NUBO_URL_OPERATION_FRACTIONATION}
    url-operation-rules: ${NUBO_URL_OPERATION_RULES}
    url-custody-actions: ${NUBO_URL_OPERATION_CUSTODY_ACTIONS}
kafka:
  nubo:
    retries: ${KAFKA_NUBO_RETRIES:2}
    bootstrap-servers: ${KAFKA_NUBO_BOOTSTRAP_SERVER}
    auto-offset-reset: ${KAFKA_NUBO_AUTO_OFFSET_RESET:latest}
    security:
      protocol: ${KAFKA_PROPERTIES_SECURITY_PROTOCOL}
    sasl:
      mechanism: ${KAFKA_PROPERTIES_SASL_MECHANISM}
      jaas:
        config: ${KAFKA_PROPERTIES_SASL_JAAS_CONFIG}
    producer:
      topic-name-final-assignment-request: ${KAFKA_NUBO_TOPIC_NAME_FINAL_ASSIGNMENT_REQUEST}

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
          batch_size: ${HIBERNATE_JDBC_BATCH_SIZE:500}
        order_inserts: ${HIBERNATE_ORDER_INSERTS:true}
        order_updates: ${HIBERNATE_ORDER_UPDATES:true}
        default_batch_fetch_size: ${HIBERNATE_DEFAULT_BATCH_FETCH_SIZE:50}
logging:
  config: classpath:log/log4j2.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR
config:
  application:
    performance:
      batch-write-size: ${BATCH_WRITE_SIZE:500}
      max-response-messages: ${MAX_RESPONSE_MESSAGES:10000}
      rule-validation-threads: ${FINAL_ASSIGNMENT_THREADS:3}
      rules-batch-enabled: ${RULES_BATCH_ENABLED:true}
      rules-batch-size: ${RULES_BATCH_SIZE:120}
      fractionation-batch-size: ${NUBO_ASSIGNMENT_BATCH_PROCESSING_SIZE:120}
      custody-reject-batch-size: ${CUSTODY_REJECT_BATCH_SIZE:50}
      kafka-batch-size: ${KAFKA_BATCH_SIZE:500}
      kafka-send-timeout-ms: ${KAFKA_SEND_TIMEOUT_MS:15000}
      transaction-timeout-seconds: ${FINAL_ASSIGNMENT_TX_TIMEOUT_SECONDS:60}
      partition-await-timeout-ms: ${FINAL_ASSIGNMENT_AWAIT_TIMEOUT_MS:1800000}
client:
  nubo:
    url-businessday-calculation: ${NUBO_URL_BUSINESS_DAY_CALCULATION}
    url-fractionation: ${NUBO_URL_OPERATION_FRACTIONATION}
    url-operation-rules: ${NUBO_URL_OPERATION_RULES}
    url-custody-actions: ${NUBO_URL_OPERATION_CUSTODY_ACTIONS}
kafka:
  nubo:
    retries: ${KAFKA_NUBO_RETRIES:2}
    bootstrap-servers: ${KAFKA_NUBO_BOOTSTRAP_SERVER}
    auto-offset-reset: ${KAFKA_NUBO_AUTO_OFFSET_RESET:latest}
    security:
      protocol: ${KAFKA_PROPERTIES_SECURITY_PROTOCOL}
    sasl:
      mechanism: ${KAFKA_PROPERTIES_SASL_MECHANISM}
      jaas:
        config: ${KAFKA_PROPERTIES_SASL_JAAS_CONFIG}
    producer:
      topic-name-final-assignment-request: ${KAFKA_NUBO_TOPIC_NAME_FINAL_ASSIGNMENT_REQUEST}

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
  ,---.  ,--. ,--.,--------.,-----. ,------.  ,------.,------.,--.  ,--.,--.,--------.,--.,--.   ,--.,------.  ,---.   ,---.   ,---. ,--. ,----.   ,--.  ,--.,--.   ,--.,------.,--.  ,--.,--------.
 /  O  \ |  | |  |'--.  .--'  .-.  '|  .-.  \ |  .---'|  .---'|  ,'.|  ||  |'--.  .--'|  | \  `.'  / |  .---' /  O  \ '   .-' '   .-'|  |'  .-./   |  ,'.|  ||   `.'   ||  .---'|  ,'.|  |'--.  .--'
|  .-.  ||  | |  |   |  |  |  | |  ||  |  \  :|  `--, |  `--, |  |' '  ||  |   |  |   |  |  \     /  |  `--, |  .-.  |`.  `-. `.  `-.|  ||  | .---.|  |' '  ||  |'.'|  ||  `--, |  |' '  |   |  |
|  | |  |'  '-'  '   |  |  '  '-'  '|  '--'  /|  `---.|  |`   |  | `   ||  |   |  |   |  |   \   /   |  `---.|  | |  |.-'    |.-'    |  |'  '--'  ||  | `   ||  |   |  ||  `---.|  | `   |   |  |
`--' `--' `-----'    `--'   `-----' `-------' `------'`--'    `--'  `--'`--'   `--'   `--'    `-'    `------'`--' `--'`-----' `-----'`--' `------' `--'  `--'`--'   `--'`------'`--'  `--'   `--'

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
    "field": "id"
  },
  "mdc": {
    "$resolver": "mdc"
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
  },
  "process.thread.name": {
    "$resolver": "thread",
    "field": "name"
  },
  "process.thread.id": {
    "$resolver": "thread",
    "field": "id"
  },
  "mdc": {
    "$resolver": "mdc"
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
  },
  "process.thread.name": {
    "$resolver": "thread",
    "field": "name"
  },
  "process.thread.id": {
    "$resolver": "thread",
    "field": "id"
  },
  "mdc": {
    "$resolver": "mdc"
  }
}

```

## src/main/resources/log/log4j2-prod.properties

```properties
# Properties
property.CONSOLE_PATTERN=%style{%d{ISO8601}}{black} %highlight{%-5level} [%style{%t}{bright,blue}] [runId=%X{runId} country=%X{countryId} sc=%X{scenario} part=%X{partition} chunk=%X{chunk}] %style{%C{1}}{cyan} - %msg%n
property.TIMESTAMP_FORMAT=$${date:yyyy-MM-dd HH:mm:ss,SSS}
property.APPLICATION_NAME=$${spring:spring.application.name}
property.APPLICATION_TYPE=$${spring:spring.application.type}
property.ROLLING_FILE_PATTERN=$${date:yyyy-MM}/${sys:APPLICATION_NAME}-%d{-dd-MMMM-yyyy}-%i.log.gz
property.LOG_DIR=target/logs
rootLogger=INFO, STDOUT_JSON, jsonrollinglog
appender.console.name=STDOUT_JSON
appender.console.type=Console
appender.console.layout.type=JsonTemplateLayout
appender.console.layout.eventTemplateUri=classpath:log/JsonEventLayout_error.json
appender.console.layout.locationInfoEnabled=true
appender.console.layout.eventTemplateAdditionalField[0].type=EventTemplateAdditionalField
appender.console.layout.eventTemplateAdditionalField[0].key=marker
appender.console.layout.eventTemplateAdditionalField[0].value={"$resolver": "marker", "field": "name"}
appender.console.layout.eventTemplateAdditionalField[0].format=JSON
appender.console.layout.eventTemplateAdditionalField[1].type=EventTemplateAdditionalField
appender.console.layout.eventTemplateAdditionalField[1].key=message
appender.console.layout.eventTemplateAdditionalField[1].value={"$resolver": "message", "field": "name", "style": "bold", "color": "green"}
appender.console.layout.eventTemplateAdditionalField[1].format=JSON
appender.console.layout.eventTemplateAdditionalField[2].type=EventTemplateAdditionalField
appender.console.layout.eventTemplateAdditionalField[2].key=application_name
appender.console.layout.eventTemplateAdditionalField[2].value=${sys:APPLICATION_NAME}
appender.console.layout.eventTemplateAdditionalField[3].type=EventTemplateAdditionalField
appender.console.layout.eventTemplateAdditionalField[3].key=application_type
appender.console.layout.eventTemplateAdditionalField[3].value=${sys:APPLICATION_TYPE}
appender.rolling.name=jsonrollinglog
appender.rolling.type=RollingFile
appender.rolling.fileName=${sys:LOG_DIR}/${sys:APPLICATION_NAME}.log
appender.rolling.filePattern=${sys:LOG_DIR}/${sys:ROLLING_FILE_PATTERN}
appender.rolling.layout.type=JsonTemplateLayout
appender.rolling.layout.eventTemplateUri=classpath:log/JsonEventLayout_trace.json
appender.rolling.layout.locationInfoEnabled=true
appender.rolling.layout.eventTemplateAdditionalField[0].type=EventTemplateAdditionalField
appender.rolling.layout.eventTemplateAdditionalField[0].key=marker
appender.rolling.layout.eventTemplateAdditionalField[0].value={"$resolver": "marker", "field": "name"}
appender.rolling.layout.eventTemplateAdditionalField[0].format=JSON
appender.rolling.layout.eventTemplateAdditionalField[1].type=EventTemplateAdditionalField
appender.rolling.layout.eventTemplateAdditionalField[1].key=message
appender.rolling.layout.eventTemplateAdditionalField[1].value={"$resolver": "message", "field": "name", "style": "italic", "color": "blue"}
appender.rolling.layout.eventTemplateAdditionalField[1].format=JSON
appender.rolling.layout.eventTemplateAdditionalField[2].type=EventTemplateAdditionalField
appender.rolling.layout.eventTemplateAdditionalField[2].key=application_name
appender.rolling.layout.eventTemplateAdditionalField[2].value=${sys:APPLICATION_NAME}
appender.rolling.layout.eventTemplateAdditionalField[3].type=EventTemplateAdditionalField
appender.rolling.layout.eventTemplateAdditionalField[3].key=application_type
appender.rolling.layout.eventTemplateAdditionalField[3].value=${sys:APPLICATION_TYPE}
appender.rolling.policies.type=Policies
appender.rolling.policies.size.type=SizeBasedTriggeringPolicy
appender.rolling.policies.size.size=10MB
appender.rolling.filter.threshold.type=ThresholdFilter
appender.rolling.filter.threshold.level=TRACE
logger.rolling.name=com.nuamx
logger.rolling.level=trace
logger.rolling.additivity=true
logger.rolling.appenderRef.rolling.ref=jsonrollinglog

```

## src/main/resources/log/log4j2.properties

```properties
# Properties
property.CONSOLE_PATTERN=%style{%d{ISO8601}}{black} %highlight{%-5level }[%style{%t}{bright,blue}] [runId=%X{runId} country=%X{countryId} sc=%X{scenario} part=%X{partition} chunk=%X{chunk}] %style{%C{1}}{cyan} - %msg%n
appender.console.name=STDOUT
appender.console.type=Console
appender.console.layout.type=PatternLayout
appender.console.layout.pattern=${sys:CONSOLE_PATTERN}
rootLogger=INFO, STDOUT

```

## src/main/java/com/nubo/definitive/assignment/api/DefinitiveAssignmentApiApplication.java

```java
package com.nubo.definitive.assignment.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DefinitiveAssignmentApiApplication {

    public static void main(String[] args) {
        SpringApplication.run(DefinitiveAssignmentApiApplication.class, args);
    }

}

```

## src/main/java/com/nubo/definitive/assignment/api/application/annotations/ValidBigDecimal.java

```java
package com.nubo.definitive.assignment.api.application.annotations;

import com.nubo.definitive.assignment.api.application.config.ValidBigDecimalConfig;
import jakarta.validation.Constraint;
import jakarta.validation.Payload;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Constraint(validatedBy = ValidBigDecimalConfig.class)
@Target({
        ElementType.METHOD, ElementType.FIELD, ElementType.ANNOTATION_TYPE, ElementType.PARAMETER
})
@Retention(RetentionPolicy.RUNTIME)
public @interface ValidBigDecimal {
    String message() default "";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};

    int precision();

    int scale();
}

```

## src/main/java/com/nubo/definitive/assignment/api/application/config/CacheConfig.java

```java
package com.nubo.definitive.assignment.api.application.config;

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

    public static final String COUNTRIES = "countries";
    public static final String DEPOSITORIES = "depositories";
    public static final String TYPES = "types";
    public static final String MARKETS = "markets";

    @Bean
    public CacheManager cacheManager() {
        SimpleCacheManager cacheManager = new SimpleCacheManager();

        cacheManager.setCaches(Arrays.asList(
                buildCache(COUNTRIES, 1, TimeUnit.HOURS),
                buildCache(DEPOSITORIES, 1, TimeUnit.HOURS),
                buildCache(TYPES, 1, TimeUnit.HOURS),
                buildCache(MARKETS, 1, TimeUnit.HOURS)));

        return cacheManager;
    }

    private static Cache buildCache(String name, long duration, TimeUnit timeUnit) {
        return new CaffeineCache(name, Caffeine.newBuilder()
                .expireAfterWrite(duration, timeUnit)
                .maximumSize(500)
                .recordStats()
                .build());
    }

}

```

## src/main/java/com/nubo/definitive/assignment/api/application/config/FinalAssignmentExecutorConfig.java

```java
package com.nubo.definitive.assignment.api.application.config;

import java.util.Map;
import java.util.concurrent.ThreadPoolExecutor;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.task.TaskDecorator;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;

import com.nubo.definitive.assignment.api.application.context.GlobalContext;
import com.nubo.definitive.assignment.api.application.properties.PropertiesConfig;
import com.nubo.definitive.assignment.api.application.util.ProcessTraceContext;

import lombok.RequiredArgsConstructor;

@Configuration
@RequiredArgsConstructor
public class FinalAssignmentExecutorConfig {

    public static final String FINAL_ASSIGNMENT_EXECUTOR = "finalAssignmentExecutor";

    private final PropertiesConfig propertiesConfig;

    @Bean(name = FINAL_ASSIGNMENT_EXECUTOR)
    public ThreadPoolTaskExecutor finalAssignmentExecutor() {
        int threads = Math.max(1, propertiesConfig.getRuleValidationThreads());

        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        executor.setCorePoolSize(threads);
        executor.setMaxPoolSize(threads);
        executor.setQueueCapacity(threads * 2);
        executor.setThreadNamePrefix("final-assign-");
        executor.setRejectedExecutionHandler(new ThreadPoolExecutor.AbortPolicy());
        executor.setTaskDecorator(globalContextTaskDecorator());
        executor.setWaitForTasksToCompleteOnShutdown(true);
        executor.setAwaitTerminationSeconds(60);
        executor.initialize();
        return executor;
    }

    /**
     * Propaga los headers de auditoría (client ip/user/datetime) y el MDC de trazabilidad
     * (runId, countryId, scenario, chunk) del hilo que envía la tarea al worker.
     */
    private static TaskDecorator globalContextTaskDecorator() {
        return runnable -> {
            Map<String, String> captured = GlobalContext.snapshot();
            Map<String, String> capturedMdc = ProcessTraceContext.snapshot();
            return () -> {
                GlobalContext.restore(captured);
                ProcessTraceContext.restore(capturedMdc);
                try {
                    runnable.run();
                } finally {
                    GlobalContext.remove();
                    ProcessTraceContext.clear();
                }
            };
        };
    }

}

```

## src/main/java/com/nubo/definitive/assignment/api/application/config/KafkaProducerConfig.java

```java
package com.nubo.definitive.assignment.api.application.config;

import com.nubo.definitive.assignment.api.application.properties.PropertiesConfig;
import io.micrometer.core.instrument.MeterRegistry;
import lombok.RequiredArgsConstructor;
import org.apache.kafka.clients.producer.ProducerConfig;
import org.apache.kafka.common.serialization.StringSerializer;
import org.springframework.beans.factory.ObjectProvider;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.core.DefaultKafkaProducerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.core.MicrometerProducerListener;
import org.springframework.kafka.core.ProducerFactory;

import java.util.HashMap;
import java.util.Map;

@Configuration
@RequiredArgsConstructor
public class KafkaProducerConfig {

    private final PropertiesConfig propertiesConfig;
    private final ObjectProvider<MeterRegistry> meterRegistryProvider;

    @Bean
    public ProducerFactory<String, String> producerFactoryKafkaNubo() {
        Map<String, Object> configProps = new HashMap<>();
        configProps.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, propertiesConfig.getKafkaNuboBootstrapServers());
        configProps.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class);
        configProps.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, StringSerializer.class);
        configProps.put(ProducerConfig.ACKS_CONFIG, propertiesConfig.getKafkaNuboProducerAcks());
        configProps.put(ProducerConfig.COMPRESSION_TYPE_CONFIG, propertiesConfig.getKafkaNuboProducerCompressionType());
        configProps.put(ProducerConfig.ENABLE_IDEMPOTENCE_CONFIG, propertiesConfig.getKafkaNuboProducerEnableIdempotence());
        configProps.put(ProducerConfig.RETRIES_CONFIG, propertiesConfig.getKafkaNuboProducerRetries());
        configProps.put(ProducerConfig.LINGER_MS_CONFIG, propertiesConfig.getKafkaNuboProducerLingerMs());
        configProps.put(ProducerConfig.BATCH_SIZE_CONFIG, propertiesConfig.getKafkaNuboProducerBatchSize());
        configProps.put(ProducerConfig.BUFFER_MEMORY_CONFIG, propertiesConfig.getKafkaNuboProducerBufferMemory());
        configProps.put(ProducerConfig.MAX_BLOCK_MS_CONFIG, propertiesConfig.getKafkaNuboProducerMaxBlockMs());
        configProps.put(ProducerConfig.DELIVERY_TIMEOUT_MS_CONFIG, propertiesConfig.getKafkaNuboProducerDeliveryTimeoutMs());
        configProps.put(ProducerConfig.REQUEST_TIMEOUT_MS_CONFIG, propertiesConfig.getKafkaNuboProducerRequestTimeoutMs());
        configProps.put(ProducerConfig.MAX_IN_FLIGHT_REQUESTS_PER_CONNECTION,
            propertiesConfig.getKafkaNuboProducerMaxInFlightRequestsPerConnection());
        configProps.put("security.protocol", propertiesConfig.getKafkaNuboSecurityProtocol());

        configProps.put("sasl.mechanism", propertiesConfig.getKafkaNuboSaslMechanism());
        configProps.put("sasl.jaas.config",propertiesConfig.getKafkaNuboSaslJaasConfig());

        DefaultKafkaProducerFactory<String, String> producerFactory = new DefaultKafkaProducerFactory<>(configProps);
        meterRegistryProvider.ifAvailable(meterRegistry ->
                producerFactory.addListener(new MicrometerProducerListener<>(meterRegistry)));
        return producerFactory;
    }

    @Bean
    public KafkaTemplate<String, String> kafkaNuboTemplate() {
        return new KafkaTemplate<>(producerFactoryKafkaNubo());
    }
}

```

## src/main/java/com/nubo/definitive/assignment/api/application/config/SwaggerConfig.java

```java
package com.nubo.definitive.assignment.api.application.config;

import com.nubo.definitive.assignment.api.exception.error.ErrorResponse;
import com.nubo.definitive.assignment.api.exception.error.ErrorValidation;
import com.nubo.definitive.assignment.api.models.enums.PropertiesEnum;
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

## src/main/java/com/nubo/definitive/assignment/api/application/config/ValidBigDecimalConfig.java

```java
package com.nubo.definitive.assignment.api.application.config;

import com.nubo.definitive.assignment.api.application.annotations.ValidBigDecimal;
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
                    message.isEmpty() ? String.format(
                            "The value must have a maximum precision of %d, a maximum scale of %d " +
                                    "and round to an absolute value less than 10^%d.",
                            precision, scale, precision - scale) : message)
                    .addConstraintViolation();
        }
        return isValid;
    }
}

```

## src/main/java/com/nubo/definitive/assignment/api/application/config/WebConfig.java

```java
package com.nubo.definitive.assignment.api.application.config;

import java.util.Locale;

import org.apache.hc.client5.http.config.ConnectionConfig;
import org.apache.hc.client5.http.config.RequestConfig;
import org.apache.hc.client5.http.impl.classic.CloseableHttpClient;
import org.apache.hc.client5.http.impl.classic.HttpClients;
import org.apache.hc.client5.http.impl.io.PoolingHttpClientConnectionManager;
import org.apache.hc.core5.util.TimeValue;
import org.apache.hc.core5.util.Timeout;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.context.annotation.Profile;
import org.springframework.http.HttpMethod;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.web.client.RestClient;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.i18n.SessionLocaleResolver;

import com.nubo.definitive.assignment.api.application.interceptors.GlobalInterceptor;
import com.nubo.definitive.assignment.api.application.properties.PropertiesConfig;

import lombok.RequiredArgsConstructor;

@Configuration
@RequiredArgsConstructor
public class WebConfig implements WebMvcConfigurer {

    public static final String FRACTIONATION_BATCH_REST_CLIENT = "fractionationBatchRestClient";

    private final GlobalInterceptor globalInterceptor;
    private final PropertiesConfig propertiesConfig;

    @Bean
    public LocaleResolver localeResolver() {
        SessionLocaleResolver slr = new SessionLocaleResolver();
        slr.setDefaultLocale(Locale.ENGLISH);
        return slr;
    }

    @Override
    @Profile({ "local", "dev", "qa" })
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
    public PoolingHttpClientConnectionManager connectionManager() {
        ConnectionConfig connectionConfig = ConnectionConfig.custom()
                .setConnectTimeout(Timeout.ofMilliseconds(propertiesConfig.getHttpConnectTimeoutMs()))
                .build();

        PoolingHttpClientConnectionManager connectionManager = new PoolingHttpClientConnectionManager();
        connectionManager.setMaxTotal(200);
        connectionManager.setDefaultMaxPerRoute(100);
        connectionManager.setDefaultConnectionConfig(connectionConfig);
        return connectionManager;
    }

    @Bean
    public CloseableHttpClient httpClient(PoolingHttpClientConnectionManager connectionManager) {
        RequestConfig requestConfig = RequestConfig.custom()
                .setConnectionRequestTimeout(Timeout.ofMilliseconds(propertiesConfig.getHttpConnectTimeoutMs()))
                .setResponseTimeout(Timeout.ofMilliseconds(propertiesConfig.getHttpReadTimeoutMs()))
                .build();

        return HttpClients.custom()
                .setConnectionManager(connectionManager)
                .setDefaultRequestConfig(requestConfig)
                .evictExpiredConnections()
                .evictIdleConnections(TimeValue.ofSeconds(30))
                .build();
    }

    @Bean
    @Primary
    public RestClient restClient(CloseableHttpClient httpClient) {
        HttpComponentsClientHttpRequestFactory requestFactory = new HttpComponentsClientHttpRequestFactory(httpClient);
        return RestClient.builder().requestFactory(requestFactory).build();
    }

    /**
     * RestClient para {@code /fractionation/batch}: el ms procesa los items en secuencia, por lo que un lote
     * puede superar el read-timeout general. Comparte el pool de conexiones con el cliente por defecto.
     */
    @Bean(name = FRACTIONATION_BATCH_REST_CLIENT)
    public RestClient fractionationBatchRestClient(PoolingHttpClientConnectionManager connectionManager) {
        RequestConfig requestConfig = RequestConfig.custom()
                .setConnectionRequestTimeout(Timeout.ofMilliseconds(propertiesConfig.getHttpConnectTimeoutMs()))
                .setResponseTimeout(Timeout.ofMilliseconds(propertiesConfig.getHttpFractionationBatchReadTimeoutMs()))
                .build();

        CloseableHttpClient batchHttpClient = HttpClients.custom()
                .setConnectionManager(connectionManager)
                .setConnectionManagerShared(true)
                .setDefaultRequestConfig(requestConfig)
                .build();

        HttpComponentsClientHttpRequestFactory requestFactory = new HttpComponentsClientHttpRequestFactory(batchHttpClient);
        return RestClient.builder().requestFactory(requestFactory).build();
    }

}

```

## src/main/java/com/nubo/definitive/assignment/api/application/context/GlobalContext.java

```java
package com.nubo.definitive.assignment.api.application.context;

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
        return value!=null ? String.valueOf(value):null;
    }

    public static void remove() {
        context.remove();
    }

    public static Map<String, String> snapshot() {
        return new HashMap<>(context.get());
    }

    public static void restore(Map<String, String> values) {
        context.set(new HashMap<>(values));
    }

}

```

## src/main/java/com/nubo/definitive/assignment/api/application/database/NamingStrategyConfig.java

```java
package com.nubo.definitive.assignment.api.application.database;

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

## src/main/java/com/nubo/definitive/assignment/api/application/database/UpperNamingConfig.java

```java
package com.nubo.definitive.assignment.api.application.database;

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
        if (identifier==null) {
            return null;
        }
        return new Identifier(identifier.getText().toUpperCase(), identifier.isQuoted());
    }

}
```

## src/main/java/com/nubo/definitive/assignment/api/application/filters/GlobalFilter.java

```java
package com.nubo.definitive.assignment.api.application.filters;

import com.nubo.definitive.assignment.api.application.context.GlobalContext;
import com.nubo.definitive.assignment.api.application.util.ApplicationUtils;
import com.nubo.definitive.assignment.api.exception.ServiceException;
import com.nubo.definitive.assignment.api.exception.error.ErrorCode;
import com.nubo.definitive.assignment.api.exception.error.ErrorResponse;
import com.nubo.definitive.assignment.api.models.enums.PropertiesEnum;
import com.nubo.definitive.assignment.api.models.enums.VersionApiEnum;
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
        if (clientIp==null || clientIp.isEmpty()) {
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
        if (clientUser==null || clientUser.isEmpty()) {
            throw new ServiceException(ErrorCode.HEADER_CLIENT_USER_REQUIRED, HttpStatus.BAD_REQUEST);
        }
        return clientUser;
    }

    private String validateClientDatetimeHeader(HttpServletRequest request) {
        String clientDatetime = request.getHeader(PropertiesEnum.CLIENT_DATETIME.getValue());
        if (clientDatetime==null || clientDatetime.isEmpty()) {
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
                        exception.getMessage():exception.getCause().getMessage())
                .timestamp(String.valueOf(LocalDateTime.now()))
                .build();
        response.getWriter().write(ApplicationUtils.convertObjectToJson(errorResponse));
        response.setStatus(exception.getHttpStatus().value());

        log.error("Error -> {}", errorResponse);
    }

}
```

## src/main/java/com/nubo/definitive/assignment/api/application/interceptors/GlobalInterceptor.java

```java
package com.nubo.definitive.assignment.api.application.interceptors;

import com.nubo.definitive.assignment.api.application.context.GlobalContext;
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

## src/main/java/com/nubo/definitive/assignment/api/application/properties/PropertiesConfig.java

```java
package com.nubo.definitive.assignment.api.application.properties;

import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
@Getter
public class PropertiesConfig {

    @Value("${spring.application.name}")
    private String apiName;

    @Value("${client.nubo.url-businessday-calculation}")
    private String urlNuboBusinessdayCalculation;

    @Value("${client.nubo.url-fractionation}")
    private String urlNuboFractionation;

    @Value("${client.nubo.url-operation-rules}")
    private String urlNuboOperationRules;

    @Value("${client.nubo.url-custody-actions}")
    private String urlNuboCustodyActions;

    @Value("${kafka.nubo.bootstrap-servers}")
    private String kafkaNuboBootstrapServers;

    @Value("${kafka.nubo.sasl.mechanism}")
    private String kafkaNuboSaslMechanism;

    @Value("${kafka.nubo.sasl.jaas.config}")
    private String kafkaNuboSaslJaasConfig;

    @Value("${kafka.nubo.security.protocol}")
    private String kafkaNuboSecurityProtocol;

    @Value("${kafka.nubo.producer.topic-name-final-assignment-request}")
    private String kafkaNuboProducerTopicFinalAssignmentRequest;

    @Value("${kafka.nubo.producer.acks:all}")
    private String kafkaNuboProducerAcks;

    @Value("${kafka.nubo.producer.compression-type:lz4}")
    private String kafkaNuboProducerCompressionType;

    @Value("${kafka.nubo.producer.enable-idempotence:true}")
    private Boolean kafkaNuboProducerEnableIdempotence;

    @Value("${kafka.nubo.producer.retries:2147483647}")
    private Integer kafkaNuboProducerRetries;

    @Value("${kafka.nubo.producer.linger-ms:20}")
    private Integer kafkaNuboProducerLingerMs;

    @Value("${kafka.nubo.producer.batch-size:262144}")
    private Integer kafkaNuboProducerBatchSize;

    @Value("${kafka.nubo.producer.buffer-memory:33554432}")
    private Long kafkaNuboProducerBufferMemory;

    @Value("${kafka.nubo.producer.max-block-ms:60000}")
    private Long kafkaNuboProducerMaxBlockMs;

    @Value("${kafka.nubo.producer.send-batch-records:500}")
    private Integer kafkaNuboProducerSendBatchRecords;

    @Value("${kafka.nubo.producer.delivery-timeout-ms:120000}")
    private Integer kafkaNuboProducerDeliveryTimeoutMs;

    @Value("${kafka.nubo.producer.request-timeout-ms:30000}")
    private Integer kafkaNuboProducerRequestTimeoutMs;

    @Value("${kafka.nubo.producer.max-in-flight-requests-per-connection:5}")
    private Integer kafkaNuboProducerMaxInFlightRequestsPerConnection;

    @Value("${config.application.http.connect-timeout-ms:3000}")
    private Integer httpConnectTimeoutMs;

    @Value("${config.application.http.read-timeout-ms:5000}")
    private Integer httpReadTimeoutMs;

    @Value("${config.application.http.fractionation-batch-read-timeout-ms:60000}")
    private Integer httpFractionationBatchReadTimeoutMs;

    @Value("${config.application.performance.batch-write-size:500}")
    private Integer batchWriteSize;

    @Value("${config.application.performance.max-response-messages:10000}")
    private Integer maxResponseMessages;

    @Value("${config.application.performance.rule-validation-threads:3}")
    private Integer ruleValidationThreads;

    @Value("${config.application.performance.rules-batch-enabled:true}")
    private Boolean rulesBatchEnabled;

    @Value("${config.application.performance.rules-batch-size:80}")
    private Integer rulesBatchSize;

    /**
     * Trades por llamada a {@code /fractionation/batch}. Debe ser menor o igual a
     * {@code NUBO_ASSIGNMENT_BATCH_PROCESSING_SIZE} del ms de fraccionamiento (80 por defecto).
     */
    @Value("${config.application.performance.fractionation-batch-size:80}")
    private Integer fractionationBatchSize;

    @Value("${config.application.performance.custody-reject-batch-size:50}")
    private Integer custodyRejectBatchSize;

    @Value("${config.application.performance.kafka-batch-size:500}")
    private Integer kafkaBatchSize;

    @Value("${config.application.performance.kafka-send-timeout-ms:15000}")
    private Long kafkaSendTimeoutMs;

    @Value("${config.application.performance.transaction-timeout-seconds:60}")
    private Integer transactionTimeoutSeconds;

    @Value("${config.application.performance.partition-await-timeout-ms:1800000}")
    private Long partitionAwaitTimeoutMs;

}

```

## src/main/java/com/nubo/definitive/assignment/api/application/properties/PropertiesContext.java

```java
package com.nubo.definitive.assignment.api.application.properties;

import com.nubo.definitive.assignment.api.application.context.GlobalContext;
import com.nubo.definitive.assignment.api.application.util.ApplicationUtils;
import com.nubo.definitive.assignment.api.models.enums.PropertiesEnum;
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
        assert clientDatetime!=null;
        return LocalDate.parse(clientDatetime.split("T")[0], formatter);
    }

    public static String getVersion() {
        return GlobalContext.getProperty(PropertiesEnum.VERSION_API.getValue());
    }

    public static String getAuthToken() {
        return GlobalContext.getProperty(PropertiesEnum.AUTH_TOKEN.getValue());
    }
}


```

## src/main/java/com/nubo/definitive/assignment/api/application/util/ApplicationUtils.java

```java
package com.nubo.definitive.assignment.api.application.util;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.nubo.definitive.assignment.api.exception.ServiceException;
import com.nubo.definitive.assignment.api.exception.error.ErrorCode;

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

    public static String getFormatDate() {
        return FORMAT_DATE;
    }

    public static String getLocalDateTimeNow() {
        return LocalDateTime.now().format(DateTimeFormatter.ofPattern(ApplicationUtils.getFormatDatetime()));
    }

    public static String convertLocalDateTimeToString(LocalDateTime localDateTime) {
        return localDateTime.format(DateTimeFormatter.ofPattern(ApplicationUtils.getFormatDatetime()));
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

    public static Integer parseIntegerSafely(String value, ErrorCode errorCode) {
        try {
            return Integer.parseInt(value);
        } catch (NumberFormatException e) {
            throw new ServiceException(errorCode, "Error parsing integer value: " + value);
        }
    }

    public static Long parseLongSafely(String value, ErrorCode errorCode) {
        try {
            return Long.parseLong(value);
        } catch (NumberFormatException e) {
            throw new ServiceException(errorCode, "Error parsing long value: " + value);
        }
    }




}

```

## src/main/java/com/nubo/definitive/assignment/api/application/util/ProcessTraceContext.java

```java
package com.nubo.definitive.assignment.api.application.util;

import java.util.Map;
import java.util.UUID;
import java.util.concurrent.Executor;

import org.slf4j.MDC;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;

/**
 * Claves MDC para rastrear una ejecución del proceso automático a través de los hilos del pool.
 * El {@code TaskDecorator} del executor copia el MDC del hilo que envía la tarea al worker.
 */
public final class ProcessTraceContext {

    public static final String RUN_ID = "runId";
    public static final String MODE = "mode";
    public static final String COUNTRY_ID = "countryId";
    public static final String SCENARIO = "scenario";
    public static final String PARTITION = "partition";
    public static final String CHUNK = "chunk";

    private ProcessTraceContext() {
    }

    public static String newRunId() {
        return UUID.randomUUID().toString();
    }

    public static MDC.MDCCloseable put(String key, Object value) {
        return MDC.putCloseable(key, String.valueOf(value));
    }

    public static Map<String, String> snapshot() {
        return MDC.getCopyOfContextMap();
    }

    public static void restore(Map<String, String> values) {
        if (values == null) {
            MDC.clear();
        } else {
            MDC.setContextMap(values);
        }
    }

    public static void clear() {
        MDC.clear();
    }

    public static String threadName() {
        return Thread.currentThread().getName();
    }

    @SuppressWarnings("deprecation")
    public static long threadId() {
        return Thread.currentThread().getId();
    }

    /**
     * Estado del pool en formato key=value para los logs THREAD_TRACE; vacío si el executor no es un pool.
     */
    public static String poolState(Executor executor) {
        if (executor instanceof ThreadPoolTaskExecutor pool && pool.getThreadPoolExecutor() != null) {
            return "poolSize=" + pool.getPoolSize()
                    + " active=" + pool.getActiveCount()
                    + " queue=" + pool.getThreadPoolExecutor().getQueue().size()
                    + " maxPoolSize=" + pool.getMaxPoolSize();
        }
        return "pool=" + (executor == null ? "none" : executor.getClass().getSimpleName());
    }
}

```

## src/main/java/com/nubo/definitive/assignment/api/application/util/RestClientUtils.java

```java
package com.nubo.definitive.assignment.api.application.util;

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
        log.debug("Client url, method[{}] {}", method, url);
        return restClient.method(method)
                .uri(url)
                .headers(h -> h.addAll(headers))
                .body(requestBody)
                .retrieve()
                .toEntity(responseType);
    }

    public <T> ResponseEntity<T> requestWithoutBodyWithResponseObject(URI url, HttpMethod method, HttpHeaders headers,
                                                                      Class<T> responseType) {
        log.debug("Client url, method[{}] {}", method, url);
        return restClient.method(method)
                .uri(url)
                .headers(h -> h.addAll(headers))
                .retrieve()
                .toEntity(responseType);
    }

    public <T> ResponseEntity<T> requestWithResponseObject(URI url, HttpMethod method, HttpHeaders headers,
                                                           Class<T> responseType) {
        log.debug("Client [{}] {}", method, url);
        return restClient.method(method)
                .uri(url)
                .headers(h -> h.addAll(headers))
                .retrieve()
                .toEntity(responseType);
    }

    public <T> ResponseEntity<T> requestBodyWithResponseObject(URI url, HttpMethod method, HttpHeaders headers,
                                                               Object requestBody, Class<T> responseType) {
        return requestBodyWithResponseObject(restClient, url, method, headers, requestBody, responseType);
    }

    /**
     * Igual que {@link #requestBodyWithResponseObject(URI, HttpMethod, HttpHeaders, Object, Class)} pero con un
     * {@link RestClient} específico (p. ej. con otro read-timeout).
     */
    public <T> ResponseEntity<T> requestBodyWithResponseObject(RestClient client, URI url, HttpMethod method,
                                                               HttpHeaders headers, Object requestBody,
                                                               Class<T> responseType) {
        log.debug("Client [{}] {}", method, url);
        return client.method(method)
                .uri(url)
                .headers(h -> h.addAll(headers))
                .body(requestBody)
                .retrieve()
                .toEntity(responseType);
    }

}

```

## src/main/java/com/nubo/definitive/assignment/api/application/util/TradeStatusHierarchyUtil.java

```java
package com.nubo.definitive.assignment.api.application.util;

import com.nubo.definitive.assignment.api.models.entity.StatusEntity;
import com.nubo.definitive.assignment.api.models.enums.StatusEnum;

import java.util.Map;

public final class TradeStatusHierarchyUtil {

    private TradeStatusHierarchyUtil() {}

    // Assignment hierarchy: higher number = further along the flow.
    // REJECTED is intentionally excluded — it's a terminal state, not a step here.
    private static final Map<String, Integer> RANK_BY_DESCRIPTION = Map.of(
            StatusEnum.REGISTERED.getDescription(), 1,
            StatusEnum.ASSIGNED.getDescription(), 2,
            StatusEnum.SENT.getDescription(), 3,
            StatusEnum.ACCEPTED.getDescription(), 4
    );

    public static Integer rankOf(StatusEntity status) {
        return status == null ? null : RANK_BY_DESCRIPTION.get(status.getDescription());
    }

    public static int rankOf(StatusEnum statusEnum) {
        Integer rank = RANK_BY_DESCRIPTION.get(statusEnum.getDescription());
        if (rank == null) {
            throw new IllegalStateException(
                    "StatusEnum sin rank definido en la jerarquía de asignación: " + statusEnum);
        }
        return rank;
    }

    /**
     * Returns the StatusEnum for the LOWEST rank between buyStatus and sellStatus.
     * Returns null if either side is null or outside the hierarchy (e.g. REJECTED) —
     * callers should leave trade.status untouched in that case.
     */
    public static StatusEnum lowestStatus(StatusEntity buyStatus, StatusEntity sellStatus) {

        Integer buyRank = rankOf(buyStatus);
        Integer sellRank = rankOf(sellStatus);

        if (buyRank == null || sellRank == null) {
            return null;
        }

        int targetRank = Math.min(buyRank, sellRank);

        return switch (targetRank) {
            case 1 -> StatusEnum.REGISTERED;
            case 2,3 -> StatusEnum.ASSIGNED;
            case 4 -> StatusEnum.ACCEPTED;
            default -> throw new IllegalStateException("Rank no soportado: " + targetRank);
        };
    }
}
```

## src/main/java/com/nubo/definitive/assignment/api/client/calculation/model/dto/response/BusinessDayOutDto.java

```java
package com.nubo.definitive.assignment.api.client.calculation.model.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class BusinessDayOutDto {

    private Boolean isValidBusinessDay;

    private LocalDate businessCurrentDay;

    private LocalDate businessNextDay;

    private Long countryId;

}
```

## src/main/java/com/nubo/definitive/assignment/api/client/calculation/service/BusinessDayCalculationClient.java

```java
package com.nubo.definitive.assignment.api.client.calculation.service;


import com.nubo.definitive.assignment.api.client.calculation.model.dto.response.BusinessDayOutDto;

public interface BusinessDayCalculationClient {

    BusinessDayOutDto validBusinessDay(Long countryId);

}
```

## src/main/java/com/nubo/definitive/assignment/api/client/calculation/service/impl/BusinessDayCalculationClientImpl.java

```java
package com.nubo.definitive.assignment.api.client.calculation.service.impl;


import com.nubo.definitive.assignment.api.application.properties.PropertiesConfig;
import com.nubo.definitive.assignment.api.application.properties.PropertiesContext;
import com.nubo.definitive.assignment.api.application.util.ApplicationUtils;
import com.nubo.definitive.assignment.api.application.util.RestClientUtils;
import com.nubo.definitive.assignment.api.client.calculation.model.dto.response.BusinessDayOutDto;
import com.nubo.definitive.assignment.api.client.calculation.service.BusinessDayCalculationClient;
import com.nubo.definitive.assignment.api.exception.ServiceException;
import com.nubo.definitive.assignment.api.exception.error.ErrorCode;
import com.nubo.definitive.assignment.api.models.enums.PropertiesEnum;
import com.nubo.definitive.assignment.api.models.enums.VersionApiEnum;
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
public class BusinessDayCalculationClientImpl implements BusinessDayCalculationClient {

    private final PropertiesConfig propertiesConfig;
    private final RestClientUtils restClientUtils;

    private static final String PATH_BUSINESS_DAY_CALCULATION = "business-day/valid/current-day/country";

    @Override
    public BusinessDayOutDto validBusinessDay(Long countryId) {
        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getUrlNuboBusinessdayCalculation())
                .pathSegment(VersionApiEnum.V1.getValue(), PATH_BUSINESS_DAY_CALCULATION, countryId.toString())
                .build()
                .toUri();
        try {
            ResponseEntity<BusinessDayOutDto> response = restClientUtils.requestWithResponseObject(uri,
                    HttpMethod.GET, getHttpHeaders(), BusinessDayOutDto.class);
            if (!ObjectUtils.isEmpty(response.getBody())) {
                return response.getBody();
            }
        } catch (Exception ex) {
            throw new ServiceException(ErrorCode.CLIENT_BUSINESSDAY_CALCULATION_ERROR, HttpStatus.BAD_GATEWAY, ex);
        }

        return BusinessDayOutDto.builder().build();
    }

    private static HttpHeaders getHttpHeaders() {
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(PropertiesContext.getAuthToken());
        headers.set(PropertiesEnum.CLIENT_IP.getValue(), PropertiesContext.getClientIp());
        headers.set(PropertiesEnum.CLIENT_USER.getValue(), PropertiesContext.getClientUser());
        headers.set(PropertiesEnum.CLIENT_DATETIME.getValue(),
                ApplicationUtils.convertLocalDateTimeToString(PropertiesContext.getClientDatetime()));
        headers.setContentType(MediaType.APPLICATION_JSON);
        return headers;
    }
}
```

## src/main/java/com/nubo/definitive/assignment/api/client/fractional/model/dto/request/BatchCreateFractionInDto.java

```java
package com.nubo.definitive.assignment.api.client.fractional.model.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

/**
 * Body de {@code POST /v1/fractionation/batch}. El ms de fraccionamiento procesa los items en orden,
 * cada uno en su propia transacción, y rechaza el request completo si supera su
 * {@code NUBO_ASSIGNMENT_BATCH_PROCESSING_SIZE}.
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BatchCreateFractionInDto {

    private String batchId;

    private List<BatchCreateFractionItemInDto> items;

}

```

## src/main/java/com/nubo/definitive/assignment/api/client/fractional/model/dto/request/BatchCreateFractionItemInDto.java

```java
package com.nubo.definitive.assignment.api.client.fractional.model.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BatchCreateFractionItemInDto {

    private String itemId;

    private Long tradeId;

    private String sideId;

    private String operationType;

    private List<CreateFractionInDto> fractions;

}

```

## src/main/java/com/nubo/definitive/assignment/api/client/fractional/model/dto/request/CreateFractionInDto.java

```java
package com.nubo.definitive.assignment.api.client.fractional.model.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CreateFractionInDto {

    private Long investorAccountId;

    private Long participantAccountId;

    private Long directDepositorId;

    private Boolean fiduciarySpecialist;

    private Long sourceQuoteTypeId;

    private String reference;

    private BigDecimal fractionQuantity;

    private BigDecimal commissionPercentage;

    private BigDecimal valTax;

    private Boolean haveAssignmentMark;

    private Boolean haveAutomaticMark;

    private BigDecimal cashAccount;

}

```

## src/main/java/com/nubo/definitive/assignment/api/client/fractional/model/dto/response/BatchCreateFractionItemOutDto.java

```java
package com.nubo.definitive.assignment.api.client.fractional.model.dto.response;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Resultado por item del batch: {@code success=false} trae {@code errorCode}/{@code errorMessage}
 * y no se revierte ningún otro item. Los settlements creados no se usan y se ignoran al deserializar.
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class BatchCreateFractionItemOutDto {

    private String itemId;

    private Long tradeId;

    private String sideId;

    private Boolean success;

    private String errorCode;

    private String errorMessage;

    private long rulesMs;

    private long calculationsMs;

    private long dbMs;

}

```

## src/main/java/com/nubo/definitive/assignment/api/client/fractional/model/dto/response/BatchCreateFractionOutDto.java

```java
package com.nubo.definitive.assignment.api.client.fractional.model.dto.response;

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
public class BatchCreateFractionOutDto {

    private String batchId;

    private List<BatchCreateFractionItemOutDto> items;

}

```

## src/main/java/com/nubo/definitive/assignment/api/client/fractional/model/dto/response/CreateFractionOutDto.java

```java
package com.nubo.definitive.assignment.api.client.fractional.model.dto.response;

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
public class CreateFractionOutDto {

    private Long tradeId;

    private Integer fraction;

    private Integer fractionQuantity;

    private Integer fractionVolume;

}

```

## src/main/java/com/nubo/definitive/assignment/api/client/fractional/service/FractionationClient.java

```java
package com.nubo.definitive.assignment.api.client.fractional.service;

import com.nubo.definitive.assignment.api.client.fractional.model.dto.request.BatchCreateFractionInDto;
import com.nubo.definitive.assignment.api.client.fractional.model.dto.request.CreateFractionInDto;
import com.nubo.definitive.assignment.api.client.fractional.model.dto.response.BatchCreateFractionOutDto;
import com.nubo.definitive.assignment.api.client.fractional.model.dto.response.CreateFractionOutDto;

import java.util.List;

public interface FractionationClient {

    List<CreateFractionOutDto> createFractions(
            Long tradeId,
            String sideId,
            List<CreateFractionInDto> body
    );

    /**
     * {@code POST /v1/fractionation/batch}: resultado por item; un item fallido no afecta a los demás.
     */
    BatchCreateFractionOutDto createFractionsBatch(BatchCreateFractionInDto body);

}

```

## src/main/java/com/nubo/definitive/assignment/api/client/fractional/service/impl/FractionationClientImpl.java

```java
package com.nubo.definitive.assignment.api.client.fractional.service.impl;

import com.nubo.definitive.assignment.api.application.config.WebConfig;
import com.nubo.definitive.assignment.api.application.properties.PropertiesConfig;
import com.nubo.definitive.assignment.api.application.properties.PropertiesContext;
import com.nubo.definitive.assignment.api.application.util.ApplicationUtils;
import com.nubo.definitive.assignment.api.application.util.RestClientUtils;
import com.nubo.definitive.assignment.api.client.fractional.model.dto.request.BatchCreateFractionInDto;
import com.nubo.definitive.assignment.api.client.fractional.model.dto.request.CreateFractionInDto;
import com.nubo.definitive.assignment.api.client.fractional.model.dto.response.BatchCreateFractionOutDto;
import com.nubo.definitive.assignment.api.client.fractional.model.dto.response.CreateFractionOutDto;
import com.nubo.definitive.assignment.api.client.fractional.service.FractionationClient;
import com.nubo.definitive.assignment.api.exception.ServiceException;
import com.nubo.definitive.assignment.api.exception.error.ErrorCode;
import com.nubo.definitive.assignment.api.models.enums.PropertiesEnum;
import com.nubo.definitive.assignment.api.models.enums.VersionApiEnum;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;
import org.springframework.web.client.RestClient;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.time.LocalDateTime;
import java.util.List;

@Service
@Slf4j
public class FractionationClientImpl implements FractionationClient {

    private final PropertiesConfig propertiesConfig;
    private final RestClientUtils restClientUtils;
    private final RestClient fractionationBatchRestClient;

    private static final String PATH_CREATE_FRACTIONS = "fractionation/create-fractions/trade";
    private static final String PATH_FRACTIONATION = "fractionation";
    private static final String PATH_BATCH = "batch";

    public FractionationClientImpl(PropertiesConfig propertiesConfig,
                                   RestClientUtils restClientUtils,
                                   @Qualifier(WebConfig.FRACTIONATION_BATCH_REST_CLIENT)
                                   RestClient fractionationBatchRestClient) {
        this.propertiesConfig = propertiesConfig;
        this.restClientUtils = restClientUtils;
        this.fractionationBatchRestClient = fractionationBatchRestClient;
    }

    @Override
    public List<CreateFractionOutDto> createFractions(
            Long tradeId,
            String sideId,
            List<CreateFractionInDto> body
    ) {

        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getUrlNuboFractionation())
                .pathSegment(
                        VersionApiEnum.V1.getValue(),
                        PATH_CREATE_FRACTIONS,
                        tradeId.toString(),
                        "side",
                        sideId
                )
                .build()
                .toUri();
        try {
            ResponseEntity<List> response = restClientUtils.requestWithResponseObject(uri,
                    HttpMethod.POST, getHttpHeaders(),body,List.class);

            if (!ObjectUtils.isEmpty(response.getBody())) {
                return response.getBody();
            }

        } catch (Exception ex) {
            throw new ServiceException(ErrorCode.CLIENT_OPERATION_FRACTIONAL_ERROR, HttpStatus.BAD_GATEWAY, ex);
        }

        return List.of();
    }

    @Override
    public BatchCreateFractionOutDto createFractionsBatch(BatchCreateFractionInDto body) {

        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getUrlNuboFractionation())
                .pathSegment(
                        VersionApiEnum.V1.getValue(),
                        PATH_FRACTIONATION,
                        PATH_BATCH
                )
                .build()
                .toUri();
        try {
            ResponseEntity<BatchCreateFractionOutDto> response = restClientUtils.requestBodyWithResponseObject(
                    fractionationBatchRestClient, uri, HttpMethod.POST, getHttpHeaders(), body,
                    BatchCreateFractionOutDto.class);

            if (response != null && response.getBody() != null) {
                return response.getBody();
            }

        } catch (Exception ex) {
            throw new ServiceException(ErrorCode.CLIENT_OPERATION_FRACTIONAL_ERROR, HttpStatus.BAD_GATEWAY, ex);
        }

        return BatchCreateFractionOutDto.builder().items(List.of()).build();
    }

    private static HttpHeaders getHttpHeaders() {
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(PropertiesContext.getAuthToken());
        headers.set(PropertiesEnum.CLIENT_IP.getValue(), PropertiesContext.getClientIp());
        headers.set(PropertiesEnum.CLIENT_USER.getValue(), PropertiesContext.getClientUser());
        headers.set(
                PropertiesEnum.CLIENT_DATETIME.getValue(),
                ApplicationUtils.convertLocalDateTimeToString(LocalDateTime.now())
        );
        headers.setContentType(MediaType.APPLICATION_JSON);
        return headers;
    }
}

```

## src/main/java/com/nubo/definitive/assignment/api/client/kafka/model/dto/request/CountryInDto.java

```java
package com.nubo.definitive.assignment.api.client.kafka.model.dto.request;

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
public class CountryInDto {

    private Long id;

    private String code;

    private String name;

}

```

## src/main/java/com/nubo/definitive/assignment/api/client/kafka/model/dto/request/DepositoryInDto.java

```java
package com.nubo.definitive.assignment.api.client.kafka.model.dto.request;

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
public class DepositoryInDto {

    private String id;

    private String description;

}

```

## src/main/java/com/nubo/definitive/assignment/api/client/kafka/model/dto/request/DirectDepositoryInDto.java

```java
package com.nubo.definitive.assignment.api.client.kafka.model.dto.request;


import com.fasterxml.jackson.annotation.JsonInclude;

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
public class DirectDepositoryInDto {

    private Long id;

    private Long participantId;

    private String depositoryId;

    @NotNull
    private String directDepositoryNumber;

}
```

## src/main/java/com/nubo/definitive/assignment/api/client/kafka/model/dto/request/FinalAssignmentFractionInDto.java

```java
package com.nubo.definitive.assignment.api.client.kafka.model.dto.request;

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
public class FinalAssignmentFractionInDto {

    private SideInDto side;

    private Integer fraction;

    private BigDecimal quantity;

    private InvestorAccountInDto investorAccount;

    private ParticipantAccountInDto participantAccount;

    private InvestorInDto investor;

    private ParticipantBankAccountInDto participantBankAccount;

    private BigDecimal cashAccount;

    private ParticipantInDto custodian;

    private ParticipantInDto ficAdministrator;

    private DirectDepositoryInDto directDepositor;

    private String reference;

}

```

## src/main/java/com/nubo/definitive/assignment/api/client/kafka/model/dto/request/FinalAssignmentInDto.java

```java
package com.nubo.definitive.assignment.api.client.kafka.model.dto.request;

import java.time.LocalDate;
import java.util.List;

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
public class FinalAssignmentInDto {

    private Long id;

    private SideInDto side;

    private Long matchId;

    private LocalDate matchDate;

    private LocalDate clearingDate;

    private LocalDate returnClearingDate;

    private TypeInDto type;

    private Boolean isFractional;

    private CountryInDto country;

    private String mnemonic;

    private String isin;

    private DepositoryInDto depository;

    private Boolean isNuboAllocation;

    private String reference;

    private ParticipantInDto participant;

    private List<FinalAssignmentFractionInDto> fractions;

}
```

## src/main/java/com/nubo/definitive/assignment/api/client/kafka/model/dto/request/InvestorAccountInDto.java

```java
package com.nubo.definitive.assignment.api.client.kafka.model.dto.request;

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
public class InvestorAccountInDto {

    private Long id;

    private InvestorInDto investor;

    private String accountNumber;

}

```

## src/main/java/com/nubo/definitive/assignment/api/client/kafka/model/dto/request/InvestorInDto.java

```java
package com.nubo.definitive.assignment.api.client.kafka.model.dto.request;

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
public class InvestorInDto {

    private Long id;

    private String code;

    private String firstName;

    private String lastName;

    private String companyName;

    private String documentNumber;

    private String identificationTypeCode;

}

```

## src/main/java/com/nubo/definitive/assignment/api/client/kafka/model/dto/request/ParticipantAccountInDto.java

```java
package com.nubo.definitive.assignment.api.client.kafka.model.dto.request;

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
public class ParticipantAccountInDto {

    private Long id;

    private ParticipantInDto participant;

    private String accountNumber;

}

```

## src/main/java/com/nubo/definitive/assignment/api/client/kafka/model/dto/request/ParticipantBankAccountInDto.java

```java
package com.nubo.definitive.assignment.api.client.kafka.model.dto.request;

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
public class ParticipantBankAccountInDto {

    private Long id;

    private String bankAccount;

    private Boolean principal;

}

```

## src/main/java/com/nubo/definitive/assignment/api/client/kafka/model/dto/request/ParticipantInDto.java

```java
package com.nubo.definitive.assignment.api.client.kafka.model.dto.request;

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
public class ParticipantInDto {

    private Long id;

    private String code;

    private String name;

    private String directDepositoryNumber;

}

```

## src/main/java/com/nubo/definitive/assignment/api/client/kafka/model/dto/request/SideInDto.java

```java
package com.nubo.definitive.assignment.api.client.kafka.model.dto.request;

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
public class SideInDto {

    private String id;

    private String name;

}

```

## src/main/java/com/nubo/definitive/assignment/api/client/kafka/model/dto/request/TypeInDto.java

```java
package com.nubo.definitive.assignment.api.client.kafka.model.dto.request;

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
public class TypeInDto {

    private Long id;

    private String description;

    private String category;
}

```

## src/main/java/com/nubo/definitive/assignment/api/client/kafka/producer/FinalAssignmentBatchPublisher.java

```java
package com.nubo.definitive.assignment.api.client.kafka.producer;

import com.nubo.definitive.assignment.api.application.util.ApplicationUtils;
import com.nubo.definitive.assignment.api.client.kafka.model.dto.request.FinalAssignmentInDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.SendResult;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.CancellationException;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;

/**
 * Acumula mensajes de asignación definitiva y los envía a Kafka en lotes de {@code maxBatchRecords},
 * esperando el ack del broker de cada lote antes de continuar. No es thread-safe: una instancia por ejecución.
 */
@Slf4j
public class FinalAssignmentBatchPublisher implements AutoCloseable {

    private final KafkaTemplate<String, String> kafkaTemplate;
    private final String topicName;
    private final int maxBatchRecords;
    private final long ackTimeoutMs;
    private final List<PendingRecord> pending;
    private final List<FailedRecord> failures = new ArrayList<>();
    private long acknowledgedCount;
    private int flushCount;

    public FinalAssignmentBatchPublisher(KafkaTemplate<String, String> kafkaTemplate, String topicName,
                                         int maxBatchRecords, long ackTimeoutMs) {
        if (maxBatchRecords < 1) {
            throw new IllegalArgumentException("maxBatchRecords debe ser >= 1: " + maxBatchRecords);
        }
        this.kafkaTemplate = kafkaTemplate;
        this.topicName = topicName;
        this.maxBatchRecords = maxBatchRecords;
        this.ackTimeoutMs = ackTimeoutMs;
        this.pending = new ArrayList<>(maxBatchRecords);
    }

    public void add(FinalAssignmentInDto finalAssignmentRequestDto) {
        String jsonMessage = ApplicationUtils.convertObjectToJson(finalAssignmentRequestDto);
        String sideId = finalAssignmentRequestDto.getSide() != null ? finalAssignmentRequestDto.getSide().getId() : null;
        pending.add(new PendingRecord(finalAssignmentRequestDto.getId(), sideId, jsonMessage));
        if (pending.size() >= maxBatchRecords) {
            flush();
        }
    }

    public void flush() {
        if (pending.isEmpty()) {
            return;
        }
        List<PendingRecord> batch = new ArrayList<>(pending);
        pending.clear();
        flushCount++;
        long startNanos = System.nanoTime();

        List<CompletableFuture<SendResult<String, String>>> futures = new ArrayList<>(batch.size());
        RuntimeException sendException = null;

        for (PendingRecord pendingRecord : batch) {
            if (sendException != null) {
                // Metadata no disponible, buffer.memory agotado o productor cerrado: KafkaTemplate lanza de forma
                // síncrona tras bloquear max.block.ms; el resto del lote fallaría igual, no se reintenta registro a registro.
                futures.add(CompletableFuture.failedFuture(new IllegalStateException(
                        "Mensaje no enviado: productor Kafka no disponible en este lote", sendException)));
                continue;
            }
            try {
                futures.add(kafkaTemplate.send(topicName, pendingRecord.jsonMessage()));
            } catch (RuntimeException ex) {
                sendException = ex;
                futures.add(CompletableFuture.failedFuture(ex));
            }
        }

        try {
            kafkaTemplate.flush();
        } catch (RuntimeException ex) {
            if (sendException == null) {
                sendException = ex;
            } else {
                sendException.addSuppressed(ex);
            }
        }

        int batchFailures = collectResults(batch, futures);
        long batchBytes = batch.stream().mapToLong(pendingRecord -> pendingRecord.jsonMessage().length()).sum();

        log.info("PERF_KAFKA_BATCH topic={} batchNumber={} records={} acked={} failed={} bytes={} flushMs={}",
                topicName, flushCount, batch.size(), batch.size() - batchFailures, batchFailures, batchBytes,
                TimeUnit.NANOSECONDS.toMillis(System.nanoTime() - startNanos));

        if (sendException != null) {
            throw sendException;
        }
    }

    @Override
    public void close() {
        flush();
    }

    public long acknowledgedCount() {
        return acknowledgedCount;
    }

    public List<FailedRecord> failures() {
        return List.copyOf(failures);
    }

    public int flushCount() {
        return flushCount;
    }

    private int collectResults(List<PendingRecord> batch,
                               List<CompletableFuture<SendResult<String, String>>> futures) {
        int batchFailures = 0;
        long deadlineNanos = System.nanoTime() + TimeUnit.MILLISECONDS.toNanos(ackTimeoutMs);

        for (int i = 0; i < batch.size(); i++) {
            PendingRecord pendingRecord = batch.get(i);
            try {
                long remainingNanos = Math.max(0L, deadlineNanos - System.nanoTime());
                SendResult<String, String> result = futures.get(i).get(remainingNanos, TimeUnit.NANOSECONDS);
                acknowledgedCount++;
                log.info("Send message -- Topic: {} -- partition: {} -- offset: {} -- bytes: {}",
                        topicName,
                        result.getRecordMetadata().partition(),
                        result.getRecordMetadata().offset(),
                        pendingRecord.jsonMessage().length());
            } catch (InterruptedException ex) {
                Thread.currentThread().interrupt();
                registerFailure(pendingRecord, ex);
                batchFailures++;
            } catch (ExecutionException ex) {
                registerFailure(pendingRecord, ex.getCause());
                batchFailures++;
            } catch (TimeoutException | CancellationException ex) {
                registerFailure(pendingRecord, ex);
                batchFailures++;
            }
        }
        return batchFailures;
    }

    private void registerFailure(PendingRecord pendingRecord, Throwable cause) {
        failures.add(new FailedRecord(pendingRecord.tradeId(), pendingRecord.sideId(), cause));
        log.error("Error sending message to topic: {} -- tradeId: {} -- sideId: {} -- messageBytes: {}",
                topicName, pendingRecord.tradeId(), pendingRecord.sideId(), pendingRecord.jsonMessage().length(), cause);
    }

    private record PendingRecord(Long tradeId, String sideId, String jsonMessage) {
    }

    public record FailedRecord(Long tradeId, String sideId, Throwable cause) {
    }
}

```

## src/main/java/com/nubo/definitive/assignment/api/client/kafka/producer/KafkaDeliveryException.java

```java
package com.nubo.definitive.assignment.api.client.kafka.producer;

import com.nubo.definitive.assignment.api.exception.ServiceException;
import com.nubo.definitive.assignment.api.exception.error.ErrorCode;
import org.springframework.http.HttpStatus;

import java.util.List;
import java.util.stream.Collectors;

public class KafkaDeliveryException extends ServiceException {

    private static final int MAX_LISTED_RECORDS = 50;

    private final transient List<FinalAssignmentBatchPublisher.FailedRecord> failures;

    public KafkaDeliveryException(List<FinalAssignmentBatchPublisher.FailedRecord> failures) {
        super(buildMessage(failures), ErrorCode.ERROR_KAFKA_PRODUCER_NUBO, HttpStatus.BAD_GATEWAY);
        this.failures = List.copyOf(failures);
    }

    public List<FinalAssignmentBatchPublisher.FailedRecord> getFailures() {
        return failures;
    }

    private static String buildMessage(List<FinalAssignmentBatchPublisher.FailedRecord> failures) {
        String listed = failures.stream()
                .limit(MAX_LISTED_RECORDS)
                .map(failedRecord -> failedRecord.tradeId() + "-" + failedRecord.sideId())
                .collect(Collectors.joining(", "));
        return "Mensajes Kafka sin ack del broker: " + failures.size() + " [" + listed
                + (failures.size() > MAX_LISTED_RECORDS ? ", ..." : "") + "]";
    }
}

```

## src/main/java/com/nubo/definitive/assignment/api/client/kafka/producer/KafkaNuboAdapterProducer.java

```java
package com.nubo.definitive.assignment.api.client.kafka.producer;

import java.util.List;

import com.nubo.definitive.assignment.api.application.properties.PropertiesConfig;
import com.nubo.definitive.assignment.api.client.kafka.model.dto.request.FinalAssignmentInDto;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Component;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class KafkaNuboAdapterProducer {

    private static final long ACK_TIMEOUT_MARGIN_MS = 5_000L;

    private final PropertiesConfig propertiesConfig;
    private final KafkaTemplate<String, String> kafkaNuboTemplate;

    public FinalAssignmentBatchPublisher openFinalAssignmentBatch() {
        return new FinalAssignmentBatchPublisher(
                kafkaNuboTemplate,
                propertiesConfig.getKafkaNuboProducerTopicFinalAssignmentRequest(),
                propertiesConfig.getKafkaNuboProducerSendBatchRecords(),
                propertiesConfig.getKafkaNuboProducerDeliveryTimeoutMs() + ACK_TIMEOUT_MARGIN_MS);
    }

    /**
     * Publica los mensajes en lotes de {@code send-batch-records} esperando el ack del broker de cada lote.
     * Lanza {@link KafkaDeliveryException} si algún mensaje no fue confirmado, para que el caller haga rollback.
     */
    public void sendFinalAssignmentBatch(List<FinalAssignmentInDto> messages) {
        if (messages == null || messages.isEmpty()) {
            return;
        }
        FinalAssignmentBatchPublisher publisher = openFinalAssignmentBatch();
        messages.forEach(publisher::add);
        publisher.flush();

        if (!publisher.failures().isEmpty()) {
            throw new KafkaDeliveryException(publisher.failures());
        }
    }
}

```

## src/main/java/com/nubo/definitive/assignment/api/client/packaging/exception/BatchPackagingHttpException.java

```java
package com.nubo.definitive.assignment.api.client.packaging.exception;

import org.springframework.http.HttpStatusCode;

/** Unexpected HTTP response from a custody batch endpoint. */
public class BatchPackagingHttpException extends RuntimeException {

    private final HttpStatusCode statusCode;
    private final String responseBody;

    public BatchPackagingHttpException(HttpStatusCode statusCode, String responseBody) {
        super("Unexpected HTTP status from custody batch endpoint: " + statusCode.value());
        this.statusCode = statusCode;
        this.responseBody = responseBody;
    }

    public HttpStatusCode getStatusCode() {
        return statusCode;
    }

    public String getResponseBody() {
        return responseBody;
    }

}

```

## src/main/java/com/nubo/definitive/assignment/api/client/packaging/exception/BatchResponseContractException.java

```java
package com.nubo.definitive.assignment.api.client.packaging.exception;

/** Raised when a batch response cannot be trusted against the request contract. */
public class BatchResponseContractException extends RuntimeException {

    public BatchResponseContractException(String message) {
        super(message);
    }

    public BatchResponseContractException(String message, Throwable cause) {
        super(message, cause);
    }

}

```

## src/main/java/com/nubo/definitive/assignment/api/client/packaging/model/dto/request/BatchCustodyRejectInDto.java

```java
package com.nubo.definitive.assignment.api.client.packaging.model.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BatchCustodyRejectInDto {

    private String batchId;
    private List<BatchCustodyRejectItemInDto> items;

}

```

## src/main/java/com/nubo/definitive/assignment/api/client/packaging/model/dto/request/BatchCustodyRejectItemInDto.java

```java
package com.nubo.definitive.assignment.api.client.packaging.model.dto.request;

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
public class BatchCustodyRejectItemInDto {

    private Long packageId;
    private Long rejectionReasonId;
    private String otherReason;
    private Long custodianId;
}

```

## src/main/java/com/nubo/definitive/assignment/api/client/packaging/model/dto/request/BatchPackageRejectInDto.java

```java
package com.nubo.definitive.assignment.api.client.packaging.model.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BatchPackageRejectInDto {

    private String batchId;
    private List<RejectPackageInDto> items;

}

```

## src/main/java/com/nubo/definitive/assignment/api/client/packaging/model/dto/request/RejectInDto.java

```java
package com.nubo.definitive.assignment.api.client.packaging.model.dto.request;

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
public class RejectInDto {

    private Long packageId;
    private Long rejectionReasonId;
    private Long custodianId;

}
```

## src/main/java/com/nubo/definitive/assignment/api/client/packaging/model/dto/request/RejectPackageInDto.java

```java
package com.nubo.definitive.assignment.api.client.packaging.model.dto.request;

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
public class RejectPackageInDto {

    private Long packageId;

}
```

## src/main/java/com/nubo/definitive/assignment/api/client/packaging/model/dto/response/BatchCustodyActionItemOutDto.java

```java
package com.nubo.definitive.assignment.api.client.packaging.model.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tools.jackson.databind.JsonNode;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BatchCustodyActionItemOutDto {

    private int index;
    private Long packageId;
    private boolean success;
    private BatchCustodyActionItemStatus status;
    private JsonNode result;
    private String errorCode;
    private String errorMessage;

}

```

## src/main/java/com/nubo/definitive/assignment/api/client/packaging/model/dto/response/BatchCustodyActionItemStatus.java

```java
package com.nubo.definitive.assignment.api.client.packaging.model.dto.response;

public enum BatchCustodyActionItemStatus {
    SUCCESS,
    FUNCTIONAL_FAILURE,
    TECHNICAL_ERROR,
    NOT_PROCESSED
}

```

## src/main/java/com/nubo/definitive/assignment/api/client/packaging/model/dto/response/BatchCustodyActionOutDto.java

```java
package com.nubo.definitive.assignment.api.client.packaging.model.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BatchCustodyActionOutDto {

    private String batchId;
    private int total;
    private int successCount;
    private int failureCount;
    private int pendingCount;
    private boolean technicalFailure;
    private List<BatchCustodyActionItemOutDto> results;

}

```

## src/main/java/com/nubo/definitive/assignment/api/client/packaging/service/PackagingClient.java

```java
package com.nubo.definitive.assignment.api.client.packaging.service;

import com.nubo.definitive.assignment.api.client.packaging.model.dto.request.RejectInDto;
import com.nubo.definitive.assignment.api.client.packaging.model.dto.request.RejectPackageInDto;
import com.nubo.definitive.assignment.api.client.packaging.model.dto.request.BatchCustodyRejectInDto;
import com.nubo.definitive.assignment.api.client.packaging.model.dto.request.BatchPackageRejectInDto;
import com.nubo.definitive.assignment.api.client.packaging.model.dto.response.BatchCustodyActionOutDto;
import org.springframework.http.ResponseEntity;

public interface PackagingClient {

    void rejectPackage(RejectPackageInDto body);

    void reject(RejectInDto body);

    ResponseEntity<BatchCustodyActionOutDto> rejectBatch(BatchCustodyRejectInDto body);

    ResponseEntity<BatchCustodyActionOutDto> rejectPackageBatch(BatchPackageRejectInDto body);

}

```

## src/main/java/com/nubo/definitive/assignment/api/client/packaging/service/impl/BatchCustodyActionResponseValidator.java

```java
package com.nubo.definitive.assignment.api.client.packaging.service.impl;

import com.nubo.definitive.assignment.api.client.packaging.exception.BatchResponseContractException;
import com.nubo.definitive.assignment.api.client.packaging.model.dto.request.BatchCustodyRejectInDto;
import com.nubo.definitive.assignment.api.client.packaging.model.dto.request.BatchPackageRejectInDto;
import com.nubo.definitive.assignment.api.client.packaging.model.dto.response.BatchCustodyActionItemOutDto;
import com.nubo.definitive.assignment.api.client.packaging.model.dto.response.BatchCustodyActionItemStatus;
import com.nubo.definitive.assignment.api.client.packaging.model.dto.response.BatchCustodyActionOutDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.stereotype.Component;

import java.util.EnumMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;

@Component
public class BatchCustodyActionResponseValidator {

    public void validate(BatchCustodyRejectInDto request, HttpStatusCode httpStatus,
                         BatchCustodyActionOutDto response) {
        validate(request == null ? null : request.getBatchId(),
                request == null || request.getItems() == null ? null
                        : request.getItems().stream().map(item -> item == null ? null : item.getPackageId()).toList(),
                httpStatus, response);
    }

    public void validate(BatchPackageRejectInDto request, HttpStatusCode httpStatus,
                         BatchCustodyActionOutDto response) {
        validate(request == null ? null : request.getBatchId(),
                request == null || request.getItems() == null ? null
                        : request.getItems().stream().map(item -> item == null ? null : item.getPackageId()).toList(),
                httpStatus, response);
    }

    private void validate(String requestBatchId, List<Long> requestPackageIds, HttpStatusCode httpStatus,
                          BatchCustodyActionOutDto response) {
        if (requestBatchId == null || requestPackageIds == null || response == null) {
            throw invalid("Request identity, package list, and response are required");
        }
        if (!Objects.equals(requestBatchId, response.getBatchId())) {
            throw invalid("Response batchId does not match request");
        }
        if (response.getResults() == null || response.getTotal() != requestPackageIds.size()
                || response.getResults().size() != requestPackageIds.size()) {
            throw invalid("Response total or results size does not match request item count");
        }

        Set<Long> requestIds = new HashSet<>();
        for (Long packageId : requestPackageIds) {
            if (packageId == null || !requestIds.add(packageId)) {
                throw invalid("Request packageIds must be non-null and unique");
            }
        }

        int successCount = 0;
        int failureCount = 0;
        int pendingCount = 0;
        int technicalErrorCount = 0;
        int firstTechnicalErrorIndex = -1;
        Map<BatchCustodyActionItemStatus, Integer> counts = new EnumMap<>(BatchCustodyActionItemStatus.class);
        boolean[] seenIndexes = new boolean[requestPackageIds.size()];

        for (BatchCustodyActionItemOutDto item : response.getResults()) {
            if (item == null || item.getIndex() < 0 || item.getIndex() >= requestPackageIds.size()) {
                throw invalid("Response contains a null item or out-of-range index");
            }
            int index = item.getIndex();
            if (seenIndexes[index]) {
                throw invalid("Response contains a duplicate index: " + index);
            }
            seenIndexes[index] = true;
            if (!Objects.equals(requestPackageIds.get(index), item.getPackageId())) {
                throw invalid("Response packageId does not match request at index " + index);
            }
            if (item.getStatus() == null) {
                throw invalid("Response contains an unknown or missing status at index " + index);
            }

            BatchCustodyActionItemStatus status = item.getStatus();
            counts.merge(status, 1, Integer::sum);
            boolean shouldSucceed = status == BatchCustodyActionItemStatus.SUCCESS;
            if (item.isSuccess() != shouldSucceed) {
                throw invalid("Response success flag conflicts with status at index " + index);
            }

            switch (status) {
                case SUCCESS -> successCount++;
                case FUNCTIONAL_FAILURE -> failureCount++;
                case TECHNICAL_ERROR -> {
                    failureCount++;
                    technicalErrorCount++;
                    firstTechnicalErrorIndex = index;
                }
                case NOT_PROCESSED -> pendingCount++;
            }
        }

        for (int index = 0; index < seenIndexes.length; index++) {
            if (!seenIndexes[index]) {
                throw invalid("Response is missing index " + index);
            }
        }
        if (response.getSuccessCount() != successCount || response.getFailureCount() != failureCount
                || response.getPendingCount() != pendingCount
                || successCount + failureCount + pendingCount != response.getTotal()) {
            throw invalid("Response counters do not match item statuses");
        }

        validateHttpStatus(httpStatus, response, counts, technicalErrorCount, firstTechnicalErrorIndex);
    }

    private void validateHttpStatus(HttpStatusCode httpStatus, BatchCustodyActionOutDto response,
                                    Map<BatchCustodyActionItemStatus, Integer> counts,
                                    int technicalErrorCount, int firstTechnicalErrorIndex) {
        if (httpStatus == null) {
            throw invalid("HTTP status is required");
        }
        int notProcessed = counts.getOrDefault(BatchCustodyActionItemStatus.NOT_PROCESSED, 0);

        if (httpStatus.value() == HttpStatus.OK.value()) {
            if (response.isTechnicalFailure() || technicalErrorCount != 0 || notProcessed != 0) {
                throw invalid("HTTP 200 cannot contain technical failure or unprocessed items");
            }
            return;
        }

        if (httpStatus.value() != HttpStatus.BAD_GATEWAY.value()) {
            throw invalid("Only HTTP 200 and contractual HTTP 502 are valid batch statuses");
        }
        if (!response.isTechnicalFailure() || technicalErrorCount != 1 || firstTechnicalErrorIndex < 0) {
            throw invalid("HTTP 502 requires technicalFailure and exactly one TECHNICAL_ERROR");
        }

        for (BatchCustodyActionItemOutDto item : response.getResults()) {
            if (item.getIndex() > firstTechnicalErrorIndex
                    && item.getStatus() != BatchCustodyActionItemStatus.NOT_PROCESSED) {
                throw invalid("Only NOT_PROCESSED items may follow TECHNICAL_ERROR in HTTP 502 response");
            }
            if (item.getIndex() < firstTechnicalErrorIndex
                    && (item.getStatus() == BatchCustodyActionItemStatus.TECHNICAL_ERROR
                    || item.getStatus() == BatchCustodyActionItemStatus.NOT_PROCESSED)) {
                throw invalid("Items before TECHNICAL_ERROR cannot be technical or unprocessed");
            }
        }
    }

    private BatchResponseContractException invalid(String message) {
        return new BatchResponseContractException(message);
    }

}

```

## src/main/java/com/nubo/definitive/assignment/api/client/packaging/service/impl/PackagingClientImpl.java

```java
package com.nubo.definitive.assignment.api.client.packaging.service.impl;

import com.nubo.definitive.assignment.api.application.properties.PropertiesConfig;
import com.nubo.definitive.assignment.api.application.properties.PropertiesContext;
import com.nubo.definitive.assignment.api.application.util.ApplicationUtils;
import com.nubo.definitive.assignment.api.application.util.RestClientUtils;
import com.nubo.definitive.assignment.api.client.packaging.exception.BatchPackagingHttpException;
import com.nubo.definitive.assignment.api.client.packaging.exception.BatchResponseContractException;
import com.nubo.definitive.assignment.api.client.packaging.model.dto.request.BatchCustodyRejectInDto;
import com.nubo.definitive.assignment.api.client.packaging.model.dto.request.BatchPackageRejectInDto;
import com.nubo.definitive.assignment.api.client.packaging.model.dto.request.RejectInDto;
import com.nubo.definitive.assignment.api.client.packaging.model.dto.request.RejectPackageInDto;
import com.nubo.definitive.assignment.api.client.packaging.model.dto.response.BatchCustodyActionOutDto;
import com.nubo.definitive.assignment.api.client.packaging.service.PackagingClient;
import com.nubo.definitive.assignment.api.exception.ServiceException;
import com.nubo.definitive.assignment.api.exception.error.ErrorCode;
import com.nubo.definitive.assignment.api.models.enums.PropertiesEnum;
import com.nubo.definitive.assignment.api.models.enums.VersionApiEnum;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;
import org.springframework.web.client.RestClientException;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.time.LocalDateTime;
import java.util.function.BiConsumer;

@Service
@RequiredArgsConstructor
@Slf4j
public class PackagingClientImpl implements PackagingClient {

    private final PropertiesConfig propertiesConfig;
    private final RestClientUtils restClientUtils;
    private final RestClient restClient;
    private final BatchCustodyActionResponseValidator responseValidator;

    private static final String PATH_CUSTODY_ACTIONS = "custody-actions";
    private static final String PATH_PACKAGE = "package";
    private static final String PATH_REJECT = "reject";
    private static final String PATH_BATCH = "batch";

    @Override
    public void rejectPackage(RejectPackageInDto body) {

        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getUrlNuboCustodyActions())
                .pathSegment(
                        VersionApiEnum.V1.getValue(),
                        PATH_CUSTODY_ACTIONS,
                        PATH_PACKAGE,
                        PATH_REJECT
                )
                .build()
                .toUri();

        try {
            restClientUtils.requestWithResponseObject(uri,
                    HttpMethod.POST, getHttpHeaders(), body, Void.class);

        } catch (Exception ex) {
            throw new ServiceException(ErrorCode.CLIENT_OPERATION_CUSTODY_ACTIONS_ERROR, HttpStatus.BAD_GATEWAY, ex);
        }
    }

    @Override
    public void reject(RejectInDto body) {

        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getUrlNuboCustodyActions())
                .pathSegment(
                        VersionApiEnum.V1.getValue(),
                        PATH_CUSTODY_ACTIONS,
                        PATH_REJECT
                )
                .build()
                .toUri();

        try {
            restClientUtils.requestWithResponseObject(uri,
                    HttpMethod.POST, getHttpHeaders(), body, Void.class);

        } catch (Exception ex) {
            throw new ServiceException(ErrorCode.CLIENT_OPERATION_CUSTODY_ACTIONS_ERROR, HttpStatus.BAD_GATEWAY, ex);
        }
    }

    @Override
    public ResponseEntity<BatchCustodyActionOutDto> rejectBatch(BatchCustodyRejectInDto body) {
        URI uri = buildBatchUri(false);
        return exchangeBatch(uri, body, (status, response) -> responseValidator.validate(body, status, response));
    }

    @Override
    public ResponseEntity<BatchCustodyActionOutDto> rejectPackageBatch(BatchPackageRejectInDto body) {
        URI uri = buildBatchUri(true);
        return exchangeBatch(uri, body, (status, response) -> responseValidator.validate(body, status, response));
    }

    private URI buildBatchUri(boolean packageReject) {
        UriComponentsBuilder builder = UriComponentsBuilder
                .fromUriString(propertiesConfig.getUrlNuboCustodyActions())
                .pathSegment(VersionApiEnum.V1.getValue(), PATH_CUSTODY_ACTIONS);
        if (packageReject) {
            builder.pathSegment(PATH_PACKAGE);
        }
        return builder.pathSegment(PATH_REJECT, PATH_BATCH).build().toUri();
    }

    private <T> ResponseEntity<BatchCustodyActionOutDto> exchangeBatch(
            URI uri, T requestBody, BiConsumer<org.springframework.http.HttpStatusCode, BatchCustodyActionOutDto> validate) {
        try {
            return restClient.method(HttpMethod.POST)
                    .uri(uri)
                    .headers(headers -> headers.addAll(getHttpHeaders()))
                    .body(requestBody)
                    .exchange((request, response) -> {
                        org.springframework.http.HttpStatusCode status = response.getStatusCode();
                        if (status.value() != HttpStatus.OK.value()
                                && status.value() != HttpStatus.BAD_GATEWAY.value()) {
                            throw new BatchPackagingHttpException(status, readErrorBody(response));
                        }

                        BatchCustodyActionOutDto batchResponse;
                        try {
                            batchResponse = response.bodyTo(BatchCustodyActionOutDto.class);
                        } catch (RuntimeException ex) {
                            throw new BatchResponseContractException(
                                    "Unable to deserialize custody batch response", ex);
                        }
                        validate.accept(status, batchResponse);
                        return ResponseEntity.status(status).body(batchResponse);
                    });
        } catch (BatchPackagingHttpException | BatchResponseContractException ex) {
            throw ex;
        } catch (RestClientException ex) {
            throw new ServiceException(ErrorCode.CLIENT_OPERATION_CUSTODY_ACTIONS_ERROR,
                    HttpStatus.BAD_GATEWAY, ex);
        }
    }

    private static String readErrorBody(RestClient.RequestHeadersSpec.ConvertibleClientHttpResponse response) {
        try {
            return response.bodyTo(String.class);
        } catch (RuntimeException ex) {
            return "Unable to read error response body: " + ex.getMessage();
        }
    }

    private static HttpHeaders getHttpHeaders() {
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(PropertiesContext.getAuthToken());
        headers.set(PropertiesEnum.CLIENT_IP.getValue(), PropertiesContext.getClientIp());
        headers.set(PropertiesEnum.CLIENT_USER.getValue(), PropertiesContext.getClientUser());
        headers.set(
                PropertiesEnum.CLIENT_DATETIME.getValue(),
                ApplicationUtils.convertLocalDateTimeToString(LocalDateTime.now())
        );
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set(PropertiesEnum.CLIENT_BACKEND.getValue(), "true");
        return headers;
    }
}

```

## src/main/java/com/nubo/definitive/assignment/api/client/rules/models/dto/request/BatchStatusUpdateTradeInDto.java

```java
package com.nubo.definitive.assignment.api.client.rules.models.dto.request;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

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

## src/main/java/com/nubo/definitive/assignment/api/client/rules/models/dto/request/BatchStatusUpdateTradeItemInDto.java

```java
package com.nubo.definitive.assignment.api.client.rules.models.dto.request;

import com.nubo.definitive.assignment.api.models.enums.BusinessRuleEnum;
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

## src/main/java/com/nubo/definitive/assignment/api/client/rules/models/dto/request/FractionRuleInDto.java

```java
package com.nubo.definitive.assignment.api.client.rules.models.dto.request;

import com.nubo.definitive.assignment.api.application.annotations.ValidBigDecimal;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FractionRuleInDto {

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal fractionQuantity;

}

```

## src/main/java/com/nubo/definitive/assignment/api/client/rules/models/dto/request/StatusAllowedOptionsInDto.java

```java
package com.nubo.definitive.assignment.api.client.rules.models.dto.request;

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

## src/main/java/com/nubo/definitive/assignment/api/client/rules/models/dto/request/StatusUpdateTradeInDto.java

```java
package com.nubo.definitive.assignment.api.client.rules.models.dto.request;

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

## src/main/java/com/nubo/definitive/assignment/api/client/rules/models/dto/response/ActionOutDto.java

```java
package com.nubo.definitive.assignment.api.client.rules.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.nubo.definitive.assignment.api.models.dto.response.StatusOutDto;
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

## src/main/java/com/nubo/definitive/assignment/api/client/rules/models/dto/response/BatchStatusUpdateTradeItemOutDto.java

```java
package com.nubo.definitive.assignment.api.client.rules.models.dto.response;

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

## src/main/java/com/nubo/definitive/assignment/api/client/rules/models/dto/response/BatchStatusUpdateTradeOutDto.java

```java
package com.nubo.definitive.assignment.api.client.rules.models.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BatchStatusUpdateTradeOutDto {

    private String batchId;

    private List<BatchStatusUpdateTradeItemOutDto> items;

}

```

## src/main/java/com/nubo/definitive/assignment/api/client/rules/models/dto/response/BusinessRuleOutDto.java

```java
package com.nubo.definitive.assignment.api.client.rules.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.nubo.definitive.assignment.api.models.dto.response.CountryOutDto;
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

## src/main/java/com/nubo/definitive/assignment/api/client/rules/models/dto/response/StatusAllowedOptionsOutDto.java

```java
package com.nubo.definitive.assignment.api.client.rules.models.dto.response;

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

## src/main/java/com/nubo/definitive/assignment/api/client/rules/models/dto/response/StatusClientOutDto.java

```java
package com.nubo.definitive.assignment.api.client.rules.models.dto.response;

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

## src/main/java/com/nubo/definitive/assignment/api/client/rules/models/dto/response/StatusUpdateTradeOutDto.java

```java
package com.nubo.definitive.assignment.api.client.rules.models.dto.response;

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

## src/main/java/com/nubo/definitive/assignment/api/client/rules/service/OperationBusinessRuleClient.java

```java
package com.nubo.definitive.assignment.api.client.rules.service;


import com.nubo.definitive.assignment.api.client.rules.models.dto.request.BatchStatusUpdateTradeInDto;
import com.nubo.definitive.assignment.api.client.rules.models.dto.request.StatusAllowedOptionsInDto;
import com.nubo.definitive.assignment.api.client.rules.models.dto.request.StatusUpdateTradeInDto;
import com.nubo.definitive.assignment.api.client.rules.models.dto.response.BatchStatusUpdateTradeOutDto;
import com.nubo.definitive.assignment.api.client.rules.models.dto.response.BusinessRuleOutDto;
import com.nubo.definitive.assignment.api.client.rules.models.dto.response.StatusAllowedOptionsOutDto;
import com.nubo.definitive.assignment.api.client.rules.models.dto.response.StatusUpdateTradeOutDto;

public interface OperationBusinessRuleClient {

    BusinessRuleOutDto findBusinessRuleByCountryIdAndCode(Long countryId, String code);

    BusinessRuleOutDto findBusinessRuleByCode(String code);

    StatusAllowedOptionsOutDto validateStatusByCode(StatusAllowedOptionsInDto statusAllowedOptionsInDto);

    StatusUpdateTradeOutDto validateUpdateStatusTrade(StatusUpdateTradeInDto statusUpdateTradeInDto);

    BatchStatusUpdateTradeOutDto validateUpdateStatusTradeBatch(BatchStatusUpdateTradeInDto batchRequest);

    BusinessRuleOutDto findBusinessRuleByCountryIdAndCodeValid(Long countryId, String code);

}

```

## src/main/java/com/nubo/definitive/assignment/api/client/rules/service/impl/OperationBusinessRuleClientImpl.java

```java
package com.nubo.definitive.assignment.api.client.rules.service.impl;

import com.nubo.definitive.assignment.api.application.properties.PropertiesConfig;
import com.nubo.definitive.assignment.api.application.properties.PropertiesContext;
import com.nubo.definitive.assignment.api.application.util.ApplicationUtils;
import com.nubo.definitive.assignment.api.application.util.RestClientUtils;
import com.nubo.definitive.assignment.api.client.rules.models.dto.request.BatchStatusUpdateTradeInDto;
import com.nubo.definitive.assignment.api.client.rules.models.dto.request.StatusAllowedOptionsInDto;
import com.nubo.definitive.assignment.api.client.rules.models.dto.request.StatusUpdateTradeInDto;
import com.nubo.definitive.assignment.api.client.rules.models.dto.response.BatchStatusUpdateTradeOutDto;
import com.nubo.definitive.assignment.api.client.rules.models.dto.response.BusinessRuleOutDto;
import com.nubo.definitive.assignment.api.client.rules.models.dto.response.StatusAllowedOptionsOutDto;
import com.nubo.definitive.assignment.api.client.rules.models.dto.response.StatusUpdateTradeOutDto;
import com.nubo.definitive.assignment.api.client.rules.service.OperationBusinessRuleClient;
import com.nubo.definitive.assignment.api.exception.ClientException;
import com.nubo.definitive.assignment.api.exception.error.ErrorCode;
import com.nubo.definitive.assignment.api.models.enums.PropertiesEnum;
import com.nubo.definitive.assignment.api.models.enums.VersionApiEnum;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
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
    public BusinessRuleOutDto findBusinessRuleByCode(String code) {
        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getUrlNuboOperationRules())
                .pathSegment(VersionApiEnum.V1.getValue(), OPERATION_BUSINESS_RULE)
                .path("/code/{code}")
                .buildAndExpand(code)
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
    public StatusAllowedOptionsOutDto validateStatusByCode(StatusAllowedOptionsInDto statusAllowedOptionsInDto) {
        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getUrlNuboOperationRules())
                .pathSegment(VersionApiEnum.V1.getValue(), OPERATION_ACTION_BUSINESS_RULE)
                .pathSegment("validation")
                .build()
                .toUri();

        try {
            ResponseEntity<StatusAllowedOptionsOutDto> response = restClientUtils.requestBodyWithResponseObject(uri,
                    HttpMethod.POST, getHttpHeaders(), statusAllowedOptionsInDto, StatusAllowedOptionsOutDto.class);

            if (!ObjectUtils.isEmpty(response.getBody())) {
                return response.getBody();
            }
        } catch (Exception ex) {
            throw new ClientException(ErrorCode.CLIENT_OPERATION_RULES_ERROR, HttpStatus.BAD_GATEWAY, ex);
        }

        return StatusAllowedOptionsOutDto.builder().build();
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

    @Override
    public BatchStatusUpdateTradeOutDto validateUpdateStatusTradeBatch(BatchStatusUpdateTradeInDto batchRequest) {
        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getUrlNuboOperationRules())
                .pathSegment(VersionApiEnum.V1.getValue(), OPERATION_STATUS_UPDATE_BUSINESS_RULE)
                .path("/trade/validation/batch")
                .build()
                .toUri();

        try {
            ResponseEntity<BatchStatusUpdateTradeOutDto> response = restClientUtils.requestBodyWithResponseObject(uri,
                    HttpMethod.POST, getHttpHeaders(), batchRequest, BatchStatusUpdateTradeOutDto.class);

            if (!ObjectUtils.isEmpty(response.getBody())) {
                return response.getBody();
            }
        } catch (Exception ex) {
            throw new ClientException(ErrorCode.CLIENT_OPERATION_RULES_ERROR, HttpStatus.BAD_GATEWAY, ex);
        }

        return BatchStatusUpdateTradeOutDto.builder().build();
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

## src/main/java/com/nubo/definitive/assignment/api/exception/ClientException.java

```java
package com.nubo.definitive.assignment.api.exception;

import com.nubo.definitive.assignment.api.exception.error.ErrorCode;
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

## src/main/java/com/nubo/definitive/assignment/api/exception/ServiceException.java

```java
package com.nubo.definitive.assignment.api.exception;

import java.util.Collections;
import java.util.Map;

import com.nubo.definitive.assignment.api.exception.error.ErrorCode;
import org.springframework.http.HttpStatus;


import lombok.Getter;

@Getter
public class ServiceException extends RuntimeException {

    private final ErrorCode errorCode;
    private final HttpStatus httpStatus;
    private final Map<String, Object> details;

    public ServiceException(ErrorCode errorCode) {
        super(errorCode.getMessage());
        this.errorCode = errorCode;
        this.httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
        this.details = null;
    }

    public ServiceException(ErrorCode errorCode, HttpStatus httpStatus) {
        super(errorCode.getMessage());
        this.errorCode = errorCode;
        this.httpStatus = httpStatus;
        this.details = null;
    }

    public ServiceException(ErrorCode errorCode, String message) {
        super(errorCode.getMessage(), new Throwable(message));
        this.errorCode = errorCode;
        this.httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
        this.details = null;
    }

    public ServiceException(ErrorCode errorCode, HttpStatus httpStatus, Map<String, Object> details) {
        super(errorCode.getMessage());
        this.errorCode = errorCode;
        this.httpStatus = httpStatus;
        this.details = (details == null ? Collections.emptyMap() : details);
    }

    public ServiceException(ErrorCode errorCode, String message, HttpStatus httpStatus) {
        super(errorCode.getMessage(), new Throwable(message));
        this.errorCode = errorCode;
        this.httpStatus = httpStatus;
        this.details = null;
    }

    public ServiceException(ErrorCode errorCode, Throwable throwable) {
        super(errorCode.getMessage(), throwable);
        this.errorCode = errorCode;
        this.httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
        this.details = null;
    }

    public ServiceException(ErrorCode errorCode, HttpStatus httpStatus, Throwable throwable) {
        super(errorCode.getMessage(), throwable);
        this.errorCode = errorCode;
        this.httpStatus = httpStatus;
        this.details = null;
    }

    public ServiceException(String message, ErrorCode errorCode, HttpStatus httpStatus) {
        super(message);
        this.errorCode = errorCode;
        this.httpStatus = httpStatus;
        this.details = null;
    }

    public HttpStatus getHttpStatusOrDefault() {
        return this.httpStatus != null ? this.httpStatus : HttpStatus.INTERNAL_SERVER_ERROR;
    }

}

```

## src/main/java/com/nubo/definitive/assignment/api/exception/error/ErrorCode.java

```java
package com.nubo.definitive.assignment.api.exception.error;

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
    SIDE_NOT_FOUND("Side not found"),
    TRADE_NOT_FOUND("Trade not found"),
    USER_NOT_FOUND("User not found"),
    USER_TYPE_ERROR("User type must be internal or external type"),
    SIDE_CANNOT_REPEATED("Side cannot be repeated"),
    TRADE_CANNOT_REPEATED("Trade cannot be repeated"),
    ERROR_DESERIALIZER_JSON("Error Deserializer Json"),
    ERROR_KAFKA_CONSUMER_NUBO("Error Consumer Kafka Nubo"),
    ERROR_KAFKA_PRODUCER_NUBO("Error Producer Kafka Nubo"),
    ERROR_DATA_RANGE_SETTLEMENT_RV_REPORT("Error Data Range Settlement RV Report is not valid"),
    PARTICIPANT_NOT_FOUND("Participant not found"),
    STATUS_NOT_FOUND("Status not found"),
    COUNT_FILE_GENERATE_EXCEEDED("Count file generate exceeded"),
    NOT_DATA_FOUND("No data found for the given date range"),
    CURRENCY_NOT_FOUND("Currency not found"),
    CLIENT_BUSINESSDAY_CALCULATION_ERROR("An unexpected error occurred in Business Calculation"),
    CLIENT_OPERATION_FRACTIONAL_ERROR("An unexpected error occurred in Operation Fractionation"),
    BUSINESS_RULE_FINAL_ASSIGNMENT_ERROR("Final assignment business rule validation failed"),
    CLIENT_OPERATION_RULES_ERROR("An unexpected error occurred in Operation Rules"),
    CLIENT_OPERATION_CUSTODY_ACTIONS_ERROR("An unexpected error occurred in Operation Custody Actions"),
    EXCHANGE_RATE_NOT_FOUND("Exchange rate not found");

    private final String message;

    ErrorCode(String message) {
        this.message = message;
    }

    public String getName() {
        return this.name();
    }

}

```

## src/main/java/com/nubo/definitive/assignment/api/exception/error/ErrorResponse.java

```java
package com.nubo.definitive.assignment.api.exception.error;

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

## src/main/java/com/nubo/definitive/assignment/api/exception/error/ErrorValidation.java

```java
package com.nubo.definitive.assignment.api.exception.error;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ErrorValidation {

    private String id;
    private String description;

}

```

## src/main/java/com/nubo/definitive/assignment/api/exception/handler/GlobalExceptionHandler.java

```java
package com.nubo.definitive.assignment.api.exception.handler;

import com.nubo.definitive.assignment.api.application.properties.PropertiesContext;
import com.nubo.definitive.assignment.api.exception.ServiceException;
import com.nubo.definitive.assignment.api.exception.error.ErrorCode;
import com.nubo.definitive.assignment.api.exception.error.ErrorResponse;
import com.nubo.definitive.assignment.api.exception.error.ErrorValidation;
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
                        exception.getMessage():exception.getCause().getMessage())
                .timestamp(ObjectUtils.isEmpty(String.valueOf(PropertiesContext.getClientDatetime())) ? null:
                        String.valueOf(PropertiesContext.getClientDatetime()))
                .errorDetails(errorDetails)
                .build();

        log.error("Error -> {}", errorResponse);

        return ResponseEntity.status(status).body(errorResponse);
    }

}
```

## src/main/java/com/nubo/definitive/assignment/api/helpers/MapperUtil.java

```java
package com.nubo.definitive.assignment.api.helpers;

import com.nubo.definitive.assignment.api.client.kafka.model.dto.request.CountryInDto;
import com.nubo.definitive.assignment.api.client.kafka.model.dto.request.DepositoryInDto;
import com.nubo.definitive.assignment.api.client.kafka.model.dto.request.DirectDepositoryInDto;
import com.nubo.definitive.assignment.api.client.kafka.model.dto.request.FinalAssignmentFractionInDto;
import com.nubo.definitive.assignment.api.client.kafka.model.dto.request.InvestorAccountInDto;
import com.nubo.definitive.assignment.api.client.kafka.model.dto.request.InvestorInDto;
import com.nubo.definitive.assignment.api.client.kafka.model.dto.request.ParticipantAccountInDto;
import com.nubo.definitive.assignment.api.client.kafka.model.dto.request.ParticipantBankAccountInDto;
import com.nubo.definitive.assignment.api.client.kafka.model.dto.request.ParticipantInDto;
import com.nubo.definitive.assignment.api.client.kafka.model.dto.request.SideInDto;
import com.nubo.definitive.assignment.api.client.kafka.model.dto.request.TypeInDto;
import com.nubo.definitive.assignment.api.models.entity.CountryEntity;
import com.nubo.definitive.assignment.api.models.entity.DepositoryEntity;
import com.nubo.definitive.assignment.api.models.entity.DirectDepositoryEntity;
import com.nubo.definitive.assignment.api.models.entity.InvestorAccountEntity;
import com.nubo.definitive.assignment.api.models.entity.InvestorEntity;
import com.nubo.definitive.assignment.api.models.entity.ParticipantAccountEntity;
import com.nubo.definitive.assignment.api.models.entity.ParticipantBankAccountEntity;
import com.nubo.definitive.assignment.api.models.entity.ParticipantEntity;
import com.nubo.definitive.assignment.api.models.entity.SettlementEntity;
import com.nubo.definitive.assignment.api.models.entity.TypeEntity;
import org.springframework.util.ObjectUtils;

public class MapperUtil {

    private MapperUtil() {
    }

    public static TypeInDto typeEntityToTypeInDto(TypeEntity typeEntity) {
        if (ObjectUtils.isEmpty(typeEntity))
            return null;
        return TypeInDto.builder()
                .id(typeEntity.getId())
                .description(typeEntity.getDescription())
                .category(typeEntity.getCategory())
                .build();
    }

    public static CountryInDto countryEntityToCountryInDto(CountryEntity countryEntity) {
        if (ObjectUtils.isEmpty(countryEntity))
            return null;
        return CountryInDto.builder()
                .id(countryEntity.getId())
                .code(countryEntity.getCode())
                .name(countryEntity.getName())
                .build();
    }

    public static DepositoryInDto depositoryEntityToDepositoryInDto(DepositoryEntity depositoryEntity) {
        if (ObjectUtils.isEmpty(depositoryEntity))
            return null;
        return DepositoryInDto.builder()
                .id(depositoryEntity.getId())
                .description(depositoryEntity.getDescription())
                .build();
    }

    public static InvestorInDto investorEntityToInvestorInDto(InvestorEntity investorEntity) {
        if (ObjectUtils.isEmpty(investorEntity))
            return null;
        return InvestorInDto.builder()
                .id(investorEntity.getId())
                .code(investorEntity.getCode())
                .firstName(investorEntity.getFirstName())
                .lastName(investorEntity.getLastName())
                .companyName(investorEntity.getCompanyName())
                .documentNumber(investorEntity.getDocumentNumber())
                .identificationTypeCode(investorEntity.getIdentificationType() != null
                        ? investorEntity.getIdentificationType().getCode()
                        : null)
                .build();
    }

    public static InvestorAccountInDto investorAccountEntityToInvestorAccountInDto(
            InvestorAccountEntity investorAccountEntity) {
        if (ObjectUtils.isEmpty(investorAccountEntity))
            return null;
        return InvestorAccountInDto.builder()
                .id(investorAccountEntity.getId())
                .investor(investorEntityToInvestorInDto(investorAccountEntity.getInvestor()))
                .accountNumber(investorAccountEntity.getAccountNumber())
                .build();
    }

    public static ParticipantInDto participantEntityToParticipantInDto(ParticipantEntity participantEntity) {
        if (ObjectUtils.isEmpty(participantEntity))
            return null;
        return ParticipantInDto.builder()
                .id(participantEntity.getId())
                .code(participantEntity.getCode())
                .name(participantEntity.getName())
                .build();
    }

    public static ParticipantAccountInDto participantAccountEntityToParticipantAccountInDto(
            ParticipantAccountEntity participantAccountEntity) {
        if (ObjectUtils.isEmpty(participantAccountEntity))
            return null;
        return ParticipantAccountInDto.builder()
                .id(participantAccountEntity.getId())
                .participant(participantEntityToParticipantInDto(participantAccountEntity.getParticipant()))
                .accountNumber(participantAccountEntity.getAccountNumber())
                .build();
    }

    public static ParticipantBankAccountInDto participantBankAccountEntityToParticipantBankAccountInDto(
            ParticipantBankAccountEntity participantBankAccountEntity) {
        if (ObjectUtils.isEmpty(participantBankAccountEntity))
            return null;
        return ParticipantBankAccountInDto.builder()
                .id(participantBankAccountEntity.getId())
                .bankAccount(participantBankAccountEntity.getBankAccount())
                .principal(participantBankAccountEntity.getPrincipal())
                .build();
    }






    public static FinalAssignmentFractionInDto settlementEntityToFinalAssignmentFractionInDto(
            SettlementEntity settlementEntity) {
        if (ObjectUtils.isEmpty(settlementEntity))
            return null;
        return FinalAssignmentFractionInDto.builder()
                .side(SideInDto.builder()
                        .id(settlementEntity.getSide().getId())
                        .name(settlementEntity.getSide().getDescription())
                        .build())
                .fraction(settlementEntity.getFraction())
                .quantity(settlementEntity.getFractionQuantity())
                .investorAccount(investorAccountEntityToInvestorAccountInDto(settlementEntity.getInvestorAccount()))
                .participantAccount(
                        participantAccountEntityToParticipantAccountInDto(settlementEntity.getParticipantAccount()))
                .investor(investorEntityToInvestorInDto(settlementEntity.getInvestor()))
                .participantBankAccount(participantBankAccountEntityToParticipantBankAccountInDto(
                        settlementEntity.getParticipantBankAccount()))
                .cashAccount(settlementEntity.getCashAccount())
                .custodian(participantEntityToParticipantInDto(settlementEntity.getCustodian()))
                .ficAdministrator(participantEntityToParticipantInDto(settlementEntity.getFicAdministrator()))
                .directDepositor(
                        directDepositoryEntityToDirectDepositoryInDto(settlementEntity.getDirectDepositor()))
                .reference(settlementEntity.getReference())
                .build();
    }

    public static DirectDepositoryInDto directDepositoryEntityToDirectDepositoryInDto(
            DirectDepositoryEntity directDepositoryEntity) {
        if (ObjectUtils.isEmpty(directDepositoryEntity))
            return null;
        return DirectDepositoryInDto.builder()
                .id(directDepositoryEntity.getId())
                .participantId(directDepositoryEntity.getParticipantId())
                .depositoryId(directDepositoryEntity.getDepositoryId())
                .directDepositoryNumber(directDepositoryEntity.getDirectDepositoryNumber())
                .build();
    }

}

```

## src/main/java/com/nubo/definitive/assignment/api/models/dto/response/AutomaticAssignmentProcessResponseDto.java

```java
package com.nubo.definitive.assignment.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class AutomaticAssignmentProcessResponseDto {

    private String processName;

    private String status;

    private String message;

    private LocalDateTime executionDate;

}
```

## src/main/java/com/nubo/definitive/assignment/api/models/dto/response/CountryOutDto.java

```java
package com.nubo.definitive.assignment.api.models.dto.response;

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

## src/main/java/com/nubo/definitive/assignment/api/models/dto/response/CurrencyOutDto.java

```java
package com.nubo.definitive.assignment.api.models.dto.response;

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

## src/main/java/com/nubo/definitive/assignment/api/models/dto/response/PageResponseOutDto.java

```java
package com.nubo.definitive.assignment.api.models.dto.response;

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
@JsonInclude(JsonInclude.Include.ALWAYS)
public class PageResponseOutDto<T> {

    private List<T> content;

    private Integer pageSize;

    private Integer pageNumber;

    private Long totalElements;

    private Integer totalPages;

}
```

## src/main/java/com/nubo/definitive/assignment/api/models/dto/response/StatusOutDto.java

```java
package com.nubo.definitive.assignment.api.models.dto.response;

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

## src/main/java/com/nubo/definitive/assignment/api/models/entity/AfpFundEntity.java

```java
package com.nubo.definitive.assignment.api.models.entity;

import java.time.LocalDate;

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

@Entity
@Builder
@Table(name = "\"AFP_FUND\"", schema = "\"NUANBODB\"")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AfpFundEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"AFP_FUND_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"AFP_FUND_CODE\"", length = 10)
    private String code;

    @Column(name = "\"DESCRIPTION\"", length = 80)
    private String description;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 36)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 30)
    private String lastModifyApplic;

    @Column(name = "\"LAST_MODIFY_DATE\"")
    private LocalDate lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 30)
    private String lastModifyIp;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        AfpFundEntity that = (AfpFundEntity) o;
        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/definitive/assignment/api/models/entity/BankAccountEntity.java

```java
package com.nubo.definitive.assignment.api.models.entity;

import java.time.LocalDate;

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
@Table(name = "\"BANK_ACCOUNT\"", schema = "\"NUANBODB\"")
public class BankAccountEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"BANK_ACCOUNT_ID\"", nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "\"BANK_ID\"")
    private BankEntity bank;

    @ManyToOne
    @JoinColumn(name = "\"INVESTOR_ID\"")
    private InvestorEntity investor;

    @Column(name = "\"BANK_ACCOUNT\"", length = 30)
    private String bankAccount;

    @Column(name = "\"SAVING_ACCOUNT\"")
    private Boolean savingAccount;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 36)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 30)
    private String lastModifyApplic;

    @Column(name = "\"LAST_MODIFY_DATE\"")
    private LocalDate lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 30)
    private String lastModifyIp;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        BankAccountEntity that = (BankAccountEntity) o;
        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/definitive/assignment/api/models/entity/BankEntity.java

```java
package com.nubo.definitive.assignment.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "\"BANK\"", schema = "\"NUANBODB\"")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BankEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"BANK_ID\"", nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "\"COUNTRY_ID\"", nullable = false)
    private CountryEntity country;

    @Column(name = "\"BANK_NAME\"", length = 80, nullable = false)
    private String name;

    @Column(name = "\"BANK_CODE\"", length = 10, nullable = false)
    private String code;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 36)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 30)
    private String lastModifyApplic;

    @Column(name = "\"LAST_MODIFY_DATE\"")
    private java.time.LocalDate lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 30)
    private String lastModifyIp;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        BankEntity that = (BankEntity) o;
        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/definitive/assignment/api/models/entity/CfiEntity.java

```java
package com.nubo.definitive.assignment.api.models.entity;

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
        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/definitive/assignment/api/models/entity/ClassEntity.java

```java
package com.nubo.definitive.assignment.api.models.entity;

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
        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

}

```

## src/main/java/com/nubo/definitive/assignment/api/models/entity/CountryEntity.java

```java
package com.nubo.definitive.assignment.api.models.entity;

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
    @Column(name = "\"COUNTRY_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"CODE\"", length = 2)
    private String code;

    @Column(name = "\"NAME\"", length = 80)
    private String name;

    @Column(name = "\"TIME_ZONE\"", length = 30)
    private String timeZone;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        CountryEntity that = (CountryEntity) o;
        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

}

```

## src/main/java/com/nubo/definitive/assignment/api/models/entity/CurrencyEntity.java

```java
package com.nubo.definitive.assignment.api.models.entity;

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
        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

}

```

## src/main/java/com/nubo/definitive/assignment/api/models/entity/DepositoryEntity.java

```java
package com.nubo.definitive.assignment.api.models.entity;

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
@Table(name = "\"DEPOSITORY\"", schema = "\"NUANBODB\"")
public class DepositoryEntity {

    @Id
    @Column(name = "\"DEPOSITORY_ID\"", length = 2)
    private String id;

    @Column(name = "\"DESCRIPTION\"", length = 80, nullable = false)
    private String description;

    @Column(name = "\"CODE\"", length = 80)
    private String code;

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
        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

}

```

## src/main/java/com/nubo/definitive/assignment/api/models/entity/DirectDepositoryEntity.java

```java
package com.nubo.definitive.assignment.api.models.entity;

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
@Table(name = "\"DIRECT_DEPOSITORY\"", schema = "\"NUANBODB\"")
public class DirectDepositoryEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"DIRECT_DEPOSITORY_ID\"")
    private Long id;

    @Column(name = "\"PARTICIPANT_ID\"")
    private Long participantId;

    @Column(name = "\"DEPOSITORY_ID\"", length = 2)
    private String depositoryId;

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

## src/main/java/com/nubo/definitive/assignment/api/models/entity/ExchangeRateEntity.java

```java
package com.nubo.definitive.assignment.api.models.entity;

import java.math.BigDecimal;
import java.time.LocalDate;

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

@Entity
@Builder
@Table(name = "\"EXCHANGE_RATE\"", schema = "\"NUANBODB\"")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ExchangeRateEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"EXCHANGE_RATE_ID\"", nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "\"BASE_CURRENCY\"", nullable = false)
    private CurrencyEntity baseCurrency;

    @ManyToOne
    @JoinColumn(name = "\"CONVERSION_CURRENCY\"", nullable = false)
    private CurrencyEntity conversionCurrency;

    @Column(name = "\"VALIDITY_DATE\"", nullable = false)
    private LocalDate validityDate;

    @Column(name = "\"CONVERSION_VALUE\"", precision = 16, scale = 8)
    private BigDecimal conversionValue;

    @Column(name = "\"RECORD_DATE\"")
    private LocalDate recordDate;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 36)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 30)
    private String lastModifyApplic;

    @Column(name = "\"LAST_MODIFY_DATE\"")
    private LocalDate lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 30)
    private String lastModifyIp;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        ExchangeRateEntity that = (ExchangeRateEntity) o;
        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/definitive/assignment/api/models/entity/FicAdministratorEntity.java

```java
package com.nubo.definitive.assignment.api.models.entity;

import java.time.LocalDate;

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

@Entity
@Builder
@Table(name = "\"FIC_ADMINISTRATOR\"", schema = "\"NUANBODB\"")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class FicAdministratorEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"FIC_ADMINISTRATOR_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"FIC_ADMINISTRATOR_CODE\"", length = 10)
    private String ficAdministratorCode;

    @Column(name = "\"DESCRIPTION\"", length = 80)
    private String description;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 36)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 30)
    private String lastModifyApplic;

    @Column(name = "\"LAST_MODIFY_DATE\"")
    private LocalDate lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 30)
    private String lastModifyIp;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        FicAdministratorEntity that = (FicAdministratorEntity) o;
        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/definitive/assignment/api/models/entity/GicsEntity.java

```java
package com.nubo.definitive.assignment.api.models.entity;

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

    @Column(name = "\"DESCRIPTION\"", length = 100)
    private String description;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 36)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 30)
    private String lastModifyApplic;

    @Column(name = "\"LAST_MODIFY_DATE\"")
    private java.time.LocalDate lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 30)
    private String lastModifyIp;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        GicsEntity that = (GicsEntity) o;
        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/definitive/assignment/api/models/entity/HolidayEntity.java

```java
package com.nubo.definitive.assignment.api.models.entity;

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
    @Column(name = "\"HOLIDAY_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"HOLIDAY_DATE\"", nullable = false)
    private LocalDate holidayDate;

    @ManyToOne
    @JoinColumn(name = "\"COUNTRY_ID\"", nullable = false)
    private CountryEntity country;

    @Column(name = "\"DESCRIPTION\"", length = 500)
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
        HolidayEntity that = (HolidayEntity) o;
        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

}

```

## src/main/java/com/nubo/definitive/assignment/api/models/entity/IdentificationTypeEntity.java

```java
package com.nubo.definitive.assignment.api.models.entity;

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
@Table(name = "\"IDENTIFICATION_TYPE\"", schema = "\"NUANBODB\"")
public class IdentificationTypeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"IDENTIFICATION_TYPE_ID\"", nullable = false)
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

    @Column(name = "\"CODE\"", length = 3, nullable = false)
    private String code;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        IdentificationTypeEntity that = (IdentificationTypeEntity) o;
        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

}

```

## src/main/java/com/nubo/definitive/assignment/api/models/entity/InvestorAccountEntity.java

```java
package com.nubo.definitive.assignment.api.models.entity;

import java.time.LocalDate;

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
    @JoinColumn(name = "\"STATUS_ID\"", nullable = false)
    private StatusEntity status;

    @ManyToOne
    @JoinColumn(name = "\"TYPE_ID\"", nullable = false)
    private TypeEntity type;

    @ManyToOne
    @JoinColumn(name = "\"DEPOSITORY_ID\"", nullable = false)
    private DepositoryEntity depository;

    @ManyToOne
    @JoinColumn(name = "\"PARTICIPANT_ID\"")
    private ParticipantEntity participant;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 36)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 30)
    private String lastModifyApplic;

    @Column(name = "\"LAST_MODIFY_DATE\"")
    private LocalDate lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 30)
    private String lastModifyIp;

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

## src/main/java/com/nubo/definitive/assignment/api/models/entity/InvestorEntity.java

```java
package com.nubo.definitive.assignment.api.models.entity;

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
    @JoinColumn(name = "\"TYPE_ID\"")
    private TypeEntity type;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"", nullable = false)
    private StatusEntity status;

    @ManyToOne
    @JoinColumn(name = "\"COUNTRY_ID\"", nullable = false)
    private CountryEntity country;

    @Column(name = "\"DEPARTMENT_ID\"", length = 10)
    private String departmentId;

    @Column(name = "\"CITY_ID\"", length = 20)
    private Integer cityId;

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
    @JoinColumn(name = "\"GICS_ID\"")
    private GicsEntity gics;

    @Column(name = "\"MONEY_LAUNDERING_FLAG\"")
    private Boolean moneyLaunderingFlag;

    @ManyToOne
    @JoinColumn(name = "\"TAX_STATUS_ID\"")
    private TaxStatusEntity taxStatus;

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
        InvestorEntity that = (InvestorEntity) o;
        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

}

```

## src/main/java/com/nubo/definitive/assignment/api/models/entity/MarketEntity.java

```java
package com.nubo.definitive.assignment.api.models.entity;

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
@Table(name = "\"MARKET\"", schema = "\"NUANBODB\"")
public class MarketEntity {

    @Id
    @Column(name = "\"MARKET_ID\"", length = 2)
    private String id;

    @Column(name = "\"DESCRIPTION\"", length = 80, nullable = false)
    private String description;

    @Column(name = "\"CATEGORY\"", length = 50, nullable = false)
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
        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

}

```

## src/main/java/com/nubo/definitive/assignment/api/models/entity/PackageCustodianEntity.java

```java
package com.nubo.definitive.assignment.api.models.entity;

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
import java.time.LocalDateTime;
import java.util.Objects;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"PACKAGE_CUSTODIAN\"", schema = "\"NUANBODB\"")
public class PackageCustodianEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"PACKAGE_CUSTODIAN_ID\"", nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "\"MARKET_ID\"")
    private MarketEntity market;

    @Column(name = "\"CODE_SCB\"")
    private String codeScb;

    @Column(name = "\"PACKAGE_NUMBER\"")
    private String packageNumber;

    @Column(name = "\"PACKAGE_DATE\"")
    private LocalDate packageDate;

    @Column(name = "\"PARTICIPANT_CODE\"")
    private String participantCode;

    @Column(name = "\"SEQUENCE\"")
    private Long sequence;

    @ManyToOne
    @JoinColumn(name = "\"PACKAGE_STATUS_ID\"")
    private StatusEntity packageStatus;

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
        PackageCustodianEntity that = (PackageCustodianEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}
```

## src/main/java/com/nubo/definitive/assignment/api/models/entity/PackageDetailEntity.java

```java
package com.nubo.definitive.assignment.api.models.entity;

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

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Objects;

@Getter
@Setter
@Builder
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
    private String market;

    @Id
    @Column(name = "\"PACKAGE_DATE\"", nullable = false)
    private LocalDate packageDate;

    @Id
    @Column(name = "\"TRADE_ID\"", nullable = false)
    private Long tradeId;

    @Id
    @Column(name = "\"SIDE_ID\"", nullable = false)
    private String sideId;

    @Id
    @Column(name = "\"FRACTION\"", nullable = false)
    private Integer fraction;

    @Column(name = "\"PARTICIPANT_CODE\"")
    private String participantCode;

    @Column(name = "\"SEQUENCE\"")
    private Long sequence;

    @Column(name = "\"PACKAGE_NUMBER\"")
    private String packageNumber;

    @Column(name = "\"MATCH_DATE\"")
    private LocalDate matchDate;

    @Column(name = "\"UNIQUE_FRACTION_ID\"")
    private Long uniqueFractionId;

    @Column(name = "\"INVESTOR_ID\"")
    private Long investorId;

    @Column(name = "\"CUSTODIAN_ID\"")
    private Long custodianId;

    @Column(name = "\"PARTICIPANT_ID\"")
    private Long participantId;

    @ManyToOne
    @JoinColumn(name = "\"PACKAGE_STATUS_ID\"")
    private StatusEntity packageStatus;

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
        PackageDetailEntity that = (PackageDetailEntity) o;
        return Objects.equals(packageCustodianId, that.packageCustodianId)
                && Objects.equals(market, that.market)
                && Objects.equals(packageDate, that.packageDate)
                && Objects.equals(tradeId, that.tradeId)
                && Objects.equals(sideId, that.sideId)
                && Objects.equals(fraction, that.fraction);
    }

    @Override
    public int hashCode() {
        return Objects.hash(packageCustodianId, market, packageDate, tradeId, sideId, fraction);
    }
}
```

## src/main/java/com/nubo/definitive/assignment/api/models/entity/PackageDetailKey.java

```java
package com.nubo.definitive.assignment.api.models.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.time.LocalDate;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PackageDetailKey implements Serializable {

    private Long packageCustodianId;

    private String market;

    private LocalDate packageDate;

    private Long tradeId;

    private String sideId;

    private Integer fraction;

}
```

## src/main/java/com/nubo/definitive/assignment/api/models/entity/ParticipantAccountEntity.java

```java
package com.nubo.definitive.assignment.api.models.entity;

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

    @ManyToOne
    @JoinColumn(name = "\"DEPOSITORY_ID\"")
    private DepositoryEntity depository;

    @Column(name = "\"ACCOUNT_NUMBER\"")
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

    @Column(name = "\"IND_RESIDUAL\"")
    private Boolean indResidual;

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

## src/main/java/com/nubo/definitive/assignment/api/models/entity/ParticipantBankAccountEntity.java

```java
package com.nubo.definitive.assignment.api.models.entity;

import java.time.LocalDateTime;

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
@Table(name = "\"PARTICIPANT_BANK_ACCOUNT\"", schema = "\"NUANBODB\"")
public class ParticipantBankAccountEntity {

    @Id
    @Column(name = "\"PARTICIPANT_BANK_ACCOUNT_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"BANK_ID\"", nullable = false)
    private Long bankId;

    @ManyToOne(optional = false)
    @JoinColumn(name = "\"PARTICIPANT_ID\"", nullable = false)
    private ParticipantEntity participant;

    @Column(name = "\"BANK_ACCOUNT\"", length = 30)
    private String bankAccount;

    @Column(name = "\"PRINCIPAL\"")
    private Boolean principal;

    @Column(name = "\"BANK_BRANCH\"")
    private Long bankBranch;

    @Column(name = "\"ENTITY_CODE\"", length = 6)
    private String entityCode;

    @Column(name = "\"SWIFT_CODE\"")
    private Integer swiftCode;

    @Column(name = "\"BRANCH_CODE\"", length = 20)
    private String branchCode;

    @Column(name = "\"PORTFOLIO\"", length = 20)
    private String portfolio;

    @Column(name = "\"NIT_CLEARING_ENTITY\"", length = 10)
    private String nitClearingEntity;

    @Column(name = "\"DEPOSITORY_ID\"", length = 2)
    private String depositoryId;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"")
    private StatusEntity status;

    @ManyToOne
    @JoinColumn(name = "\"TYPE_ID\"")
    private TypeEntity type;

    @ManyToOne
    @JoinColumn(name = "\"COUNTRY_ID\"")
    private CountryEntity country;

    @ManyToOne
    @JoinColumn(name = "\"CURRENCY_ID\"")
    private CurrencyEntity currency;

    @ManyToOne
    @JoinColumn(name = "\"CONCEPT_TYPE_ID\"")
    private TypeEntity conceptType;

    @ManyToOne
    @JoinColumn(name = "\"ORIGIN_TYPE_ID\"")
    private TypeEntity originType;

    @Column(name = "\"CONCEPT\"", length = 30)
    private String concept;

    @Column(name = "\"TYPE_ACCOUNT\"")
    private Integer typeAccount;

    @Column(name = "\"LAST_MODIFY_USER\"", nullable = false, length = 250)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", nullable = false, length = 250)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", nullable = false, length = 50)
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

## src/main/java/com/nubo/definitive/assignment/api/models/entity/ParticipantEntity.java

```java
package com.nubo.definitive.assignment.api.models.entity;

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

    @Column(name = "\"CODE\"", nullable = false)
    private String code;

    @ManyToOne
    @JoinColumn(name = "\"IDENTIFICATION_TYPE_ID\"", nullable = false)
    private IdentificationTypeEntity identificationType;

    @Column(name = "\"DOCUMENT_NUMBER\"", length = 20, nullable = false)
    private String documentNumber;

    @Column(name = "\"NAME\"", nullable = false)
    private String name;

    @Column(name = "\"SHORT_NAME\"", nullable = false)
    private String shortName;

    @Column(name = "\"TYPE_ID\"", nullable = false)
    private String typeId;

    @Column(name = "\"MNEMONIC\"", nullable = false)
    private String mnemonic;

    @ManyToOne
    @JoinColumn(name = "\"COUNTRY_ID\"", nullable = false)
    private CountryEntity country;

    @Column(name = "\"REGISTRATION_DATE\"", nullable = false)
    private LocalDate registrationDate;

    @Column(name = "\"TAX_CODE\"", nullable = false)
    private String taxCode;

    @Column(name = "\"DEPARTMENT_ID\"", nullable = false)
    private String departmentId;

    @Column(name = "\"MAIN_ADDRESS\"", nullable = false)
    private String mainAddress;

    @Column(name = "\"WEB_PAGE\"", nullable = false)
    private String webPage;

    @Column(name = "\"PHONE_NUMBER\"", nullable = false)
    private String phoneNumber;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"", nullable = false)
    private StatusEntity status;

    @Column(name = "\"NIT_CLEARING_HOUSE\"", nullable = false)
    private String nitClearingHouse;

    @ManyToOne
    @JoinColumn(name = "\"TAX_STATUS_ID\"", nullable = false)
    private TaxStatusEntity taxStatus;

    @Column(name = "\"TYPE_ENTITY\"", length = 1, nullable = false)
    private String typeEntity;

    @Column(name = "\"MARGIN_ACCOUNT\"", length = 1, nullable = false)
    private String marginAccount;

    @Column(name = "\"MASTER_ACCOUNT\"", length = 1, nullable = false)
    private String masterAccount;

    @Column(name = "\"DIRECT_ALLOCATION\"", length = 1, nullable = false)
    private String directAllocation;

    @Column(name = "\"MARKET_MAKER\"", length = 1, nullable = false)
    private String marketMaker;

    @Column(name = "\"ENABLED\"", nullable = false)
    private Boolean enabled;

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

## src/main/java/com/nubo/definitive/assignment/api/models/entity/SecurityTitleEntity.java

```java
package com.nubo.definitive.assignment.api.models.entity;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.time.LocalDate;
import java.time.LocalDateTime;

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

    @Column(name = "\"ISSUER_ID\"", nullable = false)
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

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        SecurityTitleEntity that = (SecurityTitleEntity) o;
        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

}

```

## src/main/java/com/nubo/definitive/assignment/api/models/entity/SettlementEntity.java

```java
package com.nubo.definitive.assignment.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.domain.Persistable;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@IdClass(SettlementKey.class)
@Table(name = "\"SETTLEMENT\"", schema = "\"NUANBODB\"")
public class SettlementEntity implements Persistable<SettlementKey> {

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

    @ManyToOne
    @JoinColumn(name = "\"BANK_ACCOUNT_ID\"", nullable = false)
    private BankAccountEntity bankAccount;

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

    @ManyToOne
    @JoinColumn(name = "\"DIRECT_DEPOSITOR\"")
    private DirectDepositoryEntity directDepositor;

    @Column(name = "\"REFERENCE\"", length = 255)
    private String reference;

    @Column(name = "\"SETTLEMENT_AMOUNT\"", precision = 16, scale = 4)
    private BigDecimal settlementAmount;

    @Column(name = "\"CAPITAL_GAIN_VALUE\"", precision = 16, scale = 4)
    private BigDecimal capitalGainValue;

    @Column(name = "\"DISBURSEMENT_VALUE\"", precision = 18, scale = 4)
    private BigDecimal disbursementValue;

    @ManyToOne
    @JoinColumn(name = "\"SOURCE_QUOTE_TYPE_ID\"", nullable = false)
    private TypeEntity sourceQuoteType;

    @ManyToOne
    @JoinColumn(name = "\"FIC_ADMINISTRATOR_ID\"")
    private ParticipantEntity ficAdministrator;

    @Column(name = "\"CASH_ACCOUNT\"", precision = 20, scale = 0)
    private BigDecimal cashAccount;

    @Column(name = "\"IND_MASTER\"")
    private Boolean indMaster;

    @ManyToOne
    @JoinColumn(name = "\"CUSTODIAN_STATUS_ID\"")
    private StatusEntity custodianStatus;

    @ManyToOne
    @JoinColumn(name = "\"SETTLEMENT_STATUS_ID\"")
    private StatusEntity settlementStatus;

    @Column(name = "\"REJECTION_REASON\"", length = 250, nullable = false)
    private String rejectionReason;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 30, nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 30, nullable = false)
    private String lastModifyIp;

    @ManyToOne
    @JoinColumn(name = "\"PARTICIPANT_BANK_ACCOUNT_ID\"")
    private ParticipantBankAccountEntity participantBankAccount;

    @ManyToOne
    @JoinColumn(name = "\"BLOQUING_STATUS_ID\"")
    private StatusEntity bloquingStatus;

    @ManyToOne
    @JoinColumn(name = "\"AFP_FUND_ID\"")
    private AfpFundEntity afpFund;

    @Column(name = "\"FRACTION_VOLUME_DVD\"", precision = 16, scale = 4)
    private BigDecimal fractionVolumeDvd;

    @Column(name = "\"FRACTION_VOLUME_DVP\"", precision = 16, scale = 4)
    private BigDecimal fractionVolumeDvp;

    @Column(name = "\"FRACTION_VOLUME_LP\"", precision = 16, scale = 4)
    private BigDecimal fractionVolumeLp;

    @Column(name = "\"FRACTION_VOLUME_LOCAL_PRICE\"", precision = 16, scale = 4)
    private BigDecimal fractionVolumeLocalPrice;

    @Column(name = "\"REPO_RATE\"", precision = 16, scale = 4)
    private BigDecimal repoRate;

    @Column(name = "\"LATE_PENALITY\"", precision = 16, scale = 4)
    private BigDecimal latePenality;

    @ManyToOne
    @JoinColumn(name = "\"MARKET_ID\"", nullable = false)
    private MarketEntity market;

    @Column(name = "\"MATCH_DATE\"", nullable = false)
    private LocalDate matchDate;

    @Column(name = "\"UNIQUE_FRACTION_ID\"", nullable = false)
    private Long uniqueFractionId;

    @Override
    @Transient
    public SettlementKey getId() {
        if (trade == null || trade.getId() == null || fraction == null || side == null || side.getId() == null) {
            return null;
        }

        return SettlementKey.builder()
                .trade(trade.getId())
                .fraction(fraction)
                .side(side.getId())
                .build();
    }

    @Override
    @Transient
    public boolean isNew() {
        return false;
    }

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

## src/main/java/com/nubo/definitive/assignment/api/models/entity/SettlementKey.java

```java
package com.nubo.definitive.assignment.api.models.entity;

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

## src/main/java/com/nubo/definitive/assignment/api/models/entity/SideEntity.java

```java
package com.nubo.definitive.assignment.api.models.entity;

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

## src/main/java/com/nubo/definitive/assignment/api/models/entity/StatusEntity.java

```java
package com.nubo.definitive.assignment.api.models.entity;

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

    @Column(name = "\"DETAIL\"", length = 255, nullable = false)
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

## src/main/java/com/nubo/definitive/assignment/api/models/entity/TaxStatusEntity.java

```java
package com.nubo.definitive.assignment.api.models.entity;

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

    @Column(name = "\"DESCRIPTION\"", length = 100)
    private String description;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 36)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 30)
    private String lastModifyApplic;

    @Column(name = "\"LAST_MODIFY_DATE\"")
    private java.time.LocalDate lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 30)
    private String lastModifyIp;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        TaxStatusEntity that = (TaxStatusEntity) o;
        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/definitive/assignment/api/models/entity/TradeEntity.java

```java
package com.nubo.definitive.assignment.api.models.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

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
    @JoinColumn(name = "\"MARKET_ID\"", nullable = false)
    private MarketEntity market;

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

    @Column(name = "\"RETURN_INDICATOR_SETTLEMENT\"", nullable = false)
    private Boolean returnIndicatorSettlement;

    @Column(name = "\"SETTLEMENT_INDICATOR_OUTGOING\"", nullable = false)
    private Boolean settlementIndicatorOutgoing;

    @Column(name = "\"SETTLEMENT_INDICATOR_RETURN\"", nullable = false)
    private Boolean settlementIndicatorReturn;

    @Column(name = "\"RESETTLEMENT_INDICATOR_ADVANCE\"", nullable = false)
    private Boolean settlementIndicatorAdvance;

    @Column(name = "\"SALES_GUARANTEE\"", nullable = false)
    private Integer salesGuarantee;

    @Column(name = "\"PURCHASE_GUARANTEE\"", nullable = false)
    private Integer purchaseGuarantee;

    @Column(name = "\"PURCHASE_PAYMENT_INDICATOR\"", nullable = false)
    private Boolean purchasePaymentIndicator;

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
    @JoinColumn(name = "\"SOURCE_QUOTE_BUY_TYPE\"")
    private TypeEntity sourceQuoteBuyType;

    @ManyToOne
    @JoinColumn(name = "\"SOURCE_QUOTE_SELL_TYPE\"")
    private TypeEntity sourceQuoteSellType;

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
    @JoinColumn(name = "\"TRADING_SESSION_ID\"", nullable = false)
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
    @JoinColumn(name = "\"ISSUANCE_MARKET_ID\"")
    private MarketEntity issuanceMarket;

    @Column(name = "\"LOCAL_CURRENCY_PRICE\"", precision = 12, scale = 6)
    private BigDecimal localCurrencyPrice;

    @ManyToOne
    @JoinColumn(name = "\"DEPOSITORY_ID_BUY\"", nullable = true)
    private DepositoryEntity depositoryBuy;

    @ManyToOne
    @JoinColumn(name = "\"DEPOSITORY_ID_SELL\"", nullable = true)
    private DepositoryEntity depositorySell;

    @ManyToOne
    @JoinColumn(name = "\"SELL_STATUS_ID\"")
    private StatusEntity sellStatus;

    @ManyToOne
    @JoinColumn(name = "\"BUY_STATUS_ID\"")
    private StatusEntity buyStatus;

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

## src/main/java/com/nubo/definitive/assignment/api/models/entity/TradeEquityEntity.java

```java
package com.nubo.definitive.assignment.api.models.entity;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.Objects;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MapsId;
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
    @Column(name = "\"TRADE_ID\"")
    private Long tradeId;

    @ManyToOne
    @MapsId
    @JoinColumn(name = "\"TRADE_ID\"")
    private TradeEntity trade;

    @Column(name = "\"FOREIGN_BROKER_BUY\"", nullable = false)
    private String foreignBrokerBuy;

    @Column(name = "\"FOREIGN_BROKER_SELL\"", nullable = false)
    private String foreignBrokerSell;

    @Column(name = "\"DIRECT_DEPOSITOR_BUY\"", nullable = false)
    private Integer directDepositorBuy;

    @Column(name = "\"DIRECT_DEPOSITOR_SELL\"", nullable = false)
    private Integer directDepositorSell;

    @Column(name = "\"SOURCE_INDICATOR_BUY\"", nullable = false)
    private Integer sourceIndicatorBuy;

    @Column(name = "\"SOURCE_INDICATOR_SELL\"", nullable = false)
    private Integer sourceIndicatorSell;

    @Column(name = "\"RESPONSIBLE_TRADE_BUY\"", nullable = false)
    private Integer responsibleTradeBuy;

    @Column(name = "\"RESPONSIBLE_TRADE_SELL\"", nullable = false)
    private Integer responsibleTradeSell;

    @Column(name = "\"REFERENCE_BUY\"", length = 30, nullable = false)
    private String referenceBuy;

    @Column(name = "\"REFERENCE_SELL\"", length = 30, nullable = false)
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
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50, nullable = false)
    private String lastModifyIp;

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

## src/main/java/com/nubo/definitive/assignment/api/models/entity/TradeStatusHistoryEntity.java

```java
package com.nubo.definitive.assignment.api.models.entity;

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
@IdClass(TradeStatusHistoryKey.class)
@Table(name = "\"TRADE_STATUS_HISTORY\"", schema = "\"NUANBODB\"")
public class TradeStatusHistoryEntity {

    @Id
    @ManyToOne
    @JoinColumn(name = "\"TRADE_ID\"", nullable = false)
    private TradeEntity trade;

    @Id
    @Column(name = "\"TIME\"", nullable = false)
    private LocalDateTime time;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"", nullable = false)
    private StatusEntity status;

    @ManyToOne
    @JoinColumn(name = "\"SIDE_ID\"")
    private SideEntity side;

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
        TradeStatusHistoryEntity that = (TradeStatusHistoryEntity) o;
        return java.util.Objects.equals(trade, that.trade) &&
                java.util.Objects.equals(time, that.time);
    }

    @Override
    public int hashCode() {
        return java.util.Objects.hash(trade, time);
    }
}

```

## src/main/java/com/nubo/definitive/assignment/api/models/entity/TradeStatusHistoryKey.java

```java
package com.nubo.definitive.assignment.api.models.entity;

import java.io.Serializable;
import java.time.LocalDateTime;

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

    private LocalDateTime time;

}

```

## src/main/java/com/nubo/definitive/assignment/api/models/entity/TradingSessionEntity.java

```java
package com.nubo.definitive.assignment.api.models.entity;

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
@Table(name = "\"TRADING_SESSION\"", schema = "\"NUANBODB\"")
public class TradingSessionEntity {

    @Id
    @Column(name = "\"TRADING_SESSION_ID\"", length = 2, nullable = false)
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
        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

}

```

## src/main/java/com/nubo/definitive/assignment/api/models/entity/TradingSystemEntity.java

```java
package com.nubo.definitive.assignment.api.models.entity;

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
    @Column(name = "\"TRADING_SYSTEM_ID\"", nullable = false)
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
        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

}

```

## src/main/java/com/nubo/definitive/assignment/api/models/entity/TypeEntity.java

```java
package com.nubo.definitive.assignment.api.models.entity;

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

## src/main/java/com/nubo/definitive/assignment/api/models/enums/AssignModeEnum.java

```java
package com.nubo.definitive.assignment.api.models.enums;

public enum AssignModeEnum {

    INICIAL,
    FINAL

}

```

## src/main/java/com/nubo/definitive/assignment/api/models/enums/BankAccountTypeEnum.java

```java
package com.nubo.definitive.assignment.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum BankAccountTypeEnum {

    ORIGIN_CUENTA_CUD("CUENTA CUD", "CUENTA CUD"),
    CONCEPT_COMPENSACION("COMPENSACION", "CONCEPTO_CUENTA");

    private final String description;
    private final String category;
}
```

## src/main/java/com/nubo/definitive/assignment/api/models/enums/BusinessRuleEnum.java

```java
package com.nubo.definitive.assignment.api.models.enums;

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
    RULE_OPERATION_CORRECTION_ALLOWED_DAYS("RULE_OPERATION_CORRECTION_ALLOWED_DAYS"),
    RULE_OPERATION_CORRECTION_CUSTODIAN("RULE_OPERATION_CORRECTION_CUSTODIAN"),
    RULE_OPERATION_CORRECTION_SPECIAL_FIDUCIARY("RULE_OPERATION_CORRECTION_SPECIAL_FIDUCIARY"),
    RULE_OPERATION_CORRECTION_MAXIMUM_FRACTION_LIMIT("RULE_OPERATION_CORRECTION_MAXIMUM_FRACTION_LIMIT"),
    RULE_OPERATION_ASSIGNMENT_MAXIMUM_FRACTION_LIMIT("RULE_OPERATION_ASSIGNMENT_MAXIMUM_FRACTION_LIMIT"),
    RULE_ASSIGNMENT("RULE_ASSIGNMENT"),
    RULE_REASSIGNMENT_BY_FRACTION_CUSTODIAN("RULE_REASSIGNMENT_BY_FRACTION_CUSTODIAN"),
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

## src/main/java/com/nubo/definitive/assignment/api/models/enums/CountryCodeEnum.java

```java
package com.nubo.definitive.assignment.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum CountryCodeEnum {

    COLOMBIA("CO"),
    PERU("PE"),
    CHILE("CL");

    private final String code;
}

```

## src/main/java/com/nubo/definitive/assignment/api/models/enums/CustodianStatusEnum.java

```java
package com.nubo.definitive.assignment.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum CustodianStatusEnum {

    TRANSFERRED("TRASLADADA", "CUSTODIO"),
    PRE_MATCH("PRE-MATCH", "CUSTODIO"),
    ADMITTED("ADMITIDA", "CUSTODIO"),
    REJECTED("RECHAZADA", "CUSTODIO");

    private final String description;
    private final String category;
}


```

## src/main/java/com/nubo/definitive/assignment/api/models/enums/DepositoryEnum.java

```java
package com.nubo.definitive.assignment.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum DepositoryEnum {

    DVL("1", "DVL", "DVL");

    private final String id;
    private final String description;
    private final String code;
}
```

## src/main/java/com/nubo/definitive/assignment/api/models/enums/FractionOperationTypeEnum.java

```java
package com.nubo.definitive.assignment.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

/**
 * {@code operationType} del batch de fraccionamiento. {@code A} equivale al endpoint
 * {@code /create-fractions/trade/{tradeId}/side/{sideId}}.
 */
@Getter
@RequiredArgsConstructor
public enum FractionOperationTypeEnum {

    ASSIGNMENT("A");

    private final String value;
}

```

## src/main/java/com/nubo/definitive/assignment/api/models/enums/MarketTypeEnum.java

```java
package com.nubo.definitive.assignment.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum MarketTypeEnum {

    EQUITY("RENTA VARIABLE", "TIPO_ACTIVO"),
    FIXED_INCOME("RENTA FIJA", "TIPO_ACTIVO");

    private final String description;
    private final String category;
}
```

## src/main/java/com/nubo/definitive/assignment/api/models/enums/PropertiesEnum.java

```java
package com.nubo.definitive.assignment.api.models.enums;

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
    CLIENT_BACKEND("client_backend"),
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
            return status!=null ? status.getValue():null;
        }

        @Override
        public PropertiesEnum convertToEntityAttribute(String dbData) {
            return dbData!=null ? PropertiesEnum.fromValue(dbData):null;
        }
    }

}
```

## src/main/java/com/nubo/definitive/assignment/api/models/enums/SideEnum.java

```java
package com.nubo.definitive.assignment.api.models.enums;

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

## src/main/java/com/nubo/definitive/assignment/api/models/enums/SourceQuotePositionEnum.java

```java
package com.nubo.definitive.assignment.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum SourceQuotePositionEnum {

    OWN_POSITION("POSICION PROPIA", "ORIGEN PUNTA"),
    THIRD_PARTY("TERCEROS", "ORIGEN PUNTA"),
    COLLECTIVE_PORTFOLIO("CARTERA COLECTIVA", "ORIGEN PUNTA");

    private final String description;
    private final String category;
}

```

## src/main/java/com/nubo/definitive/assignment/api/models/enums/SourceQuoteTypeEnum.java

```java
package com.nubo.definitive.assignment.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum SourceQuoteTypeEnum {

SELF(121L, "POSICION PROPIA", "ORIGEN PUNTA");

    private final Long id;
    private final String description;
    private final String category;
}

```

## src/main/java/com/nubo/definitive/assignment/api/models/enums/StatusEnum.java

```java
package com.nubo.definitive.assignment.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum StatusEnum {

    // ASIGNACIÓN
    REGISTERED("REGISTRADA", "REGISTRO_OPERACION"),
    ASSIGNED("ASIGNADA", "ASIGNACION"),
    SENT("ENVIADA", "ASIGNACION"),
    ACCEPTED("ACEPTADA", "ASIGNACION"),
    REJECTED("RECHAZADA", "ASIGNACION");

    private final String description;
    private final String category;
}

```

## src/main/java/com/nubo/definitive/assignment/api/models/enums/TradeTypeEnum.java

```java
package com.nubo.definitive.assignment.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum TradeTypeEnum {

    CONTADO("CONTADO", "OPERACIÓN"),
    REPO("REPO", "OPERACIÓN");

    private final String description;
    private final String category;
}
```

## src/main/java/com/nubo/definitive/assignment/api/models/enums/VersionApiEnum.java

```java
package com.nubo.definitive.assignment.api.models.enums;

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
            return status!=null ? status.getValue():null;
        }

        @Override
        public VersionApiEnum convertToEntityAttribute(String dbData) {
            return dbData!=null ? VersionApiEnum.fromValue(dbData):null;
        }
    }

}

```

## src/main/java/com/nubo/definitive/assignment/api/repository/CountryRepository.java

```java
package com.nubo.definitive.assignment.api.repository;

import com.nubo.definitive.assignment.api.models.entity.CountryEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CountryRepository extends JpaRepository<CountryEntity, Long> {

    Optional<CountryEntity> findByCode(String code);

}

```

## src/main/java/com/nubo/definitive/assignment/api/repository/DepositoryRepository.java

```java
package com.nubo.definitive.assignment.api.repository;

import com.nubo.definitive.assignment.api.models.entity.DepositoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface DepositoryRepository extends JpaRepository<DepositoryEntity, String> {

    Optional<DepositoryEntity> findByDescriptionAndCode(String description, String code);
}
```

## src/main/java/com/nubo/definitive/assignment/api/repository/DirectDepositoryRepository.java

```java
package com.nubo.definitive.assignment.api.repository;

import com.nubo.definitive.assignment.api.models.entity.DirectDepositoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

public interface DirectDepositoryRepository extends JpaRepository<DirectDepositoryEntity, Long> {

    Optional<DirectDepositoryEntity> findFirstByParticipantId(Long participantId);

    List<DirectDepositoryEntity> findByParticipantIdIn(Collection<Long> participantIds);

}

```

## src/main/java/com/nubo/definitive/assignment/api/repository/MarketRepository.java

```java
package com.nubo.definitive.assignment.api.repository;

import com.nubo.definitive.assignment.api.models.entity.MarketEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MarketRepository extends JpaRepository<MarketEntity, String> {

    Optional<MarketEntity> findByDescriptionAndCategory(String description, String category);
}
```

## src/main/java/com/nubo/definitive/assignment/api/repository/PackageCustodianRepository.java

```java
package com.nubo.definitive.assignment.api.repository;

import com.nubo.definitive.assignment.api.models.entity.PackageCustodianEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PackageCustodianRepository extends JpaRepository<PackageCustodianEntity, Long> {
}
```

## src/main/java/com/nubo/definitive/assignment/api/repository/PackageDetailRepository.java

```java
package com.nubo.definitive.assignment.api.repository;

import com.nubo.definitive.assignment.api.models.entity.PackageDetailEntity;
import com.nubo.definitive.assignment.api.models.entity.PackageDetailKey;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

public interface PackageDetailRepository extends JpaRepository<PackageDetailEntity, PackageDetailKey> {

    Optional<PackageDetailEntity> findByTradeIdAndSideIdAndFraction(
            Long tradeId,
            String sideId,
            Integer fraction
    );

    List<PackageDetailEntity> findByTradeIdIn(Collection<Long> tradeIds);

}

```

## src/main/java/com/nubo/definitive/assignment/api/repository/ParticipantAccountRepository.java

```java
package com.nubo.definitive.assignment.api.repository;

import com.nubo.definitive.assignment.api.models.entity.ParticipantAccountEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

public interface ParticipantAccountRepository extends JpaRepository<ParticipantAccountEntity, Long> {

    Optional<ParticipantAccountEntity> findFirstByParticipantIdAndOriginType_IdOrderByIdAsc(Long participantId, Long originTypeId);

    Optional<ParticipantAccountEntity>
    findFirstByParticipantIdAndIndResidualTrueOrderByIdAsc(Long participantId);

    Optional<ParticipantAccountEntity> findFirstByParticipantIdAndOriginType_IdAndDepository_IdOrderByIdAsc(
            Long participantId, Long originTypeId, String depositoryId);

    List<ParticipantAccountEntity> findByParticipant_IdInAndIndResidualTrue(Collection<Long> participantIds);

    List<ParticipantAccountEntity> findByParticipant_IdInAndOriginType_IdInAndDepository_Id(
            Collection<Long> participantIds, Collection<Long> originTypeIds, String depositoryId);

}

```

## src/main/java/com/nubo/definitive/assignment/api/repository/ParticipantBankAccountRepository.java

```java
package com.nubo.definitive.assignment.api.repository;

import com.nubo.definitive.assignment.api.models.entity.ParticipantBankAccountEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

public interface ParticipantBankAccountRepository extends JpaRepository<ParticipantBankAccountEntity, Long> {

    Optional<ParticipantBankAccountEntity> findFirstByOriginType_IdAndConceptType_IdAndParticipant_IdOrderByIdAsc(
            Long originTypeId,
            Long conceptTypeId,
            Long participantId
    );

    List<ParticipantBankAccountEntity> findByOriginType_IdAndConceptType_IdAndParticipant_IdIn(
            Long originTypeId,
            Long conceptTypeId,
            Collection<Long> participantIds
    );
}

```

## src/main/java/com/nubo/definitive/assignment/api/repository/SettlementRepository.java

```java
package com.nubo.definitive.assignment.api.repository;

import com.nubo.definitive.assignment.api.models.entity.SettlementEntity;
import com.nubo.definitive.assignment.api.models.entity.SettlementKey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.util.Collection;
import java.util.List;

public interface SettlementRepository extends JpaRepository<SettlementEntity, SettlementKey> {

    void deleteByTradeIdAndSideId(Long tradeId, String sideId);

    @Query("""
        SELECT s
        FROM SettlementEntity s
        WHERE s.status.id = :registeredStatusId
    """)
    List<SettlementEntity> findRegisteredSides(Long registeredStatusId);

    @Query("""
        SELECT s
        FROM SettlementEntity s
        WHERE s.status.id = :assignedStatusId
          AND s.trade.matchDate = :executionDate
          AND EXISTS (
              SELECT 1
              FROM SettlementEntity sf
              WHERE sf.trade = s.trade
                AND sf.side = s.side
                AND sf.custodianStatus.id IN :custodianStatusIds
          )
    """)
    List<SettlementEntity> findAssignedWithCustodianMovementForExecutionDate(
            Long assignedStatusId,
            Collection<Long> custodianStatusIds,
            LocalDate executionDate
    );

    @Query("""
        SELECT s
        FROM SettlementEntity s
        WHERE s.status.id = :rejectedCcpStatusId
    """)
    List<SettlementEntity> findRejectedCcpSides(Long rejectedCcpStatusId);

    List<SettlementEntity> findByTrade_IdAndSide_Id(Long tradeId, String sideId);

    List<SettlementEntity> findByTradeId(Long tradeId);

    @Query("""
        SELECT s
        FROM SettlementEntity s
        WHERE s.trade.id IN :tradeIds
    """)
    List<SettlementEntity> findByTradeIdIn(Collection<Long> tradeIds);

}

```

## src/main/java/com/nubo/definitive/assignment/api/repository/SideRepository.java

```java
package com.nubo.definitive.assignment.api.repository;

import com.nubo.definitive.assignment.api.models.entity.SideEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SideRepository extends JpaRepository<SideEntity, String> {
}

```

## src/main/java/com/nubo/definitive/assignment/api/repository/StatusRepository.java

```java
package com.nubo.definitive.assignment.api.repository;

import com.nubo.definitive.assignment.api.models.entity.StatusEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

public interface StatusRepository extends JpaRepository<StatusEntity, Long> {

    Optional<StatusEntity> findByDescriptionAndCategory(
            String description,
            String category
    );

    List<StatusEntity> findByDescriptionInAndCategory(
            Collection<String> descriptions,
            String category
    );

}

```

## src/main/java/com/nubo/definitive/assignment/api/repository/TradeEquityRepository.java

```java
package com.nubo.definitive.assignment.api.repository;

import com.nubo.definitive.assignment.api.models.entity.TradeEntity;
import com.nubo.definitive.assignment.api.models.entity.TradeEquityEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

public interface TradeEquityRepository extends JpaRepository<TradeEquityEntity, Long> {

    Optional<TradeEquityEntity> findByTrade(TradeEntity trade);

    List<TradeEquityEntity> findByTradeIn(Collection<TradeEntity> trades);
}
```

## src/main/java/com/nubo/definitive/assignment/api/repository/TradeRepository.java

```java
package com.nubo.definitive.assignment.api.repository;

import com.nubo.definitive.assignment.api.models.entity.TradeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.util.List;

public interface TradeRepository extends JpaRepository<TradeEntity, Long> {

    @Query("""
        SELECT t
        FROM TradeEntity t
        WHERE t.buyStatus.id = :registeredStatusId
          AND t.sellStatus.id = :registeredStatusId
          AND t.clearingDate = :executionDate
    """)
    List<TradeEntity> findRegisteredTradesForExecutionDate(
            Long registeredStatusId,
            LocalDate executionDate
    );

    @Query("""
    SELECT t
    FROM TradeEntity t
    WHERE t.buyStatus.id = :registeredStatusId
      AND t.clearingDate = :executionDate
      AND t.type.id = :typeId
      AND t.market.id = :marketId
""")
    List<TradeEntity> findRegisteredBuyTradesForExecutionDateAndType(
            Long registeredStatusId,
            LocalDate executionDate,
            Long typeId,
            String marketId
    );

    @Query("""
    SELECT t
    FROM TradeEntity t
    WHERE t.sellStatus.id = :registeredStatusId
      AND t.clearingDate = :executionDate
      AND t.type.id = :typeId
      AND t.market.id = :marketId
""")
    List<TradeEntity> findRegisteredSellTradesForExecutionDateAndType(
            Long registeredStatusId,
            LocalDate executionDate,
            Long typeId,
            String marketId
    );

    @Query("""
    SELECT t
    FROM TradeEntity t
    WHERE t.buyStatus.id = :assignedStatusId
      AND t.clearingDate = :executionDate
      AND t.type.id = :typeId
      AND t.market.id = :marketId
""")
    List<TradeEntity> findAssignedBuyTradesForExecutionDateAndType(
            Long assignedStatusId,
            LocalDate executionDate,
            Long typeId,
            String marketId
    );

    @Query("""
    SELECT t
    FROM TradeEntity t
    WHERE t.sellStatus.id = :assignedStatusId
      AND t.clearingDate = :executionDate
      AND t.type.id = :typeId
      AND t.market.id = :marketId
""")
    List<TradeEntity> findAssignedSellTradesForExecutionDateAndType(
            Long assignedStatusId,
            LocalDate executionDate,
            Long typeId,
            String marketId
    );

    @Query("""
        SELECT t
        FROM TradeEntity t
        WHERE t.buyStatus.id = :rejectedCcpStatusId
          AND t.sellStatus.id = :rejectedCcpStatusId
          AND t.clearingDate = :executionDate
    """)
    List<TradeEntity> findRejectedCcpTradesForExecutionDate(
            Long rejectedCcpStatusId,
            LocalDate executionDate
    );

    @Query("""
    SELECT t
    FROM TradeEntity t
    WHERE t.buyStatus.id = :rejectedStatusId
      AND t.clearingDate = :executionDate
      AND t.type.id = :typeId
      AND t.market.id = :marketId
""")
    List<TradeEntity> findRejectedBuyTradesForExecutionDateAndType(
            Long rejectedStatusId,
            LocalDate executionDate,
            Long typeId,
            String marketId
    );

    @Query("""
    SELECT t
    FROM TradeEntity t
    WHERE t.sellStatus.id = :rejectedStatusId
      AND t.clearingDate = :executionDate
      AND t.type.id = :typeId
      AND t.market.id = :marketId
""")
    List<TradeEntity> findRejectedSellTradesForExecutionDateAndType(
            Long rejectedStatusId,
            LocalDate executionDate,
            Long typeId,
            String marketId
    );

    List<TradeEntity> findByCountryIdAndClearingDate(
            Long countryId,
            LocalDate clearingDate
    );

    List<TradeEntity> findByCountryIdAndClearingDateAndMarketId(
            Long countryId,
            LocalDate clearingDate,
            String marketId
    );

    @Query("""
        SELECT t.id
        FROM TradeEntity t
        WHERE t.country.id = :countryId
          AND t.clearingDate = :clearingDate
          AND t.market.id = :marketId
        ORDER BY t.id
    """)
    List<Long> findIdsByCountryIdAndClearingDateAndMarketId(
            Long countryId,
            LocalDate clearingDate,
            String marketId
    );


}

```

## src/main/java/com/nubo/definitive/assignment/api/repository/TradeStatusHistoryRepository.java

```java
package com.nubo.definitive.assignment.api.repository;

import com.nubo.definitive.assignment.api.models.entity.TradeStatusHistoryEntity;
import com.nubo.definitive.assignment.api.models.entity.TradeStatusHistoryKey;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TradeStatusHistoryRepository
        extends JpaRepository<TradeStatusHistoryEntity, TradeStatusHistoryKey> {
}

```

## src/main/java/com/nubo/definitive/assignment/api/repository/TypeRepository.java

```java
package com.nubo.definitive.assignment.api.repository;

import com.nubo.definitive.assignment.api.models.entity.TypeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TypeRepository extends JpaRepository<TypeEntity, Long> {

    Optional<TypeEntity> findByDescriptionAndCategory(String description, String category);
}

```

## src/main/java/com/nubo/definitive/assignment/api/service/AutomaticDefinitiveAssignmentService.java

```java
package com.nubo.definitive.assignment.api.service;

import com.nubo.definitive.assignment.api.client.kafka.model.dto.request.FinalAssignmentInDto;
import com.nubo.definitive.assignment.api.models.dto.response.AutomaticAssignmentProcessResponseDto;
import com.nubo.definitive.assignment.api.models.enums.AssignModeEnum;

import java.util.List;

public interface AutomaticDefinitiveAssignmentService {

    List<FinalAssignmentInDto> executeAutomaticDefinitiveAssignment();

    List<FinalAssignmentInDto> executeAutomaticFinalDefinitiveAssignment(); // Final run

    // SCENERY 1: REGISTERED SIDES
    void processRegisteredSides(Long countryId);

    // SCENERY 2:  ASSIGN SIDES WITH CUSTODIAN STATU TRASLADADA o PRE-MATCH
    void processAssignedSidesWithCustodianMovement(Long countryId);

    // SCENERY 2.1:  ASSIGN SIDES WITH CUSTODIAN STATUS REJECTED
    void processAssignedSidesWithRejectedCustodianStatus (Long countryId);

    //SCENERY 3: REJECTED CCP SIDES
    void processRejectedCcpSides(Long countryId, AssignModeEnum mode);

    //SCENERY 4: SEND KAFKA MESSAGE
    List<FinalAssignmentInDto> sendFinalAssignmentMessages(Long countryId);


}

```

## src/main/java/com/nubo/definitive/assignment/api/service/CatalogCacheService.java

```java
package com.nubo.definitive.assignment.api.service;

import java.util.Optional;

import com.nubo.definitive.assignment.api.models.entity.CountryEntity;
import com.nubo.definitive.assignment.api.models.entity.DepositoryEntity;
import com.nubo.definitive.assignment.api.models.entity.MarketEntity;
import com.nubo.definitive.assignment.api.models.entity.TypeEntity;

public interface CatalogCacheService {

    Optional<CountryEntity> findCountryByCode(String code);

    Optional<DepositoryEntity> findDepositoryByDescriptionAndCode(String description, String code);

    Optional<TypeEntity> findTypeByDescriptionAndCategory(String description, String category);

    Optional<MarketEntity> findMarketByDescriptionAndCategory(String description, String category);

}

```

## src/main/java/com/nubo/definitive/assignment/api/service/RejectedFractionsService.java

```java
package com.nubo.definitive.assignment.api.service;

import com.nubo.definitive.assignment.api.models.entity.TradeEntity;
import com.nubo.definitive.assignment.api.models.enums.AssignModeEnum;

public interface RejectedFractionsService {

    void processRejectedFractions(TradeEntity trade, String side, AssignModeEnum mode);
}

```

## src/main/java/com/nubo/definitive/assignment/api/service/impl/AutomaticDefinitiveAssignmentServiceImpl.java

```java
package com.nubo.definitive.assignment.api.service.impl;

import com.nubo.definitive.assignment.api.application.properties.PropertiesConfig;
import com.nubo.definitive.assignment.api.application.util.ProcessTraceContext;
import com.nubo.definitive.assignment.api.client.calculation.service.BusinessDayCalculationClient;
import com.nubo.definitive.assignment.api.client.kafka.model.dto.request.FinalAssignmentInDto;
import com.nubo.definitive.assignment.api.client.kafka.producer.FinalAssignmentBatchPublisher;
import com.nubo.definitive.assignment.api.client.kafka.producer.KafkaDeliveryException;
import com.nubo.definitive.assignment.api.models.entity.StatusEntity;
import com.nubo.definitive.assignment.api.models.entity.TradeEntity;
import com.nubo.definitive.assignment.api.models.enums.AssignModeEnum;
import com.nubo.definitive.assignment.api.models.enums.CountryCodeEnum;
import com.nubo.definitive.assignment.api.models.enums.CustodianStatusEnum;
import com.nubo.definitive.assignment.api.models.enums.MarketTypeEnum;
import com.nubo.definitive.assignment.api.models.enums.SideEnum;
import com.nubo.definitive.assignment.api.models.enums.SourceQuotePositionEnum;
import com.nubo.definitive.assignment.api.models.enums.SourceQuoteTypeEnum;
import com.nubo.definitive.assignment.api.models.enums.StatusEnum;
import com.nubo.definitive.assignment.api.models.enums.TradeTypeEnum;
import com.nubo.definitive.assignment.api.repository.StatusRepository;
import com.nubo.definitive.assignment.api.repository.TradeRepository;
import com.nubo.definitive.assignment.api.service.CatalogCacheService;
import com.nubo.definitive.assignment.api.service.AutomaticDefinitiveAssignmentService;
import com.nubo.definitive.assignment.api.service.RejectedFractionsService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.MDC;
import org.springframework.stereotype.Service;
import org.springframework.util.StopWatch;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class AutomaticDefinitiveAssignmentServiceImpl implements AutomaticDefinitiveAssignmentService {

    private static final String APP_DEFINITIVE_ASSIGNMENT = "definitive-assignment-api";

    private final BusinessDayCalculationClient businessDayCalculationClient;
    private final CatalogCacheService catalogCacheService;
    private final TradeRepository tradeRepository;
    private final StatusRepository statusRepository;
    private final PropertiesConfig propertiesConfig;
    private final RejectedFractionsService rejectedFractionsService;
    private final FinalAssignmentBatchProcessor finalAssignmentBatchProcessor;
    private final RegisteredSidesBatchProcessor registeredSidesBatchProcessor;
    private final CustodianSettlementBatchProcessor custodianSettlementBatchProcessor;

    private List<FinalAssignmentInDto> executeProcess(AssignModeEnum mode) {
        StopWatch stopWatch = new StopWatch("automatic-definitive-assignment");
        long totalStartNanos = System.nanoTime();
        String result = "SUCCESS";
        List<FinalAssignmentInDto> sentMessages = new ArrayList<>();
        List<FinalAssignmentBatchPublisher.FailedRecord> deliveryFailures = new ArrayList<>();
        int countryCount = 0;

        String runId = ProcessTraceContext.newRunId();
        try (MDC.MDCCloseable runIdTrace = ProcessTraceContext.put(ProcessTraceContext.RUN_ID, runId);
             MDC.MDCCloseable modeTrace = ProcessTraceContext.put(ProcessTraceContext.MODE, mode)) {
            log.info("Inicio proceso: Asignación Definitiva Automática | mode={} runId={} thread={} threadId={}",
                    mode, runId, ProcessTraceContext.threadName(), ProcessTraceContext.threadId());
            stopWatch.start("load-configuration");
            List<Long> enabledCountryIds = getEnabledCountryIds();
            stopWatch.stop();
            countryCount = enabledCountryIds.size();

            if (enabledCountryIds.isEmpty()) {
                log.warn("No existen países habilitados");
                return sentMessages;
            }

            for (Long countryId : enabledCountryIds) {
                try (MDC.MDCCloseable countryTrace = ProcessTraceContext.put(ProcessTraceContext.COUNTRY_ID, countryId)) {
                    log.info("Ejecutando escenarios para countryId={} | mode={}", countryId, mode);

                    if (AssignModeEnum.INICIAL.equals(mode)) {
                        runScenario("escenario-2", () -> processAssignedSidesWithCustodianMovement(countryId)); //Escenario 2
                        runScenario("escenario-2.1", () -> processAssignedSidesWithRejectedCustodianStatus(countryId));// Escenario 2.1
                        //processRejectedCcpSides(countryId, mode); // Escenario 3
                        try {
                            runScenario("escenario-4", () -> addMessagesWithCap(sentMessages, sendFinalAssignmentMessages(countryId))); // Esenario 4
                        } catch (KafkaDeliveryException ex) {
                            deliveryFailures.addAll(ex.getFailures());
                        }
                        runScenario("escenario-1", () -> processRegisteredSides(countryId)); // Escenario 1
                    } else if (AssignModeEnum.FINAL.equals(mode)) {
                        runScenario("escenario-3", () -> processRejectedCcpSides(countryId, mode));
                    }
                }
            }

            log.info("Fin proceso | mode={}", mode);
            if (!deliveryFailures.isEmpty()) {
                throw new KafkaDeliveryException(deliveryFailures);
            }
            return sentMessages;
        } catch (RuntimeException | Error ex) {
            result = "ERROR";
            throw ex;
        } finally {
            if (stopWatch.isRunning()) {
                stopWatch.stop();
            }
            log.info("PERF_ASSIGNMENT service=asignacion-definitiva-auto operation=executeProcess mode={} runId={} result={} countryCount={} messageCount={} loadConfigurationMs={} totalMs={}",
                    mode, runId, result, countryCount, sentMessages.size(), taskMillis(stopWatch, "load-configuration"),
                    nanosToMillis(System.nanoTime() - totalStartNanos));
        }
    }

    /**
     * Marca el escenario en el MDC (lo heredan los hilos del pool) y deja traza de inicio/fin con el hilo que lo ejecuta.
     */
    private void runScenario(String scenario, Runnable body) {
        long startNanos = System.nanoTime();
        try (MDC.MDCCloseable scenarioTrace = ProcessTraceContext.put(ProcessTraceContext.SCENARIO, scenario)) {
            log.info("THREAD_TRACE event=scenario-start scenario={} thread={} threadId={}",
                    scenario, ProcessTraceContext.threadName(), ProcessTraceContext.threadId());
            String result = "ERROR";
            try {
                body.run();
                result = "SUCCESS";
            } finally {
                log.info("THREAD_TRACE event=scenario-end scenario={} result={} thread={} threadId={} elapsedMs={}",
                        scenario, result, ProcessTraceContext.threadName(), ProcessTraceContext.threadId(),
                        nanosToMillis(System.nanoTime() - startNanos));
            }
        }
    }

    @Override
    public List<FinalAssignmentInDto> executeAutomaticDefinitiveAssignment() {
        return executeProcess(AssignModeEnum.INICIAL);
    }

    @Override
    public List<FinalAssignmentInDto> executeAutomaticFinalDefinitiveAssignment() {
        return executeProcess(AssignModeEnum.FINAL);
    }

    @Override
    public void processRegisteredSides(Long countryId) {
        log.info("Procesando puntas REGISTERED separadas | countryId={}", countryId);

        StatusEntity registeredStatus = getStatus(StatusEnum.REGISTERED);
        StatusEntity assignedStatus = getStatus(StatusEnum.ASSIGNED);

        Long contadoTypeId = getContadoTypeId();
        String equityMarketId = getEquityMarketId();

        registeredSidesBatchProcessor.process(countryId, registeredStatus.getId(), contadoTypeId, equityMarketId);
    }

    @Override
    public void processAssignedSidesWithCustodianMovement(Long countryId) {

        log.info("Procesando puntas ASSIGNED con custodio movement | countryId={}", countryId);

        StatusEntity assignedStatus = getStatus(StatusEnum.ASSIGNED);
        StatusEntity transferredPackageStatus = getTransferredPackageStatus();

        List<StatusEntity> movementStatuses = getCustodianMovementStatus();
        List<Long> movementStatusIds = movementStatuses.stream()
                .map(StatusEntity::getId)
                .toList();

        LocalDate today = LocalDate.now();
        Long contadoTypeId = getContadoTypeId();
        String equityMarketId = getEquityMarketId();

        CustodianSettlementBatchProcessor.CustodianMovementCatalog catalog =
                new CustodianSettlementBatchProcessor.CustodianMovementCatalog(
                        transferredPackageStatus.getId(), movementStatusIds);

        List<TradeEntity> buyTrades =
                tradeRepository.findAssignedBuyTradesForExecutionDateAndType(
                        assignedStatus.getId(), today, contadoTypeId, equityMarketId
                );

        List<TradeEntity> sellTrades =
                tradeRepository.findAssignedSellTradesForExecutionDateAndType(
                        assignedStatus.getId(), today, contadoTypeId, equityMarketId
                );

        custodianSettlementBatchProcessor.processCustodianMovement(countryId, buyTrades, sellTrades, catalog);

        log.info("Escenario 2 finalizado | countryId={}", countryId);
    }

    @Override
    @Transactional
    public void processAssignedSidesWithRejectedCustodianStatus(Long countryId) {

        log.info("Procesando puntas ASSIGNED con custodio rechazado | countryId={}", countryId);

        StatusEntity assignedStatus = getStatus(StatusEnum.ASSIGNED);
        StatusEntity rejectedCustodianStatus = getRejectedCustodianStatus();

        LocalDate today = LocalDate.now();
        Long contadoTypeId = getContadoTypeId();
        String equityMarketId = getEquityMarketId();

        List<TradeEntity> buyTrades =
                tradeRepository.findAssignedBuyTradesForExecutionDateAndType(
                        assignedStatus.getId(), today, contadoTypeId, equityMarketId
                );

        custodianSettlementBatchProcessor.processRejectedCustodian(countryId, SideEnum.BUY, buyTrades, rejectedCustodianStatus);

        List<TradeEntity> sellTrades =
                tradeRepository.findAssignedSellTradesForExecutionDateAndType(
                        assignedStatus.getId(), today, contadoTypeId, equityMarketId
                );

        custodianSettlementBatchProcessor.processRejectedCustodian(countryId, SideEnum.SELL, sellTrades, rejectedCustodianStatus);

        log.info("Escenario custodio rechazado finalizado | countryId={}", countryId);
    }

    @Override
    @Transactional
    public void processRejectedCcpSides(Long countryId, AssignModeEnum mode) {

        log.info("Procesando puntas REJECTED CCP separadas | countryId={} | mode={}",
                countryId, mode);

        StatusEntity rejectedCcpStatus = getStatus(StatusEnum.REJECTED);
        LocalDate today = LocalDate.now();
        Long contadoTypeId = getContadoTypeId();
        String equityMarketId = getEquityMarketId();

        List<TradeEntity> buyTrades =
                tradeRepository.findRejectedBuyTradesForExecutionDateAndType(
                        rejectedCcpStatus.getId(), today, contadoTypeId, equityMarketId   // <-- agregar param
                );

        for (TradeEntity trade : buyTrades) {

            if (!isValidClearingDate(trade.getClearingDate())) {
                continue;
            }

            try {
                log.info("Procesando BUY REJECTED | tradeId={}", trade.getId());
                rejectedFractionsService.processRejectedFractions(trade, SideEnum.BUY.getValue(), mode);
            } catch (Exception ex) {
                log.error("Error procesando BUY REJECTED | tradeId={} | motivo={}", trade.getId(), ex.getMessage(), ex);
            }
        }

        List<TradeEntity> sellTrades =
                tradeRepository.findRejectedSellTradesForExecutionDateAndType(
                        rejectedCcpStatus.getId(), today, contadoTypeId, equityMarketId   // <-- agregar param
                );

        for (TradeEntity trade : sellTrades) {

            if (!isValidClearingDate(trade.getClearingDate())) {
                continue;
            }

            try {
                log.info("Procesando SELL REJECTED | tradeId={}", trade.getId());
                rejectedFractionsService.processRejectedFractions(trade, SideEnum.SELL.getValue(), mode);
            } catch (Exception ex) {
                log.error("Error procesando SELL REJECTED | tradeId={} | motivo={}", trade.getId(), ex.getMessage(), ex);
            }
        }

        log.info("Escenario 3 finalizado | countryId={}", countryId);
    }

    @Override
    public List<FinalAssignmentInDto> sendFinalAssignmentMessages(Long countryId) {

        log.info("Escenario 4 - Kafka | countryId={}", countryId);

        return finalAssignmentBatchProcessor.process(countryId, getEquityMarketId());
    }

    private Long resolveCountryId(CountryCodeEnum countryCode) {

        return catalogCacheService.findCountryByCode(countryCode.getCode())
                .orElseThrow(() ->
                        new IllegalStateException(
                                "Country not found for code: " + countryCode.getCode()
                        )
                )
                .getId();
    }

    private void validateBusinessDay(Long countryId) {

        log.info("Validando día hábil para countryId={}", countryId);

        var response = businessDayCalculationClient.validBusinessDay(countryId);

        if (response == null || !Boolean.TRUE.equals(response.getIsValidBusinessDay())) {
            throw new IllegalStateException(
                    "Proceso no permitido: día no hábil para countryId " + countryId
            );
        }
    }

    private List<Long> getEnabledCountryIds() {

        List<Long> enabledCountries = new ArrayList<>();

        for (CountryCodeEnum country : CountryCodeEnum.values()) {
            Long countryId = resolveCountryId(country);

            try {
                validateBusinessDay(countryId);
                enabledCountries.add(countryId);
                log.info("País habilitado para proceso automático: {}", country.name());
            } catch (IllegalStateException ex) {
                log.warn("País NO habilitado para proceso automático: {}", country.name());
            }
        }

        return enabledCountries;
    }

    private LocalDate getMatchDateFromTrade(Long tradeId) {

        return tradeRepository.findById(tradeId)
                .orElseThrow(() ->
                        new IllegalStateException(
                                "Trade no encontrado para tradeId=" + tradeId
                        )
                )
                .getMatchDate();
    }

    private boolean isValidClearingDate(LocalDate clearingDate) {

        LocalDate today = LocalDate.now();

        return !clearingDate.isAfter(today);
    }

    private StatusEntity getStatus(StatusEnum statusEnum) {

        return statusRepository
                .findByDescriptionAndCategory(
                        statusEnum.getDescription(),
                        statusEnum.getCategory()
                )
                .orElseThrow(() ->
                        new IllegalStateException(
                                "Estado no encontrado: " + statusEnum.name()
                        )
                );
    }

    private List<StatusEntity> getCustodianMovementStatus() {

        return statusRepository.findByDescriptionInAndCategory(
                List.of(
                        CustodianStatusEnum.TRANSFERRED.getDescription(),
                        CustodianStatusEnum.PRE_MATCH.getDescription()
                ),
                CustodianStatusEnum.TRANSFERRED.getCategory()
        );
    }

    private StatusEntity getRejectedCustodianStatus() {

        return statusRepository.findByDescriptionAndCategory(
                CustodianStatusEnum.REJECTED.getDescription(),
                CustodianStatusEnum.REJECTED.getCategory()
        ).orElseThrow(() ->
                new IllegalStateException("Estado CUSTODIO RECHAZADA no encontrado")
        );
    }

    private StatusEntity getTransferredPackageStatus() {

        return statusRepository.findByDescriptionAndCategory(
                CustodianStatusEnum.TRANSFERRED.getDescription(),
                CustodianStatusEnum.TRANSFERRED.getCategory()
        ).orElseThrow(() ->
                new IllegalStateException("Estado CUSTODIO TRASLADADA no encontrado")
        );
    }

    private Long resolveTypeId(SourceQuoteTypeEnum typeEnum) {

        return catalogCacheService
                .findTypeByDescriptionAndCategory(
                        typeEnum.getDescription(),
                        typeEnum.getCategory()
                )
                .orElseThrow(() ->
                        new IllegalStateException(
                                "TYPE no encontrado para description="
                                        + typeEnum.getDescription()
                                        + " y category="
                                        + typeEnum.getCategory()
                        )
                )
                .getId();
    }

    private Long resolveSourceQuotePositionTypeId(SourceQuotePositionEnum typeEnum) {

        return catalogCacheService
                .findTypeByDescriptionAndCategory(
                        typeEnum.getDescription(),
                        typeEnum.getCategory()
                )
                .orElseThrow(() ->
                        new IllegalStateException(
                                "TYPE no encontrado para description="
                                        + typeEnum.getDescription()
                                        + " y category="
                                        + typeEnum.getCategory()
                        )
                )
                .getId();
    }

    private Long getContadoTypeId() {
        return catalogCacheService
                .findTypeByDescriptionAndCategory(
                        TradeTypeEnum.CONTADO.getDescription(),
                        TradeTypeEnum.CONTADO.getCategory()
                )
                .orElseThrow(() ->
                        new IllegalStateException("TYPE CONTADO no encontrado")
                )
                .getId();
    }

    private String getEquityMarketId() {
        return catalogCacheService
                .findMarketByDescriptionAndCategory(
                        MarketTypeEnum.EQUITY.getDescription(),
                        MarketTypeEnum.EQUITY.getCategory()
                )
                .orElseThrow(() -> new IllegalStateException("MARKET RENTA VARIABLE no encontrado"))
                .getId();
    }

    private void addMessagesWithCap(List<FinalAssignmentInDto> target, List<FinalAssignmentInDto> source) {
        if (source == null || source.isEmpty()) {
            return;
        }
        for (FinalAssignmentInDto dto : source) {
            addMessageWithCap(target, dto);
        }
    }

    private void addMessageWithCap(List<FinalAssignmentInDto> target, FinalAssignmentInDto dto) {
        if (target.size() < propertiesConfig.getMaxResponseMessages()) {
            target.add(dto);
            return;
        }

        if (target.size() == propertiesConfig.getMaxResponseMessages()) {
            log.warn("Se alcanzó el límite de mensajes en respuesta ({}). Se omiten los siguientes para evitar OOM.",
                    propertiesConfig.getMaxResponseMessages());
        }
    }

    private static long taskMillis(StopWatch stopWatch, String taskName) {
        for (StopWatch.TaskInfo task : stopWatch.getTaskInfo()) {
            if (taskName.equals(task.getTaskName())) {
                return task.getTimeMillis();
            }
        }
        return 0L;
    }

    private static long nanosToMillis(long nanos) {
        return nanos / 1_000_000L;
    }
}

```

## src/main/java/com/nubo/definitive/assignment/api/service/impl/CashAccountBatchResolver.java

```java
package com.nubo.definitive.assignment.api.service.impl;

import java.math.BigDecimal;
import java.util.Collection;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.function.Function;
import java.util.stream.Collectors;

import org.springframework.stereotype.Component;

import com.nubo.definitive.assignment.api.models.entity.ParticipantBankAccountEntity;
import com.nubo.definitive.assignment.api.models.enums.BankAccountTypeEnum;
import com.nubo.definitive.assignment.api.repository.ParticipantBankAccountRepository;
import com.nubo.definitive.assignment.api.service.CatalogCacheService;

import lombok.RequiredArgsConstructor;

/**
 * Versión por lotes de {@code resolveCashAccount}: una sola query {@code IN} por chunk de participantes.
 * Conserva la semántica 1 a 1: por participante gana la cuenta de menor id ({@code findFirst...OrderByIdAsc})
 * y los errores (tipo no encontrado, cuenta ausente, número inválido) se lanzan al pedir cada participante.
 */
@Component
@RequiredArgsConstructor
public class CashAccountBatchResolver {

    private static final Comparator<ParticipantBankAccountEntity> LOWEST_ID =
            Comparator.comparing(ParticipantBankAccountEntity::getId, Comparator.nullsLast(Comparator.naturalOrder()));

    private final CatalogCacheService catalogCacheService;
    private final ParticipantBankAccountRepository participantBankAccountRepository;

    public CashAccounts resolve(Collection<Long> participantIds) {
        Long originTypeId;
        Long conceptTypeId;
        try {
            originTypeId = getCuentaCudTypeId();
            conceptTypeId = getCompensacionConceptTypeId();
        } catch (RuntimeException ex) {
            return new CashAccounts(Map.of(), null, null, ex);
        }

        List<Long> ids = participantIds.stream().filter(Objects::nonNull).distinct().toList();
        if (ids.isEmpty()) {
            return new CashAccounts(Map.of(), originTypeId, conceptTypeId, null);
        }

        try {
            Map<Long, ParticipantBankAccountEntity> byParticipant = participantBankAccountRepository
                    .findByOriginType_IdAndConceptType_IdAndParticipant_IdIn(originTypeId, conceptTypeId, ids)
                    .stream()
                    .filter(account -> account.getParticipant() != null && account.getParticipant().getId() != null)
                    .collect(Collectors.toMap(
                            account -> account.getParticipant().getId(),
                            Function.identity(),
                            (a, b) -> LOWEST_ID.compare(a, b) <= 0 ? a : b));

            return new CashAccounts(byParticipant, originTypeId, conceptTypeId, null);
        } catch (RuntimeException ex) {
            return new CashAccounts(Map.of(), originTypeId, conceptTypeId, ex);
        }
    }

    private Long getCuentaCudTypeId() {
        return catalogCacheService
                .findTypeByDescriptionAndCategory(
                        BankAccountTypeEnum.ORIGIN_CUENTA_CUD.getDescription(),
                        BankAccountTypeEnum.ORIGIN_CUENTA_CUD.getCategory()
                )
                .orElseThrow(() -> new IllegalStateException("TYPE CUENTA CUD no encontrado"))
                .getId();
    }

    private Long getCompensacionConceptTypeId() {
        return catalogCacheService
                .findTypeByDescriptionAndCategory(
                        BankAccountTypeEnum.CONCEPT_COMPENSACION.getDescription(),
                        BankAccountTypeEnum.CONCEPT_COMPENSACION.getCategory()
                )
                .orElseThrow(() -> new IllegalStateException("TYPE COMPENSACION no encontrado"))
                .getId();
    }

    public static final class CashAccounts {

        private final Map<Long, ParticipantBankAccountEntity> byParticipant;
        private final Long originTypeId;
        private final Long conceptTypeId;
        private final RuntimeException catalogError;

        private CashAccounts(Map<Long, ParticipantBankAccountEntity> byParticipant,
                             Long originTypeId,
                             Long conceptTypeId,
                             RuntimeException catalogError) {
            this.byParticipant = byParticipant;
            this.originTypeId = originTypeId;
            this.conceptTypeId = conceptTypeId;
            this.catalogError = catalogError;
        }

        public BigDecimal get(Long participantId) {
            if (catalogError != null) {
                throw catalogError;
            }
            ParticipantBankAccountEntity bankAccount = byParticipant.get(participantId);
            if (bankAccount == null) {
                throw new IllegalStateException(
                        "No se encontró PARTICIPANT_BANK_ACCOUNT para participantId=" + participantId
                                + " originTypeId=" + originTypeId
                                + " conceptTypeId=" + conceptTypeId);
            }
            return new BigDecimal(bankAccount.getBankAccount());
        }
    }
}

```

## src/main/java/com/nubo/definitive/assignment/api/service/impl/CatalogCacheServiceImpl.java

```java
package com.nubo.definitive.assignment.api.service.impl;

import java.util.Optional;

import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import com.nubo.definitive.assignment.api.application.config.CacheConfig;
import com.nubo.definitive.assignment.api.models.entity.CountryEntity;
import com.nubo.definitive.assignment.api.models.entity.DepositoryEntity;
import com.nubo.definitive.assignment.api.models.entity.MarketEntity;
import com.nubo.definitive.assignment.api.models.entity.TypeEntity;
import com.nubo.definitive.assignment.api.repository.CountryRepository;
import com.nubo.definitive.assignment.api.repository.DepositoryRepository;
import com.nubo.definitive.assignment.api.repository.MarketRepository;
import com.nubo.definitive.assignment.api.repository.TypeRepository;
import com.nubo.definitive.assignment.api.service.CatalogCacheService;

import lombok.RequiredArgsConstructor;

/**
 * Caché de tablas de catálogo que no cambian (COUNTRY, DEPOSITORY, TYPE, MARKET).
 * Los resultados vacíos no se cachean para no fijar un "no encontrado" durante el TTL.
 */
@Service
@RequiredArgsConstructor
public class CatalogCacheServiceImpl implements CatalogCacheService {

    private final CountryRepository countryRepository;
    private final DepositoryRepository depositoryRepository;
    private final TypeRepository typeRepository;
    private final MarketRepository marketRepository;

    @Override
    @Cacheable(value = CacheConfig.COUNTRIES, key = "#code", unless = "#result == null")
    public Optional<CountryEntity> findCountryByCode(String code) {
        return countryRepository.findByCode(code);
    }

    @Override
    @Cacheable(value = CacheConfig.DEPOSITORIES, key = "#description + '|' + #code", unless = "#result == null")
    public Optional<DepositoryEntity> findDepositoryByDescriptionAndCode(String description, String code) {
        return depositoryRepository.findByDescriptionAndCode(description, code);
    }

    @Override
    @Cacheable(value = CacheConfig.TYPES, key = "#description + '|' + #category", unless = "#result == null")
    public Optional<TypeEntity> findTypeByDescriptionAndCategory(String description, String category) {
        return typeRepository.findByDescriptionAndCategory(description, category);
    }

    @Override
    @Cacheable(value = CacheConfig.MARKETS, key = "#description + '|' + #category", unless = "#result == null")
    public Optional<MarketEntity> findMarketByDescriptionAndCategory(String description, String category) {
        return marketRepository.findByDescriptionAndCategory(description, category);
    }

}

```

## src/main/java/com/nubo/definitive/assignment/api/service/impl/CustodianSettlementBatchProcessor.java

```java
package com.nubo.definitive.assignment.api.service.impl;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.atomic.LongAdder;
import java.util.stream.Collectors;

import org.slf4j.MDC;
import org.springframework.dao.IncorrectResultSizeDataAccessException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.TransactionDefinition;
import org.springframework.transaction.support.TransactionTemplate;

import com.nubo.definitive.assignment.api.application.properties.PropertiesConfig;
import com.nubo.definitive.assignment.api.application.util.ProcessTraceContext;
import com.nubo.definitive.assignment.api.models.entity.ParticipantEntity;
import com.nubo.definitive.assignment.api.models.entity.SettlementEntity;
import com.nubo.definitive.assignment.api.models.entity.StatusEntity;
import com.nubo.definitive.assignment.api.models.entity.TradeEntity;
import com.nubo.definitive.assignment.api.models.enums.SideEnum;
import com.nubo.definitive.assignment.api.repository.SettlementRepository;
import com.nubo.definitive.assignment.api.service.impl.batch.BatchExecutionResult;
import com.nubo.definitive.assignment.api.service.impl.batch.DefinitiveCustodyBatchExecutor;
import com.nubo.definitive.assignment.api.service.impl.batch.DefinitiveCustodyBatchPlanner;

import jakarta.persistence.EntityManager;
import lombok.extern.slf4j.Slf4j;

/**
 * Escenarios 2 (custodio en movimiento) y 2.1 (custodio rechazado) por lotes.
 *
 * <p>El escenario 2 prepara el plan completo y ejecuta sus chunks batch secuencialmente. El escenario 2.1 conserva
 * su procesamiento local por lotes y no utiliza el cliente de rechazo batch.</p>
 */
@Service
@Slf4j
public class CustodianSettlementBatchProcessor {

    private static final String SYSTEM_USER = "SYSTEM";
    private static final String SYSTEM_IP = "IP_01";
    private static final String APP_AUTO_DEFINITIVE_ASSIGNMENT = "auto-definitive-assignment-api";

    private final SettlementRepository settlementRepository;
    private final CashAccountBatchResolver cashAccountBatchResolver;
    private final ParallelPartitionRunner partitionRunner;
    private final PropertiesConfig propertiesConfig;
    private final EntityManager entityManager;
    private final TransactionTemplate transactionTemplate;
    private final DefinitiveCustodyBatchPlanner batchPlanner;
    private final DefinitiveCustodyBatchExecutor batchExecutor;

    public CustodianSettlementBatchProcessor(SettlementRepository settlementRepository,
                                             CashAccountBatchResolver cashAccountBatchResolver,
                                             ParallelPartitionRunner partitionRunner,
                                             PropertiesConfig propertiesConfig,
                                             EntityManager entityManager,
                                             PlatformTransactionManager transactionManager,
                                             DefinitiveCustodyBatchPlanner batchPlanner,
                                             DefinitiveCustodyBatchExecutor batchExecutor) {
        this.settlementRepository = settlementRepository;
        this.cashAccountBatchResolver = cashAccountBatchResolver;
        this.partitionRunner = partitionRunner;
        this.propertiesConfig = propertiesConfig;
        this.entityManager = entityManager;
        this.batchPlanner = batchPlanner;
        this.batchExecutor = batchExecutor;

        TransactionTemplate template = new TransactionTemplate(transactionManager);
        template.setPropagationBehavior(TransactionDefinition.PROPAGATION_REQUIRES_NEW);
        template.setTimeout(propertiesConfig.getTransactionTimeoutSeconds());
        this.transactionTemplate = template;
    }

    public record CustodianMovementCatalog(Long transferredPackageStatusId,
                                           List<Long> movementStatusIds) {
    }

    // ------------------------------------------------------------------ Escenario 2

    public BatchExecutionResult processCustodianMovement(Long countryId,
                                                          List<TradeEntity> buyTrades,
                                                          List<TradeEntity> sellTrades,
                                                          CustodianMovementCatalog catalog) {
        log.info("Preparando escenario 2 de custodian movement | countryId={} buyTrades={} sellTrades={}",
                countryId, buyTrades.size(), sellTrades.size());
        var plan = batchPlanner.prepare(buyTrades, sellTrades, catalog.movementStatusIds(),
                catalog.transferredPackageStatusId());
        BatchExecutionResult execution = batchExecutor.execute(plan);
        log.info("Escenario 2 batch finalizado | countryId={} plannedPackages={} excludedPackages={} chunksAttempted={} stopped={} stopReason={}",
                countryId, execution.plannedPackages(), plan.excludedPackages().size(), execution.chunksAttempted(),
                execution.stopped(), execution.stopReason());
        return execution;
    }

    // ------------------------------------------------------------------ Escenario 2.1

    public void processRejectedCustodian(Long countryId,
                                         SideEnum side,
                                         List<TradeEntity> trades,
                                         StatusEntity rejectedCustodianStatus) {
        long totalStartNanos = System.nanoTime();
        Metrics metrics = new Metrics();
        String scenario = "rejected-custodian-" + side.name();
        String result = "SUCCESS";
        try {
            List<TradeEntity> validTrades = trades.stream()
                    .filter(trade -> isValidClearingDate(trade.getClearingDate()))
                    .toList();
            metrics.candidateTrades = validTrades.size();

            forEachChunk(validTrades, (chunkIndex, chunk) ->
                    processRejectedChunk(scenario, side, chunkIndex, chunk, rejectedCustodianStatus, metrics));
        } catch (RuntimeException | Error ex) {
            result = "ERROR";
            throw ex;
        } finally {
            logPerf("processAssignedSidesWithRejectedCustodianStatus", countryId, side, result, metrics, totalStartNanos);
        }
    }

    private void processRejectedChunk(String scenario,
                                      SideEnum side,
                                      int chunkIndex,
                                      List<TradeEntity> chunk,
                                      StatusEntity rejectedCustodianStatus,
                                      Metrics metrics) {
        long chunkStartNanos = System.nanoTime();
        chunk.forEach(trade -> log.info("Procesando {} ASSIGNED custodio rechazado | tradeId={}", side.name(), trade.getId()));

        Map<Long, TradeEntity> tradeById = indexById(chunk);
        CashAccountBatchResolver.CashAccounts cashAccounts =
                cashAccountBatchResolver.resolve(participantIds(chunk, side));

        List<SettlementEntity> modified = new ArrayList<>();
        int[] candidateCount = {0};
        try {
            // Settlements cargados dentro de la transacción: los updates salen por dirty-checking en batch JDBC,
            // sin el SELECT por entidad que haría merge() sobre entidades detached.
            transactionTemplate.executeWithoutResult(status -> {
                modified.clear();
                List<SettlementEntity> candidates = selectSettlements(chunk, side,
                        settlement -> rejectedCustodianStatus.getId().equals(settlement.getCustodianStatus().getId()),
                        "Error procesando " + side.name() + " ASSIGNED custodio rechazado | tradeId={} | motivo={}");
                candidateCount[0] = candidates.size();

                for (SettlementEntity settlement : candidates) {
                    try {
                        BigDecimal cashAccount = cashAccounts.get(
                                participant(tradeById.get(settlement.getTrade().getId()), side).getId());

                        settlement.setCustodianStatus(null);
                        settlement.setCustodian(null);
                        settlement.setFicAdministrator(null);
                        settlement.setCashAccount(cashAccount);
                        settlement.setLastModifyDate(LocalDateTime.now());
                        settlement.setLastModifyUser(SYSTEM_USER);
                        settlement.setLastModifyApplication(APP_AUTO_DEFINITIVE_ASSIGNMENT);
                        settlement.setLastModifyIp(SYSTEM_IP);

                        modified.add(settlement);
                    } catch (Exception exSettlement) {
                        metrics.failureCount.increment();
                        logSettlementError(settlement, exSettlement);
                    }
                }

                if (!modified.isEmpty()) {
                    settlementRepository.saveAll(modified);
                    entityManager.flush();
                }
            });
            metrics.successCount.add(modified.size());
            if (!modified.isEmpty()) {
                metrics.batchSaveCount.increment();
            }
        } catch (RuntimeException batchEx) {
            saveIndividually(modified, metrics, batchEx);
        }
        metrics.candidateSettlements.add(candidateCount[0]);

        log.info("THREAD_TRACE event=chunk scenario={} chunk={} trades={} settlements={} saved={} thread={} threadId={} totalMs={}",
                scenario, chunkIndex, chunk.size(), candidateCount[0], modified.size(), ProcessTraceContext.threadName(),
                ProcessTraceContext.threadId(), nanosToMillis(System.nanoTime() - chunkStartNanos));
    }

    /**
     * Fallback si la transacción del lote falla: cada settlement ya modificado se guarda por separado con
     * {@code save}, como el flujo 1 a 1, para que un registro inválido no bloquee al resto.
     */
    private void saveIndividually(List<SettlementEntity> settlements, Metrics metrics, RuntimeException batchEx) {
        log.warn("Fallo guardado por lote, fallback individual | settlements={} | motivo={}",
                settlements.size(), batchEx.getMessage(), batchEx);
        for (SettlementEntity settlement : settlements) {
            try {
                settlementRepository.save(settlement);
                metrics.successCount.increment();
            } catch (Exception exSettlement) {
                metrics.failureCount.increment();
                logSettlementError(settlement, exSettlement);
            }
        }
    }

    // ------------------------------------------------------------------ comunes

    @FunctionalInterface
    private interface ChunkConsumer {
        void accept(int chunkIndex, List<TradeEntity> chunk);
    }

    private void forEachChunk(List<TradeEntity> trades, ChunkConsumer consumer) {
        int chunkSize = Math.max(1, propertiesConfig.getBatchWriteSize());
        int chunkIndex = 0;
        for (int from = 0; from < trades.size(); from += chunkSize) {
            List<TradeEntity> chunk = trades.subList(from, Math.min(from + chunkSize, trades.size()));
            try (MDC.MDCCloseable ignored = ProcessTraceContext.put(ProcessTraceContext.CHUNK, chunkIndex)) {
                consumer.accept(chunkIndex, chunk);
            }
            chunkIndex++;
        }
    }

    /**
     * Una query {@code IN} por chunk y los mismos filtros del flujo 1 a 1 (side, custodio no nulo, estado),
     * en orden trade → settlement. Un error en un trade se reporta con el mismo mensaje y no afecta al resto.
     */
    private List<SettlementEntity> selectSettlements(List<TradeEntity> chunk,
                                                     SideEnum side,
                                                     java.util.function.Predicate<SettlementEntity> custodianFilter,
                                                     String tradeErrorMessage) {
        Map<Long, List<SettlementEntity>> settlementsByTrade;
        try {
            List<Long> tradeIds = chunk.stream().map(TradeEntity::getId).toList();
            settlementsByTrade = settlementRepository.findByTradeIdIn(tradeIds).stream()
                    .collect(Collectors.groupingBy(settlement -> settlement.getTrade().getId(),
                            LinkedHashMap::new, Collectors.toList()));
        } catch (Exception ex) {
            chunk.forEach(trade -> log.error(tradeErrorMessage, trade.getId(), ex.getMessage(), ex));
            return List.of();
        }

        List<SettlementEntity> candidates = new ArrayList<>();
        for (TradeEntity trade : chunk) {
            try {
                for (SettlementEntity settlement : settlementsByTrade.getOrDefault(trade.getId(), List.of())) {

                    if (!side.getValue().equals(settlement.getSide().getId())) continue;
                    if (settlement.getCustodianStatus() == null) continue;
                    if (!custodianFilter.test(settlement)) continue;

                    candidates.add(settlement);
                }
            } catch (Exception ex) {
                log.error(tradeErrorMessage, trade.getId(), ex.getMessage(), ex);
            }
        }
        return candidates;
    }

    private static Map<Long, TradeEntity> indexById(List<TradeEntity> trades) {
        Map<Long, TradeEntity> byId = new HashMap<>();
        for (TradeEntity trade : trades) {
            byId.putIfAbsent(trade.getId(), trade);
        }
        return byId;
    }

    private static Collection<Long> participantIds(List<TradeEntity> trades, SideEnum side) {
        Set<Long> ids = new LinkedHashSet<>();
        for (TradeEntity trade : trades) {
            ParticipantEntity participant = participant(trade, side);
            if (participant != null && participant.getId() != null) {
                ids.add(participant.getId());
            }
        }
        return ids;
    }

    private static ParticipantEntity participant(TradeEntity trade, SideEnum side) {
        return side == SideEnum.BUY ? trade.getParticipantBuy() : trade.getParticipantSell();
    }

    private static boolean isValidClearingDate(LocalDate clearingDate) {
        return !clearingDate.isAfter(LocalDate.now());
    }

    private static void logSettlementError(SettlementEntity settlement, Exception ex) {
        log.error("Error procesando settlement | tradeId={} | side={} | fraction={} | motivo={}",
                settlement.getTrade().getId(), settlement.getSide().getId(), settlement.getFraction(),
                ex.getMessage(), ex);
    }

    private static void logPerf(String operation, Long countryId, SideEnum side, String result,
                                Metrics metrics, long totalStartNanos) {
        log.info("PERF_ASSIGNMENT service=asignacion-definitiva-auto operation={} countryId={} side={} result={} candidateTrades={} candidateSettlements={} successCount={} failureCount={} restCount={} restTotalMs={} batchSaveCount={} totalMs={}",
                operation, countryId, side.name(), result, metrics.candidateTrades,
                metrics.candidateSettlements.sum(), metrics.successCount.sum(), metrics.failureCount.sum(),
                metrics.restCount.sum(), nanosToMillis(metrics.restNanos.sum()), metrics.batchSaveCount.sum(),
                nanosToMillis(System.nanoTime() - totalStartNanos));
    }

    private static long nanosToMillis(long nanos) {
        return nanos / 1_000_000L;
    }

    private static final class Metrics {
        private int candidateTrades;
        private final LongAdder candidateSettlements = new LongAdder();
        private final LongAdder successCount = new LongAdder();
        private final LongAdder failureCount = new LongAdder();
        private final LongAdder restCount = new LongAdder();
        private final LongAdder restNanos = new LongAdder();
        private final LongAdder batchSaveCount = new LongAdder();
    }
}

```

## src/main/java/com/nubo/definitive/assignment/api/service/impl/FinalAssignmentBatchProcessor.java

```java
package com.nubo.definitive.assignment.api.service.impl;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Comparator;
import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
import java.util.UUID;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.CompletionException;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Executor;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.concurrent.atomic.LongAdder;
import java.util.function.Function;
import java.util.stream.Collectors;

import org.slf4j.MDC;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.TransactionDefinition;
import org.springframework.transaction.support.TransactionTemplate;

import com.nubo.definitive.assignment.api.application.config.FinalAssignmentExecutorConfig;
import com.nubo.definitive.assignment.api.application.properties.PropertiesConfig;
import com.nubo.definitive.assignment.api.application.util.ProcessTraceContext;
import com.nubo.definitive.assignment.api.application.util.TradeStatusHierarchyUtil;
import com.nubo.definitive.assignment.api.client.kafka.model.dto.request.FinalAssignmentInDto;
import com.nubo.definitive.assignment.api.client.kafka.producer.KafkaNuboAdapterProducer;
import com.nubo.definitive.assignment.api.client.rules.models.dto.request.BatchStatusUpdateTradeInDto;
import com.nubo.definitive.assignment.api.client.rules.models.dto.request.BatchStatusUpdateTradeItemInDto;
import com.nubo.definitive.assignment.api.client.rules.models.dto.request.StatusUpdateTradeInDto;
import com.nubo.definitive.assignment.api.client.rules.models.dto.response.BatchStatusUpdateTradeItemOutDto;
import com.nubo.definitive.assignment.api.client.rules.models.dto.response.BatchStatusUpdateTradeOutDto;
import com.nubo.definitive.assignment.api.client.rules.models.dto.response.StatusUpdateTradeOutDto;
import com.nubo.definitive.assignment.api.client.rules.service.OperationBusinessRuleClient;
import com.nubo.definitive.assignment.api.models.entity.DirectDepositoryEntity;
import com.nubo.definitive.assignment.api.models.entity.ParticipantEntity;
import com.nubo.definitive.assignment.api.models.entity.SettlementEntity;
import com.nubo.definitive.assignment.api.models.entity.StatusEntity;
import com.nubo.definitive.assignment.api.models.entity.TradeEntity;
import com.nubo.definitive.assignment.api.models.entity.TradeEquityEntity;
import com.nubo.definitive.assignment.api.models.entity.TradeStatusHistoryEntity;
import com.nubo.definitive.assignment.api.models.entity.TypeEntity;
import com.nubo.definitive.assignment.api.models.enums.BusinessRuleEnum;
import com.nubo.definitive.assignment.api.models.enums.SideEnum;
import com.nubo.definitive.assignment.api.models.enums.SourceQuotePositionEnum;
import com.nubo.definitive.assignment.api.models.enums.StatusEnum;
import com.nubo.definitive.assignment.api.repository.DirectDepositoryRepository;
import com.nubo.definitive.assignment.api.repository.SettlementRepository;
import com.nubo.definitive.assignment.api.repository.SideRepository;
import com.nubo.definitive.assignment.api.repository.StatusRepository;
import com.nubo.definitive.assignment.api.repository.TradeEquityRepository;
import com.nubo.definitive.assignment.api.repository.TradeRepository;

import jakarta.persistence.EntityManager;
import lombok.extern.slf4j.Slf4j;

/**
 * Escenario 4 (envío de asignación definitiva) en paralelo y por lotes.
 *
 * <p>Los tradeIds se reparten en particiones contiguas, una por hilo. Cada worker recorre su partición en
 * chunks de {@code rules-batch-size} trades y cada chunk en rondas por side (el mismo orden que el flujo
 * secuencial), de modo que el primer side de un trade queda comiteado antes de validar el segundo en reglas.
 * Por ronda: filtros en memoria, una llamada batch a reglas fuera de transacción, y una transacción
 * {@code REQUIRES_NEW} que persiste y publica en Kafka esperando el ack antes del commit.</p>
 */
@Service
@Slf4j
public class FinalAssignmentBatchProcessor {

    private static final String SYSTEM_USER = "SYSTEM";
    private static final String SYSTEM_IP = "IP_01";
    private static final String APP_DEFINITIVE_ASSIGNMENT = "definitive-assignment-api";
    private static final Comparator<DirectDepositoryEntity> LOWEST_ID =
            Comparator.comparing(DirectDepositoryEntity::getId, Comparator.nullsLast(Comparator.naturalOrder()));

    private final TradeRepository tradeRepository;
    private final SettlementRepository settlementRepository;
    private final TradeEquityRepository tradeEquityRepository;
    private final DirectDepositoryRepository directDepositoryRepository;
    private final StatusRepository statusRepository;
    private final SideRepository sideRepository;
    private final OperationBusinessRuleClient operationBusinessRuleClient;
    private final KafkaNuboAdapterProducer kafkaNuboAdapterProducer;
    private final FinalAssignmentMessageBuilder messageBuilder;
    private final PropertiesConfig propertiesConfig;
    private final EntityManager entityManager;
    private final TransactionTemplate transactionTemplate;
    private final Executor executor;

    public FinalAssignmentBatchProcessor(TradeRepository tradeRepository,
                                         SettlementRepository settlementRepository,
                                         TradeEquityRepository tradeEquityRepository,
                                         DirectDepositoryRepository directDepositoryRepository,
                                         StatusRepository statusRepository,
                                         SideRepository sideRepository,
                                         OperationBusinessRuleClient operationBusinessRuleClient,
                                         KafkaNuboAdapterProducer kafkaNuboAdapterProducer,
                                         FinalAssignmentMessageBuilder messageBuilder,
                                         PropertiesConfig propertiesConfig,
                                         EntityManager entityManager,
                                         PlatformTransactionManager transactionManager,
                                         @Qualifier(FinalAssignmentExecutorConfig.FINAL_ASSIGNMENT_EXECUTOR)
                                         Executor executor) {
        this.tradeRepository = tradeRepository;
        this.settlementRepository = settlementRepository;
        this.tradeEquityRepository = tradeEquityRepository;
        this.directDepositoryRepository = directDepositoryRepository;
        this.statusRepository = statusRepository;
        this.sideRepository = sideRepository;
        this.operationBusinessRuleClient = operationBusinessRuleClient;
        this.kafkaNuboAdapterProducer = kafkaNuboAdapterProducer;
        this.messageBuilder = messageBuilder;
        this.propertiesConfig = propertiesConfig;
        this.entityManager = entityManager;
        this.executor = executor;

        TransactionTemplate template = new TransactionTemplate(transactionManager);
        template.setPropagationBehavior(TransactionDefinition.PROPAGATION_REQUIRES_NEW);
        template.setTimeout(propertiesConfig.getTransactionTimeoutSeconds());
        this.transactionTemplate = template;
    }

    public List<FinalAssignmentInDto> process(Long countryId, String equityMarketId) {
        long totalStartNanos = System.nanoTime();
        Metrics metrics = new Metrics();
        List<FinalAssignmentInDto> sentMessages = new ArrayList<>();
        String result = "SUCCESS";
        int threads = Math.max(1, propertiesConfig.getRuleValidationThreads());

        try {
            long queryStartNanos = System.nanoTime();
            List<Long> tradeIds = tradeRepository.findIdsByCountryIdAndClearingDateAndMarketId(
                    countryId, LocalDate.now(), equityMarketId);
            metrics.queryTradesNanos = System.nanoTime() - queryStartNanos;
            metrics.candidateCount = tradeIds.size();

            if (tradeIds.isEmpty()) {
                return sentMessages;
            }

            FinalAssignmentRunContext context = new FinalAssignmentRunContext(statusRepository, sideRepository);
            AtomicBoolean cancelled = new AtomicBoolean(false);

            List<List<Long>> partitions = partition(tradeIds, threads);
            log.info("THREAD_TRACE event=submit scenario=final-assignment partitions={} items={} submitThread={} {}",
                    partitions.size(), tradeIds.size(), ProcessTraceContext.threadName(),
                    ProcessTraceContext.poolState(executor));

            List<CompletableFuture<List<FinalAssignmentInDto>>> futures = new ArrayList<>(partitions.size());
            for (int index = 0; index < partitions.size(); index++) {
                int partitionIndex = index;
                List<Long> partition = partitions.get(index);
                futures.add(CompletableFuture.supplyAsync(
                        () -> processPartition(partitionIndex, partition, context, cancelled, metrics), executor));
            }

            awaitPartitions(futures, cancelled);

            for (CompletableFuture<List<FinalAssignmentInDto>> future : futures) {
                addMessagesWithCap(sentMessages, future.join());
            }
            return sentMessages;
        } catch (RuntimeException | Error ex) {
            result = "ERROR";
            throw ex;
        } finally {
            log.info("PERF_ASSIGNMENT service=asignacion-definitiva-auto operation=sendFinalAssignmentMessages countryId={} result={} threads={} candidateCount={} messageCount={} queryTradesMs={} rulesBatchCount={} rulesBatchTotalMs={} rulesRestCount={} rulesRestTotalMs={} txCount={} txTotalMs={} kafkaCount={} kafkaBatchCount={} kafkaTotalMs={} totalMs={}",
                    countryId, result, threads, metrics.candidateCount, sentMessages.size(),
                    nanosToMillis(metrics.queryTradesNanos),
                    metrics.rulesBatchCount.sum(), nanosToMillis(metrics.rulesBatchNanos.sum()),
                    metrics.rulesRestCount.sum(), nanosToMillis(metrics.rulesRestNanos.sum()),
                    metrics.txCount.sum(), nanosToMillis(metrics.txNanos.sum()),
                    metrics.kafkaCount.sum(), metrics.kafkaBatchCount.sum(), nanosToMillis(metrics.kafkaNanos.sum()),
                    nanosToMillis(System.nanoTime() - totalStartNanos));
        }
    }

    private void awaitPartitions(List<CompletableFuture<List<FinalAssignmentInDto>>> futures,
                                 AtomicBoolean cancelled) {
        try {
            CompletableFuture.allOf(futures.toArray(CompletableFuture[]::new))
                    .get(propertiesConfig.getPartitionAwaitTimeoutMs(), TimeUnit.MILLISECONDS);
        } catch (InterruptedException ex) {
            cancelled.set(true);
            Thread.currentThread().interrupt();
            throw new IllegalStateException("Proceso de asignación definitiva interrumpido", ex);
        } catch (TimeoutException ex) {
            cancelled.set(true);
            throw new IllegalStateException("Timeout esperando particiones de asignación definitiva", ex);
        } catch (ExecutionException ex) {
            cancelled.set(true);
            throw unwrap(ex.getCause());
        }
    }

    private List<FinalAssignmentInDto> processPartition(int partitionIndex,
                                                        List<Long> tradeIds,
                                                        FinalAssignmentRunContext context,
                                                        AtomicBoolean cancelled,
                                                        Metrics metrics) {
        List<FinalAssignmentInDto> partitionMessages = new ArrayList<>();
        int chunkSize = Math.max(1, propertiesConfig.getRulesBatchSize());
        long startNanos = System.nanoTime();
        try (MDC.MDCCloseable ignored = ProcessTraceContext.put(ProcessTraceContext.PARTITION, partitionIndex)) {
            log.info("THREAD_TRACE event=partition-start scenario=final-assignment partition={} size={} thread={} threadId={}",
                    partitionIndex, tradeIds.size(), ProcessTraceContext.threadName(), ProcessTraceContext.threadId());
            try {
                int chunkIndex = 0;
                for (int from = 0; from < tradeIds.size(); from += chunkSize) {
                    if (cancelled.get()) {
                        log.warn("Partición cancelada por error en otro worker | pendingTrades={}", tradeIds.size() - from);
                        log.warn("THREAD_TRACE event=partition-cancelled scenario=final-assignment partition={} thread={} threadId={} pendingTrades={} elapsedMs={}",
                                partitionIndex, ProcessTraceContext.threadName(), ProcessTraceContext.threadId(),
                                tradeIds.size() - from, nanosToMillis(System.nanoTime() - startNanos));
                        break;
                    }
                    List<Long> chunk = tradeIds.subList(from, Math.min(from + chunkSize, tradeIds.size()));
                    long chunkStartNanos = System.nanoTime();
                    try (MDC.MDCCloseable chunkTrace = ProcessTraceContext.put(ProcessTraceContext.CHUNK, chunkIndex)) {
                        processChunk(chunk, context, metrics, partitionMessages);
                        log.info("THREAD_TRACE event=chunk scenario=final-assignment partition={} chunk={} trades={} thread={} totalMs={}",
                                partitionIndex, chunkIndex, chunk.size(), ProcessTraceContext.threadName(),
                                nanosToMillis(System.nanoTime() - chunkStartNanos));
                    }
                    chunkIndex++;
                }
                log.info("THREAD_TRACE event=partition-end scenario=final-assignment partition={} size={} messages={} thread={} threadId={} elapsedMs={}",
                        partitionIndex, tradeIds.size(), partitionMessages.size(), ProcessTraceContext.threadName(),
                        ProcessTraceContext.threadId(), nanosToMillis(System.nanoTime() - startNanos));
                return partitionMessages;
            } catch (RuntimeException | Error ex) {
                cancelled.set(true);
                log.error("THREAD_TRACE event=partition-error scenario=final-assignment partition={} thread={} threadId={} elapsedMs={} motivo={}",
                        partitionIndex, ProcessTraceContext.threadName(), ProcessTraceContext.threadId(),
                        nanosToMillis(System.nanoTime() - startNanos), ex.getMessage(), ex);
                throw ex;
            }
        }
    }

    private void processChunk(List<Long> chunk,
                              FinalAssignmentRunContext context,
                              Metrics metrics,
                              List<FinalAssignmentInDto> partitionMessages) {

        ChunkData data = prefetch(chunk);
        int rounds = data.sideOrderByTrade().values().stream().mapToInt(List::size).max().orElse(0);

        for (int round = 0; round < rounds; round++) {
            List<SideWork> works = new ArrayList<>();
            for (Long tradeId : chunk) {
                List<String> sideOrder = data.sideOrderByTrade().get(tradeId);
                if (sideOrder != null && sideOrder.size() > round) {
                    works.add(new SideWork(tradeId, sideOrder.get(round)));
                }
            }
            processRound(works, data, context, metrics, partitionMessages);
        }
    }

    private ChunkData prefetch(List<Long> chunk) {
        Map<Long, TradeEntity> tradeById = tradeRepository.findAllById(chunk).stream()
                .collect(Collectors.toMap(TradeEntity::getId, Function.identity()));

        Map<Long, List<SettlementEntity>> settlementsByTrade = settlementRepository.findByTradeIdIn(chunk).stream()
                .collect(Collectors.groupingBy(s -> s.getTrade().getId()));

        Map<Long, Map<String, List<SettlementEntity>>> settlementsByTradeAndSide = new HashMap<>();
        Map<Long, List<String>> sideOrderByTrade = new HashMap<>();
        for (Long tradeId : chunk) {
            List<SettlementEntity> settlements = settlementsByTrade.get(tradeId);
            if (!tradeById.containsKey(tradeId) || settlements == null || settlements.isEmpty()) {
                continue;
            }
            Map<String, List<SettlementEntity>> bySide = groupBySide(settlements);
            settlementsByTradeAndSide.put(tradeId, bySide);
            sideOrderByTrade.put(tradeId, new ArrayList<>(bySide.keySet()));
        }

        List<TradeEntity> tradesWithSettlements = sideOrderByTrade.keySet().stream().map(tradeById::get).toList();

        Map<Long, TradeEquityEntity> tradeEquityByTrade = tradesWithSettlements.isEmpty()
                ? Map.of()
                : tradeEquityRepository.findByTradeIn(tradesWithSettlements).stream()
                        .collect(Collectors.toMap(te -> te.getTrade().getId(), Function.identity(), (a, b) -> a));

        Map<Long, DirectDepositoryEntity> directDepositoryByParticipant =
                prefetchDirectDepositories(tradesWithSettlements, settlementsByTrade);

        return new ChunkData(tradeById, settlementsByTradeAndSide, sideOrderByTrade, tradeEquityByTrade,
                directDepositoryByParticipant);
    }

    private Map<Long, DirectDepositoryEntity> prefetchDirectDepositories(
            List<TradeEntity> trades, Map<Long, List<SettlementEntity>> settlementsByTrade) {

        Set<Long> participantIds = new LinkedHashSet<>();
        for (TradeEntity trade : trades) {
            addParticipantId(participantIds, trade.getParticipantBuy());
            addParticipantId(participantIds, trade.getParticipantSell());
            for (SettlementEntity settlement : settlementsByTrade.getOrDefault(trade.getId(), List.of())) {
                addParticipantId(participantIds, settlement.getCustodian());
                addParticipantId(participantIds, settlement.getFicAdministrator());
            }
        }
        if (participantIds.isEmpty()) {
            return Map.of();
        }
        return directDepositoryRepository.findByParticipantIdIn(participantIds).stream()
                .collect(Collectors.toMap(
                        DirectDepositoryEntity::getParticipantId,
                        Function.identity(),
                        (a, b) -> LOWEST_ID.compare(a, b) <= 0 ? a : b));
    }

    private void processRound(List<SideWork> works,
                              ChunkData data,
                              FinalAssignmentRunContext context,
                              Metrics metrics,
                              List<FinalAssignmentInDto> partitionMessages) {

        Set<SideWork> ownPositions = new LinkedHashSet<>();
        List<SideWork> candidates = new ArrayList<>();

        for (SideWork work : works) {
            TradeEntity trade = data.tradeById().get(work.tradeId());
            String sideId = work.sideId();

            if (isOwnPosition(trade, sideId)) {
                log.info("Side {} es posición restringida (propia) | tradeId={} — no se envía a CCP", sideId, trade.getId());
                ownPositions.add(work);
                continue;
            }

            StatusEntity sideStatus = SideEnum.BUY.getValue().equals(sideId)
                    ? trade.getBuyStatus()
                    : trade.getSellStatus();

            if (!isSideStatusAllowed(sideStatus, context)) {
                log.info("Side {} no cumple estado permitido", sideId);
                continue;
            }

            if (!fractionsHaveAllowedCustodianStatus(data.sideSettlements(work), context)) {
                log.info("Side {} no cumple custodio permitido", sideId);
                continue;
            }

            candidates.add(work);
        }

        Map<SideWork, StatusUpdateTradeOutDto> rulesResults = validateRules(candidates, metrics);

        List<SideWork> toPersist = new ArrayList<>();
        for (SideWork work : works) {
            if (ownPositions.contains(work)) {
                toPersist.add(work);
                continue;
            }
            if (!rulesResults.containsKey(work)) {
                continue;
            }
            StatusUpdateTradeOutDto validateFinalAssignment = rulesResults.get(work);
            if (validateFinalAssignment == null || !Boolean.TRUE.equals(validateFinalAssignment.getIsValid())) {
                log.info("Side {} no pasa RULE_FINAL_ASSIGNMENT", work.sideId());
                continue;
            }
            toPersist.add(work);
        }

        if (toPersist.isEmpty()) {
            return;
        }

        long txStartNanos = System.nanoTime();
        try {
            List<FinalAssignmentInDto> roundMessages = transactionTemplate.execute(status ->
                    persistAndPublish(toPersist, ownPositions, rulesResults, data, context, metrics));
            if (roundMessages != null) {
                addMessagesWithCap(partitionMessages, roundMessages);
            }
        } finally {
            metrics.txCount.increment();
            metrics.txNanos.add(System.nanoTime() - txStartNanos);
        }
    }

    private List<FinalAssignmentInDto> persistAndPublish(List<SideWork> toPersist,
                                                         Set<SideWork> ownPositions,
                                                         Map<SideWork, StatusUpdateTradeOutDto> rulesResults,
                                                         ChunkData data,
                                                         FinalAssignmentRunContext context,
                                                         Metrics metrics) {

        Set<Long> tradeIds = toPersist.stream().map(SideWork::tradeId).collect(Collectors.toCollection(LinkedHashSet::new));
        Map<Long, TradeEntity> managedTrades = tradeRepository.findAllById(tradeIds).stream()
                .collect(Collectors.toMap(TradeEntity::getId, Function.identity()));

        Set<Long> rulesTradeIds = toPersist.stream()
                .filter(work -> !ownPositions.contains(work))
                .map(SideWork::tradeId)
                .collect(Collectors.toCollection(LinkedHashSet::new));
        Map<Long, Map<String, List<SettlementEntity>>> managedSettlements = rulesTradeIds.isEmpty()
                ? Map.of()
                : settlementRepository.findByTradeIdIn(rulesTradeIds).stream()
                        .collect(Collectors.groupingBy(s -> s.getTrade().getId(),
                                Collectors.collectingAndThen(Collectors.toList(),
                                        FinalAssignmentBatchProcessor::groupBySide)));

        List<TradeStatusHistoryEntity> histories = new ArrayList<>();
        List<FinalAssignmentInDto> messages = new ArrayList<>();

        for (SideWork work : toPersist) {
            TradeEntity trade = managedTrades.get(work.tradeId());
            if (trade == null) {
                continue;
            }

            if (ownPositions.contains(work)) {
                applyOwnPositionAcceptance(trade, work.sideId(), context, histories);
                continue;
            }

            List<SettlementEntity> sideSettlements = managedSettlements
                    .getOrDefault(work.tradeId(), Map.of())
                    .getOrDefault(work.sideId(), List.of());
            if (sideSettlements.isEmpty()) {
                continue;
            }

            applyFinalAssignment(trade, work.sideId(), rulesResults.get(work), sideSettlements, context, histories);

            messages.add(messageBuilder.build(
                    trade,
                    sideSettlements.get(0).getSide(),
                    sideSettlements,
                    data.tradeEquityByTrade().get(trade.getId()),
                    data.directDepositoryByParticipant()));
        }

        histories.forEach(entityManager::persist);
        entityManager.flush();

        if (!messages.isEmpty()) {
            long kafkaStartNanos = System.nanoTime();
            try {
                kafkaNuboAdapterProducer.sendFinalAssignmentBatch(messages);
                messages.forEach(dto -> log.info("Kafka enviado trade={} side={}", dto.getId(), dto.getSide().getId()));
            } finally {
                metrics.kafkaCount.add(messages.size());
                metrics.kafkaBatchCount.increment();
                metrics.kafkaNanos.add(System.nanoTime() - kafkaStartNanos);
            }
        }
        return messages;
    }

    private Map<SideWork, StatusUpdateTradeOutDto> validateRules(List<SideWork> candidates, Metrics metrics) {
        Map<SideWork, StatusUpdateTradeOutDto> results = new HashMap<>();
        if (candidates.isEmpty()) {
            return results;
        }

        if (Boolean.TRUE.equals(propertiesConfig.getRulesBatchEnabled()) && candidates.size() > 1) {
            results.putAll(validateRulesBatch(candidates, metrics));
        }

        for (SideWork work : candidates) {
            if (results.containsKey(work)) {
                continue;
            }
            long rulesStartNanos = System.nanoTime();
            try {
                results.put(work, validateRulesFinalAssignment(work.tradeId(), work.sideId()));
            } finally {
                metrics.rulesRestCount.increment();
                metrics.rulesRestNanos.add(System.nanoTime() - rulesStartNanos);
            }
        }
        return results;
    }

    /**
     * Devuelve solo los ítems prevalidados y consistentes; el resto cae al endpoint individual.
     */
    private Map<SideWork, StatusUpdateTradeOutDto> validateRulesBatch(List<SideWork> candidates, Metrics metrics) {
        String batchId = UUID.randomUUID().toString();
        Map<String, SideWork> workByItemId = new HashMap<>();
        List<BatchStatusUpdateTradeItemInDto> items = new ArrayList<>(candidates.size());
        for (SideWork work : candidates) {
            workByItemId.put(work.itemId(), work);
            items.add(BatchStatusUpdateTradeItemInDto.builder()
                    .itemId(work.itemId())
                    .tradeId(work.tradeId())
                    .sideId(work.sideId())
                    .code(BusinessRuleEnum.RULE_FINAL_ASSIGNMENT)
                    .build());
        }

        BatchStatusUpdateTradeOutDto response;
        long batchStartNanos = System.nanoTime();
        try {
            response = operationBusinessRuleClient.validateUpdateStatusTradeBatch(
                    BatchStatusUpdateTradeInDto.builder().batchId(batchId).items(items).build());
        } catch (RuntimeException ex) {
            log.warn("Fallo batch de reglas, fallback individual | batchId={} items={}", batchId, items.size(), ex);
            return Map.of();
        } finally {
            metrics.rulesBatchCount.increment();
            metrics.rulesBatchNanos.add(System.nanoTime() - batchStartNanos);
        }

        if (response == null || response.getItems() == null || !Objects.equals(batchId, response.getBatchId())) {
            log.warn("Respuesta batch de reglas inválida, fallback individual | batchId={}", batchId);
            return Map.of();
        }

        Map<SideWork, StatusUpdateTradeOutDto> results = new HashMap<>();
        for (BatchStatusUpdateTradeItemOutDto item : response.getItems()) {
            if (item == null || item.getItemId() == null) {
                continue;
            }
            SideWork work = workByItemId.get(item.getItemId());
            boolean consistent = work != null
                    && Objects.equals(work.tradeId(), item.getTradeId())
                    && Objects.equals(work.sideId(), item.getSideId());
            if (consistent && !Boolean.FALSE.equals(item.getPrevalidated()) && item.getResult() != null) {
                results.put(work, item.getResult());
            }
        }
        if (results.size() < candidates.size()) {
            log.info("Batch de reglas parcial, fallback individual | batchId={} items={} prevalidated={}",
                    batchId, candidates.size(), results.size());
        }
        return results;
    }

    private StatusUpdateTradeOutDto validateRulesFinalAssignment(Long tradeId, String sideId) {
        StatusUpdateTradeInDto statusUpdateTradeInDto = StatusUpdateTradeInDto.builder()
                .tradeId(tradeId)
                .sideId(sideId)
                .code(BusinessRuleEnum.RULE_FINAL_ASSIGNMENT.getValue())
                .build();
        return operationBusinessRuleClient.validateUpdateStatusTrade(statusUpdateTradeInDto);
    }

    private void applyFinalAssignment(TradeEntity trade,
                                      String sideId,
                                      StatusUpdateTradeOutDto validateFinalAssignment,
                                      List<SettlementEntity> sideSettlements,
                                      FinalAssignmentRunContext context,
                                      List<TradeStatusHistoryEntity> histories) {

        if (validateFinalAssignment.getNewStatusSide() != null) {

            StatusEntity newSideStatus = context.statusById(validateFinalAssignment.getNewStatusSide().getId());

            if (SideEnum.BUY.getValue().equals(sideId)) {
                trade.setBuyStatus(newSideStatus);
                trade.setFinalAssignmentMarkBuy(Boolean.TRUE);
            } else {
                trade.setSellStatus(newSideStatus);
                trade.setFinalAssignmentMarkSell(Boolean.TRUE);
            }
            histories.add(buildTradeHistory(trade, newSideStatus, sideId, "Envío automático nubo", context));
            updateTradeStatusIfFullyAssigned(trade, context);
        }

        if (validateFinalAssignment.getNewStatusFraction() != null) {

            StatusEntity newFractionStatus = context.statusById(validateFinalAssignment.getNewStatusFraction().getId());

            for (SettlementEntity settlement : sideSettlements) {
                settlement.setStatus(newFractionStatus);
            }
        }

        setAudit(trade);
    }

    private void applyOwnPositionAcceptance(TradeEntity trade,
                                            String sideId,
                                            FinalAssignmentRunContext context,
                                            List<TradeStatusHistoryEntity> histories) {

        StatusEntity sideStatus = SideEnum.BUY.getValue().equals(sideId)
                ? trade.getBuyStatus()
                : trade.getSellStatus();

        if (!isSideStatusAllowed(sideStatus, context)) {
            log.info("Side {} (posición propia) no cumple estado permitido | tradeId={}", sideId, trade.getId());
            return;
        }

        StatusEntity acceptedStatus = context.status(StatusEnum.ACCEPTED);

        if (SideEnum.BUY.getValue().equals(sideId)) {
            trade.setBuyStatus(acceptedStatus);
            trade.setFinalAssignmentMarkBuy(Boolean.TRUE);
        } else {
            trade.setSellStatus(acceptedStatus);
            trade.setFinalAssignmentMarkSell(Boolean.TRUE);
        }

        histories.add(buildTradeHistory(trade, acceptedStatus, sideId, "Aceptación automática nubo", context));
        updateTradeStatusIfFullyAssigned(trade, context);
        setAudit(trade);

        log.info("Side {} (posición propia) aceptado automáticamente | tradeId={}", sideId, trade.getId());
    }

    private void updateTradeStatusIfFullyAssigned(TradeEntity trade, FinalAssignmentRunContext context) {

        StatusEnum targetStatusEnum =
                TradeStatusHierarchyUtil.lowestStatus(trade.getBuyStatus(), trade.getSellStatus());

        if (targetStatusEnum == null) {
            return;
        }

        int targetRank = TradeStatusHierarchyUtil.rankOf(targetStatusEnum);
        Integer currentRank = TradeStatusHierarchyUtil.rankOf(trade.getStatus());

        if (currentRank != null && currentRank >= targetRank) {
            return;
        }

        trade.setStatus(context.status(targetStatusEnum));

        log.info("Trade {} STATUS actualizado a {} (buyStatus={}, sellStatus={})",
                trade.getId(), targetStatusEnum.getDescription(),
                trade.getBuyStatus().getDescription(), trade.getSellStatus().getDescription());
    }

    private static TradeStatusHistoryEntity buildTradeHistory(TradeEntity trade,
                                                              StatusEntity status,
                                                              String sideId,
                                                              String detail,
                                                              FinalAssignmentRunContext context) {
        LocalDateTime now = LocalDateTime.now();
        return TradeStatusHistoryEntity.builder()
                .trade(trade)
                .time(now)
                .status(status)
                .side(context.side(sideId))
                .detail(detail)
                .lastModifyUser(SYSTEM_USER)
                .lastModifyApplication(APP_DEFINITIVE_ASSIGNMENT)
                .lastModifyDate(now)
                .lastModifyIp(SYSTEM_IP)
                .build();
    }

    private static void setAudit(TradeEntity trade) {
        trade.setLastModifyDate(LocalDateTime.now());
        trade.setLastModifyUser(SYSTEM_USER);
        trade.setLastModifyApplication(APP_DEFINITIVE_ASSIGNMENT);
        trade.setLastModifyIp(SYSTEM_IP);
    }

    private static boolean isOwnPosition(TradeEntity tradeEntity, String sideId) {
        TypeEntity sourceQuoteType = SideEnum.BUY.getValue().equals(sideId)
                ? tradeEntity.getSourceQuoteBuyType()
                : tradeEntity.getSourceQuoteSellType();

        if (sourceQuoteType == null) {
            return false;
        }
        String description = sourceQuoteType.getDescription();
        return SourceQuotePositionEnum.OWN_POSITION.getDescription().equalsIgnoreCase(description);
    }

    private static boolean isSideStatusAllowed(StatusEntity status, FinalAssignmentRunContext context) {

        if (status == null) {
            return false;
        }

        StatusEntity assigned = context.status(StatusEnum.ASSIGNED);
        StatusEntity rejected = context.status(StatusEnum.REJECTED);

        return status.getId().equals(assigned.getId())
                || status.getId().equals(rejected.getId());
    }

    private static boolean fractionsHaveAllowedCustodianStatus(List<SettlementEntity> fractions,
                                                               FinalAssignmentRunContext context) {

        Set<Long> allowedIds = context.allowedCustodianStatusIds();

        for (SettlementEntity fraction : fractions) {

            if (fraction.getCustodianStatus() == null) {
                continue;
            }
            if (!allowedIds.contains(fraction.getCustodianStatus().getId())) {
                return false;
            }
        }

        return true;
    }

    /**
     * Mismo agrupamiento que el flujo secuencial ({@code groupingBy} a HashMap), para conservar el orden de sides.
     */
    private static Map<String, List<SettlementEntity>> groupBySide(List<SettlementEntity> settlements) {
        return settlements.stream().collect(Collectors.groupingBy(s -> s.getSide().getId()));
    }

    private static void addParticipantId(Collection<Long> target, ParticipantEntity participant) {
        if (participant != null && participant.getId() != null) {
            target.add(participant.getId());
        }
    }

    private void addMessagesWithCap(List<FinalAssignmentInDto> target, List<FinalAssignmentInDto> source) {
        int maxResponseMessages = propertiesConfig.getMaxResponseMessages();
        for (FinalAssignmentInDto dto : source) {
            if (target.size() >= maxResponseMessages) {
                return;
            }
            target.add(dto);
        }
    }

    private static List<List<Long>> partition(List<Long> ids, int parts) {
        int size = (ids.size() + parts - 1) / parts;
        List<List<Long>> partitions = new ArrayList<>(parts);
        for (int from = 0; from < ids.size(); from += size) {
            partitions.add(ids.subList(from, Math.min(from + size, ids.size())));
        }
        return partitions;
    }

    private static RuntimeException unwrap(Throwable throwable) {
        Throwable cause = throwable instanceof CompletionException && throwable.getCause() != null
                ? throwable.getCause()
                : throwable;
        if (cause instanceof RuntimeException runtimeException) {
            return runtimeException;
        }
        if (cause instanceof Error error) {
            throw error;
        }
        return new IllegalStateException(cause);
    }

    private static long nanosToMillis(long nanos) {
        return nanos / 1_000_000L;
    }

    private record SideWork(Long tradeId, String sideId) {
        String itemId() {
            return tradeId + "-" + sideId;
        }
    }

    private record ChunkData(
            Map<Long, TradeEntity> tradeById,
            Map<Long, Map<String, List<SettlementEntity>>> settlementsByTradeAndSide,
            Map<Long, List<String>> sideOrderByTrade,
            Map<Long, TradeEquityEntity> tradeEquityByTrade,
            Map<Long, DirectDepositoryEntity> directDepositoryByParticipant) {

        List<SettlementEntity> sideSettlements(SideWork work) {
            return settlementsByTradeAndSide.getOrDefault(work.tradeId(), Map.of())
                    .getOrDefault(work.sideId(), List.of());
        }
    }

    private static final class Metrics {
        private int candidateCount;
        private long queryTradesNanos;
        private final LongAdder rulesBatchCount = new LongAdder();
        private final LongAdder rulesBatchNanos = new LongAdder();
        private final LongAdder rulesRestCount = new LongAdder();
        private final LongAdder rulesRestNanos = new LongAdder();
        private final LongAdder txCount = new LongAdder();
        private final LongAdder txNanos = new LongAdder();
        private final LongAdder kafkaCount = new LongAdder();
        private final LongAdder kafkaBatchCount = new LongAdder();
        private final LongAdder kafkaNanos = new LongAdder();
    }

}

```

## src/main/java/com/nubo/definitive/assignment/api/service/impl/FinalAssignmentMessageBuilder.java

```java
package com.nubo.definitive.assignment.api.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

import com.nubo.definitive.assignment.api.client.kafka.model.dto.request.FinalAssignmentFractionInDto;
import com.nubo.definitive.assignment.api.client.kafka.model.dto.request.FinalAssignmentInDto;
import com.nubo.definitive.assignment.api.client.kafka.model.dto.request.ParticipantInDto;
import com.nubo.definitive.assignment.api.client.kafka.model.dto.request.SideInDto;
import com.nubo.definitive.assignment.api.helpers.MapperUtil;
import com.nubo.definitive.assignment.api.models.entity.CountryEntity;
import com.nubo.definitive.assignment.api.models.entity.DirectDepositoryEntity;
import com.nubo.definitive.assignment.api.models.entity.ParticipantEntity;
import com.nubo.definitive.assignment.api.models.entity.SecurityTitleEntity;
import com.nubo.definitive.assignment.api.models.entity.SettlementEntity;
import com.nubo.definitive.assignment.api.models.entity.SideEntity;
import com.nubo.definitive.assignment.api.models.entity.TradeEntity;
import com.nubo.definitive.assignment.api.models.entity.TradeEquityEntity;
import com.nubo.definitive.assignment.api.models.enums.SideEnum;

/**
 * Construye el mensaje Kafka de asignación definitiva. Mismo mapeo que el flujo secuencial;
 * el depósito directo se toma del mapa precargado en vez de consultarlo por participante.
 */
@Component
public class FinalAssignmentMessageBuilder {

    public FinalAssignmentInDto build(TradeEntity tradeEntity,
                                      SideEntity sideEntity,
                                      List<SettlementEntity> settlementEntityList,
                                      TradeEquityEntity tradeEquity,
                                      Map<Long, DirectDepositoryEntity> directDepositoryByParticipantId) {

        CountryEntity countryEntity = tradeEntity.getCountry();
        SecurityTitleEntity securityTitleEntity = tradeEntity.getSecurityTitle();

        String reference = null;
        if (SideEnum.BUY.getValue().equalsIgnoreCase(sideEntity.getId())) {
            reference = tradeEquity != null ? tradeEquity.getReferenceBuy() : null;
        } else if (SideEnum.SELL.getValue().equalsIgnoreCase(sideEntity.getId())) {
            reference = tradeEquity != null ? tradeEquity.getReferenceSell() : null;
        }

        return FinalAssignmentInDto.builder()
                .id(tradeEntity.getId())
                .side(SideInDto.builder()
                        .id(sideEntity.getId())
                        .name(sideEntity.getDescription())
                        .build())
                .matchId(tradeEntity.getMatchId())
                .matchDate(tradeEntity.getMatchDate())
                .clearingDate(tradeEntity.getClearingDate())
                .returnClearingDate(tradeEntity.getReturnClearingDate())
                .type(MapperUtil.typeEntityToTypeInDto(tradeEntity.getType()))
                .isFractional(
                        SideEnum.BUY.getValue().equalsIgnoreCase(sideEntity.getId())
                                ? tradeEntity.getFractionalMarkBuy()
                                : tradeEntity.getFractionalMarkSell()
                )
                .country(MapperUtil.countryEntityToCountryInDto(countryEntity))
                .mnemonic(securityTitleEntity != null ? securityTitleEntity.getMnemonic() : null)
                .isin(securityTitleEntity != null ? securityTitleEntity.getIsin() : null)
                .depository(
                        SideEnum.BUY.getValue().equalsIgnoreCase(sideEntity.getId())
                                ? MapperUtil.depositoryEntityToDepositoryInDto(tradeEntity.getDepositoryBuy())
                                : MapperUtil.depositoryEntityToDepositoryInDto(tradeEntity.getDepositorySell())
                )
                .isNuboAllocation(true)
                .reference(reference)
                .participant(toParticipantInDto(
                        resolveParticipantForSide(tradeEntity, sideEntity), directDepositoryByParticipantId))
                .fractions(
                        settlementEntityList.stream()
                                .map(settlement -> toFractionInDto(settlement, directDepositoryByParticipantId))
                                .toList())
                .build();
    }

    private static ParticipantEntity resolveParticipantForSide(TradeEntity tradeEntity, SideEntity sideEntity) {
        return SideEnum.BUY.getValue().equalsIgnoreCase(sideEntity.getId())
                ? tradeEntity.getParticipantBuy()
                : tradeEntity.getParticipantSell();
    }

    private static ParticipantInDto toParticipantInDto(ParticipantEntity participantEntity,
                                                       Map<Long, DirectDepositoryEntity> directDepositoryByParticipantId) {
        if (participantEntity == null) {
            return null;
        }
        DirectDepositoryEntity directDepositoryEntity = directDepositoryByParticipantId.get(participantEntity.getId());

        return ParticipantInDto.builder()
                .id(participantEntity.getId())
                .code(participantEntity.getCode())
                .name(participantEntity.getName())
                .directDepositoryNumber(directDepositoryEntity != null
                        ? directDepositoryEntity.getDirectDepositoryNumber()
                        : null)
                .build();
    }

    private static FinalAssignmentFractionInDto toFractionInDto(SettlementEntity settlementEntity,
                                                                Map<Long, DirectDepositoryEntity> directDepositoryByParticipantId) {
        if (settlementEntity == null) {
            return null;
        }
        return FinalAssignmentFractionInDto.builder()
                .side(SideInDto.builder()
                        .id(settlementEntity.getSide().getId())
                        .name(settlementEntity.getSide().getDescription())
                        .build())
                .fraction(settlementEntity.getFraction())
                .quantity(settlementEntity.getFractionQuantity())
                .investorAccount(MapperUtil.investorAccountEntityToInvestorAccountInDto(
                        settlementEntity.getInvestorAccount()))
                .participantAccount(MapperUtil.participantAccountEntityToParticipantAccountInDto(
                        settlementEntity.getParticipantAccount()))
                .participantBankAccount(MapperUtil.participantBankAccountEntityToParticipantBankAccountInDto(
                        settlementEntity.getParticipantBankAccount()))
                .cashAccount(settlementEntity.getCashAccount())
                .custodian(toParticipantInDto(settlementEntity.getCustodian(), directDepositoryByParticipantId))
                .ficAdministrator(toParticipantInDto(settlementEntity.getFicAdministrator(),
                        directDepositoryByParticipantId))
                .directDepositor(MapperUtil.directDepositoryEntityToDirectDepositoryInDto(
                        settlementEntity.getDirectDepositor()))
                .reference(settlementEntity.getReference())
                .build();
    }

}

```

## src/main/java/com/nubo/definitive/assignment/api/service/impl/FinalAssignmentRunContext.java

```java
package com.nubo.definitive.assignment.api.service.impl;

import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
import java.util.stream.Collectors;

import com.nubo.definitive.assignment.api.models.entity.SideEntity;
import com.nubo.definitive.assignment.api.models.entity.StatusEntity;
import com.nubo.definitive.assignment.api.models.enums.CustodianStatusEnum;
import com.nubo.definitive.assignment.api.models.enums.StatusEnum;
import com.nubo.definitive.assignment.api.repository.SideRepository;
import com.nubo.definitive.assignment.api.repository.StatusRepository;

/**
 * Memo de catálogos para una ejecución del Escenario 4, compartido entre los workers.
 * Resuelve cada valor una sola vez (lazy) con las mismas queries y excepciones que el flujo secuencial.
 */
final class FinalAssignmentRunContext {

    private static final String ALLOWED_CUSTODIAN_KEY = "allowed";

    private final StatusRepository statusRepository;
    private final SideRepository sideRepository;

    private final Map<StatusEnum, StatusEntity> statusByEnum = new ConcurrentHashMap<>();
    private final Map<Long, StatusEntity> statusById = new ConcurrentHashMap<>();
    private final Map<String, SideEntity> sideById = new ConcurrentHashMap<>();
    private final Map<String, Set<Long>> allowedCustodianStatusIds = new ConcurrentHashMap<>();

    FinalAssignmentRunContext(StatusRepository statusRepository, SideRepository sideRepository) {
        this.statusRepository = statusRepository;
        this.sideRepository = sideRepository;
    }

    StatusEntity status(StatusEnum statusEnum) {
        return statusByEnum.computeIfAbsent(statusEnum, key -> statusRepository
                .findByDescriptionAndCategory(key.getDescription(), key.getCategory())
                .orElseThrow(() -> new IllegalStateException("Estado no encontrado: " + key.name())));
    }

    StatusEntity statusById(Long statusId) {
        return statusById.computeIfAbsent(statusId, key -> statusRepository.findById(key).orElseThrow());
    }

    SideEntity side(String sideId) {
        return sideById.computeIfAbsent(sideId, key -> sideRepository.findById(key)
                .orElseThrow(() -> new RuntimeException("Side no encontrado")));
    }

    Set<Long> allowedCustodianStatusIds() {
        return allowedCustodianStatusIds.computeIfAbsent(ALLOWED_CUSTODIAN_KEY, key -> {
            List<StatusEntity> allowedStatuses = statusRepository.findByDescriptionInAndCategory(
                    List.of(
                            CustodianStatusEnum.ADMITTED.getDescription(),
                            CustodianStatusEnum.REJECTED.getDescription()
                    ),
                    CustodianStatusEnum.ADMITTED.getCategory()
            );
            return allowedStatuses.stream()
                    .map(StatusEntity::getId)
                    .collect(Collectors.toUnmodifiableSet());
        });
    }

}

```

## src/main/java/com/nubo/definitive/assignment/api/service/impl/ParallelPartitionRunner.java

```java
package com.nubo.definitive.assignment.api.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.CompletionException;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Executor;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.function.BooleanSupplier;

import org.slf4j.MDC;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import com.nubo.definitive.assignment.api.application.config.FinalAssignmentExecutorConfig;
import com.nubo.definitive.assignment.api.application.properties.PropertiesConfig;
import com.nubo.definitive.assignment.api.application.util.ProcessTraceContext;

import lombok.extern.slf4j.Slf4j;

/**
 * Reparte una lista en particiones contiguas (una por hilo del pool {@code final-assign-*}), las ejecuta en
 * paralelo y espera a todas. Cada partición deja trazas {@code THREAD_TRACE} con hilo, partición y duración.
 */
@Component
@Slf4j
public class ParallelPartitionRunner {

    private final PropertiesConfig propertiesConfig;
    private final Executor executor;

    public ParallelPartitionRunner(PropertiesConfig propertiesConfig,
                                   @Qualifier(FinalAssignmentExecutorConfig.FINAL_ASSIGNMENT_EXECUTOR)
                                   Executor executor) {
        this.propertiesConfig = propertiesConfig;
        this.executor = executor;
    }

    @FunctionalInterface
    public interface PartitionTask<T> {
        void run(List<T> partition, BooleanSupplier cancelled);
    }

    public int threads() {
        return Math.max(1, propertiesConfig.getRuleValidationThreads());
    }

    public <T> void run(String scenario, List<T> items, PartitionTask<T> task) {
        if (items.isEmpty()) {
            return;
        }
        List<List<T>> partitions = partition(items, threads());
        AtomicBoolean cancelled = new AtomicBoolean(false);

        log.info("THREAD_TRACE event=submit scenario={} partitions={} items={} submitThread={} {}",
                scenario, partitions.size(), items.size(), ProcessTraceContext.threadName(),
                ProcessTraceContext.poolState(executor));

        List<CompletableFuture<Void>> futures = new ArrayList<>(partitions.size());
        for (int index = 0; index < partitions.size(); index++) {
            int partitionIndex = index;
            List<T> partition = partitions.get(index);
            futures.add(CompletableFuture.runAsync(
                    () -> runPartition(scenario, partitionIndex, partition, task, cancelled), executor));
        }

        await(scenario, futures, cancelled);
    }

    private <T> void runPartition(String scenario, int partitionIndex, List<T> partition,
                                  PartitionTask<T> task, AtomicBoolean cancelled) {
        long startNanos = System.nanoTime();
        try (MDC.MDCCloseable ignored = ProcessTraceContext.put(ProcessTraceContext.PARTITION, partitionIndex)) {
            log.info("THREAD_TRACE event=partition-start scenario={} partition={} size={} thread={} threadId={}",
                    scenario, partitionIndex, partition.size(), ProcessTraceContext.threadName(),
                    ProcessTraceContext.threadId());
            try {
                task.run(partition, cancelled::get);
                if (cancelled.get()) {
                    log.warn("THREAD_TRACE event=partition-cancelled scenario={} partition={} thread={} threadId={} elapsedMs={}",
                            scenario, partitionIndex, ProcessTraceContext.threadName(),
                            ProcessTraceContext.threadId(), nanosToMillis(System.nanoTime() - startNanos));
                    return;
                }
                log.info("THREAD_TRACE event=partition-end scenario={} partition={} size={} thread={} threadId={} elapsedMs={}",
                        scenario, partitionIndex, partition.size(), ProcessTraceContext.threadName(),
                        ProcessTraceContext.threadId(), nanosToMillis(System.nanoTime() - startNanos));
            } catch (RuntimeException | Error ex) {
                cancelled.set(true);
                log.error("THREAD_TRACE event=partition-error scenario={} partition={} thread={} threadId={} elapsedMs={} motivo={}",
                        scenario, partitionIndex, ProcessTraceContext.threadName(), ProcessTraceContext.threadId(),
                        nanosToMillis(System.nanoTime() - startNanos), ex.getMessage(), ex);
                throw ex;
            }
        }
    }

    private void await(String scenario, List<CompletableFuture<Void>> futures, AtomicBoolean cancelled) {
        try {
            CompletableFuture.allOf(futures.toArray(CompletableFuture[]::new))
                    .get(propertiesConfig.getPartitionAwaitTimeoutMs(), TimeUnit.MILLISECONDS);
        } catch (InterruptedException ex) {
            cancelled.set(true);
            Thread.currentThread().interrupt();
            throw new IllegalStateException("Proceso " + scenario + " interrumpido", ex);
        } catch (TimeoutException ex) {
            cancelled.set(true);
            throw new IllegalStateException("Timeout esperando particiones de " + scenario, ex);
        } catch (ExecutionException ex) {
            cancelled.set(true);
            throw unwrap(ex.getCause());
        }
    }

    static <T> List<List<T>> partition(List<T> items, int parts) {
        int size = (items.size() + parts - 1) / parts;
        List<List<T>> partitions = new ArrayList<>(parts);
        for (int from = 0; from < items.size(); from += size) {
            partitions.add(items.subList(from, Math.min(from + size, items.size())));
        }
        return partitions;
    }

    private static RuntimeException unwrap(Throwable throwable) {
        Throwable cause = throwable instanceof CompletionException && throwable.getCause() != null
                ? throwable.getCause()
                : throwable;
        if (cause instanceof RuntimeException runtimeException) {
            return runtimeException;
        }
        if (cause instanceof Error error) {
            throw error;
        }
        return new IllegalStateException(cause);
    }

    private static long nanosToMillis(long nanos) {
        return nanos / 1_000_000L;
    }
}

```

## src/main/java/com/nubo/definitive/assignment/api/service/impl/RegisteredSidesBatchProcessor.java

```java
package com.nubo.definitive.assignment.api.service.impl;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.concurrent.atomic.AtomicLong;
import java.util.concurrent.atomic.LongAdder;
import java.util.function.Function;
import java.util.stream.Collectors;

import org.slf4j.MDC;
import org.springframework.stereotype.Service;

import com.nubo.definitive.assignment.api.application.properties.PropertiesConfig;
import com.nubo.definitive.assignment.api.application.util.ProcessTraceContext;
import com.nubo.definitive.assignment.api.client.fractional.model.dto.request.BatchCreateFractionInDto;
import com.nubo.definitive.assignment.api.client.fractional.model.dto.request.BatchCreateFractionItemInDto;
import com.nubo.definitive.assignment.api.client.fractional.model.dto.request.CreateFractionInDto;
import com.nubo.definitive.assignment.api.client.fractional.model.dto.response.BatchCreateFractionItemOutDto;
import com.nubo.definitive.assignment.api.client.fractional.model.dto.response.BatchCreateFractionOutDto;
import com.nubo.definitive.assignment.api.client.fractional.service.FractionationClient;
import com.nubo.definitive.assignment.api.models.entity.ParticipantAccountEntity;
import com.nubo.definitive.assignment.api.models.entity.ParticipantEntity;
import com.nubo.definitive.assignment.api.models.entity.TradeEntity;
import com.nubo.definitive.assignment.api.models.entity.TypeEntity;
import com.nubo.definitive.assignment.api.models.enums.DepositoryEnum;
import com.nubo.definitive.assignment.api.models.enums.FractionOperationTypeEnum;
import com.nubo.definitive.assignment.api.models.enums.SideEnum;
import com.nubo.definitive.assignment.api.models.enums.SourceQuotePositionEnum;
import com.nubo.definitive.assignment.api.repository.ParticipantAccountRepository;
import com.nubo.definitive.assignment.api.repository.TradeRepository;

import lombok.extern.slf4j.Slf4j;

/**
 * Escenario 1 (puntas REGISTERED) por lotes.
 *
 * <p>Por chunk de {@code batch-write-size} trades se resuelven en bloque las cuentas participante y las cuentas
 * de caja. Cada hilo del pool arma las DTOs de su partición (mismas DTOs y validaciones del flujo 1 a 1) y las envía
 * a {@code /fractionation/batch} en sub-lotes de {@code fractionation-batch-size}, con {@code operationType=A}
 * (equivalente a {@code /create-fractions}). BUY termina completo antes de consultar y procesar SELL.</p>
 */
@Service
@Slf4j
public class RegisteredSidesBatchProcessor {

    private static final int PROGRESS_LOG_INTERVAL = 1000;
    private static final Comparator<ParticipantAccountEntity> LOWEST_ID =
            Comparator.comparing(ParticipantAccountEntity::getId, Comparator.nullsLast(Comparator.naturalOrder()));

    private final TradeRepository tradeRepository;
    private final ParticipantAccountRepository participantAccountRepository;
    private final FractionationClient fractionationClient;
    private final CashAccountBatchResolver cashAccountBatchResolver;
    private final ParallelPartitionRunner partitionRunner;
    private final PropertiesConfig propertiesConfig;

    public RegisteredSidesBatchProcessor(TradeRepository tradeRepository,
                                         ParticipantAccountRepository participantAccountRepository,
                                         FractionationClient fractionationClient,
                                         CashAccountBatchResolver cashAccountBatchResolver,
                                         ParallelPartitionRunner partitionRunner,
                                         PropertiesConfig propertiesConfig) {
        this.tradeRepository = tradeRepository;
        this.participantAccountRepository = participantAccountRepository;
        this.fractionationClient = fractionationClient;
        this.cashAccountBatchResolver = cashAccountBatchResolver;
        this.partitionRunner = partitionRunner;
        this.propertiesConfig = propertiesConfig;
    }

    public void process(Long countryId, Long registeredStatusId, Long contadoTypeId, String equityMarketId) {
        RegisteredSidesMetrics metrics = new RegisteredSidesMetrics();
        long totalStartNanos = System.nanoTime();
        LocalDate today = LocalDate.now();

        long queryStartNanos = System.nanoTime();
        List<TradeEntity> buyTrades =
                tradeRepository.findRegisteredBuyTradesForExecutionDateAndType(
                        registeredStatusId, today, contadoTypeId, equityMarketId
                );
        metrics.buyQueryNanos = System.nanoTime() - queryStartNanos;
        metrics.buyCandidateCount = buyTrades.size();

        long processBuyStartNanos = System.nanoTime();
        processSide(countryId, SideEnum.BUY, buyTrades, metrics, totalStartNanos);
        metrics.processBuyNanos = System.nanoTime() - processBuyStartNanos;

        queryStartNanos = System.nanoTime();
        List<TradeEntity> sellTrades =
                tradeRepository.findRegisteredSellTradesForExecutionDateAndType(
                        registeredStatusId, today, contadoTypeId, equityMarketId
                );
        metrics.sellQueryNanos = System.nanoTime() - queryStartNanos;
        metrics.sellCandidateCount = sellTrades.size();

        long processSellStartNanos = System.nanoTime();
        processSide(countryId, SideEnum.SELL, sellTrades, metrics, totalStartNanos);
        metrics.processSellNanos = System.nanoTime() - processSellStartNanos;

        long totalMs = nanosToMillis(System.nanoTime() - totalStartNanos);
        int processed = metrics.processedCount.get();
        log.info("PERF_ASSIGNMENT service=asignacion-definitiva-auto operation=processRegisteredSides countryId={} result={} buyCandidateCount={} sellCandidateCount={} processedCount={} successCount={} failureCount={} fractionationRestCount={} queryBuyMs={} processBuyMs={} querySellMs={} processSellMs={} fractionationRestTotalMs={} fractionationRestAvgMs={} fractionationRestMinMs={} fractionationRestMaxMs={} fractionationBatchSize={} fractionationBatchItems={} threads={} throughputOpsSec={} totalMs={}",
                countryId, metrics.failureCount.sum() == 0 ? "SUCCESS" : "ERROR", metrics.buyCandidateCount,
                metrics.sellCandidateCount, processed, metrics.successCount.sum(), metrics.failureCount.sum(),
                metrics.fractionationRestCount.sum(), nanosToMillis(metrics.buyQueryNanos), nanosToMillis(metrics.processBuyNanos),
                nanosToMillis(metrics.sellQueryNanos), nanosToMillis(metrics.processSellNanos),
                nanosToMillis(metrics.fractionationRestTotalNanos.sum()), metrics.fractionationAverageMs(),
                metrics.fractionationMinMs(), metrics.fractionationMaxMs(),
                Math.max(1, propertiesConfig.getFractionationBatchSize()), metrics.fractionationItemCount.sum(),
                partitionRunner.threads(),
                throughput(processed, totalMs), totalMs);
    }

    private void processSide(Long countryId,
                             SideEnum side,
                             List<TradeEntity> trades,
                             RegisteredSidesMetrics metrics,
                             long totalStartNanos) {

        List<TradeEntity> validTrades = trades.stream()
                .filter(trade -> isValidClearingDate(trade.getClearingDate()))
                .toList();

        String scenario = "registered-sides-" + side.name();
        int chunkSize = Math.max(1, propertiesConfig.getBatchWriteSize());
        int chunkIndex = 0;

        for (int from = 0; from < validTrades.size(); from += chunkSize) {
            List<TradeEntity> chunk = validTrades.subList(from, Math.min(from + chunkSize, validTrades.size()));
            try (MDC.MDCCloseable ignored = ProcessTraceContext.put(ProcessTraceContext.CHUNK, chunkIndex)) {
                long chunkStartNanos = System.nanoTime();
                AccountLookup accounts = prefetchAccounts(chunk, side);
                long prefetchMs = nanosToMillis(System.nanoTime() - chunkStartNanos);

                partitionRunner.run(scenario, chunk, (partition, cancelled) ->
                        processPartition(countryId, side, partition, accounts, metrics, totalStartNanos, cancelled));

                log.info("THREAD_TRACE event=chunk scenario={} chunk={} trades={} prefetchMs={} totalMs={}",
                        scenario, chunkIndex, chunk.size(), prefetchMs,
                        nanosToMillis(System.nanoTime() - chunkStartNanos));
            }
            chunkIndex++;
        }
    }

    private void processPartition(Long countryId,
                                  SideEnum side,
                                  List<TradeEntity> partition,
                                  AccountLookup accounts,
                                  RegisteredSidesMetrics metrics,
                                  long totalStartNanos,
                                  java.util.function.BooleanSupplier cancelled) {
        List<PreparedFraction> prepared = new ArrayList<>(partition.size());

        for (TradeEntity trade : partition) {
            if (cancelled.getAsBoolean()) {
                return;
            }
            metrics.processedCount.incrementAndGet();
            try {
                log.info("Procesando {} REGISTERED | tradeId={}", side.name(), trade.getId());

                prepared.add(new PreparedFraction(trade,
                        buildCreateFractionRequest(trade, participant(trade, side), side.getValue(), accounts)));

            } catch (Exception ex) {
                metrics.failureCount.increment();
                log.error("Error procesando {} REGISTERED | tradeId={} | motivo={}", side.name(), trade.getId(), ex.getMessage(), ex);
            }
        }

        int batchSize = Math.max(1, propertiesConfig.getFractionationBatchSize());
        List<Long> fractionedTradeIds = new ArrayList<>(prepared.size());

        for (int from = 0; from < prepared.size(); from += batchSize) {
            if (cancelled.getAsBoolean()) {
                return;
            }
            List<PreparedFraction> batch = prepared.subList(from, Math.min(from + batchSize, prepared.size()));
            fractionedTradeIds.addAll(sendFractionationBatch(side, batch, metrics));
            logProgressIfNeeded(countryId, metrics, totalStartNanos);
        }

        logPostFractionation(fractionedTradeIds);
    }

    /**
     * Una llamada a {@code /fractionation/batch} por sub-lote. Cada item se evalúa por separado; si la llamada
     * completa falla o la respuesta no corresponde al lote, todos sus trades quedan como fallidos (sin reintento
     * individual: siguen en REGISTERED y los toma la siguiente ejecución).
     *
     * @return tradeIds fraccionados con éxito
     */
    private List<Long> sendFractionationBatch(SideEnum side, List<PreparedFraction> batch, RegisteredSidesMetrics metrics) {
        String batchId = UUID.randomUUID().toString();
        List<BatchCreateFractionItemInDto> items = new ArrayList<>(batch.size());
        for (PreparedFraction item : batch) {
            items.add(BatchCreateFractionItemInDto.builder()
                    .itemId(itemId(item.trade(), side))
                    .tradeId(item.trade().getId())
                    .sideId(side.getValue())
                    .operationType(FractionOperationTypeEnum.ASSIGNMENT.getValue())
                    .fractions(item.fractions())
                    .build());
        }

        BatchCreateFractionOutDto response;
        long startNanos = System.nanoTime();
        try {
            response = fractionationClient.createFractionsBatch(
                    BatchCreateFractionInDto.builder().batchId(batchId).items(items).build());
        } catch (Exception ex) {
            log.error("Fallo batch de fraccionamiento | batchId={} items={} | motivo={}", batchId, batch.size(), ex.getMessage(), ex);
            failAll(side, batch, "Fallo batch de fraccionamiento batchId=" + batchId + ": " + ex.getMessage(), metrics);
            return List.of();
        } finally {
            metrics.recordFractionation(System.nanoTime() - startNanos, batch.size());
        }

        if (response == null || response.getItems() == null || !Objects.equals(batchId, response.getBatchId())) {
            log.error("Respuesta batch de fraccionamiento inválida | batchId={} responseBatchId={} items={}",
                    batchId, response == null ? null : response.getBatchId(), batch.size());
            failAll(side, batch, "Respuesta batch de fraccionamiento inválida batchId=" + batchId, metrics);
            return List.of();
        }

        Map<String, BatchCreateFractionItemOutDto> resultByItemId = new HashMap<>();
        for (BatchCreateFractionItemOutDto result : response.getItems()) {
            if (result != null && result.getItemId() != null) {
                resultByItemId.putIfAbsent(result.getItemId(), result);
            }
        }

        List<Long> succeeded = new ArrayList<>(batch.size());
        int failed = 0;
        for (PreparedFraction item : batch) {
            TradeEntity trade = item.trade();
            BatchCreateFractionItemOutDto result = resultByItemId.get(itemId(trade, side));

            if (result == null
                    || !Objects.equals(trade.getId(), result.getTradeId())
                    || !Objects.equals(side.getValue(), result.getSideId())) {
                failed++;
                metrics.failureCount.increment();
                log.error("Error procesando {} REGISTERED | tradeId={} | motivo={}", side.name(), trade.getId(),
                        "Item ausente o inconsistente en respuesta batch batchId=" + batchId);
                continue;
            }

            if (Boolean.TRUE.equals(result.getSuccess())) {
                succeeded.add(trade.getId());
                metrics.successCount.increment();
            } else {
                failed++;
                metrics.failureCount.increment();
                log.error("Error procesando {} REGISTERED | tradeId={} | motivo={} | errorCode={} | batchId={}",
                        side.name(), trade.getId(), result.getErrorMessage(), result.getErrorCode(), batchId);
            }
        }

        log.info("THREAD_TRACE event=fractionation-batch side={} batchId={} items={} success={} failure={} thread={} threadId={} elapsedMs={}",
                side.name(), batchId, batch.size(), succeeded.size(), failed, ProcessTraceContext.threadName(),
                ProcessTraceContext.threadId(), nanosToMillis(System.nanoTime() - startNanos));
        return succeeded;
    }

    private static void failAll(SideEnum side, List<PreparedFraction> batch, String reason, RegisteredSidesMetrics metrics) {
        for (PreparedFraction item : batch) {
            metrics.failureCount.increment();
            log.error("Error procesando {} REGISTERED | tradeId={} | motivo={}", side.name(), item.trade().getId(), reason);
        }
    }

    private static String itemId(TradeEntity trade, SideEnum side) {
        return trade.getId() + "-" + side.getValue();
    }

    /**
     * Reemplaza el {@code findById} por trade del log de control post-fraccionamiento por un {@code findAllById}.
     */
    private void logPostFractionation(List<Long> tradeIds) {
        if (tradeIds.isEmpty()) {
            return;
        }
        try {
            tradeRepository.findAllById(tradeIds).forEach(t ->
                    log.info("DEBUG post-fraccionamiento tradeId={} buyStatusId={} sellStatusId={}",
                            t.getId(), t.getBuyStatus().getId(), t.getSellStatus().getId()));
        } catch (RuntimeException ex) {
            log.warn("No se pudo leer estado post-fraccionamiento | trades={} | motivo={}", tradeIds.size(), ex.getMessage(), ex);
        }
    }

    private List<CreateFractionInDto> buildCreateFractionRequest(
            TradeEntity trade,
            ParticipantEntity participant,
            String sideId,
            AccountLookup accounts
    ) {

        TypeEntity sourceQuoteType = sourceQuoteType(trade, sideId);

        ParticipantAccountEntity account =
                accounts.participantAccount(
                        participant.getId(),
                        sourceQuoteType
                );

        boolean isOwnPosition =
                SourceQuotePositionEnum.OWN_POSITION.getDescription()
                        .equalsIgnoreCase(sourceQuoteType.getDescription());

        BigDecimal cashAccount = accounts.cashAccounts().get(participant.getId());

        CreateFractionInDto dto = CreateFractionInDto.builder()
                .investorAccountId(null)
                .participantAccountId(account.getId())
                .directDepositorId(null)
                .fiduciarySpecialist(Boolean.FALSE)
                .sourceQuoteTypeId(sourceQuoteType.getId())
                .reference("Asignación Definitiva Automática")
                .fractionQuantity(trade.getQuantity())
                .commissionPercentage(BigDecimal.ZERO)
                .valTax(BigDecimal.ZERO)
                .haveAssignmentMark(isOwnPosition ? Boolean.TRUE : null)
                .haveAutomaticMark(Boolean.TRUE)
                .cashAccount(cashAccount)
                .build();

        return List.of(dto);
    }

    /**
     * Una query por tipo de cuenta para todo el chunk. Por participante gana la de menor id, igual que
     * {@code findFirst...OrderByIdAsc}. Un fallo de la query se relanza al resolver cada trade.
     */
    private AccountLookup prefetchAccounts(List<TradeEntity> chunk, SideEnum side) {
        Set<Long> ownParticipantIds = new LinkedHashSet<>();
        Set<Long> ownOriginTypeIds = new LinkedHashSet<>();
        Set<Long> residualParticipantIds = new LinkedHashSet<>();
        Set<Long> allParticipantIds = new LinkedHashSet<>();

        for (TradeEntity trade : chunk) {
            ParticipantEntity participant = participant(trade, side);
            TypeEntity sourceQuoteType = sourceQuoteType(trade, side.getValue());
            if (participant == null || participant.getId() == null) {
                continue;
            }
            allParticipantIds.add(participant.getId());
            if (sourceQuoteType == null) {
                continue;
            }
            String description = sourceQuoteType.getDescription();
            if (SourceQuotePositionEnum.OWN_POSITION.getDescription().equals(description)) {
                ownParticipantIds.add(participant.getId());
                ownOriginTypeIds.add(sourceQuoteType.getId());
            } else if (SourceQuotePositionEnum.THIRD_PARTY.getDescription().equals(description)
                    || SourceQuotePositionEnum.COLLECTIVE_PORTFOLIO.getDescription().equals(description)) {
                residualParticipantIds.add(participant.getId());
            }
        }

        CashAccountBatchResolver.CashAccounts cashAccounts = cashAccountBatchResolver.resolve(allParticipantIds);

        try {
            Map<OwnAccountKey, ParticipantAccountEntity> ownAccounts = ownParticipantIds.isEmpty()
                    ? Map.of()
                    : participantAccountRepository
                            .findByParticipant_IdInAndOriginType_IdInAndDepository_Id(
                                    ownParticipantIds, ownOriginTypeIds, DepositoryEnum.DVL.getId())
                            .stream()
                            .filter(account -> account.getParticipant() != null && account.getOriginType() != null)
                            .collect(Collectors.toMap(
                                    account -> new OwnAccountKey(account.getParticipant().getId(), account.getOriginType().getId()),
                                    Function.identity(),
                                    (a, b) -> LOWEST_ID.compare(a, b) <= 0 ? a : b));

            Map<Long, ParticipantAccountEntity> residualAccounts = residualParticipantIds.isEmpty()
                    ? Map.of()
                    : participantAccountRepository
                            .findByParticipant_IdInAndIndResidualTrue(residualParticipantIds)
                            .stream()
                            .filter(account -> account.getParticipant() != null)
                            .collect(Collectors.toMap(
                                    account -> account.getParticipant().getId(),
                                    Function.identity(),
                                    (a, b) -> LOWEST_ID.compare(a, b) <= 0 ? a : b));

            return new AccountLookup(ownAccounts, residualAccounts, cashAccounts, null);
        } catch (RuntimeException ex) {
            log.warn("Fallo prefetch de cuentas participante, cada trade reporta el error | motivo={}", ex.getMessage(), ex);
            return new AccountLookup(Map.of(), Map.of(), cashAccounts, ex);
        }
    }

    private void logProgressIfNeeded(Long countryId, RegisteredSidesMetrics metrics, long totalStartNanos) {
        long done = metrics.successCount.sum() + metrics.failureCount.sum();
        long bucket = done / PROGRESS_LOG_INTERVAL;
        if (bucket == 0 || metrics.lastProgressBucket.getAndAccumulate(bucket, Math::max) >= bucket) {
            return;
        }
        int processed = metrics.processedCount.get();
        long totalMs = nanosToMillis(System.nanoTime() - totalStartNanos);
        log.info("PERF_ASSIGNMENT_PROGRESS service=asignacion-definitiva-auto operation=processRegisteredSides countryId={} processedCount={} successCount={} failureCount={} throughputOpsSec={} elapsedMs={} thread={}",
                countryId, processed, metrics.successCount.sum(), metrics.failureCount.sum(),
                throughput(processed, totalMs), totalMs, ProcessTraceContext.threadName());
    }

    private static TypeEntity sourceQuoteType(TradeEntity trade, String sideId) {
        return SideEnum.BUY.getValue().equals(sideId)
                ? trade.getSourceQuoteBuyType()
                : trade.getSourceQuoteSellType();
    }

    private static ParticipantEntity participant(TradeEntity trade, SideEnum side) {
        return side == SideEnum.BUY ? trade.getParticipantBuy() : trade.getParticipantSell();
    }

    private static boolean isValidClearingDate(LocalDate clearingDate) {
        return !clearingDate.isAfter(LocalDate.now());
    }

    private static long nanosToMillis(long nanos) {
        return nanos / 1_000_000L;
    }

    private static double throughput(long processedCount, long totalMs) {
        return totalMs == 0L ? processedCount : processedCount * 1000.0 / totalMs;
    }

    private record OwnAccountKey(Long participantId, Long originTypeId) {
    }

    private record PreparedFraction(TradeEntity trade, List<CreateFractionInDto> fractions) {
    }

    /**
     * Mismas reglas y mensajes que {@code resolveParticipantAccount} del flujo 1 a 1.
     */
    private record AccountLookup(Map<OwnAccountKey, ParticipantAccountEntity> ownAccounts,
                                 Map<Long, ParticipantAccountEntity> residualAccounts,
                                 CashAccountBatchResolver.CashAccounts cashAccounts,
                                 RuntimeException prefetchError) {

        ParticipantAccountEntity participantAccount(Long participantId, TypeEntity sourceQuoteType) {

            String description = sourceQuoteType.getDescription();

            if (SourceQuotePositionEnum.OWN_POSITION.getDescription().equals(description)) {
                throwIfPrefetchFailed();
                ParticipantAccountEntity account = ownAccounts.get(new OwnAccountKey(participantId, sourceQuoteType.getId()));
                if (account == null) {
                    throw new RuntimeException("No se encontró cuenta propia para participantId=" + participantId);
                }
                return account;
            }

            if (SourceQuotePositionEnum.THIRD_PARTY.getDescription().equals(description)
                    || SourceQuotePositionEnum.COLLECTIVE_PORTFOLIO.getDescription().equals(description)) {
                throwIfPrefetchFailed();
                ParticipantAccountEntity account = residualAccounts.get(participantId);
                if (account == null) {
                    throw new RuntimeException("No se encontró cuenta residual para participantId=" + participantId);
                }
                return account;
            }

            throw new IllegalStateException(
                    "Origen de punta no soportado: " + description
            );
        }

        private void throwIfPrefetchFailed() {
            if (prefetchError != null) {
                throw prefetchError;
            }
        }
    }

    private static final class RegisteredSidesMetrics {
        private int buyCandidateCount;
        private int sellCandidateCount;
        private final AtomicInteger processedCount = new AtomicInteger();
        private final LongAdder successCount = new LongAdder();
        private final LongAdder failureCount = new LongAdder();
        private final LongAdder fractionationRestCount = new LongAdder();
        private long buyQueryNanos;
        private long sellQueryNanos;
        private long processBuyNanos;
        private long processSellNanos;
        private final LongAdder fractionationRestTotalNanos = new LongAdder();
        private final AtomicLong fractionationRestMinNanos = new AtomicLong(Long.MAX_VALUE);
        private final AtomicLong fractionationRestMaxNanos = new AtomicLong();
        private final LongAdder fractionationItemCount = new LongAdder();
        private final AtomicLong lastProgressBucket = new AtomicLong();

        /**
         * Una llamada REST a {@code /fractionation/batch}; {@code fractionationRestCount} cuenta llamadas, no trades.
         */
        private void recordFractionation(long elapsedNanos, int items) {
            fractionationRestCount.increment();
            fractionationItemCount.add(items);
            fractionationRestTotalNanos.add(elapsedNanos);
            fractionationRestMinNanos.accumulateAndGet(elapsedNanos, Math::min);
            fractionationRestMaxNanos.accumulateAndGet(elapsedNanos, Math::max);
        }

        private long fractionationAverageMs() {
            long count = fractionationRestCount.sum();
            return count == 0 ? 0L : nanosToMillis(fractionationRestTotalNanos.sum() / count);
        }

        private long fractionationMinMs() {
            return fractionationRestCount.sum() == 0 ? 0L : nanosToMillis(fractionationRestMinNanos.get());
        }

        private long fractionationMaxMs() {
            return nanosToMillis(fractionationRestMaxNanos.get());
        }
    }
}

```

## src/main/java/com/nubo/definitive/assignment/api/service/impl/RejectedFractionsServiceImpl.java

```java
package com.nubo.definitive.assignment.api.service.impl;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;

import com.nubo.definitive.assignment.api.application.util.TradeStatusHierarchyUtil;
import com.nubo.definitive.assignment.api.models.entity.ParticipantBankAccountEntity;
import com.nubo.definitive.assignment.api.models.enums.AssignModeEnum;
import com.nubo.definitive.assignment.api.models.enums.SourceQuotePositionEnum;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.github.benmanes.caffeine.cache.Cache;
import com.github.benmanes.caffeine.cache.Caffeine;
import com.nubo.definitive.assignment.api.models.entity.ParticipantAccountEntity;
import com.nubo.definitive.assignment.api.models.entity.ParticipantEntity;
import com.nubo.definitive.assignment.api.models.entity.SettlementEntity;
import com.nubo.definitive.assignment.api.models.entity.SideEntity;
import com.nubo.definitive.assignment.api.models.entity.StatusEntity;
import com.nubo.definitive.assignment.api.models.entity.TradeEntity;
import com.nubo.definitive.assignment.api.models.entity.TradeStatusHistoryEntity;
import com.nubo.definitive.assignment.api.models.entity.TypeEntity;
import com.nubo.definitive.assignment.api.models.enums.SideEnum;
import com.nubo.definitive.assignment.api.models.enums.SourceQuoteTypeEnum;
import com.nubo.definitive.assignment.api.models.enums.StatusEnum;
import com.nubo.definitive.assignment.api.repository.ParticipantAccountRepository;
import com.nubo.definitive.assignment.api.repository.SettlementRepository;
import com.nubo.definitive.assignment.api.repository.SideRepository;
import com.nubo.definitive.assignment.api.repository.StatusRepository;
import com.nubo.definitive.assignment.api.repository.TradeStatusHistoryRepository;
import com.nubo.definitive.assignment.api.service.CatalogCacheService;
import com.nubo.definitive.assignment.api.service.RejectedFractionsService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class RejectedFractionsServiceImpl implements RejectedFractionsService {

    private final SettlementRepository settlementRepository;
    private final SideRepository sideRepository;
    private final StatusRepository statusRepository;
    private final CatalogCacheService catalogCacheService;
    private final TradeStatusHistoryRepository tradeStatusHistoryRepository;
    private final ParticipantAccountRepository participantAccountRepository;

    private final Cache<String, StatusEntity> statusCache = Caffeine.newBuilder()
            .maximumSize(128)
            .expireAfterWrite(10, TimeUnit.MINUTES)
            .recordStats()
            .build();


    @Override
    @Transactional
    public void processRejectedFractions(TradeEntity trade, String sideId, AssignModeEnum mode) {
        log.info("Procesando fracciones RECHAZADAS para tradeId={}, sideId={}", trade.getId(), sideId);

        SideEntity side = sideRepository.findById(sideId)
                .orElseThrow(() -> new RuntimeException("Side no encontrado"));

        List<SettlementEntity> allSettlements =
                settlementRepository.findByTrade_IdAndSide_Id(trade.getId(), side.getId());

        List<SettlementEntity> rejected = allSettlements.stream()
                .filter(s -> Objects.equals(s.getStatus().getDescription(), StatusEnum.REJECTED.getDescription()))
                .collect(Collectors.toList());

        if (rejected.isEmpty()) {
            log.info("No hay fracciones RECHAZADAS para tradeId={}, sideId={}", trade.getId(), sideId);
            return;
        }

        if (mode == AssignModeEnum.INICIAL) {
            // Comportamiento actual, sin cambios: se actualiza cada fracción individualmente
            // preservando la información de inversionista existente.
            updateRejectedFractionsInicial(rejected);
        } else {
            // FINAL: todas las fracciones rechazadas se consolidan en 1 sola.
            consolidateRejectedFractionsFinal(trade, sideId, allSettlements, rejected);
        }

        SideEnum sideEnum = SideEnum.fromValue(sideId);
        assignSideStatus(trade, sideEnum);

        assignTradeStatusIfBothSidesAssigned(trade);
        createTradeHistoryIfAssigned(trade);

        log.info("Fracciones RECHAZADAS procesadas en tradeId={}, sideId={}, modo={}, cantidad={}",
                trade.getId(), sideId, mode, rejected.size());
    }

    private void updateRejectedFractionsInicial(List<SettlementEntity> rejected) {

        StatusEntity assignedStatus = getStatus(StatusEnum.ASSIGNED);
        LocalDateTime now = LocalDateTime.now();

        for (SettlementEntity fraction : rejected) {
            fraction.setStatus(assignedStatus);
            fraction.setLastModifyUser("SYSTEM");
            fraction.setLastModifyApplication("definitive-assignment-api");
            fraction.setLastModifyDate(now);
            fraction.setLastModifyIp("IP_01");
        }

        settlementRepository.saveAll(rejected);
    }

    private void consolidateRejectedFractionsFinal(
            TradeEntity trade,
            String sideId,
            List<SettlementEntity> allSettlements,
            List<SettlementEntity> rejected
    ) {

        List<SettlementEntity> nonRejected = allSettlements.stream()
                .filter(s -> !Objects.equals(s.getStatus().getDescription(), StatusEnum.REJECTED.getDescription()))
                .collect(Collectors.toList());

        SettlementEntity template = rejected.get(0);

        // IMPORTANTE: se capturan los valores del template ANTES de deleteAll+flush.
        // Tras el delete, la entidad queda en estado REMOVED y sus asociaciones lazy
        // pueden devolver proxies vacíos si se accede a ellas después.
        TradeEntity templateTrade = template.getTrade();
        SideEntity templateSide = template.getSide();
        ParticipantBankAccountEntity templateParticipantBankAccount = template.getParticipantBankAccount();
        var templateBankAccount = template.getBankAccount();
        var templateCustodian = template.getCustodian();
        var templateDirectDepositor = template.getDirectDepositor();
        var templateFicAdministrator = template.getFicAdministrator();
        var templateTradingSystem = template.getTradingSystem();
        var templateMarket = template.getMarket();
        var templateMatchDate = template.getMatchDate();
        var templateUniqueFractionId = template.getUniqueFractionId();
        var templateCustodianStatus = template.getCustodianStatus();
        var templateSettlementStatus = template.getSettlementStatus();
        var templateBloquingStatus = template.getBloquingStatus();
        var templateAfpFund = template.getAfpFund();
        var templateCommissionPercentage = template.getCommissionPercentage();
        var templateCommissionAmount = template.getCommissionAmount();
        var templateValTax = template.getValTax();
        var templateValTaxAmount = template.getValTaxAmount();
        var templateWithholdingTax = template.getWithholdingTax();
        var templateWithholdingTaxAmount = template.getWithholdingTaxAmount();
        var templateNetAmount = template.getNetAmount();
        var templateTransferValue = template.getTransferValue();
        var templateRepoRate = template.getRepoRate();
        var templateRepoAmount = template.getRepoAmount();
        var templateLatePenality = template.getLatePenality();
        var templateFundingAmount = template.getFundingAmount();
        var templateNetOutFlowTotal = template.getNetOutFlowTotal();
        var templateOutFlowTurnoverValue = template.getOutFlowTurnoverValue();
        var templateReturnTurnoverValue = template.getReturnTurnoverValue();
        var templateDeliveryVersusPaymentValue = template.getDeliveryVersusPaymentValue();
        var templateSettlementAmount = template.getSettlementAmount();
        var templateCapitalGainValue = template.getCapitalGainValue();
        var templateDisbursementValue = template.getDisbursementValue();
        var templateBrokerageService = template.getBrokerageService();
        var templateFractionVolumeDvd = template.getFractionVolumeDvd();
        var templateFractionVolumeDvp = template.getFractionVolumeDvp();
        var templateFractionVolumeLp = template.getFractionVolumeLp();

        BigDecimal totalQuantity = rejected.stream()
                .map(SettlementEntity::getFractionQuantity)
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        BigDecimal totalVolume = rejected.stream()
                .map(SettlementEntity::getFractionVolume)
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        int nextFraction = nonRejected.size() + 1;

        ParticipantAccountEntity resolvedAccount = resolveParticipantAccountFinal(trade, sideId);
        TypeEntity resolvedSourceQuoteType = resolveSourceQuoteTypeFinal(trade, sideId);
        StatusEntity assignedStatus = getStatus(StatusEnum.ASSIGNED);

        settlementRepository.deleteAll(rejected);
        settlementRepository.flush();

        SettlementEntity consolidated = SettlementEntity.builder()

                .trade(templateTrade)
                .side(templateSide)
                .fraction(nextFraction)

                .investor(null)
                .investorAccount(null)
                .participantAccount(resolvedAccount)
                .participantBankAccount(templateParticipantBankAccount)
                .bankAccount(templateBankAccount)
                .custodian(templateCustodian)
                .directDepositor(templateDirectDepositor)
                .ficAdministrator(templateFicAdministrator)
                .sourceQuoteType(resolvedSourceQuoteType)
                .tradingSystem(templateTradingSystem)
                .market(templateMarket)
                .matchDate(templateMatchDate)
                .uniqueFractionId(templateUniqueFractionId)
                .custodianStatus(templateCustodianStatus)
                .settlementStatus(templateSettlementStatus)
                .bloquingStatus(templateBloquingStatus)
                .afpFund(templateAfpFund)

                .commissionPercentage(templateCommissionPercentage)
                .commissionAmount(templateCommissionAmount)
                .valTax(templateValTax)
                .valTaxAmount(templateValTaxAmount)
                .withholdingTax(templateWithholdingTax)
                .withholdingTaxAmount(templateWithholdingTaxAmount)
                .netAmount(templateNetAmount)
                .transferValue(templateTransferValue)
                .repoRate(templateRepoRate)
                .repoAmount(templateRepoAmount)
                .latePenality(templateLatePenality)
                .fundingAmount(templateFundingAmount)
                .netOutFlowTotal(templateNetOutFlowTotal)
                .outFlowTurnoverValue(templateOutFlowTurnoverValue)
                .returnTurnoverValue(templateReturnTurnoverValue)
                .deliveryVersusPaymentValue(templateDeliveryVersusPaymentValue)
                .settlementAmount(templateSettlementAmount)
                .capitalGainValue(templateCapitalGainValue)
                .disbursementValue(templateDisbursementValue)
                .brokerageService(templateBrokerageService)

                .fractionVolumeDvd(templateFractionVolumeDvd)
                .fractionVolumeDvp(templateFractionVolumeDvp)
                .fractionVolumeLp(templateFractionVolumeLp)

                .fractionQuantity(totalQuantity)
                .fractionVolume(totalVolume)

                .status(assignedStatus)

                .lastModifyUser("SYSTEM")
                .lastModifyApplication("definitive-assignment-api")
                .lastModifyDate(LocalDateTime.now())
                .lastModifyIp("IP_01")

                .build();

        settlementRepository.save(consolidated);

        log.info("Fracciones RECHAZADAS consolidadas (FINAL) en tradeId={}, sideId={}, fraccion={}",
                trade.getId(), sideId, consolidated.getFraction());
    }

    private void assignSideStatus(TradeEntity trade, SideEnum sideEnum) {

        StatusEntity assignedStatus = getStatus(StatusEnum.ASSIGNED);

        if (sideEnum == SideEnum.BUY) {
            trade.setBuyStatus(assignedStatus);
            trade.setAssignmentMarkBuy(Boolean.TRUE);
        } else if (sideEnum == SideEnum.SELL) {
            trade.setSellStatus(assignedStatus);
            trade.setAssignmentMarkSell(Boolean.TRUE);
        }

        trade.setLastModifyUser("SYSTEM");
        trade.setLastModifyApplication("definitive-assignment-api");
        trade.setLastModifyDate(LocalDateTime.now());
        trade.setLastModifyIp("IP_01");
    }

    private void createTradeHistoryIfAssigned(TradeEntity trade) {

        if (!StatusEnum.ASSIGNED.getDescription()
                .equals(trade.getStatus().getDescription())) {
            return;
        }

        TradeStatusHistoryEntity history =
                TradeStatusHistoryEntity.builder()
                        .trade(trade)
                        .time(LocalDateTime.now())
                        .status(trade.getStatus())
                        .detail("Asignación automática nubo")
                        .lastModifyUser("SYSTEM")
                        .lastModifyApplication("definitive-assignment-api")
                        .lastModifyDate(LocalDateTime.now())
                        .lastModifyIp("IP_01")
                        .build();

        tradeStatusHistoryRepository.save(history);

        log.info(
                "TradeStatusHistory creado | tradeId={} | time={}",
                trade.getId(),
                history.getTime()
        );
    }

    private void assignTradeStatusIfBothSidesAssigned(TradeEntity trade) {

        StatusEnum targetStatusEnum =
                TradeStatusHierarchyUtil.lowestStatus(trade.getBuyStatus(), trade.getSellStatus());

        if (targetStatusEnum == null) {
            return;
        }

        int targetRank = TradeStatusHierarchyUtil.rankOf(targetStatusEnum);
        Integer currentRank = TradeStatusHierarchyUtil.rankOf(trade.getStatus());

        if (currentRank != null && currentRank >= targetRank) {
            return;
        }

        trade.setStatus(getStatus(targetStatusEnum));

        trade.setLastModifyUser("SYSTEM");
        trade.setLastModifyApplication("definitive-assignment-api");
        trade.setLastModifyDate(LocalDateTime.now());
        trade.setLastModifyIp("IP_01");

        log.info(
                "Trade {} STATUS actualizado a {} (buyStatus={}, sellStatus={})",
                trade.getId(), targetStatusEnum.getDescription(),
                trade.getBuyStatus().getDescription(), trade.getSellStatus().getDescription()
        );
    }

    private StatusEntity getStatus(StatusEnum statusEnum) {
        String key = statusEnum.getDescription() + "|" + statusEnum.getCategory();
        return statusCache.get(key, ignored ->
                statusRepository.findByDescriptionAndCategory(
                        statusEnum.getDescription(),
                        statusEnum.getCategory()
                ).orElseThrow(() -> new RuntimeException(
                        "Status " + statusEnum.getDescription() + " con categoría " + statusEnum.getCategory() + " no encontrado"))
        );
    }

    private TypeEntity getSourceQuoteType(SourceQuoteTypeEnum typeEnum) {
        return catalogCacheService.findTypeByDescriptionAndCategory(
                typeEnum.getDescription(),
                typeEnum.getCategory()
        ).orElseThrow(() -> new RuntimeException(
                "SourceQuoteType " + typeEnum.getDescription() +
                        " con categoría " + typeEnum.getCategory() + " no encontrado"
        ));
    }

    private TypeEntity resolveSourceQuoteTypeFinal(
            TradeEntity trade,
            String sideId
    ) {

        TypeEntity sourceQuoteType = SideEnum.BUY.getValue().equals(sideId)
                ? trade.getSourceQuoteBuyType()
                : trade.getSourceQuoteSellType();

        String description = sourceQuoteType.getDescription();

        if (SourceQuotePositionEnum.THIRD_PARTY.getDescription().equals(description)
                || SourceQuotePositionEnum.COLLECTIVE_PORTFOLIO.getDescription().equals(description)
                || SourceQuotePositionEnum.OWN_POSITION.getDescription().equals(description)) {
            return sourceQuoteType;
        }

        throw new IllegalStateException(
                "Origen de punta no soportado para asignación FINAL: " + description
        );
    }

    private ParticipantAccountEntity resolveParticipantAccountFinal(
            TradeEntity trade,
            String sideId
    ) {

        ParticipantEntity participant;
        TypeEntity sourceQuoteType;

        if (SideEnum.BUY.getValue().equals(sideId)) {
            participant = trade.getParticipantBuy();
            sourceQuoteType = trade.getSourceQuoteBuyType();
        } else {
            participant = trade.getParticipantSell();
            sourceQuoteType = trade.getSourceQuoteSellType();
        }

        String description = sourceQuoteType.getDescription();

        if (SourceQuotePositionEnum.THIRD_PARTY.getDescription().equals(description)
                || SourceQuotePositionEnum.COLLECTIVE_PORTFOLIO.getDescription().equals(description)) {

            return participantAccountRepository
                    .findFirstByParticipantIdAndIndResidualTrueOrderByIdAsc(participant.getId())
                    .orElseThrow(() ->
                            new RuntimeException(
                                    "No se encontró cuenta residual para participantId="
                                            + participant.getId()
                            )
                    );
        }

        if (SourceQuotePositionEnum.OWN_POSITION.getDescription().equals(description)) {

            Long originTypeId = getSourceQuoteType(SourceQuoteTypeEnum.SELF).getId();

            return participantAccountRepository
                    .findFirstByParticipantIdAndOriginType_IdOrderByIdAsc(participant.getId(), originTypeId)
                    .orElseThrow(() ->
                            new RuntimeException(
                                    "No se encontró cuenta propia para participantId="
                                            + participant.getId()
                            )
                    );
        }

        throw new IllegalStateException(
                "Origen de punta no soportado para asignación FINAL: " + description
        );
    }
}
```

## src/main/java/com/nubo/definitive/assignment/api/service/impl/batch/BatchChunk.java

```java
package com.nubo.definitive.assignment.api.service.impl.batch;

import java.util.List;

public record BatchChunk(int order,
                         int runOrder,
                         RejectType rejectType,
                         List<PackageProcessingContext> packages) {
    public BatchChunk {
        packages = List.copyOf(packages);
    }

    public List<Long> packageIds() {
        return packages.stream().map(PackageProcessingContext::packageId).toList();
    }
}

```

## src/main/java/com/nubo/definitive/assignment/api/service/impl/batch/BatchExecutionResult.java

```java
package com.nubo.definitive.assignment.api.service.impl.batch;

import java.util.List;

public record BatchExecutionResult(int plannedPackages,
                                   int planningIssueCount,
                                   int remoteSuccessCount,
                                   int functionalFailureCount,
                                   int technicalErrorCount,
                                   int notProcessedCount,
                                   int localSyncFailureCount,
                                   int chunksAttempted,
                                   boolean stopped,
                                   BatchStopReason stopReason,
                                   List<BatchItemFailure> itemFailures) {
    public BatchExecutionResult {
        itemFailures = List.copyOf(itemFailures);
    }
}

```

## src/main/java/com/nubo/definitive/assignment/api/service/impl/batch/BatchItemFailure.java

```java
package com.nubo.definitive.assignment.api.service.impl.batch;

import com.nubo.definitive.assignment.api.client.packaging.model.dto.response.BatchCustodyActionItemStatus;

public record BatchItemFailure(String batchId,
                               Long packageId,
                               BatchCustodyActionItemStatus status,
                               String errorCode,
                               String errorMessage) {
}

```

## src/main/java/com/nubo/definitive/assignment/api/service/impl/batch/BatchRun.java

```java
package com.nubo.definitive.assignment.api.service.impl.batch;

import java.util.List;

public record BatchRun(int order, RejectType rejectType, List<BatchChunk> chunks) {
    public BatchRun {
        chunks = List.copyOf(chunks);
    }
}

```

## src/main/java/com/nubo/definitive/assignment/api/service/impl/batch/BatchStopReason.java

```java
package com.nubo.definitive.assignment.api.service.impl.batch;

public enum BatchStopReason {
    NONE,
    REMOTE_TECHNICAL_ERROR,
    UNCERTAIN_CHUNK,
    LOCAL_SYNC_FAILURE,
    REQUEST_ERROR
}

```

## src/main/java/com/nubo/definitive/assignment/api/service/impl/batch/DefinitiveCustodyBatchChunker.java

```java
package com.nubo.definitive.assignment.api.service.impl.batch;

import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class DefinitiveCustodyBatchChunker {

    public List<BatchRun> createRuns(List<PackageProcessingContext> orderedPackages, int batchSize) {
        if (batchSize <= 0) {
            throw new IllegalStateException("config.application.performance.custody-reject-batch-size must be > 0");
        }

        List<BatchRun> runs = new ArrayList<>();
        List<PackageProcessingContext> currentRun = new ArrayList<>();
        RejectType currentType = null;
        int chunkOrder = 0;

        for (PackageProcessingContext packageContext : orderedPackages) {
            if (!packageContext.consistent() || packageContext.rejectType() == null) {
                throw new IllegalArgumentException("Only executable package contexts can be chunked");
            }
            if (currentType != null && currentType != packageContext.rejectType()) {
                runs.add(createRun(runs.size(), currentType, currentRun, batchSize, chunkOrder));
                chunkOrder += chunkCount(currentRun.size(), batchSize);
                currentRun = new ArrayList<>();
            }
            currentType = packageContext.rejectType();
            currentRun.add(packageContext);
        }

        if (!currentRun.isEmpty()) {
            runs.add(createRun(runs.size(), currentType, currentRun, batchSize, chunkOrder));
        }
        return List.copyOf(runs);
    }

    private BatchRun createRun(int runOrder,
                               RejectType type,
                               List<PackageProcessingContext> packages,
                               int batchSize,
                               int firstChunkOrder) {
        List<BatchChunk> chunks = new ArrayList<>();
        for (int from = 0; from < packages.size(); from += batchSize) {
            int to = Math.min(from + batchSize, packages.size());
            chunks.add(new BatchChunk(firstChunkOrder + chunks.size(), runOrder, type,
                    packages.subList(from, to)));
        }
        return new BatchRun(runOrder, type, chunks);
    }

    private int chunkCount(int size, int batchSize) {
        return (size + batchSize - 1) / batchSize;
    }
}

```

## src/main/java/com/nubo/definitive/assignment/api/service/impl/batch/DefinitiveCustodyBatchExecutor.java

```java
package com.nubo.definitive.assignment.api.service.impl.batch;

import com.nubo.definitive.assignment.api.client.packaging.exception.BatchPackagingHttpException;
import com.nubo.definitive.assignment.api.client.packaging.exception.BatchResponseContractException;
import com.nubo.definitive.assignment.api.client.packaging.model.dto.request.BatchCustodyRejectInDto;
import com.nubo.definitive.assignment.api.client.packaging.model.dto.request.BatchCustodyRejectItemInDto;
import com.nubo.definitive.assignment.api.client.packaging.model.dto.request.BatchPackageRejectInDto;
import com.nubo.definitive.assignment.api.client.packaging.model.dto.request.RejectPackageInDto;
import com.nubo.definitive.assignment.api.client.packaging.model.dto.response.BatchCustodyActionItemOutDto;
import com.nubo.definitive.assignment.api.client.packaging.model.dto.response.BatchCustodyActionItemStatus;
import com.nubo.definitive.assignment.api.client.packaging.model.dto.response.BatchCustodyActionOutDto;
import com.nubo.definitive.assignment.api.client.packaging.service.PackagingClient;
import com.nubo.definitive.assignment.api.exception.ServiceException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Slf4j
public class DefinitiveCustodyBatchExecutor {

    private final PackagingClient packagingClient;
    private final DefinitiveCustodyLocalUpdateWorker localUpdateWorker;

    public BatchExecutionResult execute(DefinitiveCustodyBatchPlan plan) {
        MutableResult result = new MutableResult(plan);
        boolean stop = false;

        // Previously an absent PACKAGE_DETAIL skipped only the HTTP call; the caller still overlaid this settlement.
        // Keep that behavior for this specific planning issue and isolate each local-only settlement.
        for (PlanningIssue issue : plan.planningIssues()) {
            if (issue.reason() != PlanningIssueReason.PACKAGE_DETAIL_NOT_FOUND) {
                continue;
            }
            for (SettlementReference reference : issue.affectedSettlements()) {
                try {
                    localUpdateWorker.synchronizeWithoutPackage(reference);
                } catch (RuntimeException ex) {
                    log.error("Local overlay failed for settlement without PACKAGE_DETAIL | tradeId={} sideId={} fraction={} reason={}",
                            reference.tradeId(), reference.sideId(), reference.fraction(), ex.getMessage(), ex);
                }
            }
        }

        for (BatchRun run : plan.runs()) {
            for (BatchChunk chunk : run.chunks()) {
                if (stop) {
                    break;
                }
                String batchId = UUID.randomUUID().toString();
                long startNanos = System.nanoTime();
                result.chunksAttempted++;
                ResponseEntity<BatchCustodyActionOutDto> response;
                try {
                    response = send(run.rejectType(), chunk, batchId);
                } catch (BatchResponseContractException ex) {
                    result.stopReason = BatchStopReason.UNCERTAIN_CHUNK;
                    stop = true;
                    log.error("Custody batch response contract invalid; chunk uncertain | batchId={} rejectType={} packageIds={} reason={}",
                            batchId, run.rejectType(), chunk.packageIds(), ex.getMessage(), ex);
                    logChunk(batchId, run.rejectType(), chunk, result, 0, 0, 0, startNanos, "UNCERTAIN_CHUNK");
                    continue;
                } catch (BatchPackagingHttpException ex) {
                    result.stopReason = ex.getStatusCode().value() == 400 || ex.getStatusCode().value() == 404
                            ? BatchStopReason.REQUEST_ERROR : BatchStopReason.UNCERTAIN_CHUNK;
                    stop = true;
                    log.error("Custody batch HTTP error; no local overlay | batchId={} rejectType={} packageIds={} status={}",
                            batchId, run.rejectType(), chunk.packageIds(), ex.getStatusCode().value(), ex);
                    logChunk(batchId, run.rejectType(), chunk, result, 0, 0, 0, startNanos,
                            result.stopReason.name());
                    continue;
                } catch (ServiceException ex) {
                    result.stopReason = BatchStopReason.UNCERTAIN_CHUNK;
                    stop = true;
                    log.error("Custody batch transport failure; chunk uncertain | batchId={} rejectType={} packageIds={} reason={}",
                            batchId, run.rejectType(), chunk.packageIds(), ex.getMessage(), ex);
                    logChunk(batchId, run.rejectType(), chunk, result, 0, 0, 0, startNanos, "UNCERTAIN_CHUNK");
                    continue;
                } catch (RuntimeException ex) {
                    result.stopReason = BatchStopReason.UNCERTAIN_CHUNK;
                    stop = true;
                    log.error("Unexpected custody batch client failure; chunk uncertain | batchId={} rejectType={} packageIds={} reason={}",
                            batchId, run.rejectType(), chunk.packageIds(), ex.getMessage(), ex);
                    logChunk(batchId, run.rejectType(), chunk, result, 0, 0, 0, startNanos, "UNCERTAIN_CHUNK");
                    continue;
                }

                int httpStatus = response == null ? -1 : response.getStatusCode().value();
                BatchCustodyActionOutDto body = response == null ? null : response.getBody();
                if (body == null || body.getResults() == null || (httpStatus != HttpStatus.OK.value()
                        && httpStatus != HttpStatus.BAD_GATEWAY.value())) {
                    result.stopReason = BatchStopReason.UNCERTAIN_CHUNK;
                    stop = true;
                    log.error("Custody batch returned unusable response; chunk uncertain | batchId={} rejectType={} packageIds={} status={}",
                            batchId, run.rejectType(), chunk.packageIds(), httpStatus);
                    logChunk(batchId, run.rejectType(), chunk, result, 0, 0, 0, startNanos, "UNCERTAIN_CHUNK");
                    continue;
                }

                int localSyncFailuresBefore = result.localSyncFailureCount;
                int chunkSuccess = 0;
                int chunkFunctionalFailure = 0;
                int chunkTechnicalError = 0;
                int chunkNotProcessed = 0;
                List<BatchCustodyActionItemOutDto> orderedResults = body.getResults().stream()
                        .sorted(Comparator.comparingInt(BatchCustodyActionItemOutDto::getIndex)).toList();
                for (BatchCustodyActionItemOutDto item : orderedResults) {
                    switch (item.getStatus()) {
                        case SUCCESS -> {
                            result.remoteSuccessCount++;
                            chunkSuccess++;
                            PackageProcessingContext packageContext = chunk.packages().get(item.getIndex());
                            try {
                                localUpdateWorker.synchronizePackage(packageContext);
                            } catch (RuntimeException ex) {
                                result.localSyncFailureCount++;
                                result.itemFailures.add(new BatchItemFailure(batchId, item.getPackageId(),
                                        BatchCustodyActionItemStatus.SUCCESS, "REMOTE_COMMITTED_LOCAL_SYNC_FAILED",
                                        ex.getMessage()));
                                log.error("REMOTE_COMMITTED_LOCAL_SYNC_FAILED | batchId={} packageId={} reason={}",
                                        batchId, item.getPackageId(), ex.getMessage(), ex);
                            }
                        }
                        case FUNCTIONAL_FAILURE -> {
                            result.functionalFailureCount++;
                            chunkFunctionalFailure++;
                            result.itemFailures.add(new BatchItemFailure(batchId, item.getPackageId(), item.getStatus(),
                                    item.getErrorCode(), item.getErrorMessage()));
                            log.warn("Custody batch functional failure | batchId={} packageId={} errorCode={} errorMessage={}",
                                    batchId, item.getPackageId(), item.getErrorCode(), item.getErrorMessage());
                        }
                        case TECHNICAL_ERROR -> {
                            result.technicalErrorCount++;
                            chunkTechnicalError++;
                            result.itemFailures.add(new BatchItemFailure(batchId, item.getPackageId(), item.getStatus(),
                                    item.getErrorCode(), item.getErrorMessage()));
                            log.error("Custody batch technical error; remote state uncertain | batchId={} packageId={} errorCode={} errorMessage={}",
                                    batchId, item.getPackageId(), item.getErrorCode(), item.getErrorMessage());
                        }
                        case NOT_PROCESSED -> {
                            result.notProcessedCount++;
                            chunkNotProcessed++;
                            result.itemFailures.add(new BatchItemFailure(batchId, item.getPackageId(), item.getStatus(),
                                    item.getErrorCode(), item.getErrorMessage()));
                            log.warn("Custody batch item not processed | batchId={} packageId={} errorCode={} errorMessage={}",
                                    batchId, item.getPackageId(), item.getErrorCode(), item.getErrorMessage());
                        }
                    }
                }

                boolean localSyncFailed = result.localSyncFailureCount > localSyncFailuresBefore;
                logChunk(batchId, run.rejectType(), chunk, result, chunkSuccess,
                        chunkFunctionalFailure, chunkTechnicalError, startNanos,
                        localSyncFailed ? BatchStopReason.LOCAL_SYNC_FAILURE.name() : "HTTP_" + httpStatus);
                if (localSyncFailed) {
                    result.stopReason = BatchStopReason.LOCAL_SYNC_FAILURE;
                    stop = true;
                } else if (httpStatus == HttpStatus.BAD_GATEWAY.value()) {
                    result.stopReason = BatchStopReason.REMOTE_TECHNICAL_ERROR;
                    stop = true;
                }
            }
            if (stop) {
                break;
            }
        }

        BatchExecutionResult finalResult = result.toResult();
        log.info("PERF_DEFINITIVE_REJECT_BATCH_SUMMARY packagesPlanned={} planningIssues={} chunksAttempted={} remoteSuccess={} functionalFailures={} technicalErrors={} notProcessed={} localSyncFailures={} stopped={} stopReason={}",
                finalResult.plannedPackages(), finalResult.planningIssueCount(), finalResult.chunksAttempted(),
                finalResult.remoteSuccessCount(), finalResult.functionalFailureCount(), finalResult.technicalErrorCount(),
                finalResult.notProcessedCount(), finalResult.localSyncFailureCount(), finalResult.stopped(),
                finalResult.stopReason());
        return finalResult;
    }

    private ResponseEntity<BatchCustodyActionOutDto> send(RejectType type, BatchChunk chunk, String batchId) {
        if (type == RejectType.REJECT) {
            BatchCustodyRejectInDto request = BatchCustodyRejectInDto.builder()
                    .batchId(batchId)
                    .items(chunk.packages().stream().map(context -> BatchCustodyRejectItemInDto.builder()
                            .packageId(context.packageId())
                            .rejectionReasonId(context.rejectionReasonId())
                            .otherReason(context.otherReason())
                            .custodianId(context.custodianId())
                            .build()).toList())
                    .build();
            log.info("Sending custody reject batch | batchId={} itemCount={}", batchId, request.getItems().size());
            return packagingClient.rejectBatch(request);
        }

        BatchPackageRejectInDto request = BatchPackageRejectInDto.builder()
                .batchId(batchId)
                .items(chunk.packages().stream().map(context -> RejectPackageInDto.builder()
                        .packageId(context.packageId()).build()).toList())
                .build();
        log.info("Sending custody package-reject batch | batchId={} itemCount={}", batchId, request.getItems().size());
        return packagingClient.rejectPackageBatch(request);
    }

    private void logChunk(String batchId, RejectType type, BatchChunk chunk, MutableResult result,
                          int success, int functionalFailure, int technicalError, long startNanos, String outcome) {
        int notProcessed = "UNCERTAIN_CHUNK".equals(outcome) || "REQUEST_ERROR".equals(outcome)
                ? 0 : (int) result.itemFailures.stream()
                .filter(failure -> batchId.equals(failure.batchId())
                        && failure.status() == BatchCustodyActionItemStatus.NOT_PROCESSED)
                .count();
        int localFailureDelta = (int) result.itemFailures.stream()
                .filter(failure -> batchId.equals(failure.batchId())
                        && "REMOTE_COMMITTED_LOCAL_SYNC_FAILED".equals(failure.errorCode()))
                .count();
        int settlementCount = chunk.packages().stream()
                .mapToInt(context -> context.eligibleSettlements().size()).sum();
        log.info("PERF_DEFINITIVE_REJECT_BATCH batchId={} rejectType={} itemCount={} settlementCount={} successCount={} functionalFailureCount={} technicalErrorCount={} notProcessedCount={} localSyncFailureCount={} durationMs={} outcome={}",
                batchId, type, chunk.packages().size(), settlementCount, success, functionalFailure,
                technicalError, notProcessed, localFailureDelta, (System.nanoTime() - startNanos) / 1_000_000L, outcome);
    }

    private static final class MutableResult {
        private final int plannedPackages;
        private final int planningIssueCount;
        private int remoteSuccessCount;
        private int functionalFailureCount;
        private int technicalErrorCount;
        private int notProcessedCount;
        private int localSyncFailureCount;
        private int chunksAttempted;
        private BatchStopReason stopReason = BatchStopReason.NONE;
        private final List<BatchItemFailure> itemFailures = new ArrayList<>();

        private MutableResult(DefinitiveCustodyBatchPlan plan) {
            plannedPackages = plan.executablePackages().size();
            planningIssueCount = plan.planningIssues().size();
        }

        private BatchExecutionResult toResult() {
            return new BatchExecutionResult(plannedPackages, planningIssueCount, remoteSuccessCount,
                    functionalFailureCount, technicalErrorCount, notProcessedCount, localSyncFailureCount,
                    chunksAttempted, stopReason != BatchStopReason.NONE, stopReason, itemFailures);
        }
    }
}

```

## src/main/java/com/nubo/definitive/assignment/api/service/impl/batch/DefinitiveCustodyBatchPlan.java

```java
package com.nubo.definitive.assignment.api.service.impl.batch;

import java.util.List;

public record DefinitiveCustodyBatchPlan(List<PackageProcessingContext> executablePackages,
                                         List<PackageProcessingContext> excludedPackages,
                                         List<PlanningIssue> planningIssues,
                                         List<BatchRun> runs,
                                         int batchSize) {
    public DefinitiveCustodyBatchPlan {
        executablePackages = List.copyOf(executablePackages);
        excludedPackages = List.copyOf(excludedPackages);
        planningIssues = List.copyOf(planningIssues);
        runs = List.copyOf(runs);
    }
}

```

## src/main/java/com/nubo/definitive/assignment/api/service/impl/batch/DefinitiveCustodyBatchPlanner.java

```java
package com.nubo.definitive.assignment.api.service.impl.batch;

import com.nubo.definitive.assignment.api.application.properties.PropertiesConfig;
import com.nubo.definitive.assignment.api.models.entity.PackageCustodianEntity;
import com.nubo.definitive.assignment.api.models.entity.PackageDetailEntity;
import com.nubo.definitive.assignment.api.models.entity.ParticipantEntity;
import com.nubo.definitive.assignment.api.models.entity.SettlementEntity;
import com.nubo.definitive.assignment.api.models.entity.StatusEntity;
import com.nubo.definitive.assignment.api.models.entity.TradeEntity;
import com.nubo.definitive.assignment.api.models.enums.SideEnum;
import com.nubo.definitive.assignment.api.repository.PackageCustodianRepository;
import com.nubo.definitive.assignment.api.repository.PackageDetailRepository;
import com.nubo.definitive.assignment.api.repository.SettlementRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.dao.IncorrectResultSizeDataAccessException;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;

@Component
@RequiredArgsConstructor
@Slf4j
public class DefinitiveCustodyBatchPlanner {

    private static final Long DEFAULT_REJECTION_REASON_ID = 2L;

    private final SettlementRepository settlementRepository;
    private final PackageDetailRepository packageDetailRepository;
    private final PackageCustodianRepository packageCustodianRepository;
    private final PropertiesConfig propertiesConfig;
    private final DefinitiveCustodyBatchChunker chunker;

    /**
     * Builds a read-only plan in BUY trade/settlement order followed by SELL trade/settlement order.
     * The caller supplies the same candidate trades and status ids used by scenario 2.
     */
    public DefinitiveCustodyBatchPlan prepare(List<TradeEntity> buyTrades,
                                              List<TradeEntity> sellTrades,
                                              Collection<Long> movementStatusIds,
                                              Long transferredPackageStatusId) {
        Integer configuredBatchSize = propertiesConfig.getCustodyRejectBatchSize();
        if (configuredBatchSize == null || configuredBatchSize <= 0) {
            throw new IllegalStateException("config.application.performance.custody-reject-batch-size must be > 0");
        }
        int batchSize = configuredBatchSize;
        if (transferredPackageStatusId == null) {
            throw new IllegalArgumentException("transferredPackageStatusId is required to determine package routing");
        }

        List<TradeEntity> validBuyTrades = validClearingDateTrades(buyTrades);
        List<TradeEntity> validSellTrades = validClearingDateTrades(sellTrades);
        List<PlanningIssue> looseIssues = new ArrayList<>();
        Map<Long, List<SettlementEntity>> settlementsByTrade = new HashMap<>();
        loadSettlementsByTrade(validBuyTrades, settlementsByTrade, looseIssues, SideEnum.BUY);
        loadSettlementsByTrade(validSellTrades, settlementsByTrade, looseIssues, SideEnum.SELL);
        LinkedHashMap<Long, PackageAccumulator> byPackage = new LinkedHashMap<>();
        int[] packageOrder = {0};

        collectSide(validBuyTrades, SideEnum.BUY, movementStatusIds, transferredPackageStatusId,
                settlementsByTrade, byPackage, looseIssues, packageOrder);
        collectSide(validSellTrades, SideEnum.SELL, movementStatusIds, transferredPackageStatusId,
                settlementsByTrade, byPackage, looseIssues, packageOrder);

        List<PackageProcessingContext> allContexts = byPackage.values().stream()
                .map(PackageAccumulator::toContext)
                .toList();
        List<PackageProcessingContext> executable = allContexts.stream()
                .filter(PackageProcessingContext::consistent)
                .toList();
        List<PackageProcessingContext> excluded = allContexts.stream()
                .filter(context -> !context.consistent())
                .toList();

        List<PlanningIssue> issues = new ArrayList<>(looseIssues);
        for (PackageProcessingContext context : excluded) {
            for (PlanningIssueReason reason : context.issueReasons()) {
                issues.add(new PlanningIssue(context.packageId(), reason, context.eligibleSettlements()));
            }
        }
        issues.forEach(issue -> log.warn("Custody batch package preparation issue | packageId={} | reason={} | settlementCount={}",
                issue.packageId(), issue.reason(), issue.affectedSettlements().size()));

        List<BatchRun> runs = chunker.createRuns(executable, batchSize);
        return new DefinitiveCustodyBatchPlan(executable, excluded, issues, runs, batchSize);
    }

    private void collectSide(List<TradeEntity> trades,
                             SideEnum expectedSide,
                             Collection<Long> movementStatusIds,
                             Long transferredPackageStatusId,
                             Map<Long, List<SettlementEntity>> settlementsByTrade,
                             LinkedHashMap<Long, PackageAccumulator> byPackage,
                             List<PlanningIssue> looseIssues,
                             int[] packageOrder) {
        for (TradeEntity trade : trades) {
            for (SettlementEntity settlement : settlementsByTrade.getOrDefault(trade.getId(), List.of())) {
                if (!expectedSide.getValue().equals(settlement.getSide().getId())) {
                    continue;
                }
                if (settlement.getCustodianStatus() == null
                        || !movementStatusIds.contains(settlement.getCustodianStatus().getId())) {
                    continue;
                }

                SettlementReference reference = reference(settlement, trade, expectedSide);
                PackageDetailEntity detail;
                try {
                    detail = packageDetailRepository.findByTradeIdAndSideIdAndFraction(
                            settlement.getTrade().getId(), settlement.getSide().getId(), settlement.getFraction())
                            .orElse(null);
                } catch (IncorrectResultSizeDataAccessException ex) {
                    looseIssues.add(new PlanningIssue(null, PlanningIssueReason.PACKAGE_DETAIL_AMBIGUOUS,
                            List.of(reference)));
                    continue;
                } catch (RuntimeException ex) {
                    looseIssues.add(new PlanningIssue(null, PlanningIssueReason.PACKAGE_DETAIL_LOOKUP_FAILED,
                            List.of(reference)));
                    log.error("Error resolving PACKAGE_DETAIL; settlement excluded | tradeId={} sideId={} fraction={} reason={}",
                            reference.tradeId(), reference.sideId(), reference.fraction(), ex.getMessage(), ex);
                    continue;
                }

                if (detail == null) {
                    looseIssues.add(new PlanningIssue(null, PlanningIssueReason.PACKAGE_DETAIL_NOT_FOUND,
                            List.of(reference)));
                    continue;
                }
                Long packageId = detail.getPackageCustodianId();
                if (packageId == null) {
                    looseIssues.add(new PlanningIssue(null, PlanningIssueReason.PACKAGE_ID_MISSING,
                            List.of(reference)));
                    continue;
                }

                PackageAccumulator context = byPackage.get(packageId);
                boolean firstAppearance = context == null;
                if (firstAppearance) {
                    context = new PackageAccumulator(packageId, packageOrder[0]++);
                    byPackage.put(packageId, context);
                    resolveRouting(context, transferredPackageStatusId);
                }
                context.addSettlement(reference, settlement.getCustodian(), detail.getCustodianId());
            }
        }
    }

    private void resolveRouting(PackageAccumulator context, Long transferredPackageStatusId) {
        PackageCustodianEntity packageCustodian;
        try {
            packageCustodian = packageCustodianRepository.findById(context.packageId).orElse(null);
        } catch (RuntimeException ex) {
            context.addIssue(PlanningIssueReason.PACKAGE_CUSTODIAN_LOOKUP_FAILED);
            log.error("Error resolving PACKAGE_CUSTODIAN; package excluded | packageId={} reason={}",
                    context.packageId, ex.getMessage(), ex);
            return;
        }
        if (packageCustodian == null) {
            context.addIssue(PlanningIssueReason.PACKAGE_CUSTODIAN_NOT_FOUND);
            return;
        }

        StatusEntity packageStatus = packageCustodian.getPackageStatus();
        context.observedPackageStatusId = packageStatus == null ? null : packageStatus.getId();
        context.rejectType = Objects.equals(transferredPackageStatusId, context.observedPackageStatusId)
                ? RejectType.PACKAGE_REJECT
                : RejectType.REJECT;
    }

    private void loadSettlementsByTrade(List<TradeEntity> trades,
                                        Map<Long, List<SettlementEntity>> grouped,
                                        List<PlanningIssue> issues,
                                        SideEnum side) {
        Integer configuredWriteSize = propertiesConfig.getBatchWriteSize();
        int readChunkSize = configuredWriteSize == null ? 1 : Math.max(1, configuredWriteSize);
        List<Long> tradeIds = trades.stream().map(TradeEntity::getId).filter(Objects::nonNull).toList();
        if (tradeIds.isEmpty()) {
            return;
        }
        for (int from = 0; from < tradeIds.size(); from += readChunkSize) {
            List<Long> queryTradeIds = tradeIds.subList(from, Math.min(from + readChunkSize, tradeIds.size()));
            try {
                for (SettlementEntity settlement : settlementRepository.findByTradeIdIn(queryTradeIds)) {
                    grouped.computeIfAbsent(settlement.getTrade().getId(), ignored -> new ArrayList<>()).add(settlement);
                }
            } catch (RuntimeException ex) {
                issues.add(new PlanningIssue(null, PlanningIssueReason.SETTLEMENT_LOOKUP_FAILED, List.of()));
                log.error("Error loading {} ASSIGNED settlements; trade chunk excluded | tradeIds={} reason={}",
                        side, queryTradeIds, ex.getMessage(), ex);
            }
        }
    }

    private static List<TradeEntity> validClearingDateTrades(List<TradeEntity> trades) {
        LocalDate today = LocalDate.now();
        return trades.stream().filter(trade -> !trade.getClearingDate().isAfter(today)).toList();
    }

    private static SettlementReference reference(SettlementEntity settlement, TradeEntity trade, SideEnum side) {
        ParticipantEntity participant = side == SideEnum.BUY ? trade.getParticipantBuy() : trade.getParticipantSell();
        return new SettlementReference(settlement.getTrade().getId(), settlement.getFraction(),
                settlement.getSide().getId(), settlement.getUniqueFractionId(),
                participant == null ? null : participant.getId());
    }

    private static final class PackageAccumulator {
        private final Long packageId;
        private final int firstAppearanceOrder;
        private final List<SettlementReference> settlementReferences = new ArrayList<>();
        private final Set<PlanningIssueReason> issueReasons = new LinkedHashSet<>();
        private Long observedPackageStatusId;
        private Long custodianId;
        private boolean custodianCaptured;
        private RejectType rejectType;

        private PackageAccumulator(Long packageId, int firstAppearanceOrder) {
            this.packageId = packageId;
            this.firstAppearanceOrder = firstAppearanceOrder;
        }

        private void addSettlement(SettlementReference reference,
                                   com.nubo.definitive.assignment.api.models.entity.ParticipantEntity custodian,
                                   Long packageDetailCustodianId) {
            settlementReferences.add(reference);
            Long settlementCustodianId = custodian == null ? null : custodian.getId();
            if (custodian == null) {
                addIssue(PlanningIssueReason.SETTLEMENT_CUSTODIAN_MISSING);
            } else if (settlementCustodianId == null) {
                addIssue(PlanningIssueReason.SETTLEMENT_CUSTODIAN_ID_MISSING);
            }
            if (!custodianCaptured) {
                custodianCaptured = true;
                custodianId = settlementCustodianId;
            } else if (!Objects.equals(custodianId, settlementCustodianId)) {
                addIssue(PlanningIssueReason.PACKAGE_SETTLEMENT_CUSTODIAN_MISMATCH);
            }
            if (packageDetailCustodianId != null && !Objects.equals(packageDetailCustodianId, settlementCustodianId)) {
                addIssue(PlanningIssueReason.PACKAGE_DETAIL_CUSTODIAN_MISMATCH);
            }
        }

        private void addIssue(PlanningIssueReason reason) {
            issueReasons.add(reason);
        }

        private PackageProcessingContext toContext() {
            Long rejectionReasonId = rejectType == RejectType.REJECT ? DEFAULT_REJECTION_REASON_ID : null;
            return new PackageProcessingContext(packageId, firstAppearanceOrder, rejectType,
                    observedPackageStatusId, custodianId, rejectionReasonId, null,
                    settlementReferences, issueReasons.isEmpty(), new ArrayList<>(issueReasons));
        }
    }
}

```

## src/main/java/com/nubo/definitive/assignment/api/service/impl/batch/DefinitiveCustodyLocalUpdateWorker.java

```java
package com.nubo.definitive.assignment.api.service.impl.batch;

import com.nubo.definitive.assignment.api.models.entity.ParticipantEntity;
import com.nubo.definitive.assignment.api.models.entity.SettlementEntity;
import com.nubo.definitive.assignment.api.models.entity.StatusEntity;
import com.nubo.definitive.assignment.api.models.enums.CustodianStatusEnum;
import com.nubo.definitive.assignment.api.models.enums.SideEnum;
import com.nubo.definitive.assignment.api.repository.SettlementRepository;
import com.nubo.definitive.assignment.api.repository.StatusRepository;
import com.nubo.definitive.assignment.api.service.impl.CashAccountBatchResolver;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class DefinitiveCustodyLocalUpdateWorker {

    private static final String SYSTEM_USER = "SYSTEM";
    private static final String SYSTEM_IP = "IP_01";
    private static final String APP_AUTO_DEFINITIVE_ASSIGNMENT = "auto-definitive-assignment-api";

    private final SettlementRepository settlementRepository;
    private final StatusRepository statusRepository;
    private final CashAccountBatchResolver cashAccountBatchResolver;

    /** One package per Spring transaction; invoked through this bean's proxy by the batch executor. */
    @Transactional
    public void synchronizePackage(PackageProcessingContext packageContext) {
        synchronizeReferences(packageContext.packageId(), packageContext.eligibleSettlements());
    }

    /** The previous flow also overlaid a settlement when its detail lookup returned empty; it simply skipped HTTP. */
    @Transactional
    public void synchronizeWithoutPackage(SettlementReference reference) {
        synchronizeReferences(null, List.of(reference));
    }

    private void synchronizeReferences(Long packageId, List<SettlementReference> references) {
        StatusEntity rejectedStatus = statusRepository.findByDescriptionAndCategory(
                        CustodianStatusEnum.REJECTED.getDescription(), CustodianStatusEnum.REJECTED.getCategory())
                .orElseThrow(() -> new LocalSettlementSyncException(
                        "Rejected custodian status not found during local overlay for packageId="
                                + packageId));

        List<Long> participantIds = references.stream()
                .map(SettlementReference::participantId).distinct().toList();
        CashAccountBatchResolver.CashAccounts cashAccounts = cashAccountBatchResolver.resolve(participantIds);

        for (SettlementReference reference : references) {
            SettlementEntity settlement = settlementRepository.findById(reference.settlementKey())
                    .orElseThrow(() -> new LocalSettlementSyncException(
                            "Settlement missing during local overlay; packageId=" + packageId
                                    + " settlementKey=" + reference.settlementKey()));

            BigDecimal cashAccount;
            try {
                cashAccount = cashAccounts.get(reference.participantId());
            } catch (RuntimeException ex) {
                throw new LocalSettlementSyncException(
                        "Unable to resolve cashAccount during local overlay; packageId=" + packageId
                                + " settlementKey=" + reference.settlementKey()
                                + " participantId=" + reference.participantId(), ex);
            }

            // Guard the captured side/participant association against a changed trade between planning and reload.
            ParticipantEntity participant = SideEnum.BUY.getValue().equals(reference.sideId())
                    ? settlement.getTrade().getParticipantBuy()
                    : settlement.getTrade().getParticipantSell();
            if (participant == null || !reference.participantId().equals(participant.getId())) {
                throw new LocalSettlementSyncException(
                        "Settlement participant changed during local overlay; packageId=" + packageId
                                + " settlementKey=" + reference.settlementKey()
                                + " plannedParticipantId=" + reference.participantId());
            }

            settlement.setCustodianStatus(rejectedStatus);
            settlement.setCustodian(null);
            settlement.setFicAdministrator(null);
            settlement.setCashAccount(cashAccount);
            settlement.setLastModifyDate(LocalDateTime.now());
            settlement.setLastModifyUser(SYSTEM_USER);
            settlement.setLastModifyApplication(APP_AUTO_DEFINITIVE_ASSIGNMENT);
            settlement.setLastModifyIp(SYSTEM_IP);

            try {
                settlementRepository.save(settlement);
            } catch (RuntimeException ex) {
                throw new LocalSettlementSyncException(
                        "Unable to save settlement during local overlay; packageId=" + packageId
                                + " settlementKey=" + reference.settlementKey(), ex);
            }
        }
    }
}

```

## src/main/java/com/nubo/definitive/assignment/api/service/impl/batch/LocalSettlementSyncException.java

```java
package com.nubo.definitive.assignment.api.service.impl.batch;

public class LocalSettlementSyncException extends RuntimeException {

    public LocalSettlementSyncException(String message) {
        super(message);
    }

    public LocalSettlementSyncException(String message, Throwable cause) {
        super(message, cause);
    }
}

```

## src/main/java/com/nubo/definitive/assignment/api/service/impl/batch/PackageProcessingContext.java

```java
package com.nubo.definitive.assignment.api.service.impl.batch;

import java.util.List;

/** Frozen request data for one package during a complete preparation pass. */
public record PackageProcessingContext(Long packageId,
                                       int firstAppearanceOrder,
                                       RejectType rejectType,
                                       Long observedPackageStatusId,
                                       Long custodianId,
                                       Long rejectionReasonId,
                                       String otherReason,
                                       List<SettlementReference> eligibleSettlements,
                                       boolean consistent,
                                       List<PlanningIssueReason> issueReasons) {
    public PackageProcessingContext {
        eligibleSettlements = List.copyOf(eligibleSettlements);
        issueReasons = List.copyOf(issueReasons);
    }
}

```

## src/main/java/com/nubo/definitive/assignment/api/service/impl/batch/PlanningIssue.java

```java
package com.nubo.definitive.assignment.api.service.impl.batch;

import java.util.List;

public record PlanningIssue(Long packageId,
                            PlanningIssueReason reason,
                            List<SettlementReference> affectedSettlements) {
    public PlanningIssue {
        affectedSettlements = List.copyOf(affectedSettlements);
    }
}

```

## src/main/java/com/nubo/definitive/assignment/api/service/impl/batch/PlanningIssueReason.java

```java
package com.nubo.definitive.assignment.api.service.impl.batch;

public enum PlanningIssueReason {
    PACKAGE_DETAIL_NOT_FOUND,
    PACKAGE_DETAIL_AMBIGUOUS,
    PACKAGE_DETAIL_LOOKUP_FAILED,
    PACKAGE_ID_MISSING,
    PACKAGE_CUSTODIAN_NOT_FOUND,
    PACKAGE_CUSTODIAN_LOOKUP_FAILED,
    SETTLEMENT_LOOKUP_FAILED,
    SETTLEMENT_CUSTODIAN_MISSING,
    SETTLEMENT_CUSTODIAN_ID_MISSING,
    PACKAGE_DETAIL_CUSTODIAN_MISMATCH,
    PACKAGE_SETTLEMENT_CUSTODIAN_MISMATCH
}

```

## src/main/java/com/nubo/definitive/assignment/api/service/impl/batch/RejectType.java

```java
package com.nubo.definitive.assignment.api.service.impl.batch;

public enum RejectType {
    REJECT,
    PACKAGE_REJECT
}

```

## src/main/java/com/nubo/definitive/assignment/api/service/impl/batch/SettlementReference.java

```java
package com.nubo.definitive.assignment.api.service.impl.batch;

import com.nubo.definitive.assignment.api.models.entity.SettlementKey;

/** Stable settlement identity plus values needed to correlate and prepare the later local overlay. */
public record SettlementReference(Long tradeId,
                                  Integer fraction,
                                  String sideId,
                                  Long uniqueFractionId,
                                  Long participantId) {

    public SettlementKey settlementKey() {
        return new SettlementKey(tradeId, fraction, sideId);
    }
}

```

## src/main/java/com/nubo/definitive/assignment/api/web/controller/AutomaticDefinitiveAssignmentController.java

```java
package com.nubo.definitive.assignment.api.web.controller;

import com.nubo.definitive.assignment.api.client.kafka.model.dto.request.FinalAssignmentInDto;
import com.nubo.definitive.assignment.api.models.dto.response.AutomaticAssignmentProcessResponseDto;
import com.nubo.definitive.assignment.api.models.dto.response.PageResponseOutDto;
import com.nubo.definitive.assignment.api.service.AutomaticDefinitiveAssignmentService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.List;

@Tag(name = "Automatic Definitive Assignment")
@RestController
@RequestMapping("/{version}/assignment/automatic")
@RequiredArgsConstructor
public class AutomaticDefinitiveAssignmentController {

    private final AutomaticDefinitiveAssignmentService automaticDefinitiveAssignmentService;

    @RequestMapping(value = "/definitive", method = RequestMethod.GET)
    public ResponseEntity<List<FinalAssignmentInDto>> executeAutomaticDefinitiveAssignment() {
        return ResponseEntity.ok(
                automaticDefinitiveAssignmentService.executeAutomaticDefinitiveAssignment()
        );
    }

    @RequestMapping(value = "/definitive/final", method = RequestMethod.GET)
    public ResponseEntity<List<FinalAssignmentInDto>> executeAutomaticFinalDefinitiveAssignment() {
        return ResponseEntity.ok(
                automaticDefinitiveAssignmentService.executeAutomaticFinalDefinitiveAssignment()
        );
    }
}

```
