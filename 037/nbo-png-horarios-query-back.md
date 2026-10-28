# nbo-png-horarios-query-back

Código Java de producción y configuraciones, sin tests. Cada sección contiene el archivo original completo y su ruta. Captura: 28/10/2026.

## Índice

1. `.mvn/wrapper/maven-wrapper.properties`
2. `mvnw`
3. `mvnw.cmd`
4. `pom.xml`
5. `src/main/java/com/nubo/schedule/query/api/ScheduleQueryApiApplication.java`
6. `src/main/java/com/nubo/schedule/query/api/application/annotations/RateLimited.java`
7. `src/main/java/com/nubo/schedule/query/api/application/config/SwaggerConfig.java`
8. `src/main/java/com/nubo/schedule/query/api/application/config/WebConfig.java`
9. `src/main/java/com/nubo/schedule/query/api/application/context/GlobalContext.java`
10. `src/main/java/com/nubo/schedule/query/api/application/database/NamingStrategyConfig.java`
11. `src/main/java/com/nubo/schedule/query/api/application/database/UpperNamingConfig.java`
12. `src/main/java/com/nubo/schedule/query/api/application/filters/GlobalFilter.java`
13. `src/main/java/com/nubo/schedule/query/api/application/interceptors/GlobalInterceptor.java`
14. `src/main/java/com/nubo/schedule/query/api/application/interceptors/RateLimitInterceptor.java`
15. `src/main/java/com/nubo/schedule/query/api/application/properties/PropertiesConfig.java`
16. `src/main/java/com/nubo/schedule/query/api/application/properties/PropertiesContext.java`
17. `src/main/java/com/nubo/schedule/query/api/application/util/ApplicationUtils.java`
18. `src/main/java/com/nubo/schedule/query/api/exception/ServiceException.java`
19. `src/main/java/com/nubo/schedule/query/api/exception/error/ErrorCode.java`
20. `src/main/java/com/nubo/schedule/query/api/exception/error/ErrorResponse.java`
21. `src/main/java/com/nubo/schedule/query/api/exception/error/ErrorValidation.java`
22. `src/main/java/com/nubo/schedule/query/api/exception/handler/GlobalExceptionHandler.java`
23. `src/main/java/com/nubo/schedule/query/api/helpers/CountryMapperUtil.java`
24. `src/main/java/com/nubo/schedule/query/api/helpers/FrequencyMapperUtil.java`
25. `src/main/java/com/nubo/schedule/query/api/helpers/MapperPageUtil.java`
26. `src/main/java/com/nubo/schedule/query/api/helpers/MicroserviceMapperUtil.java`
27. `src/main/java/com/nubo/schedule/query/api/helpers/ModuleMapperUtil.java`
28. `src/main/java/com/nubo/schedule/query/api/helpers/ParticipantMapperUtil.java`
29. `src/main/java/com/nubo/schedule/query/api/helpers/ProcessMapperUtil.java`
30. `src/main/java/com/nubo/schedule/query/api/helpers/RejectionReasonMapperUtil.java`
31. `src/main/java/com/nubo/schedule/query/api/helpers/RelatedScheduleAssociationMapperUtil.java`
32. `src/main/java/com/nubo/schedule/query/api/helpers/ScheduleLogMapperUtil.java`
33. `src/main/java/com/nubo/schedule/query/api/helpers/ScheduleMapperUtil.java`
34. `src/main/java/com/nubo/schedule/query/api/helpers/ScheduleStatusHistoryMapperUtil.java`
35. `src/main/java/com/nubo/schedule/query/api/helpers/ScreenActionMapperUtil.java`
36. `src/main/java/com/nubo/schedule/query/api/helpers/ScreenMapperUtil.java`
37. `src/main/java/com/nubo/schedule/query/api/helpers/StatusMapperUtil.java`
38. `src/main/java/com/nubo/schedule/query/api/helpers/SubmoduleMapperUtil.java`
39. `src/main/java/com/nubo/schedule/query/api/helpers/TypeMapperUtil.java`
40. `src/main/java/com/nubo/schedule/query/api/helpers/UserNuboMapperUtil.java`
41. `src/main/java/com/nubo/schedule/query/api/helpers/specification/MicroserviceSpecification.java`
42. `src/main/java/com/nubo/schedule/query/api/helpers/specification/ModuleSpecification.java`
43. `src/main/java/com/nubo/schedule/query/api/helpers/specification/ProcessSpecification.java`
44. `src/main/java/com/nubo/schedule/query/api/helpers/specification/RejectionReasonSpecification.java`
45. `src/main/java/com/nubo/schedule/query/api/helpers/specification/RelatedScheduleSpecification.java`
46. `src/main/java/com/nubo/schedule/query/api/helpers/specification/ScheduleLogSpecification.java`
47. `src/main/java/com/nubo/schedule/query/api/helpers/specification/ScheduleSpecification.java`
48. `src/main/java/com/nubo/schedule/query/api/helpers/specification/SubmoduleSpecification.java`
49. `src/main/java/com/nubo/schedule/query/api/models/dto/request/ParamsPageInDto.java`
50. `src/main/java/com/nubo/schedule/query/api/models/dto/response/CountryDto.java`
51. `src/main/java/com/nubo/schedule/query/api/models/dto/response/FrequencyDto.java`
52. `src/main/java/com/nubo/schedule/query/api/models/dto/response/MicroserviceDto.java`
53. `src/main/java/com/nubo/schedule/query/api/models/dto/response/ModuleDto.java`
54. `src/main/java/com/nubo/schedule/query/api/models/dto/response/PageResponseDto.java`
55. `src/main/java/com/nubo/schedule/query/api/models/dto/response/PageResponseOutDto.java`
56. `src/main/java/com/nubo/schedule/query/api/models/dto/response/ParticipantDto.java`
57. `src/main/java/com/nubo/schedule/query/api/models/dto/response/ProcessDto.java`
58. `src/main/java/com/nubo/schedule/query/api/models/dto/response/RejectionReasonDto.java`
59. `src/main/java/com/nubo/schedule/query/api/models/dto/response/RelatedScheduleDto.java`
60. `src/main/java/com/nubo/schedule/query/api/models/dto/response/ScheduleAssociationDto.java`
61. `src/main/java/com/nubo/schedule/query/api/models/dto/response/ScheduleDto.java`
62. `src/main/java/com/nubo/schedule/query/api/models/dto/response/ScheduleLogDto.java`
63. `src/main/java/com/nubo/schedule/query/api/models/dto/response/ScheduleStatusHistoryDto.java`
64. `src/main/java/com/nubo/schedule/query/api/models/dto/response/ScheduleSummaryDto.java`
65. `src/main/java/com/nubo/schedule/query/api/models/dto/response/ScreenActionDto.java`
66. `src/main/java/com/nubo/schedule/query/api/models/dto/response/ScreenDto.java`
67. `src/main/java/com/nubo/schedule/query/api/models/dto/response/StatusDto.java`
68. `src/main/java/com/nubo/schedule/query/api/models/dto/response/SubmoduleDto.java`
69. `src/main/java/com/nubo/schedule/query/api/models/dto/response/TimeZoneDto.java`
70. `src/main/java/com/nubo/schedule/query/api/models/dto/response/TypeDto.java`
71. `src/main/java/com/nubo/schedule/query/api/models/dto/response/UserNuboDto.java`
72. `src/main/java/com/nubo/schedule/query/api/models/entity/CountryEntity.java`
73. `src/main/java/com/nubo/schedule/query/api/models/entity/CurrencyEntity.java`
74. `src/main/java/com/nubo/schedule/query/api/models/entity/DepartmentEntity.java`
75. `src/main/java/com/nubo/schedule/query/api/models/entity/FrequencyEntity.java`
76. `src/main/java/com/nubo/schedule/query/api/models/entity/GicsEntity.java`
77. `src/main/java/com/nubo/schedule/query/api/models/entity/IdentificationTypeEntity.java`
78. `src/main/java/com/nubo/schedule/query/api/models/entity/MicroserviceEntity.java`
79. `src/main/java/com/nubo/schedule/query/api/models/entity/ModuleEntity.java`
80. `src/main/java/com/nubo/schedule/query/api/models/entity/ParticipantEntity.java`
81. `src/main/java/com/nubo/schedule/query/api/models/entity/ProcessEntity.java`
82. `src/main/java/com/nubo/schedule/query/api/models/entity/RejectionReasonEntity.java`
83. `src/main/java/com/nubo/schedule/query/api/models/entity/RelatedScheduleEntity.java`
84. `src/main/java/com/nubo/schedule/query/api/models/entity/ScheduleEntity.java`
85. `src/main/java/com/nubo/schedule/query/api/models/entity/ScheduleLogEntity.java`
86. `src/main/java/com/nubo/schedule/query/api/models/entity/ScheduleStatusHistoryEntity.java`
87. `src/main/java/com/nubo/schedule/query/api/models/entity/ScreenActionEntity.java`
88. `src/main/java/com/nubo/schedule/query/api/models/entity/ScreenEntity.java`
89. `src/main/java/com/nubo/schedule/query/api/models/entity/StatusEntity.java`
90. `src/main/java/com/nubo/schedule/query/api/models/entity/SubmoduleEntity.java`
91. `src/main/java/com/nubo/schedule/query/api/models/entity/TaxStatusEntity.java`
92. `src/main/java/com/nubo/schedule/query/api/models/entity/TypeEntity.java`
93. `src/main/java/com/nubo/schedule/query/api/models/entity/UserNuboEntity.java`
94. `src/main/java/com/nubo/schedule/query/api/models/enums/CountryCodeEnum.java`
95. `src/main/java/com/nubo/schedule/query/api/models/enums/PropertiesEnum.java`
96. `src/main/java/com/nubo/schedule/query/api/models/enums/UserTypeEnum.java`
97. `src/main/java/com/nubo/schedule/query/api/models/enums/VersionApiEnum.java`
98. `src/main/java/com/nubo/schedule/query/api/repository/CountryRepository.java`
99. `src/main/java/com/nubo/schedule/query/api/repository/FrequencyRepository.java`
100. `src/main/java/com/nubo/schedule/query/api/repository/MicroserviceRepository.java`
101. `src/main/java/com/nubo/schedule/query/api/repository/ModuleRepository.java`
102. `src/main/java/com/nubo/schedule/query/api/repository/ParticipantRepository.java`
103. `src/main/java/com/nubo/schedule/query/api/repository/ProcessRepository.java`
104. `src/main/java/com/nubo/schedule/query/api/repository/RejectionReasonRepository.java`
105. `src/main/java/com/nubo/schedule/query/api/repository/RelatedScheduleRepository.java`
106. `src/main/java/com/nubo/schedule/query/api/repository/ScheduleLogRepository.java`
107. `src/main/java/com/nubo/schedule/query/api/repository/ScheduleRepository.java`
108. `src/main/java/com/nubo/schedule/query/api/repository/ScheduleStatusHistoryRepository.java`
109. `src/main/java/com/nubo/schedule/query/api/repository/ScreenActionRepository.java`
110. `src/main/java/com/nubo/schedule/query/api/repository/ScreenRepository.java`
111. `src/main/java/com/nubo/schedule/query/api/repository/StatusRepository.java`
112. `src/main/java/com/nubo/schedule/query/api/repository/SubmoduleRepository.java`
113. `src/main/java/com/nubo/schedule/query/api/repository/TypeRepository.java`
114. `src/main/java/com/nubo/schedule/query/api/repository/UserNuboRepository.java`
115. `src/main/java/com/nubo/schedule/query/api/service/CountryService.java`
116. `src/main/java/com/nubo/schedule/query/api/service/FrequencyService.java`
117. `src/main/java/com/nubo/schedule/query/api/service/MicroserviceService.java`
118. `src/main/java/com/nubo/schedule/query/api/service/ModuleService.java`
119. `src/main/java/com/nubo/schedule/query/api/service/ProcessService.java`
120. `src/main/java/com/nubo/schedule/query/api/service/RejectionReasonService.java`
121. `src/main/java/com/nubo/schedule/query/api/service/RelatedScheduleService.java`
122. `src/main/java/com/nubo/schedule/query/api/service/ScheduleLogService.java`
123. `src/main/java/com/nubo/schedule/query/api/service/ScheduleService.java`
124. `src/main/java/com/nubo/schedule/query/api/service/ScheduleStatusHistoryService.java`
125. `src/main/java/com/nubo/schedule/query/api/service/ScreenActionService.java`
126. `src/main/java/com/nubo/schedule/query/api/service/ScreenService.java`
127. `src/main/java/com/nubo/schedule/query/api/service/StatusService.java`
128. `src/main/java/com/nubo/schedule/query/api/service/SubmoduleService.java`
129. `src/main/java/com/nubo/schedule/query/api/service/TypeService.java`
130. `src/main/java/com/nubo/schedule/query/api/service/impl/CountryServiceImpl.java`
131. `src/main/java/com/nubo/schedule/query/api/service/impl/FrequencyServiceImpl.java`
132. `src/main/java/com/nubo/schedule/query/api/service/impl/MicroserviceServiceImpl.java`
133. `src/main/java/com/nubo/schedule/query/api/service/impl/ModuleServiceImpl.java`
134. `src/main/java/com/nubo/schedule/query/api/service/impl/ProcessServiceImpl.java`
135. `src/main/java/com/nubo/schedule/query/api/service/impl/RejectionReasonServiceImpl.java`
136. `src/main/java/com/nubo/schedule/query/api/service/impl/RelatedScheduleServiceImpl.java`
137. `src/main/java/com/nubo/schedule/query/api/service/impl/ScheduleLogServiceImpl.java`
138. `src/main/java/com/nubo/schedule/query/api/service/impl/ScheduleServiceImpl.java`
139. `src/main/java/com/nubo/schedule/query/api/service/impl/ScheduleStatusHistoryServiceImpl.java`
140. `src/main/java/com/nubo/schedule/query/api/service/impl/ScreenActionServiceImpl.java`
141. `src/main/java/com/nubo/schedule/query/api/service/impl/ScreenServiceImpl.java`
142. `src/main/java/com/nubo/schedule/query/api/service/impl/StatusServiceImpl.java`
143. `src/main/java/com/nubo/schedule/query/api/service/impl/SubmoduleServiceImpl.java`
144. `src/main/java/com/nubo/schedule/query/api/service/impl/TypeServiceImpl.java`
145. `src/main/java/com/nubo/schedule/query/api/web/controller/CountryRestController.java`
146. `src/main/java/com/nubo/schedule/query/api/web/controller/FrequencyRestController.java`
147. `src/main/java/com/nubo/schedule/query/api/web/controller/MicroserviceRestController.java`
148. `src/main/java/com/nubo/schedule/query/api/web/controller/ModuleRestController.java`
149. `src/main/java/com/nubo/schedule/query/api/web/controller/ProcessRestController.java`
150. `src/main/java/com/nubo/schedule/query/api/web/controller/RejectionReasonRestController.java`
151. `src/main/java/com/nubo/schedule/query/api/web/controller/RelatedScheduleRestController.java`
152. `src/main/java/com/nubo/schedule/query/api/web/controller/ScheduleLogRestController.java`
153. `src/main/java/com/nubo/schedule/query/api/web/controller/ScheduleRestController.java`
154. `src/main/java/com/nubo/schedule/query/api/web/controller/ScheduleStatusHistoryRestController.java`
155. `src/main/java/com/nubo/schedule/query/api/web/controller/ScreenActionRestController.java`
156. `src/main/java/com/nubo/schedule/query/api/web/controller/ScreenRestController.java`
157. `src/main/java/com/nubo/schedule/query/api/web/controller/StatusRestController.java`
158. `src/main/java/com/nubo/schedule/query/api/web/controller/SubmoduleRestController.java`
159. `src/main/java/com/nubo/schedule/query/api/web/controller/TypeRestController.java`
160. `src/main/resources/application-dev.yml`
161. `src/main/resources/application-local.yml`
162. `src/main/resources/application-prod.yml`
163. `src/main/resources/application-qa.yml`
164. `src/main/resources/application-uat.yml`
165. `src/main/resources/application.yml`
166. `src/main/resources/banner.txt`
167. `src/main/resources/log/JsonEventLayout_error.json`
168. `src/main/resources/log/JsonEventLayout_info.json`
169. `src/main/resources/log/JsonEventLayout_trace.json`
170. `src/main/resources/log/log4j2-prod.properties`
171. `src/main/resources/log/log4j2.properties`

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
    <groupId>com.nubo.schedule.query.api</groupId>
    <artifactId>schedule-query-api</artifactId>
    <version>0.36.0</version>
    <name>${project.artifactId}</name>
    <description>Schedule Query Api</description>

    <properties>
        <java.version>17</java.version>
        <spring.port>8080</spring.port>
        <test.skip>false</test.skip>
        <datasource.url.application.name>ApplicationName=${project.artifactId}</datasource.url.application.name>
        <hikari.pool.name>${project.artifactId}-pool</hikari.pool.name>

        <!-- Security fixes for CVEs -->
        <spring-framework.version>6.2.11</spring-framework.version>
        <commons-lang3.version>3.18.0</commons-lang3.version>
        <tomcat.version>10.1.47</tomcat.version>
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
        <!-- Json -->
        <dependency>
            <groupId>com.google.code.gson</groupId>
            <artifactId>gson</artifactId>
            <version>2.11.0</version>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>org.xmlunit</groupId>
            <artifactId>xmlunit-core</artifactId>
            <version>2.10.0</version>
            <scope>test</scope>
        </dependency>
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
        <dependency>
            <groupId>commons-io</groupId>
            <artifactId>commons-io</artifactId>
            <version>2.15.1</version>
        </dependency>

        <!-- Security fixes for CVEs -->
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-core</artifactId>
            <version>${spring-framework.version}</version>
        </dependency>
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-webmvc</artifactId>
            <version>${spring-framework.version}</version>
        </dependency>
        <dependency>
            <groupId>org.apache.commons</groupId>
            <artifactId>commons-lang3</artifactId>
            <version>${commons-lang3.version}</version>
        </dependency>
        <dependency>
            <groupId>org.apache.tomcat.embed</groupId>
            <artifactId>tomcat-embed-core</artifactId>
            <version>${tomcat.version}</version>
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
                                <exclude>**/ReceiptsOperationsApiApplication.class</exclude>
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

## src/main/java/com/nubo/schedule/query/api/ScheduleQueryApiApplication.java

```java
package com.nubo.schedule.query.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ScheduleQueryApiApplication {

    public static void main(String[] args) {
        SpringApplication.run(ScheduleQueryApiApplication.class, args);
    }

}

```

## src/main/java/com/nubo/schedule/query/api/application/annotations/RateLimited.java

```java
package com.nubo.schedule.query.api.application.annotations;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.METHOD, ElementType.TYPE})
public @interface RateLimited {
}
```

## src/main/java/com/nubo/schedule/query/api/application/config/SwaggerConfig.java

```java
package com.nubo.schedule.query.api.application.config;

import com.nubo.schedule.query.api.exception.error.ErrorResponse;
import com.nubo.schedule.query.api.exception.error.ErrorValidation;
import com.nubo.schedule.query.api.models.enums.PropertiesEnum;
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

## src/main/java/com/nubo/schedule/query/api/application/config/WebConfig.java

```java
package com.nubo.schedule.query.api.application.config;

import com.nubo.schedule.query.api.application.interceptors.GlobalInterceptor;
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

## src/main/java/com/nubo/schedule/query/api/application/context/GlobalContext.java

```java
package com.nubo.schedule.query.api.application.context;

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

}

```

## src/main/java/com/nubo/schedule/query/api/application/database/NamingStrategyConfig.java

```java
package com.nubo.schedule.query.api.application.database;

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

## src/main/java/com/nubo/schedule/query/api/application/database/UpperNamingConfig.java

```java
package com.nubo.schedule.query.api.application.database;

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

## src/main/java/com/nubo/schedule/query/api/application/filters/GlobalFilter.java

```java
package com.nubo.schedule.query.api.application.filters;

import com.nubo.schedule.query.api.application.context.GlobalContext;
import com.nubo.schedule.query.api.application.util.ApplicationUtils;
import com.nubo.schedule.query.api.exception.ServiceException;
import com.nubo.schedule.query.api.exception.error.ErrorCode;
import com.nubo.schedule.query.api.exception.error.ErrorResponse;
import com.nubo.schedule.query.api.models.enums.PropertiesEnum;
import com.nubo.schedule.query.api.models.enums.VersionApiEnum;
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

## src/main/java/com/nubo/schedule/query/api/application/interceptors/GlobalInterceptor.java

```java
package com.nubo.schedule.query.api.application.interceptors;

import com.nubo.schedule.query.api.application.context.GlobalContext;
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

## src/main/java/com/nubo/schedule/query/api/application/interceptors/RateLimitInterceptor.java

```java
package com.nubo.schedule.query.api.application.interceptors;

import com.nubo.schedule.query.api.application.annotations.RateLimited;
import com.nubo.schedule.query.api.application.properties.PropertiesConfig;
import com.nubo.schedule.query.api.exception.ServiceException;
import com.nubo.schedule.query.api.exception.error.ErrorCode;
import com.nubo.schedule.query.api.models.enums.PropertiesEnum;
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
        if (clientIp==null || clientIp.isEmpty()) {
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

## src/main/java/com/nubo/schedule/query/api/application/properties/PropertiesConfig.java

```java
package com.nubo.schedule.query.api.application.properties;

import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.time.LocalTime;

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

    @Value("${nubo.schedule.default-fixed-closing-time}")
    private LocalTime defaultFixedClosingTime;

}

```

## src/main/java/com/nubo/schedule/query/api/application/properties/PropertiesContext.java

```java
package com.nubo.schedule.query.api.application.properties;

import com.nubo.schedule.query.api.application.context.GlobalContext;
import com.nubo.schedule.query.api.application.util.ApplicationUtils;
import com.nubo.schedule.query.api.models.enums.PropertiesEnum;
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

}


```

## src/main/java/com/nubo/schedule/query/api/application/util/ApplicationUtils.java

```java
package com.nubo.schedule.query.api.application.util;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonDeserializer;
import com.google.gson.JsonPrimitive;
import com.google.gson.JsonSerializer;

import java.lang.reflect.Type;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

public class ApplicationUtils {

    private static final DateTimeFormatter DATE_FMT = DateTimeFormatter.ISO_LOCAL_DATE;
    private static final DateTimeFormatter TIME_FMT = DateTimeFormatter.ISO_LOCAL_TIME;
    private static final DateTimeFormatter DATETIME_FMT = DateTimeFormatter.ISO_LOCAL_DATE_TIME;

    private static final Gson gson = new GsonBuilder()
            .registerTypeAdapter(LocalDate.class,
                    (JsonSerializer<LocalDate>) (src, typeOfSrc, context) ->
                            new JsonPrimitive(src.format(DATE_FMT)))
            .registerTypeAdapter(LocalDate.class,
                    (JsonDeserializer<LocalDate>) (json, type, context) ->
                            LocalDate.parse(json.getAsString(), DATE_FMT))
            .registerTypeAdapter(LocalDateTime.class,
                    (JsonSerializer<LocalDateTime>) (src, typeOfSrc, context) ->
                            new JsonPrimitive(src.format(DATETIME_FMT)))
            .registerTypeAdapter(LocalDateTime.class,
                    (JsonDeserializer<LocalDateTime>) (json, type, context) ->
                            LocalDateTime.parse(json.getAsString(), DATETIME_FMT))
            .registerTypeAdapter(LocalTime.class,
                    (JsonSerializer<LocalTime>) (src, typeOfSrc, context) ->
                            new JsonPrimitive(src.format(TIME_FMT)))
            .registerTypeAdapter(LocalTime.class,
                    (JsonDeserializer<LocalTime>) (json, type, context) ->
                            LocalTime.parse(json.getAsString(), TIME_FMT))
            .create();

    static final String FORMAT_DATETIME = "yyyy-MM-dd'T'HH:mm:ss";
    static final String FORMAT_DATE = "yyyy-MM-dd";
    static final String FORMAT_TIME = "HH:mm:ss";
    static final String FORMAT_DATE_PLANE = "yyyyMMdd";
    static final String FORMAT_DD_MM_YYYY_HHMMSS = "dd-MM-yyyy_HHmmss";

    private ApplicationUtils() {
    }

    public static String getFormatDatetime() {
        return FORMAT_DATETIME;
    }

    public static String getFormatDate() {
        return FORMAT_DATE;
    }

    public static String getFormatDatePlane() {
        return FORMAT_DATE_PLANE;
    }

    public static String getLocalDateTimeNow() {
        return LocalDateTime.now().format(DateTimeFormatter.ofPattern(ApplicationUtils.getFormatDatetime()));
    }

    public static String getLocalDateNow() {
        return LocalDateTime.now().format(DateTimeFormatter.ofPattern(ApplicationUtils.getFormatDate()));
    }

    public static String getLocalDateTimeCustomFormat() {
        return LocalDateTime.now()
                .format(DateTimeFormatter.ofPattern(FORMAT_DD_MM_YYYY_HHMMSS));
    }

    public static String convertObjectToJsonWithJavaTime(Object object) {
        return gson.toJson(object);
    }

    public static String convertObjectToJson(Object object) {
        return new Gson().toJson(object);
    }

    public static Object convertJsonToObject(String json, Object object) {
        return new Gson().fromJson(json, (Type) object);
    }

    public static String convertLocalDateTimeToString(LocalDateTime localDateTime) {
        return localDateTime.format(DateTimeFormatter.ofPattern(ApplicationUtils.getFormatDatetime()));
    }

    public static BigDecimal divide(BigDecimal numerator, BigDecimal denominator) {
        if (numerator==null || denominator==null || BigDecimal.ZERO.compareTo(denominator)==0) {
            return BigDecimal.ZERO;
        }
        return numerator.divide(denominator, 6, RoundingMode.HALF_UP);
    }

    public static String getFormatTime() {
        return FORMAT_TIME;
    }

}
```

## src/main/java/com/nubo/schedule/query/api/exception/ServiceException.java

```java
package com.nubo.schedule.query.api.exception;

import com.nubo.schedule.query.api.exception.error.ErrorCode;
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
        return this.httpStatus!=null ? this.httpStatus:HttpStatus.INTERNAL_SERVER_ERROR;
    }

}

```

## src/main/java/com/nubo/schedule/query/api/exception/error/ErrorCode.java

```java
package com.nubo.schedule.query.api.exception.error;

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
    SCHEDULE_NOT_FOUND("Schedule not found"),
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
    INVALID_TIMEZONE("Invalid timezone format"),
    NOT_DATA_FOUND("No data found for the given date range"),
    ;

    private final String message;

    ErrorCode(String message) {
        this.message = message;
    }

    public String getName() {
        return this.name();
    }

}

```

## src/main/java/com/nubo/schedule/query/api/exception/error/ErrorResponse.java

```java
package com.nubo.schedule.query.api.exception.error;

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

## src/main/java/com/nubo/schedule/query/api/exception/error/ErrorValidation.java

```java
package com.nubo.schedule.query.api.exception.error;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ErrorValidation {

    private String id;
    private String description;

}

```

## src/main/java/com/nubo/schedule/query/api/exception/handler/GlobalExceptionHandler.java

```java
package com.nubo.schedule.query.api.exception.handler;

import com.nubo.schedule.query.api.application.properties.PropertiesContext;
import com.nubo.schedule.query.api.exception.ServiceException;
import com.nubo.schedule.query.api.exception.error.ErrorCode;
import com.nubo.schedule.query.api.exception.error.ErrorResponse;
import com.nubo.schedule.query.api.exception.error.ErrorValidation;
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

## src/main/java/com/nubo/schedule/query/api/helpers/CountryMapperUtil.java

```java
package com.nubo.schedule.query.api.helpers;

import com.nubo.schedule.query.api.models.dto.response.CountryDto;
import com.nubo.schedule.query.api.models.entity.CountryEntity;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class CountryMapperUtil {

    public static CountryDto toDto(CountryEntity entity) {
        if (entity==null) return null;
        return CountryDto.builder()
                .id(entity.getId())
                .code(entity.getCode())
                .name(entity.getName())
                .timeZone(entity.getTimeZone())
                .build();
    }

    public static List<CountryDto> toDtoList(List<CountryEntity> entities) {
        if (entities==null || entities.isEmpty()) {
            return Collections.emptyList();
        }
        return entities.stream()
                .map(CountryMapperUtil::toDto)
                .collect(Collectors.toList());
    }
}
```

## src/main/java/com/nubo/schedule/query/api/helpers/FrequencyMapperUtil.java

```java
package com.nubo.schedule.query.api.helpers;

import com.nubo.schedule.query.api.models.dto.response.FrequencyDto;
import com.nubo.schedule.query.api.models.entity.FrequencyEntity;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class FrequencyMapperUtil {

    public static FrequencyDto toDto(FrequencyEntity entity) {
        if (entity==null) return null;
        return FrequencyDto.builder()
                .id(entity.getId())
                .description(entity.getDescription())
                .build();
    }

    public static List<FrequencyDto> toDtoList(List<FrequencyEntity> entities) {
        if (entities==null || entities.isEmpty()) {
            return Collections.emptyList();
        }
        return entities.stream()
                .map(FrequencyMapperUtil::toDto)
                .collect(Collectors.toList());
    }
}
```

## src/main/java/com/nubo/schedule/query/api/helpers/MapperPageUtil.java

```java
package com.nubo.schedule.query.api.helpers;

import com.nubo.schedule.query.api.models.dto.response.PageResponseDto;
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

    public static <T, U> PageResponseDto<T> pageToPageResponseOutDto(List<T> list, Page<U> page) {
        PageResponseDto<T> paginationResponseDto = new PageResponseDto<>();
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

## src/main/java/com/nubo/schedule/query/api/helpers/MicroserviceMapperUtil.java

```java
package com.nubo.schedule.query.api.helpers;

import com.nubo.schedule.query.api.models.dto.response.MicroserviceDto;
import com.nubo.schedule.query.api.models.entity.MicroserviceEntity;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class MicroserviceMapperUtil {

    public static MicroserviceDto toDto(MicroserviceEntity entity) {
        if (entity==null) return null;
        return MicroserviceDto.builder()
                .id(entity.getId())
                .name(entity.getName())
                .build();
    }

    public static List<MicroserviceDto> toDtoList(List<MicroserviceEntity> entities) {
        if (entities==null || entities.isEmpty()) {
            return Collections.emptyList();
        }
        return entities.stream()
                .map(MicroserviceMapperUtil::toDto)
                .collect(Collectors.toList());
    }
}
```

## src/main/java/com/nubo/schedule/query/api/helpers/ModuleMapperUtil.java

```java
package com.nubo.schedule.query.api.helpers;

import com.nubo.schedule.query.api.models.dto.response.ModuleDto;
import com.nubo.schedule.query.api.models.entity.ModuleEntity;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class ModuleMapperUtil {

    public static ModuleDto toDto(ModuleEntity entity) {
        if (entity==null) return null;
        return ModuleDto.builder()
                .id(entity.getId())
                .categoryId(entity.getCategoryId())
                .name(entity.getName())
                .description(entity.getDescription())
                .collapsible(entity.getCollapsible())
                .orderItem(entity.getOrderItem())
                .status(entity.getStatus()!=null ? StatusMapperUtil.toDto(entity.getStatus()):null)
                .moduleDeleted(entity.getModuleDeleted())
                .build();
    }

    public static List<ModuleDto> toDtoList(List<ModuleEntity> entities) {
        if (entities==null || entities.isEmpty()) {
            return Collections.emptyList();
        }
        return entities.stream()
                .map(ModuleMapperUtil::toDto)
                .collect(Collectors.toList());
    }
}
```

## src/main/java/com/nubo/schedule/query/api/helpers/ParticipantMapperUtil.java

```java
package com.nubo.schedule.query.api.helpers;

import com.nubo.schedule.query.api.models.dto.response.ParticipantDto;
import com.nubo.schedule.query.api.models.entity.ParticipantEntity;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class ParticipantMapperUtil {

    public static ParticipantDto toDto(ParticipantEntity entity) {
        if (entity==null) return null;
        return ParticipantDto.builder()
                .id(entity.getId())
                .code(entity.getCode())
                .documentNumber(entity.getDocumentNumber())
                .name(entity.getName())
                .shortName(entity.getShortName())
                .mnemonic(entity.getMnemonic())
                .registrationDate(entity.getRegistrationDate())
                .taxCode(entity.getTaxCode())
                .mainAddress(entity.getMainAddress())
                .webPage(entity.getWebPage())
                .phoneNumber(entity.getPhoneNumber())
                .nitClearingHouse(entity.getNitClearingHouse())
                .typeEntity(entity.getTypeEntity())
                .marginAccount(entity.getMarginAccount())
                .masterAccount(entity.getMasterAccount())
                .directAllocation(entity.getDirectAllocation())
                .marketMaker(entity.getMarketMaker())
                .enabled(entity.getEnabled())
                .custodian(entity.getCustodian())
                .build();
    }

    public static List<ParticipantDto> toDtoList(List<ParticipantEntity> entities) {
        if (entities==null || entities.isEmpty()) {
            return Collections.emptyList();
        }
        return entities.stream()
                .map(ParticipantMapperUtil::toDto)
                .collect(Collectors.toList());
    }
}
```

## src/main/java/com/nubo/schedule/query/api/helpers/ProcessMapperUtil.java

```java
package com.nubo.schedule.query.api.helpers;

import com.nubo.schedule.query.api.models.dto.response.ProcessDto;
import com.nubo.schedule.query.api.models.entity.ProcessEntity;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class ProcessMapperUtil {

    public static ProcessDto toDto(ProcessEntity entity) {
        if (entity==null) return null;
        return ProcessDto.builder()
                .id(entity.getId())
                .description(entity.getDescription())
                .build();
    }

    public static List<ProcessDto> toDtoList(List<ProcessEntity> entities) {
        if (entities==null || entities.isEmpty()) {
            return Collections.emptyList();
        }
        return entities.stream()
                .map(ProcessMapperUtil::toDto)
                .collect(Collectors.toList());
    }
}
```

## src/main/java/com/nubo/schedule/query/api/helpers/RejectionReasonMapperUtil.java

```java
package com.nubo.schedule.query.api.helpers;

import com.nubo.schedule.query.api.models.dto.response.RejectionReasonDto;
import com.nubo.schedule.query.api.models.entity.RejectionReasonEntity;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class RejectionReasonMapperUtil {

    private RejectionReasonMapperUtil() {
        throw new IllegalStateException("Utility class");
    }

    public static RejectionReasonDto toDto(RejectionReasonEntity entity) {
        return RejectionReasonDto.builder()
                .id(entity.getId())
                .reason(entity.getReason())
                .category(entity.getCategory())
                .build();
    }

    public static List<RejectionReasonDto> toDtoList(List<RejectionReasonEntity> entities) {
        if (entities==null) {
            return new ArrayList<>();
        }
        return entities.stream()
                .map(RejectionReasonMapperUtil::toDto)
                .collect(Collectors.toList());
    }
}
```

## src/main/java/com/nubo/schedule/query/api/helpers/RelatedScheduleAssociationMapperUtil.java

```java
package com.nubo.schedule.query.api.helpers;

import com.nubo.schedule.query.api.exception.ServiceException;
import com.nubo.schedule.query.api.exception.error.ErrorCode;
import com.nubo.schedule.query.api.models.dto.response.ScheduleAssociationDto;
import com.nubo.schedule.query.api.models.entity.RelatedScheduleEntity;
import com.nubo.schedule.query.api.models.entity.ScheduleEntity;
import com.nubo.schedule.query.api.repository.ScheduleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class RelatedScheduleAssociationMapperUtil {

    private final ScheduleRepository scheduleRepository;

    public ScheduleAssociationDto toDto(RelatedScheduleEntity entity) {
        if (entity == null) return null;
        ScheduleEntity scheduleEntity = getSchedule(entity.getRelatedScheduleId());
        return ScheduleAssociationDto.builder()
                .id(entity.getRelatedScheduleId())
                .description(scheduleEntity.getDescription())
                .schedule(ScheduleMapperUtil.toDto(scheduleEntity))
                .startTime(scheduleEntity.getOpeningTime())
                .endTime(scheduleEntity.getClosingTime())
                .country(CountryMapperUtil.toDto(scheduleEntity.getCountry()))
                .build();
    }

    public List<ScheduleAssociationDto> toDtoList(List<RelatedScheduleEntity> entities) {
        if (entities == null || entities.isEmpty()) {
            return Collections.emptyList();
        }
        return entities.stream()
                .map(this::toDto)
                .collect(Collectors.toList());
    }

    private ScheduleEntity getSchedule(Long scheduleId) {
        return scheduleRepository.findById(scheduleId)
                .orElseThrow(() -> new ServiceException(ErrorCode.SCHEDULE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

}
```

## src/main/java/com/nubo/schedule/query/api/helpers/ScheduleLogMapperUtil.java

```java
package com.nubo.schedule.query.api.helpers;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.nubo.schedule.query.api.models.dto.response.ScheduleDto;
import com.nubo.schedule.query.api.models.dto.response.ScheduleLogDto;
import com.nubo.schedule.query.api.models.entity.ScheduleLogEntity;
import com.nubo.schedule.query.api.repository.CountryRepository;
import com.nubo.schedule.query.api.repository.ModuleRepository;
import com.nubo.schedule.query.api.repository.StatusRepository;
import com.nubo.schedule.query.api.repository.TypeRepository;
import com.nubo.schedule.query.api.repository.UserNuboRepository;

@Component
public class ScheduleLogMapperUtil {

    private static final ObjectMapper objectMapper = new ObjectMapper();
    
    static {
        objectMapper.findAndRegisterModules();
    }

    @Autowired
    private TypeRepository typeRepository;
    
    @Autowired
    private CountryRepository countryRepository;
    
    @Autowired
    private ModuleRepository moduleRepository;
    
    @Autowired
    private StatusRepository statusRepository;
    
    @Autowired
    private UserNuboRepository userNuboRepository;

    public ScheduleLogDto toDto(ScheduleLogEntity entity) {
        if (entity == null) return null;
        return ScheduleLogDto.builder()
                .scheduleLogId(entity.getScheduleLogId())
                .scheduleId(entity.getScheduleId())
                .dataAfter(parseDataAfterToScheduleDto(entity.getDataAfter()))
                .time(entity.getTime())
                .lastModifyUser(entity.getLastModifyUser())
                .lastModifyApplication(entity.getLastModifyApplication())
                .lastModifyDate(entity.getLastModifyDate())
                .lastModifyIp(entity.getLastModifyIp())
                .build();
    }

    private ScheduleDto parseDataAfterToScheduleDto(String dataAfterJson) {
        if (dataAfterJson == null || dataAfterJson.trim().isEmpty()) {
            return null;
        }
        try {
            var jsonNode = objectMapper.readTree(dataAfterJson);
            
            return ScheduleDto.builder()
                    .id(jsonNode.has("SCHEDULE_ID") ? jsonNode.get("SCHEDULE_ID").asLong() : null)
                    .description(jsonNode.has("DESCRIPTION") ? jsonNode.get("DESCRIPTION").asText() : null)
                    .openingTime(jsonNode.has("OPENING_TIME") ? 
                        java.time.LocalTime.parse(jsonNode.get("OPENING_TIME").asText()) : null)
                    .closingTime(jsonNode.has("CLOSING_TIME") ? 
                        java.time.LocalTime.parse(jsonNode.get("CLOSING_TIME").asText()) : null)
                    .startDate(jsonNode.has("START_DATE") ? 
                        java.time.LocalDate.parse(jsonNode.get("START_DATE").asText()) : null)
                    .endDate(jsonNode.has("END_DATE") ? 
                        java.time.LocalDate.parse(jsonNode.get("END_DATE").asText()) : null)
                    .frequency(jsonNode.has("FREQUENCY") ? jsonNode.get("FREQUENCY").asInt() : null)
                    .internal(jsonNode.has("INTERNAL") ? jsonNode.get("INTERNAL").asBoolean() : null)
                    .lastModifyUser(jsonNode.has("LAST_MODIFY_USER") ? 
                        jsonNode.get("LAST_MODIFY_USER").asText() : null)
                    .lastModifyApplication(jsonNode.has("LAST_MODIFY_APPLIC") ? 
                        jsonNode.get("LAST_MODIFY_APPLIC").asText() : null)
                    .lastModifyDate(jsonNode.has("LAST_MODIFY_DATE") ? 
                        java.time.LocalDateTime.parse(jsonNode.get("LAST_MODIFY_DATE").asText().replace("+00:00", "")) : null)
                    .lastModifyIp(jsonNode.has("LAST_MODIFY_IP") ? 
                        jsonNode.get("LAST_MODIFY_IP").asText() : null)
                    .type(jsonNode.has("TYPE_ID") && !jsonNode.get("TYPE_ID").isNull() ? 
                        typeRepository.findById(jsonNode.get("TYPE_ID").asLong())
                                .map(TypeMapperUtil::toDto).orElse(null) : null)
                    .country(jsonNode.has("COUNTRY_ID") && !jsonNode.get("COUNTRY_ID").isNull() ? 
                        countryRepository.findById(jsonNode.get("COUNTRY_ID").asLong())
                                .map(CountryMapperUtil::toDto).orElse(null) : null)
                    .module(jsonNode.has("MODULE_ID") && !jsonNode.get("MODULE_ID").isNull() ? 
                        moduleRepository.findById(jsonNode.get("MODULE_ID").asLong())
                                .map(ModuleMapperUtil::toDto).orElse(null) : null)
                    .status(jsonNode.has("STATUS_ID") && !jsonNode.get("STATUS_ID").isNull() ? 
                        statusRepository.findById(jsonNode.get("STATUS_ID").asLong())
                                .map(StatusMapperUtil::toDto).orElse(null) : null)
                    .userNubo(jsonNode.has("USER_NUBO_ID") && !jsonNode.get("USER_NUBO_ID").isNull() ? 
                        userNuboRepository.findById(jsonNode.get("USER_NUBO_ID").asLong())
                                .map(UserNuboMapperUtil::toDto).orElse(null) : null)
                    .build();
        } catch (Exception e) {
            return null;
        }
    }

    public List<ScheduleLogDto> toDtoList(List<ScheduleLogEntity> entities) {
        if (entities == null || entities.isEmpty()) {
            return Collections.emptyList();
        }
        return entities.stream()
                .map(this::toDto)
                .collect(Collectors.toList());
    }

}
```

## src/main/java/com/nubo/schedule/query/api/helpers/ScheduleMapperUtil.java

```java
package com.nubo.schedule.query.api.helpers;

import com.nubo.schedule.query.api.exception.ServiceException;
import com.nubo.schedule.query.api.exception.error.ErrorCode;
import com.nubo.schedule.query.api.models.dto.response.ScheduleDto;
import com.nubo.schedule.query.api.models.dto.response.ScheduleSummaryDto;
import com.nubo.schedule.query.api.models.entity.ScheduleEntity;
import org.springframework.http.HttpStatus;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class ScheduleMapperUtil {

    public static ScheduleDto toDto(ScheduleEntity entity) {
        if (entity == null) return null;
        return ScheduleDto.builder()
                .id(entity.getId())
                .description(entity.getDescription())
                .openingTime(entity.getOpeningTime())
                .closingTime(entity.getClosingTime())
                .type(entity.getType() != null ? TypeMapperUtil.toDto(entity.getType()) : null)
                .startDate(entity.getStartDate())
                .endDate(entity.getEndDate())
                .country(entity.getCountry() != null ? CountryMapperUtil.toDto(entity.getCountry()) : null)
                .module(entity.getModule() != null ? ModuleMapperUtil.toDto(entity.getModule()) : null)
                .submodule(entity.getSubmodule() != null ? SubmoduleMapperUtil.toDto(entity.getSubmodule()) : null)
                .frequency(entity.getFrequency())
                .status(entity.getStatus() != null ? StatusMapperUtil.toDto(entity.getStatus()) : null)
                .internal(entity.getInternal())
                .userNubo(entity.getUserNubo() != null ? UserNuboMapperUtil.toDto(entity.getUserNubo()) : null)
                .lastModifyUser(entity.getLastModifyUser())
                .lastModifyApplication(entity.getLastModifyApplication())
                .lastModifyDate(entity.getLastModifyDate())
                .lastModifyIp(entity.getLastModifyIp())
                .dailyStatus(calculateDailyStatus(entity.getEndDate(), entity.getClosingTime(), entity.getCountry().getTimeZone()))
                .automatic(entity.getAutomatic())
                .process(entity.getProcess() != null ? ProcessMapperUtil.toDto(entity.getProcess()) : null)
                .screenAction(entity.getScreenAction() != null ? ScreenActionMapperUtil.toDto(entity.getScreenAction()): null)
                .build();
    }

    private static String calculateDailyStatus(LocalDate endDate, LocalTime closingTime,
                                               String timeZone) {
        if (endDate == null || closingTime == null) {
            return "Abierto";
        }

        ZonedDateTime countryZonedDateTime = getDateTimeCurrentByTimeZone(timeZone);

        LocalDate currentDate = countryZonedDateTime.toLocalDate();
        LocalTime currentTime = countryZonedDateTime.toLocalTime();

        // Si la fecha actual supera al endDate, está cerrado
        if (currentDate.isAfter(endDate)) {
            return "Cerrado";
        }

        // Si estamos en el endDate, comparamos con closingTime
        if (currentDate.isEqual(endDate) && currentTime.isAfter(closingTime)) {
            return "Cerrado";
        }

        return "Abierto";
    }

    public static List<ScheduleDto> toDtoList(List<ScheduleEntity> entities) {
        if (entities == null || entities.isEmpty()) {
            return Collections.emptyList();
        }
        return entities.stream()
                .map(ScheduleMapperUtil::toDto)
                .collect(Collectors.toList());
    }

    public static ScheduleSummaryDto toSummaryDto(ScheduleEntity entity) {
        if (entity == null) return null;
        return ScheduleSummaryDto.builder()
                .id(entity.getId())
                .description(entity.getDescription())
                .build();
    }

    public static List<ScheduleSummaryDto> toSummaryDtoList(List<ScheduleEntity> entities) {
        if (entities == null || entities.isEmpty()) {
            return Collections.emptyList();
        }
        return entities.stream()
                .map(ScheduleMapperUtil::toSummaryDto)
                .collect(Collectors.toList());
    }

    public static ZonedDateTime getDateTimeCurrentByTimeZone(String timeZone) {
        ZoneId zoneId = parseTimeZone(timeZone);

        ZonedDateTime zonedDateTime = ZonedDateTime.now(zoneId);

        return zonedDateTime;
    }

    public static ZoneId parseTimeZone(String timeZone) {
        try {
            if (timeZone.startsWith("UTC")) {
                String offset = timeZone.replace("UTC", "").trim();


                if (offset.contains(" a ")) {
                    offset = offset.split(" a ")[0].trim();
                }

                if (offset.isEmpty()) {
                    return ZoneId.of("UTC");
                }

                if (!offset.startsWith("+") && !offset.startsWith("-")) {
                    offset = "+" + offset;
                }

                offset = normalizeOffset(offset);

                return ZoneId.of(offset);
            }
            return ZoneId.of(timeZone);
        } catch (Exception e) {
            throw new ServiceException(ErrorCode.INVALID_TIMEZONE, HttpStatus.BAD_REQUEST);
        }
    }

    public static String normalizeOffset(String offset) {
        if (offset.matches("[+-]\\d:\\d{2}")) {
            return offset.substring(0, 1) + "0" + offset.substring(1);
        } else if (offset.matches("[+-]\\d{1}$")) {
            return offset.substring(0, 1) + "0" + offset.substring(1);
        }
        return offset;
    }

}
```

## src/main/java/com/nubo/schedule/query/api/helpers/ScheduleStatusHistoryMapperUtil.java

```java
package com.nubo.schedule.query.api.helpers;

import com.nubo.schedule.query.api.models.dto.response.ScheduleStatusHistoryDto;
import com.nubo.schedule.query.api.models.entity.ScheduleStatusHistoryEntity;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class ScheduleStatusHistoryMapperUtil {

    public static ScheduleStatusHistoryDto toDto(ScheduleStatusHistoryEntity entity) {
        if (entity==null) return null;
        return ScheduleStatusHistoryDto.builder()
                .scheduleId(entity.getScheduleId())
                .time(entity.getTime())
                .detail(entity.getDetail())
                .build();
    }

    public static List<ScheduleStatusHistoryDto> toDtoList(List<ScheduleStatusHistoryEntity> entities) {
        if (entities==null || entities.isEmpty()) {
            return Collections.emptyList();
        }
        return entities.stream()
                .map(ScheduleStatusHistoryMapperUtil::toDto)
                .collect(Collectors.toList());
    }
}
```

## src/main/java/com/nubo/schedule/query/api/helpers/ScreenActionMapperUtil.java

```java
package com.nubo.schedule.query.api.helpers;

import com.nubo.schedule.query.api.models.dto.response.ScreenActionDto;
import com.nubo.schedule.query.api.models.entity.ScreenActionEntity;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class ScreenActionMapperUtil {

    public static ScreenActionDto toDto(ScreenActionEntity entity) {
        if (entity == null) return null;
        return ScreenActionDto.builder()
                .id(entity.getId())
                .code(entity.getCode())
                .description(entity.getDescription())
                .build();
    }

    public static List<ScreenActionDto> toDtoList(List<ScreenActionEntity> entities) {
        if (entities == null || entities.isEmpty()) {
            return Collections.emptyList();
        }
        return entities.stream()
                .map(ScreenActionMapperUtil::toDto)
                .collect(Collectors.toList());
    }

}

```

## src/main/java/com/nubo/schedule/query/api/helpers/ScreenMapperUtil.java

```java
package com.nubo.schedule.query.api.helpers;

import com.nubo.schedule.query.api.models.dto.response.ScreenDto;
import com.nubo.schedule.query.api.models.entity.ScreenEntity;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class ScreenMapperUtil {

    public static ScreenDto toDto(ScreenEntity entity) {
        if (entity==null) return null;
        return ScreenDto.builder()
                .id(entity.getId())
                .code(entity.getCode())
                .description(entity.getDescription())
                .categoryId(entity.getCategoryId())
                .moduleId(entity.getModuleId())
                .submoduleId(entity.getSubmoduleId())
                .build();
    }

    public static List<ScreenDto> toDtoList(List<ScreenEntity> entities) {
        if (entities==null || entities.isEmpty()) {
            return Collections.emptyList();
        }
        return entities.stream()
                .map(ScreenMapperUtil::toDto)
                .collect(Collectors.toList());
    }
}
```

## src/main/java/com/nubo/schedule/query/api/helpers/StatusMapperUtil.java

```java
package com.nubo.schedule.query.api.helpers;

import com.nubo.schedule.query.api.models.dto.response.StatusDto;
import com.nubo.schedule.query.api.models.entity.StatusEntity;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class StatusMapperUtil {

    public static StatusDto toDto(StatusEntity entity) {
        if (entity==null) return null;
        return StatusDto.builder()
                .id(entity.getId())
                .description(entity.getDescription())
                .category(entity.getCategory())
                .lastModifyUser(entity.getLastModifyUser())
                .lastModifyApplication(entity.getLastModifyApplication())
                .lastModifyDate(entity.getLastModifyDate())
                .lastModifyIp(entity.getLastModifyIp())
                .build();
    }

    public static List<StatusDto> toDtoList(List<StatusEntity> entities) {
        if (entities==null || entities.isEmpty()) {
            return Collections.emptyList();
        }
        return entities.stream()
                .map(StatusMapperUtil::toDto)
                .collect(Collectors.toList());
    }
}
```

## src/main/java/com/nubo/schedule/query/api/helpers/SubmoduleMapperUtil.java

```java
package com.nubo.schedule.query.api.helpers;

import com.nubo.schedule.query.api.models.dto.response.SubmoduleDto;
import com.nubo.schedule.query.api.models.entity.SubmoduleEntity;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class SubmoduleMapperUtil {

    public static SubmoduleDto toDto(SubmoduleEntity entity) {
        if (entity==null) return null;
        return SubmoduleDto.builder()
                .id(entity.getId())
                .description(entity.getDescription())
                .name(entity.getName())
                .collapsible(entity.getCollapsible())
                .orderItem(entity.getOrderItem())
                .status(entity.getStatus()!=null ? StatusMapperUtil.toDto(entity.getStatus()):null)
                .module(entity.getModule()!=null ? ModuleMapperUtil.toDto(entity.getModule()):null)
                .build();
    }

    public static List<SubmoduleDto> toDtoList(List<SubmoduleEntity> entities) {
        if (entities==null || entities.isEmpty()) {
            return Collections.emptyList();
        }
        return entities.stream()
                .map(SubmoduleMapperUtil::toDto)
                .collect(Collectors.toList());
    }
}
```

## src/main/java/com/nubo/schedule/query/api/helpers/TypeMapperUtil.java

```java
package com.nubo.schedule.query.api.helpers;

import com.nubo.schedule.query.api.models.dto.response.TypeDto;
import com.nubo.schedule.query.api.models.entity.TypeEntity;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class TypeMapperUtil {

    public static TypeDto toDto(TypeEntity entity) {
        if (entity==null) return null;
        return TypeDto.builder()
                .id(entity.getId())
                .description(entity.getDescription())
                .category(entity.getCategory())
                .build();
    }

    public static List<TypeDto> toDtoList(List<TypeEntity> entities) {
        if (entities==null || entities.isEmpty()) {
            return Collections.emptyList();
        }
        return entities.stream()
                .map(TypeMapperUtil::toDto)
                .collect(Collectors.toList());
    }
}
```

## src/main/java/com/nubo/schedule/query/api/helpers/UserNuboMapperUtil.java

```java
package com.nubo.schedule.query.api.helpers;

import com.nubo.schedule.query.api.models.dto.response.UserNuboDto;
import com.nubo.schedule.query.api.models.entity.UserNuboEntity;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class UserNuboMapperUtil {

    public static UserNuboDto toDto(UserNuboEntity entity) {
        if (entity==null) return null;
        return UserNuboDto.builder()
                .id(entity.getId())
                .userName(entity.getUserName())
                .firstName(entity.getFirstName())
                .lastName(entity.getLastName())
                .participant(entity.getParticipant()!=null ? ParticipantMapperUtil.toDto(entity.getParticipant()):null)
                .userType(entity.getUserType())
                .previousSession(entity.getPreviousSession())
                .build();
    }

    public static List<UserNuboDto> toDtoList(List<UserNuboEntity> entities) {
        if (entities==null || entities.isEmpty()) {
            return Collections.emptyList();
        }
        return entities.stream()
                .map(UserNuboMapperUtil::toDto)
                .collect(Collectors.toList());
    }
}
```

## src/main/java/com/nubo/schedule/query/api/helpers/specification/MicroserviceSpecification.java

```java
package com.nubo.schedule.query.api.helpers.specification;

import com.nubo.schedule.query.api.models.entity.MicroserviceEntity;
import jakarta.persistence.criteria.Predicate;
import org.springframework.data.jpa.domain.Specification;

import java.util.ArrayList;
import java.util.List;

public class MicroserviceSpecification {

    public static Specification<MicroserviceEntity> filterBySubmoduleIdAndName(Integer submoduleId, String name) {
        return (root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();

            if (submoduleId!=null) {
                predicates.add(criteriaBuilder.equal(root.get("submodule").get("id"), submoduleId));
            }

            if (name!=null && !name.trim().isEmpty()) {
                predicates.add(criteriaBuilder.like(
                        criteriaBuilder.lower(root.get("name")),
                        criteriaBuilder.lower(criteriaBuilder.literal("%" + name + "%"))
                ));
            }

            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }
}
```

## src/main/java/com/nubo/schedule/query/api/helpers/specification/ModuleSpecification.java

```java
package com.nubo.schedule.query.api.helpers.specification;

import com.nubo.schedule.query.api.models.entity.ModuleEntity;
import jakarta.persistence.criteria.Predicate;
import org.springframework.data.jpa.domain.Specification;

import java.util.ArrayList;
import java.util.List;

public class ModuleSpecification {

    public static Specification<ModuleEntity> filterBy(String name, String description, Integer categoryId, Integer id) {
        return (root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();

            if (name!=null && !name.trim().isEmpty()) {
                predicates.add(criteriaBuilder.like(
                        criteriaBuilder.lower(root.get("name")),
                        criteriaBuilder.lower(criteriaBuilder.literal("%" + name + "%"))
                ));
            }

            if (description!=null && !description.trim().isEmpty()) {
                predicates.add(criteriaBuilder.like(
                        criteriaBuilder.lower(root.get("description")),
                        criteriaBuilder.lower(criteriaBuilder.literal("%" + description + "%"))
                ));
            }


            if (categoryId!=null) {
                predicates.add(criteriaBuilder.equal(root.get("categoryId"), categoryId));
            }

            if (id!=null) {
                predicates.add(criteriaBuilder.equal(root.get("id"), id));
            }

            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }

}
```

## src/main/java/com/nubo/schedule/query/api/helpers/specification/ProcessSpecification.java

```java
package com.nubo.schedule.query.api.helpers.specification;

import com.nubo.schedule.query.api.models.entity.ProcessEntity;
import jakarta.persistence.criteria.Predicate;
import org.springframework.data.jpa.domain.Specification;

import java.util.ArrayList;
import java.util.List;

public class ProcessSpecification {

    public static Specification<ProcessEntity> filterBy(Long processId, String description) {
        return (root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();

            if (processId!=null) {
                predicates.add(criteriaBuilder.equal(root.get("id"), processId));
            }

            if (description!=null && !description.trim().isEmpty()) {
                predicates.add(criteriaBuilder.like(
                        criteriaBuilder.lower(root.get("description")),
                        criteriaBuilder.lower(criteriaBuilder.literal("%" + description + "%"))
                ));
            }

            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }

    public static Specification<ProcessEntity> filterByMicroserviceIdAndDescription(Integer microserviceId, String description) {
        return (root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();

            if (microserviceId!=null) {
                predicates.add(criteriaBuilder.equal(root.get("microservice").get("id"), microserviceId));
            }

            if (description!=null && !description.trim().isEmpty()) {
                predicates.add(criteriaBuilder.like(
                        criteriaBuilder.lower(root.get("description")),
                        criteriaBuilder.lower(criteriaBuilder.literal("%" + description + "%"))
                ));
            }

            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }
}
```

## src/main/java/com/nubo/schedule/query/api/helpers/specification/RejectionReasonSpecification.java

```java
package com.nubo.schedule.query.api.helpers.specification;

import com.nubo.schedule.query.api.models.entity.RejectionReasonEntity;
import jakarta.persistence.criteria.Predicate;
import org.springframework.data.jpa.domain.Specification;

import java.util.ArrayList;
import java.util.List;

public class RejectionReasonSpecification {

    public static Specification<RejectionReasonEntity> filterByCategoryAndReason(String category, String reason) {
        return (root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();

            if (category!=null && !category.trim().isEmpty()) {
                predicates.add(criteriaBuilder.like(
                        criteriaBuilder.lower(root.get("category")),
                        criteriaBuilder.lower(criteriaBuilder.literal("%" + category + "%"))
                ));
            }

            if (reason!=null && !reason.trim().isEmpty()) {
                predicates.add(criteriaBuilder.like(
                        criteriaBuilder.lower(root.get("reason")),
                        criteriaBuilder.lower(criteriaBuilder.literal("%" + reason + "%"))
                ));
            }

            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }
}
```

## src/main/java/com/nubo/schedule/query/api/helpers/specification/RelatedScheduleSpecification.java

```java
package com.nubo.schedule.query.api.helpers.specification;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.jpa.domain.Specification;

import com.nubo.schedule.query.api.models.entity.RelatedScheduleEntity;

import jakarta.persistence.criteria.Predicate;

public class RelatedScheduleSpecification {

    public static Specification<RelatedScheduleEntity> filterBy(Long scheduleId) {
        return (root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();

            if (scheduleId != null) {
                predicates.add(criteriaBuilder.equal(root.get("schedule").get("id"), scheduleId));
            }

            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }

}
```

## src/main/java/com/nubo/schedule/query/api/helpers/specification/ScheduleLogSpecification.java

```java
package com.nubo.schedule.query.api.helpers.specification;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.jpa.domain.Specification;

import com.nubo.schedule.query.api.models.entity.ScheduleLogEntity;

import jakarta.persistence.criteria.Predicate;

public class ScheduleLogSpecification {

    public static Specification<ScheduleLogEntity> filterBy(Long scheduleId) {
        return (root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();

            if (scheduleId != null) {
                predicates.add(criteriaBuilder.equal(root.get("scheduleId"), scheduleId));
            }

            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }

}
```

## src/main/java/com/nubo/schedule/query/api/helpers/specification/ScheduleSpecification.java

```java
package com.nubo.schedule.query.api.helpers.specification;

import java.util.ArrayList;
import java.util.List;

import com.nubo.schedule.query.api.models.entity.RelatedScheduleEntity;
import org.springframework.data.jpa.domain.Specification;

import com.nubo.schedule.query.api.models.entity.ScheduleEntity;
import com.nubo.schedule.query.api.models.enums.CountryCodeEnum;
import com.nubo.schedule.query.api.models.enums.UserTypeEnum;

import jakarta.persistence.criteria.Predicate;

public class ScheduleSpecification {

    public static Specification<ScheduleEntity> filterBy(
            Long scheduleId, Long countryId,
            Long processId, String processSearch,
            Long moduleId, String moduleSearch,
            Long submoduleId, String submoduleSearch,
            Long stateId, String stateSearch,
            List<Long> countryIds, String countrySearch,
            String screenActionCode,
            UserTypeEnum userType, Long userId) {

        return (root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();

            // Filter by scheduleId
            if (scheduleId != null) {
                predicates.add(criteriaBuilder.equal(root.get("id"), scheduleId));
            }

            // Filter by countryId
            if (countryId != null) {
                predicates.add(criteriaBuilder.equal(root.get("country").get("id"), countryId));
            }

            // Filter by processId using the new ManyToOne relationship
            if (processId != null) {
                predicates.add(criteriaBuilder.equal(root.get("process").get("id"), processId));
            } else if (processSearch != null && !processSearch.trim().isEmpty()) {
                String searchPattern = "%" + processSearch.toLowerCase() + "%";
                predicates.add(criteriaBuilder.like(
                        criteriaBuilder.lower(root.get("process").get("description")), searchPattern));
            }


            if (moduleId!=null) {
                predicates.add(criteriaBuilder.equal(root.get("module").get("id"), moduleId));
            } else if (moduleSearch!=null && !moduleSearch.trim().isEmpty()) {
                String searchPattern = "%" + moduleSearch.toLowerCase() + "%";
                Predicate namePredicate = criteriaBuilder.like(
                        criteriaBuilder.lower(root.get("module").get("name")), searchPattern);
                Predicate descriptionPredicate = criteriaBuilder.like(
                        criteriaBuilder.lower(root.get("module").get("description")), searchPattern);
                predicates.add(criteriaBuilder.or(namePredicate, descriptionPredicate));
            }

            if (stateId!=null) {
                predicates.add(criteriaBuilder.equal(root.get("status").get("id"), stateId));
            } else if (stateSearch!=null && !stateSearch.trim().isEmpty()) {
                Predicate descriptionPredicate = criteriaBuilder.equal(
                        criteriaBuilder.lower(root.get("status").get("description")), stateSearch.toLowerCase());
                Predicate categoryPredicate = criteriaBuilder.equal(
                        criteriaBuilder.lower(root.get("status").get("category")), stateSearch.toLowerCase());
                predicates.add(criteriaBuilder.or(descriptionPredicate, categoryPredicate));
            }


            if (countryIds!=null && !countryIds.isEmpty()) {
                if (countryIds.contains(0L)) {
                    List<String> countryCodesFromEnum = CountryCodeEnum.getAllCountriesCodes();
                    predicates.add(root.get("country").get("code").in(countryCodesFromEnum));
                } else {
                    predicates.add(root.get("country").get("id").in(countryIds));
                }
            } else if (countrySearch!=null && !countrySearch.trim().isEmpty()) {
                String searchPattern = "%" + countrySearch.toLowerCase() + "%";
                Predicate namePredicate = criteriaBuilder.like(
                        criteriaBuilder.lower(root.get("country").get("name")), searchPattern);
                Predicate codePredicate = criteriaBuilder.like(
                        criteriaBuilder.lower(root.get("country").get("code")), searchPattern);
                predicates.add(criteriaBuilder.or(namePredicate, codePredicate));
            }

            if (screenActionCode!=null && !screenActionCode.trim().isEmpty()) {
                predicates.add(criteriaBuilder.equal(root.get("screenAction").get("code"), screenActionCode));
            }

            if (UserTypeEnum.EXTERNAL.equals(userType)) {
                Predicate externalProcesses = criteriaBuilder.notEqual(root.get("type").get("id"), 900L);
                predicates.add(externalProcesses);
            }

            var subquery = query.subquery(Long.class);
            var relatedRoot = subquery.from(RelatedScheduleEntity.class);

            subquery.select(relatedRoot.get("relatedScheduleId"))
                    .where(criteriaBuilder.equal(
                            relatedRoot.get("relatedScheduleId"),
                            root.get("id")
                    ));

            predicates.add(criteriaBuilder.not(criteriaBuilder.exists(subquery)));

            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }

    public static Specification<ScheduleEntity> filterByWithDescriptionSearch(
            Long scheduleId, Long countryId,
            Long processId, String processSearch,
            Long moduleId, String moduleSearch,
            Long submoduleId, String submoduleSearch,
            Long stateId, String stateSearch,
            List<Long> countryIds, String countrySearch,
            String screenActionCode,
            String descriptionSearch,
            UserTypeEnum userType, Long userId) {

        return (root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();

            // Búsqueda por description con LIKE %texto%
            if (descriptionSearch!=null && !descriptionSearch.trim().isEmpty()) {
                String searchPattern = "%" + descriptionSearch.toLowerCase() + "%";
                predicates.add(criteriaBuilder.like(
                        criteriaBuilder.lower(root.get("description")), searchPattern));
            }

            // Filter by scheduleId
            if (scheduleId != null) {
                predicates.add(criteriaBuilder.equal(root.get("id"), scheduleId));
            }

            // Filter by countryId
            if (countryId != null) {
                predicates.add(criteriaBuilder.equal(root.get("country").get("id"), countryId));
            }

            // Filter by processId using the new ManyToOne relationship
            if (processId != null) {
                predicates.add(criteriaBuilder.equal(root.get("process").get("id"), processId));
            } else if (processSearch != null && !processSearch.trim().isEmpty()) {
                String searchPattern = "%" + processSearch.toLowerCase() + "%";
                predicates.add(criteriaBuilder.like(
                        criteriaBuilder.lower(root.get("process").get("description")), searchPattern));
            }

            if (moduleId!=null) {
                predicates.add(criteriaBuilder.equal(root.get("module").get("id"), moduleId));
            } else if (moduleSearch!=null && !moduleSearch.trim().isEmpty()) {
                String searchPattern = "%" + moduleSearch.toLowerCase() + "%";
                Predicate namePredicate = criteriaBuilder.like(
                        criteriaBuilder.lower(root.get("module").get("name")), searchPattern);
                Predicate descriptionPredicate = criteriaBuilder.like(
                        criteriaBuilder.lower(root.get("module").get("description")), searchPattern);
                predicates.add(criteriaBuilder.or(namePredicate, descriptionPredicate));
            }

            if (stateId!=null) {
                predicates.add(criteriaBuilder.equal(root.get("status").get("id"), stateId));
            } else if (stateSearch!=null && !stateSearch.trim().isEmpty()) {
                Predicate descriptionPredicate = criteriaBuilder.equal(
                        criteriaBuilder.lower(root.get("status").get("description")), stateSearch.toLowerCase());
                Predicate categoryPredicate = criteriaBuilder.equal(
                        criteriaBuilder.lower(root.get("status").get("category")), stateSearch.toLowerCase());
                predicates.add(criteriaBuilder.or(descriptionPredicate, categoryPredicate));
            }

            if (countryIds!=null && !countryIds.isEmpty()) {
                if (countryIds.contains(0L)) {
                    List<String> countryCodesFromEnum = CountryCodeEnum.getAllCountriesCodes();
                    predicates.add(root.get("country").get("code").in(countryCodesFromEnum));
                } else {
                    predicates.add(root.get("country").get("id").in(countryIds));
                }
            } else if (countrySearch!=null && !countrySearch.trim().isEmpty()) {
                String searchPattern = "%" + countrySearch.toLowerCase() + "%";
                Predicate namePredicate = criteriaBuilder.like(
                        criteriaBuilder.lower(root.get("country").get("name")), searchPattern);
                Predicate codePredicate = criteriaBuilder.like(
                        criteriaBuilder.lower(root.get("country").get("code")), searchPattern);
                predicates.add(criteriaBuilder.or(namePredicate, codePredicate));
            }

            if (screenActionCode!=null && !screenActionCode.trim().isEmpty()) {
                predicates.add(criteriaBuilder.equal(root.get("screenAction").get("code"), screenActionCode));
            }

            if (UserTypeEnum.EXTERNAL.equals(userType)) {
                Predicate externalProcesses = criteriaBuilder.notEqual(root.get("type").get("id"), 900L);
                predicates.add(externalProcesses);
            }

            var subquery = query.subquery(Long.class);
            var relatedRoot = subquery.from(RelatedScheduleEntity.class);

            subquery.select(relatedRoot.get("relatedScheduleId"))
                    .where(criteriaBuilder.equal(
                            relatedRoot.get("relatedScheduleId"),
                            root.get("id")
                    ));

            predicates.add(criteriaBuilder.not(criteriaBuilder.exists(subquery)));

            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }
}
```

## src/main/java/com/nubo/schedule/query/api/helpers/specification/SubmoduleSpecification.java

```java
package com.nubo.schedule.query.api.helpers.specification;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.jpa.domain.Specification;

import com.nubo.schedule.query.api.models.entity.SubmoduleEntity;

import jakarta.persistence.criteria.Predicate;

public class SubmoduleSpecification {

    public static Specification<SubmoduleEntity> filterBy(Long moduleId, String description) {
        return (root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();

            if (moduleId!=null) {
                predicates.add(criteriaBuilder.equal(root.get("module").get("id"), moduleId));
            }

            if (description!=null && !description.trim().isEmpty()) {
                Predicate namePredicate = criteriaBuilder.like(
                        criteriaBuilder.lower(root.get("name")),
                        criteriaBuilder.lower(criteriaBuilder.literal("%" + description + "%"))
                );
                Predicate descriptionPredicate = criteriaBuilder.like(
                        criteriaBuilder.lower(root.get("description")),
                        criteriaBuilder.lower(criteriaBuilder.literal("%" + description + "%"))
                );
                predicates.add(criteriaBuilder.or(namePredicate, descriptionPredicate));
            }

            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }
}
```

## src/main/java/com/nubo/schedule/query/api/models/dto/request/ParamsPageInDto.java

```java
package com.nubo.schedule.query.api.models.dto.request;

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

## src/main/java/com/nubo/schedule/query/api/models/dto/response/CountryDto.java

```java
package com.nubo.schedule.query.api.models.dto.response;

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
public class CountryDto {

    private Long id;
    private String code;
    private String name;
    private String timeZone;
}
```

## src/main/java/com/nubo/schedule/query/api/models/dto/response/FrequencyDto.java

```java
package com.nubo.schedule.query.api.models.dto.response;

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
public class FrequencyDto {

    private Integer id;
    private String description;

}
```

## src/main/java/com/nubo/schedule/query/api/models/dto/response/MicroserviceDto.java

```java
package com.nubo.schedule.query.api.models.dto.response;

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
public class MicroserviceDto {

    private Integer id;
    private String name;

}
```

## src/main/java/com/nubo/schedule/query/api/models/dto/response/ModuleDto.java

```java
package com.nubo.schedule.query.api.models.dto.response;

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
public class ModuleDto {

    private Integer id;
    private Integer categoryId;
    private String name;
    private String description;
    private Boolean collapsible;
    private Integer orderItem;
    private StatusDto status;
    private Boolean moduleDeleted;

}
```

## src/main/java/com/nubo/schedule/query/api/models/dto/response/PageResponseDto.java

```java
package com.nubo.schedule.query.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.ALWAYS)
public class PageResponseDto<T> {

    private List<T> content;

    private Integer pageSize;

    private Integer pageNumber;

    private Long totalElements;

    private Integer totalPages;
}

```

## src/main/java/com/nubo/schedule/query/api/models/dto/response/PageResponseOutDto.java

```java
package com.nubo.schedule.query.api.models.dto.response;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class PageResponseOutDto<T> {
    private List<T> content;
    private int pageNumber;
    private int pageSize;
    private long totalElements;
    private int totalPages;
}
```

## src/main/java/com/nubo/schedule/query/api/models/dto/response/ParticipantDto.java

```java
package com.nubo.schedule.query.api.models.dto.response;

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
public class ParticipantDto {

    private Long id;
    private String code;
    private String documentNumber;
    private String name;
    private String shortName;
    private String mnemonic;
    private LocalDate registrationDate;
    private String taxCode;
    private String mainAddress;
    private String webPage;
    private String phoneNumber;
    private String nitClearingHouse;
    private String typeEntity;
    private String marginAccount;
    private String masterAccount;
    private String directAllocation;
    private String marketMaker;
    private Boolean enabled;
    private Boolean custodian;

}
```

## src/main/java/com/nubo/schedule/query/api/models/dto/response/ProcessDto.java

```java
package com.nubo.schedule.query.api.models.dto.response;

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
public class ProcessDto {

    private Integer id;
    private String description;

}
```

## src/main/java/com/nubo/schedule/query/api/models/dto/response/RejectionReasonDto.java

```java
package com.nubo.schedule.query.api.models.dto.response;

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
public class RejectionReasonDto {

    private Long id;
    private String reason;
    private String category;
}
```

## src/main/java/com/nubo/schedule/query/api/models/dto/response/RelatedScheduleDto.java

```java
package com.nubo.schedule.query.api.models.dto.response;

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
public class RelatedScheduleDto {

    private Long scheduleId;
    private Long relatedScheduleId;
    private Integer relationType;
    private Boolean dependence;
    private CountryDto country;
    private String lastModifyUser;
    private String lastModifyApplication;
    private String lastModifyDate;
    private String lastModifyIp;

}
```

## src/main/java/com/nubo/schedule/query/api/models/dto/response/ScheduleAssociationDto.java

```java
package com.nubo.schedule.query.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class ScheduleAssociationDto {

    private Long id;

    private String description;

    private ScheduleDto schedule;

    private LocalTime startTime;

    private LocalTime endTime;

    private CountryDto country;

}
```

## src/main/java/com/nubo/schedule/query/api/models/dto/response/ScheduleDto.java

```java
package com.nubo.schedule.query.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class ScheduleDto {

    private Long id;
    private String description;
    private LocalTime openingTime;
    private LocalTime closingTime;
    private TypeDto type;
    private LocalDate startDate;
    private LocalDate endDate;
    private CountryDto country;
    private ModuleDto module;
    private SubmoduleDto submodule;
    private Integer frequency;
    private StatusDto status;
    private Boolean internal;
    private UserNuboDto userNubo;
    private String lastModifyUser;
    private String lastModifyApplication;
    private LocalDateTime lastModifyDate;
    private String lastModifyIp;
    private String dailyStatus;
    private Boolean automatic;
    private ProcessDto process;
    private List<ScreenActionDto> screenActions;
    private ScreenActionDto screenAction;

}
```

## src/main/java/com/nubo/schedule/query/api/models/dto/response/ScheduleLogDto.java

```java
package com.nubo.schedule.query.api.models.dto.response;

import java.time.OffsetDateTime;

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
public class ScheduleLogDto {

    private Long scheduleLogId;
    private Long scheduleId;
    private ScheduleDto dataAfter;
    private OffsetDateTime time;
    private String lastModifyUser;
    private String lastModifyApplication;
    private OffsetDateTime lastModifyDate;
    private String lastModifyIp;

}
```

## src/main/java/com/nubo/schedule/query/api/models/dto/response/ScheduleStatusHistoryDto.java

```java
package com.nubo.schedule.query.api.models.dto.response;

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
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class ScheduleStatusHistoryDto {

    private Long scheduleId;
    private LocalDateTime time;
    private String detail;

}
```

## src/main/java/com/nubo/schedule/query/api/models/dto/response/ScheduleSummaryDto.java

```java
package com.nubo.schedule.query.api.models.dto.response;

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
public class ScheduleSummaryDto {

    private Long id;
    private String description;

}

```

## src/main/java/com/nubo/schedule/query/api/models/dto/response/ScreenActionDto.java

```java
package com.nubo.schedule.query.api.models.dto.response;

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
public class ScreenActionDto {

    private Long id;

    private String code;

    private String description;

}

```

## src/main/java/com/nubo/schedule/query/api/models/dto/response/ScreenDto.java

```java
package com.nubo.schedule.query.api.models.dto.response;

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
public class ScreenDto {

    private Long id;
    private String code;
    private String description;
    private Integer categoryId;
    private Integer moduleId;
    private Integer submoduleId;

}
```

## src/main/java/com/nubo/schedule/query/api/models/dto/response/StatusDto.java

```java
package com.nubo.schedule.query.api.models.dto.response;

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
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class StatusDto {

    private Long id;
    private String description;
    private String category;
    private String lastModifyUser;
    private String lastModifyApplication;
    private LocalDateTime lastModifyDate;
    private String lastModifyIp;

}
```

## src/main/java/com/nubo/schedule/query/api/models/dto/response/SubmoduleDto.java

```java
package com.nubo.schedule.query.api.models.dto.response;

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
public class SubmoduleDto {

    private Integer id;
    private String description;
    private String name;
    private Boolean collapsible;
    private Integer orderItem;
    private StatusDto status;
    private ModuleDto module;

}
```

## src/main/java/com/nubo/schedule/query/api/models/dto/response/TimeZoneDto.java

```java
package com.nubo.schedule.query.api.models.dto.response;

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
public class TimeZoneDto {

    private String timeZone;

}
```

## src/main/java/com/nubo/schedule/query/api/models/dto/response/TypeDto.java

```java
package com.nubo.schedule.query.api.models.dto.response;

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
public class TypeDto {

    private Long id;
    private String description;
    private String category;
}
```

## src/main/java/com/nubo/schedule/query/api/models/dto/response/UserNuboDto.java

```java
package com.nubo.schedule.query.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.nubo.schedule.query.api.models.enums.UserTypeEnum;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class UserNuboDto {

    private Long id;
    private String userName;
    private String firstName;
    private String lastName;
    private ParticipantDto participant;
    private UserTypeEnum userType;
    private Boolean previousSession;

}
```

## src/main/java/com/nubo/schedule/query/api/models/entity/CountryEntity.java

```java
package com.nubo.schedule.query.api.models.entity;

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

## src/main/java/com/nubo/schedule/query/api/models/entity/CurrencyEntity.java

```java
package com.nubo.schedule.query.api.models.entity;

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

## src/main/java/com/nubo/schedule/query/api/models/entity/DepartmentEntity.java

```java
package com.nubo.schedule.query.api.models.entity;

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

## src/main/java/com/nubo/schedule/query/api/models/entity/FrequencyEntity.java

```java
package com.nubo.schedule.query.api.models.entity;

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
@Table(name = "\"FREQUENCY\"", schema = "\"NUANBODB\"")
public class FrequencyEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"FREQUENCY_ID\"", nullable = false)
    private Integer id;

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

## src/main/java/com/nubo/schedule/query/api/models/entity/GicsEntity.java

```java
package com.nubo.schedule.query.api.models.entity;

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

## src/main/java/com/nubo/schedule/query/api/models/entity/IdentificationTypeEntity.java

```java
package com.nubo.schedule.query.api.models.entity;

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

## src/main/java/com/nubo/schedule/query/api/models/entity/MicroserviceEntity.java

```java
package com.nubo.schedule.query.api.models.entity;

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
@Table(name = "\"MICROSERVICE\"", schema = "\"NUANBODB\"")
public class MicroserviceEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"MICROSERVICE_ID\"", nullable = false)
    private Integer id;

    @Column(name = "\"NAME\"", length = 200, nullable = false)
    private String name;

    @ManyToOne
    @JoinColumn(name = "\"SUBMODULE_ID\"", nullable = false)
    private SubmoduleEntity submodule;

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

## src/main/java/com/nubo/schedule/query/api/models/entity/ModuleEntity.java

```java
package com.nubo.schedule.query.api.models.entity;

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
@Table(name = "\"MODULE\"", schema = "\"NUANBODB\"")
public class ModuleEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"MODULE_ID\"", nullable = false)
    private Integer id;

    @Column(name = "\"CATEGORY_ID\"", nullable = false)
    private Integer categoryId;

    @Column(name = "\"NAME\"", length = 80)
    private String name;

    @Column(name = "\"DESCRIPTION\"", length = 200, nullable = false)
    private String description;

    @Column(name = "\"COLLAPSIBLE\"")
    private Boolean collapsible;

    @Column(name = "\"ORDER_ITEM\"", nullable = false)
    private Integer orderItem;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"", nullable = false)
    private StatusEntity status;

    @Column(name = "\"MODULE_DELETED\"")
    private Boolean moduleDeleted;

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

## src/main/java/com/nubo/schedule/query/api/models/entity/ParticipantEntity.java

```java
package com.nubo.schedule.query.api.models.entity;

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

## src/main/java/com/nubo/schedule/query/api/models/entity/ProcessEntity.java

```java
package com.nubo.schedule.query.api.models.entity;

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
@Table(name = "\"PROCESS\"", schema = "\"NUANBODB\"")
public class ProcessEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"PROCESS_ID\"", nullable = false)
    private Integer id;

    @Column(name = "\"DESCRIPTION\"", length = 200, nullable = false)
    private String description;

    @ManyToOne
    @JoinColumn(name = "\"MICROSERVICE_ID\"", nullable = false)
    private MicroserviceEntity microservice;

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

## src/main/java/com/nubo/schedule/query/api/models/entity/RejectionReasonEntity.java

```java
package com.nubo.schedule.query.api.models.entity;

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
@Table(name = "\"REJECTION_REASON\"", schema = "\"NUANBODB\"")
public class RejectionReasonEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"REJECTION_REASON_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"REASON\"", length = 255, nullable = false)
    private String reason;

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

## src/main/java/com/nubo/schedule/query/api/models/entity/RelatedScheduleEntity.java

```java
package com.nubo.schedule.query.api.models.entity;

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

import java.time.OffsetDateTime;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"RELATED_SCHEDULE\"", schema = "\"NUANBODB\"")
public class RelatedScheduleEntity {

    @Id
    @Column(name = "\"RELATED_SCHEDULE_ID\"", nullable = false)
    private Long relatedScheduleId;

    @ManyToOne
    @JoinColumn(name = "\"SCHEDULE_ID\"", nullable = false)
    private ScheduleEntity schedule;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 250, nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private OffsetDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50, nullable = false)
    private String lastModifyIp;

}

```

## src/main/java/com/nubo/schedule/query/api/models/entity/ScheduleEntity.java

```java
package com.nubo.schedule.query.api.models.entity;

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
import java.time.LocalTime;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"SCHEDULE\"", schema = "\"NUANBODB\"")
public class ScheduleEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"SCHEDULE_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"DESCRIPTION\"", length = 255)
    private String description;

    @Column(name = "\"OPENING_TIME\"")
    private LocalTime openingTime;

    @Column(name = "\"CLOSING_TIME\"")
    private LocalTime closingTime;

    @ManyToOne
    @JoinColumn(name = "\"TYPE_ID\"")
    private TypeEntity type;

    @Column(name = "\"START_DATE\"")
    private LocalDate startDate;

    @Column(name = "\"END_DATE\"")
    private LocalDate endDate;

    @ManyToOne
    @JoinColumn(name = "\"COUNTRY_ID\"")
    private CountryEntity country;

    @ManyToOne
    @JoinColumn(name = "\"MODULE_ID\"")
    private ModuleEntity module;

    @ManyToOne
    @JoinColumn(name = "\"SUBMODULE_ID\"")
    private SubmoduleEntity submodule;

    @Column(name = "\"FREQUENCY\"")
    private Integer frequency;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"")
    private StatusEntity status;

    @Column(name = "\"INTERNAL\"")
    private Boolean internal;

    @Column(name = "\"AUTOMATIC\"")
    private Boolean automatic;

    @ManyToOne
    @JoinColumn(name = "\"USER_NUBO_ID\"")
    private UserNuboEntity userNubo;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 250, nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50, nullable = false)
    private String lastModifyIp;

    @ManyToOne
    @JoinColumn(name = "\"PROCESS_ID\"")
    private ProcessEntity process;

    @ManyToOne
    @JoinColumn(name = "\"SCREEN_ACTION_ID\"")
    private ScreenActionEntity screenAction;

}
```

## src/main/java/com/nubo/schedule/query/api/models/entity/ScheduleLogEntity.java

```java
package com.nubo.schedule.query.api.models.entity;

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

import java.time.OffsetDateTime;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"SCHEDULE_LOG\"", schema = "\"NUANBODB\"")
public class ScheduleLogEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"SCHEDULE_LOG_ID\"", nullable = false)
    private Long scheduleLogId;

    @Column(name = "\"SCHEDULE_ID\"", nullable = false)
    private Long scheduleId;

    @Column(name = "\"DATA_BEFORE\"", columnDefinition = "jsonb")
    private String dataBefore;

    @Column(name = "\"DATA_AFTER\"", columnDefinition = "jsonb")
    private String dataAfter;

    @Column(name = "\"TIME\"", nullable = false)
    private OffsetDateTime time;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 250, nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private OffsetDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50, nullable = false)
    private String lastModifyIp;

    @ManyToOne
    @JoinColumn(name = "\"SCHEDULE_ID\"", insertable = false, updatable = false)
    private ScheduleEntity schedule;

}
```

## src/main/java/com/nubo/schedule/query/api/models/entity/ScheduleStatusHistoryEntity.java

```java
package com.nubo.schedule.query.api.models.entity;

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
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"SCHEDULE_STATUS_HISTORY\"", schema = "\"NUANBODB\"")
@IdClass(ScheduleStatusHistoryEntity.ScheduleStatusHistoryId.class)
public class ScheduleStatusHistoryEntity {

    @Id
    @Column(name = "\"SCHEDULE_ID\"", nullable = false)
    private Long scheduleId;

    @Id
    @Column(name = "\"TIME\"", nullable = false)
    private LocalDateTime time;

    @Column(name = "\"DETAIL\"", columnDefinition = "TEXT")
    private String detail;

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

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class ScheduleStatusHistoryId implements Serializable {
        private Long scheduleId;
        private LocalDateTime time;
    }
}
```

## src/main/java/com/nubo/schedule/query/api/models/entity/ScreenActionEntity.java

```java
package com.nubo.schedule.query.api.models.entity;

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
@Table(name = "\"SCREEN_ACTION\"", schema = "\"NUANBODB\"")
public class ScreenActionEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"SCREEN_ACTION_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"CODE\"", length = 5)
    private String code;

    @Column(name = "\"DESCRIPTION\"", length = 80)
    private String description;

    @Column(name = "\"ENABLED\"")
    private Boolean enabled;

    @ManyToOne
    @JoinColumn(name = "\"SCREEN_ID\"")
    private ScreenEntity screen;

    @Column(name = "\"PATH\"", length = 500)
    private String path;

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

## src/main/java/com/nubo/schedule/query/api/models/entity/ScreenEntity.java

```java
package com.nubo.schedule.query.api.models.entity;

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
@Table(name = "\"SCREEN\"", schema = "\"NUANBODB\"")
public class ScreenEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"SCREEN_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"CODE\"", length = 5)
    private String code;

    @Column(name = "\"DESCRIPTION\"", length = 80)
    private String description;

    @Column(name = "\"CATEGORY_ID\"")
    private Integer categoryId;

    @Column(name = "\"MODULE_ID\"")
    private Integer moduleId;

    @Column(name = "\"SUBMODULE_ID\"")
    private Integer submoduleId;

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

## src/main/java/com/nubo/schedule/query/api/models/entity/StatusEntity.java

```java
package com.nubo.schedule.query.api.models.entity;

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

## src/main/java/com/nubo/schedule/query/api/models/entity/SubmoduleEntity.java

```java
package com.nubo.schedule.query.api.models.entity;

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
@Table(name = "\"SUBMODULE\"", schema = "\"NUANBODB\"")
public class SubmoduleEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"SUBMODULE_ID\"", nullable = false)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "\"MODULE_ID\"", nullable = false)
    private ModuleEntity module;

    @Column(name = "\"DESCRIPTION\"", length = 200, nullable = false)
    private String description;

    @Column(name = "\"NAME\"", length = 80)
    private String name;

    @Column(name = "\"COLLAPSIBLE\"")
    private Boolean collapsible;

    @Column(name = "\"ORDER_ITEM\"")
    private Integer orderItem;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"", nullable = false)
    private StatusEntity status;

    @Column(name = "\"SUBMODULE_DELETED\"")
    private Boolean submoduleDeleted;

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

## src/main/java/com/nubo/schedule/query/api/models/entity/TaxStatusEntity.java

```java
package com.nubo.schedule.query.api.models.entity;

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

## src/main/java/com/nubo/schedule/query/api/models/entity/TypeEntity.java

```java
package com.nubo.schedule.query.api.models.entity;

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

## src/main/java/com/nubo/schedule/query/api/models/entity/UserNuboEntity.java

```java
package com.nubo.schedule.query.api.models.entity;

import com.nubo.schedule.query.api.models.enums.UserTypeEnum;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
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

    @Column(name = "\"FIRST_NAME\"", length = 100)
    private String firstName;

    @Column(name = "\"LAST_NAME\"", length = 100)
    private String lastName;

    @ManyToOne
    @JoinColumn(name = "\"PARTICIPANT_ID\"", nullable = false)
    private ParticipantEntity participant;

    @Column(name = "\"USER_TYPE\"", length = 20, nullable = false)
    @Enumerated(EnumType.STRING)
    private UserTypeEnum userType;

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

## src/main/java/com/nubo/schedule/query/api/models/enums/CountryCodeEnum.java

```java
package com.nubo.schedule.query.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Arrays;
import java.util.List;

@Getter
@RequiredArgsConstructor
public enum CountryCodeEnum {

    CHILE("CL"),
    COLOMBIA("CO"),
    PERU("PE");

    private final String code;

    public static List<String> getAllCountriesCodes() {
        return Arrays.stream(CountryCodeEnum.values())
                .map(CountryCodeEnum::getCode)
                .toList();
    }
}
```

## src/main/java/com/nubo/schedule/query/api/models/enums/PropertiesEnum.java

```java
package com.nubo.schedule.query.api.models.enums;

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
            return status!=null ? status.getValue():null;
        }

        @Override
        public PropertiesEnum convertToEntityAttribute(String dbData) {
            return dbData!=null ? PropertiesEnum.fromValue(dbData):null;
        }
    }

}

```

## src/main/java/com/nubo/schedule/query/api/models/enums/UserTypeEnum.java

```java
package com.nubo.schedule.query.api.models.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Arrays;

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
                .filter(status -> status.value.equalsIgnoreCase(value))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Unknown value: " + value));
    }

    @Converter(autoApply = true)
    public static class UserTypeEnumConverter implements AttributeConverter<UserTypeEnum, String> {

        @Override
        public String convertToDatabaseColumn(UserTypeEnum status) {
            return status!=null ? status.getValue():null;
        }

        @Override
        public UserTypeEnum convertToEntityAttribute(String dbData) {
            return dbData!=null ? UserTypeEnum.fromValue(dbData):null;
        }
    }

}

```

## src/main/java/com/nubo/schedule/query/api/models/enums/VersionApiEnum.java

```java
package com.nubo.schedule.query.api.models.enums;

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

## src/main/java/com/nubo/schedule/query/api/repository/CountryRepository.java

```java
package com.nubo.schedule.query.api.repository;

import com.nubo.schedule.query.api.models.entity.CountryEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CountryRepository extends JpaRepository<CountryEntity, Long> {

    List<CountryEntity> findByCodeIn(List<String> codes);
}
```

## src/main/java/com/nubo/schedule/query/api/repository/FrequencyRepository.java

```java
package com.nubo.schedule.query.api.repository;

import com.nubo.schedule.query.api.models.entity.FrequencyEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FrequencyRepository extends JpaRepository<FrequencyEntity, Long> {
}
```

## src/main/java/com/nubo/schedule/query/api/repository/MicroserviceRepository.java

```java
package com.nubo.schedule.query.api.repository;

import com.nubo.schedule.query.api.models.entity.MicroserviceEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface MicroserviceRepository extends JpaRepository<MicroserviceEntity, Long>, JpaSpecificationExecutor<MicroserviceEntity> {
}
```

## src/main/java/com/nubo/schedule/query/api/repository/ModuleRepository.java

```java
package com.nubo.schedule.query.api.repository;

import com.nubo.schedule.query.api.models.entity.ModuleEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface ModuleRepository extends JpaRepository<ModuleEntity, Long>, JpaSpecificationExecutor<ModuleEntity> {

}
```

## src/main/java/com/nubo/schedule/query/api/repository/ParticipantRepository.java

```java
package com.nubo.schedule.query.api.repository;

import com.nubo.schedule.query.api.models.entity.ParticipantEntity;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ParticipantRepository extends JpaRepository<ParticipantEntity, Long> {
}

```

## src/main/java/com/nubo/schedule/query/api/repository/ProcessRepository.java

```java
package com.nubo.schedule.query.api.repository;

import com.nubo.schedule.query.api.models.entity.ProcessEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface ProcessRepository extends JpaRepository<ProcessEntity, Long>, JpaSpecificationExecutor<ProcessEntity> {

}
```

## src/main/java/com/nubo/schedule/query/api/repository/RejectionReasonRepository.java

```java
package com.nubo.schedule.query.api.repository;

import com.nubo.schedule.query.api.models.entity.RejectionReasonEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface RejectionReasonRepository extends JpaRepository<RejectionReasonEntity, Long>, JpaSpecificationExecutor<RejectionReasonEntity> {
}
```

## src/main/java/com/nubo/schedule/query/api/repository/RelatedScheduleRepository.java

```java
package com.nubo.schedule.query.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.nubo.schedule.query.api.models.entity.RelatedScheduleEntity;

public interface RelatedScheduleRepository extends JpaRepository<RelatedScheduleEntity, Long>, JpaSpecificationExecutor<RelatedScheduleEntity> {

}
```

## src/main/java/com/nubo/schedule/query/api/repository/ScheduleLogRepository.java

```java
package com.nubo.schedule.query.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.nubo.schedule.query.api.models.entity.ScheduleLogEntity;

public interface ScheduleLogRepository extends JpaRepository<ScheduleLogEntity, Long>, JpaSpecificationExecutor<ScheduleLogEntity> {

}
```

## src/main/java/com/nubo/schedule/query/api/repository/ScheduleRepository.java

```java
package com.nubo.schedule.query.api.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.nubo.schedule.query.api.models.entity.ScheduleEntity;

public interface ScheduleRepository extends JpaRepository<ScheduleEntity, Long>, JpaSpecificationExecutor<ScheduleEntity> {

    List<ScheduleEntity> findByUserNuboId(Long userNuboId);

    @Query("SELECT s FROM ScheduleEntity s WHERE s.process.id = :processId")
    List<ScheduleEntity> findByProcessId(@Param("processId") Long processId);

    @Query("SELECT s FROM ScheduleEntity s WHERE s.screenAction.code = :screenActionCode")
    List<ScheduleEntity> findByScreenActionCode(@Param("screenActionCode") String screenActionCode);

    Page<ScheduleEntity> findByCountry_CodeIn(List<String> countryCodes, Pageable page);

    Page<ScheduleEntity> findByCountry_CodeInAndScreenAction_CodeIn(List<String> countryCodes, List<String> screenActionCodes, Pageable page);

    Page<ScheduleEntity> findByCountry_CodeInAndProcessIdIn(List<String> countryCodes, List<Long> processIds, Pageable page);
}

```

## src/main/java/com/nubo/schedule/query/api/repository/ScheduleStatusHistoryRepository.java

```java
package com.nubo.schedule.query.api.repository;

import com.nubo.schedule.query.api.models.entity.ScheduleStatusHistoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ScheduleStatusHistoryRepository extends JpaRepository<ScheduleStatusHistoryEntity, ScheduleStatusHistoryEntity.ScheduleStatusHistoryId> {

    @Query("SELECT ssh FROM ScheduleStatusHistoryEntity ssh WHERE ssh.scheduleId IN " +
            "(SELECT s.id FROM ScheduleEntity s WHERE s.userNubo.id = :userNuboId)")
    List<ScheduleStatusHistoryEntity> findByScheduleUserNuboId(@Param("userNuboId") Long userNuboId);

    List<ScheduleStatusHistoryEntity> findByScheduleIdOrderByTimeDesc(Long scheduleId);
}
```

## src/main/java/com/nubo/schedule/query/api/repository/ScreenActionRepository.java

```java
package com.nubo.schedule.query.api.repository;

import com.nubo.schedule.query.api.models.entity.ScreenActionEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface ScreenActionRepository extends JpaRepository<ScreenActionEntity, Long>, JpaSpecificationExecutor<ScreenActionEntity> {

    List<ScreenActionEntity> findByCode(String code);
}

```

## src/main/java/com/nubo/schedule/query/api/repository/ScreenRepository.java

```java
package com.nubo.schedule.query.api.repository;

import com.nubo.schedule.query.api.models.entity.ScreenEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ScreenRepository extends JpaRepository<ScreenEntity, Long> {
}
```

## src/main/java/com/nubo/schedule/query/api/repository/StatusRepository.java

```java
package com.nubo.schedule.query.api.repository;

import com.nubo.schedule.query.api.models.entity.StatusEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StatusRepository extends JpaRepository<StatusEntity, Long> {

    List<StatusEntity> findByCategory(String category);
}
```

## src/main/java/com/nubo/schedule/query/api/repository/SubmoduleRepository.java

```java
package com.nubo.schedule.query.api.repository;

import com.nubo.schedule.query.api.models.entity.SubmoduleEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface SubmoduleRepository extends JpaRepository<SubmoduleEntity, Long>, JpaSpecificationExecutor<SubmoduleEntity> {

}
```

## src/main/java/com/nubo/schedule/query/api/repository/TypeRepository.java

```java
package com.nubo.schedule.query.api.repository;

import com.nubo.schedule.query.api.models.entity.TypeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TypeRepository extends JpaRepository<TypeEntity, Long> {

    List<TypeEntity> findByCategory(String category);
}
```

## src/main/java/com/nubo/schedule/query/api/repository/UserNuboRepository.java

```java
package com.nubo.schedule.query.api.repository;

import com.nubo.schedule.query.api.models.entity.UserNuboEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface UserNuboRepository extends JpaRepository<UserNuboEntity, Long> {

    @Query("SELECT u FROM UserNuboEntity u " +
            "WHERE u.userName = :userName")
    Optional<UserNuboEntity> findByUserName(String userName);
}
```

## src/main/java/com/nubo/schedule/query/api/service/CountryService.java

```java
package com.nubo.schedule.query.api.service;

import com.nubo.schedule.query.api.models.dto.response.CountryDto;
import com.nubo.schedule.query.api.models.dto.response.PageResponseOutDto;
import com.nubo.schedule.query.api.models.dto.response.TimeZoneDto;

public interface CountryService {

    PageResponseOutDto<CountryDto> getByCountryCodes(int page, int size, String sort, String order, boolean all);

    PageResponseOutDto<TimeZoneDto> getTimeZoneByCountryId(Long countryId, int page, int size, String sort, String order, boolean all);

}
```

## src/main/java/com/nubo/schedule/query/api/service/FrequencyService.java

```java
package com.nubo.schedule.query.api.service;

import com.nubo.schedule.query.api.models.dto.response.FrequencyDto;
import com.nubo.schedule.query.api.models.dto.response.PageResponseOutDto;

public interface FrequencyService {

    PageResponseOutDto<FrequencyDto> getAllByUser(Long userId, int page, int size, String sort, String order, boolean all);

}
```

## src/main/java/com/nubo/schedule/query/api/service/MicroserviceService.java

```java
package com.nubo.schedule.query.api.service;

import com.nubo.schedule.query.api.models.dto.response.MicroserviceDto;
import com.nubo.schedule.query.api.models.dto.response.PageResponseOutDto;

public interface MicroserviceService {

    PageResponseOutDto<MicroserviceDto> getAllByUser(Long userId, int page, int size, String sort, String order, boolean all);

    PageResponseOutDto<MicroserviceDto> getBySubmoduleIdAndName(Integer submoduleId, String name, int page, int size, String sort, String order, boolean all);

}
```

## src/main/java/com/nubo/schedule/query/api/service/ModuleService.java

```java
package com.nubo.schedule.query.api.service;

import com.nubo.schedule.query.api.models.dto.response.ModuleDto;
import com.nubo.schedule.query.api.models.dto.response.PageResponseOutDto;

public interface ModuleService {

    PageResponseOutDto<ModuleDto> getAllByUser(Long userId, int page, int size, String sort, String order, boolean all);

    PageResponseOutDto<ModuleDto> searchModules(String name, String description, Integer categoryId, Integer id, int page, int size, String sort, String order, boolean all);

}
```

## src/main/java/com/nubo/schedule/query/api/service/ProcessService.java

```java
package com.nubo.schedule.query.api.service;

import com.nubo.schedule.query.api.models.dto.response.ProcessDto;
import com.nubo.schedule.query.api.models.dto.response.PageResponseOutDto;

public interface ProcessService {

    PageResponseOutDto<ProcessDto> getAllByUser(Long userId, int page, int size, String sort, String order, boolean all);

    PageResponseOutDto<ProcessDto> getAllByProcessWithFilters(Long processId, String description, int page, int size, String sort, String order, boolean all);

    PageResponseOutDto<ProcessDto> getByMicroserviceIdAndDescription(Integer microserviceId, String description, int page, int size, String sort, String order, boolean all);

}
```

## src/main/java/com/nubo/schedule/query/api/service/RejectionReasonService.java

```java
package com.nubo.schedule.query.api.service;

import com.nubo.schedule.query.api.models.dto.response.RejectionReasonDto;
import com.nubo.schedule.query.api.models.dto.response.PageResponseOutDto;

public interface RejectionReasonService {

    PageResponseOutDto<RejectionReasonDto> getByCategoryAndReason(String category, String reason, int page, int size, String sort, String order, boolean all);

}
```

## src/main/java/com/nubo/schedule/query/api/service/RelatedScheduleService.java

```java
package com.nubo.schedule.query.api.service;

import com.nubo.schedule.query.api.models.dto.response.PageResponseOutDto;
import com.nubo.schedule.query.api.models.dto.response.ScheduleAssociationDto;

public interface RelatedScheduleService {

    PageResponseOutDto<ScheduleAssociationDto> getAllByScheduleId(Long scheduleId, int page, int size, String sort, String order, boolean all);

}
```

## src/main/java/com/nubo/schedule/query/api/service/ScheduleLogService.java

```java
package com.nubo.schedule.query.api.service;

import com.nubo.schedule.query.api.models.dto.response.PageResponseOutDto;
import com.nubo.schedule.query.api.models.dto.response.ScheduleLogDto;

public interface ScheduleLogService {

    PageResponseOutDto<ScheduleLogDto> getAllByScheduleId(Long scheduleId, int page, int size, String sort, String order, boolean all);

}
```

## src/main/java/com/nubo/schedule/query/api/service/ScheduleService.java

```java
package com.nubo.schedule.query.api.service;

import java.util.List;

import com.nubo.schedule.query.api.models.dto.response.PageResponseOutDto;
import com.nubo.schedule.query.api.models.dto.response.ScheduleDto;
import com.nubo.schedule.query.api.models.dto.response.ScheduleSummaryDto;

public interface ScheduleService {

    PageResponseOutDto<ScheduleDto> getAllByUser(Long userId);
    
    PageResponseOutDto<ScheduleDto> getAllByUser(Long userId, int page, int size, String sort, String order, boolean all);

    PageResponseOutDto<ScheduleDto> getAllSchedulesWithoutUser(
            List<String> countryCodes,
            List<String> screenActionCodes,
            List<Long> processIds,
            boolean extendClosingTime,
            int page, int size, String sort, String order);

    PageResponseOutDto<ScheduleDto> getAllSchedulesWithFilters(
            Long scheduleId, Long countryId,
            Long processId, String processSearch,
            Long moduleId, String moduleSearch,
            Long submoduleId, String submoduleSearch,
            Long stateId, String stateSearch,
            List<Long> countryIds, String countrySearch,
            String screenActionCode,
            Long userId,
            int page, int size, String sort, String order, boolean all);

    PageResponseOutDto<ScheduleDto> getAllSchedulesWithFiltersAndDescription(
            Long scheduleId, Long countryId,
            Long processId, String processSearch,
            Long moduleId, String moduleSearch,
            Long submoduleId, String submoduleSearch,
            Long stateId, String stateSearch,
            List<Long> countryIds, String countrySearch,
            String screenActionCode,
            String descriptionSearch,
            Long userId,
            int page, int size, String sort, String order, boolean all);

    PageResponseOutDto<ScheduleSummaryDto> getAllSchedulesSummaryWithFilters(
            Long scheduleId, Long countryId,
            Long processId, String processSearch,
            Long moduleId, String moduleSearch,
            Long submoduleId, String submoduleSearch,
            Long stateId, String stateSearch,
            List<Long> countryIds, String countrySearch,
            String screenActionCode,
            String descriptionSearch,
            Long userId,
            int page, int size, String sort, String order, boolean all);

    ScheduleDto getScheduleById(Long scheduleId);

    PageResponseOutDto<ScheduleDto> getSchedulesByScreenActionCode(String screenActionCode, int page, int size, String sort, String order, boolean all);
}
```

## src/main/java/com/nubo/schedule/query/api/service/ScheduleStatusHistoryService.java

```java
package com.nubo.schedule.query.api.service;

import com.nubo.schedule.query.api.models.dto.response.ScheduleStatusHistoryDto;
import com.nubo.schedule.query.api.models.dto.response.PageResponseOutDto;

public interface ScheduleStatusHistoryService {

    PageResponseOutDto<ScheduleStatusHistoryDto> getAllByUser(Long userId, int page, int size, String sort, String order, boolean all);

    PageResponseOutDto<ScheduleStatusHistoryDto> getByScheduleId(Long scheduleId, Long userId, int page, int size, String sort, String order, boolean all);

}
```

## src/main/java/com/nubo/schedule/query/api/service/ScreenActionService.java

```java
package com.nubo.schedule.query.api.service;

import com.nubo.schedule.query.api.models.dto.request.ParamsPageInDto;
import com.nubo.schedule.query.api.models.dto.response.PageResponseDto;
import com.nubo.schedule.query.api.models.dto.response.ScreenActionDto;

public interface ScreenActionService {

    PageResponseDto<ScreenActionDto> getScreenActions(ParamsPageInDto paramsPageInDto, Integer moduleId, Integer submoduleId);
}

```

## src/main/java/com/nubo/schedule/query/api/service/ScreenService.java

```java
package com.nubo.schedule.query.api.service;

import com.nubo.schedule.query.api.models.dto.response.ScreenDto;
import com.nubo.schedule.query.api.models.dto.response.PageResponseOutDto;

public interface ScreenService {

    PageResponseOutDto<ScreenDto> getAllByUser(Long userId, int page, int size, String sort, String order, boolean all);

}
```

## src/main/java/com/nubo/schedule/query/api/service/StatusService.java

```java
package com.nubo.schedule.query.api.service;

import com.nubo.schedule.query.api.models.dto.response.StatusDto;
import com.nubo.schedule.query.api.models.dto.response.PageResponseOutDto;

public interface StatusService {

    PageResponseOutDto<StatusDto> getByCategory(String category, int page, int size, String sort, String order, boolean all);

}
```

## src/main/java/com/nubo/schedule/query/api/service/SubmoduleService.java

```java
package com.nubo.schedule.query.api.service;

import com.nubo.schedule.query.api.models.dto.response.PageResponseOutDto;
import com.nubo.schedule.query.api.models.dto.response.SubmoduleDto;

public interface SubmoduleService {

    PageResponseOutDto<SubmoduleDto> getAllByUser(Long userId, int page, int size, String sort, String order, boolean all);

    PageResponseOutDto<SubmoduleDto> getAllByModuleWithFilters(Long moduleId, String description, int page, int size, String sort, String order, boolean all);

}
```

## src/main/java/com/nubo/schedule/query/api/service/TypeService.java

```java
package com.nubo.schedule.query.api.service;

import com.nubo.schedule.query.api.models.dto.response.PageResponseOutDto;
import com.nubo.schedule.query.api.models.dto.response.TypeDto;

public interface TypeService {

    PageResponseOutDto<TypeDto> getByCategory(String category, int page, int size, String sort, String order, boolean all);

}
```

## src/main/java/com/nubo/schedule/query/api/service/impl/CountryServiceImpl.java

```java
package com.nubo.schedule.query.api.service.impl;

import java.util.List;
import java.util.Objects;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nubo.schedule.query.api.application.properties.PropertiesContext;
import com.nubo.schedule.query.api.exception.ServiceException;
import com.nubo.schedule.query.api.exception.error.ErrorCode;
import com.nubo.schedule.query.api.helpers.CountryMapperUtil;
import com.nubo.schedule.query.api.models.dto.response.CountryDto;
import com.nubo.schedule.query.api.models.dto.response.PageResponseOutDto;
import com.nubo.schedule.query.api.models.dto.response.TimeZoneDto;
import com.nubo.schedule.query.api.models.enums.CountryCodeEnum;
import com.nubo.schedule.query.api.models.enums.VersionApiEnum;
import com.nubo.schedule.query.api.repository.CountryRepository;
import com.nubo.schedule.query.api.service.CountryService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class CountryServiceImpl implements CountryService {

    private final CountryRepository countryRepository;

    @Override
    public PageResponseOutDto<CountryDto> getByCountryCodes(int page, int size, String sort, String order, boolean all) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion()))==VersionApiEnum.V1) {
            return getByCountryCodesV1(page, size, sort, order, all);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    public PageResponseOutDto<CountryDto> getByCountryCodesV1(int page, int size, String sort, String order, boolean all) {
        log.debug("Start method getByCountryCodesV1");

        List<String> allowedCountryCodes = CountryCodeEnum.getAllCountriesCodes();
        List<CountryDto> allCountries = CountryMapperUtil.toDtoList(countryRepository.findByCodeIn(allowedCountryCodes));
        
        if (all) {
            return PageResponseOutDto.<CountryDto>builder()
                    .content(allCountries)
                    .pageNumber(0)
                    .pageSize(allCountries.size())
                    .totalElements(allCountries.size())
                    .totalPages(1)
                    .build();
        }

        // Manual pagination for countries list
        int totalElements = allCountries.size();
        int totalPages = (int) Math.ceil((double) totalElements / size);
        int startIndex = page * size;
        int endIndex = Math.min(startIndex + size, totalElements);
        
        List<CountryDto> paginatedContent = startIndex < totalElements 
                ? allCountries.subList(startIndex, endIndex) 
                : List.of();
        
        return PageResponseOutDto.<CountryDto>builder()
                .content(paginatedContent)
                .pageNumber(page)
                .pageSize(size)
                .totalElements(totalElements)
                .totalPages(totalPages)
                .build();
    }

    @Override
    public PageResponseOutDto<TimeZoneDto> getTimeZoneByCountryId(Long countryId, int page, int size, String sort, String order, boolean all) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion()))==VersionApiEnum.V1) {
            return getTimeZoneByCountryIdV1(countryId, page, size, sort, order, all);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    public PageResponseOutDto<TimeZoneDto> getTimeZoneByCountryIdV1(Long countryId, int page, int size, String sort, String order, boolean all) {
        log.debug("Start method getTimeZoneByCountryIdV1 for countryId: {}", countryId);

        String timeZone = countryRepository.findById(countryId)
                .map(country -> country.getTimeZone())
                .orElse(null);

        List<TimeZoneDto> timeZones = timeZone != null ? 
                List.of(TimeZoneDto.builder().timeZone(timeZone).build()) : 
                List.of();

        // For timezone, we typically return a single result, so pagination is simple
        if (all || timeZones.isEmpty() || (page == 0 && size > 0)) {
            return PageResponseOutDto.<TimeZoneDto>builder()
                    .content(timeZones)
                    .pageNumber(page)
                    .pageSize(timeZones.isEmpty() ? 0 : size)
                    .totalElements(timeZones.size())
                    .totalPages(timeZones.isEmpty() ? 0 : 1)
                    .build();
        }
        
        // If pagination is requested but we're beyond page 0, return empty
        return PageResponseOutDto.<TimeZoneDto>builder()
                .content(List.of())
                .pageNumber(page)
                .pageSize(size)
                .totalElements(timeZones.size())
                .totalPages(timeZones.isEmpty() ? 0 : 1)
                .build();
    }
}
```

## src/main/java/com/nubo/schedule/query/api/service/impl/FrequencyServiceImpl.java

```java
package com.nubo.schedule.query.api.service.impl;

import com.nubo.schedule.query.api.application.properties.PropertiesContext;
import com.nubo.schedule.query.api.exception.ServiceException;
import com.nubo.schedule.query.api.exception.error.ErrorCode;
import com.nubo.schedule.query.api.helpers.FrequencyMapperUtil;
import com.nubo.schedule.query.api.models.dto.response.FrequencyDto;
import com.nubo.schedule.query.api.models.dto.response.PageResponseOutDto;
import com.nubo.schedule.query.api.models.entity.FrequencyEntity;
import com.nubo.schedule.query.api.models.enums.VersionApiEnum;
import com.nubo.schedule.query.api.repository.FrequencyRepository;
import com.nubo.schedule.query.api.service.FrequencyService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class FrequencyServiceImpl implements FrequencyService {

    private final FrequencyRepository frequencyRepository;

    @Override
    public PageResponseOutDto<FrequencyDto> getAllByUser(Long userId, int page, int size, String sort, String order, boolean all) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion()))==VersionApiEnum.V1) {
            return getAllByUserV1(userId, page, size, sort, order, all);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    public PageResponseOutDto<FrequencyDto> getAllByUserV1(Long userId, int page, int size, String sort, String order, boolean all) {
        log.debug("Start method getAllByUserV1 for userId: {}", userId);

        Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
        Sort sortObj = Sort.by(direction, sort != null ? sort : "id");

        if (all) {
            List<FrequencyEntity> allResults = frequencyRepository.findAll(sortObj);
            List<FrequencyDto> frequencies = FrequencyMapperUtil.toDtoList(allResults);
            
            return PageResponseOutDto.<FrequencyDto>builder()
                    .content(frequencies)
                    .pageNumber(0)
                    .pageSize(frequencies.size())
                    .totalElements(frequencies.size())
                    .totalPages(1)
                    .build();
        } else {
            Pageable pageable = PageRequest.of(page, size, sortObj);
            Page<FrequencyEntity> pageResult = frequencyRepository.findAll(pageable);
            
            return PageResponseOutDto.<FrequencyDto>builder()
                    .content(FrequencyMapperUtil.toDtoList(pageResult.getContent()))
                    .pageNumber(pageResult.getNumber())
                    .pageSize(pageResult.getSize())
                    .totalElements(pageResult.getTotalElements())
                    .totalPages(pageResult.getTotalPages())
                    .build();
        }
    }
}
```

## src/main/java/com/nubo/schedule/query/api/service/impl/MicroserviceServiceImpl.java

```java
package com.nubo.schedule.query.api.service.impl;

import com.nubo.schedule.query.api.application.properties.PropertiesContext;
import com.nubo.schedule.query.api.exception.ServiceException;
import com.nubo.schedule.query.api.exception.error.ErrorCode;
import com.nubo.schedule.query.api.helpers.MicroserviceMapperUtil;
import com.nubo.schedule.query.api.helpers.specification.MicroserviceSpecification;
import com.nubo.schedule.query.api.models.dto.response.MicroserviceDto;
import com.nubo.schedule.query.api.models.dto.response.PageResponseOutDto;
import com.nubo.schedule.query.api.models.entity.MicroserviceEntity;
import com.nubo.schedule.query.api.models.enums.VersionApiEnum;
import com.nubo.schedule.query.api.repository.MicroserviceRepository;
import com.nubo.schedule.query.api.service.MicroserviceService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class MicroserviceServiceImpl implements MicroserviceService {

    private final MicroserviceRepository microserviceRepository;

    @Override
    public PageResponseOutDto<MicroserviceDto> getAllByUser(Long userId, int page, int size, String sort, String order, boolean all) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion()))==VersionApiEnum.V1) {
            return getAllByUserV1(userId, page, size, sort, order, all);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    public PageResponseOutDto<MicroserviceDto> getAllByUserV1(Long userId, int page, int size, String sort, String order, boolean all) {
        log.debug("Start method getAllByUserV1 for userId: {}", userId);

        Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
        Sort sortObj = Sort.by(direction, sort != null ? sort : "id");

        if (all) {
            List<MicroserviceEntity> allResults = microserviceRepository.findAll(sortObj);
            List<MicroserviceDto> microservices = MicroserviceMapperUtil.toDtoList(allResults);
            
            return PageResponseOutDto.<MicroserviceDto>builder()
                    .content(microservices)
                    .pageNumber(0)
                    .pageSize(microservices.size())
                    .totalElements(microservices.size())
                    .totalPages(1)
                    .build();
        } else {
            Pageable pageable = PageRequest.of(page, size, sortObj);
            Page<MicroserviceEntity> pageResult = microserviceRepository.findAll(pageable);
            
            return PageResponseOutDto.<MicroserviceDto>builder()
                    .content(MicroserviceMapperUtil.toDtoList(pageResult.getContent()))
                    .pageNumber(pageResult.getNumber())
                    .pageSize(pageResult.getSize())
                    .totalElements(pageResult.getTotalElements())
                    .totalPages(pageResult.getTotalPages())
                    .build();
        }
    }

    @Override
    public PageResponseOutDto<MicroserviceDto> getBySubmoduleIdAndName(Integer submoduleId, String name, int page, int size, String sort, String order, boolean all) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion()))==VersionApiEnum.V1) {
            return getBySubmoduleIdAndNameV1(submoduleId, name, page, size, sort, order, all);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    public PageResponseOutDto<MicroserviceDto> getBySubmoduleIdAndNameV1(Integer submoduleId, String name, int page, int size, String sort, String order, boolean all) {
        log.debug("Start method getBySubmoduleIdAndNameV1 for submoduleId: {} and name: {}", submoduleId, name);

        Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
        Sort sortObj = Sort.by(direction, sort != null ? sort : "id");

        if (all) {
            List<MicroserviceEntity> allResults = microserviceRepository.findAll(
                    MicroserviceSpecification.filterBySubmoduleIdAndName(submoduleId, name),
                    sortObj
            );
            
            return PageResponseOutDto.<MicroserviceDto>builder()
                    .content(MicroserviceMapperUtil.toDtoList(allResults))
                    .pageNumber(0)
                    .pageSize(allResults.size())
                    .totalElements(allResults.size())
                    .totalPages(1)
                    .build();
        } else {
            Pageable pageable = PageRequest.of(page, size, sortObj);
            Page<MicroserviceEntity> pageResult = microserviceRepository.findAll(
                    MicroserviceSpecification.filterBySubmoduleIdAndName(submoduleId, name),
                    pageable
            );
            
            return PageResponseOutDto.<MicroserviceDto>builder()
                    .content(MicroserviceMapperUtil.toDtoList(pageResult.getContent()))
                    .pageNumber(pageResult.getNumber())
                    .pageSize(pageResult.getSize())
                    .totalElements(pageResult.getTotalElements())
                    .totalPages(pageResult.getTotalPages())
                    .build();
        }
    }
}
```

## src/main/java/com/nubo/schedule/query/api/service/impl/ModuleServiceImpl.java

```java
package com.nubo.schedule.query.api.service.impl;

import com.nubo.schedule.query.api.application.properties.PropertiesContext;
import com.nubo.schedule.query.api.exception.ServiceException;
import com.nubo.schedule.query.api.exception.error.ErrorCode;
import com.nubo.schedule.query.api.helpers.ModuleMapperUtil;
import com.nubo.schedule.query.api.helpers.specification.ModuleSpecification;
import com.nubo.schedule.query.api.models.dto.response.ModuleDto;
import com.nubo.schedule.query.api.models.dto.response.PageResponseOutDto;
import com.nubo.schedule.query.api.models.entity.ModuleEntity;
import com.nubo.schedule.query.api.models.enums.VersionApiEnum;
import com.nubo.schedule.query.api.repository.ModuleRepository;
import com.nubo.schedule.query.api.service.ModuleService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ModuleServiceImpl implements ModuleService {

    private final ModuleRepository moduleRepository;

    @Override
    public PageResponseOutDto<ModuleDto> getAllByUser(Long userId, int page, int size, String sort, String order, boolean all) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion()))==VersionApiEnum.V1) {
            return getAllByUserV1(userId, page, size, sort, order, all);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    public PageResponseOutDto<ModuleDto> getAllByUserV1(Long userId, int page, int size, String sort, String order, boolean all) {
        log.debug("Start method getAllByUserV1 for userId: {}", userId);

        Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
        Sort sortObj = Sort.by(direction, sort != null ? sort : "id");

        if (all) {
            List<ModuleEntity> allResults = moduleRepository.findAll(sortObj);
            List<ModuleDto> modules = ModuleMapperUtil.toDtoList(allResults);
            
            return PageResponseOutDto.<ModuleDto>builder()
                    .content(modules)
                    .pageNumber(0)
                    .pageSize(modules.size())
                    .totalElements(modules.size())
                    .totalPages(1)
                    .build();
        } else {
            Pageable pageable = PageRequest.of(page, size, sortObj);
            Page<ModuleEntity> pageResult = moduleRepository.findAll(pageable);
            
            return PageResponseOutDto.<ModuleDto>builder()
                    .content(ModuleMapperUtil.toDtoList(pageResult.getContent()))
                    .pageNumber(pageResult.getNumber())
                    .pageSize(pageResult.getSize())
                    .totalElements(pageResult.getTotalElements())
                    .totalPages(pageResult.getTotalPages())
                    .build();
        }
    }


    @Override
    public PageResponseOutDto<ModuleDto> searchModules(String name, String description, Integer categoryId, Integer id, int page, int size, String sort, String order, boolean all) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion()))==VersionApiEnum.V1) {
            return searchModulesV1(name, description, categoryId, id, page, size, sort, order, all);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    public PageResponseOutDto<ModuleDto> searchModulesV1(String name, String description, Integer categoryId, Integer id, int page, int size, String sort, String order, boolean all) {
        log.debug("Start method searchModulesV1 with filters - name: {}, description: {}, categoryId: {}, id: {}",
                name, description, categoryId, id);

        Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
        Sort sortObj = Sort.by(direction, sort != null ? sort : "id");

        if (all) {
            List<ModuleEntity> allResults = moduleRepository.findAll(
                    ModuleSpecification.filterBy(name, description, categoryId, id),
                    sortObj
            );
            
            return PageResponseOutDto.<ModuleDto>builder()
                    .content(ModuleMapperUtil.toDtoList(allResults))
                    .pageNumber(0)
                    .pageSize(allResults.size())
                    .totalElements(allResults.size())
                    .totalPages(1)
                    .build();
        } else {
            Pageable pageable = PageRequest.of(page, size, sortObj);
            Page<ModuleEntity> pageResult = moduleRepository.findAll(
                    ModuleSpecification.filterBy(name, description, categoryId, id),
                    pageable
            );

            return PageResponseOutDto.<ModuleDto>builder()
                    .content(ModuleMapperUtil.toDtoList(pageResult.getContent()))
                    .pageNumber(pageResult.getNumber())
                    .pageSize(pageResult.getSize())
                    .totalElements(pageResult.getTotalElements())
                    .totalPages(pageResult.getTotalPages())
                    .build();
        }
    }

}

```

## src/main/java/com/nubo/schedule/query/api/service/impl/ProcessServiceImpl.java

```java
package com.nubo.schedule.query.api.service.impl;

import com.nubo.schedule.query.api.application.properties.PropertiesContext;
import com.nubo.schedule.query.api.exception.ServiceException;
import com.nubo.schedule.query.api.exception.error.ErrorCode;
import com.nubo.schedule.query.api.helpers.ProcessMapperUtil;
import com.nubo.schedule.query.api.helpers.specification.ProcessSpecification;
import com.nubo.schedule.query.api.models.dto.response.PageResponseOutDto;
import com.nubo.schedule.query.api.models.dto.response.ProcessDto;
import com.nubo.schedule.query.api.models.entity.ProcessEntity;
import com.nubo.schedule.query.api.models.enums.VersionApiEnum;
import com.nubo.schedule.query.api.repository.ProcessRepository;
import com.nubo.schedule.query.api.service.ProcessService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ProcessServiceImpl implements ProcessService {

    private final ProcessRepository processRepository;

    @Override
    public PageResponseOutDto<ProcessDto> getAllByUser(Long userId, int page, int size, String sort, String order, boolean all) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion()))==VersionApiEnum.V1) {
            return getAllByUserV1(userId, page, size, sort, order, all);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    public PageResponseOutDto<ProcessDto> getAllByUserV1(Long userId, int page, int size, String sort, String order, boolean all) {
        log.debug("Start method getAllByUserV1 for userId: {}", userId);

        Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
        Sort sortObj = Sort.by(direction, sort != null ? sort : "id");

        if (all) {
            List<ProcessEntity> allResults = processRepository.findAll(sortObj);
            List<ProcessDto> processes = ProcessMapperUtil.toDtoList(allResults);
            
            return PageResponseOutDto.<ProcessDto>builder()
                    .content(processes)
                    .pageNumber(0)
                    .pageSize(processes.size())
                    .totalElements(processes.size())
                    .totalPages(1)
                    .build();
        } else {
            Pageable pageable = PageRequest.of(page, size, sortObj);
            Page<ProcessEntity> pageResult = processRepository.findAll(pageable);
            
            return PageResponseOutDto.<ProcessDto>builder()
                    .content(ProcessMapperUtil.toDtoList(pageResult.getContent()))
                    .pageNumber(pageResult.getNumber())
                    .pageSize(pageResult.getSize())
                    .totalElements(pageResult.getTotalElements())
                    .totalPages(pageResult.getTotalPages())
                    .build();
        }
    }

    @Override
    public PageResponseOutDto<ProcessDto> getAllByProcessWithFilters(Long processId, String description, int page, int size, String sort, String order, boolean all) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion()))==VersionApiEnum.V1) {
            return getAllByProcessWithFiltersV1(processId, description, page, size, sort, order, all);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    public PageResponseOutDto<ProcessDto> getAllByProcessWithFiltersV1(Long processId, String description, int page, int size, String sort, String order, boolean all) {
        log.debug("Start method getAllByProcessWithFiltersV1 for processId: {}, description: {}", processId, description);

        Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
        Sort sortObj = Sort.by(direction, sort != null ? sort : "id");

        if (all) {
            List<ProcessEntity> allResults = processRepository.findAll(
                    ProcessSpecification.filterBy(processId, description),
                    sortObj
            );
            
            return PageResponseOutDto.<ProcessDto>builder()
                    .content(ProcessMapperUtil.toDtoList(allResults))
                    .pageNumber(0)
                    .pageSize(allResults.size())
                    .totalElements(allResults.size())
                    .totalPages(1)
                    .build();
        } else {
            Pageable pageable = PageRequest.of(page, size, sortObj);
            Page<ProcessEntity> pageResult = processRepository.findAll(
                    ProcessSpecification.filterBy(processId, description),
                    pageable
            );

            return PageResponseOutDto.<ProcessDto>builder()
                    .content(ProcessMapperUtil.toDtoList(pageResult.getContent()))
                    .pageNumber(pageResult.getNumber())
                    .pageSize(pageResult.getSize())
                    .totalElements(pageResult.getTotalElements())
                    .totalPages(pageResult.getTotalPages())
                    .build();
        }
    }

    @Override
    public PageResponseOutDto<ProcessDto> getByMicroserviceIdAndDescription(Integer microserviceId, String description, int page, int size, String sort, String order, boolean all) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion()))==VersionApiEnum.V1) {
            return getByMicroserviceIdAndDescriptionV1(microserviceId, description, page, size, sort, order, all);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    public PageResponseOutDto<ProcessDto> getByMicroserviceIdAndDescriptionV1(Integer microserviceId, String description, int page, int size, String sort, String order, boolean all) {
        log.debug("Start method getByMicroserviceIdAndDescriptionV1 for microserviceId: {} and description: {}", microserviceId, description);

        Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
        Sort sortObj = Sort.by(direction, sort != null ? sort : "id");

        if (all) {
            List<ProcessEntity> allResults = processRepository.findAll(
                    ProcessSpecification.filterByMicroserviceIdAndDescription(microserviceId, description),
                    sortObj
            );
            
            return PageResponseOutDto.<ProcessDto>builder()
                    .content(ProcessMapperUtil.toDtoList(allResults))
                    .pageNumber(0)
                    .pageSize(allResults.size())
                    .totalElements(allResults.size())
                    .totalPages(1)
                    .build();
        } else {
            Pageable pageable = PageRequest.of(page, size, sortObj);
            Page<ProcessEntity> pageResult = processRepository.findAll(
                    ProcessSpecification.filterByMicroserviceIdAndDescription(microserviceId, description),
                    pageable
            );
            
            return PageResponseOutDto.<ProcessDto>builder()
                    .content(ProcessMapperUtil.toDtoList(pageResult.getContent()))
                    .pageNumber(pageResult.getNumber())
                    .pageSize(pageResult.getSize())
                    .totalElements(pageResult.getTotalElements())
                    .totalPages(pageResult.getTotalPages())
                    .build();
        }
    }
}
```

## src/main/java/com/nubo/schedule/query/api/service/impl/RejectionReasonServiceImpl.java

```java
package com.nubo.schedule.query.api.service.impl;

import com.nubo.schedule.query.api.application.properties.PropertiesContext;
import com.nubo.schedule.query.api.exception.ServiceException;
import com.nubo.schedule.query.api.exception.error.ErrorCode;
import com.nubo.schedule.query.api.helpers.RejectionReasonMapperUtil;
import com.nubo.schedule.query.api.helpers.specification.RejectionReasonSpecification;
import com.nubo.schedule.query.api.models.dto.response.PageResponseOutDto;
import com.nubo.schedule.query.api.models.dto.response.RejectionReasonDto;
import com.nubo.schedule.query.api.models.entity.RejectionReasonEntity;
import com.nubo.schedule.query.api.models.enums.VersionApiEnum;
import com.nubo.schedule.query.api.repository.RejectionReasonRepository;
import com.nubo.schedule.query.api.service.RejectionReasonService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class RejectionReasonServiceImpl implements RejectionReasonService {

    private final RejectionReasonRepository rejectionReasonRepository;

    @Override
    public PageResponseOutDto<RejectionReasonDto> getByCategoryAndReason(String category, String reason, int page, int size, String sort, String order, boolean all) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion()))==VersionApiEnum.V1) {
            return getByCategoryAndReasonV1(category, reason, page, size, sort, order, all);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    public PageResponseOutDto<RejectionReasonDto> getByCategoryAndReasonV1(String category, String reason, int page, int size, String sort, String order, boolean all) {
        log.debug("Start method getByCategoryAndReasonV1 for category: {} and reason: {}", category, reason);

        List<RejectionReasonEntity> rejectionReasons = rejectionReasonRepository.findAll(
                RejectionReasonSpecification.filterByCategoryAndReason(category, reason)
        );

        List<RejectionReasonDto> allRejectionReasonDtos = RejectionReasonMapperUtil.toDtoList(rejectionReasons);
        
        if (all) {
            return PageResponseOutDto.<RejectionReasonDto>builder()
                    .content(allRejectionReasonDtos)
                    .pageNumber(0)
                    .pageSize(allRejectionReasonDtos.size())
                    .totalElements(allRejectionReasonDtos.size())
                    .totalPages(1)
                    .build();
        }

        // Manual pagination for rejection reasons list
        int totalElements = allRejectionReasonDtos.size();
        int totalPages = (int) Math.ceil((double) totalElements / size);
        int startIndex = page * size;
        int endIndex = Math.min(startIndex + size, totalElements);
        
        List<RejectionReasonDto> paginatedContent = startIndex < totalElements 
                ? allRejectionReasonDtos.subList(startIndex, endIndex) 
                : List.of();
        
        return PageResponseOutDto.<RejectionReasonDto>builder()
                .content(paginatedContent)
                .pageNumber(page)
                .pageSize(size)
                .totalElements(totalElements)
                .totalPages(totalPages)
                .build();
    }
}
```

## src/main/java/com/nubo/schedule/query/api/service/impl/RelatedScheduleServiceImpl.java

```java
package com.nubo.schedule.query.api.service.impl;

import java.util.List;
import java.util.Objects;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nubo.schedule.query.api.application.properties.PropertiesContext;
import com.nubo.schedule.query.api.exception.ServiceException;
import com.nubo.schedule.query.api.exception.error.ErrorCode;
import com.nubo.schedule.query.api.helpers.RelatedScheduleAssociationMapperUtil;
import com.nubo.schedule.query.api.helpers.specification.RelatedScheduleSpecification;
import com.nubo.schedule.query.api.models.dto.response.PageResponseOutDto;
import com.nubo.schedule.query.api.models.dto.response.ScheduleAssociationDto;
import com.nubo.schedule.query.api.models.entity.RelatedScheduleEntity;
import com.nubo.schedule.query.api.models.enums.VersionApiEnum;
import com.nubo.schedule.query.api.repository.RelatedScheduleRepository;
import com.nubo.schedule.query.api.service.RelatedScheduleService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class RelatedScheduleServiceImpl implements RelatedScheduleService {

    private final RelatedScheduleRepository relatedScheduleRepository;
    private final RelatedScheduleAssociationMapperUtil relatedScheduleAssociationMapperUtil;

    @Override
    public PageResponseOutDto<ScheduleAssociationDto> getAllByScheduleId(Long scheduleId, int page, int size, String sort, String order, boolean all) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return getAllByScheduleIdV1(scheduleId, page, size, sort, order, all);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    public PageResponseOutDto<ScheduleAssociationDto> getAllByScheduleIdV1(Long scheduleId, int page, int size, String sort, String order, boolean all) {
        log.debug("Start method getAllByScheduleIdV1 for scheduleId: {}, page: {}, size: {}, sort: {}, order: {}, all: {}", scheduleId, page, size, sort, order, all);

        Specification<RelatedScheduleEntity> specification = RelatedScheduleSpecification.filterBy(scheduleId);
        
        Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
        Sort sortObj = Sort.by(direction, sort != null ? sort : "relatedScheduleId");

        if (all) {
            List<RelatedScheduleEntity> allResults = relatedScheduleRepository.findAll(specification, sortObj);
            List<ScheduleAssociationDto> relatedSchedules = relatedScheduleAssociationMapperUtil.toDtoList(allResults);

            log.debug("Found {} related schedules for scheduleId: {}", relatedSchedules.size(), scheduleId);

            return PageResponseOutDto.<ScheduleAssociationDto>builder()
                    .content(relatedSchedules)
                    .pageNumber(0)
                    .pageSize(relatedSchedules.size())
                    .totalElements(relatedSchedules.size())
                    .totalPages(1)
                    .build();
        } else {
            Pageable pageable = PageRequest.of(page, size, sortObj);
            Page<RelatedScheduleEntity> resultPage = relatedScheduleRepository.findAll(specification, pageable);
            
            List<ScheduleAssociationDto> relatedSchedules = relatedScheduleAssociationMapperUtil.toDtoList(resultPage.getContent());

            log.debug("Found {} related schedules for scheduleId: {} on page {} of {}", relatedSchedules.size(), scheduleId, resultPage.getNumber(), resultPage.getTotalPages());

            return PageResponseOutDto.<ScheduleAssociationDto>builder()
                    .content(relatedSchedules)
                    .pageNumber(resultPage.getNumber())
                    .pageSize(resultPage.getSize())
                    .totalElements(resultPage.getTotalElements())
                    .totalPages(resultPage.getTotalPages())
                    .build();
        }
    }

}
```

## src/main/java/com/nubo/schedule/query/api/service/impl/ScheduleLogServiceImpl.java

```java
package com.nubo.schedule.query.api.service.impl;

import java.util.List;
import java.util.Objects;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nubo.schedule.query.api.application.properties.PropertiesContext;
import com.nubo.schedule.query.api.exception.ServiceException;
import com.nubo.schedule.query.api.exception.error.ErrorCode;
import com.nubo.schedule.query.api.helpers.ScheduleLogMapperUtil;
import com.nubo.schedule.query.api.helpers.specification.ScheduleLogSpecification;
import com.nubo.schedule.query.api.models.dto.response.PageResponseOutDto;
import com.nubo.schedule.query.api.models.dto.response.ScheduleLogDto;
import com.nubo.schedule.query.api.models.entity.ScheduleLogEntity;
import com.nubo.schedule.query.api.models.enums.VersionApiEnum;
import com.nubo.schedule.query.api.repository.ScheduleLogRepository;
import com.nubo.schedule.query.api.service.ScheduleLogService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ScheduleLogServiceImpl implements ScheduleLogService {

    private final ScheduleLogRepository scheduleLogRepository;
    private final ScheduleLogMapperUtil scheduleLogMapperUtil;

    @Override
    public PageResponseOutDto<ScheduleLogDto> getAllByScheduleId(Long scheduleId, int page, int size, String sort, String order, boolean all) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return getAllByScheduleIdV1(scheduleId, page, size, sort, order, all);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    public PageResponseOutDto<ScheduleLogDto> getAllByScheduleIdV1(Long scheduleId, int page, int size, String sort, String order, boolean all) {
        log.debug("Start method getAllByScheduleIdV1 for scheduleId: {}", scheduleId);

        Specification<ScheduleLogEntity> specification = ScheduleLogSpecification.filterBy(scheduleId);
        
        Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
        Sort sortObj = Sort.by(direction, sort != null ? sort : "scheduleLogId");

        if (all) {
            List<ScheduleLogEntity> allResults = scheduleLogRepository.findAll(specification, sortObj);
            List<ScheduleLogDto> scheduleLogs = scheduleLogMapperUtil.toDtoList(allResults);

            log.debug("Found {} schedule logs for scheduleId: {}", scheduleLogs.size(), scheduleId);

            return PageResponseOutDto.<ScheduleLogDto>builder()
                    .content(scheduleLogs)
                    .pageNumber(0)
                    .pageSize(scheduleLogs.size())
                    .totalElements(scheduleLogs.size())
                    .totalPages(1)
                    .build();
        } else {
            Pageable pageable = PageRequest.of(page, size, sortObj);
            Page<ScheduleLogEntity> pageResult = scheduleLogRepository.findAll(specification, pageable);
            
            List<ScheduleLogDto> scheduleLogs = scheduleLogMapperUtil.toDtoList(pageResult.getContent());

            log.debug("Found {} schedule logs for scheduleId: {}", scheduleLogs.size(), scheduleId);

            return PageResponseOutDto.<ScheduleLogDto>builder()
                    .content(scheduleLogs)
                    .pageNumber(pageResult.getNumber())
                    .pageSize(pageResult.getSize())
                    .totalElements(pageResult.getTotalElements())
                    .totalPages(pageResult.getTotalPages())
                    .build();
        }
    }

}
```

## src/main/java/com/nubo/schedule/query/api/service/impl/ScheduleServiceImpl.java

```java
package com.nubo.schedule.query.api.service.impl;

import com.nubo.schedule.query.api.application.properties.PropertiesConfig;
import com.nubo.schedule.query.api.application.properties.PropertiesContext;
import com.nubo.schedule.query.api.exception.ServiceException;
import com.nubo.schedule.query.api.exception.error.ErrorCode;
import com.nubo.schedule.query.api.helpers.ScheduleMapperUtil;
import com.nubo.schedule.query.api.helpers.ScreenActionMapperUtil;
import com.nubo.schedule.query.api.helpers.specification.ScheduleSpecification;
import com.nubo.schedule.query.api.models.dto.response.PageResponseOutDto;
import com.nubo.schedule.query.api.models.dto.response.ScheduleDto;
import com.nubo.schedule.query.api.models.dto.response.ScheduleSummaryDto;
import com.nubo.schedule.query.api.models.entity.ScheduleEntity;
import com.nubo.schedule.query.api.models.entity.UserNuboEntity;
import com.nubo.schedule.query.api.models.enums.UserTypeEnum;
import com.nubo.schedule.query.api.models.enums.VersionApiEnum;
import com.nubo.schedule.query.api.repository.ScheduleRepository;
import com.nubo.schedule.query.api.repository.UserNuboRepository;
import com.nubo.schedule.query.api.service.ScheduleService;
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

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.Collections;
import java.util.List;
import java.util.Objects;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ScheduleServiceImpl implements ScheduleService {

    private final ScheduleRepository scheduleRepository;
    private final UserNuboRepository userNuboRepository;
    private final PropertiesConfig propertiesConfig;

    @Override
    public PageResponseOutDto<ScheduleDto> getAllByUser(Long userId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return getAllByUserV1(userId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    public PageResponseOutDto<ScheduleDto> getAllByUserV1(Long userId) {
        log.debug("Start method getAllByUserV1 for userId: {}", userId);

        UserNuboEntity userNuboEntity = userNuboRepository.findById(userId)
                .orElseThrow(() -> new ServiceException(ErrorCode.USER_NOT_FOUND, HttpStatus.NOT_FOUND));

        List<ScheduleDto> schedules;
        if (isExternalUser(userNuboEntity)) {
            log.debug("External user detected, filtering schedules by userNuboId: {}", userId);
            schedules = ScheduleMapperUtil.toDtoList(scheduleRepository.findByUserNuboId(userId));
        } else {
            log.debug("Internal user detected, returning all schedules");
            schedules = ScheduleMapperUtil.toDtoList(scheduleRepository.findAll());
        }

        return PageResponseOutDto.<ScheduleDto>builder()
                .content(schedules)
                .pageNumber(0)
                .pageSize(schedules.size())
                .totalElements(schedules.size())
                .totalPages(1)
                .build();
    }

    @Override
    public PageResponseOutDto<ScheduleDto> getAllByUser(Long userId, int page, int size, String sort, String order, boolean all) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return getAllByUserV1(userId, page, size, sort, order, all);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    public PageResponseOutDto<ScheduleDto> getAllByUserV1(Long userId, int page, int size, String sort, String order, boolean all) {
        log.debug("Start method getAllByUserV1 for userId: {} with pagination", userId);

        UserNuboEntity userNuboEntity = userNuboRepository.findById(userId)
                .orElseThrow(() -> new ServiceException(ErrorCode.USER_NOT_FOUND, HttpStatus.NOT_FOUND));

        boolean sortByDailyStatus = "dailyStatus".equalsIgnoreCase(sort);
        Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
        Sort sortObj = Sort.by(direction, sortByDailyStatus ? "id" : (sort != null ? sort : "id"));

        if (all) {
            List<ScheduleDto> schedules;
            if (isExternalUser(userNuboEntity)) {
                log.debug("External user detected, filtering schedules by userNuboId: {}", userId);
                schedules = ScheduleMapperUtil.toDtoList(scheduleRepository.findByUserNuboId(userId));
            } else {
                log.debug("Internal user detected, returning all schedules");
                schedules = ScheduleMapperUtil.toDtoList(scheduleRepository.findAll(sortObj));
            }

            // Apply sorting by dailyStatus if requested
            if (sortByDailyStatus) {
                schedules.sort((s1, s2) -> {
                    int comparison = s1.getDailyStatus().compareTo(s2.getDailyStatus());
                    return direction == Sort.Direction.DESC ? -comparison : comparison;
                });
            }

            return PageResponseOutDto.<ScheduleDto>builder()
                    .content(schedules)
                    .pageNumber(0)
                    .pageSize(schedules.size())
                    .totalElements(schedules.size())
                    .totalPages(1)
                    .build();
        } else {
            if (isExternalUser(userNuboEntity)) {
                log.debug("External user detected, filtering schedules by userNuboId: {}", userId);
                List<ScheduleEntity> userSchedules = scheduleRepository.findByUserNuboId(userId);
                List<ScheduleDto> allDtos = ScheduleMapperUtil.toDtoList(userSchedules);

                // Sort by dailyStatus if requested
                if (sortByDailyStatus) {
                    allDtos.sort((s1, s2) -> {
                        int comparison = s1.getDailyStatus().compareTo(s2.getDailyStatus());
                        return direction == Sort.Direction.DESC ? -comparison : comparison;
                    });
                }

                int totalElements = allDtos.size();
                int start = page * size;
                int end = Math.min(start + size, totalElements);
                List<ScheduleDto> pageContent = start < totalElements ? allDtos.subList(start, end) : Collections.emptyList();

                return PageResponseOutDto.<ScheduleDto>builder()
                        .content(pageContent)
                        .pageNumber(page)
                        .pageSize(size)
                        .totalElements(totalElements)
                        .totalPages((int) Math.ceil((double) totalElements / size))
                        .build();
            } else {
                log.debug("Internal user detected, returning all schedules");

                if (sortByDailyStatus) {
                    List<ScheduleEntity> allEntities = scheduleRepository.findAll();
                    List<ScheduleDto> allDtos = ScheduleMapperUtil.toDtoList(allEntities);

                    // Sort by dailyStatus
                    allDtos.sort((s1, s2) -> {
                        int comparison = s1.getDailyStatus().compareTo(s2.getDailyStatus());
                        return direction == Sort.Direction.DESC ? -comparison : comparison;
                    });

                    // Manual pagination
                    int totalElements = allDtos.size();
                    int start = page * size;
                    int end = Math.min(start + size, totalElements);
                    List<ScheduleDto> pageContent = start < totalElements ? allDtos.subList(start, end) : Collections.emptyList();

                    return PageResponseOutDto.<ScheduleDto>builder()
                            .content(pageContent)
                            .pageNumber(page)
                            .pageSize(size)
                            .totalElements(totalElements)
                            .totalPages((int) Math.ceil((double) totalElements / size))
                            .build();
                } else {
                    Pageable pageable = PageRequest.of(page, size, sortObj);
                    Page<ScheduleEntity> pageResult = scheduleRepository.findAll(pageable);

                    return PageResponseOutDto.<ScheduleDto>builder()
                            .content(ScheduleMapperUtil.toDtoList(pageResult.getContent()))
                            .pageNumber(pageResult.getNumber())
                            .pageSize(pageResult.getSize())
                            .totalElements(pageResult.getTotalElements())
                            .totalPages(pageResult.getTotalPages())
                            .build();
                }
            }
        }
    }

    @Override
    public PageResponseOutDto<ScheduleDto> getAllSchedulesWithoutUser(
            List<String> countryCodes,
            List<String> screenActionCodes,
            List<Long> processIds,
            boolean extendClosingTime,
            int page, int size, String sort, String order) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return getAllSchedulesWithoutUserV1(countryCodes, screenActionCodes, processIds, extendClosingTime,
                    page, size, sort, order);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    public PageResponseOutDto<ScheduleDto> getAllSchedulesWithoutUserV1(List<String> countryCodes,
                                                                        List<String> screenActionCodes,
                                                                        List<Long> processIds,
                                                                        boolean extendClosingTime,
                                                                        int page, int size, String sort, String order) {
        Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
        Sort sortObj = Sort.by(direction, sort != null ? sort : "id");
        log.debug("Returning all schedules with pagination");
        Pageable pageable = PageRequest.of(page, size, sortObj);
        Page<ScheduleEntity> pageResult;

        if (screenActionCodes != null && !screenActionCodes.isEmpty()) {
            pageResult = scheduleRepository.findByCountry_CodeInAndScreenAction_CodeIn(countryCodes, screenActionCodes, pageable);
        } else if (processIds != null && !processIds.isEmpty()) {
            pageResult = scheduleRepository.findByCountry_CodeInAndProcessIdIn(countryCodes, processIds, pageable);
        } else {
            pageResult = scheduleRepository.findByCountry_CodeIn(countryCodes, pageable);
        }

        List<ScheduleDto> scheduleList = ScheduleMapperUtil.toDtoList(pageResult.getContent());
        if (extendClosingTime) {
            LocalTime defaultFixedClosingTime = propertiesConfig.getDefaultFixedClosingTime();
            log.info("Default fixed closing time to set: {}", defaultFixedClosingTime);
            scheduleList.forEach(s -> s.setClosingTime(defaultFixedClosingTime));
        }
        return PageResponseOutDto.<ScheduleDto>builder()
                .content(scheduleList)
                .pageNumber(pageResult.getNumber())
                .pageSize(pageResult.getSize())
                .totalElements(pageResult.getTotalElements())
                .totalPages(pageResult.getTotalPages())
                .build();
    }

    @Override
    public PageResponseOutDto<ScheduleDto> getAllSchedulesWithFilters(
            Long scheduleId, Long countryId,
            Long processId, String processSearch,
            Long moduleId, String moduleSearch,
            Long submoduleId, String submoduleSearch,
            Long stateId, String stateSearch,
            List<Long> countryIds, String countrySearch,
            String screenActionCode,
            Long userId,
            int page, int size, String sort, String order, boolean all) {

        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return getAllSchedulesWithFiltersV1(scheduleId, countryId, processId, processSearch, moduleId, moduleSearch, submoduleId, submoduleSearch, stateId, stateSearch, countryIds, countrySearch, screenActionCode, userId, page, size, sort, order, all);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    public PageResponseOutDto<ScheduleDto> getAllSchedulesWithFiltersV1(
            Long scheduleId, Long countryId,
            Long processId, String processSearch,
            Long moduleId, String moduleSearch,
            Long submoduleId, String submoduleSearch,
            Long stateId, String stateSearch,
            List<Long> countryIds, String countrySearch,
            String screenActionCode,
            Long userId,
            int page, int size, String sort, String order, boolean all) {

        log.debug("Start method getAllSchedulesWithFiltersV1 with filters: scheduleId={}, countryId={}, processId={}, processSearch={}, moduleId={}, moduleSearch={}, submoduleId={}, submoduleSearch={}, stateId={}, stateSearch={}, countryIds={}, countrySearch={}, screenActionCode={}, userId={}, page={}, size={}, sort={}, order={}, all={}",
                scheduleId, countryId, processId, processSearch, moduleId, moduleSearch, submoduleId, submoduleSearch, stateId, stateSearch, countryIds, countrySearch, screenActionCode, userId, page, size, sort, order, all);

        UserNuboEntity userNuboEntity = userNuboRepository.findById(userId)
                .orElseThrow(() -> new ServiceException(ErrorCode.USER_NOT_FOUND, HttpStatus.NOT_FOUND));

        UserTypeEnum userType = userNuboEntity.getUserType();

        validateUserType(userNuboEntity);

        boolean sortByDailyStatus = "dailyStatus".equalsIgnoreCase(sort);
        Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
        Sort sortObj = Sort.by(direction, sortByDailyStatus ? "id" : (sort != null ? sort : "id"));

        Specification<ScheduleEntity> specification = ScheduleSpecification.filterBy(
                scheduleId, countryId,
                processId, processSearch,
                moduleId, moduleSearch,
                submoduleId, submoduleSearch,
                stateId, stateSearch,
                countryIds, countrySearch,
                screenActionCode,
                userType, userId);

        if (all) {
            List<ScheduleEntity> scheduleEntities = scheduleRepository.findAll(specification, sortObj);
            List<ScheduleDto> scheduleDtos = ScheduleMapperUtil.toDtoList(scheduleEntities);

            // Apply sorting by dailyStatus if requested
            if (sortByDailyStatus) {
                scheduleDtos.sort((s1, s2) -> {
                    int comparison = s1.getDailyStatus().compareTo(s2.getDailyStatus());
                    return direction == Sort.Direction.DESC ? -comparison : comparison;
                });
            }

            return PageResponseOutDto.<ScheduleDto>builder()
                    .content(scheduleDtos)
                    .pageNumber(0)
                    .pageSize(scheduleDtos.size())
                    .totalElements(scheduleDtos.size())
                    .totalPages(1)
                    .build();
        } else {
            // When sorting by dailyStatus, we need to fetch all records, sort, then paginate
            if (sortByDailyStatus) {
                List<ScheduleEntity> allEntities = scheduleRepository.findAll(specification);
                List<ScheduleDto> allDtos = ScheduleMapperUtil.toDtoList(allEntities);

                // Sort by dailyStatus
                allDtos.sort((s1, s2) -> {
                    int comparison = s1.getDailyStatus().compareTo(s2.getDailyStatus());
                    return direction == Sort.Direction.DESC ? -comparison : comparison;
                });

                // Manual pagination
                int totalElements = allDtos.size();
                int start = page * size;
                int end = Math.min(start + size, totalElements);
                List<ScheduleDto> pageContent = start < totalElements ? allDtos.subList(start, end) : Collections.emptyList();

                return PageResponseOutDto.<ScheduleDto>builder()
                        .content(pageContent)
                        .pageNumber(page)
                        .pageSize(size)
                        .totalElements(totalElements)
                        .totalPages((int) Math.ceil((double) totalElements / size))
                        .build();
            } else {
                Pageable pageable = PageRequest.of(page, size, sortObj);
                Page<ScheduleEntity> scheduleEntityPage = scheduleRepository.findAll(specification, pageable);
                List<ScheduleDto> scheduleDtos = ScheduleMapperUtil.toDtoList(scheduleEntityPage.getContent());

                return PageResponseOutDto.<ScheduleDto>builder()
                        .content(scheduleDtos)
                        .pageNumber(scheduleEntityPage.getNumber())
                        .pageSize(scheduleEntityPage.getSize())
                        .totalElements(scheduleEntityPage.getTotalElements())
                        .totalPages(scheduleEntityPage.getTotalPages())
                        .build();
            }
        }
    }

    @Override
    public PageResponseOutDto<ScheduleDto> getAllSchedulesWithFiltersAndDescription(
            Long scheduleId, Long countryId,
            Long processId, String processSearch,
            Long moduleId, String moduleSearch,
            Long submoduleId, String submoduleSearch,
            Long stateId, String stateSearch,
            List<Long> countryIds, String countrySearch,
            String screenActionCode,
            String descriptionSearch,
            Long userId,
            int page, int size, String sort, String order, boolean all) {

        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return getAllSchedulesWithFiltersAndDescriptionV1(scheduleId, countryId, processId, processSearch, moduleId, moduleSearch, submoduleId, submoduleSearch, stateId, stateSearch, countryIds, countrySearch, screenActionCode, descriptionSearch, userId, page, size, sort, order, all);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    public PageResponseOutDto<ScheduleDto> getAllSchedulesWithFiltersAndDescriptionV1(
            Long scheduleId, Long countryId,
            Long processId, String processSearch,
            Long moduleId, String moduleSearch,
            Long submoduleId, String submoduleSearch,
            Long stateId, String stateSearch,
            List<Long> countryIds, String countrySearch,
            String screenActionCode,
            String descriptionSearch,
            Long userId,
            int page, int size, String sort, String order, boolean all) {

        log.debug("Start method getAllSchedulesWithFiltersAndDescriptionV1 with filters: scheduleId={}, countryId={}, processId={}, processSearch={}, moduleId={}, moduleSearch={}, submoduleId={}, submoduleSearch={}, stateId={}, stateSearch={}, countryIds={}, countrySearch={}, screenActionCode={}, descriptionSearch={}, userId={}, page={}, size={}, sort={}, order={}, all={}",
                scheduleId, countryId, processId, processSearch, moduleId, moduleSearch, submoduleId, submoduleSearch, stateId, stateSearch, countryIds, countrySearch, screenActionCode, descriptionSearch, userId, page, size, sort, order, all);

        UserNuboEntity userNuboEntity = userNuboRepository.findById(userId)
                .orElseThrow(() -> new ServiceException(ErrorCode.USER_NOT_FOUND, HttpStatus.NOT_FOUND));

        UserTypeEnum userType = userNuboEntity.getUserType();

        validateUserType(userNuboEntity);

        boolean sortByDailyStatus = "dailyStatus".equalsIgnoreCase(sort);
        Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
        Sort sortObj = Sort.by(direction, sortByDailyStatus ? "id" : (sort != null ? sort : "id"));

        Specification<ScheduleEntity> specification = ScheduleSpecification.filterByWithDescriptionSearch(
                scheduleId, countryId,
                processId, processSearch,
                moduleId, moduleSearch,
                submoduleId, submoduleSearch,
                stateId, stateSearch,
                countryIds, countrySearch,
                screenActionCode,
                descriptionSearch,
                userType, userId);

        if (all) {
            List<ScheduleEntity> scheduleEntities = scheduleRepository.findAll(specification, sortObj);
            List<ScheduleDto> scheduleDtos = ScheduleMapperUtil.toDtoList(scheduleEntities);

            // Apply sorting by dailyStatus if requested
            if (sortByDailyStatus) {
                scheduleDtos.sort((s1, s2) -> {
                    int comparison = s1.getDailyStatus().compareTo(s2.getDailyStatus());
                    return direction == Sort.Direction.DESC ? -comparison : comparison;
                });
            }

            return PageResponseOutDto.<ScheduleDto>builder()
                    .content(scheduleDtos)
                    .pageNumber(0)
                    .pageSize(scheduleDtos.size())
                    .totalElements(scheduleDtos.size())
                    .totalPages(1)
                    .build();
        } else {
            // When sorting by dailyStatus, we need to fetch all records, sort, then paginate
            if (sortByDailyStatus) {
                List<ScheduleEntity> allEntities = scheduleRepository.findAll(specification);
                List<ScheduleDto> allDtos = ScheduleMapperUtil.toDtoList(allEntities);

                // Sort by dailyStatus
                allDtos.sort((s1, s2) -> {
                    int comparison = s1.getDailyStatus().compareTo(s2.getDailyStatus());
                    return direction == Sort.Direction.DESC ? -comparison : comparison;
                });

                // Manual pagination
                int totalElements = allDtos.size();
                int start = page * size;
                int end = Math.min(start + size, totalElements);
                List<ScheduleDto> pageContent = start < totalElements ? allDtos.subList(start, end) : Collections.emptyList();

                return PageResponseOutDto.<ScheduleDto>builder()
                        .content(pageContent)
                        .pageNumber(page)
                        .pageSize(size)
                        .totalElements(totalElements)
                        .totalPages((int) Math.ceil((double) totalElements / size))
                        .build();
            } else {
                Pageable pageable = PageRequest.of(page, size, sortObj);
                Page<ScheduleEntity> scheduleEntityPage = scheduleRepository.findAll(specification, pageable);
                List<ScheduleDto> scheduleDtos = ScheduleMapperUtil.toDtoList(scheduleEntityPage.getContent());

                return PageResponseOutDto.<ScheduleDto>builder()
                        .content(scheduleDtos)
                        .pageNumber(scheduleEntityPage.getNumber())
                        .pageSize(scheduleEntityPage.getSize())
                        .totalElements(scheduleEntityPage.getTotalElements())
                        .totalPages(scheduleEntityPage.getTotalPages())
                        .build();
            }
        }
    }

    @Override
    public PageResponseOutDto<ScheduleSummaryDto> getAllSchedulesSummaryWithFilters(
            Long scheduleId, Long countryId,
            Long processId, String processSearch,
            Long moduleId, String moduleSearch,
            Long submoduleId, String submoduleSearch,
            Long stateId, String stateSearch,
            List<Long> countryIds, String countrySearch,
            String screenActionCode,
            String descriptionSearch,
            Long userId,
            int page, int size, String sort, String order, boolean all) {

        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return getAllSchedulesSummaryWithFiltersV1(scheduleId, countryId, processId, processSearch, moduleId, moduleSearch, submoduleId, submoduleSearch, stateId, stateSearch, countryIds, countrySearch, screenActionCode, descriptionSearch, userId, page, size, sort, order, all);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    public PageResponseOutDto<ScheduleSummaryDto> getAllSchedulesSummaryWithFiltersV1(
            Long scheduleId, Long countryId,
            Long processId, String processSearch,
            Long moduleId, String moduleSearch,
            Long submoduleId, String submoduleSearch,
            Long stateId, String stateSearch,
            List<Long> countryIds, String countrySearch,
            String screenActionCode,
            String descriptionSearch,
            Long userId,
            int page, int size, String sort, String order, boolean all) {

        log.debug("Start method getAllSchedulesSummaryWithFiltersV1 with filters: scheduleId={}, countryId={}, processId={}, processSearch={}, moduleId={}, moduleSearch={}, submoduleId={}, submoduleSearch={}, stateId={}, stateSearch={}, countryIds={}, countrySearch={}, screenActionCode={}, descriptionSearch={}, userId={}, page={}, size={}, sort={}, order={}, all={}",
                scheduleId, countryId, processId, processSearch, moduleId, moduleSearch, submoduleId, submoduleSearch, stateId, stateSearch, countryIds, countrySearch, screenActionCode, descriptionSearch, userId, page, size, sort, order, all);

        UserNuboEntity userNuboEntity = userNuboRepository.findById(userId)
                .orElseThrow(() -> new ServiceException(ErrorCode.USER_NOT_FOUND, HttpStatus.NOT_FOUND));

        UserTypeEnum userType = userNuboEntity.getUserType();

        validateUserType(userNuboEntity);

        Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
        Sort sortObj = Sort.by(direction, sort != null ? sort : "id");

        Specification<ScheduleEntity> specification = ScheduleSpecification.filterByWithDescriptionSearch(
                scheduleId, countryId,
                processId, processSearch,
                moduleId, moduleSearch,
                submoduleId, submoduleSearch,
                stateId, stateSearch,
                countryIds, countrySearch,
                screenActionCode,
                descriptionSearch,
                userType, userId);

        if (all) {
            List<ScheduleEntity> scheduleEntities = scheduleRepository.findAll(specification, sortObj);
            List<ScheduleSummaryDto> scheduleSummaryDtos = ScheduleMapperUtil.toSummaryDtoList(scheduleEntities);

            return PageResponseOutDto.<ScheduleSummaryDto>builder()
                    .content(scheduleSummaryDtos)
                    .pageNumber(0)
                    .pageSize(scheduleSummaryDtos.size())
                    .totalElements(scheduleSummaryDtos.size())
                    .totalPages(1)
                    .build();
        } else {
            Pageable pageable = PageRequest.of(page, size, sortObj);
            Page<ScheduleEntity> scheduleEntityPage = scheduleRepository.findAll(specification, pageable);
            List<ScheduleSummaryDto> scheduleSummaryDtos = ScheduleMapperUtil.toSummaryDtoList(scheduleEntityPage.getContent());

            return PageResponseOutDto.<ScheduleSummaryDto>builder()
                    .content(scheduleSummaryDtos)
                    .pageNumber(scheduleEntityPage.getNumber())
                    .pageSize(scheduleEntityPage.getSize())
                    .totalElements(scheduleEntityPage.getTotalElements())
                    .totalPages(scheduleEntityPage.getTotalPages())
                    .build();
        }
    }

    @Override
    public ScheduleDto getScheduleById(Long scheduleId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return getScheduleByIdV1(scheduleId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    public ScheduleDto getScheduleByIdV1(Long scheduleId) {
        log.debug("Start method getScheduleByIdV1 for scheduleId: {}", scheduleId);

        ScheduleEntity scheduleEntity = scheduleRepository.findById(scheduleId)
                .orElseThrow(() -> new ServiceException(ErrorCode.NOT_DATA_FOUND, HttpStatus.NOT_FOUND));

        ScheduleDto scheduleDto = ScheduleMapperUtil.toDto(scheduleEntity);
        if (scheduleEntity.getScreenAction() != null) {
            scheduleDto.setScreenActions(List.of(ScreenActionMapperUtil.toDto(scheduleEntity.getScreenAction())));
        }

        log.debug("End method getScheduleByIdV1, scheduleDto -> {}", scheduleDto);

        return scheduleDto;
    }

    @Override
    public PageResponseOutDto<ScheduleDto> getSchedulesByScreenActionCode(String screenActionCode, int page, int size, String sort, String order, boolean all) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return getSchedulesByScreenActionCodeV1(screenActionCode, page, size, sort, order, all);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    public PageResponseOutDto<ScheduleDto> getSchedulesByScreenActionCodeV1(String screenActionCode, int page, int size, String sort, String order, boolean all) {
        log.debug("Start method getSchedulesByScreenActionCodeV1 for screenActionCode: {}", screenActionCode);

        List<ScheduleEntity> scheduleEntities = scheduleRepository.findByScreenActionCode(screenActionCode);

        if (scheduleEntities.isEmpty()) {
            return PageResponseOutDto.<ScheduleDto>builder()
                    .content(List.of())
                    .pageNumber(0)
                    .pageSize(size)
                    .totalElements(0)
                    .totalPages(0)
                    .build();
        }

        Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
        Sort sortObj = Sort.by(direction, sort != null ? sort : "id");

        // Apply sorting manually since we're working with a list
        scheduleEntities.sort((e1, e2) -> {
            try {
                var field1 = e1.getClass().getDeclaredField(sortObj.iterator().next().getProperty());
                field1.setAccessible(true);
                var field2 = e2.getClass().getDeclaredField(sortObj.iterator().next().getProperty());
                field2.setAccessible(true);

                @SuppressWarnings("unchecked")
                Comparable<Object> value1 = (Comparable<Object>) field1.get(e1);
                Object value2 = field2.get(e2);

                if (value1 == null && value2 == null) return 0;
                if (value1 == null) return direction == Sort.Direction.ASC ? -1 : 1;
                if (value2 == null) return direction == Sort.Direction.ASC ? 1 : -1;

                return direction == Sort.Direction.ASC ? value1.compareTo(value2) : -value1.compareTo(value2);
            } catch (Exception e) {
                return 0;
            }
        });

        if (all) {
            List<ScheduleDto> scheduleDtos = ScheduleMapperUtil.toDtoList(scheduleEntities);
            return PageResponseOutDto.<ScheduleDto>builder()
                    .content(scheduleDtos)
                    .pageNumber(0)
                    .pageSize(scheduleDtos.size())
                    .totalElements(scheduleDtos.size())
                    .totalPages(1)
                    .build();
        } else {
            int start = page * size;
            int end = Math.min(start + size, scheduleEntities.size());

            if (start >= scheduleEntities.size()) {
                return PageResponseOutDto.<ScheduleDto>builder()
                        .content(List.of())
                        .pageNumber(page)
                        .pageSize(size)
                        .totalElements(scheduleEntities.size())
                        .totalPages((int) Math.ceil((double) scheduleEntities.size() / size))
                        .build();
            }

            List<ScheduleEntity> pageContent = scheduleEntities.subList(start, end);
            List<ScheduleDto> scheduleDtos = ScheduleMapperUtil.toDtoList(pageContent);

            return PageResponseOutDto.<ScheduleDto>builder()
                    .content(scheduleDtos)
                    .pageNumber(page)
                    .pageSize(size)
                    .totalElements(scheduleEntities.size())
                    .totalPages((int) Math.ceil((double) scheduleEntities.size() / size))
                    .build();
        }
    }

    private void validateUserType(UserNuboEntity userNuboEntity) {
        if (userNuboEntity.getUserType() == null) {
            throw new ServiceException(ErrorCode.USER_TYPE_ERROR, HttpStatus.NOT_FOUND);
        }
    }

    private boolean isExternalUser(UserNuboEntity userNuboEntity) {
        validateUserType(userNuboEntity);
        return UserTypeEnum.EXTERNAL.equals(userNuboEntity.getUserType());
    }
}

```

## src/main/java/com/nubo/schedule/query/api/service/impl/ScheduleStatusHistoryServiceImpl.java

```java
package com.nubo.schedule.query.api.service.impl;

import com.nubo.schedule.query.api.application.properties.PropertiesContext;
import com.nubo.schedule.query.api.exception.ServiceException;
import com.nubo.schedule.query.api.exception.error.ErrorCode;
import com.nubo.schedule.query.api.helpers.ScheduleStatusHistoryMapperUtil;
import com.nubo.schedule.query.api.models.dto.response.PageResponseOutDto;
import com.nubo.schedule.query.api.models.dto.response.ScheduleStatusHistoryDto;
import com.nubo.schedule.query.api.models.entity.ScheduleEntity;
import com.nubo.schedule.query.api.models.entity.ScheduleStatusHistoryEntity;
import com.nubo.schedule.query.api.models.entity.UserNuboEntity;
import com.nubo.schedule.query.api.models.enums.UserTypeEnum;
import com.nubo.schedule.query.api.models.enums.VersionApiEnum;
import com.nubo.schedule.query.api.repository.ScheduleRepository;
import com.nubo.schedule.query.api.repository.ScheduleStatusHistoryRepository;
import com.nubo.schedule.query.api.repository.UserNuboRepository;
import com.nubo.schedule.query.api.service.ScheduleStatusHistoryService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ScheduleStatusHistoryServiceImpl implements ScheduleStatusHistoryService {

    private final ScheduleStatusHistoryRepository scheduleStatusHistoryRepository;
    private final UserNuboRepository userNuboRepository;
    private final ScheduleRepository scheduleRepository;

    @Override
    public PageResponseOutDto<ScheduleStatusHistoryDto> getAllByUser(Long userId, int page, int size, String sort, String order, boolean all) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion()))==VersionApiEnum.V1) {
            return getAllByUserV1(userId, page, size, sort, order, all);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    public PageResponseOutDto<ScheduleStatusHistoryDto> getAllByUserV1(Long userId, int page, int size, String sort, String order, boolean all) {
        log.debug("Start method getAllByUserV1 for userId: {}", userId);

        UserNuboEntity userNuboEntity = userNuboRepository.findById(userId)
                .orElseThrow(() -> new ServiceException(ErrorCode.USER_NOT_FOUND, HttpStatus.NOT_FOUND));

        Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
        Sort sortObj = Sort.by(direction, sort != null ? sort : "id");

        if (all) {
            List<ScheduleStatusHistoryDto> statusHistory;
            if (userNuboEntity.getUserType()==UserTypeEnum.EXTERNAL) {
                log.debug("External user detected, filtering schedule status history by user schedules for userNuboId: {}", userId);
                statusHistory = ScheduleStatusHistoryMapperUtil.toDtoList(scheduleStatusHistoryRepository.findByScheduleUserNuboId(userId));
            } else {
                log.debug("Internal user detected, returning all schedule status history");
                statusHistory = ScheduleStatusHistoryMapperUtil.toDtoList(scheduleStatusHistoryRepository.findAll(sortObj));
            }
            
            return PageResponseOutDto.<ScheduleStatusHistoryDto>builder()
                    .content(statusHistory)
                    .pageNumber(0)
                    .pageSize(statusHistory.size())
                    .totalElements(statusHistory.size())
                    .totalPages(1)
                    .build();
        } else {
            Pageable pageable = PageRequest.of(page, size, sortObj);
            Page<ScheduleStatusHistoryEntity> pageResult;
            
            if (userNuboEntity.getUserType()==UserTypeEnum.EXTERNAL) {
                log.debug("External user detected, filtering schedule status history by user schedules for userNuboId: {}", userId);
                List<ScheduleStatusHistoryEntity> userHistory = scheduleStatusHistoryRepository.findByScheduleUserNuboId(userId);
                int start = (int) pageable.getOffset();
                int end = Math.min((start + pageable.getPageSize()), userHistory.size());
                List<ScheduleStatusHistoryEntity> pageContent = userHistory.subList(start, end);
                
                return PageResponseOutDto.<ScheduleStatusHistoryDto>builder()
                        .content(ScheduleStatusHistoryMapperUtil.toDtoList(pageContent))
                        .pageNumber(page)
                        .pageSize(size)
                        .totalElements(userHistory.size())
                        .totalPages((int) Math.ceil((double) userHistory.size() / size))
                        .build();
            } else {
                log.debug("Internal user detected, returning all schedule status history");
                pageResult = scheduleStatusHistoryRepository.findAll(pageable);
                
                return PageResponseOutDto.<ScheduleStatusHistoryDto>builder()
                        .content(ScheduleStatusHistoryMapperUtil.toDtoList(pageResult.getContent()))
                        .pageNumber(pageResult.getNumber())
                        .pageSize(pageResult.getSize())
                        .totalElements(pageResult.getTotalElements())
                        .totalPages(pageResult.getTotalPages())
                        .build();
            }
        }
    }

    @Override
    public PageResponseOutDto<ScheduleStatusHistoryDto> getByScheduleId(Long scheduleId, Long userId, int page, int size, String sort, String order, boolean all) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion()))==VersionApiEnum.V1) {
            return getByScheduleIdV1(scheduleId, userId, page, size, sort, order, all);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    public PageResponseOutDto<ScheduleStatusHistoryDto> getByScheduleIdV1(Long scheduleId, Long userId, int page, int size, String sort, String order, boolean all) {
        log.debug("Start method getByScheduleIdV1 for scheduleId: {} and userId: {}", scheduleId, userId);

        UserNuboEntity userNuboEntity = userNuboRepository.findById(userId)
                .orElseThrow(() -> new ServiceException(ErrorCode.USER_NOT_FOUND, HttpStatus.NOT_FOUND));

        ScheduleEntity scheduleEntity = scheduleRepository.findById(scheduleId)
                .orElseThrow(() -> new ServiceException(ErrorCode.NOT_FOUND, HttpStatus.NOT_FOUND));

        if (userNuboEntity.getUserType()==UserTypeEnum.EXTERNAL) {
            if (!scheduleEntity.getUserNubo().getId().equals(userId)) {
                log.debug("External user {} does not have access to schedule {}", userId, scheduleId);
                throw new ServiceException(ErrorCode.FORBIDDEN, HttpStatus.FORBIDDEN);
            }
        }

        log.debug("Returning schedule status history for scheduleId: {}", scheduleId);
        
        if (all) {
            List<ScheduleStatusHistoryEntity> allResults = scheduleStatusHistoryRepository.findByScheduleIdOrderByTimeDesc(scheduleId);
            
            return PageResponseOutDto.<ScheduleStatusHistoryDto>builder()
                    .content(ScheduleStatusHistoryMapperUtil.toDtoList(allResults))
                    .pageNumber(0)
                    .pageSize(allResults.size())
                    .totalElements(allResults.size())
                    .totalPages(1)
                    .build();
        } else {
            List<ScheduleStatusHistoryEntity> allHistory = scheduleStatusHistoryRepository.findByScheduleIdOrderByTimeDesc(scheduleId);
            int start = page * size;
            int end = Math.min((start + size), allHistory.size());
            List<ScheduleStatusHistoryEntity> pageContent = allHistory.subList(start, end);
            
            return PageResponseOutDto.<ScheduleStatusHistoryDto>builder()
                    .content(ScheduleStatusHistoryMapperUtil.toDtoList(pageContent))
                    .pageNumber(page)
                    .pageSize(size)
                    .totalElements(allHistory.size())
                    .totalPages((int) Math.ceil((double) allHistory.size() / size))
                    .build();
        }
    }
}
```

## src/main/java/com/nubo/schedule/query/api/service/impl/ScreenActionServiceImpl.java

```java
package com.nubo.schedule.query.api.service.impl;

import com.nubo.schedule.query.api.application.properties.PropertiesContext;
import com.nubo.schedule.query.api.exception.ServiceException;
import com.nubo.schedule.query.api.exception.error.ErrorCode;
import com.nubo.schedule.query.api.helpers.MapperPageUtil;
import com.nubo.schedule.query.api.helpers.ScreenActionMapperUtil;
import com.nubo.schedule.query.api.models.dto.request.ParamsPageInDto;
import com.nubo.schedule.query.api.models.dto.response.PageResponseDto;
import com.nubo.schedule.query.api.models.dto.response.ScreenActionDto;
import com.nubo.schedule.query.api.models.entity.ScreenActionEntity;
import com.nubo.schedule.query.api.models.enums.VersionApiEnum;
import com.nubo.schedule.query.api.repository.ScreenActionRepository;
import com.nubo.schedule.query.api.service.ScreenActionService;
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
public class ScreenActionServiceImpl implements ScreenActionService {

    private final ScreenActionRepository screenActionRepository;

    @Override
    public PageResponseDto<ScreenActionDto> getScreenActions(ParamsPageInDto paramsPageInDto, Integer moduleId, Integer submoduleId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return getScreenActionsV1(paramsPageInDto, moduleId, submoduleId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseDto<ScreenActionDto> getScreenActionsV1(ParamsPageInDto paramsPageInDto, Integer moduleId, Integer submoduleId) {
        log.info("Start method getScreenActionsV1");

        Specification<ScreenActionEntity> screenActionSpecification = screenActionSpecification(moduleId, submoduleId);

        PageResponseDto<ScreenActionDto> pageResponseOutDto;
        List<ScreenActionDto> screenActionDtoList = new ArrayList<>();
        if (paramsPageInDto.isAll()) {
            List<ScreenActionEntity> screenActionEntityList = screenActionRepository.findAll(screenActionSpecification);

            screenActionEntityList.forEach(screenActionEntity ->
                    screenActionDtoList.add(ScreenActionMapperUtil.toDto(screenActionEntity)));

            pageResponseOutDto = buildPageResponseScreenActions(screenActionDtoList,
                    0, screenActionDtoList.size(), screenActionDtoList.size());
        } else {
            Sort sortBy = paramsPageInDto.getOrder().equalsIgnoreCase(Sort.Direction.ASC.name())
                    ? Sort.by(Sort.Order.asc(paramsPageInDto.getSort()), Sort.Order.asc("id"))
                    : Sort.by(Sort.Order.desc(paramsPageInDto.getSort()), Sort.Order.desc("id"));
            Pageable pageable = PageRequest.of(paramsPageInDto.getPage(), paramsPageInDto.getSize(), sortBy);

            Page<ScreenActionEntity> screenActionEntityPage = screenActionRepository.findAll(screenActionSpecification,
                    pageable);

            screenActionEntityPage.getContent().forEach(guaranteeLimitsEntity ->
                    screenActionDtoList.add(ScreenActionMapperUtil.toDto(guaranteeLimitsEntity)));

            pageResponseOutDto = buildPageResponseScreenActions(screenActionDtoList,
                    paramsPageInDto.getPage(), paramsPageInDto.getSize(), (int) screenActionEntityPage.getTotalElements());
        }

        log.debug("End method getScreenActionsV1, pageResponseOutDto -> {}", pageResponseOutDto);

        return pageResponseOutDto;
    }

    private Specification<ScreenActionEntity> screenActionSpecification(Integer moduleId, Integer submoduleId) {
        return (root, query, criteriaBuilder) -> {
            // JOIN FETCH para optimizar la carga de ScreenEntity
            if (query != null && query.getResultType() != Long.class && query.getResultType() != long.class) {
                root.fetch("screen", jakarta.persistence.criteria.JoinType.INNER);
            }
            
            List<Predicate> predicates = new ArrayList<>();
            
            // Filtrar por ScreenActionEntity -> ScreenEntity -> moduleId
            if (moduleId != null) {
                predicates.add(criteriaBuilder.equal(root.get("screen").get("moduleId"), moduleId));
            }
            
            // Filtrar por ScreenActionEntity -> ScreenEntity -> submoduleId
            if (submoduleId != null) {
                predicates.add(criteriaBuilder.equal(root.get("screen").get("submoduleId"), submoduleId));
            }
            
            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }

    private PageResponseDto<ScreenActionDto> buildPageResponseScreenActions(
            List<ScreenActionDto> content, int page, int size, int totalElements) {
        Page<ScreenActionDto> guaranteeLimitPage = new PageImpl<>(content,
                PageRequest.of(page, size), totalElements);
        return MapperPageUtil.pageToPageResponseOutDto(content, guaranteeLimitPage);
    }

}

```

## src/main/java/com/nubo/schedule/query/api/service/impl/ScreenServiceImpl.java

```java
package com.nubo.schedule.query.api.service.impl;

import com.nubo.schedule.query.api.application.properties.PropertiesContext;
import com.nubo.schedule.query.api.exception.ServiceException;
import com.nubo.schedule.query.api.exception.error.ErrorCode;
import com.nubo.schedule.query.api.helpers.ScreenMapperUtil;
import com.nubo.schedule.query.api.models.dto.response.PageResponseOutDto;
import com.nubo.schedule.query.api.models.dto.response.ScreenDto;
import com.nubo.schedule.query.api.models.entity.ScreenEntity;
import com.nubo.schedule.query.api.models.enums.VersionApiEnum;
import com.nubo.schedule.query.api.repository.ScreenRepository;
import com.nubo.schedule.query.api.service.ScreenService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ScreenServiceImpl implements ScreenService {

    private final ScreenRepository screenRepository;

    @Override
    public PageResponseOutDto<ScreenDto> getAllByUser(Long userId, int page, int size, String sort, String order, boolean all) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion()))==VersionApiEnum.V1) {
            return getAllByUserV1(userId, page, size, sort, order, all);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    public PageResponseOutDto<ScreenDto> getAllByUserV1(Long userId, int page, int size, String sort, String order, boolean all) {
        log.debug("Start method getAllByUserV1 for userId: {}", userId);

        Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
        Sort sortObj = Sort.by(direction, sort != null ? sort : "id");

        if (all) {
            List<ScreenEntity> allResults = screenRepository.findAll(sortObj);
            List<ScreenDto> screens = ScreenMapperUtil.toDtoList(allResults);
            
            return PageResponseOutDto.<ScreenDto>builder()
                    .content(screens)
                    .pageNumber(0)
                    .pageSize(screens.size())
                    .totalElements(screens.size())
                    .totalPages(1)
                    .build();
        } else {
            Pageable pageable = PageRequest.of(page, size, sortObj);
            Page<ScreenEntity> pageResult = screenRepository.findAll(pageable);
            
            return PageResponseOutDto.<ScreenDto>builder()
                    .content(ScreenMapperUtil.toDtoList(pageResult.getContent()))
                    .pageNumber(pageResult.getNumber())
                    .pageSize(pageResult.getSize())
                    .totalElements(pageResult.getTotalElements())
                    .totalPages(pageResult.getTotalPages())
                    .build();
        }
    }
}
```

## src/main/java/com/nubo/schedule/query/api/service/impl/StatusServiceImpl.java

```java
package com.nubo.schedule.query.api.service.impl;

import com.nubo.schedule.query.api.application.properties.PropertiesContext;
import com.nubo.schedule.query.api.exception.ServiceException;
import com.nubo.schedule.query.api.exception.error.ErrorCode;
import com.nubo.schedule.query.api.helpers.StatusMapperUtil;
import com.nubo.schedule.query.api.models.dto.response.PageResponseOutDto;
import com.nubo.schedule.query.api.models.dto.response.StatusDto;
import com.nubo.schedule.query.api.models.enums.VersionApiEnum;
import com.nubo.schedule.query.api.repository.StatusRepository;
import com.nubo.schedule.query.api.service.StatusService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class StatusServiceImpl implements StatusService {

    private final StatusRepository statusRepository;

    @Override
    public PageResponseOutDto<StatusDto> getByCategory(String category, int page, int size, String sort, String order, boolean all) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion()))==VersionApiEnum.V1) {
            return getByCategoryV1(category, page, size, sort, order, all);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    public PageResponseOutDto<StatusDto> getByCategoryV1(String category, int page, int size, String sort, String order, boolean all) {
        log.debug("Start method getByCategoryV1 for category: {}", category);

        List<StatusDto> allStatuses = StatusMapperUtil.toDtoList(statusRepository.findByCategory(category));
        
        if (all) {
            return PageResponseOutDto.<StatusDto>builder()
                    .content(allStatuses)
                    .pageNumber(0)
                    .pageSize(allStatuses.size())
                    .totalElements(allStatuses.size())
                    .totalPages(1)
                    .build();
        }

        // Manual pagination for statuses list
        int totalElements = allStatuses.size();
        int totalPages = (int) Math.ceil((double) totalElements / size);
        int startIndex = page * size;
        int endIndex = Math.min(startIndex + size, totalElements);
        
        List<StatusDto> paginatedContent = startIndex < totalElements 
                ? allStatuses.subList(startIndex, endIndex) 
                : List.of();
        
        return PageResponseOutDto.<StatusDto>builder()
                .content(paginatedContent)
                .pageNumber(page)
                .pageSize(size)
                .totalElements(totalElements)
                .totalPages(totalPages)
                .build();
    }
}
```

## src/main/java/com/nubo/schedule/query/api/service/impl/SubmoduleServiceImpl.java

```java
package com.nubo.schedule.query.api.service.impl;

import com.nubo.schedule.query.api.application.properties.PropertiesContext;
import com.nubo.schedule.query.api.exception.ServiceException;
import com.nubo.schedule.query.api.exception.error.ErrorCode;
import com.nubo.schedule.query.api.helpers.SubmoduleMapperUtil;
import com.nubo.schedule.query.api.helpers.specification.SubmoduleSpecification;
import com.nubo.schedule.query.api.models.dto.response.PageResponseOutDto;
import com.nubo.schedule.query.api.models.dto.response.SubmoduleDto;
import com.nubo.schedule.query.api.models.entity.SubmoduleEntity;
import com.nubo.schedule.query.api.models.enums.VersionApiEnum;
import com.nubo.schedule.query.api.repository.SubmoduleRepository;
import com.nubo.schedule.query.api.service.SubmoduleService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class SubmoduleServiceImpl implements SubmoduleService {

    private final SubmoduleRepository submoduleRepository;

    @Override
    public PageResponseOutDto<SubmoduleDto> getAllByUser(Long userId, int page, int size, String sort, String order, boolean all) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion()))==VersionApiEnum.V1) {
            return getAllByUserV1(userId, page, size, sort, order, all);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    public PageResponseOutDto<SubmoduleDto> getAllByUserV1(Long userId, int page, int size, String sort, String order, boolean all) {
        log.debug("Start method getAllByUserV1 for userId: {}", userId);

        Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
        Sort sortObj = Sort.by(direction, sort != null ? sort : "id");

        if (all) {
            List<SubmoduleEntity> allResults = submoduleRepository.findAll(sortObj);
            List<SubmoduleDto> submodules = SubmoduleMapperUtil.toDtoList(allResults);
            
            return PageResponseOutDto.<SubmoduleDto>builder()
                    .content(submodules)
                    .pageNumber(0)
                    .pageSize(submodules.size())
                    .totalElements(submodules.size())
                    .totalPages(1)
                    .build();
        } else {
            Pageable pageable = PageRequest.of(page, size, sortObj);
            Page<SubmoduleEntity> pageResult = submoduleRepository.findAll(pageable);
            
            return PageResponseOutDto.<SubmoduleDto>builder()
                    .content(SubmoduleMapperUtil.toDtoList(pageResult.getContent()))
                    .pageNumber(pageResult.getNumber())
                    .pageSize(pageResult.getSize())
                    .totalElements(pageResult.getTotalElements())
                    .totalPages(pageResult.getTotalPages())
                    .build();
        }
    }

    @Override
    public PageResponseOutDto<SubmoduleDto> getAllByModuleWithFilters(Long moduleId, String description, int page, int size, String sort, String order, boolean all) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion()))==VersionApiEnum.V1) {
            return getAllByModuleWithFiltersV1(moduleId, description, page, size, sort, order, all);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    public PageResponseOutDto<SubmoduleDto> getAllByModuleWithFiltersV1(Long moduleId, String description, int page, int size, String sort, String order, boolean all) {
        log.debug("Start method getAllByModuleWithFiltersV1 for moduleId: {}, description: {}", moduleId, description);

        Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
        Sort sortObj = Sort.by(direction, sort != null ? sort : "id");

        if (all) {
            List<SubmoduleEntity> allResults = submoduleRepository.findAll(
                    SubmoduleSpecification.filterBy(moduleId, description),
                    sortObj
            );
            
            return PageResponseOutDto.<SubmoduleDto>builder()
                    .content(SubmoduleMapperUtil.toDtoList(allResults))
                    .pageNumber(0)
                    .pageSize(allResults.size())
                    .totalElements(allResults.size())
                    .totalPages(1)
                    .build();
        } else {
            Pageable pageable = PageRequest.of(page, size, sortObj);
            Page<SubmoduleEntity> pageResult = submoduleRepository.findAll(
                    SubmoduleSpecification.filterBy(moduleId, description),
                    pageable
            );

            return PageResponseOutDto.<SubmoduleDto>builder()
                    .content(SubmoduleMapperUtil.toDtoList(pageResult.getContent()))
                    .pageNumber(pageResult.getNumber())
                    .pageSize(pageResult.getSize())
                    .totalElements(pageResult.getTotalElements())
                    .totalPages(pageResult.getTotalPages())
                    .build();
        }
    }
}
```

## src/main/java/com/nubo/schedule/query/api/service/impl/TypeServiceImpl.java

```java
package com.nubo.schedule.query.api.service.impl;

import com.nubo.schedule.query.api.application.properties.PropertiesContext;
import com.nubo.schedule.query.api.exception.ServiceException;
import com.nubo.schedule.query.api.exception.error.ErrorCode;
import com.nubo.schedule.query.api.helpers.TypeMapperUtil;
import com.nubo.schedule.query.api.models.dto.response.PageResponseOutDto;
import com.nubo.schedule.query.api.models.dto.response.TypeDto;
import com.nubo.schedule.query.api.models.entity.TypeEntity;
import com.nubo.schedule.query.api.models.enums.VersionApiEnum;
import com.nubo.schedule.query.api.repository.TypeRepository;
import com.nubo.schedule.query.api.service.TypeService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class TypeServiceImpl implements TypeService {

    private final TypeRepository typeRepository;

    @Override
    public PageResponseOutDto<TypeDto> getByCategory(String category, int page, int size, String sort, String order, boolean all) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion()))==VersionApiEnum.V1) {
            return getByCategoryV1(category, page, size, sort, order, all);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    public PageResponseOutDto<TypeDto> getByCategoryV1(String category, int page, int size, String sort, String order, boolean all) {
        log.debug("Start method getByCategoryV1 for category: {}", category);

        if (all) {
            List<TypeEntity> allResults = typeRepository.findByCategory(category);
            List<TypeDto> types = TypeMapperUtil.toDtoList(allResults);
            
            return PageResponseOutDto.<TypeDto>builder()
                    .content(types)
                    .pageNumber(0)
                    .pageSize(types.size())
                    .totalElements(types.size())
                    .totalPages(1)
                    .build();
        } else {
            // Como findByCategory no soporta Pageable, vamos a usar paginación manual
            List<TypeEntity> allResults = typeRepository.findByCategory(category);
            int start = page * size;
            int end = Math.min((start + size), allResults.size());
            List<TypeEntity> pageContent = allResults.subList(start, end);
            
            return PageResponseOutDto.<TypeDto>builder()
                    .content(TypeMapperUtil.toDtoList(pageContent))
                    .pageNumber(page)
                    .pageSize(size)
                    .totalElements(allResults.size())
                    .totalPages((int) Math.ceil((double) allResults.size() / size))
                    .build();
        }
    }
}
```

## src/main/java/com/nubo/schedule/query/api/web/controller/CountryRestController.java

```java
package com.nubo.schedule.query.api.web.controller;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nubo.schedule.query.api.application.annotations.RateLimited;
import com.nubo.schedule.query.api.models.dto.response.CountryDto;
import com.nubo.schedule.query.api.models.dto.response.PageResponseOutDto;
import com.nubo.schedule.query.api.models.dto.response.TimeZoneDto;
import com.nubo.schedule.query.api.service.CountryService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;



@Tag(name = "Country Operation")
@RestController
@RequestMapping("/{version}/country-operation")
@RequiredArgsConstructor
@RateLimited
public class CountryRestController {

    private final CountryService countryService;

    @Operation(
            summary = "Get country list by allowed country codes",
            description = "Returns the list of countries available for the allowed country codes (CL, CO, PE)"
    )
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully retrieved countries",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = CountryDto[].class)))})
    @GetMapping("/countries")
    public ResponseEntity<PageResponseOutDto<CountryDto>> getCountries(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "100") int size,
            @RequestParam(defaultValue = "id") String sort,
            @RequestParam(defaultValue = "asc") String order,
            @RequestParam(defaultValue = "false") boolean all) {

        return ResponseEntity.ok(countryService.getByCountryCodes(page, size, sort, order, all));
    }

    @Operation(
            summary = "Get timezone by country ID",
            description = "Returns the timezone for the specified country ID"
    )
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully retrieved timezone",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = PageResponseOutDto.class)))})
    @GetMapping("/countries/{countryId}/timezone")
    public ResponseEntity<PageResponseOutDto<TimeZoneDto>> getTimeZoneByCountryId(
            @PathVariable Long countryId,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "100") int size,
            @RequestParam(defaultValue = "id") String sort,
            @RequestParam(defaultValue = "asc") String order,
            @RequestParam(defaultValue = "false") boolean all) {

        return ResponseEntity.ok(countryService.getTimeZoneByCountryId(countryId, page, size, sort, order, all));
    }
}
```

## src/main/java/com/nubo/schedule/query/api/web/controller/FrequencyRestController.java

```java
package com.nubo.schedule.query.api.web.controller;

import com.nubo.schedule.query.api.application.annotations.RateLimited;
import com.nubo.schedule.query.api.models.dto.response.FrequencyDto;
import com.nubo.schedule.query.api.models.dto.response.PageResponseOutDto;
import com.nubo.schedule.query.api.service.FrequencyService;
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

@Tag(name = "Frequency Operation")
@RestController
@RequestMapping("/{version}/frequency-operation")
@RequiredArgsConstructor
@RateLimited
public class FrequencyRestController {

    private final FrequencyService frequencyService;

    @Operation(
            summary = "Get frequency list by user",
            description = "Returns the list of frequencies available for the specified user"
    )
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully retrieved frequencies",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = PageResponseOutDto.class)))})
    @GetMapping("/frequencies/{userId}")
    public ResponseEntity<PageResponseOutDto<FrequencyDto>> getFrequenciesByUser(
            @PathVariable Long userId,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "100") int size,
            @RequestParam(defaultValue = "id") String sort,
            @RequestParam(defaultValue = "asc") String order,
            @RequestParam(defaultValue = "false") boolean all) {

        return ResponseEntity.ok(frequencyService.getAllByUser(userId, page, size, sort, order, all));
    }
}
```

## src/main/java/com/nubo/schedule/query/api/web/controller/MicroserviceRestController.java

```java
package com.nubo.schedule.query.api.web.controller;

import com.nubo.schedule.query.api.application.annotations.RateLimited;
import com.nubo.schedule.query.api.models.dto.response.MicroserviceDto;
import com.nubo.schedule.query.api.service.MicroserviceService;
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

import com.nubo.schedule.query.api.models.dto.response.PageResponseOutDto;

@Tag(name = "Microservice Operation")
@RestController
@RequestMapping("/{version}/microservice-operation")
@RequiredArgsConstructor
@RateLimited
public class MicroserviceRestController {

    private final MicroserviceService microserviceService;

    @Operation(
            summary = "Get microservice list by user",
            description = "Returns the list of microservices available for the specified user"
    )
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully retrieved microservices",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = PageResponseOutDto.class)))})
    @GetMapping("/microservices/{userId}")
    public ResponseEntity<PageResponseOutDto<MicroserviceDto>> getMicroservicesByUser(
            @PathVariable Long userId,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "100") int size,
            @RequestParam(defaultValue = "id") String sort,
            @RequestParam(defaultValue = "asc") String order,
            @RequestParam(defaultValue = "false") boolean all) {

        return ResponseEntity.ok(microserviceService.getAllByUser(userId, page, size, sort, order, all));
    }

    @Operation(
            summary = "Get microservices by submodule and name",
            description = "Returns the list of microservices filtered by optional submodule ID and name (supports LIKE search)"
    )
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully retrieved microservices",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = PageResponseOutDto.class)))})
    @GetMapping("/microservices")
    public ResponseEntity<PageResponseOutDto<MicroserviceDto>> getMicroservicesBySubmoduleAndName(
            @RequestParam(required = false) Integer submoduleId,
            @RequestParam(required = false) String name,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "100") int size,
            @RequestParam(defaultValue = "id") String sort,
            @RequestParam(defaultValue = "asc") String order,
            @RequestParam(defaultValue = "false") boolean all) {

        return ResponseEntity.ok(microserviceService.getBySubmoduleIdAndName(submoduleId, name, page, size, sort, order, all));
    }
}
```

## src/main/java/com/nubo/schedule/query/api/web/controller/ModuleRestController.java

```java
package com.nubo.schedule.query.api.web.controller;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nubo.schedule.query.api.application.annotations.RateLimited;
import com.nubo.schedule.query.api.models.dto.response.ModuleDto;
import com.nubo.schedule.query.api.models.dto.response.PageResponseOutDto;
import com.nubo.schedule.query.api.service.ModuleService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@Tag(name = "Module Operation")
@RestController
@RequestMapping("/{version}/module-operation")
@RequiredArgsConstructor
@RateLimited
public class ModuleRestController {

    private final ModuleService moduleService;

    @Operation(
            summary = "Get module list by user",
            description = "Returns the list of modules available for the specified user"
    )
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully retrieved modules",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = PageResponseOutDto.class)))})
    @GetMapping("/modules/{userId}")
    public ResponseEntity<PageResponseOutDto<ModuleDto>> getModulesByUser(
            @PathVariable Long userId,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "100") int size,
            @RequestParam(defaultValue = "id") String sort,
            @RequestParam(defaultValue = "asc") String order,
            @RequestParam(defaultValue = "false") boolean all) {

        return ResponseEntity.ok(moduleService.getAllByUser(userId, page, size, sort, order, all));
    }

    @Operation(
            summary = "Search modules with multiple filters",
            description = "Returns a paginated list of modules filtered by name, description, category ID, or module ID. All filters are optional and can be combined."
    )
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully retrieved modules",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = PageResponseOutDto.class)))})
    @GetMapping("/modules/search")
    public ResponseEntity<PageResponseOutDto<ModuleDto>> searchModules(
            @RequestParam(required = false) String name,
            @RequestParam(required = false) String description,
            @RequestParam(required = false) Integer categoryId,
            @RequestParam(required = false) Integer id,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "100") int size,
            @RequestParam(defaultValue = "id") String sort,
            @RequestParam(defaultValue = "asc") String order,
            @RequestParam(defaultValue = "false") boolean all) {

        return ResponseEntity.ok(moduleService.searchModules(name, description, categoryId, id, page, size, sort, order, all));
    }
}
```

## src/main/java/com/nubo/schedule/query/api/web/controller/ProcessRestController.java

```java
package com.nubo.schedule.query.api.web.controller;

import com.nubo.schedule.query.api.application.annotations.RateLimited;
import com.nubo.schedule.query.api.models.dto.response.PageResponseOutDto;
import com.nubo.schedule.query.api.models.dto.response.ProcessDto;
import com.nubo.schedule.query.api.service.ProcessService;
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

@Tag(name = "Process Operation")
@RestController
@RequestMapping("/{version}/process-operation")
@RequiredArgsConstructor
@RateLimited
public class ProcessRestController {

    private final ProcessService processService;

    @Operation(
            summary = "Get process list by user",
            description = "Returns the list of processes available for the specified user"
    )
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully retrieved processes",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = ProcessDto[].class)))})
    @GetMapping("/processes/{userId}")
    public ResponseEntity<PageResponseOutDto<ProcessDto>> getProcessesByUser(
            @PathVariable Long userId,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "id") String sort,
            @RequestParam(defaultValue = "asc") String order,
            @RequestParam(defaultValue = "false") boolean all) {

        return ResponseEntity.ok(processService.getAllByUser(userId, page, size, sort, order, all));
    }

    @Operation(
            summary = "Get process list with filters",
            description = "Returns a paginated list of processes with optional process and description filters"
    )
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully retrieved processes",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = PageResponseOutDto.class)))})
    @GetMapping("/processes")
    public ResponseEntity<PageResponseOutDto<ProcessDto>> getProcessesByProcessWithFilters(
            @RequestParam(required = false) Long processId,
            @RequestParam(required = false) String description,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "id") String sort,
            @RequestParam(defaultValue = "asc") String order,
            @RequestParam(defaultValue = "false") boolean all) {

        return ResponseEntity.ok(processService.getAllByProcessWithFilters(processId, description, page, size, sort, order, all));
    }

    @Operation(
            summary = "Get processes by microservice and description",
            description = "Returns the list of processes filtered by optional microservice ID and description (supports LIKE search)"
    )
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully retrieved processes",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = ProcessDto[].class)))})
    @GetMapping("/processes/search")
    public ResponseEntity<PageResponseOutDto<ProcessDto>> getProcessesByMicroserviceAndDescription(
            @RequestParam(required = false) Integer microserviceId,
            @RequestParam(required = false) String description,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "id") String sort,
            @RequestParam(defaultValue = "asc") String order,
            @RequestParam(defaultValue = "false") boolean all) {

        return ResponseEntity.ok(processService.getByMicroserviceIdAndDescription(microserviceId, description, page, size, sort, order, all));
    }
}
```

## src/main/java/com/nubo/schedule/query/api/web/controller/RejectionReasonRestController.java

```java
package com.nubo.schedule.query.api.web.controller;

import com.nubo.schedule.query.api.application.annotations.RateLimited;
import com.nubo.schedule.query.api.models.dto.response.PageResponseOutDto;
import com.nubo.schedule.query.api.models.dto.response.RejectionReasonDto;
import com.nubo.schedule.query.api.service.RejectionReasonService;
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

@Tag(name = "Rejection Reason Operation")
@RestController
@RequestMapping("/{version}/rejection-reason-operation")
@RequiredArgsConstructor
@RateLimited
public class RejectionReasonRestController {

    private final RejectionReasonService rejectionReasonService;

    @Operation(
            summary = "Get rejection reason list by optional category and reason filters",
            description = "Returns the list of rejection reasons filtered by optional category and/or reason parameters. If no parameters provided, returns all rejection reasons"
    )
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully retrieved rejection reasons",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = PageResponseOutDto.class)))})
    @GetMapping("/rejection-reasons")
    public ResponseEntity<PageResponseOutDto<RejectionReasonDto>> getRejectionReasonsByCategoryAndReason(
            @RequestParam(required = false) String category,
            @RequestParam(required = false) String reason,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "id") String sort,
            @RequestParam(defaultValue = "asc") String order,
            @RequestParam(defaultValue = "false") boolean all) {

        return ResponseEntity.ok(rejectionReasonService.getByCategoryAndReason(category, reason, page, size, sort, order, all));
    }
}
```

## src/main/java/com/nubo/schedule/query/api/web/controller/RelatedScheduleRestController.java

```java
package com.nubo.schedule.query.api.web.controller;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nubo.schedule.query.api.application.annotations.RateLimited;
import com.nubo.schedule.query.api.models.dto.response.PageResponseOutDto;
import com.nubo.schedule.query.api.models.dto.response.ScheduleAssociationDto;
import com.nubo.schedule.query.api.service.RelatedScheduleService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@Tag(name = "Related Schedule Operation")
@RestController
@RequestMapping("/{version}/related-schedule-operation")
@RequiredArgsConstructor
@RateLimited
public class RelatedScheduleRestController {

    private final RelatedScheduleService relatedScheduleService;

    @Operation(
            summary = "Get related schedule list by schedule ID",
            description = "Returns the list of related schedules for the specified schedule ID. Schedule ID parameter is required."
    )
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully retrieved related schedules",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = PageResponseOutDto.class)))})
    @GetMapping("/related-schedules")
    public ResponseEntity<PageResponseOutDto<ScheduleAssociationDto>> getRelatedSchedulesByScheduleId(
            @RequestParam Long scheduleId,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "relatedScheduleId") String sort,
            @RequestParam(defaultValue = "asc") String order,
            @RequestParam(defaultValue = "false") boolean all) {

        return ResponseEntity.ok(relatedScheduleService.getAllByScheduleId(scheduleId, page, size, sort, order, all));
    }

}
```

## src/main/java/com/nubo/schedule/query/api/web/controller/ScheduleLogRestController.java

```java
package com.nubo.schedule.query.api.web.controller;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nubo.schedule.query.api.application.annotations.RateLimited;
import com.nubo.schedule.query.api.models.dto.response.PageResponseOutDto;
import com.nubo.schedule.query.api.models.dto.response.ScheduleLogDto;
import com.nubo.schedule.query.api.service.ScheduleLogService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@Tag(name = "Schedule Log Operation")
@RestController
@RequestMapping("/{version}/schedule-log-operation")
@RequiredArgsConstructor
@RateLimited
public class ScheduleLogRestController {

    private final ScheduleLogService scheduleLogService;

    @Operation(
            summary = "Get schedule log list by schedule ID",
            description = "Returns the list of schedule logs for the specified schedule ID. Schedule ID parameter is optional."
    )
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully retrieved schedule logs",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = PageResponseOutDto.class)))})
    @GetMapping("/schedule-logs")
    public ResponseEntity<PageResponseOutDto<ScheduleLogDto>> getScheduleLogsByScheduleId(
            @RequestParam(required = false) Long scheduleId,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "100") int size,
            @RequestParam(defaultValue = "scheduleLogId") String sort,
            @RequestParam(defaultValue = "asc") String order,
            @RequestParam(defaultValue = "false") boolean all) {

        return ResponseEntity.ok(scheduleLogService.getAllByScheduleId(scheduleId, page, size, sort, order, all));
    }

}
```

## src/main/java/com/nubo/schedule/query/api/web/controller/ScheduleRestController.java

```java
package com.nubo.schedule.query.api.web.controller;

import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nubo.schedule.query.api.application.annotations.RateLimited;
import com.nubo.schedule.query.api.models.dto.response.PageResponseOutDto;
import com.nubo.schedule.query.api.models.dto.response.ScheduleDto;
import com.nubo.schedule.query.api.models.dto.response.ScheduleSummaryDto;
import com.nubo.schedule.query.api.service.ScheduleService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@Tag(name = "Schedule Operation")
@RestController
@RequestMapping("/{version}/schedule-operation")
@RequiredArgsConstructor
@RateLimited
public class ScheduleRestController {

    private final ScheduleService scheduleService;

    @Operation(
            summary = "Get schedule list by user",
            description = "Returns the list of schedules available for the specified user with user type validation"
    )
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully retrieved schedules",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = ScheduleDto[].class)))})
    @GetMapping("/schedules/{userId}")
    public ResponseEntity<PageResponseOutDto<ScheduleDto>> getSchedulesByUser(
            @PathVariable Long userId,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "id") String sort,
            @RequestParam(defaultValue = "asc") String order,
            @RequestParam(defaultValue = "false") boolean all) {

        return ResponseEntity.ok(scheduleService.getAllByUser(userId, page, size, sort, order, all));
    }

    @Operation(
            summary = "Get schedule list without user",
            description = "Returns the list of schedules available for the specified user without user. " +
                    "Adding extendClosingTime for OTCLoan which is going to set a fixed value"
    )
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully retrieved schedules",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = ScheduleDto[].class)))})
    @GetMapping("/schedules")
    public ResponseEntity<PageResponseOutDto<ScheduleDto>> getAllSchedulesWithoutUser(
            @RequestParam List<String> countryCodes,
            @RequestParam(required = false) List<String> screenActionCodes,
            @RequestParam(required = false) List<Long> processIds,
            @RequestParam(defaultValue = "false") boolean extendClosingTime,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "id") String sort,
            @RequestParam(defaultValue = "asc") String order) {
        return ResponseEntity.ok(scheduleService.getAllSchedulesWithoutUser(countryCodes, screenActionCodes, processIds, extendClosingTime,
                page, size, sort, order));
    }

    @Operation(
            summary = "Get schedule details by ID",
            description = "Returns the detailed information of a schedule by its ID"
    )
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully retrieved schedule details",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = ScheduleDto.class)))})
    @GetMapping("/schedule/detail/{scheduleId}")
    public ResponseEntity<ScheduleDto> getScheduleById(
            @PathVariable Long scheduleId) {

        return ResponseEntity.ok(scheduleService.getScheduleById(scheduleId));
    }

    @Operation(
            summary = "Get all schedules with filters",
            description = "Returns a paginated list of schedules filtered by various criteria with user type validation. Optional filters can be passed via headers: X-Schedule-Id, X-Country-Id, X-Process-Id"
    )
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully retrieved filtered schedules",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = PageResponseOutDto.class)))})
    @GetMapping("/schedules/search")
    public ResponseEntity<PageResponseOutDto<ScheduleDto>> getAllSchedulesWithFilters(
            @RequestParam(required = false) Long scheduleId,
            @RequestParam(required = false) Long countryId,
            @RequestParam(required = false) Long processId,
            @RequestParam(required = false) String processSearch,
            @RequestParam(required = false) Long moduleId,
            @RequestParam(required = false) String moduleSearch,
            @RequestParam(required = false) Long submoduleId,
            @RequestParam(required = false) String submoduleSearch,
            @RequestParam(required = false) Long stateId,
            @RequestParam(required = false) String stateSearch,
            @RequestParam(required = false) List<Long> countryIds,
            @RequestParam(required = false) String countrySearch,
            @RequestParam(required = false) String screenActionCode,
            @RequestParam Long userId,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "id") String sort,
            @RequestParam(defaultValue = "asc") String order,
            @RequestParam(defaultValue = "false") boolean all) {

        return ResponseEntity.ok(scheduleService.getAllSchedulesWithFilters(
                scheduleId, countryId,
                processId, processSearch,
                moduleId, moduleSearch,
                submoduleId, submoduleSearch,
                stateId, stateSearch,
                countryIds, countrySearch,
                screenActionCode,
                userId,
                page, size, sort, order, all));
    }

    @Operation(
            summary = "Get all schedules with filters and description search",
            description = "Returns a paginated list of complete schedules filtered by various criteria including partial match on schedule description (LIKE %text%) with user type validation"
    )
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully retrieved filtered schedules",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = PageResponseOutDto.class)))})
    @GetMapping("/schedules/search/description")
    public ResponseEntity<PageResponseOutDto<ScheduleDto>> getAllSchedulesWithFiltersAndDescription(
            @RequestParam(required = false) Long scheduleId,
            @RequestParam(required = false) Long countryId,
            @RequestParam(required = false) Long processId,
            @RequestParam(required = false) String processSearch,
            @RequestParam(required = false) Long moduleId,
            @RequestParam(required = false) String moduleSearch,
            @RequestParam(required = false) Long submoduleId,
            @RequestParam(required = false) String submoduleSearch,
            @RequestParam(required = false) Long stateId,
            @RequestParam(required = false) String stateSearch,
            @RequestParam(required = false) List<Long> countryIds,
            @RequestParam(required = false) String countrySearch,
            @RequestParam(required = false) String screenActionCode,
            @RequestParam(required = false) String descriptionSearch,
            @RequestParam Long userId,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "id") String sort,
            @RequestParam(defaultValue = "asc") String order,
            @RequestParam(defaultValue = "false") boolean all) {

        return ResponseEntity.ok(scheduleService.getAllSchedulesWithFiltersAndDescription(
                scheduleId, countryId,
                processId, processSearch,
                moduleId, moduleSearch,
                submoduleId, submoduleSearch,
                stateId, stateSearch,
                countryIds, countrySearch,
                screenActionCode,
                descriptionSearch,
                userId,
                page, size, sort, order, all));
    }

    @Operation(
            summary = "Get all schedules summary with filters",
            description = "Returns a paginated list of schedules with only id and description, filtered by various criteria with user type validation"
    )
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully retrieved filtered schedules summary",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = PageResponseOutDto.class)))})
    @GetMapping("/schedules/search/summary")
    public ResponseEntity<PageResponseOutDto<ScheduleSummaryDto>> getAllSchedulesSummaryWithFilters(
            @RequestParam(required = false) Long scheduleId,
            @RequestParam(required = false) Long countryId,
            @RequestParam(required = false) Long processId,
            @RequestParam(required = false) String processSearch,
            @RequestParam(required = false) Long moduleId,
            @RequestParam(required = false) String moduleSearch,
            @RequestParam(required = false) Long submoduleId,
            @RequestParam(required = false) String submoduleSearch,
            @RequestParam(required = false) Long stateId,
            @RequestParam(required = false) String stateSearch,
            @RequestParam(required = false) List<Long> countryIds,
            @RequestParam(required = false) String countrySearch,
            @RequestParam(required = false) String screenActionCode,
            @RequestParam(required = false) String descriptionSearch,
            @RequestParam Long userId,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "id") String sort,
            @RequestParam(defaultValue = "asc") String order,
            @RequestParam(defaultValue = "false") boolean all) {

        return ResponseEntity.ok(scheduleService.getAllSchedulesSummaryWithFilters(
                scheduleId, countryId,
                processId, processSearch,
                moduleId, moduleSearch,
                submoduleId, submoduleSearch,
                stateId, stateSearch,
                countryIds, countrySearch,
                screenActionCode,
                descriptionSearch,
                userId,
                page, size, sort, order, all));
    }
}
```

## src/main/java/com/nubo/schedule/query/api/web/controller/ScheduleStatusHistoryRestController.java

```java
package com.nubo.schedule.query.api.web.controller;

import com.nubo.schedule.query.api.application.annotations.RateLimited;
import com.nubo.schedule.query.api.models.dto.response.PageResponseOutDto;
import com.nubo.schedule.query.api.models.dto.response.ScheduleStatusHistoryDto;
import com.nubo.schedule.query.api.service.ScheduleStatusHistoryService;
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

@Tag(name = "Schedule Status History Operation")
@RestController
@RequestMapping("/{version}/schedule-status-history-operation")
@RequiredArgsConstructor
@RateLimited
public class ScheduleStatusHistoryRestController {

    private final ScheduleStatusHistoryService scheduleStatusHistoryService;

    @Operation(
            summary = "Get schedule status history list by user",
            description = "Returns the list of schedule status history available for the specified user with user type validation"
    )
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully retrieved schedule status history",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = PageResponseOutDto.class)))})
    @GetMapping("/history/{userId}")
    public ResponseEntity<PageResponseOutDto<ScheduleStatusHistoryDto>> getScheduleStatusHistoryByUser(
            @PathVariable Long userId,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "id") String sort,
            @RequestParam(defaultValue = "asc") String order,
            @RequestParam(defaultValue = "false") boolean all) {

        return ResponseEntity.ok(scheduleStatusHistoryService.getAllByUser(userId, page, size, sort, order, all));
    }

    @Operation(
            summary = "Get schedule status history by schedule ID",
            description = "Returns the list of schedule status history for the specified schedule ID with user access validation"
    )
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully retrieved schedule status history",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = PageResponseOutDto.class)))})
    @GetMapping("/history/schedule/{scheduleId}")
    public ResponseEntity<PageResponseOutDto<ScheduleStatusHistoryDto>> getScheduleStatusHistoryByScheduleId(
            @PathVariable Long scheduleId,
            @RequestParam Long userId,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "id") String sort,
            @RequestParam(defaultValue = "asc") String order,
            @RequestParam(defaultValue = "false") boolean all) {

        return ResponseEntity.ok(scheduleStatusHistoryService.getByScheduleId(scheduleId, userId, page, size, sort, order, all));
    }
}
```

## src/main/java/com/nubo/schedule/query/api/web/controller/ScreenActionRestController.java

```java
package com.nubo.schedule.query.api.web.controller;

import com.nubo.schedule.query.api.application.annotations.RateLimited;
import com.nubo.schedule.query.api.models.dto.request.ParamsPageInDto;
import com.nubo.schedule.query.api.models.dto.response.PageResponseDto;
import com.nubo.schedule.query.api.models.dto.response.ScreenActionDto;
import com.nubo.schedule.query.api.service.ScreenActionService;
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

@Tag(name = "Screen Action")
@RestController
@RequestMapping("/{version}/screen-action")
@RequiredArgsConstructor
@RateLimited
public class ScreenActionRestController {

    private final ScreenActionService screenActionService;

    @Operation(
            summary = "Get screen list by user",
            description = "Returns the list of screens available for the specified user"
    )
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully retrieved screens",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = PageResponseDto.class)))})
    @GetMapping("/search")
    public ResponseEntity<PageResponseDto<ScreenActionDto>> getScreenActions(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "id") String sort,
            @RequestParam(defaultValue = "asc") String order,
            @RequestParam(required = false, name = "all", defaultValue = "false") Boolean all,
            @RequestParam Integer moduleId,
            @RequestParam(required = false) Integer submoduleId) {
        ParamsPageInDto paramsPageInDto = ParamsPageInDto.builder().page(page).size(size).sort(sort).order(order).all(all).build();
        return ResponseEntity.ok(screenActionService.getScreenActions(paramsPageInDto, moduleId, submoduleId));
    }

}

```

## src/main/java/com/nubo/schedule/query/api/web/controller/ScreenRestController.java

```java
package com.nubo.schedule.query.api.web.controller;

import com.nubo.schedule.query.api.application.annotations.RateLimited;
import com.nubo.schedule.query.api.models.dto.response.ScreenDto;
import com.nubo.schedule.query.api.service.ScreenService;
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

import com.nubo.schedule.query.api.models.dto.response.PageResponseOutDto;

@Tag(name = "Screen Operation")
@RestController
@RequestMapping("/{version}/screen-operation")
@RequiredArgsConstructor
@RateLimited
public class ScreenRestController {

    private final ScreenService screenService;

    @Operation(
            summary = "Get screen list by user",
            description = "Returns the list of screens available for the specified user"
    )
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully retrieved screens",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = PageResponseOutDto.class)))})
    @GetMapping("/screens/{userId}")
    public ResponseEntity<PageResponseOutDto<ScreenDto>> getScreensByUser(
            @PathVariable Long userId,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "id") String sort,
            @RequestParam(defaultValue = "asc") String order,
            @RequestParam(defaultValue = "false") boolean all) {

        return ResponseEntity.ok(screenService.getAllByUser(userId, page, size, sort, order, all));
    }
}
```

## src/main/java/com/nubo/schedule/query/api/web/controller/StatusRestController.java

```java
package com.nubo.schedule.query.api.web.controller;

import com.nubo.schedule.query.api.application.annotations.RateLimited;
import com.nubo.schedule.query.api.models.dto.response.PageResponseOutDto;
import com.nubo.schedule.query.api.models.dto.response.StatusDto;
import com.nubo.schedule.query.api.service.StatusService;
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

@Tag(name = "Status Operation")
@RestController
@RequestMapping("/{version}/status-operation")
@RequiredArgsConstructor
@RateLimited
public class StatusRestController {

    private final StatusService statusService;

    @Operation(
            summary = "Get status list by category",
            description = "Returns the list of statuses available for the specified category"
    )
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully retrieved statuses",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = PageResponseOutDto.class)))})
    @GetMapping("/statuses/{category}")
    public ResponseEntity<PageResponseOutDto<StatusDto>> getStatusesByCategory(
            @PathVariable String category,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "id") String sort,
            @RequestParam(defaultValue = "asc") String order,
            @RequestParam(defaultValue = "false") boolean all) {

        return ResponseEntity.ok(statusService.getByCategory(category, page, size, sort, order, all));
    }
}
```

## src/main/java/com/nubo/schedule/query/api/web/controller/SubmoduleRestController.java

```java
package com.nubo.schedule.query.api.web.controller;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nubo.schedule.query.api.application.annotations.RateLimited;
import com.nubo.schedule.query.api.models.dto.response.PageResponseOutDto;
import com.nubo.schedule.query.api.models.dto.response.SubmoduleDto;
import com.nubo.schedule.query.api.service.SubmoduleService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;


@Tag(name = "Submodule Operation")
@RestController
@RequestMapping("/{version}/submodule-operation")
@RequiredArgsConstructor
@RateLimited
public class SubmoduleRestController {

    private final SubmoduleService submoduleService;

    @Operation(
            summary = "Get submodule list by user",
            description = "Returns the list of submodules available for the specified user"
    )
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully retrieved submodules",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = PageResponseOutDto.class)))})
    @GetMapping("/submodules/{userId}")
    public ResponseEntity<PageResponseOutDto<SubmoduleDto>> getSubmodulesByUser(
            @PathVariable Long userId,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "100") int size,
            @RequestParam(defaultValue = "id") String sort,
            @RequestParam(defaultValue = "asc") String order,
            @RequestParam(defaultValue = "false") boolean all) {

        return ResponseEntity.ok(submoduleService.getAllByUser(userId, page, size, sort, order, all));
    }

    @Operation(
            summary = "Get submodule list by module with filters",
            description = "Returns a paginated list of submodules with optional module and description filters"
    )
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully retrieved submodules",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = PageResponseOutDto.class)))})
    @GetMapping("/submodules")
    public ResponseEntity<PageResponseOutDto<SubmoduleDto>> getSubmodulesByModuleWithFilters(
            @RequestParam(required = false) Long moduleId,
            @RequestParam(required = false) String description,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "100") int size,
            @RequestParam(defaultValue = "id") String sort,
            @RequestParam(defaultValue = "asc") String order,
            @RequestParam(defaultValue = "false") boolean all) {

        return ResponseEntity.ok(submoduleService.getAllByModuleWithFilters(moduleId, description, page, size, sort, order, all));
    }
}
```

## src/main/java/com/nubo/schedule/query/api/web/controller/TypeRestController.java

```java
package com.nubo.schedule.query.api.web.controller;

import com.nubo.schedule.query.api.application.annotations.RateLimited;
import com.nubo.schedule.query.api.models.dto.response.PageResponseOutDto;
import com.nubo.schedule.query.api.models.dto.response.TypeDto;
import com.nubo.schedule.query.api.service.TypeService;
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

@Tag(name = "Type Operation")
@RestController
@RequestMapping("/{version}/type-operation")
@RequiredArgsConstructor
@RateLimited
public class TypeRestController {

    private final TypeService typeService;

    @Operation(
            summary = "Get type list by category",
            description = "Returns the list of types available for the specified category"
    )
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully retrieved types",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = PageResponseOutDto.class)))})
    @GetMapping("/types/{category}")
    public ResponseEntity<PageResponseOutDto<TypeDto>> getTypesByCategory(
            @PathVariable String category,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "id") String sort,
            @RequestParam(defaultValue = "asc") String order,
            @RequestParam(defaultValue = "false") boolean all) {

        return ResponseEntity.ok(typeService.getByCategory(category, page, size, sort, order, all));
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
config:
  application:
    rateLimited:
      number-max-request: ${RATE_LIMIT_MAX_REQUEST}
      range-time-request: ${RATE_LIMIT_TIME_REQUEST}
      waiting-time: ${RATE_LIMIT_WAITING_TIME}
nubo:
  schedule:
    default-fixed-closing-time: ${DEFAULT_FIXED_CLOSING_TIME:22:00:00}



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
nubo:
  schedule:
    default-fixed-closing-time: ${DEFAULT_FIXED_CLOSING_TIME:22:00:00}
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
config:
  application:
    rateLimited:
      number-max-request: ${RATE_LIMIT_MAX_REQUEST}
      range-time-request: ${RATE_LIMIT_TIME_REQUEST}
      waiting-time: ${RATE_LIMIT_WAITING_TIME}
nubo:
  schedule:
    default-fixed-closing-time: ${DEFAULT_FIXED_CLOSING_TIME:22:00:00}
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
config:
  application:
    rateLimited:
      number-max-request: ${RATE_LIMIT_MAX_REQUEST}
      range-time-request: ${RATE_LIMIT_TIME_REQUEST}
      waiting-time: ${RATE_LIMIT_WAITING_TIME}
nubo:
  schedule:
    default-fixed-closing-time: ${DEFAULT_FIXED_CLOSING_TIME:22:00:00}
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
config:
  application:
    rateLimited:
      number-max-request: ${RATE_LIMIT_MAX_REQUEST}
      range-time-request: ${RATE_LIMIT_TIME_REQUEST}
      waiting-time: ${RATE_LIMIT_WAITING_TIME}
nubo:
  schedule:
    default-fixed-closing-time: ${DEFAULT_FIXED_CLOSING_TIME:22:00:00}

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
 ,---.   ,-----.,--.  ,--.,------.,------.  ,--. ,--.,--.   ,------. ,-----.   ,--. ,--.,------.,------.,--.   ,--.,---.  ,------. ,--.
'   .-' '  .--./|  '--'  ||  .---'|  .-.  \ |  | |  ||  |   |  .---''  .-.  '  |  | |  ||  .---'|  .--. '\  `.'  //  O  \ |  .--. '|  |
`.  `-. |  |    |  .--.  ||  `--, |  |  \  :|  | |  ||  |   |  `--, |  | |  |  |  | |  ||  `--, |  '--'.' '.    /|  .-.  ||  '--' ||  |
.-'    |'  '--'\|  |  |  ||  `---.|  '--'  /'  '-'  '|  '--.|  `---.'  '-'  '-.'  '-'  '|  `---.|  |\  \    |  | |  | |  ||  | --' |  |
`-----'  `-----'`--'  `--'`------'`-------'  `-----' `-----'`------' `-----'--' `-----' `------'`--' '--'   `--' `--' `--'`--'     `--'
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
property.CONSOLE_PATTERN=%style{%d{ISO8601}}{black} %highlight{%-5level} [%style{%t}{bright,blue}] %style{%C{1}}{cyan} - %msg%n
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
property.CONSOLE_PATTERN=%style{%d{ISO8601}}{black} %highlight{%-5level }[%style{%t}{bright,blue}] %style{%C{1}}{cyan} - %msg%n
appender.console.name=STDOUT
appender.console.type=Console
appender.console.layout.type=PatternLayout
appender.console.layout.pattern=${sys:CONSOLE_PATTERN}
rootLogger=INFO, STDOUT

```
