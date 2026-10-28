# nbo-png-maestroterceros-back

Código Java de producción y configuraciones, sin tests. Cada sección contiene el archivo original completo y su ruta. Captura: 28/10/2026.

## Índice

1. `.mvn/wrapper/maven-wrapper.properties`
2. `mvnw`
3. `mvnw.cmd`
4. `pom.xml`
5. `src/main/java/com/nubo/master/third/parties/api/MasterThirdPartiesApiApplication.java`
6. `src/main/java/com/nubo/master/third/parties/api/application/annotations/ValidBigDecimal.java`
7. `src/main/java/com/nubo/master/third/parties/api/application/config/SwaggerConfig.java`
8. `src/main/java/com/nubo/master/third/parties/api/application/config/ValidBigDecimalConfig.java`
9. `src/main/java/com/nubo/master/third/parties/api/application/config/WebConfig.java`
10. `src/main/java/com/nubo/master/third/parties/api/application/context/GlobalContext.java`
11. `src/main/java/com/nubo/master/third/parties/api/application/database/NamingStrategyConfig.java`
12. `src/main/java/com/nubo/master/third/parties/api/application/database/UpperNamingConfig.java`
13. `src/main/java/com/nubo/master/third/parties/api/application/filters/GlobalFilter.java`
14. `src/main/java/com/nubo/master/third/parties/api/application/interceptors/GlobalInterceptor.java`
15. `src/main/java/com/nubo/master/third/parties/api/application/properties/PropertiesConfig.java`
16. `src/main/java/com/nubo/master/third/parties/api/application/properties/PropertiesContext.java`
17. `src/main/java/com/nubo/master/third/parties/api/application/util/ApplicationUtils.java`
18. `src/main/java/com/nubo/master/third/parties/api/exception/ServiceException.java`
19. `src/main/java/com/nubo/master/third/parties/api/exception/error/ErrorCode.java`
20. `src/main/java/com/nubo/master/third/parties/api/exception/error/ErrorResponse.java`
21. `src/main/java/com/nubo/master/third/parties/api/exception/error/ErrorValidation.java`
22. `src/main/java/com/nubo/master/third/parties/api/exception/handler/GlobalExceptionHandler.java`
23. `src/main/java/com/nubo/master/third/parties/api/helpers/InvestorAccountSpecificationBuilder.java`
24. `src/main/java/com/nubo/master/third/parties/api/helpers/InvestorAccountSpecificationFactory.java`
25. `src/main/java/com/nubo/master/third/parties/api/helpers/InvestorSpecificationBuilder.java`
26. `src/main/java/com/nubo/master/third/parties/api/helpers/InvestorSpecificationFactory.java`
27. `src/main/java/com/nubo/master/third/parties/api/helpers/MapperInvestorAccountDynamicSearch.java`
28. `src/main/java/com/nubo/master/third/parties/api/helpers/MapperInvestorDynamicSearch.java`
29. `src/main/java/com/nubo/master/third/parties/api/helpers/MapperPageUtil.java`
30. `src/main/java/com/nubo/master/third/parties/api/helpers/MapperUtil.java`
31. `src/main/java/com/nubo/master/third/parties/api/models/dto/request/EquitySecurityInDto.java`
32. `src/main/java/com/nubo/master/third/parties/api/models/dto/request/EquitySecurityUpdateInDto.java`
33. `src/main/java/com/nubo/master/third/parties/api/models/dto/request/ExchangeRateInDto.java`
34. `src/main/java/com/nubo/master/third/parties/api/models/dto/request/ExchangeRateUpdateInDto.java`
35. `src/main/java/com/nubo/master/third/parties/api/models/dto/request/FixedIncomeSecurityInDto.java`
36. `src/main/java/com/nubo/master/third/parties/api/models/dto/request/FixedIncomeSecurityUpdateInDto.java`
37. `src/main/java/com/nubo/master/third/parties/api/models/dto/request/InvestorAccountFilterRequestDto.java`
38. `src/main/java/com/nubo/master/third/parties/api/models/dto/request/InvestorAccountInDto.java`
39. `src/main/java/com/nubo/master/third/parties/api/models/dto/request/InvestorAccountUpdateInDto.java`
40. `src/main/java/com/nubo/master/third/parties/api/models/dto/request/InvestorFilterRequestDto.java`
41. `src/main/java/com/nubo/master/third/parties/api/models/dto/request/InvestorInDto.java`
42. `src/main/java/com/nubo/master/third/parties/api/models/dto/request/InvestorUpdateInDto.java`
43. `src/main/java/com/nubo/master/third/parties/api/models/dto/request/IssuerInDto.java`
44. `src/main/java/com/nubo/master/third/parties/api/models/dto/request/IssuerUpdateInDto.java`
45. `src/main/java/com/nubo/master/third/parties/api/models/dto/response/CityOutDto.java`
46. `src/main/java/com/nubo/master/third/parties/api/models/dto/response/CountryOutDto.java`
47. `src/main/java/com/nubo/master/third/parties/api/models/dto/response/CurrencyOutDto.java`
48. `src/main/java/com/nubo/master/third/parties/api/models/dto/response/CustodianRelationOutDto.java`
49. `src/main/java/com/nubo/master/third/parties/api/models/dto/response/DepartmentOutDto.java`
50. `src/main/java/com/nubo/master/third/parties/api/models/dto/response/DepositoryOutDto.java`
51. `src/main/java/com/nubo/master/third/parties/api/models/dto/response/EquitySecurityOutDto.java`
52. `src/main/java/com/nubo/master/third/parties/api/models/dto/response/ExchangeRateOutDto.java`
53. `src/main/java/com/nubo/master/third/parties/api/models/dto/response/FixedIncomeSecurityOutDto.java`
54. `src/main/java/com/nubo/master/third/parties/api/models/dto/response/GicsOutDto.java`
55. `src/main/java/com/nubo/master/third/parties/api/models/dto/response/IdentificationTypeOutDto.java`
56. `src/main/java/com/nubo/master/third/parties/api/models/dto/response/InvestorAccountOutDto.java`
57. `src/main/java/com/nubo/master/third/parties/api/models/dto/response/InvestorOutDto.java`
58. `src/main/java/com/nubo/master/third/parties/api/models/dto/response/InvestorSimpleOutDto.java`
59. `src/main/java/com/nubo/master/third/parties/api/models/dto/response/IssuerOutDto.java`
60. `src/main/java/com/nubo/master/third/parties/api/models/dto/response/JointAccountOutDto.java`
61. `src/main/java/com/nubo/master/third/parties/api/models/dto/response/PageResponseOutDto.java`
62. `src/main/java/com/nubo/master/third/parties/api/models/dto/response/ParticipantOutDto.java`
63. `src/main/java/com/nubo/master/third/parties/api/models/dto/response/StatusOutDto.java`
64. `src/main/java/com/nubo/master/third/parties/api/models/dto/response/TaxStatusOutDto.java`
65. `src/main/java/com/nubo/master/third/parties/api/models/dto/response/TypeOutDto.java`
66. `src/main/java/com/nubo/master/third/parties/api/models/dto/response/ValidateGuaranteeCalculateOutDto.java`
67. `src/main/java/com/nubo/master/third/parties/api/models/entity/CfiEntity.java`
68. `src/main/java/com/nubo/master/third/parties/api/models/entity/CityEntity.java`
69. `src/main/java/com/nubo/master/third/parties/api/models/entity/CountryEntity.java`
70. `src/main/java/com/nubo/master/third/parties/api/models/entity/CurrencyEntity.java`
71. `src/main/java/com/nubo/master/third/parties/api/models/entity/CustodianRelationEntity.java`
72. `src/main/java/com/nubo/master/third/parties/api/models/entity/DepartmentEntity.java`
73. `src/main/java/com/nubo/master/third/parties/api/models/entity/DepositoryEntity.java`
74. `src/main/java/com/nubo/master/third/parties/api/models/entity/EquitySecurityEntity.java`
75. `src/main/java/com/nubo/master/third/parties/api/models/entity/ExchangeRateEntity.java`
76. `src/main/java/com/nubo/master/third/parties/api/models/entity/FixedIncomeSecurityEntity.java`
77. `src/main/java/com/nubo/master/third/parties/api/models/entity/GicsEntity.java`
78. `src/main/java/com/nubo/master/third/parties/api/models/entity/IdentificationTypeEntity.java`
79. `src/main/java/com/nubo/master/third/parties/api/models/entity/InvestorAccountEntity.java`
80. `src/main/java/com/nubo/master/third/parties/api/models/entity/InvestorEntity.java`
81. `src/main/java/com/nubo/master/third/parties/api/models/entity/IssuerEntity.java`
82. `src/main/java/com/nubo/master/third/parties/api/models/entity/JointAccountEntity.java`
83. `src/main/java/com/nubo/master/third/parties/api/models/entity/MarketEntity.java`
84. `src/main/java/com/nubo/master/third/parties/api/models/entity/ParticipantAccountEntity.java`
85. `src/main/java/com/nubo/master/third/parties/api/models/entity/ParticipantEntity.java`
86. `src/main/java/com/nubo/master/third/parties/api/models/entity/SecurityTitleEntity.java`
87. `src/main/java/com/nubo/master/third/parties/api/models/entity/SettlementEntity.java`
88. `src/main/java/com/nubo/master/third/parties/api/models/entity/SettlementKey.java`
89. `src/main/java/com/nubo/master/third/parties/api/models/entity/SideEntity.java`
90. `src/main/java/com/nubo/master/third/parties/api/models/entity/StatusEntity.java`
91. `src/main/java/com/nubo/master/third/parties/api/models/entity/TaxStatusEntity.java`
92. `src/main/java/com/nubo/master/third/parties/api/models/entity/TradeEntity.java`
93. `src/main/java/com/nubo/master/third/parties/api/models/entity/TradingSessionEntity.java`
94. `src/main/java/com/nubo/master/third/parties/api/models/entity/TradingSystemEntity.java`
95. `src/main/java/com/nubo/master/third/parties/api/models/entity/TypeEntity.java`
96. `src/main/java/com/nubo/master/third/parties/api/models/enums/PrincipalStatusEnum.java`
97. `src/main/java/com/nubo/master/third/parties/api/models/enums/PropertiesEnum.java`
98. `src/main/java/com/nubo/master/third/parties/api/models/enums/ReasonGuaranteeVolumeEnum.java`
99. `src/main/java/com/nubo/master/third/parties/api/models/enums/RelationalTypeEnum.java`
100. `src/main/java/com/nubo/master/third/parties/api/models/enums/SearchOperationEnum.java`
101. `src/main/java/com/nubo/master/third/parties/api/models/enums/StatusCustodianRelationEnum.java`
102. `src/main/java/com/nubo/master/third/parties/api/models/enums/StatusInvestorEnum.java`
103. `src/main/java/com/nubo/master/third/parties/api/models/enums/VersionApiEnum.java`
104. `src/main/java/com/nubo/master/third/parties/api/repository/CityRepository.java`
105. `src/main/java/com/nubo/master/third/parties/api/repository/CountryRepository.java`
106. `src/main/java/com/nubo/master/third/parties/api/repository/CurrencyRepository.java`
107. `src/main/java/com/nubo/master/third/parties/api/repository/CustodianRelationRepository.java`
108. `src/main/java/com/nubo/master/third/parties/api/repository/DepartmentRepository.java`
109. `src/main/java/com/nubo/master/third/parties/api/repository/DepositoryRepository.java`
110. `src/main/java/com/nubo/master/third/parties/api/repository/EquitySecurityRepository.java`
111. `src/main/java/com/nubo/master/third/parties/api/repository/ExchangeRateRepository.java`
112. `src/main/java/com/nubo/master/third/parties/api/repository/FixedIncomeSecurityRepository.java`
113. `src/main/java/com/nubo/master/third/parties/api/repository/GicsRepository.java`
114. `src/main/java/com/nubo/master/third/parties/api/repository/IdentificationTypeRepository.java`
115. `src/main/java/com/nubo/master/third/parties/api/repository/InvestorAccountRepository.java`
116. `src/main/java/com/nubo/master/third/parties/api/repository/InvestorRepository.java`
117. `src/main/java/com/nubo/master/third/parties/api/repository/IssuerRepository.java`
118. `src/main/java/com/nubo/master/third/parties/api/repository/JointAccountRepository.java`
119. `src/main/java/com/nubo/master/third/parties/api/repository/ParticipantAccountRepository.java`
120. `src/main/java/com/nubo/master/third/parties/api/repository/ParticipantRepository.java`
121. `src/main/java/com/nubo/master/third/parties/api/repository/SecurityTitleRepository.java`
122. `src/main/java/com/nubo/master/third/parties/api/repository/StatusRepository.java`
123. `src/main/java/com/nubo/master/third/parties/api/repository/TaxStatusRepository.java`
124. `src/main/java/com/nubo/master/third/parties/api/repository/TypeRepository.java`
125. `src/main/java/com/nubo/master/third/parties/api/service/CustodianRelationService.java`
126. `src/main/java/com/nubo/master/third/parties/api/service/EquitySecurityService.java`
127. `src/main/java/com/nubo/master/third/parties/api/service/ExchangeRateService.java`
128. `src/main/java/com/nubo/master/third/parties/api/service/FixedIncomeSecurityService.java`
129. `src/main/java/com/nubo/master/third/parties/api/service/InvestorAccountService.java`
130. `src/main/java/com/nubo/master/third/parties/api/service/InvestorService.java`
131. `src/main/java/com/nubo/master/third/parties/api/service/IssuerService.java`
132. `src/main/java/com/nubo/master/third/parties/api/service/JointAccountService.java`
133. `src/main/java/com/nubo/master/third/parties/api/service/StatusService.java`
134. `src/main/java/com/nubo/master/third/parties/api/service/impl/CustodianRelationServiceImpl.java`
135. `src/main/java/com/nubo/master/third/parties/api/service/impl/EquitySecurityServiceImpl.java`
136. `src/main/java/com/nubo/master/third/parties/api/service/impl/ExchangeRateServiceImpl.java`
137. `src/main/java/com/nubo/master/third/parties/api/service/impl/FixedIncomeSecurityServiceImpl.java`
138. `src/main/java/com/nubo/master/third/parties/api/service/impl/InvestorAccountServiceImpl.java`
139. `src/main/java/com/nubo/master/third/parties/api/service/impl/InvestorServiceImpl.java`
140. `src/main/java/com/nubo/master/third/parties/api/service/impl/IssuerServiceImpl.java`
141. `src/main/java/com/nubo/master/third/parties/api/service/impl/JointAccountServiceImpl.java`
142. `src/main/java/com/nubo/master/third/parties/api/service/impl/StatusServiceImpl.java`
143. `src/main/java/com/nubo/master/third/parties/api/web/controller/CustodianRelationRestController.java`
144. `src/main/java/com/nubo/master/third/parties/api/web/controller/EquitySecurityRestController.java`
145. `src/main/java/com/nubo/master/third/parties/api/web/controller/ExchangeRateRestController.java`
146. `src/main/java/com/nubo/master/third/parties/api/web/controller/FixedIncomeSecurityRestController.java`
147. `src/main/java/com/nubo/master/third/parties/api/web/controller/InvestorAccountRestController.java`
148. `src/main/java/com/nubo/master/third/parties/api/web/controller/InvestorRestController.java`
149. `src/main/java/com/nubo/master/third/parties/api/web/controller/IssuerRestController.java`
150. `src/main/java/com/nubo/master/third/parties/api/web/controller/JointAccountRestController.java`
151. `src/main/java/com/nubo/master/third/parties/api/web/controller/StatusRestController.java`
152. `src/main/resources/application-dev.yml`
153. `src/main/resources/application-local.yml`
154. `src/main/resources/application-prod.yml`
155. `src/main/resources/application-qa.yml`
156. `src/main/resources/application-uat.yml`
157. `src/main/resources/application.yml`
158. `src/main/resources/banner.txt`
159. `src/main/resources/log/JsonEventLayout_error.json`
160. `src/main/resources/log/JsonEventLayout_info.json`
161. `src/main/resources/log/JsonEventLayout_trace.json`
162. `src/main/resources/log/log4j2-prod.properties`
163. `src/main/resources/log/log4j2.properties`

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
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">

    <modelVersion>4.0.0</modelVersion>

    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>3.5.15</version>
        <relativePath/>
    </parent>

    <groupId>com.nubo.master.third.parties.api</groupId>
    <artifactId>master-third-parties-api</artifactId>
    <version>0.68.0-beta.6</version>
    <name>${project.artifactId}</name>
    <description>Master Third Parties Api</description>

    <properties>
        <java.version>17</java.version>
        <spring.port>8080</spring.port>
        <test.skip>false</test.skip>

        <datasource.url.application.name>ApplicationName=${project.artifactId}</datasource.url.application.name>
        <hikari.pool.name>${project.artifactId}-pool</hikari.pool.name>

        <!-- Vulnerability fixes / dependency alignment -->
        <spring-framework.version>6.2.19</spring-framework.version>
        <jackson-bom.version>2.22.0</jackson-bom.version>
        <log4j2.version>2.26.0</log4j2.version>
        <tomcat.version>10.1.55</tomcat.version>
        <postgresql.version>42.7.11</postgresql.version>
        <commons-lang3.version>3.18.0</commons-lang3.version>
        <springdoc-openapi.version>2.8.16</springdoc-openapi.version>
        <gson.version>2.13.2</gson.version>
        <xmlunit.version>2.12.0</xmlunit.version>
        <jacoco.version>0.8.12</jacoco.version>
    </properties>

    <dependencyManagement>
        <dependencies>

            <!-- Align all Jackson modules: jackson-core, jackson-databind, jackson-annotations, etc. -->
            <dependency>
                <groupId>com.fasterxml.jackson</groupId>
                <artifactId>jackson-bom</artifactId>
                <version>${jackson-bom.version}</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>

            <!-- Align all Log4j artifacts -->
            <dependency>
                <groupId>org.apache.logging.log4j</groupId>
                <artifactId>log4j-bom</artifactId>
                <version>${log4j2.version}</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>

            <!-- Force patched commons-lang3 -->
            <dependency>
                <groupId>org.apache.commons</groupId>
                <artifactId>commons-lang3</artifactId>
                <version>${commons-lang3.version}</version>
            </dependency>

            <!-- Force patched Gson -->
            <dependency>
                <groupId>com.google.code.gson</groupId>
                <artifactId>gson</artifactId>
                <version>${gson.version}</version>
            </dependency>

            <!-- Force patched XMLUnit for tests -->
            <dependency>
                <groupId>org.xmlunit</groupId>
                <artifactId>xmlunit-core</artifactId>
                <version>${xmlunit.version}</version>
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

        <!-- Commons -->
        <dependency>
            <groupId>org.apache.commons</groupId>
            <artifactId>commons-lang3</artifactId>
        </dependency>

        <!-- Logging with Log4j2 -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-log4j2</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-jcl</artifactId>
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

        <!-- Swagger / OpenAPI -->
        <dependency>
            <groupId>org.springdoc</groupId>
            <artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>
            <version>${springdoc-openapi.version}</version>
            <exclusions>
                <exclusion>
                    <groupId>org.apache.commons</groupId>
                    <artifactId>commons-lang3</artifactId>
                </exclusion>
            </exclusions>
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

        <!-- JSON -->
        <dependency>
            <groupId>com.google.code.gson</groupId>
            <artifactId>gson</artifactId>
        </dependency>

        <!-- Test -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
            <exclusions>
                <exclusion>
                    <groupId>org.xmlunit</groupId>
                    <artifactId>xmlunit-core</artifactId>
                </exclusion>
            </exclusions>
        </dependency>

        <dependency>
            <groupId>org.xmlunit</groupId>
            <artifactId>xmlunit-core</artifactId>
            <scope>test</scope>
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
                <version>${jacoco.version}</version>
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
                                <exclude>**/MasterThirdPartiesApiApplication.class</exclude>
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

## src/main/java/com/nubo/master/third/parties/api/MasterThirdPartiesApiApplication.java

```java
package com.nubo.master.third.parties.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MasterThirdPartiesApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(MasterThirdPartiesApiApplication.class, args);
	}

}

```

## src/main/java/com/nubo/master/third/parties/api/application/annotations/ValidBigDecimal.java

```java
package com.nubo.master.third.parties.api.application.annotations;

import com.nubo.master.third.parties.api.application.config.ValidBigDecimalConfig;
import jakarta.validation.Constraint;
import jakarta.validation.Payload;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Constraint(validatedBy = ValidBigDecimalConfig.class)
@Target({ElementType.METHOD, ElementType.FIELD, ElementType.ANNOTATION_TYPE, ElementType.PARAMETER})
@Retention(RetentionPolicy.RUNTIME)
public @interface ValidBigDecimal {
    String message() default "";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};

    int precision();

    int scale();
}
```

## src/main/java/com/nubo/master/third/parties/api/application/config/SwaggerConfig.java

```java
package com.nubo.master.third.parties.api.application.config;

import com.nubo.master.third.parties.api.exception.error.ErrorResponse;
import com.nubo.master.third.parties.api.exception.error.ErrorValidation;
import com.nubo.master.third.parties.api.models.enums.PropertiesEnum;
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

## src/main/java/com/nubo/master/third/parties/api/application/config/ValidBigDecimalConfig.java

```java
package com.nubo.master.third.parties.api.application.config;

import com.nubo.master.third.parties.api.application.annotations.ValidBigDecimal;
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

## src/main/java/com/nubo/master/third/parties/api/application/config/WebConfig.java

```java
package com.nubo.master.third.parties.api.application.config;

import com.nubo.master.third.parties.api.application.interceptors.GlobalInterceptor;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.http.HttpMethod;
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

}

```

## src/main/java/com/nubo/master/third/parties/api/application/context/GlobalContext.java

```java
package com.nubo.master.third.parties.api.application.context;

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

## src/main/java/com/nubo/master/third/parties/api/application/database/NamingStrategyConfig.java

```java
package com.nubo.master.third.parties.api.application.database;

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

## src/main/java/com/nubo/master/third/parties/api/application/database/UpperNamingConfig.java

```java
package com.nubo.master.third.parties.api.application.database;

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

## src/main/java/com/nubo/master/third/parties/api/application/filters/GlobalFilter.java

```java
package com.nubo.master.third.parties.api.application.filters;

import com.nubo.master.third.parties.api.application.context.GlobalContext;
import com.nubo.master.third.parties.api.application.util.ApplicationUtils;
import com.nubo.master.third.parties.api.exception.ServiceException;
import com.nubo.master.third.parties.api.exception.error.ErrorCode;
import com.nubo.master.third.parties.api.exception.error.ErrorResponse;
import com.nubo.master.third.parties.api.models.enums.PropertiesEnum;
import com.nubo.master.third.parties.api.models.enums.VersionApiEnum;
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

## src/main/java/com/nubo/master/third/parties/api/application/interceptors/GlobalInterceptor.java

```java
package com.nubo.master.third.parties.api.application.interceptors;

import com.nubo.master.third.parties.api.application.context.GlobalContext;
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

## src/main/java/com/nubo/master/third/parties/api/application/properties/PropertiesConfig.java

```java
package com.nubo.master.third.parties.api.application.properties;

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

## src/main/java/com/nubo/master/third/parties/api/application/properties/PropertiesContext.java

```java
package com.nubo.master.third.parties.api.application.properties;

import com.nubo.master.third.parties.api.application.context.GlobalContext;
import com.nubo.master.third.parties.api.application.util.ApplicationUtils;
import com.nubo.master.third.parties.api.models.enums.PropertiesEnum;
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

## src/main/java/com/nubo/master/third/parties/api/application/util/ApplicationUtils.java

```java
package com.nubo.master.third.parties.api.application.util;

import com.google.gson.Gson;

import java.lang.reflect.Type;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

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

## src/main/java/com/nubo/master/third/parties/api/exception/ServiceException.java

```java
package com.nubo.master.third.parties.api.exception;

import com.nubo.master.third.parties.api.exception.error.ErrorCode;
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

## src/main/java/com/nubo/master/third/parties/api/exception/error/ErrorCode.java

```java
package com.nubo.master.third.parties.api.exception.error;

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
    GICS_NOT_FOUND("Gics not found"),
    TAX_STATUS_NOT_FOUND("Tax Status not found"),
    DEPOSITORY_NOT_FOUND("Depository not found"),
    IDENTIFICATION_TYPE_NOT_FOUND("Identification Type not found");

    private final String message;

    ErrorCode(String message) {
        this.message = message;
    }

    public String getName() {
        return this.name();
    }

}

```

## src/main/java/com/nubo/master/third/parties/api/exception/error/ErrorResponse.java

```java
package com.nubo.master.third.parties.api.exception.error;

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

## src/main/java/com/nubo/master/third/parties/api/exception/error/ErrorValidation.java

```java
package com.nubo.master.third.parties.api.exception.error;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ErrorValidation {

    private String id;
    private String description;

}

```

## src/main/java/com/nubo/master/third/parties/api/exception/handler/GlobalExceptionHandler.java

```java
package com.nubo.master.third.parties.api.exception.handler;

import com.nubo.master.third.parties.api.application.properties.PropertiesContext;
import com.nubo.master.third.parties.api.exception.ServiceException;
import com.nubo.master.third.parties.api.exception.error.ErrorCode;
import com.nubo.master.third.parties.api.exception.error.ErrorResponse;
import com.nubo.master.third.parties.api.exception.error.ErrorValidation;
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

## src/main/java/com/nubo/master/third/parties/api/helpers/InvestorAccountSpecificationBuilder.java

```java
package com.nubo.master.third.parties.api.helpers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.jpa.domain.Specification;

import com.nubo.master.third.parties.api.models.entity.InvestorAccountEntity;
import com.nubo.master.third.parties.api.models.enums.PrincipalStatusEnum;
import com.nubo.master.third.parties.api.models.enums.RelationalTypeEnum;
import com.nubo.master.third.parties.api.models.enums.SearchOperationEnum;

import jakarta.persistence.criteria.Path;

public class InvestorAccountSpecificationBuilder {
    
    private final List<Specification<InvestorAccountEntity>> specifications = new ArrayList<>();

    public static InvestorAccountSpecificationBuilder builder() {
        return new InvestorAccountSpecificationBuilder();
    }
    
    public InvestorAccountSpecificationBuilder withInvestorId(Long investorId) {
        if (investorId != null) {
            specifications.add((root, query, cb) -> 
                cb.equal(root.get("investor").get("id"), investorId));
        }
        return this;
    }

    public InvestorAccountSpecificationBuilder withAccountNumber(String accountNumber) {
        if (accountNumber != null) {
            specifications.add((root, query, cb) -> 
                cb.equal(root.get("accountNumber"), accountNumber));
        }
        return this;
    }

    public InvestorAccountSpecificationBuilder withStatusId(Long statusId) {
        if (statusId != null) {
            specifications.add((root, query, cb) -> 
                cb.equal(root.get("status").get("id"), statusId));
        }
        return this;
    }

    public InvestorAccountSpecificationBuilder withTypeId(Long typeId) {
        if (typeId != null) {
            specifications.add((root, query, cb) -> 
                cb.equal(root.get("type").get("id"), typeId));
        }
        return this;
    }

    public InvestorAccountSpecificationBuilder withDepositoryId(String depositoryId) {
        if (depositoryId != null) {
            specifications.add((root, query, cb) -> 
                cb.equal(root.get("depository").get("id"), depositoryId));
        }
        return this;
    }

    public InvestorAccountSpecificationBuilder withParticipantId(Long participantId) {
        if (participantId != null) {
            specifications.add((root, query, cb) -> 
                cb.equal(root.get("participant").get("id"), participantId));
        }
        return this;
    }

    public InvestorAccountSpecificationBuilder withPrincipalStatus(String principalStatus) {
        if (principalStatus != null) {
            Boolean booleanValue = PrincipalStatusEnum.toBoolean(principalStatus);
            if (booleanValue != null) {
                specifications.add((root, query, cb) -> 
                    cb.equal(root.get("accountPrincipal"), booleanValue));
            }
        }
        return this;
    }

    public InvestorAccountSpecificationBuilder withRelationalType(String relationalType) {
        if (relationalType != null) {
            Integer integerValue = RelationalTypeEnum.toInteger(relationalType);
            if (integerValue != null) {
                specifications.add((root, query, cb) -> 
                    cb.equal(root.get("relationInvestor"), integerValue));
            }
        }
        return this;
    }

    public InvestorAccountSpecificationBuilder withDynamicFilter(String fieldName, String fieldValue, SearchOperationEnum operation) {
        if (fieldName != null && fieldValue != null && operation != null) {
            specifications.add((root, query, cb) -> {
                try {
                    Path<?> fieldPath = MapperInvestorAccountDynamicSearch.getInvestorAccountFieldPath(root, fieldName);
                    if (fieldPath != null) {
                        return MapperInvestorAccountDynamicSearch.buildInvestorAccountFieldPredicate(cb, fieldPath, fieldValue, operation, fieldName);
                    }
                    return cb.conjunction(); 
                } catch (Exception e) {
                    return cb.conjunction(); 
                }
            });
        }
        return this;
    }

    public Specification<InvestorAccountEntity> build() {
        return specifications.stream()
                .reduce(Specification::and)
                .orElse((root, query, cb) -> cb.conjunction());
    }
}

```

## src/main/java/com/nubo/master/third/parties/api/helpers/InvestorAccountSpecificationFactory.java

```java
package com.nubo.master.third.parties.api.helpers;

import org.springframework.data.jpa.domain.Specification;

import com.nubo.master.third.parties.api.models.dto.request.InvestorAccountFilterRequestDto;
import com.nubo.master.third.parties.api.models.entity.InvestorAccountEntity;
import com.nubo.master.third.parties.api.models.enums.SearchOperationEnum;

import jakarta.persistence.criteria.Path;

public class InvestorAccountSpecificationFactory {
    
    private InvestorAccountSpecificationFactory() {
        throw new IllegalStateException("Utility class");
    }
    
    public static Specification<InvestorAccountEntity> createStandardFilter(
            InvestorAccountFilterRequestDto filter, Long investorId) {
        
        return InvestorAccountSpecificationBuilder.builder()
                .withInvestorId(investorId)
                .withAccountNumber(filter.getAccountNumber())
                .withStatusId(filter.getStatusId())
                .withTypeId(filter.getTypeId())
                .withDepositoryId(filter.getDepositoryId())
                .withParticipantId(filter.getParticipantId())
                .withPrincipalStatus(filter.getPrincipalStatus())
                .withRelationalType(filter.getRelationalType())
                .build();
    }

    public static Specification<InvestorAccountEntity> createDynamicFilter(
            String fieldName, String fieldValue, SearchOperationEnum operation) {
        
        return (root, query, cb) -> {
            try {
                Path<?> fieldPath = MapperInvestorAccountDynamicSearch
                    .getInvestorAccountFieldPath(root, fieldName);
                if (fieldPath != null) {
                    return MapperInvestorAccountDynamicSearch
                        .buildInvestorAccountFieldPredicate(cb, fieldPath, fieldValue, operation, fieldName);
                }
                return cb.conjunction();
            } catch (Exception e) {
                return cb.conjunction();
            }
        };
    }
    
    public static Specification<InvestorAccountEntity> createCombinedFilter(
            InvestorAccountFilterRequestDto filter, 
            Long investorId,
            String fieldName, String fieldValue, SearchOperationEnum operation) {
        
        return InvestorAccountSpecificationBuilder.builder()
                .withInvestorId(investorId)
                .withAccountNumber(filter.getAccountNumber())
                .withStatusId(filter.getStatusId())
                .withTypeId(filter.getTypeId())
                .withDepositoryId(filter.getDepositoryId())
                .withParticipantId(filter.getParticipantId())
                .withPrincipalStatus(filter.getPrincipalStatus())
                .withRelationalType(filter.getRelationalType())
                .withDynamicFilter(fieldName, fieldValue, operation)
                .build();
    }

    public static Specification<InvestorAccountEntity> createInvestorFilter(Long investorId) {
        return InvestorAccountSpecificationBuilder.builder()
                .withInvestorId(investorId)
                .build();
    }
}

```

## src/main/java/com/nubo/master/third/parties/api/helpers/InvestorSpecificationBuilder.java

```java
package com.nubo.master.third.parties.api.helpers;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.criteria.Predicate;
import org.springframework.data.jpa.domain.Specification;

import com.nubo.master.third.parties.api.models.entity.InvestorEntity;
import com.nubo.master.third.parties.api.models.enums.SearchOperationEnum;

import jakarta.persistence.criteria.Path;

public class InvestorSpecificationBuilder {

    private static final String COMPANY_NAME_FIELD = "companyName";

    private final List<Specification<InvestorEntity>> specifications = new ArrayList<>();

    public static InvestorSpecificationBuilder builder() {
        return new InvestorSpecificationBuilder();
    }

    public InvestorSpecificationBuilder withCompanyName(String companyName) {
        if (companyName != null && !companyName.trim().isEmpty()) {
            String value = companyName.trim().toLowerCase();

            specifications.add((root, query, cb) ->
                    cb.equal(
                            cb.lower(root.get(COMPANY_NAME_FIELD)),
                            value
                    )
            );
        }
        return this;
    }

    public InvestorSpecificationBuilder withDocumentNumber(String documentNumber) {
        if (documentNumber != null && !documentNumber.trim().isEmpty()) {
            specifications.add((root, query, cb) ->
                    cb.like(root.get("documentNumber"), documentNumber.trim() + "%"));
        }
        return this;
    }

    public InvestorSpecificationBuilder withCountryId(Long countryId) {
        if (countryId != null) {
            specifications.add((root, query, cb) ->
                    cb.equal(root.get("country").get("id"), countryId));
        }
        return this;
    }

    public InvestorSpecificationBuilder withStatusId(Long statusId) {
        if (statusId != null) {
            specifications.add((root, query, cb) ->
                    cb.equal(root.get("status").get("id"), statusId));
        }
        return this;
    }

    public InvestorSpecificationBuilder withInvestorId(Long investorId) {
        if (investorId != null) {
            specifications.add((root, query, cb) ->
                    cb.equal(root.get("id"), investorId));
        }
        return this;
    }

    public InvestorSpecificationBuilder withDynamicFilter(String fieldName, String fieldValue, SearchOperationEnum operation) {
        if (fieldName != null && fieldValue != null && operation != null) {
            specifications.add((root, query, cb) -> {
                try {
                    Path<?> fieldPath = MapperInvestorDynamicSearch.getInvestorFieldPath(root, fieldName);

                    if (fieldPath == null) {
                        return cb.conjunction();
                    }

                    Predicate predicate = MapperInvestorDynamicSearch.buildInvestorFieldPredicate(
                            cb,
                            fieldPath,
                            fieldValue,
                            operation
                    );

                    return predicate != null ? predicate : cb.conjunction();

                } catch (Exception e) {
                    return cb.conjunction();
                }
            });
        }
        return this;
    }

    public Specification<InvestorEntity> build() {
        return specifications.stream()
                .reduce(Specification::and)
                .orElse(null);
    }
}
```

## src/main/java/com/nubo/master/third/parties/api/helpers/InvestorSpecificationFactory.java

```java
package com.nubo.master.third.parties.api.helpers;

import org.springframework.data.jpa.domain.Specification;

import com.nubo.master.third.parties.api.models.dto.request.InvestorFilterRequestDto;
import com.nubo.master.third.parties.api.models.entity.InvestorEntity;
import com.nubo.master.third.parties.api.models.enums.SearchOperationEnum;

import jakarta.persistence.criteria.Path;

public class InvestorSpecificationFactory {
    
    private InvestorSpecificationFactory() {
        throw new IllegalStateException("Utility class");
    }
    
    public static Specification<InvestorEntity> createStandardFilter(InvestorFilterRequestDto filter) {
        return InvestorSpecificationBuilder.builder()
                .withCompanyName(filter.getCompanyName())
                .withDocumentNumber(filter.getDocumentNumber())
                .withCountryId(filter.getCountryId())
                .withStatusId(filter.getStatusId())
                .withInvestorId(filter.getInvestorId())
                .build();
    }

    public static Specification<InvestorEntity> createDynamicFilter(
            String fieldName, String fieldValue, SearchOperationEnum operation) {
        
        return (root, query, cb) -> {
            try {
                Path<?> fieldPath = MapperInvestorDynamicSearch.getInvestorFieldPath(root, fieldName);
                if (fieldPath != null) {
                    return MapperInvestorDynamicSearch.buildInvestorFieldPredicate(cb, fieldPath, fieldValue, operation);
                }
                return cb.conjunction();
            } catch (Exception e) {
                return cb.conjunction();
            }
        };
    }
    
    public static Specification<InvestorEntity> createCombinedFilter(
            InvestorFilterRequestDto filter,
            String fieldName, String fieldValue, SearchOperationEnum operation) {
        
        return InvestorSpecificationBuilder.builder()
                .withCompanyName(filter.getCompanyName())
                .withDocumentNumber(filter.getDocumentNumber())
                .withCountryId(filter.getCountryId())
                .withStatusId(filter.getStatusId())
                .withInvestorId(filter.getInvestorId())
                .withDynamicFilter(fieldName, fieldValue, operation)
                .build();
    }

    public static Specification<InvestorEntity> createCountryStatusFilter(Long countryId, Long statusId) {
        return InvestorSpecificationBuilder.builder()
                .withCountryId(countryId)
                .withStatusId(statusId)
                .build();
    }
    
    public static Specification<InvestorEntity> createNameFilter(String companyName) {
        return InvestorSpecificationBuilder.builder()
                .withCompanyName(companyName)
                .build();
    }
}

```

## src/main/java/com/nubo/master/third/parties/api/helpers/MapperInvestorAccountDynamicSearch.java

```java
package com.nubo.master.third.parties.api.helpers;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.Map;
import java.util.function.Function;

import com.nubo.master.third.parties.api.models.entity.InvestorAccountEntity;
import com.nubo.master.third.parties.api.models.enums.PrincipalStatusEnum;
import com.nubo.master.third.parties.api.models.enums.RelationalTypeEnum;
import com.nubo.master.third.parties.api.models.enums.SearchOperationEnum;

import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.Path;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class MapperInvestorAccountDynamicSearch {

    private enum ComparisonType {
        GREATER_THAN, GREATER_THAN_OR_EQUAL, LESS_THAN, LESS_THAN_OR_EQUAL
    }

    private static final Map<String, Function<Root<InvestorAccountEntity>, Path<?>>> FIELD_PATH_MAPPING = Map.ofEntries(
        Map.entry("id", root -> root.get("id")),
        Map.entry("investorId", root -> root.get("investor").get("id")),
        Map.entry("investorCode", root -> root.get("investor").get("code")),
        Map.entry("investorFirstName", root -> root.get("investor").get("firstName")),
        Map.entry("investorLastName", root -> root.get("investor").get("lastName")),
        Map.entry("accountNumber", root -> root.get("accountNumber")),
        Map.entry("statusId", root -> root.get("status").get("id")),
        Map.entry("statusDescription", root -> root.get("status").get("description")),
        Map.entry("statusCategory", root -> root.get("status").get("category")),
        Map.entry("typeId", root -> root.get("type").get("id")),
        Map.entry("typeDescription", root -> root.get("type").get("description")),
        Map.entry("typeCategory", root -> root.get("type").get("category")),
        Map.entry("depositoryId", root -> root.get("depository").get("id")),
        Map.entry("depositoryDescription", root -> root.get("depository").get("description")),
        Map.entry("participantId", root -> root.get("participant").get("id")),
        Map.entry("participantDescription", root -> root.get("participant").get("description")),
        Map.entry("accountPrincipal", root -> root.get("accountPrincipal")),
        Map.entry("relationInvestor", root -> root.get("relationInvestor"))
    );

    private static final Map<Class<?>, Function<String, Object>> TYPE_PARSERS = Map.of(
        Long.class, Long::valueOf,
        long.class, Long::valueOf,
        Integer.class, Integer::valueOf,
        int.class, Integer::valueOf,
        Boolean.class, Boolean::valueOf,
        boolean.class, Boolean::valueOf,
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
        Map.entry(SearchOperationEnum.CONTAINS, (cb, path, value) -> 
            cb.like(cb.lower(path.as(String.class)), "%" + value.toLowerCase() + "%")),
        Map.entry(SearchOperationEnum.NOT_CONTAINS, (cb, path, value) -> 
            cb.notLike(cb.lower(path.as(String.class)), "%" + value.toLowerCase() + "%")),
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
        Map.entry(SearchOperationEnum.STARTS_WITH, (cb, path, value) -> 
            cb.like(cb.lower(path.as(String.class)), value.toLowerCase() + "%")),
        Map.entry(SearchOperationEnum.ENDS_WITH, (cb, path, value) -> 
            cb.like(cb.lower(path.as(String.class)), "%" + value.toLowerCase())),
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

    public static Path<?> getInvestorAccountFieldPath(Root<InvestorAccountEntity> root, String fieldName) {
        try {
            Function<Root<InvestorAccountEntity>, Path<?>> pathFunction = FIELD_PATH_MAPPING.get(fieldName);
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

    public static Predicate buildInvestorAccountFieldPredicate(CriteriaBuilder criteriaBuilder, 
                                                              Path<?> fieldPath, 
                                                              String fieldValue, 
                                                              SearchOperationEnum operation,
                                                              String fieldName) {
        try {
       
            if ("relationInvestor".equals(fieldName)) {
                Integer integerValue = RelationalTypeEnum.toInteger(fieldValue);
                if (integerValue != null) {
                    fieldValue = integerValue.toString();
                }
            }
            
            if ("principalStatus".equals(fieldName)) {
                Boolean booleanValue = PrincipalStatusEnum.toBoolean(fieldValue);
                if (booleanValue != null) {
                    fieldValue = booleanValue.toString();
                }
            }
            
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

    private static boolean isValidComparisonType(ComparisonType comparisonType) {
        return comparisonType == ComparisonType.GREATER_THAN ||
               comparisonType == ComparisonType.GREATER_THAN_OR_EQUAL ||
               comparisonType == ComparisonType.LESS_THAN ||
               comparisonType == ComparisonType.LESS_THAN_OR_EQUAL;
    }

    private static Predicate createNumberComparisonPredicate(CriteriaBuilder criteriaBuilder,
                                                           Path<Number> numberPath,
                                                           Number numberValue,
                                                           ComparisonType comparisonType) {
        return switch (comparisonType) {
            case GREATER_THAN -> criteriaBuilder.gt(numberPath, numberValue);
            case GREATER_THAN_OR_EQUAL -> criteriaBuilder.ge(numberPath, numberValue);
            case LESS_THAN -> criteriaBuilder.lt(numberPath, numberValue);
            case LESS_THAN_OR_EQUAL -> criteriaBuilder.le(numberPath, numberValue);
            default -> {
                log.warn("Operación de comparación numérica no reconocida: {}", comparisonType);
                yield null;
            }
        };
    }

    private static Predicate createComparableComparisonPredicate(CriteriaBuilder criteriaBuilder,
                                                               Path<Comparable<Object>> comparablePath,
                                                               Comparable<Object> comparableValue,
                                                               ComparisonType comparisonType) {
        return switch (comparisonType) {
            case GREATER_THAN -> criteriaBuilder.greaterThan(comparablePath, comparableValue);
            case GREATER_THAN_OR_EQUAL -> criteriaBuilder.greaterThanOrEqualTo(comparablePath, comparableValue);
            case LESS_THAN -> criteriaBuilder.lessThan(comparablePath, comparableValue);
            case LESS_THAN_OR_EQUAL -> criteriaBuilder.lessThanOrEqualTo(comparablePath, comparableValue);
            default -> {
                log.warn("Operación de comparación no reconocida: {}", comparisonType);
                yield null;
            }
        };
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
                
                if (!isValidComparisonType(comparisonType)) {
                    log.warn("Tipo de comparación no válido: {}", comparisonType);
                    return null;
                }
                
                return createNumberComparisonPredicate(criteriaBuilder, numberPath, numberValue, comparisonType);
                
            } else if (Comparable.class.isAssignableFrom(fieldType)) {
                Path<Comparable<Object>> comparablePath = (Path<Comparable<Object>>) fieldPath;
                Comparable<Object> comparableValue = (Comparable<Object>) parsedValue;
                
                if (!isValidComparisonType(comparisonType)) {
                    log.warn("Tipo de comparación no válido: {}", comparisonType);
                    return null;
                }
                
                return createComparableComparisonPredicate(criteriaBuilder, comparablePath, comparableValue, comparisonType);
                
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

## src/main/java/com/nubo/master/third/parties/api/helpers/MapperInvestorDynamicSearch.java

```java
package com.nubo.master.third.parties.api.helpers;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Map;
import java.util.function.Function;

import com.nubo.master.third.parties.api.models.entity.InvestorEntity;
import com.nubo.master.third.parties.api.models.enums.SearchOperationEnum;

import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.Path;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class MapperInvestorDynamicSearch {

    private enum ComparisonType {
        GREATER_THAN, GREATER_THAN_OR_EQUAL, LESS_THAN, LESS_THAN_OR_EQUAL
    }

    private static final Map<String, Function<Root<InvestorEntity>, Path<?>>> FIELD_PATH_MAPPING = Map.ofEntries(
        Map.entry("id", root -> root.get("id")),
        Map.entry("code", root -> root.get("code")),
        Map.entry("firstName", root -> root.get("firstName")),
        Map.entry("lastName", root -> root.get("lastName")),
        Map.entry("companyName", root -> root.get("companyName")),
        Map.entry("typeId", root -> root.get("type").get("id")),
        Map.entry("typeDescription", root -> root.get("type").get("description")),
        Map.entry("typeCategory", root -> root.get("type").get("category")),
        Map.entry("statusId", root -> root.get("status").get("id")),
        Map.entry("statusDescription", root -> root.get("status").get("description")),
        Map.entry("statusCategory", root -> root.get("status").get("category")),
        Map.entry("countryId", root -> root.get("country").get("id")),
        Map.entry("countryDescription", root -> root.get("country").get("description")),
        Map.entry("departmentId", root -> root.get("department").get("id")),
        Map.entry("departmentDescription", root -> root.get("department").get("description")),
        Map.entry("cityId", root -> root.get("city").get("id")),
        Map.entry("cityDescription", root -> root.get("city").get("description")),
        Map.entry("documentNumber", root -> root.get("documentNumber")),
        Map.entry("identificationTypeId", root -> root.get("identificationType").get("id")),
        Map.entry("identificationTypeDescription", root -> root.get("identificationType").get("description")),
        Map.entry("nationality", root -> root.get("nationality")),
        Map.entry("address", root -> root.get("address")),
        Map.entry("phoneNumber", root -> root.get("phoneNumber")),
        Map.entry("email", root -> root.get("email")),
        Map.entry("clearinghouseCode", root -> root.get("clearinghouseCode")),
        Map.entry("gicsId", root -> root.get("gics").get("id")),
        Map.entry("gicsDescription", root -> root.get("gics").get("description")),
        Map.entry("moneyLaunderingFlag", root -> root.get("moneyLaunderingFlag")),
        Map.entry("taxStatusId", root -> root.get("taxStatus").get("id")),
        Map.entry("taxStatusDescription", root -> root.get("taxStatus").get("description"))
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
        Map.entry(SearchOperationEnum.CONTAINS, (cb, path, value) -> 
            cb.like(cb.lower(path.as(String.class)), "%" + value.toLowerCase() + "%")),
        Map.entry(SearchOperationEnum.NOT_CONTAINS, (cb, path, value) -> 
            cb.notLike(cb.lower(path.as(String.class)), "%" + value.toLowerCase() + "%")),
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
        Map.entry(SearchOperationEnum.STARTS_WITH, (cb, path, value) -> 
            cb.like(cb.lower(path.as(String.class)), value.toLowerCase() + "%")),
        Map.entry(SearchOperationEnum.ENDS_WITH, (cb, path, value) -> 
            cb.like(cb.lower(path.as(String.class)), "%" + value.toLowerCase())),
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

    public static Path<?> getInvestorFieldPath(Root<InvestorEntity> root, String fieldName) {
        try {
            Function<Root<InvestorEntity>, Path<?>> pathFunction = FIELD_PATH_MAPPING.get(fieldName);
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

    public static Predicate buildInvestorFieldPredicate(CriteriaBuilder criteriaBuilder,
                                                        Path<?> fieldPath,
                                                        String fieldValue,
                                                        SearchOperationEnum operation) {
        try {
            PredicateBuilder builder = OPERATION_BUILDERS.get(operation);

            if (builder == null) {
                log.warn("Operación no soportada: {}", operation);
                return criteriaBuilder.conjunction();
            }

            Predicate predicate = builder.build(criteriaBuilder, fieldPath, fieldValue);

            return predicate != null ? predicate : criteriaBuilder.conjunction();

        } catch (Exception e) {
            log.error("Error construyendo predicado para operación {}: {}", operation, e.getMessage());
            return criteriaBuilder.conjunction();
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

                if (!isValidComparisonType(comparisonType)) {
                    log.warn("Tipo de comparación no válido: {}", comparisonType);
                    return criteriaBuilder.conjunction();
                }
                
                return createNumberComparisonPredicate(criteriaBuilder, numberPath, numberValue, comparisonType);
                
            } else if (Comparable.class.isAssignableFrom(fieldType)) {
                Path<Comparable<Object>> comparablePath = (Path<Comparable<Object>>) fieldPath;
                Comparable<Object> comparableValue = (Comparable<Object>) parsedValue;
                
                if (!isValidComparisonType(comparisonType)) {
                    log.warn("Tipo de comparación no válido: {}", comparisonType);
                    return null;
                }
                
                return createComparableComparisonPredicate(criteriaBuilder, comparablePath, comparableValue, comparisonType);

            } else {
                log.warn("Tipo de campo no soportado para comparación: {}", fieldType);
                return criteriaBuilder.conjunction();
            }
        } catch (Exception e) {
            log.error("Error en buildComparisonPredicate para tipo {}: {}", comparisonType, e.getMessage());
            return null;
        }
    }

    private static boolean isValidComparisonType(ComparisonType comparisonType) {
        return comparisonType == ComparisonType.GREATER_THAN ||
               comparisonType == ComparisonType.GREATER_THAN_OR_EQUAL ||
               comparisonType == ComparisonType.LESS_THAN ||
               comparisonType == ComparisonType.LESS_THAN_OR_EQUAL;
    }

    private static Predicate createNumberComparisonPredicate(CriteriaBuilder criteriaBuilder,
                                                           Path<Number> numberPath,
                                                           Number numberValue,
                                                           ComparisonType comparisonType) {
        return switch (comparisonType) {
            case GREATER_THAN -> criteriaBuilder.gt(numberPath, numberValue);
            case GREATER_THAN_OR_EQUAL -> criteriaBuilder.ge(numberPath, numberValue);
            case LESS_THAN -> criteriaBuilder.lt(numberPath, numberValue);
            case LESS_THAN_OR_EQUAL -> criteriaBuilder.le(numberPath, numberValue);
            default -> {
                log.warn("Operación de comparación numérica no reconocida: {}", comparisonType);
                yield null;
            }
        };
    }

    private static Predicate createComparableComparisonPredicate(CriteriaBuilder criteriaBuilder,
                                                               Path<Comparable<Object>> comparablePath,
                                                               Comparable<Object> comparableValue,
                                                               ComparisonType comparisonType) {
        return switch (comparisonType) {
            case GREATER_THAN -> criteriaBuilder.greaterThan(comparablePath, comparableValue);
            case GREATER_THAN_OR_EQUAL -> criteriaBuilder.greaterThanOrEqualTo(comparablePath, comparableValue);
            case LESS_THAN -> criteriaBuilder.lessThan(comparablePath, comparableValue);
            case LESS_THAN_OR_EQUAL -> criteriaBuilder.lessThanOrEqualTo(comparablePath, comparableValue);
            default -> {
                log.warn("Operación de comparación no reconocida: {}", comparisonType);
                yield null;
            }
        };
    }
}

```

## src/main/java/com/nubo/master/third/parties/api/helpers/MapperPageUtil.java

```java
package com.nubo.master.third.parties.api.helpers;

import com.nubo.master.third.parties.api.models.dto.response.PageResponseOutDto;
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

## src/main/java/com/nubo/master/third/parties/api/helpers/MapperUtil.java

```java
package com.nubo.master.third.parties.api.helpers;

import com.nubo.master.third.parties.api.models.dto.response.CityOutDto;
import com.nubo.master.third.parties.api.models.dto.response.CountryOutDto;
import com.nubo.master.third.parties.api.models.dto.response.CurrencyOutDto;
import com.nubo.master.third.parties.api.models.dto.response.CustodianRelationOutDto;
import com.nubo.master.third.parties.api.models.dto.response.DepartmentOutDto;
import com.nubo.master.third.parties.api.models.dto.response.DepositoryOutDto;
import com.nubo.master.third.parties.api.models.dto.response.EquitySecurityOutDto;
import com.nubo.master.third.parties.api.models.dto.response.ExchangeRateOutDto;
import com.nubo.master.third.parties.api.models.dto.response.FixedIncomeSecurityOutDto;
import com.nubo.master.third.parties.api.models.dto.response.GicsOutDto;
import com.nubo.master.third.parties.api.models.dto.response.IdentificationTypeOutDto;
import com.nubo.master.third.parties.api.models.dto.response.InvestorAccountOutDto;
import com.nubo.master.third.parties.api.models.dto.response.InvestorOutDto;
import com.nubo.master.third.parties.api.models.dto.response.InvestorSimpleOutDto;
import com.nubo.master.third.parties.api.models.dto.response.IssuerOutDto;
import com.nubo.master.third.parties.api.models.dto.response.JointAccountOutDto;
import com.nubo.master.third.parties.api.models.dto.response.ParticipantOutDto;
import com.nubo.master.third.parties.api.models.dto.response.StatusOutDto;
import com.nubo.master.third.parties.api.models.dto.response.TaxStatusOutDto;
import com.nubo.master.third.parties.api.models.dto.response.TypeOutDto;
import com.nubo.master.third.parties.api.models.entity.CityEntity;
import com.nubo.master.third.parties.api.models.entity.CountryEntity;
import com.nubo.master.third.parties.api.models.entity.CurrencyEntity;
import com.nubo.master.third.parties.api.models.entity.CustodianRelationEntity;
import com.nubo.master.third.parties.api.models.entity.DepartmentEntity;
import com.nubo.master.third.parties.api.models.entity.DepositoryEntity;
import com.nubo.master.third.parties.api.models.entity.EquitySecurityEntity;
import com.nubo.master.third.parties.api.models.entity.ExchangeRateEntity;
import com.nubo.master.third.parties.api.models.entity.FixedIncomeSecurityEntity;
import com.nubo.master.third.parties.api.models.entity.GicsEntity;
import com.nubo.master.third.parties.api.models.entity.IdentificationTypeEntity;
import com.nubo.master.third.parties.api.models.entity.InvestorAccountEntity;
import com.nubo.master.third.parties.api.models.entity.InvestorEntity;
import com.nubo.master.third.parties.api.models.entity.IssuerEntity;
import com.nubo.master.third.parties.api.models.entity.JointAccountEntity;
import com.nubo.master.third.parties.api.models.entity.ParticipantAccountEntity;
import com.nubo.master.third.parties.api.models.entity.ParticipantEntity;
import com.nubo.master.third.parties.api.models.entity.StatusEntity;
import com.nubo.master.third.parties.api.models.entity.TaxStatusEntity;
import com.nubo.master.third.parties.api.models.entity.TypeEntity;
import com.nubo.master.third.parties.api.models.enums.PrincipalStatusEnum;
import com.nubo.master.third.parties.api.models.enums.RelationalTypeEnum;
import org.springframework.util.ObjectUtils;

public class MapperUtil {

    private MapperUtil() {
    }

    public static InvestorOutDto investorEntityToInvestorOutDto(InvestorEntity investorEntity) {
        return InvestorOutDto.builder()
                .id(investorEntity.getId())
                .code(investorEntity.getCode())
                .companyName(investorEntity.getCompanyName())
                .fullName(investorEntity.getCompanyName())
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
                .identificationType(ObjectUtils.isEmpty(investorEntity.getIdentificationType()) ?
                        null : identificationTypeEntityToIdentificationTypeOutDto(investorEntity.getIdentificationType()))
                .nationality(investorEntity.getNationality())
                .address(investorEntity.getAddress())
                .phoneNumber(investorEntity.getPhoneNumber())
                .email(investorEntity.getEmail())
                .clearinghouseCode(investorEntity.getClearinghouseCode())
                .gics(ObjectUtils.isEmpty(investorEntity.getGics())
                        ? null : gicsEntityToGicsOutDto(investorEntity.getGics()))
                .moneyLaunderingFlag(investorEntity.getMoneyLaunderingFlag())
                .taxExemp(investorEntity.getTaxExemp())
                .taxStatus(ObjectUtils.isEmpty(investorEntity.getTaxStatus())
                        ? null : taxStatusEntityToTaxStatusOutDto(investorEntity.getTaxStatus()))
                .build();
    }

    public static InvestorOutDto participantEntityToInvestorOutDto(ParticipantEntity participantEntity) {
        return InvestorOutDto.builder()
                .id(participantEntity.getId())
                .code(participantEntity.getCode())
                .fullName(participantEntity.getName())
                .companyName(null)
                .type(ObjectUtils.isEmpty(participantEntity.getType())
                        ? null : typeEntityToTypeOutDto(participantEntity.getType()))
                .status(ObjectUtils.isEmpty(participantEntity.getStatus())
                        ? null : statusEntityToStatusOutDto(participantEntity.getStatus()))
                .country(ObjectUtils.isEmpty(participantEntity.getCountry()) ?
                        null : countryEntityToCountryOutDto(participantEntity.getCountry()))
                .department(ObjectUtils.isEmpty(participantEntity.getDepartment())
                        ? null : departmentEntityToDepartmentOutDto(participantEntity.getDepartment()))
                .city(CityOutDto.builder().build())
                .documentNumber(participantEntity.getDocumentNumber())
                .identificationType(ObjectUtils.isEmpty(participantEntity.getIdentificationType()) ?
                        null : identificationTypeEntityToIdentificationTypeOutDto(participantEntity.getIdentificationType()))
                .nationality(null)
                .address(participantEntity.getMainAddress())
                .phoneNumber(participantEntity.getPhoneNumber())
                .email(null)
                .clearinghouseCode(null)
                .gics(GicsOutDto.builder().build())
                .moneyLaunderingFlag(false)
                .taxExemp(null)
                .taxStatus(ObjectUtils.isEmpty(participantEntity.getTaxStatus())
                        ? null : taxStatusEntityToTaxStatusOutDto(participantEntity.getTaxStatus()))
                .build();
    }

    public static InvestorAccountOutDto investorAccountEntityToInvestorAccountOutDto(InvestorAccountEntity investorAccountEntity) {
        if (investorAccountEntity == null) return null;
        return InvestorAccountOutDto.builder()
                .id(investorAccountEntity.getId())
                .investor(ObjectUtils.isEmpty(investorAccountEntity.getInvestor()) ?
                        null : investorEntityToInvestorOutDto(investorAccountEntity.getInvestor()))
                .accountNumber(investorAccountEntity.getAccountNumber())
                .status(ObjectUtils.isEmpty(investorAccountEntity.getStatus()) ?
                        null : statusEntityToStatusOutDto(investorAccountEntity.getStatus()))
                .type(ObjectUtils.isEmpty(investorAccountEntity.getTypeAccount()) ?
                        null : typeEntityToTypeOutDto(investorAccountEntity.getTypeAccount()))
                .depository(ObjectUtils.isEmpty(investorAccountEntity.getDepository()) ?
                        null : depositoryEntityToDepositoryOutDto(investorAccountEntity.getDepository()))
                .participant(ObjectUtils.isEmpty(investorAccountEntity.getParticipant())
                        ? null : participantEntityToParticipantOutDto(investorAccountEntity.getParticipant()))
                .principalStatus(PrincipalStatusEnum.fromBoolean(investorAccountEntity.getAccountPrincipal()) != null
                        ? PrincipalStatusEnum.fromBoolean(investorAccountEntity.getAccountPrincipal()).getValue() : null)
                .relationalType(RelationalTypeEnum.fromInteger(investorAccountEntity.getRelationInvestor()) != null
                        ? RelationalTypeEnum.fromInteger(investorAccountEntity.getRelationInvestor()).getValue() : null)
                .originType(ObjectUtils.isEmpty(investorAccountEntity.getOriginType()) ?
                        null : typeEntityToTypeOutDto(investorAccountEntity.getOriginType()))
                .indMaster(false)
                .build();
    }

    public static InvestorAccountOutDto participantAccountEntityToInvestorAccountOutDto(ParticipantAccountEntity participantAccountEntity) {
        return InvestorAccountOutDto.builder()
                .id(participantAccountEntity.getId())
                .investor(ObjectUtils.isEmpty(participantAccountEntity.getParticipant()) ?
                        null : participantEntityToInvestorOutDto(participantAccountEntity.getParticipant()))
                .accountNumber(participantAccountEntity.getAccountNumber())
                .status(ObjectUtils.isEmpty(participantAccountEntity.getStatus()) ?
                        null : statusEntityToStatusOutDto(participantAccountEntity.getStatus()))
                .type(ObjectUtils.isEmpty(participantAccountEntity.getType()) ?
                        null : typeEntityToTypeOutDto(participantAccountEntity.getType()))
                .depository(ObjectUtils.isEmpty(participantAccountEntity.getDepository()) ?
                        null : depositoryEntityToDepositoryOutDto(participantAccountEntity.getDepository()))
                .participant(ObjectUtils.isEmpty(participantAccountEntity.getParticipant())
                        ? null : participantEntityToParticipantOutDto(participantAccountEntity.getParticipant()))
                .principalStatus(null)
                .relationalType(null)
                .originType(ObjectUtils.isEmpty(participantAccountEntity.getOriginType()) ?
                        null : typeEntityToTypeOutDto(participantAccountEntity.getOriginType()))
                .indMaster(ObjectUtils.isEmpty(participantAccountEntity.getIndMaster()) ?
                        false : participantAccountEntity.getIndMaster())
                .build();
    }

    public static CountryOutDto countryEntityToCountryOutDto(CountryEntity countryEntity) {
        return CountryOutDto.builder()
                .id(countryEntity.getId())
                .code(countryEntity.getCode())
                .name(countryEntity.getName())
                .currency(ObjectUtils.isEmpty(countryEntity.getCurrency()) ?
                        null : currencyEntityToCurrencyOutDto(countryEntity.getCurrency()))
                .timeZone(countryEntity.getTimeZone())
                .build();
    }

    public static CurrencyOutDto currencyEntityToCurrencyOutDto(CurrencyEntity currencyEntity) {
        return CurrencyOutDto.builder()
                .id(currencyEntity.getId())
                .code(currencyEntity.getCode())
                .name(currencyEntity.getName())
                .build();
    }

    public static ParticipantOutDto participantEntityToParticipantOutDto(ParticipantEntity participantEntity) {
        if (participantEntity == null) return null;
        return ParticipantOutDto.builder()
                .id(participantEntity.getId())
                .code(participantEntity.getCode())
                .documentNumber(participantEntity.getDocumentNumber())
                .identificationType(ObjectUtils.isEmpty(participantEntity.getIdentificationType()) ?
                        null : identificationTypeEntityToIdentificationTypeOutDto(participantEntity.getIdentificationType()))
                .name(participantEntity.getName())
                .shortName(participantEntity.getShortName())
                .type(ObjectUtils.isEmpty(participantEntity.getType())
                        ? null : typeEntityToTypeOutDto(participantEntity.getType()))
                .mnemonic(participantEntity.getMnemonic())
                .country(ObjectUtils.isEmpty(participantEntity.getCountry())
                        ? null : countryEntityToCountryOutDto(participantEntity.getCountry()))
                .registrationDate(participantEntity.getRegistrationDate())
                .taxCode(participantEntity.getTaxCode())
                .department(ObjectUtils.isEmpty(participantEntity.getDepartment())
                        ? null : departmentEntityToDepartmentOutDto(participantEntity.getDepartment()))
                .mainAddress(participantEntity.getMainAddress())
                .webPage(participantEntity.getWebPage())
                .phoneNumber(participantEntity.getPhoneNumber())
                .status(ObjectUtils.isEmpty(participantEntity.getStatus())
                        ? null : statusEntityToStatusOutDto(participantEntity.getStatus()))
                .nitClearingHouse(participantEntity.getNitClearingHouse())
                .taxStatus(taxStatusOutDtoaxStatusEntityToTaxStatusOutDto(participantEntity.getTaxStatus()))
                .typeEntity(participantEntity.getTypeEntity())
                .marginAccount(participantEntity.getMarginAccount())
                .masterAccount(participantEntity.getMasterAccount())
                .directAllocation(participantEntity.getDirectAllocation())
                .marketMaker(participantEntity.getMarketMaker())
                .enabled(participantEntity.getEnabled())
                .custodian(participantEntity.getCustodian())
                .build();
    }

    public static TaxStatusOutDto taxStatusOutDtoaxStatusEntityToTaxStatusOutDto(TaxStatusEntity taxStatusEntity) {
        return TaxStatusOutDto.builder()
                .id(taxStatusEntity.getId())
                .description(taxStatusEntity.getDescription())
                .build();
    }

    public static ExchangeRateOutDto exchangeRateEntityToExchangeRateOutDto(ExchangeRateEntity exchangeRateEntity) {
        return ExchangeRateOutDto.builder()
                .id(exchangeRateEntity.getId())
                .baseCurrency(ObjectUtils.isEmpty(exchangeRateEntity.getBaseCurrency()) ?
                        null : currencyEntityToCurrencyOutDto(exchangeRateEntity.getBaseCurrency()))
                .validityDate(exchangeRateEntity.getValidityDate())
                .conversionCurrency(ObjectUtils.isEmpty(exchangeRateEntity.getConversionCurrency()) ?
                        null : currencyEntityToCurrencyOutDto(exchangeRateEntity.getConversionCurrency()))
                .conversionValue(exchangeRateEntity.getConversionValue())
                .recordDate(exchangeRateEntity.getRecordDate())
                .build();
    }

    public static EquitySecurityOutDto equitySecurityEntityToEquitySecurityOutDto(EquitySecurityEntity equitySecurityEntity) {
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

    public static FixedIncomeSecurityOutDto fixedIncomeSecurityEntityToFixedIncomeSecurityOutDto(
            FixedIncomeSecurityEntity fixedIncomeSecurityEntity) {
        return FixedIncomeSecurityOutDto.builder()
                .securityId(fixedIncomeSecurityEntity.getSecurityId())
                .maturityDate(fixedIncomeSecurityEntity.getMaturityDate())
                .firstCuponDate(fixedIncomeSecurityEntity.getFirstCuponDate())
                .couponFrecuency(fixedIncomeSecurityEntity.getCouponFrecuency())
                .initialParValue(fixedIncomeSecurityEntity.getInitialParValue())
                .nominalValue(fixedIncomeSecurityEntity.getNominalValue())
                .couponInterest(fixedIncomeSecurityEntity.getCouponInterest())
                .standardized(fixedIncomeSecurityEntity.getStandardized())
                .minimumUnit(fixedIncomeSecurityEntity.getMinimumUnit())
                .minimumTradeLot(fixedIncomeSecurityEntity.getMinimumTradeLot())
                .spivi(fixedIncomeSecurityEntity.getSpivi())
                .esttit(fixedIncomeSecurityEntity.getEsttit())
                .tradeTtv(fixedIncomeSecurityEntity.getTradeTtv())
                .ttvGuarantees(fixedIncomeSecurityEntity.getTtvGuarantees())
                .ccmCode(fixedIncomeSecurityEntity.getCcmCode())
                .guaranteesCode(fixedIncomeSecurityEntity.getGuaranteesCode())
                .ttvCurve(fixedIncomeSecurityEntity.getTtvCurve())
                .haircut(fixedIncomeSecurityEntity.getHaircut())
                .commonShares(fixedIncomeSecurityEntity.getCommonShares())
                .issueDate(fixedIncomeSecurityEntity.getIssueDate())
                .automatedSheet(fixedIncomeSecurityEntity.getAutomatedSheet())
                .clearingHouseMark(fixedIncomeSecurityEntity.getClearingHouseMark())
                .securityClass(fixedIncomeSecurityEntity.getSecurityClass())
                .administeringEntity(fixedIncomeSecurityEntity.getAdministeringEntity())
                .numberCouponsInterest(fixedIncomeSecurityEntity.getNumberCouponsInterest())
                .numberPaymentCoupons(fixedIncomeSecurityEntity.getNumberPaymentCoupons())
                .referenceRate(fixedIncomeSecurityEntity.getReferenceRate())
                .rateUsageMethod(fixedIncomeSecurityEntity.getRateUsageMethod())
                .interestCalculationBase(fixedIncomeSecurityEntity.getInterestCalculationBase())
                .acceptedFractionationType(fixedIncomeSecurityEntity.getAcceptedFractionationType())
                .maximunNumberFraction(fixedIncomeSecurityEntity.getMaximunNumberFraction())
                .issueDateUniqueSerie(fixedIncomeSecurityEntity.getIssueDateUniqueSerie())
                .totalAmountIssue(fixedIncomeSecurityEntity.getTotalAmountIssue())
                .dayFirstCashFlow(fixedIncomeSecurityEntity.getDayFirstCashFlow())
                .monthFirstCashFlow(fixedIncomeSecurityEntity.getMonthFirstCashFlow())
                .itemComission(fixedIncomeSecurityEntity.getItemComission())
                .marketType(fixedIncomeSecurityEntity.getMarketType())
                .negotiationModality(fixedIncomeSecurityEntity.getNegotiationModality())
                .indicatorAcceptsRepos(fixedIncomeSecurityEntity.getIndicatorAcceptsRepos())
                .sourceWithholding(fixedIncomeSecurityEntity.getSourceWithholding())
                .baseDiscount(fixedIncomeSecurityEntity.getBaseDiscount())
                .rateBrokerApplicable(fixedIncomeSecurityEntity.getRateBrokerApplicable())
                .negotiationIndicator(fixedIncomeSecurityEntity.getNegotiationIndicator())
                .indicator(fixedIncomeSecurityEntity.getIndicator())
                .numberReinvestment(fixedIncomeSecurityEntity.getNumberReinvestment())
                .maximumReinvestmentDate(fixedIncomeSecurityEntity.getMaximumReinvestmentDate())
                .withReinvestmentFlow(fixedIncomeSecurityEntity.getWithReinvestmentFlow())
                .validateTypeIssues(fixedIncomeSecurityEntity.getValidateTypeIssues())
                .paymentRateNonCapitalizing(fixedIncomeSecurityEntity.getPaymentRateNonCapitalizing())
                .capitalizableRate(fixedIncomeSecurityEntity.getCapitalizableRate())
                .build();
    }

    public static IssuerOutDto issuerEntityToIssuerOutDto(IssuerEntity issuerEntity) {
        return IssuerOutDto.builder()
                .id(issuerEntity.getId())
                .code(issuerEntity.getCode())
                .name(issuerEntity.getName())
                .shortName(issuerEntity.getShortName())
                .type(ObjectUtils.isEmpty(issuerEntity.getType()) ?
                        null : typeEntityToTypeOutDto(issuerEntity.getType()))
                .country(ObjectUtils.isEmpty(issuerEntity.getCountry()) ?
                        null : countryEntityToCountryOutDto(issuerEntity.getCountry()))
                .gics(ObjectUtils.isEmpty(issuerEntity.getGics()) ?
                        null : gicsEntityToGicsOutDto(issuerEntity.getGics()))
                .dateEntry(issuerEntity.getDateEntry())
                .countryOrigin(ObjectUtils.isEmpty(issuerEntity.getCountryOrigin()) ?
                        null : countryEntityToCountryOutDto(issuerEntity.getCountryOrigin()))
                .cusip(issuerEntity.getCusip())
                .taxCode(issuerEntity.getTaxCode())
                .status(ObjectUtils.isEmpty(issuerEntity.getStatus()) ?
                        null : statusEntityToStatusOutDto(issuerEntity.getStatus()))
                .withdrawalDate(issuerEntity.getWithdrawalDate())
                .mainMarket(issuerEntity.getMainMarket())
                .regulatorCode(issuerEntity.getRegulatorCode())
                .depository(ObjectUtils.isEmpty(issuerEntity.getDepository()) ?
                        null : depositoryEntityToDepositoryOutDto(issuerEntity.getDepository()))
                .dvlCode(issuerEntity.getDvlCode())
                .build();
    }

    public static StatusOutDto statusEntityToStatusOutDto(StatusEntity statusEntity) {
        if (statusEntity == null) return null;
        return StatusOutDto.builder()
                .id(statusEntity.getId())
                .description(statusEntity.getDescription())
                .category(statusEntity.getCategory())
                .detail(statusEntity.getDetail())
                .build();
    }

    public static TypeOutDto typeEntityToTypeOutDto(TypeEntity typeEntity) {
        return TypeOutDto.builder()
                .id(typeEntity.getId())
                .description(typeEntity.getDescription())
                .category(typeEntity.getCategory())
                .build();
    }

    public static DepartmentOutDto departmentEntityToDepartmentOutDto(DepartmentEntity departmentEntity) {
        return DepartmentOutDto.builder()
                .id(departmentEntity.getId())
                .description(departmentEntity.getDescription())
                .build();
    }

    public static CityOutDto cityEntityToCityOutDto(CityEntity cityEntity) {
        return CityOutDto.builder()
                .id(cityEntity.getId())
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

    public static DepositoryOutDto depositoryEntityToDepositoryOutDto(DepositoryEntity depositoryEntity) {
        if (depositoryEntity == null) return null;
        return DepositoryOutDto.builder()
                .id(depositoryEntity.getId())
                .description(depositoryEntity.getDescription())
                .build();
    }

    public static IdentificationTypeOutDto identificationTypeEntityToIdentificationTypeOutDto(
            IdentificationTypeEntity identificationTypeEntity) {
        return IdentificationTypeOutDto.builder()
                .id(identificationTypeEntity.getId())
                .description(identificationTypeEntity.getDescription())
                .code(identificationTypeEntity.getCode())
                .build();
    }

    public static JointAccountOutDto jointAccountEntityToJointAccountOutDto(JointAccountEntity jointAccountEntity) {
        return JointAccountOutDto.builder()
                .id(jointAccountEntity.getId())
                .investorAccount(ObjectUtils.isEmpty(jointAccountEntity.getInvestorAccount()) ?
                        null : investorAccountEntityToInvestorAccountOutDto(jointAccountEntity.getInvestorAccount()))
                .identificationType(ObjectUtils.isEmpty(jointAccountEntity.getIdentificationType()) ?
                        null : identificationTypeEntityToIdentificationTypeOutDto(jointAccountEntity.getIdentificationType()))
                .documentNumber(jointAccountEntity.getDocumentNumber())
                .firstName(jointAccountEntity.getFirstName())
                .lastName(jointAccountEntity.getLastName())
                .companyName(jointAccountEntity.getCompanyName())
                .build();
    }



    public static InvestorSimpleOutDto investorEntityToInvestorSimpleOutDto(InvestorEntity investorEntity) {
        if (investorEntity == null) {
            return null;
        }

        return InvestorSimpleOutDto.builder()
                .id(investorEntity.getId())
                .companyName(investorEntity.getCompanyName())
                .documentNumber(investorEntity.getDocumentNumber())
                .build();
    }

    public static CustodianRelationOutDto custodianRelationEntityToCustodianRelationOutDto(
            CustodianRelationEntity custodianRelationEntity) {
        if (custodianRelationEntity == null) return null;
        return CustodianRelationOutDto.builder()
                .id(custodianRelationEntity.getId())
                .participant(participantEntityToParticipantOutDto(custodianRelationEntity.getParticipant()))
                .custodian(participantEntityToParticipantOutDto(custodianRelationEntity.getCustodian()))
                .depository(depositoryEntityToDepositoryOutDto(custodianRelationEntity.getDepository()))
                .investorAccount(investorAccountEntityToInvestorAccountOutDto(custodianRelationEntity.getInvestorAccount()))
                .status(statusEntityToStatusOutDto(custodianRelationEntity.getStatus()))
                .build();
    }

}

```

## src/main/java/com/nubo/master/third/parties/api/models/dto/request/EquitySecurityInDto.java

```java
package com.nubo.master.third.parties.api.models.dto.request;

import com.nubo.master.third.parties.api.application.annotations.ValidBigDecimal;
import jakarta.validation.constraints.Digits;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
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

## src/main/java/com/nubo/master/third/parties/api/models/dto/request/EquitySecurityUpdateInDto.java

```java
package com.nubo.master.third.parties.api.models.dto.request;

import com.nubo.master.third.parties.api.application.annotations.ValidBigDecimal;
import jakarta.validation.constraints.Digits;
import jakarta.validation.constraints.Pattern;
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

## src/main/java/com/nubo/master/third/parties/api/models/dto/request/ExchangeRateInDto.java

```java
package com.nubo.master.third.parties.api.models.dto.request;

import com.nubo.master.third.parties.api.application.annotations.ValidBigDecimal;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

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

## src/main/java/com/nubo/master/third/parties/api/models/dto/request/ExchangeRateUpdateInDto.java

```java
package com.nubo.master.third.parties.api.models.dto.request;

import com.nubo.master.third.parties.api.application.annotations.ValidBigDecimal;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

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

## src/main/java/com/nubo/master/third/parties/api/models/dto/request/FixedIncomeSecurityInDto.java

```java
package com.nubo.master.third.parties.api.models.dto.request;

import com.nubo.master.third.parties.api.application.annotations.ValidBigDecimal;
import jakarta.validation.constraints.Digits;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
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

## src/main/java/com/nubo/master/third/parties/api/models/dto/request/FixedIncomeSecurityUpdateInDto.java

```java
package com.nubo.master.third.parties.api.models.dto.request;

import com.nubo.master.third.parties.api.application.annotations.ValidBigDecimal;
import jakarta.validation.constraints.Digits;
import jakarta.validation.constraints.Pattern;
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

## src/main/java/com/nubo/master/third/parties/api/models/dto/request/InvestorAccountFilterRequestDto.java

```java
package com.nubo.master.third.parties.api.models.dto.request;

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

## src/main/java/com/nubo/master/third/parties/api/models/dto/request/InvestorAccountInDto.java

```java
package com.nubo.master.third.parties.api.models.dto.request;

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

## src/main/java/com/nubo/master/third/parties/api/models/dto/request/InvestorAccountUpdateInDto.java

```java
package com.nubo.master.third.parties.api.models.dto.request;

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

## src/main/java/com/nubo/master/third/parties/api/models/dto/request/InvestorFilterRequestDto.java

```java
package com.nubo.master.third.parties.api.models.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class InvestorFilterRequestDto {

    private String companyName;
    private String documentNumber;
    private Long countryId;
    private Long statusId;
    private Long investorId;

}

```

## src/main/java/com/nubo/master/third/parties/api/models/dto/request/InvestorInDto.java

```java
package com.nubo.master.third.parties.api.models.dto.request;

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

## src/main/java/com/nubo/master/third/parties/api/models/dto/request/InvestorUpdateInDto.java

```java
package com.nubo.master.third.parties.api.models.dto.request;

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

## src/main/java/com/nubo/master/third/parties/api/models/dto/request/IssuerInDto.java

```java
package com.nubo.master.third.parties.api.models.dto.request;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

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

## src/main/java/com/nubo/master/third/parties/api/models/dto/request/IssuerUpdateInDto.java

```java
package com.nubo.master.third.parties.api.models.dto.request;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

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

## src/main/java/com/nubo/master/third/parties/api/models/dto/response/CityOutDto.java

```java
package com.nubo.master.third.parties.api.models.dto.response;

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

## src/main/java/com/nubo/master/third/parties/api/models/dto/response/CountryOutDto.java

```java
package com.nubo.master.third.parties.api.models.dto.response;

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

## src/main/java/com/nubo/master/third/parties/api/models/dto/response/CurrencyOutDto.java

```java
package com.nubo.master.third.parties.api.models.dto.response;

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

## src/main/java/com/nubo/master/third/parties/api/models/dto/response/CustodianRelationOutDto.java

```java
package com.nubo.master.third.parties.api.models.dto.response;

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
public class CustodianRelationOutDto {

    private Long id;

    private ParticipantOutDto participant;

    private ParticipantOutDto custodian;

    private DepositoryOutDto depository;

    private InvestorAccountOutDto investorAccount;

    private StatusOutDto status;

}

```

## src/main/java/com/nubo/master/third/parties/api/models/dto/response/DepartmentOutDto.java

```java
package com.nubo.master.third.parties.api.models.dto.response;

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

## src/main/java/com/nubo/master/third/parties/api/models/dto/response/DepositoryOutDto.java

```java
package com.nubo.master.third.parties.api.models.dto.response;

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

## src/main/java/com/nubo/master/third/parties/api/models/dto/response/EquitySecurityOutDto.java

```java
package com.nubo.master.third.parties.api.models.dto.response;

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

## src/main/java/com/nubo/master/third/parties/api/models/dto/response/ExchangeRateOutDto.java

```java
package com.nubo.master.third.parties.api.models.dto.response;

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
public class ExchangeRateOutDto {

    private Long id;

    private CurrencyOutDto baseCurrency;

    private LocalDate validityDate;

    private CurrencyOutDto conversionCurrency;

    private BigDecimal conversionValue;

    private LocalDate recordDate;

}

```

## src/main/java/com/nubo/master/third/parties/api/models/dto/response/FixedIncomeSecurityOutDto.java

```java
package com.nubo.master.third.parties.api.models.dto.response;

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
public class FixedIncomeSecurityOutDto {

    private Long securityId;

    private LocalDate maturityDate;

    private LocalDate firstCuponDate;

    private BigDecimal couponFrecuency;

    private BigDecimal initialParValue;

    private BigDecimal nominalValue;

    private BigDecimal couponInterest;

    private String standardized;

    private BigDecimal minimumUnit;

    private BigDecimal minimumTradeLot;

    private String spivi;

    private String esttit;

    private String tradeTtv;

    private String ttvGuarantees;

    private BigDecimal ccmCode;

    private BigDecimal guaranteesCode;

    private String ttvCurve;

    private BigDecimal haircut;

    private String commonShares;

    private LocalDate issueDate;

    private String automatedSheet;

    private String clearingHouseMark;

    private String securityClass;

    private String administeringEntity;

    private BigDecimal numberCouponsInterest;

    private BigDecimal numberPaymentCoupons;

    private String referenceRate;

    private String rateUsageMethod;

    private String interestCalculationBase;

    private String acceptedFractionationType;

    private BigDecimal maximunNumberFraction;

    private LocalDate issueDateUniqueSerie;

    private BigDecimal totalAmountIssue;

    private String dayFirstCashFlow;

    private String monthFirstCashFlow;

    private String itemComission;

    private String marketType;

    private String negotiationModality;

    private String indicatorAcceptsRepos;

    private String sourceWithholding;

    private String baseDiscount;

    private String rateBrokerApplicable;

    private String negotiationIndicator;

    private String indicator;

    private BigDecimal numberReinvestment;

    private LocalDate maximumReinvestmentDate;

    private String withReinvestmentFlow;

    private String validateTypeIssues;

    private BigDecimal paymentRateNonCapitalizing;

    private BigDecimal capitalizableRate;

}

```

## src/main/java/com/nubo/master/third/parties/api/models/dto/response/GicsOutDto.java

```java
package com.nubo.master.third.parties.api.models.dto.response;

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

## src/main/java/com/nubo/master/third/parties/api/models/dto/response/IdentificationTypeOutDto.java

```java
package com.nubo.master.third.parties.api.models.dto.response;

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

    private String code;

}

```

## src/main/java/com/nubo/master/third/parties/api/models/dto/response/InvestorAccountOutDto.java

```java
package com.nubo.master.third.parties.api.models.dto.response;

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

    private TypeOutDto originType;

    private Boolean indMaster;

}

```

## src/main/java/com/nubo/master/third/parties/api/models/dto/response/InvestorOutDto.java

```java
package com.nubo.master.third.parties.api.models.dto.response;

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

    private Boolean custodianRelation;

}
```

## src/main/java/com/nubo/master/third/parties/api/models/dto/response/InvestorSimpleOutDto.java

```java
package com.nubo.master.third.parties.api.models.dto.response;

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

    private String companyName;


    private String documentNumber;

}

```

## src/main/java/com/nubo/master/third/parties/api/models/dto/response/IssuerOutDto.java

```java
package com.nubo.master.third.parties.api.models.dto.response;

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

}
```

## src/main/java/com/nubo/master/third/parties/api/models/dto/response/JointAccountOutDto.java

```java
package com.nubo.master.third.parties.api.models.dto.response;

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

## src/main/java/com/nubo/master/third/parties/api/models/dto/response/PageResponseOutDto.java

```java
package com.nubo.master.third.parties.api.models.dto.response;

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

## src/main/java/com/nubo/master/third/parties/api/models/dto/response/ParticipantOutDto.java

```java
package com.nubo.master.third.parties.api.models.dto.response;

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

## src/main/java/com/nubo/master/third/parties/api/models/dto/response/StatusOutDto.java

```java
package com.nubo.master.third.parties.api.models.dto.response;

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

    private String detail;

}

```

## src/main/java/com/nubo/master/third/parties/api/models/dto/response/TaxStatusOutDto.java

```java
package com.nubo.master.third.parties.api.models.dto.response;

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

## src/main/java/com/nubo/master/third/parties/api/models/dto/response/TypeOutDto.java

```java
package com.nubo.master.third.parties.api.models.dto.response;

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

}

```

## src/main/java/com/nubo/master/third/parties/api/models/dto/response/ValidateGuaranteeCalculateOutDto.java

```java
package com.nubo.master.third.parties.api.models.dto.response;

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

## src/main/java/com/nubo/master/third/parties/api/models/entity/CfiEntity.java

```java
package com.nubo.master.third.parties.api.models.entity;

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

## src/main/java/com/nubo/master/third/parties/api/models/entity/CityEntity.java

```java
package com.nubo.master.third.parties.api.models.entity;

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

## src/main/java/com/nubo/master/third/parties/api/models/entity/CountryEntity.java

```java
package com.nubo.master.third.parties.api.models.entity;

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

## src/main/java/com/nubo/master/third/parties/api/models/entity/CurrencyEntity.java

```java
package com.nubo.master.third.parties.api.models.entity;

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

## src/main/java/com/nubo/master/third/parties/api/models/entity/CustodianRelationEntity.java

```java
package com.nubo.master.third.parties.api.models.entity;

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
@Table(name = "\"CUSTODIAN_RELATION\"", schema = "\"NUANBODB\"")
public class CustodianRelationEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"CUSTODIAN_RELATION_ID\"", nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "\"PARTICIPANT_ID\"")
    private ParticipantEntity participant;

    @ManyToOne
    @JoinColumn(name = "\"CUSTODIAN_ID\"")
    private ParticipantEntity custodian;

    @ManyToOne
    @JoinColumn(name = "\"DEPOSITORY_ID\"")
    private DepositoryEntity depository;

    @ManyToOne
    @JoinColumn(name = "\"INVESTOR_ACCOUNT_ID\"")
    private InvestorAccountEntity investorAccount;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"")
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

## src/main/java/com/nubo/master/third/parties/api/models/entity/DepartmentEntity.java

```java
package com.nubo.master.third.parties.api.models.entity;

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

## src/main/java/com/nubo/master/third/parties/api/models/entity/DepositoryEntity.java

```java
package com.nubo.master.third.parties.api.models.entity;

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

## src/main/java/com/nubo/master/third/parties/api/models/entity/EquitySecurityEntity.java

```java
package com.nubo.master.third.parties.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
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
@Table(name = "\"EQUITY_SECURITY\"", schema = "\"NUANBODB\"")
public class EquitySecurityEntity {

    @Id
    @Column(name = "\"SECURITY_ID\"", nullable = false)
    private Long securityId;

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

## src/main/java/com/nubo/master/third/parties/api/models/entity/ExchangeRateEntity.java

```java
package com.nubo.master.third.parties.api.models.entity;

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

## src/main/java/com/nubo/master/third/parties/api/models/entity/FixedIncomeSecurityEntity.java

```java
package com.nubo.master.third.parties.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
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
@Table(name = "\"FIXED_INCOME_SECURITY\"", schema = "\"NUANBODB\"")
public class FixedIncomeSecurityEntity {

    @Id
    @Column(name = "\"SECURITY_ID\"", nullable = false)
    private Long securityId;

    @Column(name = "\"MATURITY_DATE\"")
    private LocalDate maturityDate;

    @Column(name = "\"FIRST_CUPON_DATE\"")
    private LocalDate firstCuponDate;

    @Column(name = "\"COUPON_FRECUENCY\"", precision = 2)
    private BigDecimal couponFrecuency;

    @Column(name = "\"INITIAL_PAR_VALUE\"", precision = 20, scale = 8)
    private BigDecimal initialParValue;

    @Column(name = "\"NOMINAL_VALUE\"", precision = 20, scale = 8)
    private BigDecimal nominalValue;

    @Column(name = "\"COUPON_INTEREST\"", precision = 15, scale = 2)
    private BigDecimal couponInterest;

    @Column(name = "\"STANDARDIZED\"", length = 1)
    private String standardized;

    @Column(name = "\"MINIMUM_UNIT\"", precision = 14, scale = 2)
    private BigDecimal minimumUnit;

    @Column(name = "\"MINIMUM_TRADE_LOT\"", precision = 14, scale = 2)
    private BigDecimal minimumTradeLot;

    @Column(name = "\"SPIVI\"", length = 1)
    private String spivi;

    @Column(name = "\"ESTTIT\"", length = 1)
    private String esttit;

    @Column(name = "\"TRADE_TTV\"", length = 1)
    private String tradeTtv;

    @Column(name = "\"TTV_GUARANTEES\"", length = 1)
    private String ttvGuarantees;

    @Column(name = "\"CCM_CODE\"", precision = 3)
    private BigDecimal ccmCode;

    @Column(name = "\"GUARANTEE_CODE\"", precision = 3)
    private BigDecimal guaranteesCode;

    @Column(name = "\"TTV_CURVE\"", length = 10)
    private String ttvCurve;

    @Column(name = "\"HAIRCUT\"", precision = 5, scale = 2)
    private BigDecimal haircut;

    @Column(name = "\"COMMON_SHARES\"", length = 1)
    private String commonShares;

    @Column(name = "\"ISSUE_DATE\"")
    private LocalDate issueDate;

    @Column(name = "\"AUTOMATED_SHEET\"", length = 1)
    private String automatedSheet;

    @Column(name = "\"CLEARINGHOUSE_MARK\"", length = 1)
    private String clearingHouseMark;

    @Column(name = "\"SECURITY_CLASS\"", length = 10)
    private String securityClass;

    @Column(name = "\"ADMINISTERING_ENTITY\"", length = 10)
    private String administeringEntity;

    @Column(name = "\"NUMBER_COUPONS_INTEREST\"", precision = 4)
    private BigDecimal numberCouponsInterest;

    @Column(name = "\"NUMBER_PAYMENT_COUPONS\"", precision = 4)
    private BigDecimal numberPaymentCoupons;

    @Column(name = "\"REFERENCE_RATE\"", length = 4)
    private String referenceRate;

    @Column(name = "\"RATE_USAGE_METHOD\"", length = 1)
    private String rateUsageMethod;

    @Column(name = "\"INTEREST_CALCULATION_BASE\"", length = 1)
    private String interestCalculationBase;

    @Column(name = "\"ACCEPTED_FRACTIONATION_TYPE\"", length = 1)
    private String acceptedFractionationType;

    @Column(name = "\"MAXIMUN_NUMBER_FRACTION\"", precision = 2)
    private BigDecimal maximunNumberFraction;

    @Column(name = "\"ISSUE_DATE_UNIQUE_SERIE\"")
    private LocalDate issueDateUniqueSerie;

    @Column(name = "\"TOTAL_AMOUNT_ISSUE\"", precision = 14, scale = 2)
    private BigDecimal totalAmountIssue;

    @Column(name = "\"DAY_FIRST_CASH_FLOW\"", length = 2)
    private String dayFirstCashFlow;

    @Column(name = "\"MONTH_FIRST_CASH_FLOW\"", length = 2)
    private String monthFirstCashFlow;

    @Column(name = "\"ITEM_COMMISSION\"", length = 1)
    private String itemComission;

    @Column(name = "\"MARKET_TYPE\"", length = 1)
    private String marketType;

    @Column(name = "\"NEGOTIATION_MODALITY\"", length = 1)
    private String negotiationModality;

    @Column(name = "\"INDICATOR_ACCEPTS_REPOS\"", length = 1)
    private String indicatorAcceptsRepos;

    @Column(name = "\"SOURCE_WITHHOLDING\"", length = 1)
    private String sourceWithholding;

    @Column(name = "\"BASE_DISCOUNT\"", length = 1)
    private String baseDiscount;

    @Column(name = "\"RATE_BROKER_APPLICABLE\"", length = 6)
    private String rateBrokerApplicable;

    @Column(name = "\"NEGOTIATION_INDICATOR\"", length = 2)
    private String negotiationIndicator;

    @Column(name = "\"INDICATOR\"", length = 10)
    private String indicator;

    @Column(name = "\"NUMBER_REINVESTMENT\"", precision = 4)
    private BigDecimal numberReinvestment;

    @Column(name = "\"MAXIMUM_REINVESTMENT_DATE\"")
    private LocalDate maximumReinvestmentDate;

    @Column(name = "\"WITH_REINVESTMENT_FLOW\"", length = 1)
    private String withReinvestmentFlow;

    @Column(name = "\"VALIDATE_TYPE_ISSUES\"", length = 1)
    private String validateTypeIssues;

    @Column(name = "\"PAYMENT_RATE_NON_CAPITALIZING\"", precision = 7, scale = 4)
    private BigDecimal paymentRateNonCapitalizing;

    @Column(name = "\"CAPITALIZABLE_RATE\"", precision = 7, scale = 4)
    private BigDecimal capitalizableRate;

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

## src/main/java/com/nubo/master/third/parties/api/models/entity/GicsEntity.java

```java
package com.nubo.master.third.parties.api.models.entity;

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

## src/main/java/com/nubo/master/third/parties/api/models/entity/IdentificationTypeEntity.java

```java
package com.nubo.master.third.parties.api.models.entity;

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

    @Column(name = "\"DESCRIPTION\"", length = 80, nullable = false)
    private String description;

    @Column(name = "\"CODE\"", length = 3, nullable = false)
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

## src/main/java/com/nubo/master/third/parties/api/models/entity/InvestorAccountEntity.java

```java
package com.nubo.master.third.parties.api.models.entity;

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
    @JoinColumn(name = "\"ORIGIN_TYPE_ID\"", nullable = false)
    private TypeEntity originType;

    @ManyToOne
    @JoinColumn(name = "\"TYPE_ID\"", nullable = false)
    private TypeEntity type;

    @ManyToOne
    @JoinColumn(name = "\"DEPOSITORY_ID\"", nullable = false)
    private DepositoryEntity depository;

    @ManyToOne
    @JoinColumn(name = "\"PARTICIPANT_ID\"", nullable = false)
    private ParticipantEntity participant;

    @Column(name = "\"RELATION_INVESTOR\"")
    private Integer relationInvestor;

    @Column(name = "\"ACCOUNT_PRINCIPAL\"")
    private Boolean accountPrincipal;

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

## src/main/java/com/nubo/master/third/parties/api/models/entity/InvestorEntity.java

```java
package com.nubo.master.third.parties.api.models.entity;

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

}

```

## src/main/java/com/nubo/master/third/parties/api/models/entity/IssuerEntity.java

```java
package com.nubo.master.third.parties.api.models.entity;

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

## src/main/java/com/nubo/master/third/parties/api/models/entity/JointAccountEntity.java

```java
package com.nubo.master.third.parties.api.models.entity;

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
@Table(name = "\"JOINT_ACCOUNT\"", schema = "\"NUANBODB\"")
public class JointAccountEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"JOINT_ACCOUNT_ID\"", nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "\"INVESTOR_ACCOUNT_ID\"", nullable = false)
    private InvestorAccountEntity investorAccount;

    @ManyToOne
    @JoinColumn(name = "\"IDENTIFICATION_TYPE_ID\"", nullable = false)
    private IdentificationTypeEntity identificationType;

    @Column(name = "\"DOCUMENT_NUMBER\"", length = 20, nullable = false)
    private String documentNumber;

    @Column(name = "\"FIRST_NAME\"", length = 60, nullable = false)
    private String firstName;

    @Column(name = "\"LAST_NAME\"", length = 60, nullable = false)
    private String lastName;

    @Column(name = "\"COMPANY_NAME\"", length = 100, nullable = false)
    private String companyName;

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

## src/main/java/com/nubo/master/third/parties/api/models/entity/MarketEntity.java

```java
package com.nubo.master.third.parties.api.models.entity;

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

## src/main/java/com/nubo/master/third/parties/api/models/entity/ParticipantAccountEntity.java

```java
package com.nubo.master.third.parties.api.models.entity;

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

    @Column(name = "\"ACCOUNT_NUMBER\"", length = 50)
    private String accountNumber;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"", nullable = false)
    private StatusEntity status;

    @ManyToOne
    @JoinColumn(name = "\"TYPE_ID\"", nullable = false)
    private TypeEntity type;

    @ManyToOne
    @JoinColumn(name = "\"ORIGIN_TYPE_ID\"", nullable = false)
    private TypeEntity originType;

    @ManyToOne
    @JoinColumn(name = "\"DEPOSITORY_ID\"")
    private DepositoryEntity depository;

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
}

```

## src/main/java/com/nubo/master/third/parties/api/models/entity/ParticipantEntity.java

```java
package com.nubo.master.third.parties.api.models.entity;

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

    @Column(name = "\"LAST_MODIFY_USER\"")
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"")
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"")
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50)
    private String lastModifyIp;

}

```

## src/main/java/com/nubo/master/third/parties/api/models/entity/SecurityTitleEntity.java

```java
package com.nubo.master.third.parties.api.models.entity;

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

    @Column(name = "\"ISIN\"", length = 20)
    private String isin;

    @ManyToOne
    @JoinColumn(name = "\"CFI_ID\"", nullable = false)
    private CfiEntity cfi;

    @Column(name = "\"CURRENCY_ID\"", nullable = false)
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

    @Column(name = "\"CATEGORY\"", length = 20)
    private String category;

    @ManyToOne
    @JoinColumn(name = "\"DEPOSITORY_ID\"", nullable = false)
    private DepositoryEntity depository;

    @Column(name = "\"PUNISHMENT_REPO\"", precision = 5, scale = 4)
    private BigDecimal punishmentRepo;

    @Column(name = "\"REGULATORY_CODE\"", length = 12)
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

## src/main/java/com/nubo/master/third/parties/api/models/entity/SettlementEntity.java

```java
package com.nubo.master.third.parties.api.models.entity;

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
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@IdClass(SettlementKey.class)
@Table(name = "\"SETTLEMENT\"", schema = "\"NUANBODB\"")
public class SettlementEntity {

    @Id
    @ManyToOne
    @JoinColumn(name = "\"TRADE_ID\"", insertable = false, updatable = false, nullable = false)
    private TradeEntity trade;

    @Id
    @Column(name = "\"FRACTION\"", nullable = false)
    private Integer fraction;

    @Id
    @ManyToOne
    @JoinColumn(name = "\"SIDE_ID\"", insertable = false, updatable = false)
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

    @Column(name = "\"FIDUCIARY_SPECIALIST\"", length = 10)
    private String fiduciarySpecialist;

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

    @Column(name = "\"REPO_RATE\"", precision = 16, scale = 4)
    private BigDecimal repoRate;

    @Column(name = "\"REPO_AMOUNT\"", precision = 16, scale = 4)
    private BigDecimal repoAmount;

    @Column(name = "\"LATE_PENALITY\"", precision = 16, scale = 4)
    private BigDecimal latePenality;

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

    @Column(name = "\"TRADING_SYSTEM_ID\"", nullable = false)
    private Long tradingSystemId;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"", nullable = false)
    private StatusEntity status;

    @Column(name = "\"BROKERAGE_SERVICE\"", precision = 16, scale = 4)
    private BigDecimal brokerageService;

    @Column(name = "\"CUSTODIAN_ID\"", nullable = false)
    private Long custodianId;

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

## src/main/java/com/nubo/master/third/parties/api/models/entity/SettlementKey.java

```java
package com.nubo.master.third.parties.api.models.entity;

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

## src/main/java/com/nubo/master/third/parties/api/models/entity/SideEntity.java

```java
package com.nubo.master.third.parties.api.models.entity;

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

## src/main/java/com/nubo/master/third/parties/api/models/entity/StatusEntity.java

```java
package com.nubo.master.third.parties.api.models.entity;

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
    @Column(name = "\"STATUS_ID\"", nullable = false)
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

## src/main/java/com/nubo/master/third/parties/api/models/entity/TaxStatusEntity.java

```java
package com.nubo.master.third.parties.api.models.entity;

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

## src/main/java/com/nubo/master/third/parties/api/models/entity/TradeEntity.java

```java
package com.nubo.master.third.parties.api.models.entity;

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
@Table(name = "\"TRADE\"", schema = "\"NUANBODB\"")
public class TradeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"TRADE_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"MATCH_DATE\"")
    private LocalDate matchDate;

    @Column(name = "\"MATCH_ID\"", precision = 19)
    private Long matchId;

    @Column(name = "\"CLEARING_DATE\"")
    private LocalDate clearingDate;

    @Column(name = "\"RETURN_CLEARING_DATE\"")
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
    @JoinColumn(name = "\"PARTICIPANT_ID_BUY\"", nullable = false)
    private ParticipantEntity participantBuy;

    @ManyToOne
    @JoinColumn(name = "\"PARTICIPANT_ID_SELL\"", nullable = false)
    private ParticipantEntity participantSell;

    @ManyToOne
    @JoinColumn(name = "\"CUSTODIAN_ID_BUY\"", nullable = false)
    private ParticipantEntity custodianBuy;

    @ManyToOne
    @JoinColumn(name = "\"CUSTODIAN_ID_SELL\"", nullable = false)
    private ParticipantEntity custodianSell;

    @Column(name = "\"ASSIGNMENT_MARK_BUY\"")
    private Boolean assignmentMarkBuy;

    @Column(name = "\"ASSIGNMENT_MARK_SELL\"")
    private Boolean assignmentMarkSell;

    @Column(name = "\"FRACTIONAL_MARK_BUY\"")
    private Boolean fractionalMarkBuy;

    @Column(name = "\"FRACTIONAL_MARK_SELL\"")
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

    @Column(name = "\"SPECIAL_TRADE_ID\"")
    private Long specialTradeId;

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

## src/main/java/com/nubo/master/third/parties/api/models/entity/TradingSessionEntity.java

```java
package com.nubo.master.third.parties.api.models.entity;

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

## src/main/java/com/nubo/master/third/parties/api/models/entity/TradingSystemEntity.java

```java
package com.nubo.master.third.parties.api.models.entity;

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

## src/main/java/com/nubo/master/third/parties/api/models/entity/TypeEntity.java

```java
package com.nubo.master.third.parties.api.models.entity;

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
    @Column(name = "\"TYPE_ID\"", nullable = false)
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

## src/main/java/com/nubo/master/third/parties/api/models/enums/PrincipalStatusEnum.java

```java
package com.nubo.master.third.parties.api.models.enums;

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
        if (value == null) return null;
        return value ? PRINCIPAL : SECUNDARIO;
    }

    public static Boolean toBoolean(String value) {
        if (value == null) return null;
        return fromValue(value).getBooleanValue();
    }
}

```

## src/main/java/com/nubo/master/third/parties/api/models/enums/PropertiesEnum.java

```java
package com.nubo.master.third.parties.api.models.enums;

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

## src/main/java/com/nubo/master/third/parties/api/models/enums/ReasonGuaranteeVolumeEnum.java

```java
package com.nubo.master.third.parties.api.models.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Arrays;

@Getter
@RequiredArgsConstructor
public enum ReasonGuaranteeVolumeEnum {

    INVESTOR_NOT_EXIST("Beneficiario final no existe"),
    INVESTOR_INACTIVE("Beneficiario Final inactivo"),
    INVESTOR_BLOCKED("Beneficiario final bloqueado"),
    UNEXPECTED_ERROR("Error inesperado");

    private final String value;

    @JsonValue
    public String getValue() {
        return value;
    }

    @JsonCreator
    public static ReasonGuaranteeVolumeEnum fromValue(String value) {
        return Arrays.stream(ReasonGuaranteeVolumeEnum.values())
                .filter(version -> version.value.equalsIgnoreCase(value))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Unknown value: " + value));
    }

}

```

## src/main/java/com/nubo/master/third/parties/api/models/enums/RelationalTypeEnum.java

```java
package com.nubo.master.third.parties.api.models.enums;

import java.util.Arrays;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum RelationalTypeEnum {

    Y("Y", 1),
    O("O", 2),
    U("U", 3);

    private final String value;
    private final Integer integerValue;

    @JsonValue
    public String getValue() {
        return value;
    }

    @JsonCreator
    public static RelationalTypeEnum fromValue(String value) {
        return Arrays.stream(RelationalTypeEnum.values())
                .filter(type -> type.getValue().equalsIgnoreCase(value))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Invalid relational type: " + value));
    }

    public static RelationalTypeEnum fromInteger(Integer value) {
        if (value == null) return null;
        return Arrays.stream(RelationalTypeEnum.values())
                .filter(type -> type.getIntegerValue().equals(value))
                .findFirst()
                .orElse(null);
    }

    public static Integer toInteger(String value) {
        if (value == null) return null;
        return fromValue(value).getIntegerValue();
    }
}

```

## src/main/java/com/nubo/master/third/parties/api/models/enums/SearchOperationEnum.java

```java
package com.nubo.master.third.parties.api.models.enums;

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

## src/main/java/com/nubo/master/third/parties/api/models/enums/StatusCustodianRelationEnum.java

```java
package com.nubo.master.third.parties.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum StatusCustodianRelationEnum {

    ACTIVE(1163L);

    private final Long id;

}

```

## src/main/java/com/nubo/master/third/parties/api/models/enums/StatusInvestorEnum.java

```java
package com.nubo.master.third.parties.api.models.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Arrays;
import java.util.Objects;

@Getter
@RequiredArgsConstructor
public enum StatusInvestorEnum {

    ACTIVE(515L),
    INACTIVE(516L);

    private final Long value;

    @JsonValue
    public Long getValue() {
        return value;
    }

    @JsonCreator
    public static StatusInvestorEnum fromValue(Long value) {
        return Arrays.stream(StatusInvestorEnum.values())
                .filter(e -> Objects.equals(e.value, value))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Unknown value: " + value));
    }

}

```

## src/main/java/com/nubo/master/third/parties/api/models/enums/VersionApiEnum.java

```java
package com.nubo.master.third.parties.api.models.enums;

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

## src/main/java/com/nubo/master/third/parties/api/repository/CityRepository.java

```java
package com.nubo.master.third.parties.api.repository;

import com.nubo.master.third.parties.api.models.entity.CityEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CityRepository extends JpaRepository<CityEntity, Long> {
}

```

## src/main/java/com/nubo/master/third/parties/api/repository/CountryRepository.java

```java
package com.nubo.master.third.parties.api.repository;

import com.nubo.master.third.parties.api.models.entity.CountryEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CountryRepository extends JpaRepository<CountryEntity, Long> {
}

```

## src/main/java/com/nubo/master/third/parties/api/repository/CurrencyRepository.java

```java
package com.nubo.master.third.parties.api.repository;

import com.nubo.master.third.parties.api.models.entity.CurrencyEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CurrencyRepository extends JpaRepository<CurrencyEntity, Long> {
}

```

## src/main/java/com/nubo/master/third/parties/api/repository/CustodianRelationRepository.java

```java
package com.nubo.master.third.parties.api.repository;

import com.nubo.master.third.parties.api.models.entity.CustodianRelationEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CustodianRelationRepository extends JpaRepository<CustodianRelationEntity, Long> {

    @Query("""
                SELECT c
                FROM CustodianRelationEntity c
                WHERE c.investorAccount.investor.id = :investorId
                AND c.status.id = :statusId
            """)
    List<CustodianRelationEntity> findByInvestorId(Long investorId, Long statusId);

}

```

## src/main/java/com/nubo/master/third/parties/api/repository/DepartmentRepository.java

```java
package com.nubo.master.third.parties.api.repository;

import com.nubo.master.third.parties.api.models.entity.DepartmentEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepartmentRepository extends JpaRepository<DepartmentEntity, String> {
}

```

## src/main/java/com/nubo/master/third/parties/api/repository/DepositoryRepository.java

```java
package com.nubo.master.third.parties.api.repository;

import com.nubo.master.third.parties.api.models.entity.DepositoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepositoryRepository extends JpaRepository<DepositoryEntity, String> {
}

```

## src/main/java/com/nubo/master/third/parties/api/repository/EquitySecurityRepository.java

```java
package com.nubo.master.third.parties.api.repository;

import com.nubo.master.third.parties.api.models.entity.EquitySecurityEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EquitySecurityRepository extends JpaRepository<EquitySecurityEntity, Long> {
}

```

## src/main/java/com/nubo/master/third/parties/api/repository/ExchangeRateRepository.java

```java
package com.nubo.master.third.parties.api.repository;

import com.nubo.master.third.parties.api.models.entity.ExchangeRateEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.util.List;

public interface ExchangeRateRepository extends JpaRepository<ExchangeRateEntity, Long>,
        JpaSpecificationExecutor<ExchangeRateEntity> {

    @Query("SELECT e FROM ExchangeRateEntity e JOIN e.baseCurrency ba JOIN e.conversionCurrency co " +
            "WHERE ba.id = :baseCurrencyId " +
            "AND co.id = :conversionCurrencyId " +
            "AND e.validityDate = :validityDate")
    List<ExchangeRateEntity> findByBaseCurrencyAndConversionCurrencyAndValidityDate(Long baseCurrencyId,
                                                                                    Long conversionCurrencyId,
                                                                                    LocalDate validityDate);

}

```

## src/main/java/com/nubo/master/third/parties/api/repository/FixedIncomeSecurityRepository.java

```java
package com.nubo.master.third.parties.api.repository;

import com.nubo.master.third.parties.api.models.entity.FixedIncomeSecurityEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FixedIncomeSecurityRepository extends JpaRepository<FixedIncomeSecurityEntity, Long> {
}

```

## src/main/java/com/nubo/master/third/parties/api/repository/GicsRepository.java

```java
package com.nubo.master.third.parties.api.repository;

import com.nubo.master.third.parties.api.models.entity.GicsEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GicsRepository extends JpaRepository<GicsEntity, Long> {
}

```

## src/main/java/com/nubo/master/third/parties/api/repository/IdentificationTypeRepository.java

```java
package com.nubo.master.third.parties.api.repository;

import com.nubo.master.third.parties.api.models.entity.IdentificationTypeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IdentificationTypeRepository extends JpaRepository<IdentificationTypeEntity, Long> {
}

```

## src/main/java/com/nubo/master/third/parties/api/repository/InvestorAccountRepository.java

```java
package com.nubo.master.third.parties.api.repository;

import com.nubo.master.third.parties.api.models.entity.InvestorAccountEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface InvestorAccountRepository extends JpaRepository<InvestorAccountEntity, Long>, JpaSpecificationExecutor<InvestorAccountEntity> {

    Optional<InvestorAccountEntity> findByAccountNumber(String accountNumber);

    @Query("""
                SELECT ia
                FROM InvestorAccountEntity ia
                WHERE ia.accountNumber = :accountNumber
                  AND (:depositoryId IS NULL OR ia.depository.id = :depositoryId)
            """)
    List<InvestorAccountEntity> findByAccountNumberAndDepositoryId(String accountNumber, String depositoryId);

    @Query("SELECT DISTINCT ia FROM SettlementEntity s " +
            "JOIN s.investorAccount ia " +
            "JOIN s.trade t " +
            "WHERE t.id = :tradeId")
    Page<InvestorAccountEntity> findInvestorAccountSettlementByTradeId(Long tradeId, Pageable pageable);

}

```

## src/main/java/com/nubo/master/third/parties/api/repository/InvestorRepository.java

```java
package com.nubo.master.third.parties.api.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import com.nubo.master.third.parties.api.models.entity.InvestorEntity;

public interface InvestorRepository extends JpaRepository<InvestorEntity, Long>, JpaSpecificationExecutor<InvestorEntity> {

    @Query("SELECT DISTINCT i FROM SettlementEntity s " +
            "JOIN s.investor i " +
            "JOIN s.trade t " +
            "WHERE t.id = :tradeId")
    Page<InvestorEntity> findInvestorSettlementByTradeId(Long tradeId, Pageable pageable);

    Page<InvestorEntity> findByCompanyNameStartingWithIgnoreCase(String companyName, Pageable pageable);
    List<InvestorEntity> findByCompanyNameStartingWithIgnoreCase(String companyName, Sort sort);

    Page<InvestorEntity> findByDocumentNumberStartingWith(String documentNumber, Pageable pageable);

    List<InvestorEntity> findByDocumentNumberStartingWith(String documentNumber, Sort sort);

}

```

## src/main/java/com/nubo/master/third/parties/api/repository/IssuerRepository.java

```java
package com.nubo.master.third.parties.api.repository;

import com.nubo.master.third.parties.api.models.entity.IssuerEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IssuerRepository extends JpaRepository<IssuerEntity, Long> {
}

```

## src/main/java/com/nubo/master/third/parties/api/repository/JointAccountRepository.java

```java
package com.nubo.master.third.parties.api.repository;

import com.nubo.master.third.parties.api.models.entity.JointAccountEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface JointAccountRepository extends JpaRepository<JointAccountEntity, Long> {

    @Query("SELECT j FROM JointAccountEntity j JOIN j.investorAccount inv WHERE inv.id = :investorAccountId")
    List<JointAccountEntity> findByInvestorAccountId(Long investorAccountId);

}

```

## src/main/java/com/nubo/master/third/parties/api/repository/ParticipantAccountRepository.java

```java
package com.nubo.master.third.parties.api.repository;

import com.nubo.master.third.parties.api.models.entity.ParticipantAccountEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ParticipantAccountRepository extends JpaRepository<ParticipantAccountEntity, Long> {

    @Query("""
                SELECT ia
                FROM ParticipantAccountEntity ia
                WHERE ia.accountNumber = :accountNumber
                  AND (:depositoryId IS NULL OR ia.depository.id = :depositoryId)
            """)
    List<ParticipantAccountEntity> findByAccountNumberAndDepositoryId(String accountNumber, String depositoryId);

}

```

## src/main/java/com/nubo/master/third/parties/api/repository/ParticipantRepository.java

```java
package com.nubo.master.third.parties.api.repository;

import com.nubo.master.third.parties.api.models.entity.ParticipantEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ParticipantRepository extends JpaRepository<ParticipantEntity, Long> {
}

```

## src/main/java/com/nubo/master/third/parties/api/repository/SecurityTitleRepository.java

```java
package com.nubo.master.third.parties.api.repository;

import com.nubo.master.third.parties.api.models.entity.SecurityTitleEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SecurityTitleRepository extends JpaRepository<SecurityTitleEntity, Long> {
}

```

## src/main/java/com/nubo/master/third/parties/api/repository/StatusRepository.java

```java
package com.nubo.master.third.parties.api.repository;

import com.nubo.master.third.parties.api.models.entity.StatusEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StatusRepository extends JpaRepository<StatusEntity, Long> {
    
    List<StatusEntity> findByCategoryIgnoreCase(String category);
    
}

```

## src/main/java/com/nubo/master/third/parties/api/repository/TaxStatusRepository.java

```java
package com.nubo.master.third.parties.api.repository;

import com.nubo.master.third.parties.api.models.entity.TaxStatusEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaxStatusRepository extends JpaRepository<TaxStatusEntity, Long> {
}

```

## src/main/java/com/nubo/master/third/parties/api/repository/TypeRepository.java

```java
package com.nubo.master.third.parties.api.repository;

import com.nubo.master.third.parties.api.models.entity.TypeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TypeRepository extends JpaRepository<TypeEntity, Long> {
}

```

## src/main/java/com/nubo/master/third/parties/api/service/CustodianRelationService.java

```java
package com.nubo.master.third.parties.api.service;

import com.nubo.master.third.parties.api.models.dto.response.CustodianRelationOutDto;

import java.util.List;

public interface CustodianRelationService {

    List<CustodianRelationOutDto> findCustodianRelationsByInvestor(Long investorId);

}

```

## src/main/java/com/nubo/master/third/parties/api/service/EquitySecurityService.java

```java
package com.nubo.master.third.parties.api.service;

import com.nubo.master.third.parties.api.models.dto.request.EquitySecurityInDto;
import com.nubo.master.third.parties.api.models.dto.request.EquitySecurityUpdateInDto;
import com.nubo.master.third.parties.api.models.dto.response.EquitySecurityOutDto;
import com.nubo.master.third.parties.api.models.dto.response.PageResponseOutDto;
import org.springframework.data.domain.Pageable;

public interface EquitySecurityService {

    PageResponseOutDto<EquitySecurityOutDto> findAllEquitySecurity(Pageable pageable);

    EquitySecurityOutDto findEquitySecurity(Long securityId);

    EquitySecurityOutDto createEquitySecurity(EquitySecurityInDto equitySecurityInDto);

    EquitySecurityOutDto updateEquitySecurity(EquitySecurityUpdateInDto equitySecurityUpdateInDto, Long securityId);

    void deleteEquitySecurity(Long securityId);

}

```

## src/main/java/com/nubo/master/third/parties/api/service/ExchangeRateService.java

```java
package com.nubo.master.third.parties.api.service;

import com.nubo.master.third.parties.api.models.dto.request.ExchangeRateInDto;
import com.nubo.master.third.parties.api.models.dto.request.ExchangeRateUpdateInDto;
import com.nubo.master.third.parties.api.models.dto.response.ExchangeRateOutDto;
import com.nubo.master.third.parties.api.models.dto.response.PageResponseOutDto;
import org.springframework.data.domain.Pageable;

import java.time.LocalDate;

public interface ExchangeRateService {

    PageResponseOutDto<ExchangeRateOutDto> findAllExchangeRate(Pageable pageable, Long baseCurrency, LocalDate validityDate,
                                                               Long conversionCurrency);

    ExchangeRateOutDto findExchangeRateById(Long exchangeRateId);

    ExchangeRateOutDto createExchangeRate(ExchangeRateInDto exchangeRateInDto);

    ExchangeRateOutDto updateExchangeRate(ExchangeRateUpdateInDto exchangeRateUpdateInDto, Long exchangeRateId);

    void deleteExchangeRateById(Long exchangeRateId);

}

```

## src/main/java/com/nubo/master/third/parties/api/service/FixedIncomeSecurityService.java

```java
package com.nubo.master.third.parties.api.service;

import com.nubo.master.third.parties.api.models.dto.request.FixedIncomeSecurityInDto;
import com.nubo.master.third.parties.api.models.dto.request.FixedIncomeSecurityUpdateInDto;
import com.nubo.master.third.parties.api.models.dto.response.FixedIncomeSecurityOutDto;
import com.nubo.master.third.parties.api.models.dto.response.PageResponseOutDto;
import org.springframework.data.domain.Pageable;

public interface FixedIncomeSecurityService {

    PageResponseOutDto<FixedIncomeSecurityOutDto> findAllFixedIncomeSecurity(Pageable pageable);

    FixedIncomeSecurityOutDto findFixedIncomeSecurity(Long securityId);

    FixedIncomeSecurityOutDto createFixedIncomeSecurity(FixedIncomeSecurityInDto fixedIncomeSecurityInDto);

    FixedIncomeSecurityOutDto updateFixedIncomeSecurity(FixedIncomeSecurityUpdateInDto fixedIncomeSecurityUpdateInDto, Long securityId);

    void deleteFixedIncomeSecurity(Long securityId);

}

```

## src/main/java/com/nubo/master/third/parties/api/service/InvestorAccountService.java

```java
package com.nubo.master.third.parties.api.service;

import org.springframework.data.domain.Pageable;

import com.nubo.master.third.parties.api.models.dto.request.InvestorAccountInDto;
import com.nubo.master.third.parties.api.models.dto.request.InvestorAccountUpdateInDto;
import com.nubo.master.third.parties.api.models.dto.response.InvestorAccountOutDto;
import com.nubo.master.third.parties.api.models.dto.response.PageResponseOutDto;

import java.util.List;

public interface InvestorAccountService {

    PageResponseOutDto<InvestorAccountOutDto> findAllInvestorAccount(int page, int size, String sort, String order, boolean all);

    PageResponseOutDto<InvestorAccountOutDto> findInvestorAccountSettlementByTradeId(Long tradeId, Pageable pageable);

    InvestorAccountOutDto findInvestorAccountById(Long investorAccountId);

    InvestorAccountOutDto createInvestorAccount(InvestorAccountInDto investorAccountInDto);

    InvestorAccountOutDto updateInvestorAccount(Long investorAccountId, InvestorAccountUpdateInDto investorAccountUpdateInDto);

    InvestorAccountOutDto findInvestorAccountByAccountNumber(String accountNumber);

    List<InvestorAccountOutDto> findInvestorAccountsByAccountNumberAndDepositoryId(String accountNumber, String depositoryId);

    PageResponseOutDto<InvestorAccountOutDto> findAllInvestorAccountByInvestorDynamic(
        int page,
        int size,
        String sort,
        String order,
        boolean all,
        Long investorId,
        String fieldName,
        String fieldValue,
        String operation);

}

```

## src/main/java/com/nubo/master/third/parties/api/service/InvestorService.java

```java
package com.nubo.master.third.parties.api.service;

import org.springframework.data.domain.Pageable;

import com.nubo.master.third.parties.api.models.dto.request.InvestorInDto;
import com.nubo.master.third.parties.api.models.dto.request.InvestorUpdateInDto;
import com.nubo.master.third.parties.api.models.dto.response.InvestorOutDto;
import com.nubo.master.third.parties.api.models.dto.response.InvestorSimpleOutDto;
import com.nubo.master.third.parties.api.models.dto.response.PageResponseOutDto;
import com.nubo.master.third.parties.api.models.dto.response.ValidateGuaranteeCalculateOutDto;

public interface InvestorService {

    PageResponseOutDto<InvestorOutDto> findAllInvestor(int page, int size, String sort, String order, boolean all);

    PageResponseOutDto<InvestorOutDto> findInvestorSettlementByTradeId(Long tradeId, Pageable pageable);

    InvestorOutDto findInvestorById(Long investorId);

    InvestorOutDto createInvestor(InvestorInDto investorInDto);

    InvestorOutDto updateInvestor(Long investorId, InvestorUpdateInDto investorUpdateInDto);

    ValidateGuaranteeCalculateOutDto validateInvestorCalculateGuarantee(Long investorId);

    PageResponseOutDto<InvestorOutDto> findAllInvestorDynamic(
        int page,
        int size,
        String sort,
        String order,
        boolean all,
        String fieldName,
        String fieldValue,
        String operation,
        String companyName,
        String documentNumber,
        Long countryId,
        Long statusId,
        Long investorId);

    PageResponseOutDto<InvestorSimpleOutDto> findInvestorsByNameStartingWith(String name, int page, int size, String sort, String order, boolean all);

    PageResponseOutDto<InvestorSimpleOutDto> findInvestorsByDocumentNumberStartingWith(String documentNumber, int page, int size, String sort, String order, boolean all);

}

```

## src/main/java/com/nubo/master/third/parties/api/service/IssuerService.java

```java
package com.nubo.master.third.parties.api.service;

import com.nubo.master.third.parties.api.models.dto.request.IssuerInDto;
import com.nubo.master.third.parties.api.models.dto.request.IssuerUpdateInDto;
import com.nubo.master.third.parties.api.models.dto.response.IssuerOutDto;
import com.nubo.master.third.parties.api.models.dto.response.PageResponseOutDto;
import org.springframework.data.domain.Pageable;

public interface IssuerService {

    PageResponseOutDto<IssuerOutDto> findAllIssuer(Pageable pageable);

    IssuerOutDto findIssuerById(Long issuerId);

    IssuerOutDto createIssuer(IssuerInDto issuerInDto);

    IssuerOutDto updateIssuer(Long issuerId, IssuerUpdateInDto issuerUpdateInDto);
}

```

## src/main/java/com/nubo/master/third/parties/api/service/JointAccountService.java

```java
package com.nubo.master.third.parties.api.service;

import com.nubo.master.third.parties.api.models.dto.response.JointAccountOutDto;

import java.util.List;

public interface JointAccountService {

    List<JointAccountOutDto> findJointAccountByInvestorAccountId(Long investorAccountId);

}

```

## src/main/java/com/nubo/master/third/parties/api/service/StatusService.java

```java
package com.nubo.master.third.parties.api.service;

import org.springframework.data.domain.Pageable;

import com.nubo.master.third.parties.api.models.dto.response.StatusOutDto;
import com.nubo.master.third.parties.api.models.dto.response.PageResponseOutDto;

import java.util.List;

public interface StatusService {

    PageResponseOutDto<StatusOutDto> findAllStatus(Pageable pageable);

    List<StatusOutDto> findAllStatusByCategory(String category);

}

```

## src/main/java/com/nubo/master/third/parties/api/service/impl/CustodianRelationServiceImpl.java

```java
package com.nubo.master.third.parties.api.service.impl;

import com.nubo.master.third.parties.api.application.properties.PropertiesContext;
import com.nubo.master.third.parties.api.exception.ServiceException;
import com.nubo.master.third.parties.api.exception.error.ErrorCode;
import com.nubo.master.third.parties.api.helpers.MapperUtil;
import com.nubo.master.third.parties.api.models.dto.response.CustodianRelationOutDto;
import com.nubo.master.third.parties.api.models.entity.CustodianRelationEntity;
import com.nubo.master.third.parties.api.models.enums.StatusCustodianRelationEnum;
import com.nubo.master.third.parties.api.models.enums.VersionApiEnum;
import com.nubo.master.third.parties.api.repository.CustodianRelationRepository;
import com.nubo.master.third.parties.api.service.CustodianRelationService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
@Slf4j
public class CustodianRelationServiceImpl implements CustodianRelationService {

    private final CustodianRelationRepository custodianRelationRepository;

    @Override
    public List<CustodianRelationOutDto> findCustodianRelationsByInvestor(Long investorId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findCustodianRelationsByInvestorV1(investorId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<CustodianRelationOutDto> findCustodianRelationsByInvestorV1(Long investorId) {
        log.debug("Start method findCustodianRelationsByInvestorV1, investorId -> {}", investorId);

        List<CustodianRelationEntity> custodianRelationEntityList =
                custodianRelationRepository.findByInvestorId(investorId, StatusCustodianRelationEnum.ACTIVE.getId());

        List<CustodianRelationOutDto> custodianRelationOutDtoList =
                custodianRelationEntityList.stream().map(MapperUtil::custodianRelationEntityToCustodianRelationOutDto).toList();

        log.info("End method findCustodianRelationsByInvestorV1, custodianRelationOutDtoList -> {}", custodianRelationOutDtoList);

        return custodianRelationOutDtoList;
    }

}

```

## src/main/java/com/nubo/master/third/parties/api/service/impl/EquitySecurityServiceImpl.java

```java
package com.nubo.master.third.parties.api.service.impl;

import com.nubo.master.third.parties.api.application.properties.PropertiesConfig;
import com.nubo.master.third.parties.api.application.properties.PropertiesContext;
import com.nubo.master.third.parties.api.application.util.ApplicationUtils;
import com.nubo.master.third.parties.api.exception.ServiceException;
import com.nubo.master.third.parties.api.exception.error.ErrorCode;
import com.nubo.master.third.parties.api.helpers.MapperPageUtil;
import com.nubo.master.third.parties.api.helpers.MapperUtil;
import com.nubo.master.third.parties.api.models.dto.request.EquitySecurityInDto;
import com.nubo.master.third.parties.api.models.dto.request.EquitySecurityUpdateInDto;
import com.nubo.master.third.parties.api.models.dto.response.EquitySecurityOutDto;
import com.nubo.master.third.parties.api.models.dto.response.PageResponseOutDto;
import com.nubo.master.third.parties.api.models.entity.EquitySecurityEntity;
import com.nubo.master.third.parties.api.models.entity.SecurityTitleEntity;
import com.nubo.master.third.parties.api.models.enums.VersionApiEnum;
import com.nubo.master.third.parties.api.repository.EquitySecurityRepository;
import com.nubo.master.third.parties.api.repository.SecurityTitleRepository;
import com.nubo.master.third.parties.api.service.EquitySecurityService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class EquitySecurityServiceImpl implements EquitySecurityService {

    private final EquitySecurityRepository equitySecurityRepository;
    private final SecurityTitleRepository securityTitleRepository;
    private final PropertiesConfig propertiesConfig;

    @Override
    public PageResponseOutDto<EquitySecurityOutDto> findAllEquitySecurity(Pageable pageable) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
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

        log.info("End method findAllEquitySecurityV1, equitySecurityOutDtoList -> {}", equitySecurityOutDtoList);

        return MapperPageUtil.pageToPageResponseOutDto(equitySecurityOutDtoList, equitySecurityPage);
    }

    @Override
    public EquitySecurityOutDto findEquitySecurity(Long securityId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findEquitySecurityV1(securityId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private EquitySecurityOutDto findEquitySecurityV1(Long securityId) {
        log.debug("Start method findEquitySecurityV1, securityId -> {}", securityId);

        EquitySecurityEntity equitySecurityEntityLast = validateEquitySecurityEntity(securityId);

        EquitySecurityOutDto equitySecurityOutDto = MapperUtil.equitySecurityEntityToEquitySecurityOutDto(equitySecurityEntityLast);

        log.info("End method findEquitySecurityV1, equitySecurityOutDto -> {}", equitySecurityOutDto);

        return equitySecurityOutDto;
    }

    @Override
    public EquitySecurityOutDto createEquitySecurity(EquitySecurityInDto equitySecurityInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return createEquitySecurityV1(equitySecurityInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private EquitySecurityOutDto createEquitySecurityV1(EquitySecurityInDto equitySecurityInDto) {
        log.debug("Start method createEquitySecurityV1, equitySecurity -> {}", equitySecurityInDto);

        Optional<EquitySecurityEntity> equitySecurityEntityLast = equitySecurityRepository.findById(equitySecurityInDto.getSecurityId());
        if (equitySecurityEntityLast.isPresent()) {
            throw new ServiceException(ErrorCode.EQUITY_SECURITY_EXISTS, HttpStatus.BAD_REQUEST);
        }

        SecurityTitleEntity securityTitleEntityLast = validateSecurityTitle(equitySecurityInDto.getSecurityId());

        EquitySecurityEntity equitySecurityEntity = EquitySecurityEntity.builder()
                .securityId(securityTitleEntityLast.getId())
                .parent(equitySecurityInDto.getParent())
                .amountIssued(equitySecurityInDto.getAmountIssued())
                .nominalPrice(equitySecurityInDto.getNominalPrice())
                .nominalPriceDate(ApplicationUtils.convertStringToLocalDate(equitySecurityInDto.getNominalPriceDate()))
                .negotiate(equitySecurityInDto.getNegotiate())
                .dateEquityValue(ApplicationUtils.convertStringToLocalDate(equitySecurityInDto.getDateEquityValue()))
                .equityValue(equitySecurityInDto.getEquityValue())
                .dateFaceValue(ApplicationUtils.convertStringToLocalDate(equitySecurityInDto.getDateFaceValue()))
                .faceValue(equitySecurityInDto.getFaceValue())
                .numberOutstanding(equitySecurityInDto.getNumberOutstanding())
                .submission(equitySecurityInDto.getSubmission())
                .liquidity(equitySecurityInDto.getLiquidity())
                .specialRights(equitySecurityInDto.getSpecialRights())
                .exdividendDate(ApplicationUtils.convertStringToLocalDate(equitySecurityInDto.getExdividendDate()))
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
    public EquitySecurityOutDto updateEquitySecurity(EquitySecurityUpdateInDto equitySecurityUpdateInDto, Long securityId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return updateEquitySecurityV1(equitySecurityUpdateInDto, securityId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private EquitySecurityOutDto updateEquitySecurityV1(EquitySecurityUpdateInDto equitySecurityUpdateInDto, Long securityId) {
        log.debug("Start method updateEquitySecurityV1, equitySecurity -> {}, securityId -> {}",
                equitySecurityUpdateInDto, securityId);

        EquitySecurityEntity equitySecurityEntityLast = validateEquitySecurityEntity(securityId);

        EquitySecurityEntity equitySecurityEntity = EquitySecurityEntity.builder()
                .securityId(equitySecurityEntityLast.getSecurityId())
                .parent(ObjectUtils.isEmpty(equitySecurityUpdateInDto.getParent()) ?
                        equitySecurityEntityLast.getParent() : equitySecurityUpdateInDto.getParent())
                .amountIssued(ObjectUtils.isEmpty(equitySecurityUpdateInDto.getAmountIssued()) ?
                        equitySecurityEntityLast.getAmountIssued() : equitySecurityUpdateInDto.getAmountIssued())
                .nominalPrice(ObjectUtils.isEmpty(equitySecurityUpdateInDto.getNominalPrice()) ?
                        equitySecurityEntityLast.getNominalPrice() : equitySecurityUpdateInDto.getNominalPrice())
                .nominalPriceDate(ObjectUtils.isEmpty(equitySecurityUpdateInDto.getNominalPriceDate()) ?
                        equitySecurityEntityLast.getNominalPriceDate() :
                        ApplicationUtils.convertStringToLocalDate(equitySecurityUpdateInDto.getNominalPriceDate()))
                .negotiate(ObjectUtils.isEmpty(equitySecurityUpdateInDto.getNegotiate()) ?
                        equitySecurityEntityLast.getNegotiate() : equitySecurityUpdateInDto.getNegotiate())
                .dateEquityValue(ObjectUtils.isEmpty(equitySecurityUpdateInDto.getDateEquityValue()) ?
                        equitySecurityEntityLast.getDateEquityValue() :
                        ApplicationUtils.convertStringToLocalDate((equitySecurityUpdateInDto.getDateEquityValue())))
                .equityValue(ObjectUtils.isEmpty(equitySecurityUpdateInDto.getEquityValue()) ?
                        equitySecurityEntityLast.getEquityValue() : equitySecurityUpdateInDto.getEquityValue())
                .dateFaceValue(ObjectUtils.isEmpty(equitySecurityUpdateInDto.getDateFaceValue()) ?
                        equitySecurityEntityLast.getDateFaceValue() :
                        ApplicationUtils.convertStringToLocalDate(equitySecurityUpdateInDto.getDateFaceValue()))
                .faceValue(ObjectUtils.isEmpty(equitySecurityUpdateInDto.getFaceValue()) ?
                        equitySecurityEntityLast.getFaceValue() : equitySecurityUpdateInDto.getFaceValue())
                .numberOutstanding(ObjectUtils.isEmpty(equitySecurityUpdateInDto.getNumberOutstanding()) ?
                        equitySecurityEntityLast.getNumberOutstanding() : equitySecurityUpdateInDto.getNumberOutstanding())
                .submission(ObjectUtils.isEmpty(equitySecurityUpdateInDto.getSubmission()) ?
                        equitySecurityEntityLast.getSubmission() : equitySecurityUpdateInDto.getSubmission())
                .liquidity(ObjectUtils.isEmpty(equitySecurityUpdateInDto.getLiquidity()) ?
                        equitySecurityEntityLast.getLiquidity() : equitySecurityUpdateInDto.getLiquidity())
                .specialRights(ObjectUtils.isEmpty(equitySecurityUpdateInDto.getSpecialRights()) ?
                        equitySecurityEntityLast.getSpecialRights() : equitySecurityUpdateInDto.getSpecialRights())
                .exdividendDate(ObjectUtils.isEmpty(equitySecurityUpdateInDto.getExdividendDate()) ?
                        equitySecurityEntityLast.getExdividendDate() :
                        ApplicationUtils.convertStringToLocalDate(equitySecurityUpdateInDto.getExdividendDate()))
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
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
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
                .orElseThrow(() -> new ServiceException(ErrorCode.EQUITY_SECURITY_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private SecurityTitleEntity validateSecurityTitle(Long securityId) {
        return securityTitleRepository.findById(securityId)
                .orElseThrow(() -> new ServiceException(ErrorCode.SECURITY_TITLE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

}

```

## src/main/java/com/nubo/master/third/parties/api/service/impl/ExchangeRateServiceImpl.java

```java
package com.nubo.master.third.parties.api.service.impl;

import com.nubo.master.third.parties.api.application.properties.PropertiesConfig;
import com.nubo.master.third.parties.api.application.properties.PropertiesContext;
import com.nubo.master.third.parties.api.application.util.ApplicationUtils;
import com.nubo.master.third.parties.api.exception.ServiceException;
import com.nubo.master.third.parties.api.exception.error.ErrorCode;
import com.nubo.master.third.parties.api.helpers.MapperPageUtil;
import com.nubo.master.third.parties.api.helpers.MapperUtil;
import com.nubo.master.third.parties.api.models.dto.request.ExchangeRateInDto;
import com.nubo.master.third.parties.api.models.dto.request.ExchangeRateUpdateInDto;
import com.nubo.master.third.parties.api.models.dto.response.ExchangeRateOutDto;
import com.nubo.master.third.parties.api.models.dto.response.PageResponseOutDto;
import com.nubo.master.third.parties.api.models.entity.CurrencyEntity;
import com.nubo.master.third.parties.api.models.entity.ExchangeRateEntity;
import com.nubo.master.third.parties.api.models.enums.VersionApiEnum;
import com.nubo.master.third.parties.api.repository.CurrencyRepository;
import com.nubo.master.third.parties.api.repository.ExchangeRateRepository;
import com.nubo.master.third.parties.api.service.ExchangeRateService;
import jakarta.persistence.criteria.Predicate;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
@Slf4j
public class ExchangeRateServiceImpl implements ExchangeRateService {

    private final ExchangeRateRepository exchangeRateRepository;
    private final CurrencyRepository currencyRepository;
    private final PropertiesConfig propertiesConfig;

    @Override
    public PageResponseOutDto<ExchangeRateOutDto> findAllExchangeRate(Pageable pageable, Long baseCurrency, LocalDate validityDate,
                                                                      Long conversionCurrency) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllExchangeRateV1(pageable, baseCurrency, validityDate, conversionCurrency);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<ExchangeRateOutDto> findAllExchangeRateV1(Pageable pageable, Long baseCurrency, LocalDate validityDate,
                                                                         Long conversionCurrency) {
        log.info("Start method findAllExchangeRateV1 with page: {} and size: {}", pageable.getPageNumber(),
                pageable.getPageSize());

        Specification<ExchangeRateEntity> specification = (root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();
            if (!ObjectUtils.isEmpty(baseCurrency)) {
                predicates.add(criteriaBuilder.equal(root.get("baseCurrency").get("id"), baseCurrency));
            }
            if (!ObjectUtils.isEmpty(conversionCurrency)) {
                predicates.add(criteriaBuilder.equal(root.get("conversionCurrency").get("id"), conversionCurrency));
            }
            if (!ObjectUtils.isEmpty(validityDate)) {
                predicates.add(criteriaBuilder.equal(root.get("validityDate"), validityDate));
            }
            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };

        Page<ExchangeRateEntity> exchangeRatePage = exchangeRateRepository.findAll(specification, pageable);

        List<ExchangeRateOutDto> exchangeRateOutDtoList = exchangeRatePage.getContent().stream()
                .map(MapperUtil::exchangeRateEntityToExchangeRateOutDto)
                .toList();

        log.info("End method findAllExchangeRateV1, exchangeRateOutDtoList -> {}", exchangeRateOutDtoList);

        return MapperPageUtil.pageToPageResponseOutDto(exchangeRateOutDtoList, exchangeRatePage);
    }

    @Override
    public ExchangeRateOutDto findExchangeRateById(Long exchangeRateId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findExchangeRateByIdV1(exchangeRateId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private ExchangeRateOutDto findExchangeRateByIdV1(Long exchangeRateId) {
        log.debug("Start method findExchangeRateV1, exchangeRateId -> {}", exchangeRateId);

        ExchangeRateEntity exchangeRateEntityLast = validateExchangeRate(exchangeRateId);

        ExchangeRateOutDto exchangeRateOutDto = MapperUtil.exchangeRateEntityToExchangeRateOutDto(exchangeRateEntityLast);

        log.info("End method findExchangeRateV1, exchangeRateOutDto -> {}", exchangeRateOutDto);

        return exchangeRateOutDto;
    }

    @Override
    public ExchangeRateOutDto createExchangeRate(ExchangeRateInDto exchangeRateInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return createExchangeRateV1(exchangeRateInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private ExchangeRateOutDto createExchangeRateV1(ExchangeRateInDto exchangeRateInDto) {
        log.debug("Start method createExchangeRateV1, exchangeRate -> {}", exchangeRateInDto);

        if (Objects.equals(exchangeRateInDto.getBaseCurrency(), exchangeRateInDto.getConversionCurrency())) {
            throw new ServiceException(ErrorCode.EXCHANGE_RATE_CURRENCY_EQUALS, HttpStatus.BAD_REQUEST);
        }

        List<ExchangeRateEntity> exchangeRateEntityList = exchangeRateRepository.findByBaseCurrencyAndConversionCurrencyAndValidityDate(
                exchangeRateInDto.getBaseCurrency(),
                exchangeRateInDto.getConversionCurrency(),
                ApplicationUtils.convertStringToLocalDate(exchangeRateInDto.getValidityDate()));

        if (!exchangeRateEntityList.isEmpty()) {
            throw new ServiceException(ErrorCode.EXCHANGE_RATE_EXISTS, HttpStatus.BAD_REQUEST);
        }

        ExchangeRateEntity exchangeRateEntity = ExchangeRateEntity.builder()
                .baseCurrency(validateCurrency(exchangeRateInDto.getBaseCurrency()))
                .conversionCurrency(validateCurrency(exchangeRateInDto.getConversionCurrency()))
                .validityDate(ApplicationUtils.convertStringToLocalDate(exchangeRateInDto.getValidityDate()))
                .conversionValue(exchangeRateInDto.getConversionValue())
                .recordDate(ApplicationUtils.convertStringToLocalDate(exchangeRateInDto.getRecordDate()))
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyIp(PropertiesContext.getClientIp())
                .lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyDate(PropertiesContext.getClientDatetime())
                .build();

        ExchangeRateOutDto exchangeRateOutDto = MapperUtil.exchangeRateEntityToExchangeRateOutDto(
                exchangeRateRepository.save(exchangeRateEntity));

        log.info("End method createExchangeRateV1, exchangeRateOutDto -> {}", exchangeRateOutDto);

        return exchangeRateOutDto;
    }

    @Override
    public ExchangeRateOutDto updateExchangeRate(ExchangeRateUpdateInDto exchangeRateUpdateInDto, Long exchangeRateId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return updateExchangeRateV1(exchangeRateUpdateInDto, exchangeRateId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private ExchangeRateOutDto updateExchangeRateV1(ExchangeRateUpdateInDto exchangeRateUpdateInDto, Long exchangeRateId) {
        log.debug("Start method updateExchangeRateV1, exchangeRate -> {}, exchangeRateId -> {}",
                exchangeRateUpdateInDto, exchangeRateId);

        ExchangeRateEntity exchangeRateEntityLast = validateExchangeRate(exchangeRateId);

        ExchangeRateEntity exchangeRateEntity = ExchangeRateEntity.builder()
                .id(exchangeRateEntityLast.getId())
                .baseCurrency(ObjectUtils.isEmpty(exchangeRateUpdateInDto.getBaseCurrency()) ?
                        exchangeRateEntityLast.getBaseCurrency() : validateCurrency(exchangeRateUpdateInDto.getBaseCurrency()))
                .conversionCurrency(ObjectUtils.isEmpty(exchangeRateUpdateInDto.getConversionCurrency()) ?
                        exchangeRateEntityLast.getConversionCurrency() : validateCurrency(exchangeRateUpdateInDto.getConversionCurrency()))
                .validityDate(ObjectUtils.isEmpty(exchangeRateUpdateInDto.getValidityDate()) ?
                        exchangeRateEntityLast.getValidityDate() : ApplicationUtils.convertStringToLocalDate(exchangeRateUpdateInDto.getValidityDate()))
                .conversionValue(ObjectUtils.isEmpty(exchangeRateUpdateInDto.getConversionValue()) ?
                        exchangeRateEntityLast.getConversionValue() : exchangeRateUpdateInDto.getConversionValue())
                .recordDate(ObjectUtils.isEmpty(exchangeRateUpdateInDto.getRecordDate()) ?
                        exchangeRateEntityLast.getRecordDate() :
                        ApplicationUtils.convertStringToLocalDate(exchangeRateUpdateInDto.getRecordDate()))
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyIp(PropertiesContext.getClientIp())
                .lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyDate(PropertiesContext.getClientDatetime())
                .build();

        ExchangeRateOutDto exchangeRateOutDto = MapperUtil.exchangeRateEntityToExchangeRateOutDto(
                exchangeRateRepository.save(exchangeRateEntity));

        log.info("End method updateExchangeRateV1, exchangeRateOutDto -> {}", exchangeRateOutDto);

        return exchangeRateOutDto;
    }

    @Override
    public void deleteExchangeRateById(Long exchangeRateId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            deleteExchangeRateV1(exchangeRateId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private void deleteExchangeRateV1(Long exchangeRateId) {
        log.debug("Start method deleteExchangeRateV1, exchangeRateId -> {}", exchangeRateId);

        ExchangeRateEntity exchangeRateEntityLast = validateExchangeRate(exchangeRateId);

        exchangeRateRepository.delete(exchangeRateEntityLast);

        log.info("End method deleteExchangeRateV1");
    }

    private CurrencyEntity validateCurrency(Long currencyId) {
        return currencyRepository.findById(currencyId)
                .orElseThrow(() -> new ServiceException(ErrorCode.CURRENCY_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private ExchangeRateEntity validateExchangeRate(Long exchangeRateId) {
        return exchangeRateRepository.findById(exchangeRateId)
                .orElseThrow(() -> new ServiceException(ErrorCode.EXCHANGE_RATE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

}

```

## src/main/java/com/nubo/master/third/parties/api/service/impl/FixedIncomeSecurityServiceImpl.java

```java
package com.nubo.master.third.parties.api.service.impl;

import com.nubo.master.third.parties.api.application.properties.PropertiesConfig;
import com.nubo.master.third.parties.api.application.properties.PropertiesContext;
import com.nubo.master.third.parties.api.application.util.ApplicationUtils;
import com.nubo.master.third.parties.api.exception.ServiceException;
import com.nubo.master.third.parties.api.exception.error.ErrorCode;
import com.nubo.master.third.parties.api.helpers.MapperPageUtil;
import com.nubo.master.third.parties.api.helpers.MapperUtil;
import com.nubo.master.third.parties.api.models.dto.request.FixedIncomeSecurityInDto;
import com.nubo.master.third.parties.api.models.dto.request.FixedIncomeSecurityUpdateInDto;
import com.nubo.master.third.parties.api.models.dto.response.FixedIncomeSecurityOutDto;
import com.nubo.master.third.parties.api.models.dto.response.PageResponseOutDto;
import com.nubo.master.third.parties.api.models.entity.FixedIncomeSecurityEntity;
import com.nubo.master.third.parties.api.models.entity.SecurityTitleEntity;
import com.nubo.master.third.parties.api.models.enums.VersionApiEnum;
import com.nubo.master.third.parties.api.repository.FixedIncomeSecurityRepository;
import com.nubo.master.third.parties.api.repository.SecurityTitleRepository;
import com.nubo.master.third.parties.api.service.FixedIncomeSecurityService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
@Slf4j
public class FixedIncomeSecurityServiceImpl implements FixedIncomeSecurityService {

    private final SecurityTitleRepository securityTitleRepository;
    private final FixedIncomeSecurityRepository fixedIncomeSecurityRepository;
    private final PropertiesConfig propertiesConfig;

    @Override
    public PageResponseOutDto<FixedIncomeSecurityOutDto> findAllFixedIncomeSecurity(Pageable pageable) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllFixedIncomeSecurityV1(pageable);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<FixedIncomeSecurityOutDto> findAllFixedIncomeSecurityV1(Pageable pageable) {
        log.info("Start method findAllFixedIncomeSecurityV1 with page: {} and size: {}", pageable.getPageNumber(),
                pageable.getPageSize());

        Page<FixedIncomeSecurityEntity> fixedIncomeSecurityPage = fixedIncomeSecurityRepository.findAll(pageable);

        List<FixedIncomeSecurityOutDto> fixedIncomeSecurityOutDtoList = fixedIncomeSecurityPage.getContent().stream()
                .map(MapperUtil::fixedIncomeSecurityEntityToFixedIncomeSecurityOutDto)
                .toList();

        log.info("End method findAllFixedIncomeSecurityV1, fixedIncomeSecurityOutDtoList -> {}", fixedIncomeSecurityOutDtoList);

        return MapperPageUtil.pageToPageResponseOutDto(fixedIncomeSecurityOutDtoList, fixedIncomeSecurityPage);
    }

    @Override
    public FixedIncomeSecurityOutDto findFixedIncomeSecurity(Long securityId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findFixedIncomeSecurityV1(securityId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private FixedIncomeSecurityOutDto findFixedIncomeSecurityV1(Long securityId) {
        log.debug("Start method findFixedIncomeSecurityV1, securityId -> {}", securityId);

        FixedIncomeSecurityEntity fixedIncomeSecurityEntity = fixedIncomeSecurityRepository.findById(securityId)
                .orElseThrow(() -> new ServiceException(ErrorCode.FIXED_INCOME_SECURITY_NOT_FOUND, HttpStatus.NOT_FOUND));

        FixedIncomeSecurityOutDto fixedIncomeSecurityOutDto = MapperUtil.fixedIncomeSecurityEntityToFixedIncomeSecurityOutDto(
                fixedIncomeSecurityEntity);

        log.info("End method findFixedIncomeSecurityV1, fixedIncomeSecurityOutDto -> {}", fixedIncomeSecurityOutDto);

        return fixedIncomeSecurityOutDto;
    }

    @Override
    public FixedIncomeSecurityOutDto createFixedIncomeSecurity(FixedIncomeSecurityInDto fixedIncomeSecurityInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return createFixedIncomeSecurityV1(fixedIncomeSecurityInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private FixedIncomeSecurityOutDto createFixedIncomeSecurityV1(FixedIncomeSecurityInDto fixedIncomeSecurityInDto) {
        log.debug("Start method createFixedIncomeSecurityV1, fixedIncomeSecurity -> {}", fixedIncomeSecurityInDto);

        SecurityTitleEntity securityTitleEntityLast = securityTitleRepository.findById(fixedIncomeSecurityInDto.getSecurityId())
                .orElseThrow(() -> new ServiceException(ErrorCode.SECURITY_TITLE_NOT_FOUND, HttpStatus.NOT_FOUND));

        FixedIncomeSecurityEntity fixedIncomeSecurityEntity = FixedIncomeSecurityEntity.builder()
                .securityId(securityTitleEntityLast.getId())
                .maturityDate(ApplicationUtils.convertStringToLocalDate(fixedIncomeSecurityInDto.getMaturityDate()))
                .firstCuponDate(ApplicationUtils.convertStringToLocalDate(fixedIncomeSecurityInDto.getFirstCuponDate()))
                .couponFrecuency(fixedIncomeSecurityInDto.getCouponFrecuency())
                .initialParValue(fixedIncomeSecurityInDto.getInitialParValue())
                .nominalValue(fixedIncomeSecurityInDto.getNominalValue())
                .couponInterest(fixedIncomeSecurityInDto.getCouponInterest())
                .standardized(fixedIncomeSecurityInDto.getStandardized())
                .minimumUnit(fixedIncomeSecurityInDto.getMinimumUnit())
                .minimumTradeLot(fixedIncomeSecurityInDto.getMinimumTradeLot())
                .spivi(fixedIncomeSecurityInDto.getSpivi())
                .esttit(fixedIncomeSecurityInDto.getEsttit())
                .tradeTtv(fixedIncomeSecurityInDto.getTradeTtv())
                .ttvGuarantees(fixedIncomeSecurityInDto.getTtvGuarantees())
                .ccmCode(fixedIncomeSecurityInDto.getCcmCode())
                .guaranteesCode(fixedIncomeSecurityInDto.getGuaranteesCode())
                .ttvCurve(fixedIncomeSecurityInDto.getTtvCurve())
                .haircut(fixedIncomeSecurityInDto.getHaircut())
                .commonShares(fixedIncomeSecurityInDto.getCommonShares())
                .issueDate(ApplicationUtils.convertStringToLocalDate(fixedIncomeSecurityInDto.getIssueDate()))
                .automatedSheet(fixedIncomeSecurityInDto.getAutomatedSheet())
                .clearingHouseMark(fixedIncomeSecurityInDto.getClearingHouseMark())
                .securityClass(fixedIncomeSecurityInDto.getSecurityClass())
                .administeringEntity(fixedIncomeSecurityInDto.getAdministeringEntity())
                .numberCouponsInterest(fixedIncomeSecurityInDto.getNumberCouponsInterest())
                .numberPaymentCoupons(fixedIncomeSecurityInDto.getNumberPaymentCoupons())
                .referenceRate(fixedIncomeSecurityInDto.getReferenceRate())
                .rateUsageMethod(fixedIncomeSecurityInDto.getRateUsageMethod())
                .interestCalculationBase(fixedIncomeSecurityInDto.getInterestCalculationBase())
                .acceptedFractionationType(fixedIncomeSecurityInDto.getAcceptedFractionationType())
                .maximunNumberFraction(fixedIncomeSecurityInDto.getMaximunNumberFraction())
                .issueDateUniqueSerie(ApplicationUtils.convertStringToLocalDate(fixedIncomeSecurityInDto.getIssueDateUniqueSerie()))
                .totalAmountIssue(fixedIncomeSecurityInDto.getTotalAmountIssue())
                .dayFirstCashFlow(fixedIncomeSecurityInDto.getDayFirstCashFlow())
                .monthFirstCashFlow(fixedIncomeSecurityInDto.getMonthFirstCashFlow())
                .itemComission(fixedIncomeSecurityInDto.getItemComission())
                .marketType(fixedIncomeSecurityInDto.getMarketType())
                .negotiationModality(fixedIncomeSecurityInDto.getNegotiationModality())
                .indicatorAcceptsRepos(fixedIncomeSecurityInDto.getIndicatorAcceptsRepos())
                .sourceWithholding(fixedIncomeSecurityInDto.getSourceWithholding())
                .baseDiscount(fixedIncomeSecurityInDto.getBaseDiscount())
                .rateBrokerApplicable(fixedIncomeSecurityInDto.getRateBrokerApplicable())
                .negotiationIndicator(fixedIncomeSecurityInDto.getNegotiationIndicator())
                .indicator(fixedIncomeSecurityInDto.getIndicator())
                .numberReinvestment(fixedIncomeSecurityInDto.getNumberReinvestment())
                .maximumReinvestmentDate(ApplicationUtils.convertStringToLocalDate(fixedIncomeSecurityInDto.getMaximumReinvestmentDate()))
                .withReinvestmentFlow(fixedIncomeSecurityInDto.getWithReinvestmentFlow())
                .validateTypeIssues(fixedIncomeSecurityInDto.getValidateTypeIssues())
                .paymentRateNonCapitalizing(fixedIncomeSecurityInDto.getPaymentRateNonCapitalizing())
                .capitalizableRate(fixedIncomeSecurityInDto.getCapitalizableRate())
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyIp(PropertiesContext.getClientIp())
                .lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyDate(PropertiesContext.getClientDatetime())
                .build();

        FixedIncomeSecurityOutDto fixedIncomeSecurityOutDto = MapperUtil.fixedIncomeSecurityEntityToFixedIncomeSecurityOutDto(
                fixedIncomeSecurityRepository.save(fixedIncomeSecurityEntity));

        log.info("End method createFixedIncomeSecurityV1, fixedIncomeSecurityOutDto -> {}", fixedIncomeSecurityOutDto);

        return fixedIncomeSecurityOutDto;
    }

    @Override
    public FixedIncomeSecurityOutDto updateFixedIncomeSecurity(FixedIncomeSecurityUpdateInDto fixedIncomeSecurityUpdateInDto,
                                                               Long securityId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return updateFixedIncomeSecurityV1(fixedIncomeSecurityUpdateInDto, securityId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private FixedIncomeSecurityOutDto updateFixedIncomeSecurityV1(FixedIncomeSecurityUpdateInDto fixedIncomeSecurityUpdateInDto,
                                                                  Long securityId) {
        log.debug("Start method updateFixedIncomeSecurityV1, fixedIncomeSecurity -> {}, " + "securityId -> {}",
                fixedIncomeSecurityUpdateInDto, securityId);

        FixedIncomeSecurityEntity fixedIncomeSecurityEntityLast = fixedIncomeSecurityRepository.findById(securityId)
                .orElseThrow(() -> new ServiceException(ErrorCode.FIXED_INCOME_SECURITY_NOT_FOUND, HttpStatus.NOT_FOUND));

        FixedIncomeSecurityEntity fixedIncomeSecurityEntity = FixedIncomeSecurityEntity.builder()
                .securityId(fixedIncomeSecurityEntityLast.getSecurityId())
                .maturityDate(ObjectUtils.isEmpty(fixedIncomeSecurityUpdateInDto.getMaturityDate()) ?
                        fixedIncomeSecurityEntityLast.getMaturityDate() :
                        ApplicationUtils.convertStringToLocalDate(fixedIncomeSecurityUpdateInDto.getMaturityDate()))
                .firstCuponDate(ObjectUtils.isEmpty(fixedIncomeSecurityUpdateInDto.getFirstCuponDate()) ?
                        fixedIncomeSecurityEntityLast.getFirstCuponDate() :
                        ApplicationUtils.convertStringToLocalDate(fixedIncomeSecurityUpdateInDto.getFirstCuponDate()))
                .couponFrecuency(ObjectUtils.isEmpty(fixedIncomeSecurityUpdateInDto.getCouponFrecuency()) ?
                        fixedIncomeSecurityEntityLast.getCouponFrecuency() : fixedIncomeSecurityUpdateInDto.getCouponFrecuency())
                .initialParValue(ObjectUtils.isEmpty(fixedIncomeSecurityUpdateInDto.getInitialParValue()) ?
                        fixedIncomeSecurityEntityLast.getInitialParValue() : fixedIncomeSecurityUpdateInDto.getInitialParValue())
                .nominalValue(ObjectUtils.isEmpty(fixedIncomeSecurityUpdateInDto.getNominalValue()) ?
                        fixedIncomeSecurityEntityLast.getNominalValue() : fixedIncomeSecurityUpdateInDto.getNominalValue())
                .couponInterest(ObjectUtils.isEmpty(fixedIncomeSecurityUpdateInDto.getCouponInterest()) ?
                        fixedIncomeSecurityEntityLast.getCouponInterest() : fixedIncomeSecurityUpdateInDto.getCouponInterest())
                .standardized(ObjectUtils.isEmpty(fixedIncomeSecurityUpdateInDto.getStandardized()) ?
                        fixedIncomeSecurityEntityLast.getStandardized() : fixedIncomeSecurityUpdateInDto.getStandardized())
                .minimumUnit(ObjectUtils.isEmpty(fixedIncomeSecurityUpdateInDto.getMinimumUnit()) ?
                        fixedIncomeSecurityEntityLast.getMinimumUnit() : fixedIncomeSecurityUpdateInDto.getMinimumUnit())
                .minimumTradeLot(ObjectUtils.isEmpty(fixedIncomeSecurityUpdateInDto.getMinimumTradeLot()) ?
                        fixedIncomeSecurityEntityLast.getMinimumTradeLot() : fixedIncomeSecurityUpdateInDto.getMinimumTradeLot())
                .spivi(ObjectUtils.isEmpty(fixedIncomeSecurityUpdateInDto.getSpivi()) ?
                        fixedIncomeSecurityEntityLast.getSpivi() : fixedIncomeSecurityUpdateInDto.getSpivi())
                .esttit(ObjectUtils.isEmpty(fixedIncomeSecurityUpdateInDto.getEsttit()) ?
                        fixedIncomeSecurityEntityLast.getEsttit() : fixedIncomeSecurityUpdateInDto.getEsttit())
                .tradeTtv(ObjectUtils.isEmpty(fixedIncomeSecurityUpdateInDto.getTradeTtv()) ?
                        fixedIncomeSecurityEntityLast.getTradeTtv() : fixedIncomeSecurityUpdateInDto.getTradeTtv())
                .ttvGuarantees(ObjectUtils.isEmpty(fixedIncomeSecurityUpdateInDto.getTtvGuarantees()) ?
                        fixedIncomeSecurityEntityLast.getTtvGuarantees() : fixedIncomeSecurityUpdateInDto.getTtvGuarantees())
                .ccmCode(ObjectUtils.isEmpty(fixedIncomeSecurityUpdateInDto.getCcmCode()) ?
                        fixedIncomeSecurityEntityLast.getCcmCode() : fixedIncomeSecurityUpdateInDto.getCcmCode())
                .guaranteesCode(ObjectUtils.isEmpty(fixedIncomeSecurityUpdateInDto.getGuaranteesCode()) ?
                        fixedIncomeSecurityEntityLast.getGuaranteesCode() : fixedIncomeSecurityUpdateInDto.getGuaranteesCode())
                .ttvCurve(ObjectUtils.isEmpty(fixedIncomeSecurityUpdateInDto.getTtvCurve()) ?
                        fixedIncomeSecurityEntityLast.getTtvCurve() : fixedIncomeSecurityUpdateInDto.getTtvCurve())
                .haircut(ObjectUtils.isEmpty(fixedIncomeSecurityUpdateInDto.getHaircut()) ?
                        fixedIncomeSecurityEntityLast.getHaircut() : fixedIncomeSecurityUpdateInDto.getHaircut())
                .commonShares(ObjectUtils.isEmpty(fixedIncomeSecurityUpdateInDto.getCommonShares()) ?
                        fixedIncomeSecurityEntityLast.getCommonShares() : fixedIncomeSecurityUpdateInDto.getCommonShares())
                .issueDate(ObjectUtils.isEmpty(fixedIncomeSecurityUpdateInDto.getIssueDate()) ?
                        fixedIncomeSecurityEntityLast.getIssueDate() :
                        ApplicationUtils.convertStringToLocalDate(fixedIncomeSecurityUpdateInDto.getIssueDate()))
                .automatedSheet(ObjectUtils.isEmpty(fixedIncomeSecurityUpdateInDto.getAutomatedSheet()) ?
                        fixedIncomeSecurityEntityLast.getAutomatedSheet() : fixedIncomeSecurityUpdateInDto.getAutomatedSheet())
                .clearingHouseMark(ObjectUtils.isEmpty(fixedIncomeSecurityUpdateInDto.getClearingHouseMark()) ?
                        fixedIncomeSecurityEntityLast.getClearingHouseMark() : fixedIncomeSecurityUpdateInDto.getClearingHouseMark())
                .securityClass(ObjectUtils.isEmpty(fixedIncomeSecurityUpdateInDto.getSecurityClass()) ?
                        fixedIncomeSecurityEntityLast.getSecurityClass() : fixedIncomeSecurityUpdateInDto.getSecurityClass())
                .administeringEntity(ObjectUtils.isEmpty(fixedIncomeSecurityUpdateInDto.getAdministeringEntity()) ?
                        fixedIncomeSecurityEntityLast.getAdministeringEntity() : fixedIncomeSecurityUpdateInDto.getAdministeringEntity())
                .numberCouponsInterest(ObjectUtils.isEmpty(fixedIncomeSecurityUpdateInDto.getNumberCouponsInterest()) ?
                        fixedIncomeSecurityEntityLast.getNumberCouponsInterest() : fixedIncomeSecurityUpdateInDto.getNumberCouponsInterest())
                .numberPaymentCoupons(ObjectUtils.isEmpty(fixedIncomeSecurityUpdateInDto.getNumberPaymentCoupons()) ?
                        fixedIncomeSecurityEntityLast.getNumberPaymentCoupons() : fixedIncomeSecurityUpdateInDto.getNumberPaymentCoupons())
                .referenceRate(ObjectUtils.isEmpty(fixedIncomeSecurityUpdateInDto.getReferenceRate()) ?
                        fixedIncomeSecurityEntityLast.getReferenceRate() : fixedIncomeSecurityUpdateInDto.getReferenceRate())
                .rateUsageMethod(ObjectUtils.isEmpty(fixedIncomeSecurityUpdateInDto.getRateUsageMethod()) ?
                        fixedIncomeSecurityEntityLast.getRateUsageMethod() : fixedIncomeSecurityUpdateInDto.getRateUsageMethod())
                .interestCalculationBase(ObjectUtils.isEmpty(fixedIncomeSecurityUpdateInDto.getInterestCalculationBase()) ?
                        fixedIncomeSecurityEntityLast.getInterestCalculationBase() : fixedIncomeSecurityUpdateInDto.getInterestCalculationBase())
                .acceptedFractionationType(ObjectUtils.isEmpty(fixedIncomeSecurityUpdateInDto.getAcceptedFractionationType()) ?
                        fixedIncomeSecurityEntityLast.getAcceptedFractionationType() : fixedIncomeSecurityUpdateInDto.getAcceptedFractionationType())
                .maximunNumberFraction(ObjectUtils.isEmpty(fixedIncomeSecurityUpdateInDto.getMaximunNumberFraction()) ?
                        fixedIncomeSecurityEntityLast.getMaximunNumberFraction() : fixedIncomeSecurityUpdateInDto.getMaximunNumberFraction())
                .issueDateUniqueSerie(ObjectUtils.isEmpty(fixedIncomeSecurityUpdateInDto.getIssueDateUniqueSerie()) ?
                        fixedIncomeSecurityEntityLast.getIssueDateUniqueSerie() :
                        ApplicationUtils.convertStringToLocalDate(fixedIncomeSecurityUpdateInDto.getIssueDateUniqueSerie()))
                .totalAmountIssue(ObjectUtils.isEmpty(fixedIncomeSecurityUpdateInDto.getTotalAmountIssue()) ?
                        fixedIncomeSecurityEntityLast.getTotalAmountIssue() : fixedIncomeSecurityUpdateInDto.getTotalAmountIssue())
                .dayFirstCashFlow(ObjectUtils.isEmpty(fixedIncomeSecurityUpdateInDto.getDayFirstCashFlow()) ?
                        fixedIncomeSecurityEntityLast.getDayFirstCashFlow() : fixedIncomeSecurityUpdateInDto.getDayFirstCashFlow())
                .monthFirstCashFlow(ObjectUtils.isEmpty(fixedIncomeSecurityUpdateInDto.getMonthFirstCashFlow()) ?
                        fixedIncomeSecurityEntityLast.getMonthFirstCashFlow() : fixedIncomeSecurityUpdateInDto.getMonthFirstCashFlow())
                .itemComission(ObjectUtils.isEmpty(fixedIncomeSecurityUpdateInDto.getItemComission()) ?
                        fixedIncomeSecurityEntityLast.getItemComission() : fixedIncomeSecurityUpdateInDto.getItemComission())
                .marketType(ObjectUtils.isEmpty(fixedIncomeSecurityUpdateInDto.getMarketType()) ?
                        fixedIncomeSecurityEntityLast.getMarketType() : fixedIncomeSecurityUpdateInDto.getMarketType())
                .negotiationModality(ObjectUtils.isEmpty(fixedIncomeSecurityUpdateInDto.getNegotiationModality()) ?
                        fixedIncomeSecurityEntityLast.getNegotiationModality() : fixedIncomeSecurityUpdateInDto.getNegotiationModality())
                .indicatorAcceptsRepos(ObjectUtils.isEmpty(fixedIncomeSecurityUpdateInDto.getIndicatorAcceptsRepos()) ?
                        fixedIncomeSecurityEntityLast.getIndicatorAcceptsRepos() : fixedIncomeSecurityUpdateInDto.getIndicatorAcceptsRepos())
                .sourceWithholding(ObjectUtils.isEmpty(fixedIncomeSecurityUpdateInDto.getSourceWithholding()) ?
                        fixedIncomeSecurityEntityLast.getSourceWithholding() : fixedIncomeSecurityUpdateInDto.getSourceWithholding())
                .baseDiscount(ObjectUtils.isEmpty(fixedIncomeSecurityUpdateInDto.getBaseDiscount()) ?
                        fixedIncomeSecurityEntityLast.getBaseDiscount() : fixedIncomeSecurityUpdateInDto.getBaseDiscount())
                .rateBrokerApplicable(ObjectUtils.isEmpty(fixedIncomeSecurityUpdateInDto.getRateBrokerApplicable()) ?
                        fixedIncomeSecurityEntityLast.getRateBrokerApplicable() : fixedIncomeSecurityUpdateInDto.getRateBrokerApplicable())
                .negotiationIndicator(ObjectUtils.isEmpty(fixedIncomeSecurityUpdateInDto.getNegotiationIndicator()) ?
                        fixedIncomeSecurityEntityLast.getNegotiationIndicator() : fixedIncomeSecurityUpdateInDto.getNegotiationIndicator())
                .indicator(ObjectUtils.isEmpty(fixedIncomeSecurityUpdateInDto.getIndicator()) ?
                        fixedIncomeSecurityEntityLast.getIndicator() : fixedIncomeSecurityUpdateInDto.getIndicator())
                .numberReinvestment(ObjectUtils.isEmpty(fixedIncomeSecurityUpdateInDto.getNumberReinvestment()) ?
                        fixedIncomeSecurityEntityLast.getNumberReinvestment() : fixedIncomeSecurityUpdateInDto.getNumberReinvestment())
                .maximumReinvestmentDate(ObjectUtils.isEmpty(fixedIncomeSecurityUpdateInDto.getMaximumReinvestmentDate()) ?
                        fixedIncomeSecurityEntityLast.getMaximumReinvestmentDate() :
                        ApplicationUtils.convertStringToLocalDate(fixedIncomeSecurityUpdateInDto.getMaximumReinvestmentDate()))
                .withReinvestmentFlow(ObjectUtils.isEmpty(fixedIncomeSecurityUpdateInDto.getWithReinvestmentFlow()) ?
                        fixedIncomeSecurityEntityLast.getWithReinvestmentFlow() : fixedIncomeSecurityUpdateInDto.getWithReinvestmentFlow())
                .validateTypeIssues(ObjectUtils.isEmpty(fixedIncomeSecurityUpdateInDto.getValidateTypeIssues()) ?
                        fixedIncomeSecurityEntityLast.getValidateTypeIssues() : fixedIncomeSecurityUpdateInDto.getValidateTypeIssues())
                .paymentRateNonCapitalizing(ObjectUtils.isEmpty(fixedIncomeSecurityUpdateInDto.getPaymentRateNonCapitalizing()) ?
                        fixedIncomeSecurityEntityLast.getPaymentRateNonCapitalizing() : fixedIncomeSecurityUpdateInDto.getPaymentRateNonCapitalizing())
                .capitalizableRate(ObjectUtils.isEmpty(fixedIncomeSecurityUpdateInDto.getCapitalizableRate()) ?
                        fixedIncomeSecurityEntityLast.getCapitalizableRate() : fixedIncomeSecurityUpdateInDto.getCapitalizableRate())
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyIp(PropertiesContext.getClientIp())
                .lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyDate(PropertiesContext.getClientDatetime())
                .build();

        FixedIncomeSecurityOutDto fixedIncomeSecurityOutDto = MapperUtil.fixedIncomeSecurityEntityToFixedIncomeSecurityOutDto(
                fixedIncomeSecurityRepository.save(fixedIncomeSecurityEntity));

        log.info("End method updateFixedIncomeSecurityV1, fixedIncomeSecurityOutDto -> {}", fixedIncomeSecurityOutDto);

        return fixedIncomeSecurityOutDto;
    }

    @Override
    public void deleteFixedIncomeSecurity(Long securityId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            deleteFixedIncomeSecurityV1(securityId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private void deleteFixedIncomeSecurityV1(Long securityId) {
        log.debug("Start method deleteFixedIncomeSecurityV1, securityId -> {}", securityId);

        FixedIncomeSecurityEntity fixedIncomeSecurityEntityLast = fixedIncomeSecurityRepository.findById(securityId)
                .orElseThrow(() -> new ServiceException(ErrorCode.FIXED_INCOME_SECURITY_NOT_FOUND, HttpStatus.NOT_FOUND));

        fixedIncomeSecurityRepository.delete(fixedIncomeSecurityEntityLast);

        log.info("End method deleteFixedIncomeSecurityV1");
    }

}

```

## src/main/java/com/nubo/master/third/parties/api/service/impl/InvestorAccountServiceImpl.java

```java
package com.nubo.master.third.parties.api.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import com.nubo.master.third.parties.api.models.entity.ParticipantAccountEntity;
import com.nubo.master.third.parties.api.repository.ParticipantAccountRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import com.nubo.master.third.parties.api.application.properties.PropertiesConfig;
import com.nubo.master.third.parties.api.application.properties.PropertiesContext;
import com.nubo.master.third.parties.api.exception.ServiceException;
import com.nubo.master.third.parties.api.exception.error.ErrorCode;
import com.nubo.master.third.parties.api.helpers.InvestorAccountSpecificationFactory;
import com.nubo.master.third.parties.api.helpers.MapperPageUtil;
import com.nubo.master.third.parties.api.helpers.MapperUtil;
import com.nubo.master.third.parties.api.models.dto.request.InvestorAccountFilterRequestDto;
import com.nubo.master.third.parties.api.models.dto.request.InvestorAccountInDto;
import com.nubo.master.third.parties.api.models.dto.request.InvestorAccountUpdateInDto;
import com.nubo.master.third.parties.api.models.dto.response.InvestorAccountOutDto;
import com.nubo.master.third.parties.api.models.dto.response.PageResponseOutDto;
import com.nubo.master.third.parties.api.models.entity.DepositoryEntity;
import com.nubo.master.third.parties.api.models.entity.InvestorAccountEntity;
import com.nubo.master.third.parties.api.models.entity.InvestorEntity;
import com.nubo.master.third.parties.api.models.entity.ParticipantEntity;
import com.nubo.master.third.parties.api.models.entity.StatusEntity;
import com.nubo.master.third.parties.api.models.entity.TypeEntity;
import com.nubo.master.third.parties.api.models.enums.SearchOperationEnum;
import com.nubo.master.third.parties.api.models.enums.VersionApiEnum;
import com.nubo.master.third.parties.api.repository.DepositoryRepository;
import com.nubo.master.third.parties.api.repository.InvestorAccountRepository;
import com.nubo.master.third.parties.api.repository.InvestorRepository;
import com.nubo.master.third.parties.api.repository.ParticipantRepository;
import com.nubo.master.third.parties.api.repository.StatusRepository;
import com.nubo.master.third.parties.api.repository.TypeRepository;
import com.nubo.master.third.parties.api.service.InvestorAccountService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class InvestorAccountServiceImpl implements InvestorAccountService {

    private final InvestorAccountRepository investorAccountRepository;
    private final InvestorRepository investorRepository;
    private final ParticipantRepository participantRepository;
    private final ParticipantAccountRepository participantAccountRepository;
    private final StatusRepository statusRepository;
    private final TypeRepository typeRepository;
    private final DepositoryRepository depositoryRepository;
    private final PropertiesConfig propertiesConfig;



    @Override
    public PageResponseOutDto<InvestorAccountOutDto> findAllInvestorAccount(int page, int size, String sort, String order, boolean all) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllInvestorAccountV1(page, size, sort, order, all);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<InvestorAccountOutDto> findAllInvestorAccountV1(int page, int size, String sort, String order, boolean all) {
        log.info("Start method findAllInvestorAccountV1 with page: {}, size: {}, sort: {}, order: {}, all: {}", page, size, sort, order, all);

        Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
        Sort sortObj = Sort.by(direction, sort != null ? sort : "id");
        
        if (all) {
            List<InvestorAccountEntity> allResults = investorAccountRepository.findAll(sortObj);
            List<InvestorAccountOutDto> investorAccountOutDtoList = allResults.stream()
                    .map(MapperUtil::investorAccountEntityToInvestorAccountOutDto)
                    .toList();
            return PageResponseOutDto.<InvestorAccountOutDto>builder()
                    .content(investorAccountOutDtoList)
                    .pageSize(investorAccountOutDtoList.size())
                    .pageNumber(0)
                    .totalElements((long) investorAccountOutDtoList.size())
                    .totalPages(1)
                    .build();
        } else {
            Pageable pageable = PageRequest.of(page, size, sortObj);
            Page<InvestorAccountEntity> investorAccountPage = investorAccountRepository.findAll(pageable);

            List<InvestorAccountOutDto> investorAccountOutDtoList = investorAccountPage.getContent().stream()
                    .map(MapperUtil::investorAccountEntityToInvestorAccountOutDto)
                    .toList();

            log.info("End method findAllInvestorAccountV1, investorAccountOutDtoList -> {}", investorAccountOutDtoList);

            return MapperPageUtil.pageToPageResponseOutDto(investorAccountOutDtoList, investorAccountPage);
        }
    }

    @Override
    public PageResponseOutDto<InvestorAccountOutDto> findInvestorAccountSettlementByTradeId(Long tradeId, Pageable pageable) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findInvestorAccountSettlementByTradeIdV1(tradeId, pageable);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<InvestorAccountOutDto> findInvestorAccountSettlementByTradeIdV1(Long tradeId, Pageable pageable) {
        log.info("Start method findInvestorAccountSettlementByTradeIdV1, idTrade -> {}", tradeId);

        Page<InvestorAccountEntity> investorAccountPage = investorAccountRepository.findInvestorAccountSettlementByTradeId(tradeId, pageable);

        List<InvestorAccountOutDto> investorAccountOutDtoList = investorAccountPage.getContent().stream()
                .map(MapperUtil::investorAccountEntityToInvestorAccountOutDto)
                .toList();

        log.info("End method findInvestorAccountSettlementByTradeIdV1, investorAccountOutDto -> {}", investorAccountOutDtoList);

        return MapperPageUtil.pageToPageResponseOutDto(investorAccountOutDtoList, investorAccountPage);
    }

    @Override
    public InvestorAccountOutDto findInvestorAccountById(Long accountId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findInvestorAccountByIdV1(accountId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private InvestorAccountOutDto findInvestorAccountByIdV1(Long accountId) {
        log.info("Start method findInvestorAccountByIdV1, idInvestor -> {}", accountId);

        InvestorAccountEntity account = investorAccountRepository.findById(accountId)
                .orElseThrow(() -> new ServiceException(ErrorCode.INVESTOR_ACCOUNT_NOT_FOUND, HttpStatus.NOT_FOUND));

        InvestorAccountOutDto investorAccountOutDto = MapperUtil.investorAccountEntityToInvestorAccountOutDto(account);

        log.info("End method findInvestorAccountByIdV1, idInvestor -> {}", investorAccountOutDto);

        return investorAccountOutDto;
    }

    @Override
    public InvestorAccountOutDto createInvestorAccount(InvestorAccountInDto investorAccountInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return createInvestorAccountV1(investorAccountInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private InvestorAccountOutDto createInvestorAccountV1(InvestorAccountInDto investorAccountInDto) {
        log.debug("Start method createInvestorAccountV1, investor -> {}", investorAccountInDto);

        InvestorAccountEntity investorAccountEntity = InvestorAccountEntity.builder()
                .investor(validateInvestor(investorAccountInDto.getInvestorId()))
                .accountNumber(investorAccountInDto.getAccountNumber())
                .status(ObjectUtils.isEmpty(investorAccountInDto.getStatusId()) ?
                        null : validateStatus(investorAccountInDto.getStatusId()))
                .type(ObjectUtils.isEmpty(investorAccountInDto.getTypeId()) ?
                        null : validateType(investorAccountInDto.getTypeId()))
                .depository(ObjectUtils.isEmpty(investorAccountInDto.getDepositoryId()) ?
                        null : validateDepository(investorAccountInDto.getDepositoryId()))
                .participant(validateParticipant(investorAccountInDto.getParticipantId()))
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyIp(PropertiesContext.getClientIp())
                .lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyDate(PropertiesContext.getClientDatetime())
                .build();

        InvestorAccountOutDto investorAccountOutDto =
                MapperUtil.investorAccountEntityToInvestorAccountOutDto(investorAccountRepository.save(investorAccountEntity));

        log.info("End method createAccountV1, investor -> {}", investorAccountOutDto);

        return investorAccountOutDto;
    }


    @Override
    public InvestorAccountOutDto updateInvestorAccount(Long investorAccountId, InvestorAccountUpdateInDto investorAccountUpdateInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return updateInvestorAccountV1(investorAccountId, investorAccountUpdateInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private InvestorAccountOutDto updateInvestorAccountV1(Long investorAccountId, InvestorAccountUpdateInDto investorAccountUpdateInDto) {
        log.debug("Start method updateInvestorAccountV1, idInvestor -> {}, investor -> {}", investorAccountId, investorAccountUpdateInDto);

        InvestorAccountEntity investorAccountEntityLast = investorAccountRepository.findById(investorAccountId)
                .orElseThrow(() -> new ServiceException(ErrorCode.INVESTOR_ACCOUNT_NOT_FOUND, HttpStatus.NOT_FOUND));

        InvestorAccountEntity investorAccountEntity = InvestorAccountEntity.builder()
                .id(investorAccountEntityLast.getId())
                .investor(ObjectUtils.isEmpty(investorAccountUpdateInDto.getInvestorId()) ?
                        investorAccountEntityLast.getInvestor() : validateInvestor(investorAccountUpdateInDto.getInvestorId()))
                .accountNumber(ObjectUtils.isEmpty(investorAccountUpdateInDto.getAccountNumber()) ?
                        investorAccountEntityLast.getAccountNumber() : investorAccountUpdateInDto.getAccountNumber())
                .status(ObjectUtils.isEmpty(investorAccountUpdateInDto.getStatusId()) ?
                        investorAccountEntityLast.getStatus() : validateStatus(investorAccountUpdateInDto.getStatusId()))
                .type(ObjectUtils.isEmpty(investorAccountUpdateInDto.getTypeId()) ?
                        investorAccountEntityLast.getType() : validateType(investorAccountUpdateInDto.getTypeId()))
                .depository(ObjectUtils.isEmpty(investorAccountUpdateInDto.getDepositoryId()) ?
                        investorAccountEntityLast.getDepository() : validateDepository(investorAccountUpdateInDto.getDepositoryId()))
                .participant(ObjectUtils.isEmpty(investorAccountUpdateInDto.getParticipantId()) ?
                        investorAccountEntityLast.getParticipant()
                        : validateParticipant(investorAccountUpdateInDto.getParticipantId()))
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyIp(PropertiesContext.getClientIp())
                .lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyDate(PropertiesContext.getClientDatetime())
                .build();

        InvestorAccountOutDto investorAccountOutDto =
                MapperUtil.investorAccountEntityToInvestorAccountOutDto(investorAccountRepository.save(investorAccountEntity));

        log.info("End method updateInvestorAccountV1, investor -> {}", investorAccountOutDto);

        return investorAccountOutDto;
    }

    @Override
    public InvestorAccountOutDto findInvestorAccountByAccountNumber(String accountNumber) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findInvestorAccountByAccountNumberV1(accountNumber);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private InvestorAccountOutDto findInvestorAccountByAccountNumberV1(String accountNumber) {
        log.info("Start method findInvestorAccountByAccountNumberV1, accountNumber -> {}", accountNumber);

        InvestorAccountEntity account = investorAccountRepository.findByAccountNumber(accountNumber)
                .orElseThrow(() -> new ServiceException(ErrorCode.INVESTOR_ACCOUNT_NOT_FOUND, HttpStatus.NOT_FOUND));

        InvestorAccountOutDto investorAccountOutDto = MapperUtil.investorAccountEntityToInvestorAccountOutDto(account);

        log.info("End method findInvestorAccountByAccountNumberV1, accountNumber -> {}", investorAccountOutDto);

        return investorAccountOutDto;
    }

    @Override
    public List<InvestorAccountOutDto> findInvestorAccountsByAccountNumberAndDepositoryId(String accountNumber, String depositoryId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findInvestorAccountsByAccountNumberV1(accountNumber, depositoryId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<InvestorAccountOutDto> findInvestorAccountsByAccountNumberV1(String accountNumber, String depositoryId) {
        log.info("Start method findInvestorAccountsByAccountNumberV1, accountNumber -> {}", accountNumber);

        List<ParticipantAccountEntity> participantAccounts;
        List<InvestorAccountOutDto> investorAccountOutList;
        List<InvestorAccountEntity> investorAccounts = investorAccountRepository.findByAccountNumberAndDepositoryId(accountNumber, depositoryId);

        if (investorAccounts.isEmpty()) {
            log.info("Investor account not found, trying by participant account, accountNumber -> {}", accountNumber);
            participantAccounts = participantAccountRepository.findByAccountNumberAndDepositoryId(accountNumber, depositoryId);
            investorAccountOutList = participantAccounts.stream()
                    .map(MapperUtil::participantAccountEntityToInvestorAccountOutDto)
                    .toList();
            if (participantAccounts.isEmpty()) {
                throw new ServiceException(ErrorCode.INVESTOR_ACCOUNT_NOT_FOUND, HttpStatus.NOT_FOUND);
            }
        } else {
            investorAccountOutList = investorAccounts.stream()
                    .map(MapperUtil::investorAccountEntityToInvestorAccountOutDto)
                    .toList();
        }

        log.info("End method findInvestorAccountsByAccountNumberV1, accountNumber -> {}", investorAccountOutList.size());
        return investorAccountOutList;
    }

    private InvestorEntity validateInvestor(Long investorId) {
        return investorRepository.findById(investorId)
                .orElseThrow(() -> new ServiceException(ErrorCode.INVESTOR_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private ParticipantEntity validateParticipant(Long participantId) {
        return participantRepository.findById(participantId)
                .orElseThrow(() -> new ServiceException(ErrorCode.PARTICIPANT_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    @Override
    public PageResponseOutDto<InvestorAccountOutDto> findAllInvestorAccountByInvestorDynamic(
            int page,
            int size,
            String sort,
            String order,
            boolean all,
            Long investorId,
            String fieldName,
            String fieldValue,
            String operation) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllInvestorAccountByInvestorDynamicV1(page, size, sort, order, all, investorId, fieldName, fieldValue, operation);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<InvestorAccountOutDto> findAllInvestorAccountByInvestorDynamicV1(
            int page,
            int size,
            String sort,
            String order,
            boolean all,
            Long investorId,
            String fieldName,
            String fieldValue,
            String operation) {

        log.info("Searching investor accounts with combined filters for investor: {}", investorId);

        if (investorId == null) {
            throw new ServiceException(ErrorCode.BAD_REQUEST, HttpStatus.BAD_REQUEST);
        }

        Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
        Sort sortObj = Sort.by(direction, sort != null ? sort : "id");
        
        SearchOperationEnum searchOperation = (operation != null) ? SearchOperationEnum.fromValue(operation) : null;
       
        if (operation != null && searchOperation == null) {
            log.warn("Invalid operation: {}", operation);
            throw new ServiceException(ErrorCode.BAD_REQUEST, HttpStatus.BAD_REQUEST);
        }

        Specification<InvestorAccountEntity> spec;
        
        if (fieldName != null && !fieldName.trim().isEmpty() && 
            fieldValue != null && !fieldValue.trim().isEmpty() && searchOperation != null) {
            
            InvestorAccountFilterRequestDto filter = InvestorAccountFilterRequestDto.builder().build();
            spec = InvestorAccountSpecificationFactory.createCombinedFilter(
                filter, investorId, fieldName, fieldValue, searchOperation);
        } else {
            spec = InvestorAccountSpecificationFactory.createInvestorFilter(investorId);
        }

        if (all) {
            List<InvestorAccountEntity> allResults = investorAccountRepository.findAll(spec, sortObj);
            List<InvestorAccountOutDto> investorAccountOutDtoList = allResults.stream()
                    .map(MapperUtil::investorAccountEntityToInvestorAccountOutDto)
                    .toList();
            return PageResponseOutDto.<InvestorAccountOutDto>builder()
                    .content(investorAccountOutDtoList)
                    .pageSize(investorAccountOutDtoList.size())
                    .pageNumber(0)
                    .totalElements((long) investorAccountOutDtoList.size())
                    .totalPages(1)
                    .build();
        } else {
            Pageable pageable = PageRequest.of(page, size, sortObj);
            Page<InvestorAccountEntity> pagedResult = investorAccountRepository.findAll(spec, pageable);
            
            return buildPageResponse(pagedResult);
        }
    }

    private PageResponseOutDto<InvestorAccountOutDto> buildPageResponse(Page<InvestorAccountEntity> entities) {
        List<InvestorAccountOutDto> investorAccountOutDtoList = entities.getContent().stream()
                .map(MapperUtil::investorAccountEntityToInvestorAccountOutDto)
                .toList();

        return PageResponseOutDto.<InvestorAccountOutDto>builder()
                .content(investorAccountOutDtoList)
                .totalElements(entities.getTotalElements())
                .totalPages(entities.getTotalPages())
                .pageSize(entities.getSize())
                .pageNumber(entities.getNumber())
                .build();
    }

    private TypeEntity validateType(Long typeId) {
        return typeRepository.findById(typeId)
                .orElseThrow(() -> new ServiceException(ErrorCode.TYPE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private StatusEntity validateStatus(Long statusId) {
        return statusRepository.findById(statusId)
                .orElseThrow(() -> new ServiceException(ErrorCode.STATUS_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private DepositoryEntity validateDepository(String depositoryId) {
        return depositoryRepository.findById(depositoryId)
                .orElseThrow(() -> new ServiceException(ErrorCode.DEPOSITORY_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

}

```

## src/main/java/com/nubo/master/third/parties/api/service/impl/InvestorServiceImpl.java

```java
package com.nubo.master.third.parties.api.service.impl;

import com.nubo.master.third.parties.api.application.properties.PropertiesConfig;
import com.nubo.master.third.parties.api.application.properties.PropertiesContext;
import com.nubo.master.third.parties.api.exception.ServiceException;
import com.nubo.master.third.parties.api.exception.error.ErrorCode;
import com.nubo.master.third.parties.api.helpers.InvestorSpecificationFactory;
import com.nubo.master.third.parties.api.helpers.MapperPageUtil;
import com.nubo.master.third.parties.api.helpers.MapperUtil;
import com.nubo.master.third.parties.api.models.dto.request.InvestorFilterRequestDto;
import com.nubo.master.third.parties.api.models.dto.request.InvestorInDto;
import com.nubo.master.third.parties.api.models.dto.request.InvestorUpdateInDto;
import com.nubo.master.third.parties.api.models.dto.response.InvestorOutDto;
import com.nubo.master.third.parties.api.models.dto.response.InvestorSimpleOutDto;
import com.nubo.master.third.parties.api.models.dto.response.PageResponseOutDto;
import com.nubo.master.third.parties.api.models.dto.response.ValidateGuaranteeCalculateOutDto;
import com.nubo.master.third.parties.api.models.entity.CityEntity;
import com.nubo.master.third.parties.api.models.entity.CountryEntity;
import com.nubo.master.third.parties.api.models.entity.CustodianRelationEntity;
import com.nubo.master.third.parties.api.models.entity.DepartmentEntity;
import com.nubo.master.third.parties.api.models.entity.GicsEntity;
import com.nubo.master.third.parties.api.models.entity.IdentificationTypeEntity;
import com.nubo.master.third.parties.api.models.entity.InvestorEntity;
import com.nubo.master.third.parties.api.models.entity.StatusEntity;
import com.nubo.master.third.parties.api.models.entity.TaxStatusEntity;
import com.nubo.master.third.parties.api.models.entity.TypeEntity;
import com.nubo.master.third.parties.api.models.enums.ReasonGuaranteeVolumeEnum;
import com.nubo.master.third.parties.api.models.enums.SearchOperationEnum;
import com.nubo.master.third.parties.api.models.enums.StatusCustodianRelationEnum;
import com.nubo.master.third.parties.api.models.enums.StatusInvestorEnum;
import com.nubo.master.third.parties.api.models.enums.VersionApiEnum;
import com.nubo.master.third.parties.api.repository.CityRepository;
import com.nubo.master.third.parties.api.repository.CountryRepository;
import com.nubo.master.third.parties.api.repository.CustodianRelationRepository;
import com.nubo.master.third.parties.api.repository.DepartmentRepository;
import com.nubo.master.third.parties.api.repository.GicsRepository;
import com.nubo.master.third.parties.api.repository.IdentificationTypeRepository;
import com.nubo.master.third.parties.api.repository.InvestorRepository;
import com.nubo.master.third.parties.api.repository.StatusRepository;
import com.nubo.master.third.parties.api.repository.TaxStatusRepository;
import com.nubo.master.third.parties.api.repository.TypeRepository;
import com.nubo.master.third.parties.api.service.InvestorService;
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

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class InvestorServiceImpl implements InvestorService {

    private final InvestorRepository investorRepository;
    private final CountryRepository countryRepository;
    private final DepartmentRepository departmentRepository;
    private final StatusRepository statusRepository;
    private final TypeRepository typeRepository;
    private final CityRepository cityRepository;
    private final GicsRepository gicsRepository;
    private final TaxStatusRepository taxStatusRepository;
    private final IdentificationTypeRepository identificationTypeRepository;
    private final CustodianRelationRepository custodianRelationRepository;
    private final PropertiesConfig propertiesConfig;

    @Override
    public PageResponseOutDto<InvestorOutDto> findAllInvestor(int page, int size, String sort, String order, boolean all) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllInvestorV1(page, size, sort, order, all);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<InvestorOutDto> findAllInvestorV1(int page, int size, String sort, String order, boolean all) {
        log.info("Start method findAllInvestorV1 with page: {}, size: {}, sort: {}, order: {}, all: {}", page, size, sort, order, all);

        Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
        Sort sortObj = Sort.by(direction, sort != null ? sort : "id");

        if (all) {
            List<InvestorEntity> allResults = investorRepository.findAll(sortObj);
            List<InvestorOutDto> investorOutDtoList = allResults.stream()
                    .map(MapperUtil::investorEntityToInvestorOutDto)
                    .toList();

            log.info("End method findAllInvestorV1, returning all {} results", investorOutDtoList.size());

            return PageResponseOutDto.<InvestorOutDto>builder()
                    .content(investorOutDtoList)
                    .pageSize(investorOutDtoList.size())
                    .pageNumber(0)
                    .totalElements((long) investorOutDtoList.size())
                    .totalPages(1)
                    .build();
        } else {
            Pageable pageable = PageRequest.of(page, size, sortObj);
            Page<InvestorEntity> investorPage = investorRepository.findAll(pageable);

            List<InvestorOutDto> investorOutDtoList = investorPage.getContent().stream()
                    .map(MapperUtil::investorEntityToInvestorOutDto)
                    .toList();

            log.info("End method findAllInvestorV1, investorOutDtoList -> {}", investorOutDtoList);

            return MapperPageUtil.pageToPageResponseOutDto(investorOutDtoList, investorPage);
        }
    }

    @Override
    public PageResponseOutDto<InvestorOutDto> findInvestorSettlementByTradeId(Long tradeId, Pageable pageable) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findInvestorSettlementByTradeIdV1(tradeId, pageable);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<InvestorOutDto> findInvestorSettlementByTradeIdV1(Long tradeId, Pageable pageable) {
        log.info("Start method findInvestorSettlementByTradeIdV1, tradeId -> {}, with page: {} and size: {}", tradeId,
                pageable.getPageNumber(), pageable.getPageSize());

        Page<InvestorEntity> investorPage = investorRepository.findInvestorSettlementByTradeId(tradeId, pageable);

        List<InvestorOutDto> investorOutDtoList = investorPage.getContent().stream()
                .map(MapperUtil::investorEntityToInvestorOutDto)
                .toList();

        log.info("End method findInvestorSettlementByTradeIdV1, investorOutDtoList -> {}", investorOutDtoList);

        return MapperPageUtil.pageToPageResponseOutDto(investorOutDtoList, investorPage);
    }

    @Override
    public InvestorOutDto findInvestorById(Long id) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findInvestorByIdV1(id);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private InvestorOutDto findInvestorByIdV1(Long investorId) {
        log.info("Start method findInvestorByIdV1, investorId -> {}", investorId);

        InvestorEntity investorEntity = this.validateInvestor(investorId);

        List<CustodianRelationEntity> custodianRelationEntityList = custodianRelationRepository.findByInvestorId(investorId,
                StatusCustodianRelationEnum.ACTIVE.getId());

        InvestorOutDto investorOutDto = MapperUtil.investorEntityToInvestorOutDto(investorEntity);
        investorOutDto.setCustodianRelation(!custodianRelationEntityList.isEmpty());

        log.info("End method findInvestorByIdV1, idInvestor -> {}", investorOutDto);

        return investorOutDto;
    }

    @Override
    public InvestorOutDto createInvestor(InvestorInDto investorInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return createInvestorV1(investorInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private InvestorOutDto createInvestorV1(InvestorInDto investorInDto) {
        log.debug("Start method createInvestorV1, investor -> {}", investorInDto);

        InvestorEntity investorEntity = InvestorEntity.builder()
                .code(investorInDto.getCode())
                .firstName(investorInDto.getFirstName())
                .lastName(investorInDto.getLastName())
                .companyName(investorInDto.getCompanyName())
                .type(ObjectUtils.isEmpty(investorInDto.getTypeId()) ?
                        null : validateType(investorInDto.getTypeId()))
                .status(ObjectUtils.isEmpty(investorInDto.getStatusId()) ?
                        null : validateStatus(investorInDto.getStatusId()))
                .country(ObjectUtils.isEmpty(investorInDto.getCountryId()) ?
                        null : validateCountry(investorInDto.getCountryId()))
                .department(ObjectUtils.isEmpty(investorInDto.getDepartmentId()) ?
                        null : validateDepartment(investorInDto.getDepartmentId()))
                .city(ObjectUtils.isEmpty(investorInDto.getCityId()) ?
                        null : validateCity(investorInDto.getCityId()))
                .documentNumber(investorInDto.getDocumentNumber())
                .identificationType(ObjectUtils.isEmpty(investorInDto.getIdentificationTypeId()) ?
                        null : validateIdentificationType(investorInDto.getIdentificationTypeId()))
                .nationality(investorInDto.getNationality())
                .address(investorInDto.getAddress())
                .phoneNumber(investorInDto.getPhoneNumber())
                .email(investorInDto.getEmail())
                .clearinghouseCode(investorInDto.getClearinghouseCode())
                .gics(ObjectUtils.isEmpty(investorInDto.getGicsId()) ?
                        null : validateGics(investorInDto.getGicsId()))
                .moneyLaunderingFlag(investorInDto.getMoneyLaunderingFlag())
                .taxStatus(ObjectUtils.isEmpty(investorInDto.getTaxStatusId()) ?
                        null : validateTaxStatus(investorInDto.getTaxStatusId()))
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyIp(PropertiesContext.getClientIp())
                .lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyDate(PropertiesContext.getClientDatetime())
                .build();

        InvestorOutDto investorOutDto = MapperUtil.investorEntityToInvestorOutDto(investorRepository.save(investorEntity));

        log.info("End method createInvestorV1, investor -> {}", investorOutDto);

        return investorOutDto;
    }

    @Override
    public InvestorOutDto updateInvestor(Long investorId, InvestorUpdateInDto investorUpdateInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return updateInvestorV1(investorId, investorUpdateInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private InvestorOutDto updateInvestorV1(Long investorId, InvestorUpdateInDto investorUpdateInDto) {
        log.debug("Start method updateInvestorV1, idInvestor -> {}, investor -> {}", investorId, investorUpdateInDto);

        InvestorEntity investorEntityLast = this.validateInvestor(investorId);

        InvestorEntity investorEntity = InvestorEntity.builder()
                .id(investorEntityLast.getId())
                .code(ObjectUtils.isEmpty(investorUpdateInDto.getCode()) ?
                        investorEntityLast.getCode() : investorUpdateInDto.getCode())
                .firstName(ObjectUtils.isEmpty(investorUpdateInDto.getFirstName()) ?
                        investorEntityLast.getFirstName() : investorUpdateInDto.getFirstName())
                .lastName(ObjectUtils.isEmpty(investorUpdateInDto.getLastName()) ?
                        investorEntityLast.getLastName() : investorUpdateInDto.getLastName())
                .companyName(ObjectUtils.isEmpty(investorUpdateInDto.getCompanyName()) ?
                        investorEntityLast.getCompanyName() : investorUpdateInDto.getCompanyName())
                .type(ObjectUtils.isEmpty(investorUpdateInDto.getTypeId()) ?
                        investorEntityLast.getType() : validateType(investorUpdateInDto.getTypeId()))
                .status(ObjectUtils.isEmpty(investorUpdateInDto.getStatusId()) ?
                        investorEntityLast.getStatus() : validateStatus(investorUpdateInDto.getStatusId()))
                .country(ObjectUtils.isEmpty(investorUpdateInDto.getCountryId()) ?
                        investorEntityLast.getCountry() : validateCountry(investorUpdateInDto.getCountryId()))
                .department(ObjectUtils.isEmpty(investorUpdateInDto.getDepartmentId()) ?
                        investorEntityLast.getDepartment() : validateDepartment(investorUpdateInDto.getDepartmentId()))
                .city(ObjectUtils.isEmpty(investorUpdateInDto.getCityId()) ?
                        investorEntityLast.getCity() : validateCity(investorUpdateInDto.getCityId()))
                .documentNumber(ObjectUtils.isEmpty(investorUpdateInDto.getDocumentNumber()) ?
                        investorEntityLast.getDocumentNumber() : investorUpdateInDto.getDocumentNumber())
                .identificationType(ObjectUtils.isEmpty(investorUpdateInDto.getIdentificationTypeId()) ?
                        investorEntityLast.getIdentificationType() :
                        validateIdentificationType(investorUpdateInDto.getIdentificationTypeId()))
                .nationality(ObjectUtils.isEmpty(investorUpdateInDto.getNationality()) ?
                        investorEntityLast.getNationality() : investorUpdateInDto.getNationality())
                .address(ObjectUtils.isEmpty(investorUpdateInDto.getAddress()) ?
                        investorEntityLast.getAddress() : investorUpdateInDto.getAddress())
                .phoneNumber(ObjectUtils.isEmpty(investorUpdateInDto.getPhoneNumber()) ?
                        investorEntityLast.getPhoneNumber() : investorUpdateInDto.getPhoneNumber())
                .email(ObjectUtils.isEmpty(investorUpdateInDto.getEmail()) ?
                        investorEntityLast.getEmail() : investorUpdateInDto.getEmail())
                .clearinghouseCode(ObjectUtils.isEmpty(investorUpdateInDto.getClearinghouseCode()) ?
                        investorEntityLast.getClearinghouseCode() : investorUpdateInDto.getClearinghouseCode())
                .gics(ObjectUtils.isEmpty(investorUpdateInDto.getGicsId()) ?
                        investorEntityLast.getGics() : validateGics(investorUpdateInDto.getGicsId()))
                .moneyLaunderingFlag(ObjectUtils.isEmpty(investorUpdateInDto.getMoneyLaunderingFlag()) ?
                        investorEntityLast.getMoneyLaunderingFlag() : investorUpdateInDto.getMoneyLaunderingFlag())
                .taxStatus(ObjectUtils.isEmpty(investorUpdateInDto.getTaxStatusId()) ?
                        investorEntityLast.getTaxStatus() : validateTaxStatus(investorUpdateInDto.getTaxStatusId()))
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyIp(PropertiesContext.getClientIp())
                .lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyDate(PropertiesContext.getClientDatetime())
                .build();

        InvestorOutDto investorOutDto = MapperUtil.investorEntityToInvestorOutDto(investorRepository.save(investorEntity));

        log.info("End method updateInvestorV1, investor -> {}", investorOutDto);

        return investorOutDto;
    }

    @Override
    public ValidateGuaranteeCalculateOutDto validateInvestorCalculateGuarantee(Long investorId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return validateInvestorCalculateGuaranteeV1(investorId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    public ValidateGuaranteeCalculateOutDto validateInvestorCalculateGuaranteeV1(Long investorId) {
        log.debug("Start method validateInvestorCalculateGuaranteeV1, investorId -> {}", investorId);

        ValidateGuaranteeCalculateOutDto validateGuaranteeVolumeOutDto = ValidateGuaranteeCalculateOutDto.builder()
                .valid(false)
                .build();
        try {
            Optional<InvestorEntity> investorEntity = investorRepository.findById(investorId);
            if (investorEntity.isEmpty()) {
                validateGuaranteeVolumeOutDto.setReason(ReasonGuaranteeVolumeEnum.INVESTOR_NOT_EXIST.getValue());
            } else if (StatusInvestorEnum.INACTIVE.getValue().equals(investorEntity.get().getStatus().getId())) {
                validateGuaranteeVolumeOutDto.setReason(ReasonGuaranteeVolumeEnum.INVESTOR_INACTIVE.getValue());
            } else if (Boolean.TRUE.equals(investorEntity.get().getMoneyLaunderingFlag())) {
                validateGuaranteeVolumeOutDto.setReason(ReasonGuaranteeVolumeEnum.INVESTOR_BLOCKED.getValue());
            }
        } catch (Exception ex) {
            validateGuaranteeVolumeOutDto.setReason(ReasonGuaranteeVolumeEnum.UNEXPECTED_ERROR.getValue());
        }

        if (ObjectUtils.isEmpty(validateGuaranteeVolumeOutDto.getReason())) {
            validateGuaranteeVolumeOutDto.setValid(true);
        }

        log.info("End method validateInvestorCalculateGuaranteeV1, validateGuaranteeVolumeOutDto -> {}",
                validateGuaranteeVolumeOutDto);

        return validateGuaranteeVolumeOutDto;
    }

    @Override
    public PageResponseOutDto<InvestorOutDto> findAllInvestorDynamic(
            int page,
            int size,
            String sort,
            String order,
            boolean all,
            String fieldName,
            String fieldValue,
            String operation,
            String companyName,
            String documentNumber,
            Long countryId,
            Long statusId,
            Long investorId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllInvestorDynamicV1(page, size, sort, order, all, fieldName, fieldValue, operation, companyName, documentNumber, countryId, statusId, investorId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<InvestorOutDto> findAllInvestorDynamicV1(
            int page,
            int size,
            String sort,
            String order,
            boolean all,
            String fieldName,
            String fieldValue,
            String operation,
            String companyName,
            String documentNumber,
            Long countryId,
            Long statusId,
            Long investorId) {

        log.info("Searching investors with combined filters, page: {}, size: {}, sort: {}, order: {}, all: {}", page, size, sort, order, all);

        InvestorFilterRequestDto filterDto = InvestorFilterRequestDto.builder()
                .companyName(companyName)
                .documentNumber(documentNumber)
                .countryId(countryId)
                .statusId(statusId)
                .investorId(investorId)
                .build();

        SearchOperationEnum searchOperation = (operation != null) ? SearchOperationEnum.fromValue(operation) : null;

        if (operation != null && searchOperation == null) {
            log.warn("Invalid operation: {}", operation);
            throw new ServiceException(ErrorCode.BAD_REQUEST, HttpStatus.BAD_REQUEST);
        }

        Specification<InvestorEntity> spec = InvestorSpecificationFactory.createCombinedFilter(
                filterDto, fieldName, fieldValue, searchOperation);

        Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
        Sort sortObj = Sort.by(direction, sort != null ? sort : "id");

        if (all) {
            List<InvestorEntity> allResults = investorRepository.findAll(spec, sortObj);
            List<InvestorOutDto> investorOutDtoList = allResults.stream()
                    .map(MapperUtil::investorEntityToInvestorOutDto)
                    .toList();
            return PageResponseOutDto.<InvestorOutDto>builder()
                    .content(investorOutDtoList)
                    .pageSize(investorOutDtoList.size())
                    .pageNumber(0)
                    .totalElements((long) investorOutDtoList.size())
                    .totalPages(1)
                    .build();
        } else {
            Pageable pageable = PageRequest.of(page, size, sortObj);
            Page<InvestorEntity> pagedResult = investorRepository.findAll(spec, pageable);

            return buildPageResponse(pagedResult);
        }
    }

    private PageResponseOutDto<InvestorOutDto> buildPageResponse(Page<InvestorEntity> entities) {
        List<InvestorOutDto> investorOutDtoList = entities.getContent().stream()
                .map(MapperUtil::investorEntityToInvestorOutDto)
                .toList();

        return MapperPageUtil.pageToPageResponseOutDto(investorOutDtoList, entities);
    }

    private CountryEntity validateCountry(Long countryId) {
        return countryRepository.findById(countryId)
                .orElseThrow(() -> new ServiceException(ErrorCode.COUNTRY_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private DepartmentEntity validateDepartment(String departmentId) {
        return departmentRepository.findById(departmentId)
                .orElseThrow(() -> new ServiceException(ErrorCode.DEPARTMENT_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private TypeEntity validateType(Long typeId) {
        return typeRepository.findById(typeId)
                .orElseThrow(() -> new ServiceException(ErrorCode.TYPE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private StatusEntity validateStatus(Long statusId) {
        return statusRepository.findById(statusId)
                .orElseThrow(() -> new ServiceException(ErrorCode.STATUS_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private CityEntity validateCity(Long cityId) {
        return cityRepository.findById(cityId)
                .orElseThrow(() -> new ServiceException(ErrorCode.CITY_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private GicsEntity validateGics(Long gicsId) {
        return gicsRepository.findById(gicsId)
                .orElseThrow(() -> new ServiceException(ErrorCode.GICS_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private TaxStatusEntity validateTaxStatus(Long taxStatusId) {
        return taxStatusRepository.findById(taxStatusId)
                .orElseThrow(() -> new ServiceException(ErrorCode.TAX_STATUS_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private IdentificationTypeEntity validateIdentificationType(Long id) {
        return identificationTypeRepository.findById(id)
                .orElseThrow(() -> new ServiceException(ErrorCode.IDENTIFICATION_TYPE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private InvestorEntity validateInvestor(Long investorId) {
        return investorRepository.findById(investorId)
                .orElseThrow(() -> new ServiceException(ErrorCode.INVESTOR_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    @Override
    public PageResponseOutDto<InvestorSimpleOutDto> findInvestorsByNameStartingWith(String name, int page, int size, String sort, String order, boolean all) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findInvestorsByNameStartingWithV1(name, page, size, sort, order, all);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public PageResponseOutDto<InvestorSimpleOutDto> findInvestorsByDocumentNumberStartingWith(String documentNumber, int page, int size, String sort, String order, boolean all) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findInvestorsByDocumentNumberStartingWithV1(documentNumber, page, size, sort, order, all);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<InvestorSimpleOutDto> findInvestorsByNameStartingWithV1(String name, int page, int size, String sort, String order, boolean all) {
        log.info("Searching investors by name starting with: {}, page: {}, size: {}, sort: {}, order: {}, all: {}", name, page, size, sort, order, all);

        Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
        Sort sortObj = Sort.by(direction, sort != null ? sort : "id");

        if (all) {
            List<InvestorEntity> allResults = investorRepository.findByCompanyNameStartingWithIgnoreCase(name, sortObj);
            List<InvestorSimpleOutDto> investorSimpleOutDtoList = allResults.stream()
                    .map(this::mapToInvestorSimpleOutDto)
                    .toList();

            return PageResponseOutDto.<InvestorSimpleOutDto>builder()
                    .content(investorSimpleOutDtoList)
                    .pageSize(investorSimpleOutDtoList.size())
                    .pageNumber(0)
                    .totalElements((long) investorSimpleOutDtoList.size())
                    .totalPages(1)
                    .build();
        } else {
            Pageable pageable = PageRequest.of(page, size, sortObj);
            Page<InvestorEntity> investorPage = investorRepository.findByCompanyNameStartingWithIgnoreCase(
                    name, pageable);

            List<InvestorSimpleOutDto> investorSimpleOutDtoList = investorPage.getContent().stream()
                    .map(this::mapToInvestorSimpleOutDto)
                    .toList();

            return MapperPageUtil.pageToPageResponseOutDto(investorSimpleOutDtoList, investorPage);
        }
    }

    private PageResponseOutDto<InvestorSimpleOutDto> findInvestorsByDocumentNumberStartingWithV1(String documentNumber, int page, int size, String sort, String order, boolean all) {
        log.info("Searching investors by document number starting with: {}, page: {}, size: {}, sort: {}, order: {}, all: {}", documentNumber, page, size, sort, order, all);

        Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
        Sort sortObj = Sort.by(direction, sort != null ? sort : "id");

        if (all) {
            List<InvestorEntity> allResults = investorRepository.findByDocumentNumberStartingWith(documentNumber, sortObj);
            List<InvestorSimpleOutDto> investorSimpleOutDtoList = allResults.stream()
                    .map(this::mapToInvestorSimpleOutDto)
                    .toList();

            return PageResponseOutDto.<InvestorSimpleOutDto>builder()
                    .content(investorSimpleOutDtoList)
                    .pageSize(investorSimpleOutDtoList.size())
                    .pageNumber(0)
                    .totalElements((long) investorSimpleOutDtoList.size())
                    .totalPages(1)
                    .build();
        } else {
            Pageable pageable = PageRequest.of(page, size, sortObj);
            Page<InvestorEntity> investorPage = investorRepository.findByDocumentNumberStartingWith(documentNumber, pageable);

            List<InvestorSimpleOutDto> investorSimpleOutDtoList = investorPage.getContent().stream()
                    .map(this::mapToInvestorSimpleOutDto)
                    .toList();

            return MapperPageUtil.pageToPageResponseOutDto(investorSimpleOutDtoList, investorPage);
        }
    }

    private InvestorSimpleOutDto mapToInvestorSimpleOutDto(InvestorEntity investorEntity) {
        return InvestorSimpleOutDto.builder()
                .id(investorEntity.getId())
                .companyName(ObjectUtils.isEmpty(investorEntity.getCompanyName())
                        ? null
                        : investorEntity.getCompanyName().trim())
                .documentNumber(investorEntity.getDocumentNumber())
                .build();
    }


}

```

## src/main/java/com/nubo/master/third/parties/api/service/impl/IssuerServiceImpl.java

```java
package com.nubo.master.third.parties.api.service.impl;

import com.nubo.master.third.parties.api.application.properties.PropertiesConfig;
import com.nubo.master.third.parties.api.application.properties.PropertiesContext;
import com.nubo.master.third.parties.api.exception.ServiceException;
import com.nubo.master.third.parties.api.exception.error.ErrorCode;
import com.nubo.master.third.parties.api.helpers.MapperPageUtil;
import com.nubo.master.third.parties.api.helpers.MapperUtil;
import com.nubo.master.third.parties.api.models.dto.request.IssuerInDto;
import com.nubo.master.third.parties.api.models.dto.request.IssuerUpdateInDto;
import com.nubo.master.third.parties.api.models.dto.response.IssuerOutDto;
import com.nubo.master.third.parties.api.models.dto.response.PageResponseOutDto;
import com.nubo.master.third.parties.api.models.entity.CountryEntity;
import com.nubo.master.third.parties.api.models.entity.DepositoryEntity;
import com.nubo.master.third.parties.api.models.entity.GicsEntity;
import com.nubo.master.third.parties.api.models.entity.IssuerEntity;
import com.nubo.master.third.parties.api.models.entity.StatusEntity;
import com.nubo.master.third.parties.api.models.entity.TypeEntity;
import com.nubo.master.third.parties.api.models.enums.VersionApiEnum;
import com.nubo.master.third.parties.api.repository.CountryRepository;
import com.nubo.master.third.parties.api.repository.DepositoryRepository;
import com.nubo.master.third.parties.api.repository.GicsRepository;
import com.nubo.master.third.parties.api.repository.IssuerRepository;
import com.nubo.master.third.parties.api.repository.StatusRepository;
import com.nubo.master.third.parties.api.repository.TypeRepository;
import com.nubo.master.third.parties.api.service.IssuerService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

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
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
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
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
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
    public IssuerOutDto createIssuer(IssuerInDto issuerInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
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
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
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
                .code(ObjectUtils.isEmpty(issuerUpdateInDto.getCode()) ?
                        issuerEntityLast.getCode() : issuerUpdateInDto.getCode())
                .name(ObjectUtils.isEmpty(issuerUpdateInDto.getName()) ?
                        issuerEntityLast.getName() : issuerUpdateInDto.getName())
                .shortName(ObjectUtils.isEmpty(issuerUpdateInDto.getShortName()) ?
                        issuerEntityLast.getShortName() : issuerUpdateInDto.getShortName())
                .type(ObjectUtils.isEmpty(issuerUpdateInDto.getTypeId()) ?
                        issuerEntityLast.getType() : validateType(issuerUpdateInDto.getTypeId()))
                .country(ObjectUtils.isEmpty(issuerUpdateInDto.getCountryId()) ?
                        issuerEntityLast.getCountry() : validateCountry(issuerUpdateInDto.getCountryId()))
                .gics(ObjectUtils.isEmpty(issuerUpdateInDto.getGicsId()) ?
                        issuerEntityLast.getGics() : validateStatusGics(issuerUpdateInDto.getGicsId()))
                .dateEntry(ObjectUtils.isEmpty(issuerUpdateInDto.getDateEntry()) ?
                        issuerEntityLast.getDateEntry() : issuerUpdateInDto.getDateEntry())
                .countryOrigin(ObjectUtils.isEmpty(issuerUpdateInDto.getCountryOrigin()) ?
                        issuerEntityLast.getCountryOrigin() : validateCountry(issuerUpdateInDto.getCountryOrigin()))
                .cusip(ObjectUtils.isEmpty(issuerUpdateInDto.getCusip()) ?
                        issuerEntityLast.getCusip() : issuerUpdateInDto.getCusip())
                .taxCode(ObjectUtils.isEmpty(issuerUpdateInDto.getTaxCode()) ?
                        issuerEntityLast.getTaxCode() : issuerUpdateInDto.getTaxCode())
                .status(ObjectUtils.isEmpty(issuerUpdateInDto.getStatusId()) ?
                        issuerEntityLast.getStatus() : validateStatus(issuerUpdateInDto.getStatusId()))
                .withdrawalDate(ObjectUtils.isEmpty(issuerUpdateInDto.getWithdrawalDate()) ?
                        issuerEntityLast.getWithdrawalDate() : issuerUpdateInDto.getWithdrawalDate())
                .mainMarket(ObjectUtils.isEmpty(issuerUpdateInDto.getMainMarket()) ?
                        issuerEntityLast.getMainMarket() : issuerUpdateInDto.getMainMarket())
                .regulatorCode(ObjectUtils.isEmpty(issuerUpdateInDto.getRegulatorCode()) ?
                        issuerEntityLast.getRegulatorCode() : issuerUpdateInDto.getRegulatorCode())
                .depository(ObjectUtils.isEmpty(issuerUpdateInDto.getDepositoryId()) ?
                        issuerEntityLast.getDepository() : validateDepository(issuerUpdateInDto.getDepositoryId()))
                .dvlCode(ObjectUtils.isEmpty(issuerUpdateInDto.getDvlCode()) ?
                        issuerEntityLast.getDvlCode() : issuerUpdateInDto.getDvlCode())
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyIp(PropertiesContext.getClientIp())
                .lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyDate(PropertiesContext.getClientDatetime())
                .build();

        IssuerOutDto issuerOutDto = MapperUtil.issuerEntityToIssuerOutDto(issuerRepository.save(issuerEntity));

        log.info("End method updateIssuerV1, Issuer -> {}", issuerOutDto);
        return issuerOutDto;
    }

    private IssuerEntity validateIssuer(Long issuerId) {
        return issuerRepository.findById(issuerId)
                .orElseThrow(() -> new ServiceException(ErrorCode.ISSUER_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private CountryEntity validateCountry(Long countryId) {
        return countryRepository.findById(countryId)
                .orElseThrow(() -> new ServiceException(ErrorCode.COUNTRY_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private TypeEntity validateType(Long typeId) {
        return typeRepository.findById(typeId)
                .orElseThrow(() -> new ServiceException(ErrorCode.TYPE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private StatusEntity validateStatus(Long statusId) {
        return statusRepository.findById(statusId)
                .orElseThrow(() -> new ServiceException(ErrorCode.STATUS_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private GicsEntity validateStatusGics(Long statusId) {
        return gicsRepository.findById(statusId)
                .orElseThrow(() -> new ServiceException(ErrorCode.GICS_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private DepositoryEntity validateDepository(String depositoryId) {
        return depositoryRepository.findById(depositoryId)
                .orElseThrow(() -> new ServiceException(ErrorCode.DEPOSITORY_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

}

```

## src/main/java/com/nubo/master/third/parties/api/service/impl/JointAccountServiceImpl.java

```java
package com.nubo.master.third.parties.api.service.impl;

import com.nubo.master.third.parties.api.application.properties.PropertiesContext;
import com.nubo.master.third.parties.api.exception.ServiceException;
import com.nubo.master.third.parties.api.exception.error.ErrorCode;
import com.nubo.master.third.parties.api.helpers.MapperUtil;
import com.nubo.master.third.parties.api.models.dto.response.JointAccountOutDto;
import com.nubo.master.third.parties.api.models.entity.InvestorAccountEntity;
import com.nubo.master.third.parties.api.models.entity.JointAccountEntity;
import com.nubo.master.third.parties.api.models.enums.VersionApiEnum;
import com.nubo.master.third.parties.api.repository.InvestorAccountRepository;
import com.nubo.master.third.parties.api.repository.JointAccountRepository;
import com.nubo.master.third.parties.api.service.JointAccountService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
@Slf4j
public class JointAccountServiceImpl implements JointAccountService {

    private final JointAccountRepository jointAccountRepository;
    private final InvestorAccountRepository investorAccountRepository;

    @Override
    public List<JointAccountOutDto> findJointAccountByInvestorAccountId(Long investorAccountId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findJointAccountByInvestorAccountIdV1(investorAccountId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<JointAccountOutDto> findJointAccountByInvestorAccountIdV1(Long investorAccountId) {
        log.info("Start method findJointAccountByInvestorAccountIdV1, investorAccountId -> {}", investorAccountId);

        InvestorAccountEntity investorAccountEntity = validateInvestorAccount(investorAccountId);

        List<JointAccountEntity> jointAccountEntityList = jointAccountRepository.findByInvestorAccountId(investorAccountEntity.getId());

        List<JointAccountOutDto> jointAccountOutDtoList = jointAccountEntityList.stream().map(MapperUtil::jointAccountEntityToJointAccountOutDto).toList();

        log.info("End method findJointAccountByInvestorAccountIdV1, jointAccountOutDtoList -> {}", jointAccountOutDtoList);

        return jointAccountOutDtoList;
    }

    private InvestorAccountEntity validateInvestorAccount(Long investorAccountId) {
        return investorAccountRepository.findById(investorAccountId)
                .orElseThrow(() -> new ServiceException(ErrorCode.INVESTOR_ACCOUNT_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

}

```

## src/main/java/com/nubo/master/third/parties/api/service/impl/StatusServiceImpl.java

```java
package com.nubo.master.third.parties.api.service.impl;

import java.util.List;
import java.util.Objects;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.nubo.master.third.parties.api.application.properties.PropertiesContext;
import com.nubo.master.third.parties.api.exception.ServiceException;
import com.nubo.master.third.parties.api.exception.error.ErrorCode;
import com.nubo.master.third.parties.api.helpers.MapperPageUtil;
import com.nubo.master.third.parties.api.helpers.MapperUtil;
import com.nubo.master.third.parties.api.models.dto.response.StatusOutDto;
import com.nubo.master.third.parties.api.models.dto.response.PageResponseOutDto;
import com.nubo.master.third.parties.api.models.entity.StatusEntity;
import com.nubo.master.third.parties.api.models.enums.VersionApiEnum;
import com.nubo.master.third.parties.api.repository.StatusRepository;
import com.nubo.master.third.parties.api.service.StatusService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class StatusServiceImpl implements StatusService {

    private final StatusRepository statusRepository;

    @Override
    public PageResponseOutDto<StatusOutDto> findAllStatus(Pageable pageable) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllStatusV1(pageable);
        }
        throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND);
    }

    @Override
    public List<StatusOutDto> findAllStatusByCategory(String category) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllStatusByCategoryV1(category);
        }
        throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND);
    }

    private PageResponseOutDto<StatusOutDto> findAllStatusV1(Pageable pageable) {
        log.info("Starting to find all status with pagination");
        
        Page<StatusEntity> statusPage = statusRepository.findAll(pageable);
        
        List<StatusOutDto> statusOutDtoList = statusPage.getContent().stream()
                .map(this::mapToStatusOutDto)
                .toList();

        log.info("Found {} status records", statusOutDtoList.size());
        return MapperPageUtil.pageToPageResponseOutDto(statusOutDtoList, statusPage);
    }

    private List<StatusOutDto> findAllStatusByCategoryV1(String category) {
        log.info("Starting to find all status by category: {}", category);
        
        if (!StringUtils.hasText(category)) {
            throw new ServiceException(ErrorCode.BAD_REQUEST);
        }

        String categoryUpperCase = category.toUpperCase();
        
        List<StatusEntity> statusList = statusRepository.findByCategoryIgnoreCase(categoryUpperCase);

        List<StatusOutDto> statusOutDtoList = statusList.stream()
                .map(this::mapToStatusOutDto)
                .toList();

        log.info("Found {} status records for category: {}", statusOutDtoList.size(), categoryUpperCase);
        return statusOutDtoList;
    }

    private StatusOutDto mapToStatusOutDto(StatusEntity statusEntity) {
        return MapperUtil.statusEntityToStatusOutDto(statusEntity);
    }
}

```

## src/main/java/com/nubo/master/third/parties/api/web/controller/CustodianRelationRestController.java

```java
package com.nubo.master.third.parties.api.web.controller;

import com.nubo.master.third.parties.api.models.dto.response.CustodianRelationOutDto;
import com.nubo.master.third.parties.api.models.dto.response.JointAccountOutDto;
import com.nubo.master.third.parties.api.service.CustodianRelationService;
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

@Tag(name = "Custodian Relation")
@RestController
@RequestMapping("/{version}/custodian-relation")
@RequiredArgsConstructor
public class CustodianRelationRestController {

    private final CustodianRelationService custodianRelationService;

    @Operation(summary = "Find custodian relation by investor", description = "Find custodian relation by investor")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = JointAccountOutDto[].class)))})
    @GetMapping("/investor/{investorId}")
    public ResponseEntity<List<CustodianRelationOutDto>> findCustodianRelationsByInvestor(@PathVariable Long investorId) {
        return ResponseEntity.ok(custodianRelationService.findCustodianRelationsByInvestor(investorId));
    }

}

```

## src/main/java/com/nubo/master/third/parties/api/web/controller/EquitySecurityRestController.java

```java
package com.nubo.master.third.parties.api.web.controller;

import com.nubo.master.third.parties.api.models.dto.request.EquitySecurityInDto;
import com.nubo.master.third.parties.api.models.dto.request.EquitySecurityUpdateInDto;
import com.nubo.master.third.parties.api.models.dto.response.EquitySecurityOutDto;
import com.nubo.master.third.parties.api.models.dto.response.PageResponseOutDto;
import com.nubo.master.third.parties.api.service.EquitySecurityService;
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

@Tag(name = "Equity Security")
@RestController
@RequestMapping("/{version}/equity-security")
@RequiredArgsConstructor
public class EquitySecurityRestController {

    private final EquitySecurityService equitySecurityService;

    @Operation(summary = "Find all equity security", description = "Find all equity security")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = EquitySecurityOutDto[].class)))})
    @GetMapping
    public ResponseEntity<PageResponseOutDto<EquitySecurityOutDto>> findAllEquitySecurity(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "securityId") String sort,
            @RequestParam(defaultValue = "asc") String order) {
        Sort sortBy = order.equalsIgnoreCase(Sort.Direction.ASC.name()) ?
                Sort.by(Sort.Order.asc(sort), Sort.Order.asc("securityId")) :
                Sort.by(Sort.Order.desc(sort), Sort.Order.desc("securityId"));
        Pageable pageable = PageRequest.of(page, size, sortBy);
        return ResponseEntity.ok(equitySecurityService.findAllEquitySecurity(pageable));
    }

    @Operation(summary = "Find equity security", description = "Find equity security")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = EquitySecurityOutDto.class)))})
    @GetMapping("/{securityId}")
    public ResponseEntity<EquitySecurityOutDto> findEquitySecurity(@PathVariable Long securityId) {
        return ResponseEntity.ok(equitySecurityService.findEquitySecurity(securityId));
    }

    @Operation(summary = "Create equity security", description = "Create equity security")
    @ApiResponses(value = {@ApiResponse(responseCode = "201", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = EquitySecurityOutDto.class)))})
    @PostMapping
    public ResponseEntity<EquitySecurityOutDto> createEquitySecurity(@Valid @RequestBody EquitySecurityInDto equitySecurityInDto) {
        EquitySecurityOutDto equitySecurityOutDto = equitySecurityService.createEquitySecurity(equitySecurityInDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(equitySecurityOutDto);
    }

    @Operation(summary = "Update equity security", description = "Update equity security")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = EquitySecurityOutDto.class)))})
    @PatchMapping("/{securityId}")
    public ResponseEntity<EquitySecurityOutDto> updateEquitySecurity(@PathVariable Long securityId,
                                                                     @Valid @RequestBody EquitySecurityUpdateInDto equitySecurityUpdateInDto) {
        EquitySecurityOutDto equitySecurityOutDto = equitySecurityService.updateEquitySecurity(equitySecurityUpdateInDto, securityId);
        return ResponseEntity.ok(equitySecurityOutDto);
    }

    @Operation(summary = "Delete equity security", description = "Delete equity security")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response")})
    @DeleteMapping("/{securityId}")
    public void deleteEquitySecurity(@PathVariable Long securityId) {
        equitySecurityService.deleteEquitySecurity(securityId);
    }

}

```

## src/main/java/com/nubo/master/third/parties/api/web/controller/ExchangeRateRestController.java

```java
package com.nubo.master.third.parties.api.web.controller;

import com.nubo.master.third.parties.api.models.dto.request.ExchangeRateInDto;
import com.nubo.master.third.parties.api.models.dto.request.ExchangeRateUpdateInDto;
import com.nubo.master.third.parties.api.models.dto.response.ExchangeRateOutDto;
import com.nubo.master.third.parties.api.models.dto.response.PageResponseOutDto;
import com.nubo.master.third.parties.api.service.ExchangeRateService;
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

import java.time.LocalDate;

@Tag(name = "Exchange Rate")
@RestController
@RequestMapping("/{version}/exchange-rate")
@RequiredArgsConstructor
public class ExchangeRateRestController {

    private final ExchangeRateService exchangeRateService;

    @Operation(summary = "Find all exchange rate", description = "Find all exchange rate")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = ExchangeRateOutDto[].class)))})
    @GetMapping
    public ResponseEntity<PageResponseOutDto<ExchangeRateOutDto>> findAllExchangeRate(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "validityDate") String sort,
            @RequestParam(defaultValue = "asc") String order,
            @Parameter(example = "1")
            @RequestParam(required = false) Long baseCurrency,
            @Parameter(example = "2024-12-03")
            @RequestParam(required = false) LocalDate validityDate,
            @Parameter(example = "1")
            @RequestParam(required = false) Long conversionCurrency) {
        Sort sortBy = order.equalsIgnoreCase(Sort.Direction.ASC.name()) ?
                Sort.by(Sort.Order.asc(sort), Sort.Order.asc("id")) :
                Sort.by(Sort.Order.desc(sort), Sort.Order.desc("id"));
        Pageable pageable = PageRequest.of(page, size, sortBy);
        return ResponseEntity.ok(exchangeRateService.findAllExchangeRate(pageable, baseCurrency, validityDate,
                conversionCurrency));
    }

    @Operation(summary = "Find exchange rate", description = "Find exchange rate")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = ExchangeRateOutDto.class)))})
    @GetMapping("/{exchangeRateId}")
    public ResponseEntity<ExchangeRateOutDto> findExchangeRateById(@PathVariable Long exchangeRateId) {
        return ResponseEntity.ok(exchangeRateService.findExchangeRateById(exchangeRateId));
    }

    @Operation(summary = "Create exchange rate", description = "Create exchange rate")
    @ApiResponses(value = {@ApiResponse(responseCode = "201", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = ExchangeRateOutDto.class)))})
    @PostMapping
    public ResponseEntity<ExchangeRateOutDto> createExchangeRate(@Valid @RequestBody ExchangeRateInDto exchangeRateInDto) {
        ExchangeRateOutDto exchangeRateOutDto = exchangeRateService.createExchangeRate(exchangeRateInDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(exchangeRateOutDto);
    }

    @Operation(summary = "Update exchange rate", description = "Update exchange rate")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = ExchangeRateOutDto.class)))})
    @PatchMapping("/{exchangeRateId}")
    public ResponseEntity<ExchangeRateOutDto> updateExchangeRate(@PathVariable Long exchangeRateId,
                                                                 @Valid @RequestBody ExchangeRateUpdateInDto exchangeRateUpdateInDto) {
        ExchangeRateOutDto exchangeRateOutDto = exchangeRateService.updateExchangeRate(exchangeRateUpdateInDto, exchangeRateId);
        return ResponseEntity.ok(exchangeRateOutDto);
    }

    @Operation(summary = "Delete exchange rate by id", description = "Delete exchange rate by id")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response")})
    @DeleteMapping("/{exchangeRateId}")
    public void deleteExchangeRateById(@PathVariable Long exchangeRateId) {
        exchangeRateService.deleteExchangeRateById(exchangeRateId);
    }

}

```

## src/main/java/com/nubo/master/third/parties/api/web/controller/FixedIncomeSecurityRestController.java

```java
package com.nubo.master.third.parties.api.web.controller;

import com.nubo.master.third.parties.api.models.dto.request.FixedIncomeSecurityInDto;
import com.nubo.master.third.parties.api.models.dto.request.FixedIncomeSecurityUpdateInDto;
import com.nubo.master.third.parties.api.models.dto.response.FixedIncomeSecurityOutDto;
import com.nubo.master.third.parties.api.models.dto.response.PageResponseOutDto;
import com.nubo.master.third.parties.api.service.FixedIncomeSecurityService;
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

@Tag(name = "Fixed Income Security")
@RestController
@RequestMapping("/{version}/fixed-income-security")
@RequiredArgsConstructor
public class FixedIncomeSecurityRestController {

    private final FixedIncomeSecurityService fixedIncomeSecurityService;

    @Operation(summary = "Find all fixed income security", description = "Find all fixed income security")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = FixedIncomeSecurityOutDto[].class)))})
    @GetMapping
    public ResponseEntity<PageResponseOutDto<FixedIncomeSecurityOutDto>> findAllFixedIncomeSecurity(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "securityId") String sort,
            @RequestParam(defaultValue = "asc") String order) {
        Sort sortBy = order.equalsIgnoreCase(Sort.Direction.ASC.name()) ?
                Sort.by(Sort.Order.asc(sort), Sort.Order.asc("securityId")) :
                Sort.by(Sort.Order.desc(sort), Sort.Order.desc("securityId"));
        Pageable pageable = PageRequest.of(page, size, sortBy);
        return ResponseEntity.ok(fixedIncomeSecurityService.findAllFixedIncomeSecurity(pageable));
    }

    @Operation(summary = "Find fixed income security", description = "Find fixed income security")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = FixedIncomeSecurityOutDto.class)))})
    @GetMapping("/{securityId}")
    public ResponseEntity<FixedIncomeSecurityOutDto> findFixedIncomeSecurity(@PathVariable Long securityId) {
        return ResponseEntity.ok(fixedIncomeSecurityService.findFixedIncomeSecurity(securityId));
    }

    @Operation(summary = "Create fixed income security", description = "Create fixed income security")
    @ApiResponses(value = {@ApiResponse(responseCode = "201", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = FixedIncomeSecurityOutDto.class)))})
    @PostMapping
    public ResponseEntity<FixedIncomeSecurityOutDto> createFixedIncomeSecurity(@Valid @RequestBody FixedIncomeSecurityInDto fixedIncomeSecurityInDto) {
        FixedIncomeSecurityOutDto fixedIncomeSecurityOutDto = fixedIncomeSecurityService.createFixedIncomeSecurity(fixedIncomeSecurityInDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(fixedIncomeSecurityOutDto);
    }

    @Operation(summary = "Update fixed income security", description = "Update fixed income security")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = FixedIncomeSecurityOutDto.class)))})
    @PatchMapping("/{securityId}")
    public ResponseEntity<FixedIncomeSecurityOutDto> updateFixedIncomeSecurity(@PathVariable Long securityId,
                                                                               @Valid @RequestBody FixedIncomeSecurityUpdateInDto fixedIncomeSecurityUpdateInDto) {
        FixedIncomeSecurityOutDto fixedIncomeSecurityOutDto = fixedIncomeSecurityService.updateFixedIncomeSecurity(
                fixedIncomeSecurityUpdateInDto, securityId);
        return ResponseEntity.ok(fixedIncomeSecurityOutDto);
    }

    @Operation(summary = "Delete fixed income security", description = "Delete fixed income security")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response")})
    @DeleteMapping("/{securityId}")
    public void deleteFixedIncomeSecurity(@PathVariable Long securityId) {
        fixedIncomeSecurityService.deleteFixedIncomeSecurity(securityId);
    }

}

```

## src/main/java/com/nubo/master/third/parties/api/web/controller/InvestorAccountRestController.java

```java
package com.nubo.master.third.parties.api.web.controller;

import io.swagger.v3.oas.annotations.media.ArraySchema;
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

import com.nubo.master.third.parties.api.models.dto.request.InvestorAccountInDto;
import com.nubo.master.third.parties.api.models.dto.request.InvestorAccountUpdateInDto;
import com.nubo.master.third.parties.api.models.dto.response.InvestorAccountOutDto;
import com.nubo.master.third.parties.api.models.dto.response.PageResponseOutDto;
import com.nubo.master.third.parties.api.service.InvestorAccountService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

import java.util.List;

@Tag(name = "Investor Account")
@RestController
@RequestMapping("/{version}/investor-account")
@RequiredArgsConstructor
public class InvestorAccountRestController {

    private final InvestorAccountService investorAccountService;

    @Operation(summary = "Find all investor account", description = "Find all investor account")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = InvestorAccountOutDto[].class)))})
    @GetMapping
        public ResponseEntity<PageResponseOutDto<InvestorAccountOutDto>> findAllInvestorAccount(
                        @RequestParam(defaultValue = "0") int page,
                        @RequestParam(defaultValue = "10") int size,
                        @RequestParam(defaultValue = "id") String sort,
                        @RequestParam(defaultValue = "asc") String order,
                        @RequestParam(defaultValue = "false") boolean all) {
                return ResponseEntity.ok(investorAccountService.findAllInvestorAccount(page, size, sort, order, all));
        }

    @Operation(summary = "Find investor account settlement by TradeId",
            description = "Find investor account settlement by TradeId")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response",
                    content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                            schema = @Schema(implementation = InvestorAccountOutDto.class)))})
    @GetMapping("/settlement/trade/{tradeId}")
    public ResponseEntity<PageResponseOutDto<InvestorAccountOutDto>> findInvestorAccountSettlementByTradeId(@RequestParam(defaultValue = "0") int page,
                                                                                                            @RequestParam(defaultValue = "10") int size,
                                                                                                            @PathVariable Long tradeId) {
        Pageable pageable = PageRequest.of(page, size);
        return ResponseEntity.ok(investorAccountService.findInvestorAccountSettlementByTradeId(tradeId, pageable));
    }

    @Operation(summary = "Find investor account by accountNumber", description = "Find investor account by accountNumber")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = InvestorAccountOutDto.class)))})
    @GetMapping("/account-number/{accountNumber}")
    public ResponseEntity<InvestorAccountOutDto> findInvestorAccountByAccountNumber(@PathVariable String accountNumber) {
        return ResponseEntity.ok(investorAccountService.findInvestorAccountByAccountNumber(accountNumber));
    }

    @Operation(summary = "Find investor accounts by accountNumber and depositoryId. Made for OTC Loan", description = "Find investor accounts by accountNumber and depositoryId. Made for OTC Loan")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    array = @ArraySchema(schema = @Schema(implementation = InvestorAccountOutDto[].class))))})
    @GetMapping("/account-numbers/{accountNumber}")
    public ResponseEntity<List<InvestorAccountOutDto>> findInvestorAccountsByAccountNumber(
            @PathVariable String accountNumber,
            @RequestParam(required = false) String depositoryId) {
        return ResponseEntity.ok(investorAccountService.findInvestorAccountsByAccountNumberAndDepositoryId(accountNumber, depositoryId));
    }

    @Operation(summary = "Find investor account by id", description = "Find investor account by id")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = InvestorAccountOutDto.class)))})
    @GetMapping("/{investorAccountId}")
    public ResponseEntity<InvestorAccountOutDto> findInvestorAccountById(@PathVariable Long investorAccountId) {
        return ResponseEntity.ok(investorAccountService.findInvestorAccountById(investorAccountId));
    }

    @Operation(summary = "Create new investor account", description = "Create a new investor account")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "Investor account successfully created",
                    content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                            schema = @Schema(implementation = InvestorAccountOutDto.class)))
    })
    @PostMapping
    public ResponseEntity<InvestorAccountOutDto> createInvestorAccount(
            @Valid @RequestBody InvestorAccountInDto investorAccountInDto) {
        InvestorAccountOutDto createdAccount = investorAccountService.createInvestorAccount(investorAccountInDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdAccount);
    }

    @Operation(summary = "Update investor account", description = "Update investor account")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response",
                    content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                            schema = @Schema(implementation = InvestorAccountOutDto.class)))})
    @PatchMapping("/{investorAccountId}")
    public ResponseEntity<InvestorAccountOutDto> updateInvestorAccount(
            @PathVariable Long investorAccountId,
            @Valid @RequestBody InvestorAccountUpdateInDto investorAccountUpdateInDto) {
        InvestorAccountOutDto updatedAccount = investorAccountService.updateInvestorAccount(investorAccountId,
                investorAccountUpdateInDto);
        return ResponseEntity.ok(updatedAccount);
    }

    @Operation(summary = "Find all investor account with dynamic filters", description = "Find all investor account with dynamic filters by investor")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = InvestorAccountOutDto[].class)))})
    @GetMapping("/dynamic")
        public ResponseEntity<PageResponseOutDto<InvestorAccountOutDto>> findAllInvestorAccountByInvestorDynamic(
                        @RequestParam(defaultValue = "0") int page,
                        @RequestParam(defaultValue = "10") int size,
                        @RequestParam(defaultValue = "id") String sort,
                        @RequestParam(defaultValue = "asc") String order,
                        @RequestParam Long investorId,
                        @RequestParam(required = false) String fieldName,
                        @RequestParam(required = false) String fieldValue,
                        @RequestParam(required = false) String operation,
                        @RequestParam(defaultValue = "false") boolean all) {
                return ResponseEntity.ok(
                        investorAccountService.findAllInvestorAccountByInvestorDynamic(
                                page, size, sort, order, all,
                                investorId, fieldName, fieldValue, operation
                        )
                );
        }


}

```

## src/main/java/com/nubo/master/third/parties/api/web/controller/InvestorRestController.java

```java
package com.nubo.master.third.parties.api.web.controller;

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

import com.nubo.master.third.parties.api.models.dto.request.InvestorInDto;
import com.nubo.master.third.parties.api.models.dto.request.InvestorUpdateInDto;
import com.nubo.master.third.parties.api.models.dto.response.InvestorOutDto;
import com.nubo.master.third.parties.api.models.dto.response.InvestorSimpleOutDto;
import com.nubo.master.third.parties.api.models.dto.response.PageResponseOutDto;
import com.nubo.master.third.parties.api.models.dto.response.ValidateGuaranteeCalculateOutDto;
import com.nubo.master.third.parties.api.service.InvestorService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@Tag(name = "Investor")
@RestController
@RequestMapping("/{version}/investor")
@RequiredArgsConstructor
public class InvestorRestController {

    private final InvestorService investorService;

    @Operation(summary = "Find all investor", description = "Find all investor")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = InvestorOutDto[].class)))})
    @GetMapping
    public ResponseEntity<PageResponseOutDto<InvestorOutDto>> findAllInvestor(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "id") String sort,
            @RequestParam(defaultValue = "asc") String order,
            @RequestParam(defaultValue = "false") boolean all) {
        return ResponseEntity.ok(investorService.findAllInvestor(page, size, sort, order, all));
    }

    @Operation(summary = "Find investor settlement by TradeId", description = "Find investor settlement by TradeId")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response",
                    content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                            schema = @Schema(implementation = InvestorOutDto.class)))})
    @GetMapping("/settlement/trade/{tradeId}")
    public ResponseEntity<PageResponseOutDto<InvestorOutDto>> findInvestorSettlementByTradeId(@RequestParam(defaultValue = "0") int page,
                                                                                              @RequestParam(defaultValue = "10") int size,
                                                                                              @PathVariable Long tradeId) {
        Pageable pageable = PageRequest.of(page, size);
        return ResponseEntity.ok(investorService.findInvestorSettlementByTradeId(tradeId, pageable));
    }

    @Operation(summary = "Find investor by id", description = "Find investor by id")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = InvestorOutDto.class)))})
    @GetMapping("/{investorId}")
    public ResponseEntity<InvestorOutDto> findInvestorById(@PathVariable Long investorId) {
        return ResponseEntity.ok(investorService.findInvestorById(investorId));
    }

    @Operation(summary = "Create investor", description = "Create investor")
    @ApiResponses(value = {@ApiResponse(responseCode = "201", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = InvestorOutDto.class)))})
    @PostMapping
    public ResponseEntity<InvestorOutDto> createInvestor(
            @Valid @RequestBody InvestorInDto investorInDto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(investorService.createInvestor(investorInDto));
    }

    @Operation(summary = "Update investor", description = "Update investor")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response",
                    content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                            schema = @Schema(implementation = InvestorOutDto.class)))})
    @PatchMapping("/{investorId}")
    public ResponseEntity<InvestorOutDto> updateInvestor(
            @PathVariable Long investorId,
            @Valid @RequestBody InvestorUpdateInDto investorUpdateInDto) {
        return ResponseEntity.ok(investorService.updateInvestor(investorId, investorUpdateInDto));
    }

    @Operation(summary = "Validate guarantee calculate investor", description = "Validate guarantee calculate investor")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = InvestorOutDto.class)))})
    @GetMapping("/validate/guarantee-calculate/{investorId}")
    public ResponseEntity<ValidateGuaranteeCalculateOutDto> validateInvestorCalculateGuarantee(@PathVariable Long investorId) {
        return ResponseEntity.ok(investorService.validateInvestorCalculateGuarantee(investorId));
    }

    @Operation(summary = "Find all investor with dynamic filters", description = "Find all investor with dynamic filters and specific field filters")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = InvestorOutDto[].class)))})
    @GetMapping("/dynamic")
    public ResponseEntity<PageResponseOutDto<InvestorOutDto>> findAllInvestorDynamic(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(required = false) String fieldName,
            @RequestParam(required = false) String fieldValue,
            @RequestParam(required = false) String operation,
            @RequestParam(defaultValue = "id") String sort,
            @RequestParam(defaultValue = "asc") String order,
            @RequestParam(required = false) String companyName,
            @RequestParam(required = false) String documentNumber,
            @RequestParam(required = false) Long countryId,
            @RequestParam(required = false) Long statusId,
            @RequestParam(required = false) Long investorId,
            @RequestParam(defaultValue = "false") boolean all) {
        return ResponseEntity.ok(
            investorService.findAllInvestorDynamic(
                page, size, sort, order, all,
                fieldName, fieldValue, operation,
                    companyName, documentNumber, countryId, statusId, investorId
            )
        );
    }

    @Operation(summary = "Find investors by name", description = "Find investors by firstName or lastName starting with the given value")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = InvestorSimpleOutDto[].class)))})
    @GetMapping("/search/name")
    public ResponseEntity<PageResponseOutDto<InvestorSimpleOutDto>> findInvestorsByName(
            @RequestParam String name,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "id") String sort,
            @RequestParam(defaultValue = "asc") String order,
            @RequestParam(defaultValue = "false") boolean all) {
        return ResponseEntity.ok(investorService.findInvestorsByNameStartingWith(name, page, size, sort, order, all));
    }

    @Operation(summary = "Find investors by document number", description = "Find investors by document number starting with the given value")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = InvestorSimpleOutDto[].class)))})
    @GetMapping("/search/document")
    public ResponseEntity<PageResponseOutDto<InvestorSimpleOutDto>> findInvestorsByDocumentNumber(
            @RequestParam String documentNumber,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "id") String sort,
            @RequestParam(defaultValue = "asc") String order,
            @RequestParam(defaultValue = "false") boolean all) {
        return ResponseEntity.ok(investorService.findInvestorsByDocumentNumberStartingWith(documentNumber, page, size, sort, order, all));
    }

}

```

## src/main/java/com/nubo/master/third/parties/api/web/controller/IssuerRestController.java

```java
package com.nubo.master.third.parties.api.web.controller;

import com.nubo.master.third.parties.api.models.dto.request.IssuerInDto;
import com.nubo.master.third.parties.api.models.dto.request.IssuerUpdateInDto;
import com.nubo.master.third.parties.api.models.dto.response.IssuerOutDto;
import com.nubo.master.third.parties.api.models.dto.response.PageResponseOutDto;
import com.nubo.master.third.parties.api.service.IssuerService;
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
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "Issuer")
@RestController
@RequestMapping("/{version}/issuer")
@RequiredArgsConstructor
public class IssuerRestController {

    private final IssuerService issuerService;

    @Operation(summary = "Find all Issuer", description = "Find all Issuer")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = IssuerOutDto[].class)))})
    @GetMapping
    public ResponseEntity<PageResponseOutDto<IssuerOutDto>> findAllIssuer(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        Pageable pageable = PageRequest.of(page, size);
        return ResponseEntity.ok(issuerService.findAllIssuer(pageable));
    }

    @Operation(summary = "Find Issuer by Id", description = "Find Issuer by Id")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = IssuerOutDto.class)))})
    @GetMapping("/{issuerId}")
    public ResponseEntity<IssuerOutDto> findIssuerById(@PathVariable Long issuerId) {
        return ResponseEntity.ok(issuerService.findIssuerById(issuerId));
    }

    @Operation(summary = "Create Issuer", description = "Create Issuer")
    @ApiResponses(value = {@ApiResponse(responseCode = "201", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = IssuerOutDto.class)))})
    @PostMapping
    public ResponseEntity<IssuerOutDto> createIssuer(@Valid @RequestBody IssuerInDto issuerInDto) {
        IssuerOutDto issuerOutDto = issuerService.createIssuer(issuerInDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(issuerOutDto);
    }

    @Operation(summary = "Update Issuer", description = "Update Issuer")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = IssuerOutDto.class)))})
    @PatchMapping("/{issuerId}")
    public ResponseEntity<IssuerOutDto> updateIssuer(@PathVariable Long issuerId,
                                                     @Valid @RequestBody IssuerUpdateInDto issuerUpdateInDto) {
        return ResponseEntity.ok(issuerService.updateIssuer(issuerId, issuerUpdateInDto));
    }

}

```

## src/main/java/com/nubo/master/third/parties/api/web/controller/JointAccountRestController.java

```java
package com.nubo.master.third.parties.api.web.controller;

import com.nubo.master.third.parties.api.models.dto.response.JointAccountOutDto;
import com.nubo.master.third.parties.api.service.JointAccountService;
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

@Tag(name = "Joint Account")
@RestController
@RequestMapping("/{version}/joint-account")
@RequiredArgsConstructor
public class JointAccountRestController {

    private final JointAccountService jointAccountService;

    @Operation(summary = "Find Joint Account by Investor Account Id", description = "Find Joint Account by Investor Account Id")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = JointAccountOutDto[].class)))})
    @GetMapping("/investor-account/{investorAccountId}")
    public ResponseEntity<List<JointAccountOutDto>> findJointAccountByInvestorAccountId(@PathVariable Long investorAccountId) {
        return ResponseEntity.ok(jointAccountService.findJointAccountByInvestorAccountId(investorAccountId));
    }

}

```

## src/main/java/com/nubo/master/third/parties/api/web/controller/StatusRestController.java

```java
package com.nubo.master.third.parties.api.web.controller;

import com.nubo.master.third.parties.api.models.dto.response.PageResponseOutDto;
import com.nubo.master.third.parties.api.models.dto.response.StatusOutDto;
import com.nubo.master.third.parties.api.service.StatusService;
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
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Tag(name = "Status")
@RestController
@RequestMapping("/{version}/status")
@RequiredArgsConstructor
public class StatusRestController {

    private final StatusService statusService;

    @Operation(summary = "Find all status", description = "Find all status with pagination")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = StatusOutDto[].class)))})
    @GetMapping
    public ResponseEntity<PageResponseOutDto<StatusOutDto>> findAllStatus(
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

        return ResponseEntity.ok(statusService.findAllStatus(pageable));
    }

    @Operation(summary = "Find all status by category", description = "Find all status filtered by category. Category parameter is case-insensitive and will be converted to uppercase.")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = StatusOutDto[].class)))})
    @GetMapping("/category/{category}")
    public ResponseEntity<List<StatusOutDto>> findAllStatusByCategory(
            @PathVariable String category) {
        return ResponseEntity.ok(statusService.findAllStatusByCategory(category));
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
  port: 8083
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
,--.   ,--.  ,---.   ,---.,--------.,------.,------.,--------.,--.  ,--.,--.,------. ,------.  ,------.  ,---.  ,------.,--------.,--.,------. ,---.   ,---.  ,------. ,--.
|   `.'   | /  O  \ '   .-'--.  .--'|  .---'|  .--. '--.  .--'|  '--'  ||  ||  .--. '|  .-.  \ |  .--. '/  O  \ |  .--. '--.  .--'|  ||  .---''   .-' /  O  \ |  .--. '|  |
|  |'.'|  ||  .-.  |`.  `-.  |  |   |  `--, |  '--'.'  |  |   |  .--.  ||  ||  '--'.'|  |  \  :|  '--' |  .-.  ||  '--'.'  |  |   |  ||  `--, `.  `-.|  .-.  ||  '--' ||  |
|  |   |  ||  | |  |.-'    | |  |   |  `---.|  |\  \   |  |   |  |  |  ||  ||  |\  \ |  '--'  /|  | --'|  | |  ||  |\  \   |  |   |  ||  `---..-'    |  | |  ||  | --' |  |
`--'   `--'`--' `--'`-----'  `--'   `------'`--' '--'  `--'   `--'  `--'`--'`--' '--'`-------' `--'    `--' `--'`--' '--'  `--'   `--'`------'`-----'`--' `--'`--'     `--'
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
