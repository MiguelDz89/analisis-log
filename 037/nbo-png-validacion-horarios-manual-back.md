# nbo-png-validacion-horarios-manual-back

Código Java de producción y configuraciones, sin tests. Cada sección contiene el archivo original completo y su ruta. Captura: 28/10/2026.

## Índice

1. `.mvn/wrapper/maven-wrapper.properties`
2. `mvnw`
3. `mvnw.cmd`
4. `pom.xml`
5. `src/main/java/com/nubo/schedule/validate/api/ScheduleValidateApiApplication.java`
6. `src/main/java/com/nubo/schedule/validate/api/application/config/SwaggerConfig.java`
7. `src/main/java/com/nubo/schedule/validate/api/application/config/WebConfig.java`
8. `src/main/java/com/nubo/schedule/validate/api/application/context/GlobalContext.java`
9. `src/main/java/com/nubo/schedule/validate/api/application/database/NamingStrategyConfig.java`
10. `src/main/java/com/nubo/schedule/validate/api/application/database/UpperNamingConfig.java`
11. `src/main/java/com/nubo/schedule/validate/api/application/filters/GlobalFilter.java`
12. `src/main/java/com/nubo/schedule/validate/api/application/interceptors/GlobalInterceptor.java`
13. `src/main/java/com/nubo/schedule/validate/api/application/properties/PropertiesConfig.java`
14. `src/main/java/com/nubo/schedule/validate/api/application/properties/PropertiesContext.java`
15. `src/main/java/com/nubo/schedule/validate/api/application/util/ApplicationUtils.java`
16. `src/main/java/com/nubo/schedule/validate/api/application/util/RestClientUtils.java`
17. `src/main/java/com/nubo/schedule/validate/api/client/business/day/calculation/models/dto/response/BusinessDayOutDto.java`
18. `src/main/java/com/nubo/schedule/validate/api/client/business/day/calculation/service/BusinessDayCalculationClient.java`
19. `src/main/java/com/nubo/schedule/validate/api/client/business/day/calculation/service/impl/BusinessDayCalculationClientImpl.java`
20. `src/main/java/com/nubo/schedule/validate/api/exception/ClientException.java`
21. `src/main/java/com/nubo/schedule/validate/api/exception/ServiceException.java`
22. `src/main/java/com/nubo/schedule/validate/api/exception/error/ErrorCode.java`
23. `src/main/java/com/nubo/schedule/validate/api/exception/error/ErrorResponse.java`
24. `src/main/java/com/nubo/schedule/validate/api/exception/error/ErrorValidation.java`
25. `src/main/java/com/nubo/schedule/validate/api/exception/handler/GlobalExceptionHandler.java`
26. `src/main/java/com/nubo/schedule/validate/api/helpers/CountryMapperUtil.java`
27. `src/main/java/com/nubo/schedule/validate/api/helpers/FrequencyMapperUtil.java`
28. `src/main/java/com/nubo/schedule/validate/api/helpers/MicroserviceMapperUtil.java`
29. `src/main/java/com/nubo/schedule/validate/api/helpers/ModuleMapperUtil.java`
30. `src/main/java/com/nubo/schedule/validate/api/helpers/ParticipantMapperUtil.java`
31. `src/main/java/com/nubo/schedule/validate/api/helpers/ProcessMapperUtil.java`
32. `src/main/java/com/nubo/schedule/validate/api/helpers/RejectionReasonMapperUtil.java`
33. `src/main/java/com/nubo/schedule/validate/api/helpers/RelatedScheduleAssociationMapperUtil.java`
34. `src/main/java/com/nubo/schedule/validate/api/helpers/RelatedScheduleMapperUtil.java`
35. `src/main/java/com/nubo/schedule/validate/api/helpers/ScheduleAssociationMapperUtil.java`
36. `src/main/java/com/nubo/schedule/validate/api/helpers/ScheduleLogMapperUtil.java`
37. `src/main/java/com/nubo/schedule/validate/api/helpers/ScheduleMapperUtil.java`
38. `src/main/java/com/nubo/schedule/validate/api/helpers/ScheduleStatusHistoryMapperUtil.java`
39. `src/main/java/com/nubo/schedule/validate/api/helpers/ScreenMapperUtil.java`
40. `src/main/java/com/nubo/schedule/validate/api/helpers/StatusMapperUtil.java`
41. `src/main/java/com/nubo/schedule/validate/api/helpers/SubmoduleMapperUtil.java`
42. `src/main/java/com/nubo/schedule/validate/api/helpers/TypeMapperUtil.java`
43. `src/main/java/com/nubo/schedule/validate/api/helpers/UserNuboMapperUtil.java`
44. `src/main/java/com/nubo/schedule/validate/api/helpers/specification/ScheduleSpecification.java`
45. `src/main/java/com/nubo/schedule/validate/api/models/dto/request/ScheduleValidationInDto.java`
46. `src/main/java/com/nubo/schedule/validate/api/models/dto/response/CountryDto.java`
47. `src/main/java/com/nubo/schedule/validate/api/models/dto/response/FrequencyDto.java`
48. `src/main/java/com/nubo/schedule/validate/api/models/dto/response/MicroserviceDto.java`
49. `src/main/java/com/nubo/schedule/validate/api/models/dto/response/ModuleDto.java`
50. `src/main/java/com/nubo/schedule/validate/api/models/dto/response/PageResponseOutDto.java`
51. `src/main/java/com/nubo/schedule/validate/api/models/dto/response/ParticipantDto.java`
52. `src/main/java/com/nubo/schedule/validate/api/models/dto/response/ProcessDto.java`
53. `src/main/java/com/nubo/schedule/validate/api/models/dto/response/RejectionReasonDto.java`
54. `src/main/java/com/nubo/schedule/validate/api/models/dto/response/RelatedScheduleDto.java`
55. `src/main/java/com/nubo/schedule/validate/api/models/dto/response/ScheduleAssociationDto.java`
56. `src/main/java/com/nubo/schedule/validate/api/models/dto/response/ScheduleDto.java`
57. `src/main/java/com/nubo/schedule/validate/api/models/dto/response/ScheduleLogDto.java`
58. `src/main/java/com/nubo/schedule/validate/api/models/dto/response/ScheduleStatusHistoryDto.java`
59. `src/main/java/com/nubo/schedule/validate/api/models/dto/response/ScheduleValidationResponseDto.java`
60. `src/main/java/com/nubo/schedule/validate/api/models/dto/response/ScreenDto.java`
61. `src/main/java/com/nubo/schedule/validate/api/models/dto/response/StatusDto.java`
62. `src/main/java/com/nubo/schedule/validate/api/models/dto/response/SubmoduleDto.java`
63. `src/main/java/com/nubo/schedule/validate/api/models/dto/response/TimeZoneDto.java`
64. `src/main/java/com/nubo/schedule/validate/api/models/dto/response/TypeDto.java`
65. `src/main/java/com/nubo/schedule/validate/api/models/dto/response/UserNuboDto.java`
66. `src/main/java/com/nubo/schedule/validate/api/models/entity/CityEntity.java`
67. `src/main/java/com/nubo/schedule/validate/api/models/entity/ClassEntity.java`
68. `src/main/java/com/nubo/schedule/validate/api/models/entity/CountryEntity.java`
69. `src/main/java/com/nubo/schedule/validate/api/models/entity/CurrencyEntity.java`
70. `src/main/java/com/nubo/schedule/validate/api/models/entity/DepartmentEntity.java`
71. `src/main/java/com/nubo/schedule/validate/api/models/entity/DepositoryEntity.java`
72. `src/main/java/com/nubo/schedule/validate/api/models/entity/FinancialConditionEntity.java`
73. `src/main/java/com/nubo/schedule/validate/api/models/entity/FrequencyEntity.java`
74. `src/main/java/com/nubo/schedule/validate/api/models/entity/GicsEntity.java`
75. `src/main/java/com/nubo/schedule/validate/api/models/entity/GicsMappingEntity.java`
76. `src/main/java/com/nubo/schedule/validate/api/models/entity/IdentificationTypeEntity.java`
77. `src/main/java/com/nubo/schedule/validate/api/models/entity/MarketEntity.java`
78. `src/main/java/com/nubo/schedule/validate/api/models/entity/MicroserviceEntity.java`
79. `src/main/java/com/nubo/schedule/validate/api/models/entity/ModuleAccessTypeEntity.java`
80. `src/main/java/com/nubo/schedule/validate/api/models/entity/ModuleEntity.java`
81. `src/main/java/com/nubo/schedule/validate/api/models/entity/ParticipantAccountEntity.java`
82. `src/main/java/com/nubo/schedule/validate/api/models/entity/ParticipantEntity.java`
83. `src/main/java/com/nubo/schedule/validate/api/models/entity/ProcessEntity.java`
84. `src/main/java/com/nubo/schedule/validate/api/models/entity/RejectionReasonEntity.java`
85. `src/main/java/com/nubo/schedule/validate/api/models/entity/RelatedScheduleEntity.java`
86. `src/main/java/com/nubo/schedule/validate/api/models/entity/RelatedScheduleEntityId.java`
87. `src/main/java/com/nubo/schedule/validate/api/models/entity/ScheduleAssociationEntity.java`
88. `src/main/java/com/nubo/schedule/validate/api/models/entity/ScheduleEntity.java`
89. `src/main/java/com/nubo/schedule/validate/api/models/entity/ScheduleExtensionEntity.java`
90. `src/main/java/com/nubo/schedule/validate/api/models/entity/ScheduleExtensionStatusHistoryEntity.java`
91. `src/main/java/com/nubo/schedule/validate/api/models/entity/ScheduleLogEntity.java`
92. `src/main/java/com/nubo/schedule/validate/api/models/entity/ScheduleStatusHistoryEntity.java`
93. `src/main/java/com/nubo/schedule/validate/api/models/entity/ScreenActionEntity.java`
94. `src/main/java/com/nubo/schedule/validate/api/models/entity/ScreenEntity.java`
95. `src/main/java/com/nubo/schedule/validate/api/models/entity/StatusEntity.java`
96. `src/main/java/com/nubo/schedule/validate/api/models/entity/SubmoduleAccessTypeEntity.java`
97. `src/main/java/com/nubo/schedule/validate/api/models/entity/SubmoduleEntity.java`
98. `src/main/java/com/nubo/schedule/validate/api/models/entity/TaxStatusEntity.java`
99. `src/main/java/com/nubo/schedule/validate/api/models/entity/TypeEntity.java`
100. `src/main/java/com/nubo/schedule/validate/api/models/entity/UserNuboEntity.java`
101. `src/main/java/com/nubo/schedule/validate/api/models/enums/CountryCodeEnum.java`
102. `src/main/java/com/nubo/schedule/validate/api/models/enums/MessageEnum.java`
103. `src/main/java/com/nubo/schedule/validate/api/models/enums/PropertiesEnum.java`
104. `src/main/java/com/nubo/schedule/validate/api/models/enums/UserTypeEnum.java`
105. `src/main/java/com/nubo/schedule/validate/api/models/enums/VersionApiEnum.java`
106. `src/main/java/com/nubo/schedule/validate/api/repository/CountryRepository.java`
107. `src/main/java/com/nubo/schedule/validate/api/repository/FrequencyRepository.java`
108. `src/main/java/com/nubo/schedule/validate/api/repository/MicroserviceRepository.java`
109. `src/main/java/com/nubo/schedule/validate/api/repository/ModuleRepository.java`
110. `src/main/java/com/nubo/schedule/validate/api/repository/ParticipantRepository.java`
111. `src/main/java/com/nubo/schedule/validate/api/repository/ProcessRepository.java`
112. `src/main/java/com/nubo/schedule/validate/api/repository/RejectionReasonRepository.java`
113. `src/main/java/com/nubo/schedule/validate/api/repository/RelatedScheduleRepository.java`
114. `src/main/java/com/nubo/schedule/validate/api/repository/ScheduleAssociationRepository.java`
115. `src/main/java/com/nubo/schedule/validate/api/repository/ScheduleExtensionRepository.java`
116. `src/main/java/com/nubo/schedule/validate/api/repository/ScheduleLogRepository.java`
117. `src/main/java/com/nubo/schedule/validate/api/repository/ScheduleRepository.java`
118. `src/main/java/com/nubo/schedule/validate/api/repository/ScheduleStatusHistoryRepository.java`
119. `src/main/java/com/nubo/schedule/validate/api/repository/ScreenActionRepository.java`
120. `src/main/java/com/nubo/schedule/validate/api/repository/ScreenRepository.java`
121. `src/main/java/com/nubo/schedule/validate/api/repository/StatusRepository.java`
122. `src/main/java/com/nubo/schedule/validate/api/repository/SubmoduleRepository.java`
123. `src/main/java/com/nubo/schedule/validate/api/repository/TypeRepository.java`
124. `src/main/java/com/nubo/schedule/validate/api/repository/UserNuboRepository.java`
125. `src/main/java/com/nubo/schedule/validate/api/service/ScheduleValidationService.java`
126. `src/main/java/com/nubo/schedule/validate/api/service/impl/ScheduleValidationServiceImpl.java`
127. `src/main/java/com/nubo/schedule/validate/api/web/controller/ScheduleValidationRestController.java`
128. `src/main/resources/application-dev.yml`
129. `src/main/resources/application-local.yml`
130. `src/main/resources/application-prod.yml`
131. `src/main/resources/application-qa.yml`
132. `src/main/resources/application-uat.yml`
133. `src/main/resources/application.yml`
134. `src/main/resources/banner.txt`
135. `src/main/resources/log/JsonEventLayout_error.json`
136. `src/main/resources/log/JsonEventLayout_info.json`
137. `src/main/resources/log/JsonEventLayout_trace.json`
138. `src/main/resources/log/log4j2-prod.properties`
139. `src/main/resources/log/log4j2.properties`

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
        <version>3.5.14</version>
        <relativePath/>
    </parent>
    <groupId>com.nubo.schedule.validate.api</groupId>
    <artifactId>schedule-validate-api</artifactId>
    <version>0.19.0-alpha.1</version>
    <name>${project.artifactId}</name>
    <description>Schedule Validate Api</description>

    <properties>
        <java.version>17</java.version>
        <spring.port>8080</spring.port>
        <test.skip>false</test.skip>
        <datasource.url.application.name>ApplicationName=${project.artifactId}</datasource.url.application.name>
        <hikari.pool.name>${project.artifactId}-pool</hikari.pool.name>

        <!-- Security fixes for CVEs -->
        <spring-framework.version>6.2.17</spring-framework.version>
        <commons-lang3.version>3.18.0</commons-lang3.version>
        <tomcat.version>10.1.54</tomcat.version>
        <log4j2.version>2.25.4</log4j2.version>
        <jackson-bom.version>2.21.1</jackson-bom.version>
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
            <version>2.18.0</version>
        </dependency>

        <!-- Security fixes for CVEs -->
        <dependency>
            <groupId>com.fasterxml.jackson.core</groupId>
            <artifactId>jackson-core</artifactId>
        </dependency>
        <dependency>
            <groupId>com.fasterxml.jackson.core</groupId>
            <artifactId>jackson-databind</artifactId>
        </dependency>
        <dependency>
            <groupId>com.fasterxml.jackson.core</groupId>
            <artifactId>jackson-annotations</artifactId>
        </dependency>
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
                                <exclude>**/ScheduleValidateApiApplication.class</exclude>
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

## src/main/java/com/nubo/schedule/validate/api/ScheduleValidateApiApplication.java

```java
package com.nubo.schedule.validate.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ScheduleValidateApiApplication {

    public static void main(String[] args) {
        SpringApplication.run(ScheduleValidateApiApplication.class, args);
    }

}

```

## src/main/java/com/nubo/schedule/validate/api/application/config/SwaggerConfig.java

```java
package com.nubo.schedule.validate.api.application.config;

import com.nubo.schedule.validate.api.exception.error.ErrorResponse;
import com.nubo.schedule.validate.api.exception.error.ErrorValidation;
import com.nubo.schedule.validate.api.models.enums.PropertiesEnum;
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

## src/main/java/com/nubo/schedule/validate/api/application/config/WebConfig.java

```java
package com.nubo.schedule.validate.api.application.config;

import com.nubo.schedule.validate.api.application.interceptors.GlobalInterceptor;
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

## src/main/java/com/nubo/schedule/validate/api/application/context/GlobalContext.java

```java
package com.nubo.schedule.validate.api.application.context;

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

## src/main/java/com/nubo/schedule/validate/api/application/database/NamingStrategyConfig.java

```java
package com.nubo.schedule.validate.api.application.database;

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

## src/main/java/com/nubo/schedule/validate/api/application/database/UpperNamingConfig.java

```java
package com.nubo.schedule.validate.api.application.database;

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

## src/main/java/com/nubo/schedule/validate/api/application/filters/GlobalFilter.java

```java
package com.nubo.schedule.validate.api.application.filters;

import com.nubo.schedule.validate.api.application.context.GlobalContext;
import com.nubo.schedule.validate.api.application.util.ApplicationUtils;
import com.nubo.schedule.validate.api.exception.ServiceException;
import com.nubo.schedule.validate.api.exception.error.ErrorCode;
import com.nubo.schedule.validate.api.exception.error.ErrorResponse;
import com.nubo.schedule.validate.api.models.enums.PropertiesEnum;
import com.nubo.schedule.validate.api.models.enums.VersionApiEnum;
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
        String pathInfo;
        
        if (contextPath.isEmpty()) {
            // Remove leading slash when context path is empty
            pathInfo = requestURI.startsWith("/") ? requestURI.substring(1) : requestURI;
        } else {
            // Remove context path and leading slash
            if (requestURI.startsWith(contextPath)) {
                pathInfo = requestURI.substring(contextPath.length());
                pathInfo = pathInfo.startsWith("/") ? pathInfo.substring(1) : pathInfo;
            } else {
                throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
            }
        }
        
        if (pathInfo.matches("v[1-9]\\d?(/.*)?")) {
            String version = pathInfo.split("/")[0];
            try {
                return version;
            } catch (IllegalArgumentException e) {
                throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
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

## src/main/java/com/nubo/schedule/validate/api/application/interceptors/GlobalInterceptor.java

```java
package com.nubo.schedule.validate.api.application.interceptors;

import com.nubo.schedule.validate.api.application.context.GlobalContext;
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

## src/main/java/com/nubo/schedule/validate/api/application/properties/PropertiesConfig.java

```java
package com.nubo.schedule.validate.api.application.properties;

import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
@Getter
public class PropertiesConfig {

    @Value("${spring.application.name}")
    private String apiName;

    @Value("${client.nubo.url-business-day-calculation}")
    private String urlNuboBusinessDayCalculation;

}

```

## src/main/java/com/nubo/schedule/validate/api/application/properties/PropertiesContext.java

```java
package com.nubo.schedule.validate.api.application.properties;

import com.nubo.schedule.validate.api.application.context.GlobalContext;
import com.nubo.schedule.validate.api.application.util.ApplicationUtils;
import com.nubo.schedule.validate.api.models.enums.PropertiesEnum;
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

## src/main/java/com/nubo/schedule/validate/api/application/util/ApplicationUtils.java

```java
package com.nubo.schedule.validate.api.application.util;

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

## src/main/java/com/nubo/schedule/validate/api/application/util/RestClientUtils.java

```java
package com.nubo.schedule.validate.api.application.util;

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

    public void requestWithoutResponseObject(URI url, HttpMethod method, HttpHeaders headers, Object requestBody) {
        restClient.method(method)
                .uri(url)
                .headers(h -> h.addAll(headers))
                .body(requestBody)
                .retrieve()
                .toBodilessEntity();
    }

}

```

## src/main/java/com/nubo/schedule/validate/api/client/business/day/calculation/models/dto/response/BusinessDayOutDto.java

```java
package com.nubo.schedule.validate.api.client.business.day.calculation.models.dto.response;

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

    private LocalDate businessNextDayClosureDate;

    private Long countryId;

}

```

## src/main/java/com/nubo/schedule/validate/api/client/business/day/calculation/service/BusinessDayCalculationClient.java

```java
package com.nubo.schedule.validate.api.client.business.day.calculation.service;

import com.nubo.schedule.validate.api.client.business.day.calculation.models.dto.response.BusinessDayOutDto;

public interface BusinessDayCalculationClient {

    BusinessDayOutDto validBusinessDay(Long countryId);

}

```

## src/main/java/com/nubo/schedule/validate/api/client/business/day/calculation/service/impl/BusinessDayCalculationClientImpl.java

```java
package com.nubo.schedule.validate.api.client.business.day.calculation.service.impl;

import com.nubo.schedule.validate.api.application.properties.PropertiesConfig;
import com.nubo.schedule.validate.api.application.properties.PropertiesContext;
import com.nubo.schedule.validate.api.application.util.ApplicationUtils;
import com.nubo.schedule.validate.api.application.util.RestClientUtils;
import com.nubo.schedule.validate.api.client.business.day.calculation.models.dto.response.BusinessDayOutDto;
import com.nubo.schedule.validate.api.client.business.day.calculation.service.BusinessDayCalculationClient;
import com.nubo.schedule.validate.api.exception.ClientException;
import com.nubo.schedule.validate.api.exception.error.ErrorCode;
import com.nubo.schedule.validate.api.models.enums.PropertiesEnum;
import com.nubo.schedule.validate.api.models.enums.VersionApiEnum;
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
public class BusinessDayCalculationClientImpl implements BusinessDayCalculationClient {

    private final PropertiesConfig propertiesConfig;
    private final RestClientUtils restClientUtils;

    private static final String PATH_BUSINESS_DAY = "business-day";

    @Override
    public BusinessDayOutDto validBusinessDay(Long countryId) {
        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getUrlNuboBusinessDayCalculation())
                .pathSegment(VersionApiEnum.V1.getValue(), PATH_BUSINESS_DAY)
                .path("/valid/current-day/country/{countryId}")
                .buildAndExpand(countryId)
                .toUri();

        try {
            ResponseEntity<BusinessDayOutDto> response = restClientUtils.requestWithoutBodyWithResponseObject(uri,
                    HttpMethod.GET, getHttpHeaders(), BusinessDayOutDto.class);

            if (!ObjectUtils.isEmpty(response.getBody())) {
                return response.getBody();
            }
        } catch (Exception ex) {
            throw new ClientException(ErrorCode.CLIENT_BUSINESS_DAY_CALCULATION_ERROR, HttpStatus.BAD_GATEWAY, ex);
        }

        return BusinessDayOutDto.builder().build();
    }

    private HttpHeaders getHttpHeaders() {
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

## src/main/java/com/nubo/schedule/validate/api/exception/ClientException.java

```java
package com.nubo.schedule.validate.api.exception;

import com.nubo.schedule.validate.api.exception.error.ErrorCode;
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

## src/main/java/com/nubo/schedule/validate/api/exception/ServiceException.java

```java
package com.nubo.schedule.validate.api.exception;

import com.nubo.schedule.validate.api.exception.error.ErrorCode;
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

## src/main/java/com/nubo/schedule/validate/api/exception/error/ErrorCode.java

```java
package com.nubo.schedule.validate.api.exception.error;

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
    BUSINESS_DAY_NOT_VALID("Business day not valid"),
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
    CLIENT_BUSINESS_DAY_CALCULATION_ERROR("An unexpected error occurred in Business Day Calculation"),
    COUNTRY_NOT_FOUND("Country not found"),
    SCHEDULE_NOT_FOUND("Schedule not found"),
    INVALID_TIMEZONE("Invalid timezone format"),
    NULL_PROCESS_SCREEN_ACTION("Null Process and ScreenAction Iput")
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

## src/main/java/com/nubo/schedule/validate/api/exception/error/ErrorResponse.java

```java
package com.nubo.schedule.validate.api.exception.error;

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

## src/main/java/com/nubo/schedule/validate/api/exception/error/ErrorValidation.java

```java
package com.nubo.schedule.validate.api.exception.error;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ErrorValidation {

    private String id;
    private String description;

}

```

## src/main/java/com/nubo/schedule/validate/api/exception/handler/GlobalExceptionHandler.java

```java
package com.nubo.schedule.validate.api.exception.handler;

import com.nubo.schedule.validate.api.application.properties.PropertiesContext;
import com.nubo.schedule.validate.api.application.util.ApplicationUtils;
import com.nubo.schedule.validate.api.exception.ClientException;
import com.nubo.schedule.validate.api.exception.ServiceException;
import com.nubo.schedule.validate.api.exception.error.ErrorCode;
import com.nubo.schedule.validate.api.exception.error.ErrorResponse;
import com.nubo.schedule.validate.api.exception.error.ErrorValidation;
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
    public ResponseEntity<ErrorResponse> handlerGeneralException(Exception exception, HttpServletRequest request) {
        return buildErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, exception, request, ErrorCode.UNEXPECTED);
    }

    @ExceptionHandler(ServiceException.class)
    public ResponseEntity<ErrorResponse> handlerServiceException(ServiceException exception, HttpServletRequest request) {
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
                        exception.getMessage() : exception.getCause().getMessage())
                .timestamp(ObjectUtils.isEmpty(String.valueOf(PropertiesContext.getClientDatetime())) ? null :
                        String.valueOf(PropertiesContext.getClientDatetime()))
                .errorDetails(errorDetails)
                .build();

        log.error("Error -> {}", errorResponse);

        return ResponseEntity.status(status).body(errorResponse);
    }


    private ResponseEntity<ErrorResponse> buildClientErrorResponse(HttpStatus status, ErrorCode errorCode, String cause) {
        try {
            Pattern pattern = Pattern.compile("\\{.*\\}");
            Matcher matcher = pattern.matcher(cause);

            if (matcher.find()) {
                String json = matcher.group();
                ErrorResponse errorResponse = (ErrorResponse) ApplicationUtils.convertJsonToObject(json, ErrorResponse.class);
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

## src/main/java/com/nubo/schedule/validate/api/helpers/CountryMapperUtil.java

```java
package com.nubo.schedule.validate.api.helpers;

import com.nubo.schedule.validate.api.models.dto.response.CountryDto;
import com.nubo.schedule.validate.api.models.entity.CountryEntity;

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

## src/main/java/com/nubo/schedule/validate/api/helpers/FrequencyMapperUtil.java

```java
package com.nubo.schedule.validate.api.helpers;

import com.nubo.schedule.validate.api.models.dto.response.FrequencyDto;
import com.nubo.schedule.validate.api.models.entity.FrequencyEntity;

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

## src/main/java/com/nubo/schedule/validate/api/helpers/MicroserviceMapperUtil.java

```java
package com.nubo.schedule.validate.api.helpers;

import com.nubo.schedule.validate.api.models.dto.response.MicroserviceDto;
import com.nubo.schedule.validate.api.models.entity.MicroserviceEntity;

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

## src/main/java/com/nubo/schedule/validate/api/helpers/ModuleMapperUtil.java

```java
package com.nubo.schedule.validate.api.helpers;

import com.nubo.schedule.validate.api.models.dto.response.ModuleDto;
import com.nubo.schedule.validate.api.models.entity.ModuleEntity;

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

## src/main/java/com/nubo/schedule/validate/api/helpers/ParticipantMapperUtil.java

```java
package com.nubo.schedule.validate.api.helpers;

import com.nubo.schedule.validate.api.models.dto.response.ParticipantDto;
import com.nubo.schedule.validate.api.models.entity.ParticipantEntity;

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

## src/main/java/com/nubo/schedule/validate/api/helpers/ProcessMapperUtil.java

```java
package com.nubo.schedule.validate.api.helpers;

import com.nubo.schedule.validate.api.models.dto.response.ProcessDto;
import com.nubo.schedule.validate.api.models.entity.ProcessEntity;

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

## src/main/java/com/nubo/schedule/validate/api/helpers/RejectionReasonMapperUtil.java

```java
package com.nubo.schedule.validate.api.helpers;

import com.nubo.schedule.validate.api.models.dto.response.RejectionReasonDto;
import com.nubo.schedule.validate.api.models.entity.RejectionReasonEntity;

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

## src/main/java/com/nubo/schedule/validate/api/helpers/RelatedScheduleAssociationMapperUtil.java

```java
package com.nubo.schedule.validate.api.helpers;

import com.nubo.schedule.validate.api.models.dto.response.ScheduleAssociationDto;
import com.nubo.schedule.validate.api.models.entity.RelatedScheduleEntity;
import com.nubo.schedule.validate.api.models.entity.TypeEntity;
import com.nubo.schedule.validate.api.repository.TypeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class RelatedScheduleAssociationMapperUtil {

    private final TypeRepository typeRepository;

    public ScheduleAssociationDto toDto(RelatedScheduleEntity entity) {
        if (entity == null) return null;
        
        TypeEntity typeEntity = null;
        if (entity.getRelationType() != null) {
            Optional<TypeEntity> typeOpt = typeRepository.findById(entity.getRelationType().longValue());
            typeEntity = typeOpt.orElse(null);
        }
        
        return ScheduleAssociationDto.builder()
                .id(entity.getRelatedSchedule() != null && entity.getRelatedSchedule().getId() != null ? entity.getRelatedSchedule().getId().intValue() : null)
                .description(entity.getRelatedSchedule().getDescription())
                .schedule(ScheduleMapperUtil.toDto(entity.getRelatedSchedule()))
                .type(typeEntity != null ? TypeMapperUtil.toDto(typeEntity) : null)
                .startTime(entity.getRelatedSchedule().getOpeningTime())
                .endTime(entity.getRelatedSchedule().getClosingTime())
                .country(entity.getCountry() != null ? CountryMapperUtil.toDto(entity.getCountry()) : null)
                .dependency(entity.getDependence())
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
}
```

## src/main/java/com/nubo/schedule/validate/api/helpers/RelatedScheduleMapperUtil.java

```java
package com.nubo.schedule.validate.api.helpers;

import com.nubo.schedule.validate.api.models.dto.response.RelatedScheduleDto;
import com.nubo.schedule.validate.api.models.entity.RelatedScheduleEntity;

import java.time.format.DateTimeFormatter;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class RelatedScheduleMapperUtil {

    private static final DateTimeFormatter DATE_TIME_FORMATTER = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");

    public static RelatedScheduleDto toDto(RelatedScheduleEntity entity) {
        if (entity == null) return null;
        return RelatedScheduleDto.builder()
                .scheduleId(entity.getSchedule() != null ? entity.getSchedule().getId() : null)
                .relatedScheduleId(entity.getRelatedSchedule() != null ? entity.getRelatedSchedule().getId() : null)
                .relationType(entity.getRelationType())
                .dependence(entity.getDependence())
                .country(entity.getCountry() != null ? CountryMapperUtil.toDto(entity.getCountry()) : null)
                .lastModifyUser(entity.getLastModifyUser())
                .lastModifyApplication(entity.getLastModifyApplication())
                .lastModifyDate(entity.getLastModifyDate() != null ? entity.getLastModifyDate().format(DATE_TIME_FORMATTER) : null)
                .lastModifyIp(entity.getLastModifyIp())
                .build();
    }

    public static List<RelatedScheduleDto> toDtoList(List<RelatedScheduleEntity> entities) {
        if (entities == null || entities.isEmpty()) {
            return Collections.emptyList();
        }
        return entities.stream()
                .map(RelatedScheduleMapperUtil::toDto)
                .collect(Collectors.toList());
    }

}
```

## src/main/java/com/nubo/schedule/validate/api/helpers/ScheduleAssociationMapperUtil.java

```java
package com.nubo.schedule.validate.api.helpers;

import com.nubo.schedule.validate.api.models.dto.response.ScheduleAssociationDto;
import com.nubo.schedule.validate.api.models.dto.response.ScheduleDto;
import com.nubo.schedule.validate.api.models.entity.ScheduleAssociationEntity;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class ScheduleAssociationMapperUtil {

    public static ScheduleAssociationDto toDto(ScheduleAssociationEntity entity) {
        if (entity==null) return null;
        return ScheduleAssociationDto.builder()
                .id(entity.getId())
                .description(entity.getDescription())
                .schedule(entity.getParentSchedule()!=null ? ScheduleMapperUtil.toDto(entity.getParentSchedule()):null)
                .type(entity.getType()!=null ? TypeMapperUtil.toDto(entity.getType()):null)
                .startTime(entity.getStartTime())
                .endTime(entity.getEndTime())
                .country(entity.getCountry()!=null ? CountryMapperUtil.toDto(entity.getCountry()):null)
                .dependency(entity.getDependency())
                .build();
    }

    public static ScheduleAssociationDto toDto(ScheduleAssociationEntity entity, Long searchedScheduleId) {
        if (entity==null) return null;

        ScheduleDto relatedSchedule = null;
        if (entity.getParentSchedule()!=null && !entity.getParentSchedule().getId().equals(searchedScheduleId)) {
            relatedSchedule = ScheduleMapperUtil.toDto(entity.getParentSchedule());
        } else if (entity.getChildSchedule()!=null && !entity.getChildSchedule().getId().equals(searchedScheduleId)) {

            relatedSchedule = ScheduleMapperUtil.toDto(entity.getChildSchedule());
        }

        return ScheduleAssociationDto.builder()
                .id(entity.getId())
                .description(entity.getDescription())
                .schedule(relatedSchedule)
                .type(entity.getType()!=null ? TypeMapperUtil.toDto(entity.getType()):null)
                .startTime(entity.getStartTime())
                .endTime(entity.getEndTime())
                .country(entity.getCountry()!=null ? CountryMapperUtil.toDto(entity.getCountry()):null)
                .dependency(entity.getDependency())
                .build();
    }

    public static List<ScheduleAssociationDto> toDtoList(List<ScheduleAssociationEntity> entities) {
        if (entities==null || entities.isEmpty()) {
            return Collections.emptyList();
        }
        return entities.stream()
                .map(ScheduleAssociationMapperUtil::toDto)
                .collect(Collectors.toList());
    }

    public static List<ScheduleAssociationDto> toDtoList(List<ScheduleAssociationEntity> entities, Long searchedScheduleId) {
        if (entities==null || entities.isEmpty()) {
            return Collections.emptyList();
        }
        return entities.stream()
                .map(entity -> toDto(entity, searchedScheduleId))
                .collect(Collectors.toList());
    }
}
```

## src/main/java/com/nubo/schedule/validate/api/helpers/ScheduleLogMapperUtil.java

```java
package com.nubo.schedule.validate.api.helpers;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.nubo.schedule.validate.api.models.dto.response.ScheduleDto;
import com.nubo.schedule.validate.api.models.dto.response.ScheduleLogDto;
import com.nubo.schedule.validate.api.models.entity.ScheduleLogEntity;
import com.nubo.schedule.validate.api.repository.CountryRepository;
import com.nubo.schedule.validate.api.repository.ModuleRepository;
import com.nubo.schedule.validate.api.repository.StatusRepository;
import com.nubo.schedule.validate.api.repository.TypeRepository;
import com.nubo.schedule.validate.api.repository.UserNuboRepository;

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

## src/main/java/com/nubo/schedule/validate/api/helpers/ScheduleMapperUtil.java

```java
package com.nubo.schedule.validate.api.helpers;

import com.nubo.schedule.validate.api.models.dto.response.ScheduleDto;
import com.nubo.schedule.validate.api.models.entity.ScheduleEntity;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class ScheduleMapperUtil {

    public static ScheduleDto toDto(ScheduleEntity entity) {
        if (entity==null) return null;
        return ScheduleDto.builder()
                .id(entity.getId())
                .description(entity.getDescription())
                .openingTime(entity.getOpeningTime())
                .closingTime(entity.getClosingTime())
                .type(entity.getType()!=null ? TypeMapperUtil.toDto(entity.getType()):null)
                .startDate(entity.getStartDate())
                .endDate(entity.getEndDate())
                .country(entity.getCountry()!=null ? CountryMapperUtil.toDto(entity.getCountry()):null)
                .module(entity.getModule()!=null ? ModuleMapperUtil.toDto(entity.getModule()):null)
                .frequency(entity.getFrequency())
                .status(entity.getStatus()!=null ? StatusMapperUtil.toDto(entity.getStatus()):null)
                .internal(entity.getInternal())
                .userNubo(entity.getUserNubo()!=null ? UserNuboMapperUtil.toDto(entity.getUserNubo()):null)
                .lastModifyUser(entity.getLastModifyUser())
                .lastModifyApplication(entity.getLastModifyApplication())
                .lastModifyDate(entity.getLastModifyDate())
                .lastModifyIp(entity.getLastModifyIp())
                .build();
    }

    public static List<ScheduleDto> toDtoList(List<ScheduleEntity> entities) {
        if (entities==null || entities.isEmpty()) {
            return Collections.emptyList();
        }
        return entities.stream()
                .map(ScheduleMapperUtil::toDto)
                .collect(Collectors.toList());
    }
}
```

## src/main/java/com/nubo/schedule/validate/api/helpers/ScheduleStatusHistoryMapperUtil.java

```java
package com.nubo.schedule.validate.api.helpers;

import com.nubo.schedule.validate.api.models.dto.response.ScheduleStatusHistoryDto;
import com.nubo.schedule.validate.api.models.entity.ScheduleStatusHistoryEntity;

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

## src/main/java/com/nubo/schedule/validate/api/helpers/ScreenMapperUtil.java

```java
package com.nubo.schedule.validate.api.helpers;

import com.nubo.schedule.validate.api.models.dto.response.ScreenDto;
import com.nubo.schedule.validate.api.models.entity.ScreenEntity;

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

## src/main/java/com/nubo/schedule/validate/api/helpers/StatusMapperUtil.java

```java
package com.nubo.schedule.validate.api.helpers;

import com.nubo.schedule.validate.api.models.dto.response.StatusDto;
import com.nubo.schedule.validate.api.models.entity.StatusEntity;

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

## src/main/java/com/nubo/schedule/validate/api/helpers/SubmoduleMapperUtil.java

```java
package com.nubo.schedule.validate.api.helpers;

import com.nubo.schedule.validate.api.models.dto.response.SubmoduleDto;
import com.nubo.schedule.validate.api.models.entity.SubmoduleEntity;

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

## src/main/java/com/nubo/schedule/validate/api/helpers/TypeMapperUtil.java

```java
package com.nubo.schedule.validate.api.helpers;

import com.nubo.schedule.validate.api.models.dto.response.TypeDto;
import com.nubo.schedule.validate.api.models.entity.TypeEntity;

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

## src/main/java/com/nubo/schedule/validate/api/helpers/UserNuboMapperUtil.java

```java
package com.nubo.schedule.validate.api.helpers;

import com.nubo.schedule.validate.api.models.dto.response.UserNuboDto;
import com.nubo.schedule.validate.api.models.entity.UserNuboEntity;

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

## src/main/java/com/nubo/schedule/validate/api/helpers/specification/ScheduleSpecification.java

```java
package com.nubo.schedule.validate.api.helpers.specification;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.jpa.domain.Specification;

import com.nubo.schedule.validate.api.models.entity.ScheduleEntity;
import com.nubo.schedule.validate.api.models.enums.CountryCodeEnum;
import com.nubo.schedule.validate.api.models.enums.UserTypeEnum;

import jakarta.persistence.criteria.Predicate;

public class ScheduleSpecification {

    public static Specification<ScheduleEntity> filterBy(
            Long processId, String processSearch,
            Long moduleId, String moduleSearch,
            Long submoduleId, String submoduleSearch,
            Long stateId, String stateSearch,
            List<Long> countryIds, String countrySearch,
            UserTypeEnum userType, Long userId) {

        return (root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();


            if (processId!=null) {
                predicates.add(criteriaBuilder.equal(root.get("process").get("id"), processId));
            } else if (processSearch!=null && !processSearch.trim().isEmpty()) {
                String searchPattern = "%" + processSearch.toLowerCase() + "%";
                Predicate descriptionPredicate = criteriaBuilder.like(
                        criteriaBuilder.lower(root.get("process").get("description")), searchPattern);
                predicates.add(descriptionPredicate);
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


            if (submoduleId!=null) {
                predicates.add(criteriaBuilder.equal(root.get("submodule").get("id"), submoduleId));
            } else if (submoduleSearch!=null && !submoduleSearch.trim().isEmpty()) {
                String searchPattern = "%" + submoduleSearch.toLowerCase() + "%";
                Predicate submoduleNotNull = criteriaBuilder.isNotNull(root.get("submodule"));
                Predicate namePredicate = criteriaBuilder.like(
                        criteriaBuilder.lower(root.get("submodule").get("name")), searchPattern);
                Predicate descriptionPredicate = criteriaBuilder.like(
                        criteriaBuilder.lower(root.get("submodule").get("description")), searchPattern);
                predicates.add(criteriaBuilder.and(submoduleNotNull, criteriaBuilder.or(namePredicate, descriptionPredicate)));
            }

            if (stateId!=null) {
                predicates.add(criteriaBuilder.equal(root.get("status").get("id"), stateId));
            } else if (stateSearch!=null && !stateSearch.trim().isEmpty()) {
                String searchPattern = "%" + stateSearch.toLowerCase() + "%";
                Predicate descriptionPredicate = criteriaBuilder.like(
                        criteriaBuilder.lower(root.get("status").get("description")), searchPattern);
                Predicate categoryPredicate = criteriaBuilder.like(
                        criteriaBuilder.lower(root.get("status").get("category")), searchPattern);
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


            if (UserTypeEnum.EXTERNAL.equals(userType)) {
                Predicate externalProcesses = criteriaBuilder.notEqual(root.get("type").get("id"), 900L);
                predicates.add(externalProcesses);
            }

            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }
}
```

## src/main/java/com/nubo/schedule/validate/api/models/dto/request/ScheduleValidationInDto.java

```java
package com.nubo.schedule.validate.api.models.dto.request;

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
public class ScheduleValidationInDto {

    private List<LocalDate> secondaryDates;

}

```

## src/main/java/com/nubo/schedule/validate/api/models/dto/response/CountryDto.java

```java
package com.nubo.schedule.validate.api.models.dto.response;

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

## src/main/java/com/nubo/schedule/validate/api/models/dto/response/FrequencyDto.java

```java
package com.nubo.schedule.validate.api.models.dto.response;

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

## src/main/java/com/nubo/schedule/validate/api/models/dto/response/MicroserviceDto.java

```java
package com.nubo.schedule.validate.api.models.dto.response;

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

## src/main/java/com/nubo/schedule/validate/api/models/dto/response/ModuleDto.java

```java
package com.nubo.schedule.validate.api.models.dto.response;

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

## src/main/java/com/nubo/schedule/validate/api/models/dto/response/PageResponseOutDto.java

```java
package com.nubo.schedule.validate.api.models.dto.response;

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

## src/main/java/com/nubo/schedule/validate/api/models/dto/response/ParticipantDto.java

```java
package com.nubo.schedule.validate.api.models.dto.response;

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

## src/main/java/com/nubo/schedule/validate/api/models/dto/response/ProcessDto.java

```java
package com.nubo.schedule.validate.api.models.dto.response;

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

## src/main/java/com/nubo/schedule/validate/api/models/dto/response/RejectionReasonDto.java

```java
package com.nubo.schedule.validate.api.models.dto.response;

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

## src/main/java/com/nubo/schedule/validate/api/models/dto/response/RelatedScheduleDto.java

```java
package com.nubo.schedule.validate.api.models.dto.response;

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

## src/main/java/com/nubo/schedule/validate/api/models/dto/response/ScheduleAssociationDto.java

```java
package com.nubo.schedule.validate.api.models.dto.response;

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

    private Integer id;
    private String description;
    private ScheduleDto schedule;
    private TypeDto type;
    private LocalTime startTime;
    private LocalTime endTime;
    private CountryDto country;
    private Boolean dependency;
}
```

## src/main/java/com/nubo/schedule/validate/api/models/dto/response/ScheduleDto.java

```java
package com.nubo.schedule.validate.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

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
    private Integer frequency;
    private StatusDto status;
    private Boolean internal;
    private UserNuboDto userNubo;
    private String lastModifyUser;
    private String lastModifyApplication;
    private LocalDateTime lastModifyDate;
    private String lastModifyIp;

}
```

## src/main/java/com/nubo/schedule/validate/api/models/dto/response/ScheduleLogDto.java

```java
package com.nubo.schedule.validate.api.models.dto.response;

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

## src/main/java/com/nubo/schedule/validate/api/models/dto/response/ScheduleStatusHistoryDto.java

```java
package com.nubo.schedule.validate.api.models.dto.response;

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

## src/main/java/com/nubo/schedule/validate/api/models/dto/response/ScheduleValidationResponseDto.java

```java
package com.nubo.schedule.validate.api.models.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ScheduleValidationResponseDto {

    private Boolean inSchedule;
    private Boolean isBusinessDay = true;
    private String message;
}

```

## src/main/java/com/nubo/schedule/validate/api/models/dto/response/ScreenDto.java

```java
package com.nubo.schedule.validate.api.models.dto.response;

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

## src/main/java/com/nubo/schedule/validate/api/models/dto/response/StatusDto.java

```java
package com.nubo.schedule.validate.api.models.dto.response;

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

## src/main/java/com/nubo/schedule/validate/api/models/dto/response/SubmoduleDto.java

```java
package com.nubo.schedule.validate.api.models.dto.response;

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

## src/main/java/com/nubo/schedule/validate/api/models/dto/response/TimeZoneDto.java

```java
package com.nubo.schedule.validate.api.models.dto.response;

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

## src/main/java/com/nubo/schedule/validate/api/models/dto/response/TypeDto.java

```java
package com.nubo.schedule.validate.api.models.dto.response;

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

## src/main/java/com/nubo/schedule/validate/api/models/dto/response/UserNuboDto.java

```java
package com.nubo.schedule.validate.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.nubo.schedule.validate.api.models.enums.UserTypeEnum;

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

## src/main/java/com/nubo/schedule/validate/api/models/entity/CityEntity.java

```java
package com.nubo.schedule.validate.api.models.entity;

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

## src/main/java/com/nubo/schedule/validate/api/models/entity/ClassEntity.java

```java
package com.nubo.schedule.validate.api.models.entity;

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

## src/main/java/com/nubo/schedule/validate/api/models/entity/CountryEntity.java

```java
package com.nubo.schedule.validate.api.models.entity;

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

## src/main/java/com/nubo/schedule/validate/api/models/entity/CurrencyEntity.java

```java
package com.nubo.schedule.validate.api.models.entity;

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

## src/main/java/com/nubo/schedule/validate/api/models/entity/DepartmentEntity.java

```java
package com.nubo.schedule.validate.api.models.entity;

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

## src/main/java/com/nubo/schedule/validate/api/models/entity/DepositoryEntity.java

```java
package com.nubo.schedule.validate.api.models.entity;

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
    @Column(name = "\"DEPOSITORY_ID\"", length = 2, nullable = false)
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

## src/main/java/com/nubo/schedule/validate/api/models/entity/FinancialConditionEntity.java

```java
package com.nubo.schedule.validate.api.models.entity;

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
@Table(name = "\"FINANCIAL_CONDITION\"", schema = "\"NUANBODB\"")
public class FinancialConditionEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"FINANCIAL_CONDITION_ID\"", nullable = false)
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

## src/main/java/com/nubo/schedule/validate/api/models/entity/FrequencyEntity.java

```java
package com.nubo.schedule.validate.api.models.entity;

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

## src/main/java/com/nubo/schedule/validate/api/models/entity/GicsEntity.java

```java
package com.nubo.schedule.validate.api.models.entity;

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

## src/main/java/com/nubo/schedule/validate/api/models/entity/GicsMappingEntity.java

```java
package com.nubo.schedule.validate.api.models.entity;

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
@Table(name = "\"GICS_MAPPING\"", schema = "\"NUANBODB\"")
public class GicsMappingEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"GICS_MAPPING_ID\"", nullable = false)
    private Integer id;

    @Column(name = "\"EXTERNAL_SYSTEM\"", length = 30, nullable = false)
    private String externalSystem;

    @Column(name = "\"EXTERNAL_CODE\"", length = 20)
    private String externalCode;

    @Column(name = "\"CATEGORY\"", length = 30)
    private String category;

    @Column(name = "\"EXTERNAL_DESCRIPTION\"", length = 255)
    private String externalDescription;

    @ManyToOne
    @JoinColumn(name = "\"GICS_ID\"", nullable = false)
    private GicsEntity gics;

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

## src/main/java/com/nubo/schedule/validate/api/models/entity/IdentificationTypeEntity.java

```java
package com.nubo.schedule.validate.api.models.entity;

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

## src/main/java/com/nubo/schedule/validate/api/models/entity/MarketEntity.java

```java
package com.nubo.schedule.validate.api.models.entity;

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

## src/main/java/com/nubo/schedule/validate/api/models/entity/MicroserviceEntity.java

```java
package com.nubo.schedule.validate.api.models.entity;

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

## src/main/java/com/nubo/schedule/validate/api/models/entity/ModuleAccessTypeEntity.java

```java
package com.nubo.schedule.validate.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.Table;
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
@Entity
@Table(name = "\"MODULE_ACCESS_TYPE\"", schema = "\"NUANBODB\"")
@IdClass(ModuleAccessTypeEntity.ModuleAccessTypeId.class)
public class ModuleAccessTypeEntity {

    @Id
    @Column(name = "\"MODULE_ID\"", nullable = false)
    private Integer moduleId;

    @Id
    @Column(name = "\"ACCESS_TYPE_ID\"", nullable = false)
    private Integer accessTypeId;

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
    public static class ModuleAccessTypeId implements Serializable {
        private Integer moduleId;
        private Integer accessTypeId;
    }
}
```

## src/main/java/com/nubo/schedule/validate/api/models/entity/ModuleEntity.java

```java
package com.nubo.schedule.validate.api.models.entity;

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

## src/main/java/com/nubo/schedule/validate/api/models/entity/ParticipantAccountEntity.java

```java
package com.nubo.schedule.validate.api.models.entity;

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

## src/main/java/com/nubo/schedule/validate/api/models/entity/ParticipantEntity.java

```java
package com.nubo.schedule.validate.api.models.entity;

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

## src/main/java/com/nubo/schedule/validate/api/models/entity/ProcessEntity.java

```java
package com.nubo.schedule.validate.api.models.entity;

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

## src/main/java/com/nubo/schedule/validate/api/models/entity/RejectionReasonEntity.java

```java
package com.nubo.schedule.validate.api.models.entity;

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

## src/main/java/com/nubo/schedule/validate/api/models/entity/RelatedScheduleEntity.java

```java
package com.nubo.schedule.validate.api.models.entity;

import java.io.Serializable;
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
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"RELATED_SCHEDULE\"", schema = "\"NUANBODB\"")
@IdClass(RelatedScheduleEntityId.class)
public class RelatedScheduleEntity implements Serializable {


    @Id
    @ManyToOne
    @JoinColumn(name = "\"SCHEDULE_ID\"", nullable = false)
    private ScheduleEntity schedule;

    @Id
    @ManyToOne
    @JoinColumn(name = "\"RELATED_SCHEDULE_ID\"", nullable = false)
    private ScheduleEntity relatedSchedule;

    @Column(name = "\"RELATION_TYPE\"", nullable = false)
    private Integer relationType;

    @Column(name = "\"DEPENDENCE\"")
    private Boolean dependence;

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

## src/main/java/com/nubo/schedule/validate/api/models/entity/RelatedScheduleEntityId.java

```java
package com.nubo.schedule.validate.api.models.entity;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RelatedScheduleEntityId implements Serializable {
    private Long schedule;
    private Long relatedSchedule;
}

```

## src/main/java/com/nubo/schedule/validate/api/models/entity/ScheduleAssociationEntity.java

```java
package com.nubo.schedule.validate.api.models.entity;

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
import java.time.LocalTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"SCHEDULE_ASSOCIATION\"", schema = "\"NUANBODB\"")
public class ScheduleAssociationEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"SCHEDULE_ASSOCIATION_ID\"", nullable = false)
    private Integer id;

    @Column(name = "\"DESCRIPTION\"", length = 80, nullable = false)
    private String description;

    @ManyToOne
    @JoinColumn(name = "\"PARENT_SCHEDULE_ID\"")
    private ScheduleEntity parentSchedule;

    @ManyToOne
    @JoinColumn(name = "\"CHILD_SCHEDULE_ID\"")
    private ScheduleEntity childSchedule;

    @ManyToOne
    @JoinColumn(name = "\"TYPE_ID\"", nullable = false)
    private TypeEntity type;

    @Column(name = "\"START_TIME\"")
    private LocalTime startTime;

    @Column(name = "\"END_TIME\"")
    private LocalTime endTime;

    @ManyToOne
    @JoinColumn(name = "\"COUNTRY_ID\"", nullable = false)
    private CountryEntity country;

    @Column(name = "\"DEPENDENCY\"")
    private Boolean dependency;

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

## src/main/java/com/nubo/schedule/validate/api/models/entity/ScheduleEntity.java

```java
package com.nubo.schedule.validate.api.models.entity;

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
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
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

    @Column(name = "\"CLOSING_TIME_SECONDARY\"")
    private LocalTime closingTimeSecondary;

    @ManyToOne
    @JoinColumn(name = "\"TYPE_ID\"", nullable = false)
    private TypeEntity type;

    @Column(name = "\"START_DATE\"")
    private LocalDate startDate;

    @Column(name = "\"END_DATE\"")
    private LocalDate endDate;

    @ManyToOne
    @JoinColumn(name = "\"COUNTRY_ID\"", nullable = false)
    private CountryEntity country;

    @ManyToOne
    @JoinColumn(name = "\"MODULE_ID\"", nullable = false)
    private ModuleEntity module;

    @Column(name = "\"FREQUENCY\"", nullable = false)
    private Integer frequency;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"", nullable = false)
    private StatusEntity status;

    @Column(name = "\"INTERNAL\"")
    private Boolean internal;

    @ManyToOne
    @JoinColumn(name = "\"USER_NUBO_ID\"", nullable = false)
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
    @JoinColumn(name = "\"PROCESS_ID\"", nullable = false)
    private ProcessEntity process;

    @ManyToOne
    @JoinColumn(name = "\"SCREEN_ACTION_ID\"", nullable = false)
    private ScreenActionEntity screenAction;

}
```

## src/main/java/com/nubo/schedule/validate/api/models/entity/ScheduleExtensionEntity.java

```java
package com.nubo.schedule.validate.api.models.entity;

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
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"SCHEDULE_EXTENSION\"", schema = "\"NUANBODB\"")
public class ScheduleExtensionEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"SCHEDULE_EXTENSION_ID\"", nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "\"SCHEDULE_ID\"", nullable = false)
    private ScheduleEntity schedule;

    @Column(name = "\"NEW_CLOSING_TIME\"")
    private LocalTime newClosingTime;

    @Column(name = "\"ENTIRE_MARKET\"")
    private Boolean entireMarket;

    @Column(name = "\"DESCRIPTION\"", length = 255)
    private String description;

    @Column(name = "\"BILLABLE\"")
    private Boolean billable;

    @ManyToOne
    @JoinColumn(name = "\"PARTICIPANT_ID\"", nullable = false)
    private ParticipantEntity participant;

    @ManyToOne
    @JoinColumn(name = "\"REJECTION_REASON_ID\"", nullable = false)
    private RejectionReasonEntity rejectionReason;

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

## src/main/java/com/nubo/schedule/validate/api/models/entity/ScheduleExtensionStatusHistoryEntity.java

```java
package com.nubo.schedule.validate.api.models.entity;

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

import java.io.Serializable;
import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"SCHDEULE_EXTENSION_STATUS_HISTORY\"", schema = "\"NUANBODB\"")
@IdClass(ScheduleExtensionStatusHistoryEntity.ScheduleExtensionStatusHistoryId.class)
public class ScheduleExtensionStatusHistoryEntity {

    @Id
    @Column(name = "\"SCHDEULE_EXTENSION_ID\"", nullable = false)
    private Long scheduleExtensionId;

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
    public static class ScheduleExtensionStatusHistoryId implements Serializable {
        private Long scheduleExtensionId;
        private LocalDateTime time;
    }
}
```

## src/main/java/com/nubo/schedule/validate/api/models/entity/ScheduleLogEntity.java

```java
package com.nubo.schedule.validate.api.models.entity;

import java.time.OffsetDateTime;

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

## src/main/java/com/nubo/schedule/validate/api/models/entity/ScheduleStatusHistoryEntity.java

```java
package com.nubo.schedule.validate.api.models.entity;

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

import java.io.Serializable;
import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"SCHDEULE_STATUS_HISTORY\"", schema = "\"NUANBODB\"")
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

## src/main/java/com/nubo/schedule/validate/api/models/entity/ScreenActionEntity.java

```java
package com.nubo.schedule.validate.api.models.entity;

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

## src/main/java/com/nubo/schedule/validate/api/models/entity/ScreenEntity.java

```java
package com.nubo.schedule.validate.api.models.entity;

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

## src/main/java/com/nubo/schedule/validate/api/models/entity/StatusEntity.java

```java
package com.nubo.schedule.validate.api.models.entity;

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

## src/main/java/com/nubo/schedule/validate/api/models/entity/SubmoduleAccessTypeEntity.java

```java
package com.nubo.schedule.validate.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.Table;
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
@Entity
@Table(name = "\"SUBMODULE_ACCESS_TYPE\"", schema = "\"NUANBODB\"")
@IdClass(SubmoduleAccessTypeEntity.SubmoduleAccessTypeId.class)
public class SubmoduleAccessTypeEntity {

    @Id
    @Column(name = "\"SUBMODULE_ID\"", nullable = false)
    private Integer submoduleId;

    @Id
    @Column(name = "\"ACCESS_TYPE_ID\"", nullable = false)
    private Integer accessTypeId;

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
    public static class SubmoduleAccessTypeId implements Serializable {
        private Integer submoduleId;
        private Integer accessTypeId;
    }
}
```

## src/main/java/com/nubo/schedule/validate/api/models/entity/SubmoduleEntity.java

```java
package com.nubo.schedule.validate.api.models.entity;

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

## src/main/java/com/nubo/schedule/validate/api/models/entity/TaxStatusEntity.java

```java
package com.nubo.schedule.validate.api.models.entity;

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

## src/main/java/com/nubo/schedule/validate/api/models/entity/TypeEntity.java

```java
package com.nubo.schedule.validate.api.models.entity;

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

## src/main/java/com/nubo/schedule/validate/api/models/entity/UserNuboEntity.java

```java
package com.nubo.schedule.validate.api.models.entity;

import java.time.LocalDateTime;

import com.nubo.schedule.validate.api.models.enums.UserTypeEnum;

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
import lombok.Data;
import lombok.NoArgsConstructor;

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

## src/main/java/com/nubo/schedule/validate/api/models/enums/CountryCodeEnum.java

```java
package com.nubo.schedule.validate.api.models.enums;

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

## src/main/java/com/nubo/schedule/validate/api/models/enums/MessageEnum.java

```java
package com.nubo.schedule.validate.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum MessageEnum {

    BUSINESS_DAY_NOT_VALID("No es un día hábil para ejecución de este proceso");

    private final String message;

}

```

## src/main/java/com/nubo/schedule/validate/api/models/enums/PropertiesEnum.java

```java
package com.nubo.schedule.validate.api.models.enums;

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

## src/main/java/com/nubo/schedule/validate/api/models/enums/UserTypeEnum.java

```java
package com.nubo.schedule.validate.api.models.enums;

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

## src/main/java/com/nubo/schedule/validate/api/models/enums/VersionApiEnum.java

```java
package com.nubo.schedule.validate.api.models.enums;

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

## src/main/java/com/nubo/schedule/validate/api/repository/CountryRepository.java

```java
package com.nubo.schedule.validate.api.repository;

import com.nubo.schedule.validate.api.models.entity.CountryEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CountryRepository extends JpaRepository<CountryEntity, Long> {

    List<CountryEntity> findByCodeIn(List<String> codes);
}
```

## src/main/java/com/nubo/schedule/validate/api/repository/FrequencyRepository.java

```java
package com.nubo.schedule.validate.api.repository;

import com.nubo.schedule.validate.api.models.entity.FrequencyEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FrequencyRepository extends JpaRepository<FrequencyEntity, Long> {
}
```

## src/main/java/com/nubo/schedule/validate/api/repository/MicroserviceRepository.java

```java
package com.nubo.schedule.validate.api.repository;

import com.nubo.schedule.validate.api.models.entity.MicroserviceEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface MicroserviceRepository extends JpaRepository<MicroserviceEntity, Long>, JpaSpecificationExecutor<MicroserviceEntity> {
}
```

## src/main/java/com/nubo/schedule/validate/api/repository/ModuleRepository.java

```java
package com.nubo.schedule.validate.api.repository;

import com.nubo.schedule.validate.api.models.entity.ModuleEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface ModuleRepository extends JpaRepository<ModuleEntity, Long>, JpaSpecificationExecutor<ModuleEntity> {

}
```

## src/main/java/com/nubo/schedule/validate/api/repository/ParticipantRepository.java

```java
package com.nubo.schedule.validate.api.repository;

import com.nubo.schedule.validate.api.models.entity.ParticipantEntity;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ParticipantRepository extends JpaRepository<ParticipantEntity, Long> {
}

```

## src/main/java/com/nubo/schedule/validate/api/repository/ProcessRepository.java

```java
package com.nubo.schedule.validate.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.nubo.schedule.validate.api.models.entity.ProcessEntity;

public interface ProcessRepository extends JpaRepository<ProcessEntity, Long>, JpaSpecificationExecutor<ProcessEntity> {

}
```

## src/main/java/com/nubo/schedule/validate/api/repository/RejectionReasonRepository.java

```java
package com.nubo.schedule.validate.api.repository;

import com.nubo.schedule.validate.api.models.entity.RejectionReasonEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface RejectionReasonRepository extends JpaRepository<RejectionReasonEntity, Long>, JpaSpecificationExecutor<RejectionReasonEntity> {
}
```

## src/main/java/com/nubo/schedule/validate/api/repository/RelatedScheduleRepository.java

```java
package com.nubo.schedule.validate.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.nubo.schedule.validate.api.models.entity.RelatedScheduleEntity;

public interface RelatedScheduleRepository extends JpaRepository<RelatedScheduleEntity, Long>, JpaSpecificationExecutor<RelatedScheduleEntity> {

}
```

## src/main/java/com/nubo/schedule/validate/api/repository/ScheduleAssociationRepository.java

```java
package com.nubo.schedule.validate.api.repository;

import com.nubo.schedule.validate.api.models.entity.ScheduleAssociationEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ScheduleAssociationRepository extends JpaRepository<ScheduleAssociationEntity, Integer> {

    List<ScheduleAssociationEntity> findByParentScheduleIdOrChildScheduleId(Long parentScheduleId, Long childScheduleId);
}
```

## src/main/java/com/nubo/schedule/validate/api/repository/ScheduleExtensionRepository.java

```java
package com.nubo.schedule.validate.api.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.schedule.validate.api.models.entity.ScheduleExtensionEntity;

public interface ScheduleExtensionRepository extends JpaRepository<ScheduleExtensionEntity, Long> {

    Optional<ScheduleExtensionEntity> findByScheduleIdAndParticipantId(Long scheduleId, Long participantId);
}

```

## src/main/java/com/nubo/schedule/validate/api/repository/ScheduleLogRepository.java

```java
package com.nubo.schedule.validate.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.nubo.schedule.validate.api.models.entity.ScheduleLogEntity;

public interface ScheduleLogRepository extends JpaRepository<ScheduleLogEntity, Long>, JpaSpecificationExecutor<ScheduleLogEntity> {

}
```

## src/main/java/com/nubo/schedule/validate/api/repository/ScheduleRepository.java

```java
package com.nubo.schedule.validate.api.repository;

import com.nubo.schedule.validate.api.models.entity.ScheduleEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;

public interface ScheduleRepository extends JpaRepository<ScheduleEntity, Long>, JpaSpecificationExecutor<ScheduleEntity> {

    List<ScheduleEntity> findByUserNuboId(Long userNuboId);
    ScheduleEntity findFirstByProcessIdAndCountryId(Long processId, Long countryId);
    ScheduleEntity findFirstByScreenActionIdAndCountryId(Long screenActionId, Long countryId);
}
```

## src/main/java/com/nubo/schedule/validate/api/repository/ScheduleStatusHistoryRepository.java

```java
package com.nubo.schedule.validate.api.repository;

import com.nubo.schedule.validate.api.models.entity.ScheduleStatusHistoryEntity;
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

## src/main/java/com/nubo/schedule/validate/api/repository/ScreenActionRepository.java

```java
package com.nubo.schedule.validate.api.repository;

import com.nubo.schedule.validate.api.models.entity.ScreenActionEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface ScreenActionRepository extends JpaRepository<ScreenActionEntity, Long>, JpaSpecificationExecutor<ScreenActionEntity> {

}

```

## src/main/java/com/nubo/schedule/validate/api/repository/ScreenRepository.java

```java
package com.nubo.schedule.validate.api.repository;

import com.nubo.schedule.validate.api.models.entity.ScreenEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ScreenRepository extends JpaRepository<ScreenEntity, Long> {
}
```

## src/main/java/com/nubo/schedule/validate/api/repository/StatusRepository.java

```java
package com.nubo.schedule.validate.api.repository;

import com.nubo.schedule.validate.api.models.entity.StatusEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StatusRepository extends JpaRepository<StatusEntity, Long> {

    List<StatusEntity> findByCategory(String category);
}
```

## src/main/java/com/nubo/schedule/validate/api/repository/SubmoduleRepository.java

```java
package com.nubo.schedule.validate.api.repository;

import com.nubo.schedule.validate.api.models.entity.SubmoduleEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface SubmoduleRepository extends JpaRepository<SubmoduleEntity, Long>, JpaSpecificationExecutor<SubmoduleEntity> {

}
```

## src/main/java/com/nubo/schedule/validate/api/repository/TypeRepository.java

```java
package com.nubo.schedule.validate.api.repository;

import com.nubo.schedule.validate.api.models.entity.TypeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TypeRepository extends JpaRepository<TypeEntity, Long> {

    List<TypeEntity> findByCategory(String category);
}
```

## src/main/java/com/nubo/schedule/validate/api/repository/UserNuboRepository.java

```java
package com.nubo.schedule.validate.api.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.nubo.schedule.validate.api.models.entity.UserNuboEntity;

public interface UserNuboRepository extends JpaRepository<UserNuboEntity, Long> {

    @Query("SELECT u FROM UserNuboEntity u " +
            "WHERE u.userName = :userName")
    Optional<UserNuboEntity> findByUserName(String userName);

    @Query("SELECT u FROM UserNuboEntity u " +
            "WHERE u.participant.id = :participantId " +
            "ORDER BY u.id ASC LIMIT 1")
    Optional<UserNuboEntity> findByParticipantId(Long participantId);

    @Query("SELECT COUNT(u) FROM UserNuboEntity u " +
            "WHERE u.participant.id = :participantId")
    Long countByParticipantId(Long participantId);
}
```

## src/main/java/com/nubo/schedule/validate/api/service/ScheduleValidationService.java

```java
package com.nubo.schedule.validate.api.service;

import com.nubo.schedule.validate.api.models.dto.response.ScheduleValidationResponseDto;

public interface ScheduleValidationService {

    Boolean validateScheduleTime(Long participantId, Long processId);

    ScheduleValidationResponseDto validateScheduleTimeByParticipantAndProcess(Long participantId, Long processId, Boolean bypass);

    ScheduleValidationResponseDto validateScheduleTimeByParticipantAndScreenAction(Long participantId, Long screenActionCode, Boolean bypass);

    ScheduleValidationResponseDto validateScheduleTimeByUserAndScreenAction(Long countryId, String userType, Long screenActionCode, Boolean bypass,
                                                                            Boolean isClosingTimeSecondary);

    ScheduleValidationResponseDto validateScheduleTimeByProcessOrScreenActionAndCountry(Long processId, Long screenActionCode, Long countryId, Boolean bypass);

    ScheduleValidationResponseDto validateScheduleByProcessOrScreenActionForUser(
            Long processId, Long screenActionCode, Long countryId,
            String userType, Long participantId, Boolean bypass, Boolean isClosingTimeSecondary);
}

```

## src/main/java/com/nubo/schedule/validate/api/service/impl/ScheduleValidationServiceImpl.java

```java
package com.nubo.schedule.validate.api.service.impl;

import com.nubo.schedule.validate.api.application.properties.PropertiesContext;
import com.nubo.schedule.validate.api.client.business.day.calculation.models.dto.response.BusinessDayOutDto;
import com.nubo.schedule.validate.api.client.business.day.calculation.service.BusinessDayCalculationClient;
import com.nubo.schedule.validate.api.exception.ServiceException;
import com.nubo.schedule.validate.api.exception.error.ErrorCode;
import com.nubo.schedule.validate.api.models.dto.response.ScheduleValidationResponseDto;
import com.nubo.schedule.validate.api.models.entity.CountryEntity;
import com.nubo.schedule.validate.api.models.entity.ParticipantEntity;
import com.nubo.schedule.validate.api.models.entity.ScheduleEntity;
import com.nubo.schedule.validate.api.models.entity.ScheduleExtensionEntity;
import com.nubo.schedule.validate.api.models.enums.MessageEnum;
import com.nubo.schedule.validate.api.models.enums.UserTypeEnum;
import com.nubo.schedule.validate.api.models.enums.VersionApiEnum;
import com.nubo.schedule.validate.api.repository.CountryRepository;
import com.nubo.schedule.validate.api.repository.ParticipantRepository;
import com.nubo.schedule.validate.api.repository.ScheduleExtensionRepository;
import com.nubo.schedule.validate.api.repository.ScheduleRepository;
import com.nubo.schedule.validate.api.service.ScheduleValidationService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.Objects;
import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ScheduleValidationServiceImpl implements ScheduleValidationService {

    private final ParticipantRepository participantRepository;
    private final ScheduleExtensionRepository scheduleExtensionRepository;
    private final CountryRepository countryRepository;
    private final BusinessDayCalculationClient businessDayCalculationClient;
    private final ScheduleRepository scheduleRepository;

    @Override
    public Boolean validateScheduleTime(Long participantId, Long processId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return validateScheduleTimeV1(participantId, processId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    public Boolean validateScheduleTimeV1(Long participantId, Long processId) {
        log.debug("Start method validateScheduleTimeV1 for participantId: {} and processId: {}", participantId, processId);

        ParticipantEntity participant = participantRepository.findById(participantId)
                .orElseThrow(() -> new ServiceException(ErrorCode.PARTICIPANT_NOT_FOUND, HttpStatus.NOT_FOUND));

        CountryEntity country = participant.getCountry();
        if (country == null || country.getTimeZone() == null) {
            throw new ServiceException(ErrorCode.COUNTRY_NOT_FOUND, HttpStatus.NOT_FOUND);
        }

        String timeZone = country.getTimeZone();
        log.debug("Country timezone: {}", timeZone);

        ZoneId zoneId = parseTimeZone(timeZone);
        LocalDateTime serverDateTime = LocalDateTime.now();
        log.debug("Server datetime: {}", serverDateTime);

        ZonedDateTime serverZonedDateTime = serverDateTime.atZone(ZoneId.systemDefault());
        ZonedDateTime countryZonedDateTime = serverZonedDateTime.withZoneSameInstant(zoneId);
        LocalTime currentCountryTime = countryZonedDateTime.toLocalTime();
        log.debug("Country current time: {}", currentCountryTime);

        ScheduleEntity schedule = findScheduleByProcessOrScreenAction(processId, null, country.getId());
        LocalTime openingTime = schedule.getOpeningTime();
        LocalTime closingTime = schedule.getClosingTime();

        log.debug("Schedule opening time: {}, closing time: {}", openingTime, closingTime);

        if (isTimeInRange(currentCountryTime, openingTime, closingTime)) {
            log.debug("Current time is within schedule range");
            return true;
        }

        log.debug("Current time is outside schedule range, checking for extensions");

        Optional<ScheduleExtensionEntity> extensionOpt = scheduleExtensionRepository
                .findByScheduleIdAndParticipantId(schedule.getId(), participantId);

        if (extensionOpt.isPresent()) {
            ScheduleExtensionEntity extension = extensionOpt.get();
            LocalTime newClosingTime = extension.getNewClosingTime();
            log.debug("Extension found with new closing time: {}", newClosingTime);

            if (isTimeInRange(currentCountryTime, openingTime, newClosingTime)) {
                log.debug("Current time is within extension range");
                return true;
            }
        }

        log.debug("Current time is outside all valid ranges");
        return false;
    }

    @Override
    public ScheduleValidationResponseDto validateScheduleTimeByParticipantAndProcess(Long participantId, Long processId, Boolean bypass) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return validateScheduleTimeByParticipantAndProcessV1(participantId, processId, bypass);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    public ScheduleValidationResponseDto validateScheduleTimeByParticipantAndProcessV1(Long participantId, Long processId, Boolean bypass) {
        log.debug("Start method validateScheduleTimeByParticipantAndProcessV1 for participantId: {}, processId: {}, bypass: {}", participantId, processId, bypass);

        ParticipantEntity participant = participantRepository.findById(participantId)
                .orElseThrow(() -> new ServiceException(ErrorCode.PARTICIPANT_NOT_FOUND, HttpStatus.NOT_FOUND));

        return validateScheduleWithoutUserValidation(processId, null, participant, "El proceso");
    }

    @Override
    public ScheduleValidationResponseDto validateScheduleTimeByParticipantAndScreenAction(Long participantId, Long screenActionCode, Boolean bypass) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return validateScheduleTimeByParticipantAndScreenActionV1(participantId, screenActionCode, bypass);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    public ScheduleValidationResponseDto validateScheduleTimeByParticipantAndScreenActionV1(Long participantId, Long screenActionCode, Boolean bypass) {
        log.debug("Start method validateScheduleTimeByParticipantAndScreenActionV1 for participantId: {}, screenActionCode: {}, bypass: {}", participantId, screenActionCode, bypass);

        ParticipantEntity participant = participantRepository.findById(participantId)
                .orElseThrow(() -> new ServiceException(ErrorCode.PARTICIPANT_NOT_FOUND, HttpStatus.NOT_FOUND));

        return validateScheduleWithoutUserValidation(null, screenActionCode, participant, "La acción");
    }

    @Override
    public ScheduleValidationResponseDto validateScheduleTimeByUserAndScreenAction(Long countryId, String userType, Long screenActionCode, Boolean bypass,
                                                                                   Boolean isClosingTimeSecondary) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return validateScheduleTimeByUserAndScreenActionV1(countryId, userType, screenActionCode, bypass, isClosingTimeSecondary);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }


    public ScheduleValidationResponseDto validateScheduleTimeByUserAndScreenActionV1(Long countryId, String userType, Long screenActionCode, Boolean bypass,
                                                                                     Boolean isClosingTimeSecondary) {
        log.debug("Start method validateScheduleTimeByUserAndScreenActionV1 for countryId: {}, userType: {}, screenActionCode: {}, bypass: {}, isClosingTimeSecondary: {}",
                countryId, userType, screenActionCode, bypass, isClosingTimeSecondary);

        UserTypeEnum userTypeEnum;
        try {
            userTypeEnum = UserTypeEnum.valueOf(userType);
        } catch (IllegalArgumentException e) {
            throw new ServiceException(ErrorCode.BAD_REQUEST, HttpStatus.BAD_REQUEST);
        }

        return validateScheduleByProcessOrScreenActionForUser(null, screenActionCode, userTypeEnum, countryId, null, bypass, isClosingTimeSecondary);
    }

    @Override
    public ScheduleValidationResponseDto validateScheduleTimeByProcessOrScreenActionAndCountry(Long processId, Long screenActionCode, Long countryId, Boolean bypass) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return validateScheduleTimeByProcessOrScreenActionAndCountryV1(processId, screenActionCode, countryId, bypass);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    public ScheduleValidationResponseDto validateScheduleTimeByProcessOrScreenActionAndCountryV1(Long processId, Long screenActionCode, Long countryId, Boolean bypass) {
        log.debug("Start method validateScheduleTimeByProcessOrScreenActionAndCountryV1 for processId: {}, screenActionCode: {}, countryId: {}, bypass: {}",
                processId, screenActionCode, countryId, bypass);

        if (processId == null && screenActionCode == null) {
            throw new ServiceException(ErrorCode.BAD_REQUEST, HttpStatus.BAD_REQUEST);
        }

        if (countryId == null) {
            throw new ServiceException(ErrorCode.COUNTRY_NOT_FOUND, HttpStatus.NOT_FOUND);
        }

        CountryEntity country = findCountryById(countryId);
        LocalTime currentCountryTime = getCurrentCountryTime(country.getTimeZone());

        ScheduleEntity schedule = findScheduleByProcessOrScreenAction(processId, screenActionCode, country.getId());
        boolean inSchedule = checkScheduleTimeWithoutParticipant(currentCountryTime, schedule);

        String entityType = processId != null ? "El proceso" : "La acción";

        if (inSchedule) {
            return ScheduleValidationResponseDto.builder()
                    .inSchedule(true)
                    .message("Horario válido")
                    .build();
        }

        if (bypass != null && bypass) {
            return ScheduleValidationResponseDto.builder()
                    .inSchedule(true)
                    .message("Fuera de horario, pero con bypass autorizado")
                    .build();
        }

        return ScheduleValidationResponseDto.builder()
                .inSchedule(false)
                .message(entityType + " no está en horario")
                .build();
    }

    @Override
    public ScheduleValidationResponseDto validateScheduleByProcessOrScreenActionForUser(Long processId, Long screenActionCode, Long countryId, String userType,
                                                                                        Long participantId, Boolean bypass, Boolean isClosingTimeSecondary) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return validateScheduleByProcessOrScreenActionForUserV1(processId, screenActionCode, countryId, userType, participantId, bypass, isClosingTimeSecondary);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    public ScheduleValidationResponseDto validateScheduleByProcessOrScreenActionForUserV1(Long processId, Long screenActionCode, Long countryId,
                                                                                          String userType, Long participantId, Boolean bypass, Boolean isClosingTimeSecondary) {
        log.debug("Start method validateScheduleByProcessOrScreenActionForUserV1 for processId: {}, screenActionCode: {}, countryId: {}, userType: {}, participantId: {}, bypass: {}, isSecondaryTime: {}",
                processId, screenActionCode, countryId, userType, participantId, bypass, isClosingTimeSecondary);

        if (processId == null && screenActionCode == null) {
            throw new ServiceException(ErrorCode.BAD_REQUEST, HttpStatus.BAD_REQUEST);
        }

        UserTypeEnum userTypeEnum;
        try {
            userTypeEnum = UserTypeEnum.valueOf(userType);
        } catch (IllegalArgumentException e) {
            throw new ServiceException(ErrorCode.BAD_REQUEST, HttpStatus.BAD_REQUEST);
        }

        BusinessDayOutDto businessDayOutDto = businessDayCalculationClient.validBusinessDay(countryId);
        if (!businessDayOutDto.getIsValidBusinessDay()) {
            return ScheduleValidationResponseDto.builder()
                    .inSchedule(false)
                    .isBusinessDay(false)
                    .message(MessageEnum.BUSINESS_DAY_NOT_VALID.getMessage())
                    .build();
        }

        return validateScheduleByProcessOrScreenActionForUser(processId, screenActionCode, userTypeEnum, countryId, participantId, bypass, isClosingTimeSecondary);
    }

    private CountryEntity findCountryById(Long countryId) {
        return countryRepository.findById(countryId)
                .orElseThrow(() -> new ServiceException(ErrorCode.COUNTRY_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private boolean checkScheduleTimeWithoutParticipant(LocalTime currentCountryTime, ScheduleEntity schedule) {
        LocalTime openingTime = schedule.getOpeningTime();
        LocalTime closingTime = schedule.getClosingTime();
        return isTimeInRange(currentCountryTime, openingTime, closingTime);
    }

    private boolean checkScheduleTimeWithClosingTimeSecondary(LocalTime currentCountryTime, ScheduleEntity schedule) {
        LocalTime openingTime = schedule.getOpeningTime();
        LocalTime closingTimeSecondary = schedule.getClosingTimeSecondary();
        return isTimeInRange(currentCountryTime, openingTime, closingTimeSecondary);
    }

    private LocalTime getCurrentCountryTime(String timeZone) {
        ZoneId zoneId = parseTimeZone(timeZone);
        LocalDateTime serverDateTime = LocalDateTime.now();
        ZonedDateTime serverZonedDateTime = serverDateTime.atZone(ZoneId.systemDefault());
        ZonedDateTime countryZonedDateTime = serverZonedDateTime.withZoneSameInstant(zoneId);
        return countryZonedDateTime.toLocalTime();
    }

    private boolean checkScheduleTime(LocalTime currentCountryTime, ScheduleEntity schedule, Long participantId) {
        LocalTime openingTime = schedule.getOpeningTime();
        LocalTime closingTime = schedule.getClosingTime();

        if (isTimeInRange(currentCountryTime, openingTime, closingTime)) {
            return true;
        }

        Optional<ScheduleExtensionEntity> extensionOpt = scheduleExtensionRepository
                .findByScheduleIdAndParticipantId(schedule.getId(), participantId);

        if (extensionOpt.isPresent()) {
            ScheduleExtensionEntity extension = extensionOpt.get();
            LocalTime newClosingTime = extension.getNewClosingTime();
            return isTimeInRange(currentCountryTime, openingTime, newClosingTime);
        }

        return false;
    }

    private ScheduleValidationResponseDto buildValidationResponse(boolean inSchedule, boolean isInternalUser, String entityType) {
        if (inSchedule) {
            return ScheduleValidationResponseDto.builder()
                    .inSchedule(true)
                    .message("Horario válido")
                    .build();
        }

        if (isInternalUser) {
            return ScheduleValidationResponseDto.builder()
                    .inSchedule(false)
                    .message("Fuera de horario, pero usuario interno puede continuar")
                    .build();
        }

        return ScheduleValidationResponseDto.builder()
                .inSchedule(false)
                .message(entityType + " no está en horario")
                .build();
    }

    private ScheduleEntity findScheduleByProcessOrScreenAction(Long processId, Long screenActionCode, Long countryId) {
        if (processId != null) {
            ScheduleEntity schedule = scheduleRepository.findFirstByProcessIdAndCountryId(processId, countryId);
            if (schedule == null) {
                throw new ServiceException(ErrorCode.SCHEDULE_NOT_FOUND, HttpStatus.NOT_FOUND);
            }
            return schedule;
        } else if (screenActionCode != null) {
            ScheduleEntity schedule = scheduleRepository.findFirstByScreenActionIdAndCountryId(screenActionCode, countryId);
            if (schedule == null) {
                throw new ServiceException(ErrorCode.SCHEDULE_NOT_FOUND, HttpStatus.NOT_FOUND);
            }
            return schedule;
        } else {
            throw new ServiceException(ErrorCode.NULL_PROCESS_SCREEN_ACTION, HttpStatus.NOT_FOUND);
        }
    }

    private ScheduleValidationResponseDto validateScheduleWithoutUserValidation(
            Long processId, Long screenActionCode, ParticipantEntity participant, String entityType) {

        log.debug("Validating schedule without user validation for participant: {}", participant.getId());

        CountryEntity country = participant.getCountry();
        if (country == null || country.getTimeZone() == null) {
            throw new ServiceException(ErrorCode.COUNTRY_NOT_FOUND, HttpStatus.NOT_FOUND);
        }

        BusinessDayOutDto businessDayOutDto = businessDayCalculationClient.validBusinessDay(country.getId());
        if (!businessDayOutDto.getIsValidBusinessDay()) {
            return ScheduleValidationResponseDto.builder()
                    .inSchedule(false)
                    .isBusinessDay(false)
                    .message(MessageEnum.BUSINESS_DAY_NOT_VALID.getMessage())
                    .build();
        }

        LocalTime currentCountryTime = getCurrentCountryTime(country.getTimeZone());

        ScheduleEntity schedule = findScheduleByProcessOrScreenAction(processId, screenActionCode, country.getId());
        boolean inSchedule = checkScheduleTime(currentCountryTime, schedule, participant.getId());

        return ScheduleValidationResponseDto.builder()
                .inSchedule(inSchedule)
                .message(inSchedule
                        ? "Horario válido"
                        : entityType + " no está en horario")
                .isBusinessDay(businessDayOutDto.getIsValidBusinessDay())
                .build();
    }

    private ScheduleValidationResponseDto validateScheduleByProcessOrScreenActionForUser(
            Long processId, Long screenActionCode, UserTypeEnum userType, Long countryId, Long participantId, Boolean bypass, Boolean isClosingTimeSecondary) {

        boolean isInternalUser = userType == UserTypeEnum.INTERNAL;

        if (bypass != null && bypass && isInternalUser) {
            log.debug("Bypass enabled for internal user");
            return ScheduleValidationResponseDto.builder()
                    .inSchedule(true)
                    .message("Usuario interno autorizado")
                    .build();
        }

        if (countryId == null) {
            throw new ServiceException(ErrorCode.COUNTRY_NOT_FOUND, HttpStatus.NOT_FOUND);
        }

        CountryEntity country = findCountryById(countryId);
        if (country.getTimeZone() == null) {
            throw new ServiceException(ErrorCode.COUNTRY_NOT_FOUND, HttpStatus.NOT_FOUND);
        }

        LocalTime currentCountryTime = getCurrentCountryTime(country.getTimeZone());

        String entityType = processId != null ? "El proceso" : "La acción";

        ScheduleEntity schedule = findScheduleByProcessOrScreenAction(processId, screenActionCode, countryId);

        boolean inSchedule;

        if (participantId != null) {
            inSchedule = checkScheduleTime(currentCountryTime, schedule, participantId);
        } else {
            inSchedule = checkScheduleTimeWithoutParticipant(currentCountryTime, schedule);
        }

        if (isClosingTimeSecondary && !ObjectUtils.isEmpty(schedule.getClosingTimeSecondary())) {
            inSchedule = checkScheduleTimeWithClosingTimeSecondary(currentCountryTime, schedule);
        }

        return buildValidationResponse(inSchedule, isInternalUser, entityType);
    }

    private ZoneId parseTimeZone(String timeZone) {
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
            log.error("Error parsing timezone: {}", timeZone, e);
            throw new ServiceException(ErrorCode.INVALID_TIMEZONE, HttpStatus.BAD_REQUEST);
        }
    }

    private String normalizeOffset(String offset) {
        if (offset.matches("[+-]\\d:\\d{2}")) {
            return offset.substring(0, 1) + "0" + offset.substring(1);
        } else if (offset.matches("[+-]\\d{1}$")) {
            return offset.substring(0, 1) + "0" + offset.substring(1);
        }
        return offset;
    }

    private boolean isTimeInRange(LocalTime currentTime, LocalTime startTime, LocalTime endTime) {
        return !currentTime.isBefore(startTime) && !currentTime.isAfter(endTime);
    }

}

```

## src/main/java/com/nubo/schedule/validate/api/web/controller/ScheduleValidationRestController.java

```java
package com.nubo.schedule.validate.api.web.controller;

import com.nubo.schedule.validate.api.models.dto.request.ScheduleValidationInDto;
import com.nubo.schedule.validate.api.models.dto.response.ScheduleValidationResponseDto;
import com.nubo.schedule.validate.api.service.ScheduleValidationService;
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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.List;

@Tag(name = "Schedule Validation")
@RestController
@RequestMapping("/{version}/schedule-validation")
@RequiredArgsConstructor
public class ScheduleValidationRestController {

    private final ScheduleValidationService scheduleValidationService;

    @Operation(
            summary = "Validate schedule time",
            description = "Validates if current time is within schedule operating hours for the given participant and process"
    )
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully validated schedule time",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = Boolean.class)))})
    @GetMapping("/validate")
    public ResponseEntity<Boolean> validateScheduleTime(
            @RequestParam Long participantId,
            @RequestParam Long processId) {

        return ResponseEntity.ok(scheduleValidationService.validateScheduleTime(participantId, processId));
    }

    @Operation(
            summary = "Validate schedule time by participant and process",
            description = "Validates if current time is within schedule operating hours for the given participant and process with bypass option"
    )
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully validated schedule time",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = ScheduleValidationResponseDto.class)))})
    @GetMapping("/validate/participant/process")
    public ResponseEntity<ScheduleValidationResponseDto> validateScheduleTimeByParticipantAndProcess(
            @RequestParam Long participantId,
            @RequestParam Long processId,
            @RequestParam(defaultValue = "false") Boolean bypass) {

        return ResponseEntity.ok(scheduleValidationService.validateScheduleTimeByParticipantAndProcess(participantId, processId, bypass));
    }

    @Operation(
            summary = "Validate schedule time by participant and screen action",
            description = "Validates if current time is within schedule operating hours for the given participant and screen action code with bypass option"
    )
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully validated schedule time",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = ScheduleValidationResponseDto.class)))})
    @GetMapping("/validate/participant/screen-action")
    public ResponseEntity<ScheduleValidationResponseDto> validateScheduleTimeByParticipantAndScreenAction(
            @RequestParam Long participantId,
            @RequestParam Long screenActionCode,
            @RequestParam(defaultValue = "false") Boolean bypass) {

        return ResponseEntity.ok(scheduleValidationService.validateScheduleTimeByParticipantAndScreenAction(participantId, screenActionCode, bypass));
    }

    @Operation(
            summary = "Validate schedule time by user and screen action",
            description = "Validates if current time is within schedule operating hours for the given user type, country and screen action code with bypass option"
    )
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully validated schedule time",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = ScheduleValidationResponseDto.class)))})
    @GetMapping("/validate/user/screen-action")
    public ResponseEntity<ScheduleValidationResponseDto> validateScheduleTimeByUserAndScreenAction(
            @RequestParam Long countryId,
            @RequestParam String userType,
            @RequestParam Long screenActionCode,
            @RequestParam(defaultValue = "false") Boolean bypass,
            @RequestParam(defaultValue = "false") Boolean isClosingTimeSecondary) {
        return ResponseEntity.ok(scheduleValidationService.validateScheduleTimeByUserAndScreenAction(countryId, userType, screenActionCode, bypass, isClosingTimeSecondary));
    }

    @Operation(
            summary = "Validate schedule time by process or screen action and country",
            description = "Validates if current time is within schedule operating hours for the given process or screen action code and country. At least processId or screenActionCode must be provided."
    )
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully validated schedule time",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = ScheduleValidationResponseDto.class)))})
    @GetMapping("/validate/schedule")
    public ResponseEntity<ScheduleValidationResponseDto> validateScheduleTimeByProcessOrScreenActionAndCountry(
            @RequestParam(required = false) Long processId,
            @RequestParam(required = false) Long screenActionCode,
            @RequestParam Long countryId,
            @RequestParam(defaultValue = "false") Boolean bypass) {

        return ResponseEntity.ok(scheduleValidationService.validateScheduleTimeByProcessOrScreenActionAndCountry(processId, screenActionCode, countryId, bypass));
    }

    @Operation(
            summary = "Validate schedule time by process or screen action for user",
            description = "Validates if current time is within schedule operating hours for the given process or screen action code, country and user type with bypass option. At least processId or screenActionCode must be provided. ParticipantId is optional for schedule extension validation."
    )
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully validated schedule time",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = ScheduleValidationResponseDto.class)))})
    @GetMapping("/validate/user/schedule")
    public ResponseEntity<ScheduleValidationResponseDto> validateScheduleByProcessOrScreenActionForUser(
            @RequestParam(required = false) Long processId,
            @RequestParam(required = false) Long screenActionCode,
            @RequestParam Long countryId,
            @RequestParam String userType,
            @RequestParam(required = false) Long participantId,
            @RequestParam(defaultValue = "false") Boolean bypass,
            @RequestParam(defaultValue = "false") Boolean isClosingTimeSecondary) {
        return ResponseEntity.ok(scheduleValidationService.validateScheduleByProcessOrScreenActionForUser(
                processId, screenActionCode, countryId, userType, participantId, bypass, isClosingTimeSecondary));
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
client:
  nubo:
    url-business-day-calculation: ${NUBO_URL_BUSINESS_DAY_CALCULATION}


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
    url-business-day-calculation: ${NUBO_URL_BUSINESS_DAY_CALCULATION}
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
client:
  nubo:
    url-business-day-calculation: ${NUBO_URL_BUSINESS_DAY_CALCULATION}
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
client:
  nubo:
    url-business-day-calculation: ${NUBO_URL_BUSINESS_DAY_CALCULATION}
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
client:
  nubo:
    url-business-day-calculation: ${NUBO_URL_BUSINESS_DAY_CALCULATION}

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
 ____   ____ _   _ _____ ____  _   _ _     _______     ___    _     ___ ____    _  _____ _____    _    ____ ___
/ ___| / ___| | | | ____|  _ \| | | | |   | ____\ \   / / \  | |   |_ _|  _ \  / \|_   _| ____|  / \  |  _ \_ _|
\___ \| |   | |_| |  _| | | | | | | | |   |  _|  \ \ / / _ \ | |    | || | | |/ _ \ | | |  _|   / _ \ | |_) | |
 ___) | |___|  _  | |___| |_| | |_| | |___| |___  \ V / ___ \| |___ | || |_| / ___ \| | | |___ / ___ \|  __/| |
|____/ \____|_| |_|_____|____/ \___/|_____|_____|  \_/_/   \_\_____|___|____/_/   \_\_| |_____/_/   \_\_|  |___|
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
