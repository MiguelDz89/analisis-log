# nbo-png-operaciones-back

Código Java de producción y configuraciones, sin tests. Cada sección contiene el archivo original completo y su ruta. Captura: 28/10/2026.

## Índice

1. `.mvn/wrapper/maven-wrapper.properties`
2. `mvnw`
3. `mvnw.cmd`
4. `pom.xml`
5. `src/main/java/com/nubo/operations/api/OperationsApiApplication.java`
6. `src/main/java/com/nubo/operations/api/application/annotations/ValidBigDecimal.java`
7. `src/main/java/com/nubo/operations/api/application/config/KafkaProducerConfig.java`
8. `src/main/java/com/nubo/operations/api/application/config/SwaggerConfig.java`
9. `src/main/java/com/nubo/operations/api/application/config/ValidBigDecimalConfig.java`
10. `src/main/java/com/nubo/operations/api/application/config/WebConfig.java`
11. `src/main/java/com/nubo/operations/api/application/context/GlobalContext.java`
12. `src/main/java/com/nubo/operations/api/application/database/NamingStrategyConfig.java`
13. `src/main/java/com/nubo/operations/api/application/database/UpperNamingConfig.java`
14. `src/main/java/com/nubo/operations/api/application/filters/GlobalFilter.java`
15. `src/main/java/com/nubo/operations/api/application/interceptors/GlobalInterceptor.java`
16. `src/main/java/com/nubo/operations/api/application/properties/PropertiesConfig.java`
17. `src/main/java/com/nubo/operations/api/application/properties/PropertiesContext.java`
18. `src/main/java/com/nubo/operations/api/application/util/ApplicationUtils.java`
19. `src/main/java/com/nubo/operations/api/application/util/RestClientUtils.java`
20. `src/main/java/com/nubo/operations/api/client/kafka/producer/dto/response/FractionEventKafkaOutDto.java`
21. `src/main/java/com/nubo/operations/api/client/kafka/producer/service/KafkaNuboAdapter.java`
22. `src/main/java/com/nubo/operations/api/client/operation/calculation/models/dto/request/SettleAccountsInDto.java`
23. `src/main/java/com/nubo/operations/api/client/operation/calculation/models/dto/response/SettleAccountsOutDto.java`
24. `src/main/java/com/nubo/operations/api/client/operation/calculation/service/OperationCalculationClient.java`
25. `src/main/java/com/nubo/operations/api/client/operation/calculation/service/impl/OperationCalculationClientImpl.java`
26. `src/main/java/com/nubo/operations/api/client/operation/fractionation/models/dto/request/AssignmentInDto.java`
27. `src/main/java/com/nubo/operations/api/client/operation/fractionation/models/dto/request/FractionInDto.java`
28. `src/main/java/com/nubo/operations/api/client/operation/fractionation/service/OperationFractionationClient.java`
29. `src/main/java/com/nubo/operations/api/client/operation/fractionation/service/impl/OperationFractionationClientImpl.java`
30. `src/main/java/com/nubo/operations/api/client/operation/rules/models/dto/request/FractionRuleInDto.java`
31. `src/main/java/com/nubo/operations/api/client/operation/rules/models/dto/request/StatusAllowedOptionsInDto.java`
32. `src/main/java/com/nubo/operations/api/client/operation/rules/models/dto/response/OperationBusinessRuleOutDto.java`
33. `src/main/java/com/nubo/operations/api/client/operation/rules/models/dto/response/StatusAllowedOptionsOutDto.java`
34. `src/main/java/com/nubo/operations/api/client/operation/rules/models/dto/response/StatusClientOutDto.java`
35. `src/main/java/com/nubo/operations/api/client/operation/rules/service/OperationBusinessRuleClient.java`
36. `src/main/java/com/nubo/operations/api/client/operation/rules/service/impl/OperationBusinessRuleClientImpl.java`
37. `src/main/java/com/nubo/operations/api/exception/ClientException.java`
38. `src/main/java/com/nubo/operations/api/exception/ServiceException.java`
39. `src/main/java/com/nubo/operations/api/exception/error/ErrorCode.java`
40. `src/main/java/com/nubo/operations/api/exception/error/ErrorResponse.java`
41. `src/main/java/com/nubo/operations/api/exception/error/ErrorValidation.java`
42. `src/main/java/com/nubo/operations/api/exception/handler/GlobalExceptionHandler.java`
43. `src/main/java/com/nubo/operations/api/helpers/DateUtil.java`
44. `src/main/java/com/nubo/operations/api/helpers/MapperPageUtil.java`
45. `src/main/java/com/nubo/operations/api/helpers/MapperTradeDynamicSearch.java`
46. `src/main/java/com/nubo/operations/api/helpers/MapperUtil.java`
47. `src/main/java/com/nubo/operations/api/helpers/QueryFilterBuilder.java`
48. `src/main/java/com/nubo/operations/api/helpers/RedisMapperUtils.java`
49. `src/main/java/com/nubo/operations/api/helpers/SettlementDynamicSearchMapper.java`
50. `src/main/java/com/nubo/operations/api/helpers/SettlementRedisMapper.java`
51. `src/main/java/com/nubo/operations/api/helpers/SettlementSpecificationBuilder.java`
52. `src/main/java/com/nubo/operations/api/helpers/SettlementSpecificationFactory.java`
53. `src/main/java/com/nubo/operations/api/helpers/TradeRedisMapper.java`
54. `src/main/java/com/nubo/operations/api/helpers/TradeSpecificationBuilder.java`
55. `src/main/java/com/nubo/operations/api/helpers/TradeSpecificationFactory.java`
56. `src/main/java/com/nubo/operations/api/models/domain/TradeParams.java`
57. `src/main/java/com/nubo/operations/api/models/dto/request/CalculationInDto.java`
58. `src/main/java/com/nubo/operations/api/models/dto/request/CalculationIvaInDto.java`
59. `src/main/java/com/nubo/operations/api/models/dto/request/SettlementCommissionUpdateInDto.java`
60. `src/main/java/com/nubo/operations/api/models/dto/request/SettlementInDto.java`
61. `src/main/java/com/nubo/operations/api/models/dto/request/SettlementUpdateInDto.java`
62. `src/main/java/com/nubo/operations/api/models/dto/request/TradeEquityInDto.java`
63. `src/main/java/com/nubo/operations/api/models/dto/request/TradeEquityUpdateInDto.java`
64. `src/main/java/com/nubo/operations/api/models/dto/request/TradeInDto.java`
65. `src/main/java/com/nubo/operations/api/models/dto/request/TradeUpdateInDto.java`
66. `src/main/java/com/nubo/operations/api/models/dto/response/AllTradeOutDto.java`
67. `src/main/java/com/nubo/operations/api/models/dto/response/CalculationOutDto.java`
68. `src/main/java/com/nubo/operations/api/models/dto/response/CalculationTotalAmountOutDto.java`
69. `src/main/java/com/nubo/operations/api/models/dto/response/CfiOutDto.java`
70. `src/main/java/com/nubo/operations/api/models/dto/response/CityOutDto.java`
71. `src/main/java/com/nubo/operations/api/models/dto/response/ClassOutDto.java`
72. `src/main/java/com/nubo/operations/api/models/dto/response/CountryOutDto.java`
73. `src/main/java/com/nubo/operations/api/models/dto/response/CurrencyOutDto.java`
74. `src/main/java/com/nubo/operations/api/models/dto/response/DepartmentOutDto.java`
75. `src/main/java/com/nubo/operations/api/models/dto/response/DepositoryOutDto.java`
76. `src/main/java/com/nubo/operations/api/models/dto/response/FractionAccountOutDto.java`
77. `src/main/java/com/nubo/operations/api/models/dto/response/GicsOutDto.java`
78. `src/main/java/com/nubo/operations/api/models/dto/response/IdentificationTypeOutDto.java`
79. `src/main/java/com/nubo/operations/api/models/dto/response/InvestorAccountOutDto.java`
80. `src/main/java/com/nubo/operations/api/models/dto/response/InvestorOutDto.java`
81. `src/main/java/com/nubo/operations/api/models/dto/response/MarketOutDto.java`
82. `src/main/java/com/nubo/operations/api/models/dto/response/PageResponseOutDto.java`
83. `src/main/java/com/nubo/operations/api/models/dto/response/ParticipantAccountOutDto.java`
84. `src/main/java/com/nubo/operations/api/models/dto/response/ParticipantOutDto.java`
85. `src/main/java/com/nubo/operations/api/models/dto/response/SecurityTitleOutDto.java`
86. `src/main/java/com/nubo/operations/api/models/dto/response/SettlementOutDto.java`
87. `src/main/java/com/nubo/operations/api/models/dto/response/SettlementStatusHistoryOutDto.java`
88. `src/main/java/com/nubo/operations/api/models/dto/response/SideOutDto.java`
89. `src/main/java/com/nubo/operations/api/models/dto/response/StatusOutDto.java`
90. `src/main/java/com/nubo/operations/api/models/dto/response/TaxStatusOutDto.java`
91. `src/main/java/com/nubo/operations/api/models/dto/response/TradeEquityOutDto.java`
92. `src/main/java/com/nubo/operations/api/models/dto/response/TradeMatchHistoryOutDto.java`
93. `src/main/java/com/nubo/operations/api/models/dto/response/TradeOutDto.java`
94. `src/main/java/com/nubo/operations/api/models/dto/response/TradingSessionOutDto.java`
95. `src/main/java/com/nubo/operations/api/models/dto/response/TradingSystemOutDto.java`
96. `src/main/java/com/nubo/operations/api/models/dto/response/TypeOutDto.java`
97. `src/main/java/com/nubo/operations/api/models/entity/CfiEntity.java`
98. `src/main/java/com/nubo/operations/api/models/entity/CityEntity.java`
99. `src/main/java/com/nubo/operations/api/models/entity/ClassEntity.java`
100. `src/main/java/com/nubo/operations/api/models/entity/CountryEntity.java`
101. `src/main/java/com/nubo/operations/api/models/entity/CurrencyEntity.java`
102. `src/main/java/com/nubo/operations/api/models/entity/DepartmentEntity.java`
103. `src/main/java/com/nubo/operations/api/models/entity/DepositoryEntity.java`
104. `src/main/java/com/nubo/operations/api/models/entity/GicsEntity.java`
105. `src/main/java/com/nubo/operations/api/models/entity/HolidayEntity.java`
106. `src/main/java/com/nubo/operations/api/models/entity/IdentificationTypeEntity.java`
107. `src/main/java/com/nubo/operations/api/models/entity/InvestorAccountEntity.java`
108. `src/main/java/com/nubo/operations/api/models/entity/InvestorEntity.java`
109. `src/main/java/com/nubo/operations/api/models/entity/IssuerEntity.java`
110. `src/main/java/com/nubo/operations/api/models/entity/MarketEntity.java`
111. `src/main/java/com/nubo/operations/api/models/entity/ParticipantAccountEntity.java`
112. `src/main/java/com/nubo/operations/api/models/entity/ParticipantEntity.java`
113. `src/main/java/com/nubo/operations/api/models/entity/SecurityTitleEntity.java`
114. `src/main/java/com/nubo/operations/api/models/entity/SettlementEntity.java`
115. `src/main/java/com/nubo/operations/api/models/entity/SettlementKey.java`
116. `src/main/java/com/nubo/operations/api/models/entity/SettlementStatusHistoryEntity.java`
117. `src/main/java/com/nubo/operations/api/models/entity/SettlementStatusHistoryKey.java`
118. `src/main/java/com/nubo/operations/api/models/entity/SideEntity.java`
119. `src/main/java/com/nubo/operations/api/models/entity/StatusEntity.java`
120. `src/main/java/com/nubo/operations/api/models/entity/TaxStatusEntity.java`
121. `src/main/java/com/nubo/operations/api/models/entity/TaxesEntity.java`
122. `src/main/java/com/nubo/operations/api/models/entity/TradeEntity.java`
123. `src/main/java/com/nubo/operations/api/models/entity/TradeEquityEntity.java`
124. `src/main/java/com/nubo/operations/api/models/entity/TradingSessionEntity.java`
125. `src/main/java/com/nubo/operations/api/models/entity/TradingSystemEntity.java`
126. `src/main/java/com/nubo/operations/api/models/entity/TypeEntity.java`
127. `src/main/java/com/nubo/operations/api/models/entity/UserNuboEntity.java`
128. `src/main/java/com/nubo/operations/api/models/enums/BusinessRuleEnum.java`
129. `src/main/java/com/nubo/operations/api/models/enums/PropertiesEnum.java`
130. `src/main/java/com/nubo/operations/api/models/enums/SearchOperationEnum.java`
131. `src/main/java/com/nubo/operations/api/models/enums/SideEnum.java`
132. `src/main/java/com/nubo/operations/api/models/enums/StatusEnum.java`
133. `src/main/java/com/nubo/operations/api/models/enums/TaxesEnum.java`
134. `src/main/java/com/nubo/operations/api/models/enums/TypeEnum.java`
135. `src/main/java/com/nubo/operations/api/models/enums/VersionApiEnum.java`
136. `src/main/java/com/nubo/operations/api/repository/CountryRepository.java`
137. `src/main/java/com/nubo/operations/api/repository/CurrencyRepository.java`
138. `src/main/java/com/nubo/operations/api/repository/DepositoryRepository.java`
139. `src/main/java/com/nubo/operations/api/repository/HolidayRepository.java`
140. `src/main/java/com/nubo/operations/api/repository/InvestorAccountRepository.java`
141. `src/main/java/com/nubo/operations/api/repository/InvestorRepository.java`
142. `src/main/java/com/nubo/operations/api/repository/MarketRepository.java`
143. `src/main/java/com/nubo/operations/api/repository/ParticipantAccountRepository.java`
144. `src/main/java/com/nubo/operations/api/repository/ParticipantRepository.java`
145. `src/main/java/com/nubo/operations/api/repository/SecurityTitleRepository.java`
146. `src/main/java/com/nubo/operations/api/repository/SettlementRepository.java`
147. `src/main/java/com/nubo/operations/api/repository/SettlementStatusHistoryRepository.java`
148. `src/main/java/com/nubo/operations/api/repository/SideRepository.java`
149. `src/main/java/com/nubo/operations/api/repository/StatusRepository.java`
150. `src/main/java/com/nubo/operations/api/repository/TaxesRepository.java`
151. `src/main/java/com/nubo/operations/api/repository/TradeEquityRepository.java`
152. `src/main/java/com/nubo/operations/api/repository/TradeRepository.java`
153. `src/main/java/com/nubo/operations/api/repository/TradingSessionRepository.java`
154. `src/main/java/com/nubo/operations/api/repository/TradingSystemRepository.java`
155. `src/main/java/com/nubo/operations/api/repository/TypeRepository.java`
156. `src/main/java/com/nubo/operations/api/repository/UserNuboRepository.java`
157. `src/main/java/com/nubo/operations/api/service/AllTradeService.java`
158. `src/main/java/com/nubo/operations/api/service/CalculationCountedService.java`
159. `src/main/java/com/nubo/operations/api/service/FractionationCountedService.java`
160. `src/main/java/com/nubo/operations/api/service/SettlementRedisService.java`
161. `src/main/java/com/nubo/operations/api/service/SettlementService.java`
162. `src/main/java/com/nubo/operations/api/service/TradeEquityService.java`
163. `src/main/java/com/nubo/operations/api/service/TradeRedisService.java`
164. `src/main/java/com/nubo/operations/api/service/TradeService.java`
165. `src/main/java/com/nubo/operations/api/service/TransformationCorrectionService.java`
166. `src/main/java/com/nubo/operations/api/service/ValidateCountedFractionService.java`
167. `src/main/java/com/nubo/operations/api/service/ValidateCountedOperationService.java`
168. `src/main/java/com/nubo/operations/api/service/impl/AllTradeServiceImpl.java`
169. `src/main/java/com/nubo/operations/api/service/impl/CalculationCountedServiceImpl.java`
170. `src/main/java/com/nubo/operations/api/service/impl/FractionationCountedServiceImpl.java`
171. `src/main/java/com/nubo/operations/api/service/impl/SettlementRedisServiceImpl.java`
172. `src/main/java/com/nubo/operations/api/service/impl/SettlementServiceImpl.java`
173. `src/main/java/com/nubo/operations/api/service/impl/TradeEquityServiceImpl.java`
174. `src/main/java/com/nubo/operations/api/service/impl/TradeRedisServiceImpl.java`
175. `src/main/java/com/nubo/operations/api/service/impl/TradeServiceImpl.java`
176. `src/main/java/com/nubo/operations/api/service/impl/TransformationCorrectionServiceImpl.java`
177. `src/main/java/com/nubo/operations/api/service/impl/ValidateCountedFractionServiceImpl.java`
178. `src/main/java/com/nubo/operations/api/service/impl/ValidateCountedOperationServiceImpl.java`
179. `src/main/java/com/nubo/operations/api/web/controller/AllTradeRestController.java`
180. `src/main/java/com/nubo/operations/api/web/controller/CalculationCountedRestController.java`
181. `src/main/java/com/nubo/operations/api/web/controller/FractionationCountedRestController.java`
182. `src/main/java/com/nubo/operations/api/web/controller/SettlementRestController.java`
183. `src/main/java/com/nubo/operations/api/web/controller/TradeEquityRestController.java`
184. `src/main/java/com/nubo/operations/api/web/controller/TradeRestController.java`
185. `src/main/java/com/nubo/operations/api/web/controller/ValidateCountedFractionRestController.java`
186. `src/main/java/com/nubo/operations/api/web/controller/ValidateCountedOperationRestController.java`
187. `src/main/resources/application-dev.yml`
188. `src/main/resources/application-local.yml`
189. `src/main/resources/application-prod.yml`
190. `src/main/resources/application-qa.yml`
191. `src/main/resources/application-uat.yml`
192. `src/main/resources/application.yml`
193. `src/main/resources/banner.txt`
194. `src/main/resources/log/JsonEventLayout_error.json`
195. `src/main/resources/log/JsonEventLayout_info.json`
196. `src/main/resources/log/JsonEventLayout_trace.json`
197. `src/main/resources/log/log4j2-prod.properties`
198. `src/main/resources/log/log4j2.properties`

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
    <groupId>com.nubo.operations.api</groupId>
    <artifactId>operations-api</artifactId>
    <version>0.177.5</version>
    <name>${project.artifactId}</name>
    <description>Operations Api</description>

    <properties>
        <java.version>17</java.version>
        <spring.port>8080</spring.port>
        <test.skip>false</test.skip>
        <datasource.url.application.name>ApplicationName=${project.artifactId}</datasource.url.application.name>
        <hikari.pool.name>${project.artifactId}-pool</hikari.pool.name>
        <dynamic.hikari.pool.name>${project.artifactId}-pool</dynamic.hikari.pool.name>
        <!-- Security vulnerability fixes -->
        <org.json.version>20231013</org.json.version>
        <nimbus-jose-jwt.version>10.0.2</nimbus-jose-jwt.version>
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
        <!-- Official RediSearch Java client -->
        <dependency>
            <groupId>com.redislabs</groupId>
            <artifactId>jredisearch</artifactId>
            <version>2.2.0</version>
            <exclusions>
                <exclusion>
                    <groupId>org.json</groupId>
                    <artifactId>json</artifactId>
                </exclusion>
            </exclusions>
        </dependency>
        <!-- Jedis client for Redis -->
        <dependency>
            <groupId>redis.clients</groupId>
            <artifactId>jedis</artifactId>
            <version>3.7.1</version>
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
            <groupId>org.xmlunit</groupId>
            <artifactId>xmlunit-core</artifactId>
            <version>2.10.0</version>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>commons-io</groupId>
            <artifactId>commons-io</artifactId>
            <version>2.18.0</version>
        </dependency>
        <dependency>
			<groupId>org.apache.commons</groupId>
			<artifactId>commons-lang3</artifactId>
			<version>3.18.0</version>
		</dependency>

		<!-- Security vulnerability fixes - explicit versions after exclusions -->
        <dependency>
            <groupId>org.json</groupId>
            <artifactId>json</artifactId>
            <version>${org.json.version}</version>
        </dependency>

        <dependency>
            <groupId>com.nimbusds</groupId>
            <artifactId>nimbus-jose-jwt</artifactId>
            <version>${nimbus-jose-jwt.version}</version>
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
                                <exclude>**/OperationsApiApplication.class</exclude>
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

## src/main/java/com/nubo/operations/api/OperationsApiApplication.java

```java
package com.nubo.operations.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class OperationsApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(OperationsApiApplication.class, args);
	}

}

```

## src/main/java/com/nubo/operations/api/application/annotations/ValidBigDecimal.java

```java
package com.nubo.operations.api.application.annotations;

import com.nubo.operations.api.application.config.ValidBigDecimalConfig;
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

## src/main/java/com/nubo/operations/api/application/config/KafkaProducerConfig.java

```java
package com.nubo.operations.api.application.config;

import com.nubo.operations.api.application.properties.PropertiesConfig;
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

## src/main/java/com/nubo/operations/api/application/config/SwaggerConfig.java

```java
package com.nubo.operations.api.application.config;

import com.nubo.operations.api.exception.error.ErrorResponse;
import com.nubo.operations.api.exception.error.ErrorValidation;
import com.nubo.operations.api.models.enums.PropertiesEnum;
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

## src/main/java/com/nubo/operations/api/application/config/ValidBigDecimalConfig.java

```java
package com.nubo.operations.api.application.config;

import com.nubo.operations.api.application.annotations.ValidBigDecimal;
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

## src/main/java/com/nubo/operations/api/application/config/WebConfig.java

```java
package com.nubo.operations.api.application.config;

import com.nubo.operations.api.application.interceptors.GlobalInterceptor;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestClient;
import org.springframework.web.servlet.LocaleResolver;
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

## src/main/java/com/nubo/operations/api/application/context/GlobalContext.java

```java
package com.nubo.operations.api.application.context;

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

## src/main/java/com/nubo/operations/api/application/database/NamingStrategyConfig.java

```java
package com.nubo.operations.api.application.database;

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

## src/main/java/com/nubo/operations/api/application/database/UpperNamingConfig.java

```java
package com.nubo.operations.api.application.database;

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

## src/main/java/com/nubo/operations/api/application/filters/GlobalFilter.java

```java
package com.nubo.operations.api.application.filters;

import com.nubo.operations.api.application.context.GlobalContext;
import com.nubo.operations.api.application.util.ApplicationUtils;
import com.nubo.operations.api.exception.ServiceException;
import com.nubo.operations.api.exception.error.ErrorCode;
import com.nubo.operations.api.exception.error.ErrorResponse;
import com.nubo.operations.api.models.enums.PropertiesEnum;
import com.nubo.operations.api.models.enums.VersionApiEnum;
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

## src/main/java/com/nubo/operations/api/application/interceptors/GlobalInterceptor.java

```java
package com.nubo.operations.api.application.interceptors;

import com.nubo.operations.api.application.context.GlobalContext;
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

## src/main/java/com/nubo/operations/api/application/properties/PropertiesConfig.java

```java
package com.nubo.operations.api.application.properties;

import lombok.Data;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
@Data
public class PropertiesConfig {

    @Value("${spring.application.name}")
    private String apiName;

    @Value("${client.nubo.url-operation-calculation}")
    private String urlNuboOperationCalculation;

    @Value("${client.nubo.url-operation-rules}")
    private String urlNuboOperationRules;

    @Value("${client.nubo.url-operation-fractionation}")
    private String urlNuboOperationFractionation;

    @Value("${kafka.nubo.bootstrap-servers}")
    private String kafkaNuboBootstrapServers;

    @Value("${kafka.nubo.producer.topic-name}")
    private String kafkaNuboTopicName;

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

    @Value("${spring.data.redis.host:127.0.0.1}")
    private String redisHost;

    @Value("${spring.data.redis.port:6379}")
    private int redisPort;

}

```

## src/main/java/com/nubo/operations/api/application/properties/PropertiesContext.java

```java
package com.nubo.operations.api.application.properties;

import com.nubo.operations.api.application.context.GlobalContext;
import com.nubo.operations.api.application.util.ApplicationUtils;
import com.nubo.operations.api.models.enums.PropertiesEnum;
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

## src/main/java/com/nubo/operations/api/application/util/ApplicationUtils.java

```java
package com.nubo.operations.api.application.util;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.nubo.operations.api.exception.ServiceException;
import com.nubo.operations.api.exception.error.ErrorCode;

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

}

```

## src/main/java/com/nubo/operations/api/application/util/RestClientUtils.java

```java
package com.nubo.operations.api.application.util;

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

## src/main/java/com/nubo/operations/api/client/kafka/producer/dto/response/FractionEventKafkaOutDto.java

```java
package com.nubo.operations.api.client.kafka.producer.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class FractionEventKafkaOutDto {
    private String clientIp;
    private String clientUser;
    private LocalDateTime clientDateTime;
    private Long tradeId;
    private String sideId;
    private String action;
    private Object payload;
    private Object response;
    private Object previous;

}

```

## src/main/java/com/nubo/operations/api/client/kafka/producer/service/KafkaNuboAdapter.java

```java
package com.nubo.operations.api.client.kafka.producer.service;

import com.nubo.operations.api.application.properties.PropertiesConfig;
import com.nubo.operations.api.exception.ServiceException;
import com.nubo.operations.api.exception.error.ErrorCode;
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

    public void sendMessage(String message) {
        String topic = propertiesConfig.getKafkaNuboTopicName();
        CompletableFuture<SendResult<String, String>> future = kafkaNuboTemplate.send(topic, message).toCompletableFuture();

        future.thenAccept(result -> log.info("Send message -- Topic: {} -- offset: {} -- json: {} ",
                        topic, result.getRecordMetadata().offset(), message) )
                .exceptionally(ex -> {
                    throw new ServiceException(ErrorCode.ERROR_KAFKA_PRODUCER_NUBO, ex);
                });
    }
}

```

## src/main/java/com/nubo/operations/api/client/operation/calculation/models/dto/request/SettleAccountsInDto.java

```java
package com.nubo.operations.api.client.operation.calculation.models.dto.request;

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

    private BigDecimal quantity;

    private BigDecimal price;

    private BigDecimal commission;

    private BigDecimal valTax;

    private String sideId;

    private Long typeId;

}

```

## src/main/java/com/nubo/operations/api/client/operation/calculation/models/dto/response/SettleAccountsOutDto.java

```java
package com.nubo.operations.api.client.operation.calculation.models.dto.response;

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
}

```

## src/main/java/com/nubo/operations/api/client/operation/calculation/service/OperationCalculationClient.java

```java
package com.nubo.operations.api.client.operation.calculation.service;

import com.nubo.operations.api.client.operation.calculation.models.dto.request.SettleAccountsInDto;
import com.nubo.operations.api.client.operation.calculation.models.dto.response.SettleAccountsOutDto;

public interface OperationCalculationClient {

    SettleAccountsOutDto getSettleAccounts(SettleAccountsInDto settleAccountsInDto);
}

```

## src/main/java/com/nubo/operations/api/client/operation/calculation/service/impl/OperationCalculationClientImpl.java

```java
package com.nubo.operations.api.client.operation.calculation.service.impl;

import com.nubo.operations.api.application.properties.PropertiesConfig;
import com.nubo.operations.api.application.properties.PropertiesContext;
import com.nubo.operations.api.application.util.ApplicationUtils;
import com.nubo.operations.api.application.util.RestClientUtils;
import com.nubo.operations.api.client.operation.calculation.models.dto.request.SettleAccountsInDto;
import com.nubo.operations.api.client.operation.calculation.models.dto.response.SettleAccountsOutDto;
import com.nubo.operations.api.client.operation.calculation.service.OperationCalculationClient;
import com.nubo.operations.api.exception.ClientException;
import com.nubo.operations.api.exception.error.ErrorCode;
import com.nubo.operations.api.models.enums.PropertiesEnum;
import com.nubo.operations.api.models.enums.VersionApiEnum;
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
            ResponseEntity<SettleAccountsOutDto> response = restClientUtils.requestBodyWithResponseObject(uri,
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

## src/main/java/com/nubo/operations/api/client/operation/fractionation/models/dto/request/AssignmentInDto.java

```java
package com.nubo.operations.api.client.operation.fractionation.models.dto.request;

import com.nubo.operations.api.application.annotations.ValidBigDecimal;
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
public class AssignmentInDto {

    @NotNull
    private Integer fraction;

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

    private Boolean sendDeposit;

}

```

## src/main/java/com/nubo/operations/api/client/operation/fractionation/models/dto/request/FractionInDto.java

```java
package com.nubo.operations.api.client.operation.fractionation.models.dto.request;

import com.nubo.operations.api.application.annotations.ValidBigDecimal;
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

}

```

## src/main/java/com/nubo/operations/api/client/operation/fractionation/service/OperationFractionationClient.java

```java
package com.nubo.operations.api.client.operation.fractionation.service;

import com.nubo.operations.api.client.operation.fractionation.models.dto.request.AssignmentInDto;
import com.nubo.operations.api.client.operation.fractionation.models.dto.request.FractionInDto;
import com.nubo.operations.api.models.dto.response.SettlementOutDto;

import java.util.List;

public interface OperationFractionationClient {

    List<SettlementOutDto> createFractions(Long tradeId, String sideId, Long statusId, List<FractionInDto> fractionInDtoList);

    List<SettlementOutDto> updateAssignment(Long tradeId, String sideId, Long statusId, List<AssignmentInDto> assignmentInDtoList);

}

```

## src/main/java/com/nubo/operations/api/client/operation/fractionation/service/impl/OperationFractionationClientImpl.java

```java
package com.nubo.operations.api.client.operation.fractionation.service.impl;

import com.nubo.operations.api.application.properties.PropertiesConfig;
import com.nubo.operations.api.application.properties.PropertiesContext;
import com.nubo.operations.api.application.util.ApplicationUtils;
import com.nubo.operations.api.application.util.RestClientUtils;
import com.nubo.operations.api.client.operation.fractionation.models.dto.request.AssignmentInDto;
import com.nubo.operations.api.client.operation.fractionation.models.dto.request.FractionInDto;
import com.nubo.operations.api.client.operation.fractionation.service.OperationFractionationClient;
import com.nubo.operations.api.exception.ClientException;
import com.nubo.operations.api.exception.error.ErrorCode;
import com.nubo.operations.api.models.dto.response.SettlementOutDto;
import com.nubo.operations.api.models.enums.PropertiesEnum;
import com.nubo.operations.api.models.enums.VersionApiEnum;
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
public class OperationFractionationClientImpl implements OperationFractionationClient {

    private final PropertiesConfig propertiesConfig;
    private final RestClientUtils restClientUtils;

    private static final String PATH_FRACTIONATION = "fractionation";

    @Override
    public List<SettlementOutDto> createFractions(Long tradeId, String sideId, Long statusId,
            List<FractionInDto> fractionInDtoList) {
        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getUrlNuboOperationFractionation())
                .pathSegment(VersionApiEnum.V1.getValue(), PATH_FRACTIONATION)
                .path("/create-fractions/trade/{tradeId}/side/{sideId}/status/{statusId}")
                .buildAndExpand(tradeId, sideId, statusId)
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
    public List<SettlementOutDto> updateAssignment(Long tradeId, String sideId, Long statusId,
            List<AssignmentInDto> assignmentInDtoList) {
        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getUrlNuboOperationFractionation())
                .pathSegment(VersionApiEnum.V1.getValue(), PATH_FRACTIONATION)
                .path("/update-assignments/trade/{tradeId}/side/{sideId}/status/{statusId}")
                .buildAndExpand(tradeId, sideId, statusId)
                .toUri();

        try {
            ResponseEntity<SettlementOutDto[]> response = restClientUtils.requestBodyWithResponseObject(uri,
                    HttpMethod.PUT, getHttpHeaders(), assignmentInDtoList, SettlementOutDto[].class);
            if (!ObjectUtils.isEmpty(response.getBody())) {
                return List.of(response.getBody());
            }
        } catch (Exception ex) {
            throw new ClientException(ErrorCode.CLIENT_OPERATION_FRACTIONATION_ERROR, HttpStatus.BAD_GATEWAY, ex);
        }

        return List.of(SettlementOutDto.builder().build());
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

## src/main/java/com/nubo/operations/api/client/operation/rules/models/dto/request/FractionRuleInDto.java

```java
package com.nubo.operations.api.client.operation.rules.models.dto.request;

import com.nubo.operations.api.application.annotations.ValidBigDecimal;
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

## src/main/java/com/nubo/operations/api/client/operation/rules/models/dto/request/StatusAllowedOptionsInDto.java

```java
package com.nubo.operations.api.client.operation.rules.models.dto.request;

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

## src/main/java/com/nubo/operations/api/client/operation/rules/models/dto/response/OperationBusinessRuleOutDto.java

```java
package com.nubo.operations.api.client.operation.rules.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.nubo.operations.api.models.dto.response.CountryOutDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.ALWAYS)
public class OperationBusinessRuleOutDto {

  private Long id;

  private String code;

  private String description;

  private String category;

  private String value;

  private CountryOutDto country;

}
```

## src/main/java/com/nubo/operations/api/client/operation/rules/models/dto/response/StatusAllowedOptionsOutDto.java

```java
package com.nubo.operations.api.client.operation.rules.models.dto.response;

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

## src/main/java/com/nubo/operations/api/client/operation/rules/models/dto/response/StatusClientOutDto.java

```java
package com.nubo.operations.api.client.operation.rules.models.dto.response;

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

## src/main/java/com/nubo/operations/api/client/operation/rules/service/OperationBusinessRuleClient.java

```java
package com.nubo.operations.api.client.operation.rules.service;

import com.nubo.operations.api.client.operation.rules.models.dto.request.StatusAllowedOptionsInDto;
import com.nubo.operations.api.client.operation.rules.models.dto.response.OperationBusinessRuleOutDto;
import com.nubo.operations.api.client.operation.rules.models.dto.response.StatusAllowedOptionsOutDto;

public interface OperationBusinessRuleClient {

    OperationBusinessRuleOutDto findBusinessRuleByCountryIdAndCode(Long countryId, String code);

    OperationBusinessRuleOutDto findBusinessRuleByCode(String code);

    StatusAllowedOptionsOutDto validateStatusByCode(StatusAllowedOptionsInDto statusAllowedOptionsInDto);

}

```

## src/main/java/com/nubo/operations/api/client/operation/rules/service/impl/OperationBusinessRuleClientImpl.java

```java
package com.nubo.operations.api.client.operation.rules.service.impl;

import com.nubo.operations.api.application.properties.PropertiesConfig;
import com.nubo.operations.api.application.properties.PropertiesContext;
import com.nubo.operations.api.application.util.ApplicationUtils;
import com.nubo.operations.api.application.util.RestClientUtils;
import com.nubo.operations.api.client.operation.rules.models.dto.request.StatusAllowedOptionsInDto;
import com.nubo.operations.api.client.operation.rules.models.dto.response.OperationBusinessRuleOutDto;
import com.nubo.operations.api.client.operation.rules.models.dto.response.StatusAllowedOptionsOutDto;
import com.nubo.operations.api.client.operation.rules.service.OperationBusinessRuleClient;
import com.nubo.operations.api.exception.ClientException;
import com.nubo.operations.api.exception.error.ErrorCode;
import com.nubo.operations.api.models.enums.PropertiesEnum;
import com.nubo.operations.api.models.enums.VersionApiEnum;
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
public class OperationBusinessRuleClientImpl implements OperationBusinessRuleClient {

    private final PropertiesConfig propertiesConfig;
    private final RestClientUtils restClientUtils;

    private static final String OPERATION_BUSINESS_RULE = "operation-business-rule";
    private static final String OPERATION_ACTION_BUSINESS_RULE = "operation-action-business-rule";

    @Override
    public OperationBusinessRuleOutDto findBusinessRuleByCountryIdAndCode(Long countryId, String code) {
        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getUrlNuboOperationRules())
                .pathSegment(VersionApiEnum.V1.getValue(), OPERATION_BUSINESS_RULE)
                .path("/country/{countryId}/code/{code}")
                .buildAndExpand(countryId, code)
                .toUri();

        try {
            ResponseEntity<OperationBusinessRuleOutDto> response = restClientUtils.requestWithResponseObject(uri,
                    HttpMethod.GET, getHttpHeaders(), OperationBusinessRuleOutDto.class);

            if (!ObjectUtils.isEmpty(response.getBody())) {
                return response.getBody();
            }
        } catch (Exception ex) {
            throw new ClientException(ErrorCode.CLIENT_OPERATION_RULES_ERROR, HttpStatus.BAD_GATEWAY, ex);
        }

        return OperationBusinessRuleOutDto.builder().build();
    }

    @Override
    public OperationBusinessRuleOutDto findBusinessRuleByCode(String code) {
        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getUrlNuboOperationRules())
                .pathSegment(VersionApiEnum.V1.getValue(), OPERATION_BUSINESS_RULE)
                .path("/code/{code}")
                .buildAndExpand(code)
                .toUri();

        try {
            ResponseEntity<OperationBusinessRuleOutDto> response = restClientUtils.requestWithResponseObject(uri,
                    HttpMethod.GET, getHttpHeaders(), OperationBusinessRuleOutDto.class);

            if (!ObjectUtils.isEmpty(response.getBody())) {
                return response.getBody();
            }
        } catch (Exception ex) {
            throw new ClientException(ErrorCode.CLIENT_OPERATION_RULES_ERROR, HttpStatus.BAD_GATEWAY, ex);
        }

        return OperationBusinessRuleOutDto.builder().build();
    }

    @Override
    public  StatusAllowedOptionsOutDto validateStatusByCode(StatusAllowedOptionsInDto statusAllowedOptionsInDto) {
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

## src/main/java/com/nubo/operations/api/exception/ClientException.java

```java
package com.nubo.operations.api.exception;

import com.nubo.operations.api.exception.error.ErrorCode;
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

## src/main/java/com/nubo/operations/api/exception/ServiceException.java

```java
package com.nubo.operations.api.exception;

import com.nubo.operations.api.exception.error.ErrorCode;
import lombok.Getter;
import org.springframework.http.HttpStatus;

import java.util.Collections;
import java.util.Map;

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

    public ServiceException(ErrorCode errorCode, HttpStatus httpStatus, Map<String, Object> details) {
        super(errorCode.getMessage());
        this.errorCode = errorCode;
        this.httpStatus = httpStatus;
        this.details = (details == null ? Collections.emptyMap() : details);
    }

    public ServiceException(ErrorCode errorCode, String message, HttpStatus httpStatus) {
        super(errorCode.getMessage() + ", " + message);
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

## src/main/java/com/nubo/operations/api/exception/error/ErrorCode.java

```java
package com.nubo.operations.api.exception.error;

import lombok.Getter;

@Getter
public enum ErrorCode {

    UNAUTHORIZED("Not unauthorized"),
    ERROR_KAFKA_PRODUCER_NUBO("Error Producer Kafka Nubo"),
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
    COUNTRY_NOT_FOUND("Country not found"),
    CURRENCY_NOT_FOUND("Currency not found"),
    TRADE_NOT_FOUND("Trade not found"),
    PARTICIPANT_NOT_FOUND("Participant not found"),
    SECURITY_TITLE_NOT_FOUND("Security Title not found"),
    TRADE_EQUITY_NOT_FOUND("Trade Equity not found"),
    TRADE_EQUITY_EXISTS("TradeEquity already exists"),
    SETTLEMENT_NOT_FOUND("Settlement not found"),
    INVESTOR_NOT_FOUND("Investor not found"),
    INVESTOR_ACCOUNT_NOT_FOUND("Investor_Account not found"),
    PARTICIPANT_ACCOUNT_NOT_FOUND("Participant Account not found"),
    DEPOSITORY_NOT_FOUND("Depository not found"),
    TYPE_NOT_FOUND("Type not found"),
    MARKET_NOT_FOUND("Market not found"),
    STATUS_NOT_FOUND("Status not found"),
    ACCOUNT_NOT_FOUND("Account not found"),
    SIDE_NOT_FOUND("Side not found"),
    TRADE_DEPOSITORY_NOT_FOUND("Trade Depository not found"),
    TRADING_SYSTEM_NOT_FOUND("Trading System not found"),
    TRADING_SESSION_NOT_FOUND("Trading Session not found"),
    TAXES_NOT_FOUND("Taxes not found"),
    FRACTION_CANNOT_MODIFIED_WITH_MASTER_ACCOUNT("Fraction cannot be modified with master account"),
    PARTICIPANT_ACCOUNT_OR_INVESTOR_ACCOUNT_REQUIRED("The participant account or investor account is required"),
    TRADE_DEPOSITORY_REQUIRED("The depository Trade required"),
    TYPE_COUNTED_OPERATION_REQUIRED("The type of operation must be counted operation"),
    ACCOUNT_DEPOSITORY_NOT_CORRESPOND_TO_TRADE("Account depository not correspond to trade"),
    SOURCE_QUOTE_TYPE_REQUIRED("The source quote type required"),
    MASTER_ACCOUNT_NOT_CORRESPOND_TO_ORIGIN_THIRD_PARTIES("The master account not correspond to the Third Parties"),
    OWN_POSITION_NOT_CORRESPOND_TO_ORIGIN("The allocation data does not correspond to the Own Position origin"),
    THIRD_PARTIES_COLLECTIVE_PORTFOLIOS_NOT_CORRESPOND_TO_ORIGIN("The allocation data does not correspond to the origin Third Parties/Collective Portfolios"),
    FRACTION_TOTAL_QUANTITY_NOT_CORRESPOND_QUANTITY_TRADE("The total number of shares in the fractions does not correspond to the total number of shares of the operation"),
    FRACTION_TOTAL_QUANTITY_EXCEED_QUANTITY_TRADE("The sum of the quantities of the fractions exceeds the quantity operation"),
    INVALID_QUANTITY("Trade Invalid quantity"),
    INVALID_PRICE_PRECISION("Invalid price precision"),
    PRICE_NOT_FOUND("Price not found"),
    MAXIMUM_LIMIT_FRACTIONS_EXCEED("The maximum limit of fractions"),
    CLIENT_OPERATION_CALCULATION_ERROR("An unexpected error occurred in Operation Calculation"),
    CLIENT_OPERATION_FRACTIONATION_ERROR("An unexpected error occurred in Operation Fractionation"),
    CLIENT_OPERATION_RULES_ERROR("An unexpected error occurred in Operation Rules"),
    INVESTOR_ACCOUNT_DUPLICATED("The investor account cannot be duplicated"),
    PARTICIPANT_ACCOUNT_DUPLICATED("The participant account cannot be duplicated"),
    COMMISSION_SETTLEMENT_DATE_COMPLIANCE_AFTER("The commission cannot be modified because the compliance date is after the modification date"),
    COMMISSION_CANNOT_EXCEED_REPO_AMOUNT("The value of the commission cannot exceed the repo amount"),
    ERROR_BUSINESS_RULE("Business rule error occurred");

    private final String message;

    ErrorCode(String message) {
        this.message = message;
    }

    public String getName() {
        return this.name();
    }

}

```

## src/main/java/com/nubo/operations/api/exception/error/ErrorResponse.java

```java
package com.nubo.operations.api.exception.error;

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

## src/main/java/com/nubo/operations/api/exception/error/ErrorValidation.java

```java
package com.nubo.operations.api.exception.error;

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

## src/main/java/com/nubo/operations/api/exception/handler/GlobalExceptionHandler.java

```java
package com.nubo.operations.api.exception.handler;

import com.nubo.operations.api.application.properties.PropertiesContext;
import com.nubo.operations.api.application.util.ApplicationUtils;
import com.nubo.operations.api.exception.ClientException;
import com.nubo.operations.api.exception.ServiceException;
import com.nubo.operations.api.exception.error.ErrorCode;
import com.nubo.operations.api.exception.error.ErrorResponse;
import com.nubo.operations.api.exception.error.ErrorValidation;
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
    public ResponseEntity<ErrorResponse> handlerHttpRequestMethodNotSupportedException(
            HttpRequestMethodNotSupportedException exception,
            HttpServletRequest request) {
        return buildErrorResponse(HttpStatus.METHOD_NOT_ALLOWED, exception, request, ErrorCode.METHOD_NOT_ALLOWED);
    }

    @ExceptionHandler(MethodArgumentTypeMismatchException.class)
    public ResponseEntity<ErrorResponse> handlerMethodArgumentTypeMismatchException(
            MethodArgumentTypeMismatchException exception,
            HttpServletRequest request) {
        return buildErrorResponse(HttpStatus.BAD_REQUEST, exception, request, ErrorCode.METHOD_ARGUMENT_TYPE);
    }

    @ExceptionHandler(HttpMediaTypeNotSupportedException.class)
    public ResponseEntity<ErrorResponse> handlerHttpMediaTypeNotSupportedException(
            HttpMediaTypeNotSupportedException exception,
            HttpServletRequest request) {
        return buildErrorResponse(HttpStatus.UNSUPPORTED_MEDIA_TYPE, exception, request,
                ErrorCode.UNSUPPORTED_MEDIA_TYPE);
    }

    @ExceptionHandler(HttpMessageNotReadableException.class)
    public ResponseEntity<ErrorResponse> handlerHttpMessageNotReadableException(
            HttpMessageNotReadableException exception,
            HttpServletRequest request) {
        return buildErrorResponse(HttpStatus.BAD_REQUEST, exception, request, ErrorCode.MESSAGE_NOT_READABLE);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorResponse> handlerMethodArgumentNotValidException(
            MethodArgumentNotValidException exception,
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
                .errorMessageDetail(ObjectUtils.isEmpty(exception.getCause()) ? exception.getMessage()
                        : exception.getCause().getMessage())
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

## src/main/java/com/nubo/operations/api/helpers/DateUtil.java

```java
package com.nubo.operations.api.helpers;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.util.Set;

@Component
@RequiredArgsConstructor
public class DateUtil {

    public Integer countBusinessDays(LocalDate startDate, LocalDate endDate, Set<LocalDate> holidays) {
        Integer businessDays = 0;
        if (startDate.isAfter(endDate)) {
            return 0;
        }
        LocalDate current = startDate;
        while (!current.isAfter(endDate)) {
            if (Boolean.TRUE.equals(isBusinessDay(current, holidays))) {
                businessDays++;
            }
            current = current.plusDays(1);
        }
        return businessDays;
    }

    public LocalDate getNextBusinessDay(LocalDate date, Set<LocalDate> holidays) {
        LocalDate nextDay = date.plusDays(1);
        while (nextDay.getDayOfWeek() == DayOfWeek.SATURDAY
                || nextDay.getDayOfWeek() == DayOfWeek.SUNDAY
                || holidays.contains(nextDay)) {
            nextDay = nextDay.plusDays(1);
        }
        return nextDay;
    }

    private Boolean isBusinessDay(LocalDate date, Set<LocalDate> holidays) {
        if (date.getDayOfWeek() == DayOfWeek.SATURDAY
                || date.getDayOfWeek() == DayOfWeek.SUNDAY) {
            return false;
        }
        return !holidays.contains(date);
    }

}

```

## src/main/java/com/nubo/operations/api/helpers/MapperPageUtil.java

```java
package com.nubo.operations.api.helpers;

import com.nubo.operations.api.models.dto.response.PageResponseOutDto;
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

## src/main/java/com/nubo/operations/api/helpers/MapperTradeDynamicSearch.java

```java
package com.nubo.operations.api.helpers;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Map;
import java.util.function.Function;

import com.nubo.operations.api.models.entity.TradeEntity;
import com.nubo.operations.api.models.enums.SearchOperationEnum;

import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.Path;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class MapperTradeDynamicSearch {

    private enum ComparisonType {
        GREATER_THAN, GREATER_THAN_OR_EQUAL, LESS_THAN, LESS_THAN_OR_EQUAL
    }

    private static final Map<String, Function<Root<TradeEntity>, Path<?>>> FIELD_PATH_MAPPING = Map.ofEntries(
        Map.entry("id", root -> root.get("id")),
        Map.entry("matchDate", root -> root.get("matchDate")),
        Map.entry("matchId", root -> root.get("matchId")),
        Map.entry("clearingDate", root -> root.get("clearingDate")),
        Map.entry("returnClearingDate", root -> root.get("returnClearingDate")),
        Map.entry("depositoryId", root -> root.get("depository").get("id")),
        Map.entry("depositoryName", root -> root.get("depository").get("description")),
        Map.entry("countryId", root -> root.get("country").get("id")),
        Map.entry("countryName", root -> root.get("country").get("name")),
        Map.entry("countryCode", root -> root.get("country").get("code")),
        Map.entry("typeId", root -> root.get("type").get("id")),
        Map.entry("typeDescription", root -> root.get("type").get("description")),
        Map.entry("marketId", root -> root.get("market").get("id")),
        Map.entry("marketDescription", root -> root.get("market").get("description")),
        Map.entry("issuanceMarketId", root -> root.get("issuanceMarket").get("id")),
        Map.entry("issuanceMarketDescription", root -> root.get("issuanceMarket").get("description")),
        Map.entry("securityTitleId", root -> root.get("securityTitle").get("id")),
        Map.entry("securityTitleIsin", root -> root.get("securityTitle").get("isin")),
        Map.entry("securityTitleMnemonic", root -> root.get("securityTitle").get("mnemonic")),
        Map.entry("participantBuyId", root -> root.get("participantBuy").get("id")),
        Map.entry("participantBuyName", root -> root.get("participantBuy").get("name")),
        Map.entry("participantSellId", root -> root.get("participantSell").get("id")),
        Map.entry("participantSellName", root -> root.get("participantSell").get("name")),
        Map.entry("custodianBuyId", root -> root.get("custodianBuy").get("id")),
        Map.entry("custodianBuyName", root -> root.get("custodianBuy").get("name")),
        Map.entry("custodianSellId", root -> root.get("custodianSell").get("id")),
        Map.entry("custodianSellName", root -> root.get("custodianSell").get("name")),
        Map.entry("assignmentMarkBuy", root -> root.get("assignmentMarkBuy")),
        Map.entry("assignmentMarkSell", root -> root.get("assignmentMarkSell")),
        Map.entry("fractionalMarkBuy", root -> root.get("fractionalMarkBuy")),
        Map.entry("fractionalMarkSell", root -> root.get("fractionalMarkSell")),
        Map.entry("advanceStatus", root -> root.get("advanceStatus")),
        Map.entry("exitIndicatorSettlement", root -> root.get("exitIndicatorSettlement")),
        Map.entry("canceledStatus", root -> root.get("canceledStatus")),
        Map.entry("quantity", root -> root.get("quantity")),
        Map.entry("price", root -> root.get("price")),
        Map.entry("volume", root -> root.get("volume")),
        Map.entry("repurchaseRate", root -> root.get("repurchaseRate")),
        Map.entry("repurchaseAmount", root -> root.get("repurchaseAmount")),
        Map.entry("statusId", root -> root.get("status").get("id")),
        Map.entry("statusDescription", root -> root.get("status").get("description")),
        Map.entry("matchTime", root -> root.get("matchTime")),
        Map.entry("ownPositionSell", root -> root.get("ownPositionSell")),
        Map.entry("ownPositionBuy", root -> root.get("ownPositionBuy")),
        Map.entry("currencyId", root -> root.get("currency").get("id")),
        Map.entry("currencyCode", root -> root.get("currency").get("code")),
        Map.entry("currencyName", root -> root.get("currency").get("name")),
        Map.entry("tradingSystemId", root -> root.get("tradingSystem").get("id")),
        Map.entry("tradingSystemDescription", root -> root.get("tradingSystem").get("description")),
        Map.entry("tradingSessionId", root -> root.get("tradingSession").get("id")),
        Map.entry("tradingSessionDescription", root -> root.get("tradingSession").get("description")),
        Map.entry("repurchaseAgreementDate", root -> root.get("repurchaseAgreementDate")),
        Map.entry("daysToSettlement", root -> root.get("daysToSettlement")),
        Map.entry("repoRate", root -> root.get("repoRate")),
        Map.entry("repoAmount", root -> root.get("repoAmount")),
        Map.entry("fundingAmount", root -> root.get("fundingAmount")),
        Map.entry("netOutFlowTotal", root -> root.get("netOutFlowTotal")),
        Map.entry("outFlowTurnOverValue", root -> root.get("outFlowTurnOverValue")),
        Map.entry("totalNetReturn", root -> root.get("totalNetReturn")),
        Map.entry("returnTurnoverValue", root -> root.get("returnTurnoverValue")),
        Map.entry("deliveryVersusPaymentValue", root -> root.get("deliveryVersusPaymentValue")),
        Map.entry("reallocationIndicator", root -> root.get("reallocationIndicator")),
        Map.entry("businessTypeId", root -> root.get("businessType").get("id")),
        Map.entry("businessTypeDescription", root -> root.get("businessType").get("description")),
        Map.entry("marketTypeId", root -> root.get("marketType").get("id")),
        Map.entry("marketTypeDescription", root -> root.get("marketType").get("description")),
        Map.entry("originTypeId", root -> root.get("originType").get("id")),
        Map.entry("originTypeDescription", root -> root.get("originType").get("description")),
        Map.entry("settlementIndicatorOutgoing", root -> root.get("settlementIndicatorOutgoing")),
        Map.entry("settlementIndicatorReturn", root -> root.get("settlementIndicatorReturn")),
        Map.entry("resettlementIndicatorAdvance", root -> root.get("resettlementIndicatorAdvance")),
        Map.entry("specialTradeId", root -> root.get("specialTradeId")),
        Map.entry("paymentTypeId", root -> root.get("paymentType").get("id")),
        Map.entry("paymentTypeDescription", root -> root.get("paymentType").get("description")),
        Map.entry("settlementTypeId", root -> root.get("settlementType").get("id")),
        Map.entry("settlementTypeDescription", root -> root.get("settlementType").get("description")),
        Map.entry("custodianStatusId", root -> root.get("custodianStatus").get("id")),
        Map.entry("custodianStatusDescription", root -> root.get("custodianStatus").get("description")),
        Map.entry("settlementStatusId", root -> root.get("settlementStatus").get("id")),
        Map.entry("settlementStatusDescription", root -> root.get("settlementStatus").get("description")),
        Map.entry("bloquingStatusId", root -> root.get("bloquingStatus").get("id")),
        Map.entry("bloquingStatusDescription", root -> root.get("bloquingStatus").get("description")),
        Map.entry("salesGuarantee", root -> root.get("salesGuarantee")),
        Map.entry("purchaseGuarantee", root -> root.get("purchaseGuarantee")),
        Map.entry("purchasePaymentIndicator", root -> root.get("purchasePaymentIndicator")),
        Map.entry("returnIndicatorSettlement", root -> root.get("returnIndicatorSettlement"))
    );

    private static final Map<Class<?>, Function<String, Object>> TYPE_PARSERS = Map.of(
        Long.class, Long::valueOf,
        long.class, Long::valueOf,
        Integer.class, Integer::valueOf,
        int.class, Integer::valueOf,
        Boolean.class, Boolean::valueOf,
        boolean.class, Boolean::valueOf,
        LocalDate.class, LocalDate::parse,
        LocalDateTime.class, LocalDateTime::parse,
        BigDecimal.class, BigDecimal::new,
        String.class, value -> value
    );

    @FunctionalInterface
    private interface PredicateBuilder {
        Predicate build(CriteriaBuilder criteriaBuilder, 
                       Path<?> fieldPath, 
                       String fieldValue);
    }

    private static final Map<SearchOperationEnum, PredicateBuilder> OPERATION_BUILDERS = Map.ofEntries(
        Map.entry(SearchOperationEnum.CONTAINS, (cb, path, value) -> {
            if (path.getJavaType() == String.class) {
                return cb.like(cb.lower(path.as(String.class)), "%" + value.toLowerCase() + "%");
            } else {
                return cb.like(cb.concat("", path.as(String.class)), "%" + value + "%");
            }
        }),
        Map.entry(SearchOperationEnum.NOT_CONTAINS, (cb, path, value) -> {
            if (path.getJavaType() == String.class) {
                return cb.notLike(cb.lower(path.as(String.class)), "%" + value.toLowerCase() + "%");
            } else {
                return cb.notLike(cb.concat("", path.as(String.class)), "%" + value + "%");
            }
        }),
        Map.entry(SearchOperationEnum.EQUALS, (cb, path, value) -> {
            Object parsedValue = parseFieldValue(path, value);
            if (path.getJavaType() == String.class) {
                return cb.equal(cb.lower(path.as(String.class)), parsedValue.toString().toLowerCase());
            }
            return cb.equal(path, parsedValue);
        }),
        Map.entry(SearchOperationEnum.NOT_EQUALS, (cb, path, value) -> {
            Object parsedValue = parseFieldValue(path, value);
            if (path.getJavaType() == String.class) {
                return cb.notEqual(cb.lower(path.as(String.class)), parsedValue.toString().toLowerCase());
            }
            return cb.notEqual(path, parsedValue);
        }),
        Map.entry(SearchOperationEnum.STARTS_WITH, (cb, path, value) -> {
            if (path.getJavaType() == String.class) {
                return cb.like(cb.lower(path.as(String.class)), value.toLowerCase() + "%");
            } else {
                return cb.like(cb.concat("", path.as(String.class)), value + "%");
            }
        }),
        Map.entry(SearchOperationEnum.ENDS_WITH, (cb, path, value) -> {
            if (path.getJavaType() == String.class) {
                return cb.like(cb.lower(path.as(String.class)), "%" + value.toLowerCase());
            } else {
                return cb.like(cb.concat("", path.as(String.class)), "%" + value);
            }
        }),
        Map.entry(SearchOperationEnum.GREATER_THAN, (cb, path, value) -> 
            buildComparisonPredicate(cb, path, value, ComparisonType.GREATER_THAN)),
        Map.entry(SearchOperationEnum.GREATER_THAN_OR_EQUAL, (cb, path, value) -> 
            buildComparisonPredicate(cb, path, value, ComparisonType.GREATER_THAN_OR_EQUAL)),
        Map.entry(SearchOperationEnum.LESS_THAN, (cb, path, value) -> 
            buildComparisonPredicate(cb, path, value, ComparisonType.LESS_THAN)),
        Map.entry(SearchOperationEnum.LESS_THAN_OR_EQUAL, (cb, path, value) -> 
            buildComparisonPredicate(cb, path, value, ComparisonType.LESS_THAN_OR_EQUAL)),
        Map.entry(SearchOperationEnum.IS_EMPTY, (cb, path, value) -> 
            cb.or(cb.isNull(path), cb.equal(path.as(String.class), ""))),
        Map.entry(SearchOperationEnum.IS_NOT_EMPTY, (cb, path, value) -> 
            cb.and(cb.isNotNull(path), cb.notEqual(path.as(String.class), ""))),
        Map.entry(SearchOperationEnum.IN, (cb, path, value) -> {
            String[] values = value.split(",");
            CriteriaBuilder.In<Object> inClause = cb.in(path);
            for (String val : values) {
                inClause.value(parseFieldValue(path, val.trim()));
            }
            return inClause;
        }),
        Map.entry(SearchOperationEnum.NOT_IN, (cb, path, value) -> {
            String[] values = value.split(",");
            CriteriaBuilder.In<Object> inClause = cb.in(path);
            for (String val : values) {
                inClause.value(parseFieldValue(path, val.trim()));
            }
            return inClause.not();
        }),
        Map.entry(SearchOperationEnum.IS_ANY_OF, (cb, path, value) -> {
            String[] values = value.split(",");
            CriteriaBuilder.In<Object> inClause = cb.in(path);
            for (String val : values) {
                inClause.value(parseFieldValue(path, val.trim()));
            }
            return inClause;
        })
    );

    public static Path<?> getTradeFieldPath(Root<TradeEntity> root, String fieldName) {
        try {
            Function<Root<TradeEntity>, Path<?>> pathFunction = FIELD_PATH_MAPPING.get(fieldName);
            if (pathFunction != null) {
                return pathFunction.apply(root);
            }
            log.warn("Campo no reconocido: {}", fieldName);
            return null;
        } catch (Exception e) {
            log.error("Error obteniendo ruta del campo {}: {}", fieldName, e.getMessage());
            return null;
        }
    }

    public static Predicate buildTradeFieldPredicate(CriteriaBuilder criteriaBuilder, 
                                                    Path<?> fieldPath, 
                                                    String fieldValue, 
                                                    SearchOperationEnum operation) {
        try {
            PredicateBuilder builder = OPERATION_BUILDERS.get(operation);
            if (builder == null) {
                log.warn("Operación no soportada: {}", operation);
                return null;
            }

            return builder.build(criteriaBuilder, fieldPath, fieldValue);
        } catch (Exception e) {
            log.error("Error construyendo predicado para operación {}: {}", operation, e.getMessage());
            return null;
        }
    }

    public static Object parseFieldValue(Path<?> fieldPath, String value) {
        try {
            Class<?> fieldType = fieldPath.getJavaType();
            Function<String, Object> parser = TYPE_PARSERS.get(fieldType);
            return parser != null ? parser.apply(value) : value;
        } catch (IllegalArgumentException e) {
            log.warn("Error parseando valor {} para tipo {}: {}", value, fieldPath.getJavaType(), e.getMessage());
            return value;
        }
    }

    @SuppressWarnings("unchecked")
    private static Predicate buildComparisonPredicate(CriteriaBuilder criteriaBuilder, 
                                                     Path<?> fieldPath, 
                                                     String fieldValue, 
                                                     ComparisonType comparisonType) {
        try {
            Object parsedValue = parseFieldValue(fieldPath, fieldValue);
            Class<?> fieldType = fieldPath.getJavaType();
            
            if (Number.class.isAssignableFrom(fieldType) || fieldType.isPrimitive()) {
                Path<Number> numberPath = (Path<Number>) fieldPath;
                Number numberValue = (Number) parsedValue;
                
                return switch (comparisonType) {
                    case GREATER_THAN -> criteriaBuilder.gt(numberPath, numberValue);
                    case GREATER_THAN_OR_EQUAL -> criteriaBuilder.ge(numberPath, numberValue);
                    case LESS_THAN -> criteriaBuilder.lt(numberPath, numberValue);
                    case LESS_THAN_OR_EQUAL -> criteriaBuilder.le(numberPath, numberValue);
                };
            } else if (Comparable.class.isAssignableFrom(fieldType)) {
                Path<Comparable<Object>> comparablePath = (Path<Comparable<Object>>) fieldPath;
                Comparable<Object> comparableValue = (Comparable<Object>) parsedValue;
                
                return switch (comparisonType) {
                    case GREATER_THAN -> criteriaBuilder.greaterThan(comparablePath, comparableValue);
                    case GREATER_THAN_OR_EQUAL -> criteriaBuilder.greaterThanOrEqualTo(comparablePath, comparableValue);
                    case LESS_THAN -> criteriaBuilder.lessThan(comparablePath, comparableValue);
                    case LESS_THAN_OR_EQUAL -> criteriaBuilder.lessThanOrEqualTo(comparablePath, comparableValue);
                };
            } else {
                log.warn("Tipo de campo no soportado para comparación: {}", fieldType);
                return null;
            }
        } catch (Exception e) {
            log.error("Error en buildComparisonPredicate para tipo {}: {}", comparisonType, e.getMessage());
            return null;
        }
    }
}

```

## src/main/java/com/nubo/operations/api/helpers/MapperUtil.java

```java
package com.nubo.operations.api.helpers;

import java.util.List;

import org.springframework.util.ObjectUtils;

import com.nubo.operations.api.client.operation.calculation.models.dto.response.SettleAccountsOutDto;
import com.nubo.operations.api.models.dto.response.AllTradeOutDto;
import com.nubo.operations.api.models.dto.response.CalculationOutDto;
import com.nubo.operations.api.models.dto.response.CfiOutDto;
import com.nubo.operations.api.models.dto.response.CityOutDto;
import com.nubo.operations.api.models.dto.response.ClassOutDto;
import com.nubo.operations.api.models.dto.response.CountryOutDto;
import com.nubo.operations.api.models.dto.response.CurrencyOutDto;
import com.nubo.operations.api.models.dto.response.DepartmentOutDto;
import com.nubo.operations.api.models.dto.response.DepositoryOutDto;
import com.nubo.operations.api.models.dto.response.GicsOutDto;
import com.nubo.operations.api.models.dto.response.IdentificationTypeOutDto;
import com.nubo.operations.api.models.dto.response.InvestorAccountOutDto;
import com.nubo.operations.api.models.dto.response.InvestorOutDto;
import com.nubo.operations.api.models.dto.response.MarketOutDto;
import com.nubo.operations.api.models.dto.response.ParticipantAccountOutDto;
import com.nubo.operations.api.models.dto.response.ParticipantOutDto;
import com.nubo.operations.api.models.dto.response.SecurityTitleOutDto;
import com.nubo.operations.api.models.dto.response.SettlementOutDto;
import com.nubo.operations.api.models.dto.response.SideOutDto;
import com.nubo.operations.api.models.dto.response.StatusOutDto;
import com.nubo.operations.api.models.dto.response.TaxStatusOutDto;
import com.nubo.operations.api.models.dto.response.TradeEquityOutDto;
import com.nubo.operations.api.models.dto.response.TradeOutDto;
import com.nubo.operations.api.models.dto.response.TradingSessionOutDto;
import com.nubo.operations.api.models.dto.response.TradingSystemOutDto;
import com.nubo.operations.api.models.dto.response.TypeOutDto;
import com.nubo.operations.api.models.entity.CfiEntity;
import com.nubo.operations.api.models.entity.CityEntity;
import com.nubo.operations.api.models.entity.ClassEntity;
import com.nubo.operations.api.models.entity.CountryEntity;
import com.nubo.operations.api.models.entity.CurrencyEntity;
import com.nubo.operations.api.models.entity.DepartmentEntity;
import com.nubo.operations.api.models.entity.DepositoryEntity;
import com.nubo.operations.api.models.entity.GicsEntity;
import com.nubo.operations.api.models.entity.IdentificationTypeEntity;
import com.nubo.operations.api.models.entity.InvestorAccountEntity;
import com.nubo.operations.api.models.entity.InvestorEntity;
import com.nubo.operations.api.models.entity.MarketEntity;
import com.nubo.operations.api.models.entity.ParticipantAccountEntity;
import com.nubo.operations.api.models.entity.ParticipantEntity;
import com.nubo.operations.api.models.entity.SecurityTitleEntity;
import com.nubo.operations.api.models.entity.SettlementEntity;
import com.nubo.operations.api.models.entity.SideEntity;
import com.nubo.operations.api.models.entity.StatusEntity;
import com.nubo.operations.api.models.entity.TaxStatusEntity;
import com.nubo.operations.api.models.entity.TradeEntity;
import com.nubo.operations.api.models.entity.TradeEquityEntity;
import com.nubo.operations.api.models.entity.TradingSessionEntity;
import com.nubo.operations.api.models.entity.TradingSystemEntity;
import com.nubo.operations.api.models.entity.TypeEntity;
import com.nubo.operations.api.models.enums.SideEnum;

public final class MapperUtil {

    private MapperUtil() {
    }

    public static TradeOutDto tradeEntityToTradeOutDto(TradeEntity tradeEntity) {
        if (tradeEntity == null)
            return null;
        ParticipantOutDto participantSellDto = participantEntityToParticipantOutDto(tradeEntity.getParticipantSell());

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
                .issuanceMarket(marketEntityToMarketOutDto(tradeEntity.getIssuanceMarket()))
                .securityTitle(securityTitleEntityToSecurityTitleOutDto(tradeEntity.getSecurityTitle()))
                .participantBuy(participantEntityToParticipantOutDto(tradeEntity.getParticipantBuy()))
                .participantSell(
                        Boolean.TRUE.equals(tradeEntity.getOwnPositionBuy()) && participantSellDto != null
                                ? participantSellDto.toBuilder().code("-").build()
                                : participantSellDto)
                .custodianBuy(participantEntityToParticipantOutDto(tradeEntity.getCustodianBuy()))
                .custodianSell(participantEntityToParticipantOutDto(tradeEntity.getCustodianSell()))
                .assignmentMarkBuy(tradeEntity.getAssignmentMarkBuy())
                .assignmentMarkSell(tradeEntity.getAssignmentMarkSell())
                .fractionalMarkBuy(tradeEntity.getFractionalMarkBuy())
                .fractionalMarkSell(tradeEntity.getFractionalMarkSell())
                .advanceStatus(tradeEntity.getAdvanceStatus())
                .exitIndicatorSettlement(tradeEntity.getExitIndicatorSettlement())
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
                .resettlementIndicatorAdvance(tradeEntity.getResettlementIndicatorAdvance())
                .specialTradeId(tradeEntity.getSpecialTradeId())
                .paymentType(typeEntityToTypeOutDto(tradeEntity.getPaymentType()))
                .settlementType(typeEntityToTypeOutDto(tradeEntity.getSettlementType()))
                .custodianStatus(statusEntityToStatusOutDto(tradeEntity.getCustodianStatus()))
                .settlementStatus(statusEntityToStatusOutDto(tradeEntity.getSettlementStatus()))
                .bloquingStatus(statusEntityToStatusOutDto(tradeEntity.getBloquingStatus()))
                .purchasePaymentIndicator(tradeEntity.getPurchasePaymentIndicator())
                .returnIndicatorSettlement(tradeEntity.getReturnIndicatorSettlement())
                .build();
    }

    public static CountryOutDto countryEntityToCountryOutDto(CountryEntity countryEntity) {
        if (ObjectUtils.isEmpty(countryEntity))
            return null;
        return CountryOutDto.builder()
                .id(countryEntity.getId())
                .code(countryEntity.getCode())
                .name(countryEntity.getName())
                .currency(currencyEntityToCurrencyOutDto(countryEntity.getCurrency()))
                .timeZone(countryEntity.getTimeZone())
                .build();
    }

    public static CurrencyOutDto currencyEntityToCurrencyOutDto(CurrencyEntity currencyEntity) {
        if (ObjectUtils.isEmpty(currencyEntity))
            return null;
        return CurrencyOutDto.builder()
                .id(currencyEntity.getId())
                .code(currencyEntity.getCode())
                .name(currencyEntity.getName())
                .build();
    }

    public static SecurityTitleOutDto securityTitleEntityToSecurityTitleOutDto(
            SecurityTitleEntity securityTitleEntity) {
        if (ObjectUtils.isEmpty(securityTitleEntity))
            return null;
        return SecurityTitleOutDto.builder()
                .id(securityTitleEntity.getId())
                .market(marketEntityToMarketOutDto(securityTitleEntity.getMarket()))
                .equityCode(securityTitleEntity.getEquityCode())
                .mnemonic(securityTitleEntity.getMnemonic())
                .isin(securityTitleEntity.getIsin())
                .cfi(cfiEntityToCfiOutDto(securityTitleEntity.getCfi()))
                .currencyId(securityTitleEntity.getCurrencyId())
                .settlementPeriod(securityTitleEntity.getSettlementPeriod())
                .listingDate(securityTitleEntity.getListingDate())
                .delistingDate(securityTitleEntity.getDelistingDate())
                .parent(securityTitleEntity.getParent())
                .parentId(securityTitleEntity.getParentId())
                .status(statusEntityToStatusOutDto(securityTitleEntity.getStatus()))
                .issuerName(ObjectUtils.isEmpty(securityTitleEntity.getIssuer()) ? null
                        : securityTitleEntity.getIssuer().getName())
                .countryId(securityTitleEntity.getCountryId())
                .amountIssued(securityTitleEntity.getAmountIssued())
                .clazz(classEntityToClassOutDto(securityTitleEntity.getClazz()))
                .segmentId(securityTitleEntity.getSegmentId())
                .category(securityTitleEntity.getCategory())
                .depository(depositoryEntityToDepositoryOutDto(securityTitleEntity.getDepository()))
                .punishmentRepo(securityTitleEntity.getPunishmentRepo())
                .regulatoryCode(securityTitleEntity.getRegulatoryCode())
                .build();
    }

    public static ParticipantOutDto participantEntityToParticipantOutDto(ParticipantEntity participantEntity) {
        if (ObjectUtils.isEmpty(participantEntity))
            return null;
        return ParticipantOutDto.builder()
                .id(participantEntity.getId())
                .code(participantEntity.getCode())
                .documentNumber(participantEntity.getDocumentNumber())
                .identificationType(
                        identificationTypeEntityToIdentificationTypeOutDto(participantEntity.getIdentificationType()))
                .name(participantEntity.getName())
                .shortName(participantEntity.getShortName())
                .type(typeEntityToTypeOutDto(participantEntity.getType()))
                .mnemonic(participantEntity.getMnemonic())
                .country(countryEntityToCountryOutDto(participantEntity.getCountry()))
                .registrationDate(participantEntity.getRegistrationDate())
                .taxCode(participantEntity.getTaxCode())
                .department(departmentEntityToDepartmentOutDto(participantEntity.getDepartment()))
                .mainAddress(participantEntity.getMainAddress())
                .webPage(participantEntity.getWebPage())
                .phoneNumber(participantEntity.getPhoneNumber())
                .status(statusEntityToStatusOutDto(participantEntity.getStatus()))
                .nitClearingHouse(participantEntity.getNitClearingHouse())
                .taxStatus(taxStatusEntityToTaxStatusOutDto(participantEntity.getTaxStatus()))
                .typeEntity(participantEntity.getTypeEntity())
                .marginAccount(participantEntity.getMarginAccount())
                .masterAccount(participantEntity.getMasterAccount())
                .directAllocation(participantEntity.getDirectAllocation())
                .marketMaker(participantEntity.getMarketMaker())
                .enabled(participantEntity.getEnabled())
                .custodian(participantEntity.getCustodian())
                .build();
    }

    public static TradeEquityOutDto tradeEquityEntityToTradeEquityOutDto(TradeEquityEntity tradeEquityEntity) {
        return TradeEquityOutDto.builder()
                .tradeId(tradeEquityEntity.getTradeId())
                .foreignBrokerBuy(tradeEquityEntity.getForeignBrokerBuy())
                .foreignBrokerSell(tradeEquityEntity.getForeignBrokerSell())
                .directDepositorBuy(tradeEquityEntity.getDirectDepositorBuy())
                .directDepositorSell(tradeEquityEntity.getDirectDepositorSell())
                .sourceIndicatorBuy(tradeEquityEntity.getSourceIndicatorBuy())
                .sourceIndicatorSell(tradeEquityEntity.getSourceIndicatorSell())
                .responsibleTradeBuy(tradeEquityEntity.getResponsibleTradeBuy())
                .responsibleTradeSell(tradeEquityEntity.getResponsibleTradeSell())
                .referenceBuy(tradeEquityEntity.getReferenceBuy())
                .referenceSell(tradeEquityEntity.getReferenceSell())
                .orderBookId(tradeEquityEntity.getOrderBookId())
                .prearrangedOperation(tradeEquityEntity.getPrearrangedOperation())
                .aggressiveTip(tradeEquityEntity.getAggressiveTip())
                .exdividendPeriod(tradeEquityEntity.getExdividendPeriod())
                .build();
    }

    public static SettlementOutDto settlementEntityToSettlementOutDto(SettlementEntity settlementEntity) {
        var trade = settlementEntity.getTrade();
        var sideId = settlementEntity.getSide() != null ? settlementEntity.getSide().getId() : null;
        var sourceQuoteFromTrade = (sideId != null && sideId.equals(SideEnum.BUY.getValue()))
                ? (trade != null ? trade.getSourceQuoteBuyType() : null)
                : (sideId != null && sideId.equals(SideEnum.SELL.getValue()))
                        ? (trade != null ? trade.getSourceQuoteSellType() : null)
                        : null;

        return SettlementOutDto.builder()
                .tradeId(settlementEntity.getTrade().getId())
                .fraction(settlementEntity.getFraction())
                .side(sideEntityToSideOutDto(settlementEntity.getSide()))
                .investor(investorEntityToInvestorOutDto(settlementEntity.getInvestor()))// RTBOF-6147
                .investorAccount(investorAccountEntityToInvestorAccountOutDto(settlementEntity.getInvestorAccount()))
                .participantAccount(
                        participantAccountEntityToParticipantAccountOutDto(settlementEntity.getParticipantAccount()))
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
                .tradingSystem(tradingSystemEntityToTradingSystemOutDto(settlementEntity.getTradingSystem()))
                .status(statusEntityToStatusOutDto(settlementEntity.getStatus()))
                .brokerageService(settlementEntity.getBrokerageService())
                .custodianId(ObjectUtils.isEmpty(settlementEntity.getCustodian()) ? null
                        : settlementEntity.getCustodian().getId())
                .custodian(participantEntityToParticipantOutDto(settlementEntity.getCustodian()))
                .bankAccountId(settlementEntity.getBankAccountId())
                .reference(settlementEntity.getReference())
                .capitalGainValue(settlementEntity.getCapitalGainValue())
                .disbursementValue(settlementEntity.getDisbursementValue())
                .sourceQuoteType(typeEntityToTypeOutDto(sourceQuoteFromTrade))// RTBOF-6147
                .ficAdministratorId(settlementEntity.getFicAdministratorId())
                .directDepositor(participantEntityToParticipantOutDto(settlementEntity.getDirectDepositor()))
                .build();
    }

    public static InvestorOutDto investorEntityToInvestorOutDto(InvestorEntity investorEntity) {
        if (ObjectUtils.isEmpty(investorEntity))
            return null;
        return InvestorOutDto.builder()
                .id(investorEntity.getId())
                .code(investorEntity.getCode())
                .firstName(investorEntity.getFirstName())
                .lastName(investorEntity.getLastName())
                .companyName(investorEntity.getCompanyName())
                .type(typeEntityToTypeOutDto(investorEntity.getType()))
                .status(statusEntityToStatusOutDto(investorEntity.getStatus()))
                .country(countryEntityToCountryOutDto(investorEntity.getCountry()))
                .department(departmentEntityToDepartmentOutDto(investorEntity.getDepartment()))
                .city(cityEntityToCityOutDto(investorEntity.getCity()))
                .documentNumber(investorEntity.getDocumentNumber())
                .identificationType(
                        identificationTypeEntityToIdentificationTypeOutDto(investorEntity.getIdentificationType()))
                .nationality(investorEntity.getNationality())
                .address(investorEntity.getAddress())
                .phoneNumber(investorEntity.getPhoneNumber())
                .email(investorEntity.getEmail())
                .clearinghouseCode(investorEntity.getClearinghouseCode())
                .gics(gicsEntityToGicsOutDto(investorEntity.getGics()))
                .moneyLaunderingFlag(investorEntity.getMoneyLaunderingFlag())
                .taxStatus(taxStatusEntityToTaxStatusOutDto(investorEntity.getTaxStatus()))
                .build();
    }

    public static InvestorAccountOutDto investorAccountEntityToInvestorAccountOutDto(
            InvestorAccountEntity investorAccountEntity) {
        if (ObjectUtils.isEmpty(investorAccountEntity))
            return null;
        return InvestorAccountOutDto.builder()
                .id(investorAccountEntity.getId())
                .investor(investorEntityToInvestorOutDto(investorAccountEntity.getInvestor()))
                .accountNumber(investorAccountEntity.getAccountNumber())
                .status(statusEntityToStatusOutDto(investorAccountEntity.getStatus()))
                .type(typeEntityToTypeOutDto(investorAccountEntity.getType()))
                .originType(typeEntityToTypeOutDto(investorAccountEntity.getOriginType()))
                .depository(depositoryEntityToDepositoryOutDto(investorAccountEntity.getDepository()))
                .participant(participantEntityToParticipantOutDto(investorAccountEntity.getParticipant()))
                .build();
    }

    public static ParticipantAccountOutDto participantAccountEntityToParticipantAccountOutDto(
            ParticipantAccountEntity participantAccountEntity) {
        if (ObjectUtils.isEmpty(participantAccountEntity))
            return null;
        return ParticipantAccountOutDto.builder()
                .id(participantAccountEntity.getId())
                .participant(participantEntityToParticipantOutDto(participantAccountEntity.getParticipant()))
                .accountNumber(participantAccountEntity.getAccountNumber())
                .status(statusEntityToStatusOutDto(participantAccountEntity.getStatus()))
                .type(typeEntityToTypeOutDto(participantAccountEntity.getType()))
                .originType(typeEntityToTypeOutDto(participantAccountEntity.getOriginType()))
                .build();
    }

    public static DepositoryOutDto depositoryEntityToDepositoryOutDto(DepositoryEntity depositoryEntity) {
        if (ObjectUtils.isEmpty(depositoryEntity))
            return null;
        return DepositoryOutDto.builder()
                .id(depositoryEntity.getId())
                .description(depositoryEntity.getDescription())
                .build();
    }

    public static MarketOutDto marketEntityToMarketOutDto(MarketEntity marketEntity) {
        if (ObjectUtils.isEmpty(marketEntity))
            return null;
        return MarketOutDto.builder()
                .id(marketEntity.getId())
                .description(marketEntity.getDescription())
                .category(marketEntity.getCategory())
                .build();
    }

    public static StatusOutDto statusEntityToStatusOutDto(StatusEntity statusEntity) {
        if (ObjectUtils.isEmpty(statusEntity))
            return null;
        return StatusOutDto.builder()
                .id(statusEntity.getId())
                .description(statusEntity.getDescription())
                .category(statusEntity.getCategory())
                .build();
    }

    public static TypeOutDto typeEntityToTypeOutDto(TypeEntity typeEntity) {
        if (ObjectUtils.isEmpty(typeEntity))
            return null;
        return TypeOutDto.builder()
                .id(typeEntity.getId())
                .description(typeEntity.getDescription())
                .category(typeEntity.getCategory())
                .build();
    }

    public static CfiOutDto cfiEntityToCfiOutDto(CfiEntity cfiEntity) {
        if (ObjectUtils.isEmpty(cfiEntity))
            return null;
        return CfiOutDto.builder()
                .id(cfiEntity.getId())
                .description(cfiEntity.getDescription())
                .build();
    }

    public static SideOutDto sideEntityToSideOutDto(SideEntity sideEntity) {
        if (ObjectUtils.isEmpty(sideEntity))
            return null;
        return SideOutDto.builder()
                .id(sideEntity.getId())
                .description(sideEntity.getDescription())
                .build();
    }

    public static DepartmentOutDto departmentEntityToDepartmentOutDto(DepartmentEntity departmentEntity) {
        if (ObjectUtils.isEmpty(departmentEntity))
            return null;
        return DepartmentOutDto.builder()
                .id(departmentEntity.getId())
                .description(departmentEntity.getDescription())
                .build();
    }

    public static CityOutDto cityEntityToCityOutDto(CityEntity cityEntity) {
        if (ObjectUtils.isEmpty(cityEntity))
            return null;
        return CityOutDto.builder()
                .id(cityEntity.getId())
                .description(cityEntity.getDescription())
                .build();
    }

    public static GicsOutDto gicsEntityToGicsOutDto(GicsEntity gicsEntity) {
        if (ObjectUtils.isEmpty(gicsEntity))
            return null;
        return GicsOutDto.builder()
                .id(gicsEntity.getId())
                .description(gicsEntity.getDescription())
                .build();
    }

    public static TaxStatusOutDto taxStatusEntityToTaxStatusOutDto(TaxStatusEntity taxStatusEntity) {
        if (ObjectUtils.isEmpty(taxStatusEntity))
            return null;
        return TaxStatusOutDto.builder()
                .id(taxStatusEntity.getId())
                .description(taxStatusEntity.getDescription())
                .build();
    }

    public static TradingSessionOutDto tradingSessionEntityToTradingSessionOutDto(
            TradingSessionEntity tradingSessionEntity) {
        if (ObjectUtils.isEmpty(tradingSessionEntity))
            return null;
        return TradingSessionOutDto.builder()
                .id(tradingSessionEntity.getId())
                .description(tradingSessionEntity.getDescription())
                .build();
    }

    public static TradingSystemOutDto tradingSystemEntityToTradingSystemOutDto(
            TradingSystemEntity tradingSystemEntity) {
        if (ObjectUtils.isEmpty(tradingSystemEntity))
            return null;
        return TradingSystemOutDto.builder()
                .id(tradingSystemEntity.getId())
                .description(tradingSystemEntity.getDescription())
                .build();
    }

    public static IdentificationTypeOutDto identificationTypeEntityToIdentificationTypeOutDto(
            IdentificationTypeEntity identificationTypeEntity) {
        if (ObjectUtils.isEmpty(identificationTypeEntity))
            return null;
        return IdentificationTypeOutDto.builder()
                .id(identificationTypeEntity.getId())
                .description(identificationTypeEntity.getDescription())
                .build();
    }

    public static AllTradeOutDto tradeEntityToAllTradeOutDto(
            TradeEntity tradeEntity, TradeEquityEntity tradeEquityEntity, List<SettlementEntity> settlementEntityList) {
        return AllTradeOutDto.builder()
                .trade(tradeEntityToTradeOutDto(tradeEntity))
                .tradeEquity(ObjectUtils.isEmpty(tradeEntity) ? null
                        : tradeEquityEntityToTradeEquityOutDto(tradeEquityEntity))
                .settlement(settlementEntityList.stream()
                        .map(MapperUtil::settlementEntityToSettlementOutDto)
                        .toList())
                .build();
    }

    public static CalculationOutDto settleAccountsOutDtoToCalculationOutDto(SettleAccountsOutDto settleAccountsOutDto) {
        return CalculationOutDto.builder()
                .amount(settleAccountsOutDto.getAmount())
                .commissionAmount(settleAccountsOutDto.getCommissionAmount())
                .valTaxAmount(settleAccountsOutDto.getValTaxAmount())
                .netAmount(settleAccountsOutDto.getNetAmount())
                .transferValue(settleAccountsOutDto.getTransferValue())
                .build();
    }

    public static ClassOutDto classEntityToClassOutDto(ClassEntity classEntity) {
        if (ObjectUtils.isEmpty(classEntity))
            return null;
        return ClassOutDto.builder()
                .id(classEntity.getId())
                .description(classEntity.getDescription())
                .category(classEntity.getCategory())
                .build();
    }

}

```

## src/main/java/com/nubo/operations/api/helpers/QueryFilterBuilder.java

```java
package com.nubo.operations.api.helpers;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

import com.nubo.operations.api.models.domain.TradeParams;

import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class QueryFilterBuilder {

    private static final DateTimeFormatter DATE_FORMATTER = DateTimeFormatter.ofPattern("yyyy-MM-dd");
    private static final String MATCH_DATE_FIELD = "matchdate";
    private static final String CLEARING_DATE_FIELD = "clearingdate";

    public String buildMatchIdFilter(Long matchId) {
        return "@matchid:[" + matchId + " " + matchId + "]";
    }

    public String buildStatusFilter(Integer statusId) {
        return "@statusid:[" + statusId + " " + statusId + "]";
    }

    public String buildParticipantFilter(Long participantId) {
        return "(@participantbuyid:[" + participantId + " " + participantId + "]|@participantsellid:[" + participantId + " " + participantId + "])";
    }

    public String buildTypeFilter(Long typeId) {
        return "@typeid:[" + typeId + " " + typeId + "]";
    }

    public String buildCountryFilter(Long countryId) {
        return "@countryid:[" + countryId + " " + countryId + "]";
    }

    public String buildDateRangeFilter(LocalDate startDate, LocalDate endDate) {
        if (startDate != null && endDate != null) {
            String startStr = startDate.format(DATE_FORMATTER);
            String endStr = endDate.format(DATE_FORMATTER);
            return buildDateRangeFilter(MATCH_DATE_FIELD, startStr, endStr);
        } else if (startDate != null) {
            String startStr = startDate.format(DATE_FORMATTER);
            return buildDateTokenQuery(MATCH_DATE_FIELD, startStr);
        } else if (endDate != null) {
            String endStr = endDate.format(DATE_FORMATTER);
            return buildDateTokenQuery(MATCH_DATE_FIELD, endStr);
        }
        return null;
    }

    public String buildClearingDateFilter(LocalDate clearingDate) {
        if (clearingDate != null) {
            String dateStr = clearingDate.format(DATE_FORMATTER);
            return buildDateTokenQuery(CLEARING_DATE_FIELD, dateStr);
        }
        return null;
    }

    private String buildDateTokenQuery(String fieldName, String dateValue) {
        log.debug("Building date token query for field: {} with value: {}", fieldName, dateValue);

        if (dateValue.matches("\\d{4}-\\d{2}-\\d{2}")) {
            String[] parts = dateValue.split("-");
            String year = parts[0];
            String month = parts[1];
            String day = parts[2];

            String query = String.format("(@%s:*%s*) (@%s:*%s*) (@%s:*%s*)",
                           fieldName, year, fieldName, month, fieldName, day);
            log.debug("Generated date token query: {}", query);
            return query;
        }

        return "@" + fieldName + ":*" + dateValue + "*";
    }

    private String buildDateRangeFilter(String fieldName, String startDate, String endDate) {
        log.debug("Building date range filter for field: {} from {} to {}", fieldName, startDate, endDate);

        String[] startParts = startDate.split("-");
        String[] endParts = endDate.split("-");

        String startYear = startParts[0];
        String startMonth = startParts[1];
        String endYear = endParts[0];
        String endMonth = endParts[1];

        if (startYear.equals(endYear) && startMonth.equals(endMonth)) {
            String query = String.format("(@%s:*%s*) (@%s:*%s*)",
                           fieldName, startYear, fieldName, startMonth);
            log.debug("Generated same year-month range query: {}", query);
            return query;
        }

        if (startYear.equals(endYear)) {
            String query = String.format("@%s:*%s*", fieldName, startYear);
            log.debug("Generated same year range query: {}", query);
            return query;
        }

        String query = String.format("(@%s:*%s*|@%s:*%s*)",
                       fieldName, startYear, fieldName, endYear);
        log.debug("Generated multi-year range query: {}", query);
        return query;
    }

    public List<String> buildCommonFilters(TradeParams tradeParams) {
        List<String> filters = new ArrayList<>();

        if (tradeParams.matchId() != null) {
            filters.add(buildMatchIdFilter(tradeParams.matchId()));
        }

        if (tradeParams.statusId() != null) {
            filters.add(buildStatusFilter(tradeParams.statusId()));
        }

        if (tradeParams.participantId() != null) {
            filters.add(buildParticipantFilter(tradeParams.participantId()));
        }

        if (tradeParams.typeId() != null) {
            filters.add(buildTypeFilter(tradeParams.typeId()));
        }

        if (tradeParams.countryId() != null) {
            filters.add(buildCountryFilter(tradeParams.countryId()));
        }

        String dateRangeFilter = buildDateRangeFilter(tradeParams.startMatchDate(), tradeParams.endMatchDate());
        if (dateRangeFilter != null) {
            filters.add(dateRangeFilter);
        }

        String clearingDateFilter = buildClearingDateFilter(tradeParams.endClearingDate());
        if (clearingDateFilter != null) {
            filters.add(clearingDateFilter);
        }

        return filters;
    }
}

```

## src/main/java/com/nubo/operations/api/helpers/RedisMapperUtils.java

```java
package com.nubo.operations.api.helpers;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.OffsetDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.function.Function;

import org.springframework.stereotype.Component;

@Component
public class RedisMapperUtils {

    private RedisMapperUtils() {
    }

    public static final DateTimeFormatter DATE_FORMATTER = DateTimeFormatter.ofPattern("yyyy-MM-dd");
    public static final DateTimeFormatter DATETIME_FORMATTER = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss.SSS");

    public static class FilterContext {
        public final String redisFieldName;
        public final String fieldValue;
        public final boolean isNumericField;
        public final boolean isDateField;

        public FilterContext(String redisFieldName, String fieldValue, boolean isNumericField, boolean isDateField) {
            this.redisFieldName = redisFieldName;
            this.fieldValue = fieldValue;
            this.isNumericField = isNumericField;
            this.isDateField = isDateField;
        }
    }

    public static final Map<String, Function<FilterContext, String>> FILTER_STRATEGIES = Map.ofEntries(
        Map.entry("equals", RedisMapperUtils::buildEqualsFilter),
        Map.entry("contains", RedisMapperUtils::buildContainsFilter),
        Map.entry("greater_than", RedisMapperUtils::buildGreaterThanFilter),
        Map.entry("less_than", RedisMapperUtils::buildLessThanFilter),
        Map.entry("greater_than_or_equal", RedisMapperUtils::buildGreaterThanOrEqualFilter),
        Map.entry("less_than_or_equal", RedisMapperUtils::buildLessThanOrEqualFilter),
        Map.entry("starts_with", RedisMapperUtils::buildStartsWithFilter),
        Map.entry("ends_with", RedisMapperUtils::buildEndsWithFilter),
        Map.entry("not_equals", RedisMapperUtils::buildNotEqualsFilter),
        Map.entry("in", RedisMapperUtils::buildInFilter),
        Map.entry("not_in", RedisMapperUtils::buildNotInFilter),
        Map.entry("is_empty", RedisMapperUtils::buildIsEmptyFilter),
        Map.entry("is_not_empty", RedisMapperUtils::buildIsNotEmptyFilter),
        Map.entry("not_contains", RedisMapperUtils::buildNotContainsFilter)
    );

    public static String parseString(Object value) {
        return value != null ? value.toString() : null;
    }

    public static Long parseLong(Object value) {
        try {
            return value != null && !value.toString().isEmpty() ? Long.valueOf(value.toString()) : null;
        } catch (NumberFormatException e) {
            return null;
        }
    }

    public static Integer parseInt(Object value) {
        try {
            return value != null && !value.toString().isEmpty() ? Integer.valueOf(value.toString()) : null;
        } catch (NumberFormatException e) {
            return null;
        }
    }

    public static Boolean parseBoolean(Object value) {
        try {
            return value != null && !value.toString().isEmpty() ? Boolean.valueOf(value.toString()) : Boolean.FALSE;
        } catch (Exception e) {
            return Boolean.FALSE;
        }
    }

    public static BigDecimal parseBigDecimal(Object value) {
        try {
            return value != null && !value.toString().isEmpty() ? new BigDecimal(value.toString()) : null;
        } catch (NumberFormatException e) {
            return null;
        }
    }

    public static BigInteger parseBigInteger(Object value) {
        try {
            return value != null && !value.toString().isEmpty() ? new BigInteger(value.toString()) : null;
        } catch (NumberFormatException e) {
            return null;
        }
    }

    public static LocalDate parseLocalDate(Object value) {
        try {
            return value != null && !value.toString().isEmpty() ? LocalDate.parse(value.toString(), DATE_FORMATTER) : null;
        } catch (Exception e) {
            return null;
        }
    }

    public static LocalDateTime parseLocalDateTime(Object value) {
        try {
            return value != null && !value.toString().isEmpty()
                    ? LocalDateTime.parse(value.toString(), DATETIME_FORMATTER)
                    : null;
        } catch (Exception e) {
            return null;
        }
    }

    public static OffsetDateTime parseOffsetDateTime(Object value) {
        try {
            return value != null && !value.toString().isEmpty()
                    ? OffsetDateTime.parse(value.toString())
                    : null;
        } catch (Exception e) {
            return null;
        }
    }

    public static String buildEqualsFilter(FilterContext ctx, Set<String> tagFields) {
        if (ctx.isNumericField) {
            return "@" + ctx.redisFieldName + ":[" + ctx.fieldValue + " " + ctx.fieldValue + "]";
        } else if (ctx.isDateField) {
            String[] dateParts = ctx.fieldValue.split("-");
            if (dateParts.length == 3) {
                return "(@" + ctx.redisFieldName + ":*" + dateParts[0] + "*) " +
                       "(@" + ctx.redisFieldName + ":*" + dateParts[1] + "*) " +
                       "(@" + ctx.redisFieldName + ":*" + dateParts[2] + "*)";
            } else {
                return "@" + ctx.redisFieldName + ":*" + ctx.fieldValue + "*";
            }
        } else if (tagFields.contains(ctx.redisFieldName)) {
            return "@" + ctx.redisFieldName + ":{" + escapeTagValue(ctx.fieldValue) + "}";
        } else {
            return "@" + ctx.redisFieldName + ":" + escapeValue(ctx.fieldValue);
        }
    }

    public static String buildEqualsFilter(FilterContext ctx) {
        return buildEqualsFilter(ctx, Set.of());
    }

    public static String buildContainsFilter(FilterContext ctx, Set<String> tagFields) {
        if (ctx.isNumericField) {
            return "@" + ctx.redisFieldName + ":[" + ctx.fieldValue + " " + ctx.fieldValue + "]";
        } else if (tagFields.contains(ctx.redisFieldName)) {
            return "@" + ctx.redisFieldName + ":{*" + escapeTagValue(ctx.fieldValue) + "*}";
        } else {
            return "@" + ctx.redisFieldName + ":*" + ctx.fieldValue + "*";
        }
    }

    public static String buildContainsFilter(FilterContext ctx) {
        return buildContainsFilter(ctx, Set.of());
    }

    public static String buildNotContainsFilter(FilterContext ctx, Set<String> tagFields) {
        if (ctx.isNumericField) {
            return "-@" + ctx.redisFieldName + ":[" + ctx.fieldValue + " " + ctx.fieldValue + "]";
        } else if (tagFields.contains(ctx.redisFieldName)) {
            return "-@" + ctx.redisFieldName + ":{*" + escapeTagValue(ctx.fieldValue) + "*}";
        } else {
            return "-@" + ctx.redisFieldName + ":*" + ctx.fieldValue + "*";
        }
    }

    public static String buildNotContainsFilter(FilterContext ctx) {
        return buildNotContainsFilter(ctx, Set.of());
    }

    public static String buildGreaterThanFilter(FilterContext ctx) {
        return "@" + ctx.redisFieldName + ":[(" + ctx.fieldValue + " +inf]";
    }

    public static String buildLessThanFilter(FilterContext ctx) {
        return "@" + ctx.redisFieldName + ":[-inf (" + ctx.fieldValue + "]";
    }

    public static String buildGreaterThanOrEqualFilter(FilterContext ctx) {
        return "@" + ctx.redisFieldName + ":[" + ctx.fieldValue + " +inf]";
    }

    public static String buildLessThanOrEqualFilter(FilterContext ctx) {
        return "@" + ctx.redisFieldName + ":[-inf " + ctx.fieldValue + "]";
    }

    public static String buildStartsWithFilter(FilterContext ctx, Set<String> tagFields) {
        if (ctx.isNumericField) {
            return "@" + ctx.redisFieldName + ":[" + ctx.fieldValue + " " + ctx.fieldValue + "]";
        } else if (tagFields.contains(ctx.redisFieldName)) {
            return "@" + ctx.redisFieldName + ":{" + escapeTagValue(ctx.fieldValue) + "*}";
        } else {
            return "@" + ctx.redisFieldName + ":" + ctx.fieldValue + "*";
        }
    }

    public static String buildStartsWithFilter(FilterContext ctx) {
        return buildStartsWithFilter(ctx, Set.of());
    }

    public static String buildEndsWithFilter(FilterContext ctx, Set<String> tagFields) {
        if (ctx.isNumericField) {
            return "@" + ctx.redisFieldName + ":[" + ctx.fieldValue + " " + ctx.fieldValue + "]";
        } else if (tagFields.contains(ctx.redisFieldName)) {
            return "@" + ctx.redisFieldName + ":{*" + escapeTagValue(ctx.fieldValue) + "}";
        } else {
            return "@" + ctx.redisFieldName + ":*" + ctx.fieldValue;
        }
    }

    public static String buildEndsWithFilter(FilterContext ctx) {
        return buildEndsWithFilter(ctx, Set.of());
    }

    public static String buildNotEqualsFilter(FilterContext ctx, Set<String> tagFields) {
        if (ctx.isNumericField) {
            return "-@" + ctx.redisFieldName + ":[" + ctx.fieldValue + " " + ctx.fieldValue + "]";
        } else if (tagFields.contains(ctx.redisFieldName)) {
            return "-@" + ctx.redisFieldName + ":{" + escapeTagValue(ctx.fieldValue) + "}";
        } else {
            return "-@" + ctx.redisFieldName + ":" + escapeValue(ctx.fieldValue);
        }
    }

    public static String buildNotEqualsFilter(FilterContext ctx) {
        return buildNotEqualsFilter(ctx, Set.of());
    }

    public static String buildInFilter(FilterContext ctx, Set<String> tagFields) {
        String[] values = ctx.fieldValue.split(",");
        if (ctx.isNumericField) {
            List<String> inFilters = new ArrayList<>();
            for (String value : values) {
                inFilters.add("@" + ctx.redisFieldName + ":[" + value.trim() + " " + value.trim() + "]");
            }
            return "(" + String.join(" | ", inFilters) + ")";
        } else if (tagFields.contains(ctx.redisFieldName)) {
            List<String> escapedValues = new ArrayList<>();
            for (String value : values) {
                escapedValues.add(escapeTagValue(value.trim()));
            }
            return "@" + ctx.redisFieldName + ":{" + String.join("|", escapedValues) + "}";
        } else {
            List<String> inFilters = new ArrayList<>();
            for (String value : values) {
                inFilters.add("@" + ctx.redisFieldName + ":" + escapeValue(value.trim()));
            }
            return "(" + String.join(" | ", inFilters) + ")";
        }
    }

    public static String buildInFilter(FilterContext ctx) {
        return buildInFilter(ctx, Set.of());
    }

    public static String buildNotInFilter(FilterContext ctx, Set<String> tagFields) {
        String[] notValues = ctx.fieldValue.split(",");
        if (ctx.isNumericField) {
            List<String> notInFilters = new ArrayList<>();
            for (String value : notValues) {
                notInFilters.add("@" + ctx.redisFieldName + ":[" + value.trim() + " " + value.trim() + "]");
            }
            return "-(" + String.join(" | ", notInFilters) + ")";
        } else if (tagFields.contains(ctx.redisFieldName)) {
            List<String> escapedValues = new ArrayList<>();
            for (String value : notValues) {
                escapedValues.add(escapeTagValue(value.trim()));
            }
            return "-@" + ctx.redisFieldName + ":{" + String.join("|", escapedValues) + "}";
        } else {
            List<String> notInFilters = new ArrayList<>();
            for (String value : notValues) {
                notInFilters.add("@" + ctx.redisFieldName + ":" + escapeValue(value.trim()));
            }
            return "-(" + String.join(" | ", notInFilters) + ")";
        }
    }

    public static String buildNotInFilter(FilterContext ctx) {
        return buildNotInFilter(ctx, Set.of());
    }

    public static String buildIsEmptyFilter(FilterContext ctx, Set<String> tagFields) {
        if (tagFields.contains(ctx.redisFieldName)) {
            return "@" + ctx.redisFieldName + ":{null}";
        } else {
            return "@" + ctx.redisFieldName + ":\"null\"";
        }
    }

    public static String buildIsEmptyFilter(FilterContext ctx) {
        return buildIsEmptyFilter(ctx, Set.of());
    }

    public static String buildIsNotEmptyFilter(FilterContext ctx, Set<String> tagFields) {
        if (tagFields.contains(ctx.redisFieldName)) {
            return "-@" + ctx.redisFieldName + ":{null}";
        } else {
            return "-@" + ctx.redisFieldName + ":\"null\"";
        }
    }

    public static String buildIsNotEmptyFilter(FilterContext ctx) {
        return buildIsNotEmptyFilter(ctx, Set.of());
    }

    public static String escapeTagValue(String value) {
        return value.replace(",", "\\,")
                    .replace(".", "\\.")
                    .replace("<", "\\<")
                    .replace(">", "\\>")
                    .replace("{", "\\{")
                    .replace("}", "\\}")
                    .replace("[", "\\[")
                    .replace("]", "\\]")
                    .replace("\"", "\\\"")
                    .replace("'", "\\'")
                    .replace(":", "\\:")
                    .replace(";", "\\;")
                    .replace("!", "\\!")
                    .replace("@", "\\@")
                    .replace("#", "\\#")
                    .replace("$", "\\$")
                    .replace("%", "\\%")
                    .replace("^", "\\^")
                    .replace("&", "\\&")
                    .replace("*", "\\*")
                    .replace("(", "\\(")
                    .replace(")", "\\)")
                    .replace("-", "\\-")
                    .replace("+", "\\+")
                    .replace("=", "\\=")
                    .replace("~", "\\~");
    }

    public static String escapeValue(String value) {
        return "\"" + value.replace("\"", "\\\"") + "\"";
    }
}

```

## src/main/java/com/nubo/operations/api/helpers/SettlementDynamicSearchMapper.java

```java
package com.nubo.operations.api.helpers;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Map;
import java.util.function.Function;

import com.nubo.operations.api.models.entity.SettlementEntity;
import com.nubo.operations.api.models.enums.SearchOperationEnum;

import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.Path;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class SettlementDynamicSearchMapper {

    private static final String TRADE_FIELD = "trade";
    private static final String CUSTODIAN_FIELD = "custodian";
    private static final String INVESTOR_FIELD = "investor";
    private static final String ID_FIELD = "id";
    private static final String NAME_FIELD = "name";
    private static final String CODE_FIELD = "code";

    private enum ComparisonType {
        GREATER_THAN, GREATER_THAN_OR_EQUAL, LESS_THAN, LESS_THAN_OR_EQUAL
    }

    private static final Map<String, Function<Root<SettlementEntity>, Path<?>>> FIELD_PATH_MAPPING = Map.ofEntries(
        Map.entry("tradeId", root -> root.get(TRADE_FIELD).get(ID_FIELD)),
        Map.entry("fraction", root -> root.get("fraction")),
        Map.entry("fiduciarySpecialist", root -> root.get("fiduciarySpecialist")),
        Map.entry("reference", root -> root.get("reference")),
        Map.entry("fractionQuantity", root -> root.get("fractionQuantity")),
        Map.entry("commissionPercentage", root -> root.get("commissionPercentage")),
        Map.entry("commissionAmount", root -> root.get("commissionAmount")),
        Map.entry("valTaxAmount", root -> root.get("valTaxAmount")),
        Map.entry("netAmount", root -> root.get("netAmount")),
        Map.entry("amount", root -> root.get("netAmount")), 
        Map.entry("settlementAmount", root -> root.get("settlementAmount")),
        Map.entry("transferValue", root -> root.get("transferValue")),
        Map.entry("custodianId", root -> root.get(CUSTODIAN_FIELD).get(ID_FIELD)),
        Map.entry("custodianName", root -> root.get(CUSTODIAN_FIELD).get(NAME_FIELD)),
        Map.entry("custodianCode", root -> root.get(CUSTODIAN_FIELD).get(CODE_FIELD)),
        Map.entry("masterAccount", root -> root.get("participantAccount").get("participant").get("masterAccount")),
        Map.entry("investorId", root -> root.get(INVESTOR_FIELD).get(ID_FIELD)),
        Map.entry("investorFirstName", root -> root.get(INVESTOR_FIELD).get("firstName")),
        Map.entry("investorLastName", root -> root.get(INVESTOR_FIELD).get("lastName")),
        Map.entry("investorCompanyName", root -> root.get(INVESTOR_FIELD).get("companyName")),
        Map.entry("investorDocumentNumber", root -> root.get(INVESTOR_FIELD).get("documentNumber")),
        Map.entry("investorAccountNumber", root -> root.get("investorAccount").get("accountNumber")),
        Map.entry("tradeStatusId", root -> root.get(TRADE_FIELD).get("status").get(ID_FIELD)),
        Map.entry("tradeCanceledStatus", root -> root.get(TRADE_FIELD).get("canceledStatus")),
        Map.entry("tradeSpecialTradeId", root -> root.get(TRADE_FIELD).get("specialTradeId")),
        Map.entry("sideId", root -> root.get("side").get(ID_FIELD)),
        Map.entry("statusId", root -> root.get("status").get(ID_FIELD)),
        Map.entry("fractionVolume", root -> root.get("fractionVolume")),
        Map.entry("fundingAmount", root -> root.get("fundingAmount")),
        Map.entry("repoAmount", root -> root.get("repoAmount"))
    );

    private static final Map<Class<?>, Function<String, Object>> TYPE_PARSERS = Map.of(
        Long.class, Long::valueOf,
        long.class, Long::valueOf,
        Integer.class, Integer::valueOf,
        int.class, Integer::valueOf,
        Boolean.class, Boolean::valueOf,
        boolean.class, Boolean::valueOf,
        LocalDate.class, LocalDate::parse,
        LocalDateTime.class, LocalDateTime::parse,
        BigDecimal.class, BigDecimal::new,
        String.class, value -> value
    );

    @FunctionalInterface
    private interface PredicateBuilder {
        Predicate build(CriteriaBuilder criteriaBuilder, 
                       Path<?> fieldPath, 
                       String fieldValue);
    }

    private static final Map<SearchOperationEnum, PredicateBuilder> OPERATION_BUILDERS = Map.ofEntries(
        Map.entry(SearchOperationEnum.CONTAINS, (cb, path, value) -> {
            if (path.getJavaType() == String.class) {
                return cb.like(cb.lower(path.as(String.class)), "%" + value.toLowerCase() + "%");
            } else {
                // Para campos numéricos, usar conversión directa a string con CONCAT
                return cb.like(cb.concat("", path.as(String.class)), "%" + value + "%");
            }
        }),
        Map.entry(SearchOperationEnum.NOT_CONTAINS, (cb, path, value) -> {
            if (path.getJavaType() == String.class) {
                return cb.notLike(cb.lower(path.as(String.class)), "%" + value.toLowerCase() + "%");
            } else {
                // Para campos numéricos, usar conversión directa a string con CONCAT
                return cb.notLike(cb.concat("", path.as(String.class)), "%" + value + "%");
            }
        }),
        Map.entry(SearchOperationEnum.EQUALS, (cb, path, value) -> {
            Object parsedValue = parseFieldValue(path, value);
            if (path.getJavaType() == String.class) {
                return cb.equal(cb.lower(path.as(String.class)), parsedValue.toString().toLowerCase());
            }
            return cb.equal(path, parsedValue);
        }),
        Map.entry(SearchOperationEnum.NOT_EQUALS, (cb, path, value) -> {
            Object parsedValue = parseFieldValue(path, value);
            if (path.getJavaType() == String.class) {
                return cb.notEqual(cb.lower(path.as(String.class)), parsedValue.toString().toLowerCase());
            }
            return cb.notEqual(path, parsedValue);
        }),
        Map.entry(SearchOperationEnum.STARTS_WITH, (cb, path, value) -> {
            if (path.getJavaType() == String.class) {
                return cb.like(cb.lower(path.as(String.class)), value.toLowerCase() + "%");
            } else {
                // Para campos numéricos, usar conversión directa a string con CONCAT
                return cb.like(cb.concat("", path.as(String.class)), value + "%");
            }
        }),
        Map.entry(SearchOperationEnum.ENDS_WITH, (cb, path, value) -> {
            if (path.getJavaType() == String.class) {
                return cb.like(cb.lower(path.as(String.class)), "%" + value.toLowerCase());
            } else {
                // Para campos numéricos, usar conversión directa a string con CONCAT
                return cb.like(cb.concat("", path.as(String.class)), "%" + value);
            }
        }),
        Map.entry(SearchOperationEnum.GREATER_THAN, (cb, path, value) -> 
            buildComparisonPredicate(cb, path, value, ComparisonType.GREATER_THAN)),
        Map.entry(SearchOperationEnum.GREATER_THAN_OR_EQUAL, (cb, path, value) -> 
            buildComparisonPredicate(cb, path, value, ComparisonType.GREATER_THAN_OR_EQUAL)),
        Map.entry(SearchOperationEnum.LESS_THAN, (cb, path, value) -> 
            buildComparisonPredicate(cb, path, value, ComparisonType.LESS_THAN)),
        Map.entry(SearchOperationEnum.LESS_THAN_OR_EQUAL, (cb, path, value) -> 
            buildComparisonPredicate(cb, path, value, ComparisonType.LESS_THAN_OR_EQUAL)),
        Map.entry(SearchOperationEnum.IS_EMPTY, (cb, path, value) -> 
            cb.or(cb.isNull(path), cb.equal(path.as(String.class), ""))),
        Map.entry(SearchOperationEnum.IS_NOT_EMPTY, (cb, path, value) -> 
            cb.and(cb.isNotNull(path), cb.notEqual(path.as(String.class), ""))),
        Map.entry(SearchOperationEnum.IN, (cb, path, value) -> {
            String[] values = value.split(",");
            CriteriaBuilder.In<Object> inClause = cb.in(path);
            for (String val : values) {
                inClause.value(parseFieldValue(path, val.trim()));
            }
            return inClause;
        }),
        Map.entry(SearchOperationEnum.NOT_IN, (cb, path, value) -> {
            String[] values = value.split(",");
            CriteriaBuilder.In<Object> inClause = cb.in(path);
            for (String val : values) {
                inClause.value(parseFieldValue(path, val.trim()));
            }
            return inClause.not();
        }),
        Map.entry(SearchOperationEnum.IS_ANY_OF, (cb, path, value) -> {
            String[] values = value.split(",");
            CriteriaBuilder.In<Object> inClause = cb.in(path);
            for (String val : values) {
                inClause.value(parseFieldValue(path, val.trim()));
            }
            return inClause;
        })
    );

    @SuppressWarnings("unchecked")
    public static Path<Object> getSettlementFieldPath(Root<SettlementEntity> root, String fieldName) {
        try {
            Function<Root<SettlementEntity>, Path<?>> pathFunction = FIELD_PATH_MAPPING.get(fieldName);
            if (pathFunction != null) {
                return (Path<Object>) pathFunction.apply(root);
            }
            log.warn("Campo no reconocido en Settlement: {}", fieldName);
            return null;
        } catch (Exception e) {
            log.error("Error obteniendo ruta del campo {}: {}", fieldName, e.getMessage());
            return null;
        }
    }

    public static Predicate buildSettlementFieldPredicate(CriteriaBuilder criteriaBuilder, 
                                                         Path<?> fieldPath, 
                                                         String fieldValue, 
                                                         SearchOperationEnum operation) {
        try {
            PredicateBuilder builder = OPERATION_BUILDERS.get(operation);
            if (builder == null) {
                log.warn("Operación no soportada: {}", operation);
                return null;
            }

            return builder.build(criteriaBuilder, fieldPath, fieldValue);
        } catch (Exception e) {
            log.error("Error construyendo predicado para operación {}: {}", operation, e.getMessage());
            return null;
        }
    }

    public static Object parseFieldValue(Path<?> fieldPath, String value) {
        try {
            Class<?> fieldType = fieldPath.getJavaType();
            Function<String, Object> parser = TYPE_PARSERS.get(fieldType);
            return parser != null ? parser.apply(value) : value;
        } catch (IllegalArgumentException e) {
            log.warn("Error parseando valor {} para tipo {}: {}", value, fieldPath.getJavaType(), e.getMessage());
            return value;
        }
    }

    @SuppressWarnings("unchecked")
    private static Predicate buildComparisonPredicate(CriteriaBuilder criteriaBuilder, 
                                                     Path<?> fieldPath, 
                                                     String fieldValue, 
                                                     ComparisonType comparisonType) {
        try {
            Object parsedValue = parseFieldValue(fieldPath, fieldValue);
            Class<?> fieldType = fieldPath.getJavaType();
            
            if (Number.class.isAssignableFrom(fieldType) || fieldType.isPrimitive()) {
                Path<Number> numberPath = (Path<Number>) fieldPath;
                Number numberValue = (Number) parsedValue;
                
                return switch (comparisonType) {
                    case GREATER_THAN -> criteriaBuilder.gt(numberPath, numberValue);
                    case GREATER_THAN_OR_EQUAL -> criteriaBuilder.ge(numberPath, numberValue);
                    case LESS_THAN -> criteriaBuilder.lt(numberPath, numberValue);
                    case LESS_THAN_OR_EQUAL -> criteriaBuilder.le(numberPath, numberValue);
                };
            } else if (Comparable.class.isAssignableFrom(fieldType)) {
                Path<Comparable<Object>> comparablePath = (Path<Comparable<Object>>) fieldPath;
                Comparable<Object> comparableValue = (Comparable<Object>) parsedValue;
                
                return switch (comparisonType) {
                    case GREATER_THAN -> criteriaBuilder.greaterThan(comparablePath, comparableValue);
                    case GREATER_THAN_OR_EQUAL -> criteriaBuilder.greaterThanOrEqualTo(comparablePath, comparableValue);
                    case LESS_THAN -> criteriaBuilder.lessThan(comparablePath, comparableValue);
                    case LESS_THAN_OR_EQUAL -> criteriaBuilder.lessThanOrEqualTo(comparablePath, comparableValue);
                };
            } else {
                log.warn("Tipo de campo no soportado para comparación: {}", fieldType);
                return null;
            }
        } catch (Exception e) {
            log.error("Error en buildComparisonPredicate para tipo {}: {}", comparisonType, e.getMessage());
            return null;
        }
    }
}

```

## src/main/java/com/nubo/operations/api/helpers/SettlementRedisMapper.java

```java
package com.nubo.operations.api.helpers;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.function.Function;

import org.springframework.stereotype.Component;

import com.nubo.operations.api.models.dto.response.InvestorAccountOutDto;
import com.nubo.operations.api.models.dto.response.InvestorOutDto;
import com.nubo.operations.api.models.dto.response.ParticipantAccountOutDto;
import com.nubo.operations.api.models.dto.response.ParticipantOutDto;
import com.nubo.operations.api.models.dto.response.SettlementOutDto;
import com.nubo.operations.api.models.dto.response.SideOutDto;

import io.redisearch.Document;
import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class SettlementRedisMapper {

    public static final Set<String> NUMERIC_FIELDS = Set.of(
        "tradeid", "fraction", "fractionquantity", "commissionpercentage", "commissionamount",
        "valtaxamount", "netamount", "transfervalue", "custodianid", "investorid",
        "tradestatusid", "tradespecialtradeid", "sideid", "matchid", "quantity", "price",
        "volume", "repurchaserate", "repurchaseamount", "daystosettlement", "reporate",
        "repoamount", "fundingamount", "netoutflowtotal", "outflowturnovervalue",
        "totalnetreturn", "returnturnovervalue", "deliveryversuspaymentvalue",
        "advancestatus", "depositoryid", "countryid", "typeid", "marketid",
        "issuancemarketid", "securitytitlecurrencyid", "securitytitlesettlementperiod",
        "securitytitleparentid", "securitytitlecountryid", "securitytitleamountissued",
        "securitytitlesegmentid", "participantbuyid", "participantsellid",
        "custodianbuyid", "custodiansellid", "settlementparticipantaccountid",
        "settlementtradingsystemid", "settlementstatusid", "settlementdirectdepositorid",
        "statusid", "currencyid", "tradingsystemid", "tradingsessionid",
        "businesstypeid", "markettypeid", "origintypeid", "paymenttypeid",
        "settlementtypeid", "custodianstatusid", "tradesettlementstatusid", "bloquingstatusid"
    );

    public static final Set<String> TAG_FIELDS = Set.of(
        "fiduciaryspecialist", "reference", "custodianname", "custodianceode", "masteraccount",
        "investorfirstname", "investorlastname", "investorcompanyname", "investordocumentnumber",
        "investoraccountnumber", "tradecanceledstatus", "matchdate", "clearingdate",
        "returnclearingdate", "assignmentmarkbuy", "assignmentmarksell", "fractionalmarkbuy",
        "fractionalmarksell", "exitindicatorsettlement", "canceledstatus", "matchtime",
        "ownpositionsell", "ownpositionbuy", "repurchaseagreementdate", "reallocationindicator",
        "settlementindicatoroutgoing", "settlementindicatorreturn", "resettlementindicatoradvance",
        "salesguarantee", "purchaseguarantee", "purchasepaymentindicator", "returnindicatorsettlement",
        "tradelastmodifyuser", "tradelastmodifyapplic", "tradelastmodifydate", "tradelastmodifyip",
        "settlementvaltax", "settlementwithholdingtax", "settlementwithholdingtaxamount",
        "settlementissuedreceipt", "settlementissuedreceiptnumber", "settlementrepoamount",
        "settlementfundingamount", "settlementnetoutflowtotal", "settlementoutflowturnovervalue",
        "settlementreturnturnovervalue", "settlementdeliveryversuspaymentvalue", "settlementamount",
        "settlementbrokerageservice", "settlementbankaccountid", "settlementcapitalgainvalue",
        "settlementdisbursementvalue", "settlementficadministratorid", "settlementreporate",
        "settlementlatepenality", "settlementcustodianstatus", "settlementparticipantinstructionid",
        "settlementvalidationdate", "settlementmodifyapplic", "settlementmodifyip",
        "settlementmodifydate", "settlementmodifyuser", "settlementlastmodifyuser",
        "settlementlastmodifyapplic", "settlementlastmodifydate", "settlementlastmodifyip",
        "depositorydescription", "countrycode", "countryname", "countrytimezone",
        "typedescription", "typecategory", "marketdescription", "marketcategory",
        "issuancemarketdescription", "issuancemarketcategory", "securitytitleequitycode",
        "securitytitlemnemonic", "securitytitleisin", "securitytitlelistingdate",
        "securitytitledelistingdate", "securitytitleparent", "securitytitlecategory",
        "securitytitlepunishmentrepo", "securitytitleregulatorycode", "participantbuycode",
        "participantbuydocumentnumber", "participantbuyname", "participantbuyshortname",
        "participantbuymnemonic", "participantbuyregistrationdate", "participantbuytaxcode",
        "participantbuymainaddress", "participantbuywebpage", "participantbuyphonenumber",
        "participantbuynitclearinghouse", "participantbuytypeentity", "participantbuymarginaccount",
        "participantbuydirectallocation", "participantbuymarketmaker", "participantbuyenabled",
        "participantbuycustodian", "participantsellcode", "participantselldocumentnumber",
        "participantsellname", "participantsellshortname", "participantsellmnemonic",
        "participantsellregistrationdate", "participantselltaxcode", "participantsellmainaddress",
        "participantsellwebpage", "participantsellphonenumber", "participantsellnitclearinghouse",
        "participantselltypeentity", "participantsellmarginaccount", "participantselldirectallocation",
        "participantsellmarketmaker", "participantsellenabled", "participantsellcustodian",
        "custodianbuycode", "custodianbuydocumentnumber", "custodianbuyname", "custodianbuyshortname",
        "custodianbuymnemonic", "custodianbuyregistrationdate", "custodianbuytaxcode",
        "custodianbuymainaddress", "custodianbuywebpage", "custodianbuyphonenumber",
        "custodianbuynitclearinghouse", "custodianbuytypeentity", "custodianbuymarginaccount",
        "custodianbuyenabled", "custodiansellcode", "custodianselldocumentnumber",
        "custodiansellname", "custodiansellshortname", "custodiansellmnemonic",
        "custodiansellregistrationdate", "custodianselltaxcode", "custodiansellmainaddress",
        "custodiansellwebpage", "custodiansellphonenumber", "custodiansellnitclearinghouse",
        "custodianselltypeentity", "custodiansellmarginaccount", "custodiansellencabled",
        "custodiansellcustodian", "settlementtradingsystemdescription", "settlementstatusdescription",
        "settlementstatuscategory", "settlementcustodiancode", "settlementcustodianshortname",
        "settlementsourcequotetypedescription", "settlementsourcequotetypecategory",
        "settlementdirectdepositorcode", "settlementdirectdepositorname", "settlementdirectdepositorshortname",
        "statusdescription", "statuscategory", "currencyname", "tradingsystemdescription",
        "tradingsessiondescription", "businesstypedescription", "businesstypecategory",
        "markettypedescription", "markettypecategory", "origintypedescription",
        "origintypecategory", "paymenttypedescription", "paymenttypecategory",
        "settlementtypedescription", "settlementtypecategory", "custodianstatusdescription",
        "custodianstatuscategory", "tradesettlementstatusdescription", "tradesettlementstatuscategory",
        "bloquingstatusdescription", "bloquingstatuscategory"
    );

    public static final Set<String> DATE_FIELDS = Set.of(
        "matchdate", "clearingdate", "returnclearingdate", "matchtime",
        "repurchaseagreementdate", "securitytitlelistingdate", "securitytitledelistingdate",
        "participantbuyregistrationdate", "participantsellregistrationdate",
        "custodianbuyregistrationdate", "custodiansellregistrationdate",
        "tradelastmodifydate", "settlementvalidationdate", "settlementmodifydate",
        "settlementlastmodifydate"
    );

    public static final Map<String, Function<RedisMapperUtils.FilterContext, String>> FILTER_STRATEGIES = Map.ofEntries(
        Map.entry("equals", ctx -> RedisMapperUtils.buildEqualsFilter(ctx, TAG_FIELDS)),
        Map.entry("contains", ctx -> RedisMapperUtils.buildContainsFilter(ctx, TAG_FIELDS)),
        Map.entry("greater_than", RedisMapperUtils::buildGreaterThanFilter),
        Map.entry("less_than", RedisMapperUtils::buildLessThanFilter),
        Map.entry("greater_than_or_equal", RedisMapperUtils::buildGreaterThanOrEqualFilter),
        Map.entry("less_than_or_equal", RedisMapperUtils::buildLessThanOrEqualFilter),
        Map.entry("starts_with", ctx -> RedisMapperUtils.buildStartsWithFilter(ctx, TAG_FIELDS)),
        Map.entry("ends_with", ctx -> RedisMapperUtils.buildEndsWithFilter(ctx, TAG_FIELDS)),
        Map.entry("not_equals", ctx -> RedisMapperUtils.buildNotEqualsFilter(ctx, TAG_FIELDS)),
        Map.entry("in", ctx -> RedisMapperUtils.buildInFilter(ctx, TAG_FIELDS)),
        Map.entry("not_in", ctx -> RedisMapperUtils.buildNotInFilter(ctx, TAG_FIELDS)),
        Map.entry("is_empty", ctx -> RedisMapperUtils.buildIsEmptyFilter(ctx, TAG_FIELDS)),
        Map.entry("is_not_empty", ctx -> RedisMapperUtils.buildIsNotEmptyFilter(ctx, TAG_FIELDS)),
        Map.entry("not_contains", ctx -> RedisMapperUtils.buildNotContainsFilter(ctx, TAG_FIELDS))
    );

    public static class FilterContext extends RedisMapperUtils.FilterContext {
        public FilterContext(String redisFieldName, String fieldValue, boolean isNumericField, boolean isDateField) {
            super(redisFieldName, fieldValue, isNumericField, isDateField);
        }
    }

    private static final Map<String, String> FIELD_NAME_TO_REDIS_MAPPING = Map.ofEntries(
        Map.entry("tradeId", "tradeid"),
        Map.entry("fraction", "fraction"),
        Map.entry("fiduciarySpecialist", "fiduciaryspecialist"),
        Map.entry("reference", "reference"),
        Map.entry("fractionQuantity", "fractionquantity"),
        Map.entry("commissionPercentage", "commissionpercentage"),
        Map.entry("commissionAmount", "commissionamount"),
        Map.entry("valTaxAmount", "valtaxamount"),
        Map.entry("netAmount", "netamount"),
        Map.entry("transferValue", "transfervalue"),
        Map.entry("custodianId", "custodianid"),
        Map.entry("custodianName", "custodianname"),
        Map.entry("custodianCode", "custodianceode"),
        Map.entry("masterAccount", "masteraccount"),
        Map.entry("investorId", "investorid"),
        Map.entry("investorFirstName", "investorfirstname"),
        Map.entry("investorLastName", "investorlastname"),
        Map.entry("investorCompanyName", "investorcompanyname"),
        Map.entry("investorDocumentNumber", "investordocumentnumber"),
        Map.entry("investorAccountNumber", "investoraccountnumber"),
        Map.entry("tradeStatusId", "tradestatusid"),
        Map.entry("tradeCanceledStatus", "tradecanceledstatus"),
        Map.entry("tradeSpecialTradeId", "tradespecialtradeid"),
        Map.entry("sideId", "sideid")
    );

    public String mapFieldNameToRedisField(String fieldName) {
        return FIELD_NAME_TO_REDIS_MAPPING.get(fieldName);
    }

    public List<SettlementOutDto> convertToSettlementOutDto(List<Document> documents) {
        List<SettlementOutDto> settlements = new ArrayList<>();
        
        for (Document doc : documents) {
            try {
                SettlementOutDto settlement = mapDocumentToSettlementOutDto(doc);
                settlements.add(settlement);
            } catch (Exception e) {
                log.warn("Error converting document to SettlementOutDto: {}", e.getMessage());
            }
        }
        
        return settlements;
    }

    private SettlementOutDto mapDocumentToSettlementOutDto(Document doc) {
        return SettlementOutDto.builder()
            .tradeId(RedisMapperUtils.parseLong(doc.get("tradeid")))
            .fraction(RedisMapperUtils.parseInt(doc.get("fraction")))
            .fiduciarySpecialist(RedisMapperUtils.parseBoolean(doc.get("fiduciaryspecialist")))
            .reference(RedisMapperUtils.parseString(doc.get("reference")))
            .fractionQuantity(RedisMapperUtils.parseBigDecimal(doc.get("fractionquantity")))
            .commissionPercentage(RedisMapperUtils.parseBigDecimal(doc.get("commissionpercentage")))
            .commissionAmount(RedisMapperUtils.parseBigDecimal(doc.get("commissionamount")))
            .valTaxAmount(RedisMapperUtils.parseBigDecimal(doc.get("valtaxamount")))
            .netAmount(RedisMapperUtils.parseBigDecimal(doc.get("netamount")))
            .transferValue(RedisMapperUtils.parseBigDecimal(doc.get("transfervalue")))
            .custodianId(RedisMapperUtils.parseLong(doc.get("custodianid")))
            .custodian(buildCustodianDto(doc))
            .investor(buildInvestorDto(doc))
            .investorAccount(buildInvestorAccountDto(doc))
            .participantAccount(buildParticipantAccountDto(doc))
            .side(buildSideDto(doc))
            .build();
    }

    private ParticipantOutDto buildCustodianDto(Document doc) {
        return ParticipantOutDto.builder()
            .id(RedisMapperUtils.parseLong(doc.get("custodianid")))
            .name(RedisMapperUtils.parseString(doc.get("custodianname")))
            .code(RedisMapperUtils.parseString(doc.get("custodianceode")))
            .build();
    }

    private InvestorOutDto buildInvestorDto(Document doc) {
        return InvestorOutDto.builder()
            .id(RedisMapperUtils.parseLong(doc.get("investorid")))
            .firstName(RedisMapperUtils.parseString(doc.get("investorfirstname")))
            .lastName(RedisMapperUtils.parseString(doc.get("investorlastname")))
            .companyName(RedisMapperUtils.parseString(doc.get("investorcompanyname")))
            .documentNumber(RedisMapperUtils.parseString(doc.get("investordocumentnumber")))
            .build();
    }

    private InvestorAccountOutDto buildInvestorAccountDto(Document doc) {
        return InvestorAccountOutDto.builder()
            .accountNumber(RedisMapperUtils.parseString(doc.get("investoraccountnumber")))
            .build();
    }

    private ParticipantAccountOutDto buildParticipantAccountDto(Document doc) {
        return ParticipantAccountOutDto.builder()
            .participant(buildParticipantDto(doc))
            .build();
    }

    private ParticipantOutDto buildParticipantDto(Document doc) {
        return ParticipantOutDto.builder()
            .masterAccount(RedisMapperUtils.parseString(doc.get("masteraccount")))
            .build();
    }

    private SideOutDto buildSideDto(Document doc) {
        return SideOutDto.builder()
            .id(RedisMapperUtils.parseString(doc.get("sideid")))
            .build();
    }
}

```

## src/main/java/com/nubo/operations/api/helpers/SettlementSpecificationBuilder.java

```java
package com.nubo.operations.api.helpers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.jpa.domain.Specification;

import com.nubo.operations.api.models.entity.SettlementEntity;
import com.nubo.operations.api.models.enums.SearchOperationEnum;

import jakarta.persistence.criteria.Path;

public class SettlementSpecificationBuilder {
    
    private static final String TRADE_FIELD = "trade";
    private static final String CUSTODIAN_FIELD = "custodian";
    private static final String INVESTOR_FIELD = "investor";
    private static final String ID_FIELD = "id";
    private static final String NAME_FIELD = "name";
    private static final String CODE_FIELD = "code";
    
    private final List<Specification<SettlementEntity>> specifications = new ArrayList<>();

    public static SettlementSpecificationBuilder builder() {
        return new SettlementSpecificationBuilder();
    }

    public SettlementSpecificationBuilder withTradeId(Long tradeId) {
        if (tradeId != null) {
            specifications.add((root, query, cb) -> 
                cb.equal(root.get(TRADE_FIELD).get(ID_FIELD), tradeId));
        }
        return this;
    }

    public SettlementSpecificationBuilder withSideId(String sideId) {
        if (sideId != null) {
            specifications.add((root, query, cb) -> 
                cb.equal(root.get("side").get(ID_FIELD), sideId));
        }
        return this;
    }

    public SettlementSpecificationBuilder withInvestorDocumentNumber(String investorDocumentNumber) {
        if (investorDocumentNumber != null) {
            specifications.add((root, query, cb) -> 
                cb.equal(root.get(INVESTOR_FIELD).get("documentNumber"), investorDocumentNumber));
        }
        return this;
    }

    public SettlementSpecificationBuilder withFiduciarySpecialist(Boolean fiduciarySpecialist) {
        if (fiduciarySpecialist != null) {
            specifications.add((root, query, cb) -> 
                cb.equal(root.get("fiduciarySpecialist"), fiduciarySpecialist));
        }
        return this;
    }

    public SettlementSpecificationBuilder withReference(String reference) {
        if (reference != null) {
            specifications.add((root, query, cb) -> 
                cb.like(cb.lower(root.get("reference")), "%" + reference.toLowerCase() + "%"));
        }
        return this;
    }

    public SettlementSpecificationBuilder withCustodianId(Long custodianId) {
        if (custodianId != null) {
            specifications.add((root, query, cb) -> 
                cb.equal(root.get(CUSTODIAN_FIELD).get(ID_FIELD), custodianId));
        }
        return this;
    }

    public SettlementSpecificationBuilder withCustodianName(String custodianName) {
        if (custodianName != null) {
            specifications.add((root, query, cb) -> 
                cb.like(cb.lower(root.get(CUSTODIAN_FIELD).get(NAME_FIELD)), "%" + custodianName.toLowerCase() + "%"));
        }
        return this;
    }

    public SettlementSpecificationBuilder withCustodianCode(String custodianCode) {
        if (custodianCode != null) {
            specifications.add((root, query, cb) -> 
                cb.equal(root.get(CUSTODIAN_FIELD).get(CODE_FIELD), custodianCode));
        }
        return this;
    }

    public SettlementSpecificationBuilder withInvestorId(Long investorId) {
        if (investorId != null) {
            specifications.add((root, query, cb) -> 
                cb.equal(root.get(INVESTOR_FIELD).get(ID_FIELD), investorId));
        }
        return this;
    }

    public SettlementSpecificationBuilder withInvestorAccountNumber(String accountNumber) {
        if (accountNumber != null) {
            specifications.add((root, query, cb) -> 
                cb.equal(root.get("investorAccount").get("accountNumber"), accountNumber));
        }
        return this;
    }

    public SettlementSpecificationBuilder withTradeStatusId(Long tradeStatusId) {
        if (tradeStatusId != null) {
            specifications.add((root, query, cb) -> 
                cb.equal(root.get(TRADE_FIELD).get("status").get(ID_FIELD), tradeStatusId));
        }
        return this;
    }

    public SettlementSpecificationBuilder withTradeCanceledStatus(String canceledStatus) {
        if (canceledStatus != null) {
            specifications.add((root, query, cb) -> 
                cb.equal(root.get(TRADE_FIELD).get("canceledStatus"), canceledStatus));
        }
        return this;
    }

    public SettlementSpecificationBuilder withTradeSpecialTradeId(String specialTradeId) {
        if (specialTradeId != null) {
            specifications.add((root, query, cb) -> 
                cb.equal(root.get(TRADE_FIELD).get("specialTradeId"), specialTradeId));
        }
        return this;
    }

    public SettlementSpecificationBuilder withDynamicFilter(String fieldName, String fieldValue, SearchOperationEnum operation) {
        if (fieldName != null && fieldValue != null && operation != null) {
            specifications.add((root, query, cb) -> {
                try {
                    Path<Object> fieldPath = SettlementDynamicSearchMapper.getSettlementFieldPath(root, fieldName);
                    if (fieldPath != null) {
                        return SettlementDynamicSearchMapper.buildSettlementFieldPredicate(cb, fieldPath, fieldValue, operation);
                    }
                    return cb.conjunction(); 
                } catch (Exception e) {
                    return cb.conjunction(); 
                }
            });
        }
        return this;
    }

    public Specification<SettlementEntity> build() {
        if (specifications.isEmpty()) {
            return (root, query, cb) -> cb.conjunction();
        }
        return specifications.stream()
                .reduce(Specification::and)
                .orElse((root, query, cb) -> cb.conjunction());
    }
}

```

## src/main/java/com/nubo/operations/api/helpers/SettlementSpecificationFactory.java

```java
package com.nubo.operations.api.helpers;

import org.springframework.data.jpa.domain.Specification;

import com.nubo.operations.api.models.entity.SettlementEntity;
import com.nubo.operations.api.models.enums.SearchOperationEnum;

import jakarta.persistence.criteria.Path;

public class SettlementSpecificationFactory {

    private SettlementSpecificationFactory() {
        throw new IllegalStateException("Utility class");
    }

    public static Specification<SettlementEntity> createStandardFilter(
            Long tradeId, String sideId, String investorDocumentNumber) {

        return SettlementSpecificationBuilder.builder()
                .withTradeId(tradeId)
                .withSideId(sideId)
                .withInvestorDocumentNumber(investorDocumentNumber)
                .build();
    }

    public static Specification<SettlementEntity> createDynamicFilter(
            String fieldName, String fieldValue, SearchOperationEnum operation) {

        return (root, query, cb) -> {
            try {
                Path<Object> fieldPath = SettlementDynamicSearchMapper.getSettlementFieldPath(root, fieldName);
                if (fieldPath != null) {
                    return SettlementDynamicSearchMapper.buildSettlementFieldPredicate(cb, fieldPath, fieldValue, operation);
                }
                return cb.conjunction();
            } catch (Exception e) {
                return cb.conjunction();
            }
        };
    }

    public static Specification<SettlementEntity> createCombinedFilter(
            Long tradeId, String sideId, String investorDocumentNumber,
            String fieldName, String fieldValue, SearchOperationEnum operation) {

        return SettlementSpecificationBuilder.builder()
                .withTradeId(tradeId)
                .withSideId(sideId)
                .withInvestorDocumentNumber(investorDocumentNumber)
                .withDynamicFilter(fieldName, fieldValue, operation)
                .build();
    }

    public static Specification<SettlementEntity> createTradeFilter(Long tradeId) {
        return SettlementSpecificationBuilder.builder()
                .withTradeId(tradeId)
                .build();
    }

    public static Specification<SettlementEntity> createInvestorFilter(Long investorId, String documentNumber) {
        return SettlementSpecificationBuilder.builder()
                .withInvestorId(investorId)
                .withInvestorDocumentNumber(documentNumber)
                .build();
    }

    public static Specification<SettlementEntity> createCustodianFilter(Long custodianId, String custodianCode) {
        return SettlementSpecificationBuilder.builder()
                .withCustodianId(custodianId)
                .withCustodianCode(custodianCode)
                .build();
    }

    public static Specification<SettlementEntity> createAdvancedFilter(
            Long tradeId, String sideId, String investorDocumentNumber,
            Boolean fiduciarySpecialist, String reference, Long custodianId) {

        return SettlementSpecificationBuilder.builder()
                .withTradeId(tradeId)
                .withSideId(sideId)
                .withInvestorDocumentNumber(investorDocumentNumber)
                .withFiduciarySpecialist(fiduciarySpecialist)
                .withReference(reference)
                .withCustodianId(custodianId)
                .build();
    }
}

```

## src/main/java/com/nubo/operations/api/helpers/TradeRedisMapper.java

```java
package com.nubo.operations.api.helpers;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.function.Function;

import org.springframework.stereotype.Component;

import com.nubo.operations.api.models.dto.response.CountryOutDto;
import com.nubo.operations.api.models.dto.response.CurrencyOutDto;
import com.nubo.operations.api.models.dto.response.MarketOutDto;
import com.nubo.operations.api.models.dto.response.ParticipantOutDto;
import com.nubo.operations.api.models.dto.response.SecurityTitleOutDto;
import com.nubo.operations.api.models.dto.response.StatusOutDto;
import com.nubo.operations.api.models.dto.response.TradeOutDto;
import com.nubo.operations.api.models.dto.response.TradingSessionOutDto;
import com.nubo.operations.api.models.dto.response.TradingSystemOutDto;
import com.nubo.operations.api.models.dto.response.TypeOutDto;

import io.redisearch.Document;
import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class TradeRedisMapper {

    public static final Set<String> NUMERIC_FIELDS = Set.of(
        "tradeid", "matchid", "quantity", "price", "volume",
        "repurchaserate", "repurchaseamount", "daystosettlement", "reporate", "repoamount",
        "fundingamount", "netoutflowtotal", "outflowturnovervalue", "totalnetreturn",
        "returnturnovervalue", "deliveryversuspaymentvalue", "advancestatus",
        "depositoryid", "countryid", "typeid", "marketid", "issuancemarketid",
        "securitytitlecurrencyid", "securitytitlesettlementperiod", "securitytitleparentid",
        "securitytitlecountryid", "securitytitleamountissued", "securitytitlesegmentid",
        "participantbuyid", "participantsellid", "custodianbuyid", "custodiansellid",
        "statusid", "currencyid", "tradingsystemid", "tradingsessionid",
        "businesstypeid", "markettypeid", "origintypeid", "paymenttypeid",
        "settlementtypeid", "custodianstatusid", "settlementstatusid", "bloquingstatusid"
    );

    public static final Set<String> TAG_FIELDS = Set.of(
        "countryname", "countrycode", "countrytimezone", "depositorydescription",
        "typedescription", "typecategory", "marketdescription", "marketcategory",
        "issuancemarketdescription", "issuancemarketcategory", "securitytitleequitycode",
        "securitytitlemnemonic", "securitytitleisin", "securitytitlesettlementperiod",
        "securitytitleparent", "securitytitleregulatorycode", "participantbuycode",
        "participantbuydocumentnumber", "participantbuyname", "participantbuyshortname",
        "participantbuymnemonic", "participantbuytaxcode", "participantbuymainaddress",
        "participantbuywebpage", "participantbuyphonenumber", "participantbuynitclearinghouse",
        "participantbuytypeentity", "participantbuymarginaccount", "participantbuymasteraccount",
        "participantbuydirectallocation", "participantbuymarketmaker", "participantbuyenabled",
        "participantbuycustodian", "participantsellcode", "participantselldocumentnumber",
        "participantsellname", "participantsellshortname", "participantsellmnemonic",
        "participantselltaxcode", "participantsellmainaddress", "participantsellwebpage",
        "participantsellphonenumber", "participantsellnitclearinghouse", "participantselltypeentity",
        "participantsellmarginaccount", "participantsellmasteraccount", "participantselldirectallocation",
        "participantsellmarketmaker", "participantsellenabled", "participantsellcustodian",
        "statusdescription", "statuscategory", "currencycode", "currencyname",
        "tradingsystemdescription", "tradingsessiondescription", "businesstypedescription",
        "businesstypecategory", "markettypedescription", "markettypecategory",
        "origintypedescription", "origintypecategory", "tradelastmodifyuser",
        "tradelastmodifyapplic", "tradelastmodifyip"
    );

    public static final Set<String> DATE_FIELDS = Set.of(
        "matchdate", "clearingdate", "returnclearingdate", "matchtime",
        "repurchaseagreementdate", "securitytitlelistingdate", "securitytitledelistingdate",
        "participantbuyregistrationdate", "participantsellregistrationdate",
        "custodianbuyregistrationdate", "custodiansellregistrationdate",
        "tradelastmodifydate"
    );

    public static final Map<String, Function<RedisMapperUtils.FilterContext, String>> FILTER_STRATEGIES = Map.ofEntries(
        Map.entry("equals", ctx -> RedisMapperUtils.buildEqualsFilter(ctx, TAG_FIELDS)),
        Map.entry("contains", ctx -> RedisMapperUtils.buildContainsFilter(ctx, TAG_FIELDS)),
        Map.entry("greater_than", RedisMapperUtils::buildGreaterThanFilter),
        Map.entry("less_than", RedisMapperUtils::buildLessThanFilter),
        Map.entry("greater_than_or_equal", RedisMapperUtils::buildGreaterThanOrEqualFilter),
        Map.entry("less_than_or_equal", RedisMapperUtils::buildLessThanOrEqualFilter),
        Map.entry("starts_with", ctx -> RedisMapperUtils.buildStartsWithFilter(ctx, TAG_FIELDS)),
        Map.entry("ends_with", ctx -> RedisMapperUtils.buildEndsWithFilter(ctx, TAG_FIELDS)),
        Map.entry("not_equals", ctx -> RedisMapperUtils.buildNotEqualsFilter(ctx, TAG_FIELDS)),
        Map.entry("in", ctx -> RedisMapperUtils.buildInFilter(ctx, TAG_FIELDS)),
        Map.entry("not_in", ctx -> RedisMapperUtils.buildNotInFilter(ctx, TAG_FIELDS)),
        Map.entry("is_empty", ctx -> RedisMapperUtils.buildIsEmptyFilter(ctx, TAG_FIELDS)),
        Map.entry("is_not_empty", ctx -> RedisMapperUtils.buildIsNotEmptyFilter(ctx, TAG_FIELDS)),
        Map.entry("not_contains", ctx -> RedisMapperUtils.buildNotContainsFilter(ctx, TAG_FIELDS))
    );

    public static class FilterContext extends RedisMapperUtils.FilterContext {
        public FilterContext(String redisFieldName, String fieldValue, boolean isNumericField, boolean isDateField) {
            super(redisFieldName, fieldValue, isNumericField, isDateField);
        }
    }

    private static final Map<String, String> FIELD_NAME_TO_REDIS_MAPPING = Map.ofEntries(
    Map.entry("id", "tradeid"),
    Map.entry("tradeId", "tradeid"),
    Map.entry("matchDate", "matchdate"),
    Map.entry("matchId", "matchid"),
    Map.entry("clearingDate", "clearingdate"),
    Map.entry("returnClearingDate", "returnclearingdate"),
    Map.entry("assignmentMarkBuy", "assignmentmarkbuy"),
    Map.entry("assignmentMarkSell", "assignmentmarksell"),
    Map.entry("fractionalMarkBuy", "fractionalmarkbuy"),
    Map.entry("fractionalMarkSell", "fractionalmarksell"),
    Map.entry("advanceStatus", "advancestatus"),
    Map.entry("exitIndicatorSettlement", "exitindicatorsettlement"),
    Map.entry("canceledStatus", "canceledstatus"),
    Map.entry("quantity", "quantity"),
    Map.entry("price", "price"),
    Map.entry("volume", "volume"),
    Map.entry("repurchaseRate", "repurchaserate"),
    Map.entry("repurchaseAmount", "repurchaseamount"),
    Map.entry("matchTime", "matchtime"),
    Map.entry("ownPositionSell", "ownpositionsell"),
    Map.entry("ownPositionBuy", "ownpositionbuy"),
    Map.entry("repurchaseAgreementDate", "repurchaseagreementdate"),
    Map.entry("daysToSettlement", "daystosettlement"),
    Map.entry("repoRate", "reporate"),
    Map.entry("repoAmount", "repoamount"),
    Map.entry("fundingAmount", "fundingamount"),
    Map.entry("netOutFlowTotal", "netoutflowtotal"),
    Map.entry("outFlowTurnOverValue", "outflowturnovervalue"),
    Map.entry("totalNetReturn", "totalnetreturn"),
    Map.entry("returnTurnoverValue", "returnturnovervalue"),
    Map.entry("deliveryVersusPaymentValue", "deliveryversuspaymentvalue"),
    Map.entry("reallocationIndicator", "reallocationindicator"),
    Map.entry("settlementIndicatorOutgoing", "settlementindicatoroutgoing"),
    Map.entry("settlementIndicatorReturn", "settlementindicatorreturn"),
    Map.entry("resettlementIndicatorAdvance", "resettlementindicatoradvance"),
    Map.entry("specialTradeId", "specialtradeid"),
    Map.entry("salesGuarantee", "salesguarantee"),
    Map.entry("purchaseGuarantee", "purchaseguarantee"),
    Map.entry("purchasePaymentIndicator", "purchasepaymentindicator"),
    Map.entry("returnIndicatorSettlement", "returnindicatorsettlement"),
    Map.entry("depositoryId", "depositoryid"),
    Map.entry("depositoryName", "depositorydescription"),
    Map.entry("countryId", "countryid"),
    Map.entry("countryName", "countryname"),
    Map.entry("countryCode", "countrycode"),
    Map.entry("typeId", "typeid"),
    Map.entry("typeDescription", "typedescription"),
    Map.entry("marketId", "marketid"),
    Map.entry("marketDescription", "marketdescription"),
    Map.entry("issuanceMarketId", "issuancemarketid"),
    Map.entry("issuanceMarketDescription", "issuancemarketdescription"),
    Map.entry("securityTitleId", "securitytitleequitycode"),
    Map.entry("securityTitleIsin", "securitytitleisin"),
    Map.entry("securityTitleMnemonic", "securitytitlemnemonic"),
    Map.entry("participantBuyId", "participantbuyid"),
    Map.entry("participantBuyName", "participantbuyname"),
    Map.entry("participantSellId", "participantsellid"),
    Map.entry("participantSellName", "participantsellname"),
    Map.entry("custodianBuyId", "custodianbuyid"),
    Map.entry("custodianBuyName", "custodianbuyname"),
    Map.entry("custodianSellId", "custodiansellid"),
    Map.entry("custodianSellName", "custodiansellname"),
    Map.entry("statusId", "statusid"),
    Map.entry("statusDescription", "statusdescription"),
    Map.entry("currencyId", "currencyid"),
    Map.entry("currencyCode", "currencycode"),
    Map.entry("currencyName", "currencyname"),
    Map.entry("tradingSystemId", "tradingsystemid"),
    Map.entry("tradingSystemDescription", "tradingsystemdescription"),
    Map.entry("tradingSessionId", "tradingsessionid"),
    Map.entry("tradingSessionDescription", "tradingsessiondescription"),
    Map.entry("businessTypeId", "businesstypeid"),
    Map.entry("businessTypeDescription", "businesstypedescription"),
    Map.entry("marketTypeId", "markettypeid"),
    Map.entry("marketTypeDescription", "markettypedescription"),
    Map.entry("originTypeId", "origintypeid"),
    Map.entry("originTypeDescription", "origintypedescription"),
    Map.entry("paymentTypeId", "paymenttypeid"),
    Map.entry("paymentTypeDescription", "paymenttypedescription"),
    Map.entry("settlementTypeId", "settlementtypeid"),
    Map.entry("settlementTypeDescription", "settlementtypedescription"),
    Map.entry("custodianStatusId", "custodianstatusid"),
    Map.entry("custodianStatusDescription", "custodianstatusdescription"),
    Map.entry("settlementStatusId", "settlementstatusid"),
    Map.entry("settlementStatusDescription", "settlementstatusdescription"),
    Map.entry("bloquingStatusId", "bloquingstatusid"),
    Map.entry("bloquingStatusDescription", "bloquingstatusdescription")
);

    public String mapFieldNameToRedisField(String fieldName) {
        return FIELD_NAME_TO_REDIS_MAPPING.get(fieldName);
    }

    public List<TradeOutDto> convertToTradeOutDto(List<Document> documents) {
        List<TradeOutDto> trades = new ArrayList<>();

        for (Document doc : documents) {
            try {
                TradeOutDto trade = mapDocumentToTradeOutDto(doc);
                trades.add(trade);
            } catch (Exception e) {
                log.warn("Error converting document to TradeOutDto: {}", e.getMessage());
            }
        }

        return trades;
    }

    private TradeOutDto mapDocumentToTradeOutDto(Document doc) {
        return TradeOutDto.builder()
            .id(RedisMapperUtils.parseLong(doc.get("tradeid")))
            .matchDate(RedisMapperUtils.parseLocalDate(doc.get("matchdate")))
            .matchId(RedisMapperUtils.parseLong(doc.get("matchid")))
            .clearingDate(RedisMapperUtils.parseLocalDate(doc.get("clearingdate")))
            .returnClearingDate(RedisMapperUtils.parseLocalDate(doc.get("returnclearingdate")))
            .assignmentMarkBuy(RedisMapperUtils.parseBoolean(doc.get("assignmentmarkbuy")))
            .assignmentMarkSell(RedisMapperUtils.parseBoolean(doc.get("assignmentmarksell")))
            .fractionalMarkBuy(RedisMapperUtils.parseBoolean(doc.get("fractionalmarkbuy")))
            .fractionalMarkSell(RedisMapperUtils.parseBoolean(doc.get("fractionalmarksell")))
            .advanceStatus(RedisMapperUtils.parseInt(doc.get("advancestatus")))
            .exitIndicatorSettlement(RedisMapperUtils.parseBoolean(doc.get("exitindicatorsettlement")))
            .canceledStatus(RedisMapperUtils.parseBoolean(doc.get("canceledstatus")))
            .quantity(RedisMapperUtils.parseBigDecimal(doc.get("quantity")))
            .price(RedisMapperUtils.parseBigDecimal(doc.get("price")))
            .volume(RedisMapperUtils.parseBigDecimal(doc.get("volume")))
            .repurchaseRate(RedisMapperUtils.parseBigDecimal(doc.get("repurchaserate")))
            .repurchaseAmount(RedisMapperUtils.parseBigDecimal(doc.get("repurchaseamount")))
            .matchTime(RedisMapperUtils.parseOffsetDateTime(doc.get("matchtime")))
            .ownPositionSell(RedisMapperUtils.parseBoolean(doc.get("ownpositionsell")))
            .ownPositionBuy(RedisMapperUtils.parseBoolean(doc.get("ownpositionbuy")))
            .repurchaseAgreementDate(RedisMapperUtils.parseLocalDate(doc.get("repurchaseagreementdate")))
            .daysToSettlement(RedisMapperUtils.parseInt(doc.get("daystosettlement")))
            .repoRate(RedisMapperUtils.parseBigDecimal(doc.get("reporate")))
            .repoAmount(RedisMapperUtils.parseBigDecimal(doc.get("repoamount")))
            .fundingAmount(RedisMapperUtils.parseBigDecimal(doc.get("fundingamount")))
            .netOutFlowTotal(RedisMapperUtils.parseBigDecimal(doc.get("netoutflowtotal")))
            .outFlowTurnOverValue(RedisMapperUtils.parseBigDecimal(doc.get("outflowturnovervalue")))
            .totalNetReturn(RedisMapperUtils.parseBigDecimal(doc.get("totalnetreturn")))
            .returnTurnoverValue(RedisMapperUtils.parseBigDecimal(doc.get("returnturnovervalue")))
            .deliveryVersusPaymentValue(RedisMapperUtils.parseBigDecimal(doc.get("deliveryversuspaymentvalue")))
            .reallocationIndicator(RedisMapperUtils.parseBoolean(doc.get("reallocationindicator")))
            .settlementIndicatorOutgoing(RedisMapperUtils.parseBoolean(doc.get("settlementindicatoroutgoing")))
            .settlementIndicatorReturn(RedisMapperUtils.parseBoolean(doc.get("settlementindicatorreturn")))
            .resettlementIndicatorAdvance(RedisMapperUtils.parseBoolean(doc.get("resettlementindicatoradvance")))
            .specialTradeId(RedisMapperUtils.parseLong(doc.get("specialtradeid")))
            .purchasePaymentIndicator(RedisMapperUtils.parseBoolean(doc.get("purchasepaymentindicator")))
            .returnIndicatorSettlement(RedisMapperUtils.parseBoolean(doc.get("returnindicatorsettlement")))
            .participantBuy(buildParticipantBuyDto(doc))
            .participantSell(buildParticipantSellDto(doc))
            .status(buildStatusDto(doc))
            .country(buildCountryDto(doc))
            .type(buildTypeDto(doc))
            .currency(buildCurrencyDto(doc))
            .securityTitle(buildSecurityTitleDto(doc))
            .market(buildMarketDto(doc))
            .issuanceMarket(buildIssuanceMarketDto(doc))
            .tradingSystem(buildTradingSystemDto(doc))
            .tradingSession(buildTradingSessionDto(doc))
            .build();
    }

    private ParticipantOutDto buildParticipantBuyDto(Document doc) {
        return ParticipantOutDto.builder()
            .id(RedisMapperUtils.parseLong(doc.get("participantbuyid")))
            .code(RedisMapperUtils.parseString(doc.get("participantbuycode")))
            .name(RedisMapperUtils.parseString(doc.get("participantbuyname")))
            .shortName(RedisMapperUtils.parseString(doc.get("participantbuyshortname")))
            .documentNumber(RedisMapperUtils.parseString(doc.get("participantbuydocumentnumber")))
            .mnemonic(RedisMapperUtils.parseString(doc.get("participantbuymnemonic")))
            .registrationDate(RedisMapperUtils.parseLocalDate(doc.get("participantbuyregistrationdate")))
            .taxCode(RedisMapperUtils.parseString(doc.get("participantbuytaxcode")))
            .mainAddress(RedisMapperUtils.parseString(doc.get("participantbuymainaddress")))
            .webPage(RedisMapperUtils.parseString(doc.get("participantbuywebpage")))
            .phoneNumber(RedisMapperUtils.parseString(doc.get("participantbuyphonenumber")))
            .nitClearingHouse(RedisMapperUtils.parseString(doc.get("participantbuynitclearinghouse")))
            .typeEntity(RedisMapperUtils.parseString(doc.get("participantbuytypeentity")))
            .marginAccount(RedisMapperUtils.parseString(doc.get("participantbuymarginaccount")))
            .masterAccount(RedisMapperUtils.parseString(doc.get("participantbuymasteraccount")))
            .directAllocation(RedisMapperUtils.parseString(doc.get("participantbuydirectallocation")))
            .marketMaker(RedisMapperUtils.parseString(doc.get("participantbuymarketmaker")))
            .enabled(RedisMapperUtils.parseBoolean(doc.get("participantbuyenabled")))
            .custodian(RedisMapperUtils.parseBoolean(doc.get("participantbuycustodian")))
            .build();
    }

    private ParticipantOutDto buildParticipantSellDto(Document doc) {
        return ParticipantOutDto.builder()
            .id(RedisMapperUtils.parseLong(doc.get("participantsellid")))
            .code(RedisMapperUtils.parseString(doc.get("participantsellcode")))
            .name(RedisMapperUtils.parseString(doc.get("participantsellname")))
            .shortName(RedisMapperUtils.parseString(doc.get("participantsellshortname")))
            .documentNumber(RedisMapperUtils.parseString(doc.get("participantselldocumentnumber")))
            .mnemonic(RedisMapperUtils.parseString(doc.get("participantsellmnemonic")))
            .registrationDate(RedisMapperUtils.parseLocalDate(doc.get("participantsellregistrationdate")))
            .taxCode(RedisMapperUtils.parseString(doc.get("participantselltaxcode")))
            .mainAddress(RedisMapperUtils.parseString(doc.get("participantsellmainaddress")))
            .webPage(RedisMapperUtils.parseString(doc.get("participantsellwebpage")))
            .phoneNumber(RedisMapperUtils.parseString(doc.get("participantsellphonenumber")))
            .nitClearingHouse(RedisMapperUtils.parseString(doc.get("participantsellnitclearinghouse")))
            .typeEntity(RedisMapperUtils.parseString(doc.get("participantselltypeentity")))
            .marginAccount(RedisMapperUtils.parseString(doc.get("participantsellmarginaccount")))
            .masterAccount(RedisMapperUtils.parseString(doc.get("participantsellmasteraccount")))
            .directAllocation(RedisMapperUtils.parseString(doc.get("participantselldirectallocation")))
            .marketMaker(RedisMapperUtils.parseString(doc.get("participantsellmarketmaker")))
            .enabled(RedisMapperUtils.parseBoolean(doc.get("participantsellenabled")))
            .custodian(RedisMapperUtils.parseBoolean(doc.get("participantsellcustodian")))
            .build();
    }

    private StatusOutDto buildStatusDto(Document doc) {
        return StatusOutDto.builder()
            .id(RedisMapperUtils.parseLong(doc.get("statusid")))
            .description(RedisMapperUtils.parseString(doc.get("statusdescription")))
            .category(RedisMapperUtils.parseString(doc.get("statuscategory")))
            .build();
    }

    private CountryOutDto buildCountryDto(Document doc) {
        return CountryOutDto.builder()
            .id(RedisMapperUtils.parseLong(doc.get("countryid")))
            .code(RedisMapperUtils.parseString(doc.get("countrycode")))
            .name(RedisMapperUtils.parseString(doc.get("countryname")))
            .timeZone(RedisMapperUtils.parseString(doc.get("countrytimezone")))
            .build();
    }

    private TypeOutDto buildTypeDto(Document doc) {
        return TypeOutDto.builder()
            .id(RedisMapperUtils.parseLong(doc.get("typeid")))
            .description(RedisMapperUtils.parseString(doc.get("typedescription")))
            .category(RedisMapperUtils.parseString(doc.get("typecategory")))
            .build();
    }

    private CurrencyOutDto buildCurrencyDto(Document doc) {
        return CurrencyOutDto.builder()
            .id(RedisMapperUtils.parseLong(doc.get("currencyid")))
            .code(RedisMapperUtils.parseString(doc.get("currencycode")))
            .name(RedisMapperUtils.parseString(doc.get("currencyname")))
            .build();
    }

    private SecurityTitleOutDto buildSecurityTitleDto(Document doc) {
        return SecurityTitleOutDto.builder()
            .equityCode(RedisMapperUtils.parseString(doc.get("securitytitleequitycode")))
            .mnemonic(RedisMapperUtils.parseString(doc.get("securitytitlemnemonic")))
            .isin(RedisMapperUtils.parseString(doc.get("securitytitleisin")))
            .currencyId(RedisMapperUtils.parseInt(doc.get("securitytitlecurrencyid")))
            .settlementPeriod(RedisMapperUtils.parseString(doc.get("securitytitlesettlementperiod")))
            .listingDate(RedisMapperUtils.parseLocalDateTime(doc.get("securitytitlelistingdate")))
            .delistingDate(RedisMapperUtils.parseLocalDate(doc.get("securitytitledelistingdate")))
            .parent(RedisMapperUtils.parseBoolean(doc.get("securitytitleparent")))
            .parentId(RedisMapperUtils.parseLong(doc.get("securitytitleparentid")))
            .countryId(RedisMapperUtils.parseInt(doc.get("securitytitlecountryid")))
            .amountIssued(RedisMapperUtils.parseBigInteger(doc.get("securitytitleamountissued")))
            .segmentId(RedisMapperUtils.parseInt(doc.get("securitytitlesegmentid")))
            .category(RedisMapperUtils.parseString(doc.get("securitytitlecategory")))
            .punishmentRepo(RedisMapperUtils.parseBigDecimal(doc.get("securitytitlepunishmentrepo")))
            .regulatoryCode(RedisMapperUtils.parseString(doc.get("securitytitleregulatorycode")))
            .build();
    }

    private MarketOutDto buildMarketDto(Document doc) {
        return MarketOutDto.builder()
            .id(RedisMapperUtils.parseString(doc.get("marketid")))
            .description(RedisMapperUtils.parseString(doc.get("marketdescription")))
            .category(RedisMapperUtils.parseString(doc.get("marketcategory")))
            .build();
    }

    private MarketOutDto buildIssuanceMarketDto(Document doc) {
        return MarketOutDto.builder()
            .id(RedisMapperUtils.parseString(doc.get("issuancemarketid")))
            .description(RedisMapperUtils.parseString(doc.get("issuancemarketdescription")))
            .category(RedisMapperUtils.parseString(doc.get("issuancemarketcategory")))
            .build();
    }

    private TradingSystemOutDto buildTradingSystemDto(Document doc) {
        return TradingSystemOutDto.builder()
            .id(RedisMapperUtils.parseLong(doc.get("tradingsystemid")))
            .description(RedisMapperUtils.parseString(doc.get("tradingsystemdescription")))
            .build();
    }

    private TradingSessionOutDto buildTradingSessionDto(Document doc) {
        return TradingSessionOutDto.builder()
            .id(RedisMapperUtils.parseString(doc.get("tradingsessionid")))
            .description(RedisMapperUtils.parseString(doc.get("tradingsessiondescription")))
            .build();
    }
}

```

## src/main/java/com/nubo/operations/api/helpers/TradeSpecificationBuilder.java

```java
package com.nubo.operations.api.helpers;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.nubo.operations.api.models.enums.TypeEnum;
import org.springframework.data.jpa.domain.Specification;

import com.nubo.operations.api.application.properties.PropertiesContext;
import com.nubo.operations.api.models.entity.TradeEntity;
import com.nubo.operations.api.models.enums.SearchOperationEnum;
import com.nubo.operations.api.models.enums.StatusEnum;

import jakarta.persistence.criteria.Path;

public class TradeSpecificationBuilder {
    
    private static final String CLEARING_DATE_FIELD = "clearingDate";
    
    private final List<Specification<TradeEntity>> specifications = new ArrayList<>();

    public static TradeSpecificationBuilder builder() {
        return new TradeSpecificationBuilder();
    }
    
    public TradeSpecificationBuilder withMatchId(Long matchId) {
        if (matchId != null) {
            specifications.add((root, query, cb) -> 
                cb.like(cb.toString(root.get("matchId")), matchId + "%"));
        }
        return this;
    }
    
    public TradeSpecificationBuilder withStatusId(Integer statusId) {
        if (statusId != null) {
            specifications.add((root, query, cb) -> {
                var statusPredicate = cb.equal(root.get("status").get("id"), statusId);
                if (!StatusEnum.UNCOMPLETED.getValue().equals(statusId) &&
                        !StatusEnum.FINISHED.getValue().equals(statusId)) {
                    var datePredicate = cb.greaterThanOrEqualTo(root.get(CLEARING_DATE_FIELD), 
                        PropertiesContext.getClientDatetime().toLocalDate());
                    return cb.and(statusPredicate, datePredicate);
                }
                return statusPredicate;
            });
        }
        return this;
    }
    
    public TradeSpecificationBuilder withCanceledStatus(Boolean canceledStatus) {
        if (canceledStatus != null) {
            specifications.add((root, query, cb) -> 
                cb.equal(root.get("canceledStatus"), canceledStatus));
        }
        return this;
    }
    
    public TradeSpecificationBuilder withParticipantId(Long participantId) {
        if (participantId != null) {
            specifications.add((root, query, cb) -> 
                cb.or(
                    cb.equal(root.get("participantBuy").get("id"), participantId),
                    cb.equal(root.get("participantSell").get("id"), participantId)
                ));
        }
        return this;
    }
    
    public TradeSpecificationBuilder withTypeId(Long typeId) {
        if (typeId != null) {
            specifications.add((root, query, cb) -> 
                cb.equal(root.get("type").get("id"), typeId));
        }
        return this;
    }

    public TradeSpecificationBuilder withCountryIds(List<Long> countryIds) {
        if (countryIds != null && !countryIds.isEmpty()) {
            specifications.add((root, query, cb) ->
                    root.get("country").get("id").in(countryIds)
            );
        }
        return this;
    }
    
    public TradeSpecificationBuilder withCountryId(Long countryId) {
        if (countryId != null) {
            specifications.add((root, query, cb) -> 
                cb.equal(root.get("country").get("id"), countryId));
        }
        return this;
    }
    
    public TradeSpecificationBuilder withMatchDateRange(LocalDate startMatchDate, LocalDate endMatchDate) {
        if (startMatchDate != null && endMatchDate != null) {
            specifications.add((root, query, cb) -> 
                cb.and(
                    cb.greaterThanOrEqualTo(root.get("matchDate"), startMatchDate),
                    cb.lessThanOrEqualTo(root.get("matchDate"), endMatchDate)
                ));
        }
        return this;
    }
    
    public TradeSpecificationBuilder withEndClearingDate(LocalDate endClearingDate) {
        if (endClearingDate != null) {
            specifications.add((root, query, cb) -> 
                cb.lessThanOrEqualTo(root.get(CLEARING_DATE_FIELD), endClearingDate));
        }
        return this;
    }
    
    public TradeSpecificationBuilder withSpecialTradeIdNull() {
        specifications.add((root, query, cb) -> 
            cb.isNull(root.get("specialTradeId").as(Long.class)));
        return this;
    }
    
    public TradeSpecificationBuilder withDynamicFilter(String fieldName, String fieldValue, SearchOperationEnum operation) {
        if (fieldName != null && fieldValue != null && operation != null) {
            specifications.add((root, query, cb) -> {
                try {
                    Path<?> fieldPath = MapperTradeDynamicSearch.getTradeFieldPath(root, fieldName);
                    if (fieldPath != null) {
                        return MapperTradeDynamicSearch.buildTradeFieldPredicate(cb, fieldPath, fieldValue, operation);
                    }
                    return cb.conjunction(); 
                } catch (Exception e) {
                    return cb.conjunction(); 
                }
            });
        }
        return this;
    }

    public Specification<TradeEntity> build() {
        return specifications.stream()
                .reduce(Specification.allOf(), Specification::and);
    }


    public TradeSpecificationBuilder withOnlyOperation(Boolean onlyOperation) {
        if (Boolean.TRUE.equals(onlyOperation)) {
            specifications.add((root, query, cb) -> cb.and(
                    root.get("type").get("id").in(TypeEnum.COUNTED_OPERATION.getValue(), TypeEnum.REPO_OPERATION.getValue()),
                    cb.notEqual(root.get("status").get("id"), StatusEnum.NEGOCIATED.getValue())
            ));
        }
        return this;
    }
}

```

## src/main/java/com/nubo/operations/api/helpers/TradeSpecificationFactory.java

```java
package com.nubo.operations.api.helpers;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.domain.Specification;

import com.nubo.operations.api.models.domain.TradeParams;
import com.nubo.operations.api.models.entity.TradeEntity;
import com.nubo.operations.api.models.enums.SearchOperationEnum;

import jakarta.persistence.criteria.Path;


public class TradeSpecificationFactory {

    private TradeSpecificationFactory() {
        throw new IllegalStateException("Utility class");
    }

    public static Specification<TradeEntity> createStandardFilter(TradeParams tradeParams) {
        if (tradeParams == null) {
            return TradeSpecificationBuilder.builder()
                    .build();
        }
        var countryIds = tradeParams.countryIds();
        if ((countryIds == null || countryIds.isEmpty()) && tradeParams.countryId() != null) {
            countryIds = List.of(tradeParams.countryId());
        }

        return TradeSpecificationBuilder.builder()
                .withMatchId(tradeParams.matchId())
                .withCanceledStatus(tradeParams.canceledStatus())
                .withParticipantId(tradeParams.participantId())
                .withTypeId(tradeParams.typeId())
                .withCountryIds(countryIds)
                .withCountryId(tradeParams.countryId())
                .withMatchDateRange(tradeParams.startMatchDate(), tradeParams.endMatchDate())
                .withStatusId(tradeParams.statusId())
                .withEndClearingDate(tradeParams.endClearingDate())
                .withOnlyOperation(tradeParams.onlyOperation())
                .build();
    }

    public static Specification<TradeEntity> createDynamicFilter(
            String fieldName, String fieldValue, SearchOperationEnum operation) {

        return (root, query, cb) -> {
            try {
                Path<?> fieldPath = MapperTradeDynamicSearch.getTradeFieldPath(root, fieldName);
                if (fieldPath != null) {
                    return MapperTradeDynamicSearch.buildTradeFieldPredicate(cb, fieldPath, fieldValue, operation);
                }
                return cb.conjunction();
            } catch (Exception e) {
                return cb.conjunction();
            }
        };
    }

    public static Specification<TradeEntity> createCombinedFilter(
            TradeParams tradeParams,
            String fieldName, String fieldValue, SearchOperationEnum operation) {

        if (tradeParams == null) {
            return TradeSpecificationBuilder.builder()
                    .withDynamicFilter(fieldName, fieldValue, operation)
                    .build();
        }

        return TradeSpecificationBuilder.builder()
                .withMatchId(tradeParams.matchId())
                .withCanceledStatus(tradeParams.canceledStatus())
                .withParticipantId(tradeParams.participantId())
                .withTypeId(tradeParams.typeId())
                .withCountryId(tradeParams.countryId())
                .withMatchDateRange(tradeParams.startMatchDate(), tradeParams.endMatchDate())
                .withStatusId(tradeParams.statusId())
                .withEndClearingDate(tradeParams.endClearingDate())
                .withDynamicFilter(fieldName, fieldValue, operation)
                .build();
    }

    public static Specification<TradeEntity> createMatchIdFilter(Long matchId) {
        return TradeSpecificationBuilder.builder()
                .withMatchId(matchId)
                .build();
    }

    public static Specification<TradeEntity> createDateCountryFilter(LocalDate startMatchDate, LocalDate endMatchDate, Long countryId) {
        return TradeSpecificationBuilder.builder()
                .withMatchDateRange(startMatchDate, endMatchDate)
                .withCountryId(countryId)
                .build();
    }

    public static Specification<TradeEntity> createParticipantTypeFilter(Long participantId, Long typeId) {
        return TradeSpecificationBuilder.builder()
                .withParticipantId(participantId)
                .withTypeId(typeId)
                .build();
    }


}

```

## src/main/java/com/nubo/operations/api/models/domain/TradeParams.java

```java
package com.nubo.operations.api.models.domain;

import java.time.LocalDate;
import java.util.List;

public record TradeParams(
    Long matchId,
    Integer statusId,
    Boolean canceledStatus,
    Long participantId,
    Long typeId,
    Long countryId,
    List<Long> countryIds,
    LocalDate startMatchDate,
    LocalDate endMatchDate,
    LocalDate endClearingDate,
    Boolean onlyOperation) {
}

```

## src/main/java/com/nubo/operations/api/models/dto/request/CalculationInDto.java

```java
package com.nubo.operations.api.models.dto.request;

import com.nubo.operations.api.application.annotations.ValidBigDecimal;
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
public class CalculationInDto {

    @NotNull
    @ValidBigDecimal(precision = 16, scale = 6)
    private BigDecimal quantity;

    @NotNull
    @ValidBigDecimal(precision = 16, scale = 6)
    private BigDecimal price;

    @NotNull
    @ValidBigDecimal(precision = 6, scale = 4)
    private BigDecimal commission;

    @NotNull
    private String sideId;

}

```

## src/main/java/com/nubo/operations/api/models/dto/request/CalculationIvaInDto.java

```java
package com.nubo.operations.api.models.dto.request;

import com.nubo.operations.api.application.annotations.ValidBigDecimal;
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
public class CalculationIvaInDto {

    @NotNull
    @ValidBigDecimal(precision = 16, scale = 6)
    private BigDecimal quantity;

    @NotNull
    @ValidBigDecimal(precision = 16, scale = 6)
    private BigDecimal price;

    @NotNull
    @ValidBigDecimal(precision = 6, scale = 4)
    private BigDecimal commission;

    @NotNull
    @ValidBigDecimal(precision = 6, scale = 4)
    private BigDecimal valTax;

    @NotNull
    private String sideId;

}

```

## src/main/java/com/nubo/operations/api/models/dto/request/SettlementCommissionUpdateInDto.java

```java
package com.nubo.operations.api.models.dto.request;

import java.math.BigDecimal;

import com.nubo.operations.api.application.annotations.ValidBigDecimal;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SettlementCommissionUpdateInDto {

    @ValidBigDecimal(precision = 6, scale = 4, message = "Invalid commission percentage format")
    private BigDecimal commissionPercentage;

}

```

## src/main/java/com/nubo/operations/api/models/dto/request/SettlementInDto.java

```java
package com.nubo.operations.api.models.dto.request;

import com.nubo.operations.api.application.annotations.ValidBigDecimal;
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
public class SettlementInDto {

    @NotNull
    @Min(value = 1)
    private Long investorId;

    @NotNull
    @Min(value = 1)
    private Long investorAccountId;

    @NotNull
    @Min(value = 1)
    private Long participantAccountId;

    @NotNull
    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal fractionQuantity;

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal fractionVolume;

    private Boolean fiduciarySpecialist;

    @NotNull
    @ValidBigDecimal(precision = 6, scale = 4)
    private BigDecimal commissionPercentage;

    @NotNull
    @ValidBigDecimal(precision = 6, scale = 4)
    private BigDecimal valTax;

    @ValidBigDecimal(precision = 6, scale = 4)
    private BigDecimal withholdingTax;

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal withholdingTaxAmount;

    private Boolean issuedReceipt;

    private String issuedReceiptNumber;

    @ValidBigDecimal(precision = 19, scale = 0)
    private BigDecimal referenceAllocId;

    @ValidBigDecimal(precision = 19, scale = 4)
    private BigDecimal repoAmount;

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal fundingAmount;

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal netOutFlowTotal;

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal outFlowTurnoverValue;

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal returnTurnoverValue;

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal deliveryVersusPaymentValue;

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal settlementAmount;

    @NotNull
    @Min(value = 1)
    private Long tradingSystemId;

    @NotNull
    @Min(value = 1)
    private Integer statusId;

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal brokerageService;

    @Min(value = 0)
    private Long custodianId;

    @Min(value = 0)
    private Long bankAccountId;

    private String reference;

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal capitalGainValue;

    @ValidBigDecimal(precision = 18, scale = 2)
    private BigDecimal disbursementValue;

    @NotNull
    @Min(value = 0)
    private Long sourceQuoteTypeId;

    @Min(value = 0)
    private Long ficAdministratorId;

}

```

## src/main/java/com/nubo/operations/api/models/dto/request/SettlementUpdateInDto.java

```java
package com.nubo.operations.api.models.dto.request;

import com.nubo.operations.api.application.annotations.ValidBigDecimal;
import jakarta.validation.constraints.Min;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SettlementUpdateInDto {

    @Min(value = 1)
    private Long investorId;

    @Min(value = 1)
    private Long investorAccountId;

    @Min(value = 1)
    private Long participantAccountId;

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal fractionQuantity;

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal fractionVolume;

    private Boolean fiduciarySpecialist;

    @ValidBigDecimal(precision = 6, scale = 4)
    private BigDecimal commissionPercentage;

    @ValidBigDecimal(precision = 6, scale = 4)
    private BigDecimal valTax;

    @ValidBigDecimal(precision = 6, scale = 4)
    private BigDecimal withholdingTax;

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal withholdingTaxAmount;

    private Boolean issuedReceipt;

    private String issuedReceiptNumber;

    @ValidBigDecimal(precision = 19, scale = 0)
    private BigDecimal referenceAllocId;

    @ValidBigDecimal(precision = 19, scale = 4)
    private BigDecimal repoAmount;

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal fundingAmount;

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal netOutFlowTotal;

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal outFlowTurnoverValue;

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal returnTurnoverValue;

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal deliveryVersusPaymentValue;

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal settlementAmount;

    @Min(value = 1)
    private Long tradingSystemId;

    @Min(value = 1)
    private Integer statusId;

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal brokerageService;

    @Min(value = 1)
    private Long custodianId;

    @Min(value = 0)
    private Long bankAccountId;

    private String reference;

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal capitalGainValue;

    @ValidBigDecimal(precision = 18, scale = 2)
    private BigDecimal disbursementValue;

    @Min(value = 0)
    private Long sourceQuoteTypeId;

    @Min(value = 0)
    private Long ficAdministratorId;


}

```

## src/main/java/com/nubo/operations/api/models/dto/request/TradeEquityInDto.java

```java
package com.nubo.operations.api.models.dto.request;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.nubo.operations.api.application.annotations.ValidBigDecimal;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
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
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class TradeEquityInDto {

    @NotNull
    @Min(value = 1)
    private Long tradeId;

    private Integer foreignBrokerBuy;

    private Integer foreignBrokerSell;

    private Integer directDepositorBuy;

    private Integer directDepositorSell;

    private Integer sourceIndicatorBuy;

    private Integer sourceIndicatorSell;

    private Integer responsibleTradeBuy;

    private Integer responsibleTradeSell;

    @Size(max = 30)
    private String referenceBuy;

    @Size(max = 30)
    private String referenceSell;

    @ValidBigDecimal(precision = 19, scale = 0)
    private BigDecimal orderBookId;

    private Boolean prearrangedOperation;

    private Integer aggressiveTip;

    private Boolean exdividendPeriod;
}

```

## src/main/java/com/nubo/operations/api/models/dto/request/TradeEquityUpdateInDto.java

```java
package com.nubo.operations.api.models.dto.request;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.nubo.operations.api.application.annotations.ValidBigDecimal;
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
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class TradeEquityUpdateInDto {

    private Integer foreignBrokerBuy;

    private Integer foreignBrokerSell;

    private Integer directDepositorBuy;

    private Integer directDepositorSell;

    private Integer sourceIndicatorBuy;

    private Integer sourceIndicatorSell;

    private Integer responsibleTradeBuy;

    private Integer responsibleTradeSell;

    @Size(max = 30)
    private String referenceBuy;

    @Size(max = 30)
    private String referenceSell;

    @ValidBigDecimal(precision = 19, scale = 0)
    private BigDecimal orderBookId;

    private Boolean prearrangedOperation;

    private Integer aggressiveTip;

    private Boolean exdividendPeriod;

}

```

## src/main/java/com/nubo/operations/api/models/dto/request/TradeInDto.java

```java
package com.nubo.operations.api.models.dto.request;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.nubo.operations.api.application.annotations.ValidBigDecimal;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.OffsetDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class TradeInDto {

    @NotNull
    private LocalDate matchDate;

    @NotNull
    @Min(value = 1)
    private Long matchId;

    private LocalDate clearingDate;

    private LocalDate returnClearingDate;

    @Size(max = 2)
    private String depositoryId;

    @NotNull
    @Min(value = 1)
    private Long countryId;

    @Min(value = 1)
    private Long typeId;

    @NotNull
    @Size(max = 2)
    private String marketId;

    @NotNull
    @Size(max = 2)
    private String issuanceMarketId;

    @NotNull
    @Min(value = 1)
    private Long securityId;

    @NotNull
    @Min(value = 1)
    private Long participantIdBuy;

    @NotNull
    @Min(value = 1)
    private Long participantIdSell;

    private Long custodianIdBuy;

    private Long custodianIdSell;

    private Boolean assignmentMarkBuy;

    private Boolean assignmentMarkSell;

    private Boolean fractionalMarkBuy;

    private Boolean fractionalMarkSell;

    private Integer advanceStatus;

    private Boolean exitIndicatorSettlement;

    private Boolean canceledStatus;

    @NotNull
    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal quantity;

    @NotNull
    @ValidBigDecimal(precision = 16, scale = 6)
    private BigDecimal price;

    @NotNull
    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal volume;

    @ValidBigDecimal(precision = 6, scale = 4)
    private BigDecimal repurchaseRate;

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal repurchaseAmount;

    @NotNull
    @Min(value = 1)
    private Integer statusId;

    private OffsetDateTime matchTime;

    private Boolean ownPositionSell;

    private Boolean ownPositionBuy;

    @Min(value = 1)
    private Long currencyId;

    @Min(value = 1)
    private Long tradingSystemId;

    @Size(max = 2)
    private String tradingSessionId;

    private LocalDate repurchaseAgreementDate;

    private Integer daysToSettlement;

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal repoRate;

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal repoAmount;

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal fundingAmount;

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal netOutFlowTotal;

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal outFlowTurnOverValue;

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal totalNetReturn;

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal returnTurnoverValue;

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal deliveryVersusPaymentValue;

    private Boolean reallocationIndicator;

    @Min(value = 1)
    private Long businessTypeId;

    @Min(value = 1)
    private Long marketTypeId;

    @Min(value = 1)
    private Long originTypeId;

    private Boolean settlementIndicatorOutgoing;

    private Boolean settlementIndicatorReturn;

    private Boolean resettlementIndicatorAdvance;

    @Min(value = 1)
    private Long specialTradeId;

    @Min(value = 1)
    private Long paymentTypeId;

    @Min(value = 1)
    private Long settlementTypeId;

    @Min(value = 1)
    private Integer custodianStatusId;

    @Min(value = 1)
    private Integer settlementStatusId;

    @Min(value = 1)
    private Integer bloquingStatusId;

    private Boolean purchasePaymentIndicator;

    private Boolean returnIndicatorSettlement;

}

```

## src/main/java/com/nubo/operations/api/models/dto/request/TradeUpdateInDto.java

```java
package com.nubo.operations.api.models.dto.request;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.nubo.operations.api.application.annotations.ValidBigDecimal;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.OffsetDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class TradeUpdateInDto {

    private LocalDate matchDate;

    @Min(value = 1)
    private Long matchId;

    private LocalDate clearingDate;

    private LocalDate returnClearingDate;

    @Size(max = 2)
    private String depositoryId;

    @Min(value = 1)
    private Long countryId;

    @Min(value = 1)
    private Long typeId;

    @Size(max = 2)
    private String marketId;

    @Size(max = 2)
    private String issuanceMarketId;

    @Min(value = 1)
    private Long securityId;

    @Min(value = 1)
    private Long participantIdBuy;

    @Min(value = 1)
    private Long participantIdSell;

    private Long custodianIdBuy;

    private Long custodianIdSell;

    private Boolean assignmentMarkBuy;

    private Boolean assignmentMarkSell;

    private Boolean fractionalMarkBuy;

    private Boolean fractionalMarkSell;

    private Integer advanceStatus;

    private Boolean exitIndicatorSettlement;

    private Boolean canceledStatus;

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal quantity;

    @ValidBigDecimal(precision = 16, scale = 6)
    private BigDecimal price;

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal volume;

    @ValidBigDecimal(precision = 6, scale = 4)
    private BigDecimal repurchaseRate;

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal repurchaseAmount;

    @Min(value = 1)
    private Integer statusId;

    private OffsetDateTime matchTime;

    private Boolean ownPositionSell;

    private Boolean ownPositionBuy;

    @Min(value = 1)
    private Long currencyId;

    @Min(value = 1)
    private Long tradingSystemId;

    @Size(max = 2)
    private String tradingSessionId;

    private LocalDate repurchaseAgreementDate;

    private Integer daysToSettlement;

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal repoRate;

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal repoAmount;

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal fundingAmount;

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal netOutFlowTotal;

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal outFlowTurnOverValue;

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal totalNetReturn;

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal returnTurnoverValue;

    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal deliveryVersusPaymentValue;

    private Boolean reallocationIndicator;

    @Min(value = 1)
    private Long businessTypeId;

    @Min(value = 1)
    private Long marketTypeId;

    @Min(value = 1)
    private Long originTypeId;

    private Boolean settlementIndicatorOutgoing;

    private Boolean settlementIndicatorReturn;

    private Boolean resettlementIndicatorAdvance;

    @Min(value = 1)
    private Long specialTradeId;

    @Min(value = 1)
    private Long paymentTypeId;

    @Min(value = 1)
    private Long settlementTypeId;

    @Min(value = 1)
    private Integer custodianStatusId;

    @Min(value = 1)
    private Integer settlementStatusId;

    @Min(value = 1)
    private Integer bloquingStatusId;

    private Boolean purchasePaymentIndicator;

    private Boolean returnIndicatorSettlement;
}

```

## src/main/java/com/nubo/operations/api/models/dto/response/AllTradeOutDto.java

```java
package com.nubo.operations.api.models.dto.response;

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
public class AllTradeOutDto {

    private TradeOutDto trade;

    private TradeEquityOutDto tradeEquity;

    private List<SettlementOutDto> settlement;
}

```

## src/main/java/com/nubo/operations/api/models/dto/response/CalculationOutDto.java

```java
package com.nubo.operations.api.models.dto.response;

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
public class CalculationOutDto {

    private BigDecimal valTax;

    private BigDecimal commissionPercentage;

    private BigDecimal amount;

    private BigDecimal commissionAmount;

    private BigDecimal valTaxAmount;

    private BigDecimal netAmount;

    private BigDecimal transferValue;

}

```

## src/main/java/com/nubo/operations/api/models/dto/response/CalculationTotalAmountOutDto.java

```java
package com.nubo.operations.api.models.dto.response;

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
public class CalculationTotalAmountOutDto {

    private BigDecimal netAmountTotal;

    private BigDecimal transferValueTotal;

}

```

## src/main/java/com/nubo/operations/api/models/dto/response/CfiOutDto.java

```java
package com.nubo.operations.api.models.dto.response;

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
public class CfiOutDto {

    private String id;

    private String description;

}

```

## src/main/java/com/nubo/operations/api/models/dto/response/CityOutDto.java

```java
package com.nubo.operations.api.models.dto.response;

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

## src/main/java/com/nubo/operations/api/models/dto/response/ClassOutDto.java

```java
package com.nubo.operations.api.models.dto.response;

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
public class ClassOutDto {

    private String id;

    private String description;

    private String category;
}

```

## src/main/java/com/nubo/operations/api/models/dto/response/CountryOutDto.java

```java
package com.nubo.operations.api.models.dto.response;

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

## src/main/java/com/nubo/operations/api/models/dto/response/CurrencyOutDto.java

```java
package com.nubo.operations.api.models.dto.response;

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

## src/main/java/com/nubo/operations/api/models/dto/response/DepartmentOutDto.java

```java
package com.nubo.operations.api.models.dto.response;

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

## src/main/java/com/nubo/operations/api/models/dto/response/DepositoryOutDto.java

```java
package com.nubo.operations.api.models.dto.response;

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

## src/main/java/com/nubo/operations/api/models/dto/response/FractionAccountOutDto.java

```java
package com.nubo.operations.api.models.dto.response;

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

## src/main/java/com/nubo/operations/api/models/dto/response/GicsOutDto.java

```java
package com.nubo.operations.api.models.dto.response;

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

## src/main/java/com/nubo/operations/api/models/dto/response/IdentificationTypeOutDto.java

```java
package com.nubo.operations.api.models.dto.response;

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

## src/main/java/com/nubo/operations/api/models/dto/response/InvestorAccountOutDto.java

```java
package com.nubo.operations.api.models.dto.response;

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

## src/main/java/com/nubo/operations/api/models/dto/response/InvestorOutDto.java

```java
package com.nubo.operations.api.models.dto.response;

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

## src/main/java/com/nubo/operations/api/models/dto/response/MarketOutDto.java

```java
package com.nubo.operations.api.models.dto.response;

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

## src/main/java/com/nubo/operations/api/models/dto/response/PageResponseOutDto.java

```java
package com.nubo.operations.api.models.dto.response;

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

## src/main/java/com/nubo/operations/api/models/dto/response/ParticipantAccountOutDto.java

```java
package com.nubo.operations.api.models.dto.response;

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

## src/main/java/com/nubo/operations/api/models/dto/response/ParticipantOutDto.java

```java
package com.nubo.operations.api.models.dto.response;

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

## src/main/java/com/nubo/operations/api/models/dto/response/SecurityTitleOutDto.java

```java
package com.nubo.operations.api.models.dto.response;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.time.LocalDate;
import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

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

    private CfiOutDto cfi;

    private Integer currencyId;

    private String settlementPeriod;

    private LocalDateTime listingDate;

    private LocalDate delistingDate;

    private Boolean parent;

    private Long parentId;

    private StatusOutDto status;

    private String issuerName;

    private Integer countryId;

    private BigInteger amountIssued;

    @JsonProperty("class")
    private ClassOutDto clazz;

    private Integer segmentId;

    private String category;

    private DepositoryOutDto depository;

    private BigDecimal punishmentRepo;

    private String regulatoryCode;
}

```

## src/main/java/com/nubo/operations/api/models/dto/response/SettlementOutDto.java

```java
package com.nubo.operations.api.models.dto.response;

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

}

```

## src/main/java/com/nubo/operations/api/models/dto/response/SettlementStatusHistoryOutDto.java

```java
package com.nubo.operations.api.models.dto.response;

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
@JsonInclude(JsonInclude.Include.ALWAYS)
public class SettlementStatusHistoryOutDto {

    private Long tradeId;

    private Integer fraction;

    private SideOutDto side;

    private LocalDateTime time;

    private StatusOutDto status;

}

```

## src/main/java/com/nubo/operations/api/models/dto/response/SideOutDto.java

```java
package com.nubo.operations.api.models.dto.response;

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

## src/main/java/com/nubo/operations/api/models/dto/response/StatusOutDto.java

```java
package com.nubo.operations.api.models.dto.response;

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

## src/main/java/com/nubo/operations/api/models/dto/response/TaxStatusOutDto.java

```java
package com.nubo.operations.api.models.dto.response;

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

## src/main/java/com/nubo/operations/api/models/dto/response/TradeEquityOutDto.java

```java
package com.nubo.operations.api.models.dto.response;

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

## src/main/java/com/nubo/operations/api/models/dto/response/TradeMatchHistoryOutDto.java

```java
package com.nubo.operations.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.ALWAYS)
public class TradeMatchHistoryOutDto {

    private Long tradeId;

    private LocalDate matchDate;

    private Long matchId;

    private List<SettlementStatusHistoryOutDto> settlementStatusHistory;

}

```

## src/main/java/com/nubo/operations/api/models/dto/response/TradeOutDto.java

```java
package com.nubo.operations.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.OffsetDateTime;

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

    private MarketOutDto issuanceMarket;

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

    private Boolean canceledStatus;

    private BigDecimal quantity;

    private BigDecimal price;

    private BigDecimal volume;

    private BigDecimal repurchaseRate;

    private BigDecimal repurchaseAmount;

    private StatusOutDto status;

    private OffsetDateTime matchTime;

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

    private Boolean settlementIndicatorOutgoing;

    private Boolean settlementIndicatorReturn;

    private Boolean resettlementIndicatorAdvance;

    private Long specialTradeId;

    private TypeOutDto paymentType;

    private TypeOutDto settlementType;

    private StatusOutDto custodianStatus;

    private StatusOutDto settlementStatus;

    private StatusOutDto bloquingStatus;

    private Boolean purchasePaymentIndicator;

    private Boolean returnIndicatorSettlement;

}

```

## src/main/java/com/nubo/operations/api/models/dto/response/TradingSessionOutDto.java

```java
package com.nubo.operations.api.models.dto.response;

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

## src/main/java/com/nubo/operations/api/models/dto/response/TradingSystemOutDto.java

```java
package com.nubo.operations.api.models.dto.response;

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

## src/main/java/com/nubo/operations/api/models/dto/response/TypeOutDto.java

```java
package com.nubo.operations.api.models.dto.response;

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

## src/main/java/com/nubo/operations/api/models/entity/CfiEntity.java

```java
package com.nubo.operations.api.models.entity;

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

## src/main/java/com/nubo/operations/api/models/entity/CityEntity.java

```java
package com.nubo.operations.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
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

## src/main/java/com/nubo/operations/api/models/entity/ClassEntity.java

```java
package com.nubo.operations.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
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

}

```

## src/main/java/com/nubo/operations/api/models/entity/CountryEntity.java

```java
package com.nubo.operations.api.models.entity;

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

## src/main/java/com/nubo/operations/api/models/entity/CurrencyEntity.java

```java
package com.nubo.operations.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
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

## src/main/java/com/nubo/operations/api/models/entity/DepartmentEntity.java

```java
package com.nubo.operations.api.models.entity;

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

## src/main/java/com/nubo/operations/api/models/entity/DepositoryEntity.java

```java
package com.nubo.operations.api.models.entity;

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

## src/main/java/com/nubo/operations/api/models/entity/GicsEntity.java

```java
package com.nubo.operations.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
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

## src/main/java/com/nubo/operations/api/models/entity/HolidayEntity.java

```java
package com.nubo.operations.api.models.entity;

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
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
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

    @ManyToOne
    @JoinColumn(name = "\"COUNTRY_ID\"", nullable = false)
    private CountryEntity country;

    @Column(name = "\"HOLIDAY_DATE\"", nullable = false)
    private LocalDate holidayDate;

    @Column(name = "\"DESCRIPTION\"", length = 100, nullable = false)
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

## src/main/java/com/nubo/operations/api/models/entity/IdentificationTypeEntity.java

```java
package com.nubo.operations.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
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

## src/main/java/com/nubo/operations/api/models/entity/InvestorAccountEntity.java

```java
package com.nubo.operations.api.models.entity;

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

}
```

## src/main/java/com/nubo/operations/api/models/entity/InvestorEntity.java

```java
package com.nubo.operations.api.models.entity;

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

    @Column(name = "\"LAST_MODIFY_IP\"", nullable = false, length = 30)
    private String lastModifyIp;

}
```

## src/main/java/com/nubo/operations/api/models/entity/IssuerEntity.java

```java
package com.nubo.operations.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
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

}

```

## src/main/java/com/nubo/operations/api/models/entity/MarketEntity.java

```java
package com.nubo.operations.api.models.entity;

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

## src/main/java/com/nubo/operations/api/models/entity/ParticipantAccountEntity.java

```java
package com.nubo.operations.api.models.entity;

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
}

```

## src/main/java/com/nubo/operations/api/models/entity/ParticipantEntity.java

```java
package com.nubo.operations.api.models.entity;

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
    @JoinColumn(name = "\"DEPARTMENT_ID\"")
    private DepartmentEntity department;

    @Column(name = "\"MAIN_ADDRESS\"", length = 100)
    private String mainAddress;

    @Column(name = "\"WEB_PAGE\"", length = 100)
    private String webPage;

    @Column(name = "\"PHONE_NUMBER\"", length = 20)
    private String phoneNumber;

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

}

```

## src/main/java/com/nubo/operations/api/models/entity/SecurityTitleEntity.java

```java
package com.nubo.operations.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
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

    @ManyToOne
    @JoinColumn(name= "\"ISSUER_ID\"")
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

}

```

## src/main/java/com/nubo/operations/api/models/entity/SettlementEntity.java

```java
package com.nubo.operations.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
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

## src/main/java/com/nubo/operations/api/models/entity/SettlementKey.java

```java
package com.nubo.operations.api.models.entity;

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

## src/main/java/com/nubo/operations/api/models/entity/SettlementStatusHistoryEntity.java

```java
package com.nubo.operations.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
    private LocalDateTime time;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"", nullable = false)
    private StatusEntity status;

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

## src/main/java/com/nubo/operations/api/models/entity/SettlementStatusHistoryKey.java

```java
package com.nubo.operations.api.models.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SettlementStatusHistoryKey {

    private Long trade;

    private Integer fraction;

    private String side;

    private LocalDateTime time;

}

```

## src/main/java/com/nubo/operations/api/models/entity/SideEntity.java

```java
package com.nubo.operations.api.models.entity;

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

## src/main/java/com/nubo/operations/api/models/entity/StatusEntity.java

```java
package com.nubo.operations.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
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
}

```

## src/main/java/com/nubo/operations/api/models/entity/TaxStatusEntity.java

```java
package com.nubo.operations.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
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

## src/main/java/com/nubo/operations/api/models/entity/TaxesEntity.java

```java
package com.nubo.operations.api.models.entity;

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
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
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

## src/main/java/com/nubo/operations/api/models/entity/TradeEntity.java

```java
package com.nubo.operations.api.models.entity;

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
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.OffsetDateTime;

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
    @JoinColumn(name = "\"DEPOSITORY_ID\"")
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
    private OffsetDateTime matchTime;

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

## src/main/java/com/nubo/operations/api/models/entity/TradeEquityEntity.java

```java
package com.nubo.operations.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
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
@Table(name = "\"TRADE_EQUITY\"", schema = "\"NUANBODB\"")
public class TradeEquityEntity {

    @Id
    @Column(name = "\"TRADE_ID\"")
    private Long tradeId;

    @Column(name = "\"FOREIGN_BROKER_BUY\"", nullable = false)
    private Integer foreignBrokerBuy;

    @Column(name = "\"FOREIGN_BROKER_SELL\"", nullable = false)
    private Integer foreignBrokerSell;

    @Column(name = "\"DIRECT_DEPOSITOR_BUY\"", nullable = false)
    private Integer directDepositorBuy;

    @Column(name = "\"DIRECT_DEPOSITOR_SELL\"", nullable = false)
    private Integer directDepositorSell;

    @Column(name= "\"SOURCE_INDICATOR_BUY\"", nullable = false)
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

    @Column(name= "\"AGGRESSIVE_TIP\"")
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

}

```

## src/main/java/com/nubo/operations/api/models/entity/TradingSessionEntity.java

```java
package com.nubo.operations.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
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

## src/main/java/com/nubo/operations/api/models/entity/TradingSystemEntity.java

```java
package com.nubo.operations.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
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

## src/main/java/com/nubo/operations/api/models/entity/TypeEntity.java

```java
package com.nubo.operations.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
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

## src/main/java/com/nubo/operations/api/models/entity/UserNuboEntity.java

```java
package com.nubo.operations.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
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

}
```

## src/main/java/com/nubo/operations/api/models/enums/BusinessRuleEnum.java

```java
package com.nubo.operations.api.models.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Arrays;
import java.util.Objects;

@Getter
@RequiredArgsConstructor
public enum BusinessRuleEnum {

    RULE_COUNTED_OPERATION_CORRECTION("RULE_COUNTED_OPERATION_CORRECTION"),
    RULE_COUNTED_OPERATION_CORRECTION_ALLOWED_DAYS("RULE_COUNTED_OPERATION_CORRECTION_ALLOWED_DAYS"),
    RULE_COUNTED_OPERATION_CORRECTION_CUSTODIAN("RULE_COUNTED_OPERATION_CORRECTION_CUSTODIAN"),
    RULE_COUNTED_OPERATION_CORRECTION_SPECIAL_FIDUCIARY("RULE_COUNTED_OPERATION_CORRECTION_SPECIAL_FIDUCIARY"),
    RULE_COUNTED_OPERATION_CORRECTION_MAXIMUM_LIMIT("RULE_COUNTED_OPERATION_CORRECTION_MAXIMUM_LIMIT");

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

## src/main/java/com/nubo/operations/api/models/enums/PropertiesEnum.java

```java
package com.nubo.operations.api.models.enums;

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

## src/main/java/com/nubo/operations/api/models/enums/SearchOperationEnum.java

```java
package com.nubo.operations.api.models.enums;

import java.util.Arrays;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum SearchOperationEnum {

    CONTAINS("contains"),
    NOT_CONTAINS("not_contains"),
    EQUALS("equals"),
    NOT_EQUALS("not_equals"),
    STARTS_WITH("starts_with"),
    ENDS_WITH("ends_with"),
    GREATER_THAN("greater_than"),
    GREATER_THAN_OR_EQUAL("greater_than_or_equal"),
    LESS_THAN("less_than"),
    LESS_THAN_OR_EQUAL("less_than_or_equal"),
    IS_EMPTY("is_empty"),
    IS_NOT_EMPTY("is_not_empty"),
    IN("in"),
    NOT_IN("not_in"),
    IS_ANY_OF("is_any_of");

    private final String value;

    @JsonValue
    public String getValue() {
        return value;
    }

    @JsonCreator
    public static SearchOperationEnum fromValue(String value) {
        return Arrays.stream(SearchOperationEnum.values())
                .filter(operation -> operation.value.equalsIgnoreCase(value))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Operation not implemented: " + value));
    }

    @Converter(autoApply = true)
    public static class SearchOperationEnumConverter implements AttributeConverter<SearchOperationEnum, String> {

        @Override
        public String convertToDatabaseColumn(SearchOperationEnum operation) {
            return operation != null ? operation.getValue() : null;
        }

        @Override
        public SearchOperationEnum convertToEntityAttribute(String dbData) {
            return dbData != null ? SearchOperationEnum.fromValue(dbData) : null;
        }
    }
}

```

## src/main/java/com/nubo/operations/api/models/enums/SideEnum.java

```java
package com.nubo.operations.api.models.enums;

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

## src/main/java/com/nubo/operations/api/models/enums/StatusEnum.java

```java
package com.nubo.operations.api.models.enums;

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
public enum StatusEnum {

    CORRECTION_ACCEPTED_ASSIGNMENT(11),
    NEGOCIATED(13),
    UNCOMPLETED(14),
    FINISHED(15),
    CANCELED(11),
    NOT_STATUS(0);

    private final Integer value;

    @JsonValue
    public Integer getValue() {
        return value;
    }

    @JsonCreator
    public static StatusEnum fromValue(Integer value) {
        return Arrays.stream(StatusEnum.values())
                .filter(status -> Objects.equals(status.value, value))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Unknown value: " + value));
    }

    @Converter(autoApply = true)
    public static class StatusEnumConverter implements AttributeConverter<StatusEnum, Integer> {

        @Override
        public Integer convertToDatabaseColumn(StatusEnum status) {
            return status != null ? status.getValue() : null;
        }

        @Override
        public StatusEnum convertToEntityAttribute(Integer dbData) {
            return dbData != null ? StatusEnum.fromValue(dbData) : null;
        }
    }

}

```

## src/main/java/com/nubo/operations/api/models/enums/TaxesEnum.java

```java
package com.nubo.operations.api.models.enums;

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

## src/main/java/com/nubo/operations/api/models/enums/TypeEnum.java

```java
package com.nubo.operations.api.models.enums;

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

    JOINT_ACCOUNT(22L),
    MASTER_ACCOUNT(26L),
    COUNTED_OPERATION(60L),
    REPO_OPERATION(61L),
    THIRD_PARTIES_POINT_ORIGIN(120L),
    OWN_POSITION_POINT_ORIGIN(121L),
    COLLECTIVE_PORTFOLIO_POINT_ORIGIN(122L);

    private final Long value;

    @JsonValue
    public Long getValue() {
        return value;
    }

    @JsonCreator
    public static TypeEnum fromValue(Long value) {
        return Arrays.stream(TypeEnum.values())
                .filter(status -> Objects.equals(status.value, value))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Unknown value: " + value));
    }

    @Converter(autoApply = true)
    public static class TypeEnumConverter implements AttributeConverter<TypeEnum, Long> {

        @Override
        public Long convertToDatabaseColumn(TypeEnum status) {
            return status != null ? status.getValue() : null;
        }

        @Override
        public TypeEnum convertToEntityAttribute(Long dbData) {
            return dbData != null ? TypeEnum.fromValue(dbData) : null;
        }
    }

}
```

## src/main/java/com/nubo/operations/api/models/enums/VersionApiEnum.java

```java
package com.nubo.operations.api.models.enums;

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

## src/main/java/com/nubo/operations/api/repository/CountryRepository.java

```java
package com.nubo.operations.api.repository;

import com.nubo.operations.api.models.entity.CountryEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CountryRepository extends JpaRepository<CountryEntity, Long> {
}

```

## src/main/java/com/nubo/operations/api/repository/CurrencyRepository.java

```java
package com.nubo.operations.api.repository;

import com.nubo.operations.api.models.entity.CurrencyEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CurrencyRepository extends JpaRepository<CurrencyEntity, Long> {
}

```

## src/main/java/com/nubo/operations/api/repository/DepositoryRepository.java

```java
package com.nubo.operations.api.repository;

import com.nubo.operations.api.models.entity.DepositoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepositoryRepository extends JpaRepository<DepositoryEntity, String> {
}

```

## src/main/java/com/nubo/operations/api/repository/HolidayRepository.java

```java
package com.nubo.operations.api.repository;

import com.nubo.operations.api.models.entity.HolidayEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface HolidayRepository extends JpaRepository<HolidayEntity, Long> {

    @Query("SELECT h FROM HolidayEntity h JOIN h.country c WHERE c.id = :countryId")
    List<HolidayEntity> findByCountryId(Long countryId);

}

```

## src/main/java/com/nubo/operations/api/repository/InvestorAccountRepository.java

```java
package com.nubo.operations.api.repository;

import com.nubo.operations.api.models.entity.InvestorAccountEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface InvestorAccountRepository extends JpaRepository<InvestorAccountEntity, Long> {

    Optional<InvestorAccountEntity> findByAccountNumber(String accountNumber);

}

```

## src/main/java/com/nubo/operations/api/repository/InvestorRepository.java

```java
package com.nubo.operations.api.repository;

import com.nubo.operations.api.models.entity.InvestorEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InvestorRepository extends JpaRepository<InvestorEntity, Long> {
}

```

## src/main/java/com/nubo/operations/api/repository/MarketRepository.java

```java
package com.nubo.operations.api.repository;

import com.nubo.operations.api.models.entity.MarketEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MarketRepository extends JpaRepository<MarketEntity, String> {
}

```

## src/main/java/com/nubo/operations/api/repository/ParticipantAccountRepository.java

```java
package com.nubo.operations.api.repository;

import com.nubo.operations.api.models.entity.ParticipantAccountEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ParticipantAccountRepository extends JpaRepository<ParticipantAccountEntity, Long> {

    Optional<ParticipantAccountEntity> findByAccountNumber(String accountNumber);

}

```

## src/main/java/com/nubo/operations/api/repository/ParticipantRepository.java

```java
package com.nubo.operations.api.repository;

import com.nubo.operations.api.models.entity.ParticipantEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ParticipantRepository extends JpaRepository<ParticipantEntity, Long> {
}

```

## src/main/java/com/nubo/operations/api/repository/SecurityTitleRepository.java

```java
package com.nubo.operations.api.repository;

import com.nubo.operations.api.models.entity.SecurityTitleEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SecurityTitleRepository extends JpaRepository<SecurityTitleEntity, Long> {
}

```

## src/main/java/com/nubo/operations/api/repository/SettlementRepository.java

```java
package com.nubo.operations.api.repository;

import com.nubo.operations.api.models.entity.SettlementEntity;
import com.nubo.operations.api.models.entity.SettlementKey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface SettlementRepository extends JpaRepository<SettlementEntity, SettlementKey>,
        JpaSpecificationExecutor<SettlementEntity> {

    void deleteByTradeIdAndSideId(Long tradeId, String sideId);

    List<SettlementEntity> findAllByTradeId(Long tradeId);

    @Query("SELECT s FROM SettlementEntity s JOIN s.trade t JOIN s.side si " +
            "WHERE t.id  = :tradeId AND s.fraction = :fraction AND si.id = :sideId")
    Optional<SettlementEntity> findByTradeIdAndFractionAndSideId(Long tradeId, Integer fraction, String sideId);

    @Query("SELECT s FROM SettlementEntity s JOIN s.trade t JOIN s.side si " +
            "WHERE t.id  = :tradeId AND si.id = :sideId")
    List<SettlementEntity> findByTradeIdAndSideId(Long tradeId, String sideId);

}

```

## src/main/java/com/nubo/operations/api/repository/SettlementStatusHistoryRepository.java

```java
package com.nubo.operations.api.repository;

import com.nubo.operations.api.models.entity.SettlementStatusHistoryEntity;
import com.nubo.operations.api.models.entity.SettlementStatusHistoryKey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;

public interface SettlementStatusHistoryRepository extends JpaRepository<SettlementStatusHistoryEntity, SettlementStatusHistoryKey>,
        JpaSpecificationExecutor<SettlementStatusHistoryEntity> {

    List<SettlementStatusHistoryEntity> findAllByTradeId(Long tradeId);

    void deleteByTradeIdAndSideId(Long tradeId, String sideId);

}

```

## src/main/java/com/nubo/operations/api/repository/SideRepository.java

```java
package com.nubo.operations.api.repository;

import com.nubo.operations.api.models.entity.SideEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SideRepository extends JpaRepository<SideEntity, String> {
}

```

## src/main/java/com/nubo/operations/api/repository/StatusRepository.java

```java
package com.nubo.operations.api.repository;

import com.nubo.operations.api.models.entity.StatusEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StatusRepository extends JpaRepository<StatusEntity, Integer> {
}

```

## src/main/java/com/nubo/operations/api/repository/TaxesRepository.java

```java
package com.nubo.operations.api.repository;

import com.nubo.operations.api.models.entity.TaxesEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface TaxesRepository extends JpaRepository<TaxesEntity, Long> {

    @Query("SELECT t FROM TaxesEntity t JOIN t.country c " +
            "WHERE c.id = :countryId AND t.code = :code")
    Optional<TaxesEntity> findByCountryIdAndCode(Long countryId, String code);

}

```

## src/main/java/com/nubo/operations/api/repository/TradeEquityRepository.java

```java
package com.nubo.operations.api.repository;

import com.nubo.operations.api.models.entity.TradeEquityEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TradeEquityRepository extends JpaRepository<TradeEquityEntity, Long> {
}

```

## src/main/java/com/nubo/operations/api/repository/TradeRepository.java

```java
package com.nubo.operations.api.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import com.nubo.operations.api.models.entity.TradeEntity;

public interface TradeRepository extends JpaRepository<TradeEntity, Long>, JpaSpecificationExecutor<TradeEntity>
{
    @Query("SELECT DISTINCT t.matchId FROM TradeEntity t WHERE (:matchId IS NULL OR CAST(t.matchId AS string) LIKE %:matchId%)")
    Page<Long> findAllMatchIds(Long matchId, Pageable pageable);
}

```

## src/main/java/com/nubo/operations/api/repository/TradingSessionRepository.java

```java
package com.nubo.operations.api.repository;

import com.nubo.operations.api.models.entity.TradingSessionEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TradingSessionRepository extends JpaRepository<TradingSessionEntity, String> {
}

```

## src/main/java/com/nubo/operations/api/repository/TradingSystemRepository.java

```java
package com.nubo.operations.api.repository;

import com.nubo.operations.api.models.entity.TradingSystemEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TradingSystemRepository extends JpaRepository<TradingSystemEntity, Long> {
}

```

## src/main/java/com/nubo/operations/api/repository/TypeRepository.java

```java
package com.nubo.operations.api.repository;

import com.nubo.operations.api.models.entity.TypeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TypeRepository extends JpaRepository<TypeEntity, Long> {
}

```

## src/main/java/com/nubo/operations/api/repository/UserNuboRepository.java

```java
package com.nubo.operations.api.repository;

import com.nubo.operations.api.models.entity.UserNuboEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface UserNuboRepository extends JpaRepository<UserNuboEntity, Long> {

    @Query("SELECT u FROM UserNuboEntity u " +
            "WHERE u.userName = :userName")
    Optional<UserNuboEntity> findByUserName(String userName);

}

```

## src/main/java/com/nubo/operations/api/service/AllTradeService.java

```java
package com.nubo.operations.api.service;

import com.nubo.operations.api.models.dto.response.AllTradeOutDto;
import com.nubo.operations.api.models.dto.response.CalculationTotalAmountOutDto;

public interface AllTradeService {

    AllTradeOutDto findAllByTradeId(Long tradeId);

    CalculationTotalAmountOutDto calculationTotalAmountByTradeAndSide(Long tradeId, String sideId);

}

```

## src/main/java/com/nubo/operations/api/service/CalculationCountedService.java

```java
package com.nubo.operations.api.service;

import com.nubo.operations.api.models.dto.request.CalculationInDto;
import com.nubo.operations.api.models.dto.request.CalculationIvaInDto;
import com.nubo.operations.api.models.dto.response.CalculationOutDto;

public interface CalculationCountedService {

    CalculationOutDto calculationSettlementWithIva(Long tradeId, CalculationIvaInDto calculationIvaInDto);

    CalculationOutDto calculationSettlementByCountryId(Long tradeId, Long countryId, CalculationInDto calculationInDto);

}

```

## src/main/java/com/nubo/operations/api/service/FractionationCountedService.java

```java
package com.nubo.operations.api.service;

import com.nubo.operations.api.client.operation.fractionation.models.dto.request.AssignmentInDto;
import com.nubo.operations.api.client.operation.fractionation.models.dto.request.FractionInDto;
import com.nubo.operations.api.models.dto.response.SettlementOutDto;

import java.util.List;

public interface FractionationCountedService {

    List<SettlementOutDto> createFractions(Long tradeId, String sideId, List<FractionInDto> fractionInDtoList);

    List<SettlementOutDto> updateAssignment(Long tradeId, String sideId, List<AssignmentInDto> assignmentInDtoList);

}

```

## src/main/java/com/nubo/operations/api/service/SettlementRedisService.java

```java
package com.nubo.operations.api.service;

import org.springframework.data.domain.Pageable;

import com.nubo.operations.api.models.dto.response.PageResponseOutDto;
import com.nubo.operations.api.models.dto.response.SettlementOutDto;

public interface SettlementRedisService {

    PageResponseOutDto<SettlementOutDto> findAllSettlementsDynamic(
            Pageable pageable,
            String fieldName,
            String fieldValue,
            String operation,
            Long tradeId,
            String sideId,
            String investorDocumentNumber);

    PageResponseOutDto<SettlementOutDto> findAllSettlementsRedisOnly(
            Pageable pageable,
            String fieldName,
            String fieldValue,
            String operation,
            Long tradeId,
            String sideId,
            String investorDocumentNumber);
}

```

## src/main/java/com/nubo/operations/api/service/SettlementService.java

```java
package com.nubo.operations.api.service;

import org.springframework.data.domain.Pageable;

import com.nubo.operations.api.models.dto.request.SettlementCommissionUpdateInDto;
import com.nubo.operations.api.models.dto.request.SettlementUpdateInDto;
import com.nubo.operations.api.models.dto.response.PageResponseOutDto;
import com.nubo.operations.api.models.dto.response.SettlementOutDto;
import com.nubo.operations.api.models.entity.SettlementKey;

public interface SettlementService {

    PageResponseOutDto<SettlementOutDto> findAllSettlements(Pageable pageable, Long tradeId, String sideId, String investorDocumentNumber);

    PageResponseOutDto<SettlementOutDto> findAllSettlements(int page, int size, String sort, String order, boolean all, Long tradeId, String sideId, String investorDocumentNumber);

    PageResponseOutDto<SettlementOutDto> findAllSettlementsDynamic(
            Pageable pageable,
            Long tradeId,
            String sideId,
            String investorDocumentNumber,
            String fieldName,
            String fieldValue,
            String operation);

    SettlementOutDto findSettlementById(SettlementKey settlementKey);

    SettlementOutDto updateSettlement(SettlementKey settlementKey, SettlementUpdateInDto settlementUpdateInDto);

    PageResponseOutDto<SettlementOutDto> findAllSettlementsByTrade(Pageable pageable, Long tradeId);

    PageResponseOutDto<SettlementOutDto> findAllSettlementsByTrade(int page, int size, String sort, String order, boolean all, Long tradeId);

    SettlementOutDto updateSettlementCommission(SettlementKey settlementKey,
                                                SettlementCommissionUpdateInDto settlementCommissionUpdateInDto);
}
```

## src/main/java/com/nubo/operations/api/service/TradeEquityService.java

```java
package com.nubo.operations.api.service;

import com.nubo.operations.api.models.dto.request.TradeEquityInDto;
import com.nubo.operations.api.models.dto.request.TradeEquityUpdateInDto;
import com.nubo.operations.api.models.dto.response.PageResponseOutDto;
import com.nubo.operations.api.models.dto.response.TradeEquityOutDto;
import org.springframework.data.domain.Pageable;

public interface TradeEquityService {

    PageResponseOutDto<TradeEquityOutDto> findAllTradeEquity(Pageable pageable);

    PageResponseOutDto<TradeEquityOutDto> findAllTradeEquity(int page, int size, String sort, String order, boolean all);

    TradeEquityOutDto findTradeEquityById(Long tradeId);

    TradeEquityOutDto createTradeEquity(TradeEquityInDto tradeEquityInDto);

    TradeEquityOutDto updateTradeEquity(Long tradeId, TradeEquityUpdateInDto tradeEquityUpdateInDto);
}

```

## src/main/java/com/nubo/operations/api/service/TradeRedisService.java

```java
package com.nubo.operations.api.service;

import org.springframework.data.domain.Pageable;

import com.nubo.operations.api.models.domain.TradeParams;
import com.nubo.operations.api.models.dto.response.PageResponseOutDto;
import com.nubo.operations.api.models.dto.response.TradeOutDto;

public interface TradeRedisService {


    PageResponseOutDto<TradeOutDto> findAllTradesDynamic(
            Pageable pageable,
            String fieldName,
            String fieldValue,
            String operation,
            TradeParams tradeParams);


    PageResponseOutDto<TradeOutDto> findAllTradesRedisOnly(
            Pageable pageable,
            String fieldName,
            String fieldValue,
            String operation,
            TradeParams tradeParams);
}

```

## src/main/java/com/nubo/operations/api/service/TradeService.java

```java
package com.nubo.operations.api.service;

import org.springframework.data.domain.Pageable;

import com.nubo.operations.api.models.domain.TradeParams;
import com.nubo.operations.api.models.dto.request.TradeInDto;
import com.nubo.operations.api.models.dto.request.TradeUpdateInDto;
import com.nubo.operations.api.models.dto.response.PageResponseOutDto;
import com.nubo.operations.api.models.dto.response.TradeOutDto;

public interface TradeService {

    PageResponseOutDto<TradeOutDto> findAllTrades(Pageable pageable, TradeParams tradeParams);

    PageResponseOutDto<Long> findAllTradeIds(Pageable pageable, Long matchId);

    TradeOutDto findTradeById(Long tradeId);

    TradeOutDto createTrade(TradeInDto tradeInDto);

    TradeOutDto updateTrade(Long tradeId, TradeUpdateInDto tradeUpdateInDto);

    PageResponseOutDto<TradeOutDto> findAllTradesDynamic(
            Pageable pageable,
            String fieldName,
            String fieldValue,
            String operation,
            TradeParams tradeParams);

    long countAllTrades();

}

```

## src/main/java/com/nubo/operations/api/service/TransformationCorrectionService.java

```java
package com.nubo.operations.api.service;

import java.util.List;

import com.nubo.operations.api.client.operation.fractionation.models.dto.request.AssignmentInDto;
import com.nubo.operations.api.client.operation.fractionation.models.dto.request.FractionInDto;
import com.nubo.operations.api.models.dto.response.SettlementOutDto;

public interface TransformationCorrectionService {

    void sendEventUpdate(Long tradeId, String sideId,
            List<AssignmentInDto> assignmentInDtoList, List<SettlementOutDto> response,
            List<SettlementOutDto> previous);

    void sendEventCreate(Long tradeId, String sideId,
            List<FractionInDto> fractionInDtoList, List<SettlementOutDto> response);

}

```

## src/main/java/com/nubo/operations/api/service/ValidateCountedFractionService.java

```java
package com.nubo.operations.api.service;

import com.nubo.operations.api.client.operation.rules.models.dto.request.FractionRuleInDto;
import com.nubo.operations.api.models.dto.response.FractionAccountOutDto;
import com.nubo.operations.api.models.dto.response.ParticipantOutDto;

import java.util.List;

public interface ValidateCountedFractionService {

    FractionAccountOutDto validateAccountFractionCorrection(String accountNumber, Long tradeId, String sideId);

    Boolean validateQuantityFractionsCorrection(Long tradeId, List<FractionRuleInDto> fractionRuleInDtoList);

    Boolean validateRangeQuantityFractionsCorrection(Long tradeId, List<FractionRuleInDto> fractionRuleInDtoList);

    Boolean validateMaximumLimitFractionsCorrection(Long tradeId, List<FractionRuleInDto> fractionRuleInDtoList);

    ParticipantOutDto validateDirectDepositorFractionCorrection(Long tradeId, String sideId);

}

```

## src/main/java/com/nubo/operations/api/service/ValidateCountedOperationService.java

```java
package com.nubo.operations.api.service;

public interface ValidateCountedOperationService {

    Boolean validateTypeCountedTradeCorrection(Long tradeId);

    Boolean validateCustodianTradeCorrection(Long tradeId, String sideId);

    Boolean validateDaysAllowedTradeCorrection(Long tradeId);

}
```

## src/main/java/com/nubo/operations/api/service/impl/AllTradeServiceImpl.java

```java
package com.nubo.operations.api.service.impl;

import com.nubo.operations.api.application.properties.PropertiesContext;
import com.nubo.operations.api.exception.ServiceException;
import com.nubo.operations.api.exception.error.ErrorCode;
import com.nubo.operations.api.helpers.MapperUtil;
import com.nubo.operations.api.models.dto.response.AllTradeOutDto;
import com.nubo.operations.api.models.dto.response.CalculationTotalAmountOutDto;
import com.nubo.operations.api.models.entity.SettlementEntity;
import com.nubo.operations.api.models.entity.TradeEntity;
import com.nubo.operations.api.models.entity.TradeEquityEntity;
import com.nubo.operations.api.models.enums.VersionApiEnum;
import com.nubo.operations.api.repository.SettlementRepository;
import com.nubo.operations.api.repository.TradeEquityRepository;
import com.nubo.operations.api.repository.TradeRepository;
import com.nubo.operations.api.service.AllTradeService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
@Slf4j
public class AllTradeServiceImpl implements AllTradeService {

    private final TradeRepository tradeRepository;
    private final TradeEquityRepository tradeEquityRepository;
    private final SettlementRepository settlementRepository;

    @Override
    @Transactional
    public AllTradeOutDto findAllByTradeId(Long tradeId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllByTradeIdV1(tradeId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private AllTradeOutDto findAllByTradeIdV1(Long tradeId) {
        log.info("Start method findAllByTradeIdV1, tradeId -> {}", tradeId);

        TradeEntity tradeEntity = validateTrade(tradeId);
        TradeEquityEntity tradeEquityEntity = validateTradeEquity(tradeId);
        List<SettlementEntity> settlementEntityList = validateSettlement(tradeId);

        AllTradeOutDto allTradeOutDto = MapperUtil.tradeEntityToAllTradeOutDto(tradeEntity,
                tradeEquityEntity, settlementEntityList);

        log.info("End method findAllByTradeIdV1, All -> {}", allTradeOutDto);
        return allTradeOutDto;
    }

    @Override
    public CalculationTotalAmountOutDto calculationTotalAmountByTradeAndSide(Long tradeId, String sideId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return calculationTotalAmountByTradeAndSideV1(tradeId, sideId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private CalculationTotalAmountOutDto calculationTotalAmountByTradeAndSideV1(Long tradeId, String sideId) {
        log.info("Start method calculationTotalAmountByTradeAndSideV1, tradeId -> {}, sideId -> {}", tradeId, sideId);

        List<SettlementEntity> settlementEntityList = settlementRepository.findByTradeIdAndSideId(tradeId, sideId);

        BigDecimal netAmountTotal = BigDecimal.ZERO;
        BigDecimal transferValue = BigDecimal.ZERO;
        for (SettlementEntity settlementEntity : settlementEntityList) {
            netAmountTotal = netAmountTotal.add(settlementEntity.getNetAmount());
            transferValue = transferValue.add(settlementEntity.getSettlementAmount());
        }

        CalculationTotalAmountOutDto calculationTotalAmountOutDto = CalculationTotalAmountOutDto.builder()
                .netAmountTotal(netAmountTotal)
                .transferValueTotal(transferValue)
                .build();

        log.info("End method calculationTotalAmountByTradeAndSideV1");

        return calculationTotalAmountOutDto;
    }

    private TradeEntity validateTrade(Long tradeId) {
        return tradeRepository.findById(tradeId)
                .orElseThrow(() -> new ServiceException(ErrorCode.TRADE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private TradeEquityEntity validateTradeEquity(Long tradeId) {
        return tradeEquityRepository.findById(tradeId)
                .orElseGet(() -> TradeEquityEntity.builder().build());
    }

    private List<SettlementEntity> validateSettlement(Long tradeId) {
        return settlementRepository.findAllByTradeId(tradeId);
    }

}

```

## src/main/java/com/nubo/operations/api/service/impl/CalculationCountedServiceImpl.java

```java
package com.nubo.operations.api.service.impl;

import com.nubo.operations.api.application.properties.PropertiesContext;
import com.nubo.operations.api.client.operation.calculation.models.dto.request.SettleAccountsInDto;
import com.nubo.operations.api.client.operation.calculation.models.dto.response.SettleAccountsOutDto;
import com.nubo.operations.api.client.operation.calculation.service.OperationCalculationClient;
import com.nubo.operations.api.exception.ServiceException;
import com.nubo.operations.api.exception.error.ErrorCode;
import com.nubo.operations.api.helpers.MapperUtil;
import com.nubo.operations.api.models.dto.request.CalculationInDto;
import com.nubo.operations.api.models.dto.request.CalculationIvaInDto;
import com.nubo.operations.api.models.dto.response.CalculationOutDto;
import com.nubo.operations.api.models.entity.SideEntity;
import com.nubo.operations.api.models.entity.TaxesEntity;
import com.nubo.operations.api.models.entity.TradeEntity;
import com.nubo.operations.api.models.enums.TaxesEnum;
import com.nubo.operations.api.models.enums.TypeEnum;
import com.nubo.operations.api.models.enums.VersionApiEnum;
import com.nubo.operations.api.repository.SideRepository;
import com.nubo.operations.api.repository.TaxesRepository;
import com.nubo.operations.api.repository.TradeRepository;
import com.nubo.operations.api.service.CalculationCountedService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
@RequiredArgsConstructor
@Slf4j
public class CalculationCountedServiceImpl implements CalculationCountedService {

    private final TradeRepository tradeRepository;
    private final TaxesRepository taxesRepository;
    private final SideRepository sideRepository;
    private final OperationCalculationClient operationCalculationClient;

    @Override
    public CalculationOutDto calculationSettlementWithIva(Long tradeId, CalculationIvaInDto calculationIvaInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return calculationSettlementWithIvaV1(tradeId, calculationIvaInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private CalculationOutDto calculationSettlementWithIvaV1(Long tradeId, CalculationIvaInDto calculationIvaInDto) {
        log.info("Start method calculationSettlementWithIvaV1, calculationIvaInDto -> {}", calculationIvaInDto);

        TradeEntity tradeEntity = validateTrade(tradeId);
        SideEntity sideEntity = validateSide(calculationIvaInDto.getSideId());

        validateTypeOperation(tradeEntity);

        SettleAccountsInDto settleAccountsInDto = SettleAccountsInDto.builder()
                .quantity(calculationIvaInDto.getQuantity())
                .price(calculationIvaInDto.getPrice())
                .commission(calculationIvaInDto.getCommission())
                .valTax(calculationIvaInDto.getValTax())
                .sideId(sideEntity.getId())
                .build();

        SettleAccountsOutDto settleAccountsOutDto = operationCalculationClient.getSettleAccounts(settleAccountsInDto);

        CalculationOutDto calculationOutDto = MapperUtil.settleAccountsOutDtoToCalculationOutDto(settleAccountsOutDto);
        calculationOutDto.setCommissionPercentage(calculationIvaInDto.getCommission());
        calculationOutDto.setValTax(calculationIvaInDto.getValTax());

        log.info("End method calculationSettlementWithIvaV1, calculationOutDto -> {}", calculationOutDto);

        return calculationOutDto;
    }

    @Override
    public CalculationOutDto calculationSettlementByCountryId(Long tradeId, Long countryId, CalculationInDto calculationInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return calculationSettlementByCountryIdV1(tradeId, countryId, calculationInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private CalculationOutDto calculationSettlementByCountryIdV1(Long tradeId, Long countryId, CalculationInDto calculationInDto) {
        log.info("Start method calculationSettlementByCountryIdV1, countryId -> {}, calculationInDto -> {}", countryId,
                calculationInDto);

        TradeEntity tradeEntity = validateTrade(tradeId);
        SideEntity sideEntity = validateSide(calculationInDto.getSideId());

        validateTypeOperation(tradeEntity);

        TaxesEntity taxesEntity = taxesRepository.findByCountryIdAndCode(countryId, TaxesEnum.IVA.getValue())
                .orElseThrow(() -> new ServiceException(ErrorCode.TAXES_NOT_FOUND, HttpStatus.NOT_FOUND));

        SettleAccountsInDto settleAccountsInDto = SettleAccountsInDto.builder()
                .quantity(calculationInDto.getQuantity())
                .price(calculationInDto.getPrice())
                .commission(calculationInDto.getCommission())
                .valTax(taxesEntity.getValue())
                .sideId(sideEntity.getId())
                .build();

        SettleAccountsOutDto settleAccountsOutDto = operationCalculationClient.getSettleAccounts(settleAccountsInDto);

        CalculationOutDto calculationOutDto = MapperUtil.settleAccountsOutDtoToCalculationOutDto(settleAccountsOutDto);
        calculationOutDto.setCommissionPercentage(calculationInDto.getCommission());
        calculationOutDto.setValTax(taxesEntity.getValue());

        log.info("End method calculationSettlementByCountryIdV1, calculationOutDto -> {}", calculationOutDto);

        return calculationOutDto;
    }

    private SideEntity validateSide(String sideId) {
        return sideRepository.findById(sideId)
                .orElseThrow(() -> new ServiceException(ErrorCode.SIDE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private TradeEntity validateTrade(Long tradeId) {
        return tradeRepository.findById(tradeId)
                .orElseThrow(() -> new ServiceException(ErrorCode.TRADE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private void validateTypeOperation(TradeEntity tradeEntity) {
        if (!TypeEnum.COUNTED_OPERATION.getValue().equals(tradeEntity.getType().getId())) {
            throw new ServiceException(ErrorCode.TYPE_COUNTED_OPERATION_REQUIRED, HttpStatus.BAD_REQUEST);
        }
    }

}

```

## src/main/java/com/nubo/operations/api/service/impl/FractionationCountedServiceImpl.java

```java
package com.nubo.operations.api.service.impl;

import com.nubo.operations.api.application.properties.PropertiesContext;
import com.nubo.operations.api.client.operation.fractionation.models.dto.request.AssignmentInDto;
import com.nubo.operations.api.client.operation.fractionation.models.dto.request.FractionInDto;
import com.nubo.operations.api.client.operation.fractionation.service.OperationFractionationClient;
import com.nubo.operations.api.client.operation.rules.models.dto.request.FractionRuleInDto;
import com.nubo.operations.api.client.operation.rules.models.dto.request.StatusAllowedOptionsInDto;
import com.nubo.operations.api.client.operation.rules.models.dto.response.StatusAllowedOptionsOutDto;
import com.nubo.operations.api.client.operation.rules.models.dto.response.StatusClientOutDto;
import com.nubo.operations.api.client.operation.rules.service.OperationBusinessRuleClient;
import com.nubo.operations.api.exception.ServiceException;
import com.nubo.operations.api.exception.error.ErrorCode;
import com.nubo.operations.api.helpers.MapperUtil;
import com.nubo.operations.api.models.dto.response.SettlementOutDto;
import com.nubo.operations.api.models.entity.InvestorAccountEntity;
import com.nubo.operations.api.models.entity.ParticipantAccountEntity;
import com.nubo.operations.api.models.entity.SideEntity;
import com.nubo.operations.api.models.entity.TradeEntity;
import com.nubo.operations.api.models.enums.BusinessRuleEnum;
import com.nubo.operations.api.models.enums.VersionApiEnum;
import com.nubo.operations.api.repository.InvestorAccountRepository;
import com.nubo.operations.api.repository.ParticipantAccountRepository;
import com.nubo.operations.api.repository.SettlementRepository;
import com.nubo.operations.api.repository.SideRepository;
import com.nubo.operations.api.repository.TradeRepository;
import com.nubo.operations.api.service.FractionationCountedService;
import com.nubo.operations.api.service.TransformationCorrectionService;
import com.nubo.operations.api.service.ValidateCountedFractionService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class FractionationCountedServiceImpl implements FractionationCountedService {

    private final TradeRepository tradeRepository;
    private final SideRepository sideRepository;
    private final ParticipantAccountRepository participantAccountRepository;
    private final InvestorAccountRepository investorAccountRepository;
    private final SettlementRepository settlementRepository;
    private final OperationFractionationClient operationFractionationClient;
    private final ValidateCountedFractionService validateCountedFractionService;
    private final TransformationCorrectionService transformationCorrectionService;
    private final OperationBusinessRuleClient operationBusinessRuleClient;

    @Override
    public List<SettlementOutDto> createFractions(Long tradeId, String sideId, List<FractionInDto> fractionInDtoList) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return createFractionsV1(tradeId, sideId, fractionInDtoList);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<SettlementOutDto> createFractionsV1(Long tradeId, String sideId,
                                                     List<FractionInDto> fractionInDtoList) {
        log.info("Start method createFractionsV1 with tradeId -> {}, sideId -> {}", tradeId, sideId);

        TradeEntity tradeEntity = validateTrade(tradeId);
        SideEntity sideEntity = validateSide(sideId);

        StatusClientOutDto statusClientOutDto = this.validateRuleAndStatus(tradeEntity.getCountry().getId(),
                tradeEntity.getStatus().getId(), tradeEntity.getType().getId());

        this.validateCreateFraction(tradeEntity, sideEntity, fractionInDtoList);
        List<SettlementOutDto> settlementOutDtoList = operationFractionationClient.createFractions(tradeId, sideId,
                statusClientOutDto.getId(), fractionInDtoList);

        transformationCorrectionService.sendEventCreate(tradeId, sideId, fractionInDtoList,
                settlementOutDtoList);

        log.info("End method createFractionsV1, settlementOutDtoList -> {}", settlementOutDtoList);
        return settlementOutDtoList;
    }

    @Override
    public List<SettlementOutDto> updateAssignment(Long tradeId, String sideId,
                                                   List<AssignmentInDto> assignmentInDtoList) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return updateAssignmentV1(tradeId, sideId, assignmentInDtoList);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<SettlementOutDto> updateAssignmentV1(Long tradeId, String sideId,
                                                      List<AssignmentInDto> assignmentInDtoList) {
        log.info("Start method updateAssignmentV1 with tradeId -> {}, sideId -> {}", tradeId, sideId);

        TradeEntity tradeEntity = validateTrade(tradeId);
        SideEntity sideEntity = validateSide(sideId);

        StatusClientOutDto statusClientOutDto = this.validateRuleAndStatus(tradeEntity.getCountry().getId(),
                tradeEntity.getStatus().getId(), tradeEntity.getType().getId());
        this.validateUpdateFraction(tradeEntity, sideEntity, assignmentInDtoList);

        List<SettlementOutDto> previousSettlements = settlementRepository.findByTradeIdAndSideId(tradeId, sideId)
                .stream()
                .map(MapperUtil::settlementEntityToSettlementOutDto)
                .toList();

        assignmentInDtoList = markSendDepositForChangedAssignments(previousSettlements, assignmentInDtoList);


        List<SettlementOutDto> settlementOutDtoList = operationFractionationClient.updateAssignment(tradeId, sideId,
                statusClientOutDto.getId(), assignmentInDtoList);


        transformationCorrectionService.sendEventUpdate(
                tradeId, sideId, assignmentInDtoList,
                settlementOutDtoList, previousSettlements
        );

        log.info("End method updateAssignmentV1, settlementOutDtoList -> {}", settlementOutDtoList);
        return settlementOutDtoList;
    }

    private void validateCreateFraction(TradeEntity tradeEntity, SideEntity sideEntity,
                                        List<FractionInDto> fractionInDtoList) {

        validateAccountDuplicatedCreateFraction(fractionInDtoList);

        List<FractionRuleInDto> fractionRuleInDtoList = fractionInDtoList.stream()
                .map(fractionInDto -> {
                    validateFraction(tradeEntity, sideEntity,
                            fractionInDto.getInvestorAccountId(), fractionInDto.getParticipantAccountId());
                    FractionRuleInDto fractionRuleInDto = new FractionRuleInDto();
                    fractionRuleInDto.setFractionQuantity(fractionInDto.getFractionQuantity());
                    return fractionRuleInDto;
                }).toList();

        validateCountedFractionService.validateQuantityFractionsCorrection(tradeEntity.getId(), fractionRuleInDtoList);

        validateCountedFractionService.validateMaximumLimitFractionsCorrection(tradeEntity.getId(),
                fractionRuleInDtoList);
    }

    private void validateUpdateFraction(TradeEntity tradeEntity, SideEntity sideEntity,
                                        List<AssignmentInDto> assignmentInDtoList) {

        validateAccountDuplicatedUpdateFraction(assignmentInDtoList);

        List<FractionRuleInDto> fractionRuleInDtoList = assignmentInDtoList.stream()
                .map(assignmentInDto -> {
                    validateFraction(tradeEntity, sideEntity,
                            assignmentInDto.getInvestorAccountId(), assignmentInDto.getParticipantAccountId());
                    FractionRuleInDto fractionRuleInDto = new FractionRuleInDto();
                    fractionRuleInDto.setFractionQuantity(assignmentInDto.getFractionQuantity());
                    return fractionRuleInDto;
                }).toList();

        validateCountedFractionService.validateQuantityFractionsCorrection(tradeEntity.getId(), fractionRuleInDtoList);

        validateCountedFractionService.validateMaximumLimitFractionsCorrection(tradeEntity.getId(),
                fractionRuleInDtoList);
    }

    private void validateFraction(TradeEntity tradeEntity,
                                  SideEntity sideEntity, Long investorAccountId, Long participantAccountId) {
        if ((ObjectUtils.isEmpty(investorAccountId) && ObjectUtils.isEmpty(participantAccountId)) ||
                !ObjectUtils.isEmpty(investorAccountId) && !ObjectUtils.isEmpty(participantAccountId)) {
            throw new ServiceException(ErrorCode.PARTICIPANT_ACCOUNT_OR_INVESTOR_ACCOUNT_REQUIRED,
                    HttpStatus.BAD_REQUEST);
        }

        String accountNumber = null;
        if (!ObjectUtils.isEmpty(investorAccountId)) {
            InvestorAccountEntity investorAccountEntity = validateInvestorAccount(investorAccountId);
            accountNumber = investorAccountEntity.getAccountNumber();
        }

        if (!ObjectUtils.isEmpty(participantAccountId)) {
            ParticipantAccountEntity participantAccountEntity = validateParticipantAccount(participantAccountId);
            accountNumber = participantAccountEntity.getAccountNumber();
        }

        validateCountedFractionService.validateAccountFractionCorrection(accountNumber, tradeEntity.getId(),
                sideEntity.getId());
    }

    private void validateAccountDuplicatedCreateFraction(List<FractionInDto> fractionInDtoList) {
        Set<Long> duplicatedInvestorAccountList = new HashSet<>();
        for (FractionInDto fractionInDto : fractionInDtoList) {
            if (!ObjectUtils.isEmpty(fractionInDto.getInvestorAccountId()) &&
                    !duplicatedInvestorAccountList.add(fractionInDto.getInvestorAccountId())) {
                throw new ServiceException(ErrorCode.INVESTOR_ACCOUNT_DUPLICATED, HttpStatus.BAD_REQUEST);
            }
        }

        Set<Long> duplicatedParticipantAccountList = new HashSet<>();
        for (FractionInDto fractionInDto : fractionInDtoList) {
            if (!ObjectUtils.isEmpty(fractionInDto.getParticipantAccountId()) &&
                    !duplicatedParticipantAccountList.add(fractionInDto.getParticipantAccountId())) {
                throw new ServiceException(ErrorCode.PARTICIPANT_ACCOUNT_DUPLICATED, HttpStatus.BAD_REQUEST);
            }
        }
    }

    private void validateAccountDuplicatedUpdateFraction(List<AssignmentInDto> assignmentInDtoList) {
        Set<Long> duplicatedInvestorAccountList = new HashSet<>();
        for (AssignmentInDto assignmentInDto : assignmentInDtoList) {
            if (!ObjectUtils.isEmpty(assignmentInDto.getInvestorAccountId()) &&
                    !duplicatedInvestorAccountList.add(assignmentInDto.getInvestorAccountId())) {
                throw new ServiceException(ErrorCode.INVESTOR_ACCOUNT_DUPLICATED, HttpStatus.BAD_REQUEST);
            }
        }

        Set<Long> duplicatedParticipantAccountList = new HashSet<>();
        for (AssignmentInDto assignmentInDto : assignmentInDtoList) {
            if (!ObjectUtils.isEmpty(assignmentInDto.getParticipantAccountId()) &&
                    !duplicatedParticipantAccountList.add(assignmentInDto.getParticipantAccountId())) {
                throw new ServiceException(ErrorCode.PARTICIPANT_ACCOUNT_DUPLICATED, HttpStatus.BAD_REQUEST);
            }
        }
    }

    private TradeEntity validateTrade(Long tradeId) {
        return tradeRepository.findById(tradeId)
                .orElseThrow(() -> new ServiceException(ErrorCode.TRADE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private SideEntity validateSide(String sideId) {
        return sideRepository.findById(sideId)
                .orElseThrow(() -> new ServiceException(ErrorCode.SIDE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private ParticipantAccountEntity validateParticipantAccount(Long participantAccountId) {
        return participantAccountRepository.findById(participantAccountId)
                .orElseThrow(() -> new ServiceException(ErrorCode.PARTICIPANT_ACCOUNT_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private InvestorAccountEntity validateInvestorAccount(Long investorAccountId) {
        return investorAccountRepository.findById(investorAccountId)
                .orElseThrow(() -> new ServiceException(ErrorCode.INVESTOR_ACCOUNT_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private StatusClientOutDto validateRuleAndStatus(Long countryId, Long statusId, Long typeId) {
        StatusAllowedOptionsInDto statusAllowedOptionsInDto = StatusAllowedOptionsInDto.builder()
                .code(BusinessRuleEnum.RULE_COUNTED_OPERATION_CORRECTION.getValue())
                .statusId(statusId)
                .countryId(countryId)
                .typeId(typeId)
                .build();

        StatusAllowedOptionsOutDto statusAllowedOptionsOutDto = operationBusinessRuleClient
                .validateStatusByCode(statusAllowedOptionsInDto);
        if (Boolean.TRUE.equals(statusAllowedOptionsOutDto.getIsValid())) {
            StatusClientOutDto newStatus = statusAllowedOptionsOutDto.getNewStatus();
            if (newStatus == null) {
                throw new ServiceException(ErrorCode.ERROR_BUSINESS_RULE, HttpStatus.BAD_GATEWAY);
            }
            return newStatus;
        } else {
            throw new ServiceException(ErrorCode.ERROR_BUSINESS_RULE,
                    statusAllowedOptionsOutDto.getDescription(), HttpStatus.BAD_REQUEST);
        }
    }

    private List<AssignmentInDto> markSendDepositForChangedAssignments(
            List<SettlementOutDto> previousSettlements,
            List<AssignmentInDto> assignmentInDtoList) {

        Map<Integer, SettlementOutDto> previousByFraction = previousSettlements.stream()
                .collect(Collectors.toMap(
                        SettlementOutDto::getFraction,
                        s -> s,
                        (a, b) -> a
                ));

        return assignmentInDtoList.stream()
                .peek(assignment -> {
                    SettlementOutDto prev = previousByFraction.get(assignment.getFraction());

                    Long prevInvestorAccountId = null;
                    Long prevParticipantAccountId = null;

                    if (prev != null) {
                        if (prev.getInvestorAccount() != null) {
                            prevInvestorAccountId = prev.getInvestorAccount().getId();
                        }
                        if (prev.getParticipantAccount() != null) {
                            prevParticipantAccountId = prev.getParticipantAccount().getId();
                        }
                    }

                    Long newInvestorAccountId = assignment.getInvestorAccountId();
                    Long newParticipantAccountId = assignment.getParticipantAccountId();

                    boolean changed;
                    if (prev == null) {
                        changed = newInvestorAccountId != null || newParticipantAccountId != null;
                    } else {
                        changed = !Objects.equals(prevInvestorAccountId, newInvestorAccountId)
                                || !Objects.equals(prevParticipantAccountId, newParticipantAccountId);
                    }

                    assignment.setSendDeposit(changed);
                })
                .filter(AssignmentInDto::getSendDeposit)
                .toList();
    }

}

```

## src/main/java/com/nubo/operations/api/service/impl/SettlementRedisServiceImpl.java

```java
package com.nubo.operations.api.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.function.Function;

import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nubo.operations.api.application.properties.PropertiesContext;
import com.nubo.operations.api.application.properties.PropertiesConfig;
import com.nubo.operations.api.exception.ServiceException;
import com.nubo.operations.api.exception.error.ErrorCode;
import com.nubo.operations.api.helpers.SettlementRedisMapper;
import com.nubo.operations.api.helpers.RedisMapperUtils.FilterContext;
import com.nubo.operations.api.models.dto.response.PageResponseOutDto;
import com.nubo.operations.api.models.dto.response.SettlementOutDto;
import com.nubo.operations.api.models.enums.SearchOperationEnum;
import com.nubo.operations.api.models.enums.VersionApiEnum;
import com.nubo.operations.api.service.SettlementRedisService;
import com.nubo.operations.api.service.SettlementService;

import io.redisearch.Query;
import io.redisearch.SearchResult;
import io.redisearch.client.Client;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class SettlementRedisServiceImpl implements SettlementRedisService {

    private final SettlementRedisMapper settlementRedisMapper;
    private final SettlementService settlementService;
    private final PropertiesConfig propertiesConfig;

    private static final String INDEX_NAME = "trade_settlement_idx";

    @Override
    @Transactional
    public PageResponseOutDto<SettlementOutDto> findAllSettlementsDynamic(
            Pageable pageable,
            String fieldName,
            String fieldValue,
            String operation,
            Long tradeId,
            String sideId,
            String investorDocumentNumber) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllSettlementsDynamicV1(pageable, fieldName, fieldValue, operation, tradeId, sideId, investorDocumentNumber);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    @Override
    @Transactional
    public PageResponseOutDto<SettlementOutDto> findAllSettlementsRedisOnly(
            Pageable pageable,
            String fieldName,
            String fieldValue,
            String operation,
            Long tradeId,
            String sideId,
            String investorDocumentNumber) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllSettlementsRedisOnlyV1(pageable, fieldName, fieldValue, operation, tradeId, sideId, investorDocumentNumber);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    public PageResponseOutDto<SettlementOutDto> findAllSettlementsRedisOnlyV1(
            Pageable pageable,
            String fieldName,
            String fieldValue,
            String operation,
            Long tradeId,
            String sideId,
            String investorDocumentNumber) {

        log.info("Redis ONLY search - host: {}, port: {}", propertiesConfig.getRedisHost(), propertiesConfig.getRedisPort());

        try {
            log.info("Attempting to create Redis client...");
            Client client = new Client(INDEX_NAME, propertiesConfig.getRedisHost(), propertiesConfig.getRedisPort());
            log.info("Redis client created successfully");

            String queryString = buildQueryString(fieldName, fieldValue, operation);

            log.info("Executing Redis ONLY query: {}", queryString);

            Query query = new Query(queryString);
            query.limit((int) pageable.getOffset(), pageable.getPageSize());

            log.info("Executing Redis search...");
            SearchResult result = client.search(query);
            log.info("Redis search completed successfully, total results: {}", result.totalResults);
            
            client.close(); 

            List<SettlementOutDto> settlements = settlementRedisMapper.convertToSettlementOutDto(result.docs);
            
            long totalElements = result.totalResults;
            int totalPages = (int) Math.ceil((double) totalElements / pageable.getPageSize());

            PageResponseOutDto<SettlementOutDto> response = new PageResponseOutDto<>();
            response.setContent(settlements);
            response.setTotalElements(totalElements);
            response.setPageNumber(pageable.getPageNumber());
            response.setPageSize(pageable.getPageSize());
            response.setTotalPages(totalPages);
            return response;

        } catch (Exception e) {
            log.error("Error in Redis ONLY search: {}", e.getMessage(), e);
            log.info("Note: tradeId={}, sideId={}, investorDocumentNumber={} - available for future filtering", 
                    tradeId, sideId, investorDocumentNumber);
            PageResponseOutDto<SettlementOutDto> response = new PageResponseOutDto<>();
            response.setContent(new ArrayList<>());
            response.setTotalElements(0L);
            response.setPageNumber(pageable.getPageNumber());
            response.setPageSize(pageable.getPageSize());
            response.setTotalPages(0);
            return response;
        }
    }

    public PageResponseOutDto<SettlementOutDto> findAllSettlementsDynamicV1(
            Pageable pageable,
            String fieldName,
            String fieldValue,
            String operation,
            Long tradeId,
            String sideId,
            String investorDocumentNumber) {

        log.info("Redis configuration - host: {}, port: {}", propertiesConfig.getRedisHost(), propertiesConfig.getRedisPort());

        try {
            log.info("Attempting to create Redis client...");
            Client client = new Client(INDEX_NAME, propertiesConfig.getRedisHost(), propertiesConfig.getRedisPort());
            log.info("Redis client created successfully");

            String queryString = buildQueryString(fieldName, fieldValue, operation);

            log.info("Executing Redis query: {}", queryString);

            Query query = new Query(queryString);
            query.limit((int) pageable.getOffset(), pageable.getPageSize());

            log.info("Executing Redis search...");
            SearchResult result = client.search(query);
            log.info("Redis search completed successfully, total results: {}", result.totalResults);
            
            client.close(); 

            if (result.totalResults == 0) {
                log.info("Redis returned 0 results, falling back to database search");
                return fallbackToDatabaseSearch(pageable, fieldName, fieldValue, operation, tradeId, sideId, investorDocumentNumber);
            }
            
            List<SettlementOutDto> settlements = settlementRedisMapper.convertToSettlementOutDto(result.docs);
            
            long totalElements = result.totalResults;
            int totalPages = (int) Math.ceil((double) totalElements / pageable.getPageSize());

            PageResponseOutDto<SettlementOutDto> response = new PageResponseOutDto<>();
            response.setContent(settlements);
            response.setTotalElements(totalElements);
            response.setPageNumber(pageable.getPageNumber());
            response.setPageSize(pageable.getPageSize());
            response.setTotalPages(totalPages);
            return response;

        } catch (Exception e) {
            log.error("Error in Redis search: {}, falling back to database search", e.getMessage());
            return fallbackToDatabaseSearch(pageable, fieldName, fieldValue, operation, tradeId, sideId, investorDocumentNumber);
        }
    }

    private String buildQueryString(String fieldName, String fieldValue, String operation) {
        List<String> filters = new ArrayList<>();

        if (fieldName != null && operation != null) {
            SearchOperationEnum op = SearchOperationEnum.fromValue(operation);
            if (op == SearchOperationEnum.IS_EMPTY || op == SearchOperationEnum.IS_NOT_EMPTY || fieldValue != null) {
                String dynamicFilter = buildDynamicFilter(fieldName, fieldValue, op);
                if (dynamicFilter != null) {
                    filters.add(dynamicFilter);
                }
            }
        }

        String finalQuery = filters.isEmpty() ? "*" : String.join(" ", filters);
        log.info("Generated Redis query: {}", finalQuery);
        return finalQuery;
    }

    private String buildDynamicFilter(String fieldName, String fieldValue, SearchOperationEnum operation) {
        log.debug("Building dynamic filter for field: {}, value: {}, operation: {}", fieldName, fieldValue, operation);

        String redisFieldName = settlementRedisMapper.mapFieldNameToRedisField(fieldName);
        if (redisFieldName == null) {
            return null;
        }

        boolean isNumericField = SettlementRedisMapper.NUMERIC_FIELDS.contains(redisFieldName);
        boolean isDateField = SettlementRedisMapper.DATE_FIELDS.contains(redisFieldName);
        boolean isTagField = !isNumericField && !isDateField;
   
        FilterContext context = new FilterContext(redisFieldName, fieldValue, isNumericField, isDateField);
        
        Function<FilterContext, String> strategy = SettlementRedisMapper.FILTER_STRATEGIES.get(operation.getValue());
        
        if (strategy == null) {
            log.warn("Unsupported operation: {}, falling back to default behavior", operation);

            if (isNumericField) {
                return "@" + redisFieldName + ":[" + fieldValue + " " + fieldValue + "]";
            } else if (isTagField) {
                if (operation == SearchOperationEnum.CONTAINS) {
                    return "@" + redisFieldName + ":{*" + escapeTagValue(fieldValue) + "*}";
                } else {
                    return "@" + redisFieldName + ":{" + escapeTagValue(fieldValue) + "}";
                }
            } else {
                return "@" + redisFieldName + ":" + escapeValue(fieldValue);
            }
        }
        
        return strategy.apply(context);
    }

    private PageResponseOutDto<SettlementOutDto> fallbackToDatabaseSearch(
            Pageable pageable,
            String fieldName,
            String fieldValue,
            String operation,
            Long tradeId,
            String sideId,
            String investorDocumentNumber) {
        
        log.info("Executing fallback search in database with same parameters");
        
        try {
            return settlementService.findAllSettlementsDynamic(pageable, tradeId, sideId, investorDocumentNumber, fieldName, fieldValue, operation);
            
        } catch (Exception e) {
            log.error("Error in database fallback search: {}", e.getMessage(), e);
            PageResponseOutDto<SettlementOutDto> response = new PageResponseOutDto<>();
            response.setContent(new ArrayList<>());
            response.setTotalElements(0L);
            response.setPageNumber(pageable.getPageNumber());
            response.setPageSize(pageable.getPageSize());
            response.setTotalPages(0);
            return response;
        }
    }
    
    private String escapeTagValue(String value) {
        return value.replace(",", "\\,")
                    .replace(".", "\\.")
                    .replace("<", "\\<")
                    .replace(">", "\\>")
                    .replace("{", "\\{")
                    .replace("}", "\\}")
                    .replace("[", "\\[")
                    .replace("]", "\\]")
                    .replace("\"", "\\\"")
                    .replace("'", "\\'")
                    .replace(":", "\\:")
                    .replace(";", "\\;")
                    .replace("!", "\\!")
                    .replace("@", "\\@")
                    .replace("#", "\\#")
                    .replace("$", "\\$")
                    .replace("%", "\\%")
                    .replace("^", "\\^")
                    .replace("&", "\\&")
                    .replace("*", "\\*")
                    .replace("(", "\\(")
                    .replace(")", "\\)")
                    .replace("-", "\\-")
                    .replace("+", "\\+")
                    .replace("=", "\\=")
                    .replace("~", "\\~");
    }

    private String escapeValue(String value) {
        return "\"" + value.replace("\"", "\\\"") + "\"";
    }
}

```

## src/main/java/com/nubo/operations/api/service/impl/SettlementServiceImpl.java

```java
package com.nubo.operations.api.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Objects;

import com.nubo.operations.api.models.entity.TradeEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import com.nubo.operations.api.application.properties.PropertiesConfig;
import com.nubo.operations.api.application.properties.PropertiesContext;
import com.nubo.operations.api.client.operation.calculation.models.dto.request.SettleAccountsInDto;
import com.nubo.operations.api.client.operation.calculation.models.dto.response.SettleAccountsOutDto;
import com.nubo.operations.api.client.operation.calculation.service.OperationCalculationClient;
import com.nubo.operations.api.exception.ServiceException;
import com.nubo.operations.api.exception.error.ErrorCode;
import com.nubo.operations.api.helpers.MapperPageUtil;
import com.nubo.operations.api.helpers.MapperUtil;
import com.nubo.operations.api.helpers.SettlementSpecificationFactory;
import com.nubo.operations.api.models.dto.request.SettlementCommissionUpdateInDto;
import com.nubo.operations.api.models.dto.request.SettlementUpdateInDto;
import com.nubo.operations.api.models.dto.response.PageResponseOutDto;
import com.nubo.operations.api.models.dto.response.SettlementOutDto;
import com.nubo.operations.api.models.entity.InvestorAccountEntity;
import com.nubo.operations.api.models.entity.InvestorEntity;
import com.nubo.operations.api.models.entity.ParticipantAccountEntity;
import com.nubo.operations.api.models.entity.ParticipantEntity;
import com.nubo.operations.api.models.entity.SettlementEntity;
import com.nubo.operations.api.models.entity.SettlementKey;
import com.nubo.operations.api.models.entity.StatusEntity;
import com.nubo.operations.api.models.entity.TradingSystemEntity;
import com.nubo.operations.api.models.entity.TypeEntity;
import com.nubo.operations.api.models.enums.SearchOperationEnum;
import com.nubo.operations.api.models.enums.TypeEnum;
import com.nubo.operations.api.models.enums.VersionApiEnum;
import com.nubo.operations.api.repository.InvestorAccountRepository;
import com.nubo.operations.api.repository.InvestorRepository;
import com.nubo.operations.api.repository.ParticipantAccountRepository;
import com.nubo.operations.api.repository.ParticipantRepository;
import com.nubo.operations.api.repository.SettlementRepository;
import com.nubo.operations.api.repository.StatusRepository;
import com.nubo.operations.api.repository.TradingSystemRepository;
import com.nubo.operations.api.repository.TypeRepository;
import com.nubo.operations.api.service.SettlementService;

import jakarta.persistence.criteria.Predicate;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class SettlementServiceImpl implements SettlementService {

    private final SettlementRepository settlementRepository;
    private final InvestorRepository investorRepository;
    private final InvestorAccountRepository investorAccountRepository;
    private final ParticipantAccountRepository participantAccountRepository;
    private final StatusRepository statusRepository;
    private final TradingSystemRepository tradingSystemRepository;
    private final OperationCalculationClient operationCalculationClient;
    private final TypeRepository typeRepository;
    private final ParticipantRepository participantRepository;
    private final PropertiesConfig propertiesConfig;

    @Override
    public PageResponseOutDto<SettlementOutDto> findAllSettlements(Pageable pageable, Long tradeId, String sideId,
            String investorDocumentNumber) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllSettlementsV1(pageable, tradeId, sideId, investorDocumentNumber);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<SettlementOutDto> findAllSettlementsV1(Pageable pageable, Long tradeId, String sideId,
            String investorDocumentNumber) {
        log.info(
                "Start method findAllSettlementsV1 with page: {}, size: {}, tradeId: {}, sideId: {}, investorDocumentNumber {}",
                pageable.getPageNumber(), pageable.getPageSize(), tradeId, sideId, investorDocumentNumber);

        Specification<SettlementEntity> specification = settlementEntitySpecification(tradeId, sideId,
                investorDocumentNumber);

        Page<SettlementEntity> settlementEntityPage = settlementRepository.findAll(specification, pageable);

        List<SettlementOutDto> settlementOutDtoList = settlementEntityPage.getContent().stream()
                .map(settlementEntity -> {
                    SettlementOutDto settlementOutDto = MapperUtil.settlementEntityToSettlementOutDto(settlementEntity);

                    settlementOutDto.setMasterAccount(false);
                    settlementOutDto.setJointAccount(false);

                    if (!ObjectUtils.isEmpty(settlementOutDto.getParticipantAccount()) &&
                            TypeEnum.MASTER_ACCOUNT.getValue()
                                    .equals(settlementOutDto.getParticipantAccount().getType().getId())) {
                        settlementOutDto.setMasterAccount(true);
                    }
                    if (!ObjectUtils.isEmpty(settlementOutDto.getInvestorAccount())) {
                        settlementOutDto.setJointAccount(TypeEnum.JOINT_ACCOUNT.getValue()
                                .equals(settlementOutDto.getInvestorAccount().getType().getId()));
                    }

                    return settlementOutDto;
                })
                .toList();

        log.debug("End method findAllSettlementsV1, number of settlements found: {}", settlementOutDtoList.size());
        return MapperPageUtil.pageToPageResponseOutDto(settlementOutDtoList, settlementEntityPage);
    }

    @Override
    public PageResponseOutDto<SettlementOutDto> findAllSettlements(int page, int size, String sort, String order,
            boolean all, Long tradeId, String sideId, String investorDocumentNumber) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllSettlementsV1(page, size, sort, order, all, tradeId, sideId, investorDocumentNumber);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private Sort createComplexSort(String sortName, Sort.Direction direction) {
        switch (sortName) {
            case "firstName":
                return Sort.by(direction, "investor.firstName")
                        .and(Sort.by(direction, "investor.lastName"))
                        .and(Sort.by(direction, "participantAccount.participant.name"));
            case "investorAccount":
                return Sort.by(direction, "investorAccount.accountNumber")
                        .and(Sort.by(direction, "participantAccount.accountNumber"));
            case "masterAccount":
                return Sort.by(direction, "participantAccount.type.id");
            default:
                return Sort.by(direction, sortName != null ? sortName : "fraction");
        }
    }

    private PageResponseOutDto<SettlementOutDto> findAllSettlementsV1(int page, int size, String sort, String order,
            boolean all, Long tradeId, String sideId, String investorDocumentNumber) {
        log.info(
                "Start method findAllSettlementsV1 with page: {}, size: {}, sort: {}, order: {}, all: {}, tradeId: {}, sideId: {}, investorDocumentNumber: {}",
                page, size, sort, order, all, tradeId, sideId, investorDocumentNumber);

        Specification<SettlementEntity> specification = settlementEntitySpecification(tradeId, sideId,
                investorDocumentNumber);

        Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
        Sort sortObj = createComplexSort(sort, direction);

        if (all) {
            List<SettlementEntity> allResults = settlementRepository.findAll(specification, sortObj);

            if (allResults.isEmpty()) {
                return buildPageResponse(List.of(), 0, allResults.size(), 0);
            }

            List<SettlementOutDto> settlementOutDtoList = allResults.stream()
                    .map(settlementEntity -> {
                        SettlementOutDto settlementOutDto = MapperUtil
                                .settlementEntityToSettlementOutDto(settlementEntity);
                        settlementOutDto.setMasterAccount(false);
                        settlementOutDto.setJointAccount(false);

                        if (!ObjectUtils.isEmpty(settlementOutDto.getParticipantAccount()) &&
                                TypeEnum.MASTER_ACCOUNT.getValue()
                                        .equals(settlementOutDto.getParticipantAccount().getType().getId())) {
                            settlementOutDto.setMasterAccount(true);
                        }
                        if (!ObjectUtils.isEmpty(settlementOutDto.getInvestorAccount())) {
                            settlementOutDto.setJointAccount(TypeEnum.JOINT_ACCOUNT.getValue()
                                    .equals(settlementOutDto.getInvestorAccount().getType().getId()));
                        }

                        return settlementOutDto;
                    })
                    .toList();

            return buildPageResponse(settlementOutDtoList, 0, allResults.size(), allResults.size());
        } else {
            Pageable pageable = PageRequest.of(page, size, sortObj);
            Page<SettlementEntity> pageResult = settlementRepository.findAll(specification, pageable);

            if (pageResult.isEmpty()) {
                return buildPageResponse(List.of(), page, size, 0);
            }

            List<SettlementOutDto> settlementOutDtoList = pageResult.getContent().stream()
                    .map(settlementEntity -> {
                        SettlementOutDto settlementOutDto = MapperUtil
                                .settlementEntityToSettlementOutDto(settlementEntity);
                        settlementOutDto.setMasterAccount(false);
                        settlementOutDto.setJointAccount(false);

                        if (!ObjectUtils.isEmpty(settlementOutDto.getParticipantAccount()) &&
                                TypeEnum.MASTER_ACCOUNT.getValue()
                                        .equals(settlementOutDto.getParticipantAccount().getType().getId())) {
                            settlementOutDto.setMasterAccount(true);
                        }
                        if (!ObjectUtils.isEmpty(settlementOutDto.getInvestorAccount())) {
                            settlementOutDto.setJointAccount(TypeEnum.JOINT_ACCOUNT.getValue()
                                    .equals(settlementOutDto.getInvestorAccount().getType().getId()));
                        }

                        return settlementOutDto;
                    })
                    .toList();

            return buildPageResponse(settlementOutDtoList, page, size, (int) pageResult.getTotalElements());
        }
    }

    @Override
    public PageResponseOutDto<SettlementOutDto> findAllSettlementsDynamic(
            Pageable pageable,
            Long tradeId,
            String sideId,
            String investorDocumentNumber,
            String fieldName,
            String fieldValue,
            String operation) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllSettlementsDynamicV1(pageable, tradeId, sideId, investorDocumentNumber,
                    fieldName, fieldValue, operation);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<SettlementOutDto> findAllSettlementsDynamicV1(
            Pageable pageable,
            Long tradeId,
            String sideId,
            String investorDocumentNumber,
            String fieldName,
            String fieldValue,
            String operation) {

        log.info("Start method findAllSettlementsDynamicV1 with page: {}, size: {}, tradeId: {}, sideId: {}, " +
                "investorDocumentNumber: {}, fieldName: {}, fieldValue: {}, operation: {} using dynamic datasource",
                pageable.getPageNumber(), pageable.getPageSize(), tradeId, sideId,
                investorDocumentNumber, fieldName, fieldValue, operation);

        SearchOperationEnum searchOperation = (operation != null) ? SearchOperationEnum.fromValue(operation) : null;

        if (operation != null && searchOperation == null) {
            log.warn("Invalid operation: {}", operation);
            throw new ServiceException(ErrorCode.BAD_REQUEST, HttpStatus.BAD_REQUEST);
        }

        Specification<SettlementEntity> specification = SettlementSpecificationFactory.createCombinedFilter(
                tradeId, sideId, investorDocumentNumber, fieldName, fieldValue, searchOperation);

        Page<SettlementEntity> settlementEntityPage = settlementRepository.findAll(specification, pageable);

        List<SettlementOutDto> settlementOutDtoList = settlementEntityPage.getContent().stream()
                .map(settlementEntity -> {
                    SettlementOutDto settlementOutDto = MapperUtil.settlementEntityToSettlementOutDto(settlementEntity);

                    settlementOutDto.setMasterAccount(false);
                    settlementOutDto.setJointAccount(false);

                    if (!ObjectUtils.isEmpty(settlementOutDto.getParticipantAccount()) &&
                            TypeEnum.MASTER_ACCOUNT.getValue()
                                    .equals(settlementOutDto.getParticipantAccount().getType().getId())) {
                        settlementOutDto.setMasterAccount(true);
                    }
                    if (!ObjectUtils.isEmpty(settlementOutDto.getInvestorAccount())) {
                        settlementOutDto.setJointAccount(TypeEnum.JOINT_ACCOUNT.getValue()
                                .equals(settlementOutDto.getInvestorAccount().getType().getId()));
                    }

                    return settlementOutDto;
                })
                .toList();

        log.debug("End method findAllSettlementsDynamicV1, number of settlements found: {}",
                settlementOutDtoList.size());
        return MapperPageUtil.pageToPageResponseOutDto(settlementOutDtoList, settlementEntityPage);
    }

    @Override
    public SettlementOutDto findSettlementById(SettlementKey settlementKey) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findSettlementByIdV1(settlementKey);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private SettlementOutDto findSettlementByIdV1(SettlementKey settlementKey) {
        log.info("Start method findSettlementByIdV1 with settlementKey {}", settlementKey);

        SettlementEntity settlementEntity = validateSettlement(settlementKey);
        SettlementOutDto settlementOutDto = MapperUtil.settlementEntityToSettlementOutDto(settlementEntity);

        log.info("End method findSettlementByIdV1, settlement -> {}", settlementOutDto);

        return settlementOutDto;
    }

    @Override
    public SettlementOutDto updateSettlement(SettlementKey settlementKey, SettlementUpdateInDto settlementUpdateInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return updateSettlementV1(settlementKey, settlementUpdateInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private SettlementOutDto updateSettlementV1(SettlementKey settlementKey,
            SettlementUpdateInDto settlementUpdateInDto) {
        log.debug("Start method updateSettlementV1, settlementKey -> {}, settlementUpdateInDto -> {}", settlementKey,
                settlementUpdateInDto);

        SettlementEntity settlementEntityLast = validateSettlement(settlementKey);

        SettlementEntity settlementEntity = SettlementEntity.builder()
                .trade(settlementEntityLast.getTrade())
                .fraction(settlementKey.getFraction())
                .side(settlementEntityLast.getSide())
                .investor(
                        ObjectUtils.isEmpty(settlementUpdateInDto.getInvestorId()) ? settlementEntityLast.getInvestor()
                                : validateInvestor(settlementUpdateInDto.getInvestorId()))
                .investorAccount(ObjectUtils.isEmpty(settlementUpdateInDto.getInvestorAccountId())
                        ? settlementEntityLast.getInvestorAccount()
                        : validateInvestorAccount(settlementUpdateInDto.getInvestorAccountId()))
                .participantAccount(ObjectUtils.isEmpty(settlementUpdateInDto.getParticipantAccountId())
                        ? settlementEntityLast.getParticipantAccount()
                        : validateParticipantAccount(settlementUpdateInDto.getParticipantAccountId()))
                .fractionQuantity(ObjectUtils.isEmpty(settlementUpdateInDto.getFractionQuantity())
                        ? settlementEntityLast.getFractionQuantity()
                        : settlementUpdateInDto.getFractionQuantity())
                .fractionVolume(ObjectUtils.isEmpty(settlementUpdateInDto.getFractionVolume())
                        ? settlementEntityLast.getFractionVolume()
                        : settlementUpdateInDto.getFractionVolume())
                .fiduciarySpecialist(ObjectUtils.isEmpty(settlementUpdateInDto.getFiduciarySpecialist())
                        ? settlementEntityLast.getFiduciarySpecialist()
                        : settlementUpdateInDto.getFiduciarySpecialist())
                .commissionPercentage(settlementEntityLast.getCommissionPercentage())
                .commissionAmount(settlementEntityLast.getCommissionAmount())
                .valTax(ObjectUtils.isEmpty(settlementUpdateInDto.getValTax()) ? settlementEntityLast.getValTax()
                        : settlementUpdateInDto.getValTax())
                .valTaxAmount(settlementEntityLast.getValTaxAmount())
                .withholdingTax(ObjectUtils.isEmpty(settlementUpdateInDto.getWithholdingTax())
                        ? settlementEntityLast.getWithholdingTax()
                        : settlementUpdateInDto.getWithholdingTax())
                .withholdingTaxAmount(ObjectUtils.isEmpty(settlementUpdateInDto.getWithholdingTaxAmount())
                        ? settlementEntityLast.getWithholdingTaxAmount()
                        : settlementUpdateInDto.getWithholdingTaxAmount())
                .netAmount(settlementEntityLast.getNetAmount())
                .transferValue(settlementEntityLast.getTransferValue())
                .issuedReceipt(ObjectUtils.isEmpty(settlementUpdateInDto.getIssuedReceipt())
                        ? settlementEntityLast.getIssuedReceipt()
                        : settlementUpdateInDto.getIssuedReceipt())
                .issuedReceiptNumber(ObjectUtils.isEmpty(settlementUpdateInDto.getIssuedReceiptNumber())
                        ? settlementEntityLast.getIssuedReceiptNumber()
                        : settlementUpdateInDto.getIssuedReceiptNumber())
                .referenceAllocId(ObjectUtils.isEmpty(settlementUpdateInDto.getReferenceAllocId())
                        ? settlementEntityLast.getReferenceAllocId()
                        : settlementUpdateInDto.getReferenceAllocId())
                .repoAmount(ObjectUtils.isEmpty(settlementUpdateInDto.getRepoAmount())
                        ? settlementEntityLast.getRepoAmount()
                        : settlementUpdateInDto.getRepoAmount())
                .fundingAmount(ObjectUtils.isEmpty(settlementUpdateInDto.getFundingAmount())
                        ? settlementEntityLast.getFundingAmount()
                        : settlementUpdateInDto.getFundingAmount())
                .netOutFlowTotal(ObjectUtils.isEmpty(settlementUpdateInDto.getNetOutFlowTotal())
                        ? settlementEntityLast.getNetOutFlowTotal()
                        : settlementUpdateInDto.getNetOutFlowTotal())
                .outFlowTurnoverValue(ObjectUtils.isEmpty(settlementUpdateInDto.getOutFlowTurnoverValue())
                        ? settlementEntityLast.getOutFlowTurnoverValue()
                        : settlementUpdateInDto.getOutFlowTurnoverValue())
                .returnTurnoverValue(ObjectUtils.isEmpty(settlementUpdateInDto.getReturnTurnoverValue())
                        ? settlementEntityLast.getReturnTurnoverValue()
                        : settlementUpdateInDto.getReturnTurnoverValue())
                .deliveryVersusPaymentValue(ObjectUtils.isEmpty(settlementUpdateInDto.getDeliveryVersusPaymentValue())
                        ? settlementEntityLast.getDeliveryVersusPaymentValue()
                        : settlementUpdateInDto.getDeliveryVersusPaymentValue())
                .settlementAmount(ObjectUtils.isEmpty(settlementUpdateInDto.getSettlementAmount())
                        ? settlementEntityLast.getSettlementAmount()
                        : settlementUpdateInDto.getSettlementAmount())
                .tradingSystem(ObjectUtils.isEmpty(settlementUpdateInDto.getTradingSystemId())
                        ? settlementEntityLast.getTradingSystem()
                        : validateTradingSystem(settlementUpdateInDto.getTradingSystemId()))
                .status(ObjectUtils.isEmpty(settlementUpdateInDto.getStatusId()) ? settlementEntityLast.getStatus()
                        : validateStatus(settlementUpdateInDto.getStatusId()))
                .brokerageService(ObjectUtils.isEmpty(settlementUpdateInDto.getBrokerageService())
                        ? settlementEntityLast.getBrokerageService()
                        : settlementUpdateInDto.getBrokerageService())
                .custodian(ObjectUtils.isEmpty(settlementUpdateInDto.getCustodianId())
                        ? settlementEntityLast.getCustodian()
                        : validateParticipant(settlementUpdateInDto.getCustodianId()))
                .bankAccountId(ObjectUtils.isEmpty(settlementUpdateInDto.getBankAccountId())
                        ? settlementEntityLast.getBankAccountId()
                        : settlementUpdateInDto.getBankAccountId())
                .reference(
                        ObjectUtils.isEmpty(settlementUpdateInDto.getReference()) ? settlementEntityLast.getReference()
                                : settlementUpdateInDto.getReference())
                .capitalGainValue(ObjectUtils.isEmpty(settlementUpdateInDto.getCapitalGainValue())
                        ? settlementEntityLast.getCapitalGainValue()
                        : settlementUpdateInDto.getCapitalGainValue())
                .disbursementValue(ObjectUtils.isEmpty(settlementUpdateInDto.getDisbursementValue())
                        ? settlementEntityLast.getDisbursementValue()
                        : settlementUpdateInDto.getDisbursementValue())
                .sourceQuoteType(ObjectUtils.isEmpty(settlementUpdateInDto.getSourceQuoteTypeId())
                        ? settlementEntityLast.getSourceQuoteType()
                        : validateType(settlementUpdateInDto.getSourceQuoteTypeId()))
                .ficAdministratorId(ObjectUtils.isEmpty(settlementUpdateInDto.getFicAdministratorId())
                        ? settlementEntityLast.getFicAdministratorId()
                        : settlementUpdateInDto.getFicAdministratorId())
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyIp(PropertiesContext.getClientIp())
                .lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyDate(PropertiesContext.getClientDatetime())
                .build();

        SettlementOutDto settlementOutDto = MapperUtil
                .settlementEntityToSettlementOutDto(settlementRepository.save(settlementEntity));

        log.info("End method updateSettlementV1, settlement -> {}", settlementOutDto);

        return settlementOutDto;
    }

    @Override
    public SettlementOutDto updateSettlementCommission(SettlementKey settlementKey,
            SettlementCommissionUpdateInDto settlementCommissionUpdateInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return updateSettlementCommissionV1(settlementKey, settlementCommissionUpdateInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private SettlementOutDto updateSettlementCommissionV1(SettlementKey settlementKey,
            SettlementCommissionUpdateInDto settlementCommissionUpdateInDto) {
        log.info("Start method updateSettlementCommissionV1, settlementKey -> {}", settlementKey);

        SettlementEntity settlementEntity = validateSettlement(settlementKey);
        TradeEntity tradeEntity = settlementEntity.getTrade();

        if (PropertiesContext.getClientDatetime().toLocalDate()
                .isAfter(tradeEntity.getClearingDate())) {
            throw new ServiceException(ErrorCode.COMMISSION_SETTLEMENT_DATE_COMPLIANCE_AFTER, HttpStatus.BAD_REQUEST);
        }

        Long typeId = ObjectUtils.isEmpty(tradeEntity.getType()) ? null : tradeEntity.getType().getId();
        SettleAccountsInDto settleAccountsInDto = SettleAccountsInDto.builder()
                .quantity(settlementEntity.getFractionQuantity())
                .price(tradeEntity.getPrice())
                .commission(settlementCommissionUpdateInDto.getCommissionPercentage())
                .valTax(settlementEntity.getValTax())
                .sideId(settlementEntity.getSide().getId())
                .typeId(typeId)
                .build();
        SettleAccountsOutDto settleAccountsOutDto = operationCalculationClient.getSettleAccounts(settleAccountsInDto);

        SettlementEntity settlementEntityUpdate = settlementEntity.toBuilder()
                .commissionPercentage(settlementCommissionUpdateInDto.getCommissionPercentage())
                .commissionAmount(settleAccountsOutDto.getCommissionAmount())
                .valTaxAmount(settleAccountsOutDto.getValTaxAmount())
                .netAmount(settleAccountsOutDto.getNetAmount())
                .settlementAmount(settleAccountsOutDto.getTransferValue())
                .lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyDate(PropertiesContext.getClientDatetime())
                .lastModifyIp(PropertiesContext.getClientIp())
                .build();

        if (TypeEnum.REPO_OPERATION.getValue().equals(typeId) &&
                !ObjectUtils.isEmpty(settlementEntityUpdate.getCommissionAmount()) &&
                !ObjectUtils.isEmpty(settlementEntityUpdate.getTrade()) &&
                settlementEntityUpdate.getCommissionAmount()
                        .compareTo(settlementEntityUpdate.getTrade().getPrice()) > 0) {
            throw new ServiceException(ErrorCode.COMMISSION_CANNOT_EXCEED_REPO_AMOUNT, HttpStatus.BAD_REQUEST,
                    Map.of(
                            "commissionAmount", settlementEntityUpdate.getCommissionAmount(),
                            "repoAmount", settlementEntityUpdate.getRepoAmount(),
                            "getPrice", settlementEntityUpdate.getTrade().getPrice()));
        }

        SettlementOutDto settlementOutDto = MapperUtil
                .settlementEntityToSettlementOutDto(settlementRepository.save(settlementEntityUpdate));

        log.info("End method updateSettlementCommissionV1, settlement -> {}", settlementOutDto);

        return settlementOutDto;
    }

    @Override
    public PageResponseOutDto<SettlementOutDto> findAllSettlementsByTrade(Pageable pageable, Long tradeId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllSettlementsByTradeV1(pageable, tradeId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<SettlementOutDto> findAllSettlementsByTradeV1(Pageable pageable, Long tradeId) {
        log.info("Start method findAllSettlementsByTradeV1 with page: {}, size: {}, tradeId: {}",
                pageable.getPageNumber(), pageable.getPageSize(), tradeId);

        Specification<SettlementEntity> specification = settlementEntitySpecification(tradeId, "", "");

        Page<SettlementEntity> settlementEntityPage = settlementRepository.findAll(specification, pageable);

        List<SettlementOutDto> settlementOutDtoList = settlementEntityPage.getContent().stream()
                .map(settlementEntity -> {
                    SettlementOutDto settlementOutDto = MapperUtil.settlementEntityToSettlementOutDto(settlementEntity);

                    settlementOutDto.setMasterAccount(false);
                    settlementOutDto.setJointAccount(false);

                    if (!ObjectUtils.isEmpty(settlementOutDto.getParticipantAccount()) &&
                            TypeEnum.MASTER_ACCOUNT.getValue()
                                    .equals(settlementOutDto.getParticipantAccount().getType().getId())) {
                        settlementOutDto.setMasterAccount(true);
                    }
                    if (!ObjectUtils.isEmpty(settlementOutDto.getInvestorAccount())) {
                        settlementOutDto.setJointAccount(TypeEnum.JOINT_ACCOUNT.getValue()
                                .equals(settlementOutDto.getInvestorAccount().getType().getId()));
                    }

                    return settlementOutDto;
                })
                .toList();

        log.debug("End method findAllSettlementsByTradeV1, number of settlements found: {}",
                settlementOutDtoList.size());

        return MapperPageUtil.pageToPageResponseOutDto(settlementOutDtoList, settlementEntityPage);

    }

    @Override
    public PageResponseOutDto<SettlementOutDto> findAllSettlementsByTrade(int page, int size, String sort, String order,
            boolean all, Long tradeId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllSettlementsByTradeV1(page, size, sort, order, all, tradeId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<SettlementOutDto> findAllSettlementsByTradeV1(int page, int size, String sort,
            String order, boolean all, Long tradeId) {
        log.info(
                "Start method findAllSettlementsByTradeV1 with page: {}, size: {}, sort: {}, order: {}, all: {}, tradeId: {}",
                page, size, sort, order, all, tradeId);

        Specification<SettlementEntity> specification = settlementEntitySpecification(tradeId, "", "");

        Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
        Sort sortObj = Sort.by(direction, sort != null ? sort : "fraction");

        if (all) {
            List<SettlementEntity> allResults = settlementRepository.findAll(specification, sortObj);

            if (allResults.isEmpty()) {
                return buildPageResponse(List.of(), 0, allResults.size(), 0);
            }

            List<SettlementOutDto> settlementOutDtoList = allResults.stream()
                    .map(settlementEntity -> {
                        SettlementOutDto settlementOutDto = MapperUtil
                                .settlementEntityToSettlementOutDto(settlementEntity);
                        settlementOutDto.setMasterAccount(false);
                        settlementOutDto.setJointAccount(false);

                        if (!ObjectUtils.isEmpty(settlementOutDto.getParticipantAccount()) &&
                                TypeEnum.MASTER_ACCOUNT.getValue()
                                        .equals(settlementOutDto.getParticipantAccount().getType().getId())) {
                            settlementOutDto.setMasterAccount(true);
                        }
                        if (!ObjectUtils.isEmpty(settlementOutDto.getInvestorAccount())) {
                            settlementOutDto.setJointAccount(TypeEnum.JOINT_ACCOUNT.getValue()
                                    .equals(settlementOutDto.getInvestorAccount().getType().getId()));
                        }

                        return settlementOutDto;
                    })
                    .toList();

            return buildPageResponse(settlementOutDtoList, 0, allResults.size(), allResults.size());
        } else {
            Pageable pageable = PageRequest.of(page, size, sortObj);
            Page<SettlementEntity> pageResult = settlementRepository.findAll(specification, pageable);

            if (pageResult.isEmpty()) {
                return buildPageResponse(List.of(), page, size, 0);
            }

            List<SettlementOutDto> settlementOutDtoList = pageResult.getContent().stream()
                    .map(settlementEntity -> {
                        SettlementOutDto settlementOutDto = MapperUtil
                                .settlementEntityToSettlementOutDto(settlementEntity);
                        settlementOutDto.setMasterAccount(false);
                        settlementOutDto.setJointAccount(false);

                        if (!ObjectUtils.isEmpty(settlementOutDto.getParticipantAccount()) &&
                                TypeEnum.MASTER_ACCOUNT.getValue()
                                        .equals(settlementOutDto.getParticipantAccount().getType().getId())) {
                            settlementOutDto.setMasterAccount(true);
                        }
                        if (!ObjectUtils.isEmpty(settlementOutDto.getInvestorAccount())) {
                            settlementOutDto.setJointAccount(TypeEnum.JOINT_ACCOUNT.getValue()
                                    .equals(settlementOutDto.getInvestorAccount().getType().getId()));
                        }

                        return settlementOutDto;
                    })
                    .toList();

            return buildPageResponse(settlementOutDtoList, page, size, (int) pageResult.getTotalElements());
        }
    }

    private PageResponseOutDto<SettlementOutDto> buildPageResponse(List<SettlementOutDto> content, int page, int size,
            int totalElements) {
        return PageResponseOutDto.<SettlementOutDto>builder()
                .content(content)
                .pageSize(size)
                .pageNumber(page)
                .totalElements((long) totalElements)
                .totalPages((int) Math.ceil((double) totalElements / size))
                .build();
    }

    private Specification<SettlementEntity> settlementEntitySpecification(Long tradeId, String sideId,
            String investorDocumentNumber) {
        return (root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();
            if (!ObjectUtils.isEmpty(tradeId)) {
                predicates.add(criteriaBuilder.equal(root.get("trade").get("id"), tradeId));
            }
            if (!ObjectUtils.isEmpty(sideId)) {
                predicates.add(criteriaBuilder.equal(root.get("side").get("id"), sideId));
            }
            if (!ObjectUtils.isEmpty(investorDocumentNumber)) {
                predicates.add(
                        criteriaBuilder.like(root.get("investor").get("documentNumber"), investorDocumentNumber + "%"));
            }
            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }

    private SettlementEntity validateSettlement(SettlementKey settlementKey) {
        return settlementRepository.findById(settlementKey)
                .orElseThrow(() -> new ServiceException(ErrorCode.SETTLEMENT_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private InvestorEntity validateInvestor(Long investorId) {
        return investorRepository.findById(investorId)
                .orElseThrow(() -> new ServiceException(ErrorCode.INVESTOR_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private InvestorAccountEntity validateInvestorAccount(Long investorAccountId) {
        return investorAccountRepository.findById(investorAccountId)
                .orElseThrow(() -> new ServiceException(ErrorCode.INVESTOR_ACCOUNT_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private ParticipantAccountEntity validateParticipantAccount(Long participantAccountId) {
        return participantAccountRepository.findById(participantAccountId)
                .orElseThrow(() -> new ServiceException(ErrorCode.PARTICIPANT_ACCOUNT_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private StatusEntity validateStatus(Integer statusId) {
        return statusRepository.findById(statusId)
                .orElseThrow(() -> new ServiceException(ErrorCode.STATUS_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private TradingSystemEntity validateTradingSystem(Long tradingSystemId) {
        return tradingSystemRepository.findById(tradingSystemId)
                .orElseThrow(() -> new ServiceException(ErrorCode.TRADING_SYSTEM_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private TypeEntity validateType(Long typeId) {
        return typeRepository.findById(typeId)
                .orElseThrow(() -> new ServiceException(ErrorCode.TYPE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private ParticipantEntity validateParticipant(Long custodianId) {
        return participantRepository.findById(custodianId)
                .orElseThrow(() -> new ServiceException(ErrorCode.PARTICIPANT_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

}

```

## src/main/java/com/nubo/operations/api/service/impl/TradeEquityServiceImpl.java

```java
package com.nubo.operations.api.service.impl;

import com.nubo.operations.api.application.properties.PropertiesConfig;
import com.nubo.operations.api.application.properties.PropertiesContext;
import com.nubo.operations.api.exception.ServiceException;
import com.nubo.operations.api.exception.error.ErrorCode;
import com.nubo.operations.api.helpers.MapperPageUtil;
import com.nubo.operations.api.helpers.MapperUtil;
import com.nubo.operations.api.models.dto.request.TradeEquityInDto;
import com.nubo.operations.api.models.dto.request.TradeEquityUpdateInDto;
import com.nubo.operations.api.models.dto.response.PageResponseOutDto;
import com.nubo.operations.api.models.dto.response.TradeEquityOutDto;
import com.nubo.operations.api.models.entity.TradeEntity;
import com.nubo.operations.api.models.entity.TradeEquityEntity;
import com.nubo.operations.api.models.enums.VersionApiEnum;
import com.nubo.operations.api.repository.TradeEquityRepository;
import com.nubo.operations.api.repository.TradeRepository;
import com.nubo.operations.api.service.TradeEquityService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
@Slf4j
public class TradeEquityServiceImpl implements TradeEquityService {

    private final TradeEquityRepository tradeEquityRepository;
    private final TradeRepository tradeRepository;
    private final PropertiesConfig propertiesConfig;

    @Override
    public PageResponseOutDto<TradeEquityOutDto> findAllTradeEquity(Pageable pageable) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllTradeEquityV1(pageable);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<TradeEquityOutDto> findAllTradeEquityV1(Pageable pageable) {
        log.info("Start method findAllTradesEquityV1 with page: {} and size: {}", pageable.getPageNumber(),
                pageable.getPageSize());

        Page<TradeEquityEntity> tradeEquityEntityPage = tradeEquityRepository.findAll(pageable);

        List<TradeEquityOutDto> tradeEquityOutDtoList = tradeEquityEntityPage.getContent().stream()
                .map(MapperUtil::tradeEquityEntityToTradeEquityOutDto)
                .toList();

        log.debug("End method findAllTradesEquityV1, number of TradeEquity found: {}", tradeEquityOutDtoList.size());
        return MapperPageUtil.pageToPageResponseOutDto(tradeEquityOutDtoList, tradeEquityEntityPage);
    }

    @Override
    public PageResponseOutDto<TradeEquityOutDto> findAllTradeEquity(int page, int size, String sort, String order, boolean all) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllTradeEquityV1(page, size, sort, order, all);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<TradeEquityOutDto> findAllTradeEquityV1(int page, int size, String sort, String order, boolean all) {
        log.info("Start method findAllTradeEquityV1 with page: {}, size: {}, sort: {}, order: {}, all: {}",
                page, size, sort, order, all);

        Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
        Sort sortObj = Sort.by(direction, sort != null ? sort : "tradeId");

        if (all) {
            List<TradeEquityEntity> allResults = tradeEquityRepository.findAll(sortObj);
            
            if (allResults.isEmpty()) {
                return buildPageResponse(List.of(), 0, allResults.size(), 0);
            }

            List<TradeEquityOutDto> tradeEquityOutDtoList = allResults.stream()
                    .map(MapperUtil::tradeEquityEntityToTradeEquityOutDto)
                    .toList();

            return buildPageResponse(tradeEquityOutDtoList, 0, allResults.size(), allResults.size());
        } else {
            Pageable pageable = PageRequest.of(page, size, sortObj);
            Page<TradeEquityEntity> pageResult = tradeEquityRepository.findAll(pageable);

            if (pageResult.isEmpty()) {
                return buildPageResponse(List.of(), page, size, 0);
            }

            List<TradeEquityOutDto> tradeEquityOutDtoList = pageResult.getContent().stream()
                    .map(MapperUtil::tradeEquityEntityToTradeEquityOutDto)
                    .toList();

            return buildPageResponse(tradeEquityOutDtoList, page, size, (int) pageResult.getTotalElements());
        }
    }

    private PageResponseOutDto<TradeEquityOutDto> buildPageResponse(List<TradeEquityOutDto> content, int page, int size, int totalElements) {
        return PageResponseOutDto.<TradeEquityOutDto>builder()
                .content(content)
                .pageSize(size)
                .pageNumber(page)
                .totalElements((long) totalElements)
                .totalPages((int) Math.ceil((double) totalElements / size))
                .build();
    }

    @Override
    public TradeEquityOutDto findTradeEquityById(Long tradeId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findTradeEquityByIdV1(tradeId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private TradeEquityOutDto findTradeEquityByIdV1(Long tradeId) {
        log.info("Start method findTradeEquityByIdV1, tradeId -> {}", tradeId);

        TradeEquityEntity tradeEquityEntity = validateTradeEquity(tradeId);
        TradeEquityOutDto tradeEquityOutDto = MapperUtil.tradeEquityEntityToTradeEquityOutDto(tradeEquityEntity);

        log.info("End method findTradeEquityByIdV1, tradeEquity -> {}", tradeEquityOutDto);
        return tradeEquityOutDto;
    }

    @Override
    public TradeEquityOutDto createTradeEquity(TradeEquityInDto tradeEquityInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return createTradeEquityV1(tradeEquityInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private TradeEquityOutDto createTradeEquityV1(TradeEquityInDto tradeEquityInDto) {
        log.debug("Start method createTradeEquityV1, tradeEquity -> {}", tradeEquityInDto);

        TradeEntity tradeEntityLast = validateTrade(tradeEquityInDto.getTradeId());

        if (tradeEquityRepository.findById(tradeEntityLast.getId()).isPresent()) {
            throw new ServiceException(ErrorCode.TRADE_EQUITY_EXISTS, HttpStatus.BAD_REQUEST);
        }

        TradeEquityEntity tradeEquityEntity = TradeEquityEntity.builder()
                .tradeId(tradeEntityLast.getId())
                .foreignBrokerBuy(tradeEquityInDto.getForeignBrokerBuy())
                .foreignBrokerSell(tradeEquityInDto.getForeignBrokerSell())
                .directDepositorBuy(tradeEquityInDto.getDirectDepositorBuy())
                .directDepositorSell(tradeEquityInDto.getDirectDepositorSell())
                .sourceIndicatorBuy(tradeEquityInDto.getSourceIndicatorBuy())
                .sourceIndicatorSell(tradeEquityInDto.getSourceIndicatorSell())
                .responsibleTradeBuy(tradeEquityInDto.getResponsibleTradeBuy())
                .responsibleTradeSell(tradeEquityInDto.getResponsibleTradeSell())
                .referenceBuy(tradeEquityInDto.getReferenceBuy())
                .referenceSell(tradeEquityInDto.getReferenceSell())
                .orderBookId(tradeEquityInDto.getOrderBookId())
                .prearrangedOperation(tradeEquityInDto.getPrearrangedOperation())
                .aggressiveTip(tradeEquityInDto.getAggressiveTip())
                .exdividendPeriod(tradeEquityInDto.getExdividendPeriod())
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyIp(PropertiesContext.getClientIp())
                .lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyDate(PropertiesContext.getClientDatetime())
                .build();

        TradeEquityOutDto tradeEquityOutDto = MapperUtil.tradeEquityEntityToTradeEquityOutDto(
                tradeEquityRepository.save(tradeEquityEntity));

        log.info("End method createTradeEquityV1, tradeEquity -> {}", tradeEquityOutDto);
        return tradeEquityOutDto;
    }

    @Override
    public TradeEquityOutDto updateTradeEquity(Long tradeId, TradeEquityUpdateInDto tradeEquityUpdateInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return updateTradeEquityV1(tradeId, tradeEquityUpdateInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private TradeEquityOutDto updateTradeEquityV1(Long tradeId, TradeEquityUpdateInDto tradeEquityUpdateInDto) {
        log.debug("Start method updateTradeEquityV1, tradeId -> {}, tradeEquity -> {}", tradeId, tradeEquityUpdateInDto);

        TradeEquityEntity tradeEquityEntityLast = validateTradeEquity(tradeId);

        TradeEquityEntity tradeEquityEntity = TradeEquityEntity.builder()
                .tradeId(tradeEquityEntityLast.getTradeId())
                .foreignBrokerBuy(ObjectUtils.isEmpty(tradeEquityUpdateInDto.getForeignBrokerBuy()) ?
                        tradeEquityEntityLast.getForeignBrokerBuy() : tradeEquityUpdateInDto.getForeignBrokerBuy())
                .foreignBrokerSell(ObjectUtils.isEmpty(tradeEquityUpdateInDto.getForeignBrokerSell()) ?
                        tradeEquityEntityLast.getForeignBrokerSell() : tradeEquityUpdateInDto.getForeignBrokerSell())
                .directDepositorBuy(ObjectUtils.isEmpty(tradeEquityUpdateInDto.getDirectDepositorBuy()) ?
                        tradeEquityEntityLast.getDirectDepositorBuy() : tradeEquityUpdateInDto.getDirectDepositorBuy())
                .directDepositorSell(ObjectUtils.isEmpty(tradeEquityUpdateInDto.getDirectDepositorSell()) ?
                        tradeEquityEntityLast.getDirectDepositorSell() : tradeEquityUpdateInDto.getDirectDepositorSell())
                .sourceIndicatorBuy(ObjectUtils.isEmpty(tradeEquityUpdateInDto.getSourceIndicatorBuy()) ?
                        tradeEquityEntityLast.getSourceIndicatorBuy() : tradeEquityUpdateInDto.getSourceIndicatorBuy())
                .sourceIndicatorSell(ObjectUtils.isEmpty(tradeEquityUpdateInDto.getSourceIndicatorSell()) ?
                        tradeEquityEntityLast.getSourceIndicatorSell() : tradeEquityUpdateInDto.getSourceIndicatorSell())
                .responsibleTradeBuy(ObjectUtils.isEmpty(tradeEquityUpdateInDto.getResponsibleTradeBuy()) ?
                        tradeEquityEntityLast.getResponsibleTradeBuy() : tradeEquityUpdateInDto.getResponsibleTradeBuy())
                .responsibleTradeSell(ObjectUtils.isEmpty(tradeEquityUpdateInDto.getResponsibleTradeSell()) ?
                        tradeEquityEntityLast.getResponsibleTradeSell() : tradeEquityUpdateInDto.getResponsibleTradeSell())
                .referenceBuy(ObjectUtils.isEmpty(tradeEquityUpdateInDto.getReferenceBuy()) ?
                        tradeEquityEntityLast.getReferenceBuy() : tradeEquityUpdateInDto.getReferenceBuy())
                .referenceSell(ObjectUtils.isEmpty(tradeEquityUpdateInDto.getReferenceSell()) ?
                        tradeEquityEntityLast.getReferenceSell() : tradeEquityUpdateInDto.getReferenceSell())
                .orderBookId(ObjectUtils.isEmpty(tradeEquityUpdateInDto.getOrderBookId()) ?
                        tradeEquityEntityLast.getOrderBookId() : tradeEquityUpdateInDto.getOrderBookId())
                .prearrangedOperation(ObjectUtils.isEmpty(tradeEquityUpdateInDto.getPrearrangedOperation()) ?
                        tradeEquityEntityLast.getPrearrangedOperation() : tradeEquityUpdateInDto.getPrearrangedOperation())
                .aggressiveTip(ObjectUtils.isEmpty(tradeEquityUpdateInDto.getAggressiveTip()) ?
                        tradeEquityEntityLast.getAggressiveTip() : tradeEquityUpdateInDto.getAggressiveTip())
                .exdividendPeriod(ObjectUtils.isEmpty(tradeEquityUpdateInDto.getExdividendPeriod()) ?
                        tradeEquityEntityLast.getExdividendPeriod() : tradeEquityUpdateInDto.getExdividendPeriod())
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyIp(PropertiesContext.getClientIp())
                .lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyDate(PropertiesContext.getClientDatetime())
                .build();

        TradeEquityOutDto tradeEquityOutDto = MapperUtil.tradeEquityEntityToTradeEquityOutDto(
                tradeEquityRepository.save(tradeEquityEntity));

        log.info("End method updateTradeEquityV1, tradeEquity -> {}", tradeEquityOutDto);
        return tradeEquityOutDto;
    }

    private TradeEquityEntity validateTradeEquity(Long tradeId) {
        return tradeEquityRepository.findById(tradeId)
                .orElseThrow(() -> new ServiceException(ErrorCode.TRADE_EQUITY_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private TradeEntity validateTrade(Long tradeId) {
        return tradeRepository.findById(tradeId)
                .orElseThrow(() -> new ServiceException(ErrorCode.TRADE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

}

```

## src/main/java/com/nubo/operations/api/service/impl/TradeRedisServiceImpl.java

```java
package com.nubo.operations.api.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.function.Function;

import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nubo.operations.api.application.properties.PropertiesContext;
import com.nubo.operations.api.application.properties.PropertiesConfig;
import com.nubo.operations.api.exception.ServiceException;
import com.nubo.operations.api.exception.error.ErrorCode;
import com.nubo.operations.api.helpers.QueryFilterBuilder;
import com.nubo.operations.api.helpers.TradeRedisMapper;
import com.nubo.operations.api.helpers.RedisMapperUtils.FilterContext;
import com.nubo.operations.api.models.domain.TradeParams;

import com.nubo.operations.api.models.dto.response.PageResponseOutDto;
import com.nubo.operations.api.models.dto.response.TradeOutDto;
import com.nubo.operations.api.models.enums.SearchOperationEnum;
import com.nubo.operations.api.models.enums.VersionApiEnum;
import com.nubo.operations.api.service.TradeRedisService;
import com.nubo.operations.api.service.TradeService;

import io.redisearch.Query;
import io.redisearch.SearchResult;
import io.redisearch.client.Client;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class TradeRedisServiceImpl implements TradeRedisService {

    private final TradeRedisMapper tradeRedisMapper;
    private final QueryFilterBuilder queryFilterBuilder;
    private final TradeService tradeService;
    private final PropertiesConfig propertiesConfig;

    private static final String INDEX_NAME = "trade_idx";

    @Override
    @Transactional
    public PageResponseOutDto<TradeOutDto> findAllTradesDynamic(
            Pageable pageable,
            String fieldName,
            String fieldValue,
            String operation,
            TradeParams tradeParams) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllTradesDynamicV1(pageable, fieldName, fieldValue, operation, tradeParams);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    @Override
    @Transactional
    public PageResponseOutDto<TradeOutDto> findAllTradesRedisOnly(
            Pageable pageable,
            String fieldName,
            String fieldValue,
            String operation,
            TradeParams tradeParams) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllTradesRedisOnlyV1(pageable, fieldName, fieldValue, operation, tradeParams);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    public PageResponseOutDto<TradeOutDto> findAllTradesRedisOnlyV1(
            Pageable pageable,
            String fieldName,
            String fieldValue,
            String operation,
            TradeParams tradeParams) {

        log.info("Redis ONLY search - host: {}, port: {}", propertiesConfig.getRedisHost(), propertiesConfig.getRedisPort());

        try {
            log.info("Attempting to create Redis client...");
            Client client = new Client(INDEX_NAME, propertiesConfig.getRedisHost(), propertiesConfig.getRedisPort());
            log.info("Redis client created successfully");

            String queryString = buildQueryString(fieldName, fieldValue, operation, tradeParams);

            log.info("Executing Redis ONLY query: {}", queryString);

            Query query = new Query(queryString);
            query.limit((int) pageable.getOffset(), pageable.getPageSize());

            log.info("Executing Redis search...");
            SearchResult result = client.search(query);
            log.info("Redis search completed successfully, total results: {}", result.totalResults);

            client.close();

            List<TradeOutDto> trades = tradeRedisMapper.convertToTradeOutDto(result.docs);

            long totalElements = result.totalResults;
            int totalPages = (int) Math.ceil((double) totalElements / pageable.getPageSize());

            PageResponseOutDto<TradeOutDto> response = new PageResponseOutDto<>();
            response.setContent(trades);
            response.setTotalElements(totalElements);
            response.setPageNumber(pageable.getPageNumber());
            response.setPageSize(pageable.getPageSize());
            response.setTotalPages(totalPages);
            return response;

        } catch (Exception e) {
            log.error("Error in Redis ONLY search: {}", e.getMessage(), e);
            PageResponseOutDto<TradeOutDto> response = new PageResponseOutDto<>();
            response.setContent(new ArrayList<>());
            response.setTotalElements(0L);
            response.setPageNumber(pageable.getPageNumber());
            response.setPageSize(pageable.getPageSize());
            response.setTotalPages(0);
            return response;
        }
    }

    public PageResponseOutDto<TradeOutDto> findAllTradesDynamicV1(
            Pageable pageable,
            String fieldName,
            String fieldValue,
            String operation,
            TradeParams tradeParams) {

        log.info("Redis configuration - host: {}, port: {}", propertiesConfig.getRedisHost(), propertiesConfig.getRedisPort());

        try {
            log.info("Attempting to create Redis client...");
            Client client = new Client(INDEX_NAME, propertiesConfig.getRedisHost(), propertiesConfig.getRedisPort());
            log.info("Redis client created successfully");

            String queryString = buildQueryString(fieldName, fieldValue, operation, tradeParams);

            log.info("Executing Redis query: {}", queryString);

            Query query = new Query(queryString);
            query.limit((int) pageable.getOffset(), pageable.getPageSize());

            log.info("Executing Redis search...");
            SearchResult result = client.search(query);
            log.info("Redis search completed successfully, total results: {}", result.totalResults);

            client.close();

            if (result.totalResults == 0) {
                log.info("Redis returned 0 results, falling back to database search");
                return fallbackToDatabaseSearch(pageable, fieldName, fieldValue, operation, tradeParams);
            }

            List<TradeOutDto> trades = tradeRedisMapper.convertToTradeOutDto(result.docs);

            long totalElements = result.totalResults;
            int totalPages = (int) Math.ceil((double) totalElements / pageable.getPageSize());

            PageResponseOutDto<TradeOutDto> response = new PageResponseOutDto<>();
            response.setContent(trades);
            response.setTotalElements(totalElements);
            response.setPageNumber(pageable.getPageNumber());
            response.setPageSize(pageable.getPageSize());
            response.setTotalPages(totalPages);
            return response;

        } catch (Exception e) {
            log.error("Error in Redis search: {}, falling back to database search", e.getMessage());
            return fallbackToDatabaseSearch(pageable, fieldName, fieldValue, operation, tradeParams);
        }
    }

    private String buildQueryString(String fieldName, String fieldValue, String operation,
            TradeParams tradeParams) {

        List<String> filters = new ArrayList<>();

        if (fieldName != null && operation != null) {
            SearchOperationEnum op = SearchOperationEnum.fromValue(operation);
            if (op == SearchOperationEnum.IS_EMPTY || op == SearchOperationEnum.IS_NOT_EMPTY || fieldValue != null) {
                String dynamicFilter = buildDynamicFilter(fieldName, fieldValue, op);
                if (dynamicFilter != null) {
                    filters.add(dynamicFilter);
                }
            }
        }

        List<String> commonFilters = queryFilterBuilder.buildCommonFilters(tradeParams);
        filters.addAll(commonFilters);

        String finalQuery = filters.isEmpty() ? "*" : String.join(" ", filters);
        log.info("Generated Redis query: {}", finalQuery);
        return finalQuery;
    }

    private String buildDynamicFilter(String fieldName, String fieldValue, SearchOperationEnum operation) {
        log.debug("Building dynamic filter for field: {}, value: {}, operation: {}", fieldName, fieldValue, operation);

        String redisFieldName = tradeRedisMapper.mapFieldNameToRedisField(fieldName);
        if (redisFieldName == null) {
            return null;
        }

        boolean isNumericField = TradeRedisMapper.NUMERIC_FIELDS.contains(redisFieldName);
        boolean isDateField = TradeRedisMapper.DATE_FIELDS.contains(redisFieldName);
        boolean isTagField = !isNumericField && !isDateField;

        FilterContext context = new FilterContext(redisFieldName, fieldValue, isNumericField, isDateField);

        Function<FilterContext, String> strategy = TradeRedisMapper.FILTER_STRATEGIES.get(operation.getValue());

        if (strategy == null) {
            log.warn("Unsupported operation: {}, falling back to default behavior", operation);

            if (isNumericField) {
                return "@" + redisFieldName + ":[" + fieldValue + " " + fieldValue + "]";
            } else if (isTagField) {
                if (operation == SearchOperationEnum.CONTAINS) {
                    return "@" + redisFieldName + ":{*" + escapeTagValue(fieldValue) + "*}";
                } else {
                    return "@" + redisFieldName + ":{" + escapeTagValue(fieldValue) + "}";
                }
            } else {
                return "@" + redisFieldName + ":" + escapeValue(fieldValue);
            }
        }

        return strategy.apply(context);
    }

    private PageResponseOutDto<TradeOutDto> fallbackToDatabaseSearch(
            Pageable pageable,
            String fieldName,
            String fieldValue,
            String operation,
            TradeParams tradeParams) {

        log.info("Executing fallback search in database with same parameters");

        try {

            return tradeService.findAllTradesDynamic(pageable, fieldName, fieldValue, operation, tradeParams);

        } catch (Exception e) {
            log.error("Error in database fallback search: {}", e.getMessage(), e);
            PageResponseOutDto<TradeOutDto> response = new PageResponseOutDto<>();
            response.setContent(new ArrayList<>());
            response.setTotalElements(0L);
            response.setPageNumber(pageable.getPageNumber());
            response.setPageSize(pageable.getPageSize());
            response.setTotalPages(0);
            return response;
        }
    }

    private String escapeTagValue(String value) {
        return value.replace(",", "\\,")
                    .replace(".", "\\.")
                    .replace("<", "\\<")
                    .replace(">", "\\>")
                    .replace("{", "\\{")
                    .replace("}", "\\}")
                    .replace("[", "\\[")
                    .replace("]", "\\]")
                    .replace("\"", "\\\"")
                    .replace("'", "\\'")
                    .replace(":", "\\:")
                    .replace(";", "\\;")
                    .replace("!", "\\!")
                    .replace("@", "\\@")
                    .replace("#", "\\#")
                    .replace("$", "\\$")
                    .replace("%", "\\%")
                    .replace("^", "\\^")
                    .replace("&", "\\&")
                    .replace("*", "\\*")
                    .replace("(", "\\(")
                    .replace(")", "\\)")
                    .replace("-", "\\-")
                    .replace("+", "\\+")
                    .replace("=", "\\=")
                    .replace("~", "\\~");
    }

    private String escapeValue(String value) {
        return "\"" + value.replace("\"", "\\\"") + "\"";
    }
}

```

## src/main/java/com/nubo/operations/api/service/impl/TradeServiceImpl.java

```java
package com.nubo.operations.api.service.impl;

import java.util.List;
import java.util.Objects;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;

import com.nubo.operations.api.application.properties.PropertiesConfig;
import com.nubo.operations.api.application.properties.PropertiesContext;
import com.nubo.operations.api.exception.ServiceException;
import com.nubo.operations.api.exception.error.ErrorCode;
import com.nubo.operations.api.helpers.MapperPageUtil;
import com.nubo.operations.api.helpers.MapperUtil;
import com.nubo.operations.api.helpers.TradeSpecificationFactory;
import com.nubo.operations.api.models.domain.TradeParams;
import com.nubo.operations.api.models.dto.request.TradeInDto;
import com.nubo.operations.api.models.dto.request.TradeUpdateInDto;
import com.nubo.operations.api.models.dto.response.PageResponseOutDto;
import com.nubo.operations.api.models.dto.response.TradeOutDto;
import com.nubo.operations.api.models.entity.CountryEntity;
import com.nubo.operations.api.models.entity.CurrencyEntity;
import com.nubo.operations.api.models.entity.DepositoryEntity;
import com.nubo.operations.api.models.entity.MarketEntity;
import com.nubo.operations.api.models.entity.ParticipantEntity;
import com.nubo.operations.api.models.entity.SecurityTitleEntity;
import com.nubo.operations.api.models.entity.StatusEntity;
import com.nubo.operations.api.models.entity.TradeEntity;
import com.nubo.operations.api.models.entity.TradingSessionEntity;
import com.nubo.operations.api.models.entity.TradingSystemEntity;
import com.nubo.operations.api.models.entity.TypeEntity;
import com.nubo.operations.api.models.enums.SearchOperationEnum;
import com.nubo.operations.api.models.enums.VersionApiEnum;
import com.nubo.operations.api.repository.CountryRepository;
import com.nubo.operations.api.repository.CurrencyRepository;
import com.nubo.operations.api.repository.DepositoryRepository;
import com.nubo.operations.api.repository.MarketRepository;
import com.nubo.operations.api.repository.ParticipantRepository;
import com.nubo.operations.api.repository.SecurityTitleRepository;
import com.nubo.operations.api.repository.StatusRepository;
import com.nubo.operations.api.repository.TradeRepository;
import com.nubo.operations.api.repository.TradingSessionRepository;
import com.nubo.operations.api.repository.TradingSystemRepository;
import com.nubo.operations.api.repository.TypeRepository;
import com.nubo.operations.api.service.TradeService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class TradeServiceImpl implements TradeService {

    private final TradeRepository tradeRepository;
    private final CountryRepository countryRepository;
    private final CurrencyRepository currencyRepository;
    private final SecurityTitleRepository securityTitleRepository;
    private final ParticipantRepository participantRepository;
    private final DepositoryRepository depositoryRepository;
    private final TypeRepository typeRepository;
    private final MarketRepository marketRepository;
    private final StatusRepository statusRepository;
    private final TradingSessionRepository tradingSessionRepository;
    private final TradingSystemRepository tradingSystemRepository;
    private final PropertiesConfig propertiesConfig;

    @Override
    @Transactional
    public PageResponseOutDto<TradeOutDto> findAllTrades(Pageable pageable, TradeParams tradeParams) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllTradesV1(pageable, tradeParams);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<TradeOutDto> findAllTradesV1(Pageable pageable, TradeParams tradeParams) {
        log.info("Start method findAllTradesV1 with page: {} and size: {}", pageable.getPageNumber(),
                pageable.getPageSize());

        Page<TradeEntity> tradeEntityPage = tradeRepository.findAll(tradeEntitySpecification(tradeParams),
                pageable);
        List<TradeOutDto> tradeOutDtoList = tradeEntityPage.getContent().stream()
                .map(MapperUtil::tradeEntityToTradeOutDto)
                .toList();

        log.debug("End method findAllTradesV1, number of Trades found: {}", tradeOutDtoList.size());
        return MapperPageUtil.pageToPageResponseOutDto(tradeOutDtoList, tradeEntityPage);
    }

    @Override
    public PageResponseOutDto<Long> findAllTradeIds(Pageable pageable, Long matchId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllTradeIdsV1(pageable, matchId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<Long> findAllTradeIdsV1(Pageable pageable, Long matchId) {
        log.info("Start method findAllTradeIdsV1 with page: {} and size: {}", pageable.getPageNumber(),
                pageable.getPageSize());

        Page<Long> tradeEntityPage = tradeRepository.findAllMatchIds(matchId, pageable);
        List<Long> tradeIdList = tradeEntityPage.getContent();

        log.debug("End method findAllTradeIdsV1, number of Trade IDs found: {}", tradeIdList.size());
        return MapperPageUtil.pageToPageResponseOutDto(tradeIdList, tradeEntityPage);
    }

    @Override
    public PageResponseOutDto<TradeOutDto> findAllTradesDynamic(
            Pageable pageable,
            String fieldName,
            String fieldValue,
            String operation,
            TradeParams tradeParams) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllTradesDynamicV1(pageable, fieldName, fieldValue, operation, tradeParams);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    public PageResponseOutDto<TradeOutDto> findAllTradesDynamicV1(
            Pageable pageable,
            String fieldName,
            String fieldValue,
            String operation,
            TradeParams tradeParams) {

        log.info("Searching trades with combined filters and dynamic search using dynamic datasource");

        SearchOperationEnum searchOperation = (operation != null) ? SearchOperationEnum.fromValue(operation) : null;

        if (operation != null && searchOperation == null) {
            log.warn("Invalid operation: {}", operation);
            throw new ServiceException(ErrorCode.BAD_REQUEST, HttpStatus.BAD_REQUEST);
        }
        Specification<TradeEntity> spec = TradeSpecificationFactory.createCombinedFilter(
                tradeParams, fieldName, fieldValue, searchOperation);

        Page<TradeEntity> pagedResult = tradeRepository.findAll(spec, pageable);

        return buildPageResponse(pagedResult);
    }

    private PageResponseOutDto<TradeOutDto> buildPageResponse(Page<TradeEntity> entities) {
        List<TradeOutDto> tradeOutDtoList = entities.getContent().stream()
                .map(MapperUtil::tradeEntityToTradeOutDto)
                .toList();

        return MapperPageUtil.pageToPageResponseOutDto(tradeOutDtoList, entities);
    }

    @Override
    public TradeOutDto findTradeById(Long tradeId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findTradeByIdV1(tradeId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private TradeOutDto findTradeByIdV1(Long tradeId) {
        log.info("Start method findTradeByIdV1, tradeId -> {}", tradeId);

        TradeEntity tradeEntity = validateTrade(tradeId);
        TradeOutDto tradeOutDto = MapperUtil.tradeEntityToTradeOutDto(tradeEntity);

        log.info("End method findTradeByIdV1, trade -> {}", tradeOutDto);
        return tradeOutDto;
    }

    @Override
    public TradeOutDto createTrade(TradeInDto tradeInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return createTradeV1(tradeInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private TradeOutDto createTradeV1(TradeInDto tradeInDto) {
        log.debug("Start method createTradeV1, trade -> {}", tradeInDto);

        TradeEntity tradeEntity = TradeEntity.builder()
                .matchDate(tradeInDto.getMatchDate())
                .matchId(tradeInDto.getMatchId())
                .clearingDate(tradeInDto.getClearingDate())
                .returnClearingDate(tradeInDto.getReturnClearingDate())
                .depository(ObjectUtils.isEmpty(tradeInDto.getDepositoryId()) ? null
                        : validateDepository(tradeInDto.getDepositoryId()))
                .country(ObjectUtils.isEmpty(tradeInDto.getCountryId()) ? null
                        : validateCountry(tradeInDto.getCountryId()))
                .type(ObjectUtils.isEmpty(tradeInDto.getTypeId()) ? null : validateType(tradeInDto.getTypeId()))
                .market(ObjectUtils.isEmpty(tradeInDto.getMarketId()) ? null : validateMarket(tradeInDto.getMarketId()))
                .issuanceMarket(ObjectUtils.isEmpty(tradeInDto.getIssuanceMarketId()) ? null
                        : validateMarket(tradeInDto.getIssuanceMarketId()))
                .securityTitle(ObjectUtils.isEmpty(tradeInDto.getSecurityId()) ? null
                        : validateSecurityTitle(tradeInDto.getSecurityId()))
                .participantBuy(ObjectUtils.isEmpty(tradeInDto.getParticipantIdBuy()) ? null
                        : validateParticipant(tradeInDto.getParticipantIdBuy()))
                .participantSell(ObjectUtils.isEmpty(tradeInDto.getParticipantIdSell()) ? null
                        : validateParticipant(tradeInDto.getParticipantIdSell()))
                .custodianBuy(ObjectUtils.isEmpty(tradeInDto.getCustodianIdBuy()) ? null
                        : validateParticipant(tradeInDto.getCustodianIdBuy()))
                .custodianSell(ObjectUtils.isEmpty(tradeInDto.getCustodianIdSell()) ? null
                        : validateParticipant(tradeInDto.getCustodianIdSell()))
                .assignmentMarkBuy(tradeInDto.getAssignmentMarkBuy())
                .assignmentMarkSell(tradeInDto.getAssignmentMarkSell())
                .fractionalMarkBuy(tradeInDto.getFractionalMarkBuy())
                .fractionalMarkSell(tradeInDto.getFractionalMarkSell())
                .advanceStatus(tradeInDto.getAdvanceStatus())
                .exitIndicatorSettlement(tradeInDto.getExitIndicatorSettlement())
                .canceledStatus(tradeInDto.getCanceledStatus())
                .quantity(tradeInDto.getQuantity())
                .price(tradeInDto.getPrice())
                .volume(tradeInDto.getVolume())
                .repurchaseRate(tradeInDto.getRepurchaseRate())
                .repurchaseAmount(tradeInDto.getRepurchaseAmount())
                .status(ObjectUtils.isEmpty(tradeInDto.getStatusId()) ? null : validateStatus(tradeInDto.getStatusId()))
                .matchTime(tradeInDto.getMatchTime())
                .ownPositionBuy(tradeInDto.getOwnPositionBuy())
                .ownPositionSell(tradeInDto.getOwnPositionSell())
                .currency(ObjectUtils.isEmpty(tradeInDto.getCurrencyId()) ? null
                        : validateCurrency(tradeInDto.getCurrencyId()))
                .tradingSystem(ObjectUtils.isEmpty(tradeInDto.getTradingSystemId()) ? null
                        : validateTradingSystem(tradeInDto.getTradingSystemId()))
                .tradingSession(ObjectUtils.isEmpty(tradeInDto.getTradingSessionId()) ? null
                        : validateTradingSession(tradeInDto.getTradingSessionId()))
                .repurchaseAgreementDate(tradeInDto.getRepurchaseAgreementDate())
                .daysToSettlement(tradeInDto.getDaysToSettlement())
                .repoRate(tradeInDto.getRepoRate())
                .repoAmount(tradeInDto.getRepoAmount())
                .fundingAmount(tradeInDto.getFundingAmount())
                .netOutFlowTotal(tradeInDto.getNetOutFlowTotal())
                .outFlowTurnOverValue(tradeInDto.getOutFlowTurnOverValue())
                .totalNetReturn(tradeInDto.getTotalNetReturn())
                .returnTurnoverValue(tradeInDto.getReturnTurnoverValue())
                .deliveryVersusPaymentValue(tradeInDto.getDeliveryVersusPaymentValue())
                .reallocationIndicator(tradeInDto.getReallocationIndicator())
                .businessType(ObjectUtils.isEmpty(tradeInDto.getBusinessTypeId()) ? null
                        : validateType(tradeInDto.getBusinessTypeId()))
                .marketType(ObjectUtils.isEmpty(tradeInDto.getMarketTypeId()) ? null
                        : validateType(tradeInDto.getMarketTypeId()))
                .originType(ObjectUtils.isEmpty(tradeInDto.getOriginTypeId()) ? null
                        : validateType(tradeInDto.getOriginTypeId()))
                .settlementIndicatorOutgoing(tradeInDto.getSettlementIndicatorOutgoing())
                .settlementIndicatorReturn(tradeInDto.getSettlementIndicatorReturn())
                .resettlementIndicatorAdvance(tradeInDto.getResettlementIndicatorAdvance())
                .specialTradeId(tradeInDto.getSpecialTradeId())
                .paymentType(ObjectUtils.isEmpty(tradeInDto.getPaymentTypeId()) ? null
                        : validateType(tradeInDto.getPaymentTypeId()))
                .settlementType(ObjectUtils.isEmpty(tradeInDto.getSettlementTypeId()) ? null
                        : validateType(tradeInDto.getSettlementTypeId()))
                .custodianStatus(ObjectUtils.isEmpty(tradeInDto.getCustodianStatusId()) ? null
                        : validateStatus(tradeInDto.getCustodianStatusId()))
                .settlementStatus(ObjectUtils.isEmpty(tradeInDto.getSettlementStatusId()) ? null
                        : validateStatus(tradeInDto.getSettlementStatusId()))
                .bloquingStatus(ObjectUtils.isEmpty(tradeInDto.getBloquingStatusId()) ? null
                        : validateStatus(tradeInDto.getBloquingStatusId()))
                .purchasePaymentIndicator(tradeInDto.getPurchasePaymentIndicator())
                .returnIndicatorSettlement(tradeInDto.getReturnIndicatorSettlement())
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyIp(PropertiesContext.getClientIp())
                .lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyDate(PropertiesContext.getClientDatetime())
                .build();

        TradeOutDto tradeOutDto = MapperUtil.tradeEntityToTradeOutDto(tradeRepository.save(tradeEntity));

        log.info("End method createTradeV1, trade -> {}", tradeOutDto);
        return tradeOutDto;
    }

    @Override
    public TradeOutDto updateTrade(Long tradeId, TradeUpdateInDto tradeUpdateInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return updateTradeV1(tradeId, tradeUpdateInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private TradeOutDto updateTradeV1(Long tradeId, TradeUpdateInDto tradeUpdateInDto) {
        log.debug("Start method updateTradeV1, tradeId -> {}, trade -> {}", tradeId, tradeUpdateInDto);

        TradeEntity tradeEntityLast = validateTrade(tradeId);

        TradeEntity tradeEntity = TradeEntity.builder()
                .id(tradeEntityLast.getId())
                .matchDate(ObjectUtils.isEmpty(tradeUpdateInDto.getMatchDate()) ? tradeEntityLast.getMatchDate()
                        : tradeUpdateInDto.getMatchDate())
                .matchId(ObjectUtils.isEmpty(tradeUpdateInDto.getMatchId()) ? tradeEntityLast.getMatchId()
                        : tradeUpdateInDto.getMatchId())
                .clearingDate(
                        ObjectUtils.isEmpty(tradeUpdateInDto.getClearingDate()) ? tradeEntityLast.getClearingDate()
                                : tradeUpdateInDto.getClearingDate())
                .returnClearingDate(ObjectUtils.isEmpty(tradeUpdateInDto.getReturnClearingDate())
                        ? tradeEntityLast.getReturnClearingDate()
                        : tradeUpdateInDto.getReturnClearingDate())
                .depository(ObjectUtils.isEmpty(tradeUpdateInDto.getDepositoryId()) ? tradeEntityLast.getDepository()
                        : validateDepository(tradeUpdateInDto.getDepositoryId()))
                .country(ObjectUtils.isEmpty(tradeUpdateInDto.getCountryId()) ? tradeEntityLast.getCountry()
                        : validateCountry(tradeUpdateInDto.getCountryId()))
                .type(ObjectUtils.isEmpty(tradeUpdateInDto.getTypeId()) ? tradeEntityLast.getType()
                        : validateType(tradeUpdateInDto.getTypeId()))
                .market(ObjectUtils.isEmpty(tradeUpdateInDto.getMarketId()) ? tradeEntityLast.getMarket()
                        : validateMarket(tradeUpdateInDto.getMarketId()))
                .issuanceMarket(ObjectUtils.isEmpty(tradeUpdateInDto.getIssuanceMarketId())
                        ? tradeEntityLast.getIssuanceMarket()
                        : validateMarket(tradeUpdateInDto.getIssuanceMarketId()))
                .securityTitle(
                        ObjectUtils.isEmpty(tradeUpdateInDto.getSecurityId()) ? tradeEntityLast.getSecurityTitle()
                                : validateSecurityTitle(tradeUpdateInDto.getSecurityId()))
                .participantBuy(ObjectUtils.isEmpty(tradeUpdateInDto.getParticipantIdBuy())
                        ? tradeEntityLast.getParticipantBuy()
                        : validateParticipant(tradeUpdateInDto.getParticipantIdBuy()))
                .participantSell(ObjectUtils.isEmpty(tradeUpdateInDto.getParticipantIdSell())
                        ? tradeEntityLast.getParticipantSell()
                        : validateParticipant(tradeUpdateInDto.getParticipantIdSell()))
                .custodianBuy(
                        ObjectUtils.isEmpty(tradeUpdateInDto.getCustodianIdBuy()) ? tradeEntityLast.getCustodianBuy()
                                : validateParticipant(tradeUpdateInDto.getCustodianIdBuy()))
                .custodianSell(
                        ObjectUtils.isEmpty(tradeUpdateInDto.getCustodianIdSell()) ? tradeEntityLast.getCustodianSell()
                                : validateParticipant(tradeUpdateInDto.getCustodianIdSell()))
                .assignmentMarkBuy(ObjectUtils.isEmpty(tradeUpdateInDto.getAssignmentMarkBuy())
                        ? tradeEntityLast.getAssignmentMarkBuy()
                        : tradeUpdateInDto.getAssignmentMarkBuy())
                .assignmentMarkSell(ObjectUtils.isEmpty(tradeUpdateInDto.getAssignmentMarkSell())
                        ? tradeEntityLast.getAssignmentMarkSell()
                        : tradeUpdateInDto.getAssignmentMarkSell())
                .fractionalMarkBuy(ObjectUtils.isEmpty(tradeUpdateInDto.getFractionalMarkBuy())
                        ? tradeEntityLast.getAssignmentMarkBuy()
                        : tradeUpdateInDto.getFractionalMarkBuy())
                .fractionalMarkSell(ObjectUtils.isEmpty(tradeUpdateInDto.getFractionalMarkSell())
                        ? tradeEntityLast.getFractionalMarkSell()
                        : tradeUpdateInDto.getFractionalMarkSell())
                .advanceStatus(
                        ObjectUtils.isEmpty(tradeUpdateInDto.getAdvanceStatus()) ? tradeEntityLast.getAdvanceStatus()
                                : tradeUpdateInDto.getAdvanceStatus())
                .exitIndicatorSettlement(ObjectUtils.isEmpty(tradeUpdateInDto.getExitIndicatorSettlement())
                        ? tradeEntityLast.getExitIndicatorSettlement()
                        : tradeUpdateInDto.getExitIndicatorSettlement())
                .canceledStatus(
                        ObjectUtils.isEmpty(tradeUpdateInDto.getCanceledStatus()) ? tradeEntityLast.getCanceledStatus()
                                : tradeUpdateInDto.getCanceledStatus())
                .quantity(ObjectUtils.isEmpty(tradeUpdateInDto.getQuantity()) ? tradeEntityLast.getQuantity()
                        : tradeUpdateInDto.getQuantity())
                .price(ObjectUtils.isEmpty(tradeUpdateInDto.getPrice()) ? tradeEntityLast.getPrice()
                        : tradeUpdateInDto.getPrice())
                .volume(ObjectUtils.isEmpty(tradeUpdateInDto.getVolume()) ? tradeEntityLast.getVolume()
                        : tradeUpdateInDto.getVolume())
                .repurchaseRate(
                        ObjectUtils.isEmpty(tradeUpdateInDto.getRepurchaseRate()) ? tradeEntityLast.getRepurchaseRate()
                                : tradeUpdateInDto.getRepurchaseRate())
                .repurchaseAmount(ObjectUtils.isEmpty(tradeUpdateInDto.getRepurchaseAmount())
                        ? tradeEntityLast.getRepurchaseAmount()
                        : tradeUpdateInDto.getRepurchaseAmount())
                .status(ObjectUtils.isEmpty(tradeUpdateInDto.getStatusId()) ? tradeEntityLast.getStatus()
                        : validateStatus(tradeUpdateInDto.getStatusId()))
                .matchTime(ObjectUtils.isEmpty(tradeUpdateInDto.getMatchTime()) ? tradeEntityLast.getMatchTime()
                        : tradeUpdateInDto.getMatchTime())
                .ownPositionBuy(
                        ObjectUtils.isEmpty(tradeUpdateInDto.getOwnPositionBuy()) ? tradeEntityLast.getOwnPositionBuy()
                                : tradeUpdateInDto.getOwnPositionBuy())
                .ownPositionSell(ObjectUtils.isEmpty(tradeUpdateInDto.getOwnPositionSell())
                        ? tradeEntityLast.getOwnPositionSell()
                        : tradeUpdateInDto.getOwnPositionSell())
                .currency(ObjectUtils.isEmpty(tradeUpdateInDto.getCurrencyId()) ? tradeEntityLast.getCurrency()
                        : validateCurrency(tradeUpdateInDto.getCurrencyId()))
                .tradingSystem(
                        ObjectUtils.isEmpty(tradeUpdateInDto.getTradingSystemId()) ? tradeEntityLast.getTradingSystem()
                                : validateTradingSystem(tradeUpdateInDto.getTradingSystemId()))
                .tradingSession(ObjectUtils.isEmpty(tradeUpdateInDto.getTradingSessionId())
                        ? tradeEntityLast.getTradingSession()
                        : validateTradingSession(tradeUpdateInDto.getTradingSessionId()))
                .repurchaseAgreementDate(ObjectUtils.isEmpty(tradeUpdateInDto.getRepurchaseAgreementDate())
                        ? tradeEntityLast.getRepurchaseAgreementDate()
                        : tradeUpdateInDto.getRepurchaseAgreementDate())
                .daysToSettlement(ObjectUtils.isEmpty(tradeUpdateInDto.getDaysToSettlement())
                        ? tradeEntityLast.getDaysToSettlement()
                        : tradeUpdateInDto.getDaysToSettlement())
                .repoRate(ObjectUtils.isEmpty(tradeUpdateInDto.getRepoRate()) ? tradeEntityLast.getRepoRate()
                        : tradeUpdateInDto.getRepoRate())
                .repoAmount(ObjectUtils.isEmpty(tradeUpdateInDto.getRepoAmount()) ? tradeEntityLast.getRepoAmount()
                        : tradeUpdateInDto.getRepoAmount())
                .fundingAmount(
                        ObjectUtils.isEmpty(tradeUpdateInDto.getFundingAmount()) ? tradeEntityLast.getFundingAmount()
                                : tradeUpdateInDto.getFundingAmount())
                .netOutFlowTotal(ObjectUtils.isEmpty(tradeUpdateInDto.getNetOutFlowTotal())
                        ? tradeEntityLast.getNetOutFlowTotal()
                        : tradeUpdateInDto.getNetOutFlowTotal())
                .outFlowTurnOverValue(ObjectUtils.isEmpty(tradeUpdateInDto.getOutFlowTurnOverValue())
                        ? tradeEntityLast.getOutFlowTurnOverValue()
                        : tradeUpdateInDto.getOutFlowTurnOverValue())
                .totalNetReturn(
                        ObjectUtils.isEmpty(tradeUpdateInDto.getTotalNetReturn()) ? tradeEntityLast.getTotalNetReturn()
                                : tradeUpdateInDto.getTotalNetReturn())
                .returnTurnoverValue(ObjectUtils.isEmpty(tradeUpdateInDto.getReturnTurnoverValue())
                        ? tradeEntityLast.getReturnTurnoverValue()
                        : tradeUpdateInDto.getReturnTurnoverValue())
                .deliveryVersusPaymentValue(ObjectUtils.isEmpty(tradeUpdateInDto.getDeliveryVersusPaymentValue())
                        ? tradeEntityLast.getDeliveryVersusPaymentValue()
                        : tradeUpdateInDto.getDeliveryVersusPaymentValue())
                .reallocationIndicator(ObjectUtils.isEmpty(tradeUpdateInDto.getReallocationIndicator())
                        ? tradeEntityLast.getReallocationIndicator()
                        : tradeUpdateInDto.getReallocationIndicator())
                .businessType(
                        ObjectUtils.isEmpty(tradeUpdateInDto.getBusinessTypeId()) ? tradeEntityLast.getBusinessType()
                                : validateType(tradeUpdateInDto.getBusinessTypeId()))
                .marketType(ObjectUtils.isEmpty(tradeUpdateInDto.getMarketTypeId()) ? tradeEntityLast.getMarketType()
                        : validateType(tradeUpdateInDto.getMarketTypeId()))
                .originType(ObjectUtils.isEmpty(tradeUpdateInDto.getOriginTypeId()) ? tradeEntityLast.getOriginType()
                        : validateType(tradeUpdateInDto.getOriginTypeId()))
                .settlementIndicatorOutgoing(ObjectUtils.isEmpty(tradeUpdateInDto.getSettlementIndicatorOutgoing())
                        ? tradeEntityLast.getSettlementIndicatorOutgoing()
                        : tradeUpdateInDto.getSettlementIndicatorOutgoing())
                .settlementIndicatorReturn(ObjectUtils.isEmpty(tradeUpdateInDto.getSettlementIndicatorReturn())
                        ? tradeEntityLast.getSettlementIndicatorReturn()
                        : tradeUpdateInDto.getSettlementIndicatorReturn())
                .resettlementIndicatorAdvance(ObjectUtils.isEmpty(tradeUpdateInDto.getResettlementIndicatorAdvance())
                        ? tradeEntityLast.getResettlementIndicatorAdvance()
                        : tradeUpdateInDto.getResettlementIndicatorAdvance())
                .specialTradeId(
                        ObjectUtils.isEmpty(tradeUpdateInDto.getSpecialTradeId()) ? tradeEntityLast.getSpecialTradeId()
                                : tradeUpdateInDto.getSpecialTradeId())
                .paymentType(ObjectUtils.isEmpty(tradeUpdateInDto.getPaymentTypeId()) ? tradeEntityLast.getPaymentType()
                        : validateType(tradeUpdateInDto.getPaymentTypeId()))
                .settlementType(ObjectUtils.isEmpty(tradeUpdateInDto.getSettlementTypeId())
                        ? tradeEntityLast.getSettlementType()
                        : validateType(tradeUpdateInDto.getSettlementTypeId()))
                .custodianStatus(ObjectUtils.isEmpty(tradeUpdateInDto.getCustodianStatusId())
                        ? tradeEntityLast.getCustodianStatus()
                        : validateStatus(tradeUpdateInDto.getCustodianStatusId()))
                .settlementStatus(ObjectUtils.isEmpty(tradeUpdateInDto.getSettlementStatusId())
                        ? tradeEntityLast.getSettlementStatus()
                        : validateStatus(tradeUpdateInDto.getSettlementStatusId()))
                .bloquingStatus(ObjectUtils.isEmpty(tradeUpdateInDto.getBloquingStatusId())
                        ? tradeEntityLast.getBloquingStatus()
                        : validateStatus(tradeUpdateInDto.getBloquingStatusId()))
                .purchasePaymentIndicator(ObjectUtils.isEmpty(tradeUpdateInDto.getPurchasePaymentIndicator())
                        ? tradeEntityLast.getPurchasePaymentIndicator()
                        : tradeUpdateInDto.getPurchasePaymentIndicator())
                .returnIndicatorSettlement(ObjectUtils.isEmpty(tradeUpdateInDto.getReturnIndicatorSettlement())
                        ? tradeEntityLast.getReturnIndicatorSettlement()
                        : tradeUpdateInDto.getReturnIndicatorSettlement())
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyIp(PropertiesContext.getClientIp())
                .lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyDate(PropertiesContext.getClientDatetime())
                .build();

        TradeOutDto tradeOutDto = MapperUtil.tradeEntityToTradeOutDto(tradeRepository.save(tradeEntity));

        log.info("End method updateTradeV1, trade -> {}", tradeOutDto);
        return tradeOutDto;
    }

    private TradeEntity validateTrade(Long tradeId) {
        return tradeRepository.findById(tradeId)
                .orElseThrow(() -> new ServiceException(ErrorCode.TRADE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private CountryEntity validateCountry(Long countryId) {
        return countryRepository.findById(countryId)
                .orElseThrow(() -> new ServiceException(ErrorCode.COUNTRY_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private CurrencyEntity validateCurrency(Long currencyId) {
        return currencyRepository.findById(currencyId)
                .orElseThrow(() -> new ServiceException(ErrorCode.CURRENCY_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private SecurityTitleEntity validateSecurityTitle(Long securityId) {
        return securityTitleRepository.findById(securityId)
                .orElseThrow(() -> new ServiceException(ErrorCode.SECURITY_TITLE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private ParticipantEntity validateParticipant(Long participantId) {
        return participantRepository.findById(participantId)
                .orElseThrow(() -> new ServiceException(ErrorCode.PARTICIPANT_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private DepositoryEntity validateDepository(String depositoryId) {
        return depositoryRepository.findById(depositoryId)
                .orElseThrow(() -> new ServiceException(ErrorCode.DEPOSITORY_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private TypeEntity validateType(Long typeId) {
        return typeRepository.findById(typeId)
                .orElseThrow(() -> new ServiceException(ErrorCode.TYPE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private MarketEntity validateMarket(String marketId) {
        return marketRepository.findById(marketId)
                .orElseThrow(() -> new ServiceException(ErrorCode.MARKET_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private StatusEntity validateStatus(Integer statusId) {
        return statusRepository.findById(statusId)
                .orElseThrow(() -> new ServiceException(ErrorCode.STATUS_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private TradingSystemEntity validateTradingSystem(Long tradingSystemId) {
        return tradingSystemRepository.findById(tradingSystemId)
                .orElseThrow(() -> new ServiceException(ErrorCode.TRADING_SYSTEM_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private TradingSessionEntity validateTradingSession(String tradingSessionId) {
        return tradingSessionRepository.findById(tradingSessionId)
                .orElseThrow(() -> new ServiceException(ErrorCode.TRADING_SESSION_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private Specification<TradeEntity> tradeEntitySpecification(TradeParams tradeParams) {
        return TradeSpecificationFactory.createStandardFilter(tradeParams);
    }

    @Override
    public long countAllTrades() {
        return tradeRepository.count();
    }
}

```

## src/main/java/com/nubo/operations/api/service/impl/TransformationCorrectionServiceImpl.java

```java
package com.nubo.operations.api.service.impl;

import java.util.List;
import java.util.Objects;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import com.nubo.operations.api.application.properties.PropertiesContext;
import com.nubo.operations.api.application.util.ApplicationUtils;
import com.nubo.operations.api.client.kafka.producer.dto.response.FractionEventKafkaOutDto;
import com.nubo.operations.api.client.kafka.producer.service.KafkaNuboAdapter;
import com.nubo.operations.api.client.operation.fractionation.models.dto.request.AssignmentInDto;
import com.nubo.operations.api.client.operation.fractionation.models.dto.request.FractionInDto;
import com.nubo.operations.api.models.dto.response.SettlementOutDto;
import com.nubo.operations.api.service.TransformationCorrectionService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class TransformationCorrectionServiceImpl implements TransformationCorrectionService {

    private final KafkaNuboAdapter kafkaNuboAdapter;

    @Override
    public void sendEventUpdate(Long tradeId, String sideId,
            List<AssignmentInDto> assignmentInDtoList, List<SettlementOutDto> response,
            List<SettlementOutDto> previous) {
        List<AssignmentInDto> sendCorrectionAssignments = assignmentInDtoList.stream()
                .filter(assignmentInDto -> !ObjectUtils.isEmpty(assignmentInDto))
                .filter(assignmentInDto -> Boolean.TRUE.equals(assignmentInDto.getSendDeposit()))
                .toList();
        if (sendCorrectionAssignments.isEmpty()) {
            log.info("No assignments marked to send deposit in correction event.");
            return;
        }
        
        Set<Long> previousInvestorIds = previous.stream()
                .map(s -> s.getInvestor() != null ? s.getInvestor().getId() : null)
                .filter(Objects::nonNull)
                .collect(Collectors.toSet());

        Set<Long> currentInvestorIds = response.stream()
                .map(s -> s.getInvestor() != null ? s.getInvestor().getId() : null)
                .filter(Objects::nonNull)
                .collect(Collectors.toSet());

        if (!previousInvestorIds.equals(currentInvestorIds)) {
            FractionEventKafkaOutDto event = FractionEventKafkaOutDto.builder()
                    .clientIp(PropertiesContext.getClientIp())
                    .clientUser(PropertiesContext.getClientUser())
                    .clientDateTime(PropertiesContext.getClientDatetime())
                    .tradeId(tradeId)
                    .sideId(sideId)
                    .action("UPDATE")
                    .payload(sendCorrectionAssignments)
                    .response(response)
                    .previous(previous)
                    .build();

            kafkaNuboAdapter.sendMessage(ApplicationUtils.convertObjectToJson(event));
        } else {
            log.info("No Kafka message sent: investor IDs have not changed.");
        }
    }

    @Override
    public void sendEventCreate(Long tradeId, String sideId,
            List<FractionInDto> fractionInDtoList, List<SettlementOutDto> response) {

        FractionEventKafkaOutDto event = FractionEventKafkaOutDto.builder()
                .clientIp(PropertiesContext.getClientIp())
                .clientUser(PropertiesContext.getClientUser())
                .clientDateTime(PropertiesContext.getClientDatetime())
                .tradeId(tradeId)
                .sideId(sideId)
                .action("CREATE")
                .payload(fractionInDtoList)
                .response(response)
                .previous(List.of())
                .build();

        kafkaNuboAdapter.sendMessage(ApplicationUtils.convertObjectToJson(event));
    }

}

```

## src/main/java/com/nubo/operations/api/service/impl/ValidateCountedFractionServiceImpl.java

```java
package com.nubo.operations.api.service.impl;

import com.nubo.operations.api.application.properties.PropertiesContext;
import com.nubo.operations.api.client.operation.rules.models.dto.request.FractionRuleInDto;
import com.nubo.operations.api.client.operation.rules.models.dto.response.OperationBusinessRuleOutDto;
import com.nubo.operations.api.client.operation.rules.service.OperationBusinessRuleClient;
import com.nubo.operations.api.exception.ServiceException;
import com.nubo.operations.api.exception.error.ErrorCode;
import com.nubo.operations.api.helpers.MapperUtil;
import com.nubo.operations.api.models.dto.response.FractionAccountOutDto;
import com.nubo.operations.api.models.dto.response.InvestorAccountOutDto;
import com.nubo.operations.api.models.dto.response.ParticipantOutDto;
import com.nubo.operations.api.models.entity.DepositoryEntity;
import com.nubo.operations.api.models.entity.InvestorAccountEntity;
import com.nubo.operations.api.models.entity.ParticipantAccountEntity;
import com.nubo.operations.api.models.entity.ParticipantEntity;
import com.nubo.operations.api.models.entity.SideEntity;
import com.nubo.operations.api.models.entity.TradeEntity;
import com.nubo.operations.api.models.entity.TypeEntity;
import com.nubo.operations.api.models.enums.BusinessRuleEnum;
import com.nubo.operations.api.models.enums.SideEnum;
import com.nubo.operations.api.models.enums.TypeEnum;
import com.nubo.operations.api.models.enums.VersionApiEnum;
import com.nubo.operations.api.repository.InvestorAccountRepository;
import com.nubo.operations.api.repository.ParticipantAccountRepository;
import com.nubo.operations.api.repository.SideRepository;
import com.nubo.operations.api.repository.TradeRepository;
import com.nubo.operations.api.service.ValidateCountedFractionService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
@Slf4j
public class ValidateCountedFractionServiceImpl implements ValidateCountedFractionService {

    private final TradeRepository tradeRepository;
    private final SideRepository sideRepository;
    private final InvestorAccountRepository investorAccountRepository;
    private final ParticipantAccountRepository participantAccountRepository;
    private final OperationBusinessRuleClient operationBusinessRuleClient;

    @Override
    public FractionAccountOutDto validateAccountFractionCorrection(String accountNumber, Long tradeId, String sideId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return validateAccountFractionCorrectionV1(accountNumber, tradeId, sideId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private FractionAccountOutDto validateAccountFractionCorrectionV1(String accountNumber, Long tradeId, String sideId) {
        log.debug("Start method validateAccountFractionCorrectionV1, accountNumber -> {}, tradeId -> {}, sideId -> {}", accountNumber, tradeId, sideId);

        TradeEntity tradeEntity = validateTrade(tradeId);

        this.validateTypeOperation(tradeEntity);

        ParticipantEntity participantTrade = getParticipantBuyOrParticipantSellTrade(tradeId, sideId);
        TypeEntity sourceQuoteTrade = getSourceQuoteTypeForSide(tradeId, sideId);
        if (sourceQuoteTrade == null || sourceQuoteTrade.getId() == null) {
            throw new ServiceException(ErrorCode.SOURCE_QUOTE_TYPE_REQUIRED, HttpStatus.BAD_REQUEST);
        }
        DepositoryEntity tradeDepository = tradeEntity.getDepository();
        if (tradeDepository == null || tradeDepository.getId() == null) {
            throw new ServiceException(ErrorCode.TRADE_DEPOSITORY_NOT_FOUND, HttpStatus.BAD_REQUEST);
        }

        OperationBusinessRuleOutDto operationBusinessRuleOutDto = operationBusinessRuleClient.findBusinessRuleByCode(
                BusinessRuleEnum.RULE_COUNTED_OPERATION_CORRECTION_SPECIAL_FIDUCIARY.getValue());

        Long typeSpecialFiduciaryBusinessRule = Long.parseLong(operationBusinessRuleOutDto.getValue());

        FractionAccountOutDto fractionAccountOutDto = FractionAccountOutDto.builder()
                .masterAccount(false)
                .fiduciarySpecialist(false)
                .jointAccount(false)
                .build();

        var participantAccountOpt = participantAccountRepository.findByAccountNumber(accountNumber);

        if (participantAccountOpt.isPresent()) {
            ParticipantAccountEntity participantAccountEntity = participantAccountOpt.get();
            this.validateParticipantAccount(
                    fractionAccountOutDto,
                    typeSpecialFiduciaryBusinessRule,
                    sourceQuoteTrade,
                    participantAccountEntity,
                    participantTrade,
                    tradeDepository
            );

        } else {
            this.validateInvestorAccount(
                    fractionAccountOutDto,
                    sourceQuoteTrade,
                    typeSpecialFiduciaryBusinessRule,
                    accountNumber,
                    tradeDepository
            );
        }

        log.info("End method validateAccountFractionCorrectionV1, fractionAccountOutDto -> {}", fractionAccountOutDto);

        return fractionAccountOutDto;
    }

    @Override
    public Boolean validateQuantityFractionsCorrection(Long tradeId, List<FractionRuleInDto> fractionRuleInDtoList) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return validateQuantityFractionsCorrectionV1(tradeId, fractionRuleInDtoList);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private Boolean validateQuantityFractionsCorrectionV1(Long tradeId, List<FractionRuleInDto> fractionRuleInDtoList) {
        log.info("Start method validateQuantityFractionsCorrectionV1, tradeId -> {}", tradeId);

        TradeEntity tradeEntity = validateTrade(tradeId);

        this.validateTypeOperation(tradeEntity);

        BigDecimal totalQuantity = BigDecimal.ZERO;

        for (FractionRuleInDto fractionInDto : fractionRuleInDtoList) {
            totalQuantity = totalQuantity.add(fractionInDto.getFractionQuantity());
        }

        if (tradeEntity.getQuantity().compareTo(totalQuantity) != 0) {
            throw new ServiceException(ErrorCode.FRACTION_TOTAL_QUANTITY_NOT_CORRESPOND_QUANTITY_TRADE, HttpStatus.BAD_REQUEST);
        }

        log.info("End method validateQuantityFractionsCorrectionV1");

        return true;
    }

    @Override
    public Boolean validateRangeQuantityFractionsCorrection(Long tradeId, List<FractionRuleInDto> fractionRuleInDtoList) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return validateRangeQuantityFractionsCorrectionV1(tradeId, fractionRuleInDtoList);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private Boolean validateRangeQuantityFractionsCorrectionV1(Long tradeId, List<FractionRuleInDto> fractionRuleInDtoList) {
        log.debug("Start method validateRangeQuantityFractionsCorrectionV1, tradeId -> {}", tradeId);

        TradeEntity tradeEntity = validateTrade(tradeId);

        this.validateTypeOperation(tradeEntity);

        BigDecimal totalQuantity = BigDecimal.ZERO;
        BigDecimal tradeQuantity = tradeEntity.getQuantity();

        for (FractionRuleInDto fractionInDto : fractionRuleInDtoList) {
            totalQuantity = totalQuantity.add(fractionInDto.getFractionQuantity());
        }

        if (totalQuantity.compareTo(tradeQuantity) > 0) {
            throw new ServiceException(ErrorCode.FRACTION_TOTAL_QUANTITY_EXCEED_QUANTITY_TRADE, HttpStatus.BAD_REQUEST);
        }

        log.info("End method validateRangeQuantityFractionsCorrectionV1");

        return true;
    }

    @Override
    public Boolean validateMaximumLimitFractionsCorrection(Long tradeId, List<FractionRuleInDto> fractionRuleInDtoList) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return validateMaximumLimitFractionsCorrectionV1(tradeId, fractionRuleInDtoList);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private Boolean validateMaximumLimitFractionsCorrectionV1(Long tradeId, List<FractionRuleInDto> fractionRuleInDtoList) {
        log.debug("Start method validateMaximumLimitFractionsCorrectionV1");

        TradeEntity tradeEntity = validateTrade(tradeId);

        this.validateTypeOperation(tradeEntity);

        OperationBusinessRuleOutDto operationBusinessRuleOutDto = operationBusinessRuleClient.findBusinessRuleByCode(
                BusinessRuleEnum.RULE_COUNTED_OPERATION_CORRECTION_MAXIMUM_LIMIT.getValue());

        int typeBusinessRule = Integer.parseInt(operationBusinessRuleOutDto.getValue());

        if (fractionRuleInDtoList.size() >= typeBusinessRule) {
            ErrorCode errorCode = ErrorCode.MAXIMUM_LIMIT_FRACTIONS_EXCEED;
            String message = errorCode.getMessage().concat(": ").concat(String.valueOf(typeBusinessRule));
            throw new ServiceException(message, errorCode, HttpStatus.BAD_REQUEST);
        }

        log.info("End method validateMaximumLimitFractionsCorrectionV1");

        return true;
    }

    @Override
    public ParticipantOutDto validateDirectDepositorFractionCorrection(Long tradeId, String sideId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return validateDirectDepositorFractionCorrectionV1(tradeId, sideId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private ParticipantOutDto validateDirectDepositorFractionCorrectionV1(Long tradeId, String sideId) {
        log.debug("Start method validateDirectDepositorFractionCorrectionV1, tradeId -> {}, sideId -> {}", tradeId, sideId);

        TradeEntity tradeEntity = validateTrade(tradeId);

        this.validateTypeOperation(tradeEntity);

        ParticipantEntity participantEntity = getParticipantBuyOrParticipantSellTrade(tradeId, sideId);

        ParticipantOutDto participantOutDto = MapperUtil.participantEntityToParticipantOutDto(participantEntity);

        log.info("End method validateDirectDepositorFractionCorrectionV1");

        return participantOutDto;
    }

    private ParticipantEntity getParticipantBuyOrParticipantSellTrade(Long tradeId, String sideId) {
        TradeEntity tradeEntity = validateTrade(tradeId);
        SideEntity sideEntityLast = validateSide(sideId);

        ParticipantEntity participantEntity;
        if (SideEnum.BUY.getValue().equals(sideEntityLast.getId())) {
            participantEntity = tradeEntity.getParticipantBuy();
        } else if (SideEnum.SELL.getValue().equals(sideEntityLast.getId())) {
            participantEntity = tradeEntity.getParticipantSell();
        } else {
            throw new ServiceException(ErrorCode.SIDE_NOT_FOUND, HttpStatus.BAD_REQUEST);
        }
        return participantEntity;
    }

    private TypeEntity getSourceQuoteTypeForSide(Long tradeId, String sideId){
        TradeEntity tradeEntity = validateTrade(tradeId);
        SideEntity sideEntityLast = validateSide(sideId);

        TypeEntity typeEntity;
        if (SideEnum.BUY.getValue().equals(sideEntityLast.getId())) {
            typeEntity = tradeEntity.getSourceQuoteBuyType();
        } else if (SideEnum.SELL.getValue().equals(sideEntityLast.getId())) {
            typeEntity = tradeEntity.getSourceQuoteSellType();
        } else {
            throw new ServiceException(ErrorCode.TYPE_NOT_FOUND, HttpStatus.BAD_REQUEST);
        }
        return typeEntity;
    }

    private void validateParticipantAccount(FractionAccountOutDto fractionAccountOutDto,
                                            Long typeSpecialFiduciaryBusinessRule,
                                            TypeEntity sourceQuoteTrade,
                                            ParticipantAccountEntity participantAccountEntity,
                                            ParticipantEntity participantTrade,
                                            DepositoryEntity tradeDepository) {

        if(!participantAccountEntity.getOriginType().getId().equals(sourceQuoteTrade.getId())){
            Long originTypeId = participantAccountEntity.getOriginType().getId();
            Long sourceQuoteId = sourceQuoteTrade.getId();

            boolean isThirdOrCollective =
                    TypeEnum.THIRD_PARTIES_POINT_ORIGIN.getValue().equals(originTypeId)
                            || TypeEnum.COLLECTIVE_PORTFOLIO_POINT_ORIGIN.getValue().equals(originTypeId);

            boolean isThirdOrCollectiveSource =
                    TypeEnum.THIRD_PARTIES_POINT_ORIGIN.getValue().equals(sourceQuoteId)
                            || TypeEnum.COLLECTIVE_PORTFOLIO_POINT_ORIGIN.getValue().equals(sourceQuoteId);

            if ((isThirdOrCollective && TypeEnum.OWN_POSITION_POINT_ORIGIN.getValue().equals(sourceQuoteId)) ||
                    (isThirdOrCollectiveSource && TypeEnum.OWN_POSITION_POINT_ORIGIN.getValue().equals(originTypeId))) {

                throw new ServiceException( ErrorCode.OWN_POSITION_NOT_CORRESPOND_TO_ORIGIN, HttpStatus.BAD_REQUEST);
            }
            throw new ServiceException(ErrorCode.THIRD_PARTIES_COLLECTIVE_PORTFOLIOS_NOT_CORRESPOND_TO_ORIGIN, HttpStatus.BAD_REQUEST);



        }
/*
        if (!TypeEnum.THIRD_PARTIES_POINT_ORIGIN.getValue().equals(participantAccountEntity.getOriginType().getId()) &&
                TypeEnum.MASTER_ACCOUNT.getValue().equals(participantAccountEntity.getType().getId())) {
            throw new ServiceException(ErrorCode.MASTER_ACCOUNT_NOT_CORRESPOND_TO_ORIGIN_THIRD_PARTIES, HttpStatus.BAD_REQUEST);
        }

        if ((!TypeEnum.OWN_POSITION_POINT_ORIGIN.getValue().equals(participantAccountEntity.getOriginType().getId()) &&
                !TypeEnum.MASTER_ACCOUNT.getValue().equals(participantAccountEntity.getType().getId()))) {
            throw new ServiceException(ErrorCode.OWN_POSITION_NOT_CORRESPOND_TO_ORIGIN, HttpStatus.BAD_REQUEST);
        }
*/
        if (participantAccountEntity.getDepository() == null ||
                participantAccountEntity.getDepository().getId() == null ||
                !tradeDepository.getId().equals(participantAccountEntity.getDepository().getId())) {
            throw new ServiceException(ErrorCode.ACCOUNT_DEPOSITORY_NOT_CORRESPOND_TO_TRADE, HttpStatus.BAD_REQUEST);
        }

        if (TypeEnum.OWN_POSITION_POINT_ORIGIN.getValue().equals(participantAccountEntity.getOriginType().getId()) &&
                !participantTrade.getId().equals(participantAccountEntity.getParticipant().getId())) {
            throw new ServiceException(ErrorCode.OWN_POSITION_NOT_CORRESPOND_TO_ORIGIN, HttpStatus.BAD_REQUEST);
        }

        if (TypeEnum.MASTER_ACCOUNT.getValue().equals(participantAccountEntity.getType().getId())) {
            fractionAccountOutDto.setMasterAccount(true);
        }
        if (typeSpecialFiduciaryBusinessRule.equals(participantAccountEntity.getType().getId())) {
            fractionAccountOutDto.setFiduciarySpecialist(true);
        }

        fractionAccountOutDto.setParticipantAccount(MapperUtil.participantAccountEntityToParticipantAccountOutDto(participantAccountEntity));
        fractionAccountOutDto.setSourceQuoteType(fractionAccountOutDto.getParticipantAccount().getOriginType());
    }

    private void validateInvestorAccount(FractionAccountOutDto fractionAccountOutDto,
                                         TypeEntity sourceQuoteTrade,
                                         Long typeSpecialFiduciaryBusinessRule,
                                         String accountNumber,
                                         DepositoryEntity tradeDepository) {

        InvestorAccountEntity investorAccountEntity = investorAccountRepository.findByAccountNumber(accountNumber)
                .orElseThrow(() -> new ServiceException(ErrorCode.ACCOUNT_NOT_FOUND, HttpStatus.NOT_FOUND));

        if (investorAccountEntity.getOriginType() == null || investorAccountEntity.getOriginType().getId() == null) {
            throw new ServiceException(ErrorCode.THIRD_PARTIES_COLLECTIVE_PORTFOLIOS_NOT_CORRESPOND_TO_ORIGIN, HttpStatus.BAD_REQUEST);
        }
        if (sourceQuoteTrade == null || sourceQuoteTrade.getId() == null) {
            throw new ServiceException(ErrorCode.THIRD_PARTIES_COLLECTIVE_PORTFOLIOS_NOT_CORRESPOND_TO_ORIGIN, HttpStatus.BAD_REQUEST);
        }

        final Long originTypeId = investorAccountEntity.getOriginType().getId();
        final Long sourceQuoteId = sourceQuoteTrade.getId();

        boolean originIsThirdOrCollective =
                TypeEnum.THIRD_PARTIES_POINT_ORIGIN.getValue().equals(originTypeId) ||
                        TypeEnum.COLLECTIVE_PORTFOLIO_POINT_ORIGIN.getValue().equals(originTypeId);

        boolean sourceIsThirdOrCollective =
                TypeEnum.THIRD_PARTIES_POINT_ORIGIN.getValue().equals(sourceQuoteId) ||
                        TypeEnum.COLLECTIVE_PORTFOLIO_POINT_ORIGIN.getValue().equals(sourceQuoteId);

        boolean originIsOwn = TypeEnum.OWN_POSITION_POINT_ORIGIN.getValue().equals(originTypeId);
        boolean sourceIsOwn = TypeEnum.OWN_POSITION_POINT_ORIGIN.getValue().equals(sourceQuoteId);

        if (!originTypeId.equals(sourceQuoteId)) {
            if ((originIsThirdOrCollective && sourceIsOwn) || (sourceIsThirdOrCollective && originIsOwn)) {
                throw new ServiceException(ErrorCode.OWN_POSITION_NOT_CORRESPOND_TO_ORIGIN, HttpStatus.BAD_REQUEST);
            }

            if (!(originIsThirdOrCollective && sourceIsThirdOrCollective)) {
                throw new ServiceException(ErrorCode.THIRD_PARTIES_COLLECTIVE_PORTFOLIOS_NOT_CORRESPOND_TO_ORIGIN, HttpStatus.BAD_REQUEST);
            }
        }

        if (tradeDepository == null || tradeDepository.getId() == null) {
            throw new ServiceException( ErrorCode.TRADE_DEPOSITORY_REQUIRED,HttpStatus.BAD_REQUEST);
        }
        if (investorAccountEntity.getDepository() == null ||
                investorAccountEntity.getDepository().getId() == null ||
                !tradeDepository.getId().equals(investorAccountEntity.getDepository().getId())) {
            throw new ServiceException(ErrorCode.ACCOUNT_DEPOSITORY_NOT_CORRESPOND_TO_TRADE,HttpStatus.BAD_REQUEST);
        }

        InvestorAccountOutDto investorAccountOutDto = MapperUtil.investorAccountEntityToInvestorAccountOutDto(investorAccountEntity);
        fractionAccountOutDto.setInvestorAccount(investorAccountOutDto);
        fractionAccountOutDto.setFiduciarySpecialist(typeSpecialFiduciaryBusinessRule.equals(investorAccountOutDto.getType().getId()));
        fractionAccountOutDto.setJointAccount(TypeEnum.JOINT_ACCOUNT.getValue().equals(investorAccountOutDto.getType().getId()));
        fractionAccountOutDto.setSourceQuoteType(investorAccountOutDto.getOriginType());
    }

    private TradeEntity validateTrade(Long tradeId) {
        return tradeRepository.findById(tradeId)
                .orElseThrow(() -> new ServiceException(ErrorCode.TRADE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private SideEntity validateSide(String sideId) {
        return sideRepository.findById(sideId)
                .orElseThrow(() -> new ServiceException(ErrorCode.SIDE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private void validateTypeOperation(TradeEntity tradeEntity) {
        if (!TypeEnum.COUNTED_OPERATION.getValue().equals(tradeEntity.getType().getId())) {
            throw new ServiceException(ErrorCode.TYPE_COUNTED_OPERATION_REQUIRED, HttpStatus.BAD_REQUEST);
        }
    }

}

```

## src/main/java/com/nubo/operations/api/service/impl/ValidateCountedOperationServiceImpl.java

```java
package com.nubo.operations.api.service.impl;

import com.nubo.operations.api.application.properties.PropertiesContext;
import com.nubo.operations.api.client.operation.rules.models.dto.response.OperationBusinessRuleOutDto;
import com.nubo.operations.api.client.operation.rules.service.OperationBusinessRuleClient;
import com.nubo.operations.api.exception.ServiceException;
import com.nubo.operations.api.exception.error.ErrorCode;
import com.nubo.operations.api.helpers.DateUtil;
import com.nubo.operations.api.models.entity.HolidayEntity;
import com.nubo.operations.api.models.entity.ParticipantEntity;
import com.nubo.operations.api.models.entity.SideEntity;
import com.nubo.operations.api.models.entity.TradeEntity;
import com.nubo.operations.api.models.enums.BusinessRuleEnum;
import com.nubo.operations.api.models.enums.SideEnum;
import com.nubo.operations.api.models.enums.TypeEnum;
import com.nubo.operations.api.models.enums.VersionApiEnum;
import com.nubo.operations.api.repository.HolidayRepository;
import com.nubo.operations.api.repository.SideRepository;
import com.nubo.operations.api.repository.TradeRepository;
import com.nubo.operations.api.service.ValidateCountedOperationService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.List;
import java.util.Objects;
import java.util.Set;

@Service
@RequiredArgsConstructor
@Slf4j
public class ValidateCountedOperationServiceImpl implements ValidateCountedOperationService {

    private final TradeRepository tradeRepository;
    private final SideRepository sideRepository;
    private final HolidayRepository holidayRepository;
    private final DateUtil dateUtil;
    private final OperationBusinessRuleClient operationBusinessRuleClient;

    @Override
    public Boolean validateTypeCountedTradeCorrection(Long tradeId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return validateTypeCountedTradeCorrectionV1(tradeId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private Boolean validateTypeCountedTradeCorrectionV1(Long tradeId) {
        log.info("Start method validateTypeCountedTradeCorrectionV1, tradeId -> {}", tradeId);

        TradeEntity tradeEntity = validateTrade(tradeId);

        this.validateTypeOperation(tradeEntity);

        OperationBusinessRuleOutDto operationBusinessRuleOutDto = operationBusinessRuleClient.findBusinessRuleByCountryIdAndCode(tradeEntity.getCountry().getId(),
                BusinessRuleEnum.RULE_COUNTED_OPERATION_CORRECTION.getValue());

        Boolean typeBusinessRule = Boolean.parseBoolean(operationBusinessRuleOutDto.getValue());

        boolean validateTypeCountedOperation = TypeEnum.COUNTED_OPERATION.getValue().equals(tradeEntity.getType().getId())
                && Boolean.TRUE.equals(typeBusinessRule);

        log.info("End method validateTypeCountedTradeCorrectionV1");

        return validateTypeCountedOperation;
    }

    @Override
    public Boolean validateCustodianTradeCorrection(Long tradeId, String sideId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return validateCustodianTradeCorrectionV1(tradeId, sideId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private Boolean validateCustodianTradeCorrectionV1(Long tradeId, String sideId) {
        log.info("Start method validateCustodianTradeCorrectionV1, tradeId -> {}, sideId -> {}", tradeId, sideId);

        TradeEntity tradeEntity = validateTrade(tradeId);
        SideEntity sideEntityLast = validateSide(sideId);

        this.validateTypeOperation(tradeEntity);

        ParticipantEntity participantEntity;
        if (SideEnum.BUY.getValue().equals(sideEntityLast.getId())) {
            participantEntity = tradeEntity.getCustodianBuy();
        } else if (SideEnum.SELL.getValue().equals(sideEntityLast.getId())) {
            participantEntity = tradeEntity.getCustodianSell();
        } else {
            throw new ServiceException(ErrorCode.SIDE_NOT_FOUND, HttpStatus.BAD_REQUEST);
        }

        OperationBusinessRuleOutDto operationBusinessRuleOutDto = operationBusinessRuleClient.findBusinessRuleByCode(
                BusinessRuleEnum.RULE_COUNTED_OPERATION_CORRECTION_CUSTODIAN.getValue());

        Boolean custodianBusinessRule = Boolean.parseBoolean(operationBusinessRuleOutDto.getValue());

        boolean validateCustodianOperation = true;
        if (!ObjectUtils.isEmpty(participantEntity) && !ObjectUtils.isEmpty(participantEntity.getCode())
                && Boolean.FALSE.equals(custodianBusinessRule)) {
            validateCustodianOperation = false;
        }

        log.info("End method validateCustodianTradeCorrectionV1");

        return validateCustodianOperation;
    }

    @Override
    public Boolean validateDaysAllowedTradeCorrection(Long tradeId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return validateDaysAllowedTradeCorrectionV1(tradeId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private Boolean validateDaysAllowedTradeCorrectionV1(Long tradeId) {
        log.info("Start method validateDaysAllowedTradeCorrectionV1, tradeId -> {}", tradeId);

        TradeEntity tradeEntity = validateTrade(tradeId);

        this.validateTypeOperation(tradeEntity);

        OperationBusinessRuleOutDto operationBusinessRuleOutDto = operationBusinessRuleClient.findBusinessRuleByCode(
                BusinessRuleEnum.RULE_COUNTED_OPERATION_CORRECTION_ALLOWED_DAYS.getValue());

        int daysBusinessRule = Integer.parseInt(operationBusinessRuleOutDto.getValue());

        LocalDate clearingDate = tradeEntity.getClearingDate();
        LocalDate currentDate = LocalDate.from(PropertiesContext.getClientDatetime());

        if (clearingDate.isAfter(currentDate) || clearingDate.isEqual(currentDate)) {
            return false;
        }

        List<HolidayEntity> holidayEntityList = holidayRepository.findByCountryId(tradeEntity.getCountry().getId());

        Set<LocalDate> holidays = new HashSet<>();
        for (HolidayEntity holiday : holidayEntityList) {
            holidays.add(holiday.getHolidayDate());
        }

        LocalDate nextBusinessDay = dateUtil.getNextBusinessDay(clearingDate, holidays);

        int businessDays = dateUtil.countBusinessDays(nextBusinessDay, currentDate, holidays);

        log.info("End method validateDaysAllowedTradeCorrectionV1");

        return businessDays <= daysBusinessRule;
    }

    private TradeEntity validateTrade(Long tradeId) {
        return tradeRepository.findById(tradeId)
                .orElseThrow(() -> new ServiceException(ErrorCode.TRADE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private SideEntity validateSide(String sideId) {
        return sideRepository.findById(sideId)
                .orElseThrow(() -> new ServiceException(ErrorCode.SIDE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private void validateTypeOperation(TradeEntity tradeEntity) {
        if (!TypeEnum.COUNTED_OPERATION.getValue().equals(tradeEntity.getType().getId())) {
            throw new ServiceException(ErrorCode.TYPE_COUNTED_OPERATION_REQUIRED, HttpStatus.BAD_REQUEST);
        }
    }

}
```

## src/main/java/com/nubo/operations/api/web/controller/AllTradeRestController.java

```java
package com.nubo.operations.api.web.controller;

import com.nubo.operations.api.models.dto.response.AllTradeOutDto;
import com.nubo.operations.api.models.dto.response.CalculationTotalAmountOutDto;
import com.nubo.operations.api.service.AllTradeService;
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
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "All Trade")
@RequestMapping("/{version}/all-trade")
@RestController
@RequiredArgsConstructor
public class AllTradeRestController {

    private final AllTradeService allTradeService;

    @Operation(summary = "Trade, TradeEquity, Settlement by TradeId", description = "Trade, TradeEquity and Settlement by TradeId")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = AllTradeOutDto.class)))})
    @GetMapping("/{tradeId}")
    public ResponseEntity<AllTradeOutDto> findAllByTradeId(@PathVariable Long tradeId) {
        return ResponseEntity.ok(allTradeService.findAllByTradeId(tradeId));
    }

    @Operation(summary = "Calculation total amount trade by side", description = "Calculation total amount trade by side")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = CalculationTotalAmountOutDto.class)))})
    @GetMapping("/calculation-total-amount/trade/{tradeId}/side/{sideId}")
    public ResponseEntity<CalculationTotalAmountOutDto> calculationTotalAmountByTradeAndSide(@PathVariable Long tradeId,
                                                                                             @PathVariable String sideId) {
        return ResponseEntity.ok(allTradeService.calculationTotalAmountByTradeAndSide(tradeId, sideId));
    }

}

```

## src/main/java/com/nubo/operations/api/web/controller/CalculationCountedRestController.java

```java
package com.nubo.operations.api.web.controller;

import com.nubo.operations.api.models.dto.request.CalculationInDto;
import com.nubo.operations.api.models.dto.request.CalculationIvaInDto;
import com.nubo.operations.api.models.dto.response.CalculationOutDto;
import com.nubo.operations.api.service.CalculationCountedService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "Calculation Counted")
@RestController
@RequestMapping("/{version}/calculation/counted-operation")
@RequiredArgsConstructor
public class CalculationCountedRestController {

    private final CalculationCountedService calculationCountedService;

    @Operation(summary = "Calculation settlement",
            description = "Calculation settlement")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = CalculationOutDto.class)))})
    @PostMapping("/trade/{tradeId}")
    public ResponseEntity<CalculationOutDto> calculationSettlementWithIva(@PathVariable Long tradeId,
                                                                          @Valid @RequestBody CalculationIvaInDto calculationIvaInDto) {
        return ResponseEntity.ok(calculationCountedService.calculationSettlementWithIva(tradeId, calculationIvaInDto));
    }

    @Operation(summary = "Calculation settlement init by country iva",
            description = "Calculation settlement init by country iva")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = CalculationOutDto.class)))})
    @PostMapping("/trade/{tradeId}/country/{countryId}")
    public ResponseEntity<CalculationOutDto> calculationSettlementByCountryId(@PathVariable Long tradeId,
                                                                              @PathVariable Long countryId,
                                                                              @Valid @RequestBody CalculationInDto calculationInDto) {
        return ResponseEntity.ok(calculationCountedService.calculationSettlementByCountryId(tradeId, countryId, calculationInDto));
    }

}

```

## src/main/java/com/nubo/operations/api/web/controller/FractionationCountedRestController.java

```java
package com.nubo.operations.api.web.controller;

import com.nubo.operations.api.client.operation.fractionation.models.dto.request.AssignmentInDto;
import com.nubo.operations.api.client.operation.fractionation.models.dto.request.FractionInDto;
import com.nubo.operations.api.models.dto.response.SettlementOutDto;
import com.nubo.operations.api.service.FractionationCountedService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Tag(name = "Fractionation Counted")
@RestController
@RequestMapping("/{version}/fractionation/counted-operation")
@RequiredArgsConstructor
public class FractionationCountedRestController {

    private final FractionationCountedService fractionationCountedService;

    @Operation(summary = "Create fraction by tradeId and sideId", description = "Create fraction by tradeId and sideId")
    @ApiResponses(value = {@ApiResponse(responseCode = "201", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = SettlementOutDto[].class)))})
    @PostMapping("/create-fractions/trade/{tradeId}/side/{sideId}")
    public ResponseEntity<List<SettlementOutDto>> createFractions(
            @PathVariable Long tradeId,
            @PathVariable String sideId,
            @Valid @RequestBody List<FractionInDto> fractionInDtoList) {
        return ResponseEntity.status(HttpStatus.CREATED).body(fractionationCountedService.createFractions(tradeId, sideId, fractionInDtoList));
    }

    @Operation(summary = "Update fraction by tradeId and sideId", description = "Create fraction by tradeId and sideId")
    @ApiResponses(value = {@ApiResponse(responseCode = "201", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = SettlementOutDto[].class)))})
    @PutMapping("/update-assignments/trade/{tradeId}/side/{sideId}")
    public ResponseEntity<List<SettlementOutDto>> updateAssignment(
            @PathVariable Long tradeId,
            @PathVariable String sideId,
            @Valid @RequestBody List<AssignmentInDto> assignmentInDtoList) {
        return ResponseEntity.status(HttpStatus.OK).body(fractionationCountedService.updateAssignment(tradeId, sideId, assignmentInDtoList));
    }

}

```

## src/main/java/com/nubo/operations/api/web/controller/SettlementRestController.java

```java
package com.nubo.operations.api.web.controller;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nubo.operations.api.models.dto.request.SettlementCommissionUpdateInDto;
import com.nubo.operations.api.models.dto.request.SettlementUpdateInDto;
import com.nubo.operations.api.models.dto.response.PageResponseOutDto;
import com.nubo.operations.api.models.dto.response.SettlementOutDto;
import com.nubo.operations.api.models.entity.SettlementKey;
import com.nubo.operations.api.service.SettlementRedisService;
import com.nubo.operations.api.service.SettlementService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@Tag(name = "Settlement")
@RestController
@RequestMapping("/{version}/settlement")
@RequiredArgsConstructor
public class SettlementRestController {

    private final SettlementService settlementService;
    private final SettlementRedisService settlementRedisService;

    @Operation(summary = "All Settlements", description = "All Settlements")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = SettlementOutDto[].class)))})
    @GetMapping
    public ResponseEntity<PageResponseOutDto<SettlementOutDto>> findAllSettlements(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "fraction") String sort,
            @RequestParam(defaultValue = "asc") String order,
            @RequestParam(defaultValue = "false") boolean all,
            @Parameter(example = "1") @RequestParam(required = false) Long tradeId,
            @Parameter(example = "1A") @RequestParam(required = false) String sideId,
            @Parameter(example = "12345") @RequestParam(required = false) String investorDocumentNumber) {
        return ResponseEntity.ok(settlementService.findAllSettlements(page, size, sort, order, all, tradeId, sideId, investorDocumentNumber));
    }

    @Operation(summary = "All Settlements with Dynamic Filtering", description = "All Settlements with Dynamic Filtering")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = SettlementOutDto[].class)))})
    @GetMapping("/dynamic")
    public ResponseEntity<PageResponseOutDto<SettlementOutDto>> findAllSettlementsDynamic(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(required = false) String sort,
            @RequestParam(required = false) String order,
            @Parameter(example = "1") @RequestParam(required = false) Long tradeId,
            @Parameter(example = "1A") @RequestParam(required = false) String sideId,
            @Parameter(example = "12345") @RequestParam(required = false) String investorDocumentNumber,
            @Parameter(example = "fiduciarySpecialist") @RequestParam(required = false) String fieldName,
            @Parameter(example = "true") @RequestParam(required = false) String fieldValue,
            @Parameter(example = "equals") @RequestParam(required = false) String operation) {

        Pageable pageable;
        if (sort != null && order != null) {
            Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
            Sort sorting = Sort.by(direction, sort);
            pageable = PageRequest.of(page, size, sorting);
        } else {
            pageable = PageRequest.of(page, size);
        }

        return ResponseEntity.ok(settlementService.findAllSettlementsDynamic(
            pageable, tradeId, sideId, investorDocumentNumber, fieldName, fieldValue, operation));
    }

    @Operation(summary = "Find Settlement by Id", description = "Find Settlement by Id")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = SettlementOutDto.class)))})
    @GetMapping("/trade/{tradeId}/fraction/{fraction}/side/{side}")
    public ResponseEntity<SettlementOutDto> findSettlementById(
            @PathVariable Long tradeId,
            @PathVariable Integer fraction,
            @PathVariable String side) {
        SettlementKey settlementKey = new SettlementKey(tradeId, fraction, side);
        return ResponseEntity.ok(settlementService.findSettlementById(settlementKey));
    }

    @Operation(summary = "Update Settlement by Id", description = "Update settlement by Id")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = SettlementOutDto.class)))})
    @PatchMapping("/trade/{tradeId}/fraction/{fraction}/side/{sideId}")
    public ResponseEntity<SettlementOutDto> updateSettlement(
            @PathVariable Long tradeId,
            @PathVariable Integer fraction,
            @PathVariable String sideId,
            @Valid @RequestBody SettlementUpdateInDto settlementUpdateInDto) {
        SettlementKey settlementKey = new SettlementKey(tradeId, fraction, sideId);
        SettlementOutDto updatedSettlement = settlementService.updateSettlement(settlementKey, settlementUpdateInDto);
        return ResponseEntity.ok(updatedSettlement);
    }

    @Operation(summary = "Get All Settlements for trade", description = "Get All Settlements for trade")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = SettlementOutDto[].class)))})
    @GetMapping("/BuyAndSell/trade/{tradeId}")
    public ResponseEntity<PageResponseOutDto<SettlementOutDto>> findAllSettlementsByTrade(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "fraction") String sort,
            @RequestParam(defaultValue = "asc") String order,
            @RequestParam(defaultValue = "false") boolean all,
            @PathVariable(required = false) Long tradeId) {
        return ResponseEntity.ok(settlementService.findAllSettlementsByTrade(page, size, sort, order, all, tradeId));
    }

    @Operation(summary = "Update settlement commission", description = "Update settlement commission")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = SettlementOutDto.class)))})
    @PatchMapping("/update-commission/trade/{tradeId}/fraction/{fraction}/side/{sideId}")
    public ResponseEntity<SettlementOutDto> updateSettlementCommission(
            @PathVariable Long tradeId,
            @PathVariable Integer fraction,
            @PathVariable String sideId,
           @Valid @RequestBody SettlementCommissionUpdateInDto settlementCommissionUpdateInDto) {
        SettlementKey settlementKey = new SettlementKey(tradeId, fraction, sideId);
        return ResponseEntity.ok(settlementService.updateSettlementCommission(settlementKey, settlementCommissionUpdateInDto));
    }

    @Operation(summary = "Find All Settlements with Redis and Database Fallback", 
               description = "Search settlements using Redis with automatic fallback to database if Redis is unavailable or returns no results")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = SettlementOutDto[].class)))})
    @GetMapping("/redis-with-fallback")
    public ResponseEntity<PageResponseOutDto<SettlementOutDto>> findAllSettlementsRedisWithFallback(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(required = false) String sort,
            @RequestParam(required = false) String order,
            @Parameter(example = "1") @RequestParam(required = false) Long tradeId,
            @Parameter(example = "1A") @RequestParam(required = false) String sideId,
            @Parameter(example = "12345") @RequestParam(required = false) String investorDocumentNumber,
            @Parameter(example = "fiduciarySpecialist") @RequestParam(required = false) String fieldName,
            @Parameter(example = "true") @RequestParam(required = false) String fieldValue,
            @Parameter(example = "equals") @RequestParam(required = false) String operation) {

        Pageable pageable;
        if (sort != null && order != null) {
            Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
            Sort sorting = Sort.by(direction, sort);
            pageable = PageRequest.of(page, size, sorting);
        } else {
            pageable = PageRequest.of(page, size);
        }

        return ResponseEntity.ok(settlementRedisService.findAllSettlementsDynamic(pageable, fieldName, fieldValue, operation,
                tradeId, sideId, investorDocumentNumber));
    }

    @Operation(summary = "All Settlements Redis Dynamic", description = "All Settlements Redis Dynamic")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = SettlementOutDto[].class)))})
    @GetMapping("/redis")
    public ResponseEntity<PageResponseOutDto<SettlementOutDto>> findAllSettlementsRedis(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(required = false) String sort,
            @RequestParam(required = false) String order,
            @Parameter(example = "1") @RequestParam(required = false) Long tradeId,
            @Parameter(example = "1A") @RequestParam(required = false) String sideId,
            @Parameter(example = "12345") @RequestParam(required = false) String investorDocumentNumber,
            @Parameter(example = "fiduciarySpecialist") @RequestParam(required = false) String fieldName,
            @Parameter(example = "true") @RequestParam(required = false) String fieldValue,
            @Parameter(example = "equals") @RequestParam(required = false) String operation) {

        Pageable pageable;
        if (sort != null && order != null) {
            Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
            Sort sorting = Sort.by(direction, sort);
            pageable = PageRequest.of(page, size, sorting);
        } else {
            pageable = PageRequest.of(page, size);
        }

        return ResponseEntity.ok(settlementRedisService.findAllSettlementsRedisOnly(pageable, fieldName, fieldValue, operation,
                tradeId, sideId, investorDocumentNumber));
    }

}

```

## src/main/java/com/nubo/operations/api/web/controller/TradeEquityRestController.java

```java
package com.nubo.operations.api.web.controller;

import com.nubo.operations.api.models.dto.request.TradeEquityInDto;
import com.nubo.operations.api.models.dto.request.TradeEquityUpdateInDto;
import com.nubo.operations.api.models.dto.response.PageResponseOutDto;
import com.nubo.operations.api.models.dto.response.TradeEquityOutDto;
import com.nubo.operations.api.service.TradeEquityService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "Trade Equity")
@RequestMapping("/{version}/trade-equity")
@RestController
@RequiredArgsConstructor
public class TradeEquityRestController {

    private final TradeEquityService tradeEquityService;

    @Operation(summary = "All TradeEquity", description = "All TradeEquity")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = TradeEquityOutDto[].class)))})
    @GetMapping
    public ResponseEntity<PageResponseOutDto<TradeEquityOutDto>> findAllTradeEquity(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "tradeId") String sort,
            @RequestParam(defaultValue = "asc") String order,
            @RequestParam(defaultValue = "false") boolean all) {
        return ResponseEntity.ok(tradeEquityService.findAllTradeEquity(page, size, sort, order, all));
    }

    @Operation(summary = "Find TradeEquity by Id", description = "Find TradeEquity by Id")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = TradeEquityOutDto.class)))})
    @GetMapping("/trade/{tradeId}")
    public ResponseEntity<TradeEquityOutDto> findTradeEquityById(@PathVariable Long tradeId) {
        return ResponseEntity.ok(tradeEquityService.findTradeEquityById(tradeId));
    }

    @Operation(summary = "Create TradeEquity", description = "Create TradeEquity")
    @ApiResponses(value = {@ApiResponse(responseCode = "201", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = TradeEquityOutDto.class)))})
    @PostMapping
    public ResponseEntity<TradeEquityOutDto> createTradeEquity(@Valid @RequestBody TradeEquityInDto tradeEquityInDto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(tradeEquityService.createTradeEquity(tradeEquityInDto));
    }

    @Operation(summary = "Update TradeEquity by Id", description = "Update TradeEquity by Id")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = TradeEquityOutDto.class)))})
    @PatchMapping("/trade/{tradeId}")
    public ResponseEntity<TradeEquityOutDto> updateTradeEquity(@PathVariable Long tradeId,
                                                               @Valid @RequestBody TradeEquityUpdateInDto tradeEquityUpdateInDto) {
        return ResponseEntity.ok(tradeEquityService.updateTradeEquity(tradeId, tradeEquityUpdateInDto));
    }
}

```

## src/main/java/com/nubo/operations/api/web/controller/TradeRestController.java

```java
package com.nubo.operations.api.web.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nubo.operations.api.models.domain.TradeParams;
import com.nubo.operations.api.models.dto.request.TradeInDto;
import com.nubo.operations.api.models.dto.request.TradeUpdateInDto;
import com.nubo.operations.api.models.dto.response.PageResponseOutDto;
import com.nubo.operations.api.models.dto.response.TradeOutDto;
import com.nubo.operations.api.service.TradeRedisService;
import com.nubo.operations.api.service.TradeService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@Tag(name = "Trade")
@RequestMapping("/{version}/trade")
@RestController
@RequiredArgsConstructor
public class TradeRestController {

    private final TradeService tradeService;
    private final TradeRedisService tradeRedisService;

    @Operation(summary = "All Trades", description = "All Trades")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = TradeOutDto[].class))) })
    @GetMapping
    public ResponseEntity<PageResponseOutDto<TradeOutDto>> findAllTrades(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "matchDate") String sort,
            @RequestParam(defaultValue = "desc") String order,
            @Parameter(example = "100000") @RequestParam(required = false) Long matchId,
            @Parameter(example = "1") @RequestParam(required = false) Integer statusId,
            @Parameter(example = "true") @RequestParam(required = false) Boolean canceledStatus,
            @Parameter(example = "1") @RequestParam(required = false) Long participantId,
            @Parameter(example = "1") @RequestParam(required = false) Long typeId,
            @Parameter(example = "1") @RequestParam(required = false) Long countryId,
            @Parameter(example = "37,76") @RequestParam(required = false) List<Long> countryIds,
            @Parameter(example = "2025-01-01") @RequestParam(required = false) LocalDate startMatchDate,
            @Parameter(example = "2025-01-01") @RequestParam(required = false) LocalDate endMatchDate,
            @Parameter(example = "2025-01-01") @RequestParam(required = false) LocalDate endClearingDate,
            @Parameter(example = "true") @RequestParam(required = false, defaultValue = "true") Boolean onlyOperation) {
        Sort sortBy = order.equalsIgnoreCase(Sort.Direction.ASC.name())
                ? Sort.by(Sort.Order.asc(sort), Sort.Order.asc("id"))
                : Sort.by(Sort.Order.desc(sort), Sort.Order.desc("id"));
        Pageable pageable = PageRequest.of(page, size, sortBy);
        if ((countryIds == null || countryIds.isEmpty()) && countryId != null) {
            countryIds = List.of(countryId);
        }
        TradeParams tradeParams = new TradeParams(matchId, statusId, canceledStatus, participantId, typeId,
                countryId, countryIds, startMatchDate, endMatchDate, endClearingDate, onlyOperation);

        return ResponseEntity.ok(tradeService.findAllTrades(pageable, tradeParams));
    }

    @Operation(summary = "All Trade Ids", description = "All Trade Ids")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = Long[].class)))
    })
    @GetMapping("/all-trade-id")
    public ResponseEntity<PageResponseOutDto<Long>> findAllTradeIds(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @Parameter(example = "100000") @RequestParam(required = false) Long matchId) {
        Pageable pageable = PageRequest.of(page, size);
        return ResponseEntity.ok(tradeService.findAllTradeIds(pageable, matchId));
    }

    @Operation(summary = "All Trades with Dynamic Filter", description = "All Trades with Dynamic Filter")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = TradeOutDto[].class)))
    })
    @GetMapping("/dynamic")
    public ResponseEntity<PageResponseOutDto<TradeOutDto>> findAllTradesDynamic(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(required = false) String fieldName,
            @RequestParam(required = false) String fieldValue,
            @RequestParam(required = false) String operation,
            @RequestParam(required = false) String sort,
            @RequestParam(required = false) String order,
            @Parameter(example = "100000") @RequestParam(required = false) Long matchId,
            @Parameter(example = "1") @RequestParam(required = false) Integer statusId,
            @Parameter(example = "true") @RequestParam(required = false) Boolean canceledStatus,
            @Parameter(example = "1") @RequestParam(required = false) Long participantId,
            @Parameter(example = "1") @RequestParam(required = false) Long typeId,
            @Parameter(example = "1") @RequestParam(required = false) Long countryId,
            @Parameter(example = "2025-01-01") @RequestParam(required = false) LocalDate startMatchDate,
            @Parameter(example = "2025-01-01") @RequestParam(required = false) LocalDate endMatchDate,
            @Parameter(example = "2025-01-01") @RequestParam(required = false) LocalDate endClearingDate) {

        Pageable pageable;
        if (sort != null && order != null) {
            Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
            Sort sorting = Sort.by(direction, sort);
            pageable = PageRequest.of(page, size, sorting);
        } else {
            pageable = PageRequest.of(page, size);
        }

        TradeParams tradeParams = new TradeParams(matchId, statusId, canceledStatus, participantId, typeId,
                countryId, null, startMatchDate, endMatchDate, endClearingDate, null);

        return ResponseEntity.ok(
                tradeService.findAllTradesDynamic(
                        pageable, fieldName, fieldValue, operation, tradeParams));
    }

    @Operation(summary = "Find All Trades with Redis and Database Fallback", description = "Search trades using Redis with automatic fallback to database if Redis is unavailable or returns no results")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = TradeOutDto[].class)))
    })
    @GetMapping("/redis-with-fallback")
    public ResponseEntity<PageResponseOutDto<TradeOutDto>> findAllTradesRedisWithFallback(
            @Parameter(description = "Page number") @RequestParam(value = "page", defaultValue = "0") int page,
            @Parameter(description = "Page size") @RequestParam(value = "size", defaultValue = "10") int size,
            @Parameter(description = "Field name for dynamic search") @RequestParam(value = "fieldName", required = false) String fieldName,
            @Parameter(description = "Field value for dynamic search") @RequestParam(value = "fieldValue", required = false) String fieldValue,
            @Parameter(description = "Search operation") @RequestParam(value = "operation", defaultValue = "equals") String operation,
            @Parameter(description = "Match ID") @RequestParam(value = "matchId", required = false) Long matchId,
            @Parameter(description = "Status ID") @RequestParam(value = "statusId", required = false) Integer statusId,
            @Parameter(description = "Canceled Status") @RequestParam(value = "canceledStatus", required = false) Boolean canceledStatus,
            @Parameter(description = "Participant ID") @RequestParam(value = "participantId", required = false) Long participantId,
            @Parameter(description = "Type ID") @RequestParam(value = "typeId", required = false) Long typeId,
            @Parameter(description = "Country ID") @RequestParam(value = "countryId", required = false) Long countryId,
            @Parameter(description = "Start Match Date") @RequestParam(value = "startMatchDate", required = false) LocalDate startMatchDate,
            @Parameter(description = "End Match Date") @RequestParam(value = "endMatchDate", required = false) LocalDate endMatchDate,
            @Parameter(description = "End Clearing Date") @RequestParam(value = "endClearingDate", required = false) LocalDate endClearingDate,
            @Parameter(description = "Sort field") @RequestParam(value = "sort", required = false) String sort,
            @Parameter(description = "Sort order") @RequestParam(value = "order", defaultValue = "asc") String order) {

        Sort sortObj = Sort.unsorted();
        if (sort != null && !sort.isEmpty()) {
            Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
            sortObj = Sort.by(direction, sort);
        }

        Pageable pageable = PageRequest.of(page, size, sortObj);
        TradeParams tradeParams = new TradeParams(matchId, statusId, canceledStatus, participantId, typeId, countryId,
                null, startMatchDate, endMatchDate, endClearingDate, null);
        return ResponseEntity.ok(tradeRedisService.findAllTradesDynamic(pageable, fieldName, fieldValue, operation,
                tradeParams));
    }

    @Operation(summary = "Find Trade by Id", description = "Find Trade by Id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = TradeOutDto.class)))
    })
    @GetMapping("/{tradeId}")
    public ResponseEntity<TradeOutDto> findTradeById(@PathVariable Long tradeId) {
        return ResponseEntity.ok(tradeService.findTradeById(tradeId));
    }

    @Operation(summary = "Create Trade", description = "Create Trade")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = TradeOutDto.class)))
    })
    @PostMapping()
    public ResponseEntity<TradeOutDto> createTrade(@Valid @RequestBody TradeInDto tradeInDto) {
        TradeOutDto tradeOutDto = tradeService.createTrade(tradeInDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(tradeOutDto);
    }

    @Operation(summary = "Update Trade by Id", description = "Update Trade by Id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = TradeOutDto.class)))
    })
    @PatchMapping("{tradeId}")
    public ResponseEntity<TradeOutDto> updateTrade(@PathVariable Long tradeId,
            @Valid @RequestBody TradeUpdateInDto tradeUpdateInDto) {
        return ResponseEntity.ok(tradeService.updateTrade(tradeId, tradeUpdateInDto));
    }

    @Operation(summary = "All Trades Redis Dynamic", description = "All Trades Redis Dynamic")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = TradeOutDto[].class)))
    })
    @GetMapping("/redis")
    public ResponseEntity<PageResponseOutDto<TradeOutDto>> findAllTradesRedis(
            @Parameter(description = "Page number") @RequestParam(value = "page", defaultValue = "0") int page,
            @Parameter(description = "Page size") @RequestParam(value = "size", defaultValue = "10") int size,
            @Parameter(description = "Field name for dynamic search") @RequestParam(value = "fieldName", required = false) String fieldName,
            @Parameter(description = "Field value for dynamic search") @RequestParam(value = "fieldValue", required = false) String fieldValue,
            @Parameter(description = "Search operation") @RequestParam(value = "operation", defaultValue = "equals") String operation,
            @Parameter(description = "Match ID") @RequestParam(value = "matchId", required = false) Long matchId,
            @Parameter(description = "Status ID") @RequestParam(value = "statusId", required = false) Integer statusId,
            @Parameter(description = "Canceled Status") @RequestParam(value = "canceledStatus", required = false) Boolean canceledStatus,
            @Parameter(description = "Participant ID") @RequestParam(value = "participantId", required = false) Long participantId,
            @Parameter(description = "Type ID") @RequestParam(value = "typeId", required = false) Long typeId,
            @Parameter(description = "Country ID") @RequestParam(value = "countryId", required = false) Long countryId,
            @Parameter(description = "Start Match Date") @RequestParam(value = "startMatchDate", required = false) LocalDate startMatchDate,
            @Parameter(description = "End Match Date") @RequestParam(value = "endMatchDate", required = false) LocalDate endMatchDate,
            @Parameter(description = "End Clearing Date") @RequestParam(value = "endClearingDate", required = false) LocalDate endClearingDate,
            @Parameter(description = "Sort field") @RequestParam(value = "sort", required = false) String sort,
            @Parameter(description = "Sort order") @RequestParam(value = "order", defaultValue = "asc") String order) {

        Sort sortObj = Sort.unsorted();
        if (sort != null && !sort.isEmpty()) {
            Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
            sortObj = Sort.by(direction, sort);
        }

        Pageable pageable = PageRequest.of(page, size, sortObj);
        TradeParams tradeParams = new TradeParams(matchId, statusId, canceledStatus, participantId, typeId, countryId,
                null, startMatchDate, endMatchDate, endClearingDate, null);
        return ResponseEntity.ok(tradeRedisService.findAllTradesRedisOnly(pageable, fieldName, fieldValue, operation,
                tradeParams));
    }

}

```

## src/main/java/com/nubo/operations/api/web/controller/ValidateCountedFractionRestController.java

```java
package com.nubo.operations.api.web.controller;

import com.nubo.operations.api.client.operation.rules.models.dto.request.FractionRuleInDto;
import com.nubo.operations.api.models.dto.response.FractionAccountOutDto;
import com.nubo.operations.api.models.dto.response.ParticipantOutDto;
import com.nubo.operations.api.service.ValidateCountedFractionService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Tag(name = "Validate Counted Fraction")
@RequestMapping("/{version}/validate/counted-fraction")
@RestController
@RequiredArgsConstructor
public class ValidateCountedFractionRestController {

    private final ValidateCountedFractionService validateCountedFractionService;

    @Operation(summary = "Validate account correction",
            description = "Validate account correction")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = FractionAccountOutDto.class)))})
    @GetMapping("/correction/account-fraction/account-number/{accountNumber}/trade/{tradeId}/side/{sideId}")
    public ResponseEntity<FractionAccountOutDto> validateAccountFractionCorrection(
            @PathVariable String accountNumber,
            @PathVariable Long tradeId,
            @PathVariable String sideId) {
        return ResponseEntity.ok(validateCountedFractionService.validateAccountFractionCorrection(accountNumber, tradeId, sideId));
    }

    @Operation(summary = "Validate quantity fractions correction",
            description = "Validate quantity correction")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = Boolean.class)))})
    @PostMapping("/correction/quantity-fractions/trade/{tradeId}")
    public ResponseEntity<Boolean> validateQuantityFractionsCorrection(@PathVariable Long tradeId,
                                                                       @Valid @RequestBody List<FractionRuleInDto> fractionRuleInDtoList) {
        Boolean response = validateCountedFractionService.validateQuantityFractionsCorrection(tradeId, fractionRuleInDtoList);
        return ResponseEntity.ok(response);
    }

    @Operation(summary = "Validate range quantity fractions correction",
            description = "Validate range quantity fractions correction")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = Boolean.class)))})
    @PostMapping("/correction/range-quantity-fractions/trade/{tradeId}")
    public ResponseEntity<Boolean> validateRangeQuantityFractionsCorrection(@PathVariable Long tradeId,
                                                                            @Valid @RequestBody List<FractionRuleInDto> fractionRuleInDtoList) {
        Boolean response = validateCountedFractionService.validateRangeQuantityFractionsCorrection(tradeId, fractionRuleInDtoList);
        return ResponseEntity.ok(response);
    }


    @Operation(summary = "Validate maximum limit fractions correction",
            description = "Validate maximum limit fractions correction")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = Boolean.class)))})
    @PostMapping("/correction/maximum-limit-fractions/trade/{tradeId}")
    public ResponseEntity<Boolean> validateMaximumLimitFractionsCorrection(@PathVariable Long tradeId,
                                                                           @Valid @RequestBody List<FractionRuleInDto> fractionRuleInDtoList) {
        Boolean response = validateCountedFractionService.validateMaximumLimitFractionsCorrection(tradeId, fractionRuleInDtoList);
        return ResponseEntity.ok(response);
    }

    @Operation(summary = "Validate direct depositor fraction correction",
            description = "Validate direct depositor fraction correction")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = ParticipantOutDto.class)))})
    @GetMapping("/correction/direct-depositor/trade/{tradeId}/side/{sideId}")
    public ResponseEntity<ParticipantOutDto> validateDirectDepositorFractionCorrection(@PathVariable Long tradeId,
                                                                                       @PathVariable String sideId) {
        ParticipantOutDto response = validateCountedFractionService.validateDirectDepositorFractionCorrection(tradeId, sideId);
        return ResponseEntity.ok(response);
    }

}

```

## src/main/java/com/nubo/operations/api/web/controller/ValidateCountedOperationRestController.java

```java
package com.nubo.operations.api.web.controller;

import com.nubo.operations.api.service.ValidateCountedOperationService;
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
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "Validate Counted Operation")
@RequestMapping("/{version}/validate/counted-operation")
@RestController
@RequiredArgsConstructor
public class ValidateCountedOperationRestController {

    private final ValidateCountedOperationService validateCountedOperationService;

    @Operation(summary = "Validate if the type is a counted operation and is active in business rules",
            description = "Validate if the type is a counted operation and is active in business rules")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = Boolean.class)))})
    @GetMapping("/correction/trade/{tradeId}")
    public ResponseEntity<Boolean> validateTypeCountedTradeCorrection(@PathVariable Long tradeId) {
        Boolean response = validateCountedOperationService.validateTypeCountedTradeCorrection(tradeId);
        return ResponseEntity.ok(response);
    }

    @Operation(summary = "Validate when he is a custodian he cannot correct an operation",
            description = "Validate when he is a custodian he cannot correct an operation")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = Boolean.class)))})
    @GetMapping("/correction/custodian/trade/{tradeId}/side/{sideId}")
    public ResponseEntity<Boolean> validateCustodianTradeCorrection(@PathVariable Long tradeId, @PathVariable String sideId) {
        Boolean response = validateCountedOperationService.validateCustodianTradeCorrection(tradeId, sideId);
        return ResponseEntity.ok(response);
    }

    @Operation(summary = "Validate days allowed trade",
            description = "Validate days allowed trade")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = Boolean.class)))})
    @GetMapping("/correction/days-allowed/trade/{tradeId}")
    public ResponseEntity<Boolean> validateDaysAllowedTradeCorrection(@PathVariable Long tradeId) {
        Boolean response = validateCountedOperationService.validateDaysAllowedTradeCorrection(tradeId);
        return ResponseEntity.ok(response);
    }

}

```

## src/main/resources/application-dev.yml

```yaml
server:
  port: @spring.port@
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
  data:
    redis:
      host: ${REDIS_HOST}
      port: ${REDIS_PORT}
logging:
  config: classpath:log/log4j2.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR
client:
  nubo:
    url-operation-calculation: ${NUBO_URL_OPERATION_CALCULATION}
    url-operation-rules: ${NUBO_URL_OPERATION_RULES}
    url-operation-fractionation: ${NUBO_URL_OPERATION_FRACTIONATION}
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
      topic-name: ${KAFKA_NUBO_TOPIC_NAME_TRANSFORMATION_CORRECTIONS}

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
      pool-name: @hikari.pool.name@
  jpa:
    hibernate:
      ddl-auto: none
      default_schema: NUANBODB
    show-sql: 'true'
    database-platform: org.hibernate.dialect.PostgreSQLDialect
  data:
    redis:
      host: 127.0.0.1
      port: 6379
logging:
  config: classpath:log/log4j2.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR
    com.nubo.operations.api.service.impl.TradeRedisServiceImpl: INFO
client:
  nubo:
    url-operation-calculation: ${NUBO_URL_OPERATION_CALCULATION:localhost}
    url-operation-rules: ${NUBO_URL_OPERATION_RULES:localhost}
    url-operation-fractionation: ${NUBO_URL_OPERATION_FRACTIONATION:localhost}
kafka:
  nubo:
    retries: ${KAFKA_NUBO_RETRIES:5}
    bootstrap-servers: ${KAFKA_NUBO_BOOTSTRAP_SERVER:localhost}
    auto-offset-reset: ${KAFKA_NUBO_AUTO_OFFSET_RESET:latest}
    group-id: ${KAFKA_NUBO_GROUP_ID}
    security:
      protocol: PLAINTEXT
    sasl:
      mechanism: ""
      jaas:
        config: "org.apache.kafka.common.security.scram.ScramLoginModule required;"
    producer:
      topic-name: ${KAFKA_NUBO_TOPIC_NAME_TRANSFORMATION_CORRECTIONS:2}

```

## src/main/resources/application-prod.yml

```yaml
server:
  port: @spring.port@
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
  data:
    redis:
      host: ${REDIS_HOST}
      port: ${REDIS_PORT}
logging:
  config: classpath:log/log4j2-prod.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR
client:
  nubo:
    url-operation-calculation: ${NUBO_URL_OPERATION_CALCULATION}
    url-operation-rules: ${NUBO_URL_OPERATION_RULES}
    url-operation-fractionation: ${NUBO_URL_OPERATION_FRACTIONATION}
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
      topic-name: ${KAFKA_NUBO_TOPIC_NAME_TRANSFORMATION_CORRECTIONS}

```

## src/main/resources/application-qa.yml

```yaml
server:
  port: @spring.port@
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
  data:
    redis:
      host: ${REDIS_HOST}
      port: ${REDIS_PORT}
logging:
  config: classpath:log/log4j2.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR
client:
  nubo:
    url-operation-calculation: ${NUBO_URL_OPERATION_CALCULATION}
    url-operation-rules: ${NUBO_URL_OPERATION_RULES}
    url-operation-fractionation: ${NUBO_URL_OPERATION_FRACTIONATION}
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
      topic-name: ${KAFKA_NUBO_TOPIC_NAME_TRANSFORMATION_CORRECTIONS}

```

## src/main/resources/application-uat.yml

```yaml
server:
  port: @spring.port@
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
  data:
    redis:
      host: ${REDIS_HOST}
      port: ${REDIS_PORT}
logging:
  config: classpath:log/log4j2.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR
client:
  nubo:
    url-operation-calculation: ${NUBO_URL_OPERATION_CALCULATION}
    url-operation-rules: ${NUBO_URL_OPERATION_RULES}
    url-operation-fractionation: ${NUBO_URL_OPERATION_FRACTIONATION}
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
      topic-name: ${KAFKA_NUBO_TOPIC_NAME_TRANSFORMATION_CORRECTIONS}

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
 ,-----. ,------. ,------.,------.   ,---. ,--------.,--. ,-----. ,--.  ,--. ,---.   ,---.  ,------. ,--.
'  .-.  '|  .--. '|  .---'|  .--. ' /  O  \'--.  .--'|  |'  .-.  '|  ,'.|  |'   .-' /  O  \ |  .--. '|  |
|  | |  ||  '--' ||  `--, |  '--'.'|  .-.  |  |  |   |  ||  | |  ||  |' '  |`.  `-.|  .-.  ||  '--' ||  |
'  '-'  '|  | --' |  `---.|  |\  \ |  | |  |  |  |   |  |'  '-'  '|  | `   |.-'    |  | |  ||  | --' |  |
 `-----' `--'     `------'`--' '--'`--' `--'  `--'   `--' `-----' `--'  `--'`-----'`--' `--'`--'     `--'

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
