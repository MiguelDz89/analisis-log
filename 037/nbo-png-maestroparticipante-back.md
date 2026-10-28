# nbo-png-maestroparticipante-back

Código Java de producción y configuraciones, sin tests. Cada sección contiene el archivo original completo y su ruta. Captura: 28/10/2026.

## Índice

1. `.mvn/wrapper/maven-wrapper.properties`
2. `mvnw`
3. `mvnw.cmd`
4. `pom.xml`
5. `src/main/java/com/nubo/masterparticipant/api/MasterParticipantApiApplication.java`
6. `src/main/java/com/nubo/masterparticipant/api/application/config/SwaggerConfig.java`
7. `src/main/java/com/nubo/masterparticipant/api/application/config/WebConfig.java`
8. `src/main/java/com/nubo/masterparticipant/api/application/context/GlobalContext.java`
9. `src/main/java/com/nubo/masterparticipant/api/application/database/NamingStrategyConfig.java`
10. `src/main/java/com/nubo/masterparticipant/api/application/database/UpperNamingConfig.java`
11. `src/main/java/com/nubo/masterparticipant/api/application/filters/GlobalFilter.java`
12. `src/main/java/com/nubo/masterparticipant/api/application/interceptors/GlobalInterceptor.java`
13. `src/main/java/com/nubo/masterparticipant/api/application/properties/PropertiesConfig.java`
14. `src/main/java/com/nubo/masterparticipant/api/application/properties/PropertiesContext.java`
15. `src/main/java/com/nubo/masterparticipant/api/application/util/ApplicationUtils.java`
16. `src/main/java/com/nubo/masterparticipant/api/exception/ServiceException.java`
17. `src/main/java/com/nubo/masterparticipant/api/exception/error/ErrorCode.java`
18. `src/main/java/com/nubo/masterparticipant/api/exception/error/ErrorResponse.java`
19. `src/main/java/com/nubo/masterparticipant/api/exception/error/ErrorValidation.java`
20. `src/main/java/com/nubo/masterparticipant/api/exception/handler/GlobalExceptionHandler.java`
21. `src/main/java/com/nubo/masterparticipant/api/helpers/MapperPageUtil.java`
22. `src/main/java/com/nubo/masterparticipant/api/helpers/MapperParticipantLoan.java`
23. `src/main/java/com/nubo/masterparticipant/api/helpers/MapperUtil.java`
24. `src/main/java/com/nubo/masterparticipant/api/models/dto/request/CountryInDto.java`
25. `src/main/java/com/nubo/masterparticipant/api/models/dto/request/NoSuspendedParticipantInDto.java`
26. `src/main/java/com/nubo/masterparticipant/api/models/dto/request/ParamsPageInDto.java`
27. `src/main/java/com/nubo/masterparticipant/api/models/dto/request/ParticipantAccountInDto.java`
28. `src/main/java/com/nubo/masterparticipant/api/models/dto/request/ParticipantAccountUpdateInDto.java`
29. `src/main/java/com/nubo/masterparticipant/api/models/dto/request/ParticipantDetailUpdateInDto.java`
30. `src/main/java/com/nubo/masterparticipant/api/models/dto/request/ParticipantInDto.java`
31. `src/main/java/com/nubo/masterparticipant/api/models/dto/request/ParticipantInvestorInDto.java`
32. `src/main/java/com/nubo/masterparticipant/api/models/dto/request/ParticipantUpdateInDto.java`
33. `src/main/java/com/nubo/masterparticipant/api/models/dto/request/SuspendedParticipantInDto.java`
34. `src/main/java/com/nubo/masterparticipant/api/models/dto/response/BankOutDto.java`
35. `src/main/java/com/nubo/masterparticipant/api/models/dto/response/CityOutDto.java`
36. `src/main/java/com/nubo/masterparticipant/api/models/dto/response/CountryOutDto.java`
37. `src/main/java/com/nubo/masterparticipant/api/models/dto/response/CurrencyOutDto.java`
38. `src/main/java/com/nubo/masterparticipant/api/models/dto/response/DepartmentOutDto.java`
39. `src/main/java/com/nubo/masterparticipant/api/models/dto/response/DepositoryOutDto.java`
40. `src/main/java/com/nubo/masterparticipant/api/models/dto/response/DirectDepositorOutDto.java`
41. `src/main/java/com/nubo/masterparticipant/api/models/dto/response/EnterpriseGroupOutDto.java`
42. `src/main/java/com/nubo/masterparticipant/api/models/dto/response/GicsOutDto.java`
43. `src/main/java/com/nubo/masterparticipant/api/models/dto/response/IdentificationTypeOutDto.java`
44. `src/main/java/com/nubo/masterparticipant/api/models/dto/response/InvestorOutDto.java`
45. `src/main/java/com/nubo/masterparticipant/api/models/dto/response/PageResponseOutDto.java`
46. `src/main/java/com/nubo/masterparticipant/api/models/dto/response/ParticipantAccountOutDto.java`
47. `src/main/java/com/nubo/masterparticipant/api/models/dto/response/ParticipantAssociatedAccountOutDto.java`
48. `src/main/java/com/nubo/masterparticipant/api/models/dto/response/ParticipantAuthorizationOutDto.java`
49. `src/main/java/com/nubo/masterparticipant/api/models/dto/response/ParticipantBankAccountFilterOutDto.java`
50. `src/main/java/com/nubo/masterparticipant/api/models/dto/response/ParticipantBankAccountOutDto.java`
51. `src/main/java/com/nubo/masterparticipant/api/models/dto/response/ParticipantFilterOutDto.java`
52. `src/main/java/com/nubo/masterparticipant/api/models/dto/response/ParticipantInvestorOutDto.java`
53. `src/main/java/com/nubo/masterparticipant/api/models/dto/response/ParticipantLoanOutDto.java`
54. `src/main/java/com/nubo/masterparticipant/api/models/dto/response/ParticipantLoanTaxStatusOutDto.java`
55. `src/main/java/com/nubo/masterparticipant/api/models/dto/response/ParticipantLoanTypeOutDto.java`
56. `src/main/java/com/nubo/masterparticipant/api/models/dto/response/ParticipantOutDto.java`
57. `src/main/java/com/nubo/masterparticipant/api/models/dto/response/ParticipantShortOutDto.java`
58. `src/main/java/com/nubo/masterparticipant/api/models/dto/response/ParticipantSuspendedHistoryOutDto.java`
59. `src/main/java/com/nubo/masterparticipant/api/models/dto/response/StatusOutDto.java`
60. `src/main/java/com/nubo/masterparticipant/api/models/dto/response/SystemOutDto.java`
61. `src/main/java/com/nubo/masterparticipant/api/models/dto/response/TaxStatusOutDto.java`
62. `src/main/java/com/nubo/masterparticipant/api/models/dto/response/TypeOutDto.java`
63. `src/main/java/com/nubo/masterparticipant/api/models/entity/BankEntity.java`
64. `src/main/java/com/nubo/masterparticipant/api/models/entity/CityEntity.java`
65. `src/main/java/com/nubo/masterparticipant/api/models/entity/CountryEntity.java`
66. `src/main/java/com/nubo/masterparticipant/api/models/entity/CurrencyEntity.java`
67. `src/main/java/com/nubo/masterparticipant/api/models/entity/DepartmentEntity.java`
68. `src/main/java/com/nubo/masterparticipant/api/models/entity/DepositoryEntity.java`
69. `src/main/java/com/nubo/masterparticipant/api/models/entity/DirectDepositoryEntity.java`
70. `src/main/java/com/nubo/masterparticipant/api/models/entity/EnterpriseGroupEntity.java`
71. `src/main/java/com/nubo/masterparticipant/api/models/entity/GicsEntity.java`
72. `src/main/java/com/nubo/masterparticipant/api/models/entity/IdentificationTypeEntity.java`
73. `src/main/java/com/nubo/masterparticipant/api/models/entity/InvestorEntity.java`
74. `src/main/java/com/nubo/masterparticipant/api/models/entity/ParticipantAccountEntity.java`
75. `src/main/java/com/nubo/masterparticipant/api/models/entity/ParticipantAuthorizationEntity.java`
76. `src/main/java/com/nubo/masterparticipant/api/models/entity/ParticipantAuthorizationKey.java`
77. `src/main/java/com/nubo/masterparticipant/api/models/entity/ParticipantBankAccountEntity.java`
78. `src/main/java/com/nubo/masterparticipant/api/models/entity/ParticipantEntity.java`
79. `src/main/java/com/nubo/masterparticipant/api/models/entity/ParticipantInvestorEntity.java`
80. `src/main/java/com/nubo/masterparticipant/api/models/entity/ParticipantInvestorKey.java`
81. `src/main/java/com/nubo/masterparticipant/api/models/entity/ParticipantSuspendedHistoryEntity.java`
82. `src/main/java/com/nubo/masterparticipant/api/models/entity/SettlementEntity.java`
83. `src/main/java/com/nubo/masterparticipant/api/models/entity/StatusEntity.java`
84. `src/main/java/com/nubo/masterparticipant/api/models/entity/SystemEntity.java`
85. `src/main/java/com/nubo/masterparticipant/api/models/entity/TaxStatusEntity.java`
86. `src/main/java/com/nubo/masterparticipant/api/models/entity/TradeEntity.java`
87. `src/main/java/com/nubo/masterparticipant/api/models/entity/TypeEntity.java`
88. `src/main/java/com/nubo/masterparticipant/api/models/entity/UserNuboEntity.java`
89. `src/main/java/com/nubo/masterparticipant/api/models/enums/AccountSourceEnum.java`
90. `src/main/java/com/nubo/masterparticipant/api/models/enums/DirectAllocationEnum.java`
91. `src/main/java/com/nubo/masterparticipant/api/models/enums/ParticipantStatusEnum.java`
92. `src/main/java/com/nubo/masterparticipant/api/models/enums/PropertiesEnum.java`
93. `src/main/java/com/nubo/masterparticipant/api/models/enums/TypeParticipantActionEnum.java`
94. `src/main/java/com/nubo/masterparticipant/api/models/enums/UserTypeEnum.java`
95. `src/main/java/com/nubo/masterparticipant/api/models/enums/VersionApiEnum.java`
96. `src/main/java/com/nubo/masterparticipant/api/repository/AccountLookupRepository.java`
97. `src/main/java/com/nubo/masterparticipant/api/repository/BankRepository.java`
98. `src/main/java/com/nubo/masterparticipant/api/repository/CityRepository.java`
99. `src/main/java/com/nubo/masterparticipant/api/repository/CountryRepository.java`
100. `src/main/java/com/nubo/masterparticipant/api/repository/CurrencyRepository.java`
101. `src/main/java/com/nubo/masterparticipant/api/repository/DepartmentRepository.java`
102. `src/main/java/com/nubo/masterparticipant/api/repository/DepositoryRepository.java`
103. `src/main/java/com/nubo/masterparticipant/api/repository/DirectDepositoryRepository.java`
104. `src/main/java/com/nubo/masterparticipant/api/repository/EnterpriseGroupRepository.java`
105. `src/main/java/com/nubo/masterparticipant/api/repository/IdentificationTypeRepository.java`
106. `src/main/java/com/nubo/masterparticipant/api/repository/InvestorRepository.java`
107. `src/main/java/com/nubo/masterparticipant/api/repository/ParticipantAccountRepository.java`
108. `src/main/java/com/nubo/masterparticipant/api/repository/ParticipantAuthorizationRepository.java`
109. `src/main/java/com/nubo/masterparticipant/api/repository/ParticipantBankAccountRepository.java`
110. `src/main/java/com/nubo/masterparticipant/api/repository/ParticipantInvestorRepository.java`
111. `src/main/java/com/nubo/masterparticipant/api/repository/ParticipantLoanRepository.java`
112. `src/main/java/com/nubo/masterparticipant/api/repository/ParticipantRepository.java`
113. `src/main/java/com/nubo/masterparticipant/api/repository/ParticipantSuspendedHistoryRepository.java`
114. `src/main/java/com/nubo/masterparticipant/api/repository/StatusRepository.java`
115. `src/main/java/com/nubo/masterparticipant/api/repository/SystemRepository.java`
116. `src/main/java/com/nubo/masterparticipant/api/repository/TaxStatusRepository.java`
117. `src/main/java/com/nubo/masterparticipant/api/repository/TradeRepository.java`
118. `src/main/java/com/nubo/masterparticipant/api/repository/TypeRepository.java`
119. `src/main/java/com/nubo/masterparticipant/api/repository/UserNuboRepository.java`
120. `src/main/java/com/nubo/masterparticipant/api/service/CountryService.java`
121. `src/main/java/com/nubo/masterparticipant/api/service/DepositoryService.java`
122. `src/main/java/com/nubo/masterparticipant/api/service/IdentificationTypeService.java`
123. `src/main/java/com/nubo/masterparticipant/api/service/ParticipantAccountService.java`
124. `src/main/java/com/nubo/masterparticipant/api/service/ParticipantAssociatedAccountService.java`
125. `src/main/java/com/nubo/masterparticipant/api/service/ParticipantAuthorizationService.java`
126. `src/main/java/com/nubo/masterparticipant/api/service/ParticipantBankAccountService.java`
127. `src/main/java/com/nubo/masterparticipant/api/service/ParticipantEquivalenceService.java`
128. `src/main/java/com/nubo/masterparticipant/api/service/ParticipantInvestorService.java`
129. `src/main/java/com/nubo/masterparticipant/api/service/ParticipantLoanService.java`
130. `src/main/java/com/nubo/masterparticipant/api/service/ParticipantService.java`
131. `src/main/java/com/nubo/masterparticipant/api/service/ParticipantSuspendedHistoryService.java`
132. `src/main/java/com/nubo/masterparticipant/api/service/ParticipantSuspendedService.java`
133. `src/main/java/com/nubo/masterparticipant/api/service/StatusService.java`
134. `src/main/java/com/nubo/masterparticipant/api/service/TypeService.java`
135. `src/main/java/com/nubo/masterparticipant/api/service/impl/CountryServiceImpl.java`
136. `src/main/java/com/nubo/masterparticipant/api/service/impl/DepositoryServiceImpl.java`
137. `src/main/java/com/nubo/masterparticipant/api/service/impl/IdentificationTypeServiceImpl.java`
138. `src/main/java/com/nubo/masterparticipant/api/service/impl/ParticipantAccountServiceImpl.java`
139. `src/main/java/com/nubo/masterparticipant/api/service/impl/ParticipantAssociatedAccountServiceImpl.java`
140. `src/main/java/com/nubo/masterparticipant/api/service/impl/ParticipantAuthorizationServiceImpl.java`
141. `src/main/java/com/nubo/masterparticipant/api/service/impl/ParticipantBankAccountServiceImpl.java`
142. `src/main/java/com/nubo/masterparticipant/api/service/impl/ParticipantEquivalenceServiceImpl.java`
143. `src/main/java/com/nubo/masterparticipant/api/service/impl/ParticipantInvestorServiceImpl.java`
144. `src/main/java/com/nubo/masterparticipant/api/service/impl/ParticipantLoanServiceImpl.java`
145. `src/main/java/com/nubo/masterparticipant/api/service/impl/ParticipantServiceImpl.java`
146. `src/main/java/com/nubo/masterparticipant/api/service/impl/ParticipantSuspendedHistoryServiceImpl.java`
147. `src/main/java/com/nubo/masterparticipant/api/service/impl/ParticipantSuspendedServiceImpl.java`
148. `src/main/java/com/nubo/masterparticipant/api/service/impl/StatusServiceImpl.java`
149. `src/main/java/com/nubo/masterparticipant/api/service/impl/TypeServiceImpl.java`
150. `src/main/java/com/nubo/masterparticipant/api/web/controller/CountryRestController.java`
151. `src/main/java/com/nubo/masterparticipant/api/web/controller/DepositoryRestController.java`
152. `src/main/java/com/nubo/masterparticipant/api/web/controller/IdentificationTypeRestController.java`
153. `src/main/java/com/nubo/masterparticipant/api/web/controller/ParticipantAccountRestController.java`
154. `src/main/java/com/nubo/masterparticipant/api/web/controller/ParticipantAssociatedAccountRestController.java`
155. `src/main/java/com/nubo/masterparticipant/api/web/controller/ParticipantAuthorizationRestController.java`
156. `src/main/java/com/nubo/masterparticipant/api/web/controller/ParticipantEquivalenceRestController.java`
157. `src/main/java/com/nubo/masterparticipant/api/web/controller/ParticipantEquivalencesRestController.java`
158. `src/main/java/com/nubo/masterparticipant/api/web/controller/ParticipantInvestorRestController.java`
159. `src/main/java/com/nubo/masterparticipant/api/web/controller/ParticipantLoanRestController.java`
160. `src/main/java/com/nubo/masterparticipant/api/web/controller/ParticipantRestController.java`
161. `src/main/java/com/nubo/masterparticipant/api/web/controller/ParticipantSuspendedHistoryRestController.java`
162. `src/main/java/com/nubo/masterparticipant/api/web/controller/ParticipantSuspendedRestController.java`
163. `src/main/java/com/nubo/masterparticipant/api/web/controller/StatusRestController.java`
164. `src/main/java/com/nubo/masterparticipant/api/web/controller/TypeRestController.java`
165. `src/main/resources/application-dev.yml`
166. `src/main/resources/application-local.yml`
167. `src/main/resources/application-prod.yml`
168. `src/main/resources/application-qa.yml`
169. `src/main/resources/application-uat.yml`
170. `src/main/resources/application.yml`
171. `src/main/resources/banner.txt`
172. `src/main/resources/log/JsonEventLayout_error.json`
173. `src/main/resources/log/JsonEventLayout_info.json`
174. `src/main/resources/log/JsonEventLayout_trace.json`
175. `src/main/resources/log/log4j2-prod.properties`
176. `src/main/resources/log/log4j2.properties`

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
        <version>3.5.15</version>
        <relativePath/>
    </parent>
    <groupId>com.nubo.masterparticipant.api</groupId>
    <artifactId>master-participant-api</artifactId>
    <version>0.91.0-beta.2</version>
    <name>${project.artifactId}</name>
    <description>Master Participant Api</description>

    <properties>
        <java.version>17</java.version>
        <spring.port>8080</spring.port>
        <test.skip>false</test.skip>
        <datasource.url.application.name>ApplicationName=${project.artifactId}</datasource.url.application.name>
        <hikari.pool.name>${project.artifactId}-pool</hikari.pool.name>
        <!-- Vulnerability fixes -->
        <log4j2.version>2.25.4</log4j2.version>
        <spring-framework.version>6.2.19</spring-framework.version>
        <tomcat.version>10.1.55</tomcat.version>
        <commons-lang3.version>3.18.0</commons-lang3.version>
        <jackson-bom.version>2.21.4</jackson-bom.version>
        <gson.version>2.13.2</gson.version>
        <xmlunit2.version>2.10.4</xmlunit2.version>
        <postgresql.version>42.7.11</postgresql.version>
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
        <dependency>
            <groupId>org.postgresql</groupId>
            <artifactId>postgresql</artifactId>
            <version>42.7.11</version>
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
        <!-- Json -->
        <dependency>
            <groupId>com.google.code.gson</groupId>
            <artifactId>gson</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
        <!-- vulnerability adjustment  -->
        <dependency>
            <groupId>org.xmlunit</groupId>
            <artifactId>xmlunit-core</artifactId>
            <scope>test</scope>
        </dependency>
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
                                <exclude>**/MasterParticipantApiApplication.class</exclude>
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

## src/main/java/com/nubo/masterparticipant/api/MasterParticipantApiApplication.java

```java
package com.nubo.masterparticipant.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MasterParticipantApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(MasterParticipantApiApplication.class, args);
	}

}

```

## src/main/java/com/nubo/masterparticipant/api/application/config/SwaggerConfig.java

```java
package com.nubo.masterparticipant.api.application.config;

import com.nubo.masterparticipant.api.exception.error.ErrorResponse;
import com.nubo.masterparticipant.api.exception.error.ErrorValidation;
import com.nubo.masterparticipant.api.models.enums.PropertiesEnum;
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

## src/main/java/com/nubo/masterparticipant/api/application/config/WebConfig.java

```java
package com.nubo.masterparticipant.api.application.config;

import com.nubo.masterparticipant.api.application.interceptors.GlobalInterceptor;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.i18n.SessionLocaleResolver;

import java.util.Locale;

@Configuration
@RequiredArgsConstructor
public class WebConfig implements WebMvcConfigurer {

    @Bean
    public LocaleResolver localeResolver() {
        SessionLocaleResolver slr = new SessionLocaleResolver();
        slr.setDefaultLocale(Locale.ENGLISH);
        return slr;
    }

}

```

## src/main/java/com/nubo/masterparticipant/api/application/context/GlobalContext.java

```java
package com.nubo.masterparticipant.api.application.context;

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

## src/main/java/com/nubo/masterparticipant/api/application/database/NamingStrategyConfig.java

```java
package com.nubo.masterparticipant.api.application.database;

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

## src/main/java/com/nubo/masterparticipant/api/application/database/UpperNamingConfig.java

```java
package com.nubo.masterparticipant.api.application.database;

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

## src/main/java/com/nubo/masterparticipant/api/application/filters/GlobalFilter.java

```java
package com.nubo.masterparticipant.api.application.filters;

import com.google.gson.Gson;
import com.nubo.masterparticipant.api.application.context.GlobalContext;
import com.nubo.masterparticipant.api.exception.ServiceException;
import com.nubo.masterparticipant.api.exception.error.ErrorCode;
import com.nubo.masterparticipant.api.exception.error.ErrorResponse;
import com.nubo.masterparticipant.api.models.enums.PropertiesEnum;
import com.nubo.masterparticipant.api.models.enums.VersionApiEnum;
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
        response.getWriter().write(new Gson().toJson(errorResponse));
        response.setStatus(exception.getHttpStatus().value());

        log.error("Error -> {}", errorResponse);
    }

}

```

## src/main/java/com/nubo/masterparticipant/api/application/interceptors/GlobalInterceptor.java

```java
package com.nubo.masterparticipant.api.application.interceptors;

import com.nubo.masterparticipant.api.application.context.GlobalContext;
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

## src/main/java/com/nubo/masterparticipant/api/application/properties/PropertiesConfig.java

```java
package com.nubo.masterparticipant.api.application.properties;

import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
@Getter
public class PropertiesConfig {

    @Value("${spring.application.name}")
    private String apiName;

}

```

## src/main/java/com/nubo/masterparticipant/api/application/properties/PropertiesContext.java

```java
package com.nubo.masterparticipant.api.application.properties;

import com.nubo.masterparticipant.api.application.context.GlobalContext;
import com.nubo.masterparticipant.api.application.util.ApplicationUtils;
import com.nubo.masterparticipant.api.models.enums.PropertiesEnum;
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

}



```

## src/main/java/com/nubo/masterparticipant/api/application/util/ApplicationUtils.java

```java
package com.nubo.masterparticipant.api.application.util;

import com.google.gson.Gson;

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

    public static String convertObjectToJson(Object object) {
        return new Gson().toJson(object);
    }

    public static Object convertJsonToObject(String json, Object object) {
        return new Gson().fromJson(json, (Type) object);
    }

}


```

## src/main/java/com/nubo/masterparticipant/api/exception/ServiceException.java

```java
package com.nubo.masterparticipant.api.exception;

import com.nubo.masterparticipant.api.exception.error.ErrorCode;
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

## src/main/java/com/nubo/masterparticipant/api/exception/error/ErrorCode.java

```java
package com.nubo.masterparticipant.api.exception.error;

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
    VERSION_API_NOT_FOUND("Version API not Found"),
    PARTICIPANT_FILTER_IS_REQUIRED("Participant filter is required"),
    PARTICIPANT_NOT_FOUND("Participant not Found"),
    COUNTRY_NOT_FOUND("Country not Found"),
    CURRENCY_NOT_FOUND("Currency not Found"),
    MASTER_ACCOUNT_AND_OWN_ACCOUNT_CANNOT_SAME("Master account and own account cannot be the same"),
    PARTICIPANT_ACCOUNT_NOT_FOUND("Participant Account not Found"),
    INVESTOR_NOT_FOUND("Investor not Found"),
    PARTICIPANT_INVESTOR_EXISTS("ParticipantInvestor already exists"),
    TRADE_NOT_FOUND("Trade not Found"),
    TYPE_NOT_FOUND("Type not Found"),
    DEPARTMENT_NOT_FOUND("Department not found"),
    STATUS_NOT_FOUND("Status not found"),
    CITY_NOT_FOUND("City not Found"),
    ENTERPRISE_GROUP_NOT_FOUND("Enterprise Group not Found"),
    SYSTEM_NOT_FOUND("System not Found"),
    DEPOSITORY_NOT_FOUND("Depositary not Found"),
    PARTICIPANT_BANK_ACCOUNT_NOT_FOUND("Participant Bank Account not Found"),
    IDENTIFICATION_TYPE_NOT_FOUND("Identification Type not found"),
    IDENTIFICATION_TYPE_NOT_FOUND_FOR_THE_COUNTRY("Identification Type not found for the country"),
    TAX_STATUS_NOT_FOUND("Tax Status not found"),
    USER_NOT_FOUND("User not found"),
    USER_TYPE_NOT_VALID("User type is not valid");

    private final String message;

    ErrorCode(String message) {
        this.message = message;
    }

    public String getName() {
        return this.name();
    }

}

```

## src/main/java/com/nubo/masterparticipant/api/exception/error/ErrorResponse.java

```java
package com.nubo.masterparticipant.api.exception.error;

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

## src/main/java/com/nubo/masterparticipant/api/exception/error/ErrorValidation.java

```java
package com.nubo.masterparticipant.api.exception.error;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ErrorValidation {

    private String id;
    private String description;

}

```

## src/main/java/com/nubo/masterparticipant/api/exception/handler/GlobalExceptionHandler.java

```java
package com.nubo.masterparticipant.api.exception.handler;

import com.nubo.masterparticipant.api.application.properties.PropertiesContext;
import com.nubo.masterparticipant.api.exception.ServiceException;
import com.nubo.masterparticipant.api.exception.error.ErrorCode;
import com.nubo.masterparticipant.api.exception.error.ErrorResponse;
import com.nubo.masterparticipant.api.exception.error.ErrorValidation;
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
                .timestamp(String.valueOf(PropertiesContext.getClientDatetime()))
                .errorDetails(errorDetails)
                .build();

        log.error("Error -> {}", errorResponse);

        return ResponseEntity.status(status).body(errorResponse);
    }

}



```

## src/main/java/com/nubo/masterparticipant/api/helpers/MapperPageUtil.java

```java
package com.nubo.masterparticipant.api.helpers;

import com.nubo.masterparticipant.api.models.dto.response.PageResponseOutDto;
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

## src/main/java/com/nubo/masterparticipant/api/helpers/MapperParticipantLoan.java

```java
package com.nubo.masterparticipant.api.helpers;

import com.nubo.masterparticipant.api.models.dto.response.ParticipantLoanOutDto;
import com.nubo.masterparticipant.api.models.dto.response.ParticipantLoanTaxStatusOutDto;
import com.nubo.masterparticipant.api.models.dto.response.ParticipantLoanTypeOutDto;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;

@Component
public class MapperParticipantLoan {

    public ParticipantLoanOutDto toDto(Object[] row) {
        if (row == null) {
            return null;
        }

        return ParticipantLoanOutDto.builder()
                .id(((Number) row[0]).longValue())
                .code((String) row[1])
                .name((String) row[2])
                .shortname((String) row[3])
                .participanttypes((String) row[4])
                .country((String) row[5])
                .shortcountry((String) row[6])
                .status((String) row[7])
                .custodian((Boolean) row[8])
                .documentnumber((String) row[9])
                .marginaccount(charToString(row[10]))
                .typeentity(charToString(row[11]))
                .taxcode((String) row[12])
                .otcLoanRelationship((Boolean) row[13])
                .taxStatus(buildTaxStatus(row))
                .type(buildType(row))
                .documentType((String) row[18])
                .equity((BigDecimal) row[19])
                .build();
    }

    private ParticipantLoanTaxStatusOutDto buildTaxStatus(Object[] row) {
        if (row[14] == null) {
            return null;
        }

        return ParticipantLoanTaxStatusOutDto.builder()
                .taxStatusId(((Number) row[14]).longValue())
                .description((String) row[15])
                .build();
    }

    private ParticipantLoanTypeOutDto buildType(Object[] row) {
        if (row[16] == null) {
            return null;
        }

        return ParticipantLoanTypeOutDto.builder()
                .typeId(((Number) row[16]).longValue())
                .description((String) row[17])
                .build();
    }

    private String charToString(Object value) {
        return value == null ? null : value.toString();
    }

}


```

## src/main/java/com/nubo/masterparticipant/api/helpers/MapperUtil.java

```java
package com.nubo.masterparticipant.api.helpers;

import com.nubo.masterparticipant.api.models.dto.response.BankOutDto;
import com.nubo.masterparticipant.api.models.dto.response.CityOutDto;
import com.nubo.masterparticipant.api.models.dto.response.CountryOutDto;
import com.nubo.masterparticipant.api.models.dto.response.CurrencyOutDto;
import com.nubo.masterparticipant.api.models.dto.response.DepartmentOutDto;
import com.nubo.masterparticipant.api.models.dto.response.DepositoryOutDto;
import com.nubo.masterparticipant.api.models.dto.response.DirectDepositorOutDto;
import com.nubo.masterparticipant.api.models.dto.response.EnterpriseGroupOutDto;
import com.nubo.masterparticipant.api.models.dto.response.GicsOutDto;
import com.nubo.masterparticipant.api.models.dto.response.IdentificationTypeOutDto;
import com.nubo.masterparticipant.api.models.dto.response.InvestorOutDto;
import com.nubo.masterparticipant.api.models.dto.response.ParticipantAccountOutDto;
import com.nubo.masterparticipant.api.models.dto.response.ParticipantAssociatedAccountOutDto;
import com.nubo.masterparticipant.api.models.dto.response.ParticipantAuthorizationOutDto;
import com.nubo.masterparticipant.api.models.dto.response.ParticipantBankAccountFilterOutDto;
import com.nubo.masterparticipant.api.models.dto.response.ParticipantBankAccountOutDto;
import com.nubo.masterparticipant.api.models.dto.response.ParticipantFilterOutDto;
import com.nubo.masterparticipant.api.models.dto.response.ParticipantInvestorOutDto;
import com.nubo.masterparticipant.api.models.dto.response.ParticipantOutDto;
import com.nubo.masterparticipant.api.models.dto.response.ParticipantSuspendedHistoryOutDto;
import com.nubo.masterparticipant.api.models.dto.response.StatusOutDto;
import com.nubo.masterparticipant.api.models.dto.response.SystemOutDto;
import com.nubo.masterparticipant.api.models.dto.response.TaxStatusOutDto;
import com.nubo.masterparticipant.api.models.dto.response.TypeOutDto;
import com.nubo.masterparticipant.api.models.entity.BankEntity;
import com.nubo.masterparticipant.api.models.entity.CityEntity;
import com.nubo.masterparticipant.api.models.entity.CountryEntity;
import com.nubo.masterparticipant.api.models.entity.CurrencyEntity;
import com.nubo.masterparticipant.api.models.entity.DepartmentEntity;
import com.nubo.masterparticipant.api.models.entity.DepositoryEntity;
import com.nubo.masterparticipant.api.models.entity.DirectDepositoryEntity;
import com.nubo.masterparticipant.api.models.entity.EnterpriseGroupEntity;
import com.nubo.masterparticipant.api.models.entity.GicsEntity;
import com.nubo.masterparticipant.api.models.entity.IdentificationTypeEntity;
import com.nubo.masterparticipant.api.models.entity.InvestorEntity;
import com.nubo.masterparticipant.api.models.entity.ParticipantAccountEntity;
import com.nubo.masterparticipant.api.models.entity.ParticipantAuthorizationEntity;
import com.nubo.masterparticipant.api.models.entity.ParticipantBankAccountEntity;
import com.nubo.masterparticipant.api.models.entity.ParticipantEntity;
import com.nubo.masterparticipant.api.models.entity.ParticipantInvestorEntity;
import com.nubo.masterparticipant.api.models.entity.ParticipantSuspendedHistoryEntity;
import com.nubo.masterparticipant.api.models.entity.StatusEntity;
import com.nubo.masterparticipant.api.models.entity.SystemEntity;
import com.nubo.masterparticipant.api.models.entity.TaxStatusEntity;
import com.nubo.masterparticipant.api.models.entity.TypeEntity;
import org.springframework.util.ObjectUtils;

import java.util.Optional;

public class MapperUtil {

    private MapperUtil() {
    }

    public static ParticipantOutDto participantEntityToParticipantOutDto(ParticipantEntity participantEntity) {
        return ParticipantOutDto.builder()
                .id(participantEntity.getId())
                .enterpriseGroup(ObjectUtils.isEmpty(participantEntity.getEnterpriseGroup())
                        ? null : enterpriseGroupEntityToEnterpriseGroupOutDto(participantEntity.getEnterpriseGroup()))
                .code(participantEntity.getCode())
                .documentNumber(participantEntity.getDocumentNumber())
                .identificationType(ObjectUtils.isEmpty(participantEntity.getIdentificationType())
                        ? null : identificationTypeEntityToIdentificationTypeOutDto(participantEntity.getIdentificationType()))
                .name(participantEntity.getName())
                .shortName(participantEntity.getShortName())
                .type(ObjectUtils.isEmpty(participantEntity.getType()) ? null : typeEntityToTypeOutDto(participantEntity.getType()))
                .country(ObjectUtils.isEmpty(participantEntity.getCountry()) ? null : countryEntityToCountryOutDto(participantEntity.getCountry()))
                .registrationDate(participantEntity.getRegistrationDate())
                .taxCode(participantEntity.getTaxCode())
                .department(ObjectUtils.isEmpty(participantEntity.getDepartment())
                        ? null : departmentEntityToDepartmentOutDto(participantEntity.getDepartment()))
                .mainAddress(participantEntity.getMainAddress())
                .webPage(participantEntity.getWebPage())
                .phoneNumber(participantEntity.getPhoneNumber())
                .status(ObjectUtils.isEmpty(participantEntity.getStatus()) ? null : statusEntityToStatusOutDto(participantEntity.getStatus()))
                .taxStatus(ObjectUtils.isEmpty(participantEntity.getTaxStatus()) ? null : taxStatusEntityToTaxStatusOutDto(participantEntity.getTaxStatus()))
                .typeEntity(ObjectUtils.isEmpty(participantEntity.getEntityType()) ? null : typeEntityToTypeOutDto(participantEntity.getEntityType()))
                .directAllocation(participantEntity.getDirectAllocation())
                .marketMaker(participantEntity.getMarketMaker())
                .custodian(participantEntity.getCustodian())
                .city(ObjectUtils.isEmpty(participantEntity.getCity()) ? null : cityEntityToCityOutDto(participantEntity.getCity()))
                .canceledStatus(participantEntity.getCanceledStatus())
                .registeredSystem(ObjectUtils.isEmpty(participantEntity.getRegisteredSystem())
                        ? null : systemEntityToSystemOutDto(participantEntity.getRegisteredSystem()))
                .dcvRvOpersAuth(Optional.ofNullable(participantEntity.getDcvRvOpersAuth()).orElse(false))
                .dcvRvSettlementAuth(Optional.ofNullable(participantEntity.getDcvRvSettlementAuth()).orElse(false))
                .directOperatorAgreements(Optional.ofNullable(participantEntity.getDirectOperatorAgreements()).orElse(false))
                .otcLoanRelationship(Optional.ofNullable(participantEntity.getOtcLoanRelationship()).orElse(false))
                .otcIndicator("")//booleno SI,NO
                .suspendedNegotiation(!ObjectUtils.isEmpty(participantEntity.getSuspendedNegotiation()) && participantEntity.getSuspendedNegotiation())
                .masterAccount(participantAccountEntityToParticipantAccountDetailOutDto(participantEntity.getMasterAccount()))
                .ownAccount(participantAccountEntityToParticipantAccountDetailOutDto(participantEntity.getOwnAccount()))
                .equity(participantEntity.getEquity())
                .currency(currencyEntityToCurrencyOutDto(participantEntity.getCurrency()))
                .build();
    }

    public static ParticipantFilterOutDto participantEntityToParticipantFilterOutDto(ParticipantEntity participantEntity) {
        return ParticipantFilterOutDto.builder()
                .id(participantEntity.getId())
                .code(participantEntity.getCode())
                .documentNumber(participantEntity.getDocumentNumber())
                .name(participantEntity.getName())
                .shortName(participantEntity.getShortName())
                .build();
    }

    public static DirectDepositorOutDto directDepositoryEntityToDirectDepositorOutDto(DirectDepositoryEntity directDepositoryEntity) {
        if (ObjectUtils.isEmpty(directDepositoryEntity)) return null;
        return DirectDepositorOutDto.builder()
                .depository(depositoryEntityToDepositoryOutDto(directDepositoryEntity.getDepository()))
                .id(directDepositoryEntity.getId())
                .nuamCode(directDepositoryEntity.getParticipant().getCode())
                .directDepositorNumber(directDepositoryEntity.getDirectDepositoryNumber())
                //TODO se agregan campos con autorización de Frank y Hector, para solucion de Big RTBOF-11326
                .crccNegotiatorCode(directDepositoryEntity.getCrccNegotiatorCode())
                .crccCompensatorCode(directDepositoryEntity.getCrccCompensatorCode())
                .crccCustodianCode(directDepositoryEntity.getCrccCustodianCode())
                .build();
    }

    public static CountryOutDto countryEntityToCountryOutDto(CountryEntity countryEntity) {
        return CountryOutDto.builder()
                .id(countryEntity.getId())
                .code(countryEntity.getCode())
                .name(countryEntity.getName())
                .currency(ObjectUtils.isEmpty(countryEntity.getCurrency()) ? null : currencyEntityToCurrencyOutDto(countryEntity.getCurrency()))
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

    public static ParticipantAccountOutDto participantAccountEntityToParticipantAccountOutDto(
            ParticipantAccountEntity participantAccountEntity) {
        if (participantAccountEntity == null) return null;

        return ParticipantAccountOutDto.builder()
                .id(participantAccountEntity.getId())
                .participant(ObjectUtils.isEmpty(participantAccountEntity.getParticipant())
                        ? null : MapperUtil.participantEntityToParticipantOutDto(participantAccountEntity.getParticipant()))
                .accountNumber(participantAccountEntity.getAccountNumber())
                .status(ObjectUtils.isEmpty(participantAccountEntity.getStatus())
                        ? null : MapperUtil.statusEntityToStatusOutDto(participantAccountEntity.getStatus()))
                .originType(ObjectUtils.isEmpty(participantAccountEntity.getOriginType())
                        ? null : MapperUtil.typeEntityToTypeOutDto(participantAccountEntity.getOriginType()))
                .type(ObjectUtils.isEmpty(participantAccountEntity.getType())
                        ? null : MapperUtil.typeEntityToTypeOutDto(participantAccountEntity.getType()))
                .depository(ObjectUtils.isEmpty(participantAccountEntity.getDepository())
                        ? null : MapperUtil.depositoryEntityToDepositoryOutDto(participantAccountEntity.getDepository()))
                .country(ObjectUtils.isEmpty(participantAccountEntity.getCountry())
                        ? null : MapperUtil.countryEntityToCountryOutDto(participantAccountEntity.getCountry()))
                .entityCode(participantAccountEntity.getEntityCode())
                .swiftCode(participantAccountEntity.getSwiftCode())
                .principal(participantAccountEntity.getPrincipal())
                .branchCode(participantAccountEntity.getBranchCode())
                .portfolio(participantAccountEntity.getPortfolio())
                .accountConcept(participantAccountEntity.getAccountConcept())
                .nitClearingEntity(participantAccountEntity.getNitClearingEntity())
                .build();
    }

    public static ParticipantAccountOutDto participantAccountEntityToParticipantAccountDetailOutDto(
            ParticipantAccountEntity participantAccountEntity) {
        if (participantAccountEntity == null) return null;

        return ParticipantAccountOutDto.builder()
                .id(participantAccountEntity.getId())
                .accountNumber(participantAccountEntity.getAccountNumber())
                .status(ObjectUtils.isEmpty(participantAccountEntity.getStatus())
                        ? null : MapperUtil.statusEntityToStatusOutDto(participantAccountEntity.getStatus()))
                .originType(ObjectUtils.isEmpty(participantAccountEntity.getOriginType())
                        ? null : MapperUtil.typeEntityToTypeOutDto(participantAccountEntity.getOriginType()))
                .type(ObjectUtils.isEmpty(participantAccountEntity.getType())
                        ? null : MapperUtil.typeEntityToTypeOutDto(participantAccountEntity.getType()))
                .depository(ObjectUtils.isEmpty(participantAccountEntity.getDepository())
                        ? null : MapperUtil.depositoryEntityToDepositoryOutDto(participantAccountEntity.getDepository()))
                .country(ObjectUtils.isEmpty(participantAccountEntity.getCountry())
                        ? null : MapperUtil.countryEntityToCountryOutDto(participantAccountEntity.getCountry()))
                .build();
    }

    public static ParticipantBankAccountFilterOutDto participantBankAccountEntityToParticipantBankAccountFilterOutDto(
            ParticipantBankAccountEntity participantBankAccountEntity) {
        if (participantBankAccountEntity == null) return null;

        return ParticipantBankAccountFilterOutDto.builder()
                .id(participantBankAccountEntity.getId())
                .bankAccount(participantBankAccountEntity.getBankAccount())
                .status(ObjectUtils.isEmpty(participantBankAccountEntity.getStatus())
                        ? null : statusEntityToStatusOutDto(participantBankAccountEntity.getStatus()))
                .type(ObjectUtils.isEmpty(participantBankAccountEntity.getType())
                        ? null : typeEntityToTypeOutDto(participantBankAccountEntity.getType()))
                .build();
    }


    public static ParticipantAssociatedAccountOutDto participantAccountEntityToParticipantAssociatedAccountOutDto(
            ParticipantAccountEntity participantAccountEntity) {
        if (participantAccountEntity == null) return null;

        return ParticipantAssociatedAccountOutDto.builder()
                .participantAccountId(participantAccountEntity.getId())
                .participantBankAccountId(null)

                .participantId(participantAccountEntity.getParticipant() != null
                        ? participantAccountEntity.getParticipant().getId() : null)

                .participant(ObjectUtils.isEmpty(participantAccountEntity.getParticipant())
                        ? null : participantEntityToParticipantOutDto(participantAccountEntity.getParticipant()))
                .status(ObjectUtils.isEmpty(participantAccountEntity.getStatus())
                        ? null : statusEntityToStatusOutDto(participantAccountEntity.getStatus()))
                .type(ObjectUtils.isEmpty(participantAccountEntity.getTypeAccount())
                        ? null : typeEntityToTypeOutDto(participantAccountEntity.getTypeAccount()))
                .originType(ObjectUtils.isEmpty(participantAccountEntity.getOriginType())
                        ? null : typeEntityToTypeOutDto(participantAccountEntity.getOriginType()))
                .depository(ObjectUtils.isEmpty(participantAccountEntity.getDepository())
                        ? null : depositoryEntityToDepositoryOutDto(participantAccountEntity.getDepository()))
                .bank(null)
                .country(ObjectUtils.isEmpty(participantAccountEntity.getCountry())
                        ? null : countryEntityToCountryOutDto(participantAccountEntity.getCountry()))

                .accountNumber(participantAccountEntity.getAccountNumber())
                .bankAccount(null)
                .entityCode(participantAccountEntity.getEntityCode())
                .swiftCode(participantAccountEntity.getSwiftCode())
                .principal(participantAccountEntity.getPrincipal())
                .branchCode(participantAccountEntity.getBranchCode())
                .portfolio(participantAccountEntity.getPortfolio())
                .concept(participantAccountEntity.getAccountConcept())
                .nitClearingEntity(participantAccountEntity.getNitClearingEntity())

                .build();
    }

    public static ParticipantAssociatedAccountOutDto participantBankAccountEntityToParticipantAssociatedAccountOutDto(
            ParticipantBankAccountEntity participantBankAccountEntity) {
        if (participantBankAccountEntity == null) return null;

        return ParticipantAssociatedAccountOutDto.builder()
                .participantAccountId(null)
                .participantBankAccountId(participantBankAccountEntity.getId())

                .participantId(participantBankAccountEntity.getParticipant() != null
                        ? participantBankAccountEntity.getParticipant().getId() : null)

                .participant(ObjectUtils.isEmpty(participantBankAccountEntity.getParticipant())
                        ? null : participantEntityToParticipantOutDto(participantBankAccountEntity.getParticipant()))
                .status(ObjectUtils.isEmpty(participantBankAccountEntity.getStatus())
                        ? null : statusEntityToStatusOutDto(participantBankAccountEntity.getStatus()))
                .type(ObjectUtils.isEmpty(participantBankAccountEntity.getType())
                        ? null : typeEntityToTypeOutDto(participantBankAccountEntity.getType()))
                .originType(null)
                .depository(ObjectUtils.isEmpty(participantBankAccountEntity.getDepository())
                        ? null : depositoryEntityToDepositoryOutDto(participantBankAccountEntity.getDepository()))
                .bank(ObjectUtils.isEmpty(participantBankAccountEntity.getBank())
                        ? null : bankEntityToBankOutDto(participantBankAccountEntity.getBank()))
                .country(ObjectUtils.isEmpty(participantBankAccountEntity.getCountry())
                        ? null : countryEntityToCountryOutDto(participantBankAccountEntity.getCountry()))
                .currency(ObjectUtils.isEmpty(participantBankAccountEntity.getCurrency())
                        ? null : currencyEntityToCurrencyOutDto(participantBankAccountEntity.getCurrency()))

                .accountNumber(participantBankAccountEntity.getBankAccount())
                .bankAccount(participantBankAccountEntity.getBankAccount())
                .entityCode(participantBankAccountEntity.getEntityCode())
                .swiftCode(participantBankAccountEntity.getSwiftCode())
                .principal(participantBankAccountEntity.getPrincipal())
                .branchCode(participantBankAccountEntity.getBranchCode())
                .portfolio(participantBankAccountEntity.getPortfolio())
                .concept(participantBankAccountEntity.getAccountConcept())
                .nitClearingEntity(participantBankAccountEntity.getNitClearingEntity())

                .build();
    }


    public static ParticipantInvestorOutDto participantInvestorEntityToParticipantInvestorOutDto(
            ParticipantInvestorEntity participantInvestorEntity) {
        return ParticipantInvestorOutDto.builder()
                .participant(participantEntityToParticipantOutDto(participantInvestorEntity.getParticipant()))
                .investor(investorEntityToInvestorOutDto(participantInvestorEntity.getInvestor()))
                .build();
    }

    public static InvestorOutDto investorEntityToInvestorOutDto(InvestorEntity investorEntity) {
        return InvestorOutDto.builder()
                .id(investorEntity.getId())
                .code(investorEntity.getCode())
                .firstName(investorEntity.getFirstName())
                .lastName(investorEntity.getLastName())
                .companyName(investorEntity.getCompanyName())
                .type(ObjectUtils.isEmpty(investorEntity.getType())
                        ? null : typeEntityToTypeOutDto(investorEntity.getType()))
                .status(ObjectUtils.isEmpty(investorEntity.getStatus())
                        ? null : statusEntityToStatusOutDto(investorEntity.getStatus()))
                .country(ObjectUtils.isEmpty(investorEntity.getCountry()) ?
                        null : countryEntityToCountryOutDto(investorEntity.getCountry()))
                .department(ObjectUtils.isEmpty(investorEntity.getDepartment())
                        ? null : departmentEntityToDepartmentOutDto(investorEntity.getDepartment()))
                .city(ObjectUtils.isEmpty(investorEntity.getCity())
                        ? null : cityEntityToCityOutDto(investorEntity.getCity()))
                .documentNumber(investorEntity.getDocumentNumber())
                .documentType(investorEntity.getDocumentType())
                .nationality(investorEntity.getNationality())
                .address(investorEntity.getAddress())
                .phoneNumber(investorEntity.getPhoneNumber())
                .email(investorEntity.getEmail())
                .clearinghouseCode(investorEntity.getClearinghouseCode())
                .gics(ObjectUtils.isEmpty(investorEntity.getGics())
                        ? null : gicsEntityToGicsOutDto(investorEntity.getGics()))
                .moneyLaunderingFlag(investorEntity.getMoneyLaunderingFlag())
                .taxStatus(ObjectUtils.isEmpty(investorEntity.getTaxStatus())
                        ? null : taxStatusEntityToTaxStatusOutDto(investorEntity.getTaxStatus()))
                .build();
    }

    public static StatusOutDto statusEntityToStatusOutDto(StatusEntity statusEntity) {
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

    public static DepartmentOutDto departmentEntityToDepartmentOutDto(DepartmentEntity departmentEntity) {
        return DepartmentOutDto.builder()
                .id(departmentEntity.getId())
                .description(departmentEntity.getDescription())
                .country(ObjectUtils.isEmpty(departmentEntity.getCountry())
                        ? null : countryEntityToCountryOutDto(departmentEntity.getCountry()))
                .build();
    }

    public static CityOutDto cityEntityToCityOutDto(CityEntity cityEntity) {
        return CityOutDto.builder()
                .id(cityEntity.getId())
                .country(ObjectUtils.isEmpty(cityEntity.getCountry()) ? null : countryEntityToCountryOutDto(cityEntity.getCountry()))
                .code(safeParseInteger(cityEntity.getCode()))
                .description(cityEntity.getDescription())
                .build();
    }

    public static GicsOutDto gicsEntityToGicsOutDto(GicsEntity gicsEntity) {
        return GicsOutDto.builder()
                .id(gicsEntity.getId())
                .description(gicsEntity.getDescription())
                .build();
    }

    public static TaxStatusOutDto taxStatusEntityToTaxStatusOutDto(TaxStatusEntity taxStatusEntity) {
        return TaxStatusOutDto.builder()
                .id(taxStatusEntity.getId())
                .description(taxStatusEntity.getDescription())
                .build();
    }

    public static IdentificationTypeOutDto identificationTypeEntityToIdentificationTypeOutDto(
            IdentificationTypeEntity identificationTypeEntity) {
        return IdentificationTypeOutDto.builder()
                .id(identificationTypeEntity.getId())
                .description(identificationTypeEntity.getDescription())
                .build();
    }

    public static DepositoryOutDto depositoryEntityToDepositoryOutDto(DepositoryEntity depositoryEntity) {
        return DepositoryOutDto.builder()
                .id(depositoryEntity.getId())
                .description(depositoryEntity.getDescription())
                .build();
    }

    public static EnterpriseGroupOutDto enterpriseGroupEntityToEnterpriseGroupOutDto(EnterpriseGroupEntity enterpriseGroupEntity) {
        return EnterpriseGroupOutDto.builder()
                .id(enterpriseGroupEntity.getId())
                .code(enterpriseGroupEntity.getCode())
                .name(enterpriseGroupEntity.getName())
                .detail(enterpriseGroupEntity.getDetail())
                .canceled(enterpriseGroupEntity.getCanceled())
                .status(ObjectUtils.isEmpty(enterpriseGroupEntity.getStatus())
                        ? null : statusEntityToStatusOutDto(enterpriseGroupEntity.getStatus()))
                .build();
    }

    public static SystemOutDto systemEntityToSystemOutDto(SystemEntity systemEntity) {
        if (systemEntity == null) return null;
        return SystemOutDto.builder()
                .id(systemEntity.getId())
                .code(systemEntity.getCode())
                .description(systemEntity.getDescription())
                .category(systemEntity.getCategory())
                .build();
    }

    public static BankOutDto bankEntityToBankOutDto(BankEntity bankEntity) {
        if (bankEntity == null) return null;
        return BankOutDto.builder()
                .id(bankEntity.getId())
                .country(ObjectUtils.isEmpty(bankEntity.getCountry()) ? null : countryEntityToCountryOutDto(bankEntity.getCountry()))
                .bankCode(bankEntity.getBankCode())
                .bankName(bankEntity.getBankName())
                .build();
    }

    public static ParticipantBankAccountOutDto participantBankAccountEntityToOutDto(
            ParticipantBankAccountEntity participantBankAccountEntity) {
        if (participantBankAccountEntity == null) return null;
        return ParticipantBankAccountOutDto.builder()
                .id(participantBankAccountEntity.getId())
                .participant(ObjectUtils.isEmpty(participantBankAccountEntity.getParticipant())
                        ? null : MapperUtil.participantEntityToParticipantOutDto(participantBankAccountEntity.getParticipant()))
                .bankAccount(participantBankAccountEntity.getBankAccount())
                .status(ObjectUtils.isEmpty(participantBankAccountEntity.getStatus())
                        ? null : MapperUtil.statusEntityToStatusOutDto(participantBankAccountEntity.getStatus()))
                .type(ObjectUtils.isEmpty(participantBankAccountEntity.getType())
                        ? null : MapperUtil.typeEntityToTypeOutDto(participantBankAccountEntity.getType()))
                .bank(ObjectUtils.isEmpty(participantBankAccountEntity.getBank())
                        ? null : MapperUtil.bankEntityToBankOutDto(participantBankAccountEntity.getBank()))
                .country(ObjectUtils.isEmpty(participantBankAccountEntity.getCountry())
                        ? null : MapperUtil.countryEntityToCountryOutDto(participantBankAccountEntity.getCountry()))
                .entityCode(participantBankAccountEntity.getEntityCode())
                .swiftCode(participantBankAccountEntity.getSwiftCode())
                .principal(participantBankAccountEntity.getPrincipal())
                .branchCode(participantBankAccountEntity.getBranchCode())
                .portfolio(participantBankAccountEntity.getPortfolio())
                .accountConcept(participantBankAccountEntity.getAccountConcept())
                .nitClearingEntity(participantBankAccountEntity.getNitClearingEntity())
                .build();
    }

    public static ParticipantAuthorizationOutDto participantAuthorizationEntityToParticipantAuthorizationOutDto(
            ParticipantAuthorizationEntity participantAuthorizationEntity) {
        if (participantAuthorizationEntity == null) return null;
        return ParticipantAuthorizationOutDto.builder()
                .participant(ObjectUtils.isEmpty(participantAuthorizationEntity.getParticipant())
                        ? null : MapperUtil.participantEntityToParticipantOutDto(participantAuthorizationEntity.getParticipant()))
                .authorizedParticipant(ObjectUtils.isEmpty(participantAuthorizationEntity.getAuthorizedParticipant())
                        ? null : MapperUtil.participantEntityToParticipantOutDto(participantAuthorizationEntity.getAuthorizedParticipant()))
                .type(ObjectUtils.isEmpty(participantAuthorizationEntity.getType())
                        ? null : MapperUtil.typeEntityToTypeOutDto(participantAuthorizationEntity.getType()))
                .build();
    }

    public static ParticipantSuspendedHistoryOutDto participantSuspendedHistoryEntityToParticipantSuspendedHistoryOutDto(
            ParticipantSuspendedHistoryEntity participantSuspendedHistoryEntity) {
        if (participantSuspendedHistoryEntity == null) return null;
        return ParticipantSuspendedHistoryOutDto.builder()
                .id(participantSuspendedHistoryEntity.getId())
                .participant(participantEntityToParticipantBlockOutDto(participantSuspendedHistoryEntity.getParticipant()))
                .actionType(typeEntityToTypeOutDto(participantSuspendedHistoryEntity.getActionType()))
                .processType(typeEntityToTypeOutDto(participantSuspendedHistoryEntity.getProcessType()))
                .effectiveDate(participantSuspendedHistoryEntity.getEffectiveDate())
                .description(participantSuspendedHistoryEntity.getDescription())
                .lastModifyUser(participantSuspendedHistoryEntity.getLastModifyUser())
                .lastModifyDate(participantSuspendedHistoryEntity.getLastModifyDate())
                .build();
    }

    public static ParticipantOutDto participantEntityToParticipantBlockOutDto(ParticipantEntity participantEntity) {
        return ParticipantOutDto.builder()
                .id(participantEntity.getId())
                .code(participantEntity.getCode())
                .documentNumber(participantEntity.getDocumentNumber())
                .identificationType(ObjectUtils.isEmpty(participantEntity.getIdentificationType())
                        ? null : identificationTypeEntityToIdentificationTypeOutDto(participantEntity.getIdentificationType()))
                .name(participantEntity.getName())
                .status(ObjectUtils.isEmpty(participantEntity.getStatus()) ? null : statusEntityToStatusOutDto(participantEntity.getStatus()))
                .build();
    }

    private static Integer safeParseInteger(String value) {
        if (value == null) return null;
        try {
            return Integer.valueOf(value.trim());
        } catch (NumberFormatException ex) {
            return null;
        }
    }

    public static com.nubo.masterparticipant.api.models.dto.response.ParticipantShortOutDto participantEntityToParticipantShortOutDto(ParticipantEntity participantEntity) {
        return com.nubo.masterparticipant.api.models.dto.response.ParticipantShortOutDto.builder()
                .id(participantEntity.getId())
                .code(participantEntity.getCode())
                .name(participantEntity.getName())
                .build();
    }
}

```

## src/main/java/com/nubo/masterparticipant/api/models/dto/request/CountryInDto.java

```java
package com.nubo.masterparticipant.api.models.dto.request;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CountryInDto {

    @Size(max = 3)
    private String code;

    @Size(max = 30)
    private String name;

    @Min(value = 1)
    private Long currencyId;

    @Size(max = 30)
    private String timeZone;
}

```

## src/main/java/com/nubo/masterparticipant/api/models/dto/request/NoSuspendedParticipantInDto.java

```java
package com.nubo.masterparticipant.api.models.dto.request;

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
public class NoSuspendedParticipantInDto {

    @NotNull
    @Min(1)
    private Long participantId;

    @Size(max = 150)
    private String description;

}

```

## src/main/java/com/nubo/masterparticipant/api/models/dto/request/ParamsPageInDto.java

```java
package com.nubo.masterparticipant.api.models.dto.request;

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

## src/main/java/com/nubo/masterparticipant/api/models/dto/request/ParticipantAccountInDto.java

```java
package com.nubo.masterparticipant.api.models.dto.request;

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
public class ParticipantAccountInDto {

    @NotNull
    @Min(1)
    private Long participantId;

    @NotNull
    @Size(max = 50)
    private String accountNumber;

    @NotNull
    @Min(1)
    private Long statusId;

    @NotNull
    @Min(1)
    private Long originTypeId;

    @NotNull
    @Min(1)
    private Long typeId;

    @NotNull
    @Size(min = 1, max = 2)
    private String depositoryId;

    @NotNull
    @Min(1)
    private Long countryId;

    @Size(max = 6)
    private String entityCode;

    @Min(0)
    private Integer swiftCode;

    private Boolean principal;

    @Size(max = 20)
    private String branchCode;

    @Size(max = 20)
    private String portfolio;

    @Size(max = 30)
    private String accountConcept;

    @Size(max = 10)
    private String nitClearingEntity;


}

```

## src/main/java/com/nubo/masterparticipant/api/models/dto/request/ParticipantAccountUpdateInDto.java

```java
package com.nubo.masterparticipant.api.models.dto.request;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ParticipantAccountUpdateInDto {

    @Min(1)
    private Long participantId;

    @Size(max = 50)
    private String accountNumber;

    @Min(1)
    private Long statusId;

    @Min(1)
    private Long originTypeId;

    @Min(1)
    private Long typeId;

    @Size(min = 1, max = 2)
    private String depositoryId;

    @Min(1)
    private Long countryId;

    @Size(max = 6)
    private String entityCode;

    @Min(0)
    private Integer swiftCode;

    private Boolean principal;

    @Size(max = 20)
    private String branchCode;

    @Size(max = 20)
    private String portfolio;

    @Size(max = 30)
    private String accountConcept;

    @Size(max = 10)
    private String nitClearingEntity;

}

```

## src/main/java/com/nubo/masterparticipant/api/models/dto/request/ParticipantDetailUpdateInDto.java

```java
package com.nubo.masterparticipant.api.models.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ParticipantDetailUpdateInDto {

    private Long masterAccountParticipantId;

    private Long ownAccountParticipantId;

}

```

## src/main/java/com/nubo/masterparticipant/api/models/dto/request/ParticipantInDto.java

```java
package com.nubo.masterparticipant.api.models.dto.request;

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
public class ParticipantInDto {


    @NotNull
    @Min(value = 1)
    private Long enterpriseGroupId;

    @NotNull
    @Size(max = 6)
    private String code;

    @NotNull
    @Size(max = 20)
    private String documentNumber;

    @NotNull
    @Min(value = 1)
    private Long identificationTypeId;

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

    private LocalDate registrationDate;

    @Size(max = 20)
    private String taxCode;

    @Size(max = 10)
    private String departmentId;

    @Size(max = 100)
    private String mainAddress;

    @Size(max = 100)
    private String webPage;

    @Size(max = 20)
    private String phoneNumber;

    @NotNull
    @Min(value = 1)
    private Long statusId;

    @NotNull
    @Min(value = 1)
    private Long taxStatusId;

    @NotNull
    @Min(value = 1)
    private Long entityTypeId;

    @Size(max = 1)
    private String directAllocation;

    @Size(max = 1)
    private String marketMaker;

    private Boolean custodian;

    @NotNull
    @Min(value = 1)
    private Long cityId;

    private Boolean canceledStatus;

    @NotNull
    @Min(value = 1)
    private Long registeredSystemId;

    private Boolean dcvRvOpersAuth;

    private Boolean dcvRvSettlementAuth;

    private Boolean directOperatorAgreements;

    private Boolean otcLoanRelationship;


}

```

## src/main/java/com/nubo/masterparticipant/api/models/dto/request/ParticipantInvestorInDto.java

```java
package com.nubo.masterparticipant.api.models.dto.request;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ParticipantInvestorInDto {

    @NotNull
    @Min(value = 1)
    private Long participantId;

    @NotNull
    @Min(value = 1)
    private Long investorId;

}

```

## src/main/java/com/nubo/masterparticipant/api/models/dto/request/ParticipantUpdateInDto.java

```java
package com.nubo.masterparticipant.api.models.dto.request;

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
public class ParticipantUpdateInDto {


    @NotNull
    @Min(1)
    private Long enterpriseGroupId;

    @Size(max = 6)
    private String code;

    @Size(max = 20)
    private String documentNumber;

    @NotNull
    @Min(1)
    private Long identificationTypeId;

    @Size(max = 100)
    private String name;

    @Size(max = 50)
    private String shortName;

    @NotNull
    @Min(1)
    private Long typeId;

    @NotNull
    @Min(1)
    private Long countryId;

    private LocalDate registrationDate;

    @Size(max = 20)
    private String taxCode;

    @Size(max = 10)
    private String departmentId;

    @Size(max = 100)
    private String mainAddress;

    @Size(max = 100)
    private String webPage;

    @Size(max = 20)
    private String phoneNumber;

    @NotNull
    @Min(1)
    private Long statusId;

    @NotNull
    @Min(1)
    private Long taxStatusId;

    @NotNull
    @Min(1)
    private Long entityTypeId;

    @Size(max = 1)
    private String directAllocation;

    @Size(max = 1)
    private String marketMaker;

    private Boolean custodian;

    @NotNull
    @Min(1)
    private Long cityId;

    private Boolean canceledStatus;

    @NotNull
    @Min(1)
    private Long registeredSystemId;

    private Boolean dcvRvOpersAuth;

    private Boolean dcvRvSettlementAuth;

    private Boolean directOperatorAgreements;

    private Boolean otcLoanRelationship;


}

```

## src/main/java/com/nubo/masterparticipant/api/models/dto/request/SuspendedParticipantInDto.java

```java
package com.nubo.masterparticipant.api.models.dto.request;

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
public class SuspendedParticipantInDto {

    @NotNull
    @Min(1)
    private Long participantId;

    @NotNull
    @Min(1)
    private Long processTypeId;

    private LocalDate effectiveDate;

    @Size(max = 150)
    private String description;

}

```

## src/main/java/com/nubo/masterparticipant/api/models/dto/response/BankOutDto.java

```java
package com.nubo.masterparticipant.api.models.dto.response;

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
public class BankOutDto {

    private Long id;

    private CountryOutDto country;

    private Integer bankCode;

    private String bankName;
}

```

## src/main/java/com/nubo/masterparticipant/api/models/dto/response/CityOutDto.java

```java
package com.nubo.masterparticipant.api.models.dto.response;

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

    private CountryOutDto country;

    private Integer code;

    private String description;

}

```

## src/main/java/com/nubo/masterparticipant/api/models/dto/response/CountryOutDto.java

```java
package com.nubo.masterparticipant.api.models.dto.response;

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

## src/main/java/com/nubo/masterparticipant/api/models/dto/response/CurrencyOutDto.java

```java
package com.nubo.masterparticipant.api.models.dto.response;

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

## src/main/java/com/nubo/masterparticipant/api/models/dto/response/DepartmentOutDto.java

```java
package com.nubo.masterparticipant.api.models.dto.response;

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

    private CountryOutDto country;

}

```

## src/main/java/com/nubo/masterparticipant/api/models/dto/response/DepositoryOutDto.java

```java
package com.nubo.masterparticipant.api.models.dto.response;

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
public class DepositoryOutDto {

    private String id;

    private String description;

}
```

## src/main/java/com/nubo/masterparticipant/api/models/dto/response/DirectDepositorOutDto.java

```java
package com.nubo.masterparticipant.api.models.dto.response;

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
public class DirectDepositorOutDto {

    private Long id;

    private DepositoryOutDto depository;

    private String nuamCode;

    private String directDepositorNumber;

    private String crccCompensatorCode;

    private String crccCustodianCode;

    private String crccNegotiatorCode;

}

```

## src/main/java/com/nubo/masterparticipant/api/models/dto/response/EnterpriseGroupOutDto.java

```java
package com.nubo.masterparticipant.api.models.dto.response;

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
public class EnterpriseGroupOutDto {

    private Long id;

    private String code;

    private String name;

    private String detail;

    private Boolean canceled;

    private StatusOutDto status;
}

```

## src/main/java/com/nubo/masterparticipant/api/models/dto/response/GicsOutDto.java

```java
package com.nubo.masterparticipant.api.models.dto.response;

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

## src/main/java/com/nubo/masterparticipant/api/models/dto/response/IdentificationTypeOutDto.java

```java
package com.nubo.masterparticipant.api.models.dto.response;

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

## src/main/java/com/nubo/masterparticipant/api/models/dto/response/InvestorOutDto.java

```java
package com.nubo.masterparticipant.api.models.dto.response;

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

    private String documentType;

    private String nationality;

    private String address;

    private String phoneNumber;

    private String email;

    private String clearinghouseCode;

    private GicsOutDto gics;

    private String moneyLaunderingFlag;

    private TaxStatusOutDto taxStatus;

}

```

## src/main/java/com/nubo/masterparticipant/api/models/dto/response/PageResponseOutDto.java

```java
package com.nubo.masterparticipant.api.models.dto.response;

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

## src/main/java/com/nubo/masterparticipant/api/models/dto/response/ParticipantAccountOutDto.java

```java
package com.nubo.masterparticipant.api.models.dto.response;

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
public class ParticipantAccountOutDto {

    private Long id;

    private ParticipantOutDto participant;

    private String accountNumber;

    private StatusOutDto status;

    private TypeOutDto type;

    private TypeOutDto originType;

    private DepositoryOutDto depository;

    private CountryOutDto country;
    private String entityCode;
    private Integer swiftCode;
    private Boolean principal;
    private String branchCode;
    private String portfolio;
    private String accountConcept;
    private String nitClearingEntity;




}

```

## src/main/java/com/nubo/masterparticipant/api/models/dto/response/ParticipantAssociatedAccountOutDto.java

```java
package com.nubo.masterparticipant.api.models.dto.response;

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
public class ParticipantAssociatedAccountOutDto {
    private Long participantAccountId;
    private Long participantBankAccountId;

    private Long participantId;

    private ParticipantOutDto participant;//Codigo Participante
    private StatusOutDto status;//Estado
    private TypeOutDto type;//Tipo de cuenta
    private TypeOutDto originType;
    private DepositoryOutDto depository;//Entidad
    private BankOutDto bank;
    private CountryOutDto country;//Pais Nuam

    private CurrencyOutDto currency;


    private String accountNumber;//Numero de cuenta
    private String bankAccount;

    private String entityCode;
    private Integer swiftCode;
    private Boolean principal;
    private String branchCode;//Codigo sucursal
    private String portfolio;//Portafolio
    private String concept;//Concepto de cuenta
    private String nitClearingEntity;//Entidad compensadora
}

```

## src/main/java/com/nubo/masterparticipant/api/models/dto/response/ParticipantAuthorizationOutDto.java

```java
package com.nubo.masterparticipant.api.models.dto.response;

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
public class ParticipantAuthorizationOutDto {

    private ParticipantOutDto participant;

    private ParticipantOutDto authorizedParticipant;

    private TypeOutDto type;
}

```

## src/main/java/com/nubo/masterparticipant/api/models/dto/response/ParticipantBankAccountFilterOutDto.java

```java
package com.nubo.masterparticipant.api.models.dto.response;

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
public class ParticipantBankAccountFilterOutDto {

    private Long id;
    private String bankAccount;
    private StatusOutDto status;
    private TypeOutDto type;

}

```

## src/main/java/com/nubo/masterparticipant/api/models/dto/response/ParticipantBankAccountOutDto.java

```java
package com.nubo.masterparticipant.api.models.dto.response;

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
public class ParticipantBankAccountOutDto {

    private Long id;
    private ParticipantOutDto participant;
    private String bankAccount;
    private StatusOutDto status;
    private TypeOutDto type;
    private BankOutDto bank;

    private DepositoryOutDto depository;
    private CountryOutDto country;
    private String entityCode;
    private Integer swiftCode;
    private Boolean principal;
    private String branchCode;
    private String portfolio;
    private String accountConcept;
    private String nitClearingEntity;

}

```

## src/main/java/com/nubo/masterparticipant/api/models/dto/response/ParticipantFilterOutDto.java

```java
package com.nubo.masterparticipant.api.models.dto.response;

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
public class ParticipantFilterOutDto {

    private Long id;

    private String code;

    private String name;

    private String documentNumber;

    private String shortName;
}

```

## src/main/java/com/nubo/masterparticipant/api/models/dto/response/ParticipantInvestorOutDto.java

```java
package com.nubo.masterparticipant.api.models.dto.response;

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
public class ParticipantInvestorOutDto {

    private ParticipantOutDto participant;

    private InvestorOutDto investor;

}

```

## src/main/java/com/nubo/masterparticipant/api/models/dto/response/ParticipantLoanOutDto.java

```java
package com.nubo.masterparticipant.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class ParticipantLoanOutDto {

    private Long id;
    private String code;
    private String name;
    private String shortname;
    private String participanttypes;
    private String country;
    private String shortcountry;
    private String status;
    private Boolean custodian;
    private String documentnumber;
    private String marginaccount;
    private String typeentity;
    private String taxcode;
    private Boolean otcLoanRelationship;
    private ParticipantLoanTaxStatusOutDto taxStatus;
    private ParticipantLoanTypeOutDto type;
    private String documentType;
    private BigDecimal equity;

}

```

## src/main/java/com/nubo/masterparticipant/api/models/dto/response/ParticipantLoanTaxStatusOutDto.java

```java
package com.nubo.masterparticipant.api.models.dto.response;


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
public class ParticipantLoanTaxStatusOutDto {

    private Long taxStatusId;

    private String description;

}

```

## src/main/java/com/nubo/masterparticipant/api/models/dto/response/ParticipantLoanTypeOutDto.java

```java
package com.nubo.masterparticipant.api.models.dto.response;

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
public class ParticipantLoanTypeOutDto {

    private Long typeId;

    private String description;

}

```

## src/main/java/com/nubo/masterparticipant/api/models/dto/response/ParticipantOutDto.java

```java
package com.nubo.masterparticipant.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class ParticipantOutDto {

    private Long id;

    private EnterpriseGroupOutDto enterpriseGroup;

    private String code;

    private String documentNumber;

    private IdentificationTypeOutDto identificationType;

    private String name;

    private String shortName;

    private TypeOutDto type;

    private CountryOutDto country;

    private LocalDate registrationDate;

    private String taxCode;

    private DepartmentOutDto department;

    private String mainAddress;

    private String webPage;

    private String phoneNumber;

    private StatusOutDto status;

    private TaxStatusOutDto taxStatus;

    private TypeOutDto typeEntity;

    private String directAllocation;

    private String marketMaker;

    private Boolean custodian;

    private CityOutDto city;

    private Boolean canceledStatus;

    private SystemOutDto registeredSystem;

    private Boolean dcvRvOpersAuth;

    private Boolean dcvRvSettlementAuth;

    private Boolean directOperatorAgreements;

    private Boolean otcLoanRelationship;

    private String otcIndicator;

    private Boolean suspendedNegotiation;

    private ParticipantAccountOutDto masterAccount;

    private ParticipantAccountOutDto ownAccount;

    private BigDecimal equity;

    private CurrencyOutDto currency;

}

```

## src/main/java/com/nubo/masterparticipant/api/models/dto/response/ParticipantShortOutDto.java

```java
package com.nubo.masterparticipant.api.models.dto.response;

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

}

```

## src/main/java/com/nubo/masterparticipant/api/models/dto/response/ParticipantSuspendedHistoryOutDto.java

```java
package com.nubo.masterparticipant.api.models.dto.response;

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
public class ParticipantSuspendedHistoryOutDto {

    private Long id;

    private ParticipantOutDto participant;

    private TypeOutDto actionType;

    private TypeOutDto processType;

    private LocalDate effectiveDate;

    private String description;

    private String lastModifyUser;

    private LocalDateTime lastModifyDate;

}

```

## src/main/java/com/nubo/masterparticipant/api/models/dto/response/StatusOutDto.java

```java
package com.nubo.masterparticipant.api.models.dto.response;

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

## src/main/java/com/nubo/masterparticipant/api/models/dto/response/SystemOutDto.java

```java
package com.nubo.masterparticipant.api.models.dto.response;

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
public class SystemOutDto {
    private Long id;

    private Integer code;

    private String description;

    private String category;
}

```

## src/main/java/com/nubo/masterparticipant/api/models/dto/response/TaxStatusOutDto.java

```java
package com.nubo.masterparticipant.api.models.dto.response;

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

## src/main/java/com/nubo/masterparticipant/api/models/dto/response/TypeOutDto.java

```java
package com.nubo.masterparticipant.api.models.dto.response;

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

## src/main/java/com/nubo/masterparticipant/api/models/entity/BankEntity.java

```java
package com.nubo.masterparticipant.api.models.entity;

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

    @Column(name = "\"BANK_CODE\"")
    private Integer bankCode; // int4

    @Column(name = "\"BANK_NAME\"", length = 80)
    private String bankName;

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

## src/main/java/com/nubo/masterparticipant/api/models/entity/CityEntity.java

```java
package com.nubo.masterparticipant.api.models.entity;

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

@Getter
@Setter
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

    @ManyToOne
    @JoinColumn(name = "\"COUNTRY_ID\"", nullable = false)
    private CountryEntity country;

    @Column(name = "\"CODE\"", length = 5)
    private String code;

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

## src/main/java/com/nubo/masterparticipant/api/models/entity/CountryEntity.java

```java
package com.nubo.masterparticipant.api.models.entity;

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

## src/main/java/com/nubo/masterparticipant/api/models/entity/CurrencyEntity.java

```java
package com.nubo.masterparticipant.api.models.entity;

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

}

```

## src/main/java/com/nubo/masterparticipant/api/models/entity/DepartmentEntity.java

```java
package com.nubo.masterparticipant.api.models.entity;

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

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"DEPARTMENT\"", schema = "\"NUANBODB\"")
public class DepartmentEntity {

    @Id
    @Column(name = "\"DEPARTMENT_ID\"", length = 10, nullable = false)
    private String id;

    @Column(name = "\"DESCRIPTION\"", length = 80)
    private String description;

    @ManyToOne
    @JoinColumn(name = "\"COUNTRY_ID\"", nullable = false)
    private CountryEntity country;

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

## src/main/java/com/nubo/masterparticipant/api/models/entity/DepositoryEntity.java

```java
package com.nubo.masterparticipant.api.models.entity;

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

## src/main/java/com/nubo/masterparticipant/api/models/entity/DirectDepositoryEntity.java

```java
package com.nubo.masterparticipant.api.models.entity;

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
    @JoinColumn(name = "\"PARTICIPANT_ID\"")
    private ParticipantEntity participant;

    @ManyToOne
    @JoinColumn(name = "\"DEPOSITORY_ID\"")
    private DepositoryEntity depository;

    @Column(name = "\"DIRECT_DEPOSITORY_NUMBER\"")
    private String directDepositoryNumber;

    @Column(name = "\"CRCC_COMPENSATOR_CODE\"", length = 18)
    private String crccCompensatorCode;

    @Column(name = "\"CRCC_CUSTODIAN_CODE\"", length = 18)
    private String crccCustodianCode;

    @Column(name = "\"CRCC_NEGOTIATOR_CODE\"", length = 18)
    private String crccNegotiatorCode;
}

```

## src/main/java/com/nubo/masterparticipant/api/models/entity/EnterpriseGroupEntity.java

```java
package com.nubo.masterparticipant.api.models.entity;

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

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"ENTERPRISE_GROUP\"", schema = "\"NUANBODB\"")
public class EnterpriseGroupEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"ENTERPRISE_GROUP_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"CODE\"")
    private String code;

    @Column(name = "\"NAME\"", length = 255)
    private String name;

    @Column(name = "\"DETAIL\"")
    private String detail;

    @Column(name = "\"CANCELED\"")
    private Boolean canceled;

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

## src/main/java/com/nubo/masterparticipant/api/models/entity/GicsEntity.java

```java
package com.nubo.masterparticipant.api.models.entity;

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

## src/main/java/com/nubo/masterparticipant/api/models/entity/IdentificationTypeEntity.java

```java
package com.nubo.masterparticipant.api.models.entity;

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

    @Column(name = "\"COUNTRY_ID\"")
    private Long countryId;

    @Column(name = "\"CODE\"", length = 30)
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

## src/main/java/com/nubo/masterparticipant/api/models/entity/InvestorEntity.java

```java
package com.nubo.masterparticipant.api.models.entity;

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

    @ManyToOne
    @JoinColumn(name = "\"DEPARTMENT_ID\"", nullable = false)
    private DepartmentEntity department;

    @ManyToOne
    @JoinColumn(name = "\"CITY_ID\"", nullable = false)
    private CityEntity city;

    @Column(name = "\"DOCUMENT_NUMBER\"", length = 20)
    private String documentNumber;

    @Column(name = "\"DOCUMENT_TYPE\"", length = 3)
    private String documentType;

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

## src/main/java/com/nubo/masterparticipant/api/models/entity/ParticipantAccountEntity.java

```java
package com.nubo.masterparticipant.api.models.entity;

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
    @JoinColumn(name = "\"ORIGIN_TYPE_ID\"")
    private TypeEntity originType;

    @ManyToOne
    @JoinColumn(name = "\"DEPOSITORY_ID\"")
    private DepositoryEntity depository;

    @ManyToOne
    @JoinColumn(name = "\"CURRENCY_ID\"")
    private CurrencyEntity currency;

    @ManyToOne
    @JoinColumn(name = "\"COUNTRY_ID\"")
    private CountryEntity country;

    @Column(name = "\"ENTITY_CODE\"", length = 6)
    private String entityCode;

    @Column(name = "\"SWIFT_CODE\"")
    private Integer swiftCode;

    @Column(name = "\"PRINCIPAL\"")
    private Boolean principal;

    @Column(name = "\"BRANCH_CODE\"", length = 20)
    private String branchCode;

    @Column(name = "\"PORTFOLIO\"", length = 20)
    private String portfolio;

    @Column(name = "\"CONCEPT\"", length = 30)
    private String accountConcept;

    @Column(name = "\"NIT_CLEARING_ENTITY\"")
    private String nitClearingEntity;

    @Column(name = "\"IND_MASTER\"")
    private Boolean indMaster;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 250, nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50, nullable = false)
    private String lastModifyIp;

    @ManyToOne
    @JoinColumn(name = "\"TYPE_ACCOUNT\"")
    private TypeEntity typeAccount;

}

```

## src/main/java/com/nubo/masterparticipant/api/models/entity/ParticipantAuthorizationEntity.java

```java
package com.nubo.masterparticipant.api.models.entity;

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

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@IdClass(ParticipantAuthorizationKey.class)
@Table(name = "\"PARTICIPANT_AUTHORIZATION\"", schema = "\"NUANBODB\"")
public class ParticipantAuthorizationEntity {

    @Id
    @ManyToOne
    @JoinColumn(name = "\"PARTICIPANT_ID\"", nullable = false)
    private ParticipantEntity participant;

    @Id
    @ManyToOne
    @JoinColumn(name = "\"AUTHORIZED_PARTICIPANT_ID\"", nullable = false)
    private ParticipantEntity authorizedParticipant;

    @ManyToOne
    @JoinColumn(name = "\"TYPE_ID\"", nullable = false)
    private TypeEntity type;

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

## src/main/java/com/nubo/masterparticipant/api/models/entity/ParticipantAuthorizationKey.java

```java
package com.nubo.masterparticipant.api.models.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ParticipantAuthorizationKey  implements Serializable {

    private Long participant;

    private Long authorizedParticipant;

}

```

## src/main/java/com/nubo/masterparticipant/api/models/entity/ParticipantBankAccountEntity.java

```java
package com.nubo.masterparticipant.api.models.entity;

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
@Table(name = "\"PARTICIPANT_BANK_ACCOUNT\"", schema = "\"NUANBODB\"")
public class ParticipantBankAccountEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"PARTICIPANT_BANK_ACCOUNT_ID\"", nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "\"PARTICIPANT_ID\"", nullable = false)
    private ParticipantEntity participant;

    @Column(name = "\"BANK_ACCOUNT\"", length = 30)
    private String bankAccount;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"", nullable = false)
    private StatusEntity status;

    @ManyToOne
    @JoinColumn(name = "\"TYPE_ID\"", nullable = false)
    private TypeEntity type;

    @ManyToOne
    @JoinColumn(name = "\"BANK_ID\"", nullable = false)
    private BankEntity bank;

    @ManyToOne
    @JoinColumn(name = "\"DEPOSITORY_ID\"", nullable = false)
    private DepositoryEntity depository;

    @ManyToOne
    @JoinColumn(name = "\"CURRENCY_ID\"", nullable = false)
    private CurrencyEntity currency;

    @ManyToOne
    @JoinColumn(name = "\"COUNTRY_ID\"", nullable = false)
    private CountryEntity country;

    @Column(name = "\"ENTITY_CODE\"", length = 6)
    private String entityCode;

    @Column(name = "\"SWIFT_CODE\"")
    private Integer swiftCode;

    @Column(name = "\"PRINCIPAL\"")
    private Boolean principal;

    @Column(name = "\"BRANCH_CODE\"", length = 20)
    private String branchCode;

    @Column(name = "\"PORTFOLIO\"", length = 20)
    private String portfolio;

    @Column(name = "\"CONCEPT\"", length = 30)
    private String accountConcept;

    @Column(name = "\"NIT_CLEARING_ENTITY\"", length = 10)
    private String nitClearingEntity;

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

## src/main/java/com/nubo/masterparticipant/api/models/entity/ParticipantEntity.java

```java
package com.nubo.masterparticipant.api.models.entity;

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

    @ManyToOne
    @JoinColumn(name = "\"ENTERPRISE_GROUP_ID\"")
    private EnterpriseGroupEntity enterpriseGroup;

    @Column(name = "\"CODE\"", length = 6)
    private String code;

    @Column(name = "\"DOCUMENT_NUMBER\"", length = 20)
    private String documentNumber;

    @ManyToOne
    @JoinColumn(name = "\"IDENTIFICATION_TYPE_ID\"", nullable = false)
    private IdentificationTypeEntity identificationType;

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
    @JoinColumn(name = "\"STATUS_ID\"", nullable = false)
    private StatusEntity status;

    @ManyToOne
    @JoinColumn(name = "\"TAX_STATUS_ID\"", nullable = false)
    private TaxStatusEntity taxStatus;

    @ManyToOne
    @JoinColumn(name = "\"ENTITY_TYPE_ID\"", nullable = false)
    private TypeEntity entityType;

    @Column(name = "\"DIRECT_ALLOCATION\"", length = 1)
    private String directAllocation;

    @Column(name = "\"MARKET_MAKER\"", length = 1)
    private String marketMaker;

    @Column(name = "\"CUSTODIAN\"", nullable = true)
    private Boolean custodian;

    @ManyToOne
    @JoinColumn(name = "\"CITY_ID\"", nullable = true)
    private CityEntity city;

    @Column(name = "\"CANCELED_STATUS\"")
    private Boolean canceledStatus;

    @ManyToOne
    @JoinColumn(name = "\"REGISTERED_SYSTEM_ID\"")
    private SystemEntity registeredSystem;

    @Column(name = "\"DCV_RV_OPERS_AUTH\"")
    private Boolean dcvRvOpersAuth;

    @Column(name = "\"DCV_RV_SETTLEMENT_AUTH\"")
    private Boolean dcvRvSettlementAuth;

    @Column(name = "\"DIRECT_OPERATOR_AGREEMENTS\"")
    private Boolean directOperatorAgreements;

    @Column(name = "\"OTC_LOAN_RELATIONSHIP\"")
    private Boolean otcLoanRelationship;

    @Column(name = "\"SUSPENDED_NEGOTIATION\"")
    private Boolean suspendedNegotiation;

    @Column(name = "\"SUSPENDED_EFFECTIVE_DATE\"")
    private LocalDate suspendedEffectiveDate;

    @ManyToOne
    @JoinColumn(name = "\"SUSPENDED_PROCESS_TYPE_ID\"")
    private TypeEntity suspendedProcessType;

    @ManyToOne
    @JoinColumn(name = "\"MASTER_ACCOUNT_ID\"")
    private ParticipantAccountEntity masterAccount;

    @ManyToOne
    @JoinColumn(name = "\"OWN_ACCOUNT_ID\"")
    private ParticipantAccountEntity ownAccount;

    @Column(name = "\"EQUITY\"", precision = 16, scale = 4)
    private BigDecimal equity;

    @ManyToOne
    @JoinColumn(name = "\"CURRENCY_ID\"")
    private CurrencyEntity currency;

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

## src/main/java/com/nubo/masterparticipant/api/models/entity/ParticipantInvestorEntity.java

```java
package com.nubo.masterparticipant.api.models.entity;

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

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@IdClass(ParticipantInvestorKey.class)
@Table(name = "\"PARTICIPANT_INVESTOR\"", schema = "\"NUANBODB\"")
public class ParticipantInvestorEntity {

    @Id
    @ManyToOne
    @JoinColumn(name = "\"PARTICIPANT_ID\"", nullable = false)
    private ParticipantEntity participant;

    @Id
    @ManyToOne
    @JoinColumn(name = "\"INVESTOR_ID\"", nullable = false)
    private InvestorEntity investor;

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

## src/main/java/com/nubo/masterparticipant/api/models/entity/ParticipantInvestorKey.java

```java
package com.nubo.masterparticipant.api.models.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ParticipantInvestorKey implements Serializable {

    private Long participant;

    private Long investor;

}

```

## src/main/java/com/nubo/masterparticipant/api/models/entity/ParticipantSuspendedHistoryEntity.java

```java
package com.nubo.masterparticipant.api.models.entity;

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
@Table(name = "\"PARTICIPANT_SUSPENDED_HISTORY\"", schema = "\"NUANBODB\"")
public class ParticipantSuspendedHistoryEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"PARTICIPANT_SUSPENDED_HISTORY_ID\"", nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "\"PARTICIPANT_ID\"")
    private ParticipantEntity participant;

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

## src/main/java/com/nubo/masterparticipant/api/models/entity/SettlementEntity.java

```java
package com.nubo.masterparticipant.api.models.entity;

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
@Table(name = "\"SETTLEMENT\"", schema = "\"NUANBODB\"")
public class SettlementEntity {

    @Id
    @Column(name = "\"TRADE_ID\"", nullable = false)
    private Integer tradeId;

    @Column(name = "\"PARTICIPANT_ACCOUNT_ID\"", nullable = false)
    private Long participantAccountId;

}
```

## src/main/java/com/nubo/masterparticipant/api/models/entity/StatusEntity.java

```java
package com.nubo.masterparticipant.api.models.entity;

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

}


```

## src/main/java/com/nubo/masterparticipant/api/models/entity/SystemEntity.java

```java
package com.nubo.masterparticipant.api.models.entity;

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

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"SYSTEM\"", schema = "\"NUANBODB\"")
public class SystemEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"SYSTEM_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"CODE\"")
    private Integer code;

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

## src/main/java/com/nubo/masterparticipant/api/models/entity/TaxStatusEntity.java

```java
package com.nubo.masterparticipant.api.models.entity;

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

## src/main/java/com/nubo/masterparticipant/api/models/entity/TradeEntity.java

```java
package com.nubo.masterparticipant.api.models.entity;

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
@Table(name = "\"TRADE\"", schema = "\"NUANBODB\"")
public class TradeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"TRADE_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"PARTICIPANT_ID_BUY\"", nullable = false)
    private Long participantIdBuy;

    @Column(name = "\"PARTICIPANT_ID_SELL\"", nullable = false)
    private Long participantIdSell;

}

```

## src/main/java/com/nubo/masterparticipant/api/models/entity/TypeEntity.java

```java
package com.nubo.masterparticipant.api.models.entity;

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

## src/main/java/com/nubo/masterparticipant/api/models/entity/UserNuboEntity.java

```java
package com.nubo.masterparticipant.api.models.entity;

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

## src/main/java/com/nubo/masterparticipant/api/models/enums/AccountSourceEnum.java

```java
package com.nubo.masterparticipant.api.models.enums;

public enum AccountSourceEnum {
    ALL, DEPOSITORY, BANK
}

```

## src/main/java/com/nubo/masterparticipant/api/models/enums/DirectAllocationEnum.java

```java
package com.nubo.masterparticipant.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Arrays;
@Getter
@RequiredArgsConstructor
public enum DirectAllocationEnum {

    TRUE("true", "Y"),
    FALSE("false", "N");

    private final String apiValue;
    private final String dbValue;


    public String getApiValue() {
        return apiValue;
    }

    public String getDbValue() {
        return dbValue;
    }

    public boolean toBoolean() {
        return this == TRUE;
    }

    public static DirectAllocationEnum fromValue(String value) {
        if (value == null) {
            return null;
        }
        String normalized = value.trim().toLowerCase();

        return Arrays.stream(values())
                .filter(v -> v.apiValue.equals(normalized))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException(
                        "Invalid directAllocation value. Allowed values: true, false"));
    }
}

```

## src/main/java/com/nubo/masterparticipant/api/models/enums/ParticipantStatusEnum.java

```java
package com.nubo.masterparticipant.api.models.enums;

import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum ParticipantStatusEnum {

    ACTIVO(510L, "ACTIVO"),
    INACTIVO(511L, "INACTIVO"),
    SUSPENDIDO(512L, "SUSPENDIDO");

    private final Long id;
    private final String description;

    @JsonValue
    public String getDescription() {
        return description;
    }

    public static ParticipantStatusEnum fromId(Long id) {
        for (ParticipantStatusEnum e : values()) {
            if (e.id.equals(id)) {
                return e;
            }
        }
        return null;
    }

    public static ParticipantStatusEnum fromDescription(String desc) {
        if (desc == null) return null;
        for (ParticipantStatusEnum e : values()) {
            if (e.description.equalsIgnoreCase(desc.trim())) {
                return e;
            }
        }
        return null;
    }
}

```

## src/main/java/com/nubo/masterparticipant/api/models/enums/PropertiesEnum.java

```java
package com.nubo.masterparticipant.api.models.enums;

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

## src/main/java/com/nubo/masterparticipant/api/models/enums/TypeParticipantActionEnum.java

```java
package com.nubo.masterparticipant.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum TypeParticipantActionEnum {

    SUSPENDED(2120L),
    NO_SUSPENDED(2121L);

    private final Long id;

}

```

## src/main/java/com/nubo/masterparticipant/api/models/enums/UserTypeEnum.java

```java
package com.nubo.masterparticipant.api.models.enums;

import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

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

    public static UserTypeEnum fromValue(String value) {
        if (value == null) return null;
        for (UserTypeEnum type : values()) {
            if (type.value.equalsIgnoreCase(value)) {
                return type;
            }
        }
        throw new IllegalArgumentException("Unknown UserTypeEnum value: " + value);
    }
}

```

## src/main/java/com/nubo/masterparticipant/api/models/enums/VersionApiEnum.java

```java
package com.nubo.masterparticipant.api.models.enums;

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

## src/main/java/com/nubo/masterparticipant/api/repository/AccountLookupRepository.java

```java
package com.nubo.masterparticipant.api.repository;

import com.nubo.masterparticipant.api.models.entity.ParticipantAccountEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;
import org.springframework.data.repository.query.Param;

public interface AccountLookupRepository extends Repository<ParticipantAccountEntity, Long>,
        JpaSpecificationExecutor<ParticipantAccountEntity> {

    @Query(
            value = """
            select q.account
            from (
                select pa."ACCOUNT_NUMBER" as account
                from "NUANBODB"."PARTICIPANT_ACCOUNT" pa
                where (:account is null or lower(pa."ACCOUNT_NUMBER") like lower(concat('%', :account, '%')))
                union
                select pba."BANK_ACCOUNT" as account
                from "NUANBODB"."PARTICIPANT_BANK_ACCOUNT" pba
                where (:account is null or lower(pba."BANK_ACCOUNT") like lower(concat('%', :account, '%')))
            ) q
            order by q.account
            """,
            countQuery = """
            select count(*) from (
                select pa."ACCOUNT_NUMBER" as account
                from "NUANBODB"."PARTICIPANT_ACCOUNT" pa
                where (:account is null or lower(pa."ACCOUNT_NUMBER") like lower(concat('%', :account, '%')))
                union
                select pba."BANK_ACCOUNT" as account
                from "NUANBODB"."PARTICIPANT_BANK_ACCOUNT" pba
                where (:account is null or lower(pba."BANK_ACCOUNT") like lower(concat('%', :account, '%')))
            ) c
            """,
            nativeQuery = true
    )
    Page<String> findAccountsForFilter(@Param("account") String account, Pageable pageable);
}

```

## src/main/java/com/nubo/masterparticipant/api/repository/BankRepository.java

```java
package com.nubo.masterparticipant.api.repository;

import com.nubo.masterparticipant.api.models.entity.BankEntity;
import org.springframework.data.jpa.repository.JpaRepository;


public interface BankRepository extends JpaRepository<BankEntity, Long> {
}

```

## src/main/java/com/nubo/masterparticipant/api/repository/CityRepository.java

```java
package com.nubo.masterparticipant.api.repository;

import com.nubo.masterparticipant.api.models.entity.CityEntity;
import com.nubo.masterparticipant.api.models.entity.CountryEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CityRepository extends JpaRepository<CityEntity, Long> {
}

```

## src/main/java/com/nubo/masterparticipant/api/repository/CountryRepository.java

```java
package com.nubo.masterparticipant.api.repository;

import com.nubo.masterparticipant.api.models.entity.CountryEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface CountryRepository extends JpaRepository<CountryEntity, Long> {

    Optional<CountryEntity> findByCode(String code);

    List<CountryEntity> findByCodeInOrderByNameAsc(List<String> codes);
}

```

## src/main/java/com/nubo/masterparticipant/api/repository/CurrencyRepository.java

```java
package com.nubo.masterparticipant.api.repository;

import com.nubo.masterparticipant.api.models.entity.CurrencyEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CurrencyRepository extends JpaRepository<CurrencyEntity, Long> {

    Optional<CurrencyEntity> findFirstByNameContainingIgnoreCase(String name);

}

```

## src/main/java/com/nubo/masterparticipant/api/repository/DepartmentRepository.java

```java
package com.nubo.masterparticipant.api.repository;

import com.nubo.masterparticipant.api.models.entity.DepartmentEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepartmentRepository extends JpaRepository<DepartmentEntity, String> {
}

```

## src/main/java/com/nubo/masterparticipant/api/repository/DepositoryRepository.java

```java
package com.nubo.masterparticipant.api.repository;

import com.nubo.masterparticipant.api.models.entity.DepositoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepositoryRepository extends JpaRepository<DepositoryEntity, String> {
}

```

## src/main/java/com/nubo/masterparticipant/api/repository/DirectDepositoryRepository.java

```java
package com.nubo.masterparticipant.api.repository;

import com.nubo.masterparticipant.api.models.entity.DirectDepositoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DirectDepositoryRepository extends JpaRepository<DirectDepositoryEntity, Long> ,
        JpaSpecificationExecutor<DirectDepositoryEntity> {

    @Query("SELECT d FROM DirectDepositoryEntity d WHERE d.participant.id = :participantId")
    List<DirectDepositoryEntity> findByParticipantId(Long participantId);

}

```

## src/main/java/com/nubo/masterparticipant/api/repository/EnterpriseGroupRepository.java

```java
package com.nubo.masterparticipant.api.repository;

import com.nubo.masterparticipant.api.models.entity.CityEntity;
import com.nubo.masterparticipant.api.models.entity.EnterpriseGroupEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EnterpriseGroupRepository extends JpaRepository<EnterpriseGroupEntity, Long> {
}

```

## src/main/java/com/nubo/masterparticipant/api/repository/IdentificationTypeRepository.java

```java
package com.nubo.masterparticipant.api.repository;

import com.nubo.masterparticipant.api.models.entity.IdentificationTypeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IdentificationTypeRepository extends JpaRepository<IdentificationTypeEntity, Long> {

    @Query("SELECT i FROM IdentificationTypeEntity i " +
            "WHERE i.countryId = :countryId")
    List<IdentificationTypeEntity> findIdentificationTypeByCountry(Long countryId);

}

```

## src/main/java/com/nubo/masterparticipant/api/repository/InvestorRepository.java

```java
package com.nubo.masterparticipant.api.repository;

import com.nubo.masterparticipant.api.models.entity.InvestorEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InvestorRepository extends JpaRepository<InvestorEntity, Long> {
}

```

## src/main/java/com/nubo/masterparticipant/api/repository/ParticipantAccountRepository.java

```java
package com.nubo.masterparticipant.api.repository;

import com.nubo.masterparticipant.api.models.dto.response.ParticipantBankAccountFilterOutDto;
import com.nubo.masterparticipant.api.models.entity.ParticipantAccountEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ParticipantAccountRepository extends JpaRepository<ParticipantAccountEntity, Long>,
        JpaSpecificationExecutor<ParticipantAccountEntity> {

    @Query("SELECT DISTINCT pa FROM SettlementEntity s " +
            "JOIN ParticipantAccountEntity pa ON s.participantAccountId = pa.id " +
            "WHERE s.tradeId = :tradeId")
    Page<ParticipantAccountEntity> findParticipantAccountsByTradeId(@Param("tradeId") Long tradeId, Pageable pageable);

    @Query("""
        select new com.nubo.masterparticipant.api.models.dto.response.ParticipantBankAccountFilterOutDto(
            pba.id,
            pba.accountNumber,
            new com.nubo.masterparticipant.api.models.dto.response.StatusOutDto(
                s.id, s.description, s.category
            ),
            new com.nubo.masterparticipant.api.models.dto.response.TypeOutDto(
                t.id, t.description, t.category, t.detail
            )
        )
        from ParticipantAccountEntity pba
            join pba.participant p
            join p.identificationType it
            join pba.status s
            join pba.type t
        where (:participantId is null or p.id = :participantId)
          and (:account is null or lower(pba.accountNumber) like :account)
          and (:typeId is null or t.id = :typeId)
          and (:statusId is null or s.id = :statusId)
        """)
        //where (:code is null or lower(p.code) like :code)
    Page<ParticipantBankAccountFilterOutDto> findBankAccountsForFilter(
            @Param("participantId") Long participantId,
            @Param("account") String account,
            @Param("typeId") Long typeId,
            @Param("statusId") Long statusId,
            Pageable pageable
    );

}

```

## src/main/java/com/nubo/masterparticipant/api/repository/ParticipantAuthorizationRepository.java

```java
package com.nubo.masterparticipant.api.repository;

import com.nubo.masterparticipant.api.models.entity.ParticipantAuthorizationEntity;
import com.nubo.masterparticipant.api.models.entity.ParticipantAuthorizationKey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface ParticipantAuthorizationRepository extends JpaRepository<ParticipantAuthorizationEntity, ParticipantAuthorizationKey>,
        JpaSpecificationExecutor<ParticipantAuthorizationEntity> {
}



```

## src/main/java/com/nubo/masterparticipant/api/repository/ParticipantBankAccountRepository.java

```java
package com.nubo.masterparticipant.api.repository;

import com.nubo.masterparticipant.api.models.entity.ParticipantBankAccountEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface ParticipantBankAccountRepository extends JpaRepository<ParticipantBankAccountEntity, Long>,
        JpaSpecificationExecutor<ParticipantBankAccountEntity> {


}
```

## src/main/java/com/nubo/masterparticipant/api/repository/ParticipantInvestorRepository.java

```java
package com.nubo.masterparticipant.api.repository;

import com.nubo.masterparticipant.api.models.entity.ParticipantInvestorEntity;
import com.nubo.masterparticipant.api.models.entity.ParticipantInvestorKey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface ParticipantInvestorRepository extends JpaRepository<ParticipantInvestorEntity, ParticipantInvestorKey>,
        JpaSpecificationExecutor<ParticipantInvestorEntity> {
}

```

## src/main/java/com/nubo/masterparticipant/api/repository/ParticipantLoanRepository.java

```java
package com.nubo.masterparticipant.api.repository;

import com.nubo.masterparticipant.api.models.entity.ParticipantEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ParticipantLoanRepository extends JpaRepository<ParticipantEntity, Long> {

        // ---------- BASE SELECT ----------
        String BASE_SELECT = """
        SELECT
            p."PARTICIPANT_ID",
            p."CODE",
            p."NAME",
            p."SHORT_NAME",
            t."DESCRIPTION",
            c."NAME",
            c."CODE",
            s."DESCRIPTION",
            p."CUSTODIAN",
            p."DOCUMENT_NUMBER",
            p."MARGIN_ACCOUNT",
            p."TYPE_ENTITY",
            p."TAX_CODE",
            p."OTC_LOAN_RELATIONSHIP",
            
            
            ts."TAX_STATUS_ID",
            ts."DESCRIPTION",
        
            t."TYPE_ID",
            t."DESCRIPTION" AS TYPE_DESCRIPTION,
           
            it."CODE" AS IDENTIFICATION_TYPE_CODE,
            
            p."EQUITY" AS EQUITY
                        
        FROM "NUANBODB"."PARTICIPANT" p
        INNER JOIN "NUANBODB"."TYPE" t ON p."TYPE_ID" = t."TYPE_ID"
        INNER JOIN "NUANBODB"."COUNTRY" c ON p."COUNTRY_ID" = c."COUNTRY_ID"
        INNER JOIN "NUANBODB"."STATUS" s ON p."STATUS_ID" = s."STATUS_ID"
        INNER JOIN "NUANBODB"."TAX_STATUS" ts ON ts."TAX_STATUS_ID" = p."TAX_STATUS_ID"
        INNER JOIN "NUANBODB"."IDENTIFICATION_TYPE" it ON it."IDENTIFICATION_TYPE_ID" = p."IDENTIFICATION_TYPE_ID"
        WHERE p."OTC_LOAN_RELATIONSHIP" = TRUE
        """;

        // FIND BY ID
        @Query(value = BASE_SELECT + """
        AND p."PARTICIPANT_ID" = :id
        AND (:countryCode IS NULL OR p."COUNTRY_ID" = :countryCode)
        """, nativeQuery = true)
        List<Object[]> findLoanById(@Param("id") Long id, @Param("countryCode") Long countryCode);

        @Query(value = BASE_SELECT + """
        AND p."PARTICIPANT_ID" = :id
        AND t."TYPE_ID" IN (:types)
        AND (:countryCode IS NULL OR p."COUNTRY_ID" = :countryCode)
        """, nativeQuery = true)
        List<Object[]> findLoanByIdAndTypes(@Param("id") Long id, @Param("types") List<Long> types, @Param("countryCode") Long countryCode);


        // FIND BY CODE
        @Query(value = BASE_SELECT + """
        AND p."CODE" = :code
        AND (:countryCode IS NULL OR p."COUNTRY_ID" = :countryCode)
        """, nativeQuery = true)
        List<Object[]> findLoanByCode(@Param("code") String code, @Param("countryCode") Long countryCode);

        @Query(value = BASE_SELECT + """
        AND p."CODE" = :code
        AND t."TYPE_ID" IN (:types)
        AND (:countryCode IS NULL OR p."COUNTRY_ID" = :countryCode)
        """, nativeQuery = true)
        List<Object[]> findLoanByCodeAndTypes(@Param("code") String code, @Param("types") List<Long> types, @Param("countryCode") Long countryCode);

        // FIND BY CODE PREFIX
        @Query(value = BASE_SELECT + """
        AND p."CODE" LIKE CONCAT(:prefix, '%')
        AND (:countryCode IS NULL OR p."COUNTRY_ID" = :countryCode)
        """, nativeQuery = true)
        List<Object[]> findByCodePrefix(@Param("prefix") String prefix, @Param("countryCode") Long countryCode);

        @Query(value = BASE_SELECT + """
        AND p."CODE" LIKE CONCAT(:prefix, '%')
        AND t."TYPE_ID" IN (:types)
        AND (:countryCode IS NULL OR p."COUNTRY_ID" = :countryCode)
        """, nativeQuery = true)
        List<Object[]> findByCodePrefixAndTypes(@Param("prefix") String prefix, @Param("types") List<Long> types, @Param("countryCode") Long countryCode);

        // FIND BY SHORTNAME PREFIX
        @Query(value = BASE_SELECT + """
        AND p."SHORT_NAME" LIKE CONCAT(:prefix, '%')
        AND (:countryCode IS NULL OR p."COUNTRY_ID" = :countryCode)
        """, nativeQuery = true)
        List<Object[]> findByShortnamePrefix(@Param("prefix") String prefix, @Param("countryCode") Long countryCode);

        @Query(value = BASE_SELECT + """
        AND p."SHORT_NAME" LIKE CONCAT(:prefix, '%')
        AND t."TYPE_ID" IN (:types)
        AND (:countryCode IS NULL OR p."COUNTRY_ID" = :countryCode)
        """, nativeQuery = true)
        List<Object[]> findByShortnamePrefixAndTypes(@Param("prefix") String prefix, @Param("types") List<Long> types, @Param("countryCode") Long countryCode);

        // LIST PAGINATED
        @Query(value = BASE_SELECT + """
        AND (:countryCode IS NULL OR p."COUNTRY_ID" = :countryCode)
        ORDER BY p."PARTICIPANT_ID"
        LIMIT :size OFFSET :offset
        """, nativeQuery = true)
        List<Object[]> findAllLoanParticipants(
                @Param("size") int size,
                @Param("offset") int offset,
                @Param("countryCode") Long countryCode
        );

        @Query(value = BASE_SELECT + """
        AND t."TYPE_ID" IN (:types)
        AND (:countryCode IS NULL OR p."COUNTRY_ID" = :countryCode)
        ORDER BY p."PARTICIPANT_ID"
        LIMIT :size OFFSET :offset
        """, nativeQuery = true)
        List<Object[]> findAllLoanParticipantsAndTypes(
                @Param("size") int size,
                @Param("offset") int offset,
                @Param("types") List<Long> types,
                @Param("countryCode") Long countryCode
        );

        // COUNT
        @Query(value = """
        SELECT COUNT(*)
        FROM "NUANBODB"."PARTICIPANT" p
        WHERE p."OTC_LOAN_RELATIONSHIP" = TRUE
        AND (:countryCode IS NULL OR p."COUNTRY_ID" = :countryCode)
        """, nativeQuery = true)
        long countLoanParticipants(@Param("countryCode") Long countryCode);

        @Query(value = """
        SELECT COUNT(*)
        FROM "NUANBODB"."PARTICIPANT" p
        INNER JOIN "NUANBODB"."TYPE" t ON p."TYPE_ID" = t."TYPE_ID"
        WHERE p."OTC_LOAN_RELATIONSHIP" = TRUE
        AND t."TYPE_ID" IN (:types)
        AND (:countryCode IS NULL OR p."COUNTRY_ID" = :countryCode)
        """, nativeQuery = true)
        long countLoanParticipantsByTypes(@Param("types") List<Long> types, @Param("countryCode") Long countryCode);
    }

```

## src/main/java/com/nubo/masterparticipant/api/repository/ParticipantRepository.java

```java
package com.nubo.masterparticipant.api.repository;

import com.nubo.masterparticipant.api.models.dto.response.ParticipantFilterOutDto;
import com.nubo.masterparticipant.api.models.entity.ParticipantEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ParticipantRepository extends JpaRepository<ParticipantEntity, Long>,
        JpaSpecificationExecutor<ParticipantEntity> {

    @Query("SELECT p FROM ParticipantEntity p WHERE p.id IN " +
            "(SELECT t.participantIdBuy FROM TradeEntity t WHERE t.id = :tradeId) " +
            "OR p.id IN (SELECT t.participantIdSell FROM TradeEntity t WHERE t.id = :tradeId)")
    Page<ParticipantEntity> findParticipantsByTradeId(@Param("tradeId") Long tradeId, Pageable pageable);


    @Query("""
            select new com.nubo.masterparticipant.api.models.dto.response.ParticipantFilterOutDto(
                 p.id,
                 p.code,
                 p.name,
                 p.documentNumber,
                 p.shortName
            )
            from ParticipantEntity p
                where (:code is null or lower(p.code) like :code)
            """)
    Page<ParticipantFilterOutDto> findByCodeLike(String code, Pageable pageable);

    @Query("""
            select new com.nubo.masterparticipant.api.models.dto.response.ParticipantFilterOutDto(
                 p.id,
                 p.code,
                 p.name,
                 p.documentNumber,
                 p.shortName
            )
            from ParticipantEntity p
                where (:name is null or lower(p.name) like :name)
            """)
    Page<ParticipantFilterOutDto> findByNameLike(String name, Pageable pageable);

    @Query("""
            select new com.nubo.masterparticipant.api.models.dto.response.ParticipantFilterOutDto(
                 p.id,
                 p.code,
                 p.name,
                 p.documentNumber,
                 p.shortName
            )
            from ParticipantEntity p
                where (:doc is null or lower(p.documentNumber) like :doc)
                order by p.documentNumber asc
            """)
    Page<ParticipantFilterOutDto> findByDocumentNumberLikePageable(String doc, Pageable pageable);

}

```

## src/main/java/com/nubo/masterparticipant/api/repository/ParticipantSuspendedHistoryRepository.java

```java
package com.nubo.masterparticipant.api.repository;

import com.nubo.masterparticipant.api.models.entity.ParticipantSuspendedHistoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface ParticipantSuspendedHistoryRepository extends JpaRepository<ParticipantSuspendedHistoryEntity, Long>,
        JpaSpecificationExecutor<ParticipantSuspendedHistoryEntity> {
}

```

## src/main/java/com/nubo/masterparticipant/api/repository/StatusRepository.java

```java
package com.nubo.masterparticipant.api.repository;

import com.nubo.masterparticipant.api.models.entity.StatusEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StatusRepository extends JpaRepository<StatusEntity, Long> {

    List<StatusEntity> findByCategoryIgnoreCase(String category);
}

```

## src/main/java/com/nubo/masterparticipant/api/repository/SystemRepository.java

```java
package com.nubo.masterparticipant.api.repository;

import com.nubo.masterparticipant.api.models.entity.CityEntity;
import com.nubo.masterparticipant.api.models.entity.SystemEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SystemRepository extends JpaRepository<SystemEntity, Long> {
}

```

## src/main/java/com/nubo/masterparticipant/api/repository/TaxStatusRepository.java

```java
package com.nubo.masterparticipant.api.repository;

import com.nubo.masterparticipant.api.models.entity.TaxStatusEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaxStatusRepository extends JpaRepository<TaxStatusEntity, Long> {
}

```

## src/main/java/com/nubo/masterparticipant/api/repository/TradeRepository.java

```java
package com.nubo.masterparticipant.api.repository;

import com.nubo.masterparticipant.api.models.entity.TradeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TradeRepository extends JpaRepository<TradeEntity, Long> {
}

```

## src/main/java/com/nubo/masterparticipant/api/repository/TypeRepository.java

```java
package com.nubo.masterparticipant.api.repository;

import com.nubo.masterparticipant.api.models.entity.TypeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TypeRepository extends JpaRepository<TypeEntity, Long> {

    List<TypeEntity> findByCategoryIgnoreCase(String category);
}

```

## src/main/java/com/nubo/masterparticipant/api/repository/UserNuboRepository.java

```java
package com.nubo.masterparticipant.api.repository;

import com.nubo.masterparticipant.api.models.entity.UserNuboEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface UserNuboRepository extends JpaRepository<UserNuboEntity, Long> {

    @Query("SELECT u FROM UserNuboEntity u " +
            "WHERE u.userName = :userName")
    Optional<UserNuboEntity> findByUserName(String userName);

}

```

## src/main/java/com/nubo/masterparticipant/api/service/CountryService.java

```java
package com.nubo.masterparticipant.api.service;


import com.nubo.masterparticipant.api.models.dto.request.CountryInDto;
import com.nubo.masterparticipant.api.models.dto.response.CountryOutDto;

import java.util.List;

public interface CountryService {

    List<CountryOutDto> findAllCountries();

    List<CountryOutDto> findNuamCountries();
    CountryOutDto findCountryById(Long countryId);

    CountryOutDto updateCountry(Long countryId, CountryInDto countryInDto);

}

```

## src/main/java/com/nubo/masterparticipant/api/service/DepositoryService.java

```java
package com.nubo.masterparticipant.api.service;

import com.nubo.masterparticipant.api.models.dto.response.DepositoryOutDto;

import java.util.List;

public interface DepositoryService {

    List<DepositoryOutDto> findAllDepository();

}

```

## src/main/java/com/nubo/masterparticipant/api/service/IdentificationTypeService.java

```java
package com.nubo.masterparticipant.api.service;

import com.nubo.masterparticipant.api.models.dto.response.IdentificationTypeOutDto;

import java.util.List;

public interface IdentificationTypeService {

    List<IdentificationTypeOutDto> findAllIdentificationType();

    List<IdentificationTypeOutDto> findIdentificationTypeByCountry(Long countryId);

}

```

## src/main/java/com/nubo/masterparticipant/api/service/ParticipantAccountService.java

```java
package com.nubo.masterparticipant.api.service;

import com.nubo.masterparticipant.api.models.dto.request.ParamsPageInDto;
import com.nubo.masterparticipant.api.models.dto.request.ParticipantAccountInDto;
import com.nubo.masterparticipant.api.models.dto.request.ParticipantAccountUpdateInDto;
import com.nubo.masterparticipant.api.models.dto.response.PageResponseOutDto;
import com.nubo.masterparticipant.api.models.dto.response.ParticipantAccountOutDto;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ParticipantAccountService {

    PageResponseOutDto<ParticipantAccountOutDto> findAllParticipantAccount(Pageable pageable, String depositId,
                                                                           Long accountTypeId, String accountNumber, Long currencyId, Long statusId);

    ParticipantAccountOutDto findParticipantAccountById(Long participantAccountId);

    PageResponseOutDto<ParticipantAccountOutDto> findParticipantAccount(ParamsPageInDto paramsPageInDto, Long participantId, String text);

    List<ParticipantAccountOutDto> getParticipantAccountsByTrade(Long tradeId, Pageable pageable);

    ParticipantAccountOutDto createParticipantAccount(ParticipantAccountInDto participantAccountInDto);

    ParticipantAccountOutDto updateParticipantAccount(Long participantAccountId,
                                                      ParticipantAccountUpdateInDto participantAccountUpdateInDto);

}

```

## src/main/java/com/nubo/masterparticipant/api/service/ParticipantAssociatedAccountService.java

```java
package com.nubo.masterparticipant.api.service;

import com.nubo.masterparticipant.api.models.dto.response.PageResponseOutDto;
import com.nubo.masterparticipant.api.models.dto.response.ParticipantAssociatedAccountOutDto;
import com.nubo.masterparticipant.api.models.dto.response.ParticipantBankAccountFilterOutDto;
import com.nubo.masterparticipant.api.models.enums.AccountSourceEnum;

public interface ParticipantAssociatedAccountService {

    PageResponseOutDto<ParticipantAssociatedAccountOutDto> findAccountsAssociatedByParticipant(
            Long participantId,
            AccountSourceEnum source,
            int page,
            int size,
            String sort,
            String order,
            boolean all,
            String depositoryId,
            Long accountTypeId,
            String accountNumber,
            Long currencyId,
            String currencyName
    );

    PageResponseOutDto<ParticipantBankAccountFilterOutDto> searchParticipantBankAccounts(
            Long participantId,
            String account,
            Long typeId,
            Long statusId,
            int page,
            int size,
            String sort,
            String order,
            boolean all
    );
}

```

## src/main/java/com/nubo/masterparticipant/api/service/ParticipantAuthorizationService.java

```java
package com.nubo.masterparticipant.api.service;

import com.nubo.masterparticipant.api.models.dto.response.PageResponseOutDto;
import com.nubo.masterparticipant.api.models.dto.response.ParticipantAuthorizationOutDto;


public interface ParticipantAuthorizationService {

    PageResponseOutDto<ParticipantAuthorizationOutDto> findAllParticipantAuthorization(
            int page,
            int size,
            String sort,
            String order,
            boolean all,
            Long participantId,
            Long authorizedParticipantId,
            Long typeId
    );

}

```

## src/main/java/com/nubo/masterparticipant/api/service/ParticipantBankAccountService.java

```java
package com.nubo.masterparticipant.api.service;

import com.nubo.masterparticipant.api.models.dto.response.PageResponseOutDto;
import com.nubo.masterparticipant.api.models.dto.response.ParticipantBankAccountOutDto;
import org.springframework.data.domain.Pageable;

public interface ParticipantBankAccountService {

    PageResponseOutDto<ParticipantBankAccountOutDto> findAllParticipantBankAccount(Pageable pageable,
                                                                                          Long bankId,
                                                                                          Long typeId,
                                                                                          String bankAccount,
                                                                                          Long countryId,
                                                                                          Long statusId,
                                                                                          Boolean principal);

    ParticipantBankAccountOutDto findParticipantBankAccountById(Long id);
}

```

## src/main/java/com/nubo/masterparticipant/api/service/ParticipantEquivalenceService.java

```java
package com.nubo.masterparticipant.api.service;

import com.nubo.masterparticipant.api.models.dto.response.DirectDepositorOutDto;

import java.util.List;

public interface ParticipantEquivalenceService {

    DirectDepositorOutDto findParticipantEquivalence(Long participantId, String participantCode);

    List<DirectDepositorOutDto> findParticipantEquivalences(Long participantId, String participantCode, Long depositoryId);
}

```

## src/main/java/com/nubo/masterparticipant/api/service/ParticipantInvestorService.java

```java
package com.nubo.masterparticipant.api.service;

import org.springframework.stereotype.Repository;

import com.nubo.masterparticipant.api.models.dto.request.ParticipantInvestorInDto;
import com.nubo.masterparticipant.api.models.dto.response.PageResponseOutDto;
import com.nubo.masterparticipant.api.models.dto.response.ParticipantInvestorOutDto;

@Repository
public interface ParticipantInvestorService {

    PageResponseOutDto<ParticipantInvestorOutDto> findAllParticipantInvestor(
            int page, int size, String sort, String order, boolean all, Long participantId, Long investorId);

    ParticipantInvestorOutDto createParticipantInvestor(ParticipantInvestorInDto participantInvestorInDto);
}

```

## src/main/java/com/nubo/masterparticipant/api/service/ParticipantLoanService.java

```java
package com.nubo.masterparticipant.api.service;

import com.nubo.masterparticipant.api.models.dto.response.PageResponseOutDto;
import com.nubo.masterparticipant.api.models.dto.response.ParticipantLoanOutDto;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ParticipantLoanService {

    ParticipantLoanOutDto getById(Long id, Long[] types, String countryCode);

    ParticipantLoanOutDto getByCode(String code, Long[] types, String countryCode);

    List<ParticipantLoanOutDto> getByCodePrefix(String prefix, Long[] types, String countryCode);

    PageResponseOutDto<ParticipantLoanOutDto> getAll(Pageable pageable, Long[] types, String countryCode);

    List<ParticipantLoanOutDto> getByShortnamePrefix(String prefix, Long[] types, String countryCode);

}

```

## src/main/java/com/nubo/masterparticipant/api/service/ParticipantService.java

```java
package com.nubo.masterparticipant.api.service;

import com.nubo.masterparticipant.api.models.dto.request.ParticipantDetailUpdateInDto;
import com.nubo.masterparticipant.api.models.dto.request.ParticipantInDto;
import com.nubo.masterparticipant.api.models.dto.request.ParticipantUpdateInDto;
import com.nubo.masterparticipant.api.models.dto.response.PageResponseOutDto;
import com.nubo.masterparticipant.api.models.dto.response.ParticipantFilterOutDto;
import com.nubo.masterparticipant.api.models.dto.response.ParticipantOutDto;
import com.nubo.masterparticipant.api.models.dto.response.ParticipantShortOutDto;

import java.util.List;

public interface ParticipantService {

    PageResponseOutDto<ParticipantOutDto> findAllParticipant(
            int page, int size, String sort, String order, boolean all,
            String code, String name, String documentNumber, Long typeId, Long statusId);

    ParticipantOutDto findParticipantById(Long participantId);

    List<ParticipantOutDto> getParticipantByTrade(Long tradeId, int page, int size);

    PageResponseOutDto<ParticipantOutDto> searchParticipant(
            String text, int page, int size, String sort, String order, boolean all);

    ParticipantOutDto createParticipant(ParticipantInDto participantInDto);

    ParticipantOutDto updateParticipant(Long participantId, ParticipantUpdateInDto participantInDto);

    ParticipantOutDto updateDirectAllocation(Long participantId, String directAllocation);

    ParticipantOutDto updateParticipantDetail(Long participantId, ParticipantDetailUpdateInDto participantDetailUpdateInDto);

    PageResponseOutDto<ParticipantFilterOutDto> searchByCode(
            String code, int page, int size, String sort, String order, boolean all);

    PageResponseOutDto<ParticipantFilterOutDto> searchByName(
            String name, int page, int size, String sort, String order, boolean all);

    PageResponseOutDto<ParticipantFilterOutDto> listIdentifications(
            String documentNumber, int page, int size, String sort, String order, boolean all);

    PageResponseOutDto<ParticipantShortOutDto> findAllParticipantShort(
            int page, int size, String sort, String order, boolean all,
            String code, String name, String documentNumber, Long typeId, Long statusId, Long countryId);

}

```

## src/main/java/com/nubo/masterparticipant/api/service/ParticipantSuspendedHistoryService.java

```java
package com.nubo.masterparticipant.api.service;

import com.nubo.masterparticipant.api.models.dto.request.ParamsPageInDto;
import com.nubo.masterparticipant.api.models.dto.response.PageResponseOutDto;
import com.nubo.masterparticipant.api.models.dto.response.ParticipantSuspendedHistoryOutDto;

public interface ParticipantSuspendedHistoryService {

    PageResponseOutDto<ParticipantSuspendedHistoryOutDto> findParticipantSuspendedHistory(
            ParamsPageInDto paramsPageInDto, Long participantId);

}

```

## src/main/java/com/nubo/masterparticipant/api/service/ParticipantSuspendedService.java

```java
package com.nubo.masterparticipant.api.service;

import com.nubo.masterparticipant.api.models.dto.request.NoSuspendedParticipantInDto;
import com.nubo.masterparticipant.api.models.dto.request.SuspendedParticipantInDto;
import com.nubo.masterparticipant.api.models.dto.response.ParticipantSuspendedHistoryOutDto;

public interface ParticipantSuspendedService {

    ParticipantSuspendedHistoryOutDto suspendedParticipant(SuspendedParticipantInDto suspendedParticipantInDto);

    ParticipantSuspendedHistoryOutDto noSuspendedParticipant(NoSuspendedParticipantInDto noSuspendedParticipantInDto);

}

```

## src/main/java/com/nubo/masterparticipant/api/service/StatusService.java

```java
package com.nubo.masterparticipant.api.service;

import com.nubo.masterparticipant.api.models.dto.response.StatusOutDto;

import java.util.List;

public interface StatusService {

    List<StatusOutDto> findAllStatus(String category);

}

```

## src/main/java/com/nubo/masterparticipant/api/service/TypeService.java

```java
package com.nubo.masterparticipant.api.service;

import com.nubo.masterparticipant.api.models.dto.response.TypeOutDto;

import java.util.List;

public interface TypeService {

    List<TypeOutDto> findAllType(String category);

}

```

## src/main/java/com/nubo/masterparticipant/api/service/impl/CountryServiceImpl.java

```java
package com.nubo.masterparticipant.api.service.impl;

import com.nubo.masterparticipant.api.application.properties.PropertiesConfig;
import com.nubo.masterparticipant.api.application.properties.PropertiesContext;
import com.nubo.masterparticipant.api.exception.ServiceException;
import com.nubo.masterparticipant.api.exception.error.ErrorCode;
import com.nubo.masterparticipant.api.helpers.MapperUtil;
import com.nubo.masterparticipant.api.models.dto.request.CountryInDto;
import com.nubo.masterparticipant.api.models.dto.response.CountryOutDto;
import com.nubo.masterparticipant.api.models.entity.CountryEntity;
import com.nubo.masterparticipant.api.models.entity.CurrencyEntity;
import com.nubo.masterparticipant.api.models.enums.VersionApiEnum;
import com.nubo.masterparticipant.api.repository.CountryRepository;
import com.nubo.masterparticipant.api.repository.CurrencyRepository;
import com.nubo.masterparticipant.api.service.CountryService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
@Slf4j
public class CountryServiceImpl implements CountryService {

    private final CountryRepository countryRepository;
    private final CurrencyRepository currencyRepository;
    private final PropertiesConfig propertiesConfig;
    private static final List<String> NUAM_COUNTRY_CODES = List.of("CL", "CO", "PE");
    @Override
    public List<CountryOutDto> findAllCountries() {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllCountriesV1();
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<CountryOutDto> findAllCountriesV1() {
        log.info("Start method findAllCountriesV1");

        List<CountryOutDto> countryOutDto = countryRepository.findAll().stream()
                .map(MapperUtil::countryEntityToCountryOutDto)
                .toList();

        log.info("End method findAllCountriesV1, number of countries found: {}", countryOutDto.size());

        return countryOutDto;
    }

    @Override
    public List<CountryOutDto> findNuamCountries() {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findNuamCountriesV1();
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<CountryOutDto> findNuamCountriesV1() {
        log.info("Start method findNuamCountriesV1");

        List<CountryOutDto> countryOutDtoList = countryRepository
                .findByCodeInOrderByNameAsc(NUAM_COUNTRY_CODES)
                .stream()
                .map(MapperUtil::countryEntityToCountryOutDto)
                .toList();

        log.info("End method findNuamCountriesV1, number of NUAM countries found: {}",
                countryOutDtoList.size());

        return countryOutDtoList;
    }
    @Override
    public CountryOutDto findCountryById(Long countryId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findCountryByIdV1(countryId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private CountryOutDto findCountryByIdV1(Long countryId) {
        log.info("Start method findCountryByIdV1, country with id -> {}", countryId);

        CountryEntity countryEntity = validateCountry(countryId);
        CountryOutDto countryOutDto = MapperUtil.countryEntityToCountryOutDto(countryEntity);

        log.info("End method findCountryByIdV1, country with id: {}", countryOutDto);

        return countryOutDto;
    }

    @Override
    public CountryOutDto updateCountry(Long countryId, CountryInDto countryInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return updateCountryV1(countryId, countryInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private CountryOutDto updateCountryV1(Long countryId, CountryInDto countryInDto) {
        log.debug("Start method updateCountryV1, countryId -> {}, country -> {}", countryId, countryInDto);
        CountryEntity countryEntityLast = validateCountry(countryId);

        CountryEntity countryEntity = CountryEntity.builder()
                .id(countryEntityLast.getId())
                .code(ObjectUtils.isEmpty(countryInDto.getCode()) ?
                        countryEntityLast.getCode() : countryInDto.getCode())
                .name(ObjectUtils.isEmpty(countryInDto.getName()) ?
                        countryEntityLast.getName() : countryInDto.getName())
                .currency(ObjectUtils.isEmpty(countryInDto.getCurrencyId()) ?
                        countryEntityLast.getCurrency() : validateCurrency(countryInDto.getCurrencyId()))
                .timeZone(ObjectUtils.isEmpty(countryInDto.getTimeZone()) ?
                        countryEntityLast.getTimeZone() : countryInDto.getTimeZone())
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyIp(PropertiesContext.getClientIp())
                .lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyDate(PropertiesContext.getClientDatetime())
                .build();

        CountryOutDto countryOutDto = MapperUtil.countryEntityToCountryOutDto(countryRepository.save(countryEntity));

        log.info("End method updateCountryV1, country -> {}", countryOutDto);

        return countryOutDto;
    }

    private CountryEntity validateCountry(Long countryId) {
        return countryRepository.findById(countryId)
                .orElseThrow(() -> new ServiceException(ErrorCode.COUNTRY_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private CurrencyEntity validateCurrency(Long currencyId) {
        return currencyRepository.findById(currencyId)
                .orElseThrow(() -> new ServiceException(ErrorCode.CURRENCY_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

}

```

## src/main/java/com/nubo/masterparticipant/api/service/impl/DepositoryServiceImpl.java

```java
package com.nubo.masterparticipant.api.service.impl;

import com.nubo.masterparticipant.api.application.properties.PropertiesContext;
import com.nubo.masterparticipant.api.exception.ServiceException;
import com.nubo.masterparticipant.api.exception.error.ErrorCode;
import com.nubo.masterparticipant.api.helpers.MapperUtil;
import com.nubo.masterparticipant.api.models.dto.response.DepositoryOutDto;
import com.nubo.masterparticipant.api.models.entity.DepositoryEntity;
import com.nubo.masterparticipant.api.models.enums.VersionApiEnum;
import com.nubo.masterparticipant.api.repository.DepositoryRepository;
import com.nubo.masterparticipant.api.service.DepositoryService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
@Slf4j
public class DepositoryServiceImpl implements DepositoryService {

    private final DepositoryRepository depositoryRepository;

    @Override
    public List<DepositoryOutDto> findAllDepository() {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllDepositoryV1();
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<DepositoryOutDto> findAllDepositoryV1() {
        log.info("Start method findAllDepositoryV1");

        List<DepositoryEntity> depositoryEntityList = depositoryRepository.findAll();

        List<DepositoryOutDto> depositoryOutDtoList = depositoryEntityList.stream()
                .map(MapperUtil::depositoryEntityToDepositoryOutDto)
                .toList();

        log.info("End method findAllDepositoryV1, depositoryOutDtoList -> {}", depositoryOutDtoList);

        return depositoryOutDtoList;
    }

}

```

## src/main/java/com/nubo/masterparticipant/api/service/impl/IdentificationTypeServiceImpl.java

```java
package com.nubo.masterparticipant.api.service.impl;

import com.nubo.masterparticipant.api.application.properties.PropertiesContext;
import com.nubo.masterparticipant.api.exception.ServiceException;
import com.nubo.masterparticipant.api.exception.error.ErrorCode;
import com.nubo.masterparticipant.api.helpers.MapperUtil;
import com.nubo.masterparticipant.api.models.dto.response.IdentificationTypeOutDto;
import com.nubo.masterparticipant.api.models.entity.IdentificationTypeEntity;
import com.nubo.masterparticipant.api.models.enums.VersionApiEnum;
import com.nubo.masterparticipant.api.repository.IdentificationTypeRepository;
import com.nubo.masterparticipant.api.service.IdentificationTypeService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
@Slf4j
public class IdentificationTypeServiceImpl implements IdentificationTypeService {

    private final IdentificationTypeRepository identificationTypeRepository;

    @Override
    public List<IdentificationTypeOutDto> findAllIdentificationType() {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllIdentificationTypeV1();
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<IdentificationTypeOutDto> findAllIdentificationTypeV1() {
        log.info("Start method findAllIdentificationTypeV1");

        List<IdentificationTypeEntity> identificationTypeEntityList = identificationTypeRepository.findAll();

        List<IdentificationTypeOutDto> identificationTypeOutDtoList = identificationTypeEntityList.stream()
                .map(MapperUtil::identificationTypeEntityToIdentificationTypeOutDto)
                .toList();

        log.info("End method findAllIdentificationTypeV1, identificationTypeOutDtoList -> {}", identificationTypeOutDtoList);

        return identificationTypeOutDtoList;
    }

    @Override
    public List<IdentificationTypeOutDto> findIdentificationTypeByCountry(Long countryId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findIdentificationTypeByCountryV1(countryId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<IdentificationTypeOutDto> findIdentificationTypeByCountryV1(Long countryId) {
        log.info("Start method findIdentificationTypeByCountryV1");

        List<IdentificationTypeEntity> identificationTypeEntityList = identificationTypeRepository.findIdentificationTypeByCountry(countryId);

        if(identificationTypeEntityList.isEmpty()){
            throw new ServiceException(ErrorCode.IDENTIFICATION_TYPE_NOT_FOUND_FOR_THE_COUNTRY, HttpStatus.NOT_FOUND);
        }
        List<IdentificationTypeOutDto> identificationTypeOutDtoList = identificationTypeEntityList.stream()
                .map(MapperUtil::identificationTypeEntityToIdentificationTypeOutDto)
                .toList();

        log.info("End method findIdentificationTypeByCountryV1, identificationTypeOutDtoList -> {}", identificationTypeOutDtoList);

        return identificationTypeOutDtoList;
    }

}

```

## src/main/java/com/nubo/masterparticipant/api/service/impl/ParticipantAccountServiceImpl.java

```java
package com.nubo.masterparticipant.api.service.impl;

import com.nubo.masterparticipant.api.application.properties.PropertiesConfig;
import com.nubo.masterparticipant.api.application.properties.PropertiesContext;
import com.nubo.masterparticipant.api.exception.ServiceException;
import com.nubo.masterparticipant.api.exception.error.ErrorCode;
import com.nubo.masterparticipant.api.helpers.MapperPageUtil;
import com.nubo.masterparticipant.api.helpers.MapperUtil;
import com.nubo.masterparticipant.api.models.dto.request.ParamsPageInDto;
import com.nubo.masterparticipant.api.models.dto.request.ParticipantAccountInDto;
import com.nubo.masterparticipant.api.models.dto.request.ParticipantAccountUpdateInDto;
import com.nubo.masterparticipant.api.models.dto.response.PageResponseOutDto;
import com.nubo.masterparticipant.api.models.dto.response.ParticipantAccountOutDto;
import com.nubo.masterparticipant.api.models.dto.response.ParticipantSuspendedHistoryOutDto;
import com.nubo.masterparticipant.api.models.entity.CountryEntity;
import com.nubo.masterparticipant.api.models.entity.DepositoryEntity;
import com.nubo.masterparticipant.api.models.entity.ParticipantAccountEntity;
import com.nubo.masterparticipant.api.models.entity.ParticipantEntity;
import com.nubo.masterparticipant.api.models.entity.ParticipantSuspendedHistoryEntity;
import com.nubo.masterparticipant.api.models.entity.StatusEntity;
import com.nubo.masterparticipant.api.models.entity.TradeEntity;
import com.nubo.masterparticipant.api.models.entity.TypeEntity;
import com.nubo.masterparticipant.api.models.enums.VersionApiEnum;
import com.nubo.masterparticipant.api.repository.CountryRepository;
import com.nubo.masterparticipant.api.repository.DepositoryRepository;
import com.nubo.masterparticipant.api.repository.ParticipantAccountRepository;
import com.nubo.masterparticipant.api.repository.ParticipantRepository;
import com.nubo.masterparticipant.api.repository.StatusRepository;
import com.nubo.masterparticipant.api.repository.TradeRepository;
import com.nubo.masterparticipant.api.repository.TypeRepository;
import com.nubo.masterparticipant.api.service.ParticipantAccountService;
import jakarta.persistence.criteria.JoinType;
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
public class ParticipantAccountServiceImpl implements ParticipantAccountService {

    private final ParticipantAccountRepository participantAccountRepository;
    private final ParticipantRepository participantRepository;
    private final StatusRepository statusRepository;
    private final TypeRepository typeRepository;
    private final CountryRepository countryRepository;
    private final DepositoryRepository depositoryRepository;
    private final TradeRepository tradeRepository;
    private final PropertiesConfig propertiesConfig;

    @Override
    public PageResponseOutDto<ParticipantAccountOutDto> findAllParticipantAccount(Pageable pageable,String depositId,
                                          Long accountTypeId,String accountNumber,Long currencyId, Long statusId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllParticipantAccountV1(pageable,depositId,accountTypeId,accountNumber,currencyId, statusId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<ParticipantAccountOutDto> findAllParticipantAccountV1(Pageable pageable,String depositId,
                                              Long accountTypeId,String accountNumber,Long currencyId, Long statusId) {
        log.info("Start method findAllParticipantAccountV1 with page: {} and size: {}", pageable.getPageNumber(),
                pageable.getPageSize());

        Specification<ParticipantAccountEntity> specification = (root, query, cb) -> {
            if (ParticipantAccountEntity.class.equals(query.getResultType())) {
                root.fetch("participant", JoinType.LEFT);
                root.fetch("status", JoinType.LEFT);
                root.fetch("originType", JoinType.LEFT);
                root.fetch("type", JoinType.LEFT);
                root.fetch("depository", JoinType.LEFT);
                root.fetch("country", JoinType.LEFT);
                query.distinct(true);
            }
            List<Predicate> predicates = new ArrayList<>();
            if (!ObjectUtils.isEmpty(statusId)) {
                predicates.add(cb.equal(root.get("status").get("id"), statusId));
            }
            if (!ObjectUtils.isEmpty(accountTypeId)) {
                predicates.add(cb.equal(root.get("type").get("id"), accountTypeId));
            }
            if (!ObjectUtils.isEmpty(accountNumber)) {
                predicates.add(cb.equal(root.get("accountNumber"), accountNumber));
            }
            return cb.and(predicates.toArray(new Predicate[0]));
        };

        Page<ParticipantAccountEntity> participantAccountEntityPage = participantAccountRepository.findAll(specification, pageable);

        List<ParticipantAccountOutDto> participantAccountOutDtoList = participantAccountEntityPage.getContent().stream()
                .map(MapperUtil::participantAccountEntityToParticipantAccountOutDto)
                .toList();

        log.debug("End method findAllParticipantAccountV1, number of participant Account found: {}", participantAccountOutDtoList.size());
        return MapperPageUtil.pageToPageResponseOutDto(participantAccountOutDtoList, participantAccountEntityPage);
    }

    @Override
    public ParticipantAccountOutDto findParticipantAccountById(Long participantAccountId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findParticipantAccountByIdV1(participantAccountId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private ParticipantAccountOutDto findParticipantAccountByIdV1(Long participantAccountId) {
        log.info("Start method findParticipantAccountByIdV1, participantAccountId -> {}", participantAccountId);

        ParticipantAccountEntity participantAccountEntity = validateParticipantAccount(participantAccountId);
        ParticipantAccountOutDto participantAccountOutDto = MapperUtil.participantAccountEntityToParticipantAccountOutDto(
                participantAccountEntity);

        log.info("End method findParticipantAccountByIdV1, participantAccount -> {}", participantAccountOutDto);
        return participantAccountOutDto;
    }

    @Override
    public PageResponseOutDto<ParticipantAccountOutDto> findParticipantAccount(ParamsPageInDto paramsPageInDto, Long participantId, String text) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findParticipantAccountV1(paramsPageInDto, participantId, text);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<ParticipantAccountOutDto> findParticipantAccountV1(ParamsPageInDto paramsPageInDto,
                                                                                  Long participantId, String text) {
        log.info("Start method findParticipantAccountV1, participantId -> {}", participantId);

        Specification<ParticipantAccountEntity> participantAccountEntitySpecification =
                ParticipantAccountEntitySpecification(participantId, text);

        PageResponseOutDto<ParticipantAccountOutDto> pageResponseOutDto;
        List<ParticipantAccountOutDto> participantAccountEntityOutDtoList = new ArrayList<>();
        if (paramsPageInDto.isAll()) {
            List<ParticipantAccountEntity> participantSuspendedHistoryEntityList =
                    participantAccountRepository.findAll(participantAccountEntitySpecification);

            participantSuspendedHistoryEntityList.forEach(participantAccountEntity ->
                    participantAccountEntityOutDtoList.add(
                            MapperUtil.participantAccountEntityToParticipantAccountOutDto(participantAccountEntity)));

            pageResponseOutDto = buildPageResponseParticipantAccount(participantAccountEntityOutDtoList,
                    0, participantAccountEntityOutDtoList.size(), participantAccountEntityOutDtoList.size());
        } else {
            Sort sortBy = paramsPageInDto.getOrder().equalsIgnoreCase(Sort.Direction.ASC.name())
                    ? Sort.by(Sort.Order.asc(paramsPageInDto.getSort()), Sort.Order.asc("id"))
                    : Sort.by(Sort.Order.desc(paramsPageInDto.getSort()), Sort.Order.desc("id"));
            Pageable pageable = PageRequest.of(paramsPageInDto.getPage(), paramsPageInDto.getSize(), sortBy);

            Page<ParticipantAccountEntity> participantAccountEntityPage =
                    participantAccountRepository.findAll(participantAccountEntitySpecification, pageable);

            participantAccountEntityPage.getContent().forEach(participantAccountEntity ->
                    participantAccountEntityOutDtoList.add(
                            MapperUtil.participantAccountEntityToParticipantAccountOutDto(participantAccountEntity)));

            pageResponseOutDto = buildPageResponseParticipantAccount(participantAccountEntityOutDtoList,
                    paramsPageInDto.getPage(), paramsPageInDto.getSize(), (int) participantAccountEntityPage.getTotalElements());
        }

        log.info("End method findParticipantAccountV1, pageResponseOutDto -> {}", pageResponseOutDto);

        return pageResponseOutDto;
    }

    @Override
    public List<ParticipantAccountOutDto> getParticipantAccountsByTrade(Long tradeId, Pageable pageable) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return getParticipantAccountsByTradeV1(tradeId, pageable);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<ParticipantAccountOutDto> getParticipantAccountsByTradeV1(Long tradeId, Pageable pageable) {
        log.info("Start method getParticipantAccountsByTradeV1, tradeId -> {}", tradeId);

        TradeEntity tradeEntity = validateTrade(tradeId);
        List<ParticipantAccountOutDto> participantAccounts = participantAccountRepository
                .findParticipantAccountsByTradeId(tradeEntity.getId(), pageable)
                .stream()
                .map(MapperUtil::participantAccountEntityToParticipantAccountOutDto)
                .toList();

        log.info("End method getParticipantAccountsByTradeV1, tradeId -> {}", participantAccounts);
        return participantAccounts;
    }

    @Override
    public ParticipantAccountOutDto createParticipantAccount(ParticipantAccountInDto participantAccountInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return createParticipantAccountV1(participantAccountInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private ParticipantAccountOutDto createParticipantAccountV1(ParticipantAccountInDto participantAccountInDto) {
        log.debug("Start method createParticipantAccountV1, participantAccount -> {}", participantAccountInDto);

        ParticipantAccountEntity participantAccountEntity = ParticipantAccountEntity.builder()
                .participant(validateParticipant(participantAccountInDto.getParticipantId()))
                .accountNumber(participantAccountInDto.getAccountNumber())
                .status(validateStatus(participantAccountInDto.getStatusId()))
                .originType(validateType(participantAccountInDto.getOriginTypeId()))
                .type(validateType(participantAccountInDto.getTypeId()))
                .depository(validateDepository(participantAccountInDto.getDepositoryId()))
                .country(validateCountry(participantAccountInDto.getCountryId()))
                .entityCode(participantAccountInDto.getEntityCode())
                .swiftCode(participantAccountInDto.getSwiftCode())
                .principal(participantAccountInDto.getPrincipal())
                .branchCode(participantAccountInDto.getBranchCode())
                .portfolio(participantAccountInDto.getPortfolio())
                .accountConcept(participantAccountInDto.getAccountConcept())
                .nitClearingEntity(participantAccountInDto.getNitClearingEntity())
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyIp(PropertiesContext.getClientIp())
                .lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyDate(PropertiesContext.getClientDatetime())
                .build();

        ParticipantAccountOutDto participantAccountOutDto = MapperUtil.participantAccountEntityToParticipantAccountOutDto(
                participantAccountRepository.save(participantAccountEntity));

        log.info("End method createParticipantAccountV1, participantAccount -> {}", participantAccountOutDto);

        return participantAccountOutDto;
    }

    @Override
    public ParticipantAccountOutDto updateParticipantAccount(Long participantAccountId,
                                                             ParticipantAccountUpdateInDto participantAccountUpdateInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return updateParticipantAccountV1(participantAccountId, participantAccountUpdateInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private ParticipantAccountOutDto updateParticipantAccountV1(Long participantAccountId,
                                                                ParticipantAccountUpdateInDto participantAccountUpdateInDto) {
        log.debug("Start method updateParticipantAccountV1, participantAccountId -> {}, participantAccount -> {}",
                participantAccountId, participantAccountUpdateInDto);

        ParticipantAccountEntity participantAccountEntityLast = validateParticipantAccount(participantAccountId);

        ParticipantAccountEntity participantAccountEntity = ParticipantAccountEntity.builder()
                .id(participantAccountEntityLast.getId())
                .participant(ObjectUtils.isEmpty(participantAccountUpdateInDto.getParticipantId()) ?
                        participantAccountEntityLast.getParticipant()
                        : validateParticipant(participantAccountUpdateInDto.getParticipantId()))
                .accountNumber(ObjectUtils.isEmpty(participantAccountUpdateInDto.getAccountNumber()) ?
                        participantAccountEntityLast.getAccountNumber() : participantAccountUpdateInDto.getAccountNumber())
                .status(ObjectUtils.isEmpty(participantAccountUpdateInDto.getStatusId()) ?
                        participantAccountEntityLast.getStatus() : validateStatus(participantAccountUpdateInDto.getStatusId()))
                .originType(ObjectUtils.isEmpty(participantAccountUpdateInDto.getOriginTypeId()) ?
                        participantAccountEntityLast.getOriginType() : validateType(participantAccountUpdateInDto.getOriginTypeId()))
                .type(ObjectUtils.isEmpty(participantAccountUpdateInDto.getTypeId()) ?
                        participantAccountEntityLast.getType() : validateType(participantAccountUpdateInDto.getTypeId()))
                .depository(ObjectUtils.isEmpty(participantAccountUpdateInDto.getDepositoryId()) ?
                        participantAccountEntityLast.getDepository()
                        : validateDepository(participantAccountUpdateInDto.getDepositoryId()))
                .country(ObjectUtils.isEmpty(participantAccountUpdateInDto.getCountryId()) ?
                        participantAccountEntityLast.getCountry() : validateCountry(participantAccountUpdateInDto.getCountryId()))
                .entityCode(ObjectUtils.isEmpty(participantAccountUpdateInDto.getEntityCode()) ?
                        participantAccountEntityLast.getEntityCode() : participantAccountUpdateInDto.getEntityCode())
                .swiftCode(ObjectUtils.isEmpty(participantAccountUpdateInDto.getSwiftCode()) ?
                        participantAccountEntityLast.getSwiftCode() : participantAccountUpdateInDto.getSwiftCode())
                .principal(ObjectUtils.isEmpty(participantAccountUpdateInDto.getPrincipal()) ?
                        participantAccountEntityLast.getPrincipal() : participantAccountUpdateInDto.getPrincipal())
                .branchCode(ObjectUtils.isEmpty(participantAccountUpdateInDto.getBranchCode()) ?
                        participantAccountEntityLast.getBranchCode() : participantAccountUpdateInDto.getBranchCode())
                .portfolio(ObjectUtils.isEmpty(participantAccountUpdateInDto.getPortfolio()) ?
                        participantAccountEntityLast.getPortfolio() : participantAccountUpdateInDto.getPortfolio())
                .accountConcept(ObjectUtils.isEmpty(participantAccountUpdateInDto.getAccountConcept()) ?
                        participantAccountEntityLast.getAccountConcept() : participantAccountUpdateInDto.getAccountConcept())
                .nitClearingEntity(ObjectUtils.isEmpty(participantAccountUpdateInDto.getNitClearingEntity()) ?
                        participantAccountEntityLast.getNitClearingEntity() : participantAccountUpdateInDto.getNitClearingEntity())
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyIp(PropertiesContext.getClientIp())
                .lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyDate(PropertiesContext.getClientDatetime())
                .build();

        ParticipantAccountOutDto participantAccountOutDto =
                MapperUtil.participantAccountEntityToParticipantAccountOutDto(
                        participantAccountRepository.save(participantAccountEntity));

        log.info("End method updateParticipantAccountV1, participantAccount -> {}", participantAccountOutDto);
        return participantAccountOutDto;
    }

    private Specification<ParticipantAccountEntity> ParticipantAccountEntitySpecification(Long participantId, String text) {
        return (root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();
            if (!ObjectUtils.isEmpty(participantId)) {
                predicates.add(criteriaBuilder.equal(root.get("participant").get("id"), participantId));
            }
            if (!ObjectUtils.isEmpty(text)) {
                String searchValue = "%" + text.trim().toLowerCase() + "%";
                Predicate accountNumber = criteriaBuilder.like(
                        criteriaBuilder.lower(root.get("accountNumber")), searchValue);
                predicates.add(criteriaBuilder.or(accountNumber));
            }
            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }

    private PageResponseOutDto<ParticipantAccountOutDto> buildPageResponseParticipantAccount(
            List<ParticipantAccountOutDto> content, int page, int size, int totalElements) {
        Page<ParticipantAccountOutDto> participantAccountPage = new PageImpl<>(content,
                PageRequest.of(page, size), totalElements);
        return MapperPageUtil.pageToPageResponseOutDto(content, participantAccountPage);
    }

    private ParticipantAccountEntity validateParticipantAccount(Long participantAccountId) {
        return participantAccountRepository.findById(participantAccountId)
                .orElseThrow(() -> new ServiceException(ErrorCode.PARTICIPANT_ACCOUNT_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private ParticipantEntity validateParticipant(Long participantId) {
        return participantRepository.findById(participantId)
                .orElseThrow(() -> new ServiceException(ErrorCode.PARTICIPANT_NOT_FOUND, HttpStatus.NOT_FOUND));
    }


    private TradeEntity validateTrade(Long tradeId) {
        return tradeRepository.findById(tradeId)
                .orElseThrow(() -> new ServiceException(ErrorCode.TRADE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private TypeEntity validateType(Long typeId) {
        return typeRepository.findById(typeId)
                .orElseThrow(() -> new ServiceException(ErrorCode.TYPE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private StatusEntity validateStatus(Long statusId) {
        return statusRepository.findById(statusId)
                .orElseThrow(() -> new ServiceException(ErrorCode.STATUS_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private CountryEntity validateCountry(Long countryId) {
        return countryRepository.findById(countryId)
                .orElseThrow(() -> new ServiceException(ErrorCode.COUNTRY_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private DepositoryEntity validateDepository(String id) {
        return depositoryRepository.findById(id)
                .orElseThrow(() -> new ServiceException(ErrorCode.DEPOSITORY_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

}

```

## src/main/java/com/nubo/masterparticipant/api/service/impl/ParticipantAssociatedAccountServiceImpl.java

```java
package com.nubo.masterparticipant.api.service.impl;

import com.nubo.masterparticipant.api.application.properties.PropertiesContext;
import com.nubo.masterparticipant.api.exception.ServiceException;
import com.nubo.masterparticipant.api.exception.error.ErrorCode;
import com.nubo.masterparticipant.api.helpers.MapperPageUtil;
import com.nubo.masterparticipant.api.helpers.MapperUtil;
import com.nubo.masterparticipant.api.models.dto.response.PageResponseOutDto;
import com.nubo.masterparticipant.api.models.dto.response.ParticipantAssociatedAccountOutDto;
import com.nubo.masterparticipant.api.models.dto.response.ParticipantBankAccountFilterOutDto;
import com.nubo.masterparticipant.api.models.entity.CurrencyEntity;
import com.nubo.masterparticipant.api.models.entity.ParticipantAccountEntity;
import com.nubo.masterparticipant.api.models.entity.ParticipantBankAccountEntity;
import com.nubo.masterparticipant.api.models.enums.AccountSourceEnum;
import com.nubo.masterparticipant.api.models.enums.VersionApiEnum;

import com.nubo.masterparticipant.api.repository.CurrencyRepository;
import com.nubo.masterparticipant.api.repository.ParticipantAccountRepository;
import com.nubo.masterparticipant.api.repository.ParticipantBankAccountRepository;
import com.nubo.masterparticipant.api.service.ParticipantAssociatedAccountService;
import jakarta.persistence.criteria.JoinType;
import jakarta.persistence.criteria.Predicate;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.*;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;
import org.springframework.util.StringUtils;

import java.util.ArrayList;

import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
@Slf4j
public class ParticipantAssociatedAccountServiceImpl implements ParticipantAssociatedAccountService {

    private final ParticipantAccountRepository participantAccountRepository;
    private final ParticipantBankAccountRepository participantBankAccountRepository;
    private final CurrencyRepository currencyRepository;


    private static final String PARTICIPANT = "participant";
    private static final String STATUS = "status";
    private static final String DEPOSITORY = "depository";
    private static final String COUNTRY = "country";
    private static final String CURRENCY = "currency";
    private static final String TYPE = "type";
    private static final String ORIGIN_TYPE = "originType";
    private static final String BANK = "bank";
    private static final String ACCOUNT_NUMBER = "accountNumber";
    private static final String BANK_ACCOUNT = "bankAccount";

    @Override
    public PageResponseOutDto<ParticipantAssociatedAccountOutDto> findAccountsAssociatedByParticipant(
            Long participantId,
            AccountSourceEnum source,
            int page,
            int size,
            String sort,
            String order,
            boolean all,
            String depositoryId,
            Long accountTypeId,
            String accountNumber,
            Long currencyId,
            String currencyName) {

        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAccountsAssociatedByParticipantV1(
                  participantId, source, page, size, sort, order, all, depositoryId, accountTypeId, accountNumber, currencyId, currencyName);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    @Transactional(readOnly = true)
    private PageResponseOutDto<ParticipantAssociatedAccountOutDto> findAccountsAssociatedByParticipantV1(
            Long participantId,
            AccountSourceEnum source,
            int page,
            int size,
            String sort,
            String order,
            boolean all,
            String depositoryId,
            Long accountTypeId,
            String accountNumber,
            Long currencyId,
            String currencyName) {

        log.info("Find associated accounts: participantId={}, source={}, depositoryId={}, accountTypeId={}," +
                        " accountNumber={}, currencyId={}, page={}, size={}",
                participantId, source, depositoryId, accountTypeId, accountNumber, currencyId,
                page, size);
        if (currencyId == null && currencyName != null && !currencyName.isBlank()) {
            currencyId = currencyRepository.findFirstByNameContainingIgnoreCase(currencyName)
                    .map(CurrencyEntity::getId)
                    .orElse(null);
        }

        Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
        Sort sortObj = Sort.by(direction, sort != null ? sort : "id");

        List<ParticipantAssociatedAccountOutDto> participantAssociatedAccountOutDtoList = new ArrayList<>();

        if (source == AccountSourceEnum.ALL || source == AccountSourceEnum.DEPOSITORY) {
            Specification<ParticipantAccountEntity> spec = participantAccountSpec(participantId, depositoryId, accountTypeId, accountNumber, currencyId);
            List<ParticipantAccountEntity> participantAccountEntityList = participantAccountRepository.findAll(spec, sortObj);

            participantAccountEntityList.forEach(participantAccountEntity ->
                    participantAssociatedAccountOutDtoList.add(
                            MapperUtil.participantAccountEntityToParticipantAssociatedAccountOutDto(participantAccountEntity)));
        }

        if (all) {
            return buildPageResponse(participantAssociatedAccountOutDtoList, 0, participantAssociatedAccountOutDtoList.size(), participantAssociatedAccountOutDtoList.size());
        } else {
            Pageable pageable = PageRequest.of(page, size);
            int start = (int) pageable.getOffset();
            int end = Math.min(start + pageable.getPageSize(), participantAssociatedAccountOutDtoList.size());
            List<ParticipantAssociatedAccountOutDto> pageSlice =
                    start >= participantAssociatedAccountOutDtoList.size() ? List.of()
                            : participantAssociatedAccountOutDtoList.subList(start, end);

            return buildPageResponse(pageSlice, page, size, participantAssociatedAccountOutDtoList.size());
        }
    }

    private PageResponseOutDto<ParticipantAssociatedAccountOutDto> buildPageResponse(
            List<ParticipantAssociatedAccountOutDto> content, int page, int size, int totalElements) {
        PageResponseOutDto<ParticipantAssociatedAccountOutDto> response = new PageResponseOutDto<>();
        response.setContent(content);
        response.setPageNumber(page);
        response.setPageSize(size);
        response.setTotalElements((long) totalElements);
        response.setTotalPages(size > 0 ? (int) Math.ceil((double) totalElements / size) : 1);
        return response;
    }


    private Specification<ParticipantAccountEntity> participantAccountSpec(
            Long participantId, String depositId, Long accountTypeId, String accountNumber, Long currencyId) {

        return (root, query, cb) -> {
            if (ParticipantAccountEntity.class.equals(query.getResultType())) {
                root.fetch(PARTICIPANT, JoinType.LEFT);
                root.fetch(STATUS, JoinType.LEFT);
                root.fetch(TYPE, JoinType.LEFT);
                root.fetch(ORIGIN_TYPE, JoinType.LEFT);
                root.fetch(DEPOSITORY, JoinType.LEFT);
                root.fetch(COUNTRY, JoinType.LEFT);
                root.fetch(CURRENCY, JoinType.LEFT);
                //var countryFetch = root.fetch(COUNTRY, JoinType.LEFT);
                //countryFetch.fetch(CURRENCY, JoinType.LEFT);
                query.distinct(true);
            }

            List<Predicate> p = new ArrayList<>();
            if (participantId != null)           p.add(cb.equal(root.get(PARTICIPANT).get("id"), participantId));
            if (!ObjectUtils.isEmpty(depositId)) p.add(cb.equal(root.get(DEPOSITORY).get("id"), depositId));
            if (accountTypeId != null)           p.add(cb.equal(root.get(TYPE).get("id"), accountTypeId));
            if (!ObjectUtils.isEmpty(accountNumber)) p.add(cb.equal(root.get(ACCOUNT_NUMBER), accountNumber));
            if (currencyId != null)              p.add(cb.equal(root.get(CURRENCY).get("id"), currencyId));
            return cb.and(p.toArray(new Predicate[0]));
        };
    }

    private Specification<ParticipantBankAccountEntity> participantBankAccountSpec(
            Long participantId, String depositId, Long accountTypeId, String accountNumber, Long currencyId) {

        return (root, query, cb) -> {
            if (ParticipantBankAccountEntity.class.equals(query.getResultType())) {
                root.fetch(PARTICIPANT, JoinType.LEFT);
                root.fetch(STATUS, JoinType.LEFT);
                root.fetch(TYPE, JoinType.LEFT);
                root.fetch(BANK, JoinType.LEFT);
                root.fetch(DEPOSITORY, JoinType.LEFT);
                root.fetch(COUNTRY, JoinType.LEFT);
                root.fetch(CURRENCY, JoinType.LEFT);
                //var countryFetch = root.fetch(COUNTRY, JoinType.LEFT);
                //countryFetch.fetch(CURRENCY, JoinType.LEFT);
                query.distinct(true);
            }

            List<Predicate> p = new ArrayList<>();
            if (participantId != null)           p.add(cb.equal(root.get(PARTICIPANT).get("id"), participantId));
            if (!ObjectUtils.isEmpty(depositId)) p.add(cb.equal(root.get(DEPOSITORY).get("id"), depositId));
            if (accountTypeId != null)           p.add(cb.equal(root.get(TYPE).get("id"), accountTypeId));
            if (!ObjectUtils.isEmpty(accountNumber)) p.add(cb.equal(root.get(BANK_ACCOUNT), accountNumber));
            if (currencyId != null)              p.add(cb.equal(root.get(CURRENCY).get("id"), currencyId));
            return cb.and(p.toArray(new Predicate[0]));
        };
    }



    @Override
    public PageResponseOutDto<ParticipantBankAccountFilterOutDto> searchParticipantBankAccounts(
            Long participantId, String account, Long typeId, Long statusId, int page, int size, String sort, String order, boolean all
    ) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return searchParticipantBankAccountsV1(participantId, account, typeId, statusId, page, size, sort, order, all);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<ParticipantBankAccountFilterOutDto> searchParticipantBankAccountsV1(
            Long participantId, String account, Long typeId, Long statusId, int pageNum, int size, String sort, String order, boolean all
    ) {
        log.info("Start findBankAccountsForFilterV1: participantId={}, account='{}', typeId={}, statusId={}, page={}, size={}",
                participantId, account, typeId, statusId, pageNum, size);

        String accountParam = normalize(account);
        
        Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
        Sort sortObj = Sort.by(direction, sort != null ? sort : "id");

        if (all) {
            Pageable pageable = PageRequest.of(0, Integer.MAX_VALUE, sortObj);
            Page<ParticipantBankAccountFilterOutDto> pageResult =
                    participantAccountRepository.findBankAccountsForFilter(
                            participantId, accountParam, typeId, statusId, pageable
                    );
            log.info("End All findBankAccountsForFilterV1: found={}", pageResult.getContent().size());
            return buildBankPageResponse(pageResult.getContent(), 0, pageResult.getContent().size(), (int) pageResult.getTotalElements());
        } else {
            Pageable pageable = PageRequest.of(pageNum, size, sortObj);
            Page<ParticipantBankAccountFilterOutDto> pageResult =
                    participantAccountRepository.findBankAccountsForFilter(
                            participantId, accountParam, typeId, statusId, pageable
                    );
            log.info("End findBankAccountsForFilterV1: found={}", pageResult.getContent().size());
            return MapperPageUtil.pageToPageResponseOutDto(pageResult.getContent(), pageResult);
        }
    }

    private PageResponseOutDto<ParticipantBankAccountFilterOutDto> buildBankPageResponse(
            List<ParticipantBankAccountFilterOutDto> content, int page, int size, int totalElements) {
        PageResponseOutDto<ParticipantBankAccountFilterOutDto> response = new PageResponseOutDto<>();
        response.setContent(content);
        response.setPageNumber(page);
        response.setPageSize(size);
        response.setTotalElements((long) totalElements);
        response.setTotalPages(size > 0 ? (int) Math.ceil((double) totalElements / size) : 1);
        return response;
    }


    private String normalize(String value) {
        if (!StringUtils.hasText(value)) return null;
        return "%" + value.trim().toLowerCase() + "%";
    }

}

```

## src/main/java/com/nubo/masterparticipant/api/service/impl/ParticipantAuthorizationServiceImpl.java

```java
package com.nubo.masterparticipant.api.service.impl;
import com.nubo.masterparticipant.api.application.properties.PropertiesContext;
import com.nubo.masterparticipant.api.exception.ServiceException;
import com.nubo.masterparticipant.api.exception.error.ErrorCode;
import com.nubo.masterparticipant.api.helpers.MapperPageUtil;
import com.nubo.masterparticipant.api.helpers.MapperUtil;
import com.nubo.masterparticipant.api.models.dto.response.PageResponseOutDto;
import com.nubo.masterparticipant.api.models.dto.response.ParticipantAuthorizationOutDto;
import com.nubo.masterparticipant.api.models.entity.ParticipantAuthorizationEntity;
import com.nubo.masterparticipant.api.models.enums.VersionApiEnum;
import com.nubo.masterparticipant.api.repository.ParticipantAuthorizationRepository;
import com.nubo.masterparticipant.api.service.ParticipantAuthorizationService;
import jakarta.persistence.criteria.JoinType;
import jakarta.persistence.criteria.Predicate;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
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
public class ParticipantAuthorizationServiceImpl implements ParticipantAuthorizationService {

    private final ParticipantAuthorizationRepository participantAuthorizationRepository;

    @Override
    public PageResponseOutDto<ParticipantAuthorizationOutDto> findAllParticipantAuthorization(
            int page,
            int size,
            String sort,
            String order,
            boolean all,
            Long participantId,
            Long authorizedParticipantId,
            Long typeId
    ){
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllParticipantAuthorizationV1(
                    page, size, sort, order, all, participantId, authorizedParticipantId, typeId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<ParticipantAuthorizationOutDto> findAllParticipantAuthorizationV1(
            int page,
            int size,
            String sort,
            String order,
            boolean all,
            Long participantId,
            Long authorizedParticipantId,
            Long typeId
    ){
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) != VersionApiEnum.V1) {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }

        log.info("findAll ParticipantAuthorization: participantId={}, authorizedParticipantId={}, typeId={}, page={}, size={}",
                participantId, authorizedParticipantId, typeId, page, size);

        Specification<ParticipantAuthorizationEntity> spec = (root, query, cb) -> {
            if (ParticipantAuthorizationEntity.class.equals(query.getResultType())) {
                root.fetch("participant", JoinType.LEFT);
                root.fetch("authorizedParticipant", JoinType.LEFT);
                root.fetch("type", JoinType.LEFT);
                query.distinct(true);
            }
            List<Predicate> predicates = new ArrayList<>();
            if (!ObjectUtils.isEmpty(participantId)) {
                predicates.add(cb.equal(root.get("participant").get("id"), participantId));
            }
            if (!ObjectUtils.isEmpty(authorizedParticipantId)) {
                predicates.add(cb.equal(root.get("authorizedParticipant").get("id"), authorizedParticipantId));
            }
            if (!ObjectUtils.isEmpty(typeId)) {
                predicates.add(cb.equal(root.get("type").get("id"), typeId));
            }
            return cb.and(predicates.toArray(new Predicate[0]));
        };

        Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
        Sort sortObj = Sort.by(direction, sort != null ? sort : "participant");

        if (all) {
            List<ParticipantAuthorizationEntity> allResults = participantAuthorizationRepository.findAll(spec, sortObj);
            var content = allResults.stream()
                    .map(MapperUtil::participantAuthorizationEntityToParticipantAuthorizationOutDto)
                    .toList();
            return buildPageResponse(content, 0, allResults.size(), allResults.size());
        } else {
            Pageable pageable = PageRequest.of(page, size, sortObj);
            Page<ParticipantAuthorizationEntity> pageResult = participantAuthorizationRepository.findAll(spec, pageable);
            var content = pageResult.getContent().stream()
                    .map(MapperUtil::participantAuthorizationEntityToParticipantAuthorizationOutDto)
                    .toList();
            return MapperPageUtil.pageToPageResponseOutDto(content, pageResult);
        }
    }

    private PageResponseOutDto<ParticipantAuthorizationOutDto> buildPageResponse(
            List<ParticipantAuthorizationOutDto> content, int page, int size, int totalElements) {
        PageResponseOutDto<ParticipantAuthorizationOutDto> response = new PageResponseOutDto<>();
        response.setContent(content);
        response.setPageNumber(page);
        response.setPageSize(size);
        response.setTotalElements((long) totalElements);
        response.setTotalPages(size > 0 ? (int) Math.ceil((double) totalElements / size) : 1);
        return response;
    }
}

```

## src/main/java/com/nubo/masterparticipant/api/service/impl/ParticipantBankAccountServiceImpl.java

```java
package com.nubo.masterparticipant.api.service.impl;

import com.nubo.masterparticipant.api.application.properties.PropertiesContext;
import com.nubo.masterparticipant.api.exception.ServiceException;
import com.nubo.masterparticipant.api.exception.error.ErrorCode;
import com.nubo.masterparticipant.api.helpers.MapperPageUtil;
import com.nubo.masterparticipant.api.helpers.MapperUtil;
import com.nubo.masterparticipant.api.models.dto.response.PageResponseOutDto;
import com.nubo.masterparticipant.api.models.dto.response.ParticipantBankAccountOutDto;
import com.nubo.masterparticipant.api.models.entity.ParticipantBankAccountEntity;
import com.nubo.masterparticipant.api.models.enums.VersionApiEnum;
import com.nubo.masterparticipant.api.repository.ParticipantBankAccountRepository;
import com.nubo.masterparticipant.api.service.ParticipantBankAccountService;
import jakarta.persistence.criteria.JoinType;
import jakarta.persistence.criteria.Predicate;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
@Slf4j
public class ParticipantBankAccountServiceImpl implements ParticipantBankAccountService {

    private final ParticipantBankAccountRepository participantBankAccountRepository;

    @Override
    public PageResponseOutDto<ParticipantBankAccountOutDto> findAllParticipantBankAccount(Pageable pageable,
                                                                                          Long bankId, Long typeId, String bankAccount, Long countryId,
                                                                                          Long statusId, Boolean principal) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllParticipantBankAccountV1(pageable, bankId, typeId, bankAccount, countryId, statusId, principal);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    @Transactional(readOnly = true)
    private PageResponseOutDto<ParticipantBankAccountOutDto> findAllParticipantBankAccountV1(Pageable pageable,
                                                                                             Long bankId,
                                                                                             Long typeId,
                                                                                             String bankAccount,
                                                                                             Long countryId,
                                                                                             Long statusId,
                                                                                             Boolean principal) {
        log.info("Start method findAllParticipantBankAccountV1 with page: {} and size: {}", pageable.getPageNumber(), pageable.getPageSize());


        Specification<ParticipantBankAccountEntity> spec = (root, query, cb) -> {
            if (ParticipantBankAccountEntity.class.equals(query.getResultType())) {
                root.fetch("participant", JoinType.LEFT);
                root.fetch("status", JoinType.LEFT);
                root.fetch("type", JoinType.LEFT);
                root.fetch("bank", JoinType.LEFT);
                root.fetch("country", JoinType.LEFT);
                query.distinct(true);
            }
            List<Predicate> predicates = new ArrayList<>();
            if (!ObjectUtils.isEmpty(bankId)) predicates.add(cb.equal(root.get("bank").get("id"), bankId));
            if (!ObjectUtils.isEmpty(typeId)) predicates.add(cb.equal(root.get("type").get("id"), typeId));
            if (!ObjectUtils.isEmpty(bankAccount)) predicates.add(cb.equal(root.get("bankAccount"), bankAccount));
            if (!ObjectUtils.isEmpty(countryId)) predicates.add(cb.equal(root.get("country").get("id"), countryId));
            if (!ObjectUtils.isEmpty(statusId)) predicates.add(cb.equal(root.get("status").get("id"), statusId));
            if (!ObjectUtils.isEmpty(principal)) predicates.add(cb.equal(root.get("principal"), principal));
            return cb.and(predicates.toArray(new Predicate[0]));
        };


        Page<ParticipantBankAccountEntity> page = participantBankAccountRepository.findAll(spec, pageable);

        List<ParticipantBankAccountOutDto> participantBankAccountOutDtoList = page.getContent().stream()
                .map(MapperUtil::participantBankAccountEntityToOutDto)
                .toList();

        log.debug("End method findAllParticipantBankAccountV1, number of bank accounts found: {}",
                participantBankAccountOutDtoList.size());
        return MapperPageUtil.pageToPageResponseOutDto(participantBankAccountOutDtoList, page);
    }

    @Override
    @Transactional(readOnly = true)
    public ParticipantBankAccountOutDto findParticipantBankAccountById(Long id) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findParticipantBankAccountByIdV1(id);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    @Transactional(readOnly = true)
    private ParticipantBankAccountOutDto findParticipantBankAccountByIdV1(Long id) {
        log.info("Start method findParticipantBankAccountByIdV1, id -> {}", id);
        ParticipantBankAccountEntity participantBankAccountEntity = validateParticipantBankAccount(id);
        ParticipantBankAccountOutDto participantBankAccountOutDto =
                MapperUtil.participantBankAccountEntityToOutDto(participantBankAccountEntity);
        log.info("End method findParticipantBankAccountByIdV1, out -> {}", participantBankAccountOutDto);
        return participantBankAccountOutDto;
    }

    private ParticipantBankAccountEntity validateParticipantBankAccount(Long id) {
        return participantBankAccountRepository.findById(id)
                .orElseThrow(() -> new ServiceException(ErrorCode.PARTICIPANT_BANK_ACCOUNT_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

}

```

## src/main/java/com/nubo/masterparticipant/api/service/impl/ParticipantEquivalenceServiceImpl.java

```java
package com.nubo.masterparticipant.api.service.impl;

import com.nubo.masterparticipant.api.application.properties.PropertiesContext;
import com.nubo.masterparticipant.api.exception.ServiceException;
import com.nubo.masterparticipant.api.exception.error.ErrorCode;
import com.nubo.masterparticipant.api.helpers.MapperUtil;
import com.nubo.masterparticipant.api.models.dto.response.DirectDepositorOutDto;
import com.nubo.masterparticipant.api.models.entity.DirectDepositoryEntity;
import com.nubo.masterparticipant.api.models.enums.VersionApiEnum;
import com.nubo.masterparticipant.api.repository.DirectDepositoryRepository;
import com.nubo.masterparticipant.api.service.ParticipantEquivalenceService;
import jakarta.persistence.criteria.Predicate;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
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
public class ParticipantEquivalenceServiceImpl implements ParticipantEquivalenceService {

    private final DirectDepositoryRepository directDepositoryRepository;

    @Override
    public DirectDepositorOutDto findParticipantEquivalence(Long participantId, String participantCode) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findParticipantEquivalenceV1(participantId, participantCode);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private DirectDepositorOutDto findParticipantEquivalenceV1(Long participantId, String participantCode) {
        log.debug("Start method findParticipantEquivalenceV1");

        if(ObjectUtils.isEmpty(participantId) && ObjectUtils.isEmpty(participantCode)) {
            throw new ServiceException(ErrorCode.PARTICIPANT_FILTER_IS_REQUIRED, HttpStatus.BAD_REQUEST);
        }

        List<DirectDepositoryEntity> directDepositoryEntityList = directDepositoryRepository.findAll(
                directDepositorySpecification(participantId, participantCode, null));

        DirectDepositorOutDto directDepositorOutDto = DirectDepositorOutDto.builder().build();
        if (!directDepositoryEntityList.isEmpty()) {
            directDepositorOutDto = MapperUtil.directDepositoryEntityToDirectDepositorOutDto(directDepositoryEntityList.stream().findFirst().get());
        }

        log.info("End method findParticipantEquivalenceV1 directDepositorOutDto {}", directDepositorOutDto);

        return directDepositorOutDto;
    }

    @Override
    public List<DirectDepositorOutDto> findParticipantEquivalences(Long participantId, String participantCode, Long depositoryId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findParticipantEquivalencesV1(participantId, participantCode, depositoryId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<DirectDepositorOutDto> findParticipantEquivalencesV1(Long participantId, String participantCode, Long depositoryId) {
        log.debug("Start method findParticipantEquivalencesV1");

        if(ObjectUtils.isEmpty(participantId) && ObjectUtils.isEmpty(participantCode)) {
            throw new ServiceException(ErrorCode.PARTICIPANT_FILTER_IS_REQUIRED, HttpStatus.BAD_REQUEST);
        }

        List<DirectDepositoryEntity> directDepositoryEntityList = directDepositoryRepository.findAll(
                directDepositorySpecification(participantId, participantCode, depositoryId));

        List<DirectDepositorOutDto> directDepositorOutDtoList = new ArrayList<>();
        if (!directDepositoryEntityList.isEmpty()) {
            directDepositorOutDtoList =
                    directDepositoryEntityList.stream()
                            .map(MapperUtil::directDepositoryEntityToDirectDepositorOutDto)
                            .toList(); // Java 16+
        }

        log.info("End method findParticipantEquivalencesV1 directDepositorOutDto {}", directDepositorOutDtoList);

        return directDepositorOutDtoList;
    }

    private Specification<DirectDepositoryEntity> directDepositorySpecification(Long participantId, String participantCode, Long depositoryId) {
        return (root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();
            if (!ObjectUtils.isEmpty(participantId)) {
                predicates.add(criteriaBuilder.equal(root.get("participant").get("id"), participantId));
            }
            if (!ObjectUtils.isEmpty(participantCode)) {
                predicates.add(criteriaBuilder.equal(root.get("participant").get("code"), participantCode));
            }
            if (!ObjectUtils.isEmpty(depositoryId)) {
                predicates.add(criteriaBuilder.equal(root.get("depository").get("id"), depositoryId));
            }
            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }

}

```

## src/main/java/com/nubo/masterparticipant/api/service/impl/ParticipantInvestorServiceImpl.java

```java
package com.nubo.masterparticipant.api.service.impl;

import com.nubo.masterparticipant.api.application.properties.PropertiesConfig;
import com.nubo.masterparticipant.api.application.properties.PropertiesContext;
import com.nubo.masterparticipant.api.exception.ServiceException;
import com.nubo.masterparticipant.api.exception.error.ErrorCode;
import com.nubo.masterparticipant.api.helpers.MapperPageUtil;
import com.nubo.masterparticipant.api.helpers.MapperUtil;
import com.nubo.masterparticipant.api.models.dto.request.ParticipantInvestorInDto;
import com.nubo.masterparticipant.api.models.dto.response.PageResponseOutDto;
import com.nubo.masterparticipant.api.models.dto.response.ParticipantInvestorOutDto;
import com.nubo.masterparticipant.api.models.entity.InvestorEntity;
import com.nubo.masterparticipant.api.models.entity.ParticipantEntity;
import com.nubo.masterparticipant.api.models.entity.ParticipantInvestorEntity;
import com.nubo.masterparticipant.api.models.entity.ParticipantInvestorKey;
import com.nubo.masterparticipant.api.models.enums.VersionApiEnum;
import com.nubo.masterparticipant.api.repository.InvestorRepository;
import com.nubo.masterparticipant.api.repository.ParticipantInvestorRepository;
import com.nubo.masterparticipant.api.repository.ParticipantRepository;
import com.nubo.masterparticipant.api.service.ParticipantInvestorService;
import jakarta.persistence.criteria.Predicate;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
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
public class ParticipantInvestorServiceImpl implements ParticipantInvestorService {

    private final ParticipantInvestorRepository participantInvestorRepository;
    private final ParticipantRepository participantRepository;
    private final InvestorRepository investorRepository;
    private final PropertiesConfig propertiesConfig;

    @Override
    public PageResponseOutDto<ParticipantInvestorOutDto> findAllParticipantInvestor(
            int page, int size, String sort, String order, boolean all, Long participantId, Long investorId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllParticipantInvestorV1(page, size, sort, order, all, participantId, investorId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<ParticipantInvestorOutDto> findAllParticipantInvestorV1(
            int page, int size, String sort, String order, boolean all, Long participantId, Long investorId) {
        log.info("Start method findAllParticipantInvestorV1 with page: {} and size: {}", page, size);

        Specification<ParticipantInvestorEntity> specification = (root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();
            if (!ObjectUtils.isEmpty(participantId)) {
                predicates.add(criteriaBuilder.equal(root.get("participant").get("id"), participantId));
            }
            if (!ObjectUtils.isEmpty(investorId)) {
                predicates.add(criteriaBuilder.equal(root.get("investor").get("id"), investorId));
            }
            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };

        Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
        Sort sortObj = Sort.by(direction, sort != null ? sort : "participant");

        if (all) {
            List<ParticipantInvestorEntity> allResults = participantInvestorRepository.findAll(specification, sortObj);
            List<ParticipantInvestorOutDto> content = allResults.stream()
                    .map(MapperUtil::participantInvestorEntityToParticipantInvestorOutDto)
                    .toList();
            return buildPageResponse(content, 0, allResults.size(), allResults.size());
        } else {
            Pageable pageable = PageRequest.of(page, size, sortObj);
            Page<ParticipantInvestorEntity> pageResult = participantInvestorRepository.findAll(specification, pageable);
            List<ParticipantInvestorOutDto> content = pageResult.getContent().stream()
                    .map(MapperUtil::participantInvestorEntityToParticipantInvestorOutDto)
                    .toList();
            return MapperPageUtil.pageToPageResponseOutDto(content, pageResult);
        }
    }

    private PageResponseOutDto<ParticipantInvestorOutDto> buildPageResponse(
            List<ParticipantInvestorOutDto> content, int page, int size, int totalElements) {
        PageResponseOutDto<ParticipantInvestorOutDto> response = new PageResponseOutDto<>();
        response.setContent(content);
        response.setPageNumber(page);
        response.setPageSize(size);
        response.setTotalElements((long) totalElements);
        response.setTotalPages(size > 0 ? (int) Math.ceil((double) totalElements / size) : 1);
        return response;
    }

    @Override
    public ParticipantInvestorOutDto createParticipantInvestor(ParticipantInvestorInDto participantInvestorInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return createParticipantInvestorV1(participantInvestorInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private ParticipantInvestorOutDto createParticipantInvestorV1(ParticipantInvestorInDto participantInvestorInDto) {
        log.debug("Start method createParticipantInvestorV1, participantInvestor -> {}", participantInvestorInDto);

        ParticipantEntity participantEntity = participantRepository.findById(participantInvestorInDto.getParticipantId())
                .orElseThrow(() -> new ServiceException(ErrorCode.PARTICIPANT_NOT_FOUND, HttpStatus.NOT_FOUND));

        InvestorEntity investorEntity = investorRepository.findById(participantInvestorInDto.getInvestorId())
                .orElseThrow(() -> new ServiceException(ErrorCode.INVESTOR_NOT_FOUND, HttpStatus.NOT_FOUND));

        ParticipantInvestorKey key = ParticipantInvestorKey.builder()
                .investor(participantInvestorInDto.getInvestorId())
                .participant(participantInvestorInDto.getParticipantId())
                .build();
        if (participantInvestorRepository.findById(key).isPresent()) {
            throw new ServiceException(ErrorCode.PARTICIPANT_INVESTOR_EXISTS, HttpStatus.BAD_REQUEST);
        }

        ParticipantInvestorEntity participantInvestorEntity = ParticipantInvestorEntity.builder()
                .participant(participantEntity)
                .investor(investorEntity)
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyIp(PropertiesContext.getClientIp())
                .lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyDate(PropertiesContext.getClientDatetime())
                .build();

        ParticipantInvestorOutDto participantInvestorOutDto = MapperUtil.participantInvestorEntityToParticipantInvestorOutDto(
                participantInvestorRepository.save(participantInvestorEntity));

        log.info("End method createParticipantInvestorV1, participantInvestor -> {}", participantInvestorOutDto);
        return participantInvestorOutDto;
    }

}

```

## src/main/java/com/nubo/masterparticipant/api/service/impl/ParticipantLoanServiceImpl.java

```java
package com.nubo.masterparticipant.api.service.impl;

import com.nubo.masterparticipant.api.exception.ServiceException;
import com.nubo.masterparticipant.api.exception.error.ErrorCode;
import com.nubo.masterparticipant.api.helpers.MapperParticipantLoan;
import com.nubo.masterparticipant.api.models.dto.response.PageResponseOutDto;
import com.nubo.masterparticipant.api.models.dto.response.ParticipantLoanOutDto;
import com.nubo.masterparticipant.api.models.entity.CountryEntity;
import com.nubo.masterparticipant.api.repository.CountryRepository;
import com.nubo.masterparticipant.api.repository.ParticipantLoanRepository;
import com.nubo.masterparticipant.api.service.ParticipantLoanService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ParticipantLoanServiceImpl implements ParticipantLoanService {

    private final ParticipantLoanRepository repository;
    private final MapperParticipantLoan mapper;
    private final CountryRepository countryRepository;

    @Override
    public ParticipantLoanOutDto getById(Long id, Long[] types, String countryCode) {
        CountryEntity country = findCountryEntity(countryCode);
        Long countryId = country == null ? null : country.getId();
        List<Object[]> rows;
        if (types == null || types.length == 0) {
            rows = repository.findLoanById(id, countryId);
        } else {
            rows = repository.findLoanByIdAndTypes(id, java.util.Arrays.asList(types), countryId);
        }
        if (rows.isEmpty()) {
            throw new EntityNotFoundException("Participant not found with id " + id);
        }
        return mapper.toDto(rows.get(0));
    }

    @Override
    public ParticipantLoanOutDto getByCode(String code, Long[] types, String countryCode) {
        CountryEntity country = findCountryEntity(countryCode);
        Long countryId = country == null ? null : country.getId();
        List<Object[]> rows;
        if (types == null || types.length == 0) {
            rows = repository.findLoanByCode(code, countryId);
        } else {
            rows = repository.findLoanByCodeAndTypes(code, java.util.Arrays.asList(types), countryId);
        }
        if (rows.isEmpty()) {
            throw new EntityNotFoundException("Participant not found with code " + code);
        }
        return mapper.toDto(rows.get(0));
    }

    @Override
    public List<ParticipantLoanOutDto> getByCodePrefix(String prefix, Long[] types, String countryCode) {
        CountryEntity country = findCountryEntity(countryCode);
        Long countryId = country == null ? null : country.getId();
        List<Object[]> rows;
        if (types == null || types.length == 0) {
            rows = repository.findByCodePrefix(prefix, countryId);
        } else {
            rows = repository.findByCodePrefixAndTypes(prefix, java.util.Arrays.asList(types), countryId);
        }
        return rows.stream().map(mapper::toDto).toList();
    }

    @Override
    public List<ParticipantLoanOutDto> getByShortnamePrefix(String prefix, Long[] types, String countryCode) {
        CountryEntity country = findCountryEntity(countryCode);
        Long countryId = country == null ? null : country.getId();
        List<Object[]> rows;
        if (types == null || types.length == 0) {
            rows = repository.findByShortnamePrefix(prefix, countryId);
        } else {
            rows = repository.findByShortnamePrefixAndTypes(prefix, java.util.Arrays.asList(types), countryId);
        }
        return rows.stream().map(mapper::toDto).toList();
    }

    @Override
    public PageResponseOutDto<ParticipantLoanOutDto> getAll(Pageable pageable, Long[] types, String countryCode) {

        int offset = pageable.getPageNumber() * pageable.getPageSize();

        CountryEntity country = findCountryEntity(countryCode);
        Long countryId = country == null ? null : country.getId();

        List<Object[]> rows;
        long total;
        if (types == null || types.length == 0) {
            rows = repository.findAllLoanParticipants(pageable.getPageSize(), offset, countryId);
            total = repository.countLoanParticipants(countryId);
        } else {
            java.util.List<Long> typesList = java.util.Arrays.asList(types);
            rows = repository.findAllLoanParticipantsAndTypes(pageable.getPageSize(), offset, typesList, countryId);
            total = repository.countLoanParticipantsByTypes(typesList, countryId);
        }

        List<ParticipantLoanOutDto> content = rows.stream().map(mapper::toDto).toList();

        return new PageResponseOutDto<>(
                content,
                pageable.getPageSize(),
                pageable.getPageNumber(),
                total,
                (int) Math.ceil((double) total / pageable.getPageSize())
        );
    }

    private CountryEntity findCountryEntity(String countryCode) {
        if (countryCode == null)
            return null;
        return countryRepository.findByCode(countryCode)
                .orElseThrow(() -> new ServiceException(ErrorCode.COUNTRY_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

}

```

## src/main/java/com/nubo/masterparticipant/api/service/impl/ParticipantServiceImpl.java

```java
package com.nubo.masterparticipant.api.service.impl;

import com.nubo.masterparticipant.api.application.properties.PropertiesConfig;
import com.nubo.masterparticipant.api.application.properties.PropertiesContext;
import com.nubo.masterparticipant.api.exception.ServiceException;
import com.nubo.masterparticipant.api.exception.error.ErrorCode;
import com.nubo.masterparticipant.api.helpers.MapperPageUtil;
import com.nubo.masterparticipant.api.helpers.MapperUtil;
import com.nubo.masterparticipant.api.models.dto.request.ParticipantDetailUpdateInDto;
import com.nubo.masterparticipant.api.models.dto.request.ParticipantInDto;
import com.nubo.masterparticipant.api.models.dto.request.ParticipantUpdateInDto;
import com.nubo.masterparticipant.api.models.dto.response.PageResponseOutDto;
import com.nubo.masterparticipant.api.models.dto.response.ParticipantFilterOutDto;
import com.nubo.masterparticipant.api.models.dto.response.ParticipantOutDto;
import com.nubo.masterparticipant.api.models.entity.CityEntity;
import com.nubo.masterparticipant.api.models.entity.CountryEntity;
import com.nubo.masterparticipant.api.models.entity.DepartmentEntity;
import com.nubo.masterparticipant.api.models.entity.EnterpriseGroupEntity;
import com.nubo.masterparticipant.api.models.entity.IdentificationTypeEntity;
import com.nubo.masterparticipant.api.models.entity.ParticipantAccountEntity;
import com.nubo.masterparticipant.api.models.entity.ParticipantEntity;
import com.nubo.masterparticipant.api.models.entity.StatusEntity;
import com.nubo.masterparticipant.api.models.entity.SystemEntity;
import com.nubo.masterparticipant.api.models.entity.TaxStatusEntity;
import com.nubo.masterparticipant.api.models.entity.TradeEntity;
import com.nubo.masterparticipant.api.models.entity.TypeEntity;
import com.nubo.masterparticipant.api.models.entity.UserNuboEntity;
import com.nubo.masterparticipant.api.models.enums.DirectAllocationEnum;
import com.nubo.masterparticipant.api.models.enums.ParticipantStatusEnum;
import com.nubo.masterparticipant.api.models.enums.UserTypeEnum;
import com.nubo.masterparticipant.api.models.enums.VersionApiEnum;
import com.nubo.masterparticipant.api.repository.CityRepository;
import com.nubo.masterparticipant.api.repository.CountryRepository;
import com.nubo.masterparticipant.api.repository.DepartmentRepository;
import com.nubo.masterparticipant.api.repository.EnterpriseGroupRepository;
import com.nubo.masterparticipant.api.repository.IdentificationTypeRepository;
import com.nubo.masterparticipant.api.repository.ParticipantAccountRepository;
import com.nubo.masterparticipant.api.repository.ParticipantRepository;
import com.nubo.masterparticipant.api.repository.StatusRepository;
import com.nubo.masterparticipant.api.repository.SystemRepository;
import com.nubo.masterparticipant.api.repository.TaxStatusRepository;
import com.nubo.masterparticipant.api.repository.TradeRepository;
import com.nubo.masterparticipant.api.repository.TypeRepository;
import com.nubo.masterparticipant.api.repository.UserNuboRepository;
import com.nubo.masterparticipant.api.service.ParticipantService;
import jakarta.persistence.criteria.JoinType;
import jakarta.persistence.criteria.Predicate;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
@Slf4j
public class ParticipantServiceImpl implements ParticipantService {

    private final ParticipantRepository participantRepository;
    private final ParticipantAccountRepository participantAccountRepository;
    private final CountryRepository countryRepository;
    private final TradeRepository tradeRepository;
    private final TypeRepository typeRepository;
    private final DepartmentRepository departmentRepository;
    private final StatusRepository statusRepository;
    private final IdentificationTypeRepository identificationTypeRepository;
    private final TaxStatusRepository taxStatusRepository;
    private final CityRepository cityRepository;
    private final EnterpriseGroupRepository enterpriseGroupRepository;
    private final SystemRepository systemRepository;
    private final UserNuboRepository userNuboRepository;
    private final PropertiesConfig propertiesConfig;

    @Override
    public PageResponseOutDto<ParticipantOutDto> findAllParticipant(
            int page, int size, String sort, String order, boolean all,
            String code, String name, String documentNumber, Long typeId, Long statusId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllParticipantV1(page, size, sort, order, all, code, name, documentNumber, typeId, statusId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    @Transactional(readOnly = true)
    private PageResponseOutDto<ParticipantOutDto> findAllParticipantV1(
            int page, int size, String sort, String order, boolean all,
            String code, String name, String documentNumber, Long typeId, Long statusId) {
        log.info("Start method findAllParticipantV1 with page: {} and size: {}", page, size);

        UserNuboEntity user = getUserNuboEntity();

        Specification<ParticipantEntity> spec = Specification.allOf(
                baseFetchSpec(),
                filtersSpec(code, name, documentNumber, typeId, statusId),
                authListSpec(user, statusId)
        );

        Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
        Sort sortObj = Sort.by(direction, sort != null ? sort : "id");

        if (all) {
            List<ParticipantEntity> allResults = participantRepository.findAll(spec, sortObj);
            List<ParticipantOutDto> participantOutDtoList = allResults.stream()
                    .map(MapperUtil::participantEntityToParticipantOutDto)
                    .toList();
            return buildPageResponse(participantOutDtoList, 0, allResults.size(), allResults.size());
        } else {
            Pageable pageable = PageRequest.of(page, size, sortObj);
            Page<ParticipantEntity> participantPage = participantRepository.findAll(spec, pageable);
            List<ParticipantOutDto> participantOutDtoList = participantPage.getContent().stream()
                    .map(MapperUtil::participantEntityToParticipantOutDto)
                    .toList();
            log.info("End method findAllParticipantV1, number of participant found: {}", participantOutDtoList.size());
            return MapperPageUtil.pageToPageResponseOutDto(participantOutDtoList, participantPage);
        }
    }

    private UserNuboEntity getUserNuboEntity() {
        String currentUserName = PropertiesContext.getClientUser().trim();
        return userNuboRepository.findByUserName(currentUserName)
                .orElseThrow(() -> new ServiceException(ErrorCode.USER_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private PageResponseOutDto<ParticipantOutDto> buildPageResponse(
            List<ParticipantOutDto> content, int page, int size, int totalElements) {
        PageResponseOutDto<ParticipantOutDto> response = new PageResponseOutDto<>();
        response.setContent(content);
        response.setPageNumber(page);
        response.setPageSize(size);
        response.setTotalElements((long) totalElements);
        response.setTotalPages(size > 0 ? (int) Math.ceil((double) totalElements / size) : 1);
        return response;
    }

    @Override
    public ParticipantOutDto findParticipantById(Long participantId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findParticipantByIdV1(participantId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private ParticipantOutDto findParticipantByIdV1(Long participantId) {
        log.info("Start method findParticipantByIdV1, participantId -> {}", participantId);

        UserNuboEntity user = getUserNuboEntity();

        if (UserTypeEnum.EXTERNAL.getValue().equalsIgnoreCase(user.getUserType())) {
            Long participantIdByUser = getParticipantIdByUser(user);
            if (!participantIdByUser.equals(participantId)) {
                throw new ServiceException(ErrorCode.UNAUTHORIZED, HttpStatus.FORBIDDEN);
            }

        }

        ParticipantEntity participantEntity = validateParticipant(participantId);
        ParticipantOutDto participantOutDto = MapperUtil.participantEntityToParticipantOutDto(participantEntity);

        log.info("End method findParticipantByIdV1, participant -> {}", participantOutDto);
        return participantOutDto;
    }

    private Long getParticipantIdByUser(UserNuboEntity user) {
        Long participantId = user.getParticipant() == null ? null
                : user.getParticipant().getId();
        log.debug("User EXTERNAL, participantId -> {}", participantId);
        if (participantId != null)
            return participantId;
        throw new ServiceException(ErrorCode.USER_TYPE_NOT_VALID, HttpStatus.FORBIDDEN);
    }

    @Override
    public List<ParticipantOutDto> getParticipantByTrade(Long tradeId, int page, int size) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return getParticipantByTradeV1(tradeId, page, size);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<ParticipantOutDto> getParticipantByTradeV1(Long tradeId, int page, int size) {
        log.info("Start method getParticipantByTradeV1, tradeId -> {}", tradeId);

        TradeEntity tradeEntity = validateTrade(tradeId);
        Pageable pageable = PageRequest.of(page, size);
        List<ParticipantOutDto> participantOutDto = participantRepository.findParticipantsByTradeId(tradeEntity.getId(), pageable)
                .stream()
                .map(MapperUtil::participantEntityToParticipantOutDto)
                .toList();

        log.info("End method getParticipantByTradeV1, tradeId -> {}", participantOutDto);
        return participantOutDto;
    }

    @Override
    public PageResponseOutDto<ParticipantOutDto> searchParticipant(
            String text, int page, int size, String sort, String order, boolean all) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return searchParticipantV1(text, page, size, sort, order, all);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<ParticipantOutDto> searchParticipantV1(
            String text, int page, int size, String sort, String order, boolean all) {
        log.info("Start method findParticipantGuaranteeRegisterV1, text -> {}", text);

        Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
        Sort sortObj = Sort.by(direction, sort != null ? sort : "id");

        if (all) {
            List<ParticipantEntity> allResults = participantRepository.findAll(participantSpecification(text), sortObj);
            List<ParticipantOutDto> participantOutDtoList = allResults.stream()
                    .map(MapperUtil::participantEntityToParticipantOutDto).filter(Objects::nonNull)
                    .toList();
            return buildPageResponse(participantOutDtoList, 0, allResults.size(), allResults.size());
        } else {
            Pageable pageable = PageRequest.of(page, size, sortObj);
            Page<ParticipantEntity> participantPage = participantRepository.findAll(participantSpecification(text), pageable);
            List<ParticipantOutDto> participantOutDtoList = participantPage.getContent().stream()
                    .map(MapperUtil::participantEntityToParticipantOutDto).filter(Objects::nonNull)
                    .toList();
            log.info("End method findParticipantGuaranteeRegisterV1, participantOutDtoList -> {}", participantOutDtoList);
            return MapperPageUtil.pageToPageResponseOutDto(participantOutDtoList, participantPage);
        }
    }

    @Override
    public ParticipantOutDto createParticipant(ParticipantInDto participantInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return createParticipantV1(participantInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private ParticipantOutDto createParticipantV1(ParticipantInDto participantInDto) {
        log.debug("Start method createParticipantV1, participant -> {}", participantInDto);

        ParticipantEntity participantEntity = ParticipantEntity.builder()
                .enterpriseGroup(validateEnterpriseGroup(participantInDto.getEnterpriseGroupId()))
                .code(participantInDto.getCode())
                .documentNumber(participantInDto.getDocumentNumber())
                .identificationType(validateIdentificationType(participantInDto.getIdentificationTypeId()))
                .name(participantInDto.getName())
                .shortName(participantInDto.getShortName())
                .type(validateType(participantInDto.getTypeId()))
                .country(validateCountry(participantInDto.getCountryId()))
                .registrationDate(participantInDto.getRegistrationDate())
                .taxCode(participantInDto.getTaxCode())
                .department(validateDepartment(participantInDto.getDepartmentId()))
                .mainAddress(participantInDto.getMainAddress())
                .webPage(participantInDto.getWebPage())
                .phoneNumber(participantInDto.getPhoneNumber())
                .status(validateStatus(participantInDto.getStatusId()))
                .taxStatus(validateTaxStatus(participantInDto.getTaxStatusId()))
                .entityType(validateType(participantInDto.getEntityTypeId()))
                .directAllocation(participantInDto.getDirectAllocation())
                .marketMaker(participantInDto.getMarketMaker())
                .custodian(participantInDto.getCustodian())
                .city(validateCity(participantInDto.getCityId()))
                .canceledStatus(participantInDto.getCanceledStatus())
                .registeredSystem(validateSystem(participantInDto.getRegisteredSystemId()))
                .dcvRvOpersAuth(participantInDto.getDcvRvOpersAuth())
                .dcvRvSettlementAuth(participantInDto.getDcvRvSettlementAuth())
                .directOperatorAgreements(participantInDto.getDirectOperatorAgreements())
                .otcLoanRelationship(participantInDto.getOtcLoanRelationship())
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyIp(PropertiesContext.getClientIp())
                .lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyDate(PropertiesContext.getClientDatetime())
                .build();

        ParticipantOutDto participantOutDto = MapperUtil.participantEntityToParticipantOutDto(
                participantRepository.save(participantEntity));

        log.info("End method createParticipantV1, participant -> {}", participantOutDto);
        return participantOutDto;
    }

    @Override
    public ParticipantOutDto updateDirectAllocation(Long participantId, String directAllocation) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return updateDirectAllocationV1(participantId, directAllocation);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    @Transactional
    private ParticipantOutDto updateDirectAllocationV1(Long participantId, String directAllocation) {
        log.info("Start method updateDirectAllocationV1, participantId={}, directAllocation={}",
                participantId, directAllocation);

        DirectAllocationEnum directAllocationEnum;
        try {
            directAllocationEnum = DirectAllocationEnum.fromValue(directAllocation);
        } catch (IllegalArgumentException ex) {
            throw new ServiceException(ErrorCode.BAD_REQUEST, HttpStatus.BAD_REQUEST);
        }

        ParticipantEntity participantEntity = validateParticipant(participantId);

        participantEntity.setDirectAllocation(directAllocationEnum.getDbValue());
        participantEntity.setLastModifyApplication(propertiesConfig.getApiName());
        participantEntity.setLastModifyIp(PropertiesContext.getClientIp());
        participantEntity.setLastModifyUser(PropertiesContext.getClientUser());
        participantEntity.setLastModifyDate(PropertiesContext.getClientDatetime());

        ParticipantEntity saved = participantRepository.save(participantEntity);
        ParticipantOutDto participantOutDto = MapperUtil.participantEntityToParticipantOutDto(saved);

        log.info("End method updateDirectAllocationV1, participantId={}, directAllocationDb={}",
                participantId, directAllocationEnum.getDbValue());

        return participantOutDto;
    }

    @Override
    public ParticipantOutDto updateParticipantDetail(Long participantId, ParticipantDetailUpdateInDto participantDetailUpdateInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return updateParticipantDetailV1(participantId, participantDetailUpdateInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private ParticipantOutDto updateParticipantDetailV1(Long participantId, ParticipantDetailUpdateInDto participantDetailUpdateInDto) {
        log.debug("Start method updateParticipantDetailV1, participantId -> {}, participantDetailUpdateInDto -> {}",
                participantId, participantDetailUpdateInDto);

        ParticipantEntity participantEntityLast = validateParticipant(participantId);
        participantEntityLast.setMasterAccount(ObjectUtils.isEmpty(participantDetailUpdateInDto.getMasterAccountParticipantId()) ?
                participantEntityLast.getMasterAccount() : validateParticipantAccount(participantDetailUpdateInDto.getMasterAccountParticipantId()));
        participantEntityLast.setOwnAccount(ObjectUtils.isEmpty(participantDetailUpdateInDto.getOwnAccountParticipantId()) ?
                participantEntityLast.getOwnAccount() : validateParticipantAccount(participantDetailUpdateInDto.getOwnAccountParticipantId()));

        if (!ObjectUtils.isEmpty(participantEntityLast.getMasterAccount()) &&
                !ObjectUtils.isEmpty(participantEntityLast.getOwnAccount()) &&
                participantEntityLast.getMasterAccount().getId().equals(participantEntityLast.getOwnAccount().getId())) {
            throw new ServiceException(ErrorCode.MASTER_ACCOUNT_AND_OWN_ACCOUNT_CANNOT_SAME, HttpStatus.BAD_REQUEST);
        }

        participantEntityLast.setLastModifyApplication(propertiesConfig.getApiName());
        participantEntityLast.setLastModifyIp(PropertiesContext.getClientIp());
        participantEntityLast.setLastModifyUser(PropertiesContext.getClientUser());
        participantEntityLast.setLastModifyDate(PropertiesContext.getClientDatetime());

        ParticipantEntity participantEntitySaved = participantRepository.save(participantEntityLast);
        ParticipantOutDto participantOutDto = MapperUtil.participantEntityToParticipantOutDto(participantEntitySaved);

        log.info("End method updateParticipantDetailV1, participant -> {}", participantOutDto);

        return participantOutDto;
    }

    @Override
    public ParticipantOutDto updateParticipant(Long participantId, ParticipantUpdateInDto participantUpdateInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return updateParticipantV1(participantId, participantUpdateInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private ParticipantOutDto updateParticipantV1(Long participantId, ParticipantUpdateInDto participantUpdateInDto) {
        log.debug("Start method updateParticipantV1, participantId -> {}, participant -> {}", participantId, participantUpdateInDto);

        ParticipantEntity participantEntityLast = validateParticipant(participantId);

        ParticipantEntity participantEntity = ParticipantEntity.builder()
                .id(participantEntityLast.getId())
                .enterpriseGroup(org.springframework.util.ObjectUtils.isEmpty(participantUpdateInDto.getEnterpriseGroupId())
                        ? participantEntityLast.getEnterpriseGroup() : validateEnterpriseGroup(participantUpdateInDto.getEnterpriseGroupId()))
                .code(org.springframework.util.ObjectUtils.isEmpty(participantUpdateInDto.getCode())
                        ? participantEntityLast.getCode() : participantUpdateInDto.getCode())
                .documentNumber(org.springframework.util.ObjectUtils.isEmpty(participantUpdateInDto.getDocumentNumber())
                        ? participantEntityLast.getDocumentNumber() : participantUpdateInDto.getDocumentNumber())
                .identificationType(org.springframework.util.ObjectUtils.isEmpty(participantUpdateInDto.getIdentificationTypeId())
                        ? participantEntityLast.getIdentificationType() : validateIdentificationType(participantUpdateInDto.getIdentificationTypeId()))
                .name(org.springframework.util.ObjectUtils.isEmpty(participantUpdateInDto.getName())
                        ? participantEntityLast.getName() : participantUpdateInDto.getName())
                .shortName(org.springframework.util.ObjectUtils.isEmpty(participantUpdateInDto.getShortName())
                        ? participantEntityLast.getShortName() : participantUpdateInDto.getShortName())
                .type(org.springframework.util.ObjectUtils.isEmpty(participantUpdateInDto.getTypeId())
                        ? participantEntityLast.getType() : validateType(participantUpdateInDto.getTypeId()))
                .country(org.springframework.util.ObjectUtils.isEmpty(participantUpdateInDto.getCountryId())
                        ? participantEntityLast.getCountry() : validateCountry(participantUpdateInDto.getCountryId()))
                .registrationDate(org.springframework.util.ObjectUtils.isEmpty(participantUpdateInDto.getRegistrationDate())
                        ? participantEntityLast.getRegistrationDate() : participantUpdateInDto.getRegistrationDate())
                .taxCode(org.springframework.util.ObjectUtils.isEmpty(participantUpdateInDto.getTaxCode())
                        ? participantEntityLast.getTaxCode() : participantUpdateInDto.getTaxCode())
                .department(org.springframework.util.ObjectUtils.isEmpty(participantUpdateInDto.getDepartmentId())
                        ? participantEntityLast.getDepartment() : validateDepartment(participantUpdateInDto.getDepartmentId()))
                .mainAddress(org.springframework.util.ObjectUtils.isEmpty(participantUpdateInDto.getMainAddress())
                        ? participantEntityLast.getMainAddress() : participantUpdateInDto.getMainAddress())
                .webPage(org.springframework.util.ObjectUtils.isEmpty(participantUpdateInDto.getWebPage())
                        ? participantEntityLast.getWebPage() : participantUpdateInDto.getWebPage())
                .phoneNumber(org.springframework.util.ObjectUtils.isEmpty(participantUpdateInDto.getPhoneNumber())
                        ? participantEntityLast.getPhoneNumber() : participantUpdateInDto.getPhoneNumber())
                .status(org.springframework.util.ObjectUtils.isEmpty(participantUpdateInDto.getStatusId())
                        ? participantEntityLast.getStatus() : validateStatus(participantUpdateInDto.getStatusId()))
                .taxStatus(org.springframework.util.ObjectUtils.isEmpty(participantUpdateInDto.getTaxStatusId())
                        ? participantEntityLast.getTaxStatus() : validateTaxStatus(participantUpdateInDto.getTaxStatusId()))
                .entityType(org.springframework.util.ObjectUtils.isEmpty(participantUpdateInDto.getEntityTypeId())
                        ? participantEntityLast.getEntityType() : validateType(participantUpdateInDto.getEntityTypeId()))
                .directAllocation(org.springframework.util.ObjectUtils.isEmpty(participantUpdateInDto.getDirectAllocation())
                        ? participantEntityLast.getDirectAllocation() : participantUpdateInDto.getDirectAllocation())
                .marketMaker(org.springframework.util.ObjectUtils.isEmpty(participantUpdateInDto.getMarketMaker())
                        ? participantEntityLast.getMarketMaker() : participantUpdateInDto.getMarketMaker())
                .custodian(org.springframework.util.ObjectUtils.isEmpty(participantUpdateInDto.getCustodian())
                        ? participantEntityLast.getCustodian() : participantUpdateInDto.getCustodian())
                .city(org.springframework.util.ObjectUtils.isEmpty(participantUpdateInDto.getCityId())
                        ? participantEntityLast.getCity() : validateCity(participantUpdateInDto.getCityId()))
                .canceledStatus(org.springframework.util.ObjectUtils.isEmpty(participantUpdateInDto.getCanceledStatus())
                        ? participantEntityLast.getCanceledStatus() : participantUpdateInDto.getCanceledStatus())
                .registeredSystem(org.springframework.util.ObjectUtils.isEmpty(participantUpdateInDto.getRegisteredSystemId())
                        ? participantEntityLast.getRegisteredSystem() : validateSystem(participantUpdateInDto.getRegisteredSystemId()))
                .dcvRvOpersAuth(org.springframework.util.ObjectUtils.isEmpty(participantUpdateInDto.getDcvRvOpersAuth())
                        ? participantEntityLast.getDcvRvOpersAuth() : participantUpdateInDto.getDcvRvOpersAuth())
                .dcvRvSettlementAuth(org.springframework.util.ObjectUtils.isEmpty(participantUpdateInDto.getDcvRvSettlementAuth())
                        ? participantEntityLast.getDcvRvSettlementAuth() : participantUpdateInDto.getDcvRvSettlementAuth())
                .directOperatorAgreements(org.springframework.util.ObjectUtils.isEmpty(participantUpdateInDto.getDirectOperatorAgreements())
                        ? participantEntityLast.getDirectOperatorAgreements() : participantUpdateInDto.getDirectOperatorAgreements())
                .otcLoanRelationship(org.springframework.util.ObjectUtils.isEmpty(participantUpdateInDto.getOtcLoanRelationship())
                        ? participantEntityLast.getOtcLoanRelationship() : participantUpdateInDto.getOtcLoanRelationship())
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyIp(PropertiesContext.getClientIp())
                .lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyDate(PropertiesContext.getClientDatetime())
                .build();

        ParticipantOutDto participantOutDto = MapperUtil.participantEntityToParticipantOutDto(
                participantRepository.save(participantEntity));

        log.info("End method updateParticipantV1, participant -> {}", participantOutDto);
        return participantOutDto;
    }

    private Specification<ParticipantEntity> participantSpecification(String text) {
        return (root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();
            if (!ObjectUtils.isEmpty(text)) {
                String searchValue = "%" + text.trim().toLowerCase() + "%";
                Predicate codePredicate = criteriaBuilder.like(
                        criteriaBuilder.lower(root.get("code")), searchValue);
                Predicate documentNumberPredicate = criteriaBuilder.like(
                        criteriaBuilder.lower(root.get("documentNumber")), searchValue);
                Predicate namePredicate = criteriaBuilder.like(
                        criteriaBuilder.lower(root.get("name")), searchValue);
                predicates.add(criteriaBuilder.or(codePredicate, namePredicate, documentNumberPredicate));
            }
            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }

    @Override
    public PageResponseOutDto<ParticipantFilterOutDto> searchByCode(
            String code, int page, int size, String sort, String order, boolean all) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return searchByCodeV1(code, page, size, sort, order, all);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<ParticipantFilterOutDto> searchByCodeV1(
            String code, int page, int size, String sort, String order, boolean all) {
        log.info("Start method searchByCodeV1, code={}, page={}, size={}", code, page, size);

        String like = normalize(code);
        Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
        Sort sortObj = Sort.by(direction, sort != null ? sort : "id");

        if (all) {
            Pageable pageable = PageRequest.of(0, Integer.MAX_VALUE, sortObj);
            Page<ParticipantFilterOutDto> pageResult = participantRepository.findByCodeLike(like, pageable);
            return buildFilterPageResponse(pageResult.getContent(), 0, pageResult.getContent().size(), (int) pageResult.getTotalElements());
        } else {
            Pageable pageable = PageRequest.of(page, size, sortObj);
            Page<ParticipantFilterOutDto> pageResult = participantRepository.findByCodeLike(like, pageable);
            log.info("End method searchByCodeV1, found={}", pageResult.getContent().size());
            return MapperPageUtil.pageToPageResponseOutDto(pageResult.getContent(), pageResult);
        }
    }

    private PageResponseOutDto<ParticipantFilterOutDto> buildFilterPageResponse(
            List<ParticipantFilterOutDto> content, int page, int size, int totalElements) {
        PageResponseOutDto<ParticipantFilterOutDto> response = new PageResponseOutDto<>();
        response.setContent(content);
        response.setPageNumber(page);
        response.setPageSize(size);
        response.setTotalElements((long) totalElements);
        response.setTotalPages(size > 0 ? (int) Math.ceil((double) totalElements / size) : 1);
        return response;
    }


    @Override
    public PageResponseOutDto<ParticipantFilterOutDto> searchByName(
            String name, int page, int size, String sort, String order, boolean all) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return searchByNameV1(name, page, size, sort, order, all);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<ParticipantFilterOutDto> searchByNameV1(
            String name, int page, int size, String sort, String order, boolean all) {
        log.info("Start method searchByNameV1, name={}, page={}, size={}", name, page, size);

        String like = normalize(name);
        Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
        Sort sortObj = Sort.by(direction, sort != null ? sort : "id");

        if (all) {
            Pageable pageable = PageRequest.of(0, Integer.MAX_VALUE, sortObj);
            Page<ParticipantFilterOutDto> pageResult = participantRepository.findByNameLike(like, pageable);
            return buildFilterPageResponse(pageResult.getContent(), 0, pageResult.getContent().size(), (int) pageResult.getTotalElements());
        } else {
            Pageable pageable = PageRequest.of(page, size, sortObj);
            Page<ParticipantFilterOutDto> pageResult = participantRepository.findByNameLike(like, pageable);
            log.info("End method searchByNameV1, found={}", pageResult.getContent().size());
            return MapperPageUtil.pageToPageResponseOutDto(pageResult.getContent(), pageResult);
        }
    }

    @Override
    public PageResponseOutDto<ParticipantFilterOutDto> listIdentifications(
            String documentNumber, int page, int size, String sort, String order, boolean all) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return listIdentificationsV1(documentNumber, page, size, sort, order, all);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<ParticipantFilterOutDto> listIdentificationsV1(
            String documentNumber, int page, int size, String sort, String order, boolean all) {
        log.info("Start method listIdentificationsV1, documentNumber='{}', page={}, size={}", documentNumber, page, size);

        String like = normalize(documentNumber);
        Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
        Sort sortObj = Sort.by(direction, sort != null ? sort : "id");

        if (all) {
            Pageable pageable = PageRequest.of(0, Integer.MAX_VALUE, sortObj);
            Page<ParticipantFilterOutDto> pageResult = participantRepository.findByDocumentNumberLikePageable(like, pageable);
            return buildFilterPageResponse(pageResult.getContent(), 0, pageResult.getContent().size(), (int) pageResult.getTotalElements());
        } else {
            Pageable pageable = PageRequest.of(page, size, sortObj);
            Page<ParticipantFilterOutDto> pageResult = participantRepository.findByDocumentNumberLikePageable(like, pageable);
            log.info("End method listIdentificationsV1, found={}", pageResult.getContent().size());
            return MapperPageUtil.pageToPageResponseOutDto(pageResult.getContent(), pageResult);
        }
    }

    private CountryEntity validateCountry(Long countryId) {
        return countryRepository.findById(countryId)
                .orElseThrow(() -> new ServiceException(ErrorCode.COUNTRY_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private ParticipantEntity validateParticipant(Long participantId) {
        return participantRepository.findById(participantId)
                .orElseThrow(() -> new ServiceException(ErrorCode.PARTICIPANT_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private TradeEntity validateTrade(Long tradeId) {
        return tradeRepository.findById(tradeId)
                .orElseThrow(() -> new ServiceException(ErrorCode.TRADE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private TypeEntity validateType(Long typeId) {
        return typeRepository.findById(typeId)
                .orElseThrow(() -> new ServiceException(ErrorCode.TYPE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private DepartmentEntity validateDepartment(String departmentId) {
        return departmentRepository.findById(departmentId)
                .orElseThrow(() -> new ServiceException(ErrorCode.DEPARTMENT_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private StatusEntity validateStatus(Long statusId) {
        return statusRepository.findById(statusId)
                .orElseThrow(() -> new ServiceException(ErrorCode.STATUS_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private IdentificationTypeEntity validateIdentificationType(Long id) {
        return identificationTypeRepository.findById(id)
                .orElseThrow(() -> new ServiceException(ErrorCode.IDENTIFICATION_TYPE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private TaxStatusEntity validateTaxStatus(Long id) {
        return taxStatusRepository.findById(id)
                .orElseThrow(() -> new ServiceException(ErrorCode.TAX_STATUS_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private CityEntity validateCity(Long cityId) {
        return cityRepository.findById(cityId)
                .orElseThrow(() -> new ServiceException(ErrorCode.CITY_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private EnterpriseGroupEntity validateEnterpriseGroup(Long enterpriseGroupId) {
        return enterpriseGroupRepository.findById(enterpriseGroupId)
                .orElseThrow(() -> new ServiceException(ErrorCode.ENTERPRISE_GROUP_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private SystemEntity validateSystem(Long systemId) {
        return systemRepository.findById(systemId)
                .orElseThrow(() -> new ServiceException(ErrorCode.SYSTEM_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private ParticipantAccountEntity validateParticipantAccount(Long participantAccountId) {
        return participantAccountRepository.findById(participantAccountId)
                .orElseThrow(() -> new ServiceException(ErrorCode.PARTICIPANT_ACCOUNT_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private String normalize(String s) {
        if (s == null || s.isBlank()) return null;
        return "%" + s.trim().toLowerCase() + "%";
    }

    private Specification<ParticipantEntity> baseFetchSpec() {
        return (root, query, cb) -> {
            if (ParticipantEntity.class.equals(query.getResultType())) {
                root.fetch("enterpriseGroup", JoinType.LEFT);
                root.fetch("identificationType", JoinType.LEFT);
                root.fetch("type", JoinType.LEFT);
                root.fetch("country", JoinType.LEFT).fetch("currency", JoinType.LEFT);
                root.fetch("status", JoinType.LEFT);
                root.fetch("taxStatus", JoinType.LEFT);
                root.fetch("entityType", JoinType.LEFT);
                root.fetch("city", JoinType.LEFT);
                root.fetch("registeredSystem", JoinType.LEFT);
                root.fetch("department", JoinType.LEFT).fetch("country", JoinType.LEFT);
                query.distinct(true);
            }
            return null;
        };
    }

    private Specification<ParticipantEntity> filtersSpec(String code, String name,
                                                         String documentNumber, Long typeId, Long statusId) {
        return (root, query, cb) -> {
            List<Predicate> predicates = new ArrayList<>();
            if (!ObjectUtils.isEmpty(code)) {
                predicates.add(cb.equal(root.get("code"), code));
            }
            if (!ObjectUtils.isEmpty(name)) {
                predicates.add(cb.equal(root.get("name"), name));
            }
            if (!ObjectUtils.isEmpty(documentNumber)) {
                predicates.add(cb.equal(root.get("documentNumber"), documentNumber));
            }
            if (!ObjectUtils.isEmpty(typeId)) {
                predicates.add(cb.equal(root.get("type").get("id"), typeId));
            }
            if (!ObjectUtils.isEmpty(statusId)) {
                predicates.add(cb.equal(root.get("status").get("id"), statusId));
            }
            return predicates.isEmpty() ? null : cb.and(predicates.toArray(new Predicate[0]));
        };
    }

    private Specification<ParticipantEntity> countryFilterSpec(Long countryId) {
        return (root, query, cb) -> {
            if (!ObjectUtils.isEmpty(countryId)) {
                return cb.equal(root.get("country").get("id"), countryId);
            }
            return null;
        };
    }

    private Specification<ParticipantEntity> authListSpec(UserNuboEntity user, Long statusId) {
        return (root, query, cb) -> {
            var statusIdPath = root.get("status").get("id");

            if (UserTypeEnum.INTERNAL.getValue().equalsIgnoreCase(user.getUserType())) {
                if (statusId == null) {
                    return statusIdPath.in(
                            ParticipantStatusEnum.ACTIVO.getId(),
                            ParticipantStatusEnum.INACTIVO.getId()
                    );
                } else {
                    return cb.equal(statusIdPath, statusId);
                }
            } else {
                if (statusId == null) {
                    return cb.equal(statusIdPath, ParticipantStatusEnum.ACTIVO.getId());
                } else if (ParticipantStatusEnum.ACTIVO.getId().equals(statusId)) {
                    return cb.equal(statusIdPath, ParticipantStatusEnum.ACTIVO.getId());
                } else if (ParticipantStatusEnum.INACTIVO.getId().equals(statusId)) {
                    return cb.equal(statusIdPath, ParticipantStatusEnum.INACTIVO.getId());
                } else {
                    return cb.equal(statusIdPath, ParticipantStatusEnum.ACTIVO.getId());
                }
            }
        };
    }

    @Override
    public PageResponseOutDto<com.nubo.masterparticipant.api.models.dto.response.ParticipantShortOutDto> findAllParticipantShort(
            int page, int size, String sort, String order, boolean all,
            String code, String name, String documentNumber, Long typeId, Long statusId, Long countryId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllParticipantShortV1(page, size, sort, order, all, code, name, documentNumber, typeId, statusId, countryId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    @Transactional(readOnly = true)
    private PageResponseOutDto<com.nubo.masterparticipant.api.models.dto.response.ParticipantShortOutDto> findAllParticipantShortV1(
            int page, int size, String sort, String order, boolean all,
            String code, String name, String documentNumber, Long typeId, Long statusId, Long countryId) {
        log.info("Start method findAllParticipantShortV1 with page: {} and size: {}", page, size);

        UserNuboEntity user = getUserNuboEntity();

        Specification<ParticipantEntity> spec = Specification.allOf(
                baseFetchSpec(),
                filtersSpec(code, name, documentNumber, typeId, statusId),
                countryFilterSpec(countryId),
                authListSpec(user, statusId)
        );


        Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
        Sort sortObj = Sort.by(direction, sort != null ? sort : "id");

        if (all) {
            List<ParticipantEntity> allResults = participantRepository.findAll(spec, sortObj);
            List<com.nubo.masterparticipant.api.models.dto.response.ParticipantShortOutDto> participantShortOutDtoList = allResults.stream()
                    .map(MapperUtil::participantEntityToParticipantShortOutDto)
                    .toList();
            return buildPageResponseShort(participantShortOutDtoList, 0, allResults.size(), allResults.size());
        } else {
            Pageable pageable = PageRequest.of(page, size, sortObj);
            Page<ParticipantEntity> participantPage = participantRepository.findAll(spec, pageable);
            List<com.nubo.masterparticipant.api.models.dto.response.ParticipantShortOutDto> participantShortOutDtoList = participantPage.getContent().stream()
                    .map(MapperUtil::participantEntityToParticipantShortOutDto)
                    .toList();
            log.info("End method findAllParticipantShortV1, number of participant found: {}", participantShortOutDtoList.size());
            return MapperPageUtil.pageToPageResponseOutDto(participantShortOutDtoList, participantPage);
        }
    }

    private PageResponseOutDto<com.nubo.masterparticipant.api.models.dto.response.ParticipantShortOutDto> buildPageResponseShort(
            List<com.nubo.masterparticipant.api.models.dto.response.ParticipantShortOutDto> content, int page, int size, int totalElements) {
        PageResponseOutDto<com.nubo.masterparticipant.api.models.dto.response.ParticipantShortOutDto> response = new PageResponseOutDto<>();
        response.setContent(content);
        response.setPageNumber(page);
        response.setPageSize(size);
        response.setTotalElements((long) totalElements);
        response.setTotalPages(size > 0 ? (int) Math.ceil((double) totalElements / size) : 1);
        return response;
    }

}

```

## src/main/java/com/nubo/masterparticipant/api/service/impl/ParticipantSuspendedHistoryServiceImpl.java

```java
package com.nubo.masterparticipant.api.service.impl;

import com.nubo.masterparticipant.api.application.properties.PropertiesContext;
import com.nubo.masterparticipant.api.exception.ServiceException;
import com.nubo.masterparticipant.api.exception.error.ErrorCode;
import com.nubo.masterparticipant.api.helpers.MapperPageUtil;
import com.nubo.masterparticipant.api.helpers.MapperUtil;
import com.nubo.masterparticipant.api.models.dto.request.ParamsPageInDto;
import com.nubo.masterparticipant.api.models.dto.response.PageResponseOutDto;
import com.nubo.masterparticipant.api.models.dto.response.ParticipantSuspendedHistoryOutDto;
import com.nubo.masterparticipant.api.models.entity.ParticipantSuspendedHistoryEntity;
import com.nubo.masterparticipant.api.models.enums.VersionApiEnum;
import com.nubo.masterparticipant.api.repository.ParticipantSuspendedHistoryRepository;
import com.nubo.masterparticipant.api.service.ParticipantSuspendedHistoryService;
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
public class ParticipantSuspendedHistoryServiceImpl implements ParticipantSuspendedHistoryService {

    private final ParticipantSuspendedHistoryRepository participantSuspendedHistoryRepository;

    @Override
    public PageResponseOutDto<ParticipantSuspendedHistoryOutDto> findParticipantSuspendedHistory(
            ParamsPageInDto paramsPageInDto, Long participantId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findParticipantSuspendedHistoryV1(paramsPageInDto, participantId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<ParticipantSuspendedHistoryOutDto> findParticipantSuspendedHistoryV1(
            ParamsPageInDto paramsPageInDto, Long participantId) {
        log.info("Start method findParticipantSuspendedHistoryV1, participantId -> {}", participantId);

        Specification<ParticipantSuspendedHistoryEntity> participantBlockHistoryEntitySpecification =
                participantBlockHistoryEntitySpecification(participantId);

        PageResponseOutDto<ParticipantSuspendedHistoryOutDto> pageResponseOutDto;
        List<ParticipantSuspendedHistoryOutDto> participantSuspendedHistoryOutDtoList = new ArrayList<>();
        if (paramsPageInDto.isAll()) {
            List<ParticipantSuspendedHistoryEntity> participantSuspendedHistoryEntityList =
                    participantSuspendedHistoryRepository.findAll(participantBlockHistoryEntitySpecification);

            participantSuspendedHistoryEntityList.forEach(participantSuspendedHistoryEntity ->
                    participantSuspendedHistoryOutDtoList.add(
                            MapperUtil.participantSuspendedHistoryEntityToParticipantSuspendedHistoryOutDto(participantSuspendedHistoryEntity)));

            pageResponseOutDto = buildPageResponseParticipantBlockHistory(participantSuspendedHistoryOutDtoList,
                    0, participantSuspendedHistoryOutDtoList.size(), participantSuspendedHistoryOutDtoList.size());
        } else {
            Sort sortBy = paramsPageInDto.getOrder().equalsIgnoreCase(Sort.Direction.ASC.name())
                    ? Sort.by(Sort.Order.asc(paramsPageInDto.getSort()), Sort.Order.asc("id"))
                    : Sort.by(Sort.Order.desc(paramsPageInDto.getSort()), Sort.Order.desc("id"));
            Pageable pageable = PageRequest.of(paramsPageInDto.getPage(), paramsPageInDto.getSize(), sortBy);

            Page<ParticipantSuspendedHistoryEntity> participantSuspendedHistoryEntityPage =
                    participantSuspendedHistoryRepository.findAll(participantBlockHistoryEntitySpecification, pageable);

            participantSuspendedHistoryEntityPage.getContent().forEach(participantSuspendedHistoryEntity ->
                    participantSuspendedHistoryOutDtoList.add(
                            MapperUtil.participantSuspendedHistoryEntityToParticipantSuspendedHistoryOutDto(participantSuspendedHistoryEntity)));

            pageResponseOutDto = buildPageResponseParticipantBlockHistory(participantSuspendedHistoryOutDtoList,
                    paramsPageInDto.getPage(), paramsPageInDto.getSize(), (int) participantSuspendedHistoryEntityPage.getTotalElements());
        }

        log.info("End method findParticipantSuspendedHistoryV1, pageResponseOutDto -> {}", pageResponseOutDto);

        return pageResponseOutDto;
    }

    private Specification<ParticipantSuspendedHistoryEntity> participantBlockHistoryEntitySpecification(Long participantId) {
        return (root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();
            predicates.add(criteriaBuilder.equal(root.get("participant").get("id"), participantId));
            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }

    private PageResponseOutDto<ParticipantSuspendedHistoryOutDto> buildPageResponseParticipantBlockHistory(
            List<ParticipantSuspendedHistoryOutDto> content, int page, int size, int totalElements) {
        Page<ParticipantSuspendedHistoryOutDto> participantBlockHistoryPage = new PageImpl<>(content,
                PageRequest.of(page, size), totalElements);
        return MapperPageUtil.pageToPageResponseOutDto(content, participantBlockHistoryPage);
    }

}

```

## src/main/java/com/nubo/masterparticipant/api/service/impl/ParticipantSuspendedServiceImpl.java

```java
package com.nubo.masterparticipant.api.service.impl;

import com.nubo.masterparticipant.api.application.properties.PropertiesConfig;
import com.nubo.masterparticipant.api.application.properties.PropertiesContext;
import com.nubo.masterparticipant.api.exception.ServiceException;
import com.nubo.masterparticipant.api.exception.error.ErrorCode;
import com.nubo.masterparticipant.api.helpers.MapperUtil;
import com.nubo.masterparticipant.api.models.dto.request.NoSuspendedParticipantInDto;
import com.nubo.masterparticipant.api.models.dto.request.SuspendedParticipantInDto;
import com.nubo.masterparticipant.api.models.dto.response.ParticipantSuspendedHistoryOutDto;
import com.nubo.masterparticipant.api.models.entity.ParticipantEntity;
import com.nubo.masterparticipant.api.models.entity.ParticipantSuspendedHistoryEntity;
import com.nubo.masterparticipant.api.models.entity.TypeEntity;
import com.nubo.masterparticipant.api.models.enums.TypeParticipantActionEnum;
import com.nubo.masterparticipant.api.models.enums.VersionApiEnum;
import com.nubo.masterparticipant.api.repository.ParticipantRepository;
import com.nubo.masterparticipant.api.repository.ParticipantSuspendedHistoryRepository;
import com.nubo.masterparticipant.api.repository.TypeRepository;
import com.nubo.masterparticipant.api.service.ParticipantSuspendedService;
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
public class ParticipantSuspendedServiceImpl implements ParticipantSuspendedService {

    private final ParticipantSuspendedHistoryRepository participantSuspendedHistoryRepository;
    private final ParticipantRepository participantRepository;
    private final TypeRepository typeRepository;
    private final PropertiesConfig propertiesConfig;

    @Override
    public ParticipantSuspendedHistoryOutDto suspendedParticipant(SuspendedParticipantInDto suspendedParticipantInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return suspendedParticipantV1(suspendedParticipantInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private ParticipantSuspendedHistoryOutDto suspendedParticipantV1(SuspendedParticipantInDto suspendedParticipantInDto) {
        log.info("Start method suspendedParticipantV1, suspendedParticipantInDto -> {}", suspendedParticipantInDto);

        LocalDate effectiveDate;
        if (ObjectUtils.isEmpty(suspendedParticipantInDto.getEffectiveDate())) {
            effectiveDate = PropertiesContext.getClientDatetime().toLocalDate();
        } else {
            effectiveDate = suspendedParticipantInDto.getEffectiveDate();
        }

        ParticipantEntity participantEntity = validateParticipant(suspendedParticipantInDto.getParticipantId());
        TypeEntity processType = validateType(suspendedParticipantInDto.getProcessTypeId());
        participantEntity.setSuspendedNegotiation(true);
        participantEntity.setSuspendedEffectiveDate(effectiveDate);
        participantEntity.setSuspendedProcessType(processType);
        participantRepository.save(participantEntity);

        ParticipantSuspendedHistoryEntity participantSuspendedHistoryEntity = ParticipantSuspendedHistoryEntity.builder()
                .participant(participantEntity)
                .actionType(validateType(TypeParticipantActionEnum.SUSPENDED.getId()))
                .processType(processType)
                .effectiveDate(effectiveDate)
                .description(suspendedParticipantInDto.getDescription())
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyIp(PropertiesContext.getClientIp())
                .lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyDate(PropertiesContext.getClientDatetime())
                .build();

        ParticipantSuspendedHistoryEntity participantSuspendedHistoryEntitySaved = participantSuspendedHistoryRepository.save(participantSuspendedHistoryEntity);

        ParticipantSuspendedHistoryOutDto participantSuspendedHistoryOutDto =
                MapperUtil.participantSuspendedHistoryEntityToParticipantSuspendedHistoryOutDto(participantSuspendedHistoryEntitySaved);

        log.info("End method suspendedParticipantV1, participantSuspendedHistoryOutDto -> {}", participantSuspendedHistoryOutDto);

        return participantSuspendedHistoryOutDto;
    }

    @Override
    public ParticipantSuspendedHistoryOutDto noSuspendedParticipant(NoSuspendedParticipantInDto noSuspendedParticipantInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return noSuspendedParticipantV1(noSuspendedParticipantInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private ParticipantSuspendedHistoryOutDto noSuspendedParticipantV1(NoSuspendedParticipantInDto noSuspendedParticipantInDto) {
        log.info("Start method noSuspendedParticipantV1, noSuspendedParticipantInDto -> {}", noSuspendedParticipantInDto);

        ParticipantEntity participantEntity = validateParticipant(noSuspendedParticipantInDto.getParticipantId());
        participantEntity.setSuspendedNegotiation(false);
        participantRepository.save(participantEntity);

        ParticipantSuspendedHistoryEntity participantSuspendedHistoryEntity = ParticipantSuspendedHistoryEntity.builder()
                .participant(validateParticipant(noSuspendedParticipantInDto.getParticipantId()))
                .actionType(validateType(TypeParticipantActionEnum.NO_SUSPENDED.getId()))
                .processType(participantEntity.getSuspendedProcessType())
                .description(noSuspendedParticipantInDto.getDescription())
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyIp(PropertiesContext.getClientIp())
                .lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyDate(PropertiesContext.getClientDatetime())
                .build();

        ParticipantSuspendedHistoryEntity participantSuspendedHistoryEntitySaved = participantSuspendedHistoryRepository.save(participantSuspendedHistoryEntity);

        ParticipantSuspendedHistoryOutDto participantSuspendedHistoryOutDto =
                MapperUtil.participantSuspendedHistoryEntityToParticipantSuspendedHistoryOutDto(participantSuspendedHistoryEntitySaved);

        log.info("End method noSuspendedParticipantV1, participantSuspendedHistoryOutDto -> {}", participantSuspendedHistoryOutDto);

        return participantSuspendedHistoryOutDto;
    }

    private ParticipantEntity validateParticipant(Long participantId) {
        return participantRepository.findById(participantId)
                .orElseThrow(() -> new ServiceException(ErrorCode.PARTICIPANT_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private TypeEntity validateType(Long typeId) {
        return typeRepository.findById(typeId)
                .orElseThrow(() -> new ServiceException(ErrorCode.TYPE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

}

```

## src/main/java/com/nubo/masterparticipant/api/service/impl/StatusServiceImpl.java

```java
package com.nubo.masterparticipant.api.service.impl;

import com.nubo.masterparticipant.api.application.properties.PropertiesContext;
import com.nubo.masterparticipant.api.exception.ServiceException;
import com.nubo.masterparticipant.api.exception.error.ErrorCode;
import com.nubo.masterparticipant.api.helpers.MapperUtil;
import com.nubo.masterparticipant.api.models.dto.response.StatusOutDto;
import com.nubo.masterparticipant.api.models.entity.StatusEntity;
import com.nubo.masterparticipant.api.models.enums.VersionApiEnum;
import com.nubo.masterparticipant.api.repository.StatusRepository;
import com.nubo.masterparticipant.api.service.StatusService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
@Slf4j
public class StatusServiceImpl implements StatusService {

    private final StatusRepository statusRepository;

    @Override
    public List<StatusOutDto> findAllStatus(String category) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllStatusV1(category);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<StatusOutDto> findAllStatusV1(String category) {
        log.info("Start method findAllStatusV1");

        final List<StatusEntity> statusEntityList;
        if (org.springframework.util.StringUtils.hasText(category)) {
            statusEntityList = statusRepository.findByCategoryIgnoreCase(category.trim());
        } else {
            statusEntityList = statusRepository.findAll();
        }

        List<StatusOutDto> statusOutDtoList = statusEntityList.stream()
                .map(MapperUtil::statusEntityToStatusOutDto)
                .toList();

        log.info("End method findAllStatusV1, statusOutDtoList -> {}", statusOutDtoList);

        return statusOutDtoList;
    }

}

```

## src/main/java/com/nubo/masterparticipant/api/service/impl/TypeServiceImpl.java

```java
package com.nubo.masterparticipant.api.service.impl;

import com.nubo.masterparticipant.api.application.properties.PropertiesContext;
import com.nubo.masterparticipant.api.exception.ServiceException;
import com.nubo.masterparticipant.api.exception.error.ErrorCode;
import com.nubo.masterparticipant.api.helpers.MapperUtil;
import com.nubo.masterparticipant.api.models.dto.response.TypeOutDto;
import com.nubo.masterparticipant.api.models.entity.TypeEntity;
import com.nubo.masterparticipant.api.models.enums.VersionApiEnum;
import com.nubo.masterparticipant.api.repository.TypeRepository;
import com.nubo.masterparticipant.api.service.TypeService;
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

}

```

## src/main/java/com/nubo/masterparticipant/api/web/controller/CountryRestController.java

```java
package com.nubo.masterparticipant.api.web.controller;

import com.nubo.masterparticipant.api.models.dto.request.CountryInDto;
import com.nubo.masterparticipant.api.models.dto.response.CountryOutDto;
import com.nubo.masterparticipant.api.service.CountryService;
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
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Tag(name = "Country")
@RequestMapping("/{version}/country")
@RestController
@RequiredArgsConstructor
public class CountryRestController {

    private final CountryService countryService;

    @Operation(summary = "Find all countries", description = "Find all countries")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = CountryOutDto[].class)))})
    @GetMapping
    public ResponseEntity<List<CountryOutDto>> findAllCountries() {
        List<CountryOutDto> countries = countryService.findAllCountries();
        return ResponseEntity.ok(countries);
    }

    @GetMapping("/nuam")
    public ResponseEntity<List<CountryOutDto>> findNuamCountries() {
        List<CountryOutDto> countries = countryService.findNuamCountries();
        return ResponseEntity.ok(countries);
    }

    @Operation(summary = "Find country by id", description = "Find country by id")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = CountryOutDto.class)))})
    @GetMapping("/{countryId}")
    public ResponseEntity<CountryOutDto> findCountryById(@PathVariable Long countryId) {
        CountryOutDto countryOutDto = countryService.findCountryById(countryId);
        return ResponseEntity.ok(countryOutDto);
    }

    @Operation(summary = "Update country", description = "Update country")
    @ApiResponses(value = {@ApiResponse(responseCode = "201", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = CountryOutDto.class)))})
    @PatchMapping("/{countryId}")
    public ResponseEntity<CountryOutDto> updateCountry(@PathVariable Long countryId,
                                                       @Valid @RequestBody CountryInDto countryUpdateInDto) {
        CountryOutDto countryOutDto = countryService.updateCountry(countryId, countryUpdateInDto);
        return ResponseEntity.ok(countryOutDto);
    }

}

```

## src/main/java/com/nubo/masterparticipant/api/web/controller/DepositoryRestController.java

```java
package com.nubo.masterparticipant.api.web.controller;

import com.nubo.masterparticipant.api.models.dto.response.DepositoryOutDto;
import com.nubo.masterparticipant.api.service.DepositoryService;
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

@Tag(name = "Depository")
@RequestMapping("/{version}/depository")
@RestController
@RequiredArgsConstructor
public class DepositoryRestController {

    private final DepositoryService depositoryService;

    @Operation(summary = "Find all depository", description = "Find all depository")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = DepositoryOutDto[].class)))})
    @GetMapping
    public ResponseEntity<List<DepositoryOutDto>> findAllDepository() {
        return ResponseEntity.ok(depositoryService.findAllDepository());
    }

}

```

## src/main/java/com/nubo/masterparticipant/api/web/controller/IdentificationTypeRestController.java

```java
package com.nubo.masterparticipant.api.web.controller;

import com.nubo.masterparticipant.api.models.dto.response.IdentificationTypeOutDto;
import com.nubo.masterparticipant.api.service.IdentificationTypeService;
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

import java.util.List;

@Tag(name = "Identification Type")
@RequestMapping("/{version}/identification-type")
@RestController
@RequiredArgsConstructor
public class IdentificationTypeRestController {

    private final IdentificationTypeService identificationTypeService;

    @Operation(summary = "Find all identification type", description = "Find all identification type")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = IdentificationTypeOutDto[].class)))})
    @GetMapping
    public ResponseEntity<List<IdentificationTypeOutDto>> findAllIdentificationType() {
        return ResponseEntity.ok(identificationTypeService.findAllIdentificationType());
    }

    @Operation(summary = "Find identification type by country", description = "Find identification type by country")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = IdentificationTypeOutDto[].class)))})
    @GetMapping("/{countryId}")
    public ResponseEntity<List<IdentificationTypeOutDto>> findIdentificationTypeByCountry(@PathVariable Long countryId) {
        return ResponseEntity.ok(identificationTypeService.findIdentificationTypeByCountry(countryId));
    }

}

```

## src/main/java/com/nubo/masterparticipant/api/web/controller/ParticipantAccountRestController.java

```java
package com.nubo.masterparticipant.api.web.controller;

import com.nubo.masterparticipant.api.models.dto.request.ParamsPageInDto;
import com.nubo.masterparticipant.api.models.dto.request.ParticipantAccountInDto;
import com.nubo.masterparticipant.api.models.dto.request.ParticipantAccountUpdateInDto;
import com.nubo.masterparticipant.api.models.dto.response.PageResponseOutDto;
import com.nubo.masterparticipant.api.models.dto.response.ParticipantAccountOutDto;
import com.nubo.masterparticipant.api.service.ParticipantAccountService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
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
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Tag(name = "Participant Account")
@RequestMapping("/{version}/participant-account")
@RestController
@RequiredArgsConstructor
public class ParticipantAccountRestController {

    private final ParticipantAccountService participantAccountService;

    @Operation(summary = "Find all ParticipantAccount", description = "Find all ParticipantAccount")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = ParticipantAccountOutDto[].class)))})
    @GetMapping
    public ResponseEntity<PageResponseOutDto<ParticipantAccountOutDto>> findAllParticipantAccounts(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @Parameter(example = "1")
            @RequestParam(required = false) String depositId,
            @Parameter(example = "1")
            @RequestParam(required = false) Long accountTypeId,
            @Parameter(example = "12345")
            @RequestParam(required = false) String accountNumber,
            @Parameter(example = "1")
            @RequestParam(required = false) Long currencyId,
            @Parameter(example = "1")
            @RequestParam(required = false) Long statusId) {
        Pageable pageable = PageRequest.of(page, size);
        return ResponseEntity.ok(participantAccountService.findAllParticipantAccount(pageable, depositId,
                accountTypeId, accountNumber, currencyId, statusId));
    }

    @Operation(summary = "Find Participant accounts por participant", description = "Find Participant accounts por participant")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response",
                    content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                            schema = @Schema(implementation = ParticipantAccountOutDto[].class)))})
    @GetMapping("/participant/search")
    public ResponseEntity<PageResponseOutDto<ParticipantAccountOutDto>> findParticipantAccount(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "id") String sort,
            @RequestParam(defaultValue = "asc") String order,
            @RequestParam(required = false, name = "all", defaultValue = "false") Boolean all,
            @RequestParam Long participantId,
            @RequestParam(required = false) String text) {
        ParamsPageInDto paramsPageInDto = ParamsPageInDto.builder().page(page).size(size).sort(sort).order(order).all(all).build();
        return ResponseEntity.ok(participantAccountService.findParticipantAccount(paramsPageInDto, participantId, text));
    }

    @Operation(summary = "Find ParticipantAccount by Id", description = "Find ParticipantAccount by Id")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = ParticipantAccountOutDto.class)))})
    @GetMapping("/{participantAccountId}")
    public ResponseEntity<ParticipantAccountOutDto> findParticipantAccountById(@PathVariable Long participantAccountId) {
        return ResponseEntity.ok(participantAccountService.findParticipantAccountById(participantAccountId));
    }

    @Operation(summary = "Get participant accounts by Trade",
            description = "Retrieve participant accounts associated with a Trade ID")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = ParticipantAccountOutDto.class)))})
    @GetMapping("/trade/{tradeId}")
    public ResponseEntity<List<ParticipantAccountOutDto>> getParticipantAccountsByTrade(
            @PathVariable Long tradeId,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        Pageable pageable = PageRequest.of(page, size);
        return ResponseEntity.ok(participantAccountService.getParticipantAccountsByTrade(tradeId, pageable));
    }

    @Operation(summary = "Create ParticipantAccount", description = "Create ParticipantAccount")
    @ApiResponses(value = {@ApiResponse(responseCode = "201", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = ParticipantAccountOutDto.class)))})
    @PostMapping()
    public ResponseEntity<ParticipantAccountOutDto> createParticipantAccount(
            @Valid @RequestBody ParticipantAccountInDto participantAccountInDto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(participantAccountService
                .createParticipantAccount(participantAccountInDto));
    }

    @Operation(summary = "Update ParticipantAccount", description = "Update ParticipantAccount")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = ParticipantAccountOutDto.class)))})
    @PatchMapping("/{participantAccountId}")
    public ResponseEntity<ParticipantAccountOutDto> updateParticipantAccount(
            @PathVariable Long participantAccountId,
            @Valid @RequestBody ParticipantAccountUpdateInDto participantAccountUpdateInDto) {
        return ResponseEntity.ok(participantAccountService
                .updateParticipantAccount(participantAccountId, participantAccountUpdateInDto));
    }

}

```

## src/main/java/com/nubo/masterparticipant/api/web/controller/ParticipantAssociatedAccountRestController.java

```java
package com.nubo.masterparticipant.api.web.controller;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nubo.masterparticipant.api.models.dto.response.PageResponseOutDto;
import com.nubo.masterparticipant.api.models.dto.response.ParticipantAssociatedAccountOutDto;
import com.nubo.masterparticipant.api.models.dto.response.ParticipantBankAccountFilterOutDto;
import com.nubo.masterparticipant.api.models.enums.AccountSourceEnum;
import com.nubo.masterparticipant.api.service.ParticipantAssociatedAccountService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;


@Tag(name = "Participant associated")
@RequestMapping("/{version}/participant-associated")
@RestController
@RequiredArgsConstructor
public class ParticipantAssociatedAccountRestController {

    private final ParticipantAssociatedAccountService participantAssociatedAccountService;


    @Operation(summary = "All Participant Associated Account", description = "All Participant Associated Account")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = ParticipantAssociatedAccountOutDto[].class)))})
    @GetMapping
    public ResponseEntity<PageResponseOutDto<ParticipantAssociatedAccountOutDto>> findAllParticipantAccount(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "id") String sort,
            @RequestParam(defaultValue = "asc") String order,
            @RequestParam(defaultValue = "false") boolean all,
            @Parameter(example = "1")
            @RequestParam(required = false) Long participantId,
            @RequestParam(defaultValue = "ALL") AccountSourceEnum source,
            @Parameter(example = "1")
            @RequestParam(required = false) String depositId,
            @Parameter(example = "1")
            @RequestParam(required = false) Long accountTypeId,
            @Parameter(example = "12345")
            @RequestParam(required = false) String accountNumber,
            @Parameter(example = "1")
            @RequestParam(required = false) Long currencyId,
            @Parameter(example = "1")
            @RequestParam(required = false) String currencyName) {
        PageResponseOutDto<ParticipantAssociatedAccountOutDto> response =
                participantAssociatedAccountService.findAccountsAssociatedByParticipant(
                        participantId, source, page, size, sort, order, all,
                        depositId, accountTypeId, accountNumber, currencyId,
                        currencyName
                );
        return ResponseEntity.ok(response);
    }


    @Operation(summary = "Search Participant Bank Accounts",
            description = "Search Participant Bank Accounts By filters")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = ParticipantBankAccountFilterOutDto[].class)))})
    @GetMapping("/account-filter")
    public ResponseEntity<PageResponseOutDto<ParticipantBankAccountFilterOutDto>> searchBankAccounts(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "id") String sort,
            @RequestParam(defaultValue = "asc") String order,
            @RequestParam(defaultValue = "false") boolean all,
            @Parameter(example = "1") @RequestParam(required = false) Long participantId,
            @Parameter(example = "123456789") @RequestParam(required = false) String account,
            @Parameter(example = "950") @RequestParam(required = false) Long typeId,
            @Parameter(example = "1") @RequestParam(required = false) Long statusId
    ) {
        PageResponseOutDto<ParticipantBankAccountFilterOutDto> response =
                participantAssociatedAccountService.searchParticipantBankAccounts(
                        participantId, account, typeId, statusId, page, size, sort, order, all);

        return ResponseEntity.ok(response);
    }

}

```

## src/main/java/com/nubo/masterparticipant/api/web/controller/ParticipantAuthorizationRestController.java

```java
package com.nubo.masterparticipant.api.web.controller;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nubo.masterparticipant.api.models.dto.response.PageResponseOutDto;
import com.nubo.masterparticipant.api.models.dto.response.ParticipantAuthorizationOutDto;
import com.nubo.masterparticipant.api.service.ParticipantAuthorizationService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@Tag(name = "Participant Authorization")
@RequestMapping("/{version}/participant-authorization")
@RestController
@RequiredArgsConstructor
public class ParticipantAuthorizationRestController {

    private final ParticipantAuthorizationService participantAuthorizationService;

    @Operation(summary = "All Participant Authorizations", description = "All Participant Authorizations")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = ParticipantAuthorizationOutDto[].class)))})
    @GetMapping
    public ResponseEntity<PageResponseOutDto<ParticipantAuthorizationOutDto>> findAll(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "participant") String sort,
            @RequestParam(defaultValue = "asc") String order,
            @RequestParam(defaultValue = "false") boolean all,
            @Parameter(example = "1") @RequestParam(required = false) Long participantId,
            @Parameter(example = "2") @RequestParam(required = false) Long authorizedParticipantId,
            @Parameter(example = "3") @RequestParam(required = false) Long typeId
    ) {
        return ResponseEntity.ok(
                participantAuthorizationService.findAllParticipantAuthorization(
                        page, size, sort, order, all, participantId,
                        authorizedParticipantId, typeId)
        );
    }

}

```

## src/main/java/com/nubo/masterparticipant/api/web/controller/ParticipantEquivalenceRestController.java

```java
package com.nubo.masterparticipant.api.web.controller;

import com.nubo.masterparticipant.api.models.dto.response.DirectDepositorOutDto;
import com.nubo.masterparticipant.api.service.ParticipantEquivalenceService;
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

@Tag(name = "Participant Equivalence")
@RequestMapping("/{version}/participant-equivalence")
@RestController
@RequiredArgsConstructor
public class ParticipantEquivalenceRestController {

    private final ParticipantEquivalenceService participantEquivalenceService;

    @Operation(summary = "Find participant equivalence", description = "Find participant equivalence")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = DirectDepositorOutDto.class)))})
    @GetMapping
    public ResponseEntity<DirectDepositorOutDto> findParticipantEquivalence(@RequestParam(required = false) Long participantId,
                                                                            @RequestParam(required = false) String participantCode) {
        return ResponseEntity.ok(participantEquivalenceService.findParticipantEquivalence(participantId, participantCode));
    }

}

```

## src/main/java/com/nubo/masterparticipant/api/web/controller/ParticipantEquivalencesRestController.java

```java
package com.nubo.masterparticipant.api.web.controller;

import com.nubo.masterparticipant.api.models.dto.response.DirectDepositorOutDto;
import com.nubo.masterparticipant.api.service.ParticipantEquivalenceService;
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

import java.util.List;

@Tag(name = "Participant Equivalence")
@RequestMapping("/{version}/participant-equivalences")
@RestController
@RequiredArgsConstructor
public class ParticipantEquivalencesRestController {

    private final ParticipantEquivalenceService participantEquivalenceService;

    @Operation(summary = "Find participant equivalences", description = "Find participant equivalences")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = DirectDepositorOutDto[].class)))})
    @GetMapping
    public ResponseEntity<List<DirectDepositorOutDto>> findParticipantEquivalences(@RequestParam(required = false) Long participantId,
                                                                                   @RequestParam(required = false) String participantCode,
                                                                                   @RequestParam(required = false) Long depositoryId) {
        return ResponseEntity.ok(participantEquivalenceService.findParticipantEquivalences(participantId, participantCode, depositoryId));
    }

}

```

## src/main/java/com/nubo/masterparticipant/api/web/controller/ParticipantInvestorRestController.java

```java
package com.nubo.masterparticipant.api.web.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nubo.masterparticipant.api.models.dto.request.ParticipantInvestorInDto;
import com.nubo.masterparticipant.api.models.dto.response.PageResponseOutDto;
import com.nubo.masterparticipant.api.models.dto.response.ParticipantInvestorOutDto;
import com.nubo.masterparticipant.api.service.ParticipantInvestorService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@Tag(name = "Participant Investor")
@RequestMapping("/{version}/participant-investor")
@RestController
@RequiredArgsConstructor
public class ParticipantInvestorRestController {

    private final ParticipantInvestorService participantInvestorService;

    @Operation(summary = "Find all ParticipantInvestor", description = "Find all ParticipantInvestor")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = ParticipantInvestorOutDto[].class)))})
    @GetMapping()
    public ResponseEntity<PageResponseOutDto<ParticipantInvestorOutDto>> findAllParticipantInvestor(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "participant") String sort,
            @RequestParam(defaultValue = "asc") String order,
            @RequestParam(defaultValue = "false") boolean all,
            @Parameter(example = "1")
            @RequestParam(required = false) Long participantId,
            @Parameter(example = "1")
            @RequestParam(required = false) Long investorId) {
        return ResponseEntity.ok(participantInvestorService.findAllParticipantInvestor(
                page, size, sort, order, all, participantId, investorId));
    }

    @Operation(summary = "Create ParticipantInvestor", description = "Create ParticipantInvestor")
    @ApiResponses(value = {@ApiResponse(responseCode = "201", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = ParticipantInvestorOutDto.class)))})
    @PostMapping
    public ResponseEntity<ParticipantInvestorOutDto> createParticipantInvestor(
            @Valid @RequestBody ParticipantInvestorInDto participantInvestorInDto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(participantInvestorService
                .createParticipantInvestor(participantInvestorInDto));
    }

}

```

## src/main/java/com/nubo/masterparticipant/api/web/controller/ParticipantLoanRestController.java

```java
package com.nubo.masterparticipant.api.web.controller;

import com.nubo.masterparticipant.api.models.dto.response.PageResponseOutDto;
import com.nubo.masterparticipant.api.models.dto.response.ParticipantLoanOutDto;
import com.nubo.masterparticipant.api.service.ParticipantLoanService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Tag(name = "Participant Loan")
@RestController
@RequiredArgsConstructor
@RequestMapping("/{version}/participant-loan")
public class ParticipantLoanRestController {

    private final ParticipantLoanService participantLoanService;

    @Operation(summary = "Get participant by ID")
    @GetMapping("/id/{id}")
    public ResponseEntity<ParticipantLoanOutDto> getById(
            @PathVariable("id") Long id,
            @RequestParam(name = "types", required = false) Long[] types,
            @RequestParam(name = "countryCode", required = false) String countryCode) {
        return ResponseEntity.ok(participantLoanService.getById(id, types, countryCode));
    }

    @Operation(summary = "Get participant by code")
    @GetMapping("/code/{code}")
    public ResponseEntity<ParticipantLoanOutDto> getByCode(
            @PathVariable("code") String code,
            @RequestParam(name = "types", required = false) Long[] types,
            @RequestParam(name = "countryCode", required = false) String countryCode) {
        return ResponseEntity.ok(participantLoanService.getByCode(code, types, countryCode));
    }

    @Operation(summary = "Get participants by code prefix")
    @GetMapping("/prefix/{prefix}")
    public ResponseEntity<List<ParticipantLoanOutDto>> getByPrefix(
            @PathVariable("prefix") String prefix,
            @RequestParam(name = "types", required = false) Long[] types,
            @RequestParam(name = "countryCode", required = false) String countryCode) {
        return ResponseEntity.ok(participantLoanService.getByCodePrefix(prefix, types, countryCode));
    }

    @Operation(summary = "List all participants (paginated)")
    @GetMapping("/list")
    public ResponseEntity<PageResponseOutDto<ParticipantLoanOutDto>> list(
            @RequestParam(defaultValue = "0") Integer page,
            @RequestParam(defaultValue = "10") Integer size,
            @RequestParam(name = "types", required = false) Long[] types,
            @RequestParam(name = "countryCode", required = false) String countryCode) {
        Pageable pageable = PageRequest.of(page, size);
        return ResponseEntity.ok(participantLoanService.getAll(pageable, types, countryCode));
    }

    @Operation(summary = "Get participants by shortname prefix")
    @GetMapping("/shortname/prefix/{prefix}")
    public ResponseEntity<List<ParticipantLoanOutDto>> getByShortnamePrefix(
            @PathVariable("prefix") String prefix,
            @RequestParam(name = "types", required = false) Long[] types,
            @RequestParam(name = "countryCode", required = false) String countryCode) {
        return ResponseEntity.ok(participantLoanService.getByShortnamePrefix(prefix, types, countryCode));
    }
}

```

## src/main/java/com/nubo/masterparticipant/api/web/controller/ParticipantRestController.java

```java
package com.nubo.masterparticipant.api.web.controller;

import com.nubo.masterparticipant.api.models.dto.request.ParticipantDetailUpdateInDto;
import com.nubo.masterparticipant.api.models.dto.request.ParticipantInDto;
import com.nubo.masterparticipant.api.models.dto.request.ParticipantUpdateInDto;
import com.nubo.masterparticipant.api.models.dto.response.PageResponseOutDto;
import com.nubo.masterparticipant.api.models.dto.response.ParticipantFilterOutDto;
import com.nubo.masterparticipant.api.models.dto.response.ParticipantOutDto;
import com.nubo.masterparticipant.api.models.dto.response.ParticipantShortOutDto;
import com.nubo.masterparticipant.api.service.ParticipantService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
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

import java.util.List;

@Tag(name = "Participant")
@RequestMapping("/{version}/participant")
@RestController
@RequiredArgsConstructor
public class ParticipantRestController {

    private final ParticipantService participantService;

    @Operation(summary = "All Participant", description = "All Participant")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = ParticipantOutDto[].class)))})
    @GetMapping
    public ResponseEntity<PageResponseOutDto<ParticipantOutDto>> findAllParticipant(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "id") String sort,
            @RequestParam(defaultValue = "desc") String order,
            @RequestParam(defaultValue = "false") boolean all,
            @Parameter(example = "1")
            @RequestParam(required = false) String code,
            @Parameter(example = "1")
            @RequestParam(required = false) String name,
            @Parameter(example = "1")
            @RequestParam(required = false) String documentNumber,
            @Parameter(example = "1")
            @RequestParam(required = false) Long typeId,
            @Parameter(example = "1")
            @RequestParam(required = false) Long statusId) {
        return ResponseEntity.ok(participantService.findAllParticipant(
                page, size, sort, order, all, code, name, documentNumber, typeId, statusId));
    }

    @Operation(summary = "Participant by id", description = "Participant by id")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = ParticipantOutDto.class)))})
    @GetMapping("/{participantId}")
    public ResponseEntity<ParticipantOutDto> findParticipantById(@PathVariable Long participantId) {
        return ResponseEntity.ok(participantService.findParticipantById(participantId));
    }

    @Operation(summary = "Get Participant by Trade", description = "Get Participant by trade")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = ParticipantOutDto.class)))})
    @GetMapping("/trade/{tradeId}")
    public ResponseEntity<List<ParticipantOutDto>> getParticipantByTrade(@PathVariable Long tradeId,
                                                                         @RequestParam(defaultValue = "0") int page,
                                                                         @RequestParam(defaultValue = "10") int size) {
        return ResponseEntity.ok(participantService.getParticipantByTrade(tradeId, page, size));
    }


    @Operation(summary = "Search participant", description = "Search participant")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = ParticipantOutDto[].class)))})
    @GetMapping("/search")
    public ResponseEntity<PageResponseOutDto<ParticipantOutDto>> searchParticipant(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "id") String sort,
            @RequestParam(defaultValue = "asc") String order,
            @RequestParam(defaultValue = "false") boolean all,
            @Parameter(example = "001") @RequestParam(required = false) String text) {
        return ResponseEntity.ok(participantService.searchParticipant(
                text, page, size, sort, order, all));
    }

    @Operation(summary = "Create participant", description = "Create participant")
    @ApiResponses(value = {@ApiResponse(responseCode = "201", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = ParticipantOutDto.class)))})
    @PostMapping
    public ResponseEntity<ParticipantOutDto> createParticipant(@Valid @RequestBody ParticipantInDto participantInDto) {
        ParticipantOutDto participantOutDto = participantService.createParticipant(participantInDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(participantOutDto);
    }

    @Operation(summary = "Update participant", description = "Update participant")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = ParticipantOutDto.class)))})
    @PatchMapping("/{participantId}")
    public ResponseEntity<ParticipantOutDto> updateParticipant(@PathVariable Long participantId,
                                                               @Valid @RequestBody ParticipantUpdateInDto participantUpdateInDto) {
        ParticipantOutDto participantOutDto = participantService.updateParticipant(participantId, participantUpdateInDto);
        return ResponseEntity.ok(participantOutDto);
    }

    @Operation(summary = "Update participant", description = "Update Direct Allocation")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = ParticipantOutDto.class)))})
    @PatchMapping("/{participantId}/directAllocation/{directAllocation}")
    public ResponseEntity<ParticipantOutDto> updateDirectAllocation(@PathVariable Long participantId,
                                                                    @PathVariable String directAllocation) {
        ParticipantOutDto participantOutDto = participantService.updateDirectAllocation(participantId, directAllocation);
        return ResponseEntity.ok(participantOutDto);
    }

    @Operation(summary = "Update participant detail", description = "Update participant detail")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = ParticipantOutDto.class)))})
    @PatchMapping("/detail/{participantId}")
    public ResponseEntity<ParticipantOutDto> updateParticipantDetail(@PathVariable Long participantId,
                                                                     @Valid @RequestBody ParticipantDetailUpdateInDto participantDetailUpdateInDto) {
        return ResponseEntity.ok(participantService.updateParticipantDetail(participantId, participantDetailUpdateInDto));
    }

    @Operation(summary = "Search Participant By Code", description = "Search Participant case-insensitive By Code")
    @ApiResponse(responseCode = "200", description = "OK",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = ParticipantFilterOutDto[].class)))
    @GetMapping("/by-code")
    public ResponseEntity<PageResponseOutDto<ParticipantFilterOutDto>> searchByCode(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "id") String sort,
            @RequestParam(defaultValue = "asc") String order,
            @RequestParam(defaultValue = "false") boolean all,
            @RequestParam(required = false) String code
    ) {
        return ResponseEntity.ok(participantService.searchByCode(
                code, page, size, sort, order, all));
    }

    @Operation(summary = "Search Participant By name", description = "Search Participant case-insensitive By name")
    @ApiResponse(responseCode = "200", description = "OK",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = ParticipantFilterOutDto[].class)))
    @GetMapping("/by-name")
    public ResponseEntity<PageResponseOutDto<ParticipantFilterOutDto>> searchByName(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "id") String sort,
            @RequestParam(defaultValue = "asc") String order,
            @RequestParam(defaultValue = "false") boolean all,
            @RequestParam(required = false) String name
    ) {
        return ResponseEntity.ok(participantService.searchByName(
                name, page, size, sort, order, all));
    }

    @Operation(summary = "Search Participant By documentNumber", description = "Search Participant By documentNumber")
    @ApiResponse(responseCode = "200", description = "OK",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = String[].class)))
    @GetMapping("/identifications")
    public ResponseEntity<PageResponseOutDto<ParticipantFilterOutDto>> listIdentifications(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "id") String sort,
            @RequestParam(defaultValue = "asc") String order,
            @RequestParam(defaultValue = "false") boolean all,
            @RequestParam(required = false) String documentNumber
    ) {
        return ResponseEntity.ok(participantService.listIdentifications(
                documentNumber, page, size, sort, order, all));
    }

    @Operation(summary = "All Participant Short", description = "Get all participants with id and code only")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = ParticipantShortOutDto[].class)))})
    @GetMapping("/participant-short")
    public ResponseEntity<PageResponseOutDto<ParticipantShortOutDto>> findAllParticipantShort(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "100") int size,
            @RequestParam(defaultValue = "id") String sort,
            @RequestParam(defaultValue = "asc") String order,
            @RequestParam(defaultValue = "false") boolean all,
            @Parameter(example = "1")
            @RequestParam(required = false) String code,
            @Parameter(example = "1")
            @RequestParam(required = false) String name,
            @Parameter(example = "1")
            @RequestParam(required = false) String documentNumber,
            @Parameter(example = "1")
            @RequestParam(required = false) Long typeId,
            @Parameter(example = "1")
            @RequestParam(required = false) Long statusId,
            @Parameter(example = "1")
            @RequestParam(required = false) Long countryId) {
        return ResponseEntity.ok(participantService.findAllParticipantShort(
                page, size, sort, order, all, code, name, documentNumber, typeId, statusId, countryId));
    }

}

```

## src/main/java/com/nubo/masterparticipant/api/web/controller/ParticipantSuspendedHistoryRestController.java

```java
package com.nubo.masterparticipant.api.web.controller;

import com.nubo.masterparticipant.api.models.dto.request.ParamsPageInDto;
import com.nubo.masterparticipant.api.models.dto.response.PageResponseOutDto;
import com.nubo.masterparticipant.api.models.dto.response.ParticipantSuspendedHistoryOutDto;
import com.nubo.masterparticipant.api.service.ParticipantSuspendedHistoryService;
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

@Tag(name = "Participant Suspended History")
@RequestMapping("/{version}/participant-suspended-history")
@RestController
@RequiredArgsConstructor
public class ParticipantSuspendedHistoryRestController {

    private final ParticipantSuspendedHistoryService participantSuspendedHistoryService;

    @Operation(summary = "Find Participant Suspended History", description = "Find Participant Suspended History")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response",
                    content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                            schema = @Schema(implementation = ParticipantSuspendedHistoryOutDto[].class)))})
    @GetMapping("/search")
    public ResponseEntity<PageResponseOutDto<ParticipantSuspendedHistoryOutDto>> findParticipantSuspendedHistory(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "id") String sort,
            @RequestParam(defaultValue = "asc") String order,
            @RequestParam(required = false, name = "all", defaultValue = "false") Boolean all,
            @RequestParam Long participantId) {
        ParamsPageInDto paramsPageInDto = ParamsPageInDto.builder().page(page).size(size).sort(sort).order(order).all(all).build();
        return ResponseEntity.ok(participantSuspendedHistoryService.findParticipantSuspendedHistory(paramsPageInDto, participantId));
    }

}

```

## src/main/java/com/nubo/masterparticipant/api/web/controller/ParticipantSuspendedRestController.java

```java
package com.nubo.masterparticipant.api.web.controller;

import com.nubo.masterparticipant.api.models.dto.request.NoSuspendedParticipantInDto;
import com.nubo.masterparticipant.api.models.dto.request.SuspendedParticipantInDto;
import com.nubo.masterparticipant.api.models.dto.response.ParticipantOutDto;
import com.nubo.masterparticipant.api.models.dto.response.ParticipantSuspendedHistoryOutDto;
import com.nubo.masterparticipant.api.service.ParticipantSuspendedService;
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

@Tag(name = "Participant Suspended")
@RequestMapping("/{version}/participant-suspended")
@RestController
@RequiredArgsConstructor
public class ParticipantSuspendedRestController {

    private final ParticipantSuspendedService participantSuspendedService;

    @Operation(summary = "Suspended participant", description = "Suspended participant")
    @ApiResponses(value = {@ApiResponse(responseCode = "201", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = ParticipantSuspendedHistoryOutDto.class)))})
    @PostMapping
    public ResponseEntity<ParticipantSuspendedHistoryOutDto> suspendedParticipant(@Valid @RequestBody SuspendedParticipantInDto suspendedParticipantInDto) {
        ParticipantSuspendedHistoryOutDto participantSuspendedHistoryOutDto = participantSuspendedService.suspendedParticipant(suspendedParticipantInDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(participantSuspendedHistoryOutDto);
    }

    @Operation(summary = "No Suspended participant", description = "No Suspended participant")
    @ApiResponses(value = {@ApiResponse(responseCode = "201", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = ParticipantSuspendedHistoryOutDto.class)))})
    @PostMapping("/nosuspended")
    public ResponseEntity<ParticipantSuspendedHistoryOutDto> noSuspendedParticipant(@Valid @RequestBody NoSuspendedParticipantInDto noSuspendedParticipantInDto) {
        ParticipantSuspendedHistoryOutDto participantSuspendedHistoryOutDto = participantSuspendedService.noSuspendedParticipant(noSuspendedParticipantInDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(participantSuspendedHistoryOutDto);
    }

}

```

## src/main/java/com/nubo/masterparticipant/api/web/controller/StatusRestController.java

```java
package com.nubo.masterparticipant.api.web.controller;

import com.nubo.masterparticipant.api.models.dto.response.StatusOutDto;
import com.nubo.masterparticipant.api.service.StatusService;
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

@Tag(name = "Status")
@RequestMapping("/{version}/status")
@RestController
@RequiredArgsConstructor
public class StatusRestController {

    private final StatusService statusService;

    @Operation(summary = "Find all status", description = "Find all status")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = StatusOutDto[].class)))})
    @GetMapping
    public ResponseEntity<List<StatusOutDto>> findAllStatus(
            @Parameter(example = "CUENTA")
            @RequestParam(required = false) String category) {
        return ResponseEntity.ok(statusService.findAllStatus(category));
    }

}

```

## src/main/java/com/nubo/masterparticipant/api/web/controller/TypeRestController.java

```java
package com.nubo.masterparticipant.api.web.controller;

import com.nubo.masterparticipant.api.models.dto.response.TypeOutDto;
import com.nubo.masterparticipant.api.service.TypeService;
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
@RequestMapping("/{version}/type")
@RestController
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
    show-sql: 'true'
    open-in-view: false
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
      pool-name: @hikari.pool.name@
  jpa:
    hibernate:
      ddl-auto: none
      default_schema: NUANBODB
    show-sql: 'true'
    open-in-view: false
logging:
  config: classpath:log/log4j2.properties
  level:
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
    open-in-view: false
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
    open-in-view: false
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
    open-in-view: false
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
,--.   ,--.  ,---.   ,---.,--------.,------.,------. ,------.  ,---.  ,------.,--------.,--. ,-----.,--.,------.  ,---.  ,--.  ,--.,--------. ,---.  ,------. ,--.
|   `.'   | /  O  \ '   .-'--.  .--'|  .---'|  .--. '|  .--. '/  O  \ |  .--. '--.  .--'|  |'  .--./|  ||  .--. '/  O  \ |  ,'.|  |'--.  .--'/  O  \ |  .--. '|  |
|  |'.'|  ||  .-.  |`.  `-.  |  |   |  `--, |  '--'.'|  '--' |  .-.  ||  '--'.'  |  |   |  ||  |    |  ||  '--' |  .-.  ||  |' '  |   |  |  |  .-.  ||  '--' ||  |
|  |   |  ||  | |  |.-'    | |  |   |  `---.|  |\  \ |  | --'|  | |  ||  |\  \   |  |   |  |'  '--'\|  ||  | --'|  | |  ||  | `   |   |  |  |  | |  ||  | --' |  |
`--'   `--'`--' `--'`-----'  `--'   `------'`--' '--'`--'    `--' `--'`--' '--'  `--'   `--' `-----'`--'`--'    `--' `--'`--'  `--'   `--'  `--' `--'`--'     `--'

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
