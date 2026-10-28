# nbo-png-operaciones-custodio-traslados-back

Código Java de producción y configuraciones, sin tests. Cada sección contiene el archivo original completo y su ruta. Captura: 28/10/2026.

## Índice

1. `.mvn/wrapper/maven-wrapper.properties`
2. `mvnw`
3. `mvnw.cmd`
4. `pom.xml`
5. `src/main/java/com/nubo/operations/custody/transfer/api/OperationsCustodyTransferApiApplication.java`
6. `src/main/java/com/nubo/operations/custody/transfer/api/application/annotations/ValidBigDecimal.java`
7. `src/main/java/com/nubo/operations/custody/transfer/api/application/config/KafkaProducerConfig.java`
8. `src/main/java/com/nubo/operations/custody/transfer/api/application/config/SwaggerConfig.java`
9. `src/main/java/com/nubo/operations/custody/transfer/api/application/config/ValidBigDecimalConfig.java`
10. `src/main/java/com/nubo/operations/custody/transfer/api/application/config/WebConfig.java`
11. `src/main/java/com/nubo/operations/custody/transfer/api/application/context/GlobalContext.java`
12. `src/main/java/com/nubo/operations/custody/transfer/api/application/database/NamingStrategyConfig.java`
13. `src/main/java/com/nubo/operations/custody/transfer/api/application/database/UpperNamingConfig.java`
14. `src/main/java/com/nubo/operations/custody/transfer/api/application/filters/GlobalFilter.java`
15. `src/main/java/com/nubo/operations/custody/transfer/api/application/interceptors/GlobalInterceptor.java`
16. `src/main/java/com/nubo/operations/custody/transfer/api/application/properties/PropertiesConfig.java`
17. `src/main/java/com/nubo/operations/custody/transfer/api/application/properties/PropertiesContext.java`
18. `src/main/java/com/nubo/operations/custody/transfer/api/application/util/ApplicationUtils.java`
19. `src/main/java/com/nubo/operations/custody/transfer/api/application/util/RestClientUtils.java`
20. `src/main/java/com/nubo/operations/custody/transfer/api/client/businessday/calculation/model/dto/response/BusinessDayOutDto.java`
21. `src/main/java/com/nubo/operations/custody/transfer/api/client/businessday/calculation/service/BusinessDayCalculationClient.java`
22. `src/main/java/com/nubo/operations/custody/transfer/api/client/businessday/calculation/service/impl/BusinessDayCalculationClientImpl.java`
23. `src/main/java/com/nubo/operations/custody/transfer/api/client/email/models/dto/request/EmailCodeTemplateInDto.java`
24. `src/main/java/com/nubo/operations/custody/transfer/api/client/email/models/dto/response/EmailNuboOutDto.java`
25. `src/main/java/com/nubo/operations/custody/transfer/api/client/email/models/enums/EmailTemplateEnum.java`
26. `src/main/java/com/nubo/operations/custody/transfer/api/client/email/service/EmailClient.java`
27. `src/main/java/com/nubo/operations/custody/transfer/api/client/email/service/impl/EmailClientImpl.java`
28. `src/main/java/com/nubo/operations/custody/transfer/api/client/kafka/producer/dto/request/PackageCustodianInDto.java`
29. `src/main/java/com/nubo/operations/custody/transfer/api/client/kafka/producer/dto/request/ProducerSpecialTradeCompensationInDto.java`
30. `src/main/java/com/nubo/operations/custody/transfer/api/client/kafka/producer/service/KafkaNuboProducer.java`
31. `src/main/java/com/nubo/operations/custody/transfer/api/client/kafka/producer/service/impl/KafkaNuboProducerImpl.java`
32. `src/main/java/com/nubo/operations/custody/transfer/api/client/packagecustodian/dto/request/PackageCustodianAutomaticInDto.java`
33. `src/main/java/com/nubo/operations/custody/transfer/api/client/packagecustodian/dto/response/PackageCustodianAutomaticOutDto.java`
34. `src/main/java/com/nubo/operations/custody/transfer/api/client/packagecustodian/service/PackageCustodianCmdClient.java`
35. `src/main/java/com/nubo/operations/custody/transfer/api/client/packagecustodian/service/impl/PackageCustodianCmdClientImpl.java`
36. `src/main/java/com/nubo/operations/custody/transfer/api/client/rules/models/dto/request/StatusUpdateSettlementInDto.java`
37. `src/main/java/com/nubo/operations/custody/transfer/api/client/rules/models/dto/response/StatusUpdateSettlementOutDto.java`
38. `src/main/java/com/nubo/operations/custody/transfer/api/client/rules/service/OperationBusinessRuleClient.java`
39. `src/main/java/com/nubo/operations/custody/transfer/api/client/rules/service/impl/OperationBusinessRuleClientImpl.java`
40. `src/main/java/com/nubo/operations/custody/transfer/api/exception/ClientException.java`
41. `src/main/java/com/nubo/operations/custody/transfer/api/exception/ServiceException.java`
42. `src/main/java/com/nubo/operations/custody/transfer/api/exception/error/ErrorCode.java`
43. `src/main/java/com/nubo/operations/custody/transfer/api/exception/error/ErrorResponse.java`
44. `src/main/java/com/nubo/operations/custody/transfer/api/exception/error/ErrorValidation.java`
45. `src/main/java/com/nubo/operations/custody/transfer/api/exception/handler/CustomKafkaErrorHandler.java`
46. `src/main/java/com/nubo/operations/custody/transfer/api/exception/handler/GlobalExceptionHandler.java`
47. `src/main/java/com/nubo/operations/custody/transfer/api/exception/kafka/KafkaErrorBuild.java`
48. `src/main/java/com/nubo/operations/custody/transfer/api/helpers/MapperPageUtil.java`
49. `src/main/java/com/nubo/operations/custody/transfer/api/helpers/MapperUtil.java`
50. `src/main/java/com/nubo/operations/custody/transfer/api/helpers/SendNotificationUtil.java`
51. `src/main/java/com/nubo/operations/custody/transfer/api/models/domain/UserNuboData.java`
52. `src/main/java/com/nubo/operations/custody/transfer/api/models/dto/request/SettlementStatusHistoryInDto.java`
53. `src/main/java/com/nubo/operations/custody/transfer/api/models/dto/request/SettlementTransferPreviewInDto.java`
54. `src/main/java/com/nubo/operations/custody/transfer/api/models/dto/request/SettlementUpdateTransferInDto.java`
55. `src/main/java/com/nubo/operations/custody/transfer/api/models/dto/request/SpecialTradeCompensationInDto.java`
56. `src/main/java/com/nubo/operations/custody/transfer/api/models/dto/request/StatusInDto.java`
57. `src/main/java/com/nubo/operations/custody/transfer/api/models/dto/request/StatusUpdateInDto.java`
58. `src/main/java/com/nubo/operations/custody/transfer/api/models/dto/response/AfpFundOutDto.java`
59. `src/main/java/com/nubo/operations/custody/transfer/api/models/dto/response/CountryOutDto.java`
60. `src/main/java/com/nubo/operations/custody/transfer/api/models/dto/response/CurrencyOutDto.java`
61. `src/main/java/com/nubo/operations/custody/transfer/api/models/dto/response/DepositoryOutDto.java`
62. `src/main/java/com/nubo/operations/custody/transfer/api/models/dto/response/EmailTransferCustodianOutDto.java`
63. `src/main/java/com/nubo/operations/custody/transfer/api/models/dto/response/ExchangeRateOutDto.java`
64. `src/main/java/com/nubo/operations/custody/transfer/api/models/dto/response/FicAdministratorOutDto.java`
65. `src/main/java/com/nubo/operations/custody/transfer/api/models/dto/response/GicsOutDto.java`
66. `src/main/java/com/nubo/operations/custody/transfer/api/models/dto/response/IdentificationTypeOutDto.java`
67. `src/main/java/com/nubo/operations/custody/transfer/api/models/dto/response/InvestorAccountOutDto.java`
68. `src/main/java/com/nubo/operations/custody/transfer/api/models/dto/response/InvestorOutDto.java`
69. `src/main/java/com/nubo/operations/custody/transfer/api/models/dto/response/MarketOutDto.java`
70. `src/main/java/com/nubo/operations/custody/transfer/api/models/dto/response/NotificationRequestDto.java`
71. `src/main/java/com/nubo/operations/custody/transfer/api/models/dto/response/PageResponseOutDto.java`
72. `src/main/java/com/nubo/operations/custody/transfer/api/models/dto/response/ParticipantAccountOutDto.java`
73. `src/main/java/com/nubo/operations/custody/transfer/api/models/dto/response/ParticipantOutDto.java`
74. `src/main/java/com/nubo/operations/custody/transfer/api/models/dto/response/RejectionReasonOutDto.java`
75. `src/main/java/com/nubo/operations/custody/transfer/api/models/dto/response/SecurityTitleOutDto.java`
76. `src/main/java/com/nubo/operations/custody/transfer/api/models/dto/response/SettlementByCustodyOutDto.java`
77. `src/main/java/com/nubo/operations/custody/transfer/api/models/dto/response/SettlementInstructionTransferRowOutDto.java`
78. `src/main/java/com/nubo/operations/custody/transfer/api/models/dto/response/SettlementKeyOutDto.java`
79. `src/main/java/com/nubo/operations/custody/transfer/api/models/dto/response/SettlementOutDto.java`
80. `src/main/java/com/nubo/operations/custody/transfer/api/models/dto/response/SettlementStatusHistoryOutDto.java`
81. `src/main/java/com/nubo/operations/custody/transfer/api/models/dto/response/SettlementTransferResultOutDto.java`
82. `src/main/java/com/nubo/operations/custody/transfer/api/models/dto/response/SettlementTransferRowOutDto.java`
83. `src/main/java/com/nubo/operations/custody/transfer/api/models/dto/response/SideOutDto.java`
84. `src/main/java/com/nubo/operations/custody/transfer/api/models/dto/response/SmallParticipantOutDto.java`
85. `src/main/java/com/nubo/operations/custody/transfer/api/models/dto/response/StatusOutDto.java`
86. `src/main/java/com/nubo/operations/custody/transfer/api/models/dto/response/TaxStatusOutDto.java`
87. `src/main/java/com/nubo/operations/custody/transfer/api/models/dto/response/TradeEquityOutDto.java`
88. `src/main/java/com/nubo/operations/custody/transfer/api/models/dto/response/TradeOutDto.java`
89. `src/main/java/com/nubo/operations/custody/transfer/api/models/dto/response/TradingSessionOutDto.java`
90. `src/main/java/com/nubo/operations/custody/transfer/api/models/dto/response/TradingSystemOutDto.java`
91. `src/main/java/com/nubo/operations/custody/transfer/api/models/dto/response/TypeOutDto.java`
92. `src/main/java/com/nubo/operations/custody/transfer/api/models/entity/AfpFundEntity.java`
93. `src/main/java/com/nubo/operations/custody/transfer/api/models/entity/CountryEntity.java`
94. `src/main/java/com/nubo/operations/custody/transfer/api/models/entity/CurrencyEntity.java`
95. `src/main/java/com/nubo/operations/custody/transfer/api/models/entity/CustodianStatusHistoryEntity.java`
96. `src/main/java/com/nubo/operations/custody/transfer/api/models/entity/DepositoryEntity.java`
97. `src/main/java/com/nubo/operations/custody/transfer/api/models/entity/ExchangeRateEntity.java`
98. `src/main/java/com/nubo/operations/custody/transfer/api/models/entity/FicAdministratorEntity.java`
99. `src/main/java/com/nubo/operations/custody/transfer/api/models/entity/GicsEntity.java`
100. `src/main/java/com/nubo/operations/custody/transfer/api/models/entity/IdentificationTypeEntity.java`
101. `src/main/java/com/nubo/operations/custody/transfer/api/models/entity/InvestorAccountEntity.java`
102. `src/main/java/com/nubo/operations/custody/transfer/api/models/entity/InvestorEntity.java`
103. `src/main/java/com/nubo/operations/custody/transfer/api/models/entity/IsinNumberEntity.java`
104. `src/main/java/com/nubo/operations/custody/transfer/api/models/entity/MarketEntity.java`
105. `src/main/java/com/nubo/operations/custody/transfer/api/models/entity/ParticipantAccountEntity.java`
106. `src/main/java/com/nubo/operations/custody/transfer/api/models/entity/ParticipantBankAccountEntity.java`
107. `src/main/java/com/nubo/operations/custody/transfer/api/models/entity/ParticipantEntity.java`
108. `src/main/java/com/nubo/operations/custody/transfer/api/models/entity/ProfileEntity.java`
109. `src/main/java/com/nubo/operations/custody/transfer/api/models/entity/RejectionReasonEntity.java`
110. `src/main/java/com/nubo/operations/custody/transfer/api/models/entity/SecurityTitleEntity.java`
111. `src/main/java/com/nubo/operations/custody/transfer/api/models/entity/SettlementEntity.java`
112. `src/main/java/com/nubo/operations/custody/transfer/api/models/entity/SettlementKey.java`
113. `src/main/java/com/nubo/operations/custody/transfer/api/models/entity/SideEntity.java`
114. `src/main/java/com/nubo/operations/custody/transfer/api/models/entity/StatusEntity.java`
115. `src/main/java/com/nubo/operations/custody/transfer/api/models/entity/TaxStatusEntity.java`
116. `src/main/java/com/nubo/operations/custody/transfer/api/models/entity/TradeEntity.java`
117. `src/main/java/com/nubo/operations/custody/transfer/api/models/entity/TradingSessionEntity.java`
118. `src/main/java/com/nubo/operations/custody/transfer/api/models/entity/TradingSystemEntity.java`
119. `src/main/java/com/nubo/operations/custody/transfer/api/models/entity/TypeEntity.java`
120. `src/main/java/com/nubo/operations/custody/transfer/api/models/entity/TypeMappingEntity.java`
121. `src/main/java/com/nubo/operations/custody/transfer/api/models/entity/UserNuboEntity.java`
122. `src/main/java/com/nubo/operations/custody/transfer/api/models/enums/BusinessRuleEnum.java`
123. `src/main/java/com/nubo/operations/custody/transfer/api/models/enums/NotificationMessageEnum.java`
124. `src/main/java/com/nubo/operations/custody/transfer/api/models/enums/NotificationTypeEnum.java`
125. `src/main/java/com/nubo/operations/custody/transfer/api/models/enums/PermissionEnum.java`
126. `src/main/java/com/nubo/operations/custody/transfer/api/models/enums/PropertiesEnum.java`
127. `src/main/java/com/nubo/operations/custody/transfer/api/models/enums/SettlementErrorEnum.java`
128. `src/main/java/com/nubo/operations/custody/transfer/api/models/enums/SettlementHistoryDetailEnum.java`
129. `src/main/java/com/nubo/operations/custody/transfer/api/models/enums/SideEnum.java`
130. `src/main/java/com/nubo/operations/custody/transfer/api/models/enums/StatusEnum.java`
131. `src/main/java/com/nubo/operations/custody/transfer/api/models/enums/TypeEnum.java`
132. `src/main/java/com/nubo/operations/custody/transfer/api/models/enums/TypeMappingEnum.java`
133. `src/main/java/com/nubo/operations/custody/transfer/api/models/enums/UserTypeEnum.java`
134. `src/main/java/com/nubo/operations/custody/transfer/api/models/enums/VersionApiEnum.java`
135. `src/main/java/com/nubo/operations/custody/transfer/api/repository/CustodianStatusHistoryRepository.java`
136. `src/main/java/com/nubo/operations/custody/transfer/api/repository/FicAdministratorRepository.java`
137. `src/main/java/com/nubo/operations/custody/transfer/api/repository/ParticipantBankAccountRepository.java`
138. `src/main/java/com/nubo/operations/custody/transfer/api/repository/ParticipantRepository.java`
139. `src/main/java/com/nubo/operations/custody/transfer/api/repository/RejectionReasonRepository.java`
140. `src/main/java/com/nubo/operations/custody/transfer/api/repository/SettlementRepository.java`
141. `src/main/java/com/nubo/operations/custody/transfer/api/repository/SideRepository.java`
142. `src/main/java/com/nubo/operations/custody/transfer/api/repository/StatusRepository.java`
143. `src/main/java/com/nubo/operations/custody/transfer/api/repository/TradeRepository.java`
144. `src/main/java/com/nubo/operations/custody/transfer/api/repository/TypeMappingRepository.java`
145. `src/main/java/com/nubo/operations/custody/transfer/api/repository/TypeRepository.java`
146. `src/main/java/com/nubo/operations/custody/transfer/api/repository/UserNuboRepository.java`
147. `src/main/java/com/nubo/operations/custody/transfer/api/service/CustodianEmailService.java`
148. `src/main/java/com/nubo/operations/custody/transfer/api/service/FicAdministratorService.java`
149. `src/main/java/com/nubo/operations/custody/transfer/api/service/RejectionReasonService.java`
150. `src/main/java/com/nubo/operations/custody/transfer/api/service/SettlementService.java`
151. `src/main/java/com/nubo/operations/custody/transfer/api/service/SettlementTransferService.java`
152. `src/main/java/com/nubo/operations/custody/transfer/api/service/impl/CustodianEmailServiceImpl.java`
153. `src/main/java/com/nubo/operations/custody/transfer/api/service/impl/FicAdministratorServiceImpl.java`
154. `src/main/java/com/nubo/operations/custody/transfer/api/service/impl/RejectionReasonServiceImpl.java`
155. `src/main/java/com/nubo/operations/custody/transfer/api/service/impl/SettlementServiceImpl.java`
156. `src/main/java/com/nubo/operations/custody/transfer/api/service/impl/SettlementTransferServiceImpl.java`
157. `src/main/java/com/nubo/operations/custody/transfer/api/web/controller/CustodianEmailRestController.java`
158. `src/main/java/com/nubo/operations/custody/transfer/api/web/controller/FicAdministratorRestController.java`
159. `src/main/java/com/nubo/operations/custody/transfer/api/web/controller/RejectionReasonRestController.java`
160. `src/main/java/com/nubo/operations/custody/transfer/api/web/controller/SettlementRestController.java`
161. `src/main/java/com/nubo/operations/custody/transfer/api/web/controller/SettlementTransferController.java`
162. `src/main/resources/application-dev.yml`
163. `src/main/resources/application-local.yml`
164. `src/main/resources/application-prod.yml`
165. `src/main/resources/application-qa.yml`
166. `src/main/resources/application-uat.yml`
167. `src/main/resources/application.yml`
168. `src/main/resources/banner.txt`
169. `src/main/resources/log/JsonEventLayout_error.json`
170. `src/main/resources/log/JsonEventLayout_info.json`
171. `src/main/resources/log/JsonEventLayout_trace.json`
172. `src/main/resources/log/log4j2-prod.properties`
173. `src/main/resources/log/log4j2.properties`

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
        <version>3.5.16</version>
        <relativePath/>
    </parent>

    <groupId>com.nubo.operations.custody.transfer.api</groupId>
    <artifactId>operations-custody-transfer-api</artifactId>
    <version>0.43.0-beta.11</version>
    <name>${project.artifactId}</name>
    <description>Operations Custody Transfer Api</description>

    <properties>
        <java.version>17</java.version>
        <spring.port>8080</spring.port>
        <test.skip>false</test.skip>
        <datasource.url.application.name>ApplicationName=${project.artifactId}</datasource.url.application.name>
        <hikari.pool.name>${project.artifactId}-pool</hikari.pool.name>

        <!-- Security fixes -->
        <log4j2.version>2.25.5</log4j2.version>
        <commons-lang3.version>3.18.0</commons-lang3.version>
        <tomcat.version>10.1.57</tomcat.version>
        <postgresql.version>42.7.12</postgresql.version>
        <jackson-bom.version>2.21.5</jackson-bom.version>
        <lz4-java.version>1.11.1</lz4-java.version>
    </properties>

    <dependencyManagement>
        <dependencies>
            <!-- Align all Jackson artifacts: jackson-core, jackson-databind, jackson-annotations, etc. -->
            <dependency>
                <groupId>com.fasterxml.jackson</groupId>
                <artifactId>jackson-bom</artifactId>
                <version>${jackson-bom.version}</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>

            <!-- Fix transitive vulnerability reported by Trivy -->
            <dependency>
                <groupId>at.yawk.lz4</groupId>
                <artifactId>lz4-java</artifactId>
                <version>${lz4-java.version}</version>
            </dependency>
        </dependencies>
    </dependencyManagement>

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

        <!-- Jackson: version managed by jackson-bom.version -->
        <dependency>
            <groupId>com.fasterxml.jackson.core</groupId>
            <artifactId>jackson-core</artifactId>
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

        <!-- PostgreSQL: version managed by postgresql.version -->
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

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>

        <dependency>
            <groupId>org.xmlunit</groupId>
            <artifactId>xmlunit-core</artifactId>
            <scope>test</scope>
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

        <!-- Security fix for CVE-2025-48924 -->
        <dependency>
            <groupId>org.apache.commons</groupId>
            <artifactId>commons-lang3</artifactId>
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
                                <exclude>**/OperationsCustodyTransferApiApplication.class</exclude>
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

## src/main/java/com/nubo/operations/custody/transfer/api/OperationsCustodyTransferApiApplication.java

```java
package com.nubo.operations.custody.transfer.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class OperationsCustodyTransferApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(OperationsCustodyTransferApiApplication.class, args);
	}

}

```

## src/main/java/com/nubo/operations/custody/transfer/api/application/annotations/ValidBigDecimal.java

```java
package com.nubo.operations.custody.transfer.api.application.annotations;

import com.nubo.operations.custody.transfer.api.application.config.ValidBigDecimalConfig;
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

## src/main/java/com/nubo/operations/custody/transfer/api/application/config/KafkaProducerConfig.java

```java
package com.nubo.operations.custody.transfer.api.application.config;

import com.nubo.operations.custody.transfer.api.application.properties.PropertiesConfig;
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

## src/main/java/com/nubo/operations/custody/transfer/api/application/config/SwaggerConfig.java

```java
package com.nubo.operations.custody.transfer.api.application.config;

import com.nubo.operations.custody.transfer.api.exception.error.ErrorResponse;
import com.nubo.operations.custody.transfer.api.exception.error.ErrorValidation;
import com.nubo.operations.custody.transfer.api.models.enums.PropertiesEnum;
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

## src/main/java/com/nubo/operations/custody/transfer/api/application/config/ValidBigDecimalConfig.java

```java
package com.nubo.operations.custody.transfer.api.application.config;

import com.nubo.operations.custody.transfer.api.application.annotations.ValidBigDecimal;
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

## src/main/java/com/nubo/operations/custody/transfer/api/application/config/WebConfig.java

```java
package com.nubo.operations.custody.transfer.api.application.config;

import com.nubo.operations.custody.transfer.api.application.interceptors.GlobalInterceptor;
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

## src/main/java/com/nubo/operations/custody/transfer/api/application/context/GlobalContext.java

```java
package com.nubo.operations.custody.transfer.api.application.context;

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

## src/main/java/com/nubo/operations/custody/transfer/api/application/database/NamingStrategyConfig.java

```java
package com.nubo.operations.custody.transfer.api.application.database;

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

## src/main/java/com/nubo/operations/custody/transfer/api/application/database/UpperNamingConfig.java

```java
package com.nubo.operations.custody.transfer.api.application.database;

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

## src/main/java/com/nubo/operations/custody/transfer/api/application/filters/GlobalFilter.java

```java
package com.nubo.operations.custody.transfer.api.application.filters;

import com.nubo.operations.custody.transfer.api.application.context.GlobalContext;
import com.nubo.operations.custody.transfer.api.application.util.ApplicationUtils;
import com.nubo.operations.custody.transfer.api.exception.ServiceException;
import com.nubo.operations.custody.transfer.api.exception.error.ErrorCode;
import com.nubo.operations.custody.transfer.api.exception.error.ErrorResponse;
import com.nubo.operations.custody.transfer.api.models.entity.UserNuboEntity;
import com.nubo.operations.custody.transfer.api.models.enums.PropertiesEnum;
import com.nubo.operations.custody.transfer.api.models.enums.VersionApiEnum;
import com.nubo.operations.custody.transfer.api.repository.UserNuboRepository;
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
            String clientIpHeader = this.validateClientIpHeader(request);
            String clientUserHeader = this.validateClientUserHeader(request);
            String clientDatetime = this.validateClientDatetimeHeader(request);
            UserNuboEntity userNuboEntity = this.validateUserExists(clientUserHeader);

            GlobalContext.setProperty(PropertiesEnum.VERSION_API.getValue(), VersionApiEnum.fromValue(versionPath).getValue());
            GlobalContext.setProperty(PropertiesEnum.CLIENT_IP.getValue(), clientIpHeader);
            GlobalContext.setProperty(PropertiesEnum.CLIENT_USER.getValue(), clientUserHeader);
            GlobalContext.setProperty(PropertiesEnum.CLIENT_DATETIME.getValue(), clientDatetime);
            GlobalContext.setProperty(PropertiesEnum.CLIENT_USER_ENTITY.getValue(), userNuboEntity);

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
                .errorMessageDetail(ObjectUtils.isEmpty(exception.getCause()) ? exception.getMessage()
                        : exception.getCause().getMessage())
                .timestamp(String.valueOf(LocalDateTime.now()))
                .build();
        response.getWriter().write(ApplicationUtils.convertObjectToJson(errorResponse));
        response.setStatus(exception.getHttpStatus().value());

        log.error("Error -> {}", errorResponse);
    }

    private UserNuboEntity validateUserExists(String clientUser) {
        return userNuboRepository.findByUserName(clientUser)
                .orElseThrow(() -> new ServiceException(ErrorCode.UNAUTHORIZED, HttpStatus.UNAUTHORIZED));
    }
}

```

## src/main/java/com/nubo/operations/custody/transfer/api/application/interceptors/GlobalInterceptor.java

```java
package com.nubo.operations.custody.transfer.api.application.interceptors;

import com.nubo.operations.custody.transfer.api.application.context.GlobalContext;
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

## src/main/java/com/nubo/operations/custody/transfer/api/application/properties/PropertiesConfig.java

```java
package com.nubo.operations.custody.transfer.api.application.properties;

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

    @Value("${kafka.nubo.producer.topic-name-special-trade-compensation}")
    private String kafkaNuboProducerTopicNameSpecialTradeCompensation;

    @Value("${kafka.nubo.notification.id:23}")
    private String kafkaNuboNotificationId;

    @Value("${kafka.nubo.notification.event-type}")
    private String kafkaNuboNotificationEventType;

    @Value("${kafka.nubo.notification.module}")
    private String kafkaNuboNotificationModule;

    @Value("${kafka.nubo.notification.kafka-notification-request-topic}")
    private String kafkaNuboNotificationTopic;

    @Value("${client.nubo.url-businessday-calculation}")
    private String urlNuboBusinessdayCalculation;

    @Value("${client.nubo.url-email-api}")
    private String urlEmailApi;

    @Value("${client.nubo.url-operation-rules}")
    private String urlNuboOperationRules;

    @Value("${client.nubo.packages-custody-cmd.base-url}")
    private String packagesCustodyCmdBaseUrl;

    @Value("${client.nubo.packages-custody-cmd.version}")
    private String packagesCustodyCmdVersion;

    @Value("${client.nubo.packages-custody-cmd.automatic-path}")
    private String packagesCustodyCmdAutomaticPath;

    @Value("${kafka.nubo.producer.topic-create-package-custody}")
    private String kafkaNuboProducerTopicCreatePackageCustody;

}

```

## src/main/java/com/nubo/operations/custody/transfer/api/application/properties/PropertiesContext.java

```java
package com.nubo.operations.custody.transfer.api.application.properties;

import com.nubo.operations.custody.transfer.api.application.context.GlobalContext;
import com.nubo.operations.custody.transfer.api.application.util.ApplicationUtils;
import com.nubo.operations.custody.transfer.api.models.entity.UserNuboEntity;
import com.nubo.operations.custody.transfer.api.models.enums.PropertiesEnum;
import org.springframework.util.ObjectUtils;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public final class PropertiesContext {

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

    public static UserNuboEntity getClientUserEntity() {
        return (UserNuboEntity) GlobalContext.getProperty(PropertiesEnum.CLIENT_USER_ENTITY.getValue());
    }

    public static String getAuthToken() {
        return GlobalContext.getPropertyString(PropertiesEnum.AUTH_TOKEN.getValue());
    }

}


```

## src/main/java/com/nubo/operations/custody/transfer/api/application/util/ApplicationUtils.java

```java
package com.nubo.operations.custody.transfer.api.application.util;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.nubo.operations.custody.transfer.api.application.properties.PropertiesContext;
import com.nubo.operations.custody.transfer.api.exception.ServiceException;
import com.nubo.operations.custody.transfer.api.exception.error.ErrorCode;
import com.nubo.operations.custody.transfer.api.models.domain.UserNuboData;
import com.nubo.operations.custody.transfer.api.models.entity.ParticipantEntity;
import com.nubo.operations.custody.transfer.api.models.entity.UserNuboEntity;
import com.nubo.operations.custody.transfer.api.models.enums.UserTypeEnum;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Objects;

import org.springframework.http.HttpStatus;

public final class ApplicationUtils {

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

    public static UserNuboData getUserNuboData() {
        UserNuboEntity userNuboEntity = PropertiesContext.getClientUserEntity();
        UserNuboData userNuboData = null;
        if (Objects.equals(UserTypeEnum.INTERNAL.getValue(), userNuboEntity.getUserType())) {
            userNuboData = new UserNuboData(userNuboEntity.getId(), null, false, null, UserTypeEnum.INTERNAL,
                    userNuboEntity.getParticipant());
        }
        if (Objects.equals(UserTypeEnum.EXTERNAL.getValue(), userNuboEntity.getUserType())) {
            ParticipantEntity participant = userNuboEntity.getParticipant();
            boolean isCustodian = participant != null && Boolean.TRUE.equals(participant.getCustodian());
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

}

```

## src/main/java/com/nubo/operations/custody/transfer/api/application/util/RestClientUtils.java

```java
package com.nubo.operations.custody.transfer.api.application.util;

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

## src/main/java/com/nubo/operations/custody/transfer/api/client/businessday/calculation/model/dto/response/BusinessDayOutDto.java

```java
package com.nubo.operations.custody.transfer.api.client.businessday.calculation.model.dto.response;

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

## src/main/java/com/nubo/operations/custody/transfer/api/client/businessday/calculation/service/BusinessDayCalculationClient.java

```java
package com.nubo.operations.custody.transfer.api.client.businessday.calculation.service;


import com.nubo.operations.custody.transfer.api.client.businessday.calculation.model.dto.response.BusinessDayOutDto;

public interface BusinessDayCalculationClient {

    BusinessDayOutDto validBusinessDay(Long countryId);

}
```

## src/main/java/com/nubo/operations/custody/transfer/api/client/businessday/calculation/service/impl/BusinessDayCalculationClientImpl.java

```java
package com.nubo.operations.custody.transfer.api.client.businessday.calculation.service.impl;


import com.nubo.operations.custody.transfer.api.application.properties.PropertiesConfig;
import com.nubo.operations.custody.transfer.api.application.properties.PropertiesContext;
import com.nubo.operations.custody.transfer.api.application.util.ApplicationUtils;
import com.nubo.operations.custody.transfer.api.application.util.RestClientUtils;
import com.nubo.operations.custody.transfer.api.client.businessday.calculation.model.dto.response.BusinessDayOutDto;
import com.nubo.operations.custody.transfer.api.client.businessday.calculation.service.BusinessDayCalculationClient;
import com.nubo.operations.custody.transfer.api.exception.ServiceException;
import com.nubo.operations.custody.transfer.api.exception.error.ErrorCode;
import com.nubo.operations.custody.transfer.api.models.enums.PropertiesEnum;
import com.nubo.operations.custody.transfer.api.models.enums.VersionApiEnum;
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

## src/main/java/com/nubo/operations/custody/transfer/api/client/email/models/dto/request/EmailCodeTemplateInDto.java

```java
package com.nubo.operations.custody.transfer.api.client.email.models.dto.request;

import com.nubo.operations.custody.transfer.api.client.email.models.enums.EmailTemplateEnum;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EmailCodeTemplateInDto {

    private EmailTemplateEnum codeTemplate;

    private String processName;

    private String message;

    private String guaranteeNumber;

    private String operationNumber;

    private String registrationDate;

    private String isinNumber;

    private String guaranteeQuantity;

}

```

## src/main/java/com/nubo/operations/custody/transfer/api/client/email/models/dto/response/EmailNuboOutDto.java

```java
package com.nubo.operations.custody.transfer.api.client.email.models.dto.response;

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

    //private UserNuboOutDto userNuboOutDto;

}

```

## src/main/java/com/nubo/operations/custody/transfer/api/client/email/models/enums/EmailTemplateEnum.java

```java
package com.nubo.operations.custody.transfer.api.client.email.models.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Arrays;

@Getter
@RequiredArgsConstructor
public enum EmailTemplateEnum {

    PENDING_TRANSFER_CUSTODIAN("PENDING_TRANSFER_CUSTODIAN");

    private final String code;

    @JsonValue
    public String getCode() {
        return code;
    }

    @JsonCreator
    public static EmailTemplateEnum fromCode(String code) {
        return Arrays.stream(EmailTemplateEnum.values())
                .filter(template -> template.code.equalsIgnoreCase(code))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Code not implemented: " + code));
    }

}

```

## src/main/java/com/nubo/operations/custody/transfer/api/client/email/service/EmailClient.java

```java
package com.nubo.operations.custody.transfer.api.client.email.service;

import java.util.List;
import java.util.concurrent.CompletableFuture;

import com.nubo.operations.custody.transfer.api.client.email.models.dto.request.EmailCodeTemplateInDto;
import com.nubo.operations.custody.transfer.api.client.email.models.dto.response.EmailNuboOutDto;

public interface EmailClient {

    EmailNuboOutDto sendEmailByCodeAndUser(Long userId, EmailCodeTemplateInDto templateUserInDto);

    List<EmailNuboOutDto> sendEmailByCodeAndParticipant(Long participantId, Long screenId,
            EmailCodeTemplateInDto emailCodeTemplateInDto);

    CompletableFuture<EmailNuboOutDto> sendEmailByCodeAndUserAsync(Long userId, EmailCodeTemplateInDto templateUserInDto);

    CompletableFuture<List<EmailNuboOutDto>> sendEmailByCodeAndParticipantAsync(Long participantId, Long screenId,
            EmailCodeTemplateInDto emailCodeTemplateInDto);
}

```

## src/main/java/com/nubo/operations/custody/transfer/api/client/email/service/impl/EmailClientImpl.java

```java
package com.nubo.operations.custody.transfer.api.client.email.service.impl;

import java.net.URI;
import java.util.List;
import java.util.concurrent.CompletableFuture;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;
import org.springframework.web.util.UriComponentsBuilder;

import com.nubo.operations.custody.transfer.api.application.properties.PropertiesConfig;
import com.nubo.operations.custody.transfer.api.application.properties.PropertiesContext;
import com.nubo.operations.custody.transfer.api.application.util.ApplicationUtils;
import com.nubo.operations.custody.transfer.api.application.util.RestClientUtils;
import com.nubo.operations.custody.transfer.api.client.email.models.dto.request.EmailCodeTemplateInDto;
import com.nubo.operations.custody.transfer.api.client.email.models.dto.response.EmailNuboOutDto;
import com.nubo.operations.custody.transfer.api.client.email.service.EmailClient;
import com.nubo.operations.custody.transfer.api.exception.ClientException;
import com.nubo.operations.custody.transfer.api.exception.error.ErrorCode;
import com.nubo.operations.custody.transfer.api.models.enums.PropertiesEnum;
import com.nubo.operations.custody.transfer.api.models.enums.VersionApiEnum;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class EmailClientImpl implements EmailClient {

    private final PropertiesConfig propertiesConfig;
    private final RestClientUtils restClientUtils;

    @Override
    public EmailNuboOutDto sendEmailByCodeAndUser(Long userId, EmailCodeTemplateInDto templateUserInDto) {
        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getUrlEmailApi())
                .pathSegment(VersionApiEnum.V1.getValue())
                .path("/notification/send-email/code-template/user")
                .queryParam("userId", userId)
                .build()
                .toUri();

        try {
            ResponseEntity<EmailNuboOutDto> response = restClientUtils.requestWithResponseObject(uri,
                    HttpMethod.POST, getHttpHeaders(), templateUserInDto, EmailNuboOutDto.class);
            if (!ObjectUtils.isEmpty(response.getBody())) {
                return response.getBody();
            }
        } catch (Exception ex) {
            throw new ClientException(ErrorCode.CLIENT_EMAIL_ERROR, HttpStatus.BAD_GATEWAY, ex);
        }

        return EmailNuboOutDto.builder().build();
    }

    @Override
    public List<EmailNuboOutDto> sendEmailByCodeAndParticipant(Long participantId, Long screenId,
            EmailCodeTemplateInDto emailCodeTemplateInDto) {
        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getUrlEmailApi())
                .pathSegment(VersionApiEnum.V1.getValue())
                .path("/notification/send-email/code-template/participant")
                .queryParam("participantId", participantId)
                .queryParam("screenId", screenId)
                .build()
                .toUri();

        try {
            ResponseEntity<EmailNuboOutDto[]> response = restClientUtils.requestWithResponseObject(uri,
                    HttpMethod.POST, getHttpHeaders(), emailCodeTemplateInDto, EmailNuboOutDto[].class);
            if (!ObjectUtils.isEmpty(response.getBody())) {
                return List.of(response.getBody());
            }
        } catch (Exception ex) {
            throw new ClientException(ErrorCode.CLIENT_EMAIL_ERROR, HttpStatus.BAD_GATEWAY, ex);
        }

        return List.of(EmailNuboOutDto.builder().build());
    }

    @Override
    @Async
    public CompletableFuture<EmailNuboOutDto> sendEmailByCodeAndUserAsync(Long userId,
            EmailCodeTemplateInDto templateUserInDto) {
        return CompletableFuture.supplyAsync(() -> sendEmailByCodeAndUser(userId, templateUserInDto));
    }

    @Override
    @Async
        public CompletableFuture<List<EmailNuboOutDto>> sendEmailByCodeAndParticipantAsync(Long participantId, Long screenId,
            EmailCodeTemplateInDto emailCodeTemplateInDto) {
        return CompletableFuture
                .supplyAsync(() -> sendEmailByCodeAndParticipant(participantId, screenId, emailCodeTemplateInDto));
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

## src/main/java/com/nubo/operations/custody/transfer/api/client/kafka/producer/dto/request/PackageCustodianInDto.java

```java
package com.nubo.operations.custody.transfer.api.client.kafka.producer.dto.request;

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

## src/main/java/com/nubo/operations/custody/transfer/api/client/kafka/producer/dto/request/ProducerSpecialTradeCompensationInDto.java

```java
package com.nubo.operations.custody.transfer.api.client.kafka.producer.dto.request;

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

## src/main/java/com/nubo/operations/custody/transfer/api/client/kafka/producer/service/KafkaNuboProducer.java

```java
package com.nubo.operations.custody.transfer.api.client.kafka.producer.service;

import com.nubo.operations.custody.transfer.api.client.kafka.producer.dto.request.PackageCustodianInDto;

public interface KafkaNuboProducer {

    void sendMessageSpecialTradeCompensation(Long specialTradeId, Long paymentTypeId);
    void sendMessageNotification(String message);
    void sendCreatePackageCustodySync(PackageCustodianInDto packageCustodianInDto);
}

```

## src/main/java/com/nubo/operations/custody/transfer/api/client/kafka/producer/service/impl/KafkaNuboProducerImpl.java

```java
package com.nubo.operations.custody.transfer.api.client.kafka.producer.service.impl;

import com.nubo.operations.custody.transfer.api.application.properties.PropertiesConfig;
import com.nubo.operations.custody.transfer.api.application.properties.PropertiesContext;
import com.nubo.operations.custody.transfer.api.application.util.ApplicationUtils;
import com.nubo.operations.custody.transfer.api.client.kafka.producer.dto.request.PackageCustodianInDto;
import com.nubo.operations.custody.transfer.api.client.kafka.producer.dto.request.ProducerSpecialTradeCompensationInDto;
import com.nubo.operations.custody.transfer.api.client.kafka.producer.service.KafkaNuboProducer;
import com.nubo.operations.custody.transfer.api.exception.ServiceException;
import com.nubo.operations.custody.transfer.api.exception.error.ErrorCode;
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

    public void sendMessageSpecialTradeCompensation(Long specialTradeId, Long paymentTypeId) {
        log.debug("Start method sendMessageSpecialTradeCompensation, specialTradeId -> {}, paymentTypeId -> {}", specialTradeId, paymentTypeId);

        ProducerSpecialTradeCompensationInDto producerSpecialTradeCompensationInDto = ProducerSpecialTradeCompensationInDto.builder()
                .specialTradeId(specialTradeId)
                .paymentTypeId(paymentTypeId)
                .clientIp(PropertiesContext.getClientIp())
                .clientUser(PropertiesContext.getClientUser())
                .clientDateTime(ApplicationUtils.convertLocalDateTimeToString(PropertiesContext.getClientDatetime()))
                .specialTradeCompensation(true)
                .build();

        String topic = propertiesConfig.getKafkaNuboProducerTopicNameSpecialTradeCompensation();
        String jsonString = ApplicationUtils.convertObjectToJson(producerSpecialTradeCompensationInDto);
        CompletableFuture<SendResult<String, String>> future = kafkaNuboTemplate.send(topic, jsonString).toCompletableFuture();

        future.thenAccept(result -> log.info("Send message Kafka Special Trade Compensation -- Topic: {} -- offset: {} -- json: {} ",
                        topic, result.getRecordMetadata().offset(), jsonString))
                .exceptionally(ex -> {
                    throw new ServiceException(ErrorCode.ERROR_KAFKA_PRODUCER_NUBO, ex);
                });
    }

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

    @Override
    public void sendCreatePackageCustodySync(PackageCustodianInDto packageCustodianInDto) {
        String topic = propertiesConfig.getKafkaNuboProducerTopicCreatePackageCustody();
        String jsonString = ApplicationUtils.convertObjectToJson(packageCustodianInDto);
        try {
            kafkaNuboTemplate.send(topic, jsonString).get();
            log.debug("Send message -- Topic: {} -- json: {} ", topic, jsonString);
        } catch (Exception ex) {
            log.error("Error sending message to topic: {} -- json: {}, Exception: {}", topic, jsonString, ex);
        }
    }

}

```

## src/main/java/com/nubo/operations/custody/transfer/api/client/packagecustodian/dto/request/PackageCustodianAutomaticInDto.java

```java
package com.nubo.operations.custody.transfer.api.client.packagecustodian.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PackageCustodianAutomaticInDto {

    private String sourceApplication;
    private LocalDate executionDate;
    private String cutType;
    private Boolean sameDaySettlement;

    @Builder.Default
    private List<PackageDto> packages = new ArrayList<>();

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class PackageDto {
        private String marketId;
        private String codeSCB;
        private String sideId;
        private Long investorId;
        private Long participantId;
        private Long investorAccountId;
        private Long isinNumberId;
        private Long securityId;
        private Long typeId;
        private String depositoryId;
        private LocalDate clearingDate;
        private LocalDate returnClearingDate;
        private Long custodianStatusId;
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
        private List<DetailDto> details = new ArrayList<>();
    }

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class DetailDto {
        private Long tradeId;
        private String sideId;
        private Long fraction;
        private LocalDate matchDate;
        private Long uniqueFractionId;
        private Long investorId;
        private Long custodianId;
        private Long participantId;
        private LocalDate clearingDate;
        private LocalDate returnClearingDate;
        private BigDecimal fractionQuantity;
        private BigDecimal price;
        private BigDecimal rate;
        private Boolean indicateExitReturn;
    }
}

```

## src/main/java/com/nubo/operations/custody/transfer/api/client/packagecustodian/dto/response/PackageCustodianAutomaticOutDto.java

```java
package com.nubo.operations.custody.transfer.api.client.packagecustodian.dto.response;

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

## src/main/java/com/nubo/operations/custody/transfer/api/client/packagecustodian/service/PackageCustodianCmdClient.java

```java
package com.nubo.operations.custody.transfer.api.client.packagecustodian.service;

import com.nubo.operations.custody.transfer.api.client.packagecustodian.dto.request.PackageCustodianAutomaticInDto;
import com.nubo.operations.custody.transfer.api.client.packagecustodian.dto.response.PackageCustodianAutomaticOutDto;

public interface PackageCustodianCmdClient {

    PackageCustodianAutomaticOutDto createAutomaticPackages(PackageCustodianAutomaticInDto request);
}

```

## src/main/java/com/nubo/operations/custody/transfer/api/client/packagecustodian/service/impl/PackageCustodianCmdClientImpl.java

```java
package com.nubo.operations.custody.transfer.api.client.packagecustodian.service.impl;

import com.nubo.operations.custody.transfer.api.application.properties.PropertiesConfig;
import com.nubo.operations.custody.transfer.api.application.properties.PropertiesContext;
import com.nubo.operations.custody.transfer.api.application.util.ApplicationUtils;
import com.nubo.operations.custody.transfer.api.application.util.RestClientUtils;
import com.nubo.operations.custody.transfer.api.client.packagecustodian.dto.request.PackageCustodianAutomaticInDto;
import com.nubo.operations.custody.transfer.api.client.packagecustodian.dto.response.PackageCustodianAutomaticOutDto;
import com.nubo.operations.custody.transfer.api.client.packagecustodian.service.PackageCustodianCmdClient;
import com.nubo.operations.custody.transfer.api.exception.ClientException;
import com.nubo.operations.custody.transfer.api.exception.error.ErrorCode;
import com.nubo.operations.custody.transfer.api.models.enums.PropertiesEnum;
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

## src/main/java/com/nubo/operations/custody/transfer/api/client/rules/models/dto/request/StatusUpdateSettlementInDto.java

```java
package com.nubo.operations.custody.transfer.api.client.rules.models.dto.request;

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
    private String sideId;

    @NotNull
    private String code;

    @NotNull
    private Integer fraction;

}

```

## src/main/java/com/nubo/operations/custody/transfer/api/client/rules/models/dto/response/StatusUpdateSettlementOutDto.java

```java
package com.nubo.operations.custody.transfer.api.client.rules.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.nubo.operations.custody.transfer.api.models.dto.response.StatusOutDto;
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

    private StatusOutDto newStatusFraction;

    private StatusOutDto newStatusSide;

    private StatusOutDto newStatusTrade;

}

```

## src/main/java/com/nubo/operations/custody/transfer/api/client/rules/service/OperationBusinessRuleClient.java

```java
package com.nubo.operations.custody.transfer.api.client.rules.service;

import com.nubo.operations.custody.transfer.api.client.rules.models.dto.request.StatusUpdateSettlementInDto;
import com.nubo.operations.custody.transfer.api.client.rules.models.dto.response.StatusUpdateSettlementOutDto;

public interface OperationBusinessRuleClient {

    StatusUpdateSettlementOutDto validateUpdateStatusSettlement(
            StatusUpdateSettlementInDto statusUpdateSettlementInDto);

}

```

## src/main/java/com/nubo/operations/custody/transfer/api/client/rules/service/impl/OperationBusinessRuleClientImpl.java

```java
package com.nubo.operations.custody.transfer.api.client.rules.service.impl;

import com.nubo.operations.custody.transfer.api.application.properties.PropertiesConfig;
import com.nubo.operations.custody.transfer.api.application.properties.PropertiesContext;
import com.nubo.operations.custody.transfer.api.application.util.ApplicationUtils;
import com.nubo.operations.custody.transfer.api.application.util.RestClientUtils;
import com.nubo.operations.custody.transfer.api.client.rules.models.dto.request.StatusUpdateSettlementInDto;
import com.nubo.operations.custody.transfer.api.client.rules.models.dto.response.StatusUpdateSettlementOutDto;
import com.nubo.operations.custody.transfer.api.client.rules.service.OperationBusinessRuleClient;
import com.nubo.operations.custody.transfer.api.exception.ClientException;
import com.nubo.operations.custody.transfer.api.exception.error.ErrorCode;
import com.nubo.operations.custody.transfer.api.models.enums.PropertiesEnum;
import com.nubo.operations.custody.transfer.api.models.enums.VersionApiEnum;
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
    public StatusUpdateSettlementOutDto validateUpdateStatusSettlement(StatusUpdateSettlementInDto statusUpdateSettlementInDto)
    {
        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getUrlNuboOperationRules())
                .pathSegment(VersionApiEnum.V1.getValue(), OPERATION_STATUS_UPDATE_BUSINESS_RULE)
                .path("/settlement/validation")
                .build()
                .toUri();

        try
        {
            ResponseEntity<StatusUpdateSettlementOutDto> response = restClientUtils.requestWithResponseObject(uri,
                    HttpMethod.POST, getHttpHeaders(), statusUpdateSettlementInDto, StatusUpdateSettlementOutDto.class);

            if (!ObjectUtils.isEmpty(response.getBody()))
            {
                return response.getBody();
            }
        } catch (Exception ex)
        {
            throw new ClientException(ErrorCode.CLIENT_OPERATION_RULES_ERROR, HttpStatus.BAD_GATEWAY, ex);
        }

        return StatusUpdateSettlementOutDto.builder().build();
    }

    private static HttpHeaders getHttpHeaders()
    {
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

## src/main/java/com/nubo/operations/custody/transfer/api/exception/ClientException.java

```java
package com.nubo.operations.custody.transfer.api.exception;

import com.nubo.operations.custody.transfer.api.exception.error.ErrorCode;
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

## src/main/java/com/nubo/operations/custody/transfer/api/exception/ServiceException.java

```java
package com.nubo.operations.custody.transfer.api.exception;

import com.nubo.operations.custody.transfer.api.exception.error.ErrorCode;
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

## src/main/java/com/nubo/operations/custody/transfer/api/exception/error/ErrorCode.java

```java
package com.nubo.operations.custody.transfer.api.exception.error;

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
    ERROR_DESERIALIZER_JSON("Error Deserializer Json"),
    PARTICIPANT_NOT_FOUND("Participant not found"),
    SIDE_NOT_FOUND("Side not found"),
    STATUS_NOT_FOUND("Status not found"),
    FIC_ADMINISTRATOR_NOT_FOUND("FIC Administrator not found"),
    TRADE_NOT_FOUND("Trade not found"),
    SETTLEMENT_NOT_FOUND("Settlement not found"),
    TYPE_NOT_FOUND("Type not found"),
    REJECTION_REASON_NOT_FOUND("Rejection Reason not found"),
    USER_TYPE_NOT_VALID("User type is not valid"),
    CLIENT_USER_MANAGEMENT_ERROR("An unexpected error occurred in User Management"),
    CLIENT_BUSINESSDAY_CALCULATION_ERROR("An unexpected error occurred in Business Calculation"),
    CLIENT_OPERATION_RULES_ERROR("An unexpected error occurred in Operation Rules"),
    CLIENT_PACKAGE_CUSTODY_CMD_ERROR("An unexpected error occurred in Packages Custody CMD"),
    PACKAGE_CUSTODY_TRANSFER_DATA_INVALID("Cannot create custody package from transfer because required data is missing"),
    ERROR_KAFKA_PRODUCER_NUBO("Error Producer Kafka Nubo"),
    CLIENT_EMAIL_ERROR("An unexpected error occurred in Email API");

    private final String message;

    ErrorCode(String message) {
        this.message = message;
    }

    public String getName() {
        return this.name();
    }

}

```

## src/main/java/com/nubo/operations/custody/transfer/api/exception/error/ErrorResponse.java

```java
package com.nubo.operations.custody.transfer.api.exception.error;

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

## src/main/java/com/nubo/operations/custody/transfer/api/exception/error/ErrorValidation.java

```java
package com.nubo.operations.custody.transfer.api.exception.error;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ErrorValidation {

    private String id;
    private String description;

}

```

## src/main/java/com/nubo/operations/custody/transfer/api/exception/handler/CustomKafkaErrorHandler.java

```java
package com.nubo.operations.custody.transfer.api.exception.handler;

import com.nubo.operations.custody.transfer.api.exception.ServiceException;
import com.nubo.operations.custody.transfer.api.exception.error.ErrorCode;
import com.nubo.operations.custody.transfer.api.exception.kafka.KafkaErrorBuild;
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

## src/main/java/com/nubo/operations/custody/transfer/api/exception/handler/GlobalExceptionHandler.java

```java
package com.nubo.operations.custody.transfer.api.exception.handler;

import com.nubo.operations.custody.transfer.api.application.properties.PropertiesContext;
import com.nubo.operations.custody.transfer.api.exception.ServiceException;
import com.nubo.operations.custody.transfer.api.exception.error.ErrorCode;
import com.nubo.operations.custody.transfer.api.exception.error.ErrorResponse;
import com.nubo.operations.custody.transfer.api.exception.error.ErrorValidation;
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

}

```

## src/main/java/com/nubo/operations/custody/transfer/api/exception/kafka/KafkaErrorBuild.java

```java
package com.nubo.operations.custody.transfer.api.exception.kafka;

import com.nubo.operations.custody.transfer.api.application.properties.PropertiesConfig;
import com.nubo.operations.custody.transfer.api.exception.error.ErrorCode;
import com.nubo.operations.custody.transfer.api.exception.error.ErrorResponse;
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

## src/main/java/com/nubo/operations/custody/transfer/api/helpers/MapperPageUtil.java

```java
package com.nubo.operations.custody.transfer.api.helpers;

import com.nubo.operations.custody.transfer.api.models.dto.response.PageResponseOutDto;
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

## src/main/java/com/nubo/operations/custody/transfer/api/helpers/MapperUtil.java

```java
package com.nubo.operations.custody.transfer.api.helpers;

import org.springframework.util.ObjectUtils;

import com.nubo.operations.custody.transfer.api.models.dto.request.SettlementUpdateTransferInDto;
import com.nubo.operations.custody.transfer.api.models.dto.response.CountryOutDto;
import com.nubo.operations.custody.transfer.api.models.dto.response.CurrencyOutDto;
import com.nubo.operations.custody.transfer.api.models.dto.response.DepositoryOutDto;
import com.nubo.operations.custody.transfer.api.models.dto.response.GicsOutDto;
import com.nubo.operations.custody.transfer.api.models.dto.response.IdentificationTypeOutDto;
import com.nubo.operations.custody.transfer.api.models.dto.response.InvestorAccountOutDto;
import com.nubo.operations.custody.transfer.api.models.dto.response.InvestorOutDto;
import com.nubo.operations.custody.transfer.api.models.dto.response.MarketOutDto;
import com.nubo.operations.custody.transfer.api.models.dto.response.ParticipantAccountOutDto;
import com.nubo.operations.custody.transfer.api.models.dto.response.ParticipantOutDto;
import com.nubo.operations.custody.transfer.api.models.dto.response.RejectionReasonOutDto;
import com.nubo.operations.custody.transfer.api.models.dto.response.SecurityTitleOutDto;
import com.nubo.operations.custody.transfer.api.models.dto.response.SettlementByCustodyOutDto;
import com.nubo.operations.custody.transfer.api.models.dto.response.SettlementKeyOutDto;
import com.nubo.operations.custody.transfer.api.models.dto.response.SettlementOutDto;
import com.nubo.operations.custody.transfer.api.models.dto.response.SettlementTransferResultOutDto;
import com.nubo.operations.custody.transfer.api.models.dto.response.SettlementTransferRowOutDto;
import com.nubo.operations.custody.transfer.api.models.dto.response.SideOutDto;
import com.nubo.operations.custody.transfer.api.models.dto.response.SmallParticipantOutDto;
import com.nubo.operations.custody.transfer.api.models.dto.response.StatusOutDto;
import com.nubo.operations.custody.transfer.api.models.dto.response.TaxStatusOutDto;
import com.nubo.operations.custody.transfer.api.models.dto.response.TradeOutDto;
import com.nubo.operations.custody.transfer.api.models.dto.response.TradingSessionOutDto;
import com.nubo.operations.custody.transfer.api.models.dto.response.TradingSystemOutDto;
import com.nubo.operations.custody.transfer.api.models.dto.response.TypeOutDto;
import com.nubo.operations.custody.transfer.api.models.entity.CountryEntity;
import com.nubo.operations.custody.transfer.api.models.entity.CurrencyEntity;
import com.nubo.operations.custody.transfer.api.models.entity.DepositoryEntity;
import com.nubo.operations.custody.transfer.api.models.entity.GicsEntity;
import com.nubo.operations.custody.transfer.api.models.entity.IdentificationTypeEntity;
import com.nubo.operations.custody.transfer.api.models.entity.InvestorAccountEntity;
import com.nubo.operations.custody.transfer.api.models.entity.InvestorEntity;
import com.nubo.operations.custody.transfer.api.models.entity.MarketEntity;
import com.nubo.operations.custody.transfer.api.models.entity.ParticipantAccountEntity;
import com.nubo.operations.custody.transfer.api.models.entity.ParticipantEntity;
import com.nubo.operations.custody.transfer.api.models.entity.RejectionReasonEntity;
import com.nubo.operations.custody.transfer.api.models.entity.SecurityTitleEntity;
import com.nubo.operations.custody.transfer.api.models.entity.SettlementEntity;
import com.nubo.operations.custody.transfer.api.models.entity.SideEntity;
import com.nubo.operations.custody.transfer.api.models.entity.StatusEntity;
import com.nubo.operations.custody.transfer.api.models.entity.TaxStatusEntity;
import com.nubo.operations.custody.transfer.api.models.entity.TradeEntity;
import com.nubo.operations.custody.transfer.api.models.entity.TradingSessionEntity;
import com.nubo.operations.custody.transfer.api.models.entity.TradingSystemEntity;
import com.nubo.operations.custody.transfer.api.models.entity.TypeEntity;
import com.nubo.operations.custody.transfer.api.models.enums.SideEnum;

public final class MapperUtil {

    private MapperUtil() {
    }

    public static SettlementOutDto settlementEntityToSettlementOutDto(SettlementEntity settlementEntity) {
        if (ObjectUtils.isEmpty(settlementEntity)) return null;
        return SettlementOutDto.builder()
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
                .ficAdministrator(participantEntityToParticipantOutDto(settlementEntity.getFicAdministrator()))
                .custodianStatus(statusEntityToStatusOutDto(settlementEntity.getCustodianStatus()))
                .settlementStatus(statusEntityToStatusOutDto(settlementEntity.getSettlementStatus()))
                .rejectionReason(settlementEntity.getRejectionReason())
                .build();
    }

    public static SettlementTransferResultOutDto
    settlementEntityToSettlementTransferResultDto(SettlementEntity settlementEntity) {

        if (ObjectUtils.isEmpty(settlementEntity)) return null;

        TradeEntity trade = settlementEntity.getTrade();
        ParticipantEntity participant =
                SideEnum.BUY.getId()
                        .equals(settlementEntity.getSide().getId())
                        ? trade.getParticipantBuy()
                        : trade.getParticipantSell();

        return SettlementTransferResultOutDto.builder()
                .tradeId(trade.getId())
                .fraction(settlementEntity.getFraction())
                .side(sideEntityToSideOutDto(settlementEntity.getSide()))
                .participant(
                        participantEntityToParticipantOutDto(participant)
                )
                .matchDate(trade.getMatchDate())
                .clearingDate(trade.getClearingDate())
                .isValid(true)
                .rejectionReason(null)
                .build();
    }

    public static SettlementTransferResultOutDto
    toRejectedSettlementTransferResultDto(
            SettlementUpdateTransferInDto inDto,
            String rejectionReason,
            SideOutDto side,
            TradeEntity trade,
            SettlementEntity settlementEntity) {

        ParticipantEntity participant =
                SideEnum.BUY.getId()
                        .equals(inDto.getSideId())
                        ? trade.getParticipantBuy()
                        : trade.getParticipantSell();

        return SettlementTransferResultOutDto.builder()
                .tradeId(inDto.getTradeId())
                .matchId(trade.getMatchId())
                .fraction(inDto.getFraction())
                .side(side)
                .participant(
                        participantEntityToParticipantOutDto(participant)
                )
                .matchDate(trade.getMatchDate())
                .clearingDate(trade.getClearingDate())
                .isValid(false)
                .rejectionReason(rejectionReason)
                .build();
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
                .ficAdministrator(participantEntityToParticipantOutDto(settlementEntity.getFicAdministrator()))
                .custodianStatus(statusEntityToStatusOutDto(settlementEntity.getCustodianStatus()))
                .settlementStatus(statusEntityToStatusOutDto(settlementEntity.getSettlementStatus()))
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

    public static SecurityTitleOutDto securityTitleEntityToSecurityTitleOutDto(SecurityTitleEntity securityTitleEntity) {
        if (ObjectUtils.isEmpty(securityTitleEntity)) return null;
        return SecurityTitleOutDto.builder()
                .id(securityTitleEntity.getId())
                .market(marketEntityToMarketOutDto(securityTitleEntity.getMarket()))
                .equityCode(securityTitleEntity.getEquityCode())
                .mnemonic(securityTitleEntity.getMnemonic())
                .isin(securityTitleEntity.getIsin())
                .cfi(securityTitleEntity.getCfi())
                .currencyId(securityTitleEntity.getCurrencyId())
                .settlementPeriod(securityTitleEntity.getSettlementPeriod())
                .listingDate(securityTitleEntity.getListingDate())
                .delistingDate(securityTitleEntity.getDelistingDate())
                .parent(securityTitleEntity.getParent())
                .parentId(securityTitleEntity.getParentId())
                .status(statusEntityToStatusOutDto(securityTitleEntity.getStatus()))
                .issuerId(securityTitleEntity.getIssuerId())
                .countryId(securityTitleEntity.getCountryId())
                .amountIssued(securityTitleEntity.getAmountIssued())
                .classId(securityTitleEntity.getClassId())
                .segmentId(securityTitleEntity.getSegmentId())
                .category(securityTitleEntity.getCategory())
                .depository(depositoryEntityToDepositoryOutDto(securityTitleEntity.getDepository()))
                .punishmentRepo(securityTitleEntity.getPunishmentRepo())
                .regulatoryCode(securityTitleEntity.getRegulatoryCode())
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

    public static SmallParticipantOutDto ficAdministratorEntityToFicAdministratorOutDto(ParticipantEntity entity) {
        if (ObjectUtils.isEmpty(entity)) return null;
        return SmallParticipantOutDto.builder()
                .id(entity.getId())
                .code(entity.getCode())
                .name(entity.getName())
                .shortName(entity.getShortName())
                .type(ObjectUtils.isEmpty(entity.getType()) ? null : typeEntityToTypeOutDto(entity.getType()))
                .status(ObjectUtils.isEmpty(entity.getStatus()) ? null : statusEntityToStatusOutDto(entity.getStatus()))
                .documentNumber(entity.getDocumentNumber())
                .identificationType(ObjectUtils.isEmpty(entity.getIdentificationType()) ?
                        null : identificationTypeEntityToIdentificationTypeOutDto(entity.getIdentificationType()))
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
                .code(participantEntity.getCode())
                .name(participantEntity.getName())
                .shortName(participantEntity.getShortName())
                .documentNumber(participantEntity.getDocumentNumber())
                .mnemonic(participantEntity.getMnemonic())
                .enabled(participantEntity.getEnabled())
                .custodian(participantEntity.getCustodian())
                .country(countryEntityToCountryOutDto(participantEntity.getCountry()))
                .status(statusEntityToStatusOutDto(participantEntity.getStatus()))
                .taxStatus(taxStatusEntityToTaxStatusOutDto(participantEntity.getTaxStatus()))
                .identificationType(
                        identificationTypeEntityToIdentificationTypeOutDto(
                                participantEntity.getIdentificationType()
                        )
                )
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

    public static SettlementTransferRowOutDto SettlementtoSettlementTransferDto(SettlementEntity entity) {
        InvestorEntity investor = entity.getInvestor();

        String investorName = investor.getCompanyName() != null
                ? investor.getCompanyName()
                : investor.getFirstName() + " " + investor.getLastName();

        IdentificationTypeEntity identificationType = investor.getIdentificationType();

        String fractionId;
        Integer fraction = entity.getFraction();

        if (fraction == null || fraction == 0) {
            fractionId = "1";
        } else {
            fractionId = entity.getTrade().getId() + "-"
                    + String.format("%02d", fraction);
        }


        return SettlementTransferRowOutDto.builder()
                .tradeId(entity.getTrade().getId())
                .fraction(fractionId)
                .matchDate(entity.getTrade().getMatchDate())
                .settlementDate(entity.getTrade().getClearingDate())
                .investorName(investorName)
                .investorIdentificationType(identificationType != null ? identificationType.getDescription() : null)
                .investorIdentificationCode(identificationType != null ? identificationType.getCode() : null)
                .investorDocumentNumber(investor.getDocumentNumber())
                .investorAccountNumber(entity.getInvestorAccount().getAccountNumber())
                .quantity(entity.getFractionQuantity())
                .custodianId(entity.getCustodian() != null ? entity.getCustodian().getId() : null)
                .custodianName(entity.getCustodian() != null ? entity.getCustodian().getName() : null)
                .ficAdministratorId(entity.getFicAdministrator() != null ? entity.getFicAdministrator().getId() : null)
                .ficAdministratorName(entity.getFicAdministrator() != null ? entity.getFicAdministrator().getName() : null)
                .build();
    }

    public static SettlementKeyOutDto toSettlementKeyOutDto(SettlementEntity entity) {
        if (ObjectUtils.isEmpty(entity)) return null;

        return SettlementKeyOutDto.builder()
                .tradeId(entity.getTrade().getId())
                .fraction(entity.getFraction())
                .sideId(entity.getSide().getId())
                .build();
    }


}

```

## src/main/java/com/nubo/operations/custody/transfer/api/helpers/SendNotificationUtil.java

```java
package com.nubo.operations.custody.transfer.api.helpers;

import java.util.List;

import com.nubo.operations.custody.transfer.api.application.properties.PropertiesConfig;
import com.nubo.operations.custody.transfer.api.client.kafka.producer.service.KafkaNuboProducer;
import com.nubo.operations.custody.transfer.api.models.dto.response.NotificationRequestDto;
import com.nubo.operations.custody.transfer.api.models.enums.NotificationMessageEnum;
import com.nubo.operations.custody.transfer.api.models.enums.NotificationTypeEnum;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Log4j2
@Component
@RequiredArgsConstructor
public class SendNotificationUtil {

    private final PropertiesConfig propertiesConfig;

    @Autowired(required = false)
    private KafkaNuboProducer kafkaNuboAdapter;

    public void sendNotification(NotificationTypeEnum notificationType, NotificationMessageEnum notificationMessage, Long scheduleExtensionId, Long userId) {
        if (kafkaNuboAdapter != null) {
            log.info("Enviando notificación tipo: {} - mensaje: {} - scheduleExtensionId: {} - userId: {}",
                    notificationType.getDescription(), notificationMessage.getDescription(), scheduleExtensionId, userId);
            try {
                ObjectMapper mapper = new ObjectMapper();
                ObjectNode metadataNode = mapper.createObjectNode();
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

                //kafkaNuboAdapter.sendMessageNotification(objectMapper.writeValueAsString(notification));
                log.info("Notificación enviada exitosamente para usuario: {}", userId);

            } catch (Exception e) {
                log.error("Error enviando notificación a Kafka", e);
            }
        } else {
            log.info("KafkaNuboAdapter no disponible, omitiendo envío de notificación");
        }
    }
}

```

## src/main/java/com/nubo/operations/custody/transfer/api/models/domain/UserNuboData.java

```java
package com.nubo.operations.custody.transfer.api.models.domain;

import com.nubo.operations.custody.transfer.api.models.entity.ParticipantEntity;
import com.nubo.operations.custody.transfer.api.models.enums.UserTypeEnum;

public record UserNuboData(
        long userId,
        Long participantId,
        boolean isParticipantCustodian,
        String participantCountryCode,
        UserTypeEnum userTypeEnum,
        ParticipantEntity participantEntity) {
}

```

## src/main/java/com/nubo/operations/custody/transfer/api/models/dto/request/SettlementStatusHistoryInDto.java

```java
package com.nubo.operations.custody.transfer.api.models.dto.request;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SettlementStatusHistoryInDto {

    @NotNull
    private Long tradeId;

    @NotNull
    private Integer fraction;

    @NotNull
    private String sideId;

    @NotNull
    private LocalDateTime time;

    @NotNull
    private Long statusId;

    @NotNull
    private Long custodianStatusId;

}

```

## src/main/java/com/nubo/operations/custody/transfer/api/models/dto/request/SettlementTransferPreviewInDto.java

```java
package com.nubo.operations.custody.transfer.api.models.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SettlementTransferPreviewInDto {

    private List<Long> tradeIds;

}

```

## src/main/java/com/nubo/operations/custody/transfer/api/models/dto/request/SettlementUpdateTransferInDto.java

```java
package com.nubo.operations.custody.transfer.api.models.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SettlementUpdateTransferInDto {

    private Long tradeId;

    private Integer fraction;

    private String sideId;

    private Long custodianId;

    private Long ficAdministratorId;

    private Long statusId;

    private Long custodianStatusId;

}

```

## src/main/java/com/nubo/operations/custody/transfer/api/models/dto/request/SpecialTradeCompensationInDto.java

```java
package com.nubo.operations.custody.transfer.api.models.dto.request;

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
public class SpecialTradeCompensationInDto {

    @NotNull
    @Min(value = 1)
    private Long specialTradeId;

    @NotNull
    @Min(value = 1)
    private Long paymentTypeId;

}

```

## src/main/java/com/nubo/operations/custody/transfer/api/models/dto/request/StatusInDto.java

```java
package com.nubo.operations.custody.transfer.api.models.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class StatusInDto {

    private Long id;

    private String description;

    private String category;

    private String detail;

}

```

## src/main/java/com/nubo/operations/custody/transfer/api/models/dto/request/StatusUpdateInDto.java

```java
package com.nubo.operations.custody.transfer.api.models.dto.request;

import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class StatusUpdateInDto {

    @Size(max = 80)
    private String description;

    @Size(max = 30)
    private String category;

}

```

## src/main/java/com/nubo/operations/custody/transfer/api/models/dto/response/AfpFundOutDto.java

```java
package com.nubo.operations.custody.transfer.api.models.dto.response;

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

## src/main/java/com/nubo/operations/custody/transfer/api/models/dto/response/CountryOutDto.java

```java
package com.nubo.operations.custody.transfer.api.models.dto.response;

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

## src/main/java/com/nubo/operations/custody/transfer/api/models/dto/response/CurrencyOutDto.java

```java
package com.nubo.operations.custody.transfer.api.models.dto.response;

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

## src/main/java/com/nubo/operations/custody/transfer/api/models/dto/response/DepositoryOutDto.java

```java
package com.nubo.operations.custody.transfer.api.models.dto.response;

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

## src/main/java/com/nubo/operations/custody/transfer/api/models/dto/response/EmailTransferCustodianOutDto.java

```java
package com.nubo.operations.custody.transfer.api.models.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EmailTransferCustodianOutDto {
    private boolean sendEmail;
    private String message;
}

```

## src/main/java/com/nubo/operations/custody/transfer/api/models/dto/response/ExchangeRateOutDto.java

```java
package com.nubo.operations.custody.transfer.api.models.dto.response;

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

## src/main/java/com/nubo/operations/custody/transfer/api/models/dto/response/FicAdministratorOutDto.java

```java
package com.nubo.operations.custody.transfer.api.models.dto.response;

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
}

```

## src/main/java/com/nubo/operations/custody/transfer/api/models/dto/response/GicsOutDto.java

```java
package com.nubo.operations.custody.transfer.api.models.dto.response;

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

## src/main/java/com/nubo/operations/custody/transfer/api/models/dto/response/IdentificationTypeOutDto.java

```java
package com.nubo.operations.custody.transfer.api.models.dto.response;

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

## src/main/java/com/nubo/operations/custody/transfer/api/models/dto/response/InvestorAccountOutDto.java

```java
package com.nubo.operations.custody.transfer.api.models.dto.response;

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

## src/main/java/com/nubo/operations/custody/transfer/api/models/dto/response/InvestorOutDto.java

```java
package com.nubo.operations.custody.transfer.api.models.dto.response;

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

## src/main/java/com/nubo/operations/custody/transfer/api/models/dto/response/MarketOutDto.java

```java
package com.nubo.operations.custody.transfer.api.models.dto.response;

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

## src/main/java/com/nubo/operations/custody/transfer/api/models/dto/response/NotificationRequestDto.java

```java
package com.nubo.operations.custody.transfer.api.models.dto.response;

import com.fasterxml.jackson.databind.JsonNode;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class NotificationRequestDto
{

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

## src/main/java/com/nubo/operations/custody/transfer/api/models/dto/response/PageResponseOutDto.java

```java
package com.nubo.operations.custody.transfer.api.models.dto.response;

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

## src/main/java/com/nubo/operations/custody/transfer/api/models/dto/response/ParticipantAccountOutDto.java

```java
package com.nubo.operations.custody.transfer.api.models.dto.response;

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

## src/main/java/com/nubo/operations/custody/transfer/api/models/dto/response/ParticipantOutDto.java

```java
package com.nubo.operations.custody.transfer.api.models.dto.response;

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

## src/main/java/com/nubo/operations/custody/transfer/api/models/dto/response/RejectionReasonOutDto.java

```java
package com.nubo.operations.custody.transfer.api.models.dto.response;

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

## src/main/java/com/nubo/operations/custody/transfer/api/models/dto/response/SecurityTitleOutDto.java

```java
package com.nubo.operations.custody.transfer.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.time.LocalDate;
import java.time.LocalDateTime;

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

    private String cfi;

    private Integer currencyId;

    private String settlementPeriod;

    private LocalDateTime listingDate;

    private LocalDate delistingDate;

    private Boolean parent;

    private Long parentId;

    private StatusOutDto status;

    private Integer issuerId;

    private Integer countryId;

    private BigInteger amountIssued;

    private String classId;

    private Integer segmentId;

    private String category;

    private DepositoryOutDto depository;

    private BigDecimal punishmentRepo;

    private String regulatoryCode;
}

```

## src/main/java/com/nubo/operations/custody/transfer/api/models/dto/response/SettlementByCustodyOutDto.java

```java
package com.nubo.operations.custody.transfer.api.models.dto.response;

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

    private String reference;

    private BigDecimal capitalGainValue;

    private BigDecimal disbursementValue;

    private TypeOutDto sourceQuoteType;

    private ParticipantOutDto ficAdministrator;

    private StatusOutDto custodianStatus;

    private StatusOutDto settlementStatus;

    private TradeOutDto trade;


}

```

## src/main/java/com/nubo/operations/custody/transfer/api/models/dto/response/SettlementInstructionTransferRowOutDto.java

```java
package com.nubo.operations.custody.transfer.api.models.dto.response;

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
public class SettlementInstructionTransferRowOutDto {

    private Long settlementInstructionId;

    private Long tradeId;

    private Integer fraction;

    private LocalDate matchDate;

    private LocalDate settlementDate;

    private String investorName;

    private String investorIdentificationType;

    private String investorIdentificationCode;

    private String investorDocumentNumber;

    private String investorAccountNumber;

    private BigDecimal quantity;

    private Long custodianId;

    private String custodianName;

    private Long ficAdministratorId;

    private String ficAdministratorName;
}

```

## src/main/java/com/nubo/operations/custody/transfer/api/models/dto/response/SettlementKeyOutDto.java

```java
package com.nubo.operations.custody.transfer.api.models.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SettlementKeyOutDto {

    private Long tradeId;

    private Integer fraction;

    private String sideId;

}

```

## src/main/java/com/nubo/operations/custody/transfer/api/models/dto/response/SettlementOutDto.java

```java
package com.nubo.operations.custody.transfer.api.models.dto.response;

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

    private String reference;

    private BigDecimal capitalGainValue;

    private BigDecimal disbursementValue;

    private TypeOutDto sourceQuoteType;

    private ParticipantOutDto ficAdministrator;

    private StatusOutDto custodianStatus;

    private StatusOutDto settlementStatus;

    private String rejectionReason;

    private ParticipantOutDto directDepositor;

}

```

## src/main/java/com/nubo/operations/custody/transfer/api/models/dto/response/SettlementStatusHistoryOutDto.java

```java
package com.nubo.operations.custody.transfer.api.models.dto.response;

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

    private StatusOutDto custodianStatus;

}

```

## src/main/java/com/nubo/operations/custody/transfer/api/models/dto/response/SettlementTransferResultOutDto.java

```java
package com.nubo.operations.custody.transfer.api.models.dto.response;

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

## src/main/java/com/nubo/operations/custody/transfer/api/models/dto/response/SettlementTransferRowOutDto.java

```java
package com.nubo.operations.custody.transfer.api.models.dto.response;

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
public class SettlementTransferRowOutDto {

    private Long tradeId;
    private String fraction;

    private LocalDate matchDate;
    private LocalDate settlementDate;

    private String investorName;
    private String investorIdentificationType;
    private String investorIdentificationCode;
    private String investorDocumentNumber;

    private String investorAccountNumber;

    private BigDecimal quantity;

    private Long custodianId;
    private String custodianName;

    private Long ficAdministratorId;
    private String ficAdministratorName;
}
```

## src/main/java/com/nubo/operations/custody/transfer/api/models/dto/response/SideOutDto.java

```java
package com.nubo.operations.custody.transfer.api.models.dto.response;

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

## src/main/java/com/nubo/operations/custody/transfer/api/models/dto/response/SmallParticipantOutDto.java

```java
package com.nubo.operations.custody.transfer.api.models.dto.response;

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
public class SmallParticipantOutDto {

    private Long id;

    private String code;

    private String name;

    private String shortName;

    private String documentNumber;

    private TypeOutDto type;

    private StatusOutDto status;

    private IdentificationTypeOutDto identificationType;

    private String bank_account;

}

```

## src/main/java/com/nubo/operations/custody/transfer/api/models/dto/response/StatusOutDto.java

```java
package com.nubo.operations.custody.transfer.api.models.dto.response;

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

## src/main/java/com/nubo/operations/custody/transfer/api/models/dto/response/TaxStatusOutDto.java

```java
package com.nubo.operations.custody.transfer.api.models.dto.response;

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

## src/main/java/com/nubo/operations/custody/transfer/api/models/dto/response/TradeEquityOutDto.java

```java
package com.nubo.operations.custody.transfer.api.models.dto.response;

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

## src/main/java/com/nubo/operations/custody/transfer/api/models/dto/response/TradeOutDto.java

```java
package com.nubo.operations.custody.transfer.api.models.dto.response;

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

    private MarketOutDto issuanceMarket;

    private Boolean settlementIndicatorOutgoing;

    private Boolean settlementIndicatorReturn;

    private Boolean settlementIndicatorAdvance;

    private TypeOutDto paymentType;

    private TypeOutDto settlementType;

    private StatusOutDto custodianStatus;

    private StatusOutDto settlementStatus;

    private StatusOutDto bloquingStatus;

    private Integer salesGuarantee;

    private Integer purchaseGuarantee;

    private Boolean purchasePaymentIndicator;

    private BigDecimal localCurrencyPrice;
}

```

## src/main/java/com/nubo/operations/custody/transfer/api/models/dto/response/TradingSessionOutDto.java

```java
package com.nubo.operations.custody.transfer.api.models.dto.response;

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

## src/main/java/com/nubo/operations/custody/transfer/api/models/dto/response/TradingSystemOutDto.java

```java
package com.nubo.operations.custody.transfer.api.models.dto.response;

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

## src/main/java/com/nubo/operations/custody/transfer/api/models/dto/response/TypeOutDto.java

```java
package com.nubo.operations.custody.transfer.api.models.dto.response;

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

## src/main/java/com/nubo/operations/custody/transfer/api/models/entity/AfpFundEntity.java

```java
package com.nubo.operations.custody.transfer.api.models.entity;

import java.time.LocalDate;
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
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/custody/transfer/api/models/entity/CountryEntity.java

```java
package com.nubo.operations.custody.transfer.api.models.entity;

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
import lombok.Setter;
import lombok.NoArgsConstructor;
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

## src/main/java/com/nubo/operations/custody/transfer/api/models/entity/CurrencyEntity.java

```java
package com.nubo.operations.custody.transfer.api.models.entity;

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

## src/main/java/com/nubo/operations/custody/transfer/api/models/entity/CustodianStatusHistoryEntity.java

```java
package com.nubo.operations.custody.transfer.api.models.entity;

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

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"CUSTODIAN_STATUS_HISTORY\"", schema = "\"NUANBODB\"")
public class CustodianStatusHistoryEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"CUSTODIAN_STATUS_HISTORY_ID\"", nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "\"MARKET_ID\"")
    private MarketEntity market;

    @Column(name = "\"UNIQUE_FRACTION_ID\"")
    private Long uniqueFractionId;

    @Column(name = "\"FRACTION\"")
    private Integer fraction;

    @Column(name = "\"CUSTODIAN_STATUS_TIME\"")
    private LocalDateTime custodianStatusTime;

    @ManyToOne
    @JoinColumn(name = "\"INVESTOR_ACCOUNT_ID\"")
    private InvestorAccountEntity investorAccount;

    @ManyToOne
    @JoinColumn(name = "\"CUSTODIAN_STATUS_ID\"")
    private StatusEntity custodianStatus;

    @ManyToOne
    @JoinColumn(name = "\"REJECTION_REASON_ID\"")
    private RejectionReasonEntity rejectionReason;

    @ManyToOne
    @JoinColumn(name = "\"TRADE_ID\"")
    private TradeEntity trade;

    @ManyToOne
    @JoinColumn(name = "\"SIDE_ID\"")
    private SideEntity side;

    @ManyToOne
    @JoinColumn(name = "\"INVESTOR_ID\"")
    private InvestorEntity investor;

    @ManyToOne
    @JoinColumn(name = "\"CUSTODIAN_ID\"")
    private ParticipantEntity custodian;

    @ManyToOne
    @JoinColumn(name = "\"FIC_ADMINISTRATOR_ID\"")
    private ParticipantEntity ficAdministrator;

    @Column(name = "\"FRACTION_QUANTITY\"", precision = 16, scale = 4)
    private BigDecimal fractionQuantity;

    @Column(name = "\"FRACTION_VOLUME\"", precision = 16, scale = 4)
    private BigDecimal fractionVolume;

    @Column(name = "\"NET_AMOUNT\"", precision = 16, scale = 4)
    private BigDecimal netAmount;

    @Column(name = "\"COMMISSION_AMOUNT\"", precision = 16, scale = 4)
    private BigDecimal commissionAmount;

    @Column(name = "\"VAL_TAX_AMOUNT\"", precision = 19, scale = 4)
    private BigDecimal valTaxAmount;

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
        CustodianStatusHistoryEntity that = (CustodianStatusHistoryEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/custody/transfer/api/models/entity/DepositoryEntity.java

```java
package com.nubo.operations.custody.transfer.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
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

## src/main/java/com/nubo/operations/custody/transfer/api/models/entity/ExchangeRateEntity.java

```java
package com.nubo.operations.custody.transfer.api.models.entity;

import java.math.BigDecimal;
import java.time.LocalDate;
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
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/custody/transfer/api/models/entity/FicAdministratorEntity.java

```java
package com.nubo.operations.custody.transfer.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import java.util.Objects;

import java.time.LocalDate;

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
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/custody/transfer/api/models/entity/GicsEntity.java

```java
package com.nubo.operations.custody.transfer.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
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

## src/main/java/com/nubo/operations/custody/transfer/api/models/entity/IdentificationTypeEntity.java

```java
package com.nubo.operations.custody.transfer.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import java.util.Objects;

import java.time.LocalDateTime;

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
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/custody/transfer/api/models/entity/InvestorAccountEntity.java

```java
package com.nubo.operations.custody.transfer.api.models.entity;

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
import lombok.Setter;
import lombok.NoArgsConstructor;
import java.util.Objects;

import java.time.LocalDate;

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
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/custody/transfer/api/models/entity/InvestorEntity.java

```java
package com.nubo.operations.custody.transfer.api.models.entity;

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
import lombok.Setter;
import lombok.NoArgsConstructor;
import java.util.Objects;

import java.time.LocalDateTime;

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

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50)
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

## src/main/java/com/nubo/operations/custody/transfer/api/models/entity/IsinNumberEntity.java

```java
package com.nubo.operations.custody.transfer.api.models.entity;

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

## src/main/java/com/nubo/operations/custody/transfer/api/models/entity/MarketEntity.java

```java
package com.nubo.operations.custody.transfer.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
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

## src/main/java/com/nubo/operations/custody/transfer/api/models/entity/ParticipantAccountEntity.java

```java
package com.nubo.operations.custody.transfer.api.models.entity;

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
import lombok.Setter;
import lombok.NoArgsConstructor;
import java.util.Objects;

import java.time.LocalDateTime;

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

## src/main/java/com/nubo/operations/custody/transfer/api/models/entity/ParticipantBankAccountEntity.java

```java
package com.nubo.operations.custody.transfer.api.models.entity;

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
@Table(name = "\"PARTICIPANT_BANK_ACCOUNT\"", schema = "\"NUANBODB\"")
public class ParticipantBankAccountEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"PARTICIPANT_BANK_ACCOUNT_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"BANK_ID\"")
    private Long bankId;

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

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        ParticipantBankAccountEntity that = (ParticipantBankAccountEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/custody/transfer/api/models/entity/ParticipantEntity.java

```java
package com.nubo.operations.custody.transfer.api.models.entity;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;

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

    @Column(name = "\"MNEMONIC\"")
    private String mnemonic;

    @ManyToOne
    @JoinColumn(name = "\"COUNTRY_ID\"", nullable = false)
    private CountryEntity country;

    @Column(name = "\"REGISTRATION_DATE\"")
    private LocalDate registrationDate;

    @Column(name = "\"TAX_CODE\"")
    private String taxCode;

    @Column(name = "\"DEPARTMENT_ID\"")
    private String departmentId;

    @Column(name = "\"MAIN_ADDRESS\"")
    private String mainAddress;

    @Column(name = "\"WEB_PAGE\"")
    private String webPage;

    @Column(name = "\"PHONE_NUMBER\"")
    private String phoneNumber;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"")
    private StatusEntity status;

    @Column(name = "\"NIT_CLEARING_HOUSE\"")
    private String nitClearingHouse;

    @ManyToOne
    @JoinColumn(name = "\"TAX_STATUS_ID\"")
    private TaxStatusEntity taxStatus;

    @Column(name = "\"TYPE_ENTITY\"",length = 1)
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

    @ManyToMany(fetch = FetchType.EAGER)
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

    @Override
    public String toString() {
        return "Participant, [id=" + id + ", code=" + code + ", name=" + name + "]";
    }
}

```

## src/main/java/com/nubo/operations/custody/transfer/api/models/entity/ProfileEntity.java

```java
package com.nubo.operations.custody.transfer.api.models.entity;

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
@Table(name = "\"PROFILE\"", schema = "\"NUANBODB\"")
public class ProfileEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"PROFILE_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"NAME\"", length = 80)
    private String name;

    @Column(name = "\"DESCRIPTION\"", length = 120)
    private String description;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        ProfileEntity that = (ProfileEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/custody/transfer/api/models/entity/RejectionReasonEntity.java

```java
package com.nubo.operations.custody.transfer.api.models.entity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import java.util.Objects;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "\"REJECTION_REASON\"", schema = "\"NUANBODB\"")
public class RejectionReasonEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"REJECTION_REASON_ID\"" , nullable = false)
    private Long id;

    @Column(name = "\"REASON\"" , length = 255)
    private String reason;

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

## src/main/java/com/nubo/operations/custody/transfer/api/models/entity/SecurityTitleEntity.java

```java
package com.nubo.operations.custody.transfer.api.models.entity;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;
import java.util.ArrayList;
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

    @Column(name = "\"MNEMONIC\"", length = 20)
    private String mnemonic;

    @Column(name = "\"ISIN\"", length = 20)
    private String isin;

    @Column(name = "\"CFI_ID\"")
    private String cfi;

    @Column(name = "\"CURRENCY_ID\"")
    private Integer currencyId;

    @Column(name = "\"SETTLEMENT_PERIOD\"", length = 2)
    private String settlementPeriod;

    @Column(name = "\"LISTING_DATE\"")
    private LocalDateTime listingDate;

    @Column(name = "\"DELISTING_DATE\"")
    private LocalDate delistingDate;

    @Column(name = "\"PARENT\"")
    private Boolean parent;

    @Column(name = "\"PARENT_ID\"")
    private Long parentId;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"")
    private StatusEntity status;

    @Column(name = "\"ISSUER_ID\"")
    private Integer issuerId;

    @Column(name = "\"COUNTRY_ID\"")
    private Integer countryId;

    @Column(name = "\"AMOUNT_ISSUED\"", precision = 20)
    private BigInteger amountIssued;

    @Column(name = "\"CLASS_ID\"", length = 2)
    private String classId;

    @Column(name = "\"SEGMENT_ID\"")
    private Integer segmentId;

    @Column(name = "\"CATEGORY\"", length = 20)
    private String category;

    @ManyToOne
    @JoinColumn(name = "\"DEPOSITORY_ID\"")
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

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50)
    private String lastModifyIp;

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

## src/main/java/com/nubo/operations/custody/transfer/api/models/entity/SettlementEntity.java

```java
package com.nubo.operations.custody.transfer.api.models.entity;

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
import lombok.Setter;
import lombok.NoArgsConstructor;
import java.util.Objects;

import java.math.BigDecimal;
import java.time.LocalDateTime;

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
    @JoinColumn(name = "\"FIC_ADMINISTRATOR_ID\"", nullable = false)
    private ParticipantEntity  ficAdministrator;

    @ManyToOne
    @JoinColumn(name = "\"CUSTODIAN_STATUS_ID\"")
    private StatusEntity custodianStatus;

    @ManyToOne
    @JoinColumn(name = "\"SETTLEMENT_STATUS_ID\"")
    private StatusEntity settlementStatus;

    @Column(name = "\"CASH_ACCOUNT\"", precision = 20)
    private BigDecimal cashAccount;

    @Column(name = "\"REJECTION_REASON\"", length = 250, nullable = false)
    private String rejectionReason;

    @ManyToOne
    @JoinColumn(name = "\"TRANSFER_PARTICIPANT_ID\"")
    private ParticipantEntity transferParticipant;

    @Column(name = "\"UNIQUE_FRACTION_ID\"")
    private Long uniqueFractionId;

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
        if (o == null || getClass() != o.getClass())
            return false;
        SettlementEntity that = (SettlementEntity) o;
        return Objects.equals(trade, that.trade) && Objects.equals(fraction, that.fraction) && Objects.equals(side, that.side);
    }

    @Override
    public int hashCode() {
        return Objects.hash(trade, fraction, side);
    }
}

```

## src/main/java/com/nubo/operations/custody/transfer/api/models/entity/SettlementKey.java

```java
package com.nubo.operations.custody.transfer.api.models.entity;

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

## src/main/java/com/nubo/operations/custody/transfer/api/models/entity/SideEntity.java

```java
package com.nubo.operations.custody.transfer.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
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

## src/main/java/com/nubo/operations/custody/transfer/api/models/entity/StatusEntity.java

```java
package com.nubo.operations.custody.transfer.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
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

## src/main/java/com/nubo/operations/custody/transfer/api/models/entity/TaxStatusEntity.java

```java
package com.nubo.operations.custody.transfer.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
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

## src/main/java/com/nubo/operations/custody/transfer/api/models/entity/TradeEntity.java

```java
package com.nubo.operations.custody.transfer.api.models.entity;

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
import lombok.Setter;
import lombok.NoArgsConstructor;
import java.util.Objects;

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
    @JoinColumn(name = "\"DEPOSITORY_ID\"")
    private DepositoryEntity depository;

    @ManyToOne
    @JoinColumn(name = "\"DEPOSITORY_ID_BUY\"")
    private DepositoryEntity depositoryBuy;

    @ManyToOne
    @JoinColumn(name = "\"DEPOSITORY_ID_SELL\"")
    private DepositoryEntity depositorySell;

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

## src/main/java/com/nubo/operations/custody/transfer/api/models/entity/TradingSessionEntity.java

```java
package com.nubo.operations.custody.transfer.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import java.util.Objects;

import java.time.LocalDateTime;

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

## src/main/java/com/nubo/operations/custody/transfer/api/models/entity/TradingSystemEntity.java

```java
package com.nubo.operations.custody.transfer.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import java.util.Objects;

import java.time.LocalDateTime;

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

## src/main/java/com/nubo/operations/custody/transfer/api/models/entity/TypeEntity.java

```java
package com.nubo.operations.custody.transfer.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import java.util.Objects;

import java.time.LocalDateTime;

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

## src/main/java/com/nubo/operations/custody/transfer/api/models/entity/TypeMappingEntity.java

```java
package com.nubo.operations.custody.transfer.api.models.entity;

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
    
    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        TypeMappingEntity that = (TypeMappingEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/custody/transfer/api/models/entity/UserNuboEntity.java

```java
package com.nubo.operations.custody.transfer.api.models.entity;

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
import lombok.Setter;
import lombok.NoArgsConstructor;
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

    @Column(name = "\"FIRST_NAME\"", length = 80)
    private String firstName;

    @Column(name = "\"LAST_NAME\"", length = 80)
    private String lastName;

    @Column(name = "\"USER_TYPE\"", length = 20)
    private String userType;

    @Column(name = "\"PREVIOUS_SESSION\"")
    private Boolean previousSession;

    @ManyToOne
    @JoinColumn(name = "\"COUNTRY_ID\"", nullable = false)
    private CountryEntity country;

    @ManyToOne
    @JoinColumn(name = "\"PARTICIPANT_ID\"")
    private ParticipantEntity participant;

    @ManyToOne
    @JoinColumn(name = "\"PROFILE_ID\"", nullable = false)
    private ProfileEntity profile;

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

## src/main/java/com/nubo/operations/custody/transfer/api/models/enums/BusinessRuleEnum.java

```java
package com.nubo.operations.custody.transfer.api.models.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Arrays;
import java.util.Objects;

@Getter
@RequiredArgsConstructor
public enum BusinessRuleEnum {

    RULE_COUNTED_ASSIGNMENT("RULE_ASSIGNMENT"),
    RULE_CUSTODIAN_TRANSFER("RULE_CUSTODIAN_TRANSFER"),
    RULE_COUNTED_REASSIGNMENT("RULE_REASSIGNMENT");

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

## src/main/java/com/nubo/operations/custody/transfer/api/models/enums/NotificationMessageEnum.java

```java
package com.nubo.operations.custody.transfer.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum NotificationMessageEnum {

    REQUEST_REJECTED(34, "Operation request rejected"),
    REQUEST_APPROVED(37, "Operation request approved"),
    REQUEST_TRANSMITTED(38, "Operation request transmitted");
    
    private final Integer code;
    private final String description;
}
```

## src/main/java/com/nubo/operations/custody/transfer/api/models/enums/NotificationTypeEnum.java

```java
package com.nubo.operations.custody.transfer.api.models.enums;

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

## src/main/java/com/nubo/operations/custody/transfer/api/models/enums/PermissionEnum.java

```java
package com.nubo.operations.custody.transfer.api.models.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Arrays;
import java.util.Objects;

@Getter
@RequiredArgsConstructor
public enum PermissionEnum {

    URL_OPERATIONS_MANAGEMENT("/operation-management");

    private final String value;

    @JsonValue
    public String getValue() {
        return value;
    }

    @JsonCreator
    public static PermissionEnum fromValue(String value) {
        return Arrays.stream(PermissionEnum.values())
                .filter(s -> Objects.equals(s.value, value))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Unknown value: " + value));
    }

}

```

## src/main/java/com/nubo/operations/custody/transfer/api/models/enums/PropertiesEnum.java

```java
package com.nubo.operations.custody.transfer.api.models.enums;

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


}

```

## src/main/java/com/nubo/operations/custody/transfer/api/models/enums/SettlementErrorEnum.java

```java
package com.nubo.operations.custody.transfer.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum SettlementErrorEnum {

    DIFFERENT_CUSTODIAN_SAME_TRADE_SIDE("No se permite trasladar fracciones del mismo folio y punta a diferentes custodios"),

    DIFFERENT_CUSTODIAN_THAN_EXISTING("El custodio enviado es diferente al custodio ya asignado al folio y punta");

    private final String message;
}

```

## src/main/java/com/nubo/operations/custody/transfer/api/models/enums/SettlementHistoryDetailEnum.java

```java
package com.nubo.operations.custody.transfer.api.models.enums;


import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum SettlementHistoryDetailEnum {

    TRANSFERRED_TO_CUSTODIAN("Fracción trasladada al custodio"),
    ADMITTED_BY_CUSTODIAN("Fracción admitida por el custodio"),
    REJECTED_BY_CUSTODIAN("Fracción rechazada por el custodio");

    private final String message;

}

```

## src/main/java/com/nubo/operations/custody/transfer/api/models/enums/SideEnum.java

```java
package com.nubo.operations.custody.transfer.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum SideEnum {

    BUY("1", "COMPRA"),
    SELL("2", "VENTA");

    private final String id;
    private final String description;

    public static SideEnum fromId(String id) {
        for (SideEnum side : values()) {
            if (side.id.equals(id)) {
                return side;
            }
        }
        throw new IllegalArgumentException("Invalid side id: " + id);
    }
}

```

## src/main/java/com/nubo/operations/custody/transfer/api/models/enums/StatusEnum.java

```java
package com.nubo.operations.custody.transfer.api.models.enums;

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
    ACCEPTED(15L, "ACEPTADA", "ASIGNACION"),
    NOT_STATUS(0L, "NO ESTADO", ""),
    CUSTODIAN_TRANSFERRED(1071L, "TRASLADADA", "CUSTODIO"),
    CUSTODIAN_PRE_MATCH(1072L, "PRE-MATCH", "CUSTODIO"),
    CUSTODIAN_ADMITTED(1073L, "ADMITIDA", "CUSTODIO"),
    CUSTODIAN_REJECTED(1074L, "RECHAZADA", "CUSTODIO"),
    PARTICIPANT_ACTIVE(510L, "ACTIVO", "PARTICIPANTES");

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

## src/main/java/com/nubo/operations/custody/transfer/api/models/enums/TypeEnum.java

```java
package com.nubo.operations.custody.transfer.api.models.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Arrays;
import java.util.Objects;

@Getter
@RequiredArgsConstructor
public enum TypeEnum {

    //DESCRIPTION
    COMPENSACION("COMPENSACION"),

    //CATEGORY
    CUENTA_CUD("CUENTA CUD"),
    CONCEPTO_CUENTA("CONCEPTO_CUENTA");

    private final String value;
    
    @JsonValue
    public String getValue() {
        return value;
    }

    @JsonCreator
    public static TypeEnum fromValue(String value) {
        return Arrays.stream(TypeEnum.values())
                .filter(type -> Objects.equals(type.value, value))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Type Option is not implemented: " + value));
    }
}

```

## src/main/java/com/nubo/operations/custody/transfer/api/models/enums/TypeMappingEnum.java

```java
package com.nubo.operations.custody.transfer.api.models.enums;

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
    REFERENCE_DATA("REFERENCE DATA"),

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

## src/main/java/com/nubo/operations/custody/transfer/api/models/enums/UserTypeEnum.java

```java
package com.nubo.operations.custody.transfer.api.models.enums;

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
                .filter(userType -> Objects.equals(userType.value, value))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("UserTypeEnum not implemented: " + value));
    }
}

```

## src/main/java/com/nubo/operations/custody/transfer/api/models/enums/VersionApiEnum.java

```java
package com.nubo.operations.custody.transfer.api.models.enums;

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

## src/main/java/com/nubo/operations/custody/transfer/api/repository/CustodianStatusHistoryRepository.java

```java
package com.nubo.operations.custody.transfer.api.repository;

import com.nubo.operations.custody.transfer.api.models.entity.CustodianStatusHistoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface CustodianStatusHistoryRepository extends JpaRepository<CustodianStatusHistoryEntity, Long> {

    @Query("""
                SELECT c
                FROM CustodianStatusHistoryEntity c
                WHERE c.custodianStatus.id = :custodianStatusId
                  AND c.uniqueFractionId = :uniqueFractionId
                  AND c.custodianStatusTime = (
                      SELECT MIN(c2.custodianStatusTime)
                      FROM CustodianStatusHistoryEntity c2
                      WHERE c2.custodianStatus.id = :custodianStatusId
                        AND c2.uniqueFractionId = :uniqueFractionId
                  )
            """)
    Optional<CustodianStatusHistoryEntity> findByCustodianStatusAndCustodianStatusTimeOldest(
            Long custodianStatusId,
            Long uniqueFractionId
    );
}

```

## src/main/java/com/nubo/operations/custody/transfer/api/repository/FicAdministratorRepository.java

```java
package com.nubo.operations.custody.transfer.api.repository;

import com.nubo.operations.custody.transfer.api.models.entity.FicAdministratorEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FicAdministratorRepository extends JpaRepository<FicAdministratorEntity, Long> {

    Page<FicAdministratorEntity> findByDescriptionContainingIgnoreCaseOrFicAdministratorCodeContainingIgnoreCase(
            String description,
            String code,
            Pageable pageable
    );

}

```

## src/main/java/com/nubo/operations/custody/transfer/api/repository/ParticipantBankAccountRepository.java

```java
package com.nubo.operations.custody.transfer.api.repository;


import com.nubo.operations.custody.transfer.api.models.entity.ParticipantBankAccountEntity;
import com.nubo.operations.custody.transfer.api.models.entity.ParticipantEntity;
import com.nubo.operations.custody.transfer.api.models.entity.TypeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ParticipantBankAccountRepository extends JpaRepository<ParticipantBankAccountEntity, Long> {

    Optional<ParticipantBankAccountEntity>findFirstByParticipantOrderByIdAsc(ParticipantEntity participant);

    Optional<ParticipantBankAccountEntity> findFirstByParticipantAndOriginTypeAndConceptTypeOrderByIdAsc(ParticipantEntity participant, TypeEntity originType, TypeEntity conceptType);


}
```

## src/main/java/com/nubo/operations/custody/transfer/api/repository/ParticipantRepository.java

```java
package com.nubo.operations.custody.transfer.api.repository;

import com.nubo.operations.custody.transfer.api.models.entity.ParticipantEntity;
import com.nubo.operations.custody.transfer.api.models.entity.TypeEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ParticipantRepository extends JpaRepository<ParticipantEntity, Long> {

    @Query("SELECT p FROM ParticipantEntity p WHERE p.custodian = true AND p.country.id = :countryId AND p.status.id = :statusId")
    List<ParticipantEntity> findAllCustodianParticipants(Long countryId, Long statusId);

    Page<ParticipantEntity> findAllByType(Pageable pageable, TypeEntity type);

}


```

## src/main/java/com/nubo/operations/custody/transfer/api/repository/RejectionReasonRepository.java

```java
package com.nubo.operations.custody.transfer.api.repository;

import com.nubo.operations.custody.transfer.api.models.entity.RejectionReasonEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RejectionReasonRepository extends JpaRepository<RejectionReasonEntity, Long> {
}

```

## src/main/java/com/nubo/operations/custody/transfer/api/repository/SettlementRepository.java

```java
package com.nubo.operations.custody.transfer.api.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.nubo.operations.custody.transfer.api.models.entity.SettlementEntity;
import com.nubo.operations.custody.transfer.api.models.entity.SettlementKey;

public interface SettlementRepository extends JpaRepository<SettlementEntity, SettlementKey>,
        JpaSpecificationExecutor<SettlementEntity> {

    @Query("""
            SELECT s FROM SettlementEntity s
            INNER JOIN FETCH s.trade
            INNER JOIN FETCH s.side
            LEFT JOIN FETCH s.investor
            LEFT JOIN FETCH s.investorAccount
            LEFT JOIN FETCH s.participantAccount
            LEFT JOIN FETCH s.tradingSystem
            LEFT JOIN FETCH s.status
            LEFT JOIN FETCH s.sourceQuoteType
            LEFT JOIN FETCH s.ficAdministrator
            LEFT JOIN FETCH s.custodianStatus
            LEFT JOIN FETCH s.settlementStatus
            WHERE s.trade.id = :tradeId AND s.fraction = :fraction AND s.side.id = :sideId
            """)
    Optional<SettlementEntity> findByCompositeKey(
            @Param("tradeId") Long tradeId,
            @Param("fraction") Integer fraction,
            @Param("sideId") String sideId);

    @Query("""
            SELECT DISTINCT s
            FROM SettlementEntity s
            JOIN s.trade t
            WHERE t.id IN :tradeIds
            AND (s.custodian IS NULL OR s.custodianStatus.id = :rejectedStatusId)
            """)
    Page<SettlementEntity> findByTradeIds(
            @Param("tradeIds") List<Long> tradeIds,
            @Param("rejectedStatusId") Long rejectedStatusId,
            Pageable pageable);

    @Query("SELECT COUNT(s) > 0 FROM SettlementEntity s " +
            "JOIN s.trade t " +
            "WHERE t.id IN :tradeIds AND t.participantBuy.id = :participantId")
    boolean isParticipantBuyer(@Param("tradeIds") List<Long> tradeIds, @Param("participantId") Long participantId);

    @Query("SELECT COUNT(s) > 0 FROM SettlementEntity s " +
            "JOIN s.trade t " +
            "WHERE t.id IN :tradeIds AND t.participantSell.id = :participantId")
    boolean isParticipantSeller(@Param("tradeIds") List<Long> tradeIds, @Param("participantId") Long participantId);

    @Query("""
            SELECT DISTINCT s
            FROM SettlementEntity s
            JOIN s.trade t
            WHERE t.id IN :tradeIds
            AND (t.participantBuy.id = :participantId
                 OR t.participantSell.id = :participantId)
            AND s.side.id = :sideId
            AND (s.custodian IS NULL OR s.custodianStatus.id = :rejectedStatusId)
            """)
    Page<SettlementEntity> findByTradeIdsAndParticipantAndSide(
            @Param("tradeIds") List<Long> tradeIds,
            @Param("participantId") Long participantId,
            @Param("sideId") String sideId,
            @Param("rejectedStatusId") Long rejectedStatusId,
            Pageable pageable);

    @Query("""
            SELECT DISTINCT s
            FROM SettlementEntity s
            JOIN s.trade t
            WHERE t.id IN :tradeIds
            AND (t.participantBuy.id = :participantId OR t.participantSell.id = :participantId)
            AND (s.custodian IS NULL OR s.custodianStatus.id = :rejectedStatusId)
            """)
    Page<SettlementEntity> findByTradeIdsAndParticipantMultipleSides(
            @Param("tradeIds") List<Long> tradeIds,
            @Param("participantId") Long participantId,
            @Param("rejectedStatusId") Long rejectedStatusId,
            Pageable pageable);

    @Query("""
            SELECT DISTINCT s
            FROM SettlementEntity s
            JOIN s.trade t
            WHERE t.id IN :tradeIds
            AND (s.custodian IS NULL OR s.custodianStatus.id = :rejectedStatusId)
            """)
    List<SettlementEntity> findByTradeIds(
            @Param("tradeIds") List<Long> tradeIds,
            @Param("rejectedStatusId") Long rejectedStatusId,
            Sort sort);

    @Query("""
            SELECT DISTINCT s
            FROM SettlementEntity s
            JOIN s.trade t
            WHERE t.id IN :tradeIds
            AND (t.participantBuy.id = :participantId
                 OR t.participantSell.id = :participantId)
            AND s.side.id = :sideId
            AND (s.custodian IS NULL OR s.custodianStatus.id = :rejectedStatusId)
            """)
    List<SettlementEntity> findByTradeIdsAndParticipantAndSide(
            @Param("tradeIds") List<Long> tradeIds,
            @Param("participantId") Long participantId,
            @Param("sideId") String sideId,
            @Param("rejectedStatusId") Long rejectedStatusId,
            Sort sort);

    @Query("""
            SELECT DISTINCT s
            FROM SettlementEntity s
            JOIN s.trade t
            WHERE t.id IN :tradeIds
            AND (t.participantBuy.id = :participantId OR t.participantSell.id = :participantId)
            AND (s.custodian IS NULL OR s.custodianStatus.id = :rejectedStatusId)
            """)
    List<SettlementEntity> findByTradeIdsAndParticipantMultipleSides(
            @Param("tradeIds") List<Long> tradeIds,
            @Param("participantId") Long participantId,
            @Param("rejectedStatusId") Long rejectedStatusId,
            Sort sort);

    @Query("""
            SELECT s
            FROM SettlementEntity s
            JOIN s.trade t
            WHERE t.id IN :tradeIds
              AND s.status.id = :assignedStatus
              AND s.fraction = 0
            ORDER BY t.id, s.side.id
            """)
    Page<SettlementEntity> findWholeOperations(
            @Param("tradeIds") List<Long> tradeIds,
            @Param("assignedStatus") Long assignedStatus,
            Pageable pageable);

    @Query("""
            SELECT s
            FROM SettlementEntity s
            JOIN s.trade t
            WHERE t.id IN :tradeIds
              AND s.status.id = :assignedStatus
              AND s.fraction > 0
            ORDER BY t.id, s.side.id, s.fraction
            """)
    Page<SettlementEntity> findFractions(
            @Param("tradeIds") List<Long> tradeIds,
            @Param("assignedStatus") Long assignedStatus,
            Pageable pageable);

    @Query("""
                SELECT s
                FROM SettlementEntity s
                WHERE s.custodianStatus.id = :statusId
            """)
    List<SettlementEntity> findByCustodianStatusId(@Param("statusId") Long statusId);

    @Query("""
                SELECT DISTINCT s
                FROM SettlementEntity s
                JOIN s.trade t
                WHERE s.custodianStatus.id = :statusId
            """)
    Page<SettlementEntity> findByCustodianStatusInternal(
            @Param("statusId") Long statusId,
            Pageable pageable);

    @Query("""
                SELECT DISTINCT s
                FROM SettlementEntity s
                JOIN s.trade t
                WHERE s.custodianStatus.id = :statusId
                  AND s.custodian.id = :participantId
            """)
    Page<SettlementEntity> findByCustodianStatusExternal(
            @Param("statusId") Long statusId,
            @Param("participantId") Long participantId,
            Pageable pageable);

    @Query("""
            SELECT s.custodian.id
            FROM SettlementEntity s
            WHERE s.trade.id = :tradeId
            AND s.side.id = :sideId
            AND s.custodian IS NOT NULL
            """)
    List<Long> findCustodianIdsByTradeAndSide(
            @Param("tradeId") Long tradeId,
            @Param("sideId") String sideId);

}

```

## src/main/java/com/nubo/operations/custody/transfer/api/repository/SideRepository.java

```java
package com.nubo.operations.custody.transfer.api.repository;

import com.nubo.operations.custody.transfer.api.models.entity.SideEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SideRepository extends JpaRepository<SideEntity, String> {

    SideEntity findByDescription(String description);

}


```

## src/main/java/com/nubo/operations/custody/transfer/api/repository/StatusRepository.java

```java
package com.nubo.operations.custody.transfer.api.repository;

import com.nubo.operations.custody.transfer.api.models.entity.StatusEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface StatusRepository extends JpaRepository<StatusEntity, Long>,
        JpaSpecificationExecutor<StatusEntity> {
}


```

## src/main/java/com/nubo/operations/custody/transfer/api/repository/TradeRepository.java

```java
package com.nubo.operations.custody.transfer.api.repository;

import com.nubo.operations.custody.transfer.api.models.entity.TradeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface TradeRepository extends JpaRepository<TradeEntity, Long>, JpaSpecificationExecutor<TradeEntity> {

    @Query("""
        SELECT t.country.id
        FROM TradeEntity t
        WHERE t.id = :tradeId
    """)
    Long findCountryIdByTradeId(@Param("tradeId") Long tradeId);
}


```

## src/main/java/com/nubo/operations/custody/transfer/api/repository/TypeMappingRepository.java

```java
package com.nubo.operations.custody.transfer.api.repository;

import com.nubo.operations.custody.transfer.api.models.entity.TypeMappingEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TypeMappingRepository extends JpaRepository<TypeMappingEntity, Long> {
    Optional<TypeMappingEntity> findByExternalSystemAndExternalDescription(String externalSystem, String externalDescription);
}

```

## src/main/java/com/nubo/operations/custody/transfer/api/repository/TypeRepository.java

```java
package com.nubo.operations.custody.transfer.api.repository;

import com.nubo.operations.custody.transfer.api.models.entity.TypeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TypeRepository extends JpaRepository<TypeEntity, Long> {

    Optional<TypeEntity> findByCategoryIgnoreCaseAndDescriptionIgnoreCase(String category, String description);
}

```

## src/main/java/com/nubo/operations/custody/transfer/api/repository/UserNuboRepository.java

```java
package com.nubo.operations.custody.transfer.api.repository;

import com.nubo.operations.custody.transfer.api.models.entity.UserNuboEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface UserNuboRepository extends JpaRepository<UserNuboEntity, Long> {

    @Query("SELECT u FROM UserNuboEntity u " +
            "WHERE u.userName = :userName")
    Optional<UserNuboEntity> findByUserName(String userName);

}

```

## src/main/java/com/nubo/operations/custody/transfer/api/service/CustodianEmailService.java

```java
package com.nubo.operations.custody.transfer.api.service;

import com.nubo.operations.custody.transfer.api.models.dto.response.EmailTransferCustodianOutDto;

public interface CustodianEmailService {

    EmailTransferCustodianOutDto sendPendingTransfers();

}

```

## src/main/java/com/nubo/operations/custody/transfer/api/service/FicAdministratorService.java

```java
package com.nubo.operations.custody.transfer.api.service;


import com.nubo.operations.custody.transfer.api.models.dto.response.PageResponseOutDto;
import com.nubo.operations.custody.transfer.api.models.dto.response.SmallParticipantOutDto;
import org.springframework.data.domain.Pageable;

public interface FicAdministratorService {

    PageResponseOutDto<SmallParticipantOutDto> findAllFicAdministrator(Pageable pageable);


}

```

## src/main/java/com/nubo/operations/custody/transfer/api/service/RejectionReasonService.java

```java
package com.nubo.operations.custody.transfer.api.service;

import com.nubo.operations.custody.transfer.api.models.dto.response.RejectionReasonOutDto;

import java.util.List;

public interface RejectionReasonService {

    List<RejectionReasonOutDto> findAllRejectionReason();

}

```

## src/main/java/com/nubo/operations/custody/transfer/api/service/SettlementService.java

```java
package com.nubo.operations.custody.transfer.api.service;

import java.util.List;

import com.nubo.operations.custody.transfer.api.models.dto.request.SettlementUpdateTransferInDto;
import com.nubo.operations.custody.transfer.api.models.dto.response.PageResponseOutDto;
import com.nubo.operations.custody.transfer.api.models.dto.response.SettlementByCustodyOutDto;
import com.nubo.operations.custody.transfer.api.models.dto.response.SettlementKeyOutDto;
import com.nubo.operations.custody.transfer.api.models.dto.response.SettlementTransferResultOutDto;

public interface SettlementService {

    PageResponseOutDto<SettlementByCustodyOutDto> findAllSettlementsByUser(List<Long> tradeId, Long participantId,
            int page, int size, String sort, String order, boolean all);

    List<SettlementTransferResultOutDto> updateSettlementStatus(
            List<SettlementUpdateTransferInDto> settlementUpdateDto,
            Long motivoId,
            String motivo);

    PageResponseOutDto<SettlementKeyOutDto> findPendingAdmissions(int page, int size, String sort, String order);

}

```

## src/main/java/com/nubo/operations/custody/transfer/api/service/SettlementTransferService.java

```java
package com.nubo.operations.custody.transfer.api.service;

import com.nubo.operations.custody.transfer.api.models.dto.response.PageResponseOutDto;
import com.nubo.operations.custody.transfer.api.models.dto.response.SettlementTransferRowOutDto;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface SettlementTransferService {

    PageResponseOutDto<SettlementTransferRowOutDto> getSettlementTransferPreview(
            List<Long> tradeIds,
            Long participantId,
            Pageable pageable);

    PageResponseOutDto<SettlementTransferRowOutDto> getSettlementFractionsPreview(
            List<Long> tradeIds,
            Long participantId,
            Pageable pageable);
}

```

## src/main/java/com/nubo/operations/custody/transfer/api/service/impl/CustodianEmailServiceImpl.java

```java
package com.nubo.operations.custody.transfer.api.service.impl;

import com.nubo.operations.custody.transfer.api.client.email.models.dto.request.EmailCodeTemplateInDto;
import com.nubo.operations.custody.transfer.api.client.email.models.enums.EmailTemplateEnum;
import com.nubo.operations.custody.transfer.api.client.email.service.EmailClient;
import com.nubo.operations.custody.transfer.api.models.dto.response.EmailTransferCustodianOutDto;
import com.nubo.operations.custody.transfer.api.models.entity.ParticipantEntity;
import com.nubo.operations.custody.transfer.api.models.entity.SettlementEntity;
import com.nubo.operations.custody.transfer.api.models.entity.TradeEntity;
import com.nubo.operations.custody.transfer.api.models.enums.StatusEnum;
import com.nubo.operations.custody.transfer.api.repository.SettlementRepository;
import com.nubo.operations.custody.transfer.api.service.CustodianEmailService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class CustodianEmailServiceImpl implements CustodianEmailService {

    private final SettlementRepository settlementRepository;
    private final EmailClient emailClient;

    @Override
    public EmailTransferCustodianOutDto sendPendingTransfers() {
        List<SettlementEntity> settlements = settlementRepository
                .findByCustodianStatusId(StatusEnum.CUSTODIAN_TRANSFERRED.getId());

        int emailsSent = 0;
        for (SettlementEntity settlement : settlements) {
            TradeEntity trade = settlement.getTrade();
            ParticipantEntity custodian = settlement.getCustodian();
            if (custodian != null) {
                buildSendEmailTransfer(custodian.getId(), trade.getMatchId().toString());
                emailsSent++;
            }
        }

        return EmailTransferCustodianOutDto.builder()
                .sendEmail(emailsSent > 0)
                .message("Emails enviados correctamente: " + emailsSent)
                .build();
    }

    private void buildSendEmailTransfer(Long participantId, String operationNumber) {
        EmailCodeTemplateInDto emailCodeTemplateInDto = EmailCodeTemplateInDto.builder()
                .codeTemplate(EmailTemplateEnum.PENDING_TRANSFER_CUSTODIAN)
                .operationNumber(operationNumber)
                .build();

        log.info("Email send participantId -> {}", participantId);
        this.emailClient.sendEmailByCodeAndParticipant(participantId, null, emailCodeTemplateInDto);
    }
}

```

## src/main/java/com/nubo/operations/custody/transfer/api/service/impl/FicAdministratorServiceImpl.java

```java
package com.nubo.operations.custody.transfer.api.service.impl;

import com.nubo.operations.custody.transfer.api.application.properties.PropertiesContext;
import com.nubo.operations.custody.transfer.api.exception.ServiceException;
import com.nubo.operations.custody.transfer.api.exception.error.ErrorCode;
import com.nubo.operations.custody.transfer.api.helpers.MapperPageUtil;
import com.nubo.operations.custody.transfer.api.helpers.MapperUtil;
import com.nubo.operations.custody.transfer.api.models.dto.response.PageResponseOutDto;
import com.nubo.operations.custody.transfer.api.models.dto.response.SmallParticipantOutDto;
import com.nubo.operations.custody.transfer.api.models.entity.ParticipantBankAccountEntity;
import com.nubo.operations.custody.transfer.api.models.entity.ParticipantEntity;
import com.nubo.operations.custody.transfer.api.models.entity.TypeEntity;
import com.nubo.operations.custody.transfer.api.models.enums.TypeEnum;
import com.nubo.operations.custody.transfer.api.models.enums.TypeMappingEnum;
import com.nubo.operations.custody.transfer.api.models.enums.VersionApiEnum;
import com.nubo.operations.custody.transfer.api.repository.ParticipantBankAccountRepository;
import com.nubo.operations.custody.transfer.api.repository.ParticipantRepository;
import com.nubo.operations.custody.transfer.api.repository.TypeMappingRepository;
import com.nubo.operations.custody.transfer.api.repository.TypeRepository;
import com.nubo.operations.custody.transfer.api.service.FicAdministratorService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
@Slf4j
public class FicAdministratorServiceImpl implements FicAdministratorService {

    private final ParticipantRepository participantRepository;
    private final TypeMappingRepository typeMappingRepository;
    private final TypeRepository typeRepository;
    private final ParticipantBankAccountRepository participantBankAccountRepository;

    public PageResponseOutDto<SmallParticipantOutDto> findAllFicAdministrator(Pageable pageable) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllFicAdministratorV1(pageable);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<SmallParticipantOutDto> findAllFicAdministratorV1(Pageable pageable) {
        log.info("Start method findAllFicAdministratorV1");

        TypeEntity typeEntity = typeMappingRepository
                .findByExternalSystemAndExternalDescription(TypeMappingEnum.REFERENCE_DATA.getValue(), TypeMappingEnum.ADMIN_FIC.getValue()).orElseThrow(() -> new ServiceException(
                        ErrorCode.TYPE_NOT_FOUND,
                        HttpStatus.NOT_FOUND
                )).getType();

        Page<ParticipantEntity> ficAdministratorEntityPageable= participantRepository.findAllByType(pageable, typeEntity);

        List<SmallParticipantOutDto> ficAdministratorOutDto = ficAdministratorEntityPageable.stream()
                .map(entity -> {
                    SmallParticipantOutDto dto = MapperUtil.ficAdministratorEntityToFicAdministratorOutDto(entity);
                    String bankAccount = findBankAccount(dto.getId());
                    dto.setBank_account(bankAccount);
                    return dto;
                })
                .toList();

        log.info("End method findAllFicAdministratorV1, number of ficAdministrator found: {}", ficAdministratorOutDto.size());

        return MapperPageUtil.pageToPageResponseOutDto(ficAdministratorOutDto, ficAdministratorEntityPageable);
    }

    private String findBankAccount(Long participantId){
        String bank_account = "";

        ParticipantEntity participantEntity = participantRepository.findById(participantId).orElse(null);

        TypeEntity originType = typeRepository
                .findByCategoryIgnoreCaseAndDescriptionIgnoreCase(TypeEnum.CUENTA_CUD.getValue(), TypeEnum.CUENTA_CUD.getValue())
                .orElseThrow(() -> new ServiceException(ErrorCode.TYPE_NOT_FOUND, HttpStatus.NOT_FOUND));

        TypeEntity conceptType = typeRepository
                .findByCategoryIgnoreCaseAndDescriptionIgnoreCase(TypeEnum.CONCEPTO_CUENTA.getValue(), TypeEnum.COMPENSACION.getValue())
                .orElseThrow(() -> new ServiceException(ErrorCode.TYPE_NOT_FOUND, HttpStatus.NOT_FOUND));

        ParticipantBankAccountEntity participantBankAccountEntity = participantBankAccountRepository
                .findFirstByParticipantAndOriginTypeAndConceptTypeOrderByIdAsc(participantEntity, originType, conceptType).orElse(null);

        if (participantBankAccountEntity != null){
            bank_account = participantBankAccountEntity.getBankAccount();
        }

        return bank_account;

    }



}

```

## src/main/java/com/nubo/operations/custody/transfer/api/service/impl/RejectionReasonServiceImpl.java

```java
package com.nubo.operations.custody.transfer.api.service.impl;

import com.nubo.operations.custody.transfer.api.application.properties.PropertiesContext;
import com.nubo.operations.custody.transfer.api.exception.ServiceException;
import com.nubo.operations.custody.transfer.api.exception.error.ErrorCode;
import com.nubo.operations.custody.transfer.api.helpers.MapperUtil;
import com.nubo.operations.custody.transfer.api.models.dto.response.RejectionReasonOutDto;
import com.nubo.operations.custody.transfer.api.models.enums.VersionApiEnum;
import com.nubo.operations.custody.transfer.api.repository.RejectionReasonRepository;
import com.nubo.operations.custody.transfer.api.service.RejectionReasonService;
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

    public List<RejectionReasonOutDto> findAllRejectionReason() {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllRejectionReasonV1();
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<RejectionReasonOutDto> findAllRejectionReasonV1() {
        log.info("Start method findAllRejectionReasonV1");

        List<RejectionReasonOutDto> rejectionReasonOutDto = rejectionReasonRepository.findAll().stream()
                .map(MapperUtil::rejectionReasonEntityToRejectionReasonOutDto)
                .toList();

        log.info("End method findAllRejectionReasonV1, number of rejectionReason found: {}", rejectionReasonOutDto.size());

        return rejectionReasonOutDto;
    }

}

```

## src/main/java/com/nubo/operations/custody/transfer/api/service/impl/SettlementServiceImpl.java

```java
package com.nubo.operations.custody.transfer.api.service.impl;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import com.nubo.operations.custody.transfer.api.application.properties.PropertiesConfig;
import com.nubo.operations.custody.transfer.api.application.properties.PropertiesContext;
import com.nubo.operations.custody.transfer.api.application.util.ApplicationUtils;
import com.nubo.operations.custody.transfer.api.client.packagecustodian.dto.request.PackageCustodianAutomaticInDto;
import com.nubo.operations.custody.transfer.api.client.packagecustodian.dto.response.PackageCustodianAutomaticOutDto;
import com.nubo.operations.custody.transfer.api.client.packagecustodian.service.PackageCustodianCmdClient;
import com.nubo.operations.custody.transfer.api.client.rules.models.dto.request.StatusUpdateSettlementInDto;
import com.nubo.operations.custody.transfer.api.client.rules.models.dto.response.StatusUpdateSettlementOutDto;
import com.nubo.operations.custody.transfer.api.client.rules.service.OperationBusinessRuleClient;
import com.nubo.operations.custody.transfer.api.exception.ServiceException;
import com.nubo.operations.custody.transfer.api.exception.error.ErrorCode;
import com.nubo.operations.custody.transfer.api.helpers.MapperPageUtil;
import com.nubo.operations.custody.transfer.api.helpers.MapperUtil;
import com.nubo.operations.custody.transfer.api.helpers.SendNotificationUtil;
import com.nubo.operations.custody.transfer.api.models.domain.UserNuboData;
import com.nubo.operations.custody.transfer.api.models.dto.request.SettlementUpdateTransferInDto;
import com.nubo.operations.custody.transfer.api.models.dto.response.PageResponseOutDto;
import com.nubo.operations.custody.transfer.api.models.dto.response.SettlementByCustodyOutDto;
import com.nubo.operations.custody.transfer.api.models.dto.response.SettlementKeyOutDto;
import com.nubo.operations.custody.transfer.api.models.dto.response.SettlementTransferResultOutDto;
import com.nubo.operations.custody.transfer.api.models.dto.response.SideOutDto;
import com.nubo.operations.custody.transfer.api.models.entity.CustodianStatusHistoryEntity;
import com.nubo.operations.custody.transfer.api.models.entity.FicAdministratorEntity;
import com.nubo.operations.custody.transfer.api.models.entity.ParticipantEntity;
import com.nubo.operations.custody.transfer.api.models.entity.RejectionReasonEntity;
import com.nubo.operations.custody.transfer.api.models.entity.SecurityTitleEntity;
import com.nubo.operations.custody.transfer.api.models.entity.SettlementEntity;
import com.nubo.operations.custody.transfer.api.models.entity.SettlementKey;
import com.nubo.operations.custody.transfer.api.models.entity.SideEntity;
import com.nubo.operations.custody.transfer.api.models.entity.StatusEntity;
import com.nubo.operations.custody.transfer.api.models.entity.TradeEntity;
import com.nubo.operations.custody.transfer.api.models.enums.BusinessRuleEnum;
import com.nubo.operations.custody.transfer.api.models.enums.NotificationMessageEnum;
import com.nubo.operations.custody.transfer.api.models.enums.NotificationTypeEnum;
import com.nubo.operations.custody.transfer.api.models.enums.SideEnum;
import com.nubo.operations.custody.transfer.api.models.enums.StatusEnum;
import com.nubo.operations.custody.transfer.api.models.enums.UserTypeEnum;
import com.nubo.operations.custody.transfer.api.models.enums.VersionApiEnum;
import com.nubo.operations.custody.transfer.api.repository.CustodianStatusHistoryRepository;
import com.nubo.operations.custody.transfer.api.repository.FicAdministratorRepository;
import com.nubo.operations.custody.transfer.api.repository.ParticipantBankAccountRepository;
import com.nubo.operations.custody.transfer.api.repository.ParticipantRepository;
import com.nubo.operations.custody.transfer.api.repository.RejectionReasonRepository;
import com.nubo.operations.custody.transfer.api.repository.SettlementRepository;
import com.nubo.operations.custody.transfer.api.repository.SideRepository;
import com.nubo.operations.custody.transfer.api.repository.StatusRepository;
import com.nubo.operations.custody.transfer.api.repository.TradeRepository;
import com.nubo.operations.custody.transfer.api.service.SettlementService;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class SettlementServiceImpl implements SettlementService {

    private final SettlementRepository settlementRepository;
    private final StatusRepository statusRepository;
    private final ParticipantRepository participantRepository;
    private final FicAdministratorRepository ficAdministratorRepository;
    private final RejectionReasonRepository rejectionReasonRepository;
    private final PropertiesConfig propertiesConfig;
    private final SendNotificationUtil sendNotificationUtil;
    private final OperationBusinessRuleClient operationBusinessRuleClient;
    private final SideRepository sideRepository;
    private final TradeRepository tradeRepository;
    private final ParticipantBankAccountRepository participantBankAccountRepository;
    private final CustodianStatusHistoryRepository custodianStatusHistoryRepository;
    private final PackageCustodianCmdClient packageCustodianCmdClient;
    private static final String MANUAL_CUSTODY_TRANSFER_CUT_TYPE = "MANUAL_CUSTODY_TRANSFER";
    private static final BigDecimal FULL_CLEARING_PERCENTAGE = BigDecimal.ONE.setScale(4, RoundingMode.HALF_UP);
    private static final BigDecimal ZERO_AMOUNT = BigDecimal.ZERO.setScale(4, RoundingMode.HALF_UP);

    @Override
    public PageResponseOutDto<SettlementByCustodyOutDto> findAllSettlementsByUser(
            List<Long> tradeId, Long participantId, int page, int size, String sort, String order, boolean all) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllSettlementsByUserV1(tradeId, participantId, page, size, sort, order, all);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<SettlementByCustodyOutDto> findAllSettlementsByUserV1(
            List<Long> tradeIds, Long participantId, int page, int size, String sort, String order, boolean all) {
        Long rejectedStatusId = StatusEnum.CUSTODIAN_REJECTED.getId();
        log.info(
                "Start findAllSettlementsByUserV1. tradeIds={}, participantId={}, page={}, size={}, sort={}, order={}, all={}, rejectedStatusId={}",
                tradeIds,
                participantId,
                page,
                size,
                sort,
                order,
                all,
                rejectedStatusId);
        UserNuboData userNuboData = ApplicationUtils.getUserNuboData();
        UserTypeEnum userType = userNuboData.userTypeEnum();
        Sort.Direction direction = "desc".equalsIgnoreCase(order)
                ? Sort.Direction.DESC
                : Sort.Direction.ASC;

        Sort sortObj = Sort.by(direction, sort != null ? sort : "trade");

        log.info("[FIND-002] Sort created. direction={}, sortProperty={}",
                direction,
                sort != null ? sort : "trade");

        List<SettlementByCustodyOutDto> settlementOutDtoList = new ArrayList<>();

        try {
            if (all) {
                log.info("[FIND-003] Processing ALL mode. userType={}", userType);

                if (Objects.equals(userType, UserTypeEnum.INTERNAL)) {
                    log.info(
                            "[FIND-004] INTERNAL ALL - Calling repository findByTradeIds. tradeIds={}, rejectedStatusId={}",
                            tradeIds,
                            rejectedStatusId);

                    List<SettlementEntity> allResults = settlementRepository.findByTradeIds(tradeIds, rejectedStatusId,
                            sortObj);

                    log.info("[FIND-005] INTERNAL ALL - Repository response. resultSize={}",
                            allResults != null ? allResults.size() : null);

                    settlementOutDtoList.addAll(
                            allResults.stream()
                                    .map(settlementEntity -> mapSettlementWithTrace(settlementEntity, "INTERNAL_ALL"))
                                    .toList());

                    log.info("[FIND-006] INTERNAL ALL - Mapping finished. dtoSize={}",
                            settlementOutDtoList.size());

                } else if (Objects.equals(userType, UserTypeEnum.EXTERNAL)) {
                    participantId = userNuboData.participantId();
                    log.info("[FIND-007] EXTERNAL ALL - Start processing tradeIds. tradeIds={}, participantId={}",
                            tradeIds,
                            participantId);

                    for (Long tradeId : tradeIds) {
                        log.info("[FIND-008] EXTERNAL ALL - Checking participant side. tradeId={}, participantId={}",
                                tradeId,
                                participantId);

                        boolean isBuyer = settlementRepository.isParticipantBuyer(List.of(tradeId), participantId);
                        boolean isSeller = settlementRepository.isParticipantSeller(List.of(tradeId), participantId);

                        log.info(
                                "[FIND-009] EXTERNAL ALL - Participant side result. tradeId={}, participantId={}, isBuyer={}, isSeller={}",
                                tradeId,
                                participantId,
                                isBuyer,
                                isSeller);

                        if (isBuyer && isSeller) {
                            log.info(
                                    "[FIND-010] EXTERNAL ALL - Calling findByTradeIdsAndParticipantMultipleSides. tradeId={}, participantId={}, rejectedStatusId={}",
                                    tradeId,
                                    participantId,
                                    rejectedStatusId);

                            List<SettlementEntity> allResults = settlementRepository
                                    .findByTradeIdsAndParticipantMultipleSides(
                                            List.of(tradeId),
                                            participantId,
                                            rejectedStatusId,
                                            sortObj);

                            log.info(
                                    "[FIND-011] EXTERNAL ALL - Multiple sides repository response. tradeId={}, resultSize={}",
                                    tradeId,
                                    allResults != null ? allResults.size() : null);

                            settlementOutDtoList.addAll(
                                    allResults.stream()
                                            .map(settlementEntity -> mapSettlementWithTrace(settlementEntity,
                                                    "EXTERNAL_ALL_MULTIPLE_SIDES"))
                                            .toList());

                        } else if (isBuyer) {
                            log.info(
                                    "[FIND-012] EXTERNAL ALL - Calling findByTradeIdsAndParticipantAndSide BUY. tradeId={}, participantId={}, sideId=1, rejectedStatusId={}",
                                    tradeId,
                                    participantId,
                                    rejectedStatusId);

                            List<SettlementEntity> allResults = settlementRepository
                                    .findByTradeIdsAndParticipantAndSide(
                                            List.of(tradeId),
                                            participantId,
                                            "1",
                                            rejectedStatusId,
                                            sortObj);

                            log.info("[FIND-013] EXTERNAL ALL - BUY repository response. tradeId={}, resultSize={}",
                                    tradeId,
                                    allResults != null ? allResults.size() : null);

                            settlementOutDtoList.addAll(
                                    allResults.stream()
                                            .map(settlementEntity -> mapSettlementWithTrace(settlementEntity,
                                                    "EXTERNAL_ALL_BUY"))
                                            .toList());

                        } else if (isSeller) {
                            log.info(
                                    "[FIND-014] EXTERNAL ALL - Calling findByTradeIdsAndParticipantAndSide SELL. tradeId={}, participantId={}, sideId=2, rejectedStatusId={}",
                                    tradeId,
                                    participantId,
                                    rejectedStatusId);

                            List<SettlementEntity> allResults = settlementRepository
                                    .findByTradeIdsAndParticipantAndSide(
                                            List.of(tradeId),
                                            participantId,
                                            "2",
                                            rejectedStatusId,
                                            sortObj);

                            log.info("[FIND-015] EXTERNAL ALL - SELL repository response. tradeId={}, resultSize={}",
                                    tradeId,
                                    allResults != null ? allResults.size() : null);

                            settlementOutDtoList.addAll(
                                    allResults.stream()
                                            .map(settlementEntity -> mapSettlementWithTrace(settlementEntity,
                                                    "EXTERNAL_ALL_SELL"))
                                            .toList());

                        } else {
                            log.info(
                                    "[FIND-016] EXTERNAL ALL - Participant is neither buyer nor seller. tradeId={}, participantId={}",
                                    tradeId,
                                    participantId);
                        }
                    }
                }

                log.info("[FIND-017] ALL mode finished. totalDtoSize={}",
                        settlementOutDtoList.size());

                return buildPageResponse(
                        settlementOutDtoList,
                        0,
                        settlementOutDtoList.size(),
                        settlementOutDtoList.size());
            }

            log.info("[FIND-018] Processing PAGINATED mode. page={}, size={}, userType={}",
                    page,
                    size,
                    userType);

            Pageable pageable = PageRequest.of(page, size, sortObj);

            if (Objects.equals(userType, UserTypeEnum.INTERNAL)) {
                log.info(
                        "[FIND-019] INTERNAL PAGE - Calling repository findByTradeIds. tradeIds={}, rejectedStatusId={}, page={}, size={}",
                        tradeIds,
                        rejectedStatusId,
                        page,
                        size);

                Page<SettlementEntity> pageResult = settlementRepository.findByTradeIds(tradeIds, rejectedStatusId,
                        pageable);

                log.info(
                        "[FIND-020] INTERNAL PAGE - Repository response. contentSize={}, totalElements={}, totalPages={}",
                        pageResult.getContent() != null ? pageResult.getContent().size() : null,
                        pageResult.getTotalElements(),
                        pageResult.getTotalPages());

                settlementOutDtoList.addAll(
                        pageResult.getContent().stream()
                                .map(settlementEntity -> mapSettlementWithTrace(settlementEntity, "INTERNAL_PAGE"))
                                .toList());

                log.info("[FIND-021] INTERNAL PAGE - Mapping finished. dtoSize={}",
                        settlementOutDtoList.size());

                return MapperPageUtil.pageToPageResponseOutDto(settlementOutDtoList, pageResult);

            } else if (Objects.equals(userType, UserTypeEnum.EXTERNAL)) {
                participantId = userNuboData.participantId();
                log.info("[FIND-022] EXTERNAL PAGE - Start processing tradeIds. tradeIds={}, participantId={}",
                        tradeIds,
                        participantId);

                for (Long tradeId : tradeIds) {
                    log.info("[FIND-023] EXTERNAL PAGE - Checking participant side. tradeId={}, participantId={}",
                            tradeId,
                            participantId);

                    boolean isBuyer = settlementRepository.isParticipantBuyer(List.of(tradeId), participantId);
                    boolean isSeller = settlementRepository.isParticipantSeller(List.of(tradeId), participantId);

                    log.info(
                            "[FIND-024] EXTERNAL PAGE - Participant side result. tradeId={}, participantId={}, isBuyer={}, isSeller={}",
                            tradeId,
                            participantId,
                            isBuyer,
                            isSeller);

                    if (isBuyer && isSeller) {
                        log.info(
                                "[FIND-025] EXTERNAL PAGE - Calling findByTradeIdsAndParticipantMultipleSides. tradeId={}, participantId={}, rejectedStatusId={}",
                                tradeId,
                                participantId,
                                rejectedStatusId);

                        Page<SettlementEntity> pageResult = settlementRepository
                                .findByTradeIdsAndParticipantMultipleSides(
                                        List.of(tradeId),
                                        participantId,
                                        rejectedStatusId,
                                        pageable);

                        log.info(
                                "[FIND-026] EXTERNAL PAGE - Multiple sides repository response. tradeId={}, contentSize={}, totalElements={}",
                                tradeId,
                                pageResult.getContent() != null ? pageResult.getContent().size() : null,
                                pageResult.getTotalElements());

                        settlementOutDtoList.addAll(
                                pageResult.getContent().stream()
                                        .map(settlementEntity -> mapSettlementWithTrace(settlementEntity,
                                                "EXTERNAL_PAGE_MULTIPLE_SIDES"))
                                        .toList());

                    } else if (isBuyer) {
                        log.info(
                                "[FIND-027] EXTERNAL PAGE - Calling findByTradeIdsAndParticipantAndSide BUY. tradeId={}, participantId={}, sideId=1, rejectedStatusId={}",
                                tradeId,
                                participantId,
                                rejectedStatusId);

                        Page<SettlementEntity> pageResult = settlementRepository.findByTradeIdsAndParticipantAndSide(
                                List.of(tradeId),
                                participantId,
                                "1",
                                rejectedStatusId,
                                pageable);

                        log.info(
                                "[FIND-028] EXTERNAL PAGE - BUY repository response. tradeId={}, contentSize={}, totalElements={}",
                                tradeId,
                                pageResult.getContent() != null ? pageResult.getContent().size() : null,
                                pageResult.getTotalElements());

                        settlementOutDtoList.addAll(
                                pageResult.getContent().stream()
                                        .map(settlementEntity -> mapSettlementWithTrace(settlementEntity,
                                                "EXTERNAL_PAGE_BUY"))
                                        .toList());

                    } else if (isSeller) {
                        log.info(
                                "[FIND-029] EXTERNAL PAGE - Calling findByTradeIdsAndParticipantAndSide SELL. tradeId={}, participantId={}, sideId=2, rejectedStatusId={}",
                                tradeId,
                                participantId,
                                rejectedStatusId);

                        Page<SettlementEntity> pageResult = settlementRepository.findByTradeIdsAndParticipantAndSide(
                                List.of(tradeId),
                                participantId,
                                "2",
                                rejectedStatusId,
                                pageable);

                        log.info(
                                "[FIND-030] EXTERNAL PAGE - SELL repository response. tradeId={}, contentSize={}, totalElements={}",
                                tradeId,
                                pageResult.getContent() != null ? pageResult.getContent().size() : null,
                                pageResult.getTotalElements());

                        settlementOutDtoList.addAll(
                                pageResult.getContent().stream()
                                        .map(settlementEntity -> mapSettlementWithTrace(settlementEntity,
                                                "EXTERNAL_PAGE_SELL"))
                                        .toList());

                    } else {
                        log.info(
                                "[FIND-031] EXTERNAL PAGE - Participant is neither buyer nor seller. tradeId={}, participantId={}",
                                tradeId,
                                participantId);
                    }
                }

                log.info("[FIND-032] EXTERNAL PAGE - Mapping finished. dtoSize={}",
                        settlementOutDtoList.size());

                Page<SettlementByCustodyOutDto> resultPage = new PageImpl<>(settlementOutDtoList, pageable,
                        settlementOutDtoList.size());

                return MapperPageUtil.pageToPageResponseOutDto(settlementOutDtoList, resultPage);
            }

            log.warn("[FIND-033] UserType not handled. userType={}", userType);

            return buildPageResponse(settlementOutDtoList, page, size, settlementOutDtoList.size());

        } catch (EntityNotFoundException ex) {
            log.error(
                    "[FIND-ERROR-ENTITY-NOT-FOUND] Entity not found in findAllSettlementsByUserV1. tradeIds={}, participantId={}, userType={}, page={}, size={}, sort={}, order={}, all={}, message={}",
                    tradeIds,
                    participantId,
                    userType,
                    page,
                    size,
                    sort,
                    order,
                    all,
                    ex.getMessage(),
                    ex);
            throw ex;

        } catch (RuntimeException ex) {
            log.error(
                    "[FIND-ERROR-RUNTIME] Unexpected error in findAllSettlementsByUserV1. tradeIds={}, participantId={}, userType={}, page={}, size={}, sort={}, order={}, all={}, message={}",
                    tradeIds,
                    participantId,
                    userType,
                    page,
                    size,
                    sort,
                    order,
                    all,
                    ex.getMessage(),
                    ex);
            throw ex;
        }
    }

    @Override
    public List<SettlementTransferResultOutDto> updateSettlementStatus(
            List<SettlementUpdateTransferInDto> settlementUpdateDtoList, Long motivoId, String motivo) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return updateSettlementStatusV1(settlementUpdateDtoList, motivoId, motivo);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<SettlementTransferResultOutDto> updateSettlementStatusV1(
            List<SettlementUpdateTransferInDto> settlementUpdateDtoList,
            Long motivoId, String motivo) {

        log.debug("Start method updateSettlementV1, settlementUpdateInDto -> {}",
                settlementUpdateDtoList);

        List<SettlementTransferResultOutDto> results = new ArrayList<>();

        String rejectionReasonGlobal = getRejectionReason(motivoId, motivo);

        Map<String, Set<Long>> custodiansByTradeSide = new HashMap<>();

        for (SettlementUpdateTransferInDto dto : settlementUpdateDtoList) {

            if (ObjectUtils.isEmpty(dto.getCustodianId()))
                continue;

            String key = dto.getTradeId() + "-" + dto.getSideId();

            custodiansByTradeSide
                    .computeIfAbsent(key, k -> new HashSet<>())
                    .add(dto.getCustodianId());
        }

        for (SettlementUpdateTransferInDto settlementUpdateInDto : settlementUpdateDtoList) {

            log.info("---- Processing settlement ----");
            log.info("tradeId={}, fraction={}, sideId={}",
                    settlementUpdateInDto.getTradeId(),
                    settlementUpdateInDto.getFraction(),
                    settlementUpdateInDto.getSideId());

            // BUSINESS RULE REQUEST
            StatusUpdateSettlementInDto statusUpdateDto = StatusUpdateSettlementInDto.builder()
                    .tradeId(settlementUpdateInDto.getTradeId())
                    .sideId(settlementUpdateInDto.getSideId())
                    .fraction(settlementUpdateInDto.getFraction())
                    .code(BusinessRuleEnum.RULE_CUSTODIAN_TRANSFER.getValue())
                    .build();

            log.info("Calling Business Rules with: {}", statusUpdateDto);

            StatusUpdateSettlementOutDto validationResponse = operationBusinessRuleClient
                    .validateUpdateStatusSettlement(statusUpdateDto);

            log.info("BR Response: {}", validationResponse);

            SideOutDto side = getSide(settlementUpdateInDto.getSideId());

            // INVALID CASE
            if (validationResponse.getIsValid() == null || !validationResponse.getIsValid()) {

                log.info("Settlement rejected by BR");

                SettlementKey settlementKey = new SettlementKey(
                        settlementUpdateInDto.getTradeId(),
                        settlementUpdateInDto.getFraction(),
                        settlementUpdateInDto.getSideId());

                SettlementEntity settlementEntity = validateSettlement(settlementKey);

                TradeEntity trade = settlementEntity.getTrade();

                results.add(
                        MapperUtil.toRejectedSettlementTransferResultDto(
                                settlementUpdateInDto,
                                validationResponse.getDescription(),
                                side,
                                trade,
                                settlementEntity));

                continue;
            }

            // Happy path
            SettlementKey settlementKey = new SettlementKey(
                    settlementUpdateInDto.getTradeId(),
                    settlementUpdateInDto.getFraction(),
                    settlementUpdateInDto.getSideId());

            SettlementEntity settlementEntity = validateSettlement(settlementKey);

            // Custodian Status
            if (!ObjectUtils.isEmpty(settlementUpdateInDto.getCustodianStatusId())) {
                settlementEntity.setCustodianStatus(
                        validateStatus(settlementUpdateInDto.getCustodianStatusId()));
            }

            // ADMITTED
            if (StatusEnum.CUSTODIAN_ADMITTED.getId()
                    .equals(settlementUpdateInDto.getCustodianStatusId())) {

                settlementEntity.setDirectDepositor(
                        validateParticipant(settlementUpdateInDto.getCustodianId()));
            }

            // TRANSFERRED
            if (StatusEnum.CUSTODIAN_TRANSFERRED.getId()
                    .equals(settlementUpdateInDto.getCustodianStatusId())) {

                if (!ObjectUtils.isEmpty(settlementUpdateInDto.getCustodianId())) {
                    settlementEntity.setCustodian(
                            validateParticipant(settlementUpdateInDto.getCustodianId()));
                }

                if (!ObjectUtils.isEmpty(settlementUpdateInDto.getFicAdministratorId())) {
                    settlementEntity
                            .setFicAdministrator(validateParticipant(settlementUpdateInDto.getFicAdministratorId()));

                    settlementEntity.setCashAccount(
                            findCashAccountByParticipant(
                                    settlementUpdateInDto.getFicAdministratorId()));

                }

                ParticipantEntity senderParticipant = ApplicationUtils.getUserNuboData().participantEntity();
                settlementEntity.setTransferParticipant(senderParticipant);

                log.info("Participant who changed custodian status -> {}", senderParticipant.getId());
            }

            // Rejection reason global
            if (!ObjectUtils.isEmpty(rejectionReasonGlobal)) {
                settlementEntity.setRejectionReason(rejectionReasonGlobal);
            }

            // Audit fields
            settlementEntity.setLastModifyApplication(propertiesConfig.getApiName());
            settlementEntity.setLastModifyIp(PropertiesContext.getClientIp());
            settlementEntity.setLastModifyUser(PropertiesContext.getClientUser());
            settlementEntity.setLastModifyDate(PropertiesContext.getClientDatetime());

            // Save settlemnt
            SettlementEntity savedEntity = settlementRepository.save(settlementEntity);

            if (StatusEnum.CUSTODIAN_TRANSFERRED.getId()
                    .equals(settlementUpdateInDto.getCustodianStatusId())) {

                TradeEntity trade = savedEntity.getTrade();

                // Update trade status
                trade.setCustodianStatus(validateStatus(StatusEnum.CUSTODIAN_TRANSFERRED.getId()));

                // Audit
                trade.setLastModifyApplication(propertiesConfig.getApiName());
                trade.setLastModifyIp(PropertiesContext.getClientIp());
                trade.setLastModifyUser(PropertiesContext.getClientUser());
                trade.setLastModifyDate(PropertiesContext.getClientDatetime());

                tradeRepository.save(trade);

                log.info("Trade updated to TRANSFERRED -> tradeId={}", trade.getId());
            }

            // Notifications
            resolveNotificationUsersAndSend(settlementUpdateInDto, savedEntity);
            /* 
            if (StatusEnum.CUSTODIAN_TRANSFERRED.getId()
                    .equals(settlementUpdateInDto.getCustodianStatusId())) {
                createCustodyPackageFromTransfer(savedEntity);
            } */

            log.info("Settlement updated successfully -> tradeId={}, fraction={}",
                    savedEntity.getTrade().getId(),
                    savedEntity.getFraction());

            // Result mapping
            results.add(
                    MapperUtil.settlementEntityToSettlementTransferResultDto(savedEntity));
        }

        log.info("End method updateSettlementV1, results -> {}", results);

        return results;
    }

    private void resolveNotificationUsersAndSend(SettlementUpdateTransferInDto settlementUpdateInDto,
            SettlementEntity settlementEntity) {
        Long userNuboId = ApplicationUtils.getUserNuboData().userId();
        if (StatusEnum.CUSTODIAN_REJECTED.getId().equals(settlementUpdateInDto.getCustodianStatusId())) {

            sendNotificationUtil.sendNotification(NotificationTypeEnum.INFORMATIVE,
                    NotificationMessageEnum.REQUEST_REJECTED,
                    settlementEntity.getTrade().getId(), userNuboId);
        } else if (StatusEnum.CUSTODIAN_ADMITTED.getId().equals(settlementUpdateInDto.getCustodianStatusId())) {

            sendNotificationUtil.sendNotification(NotificationTypeEnum.INFORMATIVE,
                    NotificationMessageEnum.REQUEST_APPROVED,
                    settlementEntity.getTrade().getId(), userNuboId);
        } else if (StatusEnum.CUSTODIAN_TRANSFERRED.getId().equals(settlementUpdateInDto.getCustodianStatusId())) {

            sendNotificationUtil.sendNotification(NotificationTypeEnum.INFORMATIVE,
                    NotificationMessageEnum.REQUEST_TRANSMITTED,
                    settlementEntity.getTrade().getId(), userNuboId);
        }
    }

    @Override
    public PageResponseOutDto<SettlementKeyOutDto> findPendingAdmissions(int page, int size, String sort,
            String order) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findPendingAdmissionsV1(page, size, sort, order);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<SettlementKeyOutDto> findPendingAdmissionsV1(int page, int size, String sort,
            String order) {
        log.info(
                "Start method findPendingAdmissionsV1, page -> {}, size -> {}, sort -> {}, order -> {}",
                page, size, sort, order);

        UserNuboData userNuboData = ApplicationUtils.getUserNuboData();
        Long statusId = StatusEnum.CUSTODIAN_TRANSFERRED.getId();
        log.info("User: {}, statusId for CUSTODIAN_TRANSFERRED: {}", userNuboData, statusId);

        Sort.Direction direction = "desc".equalsIgnoreCase(order)
                ? Sort.Direction.DESC
                : Sort.Direction.ASC;

        Pageable pageable = PageRequest.of(page, size, Sort.by(direction, sort));

        Page<SettlementEntity> resultPage;

        if (Objects.equals(userNuboData.userTypeEnum(), UserTypeEnum.INTERNAL)) {
            resultPage = settlementRepository
                    .findByCustodianStatusInternal(statusId, pageable);
        } else {
            resultPage = settlementRepository
                    .findByCustodianStatusExternal(statusId, userNuboData.participantId(), pageable);
        }

        List<SettlementKeyOutDto> content = resultPage.getContent()
                .stream()
                .map(MapperUtil::toSettlementKeyOutDto)
                .toList();

        log.info("End method findPendingAdmissionsV1, totalElements -> {}, totalPages -> {}",
                resultPage.getTotalElements(), resultPage.getTotalPages());
        return MapperPageUtil.pageToPageResponseOutDto(content, resultPage);
    }

    private BigDecimal findCashAccountByParticipant(Long participantId) {

        ParticipantEntity participantEntity = participantRepository
                .findById(participantId)
                .orElseThrow(() -> new ServiceException(
                        ErrorCode.PARTICIPANT_NOT_FOUND,
                        HttpStatus.NOT_FOUND));

        return participantBankAccountRepository
                .findFirstByParticipantOrderByIdAsc(participantEntity)
                .map(account -> new BigDecimal(account.getBankAccount()))
                .orElse(BigDecimal.ZERO);
    }

    private String getRejectionReason(Long motivoId, String motivo) {
        if (motivoId == null)
            return null;

        RejectionReasonEntity rejectionStatus = validateRejectionReason(motivoId);
        return (motivo == null)
                ? String.format("%d - %s ", motivoId, rejectionStatus.getReason())
                : String.format("%d - %s : %s", motivoId, rejectionStatus.getReason(), motivo);
    }

    private void createCustodianStatusHistory(SettlementEntity settlementEntity) {
        CustodianStatusHistoryEntity custodianStatusHistoryEntity = CustodianStatusHistoryEntity.builder()
                .market(settlementEntity.getTrade().getMarket())
                .uniqueFractionId(settlementEntity.getUniqueFractionId())
                .fraction(settlementEntity.getFraction())
                .custodianStatusTime(PropertiesContext.getClientDatetime())
                .investorAccount(settlementEntity.getInvestorAccount())
                .custodianStatus(settlementEntity.getCustodianStatus())
                .trade(settlementEntity.getTrade())
                .side(settlementEntity.getSide())
                .investor(settlementEntity.getInvestor())
                .custodian(settlementEntity.getCustodian())
                .ficAdministrator(settlementEntity.getFicAdministrator())
                .fractionQuantity(settlementEntity.getFractionQuantity())
                .fractionVolume(settlementEntity.getFractionVolume())
                .netAmount(settlementEntity.getNetAmount())
                .commissionAmount(settlementEntity.getCommissionAmount())
                .valTaxAmount(settlementEntity.getValTaxAmount())
                .lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyDate(PropertiesContext.getClientDatetime())
                .lastModifyIp(PropertiesContext.getClientIp())
                .build();

        custodianStatusHistoryRepository.save(custodianStatusHistoryEntity);
    }

    private SettlementEntity validateSettlement(SettlementKey settlementKey) {
        return settlementRepository.findByCompositeKey(settlementKey.getTrade(),
                settlementKey.getFraction(), settlementKey.getSide())
                .orElseThrow(() -> new ServiceException(ErrorCode.SETTLEMENT_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private StatusEntity validateStatus(Long statusId) {
        return statusRepository.findById(statusId)
                .orElseThrow(() -> new ServiceException(ErrorCode.STATUS_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private ParticipantEntity validateParticipant(Long participantId) {
        return participantRepository.findById(participantId)
                .orElseThrow(() -> new ServiceException(ErrorCode.PARTICIPANT_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private FicAdministratorEntity validateFicAdministrator(Long ficAdministratorId) {
        return ficAdministratorRepository.findById(ficAdministratorId)
                .orElseThrow(() -> new ServiceException(ErrorCode.FIC_ADMINISTRATOR_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private RejectionReasonEntity validateRejectionReason(Long ficAdministratorId) {
        return rejectionReasonRepository.findById(ficAdministratorId)
                .orElseThrow(() -> new ServiceException(ErrorCode.REJECTION_REASON_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private SideOutDto getSide(String sideId) {
        if (ObjectUtils.isEmpty(sideId))
            return null;

        return sideRepository.findById(sideId)
                .map(MapperUtil::sideEntityToSideOutDto)
                .orElse(null);
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
        requireTransferPackageData(settlement, "settlement", settlement);
        TradeEntity tradeEntity = settlement.getTrade();
        requireTransferPackageData(tradeEntity, "trade", settlement);
        SideEntity side = settlement.getSide();
        requireTransferPackageData(side, "side", settlement);
        String sideId = side.getId();
        if (!SideEnum.BUY.getId().equals(sideId) && !SideEnum.SELL.getId().equals(sideId)) {
            failTransferPackageValidation("sideId must be 1 or 2", settlement);
        }

        ParticipantEntity participant = validateParticipantBySide(tradeEntity, side);
        String depositoryId = resolveDepositoryId(tradeEntity, sideId);
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
                .clearingDate(tradeEntity.getClearingDate())
                .returnClearingDate(tradeEntity.getReturnClearingDate())
                .fractionQuantity(settlement.getFractionQuantity())
                .price(tradeEntity.getPrice())
                .rate(rate)
                .indicateExitReturn(Boolean.TRUE.equals(tradeEntity.getExitIndicatorSettlement()))
                .build();

        SecurityTitleEntity securityTitleEntity = tradeEntity.getSecurityTitle();
        PackageCustodianAutomaticInDto.PackageDto packageDto = PackageCustodianAutomaticInDto.PackageDto.builder()
                .marketId(tradeEntity.getMarket() == null ? null : tradeEntity.getMarket().getId())
                .codeSCB(toThreeDigitParticipantCode(participant.getCode()))
                .sideId(sideId)
                .investorId(settlement.getInvestor() == null ? null : settlement.getInvestor().getId())
                .participantId(participant.getId())
                .investorAccountId(
                        settlement.getInvestorAccount() == null ? null : settlement.getInvestorAccount().getId())
                .isinNumberId(securityTitleEntity.getIsinNumbers().isEmpty() ? null
                        : securityTitleEntity.getIsinNumbers().get(0).getId())
                .securityId(securityTitleEntity == null ? null : securityTitleEntity.getId())
                .typeId(tradeEntity.getType() == null ? null : tradeEntity.getType().getId())
                .depositoryId(depositoryId)
                .clearingDate(tradeEntity.getClearingDate())
                .returnClearingDate(tradeEntity.getReturnClearingDate())
                .custodianStatusId(
                        settlement.getCustodianStatus() == null ? null : settlement.getCustodianStatus().getId())
                .custodianId(settlement.getCustodian() == null ? null : settlement.getCustodian().getId())
                .ficAdministratorId(
                        settlement.getFicAdministrator() == null ? null : settlement.getFicAdministrator().getId())
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

        validateTransferPackagePayload(packageDto, detail, settlement);

        return PackageCustodianAutomaticInDto.builder()
                .sourceApplication(propertiesConfig.getApiName())
                .executionDate(LocalDate.now())
                .cutType(MANUAL_CUSTODY_TRANSFER_CUT_TYPE)
                .sameDaySettlement(null)
                .packages(List.of(packageDto))
                .build();
    }

    private void validateTransferPackagePayload(PackageCustodianAutomaticInDto.PackageDto packageDto,
            PackageCustodianAutomaticInDto.DetailDto detailDto,
            SettlementEntity settlement) {
        requireTransferPackageData(packageDto.getMarketId(), "marketId", settlement);
        requireTransferPackageData(packageDto.getSideId(), "sideId", settlement);
        requireTransferPackageData(packageDto.getInvestorId(), "investorId", settlement);
        requireTransferPackageData(packageDto.getParticipantId(), "participantId", settlement);
        if (Long.valueOf(0L).equals(packageDto.getParticipantId())) {
            failTransferPackageValidation("participantId by side is missing", settlement);
        }
        requireTransferPackageData(packageDto.getInvestorAccountId(), "investorAccountId", settlement);
        requireTransferPackageData(packageDto.getIsinNumberId(), "isinNumberId", settlement);
        requireTransferPackageData(packageDto.getSecurityId(), "securityId", settlement);
        requireTransferPackageData(packageDto.getTypeId(), "typeId", settlement);
        requireTransferPackageData(packageDto.getDepositoryId(), "depositoryId", settlement);
        requireTransferPackageData(packageDto.getClearingDate(), "clearingDate", settlement);
        requireTransferPackageData(packageDto.getCustodianStatusId(), "custodianStatusId", settlement);
        requireTransferPackageData(packageDto.getCustodianId(), "custodianId", settlement);
        requireTransferPackageData(packageDto.getFicAdministratorId(), "ficAdministratorId", settlement);
        requireTransferPackageData(detailDto.getUniqueFractionId(), "uniqueFractionId", settlement);
        requireTransferPackageData(detailDto.getTradeId(), "tradeId", settlement);
        requireTransferPackageData(detailDto.getFraction(), "fraction", settlement);
        requireTransferPackageData(detailDto.getMatchDate(), "matchDate", settlement);
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

    private String toThreeDigitParticipantCode(String participantCode) {
        if (participantCode == null || participantCode.isBlank()) {
            return null;
        }
        String trimmed = participantCode.trim();
        return trimmed.length() <= 3 ? trimmed : trimmed.substring(trimmed.length() - 3);
    }

    private BigDecimal defaultAmount(BigDecimal value) {
        return value == null ? ZERO_AMOUNT : value;
    }

    private BigDecimal firstNonNull(BigDecimal... values) {
        for (BigDecimal value : values) {
            if (value != null) {
                return value;
            }
        }
        return ZERO_AMOUNT;
    }

    private void requireTransferPackageData(Object value, String reason, SettlementEntity settlement) {
        if (isMissing(value)) {
            failTransferPackageValidation(reason + " is required", settlement);
        }
    }

    private boolean isMissing(Object value) {
        return value == null || value instanceof String stringValue && stringValue.isBlank();
    }

    private void failTransferPackageValidation(String reason, SettlementEntity settlement) {
        Long tradeId = getSafeTransferTradeId(settlement);
        String sideId = getSafeTransferSideId(settlement);
        Integer fraction = settlement == null ? null : settlement.getFraction();
        Long uniqueFractionId = settlement == null ? null : settlement.getUniqueFractionId();

        String message = "Cannot create custody package from transfer. reason=%s, tradeId=%s, sideId=%s, fraction=%s, uniqueFractionId=%s"
                .formatted(reason, tradeId, sideId, fraction, uniqueFractionId);
        log.error(message);

        throw new ServiceException(ErrorCode.PACKAGE_CUSTODY_TRANSFER_DATA_INVALID,
                HttpStatus.UNPROCESSABLE_ENTITY,
                new IllegalStateException(message));
    }

    private Long getSafeTransferTradeId(SettlementEntity settlement) {
        try {
            return settlement != null && settlement.getTrade() != null ? settlement.getTrade().getId() : null;
        } catch (RuntimeException ex) {
            log.warn("Could not resolve tradeId for transfer package validation log. message={}", ex.getMessage());
            return null;
        }
    }

    private String getSafeTransferSideId(SettlementEntity settlement) {
        try {
            return settlement != null && settlement.getSide() != null ? settlement.getSide().getId() : null;
        } catch (RuntimeException ex) {
            log.warn("Could not resolve sideId for transfer package validation log. message={}", ex.getMessage());
            return null;
        }
    }

    private PageResponseOutDto<SettlementByCustodyOutDto> buildPageResponse(
            List<SettlementByCustodyOutDto> content, int page, int size, int totalElements) {
        PageResponseOutDto<SettlementByCustodyOutDto> pageResponse = new PageResponseOutDto<>();
        pageResponse.setContent(content);
        pageResponse.setPageNumber(page);
        pageResponse.setPageSize(size);
        pageResponse.setTotalElements((long) totalElements);
        pageResponse.setTotalPages((int) Math.ceil((double) totalElements / size));
        return pageResponse;
    }

    private SettlementByCustodyOutDto mapSettlementWithTrace(SettlementEntity settlementEntity, String source) {
        try {
            log.info(
                    "[FIND-SETTLEMENT-MAP-001] Mapping settlement started. source={}, tradeId={}, fraction={}, sideId={}, uniqueFractionId={}, investorAccountId={}",
                    source,
                    getSafeTradeId(settlementEntity),
                    settlementEntity.getFraction(),
                    getSafeSideId(settlementEntity),
                    settlementEntity.getUniqueFractionId(),
                    getSafeInvestorAccountId(settlementEntity));

            SettlementByCustodyOutDto dto = MapperUtil.settlementEntityToSettlementByCustodyOutDto(settlementEntity);

            log.info(
                    "[FIND-SETTLEMENT-MAP-002] Mapping settlement finished. source={}, tradeId={}, fraction={}, sideId={}",
                    source,
                    getSafeTradeId(settlementEntity),
                    settlementEntity.getFraction(),
                    getSafeSideId(settlementEntity));

            return dto;

        } catch (EntityNotFoundException ex) {
            log.error(
                    "[FIND-SETTLEMENT-MAP-ERROR-ENTITY-NOT-FOUND] Error mapping settlement. source={}, tradeId={}, fraction={}, sideId={}, uniqueFractionId={}, investorAccountId={}, message={}",
                    source,
                    getSafeTradeId(settlementEntity),
                    settlementEntity.getFraction(),
                    getSafeSideId(settlementEntity),
                    settlementEntity.getUniqueFractionId(),
                    getSafeInvestorAccountId(settlementEntity),
                    ex.getMessage(),
                    ex);
            throw ex;

        } catch (RuntimeException ex) {
            log.error(
                    "[FIND-SETTLEMENT-MAP-ERROR-RUNTIME] Error mapping settlement. source={}, tradeId={}, fraction={}, sideId={}, uniqueFractionId={}, investorAccountId={}, message={}",
                    source,
                    getSafeTradeId(settlementEntity),
                    settlementEntity.getFraction(),
                    getSafeSideId(settlementEntity),
                    settlementEntity.getUniqueFractionId(),
                    getSafeInvestorAccountId(settlementEntity),
                    ex.getMessage(),
                    ex);
            throw ex;
        }
    }

    private Long getSafeTradeId(SettlementEntity settlementEntity) {
        try {
            if (settlementEntity == null || settlementEntity.getTrade() == null) {
                return null;
            }
            return settlementEntity.getTrade().getId();
        } catch (EntityNotFoundException ex) {
            log.error("[FIND-SAFE-TRADE-ERROR] Trade proxy could not be resolved. message={}",
                    ex.getMessage(), ex);
            return null;
        }
    }

    private String getSafeSideId(SettlementEntity settlementEntity) {
        try {
            if (settlementEntity == null || settlementEntity.getSide() == null) {
                return null;
            }
            return settlementEntity.getSide().getId();
        } catch (EntityNotFoundException ex) {
            log.error("[FIND-SAFE-SIDE-ERROR] Side proxy could not be resolved. message={}",
                    ex.getMessage(), ex);
            return null;
        }
    }

    private Long getSafeInvestorAccountId(SettlementEntity settlementEntity) {
        try {
            if (settlementEntity == null || settlementEntity.getInvestorAccount() == null) {
                return null;
            }
            return settlementEntity.getInvestorAccount().getId();
        } catch (EntityNotFoundException ex) {
            log.error("[FIND-SAFE-INVESTOR-ACCOUNT-ERROR] InvestorAccount proxy could not be resolved. message={}",
                    ex.getMessage(), ex);
            return null;
        }
    }

}

```

## src/main/java/com/nubo/operations/custody/transfer/api/service/impl/SettlementTransferServiceImpl.java

```java
package com.nubo.operations.custody.transfer.api.service.impl;

import com.nubo.operations.custody.transfer.api.application.properties.PropertiesContext;
import com.nubo.operations.custody.transfer.api.application.util.ApplicationUtils;
import com.nubo.operations.custody.transfer.api.client.businessday.calculation.model.dto.response.BusinessDayOutDto;
import com.nubo.operations.custody.transfer.api.client.businessday.calculation.service.BusinessDayCalculationClient;
import com.nubo.operations.custody.transfer.api.exception.ServiceException;
import com.nubo.operations.custody.transfer.api.exception.error.ErrorCode;
import com.nubo.operations.custody.transfer.api.helpers.MapperPageUtil;
import com.nubo.operations.custody.transfer.api.helpers.MapperUtil;
import com.nubo.operations.custody.transfer.api.models.domain.UserNuboData;
import com.nubo.operations.custody.transfer.api.models.dto.response.PageResponseOutDto;
import com.nubo.operations.custody.transfer.api.models.dto.response.SettlementTransferRowOutDto;
import com.nubo.operations.custody.transfer.api.models.entity.SettlementEntity;
import com.nubo.operations.custody.transfer.api.models.enums.SideEnum;
import com.nubo.operations.custody.transfer.api.models.enums.StatusEnum;
import com.nubo.operations.custody.transfer.api.models.enums.UserTypeEnum;
import com.nubo.operations.custody.transfer.api.models.enums.VersionApiEnum;
import com.nubo.operations.custody.transfer.api.repository.SettlementRepository;
import com.nubo.operations.custody.transfer.api.repository.TradeRepository;
import com.nubo.operations.custody.transfer.api.service.SettlementTransferService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class SettlementTransferServiceImpl implements SettlementTransferService {

    private final SettlementRepository settlementRepository;
    private final BusinessDayCalculationClient businessDayCalculationClient;
    private final TradeRepository tradeRepository;

    @Override
    public PageResponseOutDto<SettlementTransferRowOutDto> getSettlementTransferPreview(List<Long> tradeIds,
            Long participantId, Pageable pageable) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return getSettlementTransferPreviewV1(tradeIds, participantId, pageable);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<SettlementTransferRowOutDto> getSettlementTransferPreviewV1(List<Long> tradeIds,
            Long participantId, Pageable pageable) {
        log.info("Start method getSettlementTransferPreviewV1 with tradeIds: {}, participantId: {}, pageable: {}",
                tradeIds, participantId, pageable);
        validateBusinessDayFromTrades(tradeIds);

        UserNuboData userNuboData = ApplicationUtils.getUserNuboData();
        Long assignedStatusId = StatusEnum.ASSIGNED.getId();
        log.info("User: {}, statusId for ASSIGNED: {}", userNuboData, assignedStatusId);

        Page<SettlementEntity> page;
        if (Objects.equals(userNuboData.userTypeEnum(), UserTypeEnum.INTERNAL)) {
            page = settlementRepository.findWholeOperations(tradeIds, assignedStatusId, pageable);
            return mapToResponse(page);
        } else {
            page = settlementRepository.findWholeOperations(tradeIds, assignedStatusId, pageable);
            List<SettlementEntity> filtered = filterByParticipantAndTradeType(page.getContent(),
                    userNuboData.participantId());

            Page<SettlementEntity> filteredPage = listToPage(filtered, pageable, filtered.size());
            return mapToResponse(filteredPage);
        }
    }

    @Override
    public PageResponseOutDto<SettlementTransferRowOutDto> getSettlementFractionsPreview(List<Long> tradeIds,
            Long participantId, Pageable pageable) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return getSettlementFractionsPreviewV1(tradeIds, participantId, pageable);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<SettlementTransferRowOutDto> getSettlementFractionsPreviewV1(List<Long> tradeIds,
            Long participantId, Pageable pageable) {
        log.info("Start method getSettlementFractionsPreviewV1 with tradeIds: {}, participantId: {}, pageable: {}",
                tradeIds, participantId, pageable);
        validateBusinessDayFromTrades(tradeIds);

        UserNuboData userNuboData = ApplicationUtils.getUserNuboData();
        Long assignedStatusId = StatusEnum.ASSIGNED.getId();
        log.info("User: {}, statusId for ASSIGNED: {}", userNuboData, assignedStatusId);

        Page<SettlementEntity> page;
        if (Objects.equals(userNuboData.userTypeEnum(), UserTypeEnum.INTERNAL)) {
            page = settlementRepository.findFractions(tradeIds, assignedStatusId, pageable);
            return mapToResponse(page);
        } else {
            page = settlementRepository.findFractions(tradeIds, assignedStatusId, pageable);
            List<SettlementEntity> filtered = filterByParticipantAndTradeType(page.getContent(),
                    userNuboData.participantId());

            Page<SettlementEntity> filteredPage = listToPage(filtered, pageable, filtered.size());
            return mapToResponse(filteredPage);
        }
    }

    private List<SettlementEntity> filterByParticipantAndTradeType(List<SettlementEntity> settlementList,
            Long participantId) {
        return settlementList.stream()
                .filter(settlement -> {
                    Long participantBuyId = settlement.getTrade().getParticipantBuy() != null
                            ? settlement.getTrade().getParticipantBuy().getId()
                            : null;
                    Long participantSellId = settlement.getTrade().getParticipantSell() != null
                            ? settlement.getTrade().getParticipantSell().getId()
                            : null;

                    if (participantBuyId == null || participantSellId == null)
                        return false;

                    boolean isConvened = !participantBuyId.equals(participantSellId);
                    boolean isCrossed = participantBuyId.equals(participantSellId);

                    if (isConvened) {
                        if (participantId.equals(participantBuyId)
                                && settlement.getSide().getDescription().equals(SideEnum.BUY.getDescription()))
                            return true;
                        if (participantId.equals(participantSellId)
                                && settlement.getSide().getDescription().equals(SideEnum.SELL.getDescription()))
                            return true;
                        return false;
                    } else if (isCrossed) {
                        return participantId.equals(participantBuyId) || participantId.equals(participantSellId);
                    }
                    return false;
                })
                .collect(Collectors.toList());
    }

    private Page<SettlementEntity> listToPage(List<SettlementEntity> list, Pageable pageable, long total) {
        return new PageImpl<>(list, pageable, total);
    }

    private PageResponseOutDto<SettlementTransferRowOutDto> mapToResponse(Page<SettlementEntity> page) {
        List<SettlementTransferRowOutDto> dtoList = page.getContent().stream()
                .map(MapperUtil::SettlementtoSettlementTransferDto)
                .collect(Collectors.toList());
        return MapperPageUtil.pageToPageResponseOutDto(dtoList, page);
    }

    private void validateBusinessDayFromTrades(List<Long> tradeIds) {
        if (tradeIds == null || tradeIds.isEmpty())
            return;

        Long countryId = tradeRepository.findCountryIdByTradeId(tradeIds.get(0));
        if (countryId == null)
            throw new IllegalStateException("Country not found for trade");

        BusinessDayOutDto response = businessDayCalculationClient.validBusinessDay(countryId);
        if (response == null || !Boolean.TRUE.equals(response.getIsValidBusinessDay()))
            throw new IllegalStateException("Operation not allowed: current day is not a valid business day");
    }

}

```

## src/main/java/com/nubo/operations/custody/transfer/api/web/controller/CustodianEmailRestController.java

```java
package com.nubo.operations.custody.transfer.api.web.controller;

import com.nubo.operations.custody.transfer.api.models.dto.response.EmailTransferCustodianOutDto;
import com.nubo.operations.custody.transfer.api.service.CustodianEmailService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "Custodian Email Rest Controller")
@RestController
@RequestMapping("/v1/email")
@RequiredArgsConstructor
public class CustodianEmailRestController {

    private final CustodianEmailService custodianEmailService;

    @PostMapping("/sendPendingTransfers")
    public ResponseEntity<EmailTransferCustodianOutDto> sendPendingCustodianTransfers() {
        EmailTransferCustodianOutDto response = custodianEmailService.sendPendingTransfers();
        return ResponseEntity.ok(response);
    }
}

```

## src/main/java/com/nubo/operations/custody/transfer/api/web/controller/FicAdministratorRestController.java

```java
package com.nubo.operations.custody.transfer.api.web.controller;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nubo.operations.custody.transfer.api.models.dto.response.PageResponseOutDto;
import com.nubo.operations.custody.transfer.api.models.dto.response.SmallParticipantOutDto;
import com.nubo.operations.custody.transfer.api.service.FicAdministratorService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@Tag(name = "FicAdministrator")
@RestController
@RequestMapping("/{version}/fic-administrator")
@RequiredArgsConstructor
public class FicAdministratorRestController {

    private final FicAdministratorService ficAdministratorService;

    @Operation(summary = "Find all FicAdministrator", description = "Find all FicAdministrator")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = SmallParticipantOutDto[].class)))})
    @GetMapping
    public ResponseEntity<PageResponseOutDto<SmallParticipantOutDto>> findAllFicAdministrator(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(required = false) String sort,
            @RequestParam(required = false) String order) {
        Pageable pageable;
        if (sort != null && order != null) {
            Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
            Sort sorting = Sort.by(direction, sort);
            pageable = PageRequest.of(page, size, sorting);
        } else {
            pageable = PageRequest.of(page, size);
        }
        PageResponseOutDto<SmallParticipantOutDto> countries = ficAdministratorService.findAllFicAdministrator(pageable);
        return ResponseEntity.ok(countries);
    }

}

```

## src/main/java/com/nubo/operations/custody/transfer/api/web/controller/RejectionReasonRestController.java

```java
package com.nubo.operations.custody.transfer.api.web.controller;

import com.nubo.operations.custody.transfer.api.models.dto.response.RejectionReasonOutDto;
import com.nubo.operations.custody.transfer.api.service.RejectionReasonService;
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

@Tag(name = "RejectionReason")
@RestController
@RequestMapping("/{version}/rejection-reason")
@RequiredArgsConstructor
public class RejectionReasonRestController {

    private final RejectionReasonService rejectionReasonService;

    @Operation(summary = "Find all Rejection Reason", description = "Find all Rejection Reason")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = RejectionReasonOutDto[].class)))})
    @GetMapping
    public ResponseEntity<List<RejectionReasonOutDto>> findAllRejectionReason() {
        List<RejectionReasonOutDto> countries = rejectionReasonService.findAllRejectionReason();
        return ResponseEntity.ok(countries);
    }

}

```

## src/main/java/com/nubo/operations/custody/transfer/api/web/controller/SettlementRestController.java

```java
package com.nubo.operations.custody.transfer.api.web.controller;

import java.util.List;

import com.nubo.operations.custody.transfer.api.models.dto.response.*;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nubo.operations.custody.transfer.api.models.dto.request.SettlementUpdateTransferInDto;
import com.nubo.operations.custody.transfer.api.service.SettlementService;

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

    @Operation(summary = "Find all Settlement By User", description = "Find all Settlement By User")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = SettlementByCustodyOutDto[].class))) })
    @GetMapping("/by-list-tradeid-participant-user")
    public ResponseEntity<PageResponseOutDto<SettlementByCustodyOutDto>> findAllSettlement(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "id") String sort,
            @RequestParam(defaultValue = "asc") String order,
            @RequestParam(defaultValue = "false") boolean all,
            @Parameter(example = "1") @RequestParam(required = false) List<Long> tradeId,
            @Parameter(example = "1") @RequestParam(required = false) Long participantId) {
        PageResponseOutDto<SettlementByCustodyOutDto> countries = settlementService
                .findAllSettlementsByUser(tradeId, participantId, page, size, sort, order, all);
        return ResponseEntity.ok(countries);
    }

    @Operation(summary = "Update Settlement Status", description = "Update settlement Status")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = SettlementOutDto.class))) })
    @PatchMapping("/transfer")
    public ResponseEntity<List<SettlementTransferResultOutDto>> updateSettlementStatusTransfer(
            @Valid @RequestBody List<SettlementUpdateTransferInDto> settlementUpdateInDtoList,
            @Parameter(example = "1") @RequestParam(required = false) Long motivoId,
            @Parameter(example = "1A") @RequestParam(required = false) String motivo) {

        return ResponseEntity.ok(
                settlementService.updateSettlementStatus(
                        settlementUpdateInDtoList,
                        motivoId,
                        motivo));
    }

    @Operation(summary = "Pending admissions")
    @GetMapping("/pending-admissions")
    public ResponseEntity<PageResponseOutDto<SettlementKeyOutDto>> findPendingAdmissions(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "id") String sort,
            @RequestParam(defaultValue = "asc") String order) {
        return ResponseEntity.ok(
                settlementService.findPendingAdmissions(page, size, sort, order));
    }
}

```

## src/main/java/com/nubo/operations/custody/transfer/api/web/controller/SettlementTransferController.java

```java
package com.nubo.operations.custody.transfer.api.web.controller;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nubo.operations.custody.transfer.api.models.dto.request.SettlementTransferPreviewInDto;
import com.nubo.operations.custody.transfer.api.models.dto.response.PageResponseOutDto;
import com.nubo.operations.custody.transfer.api.models.dto.response.SettlementTransferRowOutDto;
import com.nubo.operations.custody.transfer.api.service.SettlementTransferService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@Tag(name = "Settlement Custodian Transfer")
@RestController
@RequestMapping("/{version}/settlement/transfer")
@RequiredArgsConstructor
public class SettlementTransferController {

    private final SettlementTransferService settlementTransferService;

    @PostMapping("/findTransfers/operations")
    public PageResponseOutDto<SettlementTransferRowOutDto> getTransferPreview(
            @RequestBody SettlementTransferPreviewInDto request,
            @RequestParam(required = false) Long participantId,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {

        Pageable pageable = PageRequest.of(page, size);

        return settlementTransferService.getSettlementTransferPreview(
                request.getTradeIds(),
                participantId,
                pageable
        );
    }

    @PostMapping("/findTransfers/fractions")
    public PageResponseOutDto<SettlementTransferRowOutDto> getTransferFractionsPreview(
            @RequestBody SettlementTransferPreviewInDto request,
            @RequestParam(required = false) Long participantId,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {

        Pageable pageable = PageRequest.of(page, size);

        return settlementTransferService.getSettlementFractionsPreview(
                request.getTradeIds(),
                participantId,
                pageable
        );
    }

}

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
    url-operation-special-status: ${NUBO_URL_OPERATION_SPECIAL_STATUS}
    url-businessday-calculation: ${NUBO_URL_BUSINESS_DAY_CALCULATION}
    url-email-api: ${NUBO_URL_EMAIL_API}
    url-operation-rules: ${NUBO_URL_OPERATION_RULES}
    packages-custody-cmd:
      base-url: ${NUBO_URL_PACKAGES_CUSTODY_CMD_BASE_URL}
      version: ${NUBO_PACKAGES_CUSTODY_CMD_VERSION}
      automatic-path: ${NUBO_PACKAGES_CUSTODY_CMD_AUTOMATIC_PATH}
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
      topic-name-special-trade-compensation: ${KAFKA_NUBO_TOPIC_NAME_SPECIAL_TRADE_COMPENSATION}
      topic-create-package-custody: ${KAFKA_NUBO_TOPIC_NAME_CREATE_PACKAGE_CUSTODY}
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
    show-sql: 'true'
    database-platform: org.hibernate.dialect.PostgreSQLDialect
logging:
  config: classpath:log/log4j2.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR
client:
  nubo:
    url-operation-special-status: ${NUBO_URL_OPERATION_SPECIAL_STATUS}
    url-businessday-calculation: ${NUBO_URL_BUSINESS_DAY_CALCULATION}
    url-email-api: ${NUBO_URL_EMAIL_API}
    url-operation-rules: ${NUBO_URL_OPERATION_RULES}
    packages-custody-cmd:
      base-url: ${NUBO_URL_PACKAGES_CUSTODY_CMD_BASE_URL:http://localhost:8083/packages-custody-cmd-api}
      version: ${NUBO_PACKAGES_CUSTODY_CMD_VERSION:v1}
      automatic-path: ${NUBO_PACKAGES_CUSTODY_CMD_AUTOMATIC_PATH:/{version}/package-custodian/automatic}
kafka:
  nubo:
    retries: ${KAFKA_NUBO_RETRIES:5}
    bootstrap-servers: ${KAFKA_NUBO_BOOTSTRAP_SERVER:local}
    auto-offset-reset: ${KAFKA_NUBO_AUTO_OFFSET_RESET:latest}
    security:
      protocol: PLAINTEXT
    sasl:
      mechanism: SCRAM-SHA-256
      jaas:
        config: "org.apache.kafka.common.security.scram.ScramLoginModule required;"
    producer:
      topic-name-special-trade-compensation: ${KAFKA_NUBO_TOPIC_NAME_SPECIAL_TRADE_COMPENSATION}
      topic-create-package-custody: ${KAFKA_NUBO_TOPIC_NAME_CREATE_PACKAGE_CUSTODY}
    notification:
      id: ${KAFKA_NUBO_NOTIFICATION_ID:23}
      event-type: ${KAFKA_NUBO_NOTIFICATION_EVENT_TYPE:NOTIFICACION_LISTA_PARA_USUARIO}
      module: ${KAFKA_NUBO_NOTIFICATION_MODULE:HORARIOS}
      kafka-notification-request-topic: ${KAFKA_NUBO_NOTIFICATION_REQUEST_TOPIC}
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
    url-operation-special-status: ${NUBO_URL_OPERATION_SPECIAL_STATUS}
    url-businessday-calculation: ${NUBO_URL_BUSINESS_DAY_CALCULATION}
    url-email-api: ${NUBO_URL_EMAIL_API}
    url-operation-rules: ${NUBO_URL_OPERATION_RULES}
    packages-custody-cmd:
      base-url: ${NUBO_URL_PACKAGES_CUSTODY_CMD_BASE_URL}
      version: ${NUBO_PACKAGES_CUSTODY_CMD_VERSION}
      automatic-path: ${NUBO_PACKAGES_CUSTODY_CMD_AUTOMATIC_PATH}
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
      topic-name-special-trade-compensation: ${KAFKA_NUBO_TOPIC_NAME_SPECIAL_TRADE_COMPENSATION}
      topic-create-package-custody: ${KAFKA_NUBO_TOPIC_NAME_CREATE_PACKAGE_CUSTODY}
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
    url-operation-special-status: ${NUBO_URL_OPERATION_SPECIAL_STATUS}
    url-businessday-calculation: ${NUBO_URL_BUSINESS_DAY_CALCULATION}
    url-email-api: ${NUBO_URL_EMAIL_API}
    url-operation-rules: ${NUBO_URL_OPERATION_RULES}
    packages-custody-cmd:
      base-url: ${NUBO_URL_PACKAGES_CUSTODY_CMD_BASE_URL}
      version: ${NUBO_PACKAGES_CUSTODY_CMD_VERSION}
      automatic-path: ${NUBO_PACKAGES_CUSTODY_CMD_AUTOMATIC_PATH}
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
      topic-name-special-trade-compensation: ${KAFKA_NUBO_TOPIC_NAME_SPECIAL_TRADE_COMPENSATION}
      topic-create-package-custody: ${KAFKA_NUBO_TOPIC_NAME_CREATE_PACKAGE_CUSTODY}
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
config:
  application:
    rateLimited:
      number-max-request: ${RATE_LIMIT_MAX_REQUEST}
      range-time-request: ${RATE_LIMIT_TIME_REQUEST}
      waiting-time: ${RATE_LIMIT_WAITING_TIME}
client:
  nubo:
    url-operation-special-status: ${NUBO_URL_OPERATION_SPECIAL_STATUS}
    url-businessday-calculation: ${NUBO_URL_BUSINESS_DAY_CALCULATION}
    url-email-api: ${NUBO_URL_EMAIL_API}
    url-operation-rules: ${NUBO_URL_OPERATION_RULES}
    packages-custody-cmd:
      base-url: ${NUBO_URL_PACKAGES_CUSTODY_CMD_BASE_URL}
      version: ${NUBO_PACKAGES_CUSTODY_CMD_VERSION}
      automatic-path: ${NUBO_PACKAGES_CUSTODY_CMD_AUTOMATIC_PATH}
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
      topic-name-special-trade-compensation: ${KAFKA_NUBO_TOPIC_NAME_SPECIAL_TRADE_COMPENSATION}
      topic-create-package-custody: ${KAFKA_NUBO_TOPIC_NAME_CREATE_PACKAGE_CUSTODY}
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
 ,-----. ,------. ,------.,------.   ,---. ,--------.,--. ,-----. ,--.  ,--. ,---.   ,-----.,--. ,--. ,---.,--------.,-----. ,------.,--.   ,--.,--------.,------.   ,---.  ,--.  ,--. ,---. ,------.,------.,------.
'  .-.  '|  .--. '|  .---'|  .--. ' /  O  \'--.  .--'|  |'  .-.  '|  ,'.|  |'   .-' '  .--./|  | |  |'   .-'--.  .--'  .-.  '|  .-.  \\  `.'  / '--.  .--'|  .--. ' /  O  \ |  ,'.|  |'   .-'|  .---'|  .---'|  .--. '
|  | |  ||  '--' ||  `--, |  '--'.'|  .-.  |  |  |   |  ||  | |  ||  |' '  |`.  `-. |  |    |  | |  |`.  `-.  |  |  |  | |  ||  |  \  :'.    /     |  |   |  '--'.'|  .-.  ||  |' '  |`.  `-.|  `--, |  `--, |  '--'.'
'  '-'  '|  | --' |  `---.|  |\  \ |  | |  |  |  |   |  |'  '-'  '|  | `   |.-'    |'  '--'\'  '-'  '.-'    | |  |  '  '-'  '|  '--'  /  |  |      |  |   |  |\  \ |  | |  ||  | `   |.-'    |  |`   |  `---.|  |\  \
 `-----' `--'     `------'`--' '--'`--' `--'  `--'   `--' `-----' `--'  `--'`-----'  `-----' `-----' `-----'  `--'   `-----' `-------'   `--'      `--'   `--' '--'`--' `--'`--'  `--'`-----'`--'    `------'`--' '--'

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
