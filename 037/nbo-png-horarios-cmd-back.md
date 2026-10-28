# nbo-png-horarios-cmd-back

Código Java de producción y configuraciones, sin tests. Cada sección contiene el archivo original completo y su ruta. Captura: 28/10/2026.

## Índice

1. `.mvn/wrapper/maven-wrapper.properties`
2. `mvnw`
3. `mvnw.cmd`
4. `pom.xml`
5. `src/main/java/com/nubo/schedule/cmd/api/ScheduleCMDApiApplication.java`
6. `src/main/java/com/nubo/schedule/cmd/api/application/annotations/RateLimited.java`
7. `src/main/java/com/nubo/schedule/cmd/api/application/config/KafkaConsumerConfig.java`
8. `src/main/java/com/nubo/schedule/cmd/api/application/config/KafkaProducerConfig.java`
9. `src/main/java/com/nubo/schedule/cmd/api/application/config/RestTemplateConfig.java`
10. `src/main/java/com/nubo/schedule/cmd/api/application/config/SwaggerConfig.java`
11. `src/main/java/com/nubo/schedule/cmd/api/application/config/WebConfig.java`
12. `src/main/java/com/nubo/schedule/cmd/api/application/context/GlobalContext.java`
13. `src/main/java/com/nubo/schedule/cmd/api/application/database/NamingStrategyConfig.java`
14. `src/main/java/com/nubo/schedule/cmd/api/application/database/UpperNamingConfig.java`
15. `src/main/java/com/nubo/schedule/cmd/api/application/filters/GlobalFilter.java`
16. `src/main/java/com/nubo/schedule/cmd/api/application/interceptors/GlobalInterceptor.java`
17. `src/main/java/com/nubo/schedule/cmd/api/application/interceptors/RateLimitInterceptor.java`
18. `src/main/java/com/nubo/schedule/cmd/api/application/properties/PropertiesConfig.java`
19. `src/main/java/com/nubo/schedule/cmd/api/application/properties/PropertiesContext.java`
20. `src/main/java/com/nubo/schedule/cmd/api/application/util/ApplicationUtils.java`
21. `src/main/java/com/nubo/schedule/cmd/api/client/kafka/consumer/ScheduleCmdResponseListenerAdapter.java`
22. `src/main/java/com/nubo/schedule/cmd/api/client/kafka/producer/service/KafkaNuboAdapter.java`
23. `src/main/java/com/nubo/schedule/cmd/api/client/third/service/SchedulePermissionClient.java`
24. `src/main/java/com/nubo/schedule/cmd/api/client/third/service/impl/SchedulePermissionClientImpl.java`
25. `src/main/java/com/nubo/schedule/cmd/api/exception/SchedulePermissionException.java`
26. `src/main/java/com/nubo/schedule/cmd/api/exception/ServiceException.java`
27. `src/main/java/com/nubo/schedule/cmd/api/exception/error/ErrorCode.java`
28. `src/main/java/com/nubo/schedule/cmd/api/exception/error/ErrorResponse.java`
29. `src/main/java/com/nubo/schedule/cmd/api/exception/error/ErrorValidation.java`
30. `src/main/java/com/nubo/schedule/cmd/api/exception/handler/CustomKafkaErrorHandler.java`
31. `src/main/java/com/nubo/schedule/cmd/api/exception/handler/GlobalExceptionHandler.java`
32. `src/main/java/com/nubo/schedule/cmd/api/exception/kafka/KafkaErrorBuild.java`
33. `src/main/java/com/nubo/schedule/cmd/api/helpers/FrequencyMapperUtil.java`
34. `src/main/java/com/nubo/schedule/cmd/api/helpers/MicroserviceMapperUtil.java`
35. `src/main/java/com/nubo/schedule/cmd/api/helpers/ModuleMapperUtil.java`
36. `src/main/java/com/nubo/schedule/cmd/api/helpers/ProcessMapperUtil.java`
37. `src/main/java/com/nubo/schedule/cmd/api/helpers/ScheduleMapperUtil.java`
38. `src/main/java/com/nubo/schedule/cmd/api/helpers/ScheduleStatusHistoryMapperUtil.java`
39. `src/main/java/com/nubo/schedule/cmd/api/helpers/SubmoduleMapperUtil.java`
40. `src/main/java/com/nubo/schedule/cmd/api/models/dto/request/JobsConfigRequestDto.java`
41. `src/main/java/com/nubo/schedule/cmd/api/models/dto/request/JobsResultRequestDto.java`
42. `src/main/java/com/nubo/schedule/cmd/api/models/dto/request/NotificationRequestDto.java`
43. `src/main/java/com/nubo/schedule/cmd/api/models/dto/request/RelatedScheduleRequestDto.java`
44. `src/main/java/com/nubo/schedule/cmd/api/models/dto/request/ScheduleActionRequestDto.java`
45. `src/main/java/com/nubo/schedule/cmd/api/models/dto/request/ScheduleExtensionRequestDto.java`
46. `src/main/java/com/nubo/schedule/cmd/api/models/dto/request/ScheduleRequestDto.java`
47. `src/main/java/com/nubo/schedule/cmd/api/models/dto/request/ScheduleUpdateRequestDto.java`
48. `src/main/java/com/nubo/schedule/cmd/api/models/dto/response/CatalogItemDto.java`
49. `src/main/java/com/nubo/schedule/cmd/api/models/dto/response/FrequencyDto.java`
50. `src/main/java/com/nubo/schedule/cmd/api/models/dto/response/MicroserviceDto.java`
51. `src/main/java/com/nubo/schedule/cmd/api/models/dto/response/ModuleDto.java`
52. `src/main/java/com/nubo/schedule/cmd/api/models/dto/response/ProcessDto.java`
53. `src/main/java/com/nubo/schedule/cmd/api/models/dto/response/ScheduleDto.java`
54. `src/main/java/com/nubo/schedule/cmd/api/models/dto/response/ScheduleStatusHistoryDto.java`
55. `src/main/java/com/nubo/schedule/cmd/api/models/dto/response/ScreenDto.java`
56. `src/main/java/com/nubo/schedule/cmd/api/models/dto/response/SubmoduleDto.java`
57. `src/main/java/com/nubo/schedule/cmd/api/models/entity/CountryEntity.java`
58. `src/main/java/com/nubo/schedule/cmd/api/models/entity/CurrencyEntity.java`
59. `src/main/java/com/nubo/schedule/cmd/api/models/entity/DepartmentEntity.java`
60. `src/main/java/com/nubo/schedule/cmd/api/models/entity/FrequencyEntity.java`
61. `src/main/java/com/nubo/schedule/cmd/api/models/entity/IdentificationTypeEntity.java`
62. `src/main/java/com/nubo/schedule/cmd/api/models/entity/MicroserviceEntity.java`
63. `src/main/java/com/nubo/schedule/cmd/api/models/entity/ModuleEntity.java`
64. `src/main/java/com/nubo/schedule/cmd/api/models/entity/ParticipantEntity.java`
65. `src/main/java/com/nubo/schedule/cmd/api/models/entity/ProcessEntity.java`
66. `src/main/java/com/nubo/schedule/cmd/api/models/entity/RejectionReasonEntity.java`
67. `src/main/java/com/nubo/schedule/cmd/api/models/entity/RelatedScheduleEntity.java`
68. `src/main/java/com/nubo/schedule/cmd/api/models/entity/ScheduleEntity.java`
69. `src/main/java/com/nubo/schedule/cmd/api/models/entity/ScheduleExtensionEntity.java`
70. `src/main/java/com/nubo/schedule/cmd/api/models/entity/ScheduleExtensionStatusHistoryEntity.java`
71. `src/main/java/com/nubo/schedule/cmd/api/models/entity/ScheduleStatusHistoryEntity.java`
72. `src/main/java/com/nubo/schedule/cmd/api/models/entity/ScreenActionEntity.java`
73. `src/main/java/com/nubo/schedule/cmd/api/models/entity/ScreenEntity.java`
74. `src/main/java/com/nubo/schedule/cmd/api/models/entity/StatusEntity.java`
75. `src/main/java/com/nubo/schedule/cmd/api/models/entity/SubmoduleAccessTypeEntity.java`
76. `src/main/java/com/nubo/schedule/cmd/api/models/entity/SubmoduleEntity.java`
77. `src/main/java/com/nubo/schedule/cmd/api/models/entity/TaxStatusEntity.java`
78. `src/main/java/com/nubo/schedule/cmd/api/models/entity/TypeEntity.java`
79. `src/main/java/com/nubo/schedule/cmd/api/models/entity/UserNuboEntity.java`
80. `src/main/java/com/nubo/schedule/cmd/api/models/enums/AssociatedTypeEnum.java`
81. `src/main/java/com/nubo/schedule/cmd/api/models/enums/CountryCodeEnum.java`
82. `src/main/java/com/nubo/schedule/cmd/api/models/enums/PropertiesEnum.java`
83. `src/main/java/com/nubo/schedule/cmd/api/models/enums/ScheduleActionEnum.java`
84. `src/main/java/com/nubo/schedule/cmd/api/models/enums/ScheduleStatusEnum.java`
85. `src/main/java/com/nubo/schedule/cmd/api/models/enums/ScheduleTypeEnum.java`
86. `src/main/java/com/nubo/schedule/cmd/api/models/enums/StatusEnum.java`
87. `src/main/java/com/nubo/schedule/cmd/api/models/enums/UserTypeEnum.java`
88. `src/main/java/com/nubo/schedule/cmd/api/models/enums/VersionApiEnum.java`
89. `src/main/java/com/nubo/schedule/cmd/api/repository/CountryRepository.java`
90. `src/main/java/com/nubo/schedule/cmd/api/repository/FrequencyRepository.java`
91. `src/main/java/com/nubo/schedule/cmd/api/repository/MicroserviceRepository.java`
92. `src/main/java/com/nubo/schedule/cmd/api/repository/ModuleRepository.java`
93. `src/main/java/com/nubo/schedule/cmd/api/repository/ParticipantRepository.java`
94. `src/main/java/com/nubo/schedule/cmd/api/repository/ProcessRepository.java`
95. `src/main/java/com/nubo/schedule/cmd/api/repository/RejectionReasonRepository.java`
96. `src/main/java/com/nubo/schedule/cmd/api/repository/RelatedScheduleRepository.java`
97. `src/main/java/com/nubo/schedule/cmd/api/repository/ScheduleExtensionRepository.java`
98. `src/main/java/com/nubo/schedule/cmd/api/repository/ScheduleRepository.java`
99. `src/main/java/com/nubo/schedule/cmd/api/repository/ScheduleStatusHistoryRepository.java`
100. `src/main/java/com/nubo/schedule/cmd/api/repository/ScreenActionRepository.java`
101. `src/main/java/com/nubo/schedule/cmd/api/repository/StatusRepository.java`
102. `src/main/java/com/nubo/schedule/cmd/api/repository/SubmoduleRepository.java`
103. `src/main/java/com/nubo/schedule/cmd/api/repository/TypeRepository.java`
104. `src/main/java/com/nubo/schedule/cmd/api/repository/UserNuboRepository.java`
105. `src/main/java/com/nubo/schedule/cmd/api/service/CatalogService.java`
106. `src/main/java/com/nubo/schedule/cmd/api/service/ScheduleService.java`
107. `src/main/java/com/nubo/schedule/cmd/api/service/ScheduleStatusHistoryService.java`
108. `src/main/java/com/nubo/schedule/cmd/api/service/impl/CatalogServiceImpl.java`
109. `src/main/java/com/nubo/schedule/cmd/api/service/impl/ScheduleServiceImpl.java`
110. `src/main/java/com/nubo/schedule/cmd/api/service/impl/ScheduleStatusHistoryServiceImpl.java`
111. `src/main/java/com/nubo/schedule/cmd/api/web/controller/ScheduleRestController.java`
112. `src/main/java/com/nubo/schedule/cmd/api/web/controller/ScheduleStatusHistoryRestController.java`
113. `src/main/resources/application-dev.yml`
114. `src/main/resources/application-local.yml`
115. `src/main/resources/application-prod.yml`
116. `src/main/resources/application-qa.yml`
117. `src/main/resources/application-uat.yml`
118. `src/main/resources/application.yml`
119. `src/main/resources/banner.txt`
120. `src/main/resources/log/JsonEventLayout_error.json`
121. `src/main/resources/log/JsonEventLayout_info.json`
122. `src/main/resources/log/JsonEventLayout_trace.json`
123. `src/main/resources/log/log4j2-prod.properties`
124. `src/main/resources/log/log4j2.properties`

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
distributionUrl=https://repo.maven.apache.org/maven2/org/apache/maven/apache-maven/3.9.9/apache-maven-3.9.9-bin.zip
wrapperUrl=https://repo.maven.apache.org/maven2/org/apache/maven/wrapper/maven-wrapper/3.3.2/maven-wrapper-3.3.2.jar

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
    <groupId>com.nubo.schedule.cmd.api</groupId>
    <artifactId>schedule-cmd-api</artifactId>
    <version>0.29.0-alpha.1</version>
    <name>${project.artifactId}</name>
    <description>Schedule Command Api</description>

    <properties>
        <java.version>17</java.version>
        <spring.port>8080</spring.port>
        <test.skip>false</test.skip>
        <datasource.url.application.name>ApplicationName=${project.artifactId}</datasource.url.application.name>
        <hikari.pool.name>${project.artifactId}-pool</hikari.pool.name>
        <spring-framework.version>6.2.11</spring-framework.version>
        <commons-lang3.version>3.18.0</commons-lang3.version>
        <tomcat.version>10.1.49</tomcat.version>
        <jackson.version>2.21.1</jackson.version>
        <log4j2.version>2.25.4</log4j2.version>
    </properties>

    <dependencyManagement>
        <dependencies>
            <!-- Force Jackson version to fix GHSA-72hv-8253-57qq (HIGH 8.70) -->
            <dependency>
                <groupId>com.fasterxml.jackson</groupId>
                <artifactId>jackson-bom</artifactId>
                <version>${jackson.version}</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>

            <!-- Force Tomcat version to fix CVE-2025-55754 (CRITICAL 9.60), CVE-2025-55752 (HIGH 7.50),
                 CVE-2025-48989 (HIGH 7.50), CVE-2025-66614 (MEDIUM 6.30), CVE-2025-61795 (MEDIUM 5.30),
                 CVE-2026-24733 (LOW 2.70) -->
            <dependency>
                <groupId>org.apache.tomcat.embed</groupId>
                <artifactId>tomcat-embed-core</artifactId>
                <version>${tomcat.version}</version>
            </dependency>
            <dependency>
                <groupId>org.apache.tomcat.embed</groupId>
                <artifactId>tomcat-embed-el</artifactId>
                <version>${tomcat.version}</version>
            </dependency>
            <dependency>
                <groupId>org.apache.tomcat.embed</groupId>
                <artifactId>tomcat-embed-websocket</artifactId>
                <version>${tomcat.version}</version>
            </dependency>

            <!-- Force Log4j version to fix CVE-2025-68161 (MEDIUM 4.80) -->
            <dependency>
                <groupId>org.apache.logging.log4j</groupId>
                <artifactId>log4j-bom</artifactId>
                <version>${log4j2.version}</version>
                <type>pom</type>
                <scope>import</scope>
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
        <!-- Security fix for CVE-2025-48924 -->
        <dependency>
            <groupId>org.apache.commons</groupId>
            <artifactId>commons-lang3</artifactId>
            <version>3.18.0</version>
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
                                <exclude>**/ScheduleCMDApiApplication.class</exclude>
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

## src/main/java/com/nubo/schedule/cmd/api/ScheduleCMDApiApplication.java

```java
package com.nubo.schedule.cmd.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.lang.NonNull;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class ScheduleCMDApiApplication
{

    public static void main(String[] args)
    {
        SpringApplication.run(ScheduleCMDApiApplication.class, args);
    }

    @Bean
    public WebMvcConfigurer corsConfigurer()
    {
        return new WebMvcConfigurer()
        {
            @Override
            public void addCorsMappings(@NonNull CorsRegistry registry)
            {
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

## src/main/java/com/nubo/schedule/cmd/api/application/annotations/RateLimited.java

```java
package com.nubo.schedule.cmd.api.application.annotations;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Retention(RetentionPolicy.RUNTIME)
@Target({
        ElementType.METHOD, ElementType.TYPE
})
public @interface RateLimited
{
}

```

## src/main/java/com/nubo/schedule/cmd/api/application/config/KafkaConsumerConfig.java

```java
package com.nubo.schedule.cmd.api.application.config;

import java.util.HashMap;
import java.util.Map;

import org.apache.kafka.clients.consumer.ConsumerConfig;
import org.apache.kafka.common.serialization.StringDeserializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.kafka.annotation.EnableKafka;
import org.springframework.kafka.config.ConcurrentKafkaListenerContainerFactory;
import org.springframework.kafka.core.ConsumerFactory;
import org.springframework.kafka.core.DefaultKafkaConsumerFactory;
import org.springframework.kafka.support.serializer.JsonDeserializer;
import org.springframework.retry.backoff.ExponentialBackOffPolicy;
import org.springframework.retry.policy.SimpleRetryPolicy;
import org.springframework.retry.support.RetryTemplate;

import com.nubo.schedule.cmd.api.application.properties.PropertiesConfig;
import com.nubo.schedule.cmd.api.exception.handler.CustomKafkaErrorHandler;
import com.nubo.schedule.cmd.api.models.dto.request.JobsResultRequestDto;

import lombok.RequiredArgsConstructor;

@EnableKafka
@Configuration
@RequiredArgsConstructor
public class KafkaConsumerConfig
{

    private final Environment environment;
    private final PropertiesConfig propertiesConfig;

    @Bean
    public ConsumerFactory<String, JobsResultRequestDto> consumerFactoryKafkaNubo()
    {
        Map<String, Object> configProps = new HashMap<>();
        configProps.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, propertiesConfig.getKafkaNuboBootstrapServers());
        configProps.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);
        configProps.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, JsonDeserializer.class);
        configProps.put(ConsumerConfig.GROUP_ID_CONFIG, propertiesConfig.getKafkaNuboConsumerGroupId());
        configProps.put(ConsumerConfig.AUTO_OFFSET_RESET_CONFIG, propertiesConfig.getKafkaNuboAutoOffsetReset());
        configProps.put("security.protocol", propertiesConfig.getKafkaNuboSecurityProtocol());

        if (!isLocalProfile())
        {
            configProps.put("sasl.mechanism", propertiesConfig.getKafkaNuboSaslMechanism());
            configProps.put("sasl.jaas.config", propertiesConfig.getKafkaNuboSaslJaasConfig());
        }

        return new DefaultKafkaConsumerFactory<>(
                configProps, new StringDeserializer(), new JsonDeserializer<>(JobsResultRequestDto.class));
    }

    @Bean
    public ConcurrentKafkaListenerContainerFactory<String, JobsResultRequestDto> kafkaNuboListenerContainerFactory(
            CustomKafkaErrorHandler errorHandler)
    {
        ConcurrentKafkaListenerContainerFactory<String, JobsResultRequestDto> factory = new ConcurrentKafkaListenerContainerFactory<>();
        factory.setConsumerFactory(consumerFactoryKafkaNubo());
        factory.setCommonErrorHandler(errorHandler);
        return factory;
    }

    @Bean
    public RetryTemplate retryTemplate()
    {
        SimpleRetryPolicy retryPolicy = new SimpleRetryPolicy();
        retryPolicy.setMaxAttempts(propertiesConfig.getKafkaNuboRetries());

        ExponentialBackOffPolicy backOffPolicy = new ExponentialBackOffPolicy();
        backOffPolicy.setInitialInterval(1000);
        backOffPolicy.setMaxInterval(10000);

        RetryTemplate retryTemplate = new RetryTemplate();
        retryTemplate.setRetryPolicy(retryPolicy);
        retryTemplate.setBackOffPolicy(backOffPolicy);

        return retryTemplate;
    }

    private boolean isLocalProfile()
    {
        String[] activeProfiles = environment.getActiveProfiles();
        for (String profile : activeProfiles)
        {
            if ("local".equals(profile))
            {
                return true;
            }
        }
        return false;
    }
}

```

## src/main/java/com/nubo/schedule/cmd/api/application/config/KafkaProducerConfig.java

```java
package com.nubo.schedule.cmd.api.application.config;

import java.util.HashMap;
import java.util.Map;

import org.apache.kafka.clients.producer.ProducerConfig;
import org.apache.kafka.common.serialization.StringSerializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.kafka.core.DefaultKafkaProducerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.core.ProducerFactory;

import com.nubo.schedule.cmd.api.application.properties.PropertiesConfig;

import lombok.RequiredArgsConstructor;

@Configuration
@RequiredArgsConstructor
public class KafkaProducerConfig
{

    private final Environment environment;
    private final PropertiesConfig propertiesConfig;

    @Bean
    public ProducerFactory<String, String> producerFactoryKafkaNubo()
    {
        Map<String, Object> configProps = new HashMap<>();
        configProps.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, propertiesConfig.getKafkaNuboBootstrapServers());
        configProps.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class);
        configProps.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, StringSerializer.class);
        configProps.put("security.protocol", propertiesConfig.getKafkaNuboSecurityProtocol());

        if (!isLocalProfile())
        {
            configProps.put("sasl.mechanism", propertiesConfig.getKafkaNuboSaslMechanism());
            configProps.put("sasl.jaas.config", propertiesConfig.getKafkaNuboSaslJaasConfig());
        }

        return new DefaultKafkaProducerFactory<>(configProps);
    }

    @Bean
    public KafkaTemplate<String, String> kafkaNuboTemplate()
    {
        return new KafkaTemplate<>(producerFactoryKafkaNubo());
    }

    private boolean isLocalProfile()
    {
        String[] activeProfiles = environment.getActiveProfiles();
        for (String profile : activeProfiles)
        {
            if ("local".equals(profile))
            {
                return true;
            }
        }
        return false;
    }

}

```

## src/main/java/com/nubo/schedule/cmd/api/application/config/RestTemplateConfig.java

```java
package com.nubo.schedule.cmd.api.application.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@Configuration
public class RestTemplateConfig
{

    @Bean
    public RestTemplate restTemplate()
    {
        return new RestTemplate();
    }
}

```

## src/main/java/com/nubo/schedule/cmd/api/application/config/SwaggerConfig.java

```java
package com.nubo.schedule.cmd.api.application.config;

import java.util.List;

import org.springdoc.core.customizers.GlobalOpenApiCustomizer;
import org.springdoc.core.models.GroupedOpenApi;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

import com.nubo.schedule.cmd.api.exception.error.ErrorResponse;
import com.nubo.schedule.cmd.api.exception.error.ErrorValidation;
import com.nubo.schedule.cmd.api.models.enums.PropertiesEnum;

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
public class SwaggerConfig
{

    @GetMapping(value = "/")
    @Hidden
    @Operation(description = "Redirect to api home page")
    public ModelAndView index()
    {
        return new ModelAndView("redirect:/swagger-ui/index.html");
    }

    @Bean
    public GroupedOpenApi publicApi(@Value("${application.group}") String appGroup)
    {
        return GroupedOpenApi.builder().group(appGroup).pathsToMatch("/**").build();
    }

    @Bean
    public OpenAPI customOpenAPI(
            @Value("${application.title}") String appTitle,
            @Value("${application.description}") String appDescription,
            @Value("${application.version}") String appVersion)
    {
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
    public GlobalOpenApiCustomizer customizer()
    {
        Content content = createErrorResponse();
        return openApi -> openApi.getPaths().values().stream().flatMap(pathItem -> pathItem.readOperations().stream())
                .forEach(operation ->
                {
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

    private Content createErrorResponse()
    {
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

## src/main/java/com/nubo/schedule/cmd/api/application/config/WebConfig.java

```java
package com.nubo.schedule.cmd.api.application.config;

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

import com.nubo.schedule.cmd.api.application.interceptors.GlobalInterceptor;

import lombok.RequiredArgsConstructor;

@Configuration
@RequiredArgsConstructor
public class WebConfig implements WebMvcConfigurer
{

    private final GlobalInterceptor globalInterceptor;

    @Bean
    public LocaleResolver localeResolver()
    {
        SessionLocaleResolver slr = new SessionLocaleResolver();
        slr.setDefaultLocale(Locale.ENGLISH);
        return slr;
    }

    @Override
    @Profile({
            "local", "dev", "qa"
    })
    public void addCorsMappings(CorsRegistry registry)
    {
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
    public void addInterceptors(InterceptorRegistry registry)
    {
        registry.addInterceptor(globalInterceptor)
                .addPathPatterns("/**");
    }

}

```

## src/main/java/com/nubo/schedule/cmd/api/application/context/GlobalContext.java

```java
package com.nubo.schedule.cmd.api.application.context;

import java.util.HashMap;
import java.util.Map;

public class GlobalContext
{

    private static final ThreadLocal<Map<String, String>> context = ThreadLocal.withInitial(HashMap::new);

    private GlobalContext()
    {
    }

    public static void setProperty(String key, String value)
    {
        context.get().put(key, value);
    }

    public static String getProperty(String key)
    {
        Object value = context.get().get(key);
        return value != null ? String.valueOf(value) : null;
    }

    public static void remove()
    {
        context.remove();
    }

}

```

## src/main/java/com/nubo/schedule/cmd/api/application/database/NamingStrategyConfig.java

```java
package com.nubo.schedule.cmd.api.application.database;

import org.hibernate.boot.model.naming.PhysicalNamingStrategy;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class NamingStrategyConfig
{

    @Bean
    public PhysicalNamingStrategy physicalNamingStrategy()
    {
        return new UpperNamingConfig();
    }

}

```

## src/main/java/com/nubo/schedule/cmd/api/application/database/UpperNamingConfig.java

```java
package com.nubo.schedule.cmd.api.application.database;

import org.hibernate.boot.model.naming.Identifier;
import org.hibernate.boot.model.naming.PhysicalNamingStrategy;
import org.hibernate.engine.jdbc.env.spi.JdbcEnvironment;

public class UpperNamingConfig implements PhysicalNamingStrategy
{

    @Override
    public Identifier toPhysicalCatalogName(Identifier name, JdbcEnvironment context)
    {
        return convertToUpperCase(name);
    }

    @Override
    public Identifier toPhysicalSchemaName(Identifier name, JdbcEnvironment context)
    {
        return convertToUpperCase(name);
    }

    @Override
    public Identifier toPhysicalSequenceName(Identifier name, JdbcEnvironment context)
    {
        return convertToUpperCase(name);
    }

    @Override
    public Identifier toPhysicalTableName(Identifier name, JdbcEnvironment context)
    {
        return convertToUpperCase(name);
    }

    @Override
    public Identifier toPhysicalColumnName(Identifier name, JdbcEnvironment context)
    {
        return convertToUpperCase(name);
    }

    private Identifier convertToUpperCase(Identifier identifier)
    {
        if (identifier == null)
        {
            return null;
        }
        return new Identifier(identifier.getText().toUpperCase(), identifier.isQuoted());
    }

}

```

## src/main/java/com/nubo/schedule/cmd/api/application/filters/GlobalFilter.java

```java
package com.nubo.schedule.cmd.api.application.filters;

import java.io.IOException;
import java.net.InetAddress;
import java.time.LocalDateTime;

import org.springframework.core.annotation.Order;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.util.ObjectUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import com.nubo.schedule.cmd.api.application.context.GlobalContext;
import com.nubo.schedule.cmd.api.application.util.ApplicationUtils;
import com.nubo.schedule.cmd.api.exception.ServiceException;
import com.nubo.schedule.cmd.api.exception.error.ErrorCode;
import com.nubo.schedule.cmd.api.exception.error.ErrorResponse;
import com.nubo.schedule.cmd.api.models.enums.PropertiesEnum;
import com.nubo.schedule.cmd.api.models.enums.VersionApiEnum;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;

@Component
@Order(1)
@Slf4j
public class GlobalFilter extends OncePerRequestFilter
{

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
            throws ServletException, IOException
    {
        try
        {
            String uri = request.getRequestURI();
            if (uri.contains("/v3/api-docs") || uri.contains("/swagger-ui") ||
                    uri.contains("/v1/websocket") || uri.contains("/actuator"))
            {
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

        } catch (ServiceException ex)
        {
            handleServiceException(ex, request, response);
        }
    }

    private String validateClientIpHeader(HttpServletRequest request)
    {
        String clientIp = request.getHeader(PropertiesEnum.CLIENT_IP.getValue());
        if (clientIp == null || clientIp.isEmpty())
        {
            throw new ServiceException(ErrorCode.HEADER_CLIENT_IP_REQUIRED, HttpStatus.BAD_REQUEST);
        }
        try
        {
            InetAddress ip = InetAddress.getByName(clientIp);
            if (!ip.getHostAddress().equals(clientIp))
            {
                throw new ServiceException(ErrorCode.HEADER_CLIENT_IP_INVALID, HttpStatus.BAD_REQUEST);
            }
        } catch (Exception e)
        {
            throw new ServiceException(ErrorCode.HEADER_CLIENT_IP_INVALID, HttpStatus.BAD_REQUEST);
        }
        return clientIp;
    }

    private String validateClientUserHeader(HttpServletRequest request)
    {
        String clientUser = request.getHeader(PropertiesEnum.CLIENT_USER.getValue());
        if (clientUser == null || clientUser.isEmpty())
        {
            throw new ServiceException(ErrorCode.HEADER_CLIENT_USER_REQUIRED, HttpStatus.BAD_REQUEST);
        }
        return clientUser;
    }

    private String validateClientDatetimeHeader(HttpServletRequest request)
    {
        String clientDatetime = request.getHeader(PropertiesEnum.CLIENT_DATETIME.getValue());
        if (clientDatetime == null || clientDatetime.isEmpty())
        {
            throw new ServiceException(ErrorCode.HEADER_CLIENT_DATETIME_REQUIRED, HttpStatus.BAD_REQUEST);
        }
        String datetimePattern = "\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}";
        if (!clientDatetime.matches(datetimePattern))
        {
            throw new ServiceException(ErrorCode.HEADER_CLIENT_DATETIME_INVALID, HttpStatus.BAD_REQUEST);
        }
        return clientDatetime;
    }

    private String validateVersionPath(HttpServletRequest request)
    {
        String requestURI = request.getRequestURI();
        String contextPath = request.getContextPath();
        if (requestURI.startsWith(contextPath))
        {
            String pathInfo = requestURI.replace(contextPath.concat("/"), "");
            if (pathInfo.matches("v[1-9]\\d?(/.*)?"))
            {
                String version = pathInfo.split("/")[0];
                try
                {
                    return version;
                } catch (IllegalArgumentException e)
                {
                    throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
                }
            }
        }
        throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
    }

    private void handleServiceException(ServiceException exception, HttpServletRequest request,
            HttpServletResponse response) throws IOException
    {
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

## src/main/java/com/nubo/schedule/cmd/api/application/interceptors/GlobalInterceptor.java

```java
package com.nubo.schedule.cmd.api.application.interceptors;

import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import com.nubo.schedule.cmd.api.application.context.GlobalContext;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@Component
@Order(2)
@RequiredArgsConstructor
public class GlobalInterceptor implements HandlerInterceptor
{

    private final RateLimitInterceptor rateLimitInterceptor;

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex)
    {
        GlobalContext.remove();
    }

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
    {
        rateLimitInterceptor.rateLimitInterceptor(request, handler);
        return true;
    }

}

```

## src/main/java/com/nubo/schedule/cmd/api/application/interceptors/RateLimitInterceptor.java

```java
package com.nubo.schedule.cmd.api.application.interceptors;

import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.TimeUnit;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;

import com.nubo.schedule.cmd.api.application.annotations.RateLimited;
import com.nubo.schedule.cmd.api.application.properties.PropertiesConfig;
import com.nubo.schedule.cmd.api.exception.ServiceException;
import com.nubo.schedule.cmd.api.exception.error.ErrorCode;
import com.nubo.schedule.cmd.api.models.enums.PropertiesEnum;

import jakarta.servlet.http.HttpServletRequest;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Component
@RequiredArgsConstructor
public class RateLimitInterceptor
{

    private final ConcurrentHashMap<String, RequestData> requestCounts = new ConcurrentHashMap<>();

    private final PropertiesConfig propertiesConfig;

    public void rateLimitInterceptor(HttpServletRequest request, Object handler)
    {
        if (handler instanceof org.springframework.web.method.HandlerMethod handlerMethod
                && (handlerMethod.hasMethodAnnotation(RateLimited.class)
                        || handlerMethod.getBeanType().isAnnotationPresent(RateLimited.class)))
        {

            String clientIp = getClientIp(request);
            String methodName = request.getMethod();
            String path = request.getRequestURI();
            String key = clientIp + ":" + methodName + ":" + path;

            RequestData requestData = requestCounts.computeIfAbsent(key,
                    k -> new RequestData(propertiesConfig.getRangeTimeRequest(),
                            propertiesConfig.getWaitingTime()));

            synchronized (requestData)
            {

                requestData.incrementCount();

                if (requestData.isRateLimited())
                {
                    throw new ServiceException(ErrorCode.RATE_LIMITING_EXCEEDED, HttpStatus.TOO_MANY_REQUESTS);
                }

                if (requestData.getCount() > propertiesConfig.getNumberMaxRequest())
                {
                    requestData.setRateLimited(true);
                    throw new ServiceException(ErrorCode.RATE_LIMITING_EXCEEDED, HttpStatus.TOO_MANY_REQUESTS);
                }
            }
        }

    }

    private String getClientIp(HttpServletRequest request)
    {
        String clientIp = request.getHeader(PropertiesEnum.CLIENT_IP.getValue());
        if (clientIp == null || clientIp.isEmpty())
        {
            clientIp = request.getRemoteAddr();
        }
        return clientIp;
    }

    private static class RequestData
    {

        @Getter
        private int count = 0;
        private long lastRequestTime = System.currentTimeMillis();
        @Getter
        @Setter
        private boolean rateLimited = false;
        private final Integer rangeTimeRequest;
        private final Integer waitingTime;

        public RequestData(Integer rangeTimeRequest, Integer waitingTime)
        {
            this.rangeTimeRequest = rangeTimeRequest;
            this.waitingTime = waitingTime;
        }

        public void incrementCount()
        {
            long currentTime = System.currentTimeMillis();

            if (rateLimited && currentTime - lastRequestTime > TimeUnit.SECONDS.toMillis(waitingTime))
            {
                count = 0;
                rateLimited = false;
            }
            else if (rateLimited)
            {
                lastRequestTime = currentTime;
            }
            else
            {
                if (currentTime - lastRequestTime > TimeUnit.SECONDS.toMillis(rangeTimeRequest))
                {
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

## src/main/java/com/nubo/schedule/cmd/api/application/properties/PropertiesConfig.java

```java
package com.nubo.schedule.cmd.api.application.properties;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import lombok.Getter;

@Component
@Getter
public class PropertiesConfig
{

    @Value("${spring.application.name}")
    private String apiName;

    @Value("${config.application.rateLimited.number-max-request}")
    private Integer numberMaxRequest;

    @Value("${config.application.rateLimited.range-time-request}")
    private Integer rangeTimeRequest;

    @Value("${config.application.rateLimited.waiting-time}")
    private Integer waitingTime;

    @Value("${config.application.schedule.max-related-schedules}")
    private Integer maxRelatedSchedules;

    @Value("${config.application.schedule.permission.api.url:http://localhost:8081/api}")
    private String permissionApiUrl;

    @Value("${config.application.schedule.permission.endpoint:/schedule-permissions/validate}")
    private String permissionEndpoint;

    @Value("${config.application.kafka.nubo.sasl.mechanism}")
    private String kafkaNuboSaslMechanism;

    @Value("${config.application.kafka.nubo.sasl.jaas.config}")
    private String kafkaNuboSaslJaasConfig;

    @Value("${config.application.kafka.nubo.security.protocol}")
    private String kafkaNuboSecurityProtocol;

    @Value("${config.application.kafka.nubo.auto-offset-reset}")
    private String kafkaNuboAutoOffsetReset;

    @Value("${config.application.kafka.nubo.retries}")
    private Integer kafkaNuboRetries;

    @Value("${config.application.kafka.nubo.bootstrap-servers}")
    private String kafkaNuboBootstrapServers;

    @Value("${config.application.kafka.nubo.producer.kafka-schedule-job-request-topic}")
    private String kafkaNuboProducerTopicScheduleJobRequest;

    @Value("${config.application.kafka.nubo.producer.group-id}")
    private String kafkaNuboProducerGroupId;

    @Value("${config.application.kafka.nubo.consumer.kafka-schedule-job-response-topic}")
    private String kafkaNuboConsumerTopicScheduleJobResponse;

    @Value("${config.application.kafka.nubo.consumer.group-id}")
    private String kafkaNuboConsumerGroupId;

    @Value("${config.application.kafka.nubo.notification.id:23}")
    private String kafkaNuboNotificationId;

    @Value("${config.application.kafka.nubo.notification.event-type}")
    private String kafkaNuboNotificationEventType;

    @Value("${config.application.kafka.nubo.notification.module}")
    private String kafkaNuboNotificationModule;

    @Value("${config.application.kafka.nubo.notification.kafka-notification-request-topic}")
    private String kafkaNuboNotificationTopic;

    @Value("${config.application.kafka.nubo.notification.group-id}")
    private String kafkaNuboNotificationGroupId;

}

```

## src/main/java/com/nubo/schedule/cmd/api/application/properties/PropertiesContext.java

```java
package com.nubo.schedule.cmd.api.application.properties;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import org.springframework.util.ObjectUtils;

import com.nubo.schedule.cmd.api.application.context.GlobalContext;
import com.nubo.schedule.cmd.api.application.util.ApplicationUtils;
import com.nubo.schedule.cmd.api.models.enums.PropertiesEnum;

public class PropertiesContext
{

    private PropertiesContext()
    {
    }

    public static String getClientIp()
    {
        return GlobalContext.getProperty(PropertiesEnum.CLIENT_IP.getValue());
    }

    public static String getClientUser()
    {
        return GlobalContext.getProperty(PropertiesEnum.CLIENT_USER.getValue());
    }

    public static LocalDateTime getClientDatetime()
    {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern(ApplicationUtils.getFormatDatetime());
        String clientDatetime = GlobalContext.getProperty(PropertiesEnum.CLIENT_DATETIME.getValue());
        if (ObjectUtils.isEmpty(clientDatetime))
        {
            return LocalDateTime.now();
        }
        return LocalDateTime.parse(clientDatetime, formatter);
    }

    public static LocalDate getClientDate()
    {
        String clientDatetime = GlobalContext.getProperty(PropertiesEnum.CLIENT_DATETIME.getValue());
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern(ApplicationUtils.getFormatDate());
        assert clientDatetime != null;
        return LocalDate.parse(clientDatetime.split("T")[0], formatter);
    }

    public static String getVersion()
    {
        return GlobalContext.getProperty(PropertiesEnum.VERSION_API.getValue());
    }

}

```

## src/main/java/com/nubo/schedule/cmd/api/application/util/ApplicationUtils.java

```java
package com.nubo.schedule.cmd.api.application.util;

import java.lang.reflect.Type;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonDeserializer;
import com.google.gson.JsonPrimitive;
import com.google.gson.JsonSerializer;

public class ApplicationUtils
{

    private static final DateTimeFormatter DATE_FMT = DateTimeFormatter.ISO_LOCAL_DATE;
    private static final DateTimeFormatter TIME_FMT = DateTimeFormatter.ISO_LOCAL_TIME;
    private static final DateTimeFormatter DATETIME_FMT = DateTimeFormatter.ISO_LOCAL_DATE_TIME;

    private static final Gson gson = new GsonBuilder()
            .registerTypeAdapter(LocalDate.class,
                    (JsonSerializer<LocalDate>) (src, typeOfSrc, context) -> new JsonPrimitive(src.format(DATE_FMT)))
            .registerTypeAdapter(LocalDate.class,
                    (JsonDeserializer<LocalDate>) (json, type, context) -> LocalDate.parse(json.getAsString(),
                            DATE_FMT))
            .registerTypeAdapter(LocalDateTime.class,
                    (JsonSerializer<LocalDateTime>) (src, typeOfSrc,
                            context) -> new JsonPrimitive(src.format(DATETIME_FMT)))
            .registerTypeAdapter(LocalDateTime.class,
                    (JsonDeserializer<LocalDateTime>) (json, type, context) -> LocalDateTime.parse(json.getAsString(),
                            DATETIME_FMT))
            .registerTypeAdapter(LocalTime.class,
                    (JsonSerializer<LocalTime>) (src, typeOfSrc, context) -> new JsonPrimitive(src.format(TIME_FMT)))
            .registerTypeAdapter(LocalTime.class,
                    (JsonDeserializer<LocalTime>) (json, type, context) -> LocalTime.parse(json.getAsString(),
                            TIME_FMT))
            .create();

    static final String FORMAT_DATETIME = "yyyy-MM-dd'T'HH:mm:ss";
    static final String FORMAT_DATE = "yyyy-MM-dd";
    static final String FORMAT_TIME = "HH:mm:ss";
    static final String FORMAT_DATE_PLANE = "yyyyMMdd";
    static final String FORMAT_DD_MM_YYYY_HHMMSS = "dd-MM-yyyy_HHmmss";

    private ApplicationUtils()
    {
    }

    public static String getFormatDatetime()
    {
        return FORMAT_DATETIME;
    }

    public static String getFormatDate()
    {
        return FORMAT_DATE;
    }

    public static String getFormatDatePlane()
    {
        return FORMAT_DATE_PLANE;
    }

    public static String getLocalDateTimeNow()
    {
        return LocalDateTime.now().format(DateTimeFormatter.ofPattern(ApplicationUtils.getFormatDatetime()));
    }

    public static String getLocalDateNow()
    {
        return LocalDateTime.now().format(DateTimeFormatter.ofPattern(ApplicationUtils.getFormatDate()));
    }

    public static String getLocalDateTimeCustomFormat()
    {
        return LocalDateTime.now()
                .format(DateTimeFormatter.ofPattern(FORMAT_DD_MM_YYYY_HHMMSS));
    }

    public static String convertObjectToJsonWithJavaTime(Object object)
    {
        return gson.toJson(object);
    }

    public static String convertObjectToJson(Object object)
    {
        return new Gson().toJson(object);
    }

    public static Object convertJsonToObject(String json, Object object)
    {
        return new Gson().fromJson(json, (Type) object);
    }

    public static String convertLocalDateTimeToString(LocalDateTime localDateTime)
    {
        return localDateTime.format(DateTimeFormatter.ofPattern(ApplicationUtils.getFormatDatetime()));
    }

    public static BigDecimal divide(BigDecimal numerator, BigDecimal denominator)
    {
        if (numerator == null || denominator == null || BigDecimal.ZERO.compareTo(denominator) == 0)
        {
            return BigDecimal.ZERO;
        }
        return numerator.divide(denominator, 6, RoundingMode.HALF_UP);
    }

    public static String getFormatTime()
    {
        return FORMAT_TIME;
    }

}

```

## src/main/java/com/nubo/schedule/cmd/api/client/kafka/consumer/ScheduleCmdResponseListenerAdapter.java

```java
package com.nubo.schedule.cmd.api.client.kafka.consumer;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;

import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.support.KafkaHeaders;
import org.springframework.messaging.handler.annotation.Header;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.retry.support.RetryTemplate;
import org.springframework.stereotype.Component;

import com.nubo.schedule.cmd.api.application.context.GlobalContext;
import com.nubo.schedule.cmd.api.application.properties.PropertiesConfig;
import com.nubo.schedule.cmd.api.models.dto.request.JobsResultRequestDto;
import com.nubo.schedule.cmd.api.models.enums.PropertiesEnum;
import com.nubo.schedule.cmd.api.service.ScheduleService;

import jakarta.annotation.PreDestroy;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
@RequiredArgsConstructor
public class ScheduleCmdResponseListenerAdapter
{

    private final RetryTemplate retryTemplate;
    private final ScheduleService scheduleService;

    @SuppressWarnings("unused")
    private final PropertiesConfig propertiesConfig;

    private final ExecutorService executorService = new ThreadPoolExecutor(20, 50, 60L, TimeUnit.SECONDS,
            new LinkedBlockingQueue<>());
    private final Map<String, Object> locks = new ConcurrentHashMap<>();

    @KafkaListener(topics = "#{propertiesConfig.kafkaNuboConsumerTopicScheduleJobResponse}", containerFactory = "kafkaNuboListenerContainerFactory")
    public void onMessage(
            @Payload JobsResultRequestDto message,
            @Header(KafkaHeaders.RECEIVED_PARTITION) int partition,
            @Header(KafkaHeaders.OFFSET) long offset,
            @Header(KafkaHeaders.RECEIVED_TOPIC) String topic)
    {
        retryTemplate.execute(context ->
        {
            log.info("New received Message -- Topic: {} -- Partition: {} -- Offset: {} -- retry: {}",
                    topic, partition, offset, context.getRetryCount());

            String lockKey = message.getScheduleId() + "-" + java.util.UUID.randomUUID().toString();
            Object lock = locks.computeIfAbsent(lockKey, key -> new Object());
            executorService.submit(() ->
            {
                synchronized (lock)
                {
                    GlobalContext.setProperty(PropertiesEnum.CLIENT_DATETIME.getValue(),
                            String.valueOf(System.currentTimeMillis()));
                    scheduleService.processScheduleEvent(message);
                    log.info("Finished processing correlationId={}", lockKey);
                }
            });
            return null;
        });
    }

    @PreDestroy
    public void shutdown() throws InterruptedException
    {
        executorService.shutdown();
        if (!executorService.awaitTermination(60, TimeUnit.SECONDS))
        {
            executorService.shutdownNow();
        }
    }
}

```

## src/main/java/com/nubo/schedule/cmd/api/client/kafka/producer/service/KafkaNuboAdapter.java

```java
package com.nubo.schedule.cmd.api.client.kafka.producer.service;

import java.util.concurrent.CompletableFuture;

import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.SendResult;
import org.springframework.stereotype.Component;

import com.nubo.schedule.cmd.api.exception.ServiceException;
import com.nubo.schedule.cmd.api.exception.error.ErrorCode;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Component
@RequiredArgsConstructor
@Slf4j
public class KafkaNuboAdapter
{
    private final KafkaTemplate<String, String> kafkaNuboTemplate;

    public void sendMessage(String topic, String message)
    {
        CompletableFuture<SendResult<String, String>> future = kafkaNuboTemplate.send(topic, message)
                .toCompletableFuture();

        future.thenAccept(result -> log.info("Send message -- Topic: {} -- offset: {} -- json: {} ",
                topic, result.getRecordMetadata().offset(), message))
                .exceptionally(ex ->
                {
                    throw new ServiceException(ErrorCode.ERROR_KAFKA_PRODUCER_NUBO, ex);
                });
    }
}

```

## src/main/java/com/nubo/schedule/cmd/api/client/third/service/SchedulePermissionClient.java

```java
package com.nubo.schedule.cmd.api.client.third.service;

import java.util.List;

import com.nubo.schedule.cmd.api.models.dto.request.ScheduleActionRequestDto;

public interface SchedulePermissionClient
{

    boolean validateScheduleAction(ScheduleActionRequestDto request, List<String> errorSink);
}

```

## src/main/java/com/nubo/schedule/cmd/api/client/third/service/impl/SchedulePermissionClientImpl.java

```java
package com.nubo.schedule.cmd.api.client.third.service.impl;

import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import com.nubo.schedule.cmd.api.application.properties.PropertiesConfig;
import com.nubo.schedule.cmd.api.application.properties.PropertiesContext;
import com.nubo.schedule.cmd.api.client.third.service.SchedulePermissionClient;
import com.nubo.schedule.cmd.api.models.dto.request.ScheduleActionRequestDto;
import com.nubo.schedule.cmd.api.models.enums.PropertiesEnum;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
@RequiredArgsConstructor
public class SchedulePermissionClientImpl implements SchedulePermissionClient
{

    private final RestTemplate restTemplate;

    private final PropertiesConfig propertiesConfig;

    public boolean validateScheduleAction(ScheduleActionRequestDto request, List<String> errorSink)
    {
        try
        {
            String url = propertiesConfig.getPermissionApiUrl() + propertiesConfig.getPermissionEndpoint();

            HttpHeaders headers = createHeaders();

            HttpEntity<ScheduleActionRequestDto> httpEntity = new HttpEntity<>(request, headers);

            log.debug("Calling permission API: {} with request: {}", url, request);

            ResponseEntity<Map<String, Object>> response = restTemplate.exchange(
                    url,
                    HttpMethod.POST,
                    httpEntity,
                    new org.springframework.core.ParameterizedTypeReference<Map<String, Object>>()
                    {
                    });

            if (response.getStatusCode() == HttpStatus.OK && response.getBody() != null)
            {
                Map<String, Object> responseBody = (Map<String, Object>) response.getBody();
                Boolean hasPermission = null;
                if (responseBody != null)
                {
                    hasPermission = (Boolean) responseBody.get("isValid");
                    if (!hasPermission)
                    {
                        Object validationErrorsObj = responseBody.get("validationErrors");
                        if (validationErrorsObj instanceof List<?>)
                        {
                            List<?> errorsList = (List<?>) validationErrorsObj;
                            for (Object err : errorsList)
                            {
                                if (err instanceof String)
                                {
                                    errorSink.add((String) err);
                                }
                            }
                        }
                    }
                }
                log.debug("Permission API response: {}", hasPermission);

                return Boolean.TRUE.equals(hasPermission);
            }
            else
            {
                log.warn("Unexpected response from permission API: {}", response);
                return false;
            }
        } catch (Exception e)
        {
            log.error("Error calling permission API", e);
            return false;
        }
    }

    private HttpHeaders createHeaders()
    {
        HttpHeaders headers = new HttpHeaders();

        headers.set(PropertiesEnum.CLIENT_IP.getValue(), PropertiesContext.getClientIp());
        headers.set(PropertiesEnum.CLIENT_USER.getValue(), PropertiesContext.getClientUser());
        headers.set(PropertiesEnum.CLIENT_DATETIME.getValue(),
                PropertiesContext.getClientDatetime().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss")));
        headers.setContentType(MediaType.APPLICATION_JSON);

        return headers;
    }
}

```

## src/main/java/com/nubo/schedule/cmd/api/exception/SchedulePermissionException.java

```java
package com.nubo.schedule.cmd.api.exception;

import java.util.List;

import org.springframework.http.HttpStatus;

import com.nubo.schedule.cmd.api.exception.error.ErrorCode;

import lombok.Getter;

@Getter
public class SchedulePermissionException extends RuntimeException
{

    private final ErrorCode errorCode;
    private final HttpStatus httpStatus;
    private final List<String> validationErrors;

    public SchedulePermissionException(ErrorCode errorCode)
    {
        super(errorCode.getMessage());
        this.errorCode = errorCode;
        this.httpStatus = HttpStatus.BAD_REQUEST;
        this.validationErrors = null;
    }

    public SchedulePermissionException(ErrorCode errorCode, List<String> validationErrors)
    {
        super(errorCode.getMessage());
        this.errorCode = errorCode;
        this.httpStatus = HttpStatus.BAD_REQUEST;
        this.validationErrors = validationErrors;
    }
}

```

## src/main/java/com/nubo/schedule/cmd/api/exception/ServiceException.java

```java
package com.nubo.schedule.cmd.api.exception;

import org.springframework.http.HttpStatus;

import com.nubo.schedule.cmd.api.exception.error.ErrorCode;

import lombok.Getter;

@Getter
public class ServiceException extends RuntimeException
{

    private final ErrorCode errorCode;
    private final HttpStatus httpStatus;

    public ServiceException(ErrorCode errorCode)
    {
        super(errorCode.getMessage());
        this.errorCode = errorCode;
        this.httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
    }

    public ServiceException(ErrorCode errorCode, HttpStatus httpStatus)
    {
        super(errorCode.getMessage());
        this.errorCode = errorCode;
        this.httpStatus = httpStatus;
    }

    public ServiceException(ErrorCode errorCode, Throwable throwable)
    {
        super(errorCode.getMessage(), throwable);
        this.errorCode = errorCode;
        this.httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
    }

    public ServiceException(ErrorCode errorCode, HttpStatus httpStatus, Throwable throwable)
    {
        super(errorCode.getMessage(), throwable);
        this.errorCode = errorCode;
        this.httpStatus = httpStatus;
    }

    public HttpStatus getHttpStatusOrDefault()
    {
        return this.httpStatus != null ? this.httpStatus : HttpStatus.INTERNAL_SERVER_ERROR;
    }

}

```

## src/main/java/com/nubo/schedule/cmd/api/exception/error/ErrorCode.java

```java
package com.nubo.schedule.cmd.api.exception.error;

import lombok.Getter;

@Getter
public enum ErrorCode
{

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
    SCHEDULE_NOT_FOUND("Schedule not found"),
    SCHEDULE_PERMISSION_DENIED("Permission denied for schedule action"),
    SCHEDULE_EVENT_PROCESSING_ERROR("Error processing schedule event"),
    COUNTRY_NOT_FOUND("Country not found"),
    TYPE_NOT_FOUND("Type not found"),
    PROCESS_NOT_FOUND("Process not found"),
    FREQUENCY_NOT_FOUND("Frequency not found"),
    MICROSERVICE_NOT_FOUND("Microservice not found"),
    MODULE_NOT_FOUND("Module not found"),
    SUBMODULE_NOT_FOUND("Submodule not found"),
    REJECTION_REASON_NOT_FOUND("Rejection reason not found"),
    INVALID_START_DATE("Start date must be today or in the future"),
    INVALID_CLOSING_TIME_SECONDARY("Closing time secondary invalid"),
    INVALID_END_DATE("End date must be equal or after start date"),
    TOO_MANY_RELATED_SCHEDULES("Maximum 10 related schedules allowed"),
    RELATED_SCHEDULE_NOT_FOUND("Related schedule not found"),
    DIFFERENT_COUNTRY_SCHEDULE_RELATION("Cannot relate schedules from different countries"),
    DIFFERENT_USER_SCHEDULE_RELATION("This schedule belongs to a different user"),
    RELATED_SCHEDULE_COUNTRY_REQUIRED("Country code is required for related schedules"),
    INVALID_RELATION_TYPE("Invalid relation type, must be 1, 2 or 3"),
    SCHEDULE_CREATION_ERROR("Error occurred during schedule creation process"),
    SCHEDULE_IN_PROGRESS("Cannot modify or delete a schedule that is in progress"),
    INVALID_SCHEDULE_TYPE("Invalid schedule type, must be 900 (Internal) or 901 (External)"),
    INVALID_OPENING_CLOSING_TIMES("Opening time must be before closing time"),
    DUPLICATE_SCHEDULE_BY_PROCESS_COUNTRY("A schedule with the same process already exists for this country"),
    DUPLICATE_SCHEDULE_BY_PROCESS_MICROSERVICE("A schedule with the same process already exists for this microservice"),
    INVALID_RELATED_SCHEDULE_TIMING("Related schedule closing time conflicts with current schedule opening time"),
    DUPLICATE_SCHEDULE_BY_PROCESS_STATUS_COUNTRY("Cannot create schedule: a schedule with the same process_id, status_id, and country already exists"),
    DUPLICATE_SCHEDULE_BY_SCREEN_ACTION_STATUS_COUNTRY("Cannot create schedule: a schedule with the same screen_action_id, status_id, and country already exists"),
    SCREEN_ACTION_NOT_FOUND("Screen action not found"),
    DUPLICATE_SCHEDULE_DESCRIPTION("A schedule with the same description already exists"),
    INVALID_FREQUENCY_RANGE("Frequency must be between 1 and 1440 minutes"),
    FREQUENCY_NOT_ALLOWED_FOR_MANUAL_SCHEDULE("Frequency is only allowed for automatic schedules"),
    END_DATE_OR_OPEN_END_DATE_REQUIRED("End date or open end date checkbox is required");

    private final String message;

    ErrorCode(String message)
    {
        this.message = message;
    }

    public String getName()
    {
        return this.name();
    }

}

```

## src/main/java/com/nubo/schedule/cmd/api/exception/error/ErrorResponse.java

```java
package com.nubo.schedule.cmd.api.exception.error;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ErrorResponse
{

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

## src/main/java/com/nubo/schedule/cmd/api/exception/error/ErrorValidation.java

```java
package com.nubo.schedule.cmd.api.exception.error;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ErrorValidation
{

    private String id;
    private String description;

}

```

## src/main/java/com/nubo/schedule/cmd/api/exception/handler/CustomKafkaErrorHandler.java

```java
package com.nubo.schedule.cmd.api.exception.handler;

import org.apache.kafka.clients.consumer.Consumer;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.apache.kafka.common.errors.RecordDeserializationException;
import org.springframework.kafka.listener.CommonErrorHandler;
import org.springframework.kafka.listener.MessageListenerContainer;
import org.springframework.stereotype.Component;

import com.nubo.schedule.cmd.api.exception.ServiceException;
import com.nubo.schedule.cmd.api.exception.error.ErrorCode;
import com.nubo.schedule.cmd.api.exception.kafka.KafkaErrorBuild;

import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Component
@RequiredArgsConstructor
@Slf4j
public class CustomKafkaErrorHandler implements CommonErrorHandler
{

    private final KafkaErrorBuild kafkaErrorBuild;

    @Override
    public void handleOtherException(@NonNull Exception thrownException, Consumer<?, ?> consumer,
            MessageListenerContainer container, boolean batchListener)
    {
        handle(thrownException, consumer);
    }

    @Override
    public boolean handleOne(@NonNull Exception thrownException, ConsumerRecord<?, ?> record, Consumer<?, ?> consumer,
            MessageListenerContainer container)
    {
        handle(thrownException, consumer);
        return true;
    }

    private void handle(Exception exception, Consumer<?, ?> consumer)
    {
        if (exception instanceof ServiceException ex)
        {
            kafkaErrorBuild.buildError(exception, ex.getErrorCode());
        }
        else if (exception instanceof RecordDeserializationException ex)
        {
            kafkaErrorBuild.buildError(exception, ErrorCode.ERROR_DESERIALIZER_JSON, ex.offset());
            consumer.seek(ex.topicPartition(), ex.offset() + 1L);
            consumer.commitSync();
        }
        else
        {
            kafkaErrorBuild.buildError(exception, ErrorCode.ERROR_KAFKA_CONSUMER_NUBO);
        }
    }

}

```

## src/main/java/com/nubo/schedule/cmd/api/exception/handler/GlobalExceptionHandler.java

```java
package com.nubo.schedule.cmd.api.exception.handler;

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

import com.nubo.schedule.cmd.api.application.properties.PropertiesContext;
import com.nubo.schedule.cmd.api.exception.SchedulePermissionException;
import com.nubo.schedule.cmd.api.exception.ServiceException;
import com.nubo.schedule.cmd.api.exception.error.ErrorCode;
import com.nubo.schedule.cmd.api.exception.error.ErrorResponse;
import com.nubo.schedule.cmd.api.exception.error.ErrorValidation;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestControllerAdvice
@Slf4j
@RequiredArgsConstructor
public class GlobalExceptionHandler
{

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handlerGeneralException(Exception exception, HttpServletRequest request)
    {
        return buildErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, exception, request, ErrorCode.UNEXPECTED);
    }

    @ExceptionHandler(SchedulePermissionException.class)
    public ResponseEntity<ErrorResponse> handlerSchedulePermissionException(SchedulePermissionException exception,
            HttpServletRequest request)
    {
        HttpStatus httpStatus = exception.getHttpStatus();
        List<ErrorValidation> errors = exception.getValidationErrors().stream()
                .map(desc -> ErrorValidation.builder()
                        .id(desc)
                        .description(desc)
                        .build())
                .toList();

        return buildErrorResponse(httpStatus, exception, request, exception.getErrorCode(), errors);
    }

    @ExceptionHandler(ServiceException.class)
    public ResponseEntity<ErrorResponse> handlerServiceException(ServiceException exception, HttpServletRequest request)
    {
        HttpStatus httpStatus = exception.getHttpStatus();
        return buildErrorResponse(httpStatus, exception, request, exception.getErrorCode());
    }

    @ExceptionHandler(NoResourceFoundException.class)
    public ResponseEntity<ErrorResponse> handlerNoResourceFoundException(NoResourceFoundException exception,
            HttpServletRequest request)
    {
        return buildErrorResponse(HttpStatus.NOT_FOUND, exception, request, ErrorCode.NOT_FOUND);
    }

    @ExceptionHandler(HttpRequestMethodNotSupportedException.class)
    public ResponseEntity<ErrorResponse> handlerHttpRequestMethodNotSupportedException(
            HttpRequestMethodNotSupportedException exception,
            HttpServletRequest request)
    {
        return buildErrorResponse(HttpStatus.METHOD_NOT_ALLOWED, exception, request, ErrorCode.METHOD_NOT_ALLOWED);
    }

    @ExceptionHandler(MethodArgumentTypeMismatchException.class)
    public ResponseEntity<ErrorResponse> handlerMethodArgumentTypeMismatchException(
            MethodArgumentTypeMismatchException exception,
            HttpServletRequest request)
    {
        return buildErrorResponse(HttpStatus.BAD_REQUEST, exception, request, ErrorCode.METHOD_ARGUMENT_TYPE);
    }

    @ExceptionHandler(HttpMediaTypeNotSupportedException.class)
    public ResponseEntity<ErrorResponse> handlerHttpMediaTypeNotSupportedException(
            HttpMediaTypeNotSupportedException exception,
            HttpServletRequest request)
    {
        return buildErrorResponse(HttpStatus.UNSUPPORTED_MEDIA_TYPE, exception, request,
                ErrorCode.UNSUPPORTED_MEDIA_TYPE);
    }

    @ExceptionHandler(HttpMessageNotReadableException.class)
    public ResponseEntity<ErrorResponse> handlerHttpMessageNotReadableException(
            HttpMessageNotReadableException exception,
            HttpServletRequest request)
    {
        return buildErrorResponse(HttpStatus.BAD_REQUEST, exception, request, ErrorCode.MESSAGE_NOT_READABLE);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorResponse> handlerMethodArgumentNotValidException(
            MethodArgumentNotValidException exception,
            HttpServletRequest request)
    {
        List<ErrorValidation> errors = exception.getBindingResult().getFieldErrors().stream().map(
                error -> ErrorValidation.builder().id(error.getField()).description(error.getDefaultMessage()).build())
                .toList();
        return buildErrorResponse(HttpStatus.BAD_REQUEST, exception, request, ErrorCode.BAD_REQUEST, errors);
    }

    private ResponseEntity<ErrorResponse> buildErrorResponse(HttpStatus status, Exception exception,
            HttpServletRequest request, ErrorCode errorCode)
    {
        return buildErrorResponse(status, exception, request, errorCode, null);
    }

    private ResponseEntity<ErrorResponse> buildErrorResponse(HttpStatus status, Exception exception,
            HttpServletRequest request,
            ErrorCode errorCode, List<ErrorValidation> errorDetails)
    {

        ErrorResponse errorResponse = ErrorResponse.builder()
                .httpCode(String.valueOf(status.value()))
                .httpMethod(request.getMethod())
                .url(request.getRequestURL().toString())
                .errorCode(errorCode.getName())
                .errorMessage(errorCode.getMessage())
                .errorMessageDetail(ObjectUtils.isEmpty(exception.getCause()) ? exception.getMessage()
                        : exception.getCause().getMessage())
                .timestamp(ObjectUtils.isEmpty(String.valueOf(PropertiesContext.getClientDatetime())) ? null
                        : String.valueOf(PropertiesContext.getClientDatetime()))
                .errorDetails(errorDetails)
                .build();

        log.error("Error -> {}", errorResponse);

        return ResponseEntity.status(status).body(errorResponse);
    }

}

```

## src/main/java/com/nubo/schedule/cmd/api/exception/kafka/KafkaErrorBuild.java

```java
package com.nubo.schedule.cmd.api.exception.kafka;

import java.time.LocalDateTime;

import org.apache.commons.lang3.ObjectUtils;
import org.springframework.stereotype.Component;

import com.nubo.schedule.cmd.api.application.properties.PropertiesConfig;
import com.nubo.schedule.cmd.api.exception.error.ErrorCode;
import com.nubo.schedule.cmd.api.exception.error.ErrorResponse;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Component
@RequiredArgsConstructor
@Slf4j
public class KafkaErrorBuild
{

    private final PropertiesConfig propertiesConfig;

    public void buildError(Exception exception, ErrorCode errorCode)
    {
        this.buildErrorResponse(exception, errorCode, null, null, null);
    }

    public void buildError(Exception exception, ErrorCode errorCode, Long offset)
    {
        this.buildErrorResponse(exception, errorCode, offset, null, null);
    }

    public void buildError(Exception exception, ErrorCode errorCode, Long offset, String topic, Integer retry)
    {
        this.buildErrorResponse(exception, errorCode, offset, topic, retry);
    }

    private void buildErrorResponse(Exception exception, ErrorCode errorCode, Long offset, String topic, Integer retry)
    {
        String description = errorCode.getMessage().concat(" - ")
                .concat(offset != null ? "Offset: ".concat(String.valueOf(offset)).concat(" - ") : "")
                .concat(topic != null ? "Topic: ".concat(topic).concat(" - ") : "")
                .concat(retry != null ? "Retries: ".concat(String.valueOf(retry)).concat(" - ") : "");

        ErrorResponse errorResponse = ErrorResponse.builder()
                .httpCode("500")
                .url(propertiesConfig.getKafkaNuboBootstrapServers())
                .errorCode(errorCode.getName())
                .errorMessage(description)
                .errorMessageDetail(ObjectUtils.isEmpty(exception.getCause()) ? exception.getMessage()
                        : exception.getCause().getMessage())
                .timestamp(String.valueOf(LocalDateTime.now()))
                .build();

        log.error("Error -> {}", errorResponse);
    }

}

```

## src/main/java/com/nubo/schedule/cmd/api/helpers/FrequencyMapperUtil.java

```java
package com.nubo.schedule.cmd.api.helpers;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import com.nubo.schedule.cmd.api.models.dto.response.FrequencyDto;
import com.nubo.schedule.cmd.api.models.entity.FrequencyEntity;

public class FrequencyMapperUtil
{

    public static FrequencyDto toDto(FrequencyEntity entity)
    {
        if (entity == null)
            return null;
        return FrequencyDto.builder()
                .id(entity.getId())
                .description(entity.getDescription())
                .build();
    }

    public static List<FrequencyDto> toDtoList(List<FrequencyEntity> entities)
    {
        if (entities == null || entities.isEmpty())
        {
            return Collections.emptyList();
        }
        return entities.stream()
                .map(FrequencyMapperUtil::toDto)
                .collect(Collectors.toList());
    }
}

```

## src/main/java/com/nubo/schedule/cmd/api/helpers/MicroserviceMapperUtil.java

```java
package com.nubo.schedule.cmd.api.helpers;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import com.nubo.schedule.cmd.api.models.dto.response.MicroserviceDto;
import com.nubo.schedule.cmd.api.models.entity.MicroserviceEntity;

public class MicroserviceMapperUtil
{

    public static MicroserviceDto toDto(MicroserviceEntity entity)
    {
        if (entity == null)
            return null;
        return MicroserviceDto.builder()
                .id(entity.getId())
                .name(entity.getName())
                .build();
    }

    public static List<MicroserviceDto> toDtoList(List<MicroserviceEntity> entities)
    {
        if (entities == null || entities.isEmpty())
        {
            return Collections.emptyList();
        }
        return entities.stream()
                .map(MicroserviceMapperUtil::toDto)
                .collect(Collectors.toList());
    }
}

```

## src/main/java/com/nubo/schedule/cmd/api/helpers/ModuleMapperUtil.java

```java
package com.nubo.schedule.cmd.api.helpers;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import com.nubo.schedule.cmd.api.models.dto.response.ModuleDto;
import com.nubo.schedule.cmd.api.models.entity.ModuleEntity;

public class ModuleMapperUtil
{

    public static ModuleDto toDto(ModuleEntity entity)
    {
        if (entity == null)
            return null;
        return ModuleDto.builder()
                .id(entity.getId())
                .categoryId(entity.getCategoryId())
                .name(entity.getName())
                .description(entity.getDescription())
                .collapsible(entity.getCollapsible())
                .orderItem(entity.getOrderItem())
                .moduleDeleted(entity.getModuleDeleted())
                .build();
    }

    public static List<ModuleDto> toDtoList(List<ModuleEntity> entities)
    {
        if (entities == null || entities.isEmpty())
        {
            return Collections.emptyList();
        }
        return entities.stream()
                .map(ModuleMapperUtil::toDto)
                .collect(Collectors.toList());
    }
}

```

## src/main/java/com/nubo/schedule/cmd/api/helpers/ProcessMapperUtil.java

```java
package com.nubo.schedule.cmd.api.helpers;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import com.nubo.schedule.cmd.api.models.dto.response.ProcessDto;
import com.nubo.schedule.cmd.api.models.entity.ProcessEntity;

public class ProcessMapperUtil
{

    public static ProcessDto toDto(ProcessEntity entity)
    {
        if (entity == null)
            return null;
        return ProcessDto.builder()
                .id(entity.getId())
                .description(entity.getDescription())
                .build();
    }

    public static List<ProcessDto> toDtoList(List<ProcessEntity> entities)
    {
        if (entities == null || entities.isEmpty())
        {
            return Collections.emptyList();
        }
        return entities.stream()
                .map(ProcessMapperUtil::toDto)
                .collect(Collectors.toList());
    }
}

```

## src/main/java/com/nubo/schedule/cmd/api/helpers/ScheduleMapperUtil.java

```java
package com.nubo.schedule.cmd.api.helpers;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import com.nubo.schedule.cmd.api.models.dto.response.ScheduleDto;
import com.nubo.schedule.cmd.api.models.entity.ScheduleEntity;

public class ScheduleMapperUtil
{

    public static ScheduleDto toDto(ScheduleEntity entity)
    {
        if (entity == null)
            return null;
        return ScheduleDto.builder()
                .id(entity.getId())
                .description(entity.getDescription())
                .openingTime(entity.getOpeningTime())
                .closingTime(entity.getClosingTime())
                .startDate(entity.getStartDate())
                .endDate(entity.getEndDate())
                .frequency(entity.getFrequency())
                .module(entity.getModule() != null ? ModuleMapperUtil.toDto(entity.getModule()) : null)
                .automatic(entity.getAutomatic())
                .process(entity.getProcess() != null ? ProcessMapperUtil.toDto(entity.getProcess()) : null)
                .build();
    }

    public static List<ScheduleDto> toDtoList(List<ScheduleEntity> entities)
    {
        if (entities == null || entities.isEmpty())
        {
            return Collections.emptyList();
        }
        return entities.stream()
                .map(ScheduleMapperUtil::toDto)
                .collect(Collectors.toList());
    }
}

```

## src/main/java/com/nubo/schedule/cmd/api/helpers/ScheduleStatusHistoryMapperUtil.java

```java
package com.nubo.schedule.cmd.api.helpers;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import com.nubo.schedule.cmd.api.models.dto.response.ScheduleStatusHistoryDto;
import com.nubo.schedule.cmd.api.models.entity.ScheduleStatusHistoryEntity;

public class ScheduleStatusHistoryMapperUtil
{

    public static ScheduleStatusHistoryDto toDto(ScheduleStatusHistoryEntity entity)
    {
        if (entity == null)
            return null;
        return ScheduleStatusHistoryDto.builder()
                .scheduleId(entity.getScheduleId())
                .time(entity.getTime())
                .detail(entity.getDetail())
                .build();
    }

    public static List<ScheduleStatusHistoryDto> toDtoList(List<ScheduleStatusHistoryEntity> entities)
    {
        if (entities == null || entities.isEmpty())
        {
            return Collections.emptyList();
        }
        return entities.stream()
                .map(ScheduleStatusHistoryMapperUtil::toDto)
                .collect(Collectors.toList());
    }
}

```

## src/main/java/com/nubo/schedule/cmd/api/helpers/SubmoduleMapperUtil.java

```java
package com.nubo.schedule.cmd.api.helpers;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import com.nubo.schedule.cmd.api.models.dto.response.SubmoduleDto;
import com.nubo.schedule.cmd.api.models.entity.SubmoduleEntity;

public class SubmoduleMapperUtil
{

    public static SubmoduleDto toDto(SubmoduleEntity entity)
    {
        if (entity == null)
            return null;
        return SubmoduleDto.builder()
                .id(entity.getId())
                .description(entity.getDescription())
                .name(entity.getName())
                .collapsible(entity.getCollapsible())
                .orderItem(entity.getOrderItem())
                .module(entity.getModule() != null ? ModuleMapperUtil.toDto(entity.getModule()) : null)
                .build();
    }

    public static List<SubmoduleDto> toDtoList(List<SubmoduleEntity> entities)
    {
        if (entities == null || entities.isEmpty())
        {
            return Collections.emptyList();
        }
        return entities.stream()
                .map(SubmoduleMapperUtil::toDto)
                .collect(Collectors.toList());
    }
}

```

## src/main/java/com/nubo/schedule/cmd/api/models/dto/request/JobsConfigRequestDto.java

```java
package com.nubo.schedule.cmd.api.models.dto.request;

import com.nubo.schedule.cmd.api.models.enums.ScheduleActionEnum;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class JobsConfigRequestDto
{

    private Long scheduleId;

    private ScheduleActionEnum scheduleAction;

    private Long moduleId;

    private Long submoduleId;

    private Long microserviceId;

    private Long processId;

    private Long userId;
}

```

## src/main/java/com/nubo/schedule/cmd/api/models/dto/request/JobsResultRequestDto.java

```java
package com.nubo.schedule.cmd.api.models.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class JobsResultRequestDto
{

    Long scheduleId;

    Boolean success;
}

```

## src/main/java/com/nubo/schedule/cmd/api/models/dto/request/NotificationRequestDto.java

```java
package com.nubo.schedule.cmd.api.models.dto.request;

import java.util.List;

import com.fasterxml.jackson.databind.JsonNode;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

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

## src/main/java/com/nubo/schedule/cmd/api/models/dto/request/RelatedScheduleRequestDto.java

```java
package com.nubo.schedule.cmd.api.models.dto.request;

import com.fasterxml.jackson.annotation.JsonInclude;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class RelatedScheduleRequestDto
{

    @NotNull(message = "Country code is required")
    private String countryCode;

    @NotNull(message = "Related schedule ID is required")
    private Long relatedScheduleId;

}

```

## src/main/java/com/nubo/schedule/cmd/api/models/dto/request/ScheduleActionRequestDto.java

```java
package com.nubo.schedule.cmd.api.models.dto.request;

import java.util.List;

import com.nubo.schedule.cmd.api.models.enums.ScheduleActionEnum;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ScheduleActionRequestDto
{

    private Long userId;
    private Long moduleId;
    private Long submoduleId;
    private Long processId;
    private ScheduleActionEnum action;
    private Long scheduleId;
    private List<String> countryCode;
    private ScheduleRequestDto scheduleRequestDto;

}

```

## src/main/java/com/nubo/schedule/cmd/api/models/dto/request/ScheduleExtensionRequestDto.java

```java
package com.nubo.schedule.cmd.api.models.dto.request;

import java.time.LocalTime;

import com.fasterxml.jackson.annotation.JsonInclude;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class ScheduleExtensionRequestDto
{

    private Long id;

    private LocalTime regularClosingTime;

    @NotNull(message = "New closing time is required")
    private LocalTime newClosingTime;

    private Boolean entireMarket;

    private String description;

    private Boolean billable;

    @NotNull(message = "Participant ID is required")
    private Long participantId;

    private Long rejectionReasonId;

    private Long statusId;

}

```

## src/main/java/com/nubo/schedule/cmd/api/models/dto/request/ScheduleRequestDto.java

```java
package com.nubo.schedule.cmd.api.models.dto.request;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class ScheduleRequestDto
{

    private Long id;

    private Long moduleId;

    private Long submoduleId;

    @NotBlank(message = "Description is required")
    private String description;

    @NotNull(message = "Status ID is required")
    private Long statusId;

    private LocalDate startDate;
    private LocalDate endDate;

    @Builder.Default
    private Boolean openEndDate = false;

    @Builder.Default
    private Boolean editAnyway = false;

    private LocalTime openingTime;
    private LocalTime closingTime;
    private LocalTime closingTimeSecondary;

    private Long processId;
    private Long screenActionId;
    private Integer frequency;
    private Boolean processType;

    @NotEmpty(message = "Countries codes are required")
    private List<String> countriesCodes;

    @NotNull(message = "User ID is required")
    private Long userId;

    @NotNull(message = "Automatic is required")
    private Boolean automatic;

    @Valid
    private List<RelatedScheduleRequestDto> relatedSchedules;

}

```

## src/main/java/com/nubo/schedule/cmd/api/models/dto/request/ScheduleUpdateRequestDto.java

```java
package com.nubo.schedule.cmd.api.models.dto.request;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
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
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class ScheduleUpdateRequestDto
{

    private Long id;

    @NotNull(message = "User ID is required")
    private Long userId;

    @NotEmpty(message = "Countries codes are required")
    private List<String> countriesCodes;

    @NotBlank(message = "Description is required")
    @Size(min = 3, max = 100, message = "Description must be between 3 and 100 characters")
    private String description;

    @NotNull(message = "Opening time is required")
    private LocalTime openingTime;

    @NotNull(message = "Closing time is required")
    private LocalTime closingTime;

    private LocalTime closingTimeSecondary;

    @NotNull(message = "Status ID is required")
    private Long statusId;

    @NotNull(message = "Process type is required")
    private Boolean processType;

    @NotNull(message = "Automatic is required")
    private Boolean automatic;

    private Integer frequency;

    private LocalDate endDate;

    @Builder.Default
    private Boolean openEndDate = false;

    @Valid
    private List<RelatedScheduleRequestDto> relatedSchedules;

}

```

## src/main/java/com/nubo/schedule/cmd/api/models/dto/response/CatalogItemDto.java

```java
package com.nubo.schedule.cmd.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class CatalogItemDto
{

    private Long id;
    private String code;
    private String name;
    private String description;
    private String countryCode;
    private Long parentId;

    public CatalogItemDto(Long id, String name)
    {
        this.id = id;
        this.name = name;
    }

    public CatalogItemDto(Long id, String code, String name)
    {
        this.id = id;
        this.code = code;
        this.name = name;
    }

    public CatalogItemDto(Long id, String name, String description, String countryCode)
    {
        this.id = id;
        this.name = name;
        this.description = description;
        this.countryCode = countryCode;
    }
}

```

## src/main/java/com/nubo/schedule/cmd/api/models/dto/response/FrequencyDto.java

```java
package com.nubo.schedule.cmd.api.models.dto.response;

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
public class FrequencyDto
{

    private Integer id;
    private String description;

}

```

## src/main/java/com/nubo/schedule/cmd/api/models/dto/response/MicroserviceDto.java

```java
package com.nubo.schedule.cmd.api.models.dto.response;

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
public class MicroserviceDto
{

    private Integer id;
    private String name;

}

```

## src/main/java/com/nubo/schedule/cmd/api/models/dto/response/ModuleDto.java

```java
package com.nubo.schedule.cmd.api.models.dto.response;

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
public class ModuleDto
{

    private Integer id;
    private Integer categoryId;
    private String name;
    private String description;
    private Boolean collapsible;
    private Integer orderItem;
    private Boolean moduleDeleted;

}

```

## src/main/java/com/nubo/schedule/cmd/api/models/dto/response/ProcessDto.java

```java
package com.nubo.schedule.cmd.api.models.dto.response;

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
public class ProcessDto
{

    private Integer id;
    private String description;

}

```

## src/main/java/com/nubo/schedule/cmd/api/models/dto/response/ScheduleDto.java

```java
package com.nubo.schedule.cmd.api.models.dto.response;

import java.time.LocalDate;
import java.time.LocalTime;

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
public class ScheduleDto
{

    private Long id;
    private ModuleDto module;
    private String description;
    private LocalDate startDate;
    private LocalDate endDate;
    private LocalTime openingTime;
    private LocalTime closingTime;
    private Integer frequency;
    private Boolean processType;
    private Boolean automatic;
    private ProcessDto process;

}

```

## src/main/java/com/nubo/schedule/cmd/api/models/dto/response/ScheduleStatusHistoryDto.java

```java
package com.nubo.schedule.cmd.api.models.dto.response;

import java.time.LocalDateTime;

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
public class ScheduleStatusHistoryDto
{

    private Long scheduleId;
    private LocalDateTime time;
    private String detail;

}

```

## src/main/java/com/nubo/schedule/cmd/api/models/dto/response/ScreenDto.java

```java
package com.nubo.schedule.cmd.api.models.dto.response;

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
public class ScreenDto
{

    private Long id;
    private String code;
    private String description;
    private Integer categoryId;
    private Integer moduleId;
    private Integer submoduleId;

}

```

## src/main/java/com/nubo/schedule/cmd/api/models/dto/response/SubmoduleDto.java

```java
package com.nubo.schedule.cmd.api.models.dto.response;

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
public class SubmoduleDto
{

    private Integer id;
    private String description;
    private String name;
    private Boolean collapsible;
    private Integer orderItem;
    private ModuleDto module;

}

```

## src/main/java/com/nubo/schedule/cmd/api/models/entity/CountryEntity.java

```java
package com.nubo.schedule.cmd.api.models.entity;

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
public class CountryEntity
{

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

## src/main/java/com/nubo/schedule/cmd/api/models/entity/CurrencyEntity.java

```java
package com.nubo.schedule.cmd.api.models.entity;

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
public class CurrencyEntity
{

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

## src/main/java/com/nubo/schedule/cmd/api/models/entity/DepartmentEntity.java

```java
package com.nubo.schedule.cmd.api.models.entity;

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
@Table(name = "\"DEPARTMENT\"", schema = "\"NUANBODB\"")
public class DepartmentEntity
{

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

## src/main/java/com/nubo/schedule/cmd/api/models/entity/FrequencyEntity.java

```java
package com.nubo.schedule.cmd.api.models.entity;

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
@Table(name = "\"FREQUENCY\"", schema = "\"NUANBODB\"")
public class FrequencyEntity
{

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

## src/main/java/com/nubo/schedule/cmd/api/models/entity/IdentificationTypeEntity.java

```java
package com.nubo.schedule.cmd.api.models.entity;

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
@Table(name = "\"IDENTIFICATION_TYPE\"", schema = "\"NUANBODB\"")
public class IdentificationTypeEntity
{

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

## src/main/java/com/nubo/schedule/cmd/api/models/entity/MicroserviceEntity.java

```java
package com.nubo.schedule.cmd.api.models.entity;

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
@Table(name = "\"MICROSERVICE\"", schema = "\"NUANBODB\"")
public class MicroserviceEntity
{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"MICROSERVICE_ID\"", nullable = false)
    private Integer id;

    @Column(name = "\"NAME\"", length = 200, nullable = false)
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

## src/main/java/com/nubo/schedule/cmd/api/models/entity/ModuleEntity.java

```java
package com.nubo.schedule.cmd.api.models.entity;

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
@Table(name = "\"MODULE\"", schema = "\"NUANBODB\"")
public class ModuleEntity
{

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

## src/main/java/com/nubo/schedule/cmd/api/models/entity/ParticipantEntity.java

```java
package com.nubo.schedule.cmd.api.models.entity;

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
public class ParticipantEntity
{

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

## src/main/java/com/nubo/schedule/cmd/api/models/entity/ProcessEntity.java

```java
package com.nubo.schedule.cmd.api.models.entity;

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
public class ProcessEntity
{

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

## src/main/java/com/nubo/schedule/cmd/api/models/entity/RejectionReasonEntity.java

```java
package com.nubo.schedule.cmd.api.models.entity;

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
@Table(name = "\"REJECTION_REASON\"", schema = "\"NUANBODB\"")
public class RejectionReasonEntity
{

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

## src/main/java/com/nubo/schedule/cmd/api/models/entity/RelatedScheduleEntity.java

```java
package com.nubo.schedule.cmd.api.models.entity;

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
@Table(name = "\"RELATED_SCHEDULE\"", schema = "\"NUANBODB\"")
public class RelatedScheduleEntity {

    @Id
    @Column(name = "\"RELATED_SCHEDULE_ID\"", nullable = false)
    private Long relatedScheduleId;

    @Column(name = "\"SCHEDULE_ID\"", nullable = false)
    private Long scheduleId;

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

## src/main/java/com/nubo/schedule/cmd/api/models/entity/ScheduleEntity.java

```java
package com.nubo.schedule.cmd.api.models.entity;

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
import java.time.LocalTime;

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

    @ManyToOne
    @JoinColumn(name = "\"PROCESS_ID\"")
    private ProcessEntity process;

    @ManyToOne
    @JoinColumn(name = "\"SCREEN_ACTION_ID\"")
    private ScreenActionEntity screenAction;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 250, nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50, nullable = false)
    private String lastModifyIp;

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

    @Column(name = "\"AUTOMATIC\"")
    private Boolean automatic;

}

```

## src/main/java/com/nubo/schedule/cmd/api/models/entity/ScheduleExtensionEntity.java

```java
package com.nubo.schedule.cmd.api.models.entity;

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
public class ScheduleExtensionEntity
{

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

## src/main/java/com/nubo/schedule/cmd/api/models/entity/ScheduleExtensionStatusHistoryEntity.java

```java
package com.nubo.schedule.cmd.api.models.entity;

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
@Table(name = "\"SCHDEULE_EXTENSION_STATUS_HISTORY\"", schema = "\"NUANBODB\"")
@IdClass(ScheduleExtensionStatusHistoryEntity.ScheduleExtensionStatusHistoryId.class)
public class ScheduleExtensionStatusHistoryEntity
{

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
    public static class ScheduleExtensionStatusHistoryId implements Serializable
    {
        private Long scheduleExtensionId;
        private LocalDateTime time;
    }
}

```

## src/main/java/com/nubo/schedule/cmd/api/models/entity/ScheduleStatusHistoryEntity.java

```java
package com.nubo.schedule.cmd.api.models.entity;

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
@Table(name = "\"SCHEDULE_STATUS_HISTORY\"", schema = "\"NUANBODB\"")
@IdClass(ScheduleStatusHistoryEntity.ScheduleStatusHistoryId.class)
public class ScheduleStatusHistoryEntity
{

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
    public static class ScheduleStatusHistoryId implements Serializable
    {
        private Long scheduleId;
        private LocalDateTime time;
    }
}

```

## src/main/java/com/nubo/schedule/cmd/api/models/entity/ScreenActionEntity.java

```java
package com.nubo.schedule.cmd.api.models.entity;

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

## src/main/java/com/nubo/schedule/cmd/api/models/entity/ScreenEntity.java

```java
package com.nubo.schedule.cmd.api.models.entity;

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
@Table(name = "\"SCREEN\"", schema = "\"NUANBODB\"")
public class ScreenEntity
{

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

## src/main/java/com/nubo/schedule/cmd/api/models/entity/StatusEntity.java

```java
package com.nubo.schedule.cmd.api.models.entity;

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
public class StatusEntity
{

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

## src/main/java/com/nubo/schedule/cmd/api/models/entity/SubmoduleAccessTypeEntity.java

```java
package com.nubo.schedule.cmd.api.models.entity;

import java.io.Serializable;
import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
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
@Table(name = "\"SUBMODULE_ACCESS_TYPE\"", schema = "\"NUANBODB\"")
@IdClass(SubmoduleAccessTypeEntity.SubmoduleAccessTypeId.class)
public class SubmoduleAccessTypeEntity
{

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
    public static class SubmoduleAccessTypeId implements Serializable
    {
        private Integer submoduleId;
        private Integer accessTypeId;
    }
}

```

## src/main/java/com/nubo/schedule/cmd/api/models/entity/SubmoduleEntity.java

```java
package com.nubo.schedule.cmd.api.models.entity;

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
@Table(name = "\"SUBMODULE\"", schema = "\"NUANBODB\"")
public class SubmoduleEntity
{

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

## src/main/java/com/nubo/schedule/cmd/api/models/entity/TaxStatusEntity.java

```java
package com.nubo.schedule.cmd.api.models.entity;

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
@Table(name = "\"TAX_STATUS\"", schema = "\"NUANBODB\"")
public class TaxStatusEntity
{

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

## src/main/java/com/nubo/schedule/cmd/api/models/entity/TypeEntity.java

```java
package com.nubo.schedule.cmd.api.models.entity;

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
public class TypeEntity
{

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

## src/main/java/com/nubo/schedule/cmd/api/models/entity/UserNuboEntity.java

```java
package com.nubo.schedule.cmd.api.models.entity;

import java.time.LocalDateTime;

import com.nubo.schedule.cmd.api.models.enums.UserTypeEnum;

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
public class UserNuboEntity
{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"USER_NUBO_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"USER_NAME\"", unique = true, length = 80, nullable = false)
    private String userName;

    @ManyToOne
    @JoinColumn(name = "\"PARTICIPANT_ID\"", nullable = false)
    private ParticipantEntity participant;

    @ManyToOne
    @JoinColumn(name = "\"COUNTRY_ID\"", nullable = false)
    private CountryEntity country;

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

## src/main/java/com/nubo/schedule/cmd/api/models/enums/AssociatedTypeEnum.java

```java
package com.nubo.schedule.cmd.api.models.enums;

import java.util.Arrays;
import java.util.Optional;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum AssociatedTypeEnum
{

    PARENT(920L, "Padre"),
    CHILD(921L, "Hijo");

    private final Long code;
    private final String description;

    public static Optional<AssociatedTypeEnum> fromCode(Long code)
    {
        return Arrays.stream(AssociatedTypeEnum.values())
                .filter(type -> type.getCode().equals(code))
                .findFirst();
    }

    public static boolean isValidCode(Long code)
    {
        return fromCode(code).isPresent();
    }

    public AssociatedTypeEnum getInverseType()
    {
        return this == PARENT ? CHILD : PARENT;
    }

    public String getName()
    {
        return this.name();
    }
}

```

## src/main/java/com/nubo/schedule/cmd/api/models/enums/CountryCodeEnum.java

```java
package com.nubo.schedule.cmd.api.models.enums;

import java.util.Arrays;
import java.util.List;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum CountryCodeEnum
{

    CHILE("CL"),
    COLOMBIA("CO"),
    PERU("PE"),
    ALL("ALL");

    private final String code;

    public static List<String> getAllCountriesCodes()
    {
        return Arrays.stream(CountryCodeEnum.values())
                .map(CountryCodeEnum::getCode)
                .toList();
    }

    public static List<String> getSpecificCountriesCodes()
    {
        return Arrays.stream(CountryCodeEnum.values())
                .filter(country -> !ALL.equals(country))
                .map(CountryCodeEnum::getCode)
                .toList();
    }

    public static boolean isValidCode(String code)
    {
        return Arrays.stream(CountryCodeEnum.values())
                .anyMatch(country -> country.getCode().equalsIgnoreCase(code));
    }
}

```

## src/main/java/com/nubo/schedule/cmd/api/models/enums/PropertiesEnum.java

```java
package com.nubo.schedule.cmd.api.models.enums;

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
    AUTH_TOKEN("auth_token");

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

## src/main/java/com/nubo/schedule/cmd/api/models/enums/ScheduleActionEnum.java

```java
package com.nubo.schedule.cmd.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum ScheduleActionEnum
{

    CREATE("CREATE"),
    UPDATE("UPDATE"),
    CLOSE("CLOSE");

    private final String value;

    public static ScheduleActionEnum fromValue(String value)
    {
        for (ScheduleActionEnum action : ScheduleActionEnum.values())
        {
            if (action.getValue().equalsIgnoreCase(value))
            {
                return action;
            }
        }
        throw new IllegalArgumentException("Invalid ScheduleActionEnum value: " + value);
    }
}

```

## src/main/java/com/nubo/schedule/cmd/api/models/enums/ScheduleStatusEnum.java

```java
package com.nubo.schedule.cmd.api.models.enums;

import java.util.Arrays;
import java.util.Optional;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum ScheduleStatusEnum
{

    ACTIVE(920L, "Activo"),
    INACTIVE(921L, "Inactivo");

    private final Long code;
    private final String description;

    public static Optional<ScheduleStatusEnum> fromCode(Long code)
    {
        return Arrays.stream(ScheduleStatusEnum.values())
                .filter(status -> status.getCode().equals(code))
                .findFirst();
    }

    public static boolean isValidCode(Long code)
    {
        return fromCode(code).isPresent();
    }

    public static ScheduleStatusEnum getDefaultStatus()
    {
        return ACTIVE;
    }

    public boolean isActive()
    {
        return this == ACTIVE;
    }

    public boolean isInactive()
    {
        return this == INACTIVE;
    }

    public String getName()
    {
        return this.name();
    }
}

```

## src/main/java/com/nubo/schedule/cmd/api/models/enums/ScheduleTypeEnum.java

```java
package com.nubo.schedule.cmd.api.models.enums;

import java.util.Arrays;
import java.util.Optional;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum ScheduleTypeEnum
{

    INTERNAL(900L, "Horario Interno"),
    EXTERNAL(901L, "Horario Externo");

    private final Long code;
    private final String description;

    public static Optional<ScheduleTypeEnum> fromCode(Long code)
    {
        return Arrays.stream(ScheduleTypeEnum.values())
                .filter(type -> type.getCode().equals(code))
                .findFirst();
    }

    public static boolean isValidCode(Long code)
    {
        return fromCode(code).isPresent();
    }

    public String getName()
    {
        return this.name();
    }
}

```

## src/main/java/com/nubo/schedule/cmd/api/models/enums/StatusEnum.java

```java
package com.nubo.schedule.cmd.api.models.enums;

import java.util.Arrays;
import java.util.Optional;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum StatusEnum
{
    ACTIVE(1L, "Activo"),
    INACTIVE(0L, "Inactivo");

    private final Long code;
    private final String description;

    public static Optional<StatusEnum> fromCode(Long code)
    {
        return Arrays.stream(StatusEnum.values())
                .filter(status -> status.getCode().equals(code))
                .findFirst();
    }

    public static boolean isValidCode(Long code)
    {
        return fromCode(code).isPresent();
    }

    public static StatusEnum getDefaultStatus()
    {
        return ACTIVE;
    }

    public boolean isActive()
    {
        return this == ACTIVE;
    }

    public boolean isInactive()
    {
        return this == INACTIVE;
    }

    @JsonValue
    public Long getValue()
    {
        return code;
    }

    @JsonCreator
    public static StatusEnum fromValue(Long value)
    {
        return Arrays.stream(StatusEnum.values())
                .filter(status -> status.code.equals(value))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Unknown status code: " + value));
    }

    public String getName()
    {
        return this.name();
    }

    @Converter(autoApply = true)
    public static class StatusEnumConverter implements AttributeConverter<StatusEnum, Long>
    {
        @Override
        public Long convertToDatabaseColumn(StatusEnum status)
        {
            return status != null ? status.getCode() : null;
        }

        @Override
        public StatusEnum convertToEntityAttribute(Long dbData)
        {
            return dbData != null ? StatusEnum.fromValue(dbData) : null;
        }
    }
}

```

## src/main/java/com/nubo/schedule/cmd/api/models/enums/UserTypeEnum.java

```java
package com.nubo.schedule.cmd.api.models.enums;

import java.util.Arrays;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum UserTypeEnum
{

    INTERNAL("INTERNAL"), EXTERNAL("EXTERNAL");

    private final String value;

    @JsonValue
    public String getValue()
    {
        return value;
    }

    @JsonCreator
    public static UserTypeEnum fromValue(String value)
    {
        return Arrays.stream(UserTypeEnum.values())
                .filter(status -> status.value.equalsIgnoreCase(value))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Unknown value: " + value));
    }

    @Converter(autoApply = true)
    public static class UserTypeEnumConverter implements AttributeConverter<UserTypeEnum, String>
    {

        @Override
        public String convertToDatabaseColumn(UserTypeEnum status)
        {
            return status != null ? status.getValue() : null;
        }

        @Override
        public UserTypeEnum convertToEntityAttribute(String dbData)
        {
            return dbData != null ? UserTypeEnum.fromValue(dbData) : null;
        }
    }

}

```

## src/main/java/com/nubo/schedule/cmd/api/models/enums/VersionApiEnum.java

```java
package com.nubo.schedule.cmd.api.models.enums;

import java.util.Arrays;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum VersionApiEnum
{

    V1("v1"), V2("v2"), VERSION_NOT_IMPLEMENTED("VERSION_NOT_IMPLEMENTED");

    private final String value;

    @JsonValue
    public String getValue()
    {
        return value;
    }

    @JsonCreator
    public static VersionApiEnum fromValue(String value)
    {
        return Arrays.stream(VersionApiEnum.values())
                .filter(version -> version.value.equalsIgnoreCase(value))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Version not implemented: " + value));
    }

    @Converter(autoApply = true)
    public static class VersionApiEnumConverter implements AttributeConverter<VersionApiEnum, String>
    {
        @Override
        public String convertToDatabaseColumn(VersionApiEnum status)
        {
            return status != null ? status.getValue() : null;
        }

        @Override
        public VersionApiEnum convertToEntityAttribute(String dbData)
        {
            return dbData != null ? VersionApiEnum.fromValue(dbData) : null;
        }
    }

}

```

## src/main/java/com/nubo/schedule/cmd/api/repository/CountryRepository.java

```java
package com.nubo.schedule.cmd.api.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.schedule.cmd.api.models.entity.CountryEntity;

public interface CountryRepository extends JpaRepository<CountryEntity, Long>
{
    Optional<CountryEntity> findByCode(String code);
}

```

## src/main/java/com/nubo/schedule/cmd/api/repository/FrequencyRepository.java

```java
package com.nubo.schedule.cmd.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.schedule.cmd.api.models.entity.FrequencyEntity;

public interface FrequencyRepository extends JpaRepository<FrequencyEntity, Long>
{
}

```

## src/main/java/com/nubo/schedule/cmd/api/repository/MicroserviceRepository.java

```java
package com.nubo.schedule.cmd.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.schedule.cmd.api.models.entity.MicroserviceEntity;

public interface MicroserviceRepository extends JpaRepository<MicroserviceEntity, Integer>
{
    List<MicroserviceEntity> findByNameContainingIgnoreCase(String name);
}

```

## src/main/java/com/nubo/schedule/cmd/api/repository/ModuleRepository.java

```java
package com.nubo.schedule.cmd.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.schedule.cmd.api.models.entity.ModuleEntity;

public interface ModuleRepository extends JpaRepository<ModuleEntity, Integer>
{
    List<ModuleEntity> findByModuleDeletedFalse();

    List<ModuleEntity> findByNameContainingIgnoreCaseAndModuleDeletedFalse(String name);
}

```

## src/main/java/com/nubo/schedule/cmd/api/repository/ParticipantRepository.java

```java
package com.nubo.schedule.cmd.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.schedule.cmd.api.models.entity.ParticipantEntity;

public interface ParticipantRepository extends JpaRepository<ParticipantEntity, Long>
{
}

```

## src/main/java/com/nubo/schedule/cmd/api/repository/ProcessRepository.java

```java
package com.nubo.schedule.cmd.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.schedule.cmd.api.models.entity.ProcessEntity;

public interface ProcessRepository extends JpaRepository<ProcessEntity, Long>
{
    List<ProcessEntity> findByDescriptionContainingIgnoreCase(String description);
}

```

## src/main/java/com/nubo/schedule/cmd/api/repository/RejectionReasonRepository.java

```java
package com.nubo.schedule.cmd.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.schedule.cmd.api.models.entity.RejectionReasonEntity;

public interface RejectionReasonRepository extends JpaRepository<RejectionReasonEntity, Long>
{
}

```

## src/main/java/com/nubo/schedule/cmd/api/repository/RelatedScheduleRepository.java

```java
package com.nubo.schedule.cmd.api.repository;

import com.nubo.schedule.cmd.api.models.entity.RelatedScheduleEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RelatedScheduleRepository extends JpaRepository<RelatedScheduleEntity, Long> {
    List<RelatedScheduleEntity> findByScheduleId(Long scheduleId);

}

```

## src/main/java/com/nubo/schedule/cmd/api/repository/ScheduleExtensionRepository.java

```java
package com.nubo.schedule.cmd.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.schedule.cmd.api.models.entity.ScheduleExtensionEntity;

public interface ScheduleExtensionRepository extends JpaRepository<ScheduleExtensionEntity, Long>
{
    List<ScheduleExtensionEntity> findByScheduleId(Long scheduleId);
}

```

## src/main/java/com/nubo/schedule/cmd/api/repository/ScheduleRepository.java

```java
package com.nubo.schedule.cmd.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.schedule.cmd.api.models.entity.ScheduleEntity;

public interface ScheduleRepository extends JpaRepository<ScheduleEntity, Long>
{

    List<ScheduleEntity> findByUserNuboId(Long userNuboId);

    boolean existsByProcessIdAndStatusIdAndCountryId(Long processId, Long statusId, Long countryId);

    boolean existsByScreenActionIdAndStatusIdAndCountryId(Long screenActionId, Long statusId, Long countryId);

    boolean existsByDescriptionAndIdNot(String description, Long id);

}

```

## src/main/java/com/nubo/schedule/cmd/api/repository/ScheduleStatusHistoryRepository.java

```java
package com.nubo.schedule.cmd.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.nubo.schedule.cmd.api.models.entity.ScheduleStatusHistoryEntity;

public interface ScheduleStatusHistoryRepository
        extends JpaRepository<ScheduleStatusHistoryEntity, ScheduleStatusHistoryEntity.ScheduleStatusHistoryId>
{

    @Query("SELECT ssh FROM ScheduleStatusHistoryEntity ssh WHERE ssh.scheduleId IN " +
            "(SELECT s.id FROM ScheduleEntity s WHERE s.userNubo.id = :userNuboId)")
    List<ScheduleStatusHistoryEntity> findByScheduleUserNuboId(@Param("userNuboId") Long userNuboId);
}

```

## src/main/java/com/nubo/schedule/cmd/api/repository/ScreenActionRepository.java

```java
package com.nubo.schedule.cmd.api.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nubo.schedule.cmd.api.models.entity.ScreenActionEntity;

@Repository
public interface ScreenActionRepository extends JpaRepository<ScreenActionEntity, Long>
{
    Optional<ScreenActionEntity> findById(Long id);
}

```

## src/main/java/com/nubo/schedule/cmd/api/repository/StatusRepository.java

```java
package com.nubo.schedule.cmd.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.schedule.cmd.api.models.entity.StatusEntity;

public interface StatusRepository extends JpaRepository<StatusEntity, Long>
{
}

```

## src/main/java/com/nubo/schedule/cmd/api/repository/SubmoduleRepository.java

```java
package com.nubo.schedule.cmd.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.schedule.cmd.api.models.entity.SubmoduleEntity;

public interface SubmoduleRepository extends JpaRepository<SubmoduleEntity, Integer>
{
    List<SubmoduleEntity> findBySubmoduleDeletedFalse();

    List<SubmoduleEntity> findByModuleIdAndSubmoduleDeletedFalse(Integer moduleId);

    List<SubmoduleEntity> findByNameContainingIgnoreCaseAndSubmoduleDeletedFalse(String name);

    List<SubmoduleEntity> findByModuleIdAndNameContainingIgnoreCaseAndSubmoduleDeletedFalse(
            Integer moduleId, String name);
}

```

## src/main/java/com/nubo/schedule/cmd/api/repository/TypeRepository.java

```java
package com.nubo.schedule.cmd.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.schedule.cmd.api.models.entity.TypeEntity;

public interface TypeRepository extends JpaRepository<TypeEntity, Long>
{
}

```

## src/main/java/com/nubo/schedule/cmd/api/repository/UserNuboRepository.java

```java
package com.nubo.schedule.cmd.api.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.nubo.schedule.cmd.api.models.entity.UserNuboEntity;

public interface UserNuboRepository extends JpaRepository<UserNuboEntity, Long>
{

    @Query("SELECT u FROM UserNuboEntity u " +
            "WHERE u.userName = :userName")
    Optional<UserNuboEntity> findByUserName(String userName);
}

```

## src/main/java/com/nubo/schedule/cmd/api/service/CatalogService.java

```java
package com.nubo.schedule.cmd.api.service;

import java.util.List;

import com.nubo.schedule.cmd.api.models.dto.response.CatalogItemDto;

public interface CatalogService
{

    List<CatalogItemDto> getModules(String search);

    List<CatalogItemDto> getSubmodules(Long moduleId, String search);

    List<CatalogItemDto> getProcesses(String search);

    List<CatalogItemDto> getMicroservices(String search);

    List<CatalogItemDto> getCountries();

    List<CatalogItemDto> getFrequencies();

    List<CatalogItemDto> getSchedulesByCountry(String countryCode);

    List<CatalogItemDto> getTimezones();
}

```

## src/main/java/com/nubo/schedule/cmd/api/service/ScheduleService.java

```java
package com.nubo.schedule.cmd.api.service;

import java.util.List;

import com.nubo.schedule.cmd.api.models.dto.request.JobsResultRequestDto;
import com.nubo.schedule.cmd.api.models.dto.request.ScheduleRequestDto;
import com.nubo.schedule.cmd.api.models.dto.request.ScheduleUpdateRequestDto;
import com.nubo.schedule.cmd.api.models.dto.response.ScheduleDto;

public interface ScheduleService
{

    List<ScheduleDto> createOrUpdate(ScheduleRequestDto request);

    ScheduleDto updateSchedule(ScheduleUpdateRequestDto request);

    List<ScheduleDto> getAllByUser(Long userId);

    void processScheduleEvent(JobsResultRequestDto message);

}

```

## src/main/java/com/nubo/schedule/cmd/api/service/ScheduleStatusHistoryService.java

```java
package com.nubo.schedule.cmd.api.service;

import java.util.List;

import com.nubo.schedule.cmd.api.models.dto.response.ScheduleStatusHistoryDto;

public interface ScheduleStatusHistoryService
{

    List<ScheduleStatusHistoryDto> getAllByUser(Long userId);

}

```

## src/main/java/com/nubo/schedule/cmd/api/service/impl/CatalogServiceImpl.java

```java
package com.nubo.schedule.cmd.api.service.impl;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.nubo.schedule.cmd.api.models.dto.response.CatalogItemDto;
import com.nubo.schedule.cmd.api.models.entity.SubmoduleEntity;
import com.nubo.schedule.cmd.api.repository.ModuleRepository;
import com.nubo.schedule.cmd.api.repository.SubmoduleRepository;
import com.nubo.schedule.cmd.api.service.CatalogService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@RequiredArgsConstructor
public class CatalogServiceImpl implements CatalogService
{

    private final ModuleRepository moduleRepository;
    private final SubmoduleRepository submoduleRepository;

    @Override
    public List<CatalogItemDto> getModules(String search)
    {
        log.info("Getting modules with search: {}", search);

        if (StringUtils.hasText(search) && search.length() >= 2)
        {
            return moduleRepository.findByNameContainingIgnoreCaseAndModuleDeletedFalse(search)
                    .stream()
                    .map(module -> CatalogItemDto.builder()
                            .id(module.getId().longValue())
                            .name(module.getName())
                            .description(module.getDescription())
                            .build())
                    .collect(Collectors.toList());
        }
        else
        {
            return moduleRepository.findByModuleDeletedFalse()
                    .stream()
                    .map(module -> CatalogItemDto.builder()
                            .id(module.getId().longValue())
                            .name(module.getName())
                            .description(module.getDescription())
                            .build())
                    .collect(Collectors.toList());
        }
    }

    @Override
    public List<CatalogItemDto> getSubmodules(Long moduleId, String search)
    {
        log.info("Getting submodules for moduleId: {} with search: {}", moduleId, search);

        List<SubmoduleEntity> submodules;

        if (StringUtils.hasText(search) && search.length() >= 2)
        {
            submodules = submoduleRepository
                    .findByModuleIdAndNameContainingIgnoreCaseAndSubmoduleDeletedFalse(
                            moduleId.intValue(), search);
        }
        else
        {
            submodules = submoduleRepository.findByModuleIdAndSubmoduleDeletedFalse(moduleId.intValue());
        }

        return submodules.stream()
                .map(submodule -> CatalogItemDto.builder()
                        .id(submodule.getId().longValue())
                        .name(submodule.getName())
                        .description(submodule.getDescription())
                        .build())
                .collect(Collectors.toList());
    }

    @Override
    public List<CatalogItemDto> getProcesses(String search)
    {
        log.info("Getting processes with search: {}", search);

        return Arrays.asList(
                CatalogItemDto.builder()
                        .id(1L)
                        .name("Batch Process")
                        .description("Procesamiento por lotes")
                        .build(),
                CatalogItemDto.builder()
                        .id(2L)
                        .name("Real Time Process")
                        .description("Procesamiento en tiempo real")
                        .build());
    }

    @Override
    public List<CatalogItemDto> getMicroservices(String search)
    {
        log.info("Getting microservices with search: {}", search);

        return Arrays.asList(
                CatalogItemDto.builder()
                        .id(1L)
                        .name("Schedule API")
                        .description("API de gestión de horarios")
                        .build(),
                CatalogItemDto.builder()
                        .id(2L)
                        .name("User API")
                        .description("API de gestión de usuarios")
                        .build());
    }

    @Override
    public List<CatalogItemDto> getCountries()
    {
        log.info("Getting countries catalog");

        return Arrays.asList(
                new CatalogItemDto(1L, "CL", "Chile"),
                new CatalogItemDto(2L, "CO", "Colombia"),
                new CatalogItemDto(3L, "PE", "Perú"),
                new CatalogItemDto(4L, "ALL", "Todos"));
    }

    @Override
    public List<CatalogItemDto> getFrequencies()
    {
        log.info("Getting frequencies");

        return Arrays.asList(
                CatalogItemDto.builder()
                        .id(1L)
                        .name("Daily")
                        .description("Ejecución diaria")
                        .build(),
                CatalogItemDto.builder()
                        .id(2L)
                        .name("Weekly")
                        .description("Ejecución semanal")
                        .build(),
                CatalogItemDto.builder()
                        .id(3L)
                        .name("Monthly")
                        .description("Ejecución mensual")
                        .build());
    }

    @Override
    public List<CatalogItemDto> getSchedulesByCountry(String countryCode)
    {
        log.info("Getting schedules for countryCode: {}", countryCode);

        return Arrays.asList(
                CatalogItemDto.builder()
                        .id(1L)
                        .name("Business Hours " + countryCode)
                        .description("Horario comercial para " + countryCode)
                        .build(),
                CatalogItemDto.builder()
                        .id(2L)
                        .name("Extended Hours " + countryCode)
                        .description("Horario extendido para " + countryCode)
                        .build());
    }

    @Override
    public List<CatalogItemDto> getTimezones()
    {
        log.info("Getting timezones catalog");
        return Arrays.asList(
                new CatalogItemDto(1L, "GMT-3", "GMT-3 (Horario de Verano)"),
                new CatalogItemDto(2L, "GMT-4", "GMT-4 (Horario de Invierno)"));
    }
}

```

## src/main/java/com/nubo/schedule/cmd/api/service/impl/ScheduleServiceImpl.java

```java
package com.nubo.schedule.cmd.api.service.impl;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.nubo.schedule.cmd.api.application.properties.PropertiesConfig;
import com.nubo.schedule.cmd.api.application.properties.PropertiesContext;
import com.nubo.schedule.cmd.api.client.kafka.producer.service.KafkaNuboAdapter;
import com.nubo.schedule.cmd.api.client.third.service.SchedulePermissionClient;
import com.nubo.schedule.cmd.api.exception.SchedulePermissionException;
import com.nubo.schedule.cmd.api.exception.ServiceException;
import com.nubo.schedule.cmd.api.exception.error.ErrorCode;
import com.nubo.schedule.cmd.api.helpers.ScheduleMapperUtil;
import com.nubo.schedule.cmd.api.models.dto.request.JobsConfigRequestDto;
import com.nubo.schedule.cmd.api.models.dto.request.JobsResultRequestDto;
import com.nubo.schedule.cmd.api.models.dto.request.NotificationRequestDto;
import com.nubo.schedule.cmd.api.models.dto.request.RelatedScheduleRequestDto;
import com.nubo.schedule.cmd.api.models.dto.request.ScheduleActionRequestDto;
import com.nubo.schedule.cmd.api.models.dto.request.ScheduleRequestDto;
import com.nubo.schedule.cmd.api.models.dto.request.ScheduleUpdateRequestDto;
import com.nubo.schedule.cmd.api.models.dto.response.ScheduleDto;
import com.nubo.schedule.cmd.api.models.entity.CountryEntity;
import com.nubo.schedule.cmd.api.models.entity.ModuleEntity;
import com.nubo.schedule.cmd.api.models.entity.ProcessEntity;
import com.nubo.schedule.cmd.api.models.entity.RelatedScheduleEntity;
import com.nubo.schedule.cmd.api.models.entity.ScheduleEntity;
import com.nubo.schedule.cmd.api.models.entity.ScreenActionEntity;
import com.nubo.schedule.cmd.api.models.entity.StatusEntity;
import com.nubo.schedule.cmd.api.models.entity.SubmoduleEntity;
import com.nubo.schedule.cmd.api.models.entity.TypeEntity;
import com.nubo.schedule.cmd.api.models.entity.UserNuboEntity;
import com.nubo.schedule.cmd.api.models.enums.CountryCodeEnum;
import com.nubo.schedule.cmd.api.models.enums.ScheduleActionEnum;
import com.nubo.schedule.cmd.api.models.enums.ScheduleStatusEnum;
import com.nubo.schedule.cmd.api.models.enums.ScheduleTypeEnum;
import com.nubo.schedule.cmd.api.models.enums.UserTypeEnum;
import com.nubo.schedule.cmd.api.models.enums.VersionApiEnum;
import com.nubo.schedule.cmd.api.repository.CountryRepository;
import com.nubo.schedule.cmd.api.repository.ModuleRepository;
import com.nubo.schedule.cmd.api.repository.ProcessRepository;
import com.nubo.schedule.cmd.api.repository.RelatedScheduleRepository;
import com.nubo.schedule.cmd.api.repository.ScheduleRepository;
import com.nubo.schedule.cmd.api.repository.ScreenActionRepository;
import com.nubo.schedule.cmd.api.repository.StatusRepository;
import com.nubo.schedule.cmd.api.repository.SubmoduleRepository;
import com.nubo.schedule.cmd.api.repository.TypeRepository;
import com.nubo.schedule.cmd.api.repository.UserNuboRepository;
import com.nubo.schedule.cmd.api.service.ScheduleService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ScheduleServiceImpl implements ScheduleService {
    private final PropertiesConfig propertiesConfig;
    private final ScheduleRepository scheduleRepository;
    private final UserNuboRepository userNuboRepository;
    private final CountryRepository countryRepository;
    private final TypeRepository typeRepository;
    private final ProcessRepository processRepository;
    private final ScreenActionRepository screenActionRepository;
    private final ModuleRepository moduleRepository;
    private final SubmoduleRepository submoduleRepository;
    private final SchedulePermissionClient schedulePermissionClient;
    private final StatusRepository statusRepository;
    private final RelatedScheduleRepository relatedScheduleRepository;
    private final KafkaNuboAdapter kafkaTemplate;

    @Override
    public List<ScheduleDto> getAllByUser(Long userId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return getAllByUserV1(userId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    public List<ScheduleDto> getAllByUserV1(Long userId) {
        UserNuboEntity userNuboEntity = userNuboRepository.findById(userId)
                .orElseThrow(() -> new ServiceException(ErrorCode.USER_NOT_FOUND, HttpStatus.NOT_FOUND));

        if (isExternalUser(userNuboEntity)) {
            return ScheduleMapperUtil.toDtoList(scheduleRepository.findByUserNuboId(userId));
        } else {
            return ScheduleMapperUtil.toDtoList(scheduleRepository.findAll());
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

    @Override
    @Transactional
    public ScheduleDto updateSchedule(ScheduleUpdateRequestDto request) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return updateScheduleV1(request);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private ScheduleDto updateScheduleV1(ScheduleUpdateRequestDto request) {
        ScheduleEntity existingSchedule = scheduleRepository.findById(request.getId())
                .orElseThrow(() -> new ServiceException(ErrorCode.SCHEDULE_NOT_FOUND, HttpStatus.NOT_FOUND));

        UserNuboEntity user = findUserEntity(request.getUserId());
        if (isExternalUser(user)) {
            throw new ServiceException(ErrorCode.FORBIDDEN, HttpStatus.FORBIDDEN);
        }

        validateScheduleUpdateSpecificRules(request, existingSchedule);

        ScheduleActionRequestDto permissionRequest = buildUpdatePermissionRequest(request);
        List<String> errorSink = new ArrayList<>();
        boolean hasPermission = schedulePermissionClient.validateScheduleAction(permissionRequest, errorSink);
        if (!hasPermission) {
            throw new SchedulePermissionException(ErrorCode.SCHEDULE_PERMISSION_DENIED, errorSink);
        }

        applyUpdateFields(existingSchedule, request);

        ScheduleEntity savedSchedule = saveSchedule(existingSchedule);

        List<RelatedScheduleRequestDto> relatedSchedules = request.getRelatedSchedules() != null
                ? request.getRelatedSchedules()
                : Collections.emptyList();
        processRelatedSchedules(savedSchedule, relatedSchedules, true);

        if (savedSchedule.getProcess() != null
                && request.getFrequency() != null && request.getFrequency() > 0) {
            sendKafkaRegistryYaml(savedSchedule, ScheduleActionEnum.UPDATE.getValue());
        }

        return ScheduleMapperUtil.toDto(savedSchedule);
    }

    private void validateScheduleUpdateSpecificRules(ScheduleUpdateRequestDto request, ScheduleEntity existingSchedule) {
        if (!request.getOpeningTime().isBefore(request.getClosingTime())) {
            throw new ServiceException(ErrorCode.INVALID_OPENING_CLOSING_TIMES, HttpStatus.BAD_REQUEST);
        }

        if (scheduleRepository.existsByDescriptionAndIdNot(request.getDescription(), request.getId())) {
            throw new ServiceException(ErrorCode.DUPLICATE_SCHEDULE_DESCRIPTION, HttpStatus.BAD_REQUEST);
        }

        if (request.getFrequency() != null) {
            if (Boolean.FALSE.equals(request.getAutomatic())) {
                throw new ServiceException(ErrorCode.FREQUENCY_NOT_ALLOWED_FOR_MANUAL_SCHEDULE, HttpStatus.BAD_REQUEST);
            }
            if (request.getFrequency() < 1 || request.getFrequency() > 1440) {
                throw new ServiceException(ErrorCode.INVALID_FREQUENCY_RANGE, HttpStatus.BAD_REQUEST);
            }
        }

        if (Boolean.FALSE.equals(request.getOpenEndDate())) {
            if (request.getEndDate() == null) {
                throw new ServiceException(ErrorCode.END_DATE_OR_OPEN_END_DATE_REQUIRED, HttpStatus.BAD_REQUEST);
            }
            if (existingSchedule.getStartDate() != null
                    && !request.getEndDate().isAfter(existingSchedule.getStartDate())) {
                throw new ServiceException(ErrorCode.INVALID_END_DATE, HttpStatus.BAD_REQUEST);
            }
        }

        if (request.getOpeningTime() != null && request.getClosingTime() != null &&
                request.getClosingTimeSecondary() != null &&
                (request.getClosingTimeSecondary().isBefore(request.getOpeningTime())
                        || request.getClosingTimeSecondary().isAfter(request.getClosingTime()))) {
            throw new ServiceException(ErrorCode.INVALID_CLOSING_TIME_SECONDARY, HttpStatus.BAD_REQUEST);
        }

        if (request.getRelatedSchedules() != null && !request.getRelatedSchedules().isEmpty()) {
            validateRelatedSchedulesForUpdate(request);
        }
    }

    private void validateRelatedSchedulesForUpdate(ScheduleUpdateRequestDto request) {
        for (RelatedScheduleRequestDto relatedSchedule : request.getRelatedSchedules()) {
            String relatedCountryCode = relatedSchedule.getCountryCode();
            if (relatedCountryCode == null) {
                throw new ServiceException(ErrorCode.RELATED_SCHEDULE_COUNTRY_REQUIRED, HttpStatus.BAD_REQUEST);
            }

            CountryEntity relatedCountry = findCountryEntity(relatedCountryCode);
            ScheduleEntity relatedScheduleEntity = scheduleRepository.findById(relatedSchedule.getRelatedScheduleId())
                    .orElseThrow(
                            () -> new ServiceException(ErrorCode.RELATED_SCHEDULE_NOT_FOUND, HttpStatus.NOT_FOUND));

            if (!CountryCodeEnum.ALL.getCode().equalsIgnoreCase(relatedCountryCode)
                    && relatedScheduleEntity.getCountry() == null || relatedCountry == null ||
                    !relatedScheduleEntity.getCountry().getId().equals(relatedCountry.getId())) {
                throw new ServiceException(ErrorCode.DIFFERENT_COUNTRY_SCHEDULE_RELATION, HttpStatus.BAD_REQUEST);
            }
        }
    }

    private ScheduleActionRequestDto buildUpdatePermissionRequest(ScheduleUpdateRequestDto request) {
        return ScheduleActionRequestDto.builder()
                .userId(request.getUserId())
                .action(ScheduleActionEnum.UPDATE)
                .scheduleId(request.getId())
                .countryCode(request.getCountriesCodes())
                .build();
    }

    private void applyUpdateFields(ScheduleEntity entity, ScheduleUpdateRequestDto request) {
        entity.setDescription(request.getDescription());
        entity.setOpeningTime(request.getOpeningTime());
        entity.setClosingTime(request.getClosingTime());
        entity.setClosingTimeSecondary(request.getClosingTimeSecondary());
        entity.setStatus(findStatusEntity(request.getStatusId()));
        entity.setInternal(request.getProcessType());
        entity.setType(findTypeEntity(request.getProcessType()));
        entity.setAutomatic(request.getAutomatic());

        Integer frequency = (request.getFrequency() != null && request.getFrequency() > 0)
                ? request.getFrequency()
                : 0;
        entity.setFrequency(frequency);

        entity.setEndDate(Boolean.TRUE.equals(request.getOpenEndDate()) ? null : request.getEndDate());

        entity.setLastModifyUser(PropertiesContext.getClientUser());
        entity.setLastModifyApplication(propertiesConfig.getApiName());
        entity.setLastModifyDate(PropertiesContext.getClientDatetime());
        entity.setLastModifyIp(PropertiesContext.getClientIp());
    }

    @Override
    @Transactional
    public List<ScheduleDto> createOrUpdate(ScheduleRequestDto request) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return createOrUpdatev1(request);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<ScheduleDto> createOrUpdatev1(ScheduleRequestDto request) {
        boolean isUpdate = request.getId() != null && request.getId() > 0;
        ScheduleActionEnum action = isUpdate ? ScheduleActionEnum.UPDATE : ScheduleActionEnum.CREATE;

        if (!isUpdate) {
            validateScheduleCreationRules(request);
        } else {
            validateScheduleUpdateRules(request);
        }

        ScheduleActionRequestDto permissionRequest = buildPermissionRequest(request, action);
        List<String> errorSink = new ArrayList<>();
        boolean hasPermission = schedulePermissionClient.validateScheduleAction(permissionRequest, errorSink);
        if (!hasPermission) {
            throw new SchedulePermissionException(ErrorCode.SCHEDULE_PERMISSION_DENIED, errorSink);
        }

        List<String> specificCountryCodes = request.getCountriesCodes();

        if (CountryCodeEnum.ALL.getCode().equalsIgnoreCase(specificCountryCodes.get(0))) {
            specificCountryCodes = CountryCodeEnum.getSpecificCountriesCodes();
        }

        // Validate duplicate schedules based on processId or screenActionId
        if (!isUpdate && request.getStatusId() != null) {
            for (String countryCode : specificCountryCodes) {
                CountryEntity country = findCountryEntity(countryCode);
                if (country != null) {
                    boolean scheduleExists = false;
                    ErrorCode errorCode = null;

                    if (request.getProcessId() == null) {
                        // If processId is null, validate against screenActionId, statusId, and countryId
                        if (request.getScreenActionId() != null) {
                            scheduleExists = scheduleRepository.existsByScreenActionIdAndStatusIdAndCountryId(
                                    request.getScreenActionId(),
                                    request.getStatusId(),
                                    country.getId()
                            );
                            errorCode = ErrorCode.DUPLICATE_SCHEDULE_BY_SCREEN_ACTION_STATUS_COUNTRY;
                        }
                    } else {
                        // If processId is not null, validate against processId, statusId, and countryId
                        scheduleExists = scheduleRepository.existsByProcessIdAndStatusIdAndCountryId(
                                request.getProcessId(),
                                request.getStatusId(),
                                country.getId()
                        );
                        errorCode = ErrorCode.DUPLICATE_SCHEDULE_BY_PROCESS_STATUS_COUNTRY;
                    }

                    if (scheduleExists) {
                        throw new ServiceException(errorCode, HttpStatus.BAD_REQUEST);
                    }
                }
            }
        }

        return createSchedulesForAllCountries(request, specificCountryCodes, action);
    }

    private ScheduleActionRequestDto buildPermissionRequest(ScheduleRequestDto request, ScheduleActionEnum action) {

        ScheduleActionRequestDto scheduleActionRequestDto = ScheduleActionRequestDto.builder()
                .userId(request.getUserId())
                .moduleId(request.getModuleId())
                .submoduleId(null)
                .processId(request.getProcessId())
                .action(action)
                .scheduleId(request.getId())
                .countryCode(request.getCountriesCodes())
                .build();

        if (action == ScheduleActionEnum.UPDATE) {
            scheduleActionRequestDto.setScheduleRequestDto(request);
        }

        return scheduleActionRequestDto;
    }

    private ScheduleEntity createScheduleEntity(ScheduleRequestDto request, String countryCode) {
        Integer frequency = 0;
        if (request.getFrequency() != null && !Objects.equals(request.getFrequency(), 0)) {
            frequency = request.getFrequency();
        }

        return ScheduleEntity.builder()
                .description(request.getDescription())
                .openingTime(request.getOpeningTime())
                .closingTime(request.getClosingTime())
                .closingTimeSecondary(request.getClosingTimeSecondary())
                .startDate(request.getStartDate())
                .endDate(request.getEndDate())
                .type(findTypeEntity(request.getProcessType()))
                .country(findCountryEntity(countryCode))
                .module(findModuleEntity(request.getModuleId()))
                .submodule(findSubmoduleEntity(request.getSubmoduleId()))
                .frequency(frequency)
                .userNubo(findUserEntity(request.getUserId()))
                .status(findStatusEntity(request.getStatusId()))
                .internal(request.getProcessType())
                .automatic(request.getAutomatic())
                .process(findProcessEntity(request.getProcessId()))
                .screenAction(findScreenActionEntity(request.getScreenActionId()))
                .lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyDate(PropertiesContext.getClientDatetime())
                .lastModifyIp(PropertiesContext.getClientIp())
                .build();
    }

    private void updateScheduleEntity(ScheduleEntity entity, ScheduleRequestDto request) {
        entity.setDescription(request.getDescription());
        entity.setOpeningTime(request.getOpeningTime());
        entity.setClosingTime(request.getClosingTime());
        entity.setClosingTimeSecondary(request.getClosingTimeSecondary());
        entity.setStartDate(request.getStartDate());
        entity.setEndDate(request.getEndDate());

        if (request.getProcessType() != null) {
            entity.setType(findTypeEntity(request.getProcessType()));
            entity.setInternal(request.getProcessType());
        }

        if (request.getStatusId() != null) {
            entity.setStatus(findStatusEntity(request.getStatusId()));
        }
        Integer frequency = 0;
        if (request.getFrequency() != null && !Objects.equals(request.getFrequency(), 0)) {
            frequency = request.getFrequency();
        }
        entity.setFrequency(frequency);

        if (request.getUserId() != null) {
            entity.setUserNubo(findUserEntity(request.getUserId()));
        }

        if (request.getModuleId() != null) {
            entity.setModule(findModuleEntity(request.getModuleId()));
        }

        if (request.getSubmoduleId() != null) {
            entity.setSubmodule(findSubmoduleEntity(request.getSubmoduleId()));
        }

        entity.setAutomatic(request.getAutomatic());

        if (request.getProcessId() != null) {
            entity.setProcess(findProcessEntity(request.getProcessId()));
        }
        if (request.getScreenActionId() != null) {
            entity.setScreenAction(findScreenActionEntity(request.getScreenActionId()));
        }

        entity.setLastModifyUser(PropertiesContext.getClientUser());
        entity.setLastModifyApplication(propertiesConfig.getApiName());
        entity.setLastModifyDate(PropertiesContext.getClientDatetime());
        entity.setLastModifyIp(PropertiesContext.getClientIp());
    }

    private ScheduleEntity saveSchedule(ScheduleEntity scheduleEntity) {
        if (scheduleEntity.getFrequency() != null && scheduleEntity.getFrequency() > 0
                && scheduleEntity.getStartDate() != null && scheduleEntity.getEndDate() != null) {
            calculateExecutionCycles(scheduleEntity);
        }

        return scheduleRepository.save(scheduleEntity);
    }

    private TypeEntity findTypeEntity(Boolean type) {
        Long typeId = type ? ScheduleTypeEnum.INTERNAL.getCode() : ScheduleTypeEnum.EXTERNAL.getCode();

        return typeRepository.findById(typeId)
                .orElseThrow(() -> new ServiceException(ErrorCode.TYPE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private CountryEntity findCountryEntity(String countryCode) {
        if (countryCode == null)
            return null;
        return countryRepository.findByCode(countryCode)
                .orElseThrow(() -> new ServiceException(ErrorCode.COUNTRY_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private ModuleEntity findModuleEntity(Long moduleId) {
        if (moduleId == null)
            return null;
        return moduleRepository.findById(moduleId.intValue())
                .orElseThrow(() -> new ServiceException(ErrorCode.MODULE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private SubmoduleEntity findSubmoduleEntity(Long submoduleId) {
        if (submoduleId == null)
            return null;
        return submoduleRepository.findById(submoduleId.intValue())
                .orElseThrow(() -> new ServiceException(ErrorCode.SUBMODULE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private UserNuboEntity findUserEntity(Long userId) {
        if (userId == null)
            return null;
        return userNuboRepository.findById(userId)
                .orElseThrow(() -> new ServiceException(ErrorCode.USER_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private StatusEntity findStatusEntity(Long statusId) {
        if (statusId == null)
            return null;
        return statusRepository.findById(statusId)
                .orElseThrow(() -> new ServiceException(ErrorCode.STATUS_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private ProcessEntity findProcessEntity(Long processId) {
        if (processId == null)
            return null;
        return processRepository.findById(processId)
                .orElseThrow(() -> new ServiceException(ErrorCode.PROCESS_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private ScreenActionEntity findScreenActionEntity(Long screenActionId) {
        if (screenActionId == null)
            return null;
        return screenActionRepository.findById(screenActionId)
                .orElseThrow(() -> new ServiceException(ErrorCode.SCREEN_ACTION_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private ZoneId findUserTimeZone(UserNuboEntity user) {
        String timeZone = user.getCountry().getTimeZone();
        ZoneId userZoneId;

        if (timeZone != null && !timeZone.isEmpty()) {
            String zoneOffsetStr = timeZone.replace("UTC", "").trim();
            if (zoneOffsetStr.contains("a")) {
                zoneOffsetStr = zoneOffsetStr.split("a")[0].trim();
            }
            if (!zoneOffsetStr.isEmpty()) {
                userZoneId = java.time.ZoneId.of("UTC" + zoneOffsetStr);
            } else {
                userZoneId = java.time.ZoneId.of("UTC");
            }
        } else {
            userZoneId = java.time.ZoneId.systemDefault();
        }
        return userZoneId;

    }

    private void validateScheduleCreationRules(ScheduleRequestDto request) {
        UserNuboEntity user = findUserEntity(request.getUserId());
        if (isExternalUser(user)) {
            throw new ServiceException(ErrorCode.FORBIDDEN, HttpStatus.FORBIDDEN);
        }

        ZoneId userZoneId = findUserTimeZone(user);
        LocalDate today = java.time.ZonedDateTime.now(userZoneId).toLocalDate();

        if (request.getStartDate() != null && request.getStartDate().isBefore(today)) {
            throw new ServiceException(ErrorCode.INVALID_START_DATE, HttpStatus.BAD_REQUEST);
        }

        if (Boolean.FALSE.equals(request.getOpenEndDate())) {
            if (request.getEndDate() != null && request.getStartDate() != null &&
                    request.getEndDate().isBefore(request.getStartDate())) {
                throw new ServiceException(ErrorCode.INVALID_END_DATE, HttpStatus.BAD_REQUEST);
            }
        }

        if (request.getClosingTimeSecondary() != null && (request.getClosingTimeSecondary().isBefore(request.getOpeningTime())
                || request.getClosingTimeSecondary().isAfter(request.getClosingTime()))) {
            throw new ServiceException(ErrorCode.INVALID_CLOSING_TIME_SECONDARY, HttpStatus.BAD_REQUEST);
        }

        if (request.getRelatedSchedules() != null && !request.getRelatedSchedules().isEmpty()) {
            List<String> countriesCodes = request.getCountriesCodes();
            List<String> specificCountriesCodes = countriesCodes;
            if (countriesCodes != null && !countriesCodes.isEmpty()
                    && CountryCodeEnum.ALL.getCode().equalsIgnoreCase(countriesCodes.get(0))) {
                specificCountriesCodes = CountryCodeEnum.getSpecificCountriesCodes();
            }

            for (String countryCode : specificCountriesCodes) {
                long count = request.getRelatedSchedules().stream()
                        .filter(rs -> countryCode.equalsIgnoreCase(rs.getCountryCode()))
                        .count();
                if (count > propertiesConfig.getMaxRelatedSchedules()) {
                    throw new ServiceException(ErrorCode.TOO_MANY_RELATED_SCHEDULES, HttpStatus.BAD_REQUEST);
                }
            }
        }

        if (request.getRelatedSchedules() != null && !request.getRelatedSchedules().isEmpty()) {
            validateRelatedSchedules(request);
        }

    }

    private void validateRelatedSchedules(ScheduleRequestDto request) {
        for (RelatedScheduleRequestDto relatedSchedule : request.getRelatedSchedules()) {
            String relatedCountryCode = relatedSchedule.getCountryCode();
            if (relatedCountryCode == null) {
                throw new ServiceException(ErrorCode.RELATED_SCHEDULE_COUNTRY_REQUIRED, HttpStatus.BAD_REQUEST);
            }

            CountryEntity relatedCountry = findCountryEntity(relatedCountryCode);
            ScheduleEntity relatedScheduleEntity = scheduleRepository.findById(relatedSchedule.getRelatedScheduleId())
                    .orElseThrow(
                            () -> new ServiceException(ErrorCode.RELATED_SCHEDULE_NOT_FOUND, HttpStatus.NOT_FOUND));

            if (!CountryCodeEnum.ALL.getCode().equalsIgnoreCase(relatedCountryCode)
                    && relatedScheduleEntity.getCountry() == null || relatedCountry == null ||
                    !relatedScheduleEntity.getCountry().getId().equals(relatedCountry.getId())) {
                throw new ServiceException(ErrorCode.DIFFERENT_COUNTRY_SCHEDULE_RELATION, HttpStatus.BAD_REQUEST);
            }
        }

    }

    private void validateScheduleUpdateRules(ScheduleRequestDto request) {
        if (request.getId() == null || request.getId() <= 0) {
            throw new ServiceException(ErrorCode.SCHEDULE_NOT_FOUND, HttpStatus.NOT_FOUND);
        }

        if (request.getOpeningTime() != null && request.getClosingTime() != null &&
                !request.getOpeningTime().isBefore(request.getClosingTime())) {
            throw new ServiceException(ErrorCode.INVALID_OPENING_CLOSING_TIMES, HttpStatus.BAD_REQUEST);
        }

        if (Boolean.FALSE.equals(request.getOpenEndDate())) {
            if (request.getEndDate() != null && request.getStartDate() != null &&
                    request.getEndDate().isBefore(request.getStartDate())) {
                throw new ServiceException(ErrorCode.INVALID_END_DATE, HttpStatus.BAD_REQUEST);
            }
        }

        if (request.getOpeningTime() != null && request.getClosingTime() != null &&
                request.getClosingTimeSecondary() != null &&
                (request.getClosingTimeSecondary().isBefore(request.getOpeningTime())
                        || request.getClosingTimeSecondary().isAfter(request.getClosingTime()))) {
            throw new ServiceException(ErrorCode.INVALID_CLOSING_TIME_SECONDARY, HttpStatus.BAD_REQUEST);
        }

        if (request.getRelatedSchedules() != null && !request.getRelatedSchedules().isEmpty()) {
            validateRelatedSchedules(request);
            validateRelatedSchedulesTiming(request);
        }
    }

    private void validateRelatedSchedulesTiming(ScheduleRequestDto request) {
        if (request.getOpeningTime() == null) {
            return;
        }

        for (RelatedScheduleRequestDto relatedSchedule : request.getRelatedSchedules()) {
            ScheduleEntity relatedScheduleEntity = scheduleRepository.findById(relatedSchedule.getRelatedScheduleId())
                    .orElseThrow(
                            () -> new ServiceException(ErrorCode.RELATED_SCHEDULE_NOT_FOUND, HttpStatus.NOT_FOUND));

            if (relatedScheduleEntity.getClosingTime() != null &&
                    !relatedScheduleEntity.getClosingTime().isAfter(request.getOpeningTime())) {
                throw new ServiceException(ErrorCode.INVALID_RELATED_SCHEDULE_TIMING, HttpStatus.BAD_REQUEST);
            }
        }
    }

    private List<ScheduleDto> createSchedulesForAllCountries(ScheduleRequestDto request,
                                                             List<String> specificCountryCodes,
                                                             ScheduleActionEnum action) {
        String operation = action.getValue();
        boolean isUpdate = operation.equalsIgnoreCase(ScheduleActionEnum.UPDATE.getValue());

        List<ScheduleEntity> processedSchedules = new ArrayList<>();
        List<String> processedCountries = new ArrayList<>();

        for (String countryCode : specificCountryCodes) {
            try {
                ScheduleEntity scheduleEntity;
                if (isUpdate) {
                    scheduleEntity = scheduleRepository.findById(request.getId())
                            .orElseThrow(
                                    () -> new ServiceException(ErrorCode.SCHEDULE_NOT_FOUND, HttpStatus.NOT_FOUND));
                    updateScheduleEntity(scheduleEntity, request);
                } else {
                    scheduleEntity = createScheduleEntity(request, countryCode);
                }

                ScheduleEntity savedSchedule = saveSchedule(scheduleEntity);

                processedSchedules.add(savedSchedule);
                processedCountries.add(countryCode);

                List<RelatedScheduleRequestDto> relatedSchedulesForCountry = Collections.emptyList();

                if (request.getRelatedSchedules() != null) {
                    relatedSchedulesForCountry = request.getRelatedSchedules().stream()
                            .filter(rs -> countryCode.equalsIgnoreCase(rs.getCountryCode()))
                            .collect(Collectors.toList());
                }

                processRelatedSchedules(savedSchedule, relatedSchedulesForCountry, isUpdate);

                if (savedSchedule.getProcess() != null
                        && request.getFrequency() != null && request.getFrequency() > 0) {
                    sendKafkaRegistryYaml(savedSchedule, operation);
                }
            } catch (Exception e) {
                throw new ServiceException(ErrorCode.SCHEDULE_CREATION_ERROR, HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return ScheduleMapperUtil.toDtoList(processedSchedules);

    }

    private void processRelatedSchedules(ScheduleEntity savedSchedule,
                                         List<RelatedScheduleRequestDto> relatedSchedulesDto, boolean isUpdate) {
        if (isUpdate) {
            List<RelatedScheduleEntity> existingRelations = relatedScheduleRepository
                    .findByScheduleId(savedSchedule.getId());
            if (!existingRelations.isEmpty()) {
                relatedScheduleRepository.deleteAll(existingRelations);
            }
        }

        List<RelatedScheduleEntity> newRelations = new ArrayList<>();
        for (RelatedScheduleRequestDto relatedDto : relatedSchedulesDto) {
            RelatedScheduleEntity relationEntity = createRelatedScheduleEntity(savedSchedule, relatedDto);
            newRelations.add(relationEntity);
        }

        if (!newRelations.isEmpty()) {
            relatedScheduleRepository.saveAll(newRelations);
        }
    }

    private RelatedScheduleEntity createRelatedScheduleEntity(ScheduleEntity schedule,
                                                              RelatedScheduleRequestDto relatedDto) {
        return RelatedScheduleEntity.builder()
                .scheduleId(schedule.getId())
                .relatedScheduleId(relatedDto.getRelatedScheduleId())
                .lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyDate(PropertiesContext.getClientDatetime())
                .lastModifyIp(PropertiesContext.getClientIp())
                .build();
    }

    private int calculateExecutionCycles(ScheduleEntity scheduleEntity) {
        if (scheduleEntity.getFrequency() == null || scheduleEntity.getStartDate() == null) {
            return -1;
        }

        if (scheduleEntity.getFrequency() == 0) {
            return 0;
        }

        LocalDate startDate = scheduleEntity.getStartDate();
        LocalDate endDate = scheduleEntity.getEndDate() != null ? scheduleEntity.getEndDate() : startDate;

        if (endDate.isBefore(startDate)) {
            return -1;
        }

        LocalTime openingTime = scheduleEntity.getOpeningTime();
        LocalTime closingTime = scheduleEntity.getClosingTime();

        int frequencyMinutes = scheduleEntity.getFrequency();

        List<java.time.LocalDateTime> executionCycles = new ArrayList<>();

        LocalDate currentDate = startDate;
        while (!currentDate.isAfter(endDate)) {
            LocalTime startHour = openingTime != null ? openingTime : LocalTime.MIN;
            LocalTime endHour = closingTime != null ? closingTime : LocalTime.MAX;

            java.time.LocalDateTime current = java.time.LocalDateTime.of(currentDate, startHour);
            java.time.LocalDateTime end = java.time.LocalDateTime.of(currentDate, endHour);

            while (!current.isAfter(end)) {
                executionCycles.add(current);
                current = current.plusMinutes(frequencyMinutes);
            }

            currentDate = currentDate.plusDays(1);
            if (scheduleEntity.getEndDate() == null) {
                break;
            }
        }

        return executionCycles.size();
    }

    @Override
    @Transactional
    public void processScheduleEvent(JobsResultRequestDto message) {
        try {
            Long scheduleId = message.getScheduleId();
            Boolean success = message.getSuccess();

            if (scheduleId == null || success == null) {
                throw new ServiceException(ErrorCode.SCHEDULE_NOT_FOUND, HttpStatus.NOT_FOUND);
            }

            ScheduleEntity schedule = scheduleRepository.findById(scheduleId)
                    .orElseThrow(() -> new ServiceException(ErrorCode.SCHEDULE_NOT_FOUND, HttpStatus.NOT_FOUND));

            Long statusCode = success ? ScheduleStatusEnum.ACTIVE.getCode() : ScheduleStatusEnum.INACTIVE.getCode();
            StatusEntity statusEntity = findStatusEntity(statusCode);

            schedule.setStatus(statusEntity);
            schedule.setLastModifyApplication(propertiesConfig.getApiName());

            schedule.setLastModifyDate(java.time.LocalDateTime.now());
            schedule.setLastModifyIp("IP_01");

            scheduleRepository.save(schedule);

            ObjectMapper mapper = new ObjectMapper();
            ObjectNode statusNode = mapper.createObjectNode();
            statusNode.put("id", statusEntity.getId());
            statusNode.put("description", statusEntity.getDescription());
            statusNode.put("category", statusEntity.getCategory());

            ObjectNode notiMessage = mapper.createObjectNode();
            notiMessage.set("statusEntity", statusNode);

            sendKafkaNotification(schedule.getUserNubo().getId(), notiMessage);

        } catch (Exception e) {
            throw new ServiceException(ErrorCode.SCHEDULE_EVENT_PROCESSING_ERROR, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Transactional
    private void sendKafkaRegistryYaml(ScheduleEntity schedule, String operation) {
        try {
            ProcessEntity process = schedule.getProcess();
            if (process == null) {
                return;
            }

            if (schedule.getStatus().getId().equals(ScheduleStatusEnum.ACTIVE.getCode())) {
                StatusEntity statusEntity = findStatusEntity(ScheduleStatusEnum.ACTIVE.getCode());
                schedule.setStatus(statusEntity);
                scheduleRepository.save(schedule);
            }

            ObjectMapper mapper = new ObjectMapper();
            mapper.registerModule(new JavaTimeModule());
            String scheduleJobKafkaTopic = propertiesConfig.getKafkaNuboProducerTopicScheduleJobRequest();

            JobsConfigRequestDto jobConfigRequest = JobsConfigRequestDto.builder()
                    .userId(schedule.getUserNubo() != null ? schedule.getUserNubo().getId() : null)
                    .moduleId(schedule.getModule() != null ? schedule.getModule().getId().longValue() : null)
                    .submoduleId(schedule.getSubmodule() != null ? schedule.getSubmodule().getId().longValue() : null)
                    .microserviceId(process.getMicroservice() != null
                            ? process.getMicroservice().getId().longValue() : null)
                    .processId(process.getId().longValue())
                    .scheduleAction(ScheduleActionEnum.fromValue(operation))
                    .scheduleId(schedule.getId())
                    .build();

            ObjectNode registryYamlPayload = mapper.valueToTree(jobConfigRequest);
            kafkaTemplate.sendMessage(scheduleJobKafkaTopic, registryYamlPayload.toString());
        } catch (Exception ex) {
            throw new ServiceException(ErrorCode.SCHEDULE_EVENT_PROCESSING_ERROR, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    private void sendKafkaNotification(Long userId, JsonNode metadataNode) {
        try {
            Long notificationId = Long.parseLong(propertiesConfig.getKafkaNuboNotificationId());
            NotificationRequestDto notificationRequest = NotificationRequestDto.builder()
                    .notificacionId(notificationId)
                    .eventType(propertiesConfig.getKafkaNuboNotificationEventType())
                    .modulo(propertiesConfig.getKafkaNuboNotificationModule())
                    .usuariosIds(List.of(userId))
                    .metadata(metadataNode)
                    .timestamp(
                            java.time.OffsetDateTime.now(java.time.ZoneOffset.UTC)
                                    .withNano(0)
                                    .toString())
                    .build();

            String kafkaTopic = propertiesConfig.getKafkaNuboNotificationTopic();
            ObjectMapper mapper = new ObjectMapper();
            mapper.registerModule(new JavaTimeModule());

            ObjectNode notificationPayload = mapper.valueToTree(notificationRequest);
            kafkaTemplate.sendMessage(kafkaTopic, notificationPayload.toString());
        } catch (Exception ex) {
            throw new ServiceException(ErrorCode.SCHEDULE_EVENT_PROCESSING_ERROR, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

```

## src/main/java/com/nubo/schedule/cmd/api/service/impl/ScheduleStatusHistoryServiceImpl.java

```java
package com.nubo.schedule.cmd.api.service.impl;

import java.util.List;
import java.util.Objects;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nubo.schedule.cmd.api.application.properties.PropertiesContext;
import com.nubo.schedule.cmd.api.exception.ServiceException;
import com.nubo.schedule.cmd.api.exception.error.ErrorCode;
import com.nubo.schedule.cmd.api.helpers.ScheduleStatusHistoryMapperUtil;
import com.nubo.schedule.cmd.api.models.dto.response.ScheduleStatusHistoryDto;
import com.nubo.schedule.cmd.api.models.entity.UserNuboEntity;
import com.nubo.schedule.cmd.api.models.enums.UserTypeEnum;
import com.nubo.schedule.cmd.api.models.enums.VersionApiEnum;
import com.nubo.schedule.cmd.api.repository.ScheduleStatusHistoryRepository;
import com.nubo.schedule.cmd.api.repository.UserNuboRepository;
import com.nubo.schedule.cmd.api.service.ScheduleStatusHistoryService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ScheduleStatusHistoryServiceImpl implements ScheduleStatusHistoryService
{

    private final ScheduleStatusHistoryRepository scheduleStatusHistoryRepository;
    private final UserNuboRepository userNuboRepository;

    @Override
    public List<ScheduleStatusHistoryDto> getAllByUser(Long userId)
    {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1)
        {
            return getAllByUserV1(userId);
        }
        else
        {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    public List<ScheduleStatusHistoryDto> getAllByUserV1(Long userId)
    {
        log.debug("Start method getAllByUserV1 for userId: {}", userId);

        UserNuboEntity userNuboEntity = userNuboRepository.findById(userId)
                .orElseThrow(() -> new ServiceException(ErrorCode.USER_NOT_FOUND, HttpStatus.NOT_FOUND));

        if (userNuboEntity.getUserType() == UserTypeEnum.EXTERNAL)
        {
            log.debug("External user detected, filtering schedule status history by user schedules for userNuboId: {}",
                    userId);
            return ScheduleStatusHistoryMapperUtil
                    .toDtoList(scheduleStatusHistoryRepository.findByScheduleUserNuboId(userId));
        }
        else
        {
            log.debug("Internal user detected, returning all schedule status history");
            return ScheduleStatusHistoryMapperUtil.toDtoList(scheduleStatusHistoryRepository.findAll());
        }
    }
}

```

## src/main/java/com/nubo/schedule/cmd/api/web/controller/ScheduleRestController.java

```java
package com.nubo.schedule.cmd.api.web.controller;

import com.nubo.schedule.cmd.api.application.annotations.RateLimited;
import com.nubo.schedule.cmd.api.models.dto.request.ScheduleRequestDto;
import com.nubo.schedule.cmd.api.models.dto.request.ScheduleUpdateRequestDto;
import com.nubo.schedule.cmd.api.models.dto.response.ScheduleDto;
import com.nubo.schedule.cmd.api.service.ScheduleService;
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
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Tag(name = "Schedule Operation")
@RestController
@RequestMapping("/{version}/schedule-operation")
@RequiredArgsConstructor
@RateLimited
public class ScheduleRestController {

    private final ScheduleService scheduleService;

    @Operation(summary = "Get schedule list by user", description = "Returns the list of schedules available for the specified user with user type validation")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully retrieved schedules", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = ScheduleDto[].class)))
    })
    @GetMapping("/schedules/{userId}")
    public ResponseEntity<List<ScheduleDto>> getSchedulesByUser(@PathVariable Long userId) {
        return ResponseEntity.ok(scheduleService.getAllByUser(userId));
    }

    @Operation(summary = "Create or update schedule", description = "Creates a new schedule or updates an existing one. "
            +
            "The operation is determined by the presence of the ID field. " +
            "Validates permissions through external service before performing the operation.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Schedule updated successfully", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = ScheduleDto.class))),
            @ApiResponse(responseCode = "201", description = "Schedule created successfully", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = ScheduleDto.class))),
            @ApiResponse(responseCode = "403", description = "Permission denied for schedule action"),
            @ApiResponse(responseCode = "404", description = "Related entity not found (user, country, process, etc.)")
    })
    @PostMapping("/schedules")
    public ResponseEntity<List<ScheduleDto>> createOrUpdateSchedule(
            @Valid @RequestBody ScheduleRequestDto request) {
        List<ScheduleDto> result = scheduleService.createOrUpdate(request);
        HttpStatus status = request.getId() == null ? HttpStatus.CREATED : HttpStatus.OK;
        return ResponseEntity.status(status).body(result);
    }

    @Operation(summary = "Update schedule", description = "Updates only the allowed fields of an existing schedule: "
            + "description, opening time, closing time, status, visibility, frequency, end date and related schedules. "
            + "Only authorized internal users can perform this operation.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Schedule updated successfully", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = ScheduleDto.class))),
            @ApiResponse(responseCode = "400", description = "Invalid field value (duplicate description, frequency out of range, invalid dates)"),
            @ApiResponse(responseCode = "403", description = "Permission denied or external user"),
            @ApiResponse(responseCode = "404", description = "Schedule not found")
    })
    @PutMapping("/schedules/{id}")
    public ResponseEntity<ScheduleDto> updateSchedule(
            @PathVariable Long id,
            @Valid @RequestBody ScheduleUpdateRequestDto request) {
        request.setId(id);
        return ResponseEntity.ok(scheduleService.updateSchedule(request));
    }
}

```

## src/main/java/com/nubo/schedule/cmd/api/web/controller/ScheduleStatusHistoryRestController.java

```java
package com.nubo.schedule.cmd.api.web.controller;

import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nubo.schedule.cmd.api.application.annotations.RateLimited;
import com.nubo.schedule.cmd.api.models.dto.response.ScheduleStatusHistoryDto;
import com.nubo.schedule.cmd.api.service.ScheduleStatusHistoryService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@Tag(name = "Schedule Status History Operation")
@RestController
@RequestMapping("/{version}/schedule-status-history-operation")
@RequiredArgsConstructor
@RateLimited
public class ScheduleStatusHistoryRestController
{

    private final ScheduleStatusHistoryService scheduleStatusHistoryService;

    @Operation(summary = "Get schedule status history list by user", description = "Returns the list of schedule status history available for the specified user with user type validation")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully retrieved schedule status history", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = ScheduleStatusHistoryDto[].class)))
    })
    @GetMapping("/history/{userId}")
    public ResponseEntity<List<ScheduleStatusHistoryDto>> getScheduleStatusHistoryByUser(
            @PathVariable Long userId)
    {

        return ResponseEntity.ok(scheduleStatusHistoryService.getAllByUser(userId));
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
    schedule:
        max-related-schedules: ${MAX_RELATED_SCHEDULES}
        permission:
            endpoint: ${SCHEDULE_PERMISSION_ENDPOINT}
            api:
                url: ${SCHEDULE_PERMISSION_API_URL}
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
            config:
              ${KAFKA_NUBO_SASL_JAAS_CONFIG:org.apache.kafka.common.security.scram.ScramLoginModule
              required username=${KAFKA_NUBO_SASL_USER:your_kafka_user}
              password=${KAFKA_NUBO_SASL_PASSWORD:your_kafka_password};}
        consumer:
          kafka-schedule-job-response-topic: ${KAFKA_NUBO_SCHEDULE_JOB_RESPONSE_TOPIC}
          group-id: ${KAFKA_NUBO_GROUP_ID}
        producer:
          kafka-schedule-job-request-topic: ${KAFKA_NUBO_SCHEDULE_JOB_REQUEST_TOPIC}
          group-id: ${KAFKA_NUBO_GROUP_ID}
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
    show-sql: "false"
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
    schedule:
      max-related-schedules: ${MAX_RELATED_SCHEDULES:10}
      permission:
        endpoint: ${SCHEDULE_PERMISSION_ENDPOINT}
        api:
          url: ${SCHEDULE_PERMISSION_API_URL}
    kafka:
      nubo:
        retries: ${KAFKA_NUBO_RETRIES:5}
        bootstrap-servers: ${KAFKA_NUBO_BOOTSTRAP_SERVER}
        auto-offset-reset: ${KAFKA_NUBO_AUTO_OFFSET_RESET:latest}
        security:
          protocol: ${KAFKA_NUBO_SECURITY_PROTOCOL:SASL_PLAINTEXT}
        sasl:
          mechanism: ${KAFKA_NUBO_SASL_MECHANISM:SCRAM-SHA-256}
          jaas:
            config:
              ${KAFKA_NUBO_SASL_JAAS_CONFIG:org.apache.kafka.common.security.scram.ScramLoginModule
              required username=${KAFKA_NUBO_SASL_USER:your_kafka_user}
              password=${KAFKA_NUBO_SASL_PASSWORD:your_kafka_password};}
        consumer:
          kafka-schedule-job-response-topic: ${KAFKA_NUBO_SCHEDULE_JOB_RESPONSE_TOPIC}
          group-id: ${KAFKA_NUBO_GROUP_ID}
        producer:
          kafka-schedule-job-request-topic: ${KAFKA_NUBO_SCHEDULE_JOB_REQUEST_TOPIC}
          group-id: ${KAFKA_NUBO_GROUP_ID}
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
    schedule:
        max-related-schedules: ${MAX_RELATED_SCHEDULES}
        permission:
            endpoint: ${SCHEDULE_PERMISSION_ENDPOINT}
            api:
                url: ${SCHEDULE_PERMISSION_API_URL}
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
            config:
              ${KAFKA_NUBO_SASL_JAAS_CONFIG:org.apache.kafka.common.security.scram.ScramLoginModule
              required username=${KAFKA_NUBO_SASL_USER:your_kafka_user}
              password=${KAFKA_NUBO_SASL_PASSWORD:your_kafka_password};}
        consumer:
          kafka-schedule-job-response-topic: ${KAFKA_NUBO_SCHEDULE_JOB_RESPONSE_TOPIC}
          group-id: ${KAFKA_NUBO_GROUP_ID}
        producer:
          kafka-schedule-job-request-topic: ${KAFKA_NUBO_SCHEDULE_JOB_REQUEST_TOPIC}
          group-id: ${KAFKA_NUBO_GROUP_ID}
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
    schedule:
        max-related-schedules: ${MAX_RELATED_SCHEDULES}
        permission:
            endpoint: ${SCHEDULE_PERMISSION_ENDPOINT}
            api:
                url: ${SCHEDULE_PERMISSION_API_URL}
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
            config:
              ${KAFKA_NUBO_SASL_JAAS_CONFIG:org.apache.kafka.common.security.scram.ScramLoginModule
              required username=${KAFKA_NUBO_SASL_USER:your_kafka_user}
              password=${KAFKA_NUBO_SASL_PASSWORD:your_kafka_password};}
        consumer:
          kafka-schedule-job-response-topic: ${KAFKA_NUBO_SCHEDULE_JOB_RESPONSE_TOPIC}
          group-id: ${KAFKA_NUBO_GROUP_ID}
        producer:
          kafka-schedule-job-request-topic: ${KAFKA_NUBO_SCHEDULE_JOB_REQUEST_TOPIC}
          group-id: ${KAFKA_NUBO_GROUP_ID}
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
    schedule:
        max-related-schedules: ${MAX_RELATED_SCHEDULES}
        permission:
            endpoint: ${SCHEDULE_PERMISSION_ENDPOINT}
            api:
                url: ${SCHEDULE_PERMISSION_API_URL}
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
            config:
              ${KAFKA_NUBO_SASL_JAAS_CONFIG:org.apache.kafka.common.security.scram.ScramLoginModule
              required username=${KAFKA_NUBO_SASL_USER:your_kafka_user}
              password=${KAFKA_NUBO_SASL_PASSWORD:your_kafka_password};}
        consumer:
          kafka-schedule-job-response-topic: ${KAFKA_NUBO_SCHEDULE_JOB_RESPONSE_TOPIC}
          group-id: ${KAFKA_NUBO_GROUP_ID}
        producer:
          kafka-schedule-job-request-topic: ${KAFKA_NUBO_SCHEDULE_JOB_REQUEST_TOPIC}
          group-id: ${KAFKA_NUBO_GROUP_ID}
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
config:
    schedule:
        max-related-schedules: ${MAX_RELATED_SCHEDULES:5}
        permission:
            api:
            url: ${SCHEDULE_PERMISSION_API_URL:http://localhost:8081/api}
            endpoint: ${SCHEDULE_PERMISSION_ENDPOINT:/schedule-permissions/validate}

```

## src/main/resources/banner.txt

```

 ,---.   ,-----.,--.  ,--.,------.,------.  ,--. ,--.,--.   ,------. ,-----.,--.   ,--.,------.    ,---.  ,------. ,--.
'   .-' '  .--./|  '--'  ||  .---'|  .-.  \ |  | |  ||  |   |  .---''  .--./|   `.'   ||  .-.  \  /  O  \ |  .--. '|  |
`.  `-. |  |    |  .--.  ||  `--, |  |  \  :|  | |  ||  |   |  `--, |  |    |  |'.'|  ||  |  \  :|  .-.  ||  '--' ||  |
.-'    |'  '--'\|  |  |  ||  `---.|  '--'  /'  '-'  '|  '--.|  `---.'  '--'\|  |   |  ||  '--'  /|  | |  ||  | --' |  |
`-----'  `-----'`--'  `--'`------'`-------'  `-----' `-----'`------' `-----'`--'   `--'`-------' `--' `--'`--'     `--'
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
