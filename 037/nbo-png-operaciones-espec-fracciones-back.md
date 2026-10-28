# nbo-png-operaciones-espec-fracciones-back

Código Java de producción y configuraciones, sin tests. Cada sección contiene el archivo original completo y su ruta. Captura: 28/10/2026.

## Índice

1. `.mvn/wrapper/maven-wrapper.properties`
2. `mvnw`
3. `mvnw.cmd`
4. `pom.xml`
5. `src/main/java/com/nubo/operations/special/fractionation/api/OperationsSpecialFractionationApplication.java`
6. `src/main/java/com/nubo/operations/special/fractionation/api/application/annotations/RateLimited.java`
7. `src/main/java/com/nubo/operations/special/fractionation/api/application/annotations/ValidBigDecimal.java`
8. `src/main/java/com/nubo/operations/special/fractionation/api/application/config/KafkaProducerConfig.java`
9. `src/main/java/com/nubo/operations/special/fractionation/api/application/config/SwaggerConfig.java`
10. `src/main/java/com/nubo/operations/special/fractionation/api/application/config/ValidBigDecimalConfig.java`
11. `src/main/java/com/nubo/operations/special/fractionation/api/application/config/WebConfig.java`
12. `src/main/java/com/nubo/operations/special/fractionation/api/application/context/GlobalContext.java`
13. `src/main/java/com/nubo/operations/special/fractionation/api/application/database/NamingStrategyConfig.java`
14. `src/main/java/com/nubo/operations/special/fractionation/api/application/database/UpperNamingConfig.java`
15. `src/main/java/com/nubo/operations/special/fractionation/api/application/filters/GlobalFilter.java`
16. `src/main/java/com/nubo/operations/special/fractionation/api/application/interceptors/GlobalInterceptor.java`
17. `src/main/java/com/nubo/operations/special/fractionation/api/application/interceptors/RateLimitInterceptor.java`
18. `src/main/java/com/nubo/operations/special/fractionation/api/application/properties/PropertiesConfig.java`
19. `src/main/java/com/nubo/operations/special/fractionation/api/application/properties/PropertiesContext.java`
20. `src/main/java/com/nubo/operations/special/fractionation/api/application/security/CustomBasicAuthenticationEntryPoint.java`
21. `src/main/java/com/nubo/operations/special/fractionation/api/application/security/CustomBearerTokenAccessDeniedHandler.java`
22. `src/main/java/com/nubo/operations/special/fractionation/api/application/security/CustomBearerTokenAuthenticationEntryPoint.java`
23. `src/main/java/com/nubo/operations/special/fractionation/api/application/security/SecurityConfig.java`
24. `src/main/java/com/nubo/operations/special/fractionation/api/application/util/ApplicationUtils.java`
25. `src/main/java/com/nubo/operations/special/fractionation/api/application/util/RestClientUtils.java`
26. `src/main/java/com/nubo/operations/special/fractionation/api/client/kafka/dto/request/ProducerKafkaSettlementInDto.java`
27. `src/main/java/com/nubo/operations/special/fractionation/api/client/kafka/dto/request/ProducerKafkaTransformerInDto.java`
28. `src/main/java/com/nubo/operations/special/fractionation/api/client/kafka/producer/KafkaNuboAdapter.java`
29. `src/main/java/com/nubo/operations/special/fractionation/api/client/special/operation/calculation/models/dto/request/SettleAccountsInDto.java`
30. `src/main/java/com/nubo/operations/special/fractionation/api/client/special/operation/calculation/models/dto/response/SettleAccountsOutDto.java`
31. `src/main/java/com/nubo/operations/special/fractionation/api/client/special/operation/calculation/service/OperationSpecialCalculationClient.java`
32. `src/main/java/com/nubo/operations/special/fractionation/api/client/special/operation/calculation/service/impl/OperationCalculationClientImpl.java`
33. `src/main/java/com/nubo/operations/special/fractionation/api/exception/ServiceException.java`
34. `src/main/java/com/nubo/operations/special/fractionation/api/exception/error/ErrorCode.java`
35. `src/main/java/com/nubo/operations/special/fractionation/api/exception/error/ErrorResponse.java`
36. `src/main/java/com/nubo/operations/special/fractionation/api/exception/error/ErrorValidation.java`
37. `src/main/java/com/nubo/operations/special/fractionation/api/exception/handler/GlobalExceptionHandler.java`
38. `src/main/java/com/nubo/operations/special/fractionation/api/helpers/MapperPageUtil.java`
39. `src/main/java/com/nubo/operations/special/fractionation/api/helpers/MapperUtil.java`
40. `src/main/java/com/nubo/operations/special/fractionation/api/models/dto/request/AssignmentInDto.java`
41. `src/main/java/com/nubo/operations/special/fractionation/api/models/dto/request/AssignmentSpecialSettlementInDto.java`
42. `src/main/java/com/nubo/operations/special/fractionation/api/models/dto/request/FractionSpecialSettlementInDto.java`
43. `src/main/java/com/nubo/operations/special/fractionation/api/models/dto/request/FractionationInDto.java`
44. `src/main/java/com/nubo/operations/special/fractionation/api/models/dto/request/FractionationPendingInDto.java`
45. `src/main/java/com/nubo/operations/special/fractionation/api/models/dto/response/BankAccountOutDto.java`
46. `src/main/java/com/nubo/operations/special/fractionation/api/models/dto/response/BankOutDto.java`
47. `src/main/java/com/nubo/operations/special/fractionation/api/models/dto/response/CityOutDto.java`
48. `src/main/java/com/nubo/operations/special/fractionation/api/models/dto/response/CountryOutDto.java`
49. `src/main/java/com/nubo/operations/special/fractionation/api/models/dto/response/CurrencyOutDto.java`
50. `src/main/java/com/nubo/operations/special/fractionation/api/models/dto/response/DepartmentOutDto.java`
51. `src/main/java/com/nubo/operations/special/fractionation/api/models/dto/response/DepositoryOutDto.java`
52. `src/main/java/com/nubo/operations/special/fractionation/api/models/dto/response/FicAdministratorOutDto.java`
53. `src/main/java/com/nubo/operations/special/fractionation/api/models/dto/response/FractionOutDto.java`
54. `src/main/java/com/nubo/operations/special/fractionation/api/models/dto/response/GicsOutDto.java`
55. `src/main/java/com/nubo/operations/special/fractionation/api/models/dto/response/IdentificationTypeOutDto.java`
56. `src/main/java/com/nubo/operations/special/fractionation/api/models/dto/response/InvestorAccountOutDto.java`
57. `src/main/java/com/nubo/operations/special/fractionation/api/models/dto/response/InvestorOutDto.java`
58. `src/main/java/com/nubo/operations/special/fractionation/api/models/dto/response/PageResponseOutDto.java`
59. `src/main/java/com/nubo/operations/special/fractionation/api/models/dto/response/ParticipantAccountOutDto.java`
60. `src/main/java/com/nubo/operations/special/fractionation/api/models/dto/response/ParticipantOutDto.java`
61. `src/main/java/com/nubo/operations/special/fractionation/api/models/dto/response/SettlementOutDto.java`
62. `src/main/java/com/nubo/operations/special/fractionation/api/models/dto/response/SettlementPendingOutDto.java`
63. `src/main/java/com/nubo/operations/special/fractionation/api/models/dto/response/SideOutDto.java`
64. `src/main/java/com/nubo/operations/special/fractionation/api/models/dto/response/SpecialSettlementOutDto.java`
65. `src/main/java/com/nubo/operations/special/fractionation/api/models/dto/response/SpecialTradeOutDto.java`
66. `src/main/java/com/nubo/operations/special/fractionation/api/models/dto/response/StatusOutDto.java`
67. `src/main/java/com/nubo/operations/special/fractionation/api/models/dto/response/TaxStatusOutDto.java`
68. `src/main/java/com/nubo/operations/special/fractionation/api/models/dto/response/TradingSystemOutDto.java`
69. `src/main/java/com/nubo/operations/special/fractionation/api/models/dto/response/TypeOutDto.java`
70. `src/main/java/com/nubo/operations/special/fractionation/api/models/dto/response/ValidationSettlementOutDto.java`
71. `src/main/java/com/nubo/operations/special/fractionation/api/models/entity/AfpFundEntity.java`
72. `src/main/java/com/nubo/operations/special/fractionation/api/models/entity/BankAccountEntity.java`
73. `src/main/java/com/nubo/operations/special/fractionation/api/models/entity/BankEntity.java`
74. `src/main/java/com/nubo/operations/special/fractionation/api/models/entity/CfiEntity.java`
75. `src/main/java/com/nubo/operations/special/fractionation/api/models/entity/CityEntity.java`
76. `src/main/java/com/nubo/operations/special/fractionation/api/models/entity/ClassEntity.java`
77. `src/main/java/com/nubo/operations/special/fractionation/api/models/entity/CountryEntity.java`
78. `src/main/java/com/nubo/operations/special/fractionation/api/models/entity/CurrencyEntity.java`
79. `src/main/java/com/nubo/operations/special/fractionation/api/models/entity/DepartmentEntity.java`
80. `src/main/java/com/nubo/operations/special/fractionation/api/models/entity/DepositoryEntity.java`
81. `src/main/java/com/nubo/operations/special/fractionation/api/models/entity/ExchangeRateEntity.java`
82. `src/main/java/com/nubo/operations/special/fractionation/api/models/entity/FicAdministratorEntity.java`
83. `src/main/java/com/nubo/operations/special/fractionation/api/models/entity/GicsEntity.java`
84. `src/main/java/com/nubo/operations/special/fractionation/api/models/entity/IdentificationTypeEntity.java`
85. `src/main/java/com/nubo/operations/special/fractionation/api/models/entity/InvestorAccountEntity.java`
86. `src/main/java/com/nubo/operations/special/fractionation/api/models/entity/InvestorEntity.java`
87. `src/main/java/com/nubo/operations/special/fractionation/api/models/entity/IssuerEntity.java`
88. `src/main/java/com/nubo/operations/special/fractionation/api/models/entity/MarketEntity.java`
89. `src/main/java/com/nubo/operations/special/fractionation/api/models/entity/ParticipantAccountEntity.java`
90. `src/main/java/com/nubo/operations/special/fractionation/api/models/entity/ParticipantBankAccountEntity.java`
91. `src/main/java/com/nubo/operations/special/fractionation/api/models/entity/ParticipantEntity.java`
92. `src/main/java/com/nubo/operations/special/fractionation/api/models/entity/SecurityTitleEntity.java`
93. `src/main/java/com/nubo/operations/special/fractionation/api/models/entity/SettlementEntity.java`
94. `src/main/java/com/nubo/operations/special/fractionation/api/models/entity/SettlementKey.java`
95. `src/main/java/com/nubo/operations/special/fractionation/api/models/entity/SettlementLogEntity.java`
96. `src/main/java/com/nubo/operations/special/fractionation/api/models/entity/SettlementPendingEntity.java`
97. `src/main/java/com/nubo/operations/special/fractionation/api/models/entity/SettlementPendingStatusHistoryEntity.java`
98. `src/main/java/com/nubo/operations/special/fractionation/api/models/entity/SettlementPendingStatusHistoryKey.java`
99. `src/main/java/com/nubo/operations/special/fractionation/api/models/entity/SettlementStatusHistoryEntity.java`
100. `src/main/java/com/nubo/operations/special/fractionation/api/models/entity/SettlementStatusHistoryKey.java`
101. `src/main/java/com/nubo/operations/special/fractionation/api/models/entity/SideEntity.java`
102. `src/main/java/com/nubo/operations/special/fractionation/api/models/entity/SpecialSettlementEntity.java`
103. `src/main/java/com/nubo/operations/special/fractionation/api/models/entity/SpecialSettlementKey.java`
104. `src/main/java/com/nubo/operations/special/fractionation/api/models/entity/SpecialTradeEntity.java`
105. `src/main/java/com/nubo/operations/special/fractionation/api/models/entity/SpecialTradeStatusHistoryEntity.java`
106. `src/main/java/com/nubo/operations/special/fractionation/api/models/entity/SpecialTradeStatusHistoryKey.java`
107. `src/main/java/com/nubo/operations/special/fractionation/api/models/entity/StatusEntity.java`
108. `src/main/java/com/nubo/operations/special/fractionation/api/models/entity/TaxStatusEntity.java`
109. `src/main/java/com/nubo/operations/special/fractionation/api/models/entity/TaxesEntity.java`
110. `src/main/java/com/nubo/operations/special/fractionation/api/models/entity/TradeEntity.java`
111. `src/main/java/com/nubo/operations/special/fractionation/api/models/entity/TradingSessionEntity.java`
112. `src/main/java/com/nubo/operations/special/fractionation/api/models/entity/TradingSystemEntity.java`
113. `src/main/java/com/nubo/operations/special/fractionation/api/models/entity/TypeEntity.java`
114. `src/main/java/com/nubo/operations/special/fractionation/api/models/entity/UserNuboEntity.java`
115. `src/main/java/com/nubo/operations/special/fractionation/api/models/enums/OperationIndicatorEnum.java`
116. `src/main/java/com/nubo/operations/special/fractionation/api/models/enums/OperationSpecialBusinessRulesEnum.java`
117. `src/main/java/com/nubo/operations/special/fractionation/api/models/enums/PropertiesEnum.java`
118. `src/main/java/com/nubo/operations/special/fractionation/api/models/enums/SideEnum.java`
119. `src/main/java/com/nubo/operations/special/fractionation/api/models/enums/StatusEnum.java`
120. `src/main/java/com/nubo/operations/special/fractionation/api/models/enums/TypeEnum.java`
121. `src/main/java/com/nubo/operations/special/fractionation/api/models/enums/VersionApiEnum.java`
122. `src/main/java/com/nubo/operations/special/fractionation/api/repository/BankAccountRepository.java`
123. `src/main/java/com/nubo/operations/special/fractionation/api/repository/InvestorAccountRepository.java`
124. `src/main/java/com/nubo/operations/special/fractionation/api/repository/ParticipantAccountRepository.java`
125. `src/main/java/com/nubo/operations/special/fractionation/api/repository/ParticipantBankAccountRepository.java`
126. `src/main/java/com/nubo/operations/special/fractionation/api/repository/ParticipantRepository.java`
127. `src/main/java/com/nubo/operations/special/fractionation/api/repository/SettlementLogRepository.java`
128. `src/main/java/com/nubo/operations/special/fractionation/api/repository/SettlementPendingRepository.java`
129. `src/main/java/com/nubo/operations/special/fractionation/api/repository/SettlementPendingStatusHistoryRepository.java`
130. `src/main/java/com/nubo/operations/special/fractionation/api/repository/SettlementRepository.java`
131. `src/main/java/com/nubo/operations/special/fractionation/api/repository/SettlementStatusHistoryRepository.java`
132. `src/main/java/com/nubo/operations/special/fractionation/api/repository/SideRepository.java`
133. `src/main/java/com/nubo/operations/special/fractionation/api/repository/SpecialSettlementRepository.java`
134. `src/main/java/com/nubo/operations/special/fractionation/api/repository/SpecialTradeRepository.java`
135. `src/main/java/com/nubo/operations/special/fractionation/api/repository/SpecialTradeStatusHistoryRepository.java`
136. `src/main/java/com/nubo/operations/special/fractionation/api/repository/StatusRepository.java`
137. `src/main/java/com/nubo/operations/special/fractionation/api/repository/TaxesRepository.java`
138. `src/main/java/com/nubo/operations/special/fractionation/api/repository/TradeRepository.java`
139. `src/main/java/com/nubo/operations/special/fractionation/api/repository/TypeRepository.java`
140. `src/main/java/com/nubo/operations/special/fractionation/api/repository/UserNuboRepository.java`
141. `src/main/java/com/nubo/operations/special/fractionation/api/service/FractionationDepositService.java`
142. `src/main/java/com/nubo/operations/special/fractionation/api/service/FractionationPendingService.java`
143. `src/main/java/com/nubo/operations/special/fractionation/api/service/FractionationService.java`
144. `src/main/java/com/nubo/operations/special/fractionation/api/service/FractionationSpecialSettlementService.java`
145. `src/main/java/com/nubo/operations/special/fractionation/api/service/impl/FractionationDepositServiceImpl.java`
146. `src/main/java/com/nubo/operations/special/fractionation/api/service/impl/FractionationPendingServiceImpl.java`
147. `src/main/java/com/nubo/operations/special/fractionation/api/service/impl/FractionationServiceImpl.java`
148. `src/main/java/com/nubo/operations/special/fractionation/api/service/impl/FractionationSpecialSettlementServiceImpl.java`
149. `src/main/java/com/nubo/operations/special/fractionation/api/web/controller/FractionationDepositRestController.java`
150. `src/main/java/com/nubo/operations/special/fractionation/api/web/controller/FractionationPendingRestController.java`
151. `src/main/java/com/nubo/operations/special/fractionation/api/web/controller/FractionationRestController.java`
152. `src/main/java/com/nubo/operations/special/fractionation/api/web/controller/FractionationSpecialSettlementRestController.java`
153. `src/main/resources/application-dev.yml`
154. `src/main/resources/application-local.yml`
155. `src/main/resources/application-prod.yml`
156. `src/main/resources/application-qa.yml`
157. `src/main/resources/application-uat.yml`
158. `src/main/resources/application.yml`
159. `src/main/resources/banner.txt`
160. `src/main/resources/log/JsonEventLayout_error.json`
161. `src/main/resources/log/JsonEventLayout_info.json`
162. `src/main/resources/log/JsonEventLayout_trace.json`
163. `src/main/resources/log/log4j2-prod.properties`
164. `src/main/resources/log/log4j2.properties`

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
		<version>3.5.6</version>
		<relativePath/>
	</parent>
	<groupId>com.nubo.operations.special.fractionation.api</groupId>
	<artifactId>operations-special-fractionation-api</artifactId>
	<version>0.52.6</version>
	<name>${project.artifactId}</name>
	<description>Operations Special Fractionation Api</description>

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
		<!-- Security -->
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-security</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-oauth2-resource-server</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.security</groupId>
			<artifactId>spring-security-test</artifactId>
			<scope>test</scope>
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
		<!-- Json -->
		<dependency>
			<groupId>com.google.code.gson</groupId>
			<artifactId>gson</artifactId>
			<version>2.11.0</version>
		</dependency>
		<!-- vulnerability adjustment  -->
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
								<exclude>**/OperationsSpecialFractionationApiApplication.class</exclude>
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

## src/main/java/com/nubo/operations/special/fractionation/api/OperationsSpecialFractionationApplication.java

```java
package com.nubo.operations.special.fractionation.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class OperationsSpecialFractionationApplication {

	public static void main(String[] args) {
		SpringApplication.run(OperationsSpecialFractionationApplication.class, args);
	}

}

```

## src/main/java/com/nubo/operations/special/fractionation/api/application/annotations/RateLimited.java

```java
package com.nubo.operations.special.fractionation.api.application.annotations;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.METHOD, ElementType.TYPE})
public @interface RateLimited {
}
```

## src/main/java/com/nubo/operations/special/fractionation/api/application/annotations/ValidBigDecimal.java

```java
package com.nubo.operations.special.fractionation.api.application.annotations;

import com.nubo.operations.special.fractionation.api.application.config.ValidBigDecimalConfig;
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

## src/main/java/com/nubo/operations/special/fractionation/api/application/config/KafkaProducerConfig.java

```java
package com.nubo.operations.special.fractionation.api.application.config;

import com.nubo.operations.special.fractionation.api.application.properties.PropertiesConfig;
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

## src/main/java/com/nubo/operations/special/fractionation/api/application/config/SwaggerConfig.java

```java
package com.nubo.operations.special.fractionation.api.application.config;

import com.nubo.operations.special.fractionation.api.exception.error.ErrorResponse;
import com.nubo.operations.special.fractionation.api.exception.error.ErrorValidation;
import com.nubo.operations.special.fractionation.api.models.enums.PropertiesEnum;
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

## src/main/java/com/nubo/operations/special/fractionation/api/application/config/ValidBigDecimalConfig.java

```java
package com.nubo.operations.special.fractionation.api.application.config;

import com.nubo.operations.special.fractionation.api.application.annotations.ValidBigDecimal;
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

## src/main/java/com/nubo/operations/special/fractionation/api/application/config/WebConfig.java

```java
package com.nubo.operations.special.fractionation.api.application.config;

import com.nubo.operations.special.fractionation.api.application.interceptors.GlobalInterceptor;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.client.RestClient;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.i18n.SessionLocaleResolver;

import java.util.Arrays;
import java.util.Locale;

@Configuration
@RequiredArgsConstructor
public class WebConfig implements WebMvcConfigurer {

    private final GlobalInterceptor globalInterceptor;
    private final Environment environment;

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
        if (!Arrays.asList(environment.getActiveProfiles()).contains("local")) {
            registry.addInterceptor(globalInterceptor)
                    .addPathPatterns("/**");
        }
    }

    @Bean
    @Profile("local")
    public SecurityFilterChain localSecurityFilterChain(HttpSecurity http) throws Exception {
        return http
                .csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(auth -> auth.anyRequest().permitAll())
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .build();
    }

    @Bean
    public RestClient restClient() {
        return RestClient.create();
    }

}

```

## src/main/java/com/nubo/operations/special/fractionation/api/application/context/GlobalContext.java

```java
package com.nubo.operations.special.fractionation.api.application.context;

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

## src/main/java/com/nubo/operations/special/fractionation/api/application/database/NamingStrategyConfig.java

```java
package com.nubo.operations.special.fractionation.api.application.database;

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

## src/main/java/com/nubo/operations/special/fractionation/api/application/database/UpperNamingConfig.java

```java
package com.nubo.operations.special.fractionation.api.application.database;

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

## src/main/java/com/nubo/operations/special/fractionation/api/application/filters/GlobalFilter.java

```java
package com.nubo.operations.special.fractionation.api.application.filters;

import com.nubo.operations.special.fractionation.api.application.context.GlobalContext;
import com.nubo.operations.special.fractionation.api.application.util.ApplicationUtils;
import com.nubo.operations.special.fractionation.api.exception.ServiceException;
import com.nubo.operations.special.fractionation.api.exception.error.ErrorCode;
import com.nubo.operations.special.fractionation.api.exception.error.ErrorResponse;
import com.nubo.operations.special.fractionation.api.models.enums.PropertiesEnum;
import com.nubo.operations.special.fractionation.api.models.enums.VersionApiEnum;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpHeaders;
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
            String token = this.validateTokenRequest(request);

            GlobalContext.setProperty(PropertiesEnum.VERSION_API.getValue(), VersionApiEnum.fromValue(versionPath).getValue());
            GlobalContext.setProperty(PropertiesEnum.CLIENT_IP.getValue(), clientIpHeader);
            GlobalContext.setProperty(PropertiesEnum.CLIENT_USER.getValue(), clientUserHeader);
            GlobalContext.setProperty(PropertiesEnum.CLIENT_DATETIME.getValue(), clientDatetime);
            GlobalContext.setProperty(PropertiesEnum.AUTH_TOKEN.getValue(), token);

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

    private String validateTokenRequest(HttpServletRequest request) {
        String bearerToken = request.getHeader(HttpHeaders.AUTHORIZATION);
        String token = null;
        if (bearerToken != null && bearerToken.startsWith("Bearer ")) {
            token = bearerToken.substring(7);
        }
        if (token == null) {
            throw new ServiceException(ErrorCode.UNAUTHORIZED, HttpStatus.UNAUTHORIZED);
        }
        return token;
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

## src/main/java/com/nubo/operations/special/fractionation/api/application/interceptors/GlobalInterceptor.java

```java
package com.nubo.operations.special.fractionation.api.application.interceptors;

import com.nubo.operations.special.fractionation.api.application.context.GlobalContext;
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

    private final RateLimitInterceptor rateLimitInterceptor;

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) {
        GlobalContext.remove();
    }

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {
        rateLimitInterceptor.rateLimitInterceptor(request, handler);
        return true;
    }

}
```

## src/main/java/com/nubo/operations/special/fractionation/api/application/interceptors/RateLimitInterceptor.java

```java
package com.nubo.operations.special.fractionation.api.application.interceptors;

import com.nubo.operations.special.fractionation.api.application.annotations.RateLimited;
import com.nubo.operations.special.fractionation.api.application.properties.PropertiesConfig;
import com.nubo.operations.special.fractionation.api.exception.ServiceException;
import com.nubo.operations.special.fractionation.api.exception.error.ErrorCode;
import com.nubo.operations.special.fractionation.api.models.enums.PropertiesEnum;
import jakarta.servlet.http.HttpServletRequest;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;

import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.TimeUnit;

@Component
@RequiredArgsConstructor
public class RateLimitInterceptor {

    private final ConcurrentHashMap<String, RequestData> requestCounts = new ConcurrentHashMap<>();

    private final PropertiesConfig propertiesConfig;

    public void rateLimitInterceptor(HttpServletRequest request, Object handler) {
        if (handler instanceof org.springframework.web.method.HandlerMethod handlerMethod
                && (handlerMethod.hasMethodAnnotation(RateLimited.class)
                || handlerMethod.getBeanType().isAnnotationPresent(RateLimited.class))) {

            String clientIp = getClientIp(request);
            String methodName = request.getMethod();
            String path = request.getRequestURI();
            String key = clientIp + ":" + methodName + ":" + path;

            RequestData requestData = requestCounts.computeIfAbsent(key,
                    k -> new RequestData(propertiesConfig.getRangeTimeRequest(),
                            propertiesConfig.getWaitingTime()));

            synchronized (requestData) {

                requestData.incrementCount();

                if (requestData.isRateLimited()) {
                    throw new ServiceException(ErrorCode.RATE_LIMITING_EXCEEDED, HttpStatus.TOO_MANY_REQUESTS);
                }

                if (requestData.getCount() > propertiesConfig.getNumberMaxRequest()) {
                    requestData.setRateLimited(true);
                    throw new ServiceException(ErrorCode.RATE_LIMITING_EXCEEDED, HttpStatus.TOO_MANY_REQUESTS);
                }
            }
        }

    }

    private String getClientIp(HttpServletRequest request) {
        String clientIp = request.getHeader(PropertiesEnum.CLIENT_IP.getValue());
        if (clientIp == null || clientIp.isEmpty()) {
            clientIp = request.getRemoteAddr();
        }
        return clientIp;
    }

    private static class RequestData {

        @Getter
        private int count = 0;
        private long lastRequestTime = System.currentTimeMillis();
        @Getter
        @Setter
        private boolean rateLimited = false;
        private final Integer rangeTimeRequest;
        private final Integer waitingTime;

        public RequestData(Integer rangeTimeRequest, Integer waitingTime) {
            this.rangeTimeRequest = rangeTimeRequest;
            this.waitingTime = waitingTime;
        }

        public void incrementCount() {
            long currentTime = System.currentTimeMillis();

            if (rateLimited && currentTime - lastRequestTime > TimeUnit.SECONDS.toMillis(waitingTime)) {
                count = 0;
                rateLimited = false;
            } else if (rateLimited) {
                lastRequestTime = currentTime;
            } else {
                if (currentTime - lastRequestTime > TimeUnit.SECONDS.toMillis(rangeTimeRequest)) {
                    count = 0;
                    rateLimited = false;
                }
                count++;
                lastRequestTime = currentTime;
            }
        }
    }

}

```

## src/main/java/com/nubo/operations/special/fractionation/api/application/properties/PropertiesConfig.java

```java
package com.nubo.operations.special.fractionation.api.application.properties;

import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
@Getter
public class PropertiesConfig {

    @Value("${spring.application.name}")
    private String apiName;

    @Value("${config.application.rateLimited.number-max-request}")
    private Integer numberMaxRequest;

    @Value("${config.application.rateLimited.range-time-request}")
    private Integer rangeTimeRequest;

    @Value("${config.application.rateLimited.waiting-time}")
    private Integer waitingTime;

    @Value("${client.keycloak.client-id}")
    private String keycloakClientId;

    @Value("${client.keycloak.client-secret}")
    private String keycloakClientSecret;

    @Value("${client.keycloak.introspection-uri}")
    private String keycloakIntrospectionUri;

    @Value("${client.nubo.url-operation-special-calculation}")
    private String urlNuboOperationSpecialCalculation;

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

    @Value("${kafka.nubo.producer.topic-name-send-transformer}")
    private String kafkaNuboProducerTopicNameSendTransformer;

}

```

## src/main/java/com/nubo/operations/special/fractionation/api/application/properties/PropertiesContext.java

```java
package com.nubo.operations.special.fractionation.api.application.properties;

import com.nubo.operations.special.fractionation.api.application.context.GlobalContext;
import com.nubo.operations.special.fractionation.api.application.util.ApplicationUtils;
import com.nubo.operations.special.fractionation.api.models.enums.PropertiesEnum;
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

## src/main/java/com/nubo/operations/special/fractionation/api/application/security/CustomBasicAuthenticationEntryPoint.java

```java
package com.nubo.operations.special.fractionation.api.application.security;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerExceptionResolver;

@Component
public class CustomBasicAuthenticationEntryPoint implements AuthenticationEntryPoint {

    private final HandlerExceptionResolver resolver;

    public CustomBasicAuthenticationEntryPoint(@Qualifier("handlerExceptionResolver") HandlerExceptionResolver resolver) {
        this.resolver = resolver;
    }

    @Override
    public void commence(HttpServletRequest request,
                         HttpServletResponse response, AuthenticationException authException) {
        response.addHeader("WWW-Authenticate", "Basic realm=\"Realm\"");
        this.resolver.resolveException(request, response, null, authException);
    }

}

```

## src/main/java/com/nubo/operations/special/fractionation/api/application/security/CustomBearerTokenAccessDeniedHandler.java

```java
package com.nubo.operations.special.fractionation.api.application.security;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerExceptionResolver;

@Component
public class CustomBearerTokenAccessDeniedHandler implements AccessDeniedHandler {

    private final HandlerExceptionResolver resolver;


    public CustomBearerTokenAccessDeniedHandler(@Qualifier("handlerExceptionResolver") HandlerExceptionResolver resolver) {
        this.resolver = resolver;
    }

    @Override
    public void handle(HttpServletRequest request, HttpServletResponse response,
                       AccessDeniedException accessDeniedException) {
        this.resolver.resolveException(request, response, null, accessDeniedException);
    }

}

```

## src/main/java/com/nubo/operations/special/fractionation/api/application/security/CustomBearerTokenAuthenticationEntryPoint.java

```java
package com.nubo.operations.special.fractionation.api.application.security;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerExceptionResolver;

@Component
public class CustomBearerTokenAuthenticationEntryPoint implements AuthenticationEntryPoint {

    private final HandlerExceptionResolver resolver;


    public CustomBearerTokenAuthenticationEntryPoint(@Qualifier("handlerExceptionResolver") HandlerExceptionResolver resolver) {
        this.resolver = resolver;
    }

    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response,
                         AuthenticationException authException) {
        this.resolver.resolveException(request, response, null, authException);
    }

}

```

## src/main/java/com/nubo/operations/special/fractionation/api/application/security/SecurityConfig.java

```java
package com.nubo.operations.special.fractionation.api.application.security;

import com.nubo.operations.special.fractionation.api.application.filters.GlobalFilter;
import com.nubo.operations.special.fractionation.api.application.properties.PropertiesConfig;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
@RequiredArgsConstructor
@Profile("!local")
public class SecurityConfig {

    private final CustomBasicAuthenticationEntryPoint customBasicAuthenticationEntryPoint;
    private final CustomBearerTokenAuthenticationEntryPoint customBearerTokenAuthenticationEntryPoint;
    private final CustomBearerTokenAccessDeniedHandler customBearerTokenAccessDeniedHandler;
    private final GlobalFilter globalFilter;
    private final PropertiesConfig propertiesConfig;

    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
        return httpSecurity
                .csrf(AbstractHttpConfigurer::disable)
                .addFilterBefore(globalFilter, UsernamePasswordAuthenticationFilter.class)
                .authorizeHttpRequests(authorize -> authorize
                        .requestMatchers("/v3/api-docs/**", "/swagger-ui/**", "/swagger-ui.html",
                                "/v1/keycloak/token")
                        .permitAll().anyRequest().authenticated())
                .oauth2ResourceServer(oauth ->
                        oauth.opaqueToken(opaqueToken ->
                                        opaqueToken
                                                .introspectionUri(propertiesConfig.getKeycloakIntrospectionUri())
                                                .introspectionClientCredentials(propertiesConfig.getKeycloakClientId(),
                                                        propertiesConfig.getKeycloakClientSecret())
                                )
                                .authenticationEntryPoint(this.customBearerTokenAuthenticationEntryPoint)
                                .accessDeniedHandler(this.customBearerTokenAccessDeniedHandler)
                )
                .cors(Customizer.withDefaults())
                .httpBasic(httpBasic -> httpBasic.authenticationEntryPoint(this.customBasicAuthenticationEntryPoint))
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .build();
    }

}



```

## src/main/java/com/nubo/operations/special/fractionation/api/application/util/ApplicationUtils.java

```java
package com.nubo.operations.special.fractionation.api.application.util;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.google.gson.Gson;
import com.nubo.operations.special.fractionation.api.exception.ServiceException;
import com.nubo.operations.special.fractionation.api.exception.error.ErrorCode;
import org.springframework.http.HttpStatus;

import java.lang.reflect.Type;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class ApplicationUtils {

    static final String FORMAT_DATETIME = "yyyy-MM-dd'T'HH:mm:ss";

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

    public static String convertObjectToJson(Object object) {
        return new Gson().toJson(object);
    }

    public static String convertObjectMapperToJson(Object object) {
        ObjectMapper mapper = new ObjectMapper();
        mapper.registerModule(new JavaTimeModule());
        mapper.configure(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS, false);
        try {
            return mapper.writeValueAsString(object);
        } catch (JsonProcessingException ex) {
            throw new ServiceException(ErrorCode.UNEXPECTED, ex);
        }
    }
}


```

## src/main/java/com/nubo/operations/special/fractionation/api/application/util/RestClientUtils.java

```java
package com.nubo.operations.special.fractionation.api.application.util;

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
        log.info("Client url, method[{}] {}", method, url);
        return restClient.method(method)
                .uri(url)
                .headers(h -> h.addAll(headers))
                .body(requestBody)
                .retrieve()
                .toEntity(responseType);
    }

    public <T> ResponseEntity<T> requestWithoutBodyWithResponseObject(URI url, HttpMethod method, HttpHeaders headers,
                                                                      Class<T> responseType) {
        log.info("Client url, method[{}] {}", method, url);
        return restClient.method(method)
                .uri(url)
                .headers(h -> h.addAll(headers))
                .retrieve()
                .toEntity(responseType);
    }

}

```

## src/main/java/com/nubo/operations/special/fractionation/api/client/kafka/dto/request/ProducerKafkaSettlementInDto.java

```java
package com.nubo.operations.special.fractionation.api.client.kafka.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProducerKafkaSettlementInDto {

    private Long tradeId;

    private Integer fraction;

    private String sideId;
}

```

## src/main/java/com/nubo/operations/special/fractionation/api/client/kafka/dto/request/ProducerKafkaTransformerInDto.java

```java
package com.nubo.operations.special.fractionation.api.client.kafka.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProducerKafkaTransformerInDto {

    private String clientIp;
    private String clientUser;
    private String clientDateTime;
    private Integer operationIndicator;
    private List<ProducerKafkaSettlementInDto> settlementValid;

}

```

## src/main/java/com/nubo/operations/special/fractionation/api/client/kafka/producer/KafkaNuboAdapter.java

```java
package com.nubo.operations.special.fractionation.api.client.kafka.producer;

import com.nubo.operations.special.fractionation.api.application.properties.PropertiesConfig;
import com.nubo.operations.special.fractionation.api.application.properties.PropertiesContext;
import com.nubo.operations.special.fractionation.api.application.util.ApplicationUtils;
import com.nubo.operations.special.fractionation.api.client.kafka.dto.request.ProducerKafkaTransformerInDto;
import com.nubo.operations.special.fractionation.api.exception.ServiceException;
import com.nubo.operations.special.fractionation.api.exception.error.ErrorCode;
import com.nubo.operations.special.fractionation.api.models.enums.OperationIndicatorEnum;
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

    public void sendOperationSpecialCorrectionMessageTransformer(ProducerKafkaTransformerInDto producerKafkaTransformerInDto) {

        producerKafkaTransformerInDto.setClientUser(PropertiesContext.getClientUser());
        producerKafkaTransformerInDto.setClientIp(PropertiesContext.getClientIp());
        producerKafkaTransformerInDto.setClientDateTime(ApplicationUtils.convertLocalDateTimeToString(PropertiesContext.getClientDatetime()));
        producerKafkaTransformerInDto.setOperationIndicator(OperationIndicatorEnum.SPECIAL_OPERATION_CORRECTION.getValue());

        String topic = propertiesConfig.getKafkaNuboProducerTopicNameSendTransformer();
        String jsonString = ApplicationUtils.convertObjectToJson(producerKafkaTransformerInDto);
        CompletableFuture<SendResult<String, String>> future = kafkaNuboTemplate.send(topic, jsonString).toCompletableFuture();

        future.thenAccept(result -> log.info("Send message Kafka operation special settlements correction and Trade valid " +
                                "-- Topic: {} -- offset: {} -- json: {} ",
                        topic, result.getRecordMetadata().offset(), jsonString))
                .exceptionally(ex -> {
                    throw new ServiceException(ErrorCode.ERROR_KAFKA_PRODUCER_NUBO, ex);
                });
    }
}

```

## src/main/java/com/nubo/operations/special/fractionation/api/client/special/operation/calculation/models/dto/request/SettleAccountsInDto.java

```java
package com.nubo.operations.special.fractionation.api.client.special.operation.calculation.models.dto.request;

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

}

```

## src/main/java/com/nubo/operations/special/fractionation/api/client/special/operation/calculation/models/dto/response/SettleAccountsOutDto.java

```java
package com.nubo.operations.special.fractionation.api.client.special.operation.calculation.models.dto.response;

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

## src/main/java/com/nubo/operations/special/fractionation/api/client/special/operation/calculation/service/OperationSpecialCalculationClient.java

```java
package com.nubo.operations.special.fractionation.api.client.special.operation.calculation.service;

import com.nubo.operations.special.fractionation.api.client.special.operation.calculation.models.dto.request.SettleAccountsInDto;
import com.nubo.operations.special.fractionation.api.client.special.operation.calculation.models.dto.response.SettleAccountsOutDto;

public interface OperationSpecialCalculationClient {

    SettleAccountsOutDto getSettleAccounts(SettleAccountsInDto settleAccountsInDto);

}

```

## src/main/java/com/nubo/operations/special/fractionation/api/client/special/operation/calculation/service/impl/OperationCalculationClientImpl.java

```java
package com.nubo.operations.special.fractionation.api.client.special.operation.calculation.service.impl;

import com.nubo.operations.special.fractionation.api.application.properties.PropertiesConfig;
import com.nubo.operations.special.fractionation.api.application.properties.PropertiesContext;
import com.nubo.operations.special.fractionation.api.application.util.ApplicationUtils;
import com.nubo.operations.special.fractionation.api.application.util.RestClientUtils;
import com.nubo.operations.special.fractionation.api.client.special.operation.calculation.models.dto.request.SettleAccountsInDto;
import com.nubo.operations.special.fractionation.api.client.special.operation.calculation.models.dto.response.SettleAccountsOutDto;
import com.nubo.operations.special.fractionation.api.client.special.operation.calculation.service.OperationSpecialCalculationClient;
import com.nubo.operations.special.fractionation.api.exception.ServiceException;
import com.nubo.operations.special.fractionation.api.exception.error.ErrorCode;
import com.nubo.operations.special.fractionation.api.models.enums.PropertiesEnum;
import com.nubo.operations.special.fractionation.api.models.enums.VersionApiEnum;
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
public class OperationCalculationClientImpl implements OperationSpecialCalculationClient {

    private final PropertiesConfig propertiesConfig;
    private final RestClientUtils restClientUtils;

    private static final String PATH_SETTLE_ACCOUNTS = "/calculation/settle-accounts";

    @Override
    public SettleAccountsOutDto getSettleAccounts(SettleAccountsInDto settleAccountsInDto) {
        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getUrlNuboOperationSpecialCalculation())
                .pathSegment(VersionApiEnum.V1.getValue())
                .path(PATH_SETTLE_ACCOUNTS)
                .build()
                .toUri();

        HttpHeaders headers = new HttpHeaders();
        headers.set(PropertiesEnum.CLIENT_IP.getValue(), PropertiesContext.getClientIp());
        headers.set(PropertiesEnum.CLIENT_USER.getValue(), PropertiesContext.getClientUser());
        headers.set(PropertiesEnum.CLIENT_DATETIME.getValue(), ApplicationUtils.convertLocalDateTimeToString(PropertiesContext.getClientDatetime()));
        headers.setBearerAuth(PropertiesContext.getAuthToken());
        headers.setContentType(MediaType.APPLICATION_JSON);

        try {
            ResponseEntity<SettleAccountsOutDto> response = restClientUtils.requestWithResponseObject(uri,
                    HttpMethod.POST, headers, settleAccountsInDto, SettleAccountsOutDto.class);
            if (!ObjectUtils.isEmpty(response.getBody())) {
                return response.getBody();
            }
        } catch (Exception ex) {
            throw new ServiceException(ErrorCode.CLIENT_OPERATION_SPECIAL_CALCULATION_ERROR, HttpStatus.BAD_GATEWAY, ex);
        }

        return SettleAccountsOutDto.builder().build();
    }

}


```

## src/main/java/com/nubo/operations/special/fractionation/api/exception/ServiceException.java

```java
package com.nubo.operations.special.fractionation.api.exception;

import com.nubo.operations.special.fractionation.api.exception.error.ErrorCode;
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

## src/main/java/com/nubo/operations/special/fractionation/api/exception/error/ErrorCode.java

```java
package com.nubo.operations.special.fractionation.api.exception.error;

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
    SIDE_NOT_FOUND("Side not found"),
    TRADE_NOT_FOUND("Trade not found"),
    STATUS_NOT_FOUND("Status not found"),
    USER_NOT_FOUND("User not found"),
    TAXES_NOT_FOUND("Taxes not found"),
    PARTICIPANT_NOT_FOUND("Participant not found"),
    INVESTOR_ACCOUNT_NOT_FOUND("Investor Account not found"),
    TYPE_NOT_FOUND("Type not found"),
    SETTLEMENT_NOT_FOUND("Settlement not found"),
    SETTLEMENT_PENDING_NOT_FOUND("Settlement pending not found"),
    SPECIAL_TRADE_NOT_FOUND("Special Trade not found"),
    SPECIAL_SETTLEMENT_NOT_FOUND("Special Settlement not found"),
    BANK_ACCOUNT_NOT_FOUND("Bank Account not found"),
    PARTICIPANT_BANK_ACCOUNT_NOT_FOUND("Participant bank account not found"),
    PARTICIPANT_ACCOUNT_NOT_FOUND("Participant Account not found"),
    CLIENT_OPERATION_SPECIAL_CALCULATION_ERROR("An unexpected error occurred in Operation Special Calculation"),
    PENDING_NOT_FOUND("No pending records were found for approval."),
    ERROR_KAFKA_PRODUCER_NUBO("Error Producer Kafka Nubo");

    private final String message;

    ErrorCode(String message) {
        this.message = message;
    }

    public String getName() {
        return this.name();
    }

}

```

## src/main/java/com/nubo/operations/special/fractionation/api/exception/error/ErrorResponse.java

```java
package com.nubo.operations.special.fractionation.api.exception.error;

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

## src/main/java/com/nubo/operations/special/fractionation/api/exception/error/ErrorValidation.java

```java
package com.nubo.operations.special.fractionation.api.exception.error;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ErrorValidation {

    private String id;
    private String description;

}

```

## src/main/java/com/nubo/operations/special/fractionation/api/exception/handler/GlobalExceptionHandler.java

```java
package com.nubo.operations.special.fractionation.api.exception.handler;

import com.nubo.operations.special.fractionation.api.application.properties.PropertiesConfig;
import com.nubo.operations.special.fractionation.api.application.properties.PropertiesContext;
import com.nubo.operations.special.fractionation.api.exception.ServiceException;
import com.nubo.operations.special.fractionation.api.exception.error.ErrorCode;
import com.nubo.operations.special.fractionation.api.exception.error.ErrorResponse;
import com.nubo.operations.special.fractionation.api.exception.error.ErrorValidation;
import com.nubo.operations.special.fractionation.api.models.entity.UserNuboEntity;
import com.nubo.operations.special.fractionation.api.repository.UserNuboRepository;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.oauth2.server.resource.InvalidBearerTokenException;
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
import java.util.Optional;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@RestControllerAdvice
@Slf4j
@RequiredArgsConstructor
public class GlobalExceptionHandler {

    private final UserNuboRepository userNuboRepository;
    private final PropertiesConfig propertiesConfig;

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

    @ExceptionHandler(AccessDeniedException.class)
    public ResponseEntity<ErrorResponse> handlerAccessDeniedException(AccessDeniedException exception,
                                                                      HttpServletRequest request) {
        return buildErrorResponse(HttpStatus.FORBIDDEN, exception, request, ErrorCode.FORBIDDEN);
    }

    @ExceptionHandler(InvalidBearerTokenException.class)
    public ResponseEntity<ErrorResponse> handlerInvalidBearerTokenException(InvalidBearerTokenException exception,
                                                                            HttpServletRequest request) {
        this.logoutUser();
        return buildErrorResponse(HttpStatus.UNAUTHORIZED, exception, request, ErrorCode.UNAUTHORIZED);
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
                .timestamp(ObjectUtils.isEmpty(String.valueOf(PropertiesContext.getClientDatetime())) ? null :
                        String.valueOf(PropertiesContext.getClientDatetime()))
                .errorDetails(errorDetails)
                .build();

        log.error("Error -> {}", errorResponse);

        return ResponseEntity.status(status).body(errorResponse);
    }

    private void logoutUser() {
        log.info("Start logoutUser");
        try {
            Optional<UserNuboEntity> userNuboEntityOptional = userNuboRepository.findByUserName(PropertiesContext.getClientUser());
            if (userNuboEntityOptional.isPresent()) {
                UserNuboEntity userNuboEntityLast = userNuboEntityOptional.get();
                userNuboEntityLast.setPreviousSession(false);
                userNuboEntityLast.setLastModifyApplication(propertiesConfig.getApiName());
                userNuboEntityLast.setLastModifyIp(PropertiesContext.getClientIp());
                userNuboEntityLast.setLastModifyUser(PropertiesContext.getClientUser());
                userNuboEntityLast.setLastModifyDate(PropertiesContext.getClientDatetime());

                userNuboRepository.save(userNuboEntityLast);

                log.info("End logoutUser -> {}", userNuboEntityLast);
            }
        } catch (Exception ex) {
            log.error("Error logoutUser -> {}", ex.getMessage());
        }
    }

}

```

## src/main/java/com/nubo/operations/special/fractionation/api/helpers/MapperPageUtil.java

```java
package com.nubo.operations.special.fractionation.api.helpers;

import com.nubo.operations.special.fractionation.api.models.dto.response.PageResponseOutDto;
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

## src/main/java/com/nubo/operations/special/fractionation/api/helpers/MapperUtil.java

```java
package com.nubo.operations.special.fractionation.api.helpers;

import com.nubo.operations.special.fractionation.api.client.kafka.dto.request.ProducerKafkaSettlementInDto;
import com.nubo.operations.special.fractionation.api.client.kafka.dto.request.ProducerKafkaTransformerInDto;
import com.nubo.operations.special.fractionation.api.models.dto.response.BankAccountOutDto;
import com.nubo.operations.special.fractionation.api.models.dto.response.BankOutDto;
import com.nubo.operations.special.fractionation.api.models.dto.response.DepositoryOutDto;
import com.nubo.operations.special.fractionation.api.models.dto.response.FicAdministratorOutDto;
import com.nubo.operations.special.fractionation.api.models.dto.response.FractionOutDto;
import com.nubo.operations.special.fractionation.api.models.dto.response.IdentificationTypeOutDto;
import com.nubo.operations.special.fractionation.api.models.dto.response.InvestorAccountOutDto;
import com.nubo.operations.special.fractionation.api.models.dto.response.InvestorOutDto;
import com.nubo.operations.special.fractionation.api.models.dto.response.ParticipantAccountOutDto;
import com.nubo.operations.special.fractionation.api.models.dto.response.ParticipantOutDto;
import com.nubo.operations.special.fractionation.api.models.dto.response.SettlementOutDto;
import com.nubo.operations.special.fractionation.api.models.dto.response.SideOutDto;
import com.nubo.operations.special.fractionation.api.models.dto.response.SpecialSettlementOutDto;
import com.nubo.operations.special.fractionation.api.models.dto.response.SpecialTradeOutDto;
import com.nubo.operations.special.fractionation.api.models.dto.response.StatusOutDto;
import com.nubo.operations.special.fractionation.api.models.dto.response.TradingSystemOutDto;
import com.nubo.operations.special.fractionation.api.models.dto.response.TypeOutDto;
import com.nubo.operations.special.fractionation.api.models.entity.BankAccountEntity;
import com.nubo.operations.special.fractionation.api.models.entity.BankEntity;
import com.nubo.operations.special.fractionation.api.models.entity.DepositoryEntity;
import com.nubo.operations.special.fractionation.api.models.entity.FicAdministratorEntity;
import com.nubo.operations.special.fractionation.api.models.entity.IdentificationTypeEntity;
import com.nubo.operations.special.fractionation.api.models.entity.InvestorAccountEntity;
import com.nubo.operations.special.fractionation.api.models.entity.InvestorEntity;
import com.nubo.operations.special.fractionation.api.models.entity.ParticipantAccountEntity;
import com.nubo.operations.special.fractionation.api.models.entity.ParticipantEntity;
import com.nubo.operations.special.fractionation.api.models.entity.SettlementEntity;
import com.nubo.operations.special.fractionation.api.models.entity.SettlementPendingEntity;
import com.nubo.operations.special.fractionation.api.models.entity.SideEntity;
import com.nubo.operations.special.fractionation.api.models.entity.SpecialSettlementEntity;
import com.nubo.operations.special.fractionation.api.models.entity.SpecialTradeEntity;
import com.nubo.operations.special.fractionation.api.models.entity.StatusEntity;
import com.nubo.operations.special.fractionation.api.models.entity.TradingSystemEntity;
import com.nubo.operations.special.fractionation.api.models.entity.TypeEntity;
import org.springframework.util.ObjectUtils;

import java.util.List;

public class MapperUtil {

    private MapperUtil() {
    }

    public static SpecialSettlementOutDto specialSettlementEntityToSpecialSettlementOutDto(
            SpecialSettlementEntity specialSettlementEntity) {
        if (ObjectUtils.isEmpty(specialSettlementEntity)) return null;
        return SpecialSettlementOutDto.builder()
                .specialTrade(specialTradeEntityToSpecialTradeOutDto(specialSettlementEntity.getSpecialTrade()))
                .fraction(specialSettlementEntity.getFraction())
                .side(sideEntityToSideOutDto(specialSettlementEntity.getSide()))
                .investor(investorEntityToInvestorOutDto(specialSettlementEntity.getInvestor()))
                .investorAccount(investorAccountEntityToInvestorAccountOutDto(specialSettlementEntity.getInvestorAccount()))
                .bankAccount(bankAccountEntityToBankAccountOutDto(specialSettlementEntity.getBankAccount()))
                .commissionPercentage(specialSettlementEntity.getCommissionPercentage())
                .fractionPercentage(specialSettlementEntity.getFractionPercentage())
                .build();
    }

    public static SpecialTradeOutDto specialTradeEntityToSpecialTradeOutDto(SpecialTradeEntity specialTradeEntity) {
        if (ObjectUtils.isEmpty(specialTradeEntity)) return null;
        return SpecialTradeOutDto.builder()
                .id(specialTradeEntity.getId())
                .recordDate(specialTradeEntity.getRecordDate())
                .specialOperationId(specialTradeEntity.getSpecialOperationId())
                .settlementDate(specialTradeEntity.getSettlementDate())
                .daysToSettlement(specialTradeEntity.getDaysToSettlement())
                .specialOperationName(specialTradeEntity.getSpecialOperationName())
                .countryId(ObjectUtils.isEmpty(specialTradeEntity.getCountry()) ?
                        null : specialTradeEntity.getCountry().getId())
                .typeId(ObjectUtils.isEmpty(specialTradeEntity.getType()) ?
                        null : specialTradeEntity.getType().getId())
                .securityId(ObjectUtils.isEmpty(specialTradeEntity.getSecurityTitle()) ?
                        null : specialTradeEntity.getSecurityTitle().getId())
                .depositoryId(ObjectUtils.isEmpty(specialTradeEntity.getDepository()) ?
                        null : specialTradeEntity.getDepository().getId())
                .sideId(ObjectUtils.isEmpty(specialTradeEntity.getSide()) ?
                        null : specialTradeEntity.getSide().getId())
                .statusId(ObjectUtils.isEmpty(specialTradeEntity.getStatus()) ?
                        null : specialTradeEntity.getStatus().getId())
                .directDepositorId(ObjectUtils.isEmpty(specialTradeEntity.getDirectDepositor()) ?
                        null : specialTradeEntity.getDirectDepositor().getId())
                .clientSettlementAgent(ObjectUtils.isEmpty(specialTradeEntity.getClientSettlementAgent()) ?
                        null : depositoryEntityToDepositoryOutDto(specialTradeEntity.getClientSettlementAgent()))
                .afpFundId(ObjectUtils.isEmpty(specialTradeEntity.getAfpFund()) ?
                        null : specialTradeEntity.getAfpFund().getId())
                .totalAmount(specialTradeEntity.getTotalAmount())
                .totalAmountLocal(specialTradeEntity.getTotalAmountLocal())
                .currencyId(ObjectUtils.isEmpty(specialTradeEntity.getCurrency()) ?
                        null : specialTradeEntity.getCurrency().getId())
                .exchangeRateId(ObjectUtils.isEmpty(specialTradeEntity.getExchangeRate()) ?
                        null : specialTradeEntity.getExchangeRate().getId())
                .price(specialTradeEntity.getPrice())
                .quantity(specialTradeEntity.getQuantity())
                .numberFolios(specialTradeEntity.getNumberFolios())
                .fractionalMark(specialTradeEntity.getFractionalMark())
                .localCurrencyPrice(specialTradeEntity.getLocalCurrencyPrice())
                .build();
    }

    public static SettlementOutDto settlementEntityToSettlementOutDto(SettlementEntity settlementEntity) {
        return SettlementOutDto.builder()
                .tradeId(settlementEntity.getTrade().getId())
                .fraction(settlementEntity.getFraction())
                .side(ObjectUtils.isEmpty(settlementEntity.getSide()) ?
                        null : sideEntityToSideOutDto(settlementEntity.getSide()))
                .investor(ObjectUtils.isEmpty(settlementEntity.getInvestor()) ?
                        null : investorEntityToInvestorOutDto(settlementEntity.getInvestor()))
                .investorAccount(ObjectUtils.isEmpty(settlementEntity.getInvestorAccount()) ?
                        null : investorAccountEntityToInvestorAccountOutDto(settlementEntity.getInvestorAccount()))
                .participantAccount(ObjectUtils.isEmpty(settlementEntity.getParticipantAccount()) ?
                        null : participantAccountEntityToParticipantAccountOutDto(settlementEntity.getParticipantAccount()))
                .fractionQuantity(settlementEntity.getFractionQuantity())
                .fractionVolume(settlementEntity.getFractionVolume())
                .fractionVolumeLocalPrice(settlementEntity.getFractionVolumeLocalPrice())
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
                .tradingSystem(ObjectUtils.isEmpty(settlementEntity.getTradingSystem()) ?
                        null : tradingSystemEntityToTradingSystemOutDto(settlementEntity.getTradingSystem()))
                .status(ObjectUtils.isEmpty(settlementEntity.getStatus()) ?
                        null : statusEntityToStatusOutDto(settlementEntity.getStatus()))
                .brokerageService(settlementEntity.getBrokerageService())
                .custodian(ObjectUtils.isEmpty(settlementEntity.getCustodian()) ?
                        null : participantEntityToParticipantOutDto(settlementEntity.getCustodian()))
                .bankAccount(ObjectUtils.isEmpty(settlementEntity.getBankAccount()) ?
                        null : bankAccountEntityToBankAccountOutDto(settlementEntity.getBankAccount()))
                .reference(settlementEntity.getReference())
                .sourceQuoteType(ObjectUtils.isEmpty(settlementEntity.getSourceQuoteType()) ?
                        null : typeEntityToTypeOutDto(settlementEntity.getSourceQuoteType()))
                .disbursementValue(settlementEntity.getDisbursementValue())
                .ficAdministrator(ObjectUtils.isEmpty(settlementEntity.getFicAdministrator()) ?
                        null : ficAdministratorEntityToFicAdministratorOutDto(settlementEntity.getFicAdministrator()))
                .bloquingStatus(ObjectUtils.isEmpty(settlementEntity.getBloquingStatus()) ?
                        null : statusEntityToStatusOutDto(settlementEntity.getBloquingStatus()))
                .fractionVolumeDvd(settlementEntity.getFractionVolumeDvd())
                .fractionVolumeDvp(settlementEntity.getFractionVolumeDvp())
                .fractionVolumeLp(settlementEntity.getFractionVolumeLp())
                .build();
    }

    public static SideOutDto sideEntityToSideOutDto(SideEntity sideEntity) {
        return SideOutDto.builder()
                .id(sideEntity.getId())
                .description(sideEntity.getDescription())
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
                .documentNumber(investorEntity.getDocumentNumber())
                .identificationType(ObjectUtils.isEmpty(investorEntity.getIdentificationType()) ?
                        null : identificationTypeEntityToIdentificationTypeOutDto(investorEntity.getIdentificationType()))
                .build();
    }

    public static IdentificationTypeOutDto identificationTypeEntityToIdentificationTypeOutDto(IdentificationTypeEntity identificationTypeEntity) {
        return IdentificationTypeOutDto.builder()
                .id(identificationTypeEntity.getId())
                .description(identificationTypeEntity.getDescription())
                .build();
    }

    public static ParticipantAccountOutDto participantAccountEntityToParticipantAccountOutDto(
            ParticipantAccountEntity participantAccountEntity) {
        if (ObjectUtils.isEmpty(participantAccountEntity)) return null;
        return ParticipantAccountOutDto.builder()
                .id(participantAccountEntity.getId())
                .accountNumber(participantAccountEntity.getAccountNumber())
                .build();
    }

    public static InvestorAccountOutDto investorAccountEntityToInvestorAccountOutDto(InvestorAccountEntity investorAccountEntity) {
        if (ObjectUtils.isEmpty(investorAccountEntity)) return null;
        return InvestorAccountOutDto.builder()
                .id(investorAccountEntity.getId())
                .investor(ObjectUtils.isEmpty(investorAccountEntity.getInvestor()) ?
                        null : investorEntityToInvestorOutDto(investorAccountEntity.getInvestor()))
                .accountNumber(investorAccountEntity.getAccountNumber())
                .status(ObjectUtils.isEmpty(investorAccountEntity.getStatus()) ?
                        null : statusEntityToStatusOutDto(investorAccountEntity.getStatus()))
                .originType(ObjectUtils.isEmpty(investorAccountEntity.getOriginType()) ?
                        null : typeEntityToTypeOutDto(investorAccountEntity.getOriginType()))
                .type(ObjectUtils.isEmpty(investorAccountEntity.getType()) ?
                        null : typeEntityToTypeOutDto(investorAccountEntity.getType()))
                .depository(ObjectUtils.isEmpty(investorAccountEntity.getDepository()) ?
                        null : depositoryEntityToDepositoryOutDto(investorAccountEntity.getDepository()))
                .participant(ObjectUtils.isEmpty(investorAccountEntity.getParticipant()) ?
                        null : participantEntityToParticipantOutDto(investorAccountEntity.getParticipant()))
                .build();
    }

    public static DepositoryOutDto depositoryEntityToDepositoryOutDto(DepositoryEntity depositoryEntity) {
        if (ObjectUtils.isEmpty(depositoryEntity)) return null;
        return DepositoryOutDto.builder()
                .id(depositoryEntity.getId())
                .description(depositoryEntity.getDescription())
                .build();
    }


    public static TradingSystemOutDto tradingSystemEntityToTradingSystemOutDto(TradingSystemEntity tradingSystemEntity) {
        return TradingSystemOutDto.builder()
                .id(tradingSystemEntity.getId())
                .description(tradingSystemEntity.getDescription())
                .build();
    }

    public static StatusOutDto statusEntityToStatusOutDto(StatusEntity statusEntity) {
        if (ObjectUtils.isEmpty(statusEntity)) return null;
        return StatusOutDto.builder()
                .id(statusEntity.getId())
                .description(statusEntity.getDescription())
                .category(statusEntity.getCategory())
                .detail(statusEntity.getDetail())
                .build();
    }

    public static ParticipantOutDto participantEntityToParticipantOutDto(ParticipantEntity participantEntity) {
        if (ObjectUtils.isEmpty(participantEntity)) return null;
        return ParticipantOutDto.builder()
                .id(participantEntity.getId())
                .code(participantEntity.getCode())
                .code(participantEntity.getCode())
                .name(participantEntity.getName())
                .mnemonic(participantEntity.getMnemonic())
                .build();
    }

    public static BankAccountOutDto bankAccountEntityToBankAccountOutDto(BankAccountEntity bankAccountEntity) {
        if (ObjectUtils.isEmpty(bankAccountEntity)) return null;
        return BankAccountOutDto.builder()
                .id(bankAccountEntity.getId())
                .bankAccount(bankAccountEntity.getBankAccount())
                .bank(bankEntityToBankOutDto(bankAccountEntity.getBank()))
                .build();
    }

    public static BankOutDto bankEntityToBankOutDto(BankEntity bankEntity) {
        return BankOutDto.builder()
                .id(bankEntity.getId())
                .name(bankEntity.getName())
                .code(bankEntity.getCode())
                .build();
    }

    public static TypeOutDto typeEntityToTypeOutDto(TypeEntity typeEntity) {
        if (ObjectUtils.isEmpty(typeEntity)) return null;
        return TypeOutDto.builder()
                .id(typeEntity.getId())
                .description(typeEntity.getDescription())
                .build();
    }

    public static FicAdministratorOutDto ficAdministratorEntityToFicAdministratorOutDto(FicAdministratorEntity ficAdministratorEntity) {
        return FicAdministratorOutDto.builder()
                .id(ficAdministratorEntity.getId())
                .code(ficAdministratorEntity.getCode())
                .build();
    }

    public static SettlementOutDto settlementPendingEntityToSettlementOutDto(SettlementPendingEntity settlementPendingEntity) {
        return SettlementOutDto.builder()
                .tradeId(settlementPendingEntity.getTrade().getId())
                .fraction(settlementPendingEntity.getFraction())
                .side(ObjectUtils.isEmpty(settlementPendingEntity.getSide()) ?
                        null : sideEntityToSideOutDto(settlementPendingEntity.getSide()))
                .investor(ObjectUtils.isEmpty(settlementPendingEntity.getInvestor()) ?
                        null : investorEntityToInvestorOutDto(settlementPendingEntity.getInvestor()))
                .investorAccount(ObjectUtils.isEmpty(settlementPendingEntity.getInvestorAccount()) ?
                        null : investorAccountEntityToInvestorAccountOutDto(settlementPendingEntity.getInvestorAccount()))
                .participantAccount(ObjectUtils.isEmpty(settlementPendingEntity.getParticipantAccount()) ?
                        null : participantAccountEntityToParticipantAccountOutDto(settlementPendingEntity.getParticipantAccount()))
                .fractionQuantity(settlementPendingEntity.getFractionQuantity())
                .fractionVolume(settlementPendingEntity.getFractionVolume())
                .fractionVolumeLocalPrice(settlementPendingEntity.getFractionVolumeLocalPrice())
                .fiduciarySpecialist(settlementPendingEntity.getFiduciarySpecialist())
                .commissionPercentage(settlementPendingEntity.getCommissionPercentage())
                .commissionAmount(settlementPendingEntity.getCommissionAmount())
                .valTax(settlementPendingEntity.getValTax())
                .valTaxAmount(settlementPendingEntity.getValTaxAmount())
                .withholdingTax(settlementPendingEntity.getWithholdingTax())
                .withholdingTaxAmount(settlementPendingEntity.getWithholdingTaxAmount())
                .netAmount(settlementPendingEntity.getNetAmount())
                .transferValue(settlementPendingEntity.getTransferValue())
                .issuedReceipt(settlementPendingEntity.getIssuedReceipt())
                .issuedReceiptNumber(settlementPendingEntity.getIssuedReceiptNumber())
                .referenceAllocId(settlementPendingEntity.getReferenceAllocId())
                .repoAmount(settlementPendingEntity.getRepoAmount())
                .fundingAmount(settlementPendingEntity.getFundingAmount())
                .netOutFlowTotal(settlementPendingEntity.getNetOutFlowTotal())
                .outFlowTurnoverValue(settlementPendingEntity.getOutFlowTurnoverValue())
                .returnTurnoverValue(settlementPendingEntity.getReturnTurnoverValue())
                .deliveryVersusPaymentValue(settlementPendingEntity.getDeliveryVersusPaymentValue())
                .tradingSystem(ObjectUtils.isEmpty(settlementPendingEntity.getTradingSystem()) ?
                        null : tradingSystemEntityToTradingSystemOutDto(settlementPendingEntity.getTradingSystem()))
                .status(ObjectUtils.isEmpty(settlementPendingEntity.getStatus()) ?
                        null : statusEntityToStatusOutDto(settlementPendingEntity.getStatus()))
                .brokerageService(settlementPendingEntity.getBrokerageService())
                .custodian(ObjectUtils.isEmpty(settlementPendingEntity.getCustodian()) ?
                        null : participantEntityToParticipantOutDto(settlementPendingEntity.getCustodian()))
                .bankAccount(ObjectUtils.isEmpty(settlementPendingEntity.getBankAccount()) ?
                        null : bankAccountEntityToBankAccountOutDto(settlementPendingEntity.getBankAccount()))
                .reference(settlementPendingEntity.getReference())
                .sourceQuoteType(ObjectUtils.isEmpty(settlementPendingEntity.getSourceQuoteType()) ?
                        null : typeEntityToTypeOutDto(settlementPendingEntity.getSourceQuoteType()))
                .disbursementValue(settlementPendingEntity.getDisbursementValue())
                .ficAdministrator(ObjectUtils.isEmpty(settlementPendingEntity.getFicAdministrator()) ?
                        null : ficAdministratorEntityToFicAdministratorOutDto(settlementPendingEntity.getFicAdministrator()))
                .bloquingStatus(ObjectUtils.isEmpty(settlementPendingEntity.getBloquingStatus()) ?
                        null : statusEntityToStatusOutDto(settlementPendingEntity.getBloquingStatus()))
                .build();
    }

    public static FractionOutDto settlementEntityToFractionOutDto(SettlementEntity settlementEntity) {
        if (ObjectUtils.isEmpty(settlementEntity)) return null;
        return FractionOutDto.builder()
                .tradeId(settlementEntity.getTrade().getId())
                .fraction(settlementEntity.getFraction())
                .sideId(settlementEntity.getSide().getId())
                .statusId(settlementEntity.getStatus().getId())
                .investorAccountId(ObjectUtils.isEmpty(settlementEntity.getInvestorAccount()) ?
                        null : settlementEntity.getInvestorAccount().getId())
                .participantAccountId(ObjectUtils.isEmpty(settlementEntity.getParticipantAccount()) ?
                        null : settlementEntity.getParticipantAccount().getId())
                .fiduciarySpecialist(settlementEntity.getFiduciarySpecialist())
                .directDepositorId(ObjectUtils.isEmpty(settlementEntity.getDirectDepositor()) ?
                        null : settlementEntity.getDirectDepositor().getId())
                .bankAccountId(ObjectUtils.isEmpty(settlementEntity.getBankAccount()) ?
                        null : settlementEntity.getBankAccount().getId())
                .sourceQuoteTypeId(ObjectUtils.isEmpty(settlementEntity.getSourceQuoteType()) ?
                        null : settlementEntity.getSourceQuoteType().getId())
                .fractionQuantity(settlementEntity.getFractionQuantity())
                .reference(settlementEntity.getReference())
                .commissionPercentage(settlementEntity.getCommissionPercentage())
                .valTax(settlementEntity.getValTax())
                .tradingSystemId(ObjectUtils.isEmpty(settlementEntity.getTradingSystem()) ?
                        null : settlementEntity.getTradingSystem().getId())
                .fractionVolume(settlementEntity.getFractionVolume())
                .fractionVolumeLocalPrice(settlementEntity.getFractionVolumeLocalPrice())
                .commissionAmount(settlementEntity.getCommissionAmount())
                .valTaxAmount(settlementEntity.getValTaxAmount())
                .netAmount(settlementEntity.getNetAmount())
                .settlementAmount(settlementEntity.getSettlementAmount())
                .build();
    }

    public static FractionOutDto settlementPendingEntityToFractionOutDto(SettlementPendingEntity settlementPendingEntity) {
        if (ObjectUtils.isEmpty(settlementPendingEntity)) return null;
        return FractionOutDto.builder()
                .tradeId(settlementPendingEntity.getTrade().getId())
                .fraction(settlementPendingEntity.getFraction())
                .sideId(settlementPendingEntity.getSide().getId())
                .statusId(settlementPendingEntity.getStatus().getId())
                .investorAccountId(ObjectUtils.isEmpty(settlementPendingEntity.getInvestorAccount()) ?
                        null : settlementPendingEntity.getInvestorAccount().getId())
                .participantAccountId(ObjectUtils.isEmpty(settlementPendingEntity.getParticipantAccount()) ?
                        null : settlementPendingEntity.getParticipantAccount().getId())
                .fiduciarySpecialist(settlementPendingEntity.getFiduciarySpecialist())
                .directDepositorId(ObjectUtils.isEmpty(settlementPendingEntity.getDirectDepositor()) ?
                        null : settlementPendingEntity.getDirectDepositor().getId())
                .bankAccountId(ObjectUtils.isEmpty(settlementPendingEntity.getBankAccount()) ?
                        null : settlementPendingEntity.getBankAccount().getId())
                .sourceQuoteTypeId(ObjectUtils.isEmpty(settlementPendingEntity.getSourceQuoteType()) ?
                        null : settlementPendingEntity.getSourceQuoteType().getId())
                .fractionQuantity(settlementPendingEntity.getFractionQuantity())
                .reference(settlementPendingEntity.getReference())
                .commissionPercentage(settlementPendingEntity.getCommissionPercentage())
                .valTax(settlementPendingEntity.getValTax())
                .tradingSystemId(ObjectUtils.isEmpty(settlementPendingEntity.getTradingSystem()) ?
                        null : settlementPendingEntity.getTradingSystem().getId())
                .fractionVolume(settlementPendingEntity.getFractionVolume())
                .fractionVolumeLocalPrice(settlementPendingEntity.getFractionVolumeLocalPrice())
                .commissionAmount(settlementPendingEntity.getCommissionAmount())
                .valTaxAmount(settlementPendingEntity.getValTaxAmount())
                .netAmount(settlementPendingEntity.getNetAmount())
                .settlementAmount(settlementPendingEntity.getSettlementAmount())
                .build();
    }

    public static ProducerKafkaTransformerInDto settlementsToProducerKafkaTransformerInDto(List<SettlementOutDto> settlementOutDtos) {
        List<ProducerKafkaSettlementInDto> producerKafkaSettlementInDtoList = settlementOutDtos.stream()
                .map(settlement -> {
                    ProducerKafkaSettlementInDto producerList = new ProducerKafkaSettlementInDto();
                    producerList.setTradeId(settlement.getTradeId());
                    producerList.setFraction(settlement.getFraction());
                    producerList.setSideId(settlement.getSide().getId());
                    return producerList;
                })
                .toList();

        return ProducerKafkaTransformerInDto.builder()
                .settlementValid(producerKafkaSettlementInDtoList).build();
    }

}

```

## src/main/java/com/nubo/operations/special/fractionation/api/models/dto/request/AssignmentInDto.java

```java
package com.nubo.operations.special.fractionation.api.models.dto.request;

import com.nubo.operations.special.fractionation.api.application.annotations.ValidBigDecimal;
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

    @Min(value = 1)
    private Long bankAccountId;

    @Min(value = 1)
    private Long participantBankAccountId;

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

## src/main/java/com/nubo/operations/special/fractionation/api/models/dto/request/AssignmentSpecialSettlementInDto.java

```java
package com.nubo.operations.special.fractionation.api.models.dto.request;

import com.nubo.operations.special.fractionation.api.application.annotations.ValidBigDecimal;
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
public class AssignmentSpecialSettlementInDto {

    @NotNull
    private Integer fraction;

    @NotNull
    @Min(value = 1)
    private Long investorAccountId;

    @NotNull
    @Min(value = 1)
    private Long bankAccountId;

    @NotNull
    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal fractionPercentage;

    @NotNull
    @ValidBigDecimal(precision = 6, scale = 4)
    private BigDecimal commissionPercentage;

}

```

## src/main/java/com/nubo/operations/special/fractionation/api/models/dto/request/FractionSpecialSettlementInDto.java

```java
package com.nubo.operations.special.fractionation.api.models.dto.request;

import com.nubo.operations.special.fractionation.api.application.annotations.ValidBigDecimal;
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
public class FractionSpecialSettlementInDto {

    @NotNull
    @Min(value = 1)
    private Long investorAccountId;

    @NotNull
    @Min(value = 1)
    private Long bankAccountId;

    @NotNull
    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal fractionPercentage;

    @NotNull
    @ValidBigDecimal(precision = 6, scale = 4)
    private BigDecimal commissionPercentage;

}

```

## src/main/java/com/nubo/operations/special/fractionation/api/models/dto/request/FractionationInDto.java

```java
package com.nubo.operations.special.fractionation.api.models.dto.request;

import com.nubo.operations.special.fractionation.api.application.annotations.ValidBigDecimal;
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
public class FractionationInDto {

    @Min(value = 1)
    private Long investorAccountId;

    @Min(value = 1)
    private Long participantAccountId;

    @NotNull
    @Min(value = 1)
    private Long directDepositorId;

    private Long bankAccountId;

    @Min(value = 1)
    private Long participantBankAccountId;

    @NotNull
    private Boolean fiduciarySpecialist;

    @Min(value = 1)
    private Long sourceQuoteTypeId;

    private String reference;

    @NotNull
    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal fractionQuantity;

    @NotNull
    @ValidBigDecimal(precision = 6, scale = 4)
    private BigDecimal commissionPercentage;

}

```

## src/main/java/com/nubo/operations/special/fractionation/api/models/dto/request/FractionationPendingInDto.java

```java
package com.nubo.operations.special.fractionation.api.models.dto.request;

import com.nubo.operations.special.fractionation.api.application.annotations.ValidBigDecimal;
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
public class FractionationPendingInDto {

    @Min(value = 1)
    private Long investorAccountId;

    @Min(value = 1)
    private Long participantAccountId;

    @NotNull
    @Min(value = 1)
    private Long directDepositorId;

    @Min(value = 1)
    private Long bankAccountId;

    @Min(value = 1)
    private Long participantBankAccountId;

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

## src/main/java/com/nubo/operations/special/fractionation/api/models/dto/response/BankAccountOutDto.java

```java
package com.nubo.operations.special.fractionation.api.models.dto.response;

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

    private BankOutDto bank;

    private String bankAccount;

    private Boolean savingAccount;

}

```

## src/main/java/com/nubo/operations/special/fractionation/api/models/dto/response/BankOutDto.java

```java
package com.nubo.operations.special.fractionation.api.models.dto.response;

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

}

```

## src/main/java/com/nubo/operations/special/fractionation/api/models/dto/response/CityOutDto.java

```java
package com.nubo.operations.special.fractionation.api.models.dto.response;

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

## src/main/java/com/nubo/operations/special/fractionation/api/models/dto/response/CountryOutDto.java

```java
package com.nubo.operations.special.fractionation.api.models.dto.response;

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

## src/main/java/com/nubo/operations/special/fractionation/api/models/dto/response/CurrencyOutDto.java

```java
package com.nubo.operations.special.fractionation.api.models.dto.response;

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

## src/main/java/com/nubo/operations/special/fractionation/api/models/dto/response/DepartmentOutDto.java

```java
package com.nubo.operations.special.fractionation.api.models.dto.response;

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

## src/main/java/com/nubo/operations/special/fractionation/api/models/dto/response/DepositoryOutDto.java

```java
package com.nubo.operations.special.fractionation.api.models.dto.response;

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

## src/main/java/com/nubo/operations/special/fractionation/api/models/dto/response/FicAdministratorOutDto.java

```java
package com.nubo.operations.special.fractionation.api.models.dto.response;

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
public class FicAdministratorOutDto {

    private Long id;

    private String code;

}

```

## src/main/java/com/nubo/operations/special/fractionation/api/models/dto/response/FractionOutDto.java

```java
package com.nubo.operations.special.fractionation.api.models.dto.response;

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
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class FractionOutDto {

    private Long tradeId;

    private Integer fraction;

    private String sideId;

    private Long statusId;

    private Long investorAccountId;

    private Long participantAccountId;

    private Boolean fiduciarySpecialist;

    private Long directDepositorId;

    private Long bankAccountId;

    private Long sourceQuoteTypeId;

    private Long tradingSystemId;

    private BigDecimal fractionQuantity;

    private String reference;

    private BigDecimal commissionPercentage;

    private BigDecimal valTax;

    private BigDecimal fractionVolume;

    private BigDecimal fractionVolumeLocalPrice;

    private BigDecimal commissionAmount;

    private BigDecimal valTaxAmount;

    private BigDecimal netAmount;

    private BigDecimal settlementAmount;

}

```

## src/main/java/com/nubo/operations/special/fractionation/api/models/dto/response/GicsOutDto.java

```java
package com.nubo.operations.special.fractionation.api.models.dto.response;

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

## src/main/java/com/nubo/operations/special/fractionation/api/models/dto/response/IdentificationTypeOutDto.java

```java
package com.nubo.operations.special.fractionation.api.models.dto.response;

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

## src/main/java/com/nubo/operations/special/fractionation/api/models/dto/response/InvestorAccountOutDto.java

```java
package com.nubo.operations.special.fractionation.api.models.dto.response;

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

    private Boolean fiduciarySpecialist;

}
```

## src/main/java/com/nubo/operations/special/fractionation/api/models/dto/response/InvestorOutDto.java

```java
package com.nubo.operations.special.fractionation.api.models.dto.response;

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

    private Integer gicsId;

    private String moneyLaunderingFlag;

    private Integer taxStatusId;

}

```

## src/main/java/com/nubo/operations/special/fractionation/api/models/dto/response/PageResponseOutDto.java

```java
package com.nubo.operations.special.fractionation.api.models.dto.response;

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
}

```

## src/main/java/com/nubo/operations/special/fractionation/api/models/dto/response/ParticipantAccountOutDto.java

```java
package com.nubo.operations.special.fractionation.api.models.dto.response;

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

    private Long participantId;

    private String accountNumber;

    private StatusOutDto status;

    private TypeOutDto type;

}

```

## src/main/java/com/nubo/operations/special/fractionation/api/models/dto/response/ParticipantOutDto.java

```java
package com.nubo.operations.special.fractionation.api.models.dto.response;

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

    private String taxStatus;

    private String typeEntity;

    private String marginAccount;

    private String directAllocation;

    private String marketMaker;

    private Boolean enabled;

    private String masterAccount;

}

```

## src/main/java/com/nubo/operations/special/fractionation/api/models/dto/response/SettlementOutDto.java

```java
package com.nubo.operations.special.fractionation.api.models.dto.response;

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

    private BigDecimal fractionVolumeLocalPrice;

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

    private ParticipantOutDto custodian;

    private BankAccountOutDto bankAccount;

    private String reference;

    private TypeOutDto sourceQuoteType;

    private BigDecimal disbursementValue;

    private FicAdministratorOutDto ficAdministrator;

    private StatusOutDto bloquingStatus;

    private BigDecimal fractionVolumeDvd;

    private BigDecimal fractionVolumeDvp;

    private BigDecimal fractionVolumeLp;

}

```

## src/main/java/com/nubo/operations/special/fractionation/api/models/dto/response/SettlementPendingOutDto.java

```java
package com.nubo.operations.special.fractionation.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.Map;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.ALWAYS)
public class SettlementPendingOutDto {
    private Long tradeId;

    private Integer fraction;

    private SideOutDto side;

    private InvestorOutDto investor;

    private InvestorAccountOutDto investorAccount;

    private ParticipantAccountOutDto participantAccount;

    private BigDecimal fractionQuantity;

    private BigDecimal fractionVolume;

    private BigDecimal fractionVolumeLocalPrice;

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

    private ParticipantOutDto custodian;

    private BankAccountOutDto bankAccount;

    private String reference;

    private TypeOutDto sourceQuoteType;

    private BigDecimal disbursementValue;

    private FicAdministratorOutDto ficAdministrator;

    private StatusOutDto bloquingStatus;
}

```

## src/main/java/com/nubo/operations/special/fractionation/api/models/dto/response/SideOutDto.java

```java
package com.nubo.operations.special.fractionation.api.models.dto.response;

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

## src/main/java/com/nubo/operations/special/fractionation/api/models/dto/response/SpecialSettlementOutDto.java

```java
package com.nubo.operations.special.fractionation.api.models.dto.response;

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
public class SpecialSettlementOutDto {

    private SpecialTradeOutDto specialTrade;

    private Integer fraction;

    private SideOutDto side;

    private InvestorOutDto investor;

    private InvestorAccountOutDto investorAccount;

    private BankAccountOutDto bankAccount;

    private BigDecimal commissionPercentage;

    private BigDecimal fractionPercentage;

}


```

## src/main/java/com/nubo/operations/special/fractionation/api/models/dto/response/SpecialTradeOutDto.java

```java
package com.nubo.operations.special.fractionation.api.models.dto.response;

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

    private Long directDepositorId;

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

    private DepositoryOutDto depository;

    private SideOutDto side;

    private StatusOutDto status;

    private ParticipantOutDto participant;

    private ParticipantOutDto directDepositor;

    private DepositoryOutDto clientSettlementAgent;

    private BigDecimal localCurrencyPrice;

}


```

## src/main/java/com/nubo/operations/special/fractionation/api/models/dto/response/StatusOutDto.java

```java
package com.nubo.operations.special.fractionation.api.models.dto.response;

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

## src/main/java/com/nubo/operations/special/fractionation/api/models/dto/response/TaxStatusOutDto.java

```java
package com.nubo.operations.special.fractionation.api.models.dto.response;

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

## src/main/java/com/nubo/operations/special/fractionation/api/models/dto/response/TradingSystemOutDto.java

```java
package com.nubo.operations.special.fractionation.api.models.dto.response;

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

## src/main/java/com/nubo/operations/special/fractionation/api/models/dto/response/TypeOutDto.java

```java
package com.nubo.operations.special.fractionation.api.models.dto.response;

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

## src/main/java/com/nubo/operations/special/fractionation/api/models/dto/response/ValidationSettlementOutDto.java

```java
package com.nubo.operations.special.fractionation.api.models.dto.response;

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
public class ValidationSettlementOutDto {

    private Integer fraction;

    private Boolean fractionUpdated;

    private String identificationType;

    private Boolean identificationTypeUpdated;

    private String documentNumber;

    private Boolean documentNumberUpdated;

    private String investorName;

    private Boolean investorNameUpdated;

    private String investorAccount;

    private Boolean investorAccountUpdated;

    private Boolean fiduciarySpecialist;

    private Boolean fiduciarySpecialistUpdated;

    private String bankAccount;

    private Boolean bankAccountUpdated;

    private String bankName;

    private Boolean bankNameUpdated;

    private String directDepositorOutDto;

    private Boolean directDepositorOutDtoUpdated;

    private String reference;

    private Boolean referenceUpdated;

    private String sourceQuoteType;

    private Boolean sourceQuoteTypeUpdated;

    private BigDecimal commissionPercentage;

    private Boolean commissionPercentageUpdated;

    private BigDecimal fractionQuantity;

    private Boolean fractionQuantityUpdated;

    private BigDecimal commissionAmount;

    private Boolean commissionAmountUpdate;

    private BigDecimal valTaxAmount;

    private Boolean valTaxAmountUpdated;

    private BigDecimal netAmount;

    private Boolean netAmountUpdated;

    private Long custodianId;

    private Boolean custodianIdUpdated;

    private String custodianName;

    private Boolean custodianNameUpdated;

    private Long ficAdministrator;

    private Boolean ficAdministratorUpdated;

    private String bloquingStatus;

    private Boolean bloquingStatusUpdated;

}

```

## src/main/java/com/nubo/operations/special/fractionation/api/models/entity/AfpFundEntity.java

```java
package com.nubo.operations.special.fractionation.api.models.entity;

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
}

```

## src/main/java/com/nubo/operations/special/fractionation/api/models/entity/BankAccountEntity.java

```java
package com.nubo.operations.special.fractionation.api.models.entity;

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
}

```

## src/main/java/com/nubo/operations/special/fractionation/api/models/entity/BankEntity.java

```java
package com.nubo.operations.special.fractionation.api.models.entity;

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

## src/main/java/com/nubo/operations/special/fractionation/api/models/entity/CfiEntity.java

```java
package com.nubo.operations.special.fractionation.api.models.entity;

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

## src/main/java/com/nubo/operations/special/fractionation/api/models/entity/CityEntity.java

```java
package com.nubo.operations.special.fractionation.api.models.entity;

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

## src/main/java/com/nubo/operations/special/fractionation/api/models/entity/ClassEntity.java

```java
package com.nubo.operations.special.fractionation.api.models.entity;

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
@Table(name = "\"CLASS\"", schema = "\"NUANBODB\"")
public class ClassEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"CLASS_ID\"")
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

## src/main/java/com/nubo/operations/special/fractionation/api/models/entity/CountryEntity.java

```java
package com.nubo.operations.special.fractionation.api.models.entity;

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

## src/main/java/com/nubo/operations/special/fractionation/api/models/entity/CurrencyEntity.java

```java
package com.nubo.operations.special.fractionation.api.models.entity;

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
    @Column(name = "\"CURRENCY_ID\"")
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

## src/main/java/com/nubo/operations/special/fractionation/api/models/entity/DepartmentEntity.java

```java
package com.nubo.operations.special.fractionation.api.models.entity;

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

## src/main/java/com/nubo/operations/special/fractionation/api/models/entity/DepositoryEntity.java

```java
package com.nubo.operations.special.fractionation.api.models.entity;

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

## src/main/java/com/nubo/operations/special/fractionation/api/models/entity/ExchangeRateEntity.java

```java
package com.nubo.operations.special.fractionation.api.models.entity;

import jakarta.persistence.*;
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
}

```

## src/main/java/com/nubo/operations/special/fractionation/api/models/entity/FicAdministratorEntity.java

```java
package com.nubo.operations.special.fractionation.api.models.entity;

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
@Table(name = "\"FIC_ADMINISTRATOR\"", schema = "\"NUANBODB\"")
public class FicAdministratorEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"FIC_ADMINISTRATOR_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"FIC_ADMINISTRATOR_CODE\"", length = 80)
    private String code;

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

## src/main/java/com/nubo/operations/special/fractionation/api/models/entity/GicsEntity.java

```java
package com.nubo.operations.special.fractionation.api.models.entity;

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

## src/main/java/com/nubo/operations/special/fractionation/api/models/entity/IdentificationTypeEntity.java

```java
package com.nubo.operations.special.fractionation.api.models.entity;

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

## src/main/java/com/nubo/operations/special/fractionation/api/models/entity/InvestorAccountEntity.java

```java
package com.nubo.operations.special.fractionation.api.models.entity;

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
    @JoinColumn(name = "\"ORIGIN_TYPE_ID\"", nullable = false)
    private TypeEntity originType;

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
}

```

## src/main/java/com/nubo/operations/special/fractionation/api/models/entity/InvestorEntity.java

```java
package com.nubo.operations.special.fractionation.api.models.entity;

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
    @JoinColumn(name = "\"TYPE_ID\"")
    private TypeEntity type;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"", nullable = false)
    private StatusEntity status;

    @ManyToOne
    @JoinColumn(name = "\"COUNTRY_ID\"", nullable = false)
    private CountryEntity country;

    @Column(name = "\"DEPARTMENT_ID\"", length = 6)
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

    @Column(name = "\"GICS_ID\"")
    private Integer gicsId;

    @Column(name = "\"MONEY_LAUNDERING_FLAG\"")
    private Boolean moneyLaunderingFlag;

    @Column(name = "\"TAX_STATUS_ID\"")
    private Integer taxStatusId;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 250, nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50, nullable = false)
    private String lastModifyIp;

    @Column(name = "\"TAX_EXEMP\"")
    private Boolean taxExemp;
}

```

## src/main/java/com/nubo/operations/special/fractionation/api/models/entity/IssuerEntity.java

```java
package com.nubo.operations.special.fractionation.api.models.entity;

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
@Table(name = "\"ISSUER\"", schema = "\"NUANBODB\"")
public class IssuerEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"ISSUER_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"CODE\"", length = 10)
    private String code;

    @Column(name = "\"NAME\"", length = 100)
    private String name;

    @Column(name = "\"SHORT_NAME\"", length = 50)
    private String shortName;

    @ManyToOne
    @JoinColumn(name = "\"TYPE_ID\"", nullable = false)
    private TypeEntity type;

    @ManyToOne
    @JoinColumn(name = "\"COUNTRY_ID\"", nullable = false)
    private CountryEntity country;

    @ManyToOne
    @JoinColumn(name = "\"GICS_ID\"", nullable = false)
    private GicsEntity gics;

    @Column(name = "\"DATE_ENTRY\"")
    private LocalDate dateEntry;

    @ManyToOne
    @JoinColumn(name = "\"COUNTRY_ORIGIN\"", nullable = false)
    private CountryEntity countryOrigin;

    @Column(name = "\"CUSIP\"", length = 15)
    private String cusip;

    @Column(name = "\"TAX_CODE\"", length = 20)
    private String taxCode;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"", nullable = false)
    private StatusEntity status;

    @Column(name = "\"WITHDRAWAL_DATE\"")
    private LocalDate withdrawalDate;

    @Column(name = "\"MAIN_MARKET\"", length = 20)
    private String mainMarket;

    @Column(name = "\"REGULATOR_CODE\"", length = 20)
    private String regulatorCode;

    @ManyToOne
    @JoinColumn(name = "\"DEPOSITORY_ID\"", nullable = false)
    private DepositoryEntity depository;

    @Column(name = "\"DVL_CODE\"", length = 5)
    private String dvlCode;

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

## src/main/java/com/nubo/operations/special/fractionation/api/models/entity/MarketEntity.java

```java
package com.nubo.operations.special.fractionation.api.models.entity;

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
}

```

## src/main/java/com/nubo/operations/special/fractionation/api/models/entity/ParticipantAccountEntity.java

```java
package com.nubo.operations.special.fractionation.api.models.entity;

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

## src/main/java/com/nubo/operations/special/fractionation/api/models/entity/ParticipantBankAccountEntity.java

```java
package com.nubo.operations.special.fractionation.api.models.entity;

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
    @JoinColumn(name = "\"BANK_ID\"")
    private BankEntity bank;

    @ManyToOne
    @JoinColumn(name = "\"PARTICIPANT_ID\"")
    private ParticipantEntity participant;

    @Column(name = "\"BANK_ACCOUNT\"", length = 30)
    private String bankAccount;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 36)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 30)
    private String lastModifyApplic;

    @Column(name = "\"LAST_MODIFY_DATE\"")
    private LocalDate lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 30)
    private String lastModifyIp;
}

```

## src/main/java/com/nubo/operations/special/fractionation/api/models/entity/ParticipantEntity.java

```java
package com.nubo.operations.special.fractionation.api.models.entity;

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

    @Column(name = "\"DOCUMENT_NUMBER\"", length = 20, nullable = false)
    private String documentNumber;

    @ManyToOne
    @JoinColumn(name = "\"IDENTIFICATION_TYPE_ID\"", nullable = false)
    private IdentificationTypeEntity identificationTypeEntity;

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

    @Column(name = "\"DEPARTMENT_ID\"")
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

}

```

## src/main/java/com/nubo/operations/special/fractionation/api/models/entity/SecurityTitleEntity.java

```java
package com.nubo.operations.special.fractionation.api.models.entity;

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

    @ManyToOne
    @JoinColumn(name = "\"ISSUER_ID\"", nullable = false)
    private IssuerEntity issuer;

    @Column(name = "\"COUNTRY_ID\"", nullable = false)
    private Integer countryId;

    @Column(name = "\"AMOUNT_ISSUED\"", precision = 20, nullable = false)
    private BigInteger amountIssued;

    @ManyToOne
    @JoinColumn(name = "\"CLASS_ID\"", nullable = false)
    private ClassEntity classId;

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

## src/main/java/com/nubo/operations/special/fractionation/api/models/entity/SettlementEntity.java

```java
package com.nubo.operations.special.fractionation.api.models.entity;

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

    @Column(name = "\"FRACTION_VOLUME_LOCAL_PRICE\"", precision = 16, scale = 4)
    private BigDecimal fractionVolumeLocalPrice;

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

    @ManyToOne
    @JoinColumn(name = "\"BANK_ACCOUNT_ID\"")
    private BankAccountEntity bankAccount;

    @ManyToOne
    @JoinColumn(name = "\"PARTICIPANT_BANK_ACCOUNT_ID\"")
    private ParticipantBankAccountEntity participantBankAccount;

    @Column(name = "\"REFERENCE\"", length = 255)
    private String reference;

    @ManyToOne
    @JoinColumn(name = "\"FIC_ADMINISTRATOR_ID\"")
    private FicAdministratorEntity ficAdministrator;

    @ManyToOne
    @JoinColumn(name = "\"SOURCE_QUOTE_TYPE_ID\"", nullable = false)
    private TypeEntity sourceQuoteType;

    @Column(name = "\"DISBURSEMENT_VALUE\"", precision = 18, scale = 2)
    private BigDecimal disbursementValue;

    @Column(name = "\"CAPITAL_GAIN_VALUE\"", precision = 16, scale = 4)
    private BigDecimal capitalGainValue;

    @ManyToOne
    @JoinColumn(name = "\"DIRECT_DEPOSITOR\"")
    private ParticipantEntity directDepositor;

    @Column(name = "\"FRACTION_VOLUME_DVD\"", precision = 16, scale = 4)
    private BigDecimal fractionVolumeDvd;

    @Column(name = "\"FRACTION_VOLUME_DVP\"", precision = 16, scale = 4)
    private BigDecimal fractionVolumeDvp;

    @Column(name = "\"FRACTION_VOLUME_LP\"", precision = 16, scale = 4)
    private BigDecimal fractionVolumeLp;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 30, nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 30, nullable = false)
    private String lastModifyIp;

    @ManyToOne
    @JoinColumn(name = "\"BLOQUING_STATUS_ID\"")
    private StatusEntity bloquingStatus;

}
```

## src/main/java/com/nubo/operations/special/fractionation/api/models/entity/SettlementKey.java

```java
package com.nubo.operations.special.fractionation.api.models.entity;

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

## src/main/java/com/nubo/operations/special/fractionation/api/models/entity/SettlementLogEntity.java

```java
package com.nubo.operations.special.fractionation.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
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
@Table(name = "\"SETTLEMENT_LOG\"", schema = "\"NUANBODB\"")
public class SettlementLogEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"SETTLEMENT_LOG_ID\"", nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "\"TRADE_ID\"", nullable = false)
    private TradeEntity trade;

    @Column(name = "\"FRACTION\"", nullable = false)
    private Integer fraction;

    @ManyToOne
    @JoinColumn(name = "\"SIDE_ID\"", nullable = false)
    private SideEntity side;

    @Column(name = "\"TIME\"", nullable = false)
    private LocalDateTime time;

    @Column(name = "\"DATA_BEFORE\"", columnDefinition = "TEXT")
    private String dataBefore;

    @Column(name = "\"DATA_AFTER\"", columnDefinition = "TEXT")
    private String dataAfter;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"")
    private StatusEntity status;

    @ManyToOne
    @JoinColumn(name = "\"USER_ASSIGNMENT\"")
    private UserNuboEntity userAssignment;

    @ManyToOne
    @JoinColumn(name = "\"USER_APPROVAL\"")
    private UserNuboEntity userApproval;

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

## src/main/java/com/nubo/operations/special/fractionation/api/models/entity/SettlementPendingEntity.java

```java
package com.nubo.operations.special.fractionation.api.models.entity;

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
@Table(name = "\"SETTLEMENT_PENDING\"", schema = "\"NUANBODB\"")
public class SettlementPendingEntity {
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

    @Column(name = "\"FRACTION_VOLUME_LOCAL_PRICE\"", precision = 16, scale = 4)
    private BigDecimal fractionVolumeLocalPrice;

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

    @ManyToOne
    @JoinColumn(name = "\"BANK_ACCOUNT_ID\"")
    private BankAccountEntity bankAccount;

    @ManyToOne
    @JoinColumn(name = "\"PARTICIPANT_BANK_ACCOUNT_ID\"")
    private ParticipantBankAccountEntity participantBankAccount;

    @Column(name = "\"REFERENCE\"", length = 255)
    private String reference;

    @ManyToOne
    @JoinColumn(name = "\"FIC_ADMINISTRATOR_ID\"")
    private FicAdministratorEntity ficAdministrator;

    @ManyToOne
    @JoinColumn(name = "\"SOURCE_QUOTE_TYPE_ID\"", nullable = false)
    private TypeEntity sourceQuoteType;

    @Column(name = "\"DISBURSEMENT_VALUE\"", precision = 18, scale = 2)
    private BigDecimal disbursementValue;

    @Column(name = "\"CAPITAL_GAIN_VALUE\"", precision = 16, scale = 4)
    private BigDecimal capitalGainValue;

    @ManyToOne
    @JoinColumn(name = "\"BLOQUING_STATUS_ID\"")
    private StatusEntity bloquingStatus;

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

## src/main/java/com/nubo/operations/special/fractionation/api/models/entity/SettlementPendingStatusHistoryEntity.java

```java
package com.nubo.operations.special.fractionation.api.models.entity;

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
@IdClass(SettlementPendingStatusHistoryKey.class)
@Table(name = "\"SETTLEMENT_PENDING_STATUS_HISTORY\"", schema = "\"NUANBODB\"")
public class SettlementPendingStatusHistoryEntity {

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

    @Id
    @Column(name = "\"TIME\"", nullable = false)
    private LocalDateTime time;

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

}

```

## src/main/java/com/nubo/operations/special/fractionation/api/models/entity/SettlementPendingStatusHistoryKey.java

```java
package com.nubo.operations.special.fractionation.api.models.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SettlementPendingStatusHistoryKey {

    private Long trade;

    private Integer fraction;

    private String side;

    private LocalDateTime time;

}

```

## src/main/java/com/nubo/operations/special/fractionation/api/models/entity/SettlementStatusHistoryEntity.java

```java
package com.nubo.operations.special.fractionation.api.models.entity;

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
    @JoinColumn(name = "\"SIDE_ID\"", nullable = false)
    private SideEntity side;

    @Id
    @Column(name = "\"TIME\"", nullable = false)
    private LocalDateTime time;

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

}
```

## src/main/java/com/nubo/operations/special/fractionation/api/models/entity/SettlementStatusHistoryKey.java

```java
package com.nubo.operations.special.fractionation.api.models.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SettlementStatusHistoryKey {

    private Long trade;

    private Integer fraction;

    private String side;

    private LocalDateTime time;

}
```

## src/main/java/com/nubo/operations/special/fractionation/api/models/entity/SideEntity.java

```java
package com.nubo.operations.special.fractionation.api.models.entity;

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

## src/main/java/com/nubo/operations/special/fractionation/api/models/entity/SpecialSettlementEntity.java

```java
package com.nubo.operations.special.fractionation.api.models.entity;

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

@Entity
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@IdClass(SpecialSettlementKey.class)
@Table(name = "\"SPECIAL_SETTLEMENT\"", schema = "\"NUANBODB\"")
public class SpecialSettlementEntity {

    @Id
    @ManyToOne
    @JoinColumn(name = "\"SPECIAL_TRADE_ID\"", nullable = false)
    private SpecialTradeEntity specialTrade;

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

    @Column(name = "\"FIDUCIARY_SPECIALIST\"", length = 10)
    private String fiduciarySpecialist;

    @Column(name = "\"COMMISSION_PERCENTAGE\"", precision = 6, scale = 4)
    private BigDecimal commissionPercentage;

    @Column(name = "\"FRACTION_PERCENTGE\"", precision = 16, scale = 4)
    private BigDecimal fractionPercentage;

    @ManyToOne
    @JoinColumn(name = "\"BANK_ACCOUNT_ID\"", nullable = false)
    private BankAccountEntity bankAccount;

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

## src/main/java/com/nubo/operations/special/fractionation/api/models/entity/SpecialSettlementKey.java

```java
package com.nubo.operations.special.fractionation.api.models.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SpecialSettlementKey implements Serializable {

    private Long specialTrade;

    private Integer fraction;

    private String side;

}
```

## src/main/java/com/nubo/operations/special/fractionation/api/models/entity/SpecialTradeEntity.java

```java
package com.nubo.operations.special.fractionation.api.models.entity;

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
@Table(name = "\"SPECIAL_TRADE\"", schema = "\"NUANBODB\"")
public class SpecialTradeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"SPECIAL_TRADE_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"RECORD_DATE\"")
    private LocalDate recordDate;

    @Column(name = "\"SPECIAL_OPERATION_ID\"", length = 18)
    private String specialOperationId;

    @Column(name = "\"SETTLEMENT_DATE\"")
    private LocalDate settlementDate;

    @Column(name = "\"DAYS_TO_SETTLEMENT\"")
    private Integer daysToSettlement;

    @Column(name = "\"SPECIAL_OPERATION_NAME\"", length = 80)
    private String specialOperationName;

    @ManyToOne
    @JoinColumn(name = "\"ISSUANCE_MARKET_ID\"", nullable = false)
    private MarketEntity issuanceMarket;

    @ManyToOne
    @JoinColumn(name = "\"COUNTRY_ID\"", nullable = false)
    private CountryEntity country;

    @ManyToOne
    @JoinColumn(name = "\"TYPE_ID\"", nullable = false)
    private TypeEntity type;

    @ManyToOne
    @JoinColumn(name = "\"SECURITY_ID\"", nullable = false)
    private SecurityTitleEntity securityTitle;

    @ManyToOne
    @JoinColumn(name = "\"DEPOSITORY_ID\"", nullable = false)
    private DepositoryEntity depository;

    @ManyToOne
    @JoinColumn(name = "\"SIDE_ID\"", nullable = false)
    private SideEntity side;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"", nullable = false)
    private StatusEntity status;

    @ManyToOne
    @JoinColumn(name = "\"DIRECT_DEPOSITOR\"")
    private ParticipantEntity directDepositor;

    @ManyToOne
    @JoinColumn(name = "\"CLIENT_SETTLEMENT_AGENT\"", nullable = false)
    private DepositoryEntity clientSettlementAgent;

    @ManyToOne
    @JoinColumn(name = "\"AFP_FUND_ID\"", nullable = false)
    private AfpFundEntity afpFund;

    @Column(name = "\"TOTAL_AMOUNT\"", precision = 16, scale = 4)
    private BigDecimal totalAmount;

    @Column(name = "\"TOTAL_AMOUNT_LOCAL\"", precision = 16, scale = 4)
    private BigDecimal totalAmountLocal;

    @ManyToOne
    @JoinColumn(name = "\"CURRENCY_ID\"", nullable = false)
    private CurrencyEntity currency;

    @ManyToOne
    @JoinColumn(name = "\"EXCHANGE_RATE_ID\"", nullable = false)
    private ExchangeRateEntity exchangeRate;

    @Column(name = "\"PRICE\"", precision = 12, scale = 6)
    private BigDecimal price;

    @Column(name = "\"LOCAL_CURRENCY_PRICE\"", precision = 12, scale = 6)
    private BigDecimal localCurrencyPrice;

    @Column(name = "\"QUANTITY\"", precision = 16, scale = 4)
    private BigDecimal quantity;

    @Column(name = "\"NUMBER_FOLIOS\"")
    private Integer numberFolios;

    @Column(name = "\"FRACTIONAL_MARK\"")
    private Boolean fractionalMark;

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

## src/main/java/com/nubo/operations/special/fractionation/api/models/entity/SpecialTradeStatusHistoryEntity.java

```java
package com.nubo.operations.special.fractionation.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
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
@IdClass(SpecialTradeStatusHistoryKey.class)
@Table(name = "\"SPECIAL_TRADE_STATUS_HISTORY\"", schema = "\"NUANBODB\"")
public class SpecialTradeStatusHistoryEntity {

    @Id
    @Column(name = "\"SPECIAL_TRADE_ID\"", nullable = false)
    private Long specialTradeId;

    @Id
    @Column(name = "\"TIME\"", nullable = false)
    private LocalDateTime time;

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

}

```

## src/main/java/com/nubo/operations/special/fractionation/api/models/entity/SpecialTradeStatusHistoryKey.java

```java
package com.nubo.operations.special.fractionation.api.models.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SpecialTradeStatusHistoryKey implements Serializable {

    private Long specialTradeId;

    private LocalDateTime time;

}

```

## src/main/java/com/nubo/operations/special/fractionation/api/models/entity/StatusEntity.java

```java
package com.nubo.operations.special.fractionation.api.models.entity;

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
    private Long id;

    @Column(name = "\"DESCRIPTION\"", length = 80)
    private String description;

    @Column(name = "\"CATEGORY\"", length = 30)
    private String category;

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
}
```

## src/main/java/com/nubo/operations/special/fractionation/api/models/entity/TaxStatusEntity.java

```java
package com.nubo.operations.special.fractionation.api.models.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

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
}

```

## src/main/java/com/nubo/operations/special/fractionation/api/models/entity/TaxesEntity.java

```java
package com.nubo.operations.special.fractionation.api.models.entity;

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

    @Column(name = "\"CODE\"", length = 50)
    private String code;

    @Column(name = "\"DESCRIPTION\"", length = 250)
    private String description;

    @Column(name = "\"VALUE\"", precision = 16, scale = 4)
    private BigDecimal value;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 36)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 30)
    private String lastModifyApplic;

    @Column(name = "\"LAST_MODIFY_DATE\"")
    private java.time.LocalDate lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 30)
    private String lastModifyIp;
}

```

## src/main/java/com/nubo/operations/special/fractionation/api/models/entity/TradeEntity.java

```java
package com.nubo.operations.special.fractionation.api.models.entity;

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
    @JoinColumn(name = "\"MARKET_ID\"", nullable = false)
    private MarketEntity market;

    @ManyToOne
    @JoinColumn(name = "\"ISSUANCE_MARKET_ID\"", nullable = false)
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

    @Column(name = "\"CUSTODIAN_ID_BUY\"")
    private Long custodianIdBuy;

    @Column(name = "\"CUSTODIAN_ID_SELL\"")
    private Long custodianIdSell;

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

    @Column(name = "\"CANCELED_STATUS\"", nullable = false)
    private Boolean canceledStatus;

    @Column(name = "\"QUANTITY\"", precision = 16, scale = 4, nullable = false)
    private BigDecimal quantity;

    @Column(name = "\"PRICE\"", precision = 16, scale = 6, nullable = false)
    private BigDecimal price;

    @Column(name = "\"LOCAL_CURRENCY_PRICE\"", precision = 16, scale = 6, nullable = false)
    private BigDecimal localCurrencyPrice;

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

    @ManyToOne
    @JoinColumn(name = "\"SPECIAL_TRADE_ID\"")
    private SpecialTradeEntity specialTrade;

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
    private Integer salesGuarantee;

    @Column(name = "\"PURCHASE_GUARANTEE\"")
    private Integer purchaseGuarantee;

    @Column(name = "\"PURCHASE_PAYMENT_INDICATOR\"")
    private Boolean purchasePaymentIndicator;

    @Column(name = "\"VOLUME_DVP\"", precision = 16, scale = 4)
    private BigDecimal volumeDvp;

    @Column(name = "\"VOLUME_LP\"", precision = 16, scale = 4)
    private BigDecimal volumeLp;

    @Column(name = "\"VOLUME_DVD\"", precision = 16, scale = 4)
    private BigDecimal volumeDvd;

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

## src/main/java/com/nubo/operations/special/fractionation/api/models/entity/TradingSessionEntity.java

```java
package com.nubo.operations.special.fractionation.api.models.entity;

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

}

```

## src/main/java/com/nubo/operations/special/fractionation/api/models/entity/TradingSystemEntity.java

```java
package com.nubo.operations.special.fractionation.api.models.entity;

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

}

```

## src/main/java/com/nubo/operations/special/fractionation/api/models/entity/TypeEntity.java

```java
package com.nubo.operations.special.fractionation.api.models.entity;

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

## src/main/java/com/nubo/operations/special/fractionation/api/models/entity/UserNuboEntity.java

```java
package com.nubo.operations.special.fractionation.api.models.entity;

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

    @Column(name = "\"PREVIOUS_SESSION\"")
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

## src/main/java/com/nubo/operations/special/fractionation/api/models/enums/OperationIndicatorEnum.java

```java
package com.nubo.operations.special.fractionation.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum OperationIndicatorEnum {

    SPECIAL_OPERATION_CORRECTION(1);

    private final Integer value;
}

```

## src/main/java/com/nubo/operations/special/fractionation/api/models/enums/OperationSpecialBusinessRulesEnum.java

```java
package com.nubo.operations.special.fractionation.api.models.enums;

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
public enum OperationSpecialBusinessRulesEnum {

    RULE_OPERATION_SPECIAL_CORRECTION_COUNTED_OPERATION("RULE_OPERATION_CORRECTION_COUNTED_OPERATION"),
    RULE_OPERATION_SPECIAL_CORRECTION_REPO_OPERATION("RULE_OPERATION_CORRECTION_REPO_OPERATION"),
    RULE_OPERATION_SPECIAL_CUSTODIAN("RULE_OPERATION_CUSTODIAN"),
    RULE_OPERATION_SPECIAL_TYPE_INVESTOR_ACCOUNT_SPECIAL_FIDUCIARY("RULE_OPERATION_TYPE_INVESTOR_ACCOUNT_SPECIAL_FIDUCIARY");

    private final String value;

    @JsonValue
    public String getValue() {
        return value;
    }

    @JsonCreator
    public static OperationSpecialBusinessRulesEnum fromValue(String value) {
        return Arrays.stream(OperationSpecialBusinessRulesEnum.values())
                .filter(status -> Objects.equals(status.value, value))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Unknown value: " + value));
    }

    @Converter(autoApply = true)
    public static class OperationBusinessRulesEnumConverter implements AttributeConverter<OperationSpecialBusinessRulesEnum, String> {

        @Override
        public String convertToDatabaseColumn(OperationSpecialBusinessRulesEnum status) {
            return status != null ? status.getValue() : null;
        }

        @Override
        public OperationSpecialBusinessRulesEnum convertToEntityAttribute(String dbData) {
            return dbData != null ? OperationSpecialBusinessRulesEnum.fromValue(dbData) : null;
        }
    }

}

```

## src/main/java/com/nubo/operations/special/fractionation/api/models/enums/PropertiesEnum.java

```java
package com.nubo.operations.special.fractionation.api.models.enums;

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

## src/main/java/com/nubo/operations/special/fractionation/api/models/enums/SideEnum.java

```java
package com.nubo.operations.special.fractionation.api.models.enums;

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

## src/main/java/com/nubo/operations/special/fractionation/api/models/enums/StatusEnum.java

```java
package com.nubo.operations.special.fractionation.api.models.enums;

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

    ASSIGNED(2L),
    REJECTED_CORRECTION_ASSIGNMENT(9L),
    ACCEPTED_CORRECTION_ASSIGNMENT(11L);

    private final Long value;

    @JsonValue
    public Long getValue() {
        return value;
    }

    @JsonCreator
    public static StatusEnum fromValue(Long value) {
        return Arrays.stream(StatusEnum.values())
                .filter(status -> Objects.equals(status.value, value))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Unknown value: " + value));
    }

    @Converter(autoApply = true)
    public static class StatusEnumConverter implements AttributeConverter<StatusEnum, Long> {

        @Override
        public Long convertToDatabaseColumn(StatusEnum status) {
            return status != null ? status.getValue() : null;
        }

        @Override
        public StatusEnum convertToEntityAttribute(Long dbData) {
            return dbData != null ? StatusEnum.fromValue(dbData) : null;
        }
    }

}

```

## src/main/java/com/nubo/operations/special/fractionation/api/models/enums/TypeEnum.java

```java
package com.nubo.operations.special.fractionation.api.models.enums;

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

    PORTFOLIO_ACCOUNT(23L),
    STOCKS_METHOD_OF_PAYMENT(102L),
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

## src/main/java/com/nubo/operations/special/fractionation/api/models/enums/VersionApiEnum.java

```java
package com.nubo.operations.special.fractionation.api.models.enums;

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

## src/main/java/com/nubo/operations/special/fractionation/api/repository/BankAccountRepository.java

```java
package com.nubo.operations.special.fractionation.api.repository;

import com.nubo.operations.special.fractionation.api.models.entity.BankAccountEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BankAccountRepository extends JpaRepository<BankAccountEntity, Long> {
}

```

## src/main/java/com/nubo/operations/special/fractionation/api/repository/InvestorAccountRepository.java

```java
package com.nubo.operations.special.fractionation.api.repository;

import com.nubo.operations.special.fractionation.api.models.entity.InvestorAccountEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface InvestorAccountRepository extends JpaRepository<InvestorAccountEntity, Long> {

    Optional<InvestorAccountEntity> findByAccountNumber(String accountNumber);

}

```

## src/main/java/com/nubo/operations/special/fractionation/api/repository/ParticipantAccountRepository.java

```java
package com.nubo.operations.special.fractionation.api.repository;

import com.nubo.operations.special.fractionation.api.models.entity.ParticipantAccountEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface ParticipantAccountRepository extends JpaRepository<ParticipantAccountEntity, Long> {

    @Query("""
            SELECT pa FROM ParticipantAccountEntity pa
            JOIN participant p
            WHERE p.id = :participantId
            """)
    Optional<ParticipantAccountEntity> findByParticipantId(Long participantId);

}

```

## src/main/java/com/nubo/operations/special/fractionation/api/repository/ParticipantBankAccountRepository.java

```java
package com.nubo.operations.special.fractionation.api.repository;

import com.nubo.operations.special.fractionation.api.models.entity.ParticipantBankAccountEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ParticipantBankAccountRepository extends JpaRepository<ParticipantBankAccountEntity, Long> {
}

```

## src/main/java/com/nubo/operations/special/fractionation/api/repository/ParticipantRepository.java

```java
package com.nubo.operations.special.fractionation.api.repository;

import com.nubo.operations.special.fractionation.api.models.entity.ParticipantEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ParticipantRepository extends JpaRepository<ParticipantEntity, Long> {
}

```

## src/main/java/com/nubo/operations/special/fractionation/api/repository/SettlementLogRepository.java

```java
package com.nubo.operations.special.fractionation.api.repository;

import com.nubo.operations.special.fractionation.api.models.entity.SettlementLogEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SettlementLogRepository extends JpaRepository<SettlementLogEntity, Long> {
}

```

## src/main/java/com/nubo/operations/special/fractionation/api/repository/SettlementPendingRepository.java

```java
package com.nubo.operations.special.fractionation.api.repository;

import com.nubo.operations.special.fractionation.api.models.entity.SettlementKey;
import com.nubo.operations.special.fractionation.api.models.entity.SettlementPendingEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

public interface SettlementPendingRepository extends JpaRepository<SettlementPendingEntity, SettlementKey>,
        JpaSpecificationExecutor<SettlementPendingEntity> {

    @Transactional
    void deleteByTradeIdAndSideId(Long tradeId, String sideId);

    @Query("""
            SELECT s FROM SettlementPendingEntity s
            JOIN s.trade t JOIN s.side si
            WHERE t.id  = :tradeId
            AND si.id = :sideId
            """)
    List<SettlementPendingEntity> findByTradeIdAndSideId(Long tradeId, String sideId);

    @Modifying
    @Transactional
    @Query("""
            UPDATE SettlementPendingEntity s
            SET s.status.id = :status
            WHERE s.trade.id IN :tradeId
            """)
    void updateStatusToApprove(@Param("tradeId") Long tradeId, @Param("status") Long status);

    @Modifying
    @Transactional
    @Query("""
            UPDATE SettlementPendingEntity s
            SET s.status.id = :status
            WHERE s.trade.id IN :tradeId
            """)
    void updateStatusToReject(@Param("tradeId") Long tradeId, @Param("status") Long status);

    @Query("""
            SELECT s FROM SettlementPendingEntity s
            JOIN s.trade t JOIN s.side si
            WHERE t.id  = :tradeId
            AND s.fraction = :fraction
            AND si.id = :sideId
            """ )
    Optional<SettlementPendingEntity> findByTradeIdAndFractionAndSideId(Long tradeId, Integer fraction, String sideId);

}

```

## src/main/java/com/nubo/operations/special/fractionation/api/repository/SettlementPendingStatusHistoryRepository.java

```java
package com.nubo.operations.special.fractionation.api.repository;

import com.nubo.operations.special.fractionation.api.models.entity.SettlementPendingStatusHistoryEntity;
import com.nubo.operations.special.fractionation.api.models.entity.SettlementPendingStatusHistoryKey;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SettlementPendingStatusHistoryRepository extends JpaRepository<SettlementPendingStatusHistoryEntity, SettlementPendingStatusHistoryKey> {

    @Transactional
    void deleteByTradeIdAndSideId(Long tradeId, String sideId);

}

```

## src/main/java/com/nubo/operations/special/fractionation/api/repository/SettlementRepository.java

```java
package com.nubo.operations.special.fractionation.api.repository;

import com.nubo.operations.special.fractionation.api.models.entity.SettlementEntity;
import com.nubo.operations.special.fractionation.api.models.entity.SettlementKey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

public interface SettlementRepository extends JpaRepository<SettlementEntity, SettlementKey>,
        JpaSpecificationExecutor<SettlementEntity> {

    @Transactional
    void deleteByTradeIdAndSideId(Long tradeId, String sideId);

    @Query("""
            SELECT s FROM SettlementEntity s
            JOIN s.trade t JOIN s.side si
            WHERE t.id  = :tradeId
            AND s.fraction = :fraction
            AND si.id = :sideId
            """)
    Optional<SettlementEntity> findByTradeIdAndFractionAndSideId(Long tradeId, Integer fraction, String sideId);
    
}

```

## src/main/java/com/nubo/operations/special/fractionation/api/repository/SettlementStatusHistoryRepository.java

```java
package com.nubo.operations.special.fractionation.api.repository;

import com.nubo.operations.special.fractionation.api.models.entity.SettlementStatusHistoryEntity;
import com.nubo.operations.special.fractionation.api.models.entity.SettlementStatusHistoryKey;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SettlementStatusHistoryRepository extends
        JpaRepository<SettlementStatusHistoryEntity, SettlementStatusHistoryKey> {

    @Transactional
    void deleteByTradeIdAndSideId(Long tradeId, String sideId);

}

```

## src/main/java/com/nubo/operations/special/fractionation/api/repository/SideRepository.java

```java
package com.nubo.operations.special.fractionation.api.repository;

import com.nubo.operations.special.fractionation.api.models.entity.SideEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SideRepository extends JpaRepository<SideEntity, String> {
}


```

## src/main/java/com/nubo/operations/special/fractionation/api/repository/SpecialSettlementRepository.java

```java
package com.nubo.operations.special.fractionation.api.repository;

import com.nubo.operations.special.fractionation.api.models.entity.SpecialSettlementEntity;
import com.nubo.operations.special.fractionation.api.models.entity.SpecialSettlementKey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

public interface SpecialSettlementRepository extends JpaRepository<SpecialSettlementEntity, SpecialSettlementKey> {

    @Transactional
    void deleteBySpecialTradeIdAndSideId(Long specialTradeId, String sideId);

    @Query("""
            SELECT s FROM SpecialSettlementEntity s
            JOIN s.specialTrade t JOIN s.side si
            WHERE t.id = :specialTradeId
            AND s.fraction = :fraction
            AND si.id = :sideId
            """)
    Optional<SpecialSettlementEntity> findBySpecialTradeIdAndFractionAndSideId(Long specialTradeId, Integer fraction, String sideId);

}


```

## src/main/java/com/nubo/operations/special/fractionation/api/repository/SpecialTradeRepository.java

```java
package com.nubo.operations.special.fractionation.api.repository;

import com.nubo.operations.special.fractionation.api.models.entity.SpecialTradeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SpecialTradeRepository extends JpaRepository<SpecialTradeEntity, Long> {
}


```

## src/main/java/com/nubo/operations/special/fractionation/api/repository/SpecialTradeStatusHistoryRepository.java

```java
package com.nubo.operations.special.fractionation.api.repository;

import com.nubo.operations.special.fractionation.api.models.entity.SpecialTradeStatusHistoryEntity;
import com.nubo.operations.special.fractionation.api.models.entity.SpecialTradeStatusHistoryKey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

public interface SpecialTradeStatusHistoryRepository extends JpaRepository<SpecialTradeStatusHistoryEntity, SpecialTradeStatusHistoryKey> {

    @Transactional
    void deleteBySpecialTradeId(Long specialTradeId);

}

```

## src/main/java/com/nubo/operations/special/fractionation/api/repository/StatusRepository.java

```java
package com.nubo.operations.special.fractionation.api.repository;

import com.nubo.operations.special.fractionation.api.models.entity.StatusEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StatusRepository extends JpaRepository<StatusEntity, Long> {
}


```

## src/main/java/com/nubo/operations/special/fractionation/api/repository/TaxesRepository.java

```java
package com.nubo.operations.special.fractionation.api.repository;

import com.nubo.operations.special.fractionation.api.models.entity.TaxesEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface TaxesRepository extends JpaRepository<TaxesEntity, Long> {

    @Query("""
            SELECT t FROM TaxesEntity t
            WHERE t.country.id = :countryId
            """)
    Optional<TaxesEntity> findByCountryId(Long countryId);

}

```

## src/main/java/com/nubo/operations/special/fractionation/api/repository/TradeRepository.java

```java
package com.nubo.operations.special.fractionation.api.repository;

import com.nubo.operations.special.fractionation.api.models.entity.TradeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TradeRepository extends JpaRepository<TradeEntity, Long> {
}

```

## src/main/java/com/nubo/operations/special/fractionation/api/repository/TypeRepository.java

```java
package com.nubo.operations.special.fractionation.api.repository;

import com.nubo.operations.special.fractionation.api.models.entity.TypeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TypeRepository extends JpaRepository<TypeEntity, Long> {
}

```

## src/main/java/com/nubo/operations/special/fractionation/api/repository/UserNuboRepository.java

```java
package com.nubo.operations.special.fractionation.api.repository;

import com.nubo.operations.special.fractionation.api.models.entity.UserNuboEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface UserNuboRepository extends JpaRepository<UserNuboEntity, Long> {

    @Query("""
            SELECT u FROM UserNuboEntity u
            WHERE u.userName = :userName
            """)
    Optional<UserNuboEntity> findByUserName(String userName);

}

```

## src/main/java/com/nubo/operations/special/fractionation/api/service/FractionationDepositService.java

```java
package com.nubo.operations.special.fractionation.api.service;

import com.nubo.operations.special.fractionation.api.models.dto.response.SettlementOutDto;

import java.util.List;

public interface FractionationDepositService {

    List<SettlementOutDto> approveAssignment(Long tradeId, String sideId);

    List<SettlementOutDto> rejectAssignment(Long tradeId, String sideId);
}

```

## src/main/java/com/nubo/operations/special/fractionation/api/service/FractionationPendingService.java

```java
package com.nubo.operations.special.fractionation.api.service;

import com.nubo.operations.special.fractionation.api.models.dto.request.AssignmentInDto;
import com.nubo.operations.special.fractionation.api.models.dto.request.FractionationPendingInDto;
import com.nubo.operations.special.fractionation.api.models.dto.response.PageResponseOutDto;
import com.nubo.operations.special.fractionation.api.models.dto.response.SettlementOutDto;
import com.nubo.operations.special.fractionation.api.models.dto.response.ValidationSettlementOutDto;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface FractionationPendingService {

    List<SettlementOutDto> createFractionsPending(Long tradeId, String sideId, Long statusId, List<FractionationPendingInDto> fractionationPendingInDtoList);

    List<SettlementOutDto> updateAssignmentPending(Long tradeId, String sideId, Long statusId, List<AssignmentInDto> assignmentInDtoList);

    PageResponseOutDto<ValidationSettlementOutDto> validateAssignment(Pageable pageable, Long tradeId, String sideId);

}

```

## src/main/java/com/nubo/operations/special/fractionation/api/service/FractionationService.java

```java
package com.nubo.operations.special.fractionation.api.service;

import com.nubo.operations.special.fractionation.api.models.dto.request.AssignmentInDto;
import com.nubo.operations.special.fractionation.api.models.dto.request.FractionationInDto;
import com.nubo.operations.special.fractionation.api.models.dto.response.SettlementOutDto;

import java.util.List;

public interface FractionationService {

    List<SettlementOutDto> createFractions(Long tradeId, String sideId, Long statusId, List<FractionationInDto> fractionationInDtoList);

    List<SettlementOutDto> updateAssignment(Long tradeId, String sideId, Long statusId, List<AssignmentInDto> assignmentInDtoList);

}

```

## src/main/java/com/nubo/operations/special/fractionation/api/service/FractionationSpecialSettlementService.java

```java
package com.nubo.operations.special.fractionation.api.service;

import com.nubo.operations.special.fractionation.api.models.dto.request.AssignmentSpecialSettlementInDto;
import com.nubo.operations.special.fractionation.api.models.dto.request.FractionSpecialSettlementInDto;
import com.nubo.operations.special.fractionation.api.models.dto.response.SpecialSettlementOutDto;

import java.util.List;

public interface FractionationSpecialSettlementService {

    List<SpecialSettlementOutDto> createFractions(Long specialTradeId,
                                                  List<FractionSpecialSettlementInDto> fractionSpecialSettlementInDtoList);

    List<SpecialSettlementOutDto> updateAssignment(Long specialTradeId,
                                                   List<AssignmentSpecialSettlementInDto> assignmentSpecialSettlementInDtoList);

}

```

## src/main/java/com/nubo/operations/special/fractionation/api/service/impl/FractionationDepositServiceImpl.java

```java
package com.nubo.operations.special.fractionation.api.service.impl;

import com.nubo.operations.special.fractionation.api.application.properties.PropertiesConfig;
import com.nubo.operations.special.fractionation.api.application.properties.PropertiesContext;
import com.nubo.operations.special.fractionation.api.client.kafka.dto.request.ProducerKafkaTransformerInDto;
import com.nubo.operations.special.fractionation.api.client.kafka.producer.KafkaNuboAdapter;
import com.nubo.operations.special.fractionation.api.exception.ServiceException;
import com.nubo.operations.special.fractionation.api.exception.error.ErrorCode;
import com.nubo.operations.special.fractionation.api.helpers.MapperUtil;
import com.nubo.operations.special.fractionation.api.models.dto.response.SettlementOutDto;
import com.nubo.operations.special.fractionation.api.models.dto.response.StatusOutDto;
import com.nubo.operations.special.fractionation.api.models.entity.BankAccountEntity;
import com.nubo.operations.special.fractionation.api.models.entity.InvestorAccountEntity;
import com.nubo.operations.special.fractionation.api.models.entity.ParticipantAccountEntity;
import com.nubo.operations.special.fractionation.api.models.entity.ParticipantEntity;
import com.nubo.operations.special.fractionation.api.models.entity.SettlementEntity;
import com.nubo.operations.special.fractionation.api.models.entity.SettlementPendingEntity;
import com.nubo.operations.special.fractionation.api.models.entity.SettlementPendingStatusHistoryEntity;
import com.nubo.operations.special.fractionation.api.models.entity.SettlementStatusHistoryEntity;
import com.nubo.operations.special.fractionation.api.models.entity.SideEntity;
import com.nubo.operations.special.fractionation.api.models.entity.StatusEntity;
import com.nubo.operations.special.fractionation.api.models.entity.TradeEntity;
import com.nubo.operations.special.fractionation.api.models.entity.TypeEntity;
import com.nubo.operations.special.fractionation.api.models.enums.SideEnum;
import com.nubo.operations.special.fractionation.api.models.enums.StatusEnum;
import com.nubo.operations.special.fractionation.api.models.enums.VersionApiEnum;
import com.nubo.operations.special.fractionation.api.repository.BankAccountRepository;
import com.nubo.operations.special.fractionation.api.repository.InvestorAccountRepository;
import com.nubo.operations.special.fractionation.api.repository.ParticipantAccountRepository;
import com.nubo.operations.special.fractionation.api.repository.ParticipantRepository;
import com.nubo.operations.special.fractionation.api.repository.SettlementPendingRepository;
import com.nubo.operations.special.fractionation.api.repository.SettlementPendingStatusHistoryRepository;
import com.nubo.operations.special.fractionation.api.repository.SettlementRepository;
import com.nubo.operations.special.fractionation.api.repository.SettlementStatusHistoryRepository;
import com.nubo.operations.special.fractionation.api.repository.SideRepository;
import com.nubo.operations.special.fractionation.api.repository.StatusRepository;
import com.nubo.operations.special.fractionation.api.repository.TradeRepository;
import com.nubo.operations.special.fractionation.api.repository.TypeRepository;
import com.nubo.operations.special.fractionation.api.service.FractionationDepositService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.IntStream;

@Service
@RequiredArgsConstructor
@Slf4j
public class FractionationDepositServiceImpl implements FractionationDepositService {

    private final TradeRepository tradeRepository;
    private final SideRepository sideRepository;
    private final SettlementRepository settlementRepository;
    private final SettlementPendingRepository settlementPendingRepository;
    private final PropertiesConfig propertiesConfig;
    private final SettlementStatusHistoryRepository settlementStatusHistoryRepository;
    private final StatusRepository statusRepository;
    private final InvestorAccountRepository investorAccountRepository;
    private final ParticipantAccountRepository participantAccountRepository;
    private final TypeRepository typeRepository;
    private final ParticipantRepository participantRepository;
    private final BankAccountRepository bankAccountRepository;
    private final SettlementPendingStatusHistoryRepository settlementPendingStatusHistoryRepository;
    private final KafkaNuboAdapter kafkaNuboAdapter;

    @Override
    @Transactional
    public List<SettlementOutDto> approveAssignment(Long tradeId, String sideId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return approveAssignmentV1(tradeId, sideId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<SettlementOutDto> approveAssignmentV1(Long tradeId, String sideId) {
        log.info("Start method approveAssignmentV1 with tradeId -> {}, sideId -> {}", tradeId, sideId);

        TradeEntity tradeEntity = validateTrade(tradeId);
        SideEntity sideEntity = validateSide(sideId);
        StatusEntity statusEntity = validateStatus(StatusEnum.ACCEPTED_CORRECTION_ASSIGNMENT.getValue());

        List<SettlementPendingEntity> settlementPendingEntityList = settlementPendingRepository.findByTradeIdAndSideId(
                tradeEntity.getId(), sideEntity.getId());

        if (settlementPendingEntityList.isEmpty()) {
            return new ArrayList<>();
        }

        this.deleteSettlementStatusHistoryByTradeIdAndSideId(tradeId, sideId);
        this.deleteSettlementByTradeIdAndSideId(tradeId, sideId);

        List<SettlementEntity> settlementEntityList = createFractionSettlementEntity(tradeEntity,
                sideEntity, statusEntity, settlementPendingEntityList);

        settlementRepository.saveAll(settlementEntityList);
        settlementPendingRepository.updateStatusToApprove(tradeId, statusEntity.getId());

        this.updateTradeAssignmentMarkAndFractionalMark(settlementPendingEntityList.size(), tradeEntity, sideEntity);
        this.updateTradeStatus(tradeEntity, statusEntity);
        this.createSettlementStatusHistory(settlementEntityList, statusEntity);

        List<SettlementOutDto> settlementOutDtoList = settlementEntityList.stream().map(MapperUtil::settlementEntityToSettlementOutDto).toList();

        this.sendOperationSpecialCorrectionMessageTransformer(settlementOutDtoList);

        log.info("End method approveAssignmentV1, settlement -> {}", settlementOutDtoList);

        return settlementOutDtoList;
    }

    @Override
    @Transactional
    public List<SettlementOutDto> rejectAssignment(Long tradeId, String sideId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return rejectAssignmentV1(tradeId, sideId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<SettlementOutDto> rejectAssignmentV1(Long tradeId, String sideId) {
        log.info("Start method rejectAssignmentV1 with tradeId -> {}, sideId -> {}", tradeId, sideId);

        TradeEntity tradeEntity = validateTrade(tradeId);
        SideEntity sideEntity = validateSide(sideId);
        StatusEntity statusEntity = validateStatus(StatusEnum.REJECTED_CORRECTION_ASSIGNMENT.getValue());

        List<SettlementPendingEntity> settlementPendingEntityList = settlementPendingRepository.findByTradeIdAndSideId(tradeEntity.getId(), sideEntity.getId());

        if (settlementPendingEntityList.isEmpty()) {
            throw new ServiceException(ErrorCode.PENDING_NOT_FOUND, HttpStatus.NOT_FOUND);
        }

        settlementPendingRepository.updateStatusToReject(tradeId, statusEntity.getId());
        this.updateTradeStatus(tradeEntity, statusEntity);
        this.createSettlementPendingStatusHistory(settlementPendingEntityList, statusEntity);

        List<SettlementOutDto> settlementOutDtoList = new ArrayList<>();
        SettlementOutDto settlement = new SettlementOutDto();
        settlement.setTradeId(tradeId);
        settlement.setStatus(StatusOutDto.builder().id(statusEntity.getId()).build());
        settlementOutDtoList.add(settlement);

        log.info("End method rejectAssignmentV1, settlement -> {}", settlementOutDtoList);

        return settlementOutDtoList;
    }

    private void deleteSettlementStatusHistoryByTradeIdAndSideId(Long tradeId, String sideId) {
        settlementStatusHistoryRepository.deleteByTradeIdAndSideId(tradeId, sideId);
    }

    private void deleteSettlementByTradeIdAndSideId(Long tradeId, String sideId) {
        settlementRepository.deleteByTradeIdAndSideId(tradeId, sideId);
    }

    private List<SettlementEntity> createFractionSettlementEntity(
            TradeEntity tradeEntity, SideEntity sideEntity, StatusEntity statusEntity, List<SettlementPendingEntity> settlementPendingEntityList) {
        List<Integer> fractionNumberList;
        if (settlementPendingEntityList.size() > 1) {
            fractionNumberList = IntStream.rangeClosed(1, settlementPendingEntityList.size())
                    .boxed()
                    .toList();
        } else {
            fractionNumberList = List.of(0);
        }
        return IntStream.range(0, settlementPendingEntityList.size())
                .mapToObj(i -> createSettlementEntity(tradeEntity, sideEntity, statusEntity,
                        fractionNumberList.get(i), settlementPendingEntityList.get(i)))
                .toList();
    }

    private SettlementEntity createSettlementEntity(TradeEntity tradeEntity, SideEntity sideEntity,
                                                    StatusEntity statusEntity, Integer fraction,
                                                    SettlementPendingEntity settlementPendingEntity) {
        return SettlementEntity.builder()
                .trade(tradeEntity)
                .fraction(fraction)
                .side(sideEntity)
                .status(statusEntity)
                .investor(ObjectUtils.isEmpty(settlementPendingEntity.getInvestorAccount()) ?
                        null : validateInvestorAccount(settlementPendingEntity.getInvestorAccount().getId()).getInvestor())
                .investorAccount(ObjectUtils.isEmpty(settlementPendingEntity.getInvestorAccount()) ?
                        null : validateInvestorAccount(settlementPendingEntity.getInvestorAccount().getId()))
                .participantAccount(ObjectUtils.isEmpty(settlementPendingEntity.getParticipantAccount()) ?
                        null : validateParticipantAccount(settlementPendingEntity.getParticipantAccount().getId()))
                .fiduciarySpecialist(settlementPendingEntity.getFiduciarySpecialist())
                .directDepositor(ObjectUtils.isEmpty(settlementPendingEntity.getDirectDepositor()) ?
                        null : validateParticipant(settlementPendingEntity.getDirectDepositor().getId()))
                .bankAccount(ObjectUtils.isEmpty(settlementPendingEntity.getBankAccount()) ?
                        null : validateBankAccount(settlementPendingEntity.getBankAccount().getId()))
                .sourceQuoteType(validateType(settlementPendingEntity.getSourceQuoteType().getId()))
                .fractionQuantity(settlementPendingEntity.getFractionQuantity())
                .reference(settlementPendingEntity.getReference())
                .commissionPercentage(settlementPendingEntity.getCommissionPercentage())
                .valTax(settlementPendingEntity.getValTax())
                .tradingSystem(tradeEntity.getTradingSystem())
                .fractionVolume(settlementPendingEntity.getFractionVolume())
                .fractionVolumeLocalPrice(settlementPendingEntity.getFractionVolumeLocalPrice())
                .commissionAmount(settlementPendingEntity.getCommissionAmount())
                .valTaxAmount(settlementPendingEntity.getValTaxAmount())
                .netAmount(settlementPendingEntity.getNetAmount())
                .settlementAmount(settlementPendingEntity.getTransferValue())
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyIp(PropertiesContext.getClientIp())
                .lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyDate(PropertiesContext.getClientDatetime())
                .build();
    }

    private void updateTradeStatus(TradeEntity tradeEntity, StatusEntity statusEntity) {
        tradeEntity.setStatus(statusEntity);
        tradeEntity.setLastModifyApplication(propertiesConfig.getApiName());
        tradeEntity.setLastModifyIp(PropertiesContext.getClientIp());
        tradeEntity.setLastModifyUser(PropertiesContext.getClientUser());
        tradeEntity.setLastModifyDate(PropertiesContext.getClientDatetime());
        tradeRepository.save(tradeEntity);
    }

    private void createSettlementStatusHistory(List<SettlementEntity> settlementEntityList, StatusEntity statusEntity) {
        List<SettlementStatusHistoryEntity> settlementStatusHistoryEntityList = settlementEntityList.stream()
                .map(settlementEntity ->
                        SettlementStatusHistoryEntity.builder()
                                .trade(settlementEntity.getTrade())
                                .fraction(settlementEntity.getFraction())
                                .side(settlementEntity.getSide())
                                .time(PropertiesContext.getClientDatetime())
                                .status(statusEntity)
                                .lastModifyApplication(propertiesConfig.getApiName())
                                .lastModifyIp(PropertiesContext.getClientIp())
                                .lastModifyUser(PropertiesContext.getClientUser())
                                .lastModifyDate(PropertiesContext.getClientDatetime())
                                .build())
                .toList();

        settlementStatusHistoryRepository.saveAll(settlementStatusHistoryEntityList);
    }

    private void createSettlementPendingStatusHistory(List<SettlementPendingEntity> settlementPendingEntityList, StatusEntity statusEntity) {
        List<SettlementPendingStatusHistoryEntity> settlementPendingStatusHistoryEntityList = settlementPendingEntityList.stream()
                .map(settlementEntity ->
                        SettlementPendingStatusHistoryEntity.builder()
                                .trade(settlementEntity.getTrade())
                                .fraction(settlementEntity.getFraction())
                                .side(settlementEntity.getSide())
                                .time(PropertiesContext.getClientDatetime())
                                .status(statusEntity)
                                .lastModifyApplication(propertiesConfig.getApiName())
                                .lastModifyIp(PropertiesContext.getClientIp())
                                .lastModifyUser(PropertiesContext.getClientUser())
                                .lastModifyDate(PropertiesContext.getClientDatetime())
                                .build())
                .toList();

        settlementPendingStatusHistoryRepository.saveAll(settlementPendingStatusHistoryEntityList);
    }

    private void updateTradeAssignmentMarkAndFractionalMark(Integer numberFraction, TradeEntity tradeEntity,
                                                            SideEntity sideEntity) {
        boolean isBuySide = SideEnum.BUY.getValue().equals(sideEntity.getId());
        boolean isSellSide = SideEnum.SELL.getValue().equals(sideEntity.getId());

        boolean update = false;

        if (isBuySide) {
            tradeEntity.setAssignmentMarkBuy(true);
            update = true;
        }

        if (isSellSide) {
            tradeEntity.setAssignmentMarkSell(true);
            update = true;
        }

        if (numberFraction > 1) {
            if (isBuySide) {
                tradeEntity.setFractionalMarkBuy(true);
            } else if (isSellSide) {
                tradeEntity.setFractionalMarkSell(true);
            }
        } else if (numberFraction == 1) {
            if (isBuySide) {
                tradeEntity.setFractionalMarkBuy(false);
            } else if (isSellSide) {
                tradeEntity.setFractionalMarkSell(false);
            }
        }
        if (update) {
            tradeEntity.setLastModifyApplication(propertiesConfig.getApiName());
            tradeEntity.setLastModifyIp(PropertiesContext.getClientIp());
            tradeEntity.setLastModifyUser(PropertiesContext.getClientUser());
            tradeEntity.setLastModifyDate(PropertiesContext.getClientDatetime());
            tradeRepository.save(tradeEntity);
        }
    }

    private void sendOperationSpecialCorrectionMessageTransformer(
            List<SettlementOutDto> settlementOutDtoList) {
        log.debug("Start method sendOperationSpecialCorrectionMessageTransformer, settlementOutDtoList size -> {}", settlementOutDtoList.size());
        try {
            ProducerKafkaTransformerInDto producerKafkaTransformerInDto = MapperUtil.settlementsToProducerKafkaTransformerInDto(settlementOutDtoList);
            kafkaNuboAdapter.sendOperationSpecialCorrectionMessageTransformer(producerKafkaTransformerInDto);
        } catch (Exception ex) {
            log.error("Error sendOperationSpecialCorrectionMessageTransformer -> {}", ex.getMessage());
        }
        log.info("End method sendOperationSpecialCorrectionMessageTransformer");
    }

    private TradeEntity validateTrade(Long tradeId) {
        return tradeRepository.findById(tradeId)
                .orElseThrow(() -> new ServiceException(ErrorCode.TRADE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private SideEntity validateSide(String sideId) {
        return sideRepository.findById(sideId)
                .orElseThrow(() -> new ServiceException(ErrorCode.SIDE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private StatusEntity validateStatus(Long statusId) {
        return statusRepository.findById(statusId)
                .orElseThrow(() -> new ServiceException(ErrorCode.STATUS_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private InvestorAccountEntity validateInvestorAccount(Long investorAccountId) {
        return investorAccountRepository.findById(investorAccountId)
                .orElseThrow(() -> new ServiceException(ErrorCode.INVESTOR_ACCOUNT_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private ParticipantAccountEntity validateParticipantAccount(Long participantAccountId) {
        return participantAccountRepository.findById(participantAccountId)
                .orElseThrow(() -> new ServiceException(ErrorCode.PARTICIPANT_ACCOUNT_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private TypeEntity validateType(Long typeId) {
        return typeRepository.findById(typeId)
                .orElseThrow(() -> new ServiceException(ErrorCode.TYPE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private ParticipantEntity validateParticipant(Long participantId) {
        return participantRepository.findById(participantId)
                .orElseThrow(() -> new ServiceException(ErrorCode.PARTICIPANT_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private BankAccountEntity validateBankAccount(Long bankAccountId) {
        return bankAccountRepository.findById(bankAccountId)
                .orElseThrow(() -> new ServiceException(ErrorCode.BANK_ACCOUNT_NOT_FOUND, HttpStatus.NOT_FOUND));
    }
}

```

## src/main/java/com/nubo/operations/special/fractionation/api/service/impl/FractionationPendingServiceImpl.java

```java
package com.nubo.operations.special.fractionation.api.service.impl;

import com.nubo.operations.special.fractionation.api.application.properties.PropertiesConfig;
import com.nubo.operations.special.fractionation.api.application.properties.PropertiesContext;
import com.nubo.operations.special.fractionation.api.application.util.ApplicationUtils;
import com.nubo.operations.special.fractionation.api.client.kafka.dto.request.ProducerKafkaTransformerInDto;
import com.nubo.operations.special.fractionation.api.client.kafka.producer.KafkaNuboAdapter;
import com.nubo.operations.special.fractionation.api.client.special.operation.calculation.models.dto.request.SettleAccountsInDto;
import com.nubo.operations.special.fractionation.api.client.special.operation.calculation.models.dto.response.SettleAccountsOutDto;
import com.nubo.operations.special.fractionation.api.client.special.operation.calculation.service.OperationSpecialCalculationClient;
import com.nubo.operations.special.fractionation.api.exception.ServiceException;
import com.nubo.operations.special.fractionation.api.exception.error.ErrorCode;
import com.nubo.operations.special.fractionation.api.helpers.MapperPageUtil;
import com.nubo.operations.special.fractionation.api.helpers.MapperUtil;
import com.nubo.operations.special.fractionation.api.models.dto.request.AssignmentInDto;
import com.nubo.operations.special.fractionation.api.models.dto.request.FractionationPendingInDto;
import com.nubo.operations.special.fractionation.api.models.dto.response.IdentificationTypeOutDto;
import com.nubo.operations.special.fractionation.api.models.dto.response.InvestorOutDto;
import com.nubo.operations.special.fractionation.api.models.dto.response.PageResponseOutDto;
import com.nubo.operations.special.fractionation.api.models.dto.response.SettlementOutDto;
import com.nubo.operations.special.fractionation.api.models.dto.response.ValidationSettlementOutDto;
import com.nubo.operations.special.fractionation.api.models.entity.BankAccountEntity;
import com.nubo.operations.special.fractionation.api.models.entity.InvestorAccountEntity;
import com.nubo.operations.special.fractionation.api.models.entity.ParticipantAccountEntity;
import com.nubo.operations.special.fractionation.api.models.entity.ParticipantBankAccountEntity;
import com.nubo.operations.special.fractionation.api.models.entity.ParticipantEntity;
import com.nubo.operations.special.fractionation.api.models.entity.SettlementEntity;
import com.nubo.operations.special.fractionation.api.models.entity.SettlementLogEntity;
import com.nubo.operations.special.fractionation.api.models.entity.SettlementPendingEntity;
import com.nubo.operations.special.fractionation.api.models.entity.SettlementPendingStatusHistoryEntity;
import com.nubo.operations.special.fractionation.api.models.entity.SettlementStatusHistoryEntity;
import com.nubo.operations.special.fractionation.api.models.entity.SideEntity;
import com.nubo.operations.special.fractionation.api.models.entity.StatusEntity;
import com.nubo.operations.special.fractionation.api.models.entity.TradeEntity;
import com.nubo.operations.special.fractionation.api.models.entity.TypeEntity;
import com.nubo.operations.special.fractionation.api.models.entity.UserNuboEntity;
import com.nubo.operations.special.fractionation.api.models.enums.SideEnum;
import com.nubo.operations.special.fractionation.api.models.enums.VersionApiEnum;
import com.nubo.operations.special.fractionation.api.repository.BankAccountRepository;
import com.nubo.operations.special.fractionation.api.repository.InvestorAccountRepository;
import com.nubo.operations.special.fractionation.api.repository.ParticipantAccountRepository;
import com.nubo.operations.special.fractionation.api.repository.ParticipantBankAccountRepository;
import com.nubo.operations.special.fractionation.api.repository.ParticipantRepository;
import com.nubo.operations.special.fractionation.api.repository.SettlementLogRepository;
import com.nubo.operations.special.fractionation.api.repository.SettlementPendingRepository;
import com.nubo.operations.special.fractionation.api.repository.SettlementPendingStatusHistoryRepository;
import com.nubo.operations.special.fractionation.api.repository.SettlementRepository;
import com.nubo.operations.special.fractionation.api.repository.SettlementStatusHistoryRepository;
import com.nubo.operations.special.fractionation.api.repository.SideRepository;
import com.nubo.operations.special.fractionation.api.repository.StatusRepository;
import com.nubo.operations.special.fractionation.api.repository.TradeRepository;
import com.nubo.operations.special.fractionation.api.repository.TypeRepository;
import com.nubo.operations.special.fractionation.api.repository.UserNuboRepository;
import com.nubo.operations.special.fractionation.api.service.FractionationPendingService;
import jakarta.persistence.criteria.Predicate;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.IntStream;

@Service
@RequiredArgsConstructor
@Slf4j
public class FractionationPendingServiceImpl implements FractionationPendingService {

    private final TradeRepository tradeRepository;
    private final SideRepository sideRepository;
    private final SettlementRepository settlementRepository;
    private final InvestorAccountRepository investorAccountRepository;
    private final ParticipantAccountRepository participantAccountRepository;
    private final StatusRepository statusRepository;
    private final TypeRepository typeRepository;
    private final ParticipantRepository participantRepository;
    private final BankAccountRepository bankAccountRepository;
    private final OperationSpecialCalculationClient operationSpecialCalculationClient;
    private final PropertiesConfig propertiesConfig;
    private final SettlementPendingRepository settlementPendingRepository;
    private final SettlementLogRepository settlementLogRepository;
    private final UserNuboRepository userNuboRepository;
    private final ParticipantBankAccountRepository participantBankAccountRepository;
    private final SettlementPendingStatusHistoryRepository settlementPendingStatusHistoryRepository;

    @Override
    @Transactional
    public List<SettlementOutDto> createFractionsPending(Long tradeId, String sideId, Long statusId, List<FractionationPendingInDto> fractionationPendingInDtoList) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return createFractionsPendingV1(tradeId, sideId, statusId, fractionationPendingInDtoList);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<SettlementOutDto> createFractionsPendingV1(Long tradeId, String sideId, Long statusId, List<FractionationPendingInDto> fractionationPendingInDtoList) {
        log.info("Start method createFractionsPendingV1 with tradeId -> {}, sideId -> {}, statusId -> {}", tradeId, sideId, statusId);

        TradeEntity tradeEntity = validateTrade(tradeId);
        SideEntity sideEntity = validateSide(sideId);
        StatusEntity statusEntity = validateStatus(statusId);

        this.deleteSettlementPendingStatusHistoryByTradeIdAndSideId(tradeId, sideId);
        this.deleteSettlementPendingByTradeIdAndSideId(tradeId, sideId);

        List<SettlementPendingEntity> settlementPendingEntityList = createFractionSettlementPendingEntity(tradeEntity,
                sideEntity, statusEntity, fractionationPendingInDtoList);
        settlementPendingRepository.saveAll(settlementPendingEntityList);

        this.updateTradeStatus(tradeEntity, statusEntity);
        this.createSettlementPendingStatusHistory(settlementPendingEntityList, statusEntity);
        this.createSettlementLog(settlementPendingEntityList, null, statusEntity);

        List<SettlementOutDto> settlementOutDtoList = settlementPendingEntityList.stream()
                .map(MapperUtil::settlementPendingEntityToSettlementOutDto)
                .toList();

        log.info("End method createFractionsPendingV1, settlement -> {}", settlementOutDtoList);

        return settlementOutDtoList;
    }

    @Override
    @Transactional
    public List<SettlementOutDto> updateAssignmentPending(Long tradeId, String sideId, Long statusId, List<AssignmentInDto> assignmentInDtoList) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return updateAssignmentPendingV1(tradeId, sideId, statusId, assignmentInDtoList);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<SettlementOutDto> updateAssignmentPendingV1(Long tradeId, String sideId, Long statusId, List<AssignmentInDto> assignmentInDtoList) {
        log.info("Start method updateAssignmentPendingV1 with tradeId -> {}, sideId -> {}, statusId -> {}", tradeId, sideId, statusId);

        TradeEntity tradeEntity = validateTrade(tradeId);
        SideEntity sideEntity = validateSide(sideId);
        StatusEntity statusEntity = validateStatus(statusId);

        List<SettlementPendingEntity> settlementPendingEntityBeforeList = findSettlementPendingEntityBefore(assignmentInDtoList, tradeEntity, sideEntity);

        List<SettlementPendingEntity> settlementPendingEntityAfterList = this.updateAssignmentSettlement(tradeEntity, sideEntity, statusEntity, assignmentInDtoList);
        settlementPendingRepository.saveAll(settlementPendingEntityAfterList);

        this.updateTradeStatus(tradeEntity, statusEntity);

        this.createSettlementPendingStatusHistory(settlementPendingEntityAfterList, statusEntity);

        this.createSettlementLog(settlementPendingEntityBeforeList, settlementPendingEntityAfterList, statusEntity);

        List<SettlementOutDto> settlementOutDtoList = settlementPendingEntityAfterList.stream().map(MapperUtil::settlementPendingEntityToSettlementOutDto).toList();

        log.info("End method updateAssignmentPendingV1, settlement -> {}", settlementOutDtoList);

        return settlementOutDtoList;
    }

    @Override
    public PageResponseOutDto<ValidationSettlementOutDto> validateAssignment(Pageable pageable, Long tradeId, String sideId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return validateAssignmentV1(pageable, tradeId, sideId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<ValidationSettlementOutDto> validateAssignmentV1(Pageable pageable, Long tradeId, String sideId) {

        log.info("Start method validateAssignmentV1 with tradeId -> {}, sideId -> {}", tradeId, sideId);

        Specification<SettlementEntity> specificationEntity = settlementEntitySpecification(tradeId, sideId);
        Specification<SettlementPendingEntity> specificationPendingEntity = settlementPendingEntitySpecification(tradeId, sideId);

        Page<SettlementEntity> settlementEntityPage = settlementRepository.findAll(specificationEntity, pageable);
        Page<SettlementPendingEntity> settlementPendingEntityPage = settlementPendingRepository.findAll(specificationPendingEntity, pageable);

        List<SettlementOutDto> settlementOutDtoListEntity = settlementEntityPage.stream().map(MapperUtil::settlementEntityToSettlementOutDto).toList();
        List<SettlementOutDto> settlementOutDtoListPending = settlementPendingEntityPage.stream().map(MapperUtil::settlementPendingEntityToSettlementOutDto).toList();

        if (settlementOutDtoListPending.isEmpty()) {
            List<ValidationSettlementOutDto> validationSettlementOutDtoList = new ArrayList<>();
            return MapperPageUtil.pageToPageResponseOutDto(validationSettlementOutDtoList, settlementEntityPage);
        }
        List<ValidationSettlementOutDto> validationSettlementOutDtoList = new ArrayList<>();
        for (int i = 0; i < settlementOutDtoListPending.size(); i++) {
            SettlementOutDto previous = (i < settlementOutDtoListEntity.size()) ? settlementOutDtoListEntity.get(i) : null;
            SettlementOutDto newItem = settlementOutDtoListPending.get(i);
            ValidationSettlementOutDto validation = new ValidationSettlementOutDto();

            if (previous != null) {
                compareAndSet(validation, previous, newItem);
                validationSettlementOutDtoList.add(validation);
            } else {
                validateNewFraction(newItem, validation);
                validationSettlementOutDtoList.add(validation);
            }

        }

        log.info("End method validateAssignmentV1, settlement -> {} settlementPending -> {}", settlementOutDtoListEntity, settlementOutDtoListPending);
        return MapperPageUtil.pageToPageResponseOutDto(validationSettlementOutDtoList, settlementEntityPage);
    }

    private List<SettlementPendingEntity> createFractionSettlementPendingEntity(
            TradeEntity tradeEntity, SideEntity sideEntity, StatusEntity statusEntity, List<FractionationPendingInDto> fractionationPendingInDtoList) {
        List<Integer> fractionNumberList;
        if (fractionationPendingInDtoList.size() > 1) {
            fractionNumberList = IntStream.rangeClosed(1, fractionationPendingInDtoList.size())
                    .boxed()
                    .toList();
        } else {
            fractionNumberList = List.of(0);
        }
        return IntStream.range(0, fractionationPendingInDtoList.size())
                .mapToObj(i -> createSettlementPendingEntity(tradeEntity, sideEntity, statusEntity,
                        fractionNumberList.get(i), fractionationPendingInDtoList.get(i)))
                .toList();
    }

    private SettlementPendingEntity createSettlementPendingEntity(TradeEntity tradeEntity, SideEntity sideEntity,
                                                                  StatusEntity statusEntity, Integer fraction, FractionationPendingInDto fractionationPendingInDto) {

        SettleAccountsInDto settleAccountsInDto = SettleAccountsInDto.builder()
                .quantity(fractionationPendingInDto.getFractionQuantity())
                .price(tradeEntity.getLocalCurrencyPrice())
                .commission(fractionationPendingInDto.getCommissionPercentage())
                .valTax(fractionationPendingInDto.getValTax())
                .sideId(sideEntity.getId())
                .build();
        SettleAccountsOutDto settleAccountsOutDto = operationSpecialCalculationClient.getSettleAccounts(settleAccountsInDto);

        return SettlementPendingEntity.builder()
                .trade(tradeEntity)
                .fraction(fraction)
                .side(sideEntity)
                .status(statusEntity)
                .investor(ObjectUtils.isEmpty(fractionationPendingInDto.getInvestorAccountId()) ?
                        null : validateInvestorAccount(fractionationPendingInDto.getInvestorAccountId()).getInvestor())
                .investorAccount(ObjectUtils.isEmpty(fractionationPendingInDto.getInvestorAccountId()) ?
                        null : validateInvestorAccount(fractionationPendingInDto.getInvestorAccountId()))
                .participantAccount(ObjectUtils.isEmpty(fractionationPendingInDto.getParticipantAccountId()) ?
                        null : validateParticipantAccount(fractionationPendingInDto.getParticipantAccountId()))
                .fiduciarySpecialist(fractionationPendingInDto.getFiduciarySpecialist())
                .directDepositor(validateParticipant(fractionationPendingInDto.getDirectDepositorId()))
                .bankAccount(ObjectUtils.isEmpty(fractionationPendingInDto.getBankAccountId()) ?
                        null : validateBankAccount(fractionationPendingInDto.getBankAccountId()))
                .participantBankAccount(ObjectUtils.isEmpty(fractionationPendingInDto.getParticipantBankAccountId()) ?
                        null : validateParticipantBankAccount(fractionationPendingInDto.getParticipantBankAccountId()))
                .sourceQuoteType(validateType(fractionationPendingInDto.getSourceQuoteTypeId()))
                .fractionQuantity(fractionationPendingInDto.getFractionQuantity())
                .reference(fractionationPendingInDto.getReference())
                .commissionPercentage(fractionationPendingInDto.getCommissionPercentage())
                .valTax(fractionationPendingInDto.getValTax())
                .tradingSystem(tradeEntity.getTradingSystem())
                .fractionVolume(tradeEntity.getPrice().multiply(fractionationPendingInDto.getFractionQuantity()))
                .fractionVolumeLocalPrice(settleAccountsOutDto.getAmount())
                .commissionAmount(settleAccountsOutDto.getCommissionAmount())
                .valTaxAmount(settleAccountsOutDto.getValTaxAmount())
                .netAmount(settleAccountsOutDto.getNetAmount())
                .settlementAmount(settleAccountsOutDto.getTransferValue())
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyIp(PropertiesContext.getClientIp())
                .lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyDate(PropertiesContext.getClientDatetime())
                .build();
    }

    private void updateTradeAssignmentMarkAndFractionalMark(Integer numberFraction, TradeEntity tradeEntity,
                                                            SideEntity sideEntity) {
        boolean isBuySide = SideEnum.BUY.getValue().equals(sideEntity.getId());
        boolean isSellSide = SideEnum.SELL.getValue().equals(sideEntity.getId());

        boolean update = false;

        if (isBuySide) {
            tradeEntity.setAssignmentMarkBuy(true);
            update = true;
        }

        if (isSellSide) {
            tradeEntity.setAssignmentMarkSell(true);
            update = true;
        }

        if (numberFraction > 1) {
            if (isBuySide) {
                tradeEntity.setFractionalMarkBuy(true);
            } else if (isSellSide) {
                tradeEntity.setFractionalMarkSell(true);
            }
        } else if (numberFraction == 1) {
            if (isBuySide) {
                tradeEntity.setFractionalMarkBuy(false);
            } else if (isSellSide) {
                tradeEntity.setFractionalMarkSell(false);
            }
        }
        if (update) {
            tradeEntity.setLastModifyApplication(propertiesConfig.getApiName());
            tradeEntity.setLastModifyIp(PropertiesContext.getClientIp());
            tradeEntity.setLastModifyUser(PropertiesContext.getClientUser());
            tradeEntity.setLastModifyDate(PropertiesContext.getClientDatetime());
            tradeRepository.save(tradeEntity);
        }
    }

    private void updateTradeStatus(TradeEntity tradeEntity, StatusEntity statusEntity) {
        tradeEntity.setStatus(statusEntity);
        tradeEntity.setLastModifyApplication(propertiesConfig.getApiName());
        tradeEntity.setLastModifyIp(PropertiesContext.getClientIp());
        tradeEntity.setLastModifyUser(PropertiesContext.getClientUser());
        tradeEntity.setLastModifyDate(PropertiesContext.getClientDatetime());
        tradeRepository.save(tradeEntity);
    }

    private List<SettlementPendingEntity> updateAssignmentSettlement(TradeEntity tradeEntity, SideEntity sideEntity,
                                                                     StatusEntity statusEntity, List<AssignmentInDto> assignmentInDtoList) {
        return assignmentInDtoList.stream()
                .map(assignmentInDto -> updateAssignmentSettlementEntity(tradeEntity, sideEntity, statusEntity, assignmentInDto)).toList();
    }

    private SettlementPendingEntity updateAssignmentSettlementEntity(TradeEntity tradeEntity, SideEntity sideEntity,
                                                                     StatusEntity statusEntity, AssignmentInDto assignmentInDto) {

        SettlementEntity settlementEntity = settlementRepository.findByTradeIdAndFractionAndSideId(tradeEntity.getId(),
                        assignmentInDto.getFraction(), sideEntity.getId())
                .orElseThrow(() -> new ServiceException(ErrorCode.SETTLEMENT_NOT_FOUND, HttpStatus.NOT_FOUND));

        SettleAccountsInDto settleAccountsInDto = SettleAccountsInDto.builder()
                .quantity(assignmentInDto.getFractionQuantity())
                .price(settlementEntity.getTrade().getLocalCurrencyPrice())
                .commission(assignmentInDto.getCommissionPercentage())
                .valTax(assignmentInDto.getValTax())
                .sideId(settlementEntity.getSide().getId())
                .build();
        SettleAccountsOutDto settleAccountsOutDto = operationSpecialCalculationClient.getSettleAccounts(settleAccountsInDto);

        SettlementPendingEntity settlementPendingEntity = new SettlementPendingEntity();

        settlementPendingEntity.setTrade(settlementEntity.getTrade());
        settlementPendingEntity.setFraction(settlementEntity.getFraction());
        settlementPendingEntity.setSide(settlementEntity.getSide());
        settlementPendingEntity.setDirectDepositor(settlementEntity.getDirectDepositor());
        settlementPendingEntity.setInvestor(ObjectUtils.isEmpty(assignmentInDto.getInvestorAccountId()) ?
                null : validateInvestorAccount(assignmentInDto.getInvestorAccountId()).getInvestor());
        settlementPendingEntity.setInvestorAccount(ObjectUtils.isEmpty(assignmentInDto.getInvestorAccountId()) ?
                null : validateInvestorAccount(assignmentInDto.getInvestorAccountId()));
        settlementPendingEntity.setParticipantAccount(ObjectUtils.isEmpty(assignmentInDto.getParticipantAccountId()) ?
                null : validateParticipantAccount(assignmentInDto.getParticipantAccountId()));
        settlementPendingEntity.setFiduciarySpecialist(assignmentInDto.getFiduciarySpecialist());
        settlementPendingEntity.setBankAccount(ObjectUtils.isEmpty(assignmentInDto.getBankAccountId()) ?
                settlementPendingEntity.getBankAccount() : validateBankAccount(assignmentInDto.getBankAccountId()));
        settlementEntity.setParticipantBankAccount(ObjectUtils.isEmpty(assignmentInDto.getParticipantBankAccountId()) ?
                null : validateParticipantBankAccount(assignmentInDto.getParticipantBankAccountId()));
        settlementPendingEntity.setSourceQuoteType(validateType(assignmentInDto.getSourceQuoteTypeId()));
        settlementPendingEntity.setReference(assignmentInDto.getReference());
        settlementPendingEntity.setFractionQuantity(assignmentInDto.getFractionQuantity());
        settlementPendingEntity.setCommissionPercentage(assignmentInDto.getCommissionPercentage());
        settlementPendingEntity.setValTax(assignmentInDto.getValTax());
        settlementPendingEntity.setStatus(statusEntity);
        settlementPendingEntity.setFractionVolume(tradeEntity.getPrice().multiply(assignmentInDto.getFractionQuantity()));
        settlementPendingEntity.setFractionVolumeLocalPrice(settleAccountsOutDto.getAmount());
        settlementPendingEntity.setCommissionAmount(settleAccountsOutDto.getCommissionAmount());
        settlementPendingEntity.setValTaxAmount(settleAccountsOutDto.getValTaxAmount());
        settlementPendingEntity.setNetAmount(settleAccountsOutDto.getNetAmount());
        settlementPendingEntity.setSettlementAmount(settleAccountsOutDto.getTransferValue());
        settlementPendingEntity.setTradingSystem(settlementEntity.getTradingSystem());
        settlementPendingEntity.setLastModifyApplication(propertiesConfig.getApiName());
        settlementPendingEntity.setLastModifyIp(PropertiesContext.getClientIp());
        settlementPendingEntity.setLastModifyUser(PropertiesContext.getClientUser());
        settlementPendingEntity.setLastModifyDate(PropertiesContext.getClientDatetime());

        return settlementPendingEntity;
    }

    private void createSettlementPendingStatusHistory(List<SettlementPendingEntity> settlementPendingEntityList, StatusEntity statusEntity) {
        List<SettlementPendingStatusHistoryEntity> settlementPendingStatusHistoryEntityList = settlementPendingEntityList.stream()
                .map(settlementEntity ->
                        SettlementPendingStatusHistoryEntity.builder()
                                .trade(settlementEntity.getTrade())
                                .fraction(settlementEntity.getFraction())
                                .side(settlementEntity.getSide())
                                .time(PropertiesContext.getClientDatetime())
                                .status(statusEntity)
                                .lastModifyApplication(propertiesConfig.getApiName())
                                .lastModifyIp(PropertiesContext.getClientIp())
                                .lastModifyUser(PropertiesContext.getClientUser())
                                .lastModifyDate(PropertiesContext.getClientDatetime())
                                .build())
                .toList();

        settlementPendingStatusHistoryRepository.saveAll(settlementPendingStatusHistoryEntityList);
    }

    private void createSettlementLog(List<SettlementPendingEntity> settlementPendingEntityBeforeList,
                                     List<SettlementPendingEntity> settlementPendingEntityAfterList,
                                     StatusEntity statusEntity) {
        List<SettlementLogEntity> settlementLogEntityList = settlementPendingEntityBeforeList.stream()
                .map(settlementPendingBeforeEntity ->
                        SettlementLogEntity.builder()
                                .trade(settlementPendingBeforeEntity.getTrade())
                                .fraction(settlementPendingBeforeEntity.getFraction())
                                .side(settlementPendingBeforeEntity.getSide())
                                .time(PropertiesContext.getClientDatetime())
                                .dataBefore(ApplicationUtils.convertObjectMapperToJson(
                                        MapperUtil.settlementPendingEntityToFractionOutDto(settlementPendingBeforeEntity)))
                                .dataAfter(ObjectUtils.isEmpty(settlementPendingEntityAfterList) ? null :
                                        ApplicationUtils.convertObjectMapperToJson(
                                                MapperUtil.settlementPendingEntityToFractionOutDto(settlementPendingEntityAfterList.stream()
                                                        .filter(settlementAfterEntity ->
                                                                settlementPendingBeforeEntity.getTrade().getId().equals(settlementAfterEntity.getTrade().getId()) &&
                                                                        settlementPendingBeforeEntity.getFraction().equals(settlementAfterEntity.getFraction()) &&
                                                                        settlementPendingBeforeEntity.getSide().getId().equals(settlementAfterEntity.getSide().getId())).findFirst().get())))
                                .status(statusEntity)
                                .userAssignment(getUserNubo(PropertiesContext.getClientUser()))
                                .lastModifyApplication(propertiesConfig.getApiName())
                                .lastModifyIp(PropertiesContext.getClientIp())
                                .lastModifyUser(PropertiesContext.getClientUser())
                                .lastModifyDate(PropertiesContext.getClientDatetime())
                                .build())
                .toList();

        settlementLogRepository.saveAll(settlementLogEntityList);
    }

    private List<SettlementPendingEntity> findSettlementPendingEntityBefore(List<AssignmentInDto> assignmentInDtoList,
                                                                            TradeEntity tradeEntity, SideEntity sideEntity) {
        return assignmentInDtoList.stream()
                .map(assignmentInDto -> {
                            SettlementPendingEntity settlementPendingEntityCopy = new SettlementPendingEntity();
                            BeanUtils.copyProperties(findByTradeIdAndFractionAndSideId(tradeEntity.getId(),
                                    assignmentInDto.getFraction(), sideEntity.getId()), settlementPendingEntityCopy);
                            return settlementPendingEntityCopy;
                        }
                ).toList();
    }

    private SettlementPendingEntity findByTradeIdAndFractionAndSideId(Long tradeId, Integer fraction, String sideId) {
        return settlementPendingRepository.findByTradeIdAndFractionAndSideId(tradeId,
                        fraction, sideId)
                .orElseThrow(() -> new ServiceException(ErrorCode.SETTLEMENT_PENDING_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private Specification<SettlementEntity> settlementEntitySpecification(Long tradeId, String sideId) {
        return (root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();
            if (!ObjectUtils.isEmpty(tradeId)) {
                predicates.add(criteriaBuilder.equal(root.get("trade").get("id"), tradeId));
            }
            if (!ObjectUtils.isEmpty(sideId)) {
                predicates.add(criteriaBuilder.equal(root.get("side").get("id"), sideId));
            }
            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }

    private Specification<SettlementPendingEntity> settlementPendingEntitySpecification(Long tradeId, String sideId) {
        return (root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();
            if (!ObjectUtils.isEmpty(tradeId)) {
                predicates.add(criteriaBuilder.equal(root.get("trade").get("id"), tradeId));
            }
            if (!ObjectUtils.isEmpty(sideId)) {
                predicates.add(criteriaBuilder.equal(root.get("side").get("id"), sideId));
            }
            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }

    public void validateNewFraction(SettlementOutDto newItem, ValidationSettlementOutDto validation) {
        validation.setFraction(newItem.getFraction());
        validation.setFractionUpdated(true);

        validation.setIdentificationType(newItem.getInvestor().getIdentificationType().getDescription());
        validation.setIdentificationTypeUpdated(true);

        validation.setDocumentNumber(newItem.getInvestor().getDocumentNumber());
        validation.setDocumentNumberUpdated(true);

        validation.setInvestorName(newItem.getInvestor().getFirstName());
        validation.setInvestorNameUpdated(true);

        validation.setInvestorAccount(newItem.getInvestorAccount().getAccountNumber());
        validation.setInvestorAccountUpdated(true);

        validation.setFiduciarySpecialist(newItem.getFiduciarySpecialist());
        validation.setFiduciarySpecialistUpdated(true);

        if (newItem.getBankAccount() != null) {
            validation.setBankAccount(newItem.getBankAccount().getBankAccount());
            validation.setBankAccountUpdated(true);
            validation.setBankName(newItem.getBankAccount().getBank().getName());
            validation.setBankNameUpdated(true);
        }

        validation.setDirectDepositorOutDto(newItem.getInvestorAccount().getDepository().getDescription());
        validation.setDirectDepositorOutDtoUpdated(true);

        validation.setReference(newItem.getReference());
        validation.setReferenceUpdated(true);

        validation.setSourceQuoteType(newItem.getSourceQuoteType().getDescription());
        validation.setSourceQuoteTypeUpdated(true);

        validation.setCommissionPercentage(newItem.getCommissionPercentage());
        validation.setCommissionPercentageUpdated(true);

        validation.setFractionQuantity(newItem.getFractionQuantity());
        validation.setFractionQuantityUpdated(true);

        validation.setCommissionAmount(newItem.getCommissionAmount());
        validation.setCommissionAmountUpdate(true);

        validation.setValTaxAmount(newItem.getValTaxAmount());
        validation.setValTaxAmountUpdated(true);

        validation.setNetAmount(newItem.getNetAmount());
        validation.setNetAmountUpdated(true);

        if (newItem.getCustodian() != null) {
            validation.setCustodianId(newItem.getCustodian().getId());
            validation.setCustodianIdUpdated(true);

            validation.setCustodianName(newItem.getCustodian().getName());
            validation.setCustodianNameUpdated(true);
        } else {
            validation.setCustodianId(0L);
            validation.setCustodianIdUpdated(true);
            validation.setCustodianName("");
            validation.setCustodianNameUpdated(true);
        }

        if (newItem.getFicAdministrator() != null) {
            validation.setFicAdministrator(newItem.getFicAdministrator().getId());
            validation.setFicAdministratorUpdated(true);
        }

        validation.setBloquingStatus(newItem.getStatus().getDescription());
        validation.setBloquingStatusUpdated(true);
    }

    private <T> void compareAndSet(ValidationSettlementOutDto validation, SettlementOutDto previous, SettlementOutDto newItem) {
        validation.setFraction(compareValues(previous.getFraction(), newItem.getFraction()));
        validation.setFractionUpdated(!previous.getFraction().equals(newItem.getFraction()));

        compareInvestor(validation, previous, newItem);
        compareFiduciarySpecialist(validation, previous, newItem);
        compareBankAccount(validation, previous, newItem);
        compareDepository(validation, previous, newItem);
        compareReference(validation, previous, newItem);
        compareSourceQuoteType(validation, previous, newItem);
        compareCommission(validation, previous, newItem);
        compareFractionQuantity(validation, previous, newItem);
        compareCommissionAmount(validation, previous, newItem);
        compareTaxAmount(validation, previous, newItem);
        compareNetAmount(validation, previous, newItem);
        compareCustodian(validation, previous, newItem);
        compareCustodianName(validation, previous, newItem);
        compareFicAdministrator(validation, previous, newItem);
        compareBlockingStatus(validation, previous, newItem);
    }

    private void compareInvestor(ValidationSettlementOutDto validation, SettlementOutDto previous, SettlementOutDto newItem) {
        compareIdentificationType(validation, previous, newItem);
        compareDocumentNumber(validation, previous, newItem);
        compareInvestorName(validation, previous, newItem);
        compareInvestorAccount(validation, previous, newItem);
    }

    private void compareFiduciarySpecialist2(ValidationSettlementOutDto validation, SettlementOutDto previous, SettlementOutDto newItem) {
        Boolean prevFiduciarySpecialist = previous.getFiduciarySpecialist() != null ? previous.getFiduciarySpecialist() : null;
        Boolean newFiduciarySpecialist = newItem.getFiduciarySpecialist() != null ? newItem.getFiduciarySpecialist() : null;

        if (prevFiduciarySpecialist == null && newFiduciarySpecialist != null) {
            validation.setFiduciarySpecialist(newFiduciarySpecialist);
            validation.setFiduciarySpecialistUpdated(true);
        } else if (prevFiduciarySpecialist != null && newFiduciarySpecialist == null) {
            validation.setFiduciarySpecialist(prevFiduciarySpecialist);
            validation.setFiduciarySpecialistUpdated(false);
        } else if (prevFiduciarySpecialist == null && newFiduciarySpecialist == null) {
            validation.setFiduciarySpecialist(null);
            validation.setFiduciarySpecialistUpdated(null);
        } else {
            validation.setFiduciarySpecialist(compareValues(previous.getFiduciarySpecialist(), newItem.getFiduciarySpecialist()));
            validation.setFiduciarySpecialistUpdated(!previous.getFiduciarySpecialist().equals(newItem.getFiduciarySpecialist()));
        }
    }

    private void compareFiduciarySpecialist(ValidationSettlementOutDto validation, SettlementOutDto previous, SettlementOutDto newItem) {
        Boolean prevVal = previous != null ? previous.getFiduciarySpecialist() : null;
        Boolean newVal = newItem != null ? newItem.getFiduciarySpecialist() : null;

        validation.setFiduciarySpecialist(compareValues(prevVal, newVal));

        if (prevVal == null && newVal == null) {
            validation.setFiduciarySpecialistUpdated(null);
        } else validation.setFiduciarySpecialistUpdated(newVal != null && !Objects.equals(prevVal, newVal));
    }

    private void compareIdentificationType(ValidationSettlementOutDto validation, SettlementOutDto previous, SettlementOutDto newItem) {
        String prevIdType = extractIdentificationTypeDescription(previous);
        String newIdType = extractIdentificationTypeDescription(newItem);

        if (Objects.equals(prevIdType, newIdType)) {
            validation.setIdentificationType(prevIdType);
            validation.setIdentificationTypeUpdated(false);
        } else {
            validation.setIdentificationType(newIdType != null ? newIdType : prevIdType);
            validation.setIdentificationTypeUpdated(newIdType != null);
        }
    }

    private String extractIdentificationTypeDescription(SettlementOutDto settlement) {
        return Optional.ofNullable(settlement)
                .map(SettlementOutDto::getInvestor)
                .map(InvestorOutDto::getIdentificationType)
                .map(IdentificationTypeOutDto::getDescription)
                .orElse(null);
    }

    private void compareDocumentNumber(ValidationSettlementOutDto validation, SettlementOutDto previous, SettlementOutDto newItem) {
        String prevDocumentNumber = previous.getInvestor() != null ? previous.getInvestor().getDocumentNumber() : null;
        String newDocumentNumber = newItem.getInvestor() != null ? newItem.getInvestor().getDocumentNumber() : null;

        if (prevDocumentNumber == null && newDocumentNumber != null) {
            validation.setDocumentNumber(newDocumentNumber);
            validation.setDocumentNumberUpdated(true);
        } else if (prevDocumentNumber != null && newDocumentNumber == null) {
            validation.setDocumentNumber(prevDocumentNumber);
            validation.setDocumentNumberUpdated(false);
        } else if (prevDocumentNumber == null && newDocumentNumber == null) {
            validation.setDocumentNumber(null);
            validation.setDocumentNumberUpdated(null);
        } else {
            validation.setDocumentNumber(compareValues(prevDocumentNumber, newDocumentNumber));
            validation.setDocumentNumberUpdated(!compareValues(prevDocumentNumber, newDocumentNumber).equals(newDocumentNumber));
        }
    }

    private void compareInvestorName(ValidationSettlementOutDto validation, SettlementOutDto previous, SettlementOutDto newItem) {
        String prevInvestorName = previous.getInvestor() != null ? previous.getInvestor().getFirstName() : null;
        String newInvestorName = newItem.getInvestor() != null ? newItem.getInvestor().getFirstName() : null;

        if (prevInvestorName == null && newInvestorName != null) {
            validation.setInvestorName(newInvestorName);
            validation.setInvestorNameUpdated(true);
        } else if (prevInvestorName != null && newInvestorName == null) {
            validation.setInvestorName(prevInvestorName);
            validation.setInvestorNameUpdated(false);
        } else if (prevInvestorName == null && newInvestorName == null) {
            validation.setInvestorName(null);
            validation.setInvestorNameUpdated(null);
        } else {
            validation.setInvestorName(compareValues(prevInvestorName, newInvestorName));
            validation.setInvestorNameUpdated(!compareValues(prevInvestorName, newInvestorName).equals(newInvestorName));
        }
    }

    private void compareInvestorAccount(ValidationSettlementOutDto validation, SettlementOutDto previous, SettlementOutDto newItem) {
        String prevInvestorAccountId = previous.getInvestorAccount() != null ? previous.getInvestorAccount().getAccountNumber() : null;
        String newInvestorAccountId = newItem.getInvestorAccount() != null ? newItem.getInvestorAccount().getAccountNumber() : null;

        if (prevInvestorAccountId == null && newInvestorAccountId != null) {
            validation.setInvestorAccount(newInvestorAccountId);
            validation.setInvestorAccountUpdated(true);
        } else if (prevInvestorAccountId != null && newInvestorAccountId == null) {
            validation.setInvestorAccount(newInvestorAccountId);
            validation.setInvestorAccountUpdated(false);
        } else if (prevInvestorAccountId == null && newInvestorAccountId == null) {
            validation.setInvestorAccount(null);
            validation.setInvestorAccountUpdated(null);
        } else {
            validation.setInvestorAccount(compareValues(prevInvestorAccountId, newInvestorAccountId));
            validation.setInvestorAccountUpdated(!compareValues(prevInvestorAccountId, newInvestorAccountId).equals(newInvestorAccountId));
        }
    }

    private void compareBankAccount(ValidationSettlementOutDto validation, SettlementOutDto previous, SettlementOutDto newItem) {
        String prevBankAccount = previous.getBankAccount() != null ? previous.getBankAccount().getBankAccount() : null;
        String newBankAccount = newItem.getBankAccount() != null ? newItem.getBankAccount().getBankAccount() : null;

        if (prevBankAccount == null && newBankAccount != null) {
            validation.setBankAccount(newBankAccount);
            validation.setBankAccountUpdated(true);
        } else if (prevBankAccount != null && newBankAccount == null) {
            validation.setBankAccount(prevBankAccount);
            validation.setBankAccountUpdated(false);
        } else if (prevBankAccount == null && newBankAccount == null) {
            validation.setBankAccount(null);
            validation.setBankAccountUpdated(null);
        } else {
            validation.setBankAccount(compareValues(prevBankAccount, newBankAccount));
            validation.setBankAccountUpdated(!compareValues(prevBankAccount, newBankAccount).equals(newBankAccount));
        }
    }

    private void compareDepository(ValidationSettlementOutDto validation, SettlementOutDto previous, SettlementOutDto newItem) {
        String prevDepository = previous.getInvestorAccount() != null && previous.getInvestorAccount().getDepository() != null ?
                previous.getInvestorAccount().getDepository().getDescription() : null;
        String newDepository = newItem.getInvestorAccount() != null && newItem.getInvestorAccount().getDepository() != null ?
                newItem.getInvestorAccount().getDepository().getDescription() : null;

        if (prevDepository == null && newDepository != null) {
            validation.setDirectDepositorOutDto(newDepository);
            validation.setDirectDepositorOutDtoUpdated(true);
        } else if (prevDepository != null && newDepository == null) {
            validation.setDirectDepositorOutDto(prevDepository);
            validation.setDirectDepositorOutDtoUpdated(false);
        } else if (prevDepository == null && newDepository == null) {
            validation.setDirectDepositorOutDto(null);
            validation.setDirectDepositorOutDtoUpdated(null);
        } else {
            validation.setDirectDepositorOutDto(compareValues(prevDepository, newDepository));
            validation.setDirectDepositorOutDtoUpdated(!compareValues(prevDepository, newDepository).equals(newDepository));
        }
    }

    private void compareReference(ValidationSettlementOutDto validation, SettlementOutDto previous, SettlementOutDto newItem) {
        String prevReference = previous.getReference() != null ? previous.getReference() : null;
        String newReferences = newItem.getReference() != null ? newItem.getReference() : null;

        if (prevReference == null && newReferences != null) {
            validation.setReference(newReferences);
            validation.setReferenceUpdated(true);
        } else if (prevReference != null && newReferences == null) {
            validation.setReference(prevReference);
            validation.setReferenceUpdated(false);
        } else if (prevReference == null && newReferences == null) {
            validation.setReference(null);
            validation.setReferenceUpdated(null);
        } else {
            validation.setReference(compareValues(previous.getReference(), newItem.getReference()));
            validation.setReferenceUpdated(!previous.getReference().equals(newItem.getReference()));
        }
    }

    private void compareSourceQuoteType(ValidationSettlementOutDto validation, SettlementOutDto previous, SettlementOutDto newItem) {
        String prevSourceQuoteType = previous.getSourceQuoteType() != null ? previous.getSourceQuoteType().getDescription() : null;
        String newSourceQuoteType = newItem.getSourceQuoteType() != null ? newItem.getSourceQuoteType().getDescription() : null;

        if (prevSourceQuoteType == null && newSourceQuoteType != null) {
            validation.setSourceQuoteType(newSourceQuoteType);
            validation.setSourceQuoteTypeUpdated(true);
        } else if (prevSourceQuoteType != null && newSourceQuoteType == null) {
            validation.setSourceQuoteType(prevSourceQuoteType);
            validation.setSourceQuoteTypeUpdated(false);
        } else if (prevSourceQuoteType == null && newSourceQuoteType == null) {
            validation.setSourceQuoteType(null);
            validation.setSourceQuoteTypeUpdated(null);
        } else {
            validation.setSourceQuoteType(compareValues(prevSourceQuoteType, newSourceQuoteType));
            validation.setSourceQuoteTypeUpdated(!compareValues(prevSourceQuoteType, newSourceQuoteType).equals(newSourceQuoteType));
        }
    }

    private void compareCommission(ValidationSettlementOutDto validation, SettlementOutDto previous, SettlementOutDto newItem) {
        BigDecimal prevCommissionPercentage = previous.getCommissionPercentage() != null ? previous.getCommissionPercentage() : null;
        BigDecimal newCommissionPercentage = newItem.getCommissionPercentage() != null ? newItem.getCommissionPercentage() : null;

        if (prevCommissionPercentage == null && newCommissionPercentage != null) {
            validation.setCommissionPercentage(newCommissionPercentage);
            validation.setCommissionPercentageUpdated(true);
        } else if (prevCommissionPercentage != null && newCommissionPercentage == null) {
            validation.setCommissionPercentage(prevCommissionPercentage);
            validation.setCommissionPercentageUpdated(false);
        } else if (prevCommissionPercentage == null && newCommissionPercentage == null) {
            validation.setCommissionPercentage(null);
            validation.setCommissionPercentageUpdated(null);
        } else {
            validation.setCommissionPercentage(compareValues(previous.getCommissionPercentage(), newItem.getCommissionPercentage()));
            validation.setCommissionPercentageUpdated(!previous.getCommissionPercentage().equals(newItem.getCommissionPercentage()));
        }

    }

    private void compareFractionQuantity(ValidationSettlementOutDto validation, SettlementOutDto previous, SettlementOutDto newItem) {
        BigDecimal prevFractionQuantity = previous.getFractionQuantity() != null ? previous.getFractionQuantity() : null;
        BigDecimal newFractionQuantity = newItem.getFractionQuantity() != null ? newItem.getFractionQuantity() : null;

        if (prevFractionQuantity == null && newFractionQuantity != null) {
            validation.setFractionQuantity(newFractionQuantity);
            validation.setFractionQuantityUpdated(true);
        } else if (prevFractionQuantity != null && newFractionQuantity == null) {
            validation.setFractionQuantity(prevFractionQuantity);
            validation.setFractionQuantityUpdated(false);
        } else if (prevFractionQuantity == null && newFractionQuantity == null) {
            validation.setFractionQuantity(null);
            validation.setFractionQuantityUpdated(null);
        } else {
            validation.setFractionQuantity(compareValues(previous.getFractionQuantity(), newItem.getFractionQuantity()));
            validation.setFractionQuantityUpdated(!previous.getFractionQuantity().equals(newItem.getFractionQuantity()));
        }
    }

    private void compareCommissionAmount(ValidationSettlementOutDto validation, SettlementOutDto previous, SettlementOutDto newItem) {
        BigDecimal prevCommissionAmount = previous.getCommissionAmount() != null ? previous.getCommissionAmount() : null;
        BigDecimal newCommissionAmount = newItem.getCommissionAmount() != null ? newItem.getCommissionAmount() : null;

        if (prevCommissionAmount == null && newCommissionAmount != null) {
            validation.setCommissionAmount(newCommissionAmount);
            validation.setCommissionAmountUpdate(true);
        } else if (prevCommissionAmount != null && newCommissionAmount == null) {
            validation.setCommissionAmount(prevCommissionAmount);
            validation.setCommissionAmountUpdate(false);
        } else if (prevCommissionAmount == null && newCommissionAmount == null) {
            validation.setCommissionAmount(null);
            validation.setCommissionAmountUpdate(null);
        } else {
            validation.setCommissionAmount(compareValues(previous.getCommissionAmount(), newItem.getCommissionAmount()));
            validation.setCommissionAmountUpdate(!previous.getCommissionAmount().equals(newItem.getCommissionAmount()));
        }
    }

    private void compareTaxAmount(ValidationSettlementOutDto validation, SettlementOutDto previous, SettlementOutDto newItem) {
        BigDecimal prevValTaxAmount = previous.getValTaxAmount() != null ? previous.getValTaxAmount() : null;
        BigDecimal newValTaxAmount = newItem.getValTaxAmount() != null ? newItem.getValTaxAmount() : null;

        if (prevValTaxAmount == null && newValTaxAmount != null) {
            validation.setValTaxAmount(newValTaxAmount);
            validation.setValTaxAmountUpdated(true);
        } else if (prevValTaxAmount != null && newValTaxAmount == null) {
            validation.setValTaxAmount(prevValTaxAmount);
            validation.setValTaxAmountUpdated(false);
        } else if (prevValTaxAmount == null && newValTaxAmount == null) {
            validation.setValTaxAmount(null);
            validation.setValTaxAmountUpdated(null);
        } else {
            validation.setValTaxAmount(compareValues(previous.getValTaxAmount(), newItem.getValTaxAmount()));
            validation.setValTaxAmountUpdated(!previous.getValTaxAmount().equals(newItem.getValTaxAmount()));
        }
    }

    private void compareNetAmount(ValidationSettlementOutDto validation, SettlementOutDto previous, SettlementOutDto newItem) {
        BigDecimal prevNetAmount = previous.getNetAmount() != null ? previous.getNetAmount() : null;
        BigDecimal newNetAmount = newItem.getNetAmount() != null ? newItem.getNetAmount() : null;

        if (prevNetAmount == null && newNetAmount != null) {
            validation.setNetAmount(newNetAmount);
            validation.setNetAmountUpdated(true);
        } else if (prevNetAmount != null && newNetAmount == null) {
            validation.setNetAmount(prevNetAmount);
            validation.setNetAmountUpdated(false);
        } else if (prevNetAmount == null && newNetAmount == null) {
            validation.setNetAmount(null);
            validation.setNetAmountUpdated(null);
        } else {
            validation.setNetAmount(compareValues(previous.getNetAmount(), newItem.getNetAmount()));
            validation.setNetAmountUpdated(!previous.getNetAmount().equals(newItem.getNetAmount()));
        }
    }

    private void compareCustodian(ValidationSettlementOutDto validation, SettlementOutDto previous, SettlementOutDto newItem) {
        Long prevCustodianId = previous.getCustodian() != null ? previous.getCustodian().getId() : null;
        Long newCustodianId = newItem.getCustodian() != null ? newItem.getCustodian().getId() : null;

        if (prevCustodianId == null && newCustodianId == null) {
            validation.setCustodianId(null);
            validation.setCustodianIdUpdated(null);
        } else if (prevCustodianId != null && newCustodianId == null) {
            validation.setCustodianId(prevCustodianId);
            validation.setCustodianIdUpdated(false);
        } else if (prevCustodianId == null && newCustodianId != null) {
            validation.setCustodianId(newCustodianId);
            validation.setCustodianIdUpdated(true);
        } else {
            validation.setCustodianId(compareValues(prevCustodianId, newCustodianId));
            validation.setCustodianIdUpdated(!compareValues(prevCustodianId, newCustodianId).equals(newCustodianId));
        }
    }

    private void compareCustodianName(ValidationSettlementOutDto validation, SettlementOutDto previous, SettlementOutDto newItem) {
        String prevCustodianName = previous.getCustodian() != null ? previous.getCustodian().getName() : null;
        String newCustodianName = newItem.getCustodian() != null ? newItem.getCustodian().getName() : null;

        if (prevCustodianName == null && newCustodianName == null) {
            validation.setCustodianName(null);
            validation.setCustodianNameUpdated(null);
        } else if (prevCustodianName != null && newCustodianName == null) {
            validation.setCustodianName(prevCustodianName);
            validation.setCustodianNameUpdated(false);
        } else if (prevCustodianName == null && newCustodianName != null) {
            validation.setCustodianName(newCustodianName);
            validation.setCustodianNameUpdated(true);
        } else {
            validation.setCustodianName(compareValues(previous.getCustodian().getName(), newItem.getCustodian().getName()));
            validation.setCustodianNameUpdated(!compareValues(previous.getCustodian().getName(), newItem.getCustodian().getName())
                    .equals(newItem.getCustodian().getName()));
        }
    }

    private void compareFicAdministrator(ValidationSettlementOutDto validation, SettlementOutDto previous, SettlementOutDto newItem) {
        Long prevFicAdministrator = previous.getFicAdministrator() != null ? previous.getFicAdministrator().getId() : null;
        Long newFicAdministrator = newItem.getFicAdministrator() != null ? newItem.getFicAdministrator().getId() : null;

        if (prevFicAdministrator == null && newFicAdministrator != null) {
            validation.setFicAdministrator(newFicAdministrator);
            validation.setFicAdministratorUpdated(true);
        } else if (prevFicAdministrator != null && newFicAdministrator == null) {
            validation.setFicAdministrator(prevFicAdministrator);
            validation.setFicAdministratorUpdated(false);
        } else if (prevFicAdministrator == null && newFicAdministrator == null) {
            validation.setFicAdministrator(null);
            validation.setFicAdministratorUpdated(null);
        } else {
            validation.setFicAdministrator(compareValues(previous.getFicAdministrator().getId(), newItem.getFicAdministrator().getId()));
            validation.setFicAdministratorUpdated(!previous.getFicAdministrator().getId().equals(newItem.getFicAdministrator().getId()));
        }
    }

    private void compareBlockingStatus(ValidationSettlementOutDto validation, SettlementOutDto previous, SettlementOutDto newItem) {
        String prevBloquingStatus = previous.getBloquingStatus() != null ? previous.getBloquingStatus().getDescription() : null;
        String newBloquingStatus = newItem.getBloquingStatus() != null ? newItem.getBloquingStatus().getDescription() : null;

        if (prevBloquingStatus == null && newBloquingStatus != null) {
            validation.setBloquingStatus(newBloquingStatus);
            validation.setBloquingStatusUpdated(true);
        } else if (prevBloquingStatus != null && newBloquingStatus == null) {
            validation.setBloquingStatus(prevBloquingStatus);
            validation.setBloquingStatusUpdated(false);
        } else if (prevBloquingStatus == null && newBloquingStatus == null) {
            validation.setBloquingStatus(null);
            validation.setBloquingStatusUpdated(null);
        } else {
            validation.setBloquingStatus(compareValues(previous.getBloquingStatus().getDescription(),
                    newItem.getBloquingStatus().getDescription()));
            validation.setBloquingStatusUpdated(!previous.getBloquingStatus().getDescription()
                    .equals(newItem.getBloquingStatus().getDescription()));
        }
    }

    private <T> T compareValues(T previousValue, T newValue) {
        return newValue != null ? newValue : previousValue;
    }

    private void deleteSettlementPendingStatusHistoryByTradeIdAndSideId(Long tradeId, String sideId) {
        settlementPendingStatusHistoryRepository.deleteByTradeIdAndSideId(tradeId, sideId);
    }

    private void deleteSettlementPendingByTradeIdAndSideId(Long tradeId, String sideId) {
        settlementPendingRepository.deleteByTradeIdAndSideId(tradeId, sideId);
    }

    private TradeEntity validateTrade(Long tradeId) {
        return tradeRepository.findById(tradeId)
                .orElseThrow(() -> new ServiceException(ErrorCode.TRADE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private SideEntity validateSide(String sideId) {
        return sideRepository.findById(sideId)
                .orElseThrow(() -> new ServiceException(ErrorCode.SIDE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private InvestorAccountEntity validateInvestorAccount(Long investorAccountId) {
        return investorAccountRepository.findById(investorAccountId)
                .orElseThrow(() -> new ServiceException(ErrorCode.INVESTOR_ACCOUNT_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private ParticipantAccountEntity validateParticipantAccount(Long participantAccountId) {
        return participantAccountRepository.findById(participantAccountId)
                .orElseThrow(() -> new ServiceException(ErrorCode.PARTICIPANT_ACCOUNT_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private StatusEntity validateStatus(Long statusId) {
        return statusRepository.findById(statusId)
                .orElseThrow(() -> new ServiceException(ErrorCode.STATUS_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private TypeEntity validateType(Long typeId) {
        return typeRepository.findById(typeId)
                .orElseThrow(() -> new ServiceException(ErrorCode.TYPE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private ParticipantEntity validateParticipant(Long participantId) {
        return participantRepository.findById(participantId)
                .orElseThrow(() -> new ServiceException(ErrorCode.PARTICIPANT_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private BankAccountEntity validateBankAccount(Long bankAccountId) {
        return bankAccountRepository.findById(bankAccountId)
                .orElseThrow(() -> new ServiceException(ErrorCode.BANK_ACCOUNT_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private ParticipantBankAccountEntity validateParticipantBankAccount(Long bankAccountId) {
        return participantBankAccountRepository.findById(bankAccountId)
                .orElseThrow(() -> new ServiceException(ErrorCode.PARTICIPANT_BANK_ACCOUNT_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private UserNuboEntity getUserNubo(String userName) {
        return userNuboRepository.findByUserName(userName)
                .orElseThrow(() -> new ServiceException(ErrorCode.USER_NOT_FOUND, HttpStatus.NOT_FOUND));
    }



}

```

## src/main/java/com/nubo/operations/special/fractionation/api/service/impl/FractionationServiceImpl.java

```java
package com.nubo.operations.special.fractionation.api.service.impl;

import com.nubo.operations.special.fractionation.api.application.properties.PropertiesConfig;
import com.nubo.operations.special.fractionation.api.application.properties.PropertiesContext;
import com.nubo.operations.special.fractionation.api.application.util.ApplicationUtils;
import com.nubo.operations.special.fractionation.api.client.special.operation.calculation.models.dto.request.SettleAccountsInDto;
import com.nubo.operations.special.fractionation.api.client.special.operation.calculation.models.dto.response.SettleAccountsOutDto;
import com.nubo.operations.special.fractionation.api.client.special.operation.calculation.service.OperationSpecialCalculationClient;
import com.nubo.operations.special.fractionation.api.exception.ServiceException;
import com.nubo.operations.special.fractionation.api.exception.error.ErrorCode;
import com.nubo.operations.special.fractionation.api.helpers.MapperUtil;
import com.nubo.operations.special.fractionation.api.models.dto.request.AssignmentInDto;
import com.nubo.operations.special.fractionation.api.models.dto.request.FractionationInDto;
import com.nubo.operations.special.fractionation.api.models.dto.response.SettlementOutDto;
import com.nubo.operations.special.fractionation.api.models.entity.BankAccountEntity;
import com.nubo.operations.special.fractionation.api.models.entity.InvestorAccountEntity;
import com.nubo.operations.special.fractionation.api.models.entity.ParticipantAccountEntity;
import com.nubo.operations.special.fractionation.api.models.entity.ParticipantBankAccountEntity;
import com.nubo.operations.special.fractionation.api.models.entity.ParticipantEntity;
import com.nubo.operations.special.fractionation.api.models.entity.SettlementEntity;
import com.nubo.operations.special.fractionation.api.models.entity.SettlementLogEntity;
import com.nubo.operations.special.fractionation.api.models.entity.SettlementStatusHistoryEntity;
import com.nubo.operations.special.fractionation.api.models.entity.SideEntity;
import com.nubo.operations.special.fractionation.api.models.entity.StatusEntity;
import com.nubo.operations.special.fractionation.api.models.entity.TaxesEntity;
import com.nubo.operations.special.fractionation.api.models.entity.TradeEntity;
import com.nubo.operations.special.fractionation.api.models.entity.TypeEntity;
import com.nubo.operations.special.fractionation.api.models.entity.UserNuboEntity;
import com.nubo.operations.special.fractionation.api.models.enums.SideEnum;
import com.nubo.operations.special.fractionation.api.models.enums.VersionApiEnum;
import com.nubo.operations.special.fractionation.api.repository.BankAccountRepository;
import com.nubo.operations.special.fractionation.api.repository.InvestorAccountRepository;
import com.nubo.operations.special.fractionation.api.repository.ParticipantAccountRepository;
import com.nubo.operations.special.fractionation.api.repository.ParticipantBankAccountRepository;
import com.nubo.operations.special.fractionation.api.repository.ParticipantRepository;
import com.nubo.operations.special.fractionation.api.repository.SettlementLogRepository;
import com.nubo.operations.special.fractionation.api.repository.SettlementRepository;
import com.nubo.operations.special.fractionation.api.repository.SettlementStatusHistoryRepository;
import com.nubo.operations.special.fractionation.api.repository.SideRepository;
import com.nubo.operations.special.fractionation.api.repository.StatusRepository;
import com.nubo.operations.special.fractionation.api.repository.TaxesRepository;
import com.nubo.operations.special.fractionation.api.repository.TradeRepository;
import com.nubo.operations.special.fractionation.api.repository.TypeRepository;
import com.nubo.operations.special.fractionation.api.repository.UserNuboRepository;
import com.nubo.operations.special.fractionation.api.service.FractionationService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.List;
import java.util.Objects;
import java.util.stream.IntStream;

@Service
@RequiredArgsConstructor
@Slf4j
public class FractionationServiceImpl implements FractionationService {

    private final TradeRepository tradeRepository;
    private final SideRepository sideRepository;
    private final SettlementRepository settlementRepository;
    private final InvestorAccountRepository investorAccountRepository;
    private final ParticipantAccountRepository participantAccountRepository;
    private final StatusRepository statusRepository;
    private final TypeRepository typeRepository;
    private final SettlementStatusHistoryRepository settlementStatusHistoryRepository;
    private final ParticipantRepository participantRepository;
    private final BankAccountRepository bankAccountRepository;
    private final SettlementLogRepository settlementLogRepository;
    private final UserNuboRepository userNuboRepository;
    private final TaxesRepository taxesRepository;
    private final ParticipantBankAccountRepository participantBankAccountRepository;
    private final OperationSpecialCalculationClient operationSpecialCalculationClient;
    private final PropertiesConfig propertiesConfig;

    @Override
    @Transactional
    public List<SettlementOutDto> createFractions(Long tradeId, String sideId, Long statusId, List<FractionationInDto> fractionationInDtoList) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return createFractionsV1(tradeId, sideId, statusId, fractionationInDtoList);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<SettlementOutDto> createFractionsV1(Long tradeId, String sideId, Long statusId, List<FractionationInDto> fractionationInDtoList) {
        log.info("Start method createFractionsV1 with tradeId -> {}, sideId -> {}, statusId -> {}", tradeId, sideId, statusId);

        TradeEntity tradeEntity = validateTrade(tradeId);
        SideEntity sideEntity = validateSide(sideId);
        StatusEntity statusEntity = validateStatus(statusId);

        this.deleteSettlementStatusHistoryByTradeIdAndSideId(tradeId, sideId);
        this.deleteSettlementByTradeIdAndSideId(tradeId, sideId);

        List<SettlementEntity> settlementEntityList = createFractionSettlementEntity(tradeEntity,
                sideEntity, statusEntity, fractionationInDtoList);
        settlementRepository.saveAll(settlementEntityList);

        this.updateTradeAssignmentMarkAndFractionalMark(fractionationInDtoList.size(), tradeEntity, sideEntity);

        this.updateTradeStatus(tradeEntity, statusEntity);

        this.createSettlementStatusHistory(settlementEntityList, statusEntity);

        this.createSettlementLog(settlementEntityList, null, statusEntity);

        List<SettlementOutDto> settlementOutDtoList = settlementEntityList.stream()
                .map(MapperUtil::settlementEntityToSettlementOutDto)
                .toList();

        log.info("End method createFractionsV1, settlement -> {}", settlementOutDtoList);

        return settlementOutDtoList;
    }

    @Override
    @Transactional
    public List<SettlementOutDto> updateAssignment(Long tradeId, String sideId, Long statusId, List<AssignmentInDto> assignmentInDtoList) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return updateAssignmentV1(tradeId, sideId, statusId, assignmentInDtoList);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<SettlementOutDto> updateAssignmentV1(Long tradeId, String sideId, Long statusId, List<AssignmentInDto> assignmentInDtoList) {
        log.info("Start method updateAssignmentV1 with tradeId -> {}, sideId -> {}, statusId -> {}", tradeId, sideId, statusId);

        TradeEntity tradeEntity = validateTrade(tradeId);
        SideEntity sideEntity = validateSide(sideId);
        StatusEntity statusEntity = validateStatus(statusId);

        List<SettlementEntity> settlementEntityBeforeList = findSettlementEntityBefore(assignmentInDtoList, tradeEntity, sideEntity);

        List<SettlementEntity> settlementEntityAfterList = this.updateAssignmentSettlement(tradeEntity, sideEntity, statusEntity, assignmentInDtoList);
        settlementRepository.saveAll(settlementEntityAfterList);

        this.updateTradeStatus(tradeEntity, statusEntity);

        this.createSettlementStatusHistory(settlementEntityAfterList, statusEntity);

        this.createSettlementLog(settlementEntityBeforeList, settlementEntityAfterList, statusEntity);

        List<SettlementOutDto> settlementOutDtoList = settlementEntityAfterList.stream().map(MapperUtil::settlementEntityToSettlementOutDto).toList();

        log.info("End method updateAssignmentV1, settlement -> {}", settlementOutDtoList);

        return settlementOutDtoList;
    }

    private List<SettlementEntity> createFractionSettlementEntity(
            TradeEntity tradeEntity, SideEntity sideEntity, StatusEntity statusEntity, List<FractionationInDto> fractionationInDtoList) {
        List<Integer> fractionNumberList;
        if (fractionationInDtoList.size() > 1) {
            fractionNumberList = IntStream.rangeClosed(1, fractionationInDtoList.size())
                    .boxed()
                    .toList();
        } else {
            fractionNumberList = List.of(1);
        }
        return IntStream.range(0, fractionationInDtoList.size())
                .mapToObj(i -> createSettlementEntity(tradeEntity, sideEntity, statusEntity,
                        fractionNumberList.get(i), fractionationInDtoList.get(i)))
                .toList();
    }

    private SettlementEntity createSettlementEntity(TradeEntity tradeEntity, SideEntity sideEntity,
                                                    StatusEntity statusEntity, Integer fraction, FractionationInDto fractionationInDto) {

        TaxesEntity taxesEntity = taxesRepository.findByCountryId(tradeEntity.getCountry().getId())
                .orElseThrow(() -> new ServiceException(ErrorCode.TAXES_NOT_FOUND, HttpStatus.NOT_FOUND));

        SettleAccountsInDto settleAccountsInDto = SettleAccountsInDto.builder()
                .quantity(fractionationInDto.getFractionQuantity())
                .price(tradeEntity.getPrice())
                .commission(fractionationInDto.getCommissionPercentage())
                .valTax(taxesEntity.getValue())
                .sideId(sideEntity.getId())
                .build();
        SettleAccountsOutDto settleAccountsOutDto = operationSpecialCalculationClient.getSettleAccounts(settleAccountsInDto);
        SettlementEntity settlementEntity = SettlementEntity.builder()
                .trade(tradeEntity)
                .fraction(fraction)
                .side(sideEntity)
                .status(statusEntity)
                .investor(ObjectUtils.isEmpty(fractionationInDto.getInvestorAccountId()) ?
                        null : validateInvestorAccount(fractionationInDto.getInvestorAccountId()).getInvestor())
                .investorAccount(ObjectUtils.isEmpty(fractionationInDto.getInvestorAccountId()) ?
                        null : validateInvestorAccount(fractionationInDto.getInvestorAccountId()))
                .participantAccount(ObjectUtils.isEmpty(fractionationInDto.getParticipantAccountId()) ?
                        null : validateParticipantAccount(fractionationInDto.getParticipantAccountId()))
                .fiduciarySpecialist(fractionationInDto.getFiduciarySpecialist())
                .directDepositor(validateParticipant(fractionationInDto.getDirectDepositorId()))
                .bankAccount(ObjectUtils.isEmpty(fractionationInDto.getBankAccountId()) ?
                        null : validateBankAccount(fractionationInDto.getBankAccountId()))
                .participantBankAccount(ObjectUtils.isEmpty(fractionationInDto.getParticipantBankAccountId()) ?
                        null : validateParticipantBankAccount(fractionationInDto.getParticipantBankAccountId()))
                .sourceQuoteType(validateType(fractionationInDto.getSourceQuoteTypeId()))
                .fractionQuantity(fractionationInDto.getFractionQuantity())
                .reference(fractionationInDto.getReference())
                .commissionPercentage(fractionationInDto.getCommissionPercentage())
                .valTax(taxesEntity.getValue())
                .tradingSystem(tradeEntity.getTradingSystem())
                .fractionVolume(tradeEntity.getPrice().multiply(fractionationInDto.getFractionQuantity()))
                .fractionVolumeLocalPrice(settleAccountsOutDto.getAmount())
                .commissionAmount(settleAccountsOutDto.getCommissionAmount())
                .valTaxAmount(settleAccountsOutDto.getValTaxAmount())
                .netAmount(settleAccountsOutDto.getNetAmount())
                .settlementAmount(settleAccountsOutDto.getTransferValue())
                .fractionVolumeDvd(
                        tradeEntity.getQuantity() != null
                                && tradeEntity.getQuantity().compareTo(BigDecimal.ZERO) != 0
                                ? fractionationInDto.getFractionQuantity()
                                .divide(tradeEntity.getQuantity(), 4, RoundingMode.HALF_UP)
                                .multiply(tradeEntity.getVolumeDvd())
                                .setScale(4, RoundingMode.HALF_UP)
                                : BigDecimal.ZERO
                )
                .fractionVolumeDvp(
                        tradeEntity.getQuantity() != null
                                && tradeEntity.getQuantity().compareTo(BigDecimal.ZERO) != 0
                                ? fractionationInDto.getFractionQuantity()
                                .divide(tradeEntity.getQuantity(), 4, RoundingMode.HALF_UP)
                                .multiply(tradeEntity.getVolumeDvp())
                                .setScale(4, RoundingMode.HALF_UP)
                                : BigDecimal.ZERO
                )
                .fractionVolumeLp(
                        tradeEntity.getQuantity() != null
                                && tradeEntity.getQuantity().compareTo(BigDecimal.ZERO) != 0
                                ? fractionationInDto.getFractionQuantity()
                                .divide(tradeEntity.getQuantity(), 4, RoundingMode.HALF_UP)
                                .multiply(tradeEntity.getVolumeLp())
                                .setScale(4, RoundingMode.HALF_UP)
                                : BigDecimal.ZERO
                )
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyIp(PropertiesContext.getClientIp())
                .lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyDate(PropertiesContext.getClientDatetime())
                .build();
        if(settlementEntity.getInvestor().getTaxExemp()){
            settlementEntity.setValTaxAmount(BigDecimal.valueOf(0));
        }
        return settlementEntity;
    }

    private void updateTradeAssignmentMarkAndFractionalMark(Integer numberFraction, TradeEntity tradeEntity,
                                                            SideEntity sideEntity) {
        boolean isBuySide = SideEnum.BUY.getValue().equals(sideEntity.getId());
        boolean isSellSide = SideEnum.SELL.getValue().equals(sideEntity.getId());

        boolean update = false;

        if (isBuySide) {
            tradeEntity.setAssignmentMarkBuy(true);
            update = true;
        }

        if (isSellSide) {
            tradeEntity.setAssignmentMarkSell(true);
            update = true;
        }

        if (numberFraction > 1) {
            if (isBuySide) {
                tradeEntity.setFractionalMarkBuy(true);
            } else if (isSellSide) {
                tradeEntity.setFractionalMarkSell(true);
            }
        } else if (numberFraction == 1) {
            if (isBuySide) {
                tradeEntity.setFractionalMarkBuy(false);
            } else if (isSellSide) {
                tradeEntity.setFractionalMarkSell(false);
            }
        }
        if (update) {
            tradeEntity.setLastModifyApplication(propertiesConfig.getApiName());
            tradeEntity.setLastModifyIp(PropertiesContext.getClientIp());
            tradeEntity.setLastModifyUser(PropertiesContext.getClientUser());
            tradeEntity.setLastModifyDate(PropertiesContext.getClientDatetime());
            tradeRepository.save(tradeEntity);
        }
    }

    private void updateTradeStatus(TradeEntity tradeEntity, StatusEntity statusEntity) {
        tradeEntity.setStatus(statusEntity);
        tradeEntity.setLastModifyApplication(propertiesConfig.getApiName());
        tradeEntity.setLastModifyIp(PropertiesContext.getClientIp());
        tradeEntity.setLastModifyUser(PropertiesContext.getClientUser());
        tradeEntity.setLastModifyDate(PropertiesContext.getClientDatetime());
        tradeRepository.save(tradeEntity);
    }

    private List<SettlementEntity> updateAssignmentSettlement(TradeEntity tradeEntity, SideEntity sideEntity,
                                                              StatusEntity statusEntity, List<AssignmentInDto> assignmentInDtoList) {
        return assignmentInDtoList.stream()
                .map(assignmentInDto -> updateAssignmentSettlementEntity(tradeEntity, sideEntity, statusEntity, assignmentInDto)).toList();
    }

    private SettlementEntity updateAssignmentSettlementEntity(TradeEntity tradeEntity, SideEntity sideEntity,
                                                              StatusEntity statusEntity, AssignmentInDto assignmentInDto) {

        SettlementEntity settlementEntity = findByTradeIdAndFractionAndSideId(tradeEntity.getId(),
                assignmentInDto.getFraction(), sideEntity.getId());

        SettleAccountsInDto settleAccountsInDto = SettleAccountsInDto.builder()
                .quantity(assignmentInDto.getFractionQuantity())
                .price(settlementEntity.getTrade().getLocalCurrencyPrice())
                .commission(assignmentInDto.getCommissionPercentage())
                .valTax(assignmentInDto.getValTax())
                .sideId(settlementEntity.getSide().getId())
                .build();
        SettleAccountsOutDto settleAccountsOutDto = operationSpecialCalculationClient.getSettleAccounts(settleAccountsInDto);

        settlementEntity.setInvestor(ObjectUtils.isEmpty(assignmentInDto.getInvestorAccountId()) ?
                null : validateInvestorAccount(assignmentInDto.getInvestorAccountId()).getInvestor());
        settlementEntity.setInvestorAccount(ObjectUtils.isEmpty(assignmentInDto.getInvestorAccountId()) ?
                null : validateInvestorAccount(assignmentInDto.getInvestorAccountId()));
        settlementEntity.setParticipantAccount(ObjectUtils.isEmpty(assignmentInDto.getParticipantAccountId()) ?
                null : validateParticipantAccount(assignmentInDto.getParticipantAccountId()));
        settlementEntity.setFiduciarySpecialist(assignmentInDto.getFiduciarySpecialist());
        settlementEntity.setBankAccount(ObjectUtils.isEmpty(assignmentInDto.getBankAccountId()) ?
                settlementEntity.getBankAccount() : validateBankAccount(assignmentInDto.getBankAccountId()));
        settlementEntity.setParticipantBankAccount(ObjectUtils.isEmpty(assignmentInDto.getParticipantBankAccountId()) ?
                null : validateParticipantBankAccount(assignmentInDto.getParticipantBankAccountId()));
        settlementEntity.setSourceQuoteType(validateType(assignmentInDto.getSourceQuoteTypeId()));
        settlementEntity.setReference(assignmentInDto.getReference());
        settlementEntity.setFractionQuantity(assignmentInDto.getFractionQuantity());
        settlementEntity.setCommissionPercentage(assignmentInDto.getCommissionPercentage());
        settlementEntity.setValTax(assignmentInDto.getValTax());
        settlementEntity.setStatus(statusEntity);
        settlementEntity.setFractionVolume(tradeEntity.getPrice().multiply(assignmentInDto.getFractionQuantity()));
        settlementEntity.setFractionVolumeLocalPrice(settleAccountsOutDto.getAmount());
        settlementEntity.setCommissionAmount(settleAccountsOutDto.getCommissionAmount());
        settlementEntity.setValTaxAmount(settleAccountsOutDto.getValTaxAmount());
        settlementEntity.setNetAmount(settleAccountsOutDto.getNetAmount());
        settlementEntity.setSettlementAmount(settleAccountsOutDto.getTransferValue());
        settlementEntity.setLastModifyApplication(propertiesConfig.getApiName());
        settlementEntity.setLastModifyIp(PropertiesContext.getClientIp());
        settlementEntity.setLastModifyUser(PropertiesContext.getClientUser());
        settlementEntity.setLastModifyDate(PropertiesContext.getClientDatetime());

        return settlementEntity;
    }

    private void createSettlementStatusHistory(List<SettlementEntity> settlementEntityList, StatusEntity statusEntity) {
        List<SettlementStatusHistoryEntity> settlementStatusHistoryEntityList = settlementEntityList.stream()
                .map(settlementEntity ->
                        SettlementStatusHistoryEntity.builder()
                                .trade(settlementEntity.getTrade())
                                .fraction(settlementEntity.getFraction())
                                .side(settlementEntity.getSide())
                                .time(PropertiesContext.getClientDatetime())
                                .status(statusEntity)
                                .lastModifyApplication(propertiesConfig.getApiName())
                                .lastModifyIp(PropertiesContext.getClientIp())
                                .lastModifyUser(PropertiesContext.getClientUser())
                                .lastModifyDate(PropertiesContext.getClientDatetime())
                                .build())
                .toList();

        settlementStatusHistoryRepository.saveAll(settlementStatusHistoryEntityList);
    }

    private void createSettlementLog(List<SettlementEntity> settlementEntityBeforeList,
                                     List<SettlementEntity> settlementEntityAfterList,
                                     StatusEntity statusEntity) {
        List<SettlementLogEntity> settlementLogEntityList = settlementEntityBeforeList.stream()
                .map(settlementBeforeEntity ->
                        SettlementLogEntity.builder()
                                .trade(settlementBeforeEntity.getTrade())
                                .fraction(settlementBeforeEntity.getFraction())
                                .side(settlementBeforeEntity.getSide())
                                .time(PropertiesContext.getClientDatetime())
                                .dataBefore(ApplicationUtils.convertObjectMapperToJson(MapperUtil.settlementEntityToFractionOutDto(settlementBeforeEntity)))
                                .dataAfter(ObjectUtils.isEmpty(settlementEntityAfterList) ? null :
                                        ApplicationUtils.convertObjectMapperToJson(MapperUtil.settlementEntityToFractionOutDto(settlementEntityAfterList.stream()
                                                .filter(settlementAfterEntity ->
                                                        settlementBeforeEntity.getTrade().getId().equals(settlementAfterEntity.getTrade().getId()) &&
                                                                settlementBeforeEntity.getFraction().equals(settlementAfterEntity.getFraction()) &&
                                                                settlementBeforeEntity.getSide().getId().equals(settlementAfterEntity.getSide().getId())).findFirst().get())))
                                .status(statusEntity)
                                .userAssignment(getUserNubo(PropertiesContext.getClientUser()))
                                .lastModifyApplication(propertiesConfig.getApiName())
                                .lastModifyIp(PropertiesContext.getClientIp())
                                .lastModifyUser(PropertiesContext.getClientUser())
                                .lastModifyDate(PropertiesContext.getClientDatetime())
                                .build())
                .toList();

        settlementLogRepository.saveAll(settlementLogEntityList);
    }

    private List<SettlementEntity> findSettlementEntityBefore(List<AssignmentInDto> assignmentInDtoList,
                                                              TradeEntity tradeEntity, SideEntity sideEntity) {
        return assignmentInDtoList.stream()
                .map(assignmentInDto -> {
                            SettlementEntity settlementEntityCopy = new SettlementEntity();
                            BeanUtils.copyProperties(findByTradeIdAndFractionAndSideId(tradeEntity.getId(),
                                    assignmentInDto.getFraction(), sideEntity.getId()), settlementEntityCopy);
                            return settlementEntityCopy;
                        }
                ).toList();
    }

    private void deleteSettlementStatusHistoryByTradeIdAndSideId(Long tradeId, String sideId) {
        settlementStatusHistoryRepository.deleteByTradeIdAndSideId(tradeId, sideId);
    }

    private void deleteSettlementByTradeIdAndSideId(Long tradeId, String sideId) {
        settlementRepository.deleteByTradeIdAndSideId(tradeId, sideId);
    }

    private TradeEntity validateTrade(Long tradeId) {
        return tradeRepository.findById(tradeId)
                .orElseThrow(() -> new ServiceException(ErrorCode.TRADE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private SideEntity validateSide(String sideId) {
        return sideRepository.findById(sideId)
                .orElseThrow(() -> new ServiceException(ErrorCode.SIDE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private InvestorAccountEntity validateInvestorAccount(Long investorAccountId) {
        return investorAccountRepository.findById(investorAccountId)
                .orElseThrow(() -> new ServiceException(ErrorCode.INVESTOR_ACCOUNT_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private ParticipantAccountEntity validateParticipantAccount(Long participantAccountId) {
        return participantAccountRepository.findById(participantAccountId)
                .orElseThrow(() -> new ServiceException(ErrorCode.PARTICIPANT_ACCOUNT_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private StatusEntity validateStatus(Long statusId) {
        return statusRepository.findById(statusId)
                .orElseThrow(() -> new ServiceException(ErrorCode.STATUS_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private TypeEntity validateType(Long typeId) {
        if(typeId != null){
        return typeRepository.findById(typeId)
                .orElseThrow(() -> new ServiceException(ErrorCode.TYPE_NOT_FOUND, HttpStatus.NOT_FOUND));}
        else{
            return null;
        }
    }

    private ParticipantEntity validateParticipant(Long participantId) {
        return participantRepository.findById(participantId)
                .orElseThrow(() -> new ServiceException(ErrorCode.PARTICIPANT_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private BankAccountEntity validateBankAccount(Long bankAccountId) {
        return bankAccountRepository.findById(bankAccountId)
                .orElseThrow(() -> new ServiceException(ErrorCode.BANK_ACCOUNT_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private ParticipantBankAccountEntity validateParticipantBankAccount(Long bankAccountId) {
        return participantBankAccountRepository.findById(bankAccountId)
                .orElseThrow(() -> new ServiceException(ErrorCode.PARTICIPANT_BANK_ACCOUNT_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private SettlementEntity findByTradeIdAndFractionAndSideId(Long tradeId, Integer fraction, String sideId) {
        return settlementRepository.findByTradeIdAndFractionAndSideId(tradeId,
                        fraction, sideId)
                .orElseThrow(() -> new ServiceException(ErrorCode.SETTLEMENT_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private UserNuboEntity getUserNubo(String userName) {
        return userNuboRepository.findByUserName(userName)
                .orElseThrow(() -> new ServiceException(ErrorCode.USER_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

}


```

## src/main/java/com/nubo/operations/special/fractionation/api/service/impl/FractionationSpecialSettlementServiceImpl.java

```java
package com.nubo.operations.special.fractionation.api.service.impl;

import com.nubo.operations.special.fractionation.api.application.properties.PropertiesConfig;
import com.nubo.operations.special.fractionation.api.application.properties.PropertiesContext;
import com.nubo.operations.special.fractionation.api.exception.ServiceException;
import com.nubo.operations.special.fractionation.api.exception.error.ErrorCode;
import com.nubo.operations.special.fractionation.api.helpers.MapperUtil;
import com.nubo.operations.special.fractionation.api.models.dto.request.AssignmentSpecialSettlementInDto;
import com.nubo.operations.special.fractionation.api.models.dto.request.FractionSpecialSettlementInDto;
import com.nubo.operations.special.fractionation.api.models.dto.response.SpecialSettlementOutDto;
import com.nubo.operations.special.fractionation.api.models.entity.BankAccountEntity;
import com.nubo.operations.special.fractionation.api.models.entity.InvestorAccountEntity;
import com.nubo.operations.special.fractionation.api.models.entity.SideEntity;
import com.nubo.operations.special.fractionation.api.models.entity.SpecialSettlementEntity;
import com.nubo.operations.special.fractionation.api.models.entity.SpecialTradeEntity;
import com.nubo.operations.special.fractionation.api.models.entity.SpecialTradeStatusHistoryEntity;
import com.nubo.operations.special.fractionation.api.models.entity.StatusEntity;
import com.nubo.operations.special.fractionation.api.models.enums.SideEnum;
import com.nubo.operations.special.fractionation.api.models.enums.StatusEnum;
import com.nubo.operations.special.fractionation.api.models.enums.VersionApiEnum;
import com.nubo.operations.special.fractionation.api.repository.BankAccountRepository;
import com.nubo.operations.special.fractionation.api.repository.InvestorAccountRepository;
import com.nubo.operations.special.fractionation.api.repository.SideRepository;
import com.nubo.operations.special.fractionation.api.repository.SpecialSettlementRepository;
import com.nubo.operations.special.fractionation.api.repository.SpecialTradeRepository;
import com.nubo.operations.special.fractionation.api.repository.SpecialTradeStatusHistoryRepository;
import com.nubo.operations.special.fractionation.api.repository.StatusRepository;
import com.nubo.operations.special.fractionation.api.service.FractionationSpecialSettlementService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;

import java.util.List;
import java.util.Objects;
import java.util.stream.IntStream;

@Service
@RequiredArgsConstructor
@Slf4j
public class FractionationSpecialSettlementServiceImpl implements FractionationSpecialSettlementService {

    private final SideRepository sideRepository;
    private final InvestorAccountRepository investorAccountRepository;
    private final StatusRepository statusRepository;
    private final SpecialSettlementRepository specialSettlementRepository;
    private final SpecialTradeStatusHistoryRepository specialTradeStatusHistoryRepository;
    private final BankAccountRepository bankAccountRepository;
    private final SpecialTradeRepository specialTradeRepository;
    private final PropertiesConfig propertiesConfig;

    @Override
    @Transactional
    public List<SpecialSettlementOutDto> createFractions(Long specialTradeId,
                                                         List<FractionSpecialSettlementInDto> fractionSpecialSettlementInDtoList) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return createFractionsV1(specialTradeId, fractionSpecialSettlementInDtoList);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<SpecialSettlementOutDto> createFractionsV1(Long specialTradeId,
                                                            List<FractionSpecialSettlementInDto> fractionSpecialSettlementInDtoList) {
        log.info("Start method createFractionsV1 with specialTradeId -> {}", specialTradeId);

        SpecialTradeEntity specialTradeEntity = validateSpecialTrade(specialTradeId);
        SideEntity sideEntity = validateSide(SideEnum.BUY.getValue());
        StatusEntity statusEntity = validateStatus(StatusEnum.ASSIGNED.getValue());

        this.deleteSpecialTradeStatusHistoryBySpecialTradeId(specialTradeEntity.getId());
        this.deleteSpecialSettlementBySpecialTradeIdAndSideId(specialTradeEntity.getId(), sideEntity.getId());

        List<SpecialSettlementEntity> specialSettlementEntityList = createFractionSpecialSettlementEntity(specialTradeEntity,
                sideEntity, fractionSpecialSettlementInDtoList);
        specialSettlementRepository.saveAll(specialSettlementEntityList);

        updateSpecialTradeFractionalMark(fractionSpecialSettlementInDtoList.size(), specialTradeEntity);

        updateSpecialTradeStatus(specialTradeEntity, statusEntity);

        createSpecialTradeStatusHistory(specialTradeEntity, statusEntity);

        List<SpecialSettlementOutDto> specialSettlementOutDtoList = specialSettlementEntityList.stream()
                .map(MapperUtil::specialSettlementEntityToSpecialSettlementOutDto)
                .toList();

        log.info("End method createFractionsV1, specialSettlementOutDtoList -> {}", specialSettlementOutDtoList);

        return specialSettlementOutDtoList;
    }

    @Override
    @Transactional
    public List<SpecialSettlementOutDto> updateAssignment(Long specialTradeId,
                                                          List<AssignmentSpecialSettlementInDto> assignmentSpecialSettlementInDtoList) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return updateAssignmentV1(specialTradeId, assignmentSpecialSettlementInDtoList);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<SpecialSettlementOutDto> updateAssignmentV1(Long specialTradeId,
                                                             List<AssignmentSpecialSettlementInDto> assignmentSpecialSettlementInDtoList) {
        log.info("Start method updateAssignmentV1 with specialTradeId -> {}", specialTradeId);

        SpecialTradeEntity specialTradeEntity = validateSpecialTrade(specialTradeId);
        SideEntity sideEntity = validateSide(SideEnum.BUY.getValue());
        StatusEntity statusEntity = validateStatus(StatusEnum.ASSIGNED.getValue());

        List<SpecialSettlementEntity> specialSettlementEntityList =
                this.updateAssignmentSpecialSettlement(specialTradeEntity, sideEntity, assignmentSpecialSettlementInDtoList);
        specialSettlementRepository.saveAll(specialSettlementEntityList);

        createSpecialTradeStatusHistory(specialTradeEntity, statusEntity);

        List<SpecialSettlementOutDto> specialSettlementOutDtoList = specialSettlementEntityList.stream()
                .map(MapperUtil::specialSettlementEntityToSpecialSettlementOutDto).toList();

        log.info("End method updateAssignmentV1, settlement -> {}", specialSettlementOutDtoList);

        return specialSettlementOutDtoList;
    }

    private List<SpecialSettlementEntity> createFractionSpecialSettlementEntity(
            SpecialTradeEntity specialTradeEntity, SideEntity sideEntity,
            List<FractionSpecialSettlementInDto> fractionSpecialSettlementInDtoList) {
        List<Integer> fractionNumberList;
        if (fractionSpecialSettlementInDtoList.size() > 1) {
            fractionNumberList = IntStream.rangeClosed(1, fractionSpecialSettlementInDtoList.size())
                    .boxed()
                    .toList();
        } else {
            fractionNumberList = List.of(0);
        }
        return IntStream.range(0, fractionSpecialSettlementInDtoList.size())
                .mapToObj(i -> createSpecialSettlementEntity(specialTradeEntity, sideEntity,
                        fractionNumberList.get(i), fractionSpecialSettlementInDtoList.get(i)))
                .toList();
    }

    private SpecialSettlementEntity createSpecialSettlementEntity(SpecialTradeEntity specialTradeEntity, SideEntity sideEntity,
                                                                  Integer fraction, FractionSpecialSettlementInDto fractionSpecialSettlementInDto) {
        return SpecialSettlementEntity.builder()
                .specialTrade(specialTradeEntity)
                .fraction(fraction)
                .side(sideEntity)
                .investor(ObjectUtils.isEmpty(fractionSpecialSettlementInDto.getInvestorAccountId()) ?
                        null : validateInvestorAccount(fractionSpecialSettlementInDto.getInvestorAccountId()).getInvestor())
                .investorAccount(ObjectUtils.isEmpty(fractionSpecialSettlementInDto.getInvestorAccountId()) ?
                        null : validateInvestorAccount(fractionSpecialSettlementInDto.getInvestorAccountId()))
                .bankAccount(ObjectUtils.isEmpty(fractionSpecialSettlementInDto.getBankAccountId()) ?
                        null : validateBankAccount(fractionSpecialSettlementInDto.getBankAccountId()))
                .commissionPercentage(fractionSpecialSettlementInDto.getCommissionPercentage())
                .fractionPercentage(fractionSpecialSettlementInDto.getFractionPercentage())
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyIp(PropertiesContext.getClientIp())
                .lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyDate(PropertiesContext.getClientDatetime())
                .build();
    }

    private void updateSpecialTradeFractionalMark(Integer numberFraction, SpecialTradeEntity specialTradeEntity) {
        specialTradeEntity.setFractionalMark(numberFraction > 1);
        specialTradeEntity.setLastModifyApplication(propertiesConfig.getApiName());
        specialTradeEntity.setLastModifyIp(PropertiesContext.getClientIp());
        specialTradeEntity.setLastModifyUser(PropertiesContext.getClientUser());
        specialTradeEntity.setLastModifyDate(PropertiesContext.getClientDatetime());
        specialTradeRepository.save(specialTradeEntity);
    }

    private List<SpecialSettlementEntity> updateAssignmentSpecialSettlement(SpecialTradeEntity specialTradeEntity, SideEntity sideEntity,
                                                                            List<AssignmentSpecialSettlementInDto> assignmentSpecialSettlementInDtoList) {
        return assignmentSpecialSettlementInDtoList.stream()
                .map(assignmentSpecialSettlementInDto -> updateAssignmentSettlementEntity(specialTradeEntity,
                        sideEntity, assignmentSpecialSettlementInDto)).toList();
    }

    private SpecialSettlementEntity updateAssignmentSettlementEntity(SpecialTradeEntity specialTradeEntity, SideEntity sideEntity,
                                                                     AssignmentSpecialSettlementInDto assignmentSpecialSettlementInDto) {

        SpecialSettlementEntity specialSettlementEntity = specialSettlementRepository.findBySpecialTradeIdAndFractionAndSideId(specialTradeEntity.getId(),
                        assignmentSpecialSettlementInDto.getFraction(), sideEntity.getId())
                .orElseThrow(() -> new ServiceException(ErrorCode.SPECIAL_SETTLEMENT_NOT_FOUND, HttpStatus.NOT_FOUND));

        specialSettlementEntity.setInvestor(ObjectUtils.isEmpty(assignmentSpecialSettlementInDto.getInvestorAccountId()) ?
                specialSettlementEntity.getInvestor() : validateInvestorAccount(assignmentSpecialSettlementInDto.getInvestorAccountId()).getInvestor());
        specialSettlementEntity.setInvestorAccount(ObjectUtils.isEmpty(assignmentSpecialSettlementInDto.getInvestorAccountId()) ?
                specialSettlementEntity.getInvestorAccount() : validateInvestorAccount(assignmentSpecialSettlementInDto.getInvestorAccountId()));
        specialSettlementEntity.setBankAccount(ObjectUtils.isEmpty(assignmentSpecialSettlementInDto.getBankAccountId()) ?
                specialSettlementEntity.getBankAccount() : validateBankAccount(assignmentSpecialSettlementInDto.getBankAccountId()));
        specialSettlementEntity.setCommissionPercentage(assignmentSpecialSettlementInDto.getCommissionPercentage());
        specialSettlementEntity.setFractionPercentage(assignmentSpecialSettlementInDto.getFractionPercentage());
        specialSettlementEntity.setLastModifyApplication(propertiesConfig.getApiName());
        specialSettlementEntity.setLastModifyIp(PropertiesContext.getClientIp());
        specialSettlementEntity.setLastModifyUser(PropertiesContext.getClientUser());
        specialSettlementEntity.setLastModifyDate(PropertiesContext.getClientDatetime());

        return specialSettlementEntity;
    }

    private void createSpecialTradeStatusHistory(SpecialTradeEntity specialTradeEntity, StatusEntity statusEntity) {
        SpecialTradeStatusHistoryEntity specialTradeStatusHistoryEntity = SpecialTradeStatusHistoryEntity.builder()
                .specialTradeId(specialTradeEntity.getId())
                .time(PropertiesContext.getClientDatetime())
                .status(statusEntity)
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyIp(PropertiesContext.getClientIp())
                .lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyDate(PropertiesContext.getClientDatetime())
                .build();
        specialTradeStatusHistoryRepository.save(specialTradeStatusHistoryEntity);
    }

    private void updateSpecialTradeStatus(SpecialTradeEntity specialTradeEntity, StatusEntity statusEntity) {
        specialTradeEntity.setStatus(statusEntity);
        specialTradeEntity.setLastModifyApplication(propertiesConfig.getApiName());
        specialTradeEntity.setLastModifyIp(PropertiesContext.getClientIp());
        specialTradeEntity.setLastModifyUser(PropertiesContext.getClientUser());
        specialTradeEntity.setLastModifyDate(PropertiesContext.getClientDatetime());
        specialTradeRepository.save(specialTradeEntity);
    }

    private void deleteSpecialTradeStatusHistoryBySpecialTradeId(Long specialTradeId) {
        specialTradeStatusHistoryRepository.deleteBySpecialTradeId(specialTradeId);
    }

    private void deleteSpecialSettlementBySpecialTradeIdAndSideId(Long specialTradeId, String sideId) {
        specialSettlementRepository.deleteBySpecialTradeIdAndSideId(specialTradeId, sideId);
    }

    private SpecialTradeEntity validateSpecialTrade(Long specialTradeId) {
        return specialTradeRepository.findById(specialTradeId)
                .orElseThrow(() -> new ServiceException(ErrorCode.SPECIAL_TRADE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private SideEntity validateSide(String sideId) {
        return sideRepository.findById(sideId)
                .orElseThrow(() -> new ServiceException(ErrorCode.SIDE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private InvestorAccountEntity validateInvestorAccount(Long investorAccountId) {
        return investorAccountRepository.findById(investorAccountId)
                .orElseThrow(() -> new ServiceException(ErrorCode.INVESTOR_ACCOUNT_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private StatusEntity validateStatus(Long statusId) {
        return statusRepository.findById(statusId)
                .orElseThrow(() -> new ServiceException(ErrorCode.STATUS_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private BankAccountEntity validateBankAccount(Long bankAccountId) {
        return bankAccountRepository.findById(bankAccountId)
                .orElseThrow(() -> new ServiceException(ErrorCode.BANK_ACCOUNT_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

}

```

## src/main/java/com/nubo/operations/special/fractionation/api/web/controller/FractionationDepositRestController.java

```java
package com.nubo.operations.special.fractionation.api.web.controller;

import com.nubo.operations.special.fractionation.api.application.annotations.RateLimited;
import com.nubo.operations.special.fractionation.api.models.dto.response.SettlementOutDto;
import com.nubo.operations.special.fractionation.api.service.FractionationDepositService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Tag(name = "Fractionation Deposit")
@RequestMapping("/{version}/fractionation-deposit")
@RestController
@RequiredArgsConstructor
@RateLimited
public class FractionationDepositRestController {

    private final FractionationDepositService fractionationDepositService;

    @Operation(summary = "Update fraction by tradeId and sideId", description = "Create fraction by tradeId and sideId")
    @ApiResponses(value = {@ApiResponse(responseCode = "201", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = SettlementOutDto[].class)))})
    @PutMapping("/approve-assignments/trade/{tradeId}/side/{sideId}")
    public ResponseEntity<List<SettlementOutDto>> approveAssignment(
            @PathVariable Long tradeId,
            @PathVariable String sideId) {
        List<SettlementOutDto> createdSettlementList = fractionationDepositService.approveAssignment(tradeId, sideId);
        return ResponseEntity.ok(createdSettlementList);
    }

    @Operation(summary = "Update fraction by tradeId and sideId", description = "Create fraction by tradeId and sideId")
    @ApiResponses(value = {@ApiResponse(responseCode = "201", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = SettlementOutDto[].class)))})
    @PutMapping("/reject-assignments/trade/{tradeId}/side/{sideId}")
    public ResponseEntity<List<SettlementOutDto>> rejectAssignment(
            @PathVariable Long tradeId,
            @PathVariable String sideId) {
        List<SettlementOutDto> createdSettlementList = fractionationDepositService.rejectAssignment(tradeId, sideId);
        return ResponseEntity.ok(createdSettlementList);
    }
}

```

## src/main/java/com/nubo/operations/special/fractionation/api/web/controller/FractionationPendingRestController.java

```java
package com.nubo.operations.special.fractionation.api.web.controller;

import com.nubo.operations.special.fractionation.api.application.annotations.RateLimited;
import com.nubo.operations.special.fractionation.api.models.dto.request.AssignmentInDto;
import com.nubo.operations.special.fractionation.api.models.dto.request.FractionationPendingInDto;
import com.nubo.operations.special.fractionation.api.models.dto.response.PageResponseOutDto;
import com.nubo.operations.special.fractionation.api.models.dto.response.SettlementOutDto;
import com.nubo.operations.special.fractionation.api.models.dto.response.ValidationSettlementOutDto;
import com.nubo.operations.special.fractionation.api.service.FractionationPendingService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Tag(name = "Fractionation Pending")
@RequestMapping("/{version}/fractionation-pending")
@RestController
@RequiredArgsConstructor
@RateLimited
public class FractionationPendingRestController {

    private final FractionationPendingService fractionationPendingService;

    @Operation(summary = "Create fraction by tradeId and sideId", description = "Create fraction by tradeId and sideId")
    @ApiResponses(value = {@ApiResponse(responseCode = "201", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = SettlementOutDto[].class)))})
    @PostMapping("/create-fractions/trade/{tradeId}/side/{sideId}/status/{statusId}")
    public ResponseEntity<List<SettlementOutDto>> createFractionsPending(
            @PathVariable Long tradeId,
            @PathVariable String sideId,
            @PathVariable Long statusId,
            @Valid @RequestBody List<FractionationPendingInDto> fractionationPendingInDtoList) {
        List<SettlementOutDto> createdSettlementList = fractionationPendingService.createFractionsPending(tradeId, sideId, statusId,
                fractionationPendingInDtoList);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdSettlementList);
    }

    @Operation(summary = "Update fraction by tradeId and sideId", description = "Create fraction by tradeId and sideId")
    @ApiResponses(value = {@ApiResponse(responseCode = "201", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = SettlementOutDto[].class)))})
    @PutMapping("/update-assignments/trade/{tradeId}/side/{sideId}/status/{statusId}")
    public ResponseEntity<List<SettlementOutDto>> updateAssignmentPending(
            @PathVariable Long tradeId,
            @PathVariable String sideId,
            @PathVariable Long statusId,
            @Valid @RequestBody List<AssignmentInDto> assignmentInDtoList) {
        List<SettlementOutDto> createdSettlementList = fractionationPendingService.updateAssignmentPending(tradeId, sideId, statusId,
                assignmentInDtoList);
        return ResponseEntity.ok(createdSettlementList);
    }

    @Operation(summary = "Validate fractions by tradeId and sideId", description = "Validate fractions by tradeId and sideId")
    @ApiResponses(value = {@ApiResponse(responseCode = "201", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = ValidationSettlementOutDto.class)))})
    @GetMapping("/validate-assignments/trade/{tradeId}/side/{sideId}")
    public ResponseEntity<PageResponseOutDto<ValidationSettlementOutDto>> validateAssignmentPending(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @PathVariable Long tradeId,
            @PathVariable String sideId) {
        Pageable pageable = PageRequest.of(page, size);
        return ResponseEntity.ok(fractionationPendingService.validateAssignment(pageable, tradeId, sideId));
    }
}

```

## src/main/java/com/nubo/operations/special/fractionation/api/web/controller/FractionationRestController.java

```java
package com.nubo.operations.special.fractionation.api.web.controller;

import com.nubo.operations.special.fractionation.api.application.annotations.RateLimited;
import com.nubo.operations.special.fractionation.api.models.dto.request.AssignmentInDto;
import com.nubo.operations.special.fractionation.api.models.dto.request.FractionationInDto;
import com.nubo.operations.special.fractionation.api.models.dto.response.SettlementOutDto;
import com.nubo.operations.special.fractionation.api.service.FractionationService;
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

@Tag(name = "Fractionation")
@RequestMapping("/{version}/fractionation")
@RestController
@RequiredArgsConstructor
@RateLimited
public class FractionationRestController {

    private final FractionationService fractionationService;

    @Operation(summary = "Create fraction by tradeId and sideId", description = "Create fraction by tradeId and sideId")
    @ApiResponses(value = {@ApiResponse(responseCode = "201", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = SettlementOutDto[].class)))})
    @PostMapping("/create-fractions/trade/{tradeId}/side/{sideId}/status/{statusId}")
    public ResponseEntity<List<SettlementOutDto>> createFractions(
            @PathVariable Long tradeId,
            @PathVariable String sideId,
            @PathVariable Long statusId,
            @Valid @RequestBody List<FractionationInDto> fractionationInDtoList) {
        List<SettlementOutDto> createdSettlementList = fractionationService.createFractions(tradeId, sideId, statusId,
                fractionationInDtoList);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdSettlementList);
    }

    @Operation(summary = "Update fraction by tradeId and sideId", description = "Create fraction by tradeId and sideId")
    @ApiResponses(value = {@ApiResponse(responseCode = "201", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = SettlementOutDto[].class)))})
    @PutMapping("/update-assignments/trade/{tradeId}/side/{sideId}/status/{statusId}")
    public ResponseEntity<List<SettlementOutDto>> updateAssignment(
            @PathVariable Long tradeId,
            @PathVariable String sideId,
            @PathVariable Long statusId,
            @Valid @RequestBody List<AssignmentInDto> assignmentInDtoList) {
        List<SettlementOutDto> createdSettlementList = fractionationService.updateAssignment(tradeId, sideId, statusId,
                assignmentInDtoList);
        return ResponseEntity.ok(createdSettlementList);
    }

}

```

## src/main/java/com/nubo/operations/special/fractionation/api/web/controller/FractionationSpecialSettlementRestController.java

```java
package com.nubo.operations.special.fractionation.api.web.controller;

import com.nubo.operations.special.fractionation.api.application.annotations.RateLimited;
import com.nubo.operations.special.fractionation.api.models.dto.request.AssignmentSpecialSettlementInDto;
import com.nubo.operations.special.fractionation.api.models.dto.request.FractionSpecialSettlementInDto;
import com.nubo.operations.special.fractionation.api.models.dto.response.SpecialSettlementOutDto;
import com.nubo.operations.special.fractionation.api.service.FractionationSpecialSettlementService;
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

@Tag(name = "Fractionation Special Settlement")
@RequestMapping("/{version}/fractionation-special-settlement")
@RestController
@RequiredArgsConstructor
@RateLimited
public class FractionationSpecialSettlementRestController {

    private final FractionationSpecialSettlementService fractionationSpecialSettlementService;

    @Operation(summary = "Create fraction by specialTrade", description = "Create fraction by specialTrade")
    @ApiResponses(value = {@ApiResponse(responseCode = "201", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = SpecialSettlementOutDto[].class)))})
    @PostMapping("/create-fractions/special-trade/{specialTradeId}")
    public ResponseEntity<List<SpecialSettlementOutDto>> createFractions(
            @PathVariable Long specialTradeId,
            @Valid @RequestBody List<FractionSpecialSettlementInDto> fractionSpecialSettlementInDtoList) {
        List<SpecialSettlementOutDto> createdSettlementList = fractionationSpecialSettlementService.createFractions(specialTradeId,
                fractionSpecialSettlementInDtoList);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdSettlementList);
    }

    @Operation(summary = "Update fraction by tradeId and sideId", description = "Create fraction by tradeId and sideId")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = SpecialSettlementOutDto[].class)))})
    @PutMapping("/update-assignments/special-trade/{specialTradeId}")
    public ResponseEntity<List<SpecialSettlementOutDto>> updateAssignment(
            @PathVariable Long specialTradeId,
            @Valid @RequestBody List<AssignmentSpecialSettlementInDto> assignmentSpecialSettlementInDtoList) {
        List<SpecialSettlementOutDto> updateAssignment = fractionationSpecialSettlementService.updateAssignment(specialTradeId,
                assignmentSpecialSettlementInDtoList);
        return ResponseEntity.ok(updateAssignment);
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
  security:
    oauth2:
      resourceserver:
        opaque-token:
          client-id: ${KEYCLOAK_CLIENT_ID}
          client-secret: ${KEYCLOAK_CLIENT_SECRET}
          introspection-uri: ${KEYCLOAK_INTROSPECTION_URI}
logging:
  config: classpath:log/log4j2.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR
config:
  application:
    rateLimited:
      number-max-request: ${RATE_LIMIT_MAX_REQUEST}
      range-time-request: ${RATE_LIMIT_TIME_REQUEST}
      waiting-time: ${RATE_LIMIT_WAITING_TIME}
client:
  keycloak:
    client-id: ${KEYCLOAK_CLIENT_ID}
    client-secret: ${KEYCLOAK_CLIENT_SECRET}
    introspection-uri: ${KEYCLOAK_INTROSPECTION_URI}
  nubo:
    url-operation-special-calculation: ${NUBO_URL_OPERATION_SPECIAL_CALCULATION}
kafka:
  nubo:
    retries: ${KAFKA_NUBO_RETRIES:5}
    bootstrap-servers: ${KAFKA_NUBO_BOOTSTRAP_SERVER}
    auto-offset-reset: ${KAFKA_NUBO_AUTO_OFFSET_RESET:latest}
    security:
      protocol: SASL_PLAINTEXT
    sasl:
      mechanism: SCRAM-SHA-256
      jaas:
        config: "org.apache.kafka.common.security.scram.ScramLoginModule required username=${KAFKA_NUBO_SASL_USER} password=${KAFKA_NUBO_SASL_PASSWORD};"
    producer:
      topic-name-send-transformer: ${KAFKA_NUBO_TOPIC_NAME_SEND_SETTLEMENT_TRANSFORMER}
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
      maximum-pool-size: ${DB_HIKARI_MAXIMUM_POOL_SIZE:10}
      minimum-idle: ${DB_HIKARI_MINIMUM_IDLE:1}
      idle-timeout: ${DB_HIKARI_IDLE_TIMEOUT:600000}
      validation-timeout: ${DB_HIKARI_VALIDATION_TIMEOUT:5000}
      max-lifetime: ${DB_HIKARI_MAX_LIFETIME:600000}
      connection-timeout: ${DB_HIKARI_CONNECTION_TIMEOUT:30000}
      leak-detection-threshold: ${DB_HIKARI_LEAK_DETECTION_THRESHOLD:30000}
      connection-test-query: SELECT 1
      pool-name: @hikari.pool.name@
  jpa:
    hibernate:
      ddl-auto: none
      default_schema: NUANBODB
    show-sql: 'false'
    database-platform: org.hibernate.dialect.PostgreSQLDialect
  security:
    oauth2:
      resourceserver:
        opaque-token:
          client-id: ${KEYCLOAK_CLIENT_ID}
          client-secret: ${KEYCLOAK_CLIENT_SECRET}
          introspection-uri: ${KEYCLOAK_INTROSPECTION_URI}
logging:
  config: classpath:log/log4j2.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR
config:
  application:
    rateLimited:
      number-max-request: ${RATE_LIMIT_MAX_REQUEST}
      range-time-request: ${RATE_LIMIT_TIME_REQUEST}
      waiting-time: ${RATE_LIMIT_WAITING_TIME}
client:
  keycloak:
    client-id: ${KEYCLOAK_CLIENT_ID}
    client-secret: ${KEYCLOAK_CLIENT_SECRET}
    introspection-uri: ${KEYCLOAK_INTROSPECTION_URI}
  nubo:
    url-operation-special-calculation: ${NUBO_URL_OPERATION_SPECIAL_CALCULATION}
kafka:
  nubo:
    retries: ${KAFKA_NUBO_RETRIES:5}
    bootstrap-servers: ${KAFKA_NUBO_BOOTSTRAP_SERVER}
    auto-offset-reset: ${KAFKA_NUBO_AUTO_OFFSET_RESET:latest}
    security:
      protocol: SASL_PLAINTEXT
    sasl:
      mechanism: SCRAM-SHA-256
      jaas:
        config: "org.apache.kafka.common.security.scram.ScramLoginModule required username=${KAFKA_NUBO_SASL_USER} password=${KAFKA_NUBO_SASL_PASSWORD};"
    producer:
      topic-name-send-transformer: ${KAFKA_NUBO_TOPIC_NAME_SEND_SETTLEMENT_TRANSFORMER}
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
  security:
    oauth2:
      resourceserver:
        opaque-token:
          client-id: ${KEYCLOAK_CLIENT_ID}
          client-secret: ${KEYCLOAK_CLIENT_SECRET}
          introspection-uri: ${KEYCLOAK_INTROSPECTION_URI}
logging:
  config: classpath:log/log4j2-prod.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR
config:
  application:
    rateLimited:
      number-max-request: ${RATE_LIMIT_MAX_REQUEST}
      range-time-request: ${RATE_LIMIT_TIME_REQUEST}
      waiting-time: ${RATE_LIMIT_WAITING_TIME}
client:
  keycloak:
    client-id: ${KEYCLOAK_CLIENT_ID}
    client-secret: ${KEYCLOAK_CLIENT_SECRET}
    introspection-uri: ${KEYCLOAK_INTROSPECTION_URI}
  nubo:
    url-operation-special-calculation: ${NUBO_URL_OPERATION_SPECIAL_CALCULATION}
kafka:
  nubo:
    retries: ${KAFKA_NUBO_RETRIES:5}
    bootstrap-servers: ${KAFKA_NUBO_BOOTSTRAP_SERVER}
    auto-offset-reset: ${KAFKA_NUBO_AUTO_OFFSET_RESET:latest}
    security:
      protocol: SASL_PLAINTEXT
    sasl:
      mechanism: SCRAM-SHA-256
      jaas:
        config: "org.apache.kafka.common.security.scram.ScramLoginModule required username=${KAFKA_NUBO_SASL_USER} password=${KAFKA_NUBO_SASL_PASSWORD};"
    producer:
      topic-name-send-transformer: ${KAFKA_NUBO_TOPIC_NAME_SEND_SETTLEMENT_TRANSFORMER}
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
  security:
    oauth2:
      resourceserver:
        opaque-token:
          client-id: ${KEYCLOAK_CLIENT_ID}
          client-secret: ${KEYCLOAK_CLIENT_SECRET}
          introspection-uri: ${KEYCLOAK_INTROSPECTION_URI}
logging:
  config: classpath:log/log4j2.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR
config:
  application:
    rateLimited:
      number-max-request: ${RATE_LIMIT_MAX_REQUEST}
      range-time-request: ${RATE_LIMIT_TIME_REQUEST}
      waiting-time: ${RATE_LIMIT_WAITING_TIME}
client:
  keycloak:
    client-id: ${KEYCLOAK_CLIENT_ID}
    client-secret: ${KEYCLOAK_CLIENT_SECRET}
    introspection-uri: ${KEYCLOAK_INTROSPECTION_URI}
  nubo:
    url-operation-special-calculation: ${NUBO_URL_OPERATION_SPECIAL_CALCULATION}
kafka:
  nubo:
    retries: ${KAFKA_NUBO_RETRIES:5}
    bootstrap-servers: ${KAFKA_NUBO_BOOTSTRAP_SERVER}
    auto-offset-reset: ${KAFKA_NUBO_AUTO_OFFSET_RESET:latest}
    security:
      protocol: SASL_PLAINTEXT
    sasl:
      mechanism: SCRAM-SHA-256
      jaas:
        config: "org.apache.kafka.common.security.scram.ScramLoginModule required username=${KAFKA_NUBO_SASL_USER} password=${KAFKA_NUBO_SASL_PASSWORD};"
    producer:
      topic-name-send-transformer: ${KAFKA_NUBO_TOPIC_NAME_SEND_SETTLEMENT_TRANSFORMER}
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
  security:
    oauth2:
      resourceserver:
        opaque-token:
          client-id: ${KEYCLOAK_CLIENT_ID}
          client-secret: ${KEYCLOAK_CLIENT_SECRET}
          introspection-uri: ${KEYCLOAK_INTROSPECTION_URI}
logging:
  config: classpath:log/log4j2.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR
config:
  application:
    rateLimited:
      number-max-request: ${RATE_LIMIT_MAX_REQUEST}
      range-time-request: ${RATE_LIMIT_TIME_REQUEST}
      waiting-time: ${RATE_LIMIT_WAITING_TIME}
client:
  keycloak:
    client-id: ${KEYCLOAK_CLIENT_ID}
    client-secret: ${KEYCLOAK_CLIENT_SECRET}
    introspection-uri: ${KEYCLOAK_INTROSPECTION_URI}
  nubo:
    url-operation-special-calculation: ${NUBO_URL_OPERATION_SPECIAL_CALCULATION}
kafka:
  nubo:
    retries: ${KAFKA_NUBO_RETRIES:5}
    bootstrap-servers: ${KAFKA_NUBO_BOOTSTRAP_SERVER}
    auto-offset-reset: ${KAFKA_NUBO_AUTO_OFFSET_RESET:latest}
    security:
      protocol: SASL_PLAINTEXT
    sasl:
      mechanism: SCRAM-SHA-256
      jaas:
        config: "org.apache.kafka.common.security.scram.ScramLoginModule required username=${KAFKA_NUBO_SASL_USER} password=${KAFKA_NUBO_SASL_PASSWORD};"
    producer:
      topic-name-send-transformer: ${KAFKA_NUBO_TOPIC_NAME_SEND_SETTLEMENT_TRANSFORMER}
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
  ,-----. ,------. ,------.,------.   ,---. ,--------.,--. ,-----. ,--.  ,--. ,---.   ,---. ,------. ,------. ,-----.,--.  ,---.  ,--.   ,------.,------.   ,---.   ,-----.,--------.,--. ,-----. ,--.  ,--.  ,---. ,--------.,--. ,-----. ,--.  ,--.  ,---.  ,------. ,--.
 '  .-.  '|  .--. '|  .---'|  .--. ' /  O  \'--.  .--'|  |'  .-.  '|  ,'.|  |'   .-' '   .-'|  .--. '|  .---''  .--./|  | /  O  \ |  |   |  .---'|  .--. ' /  O  \ '  .--./'--.  .--'|  |'  .-.  '|  ,'.|  | /  O  \'--.  .--'|  |'  .-.  '|  ,'.|  | /  O  \ |  .--. '|  |
 |  | |  ||  '--' ||  `--, |  '--'.'|  .-.  |  |  |   |  ||  | |  ||  |' '  |`.  `-. `.  `-.|  '--' ||  `--, |  |    |  ||  .-.  ||  |   |  `--, |  '--'.'|  .-.  ||  |       |  |   |  ||  | |  ||  |' '  ||  .-.  |  |  |   |  ||  | |  ||  |' '  ||  .-.  ||  '--' ||  |
 '  '-'  '|  | --' |  `---.|  |\  \ |  | |  |  |  |   |  |'  '-'  '|  | `   |.-'    |.-'    |  | --' |  `---.'  '--'\|  ||  | |  ||  '--.|  |`   |  |\  \ |  | |  |'  '--'\   |  |   |  |'  '-'  '|  | `   ||  | |  |  |  |   |  |'  '-'  '|  | `   ||  | |  ||  | --' |  |
  `-----' `--'     `------'`--' '--'`--' `--'  `--'   `--' `-----' `--'  `--'`-----' `-----'`--'     `------' `-----'`--'`--' `--'`-----'`--'    `--' '--'`--' `--' `-----'   `--'   `--' `-----' `--'  `--'`--' `--'  `--'   `--' `-----' `--'  `--'`--' `--'`--'     `--'
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
