# nbo-png-cmd-validacion-cierre-back

Código Java de producción y configuraciones, sin tests. Cada sección contiene el archivo original completo y su ruta. Captura: 28/10/2026.

## Índice

1. `.mvn/wrapper/maven-wrapper.properties`
2. `mvnw`
3. `mvnw.cmd`
4. `pom.xml`
5. `src/main/java/com/nubo/master/closure/process/rate/api/ClosureProcessApiApplication.java`
6. `src/main/java/com/nubo/master/closure/process/rate/api/application/config/SwaggerConfig.java`
7. `src/main/java/com/nubo/master/closure/process/rate/api/application/config/WebConfig.java`
8. `src/main/java/com/nubo/master/closure/process/rate/api/application/context/GlobalContext.java`
9. `src/main/java/com/nubo/master/closure/process/rate/api/application/database/NamingStrategyConfig.java`
10. `src/main/java/com/nubo/master/closure/process/rate/api/application/database/UpperNamingConfig.java`
11. `src/main/java/com/nubo/master/closure/process/rate/api/application/filters/GlobalFilter.java`
12. `src/main/java/com/nubo/master/closure/process/rate/api/application/interceptors/GlobalInterceptor.java`
13. `src/main/java/com/nubo/master/closure/process/rate/api/application/properties/PropertiesConfig.java`
14. `src/main/java/com/nubo/master/closure/process/rate/api/application/properties/PropertiesContext.java`
15. `src/main/java/com/nubo/master/closure/process/rate/api/application/util/ApplicationUtils.java`
16. `src/main/java/com/nubo/master/closure/process/rate/api/application/util/RestClientUtils.java`
17. `src/main/java/com/nubo/master/closure/process/rate/api/client/business/day/calculation/models/dto/response/BusinessDayOutDto.java`
18. `src/main/java/com/nubo/master/closure/process/rate/api/client/business/day/calculation/service/BusinessDayCalculationClient.java`
19. `src/main/java/com/nubo/master/closure/process/rate/api/client/business/day/calculation/service/impl/BusinessDayCalculationClientImpl.java`
20. `src/main/java/com/nubo/master/closure/process/rate/api/exception/ClientException.java`
21. `src/main/java/com/nubo/master/closure/process/rate/api/exception/ServiceException.java`
22. `src/main/java/com/nubo/master/closure/process/rate/api/exception/error/ErrorCode.java`
23. `src/main/java/com/nubo/master/closure/process/rate/api/exception/error/ErrorResponse.java`
24. `src/main/java/com/nubo/master/closure/process/rate/api/exception/error/ErrorValidation.java`
25. `src/main/java/com/nubo/master/closure/process/rate/api/exception/handler/GlobalExceptionHandler.java`
26. `src/main/java/com/nubo/master/closure/process/rate/api/helpers/MapperPageUtil.java`
27. `src/main/java/com/nubo/master/closure/process/rate/api/helpers/MapperUtil.java`
28. `src/main/java/com/nubo/master/closure/process/rate/api/helpers/ScheduleExtensionCloseValidator.java`
29. `src/main/java/com/nubo/master/closure/process/rate/api/helpers/specification/ClosureProcessSpecification.java`
30. `src/main/java/com/nubo/master/closure/process/rate/api/helpers/specification/CountrySpecification.java`
31. `src/main/java/com/nubo/master/closure/process/rate/api/models/dto/request/CloseScheduleExtensionRequestDto.java`
32. `src/main/java/com/nubo/master/closure/process/rate/api/models/dto/response/CloseScheduleExtensionResponseDto.java`
33. `src/main/java/com/nubo/master/closure/process/rate/api/models/dto/response/ClosureProcessOutDto.java`
34. `src/main/java/com/nubo/master/closure/process/rate/api/models/dto/response/CountryDto.java`
35. `src/main/java/com/nubo/master/closure/process/rate/api/models/dto/response/CountryOutDto.java`
36. `src/main/java/com/nubo/master/closure/process/rate/api/models/dto/response/CurrencyOutDto.java`
37. `src/main/java/com/nubo/master/closure/process/rate/api/models/dto/response/HolidayOutDto.java`
38. `src/main/java/com/nubo/master/closure/process/rate/api/models/dto/response/ModuleOutDto.java`
39. `src/main/java/com/nubo/master/closure/process/rate/api/models/dto/response/PageResponseOutDto.java`
40. `src/main/java/com/nubo/master/closure/process/rate/api/models/dto/response/PreClosureCountryOutDto.java`
41. `src/main/java/com/nubo/master/closure/process/rate/api/models/dto/response/ScheduleExtensionClosedDto.java`
42. `src/main/java/com/nubo/master/closure/process/rate/api/models/dto/response/ScheduleExtensionErrorDto.java`
43. `src/main/java/com/nubo/master/closure/process/rate/api/models/dto/response/StatusOutDto.java`
44. `src/main/java/com/nubo/master/closure/process/rate/api/models/dto/response/SystemClosureOutDto.java`
45. `src/main/java/com/nubo/master/closure/process/rate/api/models/dto/response/SystemClosureResponseDto.java`
46. `src/main/java/com/nubo/master/closure/process/rate/api/models/entity/ClassEntity.java`
47. `src/main/java/com/nubo/master/closure/process/rate/api/models/entity/ClosureProcessEntity.java`
48. `src/main/java/com/nubo/master/closure/process/rate/api/models/entity/CountryEntity.java`
49. `src/main/java/com/nubo/master/closure/process/rate/api/models/entity/CurrencyEntity.java`
50. `src/main/java/com/nubo/master/closure/process/rate/api/models/entity/DepartmentEntity.java`
51. `src/main/java/com/nubo/master/closure/process/rate/api/models/entity/HolidayEntity.java`
52. `src/main/java/com/nubo/master/closure/process/rate/api/models/entity/IdentificationTypeEntity.java`
53. `src/main/java/com/nubo/master/closure/process/rate/api/models/entity/ModuleEntity.java`
54. `src/main/java/com/nubo/master/closure/process/rate/api/models/entity/ParticipantEntity.java`
55. `src/main/java/com/nubo/master/closure/process/rate/api/models/entity/PreClosureCountryEntity.java`
56. `src/main/java/com/nubo/master/closure/process/rate/api/models/entity/ProcessEntity.java`
57. `src/main/java/com/nubo/master/closure/process/rate/api/models/entity/RejectionReasonEntity.java`
58. `src/main/java/com/nubo/master/closure/process/rate/api/models/entity/ScheduleEntity.java`
59. `src/main/java/com/nubo/master/closure/process/rate/api/models/entity/ScheduleExtensionEntity.java`
60. `src/main/java/com/nubo/master/closure/process/rate/api/models/entity/ScreenActionEntity.java`
61. `src/main/java/com/nubo/master/closure/process/rate/api/models/entity/StatusEntity.java`
62. `src/main/java/com/nubo/master/closure/process/rate/api/models/entity/SubmoduleEntity.java`
63. `src/main/java/com/nubo/master/closure/process/rate/api/models/entity/SystemClosureEntity.java`
64. `src/main/java/com/nubo/master/closure/process/rate/api/models/entity/TaxStatusEntity.java`
65. `src/main/java/com/nubo/master/closure/process/rate/api/models/entity/TypeEntity.java`
66. `src/main/java/com/nubo/master/closure/process/rate/api/models/entity/UserNuboEntity.java`
67. `src/main/java/com/nubo/master/closure/process/rate/api/models/enums/ClosureProcessStatusEnum.java`
68. `src/main/java/com/nubo/master/closure/process/rate/api/models/enums/CountryCodeEnum.java`
69. `src/main/java/com/nubo/master/closure/process/rate/api/models/enums/ParamsScriptEnum.java`
70. `src/main/java/com/nubo/master/closure/process/rate/api/models/enums/PropertiesEnum.java`
71. `src/main/java/com/nubo/master/closure/process/rate/api/models/enums/SystemClosureMessageEnum.java`
72. `src/main/java/com/nubo/master/closure/process/rate/api/models/enums/VersionApiEnum.java`
73. `src/main/java/com/nubo/master/closure/process/rate/api/repository/ClosureProcessRepository.java`
74. `src/main/java/com/nubo/master/closure/process/rate/api/repository/CountryRepository.java`
75. `src/main/java/com/nubo/master/closure/process/rate/api/repository/CurrencyRepository.java`
76. `src/main/java/com/nubo/master/closure/process/rate/api/repository/HolidayRepository.java`
77. `src/main/java/com/nubo/master/closure/process/rate/api/repository/PreClosureCountryRepository.java`
78. `src/main/java/com/nubo/master/closure/process/rate/api/repository/ScheduleExtensionRepository.java`
79. `src/main/java/com/nubo/master/closure/process/rate/api/repository/SystemClosureRepository.java`
80. `src/main/java/com/nubo/master/closure/process/rate/api/service/ClosureProcessService.java`
81. `src/main/java/com/nubo/master/closure/process/rate/api/service/PreClosureCountryService.java`
82. `src/main/java/com/nubo/master/closure/process/rate/api/service/ScheduleExtensionService.java`
83. `src/main/java/com/nubo/master/closure/process/rate/api/service/SystemClosureService.java`
84. `src/main/java/com/nubo/master/closure/process/rate/api/service/impl/ClosureProcessServiceImpl.java`
85. `src/main/java/com/nubo/master/closure/process/rate/api/service/impl/PreClosureCountryServiceImpl.java`
86. `src/main/java/com/nubo/master/closure/process/rate/api/service/impl/ScheduleExtensionServiceImpl.java`
87. `src/main/java/com/nubo/master/closure/process/rate/api/service/impl/SystemClosureServiceImpl.java`
88. `src/main/java/com/nubo/master/closure/process/rate/api/web/controller/ClosureProcessRestController.java`
89. `src/main/java/com/nubo/master/closure/process/rate/api/web/controller/ScheduleExtensionRestController.java`
90. `src/main/java/com/nubo/master/closure/process/rate/api/web/controller/SystemClosureRestController.java`
91. `src/main/resources/application-dev.yml`
92. `src/main/resources/application-local.yml`
93. `src/main/resources/application-prod.yml`
94. `src/main/resources/application-qa.yml`
95. `src/main/resources/application-uat.yml`
96. `src/main/resources/application.yml`
97. `src/main/resources/banner.txt`
98. `src/main/resources/log/JsonEventLayout_error.json`
99. `src/main/resources/log/JsonEventLayout_info.json`
100. `src/main/resources/log/JsonEventLayout_trace.json`
101. `src/main/resources/log/log4j2-prod.properties`
102. `src/main/resources/log/log4j2.properties`

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
    <groupId>com.nubo.closure.process.api</groupId>
    <artifactId>closure-process-validate-api</artifactId>
    <version>0.14.0</version>
    <name>${project.artifactId}</name>
    <description>Closure Process Validate Api</description>

    <properties>
        <java.version>17</java.version>
        <spring.port>8080</spring.port>
        <test.skip>false</test.skip>
        <datasource.url.application.name>ApplicationName=${project.artifactId}</datasource.url.application.name>
        <hikari.pool.name>${project.artifactId}-pool</hikari.pool.name>

        <!-- Security fixes for CVEs -->
        <spring-framework.version>6.2.11</spring-framework.version>
        <commons-lang3.version>3.18.0</commons-lang3.version>
        <tomcat.version>10.1.49</tomcat.version>
        <log4j2.version>2.25.3</log4j2.version>
        <jackson.version>2.18.6</jackson.version>
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
            <artifactId>log4j-core</artifactId>
            <version>${log4j2.version}</version>
        </dependency>
        <dependency>
            <groupId>org.apache.logging.log4j</groupId>
            <artifactId>log4j-api</artifactId>
            <version>${log4j2.version}</version>
        </dependency>
        <dependency>
            <groupId>org.apache.logging.log4j</groupId>
            <artifactId>log4j-layout-template-json</artifactId>
            <version>${log4j2.version}</version>
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
        <!-- Jackson security fix for GHSA-72hv-8253-57qq -->
        <dependency>
            <groupId>com.fasterxml.jackson.core</groupId>
            <artifactId>jackson-core</artifactId>
            <version>${jackson.version}</version>
        </dependency>
        <dependency>
            <groupId>com.fasterxml.jackson.core</groupId>
            <artifactId>jackson-databind</artifactId>
            <version>${jackson.version}</version>
        </dependency>
        <dependency>
            <groupId>com.fasterxml.jackson.core</groupId>
            <artifactId>jackson-annotations</artifactId>
            <version>${jackson.version}</version>
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
                                <exclude>**/ClosureProcessApiApplication.class</exclude>
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

## src/main/java/com/nubo/master/closure/process/rate/api/ClosureProcessApiApplication.java

```java
package com.nubo.master.closure.process.rate.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ClosureProcessApiApplication {

    public static void main(String[] args) {
        SpringApplication.run(ClosureProcessApiApplication.class, args);
    }

}

```

## src/main/java/com/nubo/master/closure/process/rate/api/application/config/SwaggerConfig.java

```java
package com.nubo.master.closure.process.rate.api.application.config;

import com.nubo.master.closure.process.rate.api.exception.error.ErrorResponse;
import com.nubo.master.closure.process.rate.api.exception.error.ErrorValidation;
import com.nubo.master.closure.process.rate.api.models.enums.PropertiesEnum;
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

## src/main/java/com/nubo/master/closure/process/rate/api/application/config/WebConfig.java

```java
package com.nubo.master.closure.process.rate.api.application.config;

import com.nubo.master.closure.process.rate.api.application.interceptors.GlobalInterceptor;
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

## src/main/java/com/nubo/master/closure/process/rate/api/application/context/GlobalContext.java

```java
package com.nubo.master.closure.process.rate.api.application.context;

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

## src/main/java/com/nubo/master/closure/process/rate/api/application/database/NamingStrategyConfig.java

```java
package com.nubo.master.closure.process.rate.api.application.database;

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

## src/main/java/com/nubo/master/closure/process/rate/api/application/database/UpperNamingConfig.java

```java
package com.nubo.master.closure.process.rate.api.application.database;

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

## src/main/java/com/nubo/master/closure/process/rate/api/application/filters/GlobalFilter.java

```java
package com.nubo.master.closure.process.rate.api.application.filters;

import com.nubo.master.closure.process.rate.api.application.context.GlobalContext;
import com.nubo.master.closure.process.rate.api.application.util.ApplicationUtils;
import com.nubo.master.closure.process.rate.api.exception.ServiceException;
import com.nubo.master.closure.process.rate.api.exception.error.ErrorCode;
import com.nubo.master.closure.process.rate.api.exception.error.ErrorResponse;
import com.nubo.master.closure.process.rate.api.models.enums.PropertiesEnum;
import com.nubo.master.closure.process.rate.api.models.enums.VersionApiEnum;
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

## src/main/java/com/nubo/master/closure/process/rate/api/application/interceptors/GlobalInterceptor.java

```java
package com.nubo.master.closure.process.rate.api.application.interceptors;

import com.nubo.master.closure.process.rate.api.application.context.GlobalContext;
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

## src/main/java/com/nubo/master/closure/process/rate/api/application/properties/PropertiesConfig.java

```java
package com.nubo.master.closure.process.rate.api.application.properties;

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

## src/main/java/com/nubo/master/closure/process/rate/api/application/properties/PropertiesContext.java

```java
package com.nubo.master.closure.process.rate.api.application.properties;

import com.nubo.master.closure.process.rate.api.application.context.GlobalContext;
import com.nubo.master.closure.process.rate.api.application.util.ApplicationUtils;
import com.nubo.master.closure.process.rate.api.models.enums.PropertiesEnum;
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

## src/main/java/com/nubo/master/closure/process/rate/api/application/util/ApplicationUtils.java

```java
package com.nubo.master.closure.process.rate.api.application.util;

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

## src/main/java/com/nubo/master/closure/process/rate/api/application/util/RestClientUtils.java

```java
package com.nubo.master.closure.process.rate.api.application.util;

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

## src/main/java/com/nubo/master/closure/process/rate/api/client/business/day/calculation/models/dto/response/BusinessDayOutDto.java

```java
package com.nubo.master.closure.process.rate.api.client.business.day.calculation.models.dto.response;

import com.fasterxml.jackson.annotation.JsonFormat;
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
public class BusinessDayOutDto {

    private Boolean isValidBusinessDay;

    private LocalDate businessCurrentDay;

    private LocalDate businessNextDay;

    private LocalDate businessNextDayClosureDate;

    private Long countryId;

}

```

## src/main/java/com/nubo/master/closure/process/rate/api/client/business/day/calculation/service/BusinessDayCalculationClient.java

```java
package com.nubo.master.closure.process.rate.api.client.business.day.calculation.service;

import com.nubo.master.closure.process.rate.api.client.business.day.calculation.models.dto.response.BusinessDayOutDto;

import java.time.LocalDateTime;

public interface BusinessDayCalculationClient {

    BusinessDayOutDto businessNextDayCalculation(Long countryId);

    BusinessDayOutDto businessNextDayCalculationClosureDate(LocalDateTime closureDate);

    BusinessDayOutDto validBusinessDay(Long countryId);

}

```

## src/main/java/com/nubo/master/closure/process/rate/api/client/business/day/calculation/service/impl/BusinessDayCalculationClientImpl.java

```java
package com.nubo.master.closure.process.rate.api.client.business.day.calculation.service.impl;

import com.nubo.master.closure.process.rate.api.application.properties.PropertiesConfig;
import com.nubo.master.closure.process.rate.api.application.properties.PropertiesContext;
import com.nubo.master.closure.process.rate.api.application.util.ApplicationUtils;
import com.nubo.master.closure.process.rate.api.application.util.RestClientUtils;
import com.nubo.master.closure.process.rate.api.client.business.day.calculation.models.dto.response.BusinessDayOutDto;
import com.nubo.master.closure.process.rate.api.client.business.day.calculation.service.BusinessDayCalculationClient;
import com.nubo.master.closure.process.rate.api.exception.ClientException;
import com.nubo.master.closure.process.rate.api.exception.error.ErrorCode;
import com.nubo.master.closure.process.rate.api.models.enums.PropertiesEnum;
import com.nubo.master.closure.process.rate.api.models.enums.VersionApiEnum;
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
import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
@Slf4j
public class BusinessDayCalculationClientImpl implements BusinessDayCalculationClient {

    private final PropertiesConfig propertiesConfig;
    private final RestClientUtils restClientUtils;

    private static final String PATH_BUSINESS_DAY = "business-day";

    @Override
    public BusinessDayOutDto businessNextDayCalculation(Long countryId) {
        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getUrlNuboBusinessDayCalculation())
                .pathSegment(VersionApiEnum.V1.getValue(), PATH_BUSINESS_DAY)
                .path("/calculation/next-day/country/{countryId}")
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

    @Override
    public BusinessDayOutDto businessNextDayCalculationClosureDate(LocalDateTime closureDate) {
        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getUrlNuboBusinessDayCalculation())
                .pathSegment(VersionApiEnum.V1.getValue(), PATH_BUSINESS_DAY)
                .path("/calculation/closure-date/next-day")
                .queryParam("closureDate", closureDate).build().toUri();

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

## src/main/java/com/nubo/master/closure/process/rate/api/exception/ClientException.java

```java
package com.nubo.master.closure.process.rate.api.exception;

import com.nubo.master.closure.process.rate.api.exception.error.ErrorCode;
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

## src/main/java/com/nubo/master/closure/process/rate/api/exception/ServiceException.java

```java
package com.nubo.master.closure.process.rate.api.exception;

import com.nubo.master.closure.process.rate.api.exception.error.ErrorCode;
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

## src/main/java/com/nubo/master/closure/process/rate/api/exception/error/ErrorCode.java

```java
package com.nubo.master.closure.process.rate.api.exception.error;

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
    CLIENT_BUSINESS_DAY_CALCULATION_ERROR("An unexpected error occurred in Business Day Calculation"),
    BUSINESS_DAY_NOT_VALID("Business day not valid"),
    PRE_CLOSURE_COUNTRY_BUSINESS_DAY_NOT_VALID("Pre closure country business day not valid"),
    CLOSURE_PROCESS_NOT_FOUND("Closure process not found"),
    SCRIPT_NOT_FOUND("Script not found in closure process"),
    SCRIPT_EXECUTION_ERROR("Error executing script"),
    SYSTEM_CLOSURE_NOT_FOUND("System closure not found"),
    NOT_A_WORKING_DAY("NO SE ENCUENTRA EN UN DIA HABIL"),
    SCHEDULE_EXTENSION_NOT_FOUND("Schedule extension not found"),
    SCHEDULE_EXTENSION_INVALID_STATUS("Schedule extension must be in APPROVED status"),
    SCHEDULE_EXTENSION_NOT_TODAY("Schedule extension must be from today"),
    SCHEDULE_EXTENSION_EXPIRED("Schedule extension has already expired"),
    SCHEDULE_EXTENSION_OUT_OF_RANGE("Current time is outside the extended schedule range"),
    SCHEDULE_EXTENSION_ALREADY_CLOSED("Schedule extension has already been closed"),
    INVALID_TIMEZONE("Invalid timezone format");

    private final String message;

    ErrorCode(String message) {
        this.message = message;
    }

    public String getName() {
        return this.name();
    }

}

```

## src/main/java/com/nubo/master/closure/process/rate/api/exception/error/ErrorResponse.java

```java
package com.nubo.master.closure.process.rate.api.exception.error;

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

## src/main/java/com/nubo/master/closure/process/rate/api/exception/error/ErrorValidation.java

```java
package com.nubo.master.closure.process.rate.api.exception.error;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ErrorValidation {

    private String id;
    private String description;

}

```

## src/main/java/com/nubo/master/closure/process/rate/api/exception/handler/GlobalExceptionHandler.java

```java
package com.nubo.master.closure.process.rate.api.exception.handler;

import com.nubo.master.closure.process.rate.api.application.properties.PropertiesContext;
import com.nubo.master.closure.process.rate.api.application.util.ApplicationUtils;
import com.nubo.master.closure.process.rate.api.exception.ClientException;
import com.nubo.master.closure.process.rate.api.exception.ServiceException;
import com.nubo.master.closure.process.rate.api.exception.error.ErrorCode;
import com.nubo.master.closure.process.rate.api.exception.error.ErrorResponse;
import com.nubo.master.closure.process.rate.api.exception.error.ErrorValidation;
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
                        exception.getMessage():exception.getCause().getMessage())
                .timestamp(ObjectUtils.isEmpty(String.valueOf(PropertiesContext.getClientDatetime())) ? null:
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

## src/main/java/com/nubo/master/closure/process/rate/api/helpers/MapperPageUtil.java

```java
package com.nubo.master.closure.process.rate.api.helpers;

import com.nubo.master.closure.process.rate.api.models.dto.response.PageResponseOutDto;
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

## src/main/java/com/nubo/master/closure/process/rate/api/helpers/MapperUtil.java

```java
package com.nubo.master.closure.process.rate.api.helpers;

import java.util.stream.Collectors;

import org.springframework.util.ObjectUtils;

import com.nubo.master.closure.process.rate.api.models.dto.response.ClosureProcessOutDto;
import com.nubo.master.closure.process.rate.api.models.dto.response.CountryOutDto;
import com.nubo.master.closure.process.rate.api.models.dto.response.CurrencyOutDto;
import com.nubo.master.closure.process.rate.api.models.dto.response.HolidayOutDto;
import com.nubo.master.closure.process.rate.api.models.dto.response.ModuleOutDto;
import com.nubo.master.closure.process.rate.api.models.dto.response.PreClosureCountryOutDto;
import com.nubo.master.closure.process.rate.api.models.dto.response.StatusOutDto;
import com.nubo.master.closure.process.rate.api.models.dto.response.SystemClosureOutDto;
import com.nubo.master.closure.process.rate.api.models.entity.ClosureProcessEntity;
import com.nubo.master.closure.process.rate.api.models.entity.CountryEntity;
import com.nubo.master.closure.process.rate.api.models.entity.CurrencyEntity;
import com.nubo.master.closure.process.rate.api.models.entity.HolidayEntity;
import com.nubo.master.closure.process.rate.api.models.entity.ModuleEntity;
import com.nubo.master.closure.process.rate.api.models.entity.PreClosureCountryEntity;
import com.nubo.master.closure.process.rate.api.models.entity.StatusEntity;
import com.nubo.master.closure.process.rate.api.models.entity.SystemClosureEntity;


public class MapperUtil {

    private MapperUtil() {
    }


    public static CountryOutDto countryEntityToCountryOutDto(CountryEntity countryEntity) {
        return CountryOutDto.builder()
                .id(countryEntity.getId())
                .code(countryEntity.getCode())
                .name(countryEntity.getName())
                .currency(ObjectUtils.isEmpty(countryEntity.getCurrency()) ?
                        null:currencyEntityToCurrencyOutDto(countryEntity.getCurrency()))
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


    public static ModuleOutDto moduleEntityToModuleOutDto(ModuleEntity moduleEntity) {
        return ModuleOutDto.builder()
                .id(moduleEntity.getId())
                .name(moduleEntity.getName())
                .description(moduleEntity.getDescription())
                .build();
    }

    public static StatusOutDto statusEntityToStatusOutDto(StatusEntity statusEntity) {
        return StatusOutDto.builder()
                .id(Math.toIntExact(statusEntity.getId()))
                .name(statusEntity.getCategory())
                .description(statusEntity.getDescription())
                .build();
    }

    public static ClosureProcessOutDto closureProcessEntityToClosureProcessOutDto(ClosureProcessEntity closureProcessEntity) {
        return ClosureProcessOutDto.builder()
                .id(closureProcessEntity.getId())
                .module(ObjectUtils.isEmpty(closureProcessEntity.getModule()) ?
                        null : moduleEntityToModuleOutDto(closureProcessEntity.getModule()))
                .description(closureProcessEntity.getDescription())
                .result(closureProcessEntity.getResult())
                .pendingRecords(closureProcessEntity.getPendingRecords())
                .status(ObjectUtils.isEmpty(closureProcessEntity.getStatus()) ?
                        null : statusEntityToStatusOutDto(closureProcessEntity.getStatus()))
                .script(closureProcessEntity.getScript())
                .country(ObjectUtils.isEmpty(closureProcessEntity.getCountry()) ?
                        null : countryEntityToCountryOutDto(closureProcessEntity.getCountry()))
                .lastModifyUser(closureProcessEntity.getLastModifyUser())
                .lastModifyApplication(closureProcessEntity.getLastModifyApplication())
                .lastModifyDate(closureProcessEntity.getLastModifyDate())
                .lastModifyIp(closureProcessEntity.getLastModifyIp())
                .build();
    }

    public static SystemClosureOutDto systemClosureEntityToSystemClosureOutDto(SystemClosureEntity systemClosureEntity) {
        return SystemClosureOutDto.builder()
                .id(systemClosureEntity.getId())
                .preClosureCountries(ObjectUtils.isEmpty(systemClosureEntity.getPreClosureCountries()) ? 
                        null : systemClosureEntity.getPreClosureCountries().stream()
                                .map(MapperUtil::preClosureCountryEntityToPreClosureCountryOutDto)
                                .collect(Collectors.toList()))
                .closureDate(systemClosureEntity.getClosureDate())
                .closureStatus(ObjectUtils.isEmpty(systemClosureEntity.getClosureStatus()) ?
                        null : statusEntityToStatusOutDto(systemClosureEntity.getClosureStatus()))
                .closureUser(systemClosureEntity.getClosureUser())
                .observation(systemClosureEntity.getObservation())
                .lastModifyUser(systemClosureEntity.getLastModifyUser())
                .lastModifyApplication(systemClosureEntity.getLastModifyApplication())
                .lastModifyDate(systemClosureEntity.getLastModifyDate())
                .lastModifyIp(systemClosureEntity.getLastModifyIp())
                .build();
    }

    public static PreClosureCountryOutDto preClosureCountryEntityToPreClosureCountryOutDto(PreClosureCountryEntity entity) {
        return PreClosureCountryOutDto.builder()
                .id(entity.getId())
                .countryCode(ObjectUtils.isEmpty(entity.getCountry()) ? null : entity.getCountry().getCode())
                .preClosureDate(entity.getPreClosureDate())
                .status(ObjectUtils.isEmpty(entity.getStatus()) ? null : statusEntityToStatusOutDto(entity.getStatus()))
                .build();
    }

    public static HolidayOutDto holidayEntityToHolidayOutDto(HolidayEntity holidayEntity) {
        return HolidayOutDto.builder()
                .id(holidayEntity.getId())
                .country(ObjectUtils.isEmpty(holidayEntity.getCountryId()) ?
                        null : countryEntityToCountryOutDto(holidayEntity.getCountryId()))
                .holidayDate(holidayEntity.getHolidayDate())
                .description(holidayEntity.getDescription())
                .lastModifyUser(holidayEntity.getLastModifyUser())
                .lastModifyApplication(holidayEntity.getLastModifyApplication())
                .lastModifyDate(holidayEntity.getLastModifyDate())
                .lastModifyIp(holidayEntity.getLastModifyIp())
                .build();
    }

}

```

## src/main/java/com/nubo/master/closure/process/rate/api/helpers/ScheduleExtensionCloseValidator.java

```java
package com.nubo.master.closure.process.rate.api.helpers;

import com.nubo.master.closure.process.rate.api.models.entity.ScheduleExtensionEntity;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.ZoneId;

@Component
@Slf4j
public class ScheduleExtensionCloseValidator {

    private static final Long APPROVED_STATUS_ID = 924L;

    public String validate(ScheduleExtensionEntity extension) {
        
        if (!APPROVED_STATUS_ID.equals(extension.getStatus().getId())) {
            return "La extensión debe estar en estado APROBADO para poder cerrarse";
        }

        LocalDate today = LocalDate.now();
        LocalDate extensionDate = extension.getLastModifyDate().toLocalDate();
        
        if (!extensionDate.equals(today)) {
            return "Solo se pueden cerrar extensiones del mismo día de la consulta";
        }

        LocalTime originalClosingTime = extension.getSchedule().getClosingTime();
        LocalTime extendedClosingTime = extension.getNewClosingTime();

        if (extendedClosingTime.isBefore(originalClosingTime)) {
            return "La ampliación del horario ya fue cerrada previamente";
        }

        ZoneId zoneId = getZoneId(extension);
        LocalTime currentTime = LocalTime.now(zoneId);

        if (currentTime.isBefore(originalClosingTime)) {
            return String.format(
                    "La hora actual (%s) es anterior al horario de cierre original (%s). " +
                    "El cierre anticipado solo aplica durante el horario ampliado",
                    currentTime, originalClosingTime);
        }

        if (currentTime.isAfter(extendedClosingTime) || currentTime.equals(extendedClosingTime)) {
            return String.format(
                    "La ampliación del horario ya finalizó (hora de cierre: %s, hora actual: %s)",
                    extendedClosingTime, currentTime);
        }

        log.debug("Extension {} validated successfully", extension.getId());
        return null;
    }

    private ZoneId getZoneId(ScheduleExtensionEntity extension) {
        String timezone = extension.getSchedule().getCountry().getTimeZone();
        return timezone != null ? parseTimeZone(timezone) : ZoneId.systemDefault();
    }

    private ZoneId parseTimeZone(String timeZone) {
        try {
            if (!timeZone.startsWith("UTC")) {
                return ZoneId.of(timeZone);
            }

            String offset = timeZone.substring(3).split(" a ")[0].trim();

            if (offset.isEmpty()) {
                return ZoneId.of("UTC");
            }

            if (!offset.startsWith("+") && !offset.startsWith("-")) {
                offset = "+" + offset;
            }

            String sign = offset.substring(0, 1);
            String[] parts = offset.substring(1).split(":");
            int hours = Integer.parseInt(parts[0]);
            String minutes = parts.length > 1 ? parts[1] : "00";

            offset = String.format("%s%02d:%s", sign, hours, minutes);

            return ZoneId.of(offset);
        } catch (Exception e) {
            log.error("Error parsing timezone: {}", timeZone, e);
            return ZoneId.systemDefault();
        }
    }

}

```

## src/main/java/com/nubo/master/closure/process/rate/api/helpers/specification/ClosureProcessSpecification.java

```java
package com.nubo.master.closure.process.rate.api.helpers.specification;

import com.nubo.master.closure.process.rate.api.models.entity.ClosureProcessEntity;
import jakarta.persistence.criteria.Predicate;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.util.ObjectUtils;

import java.util.ArrayList;
import java.util.List;

public class ClosureProcessSpecification {

    public static Specification<ClosureProcessEntity> buildSpecification(Long countryId,
                                                                         Long moduleId,
                                                                         Integer statusId) {
        return (root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();

            if (!ObjectUtils.isEmpty(countryId)) {
                predicates.add(criteriaBuilder.equal(root.get("country").get("id"), countryId));
            }

            if (!ObjectUtils.isEmpty(moduleId)) {
                predicates.add(criteriaBuilder.equal(root.get("module").get("id"), moduleId));
            }

            if (!ObjectUtils.isEmpty(statusId)) {
                predicates.add(criteriaBuilder.equal(root.get("status").get("id"), statusId));
            }

            return criteriaBuilder.and(predicates.toArray(Predicate[]::new));
        };
    }
}

```

## src/main/java/com/nubo/master/closure/process/rate/api/helpers/specification/CountrySpecification.java

```java
package com.nubo.master.closure.process.rate.api.helpers.specification;

import com.nubo.master.closure.process.rate.api.models.entity.CountryEntity;
import jakarta.persistence.criteria.Predicate;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.util.ObjectUtils;

import java.util.ArrayList;
import java.util.List;

public class CountrySpecification {

    public static Specification<CountryEntity> buildSpecification(String description) {
        return (root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();

            if (!ObjectUtils.isEmpty(description)) {
                predicates.add(criteriaBuilder.like(
                        criteriaBuilder.lower(root.get("name")),
                        "%" + description.toLowerCase() + "%"
                ));
            }

            return criteriaBuilder.and(predicates.toArray(Predicate[]::new));
        };
    }
}
```

## src/main/java/com/nubo/master/closure/process/rate/api/models/dto/request/CloseScheduleExtensionRequestDto.java

```java
package com.nubo.master.closure.process.rate.api.models.dto.request;

import com.fasterxml.jackson.annotation.JsonInclude;
import io.swagger.v3.oas.annotations.media.Schema;
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
@JsonInclude(JsonInclude.Include.NON_NULL)
@Schema(description = "Request para cerrar ampliaciones de horario anticipadamente")
public class CloseScheduleExtensionRequestDto {

    @NotNull(message = "La lista de IDs de extensiones es requerida")
    @NotEmpty(message = "Debe proporcionar al menos un ID de extensión")
    @Schema(description = "Lista de IDs de extensiones de horario a cerrar", 
            example = "[1, 2, 3]", 
            required = true)
    private List<Long> scheduleExtensionIds;

}

```

## src/main/java/com/nubo/master/closure/process/rate/api/models/dto/response/CloseScheduleExtensionResponseDto.java

```java
package com.nubo.master.closure.process.rate.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import io.swagger.v3.oas.annotations.media.Schema;
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
@Schema(description = "Respuesta del cierre de ampliaciones de horario")
public class CloseScheduleExtensionResponseDto {

    @Schema(description = "Total de extensiones procesadas", example = "3")
    private Integer totalProcessed;

    @Schema(description = "Cantidad exitosa", example = "2")
    private Integer successCount;

    @Schema(description = "Cantidad con errores", example = "1")
    private Integer errorCount;

    @Schema(description = "Lista de extensiones cerradas exitosamente")
    private List<ScheduleExtensionClosedDto> successful;

    @Schema(description = "Lista de extensiones con errores")
    private List<ScheduleExtensionErrorDto> errors;

}

```

## src/main/java/com/nubo/master/closure/process/rate/api/models/dto/response/ClosureProcessOutDto.java

```java
package com.nubo.master.closure.process.rate.api.models.dto.response;

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
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ClosureProcessOutDto {

    private Long id;

    private ModuleOutDto module;

    private String description;

    private String result;

    private Integer pendingRecords;

    private StatusOutDto status;

    private String script;

    private CountryOutDto country;

    private String lastModifyUser;

    private String lastModifyApplication;

    private LocalDateTime lastModifyDate;

    private String lastModifyIp;

}

```

## src/main/java/com/nubo/master/closure/process/rate/api/models/dto/response/CountryDto.java

```java
package com.nubo.master.closure.process.rate.api.models.dto.response;

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

## src/main/java/com/nubo/master/closure/process/rate/api/models/dto/response/CountryOutDto.java

```java
package com.nubo.master.closure.process.rate.api.models.dto.response;

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

## src/main/java/com/nubo/master/closure/process/rate/api/models/dto/response/CurrencyOutDto.java

```java
package com.nubo.master.closure.process.rate.api.models.dto.response;

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

## src/main/java/com/nubo/master/closure/process/rate/api/models/dto/response/HolidayOutDto.java

```java
package com.nubo.master.closure.process.rate.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.OffsetDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class HolidayOutDto {

    private Long id;
    private CountryOutDto country;
    private LocalDate holidayDate;
    private String description;
    private String lastModifyUser;
    private String lastModifyApplication;
    private OffsetDateTime lastModifyDate;
    private String lastModifyIp;
}

```

## src/main/java/com/nubo/master/closure/process/rate/api/models/dto/response/ModuleOutDto.java

```java
package com.nubo.master.closure.process.rate.api.models.dto.response;

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
public class ModuleOutDto {

    private Integer id;

    private String name;

    private String description;

}

```

## src/main/java/com/nubo/master/closure/process/rate/api/models/dto/response/PageResponseOutDto.java

```java
package com.nubo.master.closure.process.rate.api.models.dto.response;

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

## src/main/java/com/nubo/master/closure/process/rate/api/models/dto/response/PreClosureCountryOutDto.java

```java
package com.nubo.master.closure.process.rate.api.models.dto.response;

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
@JsonInclude(JsonInclude.Include.NON_NULL)
public class PreClosureCountryOutDto {

    private Long id;

    private String countryCode;

    private LocalDateTime preClosureDate;

    private StatusOutDto status;

}

```

## src/main/java/com/nubo/master/closure/process/rate/api/models/dto/response/ScheduleExtensionClosedDto.java

```java
package com.nubo.master.closure.process.rate.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
@Schema(description = "Extensión cerrada exitosamente")
public class ScheduleExtensionClosedDto {

    @Schema(description = "ID de la extensión", example = "1")
    private Long scheduleExtensionId;

    @Schema(description = "Nombre del participante", example = "Banco XYZ")
    private String participantName;

    @Schema(description = "Nombre/descripción del horario", example = "Horario Compensación")
    private String scheduleName;

    @Schema(description = "Nueva hora de cierre actualizada", example = "16:45:00")
    @JsonFormat(pattern = "HH:mm:ss")
    private LocalTime closedAt;

}

```

## src/main/java/com/nubo/master/closure/process/rate/api/models/dto/response/ScheduleExtensionErrorDto.java

```java
package com.nubo.master.closure.process.rate.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
@Schema(description = "Extensión con error al cerrar")
public class ScheduleExtensionErrorDto {

    @Schema(description = "ID de la extensión", example = "123")
    private Long scheduleExtensionId;

    @Schema(description = "Código del error", example = "EXTENSION_EXPIRED")
    private String errorCode;

    @Schema(description = "Mensaje del error", example = "La ampliación ya expiró y no puede cerrarse")
    private String errorMessage;

}

```

## src/main/java/com/nubo/master/closure/process/rate/api/models/dto/response/StatusOutDto.java

```java
package com.nubo.master.closure.process.rate.api.models.dto.response;

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
public class StatusOutDto {

    private Integer id;

    private String name;

    private String description;

}

```

## src/main/java/com/nubo/master/closure/process/rate/api/models/dto/response/SystemClosureOutDto.java

```java
package com.nubo.master.closure.process.rate.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class SystemClosureOutDto {

    private Long id;

    private List<PreClosureCountryOutDto> preClosureCountries;

    private LocalDateTime closureDate;

    private StatusOutDto closureStatus;

    private String closureUser;

    private String observation;

    private String lastModifyUser;

    private String lastModifyApplication;

    private LocalDateTime lastModifyDate;

    private String lastModifyIp;

}

```

## src/main/java/com/nubo/master/closure/process/rate/api/models/dto/response/SystemClosureResponseDto.java

```java
package com.nubo.master.closure.process.rate.api.models.dto.response;

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
public class SystemClosureResponseDto {

    private String message;
    private Boolean hasPendingProcesses;
    private Boolean executed;

}

```

## src/main/java/com/nubo/master/closure/process/rate/api/models/entity/ClassEntity.java

```java
package com.nubo.master.closure.process.rate.api.models.entity;

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

## src/main/java/com/nubo/master/closure/process/rate/api/models/entity/ClosureProcessEntity.java

```java
package com.nubo.master.closure.process.rate.api.models.entity;

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
@Table(name = "\"CLOSURE_PROCESS\"", schema = "\"NUANBODB\"")
public class ClosureProcessEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"CLOSURE_PROCESS_ID\"", nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "\"MODULE_ID\"", nullable = false)
    private ModuleEntity module;

    @Column(name = "\"DESCRIPTION\"", length = 500)
    private String description;

    @Column(name = "\"RESULT\"", length = 500)
    private String result;

    @Column(name = "\"PENDING_RECORDS\"")
    private Integer pendingRecords;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"", nullable = false)
    private StatusEntity status;

    @Column(name = "\"SCRIPT\"", columnDefinition = "TEXT")
    private String script;

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

## src/main/java/com/nubo/master/closure/process/rate/api/models/entity/CountryEntity.java

```java
package com.nubo.master.closure.process.rate.api.models.entity;

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

## src/main/java/com/nubo/master/closure/process/rate/api/models/entity/CurrencyEntity.java

```java
package com.nubo.master.closure.process.rate.api.models.entity;

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

## src/main/java/com/nubo/master/closure/process/rate/api/models/entity/DepartmentEntity.java

```java
package com.nubo.master.closure.process.rate.api.models.entity;

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
@Table(name = "\"DEPARTMENT\"", schema = "\"NUANBODB\"")
public class DepartmentEntity {

    @Id
    @Column(name = "\"DEPARTMENT_ID\"", nullable = false, length = 10)
    private String id;

    @Column(name = "\"DESCRIPTION\"", length = 255)
    private String description;

    @Column(name = "\"COUNTRY_ID\"")
    private Long countryId;

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

## src/main/java/com/nubo/master/closure/process/rate/api/models/entity/HolidayEntity.java

```java
package com.nubo.master.closure.process.rate.api.models.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.OffsetDateTime;

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
    private CountryEntity countryId;

    @Column(name = "\"HOLIDAY_DATE\"")
    private LocalDate holidayDate;

    @Column(name = "\"DESCRIPTION\"", length = 100)
    private String description;

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

## src/main/java/com/nubo/master/closure/process/rate/api/models/entity/IdentificationTypeEntity.java

```java
package com.nubo.master.closure.process.rate.api.models.entity;

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

    @Column(name = "\"DESCRIPTION\"", length = 100)
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

## src/main/java/com/nubo/master/closure/process/rate/api/models/entity/ModuleEntity.java

```java
package com.nubo.master.closure.process.rate.api.models.entity;

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

## src/main/java/com/nubo/master/closure/process/rate/api/models/entity/ParticipantEntity.java

```java
package com.nubo.master.closure.process.rate.api.models.entity;

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

    @ManyToOne
    @JoinColumn(name = "\"TAX_STATUS_ID\"")
    private TaxStatusEntity taxStatus;

    @Column(name = "\"DIRECT_ALLOCATION\"", length = 1)
    private String directAllocation;

    @Column(name = "\"MARKET_MAKER\"", length = 1)
    private String marketMaker;

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

## src/main/java/com/nubo/master/closure/process/rate/api/models/entity/PreClosureCountryEntity.java

```java
package com.nubo.master.closure.process.rate.api.models.entity;

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
@Table(name = "\"PRE_CLOSURE_COUNTRY\"", schema = "\"NUANBODB\"")
public class PreClosureCountryEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"PRE_CLOSURE_COUNTRY_ID\"", nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "\"SYSTEM_ID\"", nullable = false, referencedColumnName = "\"SYSTEM_CLOSURE_ID\"")
    private SystemClosureEntity systemClosure;

    @ManyToOne
    @JoinColumn(name = "\"COUNTRY_ID\"", nullable = false)
    private CountryEntity country;

    @Column(name = "\"PRE_CLOSURE_DATE\"")
    private LocalDateTime preClosureDate;

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

## src/main/java/com/nubo/master/closure/process/rate/api/models/entity/ProcessEntity.java

```java
package com.nubo.master.closure.process.rate.api.models.entity;

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
@Table(name = "\"PROCESS\"", schema = "\"NUANBODB\"")
public class ProcessEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"PROCESS_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"NAME\"", length = 100)
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

## src/main/java/com/nubo/master/closure/process/rate/api/models/entity/RejectionReasonEntity.java

```java
package com.nubo.master.closure.process.rate.api.models.entity;

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

    @Column(name = "\"DESCRIPTION\"", length = 255)
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

## src/main/java/com/nubo/master/closure/process/rate/api/models/entity/ScheduleEntity.java

```java
package com.nubo.master.closure.process.rate.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
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

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"TYPE_ID\"", nullable = false)
    private TypeEntity type;

    @Column(name = "\"START_DATE\"")
    private LocalDate startDate;

    @Column(name = "\"END_DATE\"")
    private LocalDate endDate;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"COUNTRY_ID\"", nullable = false)
    private CountryEntity country;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"MODULE_ID\"", nullable = false)
    private ModuleEntity module;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"STATUS_ID\"", nullable = false)
    private StatusEntity status;

    @Column(name = "\"INTERNAL\"")
    private Boolean internal;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"USER_NUBO_ID\"", nullable = false)
    private UserNuboEntity userNubo;

    @Column(name = "\"FREQUENCY\"", nullable = false)
    private Integer frequency;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 250, nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50, nullable = false)
    private String lastModifyIp;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"PROCESS_ID\"")
    private ProcessEntity process;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"SUBMODULE_ID\"")
    private SubmoduleEntity submodule;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"SCREEN_ACTION_ID\"")
    private ScreenActionEntity screenAction;

}

```

## src/main/java/com/nubo/master/closure/process/rate/api/models/entity/ScheduleExtensionEntity.java

```java
package com.nubo.master.closure.process.rate.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
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
@Table(name = "\"SCHEDULE_EXTENSION\"", schema = "\"NUANBODB\"")
public class ScheduleExtensionEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"SCHEDULE_EXTENSION_ID\"", nullable = false)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
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

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"PARTICIPANT_ID\"", nullable = false)
    private ParticipantEntity participant;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"REJECTION_REASON_ID\"")
    private RejectionReasonEntity rejectionReason;

    @Column(name = "\"OTHER_DETAIL\"")
    private String otherDetail;

    @ManyToOne(fetch = FetchType.LAZY)
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

## src/main/java/com/nubo/master/closure/process/rate/api/models/entity/ScreenActionEntity.java

```java
package com.nubo.master.closure.process.rate.api.models.entity;

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
@Table(name = "\"SCREEN_ACTION\"", schema = "\"NUANBODB\"")
public class ScreenActionEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"SCREEN_ACTION_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"NAME\"", length = 100)
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

## src/main/java/com/nubo/master/closure/process/rate/api/models/entity/StatusEntity.java

```java
package com.nubo.master.closure.process.rate.api.models.entity;

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

## src/main/java/com/nubo/master/closure/process/rate/api/models/entity/SubmoduleEntity.java

```java
package com.nubo.master.closure.process.rate.api.models.entity;

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
@Table(name = "\"SUBMODULE\"", schema = "\"NUANBODB\"")
public class SubmoduleEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"SUBMODULE_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"NAME\"", length = 100)
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

## src/main/java/com/nubo/master/closure/process/rate/api/models/entity/SystemClosureEntity.java

```java
package com.nubo.master.closure.process.rate.api.models.entity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"SYSTEM_CLOSURE\"", schema = "\"NUANBODB\"")
public class SystemClosureEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"SYSTEM_CLOSURE_ID\"", nullable = false)
    private Long id;

    @OneToMany(mappedBy = "systemClosure", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<PreClosureCountryEntity> preClosureCountries;

    @Column(name = "\"CLOSURE_DATE\"")
    private LocalDateTime closureDate;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"")
    private StatusEntity closureStatus;

    @Column(name = "\"CLOSURE_USER\"", length = 250)
    private String closureUser;

    @Column(name = "\"OBSERVATION\"", columnDefinition = "TEXT")
    private String observation;

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

## src/main/java/com/nubo/master/closure/process/rate/api/models/entity/TaxStatusEntity.java

```java
package com.nubo.master.closure.process.rate.api.models.entity;

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

    @Column(name = "\"DESCRIPTION\"", length = 100)
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

## src/main/java/com/nubo/master/closure/process/rate/api/models/entity/TypeEntity.java

```java
package com.nubo.master.closure.process.rate.api.models.entity;

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

## src/main/java/com/nubo/master/closure/process/rate/api/models/entity/UserNuboEntity.java

```java
package com.nubo.master.closure.process.rate.api.models.entity;

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

    @Column(name = "\"USERNAME\"", length = 100)
    private String username;

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

## src/main/java/com/nubo/master/closure/process/rate/api/models/enums/ClosureProcessStatusEnum.java

```java
package com.nubo.master.closure.process.rate.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum ClosureProcessStatusEnum {

    WITH_PENDING_RECORDS(1152L),
    WITHOUT_PENDING_RECORDS(1153L),
    COMPLETED(1155L),
    PENDING(1154L),
    SYSTEM_CLOSED(1157L),
    SYSTEM_INITIAL(1158L);

    private final Long statusId;

}

```

## src/main/java/com/nubo/master/closure/process/rate/api/models/enums/CountryCodeEnum.java

```java
package com.nubo.master.closure.process.rate.api.models.enums;

import java.util.Arrays;
import java.util.List;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

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

    public static boolean isValidCode(String code) {
        return Arrays.stream(CountryCodeEnum.values())
                .anyMatch(country -> country.getCode().equalsIgnoreCase(code));
    }
}
```

## src/main/java/com/nubo/master/closure/process/rate/api/models/enums/ParamsScriptEnum.java

```java
package com.nubo.master.closure.process.rate.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum ParamsScriptEnum {

    PM_COUNTRY_ID("pm_pais_id"),
    PM_CLEARING_DATE("pm_clearing_date");

    private final String param;

}

```

## src/main/java/com/nubo/master/closure/process/rate/api/models/enums/PropertiesEnum.java

```java
package com.nubo.master.closure.process.rate.api.models.enums;

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

## src/main/java/com/nubo/master/closure/process/rate/api/models/enums/SystemClosureMessageEnum.java

```java
package com.nubo.master.closure.process.rate.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum SystemClosureMessageEnum {

    PENDING_PROCESSES("Existen procesos pendientes de cierre ¿Deseas continuar con la confirmación de cierre?"),
    PROCESSES_COMPLETED("Procesos de cierre finalizados, ¿Desea Continuar?"),
    CLOSURE_EXECUTED_SUCCESSFULLY("Proceso de cierre ejecutado exitosamente");

    private final String message;

}

```

## src/main/java/com/nubo/master/closure/process/rate/api/models/enums/VersionApiEnum.java

```java
package com.nubo.master.closure.process.rate.api.models.enums;

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

## src/main/java/com/nubo/master/closure/process/rate/api/repository/ClosureProcessRepository.java

```java
package com.nubo.master.closure.process.rate.api.repository;

import com.nubo.master.closure.process.rate.api.models.entity.ClosureProcessEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface ClosureProcessRepository extends JpaRepository<ClosureProcessEntity, Long>,
        JpaSpecificationExecutor<ClosureProcessEntity> {

}

```

## src/main/java/com/nubo/master/closure/process/rate/api/repository/CountryRepository.java

```java
package com.nubo.master.closure.process.rate.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import com.nubo.master.closure.process.rate.api.models.entity.CountryEntity;

@Repository
public interface CountryRepository extends JpaRepository<CountryEntity, Long>, JpaSpecificationExecutor<CountryEntity> {

    List<CountryEntity> findByCodeIn(List<String> codes);

}

```

## src/main/java/com/nubo/master/closure/process/rate/api/repository/CurrencyRepository.java

```java
package com.nubo.master.closure.process.rate.api.repository;


import com.nubo.master.closure.process.rate.api.models.entity.CurrencyEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CurrencyRepository extends JpaRepository<CurrencyEntity, Long> {
}

```

## src/main/java/com/nubo/master/closure/process/rate/api/repository/HolidayRepository.java

```java
package com.nubo.master.closure.process.rate.api.repository;

import com.nubo.master.closure.process.rate.api.models.entity.CountryEntity;
import com.nubo.master.closure.process.rate.api.models.entity.HolidayEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface HolidayRepository extends JpaRepository<HolidayEntity, Long>, JpaSpecificationExecutor<HolidayEntity> {

    List<HolidayEntity> findByHolidayDateAndCountryId(LocalDate holidayDate, CountryEntity countryId);

}

```

## src/main/java/com/nubo/master/closure/process/rate/api/repository/PreClosureCountryRepository.java

```java
package com.nubo.master.closure.process.rate.api.repository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import com.nubo.master.closure.process.rate.api.models.entity.SystemClosureEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.nubo.master.closure.process.rate.api.models.entity.PreClosureCountryEntity;

public interface PreClosureCountryRepository extends JpaRepository<PreClosureCountryEntity, Long> {

    @Query("SELECT p FROM PreClosureCountryEntity p " +
            "WHERE p.systemClosure.id = :systemClosureId " +
            "AND p.country.id = :countryId")
    Optional<PreClosureCountryEntity> findBySystemClosureIdAndCountryId(
            @Param("systemClosureId") Long systemClosureId,
            @Param("countryId") Long countryId);

    @Query("SELECT p FROM PreClosureCountryEntity p " +
            "WHERE p.country.id = :countryId " +
            "AND DATE(p.preClosureDate) = DATE(:currentDate)")
    List<PreClosureCountryEntity> findByCountryIdAndPreClosureDateToday(
            @Param("countryId") Long countryId,
            @Param("currentDate") LocalDateTime currentDate);

    @Query("""
                SELECT p
                FROM PreClosureCountryEntity p
                WHERE p.preClosureDate >= :startDate
                  AND p.preClosureDate < :endDate
                  AND p.country.id = :countryId
            """)
    Optional<PreClosureCountryEntity> findByPreClosureDateAndCountryId(
            @Param("startDate") LocalDateTime startDate,
            @Param("endDate") LocalDateTime endDate,
            @Param("countryId") Long countryId
    );

}

```

## src/main/java/com/nubo/master/closure/process/rate/api/repository/ScheduleExtensionRepository.java

```java
package com.nubo.master.closure.process.rate.api.repository;

import com.nubo.master.closure.process.rate.api.models.entity.ScheduleExtensionEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ScheduleExtensionRepository extends JpaRepository<ScheduleExtensionEntity, Long> {

    @Query("""
        SELECT se FROM ScheduleExtensionEntity se
        LEFT JOIN FETCH se.schedule s
        LEFT JOIN FETCH s.country c
        LEFT JOIN FETCH se.participant p
        LEFT JOIN FETCH se.status st
        WHERE se.id IN :ids
    """)
    List<ScheduleExtensionEntity> findByIdInWithDetails(@Param("ids") List<Long> ids);

}

```

## src/main/java/com/nubo/master/closure/process/rate/api/repository/SystemClosureRepository.java

```java
package com.nubo.master.closure.process.rate.api.repository;

import com.nubo.master.closure.process.rate.api.models.entity.SystemClosureEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface SystemClosureRepository extends JpaRepository<SystemClosureEntity, Long> {

    @Query("SELECT DISTINCT s FROM SystemClosureEntity s " +
            "LEFT JOIN s.preClosureCountries pc " +
            "WHERE (pc.preClosureDate BETWEEN :startDate AND :endDate) OR " +
            "(s.closureDate BETWEEN :closureStartDate AND :closureEndDate)")
    List<SystemClosureEntity> findByPreClosureDateBetweenOrClosureDateBetween(
            @Param("startDate") LocalDateTime startDate,
            @Param("endDate") LocalDateTime endDate,
            @Param("closureStartDate") LocalDateTime closureStartDate,
            @Param("closureEndDate") LocalDateTime closureEndDate);

    @Query("SELECT s FROM SystemClosureEntity s " +
            "WHERE DATE(s.closureDate) = DATE(:searchDate) " +
            "ORDER BY s.closureDate DESC")
    SystemClosureEntity findByClosureDate(@Param("searchDate") LocalDateTime searchDate);

    SystemClosureEntity findFirstByClosureDateBetweenOrderByClosureDateDesc(
            LocalDateTime startDate, LocalDateTime endDate);

    @Query("""
                SELECT s
                FROM SystemClosureEntity s
                WHERE s.closureDate >= :startDate
                  AND s.closureDate < :endDate
            """)
    Optional<SystemClosureEntity> findByClosureDate(
            @Param("startDate") LocalDateTime startDate,
            @Param("endDate") LocalDateTime endDate
    );

}

```

## src/main/java/com/nubo/master/closure/process/rate/api/service/ClosureProcessService.java

```java
package com.nubo.master.closure.process.rate.api.service;

import java.util.List;
import java.util.Map;

import com.nubo.master.closure.process.rate.api.models.dto.response.ClosureProcessOutDto;
import com.nubo.master.closure.process.rate.api.models.dto.response.PageResponseOutDto;

public interface ClosureProcessService {

    PageResponseOutDto<ClosureProcessOutDto> findAllClosureProcess(
            int page, int size, String sort, String order, boolean all,
            Long countryId, Long moduleId, Integer statusId);

    void executeScriptAndUpdateClosureProcess(Long closureProcessId);

    List<Map<String, Object>> executeScriptAndGetResults(Long closureProcessId);

    void executeScriptsByCountryOrAll(Long countryId, boolean all);

}

```

## src/main/java/com/nubo/master/closure/process/rate/api/service/PreClosureCountryService.java

```java
package com.nubo.master.closure.process.rate.api.service;

import java.util.Optional;

import com.nubo.master.closure.process.rate.api.models.dto.response.PreClosureCountryOutDto;

public interface PreClosureCountryService {

    /**
     * Obtiene el estado y fecha de pre-cierre por countryId y systemClosureId
     *
     * @param systemClosureId ID del cierre del sistema
     * @param countryId       ID del país
     * @param version         Versión de la API
     * @return DTO con los datos de pre-cierre del país
     */
    Optional<PreClosureCountryOutDto> findBySystemClosureIdAndCountryId(Long systemClosureId, Long countryId, String version);

}

```

## src/main/java/com/nubo/master/closure/process/rate/api/service/ScheduleExtensionService.java

```java
package com.nubo.master.closure.process.rate.api.service;

import com.nubo.master.closure.process.rate.api.models.dto.response.CloseScheduleExtensionResponseDto;

import java.util.List;

public interface ScheduleExtensionService {

    CloseScheduleExtensionResponseDto closeScheduleExtensions(List<Long> scheduleExtensionIds);

}

```

## src/main/java/com/nubo/master/closure/process/rate/api/service/SystemClosureService.java

```java
package com.nubo.master.closure.process.rate.api.service;

import com.nubo.master.closure.process.rate.api.models.dto.response.SystemClosureResponseDto;

public interface SystemClosureService {


    SystemClosureResponseDto closeSystemAndPrepareNext(boolean isManual, boolean execute);

}

```

## src/main/java/com/nubo/master/closure/process/rate/api/service/impl/ClosureProcessServiceImpl.java

```java
package com.nubo.master.closure.process.rate.api.service.impl;

import com.nubo.master.closure.process.rate.api.application.properties.PropertiesConfig;
import com.nubo.master.closure.process.rate.api.application.properties.PropertiesContext;
import com.nubo.master.closure.process.rate.api.client.business.day.calculation.models.dto.response.BusinessDayOutDto;
import com.nubo.master.closure.process.rate.api.client.business.day.calculation.service.BusinessDayCalculationClient;
import com.nubo.master.closure.process.rate.api.exception.ServiceException;
import com.nubo.master.closure.process.rate.api.exception.error.ErrorCode;
import com.nubo.master.closure.process.rate.api.helpers.MapperPageUtil;
import com.nubo.master.closure.process.rate.api.helpers.MapperUtil;
import com.nubo.master.closure.process.rate.api.helpers.specification.ClosureProcessSpecification;
import com.nubo.master.closure.process.rate.api.models.dto.response.ClosureProcessOutDto;
import com.nubo.master.closure.process.rate.api.models.dto.response.PageResponseOutDto;
import com.nubo.master.closure.process.rate.api.models.entity.ClosureProcessEntity;
import com.nubo.master.closure.process.rate.api.models.entity.CountryEntity;
import com.nubo.master.closure.process.rate.api.models.entity.HolidayEntity;
import com.nubo.master.closure.process.rate.api.models.entity.PreClosureCountryEntity;
import com.nubo.master.closure.process.rate.api.models.entity.StatusEntity;
import com.nubo.master.closure.process.rate.api.models.enums.ClosureProcessStatusEnum;
import com.nubo.master.closure.process.rate.api.models.enums.ParamsScriptEnum;
import com.nubo.master.closure.process.rate.api.models.enums.VersionApiEnum;
import com.nubo.master.closure.process.rate.api.repository.ClosureProcessRepository;
import com.nubo.master.closure.process.rate.api.repository.CountryRepository;
import com.nubo.master.closure.process.rate.api.repository.HolidayRepository;
import com.nubo.master.closure.process.rate.api.repository.PreClosureCountryRepository;
import com.nubo.master.closure.process.rate.api.service.ClosureProcessService;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.Query;
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

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.time.ZonedDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class ClosureProcessServiceImpl implements ClosureProcessService {

    private final ClosureProcessRepository closureProcessRepository;
    private final PropertiesConfig propertiesConfig;
    private final PreClosureCountryRepository preClosureCountryRepository;
    private final HolidayRepository holidayRepository;
    private final CountryRepository countryRepository;
    private final BusinessDayCalculationClient businessDayCalculationClient;

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public PageResponseOutDto<ClosureProcessOutDto> findAllClosureProcess(int page, int size, String sort, String order, boolean all, Long countryId, Long moduleId, Integer statusId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllClosureProcessV1(page, size, sort, order, all, countryId, moduleId, statusId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<ClosureProcessOutDto> findAllClosureProcessV1(int page, int size, String sort, String order, boolean all, Long countryId, Long moduleId, Integer statusId) {
        log.info("Start method findAllClosureProcessV1 with page: {} and size: {}", page, size);

        Specification<ClosureProcessEntity> specification = ClosureProcessSpecification.buildSpecification(
                countryId, moduleId, statusId
        );

        Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
        Sort sortObj = Sort.by(direction, sort != null ? sort : "id");

        if (all) {
            List<ClosureProcessEntity> allResults = closureProcessRepository.findAll(specification, sortObj);

            List<ClosureProcessOutDto> closureProcessOutDtoList = allResults.stream()
                    .map(MapperUtil::closureProcessEntityToClosureProcessOutDto)
                    .toList();

            log.info("End method findAllClosureProcessV1 with {} results", closureProcessOutDtoList.size());

            return buildPageResponse(closureProcessOutDtoList, 0, allResults.size(), allResults.size());
        } else {
            Pageable pageable = PageRequest.of(page, size, sortObj);
            Page<ClosureProcessEntity> closureProcessPage = closureProcessRepository.findAll(specification, pageable);

            List<ClosureProcessOutDto> closureProcessOutDtoList = closureProcessPage.getContent().stream()
                    .map(MapperUtil::closureProcessEntityToClosureProcessOutDto)
                    .toList();

            log.info("End method findAllClosureProcessV1 with {} results", closureProcessOutDtoList.size());

            return MapperPageUtil.pageToPageResponseOutDto(closureProcessOutDtoList, closureProcessPage);
        }
    }

    private <T> PageResponseOutDto<T> buildPageResponse(List<T> content, int page, int size, int totalElements) {
        return PageResponseOutDto.<T>builder()
                .content(content)
                .pageSize(size)
                .pageNumber(page)
                .totalElements((long) totalElements)
                .totalPages((int) Math.ceil((double) totalElements / size))
                .build();
    }

    @Override
    @Transactional
    public void executeScriptAndUpdateClosureProcess(Long closureProcessId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            executeScriptAndUpdateClosureProcessV1(closureProcessId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private void executeScriptAndUpdateClosureProcessV1(Long closureProcessId) {
        log.info("Start method executeScriptAndUpdateClosureProcessV1 with closureProcessId: {}", closureProcessId);

        ClosureProcessEntity closureProcess = closureProcessRepository.findById(closureProcessId)
                .orElseThrow(() -> new ServiceException(ErrorCode.CLOSURE_PROCESS_NOT_FOUND, HttpStatus.NOT_FOUND));

        if (closureProcess.getScript() == null || closureProcess.getScript().trim().isEmpty()) {
            throw new ServiceException(ErrorCode.SCRIPT_NOT_FOUND, HttpStatus.BAD_REQUEST);
        }

        List<Map<String, Object>> results = executeNativeQuery(closureProcess);
        int recordsCount = results.size();

        closureProcess.setPendingRecords(recordsCount);

        StatusEntity status = new StatusEntity();
        if (recordsCount > 0) {
            status.setId(ClosureProcessStatusEnum.WITH_PENDING_RECORDS.getStatusId());
        } else {
            status.setId(ClosureProcessStatusEnum.WITHOUT_PENDING_RECORDS.getStatusId());
        }
        closureProcess.setStatus(status);

        closureProcess.setLastModifyDate(LocalDateTime.now());
        closureProcess.setLastModifyUser(PropertiesContext.getClientUser());
        closureProcess.setLastModifyApplication(propertiesConfig.getApiName());
        closureProcess.setLastModifyIp(PropertiesContext.getClientIp());

        closureProcessRepository.save(closureProcess);

        log.info("End method executeScriptAndUpdateClosureProcessV1 with {} records found", recordsCount);
    }

    @Override
    @Transactional(readOnly = true)
    public List<Map<String, Object>> executeScriptAndGetResults(Long closureProcessId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return executeScriptAndGetResultsV1(closureProcessId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<Map<String, Object>> executeScriptAndGetResultsV1(Long closureProcessId) {
        log.info("Start method executeScriptAndGetResultsV1 with closureProcessId: {}", closureProcessId);

        ClosureProcessEntity closureProcessEntity = closureProcessRepository.findById(closureProcessId)
                .orElseThrow(() -> new ServiceException(ErrorCode.CLOSURE_PROCESS_NOT_FOUND, HttpStatus.NOT_FOUND));

        if (closureProcessEntity.getScript() == null || closureProcessEntity.getScript().trim().isEmpty()) {
            throw new ServiceException(ErrorCode.SCRIPT_NOT_FOUND, HttpStatus.BAD_REQUEST);
        }

        List<Map<String, Object>> results = executeNativeQuery(closureProcessEntity);

        log.info("End method executeScriptAndGetResultsV1 with {} results", results.size());

        return results;
    }

    @SuppressWarnings("unchecked")
    private List<Map<String, Object>> executeNativeQuery(ClosureProcessEntity closureProcessEntity) {

        try {
            Query query = getQueryWithParams(closureProcessEntity);

            List<Object[]> resultList = query.getResultList();

            return resultList.stream()
                    .map(columns -> {
                        Map<String, Object> rowMap = new HashMap<>();
                        for (int i = 0; i < columns.length; i++) {
                            rowMap.put("column_" + (i + 1), columns[i]);
                        }
                        return rowMap;
                    })
                    .toList();

        } catch (Exception e) {
            log.error("Error executing native query", e);
            throw new ServiceException(
                    ErrorCode.SCRIPT_EXECUTION_ERROR,
                    HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
    }

    private Query getQueryWithParams(ClosureProcessEntity closureProcessEntity) {
        String sql = closureProcessEntity.getScript();

        Query query = entityManager.createNativeQuery(sql);

        Long countryId = closureProcessEntity.getCountry().getId();

        if (sql.contains(":" + ParamsScriptEnum.PM_COUNTRY_ID.getParam())) {
            query.setParameter(
                    ParamsScriptEnum.PM_COUNTRY_ID.getParam(),
                    countryId
            );
        }

        if (sql.contains(":" + ParamsScriptEnum.PM_CLEARING_DATE.getParam())) {
            query.setParameter(
                    ParamsScriptEnum.PM_CLEARING_DATE.getParam(),
                    getBusinessDay(countryId)
            );
        }

        return query;
    }

    private LocalDate getBusinessDay(Long countryId) {
        BusinessDayOutDto businessDayOutDto = businessDayCalculationClient.validBusinessDay(countryId);
        if (!businessDayOutDto.getIsValidBusinessDay()) {
            throw new ServiceException(ErrorCode.BUSINESS_DAY_NOT_VALID, HttpStatus.BAD_REQUEST);
        }
        return businessDayOutDto.getBusinessCurrentDay();
    }

    @Override
    @Transactional
    public void executeScriptsByCountryOrAll(Long countryId, boolean all) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            executeScriptsByCountryOrAllV1(countryId, all);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private void executeScriptsByCountryOrAllV1(Long countryId, boolean all) {
        log.info("Start method executeScriptsByCountryOrAllV1 with countryId: {} and all: {}", countryId, all);

        // Validar que no sea un día festivo para el país
        if (countryId != null) {
            validateNotHolidayForCountry(countryId);
        }

        if (countryId != null) {
            executeProcessesByCountry(countryId);
        } else if (all) {
            List<ClosureProcessEntity> allProcesses = closureProcessRepository.findAll();

            Map<Long, List<ClosureProcessEntity>> processesByCountry = allProcesses.stream()
                    .collect(Collectors.groupingBy(p -> p.getCountry().getId()));

            processesByCountry.forEach((country, processes) -> {
                processes.forEach(this::executeAndUpdateProcess);
                updatePreClosureCountryStatus(country);
            });
        } else {
            throw new ServiceException(ErrorCode.BAD_REQUEST, HttpStatus.BAD_REQUEST);
        }

        log.info("End method executeScriptsByCountryOrAllV1");
    }

    private void executeProcessesByCountry(Long countryId) {
        log.info("Executing processes for countryId: {}", countryId);

        LocalDateTime today = LocalDate.now(ZoneOffset.UTC).atStartOfDay();
        LocalDateTime startDate = today.toLocalDate().atStartOfDay();
        LocalDateTime endDate = today.toLocalDate().plusDays(1).atStartOfDay();

        Optional<PreClosureCountryEntity> preClosureCountryEntityOptional = preClosureCountryRepository.findByPreClosureDateAndCountryId(
                startDate, endDate, countryId);

        if (preClosureCountryEntityOptional.isEmpty()) {
            throw new ServiceException(ErrorCode.PRE_CLOSURE_COUNTRY_BUSINESS_DAY_NOT_VALID, HttpStatus.BAD_REQUEST);
        }

        List<ClosureProcessEntity> processes = closureProcessRepository.findAll()
                .stream()
                .filter(p -> p.getCountry().getId().equals(countryId))
                .toList();

        processes.forEach(this::executeAndUpdateProcess);

        updatePreClosureCountryStatus(countryId);
    }

    private void executeAndUpdateProcess(ClosureProcessEntity closureProcess) {
        log.info("Executing process with id: {}", closureProcess.getId());

        if (closureProcess.getScript() == null || closureProcess.getScript().trim().isEmpty()) {
            log.warn("Script is empty for closure process id: {}", closureProcess.getId());
            return;
        }

        List<Map<String, Object>> results = executeNativeQuery(closureProcess);
        int recordsCount = results.size();

        closureProcess.setPendingRecords(recordsCount);

        StatusEntity status = new StatusEntity();
        if (recordsCount > 0) {
            status.setId(ClosureProcessStatusEnum.WITH_PENDING_RECORDS.getStatusId());
        } else {
            status.setId(ClosureProcessStatusEnum.WITHOUT_PENDING_RECORDS.getStatusId());
        }
        closureProcess.setStatus(status);

        closureProcess.setLastModifyDate(LocalDateTime.now());
        closureProcess.setLastModifyUser(PropertiesContext.getClientUser());
        closureProcess.setLastModifyApplication(propertiesConfig.getApiName());
        closureProcess.setLastModifyIp(PropertiesContext.getClientIp());

        closureProcessRepository.save(closureProcess);
    }

    private void updatePreClosureCountryStatus(Long countryId) {
        log.info("Updating PreClosureCountry status for countryId: {}", countryId);

        List<ClosureProcessEntity> countryProcesses = closureProcessRepository.findAll()
                .stream()
                .filter(p -> p.getCountry().getId().equals(countryId))
                .toList();

        boolean allProcessesCompleted = countryProcesses.stream()
                .allMatch(p -> p.getPendingRecords() != null && p.getPendingRecords() == 0);

        log.info("All processes completed for countryId {}: {}", countryId, allProcessesCompleted);

        LocalDateTime currentTimestamp = ZonedDateTime.now(ZoneOffset.ofHours(-5)).toLocalDateTime();
        List<PreClosureCountryEntity> preClosureCountries =
                preClosureCountryRepository.findByCountryIdAndPreClosureDateToday(countryId, currentTimestamp);

        if (!preClosureCountries.isEmpty()) {
            preClosureCountries.forEach(preClosureCountry -> {
                preClosureCountry.setPreClosureDate(currentTimestamp);

                if (allProcessesCompleted) {
                    StatusEntity completedStatus = new StatusEntity();
                    completedStatus.setId(ClosureProcessStatusEnum.COMPLETED.getStatusId());
                    preClosureCountry.setStatus(completedStatus);

                    log.info("Updated PreClosureCountry id {} to status 832 with pre-closure date: {}",
                            preClosureCountry.getId(), currentTimestamp);
                } else {
                    log.info("PreClosureCountry id {} updated with pre-closure date: {} (not all processes completed)",
                            preClosureCountry.getId(), currentTimestamp);
                }

                preClosureCountry.setLastModifyDate(currentTimestamp);
                preClosureCountry.setLastModifyUser(PropertiesContext.getClientUser());
                preClosureCountry.setLastModifyApplication(propertiesConfig.getApiName());
                preClosureCountry.setLastModifyIp(PropertiesContext.getClientIp());

                preClosureCountryRepository.save(preClosureCountry);
            });
        } else {
            log.warn("No PreClosureCountry found for countryId {} with today's date", countryId);
        }
    }

    private void validateNotHolidayForCountry(Long countryId) {
        log.info("Validating if current date is not a holiday for countryId: {}", countryId);

        LocalDate today = LocalDate.now(ZoneOffset.UTC);
        CountryEntity country = countryRepository.findById(countryId)
                .orElseThrow(() -> new ServiceException(ErrorCode.NOT_FOUND, HttpStatus.NOT_FOUND));

        List<HolidayEntity> holidays = holidayRepository.findByHolidayDateAndCountryId(today, country);

        if (!holidays.isEmpty()) {
            log.error("Current date {} is a holiday for country {}", today, country.getCode());
            throw new ServiceException(ErrorCode.NOT_A_WORKING_DAY, HttpStatus.BAD_REQUEST);
        }

        log.info("Current date {} is a working day for country {}", today, country.getCode());
    }

}

```

## src/main/java/com/nubo/master/closure/process/rate/api/service/impl/PreClosureCountryServiceImpl.java

```java
package com.nubo.master.closure.process.rate.api.service.impl;

import com.nubo.master.closure.process.rate.api.exception.ServiceException;
import com.nubo.master.closure.process.rate.api.exception.error.ErrorCode;
import com.nubo.master.closure.process.rate.api.helpers.MapperUtil;
import com.nubo.master.closure.process.rate.api.models.dto.response.PreClosureCountryOutDto;
import com.nubo.master.closure.process.rate.api.models.entity.PreClosureCountryEntity;
import com.nubo.master.closure.process.rate.api.models.enums.VersionApiEnum;
import com.nubo.master.closure.process.rate.api.repository.PreClosureCountryRepository;
import com.nubo.master.closure.process.rate.api.service.PreClosureCountryService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.Objects;
import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
public class PreClosureCountryServiceImpl implements PreClosureCountryService {

    private final PreClosureCountryRepository preClosureCountryRepository;

    @Override
    public Optional<PreClosureCountryOutDto> findBySystemClosureIdAndCountryId(Long systemClosureId, Long countryId, String version) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(version)) == VersionApiEnum.V1) {
            return findBySystemClosureIdAndCountryIdV1(systemClosureId, countryId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private Optional<PreClosureCountryOutDto> findBySystemClosureIdAndCountryIdV1(Long systemClosureId, Long countryId) {
        log.info("Finding pre-closure data for systemClosureId: {} and countryId: {}", systemClosureId, countryId);

        return preClosureCountryRepository.findBySystemClosureIdAndCountryId(systemClosureId, countryId)
                .map(this::mapToDto);
    }

    private PreClosureCountryOutDto mapToDto(PreClosureCountryEntity entity) {
        return PreClosureCountryOutDto.builder()
                .id(entity.getId())
                .countryCode(entity.getCountry().getCode())
                .preClosureDate(entity.getPreClosureDate())
                .status(entity.getStatus() != null 
                        ? MapperUtil.statusEntityToStatusOutDto(entity.getStatus()) 
                        : null)
                .build();
    }

}

```

## src/main/java/com/nubo/master/closure/process/rate/api/service/impl/ScheduleExtensionServiceImpl.java

```java
package com.nubo.master.closure.process.rate.api.service.impl;

import com.nubo.master.closure.process.rate.api.application.properties.PropertiesConfig;
import com.nubo.master.closure.process.rate.api.application.properties.PropertiesContext;
import com.nubo.master.closure.process.rate.api.exception.ServiceException;
import com.nubo.master.closure.process.rate.api.exception.error.ErrorCode;
import com.nubo.master.closure.process.rate.api.helpers.ScheduleExtensionCloseValidator;
import com.nubo.master.closure.process.rate.api.models.dto.response.CloseScheduleExtensionResponseDto;
import com.nubo.master.closure.process.rate.api.models.dto.response.ScheduleExtensionClosedDto;
import com.nubo.master.closure.process.rate.api.models.dto.response.ScheduleExtensionErrorDto;
import com.nubo.master.closure.process.rate.api.models.entity.ScheduleExtensionEntity;
import com.nubo.master.closure.process.rate.api.models.enums.VersionApiEnum;
import com.nubo.master.closure.process.rate.api.repository.ScheduleExtensionRepository;
import com.nubo.master.closure.process.rate.api.service.ScheduleExtensionService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
@Slf4j
public class ScheduleExtensionServiceImpl implements ScheduleExtensionService {

    private final ScheduleExtensionRepository scheduleExtensionRepository;
    private final ScheduleExtensionCloseValidator validator;
    private final PropertiesConfig propertiesConfig;

    @Override
    @Transactional
    public CloseScheduleExtensionResponseDto closeScheduleExtensions(List<Long> scheduleExtensionIds) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return closeScheduleExtensionsV1(scheduleExtensionIds);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private CloseScheduleExtensionResponseDto closeScheduleExtensionsV1(List<Long> scheduleExtensionIds) {
        log.info("Start closeScheduleExtensionsV1 with {} extensions", scheduleExtensionIds.size());

        List<ScheduleExtensionClosedDto> successful = new ArrayList<>();
        List<ScheduleExtensionErrorDto> errors = new ArrayList<>();

        List<ScheduleExtensionEntity> extensions = scheduleExtensionRepository
                .findByIdInWithDetails(scheduleExtensionIds);

        for (Long extensionId : scheduleExtensionIds) {
            try {
                ScheduleExtensionEntity extension = extensions.stream()
                        .filter(e -> e.getId().equals(extensionId))
                        .findFirst()
                        .orElse(null);

                if (extension == null) {
                    errors.add(buildError(extensionId, "EXTENSION_NOT_FOUND", 
                            "La extensión de horario no existe"));
                    continue;
                }

                String validationError = validator.validate(extension);
                if (validationError != null) {
                    errors.add(buildError(extensionId, "VALIDATION_ERROR", validationError));
                    continue;
                }

                ZoneId zoneId = getZoneId(extension);
                LocalTime currentTime = LocalTime.now(zoneId);

                extension.setNewClosingTime(currentTime);
                extension.setLastModifyDate(LocalDateTime.now());
                extension.setLastModifyUser(PropertiesContext.getClientUser());
                extension.setLastModifyApplication(propertiesConfig.getApiName());
                extension.setLastModifyIp(PropertiesContext.getClientIp());

                scheduleExtensionRepository.save(extension);

                successful.add(buildSuccess(extension, currentTime));
                log.info("Extension {} closed successfully at {}", extensionId, currentTime);

            } catch (Exception e) {
                log.error("Error processing extension {}: {}", extensionId, e.getMessage(), e);
                errors.add(buildError(extensionId, "PROCESSING_ERROR", 
                        "Error inesperado al procesar la extensión: " + e.getMessage()));
            }
        }

        log.info("closeScheduleExtensionsV1 completed: {} successful, {} errors", 
                successful.size(), errors.size());

        return CloseScheduleExtensionResponseDto.builder()
                .totalProcessed(scheduleExtensionIds.size())
                .successCount(successful.size())
                .errorCount(errors.size())
                .successful(successful)
                .errors(errors)
                .build();
    }

    private ZoneId getZoneId(ScheduleExtensionEntity extension) {
        String timezone = extension.getSchedule().getCountry().getTimeZone();
        return timezone != null ? parseTimeZone(timezone) : ZoneId.systemDefault();
    }

    private ZoneId parseTimeZone(String timeZone) {
        try {
            if (!timeZone.startsWith("UTC")) {
                return ZoneId.of(timeZone);
            }

            String offset = timeZone.substring(3).split(" a ")[0].trim();

            if (offset.isEmpty()) {
                return ZoneId.of("UTC");
            }

            if (!offset.startsWith("+") && !offset.startsWith("-")) {
                offset = "+" + offset;
            }

            String sign = offset.substring(0, 1);
            String[] parts = offset.substring(1).split(":");
            int hours = Integer.parseInt(parts[0]);
            String minutes = parts.length > 1 ? parts[1] : "00";

            offset = String.format("%s%02d:%s", sign, hours, minutes);

            return ZoneId.of(offset);
        } catch (Exception e) {
            log.error("Error parsing timezone: {}", timeZone, e);
            return ZoneId.systemDefault();
        }
    }

    private ScheduleExtensionClosedDto buildSuccess(ScheduleExtensionEntity extension, LocalTime closedAt) {
        return ScheduleExtensionClosedDto.builder()
                .scheduleExtensionId(extension.getId())
                .participantName(extension.getParticipant().getName())
                .scheduleName(extension.getSchedule().getDescription())
                .closedAt(closedAt)
                .build();
    }

    private ScheduleExtensionErrorDto buildError(Long extensionId, String errorCode, String errorMessage) {
        return ScheduleExtensionErrorDto.builder()
                .scheduleExtensionId(extensionId)
                .errorCode(errorCode)
                .errorMessage(errorMessage)
                .build();
    }

}

```

## src/main/java/com/nubo/master/closure/process/rate/api/service/impl/SystemClosureServiceImpl.java

```java
package com.nubo.master.closure.process.rate.api.service.impl;

import com.nubo.master.closure.process.rate.api.application.properties.PropertiesConfig;
import com.nubo.master.closure.process.rate.api.application.properties.PropertiesContext;
import com.nubo.master.closure.process.rate.api.client.business.day.calculation.models.dto.response.BusinessDayOutDto;
import com.nubo.master.closure.process.rate.api.client.business.day.calculation.service.BusinessDayCalculationClient;
import com.nubo.master.closure.process.rate.api.exception.ServiceException;
import com.nubo.master.closure.process.rate.api.exception.error.ErrorCode;
import com.nubo.master.closure.process.rate.api.models.dto.response.SystemClosureResponseDto;
import com.nubo.master.closure.process.rate.api.models.entity.ClosureProcessEntity;
import com.nubo.master.closure.process.rate.api.models.entity.CountryEntity;
import com.nubo.master.closure.process.rate.api.models.entity.PreClosureCountryEntity;
import com.nubo.master.closure.process.rate.api.models.entity.StatusEntity;
import com.nubo.master.closure.process.rate.api.models.entity.SystemClosureEntity;
import com.nubo.master.closure.process.rate.api.models.enums.ClosureProcessStatusEnum;
import com.nubo.master.closure.process.rate.api.models.enums.SystemClosureMessageEnum;
import com.nubo.master.closure.process.rate.api.models.enums.VersionApiEnum;
import com.nubo.master.closure.process.rate.api.repository.ClosureProcessRepository;
import com.nubo.master.closure.process.rate.api.repository.CountryRepository;
import com.nubo.master.closure.process.rate.api.repository.PreClosureCountryRepository;
import com.nubo.master.closure.process.rate.api.repository.SystemClosureRepository;
import com.nubo.master.closure.process.rate.api.service.SystemClosureService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class SystemClosureServiceImpl implements SystemClosureService {

    private final SystemClosureRepository systemClosureRepository;
    private final PreClosureCountryRepository preClosureCountryRepository;
    private final ClosureProcessRepository closureProcessRepository;
    private final CountryRepository countryRepository;
    private final BusinessDayCalculationClient businessDayCalculationClient;
    private final PropertiesConfig propertiesConfig;

    @Override
    @Transactional
    public SystemClosureResponseDto closeSystemAndPrepareNext(boolean isManual, boolean execute) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return closeSystemAndPrepareNextV1(isManual, execute);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private SystemClosureResponseDto closeSystemAndPrepareNextV1(boolean isManual, boolean execute) {
        log.info("Starting system closure process - Mode: {}, Execute: {}",
                isManual ? "MANUAL" : "AUTOMATIC", execute);

        if (execute) {
            log.info("Executing system closure process");

            SystemClosureEntity currentSystemClosure = findTodaySystemClosure();
            completePreClosureCountries(currentSystemClosure);
            updateCurrentSystemClosureStatus(currentSystemClosure);

            List<CountryEntity> countries = getThreeCountries();

            createPreClosureCountries(countries, currentSystemClosure);

            updateAllClosureProcessStatus();

            log.info("System closure process completed successfully");

            return SystemClosureResponseDto.builder()
                    .message(SystemClosureMessageEnum.CLOSURE_EXECUTED_SUCCESSFULLY.getMessage())
                    .hasPendingProcesses(false)
                    .executed(true)
                    .build();
        }

        boolean hasPendingProcesses = checkForPendingPreClosureProcesses();

        if (!isManual && hasPendingProcesses) {
            log.error("Cannot automatically close the system because pre-closure processes have not been completed");
        }

        String message = hasPendingProcesses
                ? SystemClosureMessageEnum.PENDING_PROCESSES.getMessage()
                : SystemClosureMessageEnum.PROCESSES_COMPLETED.getMessage();

        log.info("Validation only - Pending processes: {}, Message: {}", hasPendingProcesses, message);

        return SystemClosureResponseDto.builder()
                .message(message)
                .hasPendingProcesses(hasPendingProcesses)
                .executed(false)
                .build();
    }

    private boolean checkForPendingPreClosureProcesses() {
        log.info("Checking for pending pre-closure processes");

        LocalDateTime today = LocalDate.now(ZoneOffset.UTC).atStartOfDay();

        SystemClosureEntity currentSystemClosure = systemClosureRepository
                .findByClosureDate(today);

        if (currentSystemClosure == null) {
            log.info("No system closure found for today, no pending processes");
            return false;
        }

        List<PreClosureCountryEntity> preClosureCountries = currentSystemClosure.getPreClosureCountries();

        if (preClosureCountries == null || preClosureCountries.isEmpty()) {
            log.info("No pre-closure countries found, no pending processes");
            return false;
        }

        boolean hasPending = preClosureCountries.stream()
                .anyMatch(preClosureCountry -> {
                    Long statusId = preClosureCountry.getStatus().getId();
                    return !statusId.equals(ClosureProcessStatusEnum.COMPLETED.getStatusId());
                });

        log.info("Pending pre-closure processes found: {}", hasPending);
        return hasPending;
    }

    private SystemClosureEntity findTodaySystemClosure() {
        log.info("Searching for today's system closure");

        LocalDateTime today = LocalDate.now(ZoneOffset.UTC).atStartOfDay();

        SystemClosureEntity systemClosure = systemClosureRepository
                .findByClosureDate(today);

        if (systemClosure == null) {
            log.error("No system closure found for today");
            throw new ServiceException(ErrorCode.SYSTEM_CLOSURE_NOT_FOUND, HttpStatus.NOT_FOUND);
        }

        log.info("Found system closure with id: {}", systemClosure.getId());

        return systemClosure;
    }

    private void completePreClosureCountries(SystemClosureEntity systemClosure) {
        log.info("Completing pre-closure countries for system closure id: {}", systemClosure.getId());

        List<PreClosureCountryEntity> preClosureCountries = systemClosure.getPreClosureCountries();

        if (preClosureCountries == null || preClosureCountries.isEmpty()) {
            log.warn("No pre-closure countries found for system closure id: {}", systemClosure.getId());
            return;
        }

        StatusEntity completedStatus = new StatusEntity();
        completedStatus.setId(ClosureProcessStatusEnum.COMPLETED.getStatusId());

        LocalDateTime currentTimestamp = ZonedDateTime.now(ZoneOffset.ofHours(-5)).toLocalDateTime();

        for (PreClosureCountryEntity preClosureCountry : preClosureCountries) {
            preClosureCountry.setStatus(completedStatus);
            preClosureCountry.setPreClosureDate(currentTimestamp);
            preClosureCountry.setLastModifyDate(currentTimestamp);
            preClosureCountry.setLastModifyUser(PropertiesContext.getClientUser());
            preClosureCountry.setLastModifyApplication(propertiesConfig.getApiName());
            preClosureCountry.setLastModifyIp(PropertiesContext.getClientIp());

            preClosureCountryRepository.save(preClosureCountry);
            log.info("Completed pre-closure country id: {} with pre-closure date: {}",
                    preClosureCountry.getId(), currentTimestamp);
        }

        log.info("All pre-closure countries completed successfully");
    }

    private void updateCurrentSystemClosureStatus(SystemClosureEntity systemClosure) {
        log.info("Updating current system closure status to 1157");

        StatusEntity closedStatus = new StatusEntity();
        closedStatus.setId(ClosureProcessStatusEnum.SYSTEM_CLOSED.getStatusId());

        LocalDateTime currentTimestamp = ZonedDateTime.now(ZoneOffset.ofHours(-5)).toLocalDateTime();

        systemClosure.setClosureStatus(closedStatus);
        systemClosure.setClosureDate(currentTimestamp);
        systemClosure.setLastModifyDate(currentTimestamp);
        systemClosure.setLastModifyUser(PropertiesContext.getClientUser());
        systemClosure.setLastModifyApplication(propertiesConfig.getApiName());
        systemClosure.setLastModifyIp(PropertiesContext.getClientIp());

        systemClosureRepository.save(systemClosure);
        log.info("Current system closure status updated successfully with closure date: {}", currentTimestamp);
    }

    private LocalDateTime calculateNextClosureDate(CountryEntity countryEntity) {

        BusinessDayOutDto businessDayOutDto = businessDayCalculationClient.businessNextDayCalculation(countryEntity.getId());

        LocalDateTime businessNextDay = businessDayOutDto.getBusinessNextDay().atStartOfDay();

        log.info("Calculated next closure date: {}", businessNextDay);

        return businessNextDay;
    }

    private SystemClosureEntity createNewSystemClosure(LocalDateTime closureDate) {
        log.info("Creating new system closure for date: {}", closureDate);

        LocalDateTime startDate = closureDate.toLocalDate().atStartOfDay();
        LocalDateTime endDate = closureDate.toLocalDate().plusDays(1).atStartOfDay();

        Optional<SystemClosureEntity> systemClosureEntityOptional = systemClosureRepository.findByClosureDate(startDate, endDate);

        if (systemClosureEntityOptional.isEmpty()) {
            StatusEntity initialStatus = new StatusEntity();
            initialStatus.setId(ClosureProcessStatusEnum.SYSTEM_INITIAL.getStatusId());

            SystemClosureEntity newSystemClosure = SystemClosureEntity.builder()
                    .closureDate(closureDate)
                    .closureStatus(initialStatus)
                    .closureUser(PropertiesContext.getClientUser())
                    .observation("Sistema preparado para el siguiente día de cierre")
                    .lastModifyUser(PropertiesContext.getClientUser())
                    .lastModifyApplication(propertiesConfig.getApiName())
                    .lastModifyDate(LocalDateTime.now())
                    .lastModifyIp(PropertiesContext.getClientIp())
                    .preClosureCountries(new ArrayList<>())
                    .build();

            newSystemClosure = systemClosureRepository.save(newSystemClosure);
            log.info("New system closure created with id: {}", newSystemClosure.getId());

            return newSystemClosure;
        } else {
            log.info("New system closure already exist");
        }
        return systemClosureEntityOptional.get();
    }

    private List<CountryEntity> getThreeCountries() {
        log.info("Fetching the three countries");

        List<String> countryCodes = List.of("CO", "CL", "PE");
        List<CountryEntity> countries = countryRepository.findByCodeIn(countryCodes);

        if (countries.size() != 3) {
            log.warn("Expected 3 countries but found {}", countries.size());
        }

        log.info("Found {} countries", countries.size());
        return countries;
    }

    private void createPreClosureCountries(List<CountryEntity> countries, SystemClosureEntity systemClosureEntity) {
        log.info("Creating pre-closure countries for {} countries", countries.size());

        LocalDateTime nextClosureDate = getSystemNextClosureDate(systemClosureEntity.getClosureDate());

        SystemClosureEntity systemClosure = createNewSystemClosure(nextClosureDate);
        log.info("Created single system closure with id: {} for date: {}", systemClosure.getId(), nextClosureDate);

        StatusEntity pendingStatus = new StatusEntity();
        pendingStatus.setId(ClosureProcessStatusEnum.PENDING.getStatusId());

        for (CountryEntity country : countries) {
            LocalDateTime preClosureDate = calculateNextClosureDate(country);

            LocalDateTime startDate = preClosureDate.toLocalDate().atStartOfDay();
            LocalDateTime endDate = preClosureDate.toLocalDate().plusDays(1).atStartOfDay();

            Optional<PreClosureCountryEntity> preClosureCountryEntity = preClosureCountryRepository.findByPreClosureDateAndCountryId(
                    startDate, endDate, country.getId());

            if (preClosureCountryEntity.isEmpty()) {
                if (nextClosureDate.toLocalDate().equals(preClosureDate.toLocalDate())) {
                    PreClosureCountryEntity preClosureCountry = PreClosureCountryEntity.builder()
                            .systemClosure(systemClosure)
                            .country(country)
                            .preClosureDate(preClosureDate)
                            .status(pendingStatus)
                            .lastModifyUser(PropertiesContext.getClientUser())
                            .lastModifyApplication(propertiesConfig.getApiName())
                            .lastModifyDate(LocalDateTime.now())
                            .lastModifyIp(PropertiesContext.getClientIp())
                            .build();

                    preClosureCountryRepository.save(preClosureCountry);

                    log.info("Created pre-closure country for country: {} ({}) with pre-closure date: {}",
                            country.getName(), country.getCode(), preClosureDate);
                } else {
                    log.info("Created pre-closure country not business day for country: {} ({}) with pre-closure date: {}",
                            country.getName(), country.getCode(), preClosureDate);
                }
            } else {
                log.info("Created pre-closure already exists for country: {} ({}) with pre-closure date: {}",
                        country.getName(), country.getCode(), preClosureDate);
            }
        }

        log.info("All pre-closure countries created successfully and linked to system closure id: {}", systemClosure.getId());
    }

    private LocalDateTime getSystemNextClosureDate(LocalDateTime closureDate) {
        BusinessDayOutDto businessDayOutDto = businessDayCalculationClient.businessNextDayCalculationClosureDate(closureDate);
        return businessDayOutDto.getBusinessNextDayClosureDate().atStartOfDay();
    }

    private void updateAllClosureProcessStatus() {
        log.info("Updating all closure processes to status 1152");

        List<ClosureProcessEntity> allProcesses = closureProcessRepository.findAll();

        StatusEntity withPendingRecordsStatus = new StatusEntity();
        withPendingRecordsStatus.setId(ClosureProcessStatusEnum.WITH_PENDING_RECORDS.getStatusId());

        int updatedCount = 0;
        for (ClosureProcessEntity process : allProcesses) {
            process.setStatus(withPendingRecordsStatus);
            process.setLastModifyDate(LocalDateTime.now());
            process.setLastModifyUser(PropertiesContext.getClientUser());
            process.setLastModifyApplication(propertiesConfig.getApiName());
            process.setLastModifyIp(PropertiesContext.getClientIp());

            closureProcessRepository.save(process);
            updatedCount++;
        }

        log.info("Updated {} closure processes to status 1152", updatedCount);
    }

}

```

## src/main/java/com/nubo/master/closure/process/rate/api/web/controller/ClosureProcessRestController.java

```java
package com.nubo.master.closure.process.rate.api.web.controller;

import java.util.List;
import java.util.Map;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nubo.master.closure.process.rate.api.models.dto.response.ClosureProcessOutDto;
import com.nubo.master.closure.process.rate.api.models.dto.response.PageResponseOutDto;
import com.nubo.master.closure.process.rate.api.service.ClosureProcessService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@Tag(name = "Closure Process")
@RestController
@RequestMapping("/{version}/closure-process")
@RequiredArgsConstructor
public class ClosureProcessRestController {

    private final ClosureProcessService closureProcessService;

    @Operation(summary = "Find all closure processes", description = "Find all closure processes filtered by country, module and status")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = PageResponseOutDto.class)))})
    @GetMapping
    public ResponseEntity<PageResponseOutDto<ClosureProcessOutDto>> findAllClosureProcess(
            @Parameter(example = "0")
            @RequestParam(defaultValue = "0") int page,
            @Parameter(example = "10")
            @RequestParam(defaultValue = "10") int size,
            @Parameter(example = "id")
            @RequestParam(defaultValue = "id") String sort,
            @Parameter(example = "asc")
            @RequestParam(defaultValue = "asc") String order,
            @Parameter(example = "false")
            @RequestParam(defaultValue = "false") boolean all,
            @Parameter(example = "1")
            @RequestParam(required = false) Long countryId,
            @Parameter(example = "1")
            @RequestParam(required = false) Long moduleId,
            @Parameter(example = "1")
            @RequestParam(required = false) Integer statusId) {
        return ResponseEntity.ok(closureProcessService.findAllClosureProcess(page, size, sort, order, all, countryId, moduleId, statusId));
    }

    @Operation(summary = "Execute script and update closure process", description = "Execute the SQL script stored in the closure process and update pending records and status")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Script executed and closure process updated successfully")})
    @PostMapping("/{closureProcessId}/execute")
    public ResponseEntity<Void> executeScript(
            @Parameter(description = "Closure process ID", example = "1")
            @PathVariable Long closureProcessId) {
        closureProcessService.executeScriptAndUpdateClosureProcess(closureProcessId);
        return ResponseEntity.ok().build();
    }

    @Operation(summary = "Get script execution results", description = "Execute the SQL script and return only the results without updating the closure process")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Script executed successfully",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE))})
    @GetMapping("/{closureProcessId}/results")
    public ResponseEntity<List<Map<String, Object>>> getScriptResults(
            @Parameter(description = "Closure process ID", example = "1")
            @PathVariable Long closureProcessId) {
        return ResponseEntity.ok(closureProcessService.executeScriptAndGetResults(closureProcessId));
    }

    @Operation(summary = "Execute scripts by country or all", description = "Execute all scripts for a specific country or all countries and update pre-closure status")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Scripts executed successfully")})
    @PostMapping("/execute-by-country")
    public ResponseEntity<Void> executeScriptsByCountry(
            @Parameter(description = "Country ID (optional)", example = "1")
            @RequestParam(required = false) Long countryId,
            @Parameter(description = "Execute all processes", example = "false")
            @RequestParam(defaultValue = "false") boolean all) {
        closureProcessService.executeScriptsByCountryOrAll(countryId, all);
        return ResponseEntity.ok().build();
    }

}

```

## src/main/java/com/nubo/master/closure/process/rate/api/web/controller/ScheduleExtensionRestController.java

```java
package com.nubo.master.closure.process.rate.api.web.controller;

import com.nubo.master.closure.process.rate.api.models.dto.request.CloseScheduleExtensionRequestDto;
import com.nubo.master.closure.process.rate.api.models.dto.response.CloseScheduleExtensionResponseDto;
import com.nubo.master.closure.process.rate.api.service.ScheduleExtensionService;
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
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "Schedule Extension", description = "Gestión de ampliaciones de horario")
@RestController
@RequestMapping("/{version}/schedule-extension")
@RequiredArgsConstructor
public class ScheduleExtensionRestController {

    private final ScheduleExtensionService scheduleExtensionService;

    @Operation(
        summary = "Cerrar anticipadamente ampliaciones de horario",
        description = "Permite cerrar una o múltiples ampliaciones de horario antes de que finalice el tiempo ampliado. " +
                "Solo aplica para extensiones en estado APROBADO, del mismo día, y donde la hora actual esté dentro del rango ampliado. " +
                "Actualiza la hora de cierre con la hora actual del cierre anticipado."
    )
    @ApiResponses(value = {
        @ApiResponse(
            responseCode = "200",
            description = "Proceso completado. Retorna resumen con éxitos y errores",
            content = @Content(
                mediaType = MediaType.APPLICATION_JSON_VALUE,
                schema = @Schema(implementation = CloseScheduleExtensionResponseDto.class)
            )
        ),
        @ApiResponse(responseCode = "400", description = "Request inválido"),
        @ApiResponse(responseCode = "500", description = "Error interno del servidor")
    })
    @PostMapping("/close")
    public ResponseEntity<CloseScheduleExtensionResponseDto> closeScheduleExtensions(
            @Valid @RequestBody CloseScheduleExtensionRequestDto request) {
        
        CloseScheduleExtensionResponseDto response = scheduleExtensionService
                .closeScheduleExtensions(request.getScheduleExtensionIds());
        
        return ResponseEntity.ok(response);
    }

}

```

## src/main/java/com/nubo/master/closure/process/rate/api/web/controller/SystemClosureRestController.java

```java
package com.nubo.master.closure.process.rate.api.web.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nubo.master.closure.process.rate.api.models.dto.response.SystemClosureResponseDto;
import com.nubo.master.closure.process.rate.api.service.SystemClosureService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@Tag(name = "System Closure")
@RestController
@RequestMapping("/{version}/system-closure")
@RequiredArgsConstructor
public class SystemClosureRestController {

    private final SystemClosureService systemClosureService;

    @Operation(
        summary = "Cerrar sistema y preparar siguiente", 
        description = "Valida o ejecuta el cierre del sistema. Si execute=false, valida si hay procesos pendientes. Si execute=true, cierra el system closure del día actual (estado 1157) y crea un nuevo system closure para el día siguiente (estado 1158) con pre-closure countries (estado 1154) para los 3 países. Actualiza todos los closure process a estado 1152."
    )
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "Operación realizada exitosamente"),
        @ApiResponse(responseCode = "404", description = "No se encontró el system closure del día actual"),
        @ApiResponse(responseCode = "500", description = "Error interno del servidor")
    })
    @PostMapping("/close-and-prepare")
    public ResponseEntity<SystemClosureResponseDto> closeSystemAndPrepareNext(
            @Parameter(description = "Indica si es invocación manual (true) o automática desde cron job (false)", example = "true", required = true)
            @RequestParam(name = "isManual", defaultValue = "true") boolean isManual,
            @Parameter(description = "Indica si debe ejecutar el cierre (true) o solo validar (false)", example = "false", required = true)
            @RequestParam(name = "execute", defaultValue = "false") boolean execute) {
        
        SystemClosureResponseDto response = systemClosureService.closeSystemAndPrepareNext(isManual, execute);
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
    url-business-day-calculation: ${NUBO_URL_BUSINESS_DAY_CALCULATION:aa}
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
  ____ _     ___  _   _ ____  _   _ ____  _____ ____  ____   ___   ____ _____ ____ ______     ___    _     ___ ____    _  _____ _____    _    ____ ___
 / ___| |   / _ \| | | / ___|| | | |  _ \| ____|  _ \|  _ \ / _ \ / ___| ____/ ___/ ___\ \   / / \  | |   |_ _|  _ \  / \|_   _| ____|  / \  |  _ \_ _|
| |   | |  | | | | | | \___ \| | | | |_) |  _| | |_) | |_) | | | | |   |  _| \___ \___ \\ \ / / _ \ | |    | || | | |/ _ \ | | |  _|   / _ \ | |_) | |
| |___| |__| |_| | |_| |___) | |_| |  _ <| |___|  __/|  _ <| |_| | |___| |___ ___) |__) |\ V / ___ \| |___ | || |_| / ___ \| | | |___ / ___ \|  __/| |
 \____|_____\___/ \___/|____/ \___/|_| \_\_____|_|   |_| \_\\___/ \____|_____|____/____/  \_/_/   \_\_____|___|____/_/   \_\_| |_____/_/   \_\_|  |___|
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
