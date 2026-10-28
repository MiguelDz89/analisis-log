# nbo-png-maestroinstrumentos-back

Código Java de producción y configuraciones, sin tests. Cada sección contiene el archivo original completo y su ruta. Captura: 28/10/2026.

## Índice

1. `.mvn/wrapper/maven-wrapper.properties`
2. `mvnw`
3. `mvnw.cmd`
4. `pom.xml`
5. `sonar-project.properties`
6. `src/main/java/com/nubo/master/instruments/api/MasterInstrumentsApiApplication.java`
7. `src/main/java/com/nubo/master/instruments/api/application/annotations/ValidBigDecimal.java`
8. `src/main/java/com/nubo/master/instruments/api/application/config/SwaggerConfig.java`
9. `src/main/java/com/nubo/master/instruments/api/application/config/ValidBigDecimalConfig.java`
10. `src/main/java/com/nubo/master/instruments/api/application/config/WebConfig.java`
11. `src/main/java/com/nubo/master/instruments/api/application/context/GlobalContext.java`
12. `src/main/java/com/nubo/master/instruments/api/application/database/NamingStrategyConfig.java`
13. `src/main/java/com/nubo/master/instruments/api/application/database/UpperNamingConfig.java`
14. `src/main/java/com/nubo/master/instruments/api/application/filters/GlobalFilter.java`
15. `src/main/java/com/nubo/master/instruments/api/application/interceptors/GlobalInterceptor.java`
16. `src/main/java/com/nubo/master/instruments/api/application/properties/PropertiesConfig.java`
17. `src/main/java/com/nubo/master/instruments/api/application/properties/PropertiesContext.java`
18. `src/main/java/com/nubo/master/instruments/api/application/util/ApplicationUtils.java`
19. `src/main/java/com/nubo/master/instruments/api/exception/ServiceException.java`
20. `src/main/java/com/nubo/master/instruments/api/exception/error/ErrorCode.java`
21. `src/main/java/com/nubo/master/instruments/api/exception/error/ErrorResponse.java`
22. `src/main/java/com/nubo/master/instruments/api/exception/error/ErrorValidation.java`
23. `src/main/java/com/nubo/master/instruments/api/exception/handler/GlobalExceptionHandler.java`
24. `src/main/java/com/nubo/master/instruments/api/helpers/EquityInstrumentSpecificationBuilder.java`
25. `src/main/java/com/nubo/master/instruments/api/helpers/EquityInstrumentSpecificationFactory.java`
26. `src/main/java/com/nubo/master/instruments/api/helpers/MapperEquityInstrumentDynamicSearch.java`
27. `src/main/java/com/nubo/master/instruments/api/helpers/MapperEquityInstrumentLoan.java`
28. `src/main/java/com/nubo/master/instruments/api/helpers/MapperPageUtil.java`
29. `src/main/java/com/nubo/master/instruments/api/helpers/MapperUtil.java`
30. `src/main/java/com/nubo/master/instruments/api/models/dto/request/CorporateActionsParamsInDto.java`
31. `src/main/java/com/nubo/master/instruments/api/models/dto/request/EquityInstrumentFilterRequestDto.java`
32. `src/main/java/com/nubo/master/instruments/api/models/dto/request/EquityInstrumentLoanMnemonicInDto.java`
33. `src/main/java/com/nubo/master/instruments/api/models/dto/request/EquityInstrumentLoanPrefixInDto.java`
34. `src/main/java/com/nubo/master/instruments/api/models/dto/request/EquitySecurityInDto.java`
35. `src/main/java/com/nubo/master/instruments/api/models/dto/request/EquitySecurityUpdateInDto.java`
36. `src/main/java/com/nubo/master/instruments/api/models/dto/request/ExchangeRateInDto.java`
37. `src/main/java/com/nubo/master/instruments/api/models/dto/request/ExchangeRateUpdateInDto.java`
38. `src/main/java/com/nubo/master/instruments/api/models/dto/request/FixedIncomeSecurityInDto.java`
39. `src/main/java/com/nubo/master/instruments/api/models/dto/request/FixedIncomeSecurityUpdateInDto.java`
40. `src/main/java/com/nubo/master/instruments/api/models/dto/request/InvestorAccountFilterRequestDto.java`
41. `src/main/java/com/nubo/master/instruments/api/models/dto/request/InvestorAccountInDto.java`
42. `src/main/java/com/nubo/master/instruments/api/models/dto/request/InvestorAccountUpdateInDto.java`
43. `src/main/java/com/nubo/master/instruments/api/models/dto/request/InvestorFilterRequestDto.java`
44. `src/main/java/com/nubo/master/instruments/api/models/dto/request/InvestorInDto.java`
45. `src/main/java/com/nubo/master/instruments/api/models/dto/request/InvestorUpdateInDto.java`
46. `src/main/java/com/nubo/master/instruments/api/models/dto/request/IssuerInDto.java`
47. `src/main/java/com/nubo/master/instruments/api/models/dto/request/IssuerUpdateInDto.java`
48. `src/main/java/com/nubo/master/instruments/api/models/dto/request/NoSuspendedSecurityTitleInDto.java`
49. `src/main/java/com/nubo/master/instruments/api/models/dto/request/ParamsFixedIncomeSecurityInDto.java`
50. `src/main/java/com/nubo/master/instruments/api/models/dto/request/ParamsPageInDto.java`
51. `src/main/java/com/nubo/master/instruments/api/models/dto/request/SuspendedSecurityTitleInDto.java`
52. `src/main/java/com/nubo/master/instruments/api/models/dto/response/CfiOutDto.java`
53. `src/main/java/com/nubo/master/instruments/api/models/dto/response/CityOutDto.java`
54. `src/main/java/com/nubo/master/instruments/api/models/dto/response/ClassOutDto.java`
55. `src/main/java/com/nubo/master/instruments/api/models/dto/response/CorporateActionsOutDto.java`
56. `src/main/java/com/nubo/master/instruments/api/models/dto/response/CountryOutDto.java`
57. `src/main/java/com/nubo/master/instruments/api/models/dto/response/CurrencyOutDto.java`
58. `src/main/java/com/nubo/master/instruments/api/models/dto/response/DepartmentOutDto.java`
59. `src/main/java/com/nubo/master/instruments/api/models/dto/response/DepositoryOutDto.java`
60. `src/main/java/com/nubo/master/instruments/api/models/dto/response/EquityInstrumentLoanDepositoryOutDto.java`
61. `src/main/java/com/nubo/master/instruments/api/models/dto/response/EquityInstrumentLoanOutDto.java`
62. `src/main/java/com/nubo/master/instruments/api/models/dto/response/EquityInstrumentOutDto.java`
63. `src/main/java/com/nubo/master/instruments/api/models/dto/response/EquityInstrumentSimpleOutDto.java`
64. `src/main/java/com/nubo/master/instruments/api/models/dto/response/EquitySecurityOutDto.java`
65. `src/main/java/com/nubo/master/instruments/api/models/dto/response/ExchangeRateOutDto.java`
66. `src/main/java/com/nubo/master/instruments/api/models/dto/response/FixedIncomeSecurityOutDto.java`
67. `src/main/java/com/nubo/master/instruments/api/models/dto/response/GicsOutDto.java`
68. `src/main/java/com/nubo/master/instruments/api/models/dto/response/IdentificationTypeOutDto.java`
69. `src/main/java/com/nubo/master/instruments/api/models/dto/response/InvestorAccountOutDto.java`
70. `src/main/java/com/nubo/master/instruments/api/models/dto/response/InvestorOutDto.java`
71. `src/main/java/com/nubo/master/instruments/api/models/dto/response/InvestorSimpleOutDto.java`
72. `src/main/java/com/nubo/master/instruments/api/models/dto/response/IsinNumberOutDto.java`
73. `src/main/java/com/nubo/master/instruments/api/models/dto/response/IssuerOutDto.java`
74. `src/main/java/com/nubo/master/instruments/api/models/dto/response/JointAccountOutDto.java`
75. `src/main/java/com/nubo/master/instruments/api/models/dto/response/MarketOutDto.java`
76. `src/main/java/com/nubo/master/instruments/api/models/dto/response/PageResponseOutDto.java`
77. `src/main/java/com/nubo/master/instruments/api/models/dto/response/ParticipantOutDto.java`
78. `src/main/java/com/nubo/master/instruments/api/models/dto/response/RiskModelLoanOutDto.java`
79. `src/main/java/com/nubo/master/instruments/api/models/dto/response/SecurityTitleOutDto.java`
80. `src/main/java/com/nubo/master/instruments/api/models/dto/response/SecurityTitleSuspendedHistoryOutDto.java`
81. `src/main/java/com/nubo/master/instruments/api/models/dto/response/SegmentOutDto.java`
82. `src/main/java/com/nubo/master/instruments/api/models/dto/response/StatusOutDto.java`
83. `src/main/java/com/nubo/master/instruments/api/models/dto/response/TaxStatusOutDto.java`
84. `src/main/java/com/nubo/master/instruments/api/models/dto/response/TypeOutDto.java`
85. `src/main/java/com/nubo/master/instruments/api/models/dto/response/ValidateGuaranteeCalculateOutDto.java`
86. `src/main/java/com/nubo/master/instruments/api/models/entity/CfiEntity.java`
87. `src/main/java/com/nubo/master/instruments/api/models/entity/ClassEntity.java`
88. `src/main/java/com/nubo/master/instruments/api/models/entity/ConditionEntity.java`
89. `src/main/java/com/nubo/master/instruments/api/models/entity/CorporateActionsEntity.java`
90. `src/main/java/com/nubo/master/instruments/api/models/entity/CountryEntity.java`
91. `src/main/java/com/nubo/master/instruments/api/models/entity/CurrencyEntity.java`
92. `src/main/java/com/nubo/master/instruments/api/models/entity/DataRiesgoDiaEntity.java`
93. `src/main/java/com/nubo/master/instruments/api/models/entity/DataRiesgoDiaKey.java`
94. `src/main/java/com/nubo/master/instruments/api/models/entity/DepositoryEntity.java`
95. `src/main/java/com/nubo/master/instruments/api/models/entity/EquitySecurityEntity.java`
96. `src/main/java/com/nubo/master/instruments/api/models/entity/FixedIncomeSecurityEntity.java`
97. `src/main/java/com/nubo/master/instruments/api/models/entity/GicsEntity.java`
98. `src/main/java/com/nubo/master/instruments/api/models/entity/ISINNumberEntity.java`
99. `src/main/java/com/nubo/master/instruments/api/models/entity/IssuerEntity.java`
100. `src/main/java/com/nubo/master/instruments/api/models/entity/MarketEntity.java`
101. `src/main/java/com/nubo/master/instruments/api/models/entity/SecurityTitleEntity.java`
102. `src/main/java/com/nubo/master/instruments/api/models/entity/SecurityTitleSuspendedHistoryEntity.java`
103. `src/main/java/com/nubo/master/instruments/api/models/entity/SegmentEntity.java`
104. `src/main/java/com/nubo/master/instruments/api/models/entity/SideEntity.java`
105. `src/main/java/com/nubo/master/instruments/api/models/entity/StatusEntity.java`
106. `src/main/java/com/nubo/master/instruments/api/models/entity/TypeEntity.java`
107. `src/main/java/com/nubo/master/instruments/api/models/enums/CountryEnum.java`
108. `src/main/java/com/nubo/master/instruments/api/models/enums/PrincipalStatusEnum.java`
109. `src/main/java/com/nubo/master/instruments/api/models/enums/PropertiesEnum.java`
110. `src/main/java/com/nubo/master/instruments/api/models/enums/RepoSimultaneousBusinessEnum.java`
111. `src/main/java/com/nubo/master/instruments/api/models/enums/SearchOperationEnum.java`
112. `src/main/java/com/nubo/master/instruments/api/models/enums/TypeCategoryEnum.java`
113. `src/main/java/com/nubo/master/instruments/api/models/enums/TypeSecurityTitletActionEnum.java`
114. `src/main/java/com/nubo/master/instruments/api/models/enums/VersionApiEnum.java`
115. `src/main/java/com/nubo/master/instruments/api/repository/CfiRepository.java`
116. `src/main/java/com/nubo/master/instruments/api/repository/ClassRepository.java`
117. `src/main/java/com/nubo/master/instruments/api/repository/ConditionRepository.java`
118. `src/main/java/com/nubo/master/instruments/api/repository/CorporateActionsRepository.java`
119. `src/main/java/com/nubo/master/instruments/api/repository/CountryRepository.java`
120. `src/main/java/com/nubo/master/instruments/api/repository/CurrencyRepository.java`
121. `src/main/java/com/nubo/master/instruments/api/repository/DataRiesgoDiaRepository.java`
122. `src/main/java/com/nubo/master/instruments/api/repository/DepositoryRepository.java`
123. `src/main/java/com/nubo/master/instruments/api/repository/EquityInstrumentLoanRepository.java`
124. `src/main/java/com/nubo/master/instruments/api/repository/EquityInstrumentRepository.java`
125. `src/main/java/com/nubo/master/instruments/api/repository/EquitySecurityRepository.java`
126. `src/main/java/com/nubo/master/instruments/api/repository/FixedIncomeSecurityRepository.java`
127. `src/main/java/com/nubo/master/instruments/api/repository/GicsRepository.java`
128. `src/main/java/com/nubo/master/instruments/api/repository/ISINNumberRepository.java`
129. `src/main/java/com/nubo/master/instruments/api/repository/IssuerRepository.java`
130. `src/main/java/com/nubo/master/instruments/api/repository/MarketRepository.java`
131. `src/main/java/com/nubo/master/instruments/api/repository/SecurityTitleRepository.java`
132. `src/main/java/com/nubo/master/instruments/api/repository/SecurityTitleSuspendedHistoryRepository.java`
133. `src/main/java/com/nubo/master/instruments/api/repository/SegmentRepository.java`
134. `src/main/java/com/nubo/master/instruments/api/repository/StatusRepository.java`
135. `src/main/java/com/nubo/master/instruments/api/repository/TypeRepository.java`
136. `src/main/java/com/nubo/master/instruments/api/service/CfiService.java`
137. `src/main/java/com/nubo/master/instruments/api/service/ClassService.java`
138. `src/main/java/com/nubo/master/instruments/api/service/CorporateActionsService.java`
139. `src/main/java/com/nubo/master/instruments/api/service/CountryService.java`
140. `src/main/java/com/nubo/master/instruments/api/service/DepositoryService.java`
141. `src/main/java/com/nubo/master/instruments/api/service/EquityInstrumentLoanService.java`
142. `src/main/java/com/nubo/master/instruments/api/service/EquityInstrumentService.java`
143. `src/main/java/com/nubo/master/instruments/api/service/EquitySecurityService.java`
144. `src/main/java/com/nubo/master/instruments/api/service/FixedIncomeSecurityService.java`
145. `src/main/java/com/nubo/master/instruments/api/service/IssuerService.java`
146. `src/main/java/com/nubo/master/instruments/api/service/MarketService.java`
147. `src/main/java/com/nubo/master/instruments/api/service/RiskModelService.java`
148. `src/main/java/com/nubo/master/instruments/api/service/SecurityTitleSuspendedHistoryService.java`
149. `src/main/java/com/nubo/master/instruments/api/service/SecurityTitleSuspendedService.java`
150. `src/main/java/com/nubo/master/instruments/api/service/StatusService.java`
151. `src/main/java/com/nubo/master/instruments/api/service/TypeService.java`
152. `src/main/java/com/nubo/master/instruments/api/service/impl/CfiServiceImpl.java`
153. `src/main/java/com/nubo/master/instruments/api/service/impl/ClassServiceImpl.java`
154. `src/main/java/com/nubo/master/instruments/api/service/impl/CorporateActionsServiceImpl.java`
155. `src/main/java/com/nubo/master/instruments/api/service/impl/CountryServiceImpl.java`
156. `src/main/java/com/nubo/master/instruments/api/service/impl/DepositoryServiceImpl.java`
157. `src/main/java/com/nubo/master/instruments/api/service/impl/EquityInstrumentLoanServiceImpl.java`
158. `src/main/java/com/nubo/master/instruments/api/service/impl/EquityInstrumentServiceImpl.java`
159. `src/main/java/com/nubo/master/instruments/api/service/impl/EquitySecurityServiceImpl.java`
160. `src/main/java/com/nubo/master/instruments/api/service/impl/FixedIncomeSecurityServiceImpl.java`
161. `src/main/java/com/nubo/master/instruments/api/service/impl/IssuerServiceImpl.java`
162. `src/main/java/com/nubo/master/instruments/api/service/impl/MarketServiceImpl.java`
163. `src/main/java/com/nubo/master/instruments/api/service/impl/RiskModelServiceImpl.java`
164. `src/main/java/com/nubo/master/instruments/api/service/impl/SecurityTitleSuspendedHistoryServiceImpl.java`
165. `src/main/java/com/nubo/master/instruments/api/service/impl/SecurityTitleSuspendedServiceImpl.java`
166. `src/main/java/com/nubo/master/instruments/api/service/impl/StatusServiceImpl.java`
167. `src/main/java/com/nubo/master/instruments/api/service/impl/TypeServiceImpl.java`
168. `src/main/java/com/nubo/master/instruments/api/web/controller/CfiRestController.java`
169. `src/main/java/com/nubo/master/instruments/api/web/controller/ClassRestController.java`
170. `src/main/java/com/nubo/master/instruments/api/web/controller/CorporateActionsRestController.java`
171. `src/main/java/com/nubo/master/instruments/api/web/controller/CountryRestController.java`
172. `src/main/java/com/nubo/master/instruments/api/web/controller/DepositoryRestController.java`
173. `src/main/java/com/nubo/master/instruments/api/web/controller/EquityInstrumentLoanRestController.java`
174. `src/main/java/com/nubo/master/instruments/api/web/controller/EquityInstrumentRestController.java`
175. `src/main/java/com/nubo/master/instruments/api/web/controller/EquitySecurityRestController.java`
176. `src/main/java/com/nubo/master/instruments/api/web/controller/FixedIncomeSecurityRestController.java`
177. `src/main/java/com/nubo/master/instruments/api/web/controller/IssuerRestController.java`
178. `src/main/java/com/nubo/master/instruments/api/web/controller/MarketRestController.java`
179. `src/main/java/com/nubo/master/instruments/api/web/controller/SecurityTitleSuspendedHistoryRestController.java`
180. `src/main/java/com/nubo/master/instruments/api/web/controller/SecurityTitleSuspendedRestController.java`
181. `src/main/java/com/nubo/master/instruments/api/web/controller/StatusRestController.java`
182. `src/main/java/com/nubo/master/instruments/api/web/controller/TypeRestController.java`
183. `src/main/resources/application-dev.yml`
184. `src/main/resources/application-local.yml`
185. `src/main/resources/application-prod.yml`
186. `src/main/resources/application-qa.yml`
187. `src/main/resources/application-uat.yml`
188. `src/main/resources/application.yml`
189. `src/main/resources/banner.txt`
190. `src/main/resources/log/JsonEventLayout_error.json`
191. `src/main/resources/log/JsonEventLayout_info.json`
192. `src/main/resources/log/JsonEventLayout_trace.json`
193. `src/main/resources/log/log4j2-prod.properties`
194. `src/main/resources/log/log4j2.properties`

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
#   https://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
# KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.
wrapperVersion=3.3.2
distributionType=only-script
distributionUrl=https://repo.maven.apache.org/maven2/org/apache/maven/apache-maven/3.9.7/apache-maven-3.9.7-bin.zip

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
#    https://www.apache.org/licenses/LICENSE-2.0
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
@REM    https://www.apache.org/licenses/LICENSE-2.0
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
        <version>3.5.15</version>
        <relativePath/>
	</parent>

	<groupId>com.nubo.master.instruments.api</groupId>
	<artifactId>master-instruments-api</artifactId>
	<version>0.3.0</version>
	<name>${project.artifactId}</name>
	<description>Maestro Instrumentos</description>

	<properties>
        <java.version>17</java.version>
        <spring.port>8080</spring.port>
        <test.skip>false</test.skip>
        <datasource.url.application.name>ApplicationName=${project.artifactId}</datasource.url.application.name>
        <hikari.pool.name>${project.artifactId}-pool</hikari.pool.name>
        <!-- vulnerability adjustment -->
        <log4j2.version>2.25.4</log4j2.version>
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
        <!-- Swagger -->
        <dependency>
            <groupId>org.springdoc</groupId>
            <artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>
            <version>2.8.17</version>
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
        </dependency>
        <!-- vulnerability adjustment  -->
        <dependency>
            <groupId>org.apache.commons</groupId>
            <artifactId>commons-lang3</artifactId>
            <version>3.18.0</version>
        </dependency>
        <dependency>
            <groupId>org.xmlunit</groupId>
            <artifactId>xmlunit-core</artifactId>
            <scope>test</scope>
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
                                <exclude>**/MasterInstrumentsApiApplication.class</exclude>
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

## sonar-project.properties

```properties
sonar.projectKey=bvcco_nbo-png-maestroinstrumentos-back
sonar.organization=bvc

# This is the name and version displayed in the SonarCloud UI.
#sonar.projectName=bvcco_mme-neg-tc-java
#sonar.projectVersion=1.0

# Path is relative to the sonar-project.properties file. Replace "\" by "/" on Windows.
#sonar.sources=.

# Encoding of the source code. Default is default system encoding 
sonar.sourceEncoding=iso-8859-1

#Java
sonar.java.binaries=.
sonar.java.libraries=.

# Encoding of the source code. Default is default system encoding
#sonar.sourceEncoding=UTF-8   
 
```

## src/main/java/com/nubo/master/instruments/api/MasterInstrumentsApiApplication.java

```java
package com.nubo.master.instruments.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class MasterInstrumentsApiApplication {

    public static void main(String[] args) {
        SpringApplication.run(MasterInstrumentsApiApplication.class, args);
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOrigins("*")
                        .allowedMethods("*")
                        .allowedHeaders("*")
                        .allowCredentials(false);
            }
        };
    }

}

```

## src/main/java/com/nubo/master/instruments/api/application/annotations/ValidBigDecimal.java

```java
package com.nubo.master.instruments.api.application.annotations;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import com.nubo.master.instruments.api.application.config.ValidBigDecimalConfig;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;

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

## src/main/java/com/nubo/master/instruments/api/application/config/SwaggerConfig.java

```java
package com.nubo.master.instruments.api.application.config;

import java.util.List;

import org.springdoc.core.customizers.GlobalOpenApiCustomizer;
import org.springdoc.core.models.GroupedOpenApi;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

import com.nubo.master.instruments.api.exception.error.ErrorResponse;
import com.nubo.master.instruments.api.exception.error.ErrorValidation;
import com.nubo.master.instruments.api.models.enums.PropertiesEnum;

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
                return openApi -> openApi.getPaths().values().stream()
                                .flatMap(pathItem -> pathItem.readOperations().stream())
                                .forEach(operation -> {
                                        operation.addParametersItem(
                                                        new HeaderParameter().name(PropertiesEnum.CLIENT_IP.getValue())
                                                                        .in(ParameterIn.HEADER.toString())
                                                                        .required(true).example("127.0.0.1"))
                                                        .addParametersItem(new HeaderParameter()
                                                                        .name(PropertiesEnum.CLIENT_USER.getValue())
                                                                        .in(ParameterIn.HEADER.toString())
                                                                        .required(true).example("admin"))
                                                        .addParametersItem(new HeaderParameter()
                                                                        .name(PropertiesEnum.CLIENT_DATETIME.getValue())
                                                                        .in(ParameterIn.HEADER.toString())
                                                                        .required(true).example("2024-09-11T15:30:00"))
                                                        .addParametersItem(new Parameter().name("version")
                                                                        .in(ParameterIn.PATH.toString())
                                                                        .required(true).example("v1"))
                                                        .getResponses()
                                                        .addApiResponse("500",
                                                                        new ApiResponse().description("Error Response")
                                                                                        .content(content));
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

## src/main/java/com/nubo/master/instruments/api/application/config/ValidBigDecimalConfig.java

```java
package com.nubo.master.instruments.api.application.config;

import java.math.BigDecimal;

import com.nubo.master.instruments.api.application.annotations.ValidBigDecimal;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

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

## src/main/java/com/nubo/master/instruments/api/application/config/WebConfig.java

```java
package com.nubo.master.instruments.api.application.config;

import java.util.Locale;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.i18n.SessionLocaleResolver;

import com.nubo.master.instruments.api.application.interceptors.GlobalInterceptor;

import lombok.RequiredArgsConstructor;

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
    @Profile({
            "local", "dev", "qa"
    })
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

}

```

## src/main/java/com/nubo/master/instruments/api/application/context/GlobalContext.java

```java
package com.nubo.master.instruments.api.application.context;

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

## src/main/java/com/nubo/master/instruments/api/application/database/NamingStrategyConfig.java

```java
package com.nubo.master.instruments.api.application.database;

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

## src/main/java/com/nubo/master/instruments/api/application/database/UpperNamingConfig.java

```java
package com.nubo.master.instruments.api.application.database;

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

## src/main/java/com/nubo/master/instruments/api/application/filters/GlobalFilter.java

```java
package com.nubo.master.instruments.api.application.filters;

import java.io.IOException;
import java.net.InetAddress;
import java.time.LocalDateTime;

import org.springframework.core.annotation.Order;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.util.ObjectUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import com.nubo.master.instruments.api.application.context.GlobalContext;
import com.nubo.master.instruments.api.application.util.ApplicationUtils;
import com.nubo.master.instruments.api.exception.ServiceException;
import com.nubo.master.instruments.api.exception.error.ErrorCode;
import com.nubo.master.instruments.api.exception.error.ErrorResponse;
import com.nubo.master.instruments.api.models.enums.PropertiesEnum;
import com.nubo.master.instruments.api.models.enums.VersionApiEnum;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;

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

            GlobalContext.setProperty(PropertiesEnum.VERSION_API.getValue(),
                    VersionApiEnum.fromValue(versionPath).getValue());
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
                .errorMessageDetail(ObjectUtils.isEmpty(exception.getCause()) ? exception.getMessage()
                        : exception.getCause().getMessage())
                .timestamp(String.valueOf(LocalDateTime.now()))
                .build();
        response.getWriter().write(ApplicationUtils.convertObjectToJson(errorResponse));
        response.setStatus(exception.getHttpStatus().value());

        log.error("Error -> {}", errorResponse);
    }

}

```

## src/main/java/com/nubo/master/instruments/api/application/interceptors/GlobalInterceptor.java

```java
package com.nubo.master.instruments.api.application.interceptors;

import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import com.nubo.master.instruments.api.application.context.GlobalContext;

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

## src/main/java/com/nubo/master/instruments/api/application/properties/PropertiesConfig.java

```java
package com.nubo.master.instruments.api.application.properties;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import lombok.Getter;

@Component
@Getter
public class PropertiesConfig {

    @Value("${spring.application.name}")
    private String apiName;
}

```

## src/main/java/com/nubo/master/instruments/api/application/properties/PropertiesContext.java

```java
package com.nubo.master.instruments.api.application.properties;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import org.springframework.util.ObjectUtils;

import com.nubo.master.instruments.api.application.context.GlobalContext;
import com.nubo.master.instruments.api.application.util.ApplicationUtils;
import com.nubo.master.instruments.api.models.enums.PropertiesEnum;

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

}

```

## src/main/java/com/nubo/master/instruments/api/application/util/ApplicationUtils.java

```java
package com.nubo.master.instruments.api.application.util;

import java.lang.reflect.Type;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import com.google.gson.Gson;

public class ApplicationUtils {

    static final String FORMAT_DATETIME = "yyyy-MM-dd'T'HH:mm:ss";

    static final String FORMAT_DATE = "yyyy-MM-dd";

    private ApplicationUtils() {
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

    public static LocalDate convertStringToLocalDate(String dateString) {
        return LocalDate.parse(dateString, DateTimeFormatter.ofPattern(FORMAT_DATE));
    }

    public static String convertObjectToJson(Object object) {
        return new Gson().toJson(object);
    }

    public static Object convertJsonToObject(String json, Object object) {
        return new Gson().fromJson(json, (Type) object);
    }

}

```

## src/main/java/com/nubo/master/instruments/api/exception/ServiceException.java

```java
package com.nubo.master.instruments.api.exception;

import org.springframework.http.HttpStatus;

import com.nubo.master.instruments.api.exception.error.ErrorCode;

import lombok.Getter;

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

## src/main/java/com/nubo/master/instruments/api/exception/error/ErrorCode.java

```java
package com.nubo.master.instruments.api.exception.error;

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
    PARTICIPANT_NOT_FOUND("Participant not found"),
    COUNTRY_NOT_FOUND("Country not found"),
    INVESTOR_NOT_FOUND("Investor not found"),
    INVESTOR_ACCOUNT_NOT_FOUND("Investor Account not found"),
    CURRENCY_NOT_FOUND("Currency not found"),
    EXCHANGE_RATE_EXISTS("Exchange Rate already exists"),
    EXCHANGE_RATE_NOT_FOUND("Exchange Rate not found"),
    EXCHANGE_RATE_CURRENCY_EQUALS("Base currency cannot be equal to conversion currency"),
    SECURITY_TITLE_NOT_FOUND("Security Title not found"),
    EQUITY_SECURITY_EXISTS("Equity Security already exists"),
    EQUITY_SECURITY_NOT_FOUND("Equity Security not found"),
    FIXED_INCOME_SECURITY_NOT_FOUND("Fixed Income Security not found"),
    ISSUER_NOT_FOUND("Issuer not found"),
    DEPARTMENT_NOT_FOUND("Department not found"),
    TYPE_NOT_FOUND("Type not found"),
    STATUS_NOT_FOUND("Status not found"),
    CITY_NOT_FOUND("City not found"),
    CORPORATE_ACTION_NOT_FOUND("Corporate Action not found"),
    GICS_NOT_FOUND("Gics not found"),
    TAX_STATUS_NOT_FOUND("Tax Status not found"),
    DEPOSITORY_NOT_FOUND("Depository not found"),
    IDENTIFICATION_TYPE_NOT_FOUND("Identification Type not found"),
    EQUITY_INSTRUMENT_NOT_FOUND("Equity instrument not found");

    private final String message;

    ErrorCode(String message) {
        this.message = message;
    }

    public String getName() {
        return this.name();
    }

}

```

## src/main/java/com/nubo/master/instruments/api/exception/error/ErrorResponse.java

```java
package com.nubo.master.instruments.api.exception.error;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.Builder;
import lombok.Data;

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

## src/main/java/com/nubo/master/instruments/api/exception/error/ErrorValidation.java

```java
package com.nubo.master.instruments.api.exception.error;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ErrorValidation {

    private String id;
    private String description;

}

```

## src/main/java/com/nubo/master/instruments/api/exception/handler/GlobalExceptionHandler.java

```java
package com.nubo.master.instruments.api.exception.handler;

import java.util.List;

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

import com.nubo.master.instruments.api.application.properties.PropertiesContext;
import com.nubo.master.instruments.api.exception.ServiceException;
import com.nubo.master.instruments.api.exception.error.ErrorCode;
import com.nubo.master.instruments.api.exception.error.ErrorResponse;
import com.nubo.master.instruments.api.exception.error.ErrorValidation;

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
        public ResponseEntity<ErrorResponse> handlerHttpRequestMethodNotSupportedException(
                        HttpRequestMethodNotSupportedException exception,
                        HttpServletRequest request) {
                return buildErrorResponse(HttpStatus.METHOD_NOT_ALLOWED, exception, request,
                                ErrorCode.METHOD_NOT_ALLOWED);
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

                log.error("Error -> {}", errorResponse, exception);

                return ResponseEntity.status(status).body(errorResponse);
        }

}

```

## src/main/java/com/nubo/master/instruments/api/helpers/EquityInstrumentSpecificationBuilder.java

```java
package com.nubo.master.instruments.api.helpers;

import org.springframework.data.jpa.domain.Specification;
import org.springframework.util.StringUtils;

import com.nubo.master.instruments.api.models.entity.SecurityTitleEntity;
import com.nubo.master.instruments.api.models.enums.SearchOperationEnum;

import jakarta.persistence.criteria.Join;
import jakarta.persistence.criteria.JoinType;

public class EquityInstrumentSpecificationBuilder
{

    private Specification<SecurityTitleEntity> spec;

    private EquityInstrumentSpecificationBuilder()
    {
        this.spec = Specification.anyOf();
    }

    public static EquityInstrumentSpecificationBuilder builder()
    {
        return new EquityInstrumentSpecificationBuilder();
    }

    public EquityInstrumentSpecificationBuilder withMnemonic(String mnemonic)
    {
        if (StringUtils.hasText(mnemonic))
        {
            spec = spec.and(
                    (root, query, cb) -> cb.like(cb.lower(root.get("mnemonic")), "%" + mnemonic.toLowerCase() + "%"));
        }
        return this;
    }

    public EquityInstrumentSpecificationBuilder withIsinCode(String isinCode)
    {
        if (StringUtils.hasText(isinCode))
        {
            spec = spec.and(
                    (root, query, cb) -> cb.like(cb.lower(root.get("isin")), "%" + isinCode.toLowerCase() + "%"));
        }
        return this;
    }

    public EquityInstrumentSpecificationBuilder withIssuerCode(String issuerCode)
    {
        if (StringUtils.hasText(issuerCode))
        {
            spec = spec.and((root, query, cb) -> cb.like(cb.lower(root.get("equityCode")),
                    "%" + issuerCode.toLowerCase() + "%"));
        }
        return this;
    }

    public EquityInstrumentSpecificationBuilder withDepositoryId(Long depositoryId)
    {
        if (depositoryId != null)
        {
            spec = spec.and((root, query, cb) ->
            {
                Join<Object, Object> depositoryJoin = root.join("depository", JoinType.LEFT);
                return cb.equal(depositoryJoin.get("id"), depositoryId);
            });
        }
        return this;
    }

    public EquityInstrumentSpecificationBuilder withStatusId(Long statusId)
    {
        if (statusId != null)
        {
            spec = spec.and((root, query, cb) ->
            {
                Join<Object, Object> statusJoin = root.join("status", JoinType.LEFT);
                return cb.equal(statusJoin.get("id"), statusId);
            });
        }
        return this;
    }

    public EquityInstrumentSpecificationBuilder withIssuerId(Long issuerId)
    {
        if (issuerId != null)
        {
            spec = spec.and((root, query, cb) -> cb.equal(root.get("issuerId"), issuerId));
        }
        return this;
    }

    public EquityInstrumentSpecificationBuilder withMarketId(Long marketId)
    {
        if (marketId != null)
        {
            spec = spec.and((root, query, cb) ->
            {
                Join<Object, Object> marketJoin = root.join("market", JoinType.LEFT);
                return cb.equal(marketJoin.get("id"), marketId);
            });
        }
        return this;
    }

    public EquityInstrumentSpecificationBuilder withCountryId(Long countryId)
    {
        if (countryId != null)
        {
            spec = spec.and((root, query, cb) -> cb.equal(root.get("countryId"), countryId));
        }
        return this;
    }

    public EquityInstrumentSpecificationBuilder withClassId(Long classId)
    {
        if (classId != null)
        {
            spec = spec.and((root, query, cb) -> cb.equal(root.get("classId"), classId));
        }
        return this;
    }

    public EquityInstrumentSpecificationBuilder withSegmentId(Long segmentId)
    {
        if (segmentId != null)
        {
            spec = spec.and((root, query, cb) -> cb.equal(root.get("segmentId"), segmentId));
        }
        return this;
    }

    public EquityInstrumentSpecificationBuilder withSecurityId(Long securityId)
    {
        if (securityId != null)
        {
            spec = spec.and((root, query, cb) -> cb.equal(root.get("id"), securityId));
        }
        return this;
    }

    public EquityInstrumentSpecificationBuilder withDynamicFilter(
            String fieldName, String fieldValue, SearchOperationEnum operation)
    {
        if (StringUtils.hasText(fieldName) && StringUtils.hasText(fieldValue) && operation != null)
        {
            spec = spec.and(EquityInstrumentSpecificationFactory.createDynamicFilter(fieldName, fieldValue, operation));
        }
        return this;
    }

    public EquityInstrumentSpecificationBuilder withOnlyEquityInstruments()
    {
        spec = spec.and((root, query, cb) ->
        {
            if (query != null)
            {
                var subquery = query.subquery(Long.class);
                var equityRoot = subquery
                        .from(com.nubo.master.instruments.api.models.entity.EquitySecurityEntity.class);
                subquery.select(equityRoot.get("securityId"))
                        .where(cb.equal(equityRoot.get("securityId"), root.get("id")));

                return cb.exists(subquery);
            }
            return cb.conjunction();
        });
        return this;
    }

    public EquityInstrumentSpecificationBuilder withActiveStatus()
    {
        spec = spec.and((root, query, cb) ->
        {
            Join<Object, Object> statusJoin = root.join("status", JoinType.LEFT);
            return cb.equal(cb.upper(statusJoin.get("description")), "ACTIVO");
        });
        return this;
    }

    public Specification<SecurityTitleEntity> build()
    {
        return withOnlyEquityInstruments().spec;
    }
}

```

## src/main/java/com/nubo/master/instruments/api/helpers/EquityInstrumentSpecificationFactory.java

```java
package com.nubo.master.instruments.api.helpers;

import org.springframework.data.jpa.domain.Specification;

import com.nubo.master.instruments.api.models.dto.request.EquityInstrumentFilterRequestDto;
import com.nubo.master.instruments.api.models.entity.SecurityTitleEntity;
import com.nubo.master.instruments.api.models.enums.SearchOperationEnum;

import jakarta.persistence.criteria.Path;

public class EquityInstrumentSpecificationFactory {

    private EquityInstrumentSpecificationFactory() {
        throw new IllegalStateException("Utility class");
    }

    public static Specification<SecurityTitleEntity> createStandardFilter(EquityInstrumentFilterRequestDto filter) {
        return EquityInstrumentSpecificationBuilder.builder()
                .withMnemonic(filter.getMnemonic())
                .withIsinCode(filter.getIsinCode())
                .withIssuerCode(filter.getIssuerCode())
                .withDepositoryId(filter.getDepositoryId())
                .withStatusId(filter.getStatusId())
                .withIssuerId(filter.getIssuerId())
                .withMarketId(filter.getMarketId())
                .withCountryId(filter.getCountryId())
                .withClassId(filter.getClassId())
                .withSegmentId(filter.getSegmentId())
                .withSecurityId(filter.getSecurityId())
                .build();
    }

    public static Specification<SecurityTitleEntity> createDynamicFilter(
            String fieldName, String fieldValue, SearchOperationEnum operation) {

        return (root, query, cb) -> {
            try {
                Path<?> fieldPath = MapperEquityInstrumentDynamicSearch.getEquityInstrumentFieldPath(root, fieldName);
                if (fieldPath != null) {
                    return MapperEquityInstrumentDynamicSearch.buildEquityInstrumentFieldPredicate(cb, fieldPath,
                            fieldValue, operation);
                }
                return cb.conjunction();
            } catch (Exception e) {
                return cb.conjunction();
            }
        };
    }

    public static Specification<SecurityTitleEntity> createCombinedFilter(
            EquityInstrumentFilterRequestDto filter,
            String fieldName, String fieldValue, SearchOperationEnum operation) {

        return EquityInstrumentSpecificationBuilder.builder()
                .withMnemonic(filter.getMnemonic())
                .withIsinCode(filter.getIsinCode())
                .withIssuerCode(filter.getIssuerCode())
                .withDepositoryId(filter.getDepositoryId())
                .withStatusId(filter.getStatusId())
                .withIssuerId(filter.getIssuerId())
                .withMarketId(filter.getMarketId())
                .withCountryId(filter.getCountryId())
                .withClassId(filter.getClassId())
                .withSegmentId(filter.getSegmentId())
                .withSecurityId(filter.getSecurityId())
                .withDynamicFilter(fieldName, fieldValue, operation)
                .build();
    }

    public static Specification<SecurityTitleEntity> createDepositoryStatusFilter(Long depositoryId, Long statusId) {
        return EquityInstrumentSpecificationBuilder.builder()
                .withDepositoryId(depositoryId)
                .withStatusId(statusId)
                .build();
    }

    public static Specification<SecurityTitleEntity> createMnemonicFilter(String mnemonic) {
        return EquityInstrumentSpecificationBuilder.builder()
                .withMnemonic(mnemonic)
                .build();
    }

    public static Specification<SecurityTitleEntity> createIssuerFilter(String issuerCode) {
        return EquityInstrumentSpecificationBuilder.builder()
                .withIssuerCode(issuerCode)
                .build();
    }

    public static Specification<SecurityTitleEntity> createIsinFilter(String isinCode) {
        return EquityInstrumentSpecificationBuilder.builder()
                .withIsinCode(isinCode)
                .build();
    }
}

```

## src/main/java/com/nubo/master/instruments/api/helpers/MapperEquityInstrumentDynamicSearch.java

```java
package com.nubo.master.instruments.api.helpers;

import com.nubo.master.instruments.api.models.entity.SecurityTitleEntity;
import com.nubo.master.instruments.api.models.enums.SearchOperationEnum;

import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.Join;
import jakarta.persistence.criteria.JoinType;
import jakarta.persistence.criteria.Path;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;

public class MapperEquityInstrumentDynamicSearch {

    private MapperEquityInstrumentDynamicSearch() {
        throw new IllegalStateException("Utility class");
    }

    public static Path<?> getEquityInstrumentFieldPath(Root<SecurityTitleEntity> root, String fieldName) {
        if (fieldName == null || fieldName.trim().isEmpty()) {
            return null;
        }

        return switch (fieldName.toLowerCase()) {

            case "mnemonic" -> root.get("mnemonic");
            case "isin" -> root.get("isin");
            case "description" -> root.get("description");
            case "listingdate" -> root.get("listingDate");
            case "delistingdate" -> root.get("delistingDate");
            case "settlementperiod" -> root.get("settlementPeriod");
            case "nominalprice" -> root.get("nominalPrice");
            case "nominalpricedate" -> root.get("nominalPriceDate");
            case "regulatorspeciescode" -> root.get("regulatorSpeciesCode");

            case "issuercode" -> {
                Join<Object, Object> issuerJoin = root.join("issuer", JoinType.LEFT);
                yield issuerJoin.get("code");
            }
            case "issuername" -> {
                Join<Object, Object> issuerJoin = root.join("issuer", JoinType.LEFT);
                yield issuerJoin.get("name");
            }
            case "depositoryname" -> {
                Join<Object, Object> depositoryJoin = root.join("depository", JoinType.LEFT);
                yield depositoryJoin.get("name");
            }
            case "statusdescription" -> {
                Join<Object, Object> statusJoin = root.join("status", JoinType.LEFT);
                yield statusJoin.get("description");
            }
            case "countryname" -> {
                Join<Object, Object> countryJoin = root.join("country", JoinType.LEFT);
                yield countryJoin.get("name");
            }
            case "marketname" -> {
                Join<Object, Object> marketJoin = root.join("market", JoinType.LEFT);
                yield marketJoin.get("name");
            }
            case "currencycode" -> {
                Join<Object, Object> currencyJoin = root.join("currency", JoinType.LEFT);
                yield currencyJoin.get("code");
            }
            case "cficode" -> {
                Join<Object, Object> cfiJoin = root.join("cfi", JoinType.LEFT);
                yield cfiJoin.get("code");
            }

            case "classdescription" -> root.get("classId");
            case "segmentname" -> root.get("segmentId");

            default -> null;
        };
    }

    public static Predicate buildEquityInstrumentFieldPredicate(
            CriteriaBuilder cb, Path<?> fieldPath, String fieldValue, SearchOperationEnum operation) {

        if (fieldPath == null || fieldValue == null || operation == null) {
            return cb.conjunction();
        }

        return switch (operation) {
            case EQUALS -> cb.equal(cb.lower(fieldPath.as(String.class)), fieldValue.toLowerCase());

            case CONTAINS -> cb.like(cb.lower(fieldPath.as(String.class)),
                    "%" + fieldValue.toLowerCase() + "%");

            case STARTS_WITH -> cb.like(cb.lower(fieldPath.as(String.class)),
                    fieldValue.toLowerCase() + "%");

            case ENDS_WITH -> cb.like(cb.lower(fieldPath.as(String.class)),
                    "%" + fieldValue.toLowerCase());

            case GREATER_THAN -> {
                if (isNumericField(fieldPath)) {
                    yield cb.greaterThan(fieldPath.as(String.class), fieldValue);
                } else {
                    yield cb.greaterThan(cb.lower(fieldPath.as(String.class)), fieldValue.toLowerCase());
                }
            }

            case LESS_THAN -> {
                if (isNumericField(fieldPath)) {
                    yield cb.lessThan(fieldPath.as(String.class), fieldValue);
                } else {
                    yield cb.lessThan(cb.lower(fieldPath.as(String.class)), fieldValue.toLowerCase());
                }
            }

            case NOT_EQUALS -> cb.notEqual(cb.lower(fieldPath.as(String.class)), fieldValue.toLowerCase());

            default -> cb.conjunction();
        };
    }

    private static boolean isNumericField(Path<?> fieldPath) {
        Class<?> fieldType = fieldPath.getJavaType();
        return Number.class.isAssignableFrom(fieldType) ||
                fieldType.isPrimitive() && (fieldType == int.class ||
                        fieldType == long.class ||
                        fieldType == double.class ||
                        fieldType == float.class);
    }
}

```

## src/main/java/com/nubo/master/instruments/api/helpers/MapperEquityInstrumentLoan.java

```java
package com.nubo.master.instruments.api.helpers;

import com.nubo.master.instruments.api.models.dto.response.EquityInstrumentLoanDepositoryOutDto;
import com.nubo.master.instruments.api.models.dto.response.EquityInstrumentLoanOutDto;
import com.nubo.master.instruments.api.models.dto.response.RiskModelLoanOutDto;
import com.nubo.master.instruments.api.models.entity.DataRiesgoDiaEntity;
import com.nubo.master.instruments.api.models.entity.ISINNumberEntity;
import com.nubo.master.instruments.api.models.entity.SecurityTitleEntity;

public class MapperEquityInstrumentLoan {

    private MapperEquityInstrumentLoan() {}

    public static EquityInstrumentLoanOutDto toDto(SecurityTitleEntity entity) {

        String description = null;

        if (entity.getIsinNumbers() != null && !entity.getIsinNumbers().isEmpty()) {
            description = entity.getIsinNumbers()
                    .stream()
                    .filter(i -> i.getIsinNumber() != null
                            && i.getIsinNumber().equals(entity.getIsin()))
                    .map(ISINNumberEntity::getDescription)
                    .findFirst()
                    .orElse(
                            entity.getIsinNumbers().get(0).getDescription()
                    );
        }

        return EquityInstrumentLoanOutDto.builder()
                .mnemonic(entity.getMnemonic())
                .isin(entity.getIsin())
                .description(description)
                .status(entity.getStatus().getDescription())
                .currency(entity.getCurrency().getCode())
                .country(entity.getCountry().getCode())
                .marketCode(entity.getMarket().getCode())
                .depository(toDepositoryDto(entity))
                .build();
    }

    private static EquityInstrumentLoanDepositoryOutDto toDepositoryDto(SecurityTitleEntity entity) {

        if (entity.getDepository() == null) {
            return null;
        }

        return EquityInstrumentLoanDepositoryOutDto.builder()
                .depositoryId(entity.getDepository().getId())
                .code(entity.getDepository().getCode())
                .description(entity.getDepository().getDescription())
                .build();
    }

    public static RiskModelLoanOutDto toRiskModelDto(DataRiesgoDiaEntity entity) {
        if (entity == null) {
            return null;
        }
        return RiskModelLoanOutDto.builder()
                .referenceAveragePrice(entity.getAveragePrice())
                .averageAmount(entity.getAverageAmount())
                .concentrationRisk(entity.getConcentrationRisk())
                .build();
    }
}

```

## src/main/java/com/nubo/master/instruments/api/helpers/MapperPageUtil.java

```java
package com.nubo.master.instruments.api.helpers;

import com.nubo.master.instruments.api.models.dto.response.PageResponseOutDto;
import org.springframework.beans.BeanWrapper;
import org.springframework.beans.BeanWrapperImpl;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
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

    public static <T> List<T> getPageContent(Pageable pageable, List<T> list) {
        if (list == null || list.isEmpty()) {
            return Collections.emptyList();
        }

        if (pageable.getSort().isSorted()) {
            Comparator<T> comparator = pageable.getSort().stream()
                    .map(order -> {
                        Comparator<T> cmp = Comparator.comparing(item -> {
                            BeanWrapper wrapper = new BeanWrapperImpl(item);

                            if (!wrapper.isReadableProperty(order.getProperty())) {
                                return null;
                            }

                            Object value = wrapper.getPropertyValue(order.getProperty());
                            return (Comparable) value;
                        }, Comparator.nullsLast(Comparator.naturalOrder()));

                        return order.isAscending() ? cmp : cmp.reversed();
                    })
                    .reduce(Comparator::thenComparing)
                    .orElse(null);

            if (comparator != null) {
                list = new ArrayList<>(list);
                list.sort(comparator);
            }
        }

        int start = (int) pageable.getOffset();
        int end = Math.min(start + pageable.getPageSize(), list.size());

        return start >= list.size() ? Collections.emptyList() : list.subList(start, end);
    }

}
```

## src/main/java/com/nubo/master/instruments/api/helpers/MapperUtil.java

```java
package com.nubo.master.instruments.api.helpers;

import com.nubo.master.instruments.api.models.dto.response.CfiOutDto;
import com.nubo.master.instruments.api.models.dto.response.ClassOutDto;
import com.nubo.master.instruments.api.models.dto.response.CorporateActionsOutDto;
import com.nubo.master.instruments.api.models.dto.response.CountryOutDto;
import com.nubo.master.instruments.api.models.dto.response.CurrencyOutDto;
import com.nubo.master.instruments.api.models.dto.response.DepositoryOutDto;
import com.nubo.master.instruments.api.models.dto.response.EquityInstrumentOutDto;
import com.nubo.master.instruments.api.models.dto.response.EquityInstrumentSimpleOutDto;
import com.nubo.master.instruments.api.models.dto.response.EquitySecurityOutDto;
import com.nubo.master.instruments.api.models.dto.response.FixedIncomeSecurityOutDto;
import com.nubo.master.instruments.api.models.dto.response.GicsOutDto;
import com.nubo.master.instruments.api.models.dto.response.IsinNumberOutDto;
import com.nubo.master.instruments.api.models.dto.response.IssuerOutDto;
import com.nubo.master.instruments.api.models.dto.response.MarketOutDto;
import com.nubo.master.instruments.api.models.dto.response.PageResponseOutDto;
import com.nubo.master.instruments.api.models.dto.response.SecurityTitleOutDto;
import com.nubo.master.instruments.api.models.dto.response.SecurityTitleSuspendedHistoryOutDto;
import com.nubo.master.instruments.api.models.dto.response.SegmentOutDto;
import com.nubo.master.instruments.api.models.dto.response.StatusOutDto;
import com.nubo.master.instruments.api.models.dto.response.TypeOutDto;
import com.nubo.master.instruments.api.models.entity.CfiEntity;
import com.nubo.master.instruments.api.models.entity.ClassEntity;
import com.nubo.master.instruments.api.models.entity.CorporateActionsEntity;
import com.nubo.master.instruments.api.models.entity.CountryEntity;
import com.nubo.master.instruments.api.models.entity.CurrencyEntity;
import com.nubo.master.instruments.api.models.entity.DepositoryEntity;
import com.nubo.master.instruments.api.models.entity.EquitySecurityEntity;
import com.nubo.master.instruments.api.models.entity.FixedIncomeSecurityEntity;
import com.nubo.master.instruments.api.models.entity.GicsEntity;
import com.nubo.master.instruments.api.models.entity.ISINNumberEntity;
import com.nubo.master.instruments.api.models.entity.IssuerEntity;
import com.nubo.master.instruments.api.models.entity.MarketEntity;
import com.nubo.master.instruments.api.models.entity.SecurityTitleEntity;
import com.nubo.master.instruments.api.models.entity.SecurityTitleSuspendedHistoryEntity;
import com.nubo.master.instruments.api.models.entity.SegmentEntity;
import com.nubo.master.instruments.api.models.entity.StatusEntity;
import com.nubo.master.instruments.api.models.entity.TypeEntity;
import com.nubo.master.instruments.api.models.enums.RepoSimultaneousBusinessEnum;
import org.springframework.util.ObjectUtils;

import java.util.Comparator;
import java.util.stream.Collectors;

public final class MapperUtil {

    private MapperUtil() {
    }

    public static CountryOutDto countryEntityToCountryOutDto(CountryEntity countryEntity) {
        if (countryEntity == null) return null;
        return CountryOutDto.builder()
                .id(countryEntity.getId())
                .code(countryEntity.getCode())
                .name(countryEntity.getName())
                .currency(ObjectUtils.isEmpty(countryEntity.getCurrency()) ? null
                        : currencyEntityToCurrencyOutDto(countryEntity.getCurrency()))
                .timeZone(countryEntity.getTimeZone())
                .build();
    }

    public static CurrencyOutDto currencyEntityToCurrencyOutDto(CurrencyEntity currencyEntity) {
        if (currencyEntity == null) return null;
        return CurrencyOutDto.builder()
                .id(currencyEntity.getId())
                .code(currencyEntity.getCode())
                .name(currencyEntity.getName())
                .build();
    }

    public static EquitySecurityOutDto equitySecurityEntityToEquitySecurityOutDto(
            EquitySecurityEntity equitySecurityEntity) {
        if (equitySecurityEntity == null) return null;
        return EquitySecurityOutDto.builder()
                .securityId(equitySecurityEntity.getSecurityId())
                .parent(equitySecurityEntity.getParent())
                .amountIssued(equitySecurityEntity.getAmountIssued())
                .nominalPrice(equitySecurityEntity.getNominalPrice())
                .nominalPriceDate(equitySecurityEntity.getNominalPriceDate())
                .negotiate(equitySecurityEntity.getNegotiate())
                .dateEquityValue(equitySecurityEntity.getDateEquityValue())
                .equityValue(equitySecurityEntity.getEquityValue())
                .dateFaceValue(equitySecurityEntity.getDateFaceValue())
                .faceValue(equitySecurityEntity.getFaceValue())
                .numberOutstanding(equitySecurityEntity.getNumberOutstanding())
                .submission(equitySecurityEntity.getSubmission())
                .liquidity(equitySecurityEntity.getLiquidity())
                .specialRights(equitySecurityEntity.getSpecialRights())
                .exdividendDate(equitySecurityEntity.getExdividendDate())
                .build();
    }

    public static IssuerOutDto issuerEntityToIssuerOutDto(IssuerEntity issuerEntity) {
        if (issuerEntity == null) return null;
        return IssuerOutDto.builder()
                .id(issuerEntity.getId())
                .code(issuerEntity.getCode())
                .name(issuerEntity.getName())
                .shortName(issuerEntity.getShortName())
                .type(ObjectUtils.isEmpty(issuerEntity.getType()) ? null
                        : typeEntityToTypeOutDto(issuerEntity.getType()))
                .country(ObjectUtils.isEmpty(issuerEntity.getCountry()) ? null
                        : countryEntityToCountryOutDto(issuerEntity.getCountry()))
                .gics(ObjectUtils.isEmpty(issuerEntity.getGics()) ? null
                        : gicsEntityToGicsOutDto(issuerEntity.getGics()))
                .dateEntry(issuerEntity.getDateEntry())
                .countryOrigin(ObjectUtils.isEmpty(issuerEntity.getCountryOrigin()) ? null
                        : countryEntityToCountryOutDto(issuerEntity.getCountryOrigin()))
                .cusip(issuerEntity.getCusip())
                .taxCode(issuerEntity.getTaxCode())
                .status(ObjectUtils.isEmpty(issuerEntity.getStatus()) ? null
                        : statusEntityToStatusOutDto(issuerEntity.getStatus()))
                .withdrawalDate(issuerEntity.getWithdrawalDate())
                .mainMarket(issuerEntity.getMainMarket())
                .regulatorCode(issuerEntity.getRegulatorCode())
                .depository(ObjectUtils.isEmpty(issuerEntity.getDepository()) ? null
                        : depositoryEntityToDepositoryOutDto(issuerEntity.getDepository()))
                .dvlCode(issuerEntity.getDvlCode())
                .creditRating(issuerEntity.getCreditRating())
                .build();
    }

    public static IssuerOutDto issuerEntityToIssuerOutDtoDetail(IssuerEntity issuerEntity) {
        if (issuerEntity == null) return null;
        return IssuerOutDto.builder()
                .id(issuerEntity.getId())
                .code(issuerEntity.getCode())
                .name(issuerEntity.getName())
                .build();
    }

    public static StatusOutDto statusEntityToStatusOutDto(StatusEntity statusEntity) {
        if (statusEntity == null) return null;
        return StatusOutDto.builder()
                .id(statusEntity.getId())
                .description(statusEntity.getDescription())
                .category(statusEntity.getCategory())
                .build();
    }

    public static TypeOutDto typeEntityToTypeOutDto(TypeEntity typeEntity) {
        if (typeEntity == null) return null;
        return TypeOutDto.builder()
                .id(typeEntity.getId())
                .description(typeEntity.getDescription())
                .category(typeEntity.getCategory())
                .detail(typeEntity.getDetail())
                .build();
    }

    public static GicsOutDto gicsEntityToGicsOutDto(GicsEntity gicsEntity) {
        if (gicsEntity == null) return null;
        return GicsOutDto.builder()
                .id(gicsEntity.getId())
                .description(gicsEntity.getDescription())
                .build();
    }

    public static CfiOutDto cfiEntityToCfiOutDto(CfiEntity cfiEntity) {
        if (cfiEntity == null) return null;
        return CfiOutDto.builder()
                .id(cfiEntity.getId())
                .description(cfiEntity.getDescription())
                .build();
    }

    public static ClassOutDto classEntityToClassOutDto(ClassEntity classEntity) {
        if (classEntity == null) return null;
        return ClassOutDto.builder()
                .id(classEntity.getId())
                .description(classEntity.getDescription())
                .category(classEntity.getCategory())
                .build();
    }

    public static MarketOutDto marketEntityToMarketOutDto(MarketEntity marketEntity) {
        if (marketEntity == null) return null;
        return MarketOutDto.builder()
                .id(marketEntity.getId())
                .description(marketEntity.getDescription())
                .category(marketEntity.getCategory())
                .build();
    }

    public static EquityInstrumentOutDto securityTitleEntityToEquityInstrumentOutDto(
            SecurityTitleEntity securityTitleEntity) {
        if (securityTitleEntity == null) return null;

        EquitySecurityEntity latestEquitySecurityEntity = securityTitleEntity.getEquitySecurities()
                .stream().max(Comparator.comparing(EquitySecurityEntity::getLastModifyDate))
                .orElse(null);

        return EquityInstrumentOutDto.builder()
                .securityId(securityTitleEntity.getSecurityId())
                .mnemonic(securityTitleEntity.getMnemonic())
                .isinCode(securityTitleEntity.getIsin())
                .description(buildEquityInstrumentDescription(securityTitleEntity))
                .repoSimultaneousBusiness(getRepoSimultaneousBusiness(
                        latestEquitySecurityEntity))
                .listingDate(securityTitleEntity.getListingDate())
                .delistingDate(securityTitleEntity.getDelistingDate())
                .settlementPeriod(securityTitleEntity.getSettlementPeriod())
                .regulatorSpeciesCode(securityTitleEntity.getRegulatoryCode())
                .issuerCode(securityTitleEntity.getIssuer() != null
                        ? securityTitleEntity.getIssuer().getCode()
                        : null)
                .nominalPrice(
                        latestEquitySecurityEntity != null
                                ? latestEquitySecurityEntity.getNominalPrice()
                                : null)
                .nominalPriceDate(
                        latestEquitySecurityEntity != null
                                ? latestEquitySecurityEntity.getNominalPriceDate()
                                : null)
                .baseInstrument(securityTitleEntity.getIssuer() != null
                        ? securityTitleEntity.getIssuer().getShortName()
                        : null)
                .marketType(securityTitleEntity.getSegment() != null
                        ? securityTitleEntity.getSegment().getDescription()
                        : null)
                .cfi(securityTitleEntity.getCfi() != null
                        ? cfiEntityToCfiOutDto(securityTitleEntity.getCfi())
                        : null)
                .instrumentClass(securityTitleEntity.getClassEntity() != null
                        ? classEntityToClassOutDto(securityTitleEntity.getClassEntity())
                        : null)
                .country(securityTitleEntity.getCountry() != null
                        ? countryEntityToCountryOutDto(securityTitleEntity.getCountry())
                        : null)
                .currency(securityTitleEntity.getCurrency() != null
                        ? currencyEntityToCurrencyOutDto(securityTitleEntity.getCurrency())
                        : null)
                .depository(securityTitleEntity.getDepository() != null
                        ? depositoryEntityToDepositoryOutDto(
                        securityTitleEntity.getDepository())
                        : null)
                .issuer(securityTitleEntity.getIssuer() != null
                        ? issuerEntityToIssuerOutDto(securityTitleEntity.getIssuer())
                        : null)
                .market(securityTitleEntity.getMarket() != null
                        ? marketEntityToMarketOutDto(securityTitleEntity.getMarket())
                        : null)
                .status(securityTitleEntity.getStatus() != null
                        ? statusEntityToStatusOutDto(securityTitleEntity.getStatus())
                        : null)
                .tradesOnLoan(latestEquitySecurityEntity != null
                        ? latestEquitySecurityEntity.getTradesOnLoan() : null)
                .tradesOnRepo(latestEquitySecurityEntity != null
                        ? latestEquitySecurityEntity.getTradesOnRepo() : null)
                .suspendedNegotiation(!ObjectUtils.isEmpty(securityTitleEntity.getSuspendedNegotiation()) && securityTitleEntity.getSuspendedNegotiation())
                .suspendedEffectiveDate(securityTitleEntity.getSuspendedEffectiveDate())
                .suspendedProcessType(typeEntityToTypeOutDto(securityTitleEntity.getSuspendedProcessType()))
                .build();
    }

    public static EquityInstrumentSimpleOutDto securityTitleEntityToEquityInstrumentSimpleOutDto(
            SecurityTitleEntity securityTitleEntity) {
        if (securityTitleEntity == null) return null;
        return EquityInstrumentSimpleOutDto.builder()
                .securityId(securityTitleEntity.getSecurityId())
                .mnemonic(securityTitleEntity.getMnemonic())
                .isinCode(securityTitleEntity.getIsin())
                .issuerCode(
                        securityTitleEntity.getIssuer() != null
                                ? securityTitleEntity.getIssuer().getCode()
                                : null)
                .build();
    }

    public static SecurityTitleOutDto securityTitleEntityToSecurityTitleOutDto(SecurityTitleEntity securityTitleEntity) {
        if (securityTitleEntity == null) return null;
        return SecurityTitleOutDto.builder()
                .id(securityTitleEntity.getSecurityId())
                .mnemonic(securityTitleEntity.getMnemonic())
                .build();
    }

    public static DepositoryOutDto depositoryEntityToDepositoryOutDto(DepositoryEntity depositoryEntity) {
        if (depositoryEntity == null) return null;
        return DepositoryOutDto.builder()
                .id(depositoryEntity.getId())
                .description(depositoryEntity.getDescription())
                .build();
    }

    private static String buildEquityInstrumentDescription(SecurityTitleEntity securityTitleEntity) {
        StringBuilder description = new StringBuilder();

        if (!ObjectUtils.isEmpty(securityTitleEntity.getClassEntity())) {
            description.append(securityTitleEntity.getClassEntity().getDescription());
        }

        if (!ObjectUtils.isEmpty(securityTitleEntity.getIssuer())) {
            if (description.length() > 0) {
                description.append(" ");
            }
            description.append(securityTitleEntity.getIssuer().getShortName());
        }

        if (!ObjectUtils.isEmpty(securityTitleEntity.getCurrency())) {
            if (description.length() > 0) {
                description.append(" ");
            }
            description.append(securityTitleEntity.getCurrency().getName());
        }

        if (!ObjectUtils.isEmpty(securityTitleEntity.getSegment())) {
            if (description.length() > 0) {
                description.append(" - ");
            }
            description.append(securityTitleEntity.getSegment().getDescription());
        }

        return description.toString();
    }

    private static String getRepoSimultaneousBusiness(EquitySecurityEntity equitySecurityEntity) {
        if (equitySecurityEntity == null || equitySecurityEntity.getNegotiate() == null) {
            return RepoSimultaneousBusinessEnum.INDEFINIDO.getValue();
        }
        return equitySecurityEntity.getNegotiate() ? RepoSimultaneousBusinessEnum.YES.getValue()
                : RepoSimultaneousBusinessEnum.NO.getValue();
    }

    public static EquityInstrumentSimpleOutDto equityInstrumentOutDtoToEquityInstrumentSimpleOutDto(
            EquityInstrumentOutDto equityInstrumentOutDto) {
        return EquityInstrumentSimpleOutDto.builder()
                .securityId(equityInstrumentOutDto.getSecurityId())
                .mnemonic(equityInstrumentOutDto.getMnemonic())
                .isinCode(equityInstrumentOutDto.getIsinCode())
                .issuerCode(equityInstrumentOutDto.getIssuerCode())
                .build();
    }

    public static PageResponseOutDto<EquityInstrumentSimpleOutDto> mapPageResponse(
            PageResponseOutDto<EquityInstrumentOutDto> allInstruments) {
        PageResponseOutDto<EquityInstrumentSimpleOutDto> simpleOutDto = new PageResponseOutDto<>();
        simpleOutDto.setContent(allInstruments.getContent().stream()
                .map(MapperUtil::equityInstrumentOutDtoToEquityInstrumentSimpleOutDto)
                .collect(Collectors.toList()));
        simpleOutDto.setPageSize(allInstruments.getPageSize());
        simpleOutDto.setPageNumber(allInstruments.getPageNumber());
        simpleOutDto.setTotalElements(allInstruments.getTotalElements());
        simpleOutDto.setTotalPages(allInstruments.getTotalPages());
        return simpleOutDto;
    }

    public static IsinNumberOutDto isinNumberEntityToIsinNumberOutDto(ISINNumberEntity isinNumberEntity) {
        if (isinNumberEntity == null) return null;
        return IsinNumberOutDto.builder()
                .id(isinNumberEntity.getId())
                .isinNumber(isinNumberEntity.getIsinNumber())
                .build();
    }

    public static CorporateActionsOutDto corporateActionsEntityToCorporateActionsOutDtoPageable(CorporateActionsEntity corporateActionsEntity) {
        if (ObjectUtils.isEmpty(corporateActionsEntity)) return null;
        return CorporateActionsOutDto.builder()
                .id(corporateActionsEntity.getId())
                .paymentDate(corporateActionsEntity.getPaymentDate())
                .country(countryEntityToCountryOutDto(corporateActionsEntity.getCountry()))
                .issuer(issuerEntityToIssuerOutDto(corporateActionsEntity.getIssuer()))
                .type(typeEntityToTypeOutDto(corporateActionsEntity.getType()))
                .build();
    }

    public static CorporateActionsOutDto corporateActionsEntityToCorporateActionsOutDtoDetail(CorporateActionsEntity corporateActionsEntity) {
        if (ObjectUtils.isEmpty(corporateActionsEntity)) return null;
        return CorporateActionsOutDto.builder()
                .id(corporateActionsEntity.getId())
                .securityTitle(securityTitleEntityToSecurityTitleOutDto(corporateActionsEntity.getSecurityTitle()))
                .isinNumber(isinNumberEntityToIsinNumberOutDto(corporateActionsEntity.getIsinNumber()))
                .currency(currencyEntityToCurrencyOutDto(corporateActionsEntity.getCurrency()))
                .type(typeEntityToTypeOutDto(corporateActionsEntity.getType()))
                .meetingDate(corporateActionsEntity.getMeetingDate())
                .eventStartDate(corporateActionsEntity.getEventStartDate())
                .eventEndDate(corporateActionsEntity.getEventEndDate())
                .cutOffDate(corporateActionsEntity.getCutOffDate())
                .recordDate(corporateActionsEntity.getRecordDate())
                .paymentDate(corporateActionsEntity.getPaymentDate())
                .adjustedFactor(corporateActionsEntity.getAdjustedFactor())
                .paymentFactor(corporateActionsEntity.getPaymentFactor())
                .paymentCurrency(currencyEntityToCurrencyOutDto(corporateActionsEntity.getPaymentCurrency()))
                .totalAmount(corporateActionsEntity.getTotalAmount())
                .eventDescription(corporateActionsEntity.getEventDescription())
                .issuer(issuerEntityToIssuerOutDto(corporateActionsEntity.getIssuer()))
                .build();
    }

    public static SegmentOutDto segmentEntityToSegmentOutDto(SegmentEntity segmentEntity) {
        if (segmentEntity == null) return null;
        return SegmentOutDto.builder()
                .id(segmentEntity.getId())
                .description(segmentEntity.getDescription())
                .build();
    }

    public static SecurityTitleSuspendedHistoryOutDto securityTitleSuspendedHistoryEntityToSecurityTitleSuspendedHistoryOutDto(
            SecurityTitleSuspendedHistoryEntity securityTitleSuspendedHistoryEntity) {
        if (securityTitleSuspendedHistoryEntity == null) return null;
        return SecurityTitleSuspendedHistoryOutDto.builder()
                .id(securityTitleSuspendedHistoryEntity.getId())
                .securityTitle(securityTitleEntityToSecurityTitleOutDto(securityTitleSuspendedHistoryEntity.getSecurityTitle()))
                .actionType(typeEntityToTypeOutDto(securityTitleSuspendedHistoryEntity.getActionType()))
                .processType(typeEntityToTypeOutDto(securityTitleSuspendedHistoryEntity.getProcessType()))
                .effectiveDate(securityTitleSuspendedHistoryEntity.getEffectiveDate())
                .description(securityTitleSuspendedHistoryEntity.getDescription())
                .lastModifyUser(securityTitleSuspendedHistoryEntity.getLastModifyUser())
                .lastModifyDate(securityTitleSuspendedHistoryEntity.getLastModifyDate())
                .build();
    }

    public static SecurityTitleOutDto securityTitleEntityToFixedIncomeSecurityDetailOutDto(SecurityTitleEntity securityTitleEntity) {
        return SecurityTitleOutDto.builder()
                .id(securityTitleEntity.getSecurityId())
                .issuer(issuerEntityToIssuerOutDto(securityTitleEntity.getIssuer()))
                .isin(securityTitleEntity.getIsin())
                .instrumentClass(classEntityToClassOutDto(securityTitleEntity.getClassEntity()))
                .mnemonic(securityTitleEntity.getMnemonic())
                .depository(depositoryEntityToDepositoryOutDto(securityTitleEntity.getDepository()))
                .cfi(cfiEntityToCfiOutDto(securityTitleEntity.getCfi()))
                .currency(currencyEntityToCurrencyOutDto(securityTitleEntity.getCurrency()))
                .status(statusEntityToStatusOutDto(securityTitleEntity.getStatus()))
                .country(countryEntityToCountryOutDto(securityTitleEntity.getCountry()))
                .segment(segmentEntityToSegmentOutDto(securityTitleEntity.getSegment()))
                .build();
    }

    public static SecurityTitleOutDto fixedIncomeSecurityEntityToSecurityTitleOutDto(FixedIncomeSecurityEntity fixedIncomeSecurityEntity) {
        if (fixedIncomeSecurityEntity == null) return null;
        return SecurityTitleOutDto.builder()
                .securityId(fixedIncomeSecurityEntity.getSecurityId())
                .mnemonic(fixedIncomeSecurityEntity.getSecurityTitle().getMnemonic())
                .isin(fixedIncomeSecurityEntity.getSecurityTitle().getIsin())
                .issuer(issuerEntityToIssuerOutDto(fixedIncomeSecurityEntity.getSecurityTitle().getIssuer()))
                .depository(depositoryEntityToDepositoryOutDto(fixedIncomeSecurityEntity.getSecurityTitle().getDepository()))
                .status(statusEntityToStatusOutDto(fixedIncomeSecurityEntity.getSecurityTitle().getStatus()))
                .build();
    }

    public static FixedIncomeSecurityOutDto fixedIncomeSecurityEntityToFixedIncomeSecurityOutDto(FixedIncomeSecurityEntity fixedIncomeSecurityEntity) {
        if (fixedIncomeSecurityEntity == null) return null;
        return FixedIncomeSecurityOutDto.builder()
                .security(securityTitleEntityToFixedIncomeSecurityDetailOutDto(fixedIncomeSecurityEntity.getSecurityTitle()))
                .maturityDate(fixedIncomeSecurityEntity.getMaturityDate())
                .description(fixedIncomeSecurityEntity.getDescription())
                .firstCuponDate(fixedIncomeSecurityEntity.getFirstCuponDate())
                .couponFrequency(fixedIncomeSecurityEntity.getCouponFrequency())
                .initialParValue(fixedIncomeSecurityEntity.getInitialParValue())
                .nominalValue(fixedIncomeSecurityEntity.getNominalValue())
                .couponInterest(fixedIncomeSecurityEntity.getCouponInterest())
                .minimumUnit(fixedIncomeSecurityEntity.getMinimumUnit())
                .issueDate(fixedIncomeSecurityEntity.getIssueDate())
                .rateUsageMethod(fixedIncomeSecurityEntity.getRateUsageMethod())
                .rateType(typeEntityToTypeOutDto(fixedIncomeSecurityEntity.getRateType()))
                .rateValue(fixedIncomeSecurityEntity.getRateValue())
                .spread(fixedIncomeSecurityEntity.getSpread())
                .periodicityType(typeEntityToTypeOutDto(fixedIncomeSecurityEntity.getPeriodicityType()))
                .paymentType(typeEntityToTypeOutDto(fixedIncomeSecurityEntity.getPaymentType()))
                .fractionationMultiple(fixedIncomeSecurityEntity.getFractionationMultiple())
                .liquidationType(typeEntityToTypeOutDto(fixedIncomeSecurityEntity.getLiquidationType()))
                .build();
    }

}

```

## src/main/java/com/nubo/master/instruments/api/models/dto/request/CorporateActionsParamsInDto.java

```java
package com.nubo.master.instruments.api.models.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CorporateActionsParamsInDto {

    private LocalDate dateEvent;

    private Long countryId;

    private String issuerId;

    private Long typeId;

}

```

## src/main/java/com/nubo/master/instruments/api/models/dto/request/EquityInstrumentFilterRequestDto.java

```java
package com.nubo.master.instruments.api.models.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EquityInstrumentFilterRequestDto {

    private String mnemonic;

    private String isinCode;

    private String issuerCode;

    private Long depositoryId;

    private Long statusId;

    private Long issuerId;

    private String cfiCode;

    private Long currencyId;

    private Long marketId;

    private Long countryId;

    private Long classId;

    private Long segmentId;

    private Long securityId;

}

```

## src/main/java/com/nubo/master/instruments/api/models/dto/request/EquityInstrumentLoanMnemonicInDto.java

```java
package com.nubo.master.instruments.api.models.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EquityInstrumentLoanMnemonicInDto {

    private String mnemonic;
    private Boolean includeRiskModel;

}

```

## src/main/java/com/nubo/master/instruments/api/models/dto/request/EquityInstrumentLoanPrefixInDto.java

```java
package com.nubo.master.instruments.api.models.dto.request;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EquityInstrumentLoanPrefixInDto {

    private String prefix;
    private Boolean includeRiskModel;

}

```

## src/main/java/com/nubo/master/instruments/api/models/dto/request/EquitySecurityInDto.java

```java
package com.nubo.master.instruments.api.models.dto.request;

import java.math.BigDecimal;

import com.nubo.master.instruments.api.application.annotations.ValidBigDecimal;

import jakarta.validation.constraints.Digits;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EquitySecurityInDto {

    @NotNull
    @Min(value = 1)
    private Long securityId;

    private Boolean parent;

    @Digits(integer = 20, fraction = 0, message = "amountIssued must have a maximum of 20 digits")
    private BigDecimal amountIssued;

    @ValidBigDecimal(precision = 16, scale = 8)
    private BigDecimal nominalPrice;

    @Pattern(regexp = "^\\d{4}-\\d{2}-\\d{2}$", message = "Format nominalPriceDate invalid")
    private String nominalPriceDate;

    private Boolean negotiate;

    @Pattern(regexp = "^\\d{4}-\\d{2}-\\d{2}$", message = "Format dateEquityValue invalid")
    private String dateEquityValue;

    @ValidBigDecimal(precision = 18, scale = 2)
    private BigDecimal equityValue;

    @Pattern(regexp = "^\\d{4}-\\d{2}-\\d{2}$", message = "Format dateFaceValue invalid")
    private String dateFaceValue;

    @ValidBigDecimal(precision = 18, scale = 2)
    private BigDecimal faceValue;

    @Digits(integer = 20, fraction = 0, message = "numberOutstanding must have a maximum of 20 digits")
    private BigDecimal numberOutstanding;

    @Size(max = 1)
    private String submission;

    @Size(max = 1)
    private String liquidity;

    @Digits(integer = 8, fraction = 0, message = "specialRights must have a maximum of 8 digits")
    private BigDecimal specialRights;

    @Pattern(regexp = "^\\d{4}-\\d{2}-\\d{2}$", message = "Format exdividendDate invalid")
    private String exdividendDate;

}

```

## src/main/java/com/nubo/master/instruments/api/models/dto/request/EquitySecurityUpdateInDto.java

```java
package com.nubo.master.instruments.api.models.dto.request;

import java.math.BigDecimal;

import com.nubo.master.instruments.api.application.annotations.ValidBigDecimal;

import jakarta.validation.constraints.Digits;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EquitySecurityUpdateInDto {

    private Boolean parent;

    @Digits(integer = 20, fraction = 0, message = "amountIssued must have a maximum of 20 digits")
    private BigDecimal amountIssued;

    @ValidBigDecimal(precision = 16, scale = 8)
    private BigDecimal nominalPrice;

    @Pattern(regexp = "^\\d{4}-\\d{2}-\\d{2}$", message = "Format nominalPriceDate invalid")
    private String nominalPriceDate;

    private Boolean negotiate;

    @Pattern(regexp = "^\\d{4}-\\d{2}-\\d{2}$", message = "Format dateEquityValue invalid")
    private String dateEquityValue;

    @ValidBigDecimal(precision = 18, scale = 2)
    private BigDecimal equityValue;

    @Pattern(regexp = "^\\d{4}-\\d{2}-\\d{2}$", message = "Format dateFaceValue invalid")
    private String dateFaceValue;

    @ValidBigDecimal(precision = 18, scale = 2)
    private BigDecimal faceValue;

    @Digits(integer = 20, fraction = 0, message = "numberOutstanding must have a maximum of 20 digits")
    private BigDecimal numberOutstanding;

    @Size(max = 1)
    private String submission;

    @Size(max = 1)
    private String liquidity;

    @Digits(integer = 8, fraction = 0, message = "specialRights must have a maximum of 8 digits")
    private BigDecimal specialRights;

    @Pattern(regexp = "^\\d{4}-\\d{2}-\\d{2}$", message = "Format exdividendDate invalid")
    private String exdividendDate;

}

```

## src/main/java/com/nubo/master/instruments/api/models/dto/request/ExchangeRateInDto.java

```java
package com.nubo.master.instruments.api.models.dto.request;

import java.math.BigDecimal;

import com.nubo.master.instruments.api.application.annotations.ValidBigDecimal;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ExchangeRateInDto {

    @NotNull
    @Min(value = 1)
    private Long baseCurrency;

    @NotNull
    @Pattern(regexp = "^\\d{4}-\\d{2}-\\d{2}$", message = "Format validityDate invalid")
    private String validityDate;

    @NotNull
    @Min(value = 1)
    private Long conversionCurrency;

    @NotNull
    @ValidBigDecimal(precision = 16, scale = 8)
    private BigDecimal conversionValue;

    @NotNull
    @Pattern(regexp = "^\\d{4}-\\d{2}-\\d{2}$", message = "Format redordDate invalid")
    private String recordDate;

}

```

## src/main/java/com/nubo/master/instruments/api/models/dto/request/ExchangeRateUpdateInDto.java

```java
package com.nubo.master.instruments.api.models.dto.request;

import java.math.BigDecimal;

import com.nubo.master.instruments.api.application.annotations.ValidBigDecimal;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ExchangeRateUpdateInDto {

    @Min(value = 1)
    private Long baseCurrency;

    @Pattern(regexp = "^\\d{4}-\\d{2}-\\d{2}$", message = "Format validityDate invalid")
    private String validityDate;

    @Min(value = 1)
    private Long conversionCurrency;

    @ValidBigDecimal(precision = 16, scale = 8)
    private BigDecimal conversionValue;

    @Pattern(regexp = "^\\d{4}-\\d{2}-\\d{2}$", message = "Format redordDate invalid")
    private String recordDate;

}

```

## src/main/java/com/nubo/master/instruments/api/models/dto/request/FixedIncomeSecurityInDto.java

```java
package com.nubo.master.instruments.api.models.dto.request;

import java.math.BigDecimal;

import com.nubo.master.instruments.api.application.annotations.ValidBigDecimal;

import jakarta.validation.constraints.Digits;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FixedIncomeSecurityInDto {

    @NotNull
    @Min(value = 1)
    private Long securityId;

    @Pattern(regexp = "^\\d{4}-\\d{2}-\\d{2}$", message = "Format maturityDate invalid")
    private String maturityDate;

    @Pattern(regexp = "^\\d{4}-\\d{2}-\\d{2}$", message = "Format firstCuponDate invalid")
    private String firstCuponDate;

    @Digits(integer = 2, fraction = 0, message = "couponFrecuency must have a maximum of 2 digits")
    private BigDecimal couponFrecuency;

    @ValidBigDecimal(precision = 20, scale = 8)
    private BigDecimal initialParValue;

    @ValidBigDecimal(precision = 20, scale = 8)
    private BigDecimal nominalValue;

    @ValidBigDecimal(precision = 15, scale = 2)
    private BigDecimal couponInterest;

    @Size(max = 1)
    private String standardized;

    @ValidBigDecimal(precision = 14, scale = 2)
    private BigDecimal minimumUnit;

    @ValidBigDecimal(precision = 14, scale = 2)
    private BigDecimal minimumTradeLot;

    @Size(max = 1)
    private String spivi;

    @Size(max = 1)
    private String esttit;

    @Size(max = 1)
    private String tradeTtv;

    @Size(max = 1)
    private String ttvGuarantees;

    @Digits(integer = 3, fraction = 0, message = "ccmCode must have a maximum of 3 digits")
    private BigDecimal ccmCode;

    @Digits(integer = 3, fraction = 0, message = "guaranteesCode must have a maximum of 3 digits")
    private BigDecimal guaranteesCode;

    @Size(max = 10)
    private String ttvCurve;

    @ValidBigDecimal(precision = 5, scale = 2)
    private BigDecimal haircut;

    @Size(max = 1)
    private String commonShares;

    @Pattern(regexp = "^\\d{4}-\\d{2}-\\d{2}$", message = "Format issueDate invalid")
    private String issueDate;

    @Size(max = 1)
    private String automatedSheet;

    @Size(max = 1)
    private String clearingHouseMark;

    @Size(max = 10)
    private String securityClass;

    @Size(max = 10)
    private String administeringEntity;

    @Digits(integer = 4, fraction = 0, message = "numberCouponsInterest must have a maximum of 4 digits")
    private BigDecimal numberCouponsInterest;

    @Digits(integer = 4, fraction = 0, message = "numberPaymentCoupons must have a maximum of 4 digits")
    private BigDecimal numberPaymentCoupons;

    @Size(max = 4)
    private String referenceRate;

    @Size(max = 1)
    private String rateUsageMethod;

    @Size(max = 1)
    private String interestCalculationBase;

    @Size(max = 1)
    private String acceptedFractionationType;

    @Digits(integer = 2, fraction = 0, message = "maximunNumberFraction must have a maximum of 2 digits")
    private BigDecimal maximunNumberFraction;

    @Pattern(regexp = "^\\d{4}-\\d{2}-\\d{2}$", message = "Format issueDateUniqueSerie invalid")
    private String issueDateUniqueSerie;

    @ValidBigDecimal(precision = 14, scale = 2)
    private BigDecimal totalAmountIssue;

    @Size(max = 2)
    private String dayFirstCashFlow;

    @Size(max = 2)
    private String monthFirstCashFlow;

    @Size(max = 1)
    private String itemComission;

    @Size(max = 1)
    private String marketType;

    @Size(max = 1)
    private String negotiationModality;

    @Size(max = 1)
    private String indicatorAcceptsRepos;

    @Size(max = 1)
    private String sourceWithholding;

    @Size(max = 1)
    private String baseDiscount;

    @Size(max = 6)
    private String rateBrokerApplicable;

    @Size(max = 2)
    private String negotiationIndicator;

    @Size(max = 10)
    private String indicator;

    @Digits(integer = 4, fraction = 0, message = "numberReinvestment must have a maximum of 4 digits")
    private BigDecimal numberReinvestment;

    @Pattern(regexp = "^\\d{4}-\\d{2}-\\d{2}$", message = "Format maximumReinvestmentDate invalid")
    private String maximumReinvestmentDate;

    @Size(max = 1)
    private String withReinvestmentFlow;

    @Size(max = 1)
    private String validateTypeIssues;

    @ValidBigDecimal(precision = 7, scale = 4)
    private BigDecimal paymentRateNonCapitalizing;

    @ValidBigDecimal(precision = 7, scale = 4)
    private BigDecimal capitalizableRate;

}

```

## src/main/java/com/nubo/master/instruments/api/models/dto/request/FixedIncomeSecurityUpdateInDto.java

```java
package com.nubo.master.instruments.api.models.dto.request;

import java.math.BigDecimal;

import com.nubo.master.instruments.api.application.annotations.ValidBigDecimal;

import jakarta.validation.constraints.Digits;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FixedIncomeSecurityUpdateInDto {

    @Pattern(regexp = "^\\d{4}-\\d{2}-\\d{2}$", message = "Format maturityDate invalid")
    private String maturityDate;

    @Pattern(regexp = "^\\d{4}-\\d{2}-\\d{2}$", message = "Format firstCuponDate invalid")
    private String firstCuponDate;

    @Digits(integer = 2, fraction = 0, message = "couponFrecuency must have a maximum of 2 digits")
    private BigDecimal couponFrecuency;

    @ValidBigDecimal(precision = 20, scale = 8)
    private BigDecimal initialParValue;

    @ValidBigDecimal(precision = 20, scale = 8)
    private BigDecimal nominalValue;

    @ValidBigDecimal(precision = 15, scale = 2)
    private BigDecimal couponInterest;

    @Size(max = 1)
    private String standardized;

    @ValidBigDecimal(precision = 14, scale = 2)
    private BigDecimal minimumUnit;

    @ValidBigDecimal(precision = 14, scale = 2)
    private BigDecimal minimumTradeLot;

    @Size(max = 1)
    private String spivi;

    @Size(max = 1)
    private String esttit;

    @Size(max = 1)
    private String tradeTtv;

    @Size(max = 1)
    private String ttvGuarantees;

    @Digits(integer = 3, fraction = 0, message = "ccmCode must have a maximum of 3 digits")
    private BigDecimal ccmCode;

    @Digits(integer = 3, fraction = 0, message = "guaranteesCode must have a maximum of 3 digits")
    private BigDecimal guaranteesCode;

    @Size(max = 10)
    private String ttvCurve;

    @ValidBigDecimal(precision = 5, scale = 2)
    private BigDecimal haircut;

    @Size(max = 1)
    private String commonShares;

    @Pattern(regexp = "^\\d{4}-\\d{2}-\\d{2}$", message = "Format issueDate invalid")
    private String issueDate;

    @Size(max = 1)
    private String automatedSheet;

    @Size(max = 1)
    private String clearingHouseMark;

    @Size(max = 10)
    private String securityClass;

    @Size(max = 10)
    private String administeringEntity;

    @Digits(integer = 4, fraction = 0, message = "numberCouponsInterest must have a maximum of 4 digits")
    private BigDecimal numberCouponsInterest;

    @Digits(integer = 4, fraction = 0, message = "numberPaymentCoupons must have a maximum of 4 digits")
    private BigDecimal numberPaymentCoupons;

    @Size(max = 4)
    private String referenceRate;

    @Size(max = 1)
    private String rateUsageMethod;

    @Size(max = 1)
    private String interestCalculationBase;

    @Size(max = 1)
    private String acceptedFractionationType;

    @Digits(integer = 2, fraction = 0, message = "maximunNumberFraction must have a maximum of 2 digits")
    private BigDecimal maximunNumberFraction;

    @Pattern(regexp = "^\\d{4}-\\d{2}-\\d{2}$", message = "Format issueDateUniqueSerie invalid")
    private String issueDateUniqueSerie;

    @ValidBigDecimal(precision = 14, scale = 2)
    private BigDecimal totalAmountIssue;

    @Size(max = 2)
    private String dayFirstCashFlow;

    @Size(max = 2)
    private String monthFirstCashFlow;

    @Size(max = 1)
    private String itemComission;

    @Size(max = 1)
    private String marketType;

    @Size(max = 1)
    private String negotiationModality;

    @Size(max = 1)
    private String indicatorAcceptsRepos;

    @Size(max = 1)
    private String sourceWithholding;

    @Size(max = 1)
    private String baseDiscount;

    @Size(max = 6)
    private String rateBrokerApplicable;

    @Size(max = 2)
    private String negotiationIndicator;

    @Size(max = 10)
    private String indicator;

    @Digits(integer = 4, fraction = 0, message = "numberReinvestment must have a maximum of 4 digits")
    private BigDecimal numberReinvestment;

    @Pattern(regexp = "^\\d{4}-\\d{2}-\\d{2}$", message = "Format maximumReinvestmentDate invalid")
    private String maximumReinvestmentDate;

    @Size(max = 1)
    private String withReinvestmentFlow;

    @Size(max = 1)
    private String validateTypeIssues;

    @ValidBigDecimal(precision = 7, scale = 4)
    private BigDecimal paymentRateNonCapitalizing;

    @ValidBigDecimal(precision = 7, scale = 4)
    private BigDecimal capitalizableRate;

}

```

## src/main/java/com/nubo/master/instruments/api/models/dto/request/InvestorAccountFilterRequestDto.java

```java
package com.nubo.master.instruments.api.models.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class InvestorAccountFilterRequestDto {

    private Long investorId;

    private String accountNumber;

    private Long statusId;

    private Long typeId;

    private String depositoryId;

    private Long participantId;

    private String principalStatus;

    private String relationalType;
}

```

## src/main/java/com/nubo/master/instruments/api/models/dto/request/InvestorAccountInDto.java

```java
package com.nubo.master.instruments.api.models.dto.request;

import jakarta.validation.constraints.Min;
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
public class InvestorAccountInDto {

    @NotNull
    @Min(value = 1)
    private Long investorId;

    @NotNull
    @Size(max = 50)
    private String accountNumber;

    @Min(value = 1)
    private Long statusId;

    @Min(value = 1)
    private Long typeId;

    @Size(max = 2)
    private String depositoryId;

    @Min(value = 1)
    private Long participantId;

}

```

## src/main/java/com/nubo/master/instruments/api/models/dto/request/InvestorAccountUpdateInDto.java

```java
package com.nubo.master.instruments.api.models.dto.request;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class InvestorAccountUpdateInDto {

    @Min(value = 1)
    private Long investorId;

    @Size(max = 50)
    private String accountNumber;

    @Min(value = 1)
    private Long statusId;

    @Min(value = 1)
    private Long typeId;

    @Size(max = 2)
    private String depositoryId;

    @Min(value = 1)
    private Long participantId;

}

```

## src/main/java/com/nubo/master/instruments/api/models/dto/request/InvestorFilterRequestDto.java

```java
package com.nubo.master.instruments.api.models.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class InvestorFilterRequestDto {

    private String fullName;
    private String documentNumber;
    private Long countryId;
    private Long statusId;
    private Long investorId;

}

```

## src/main/java/com/nubo/master/instruments/api/models/dto/request/InvestorInDto.java

```java
package com.nubo.master.instruments.api.models.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Min;
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
public class InvestorInDto {

    @NotNull
    @Size(max = 10)
    private String code;

    @Size(max = 60)
    private String firstName;

    @Size(max = 60)
    private String lastName;

    @Size(max = 100)
    private String companyName;

    @Min(value = 1)
    private Long typeId;

    @Min(value = 1)
    private Long statusId;

    @NotNull
    @Min(value = 1)
    private Long countryId;

    @Size(max = 10)
    private String departmentId;

    @Min(value = 1)
    private Long cityId;

    @Size(max = 20)
    private String documentNumber;

    @NotNull
    @Min(value = 1)
    private Long identificationTypeId;

    @Size(max = 2)
    private String nationality;

    @Size(max = 100)
    private String address;

    @Size(max = 20)
    private String phoneNumber;

    @Size(max = 50)
    @Email
    private String email;

    @Size(max = 20)
    private String clearinghouseCode;

    @Min(value = 1)
    private Long gicsId;

    private Boolean moneyLaunderingFlag;

    @Min(value = 1)
    private Long taxStatusId;

}

```

## src/main/java/com/nubo/master/instruments/api/models/dto/request/InvestorUpdateInDto.java

```java
package com.nubo.master.instruments.api.models.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class InvestorUpdateInDto {

    @Size(max = 10)
    private String code;

    @Size(max = 60)
    private String firstName;

    @Size(max = 60)
    private String lastName;

    @Size(max = 100)
    private String companyName;

    @Min(value = 1)
    private Long typeId;

    @Min(value = 1)
    private Long statusId;

    @Min(value = 1)
    private Long countryId;

    @Size(max = 10)
    private String departmentId;

    @Min(value = 1)
    private Long cityId;

    @Size(max = 20)
    private String documentNumber;

    @Min(value = 1)
    private Long identificationTypeId;

    @Size(max = 2)
    private String nationality;

    @Size(max = 100)
    private String address;

    @Size(max = 20)
    private String phoneNumber;

    @Size(max = 50)
    @Email
    private String email;

    @Size(max = 20)
    private String clearinghouseCode;

    @Min(value = 1)
    private Long gicsId;

    @Size(max = 1)
    private Boolean moneyLaunderingFlag;

    @Min(value = 1)
    private Long taxStatusId;

}

```

## src/main/java/com/nubo/master/instruments/api/models/dto/request/IssuerInDto.java

```java
package com.nubo.master.instruments.api.models.dto.request;

import java.time.LocalDate;

import jakarta.validation.constraints.Min;
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
public class IssuerInDto {

    @NotNull
    @Size(max = 10)
    private String code;

    @NotNull
    @Size(max = 100)
    private String name;

    @Size(max = 50)
    private String shortName;

    @NotNull
    @Min(value = 1)
    private Long typeId;

    @NotNull
    @Min(value = 1)
    private Long countryId;

    @NotNull
    @Min(value = 1)
    private Long gicsId;

    private LocalDate dateEntry;

    @NotNull
    @Min(value = 1)
    private Long countryOrigin;

    @Size(max = 15)
    private String cusip;

    @Size(max = 20)
    private String taxCode;

    @NotNull
    @Min(value = 1)
    private Long statusId;

    private LocalDate withdrawalDate;

    @Size(max = 20)
    private String mainMarket;

    @Size(max = 20)
    private String regulatorCode;

    @NotNull
    @Size(max = 2)
    private String depositoryId;

    @Size(max = 5)
    private String dvlCode;

}

```

## src/main/java/com/nubo/master/instruments/api/models/dto/request/IssuerUpdateInDto.java

```java
package com.nubo.master.instruments.api.models.dto.request;

import java.time.LocalDate;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class IssuerUpdateInDto {

    @Size(max = 10)
    private String code;

    @Size(max = 100)
    private String name;

    @Size(max = 50)
    private String shortName;

    @Min(value = 1)
    private Long typeId;

    @Min(value = 1)
    private Long countryId;

    @Min(value = 1)
    private Long gicsId;

    private LocalDate dateEntry;

    @Min(value = 1)
    private Long countryOrigin;

    @Size(max = 15)
    private String cusip;

    @Size(max = 20)
    private String taxCode;

    @Min(value = 1)
    private Long statusId;

    private LocalDate withdrawalDate;

    @Size(max = 20)
    private String mainMarket;

    @Size(max = 20)
    private String regulatorCode;

    @Size(max = 2)
    private String depositoryId;

    @Size(max = 5)
    private String dvlCode;

}

```

## src/main/java/com/nubo/master/instruments/api/models/dto/request/NoSuspendedSecurityTitleInDto.java

```java
package com.nubo.master.instruments.api.models.dto.request;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class NoSuspendedSecurityTitleInDto {

    @NotNull
    @Min(1)
    private Long securityId;

    @Size(max = 150)
    private String description;

}

```

## src/main/java/com/nubo/master/instruments/api/models/dto/request/ParamsFixedIncomeSecurityInDto.java

```java
package com.nubo.master.instruments.api.models.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ParamsFixedIncomeSecurityInDto {

    private String issuerCode;

    private Long depositoryId;

    private Long statusId;

}

```

## src/main/java/com/nubo/master/instruments/api/models/dto/request/ParamsPageInDto.java

```java
package com.nubo.master.instruments.api.models.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ParamsPageInDto {

    private int page;

    private int size;

    private String sort;

    private String order;

    private boolean all;

}

```

## src/main/java/com/nubo/master/instruments/api/models/dto/request/SuspendedSecurityTitleInDto.java

```java
package com.nubo.master.instruments.api.models.dto.request;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class SuspendedSecurityTitleInDto {

    @NotNull
    @Min(1)
    private Long securityId;

    @NotNull
    @Min(1)
    private Long processTypeId;

    private LocalDate effectiveDate;

    @Size(max = 150)
    private String description;

}

```

## src/main/java/com/nubo/master/instruments/api/models/dto/response/CfiOutDto.java

```java
package com.nubo.master.instruments.api.models.dto.response;

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
public class CfiOutDto {

    private String id;

    private String description;

}

```

## src/main/java/com/nubo/master/instruments/api/models/dto/response/CityOutDto.java

```java
package com.nubo.master.instruments.api.models.dto.response;

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

## src/main/java/com/nubo/master/instruments/api/models/dto/response/ClassOutDto.java

```java
package com.nubo.master.instruments.api.models.dto.response;

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

## src/main/java/com/nubo/master/instruments/api/models/dto/response/CorporateActionsOutDto.java

```java
package com.nubo.master.instruments.api.models.dto.response;

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
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class CorporateActionsOutDto {

    private Long id;

    private SecurityTitleOutDto securityTitle;

    private IsinNumberOutDto isinNumber;

    private CurrencyOutDto currency;

    private TypeOutDto type;

    private LocalDate meetingDate;

    private LocalDate eventStartDate;

    private LocalDate eventEndDate;

    private LocalDate cutOffDate;

    private LocalDate recordDate;

    private LocalDate paymentDate;

    private BigDecimal adjustedFactor;

    private BigDecimal paymentFactor;

    private CurrencyOutDto paymentCurrency;

    private BigDecimal totalAmount;

    private String eventDescription;

    private CountryOutDto country;

    private IssuerOutDto issuer;

}

```

## src/main/java/com/nubo/master/instruments/api/models/dto/response/CountryOutDto.java

```java
package com.nubo.master.instruments.api.models.dto.response;

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
public class CountryOutDto {

    private Long id;

    private String code;

    private String name;

    private CurrencyOutDto currency;

    private String timeZone;

}

```

## src/main/java/com/nubo/master/instruments/api/models/dto/response/CurrencyOutDto.java

```java
package com.nubo.master.instruments.api.models.dto.response;

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
public class CurrencyOutDto {

    private Long id;

    private String code;

    private String name;
}

```

## src/main/java/com/nubo/master/instruments/api/models/dto/response/DepartmentOutDto.java

```java
package com.nubo.master.instruments.api.models.dto.response;

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

## src/main/java/com/nubo/master/instruments/api/models/dto/response/DepositoryOutDto.java

```java
package com.nubo.master.instruments.api.models.dto.response;

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

## src/main/java/com/nubo/master/instruments/api/models/dto/response/EquityInstrumentLoanDepositoryOutDto.java

```java
package com.nubo.master.instruments.api.models.dto.response;


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
public class EquityInstrumentLoanDepositoryOutDto {

    private String depositoryId;

    private String code;

    private String description;

}

```

## src/main/java/com/nubo/master/instruments/api/models/dto/response/EquityInstrumentLoanOutDto.java

```java
package com.nubo.master.instruments.api.models.dto.response;

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
public class EquityInstrumentLoanOutDto {
    private String mnemonic;
    private String isin;
    private String description;
    private String status;
    private String currency;
    private String country;
    private String marketCode;
    private EquityInstrumentLoanDepositoryOutDto depository;
    private RiskModelLoanOutDto riskModel;
}

```

## src/main/java/com/nubo/master/instruments/api/models/dto/response/EquityInstrumentOutDto.java

```java
package com.nubo.master.instruments.api.models.dto.response;

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
public class EquityInstrumentOutDto {
    private Long securityId;
    private String mnemonic;
    private String isinCode;
    private String issuerCode;
    private String description;
    private LocalDate listingDate;
    private LocalDate delistingDate;
    private String settlementPeriod;
    private BigDecimal nominalPrice;
    private LocalDate nominalPriceDate;
    private String regulatorSpeciesCode;

    private String baseInstrument;
    private String repoSimultaneousBusiness;
    private String marketType;
    private CountryOutDto country;
    private MarketOutDto market;
    private CfiOutDto cfi;
    private CurrencyOutDto currency;

    private StatusOutDto status;
    private IssuerOutDto issuer;
    private DepositoryOutDto depository;
    private ClassOutDto instrumentClass;

    private Boolean tradesOnLoan;
    private Boolean tradesOnRepo;

    private Boolean suspendedNegotiation;

    private LocalDate suspendedEffectiveDate;

    private TypeOutDto suspendedProcessType;

}

```

## src/main/java/com/nubo/master/instruments/api/models/dto/response/EquityInstrumentSimpleOutDto.java

```java
package com.nubo.master.instruments.api.models.dto.response;

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
public class EquityInstrumentSimpleOutDto {

    private Long securityId;

    private String mnemonic;

    private String isinCode;

    private String issuerCode;

}

```

## src/main/java/com/nubo/master/instruments/api/models/dto/response/EquitySecurityOutDto.java

```java
package com.nubo.master.instruments.api.models.dto.response;

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
public class EquitySecurityOutDto {

    private Long securityId;

    private Boolean parent;

    private BigDecimal amountIssued;

    private BigDecimal nominalPrice;

    private LocalDate nominalPriceDate;

    private Boolean negotiate;

    private LocalDate dateEquityValue;

    private BigDecimal equityValue;

    private LocalDate dateFaceValue;

    private BigDecimal faceValue;

    private BigDecimal numberOutstanding;

    private String submission;

    private String liquidity;

    private BigDecimal specialRights;

    private LocalDate exdividendDate;

}

```

## src/main/java/com/nubo/master/instruments/api/models/dto/response/ExchangeRateOutDto.java

```java
package com.nubo.master.instruments.api.models.dto.response;

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
public class ExchangeRateOutDto {

    private Long id;

    private CurrencyOutDto baseCurrency;

    private LocalDate validityDate;

    private CurrencyOutDto conversionCurrency;

    private BigDecimal conversionValue;

    private LocalDate recordDate;

}

```

## src/main/java/com/nubo/master/instruments/api/models/dto/response/FixedIncomeSecurityOutDto.java

```java
package com.nubo.master.instruments.api.models.dto.response;

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
public class FixedIncomeSecurityOutDto {

    private SecurityTitleOutDto security;

    private LocalDate maturityDate;

    private String description;

    private LocalDate firstCuponDate;

    private Integer couponFrequency;

    private BigDecimal initialParValue;

    private BigDecimal nominalValue;

    private BigDecimal couponInterest;

    private BigDecimal minimumUnit;

    private LocalDate issueDate;

    private Integer rateUsageMethod;

    private TypeOutDto rateType;

    private Integer rateValue;

    private BigDecimal spread;

    private TypeOutDto periodicityType;

    private TypeOutDto paymentType;

    private BigDecimal fractionationMultiple;

    private TypeOutDto liquidationType;

}

```

## src/main/java/com/nubo/master/instruments/api/models/dto/response/GicsOutDto.java

```java
package com.nubo.master.instruments.api.models.dto.response;

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

## src/main/java/com/nubo/master/instruments/api/models/dto/response/IdentificationTypeOutDto.java

```java
package com.nubo.master.instruments.api.models.dto.response;

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

## src/main/java/com/nubo/master/instruments/api/models/dto/response/InvestorAccountOutDto.java

```java
package com.nubo.master.instruments.api.models.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class InvestorAccountOutDto {

    private Long id;

    private InvestorOutDto investor;

    private String accountNumber;

    private StatusOutDto status;

    private TypeOutDto type;

    private DepositoryOutDto depository;

    private ParticipantOutDto participant;

    private String principalStatus;

    private String relationalType;

}

```

## src/main/java/com/nubo/master/instruments/api/models/dto/response/InvestorOutDto.java

```java
package com.nubo.master.instruments.api.models.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class InvestorOutDto {

    private Long id;

    private String code;

    private String firstName;

    private String lastName;

    private String fullName;

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

    private Boolean taxExemp;

    private TaxStatusOutDto taxStatus;

}

```

## src/main/java/com/nubo/master/instruments/api/models/dto/response/InvestorSimpleOutDto.java

```java
package com.nubo.master.instruments.api.models.dto.response;

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
public class InvestorSimpleOutDto {

    private Long id;

    private String fullName;

    private String documentNumber;

}

```

## src/main/java/com/nubo/master/instruments/api/models/dto/response/IsinNumberOutDto.java

```java
package com.nubo.master.instruments.api.models.dto.response;

import java.time.LocalDate;

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
public class IsinNumberOutDto {

    private Long id;

    private String isinNumber;

    private String isinCode;

    private String description;

    private String countryCode;

    private LocalDate assignmentDate;

    private String status;

    private String category;

}

```

## src/main/java/com/nubo/master/instruments/api/models/dto/response/IssuerOutDto.java

```java
package com.nubo.master.instruments.api.models.dto.response;

import java.time.LocalDate;

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
public class IssuerOutDto {

    private Long id;

    private String code;

    private String name;

    private String shortName;

    private TypeOutDto type;

    private CountryOutDto country;

    private GicsOutDto gics;

    private LocalDate dateEntry;

    private CountryOutDto countryOrigin;

    private String cusip;

    private String taxCode;

    private StatusOutDto status;

    private LocalDate withdrawalDate;

    private String mainMarket;

    private String regulatorCode;

    private DepositoryOutDto depository;

    private String dvlCode;

    private String creditRating;

}

```

## src/main/java/com/nubo/master/instruments/api/models/dto/response/JointAccountOutDto.java

```java
package com.nubo.master.instruments.api.models.dto.response;

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
public class JointAccountOutDto {

    private Long id;

    private InvestorAccountOutDto investorAccount;

    private IdentificationTypeOutDto identificationType;

    private String documentNumber;

    private String firstName;

    private String lastName;

    private String companyName;

}

```

## src/main/java/com/nubo/master/instruments/api/models/dto/response/MarketOutDto.java

```java
package com.nubo.master.instruments.api.models.dto.response;

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
public class MarketOutDto {

    private String id;

    private String description;

    private String category;

}

```

## src/main/java/com/nubo/master/instruments/api/models/dto/response/PageResponseOutDto.java

```java
package com.nubo.master.instruments.api.models.dto.response;

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
public class PageResponseOutDto<T> {

    private List<T> content;

    private Integer pageSize;

    private Integer pageNumber;

    private Long totalElements;

    private Integer totalPages;

}

```

## src/main/java/com/nubo/master/instruments/api/models/dto/response/ParticipantOutDto.java

```java
package com.nubo.master.instruments.api.models.dto.response;

import java.time.LocalDate;

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

## src/main/java/com/nubo/master/instruments/api/models/dto/response/RiskModelLoanOutDto.java

```java
package com.nubo.master.instruments.api.models.dto.response;

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
public class RiskModelLoanOutDto {

    private BigDecimal referenceAveragePrice;
    private BigDecimal averageAmount;
    private BigDecimal concentrationRisk;

}

```

## src/main/java/com/nubo/master/instruments/api/models/dto/response/SecurityTitleOutDto.java

```java
package com.nubo.master.instruments.api.models.dto.response;

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
public class SecurityTitleOutDto {

    private Long id;

    private Long securityId;

    private String equityCode;

    private String mnemonic;

    private String isin;

    private IssuerOutDto issuer;

    private DepositoryOutDto depository;

    private StatusOutDto status;

    private String description;

    private ClassOutDto instrumentClass;

    private CfiOutDto cfi;

    private CurrencyOutDto currency;

    private CountryOutDto country;

    private SegmentOutDto segment;

}

```

## src/main/java/com/nubo/master/instruments/api/models/dto/response/SecurityTitleSuspendedHistoryOutDto.java

```java
package com.nubo.master.instruments.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
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
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class SecurityTitleSuspendedHistoryOutDto {

    private Long id;

    private SecurityTitleOutDto securityTitle;

    private TypeOutDto actionType;

    private TypeOutDto processType;

    private LocalDate effectiveDate;

    private String description;

    private String lastModifyUser;

    private LocalDateTime lastModifyDate;

}

```

## src/main/java/com/nubo/master/instruments/api/models/dto/response/SegmentOutDto.java

```java
package com.nubo.master.instruments.api.models.dto.response;

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
public class SegmentOutDto {

    private Long id;

    private String description;

}

```

## src/main/java/com/nubo/master/instruments/api/models/dto/response/StatusOutDto.java

```java
package com.nubo.master.instruments.api.models.dto.response;

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
public class StatusOutDto {

    private Long id;

    private String description;

    private String category;

}

```

## src/main/java/com/nubo/master/instruments/api/models/dto/response/TaxStatusOutDto.java

```java
package com.nubo.master.instruments.api.models.dto.response;

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

## src/main/java/com/nubo/master/instruments/api/models/dto/response/TypeOutDto.java

```java
package com.nubo.master.instruments.api.models.dto.response;

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
public class TypeOutDto {

    private Long id;

    private String description;

    private String category;

    private String detail;

}

```

## src/main/java/com/nubo/master/instruments/api/models/dto/response/ValidateGuaranteeCalculateOutDto.java

```java
package com.nubo.master.instruments.api.models.dto.response;

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
public class ValidateGuaranteeCalculateOutDto {

    private Boolean valid;

    private String reason;

}

```

## src/main/java/com/nubo/master/instruments/api/models/entity/CfiEntity.java

```java
package com.nubo.master.instruments.api.models.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
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
@Table(name = "\"CFI\"", schema = "\"NUANBODB\"")
public class CfiEntity {

    @Id
    @Column(name = "\"CFI_ID\"", length = 6, nullable = false)
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

## src/main/java/com/nubo/master/instruments/api/models/entity/ClassEntity.java

```java
package com.nubo.master.instruments.api.models.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
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

}

```

## src/main/java/com/nubo/master/instruments/api/models/entity/ConditionEntity.java

```java
package com.nubo.master.instruments.api.models.entity;

import java.time.LocalDateTime;

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
@Table(name = "\"CONDITION\"", schema = "\"NUANBODB\"")
public class ConditionEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"CONDITION_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"CODE\"")
    private Integer code;

    @Column(name = "\"CATEGORY\"", length = 30)
    private String category;

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

## src/main/java/com/nubo/master/instruments/api/models/entity/CorporateActionsEntity.java

```java
package com.nubo.master.instruments.api.models.entity;

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

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"CORPORATE_ACTIONS\"", schema = "\"NUANBODB\"")
public class CorporateActionsEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"CORPORATE_ACTIONS_ID\"")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "\"SECURITY_ID\"")
    private SecurityTitleEntity securityTitle;

    @ManyToOne
    @JoinColumn(name = "\"ISIN_NUMBER_ID\"")
    private ISINNumberEntity isinNumber;

    @ManyToOne
    @JoinColumn(name = "\"CURRENCY_ID\"")
    private CurrencyEntity currency;

    @ManyToOne
    @JoinColumn(name = "\"TYPE_ID\"")
    private TypeEntity type;

    @Column(name = "\"MEETING_DATE\"")
    private LocalDate meetingDate;

    @Column(name = "\"EVENT_START_DATE\"")
    private LocalDate eventStartDate;

    @Column(name = "\"EVENT_END_DATE\"")
    private LocalDate eventEndDate;

    @Column(name = "\"CUT_OFF_DATE\"")
    private LocalDate cutOffDate;

    @Column(name = "\"RECORD_DATE\"")
    private LocalDate recordDate;

    @Column(name = "\"PAYMENT_DATE\"")
    private LocalDate paymentDate;

    @Column(name = "\"ADJUSTED_FACTOR\"", precision = 16, scale = 6)
    private BigDecimal adjustedFactor;

    @Column(name = "\"PAYMENT_FACTOR\"", precision = 16, scale = 6)
    private BigDecimal paymentFactor;

    @ManyToOne
    @JoinColumn(name = "\"PAYMENT_CURRENCY_ID\"")
    private CurrencyEntity paymentCurrency;

    @Column(name = "\"TOTAL_AMOUNT\"", precision = 18, scale = 2)
    private BigDecimal totalAmount;

    @Column(name = "\"EVENT_DESCRIPTION\"")
    private String eventDescription;

    @ManyToOne
    @JoinColumn(name = "\"COUNTRY_ID\"")
    private CountryEntity country;

    @ManyToOne
    @JoinColumn(name = "\"ISSUER_ID\"")
    private IssuerEntity issuer;

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

## src/main/java/com/nubo/master/instruments/api/models/entity/CountryEntity.java

```java
package com.nubo.master.instruments.api.models.entity;

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
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
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

    @ManyToOne
    @JoinColumn(name = "\"CURRENCY_ID\"", nullable = false)
    private CurrencyEntity currency;

    @Column(name = "\"TIME_ZONE\"", length = 30)
    private String timeZone;

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

## src/main/java/com/nubo/master/instruments/api/models/entity/CurrencyEntity.java

```java
package com.nubo.master.instruments.api.models.entity;

import java.time.LocalDateTime;

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

}

```

## src/main/java/com/nubo/master/instruments/api/models/entity/DataRiesgoDiaEntity.java

```java
package com.nubo.master.instruments.api.models.entity;

import jakarta.persistence.Access;
import jakarta.persistence.AccessType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.Table;
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
@IdClass(DataRiesgoDiaKey.class)
@Access(AccessType.FIELD)
@Table(name = "data_riesgo_dia", schema = "\"NUARIEDB\"")
public class DataRiesgoDiaEntity {

    @Id
    @Column(name = "fecha")
    private LocalDate fecha;

    @Id
    @Column(name = "nemotecnico")
    private String mnemonic;

    @Id
    @Column(name = "mercado")
    private String mercado;

    @Id
    @Column(name = "pais")
    private String pais;

    @Id
    @Column(name = "isin")
    private String isin;

    @Id
    @Column(name = "moneda")
    private String moneda;

    @Column(name = "precio", precision = 18, scale = 6)
    private BigDecimal price;

    @Column(name = "precio_medio", precision = 18, scale = 6)
    private BigDecimal averagePrice;

    @Column(name = "riesgo_concentracion", precision = 18, scale = 6)
    private BigDecimal concentrationRisk;

    @Column(name = "monto_promedio", precision = 18, scale = 6)
    private BigDecimal averageAmount;

}

```

## src/main/java/com/nubo/master/instruments/api/models/entity/DataRiesgoDiaKey.java

```java
package com.nubo.master.instruments.api.models.entity;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class DataRiesgoDiaKey implements Serializable {

    private LocalDate fecha;

    private String mnemonic;

    private String mercado;

    private String pais;

    private String isin;

    private String moneda;

}

```

## src/main/java/com/nubo/master/instruments/api/models/entity/DepositoryEntity.java

```java
package com.nubo.master.instruments.api.models.entity;

import java.time.LocalDateTime;

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

    @Column(name = "\"DESCRIPTION\"", length = 80)
    private String description;

    @ManyToOne
    @JoinColumn(name = "\"COUNTRY_ID\"")
    private CountryEntity country;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 250, nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50, nullable = false)
    private String lastModifyIp;

    @Column(name = "\"CODE\"", length = 80)
    private String code;

}

```

## src/main/java/com/nubo/master/instruments/api/models/entity/EquitySecurityEntity.java

```java
package com.nubo.master.instruments.api.models.entity;

import java.math.BigDecimal;
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
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"EQUITY_SECURITY\"", schema = "\"NUANBODB\"")
public class EquitySecurityEntity {

    @Id
    @Column(name = "\"SECURITY_ID\"", nullable = false)
    private Long securityId;

    @ManyToOne
    @JoinColumn(name = "\"SECURITY_ID\"", insertable = false, updatable = false)
    private SecurityTitleEntity securityTitle;

    @Column(name = "\"PARENT\"")
    private Boolean parent;

    @Column(name = "\"AMOUNT_ISSUED\"", precision = 20)
    private BigDecimal amountIssued;

    @Column(name = "\"NOMINAL_PRICE\"", precision = 16, scale = 8)
    private BigDecimal nominalPrice;

    @Column(name = "\"NOMINAL_PRICE_DATE\"")
    private LocalDate nominalPriceDate;

    @Column(name = "\"NEGOTIATE\"")
    private Boolean negotiate;

    @Column(name = "\"DATE_EQUITY_VALUE\"")
    private LocalDate dateEquityValue;

    @Column(name = "\"EQUITY_VALUE\"", precision = 18, scale = 2)
    private BigDecimal equityValue;

    @Column(name = "\"DATE_FACE_VALUE\"")
    private LocalDate dateFaceValue;

    @Column(name = "\"FACE_VALUE\"", precision = 18, scale = 2)
    private BigDecimal faceValue;

    @Column(name = "\"NUMBER_OUTSTANDING\"", precision = 20)
    private BigDecimal numberOutstanding;

    @Column(name = "\"SUBMISSION\"", length = 1)
    private String submission;

    @Column(name = "\"LIQUIDITY\"", length = 1)
    private String liquidity;

    @Column(name = "\"SPECIAL_RIGHTS\"", precision = 8)
    private BigDecimal specialRights;

    @Column(name = "\"EXDIVIDEND_DATE\"")
    private LocalDate exdividendDate;

    @Column(name = "\"TRADES_ON_LOAN\"")
    private Boolean tradesOnLoan;

    @Column(name = "\"TRADES_ON_REPO\"")
    private Boolean tradesOnRepo;

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

## src/main/java/com/nubo/master/instruments/api/models/entity/FixedIncomeSecurityEntity.java

```java
package com.nubo.master.instruments.api.models.entity;

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
import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"FIXED_INCOME_SECURITY\"", schema = "\"NUANBODB\"")
public class FixedIncomeSecurityEntity {

    @Id
    @Column(name = "\"SECURITY_ID\"", nullable = false)
    private Long securityId;

    @ManyToOne
    @JoinColumn(name = "\"SECURITY_ID\"", insertable = false, updatable = false)
    private SecurityTitleEntity securityTitle;

    @Column(name = "\"MATURITY_DATE\"")
    private LocalDate maturityDate;

    @Column(name = "\"DESCRIPTION\"")
    private String description;

    @Column(name = "\"FIRST_CUPON_DATE\"")
    private LocalDate firstCuponDate;

    @Column(name = "\"COUPON_FRECUENCY\"")
    private Integer couponFrequency;

    @Column(name = "\"INITIAL_PAR_VALUE\"", precision = 20, scale = 8)
    private BigDecimal initialParValue;

    @Column(name = "\"NOMINAL_VALUE\"", precision = 20, scale = 8)
    private BigDecimal nominalValue;

    @Column(name = "\"COUPON_INTEREST\"", precision = 15, scale = 2)
    private BigDecimal couponInterest;

    @Column(name = "\"MINIMUM_UNIT\"", precision = 14, scale = 2)
    private BigDecimal minimumUnit;

    @Column(name = "\"ISSUE_DATE\"")
    private LocalDate issueDate;

    @Column(name = "\"RATE_USAGE_METHOD\"")
    private Integer rateUsageMethod;

    @ManyToOne
    @JoinColumn(name = "\"RATE_TYPE_ID\"")
    private TypeEntity rateType;

    @Column(name = "\"RATE_VALUE\"")
    private Integer rateValue;

    @Column(name = "\"SPREAD\"", precision = 5, scale = 2)
    private BigDecimal spread;

    @ManyToOne
    @JoinColumn(name = "\"PERIODICITY_TYPE_ID\"")
    private TypeEntity periodicityType;

    @ManyToOne
    @JoinColumn(name = "\"PAYMENT_TYPE_ID\"")
    private TypeEntity paymentType;

    @Column(name = "\"FRACTIONATION_MULTIPLE\"", precision = 16, scale = 4)
    private BigDecimal fractionationMultiple;

    @ManyToOne
    @JoinColumn(name = "\"LIQUIDATION_TYPE_ID\"")
    private TypeEntity liquidationType;

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

## src/main/java/com/nubo/master/instruments/api/models/entity/GicsEntity.java

```java
package com.nubo.master.instruments.api.models.entity;

import java.time.LocalDateTime;

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

## src/main/java/com/nubo/master/instruments/api/models/entity/ISINNumberEntity.java

```java
package com.nubo.master.instruments.api.models.entity;

import java.math.BigDecimal;
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
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"ISIN_NUMBER\"", schema = "\"NUANBODB\"")
public class ISINNumberEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"ISIN_NUMBER_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"ISIN_NUMBER\"", length = 100, nullable = false)
    private String isinNumber;

    @ManyToOne
    @JoinColumn(name = "\"COUNTRY_ID\"", nullable = false)
    private CountryEntity country;

    @ManyToOne
    @JoinColumn(name = "\"MARKET_ID\"", nullable = false)
    private MarketEntity market;

    @ManyToOne
    @JoinColumn(name = "\"CURRENCY_ID\"", nullable = false)
    private CurrencyEntity currency;

    @ManyToOne
    @JoinColumn(name = "\"SECURITY_ID\"", nullable = false)
    private SecurityTitleEntity security;

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

    @ManyToOne
    @JoinColumn(name = "\"USE_RATE_CONDITION_ID\"")
    private ConditionEntity useRateCondition;

    @ManyToOne
    @JoinColumn(name = "\"PERIODICITY_CONDITION_ID\"")
    private ConditionEntity periodicityCondition;

    @ManyToOne
    @JoinColumn(name = "\"PAYMENT_CONDITION_ID\"")
    private ConditionEntity paymentCondition;

    @ManyToOne
    @JoinColumn(name = "\"RATE_CONDITION_ID\"")
    private ConditionEntity rateCondition;

    @Column(name = "\"DEPOSITORY_ID\"", length = 2)
    private String depositoryId;

}

```

## src/main/java/com/nubo/master/instruments/api/models/entity/IssuerEntity.java

```java
package com.nubo.master.instruments.api.models.entity;

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

    @Column(name = "\"CREDIT_RATING\"")
    private String creditRating;

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

## src/main/java/com/nubo/master/instruments/api/models/entity/MarketEntity.java

```java
package com.nubo.master.instruments.api.models.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
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
@Table(name = "\"MARKET\"", schema = "\"NUANBODB\"")
public class MarketEntity {

    @Id
    @Column(name = "\"MARKET_ID\"", length = 2)
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

    @Column(name = "\"CODE\"", length = 10, nullable = false)
    private String code;
}

```

## src/main/java/com/nubo/master/instruments/api/models/entity/SecurityTitleEntity.java

```java
package com.nubo.master.instruments.api.models.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"SECURITY_TITLE\"", schema = "\"NUANBODB\"")
public class SecurityTitleEntity {

    @Id
    @Column(name = "\"SECURITY_ID\"", nullable = false)
    private Long securityId;

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
    @JoinColumn(name = "\"CFI_ID\"")
    private CfiEntity cfi;

    @ManyToOne
    @JoinColumn(name = "\"CURRENCY_ID\"")
    private CurrencyEntity currency;

    @Column(name = "\"SETTLEMENT_PERIOD\"", length = 2)
    private String settlementPeriod;

    @Column(name = "\"LISTING_DATE\"")
    private LocalDate listingDate;

    @Column(name = "\"DELISTING_DATE\"")
    private LocalDate delistingDate;

    @Column(name = "\"PARENT\"")
    private Boolean parent;

    @Column(name = "\"PARENT_ID\"")
    private Long parentId;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"")
    private StatusEntity status;

    @ManyToOne
    @JoinColumn(name = "\"ISSUER_ID\"")
    private IssuerEntity issuer;

    @ManyToOne
    @JoinColumn(name = "\"COUNTRY_ID\"")
    private CountryEntity country;

    @Column(name = "\"AMOUNT_ISSUED\"", precision = 20)
    private BigInteger amountIssued;

    @ManyToOne
    @JoinColumn(name = "\"CLASS_ID\"")
    private ClassEntity classEntity;

    @ManyToOne
    @JoinColumn(name = "\"SEGMENT_ID\"")
    private SegmentEntity segment;

    @Column(name = "\"CATEGORY\"", length = 20)
    private String category;

    @ManyToOne
    @JoinColumn(name = "\"DEPOSITORY_ID\"")
    private DepositoryEntity depository;

    @Column(name = "\"PUNISHMENT_REPO\"", precision = 5, scale = 4)
    private BigDecimal punishmentRepo;

    @Column(name = "\"REGULATORY_CODE\"", length = 12)
    private String regulatoryCode;

    @OneToMany(mappedBy = "securityTitle")
    private List<EquitySecurityEntity> equitySecurities;

    @OneToMany(mappedBy = "security", fetch = FetchType.LAZY)
    private List<ISINNumberEntity> isinNumbers;

    @Column(name = "\"SUSPENDED_NEGOTIATION\"")
    private Boolean suspendedNegotiation;

    @Column(name = "\"SUSPENDED_EFFECTIVE_DATE\"")
    private LocalDate suspendedEffectiveDate;

    @ManyToOne
    @JoinColumn(name = "\"SUSPENDED_PROCESS_TYPE_ID\"")
    private TypeEntity suspendedProcessType;

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

## src/main/java/com/nubo/master/instruments/api/models/entity/SecurityTitleSuspendedHistoryEntity.java

```java
package com.nubo.master.instruments.api.models.entity;

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

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"SECURITY_TITLE_SUSPENDED_HISTORY\"", schema = "\"NUANBODB\"")
public class SecurityTitleSuspendedHistoryEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"SECURITY_TITLE_SUSPENDED_HISTORY_ID\"", nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "\"SECURITY_ID\"")
    private SecurityTitleEntity securityTitle;

    @ManyToOne
    @JoinColumn(name = "\"ACTION_TYPE_ID\"")
    private TypeEntity actionType;

    @ManyToOne
    @JoinColumn(name = "\"PROCESS_TYPE_ID\"")
    private TypeEntity processType;

    @Column(name = "\"EFFECTIVE_DATE\"")
    private LocalDate effectiveDate;

    @Column(name = "\"DESCRIPTION\"", length = 150)
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

## src/main/java/com/nubo/master/instruments/api/models/entity/SegmentEntity.java

```java
package com.nubo.master.instruments.api.models.entity;

import java.time.LocalDateTime;

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
@Table(name = "\"SEGMENT\"", schema = "\"NUANBODB\"")
public class SegmentEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"SEGMENT_ID\"", nullable = false)
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

## src/main/java/com/nubo/master/instruments/api/models/entity/SideEntity.java

```java
package com.nubo.master.instruments.api.models.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
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
@Table(name = "\"SIDE\"", schema = "\"NUANBODB\"")
public class SideEntity {

    @Id
    @Column(name = "\"SIDE_ID\"", length = 2)
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

## src/main/java/com/nubo/master/instruments/api/models/entity/StatusEntity.java

```java
package com.nubo.master.instruments.api.models.entity;

import java.time.LocalDateTime;

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

}

```

## src/main/java/com/nubo/master/instruments/api/models/entity/TypeEntity.java

```java
package com.nubo.master.instruments.api.models.entity;

import java.time.LocalDateTime;

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

    @Column(name = "\"DETAIL\"")
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

## src/main/java/com/nubo/master/instruments/api/models/enums/CountryEnum.java

```java
package com.nubo.master.instruments.api.models.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Arrays;
import java.util.Objects;

@Getter
@RequiredArgsConstructor
public enum CountryEnum {

    PERU(35L),
    COLOMBIA(37L),
    CHILE(135L);

    private final Long value;

    @JsonValue
    public Long getValue() {
        return value;
    }

    @JsonCreator
    public static CountryEnum fromValue(Long value) {
        return Arrays.stream(CountryEnum.values())
                .filter(status -> Objects.equals(status.value, value))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Unknown value: " + value));
    }

}

```

## src/main/java/com/nubo/master/instruments/api/models/enums/PrincipalStatusEnum.java

```java
package com.nubo.master.instruments.api.models.enums;

import java.util.Arrays;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum PrincipalStatusEnum {

    PRINCIPAL("Principal", true),
    SECUNDARIO("Secundario", false);

    private final String value;
    private final Boolean booleanValue;

    @JsonValue
    public String getValue() {
        return value;
    }

    @JsonCreator
    public static PrincipalStatusEnum fromValue(String value) {
        return Arrays.stream(PrincipalStatusEnum.values())
                .filter(status -> status.getValue().equalsIgnoreCase(value))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Invalid principal status: " + value));
    }

    public static PrincipalStatusEnum fromBoolean(Boolean value) {
        if (value == null)
            return null;
        return value ? PRINCIPAL : SECUNDARIO;
    }

    public static Boolean toBoolean(String value) {
        if (value == null)
            return null;
        return fromValue(value).getBooleanValue();
    }
}

```

## src/main/java/com/nubo/master/instruments/api/models/enums/PropertiesEnum.java

```java
package com.nubo.master.instruments.api.models.enums;

import java.util.Arrays;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum PropertiesEnum
{

    CLIENT_IP("client_ip"),
    CLIENT_USER("client_user"),
    CLIENT_DATETIME("client_datetime"),
    VERSION_API("version_api"),
    AUTH_TOKEN("auth_token"),
    INSTRUMENTS_RV_CATEGORY("instrumento_rv");

    private final String value;

    @JsonValue
    public String getValue()
    {
        return value;
    }

    @JsonCreator
    public static PropertiesEnum fromValue(String value)
    {
        return Arrays.stream(PropertiesEnum.values())
                .filter(status -> status.value.equalsIgnoreCase(value))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Unknown value: " + value));
    }

    @Converter(autoApply = true)
    public static class PropertiesEnumConverter implements AttributeConverter<PropertiesEnum, String>
    {

        @Override
        public String convertToDatabaseColumn(PropertiesEnum status)
        {
            return status != null ? status.getValue() : null;
        }

        @Override
        public PropertiesEnum convertToEntityAttribute(String dbData)
        {
            return dbData != null ? PropertiesEnum.fromValue(dbData) : null;
        }
    }

}

```

## src/main/java/com/nubo/master/instruments/api/models/enums/RepoSimultaneousBusinessEnum.java

```java
package com.nubo.master.instruments.api.models.enums;

import java.util.Arrays;
import java.util.Objects;
import java.util.Optional;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum RepoSimultaneousBusinessEnum {

    YES("Sí", true), 
    NO("No", false), 
    INDEFINIDO("Indefinido", null);

    private final String value;
    private final Boolean booleanValue;

    @JsonValue
    public String getValue() {
        return value;
    }

    @JsonCreator
    public static RepoSimultaneousBusinessEnum fromValue(String value) {
        return Arrays.stream(values())
                .filter(status -> status.value.equalsIgnoreCase(value))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Invalid repo simultaneous business status: " + value));
    }

    public static RepoSimultaneousBusinessEnum fromBoolean(Boolean value) {
        return Optional.ofNullable(value)
                .map(val -> val ? YES : NO)
                .orElse(INDEFINIDO);
    }

    public static Boolean toBoolean(String value) {
        return fromValue(value).booleanValue;
    }

    public boolean equalsValue(String value) {
        return Objects.equals(this.value, value);
    }
}

```

## src/main/java/com/nubo/master/instruments/api/models/enums/SearchOperationEnum.java

```java
package com.nubo.master.instruments.api.models.enums;

import java.util.Arrays;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

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
                .orElseThrow(() -> new IllegalArgumentException("Unknown operation: " + value));
    }

}

```

## src/main/java/com/nubo/master/instruments/api/models/enums/TypeCategoryEnum.java

```java
package com.nubo.master.instruments.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum TypeCategoryEnum {

    CORPORATE_EVENT("EVENTO_CORPORATIVO");

    private final String category;

}

```

## src/main/java/com/nubo/master/instruments/api/models/enums/TypeSecurityTitletActionEnum.java

```java
package com.nubo.master.instruments.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum TypeSecurityTitletActionEnum {

    SUSPENDED(2120L),
    NO_SUSPENDED(2121L);

    private final Long id;

}

```

## src/main/java/com/nubo/master/instruments/api/models/enums/VersionApiEnum.java

```java
package com.nubo.master.instruments.api.models.enums;

import java.util.Arrays;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;
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

## src/main/java/com/nubo/master/instruments/api/repository/CfiRepository.java

```java
package com.nubo.master.instruments.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.master.instruments.api.models.entity.CfiEntity;

public interface CfiRepository extends JpaRepository<CfiEntity, String> {
}

```

## src/main/java/com/nubo/master/instruments/api/repository/ClassRepository.java

```java
package com.nubo.master.instruments.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.master.instruments.api.models.entity.ClassEntity;

public interface ClassRepository extends JpaRepository<ClassEntity, String> {
    List<ClassEntity> findByCategoryIgnoreCase(String category);
}

```

## src/main/java/com/nubo/master/instruments/api/repository/ConditionRepository.java

```java
package com.nubo.master.instruments.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.master.instruments.api.models.entity.ConditionEntity;

public interface ConditionRepository extends JpaRepository<ConditionEntity, Long> {
}

```

## src/main/java/com/nubo/master/instruments/api/repository/CorporateActionsRepository.java

```java
package com.nubo.master.instruments.api.repository;

import com.nubo.master.instruments.api.models.entity.CorporateActionsEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface CorporateActionsRepository extends JpaRepository<CorporateActionsEntity, Long>,
        JpaSpecificationExecutor<CorporateActionsEntity> {
}

```

## src/main/java/com/nubo/master/instruments/api/repository/CountryRepository.java

```java
package com.nubo.master.instruments.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.master.instruments.api.models.entity.CountryEntity;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CountryRepository extends JpaRepository<CountryEntity, Long> {

    @Query("SELECT c FROM CountryEntity c WHERE c.id IN :ids")
    List<CountryEntity> findCountriesByIds(List<Long> ids);

}

```

## src/main/java/com/nubo/master/instruments/api/repository/CurrencyRepository.java

```java
package com.nubo.master.instruments.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.master.instruments.api.models.entity.CurrencyEntity;

public interface CurrencyRepository extends JpaRepository<CurrencyEntity, Long> {
}

```

## src/main/java/com/nubo/master/instruments/api/repository/DataRiesgoDiaRepository.java

```java
package com.nubo.master.instruments.api.repository;

import com.nubo.master.instruments.api.models.entity.CountryEntity;
import com.nubo.master.instruments.api.models.entity.DataRiesgoDiaEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DataRiesgoDiaRepository extends JpaRepository<DataRiesgoDiaEntity, String> {

    @Query("SELECT r FROM DataRiesgoDiaEntity r WHERE r.mnemonic IN :mnemonics")
    List<DataRiesgoDiaEntity> findDataRiesgoByMnemonics(List<String> mnemonics);
}

```

## src/main/java/com/nubo/master/instruments/api/repository/DepositoryRepository.java

```java
package com.nubo.master.instruments.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.master.instruments.api.models.entity.DepositoryEntity;

public interface DepositoryRepository extends JpaRepository<DepositoryEntity, String> {
    List<DepositoryEntity> findByDescriptionContainingIgnoreCase(String description);

    List<DepositoryEntity> findAllByCountryId(Long countryId);
}

```

## src/main/java/com/nubo/master/instruments/api/repository/EquityInstrumentLoanRepository.java

```java
package com.nubo.master.instruments.api.repository;

import com.nubo.master.instruments.api.models.entity.SecurityTitleEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface EquityInstrumentLoanRepository
        extends JpaRepository<SecurityTitleEntity, Long> {

    @Query("""
        SELECT DISTINCT st FROM SecurityTitleEntity st
        JOIN FETCH st.currency
        JOIN FETCH st.status
        JOIN FETCH st.country
        JOIN FETCH st.market
        JOIN FETCH st.depository
        LEFT JOIN FETCH st.isinNumbers
        WHERE UPPER(st.mnemonic) = UPPER(:mnemonic)
    """)
    Optional<SecurityTitleEntity> findByMnemonic(String mnemonic);

    @Query("""
        SELECT st FROM SecurityTitleEntity st
        JOIN FETCH st.currency
        JOIN FETCH st.status
        JOIN FETCH st.country
        JOIN FETCH st.market
        JOIN FETCH st.depository
    """)
    Page<SecurityTitleEntity> findAllPaged(Pageable pageable);

    @Query("""
        SELECT DISTINCT st FROM SecurityTitleEntity st
        JOIN FETCH st.currency
        JOIN FETCH st.status
        JOIN FETCH st.country
        JOIN FETCH st.market
        JOIN FETCH st.depository
        LEFT JOIN FETCH st.isinNumbers
        WHERE UPPER(st.mnemonic) LIKE UPPER(CONCAT(:prefix, '%'))
          AND LENGTH(:prefix) >= 2
    """)
    List<SecurityTitleEntity> findByMnemonicPrefix(String prefix);
}

```

## src/main/java/com/nubo/master/instruments/api/repository/EquityInstrumentRepository.java

```java
package com.nubo.master.instruments.api.repository;

import com.nubo.master.instruments.api.models.entity.SecurityTitleEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface EquityInstrumentRepository extends JpaRepository<SecurityTitleEntity, Long>,
        JpaSpecificationExecutor<SecurityTitleEntity> {

    @Query("SELECT st FROM SecurityTitleEntity st " +
            "LEFT JOIN EquitySecurityEntity ese ON st.securityId = ese.securityId " +
            "LEFT JOIN FETCH st.issuer " +
            "LEFT JOIN FETCH st.market " +
            "LEFT JOIN FETCH st.cfi " +
            "LEFT JOIN FETCH st.status " +
            "LEFT JOIN FETCH st.depository " +
            "WHERE st.id = :securityId")
    Optional<SecurityTitleEntity> findByIdWithAssociations(@Param("securityId") Long securityId);

    @Query("SELECT st FROM SecurityTitleEntity st " +
            "INNER JOIN EquitySecurityEntity ese ON st.securityId = ese.securityId " +
            "LEFT JOIN FETCH st.market " +
            "LEFT JOIN FETCH st.cfi " +
            "LEFT JOIN FETCH st.status " +
            "LEFT JOIN FETCH st.depository " +
            "ORDER BY st.mnemonic ASC")
    Page<SecurityTitleEntity> findAllEquityInstruments(Pageable pageable);

    @Query("SELECT st FROM SecurityTitleEntity st " +
            "INNER JOIN EquitySecurityEntity ese ON st.securityId = ese.securityId " +
            "WHERE UPPER(st.mnemonic) LIKE CONCAT('%', UPPER(:mnemonic), '%') " +
            "ORDER BY st.mnemonic ASC")
    Page<SecurityTitleEntity> findByMnemonicContainsWithIgnoreCase(
            @Param("mnemonic") String mnemonic, Pageable pageable);

    @Query("SELECT st FROM SecurityTitleEntity st " +
            "INNER JOIN EquitySecurityEntity ese ON st.securityId = ese.securityId " +
            "WHERE UPPER(st.isin) LIKE CONCAT('%', UPPER(:isin), '%') " +
            "ORDER BY st.isin ASC")
    Page<SecurityTitleEntity> findByIsinCodeContainsWithIgnoreCase(
            @Param("isin") String isin, Pageable pageable);

    @Query("SELECT DISTINCT i.code FROM SecurityTitleEntity st " +
            "LEFT JOIN st.issuer i " +
            "WHERE UPPER(i.code) LIKE CONCAT('%', UPPER(:issuerCode), '%') " +
            "ORDER BY i.code ASC")
    List<String> findDistinctIssuerCodesByIssuerCodeContainsIgnoreCase(
            @Param("issuerCode") String issuerCode);

    @Query(value = """
             SELECT DISTINCT s
              FROM SecurityTitleEntity s
              LEFT JOIN FETCH s.issuer i
              LEFT JOIN FETCH s.equitySecurities es
              LEFT JOIN FETCH s.market m
              LEFT JOIN FETCH s.status st
              LEFT JOIN FETCH s.depository d
              LEFT JOIN FETCH s.segment seg
              LEFT JOIN FETCH s.cfi c
              LEFT JOIN FETCH s.classEntity ce
              LEFT JOIN FETCH s.country co
              LEFT JOIN FETCH s.currency cur
              WHERE (:mnemonic IS NULL OR s.mnemonic = :mnemonic)
              AND (:isinCode IS NULL OR s.isin = :isinCode)
              AND (:issuerCode IS NULL OR i.code = :issuerCode)
              AND (:depositoryId IS NULL OR s.depository.id = :depositoryId)
              AND (:statusId IS NULL OR s.status.id = :statusId)
              AND (:marketId IS NULL OR s.market.id = :marketId)
            """,
            countQuery = """
                            SELECT count(DISTINCT s)
                     FROM SecurityTitleEntity s
                     LEFT JOIN s.issuer i
                     WHERE (:mnemonic IS NULL OR s.mnemonic = :mnemonic)
                     AND (:isinCode IS NULL OR s.isin = :isinCode)
                     AND (:issuerCode IS NULL OR i.code = :issuerCode)
                     AND (:depositoryId IS NULL OR s.depository.id = :depositoryId)
                     AND (:statusId IS NULL OR s.status.id = :statusId)
                     AND (:marketId IS NULL OR s.market.id = :marketId)
                    """
    )
    Page<SecurityTitleEntity> findAllByByFilter(
            @Param("mnemonic") String mnemonic,
            @Param("isinCode") String isinCode,
            @Param("issuerCode") String issuerCode,
            @Param("depositoryId") Long depositoryId,
            @Param("statusId") Long statusId,
            @Param("marketId") Long marketId,
            Pageable pageable);

}

```

## src/main/java/com/nubo/master/instruments/api/repository/EquitySecurityRepository.java

```java
package com.nubo.master.instruments.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.master.instruments.api.models.entity.EquitySecurityEntity;

public interface EquitySecurityRepository extends JpaRepository<EquitySecurityEntity, Long> {
}

```

## src/main/java/com/nubo/master/instruments/api/repository/FixedIncomeSecurityRepository.java

```java
package com.nubo.master.instruments.api.repository;

import com.nubo.master.instruments.api.models.entity.FixedIncomeSecurityEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.Optional;

public interface FixedIncomeSecurityRepository
        extends JpaRepository<FixedIncomeSecurityEntity, Long>,
        JpaSpecificationExecutor<FixedIncomeSecurityEntity> {

    Optional<FixedIncomeSecurityEntity>
    findTopBySecurityTitle_SecurityIdOrderByLastModifyDateDesc(Long securityId);
}

```

## src/main/java/com/nubo/master/instruments/api/repository/GicsRepository.java

```java
package com.nubo.master.instruments.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.master.instruments.api.models.entity.GicsEntity;

public interface GicsRepository extends JpaRepository<GicsEntity, Long> {
}

```

## src/main/java/com/nubo/master/instruments/api/repository/ISINNumberRepository.java

```java
package com.nubo.master.instruments.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.master.instruments.api.models.entity.ISINNumberEntity;

public interface ISINNumberRepository extends JpaRepository<ISINNumberEntity, Long> {
}

```

## src/main/java/com/nubo/master/instruments/api/repository/IssuerRepository.java

```java
package com.nubo.master.instruments.api.repository;

import com.nubo.master.instruments.api.models.entity.IssuerEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface IssuerRepository extends JpaRepository<IssuerEntity, Long>,
        JpaSpecificationExecutor<IssuerEntity> {
}

```

## src/main/java/com/nubo/master/instruments/api/repository/MarketRepository.java

```java
package com.nubo.master.instruments.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.master.instruments.api.models.entity.MarketEntity;

public interface MarketRepository extends JpaRepository<MarketEntity, String> {
    List<MarketEntity> findByDescriptionContainingIgnoreCase(String category);

    List<MarketEntity> findByDescriptionContainingIgnoreCaseOrIdContainingIgnoreCase(String type, String typeId);
}

```

## src/main/java/com/nubo/master/instruments/api/repository/SecurityTitleRepository.java

```java
package com.nubo.master.instruments.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.master.instruments.api.models.entity.SecurityTitleEntity;

public interface SecurityTitleRepository extends JpaRepository<SecurityTitleEntity, Long> {
}

```

## src/main/java/com/nubo/master/instruments/api/repository/SecurityTitleSuspendedHistoryRepository.java

```java
package com.nubo.master.instruments.api.repository;

import com.nubo.master.instruments.api.models.entity.SecurityTitleSuspendedHistoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface SecurityTitleSuspendedHistoryRepository extends JpaRepository<SecurityTitleSuspendedHistoryEntity, Long>,
        JpaSpecificationExecutor<SecurityTitleSuspendedHistoryEntity> {
}

```

## src/main/java/com/nubo/master/instruments/api/repository/SegmentRepository.java

```java
package com.nubo.master.instruments.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.master.instruments.api.models.entity.SegmentEntity;

public interface SegmentRepository extends JpaRepository<SegmentEntity, Integer> {
}

```

## src/main/java/com/nubo/master/instruments/api/repository/StatusRepository.java

```java
package com.nubo.master.instruments.api.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.master.instruments.api.models.entity.StatusEntity;

public interface StatusRepository extends JpaRepository<StatusEntity, Long>
{

    Page<StatusEntity> findByCategoryIgnoreCase(Pageable pageable, String category);

}

```

## src/main/java/com/nubo/master/instruments/api/repository/TypeRepository.java

```java
package com.nubo.master.instruments.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.master.instruments.api.models.entity.TypeEntity;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TypeRepository extends JpaRepository<TypeEntity, Long> {

    @Query("""
            SELECT t FROM TypeEntity t 
            WHERE t.category = :category 
            ORDER BY t.id ASC
            """)
    List<TypeEntity> findByGuaranteeLimit(String category);

    List<TypeEntity> findByCategoryIgnoreCase(String category);

}

```

## src/main/java/com/nubo/master/instruments/api/service/CfiService.java

```java
package com.nubo.master.instruments.api.service;

import org.springframework.data.domain.Pageable;

import com.nubo.master.instruments.api.models.dto.response.CfiOutDto;
import com.nubo.master.instruments.api.models.dto.response.PageResponseOutDto;

public interface CfiService {

    PageResponseOutDto<CfiOutDto> findAllCfis(Pageable pageable);

    CfiOutDto findCfiById(String cfiId);

}

```

## src/main/java/com/nubo/master/instruments/api/service/ClassService.java

```java
package com.nubo.master.instruments.api.service;

import java.util.List;

import org.springframework.data.domain.Pageable;

import com.nubo.master.instruments.api.models.dto.response.ClassOutDto;
import com.nubo.master.instruments.api.models.dto.response.PageResponseOutDto;

public interface ClassService {

    PageResponseOutDto<ClassOutDto> findAllClasses(Pageable pageable);

    ClassOutDto findClassById(String classId);

    List<ClassOutDto> findClassesByCategory(String category);

}

```

## src/main/java/com/nubo/master/instruments/api/service/CorporateActionsService.java

```java
package com.nubo.master.instruments.api.service;

import com.nubo.master.instruments.api.models.dto.request.CorporateActionsParamsInDto;
import com.nubo.master.instruments.api.models.dto.request.ParamsPageInDto;
import com.nubo.master.instruments.api.models.dto.response.CorporateActionsOutDto;
import com.nubo.master.instruments.api.models.dto.response.PageResponseOutDto;

public interface CorporateActionsService {

    PageResponseOutDto<CorporateActionsOutDto> searchCorporateActions(ParamsPageInDto paramsPageInDto,
                                                                      CorporateActionsParamsInDto corporateActionsParamsInDto);

    CorporateActionsOutDto findCorporateActionsDetail(Long corporateActionId);

}

```

## src/main/java/com/nubo/master/instruments/api/service/CountryService.java

```java
package com.nubo.master.instruments.api.service;


import com.nubo.master.instruments.api.models.dto.response.CountryOutDto;

import java.util.List;

public interface CountryService {

    List<CountryOutDto> findCountries();

}

```

## src/main/java/com/nubo/master/instruments/api/service/DepositoryService.java

```java
package com.nubo.master.instruments.api.service;

import java.util.List;

import org.springframework.data.domain.Pageable;

import com.nubo.master.instruments.api.models.dto.response.DepositoryOutDto;
import com.nubo.master.instruments.api.models.dto.response.PageResponseOutDto;

public interface DepositoryService {

    PageResponseOutDto<DepositoryOutDto> findAllDepositories(Pageable pageable);

    DepositoryOutDto findDepositoryById(String depositoryId);

    List<DepositoryOutDto> findDepositoriesByCountry(Long countryId);

}

```

## src/main/java/com/nubo/master/instruments/api/service/EquityInstrumentLoanService.java

```java
package com.nubo.master.instruments.api.service;

import com.nubo.master.instruments.api.models.dto.response.EquityInstrumentLoanOutDto;
import com.nubo.master.instruments.api.models.dto.response.PageResponseOutDto;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface EquityInstrumentLoanService {

    EquityInstrumentLoanOutDto getByMnemonic(String mnemonic, Boolean includeRiskModel);

    PageResponseOutDto<EquityInstrumentLoanOutDto> list(Pageable pageable, Boolean includeRiskModel);

    List<EquityInstrumentLoanOutDto> getByPrefix(String prefix, Boolean includeRiskModel);

}

```

## src/main/java/com/nubo/master/instruments/api/service/EquityInstrumentService.java

```java
package com.nubo.master.instruments.api.service;

import com.nubo.master.instruments.api.models.dto.response.EquityInstrumentOutDto;
import com.nubo.master.instruments.api.models.dto.response.EquityInstrumentSimpleOutDto;
import com.nubo.master.instruments.api.models.dto.response.PageResponseOutDto;
import org.springframework.data.domain.Pageable;

public interface EquityInstrumentService {

    PageResponseOutDto<EquityInstrumentOutDto> findAllEquityInstruments(Pageable pageable);

    EquityInstrumentOutDto findEquityInstrumentById(Long securityId);

    PageResponseOutDto<EquityInstrumentOutDto> findEquityInstrumentsWithFilters(
            Pageable pageable,
            Long depositoryId,
            String issuerCode,
            Long statusId);

    PageResponseOutDto<EquityInstrumentOutDto> findAllEquityInstrumentsDynamic(
            Pageable pageable,
            String fieldName, String fieldValue, String operation,
            String mnemonic, String isinCode, String issuerCode,
            Long depositoryId, Long statusId, Long marketId);

    PageResponseOutDto<EquityInstrumentSimpleOutDto> findEquityInstrumentsByMnemonicStartingWith(
            String mnemonic, Pageable pageable);

    PageResponseOutDto<EquityInstrumentSimpleOutDto> findEquityInstrumentsByIsinStartingWith(
            String isin, Pageable pageable);

    PageResponseOutDto<String> findEquityInstrumentsByIssuerCodeStartingWith(
            String issuerCode, Pageable pageable);
}

```

## src/main/java/com/nubo/master/instruments/api/service/EquitySecurityService.java

```java
package com.nubo.master.instruments.api.service;

import org.springframework.data.domain.Pageable;

import com.nubo.master.instruments.api.models.dto.request.EquitySecurityInDto;
import com.nubo.master.instruments.api.models.dto.request.EquitySecurityUpdateInDto;
import com.nubo.master.instruments.api.models.dto.response.EquitySecurityOutDto;
import com.nubo.master.instruments.api.models.dto.response.PageResponseOutDto;

public interface EquitySecurityService {

    PageResponseOutDto<EquitySecurityOutDto> findAllEquitySecurity(Pageable pageable);

    EquitySecurityOutDto findEquitySecurity(Long securityId);

    EquitySecurityOutDto createEquitySecurity(EquitySecurityInDto equitySecurityInDto);

    EquitySecurityOutDto updateEquitySecurity(EquitySecurityUpdateInDto equitySecurityUpdateInDto, Long securityId);

    void deleteEquitySecurity(Long securityId);

}

```

## src/main/java/com/nubo/master/instruments/api/service/FixedIncomeSecurityService.java

```java
package com.nubo.master.instruments.api.service;

import com.nubo.master.instruments.api.models.dto.request.ParamsFixedIncomeSecurityInDto;
import com.nubo.master.instruments.api.models.dto.request.ParamsPageInDto;
import com.nubo.master.instruments.api.models.dto.response.FixedIncomeSecurityOutDto;
import com.nubo.master.instruments.api.models.dto.response.PageResponseOutDto;
import com.nubo.master.instruments.api.models.dto.response.SecurityTitleOutDto;

public interface FixedIncomeSecurityService {

    FixedIncomeSecurityOutDto findFixedIncomeSecurityBySecurityId(Long securityId);

    PageResponseOutDto<SecurityTitleOutDto> searchFixedIncomeSecurity(
            ParamsPageInDto paramsPageInDto, ParamsFixedIncomeSecurityInDto paramsFixedIncomeSecurityInDto);

}

```

## src/main/java/com/nubo/master/instruments/api/service/IssuerService.java

```java
package com.nubo.master.instruments.api.service;

import com.nubo.master.instruments.api.models.dto.request.IssuerInDto;
import com.nubo.master.instruments.api.models.dto.request.IssuerUpdateInDto;
import com.nubo.master.instruments.api.models.dto.response.IssuerOutDto;
import com.nubo.master.instruments.api.models.dto.response.PageResponseOutDto;
import org.springframework.data.domain.Pageable;

public interface IssuerService {

    PageResponseOutDto<IssuerOutDto> findAllIssuer(Pageable pageable);

    IssuerOutDto findIssuerById(Long issuerId);

    PageResponseOutDto<IssuerOutDto> searchIssuer(Pageable pageable, String issuerCode, String text);

    IssuerOutDto createIssuer(IssuerInDto issuerInDto);

    IssuerOutDto updateIssuer(Long issuerId, IssuerUpdateInDto issuerUpdateInDto);
}

```

## src/main/java/com/nubo/master/instruments/api/service/MarketService.java

```java
package com.nubo.master.instruments.api.service;

import java.util.List;

import org.springframework.data.domain.Pageable;

import com.nubo.master.instruments.api.models.dto.response.MarketOutDto;
import com.nubo.master.instruments.api.models.dto.response.PageResponseOutDto;

public interface MarketService {

    PageResponseOutDto<MarketOutDto> findAllMarkets(Pageable pageable);

    MarketOutDto findMarketById(String marketId);

    List<MarketOutDto> findMarketsByCategory(String category);

    List<MarketOutDto> findMarketsByType(String marketType);

}

```

## src/main/java/com/nubo/master/instruments/api/service/RiskModelService.java

```java
package com.nubo.master.instruments.api.service;

import com.nubo.master.instruments.api.models.dto.response.EquityInstrumentLoanOutDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

public interface RiskModelService {

    void addRiskModelByMultipleMnemonic (Boolean includeRiskModel, List<EquityInstrumentLoanOutDto> dtoList);
    void addRiskModelByMnemonic (Boolean includeRiskModel, String mnemonic, EquityInstrumentLoanOutDto dto);

}

```

## src/main/java/com/nubo/master/instruments/api/service/SecurityTitleSuspendedHistoryService.java

```java
package com.nubo.master.instruments.api.service;

import com.nubo.master.instruments.api.models.dto.request.ParamsPageInDto;
import com.nubo.master.instruments.api.models.dto.response.PageResponseOutDto;
import com.nubo.master.instruments.api.models.dto.response.SecurityTitleSuspendedHistoryOutDto;

public interface SecurityTitleSuspendedHistoryService {

    PageResponseOutDto<SecurityTitleSuspendedHistoryOutDto> findSecurityTitleSuspendedHistory(
            ParamsPageInDto paramsPageInDto, Long securityId);

}

```

## src/main/java/com/nubo/master/instruments/api/service/SecurityTitleSuspendedService.java

```java
package com.nubo.master.instruments.api.service;

import com.nubo.master.instruments.api.models.dto.request.NoSuspendedSecurityTitleInDto;
import com.nubo.master.instruments.api.models.dto.request.SuspendedSecurityTitleInDto;
import com.nubo.master.instruments.api.models.dto.response.SecurityTitleSuspendedHistoryOutDto;

public interface SecurityTitleSuspendedService {

    SecurityTitleSuspendedHistoryOutDto suspendedSecurityTitle(SuspendedSecurityTitleInDto suspendedSecurityTitleInDto);

    SecurityTitleSuspendedHistoryOutDto noSuspendedSecurityTitle(NoSuspendedSecurityTitleInDto noSuspendedSecurityTitleInDto);

}

```

## src/main/java/com/nubo/master/instruments/api/service/StatusService.java

```java
package com.nubo.master.instruments.api.service;

import org.springframework.data.domain.Pageable;

import com.nubo.master.instruments.api.models.dto.response.PageResponseOutDto;
import com.nubo.master.instruments.api.models.dto.response.StatusOutDto;

public interface StatusService
{

    PageResponseOutDto<StatusOutDto> findAllInstrumentsStatus(Pageable pageable);

}

```

## src/main/java/com/nubo/master/instruments/api/service/TypeService.java

```java
package com.nubo.master.instruments.api.service;

import com.nubo.master.instruments.api.models.dto.response.TypeOutDto;

import java.util.List;

public interface TypeService {

    List<TypeOutDto> findAllType(String category);

    List<TypeOutDto> findTypeCorporateActions();

}

```

## src/main/java/com/nubo/master/instruments/api/service/impl/CfiServiceImpl.java

```java
package com.nubo.master.instruments.api.service.impl;

import java.util.List;
import java.util.Objects;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.nubo.master.instruments.api.application.properties.PropertiesContext;
import com.nubo.master.instruments.api.exception.ServiceException;
import com.nubo.master.instruments.api.exception.error.ErrorCode;
import com.nubo.master.instruments.api.helpers.MapperPageUtil;
import com.nubo.master.instruments.api.helpers.MapperUtil;
import com.nubo.master.instruments.api.models.dto.response.CfiOutDto;
import com.nubo.master.instruments.api.models.dto.response.PageResponseOutDto;
import com.nubo.master.instruments.api.models.entity.CfiEntity;
import com.nubo.master.instruments.api.models.enums.VersionApiEnum;
import com.nubo.master.instruments.api.repository.CfiRepository;
import com.nubo.master.instruments.api.service.CfiService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class CfiServiceImpl implements CfiService {

    private final CfiRepository cfiRepository;

    @Override
    public PageResponseOutDto<CfiOutDto> findAllCfis(Pageable pageable) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllCfisV1(pageable);
        }
        throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND);
    }

    @Override
    public CfiOutDto findCfiById(String cfiId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findCfiByIdV1(cfiId);
        }
        throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND);
    }

    private PageResponseOutDto<CfiOutDto> findAllCfisV1(Pageable pageable) {
        log.info("Starting to find all CFI codes with pagination");

        Page<CfiEntity> cfiPage = cfiRepository.findAll(pageable);

        List<CfiOutDto> cfiOutDtoList = cfiPage.getContent().stream()
                .map(this::mapToCfiOutDto)
                .toList();

        log.info("Found {} CFI codes", cfiOutDtoList.size());
        return MapperPageUtil.pageToPageResponseOutDto(cfiOutDtoList, cfiPage);
    }

    private CfiOutDto findCfiByIdV1(String cfiId) {
        log.info("Starting to find CFI by ID: {}", cfiId);

        if (!StringUtils.hasText(cfiId)) {
            throw new ServiceException(ErrorCode.BAD_REQUEST);
        }

        CfiEntity cfiEntity = cfiRepository.findById(cfiId)
                .orElseThrow(() -> new ServiceException(ErrorCode.NOT_FOUND, HttpStatus.NOT_FOUND));

        CfiOutDto cfiOutDto = mapToCfiOutDto(cfiEntity);

        log.info("Found CFI: {}", cfiOutDto.getId());
        return cfiOutDto;
    }

    private CfiOutDto mapToCfiOutDto(CfiEntity cfiEntity) {
        return MapperUtil.cfiEntityToCfiOutDto(cfiEntity);
    }
}

```

## src/main/java/com/nubo/master/instruments/api/service/impl/ClassServiceImpl.java

```java
package com.nubo.master.instruments.api.service.impl;

import java.util.List;
import java.util.Objects;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.nubo.master.instruments.api.application.properties.PropertiesContext;
import com.nubo.master.instruments.api.exception.ServiceException;
import com.nubo.master.instruments.api.exception.error.ErrorCode;
import com.nubo.master.instruments.api.helpers.MapperPageUtil;
import com.nubo.master.instruments.api.helpers.MapperUtil;
import com.nubo.master.instruments.api.models.dto.response.ClassOutDto;
import com.nubo.master.instruments.api.models.dto.response.PageResponseOutDto;
import com.nubo.master.instruments.api.models.entity.ClassEntity;
import com.nubo.master.instruments.api.models.enums.VersionApiEnum;
import com.nubo.master.instruments.api.repository.ClassRepository;
import com.nubo.master.instruments.api.service.ClassService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class ClassServiceImpl implements ClassService {

    private final ClassRepository classRepository;

    @Override
    public PageResponseOutDto<ClassOutDto> findAllClasses(Pageable pageable) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllClassesV1(pageable);
        }
        throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND);
    }

    @Override
    public ClassOutDto findClassById(String classId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findClassByIdV1(classId);
        }
        throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND);
    }

    @Override
    public List<ClassOutDto> findClassesByCategory(String category) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findClassesByCategoryV1(category);
        }
        throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND);
    }

    private PageResponseOutDto<ClassOutDto> findAllClassesV1(Pageable pageable) {
        log.info("Starting to find all classes with pagination");

        Page<ClassEntity> classPage = classRepository.findAll(pageable);

        List<ClassOutDto> classOutDtoList = classPage.getContent().stream()
                .map(this::mapToClassOutDto)
                .toList();

        log.info("Found {} classes", classOutDtoList.size());
        return MapperPageUtil.pageToPageResponseOutDto(classOutDtoList, classPage);
    }

    private ClassOutDto findClassByIdV1(String classId) {
        log.info("Starting to find class by ID: {}", classId);

        if (!StringUtils.hasText(classId)) {
            throw new ServiceException(ErrorCode.BAD_REQUEST);
        }

        ClassEntity classEntity = classRepository.findById(classId)
                .orElseThrow(() -> new ServiceException(ErrorCode.NOT_FOUND, HttpStatus.NOT_FOUND));

        ClassOutDto classOutDto = mapToClassOutDto(classEntity);

        log.info("Found class: {}", classOutDto.getId());
        return classOutDto;
    }

    private List<ClassOutDto> findClassesByCategoryV1(String category) {
        log.info("Starting to find classes by category: {}", category);

        if (!StringUtils.hasText(category)) {
            throw new ServiceException(ErrorCode.BAD_REQUEST);
        }

        String categoryUpperCase = category.toUpperCase();

        List<ClassEntity> classList = classRepository.findByCategoryIgnoreCase(categoryUpperCase);
        List<ClassOutDto> classOutDtoList = classList.stream()
                .map(this::mapToClassOutDto)
                .toList();

        log.info("Found {} classes for category: {}", classOutDtoList.size(), categoryUpperCase);
        return classOutDtoList;
    }

    private ClassOutDto mapToClassOutDto(ClassEntity classEntity) {
        return MapperUtil.classEntityToClassOutDto(classEntity);
    }
}

```

## src/main/java/com/nubo/master/instruments/api/service/impl/CorporateActionsServiceImpl.java

```java
package com.nubo.master.instruments.api.service.impl;

import com.nubo.master.instruments.api.application.properties.PropertiesContext;
import com.nubo.master.instruments.api.exception.ServiceException;
import com.nubo.master.instruments.api.exception.error.ErrorCode;
import com.nubo.master.instruments.api.helpers.MapperPageUtil;
import com.nubo.master.instruments.api.helpers.MapperUtil;
import com.nubo.master.instruments.api.models.dto.request.CorporateActionsParamsInDto;
import com.nubo.master.instruments.api.models.dto.request.ParamsPageInDto;
import com.nubo.master.instruments.api.models.dto.response.CorporateActionsOutDto;
import com.nubo.master.instruments.api.models.dto.response.PageResponseOutDto;
import com.nubo.master.instruments.api.models.entity.CorporateActionsEntity;
import com.nubo.master.instruments.api.models.enums.VersionApiEnum;
import com.nubo.master.instruments.api.repository.CorporateActionsRepository;
import com.nubo.master.instruments.api.service.CorporateActionsService;
import jakarta.persistence.criteria.Predicate;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
@Slf4j
public class CorporateActionsServiceImpl implements CorporateActionsService {

    private final CorporateActionsRepository corporateActionsRepository;

    @Override
    public PageResponseOutDto<CorporateActionsOutDto> searchCorporateActions(
            ParamsPageInDto paramsPageInDto, CorporateActionsParamsInDto corporateActionsParamsInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return searchCorporateActionsV1(paramsPageInDto, corporateActionsParamsInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<CorporateActionsOutDto> searchCorporateActionsV1(
            ParamsPageInDto paramsPageInDto, CorporateActionsParamsInDto corporateActionsParamsInDto) {
        log.info("Start method searchCorporateActionsV1, corporateActionsParamsInDto -> {}", corporateActionsParamsInDto);

        Specification<CorporateActionsEntity> corporateActionsEntitySpecification = corporateActionsSpecification(corporateActionsParamsInDto);

        PageResponseOutDto<CorporateActionsOutDto> pageResponseOutDto;
        List<CorporateActionsOutDto> corporateActionsOutDtoList = new ArrayList<>();
        if (paramsPageInDto.isAll()) {
            List<CorporateActionsEntity> corporateActionsEntityList = corporateActionsRepository.findAll(corporateActionsEntitySpecification);

            corporateActionsEntityList.forEach(corporateActionsEntity ->
                    corporateActionsOutDtoList.add(MapperUtil.corporateActionsEntityToCorporateActionsOutDtoPageable(corporateActionsEntity)));

            pageResponseOutDto = buildPageResponseCorporateActions(corporateActionsOutDtoList,
                    0, corporateActionsOutDtoList.size(), corporateActionsOutDtoList.size());
        } else {
            Sort sortBy = paramsPageInDto.getOrder().equalsIgnoreCase(Sort.Direction.ASC.name())
                    ? Sort.by(Sort.Order.asc(paramsPageInDto.getSort()), Sort.Order.asc("id"))
                    : Sort.by(Sort.Order.desc(paramsPageInDto.getSort()), Sort.Order.desc("id"));
            Pageable pageable = PageRequest.of(paramsPageInDto.getPage(), paramsPageInDto.getSize(), sortBy);

            Page<CorporateActionsEntity> guaranteeLimitsEntityPage = corporateActionsRepository.findAll(corporateActionsEntitySpecification,
                    pageable);

            guaranteeLimitsEntityPage.getContent().forEach(guaranteeLimitsEntity ->
                    corporateActionsOutDtoList.add(MapperUtil.corporateActionsEntityToCorporateActionsOutDtoPageable(guaranteeLimitsEntity)));

            pageResponseOutDto = buildPageResponseCorporateActions(corporateActionsOutDtoList,
                    paramsPageInDto.getPage(), paramsPageInDto.getSize(), (int) guaranteeLimitsEntityPage.getTotalElements());
        }


        log.info("End method searchCorporateActionsV1, pageResponseOutDto -> {}", pageResponseOutDto);

        return pageResponseOutDto;
    }

    @Override
    public CorporateActionsOutDto findCorporateActionsDetail(Long corporateActionId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findCorporateActionsDetailV1(corporateActionId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private CorporateActionsOutDto findCorporateActionsDetailV1(Long corporateActionId) {
        log.info("Start method findCorporateActionsDetailV1, corporateActionId -> {}", corporateActionId);

        CorporateActionsEntity corporateActionsEntity = validateCorporateAction(corporateActionId);

        CorporateActionsOutDto corporateActionsOutDto = MapperUtil.corporateActionsEntityToCorporateActionsOutDtoDetail(corporateActionsEntity);

        log.info("End method findCorporateActionsDetailV1, corporateActionsOutDto -> {}", corporateActionsOutDto);

        return corporateActionsOutDto;
    }

    private Specification<CorporateActionsEntity> corporateActionsSpecification(CorporateActionsParamsInDto corporateActionsParamsInDto) {
        return (root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();
            if (!ObjectUtils.isEmpty(corporateActionsParamsInDto.getDateEvent())) {
                predicates.add(criteriaBuilder.equal(root.get("paymentDate"), corporateActionsParamsInDto.getDateEvent()));
            }
            if (!ObjectUtils.isEmpty(corporateActionsParamsInDto.getCountryId())) {
                predicates.add(criteriaBuilder.equal(root.get("country").get("id"), corporateActionsParamsInDto.getCountryId()));
            }
            if (!ObjectUtils.isEmpty(corporateActionsParamsInDto.getIssuerId())) {
                predicates.add(criteriaBuilder.equal(root.get("issuer").get("id"), corporateActionsParamsInDto.getIssuerId()));
            }
            if (!ObjectUtils.isEmpty(corporateActionsParamsInDto.getTypeId())) {
                predicates.add(criteriaBuilder.equal(root.get("type").get("id"), corporateActionsParamsInDto.getTypeId()));
            }
            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }

    private PageResponseOutDto<CorporateActionsOutDto> buildPageResponseCorporateActions(
            List<CorporateActionsOutDto> content, int page, int size, int totalElements) {
        Page<CorporateActionsOutDto> corporateActionsPage = new PageImpl<>(content,
                PageRequest.of(page, size), totalElements);
        return MapperPageUtil.pageToPageResponseOutDto(content, corporateActionsPage);
    }

    private CorporateActionsEntity validateCorporateAction(Long corporateAction) {
        return corporateActionsRepository.findById(corporateAction)
                .orElseThrow(() -> new ServiceException(ErrorCode.CORPORATE_ACTION_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

}

```

## src/main/java/com/nubo/master/instruments/api/service/impl/CountryServiceImpl.java

```java
package com.nubo.master.instruments.api.service.impl;

import com.nubo.master.instruments.api.application.properties.PropertiesContext;
import com.nubo.master.instruments.api.exception.ServiceException;
import com.nubo.master.instruments.api.exception.error.ErrorCode;
import com.nubo.master.instruments.api.helpers.MapperUtil;
import com.nubo.master.instruments.api.models.dto.response.CountryOutDto;
import com.nubo.master.instruments.api.models.enums.CountryEnum;
import com.nubo.master.instruments.api.models.enums.VersionApiEnum;
import com.nubo.master.instruments.api.repository.CountryRepository;
import com.nubo.master.instruments.api.service.CountryService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
@Slf4j
public class CountryServiceImpl implements CountryService {

    private final CountryRepository countryRepository;

    @Override
    public List<CountryOutDto> findCountries() {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findCountriesV1();
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<CountryOutDto> findCountriesV1() {
        log.info("Start method findCountriesV1");

        List<Long> countries = new ArrayList<>();
        countries.add(CountryEnum.COLOMBIA.getValue());
        countries.add(CountryEnum.PERU.getValue());
        countries.add(CountryEnum.CHILE.getValue());

        List<CountryOutDto> countryOutDtoList = countryRepository.findCountriesByIds(countries).stream()
                .map(MapperUtil::countryEntityToCountryOutDto)
                .toList();

        log.info("End method findCountriesV1, countryOutDtoList -> {}", countryOutDtoList);

        return countryOutDtoList;
    }

}

```

## src/main/java/com/nubo/master/instruments/api/service/impl/DepositoryServiceImpl.java

```java
package com.nubo.master.instruments.api.service.impl;

import java.util.List;
import java.util.Objects;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.nubo.master.instruments.api.application.properties.PropertiesContext;
import com.nubo.master.instruments.api.exception.ServiceException;
import com.nubo.master.instruments.api.exception.error.ErrorCode;
import com.nubo.master.instruments.api.helpers.MapperPageUtil;
import com.nubo.master.instruments.api.helpers.MapperUtil;
import com.nubo.master.instruments.api.models.dto.response.DepositoryOutDto;
import com.nubo.master.instruments.api.models.dto.response.PageResponseOutDto;
import com.nubo.master.instruments.api.models.entity.DepositoryEntity;
import com.nubo.master.instruments.api.models.enums.VersionApiEnum;
import com.nubo.master.instruments.api.repository.DepositoryRepository;
import com.nubo.master.instruments.api.service.DepositoryService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class DepositoryServiceImpl implements DepositoryService {

    private final DepositoryRepository depositoryRepository;

    @Override
    public PageResponseOutDto<DepositoryOutDto> findAllDepositories(Pageable pageable) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllDepositoriesV1(pageable);
        }
        throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND);
    }

    @Override
    public DepositoryOutDto findDepositoryById(String depositoryId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findDepositoryByIdV1(depositoryId);
        }
        throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND);
    }

    @Override
    public List<DepositoryOutDto> findDepositoriesByCountry(Long countryId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findDepositoriesByCountryV1(countryId);
        }
        throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND);
    }

    private PageResponseOutDto<DepositoryOutDto> findAllDepositoriesV1(Pageable pageable) {
        log.info("Starting to find all depositories with pagination");

        Page<DepositoryEntity> depositoryPage = depositoryRepository.findAll(pageable);

        List<DepositoryOutDto> depositoryOutDtoList = depositoryPage.getContent().stream()
                .map(this::mapToDepositoryOutDto)
                .toList();

        log.info("Found {} depositories", depositoryOutDtoList.size());
        return MapperPageUtil.pageToPageResponseOutDto(depositoryOutDtoList, depositoryPage);
    }

    private DepositoryOutDto findDepositoryByIdV1(String depositoryId) {
        log.info("Starting to find depository by ID: {}", depositoryId);

        if (!StringUtils.hasText(depositoryId)) {
            throw new ServiceException(ErrorCode.BAD_REQUEST);
        }

        DepositoryEntity depositoryEntity = depositoryRepository.findById(depositoryId)
                .orElseThrow(() -> new ServiceException(ErrorCode.DEPOSITORY_NOT_FOUND, HttpStatus.NOT_FOUND));

        DepositoryOutDto depositoryOutDto = mapToDepositoryOutDto(depositoryEntity);

        log.info("Found depository: {}", depositoryOutDto.getId());
        return depositoryOutDto;
    }

    private List<DepositoryOutDto> findDepositoriesByCountryV1(Long countryId) {
        log.info("Starting to find depositories by country ID: {}", countryId);

        if (countryId == null) {
            throw new ServiceException(ErrorCode.BAD_REQUEST);
        }

        List<DepositoryEntity> depositoryList = depositoryRepository.findAllByCountryId(countryId);
        List<DepositoryOutDto> depositoryOutDtoList = depositoryList.stream()
                .map(this::mapToDepositoryOutDto)
                .toList();

        log.info("Found {} depositories for country ID: {}", depositoryOutDtoList.size(), countryId);
        return depositoryOutDtoList;
    }

    private DepositoryOutDto mapToDepositoryOutDto(DepositoryEntity depositoryEntity) {
        return MapperUtil.depositoryEntityToDepositoryOutDto(depositoryEntity);
    }
}

```

## src/main/java/com/nubo/master/instruments/api/service/impl/EquityInstrumentLoanServiceImpl.java

```java
package com.nubo.master.instruments.api.service.impl;

import com.nubo.master.instruments.api.helpers.MapperEquityInstrumentLoan;
import com.nubo.master.instruments.api.helpers.MapperPageUtil;
import com.nubo.master.instruments.api.models.dto.response.EquityInstrumentLoanOutDto;
import com.nubo.master.instruments.api.models.dto.response.PageResponseOutDto;
import com.nubo.master.instruments.api.models.dto.response.RiskModelLoanOutDto;
import com.nubo.master.instruments.api.models.entity.DataRiesgoDiaEntity;
import com.nubo.master.instruments.api.repository.DataRiesgoDiaRepository;
import com.nubo.master.instruments.api.repository.EquityInstrumentLoanRepository;
import com.nubo.master.instruments.api.service.EquityInstrumentLoanService;
import com.nubo.master.instruments.api.service.RiskModelService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.function.Function;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class EquityInstrumentLoanServiceImpl
        implements EquityInstrumentLoanService {

    private final EquityInstrumentLoanRepository repository;
    private final RiskModelService riskModelService;

    @Override
    public EquityInstrumentLoanOutDto getByMnemonic(String mnemonic, Boolean includeRiskModel) {
        EquityInstrumentLoanOutDto instrumentLoanOutDto = repository.findByMnemonic(mnemonic)
                .map(MapperEquityInstrumentLoan::toDto)
                .orElseThrow(() -> new RuntimeException("Instrument not found"));
        riskModelService.addRiskModelByMnemonic(includeRiskModel, mnemonic, instrumentLoanOutDto);
        return instrumentLoanOutDto;
    }

    @Override
    public PageResponseOutDto<EquityInstrumentLoanOutDto> list(Pageable pageable, Boolean includeRiskModel) {
        var page = repository.findAllPaged(pageable);
        PageResponseOutDto<EquityInstrumentLoanOutDto> responseOutDto =  MapperPageUtil.pageToPageResponseOutDto(
                page.getContent()
                        .stream()
                        .map(MapperEquityInstrumentLoan::toDto)
                        .toList(),
                page
        );
        riskModelService.addRiskModelByMultipleMnemonic(includeRiskModel, responseOutDto.getContent());
        return responseOutDto;
    }

    @Override
    public List<EquityInstrumentLoanOutDto> getByPrefix(String prefix, Boolean includeRiskModel) {
        List<EquityInstrumentLoanOutDto> responseOutDto = repository.findByMnemonicPrefix(prefix)
                .stream()
                .map(MapperEquityInstrumentLoan::toDto)
                .toList();
        riskModelService.addRiskModelByMultipleMnemonic(includeRiskModel, responseOutDto);
        return responseOutDto;
    }

}

```

## src/main/java/com/nubo/master/instruments/api/service/impl/EquityInstrumentServiceImpl.java

```java
package com.nubo.master.instruments.api.service.impl;

import java.util.List;
import java.util.Objects;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.nubo.master.instruments.api.application.properties.PropertiesContext;
import com.nubo.master.instruments.api.exception.ServiceException;
import com.nubo.master.instruments.api.exception.error.ErrorCode;
import com.nubo.master.instruments.api.helpers.EquityInstrumentSpecificationFactory;
import com.nubo.master.instruments.api.helpers.MapperPageUtil;
import com.nubo.master.instruments.api.helpers.MapperUtil;
import com.nubo.master.instruments.api.models.dto.request.EquityInstrumentFilterRequestDto;
import com.nubo.master.instruments.api.models.dto.response.EquityInstrumentOutDto;
import com.nubo.master.instruments.api.models.dto.response.EquityInstrumentSimpleOutDto;
import com.nubo.master.instruments.api.models.dto.response.PageResponseOutDto;
import com.nubo.master.instruments.api.models.entity.SecurityTitleEntity;
import com.nubo.master.instruments.api.models.enums.SearchOperationEnum;
import com.nubo.master.instruments.api.models.enums.VersionApiEnum;
import com.nubo.master.instruments.api.repository.EquityInstrumentRepository;
import com.nubo.master.instruments.api.service.EquityInstrumentService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class EquityInstrumentServiceImpl implements EquityInstrumentService {

    private final EquityInstrumentRepository equityInstrumentRepository;

    @Override
    public PageResponseOutDto<EquityInstrumentOutDto> findAllEquityInstruments(Pageable pageable) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllEquityInstrumentsV1(pageable);
        }
        throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
    }

    @Override
    public EquityInstrumentOutDto findEquityInstrumentById(Long securityId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findEquityInstrumentByIdV1(securityId);
        }
        throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
    }

    @Override
    public PageResponseOutDto<EquityInstrumentOutDto> findEquityInstrumentsWithFilters(
            Pageable pageable, Long depositoryId, String issuerCode, Long statusId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findEquityInstrumentsWithFiltersV1(pageable, depositoryId, issuerCode, statusId);
        }
        throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
    }

    @Override
    public PageResponseOutDto<EquityInstrumentOutDto> findAllEquityInstrumentsDynamic(
            Pageable pageable, String fieldName, String fieldValue, String operation,
            String mnemonic, String isinCode, String issuerCode,
            Long depositoryId, Long statusId, Long marketId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllEquityByFilter(pageable, mnemonic, isinCode, issuerCode, depositoryId, statusId, marketId);
        }
        throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
    }

    @Override
    public PageResponseOutDto<EquityInstrumentSimpleOutDto> findEquityInstrumentsByMnemonicStartingWith(
            String mnemonic, Pageable pageable) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findEquityInstrumentsByMnemonicStartingWithV1(mnemonic, pageable);
        }
        throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
    }

    @Override
    public PageResponseOutDto<EquityInstrumentSimpleOutDto> findEquityInstrumentsByIsinStartingWith(
            String isin, Pageable pageable) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findEquityInstrumentsByIsinStartingWithV1(isin, pageable);
        }
        throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
    }

    @Override
    public PageResponseOutDto<String> findEquityInstrumentsByIssuerCodeStartingWith(
            String issuerCode, Pageable pageable) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findEquityInstrumentsByIssuerCodeStartingWithV1(issuerCode, pageable);
        }
        throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
    }

    private PageResponseOutDto<EquityInstrumentOutDto> findAllEquityInstrumentsV1(Pageable pageable) {
        log.info("Starting to find all equity instruments with pagination");

        Page<SecurityTitleEntity> securityPage = equityInstrumentRepository.findAllEquityInstruments(pageable);

        return buildPageResponse(securityPage);
    }

    private EquityInstrumentOutDto findEquityInstrumentByIdV1(Long securityId) {
        log.info("Starting to find equity instrument by ID: {}", securityId);

        if (securityId == null) {
            throw new ServiceException(ErrorCode.BAD_REQUEST, HttpStatus.BAD_REQUEST);
        }

        SecurityTitleEntity securityEntity = equityInstrumentRepository
                .findByIdWithAssociations(securityId)
                .orElseThrow(() -> new ServiceException(ErrorCode.EQUITY_INSTRUMENT_NOT_FOUND, HttpStatus.NOT_FOUND));

        EquityInstrumentOutDto equityInstrumentOutDto = mapToEquityInstrumentOutDto(securityEntity);
        log.info("Found equity instrument: {}", equityInstrumentOutDto.getSecurityId());

        return equityInstrumentOutDto;
    }

    private PageResponseOutDto<EquityInstrumentOutDto> findEquityInstrumentsWithFiltersV1(
            Pageable pageable, Long depositoryId, String issuerCode, Long statusId) {

        log.info("Starting to find equity instruments with filters - depositoryId: {}, issuerCode: {}, statusId: {}",
                depositoryId, issuerCode, statusId);

        EquityInstrumentFilterRequestDto filterDto = EquityInstrumentFilterRequestDto.builder()
                .depositoryId(depositoryId)
                .issuerCode(issuerCode)
                .statusId(statusId)
                .build();

        Specification<SecurityTitleEntity> spec = EquityInstrumentSpecificationFactory.createStandardFilter(filterDto);
        Page<SecurityTitleEntity> securityPage = equityInstrumentRepository.findAll(spec, pageable);

        log.info("Found {} equity instruments with filters", securityPage.getTotalElements());
        return buildPageResponse(securityPage);
    }

    private PageResponseOutDto<EquityInstrumentOutDto> findAllEquityByFilter(
            Pageable pageable, String mnemonic, String isinCode, String issuerCode,
            Long depositoryId, Long statusId, Long marketId
    ) {
        Page<SecurityTitleEntity> securityTitleEntities = equityInstrumentRepository.findAllByByFilter(
                mnemonic,
                isinCode,
                issuerCode,
                depositoryId,
                statusId,
                marketId,
                pageable
        );

        return buildPageResponse(securityTitleEntities);

    }

    private PageResponseOutDto<EquityInstrumentOutDto> findAllEquityInstrumentsDynamicV1(
            Pageable pageable, String fieldName, String fieldValue, String operation,
            String mnemonic, String isinCode, String issuerCode,
            Long depositoryId, Long statusId, Long marketId) {

        log.info("Starting dynamic search with combined filters");

        EquityInstrumentFilterRequestDto filterDto = EquityInstrumentFilterRequestDto.builder()
                .mnemonic(mnemonic)
                .isinCode(isinCode)
                .issuerCode(issuerCode)
                .depositoryId(depositoryId)
                .statusId(statusId)
                .marketId(marketId)
                .build();

        SearchOperationEnum searchOperation = (operation != null) ? SearchOperationEnum.fromValue(operation) : null;

        if (operation != null && searchOperation == null) {
            log.warn("Invalid operation: {}", operation);
            throw new ServiceException(ErrorCode.BAD_REQUEST, HttpStatus.BAD_REQUEST);
        }

        Specification<SecurityTitleEntity> spec = EquityInstrumentSpecificationFactory.createCombinedFilter(
                filterDto, fieldName, fieldValue, searchOperation);

        Page<SecurityTitleEntity> pagedResult = equityInstrumentRepository.findAll(spec, pageable);

        log.info("Found {} equity instruments with dynamic search", pagedResult.getTotalElements());
        return buildPageResponse(pagedResult);
    }

    private PageResponseOutDto<EquityInstrumentSimpleOutDto> findEquityInstrumentsByMnemonicStartingWithV1(
            String mnemonic, Pageable pageable) {

        log.info("Starting to find equity instruments by mnemonic starting with: {}", mnemonic);

        if (!StringUtils.hasText(mnemonic)) {
            throw new ServiceException(ErrorCode.BAD_REQUEST, HttpStatus.BAD_REQUEST);
        }

        Page<SecurityTitleEntity> securityPage = equityInstrumentRepository
                .findByMnemonicContainsWithIgnoreCase(mnemonic, pageable);

        List<EquityInstrumentSimpleOutDto> equityInstrumentList = securityPage.getContent().stream()
                .map(this::mapToEquityInstrumentSimpleOutDto)
                .toList();

        log.info("Found {} equity instruments by mnemonic", equityInstrumentList.size());
        return MapperPageUtil.pageToPageResponseOutDto(equityInstrumentList, securityPage);
    }

    private PageResponseOutDto<EquityInstrumentSimpleOutDto> findEquityInstrumentsByIsinStartingWithV1(
            String isin, Pageable pageable) {

        log.info("Starting to find equity instruments by ISIN starting with: {}", isin);

        if (!StringUtils.hasText(isin)) {
            throw new ServiceException(ErrorCode.BAD_REQUEST, HttpStatus.BAD_REQUEST);
        }

        Page<SecurityTitleEntity> securityPage = equityInstrumentRepository
                .findByIsinCodeContainsWithIgnoreCase(isin, pageable);

        List<EquityInstrumentSimpleOutDto> equityInstrumentList = securityPage.getContent().stream()
                .map(this::mapToEquityInstrumentSimpleOutDto)
                .toList();

        log.info("Found {} equity instruments by ISIN", equityInstrumentList.size());
        return MapperPageUtil.pageToPageResponseOutDto(equityInstrumentList, securityPage);
    }

    private PageResponseOutDto<String> findEquityInstrumentsByIssuerCodeStartingWithV1(
            String issuerCode, Pageable pageable) {

        log.info("Starting to find equity instruments by issuer code starting with: {}", issuerCode);

        List<String> issuerCodeList = equityInstrumentRepository
                .findDistinctIssuerCodesByIssuerCodeContainsIgnoreCase(issuerCode);

        List<String> pageContent = MapperPageUtil.getPageContent(pageable, issuerCodeList);
        Page<String> issuerCodePage = new PageImpl<>(pageContent,
                pageable, issuerCodeList.size());


        log.info("Found {} equity instruments by issuer code", issuerCodeList.size());
        return MapperPageUtil.pageToPageResponseOutDto(pageContent, issuerCodePage);
    }

    private PageResponseOutDto<EquityInstrumentOutDto> buildPageResponse(Page<SecurityTitleEntity> entities) {
        List<EquityInstrumentOutDto> equityInstrumentOutDtoList = entities.getContent().stream()
                .map(this::mapToEquityInstrumentOutDto)
                .toList();

        return MapperPageUtil.pageToPageResponseOutDto(equityInstrumentOutDtoList, entities);
    }

    private EquityInstrumentOutDto mapToEquityInstrumentOutDto(SecurityTitleEntity securityTitleEntity) {
        return MapperUtil.securityTitleEntityToEquityInstrumentOutDto(securityTitleEntity);
    }

    private EquityInstrumentSimpleOutDto mapToEquityInstrumentSimpleOutDto(SecurityTitleEntity securityTitleEntity) {
        return MapperUtil.securityTitleEntityToEquityInstrumentSimpleOutDto(securityTitleEntity);
    }
}

```

## src/main/java/com/nubo/master/instruments/api/service/impl/EquitySecurityServiceImpl.java

```java
package com.nubo.master.instruments.api.service.impl;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import com.nubo.master.instruments.api.application.properties.PropertiesConfig;
import com.nubo.master.instruments.api.application.properties.PropertiesContext;
import com.nubo.master.instruments.api.application.util.ApplicationUtils;
import com.nubo.master.instruments.api.exception.ServiceException;
import com.nubo.master.instruments.api.exception.error.ErrorCode;
import com.nubo.master.instruments.api.helpers.MapperPageUtil;
import com.nubo.master.instruments.api.helpers.MapperUtil;
import com.nubo.master.instruments.api.models.dto.request.EquitySecurityInDto;
import com.nubo.master.instruments.api.models.dto.request.EquitySecurityUpdateInDto;
import com.nubo.master.instruments.api.models.dto.response.EquitySecurityOutDto;
import com.nubo.master.instruments.api.models.dto.response.PageResponseOutDto;
import com.nubo.master.instruments.api.models.entity.EquitySecurityEntity;
import com.nubo.master.instruments.api.models.entity.SecurityTitleEntity;
import com.nubo.master.instruments.api.models.enums.VersionApiEnum;
import com.nubo.master.instruments.api.repository.EquitySecurityRepository;
import com.nubo.master.instruments.api.repository.SecurityTitleRepository;
import com.nubo.master.instruments.api.service.EquitySecurityService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class EquitySecurityServiceImpl implements EquitySecurityService {

        private final EquitySecurityRepository equitySecurityRepository;
        private final SecurityTitleRepository securityTitleRepository;
        private final PropertiesConfig propertiesConfig;

        @Override
        public PageResponseOutDto<EquitySecurityOutDto> findAllEquitySecurity(Pageable pageable) {
                if (Objects.requireNonNull(
                                VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
                        return findAllEquitySecurityV1(pageable);
                } else {
                        throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
                }
        }

        private PageResponseOutDto<EquitySecurityOutDto> findAllEquitySecurityV1(Pageable pageable) {
                log.info("Start method findAllEquitySecurityV1 with page: {} and size: {}", pageable.getPageNumber(),
                                pageable.getPageSize());

                Page<EquitySecurityEntity> equitySecurityPage = equitySecurityRepository.findAll(pageable);

                List<EquitySecurityOutDto> equitySecurityOutDtoList = equitySecurityPage.getContent().stream()
                                .map(MapperUtil::equitySecurityEntityToEquitySecurityOutDto)
                                .toList();

                log.info("End method findAllEquitySecurityV1, equitySecurityOutDtoList -> {}",
                                equitySecurityOutDtoList);

                return MapperPageUtil.pageToPageResponseOutDto(equitySecurityOutDtoList, equitySecurityPage);
        }

        @Override
        public EquitySecurityOutDto findEquitySecurity(Long securityId) {
                if (Objects.requireNonNull(
                                VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
                        return findEquitySecurityV1(securityId);
                } else {
                        throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
                }
        }

        private EquitySecurityOutDto findEquitySecurityV1(Long securityId) {
                log.debug("Start method findEquitySecurityV1, securityId -> {}", securityId);

                EquitySecurityEntity equitySecurityEntityLast = validateEquitySecurityEntity(securityId);

                EquitySecurityOutDto equitySecurityOutDto = MapperUtil
                                .equitySecurityEntityToEquitySecurityOutDto(equitySecurityEntityLast);

                log.info("End method findEquitySecurityV1, equitySecurityOutDto -> {}", equitySecurityOutDto);

                return equitySecurityOutDto;
        }

        @Override
        public EquitySecurityOutDto createEquitySecurity(EquitySecurityInDto equitySecurityInDto) {
                if (Objects.requireNonNull(
                                VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
                        return createEquitySecurityV1(equitySecurityInDto);
                } else {
                        throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
                }
        }

        private EquitySecurityOutDto createEquitySecurityV1(EquitySecurityInDto equitySecurityInDto) {
                log.debug("Start method createEquitySecurityV1, equitySecurity -> {}", equitySecurityInDto);

                Optional<EquitySecurityEntity> equitySecurityEntityLast = equitySecurityRepository
                                .findById(equitySecurityInDto.getSecurityId());
                if (equitySecurityEntityLast.isPresent()) {
                        throw new ServiceException(ErrorCode.EQUITY_SECURITY_EXISTS, HttpStatus.BAD_REQUEST);
                }

                SecurityTitleEntity securityTitleEntityLast = validateSecurityTitle(
                                equitySecurityInDto.getSecurityId());

                EquitySecurityEntity equitySecurityEntity = EquitySecurityEntity.builder()
                                .securityId(securityTitleEntityLast.getSecurityId())
                                .parent(equitySecurityInDto.getParent())
                                .amountIssued(equitySecurityInDto.getAmountIssued())
                                .nominalPrice(equitySecurityInDto.getNominalPrice())
                                .nominalPriceDate(ApplicationUtils
                                                .convertStringToLocalDate(equitySecurityInDto.getNominalPriceDate()))
                                .negotiate(equitySecurityInDto.getNegotiate())
                                .dateEquityValue(ApplicationUtils
                                                .convertStringToLocalDate(equitySecurityInDto.getDateEquityValue()))
                                .equityValue(equitySecurityInDto.getEquityValue())
                                .dateFaceValue(ApplicationUtils
                                                .convertStringToLocalDate(equitySecurityInDto.getDateFaceValue()))
                                .faceValue(equitySecurityInDto.getFaceValue())
                                .numberOutstanding(equitySecurityInDto.getNumberOutstanding())
                                .submission(equitySecurityInDto.getSubmission())
                                .liquidity(equitySecurityInDto.getLiquidity())
                                .specialRights(equitySecurityInDto.getSpecialRights())
                                .exdividendDate(ApplicationUtils
                                                .convertStringToLocalDate(equitySecurityInDto.getExdividendDate()))
                                .lastModifyApplication(propertiesConfig.getApiName())
                                .lastModifyIp(PropertiesContext.getClientIp())
                                .lastModifyUser(PropertiesContext.getClientUser())
                                .lastModifyDate(PropertiesContext.getClientDatetime())
                                .build();

                EquitySecurityOutDto equitySecurityOutDto = MapperUtil.equitySecurityEntityToEquitySecurityOutDto(
                                equitySecurityRepository.save(equitySecurityEntity));

                log.info("End method createEquitySecurityV1, equitySecurityOutDto -> {}", equitySecurityOutDto);

                return equitySecurityOutDto;
        }

        @Override
        public EquitySecurityOutDto updateEquitySecurity(EquitySecurityUpdateInDto equitySecurityUpdateInDto,
                        Long securityId) {
                if (Objects.requireNonNull(
                                VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
                        return updateEquitySecurityV1(equitySecurityUpdateInDto, securityId);
                } else {
                        throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
                }
        }

        private EquitySecurityOutDto updateEquitySecurityV1(EquitySecurityUpdateInDto equitySecurityUpdateInDto,
                        Long securityId) {
                log.debug("Start method updateEquitySecurityV1, equitySecurity -> {}, securityId -> {}",
                                equitySecurityUpdateInDto, securityId);

                EquitySecurityEntity equitySecurityEntityLast = validateEquitySecurityEntity(securityId);

                EquitySecurityEntity equitySecurityEntity = EquitySecurityEntity.builder()
                                .securityId(equitySecurityEntityLast.getSecurityId())
                                .parent(ObjectUtils.isEmpty(equitySecurityUpdateInDto.getParent())
                                                ? equitySecurityEntityLast.getParent()
                                                : equitySecurityUpdateInDto.getParent())
                                .amountIssued(ObjectUtils.isEmpty(equitySecurityUpdateInDto.getAmountIssued())
                                                ? equitySecurityEntityLast.getAmountIssued()
                                                : equitySecurityUpdateInDto.getAmountIssued())
                                .nominalPrice(ObjectUtils.isEmpty(equitySecurityUpdateInDto.getNominalPrice())
                                                ? equitySecurityEntityLast.getNominalPrice()
                                                : equitySecurityUpdateInDto.getNominalPrice())
                                .nominalPriceDate(ObjectUtils.isEmpty(equitySecurityUpdateInDto.getNominalPriceDate())
                                                ? equitySecurityEntityLast.getNominalPriceDate()
                                                : ApplicationUtils.convertStringToLocalDate(
                                                                equitySecurityUpdateInDto.getNominalPriceDate()))
                                .negotiate(ObjectUtils.isEmpty(equitySecurityUpdateInDto.getNegotiate())
                                                ? equitySecurityEntityLast.getNegotiate()
                                                : equitySecurityUpdateInDto.getNegotiate())
                                .dateEquityValue(ObjectUtils.isEmpty(equitySecurityUpdateInDto.getDateEquityValue())
                                                ? equitySecurityEntityLast.getDateEquityValue()
                                                : ApplicationUtils.convertStringToLocalDate(
                                                                (equitySecurityUpdateInDto.getDateEquityValue())))
                                .equityValue(ObjectUtils.isEmpty(equitySecurityUpdateInDto.getEquityValue())
                                                ? equitySecurityEntityLast.getEquityValue()
                                                : equitySecurityUpdateInDto.getEquityValue())
                                .dateFaceValue(ObjectUtils.isEmpty(equitySecurityUpdateInDto.getDateFaceValue())
                                                ? equitySecurityEntityLast.getDateFaceValue()
                                                : ApplicationUtils.convertStringToLocalDate(
                                                                equitySecurityUpdateInDto.getDateFaceValue()))
                                .faceValue(ObjectUtils.isEmpty(equitySecurityUpdateInDto.getFaceValue())
                                                ? equitySecurityEntityLast.getFaceValue()
                                                : equitySecurityUpdateInDto.getFaceValue())
                                .numberOutstanding(ObjectUtils.isEmpty(equitySecurityUpdateInDto.getNumberOutstanding())
                                                ? equitySecurityEntityLast.getNumberOutstanding()
                                                : equitySecurityUpdateInDto.getNumberOutstanding())
                                .submission(ObjectUtils.isEmpty(equitySecurityUpdateInDto.getSubmission())
                                                ? equitySecurityEntityLast.getSubmission()
                                                : equitySecurityUpdateInDto.getSubmission())
                                .liquidity(ObjectUtils.isEmpty(equitySecurityUpdateInDto.getLiquidity())
                                                ? equitySecurityEntityLast.getLiquidity()
                                                : equitySecurityUpdateInDto.getLiquidity())
                                .specialRights(ObjectUtils.isEmpty(equitySecurityUpdateInDto.getSpecialRights())
                                                ? equitySecurityEntityLast.getSpecialRights()
                                                : equitySecurityUpdateInDto.getSpecialRights())
                                .exdividendDate(ObjectUtils.isEmpty(equitySecurityUpdateInDto.getExdividendDate())
                                                ? equitySecurityEntityLast.getExdividendDate()
                                                : ApplicationUtils.convertStringToLocalDate(
                                                                equitySecurityUpdateInDto.getExdividendDate()))
                                .lastModifyApplication(propertiesConfig.getApiName())
                                .lastModifyIp(PropertiesContext.getClientIp())
                                .lastModifyUser(PropertiesContext.getClientUser())
                                .lastModifyDate(PropertiesContext.getClientDatetime())
                                .build();

                EquitySecurityOutDto equitySecurityOutDto = MapperUtil.equitySecurityEntityToEquitySecurityOutDto(
                                equitySecurityRepository.save(equitySecurityEntity));

                log.info("End method updateEquitySecurityV1, equitySecurityOutDto -> {}", equitySecurityOutDto);

                return equitySecurityOutDto;
        }

        @Override
        public void deleteEquitySecurity(Long securityId) {
                if (Objects.requireNonNull(
                                VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
                        deleteEquitySecurityV1(securityId);
                } else {
                        throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
                }
        }

        private void deleteEquitySecurityV1(Long securityId) {
                log.debug("Start method deleteEquitySecurityV1, securityId -> {}", securityId);

                EquitySecurityEntity equitySecurityEntityLast = validateEquitySecurityEntity(securityId);

                equitySecurityRepository.delete(equitySecurityEntityLast);

                log.info("End method deleteEquitySecurityV1");
        }

        private EquitySecurityEntity validateEquitySecurityEntity(Long securityId) {
                return equitySecurityRepository.findById(securityId)
                                .orElseThrow(() -> new ServiceException(ErrorCode.EQUITY_SECURITY_NOT_FOUND,
                                                HttpStatus.NOT_FOUND));
        }

        private SecurityTitleEntity validateSecurityTitle(Long securityId) {
                return securityTitleRepository.findById(securityId)
                                .orElseThrow(() -> new ServiceException(ErrorCode.SECURITY_TITLE_NOT_FOUND,
                                                HttpStatus.NOT_FOUND));
        }

}

```

## src/main/java/com/nubo/master/instruments/api/service/impl/FixedIncomeSecurityServiceImpl.java

```java
package com.nubo.master.instruments.api.service.impl;

import com.nubo.master.instruments.api.application.properties.PropertiesContext;
import com.nubo.master.instruments.api.exception.ServiceException;
import com.nubo.master.instruments.api.exception.error.ErrorCode;
import com.nubo.master.instruments.api.helpers.MapperPageUtil;
import com.nubo.master.instruments.api.helpers.MapperUtil;
import com.nubo.master.instruments.api.models.dto.request.ParamsFixedIncomeSecurityInDto;
import com.nubo.master.instruments.api.models.dto.request.ParamsPageInDto;
import com.nubo.master.instruments.api.models.dto.response.FixedIncomeSecurityOutDto;
import com.nubo.master.instruments.api.models.dto.response.PageResponseOutDto;
import com.nubo.master.instruments.api.models.dto.response.SecurityTitleOutDto;
import com.nubo.master.instruments.api.models.entity.FixedIncomeSecurityEntity;
import com.nubo.master.instruments.api.models.enums.VersionApiEnum;
import com.nubo.master.instruments.api.repository.FixedIncomeSecurityRepository;
import com.nubo.master.instruments.api.service.FixedIncomeSecurityService;
import jakarta.persistence.criteria.Predicate;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
@Slf4j
public class FixedIncomeSecurityServiceImpl implements FixedIncomeSecurityService {

    private final FixedIncomeSecurityRepository fixedIncomeSecurityRepository;

    @Override
    public FixedIncomeSecurityOutDto findFixedIncomeSecurityBySecurityId(Long securityId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findFixedIncomeSecurityBySecurityIdV1(securityId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private FixedIncomeSecurityOutDto findFixedIncomeSecurityBySecurityIdV1(Long securityId) {
        log.info("Start method findFixedIncomeSecurityBySecurityIdV1, securityId -> {}", securityId);

        FixedIncomeSecurityEntity fixedIncomeSecurityEntity =
                fixedIncomeSecurityRepository.findTopBySecurityTitle_SecurityIdOrderByLastModifyDateDesc(securityId)
                        .orElseThrow(() -> new ServiceException(ErrorCode.FIXED_INCOME_SECURITY_NOT_FOUND, HttpStatus.NOT_FOUND));

        FixedIncomeSecurityOutDto fixedIncomeSecurityOutDto = MapperUtil.fixedIncomeSecurityEntityToFixedIncomeSecurityOutDto(fixedIncomeSecurityEntity);

        log.info("End method findFixedIncomeSecurityBySecurityIdV1, fixedIncomeSecurityOutDto -> {}", fixedIncomeSecurityOutDto);

        return fixedIncomeSecurityOutDto;
    }

    @Override
    public PageResponseOutDto<SecurityTitleOutDto> searchFixedIncomeSecurity(
            ParamsPageInDto paramsPageInDto, ParamsFixedIncomeSecurityInDto paramsFixedIncomeSecurityInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return searchFixedIncomeSecurityV1(paramsPageInDto, paramsFixedIncomeSecurityInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<SecurityTitleOutDto> searchFixedIncomeSecurityV1(
            ParamsPageInDto paramsPageInDto, ParamsFixedIncomeSecurityInDto paramsFixedIncomeSecurityInDto) {
        log.info("Start method searchFixedIncomeSecurityV1, paramsPageInDto -> {}, paramsFixedIncomeSecurityInDto -> {}",
                paramsPageInDto, paramsFixedIncomeSecurityInDto);

        Specification<FixedIncomeSecurityEntity> fixedIncomeSecurityEntitySpecification =
                fixedIncomeSecurityEntitySpecification(paramsFixedIncomeSecurityInDto);

        PageResponseOutDto<SecurityTitleOutDto> pageResponseOutDto;
        List<SecurityTitleOutDto> fixedIncomeSecurityOutDtoList = new ArrayList<>();
        if (paramsPageInDto.isAll()) {
            List<FixedIncomeSecurityEntity> fixedIncomeSecurityEntityList =
                    fixedIncomeSecurityRepository.findAll(fixedIncomeSecurityEntitySpecification);

            fixedIncomeSecurityEntityList.forEach(fixedIncomeSecurityEntity ->
                    fixedIncomeSecurityOutDtoList.add(
                            MapperUtil.fixedIncomeSecurityEntityToSecurityTitleOutDto(fixedIncomeSecurityEntity)));

            pageResponseOutDto = buildPageResponseSecurityTitleOutDto(fixedIncomeSecurityOutDtoList,
                    0, fixedIncomeSecurityOutDtoList.size(), fixedIncomeSecurityOutDtoList.size());
        } else {
            Sort sortBy = paramsPageInDto.getOrder().equalsIgnoreCase(Sort.Direction.ASC.name())
                    ? Sort.by(Sort.Order.asc(paramsPageInDto.getSort()), Sort.Order.asc("securityId"))
                    : Sort.by(Sort.Order.desc(paramsPageInDto.getSort()), Sort.Order.desc("securityId"));
            Pageable pageable = PageRequest.of(paramsPageInDto.getPage(), paramsPageInDto.getSize(), sortBy);

            Page<FixedIncomeSecurityEntity> fixedIncomeSecurityEntityPage =
                    fixedIncomeSecurityRepository.findAll(fixedIncomeSecurityEntitySpecification, pageable);

            fixedIncomeSecurityEntityPage.getContent().forEach(fixedIncomeSecurityEntity ->
                    fixedIncomeSecurityOutDtoList.add(
                            MapperUtil.fixedIncomeSecurityEntityToSecurityTitleOutDto(fixedIncomeSecurityEntity)));

            pageResponseOutDto = buildPageResponseSecurityTitleOutDto(fixedIncomeSecurityOutDtoList,
                    paramsPageInDto.getPage(), paramsPageInDto.getSize(), (int) fixedIncomeSecurityEntityPage.getTotalElements());
        }

        log.info("End method searchFixedIncomeSecurityV1, pageResponseOutDto -> {}", pageResponseOutDto);

        return pageResponseOutDto;
    }

    private PageResponseOutDto<SecurityTitleOutDto> buildPageResponseSecurityTitleOutDto(
            List<SecurityTitleOutDto> content, int page, int size, int totalElements) {
        Page<SecurityTitleOutDto> buildPageResponseFixedIncomeSecurityPage = new PageImpl<>(content,
                PageRequest.of(page, size), totalElements);
        return MapperPageUtil.pageToPageResponseOutDto(content, buildPageResponseFixedIncomeSecurityPage);
    }

    private Specification<FixedIncomeSecurityEntity> fixedIncomeSecurityEntitySpecification(ParamsFixedIncomeSecurityInDto paramsFixedIncomeSecurityInDto) {
        return (root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();
            if (!ObjectUtils.isEmpty(paramsFixedIncomeSecurityInDto.getIssuerCode())) {
                predicates.add(criteriaBuilder.equal(root.get("securityTitle").get("issuer").get("code"),
                        paramsFixedIncomeSecurityInDto.getIssuerCode()));
            }
            if (!ObjectUtils.isEmpty(paramsFixedIncomeSecurityInDto.getDepositoryId())) {
                predicates.add(criteriaBuilder.equal(root.get("securityTitle").get("depository").get("id"),
                        paramsFixedIncomeSecurityInDto.getDepositoryId()));
            }
            if (!ObjectUtils.isEmpty(paramsFixedIncomeSecurityInDto.getStatusId())) {
                predicates.add(criteriaBuilder.equal(root.get("securityTitle").get("status").get("id"),
                        paramsFixedIncomeSecurityInDto.getStatusId()));
            }
            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }

}

```

## src/main/java/com/nubo/master/instruments/api/service/impl/IssuerServiceImpl.java

```java
package com.nubo.master.instruments.api.service.impl;

import com.nubo.master.instruments.api.application.properties.PropertiesConfig;
import com.nubo.master.instruments.api.application.properties.PropertiesContext;
import com.nubo.master.instruments.api.exception.ServiceException;
import com.nubo.master.instruments.api.exception.error.ErrorCode;
import com.nubo.master.instruments.api.helpers.MapperPageUtil;
import com.nubo.master.instruments.api.helpers.MapperUtil;
import com.nubo.master.instruments.api.models.dto.request.IssuerInDto;
import com.nubo.master.instruments.api.models.dto.request.IssuerUpdateInDto;
import com.nubo.master.instruments.api.models.dto.response.IssuerOutDto;
import com.nubo.master.instruments.api.models.dto.response.PageResponseOutDto;
import com.nubo.master.instruments.api.models.entity.CountryEntity;
import com.nubo.master.instruments.api.models.entity.DepositoryEntity;
import com.nubo.master.instruments.api.models.entity.GicsEntity;
import com.nubo.master.instruments.api.models.entity.IssuerEntity;
import com.nubo.master.instruments.api.models.entity.StatusEntity;
import com.nubo.master.instruments.api.models.entity.TypeEntity;
import com.nubo.master.instruments.api.models.enums.VersionApiEnum;
import com.nubo.master.instruments.api.repository.CountryRepository;
import com.nubo.master.instruments.api.repository.DepositoryRepository;
import com.nubo.master.instruments.api.repository.GicsRepository;
import com.nubo.master.instruments.api.repository.IssuerRepository;
import com.nubo.master.instruments.api.repository.StatusRepository;
import com.nubo.master.instruments.api.repository.TypeRepository;
import com.nubo.master.instruments.api.service.IssuerService;
import jakarta.persistence.criteria.Predicate;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
@Slf4j
public class IssuerServiceImpl implements IssuerService {

    private final IssuerRepository issuerRepository;
    private final CountryRepository countryRepository;
    private final TypeRepository typeRepository;
    private final StatusRepository statusRepository;
    private final GicsRepository gicsRepository;
    private final DepositoryRepository depositoryRepository;
    private final PropertiesConfig propertiesConfig;

    @Override
    public PageResponseOutDto<IssuerOutDto> findAllIssuer(Pageable pageable) {
        if (Objects.requireNonNull(
                VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllIssuerV1(pageable);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<IssuerOutDto> findAllIssuerV1(Pageable pageable) {
        log.info("Start method findAllIssuerV1 with page: {} and size: {}", pageable.getPageNumber(),
                pageable.getPageSize());

        Page<IssuerEntity> issuerEntityPage = issuerRepository.findAll(pageable);
        List<IssuerOutDto> issuerOutDtoList = issuerEntityPage.getContent().stream()
                .map(MapperUtil::issuerEntityToIssuerOutDto)
                .toList();

        log.debug("End method findAllIssuerV1, number of Issuer found: {}", issuerOutDtoList.size());
        return MapperPageUtil.pageToPageResponseOutDto(issuerOutDtoList, issuerEntityPage);
    }

    @Override
    public IssuerOutDto findIssuerById(Long issuerId) {
        if (Objects.requireNonNull(
                VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findIssuerByIdV1(issuerId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private IssuerOutDto findIssuerByIdV1(Long issuerId) {
        log.info("Start method findIssuerByIdV1, issuerId -> {}", issuerId);

        IssuerEntity issuerEntity = validateIssuer(issuerId);
        IssuerOutDto issuerOutDto = MapperUtil.issuerEntityToIssuerOutDto(issuerEntity);

        log.info("End method findIssuerByIdV1, Issuer -> {}", issuerOutDto);
        return issuerOutDto;
    }

    @Override
    public PageResponseOutDto<IssuerOutDto> searchIssuer(Pageable pageable, String issuerCode, String text) {
        if (Objects.requireNonNull(
                VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return searchIssuerV1(pageable, issuerCode, text);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<IssuerOutDto> searchIssuerV1(Pageable pageable, String issuerCode, String text) {
        log.info("Start method searchIssuerV1");

        Page<IssuerEntity> issuerPage = issuerRepository.findAll(issuerSpecification(issuerCode, text), pageable);

        List<IssuerOutDto> issuerOutDtoList = issuerPage.getContent().stream()
                .map(MapperUtil::issuerEntityToIssuerOutDtoDetail).filter(Objects::nonNull)
                .toList();

        log.info("End method searchIssuerV1, issuerOutDtoList -> {}", issuerOutDtoList);

        return MapperPageUtil.pageToPageResponseOutDto(issuerOutDtoList, issuerPage);
    }

    @Override
    public IssuerOutDto createIssuer(IssuerInDto issuerInDto) {
        if (Objects.requireNonNull(
                VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return createIssuerV1(issuerInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private IssuerOutDto createIssuerV1(IssuerInDto issuerInDto) {
        log.debug("Start method createIssuerV1, issuer -> {}", issuerInDto);

        IssuerEntity issuerEntity = IssuerEntity.builder()
                .code(issuerInDto.getCode())
                .name(issuerInDto.getName())
                .shortName(issuerInDto.getShortName())
                .type(validateType(issuerInDto.getTypeId()))
                .country(validateCountry(issuerInDto.getCountryId()))
                .gics(validateStatusGics(issuerInDto.getGicsId()))
                .dateEntry(issuerInDto.getDateEntry())
                .countryOrigin(validateCountry(issuerInDto.getCountryOrigin()))
                .cusip(issuerInDto.getCusip())
                .taxCode(issuerInDto.getTaxCode())
                .status(validateStatus(issuerInDto.getStatusId()))
                .withdrawalDate(issuerInDto.getWithdrawalDate())
                .mainMarket(issuerInDto.getMainMarket())
                .regulatorCode(issuerInDto.getRegulatorCode())
                .depository(validateDepository(issuerInDto.getDepositoryId()))
                .dvlCode(issuerInDto.getDvlCode())
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyIp(PropertiesContext.getClientIp())
                .lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyDate(PropertiesContext.getClientDatetime())
                .build();

        IssuerOutDto issuerOutDto = MapperUtil.issuerEntityToIssuerOutDto(issuerRepository.save(issuerEntity));

        log.info("End method createIssuerV1, Issuer -> {}", issuerOutDto);
        return issuerOutDto;
    }

    @Override
    public IssuerOutDto updateIssuer(Long issuerId, IssuerUpdateInDto issuerUpdateInDto) {
        if (Objects.requireNonNull(
                VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return updateIssuerV1(issuerId, issuerUpdateInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private IssuerOutDto updateIssuerV1(Long issuerId, IssuerUpdateInDto issuerUpdateInDto) {
        log.debug("Start method updateIssuerV1, issuerId -> {}, Issuer -> {}", issuerId, issuerUpdateInDto);

        IssuerEntity issuerEntityLast = validateIssuer(issuerId);

        IssuerEntity issuerEntity = IssuerEntity.builder()
                .id(issuerEntityLast.getId())
                .code(ObjectUtils.isEmpty(issuerUpdateInDto.getCode()) ? issuerEntityLast.getCode()
                        : issuerUpdateInDto.getCode())
                .name(ObjectUtils.isEmpty(issuerUpdateInDto.getName()) ? issuerEntityLast.getName()
                        : issuerUpdateInDto.getName())
                .shortName(ObjectUtils.isEmpty(issuerUpdateInDto.getShortName())
                        ? issuerEntityLast.getShortName()
                        : issuerUpdateInDto.getShortName())
                .type(ObjectUtils.isEmpty(issuerUpdateInDto.getTypeId()) ? issuerEntityLast.getType()
                        : validateType(issuerUpdateInDto.getTypeId()))
                .country(ObjectUtils.isEmpty(issuerUpdateInDto.getCountryId())
                        ? issuerEntityLast.getCountry()
                        : validateCountry(issuerUpdateInDto.getCountryId()))
                .gics(ObjectUtils.isEmpty(issuerUpdateInDto.getGicsId()) ? issuerEntityLast.getGics()
                        : validateStatusGics(issuerUpdateInDto.getGicsId()))
                .dateEntry(ObjectUtils.isEmpty(issuerUpdateInDto.getDateEntry())
                        ? issuerEntityLast.getDateEntry()
                        : issuerUpdateInDto.getDateEntry())
                .countryOrigin(
                        ObjectUtils.isEmpty(issuerUpdateInDto.getCountryOrigin())
                                ? issuerEntityLast.getCountryOrigin()
                                : validateCountry(issuerUpdateInDto.getCountryOrigin()))
                .cusip(ObjectUtils.isEmpty(issuerUpdateInDto.getCusip()) ? issuerEntityLast.getCusip()
                        : issuerUpdateInDto.getCusip())
                .taxCode(ObjectUtils.isEmpty(issuerUpdateInDto.getTaxCode())
                        ? issuerEntityLast.getTaxCode()
                        : issuerUpdateInDto.getTaxCode())
                .status(ObjectUtils.isEmpty(issuerUpdateInDto.getStatusId())
                        ? issuerEntityLast.getStatus()
                        : validateStatus(issuerUpdateInDto.getStatusId()))
                .withdrawalDate(ObjectUtils.isEmpty(issuerUpdateInDto.getWithdrawalDate())
                        ? issuerEntityLast.getWithdrawalDate()
                        : issuerUpdateInDto.getWithdrawalDate())
                .mainMarket(ObjectUtils.isEmpty(issuerUpdateInDto.getMainMarket())
                        ? issuerEntityLast.getMainMarket()
                        : issuerUpdateInDto.getMainMarket())
                .regulatorCode(
                        ObjectUtils.isEmpty(issuerUpdateInDto.getRegulatorCode())
                                ? issuerEntityLast.getRegulatorCode()
                                : issuerUpdateInDto.getRegulatorCode())
                .depository(ObjectUtils.isEmpty(issuerUpdateInDto.getDepositoryId())
                        ? issuerEntityLast.getDepository()
                        : validateDepository(issuerUpdateInDto.getDepositoryId()))
                .dvlCode(ObjectUtils.isEmpty(issuerUpdateInDto.getDvlCode())
                        ? issuerEntityLast.getDvlCode()
                        : issuerUpdateInDto.getDvlCode())
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyIp(PropertiesContext.getClientIp())
                .lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyDate(PropertiesContext.getClientDatetime())
                .build();

        IssuerOutDto issuerOutDto = MapperUtil.issuerEntityToIssuerOutDto(issuerRepository.save(issuerEntity));

        log.info("End method updateIssuerV1, Issuer -> {}", issuerOutDto);
        return issuerOutDto;
    }

    private Specification<IssuerEntity> issuerSpecification(String issuerCode, String text) {
        return (root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();
            if (!ObjectUtils.isEmpty(issuerCode)) {
                String searchValue = "%" + issuerCode.trim().toLowerCase() + "%";
                Predicate codePredicate = criteriaBuilder.like(
                        criteriaBuilder.lower(root.get("code")), searchValue);
                predicates.add(criteriaBuilder.or(codePredicate));
            }
            if (!ObjectUtils.isEmpty(text)) {
                String searchValue = "%" + text.trim().toLowerCase() + "%";
                Predicate codePredicate = criteriaBuilder.like(
                        criteriaBuilder.lower(root.get("code")), searchValue);
                Predicate namePredicate = criteriaBuilder.like(
                        criteriaBuilder.lower(root.get("name")), searchValue);
                predicates.add(criteriaBuilder.or(codePredicate, namePredicate));
            }
            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }

    private IssuerEntity validateIssuer(Long issuerId) {
        return issuerRepository.findById(issuerId)
                .orElseThrow(() -> new ServiceException(ErrorCode.ISSUER_NOT_FOUND,
                        HttpStatus.NOT_FOUND));
    }

    private CountryEntity validateCountry(Long countryId) {
        return countryRepository.findById(countryId)
                .orElseThrow(() -> new ServiceException(ErrorCode.COUNTRY_NOT_FOUND,
                        HttpStatus.NOT_FOUND));
    }

    private TypeEntity validateType(Long typeId) {
        return typeRepository.findById(typeId)
                .orElseThrow(() -> new ServiceException(ErrorCode.TYPE_NOT_FOUND,
                        HttpStatus.NOT_FOUND));
    }

    private StatusEntity validateStatus(Long statusId) {
        return statusRepository.findById(statusId)
                .orElseThrow(() -> new ServiceException(ErrorCode.STATUS_NOT_FOUND,
                        HttpStatus.NOT_FOUND));
    }

    private GicsEntity validateStatusGics(Long statusId) {
        return gicsRepository.findById(statusId)
                .orElseThrow(() -> new ServiceException(ErrorCode.GICS_NOT_FOUND,
                        HttpStatus.NOT_FOUND));
    }

    private DepositoryEntity validateDepository(String depositoryId) {
        return depositoryRepository.findById(depositoryId)
                .orElseThrow(() -> new ServiceException(ErrorCode.DEPOSITORY_NOT_FOUND,
                        HttpStatus.NOT_FOUND));
    }

}

```

## src/main/java/com/nubo/master/instruments/api/service/impl/MarketServiceImpl.java

```java
package com.nubo.master.instruments.api.service.impl;

import java.util.List;
import java.util.Objects;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.nubo.master.instruments.api.application.properties.PropertiesContext;
import com.nubo.master.instruments.api.exception.ServiceException;
import com.nubo.master.instruments.api.exception.error.ErrorCode;
import com.nubo.master.instruments.api.helpers.MapperPageUtil;
import com.nubo.master.instruments.api.helpers.MapperUtil;
import com.nubo.master.instruments.api.models.dto.response.MarketOutDto;
import com.nubo.master.instruments.api.models.dto.response.PageResponseOutDto;
import com.nubo.master.instruments.api.models.entity.MarketEntity;
import com.nubo.master.instruments.api.models.enums.VersionApiEnum;
import com.nubo.master.instruments.api.repository.MarketRepository;
import com.nubo.master.instruments.api.service.MarketService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class MarketServiceImpl implements MarketService {

    private final MarketRepository marketRepository;

    @Override
    public PageResponseOutDto<MarketOutDto> findAllMarkets(Pageable pageable) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllMarketsV1(pageable);
        }
        throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND);
    }

    @Override
    public MarketOutDto findMarketById(String marketId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findMarketByIdV1(marketId);
        }
        throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND);
    }

    @Override
    public List<MarketOutDto> findMarketsByCategory(String category) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findMarketsByCategoryV1(category);
        }
        throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND);
    }

    @Override
    public List<MarketOutDto> findMarketsByType(String marketType) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findMarketsByTypeV1(marketType);
        }
        throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND);
    }

    private PageResponseOutDto<MarketOutDto> findAllMarketsV1(Pageable pageable) {
        log.info("Starting to find all markets with pagination");

        Page<MarketEntity> marketPage = marketRepository.findAll(pageable);

        List<MarketOutDto> marketOutDtoList = marketPage.getContent().stream()
                .map(this::mapToMarketOutDto)
                .toList();

        log.info("Found {} markets", marketOutDtoList.size());
        return MapperPageUtil.pageToPageResponseOutDto(marketOutDtoList, marketPage);
    }

    private MarketOutDto findMarketByIdV1(String marketId) {
        log.info("Starting to find market by ID: {}", marketId);

        if (!StringUtils.hasText(marketId)) {
            throw new ServiceException(ErrorCode.BAD_REQUEST);
        }

        MarketEntity marketEntity = marketRepository.findById(marketId)
                .orElseThrow(() -> new ServiceException(ErrorCode.NOT_FOUND));

        MarketOutDto marketOutDto = mapToMarketOutDto(marketEntity);

        log.info("Found market: {}", marketOutDto.getId());
        return marketOutDto;
    }

    private List<MarketOutDto> findMarketsByCategoryV1(String category) {
        log.info("Starting to find markets by category: {}", category);

        if (!StringUtils.hasText(category)) {
            throw new ServiceException(ErrorCode.BAD_REQUEST);
        }

        String categoryUpperCase = category.toUpperCase();

        List<MarketEntity> marketList = marketRepository.findByDescriptionContainingIgnoreCase(categoryUpperCase);

        List<MarketOutDto> marketOutDtoList = marketList.stream()
                .map(this::mapToMarketOutDto)
                .toList();

        log.info("Found {} markets for category: {}", marketOutDtoList.size(), categoryUpperCase);
        return marketOutDtoList;
    }

    private List<MarketOutDto> findMarketsByTypeV1(String marketType) {
        log.info("Starting to find markets by type: {}", marketType);

        if (!StringUtils.hasText(marketType)) {
            throw new ServiceException(ErrorCode.BAD_REQUEST);
        }

        String typeUpperCase = marketType.toUpperCase();

        List<MarketEntity> marketList = marketRepository
                .findByDescriptionContainingIgnoreCaseOrIdContainingIgnoreCase(typeUpperCase, typeUpperCase);

        List<MarketOutDto> marketOutDtoList = marketList.stream()
                .map(this::mapToMarketOutDto)
                .toList();

        log.info("Found {} markets for type: {}", marketOutDtoList.size(), typeUpperCase);
        return marketOutDtoList;
    }

    private MarketOutDto mapToMarketOutDto(MarketEntity marketEntity) {
        return MapperUtil.marketEntityToMarketOutDto(marketEntity);
    }
}

```

## src/main/java/com/nubo/master/instruments/api/service/impl/RiskModelServiceImpl.java

```java
package com.nubo.master.instruments.api.service.impl;

import com.nubo.master.instruments.api.helpers.MapperEquityInstrumentLoan;
import com.nubo.master.instruments.api.models.dto.response.EquityInstrumentLoanOutDto;
import com.nubo.master.instruments.api.models.dto.response.RiskModelLoanOutDto;
import com.nubo.master.instruments.api.models.entity.DataRiesgoDiaEntity;
import com.nubo.master.instruments.api.repository.DataRiesgoDiaRepository;
import com.nubo.master.instruments.api.service.RiskModelService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.function.Function;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class RiskModelServiceImpl implements RiskModelService {

    private final DataRiesgoDiaRepository dataRiesgoDiaRepository;

    public void addRiskModelByMultipleMnemonic (Boolean includeRiskModel, List<EquityInstrumentLoanOutDto> dtoList) {
        if (Boolean.TRUE.equals(includeRiskModel)) {
            List<String> mnemonics = dtoList.stream()
                    .map(EquityInstrumentLoanOutDto::getMnemonic)
                    .filter(Objects::nonNull)
                    .distinct()
                    .toList();
            Map<String, DataRiesgoDiaEntity> riskModel = findRiskModel(mnemonics);
            dtoList.stream()
                    .collect(
                            Collectors.toMap(
                                    EquityInstrumentLoanOutDto::getMnemonic, dto -> {
                                        DataRiesgoDiaEntity riesgo = riskModel.get(dto.getMnemonic());
                                        dto.setRiskModel(MapperEquityInstrumentLoan.toRiskModelDto(riesgo));
                                        return dto;
                                    }, (a, b) -> a
                            )
                    ).values()
                    .stream()
                    .toList();
        }
    }

    public void addRiskModelByMnemonic (Boolean includeRiskModel, String mnemonic, EquityInstrumentLoanOutDto dto) {
        if (Boolean.TRUE.equals(includeRiskModel)) {
            Map<String, DataRiesgoDiaEntity> riskModel = findRiskModel(Arrays.asList(mnemonic));
            RiskModelLoanOutDto riskModelLoanOutDto = MapperEquityInstrumentLoan.toRiskModelDto(riskModel.get(mnemonic));
            if (riskModelLoanOutDto != null) {
                dto.setRiskModel(riskModelLoanOutDto);
            }
        }
    }

    private Map<String, DataRiesgoDiaEntity> findRiskModel (List<String> mnemonics) {
        List<DataRiesgoDiaEntity> dataRiesgoDiaEntities = dataRiesgoDiaRepository.findDataRiesgoByMnemonics(mnemonics);
        Map<String, DataRiesgoDiaEntity> riesgoPorMnemonic = dataRiesgoDiaEntities.stream()
                .collect(Collectors.toMap(
                        DataRiesgoDiaEntity::getMnemonic,
                        Function.identity(), (a, b) -> a
                ));
        return riesgoPorMnemonic;
    }

}

```

## src/main/java/com/nubo/master/instruments/api/service/impl/SecurityTitleSuspendedHistoryServiceImpl.java

```java
package com.nubo.master.instruments.api.service.impl;

import com.nubo.master.instruments.api.application.properties.PropertiesContext;
import com.nubo.master.instruments.api.exception.ServiceException;
import com.nubo.master.instruments.api.exception.error.ErrorCode;
import com.nubo.master.instruments.api.helpers.MapperPageUtil;
import com.nubo.master.instruments.api.helpers.MapperUtil;
import com.nubo.master.instruments.api.models.dto.request.ParamsPageInDto;
import com.nubo.master.instruments.api.models.dto.response.PageResponseOutDto;
import com.nubo.master.instruments.api.models.dto.response.SecurityTitleSuspendedHistoryOutDto;
import com.nubo.master.instruments.api.models.entity.SecurityTitleSuspendedHistoryEntity;
import com.nubo.master.instruments.api.models.enums.VersionApiEnum;
import com.nubo.master.instruments.api.repository.SecurityTitleSuspendedHistoryRepository;
import com.nubo.master.instruments.api.service.SecurityTitleSuspendedHistoryService;
import jakarta.persistence.criteria.Predicate;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
@Slf4j
public class SecurityTitleSuspendedHistoryServiceImpl implements SecurityTitleSuspendedHistoryService {

    private final SecurityTitleSuspendedHistoryRepository securityTitleSuspendedHistoryRepository;

    @Override
    public PageResponseOutDto<SecurityTitleSuspendedHistoryOutDto> findSecurityTitleSuspendedHistory(
            ParamsPageInDto paramsPageInDto, Long securityId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findSecurityTitleSuspendedHistoryV1(paramsPageInDto, securityId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<SecurityTitleSuspendedHistoryOutDto> findSecurityTitleSuspendedHistoryV1(ParamsPageInDto paramsPageInDto, Long securityId) {
        log.info("Start method findSecurityTitleSuspendedHistoryV1, securityId -> {}", securityId);

        Specification<SecurityTitleSuspendedHistoryEntity> securityTitleSuspendedHistoryEntitySpecification =
                securityTitleSuspendedHistoryEntitySpecification(securityId);

        PageResponseOutDto<SecurityTitleSuspendedHistoryOutDto> pageResponseOutDto;
        List<SecurityTitleSuspendedHistoryOutDto> securityTitleSuspendedHistoryOutDtoList = new ArrayList<>();
        if (paramsPageInDto.isAll()) {
            List<SecurityTitleSuspendedHistoryEntity> securityTitleSuspendedHistoryEntityList =
                    securityTitleSuspendedHistoryRepository.findAll(securityTitleSuspendedHistoryEntitySpecification);

            securityTitleSuspendedHistoryEntityList.forEach(securityTitleSuspendedHistoryEntity ->
                    securityTitleSuspendedHistoryOutDtoList.add(
                            MapperUtil.securityTitleSuspendedHistoryEntityToSecurityTitleSuspendedHistoryOutDto(securityTitleSuspendedHistoryEntity)));

            pageResponseOutDto = buildPageResponseSecurityTitleSuspendedHistoryBlockHistory(securityTitleSuspendedHistoryOutDtoList,
                    0, securityTitleSuspendedHistoryOutDtoList.size(), securityTitleSuspendedHistoryOutDtoList.size());
        } else {
            Sort sortBy = paramsPageInDto.getOrder().equalsIgnoreCase(Sort.Direction.ASC.name())
                    ? Sort.by(Sort.Order.asc(paramsPageInDto.getSort()), Sort.Order.asc("id"))
                    : Sort.by(Sort.Order.desc(paramsPageInDto.getSort()), Sort.Order.desc("id"));
            Pageable pageable = PageRequest.of(paramsPageInDto.getPage(), paramsPageInDto.getSize(), sortBy);

            Page<SecurityTitleSuspendedHistoryEntity> securityTitleSuspendedHistoryEntityPage =
                    securityTitleSuspendedHistoryRepository.findAll(securityTitleSuspendedHistoryEntitySpecification, pageable);

            securityTitleSuspendedHistoryEntityPage.getContent().forEach(securityTitleSuspendedHistoryEntity ->
                    securityTitleSuspendedHistoryOutDtoList.add(
                            MapperUtil.securityTitleSuspendedHistoryEntityToSecurityTitleSuspendedHistoryOutDto(securityTitleSuspendedHistoryEntity)));

            pageResponseOutDto = buildPageResponseSecurityTitleSuspendedHistoryBlockHistory(securityTitleSuspendedHistoryOutDtoList,
                    paramsPageInDto.getPage(), paramsPageInDto.getSize(), (int) securityTitleSuspendedHistoryEntityPage.getTotalElements());
        }

        log.info("End method findSecurityTitleSuspendedHistoryV1, pageResponseOutDto -> {}", pageResponseOutDto);

        return pageResponseOutDto;
    }

    private PageResponseOutDto<SecurityTitleSuspendedHistoryOutDto> buildPageResponseSecurityTitleSuspendedHistoryBlockHistory(
            List<SecurityTitleSuspendedHistoryOutDto> content, int page, int size, int totalElements) {
        Page<SecurityTitleSuspendedHistoryOutDto> securityTitleSuspendedHistoryBlockHistoryPage = new PageImpl<>(content,
                PageRequest.of(page, size), totalElements);
        return MapperPageUtil.pageToPageResponseOutDto(content, securityTitleSuspendedHistoryBlockHistoryPage);
    }

    private Specification<SecurityTitleSuspendedHistoryEntity> securityTitleSuspendedHistoryEntitySpecification(Long securityId) {
        return (root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();
            predicates.add(criteriaBuilder.equal(root.get("securityTitle").get("id"), securityId));
            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }

}

```

## src/main/java/com/nubo/master/instruments/api/service/impl/SecurityTitleSuspendedServiceImpl.java

```java
package com.nubo.master.instruments.api.service.impl;

import com.nubo.master.instruments.api.application.properties.PropertiesConfig;
import com.nubo.master.instruments.api.application.properties.PropertiesContext;
import com.nubo.master.instruments.api.exception.ServiceException;
import com.nubo.master.instruments.api.exception.error.ErrorCode;
import com.nubo.master.instruments.api.helpers.MapperUtil;
import com.nubo.master.instruments.api.models.dto.request.NoSuspendedSecurityTitleInDto;
import com.nubo.master.instruments.api.models.dto.request.SuspendedSecurityTitleInDto;
import com.nubo.master.instruments.api.models.dto.response.SecurityTitleSuspendedHistoryOutDto;
import com.nubo.master.instruments.api.models.entity.SecurityTitleEntity;
import com.nubo.master.instruments.api.models.entity.SecurityTitleSuspendedHistoryEntity;
import com.nubo.master.instruments.api.models.entity.TypeEntity;
import com.nubo.master.instruments.api.models.enums.TypeSecurityTitletActionEnum;
import com.nubo.master.instruments.api.models.enums.VersionApiEnum;
import com.nubo.master.instruments.api.repository.SecurityTitleRepository;
import com.nubo.master.instruments.api.repository.SecurityTitleSuspendedHistoryRepository;
import com.nubo.master.instruments.api.repository.TypeRepository;
import com.nubo.master.instruments.api.service.SecurityTitleSuspendedService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import java.time.LocalDate;
import java.util.Objects;

@Service
@RequiredArgsConstructor
@Slf4j
public class SecurityTitleSuspendedServiceImpl implements SecurityTitleSuspendedService {

    private final SecurityTitleSuspendedHistoryRepository securityTitleSuspendedHistoryRepository;
    private final SecurityTitleRepository securityTitleRepository;
    private final TypeRepository typeRepository;
    private final PropertiesConfig propertiesConfig;

    @Override
    public SecurityTitleSuspendedHistoryOutDto suspendedSecurityTitle(
            SuspendedSecurityTitleInDto suspendedSecurityTitleInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return suspendedSecurityTitleV1(suspendedSecurityTitleInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private SecurityTitleSuspendedHistoryOutDto suspendedSecurityTitleV1(SuspendedSecurityTitleInDto suspendedSecurityTitleInDto) {
        log.info("Start method suspendedSecurityTitleV1, suspendedSecurityTitleInDto -> {}", suspendedSecurityTitleInDto);

        LocalDate effectiveDate;
        if (ObjectUtils.isEmpty(suspendedSecurityTitleInDto.getEffectiveDate())) {
            effectiveDate = PropertiesContext.getClientDatetime().toLocalDate();
        } else {
            effectiveDate = suspendedSecurityTitleInDto.getEffectiveDate();
        }

        SecurityTitleEntity securityTitleEntity = validateSecurityTitle(suspendedSecurityTitleInDto.getSecurityId());
        TypeEntity processType = validateType(suspendedSecurityTitleInDto.getProcessTypeId());
        securityTitleEntity.setSuspendedNegotiation(true);
        securityTitleEntity.setSuspendedEffectiveDate(effectiveDate);
        securityTitleEntity.setSuspendedProcessType(processType);
        securityTitleRepository.save(securityTitleEntity);

        SecurityTitleSuspendedHistoryEntity securityTitleSuspendedHistoryEntity = SecurityTitleSuspendedHistoryEntity.builder()
                .securityTitle(securityTitleEntity)
                .actionType(validateType(TypeSecurityTitletActionEnum.SUSPENDED.getId()))
                .processType(processType)
                .effectiveDate(effectiveDate)
                .description(suspendedSecurityTitleInDto.getDescription())
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyIp(PropertiesContext.getClientIp())
                .lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyDate(PropertiesContext.getClientDatetime())
                .build();

        SecurityTitleSuspendedHistoryEntity securityTitleSuspendedHistoryEntitySaved =
                securityTitleSuspendedHistoryRepository.save(securityTitleSuspendedHistoryEntity);

        SecurityTitleSuspendedHistoryOutDto securityTitleSuspendedHistoryOutDto =
                MapperUtil.securityTitleSuspendedHistoryEntityToSecurityTitleSuspendedHistoryOutDto(securityTitleSuspendedHistoryEntitySaved);

        log.info("End method suspendedSecurityTitleV1, securityTitleSuspendedHistoryOutDto -> {}", securityTitleSuspendedHistoryOutDto);

        return securityTitleSuspendedHistoryOutDto;
    }

    @Override
    public SecurityTitleSuspendedHistoryOutDto noSuspendedSecurityTitle(
            NoSuspendedSecurityTitleInDto noSuspendedSecurityTitleInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return noSuspendedSecurityTitleV1(noSuspendedSecurityTitleInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private SecurityTitleSuspendedHistoryOutDto noSuspendedSecurityTitleV1(NoSuspendedSecurityTitleInDto noSuspendedSecurityTitleInDto) {
        log.info("Start method noSuspendedSecurityTitleV1, noSuspendedSecurityTitleInDto -> {}", noSuspendedSecurityTitleInDto);

        SecurityTitleEntity securityTitleEntity = validateSecurityTitle(noSuspendedSecurityTitleInDto.getSecurityId());
        securityTitleEntity.setSuspendedNegotiation(false);
        securityTitleRepository.save(securityTitleEntity);

        SecurityTitleSuspendedHistoryEntity securityTitleSuspendedHistoryEntity = SecurityTitleSuspendedHistoryEntity.builder()
                .securityTitle(validateSecurityTitle(noSuspendedSecurityTitleInDto.getSecurityId()))
                .actionType(validateType(TypeSecurityTitletActionEnum.NO_SUSPENDED.getId()))
                .processType(securityTitleEntity.getSuspendedProcessType())
                .description(noSuspendedSecurityTitleInDto.getDescription())
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyIp(PropertiesContext.getClientIp())
                .lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyDate(PropertiesContext.getClientDatetime())
                .build();

        SecurityTitleSuspendedHistoryEntity securityTitleSuspendedHistoryEntitySaved =
                securityTitleSuspendedHistoryRepository.save(securityTitleSuspendedHistoryEntity);

        SecurityTitleSuspendedHistoryOutDto securityTitleSuspendedHistoryOutDto =
                MapperUtil.securityTitleSuspendedHistoryEntityToSecurityTitleSuspendedHistoryOutDto(securityTitleSuspendedHistoryEntitySaved);

        log.info("End method noSuspendedSecurityTitleV1, securityTitleSuspendedHistoryOutDto -> {}", securityTitleSuspendedHistoryOutDto);

        return securityTitleSuspendedHistoryOutDto;
    }

    private SecurityTitleEntity validateSecurityTitle(Long participantId) {
        return securityTitleRepository.findById(participantId)
                .orElseThrow(() -> new ServiceException(ErrorCode.SECURITY_TITLE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private TypeEntity validateType(Long typeId) {
        return typeRepository.findById(typeId)
                .orElseThrow(() -> new ServiceException(ErrorCode.TYPE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

}

```

## src/main/java/com/nubo/master/instruments/api/service/impl/StatusServiceImpl.java

```java
package com.nubo.master.instruments.api.service.impl;

import java.util.List;
import java.util.Objects;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.nubo.master.instruments.api.application.properties.PropertiesContext;
import com.nubo.master.instruments.api.exception.ServiceException;
import com.nubo.master.instruments.api.exception.error.ErrorCode;
import com.nubo.master.instruments.api.helpers.MapperPageUtil;
import com.nubo.master.instruments.api.helpers.MapperUtil;
import com.nubo.master.instruments.api.models.dto.response.PageResponseOutDto;
import com.nubo.master.instruments.api.models.dto.response.StatusOutDto;
import com.nubo.master.instruments.api.models.entity.StatusEntity;
import com.nubo.master.instruments.api.models.enums.PropertiesEnum;
import com.nubo.master.instruments.api.models.enums.VersionApiEnum;
import com.nubo.master.instruments.api.repository.StatusRepository;
import com.nubo.master.instruments.api.service.StatusService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class StatusServiceImpl implements StatusService
{

    private final StatusRepository statusRepository;

    @Override
    public PageResponseOutDto<StatusOutDto> findAllInstrumentsStatus(Pageable pageable)
    {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1)
        {
            return findAllStatusByCategoryV1(pageable, PropertiesEnum.INSTRUMENTS_RV_CATEGORY.getValue());
        }
        throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND);
    }

    private PageResponseOutDto<StatusOutDto> findAllStatusByCategoryV1(Pageable pageable, String category)
    {

        log.info("Starting to find all status by category: {}", category);

        if (!StringUtils.hasText(category))
        {
            throw new ServiceException(ErrorCode.BAD_REQUEST);
        }

        String categoryUpperCase = category.toUpperCase();

        Page<StatusEntity> statusPage = statusRepository.findByCategoryIgnoreCase(pageable, categoryUpperCase);

        List<StatusOutDto> statusOutDtoList = statusPage.getContent().stream()
                .map(this::mapToStatusOutDto)
                .toList();

        log.info("Found {} status records for category: {}", statusOutDtoList.size(), categoryUpperCase);
        return MapperPageUtil.pageToPageResponseOutDto(statusOutDtoList, statusPage);
    }

    private StatusOutDto mapToStatusOutDto(StatusEntity statusEntity)
    {
        return MapperUtil.statusEntityToStatusOutDto(statusEntity);
    }
}

```

## src/main/java/com/nubo/master/instruments/api/service/impl/TypeServiceImpl.java

```java
package com.nubo.master.instruments.api.service.impl;

import com.nubo.master.instruments.api.application.properties.PropertiesContext;
import com.nubo.master.instruments.api.exception.ServiceException;
import com.nubo.master.instruments.api.exception.error.ErrorCode;
import com.nubo.master.instruments.api.helpers.MapperUtil;
import com.nubo.master.instruments.api.models.dto.response.TypeOutDto;
import com.nubo.master.instruments.api.models.entity.TypeEntity;
import com.nubo.master.instruments.api.models.enums.TypeCategoryEnum;
import com.nubo.master.instruments.api.models.enums.VersionApiEnum;
import com.nubo.master.instruments.api.repository.TypeRepository;
import com.nubo.master.instruments.api.service.TypeService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
@Slf4j
public class TypeServiceImpl implements TypeService {

    private final TypeRepository typeRepository;

    @Override
    public List<TypeOutDto> findAllType(String category) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllTypeV1(category);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<TypeOutDto> findAllTypeV1(String category) {
        log.info("Start method findAllTypeV1");

        final List<TypeEntity> typeEntityList;
        if (org.springframework.util.StringUtils.hasText(category)) {
            typeEntityList = typeRepository.findByCategoryIgnoreCase(category.trim());
        } else {
            typeEntityList = typeRepository.findAll();
        }

        List<TypeOutDto> typeOutDtoList = typeEntityList.stream()
                .map(MapperUtil::typeEntityToTypeOutDto)
                .toList();

        log.info("End method findAllTypeV1, typeOutDtoList -> {}", typeOutDtoList);

        return typeOutDtoList;
    }

    @Override
    public List<TypeOutDto> findTypeCorporateActions() {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findTypeCorporateActionsV1();
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<TypeOutDto> findTypeCorporateActionsV1() {
        log.info("Start method findTypeCorporateActionsV1");

        List<TypeEntity> typeEntityList = typeRepository.findByGuaranteeLimit(TypeCategoryEnum.CORPORATE_EVENT.getCategory());

        List<TypeOutDto> typeOutDtoList = typeEntityList.stream()
                .map(MapperUtil::typeEntityToTypeOutDto).filter(Objects::nonNull)
                .toList();

        log.debug("End method findTypeOperationGuaranteeLimitsV1, typeOutDtoList -> {}", typeOutDtoList);

        return typeOutDtoList;
    }

}

```

## src/main/java/com/nubo/master/instruments/api/web/controller/CfiRestController.java

```java
package com.nubo.master.instruments.api.web.controller;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nubo.master.instruments.api.models.dto.response.CfiOutDto;
import com.nubo.master.instruments.api.models.dto.response.PageResponseOutDto;
import com.nubo.master.instruments.api.service.CfiService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@Tag(name = "CFI")
@RestController
@RequestMapping("/{version}/cfi")
@RequiredArgsConstructor
public class CfiRestController {

    private final CfiService cfiService;

    @Operation(summary = "Find all CFI codes", description = "Find all CFI codes with pagination")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = CfiOutDto[].class)))
    })
    @GetMapping
    public ResponseEntity<PageResponseOutDto<CfiOutDto>> findAllCfis(
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

        return ResponseEntity.ok(cfiService.findAllCfis(pageable));
    }

    @Operation(summary = "Find CFI by ID", description = "Find CFI code by its unique identifier")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = CfiOutDto.class))),
            @ApiResponse(responseCode = "404", description = "CFI not found")
    })
    @GetMapping("/{cfiId}")
    public ResponseEntity<CfiOutDto> findCfiById(@PathVariable String cfiId) {
        return ResponseEntity.ok(cfiService.findCfiById(cfiId));
    }

}

```

## src/main/java/com/nubo/master/instruments/api/web/controller/ClassRestController.java

```java
package com.nubo.master.instruments.api.web.controller;

import java.util.List;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nubo.master.instruments.api.models.dto.response.ClassOutDto;
import com.nubo.master.instruments.api.models.dto.response.PageResponseOutDto;
import com.nubo.master.instruments.api.service.ClassService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@Tag(name = "Instrument Class")
@RestController
@RequestMapping("/{version}/class")
@RequiredArgsConstructor
public class ClassRestController {

    private final ClassService classService;

    @Operation(summary = "Find all classes", description = "Find all instrument classes with pagination")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = ClassOutDto[].class)))
    })
    @GetMapping
    public ResponseEntity<PageResponseOutDto<ClassOutDto>> findAllClasses(
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

        return ResponseEntity.ok(classService.findAllClasses(pageable));
    }

    @Operation(summary = "Find class by ID", description = "Find a specific instrument class by its ID")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = ClassOutDto.class))),
            @ApiResponse(responseCode = "404", description = "Class not found", content = @Content)
    })
    @GetMapping("/{classId}")
    public ResponseEntity<ClassOutDto> findClassById(@PathVariable String classId) {
        return ResponseEntity.ok(classService.findClassById(classId));
    }

    @Operation(summary = "Find classes by category", description = "Find all instrument classes filtered by category (e.g., Ordinarias/Preferenciales). Category parameter is case-insensitive and will be converted to uppercase.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = ClassOutDto[].class)))
    })
    @GetMapping("/category/{category}")
    public ResponseEntity<List<ClassOutDto>> findClassesByCategory(@PathVariable String category) {
        return ResponseEntity.ok(classService.findClassesByCategory(category));
    }
}

```

## src/main/java/com/nubo/master/instruments/api/web/controller/CorporateActionsRestController.java

```java
package com.nubo.master.instruments.api.web.controller;

import com.nubo.master.instruments.api.models.dto.request.CorporateActionsParamsInDto;
import com.nubo.master.instruments.api.models.dto.request.ParamsPageInDto;
import com.nubo.master.instruments.api.models.dto.response.CorporateActionsOutDto;
import com.nubo.master.instruments.api.models.dto.response.PageResponseOutDto;
import com.nubo.master.instruments.api.service.CorporateActionsService;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;

@Tag(name = "Corporate Actions")
@RestController
@RequestMapping("/{version}/corporate-actions")
@RequiredArgsConstructor
public class CorporateActionsRestController {

    private final CorporateActionsService corporateActionsService;

    @Operation(summary = "Find corporate actions", description = "Find corporate actions")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response",
                    content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                            schema = @Schema(implementation = CorporateActionsOutDto[].class)))})
    @GetMapping("/search")
    public ResponseEntity<PageResponseOutDto<CorporateActionsOutDto>> searchCorporateActions(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "id") String sort,
            @RequestParam(defaultValue = "asc") String order,
            @RequestParam(required = false, name = "all", defaultValue = "false") Boolean all,
            @RequestParam(required = false) LocalDate dateEvent,
            @RequestParam(required = false) Long countryId,
            @RequestParam(required = false) String issuerId,
            @RequestParam(required = false) Long typeId) {
        CorporateActionsParamsInDto corporateActionsParamsInDto = CorporateActionsParamsInDto.builder()
                .dateEvent(dateEvent)
                .countryId(countryId)
                .issuerId(issuerId)
                .typeId(typeId)
                .build();
        ParamsPageInDto paramsPageInDto = ParamsPageInDto.builder().page(page).size(size).sort(sort).order(order).all(all).build();
        return ResponseEntity.ok(corporateActionsService.searchCorporateActions(paramsPageInDto, corporateActionsParamsInDto));
    }

    @Operation(summary = "Find corporate actions detail", description = "Find corporate actions detail")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response",
                    content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                            schema = @Schema(implementation = CorporateActionsOutDto.class)))})
    @GetMapping("/detail/{corporateActionId}")
    public ResponseEntity<CorporateActionsOutDto> findCorporateActionsDetail(@PathVariable Long corporateActionId) {
        return ResponseEntity.ok(corporateActionsService.findCorporateActionsDetail(corporateActionId));
    }

}

```

## src/main/java/com/nubo/master/instruments/api/web/controller/CountryRestController.java

```java
package com.nubo.master.instruments.api.web.controller;

import com.nubo.master.instruments.api.models.dto.response.CountryOutDto;
import com.nubo.master.instruments.api.service.CountryService;
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

@Tag(name = "Country")
@RequestMapping("/{version}/country")
@RestController
@RequiredArgsConstructor
public class CountryRestController {

    private final CountryService countryService;

    @Operation(summary = "Find countries", description = "Find countries")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response",
                    content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = CountryOutDto[].class)))})
    @GetMapping
    public ResponseEntity<List<CountryOutDto>> findCountries() {
        return ResponseEntity.ok(countryService.findCountries());
    }

}

```

## src/main/java/com/nubo/master/instruments/api/web/controller/DepositoryRestController.java

```java
package com.nubo.master.instruments.api.web.controller;

import java.util.List;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nubo.master.instruments.api.models.dto.response.DepositoryOutDto;
import com.nubo.master.instruments.api.models.dto.response.PageResponseOutDto;
import com.nubo.master.instruments.api.service.DepositoryService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@Tag(name = "Depository")
@RestController
@RequestMapping("/{version}/depository")
@RequiredArgsConstructor
public class DepositoryRestController {

    private final DepositoryService depositoryService;

    @Operation(summary = "Find all depositories", description = "Find all depositories with pagination")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = DepositoryOutDto[].class)))
    })
    @GetMapping
    public ResponseEntity<PageResponseOutDto<DepositoryOutDto>> findAllDepositories(
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

        return ResponseEntity.ok(depositoryService.findAllDepositories(pageable));
    }

    @Operation(summary = "Find depository by ID", description = "Find a specific depository by its ID")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = DepositoryOutDto.class))),
            @ApiResponse(responseCode = "404", description = "Depository not found", content = @Content)
    })
    @GetMapping("/{depositoryId}")
    public ResponseEntity<DepositoryOutDto> findDepositoryById(@PathVariable String depositoryId) {
        return ResponseEntity.ok(depositoryService.findDepositoryById(depositoryId));
    }

    @Operation(summary = "Find depositories by country", description = "Find all depositories filtered by country ID (e.g., Deceval(CO), Cavali(PE), DCV(CL))")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = DepositoryOutDto[].class)))
    })
    @GetMapping("/country/{countryId}")
    public ResponseEntity<List<DepositoryOutDto>> findDepositoriesByCountry(@PathVariable Long countryId) {
        return ResponseEntity.ok(depositoryService.findDepositoriesByCountry(countryId));
    }
}

```

## src/main/java/com/nubo/master/instruments/api/web/controller/EquityInstrumentLoanRestController.java

```java
package com.nubo.master.instruments.api.web.controller;

import com.nubo.master.instruments.api.models.dto.request.EquityInstrumentLoanMnemonicInDto;
import com.nubo.master.instruments.api.models.dto.request.EquityInstrumentLoanPrefixInDto;
import com.nubo.master.instruments.api.models.dto.response.*;
import com.nubo.master.instruments.api.service.EquityInstrumentLoanService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Tag(name = "Equity Instrument Loan")
@RestController
@RequestMapping("/{version}/instrument-loan")
@RequiredArgsConstructor
public class EquityInstrumentLoanRestController {

    private final EquityInstrumentLoanService service;

    @Operation(summary = "Find all equity instruments by mnemonic", description = "Find all equity instruments from SECURITY_TITLE table by mnemonic for loan response object")
    @PostMapping("/mnemonic")
    public ResponseEntity<EquityInstrumentLoanOutDto> getByMnemonic(
            @RequestBody EquityInstrumentLoanMnemonicInDto request) {

        return ResponseEntity.ok(
                service.getByMnemonic(request.getMnemonic(), request.getIncludeRiskModel())
        );
    }

    @Operation(summary = "Find all equity instruments", description = "Find all equity instruments from SECURITY_TITLE table for loan response object")
    @GetMapping("/list")
    public ResponseEntity<PageResponseOutDto<EquityInstrumentLoanOutDto>> list(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(required = false, name = "includeRiskModel", defaultValue = "false") Boolean includeRiskModel) {

        Pageable pageable = PageRequest.of(page, size);
        return ResponseEntity.ok(service.list(pageable, includeRiskModel));
    }

    @Operation(summary = "Find all equity instruments by prefix", description = "Find all equity instruments from SECURITY_TITLE table by prefix for loan response object")
    @PostMapping("/prefix")
    public ResponseEntity<List<EquityInstrumentLoanOutDto>> getByPrefix(
            @RequestBody EquityInstrumentLoanPrefixInDto request) {

        return ResponseEntity.ok(
                service.getByPrefix(request.getPrefix(), request.getIncludeRiskModel())
        );
    }

}

```

## src/main/java/com/nubo/master/instruments/api/web/controller/EquityInstrumentRestController.java

```java
package com.nubo.master.instruments.api.web.controller;

import com.nubo.master.instruments.api.models.dto.response.EquityInstrumentOutDto;
import com.nubo.master.instruments.api.models.dto.response.EquityInstrumentSimpleOutDto;
import com.nubo.master.instruments.api.models.dto.response.PageResponseOutDto;
import com.nubo.master.instruments.api.service.EquityInstrumentService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Set;

@Tag(name = "Equity Instrument - RV")
@RestController
@RequestMapping("/{version}/equity-instrument")
@RequiredArgsConstructor
public class EquityInstrumentRestController {

    private final EquityInstrumentService equityInstrumentService;

    private static final Set<String> ALLOWED_SORT_FIELDS = Set.of(
            "mnemonic", "isin", "issuer.code", "issuer", "securityId",
            "id", "name", "status", "market", "depository");

    @Operation(summary = "Find all equity instruments", description = "Find all equity instruments from SECURITY_TITLE and SECURITY_EQUITY tables")
    @GetMapping
    public ResponseEntity<PageResponseOutDto<EquityInstrumentOutDto>> findAllEquityInstruments(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {

        Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.ASC, "mnemonic"));
        return ResponseEntity.ok(equityInstrumentService.findAllEquityInstruments(pageable));
    }

    @Operation(summary = "Find equity instrument by ID", description = "Find equity instrument detail by SECURITY_ID")
    @GetMapping("/{securityId}")
    public ResponseEntity<EquityInstrumentOutDto> findEquityInstrumentById(@PathVariable Long securityId) {
        return ResponseEntity.ok(equityInstrumentService.findEquityInstrumentById(securityId));
    }

    @Operation(summary = "Find equity instruments with filters", description = "Find equity instruments filtered by Depository, Issuer Code, and Status as per ticket requirements")
    @GetMapping("/dynamic")
    public ResponseEntity<PageResponseOutDto<EquityInstrumentOutDto>> findEquityInstrumentsWithFilters(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(required = false) String fieldName,
            @RequestParam(required = false) String fieldValue,
            @RequestParam(required = false) String operation,
            @RequestParam(required = false) String sort,
            @RequestParam(required = false) String order,
            @RequestParam(required = false) String mnemonic,
            @RequestParam(required = false) String isinCode,
            @RequestParam(required = false) String issuerCode,
            @RequestParam(required = false) Long depositoryId,
            @RequestParam(required = false) Long statusId,
            @RequestParam(required = false) Long marketId) {

        Sort defaultSort = Sort.by(Sort.Direction.ASC, "mnemonic");
        Pageable pageable;

        if (sort != null && order != null) {
            Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
            Sort sorting = Sort.by(direction, sort);
            pageable = PageRequest.of(page, size, sorting);
        } else {
            pageable = PageRequest.of(page, size, defaultSort);
        }

        return ResponseEntity.ok(equityInstrumentService.findAllEquityInstrumentsDynamic(
                pageable, fieldName, fieldValue, operation, mnemonic,
                isinCode, issuerCode,
                depositoryId, statusId, marketId));
    }

    @GetMapping("/search/mnemonic")
    public ResponseEntity<PageResponseOutDto<EquityInstrumentSimpleOutDto>> findByMnemonic(
            @RequestParam String mnemonic,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "mnemonic") String sort,
            @RequestParam(defaultValue = "ASC") String order) {
        if (mnemonic == null || mnemonic.trim().isEmpty()) {
            return ResponseEntity.badRequest().build();
        }

        Pageable pageable;
        if (sort != null && order != null) {
            Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
            Sort sorting = Sort.by(direction, sort);
            pageable = PageRequest.of(page, size, sorting);
        } else {
            pageable = PageRequest.of(page, size);
        }

        return ResponseEntity
                .ok(equityInstrumentService.findEquityInstrumentsByMnemonicStartingWith(mnemonic, pageable));
    }

    @GetMapping("/search/isin")
    public ResponseEntity<PageResponseOutDto<EquityInstrumentSimpleOutDto>> findByIsin(
            @RequestParam String isin,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "isin") String sort,
            @RequestParam(defaultValue = "ASC") String order) {
        if (isin == null || isin.trim().isEmpty()) {
            return ResponseEntity.badRequest().build();
        }

        Pageable pageable;
        if (sort != null && order != null) {
            Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
            Sort sorting = Sort.by(direction, sort);
            pageable = PageRequest.of(page, size, sorting);
        } else {
            pageable = PageRequest.of(page, size);
        }

        return ResponseEntity.ok(equityInstrumentService.findEquityInstrumentsByIsinStartingWith(isin, pageable));
    }

    @GetMapping("/search/issuer-code")
    public ResponseEntity<PageResponseOutDto<String>> findByIssuerCode(
            @RequestParam(required = false) String issuerCode,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "issuer.code") String sort,
            @RequestParam(defaultValue = "ASC") String order) {
        Pageable pageable;
        if (sort != null && order != null) {
            Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
            Sort sorting = Sort.by(direction, sort);
            pageable = PageRequest.of(page, size, sorting);
        } else {
            pageable = PageRequest.of(page, size);
        }

        return ResponseEntity
                .ok(equityInstrumentService.findEquityInstrumentsByIssuerCodeStartingWith(issuerCode, pageable));
    }
}

```

## src/main/java/com/nubo/master/instruments/api/web/controller/EquitySecurityRestController.java

```java
package com.nubo.master.instruments.api.web.controller;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nubo.master.instruments.api.models.dto.request.EquitySecurityInDto;
import com.nubo.master.instruments.api.models.dto.request.EquitySecurityUpdateInDto;
import com.nubo.master.instruments.api.models.dto.response.EquitySecurityOutDto;
import com.nubo.master.instruments.api.models.dto.response.PageResponseOutDto;
import com.nubo.master.instruments.api.service.EquitySecurityService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@Tag(name = "Equity Security")
@RestController
@RequestMapping("/{version}/equity-security")
@RequiredArgsConstructor
public class EquitySecurityRestController {

        private final EquitySecurityService equitySecurityService;

        @Operation(summary = "Find all equity security", description = "Find all equity security")
        @ApiResponses(value = {
                        @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = EquitySecurityOutDto[].class)))
        })
        @GetMapping
        public ResponseEntity<PageResponseOutDto<EquitySecurityOutDto>> findAllEquitySecurity(
                        @RequestParam(defaultValue = "0") int page,
                        @RequestParam(defaultValue = "10") int size,
                        @RequestParam(defaultValue = "securityId") String sort,
                        @RequestParam(defaultValue = "asc") String order) {
                Sort sortBy = order.equalsIgnoreCase(Sort.Direction.ASC.name())
                                ? Sort.by(Sort.Order.asc(sort), Sort.Order.asc("securityId"))
                                : Sort.by(Sort.Order.desc(sort), Sort.Order.desc("securityId"));
                Pageable pageable = PageRequest.of(page, size, sortBy);
                return ResponseEntity.ok(equitySecurityService.findAllEquitySecurity(pageable));
        }

        @Operation(summary = "Find equity security", description = "Find equity security")
        @ApiResponses(value = {
                        @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = EquitySecurityOutDto.class)))
        })
        @GetMapping("/{securityId}")
        public ResponseEntity<EquitySecurityOutDto> findEquitySecurity(@PathVariable Long securityId) {
                return ResponseEntity.ok(equitySecurityService.findEquitySecurity(securityId));
        }

        @Operation(summary = "Create equity security", description = "Create equity security")
        @ApiResponses(value = {
                        @ApiResponse(responseCode = "201", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = EquitySecurityOutDto.class)))
        })
        @PostMapping
        public ResponseEntity<EquitySecurityOutDto> createEquitySecurity(
                        @Valid @RequestBody EquitySecurityInDto equitySecurityInDto) {
                EquitySecurityOutDto equitySecurityOutDto = equitySecurityService
                                .createEquitySecurity(equitySecurityInDto);
                return ResponseEntity.status(HttpStatus.CREATED).body(equitySecurityOutDto);
        }

        @Operation(summary = "Update equity security", description = "Update equity security")
        @ApiResponses(value = {
                        @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = EquitySecurityOutDto.class)))
        })
        @PatchMapping("/{securityId}")
        public ResponseEntity<EquitySecurityOutDto> updateEquitySecurity(@PathVariable Long securityId,
                        @Valid @RequestBody EquitySecurityUpdateInDto equitySecurityUpdateInDto) {
                EquitySecurityOutDto equitySecurityOutDto = equitySecurityService
                                .updateEquitySecurity(equitySecurityUpdateInDto, securityId);
                return ResponseEntity.ok(equitySecurityOutDto);
        }

        @Operation(summary = "Delete equity security", description = "Delete equity security")
        @ApiResponses(value = {
                        @ApiResponse(responseCode = "200", description = "Successfully Response")
        })
        @DeleteMapping("/{securityId}")
        public void deleteEquitySecurity(@PathVariable Long securityId) {
                equitySecurityService.deleteEquitySecurity(securityId);
        }

}

```

## src/main/java/com/nubo/master/instruments/api/web/controller/FixedIncomeSecurityRestController.java

```java
package com.nubo.master.instruments.api.web.controller;

import com.nubo.master.instruments.api.models.dto.request.ParamsFixedIncomeSecurityInDto;
import com.nubo.master.instruments.api.models.dto.request.ParamsPageInDto;
import com.nubo.master.instruments.api.models.dto.response.FixedIncomeSecurityOutDto;
import com.nubo.master.instruments.api.models.dto.response.PageResponseOutDto;
import com.nubo.master.instruments.api.models.dto.response.SecurityTitleOutDto;
import com.nubo.master.instruments.api.service.FixedIncomeSecurityService;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "Fixed Income Security - RF")
@RestController
@RequestMapping("/{version}/fixed-income-security")
@RequiredArgsConstructor
public class FixedIncomeSecurityRestController {

    private final FixedIncomeSecurityService fixedIncomeSecurityService;

    @Operation(summary = "Find fixed income security by securityId", description = "Find fixed income security by securityId")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response",
                    content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                            schema = @Schema(implementation = FixedIncomeSecurityOutDto[].class)))})
    @GetMapping("/{securityId}")
    public ResponseEntity<FixedIncomeSecurityOutDto> findFixedIncomeSecurityBySecurityId(@PathVariable Long securityId) {
        return ResponseEntity.ok(fixedIncomeSecurityService.findFixedIncomeSecurityBySecurityId(securityId));
    }

    @Operation(summary = "Search fixed income security", description = "Search fixed income security")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response",
                    content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                            schema = @Schema(implementation = SecurityTitleOutDto[].class)))})
    @GetMapping("/search")
    public ResponseEntity<PageResponseOutDto<SecurityTitleOutDto>> searchFixedIncomeSecurity(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "securityId") String sort,
            @RequestParam(defaultValue = "asc") String order,
            @RequestParam(required = false) String issuerCode,
            @RequestParam(required = false) Long depositoryId,
            @RequestParam(required = false) Long statusId,
            @RequestParam(required = false, name = "all", defaultValue = "false") Boolean all) {
        ParamsPageInDto paramsPageInDto = ParamsPageInDto.builder().page(page).size(size).sort(sort).order(order).all(all).build();
        ParamsFixedIncomeSecurityInDto paramsFixedIncomeSecurityInDto = ParamsFixedIncomeSecurityInDto.builder()
                .issuerCode(issuerCode).depositoryId(depositoryId).statusId(statusId).build();
        return ResponseEntity.ok(fixedIncomeSecurityService.searchFixedIncomeSecurity(paramsPageInDto, paramsFixedIncomeSecurityInDto));
    }

}

```

## src/main/java/com/nubo/master/instruments/api/web/controller/IssuerRestController.java

```java
package com.nubo.master.instruments.api.web.controller;

import com.nubo.master.instruments.api.models.dto.response.IssuerOutDto;
import com.nubo.master.instruments.api.models.dto.response.PageResponseOutDto;
import com.nubo.master.instruments.api.service.IssuerService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "Issuer")
@RestController
@RequestMapping("/{version}/issuer")
@RequiredArgsConstructor
public class IssuerRestController {

    private final IssuerService issuerService;

    @Operation(summary = "Search issuers", description = "Search issuers")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content =
            @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = IssuerOutDto[].class)))
    })
    @GetMapping("/search")
    public ResponseEntity<PageResponseOutDto<IssuerOutDto>> searchIssuer(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(required = false) String sort,
            @RequestParam(required = false) String order,
            @RequestParam(required = false) String issuerCode,
            @RequestParam(required = false) String text) {
        Pageable pageable;
        if (sort != null && order != null) {
            Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
            Sort sorting = Sort.by(direction, sort);
            pageable = PageRequest.of(page, size, sorting);
        } else {
            pageable = PageRequest.of(page, size);
        }

        return ResponseEntity.ok(issuerService.searchIssuer(pageable, issuerCode, text));
    }


}

```

## src/main/java/com/nubo/master/instruments/api/web/controller/MarketRestController.java

```java
package com.nubo.master.instruments.api.web.controller;

import java.util.List;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nubo.master.instruments.api.models.dto.response.MarketOutDto;
import com.nubo.master.instruments.api.models.dto.response.PageResponseOutDto;
import com.nubo.master.instruments.api.service.MarketService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@Tag(name = "Market")
@RestController
@RequestMapping("/{version}/market")
@RequiredArgsConstructor
public class MarketRestController {

    private final MarketService marketService;

    @Operation(summary = "Find all markets", description = "Find all markets with pagination")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = MarketOutDto[].class)))
    })
    @GetMapping
    public ResponseEntity<PageResponseOutDto<MarketOutDto>> findAllMarkets(
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

        return ResponseEntity.ok(marketService.findAllMarkets(pageable));
    }

    @Operation(summary = "Find market by ID", description = "Find a specific market by its ID")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = MarketOutDto.class))),
            @ApiResponse(responseCode = "404", description = "Market not found", content = @Content)
    })
    @GetMapping("/{marketId}")
    public ResponseEntity<MarketOutDto> findMarketById(@PathVariable String marketId) {
        return ResponseEntity.ok(marketService.findMarketById(marketId));
    }

    @Operation(summary = "Find markets by category", description = "Find all markets filtered by category. Category parameter is case-insensitive and will be converted to uppercase.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = MarketOutDto[].class)))
    })
    @GetMapping("/category/{category}")
    public ResponseEntity<List<MarketOutDto>> findMarketsByCategory(@PathVariable String category) {
        return ResponseEntity.ok(marketService.findMarketsByCategory(category));
    }

    @Operation(summary = "Find markets by type", description = "Find all markets filtered by type (Local/Extranjero). Type parameter is case-insensitive and will be converted to uppercase.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = MarketOutDto[].class)))
    })
    @GetMapping("/type/{marketType}")
    public ResponseEntity<List<MarketOutDto>> findMarketsByType(@PathVariable String marketType) {
        return ResponseEntity.ok(marketService.findMarketsByType(marketType));
    }
}

```

## src/main/java/com/nubo/master/instruments/api/web/controller/SecurityTitleSuspendedHistoryRestController.java

```java
package com.nubo.master.instruments.api.web.controller;

import com.nubo.master.instruments.api.models.dto.request.ParamsPageInDto;
import com.nubo.master.instruments.api.models.dto.response.PageResponseOutDto;
import com.nubo.master.instruments.api.models.dto.response.SecurityTitleSuspendedHistoryOutDto;
import com.nubo.master.instruments.api.service.SecurityTitleSuspendedHistoryService;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "Security Title Suspended History")
@RequestMapping("/{version}/security-title-suspended-history")
@RestController
@RequiredArgsConstructor
public class SecurityTitleSuspendedHistoryRestController {

    private final SecurityTitleSuspendedHistoryService securityTitleSuspendedHistoryService;

    @Operation(summary = "Find Security Title Suspended History", description = "Find Security Title Suspended History")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response",
                    content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                            schema = @Schema(implementation = SecurityTitleSuspendedHistoryOutDto[].class)))})
    @GetMapping("/search")
    public ResponseEntity<PageResponseOutDto<SecurityTitleSuspendedHistoryOutDto>> findSecurityTitleSuspendedHistory(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "id") String sort,
            @RequestParam(defaultValue = "desc") String order,
            @RequestParam(required = false, name = "all", defaultValue = "false") Boolean all,
            @RequestParam Long securityId) {
        ParamsPageInDto paramsPageInDto = ParamsPageInDto.builder().page(page).size(size).sort(sort).order(order).all(all).build();
        return ResponseEntity.ok(securityTitleSuspendedHistoryService.findSecurityTitleSuspendedHistory(paramsPageInDto, securityId));
    }

}

```

## src/main/java/com/nubo/master/instruments/api/web/controller/SecurityTitleSuspendedRestController.java

```java
package com.nubo.master.instruments.api.web.controller;

import com.nubo.master.instruments.api.models.dto.request.NoSuspendedSecurityTitleInDto;
import com.nubo.master.instruments.api.models.dto.request.SuspendedSecurityTitleInDto;
import com.nubo.master.instruments.api.models.dto.response.SecurityTitleSuspendedHistoryOutDto;
import com.nubo.master.instruments.api.service.SecurityTitleSuspendedService;
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
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "Security title Suspended")
@RequestMapping("/{version}/security-tile-suspended")
@RestController
@RequiredArgsConstructor
public class SecurityTitleSuspendedRestController {

    private final SecurityTitleSuspendedService securityTitleSuspendedService;

    @Operation(summary = "Suspended security title", description = "Suspended security title")
    @ApiResponses(value = {@ApiResponse(responseCode = "201", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = SecurityTitleSuspendedHistoryOutDto.class)))})
    @PostMapping
    public ResponseEntity<SecurityTitleSuspendedHistoryOutDto> suspendedSecurityTitle(
            @Valid @RequestBody SuspendedSecurityTitleInDto suspendedSecurityTitleInDto) {
        SecurityTitleSuspendedHistoryOutDto securityTitleSuspendedHistoryOutDto =
                securityTitleSuspendedService.suspendedSecurityTitle(suspendedSecurityTitleInDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(securityTitleSuspendedHistoryOutDto);
    }

    @Operation(summary = "No Suspended security title", description = "No Suspended security title")
    @ApiResponses(value = {@ApiResponse(responseCode = "201", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = SecurityTitleSuspendedHistoryOutDto.class)))})
    @PostMapping("/nosuspended")
    public ResponseEntity<SecurityTitleSuspendedHistoryOutDto> noSuspendedSecurityTitle(
            @Valid @RequestBody NoSuspendedSecurityTitleInDto noSuspendedSecurityTitleInDto) {
        SecurityTitleSuspendedHistoryOutDto participantSuspendedHistoryOutDto
                = securityTitleSuspendedService.noSuspendedSecurityTitle(noSuspendedSecurityTitleInDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(participantSuspendedHistoryOutDto);
    }

}

```

## src/main/java/com/nubo/master/instruments/api/web/controller/StatusRestController.java

```java
package com.nubo.master.instruments.api.web.controller;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nubo.master.instruments.api.models.dto.response.PageResponseOutDto;
import com.nubo.master.instruments.api.models.dto.response.StatusOutDto;
import com.nubo.master.instruments.api.service.StatusService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@Tag(name = "Status")
@RestController
@RequestMapping("/{version}/status")
@RequiredArgsConstructor
public class StatusRestController
{

    private final StatusService statusService;

    @Operation(summary = "Find all Instruments status", description = "Find all Instruments status with pagination")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = StatusOutDto[].class)))
    })
    @GetMapping
    public ResponseEntity<PageResponseOutDto<StatusOutDto>> findAllStatus(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(required = false) String sort,
            @RequestParam(required = false) String order)
    {

        Pageable pageable;
        if (sort != null && order != null)
        {
            Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
            Sort sorting = Sort.by(direction, sort);
            pageable = PageRequest.of(page, size, sorting);
        }
        else
        {
            pageable = PageRequest.of(page, size);
        }

        return ResponseEntity.ok(statusService.findAllInstrumentsStatus(pageable));
    }
}

```

## src/main/java/com/nubo/master/instruments/api/web/controller/TypeRestController.java

```java
package com.nubo.master.instruments.api.web.controller;

import com.nubo.master.instruments.api.models.dto.response.TypeOutDto;
import com.nubo.master.instruments.api.service.TypeService;
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

import java.util.List;

@Tag(name = "Type")
@RestController
@RequestMapping("/{version}/type")
@RequiredArgsConstructor
public class TypeRestController {

    private final TypeService typeService;

    @Operation(summary = "Find all type", description = "Find all type")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = TypeOutDto[].class)))})
    @GetMapping
    public ResponseEntity<List<TypeOutDto>> findAllType(
            @Parameter(example = "CUENTA")
            @RequestParam(required = false) String category) {
        return ResponseEntity.ok(typeService.findAllType(category));
    }

    @Operation(summary = "Find type corporate actions", description = "Find type corporate actions")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response",
                    content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                            schema = @Schema(implementation = TypeOutDto[].class)))})
    @GetMapping("/corporate-actions")
    public ResponseEntity<List<TypeOutDto>> findTypeCorporateActions() {
        return ResponseEntity.ok(typeService.findTypeCorporateActions());
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
logging:
  config: classpath:log/log4j2.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR


```

## src/main/resources/application-local.yml

```yaml
server:
  port: 8081
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
    properties:
      hibernate:
        format_sql: true
        use_sql_comments: true
        show_sql: true
logging:
  config: classpath:log/log4j2.properties
  level:
    org.hibernate.SQL: DEBUG
    org.hibernate.type.descriptor.sql.BasicBinder: TRACE
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR

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
logging:
  config: classpath:log/log4j2-prod.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR
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
logging:
  config: classpath:log/log4j2.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR


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
info:
  app:
    name: ${spring.application.name}
    version: @project.version@
    description: @project.description@
management:
  info:
    env:
      enabled: true
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
,--.   ,--.  ,---.   ,---. ,--------.,------.,------. ,--.,--.  ,--. ,---. ,--------.,------. ,--. ,--.,--.   ,--.,------.,--.  ,--.,--------. ,---.
|   `.'   | /  O  \ '   .-''--.  .--'|  .---'|  .--. '|  ||  ,'.|  |'   .-''--.  .--'|  .--. '|  | |  ||   `.'   ||  .---'|  ,'.|  |'--.  .--''   .-'
|  |'.'|  ||  .-.  |`.  `-.   |  |   |  `--, |  '--'.'|  ||  |' '  |`.  `-.   |  |   |  '--'.'|  | |  ||  |'.'|  ||  `--, |  |' '  |   |  |   `.  `-.
|  |   |  ||  | |  |.-'    |  |  |   |  `---.|  |\  \ |  ||  | `   |.-'    |  |  |   |  |\  \ '  '-'  '|  |   |  ||  `---.|  | `   |   |  |   .-'    |
`--'   `--'`--' `--'`-----'   `--'   `------'`--' '--'`--'`--'  `--'`-----'   `--'   `--' '--' `-----' `--'   `--'`------'`--'  `--'   `--'   `-----'
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
