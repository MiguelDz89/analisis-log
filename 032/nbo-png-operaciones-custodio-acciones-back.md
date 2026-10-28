# nbo-png-operaciones-custodio-acciones-back

Código fuente de producción y configuraciones. Captura local: 28/10/2026.

Incluye 178 archivos Java y 16 archivos de configuración, recursos y compilación/despliegue.

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
17. `src/main/java/com/nubo/operations/custody/api/OperationsCustodyActionApiApplication.java`
18. `src/main/java/com/nubo/operations/custody/api/application/annotations/ValidBigDecimal.java`
19. `src/main/java/com/nubo/operations/custody/api/application/config/CacheConfig.java`
20. `src/main/java/com/nubo/operations/custody/api/application/config/KafkaProducerConfig.java`
21. `src/main/java/com/nubo/operations/custody/api/application/config/SwaggerConfig.java`
22. `src/main/java/com/nubo/operations/custody/api/application/config/ValidBigDecimalConfig.java`
23. `src/main/java/com/nubo/operations/custody/api/application/config/WebConfig.java`
24. `src/main/java/com/nubo/operations/custody/api/application/context/GlobalContext.java`
25. `src/main/java/com/nubo/operations/custody/api/application/database/NamingStrategyConfig.java`
26. `src/main/java/com/nubo/operations/custody/api/application/database/UpperNamingConfig.java`
27. `src/main/java/com/nubo/operations/custody/api/application/filters/GlobalFilter.java`
28. `src/main/java/com/nubo/operations/custody/api/application/interceptors/GlobalInterceptor.java`
29. `src/main/java/com/nubo/operations/custody/api/application/properties/PropertiesConfig.java`
30. `src/main/java/com/nubo/operations/custody/api/application/properties/PropertiesContext.java`
31. `src/main/java/com/nubo/operations/custody/api/application/util/ApplicationUtils.java`
32. `src/main/java/com/nubo/operations/custody/api/application/util/RestClientUtils.java`
33. `src/main/java/com/nubo/operations/custody/api/client/kafka/producer/dto/request/ProducerSpecialTradeCompensationInDto.java`
34. `src/main/java/com/nubo/operations/custody/api/client/kafka/producer/service/KafkaNuboProducer.java`
35. `src/main/java/com/nubo/operations/custody/api/client/kafka/producer/service/impl/KafkaNuboProducerImpl.java`
36. `src/main/java/com/nubo/operations/custody/api/client/operations/cmd/models/dto/request/FractionCustodianAdmitInDto.java`
37. `src/main/java/com/nubo/operations/custody/api/client/operations/cmd/models/dto/response/ParticipantBankAccountOutDto.java`
38. `src/main/java/com/nubo/operations/custody/api/client/operations/cmd/models/dto/response/SettlementCustodyAdmitOutDto.java`
39. `src/main/java/com/nubo/operations/custody/api/client/operations/cmd/service/OperationCmdClient.java`
40. `src/main/java/com/nubo/operations/custody/api/client/operations/cmd/service/impl/OperationCmdClientImpl.java`
41. `src/main/java/com/nubo/operations/custody/api/client/packageCustodian/dto/request/PackageCustodianAutomaticInDto.java`
42. `src/main/java/com/nubo/operations/custody/api/client/packageCustodian/dto/response/PackageCustodianAutomaticOutDto.java`
43. `src/main/java/com/nubo/operations/custody/api/client/packageCustodian/service/PackageCustodianCmdClient.java`
44. `src/main/java/com/nubo/operations/custody/api/client/packageCustodian/service/impl/PackageCustodianCmdClientImpl.java`
45. `src/main/java/com/nubo/operations/custody/api/client/rules/models/dto/request/StatusUpdateSettlementInDto.java`
46. `src/main/java/com/nubo/operations/custody/api/client/rules/models/dto/response/StatusClientOutDto.java`
47. `src/main/java/com/nubo/operations/custody/api/client/rules/models/dto/response/StatusUpdateSettlementOutDto.java`
48. `src/main/java/com/nubo/operations/custody/api/client/rules/service/OperationBusinessRuleClient.java`
49. `src/main/java/com/nubo/operations/custody/api/client/rules/service/impl/OperationBusinessRuleClientImpl.java`
50. `src/main/java/com/nubo/operations/custody/api/exception/ClientException.java`
51. `src/main/java/com/nubo/operations/custody/api/exception/ServiceException.java`
52. `src/main/java/com/nubo/operations/custody/api/exception/error/ErrorCode.java`
53. `src/main/java/com/nubo/operations/custody/api/exception/error/ErrorResponse.java`
54. `src/main/java/com/nubo/operations/custody/api/exception/error/ErrorValidation.java`
55. `src/main/java/com/nubo/operations/custody/api/exception/handler/CustomKafkaErrorHandler.java`
56. `src/main/java/com/nubo/operations/custody/api/exception/handler/GlobalExceptionHandler.java`
57. `src/main/java/com/nubo/operations/custody/api/exception/kafka/KafkaErrorBuild.java`
58. `src/main/java/com/nubo/operations/custody/api/helpers/MapperPageUtil.java`
59. `src/main/java/com/nubo/operations/custody/api/helpers/MapperUtil.java`
60. `src/main/java/com/nubo/operations/custody/api/helpers/SendNotificationUtil.java`
61. `src/main/java/com/nubo/operations/custody/api/helpers/ValidatorUtil.java`
62. `src/main/java/com/nubo/operations/custody/api/models/domain/UserNuboData.java`
63. `src/main/java/com/nubo/operations/custody/api/models/dto/request/BatchCustodyRejectInDto.java`
64. `src/main/java/com/nubo/operations/custody/api/models/dto/request/BatchPackageRejectInDto.java`
65. `src/main/java/com/nubo/operations/custody/api/models/dto/request/CustodyActionItemInDto.java`
66. `src/main/java/com/nubo/operations/custody/api/models/dto/request/CustodyActionRequest.java`
67. `src/main/java/com/nubo/operations/custody/api/models/dto/request/CustodyAdmitInDto.java`
68. `src/main/java/com/nubo/operations/custody/api/models/dto/request/CustodyPrematchInDto.java`
69. `src/main/java/com/nubo/operations/custody/api/models/dto/request/CustodyRejectInDto.java`
70. `src/main/java/com/nubo/operations/custody/api/models/dto/request/CustodyTransferInDto.java`
71. `src/main/java/com/nubo/operations/custody/api/models/dto/request/PackageRejectInDto.java`
72. `src/main/java/com/nubo/operations/custody/api/models/dto/response/AfpFundOutDto.java`
73. `src/main/java/com/nubo/operations/custody/api/models/dto/response/BankAccountOutDto.java`
74. `src/main/java/com/nubo/operations/custody/api/models/dto/response/BankOutDto.java`
75. `src/main/java/com/nubo/operations/custody/api/models/dto/response/BatchCustodyActionItemOutDto.java`
76. `src/main/java/com/nubo/operations/custody/api/models/dto/response/BatchCustodyActionOutDto.java`
77. `src/main/java/com/nubo/operations/custody/api/models/dto/response/CountryOutDto.java`
78. `src/main/java/com/nubo/operations/custody/api/models/dto/response/CurrencyOutDto.java`
79. `src/main/java/com/nubo/operations/custody/api/models/dto/response/CustodyActionOutDto.java`
80. `src/main/java/com/nubo/operations/custody/api/models/dto/response/CustodyTradeOutDto.java`
81. `src/main/java/com/nubo/operations/custody/api/models/dto/response/CustodyTransferResultOutDto.java`
82. `src/main/java/com/nubo/operations/custody/api/models/dto/response/DepositoryOutDto.java`
83. `src/main/java/com/nubo/operations/custody/api/models/dto/response/ErrorCustodyActionOutDto.java`
84. `src/main/java/com/nubo/operations/custody/api/models/dto/response/ExchangeRateOutDto.java`
85. `src/main/java/com/nubo/operations/custody/api/models/dto/response/FicAdministratorOutDto.java`
86. `src/main/java/com/nubo/operations/custody/api/models/dto/response/GicsOutDto.java`
87. `src/main/java/com/nubo/operations/custody/api/models/dto/response/IdentificationTypeOutDto.java`
88. `src/main/java/com/nubo/operations/custody/api/models/dto/response/InvestorAccountOutDto.java`
89. `src/main/java/com/nubo/operations/custody/api/models/dto/response/InvestorOutDto.java`
90. `src/main/java/com/nubo/operations/custody/api/models/dto/response/MarketOutDto.java`
91. `src/main/java/com/nubo/operations/custody/api/models/dto/response/NotificationRequestDto.java`
92. `src/main/java/com/nubo/operations/custody/api/models/dto/response/PageResponseOutDto.java`
93. `src/main/java/com/nubo/operations/custody/api/models/dto/response/ParticipantAccountOutDto.java`
94. `src/main/java/com/nubo/operations/custody/api/models/dto/response/ParticipantCustodyActionOutDto.java`
95. `src/main/java/com/nubo/operations/custody/api/models/dto/response/ParticipantOutDto.java`
96. `src/main/java/com/nubo/operations/custody/api/models/dto/response/ParticipantShortOutDto.java`
97. `src/main/java/com/nubo/operations/custody/api/models/dto/response/RejectionReasonOutDto.java`
98. `src/main/java/com/nubo/operations/custody/api/models/dto/response/SecurityTitleOutDto.java`
99. `src/main/java/com/nubo/operations/custody/api/models/dto/response/SettlementByCustodyOutDto.java`
100. `src/main/java/com/nubo/operations/custody/api/models/dto/response/SettlementCustodyActionOutDto.java`
101. `src/main/java/com/nubo/operations/custody/api/models/dto/response/SettlementOutDto.java`
102. `src/main/java/com/nubo/operations/custody/api/models/dto/response/SettlementTransferResultOutDto.java`
103. `src/main/java/com/nubo/operations/custody/api/models/dto/response/SideOutDto.java`
104. `src/main/java/com/nubo/operations/custody/api/models/dto/response/SpecialTradeOutDto.java`
105. `src/main/java/com/nubo/operations/custody/api/models/dto/response/StatusOutDto.java`
106. `src/main/java/com/nubo/operations/custody/api/models/dto/response/TaxStatusOutDto.java`
107. `src/main/java/com/nubo/operations/custody/api/models/dto/response/TradeCustodyActionOutDto.java`
108. `src/main/java/com/nubo/operations/custody/api/models/dto/response/TradeEquityOutDto.java`
109. `src/main/java/com/nubo/operations/custody/api/models/dto/response/TradeOutDto.java`
110. `src/main/java/com/nubo/operations/custody/api/models/dto/response/TradingSessionOutDto.java`
111. `src/main/java/com/nubo/operations/custody/api/models/dto/response/TradingSystemOutDto.java`
112. `src/main/java/com/nubo/operations/custody/api/models/dto/response/TypeOutDto.java`
113. `src/main/java/com/nubo/operations/custody/api/models/entity/AfpFundEntity.java`
114. `src/main/java/com/nubo/operations/custody/api/models/entity/BankAccountEntity.java`
115. `src/main/java/com/nubo/operations/custody/api/models/entity/BankEntity.java`
116. `src/main/java/com/nubo/operations/custody/api/models/entity/CountryEntity.java`
117. `src/main/java/com/nubo/operations/custody/api/models/entity/CurrencyEntity.java`
118. `src/main/java/com/nubo/operations/custody/api/models/entity/DepositoryEntity.java`
119. `src/main/java/com/nubo/operations/custody/api/models/entity/ExchangeRateEntity.java`
120. `src/main/java/com/nubo/operations/custody/api/models/entity/FicAdministratorEntity.java`
121. `src/main/java/com/nubo/operations/custody/api/models/entity/GicsEntity.java`
122. `src/main/java/com/nubo/operations/custody/api/models/entity/IdentificationTypeEntity.java`
123. `src/main/java/com/nubo/operations/custody/api/models/entity/InvestorAccountEntity.java`
124. `src/main/java/com/nubo/operations/custody/api/models/entity/InvestorEntity.java`
125. `src/main/java/com/nubo/operations/custody/api/models/entity/IsinNumberEntity.java`
126. `src/main/java/com/nubo/operations/custody/api/models/entity/MarketEntity.java`
127. `src/main/java/com/nubo/operations/custody/api/models/entity/PackageCustodianEntity.java`
128. `src/main/java/com/nubo/operations/custody/api/models/entity/PackageCustodianHistoryEntity.java`
129. `src/main/java/com/nubo/operations/custody/api/models/entity/PackageCustodianHistoryKey.java`
130. `src/main/java/com/nubo/operations/custody/api/models/entity/PackageDetailEntity.java`
131. `src/main/java/com/nubo/operations/custody/api/models/entity/PackageDetailKey.java`
132. `src/main/java/com/nubo/operations/custody/api/models/entity/ParticipantAccountEntity.java`
133. `src/main/java/com/nubo/operations/custody/api/models/entity/ParticipantBankAccountEntity.java`
134. `src/main/java/com/nubo/operations/custody/api/models/entity/ParticipantEntity.java`
135. `src/main/java/com/nubo/operations/custody/api/models/entity/ParticipantUserNuboEntity.java`
136. `src/main/java/com/nubo/operations/custody/api/models/entity/ParticipantUserNuboKey.java`
137. `src/main/java/com/nubo/operations/custody/api/models/entity/RejectionReasonEntity.java`
138. `src/main/java/com/nubo/operations/custody/api/models/entity/SecurityTitleEntity.java`
139. `src/main/java/com/nubo/operations/custody/api/models/entity/SettlementEntity.java`
140. `src/main/java/com/nubo/operations/custody/api/models/entity/SettlementKey.java`
141. `src/main/java/com/nubo/operations/custody/api/models/entity/SideEntity.java`
142. `src/main/java/com/nubo/operations/custody/api/models/entity/StatusEntity.java`
143. `src/main/java/com/nubo/operations/custody/api/models/entity/TaxStatusEntity.java`
144. `src/main/java/com/nubo/operations/custody/api/models/entity/TradeEntity.java`
145. `src/main/java/com/nubo/operations/custody/api/models/entity/TradingSessionEntity.java`
146. `src/main/java/com/nubo/operations/custody/api/models/entity/TradingSystemEntity.java`
147. `src/main/java/com/nubo/operations/custody/api/models/entity/TypeEntity.java`
148. `src/main/java/com/nubo/operations/custody/api/models/entity/UserNuboEntity.java`
149. `src/main/java/com/nubo/operations/custody/api/models/entity/converter/BooleanToIntegerConverter.java`
150. `src/main/java/com/nubo/operations/custody/api/models/enums/BusinessRuleEnum.java`
151. `src/main/java/com/nubo/operations/custody/api/models/enums/CustodyActionEnum.java`
152. `src/main/java/com/nubo/operations/custody/api/models/enums/MessageErrorCustodyActionEnum.java`
153. `src/main/java/com/nubo/operations/custody/api/models/enums/MessageSuccessCustodyActionEnum.java`
154. `src/main/java/com/nubo/operations/custody/api/models/enums/NotificationCustodyActionEnum.java`
155. `src/main/java/com/nubo/operations/custody/api/models/enums/NotificationMessageEnum.java`
156. `src/main/java/com/nubo/operations/custody/api/models/enums/NotificationTypeEnum.java`
157. `src/main/java/com/nubo/operations/custody/api/models/enums/PropertiesEnum.java`
158. `src/main/java/com/nubo/operations/custody/api/models/enums/RejectionReasonEnum.java`
159. `src/main/java/com/nubo/operations/custody/api/models/enums/SideEnum.java`
160. `src/main/java/com/nubo/operations/custody/api/models/enums/StatusEnum.java`
161. `src/main/java/com/nubo/operations/custody/api/models/enums/TypeEnum.java`
162. `src/main/java/com/nubo/operations/custody/api/models/enums/UserTypeEnum.java`
163. `src/main/java/com/nubo/operations/custody/api/models/enums/VersionApiEnum.java`
164. `src/main/java/com/nubo/operations/custody/api/models/spec/TradeSpecifications.java`
165. `src/main/java/com/nubo/operations/custody/api/repository/FicAdministratorRepository.java`
166. `src/main/java/com/nubo/operations/custody/api/repository/InvestorAccountRepository.java`
167. `src/main/java/com/nubo/operations/custody/api/repository/PackageCustodianHistoryRepository.java`
168. `src/main/java/com/nubo/operations/custody/api/repository/PackageCustodianRepository.java`
169. `src/main/java/com/nubo/operations/custody/api/repository/PackageDetailRepository.java`
170. `src/main/java/com/nubo/operations/custody/api/repository/ParticipantBankAccountRepository.java`
171. `src/main/java/com/nubo/operations/custody/api/repository/ParticipantRepository.java`
172. `src/main/java/com/nubo/operations/custody/api/repository/ParticipantUserNuboRepository.java`
173. `src/main/java/com/nubo/operations/custody/api/repository/RejectionReasonRepository.java`
174. `src/main/java/com/nubo/operations/custody/api/repository/SettlementRepository.java`
175. `src/main/java/com/nubo/operations/custody/api/repository/SideRepository.java`
176. `src/main/java/com/nubo/operations/custody/api/repository/StatusRepository.java`
177. `src/main/java/com/nubo/operations/custody/api/repository/TradeRepository.java`
178. `src/main/java/com/nubo/operations/custody/api/repository/TypeRepository.java`
179. `src/main/java/com/nubo/operations/custody/api/repository/UserNuboRepository.java`
180. `src/main/java/com/nubo/operations/custody/api/service/BatchCacheService.java`
181. `src/main/java/com/nubo/operations/custody/api/service/CustodyActionsService.java`
182. `src/main/java/com/nubo/operations/custody/api/service/CustodyRejectBatchService.java`
183. `src/main/java/com/nubo/operations/custody/api/service/CustodyService.java`
184. `src/main/java/com/nubo/operations/custody/api/service/RejectionReasonService.java`
185. `src/main/java/com/nubo/operations/custody/api/service/impl/BatchCacheServiceImpl.java`
186. `src/main/java/com/nubo/operations/custody/api/service/impl/CustodyActionsServiceImpl.java`
187. `src/main/java/com/nubo/operations/custody/api/service/impl/CustodyRejectBatchItemWorker.java`
188. `src/main/java/com/nubo/operations/custody/api/service/impl/CustodyRejectBatchServiceImpl.java`
189. `src/main/java/com/nubo/operations/custody/api/service/impl/CustodyServiceImpl.java`
190. `src/main/java/com/nubo/operations/custody/api/service/impl/PackageRejectBatchItemWorker.java`
191. `src/main/java/com/nubo/operations/custody/api/service/impl/RejectionReasonServiceImpl.java`
192. `src/main/java/com/nubo/operations/custody/api/web/controller/CustodyActionsRestController.java`
193. `src/main/java/com/nubo/operations/custody/api/web/controller/CustodyRestController.java`
194. `src/main/java/com/nubo/operations/custody/api/web/controller/RejectionReasonRestController.java`

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
    <groupId>com.nubo.operations.custody.api</groupId>
    <artifactId>operations-custody-actions-api</artifactId>
    <version>0.29.0-beta.4</version>
    <name>${project.artifactId}</name>
    <description>Operations Custody Action Api</description>

    <properties>
        <java.version>21</java.version>
        <spring.port>8080</spring.port>
        <test.skip>false</test.skip>
        <datasource.url.application.name>ApplicationName=${project.artifactId}</datasource.url.application.name>
        <hikari.pool.name>${project.artifactId}-pool</hikari.pool.name>

        <log4j2.version>2.25.5</log4j2.version>
        <commons-lang3.version>3.18.0</commons-lang3.version>
        <jackson3.version>3.0.0</jackson3.version>
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
        <!-- Swagger -->
        <dependency>
            <groupId>org.springdoc</groupId>
            <artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>
            <version>2.8.5</version>
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
        <dependency>
            <groupId>org.apache.commons</groupId>
            <artifactId>commons-lang3</artifactId>
            <version>${commons-lang3.version}</version>
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
                                <exclude>**/OperationsCustodyActionApiApplication.class</exclude>
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
    url-operation-rules: ${NUBO_URL_OPERATION_RULES}
    url-operation-cmd: ${NUBO_URL_OPERATION_CMD}
    packages-custody-cmd:
      base-url: ${NUBO_URL_PACKAGES_CUSTODY_CMD_BASE_URL:http://localhost:8083/packages-custody-cmd-api}
      version: ${NUBO_PACKAGES_CUSTODY_CMD_VERSION:v1}
      automatic-path: ${NUBO_PACKAGES_CUSTODY_CMD_AUTOMATIC_PATH:/{version}/package-custodian/automatic}
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
    notification:
      id: ${KAFKA_NUBO_NOTIFICATION_ID:23}
      event-type: ${KAFKA_NUBO_NOTIFICATION_EVENT_TYPE:NOTIFICACION_LISTA_PARA_USUARIO}
      module: ${KAFKA_NUBO_NOTIFICATION_MODULE:HORARIOS}
      kafka-notification-request-topic: ${KAFKA_NUBO_NOTIFICATION_REQUEST_TOPIC}
      group-id: ${KAFKA_NUBO_GROUP_ID}

```

## src/main/resources/application-local.yml

```yaml
server:
  port: 8086
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
    packages-custody-cmd:
      base-url: ${NUBO_URL_PACKAGES_CUSTODY_CMD_BASE_URL:http://localhost:8083/packages-custody-cmd-api}
      version: ${NUBO_PACKAGES_CUSTODY_CMD_VERSION:v1}
      automatic-path: ${NUBO_PACKAGES_CUSTODY_CMD_AUTOMATIC_PATH:/{version}/package-custodian/automatic}
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
    notification:
      id: ${KAFKA_NUBO_NOTIFICATION_ID:23}
      event-type: ${KAFKA_NUBO_NOTIFICATION_EVENT_TYPE:NOTIFICACION_LISTA_PARA_USUARIO}
      module: ${KAFKA_NUBO_NOTIFICATION_MODULE:HORARIOS}
      kafka-notification-request-topic: ${KAFKA_NUBO_NOTIFICATION_REQUEST_TOPIC:}
      group-id: ${KAFKA_NUBO_GROUP_ID}

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
    url-operation-rules: ${NUBO_URL_OPERATION_RULES}
    url-operation-cmd: ${NUBO_URL_OPERATION_CMD}
    packages-custody-cmd:
      base-url: ${NUBO_URL_PACKAGES_CUSTODY_CMD_BASE_URL:http://localhost:8083/packages-custody-cmd-api}
      version: ${NUBO_PACKAGES_CUSTODY_CMD_VERSION:v1}
      automatic-path: ${NUBO_PACKAGES_CUSTODY_CMD_AUTOMATIC_PATH:/{version}/package-custodian/automatic}
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
    notification:
      id: ${KAFKA_NUBO_NOTIFICATION_ID:23}
      event-type: ${KAFKA_NUBO_NOTIFICATION_EVENT_TYPE:NOTIFICACION_LISTA_PARA_USUARIO}
      module: ${KAFKA_NUBO_NOTIFICATION_MODULE:HORARIOS}
      kafka-notification-request-topic: ${KAFKA_NUBO_NOTIFICATION_REQUEST_TOPIC}
      group-id: ${KAFKA_NUBO_GROUP_ID}

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
    url-operation-rules: ${NUBO_URL_OPERATION_RULES}
    url-operation-cmd: ${NUBO_URL_OPERATION_CMD}
    packages-custody-cmd:
      base-url: ${NUBO_URL_PACKAGES_CUSTODY_CMD_BASE_URL:http://localhost:8083/packages-custody-cmd-api}
      version: ${NUBO_PACKAGES_CUSTODY_CMD_VERSION:v1}
      automatic-path: ${NUBO_PACKAGES_CUSTODY_CMD_AUTOMATIC_PATH:/{version}/package-custodian/automatic}
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
    notification:
      id: ${KAFKA_NUBO_NOTIFICATION_ID:23}
      event-type: ${KAFKA_NUBO_NOTIFICATION_EVENT_TYPE:NOTIFICACION_LISTA_PARA_USUARIO}
      module: ${KAFKA_NUBO_NOTIFICATION_MODULE:HORARIOS}
      kafka-notification-request-topic: ${KAFKA_NUBO_NOTIFICATION_REQUEST_TOPIC}
      group-id: ${KAFKA_NUBO_GROUP_ID}

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
    url-operation-rules: ${NUBO_URL_OPERATION_RULES}
    url-operation-cmd: ${NUBO_URL_OPERATION_CMD}
    packages-custody-cmd:
      base-url: ${NUBO_URL_PACKAGES_CUSTODY_CMD_BASE_URL:http://localhost:8083/packages-custody-cmd-api}
      version: ${NUBO_PACKAGES_CUSTODY_CMD_VERSION:v1}
      automatic-path: ${NUBO_PACKAGES_CUSTODY_CMD_AUTOMATIC_PATH:/{version}/package-custodian/automatic}
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
    notification:
      id: ${KAFKA_NUBO_NOTIFICATION_ID:23}
      event-type: ${KAFKA_NUBO_NOTIFICATION_EVENT_TYPE:NOTIFICACION_LISTA_PARA_USUARIO}
      module: ${KAFKA_NUBO_NOTIFICATION_MODULE:HORARIOS}
      kafka-notification-request-topic: ${KAFKA_NUBO_NOTIFICATION_REQUEST_TOPIC}
      group-id: ${KAFKA_NUBO_GROUP_ID}

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
info:
  app:
    name: ${spring.application.name}
    version: "@project.version@"
    description: "@project.description@"
management:
  info:
    env:
      enabled: true
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
 ,-----. ,------. ,------.,------.   ,---. ,--------.,--. ,-----. ,--.  ,--. ,---.   ,-----.,--. ,--. ,---.,--------.,-----. ,------.,--.   ,--.,---.   ,-----.,--------.,--. ,-----. ,--.  ,--. ,---.   ,---.  ,------. ,--.
'  .-.  '|  .--. '|  .---'|  .--. ' /  O  \'--.  .--'|  |'  .-.  '|  ,'.|  |'   .-' '  .--./|  | |  |'   .-'--.  .--'  .-.  '|  .-.  \\  `.'  //  O  \ '  .--./'--.  .--'|  |'  .-.  '|  ,'.|  |'   .-' /  O  \ |  .--. '|  |
|  | |  ||  '--' ||  `--, |  '--'.'|  .-.  |  |  |   |  ||  | |  ||  |' '  |`.  `-. |  |    |  | |  |`.  `-.  |  |  |  | |  ||  |  \  :'.    /|  .-.  ||  |       |  |   |  ||  | |  ||  |' '  |`.  `-.|  .-.  ||  '--' ||  |
'  '-'  '|  | --' |  `---.|  |\  \ |  | |  |  |  |   |  |'  '-'  '|  | `   |.-'    |'  '--'\'  '-'  '.-'    | |  |  '  '-'  '|  '--'  /  |  | |  | |  |'  '--'\   |  |   |  |'  '-'  '|  | `   |.-'    |  | |  ||  | --' |  |
 `-----' `--'     `------'`--' '--'`--' `--'  `--'   `--' `-----' `--'  `--'`-----'  `-----' `-----' `-----'  `--'   `-----' `-------'   `--' `--' `--' `-----'   `--'   `--' `-----' `--'  `--'`-----'`--' `--'`--'     `--'

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

## src/main/java/com/nubo/operations/custody/api/OperationsCustodyActionApiApplication.java

```java
package com.nubo.operations.custody.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class OperationsCustodyActionApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(OperationsCustodyActionApiApplication.class, args);
	}

}

```

## src/main/java/com/nubo/operations/custody/api/application/annotations/ValidBigDecimal.java

```java
package com.nubo.operations.custody.api.application.annotations;

import com.nubo.operations.custody.api.application.config.ValidBigDecimalConfig;
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

## src/main/java/com/nubo/operations/custody/api/application/config/CacheConfig.java

```java
package com.nubo.operations.custody.api.application.config;

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

## src/main/java/com/nubo/operations/custody/api/application/config/KafkaProducerConfig.java

```java
package com.nubo.operations.custody.api.application.config;

import com.nubo.operations.custody.api.application.properties.PropertiesConfig;
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

## src/main/java/com/nubo/operations/custody/api/application/config/SwaggerConfig.java

```java
package com.nubo.operations.custody.api.application.config;

import com.nubo.operations.custody.api.exception.error.ErrorResponse;
import com.nubo.operations.custody.api.exception.error.ErrorValidation;
import com.nubo.operations.custody.api.models.enums.PropertiesEnum;
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

## src/main/java/com/nubo/operations/custody/api/application/config/ValidBigDecimalConfig.java

```java
package com.nubo.operations.custody.api.application.config;

import com.nubo.operations.custody.api.application.annotations.ValidBigDecimal;
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

## src/main/java/com/nubo/operations/custody/api/application/config/WebConfig.java

```java
package com.nubo.operations.custody.api.application.config;

import com.nubo.operations.custody.api.application.interceptors.GlobalInterceptor;
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

## src/main/java/com/nubo/operations/custody/api/application/context/GlobalContext.java

```java
package com.nubo.operations.custody.api.application.context;

import java.util.HashMap;
import java.util.Map;

public class GlobalContext {

    private static final ThreadLocal<Map<String, Object>> context = ThreadLocal.withInitial(HashMap::new);

    private GlobalContext() {
    }

    public static void setProperty(String key, Object value) {
        context.get().put(key, value);
    }

    public static Object getProperty(String key) {
        Object value = context.get().get(key);
        return value;
    }

    public static String getPropertyString(String key) {
        Object value = context.get().get(key);
        return value != null ? String.valueOf(value) : null;
    }

    public static void remove() {
        context.remove();
    }

}

```

## src/main/java/com/nubo/operations/custody/api/application/database/NamingStrategyConfig.java

```java
package com.nubo.operations.custody.api.application.database;

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

## src/main/java/com/nubo/operations/custody/api/application/database/UpperNamingConfig.java

```java
package com.nubo.operations.custody.api.application.database;

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

## src/main/java/com/nubo/operations/custody/api/application/filters/GlobalFilter.java

```java
package com.nubo.operations.custody.api.application.filters;

import com.nubo.operations.custody.api.application.context.GlobalContext;
import com.nubo.operations.custody.api.application.util.ApplicationUtils;
import com.nubo.operations.custody.api.exception.ServiceException;
import com.nubo.operations.custody.api.exception.error.ErrorCode;
import com.nubo.operations.custody.api.exception.error.ErrorResponse;
import com.nubo.operations.custody.api.models.entity.UserNuboEntity;
import com.nubo.operations.custody.api.models.enums.PropertiesEnum;
import com.nubo.operations.custody.api.models.enums.VersionApiEnum;
import com.nubo.operations.custody.api.repository.UserNuboRepository;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
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
@RequiredArgsConstructor
@Slf4j
public class GlobalFilter extends OncePerRequestFilter {

    private final UserNuboRepository userNuboRepository;

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
                userNuboEntity = new UserNuboEntity();
            } else {
                clientIpHeader = this.validateClientIpHeader(request);
                userNuboEntity = this.validateUserExists(clientUserHeader);
            }

            GlobalContext.setProperty(PropertiesEnum.VERSION_API.getValue(),
                    VersionApiEnum.fromValue(versionPath).getValue());
            GlobalContext.setProperty(PropertiesEnum.CLIENT_IP.getValue(), clientIpHeader);
            GlobalContext.setProperty(PropertiesEnum.CLIENT_USER.getValue(), clientUserHeader);
            GlobalContext.setProperty(PropertiesEnum.CLIENT_DATETIME.getValue(), clientDatetime);
            GlobalContext.setProperty(PropertiesEnum.CLIENT_USER_ENTITY.getValue(), userNuboEntity);

            chain.doFilter(request, response);

        } catch (ServiceException ex) {
            handleServiceException(ex, request, response);
        }
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
        log.info("----------- Client User: {} ----------", clientUser);
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

    private UserNuboEntity validateUserExists(String clientUser) {
        return userNuboRepository.findByUserName(clientUser)
                .orElseThrow(() -> new ServiceException(ErrorCode.UNAUTHORIZED, HttpStatus.UNAUTHORIZED));
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

## src/main/java/com/nubo/operations/custody/api/application/interceptors/GlobalInterceptor.java

```java
package com.nubo.operations.custody.api.application.interceptors;

import com.nubo.operations.custody.api.application.context.GlobalContext;
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

## src/main/java/com/nubo/operations/custody/api/application/properties/PropertiesConfig.java

```java
package com.nubo.operations.custody.api.application.properties;

import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
@Getter
public class PropertiesConfig {

    @Value("${custody.reject.batch.max-size:50}")
    private int custodyRejectBatchMaxSize;

    @Value("${spring.application.name}")
    private String apiName;

    @Value("${client.nubo.url-operation-rules}")
    private String urlNuboOperationRules;

    @Value("${client.nubo.url-operation-cmd}")
    private String urlNuboOperationCmd;

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

    @Value("${kafka.nubo.notification.id:23}")
    private String kafkaNuboNotificationId;

    @Value("${kafka.nubo.notification.event-type}")
    private String kafkaNuboNotificationEventType;

    @Value("${kafka.nubo.notification.module}")
    private String kafkaNuboNotificationModule;

    @Value("${kafka.nubo.notification.kafka-notification-request-topic}")
    private String kafkaNuboNotificationTopic;

    @Value("${client.nubo.packages-custody-cmd.base-url}")
    private String packagesCustodyCmdBaseUrl;

    @Value("${client.nubo.packages-custody-cmd.version}")
    private String packagesCustodyCmdVersion;

    @Value("${client.nubo.packages-custody-cmd.automatic-path}")
    private String packagesCustodyCmdAutomaticPath;

}

```

## src/main/java/com/nubo/operations/custody/api/application/properties/PropertiesContext.java

```java
package com.nubo.operations.custody.api.application.properties;

import com.nubo.operations.custody.api.application.context.GlobalContext;
import com.nubo.operations.custody.api.application.util.ApplicationUtils;
import com.nubo.operations.custody.api.models.entity.UserNuboEntity;
import com.nubo.operations.custody.api.models.enums.PropertiesEnum;
import org.springframework.util.ObjectUtils;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class PropertiesContext {

    private PropertiesContext() {
    }

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

    public static String getAuthToken() {
        return GlobalContext.getPropertyString(PropertiesEnum.AUTH_TOKEN.getValue());
    }

    public static UserNuboEntity getClientUserEntity() {
        return (UserNuboEntity) GlobalContext.getProperty(PropertiesEnum.CLIENT_USER_ENTITY.getValue());
    }

}


```

## src/main/java/com/nubo/operations/custody/api/application/util/ApplicationUtils.java

```java
package com.nubo.operations.custody.api.application.util;

import tools.jackson.databind.ObjectMapper;
import com.nubo.operations.custody.api.application.properties.PropertiesContext;
import com.nubo.operations.custody.api.exception.ServiceException;
import com.nubo.operations.custody.api.exception.error.ErrorCode;
import com.nubo.operations.custody.api.models.domain.UserNuboData;
import com.nubo.operations.custody.api.models.entity.ParticipantEntity;
import com.nubo.operations.custody.api.models.entity.UserNuboEntity;
import com.nubo.operations.custody.api.models.enums.TypeEnum;
import com.nubo.operations.custody.api.models.enums.UserTypeEnum;

import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Objects;

@Component
@RequiredArgsConstructor
public final class ApplicationUtils {

    private final ObjectMapper objectMapper;

    private static ObjectMapper MAPPER = new ObjectMapper();
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

    public static LocalDateTime convertStringToLocalDateTime(String timeString) {
        return LocalDateTime.parse(timeString, DateTimeFormatter.ofPattern(FORMAT_DATETIME));
    }

    public static String convertLocalDateTimeToString(LocalDateTime localDateTime) {
        return localDateTime.format(DateTimeFormatter.ofPattern(ApplicationUtils.getFormatDatetime()));
    }

    public static String convertObjectToJson(Object object) {
        try {
            return MAPPER.writeValueAsString(object);
        } catch (Exception e) {
            throw new ServiceException(ErrorCode.UNEXPECTED, e);
        }
    }

    public static <T> T convertJsonToObject(String json, Class<T> clazz) {
        try {
            return MAPPER.readValue(json, clazz);
        } catch (Exception e) {
            throw new ServiceException(ErrorCode.UNEXPECTED, e);
        }
    }

    public static UserNuboData getUserNuboData() {
        UserNuboEntity userNuboEntity = PropertiesContext.getClientUserEntity();
        ParticipantEntity participant = userNuboEntity.getParticipant();
        UserNuboData userNuboData = null;
        if (Objects.equals(UserTypeEnum.INTERNAL.getValue(), userNuboEntity.getUserType())) {
            userNuboData = new UserNuboData(
                    userNuboEntity.getId(),
                    participant != null ? participant.getId() : null,
                    false,
                    null,
                    UserTypeEnum.INTERNAL,
                    participant);
        }
        if (Objects.equals(UserTypeEnum.EXTERNAL.getValue(), userNuboEntity.getUserType())) {
            boolean isCustodian = participant != null
                    && participant.getType() != null
                    && Objects.equals(participant.getType().getId(), TypeEnum.CUSTODIAN.getId());
            String participantCountryCode = participant != null && participant.getCountry() != null
                    ? participant.getCountry().getCode()
                    : null;
            userNuboData = new UserNuboData(
                    userNuboEntity.getId(),
                    participant != null ? participant.getId() : null,
                    isCustodian,
                    participantCountryCode,
                    UserTypeEnum.EXTERNAL,
                    participant);
        }
        if (userNuboData == null) {
            throw new ServiceException(ErrorCode.USER_TYPE_NOT_VALID, HttpStatus.FORBIDDEN);
        }

        return userNuboData;
    }

    public static boolean isUserClientBackend() {
        UserNuboEntity userNuboEntity = PropertiesContext.getClientUserEntity();
        return userNuboEntity == null || userNuboEntity.getId() == null;
    }

}

```

## src/main/java/com/nubo/operations/custody/api/application/util/RestClientUtils.java

```java
package com.nubo.operations.custody.api.application.util;

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

## src/main/java/com/nubo/operations/custody/api/client/kafka/producer/dto/request/ProducerSpecialTradeCompensationInDto.java

```java
package com.nubo.operations.custody.api.client.kafka.producer.dto.request;

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
public class ProducerSpecialTradeCompensationInDto {

    @NotNull
    @Min(value = 1)
    private Long specialTradeId;

    @NotNull
    @Min(value = 1)
    private Long paymentTypeId;

    private String clientIp;

    private String clientUser;

    private String clientDateTime;

    private Boolean specialTradeCompensation;

    private Boolean bankTransaction;

}

```

## src/main/java/com/nubo/operations/custody/api/client/kafka/producer/service/KafkaNuboProducer.java

```java
package com.nubo.operations.custody.api.client.kafka.producer.service;

public interface KafkaNuboProducer {

    void sendMessageNotification(String message);

}

```

## src/main/java/com/nubo/operations/custody/api/client/kafka/producer/service/impl/KafkaNuboProducerImpl.java

```java
package com.nubo.operations.custody.api.client.kafka.producer.service.impl;

import com.nubo.operations.custody.api.application.properties.PropertiesConfig;
import com.nubo.operations.custody.api.application.properties.PropertiesContext;
import com.nubo.operations.custody.api.application.util.ApplicationUtils;
import com.nubo.operations.custody.api.client.kafka.producer.dto.request.ProducerSpecialTradeCompensationInDto;
import com.nubo.operations.custody.api.client.kafka.producer.service.KafkaNuboProducer;
import com.nubo.operations.custody.api.exception.ServiceException;
import com.nubo.operations.custody.api.exception.error.ErrorCode;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.SendResult;
import org.springframework.stereotype.Service;

import java.util.concurrent.CompletableFuture;

@Service
@RequiredArgsConstructor
@Slf4j
public class KafkaNuboProducerImpl implements KafkaNuboProducer {

    private final PropertiesConfig propertiesConfig;
    private final KafkaTemplate<String, String> kafkaNuboTemplate;

    public void sendMessageNotification(String message) {
        if(message != null){
            String topic = propertiesConfig.getKafkaNuboNotificationTopic();
            CompletableFuture<SendResult<String, String>> future = kafkaNuboTemplate.send(topic, message).toCompletableFuture();

            future.thenAccept(result -> log.info("Send message -- Topic: {} -- offset: {} -- json: {} ",
                            topic, result.getRecordMetadata().offset(), message) )
                    .exceptionally(ex -> {
                        throw new ServiceException(ErrorCode.ERROR_KAFKA_PRODUCER_NUBO, ex);
                    });
        }
    }

}

```

## src/main/java/com/nubo/operations/custody/api/client/operations/cmd/models/dto/request/FractionCustodianAdmitInDto.java

```java
package com.nubo.operations.custody.api.client.operations.cmd.models.dto.request;

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

    @NotNull
    @Min(value = 1)
    private Long investorAccountId;

    @NotNull
    @Min(value = 1)
    private Long participantAccountId;

    @NotNull
    @Min(value = 1)
    private Long sourceQuoteTypeId;

}

```

## src/main/java/com/nubo/operations/custody/api/client/operations/cmd/models/dto/response/ParticipantBankAccountOutDto.java

```java
package com.nubo.operations.custody.api.client.operations.cmd.models.dto.response;

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

## src/main/java/com/nubo/operations/custody/api/client/operations/cmd/models/dto/response/SettlementCustodyAdmitOutDto.java

```java
package com.nubo.operations.custody.api.client.operations.cmd.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.nubo.operations.custody.api.models.dto.response.InvestorAccountOutDto;
import com.nubo.operations.custody.api.models.dto.response.InvestorOutDto;
import com.nubo.operations.custody.api.models.dto.response.ParticipantAccountOutDto;
import com.nubo.operations.custody.api.models.dto.response.SideOutDto;
import com.nubo.operations.custody.api.models.dto.response.TypeOutDto;
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

## src/main/java/com/nubo/operations/custody/api/client/operations/cmd/service/OperationCmdClient.java

```java
package com.nubo.operations.custody.api.client.operations.cmd.service;

import com.nubo.operations.custody.api.client.operations.cmd.models.dto.request.FractionCustodianAdmitInDto;
import com.nubo.operations.custody.api.client.operations.cmd.models.dto.response.ParticipantBankAccountOutDto;
import com.nubo.operations.custody.api.client.operations.cmd.models.dto.response.SettlementCustodyAdmitOutDto;

import java.util.List;

public interface OperationCmdClient {

    List<SettlementCustodyAdmitOutDto> updateAssignmentCustodianAdmit(
            Long tradeId,
            String sideId,
            Integer fraction,
            FractionCustodianAdmitInDto fractionCustodianAdmitInDto);

    ParticipantBankAccountOutDto validateCudAccountFractionAssignment(Long tradeId, String sideId);

}

```

## src/main/java/com/nubo/operations/custody/api/client/operations/cmd/service/impl/OperationCmdClientImpl.java

```java
package com.nubo.operations.custody.api.client.operations.cmd.service.impl;

import com.nubo.operations.custody.api.application.properties.PropertiesConfig;
import com.nubo.operations.custody.api.application.properties.PropertiesContext;
import com.nubo.operations.custody.api.application.util.ApplicationUtils;
import com.nubo.operations.custody.api.application.util.RestClientUtils;
import com.nubo.operations.custody.api.client.operations.cmd.models.dto.request.FractionCustodianAdmitInDto;
import com.nubo.operations.custody.api.client.operations.cmd.models.dto.response.ParticipantBankAccountOutDto;
import com.nubo.operations.custody.api.client.operations.cmd.models.dto.response.SettlementCustodyAdmitOutDto;
import com.nubo.operations.custody.api.client.operations.cmd.service.OperationCmdClient;
import com.nubo.operations.custody.api.exception.ClientException;
import com.nubo.operations.custody.api.exception.error.ErrorCode;
import com.nubo.operations.custody.api.models.dto.response.SettlementOutDto;
import com.nubo.operations.custody.api.models.enums.PropertiesEnum;
import com.nubo.operations.custody.api.models.enums.VersionApiEnum;
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
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class OperationCmdClientImpl implements OperationCmdClient {

    private final PropertiesConfig propertiesConfig;
    private final RestClientUtils restClientUtils;

    private static final String PATH_OPERATIONS_CMD = "fractionation";
    private static final String PATH_VALIDATE_CUD_ACCOUNT_FRACTION = "validate/counted-fraction";

    @Override
    public List<SettlementCustodyAdmitOutDto> updateAssignmentCustodianAdmit(Long tradeId, String sideId,
            Integer fraction,
            FractionCustodianAdmitInDto fractionCustodianAdmitInDto) {
        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getUrlNuboOperationCmd())
                .pathSegment(VersionApiEnum.V1.getValue(), PATH_OPERATIONS_CMD)
                .path("/counted-operation/update-assignments/custodian-admit/trade/{tradeId}/side/{sideId}/fraction/{fraction}")
                .buildAndExpand(tradeId, sideId, fraction)
                .toUri();

        try {
            ResponseEntity<SettlementCustodyAdmitOutDto[]> response = restClientUtils.requestBodyWithResponseObject(uri,
                    HttpMethod.PUT, getHttpHeaders(), fractionCustodianAdmitInDto,
                    SettlementCustodyAdmitOutDto[].class);
            if (!ObjectUtils.isEmpty(response.getBody())) {
                return List.of(response.getBody());
            }
        } catch (Exception ex) {
            throw new ClientException(ErrorCode.CLIENT_OPERATION_CMD_ERROR, HttpStatus.BAD_GATEWAY, ex);
        }

        return List.of(SettlementCustodyAdmitOutDto.builder().build());
    }

    @Override
    public ParticipantBankAccountOutDto validateCudAccountFractionAssignment(Long tradeId, String sideId) {
        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getUrlNuboOperationCmd())
                .pathSegment(VersionApiEnum.V1.getValue(), PATH_VALIDATE_CUD_ACCOUNT_FRACTION)
                .path("/assignment/cud-account/trade/{tradeId}/side/{sideId}")
                .buildAndExpand(tradeId, sideId)
                .toUri();

        try {
            ResponseEntity<ParticipantBankAccountOutDto> response = restClientUtils
                    .requestWithoutBodyWithResponseObject(uri,
                            HttpMethod.GET, getHttpHeaders(), ParticipantBankAccountOutDto.class);
            if (!ObjectUtils.isEmpty(response.getBody())) {
                return response.getBody();
            }
        } catch (Exception ex) {
            throw new ClientException(ErrorCode.CLIENT_OPERATION_CMD_ERROR, HttpStatus.BAD_GATEWAY, ex);
        }

        return ParticipantBankAccountOutDto.builder().build();
    }

    private static HttpHeaders getHttpHeaders() {
        HttpHeaders headers = new HttpHeaders();
        headers.set(PropertiesEnum.CLIENT_IP.getValue(), PropertiesContext.getClientIp());
        headers.set(PropertiesEnum.CLIENT_USER.getValue(), PropertiesContext.getClientUser());
        headers.set(PropertiesEnum.CLIENT_DATETIME.getValue(),
                ApplicationUtils.convertLocalDateTimeToString(PropertiesContext.getClientDatetime()));
        headers.setContentType(MediaType.APPLICATION_JSON);
        if (PropertiesContext.getClientUserEntity() == null
                || PropertiesContext.getClientUserEntity().getId() == null) {
            headers.set(PropertiesEnum.CLIENT_BACKEND.getValue(), "true");
        }
        return headers;
    }

}

```

## src/main/java/com/nubo/operations/custody/api/client/packageCustodian/dto/request/PackageCustodianAutomaticInDto.java

```java
package com.nubo.operations.custody.api.client.packageCustodian.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import jakarta.validation.Valid;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Size;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class  PackageCustodianAutomaticInDto {

    private String sourceApplication;

    private LocalDate executionDate;

    private String cutType;

    private Boolean sameDaySettlement;

    @Builder.Default
    @Valid
    private List<PackageDto> packages = new ArrayList<>();

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class PackageDto {

        @NotBlank
        private String marketId;

        private String codeSCB;

        @NotBlank
        private String sideId;

        private String investorDocumentNumber;

        @Size(max = 10, message = "Reference package must not exceed 10 characters")
        private String referencePackage;

        @NotNull()
        private Long investorId;

        @NotNull
        @Min(value = 1)
        private Long participantId;

        @NotNull
        private Long investorAccountId;

        @NotNull
        private Long isinNumberId;

        @NotNull
        private Long securityId;

        @NotNull
        private Long typeId;

        @NotNull
        private String depositoryId;

        @NotNull
        private LocalDate clearingDate;

        private LocalDate returnClearingDate;

        private Long custodianStatusId;

        @NotNull
        private Long custodianId;

        private Long ficAdministratorId;

        private BigDecimal totalFractionQuantity;

        private BigDecimal averagePrice;

        private BigDecimal totalFractionVolume;

        private BigDecimal totalNetAmount;

        private BigDecimal totalCommissionAmount;

        private BigDecimal totalValTaxAmount;

        private BigDecimal clearingPercentage;

        private BigDecimal averageFractionVolume;

        private BigDecimal returnNetAmount;

        private BigDecimal averageRate;

        @Builder.Default
        @Valid
        private List<DetailDto> details = new ArrayList<>();
    }

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class DetailDto {

        @NotNull
        private Long tradeId;

        private String sideId;

        @NotNull
        private Long fraction;

        @NotNull
        private LocalDate matchDate;

        @NotNull
        private Long uniqueFractionId;

        private Long investorId;

        private Long custodianId;

        private Long participantId;

        private Long ficAdministratorId;

        private LocalDate clearingDate;

        private LocalDate returnClearingDate;

        private BigDecimal fractionQuantity;

        private BigDecimal price;

        private BigDecimal rate;

        private Boolean indicateExitReturn;

        @Size(max = 10, message = "Reference package must not exceed 10 characters")
        private String referencePackage;
    }
}

```

## src/main/java/com/nubo/operations/custody/api/client/packageCustodian/dto/response/PackageCustodianAutomaticOutDto.java

```java
package com.nubo.operations.custody.api.client.packageCustodian.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PackageCustodianAutomaticOutDto {

    private Integer processedPackages;
    private Integer createdPackages;
    private Integer processedDetails;
    private Integer createdDetails;
    private String status;

    @Builder.Default
    private List<PackageResultDto> packages = new ArrayList<>();

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class PackageResultDto {
        private Long packageCustodianId;
        private String packageNumber;
        private String marketId;
        private LocalDate packageDate;
        private Long participantId;
        private String participantCode;
        private Long sequence;
        private Integer detailsCreated;
    }
}

```

## src/main/java/com/nubo/operations/custody/api/client/packageCustodian/service/PackageCustodianCmdClient.java

```java
package com.nubo.operations.custody.api.client.packageCustodian.service;


import com.nubo.operations.custody.api.client.packageCustodian.dto.request.PackageCustodianAutomaticInDto;
import com.nubo.operations.custody.api.client.packageCustodian.dto.response.PackageCustodianAutomaticOutDto;

public interface PackageCustodianCmdClient {

    PackageCustodianAutomaticOutDto createAutomaticPackages(PackageCustodianAutomaticInDto request);
}

```

## src/main/java/com/nubo/operations/custody/api/client/packageCustodian/service/impl/PackageCustodianCmdClientImpl.java

```java
package com.nubo.operations.custody.api.client.packageCustodian.service.impl;


import java.net.URI;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;
import org.springframework.web.util.UriComponentsBuilder;

import com.nubo.operations.custody.api.application.properties.PropertiesConfig;
import com.nubo.operations.custody.api.application.properties.PropertiesContext;
import com.nubo.operations.custody.api.application.util.ApplicationUtils;
import com.nubo.operations.custody.api.application.util.RestClientUtils;
import com.nubo.operations.custody.api.client.packageCustodian.dto.request.PackageCustodianAutomaticInDto;
import com.nubo.operations.custody.api.client.packageCustodian.dto.response.PackageCustodianAutomaticOutDto;
import com.nubo.operations.custody.api.client.packageCustodian.service.PackageCustodianCmdClient;
import com.nubo.operations.custody.api.exception.ClientException;
import com.nubo.operations.custody.api.exception.error.ErrorCode;
import com.nubo.operations.custody.api.models.enums.PropertiesEnum;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class PackageCustodianCmdClientImpl implements PackageCustodianCmdClient {

    private final PropertiesConfig propertiesConfig;
    private final RestClientUtils restClientUtils;

    @Override
    public PackageCustodianAutomaticOutDto createAutomaticPackages(PackageCustodianAutomaticInDto request) {
        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getPackagesCustodyCmdBaseUrl())
                .path(propertiesConfig.getPackagesCustodyCmdAutomaticPath()
                        .replace("{version}", propertiesConfig.getPackagesCustodyCmdVersion()))
                .build()
                .toUri();

        int packages = request == null || request.getPackages() == null ? 0 : request.getPackages().size();
        int details = request == null || request.getPackages() == null ? 0
                : request.getPackages().stream().mapToInt(pkg -> pkg.getDetails() == null ? 0 : pkg.getDetails().size()).sum();
        try {
            log.info("Calling Packages Custody CMD automatic endpoint. uri={}, packages={}, details={}",
                    uri, packages, details);
            ResponseEntity<PackageCustodianAutomaticOutDto> response = restClientUtils.requestWithResponseObject(
                    uri, HttpMethod.POST, getHttpHeaders(), request, PackageCustodianAutomaticOutDto.class);
            if (!ObjectUtils.isEmpty(response.getBody())) {
                return response.getBody();
            }
        } catch (Exception ex) {
            log.error("Error calling Packages Custody CMD automatic endpoint. uri={}, packages={}, details={}, message={}",
                    uri, packages, details, ex.getMessage(), ex);
            throw new ClientException(ErrorCode.CLIENT_PACKAGE_CUSTODY_CMD_ERROR, HttpStatus.BAD_GATEWAY, ex);
        }

        return PackageCustodianAutomaticOutDto.builder().build();
    }

    private static HttpHeaders getHttpHeaders() {
        HttpHeaders headers = new HttpHeaders();
        headers.set(PropertiesEnum.CLIENT_IP.getValue(), PropertiesContext.getClientIp());
        headers.set(PropertiesEnum.CLIENT_USER.getValue(), PropertiesContext.getClientUser());
        headers.set(PropertiesEnum.CLIENT_DATETIME.getValue(),
                ApplicationUtils.convertLocalDateTimeToString(PropertiesContext.getClientDatetime()));
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setAccept(java.util.List.of(MediaType.APPLICATION_JSON));
        return headers;
    }
}

```

## src/main/java/com/nubo/operations/custody/api/client/rules/models/dto/request/StatusUpdateSettlementInDto.java

```java
package com.nubo.operations.custody.api.client.rules.models.dto.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.nubo.operations.custody.api.models.enums.BusinessRuleEnum;
import com.nubo.operations.custody.api.models.enums.SideEnum;
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

## src/main/java/com/nubo/operations/custody/api/client/rules/models/dto/response/StatusClientOutDto.java

```java
package com.nubo.operations.custody.api.client.rules.models.dto.response;

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

## src/main/java/com/nubo/operations/custody/api/client/rules/models/dto/response/StatusUpdateSettlementOutDto.java

```java
package com.nubo.operations.custody.api.client.rules.models.dto.response;

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

## src/main/java/com/nubo/operations/custody/api/client/rules/service/OperationBusinessRuleClient.java

```java
package com.nubo.operations.custody.api.client.rules.service;

import com.nubo.operations.custody.api.client.rules.models.dto.request.StatusUpdateSettlementInDto;
import com.nubo.operations.custody.api.client.rules.models.dto.response.StatusUpdateSettlementOutDto;

public interface OperationBusinessRuleClient {

    StatusUpdateSettlementOutDto validateUpdateStatusSettlement(
            StatusUpdateSettlementInDto statusUpdateSettlementInDto);

}

```

## src/main/java/com/nubo/operations/custody/api/client/rules/service/impl/OperationBusinessRuleClientImpl.java

```java
package com.nubo.operations.custody.api.client.rules.service.impl;

import com.nubo.operations.custody.api.application.properties.PropertiesConfig;
import com.nubo.operations.custody.api.application.properties.PropertiesContext;
import com.nubo.operations.custody.api.application.util.ApplicationUtils;
import com.nubo.operations.custody.api.application.util.RestClientUtils;
import com.nubo.operations.custody.api.client.rules.models.dto.request.StatusUpdateSettlementInDto;
import com.nubo.operations.custody.api.client.rules.models.dto.response.StatusUpdateSettlementOutDto;
import com.nubo.operations.custody.api.client.rules.service.OperationBusinessRuleClient;
import com.nubo.operations.custody.api.exception.ClientException;
import com.nubo.operations.custody.api.exception.error.ErrorCode;
import com.nubo.operations.custody.api.models.enums.PropertiesEnum;
import com.nubo.operations.custody.api.models.enums.VersionApiEnum;
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

    private static final String PATH_STATUS_UPDATE_BUSINESS_RULE = "status-update-business-rule";

    @Override
    public StatusUpdateSettlementOutDto validateUpdateStatusSettlement(StatusUpdateSettlementInDto statusUpdateSettlementInDto) {
        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getUrlNuboOperationRules())
                .pathSegment(VersionApiEnum.V1.getValue(), PATH_STATUS_UPDATE_BUSINESS_RULE)
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

## src/main/java/com/nubo/operations/custody/api/exception/ClientException.java

```java
package com.nubo.operations.custody.api.exception;

import com.nubo.operations.custody.api.exception.error.ErrorCode;
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

## src/main/java/com/nubo/operations/custody/api/exception/ServiceException.java

```java
package com.nubo.operations.custody.api.exception;

import com.nubo.operations.custody.api.exception.error.ErrorCode;
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

    public ServiceException(ErrorCode errorCode, HttpStatus httpStatus, String message) {
        super(errorCode.getMessage(), new Throwable(message));
        this.errorCode = errorCode;
        this.httpStatus = httpStatus;
    }

    public ServiceException(ErrorCode errorCode, String message) {
        super(errorCode.getMessage(), new Throwable(message));
        this.errorCode = errorCode;
        this.httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
    }

    public HttpStatus getHttpStatusOrDefault() {
        return this.httpStatus != null ? this.httpStatus : HttpStatus.INTERNAL_SERVER_ERROR;
    }

}

```

## src/main/java/com/nubo/operations/custody/api/exception/error/ErrorCode.java

```java
package com.nubo.operations.custody.api.exception.error;

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
    HEADER_CLIENT_IP_REQUIRED("Header client_ip required"),
    HEADER_CLIENT_IP_INVALID("Header client_ip is invalid"),
    HEADER_CLIENT_USER_REQUIRED("Header client_user is required"),
    HEADER_CLIENT_DATETIME_REQUIRED("Header client_datetime is required"),
    HEADER_CLIENT_DATETIME_INVALID("Header client_datetime is invalid"),
    VERSION_API_NOT_FOUND("Version API not found"),
    CLIENT_OPERATION_RULES_ERROR("An unexpected error occurred in Operation Rules"),
    CLIENT_OPERATION_CMD_ERROR("An unexpected error occurred in Operation CMD"),
    ACTION_NOT_FOUND("Action not found"),
    ERROR_DESERIALIZER_JSON("Error Deserializer Json"),
    PARTICIPANT_NOT_FOUND("Participant not found"),
    SIDE_NOT_FOUND("Side not found"),
    STATUS_NOT_FOUND("Status not found"),
    FIC_ADMINISTRATOR_NOT_FOUND("FIC Administrator not found"),
    TRADE_NOT_FOUND("Trade not found"),
    CUSTODIAN_NOT_FOUND_IN_TRANSFER("Custodian not found in the transfer"),
    SETTLEMENT_NOT_FOUND("Settlement not found"),
    REJECTION_REASON_NOT_FOUND("Rejection Reason not found"),
    PARTICIPANT_BANK_ACCOUNT_NOT_FOUND("Participant bank account not found"),
    UNIQUE_FRACTION_ID_IS_REQUIRED("Unique fraction ID is required"),
    INVESTOR_ACCOUNT_NOT_FOUND("Investor Account not found"),
    PARTICIPANT_ACCOUNT_NOT_FOUND("Participant Account not found"),
    ERROR_KAFKA_PRODUCER_NUBO("Error Producer Kafka Nubo"),
    PACKAGE_NOT_FOUND("Package not found"),
    PACKAGE_STATUS_NOT_VALID("Package status is not valid for this action"),
    PACKAGE_ALREADY_SETTLED("Package is already settled and cannot be rejected"),
    ACCOUNTS_MUTUALLY_EXCLUSIVE("investorAccountId and participantAccountId cannot be provided simultaneously"),
    PACKAGE_CUSTODY_TRANSFER_DATA_INVALID("Cannot create custody package from transfer because required data is missing"),
    CLIENT_PACKAGE_CUSTODY_CMD_ERROR("An unexpected error occurred in Packages Custody CMD"),
    USER_TYPE_NOT_VALID("User type is not valid"),
    INVESTOR_ACCOUNT_ALREADY_ASSIGNED("Investor account is already assigned"),
    PARTICIPANT_ACCOUNT_ALREADY_ASSIGNED("Participant account is already assigned"),
    TYPE_NOT_FOUND("Type not found"),
    VALIDATION_ERROR("Validation error");

    private final String message;

    ErrorCode(String message) {
        this.message = message;
    }

    public String getName() {
        return this.name();
    }

}

```

## src/main/java/com/nubo/operations/custody/api/exception/error/ErrorResponse.java

```java
package com.nubo.operations.custody.api.exception.error;

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

## src/main/java/com/nubo/operations/custody/api/exception/error/ErrorValidation.java

```java
package com.nubo.operations.custody.api.exception.error;

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

## src/main/java/com/nubo/operations/custody/api/exception/handler/CustomKafkaErrorHandler.java

```java
package com.nubo.operations.custody.api.exception.handler;

import com.nubo.operations.custody.api.exception.ServiceException;
import com.nubo.operations.custody.api.exception.error.ErrorCode;
import com.nubo.operations.custody.api.exception.kafka.KafkaErrorBuild;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.kafka.clients.consumer.Consumer;
import org.apache.kafka.clients.consumer.ConsumerRecord;
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

    private void handle(Exception exception, Consumer<?, ?> consumer) {
        if (exception instanceof ServiceException ex) {
            kafkaErrorBuild.buildError(exception, ex.getErrorCode());
        } else if (exception instanceof RecordDeserializationException ex) {
            kafkaErrorBuild.buildError(exception, ErrorCode.ERROR_DESERIALIZER_JSON, ex.offset());
            consumer.seek(ex.topicPartition(), ex.offset() + 1L);
            consumer.commitSync();
        } else {
            kafkaErrorBuild.buildError(exception, ErrorCode.ERROR_KAFKA_PRODUCER_NUBO);
        }
    }

}
```

## src/main/java/com/nubo/operations/custody/api/exception/handler/GlobalExceptionHandler.java

```java
package com.nubo.operations.custody.api.exception.handler;

import com.nubo.operations.custody.api.application.properties.PropertiesContext;
import com.nubo.operations.custody.api.application.util.ApplicationUtils;
import com.nubo.operations.custody.api.exception.ClientException;
import com.nubo.operations.custody.api.exception.ServiceException;
import com.nubo.operations.custody.api.exception.error.ErrorCode;
import com.nubo.operations.custody.api.exception.error.ErrorResponse;
import com.nubo.operations.custody.api.exception.error.ErrorValidation;
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

## src/main/java/com/nubo/operations/custody/api/exception/kafka/KafkaErrorBuild.java

```java
package com.nubo.operations.custody.api.exception.kafka;

import com.nubo.operations.custody.api.application.properties.PropertiesConfig;
import com.nubo.operations.custody.api.exception.error.ErrorCode;
import com.nubo.operations.custody.api.exception.error.ErrorResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
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
        ErrorResponse errorResponse = ErrorResponse.builder()
                .httpCode(String.valueOf(HttpStatus.INTERNAL_SERVER_ERROR.value()))
                .url(propertiesConfig.getKafkaNuboBootstrapServers())
                .errorCode(errorCode.getName())
                .errorMessage(errorCode.getMessage())
                .errorMessageDetail(ObjectUtils.isEmpty(exception.getCause()) ?
                        exception.getMessage() : exception.getCause().getMessage())
                .timestamp(String.valueOf(LocalDateTime.now()))
                .build();

        log.error("Error -> {}", errorResponse);
    }

}
```

## src/main/java/com/nubo/operations/custody/api/helpers/MapperPageUtil.java

```java
package com.nubo.operations.custody.api.helpers;

import com.nubo.operations.custody.api.models.dto.response.PageResponseOutDto;
import org.springframework.data.domain.Page;

import java.util.List;

public class MapperPageUtil {

    private MapperPageUtil() {
    }

    public static <T, U> PageResponseOutDto<T> pageToPageResponseOutDto(List<T> list, Page<U> page) {
        PageResponseOutDto<T> paginationResponseDto = new PageResponseOutDto<>();
        paginationResponseDto.setContent(list);
        paginationResponseDto.setPageSize(page.getSize());
        paginationResponseDto.setPageNumber(page.getNumber());
        paginationResponseDto.setTotalElements(page.getTotalElements());
        paginationResponseDto.setTotalPages(page.getTotalPages());

        return paginationResponseDto;
    }

}

```

## src/main/java/com/nubo/operations/custody/api/helpers/MapperUtil.java

```java
package com.nubo.operations.custody.api.helpers;

import com.nubo.operations.custody.api.models.dto.request.CustodyTransferInDto;
import com.nubo.operations.custody.api.models.dto.response.*;
import com.nubo.operations.custody.api.models.entity.BankEntity;
import com.nubo.operations.custody.api.models.entity.CountryEntity;
import com.nubo.operations.custody.api.models.entity.CurrencyEntity;
import com.nubo.operations.custody.api.models.entity.DepositoryEntity;
import com.nubo.operations.custody.api.models.entity.GicsEntity;
import com.nubo.operations.custody.api.models.entity.IdentificationTypeEntity;
import com.nubo.operations.custody.api.models.entity.InvestorAccountEntity;
import com.nubo.operations.custody.api.models.entity.InvestorEntity;
import com.nubo.operations.custody.api.models.entity.MarketEntity;
import com.nubo.operations.custody.api.models.entity.ParticipantAccountEntity;
import com.nubo.operations.custody.api.models.entity.ParticipantEntity;
import com.nubo.operations.custody.api.models.entity.RejectionReasonEntity;
import com.nubo.operations.custody.api.models.entity.SecurityTitleEntity;
import com.nubo.operations.custody.api.models.entity.SettlementEntity;
import com.nubo.operations.custody.api.models.entity.SideEntity;
import com.nubo.operations.custody.api.models.entity.StatusEntity;
import com.nubo.operations.custody.api.models.entity.TaxStatusEntity;
import com.nubo.operations.custody.api.models.entity.TradeEntity;
import com.nubo.operations.custody.api.models.entity.TradingSessionEntity;
import com.nubo.operations.custody.api.models.entity.TradingSystemEntity;
import com.nubo.operations.custody.api.models.entity.TypeEntity;
import com.nubo.operations.custody.api.models.enums.SideEnum;
import org.springframework.util.ObjectUtils;

public class MapperUtil {

    private MapperUtil() {
    }

    public static SettlementByCustodyOutDto settlementEntityToSettlementByCustodyOutDto(SettlementEntity settlementEntity) {
        if (ObjectUtils.isEmpty(settlementEntity)) return null;
        return SettlementByCustodyOutDto.builder()
                .trade(tradeEntityToTradeOutDto(settlementEntity.getTrade()))
                .tradeId(settlementEntity.getTrade().getId())
                .fraction(settlementEntity.getFraction())
                .side(sideEntityToSideOutDto(settlementEntity.getSide()))
                .investor(investorEntityToInvestorOutDto(settlementEntity.getInvestor()))
                .investorAccount(investorAccountEntityToInvestorAccountOutDto(settlementEntity.getInvestorAccount()))
                .participantAccount(participantAccountEntityToParticipantAccountOutDto(settlementEntity.getParticipantAccount()))
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
                .repoAmount(settlementEntity.getRepoAmount())
                .fundingAmount(settlementEntity.getFundingAmount())
                .netOutFlowTotal(settlementEntity.getNetOutFlowTotal())
                .outFlowTurnoverValue(settlementEntity.getOutFlowTurnoverValue())
                .returnTurnoverValue(settlementEntity.getReturnTurnoverValue())
                .deliveryVersusPaymentValue(settlementEntity.getDeliveryVersusPaymentValue())
                .tradingSystem(tradingSystemEntityToTradingSystemOutDto(settlementEntity.getTradingSystem()))
                .status(statusEntityToStatusOutDto(settlementEntity.getStatus()))
                .brokerageService(settlementEntity.getBrokerageService())
                .custodian(participantEntityToParticipantOutDto(settlementEntity.getCustodian()))
                .settlementAmount(settlementEntity.getSettlementAmount())
                .reference(settlementEntity.getReference())
                .capitalGainValue(settlementEntity.getCapitalGainValue())
                .disbursementValue(settlementEntity.getDisbursementValue())
                .sourceQuoteType(typeEntityToTypeOutDto(settlementEntity.getSourceQuoteType()))
                .ficAdministrator(participantEntityToFicAdministratorOutDto(settlementEntity.getFicAdministrator()))
                .custodianStatus(statusEntityToStatusOutDto(settlementEntity.getCustodianStatus()))
                .settlementStatus(statusEntityToStatusOutDto(settlementEntity.getSettlementStatus()))
                .build();
    }

    public static SettlementCustodyActionOutDto settlementEntityToSettlementCustodyActionOutDto(SettlementEntity settlementEntity) {
        if (ObjectUtils.isEmpty(settlementEntity)) return null;
        return SettlementCustodyActionOutDto.builder()
                .trade(tradeEntityToTradeCustodyActionOutDto(settlementEntity.getTrade(), settlementEntity))
                .fraction(settlementEntity.getFraction())
                .side(sideEntityToSideOutDto(settlementEntity.getSide()))
                .custodian(participantEntityToParticipantCustodyActionOutDto(settlementEntity.getCustodian()))
                .status(statusEntityToStatusOutDto(settlementEntity.getStatus()))
                .custodianStatus(statusEntityToStatusOutDto(settlementEntity.getCustodianStatus()))
                .rejectionReason(settlementEntity.getRejectionReason())
                .build();
    }

    public static TradeOutDto tradeEntityToTradeOutDto(TradeEntity tradeEntity) {
        if (ObjectUtils.isEmpty(tradeEntity)) return null;
        return TradeOutDto.builder()
                .id(tradeEntity.getId())
                .matchDate(tradeEntity.getMatchDate())
                .matchId(tradeEntity.getMatchId())
                .clearingDate(tradeEntity.getClearingDate())
                .returnClearingDate(tradeEntity.getReturnClearingDate())
                .depository(depositoryEntityToDepositoryOutDto(tradeEntity.getDepository()))
                .country(countryEntityToCountryOutDto(tradeEntity.getCountry()))
                .type(typeEntityToTypeOutDto(tradeEntity.getType()))
                .market(marketEntityToMarketOutDto(tradeEntity.getMarket()))
                .securityTitle(securityTitleEntityToSecurityTitleOutDto(tradeEntity.getSecurityTitle()))
                .participantBuy(participantEntityToParticipantOutDto(tradeEntity.getParticipantBuy()))
                .participantSell(participantEntityToParticipantOutDto(tradeEntity.getParticipantSell()))
                .custodianBuy(participantEntityToParticipantOutDto(tradeEntity.getCustodianBuy()))
                .custodianSell(participantEntityToParticipantOutDto(tradeEntity.getCustodianSell()))
                .assignmentMarkBuy(tradeEntity.getAssignmentMarkBuy())
                .assignmentMarkSell(tradeEntity.getAssignmentMarkSell())
                .fractionalMarkBuy(tradeEntity.getFractionalMarkBuy())
                .fractionalMarkSell(tradeEntity.getFractionalMarkSell())
                .advanceStatus(tradeEntity.getAdvanceStatus())
                .exitIndicatorSettlement(tradeEntity.getExitIndicatorSettlement())
                .returnIndicatorSettlement(tradeEntity.getReturnIndicatorSettlement())
                .canceledStatus(tradeEntity.getCanceledStatus())
                .quantity(tradeEntity.getQuantity())
                .price(tradeEntity.getPrice())
                .volume(tradeEntity.getVolume())
                .repurchaseRate(tradeEntity.getRepurchaseRate())
                .repurchaseAmount(tradeEntity.getRepurchaseAmount())
                .status(statusEntityToStatusOutDto(tradeEntity.getStatus()))
                .matchTime(tradeEntity.getMatchTime())
                .ownPositionSell(tradeEntity.getOwnPositionSell())
                .ownPositionBuy(tradeEntity.getOwnPositionBuy())
                .currency(currencyEntityToCurrencyOutDto(tradeEntity.getCurrency()))
                .tradingSystem(tradingSystemEntityToTradingSystemOutDto(tradeEntity.getTradingSystem()))
                .tradingSession(tradingSessionEntityToTradingSessionOutDto(tradeEntity.getTradingSession()))
                .repurchaseAgreementDate(tradeEntity.getRepurchaseAgreementDate())
                .daysToSettlement(tradeEntity.getDaysToSettlement())
                .repoRate(tradeEntity.getRepoRate())
                .repoAmount(tradeEntity.getRepoAmount())
                .fundingAmount(tradeEntity.getFundingAmount())
                .netOutFlowTotal(tradeEntity.getNetOutFlowTotal())
                .outFlowTurnOverValue(tradeEntity.getOutFlowTurnOverValue())
                .totalNetReturn(tradeEntity.getTotalNetReturn())
                .returnTurnoverValue(tradeEntity.getReturnTurnoverValue())
                .deliveryVersusPaymentValue(tradeEntity.getDeliveryVersusPaymentValue())
                .reallocationIndicator(tradeEntity.getReallocationIndicator())
                .businessType(typeEntityToTypeOutDto(tradeEntity.getBusinessType()))
                .marketType(typeEntityToTypeOutDto(tradeEntity.getMarketType()))
                .originType(typeEntityToTypeOutDto(tradeEntity.getOriginType()))
                .settlementIndicatorOutgoing(tradeEntity.getSettlementIndicatorOutgoing())
                .settlementIndicatorReturn(tradeEntity.getSettlementIndicatorReturn())
                .settlementIndicatorAdvance(tradeEntity.getSettlementIndicatorAdvance())
                .salesGuarantee(tradeEntity.getSalesGuarantee())
                .purchaseGuarantee(tradeEntity.getPurchaseGuarantee())
                .purchasePaymentIndicator(tradeEntity.getPurchasePaymentIndicator())
                .issuanceMarket(marketEntityToMarketOutDto(tradeEntity.getIssuanceMarket()))
                .paymentType(typeEntityToTypeOutDto(tradeEntity.getPaymentType()))
                .settlementType(typeEntityToTypeOutDto(tradeEntity.getSettlementType()))
                .custodianStatus(statusEntityToStatusOutDto(tradeEntity.getCustodianStatus()))
                .settlementStatus(statusEntityToStatusOutDto(tradeEntity.getSettlementStatus()))
                .bloquingStatus(statusEntityToStatusOutDto(tradeEntity.getBloquingStatus()))
                .build();
    }

    public static TradeCustodyActionOutDto tradeEntityToTradeCustodyActionOutDto(TradeEntity tradeEntity, SettlementEntity settlementEntity) {
        if (ObjectUtils.isEmpty(tradeEntity)) return null;
        return TradeCustodyActionOutDto.builder()
                .id(tradeEntity.getId())
                .matchDate(tradeEntity.getMatchDate())
                .matchId(tradeEntity.getMatchId())
                .clearingDate(tradeEntity.getClearingDate())
                .returnClearingDate(tradeEntity.getReturnClearingDate())
                .participantBuy(SideEnum.BUY.getId().equals(settlementEntity.getSide().getId()) ?
                        participantEntityToParticipantCustodyActionOutDto(tradeEntity.getParticipantBuy()) : null)
                .participantSell(SideEnum.SELL.getId().equals(settlementEntity.getSide().getId()) ?
                        participantEntityToParticipantCustodyActionOutDto(tradeEntity.getParticipantSell()) : null)
                .build();
    }

    public static SecurityTitleOutDto securityTitleEntityToSecurityTitleOutDto(SecurityTitleEntity securityTitleEntity) {
        if (ObjectUtils.isEmpty(securityTitleEntity)) return null;
        return SecurityTitleOutDto.builder()
                .id(securityTitleEntity.getId())
                .market(marketEntityToMarketOutDto(securityTitleEntity.getMarket()))
                .equityCode(securityTitleEntity.getEquityCode())
                .mnemonic(securityTitleEntity.getMnemonic())
                .isin(securityTitleEntity.getIsin())
                .build();
    }

    public static InvestorOutDto investorEntityToInvestorOutDto(InvestorEntity investorEntity) {
        if (ObjectUtils.isEmpty(investorEntity)) return null;
        return InvestorOutDto.builder()
                .id(investorEntity.getId())
                .code(investorEntity.getCode())
                .firstName(investorEntity.getFirstName())
                .lastName(investorEntity.getLastName())
                .companyName(investorEntity.getCompanyName())
                .type(typeEntityToTypeOutDto(investorEntity.getType()))
                .status(statusEntityToStatusOutDto(investorEntity.getStatus()))
                .country(countryEntityToCountryOutDto(investorEntity.getCountry()))
                .departmentId(investorEntity.getDepartmentId())
                .cityId(investorEntity.getCityId())
                .documentNumber(investorEntity.getDocumentNumber())
                .identificationType(identificationTypeEntityToIdentificationTypeOutDto(investorEntity.getIdentificationType()))
                .nationality(investorEntity.getNationality())
                .address(investorEntity.getAddress())
                .phoneNumber(investorEntity.getPhoneNumber())
                .email(investorEntity.getEmail())
                .clearinghouseCode(investorEntity.getClearinghouseCode())
                .gicsId(gicsEntityToGicsOutDto(investorEntity.getGics()))
                .moneyLaunderingFlag(investorEntity.getMoneyLaunderingFlag())
                .taxStatusId(taxStatusEntityToTaxStatusOutDto(investorEntity.getTaxStatus()))
                .build();
    }

    public static InvestorAccountOutDto investorAccountEntityToInvestorAccountOutDto(InvestorAccountEntity investorAccountEntity) {
        if (ObjectUtils.isEmpty(investorAccountEntity)) return null;
        return InvestorAccountOutDto.builder()
                .id(investorAccountEntity.getId())
                .accountNumber(investorAccountEntity.getAccountNumber())
                .investor(investorEntityToInvestorOutDto(investorAccountEntity.getInvestor()))
                .status(statusEntityToStatusOutDto(investorAccountEntity.getStatus()))
                .type(typeEntityToTypeOutDto(investorAccountEntity.getType()))
                .depository(depositoryEntityToDepositoryOutDto(investorAccountEntity.getDepository()))
                .participant(participantEntityToParticipantOutDto(investorAccountEntity.getParticipant()))
                .build();
    }

    public static ParticipantAccountOutDto participantAccountEntityToParticipantAccountOutDto(
            ParticipantAccountEntity participantAccountEntity) {
        if (ObjectUtils.isEmpty(participantAccountEntity)) return null;
        return ParticipantAccountOutDto.builder()
                .id(participantAccountEntity.getId())
                .accountNumber(participantAccountEntity.getAccountNumber())
                .status(statusEntityToStatusOutDto(participantAccountEntity.getStatus()))
                .type(typeEntityToTypeOutDto(participantAccountEntity.getType()))
                .participant(participantEntityToParticipantOutDto(participantAccountEntity.getParticipant()))
                .build();
    }

    public static FicAdministratorOutDto participantEntityToFicAdministratorOutDto(ParticipantEntity entity) {
        if (ObjectUtils.isEmpty(entity)) return null;
        return FicAdministratorOutDto.builder()
                .id(entity.getId())
                .ficAdministratorCode(entity.getCode())
                .description(entity.getName())
                .build();
    }

    public static TaxStatusOutDto taxStatusEntityToTaxStatusOutDto(TaxStatusEntity entity) {
        if (ObjectUtils.isEmpty(entity)) return null;
        return TaxStatusOutDto.builder()
                .id(entity.getId())
                .description(entity.getDescription())
                .build();
    }

    public static GicsOutDto gicsEntityToGicsOutDto(GicsEntity entity) {
        if (ObjectUtils.isEmpty(entity)) return null;
        return GicsOutDto.builder()
                .id(entity.getId())
                .description(entity.getDescription())
                .build();
    }

    public static IdentificationTypeOutDto identificationTypeEntityToIdentificationTypeOutDto(IdentificationTypeEntity entity) {
        if (ObjectUtils.isEmpty(entity)) return null;
        return IdentificationTypeOutDto.builder()
                .id(entity.getId())
                .description(entity.getDescription())
                .build();
    }

    public static RejectionReasonOutDto rejectionReasonEntityToRejectionReasonOutDto(RejectionReasonEntity entity) {
        if (ObjectUtils.isEmpty(entity)) return null;
        return RejectionReasonOutDto.builder()
                .id(entity.getId())
                .reason(entity.getReason())
                .build();
    }

    public static CountryOutDto countryEntityToCountryOutDto(CountryEntity countryEntity) {
        if (ObjectUtils.isEmpty(countryEntity)) return null;
        return CountryOutDto.builder()
                .id(countryEntity.getId())
                .name(countryEntity.getName())
                .build();
    }

    public static TypeOutDto typeEntityToTypeOutDto(TypeEntity typeEntity) {
        if (ObjectUtils.isEmpty(typeEntity)) return null;
        return TypeOutDto.builder()
                .id(typeEntity.getId())
                .description(typeEntity.getDescription())
                .build();
    }

    public static BankOutDto bankEntityToTypeOutDto(BankEntity bank) {
        if (ObjectUtils.isEmpty(bank)) return null;
        return BankOutDto.builder()
                .id(bank.getId())
                .name(bank.getName())
                .code(bank.getCode())
                .country(countryEntityToCountryOutDto(bank.getCountry()))
                .build();
    }

    public static DepositoryOutDto depositoryEntityToDepositoryOutDto(DepositoryEntity depositoryEntity) {
        if (ObjectUtils.isEmpty(depositoryEntity)) return null;
        return DepositoryOutDto.builder()
                .id(depositoryEntity.getId())
                .description(depositoryEntity.getDescription())
                .build();
    }

    public static SideOutDto sideEntityToSideOutDto(SideEntity sideEntity) {
        if (ObjectUtils.isEmpty(sideEntity)) return null;
        return SideOutDto.builder()
                .id(sideEntity.getId())
                .description(sideEntity.getDescription())
                .build();
    }

    public static StatusOutDto statusEntityToStatusOutDto(StatusEntity statusEntity) {
        if (ObjectUtils.isEmpty(statusEntity)) return null;
        return StatusOutDto.builder()
                .id(statusEntity.getId())
                .description(statusEntity.getDescription())
                .build();
    }

    public static ParticipantOutDto participantEntityToParticipantOutDto(ParticipantEntity participantEntity) {
        if (ObjectUtils.isEmpty(participantEntity)) return null;
        return ParticipantOutDto.builder()
                .id(participantEntity.getId())
                .name(participantEntity.getName())
                .mnemonic(participantEntity.getMnemonic())
                .documentNumber(participantEntity.getDocumentNumber())
                .identificationType(identificationTypeEntityToIdentificationTypeOutDto(participantEntity.getIdentificationType()))
                .code(participantEntity.getCode())
                .shortName(participantEntity.getShortName())
                .build();
    }

    public static ParticipantCustodyActionOutDto participantEntityToParticipantCustodyActionOutDto(ParticipantEntity participantEntity) {
        if (ObjectUtils.isEmpty(participantEntity)) return null;
        return ParticipantCustodyActionOutDto.builder()
                .id(participantEntity.getId())
                .code(participantEntity.getCode())
                .name(participantEntity.getName())
                .build();
    }

    public static ParticipantShortOutDto participantEntityToParticipantShortOutDto(ParticipantEntity participantEntity) {
        if (ObjectUtils.isEmpty(participantEntity)) return null;
        return ParticipantShortOutDto.builder()
                .id(participantEntity.getId())
                .name(participantEntity.getName())
                .code(participantEntity.getMnemonic())
                .build();
    }

    public static TradingSessionOutDto tradingSessionEntityToTradingSessionOutDto(TradingSessionEntity tradingSessionEntity) {
        if (ObjectUtils.isEmpty(tradingSessionEntity)) return null;
        return TradingSessionOutDto.builder()
                .id(tradingSessionEntity.getId())
                .description(tradingSessionEntity.getDescription())
                .build();
    }

    public static TradingSystemOutDto tradingSystemEntityToTradingSystemOutDto(TradingSystemEntity tradingSystemEntity) {
        if (ObjectUtils.isEmpty(tradingSystemEntity)) return null;
        return TradingSystemOutDto.builder()
                .id(tradingSystemEntity.getId())
                .description(tradingSystemEntity.getDescription())
                .build();
    }

    public static CurrencyOutDto currencyEntityToCurrencyOutDto(CurrencyEntity currencyEntity) {
        if (ObjectUtils.isEmpty(currencyEntity)) return null;
        return CurrencyOutDto.builder()
                .id(currencyEntity.getId())
                .code(currencyEntity.getCode())
                .name(currencyEntity.getName())
                .build();
    }

    public static MarketOutDto marketEntityToMarketOutDto(MarketEntity marketEntity) {
        if (ObjectUtils.isEmpty(marketEntity)) return null;
        return MarketOutDto.builder()
                .id(marketEntity.getId())
                .description(marketEntity.getDescription())
                .build();
    }

    public static CustodyTransferResultOutDto settlementEntityToCustodyTransferResultDto(
            SettlementEntity settlementEntity) {

        if (ObjectUtils.isEmpty(settlementEntity))
            return null;

        TradeEntity trade = settlementEntity.getTrade();
        ParticipantEntity participant = SideEnum.BUY.getId()
                .equals(settlementEntity.getSide().getId())
                ? trade.getParticipantBuy()
                : trade.getParticipantSell();

        return CustodyTransferResultOutDto.builder()
                .tradeId(trade.getId())
                .fraction(settlementEntity.getFraction())
                .side(sideEntityToSideOutDto(settlementEntity.getSide()))
                .participant(
                        participantEntityToParticipantOutDto(participant))
                .matchDate(trade.getMatchDate())
                .clearingDate(trade.getClearingDate())
                .isValid(true)
                .rejectionReason(null)
                .build();
    }

    public static CustodyTransferResultOutDto toRejectedCustodyTransferResultDto(
            CustodyTransferInDto inDto,
            String rejectionReason,
            SideEntity side,
            TradeEntity trade) {

        ParticipantEntity participant = SideEnum.BUY.getId()
                .equals(inDto.getSideId())
                ? trade.getParticipantBuy()
                : trade.getParticipantSell();

        return CustodyTransferResultOutDto.builder()
                .tradeId(inDto.getTradeId())
                .matchId(trade.getMatchId())
                .fraction(inDto.getFraction())
                .side(sideEntityToSideOutDto(side))
                .participant(
                        participantEntityToParticipantOutDto(participant))
                .matchDate(trade.getMatchDate())
                .clearingDate(trade.getClearingDate())
                .isValid(false)
                .rejectionReason(rejectionReason)
                .build();
    }

}

```

## src/main/java/com/nubo/operations/custody/api/helpers/SendNotificationUtil.java

```java
package com.nubo.operations.custody.api.helpers;

import com.nubo.operations.custody.api.application.properties.PropertiesConfig;
import com.nubo.operations.custody.api.application.util.ApplicationUtils;
import com.nubo.operations.custody.api.client.kafka.producer.service.KafkaNuboProducer;
import com.nubo.operations.custody.api.models.dto.response.NotificationRequestDto;
import com.nubo.operations.custody.api.models.enums.NotificationCustodyActionEnum;
import com.nubo.operations.custody.api.models.enums.NotificationMessageEnum;
import com.nubo.operations.custody.api.models.enums.NotificationTypeEnum;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import tools.jackson.databind.node.JsonNodeFactory;
import tools.jackson.databind.node.ObjectNode;

import org.springframework.stereotype.Component;

import java.util.List;

@Log4j2
@Component
@RequiredArgsConstructor
public class SendNotificationUtil {

    private final PropertiesConfig propertiesConfig;
    private final KafkaNuboProducer kafkaNuboAdapter;

    public void sendNotification(NotificationTypeEnum notificationType, NotificationMessageEnum notificationMessage,
            Long scheduleExtensionId, Long userId) {

        log.info("Enviando notificación tipo: {} - mensaje: {} - scheduleExtensionId: {} - userId: {}",
                notificationType.getDescription(), notificationMessage.getDescription(), scheduleExtensionId, userId);
        try {
            ObjectNode metadataNode = JsonNodeFactory.instance.objectNode();
            if (scheduleExtensionId != null) {
                metadataNode.put("id", scheduleExtensionId.toString());
            }

            NotificationRequestDto notification = NotificationRequestDto.builder()
                    .notificacionId(notificationMessage.getCode().longValue())
                    .tipoNotificacion(notificationType.getDescription())
                    .eventType(propertiesConfig.getKafkaNuboNotificationEventType())
                    .modulo(propertiesConfig.getKafkaNuboNotificationModule())
                    .usuariosIds(userId != null ? List.of(userId) : List.of())
                    .timestamp(
                            java.time.OffsetDateTime.now(java.time.ZoneOffset.UTC)
                                    .withNano(0)
                                    .toString())
                    .metadata(metadataNode)
                    .build();

            String json = ApplicationUtils.convertObjectToJson(notification);
            kafkaNuboAdapter.sendMessageNotification(json);
            log.info("Notificación enviada exitosamente para usuario: {}", userId);

        } catch (Exception e) {
            log.error("Error enviando notificación a Kafka", e);
        }

    }

    public void sendNotificationCustodyActions(NotificationTypeEnum notificationType,
            NotificationCustodyActionEnum notificationCustodyActionEnum,
            String custodyCode,
            Long matchId,
            List<Long> userIds) {
        try {
            ObjectNode metadataNode = JsonNodeFactory.instance.objectNode();
            metadataNode.put("custodio_code", custodyCode);
            metadataNode.put("numero_folio", matchId.toString());

            NotificationRequestDto notification = NotificationRequestDto.builder()
                    .eventType(propertiesConfig.getKafkaNuboNotificationEventType())
                    .notificacionId(notificationCustodyActionEnum.getId())
                    .tipoNotificacion(notificationType.getDescription())
                    .modulo(propertiesConfig.getKafkaNuboNotificationModule())
                    .usuariosIds(userIds)
                    .timestamp(
                            java.time.OffsetDateTime.now(java.time.ZoneOffset.UTC)
                                    .withNano(0)
                                    .toString())
                    .metadata(metadataNode)
                    .build();

            String json = ApplicationUtils.convertObjectToJson(notification);
            kafkaNuboAdapter.sendMessageNotification(json);

        } catch (Exception e) {
            log.error("Error enviando notificación a Kafka", e);
        }
    }
}

```

## src/main/java/com/nubo/operations/custody/api/helpers/ValidatorUtil.java

```java
package com.nubo.operations.custody.api.helpers;

import java.util.Set;

import org.springframework.stereotype.Component;

import com.nubo.operations.custody.api.exception.ServiceException;
import com.nubo.operations.custody.api.exception.error.ErrorCode;

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

## src/main/java/com/nubo/operations/custody/api/models/domain/UserNuboData.java

```java
package com.nubo.operations.custody.api.models.domain;

import com.nubo.operations.custody.api.models.entity.ParticipantEntity;
import com.nubo.operations.custody.api.models.enums.UserTypeEnum;

public record UserNuboData(
        long userId,
        Long participantId,
        boolean isParticipantCustodian,
        String participantCountryCode,
        UserTypeEnum userTypeEnum,
        ParticipantEntity participantEntity) {
}

```

## src/main/java/com/nubo/operations/custody/api/models/dto/request/BatchCustodyRejectInDto.java

```java
package com.nubo.operations.custody.api.models.dto.request;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BatchCustodyRejectInDto {
    @NotBlank
    private String batchId;

    @NotEmpty
    private List<@NotNull @Valid CustodyRejectInDto> items;
}

```

## src/main/java/com/nubo/operations/custody/api/models/dto/request/BatchPackageRejectInDto.java

```java
package com.nubo.operations.custody.api.models.dto.request;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BatchPackageRejectInDto {
    @NotBlank
    private String batchId;

    @NotEmpty
    private List<@NotNull @Valid PackageRejectInDto> items;
}

```

## src/main/java/com/nubo/operations/custody/api/models/dto/request/CustodyActionItemInDto.java

```java
package com.nubo.operations.custody.api.models.dto.request;

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
public class CustodyActionItemInDto {

    @NotNull
    private Long tradeId;

    @NotNull
    private Integer fraction;

    @NotNull
    private String sideId;

    @Min(value = 1)
    private Long investorAccountId;

    @Min(value = 1)
    private Long participantAccountId;

    @Min(value = 1)
    private Long sourceQuoteTypeId;

}

```

## src/main/java/com/nubo/operations/custody/api/models/dto/request/CustodyActionRequest.java

```java
package com.nubo.operations.custody.api.models.dto.request;

public interface CustodyActionRequest {
    Long getPackageId();
}

```

## src/main/java/com/nubo/operations/custody/api/models/dto/request/CustodyAdmitInDto.java

```java
package com.nubo.operations.custody.api.models.dto.request;

import com.fasterxml.jackson.annotation.JsonIgnore;

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
public class CustodyAdmitInDto implements CustodyActionRequest {

    @NotNull
    private Long packageId;

    @NotNull
    private Long custodianId;

    private Long investorAccountId;

    private Long sourceQuoteTypeId;

    // --- Assert validations ----

    @JsonIgnore
    @AssertTrue(message = "sourceQuoteTypeId is required when investorAccountId is provided")
    public boolean isSourceQuoteTypeRequiredForInvestor() {
        return investorAccountId == null || sourceQuoteTypeId != null;
    }

}

```

## src/main/java/com/nubo/operations/custody/api/models/dto/request/CustodyPrematchInDto.java

```java
package com.nubo.operations.custody.api.models.dto.request;

import jakarta.validation.constraints.NotNull;
import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CustodyPrematchInDto implements CustodyActionRequest {

    @NotNull
    private Long packageId;
}

```

## src/main/java/com/nubo/operations/custody/api/models/dto/request/CustodyRejectInDto.java

```java

package com.nubo.operations.custody.api.models.dto.request;

import jakarta.validation.constraints.NotNull;
import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CustodyRejectInDto implements CustodyActionRequest {

    @NotNull
    private Long packageId;

    @NotNull
    private Long rejectionReasonId;

    private String otherReason;

    @NotNull
    private Long custodianId;
}
```

## src/main/java/com/nubo/operations/custody/api/models/dto/request/CustodyTransferInDto.java

```java
package com.nubo.operations.custody.api.models.dto.request;

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
public class CustodyTransferInDto{

    @NotNull
    private Long tradeId;

    @NotNull
    @Min(0)
    private Integer fraction;

    @NotNull
    private String sideId;

    @NotNull
    private Long custodianId;

    private Long ficAdministratorId;

}

```

## src/main/java/com/nubo/operations/custody/api/models/dto/request/PackageRejectInDto.java

```java
package com.nubo.operations.custody.api.models.dto.request;

import jakarta.validation.constraints.NotNull;
import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PackageRejectInDto {

    @NotNull
    private Long packageId;
}
```

## src/main/java/com/nubo/operations/custody/api/models/dto/response/AfpFundOutDto.java

```java
package com.nubo.operations.custody.api.models.dto.response;

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
public class AfpFundOutDto {

    private Long id;

    private String description;

}

```

## src/main/java/com/nubo/operations/custody/api/models/dto/response/BankAccountOutDto.java

```java
package com.nubo.operations.custody.api.models.dto.response;

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
public class BankAccountOutDto {

    private Long id;

    private String accountNumber;

    private String bankName;

    private BankOutDto bank;

}

```

## src/main/java/com/nubo/operations/custody/api/models/dto/response/BankOutDto.java

```java
package com.nubo.operations.custody.api.models.dto.response;

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
public class BankOutDto {

    private Long id;

    private String name;

    private String code;

    private CountryOutDto country;

}

```

## src/main/java/com/nubo/operations/custody/api/models/dto/response/BatchCustodyActionItemOutDto.java

```java
package com.nubo.operations.custody.api.models.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BatchCustodyActionItemOutDto {
    public enum Status { SUCCESS, FUNCTIONAL_FAILURE, TECHNICAL_ERROR, NOT_PROCESSED }

    private int index;
    private Long packageId;
    private boolean success;
    private Status status;
    private CustodyActionOutDto result;
    private String errorCode;
    private String errorMessage;
}

```

## src/main/java/com/nubo/operations/custody/api/models/dto/response/BatchCustodyActionOutDto.java

```java
package com.nubo.operations.custody.api.models.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
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

## src/main/java/com/nubo/operations/custody/api/models/dto/response/CountryOutDto.java

```java
package com.nubo.operations.custody.api.models.dto.response;

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

## src/main/java/com/nubo/operations/custody/api/models/dto/response/CurrencyOutDto.java

```java
package com.nubo.operations.custody.api.models.dto.response;

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

## src/main/java/com/nubo/operations/custody/api/models/dto/response/CustodyActionOutDto.java

```java
package com.nubo.operations.custody.api.models.dto.response;

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
public class CustodyActionOutDto {

    private Boolean valid;

    private String message;

    private List<SettlementCustodyActionOutDto> successSettlements;

    private List<ErrorCustodyActionOutDto> errorsSettlements;

}

```

## src/main/java/com/nubo/operations/custody/api/models/dto/response/CustodyTradeOutDto.java

```java
package com.nubo.operations.custody.api.models.dto.response;

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
@JsonInclude(JsonInclude.Include.ALWAYS)
public class CustodyTradeOutDto {

    private LocalDate matchDate;
    private Long matchId;

    private LocalDate clearingDate;
    private LocalDate returnClearingDate;

    private CountryOutDto country;
    private TypeOutDto typeId;
    private SecurityTitleOutDto securityTitle;

    private ParticipantShortOutDto participantBuy;
    private ParticipantShortOutDto custodianBuy;
    private ParticipantShortOutDto participantSell;
    private ParticipantShortOutDto custodianSell;

    private StatusOutDto status;
}

```

## src/main/java/com/nubo/operations/custody/api/models/dto/response/CustodyTransferResultOutDto.java

```java
package com.nubo.operations.custody.api.models.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CustodyTransferResultOutDto {

    private Long tradeId;

    private Long matchId;

    private Integer fraction;

    private SideOutDto side;

    private ParticipantOutDto participant;

    private LocalDate matchDate;

    private LocalDate clearingDate;

    private Boolean isValid;

    private String rejectionReason;

}

```

## src/main/java/com/nubo/operations/custody/api/models/dto/response/DepositoryOutDto.java

```java
package com.nubo.operations.custody.api.models.dto.response;

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

## src/main/java/com/nubo/operations/custody/api/models/dto/response/ErrorCustodyActionOutDto.java

```java
package com.nubo.operations.custody.api.models.dto.response;

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
public class ErrorCustodyActionOutDto {

    private SettlementCustodyActionOutDto settlement;

    private String reasonError;

}

```

## src/main/java/com/nubo/operations/custody/api/models/dto/response/ExchangeRateOutDto.java

```java
package com.nubo.operations.custody.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.ALWAYS)
public class ExchangeRateOutDto {

    private Long id;

    private CurrencyOutDto baseCurrency;

    private CurrencyOutDto conversionCurrency;

    private LocalDate validityDate;

    private BigDecimal conversionValue;

    private LocalDate recordDate;

}

```

## src/main/java/com/nubo/operations/custody/api/models/dto/response/FicAdministratorOutDto.java

```java
package com.nubo.operations.custody.api.models.dto.response;

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
public class FicAdministratorOutDto {

    private Long id;

    private String ficAdministratorCode;

    private String description;

    private String cashAccount;
}

```

## src/main/java/com/nubo/operations/custody/api/models/dto/response/GicsOutDto.java

```java
package com.nubo.operations.custody.api.models.dto.response;

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
public class GicsOutDto {

    private Long id;

    private String description;
}

```

## src/main/java/com/nubo/operations/custody/api/models/dto/response/IdentificationTypeOutDto.java

```java
package com.nubo.operations.custody.api.models.dto.response;

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
public class IdentificationTypeOutDto {

    private Long id;

    private String description;
}

```

## src/main/java/com/nubo/operations/custody/api/models/dto/response/InvestorAccountOutDto.java

```java
package com.nubo.operations.custody.api.models.dto.response;

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

    private Long investorId;

    private String accountNumber;

    private StatusOutDto status;

    private TypeOutDto type;

    private DepositoryOutDto depository;

    private Long participantId;

    private ParticipantOutDto participant;

}
```

## src/main/java/com/nubo/operations/custody/api/models/dto/response/InvestorOutDto.java

```java
package com.nubo.operations.custody.api.models.dto.response;

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

    private String departmentId;

    private Integer cityId;

    private String documentNumber;

    private IdentificationTypeOutDto identificationType;

    private String nationality;

    private String address;

    private String phoneNumber;

    private String email;

    private String clearinghouseCode;

    private GicsOutDto gicsId;

    private Boolean moneyLaunderingFlag;

    private TaxStatusOutDto taxStatusId;

}

```

## src/main/java/com/nubo/operations/custody/api/models/dto/response/MarketOutDto.java

```java
package com.nubo.operations.custody.api.models.dto.response;

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
public class MarketOutDto {

    private String id;

    private String description;

    private String category;
}

```

## src/main/java/com/nubo/operations/custody/api/models/dto/response/NotificationRequestDto.java

```java
package com.nubo.operations.custody.api.models.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import tools.jackson.databind.JsonNode;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class NotificationRequestDto {

    String eventType;

    Long notificacionId;

    List<Long> usuariosIds;

    String modulo;

    List<String> perfiles;

    String tipoNotificacion;

    JsonNode metadata;

    String timestamp;

}

```

## src/main/java/com/nubo/operations/custody/api/models/dto/response/PageResponseOutDto.java

```java
package com.nubo.operations.custody.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.ALWAYS)
public class PageResponseOutDto<T> {

    private List<T> content;

    private Integer pageSize;

    private Integer pageNumber;

    private Long totalElements;

    private Integer totalPages;

    @Override
    public String toString() {
        return "PageResponseOutDto{" +
                "contentType="
                + (content != null && !content.isEmpty() ? content.get(0).getClass().getSimpleName() : "empty") +
                ", pageSize=" + pageSize +
                ", pageNumber=" + pageNumber +
                ", totalElements=" + totalElements +
                ", totalPages=" + totalPages +
                '}';
    }
}

```

## src/main/java/com/nubo/operations/custody/api/models/dto/response/ParticipantAccountOutDto.java

```java
package com.nubo.operations.custody.api.models.dto.response;

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

    private Long participantId;

    private String accountNumber;

    private StatusOutDto status;

    private TypeOutDto type;

}

```

## src/main/java/com/nubo/operations/custody/api/models/dto/response/ParticipantCustodyActionOutDto.java

```java
package com.nubo.operations.custody.api.models.dto.response;

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
public class ParticipantCustodyActionOutDto {

    private Long id;

    private String code;

    private String name;

}

```

## src/main/java/com/nubo/operations/custody/api/models/dto/response/ParticipantOutDto.java

```java
package com.nubo.operations.custody.api.models.dto.response;

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

    private String name;

    private String shortName;

    private String documentNumber;

    private String type;

    private String mnemonic;

    private CountryOutDto country;

    private LocalDate registrationDate;

    private String taxCode;

    private String department;

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

    private IdentificationTypeOutDto identificationType;

}

```

## src/main/java/com/nubo/operations/custody/api/models/dto/response/ParticipantShortOutDto.java

```java
package com.nubo.operations.custody.api.models.dto.response;


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
public class ParticipantShortOutDto {

    private Long id;

    private String code;

    private String name;

    private String cashAccount;

}


```

## src/main/java/com/nubo/operations/custody/api/models/dto/response/RejectionReasonOutDto.java

```java
package com.nubo.operations.custody.api.models.dto.response;

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
public class RejectionReasonOutDto {

    private Long id;

    private String reason;
}

```

## src/main/java/com/nubo/operations/custody/api/models/dto/response/SecurityTitleOutDto.java

```java
package com.nubo.operations.custody.api.models.dto.response;

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
public class SecurityTitleOutDto {

    private Long id;

    private MarketOutDto market;

    private String equityCode;

    private String mnemonic;

    private String isin;
}

```

## src/main/java/com/nubo/operations/custody/api/models/dto/response/SettlementByCustodyOutDto.java

```java
package com.nubo.operations.custody.api.models.dto.response;

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
public class SettlementByCustodyOutDto {

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

    private TradingSystemOutDto tradingSystem;

    private StatusOutDto status;

    private BigDecimal brokerageService;

    private Long custodianId;

    private ParticipantOutDto custodian;

    private BigDecimal settlementAmount;

    private BankAccountOutDto bankAccount;

    private String reference;

    private BigDecimal capitalGainValue;

    private BigDecimal disbursementValue;

    private TypeOutDto sourceQuoteType;

    private FicAdministratorOutDto ficAdministrator;

    private StatusOutDto custodianStatus;

    private StatusOutDto settlementStatus;

    private TradeOutDto trade;


}

```

## src/main/java/com/nubo/operations/custody/api/models/dto/response/SettlementCustodyActionOutDto.java

```java
package com.nubo.operations.custody.api.models.dto.response;

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
public class SettlementCustodyActionOutDto {

    private TradeCustodyActionOutDto trade;

    private Integer fraction;

    private SideOutDto side;

    private ParticipantCustodyActionOutDto custodian;

    private StatusOutDto status;

    private StatusOutDto custodianStatus;

    private String rejectionReason;

}

```

## src/main/java/com/nubo/operations/custody/api/models/dto/response/SettlementOutDto.java

```java
package com.nubo.operations.custody.api.models.dto.response;

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

    private TradingSystemOutDto tradingSystem;

    private StatusOutDto status;

    private BigDecimal brokerageService;

    private Long custodianId;

    private ParticipantOutDto custodian;

    private BigDecimal settlementAmount;

    private BankAccountOutDto bankAccount;

    private String reference;

    private BigDecimal capitalGainValue;

    private BigDecimal disbursementValue;

    private TypeOutDto sourceQuoteType;

    private FicAdministratorOutDto ficAdministrator;

    private StatusOutDto custodianStatus;

    private StatusOutDto settlementStatus;

    private String rejectionReason;

    private ParticipantOutDto directDepositor;

}

```

## src/main/java/com/nubo/operations/custody/api/models/dto/response/SettlementTransferResultOutDto.java

```java
package com.nubo.operations.custody.api.models.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SettlementTransferResultOutDto {

    private Long tradeId;

    private Long matchId;

    private Integer fraction;

    private SideOutDto side;

    private ParticipantOutDto participant;

    private LocalDate matchDate;

    private LocalDate clearingDate;

    private Boolean isValid;

    private String rejectionReason;

}

```

## src/main/java/com/nubo/operations/custody/api/models/dto/response/SideOutDto.java

```java
package com.nubo.operations.custody.api.models.dto.response;

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

## src/main/java/com/nubo/operations/custody/api/models/dto/response/SpecialTradeOutDto.java

```java
package com.nubo.operations.custody.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.ALWAYS)
public class SpecialTradeOutDto {

    private Long id;

    private LocalDate recordDate;

    private String specialOperationId;

    private LocalDate settlementDate;

    private Integer daysToSettlement;

    private String specialOperationName;

    private Long countryId;

    private Long typeId;

    private Long securityId;

    private String depositoryId;

    private String sideId;

    private Long statusId;

    private Long participantId;

    private Long directDepositorId;

    private Long clientOperatorId;

    private Long afpFundId;

    private BigDecimal totalAmount;

    private BigDecimal totalAmountLocal;

    private Long currencyId;

    private Long exchangeRateId;

    private BigDecimal price;

    private BigDecimal quantity;

    private Integer numberFolios;

    private Boolean fractionalMark;

    private CurrencyOutDto currency;

    private CountryOutDto country;

    private TypeOutDto type;

    private SecurityTitleOutDto securityTitle;

    private DepositoryOutDto depository;

    private SideOutDto side;

    private StatusOutDto status;

    private ParticipantOutDto participant;

    private ParticipantOutDto directDepositor;

    private ParticipantOutDto clientOperator;

    private DepositoryOutDto clientSettlementAgent;

    private AfpFundOutDto afpFund;

    private MarketOutDto marketEntity;

    private ExchangeRateOutDto exchangeRate;

    private BigDecimal localCurrencyPrice;

}


```

## src/main/java/com/nubo/operations/custody/api/models/dto/response/StatusOutDto.java

```java
package com.nubo.operations.custody.api.models.dto.response;

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

    private String detail;
}

```

## src/main/java/com/nubo/operations/custody/api/models/dto/response/TaxStatusOutDto.java

```java
package com.nubo.operations.custody.api.models.dto.response;

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
public class TaxStatusOutDto {

    private Long id;

    private String description;
}

```

## src/main/java/com/nubo/operations/custody/api/models/dto/response/TradeCustodyActionOutDto.java

```java
package com.nubo.operations.custody.api.models.dto.response;

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
public class TradeCustodyActionOutDto {

    private Long id;

    private LocalDate matchDate;

    private Long matchId;

    private LocalDate clearingDate;

    private LocalDate returnClearingDate;

    private ParticipantCustodyActionOutDto participantBuy;

    private ParticipantCustodyActionOutDto participantSell;

}

```

## src/main/java/com/nubo/operations/custody/api/models/dto/response/TradeEquityOutDto.java

```java
package com.nubo.operations.custody.api.models.dto.response;

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
public class TradeEquityOutDto {

    private Long tradeId;

    private Integer foreignBrokerBuy;

    private Integer foreignBrokerSell;

    private Integer directDepositorBuy;

    private Integer directDepositorSell;

    private Integer sourceIndicatorBuy;

    private Integer sourceIndicatorSell;

    private Integer responsibleTradeBuy;

    private Integer responsibleTradeSell;

    private String referenceBuy;

    private String referenceSell;

    private BigDecimal orderBookId;

    private Boolean prearrangedOperation;

    private Integer aggressiveTip;

    private Boolean exdividendPeriod;
}

```

## src/main/java/com/nubo/operations/custody/api/models/dto/response/TradeOutDto.java

```java
package com.nubo.operations.custody.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
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
@JsonInclude(JsonInclude.Include.ALWAYS)
public class TradeOutDto {

    private Long id;

    private LocalDate matchDate;

    private Long matchId;

    private LocalDate clearingDate;

    private LocalDate returnClearingDate;

    private DepositoryOutDto depository;

    private CountryOutDto country;

    private TypeOutDto type;

    private MarketOutDto market;

    private SecurityTitleOutDto securityTitle;

    private ParticipantOutDto participantBuy;

    private ParticipantOutDto participantSell;

    private ParticipantOutDto custodianBuy;

    private ParticipantOutDto custodianSell;

    private Boolean assignmentMarkBuy;

    private Boolean assignmentMarkSell;

    private Boolean fractionalMarkBuy;

    private Boolean fractionalMarkSell;

    private Integer advanceStatus;

    private Boolean exitIndicatorSettlement;

    private Boolean returnIndicatorSettlement;

    private Boolean canceledStatus;

    private BigDecimal quantity;

    private BigDecimal price;

    private BigDecimal volume;

    private BigDecimal repurchaseRate;

    private BigDecimal repurchaseAmount;

    private StatusOutDto status;

    private LocalDateTime matchTime;

    private Boolean ownPositionSell;

    private Boolean ownPositionBuy;

    private CurrencyOutDto currency;

    private TradingSystemOutDto tradingSystem;

    private TradingSessionOutDto tradingSession;

    private LocalDate repurchaseAgreementDate;

    private Integer daysToSettlement;

    private BigDecimal repoRate;

    private BigDecimal repoAmount;

    private BigDecimal fundingAmount;

    private BigDecimal netOutFlowTotal;

    private BigDecimal outFlowTurnOverValue;

    private BigDecimal totalNetReturn;

    private BigDecimal returnTurnoverValue;

    private BigDecimal deliveryVersusPaymentValue;

    private Boolean reallocationIndicator;

    private TypeOutDto businessType;

    private TypeOutDto marketType;

    private TypeOutDto originType;

    private SpecialTradeOutDto specialTrade;

    private MarketOutDto issuanceMarket;

    private Boolean settlementIndicatorOutgoing;

    private Boolean settlementIndicatorReturn;

    private Boolean settlementIndicatorAdvance;

    private TypeOutDto paymentType;

    private TypeOutDto settlementType;

    private StatusOutDto custodianStatus;

    private StatusOutDto settlementStatus;

    private StatusOutDto bloquingStatus;

    private Boolean salesGuarantee;

    private Boolean purchaseGuarantee;

    private Boolean purchasePaymentIndicator;

    private BigDecimal localCurrencyPrice;
}

```

## src/main/java/com/nubo/operations/custody/api/models/dto/response/TradingSessionOutDto.java

```java
package com.nubo.operations.custody.api.models.dto.response;

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
public class TradingSessionOutDto {

    private String id;

    private String description;

}

```

## src/main/java/com/nubo/operations/custody/api/models/dto/response/TradingSystemOutDto.java

```java
package com.nubo.operations.custody.api.models.dto.response;

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
public class TradingSystemOutDto {

    private Long id;

    private String description;

}

```

## src/main/java/com/nubo/operations/custody/api/models/dto/response/TypeOutDto.java

```java
package com.nubo.operations.custody.api.models.dto.response;

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

## src/main/java/com/nubo/operations/custody/api/models/entity/AfpFundEntity.java

```java
package com.nubo.operations.custody.api.models.entity;

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

import java.time.LocalDate;
import java.util.Objects;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"AFP_FUND\"", schema = "\"NUANBODB\"")
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
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/custody/api/models/entity/BankAccountEntity.java

```java
package com.nubo.operations.custody.api.models.entity;

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
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/custody/api/models/entity/BankEntity.java

```java
package com.nubo.operations.custody.api.models.entity;

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
@Table(name = "\"BANK\"", schema = "\"NUANBODB\"")
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
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/custody/api/models/entity/CountryEntity.java

```java
package com.nubo.operations.custody.api.models.entity;

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

## src/main/java/com/nubo/operations/custody/api/models/entity/CurrencyEntity.java

```java
package com.nubo.operations.custody.api.models.entity;

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
@Table(name = "\"CURRENCY\"", schema = "\"NUANBODB\"")
public class CurrencyEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"CURRENCY_ID\"")
    private Long id;

    @Column(name = "\"CODE\"", length = 3, nullable = false)
    private String code;

    @Column(name = "\"NAME\"", length = 30, nullable = false)
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

## src/main/java/com/nubo/operations/custody/api/models/entity/DepositoryEntity.java

```java
package com.nubo.operations.custody.api.models.entity;

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

## src/main/java/com/nubo/operations/custody/api/models/entity/ExchangeRateEntity.java

```java
package com.nubo.operations.custody.api.models.entity;

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
import java.util.Objects;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"EXCHANGE_RATE\"", schema = "\"NUANBODB\"")
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
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}
```

## src/main/java/com/nubo/operations/custody/api/models/entity/FicAdministratorEntity.java

```java
package com.nubo.operations.custody.api.models.entity;

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
@Table(name = "\"FIC_ADMINISTRATOR\"", schema = "\"NUANBODB\"")
public class FicAdministratorEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"FIC_ADMINISTRATOR_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"FIC_ADMINISTRATOR_CODE\"", length = 10)
    private String ficAdministratorCode;

    @Column(name = "\"DESCRIPTION\"", length = 80)
    private String description;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        FicAdministratorEntity that = (FicAdministratorEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/custody/api/models/entity/GicsEntity.java

```java
package com.nubo.operations.custody.api.models.entity;

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
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}
```

## src/main/java/com/nubo/operations/custody/api/models/entity/IdentificationTypeEntity.java

```java
package com.nubo.operations.custody.api.models.entity;

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
@Table(name = "\"IDENTIFICATION_TYPE\"", schema = "\"NUANBODB\"")
public class IdentificationTypeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"IDENTIFICATION_TYPE_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"DESCRIPTION\"", length = 80, nullable = false)
    private String description;

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

## src/main/java/com/nubo/operations/custody/api/models/entity/InvestorAccountEntity.java

```java
package com.nubo.operations.custody.api.models.entity;

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
    @JoinColumn(name = "\"PARTICIPANT_ID\"", nullable = false)
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
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}
```

## src/main/java/com/nubo/operations/custody/api/models/entity/InvestorEntity.java

```java
package com.nubo.operations.custody.api.models.entity;

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
    @JoinColumn(name = "\"GICS_ID\"", nullable = false)
    private GicsEntity gics;

    @Column(name = "\"MONEY_LAUNDERING_FLAG\"")
    private Boolean moneyLaunderingFlag;

    @ManyToOne
    @JoinColumn(name = "\"TAX_STATUS_ID\"", nullable = false)
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
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/custody/api/models/entity/IsinNumberEntity.java

```java
package com.nubo.operations.custody.api.models.entity;

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
@Builder(toBuilder = true)
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"ISIN_NUMBER\"", schema = "\"NUANBODB\"")
public class IsinNumberEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"ISIN_NUMBER_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"ISIN_NUMBER\"")
    private String isinNumber;

    @Column(name = "\"SECURITY_ID\"", insertable = false, updatable = false)
    private Long securityId;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (!(o instanceof IsinNumberEntity))
            return false;
        IsinNumberEntity that = (IsinNumberEntity) o;
        return id != null && id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

}

```

## src/main/java/com/nubo/operations/custody/api/models/entity/MarketEntity.java

```java
package com.nubo.operations.custody.api.models.entity;

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

    @Column(name = "\"DESCRIPTION\"", length = 80, nullable = false)
    private String description;

    @Column(name = "\"CATEGORY\"", length = 50, nullable = false)
    private String category;

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

## src/main/java/com/nubo/operations/custody/api/models/entity/PackageCustodianEntity.java

```java
package com.nubo.operations.custody.api.models.entity;

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

    @Column(name = "\"OLD_INVESTOR_ACCOUNT_ID\"")
    private Long oldInvestorAccountId;

    @ManyToOne
    @JoinColumn(name = "\"INVESTOR_ACCOUNT_ID\"")
    private InvestorAccountEntity investorAccount;

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

## src/main/java/com/nubo/operations/custody/api/models/entity/PackageCustodianHistoryEntity.java

```java
package com.nubo.operations.custody.api.models.entity;

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
@Builder
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
    private String market;

    @Id
    @Column(name = "\"PACKAGE_DATE\"", nullable = false)
    private LocalDate packageDate;

    @Id
    @Column(name = "\"EVENT_TIME\"", nullable = false)
    private LocalDateTime eventTime;

    @Column(name = "\"PARTICIPANT_CODE\"")
    private String participantCode;

    @Column(name = "\"SEQUENCE\"")
    private Long sequence;

    @Column(name = "\"CODE_SCB\"")
    private String codeScb;

    @Column(name = "\"PACKAGE_NUMBER\"")
    private String packageNumber;

    @Column(name = "\"SIDE_ID\"")
    private String sideId;

    @Column(name = "\"INVESTOR_ID\"")
    private Long investorId;

    @Column(name = "\"GENERATING_PARTICIPANT_ID\"")
    private Long generatingParticipantId;

    @Column(name = "\"INVESTOR_ACCOUNT_ID\"")
    private Long investorAccountId;

    @ManyToOne
    @JoinColumn(name = "\"CUSTODIAN_STATUS_ID\"")
    private StatusEntity custodianStatus;

    @Column(name = "\"CUSTODIAN_ID\"")
    private Long custodianId;

    @Column(name = "\"FIC_ADMINISTRATOR_ID\"")
    private Long ficAdministratorId;

    @ManyToOne
    @JoinColumn(name = "\"REJECTION_REASON_ID\"")
    private RejectionReasonEntity rejectionReason;

    @Column(name = "\"TOTAL_FRACTION_QUANTITY\"")
    private BigDecimal totalFractionQuantity;

    @Column(name = "\"TOTAL_FRACTION_VOLUME\"")
    private BigDecimal totalFractionVolume;

    @Column(name = "\"TOTAL_NET_AMOUNT\"")
    private BigDecimal totalNetAmount;

    @Column(name = "\"TOTAL_COMMISSION_AMOUNT\"")
    private BigDecimal totalCommissionAmount;

    @Column(name = "\"TOTAL_VAL_TAX_AMOUNT\"")
    private BigDecimal totalValTaxAmount;

    @Column(name = "\"AVERAGE_PRICE\"")
    private BigDecimal averagePrice;

    @Column(name = "\"CLEARING_DATE\"")
    private LocalDate clearingDate;

    @Column(name = "\"RETURN_CLEARING_DATE\"")
    private LocalDate returnClearingDate;

    @Column(name = "\"AVERAGE_FRACTION_VOLUME\"")
    private BigDecimal averageFractionVolume;

    @Column(name = "\"AVERAGE_RATE\"")
    private BigDecimal averageRate;

    @Column(name = "\"RETURN_NET_AMOUNT\"")
    private BigDecimal returnNetAmount;

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
        PackageCustodianHistoryEntity that = (PackageCustodianHistoryEntity) o;
        return Objects.equals(packageCustodianId, that.packageCustodianId)
                && Objects.equals(market, that.market)
                && Objects.equals(packageDate, that.packageDate)
                && Objects.equals(eventTime, that.eventTime);
    }

    @Override
    public int hashCode() {
        return Objects.hash(packageCustodianId, market, packageDate, eventTime);
    }
}
```

## src/main/java/com/nubo/operations/custody/api/models/entity/PackageCustodianHistoryKey.java

```java
package com.nubo.operations.custody.api.models.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PackageCustodianHistoryKey implements Serializable {

    private Long packageCustodianId;

    private String market;

    private LocalDate packageDate;

    private LocalDateTime eventTime;

}
```

## src/main/java/com/nubo/operations/custody/api/models/entity/PackageDetailEntity.java

```java
package com.nubo.operations.custody.api.models.entity;

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
                && Objects.equals(sideId, that.sideId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(packageCustodianId, market, packageDate, tradeId, sideId);
    }
}

```

## src/main/java/com/nubo/operations/custody/api/models/entity/PackageDetailKey.java

```java
package com.nubo.operations.custody.api.models.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PackageDetailKey implements Serializable {

    private Long packageCustodianId;

    private String market;

    private LocalDate packageDate;

    private Long tradeId;

    private String sideId;

}

```

## src/main/java/com/nubo/operations/custody/api/models/entity/ParticipantAccountEntity.java

```java
package com.nubo.operations.custody.api.models.entity;

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

## src/main/java/com/nubo/operations/custody/api/models/entity/ParticipantBankAccountEntity.java

```java
package com.nubo.operations.custody.api.models.entity;

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
@Table(name = "\"PARTICIPANT_BANK_ACCOUNT\"", schema = "\"NUANBODB\"")
public class ParticipantBankAccountEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"PARTICIPANT_BANK_ACCOUNT_ID\"", nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "\"BANK_ID\"", nullable = false)
    private ParticipantEntity bank;

    @ManyToOne
    @JoinColumn(name = "\"PARTICIPANT_ID\"", nullable = false)
    private ParticipantEntity participant;

    @Column(name = "\"BANK_ACCOUNT\"", length = 30)
    private String bankAccount;

    @Column(name = "\"PRINCIPAL\"")
    private Boolean principal;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 250, nullable = false)
    private String lastModifyApplic;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50, nullable = false)
    private String lastModifyIp;

    @Column(name = "\"BANK_BRANCH\"")
    private Long bankBranch;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"")
    private StatusEntity status;

    @ManyToOne
    @JoinColumn(name = "\"TYPE_ID\"")
    private TypeEntity type;

    @ManyToOne
    @JoinColumn(name = "\"COUNTRY_ID\"")
    private CountryEntity country;

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
    @JoinColumn(name = "\"ORIGIN_TYPE_ID\"")
    private TypeEntity originType;

    @ManyToOne
    @JoinColumn(name = "\"CONCEPT_TYPE_ID\"")
    private TypeEntity conceptType;

    @ManyToOne
    @JoinColumn(name = "\"CURRENCY_ID\"")
    private CurrencyEntity currency;

    @Column(name = "\"TYPE_ACCOUNT\"")
    private Integer typeAccount;

}

```

## src/main/java/com/nubo/operations/custody/api/models/entity/ParticipantEntity.java

```java
package com.nubo.operations.custody.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
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

    @ManyToOne
    @JoinColumn(name = "\"TYPE_ID\"", nullable = false)
    private TypeEntity type;

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

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "\"PARTICIPANT_USER_NUBO\"", schema = "\"NUANBODB\"", joinColumns = @JoinColumn(name = "\"PARTICIPANT_ID\""), inverseJoinColumns = @JoinColumn(name = "\"USER_NUBO_ID\""))
    private List<UserNuboEntity> usersNubo;

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
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/custody/api/models/entity/ParticipantUserNuboEntity.java

```java
package com.nubo.operations.custody.api.models.entity;

import java.util.Objects;

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
        if (!(o instanceof ParticipantUserNuboEntity that))
            return false;
        return Objects.equals(participant != null ? participant.getId() : null,
                that.participant != null ? that.participant.getId() : null) &&
                Objects.equals(userNubo != null ? userNubo.getId() : null,
                        that.userNubo != null ? that.userNubo.getId() : null);
    }

    @Override
    public int hashCode() {
        return Objects.hash(
                participant != null ? participant.getId() : null,
                userNubo != null ? userNubo.getId() : null);
    }
}

```

## src/main/java/com/nubo/operations/custody/api/models/entity/ParticipantUserNuboKey.java

```java
package com.nubo.operations.custody.api.models.entity;

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

## src/main/java/com/nubo/operations/custody/api/models/entity/RejectionReasonEntity.java

```java
package com.nubo.operations.custody.api.models.entity;

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
@Table(name = "\"REJECTION_REASON\"", schema = "\"NUANBODB\"")
public class RejectionReasonEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"REJECTION_REASON_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"REASON\"", length = 255)
    private String reason;

    @Column(name = "\"CATEGORY\"")
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
        RejectionReasonEntity that = (RejectionReasonEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}
```

## src/main/java/com/nubo/operations/custody/api/models/entity/SecurityTitleEntity.java

```java
package com.nubo.operations.custody.api.models.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
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

    @OrderBy("id ASC")
    @Builder.Default
    @OneToMany(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"SECURITY_ID\"")
    private List<IsinNumberEntity> isinNumbers = new ArrayList<>();

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

## src/main/java/com/nubo/operations/custody/api/models/entity/SettlementEntity.java

```java
package com.nubo.operations.custody.api.models.entity;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.Objects;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
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
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "\"TRADE_ID\"", nullable = false)
    private TradeEntity trade;

    @Id
    @Column(name = "\"FRACTION\"", nullable = false)
    private Integer fraction;

    @Id
    @ManyToOne
    @JoinColumn(name = "\"SIDE_ID\"", nullable = false)
    private SideEntity side;

    @Column(name = "\"UNIQUE_FRACTION_ID\"")
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

    @ManyToOne
    @JoinColumn(name = "\"BANK_ACCOUNT_ID\"")
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
    private ParticipantEntity directDepositor;

    @Column(name = "\"REFERENCE\"", length = 255)
    private String reference;

    @Column(name = "\"REFERENCE_PACKAGE\"", length = 10)
    private String referencePackage;

    @Column(name = "\"SETTLEMENT_AMOUNT\"", precision = 16, scale = 4)
    private BigDecimal settlementAmount;

    @Column(name = "\"CAPITAL_GAIN_VALUE\"", precision = 16, scale = 4)
    private BigDecimal capitalGainValue;

    @Column(name = "\"DISBURSEMENT_VALUE\"", precision = 18, scale = 4)
    private BigDecimal disbursementValue;

    @ManyToOne
    @JoinColumn(name = "\"SOURCE_QUOTE_TYPE_ID\"")
    private TypeEntity sourceQuoteType;

    @ManyToOne
    @JoinColumn(name = "\"FIC_ADMINISTRATOR_ID\"")
    private ParticipantEntity ficAdministrator;

    @ManyToOne
    @JoinColumn(name = "\"CUSTODIAN_STATUS_ID\"")
    private StatusEntity custodianStatus;

    @ManyToOne
    @JoinColumn(name = "\"SETTLEMENT_STATUS_ID\"")
    private StatusEntity settlementStatus;

    @Column(name = "\"REJECTION_REASON\"")
    private String rejectionReason;

    @ManyToOne
    @JoinColumn(name = "\"TRANSFER_PARTICIPANT_ID\"")
    private ParticipantEntity transferParticipant;

    @Column(name = "\"CASH_ACCOUNT\"", precision = 20, scale = 0)
    private BigDecimal cashAccount;

    @Column(name = "\"IND_MASTER\"")
    private Boolean indMaster;

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
        if (!(o instanceof SettlementEntity that))
            return false;
        return Objects.equals(trade != null ? trade.getId() : null, that.trade != null ? that.trade.getId() : null) &&
                Objects.equals(fraction, that.fraction) &&
                Objects.equals(side != null ? side.getId() : null, that.side != null ? that.side.getId() : null);
    }

    @Override
    public int hashCode() {
        return Objects.hash(
                trade != null ? trade.getId() : null,
                fraction,
                side != null ? side.getId() : null);
    }
}

```

## src/main/java/com/nubo/operations/custody/api/models/entity/SettlementKey.java

```java
package com.nubo.operations.custody.api.models.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SettlementKey implements Serializable {

    private Long trade;

    private Integer fraction;

    private String side;

}

```

## src/main/java/com/nubo/operations/custody/api/models/entity/SideEntity.java

```java
package com.nubo.operations.custody.api.models.entity;

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

## src/main/java/com/nubo/operations/custody/api/models/entity/StatusEntity.java

```java
package com.nubo.operations.custody.api.models.entity;

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
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/custody/api/models/entity/TaxStatusEntity.java

```java
package com.nubo.operations.custody.api.models.entity;

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
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}
```

## src/main/java/com/nubo/operations/custody/api/models/entity/TradeEntity.java

```java
package com.nubo.operations.custody.api.models.entity;

import com.nubo.operations.custody.api.models.entity.converter.BooleanToIntegerConverter;
import jakarta.persistence.*;
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

    @Column(name = "\"RETURN_CLEARING_DATE\"")
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

    @Column(name = "\"SETTLEMENT_INDICATOR_OUTGOING\"")
    private Boolean settlementIndicatorOutgoing;

    @Column(name = "\"SETTLEMENT_INDICATOR_RETURN\"")
    private Boolean settlementIndicatorReturn;

    @Column(name = "\"RESETTLEMENT_INDICATOR_ADVANCE\"")
    private Boolean settlementIndicatorAdvance;

    @Convert(converter = BooleanToIntegerConverter.class)
    @Column(name = "\"SALES_GUARANTEE\"")
    private Boolean salesGuarantee;

    @Convert(converter = BooleanToIntegerConverter.class)
    @Column(name = "\"PURCHASE_GUARANTEE\"")
    private Boolean purchaseGuarantee;

    @Column(name = "\"PURCHASE_PAYMENT_INDICATOR\"")
    private Boolean purchasePaymentIndicator;

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
    @JoinColumn(name = "\"DEPOSITORY_ID_BUY\"")
    private DepositoryEntity depositoryBuy;

    @ManyToOne
    @JoinColumn(name = "\"DEPOSITORY_ID_SELL\"")
    private DepositoryEntity depositorySell;

    @Column(name = "\"ISIN_NUMBER_ID\"")
    private Long isinNumberId;

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

## src/main/java/com/nubo/operations/custody/api/models/entity/TradingSessionEntity.java

```java
package com.nubo.operations.custody.api.models.entity;

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
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}
```

## src/main/java/com/nubo/operations/custody/api/models/entity/TradingSystemEntity.java

```java
package com.nubo.operations.custody.api.models.entity;

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
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}
```

## src/main/java/com/nubo/operations/custody/api/models/entity/TypeEntity.java

```java
package com.nubo.operations.custody.api.models.entity;

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

## src/main/java/com/nubo/operations/custody/api/models/entity/UserNuboEntity.java

```java
package com.nubo.operations.custody.api.models.entity;

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

    @Column(name = "\"PREVIOUS_SESSION\"")
    private Boolean previousSession;

    @ManyToOne
    @JoinColumn(name = "\"PARTICIPANT_ID\"")
    private ParticipantEntity participant;

    @Column(name = "\"USER_TYPE\"", length = 20)
    private String userType;

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
        UserNuboEntity that = (UserNuboEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}
```

## src/main/java/com/nubo/operations/custody/api/models/entity/converter/BooleanToIntegerConverter.java

```java
package com.nubo.operations.custody.api.models.entity.converter;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

@Converter
public class BooleanToIntegerConverter implements AttributeConverter<Boolean, Integer> {

    @Override
    public Integer convertToDatabaseColumn(Boolean attribute) {
        if (attribute == null) {
            return null;
        }
        return attribute ? 1 : 0;
    }

    @Override
    public Boolean convertToEntityAttribute(Integer dbData) {
        if (dbData == null) {
            return null;
        }
        return dbData != 0;
    }
}
```

## src/main/java/com/nubo/operations/custody/api/models/enums/BusinessRuleEnum.java

```java
package com.nubo.operations.custody.api.models.enums;

import java.util.Arrays;
import java.util.Objects;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum BusinessRuleEnum {

    RULE_CUSTODIAN_PREMATCH("RULE_CUSTODIAN_PREMATCH"),
    RULE_CUSTODIAN_REJECT("RULE_CUSTODIAN_REJECT"),
    RULE_CUSTODIAN_ACCEPT("RULE_CUSTODIAN_ACCEPT"),
    RULE_CUSTODIAN_TRANSFER("RULE_CUSTODIAN_TRANSFER");

    private final String code;

    @JsonValue
    public String getValue() {
        return code;
    }

    @JsonCreator
    public static BusinessRuleEnum fromCode(String code) {
        return Arrays.stream(BusinessRuleEnum.values())
                .filter(status -> Objects.equals(status.code, code))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Unknown Business Rule code: " + code));
    }

}

```

## src/main/java/com/nubo/operations/custody/api/models/enums/CustodyActionEnum.java

```java
package com.nubo.operations.custody.api.models.enums;

public enum CustodyActionEnum {
    PREMATCH, ADMIT, REJECT
}


```

## src/main/java/com/nubo/operations/custody/api/models/enums/MessageErrorCustodyActionEnum.java

```java
package com.nubo.operations.custody.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum MessageErrorCustodyActionEnum {

    STATUS_SETTLEMENT_NOT_VALID("El estado de la fracción no es valido"),
    ACTION_ADMIT_RESPONSE_ERROR("Fracciones sin admitir"),
    ACTION_PREMATCH_RESPONSE_ERROR("Fracción sin pre-admitir"),
    ACTION_REJECT_RESPONSE_ERROR("Fracción sin rechazar"),
    CHANGE_ACCOUNT_CUSTODY_ERROR("Ha ocurrido un error al cambiar la cuenta del custodio");

    private final String message;

}

```

## src/main/java/com/nubo/operations/custody/api/models/enums/MessageSuccessCustodyActionEnum.java

```java
package com.nubo.operations.custody.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum MessageSuccessCustodyActionEnum {

    ACTION_ADMIT_RESPONSE_SUCCESS("Fracción admitida"),
    ACTION_PREMATCH_RESPONSE_SUCCESS("Fracción prematch"),
    ACTION_REJECT_RESPONSE_SUCCESS("Fracción rechazada");

    private final String message;

}

```

## src/main/java/com/nubo/operations/custody/api/models/enums/NotificationCustodyActionEnum.java

```java
package com.nubo.operations.custody.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum NotificationCustodyActionEnum {

    ADMIT_CUSTODY_SUCCESS(44L),
    PREMATCH_CUSTODY_SUCCESS(45L),
    REJECTED_CUSTODY_SUCCESS(46L),
    TRANSFER_CUSTODY_SUCCESS(38L);

    private final Long id;

}

```

## src/main/java/com/nubo/operations/custody/api/models/enums/NotificationMessageEnum.java

```java
package com.nubo.operations.custody.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum NotificationMessageEnum {

    REQUEST_REJECTED(34, "Operation request rejected"),
    REQUEST_APPROVED(37, "Operation request approved"),
    REQUEST_TRANSMITTED(38, "Operation request transmitted"),
    REQUEST_PREMATCHED(40,"Operation request status pre_match");
    
    private final Integer code;
    private final String description;
}
```

## src/main/java/com/nubo/operations/custody/api/models/enums/NotificationTypeEnum.java

```java
package com.nubo.operations.custody.api.models.enums;

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

## src/main/java/com/nubo/operations/custody/api/models/enums/PropertiesEnum.java

```java
package com.nubo.operations.custody.api.models.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
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
    CLIENT_USER_ENTITY("client_user_entity"),
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

## src/main/java/com/nubo/operations/custody/api/models/enums/RejectionReasonEnum.java

```java
package com.nubo.operations.custody.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum RejectionReasonEnum {

    REJECTED_CUSTODY("RECHAZO_CUSTODIO");

    private final String category;

}

```

## src/main/java/com/nubo/operations/custody/api/models/enums/SideEnum.java

```java
package com.nubo.operations.custody.api.models.enums;

import java.util.Arrays;
import java.util.Objects;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum SideEnum {

    BUY("1"),
    SELL("2"),
    OTHER("0");

    private final String Id;

    @JsonValue
    public String getId() {
        return Id;
    }

    @JsonCreator
    public static SideEnum fromValue(String value) {
        return Arrays.stream(SideEnum.values())
                .filter(side -> Objects.equals(side.Id, value))
                .findFirst()
                .orElse(OTHER);
    }
}
```

## src/main/java/com/nubo/operations/custody/api/models/enums/StatusEnum.java

```java
package com.nubo.operations.custody.api.models.enums;

import java.util.Arrays;
import java.util.Objects;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum StatusEnum {

    NOT_STATUS(0L, "NO ESTADO", ""),
    CUSTODIAN_TRANSFERRED(1071L, "TRASLADADA", "CUSTODIO"),
    CUSTODIAN_PRE_MATCH(1072L, "PRE-MATCH", "CUSTODIO"),
    CUSTODIAN_ADMITTED(1073L, "ADMITIDA", "CUSTODIO"),
    CUSTODIAN_REJECTED(1074L, "RECHAZADA", "CUSTODIO");

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

## src/main/java/com/nubo/operations/custody/api/models/enums/TypeEnum.java

```java
package com.nubo.operations.custody.api.models.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Arrays;
import java.util.Objects;

@Getter
@RequiredArgsConstructor
public enum TypeEnum {

    CLEARING(134L, "COMPENSACION", "CONCEPTO_CUENTA"),
    CUD_ACCOUNT(25L, "CUENTA CUD", "CUENTA CUD"),
    CUSTODIAN(35L, "CUSTODIO", "PARTICIPANTE"),;

    private final Long id;
    private final String description;
    private final String category;

    @JsonValue
    public String getDescription() {
        return description;
    }

    @JsonCreator
    public static TypeEnum fromDescription(String value) {
        return Arrays.stream(TypeEnum.values())
                .filter(type -> Objects.equals(type.description, value))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Type Option is not implemented: " + value));
    }
}

```

## src/main/java/com/nubo/operations/custody/api/models/enums/UserTypeEnum.java

```java
package com.nubo.operations.custody.api.models.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Arrays;
import java.util.Objects;

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
                .filter(side -> Objects.equals(side.value, value))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Side not implemented: " + value));
    }
}

```

## src/main/java/com/nubo/operations/custody/api/models/enums/VersionApiEnum.java

```java
package com.nubo.operations.custody.api.models.enums;

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

## src/main/java/com/nubo/operations/custody/api/models/spec/TradeSpecifications.java

```java
package com.nubo.operations.custody.api.models.spec;


import com.nubo.operations.custody.api.models.entity.TradeEntity;
import jakarta.persistence.criteria.JoinType;
import org.springframework.data.jpa.domain.Specification;

import java.time.LocalDate;
import java.util.List;

public final class TradeSpecifications {

    private TradeSpecifications() {}

    public static Specification<TradeEntity> byCustodyTradeFilters(
            List<Long> tradeId,
            Long statusId,
            Long countryId,
            LocalDate clearingDate
    ) {
        return (root, query, cb) -> {

            // Fetch joins solo si NO es count query
            if (!Long.class.equals(query.getResultType()) && !long.class.equals(query.getResultType())) {
                root.fetch("country", JoinType.LEFT).fetch("currency", JoinType.LEFT);
                root.fetch("type", JoinType.LEFT);
                root.fetch("securityTitle", JoinType.LEFT);
                root.fetch("participantBuy", JoinType.LEFT);
                root.fetch("participantSell", JoinType.LEFT);
                root.fetch("custodianBuy", JoinType.LEFT);
                root.fetch("custodianSell", JoinType.LEFT);
                root.fetch("status", JoinType.LEFT);
                query.distinct(true);
            }

            var predicates = cb.conjunction();

            if (tradeId != null && !tradeId.isEmpty()) {
                predicates.getExpressions().add(root.get("id").in(tradeId));
            }
            if (statusId != null) {
                predicates.getExpressions().add(cb.equal(root.get("status").get("id"), statusId));
            }
            if (countryId != null) {
                predicates.getExpressions().add(cb.equal(root.get("country").get("id"), countryId));
            }
            if (clearingDate != null) {
                predicates.getExpressions().add(cb.equal(root.get("clearingDate"), clearingDate));
            }

            return predicates;
        };
    }
}

```

## src/main/java/com/nubo/operations/custody/api/repository/FicAdministratorRepository.java

```java
package com.nubo.operations.custody.api.repository;

import com.nubo.operations.custody.api.models.entity.FicAdministratorEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FicAdministratorRepository extends JpaRepository<FicAdministratorEntity, Long> {
}

```

## src/main/java/com/nubo/operations/custody/api/repository/InvestorAccountRepository.java

```java
package com.nubo.operations.custody.api.repository;

import com.nubo.operations.custody.api.models.entity.InvestorAccountEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InvestorAccountRepository extends JpaRepository<InvestorAccountEntity, Long> {
}

```

## src/main/java/com/nubo/operations/custody/api/repository/PackageCustodianHistoryRepository.java

```java
package com.nubo.operations.custody.api.repository;

import com.nubo.operations.custody.api.models.entity.PackageCustodianHistoryEntity;
import com.nubo.operations.custody.api.models.entity.PackageCustodianHistoryKey;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PackageCustodianHistoryRepository
        extends JpaRepository<PackageCustodianHistoryEntity, PackageCustodianHistoryKey> {
}
```

## src/main/java/com/nubo/operations/custody/api/repository/PackageCustodianRepository.java

```java
package com.nubo.operations.custody.api.repository;

import com.nubo.operations.custody.api.models.entity.PackageCustodianEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PackageCustodianRepository extends JpaRepository<PackageCustodianEntity, Long> {
}
```

## src/main/java/com/nubo/operations/custody/api/repository/PackageDetailRepository.java

```java
package com.nubo.operations.custody.api.repository;

import com.nubo.operations.custody.api.models.entity.PackageDetailEntity;
import com.nubo.operations.custody.api.models.entity.PackageDetailKey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PackageDetailRepository extends JpaRepository<PackageDetailEntity, PackageDetailKey> {

    @Query("SELECT pd FROM PackageDetailEntity pd WHERE pd.packageCustodianId = :packageCustodianId")
    List<PackageDetailEntity> findByPackageCustodianId(@Param("packageCustodianId") Long packageCustodianId);

}
```

## src/main/java/com/nubo/operations/custody/api/repository/ParticipantBankAccountRepository.java

```java
package com.nubo.operations.custody.api.repository;

import com.nubo.operations.custody.api.models.entity.ParticipantBankAccountEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ParticipantBankAccountRepository extends JpaRepository<ParticipantBankAccountEntity, Long> {

    Optional<ParticipantBankAccountEntity> findFirstByParticipant_IdOrderByIdAsc(Long participantId);
}

```

## src/main/java/com/nubo/operations/custody/api/repository/ParticipantRepository.java

```java
package com.nubo.operations.custody.api.repository;

import com.nubo.operations.custody.api.models.entity.ParticipantEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ParticipantRepository extends JpaRepository<ParticipantEntity, Long> {
}

```

## src/main/java/com/nubo/operations/custody/api/repository/ParticipantUserNuboRepository.java

```java
package com.nubo.operations.custody.api.repository;

import com.nubo.operations.custody.api.models.entity.ParticipantUserNuboEntity;
import com.nubo.operations.custody.api.models.entity.ParticipantUserNuboKey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ParticipantUserNuboRepository extends JpaRepository<ParticipantUserNuboEntity, ParticipantUserNuboKey> {

    @Query("SELECT p FROM ParticipantUserNuboEntity p " +
            "WHERE p.participant.id = :participantId")
    List<ParticipantUserNuboEntity> findByParticipantId(Long participantId);

}

```

## src/main/java/com/nubo/operations/custody/api/repository/RejectionReasonRepository.java

```java
package com.nubo.operations.custody.api.repository;

import com.nubo.operations.custody.api.models.entity.RejectionReasonEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RejectionReasonRepository extends JpaRepository<RejectionReasonEntity, Long> {

    List<RejectionReasonEntity> findByCategory(String category);

}

```

## src/main/java/com/nubo/operations/custody/api/repository/SettlementRepository.java

```java
package com.nubo.operations.custody.api.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.nubo.operations.custody.api.models.entity.SettlementEntity;
import com.nubo.operations.custody.api.models.entity.SettlementKey;

public interface SettlementRepository extends JpaRepository<SettlementEntity, SettlementKey>,
        JpaSpecificationExecutor<SettlementEntity> {

    @Query("""
            SELECT s FROM SettlementEntity s
            INNER JOIN FETCH s.trade
            INNER JOIN FETCH s.side
            LEFT JOIN FETCH s.investor
            LEFT JOIN FETCH s.investorAccount
            LEFT JOIN FETCH s.participantAccount
            LEFT JOIN FETCH s.bankAccount
            LEFT JOIN FETCH s.tradingSystem
            LEFT JOIN FETCH s.status
            LEFT JOIN FETCH s.sourceQuoteType
            LEFT JOIN FETCH s.ficAdministrator
            LEFT JOIN FETCH s.custodianStatus
            LEFT JOIN FETCH s.settlementStatus
            WHERE s.trade.id = :tradeId AND s.uniqueFractionId = :uniqueFractionId AND s.side.id = :sideId
            """)
    Optional<SettlementEntity> findByCompositeKey(
            @Param("tradeId") Long tradeId,
            @Param("sideId") String sideId,
            @Param("uniqueFractionId") Long uniqueFractionId);

    @Query("""
            SELECT DISTINCT s FROM SettlementEntity s
            INNER JOIN FETCH s.trade
            INNER JOIN FETCH s.side
            LEFT JOIN FETCH s.investor
            LEFT JOIN FETCH s.investorAccount
            LEFT JOIN FETCH s.participantAccount
            LEFT JOIN FETCH s.bankAccount
            LEFT JOIN FETCH s.tradingSystem
            LEFT JOIN FETCH s.status
            LEFT JOIN FETCH s.sourceQuoteType
            LEFT JOIN FETCH s.ficAdministrator
            LEFT JOIN FETCH s.custodianStatus
            LEFT JOIN FETCH s.settlementStatus
            WHERE s.uniqueFractionId = :uniqueFractionId
            """)
    List<SettlementEntity> findByUniqueFractionId(@Param("uniqueFractionId") Long uniqueFractionId);

    @Query("""
            SELECT s FROM SettlementEntity s
            JOIN s.trade t
            WHERE t.id IN :tradeIds
            """)
    Page<SettlementEntity> findByTradeIds(@Param("tradeIds") List<Long> tradeIds, Pageable pageable);

    @Query("""
            SELECT COUNT(s) > 0 FROM SettlementEntity s
            JOIN s.trade t
            WHERE t.id IN :tradeIds AND t.participantBuy.id = :participantId
            """)
    boolean isParticipantBuyer(@Param("tradeIds") List<Long> tradeIds, @Param("participantId") Long participantId);

    @Query("""
            SELECT COUNT(s) > 0 FROM SettlementEntity s
            JOIN s.trade t
            WHERE t.id IN :tradeIds AND t.participantSell.id = :participantId
            """)
    boolean isParticipantSeller(@Param("tradeIds") List<Long> tradeIds, @Param("participantId") Long participantId);

    @Query("""
            SELECT s FROM SettlementEntity s
            JOIN s.trade t
            WHERE t.id IN :tradeIds
            AND (t.participantBuy.id = :participantId OR t.participantSell.id = :participantId)
            AND s.side.id = :sideId
            """)
    Page<SettlementEntity> findByTradeIdsAndParticipantAndSide(@Param("tradeIds") List<Long> tradeIds,
            @Param("participantId") Long participantId,
            @Param("sideId") String sideId,
            Pageable pageable);

    @Query("""
            SELECT s FROM SettlementEntity s
            JOIN s.trade t
            WHERE t.id IN :tradeIds
            AND (t.participantBuy.id = :participantId OR t.participantSell.id = :participantId)
            """)
    Page<SettlementEntity> findByTradeIdsAndParticipantMultipleSides(@Param("tradeIds") List<Long> tradeIds,
            @Param("participantId") Long participantId,
            Pageable pageable);

    @Query("""
            SELECT s FROM SettlementEntity s
            JOIN s.trade t
            WHERE t.id IN :tradeIds
            """)
    List<SettlementEntity> findByTradeIds(@Param("tradeIds") List<Long> tradeIds, Sort sort);

    @Query("""
            SELECT s FROM SettlementEntity s
            JOIN s.trade t
            WHERE t.id IN :tradeIds
            AND (t.participantBuy.id = :participantId OR t.participantSell.id = :participantId)
            AND s.side.id = :sideId
            """)
    List<SettlementEntity> findByTradeIdsAndParticipantAndSide(@Param("tradeIds") List<Long> tradeIds,
            @Param("participantId") Long participantId,
            @Param("sideId") String sideId,
            Sort sort);

    @Query("""
            SELECT s FROM SettlementEntity s
            JOIN s.trade t
            WHERE t.id IN :tradeIds
            AND (t.participantBuy.id = :participantId OR t.participantSell.id = :participantId)
            """)
    List<SettlementEntity> findByTradeIdsAndParticipantMultipleSides(@Param("tradeIds") List<Long> tradeIds,
            @Param("participantId") Long participantId,
            Sort sort);

    @Query("""
            SELECT COUNT(s) > 0 FROM SettlementEntity s
            JOIN s.trade t
            WHERE t.id = :tradeId
            AND s.side.id = :sideId
            AND s.investorAccount.id = :investorAccountId
            """)
    boolean existsByTradeIdAndSideIdAndInvestorAccountId(@Param("tradeId") Long tradeId,
            @Param("sideId") String sideId,
            @Param("investorAccountId") Long investorAccountId);
}

```

## src/main/java/com/nubo/operations/custody/api/repository/SideRepository.java

```java
package com.nubo.operations.custody.api.repository;

import com.nubo.operations.custody.api.models.entity.SideEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SideRepository extends JpaRepository<SideEntity, String> {
}


```

## src/main/java/com/nubo/operations/custody/api/repository/StatusRepository.java

```java
package com.nubo.operations.custody.api.repository;

import com.nubo.operations.custody.api.models.entity.StatusEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface StatusRepository extends JpaRepository<StatusEntity, Long>,
        JpaSpecificationExecutor<StatusEntity> {
}


```

## src/main/java/com/nubo/operations/custody/api/repository/TradeRepository.java

```java
package com.nubo.operations.custody.api.repository;

import com.nubo.operations.custody.api.models.entity.TradeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface TradeRepository extends JpaRepository<TradeEntity, Long>, JpaSpecificationExecutor<TradeEntity> {
}

```

## src/main/java/com/nubo/operations/custody/api/repository/TypeRepository.java

```java
package com.nubo.operations.custody.api.repository;

import com.nubo.operations.custody.api.models.entity.TypeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TypeRepository extends JpaRepository<TypeEntity, Long> {
}

```

## src/main/java/com/nubo/operations/custody/api/repository/UserNuboRepository.java

```java
package com.nubo.operations.custody.api.repository;

import com.nubo.operations.custody.api.models.entity.UserNuboEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface UserNuboRepository extends JpaRepository<UserNuboEntity, Long> {

    @Query("SELECT u FROM UserNuboEntity u " +
            "WHERE u.userName = :userName")
    Optional<UserNuboEntity> findByUserName(String userName);

}

```

## src/main/java/com/nubo/operations/custody/api/service/BatchCacheService.java

```java
package com.nubo.operations.custody.api.service;

import java.util.Optional;

import com.nubo.operations.custody.api.models.entity.SideEntity;
import com.nubo.operations.custody.api.models.entity.StatusEntity;
import com.nubo.operations.custody.api.models.entity.TypeEntity;

public interface BatchCacheService {

    Optional<SideEntity> validateSide(String sideId);

    Optional<StatusEntity> validateStatus(Long statusId);

    Optional<TypeEntity> validateType(Long typeId);

}

```

## src/main/java/com/nubo/operations/custody/api/service/CustodyActionsService.java

```java
package com.nubo.operations.custody.api.service;

import java.util.List;

import com.nubo.operations.custody.api.models.dto.request.CustodyAdmitInDto;
import com.nubo.operations.custody.api.models.dto.request.CustodyPrematchInDto;
import com.nubo.operations.custody.api.models.dto.request.CustodyRejectInDto;
import com.nubo.operations.custody.api.models.dto.request.CustodyTransferInDto;
import com.nubo.operations.custody.api.models.dto.request.PackageRejectInDto;
import com.nubo.operations.custody.api.models.dto.response.CustodyActionOutDto;
import com.nubo.operations.custody.api.models.dto.response.CustodyTransferResultOutDto;

public interface CustodyActionsService {

    List<CustodyActionOutDto> preMatch(List<CustodyPrematchInDto> custodyPrematchInDtoList);

    List<CustodyActionOutDto> admit(List<CustodyAdmitInDto> custodyAdmitInDtoList);

    List<CustodyActionOutDto> reject(List<CustodyRejectInDto> custodyRejectInDtoList);

    CustodyActionOutDto rejectPackage(PackageRejectInDto packageRejectInDto);

    List<CustodyTransferResultOutDto> transfer(List<CustodyTransferInDto> custodyTransferInDtoList, Long participantId);

}

```

## src/main/java/com/nubo/operations/custody/api/service/CustodyRejectBatchService.java

```java
package com.nubo.operations.custody.api.service;

import com.nubo.operations.custody.api.models.dto.request.BatchCustodyRejectInDto;
import com.nubo.operations.custody.api.models.dto.request.BatchPackageRejectInDto;
import com.nubo.operations.custody.api.models.dto.response.BatchCustodyActionOutDto;

public interface CustodyRejectBatchService {
    BatchCustodyActionOutDto rejectBatch(BatchCustodyRejectInDto request);
    BatchCustodyActionOutDto rejectPackageBatch(BatchPackageRejectInDto request);
}

```

## src/main/java/com/nubo/operations/custody/api/service/CustodyService.java

```java
package com.nubo.operations.custody.api.service;

import com.nubo.operations.custody.api.models.dto.response.PageResponseOutDto;
import com.nubo.operations.custody.api.models.dto.response.SettlementByCustodyOutDto;

public interface CustodyService {

    PageResponseOutDto<SettlementByCustodyOutDto> findAllSettlementsByUser(
            Long tradeId, Long statusId, Long countryId, String matchDate,
            Long participantId, int page, int size, String sort, String order, boolean all);

}

```

## src/main/java/com/nubo/operations/custody/api/service/RejectionReasonService.java

```java
package com.nubo.operations.custody.api.service;

import com.nubo.operations.custody.api.models.dto.response.RejectionReasonOutDto;

import java.util.List;

public interface RejectionReasonService {

    List<RejectionReasonOutDto> findByCategoryRejectedCustody();

}

```

## src/main/java/com/nubo/operations/custody/api/service/impl/BatchCacheServiceImpl.java

```java
package com.nubo.operations.custody.api.service.impl;

import java.util.Optional;

import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import com.nubo.operations.custody.api.models.entity.SideEntity;
import com.nubo.operations.custody.api.models.entity.StatusEntity;
import com.nubo.operations.custody.api.models.entity.TypeEntity;
import com.nubo.operations.custody.api.repository.SideRepository;
import com.nubo.operations.custody.api.repository.StatusRepository;
import com.nubo.operations.custody.api.repository.TypeRepository;
import com.nubo.operations.custody.api.service.BatchCacheService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class BatchCacheServiceImpl implements BatchCacheService {

    private final SideRepository sideRepository;
    private final StatusRepository statusRepository;
    private final TypeRepository typeRepository;

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
}

```

## src/main/java/com/nubo/operations/custody/api/service/impl/CustodyActionsServiceImpl.java

```java
package com.nubo.operations.custody.api.service.impl;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;

import com.nubo.operations.custody.api.models.entity.*;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;

import com.nubo.operations.custody.api.application.properties.PropertiesConfig;
import com.nubo.operations.custody.api.application.properties.PropertiesContext;
import com.nubo.operations.custody.api.application.util.ApplicationUtils;
import com.nubo.operations.custody.api.client.operations.cmd.models.dto.response.ParticipantBankAccountOutDto;
import com.nubo.operations.custody.api.client.operations.cmd.service.OperationCmdClient;
import com.nubo.operations.custody.api.client.packageCustodian.dto.request.PackageCustodianAutomaticInDto;
import com.nubo.operations.custody.api.client.packageCustodian.dto.response.PackageCustodianAutomaticOutDto;
import com.nubo.operations.custody.api.client.packageCustodian.service.PackageCustodianCmdClient;
import com.nubo.operations.custody.api.client.rules.models.dto.request.StatusUpdateSettlementInDto;
import com.nubo.operations.custody.api.client.rules.models.dto.response.StatusClientOutDto;
import com.nubo.operations.custody.api.client.rules.models.dto.response.StatusUpdateSettlementOutDto;
import com.nubo.operations.custody.api.client.rules.service.OperationBusinessRuleClient;
import com.nubo.operations.custody.api.exception.ServiceException;
import com.nubo.operations.custody.api.exception.error.ErrorCode;
import com.nubo.operations.custody.api.helpers.MapperUtil;
import com.nubo.operations.custody.api.helpers.SendNotificationUtil;
import com.nubo.operations.custody.api.helpers.ValidatorUtil;
import com.nubo.operations.custody.api.models.domain.UserNuboData;
import com.nubo.operations.custody.api.models.dto.request.CustodyActionRequest;
import com.nubo.operations.custody.api.models.dto.request.CustodyAdmitInDto;
import com.nubo.operations.custody.api.models.dto.request.CustodyPrematchInDto;
import com.nubo.operations.custody.api.models.dto.request.CustodyRejectInDto;
import com.nubo.operations.custody.api.models.dto.request.CustodyTransferInDto;
import com.nubo.operations.custody.api.models.dto.request.PackageRejectInDto;
import com.nubo.operations.custody.api.models.dto.response.CustodyActionOutDto;
import com.nubo.operations.custody.api.models.dto.response.CustodyTransferResultOutDto;
import com.nubo.operations.custody.api.models.dto.response.ErrorCustodyActionOutDto;
import com.nubo.operations.custody.api.models.enums.BusinessRuleEnum;
import com.nubo.operations.custody.api.models.enums.CustodyActionEnum;
import com.nubo.operations.custody.api.models.enums.MessageErrorCustodyActionEnum;
import com.nubo.operations.custody.api.models.enums.MessageSuccessCustodyActionEnum;
import com.nubo.operations.custody.api.models.enums.NotificationCustodyActionEnum;
import com.nubo.operations.custody.api.models.enums.NotificationTypeEnum;
import com.nubo.operations.custody.api.models.enums.SideEnum;
import com.nubo.operations.custody.api.models.enums.StatusEnum;
import com.nubo.operations.custody.api.models.enums.VersionApiEnum;
import com.nubo.operations.custody.api.repository.InvestorAccountRepository;
import com.nubo.operations.custody.api.repository.PackageCustodianHistoryRepository;
import com.nubo.operations.custody.api.repository.PackageCustodianRepository;
import com.nubo.operations.custody.api.repository.PackageDetailRepository;
import com.nubo.operations.custody.api.repository.ParticipantBankAccountRepository;
import com.nubo.operations.custody.api.repository.ParticipantRepository;
import com.nubo.operations.custody.api.repository.ParticipantUserNuboRepository;
import com.nubo.operations.custody.api.repository.RejectionReasonRepository;
import com.nubo.operations.custody.api.repository.SettlementRepository;
import com.nubo.operations.custody.api.repository.TradeRepository;
import com.nubo.operations.custody.api.service.BatchCacheService;
import com.nubo.operations.custody.api.service.CustodyActionsService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class CustodyActionsServiceImpl implements CustodyActionsService {

    private final SettlementRepository settlementRepository;
    private final ParticipantUserNuboRepository participantUserNuboRepository;
    private final RejectionReasonRepository rejectionReasonRepository;
    private final ParticipantRepository participantRepository;
    private final InvestorAccountRepository investorAccountRepository;
    private final OperationBusinessRuleClient operationBusinessRuleClient;
    private final OperationCmdClient operationCmdClient;
    private final SendNotificationUtil sendNotificationUtil;
    private final PropertiesConfig propertiesConfig;
    private final PackageCustodianRepository packageCustodianRepository;
    private final PackageDetailRepository packageDetailRepository;
    private final PackageCustodianHistoryRepository packageCustodianHistoryRepository;
    private final TradeRepository tradeRepository;
    private final ParticipantBankAccountRepository participantBankAccountRepository;
    private final PackageCustodianCmdClient packageCustodianCmdClient;
    private final BatchCacheService batchCacheService;
    private final ValidatorUtil validatorUtil;

    private static final String MANUAL_CUSTODY_TRANSFER_CUT_TYPE = "MANUAL_CUSTODY_TRANSFER";
    private static final BigDecimal FULL_CLEARING_PERCENTAGE = BigDecimal.ZERO.setScale(4, RoundingMode.HALF_UP);
    private static final BigDecimal ZERO_AMOUNT = BigDecimal.ZERO.setScale(4, RoundingMode.HALF_UP);

    @Override
    @Transactional
    public List<CustodyActionOutDto> preMatch(List<CustodyPrematchInDto> custodyPrematchInDtoList) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return custodyPrematchInDtoList.stream().map(this::preMatchV1).toList();
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    @Transactional
    public CustodyActionOutDto preMatch(CustodyPrematchInDto custodyPrematchInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return preMatchV1(custodyPrematchInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private CustodyActionOutDto preMatchV1(CustodyPrematchInDto custodyPrematchInDto) {
        log.info("Start method preMatchV1, custodyPrematchInDto -> {}", custodyPrematchInDto);

        CustodyActionOutDto custodyActionOutDto = executeCustodyAction(CustodyActionEnum.PREMATCH,
                custodyPrematchInDto);

        log.info("End method preMatchV1 custodyActionOutDto {}", custodyActionOutDto);

        return custodyActionOutDto;
    }

    @Override
    @Transactional
    public List<CustodyActionOutDto> admit(List<CustodyAdmitInDto> custodyAdmitInDtoList) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return custodyAdmitInDtoList.stream().map(this::admitV1).toList();
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    @Transactional
    public CustodyActionOutDto admit(CustodyAdmitInDto custodyAdmitInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return admitV1(custodyAdmitInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private CustodyActionOutDto admitV1(CustodyAdmitInDto custodyAdmitInDto) {
        log.info("Start method admitV1, custodyAdmitInDto -> {}", custodyAdmitInDto);

        CustodyActionOutDto custodyActionOutDto = executeCustodyAction(CustodyActionEnum.ADMIT, custodyAdmitInDto);

        log.info("End method admitV1, custodyActionOutDto {}", custodyActionOutDto);
        return custodyActionOutDto;
    }

    @Override
    @Transactional
    public List<CustodyActionOutDto> reject(List<CustodyRejectInDto> custodyRejectInDtoList) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return custodyRejectInDtoList.stream().map(this::rejectV1).toList();
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    @Transactional
    public CustodyActionOutDto reject(CustodyRejectInDto custodyRejectInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return rejectV1(custodyRejectInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private CustodyActionOutDto rejectV1(CustodyRejectInDto custodyRejectInDto) {
        log.info("Start method rejectV1, custodyRejectInDto -> {}", custodyRejectInDto);

        CustodyActionOutDto custodyActionOutDto = executeCustodyAction(CustodyActionEnum.REJECT, custodyRejectInDto);

        log.info("End method rejectV1, custodyActionOutDto {}", custodyActionOutDto);

        return custodyActionOutDto;
    }

    @Override
    @Transactional
    public CustodyActionOutDto rejectPackage(PackageRejectInDto packageRejectInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return rejectPackageV1(packageRejectInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private CustodyActionOutDto rejectPackageV1(PackageRejectInDto packageRejectInDto) {
        log.info("Start method rejectPackageV1, packageRejectInDto -> {}", packageRejectInDto);

        if (ObjectUtils.isEmpty(packageRejectInDto) || ObjectUtils.isEmpty(packageRejectInDto.getPackageId())) {
            throw new ServiceException(ErrorCode.BAD_REQUEST, HttpStatus.BAD_REQUEST);
        }

        Long packageId = packageRejectInDto.getPackageId();

        PackageCustodianEntity packageCustodianEntity = packageCustodianRepository.findById(packageId)
                .orElseThrow(() -> new ServiceException(ErrorCode.PACKAGE_NOT_FOUND, HttpStatus.NOT_FOUND));

        if (ObjectUtils.isEmpty(packageCustodianEntity.getPackageStatus())
                || !Objects.equals(StatusEnum.CUSTODIAN_TRANSFERRED.getId(),
                        packageCustodianEntity.getPackageStatus().getId())) {
            throw new ServiceException(ErrorCode.PACKAGE_STATUS_NOT_VALID, HttpStatus.BAD_REQUEST);
        }

        List<PackageDetailEntity> packageDetailEntityList = packageDetailRepository
                .findByPackageCustodianId(packageId);

        if (packageDetailEntityList.isEmpty()) {
            throw new ServiceException(ErrorCode.SETTLEMENT_NOT_FOUND, HttpStatus.NOT_FOUND,
                    new RuntimeException(String.format(
                            "No fractions found in PACKAGE_DETAIL for packageId=%d", packageId)));
        }

        List<SettlementEntity> settlementEntityList = resolveSettlementsForPackageDetails(
                packageId, packageDetailEntityList);

        LocalDate today = PropertiesContext.getClientDatetime().toLocalDate();
        for (SettlementEntity settlementEntity : settlementEntityList) {
            LocalDate clearingDate = settlementEntity.getTrade().getClearingDate();
            if (!ObjectUtils.isEmpty(clearingDate) && clearingDate.isBefore(today)) {
                throw new ServiceException(ErrorCode.PACKAGE_ALREADY_SETTLED, HttpStatus.BAD_REQUEST,
                        new RuntimeException(String.format(
                                "Trade %d already reached clearingDate %s", settlementEntity.getTrade().getId(),
                                clearingDate)));
            }
        }

        // Referencias capturadas ANTES de mutar, mismo criterio usado en
        // executeCustodyAction:
        // ficAdministrator se anula en el loop, así que se lee antes.
        SettlementEntity referenceSettlementEntity = settlementEntityList.get(0);
        String referenceSideId = referenceSettlementEntity.getSide().getId();
        Long referenceCustodianId = ObjectUtils.isEmpty(referenceSettlementEntity.getCustodian())
                ? null
                : referenceSettlementEntity.getCustodian().getId();
        Long referenceFicAdministratorId = ObjectUtils.isEmpty(referenceSettlementEntity.getFicAdministrator())
                ? null
                : referenceSettlementEntity.getFicAdministrator().getId();

        StatusEntity rechazadaCustodioStatus = findStatusById(StatusEnum.CUSTODIAN_REJECTED.getId());

        List<SettlementEntity> settlementsUpdatedList = new ArrayList<>();

        for (SettlementEntity settlementEntity : settlementEntityList) {

            settlementEntity.setCustodianStatus(rechazadaCustodioStatus);
            settlementEntity.setFicAdministrator(null);
            // TODO: reasignar cuenta CUD del participante -- fuente/valor exacto pendiente
            // de confirmar con negocio. No se toca settlementEntity.getParticipantAccount()
            // hasta tener esa definición.
            settlementEntity.setLastModifyApplication(propertiesConfig.getApiName());
            settlementEntity.setLastModifyIp(PropertiesContext.getClientIp());
            settlementEntity.setLastModifyUser(PropertiesContext.getClientUser());
            settlementEntity.setLastModifyDate(PropertiesContext.getClientDatetime());

            settlementsUpdatedList.add(settlementRepository.save(settlementEntity));
        }

        updatePackageStatus(packageCustodianEntity, packageDetailEntityList, rechazadaCustodioStatus, null,
                referenceSideId, referenceCustodianId, referenceFicAdministratorId);

        log.info("Package REJECT executed for packageId={}, fractions affected={}",
                packageId, settlementsUpdatedList.size());

        return CustodyActionOutDto.builder()
                .valid(true)
                .message("Paquete rechazado")
                .successSettlements(settlementsUpdatedList.stream()
                        .map(MapperUtil::settlementEntityToSettlementCustodyActionOutDto).toList())
                .errorsSettlements(List.of())
                .build();
    }

    @Override
    @Transactional
    public List<CustodyTransferResultOutDto> transfer(List<CustodyTransferInDto> custodyTransferInDtoList,
            Long participantId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return transferV1(custodyTransferInDtoList, participantId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<CustodyTransferResultOutDto> transferV1(List<CustodyTransferInDto> custodyTransferInDtoList,
            Long participantId) {
        log.debug("Start method transferV1, custodyTransferInDto -> {}",
                custodyTransferInDtoList);

        List<CustodyTransferResultOutDto> results = new ArrayList<>();
        List<SettlementEntity> settlementEntities = new ArrayList<>();
        for (CustodyTransferInDto custodyTransferInDto : custodyTransferInDtoList) {
            log.info("---- Processing settlement ----");
            log.info("tradeId={}, fraction={}, sideId={}",
                    custodyTransferInDto.getTradeId(),
                    custodyTransferInDto.getFraction(),
                    custodyTransferInDto.getSideId());

            // BUSINESS RULE REQUEST
            StatusUpdateSettlementInDto statusUpdateDto = StatusUpdateSettlementInDto.builder()
                    .tradeId(custodyTransferInDto.getTradeId())
                    .sideEnum(SideEnum.fromValue(custodyTransferInDto.getSideId()))
                    .fraction(custodyTransferInDto.getFraction())
                    .code(BusinessRuleEnum.RULE_CUSTODIAN_TRANSFER)
                    .build();

            log.info("Calling Business Rules with: {}", statusUpdateDto);

            StatusUpdateSettlementOutDto validationResponse = operationBusinessRuleClient
                    .validateUpdateStatusSettlement(statusUpdateDto);

            log.info("BR Response: {}", validationResponse);

            SettlementKey key = SettlementKey.builder()
                    .trade(custodyTransferInDto.getTradeId())
                    .side(custodyTransferInDto.getSideId())
                    .fraction(custodyTransferInDto.getFraction())
                    .build();
            SettlementEntity settlementEntity = settlementRepository.findById(key)
                    .orElseThrow(() -> new ServiceException(ErrorCode.SETTLEMENT_NOT_FOUND, HttpStatus.NOT_FOUND));

            TradeEntity trade = settlementEntity.getTrade();
            SideEntity sideEntity = batchCacheService.validateSide(custodyTransferInDto.getSideId()).orElseThrow(
                    () -> new ServiceException(ErrorCode.SETTLEMENT_NOT_FOUND, HttpStatus.NOT_FOUND));

            // INVALID CASE
            if (validationResponse.getIsValid() == null || !validationResponse.getIsValid()) {
                log.info("Settlement rejected by BR");
                results.add(MapperUtil.toRejectedCustodyTransferResultDto(
                        custodyTransferInDto,
                        validationResponse.getDescription(),
                        sideEntity,
                        trade));
                continue;
            }

            // Happy path
            // TRANSFERRED CASE
            if (ObjectUtils.isEmpty(custodyTransferInDto.getCustodianId())) {
                throw new ServiceException(ErrorCode.CUSTODIAN_NOT_FOUND_IN_TRANSFER, HttpStatus.BAD_REQUEST);
            }
            settlementEntity.setCustodian(findParticipant(custodyTransferInDto.getCustodianId()));
            settlementEntity.setCustodianStatus(findStatusById(StatusEnum.CUSTODIAN_TRANSFERRED.getId()));

            if (!ObjectUtils.isEmpty(custodyTransferInDto.getFicAdministratorId())) {
                settlementEntity
                        .setFicAdministrator(findParticipant(custodyTransferInDto.getFicAdministratorId()));

                settlementEntity
                        .setCashAccount(findCashAccountByParticipant(custodyTransferInDto.getFicAdministratorId()));
            }
            ParticipantEntity senderParticipant;
            if (ApplicationUtils.isUserClientBackend()) {
                senderParticipant = findParticipant(participantId);
            } else {
                UserNuboData userNuboData = ApplicationUtils.getUserNuboData();
                senderParticipant = userNuboData.participantEntity() == null
                        ? findParticipant(participantId)
                        : userNuboData.participantEntity();
            }

            settlementEntity.setTransferParticipant(senderParticipant);
            log.info("Participant who changed custodian status -> {}", senderParticipant.getId());

            // Audit fields
            settlementEntity.setLastModifyApplication(propertiesConfig.getApiName());
            settlementEntity.setLastModifyIp(PropertiesContext.getClientIp());
            settlementEntity.setLastModifyUser(PropertiesContext.getClientUser());
            settlementEntity.setLastModifyDate(PropertiesContext.getClientDatetime());

            // Save settlemnt
            SettlementEntity savedEntity = settlementRepository.save(settlementEntity);

            TradeEntity tradeEntity = savedEntity.getTrade();

            // Update trade status
            tradeEntity.setCustodianStatus(findStatusById(StatusEnum.CUSTODIAN_TRANSFERRED.getId()));

            // Audit
            tradeEntity.setLastModifyApplication(propertiesConfig.getApiName());
            tradeEntity.setLastModifyIp(PropertiesContext.getClientIp());
            tradeEntity.setLastModifyUser(PropertiesContext.getClientUser());
            tradeEntity.setLastModifyDate(PropertiesContext.getClientDatetime());

            tradeRepository.save(tradeEntity);

            log.info("Trade updated to TRANSFERRED -> tradeId={}", tradeEntity.getId());

            createCustodyPackageFromTransfer(savedEntity);

            settlementEntities.add(savedEntity);

            log.info("Settlement updated successfully -> tradeId={}, fraction={}",
                    savedEntity.getTrade().getId(),
                    savedEntity.getFraction());

            // Result mapping
            results.add(
                    MapperUtil.settlementEntityToCustodyTransferResultDto(savedEntity));
        }

        NotificationCustodyActionEnum notificationCustodyActionEnum = NotificationCustodyActionEnum.TRANSFER_CUSTODY_SUCCESS;

        this.sendNotificationsSuccess(settlementEntities, notificationCustodyActionEnum);

        log.info("End method updateSettlementV1, results -> {}", results);

        return results;
    }

    private CustodyActionOutDto executeCustodyAction(CustodyActionEnum custodyActionEnum,
            CustodyActionRequest custodyActionRequest) {
        if (ObjectUtils.isEmpty(custodyActionRequest) || ObjectUtils.isEmpty(custodyActionRequest.getPackageId())) {
            throw new ServiceException(ErrorCode.BAD_REQUEST, HttpStatus.BAD_REQUEST);
        }

        Long packageId = custodyActionRequest.getPackageId();
        BusinessRuleEnum targetCodeBusinessRule = resolveCodeBusinessRule(custodyActionEnum);

        String rejectionReason = null;
        Long custodianId = null;
        Long newInvestorAccountId = null;
        Long sourceQuoteTypeId = null;
        RejectionReasonEntity rejectionReasonEntity = null;

        if (CustodyActionEnum.ADMIT.equals(custodyActionEnum)) {
            CustodyAdmitInDto admitInDto = (CustodyAdmitInDto) custodyActionRequest;
            custodianId = admitInDto.getCustodianId();
            newInvestorAccountId = admitInDto.getInvestorAccountId();
            sourceQuoteTypeId = admitInDto.getSourceQuoteTypeId();
        }
        if (CustodyActionEnum.REJECT.equals(custodyActionEnum)) {
            CustodyRejectInDto rejectInDto = (CustodyRejectInDto) custodyActionRequest;
            rejectionReason = buildRejectionReason(rejectInDto.getRejectionReasonId(), rejectInDto.getOtherReason());
            custodianId = rejectInDto.getCustodianId();
            rejectionReasonEntity = validateRejectionReason(rejectInDto.getRejectionReasonId());
        }
        if (!ObjectUtils.isEmpty(custodianId)) {
            findParticipant(custodianId);
        }

        PackageData packageData = getPackageData(packageId);
        PackageCustodianEntity packageCustodianEntity = packageData.packageCustodianEntity();
        List<PackageDetailEntity> packageDetailEntityList = packageData.packageDetailEntityList();
        List<SettlementEntity> settlementWithPackageList = packageData.settlementEntityList();

        // Se capturan VALORES (no referencias al objeto) antes del loop de mutación,
        // porque REJECT anula custodian/ficAdministrator sobre el mismo objeto en
        // memoria
        // que usaríamos como "referencia" — un Long capturado aquí es inmutable y no se
        // ve
        // afectado por lo que el loop haga después.
        SettlementEntity referenceSettlementEntity = settlementWithPackageList.get(0);
        Long referenceCustodianId = ObjectUtils.isEmpty(referenceSettlementEntity.getCustodian())
                ? null
                : referenceSettlementEntity.getCustodian().getId();
        Long referenceFicAdministratorId = ObjectUtils.isEmpty(referenceSettlementEntity.getFicAdministrator())
                ? null
                : referenceSettlementEntity.getFicAdministrator().getId();
        String referenceSideIdStr = referenceSettlementEntity.getSide().getId();
        Long referenceInvestorId = referenceSettlementEntity.getInvestor().getId();

        RulesData rulesData = getRulesData(settlementWithPackageList, targetCodeBusinessRule);
        List<ErrorCustodyActionOutDto> errorCustodyActionOutDtoList = rulesData.errorCustodyActionOutDtoList();
        Map<Long, StatusUpdateSettlementOutDto> mapRuleResultsBySettlement = rulesData.mapRuleResultsBySettlement();

        if (!errorCustodyActionOutDtoList.isEmpty()) {
            return CustodyActionOutDto.builder()
                    .valid(false)
                    .message(resolveResponseMessage(custodyActionEnum, false))
                    .successSettlements(List.of())
                    .errorsSettlements(errorCustodyActionOutDtoList)
                    .build();
        }

        List<SettlementEntity> settlementsUpdatedList = new ArrayList<>();
        NotificationCustodyActionEnum notificationCustodyActionEnum = null;
        StatusEntity packageLevelNewStatus = null;

        for (SettlementEntity settlementEntityWithPackage : settlementWithPackageList) {
            StatusUpdateSettlementOutDto statusUpdateSettlementOutDto = mapRuleResultsBySettlement
                    .get(settlementEntityWithPackage.getUniqueFractionId());

            StatusEntity newStatusSettlementEntity = Optional.ofNullable(statusUpdateSettlementOutDto.getNewStatus())
                    .map(StatusClientOutDto::getId)
                    .flatMap(batchCacheService::validateStatus)
                    .orElse(null);
            StatusEntity newStatusCustodianEntity = Optional
                    .ofNullable(statusUpdateSettlementOutDto.getNewStatusCustodian())
                    .map(StatusClientOutDto::getId)
                    .flatMap(batchCacheService::validateStatus)
                    .orElse(null);

            if (packageLevelNewStatus == null) {
                packageLevelNewStatus = newStatusCustodianEntity;
            }

            if (CustodyActionEnum.ADMIT.equals(custodyActionEnum)) {
                notificationCustodyActionEnum = NotificationCustodyActionEnum.ADMIT_CUSTODY_SUCCESS;
                if (!ObjectUtils.isEmpty(newInvestorAccountId)) {
                    if (settlementRepository.existsByTradeIdAndSideIdAndInvestorAccountId(
                            settlementEntityWithPackage.getTrade().getId(),
                            settlementEntityWithPackage.getSide().getId(),
                            newInvestorAccountId)) {
                        throw new ServiceException(ErrorCode.INVESTOR_ACCOUNT_ALREADY_ASSIGNED,
                                HttpStatus.BAD_REQUEST);
                    }
                    packageCustodianEntity
                            .setOldInvestorAccountId(settlementEntityWithPackage.getInvestorAccount() != null
                                    ? settlementEntityWithPackage.getInvestorAccount().getId()
                                    : null);

                    InvestorAccountEntity investorAccountEntity = findInvestorAccountById(newInvestorAccountId);
                    settlementEntityWithPackage.setInvestorAccount(investorAccountEntity);
                    settlementEntityWithPackage.setInvestor(investorAccountEntity.getInvestor());
                    settlementEntityWithPackage.setParticipantAccount(null);
                    settlementEntityWithPackage.setSourceQuoteType(findTypeEntity(sourceQuoteTypeId));
                    packageCustodianEntity.setInvestorAccount(investorAccountEntity);
                }

            } else if (CustodyActionEnum.PREMATCH.equals(custodyActionEnum)) {
                notificationCustodyActionEnum = NotificationCustodyActionEnum.PREMATCH_CUSTODY_SUCCESS;

            } else if (CustodyActionEnum.REJECT.equals(custodyActionEnum) && !ObjectUtils.isEmpty(rejectionReason)) {
                settlementEntityWithPackage.setRejectionReason(rejectionReason);
                settlementEntityWithPackage.setFicAdministrator(null);

                ParticipantBankAccountOutDto participantBankAccountOutDto = operationCmdClient
                        .validateCudAccountFractionAssignment(
                                settlementEntityWithPackage.getTrade().getId(),
                                settlementEntityWithPackage.getSide().getId());

                notificationCustodyActionEnum = NotificationCustodyActionEnum.REJECTED_CUSTODY_SUCCESS;

                if (!ObjectUtils.isEmpty(packageCustodianEntity.getOldInvestorAccountId())) {
                    InvestorAccountEntity oldInvestorAccountEntity = investorAccountRepository
                            .findById(packageCustodianEntity.getOldInvestorAccountId())
                            .orElse(null);
                    if (oldInvestorAccountEntity != null) {
                        settlementEntityWithPackage.setInvestorAccount(oldInvestorAccountEntity);
                        settlementEntityWithPackage.setInvestor(oldInvestorAccountEntity.getInvestor());
                        settlementEntityWithPackage.setCashAccount(participantBankAccountOutDto.getBankAccount() != null
                                ? new BigDecimal(participantBankAccountOutDto.getBankAccount())
                                : null);
                        packageCustodianEntity.setInvestorAccount(oldInvestorAccountEntity);
                    }
                }
                restoreCashAccountFromParticipantBankAccount(settlementEntityWithPackage);
            }

            settlementEntityWithPackage.setStatus(ObjectUtils.isEmpty(newStatusSettlementEntity)
                    ? settlementEntityWithPackage.getStatus()
                    : newStatusSettlementEntity);
            settlementEntityWithPackage.setCustodianStatus(newStatusCustodianEntity);
            if (CustodyActionEnum.ADMIT.equals(custodyActionEnum)
                    && ObjectUtils.isEmpty(settlementEntityWithPackage.getCustodian())
                    && !ObjectUtils.isEmpty(referenceCustodianId)) {
                settlementEntityWithPackage.setCustodian(findParticipant(referenceCustodianId));
            }
            settlementEntityWithPackage.setLastModifyApplication(propertiesConfig.getApiName());
            settlementEntityWithPackage.setLastModifyIp(PropertiesContext.getClientIp());
            settlementEntityWithPackage.setLastModifyUser(PropertiesContext.getClientUser());
            settlementEntityWithPackage.setLastModifyDate(PropertiesContext.getClientDatetime());

            SettlementEntity settlementEntitySaved = settlementRepository.save(settlementEntityWithPackage);

            settlementsUpdatedList.add(settlementEntitySaved);
        }

        updatePackageStatus(packageCustodianEntity, packageDetailEntityList, packageLevelNewStatus,
                rejectionReasonEntity, referenceSideIdStr, referenceCustodianId, referenceFicAdministratorId);

        if (CustodyActionEnum.REJECT.equals(custodyActionEnum)) {
            packageCustodianEntity.setOldInvestorAccountId(null);
            packageCustodianRepository.save(packageCustodianEntity);
        }

        log.info("Custody action {} executed for packageId={}, fractions affected={}",
                custodyActionEnum, packageId, settlementsUpdatedList.size());

        this.sendNotificationsSuccess(settlementsUpdatedList, notificationCustodyActionEnum);

        return CustodyActionOutDto.builder()
                .valid(true)
                .message(resolveResponseMessage(custodyActionEnum, true))
                .successSettlements(settlementsUpdatedList.stream()
                        .map(MapperUtil::settlementEntityToSettlementCustodyActionOutDto).toList())
                .errorsSettlements(List.of())
                .build();
    }

    private List<SettlementEntity> resolveSettlementsForPackageDetails(Long packageId,
            List<PackageDetailEntity> packageDetailEntityList) {
        List<SettlementEntity> settlementEntityList = new ArrayList<>();

        for (PackageDetailEntity packageDetailEntity : packageDetailEntityList) {
            SettlementEntity settlementEntity = settlementRepository.findByCompositeKey(
                    packageDetailEntity.getTradeId(),
                    packageDetailEntity.getSideId(),
                    packageDetailEntity.getUniqueFractionId())
                    .orElseThrow(() -> new ServiceException(ErrorCode.SETTLEMENT_NOT_FOUND, HttpStatus.NOT_FOUND,
                            String.format(
                                    "Settlement not found for packageId='%d', [tradeId='%d', uniqueFractionId='%d', sideId='%s']",
                                    packageId, packageDetailEntity.getTradeId(),
                                    packageDetailEntity.getUniqueFractionId(),
                                    packageDetailEntity.getSideId())));
            settlementEntityList.add(settlementEntity);
        }

        return settlementEntityList;
    }

    private void updatePackageStatus(PackageCustodianEntity packageCustodianEntity,
            List<PackageDetailEntity> packageDetailEntityList, StatusEntity newPackageStatus,
            RejectionReasonEntity rejectionReasonEntity, String referenceSideId,
            Long referenceCustodianId, Long referenceFicAdministratorId) {

        packageCustodianEntity.setPackageStatus(newPackageStatus);
        packageCustodianEntity.setLastModifyApplication(propertiesConfig.getApiName());
        packageCustodianEntity.setLastModifyIp(PropertiesContext.getClientIp());
        packageCustodianEntity.setLastModifyUser(PropertiesContext.getClientUser());
        packageCustodianEntity.setLastModifyDate(PropertiesContext.getClientDatetime());
        packageCustodianRepository.save(packageCustodianEntity);

        for (PackageDetailEntity packageDetailEntity : packageDetailEntityList) {
            packageDetailEntity.setPackageStatus(newPackageStatus);
            packageDetailEntity.setLastModifyApplication(propertiesConfig.getApiName());
            packageDetailEntity.setLastModifyIp(PropertiesContext.getClientIp());
            packageDetailEntity.setLastModifyUser(PropertiesContext.getClientUser());
            packageDetailEntity.setLastModifyDate(PropertiesContext.getClientDatetime());
            packageDetailRepository.save(packageDetailEntity);
        }

        createPackageCustodianHistory(packageCustodianEntity, newPackageStatus, rejectionReasonEntity,
                referenceSideId, referenceCustodianId, referenceFicAdministratorId);
    }

    private void createPackageCustodianHistory(PackageCustodianEntity packageCustodianEntity,
            StatusEntity newPackageStatus, RejectionReasonEntity rejectionReasonEntity, String referenceSideId,
            Long referenceCustodianId, Long referenceFicAdministratorId) {
        InvestorAccountEntity investorAccountEntity = packageCustodianEntity.getInvestorAccount();
        PackageCustodianHistoryEntity historyEntity = PackageCustodianHistoryEntity.builder()
                .packageCustodianId(packageCustodianEntity.getId())
                .market(ObjectUtils.isEmpty(packageCustodianEntity.getMarket())
                        ? null
                        : packageCustodianEntity.getMarket().getId())
                .packageDate(packageCustodianEntity.getPackageDate())
                .eventTime(LocalDateTime.now())
                .participantCode(packageCustodianEntity.getParticipantCode())
                .sequence(packageCustodianEntity.getSequence())
                .codeScb(packageCustodianEntity.getCodeScb())
                .packageNumber(packageCustodianEntity.getPackageNumber())
                .sideId(referenceSideId)
                .investorId(investorAccountEntity != null ? investorAccountEntity.getInvestor().getId() : null)
                .investorAccountId(investorAccountEntity != null ? investorAccountEntity.getId() : null)
                .custodianStatus(newPackageStatus)
                .custodianId(referenceCustodianId)
                .generatingParticipantId(referenceCustodianId)
                .ficAdministratorId(referenceFicAdministratorId)
                .rejectionReason(rejectionReasonEntity)
                .lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyDate(PropertiesContext.getClientDatetime())
                .lastModifyIp(PropertiesContext.getClientIp())
                .build();

        packageCustodianHistoryRepository.save(historyEntity);
    }

    private ErrorCustodyActionOutDto buildErrorCustodyActionOutDto(SettlementEntity settlementEntity,
            String reasonError) {
        return ErrorCustodyActionOutDto.builder()
                .settlement(MapperUtil.settlementEntityToSettlementCustodyActionOutDto(settlementEntity))
                .reasonError(reasonError)
                .build();
    }

    private BusinessRuleEnum resolveCodeBusinessRule(CustodyActionEnum custodyActionEnum) {
        return switch (custodyActionEnum) {
            case PREMATCH -> BusinessRuleEnum.RULE_CUSTODIAN_PREMATCH;
            case ADMIT -> BusinessRuleEnum.RULE_CUSTODIAN_ACCEPT;
            case REJECT -> BusinessRuleEnum.RULE_CUSTODIAN_REJECT;
            default -> throw new ServiceException(ErrorCode.ACTION_NOT_FOUND, HttpStatus.NOT_FOUND);
        };
    }

    private String resolveResponseMessage(CustodyActionEnum custodyActionEnum, Boolean isValid) {
        return switch (custodyActionEnum) {
            case PREMATCH -> isValid ? MessageSuccessCustodyActionEnum.ACTION_PREMATCH_RESPONSE_SUCCESS.getMessage()
                    : MessageErrorCustodyActionEnum.ACTION_PREMATCH_RESPONSE_ERROR.getMessage();
            case ADMIT -> isValid ? MessageSuccessCustodyActionEnum.ACTION_ADMIT_RESPONSE_SUCCESS.getMessage()
                    : MessageErrorCustodyActionEnum.ACTION_ADMIT_RESPONSE_ERROR.getMessage();
            case REJECT -> isValid ? MessageSuccessCustodyActionEnum.ACTION_REJECT_RESPONSE_SUCCESS.getMessage()
                    : MessageErrorCustodyActionEnum.ACTION_REJECT_RESPONSE_ERROR.getMessage();
        };
    }

    private String buildRejectionReason(Long rejectionReasonId, String otherReason) {
        if (ObjectUtils.isEmpty(otherReason)) {
            RejectionReasonEntity rejectionReasonEntity = validateRejectionReason(rejectionReasonId);
            return rejectionReasonEntity.getReason();
        }
        return otherReason;
    }

    private StatusUpdateSettlementOutDto validateBusinessRuleBySettlement(SettlementEntity settlementEntity,
            BusinessRuleEnum businessRuleEnum) {
        StatusUpdateSettlementInDto statusUpdateSettlementInDto = StatusUpdateSettlementInDto.builder()
                .tradeId(settlementEntity.getTrade().getId())
                .sideEnum(SideEnum.fromValue(settlementEntity.getSide().getId()))
                .fraction(settlementEntity.getFraction())
                .code(businessRuleEnum)
                .build();

        return operationBusinessRuleClient.validateUpdateStatusSettlement(statusUpdateSettlementInDto);
    }

    private void sendNotificationsSuccess(List<SettlementEntity> settlementEntityList,
            NotificationCustodyActionEnum notificationCustodyActionEnum) {
        NotificationTypeEnum notificationTypeEnum = NotificationTypeEnum.INFORMATIVE;
        if (ApplicationUtils.isUserClientBackend()) {
            log.info("User is client backend, skipping notifications for custody action");
            return;
        }
        UserNuboData userNuboData = ApplicationUtils.getUserNuboData();
        String custodyCode = "";
        if (userNuboData.participantEntity() != null) {
            custodyCode = userNuboData.participantEntity().getCode();
        }

        for (SettlementEntity settlementEntity : settlementEntityList) {

            if (!ObjectUtils.isEmpty(settlementEntity.getTransferParticipant())) {
                List<ParticipantUserNuboEntity> participantUserNuboEntityList = participantUserNuboRepository
                        .findByParticipantId(settlementEntity.getTransferParticipant().getId());

                List<Long> userIds = participantUserNuboEntityList.stream()
                        .map(participantUserNuboEntity -> participantUserNuboEntity.getUserNubo().getId())
                        .toList();

                Long matchId = settlementEntity.getTrade().getMatchId();

                sendNotificationUtil.sendNotificationCustodyActions(notificationTypeEnum,
                        notificationCustodyActionEnum, custodyCode, matchId, userIds);
            }
        }
    }

    private void restoreCashAccountFromParticipantBankAccount(SettlementEntity settlementEntity) {
        ParticipantEntity participantEntity = resolveParticipantBySettlementSide(settlementEntity);

        if (participantEntity == null || participantEntity.getId() == null) {
            throw new ServiceException(ErrorCode.PARTICIPANT_NOT_FOUND, HttpStatus.NOT_FOUND);
        }

        ParticipantBankAccountEntity participantBankAccountEntity = participantBankAccountRepository
                .findFirstByParticipant_IdOrderByIdAsc(participantEntity.getId())
                .orElseThrow(() -> new ServiceException(ErrorCode.PARTICIPANT_BANK_ACCOUNT_NOT_FOUND,
                        HttpStatus.NOT_FOUND));

        String bankAccount = participantBankAccountEntity.getBankAccount();

        if (ObjectUtils.isEmpty(bankAccount)) {
            throw new ServiceException(ErrorCode.PARTICIPANT_BANK_ACCOUNT_NOT_FOUND, HttpStatus.NOT_FOUND);
        }

        try {
            settlementEntity.setCashAccount(new BigDecimal(bankAccount.trim()));
        } catch (NumberFormatException exception) {
            log.error(
                    "Participant bank account is not numeric. tradeId={}, fraction={}, sideId={}, participantId={},  bankAccount={}",
                    settlementEntity.getTrade().getId(),
                    settlementEntity.getFraction(),
                    settlementEntity.getSide().getId(),
                    participantEntity.getId(),
                    bankAccount);

            throw new ServiceException(ErrorCode.BAD_REQUEST, HttpStatus.BAD_REQUEST);
        }
    }

    private ParticipantEntity resolveParticipantBySettlementSide(SettlementEntity settlementEntity) {
        SideEnum sideEnum = SideEnum.fromValue(settlementEntity.getSide().getId());
        TradeEntity tradeEntity = settlementEntity.getTrade();
        return switch (sideEnum) {
            case BUY -> tradeEntity.getParticipantBuy();
            case SELL -> tradeEntity.getParticipantSell();
            default -> throw new ServiceException(ErrorCode.SIDE_NOT_FOUND, HttpStatus.NOT_FOUND);
        };
    }

    private void createCustodyPackageFromTransfer(SettlementEntity savedEntity) {
        PackageCustodianAutomaticInDto cmdRequest = buildPackageCustodianAutomaticRequest(savedEntity);
        PackageCustodianAutomaticInDto.PackageDto packageDto = cmdRequest.getPackages().get(0);
        PackageCustodianAutomaticInDto.DetailDto detailDto = packageDto.getDetails().get(0);

        log.info(
                "Creating custody package from transfer. tradeId={}, sideId={}, fraction={}, uniqueFractionId={}, participantId={}, custodianId={}",
                detailDto.getTradeId(), detailDto.getSideId(), detailDto.getFraction(),
                detailDto.getUniqueFractionId(), detailDto.getParticipantId(), detailDto.getCustodianId());
        try {
            PackageCustodianAutomaticOutDto response = packageCustodianCmdClient.createAutomaticPackages(cmdRequest);
            log.info(
                    "Custody package created from transfer. tradeId={}, sideId={}, fraction={}, uniqueFractionId={}, cmdStatus={}, createdPackages={}, createdDetails={}",
                    detailDto.getTradeId(), detailDto.getSideId(), detailDto.getFraction(),
                    detailDto.getUniqueFractionId(), response.getStatus(), response.getCreatedPackages(),
                    response.getCreatedDetails());
        } catch (RuntimeException ex) {
            log.error(
                    "Error creating custody package from transfer. tradeId={}, sideId={}, fraction={}, uniqueFractionId={}, message={}",
                    detailDto.getTradeId(), detailDto.getSideId(), detailDto.getFraction(),
                    detailDto.getUniqueFractionId(), ex.getMessage(), ex);
            throw ex;
        }
    }

    private PackageCustodianAutomaticInDto buildPackageCustodianAutomaticRequest(SettlementEntity settlement) {
        if (settlement == null) {
            throw new ServiceException(ErrorCode.VALIDATION_ERROR, "settlement is required");
        }
        TradeEntity tradeEntity = settlement.getTrade();
        SideEntity side = settlement.getSide();
        String sideId = side.getId();
        if (!SideEnum.BUY.getId().equals(sideId) && !SideEnum.SELL.getId().equals(sideId)) {
            throw new ServiceException(ErrorCode.VALIDATION_ERROR, "sideId must be 1 or 2");
        }

        ParticipantEntity participant = validateParticipantBySide(tradeEntity, side);
        String depositoryId = resolveDepositoryId(tradeEntity, sideId);
        Long isinNumberId = resolveIsinNumberId(tradeEntity);
        String referencePackage = resolveReferencePackage(settlement);
        Long ficAdministratorId = settlement.getFicAdministrator() == null ? null
                : settlement.getFicAdministrator().getId();
        LocalDate executionDate = LocalDate.now();
        Boolean sameDaySettlement = tradeEntity.getClearingDate() != null
                && tradeEntity.getClearingDate().isEqual(executionDate);
        BigDecimal rate = firstNonNull(settlement.getRepoAmount(), tradeEntity.getRepoRate(),
                tradeEntity.getRepurchaseRate(), ZERO_AMOUNT);

        PackageCustodianAutomaticInDto.DetailDto detail = PackageCustodianAutomaticInDto.DetailDto.builder()
                .tradeId(tradeEntity.getId())
                .sideId(sideId)
                .fraction(settlement.getFraction() == null ? null : settlement.getFraction().longValue())
                .matchDate(tradeEntity.getMatchDate())
                .uniqueFractionId(settlement.getUniqueFractionId())
                .investorId(settlement.getInvestor() == null ? null : settlement.getInvestor().getId())
                .custodianId(settlement.getCustodian() == null ? null : settlement.getCustodian().getId())
                .participantId(participant.getId())
                .ficAdministratorId(ficAdministratorId)
                .clearingDate(tradeEntity.getClearingDate())
                .returnClearingDate(tradeEntity.getReturnClearingDate())
                .fractionQuantity(settlement.getFractionQuantity())
                .price(tradeEntity.getPrice())
                .rate(rate)
                .indicateExitReturn(Boolean.TRUE.equals(tradeEntity.getExitIndicatorSettlement()))
                .referencePackage(referencePackage)
                .build();

        SecurityTitleEntity securityTitleEntity = tradeEntity.getSecurityTitle();
        PackageCustodianAutomaticInDto.PackageDto packageDto = PackageCustodianAutomaticInDto.PackageDto.builder()
                .marketId(tradeEntity.getMarket() == null ? null : tradeEntity.getMarket().getId())
                .codeSCB(toThreeDigitParticipantCode(participant.getCode()))
                .sideId(sideId)
                .investorDocumentNumber(
                        settlement.getInvestor() == null ? null : settlement.getInvestor().getDocumentNumber())
                .referencePackage(referencePackage)
                .investorId(settlement.getInvestor() == null ? null : settlement.getInvestor().getId())
                .participantId(participant.getId())
                .investorAccountId(
                        settlement.getInvestorAccount() == null ? null : settlement.getInvestorAccount().getId())
                .isinNumberId(isinNumberId)
                .securityId(securityTitleEntity == null ? null : securityTitleEntity.getId())
                .typeId(tradeEntity.getType() == null ? null : tradeEntity.getType().getId())
                .depositoryId(depositoryId)
                .clearingDate(tradeEntity.getClearingDate())
                .returnClearingDate(tradeEntity.getReturnClearingDate())
                .custodianStatusId(
                        settlement.getCustodianStatus() == null ? null : settlement.getCustodianStatus().getId())
                .custodianId(settlement.getCustodian() == null ? null : settlement.getCustodian().getId())
                .ficAdministratorId(ficAdministratorId)
                .totalFractionQuantity(settlement.getFractionQuantity())
                .averagePrice(tradeEntity.getPrice())
                .totalFractionVolume(settlement.getFractionVolume())
                .totalNetAmount(defaultAmount(settlement.getNetAmount()))
                .totalCommissionAmount(defaultAmount(settlement.getCommissionAmount()))
                .totalValTaxAmount(defaultAmount(settlement.getValTaxAmount()))
                .clearingPercentage(FULL_CLEARING_PERCENTAGE)
                .averageFractionVolume(settlement.getFractionVolume())
                .returnNetAmount(defaultAmount(tradeEntity.getTotalNetReturn()))
                .averageRate(rate)
                .details(List.of(detail))
                .build();
        validatorUtil.validateObject(packageDto);
        return PackageCustodianAutomaticInDto.builder()
                .sourceApplication(propertiesConfig.getApiName())
                .executionDate(executionDate)
                .cutType(MANUAL_CUSTODY_TRANSFER_CUT_TYPE)
                .sameDaySettlement(sameDaySettlement)
                .packages(List.of(packageDto))
                .build();
    }

    private ParticipantEntity validateParticipantBySide(TradeEntity tradeEntity, SideEntity sideEntity) {
        ParticipantEntity participantEntity = null;
        if (SideEnum.BUY.getId().equalsIgnoreCase(sideEntity.getId())) {
            participantEntity = tradeEntity.getParticipantBuy();
        }
        if (SideEnum.SELL.getId().equalsIgnoreCase(sideEntity.getId())) {
            participantEntity = tradeEntity.getParticipantSell();
        }
        return participantEntity != null ? participantEntity : ParticipantEntity.builder().id(0L).build();
    }

    private String resolveDepositoryId(TradeEntity trade, String sideId) {
        if (SideEnum.BUY.getId().equals(sideId) && trade.getDepositoryBuy() != null) {
            return trade.getDepositoryBuy().getId();
        }
        if (SideEnum.SELL.getId().equals(sideId) && trade.getDepositorySell() != null) {
            return trade.getDepositorySell().getId();
        }
        if (trade.getDepository() != null) {
            return trade.getDepository().getId();
        }
        return trade.getSecurityTitle() == null || trade.getSecurityTitle().getDepository() == null
                ? null
                : trade.getSecurityTitle().getDepository().getId();
    }

    private Long resolveIsinNumberId(TradeEntity trade) {
        SecurityTitleEntity securityTitle = trade.getSecurityTitle();

        if (securityTitle == null
                || securityTitle.getIsinNumbers() == null
                || securityTitle.getIsinNumbers().isEmpty()) {

            log.warn(
                    "ISIN number not found for tradeId={}, securityId={}",
                    trade.getId(),
                    securityTitle == null ? null : securityTitle.getId());

            return null;
        }

        IsinNumberEntity isinNumber = securityTitle.getIsinNumbers().get(0);

        log.info(
                "ISIN number resolved. tradeId={}, securityId={}, isinNumberId={}, isinNumber={}",
                trade.getId(),
                securityTitle.getId(),
                isinNumber.getId(),
                isinNumber.getIsinNumber());

        return isinNumber.getId();
    }

    private String resolveReferencePackage(SettlementEntity settlement) {
        return settlement.getReferencePackage() == null ? null : settlement.getReferencePackage().trim();
    }

    private StatusEntity findStatusById(Long statusId) {
        return batchCacheService.validateStatus(statusId)
                .orElseThrow(() -> new ServiceException(ErrorCode.STATUS_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private ParticipantEntity findParticipant(Long participantId) {
        if (participantId == null) {
            throw new ServiceException(ErrorCode.PARTICIPANT_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
        return participantRepository.findById(participantId)
                .orElseThrow(() -> new ServiceException(ErrorCode.PARTICIPANT_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private RejectionReasonEntity validateRejectionReason(Long rejectionReasonId) {
        if (rejectionReasonId == null) {
            throw new ServiceException(ErrorCode.REJECTION_REASON_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
        return rejectionReasonRepository.findById(rejectionReasonId)
                .orElseThrow(() -> new ServiceException(ErrorCode.REJECTION_REASON_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private InvestorAccountEntity findInvestorAccountById(Long investorAccountId) {
        if (investorAccountId == null) {
            throw new ServiceException(ErrorCode.INVESTOR_ACCOUNT_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
        return investorAccountRepository.findById(investorAccountId)
                .orElseThrow(() -> new ServiceException(ErrorCode.INVESTOR_ACCOUNT_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private TypeEntity findTypeEntity(Long typeId) {
        if (typeId == null) {
            throw new ServiceException(ErrorCode.TYPE_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
        return this.batchCacheService.validateType(typeId)
                .orElseThrow(() -> new ServiceException(ErrorCode.TYPE_NOT_FOUND,
                        HttpStatus.NOT_FOUND));
    }

    private BigDecimal findCashAccountByParticipant(Long participantId) {
        if (participantId == null) {
            throw new ServiceException(ErrorCode.PARTICIPANT_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
        ParticipantEntity participantEntity = participantRepository.findById(participantId)
                .orElseThrow(() -> new ServiceException(
                        ErrorCode.PARTICIPANT_NOT_FOUND,
                        HttpStatus.NOT_FOUND));

        return participantBankAccountRepository
                .findFirstByParticipant_IdOrderByIdAsc(participantEntity.getId())
                .map(account -> new BigDecimal(account.getBankAccount()))
                .orElse(BigDecimal.ZERO);
    }

    private BigDecimal defaultAmount(BigDecimal value) {
        return value == null ? ZERO_AMOUNT : value;
    }

    private String toThreeDigitParticipantCode(String participantCode) {
        if (participantCode == null || participantCode.isBlank()) {
            return null;
        }
        String trimmed = participantCode.trim();
        return trimmed.length() <= 3 ? trimmed : trimmed.substring(trimmed.length() - 3);
    }

    private BigDecimal firstNonNull(BigDecimal... values) {
        for (BigDecimal value : values) {
            if (value != null) {
                return value;
            }
        }
        return ZERO_AMOUNT;
    }

    private PackageData getPackageData(Long packageId) {
        if (packageId == null) {
            throw new ServiceException(ErrorCode.PACKAGE_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
        PackageCustodianEntity packageCustodianEntity = packageCustodianRepository.findById(packageId)
                .orElseThrow(() -> new ServiceException(ErrorCode.PACKAGE_NOT_FOUND, HttpStatus.NOT_FOUND));

        List<PackageDetailEntity> packageDetailEntityList = packageDetailRepository
                .findByPackageCustodianId(packageCustodianEntity.getId());

        if (packageDetailEntityList.isEmpty()) {
            throw new ServiceException(ErrorCode.SETTLEMENT_NOT_FOUND, HttpStatus.NOT_FOUND,
                    new RuntimeException(String.format(
                            "No fractions found in PACKAGE_DETAIL for packageId=%d", packageId)));
        }

        List<SettlementEntity> settlementEntityList = resolveSettlementsForPackageDetails(
                packageId, packageDetailEntityList);

        return new PackageData(packageCustodianEntity, packageDetailEntityList, settlementEntityList);
    }

    private RulesData getRulesData(List<SettlementEntity> settlementEntityList,
            BusinessRuleEnum targetCodeBusinessRule) {
        List<ErrorCustodyActionOutDto> errorCustodyActionOutDtoList = new ArrayList<>();
        Map<Long, StatusUpdateSettlementOutDto> mapRuleResultsBySettlement = new HashMap<>();
        for (SettlementEntity settlementEntity : settlementEntityList) {
            StatusEntity currentStatus = settlementEntity.getCustodianStatus();
            if (currentStatus == null || currentStatus.getId() == null) {
                errorCustodyActionOutDtoList.add(buildErrorCustodyActionOutDto(settlementEntity,
                        MessageErrorCustodyActionEnum.STATUS_SETTLEMENT_NOT_VALID.getMessage()));
                continue;
            }

            StatusUpdateSettlementOutDto statusUpdateSettlementOutDto = validateBusinessRuleBySettlement(
                    settlementEntity, targetCodeBusinessRule);
            if (!Boolean.TRUE.equals(statusUpdateSettlementOutDto.getIsValid())) {
                String message = statusUpdateSettlementOutDto.getDescription() != null
                        ? statusUpdateSettlementOutDto.getDescription()
                        : "Business rule validation failed";
                errorCustodyActionOutDtoList.add(buildErrorCustodyActionOutDto(settlementEntity, message));
                continue;
            }
            mapRuleResultsBySettlement.put(settlementEntity.getUniqueFractionId(), statusUpdateSettlementOutDto);
        }
        return new RulesData(errorCustodyActionOutDtoList, mapRuleResultsBySettlement);
    }

    // --------- records ---------
    private record PackageData(
            PackageCustodianEntity packageCustodianEntity,
            List<PackageDetailEntity> packageDetailEntityList,
            List<SettlementEntity> settlementEntityList) {

    }

    private record RulesData(
            List<ErrorCustodyActionOutDto> errorCustodyActionOutDtoList,
            Map<Long, StatusUpdateSettlementOutDto> mapRuleResultsBySettlement) {
    }

}

```

## src/main/java/com/nubo/operations/custody/api/service/impl/CustodyRejectBatchItemWorker.java

```java
package com.nubo.operations.custody.api.service.impl;

import com.nubo.operations.custody.api.application.properties.PropertiesConfig;
import com.nubo.operations.custody.api.application.properties.PropertiesContext;
import com.nubo.operations.custody.api.application.util.ApplicationUtils;
import com.nubo.operations.custody.api.client.operations.cmd.models.dto.response.ParticipantBankAccountOutDto;
import com.nubo.operations.custody.api.client.operations.cmd.service.OperationCmdClient;
import com.nubo.operations.custody.api.client.rules.models.dto.request.StatusUpdateSettlementInDto;
import com.nubo.operations.custody.api.client.rules.models.dto.response.StatusClientOutDto;
import com.nubo.operations.custody.api.client.rules.models.dto.response.StatusUpdateSettlementOutDto;
import com.nubo.operations.custody.api.client.rules.service.OperationBusinessRuleClient;
import com.nubo.operations.custody.api.exception.ServiceException;
import com.nubo.operations.custody.api.exception.error.ErrorCode;
import com.nubo.operations.custody.api.helpers.MapperUtil;
import com.nubo.operations.custody.api.helpers.SendNotificationUtil;
import com.nubo.operations.custody.api.models.domain.UserNuboData;
import com.nubo.operations.custody.api.models.dto.request.CustodyRejectInDto;
import com.nubo.operations.custody.api.models.dto.response.CustodyActionOutDto;
import com.nubo.operations.custody.api.models.dto.response.ErrorCustodyActionOutDto;
import com.nubo.operations.custody.api.models.entity.*;
import com.nubo.operations.custody.api.models.enums.*;
import com.nubo.operations.custody.api.repository.*;
import com.nubo.operations.custody.api.service.BatchCacheService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/** Independent custody rejection use case for the batch API. */
@Service
@RequiredArgsConstructor
public class CustodyRejectBatchItemWorker {
    private final PackageCustodianRepository packageCustodianRepository;
    private final PackageDetailRepository packageDetailRepository;
    private final PackageCustodianHistoryRepository packageCustodianHistoryRepository;
    private final RejectionReasonRepository rejectionReasonRepository;
    private final ParticipantRepository participantRepository;
    private final InvestorAccountRepository investorAccountRepository;
    private final ParticipantBankAccountRepository participantBankAccountRepository;
    private final ParticipantUserNuboRepository participantUserNuboRepository;
    private final SettlementRepository settlementRepository;
    private final OperationBusinessRuleClient operationBusinessRuleClient;
    private final OperationCmdClient operationCmdClient;
    private final BatchCacheService batchCacheService;
    private final SendNotificationUtil sendNotificationUtil;
    private final PropertiesConfig propertiesConfig;

    @Transactional
    public CustodyActionOutDto process(CustodyRejectInDto item) {
        if (item == null || item.getPackageId() == null) {
            throw new ServiceException(ErrorCode.BAD_REQUEST, HttpStatus.BAD_REQUEST);
        }
        String rejectionReason = buildRejectionReason(item.getRejectionReasonId(), item.getOtherReason());
        RejectionReasonEntity rejectionReasonEntity = findRejectionReason(item.getRejectionReasonId());
        if (!ObjectUtils.isEmpty(item.getCustodianId())) {
            participantRepository.findById(item.getCustodianId())
                    .orElseThrow(() -> new ServiceException(ErrorCode.PARTICIPANT_NOT_FOUND, HttpStatus.NOT_FOUND));
        }

        RejectPackageData data = loadPackage(item.getPackageId());
        PackageCustodianEntity packageEntity = data.packageEntity();
        SettlementEntity reference = data.settlements().get(0);
        Long custodianId = ObjectUtils.isEmpty(reference.getCustodian()) ? null : reference.getCustodian().getId();
        Long ficAdministratorId = ObjectUtils.isEmpty(reference.getFicAdministrator())
                ? null : reference.getFicAdministrator().getId();
        String sideId = reference.getSide().getId();
        // The unitary flow reads this value before Business Rules, although history uses the
        // package investor after any old-account restoration. Preserve that validation point.
        @SuppressWarnings("unused")
        Long referenceInvestorId = reference.getInvestor().getId();

        List<ErrorCustodyActionOutDto> errors = new ArrayList<>();
        Map<Long, StatusUpdateSettlementOutDto> rules = new HashMap<>();
        for (SettlementEntity settlement : data.settlements()) {
            StatusEntity currentStatus = settlement.getCustodianStatus();
            if (currentStatus == null || currentStatus.getId() == null) {
                errors.add(error(settlement, MessageErrorCustodyActionEnum.STATUS_SETTLEMENT_NOT_VALID.getMessage()));
                continue;
            }
            StatusUpdateSettlementOutDto rule = operationBusinessRuleClient.validateUpdateStatusSettlement(
                    StatusUpdateSettlementInDto.builder()
                            .tradeId(settlement.getTrade().getId())
                            .sideEnum(SideEnum.fromValue(settlement.getSide().getId()))
                            .fraction(settlement.getFraction())
                            .code(BusinessRuleEnum.RULE_CUSTODIAN_REJECT).build());
            if (!Boolean.TRUE.equals(rule.getIsValid())) {
                errors.add(error(settlement, rule.getDescription() != null
                        ? rule.getDescription() : "Business rule validation failed"));
                continue;
            }
            rules.put(settlement.getUniqueFractionId(), rule);
        }
        if (!errors.isEmpty()) {
            return CustodyActionOutDto.builder().valid(false)
                    .message(MessageErrorCustodyActionEnum.ACTION_REJECT_RESPONSE_ERROR.getMessage())
                    .successSettlements(List.of()).errorsSettlements(errors).build();
        }

        List<SettlementEntity> updated = new ArrayList<>(data.settlements().size());
        StatusEntity packageStatus = null;
        for (SettlementEntity settlement : data.settlements()) {
            StatusUpdateSettlementOutDto rule = rules.get(settlement.getUniqueFractionId());
            StatusEntity settlementStatus = resolveRuleStatus(rule.getNewStatus());
            StatusEntity custodianStatus = resolveRuleStatus(rule.getNewStatusCustodian());
            if (packageStatus == null) {
                packageStatus = custodianStatus;
            }
            if (!ObjectUtils.isEmpty(rejectionReason)) {
                settlement.setRejectionReason(rejectionReason);
                settlement.setFicAdministrator(null);
                ParticipantBankAccountOutDto cmdAccount = operationCmdClient.validateCudAccountFractionAssignment(
                        settlement.getTrade().getId(), settlement.getSide().getId());
                if (!ObjectUtils.isEmpty(packageEntity.getOldInvestorAccountId())) {
                    InvestorAccountEntity oldAccount = investorAccountRepository
                            .findById(packageEntity.getOldInvestorAccountId()).orElse(null);
                    if (oldAccount != null) {
                        settlement.setInvestorAccount(oldAccount);
                        settlement.setInvestor(oldAccount.getInvestor());
                        settlement.setCashAccount(cmdAccount.getBankAccount() != null
                                ? new BigDecimal(cmdAccount.getBankAccount()) : null);
                        packageEntity.setInvestorAccount(oldAccount);
                    }
                }
                // Preserve the unitary behavior: the local participant account supersedes the CMD value.
                restoreCashAccount(settlement);
            }
            settlement.setStatus(ObjectUtils.isEmpty(settlementStatus) ? settlement.getStatus() : settlementStatus);
            settlement.setCustodianStatus(custodianStatus);
            settlement.setLastModifyApplication(propertiesConfig.getApiName());
            settlement.setLastModifyIp(PropertiesContext.getClientIp());
            settlement.setLastModifyUser(PropertiesContext.getClientUser());
            settlement.setLastModifyDate(PropertiesContext.getClientDatetime());
            updated.add(settlementRepository.save(settlement));
        }
        updatePackageStatus(data, packageStatus, rejectionReasonEntity, sideId, custodianId,
                ficAdministratorId);
        packageEntity.setOldInvestorAccountId(null);
        packageCustodianRepository.save(packageEntity);
        notifySuccess(updated, !ObjectUtils.isEmpty(rejectionReason)
                ? NotificationCustodyActionEnum.REJECTED_CUSTODY_SUCCESS : null);
        return CustodyActionOutDto.builder().valid(true)
                .message(MessageSuccessCustodyActionEnum.ACTION_REJECT_RESPONSE_SUCCESS.getMessage())
                .successSettlements(updated.stream().map(MapperUtil::settlementEntityToSettlementCustodyActionOutDto)
                        .toList())
                .errorsSettlements(List.of()).build();
    }

    private RejectPackageData loadPackage(Long packageId) {
        PackageCustodianEntity packageEntity = packageCustodianRepository.findById(packageId)
                .orElseThrow(() -> new ServiceException(ErrorCode.PACKAGE_NOT_FOUND, HttpStatus.NOT_FOUND));
        List<PackageDetailEntity> details = packageDetailRepository.findByPackageCustodianId(packageId);
        if (details.isEmpty()) {
            throw new ServiceException(ErrorCode.SETTLEMENT_NOT_FOUND, HttpStatus.NOT_FOUND,
                    new RuntimeException(String.format("No fractions found in PACKAGE_DETAIL for packageId=%d", packageId)));
        }
        List<SettlementEntity> settlements = new ArrayList<>(details.size());
        for (PackageDetailEntity detail : details) {
            SettlementEntity settlement = settlementRepository.findByCompositeKey(detail.getTradeId(),
                    detail.getSideId(), detail.getUniqueFractionId())
                    .orElseThrow(() -> new ServiceException(ErrorCode.SETTLEMENT_NOT_FOUND, HttpStatus.NOT_FOUND,
                            String.format("Settlement not found for packageId='%d', [tradeId='%d', uniqueFractionId='%d', sideId='%s']",
                                    packageId, detail.getTradeId(), detail.getUniqueFractionId(), detail.getSideId())));
            settlements.add(settlement);
        }
        return new RejectPackageData(packageEntity, details, settlements);
    }

    private StatusEntity resolveRuleStatus(StatusClientOutDto status) {
        if (status == null || status.getId() == null) {
            return null;
        }
        // A supplied but unknown ID must not silently clear settlement or package status.
        return batchCacheService.validateStatus(status.getId())
                .orElseThrow(() -> new ServiceException(ErrorCode.STATUS_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private void updatePackageStatus(RejectPackageData data, StatusEntity newStatus,
            RejectionReasonEntity reason, String sideId, Long custodianId, Long ficAdministratorId) {
        PackageCustodianEntity packageEntity = data.packageEntity();
        packageEntity.setPackageStatus(newStatus);
        packageEntity.setLastModifyApplication(propertiesConfig.getApiName());
        packageEntity.setLastModifyIp(PropertiesContext.getClientIp());
        packageEntity.setLastModifyUser(PropertiesContext.getClientUser());
        packageEntity.setLastModifyDate(PropertiesContext.getClientDatetime());
        packageCustodianRepository.save(packageEntity);

        for (PackageDetailEntity detail : data.details()) {
            detail.setPackageStatus(newStatus);
            detail.setLastModifyApplication(propertiesConfig.getApiName());
            detail.setLastModifyIp(PropertiesContext.getClientIp());
            detail.setLastModifyUser(PropertiesContext.getClientUser());
            detail.setLastModifyDate(PropertiesContext.getClientDatetime());
            packageDetailRepository.save(detail);
        }

        // Like the unitary flow, history observes the package investor account after restoration.
        InvestorAccountEntity investorAccount = packageEntity.getInvestorAccount();
        PackageCustodianHistoryEntity history = PackageCustodianHistoryEntity.builder()
                .packageCustodianId(packageEntity.getId())
                .market(ObjectUtils.isEmpty(packageEntity.getMarket()) ? null : packageEntity.getMarket().getId())
                .packageDate(packageEntity.getPackageDate())
                .eventTime(LocalDateTime.now())
                .participantCode(packageEntity.getParticipantCode())
                .sequence(packageEntity.getSequence())
                .codeScb(packageEntity.getCodeScb())
                .packageNumber(packageEntity.getPackageNumber())
                .sideId(sideId)
                .investorId(investorAccount != null ? investorAccount.getInvestor().getId() : null)
                .investorAccountId(investorAccount != null ? investorAccount.getId() : null)
                .custodianStatus(newStatus)
                .custodianId(custodianId)
                .generatingParticipantId(custodianId)
                .ficAdministratorId(ficAdministratorId)
                .rejectionReason(reason)
                .lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyDate(PropertiesContext.getClientDatetime())
                .lastModifyIp(PropertiesContext.getClientIp())
                .build();
        // The current unitary implementation saves without existsById; keep that behavior.
        packageCustodianHistoryRepository.save(history);
    }

    private record RejectPackageData(PackageCustodianEntity packageEntity, List<PackageDetailEntity> details,
            List<SettlementEntity> settlements) { }

    private RejectionReasonEntity findRejectionReason(Long id) {
        if (id == null) {
            throw new ServiceException(ErrorCode.REJECTION_REASON_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
        return rejectionReasonRepository.findById(id)
                .orElseThrow(() -> new ServiceException(ErrorCode.REJECTION_REASON_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private String buildRejectionReason(Long id, String other) {
        return ObjectUtils.isEmpty(other) ? findRejectionReason(id).getReason() : other;
    }

    private ErrorCustodyActionOutDto error(SettlementEntity settlement, String reason) {
        return ErrorCustodyActionOutDto.builder()
                .settlement(MapperUtil.settlementEntityToSettlementCustodyActionOutDto(settlement))
                .reasonError(reason).build();
    }

    private void restoreCashAccount(SettlementEntity settlement) {
        SideEnum side = SideEnum.fromValue(settlement.getSide().getId());
        ParticipantEntity participant = switch (side) {
            case BUY -> settlement.getTrade().getParticipantBuy();
            case SELL -> settlement.getTrade().getParticipantSell();
            default -> throw new ServiceException(ErrorCode.SIDE_NOT_FOUND, HttpStatus.NOT_FOUND);
        };
        if (participant == null || participant.getId() == null) {
            throw new ServiceException(ErrorCode.PARTICIPANT_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
        ParticipantBankAccountEntity account = participantBankAccountRepository
                .findFirstByParticipant_IdOrderByIdAsc(participant.getId())
                .orElseThrow(() -> new ServiceException(ErrorCode.PARTICIPANT_BANK_ACCOUNT_NOT_FOUND,
                        HttpStatus.NOT_FOUND));
        if (ObjectUtils.isEmpty(account.getBankAccount())) {
            throw new ServiceException(ErrorCode.PARTICIPANT_BANK_ACCOUNT_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
        try {
            settlement.setCashAccount(new BigDecimal(account.getBankAccount().trim()));
        } catch (NumberFormatException exception) {
            throw new ServiceException(ErrorCode.BAD_REQUEST, HttpStatus.BAD_REQUEST);
        }
    }

    private void notifySuccess(List<SettlementEntity> settlements, NotificationCustodyActionEnum notification) {
        if (ApplicationUtils.isUserClientBackend()) {
            return;
        }
        UserNuboData userData = ApplicationUtils.getUserNuboData();
        String custodyCode = userData.participantEntity() == null ? "" : userData.participantEntity().getCode();
        for (SettlementEntity settlement : settlements) {
            if (!ObjectUtils.isEmpty(settlement.getTransferParticipant())) {
                List<Long> userIds = participantUserNuboRepository
                        .findByParticipantId(settlement.getTransferParticipant().getId()).stream()
                        .map(user -> user.getUserNubo().getId()).toList();
                sendNotificationUtil.sendNotificationCustodyActions(NotificationTypeEnum.INFORMATIVE,
                        notification, custodyCode, settlement.getTrade().getMatchId(), userIds);
            }
        }
    }
}

```

## src/main/java/com/nubo/operations/custody/api/service/impl/CustodyRejectBatchServiceImpl.java

```java
package com.nubo.operations.custody.api.service.impl;

import com.nubo.operations.custody.api.application.properties.PropertiesConfig;
import com.nubo.operations.custody.api.application.properties.PropertiesContext;
import com.nubo.operations.custody.api.exception.ClientException;
import com.nubo.operations.custody.api.exception.ServiceException;
import com.nubo.operations.custody.api.exception.error.ErrorCode;
import com.nubo.operations.custody.api.models.dto.request.BatchCustodyRejectInDto;
import com.nubo.operations.custody.api.models.dto.request.BatchPackageRejectInDto;
import com.nubo.operations.custody.api.models.dto.request.CustodyRejectInDto;
import com.nubo.operations.custody.api.models.dto.request.PackageRejectInDto;
import com.nubo.operations.custody.api.models.dto.response.BatchCustodyActionItemOutDto;
import com.nubo.operations.custody.api.models.dto.response.BatchCustodyActionOutDto;
import com.nubo.operations.custody.api.models.dto.response.CustodyActionOutDto;
import com.nubo.operations.custody.api.models.enums.VersionApiEnum;
import com.nubo.operations.custody.api.service.CustodyRejectBatchService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.function.Function;

@Service
@RequiredArgsConstructor
@Slf4j
public class CustodyRejectBatchServiceImpl implements CustodyRejectBatchService {
    private final CustodyRejectBatchItemWorker custodyRejectBatchItemWorker;
    private final PackageRejectBatchItemWorker packageRejectBatchItemWorker;
    private final PropertiesConfig propertiesConfig;

    @Override
    public BatchCustodyActionOutDto rejectBatch(BatchCustodyRejectInDto request) {
        if (request == null) {
            throw badRequest();
        }
        return process(request.getBatchId(), request.getItems(), CustodyRejectInDto::getPackageId,
                custodyRejectBatchItemWorker::process, "PERF_CUSTODY_REJECT_BATCH");
    }

    @Override
    public BatchCustodyActionOutDto rejectPackageBatch(BatchPackageRejectInDto request) {
        if (request == null) {
            throw badRequest();
        }
        return process(request.getBatchId(), request.getItems(), PackageRejectInDto::getPackageId,
                packageRejectBatchItemWorker::process, "PERF_PACKAGE_REJECT_BATCH");
    }

    private <T> BatchCustodyActionOutDto process(String batchId, List<T> items,
            Function<T, Long> packageId, Function<T, CustodyActionOutDto> worker, String metric) {
        validateVersion();
        validateRequest(batchId, items, packageId);
        long start = System.nanoTime();
        List<BatchCustodyActionItemOutDto> results = new ArrayList<>(items.size());
        int successCount = 0;
        int failureCount = 0;
        boolean technicalFailure = false;

        for (int index = 0; index < items.size(); index++) {
            T item = items.get(index);
            Long id = packageId.apply(item);
            try {
                CustodyActionOutDto result = worker.apply(item);
                boolean success = Boolean.TRUE.equals(result.getValid());
                results.add(BatchCustodyActionItemOutDto.builder().index(index).packageId(id)
                        .success(success)
                        .status(success ? BatchCustodyActionItemOutDto.Status.SUCCESS
                                : BatchCustodyActionItemOutDto.Status.FUNCTIONAL_FAILURE)
                        .result(result).build());
                if (success) {
                    successCount++;
                } else {
                    failureCount++;
                }
            } catch (ServiceException exception) {
                if (exception.getHttpStatusOrDefault().is5xxServerError()) {
                    results.add(technical(index, id, exception.getErrorCode()));
                    technicalFailure = true;
                    failureCount++;
                    break;
                }
                results.add(BatchCustodyActionItemOutDto.builder().index(index).packageId(id)
                        .success(false).status(BatchCustodyActionItemOutDto.Status.FUNCTIONAL_FAILURE)
                        .errorCode(exception.getErrorCode().getName())
                        .errorMessage(exception.getErrorCode().getMessage()).build());
                failureCount++;
            } catch (ClientException exception) {
                results.add(technical(index, id, exception.getErrorCode()));
                technicalFailure = true;
                failureCount++;
                break;
            } catch (RuntimeException exception) {
                log.error("Technical batch item failure batchId={} index={} packageId={}", batchId, index, id,
                        exception);
                results.add(technical(index, id, ErrorCode.UNEXPECTED));
                technicalFailure = true;
                failureCount++;
                break;
            }
        }

        for (int index = results.size(); index < items.size(); index++) {
            results.add(BatchCustodyActionItemOutDto.builder().index(index)
                    .packageId(packageId.apply(items.get(index))).success(false)
                    .status(BatchCustodyActionItemOutDto.Status.NOT_PROCESSED).build());
        }
        long durationMs = (System.nanoTime() - start) / 1_000_000;
        log.info("{} batchId={} itemCount={} successCount={} failureCount={} durationMs={}", metric,
                batchId, items.size(), successCount, failureCount, durationMs);
        return BatchCustodyActionOutDto.builder().batchId(batchId).total(items.size())
                .successCount(successCount).failureCount(failureCount)
                .pendingCount(items.size() - successCount - failureCount)
                .technicalFailure(technicalFailure).results(results).build();
    }

    private BatchCustodyActionItemOutDto technical(int index, Long packageId, ErrorCode code) {
        // The current item may have failed while committing; its final DB state is not asserted here.
        return BatchCustodyActionItemOutDto.builder().index(index).packageId(packageId).success(false)
                .status(BatchCustodyActionItemOutDto.Status.TECHNICAL_ERROR)
                .errorCode(code.getName()).errorMessage(code.getMessage()).build();
    }

    private <T> void validateRequest(String batchId, List<T> items, Function<T, Long> packageId) {
        if (batchId == null || batchId.isBlank() || items == null || items.isEmpty()
                || items.size() > propertiesConfig.getCustodyRejectBatchMaxSize()) {
            throw badRequest();
        }
        Set<Long> seen = new HashSet<>();
        for (T item : items) {
            if (item == null || packageId.apply(item) == null || !seen.add(packageId.apply(item))) {
                throw badRequest();
            }
        }
    }

    private void validateVersion() {
        if (VersionApiEnum.fromValue(PropertiesContext.getVersion()) != VersionApiEnum.V1) {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private ServiceException badRequest() {
        return new ServiceException(ErrorCode.BAD_REQUEST, HttpStatus.BAD_REQUEST);
    }
}

```

## src/main/java/com/nubo/operations/custody/api/service/impl/CustodyServiceImpl.java

```java
package com.nubo.operations.custody.api.service.impl;
import com.nubo.operations.custody.api.application.properties.PropertiesContext;
import com.nubo.operations.custody.api.application.util.ApplicationUtils;
import com.nubo.operations.custody.api.exception.ServiceException;
import com.nubo.operations.custody.api.exception.error.ErrorCode;
import com.nubo.operations.custody.api.helpers.MapperPageUtil;
import com.nubo.operations.custody.api.helpers.MapperUtil;
import com.nubo.operations.custody.api.models.domain.UserNuboData;
import com.nubo.operations.custody.api.models.dto.response.PageResponseOutDto;
import com.nubo.operations.custody.api.models.dto.response.SettlementByCustodyOutDto;
import com.nubo.operations.custody.api.models.entity.SettlementEntity;
import com.nubo.operations.custody.api.models.enums.UserTypeEnum;
import com.nubo.operations.custody.api.models.enums.VersionApiEnum;
import com.nubo.operations.custody.api.repository.SettlementRepository;
import com.nubo.operations.custody.api.service.CustodyService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
@Slf4j
public class CustodyServiceImpl implements CustodyService {

    private final SettlementRepository settlementRepository;

    @Override
    public PageResponseOutDto<SettlementByCustodyOutDto> findAllSettlementsByUser(
            Long tradeId, Long statusId, Long countryId, String matchDate,
            Long participantId, int page, int size, String sort, String order, boolean all) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllSettlementsByUserV1(tradeId, statusId, countryId, matchDate,
                    participantId, page, size, sort, order, all);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<SettlementByCustodyOutDto> findAllSettlementsByUserV1(
            Long tradeId, Long statusId, Long countryId, String matchDate,
            Long participantId, int page, int size, String sort, String order, boolean all) {
        log.info("Start method findAllSettlementsV1 with tradeId: {}, statusId {}, countryId {}, matchDate {} participantId: {}",
                tradeId, statusId, countryId, matchDate, participantId);

        UserNuboData userNuboData = ApplicationUtils.getUserNuboData();
        Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
        Sort sortObj = Sort.by(direction, sort != null ? sort : "trade");

        List<SettlementByCustodyOutDto> settlementOutDtoList = new ArrayList<>();

        if (all) {
            if (userNuboData.userTypeEnum() == UserTypeEnum.INTERNAL) {
                List<SettlementEntity> allResults;
                if (tradeId == null) {
                    allResults = settlementRepository.findAll(sortObj);
                } else {
                    allResults = settlementRepository.findByTradeIds(Collections.singletonList(tradeId), sortObj);
                }
                settlementOutDtoList.addAll(
                        allResults.stream().map(MapperUtil::settlementEntityToSettlementByCustodyOutDto).toList()
                );
            } else if (userNuboData.userTypeEnum() == UserTypeEnum.EXTERNAL) {
                boolean isBuyer = settlementRepository.isParticipantBuyer(List.of(tradeId), participantId);
                boolean isSeller = settlementRepository.isParticipantSeller(List.of(tradeId), participantId);

                if (isBuyer && isSeller) {
                    List<SettlementEntity> allResults = settlementRepository.findByTradeIdsAndParticipantMultipleSides(
                            List.of(tradeId), participantId, sortObj);
                    settlementOutDtoList.addAll(
                            allResults.stream().map(MapperUtil::settlementEntityToSettlementByCustodyOutDto).toList()
                    );
                } else if (isBuyer) {
                    List<SettlementEntity> allResults = settlementRepository.findByTradeIdsAndParticipantAndSide(
                            List.of(tradeId), participantId, "1", sortObj);
                    settlementOutDtoList.addAll(
                            allResults.stream().map(MapperUtil::settlementEntityToSettlementByCustodyOutDto).toList()
                    );
                } else if (isSeller) {
                    List<SettlementEntity> allResults = settlementRepository.findByTradeIdsAndParticipantAndSide(
                            List.of(tradeId), participantId, "2", sortObj);
                    settlementOutDtoList.addAll(
                            allResults.stream().map(MapperUtil::settlementEntityToSettlementByCustodyOutDto).toList()
                    );
                }
            }

            return buildPageResponse(settlementOutDtoList, 0, settlementOutDtoList.size(), settlementOutDtoList.size());
        } else {
            Pageable pageable = PageRequest.of(page, size, sortObj);

            if (userNuboData.userTypeEnum() == UserTypeEnum.INTERNAL) {
                Page<SettlementEntity> pageResult;
                if (tradeId == null) {
                    pageResult = settlementRepository.findAll(pageable);
                } else {
                    pageResult = settlementRepository.findByTradeIds(Collections.singletonList(tradeId), pageable);
                }
                settlementOutDtoList.addAll(
                        pageResult.getContent().stream().map(MapperUtil::settlementEntityToSettlementByCustodyOutDto).toList()
                );
                return MapperPageUtil.pageToPageResponseOutDto(settlementOutDtoList, pageResult);
            } else if (userNuboData.userTypeEnum() == UserTypeEnum.EXTERNAL) {
                boolean isBuyer = settlementRepository.isParticipantBuyer(List.of(tradeId), participantId);
                boolean isSeller = settlementRepository.isParticipantSeller(List.of(tradeId), participantId);

                if (isBuyer && isSeller) {
                    Page<SettlementEntity> pageResult = settlementRepository.findByTradeIdsAndParticipantMultipleSides(
                            List.of(tradeId), participantId, pageable);
                    settlementOutDtoList.addAll(
                            pageResult.getContent().stream().map(MapperUtil::settlementEntityToSettlementByCustodyOutDto).toList()
                    );
                } else if (isBuyer) {
                    Page<SettlementEntity> pageResult = settlementRepository.findByTradeIdsAndParticipantAndSide(
                            List.of(tradeId), participantId, "1", pageable);
                    settlementOutDtoList.addAll(
                            pageResult.getContent().stream().map(MapperUtil::settlementEntityToSettlementByCustodyOutDto).toList()
                    );
                } else if (isSeller) {
                    Page<SettlementEntity> pageResult = settlementRepository.findByTradeIdsAndParticipantAndSide(
                            List.of(tradeId), participantId, "2", pageable);
                    settlementOutDtoList.addAll(
                            pageResult.getContent().stream().map(MapperUtil::settlementEntityToSettlementByCustodyOutDto).toList()
                    );
                }

                Page<SettlementByCustodyOutDto> resultPage = new PageImpl<>(settlementOutDtoList, pageable, settlementOutDtoList.size());
                return MapperPageUtil.pageToPageResponseOutDto(settlementOutDtoList, resultPage);
            }
        }

        log.debug("End method findAllSettlementsV1, number of settlements found: {}", settlementOutDtoList.size());

        return buildPageResponse(settlementOutDtoList, page, size, settlementOutDtoList.size());
    }

    private PageResponseOutDto<SettlementByCustodyOutDto> buildPageResponse(
            List<SettlementByCustodyOutDto> content, int page, int size, int totalElements) {
        PageResponseOutDto<SettlementByCustodyOutDto> pageResponse = new PageResponseOutDto<>();
        pageResponse.setContent(content);
        pageResponse.setPageNumber(page);
        pageResponse.setPageSize(size);
        pageResponse.setTotalElements((long) totalElements);
        pageResponse.setTotalPages((int) Math.ceil((double) totalElements / size));

        log.info("Page response -> {}", pageResponse);
        return pageResponse;
    }

}

```

## src/main/java/com/nubo/operations/custody/api/service/impl/PackageRejectBatchItemWorker.java

```java
package com.nubo.operations.custody.api.service.impl;

import com.nubo.operations.custody.api.application.properties.PropertiesConfig;
import com.nubo.operations.custody.api.application.properties.PropertiesContext;
import com.nubo.operations.custody.api.exception.ServiceException;
import com.nubo.operations.custody.api.exception.error.ErrorCode;
import com.nubo.operations.custody.api.helpers.MapperUtil;
import com.nubo.operations.custody.api.models.dto.request.PackageRejectInDto;
import com.nubo.operations.custody.api.models.dto.response.CustodyActionOutDto;
import com.nubo.operations.custody.api.models.entity.PackageCustodianEntity;
import com.nubo.operations.custody.api.models.entity.PackageCustodianHistoryEntity;
import com.nubo.operations.custody.api.models.entity.PackageDetailEntity;
import com.nubo.operations.custody.api.models.entity.InvestorAccountEntity;
import com.nubo.operations.custody.api.models.entity.SettlementEntity;
import com.nubo.operations.custody.api.models.entity.StatusEntity;
import com.nubo.operations.custody.api.models.enums.StatusEnum;
import com.nubo.operations.custody.api.repository.SettlementRepository;
import com.nubo.operations.custody.api.repository.PackageCustodianRepository;
import com.nubo.operations.custody.api.repository.PackageDetailRepository;
import com.nubo.operations.custody.api.repository.PackageCustodianHistoryRepository;
import com.nubo.operations.custody.api.service.BatchCacheService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

/** Independent package rejection use case for the batch API. */
@Service
@RequiredArgsConstructor
public class PackageRejectBatchItemWorker {
    private final PackageCustodianRepository packageCustodianRepository;
    private final PackageDetailRepository packageDetailRepository;
    private final PackageCustodianHistoryRepository packageCustodianHistoryRepository;
    private final SettlementRepository settlementRepository;
    private final BatchCacheService batchCacheService;
    private final PropertiesConfig propertiesConfig;

    @Transactional
    public CustodyActionOutDto process(PackageRejectInDto item) {
        if (item == null || item.getPackageId() == null) {
            throw new ServiceException(ErrorCode.BAD_REQUEST, HttpStatus.BAD_REQUEST);
        }
        PackageCustodianEntity packageEntity = packageCustodianRepository.findById(item.getPackageId())
                .orElseThrow(() -> new ServiceException(ErrorCode.PACKAGE_NOT_FOUND, HttpStatus.NOT_FOUND));
        if (ObjectUtils.isEmpty(packageEntity.getPackageStatus())
                || !Objects.equals(StatusEnum.CUSTODIAN_TRANSFERRED.getId(),
                        packageEntity.getPackageStatus().getId())) {
            throw new ServiceException(ErrorCode.PACKAGE_STATUS_NOT_VALID, HttpStatus.BAD_REQUEST);
        }

        PackageRejectData data = loadDetails(packageEntity);

        LocalDate today = PropertiesContext.getClientDatetime().toLocalDate();
        for (SettlementEntity settlement : data.settlements()) {
            LocalDate clearingDate = settlement.getTrade().getClearingDate();
            if (!ObjectUtils.isEmpty(clearingDate) && clearingDate.isBefore(today)) {
                throw new ServiceException(ErrorCode.PACKAGE_ALREADY_SETTLED, HttpStatus.BAD_REQUEST,
                        new RuntimeException(String.format("Trade %d already reached clearingDate %s",
                                settlement.getTrade().getId(), clearingDate)));
            }
        }

        SettlementEntity reference = data.settlements().get(0);
        String sideId = reference.getSide().getId();
        Long custodianId = ObjectUtils.isEmpty(reference.getCustodian()) ? null : reference.getCustodian().getId();
        Long ficAdministratorId = ObjectUtils.isEmpty(reference.getFicAdministrator())
                ? null : reference.getFicAdministrator().getId();
        StatusEntity rejectedStatus = batchCacheService.validateStatus(StatusEnum.CUSTODIAN_REJECTED.getId())
                .orElseThrow(() -> new ServiceException(ErrorCode.STATUS_NOT_FOUND, HttpStatus.NOT_FOUND));
        List<SettlementEntity> updated = new ArrayList<>(data.settlements().size());
        for (SettlementEntity settlement : data.settlements()) {
            settlement.setCustodianStatus(rejectedStatus);
            settlement.setFicAdministrator(null);
            // The unitary flow intentionally leaves participantAccount unchanged.
            settlement.setLastModifyApplication(propertiesConfig.getApiName());
            settlement.setLastModifyIp(PropertiesContext.getClientIp());
            settlement.setLastModifyUser(PropertiesContext.getClientUser());
            settlement.setLastModifyDate(PropertiesContext.getClientDatetime());
            updated.add(settlementRepository.save(settlement));
        }
        updatePackageStatus(data, rejectedStatus, sideId, custodianId, ficAdministratorId);
        return CustodyActionOutDto.builder().valid(true).message("Paquete rechazado")
                .successSettlements(updated.stream().map(MapperUtil::settlementEntityToSettlementCustodyActionOutDto)
                        .toList())
                .errorsSettlements(List.of()).build();
    }

    private PackageRejectData loadDetails(PackageCustodianEntity packageEntity) {
        Long packageId = packageEntity.getId();
        List<PackageDetailEntity> details = packageDetailRepository.findByPackageCustodianId(packageId);
        if (details.isEmpty()) {
            throw new ServiceException(ErrorCode.SETTLEMENT_NOT_FOUND, HttpStatus.NOT_FOUND,
                    new RuntimeException(String.format("No fractions found in PACKAGE_DETAIL for packageId=%d", packageId)));
        }
        List<SettlementEntity> settlements = new ArrayList<>(details.size());
        for (PackageDetailEntity detail : details) {
            SettlementEntity settlement = settlementRepository.findByCompositeKey(detail.getTradeId(),
                    detail.getSideId(), detail.getUniqueFractionId())
                    .orElseThrow(() -> new ServiceException(ErrorCode.SETTLEMENT_NOT_FOUND, HttpStatus.NOT_FOUND,
                            String.format("Settlement not found for packageId='%d', [tradeId='%d', uniqueFractionId='%d', sideId='%s']",
                                    packageId, detail.getTradeId(), detail.getUniqueFractionId(), detail.getSideId())));
            settlements.add(settlement);
        }
        return new PackageRejectData(packageEntity, details, settlements);
    }

    private void updatePackageStatus(PackageRejectData data, StatusEntity status,
            String sideId, Long custodianId, Long ficAdministratorId) {
        PackageCustodianEntity packageEntity = data.packageEntity();
        packageEntity.setPackageStatus(status);
        packageEntity.setLastModifyApplication(propertiesConfig.getApiName());
        packageEntity.setLastModifyIp(PropertiesContext.getClientIp());
        packageEntity.setLastModifyUser(PropertiesContext.getClientUser());
        packageEntity.setLastModifyDate(PropertiesContext.getClientDatetime());
        packageCustodianRepository.save(packageEntity);

        for (PackageDetailEntity detail : data.details()) {
            detail.setPackageStatus(status);
            detail.setLastModifyApplication(propertiesConfig.getApiName());
            detail.setLastModifyIp(PropertiesContext.getClientIp());
            detail.setLastModifyUser(PropertiesContext.getClientUser());
            detail.setLastModifyDate(PropertiesContext.getClientDatetime());
            packageDetailRepository.save(detail);
        }

        InvestorAccountEntity investorAccount = packageEntity.getInvestorAccount();
        PackageCustodianHistoryEntity history = PackageCustodianHistoryEntity.builder()
                .packageCustodianId(packageEntity.getId())
                .market(ObjectUtils.isEmpty(packageEntity.getMarket()) ? null : packageEntity.getMarket().getId())
                .packageDate(packageEntity.getPackageDate())
                .eventTime(LocalDateTime.now())
                .participantCode(packageEntity.getParticipantCode())
                .sequence(packageEntity.getSequence())
                .codeScb(packageEntity.getCodeScb())
                .packageNumber(packageEntity.getPackageNumber())
                .sideId(sideId)
                .investorId(investorAccount != null ? investorAccount.getInvestor().getId() : null)
                .investorAccountId(investorAccount != null ? investorAccount.getId() : null)
                .custodianStatus(status)
                .custodianId(custodianId)
                .generatingParticipantId(custodianId)
                .ficAdministratorId(ficAdministratorId)
                .rejectionReason(null)
                .lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyDate(PropertiesContext.getClientDatetime())
                .lastModifyIp(PropertiesContext.getClientIp())
                .build();
        // The current unitary implementation saves without checking existsById.
        packageCustodianHistoryRepository.save(history);
    }

    private record PackageRejectData(PackageCustodianEntity packageEntity, List<PackageDetailEntity> details,
            List<SettlementEntity> settlements) { }
}

```

## src/main/java/com/nubo/operations/custody/api/service/impl/RejectionReasonServiceImpl.java

```java
package com.nubo.operations.custody.api.service.impl;

import com.nubo.operations.custody.api.application.properties.PropertiesContext;
import com.nubo.operations.custody.api.exception.ServiceException;
import com.nubo.operations.custody.api.exception.error.ErrorCode;
import com.nubo.operations.custody.api.helpers.MapperUtil;
import com.nubo.operations.custody.api.models.dto.response.RejectionReasonOutDto;
import com.nubo.operations.custody.api.models.enums.RejectionReasonEnum;
import com.nubo.operations.custody.api.models.enums.VersionApiEnum;
import com.nubo.operations.custody.api.repository.RejectionReasonRepository;
import com.nubo.operations.custody.api.service.RejectionReasonService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
@Slf4j
public class RejectionReasonServiceImpl implements RejectionReasonService {

    private final RejectionReasonRepository rejectionReasonRepository;

    public List<RejectionReasonOutDto> findByCategoryRejectedCustody() {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findByCategoryRejectedCustodyV1();
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<RejectionReasonOutDto> findByCategoryRejectedCustodyV1() {
        log.info("Start method findByCategoryRejectedCustodyV1");

        String category = RejectionReasonEnum.REJECTED_CUSTODY.getCategory();

        List<RejectionReasonOutDto> rejectionReasonOutDto = rejectionReasonRepository.findByCategory(category).stream()
                .map(MapperUtil::rejectionReasonEntityToRejectionReasonOutDto)
                .toList();

        log.info("End method findByCategoryRejectedCustodyV1, rejectionReasonOutDto -> {}", rejectionReasonOutDto.size());

        return rejectionReasonOutDto;
    }

}

```

## src/main/java/com/nubo/operations/custody/api/web/controller/CustodyActionsRestController.java

```java
package com.nubo.operations.custody.api.web.controller;

import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nubo.operations.custody.api.models.dto.request.CustodyAdmitInDto;
import com.nubo.operations.custody.api.models.dto.request.BatchCustodyRejectInDto;
import com.nubo.operations.custody.api.models.dto.request.BatchPackageRejectInDto;
import com.nubo.operations.custody.api.models.dto.request.CustodyPrematchInDto;
import com.nubo.operations.custody.api.models.dto.request.CustodyRejectInDto;
import com.nubo.operations.custody.api.models.dto.request.CustodyTransferInDto;
import com.nubo.operations.custody.api.models.dto.request.PackageRejectInDto;
import com.nubo.operations.custody.api.models.dto.response.CustodyActionOutDto;
import com.nubo.operations.custody.api.models.dto.response.BatchCustodyActionOutDto;
import com.nubo.operations.custody.api.models.dto.response.CustodyTransferResultOutDto;
import com.nubo.operations.custody.api.service.CustodyActionsService;
import com.nubo.operations.custody.api.service.CustodyRejectBatchService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@Tag(name = "Custody Actions")
@RestController
@RequestMapping("/{version}/custody-actions")
@RequiredArgsConstructor
public class CustodyActionsRestController {

    private final CustodyActionsService custodyActionsService;
    private final CustodyRejectBatchService custodyRejectBatchService;

    @Operation(summary = "Prematch custody", description = "Move custody status to PREMATCH for selected package")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = CustodyActionOutDto[].class)))})
    @PostMapping(value = "/prematch", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<CustodyActionOutDto>> preMatch(
            @Valid @RequestBody List<CustodyPrematchInDto> custodyPrematchInDtoList) {
        return ResponseEntity.ok(custodyActionsService.preMatch(custodyPrematchInDtoList));
    }

    @Operation(summary = "Admit custody", description = "Move custody status to ADMITTED for selected package, optionally changing the securities account")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = CustodyActionOutDto[].class)))})
    @PostMapping(value = "/admit", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<CustodyActionOutDto>> admit(
            @Valid @RequestBody List<CustodyAdmitInDto> custodyAdmitInDtoList) {
        return ResponseEntity.ok(custodyActionsService.admit(custodyAdmitInDtoList));
    }

    @Operation(summary = "Reject custody", description = "Move custody status to REJECTED for selected package")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = CustodyActionOutDto[].class)))})
    @PostMapping(value = "/reject", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<CustodyActionOutDto>> reject(
            @Valid @RequestBody List<CustodyRejectInDto> custodyRejectInDtoList) {
        return ResponseEntity.ok(custodyActionsService.reject(custodyRejectInDtoList));
    }

    @Operation(summary = "Reject package", description = "Reject an entire package before custodian admission (HU RTBOF-14113)")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = CustodyActionOutDto.class)))})
    @PostMapping(value = "/package/reject", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<CustodyActionOutDto> rejectPackage(
            @Valid @RequestBody PackageRejectInDto packageRejectInDto) {
        return ResponseEntity.ok(custodyActionsService.rejectPackage(packageRejectInDto));
    }

    @Operation(summary = "Reject custody packages in batch", description = "Sequential items with one transaction per package; technical failure stops the batch")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "All items processed", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = BatchCustodyActionOutDto.class))),
            @ApiResponse(responseCode = "502", description = "Technical failure; response identifies confirmed and pending items", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = BatchCustodyActionOutDto.class))) })
    @PostMapping(value = "/reject/batch", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<BatchCustodyActionOutDto> rejectBatch(
            @Valid @RequestBody BatchCustodyRejectInDto request) {
        BatchCustodyActionOutDto response = custodyRejectBatchService.rejectBatch(request);
        return ResponseEntity.status(response.isTechnicalFailure() ? 502 : 200).body(response);
    }

    @Operation(summary = "Reject transferred packages in batch", description = "Sequential items with one transaction per package; technical failure stops the batch")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "All items processed", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = BatchCustodyActionOutDto.class))),
            @ApiResponse(responseCode = "502", description = "Technical failure; response identifies confirmed and pending items", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = BatchCustodyActionOutDto.class))) })
    @PostMapping(value = "/package/reject/batch", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<BatchCustodyActionOutDto> rejectPackageBatch(
            @Valid @RequestBody BatchPackageRejectInDto request) {
        BatchCustodyActionOutDto response = custodyRejectBatchService.rejectPackageBatch(request);
        return ResponseEntity.status(response.isTechnicalFailure() ? 502 : 200).body(response);
    }

    @Operation(summary = "Transfer custody", description = "Transfer custody")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = CustodyTransferResultOutDto[].class))) })
    @PostMapping("/transfer")
    public ResponseEntity<List<CustodyTransferResultOutDto>> updateSettlementStatusTransfer(
            @Valid @RequestBody List<CustodyTransferInDto> custodyTransferInDtoList,
            @RequestParam(required = false) Long participantId) {
        return ResponseEntity.ok(
                custodyActionsService.transfer(custodyTransferInDtoList, participantId));
    }

}

```

## src/main/java/com/nubo/operations/custody/api/web/controller/CustodyRestController.java

```java
package com.nubo.operations.custody.api.web.controller;

import com.nubo.operations.custody.api.models.dto.response.PageResponseOutDto;
import com.nubo.operations.custody.api.models.dto.response.SettlementByCustodyOutDto;
import com.nubo.operations.custody.api.service.CustodyService;
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
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "Custody")
@RestController
@RequestMapping("/{version}/custody")
@RequiredArgsConstructor
public class CustodyRestController {

    private final CustodyService custodyService;


    @Operation(summary = "Find all Custody", description = "Find all Custody By User")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = SettlementByCustodyOutDto[].class)))})
    @GetMapping("/search")
    public ResponseEntity<PageResponseOutDto<SettlementByCustodyOutDto>> findAllSettlement(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "trade.id") String sort,
            @RequestParam(defaultValue = "asc") String order,
            @RequestParam(defaultValue = "false") boolean all,
            @Parameter(example = "1")
            @RequestParam(required = false) Long tradeId,
            @Parameter(example = "1")
            @RequestParam(required = false) Long statusId,
            @Parameter(example = "1")
            @RequestParam(required = false) Long countryId,
            @Parameter(example = "2026-01-16", description = " (yyyy-MM-dd)")
            @RequestParam(required = false) String matchDate,
            @Parameter(example = "1")
            @RequestParam(required = false) Long participantId) {

        PageResponseOutDto<SettlementByCustodyOutDto> custodians = custodyService
                .findAllSettlementsByUser(tradeId, statusId, countryId, matchDate,
                        participantId, page, size, sort, order, all);
        return ResponseEntity.ok(custodians);
    }


}

```

## src/main/java/com/nubo/operations/custody/api/web/controller/RejectionReasonRestController.java

```java
package com.nubo.operations.custody.api.web.controller;

import com.nubo.operations.custody.api.models.dto.response.RejectionReasonOutDto;
import com.nubo.operations.custody.api.service.RejectionReasonService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Tag(name = "Rejection Reason")
@RestController
@RequestMapping("/{version}/rejection-reason")
@RequiredArgsConstructor
public class RejectionReasonRestController {

    private final RejectionReasonService rejectionReasonService;

    @Operation(summary = "Find Rejection Reason by category rejected custody",
            description = "Find Rejection Reason by category rejected custody")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = RejectionReasonOutDto[].class)))})
    @GetMapping("/category/rejected-custody")
    public ResponseEntity<List<RejectionReasonOutDto>> findByCategoryRejectedCustody() {
        List<RejectionReasonOutDto> countries = rejectionReasonService.findByCategoryRejectedCustody();
        return ResponseEntity.ok(countries);
    }

}

```
