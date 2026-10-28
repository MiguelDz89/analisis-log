# nbo-png-operaciones-reglas-back

Código fuente completo de producción y configuraciones. Captura local: 28/10/2026.

Incluye 100 archivos Java y 17 archivos de configuración, recursos y compilación.

Cada sección identifica la ruta original y contiene el archivo completo. Los Java conservan sus implementaciones, imports, anotaciones y comentarios. Se excluyen src/test, clases de prueba, resultados de compilación, librerías binarias y herramientas/perfiles de pruebas de rendimiento.

Credenciales literales ocultadas en configuraciones: 0. Las referencias a variables de entorno se conservan.

## Índice

1. `mvnw`
2. `mvnw.cmd`
3. `pom.xml`
4. `.mvn/wrapper/maven-wrapper.properties`
5. `src/main/resources/application-dev.yml`
6. `src/main/resources/application-local.yml`
7. `src/main/resources/application-prod.yml`
8. `src/main/resources/application-qa.yml`
9. `src/main/resources/application-uat.yml`
10. `src/main/resources/application.yml`
11. `src/main/resources/banner.txt`
12. `src/main/resources/log/JsonEventLayout_error.json`
13. `src/main/resources/log/JsonEventLayout_info.json`
14. `src/main/resources/log/JsonEventLayout_trace.json`
15. `src/main/resources/log/log4j2-prod.properties`
16. `src/main/resources/log/log4j2.properties`
17. `src/main/resources/script/SCRIPT_REGLAS_ESTADOS_OPERACIONES.sql`
18. `src/main/java/com/nubo/operations/rules/api/OperationsRulesApiApplication.java`
19. `src/main/java/com/nubo/operations/rules/api/application/annotations/ValidBigDecimal.java`
20. `src/main/java/com/nubo/operations/rules/api/application/config/CacheConfig.java`
21. `src/main/java/com/nubo/operations/rules/api/application/config/MetricsConfig.java`
22. `src/main/java/com/nubo/operations/rules/api/application/config/SwaggerConfig.java`
23. `src/main/java/com/nubo/operations/rules/api/application/config/ValidBigDecimalConfig.java`
24. `src/main/java/com/nubo/operations/rules/api/application/config/WebConfig.java`
25. `src/main/java/com/nubo/operations/rules/api/application/context/GlobalContext.java`
26. `src/main/java/com/nubo/operations/rules/api/application/database/NamingStrategyConfig.java`
27. `src/main/java/com/nubo/operations/rules/api/application/database/UpperNamingConfig.java`
28. `src/main/java/com/nubo/operations/rules/api/application/filters/GlobalFilter.java`
29. `src/main/java/com/nubo/operations/rules/api/application/interceptors/GlobalInterceptor.java`
30. `src/main/java/com/nubo/operations/rules/api/application/properties/PropertiesConfig.java`
31. `src/main/java/com/nubo/operations/rules/api/application/properties/PropertiesContext.java`
32. `src/main/java/com/nubo/operations/rules/api/application/util/ApplicationUtils.java`
33. `src/main/java/com/nubo/operations/rules/api/application/util/RestClientUtils.java`
34. `src/main/java/com/nubo/operations/rules/api/client/calculation/day/models/response/BusinessDayOutDto.java`
35. `src/main/java/com/nubo/operations/rules/api/client/calculation/day/service/BusinessDayCalculationClient.java`
36. `src/main/java/com/nubo/operations/rules/api/client/calculation/day/service/impl/BusinessDayCalculationClientImpl.java`
37. `src/main/java/com/nubo/operations/rules/api/client/status/models/dto/request/StatusValidationClientInDto.java`
38. `src/main/java/com/nubo/operations/rules/api/client/status/models/dto/response/BusinessRuleClientOutDto.java`
39. `src/main/java/com/nubo/operations/rules/api/client/status/models/dto/response/CountryClientOutDto.java`
40. `src/main/java/com/nubo/operations/rules/api/client/status/models/dto/response/StatusClientOutDto.java`
41. `src/main/java/com/nubo/operations/rules/api/client/status/models/dto/response/StatusTransitionClientOutDto.java`
42. `src/main/java/com/nubo/operations/rules/api/client/status/models/dto/response/StatusValidationClientOutDto.java`
43. `src/main/java/com/nubo/operations/rules/api/client/status/service/OperationStatusClient.java`
44. `src/main/java/com/nubo/operations/rules/api/client/status/service/impl/OperationStatusClientImpl.java`
45. `src/main/java/com/nubo/operations/rules/api/exception/ClientException.java`
46. `src/main/java/com/nubo/operations/rules/api/exception/ServiceException.java`
47. `src/main/java/com/nubo/operations/rules/api/exception/error/ErrorCode.java`
48. `src/main/java/com/nubo/operations/rules/api/exception/error/ErrorResponse.java`
49. `src/main/java/com/nubo/operations/rules/api/exception/error/ErrorValidation.java`
50. `src/main/java/com/nubo/operations/rules/api/exception/handler/GlobalExceptionHandler.java`
51. `src/main/java/com/nubo/operations/rules/api/helpers/MapperUtil.java`
52. `src/main/java/com/nubo/operations/rules/api/models/domain/BusinessRule.java`
53. `src/main/java/com/nubo/operations/rules/api/models/domain/InputFraction.java`
54. `src/main/java/com/nubo/operations/rules/api/models/domain/InputParticipant.java`
55. `src/main/java/com/nubo/operations/rules/api/models/domain/InputRule.java`
56. `src/main/java/com/nubo/operations/rules/api/models/domain/InputRuleSide.java`
57. `src/main/java/com/nubo/operations/rules/api/models/dto/request/BatchStatusUpdateTradeInDto.java`
58. `src/main/java/com/nubo/operations/rules/api/models/dto/request/BatchStatusUpdateTradeItemInDto.java`
59. `src/main/java/com/nubo/operations/rules/api/models/dto/request/BusinessRuleInDto.java`
60. `src/main/java/com/nubo/operations/rules/api/models/dto/request/FractionInDto.java`
61. `src/main/java/com/nubo/operations/rules/api/models/dto/request/ParticipantInDto.java`
62. `src/main/java/com/nubo/operations/rules/api/models/dto/request/StatusAllowedOptionsInDto.java`
63. `src/main/java/com/nubo/operations/rules/api/models/dto/request/StatusUpdateBusinessRuleInDto.java`
64. `src/main/java/com/nubo/operations/rules/api/models/dto/request/StatusUpdateSettlementInDto.java`
65. `src/main/java/com/nubo/operations/rules/api/models/dto/request/StatusUpdateTradeInDto.java`
66. `src/main/java/com/nubo/operations/rules/api/models/dto/response/ActionOutDto.java`
67. `src/main/java/com/nubo/operations/rules/api/models/dto/response/BatchStatusUpdateTradeItemOutDto.java`
68. `src/main/java/com/nubo/operations/rules/api/models/dto/response/BatchStatusUpdateTradeOutDto.java`
69. `src/main/java/com/nubo/operations/rules/api/models/dto/response/BusinessRuleCodeOutDto.java`
70. `src/main/java/com/nubo/operations/rules/api/models/dto/response/BusinessRuleOutDto.java`
71. `src/main/java/com/nubo/operations/rules/api/models/dto/response/CountryOutDto.java`
72. `src/main/java/com/nubo/operations/rules/api/models/dto/response/StatusAllowedOptionsOutDto.java`
73. `src/main/java/com/nubo/operations/rules/api/models/dto/response/StatusOutDto.java`
74. `src/main/java/com/nubo/operations/rules/api/models/dto/response/StatusUpdateBusinessRuleOutDto.java`
75. `src/main/java/com/nubo/operations/rules/api/models/dto/response/StatusUpdateSettlementOutDto.java`
76. `src/main/java/com/nubo/operations/rules/api/models/dto/response/StatusUpdateTradeOutDto.java`
77. `src/main/java/com/nubo/operations/rules/api/models/entity/BusinessRuleEntity.java`
78. `src/main/java/com/nubo/operations/rules/api/models/entity/BusinessRuleValidationEntity.java`
79. `src/main/java/com/nubo/operations/rules/api/models/entity/BusinessRuleValidationKey.java`
80. `src/main/java/com/nubo/operations/rules/api/models/entity/CountryEntity.java`
81. `src/main/java/com/nubo/operations/rules/api/models/entity/HolidayEntity.java`
82. `src/main/java/com/nubo/operations/rules/api/models/entity/ParticipantEntity.java`
83. `src/main/java/com/nubo/operations/rules/api/models/entity/ScheduleEntity.java`
84. `src/main/java/com/nubo/operations/rules/api/models/entity/ScheduleExtensionEntity.java`
85. `src/main/java/com/nubo/operations/rules/api/models/entity/SettlementEntity.java`
86. `src/main/java/com/nubo/operations/rules/api/models/entity/SettlementKey.java`
87. `src/main/java/com/nubo/operations/rules/api/models/entity/StatusActionBusinessRuleEntity.java`
88. `src/main/java/com/nubo/operations/rules/api/models/entity/StatusActionBusinessRuleKey.java`
89. `src/main/java/com/nubo/operations/rules/api/models/entity/StatusEntity.java`
90. `src/main/java/com/nubo/operations/rules/api/models/entity/TradeEntity.java`
91. `src/main/java/com/nubo/operations/rules/api/models/enums/BusinessRuleEnum.java`
92. `src/main/java/com/nubo/operations/rules/api/models/enums/BusinessRuleMessageEnum.java`
93. `src/main/java/com/nubo/operations/rules/api/models/enums/CategoryEnum.java`
94. `src/main/java/com/nubo/operations/rules/api/models/enums/PropertiesEnum.java`
95. `src/main/java/com/nubo/operations/rules/api/models/enums/SideEnum.java`
96. `src/main/java/com/nubo/operations/rules/api/models/enums/StatusEnum.java`
97. `src/main/java/com/nubo/operations/rules/api/models/enums/VersionApiEnum.java`
98. `src/main/java/com/nubo/operations/rules/api/repository/BusinessRuleRepository.java`
99. `src/main/java/com/nubo/operations/rules/api/repository/BusinessRuleValidationRepository.java`
100. `src/main/java/com/nubo/operations/rules/api/repository/CountryRepository.java`
101. `src/main/java/com/nubo/operations/rules/api/repository/HolidayRepository.java`
102. `src/main/java/com/nubo/operations/rules/api/repository/ScheduleExtensionRepository.java`
103. `src/main/java/com/nubo/operations/rules/api/repository/ScheduleRepository.java`
104. `src/main/java/com/nubo/operations/rules/api/repository/SettlementRepository.java`
105. `src/main/java/com/nubo/operations/rules/api/repository/StatusActionBusinessRuleRepository.java`
106. `src/main/java/com/nubo/operations/rules/api/repository/TradeRepository.java`
107. `src/main/java/com/nubo/operations/rules/api/service/OperationActionBusinessRuleService.java`
108. `src/main/java/com/nubo/operations/rules/api/service/OperationBusinessRuleService.java`
109. `src/main/java/com/nubo/operations/rules/api/service/RuleService.java`
110. `src/main/java/com/nubo/operations/rules/api/service/StatusUpdateBusinessRuleService.java`
111. `src/main/java/com/nubo/operations/rules/api/service/impl/OperationActionBusinessRuleServiceImpl.java`
112. `src/main/java/com/nubo/operations/rules/api/service/impl/OperationBusinessRuleServiceImpl.java`
113. `src/main/java/com/nubo/operations/rules/api/service/impl/RuleServiceImpl.java`
114. `src/main/java/com/nubo/operations/rules/api/service/impl/StatusUpdateBusinessRuleServiceImpl.java`
115. `src/main/java/com/nubo/operations/rules/api/web/controller/OperationActionBusinessRuleRestController.java`
116. `src/main/java/com/nubo/operations/rules/api/web/controller/OperationBusinessRuleRestController.java`
117. `src/main/java/com/nubo/operations/rules/api/web/controller/StatusUpdateBusinessRuleRestController.java`

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
# Apache Maven Wrapper startup batch script, version 3.3.4
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

scriptDir="$(dirname "$0")"
scriptName="$(basename "$0")"

# parse distributionUrl and optional distributionSha256Sum, requires .mvn/wrapper/maven-wrapper.properties
while IFS="=" read -r key value; do
  case "${key-}" in
  distributionUrl) distributionUrl=$(trim "${value-}") ;;
  distributionSha256Sum) distributionSha256Sum=$(trim "${value-}") ;;
  esac
done <"$scriptDir/.mvn/wrapper/maven-wrapper.properties"
[ -n "${distributionUrl-}" ] || die "cannot read distributionUrl property in $scriptDir/.mvn/wrapper/maven-wrapper.properties"

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
*) MVN_CMD="mvn${scriptName#mvnw}" _MVNW_REPO_PATTERN=/org/apache/maven/ ;;
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
    if echo "$distributionSha256Sum  $TMP_DOWNLOAD_DIR/$distributionUrlName" | sha256sum -c - >/dev/null 2>&1; then
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

# Find the actual extracted directory name (handles snapshots where filename != directory name)
actualDistributionDir=""

# First try the expected directory name (for regular distributions)
if [ -d "$TMP_DOWNLOAD_DIR/$distributionUrlNameMain" ]; then
  if [ -f "$TMP_DOWNLOAD_DIR/$distributionUrlNameMain/bin/$MVN_CMD" ]; then
    actualDistributionDir="$distributionUrlNameMain"
  fi
fi

# If not found, search for any directory with the Maven executable (for snapshots)
if [ -z "$actualDistributionDir" ]; then
  # enable globbing to iterate over items
  set +f
  for dir in "$TMP_DOWNLOAD_DIR"/*; do
    if [ -d "$dir" ]; then
      if [ -f "$dir/bin/$MVN_CMD" ]; then
        actualDistributionDir="$(basename "$dir")"
        break
      fi
    fi
  done
  set -f
fi

if [ -z "$actualDistributionDir" ]; then
  verbose "Contents of $TMP_DOWNLOAD_DIR:"
  verbose "$(ls -la "$TMP_DOWNLOAD_DIR")"
  die "Could not find Maven distribution directory in extracted archive"
fi

verbose "Found extracted Maven distribution directory: $actualDistributionDir"
printf %s\\n "$distributionUrl" >"$TMP_DOWNLOAD_DIR/$actualDistributionDir/mvnw.url"
mv -- "$TMP_DOWNLOAD_DIR/$actualDistributionDir" "$MAVEN_HOME" || [ -d "$MAVEN_HOME" ] || die "fail to move MAVEN_HOME"

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
@REM Apache Maven Wrapper startup batch script, version 3.3.4
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
@IF NOT "%__MVNW_CMD__%"=="" ("%__MVNW_CMD__%" %*)
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
  $MVNW_REPO_PATTERN = if ($USE_MVND -eq $False) { "/org/apache/maven/" } else { "/maven/mvnd/" }
  $distributionUrl = "$env:MVNW_REPOURL$MVNW_REPO_PATTERN$($distributionUrl -replace "^.*$MVNW_REPO_PATTERN",'')"
}
$distributionUrlName = $distributionUrl -replace '^.*/',''
$distributionUrlNameMain = $distributionUrlName -replace '\.[^.]*$','' -replace '-bin$',''

$MAVEN_M2_PATH = "$HOME/.m2"
if ($env:MAVEN_USER_HOME) {
  $MAVEN_M2_PATH = "$env:MAVEN_USER_HOME"
}

if (-not (Test-Path -Path $MAVEN_M2_PATH)) {
    New-Item -Path $MAVEN_M2_PATH -ItemType Directory | Out-Null
}

$MAVEN_WRAPPER_DISTS = $null
if ((Get-Item $MAVEN_M2_PATH).Target[0] -eq $null) {
  $MAVEN_WRAPPER_DISTS = "$MAVEN_M2_PATH/wrapper/dists"
} else {
  $MAVEN_WRAPPER_DISTS = (Get-Item $MAVEN_M2_PATH).Target[0] + "/wrapper/dists"
}

$MAVEN_HOME_PARENT = "$MAVEN_WRAPPER_DISTS/$distributionUrlNameMain"
$MAVEN_HOME_NAME = ([System.Security.Cryptography.SHA256]::Create().ComputeHash([byte[]][char[]]$distributionUrl) | ForEach-Object {$_.ToString("x2")}) -join ''
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

# Find the actual extracted directory name (handles snapshots where filename != directory name)
$actualDistributionDir = ""

# First try the expected directory name (for regular distributions)
$expectedPath = Join-Path "$TMP_DOWNLOAD_DIR" "$distributionUrlNameMain"
$expectedMvnPath = Join-Path "$expectedPath" "bin/$MVN_CMD"
if ((Test-Path -Path $expectedPath -PathType Container) -and (Test-Path -Path $expectedMvnPath -PathType Leaf)) {
  $actualDistributionDir = $distributionUrlNameMain
}

# If not found, search for any directory with the Maven executable (for snapshots)
if (!$actualDistributionDir) {
  Get-ChildItem -Path "$TMP_DOWNLOAD_DIR" -Directory | ForEach-Object {
    $testPath = Join-Path $_.FullName "bin/$MVN_CMD"
    if (Test-Path -Path $testPath -PathType Leaf) {
      $actualDistributionDir = $_.Name
    }
  }
}

if (!$actualDistributionDir) {
  Write-Error "Could not find Maven distribution directory in extracted archive"
}

Write-Verbose "Found extracted Maven distribution directory: $actualDistributionDir"
Rename-Item -Path "$TMP_DOWNLOAD_DIR/$actualDistributionDir" -NewName $MAVEN_HOME_NAME | Out-Null
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
        <version>4.1.1</version>
        <relativePath/>
    </parent>

    <groupId>com.nubo.operations.rules.api</groupId>
    <artifactId>operations-rules-api</artifactId>
    <version>0.55.6-rc.2</version>
    <name>${project.artifactId}</name>
    <description>Operations Rules Api</description>


    <properties>
        <java.version>21</java.version>
        <spring.port>8080</spring.port>
        <test.skip>false</test.skip>

        <datasource.url.application.name>ApplicationName=${project.artifactId}</datasource.url.application.name>
        <hikari.pool.name>${project.artifactId}-pool</hikari.pool.name>

        <!-- Security: Tomcat 11 -->
        <tomcat.version>11.0.25</tomcat.version>

        <!-- Security: Jackson 3 -->
        <jackson-bom.version>3.1.7</jackson-bom.version>

        <!-- Security: Jackson 2 legacy -->
        <jackson-2-bom.version>2.21.7</jackson-2-bom.version>

        <!-- Logging -->
        <log4j2.version>2.25.5</log4j2.version>
    </properties>


    <dependencies>

        <!-- Spring Boot core without default logging -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter</artifactId>
            <exclusions>
                <exclusion>
                    <groupId>org.springframework.boot</groupId>
                    <artifactId>spring-boot-starter-logging</artifactId>
                </exclusion>
            </exclusions>
        </dependency>

        <!-- Spring MVC / Tomcat 11 -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-webmvc</artifactId>
            <exclusions>
                <exclusion>
                    <groupId>org.springframework.boot</groupId>
                    <artifactId>spring-boot-starter-logging</artifactId>
                </exclusion>
            </exclusions>
        </dependency>

        <!-- JPA / Hibernate -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-jpa</artifactId>
        </dependency>

        <!-- PostgreSQL -->
        <dependency>
            <groupId>org.postgresql</groupId>
            <artifactId>postgresql</artifactId>
            <scope>runtime</scope>
        </dependency>

        <!-- Validation -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-validation</artifactId>
        </dependency>

        <!-- Swagger / Spring Boot 4 -->
        <dependency>
            <groupId>org.springdoc</groupId>
            <artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>
            <version>3.0.3</version>
        </dependency>

        <!-- Log4j2 -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-log4j2</artifactId>
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
            <scope>provided</scope>
        </dependency>

        <!-- MVEL -->
        <dependency>
            <groupId>org.mvel</groupId>
            <artifactId>mvel2</artifactId>
            <version>2.5.2.Final</version>
        </dependency>

        <!-- Actuator -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-actuator</artifactId>
        </dependency>

        <!-- AOP / AspectJ - Spring Boot 4 -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-aspectj</artifactId>
        </dependency>

        <!-- Micrometer -->
        <dependency>
            <groupId>io.micrometer</groupId>
            <artifactId>micrometer-core</artifactId>
        </dependency>

        <dependency>
            <groupId>io.micrometer</groupId>
            <artifactId>micrometer-registry-prometheus</artifactId>
        </dependency>

        <!-- Cache -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-cache</artifactId>
        </dependency>

        <dependency>
            <groupId>com.github.ben-manes.caffeine</groupId>
            <artifactId>caffeine</artifactId>
        </dependency>

        <!-- Apache Commons -->
        <dependency>
            <groupId>org.apache.commons</groupId>
            <artifactId>commons-lang3</artifactId>
        </dependency>

        <!-- Tests -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-webmvc-test</artifactId>
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

            <!-- Java 21 -->
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <configuration>
                    <release>${java.version}</release>
                    <parameters>true</parameters>
                </configuration>
            </plugin>

            <!-- Spring Boot -->
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

            <!-- Tests -->
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-surefire-plugin</artifactId>
                <configuration>
                    <skipTests>${test.skip}</skipTests>
                </configuration>
            </plugin>

            <!-- Coverage -->
            <plugin>
                <groupId>org.jacoco</groupId>
                <artifactId>jacoco-maven-plugin</artifactId>
                <version>0.8.15</version>

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
                                <exclude>**/OperationsRulesApiApplication.class</exclude>
                            </excludes>
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

## .mvn/wrapper/maven-wrapper.properties

```properties
wrapperVersion=3.3.4
distributionType=only-script
distributionUrl=https://repo.maven.apache.org/maven2/org/apache/maven/apache-maven/3.9.9/apache-maven-3.9.9-bin.zip

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
    com.nubo.operations.rules.api: INFO
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR
client:
  nubo:
    url-operations-status: ${NUBO_URL_OPERATION_STATUS}
    url-business-day-calculation: ${NUBO_URL_BUSINESS_DAY_CALCULATION}

```

## src/main/resources/application-local.yml

```yaml
server:
  port: 8082
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
    com.nubo.operations.rules.api: DEBUG
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR
client:
  nubo:
    url-operations-status: ${NUBO_URL_OPERATION_STATUS}
    url-business-day-calculation: ${NUBO_URL_BUSINESS_DAY_CALCULATION}

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
    com.nubo.operations.rules.api: INFO
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR
client:
  nubo:
    url-operations-status: ${NUBO_URL_OPERATION_STATUS}
    url-business-day-calculation: ${NUBO_URL_BUSINESS_DAY_CALCULATION}

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
    com.nubo.operations.rules.api: INFO
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR
client:
  nubo:
    url-operations-status: ${NUBO_URL_OPERATION_STATUS}
    url-business-day-calculation: ${NUBO_URL_BUSINESS_DAY_CALCULATION}

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
    com.nubo.operations.rules.api: INFO
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR
client:
  nubo:
    url-operations-status: ${NUBO_URL_OPERATION_STATUS}
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
  jpa:
    open-in-view: false
    properties:
      hibernate.jdbc.fetch_size: ${HIBERNATE_JDBC_FETCH_SIZE:200}
      hibernate.jdbc.batch_size: ${HIBERNATE_JDBC_BATCH_SIZE:50}
      hibernate.order_inserts: true
      hibernate.order_updates: true
      hibernate.default_batch_fetch_size: ${HIBERNATE_DEFAULT_BATCH_FETCH_SIZE:100}
server:
  servlet:
    context-path: /${spring.application.name}
  compression:
    enabled: true
    min-response-size: 2KB
  tomcat:
    threads:
      max: ${SERVER_TOMCAT_THREADS_MAX:800}
      min-spare: ${SERVER_TOMCAT_THREADS_MIN_SPARE:100}
    max-connections: ${SERVER_TOMCAT_MAX_CONNECTIONS:8192}
    accept-count: ${SERVER_TOMCAT_ACCEPT_COUNT:1000}
    connection-timeout: ${SERVER_TOMCAT_CONNECTION_TIMEOUT:2s}
    keep-alive-timeout: ${SERVER_TOMCAT_KEEP_ALIVE_TIMEOUT:20s}
application:
  version: @project.version@
  description: 'Documentation Endpoints'
  title: @project.description@
  group: ${spring.application.name}
  http:
    client:
      connect-timeout-ms: ${HTTP_CLIENT_CONNECT_TIMEOUT_MS:1000}
      read-timeout-ms: ${HTTP_CLIENT_READ_TIMEOUT_MS:2000}
  cache:
    maximum-size:
      long-lived: ${CACHE_LONG_LIVED_MAXIMUM_SIZE:10000}
      short-lived: ${CACHE_SHORT_LIVED_MAXIMUM_SIZE:5000}
    ttl-minutes:
      long-lived: ${CACHE_LONG_LIVED_TTL_MINUTES:30}
      short-lived: ${CACHE_SHORT_LIVED_TTL_MINUTES:10}
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
        include: health,info,metrics,prometheus
  metrics:
    enable:
      hikari: true
    distribution:
      percentiles-histogram:
        nubo.operations.rules.processing.duration: true
      slo:
        nubo.operations.rules.processing.duration: 50ms,100ms,250ms,500ms,1s,2s
```

## src/main/resources/banner.txt

```
 ,-----. ,------. ,------.,------.   ,---. ,--------.,--. ,-----. ,--.  ,--. ,---. ,------. ,--. ,--.,--.   ,------. ,---.   ,---.  ,------. ,--.
'  .-.  '|  .--. '|  .---'|  .--. ' /  O  \'--.  .--'|  |'  .-.  '|  ,'.|  |'   .-'|  .--. '|  | |  ||  |   |  .---''   .-' /  O  \ |  .--. '|  |
|  | |  ||  '--' ||  `--, |  '--'.'|  .-.  |  |  |   |  ||  | |  ||  |' '  |`.  `-.|  '--'.'|  | |  ||  |   |  `--, `.  `-.|  .-.  ||  '--' ||  |
'  '-'  '|  | --' |  `---.|  |\  \ |  | |  |  |  |   |  |'  '-'  '|  | `   |.-'    |  |\  \ '  '-'  '|  '--.|  `---..-'    |  | |  ||  | --' |  |
 `-----' `--'     `------'`--' '--'`--' `--'  `--'   `--' `-----' `--'  `--'`-----'`--' '--' `-----' `-----'`------'`-----'`--' `--'`--'     `--'

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

## src/main/resources/script/SCRIPT_REGLAS_ESTADOS_OPERACIONES.sql

```sql
------Creacion de las reglas ---

INSERT INTO "NUANBODB"."BUSINESS_RULE"(
 "BUSINESS_RULE_ID", "COUNTRY_ID", "CODE", "DESCRIPTION", "CATEGORY", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
VALUES(200, null, 'RULE_OPERATION_CORRECTION','Regla del proceso corrección asignación, operaciones Colombia','OPERACION', 'RULE_OPERATION_CORRECTION_BY_SIDE|RULE_OPERATION_CORRECTION_BY_FRACTION|RULE_OPERATION_CORRECTION_BY_FRACTION_CUSTODIAN', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."BUSINESS_RULE"(
 "BUSINESS_RULE_ID", "COUNTRY_ID", "CODE", "DESCRIPTION", "CATEGORY", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
VALUES(203, null, 'RULE_OPERATION_CORRECTION_BY_FRACTION','Regla del proceso corrección asignación por Fraccion, operaciones','OPERACION', null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."BUSINESS_RULE"(
 "BUSINESS_RULE_ID", "COUNTRY_ID", "CODE", "DESCRIPTION", "CATEGORY", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
VALUES(204, null, 'RULE_OPERATION_CORRECTION_BY_FRACTION_CUSTODIAN','Regla del proceso corrección asignación de los custodios de Fraccion, operaciones','OPERACION', null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

	INSERT INTO "NUANBODB"."BUSINESS_RULE_VALIDATION"(
	"BUSINESS_RULE_ID", "CODE", "RULE_VALIDATION", "MESSAGE_SUCCESS", "MESSAGE_ERROR", "DESCRIPTION", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (204, 'A', 'ruleService.validateCustodianStatusFractions(rule)', 'Validación exitosa', 'Existen procesos de custodia pendientes para la punta', 'El metodo validateCustodianStatusFractions permite validar el estado de los custodios de las fracciones', 'SYSTEM', 'SYSTEM', now(), 'IP_01');


INSERT INTO "NUANBODB"."BUSINESS_RULE"(
 "BUSINESS_RULE_ID", "COUNTRY_ID", "CODE", "DESCRIPTION", "CATEGORY", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
VALUES(205, null, 'RULE_OPERATION_CORRECTION_BY_SIDE','Regla del proceso corrección asignación por Punta, operaciones','OPERACION', null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

	--INSERT INTO "NUANBODB"."BUSINESS_RULE_VALIDATION"(
	--"BUSINESS_RULE_ID", "CODE", "RULE_VALIDATION", "MESSAGE_SUCCESS", "MESSAGE_ERROR", "DESCRIPTION", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	--VALUES (205, 'A', 'ruleService.validateScheduleByParticipant(ruleBySide.participant(), 41)', 'Validación exitosa', 'Fuera de horario para la corrección', 'Valida si el horario actual del país del participante se encuentra dentro del horario permitido para un proceso específico', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

	INSERT INTO "NUANBODB"."BUSINESS_RULE_VALIDATION"(
	"BUSINESS_RULE_ID", "CODE", "RULE_VALIDATION", "MESSAGE_SUCCESS", "MESSAGE_ERROR", "DESCRIPTION", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (205, 'B', 'rule.typeId == "60"', 'Validación exitosa', 'La operacion debe ser de tipo contado', 'typeId es de tipo Long, CONTADO(60), REPO(61)', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

	INSERT INTO "NUANBODB"."BUSINESS_RULE_VALIDATION"(
	"BUSINESS_RULE_ID", "CODE", "RULE_VALIDATION", "MESSAGE_SUCCESS", "MESSAGE_ERROR", "DESCRIPTION", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (205, 'C', 'rule.countryCode == "CO"', 'Validación exitosa', 'La operacion debe ser de Colombia', 'countryCode es de tipo String, Colombia(CO) Peru(PE) Chile(CL)', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

	INSERT INTO "NUANBODB"."BUSINESS_RULE_VALIDATION"(
	"BUSINESS_RULE_ID", "CODE", "RULE_VALIDATION", "MESSAGE_SUCCESS", "MESSAGE_ERROR", "DESCRIPTION", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (205, 'D', 'ruleService.isTodayWithinBusinessDaysRange(rule.countryCode, rule.clearingDate, 10)', 'Validación exitosa', 'Fuera del período válido para correcciones (10 días hábiles)', 'Valida si la fecha de hoy se encuentra dentro del rango de días hábiles desde una fecha inicial isTodayWithinBusinessDaysRange(countryCode, initialDate, businessDays)', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

	INSERT INTO "NUANBODB"."BUSINESS_RULE_VALIDATION"(
	"BUSINESS_RULE_ID", "CODE", "RULE_VALIDATION", "MESSAGE_SUCCESS", "MESSAGE_ERROR", "DESCRIPTION", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (205, 'E', 'ruleService.validateStatus(rule, ruleBySide.statusId)', 'Validación exitosa', 'El estado de la punta NO permite correccion', 'El metodo validateStatus permite validar el estado', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

	INSERT INTO "NUANBODB"."BUSINESS_RULE_VALIDATION"(
	"BUSINESS_RULE_ID", "CODE", "RULE_VALIDATION", "MESSAGE_SUCCESS", "MESSAGE_ERROR", "DESCRIPTION", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (205, 'F', 'ruleBySide.sourceQuoteType != "121"', 'Validación exitosa', 'La operacion NO debe ser de tipo Origen posicion propia', 'sourceQuoteType es de tipo Long, POSICION_PROPIA(121)', 'SYSTEM', 'SYSTEM', now(), 'IP_01');



INSERT INTO "NUANBODB"."BUSINESS_RULE"(
 "BUSINESS_RULE_ID", "COUNTRY_ID", "CODE", "DESCRIPTION", "CATEGORY", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
VALUES(206, NULL, 'RULE_OPERATION_CORRECTION_ALLOWED_DAYS','Días hábiles corrección operaciones (número)','OPERACION','100', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."BUSINESS_RULE"(
 "BUSINESS_RULE_ID", "COUNTRY_ID", "CODE", "DESCRIPTION", "CATEGORY", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
VALUES(207, NULL, 'RULE_OPERATION_CORRECTION_CUSTODIAN','Cuando es custodio no puede corregir operación (permite editar=true, no permite editar=false)','OPERACION','false', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."BUSINESS_RULE"(
 "BUSINESS_RULE_ID", "COUNTRY_ID", "CODE", "DESCRIPTION", "CATEGORY", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
VALUES(208, NULL, 'RULE_OPERATION_CORRECTION_SPECIAL_FIDUCIARY','Si la cuenta del inversionista del tipo de cuenta es (TYPE_ID=23, portafolio)','OPERACION','23', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."BUSINESS_RULE"(
 "BUSINESS_RULE_ID", "COUNTRY_ID", "CODE", "DESCRIPTION", "CATEGORY", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
VALUES(210, NULL, 'RULE_OPERATION_CORRECTION_MAXIMUM_FRACTION_LIMIT','Límite máximo de fracciones en la correccion de operaciones (número)','OPERACION','99', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."BUSINESS_RULE"(
 "BUSINESS_RULE_ID", "COUNTRY_ID", "CODE", "DESCRIPTION", "CATEGORY", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
VALUES(211, NULL, 'RULE_OPERATION_ASSIGNMENT_MAXIMUM_FRACTION_LIMIT','Límite máximo de fracciones en la asignación de operaciones (número)','OPERACION','99', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."BUSINESS_RULE"(
 "BUSINESS_RULE_ID", "COUNTRY_ID", "CODE", "DESCRIPTION", "CATEGORY", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
VALUES(214, 37, 'RULE_OPERATION_CORRECTION_DEPOSIT', 'Regla para enviar correcciones al deposito, Colombia', 'OPERACION', 'false', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."BUSINESS_RULE"(
 "BUSINESS_RULE_ID", "COUNTRY_ID", "CODE", "DESCRIPTION", "CATEGORY", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
VALUES(215, null, 'RULE_OPERATION_SETTLEMENT_FILE', 'Regla para generar archivo liquida', 'OPERACION', '', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."BUSINESS_RULE"(
 "BUSINESS_RULE_ID", "COUNTRY_ID", "CODE", "DESCRIPTION", "CATEGORY", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
VALUES(216, null, 'RULE_OPERATION_PREPAYMENT_BY_SIDE', 'Regla para cambio de estados de anticipos, operacion por folio', 'OPERACION', '', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

	INSERT INTO "NUANBODB"."BUSINESS_RULE_VALIDATION"(
	"BUSINESS_RULE_ID", "CODE", "RULE_VALIDATION", "MESSAGE_SUCCESS", "MESSAGE_ERROR", "DESCRIPTION", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (216, 'A', 'ruleService.validateStatus(rule, rule.statusId)', 'Validación exitosa', 'El estado del folio NO es valido', 'El metodo validateStatus permite validar el estado permitido', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."BUSINESS_RULE"(
 "BUSINESS_RULE_ID", "COUNTRY_ID", "CODE", "DESCRIPTION", "CATEGORY", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
VALUES(217, null, 'RULE_OPERATION_PREPAYMENT', 'Regla para cambio de estados de anticipos, operacion por folio', 'OPERACION', 'RULE_OPERATION_PREPAYMENT_BY_SIDE', 'SYSTEM', 'SYSTEM', now(), 'IP_01');


----
INSERT INTO "NUANBODB"."BUSINESS_RULE"(
 "BUSINESS_RULE_ID", "COUNTRY_ID", "CODE", "DESCRIPTION", "CATEGORY", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
VALUES(221, 35, 'RULE_OPERATION_CYCLE_1_SUBMISSION_BY_SIDE','Regla para en Envio de Ciclo 1, Chile','OPERACION',null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

	INSERT INTO "NUANBODB"."BUSINESS_RULE_VALIDATION"(
	"BUSINESS_RULE_ID", "CODE", "RULE_VALIDATION", "MESSAGE_SUCCESS", "MESSAGE_ERROR", "DESCRIPTION", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (221, 'A', 'rule.typeId == "59" || rule.typeId == "60" || rule.typeId == "61"', 'Validación exitosa', 'Para envio ciclo 1, la operacion debe ser de tipo; contado, repo o OTC.', 'typeId es de tipo Long', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

	INSERT INTO "NUANBODB"."BUSINESS_RULE_VALIDATION"(
	"BUSINESS_RULE_ID", "CODE", "RULE_VALIDATION", "MESSAGE_SUCCESS", "MESSAGE_ERROR", "DESCRIPTION", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (221, 'B', 'ruleBySideSell.participant.countryCode == "CL"', 'Validación exitosa', 'Para envio ciclo 1, el participante de la punta de venta debe ser Chileno.', 'countryCode es de tipo String', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

	INSERT INTO "NUANBODB"."BUSINESS_RULE_VALIDATION"(
	"BUSINESS_RULE_ID", "CODE", "RULE_VALIDATION", "MESSAGE_SUCCESS", "MESSAGE_ERROR", "DESCRIPTION", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (221, 'C', 'ruleBySideSell.enteringFirm != null', 'Validación exitosa', 'Para envio ciclo 1, el operador directo tiene que estar poblado', 'enteringFirmSell es de tipo Long', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

	INSERT INTO "NUANBODB"."BUSINESS_RULE_VALIDATION"(
	"BUSINESS_RULE_ID", "CODE", "RULE_VALIDATION", "MESSAGE_SUCCESS", "MESSAGE_ERROR", "DESCRIPTION", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (221, 'D', 'ruleService.validateStatus(rule, ruleBySide.statusId)', 'Validación exitosa', 'El estado de la punta NO permite envio de Ciclo 1', 'El metodo validateStatus permite validar el estado', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

--

INSERT INTO "NUANBODB"."BUSINESS_RULE"(
 "BUSINESS_RULE_ID", "COUNTRY_ID", "CODE", "DESCRIPTION", "CATEGORY", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
VALUES(224, 35, 'RULE_OPERATION_CYCLE_3_SUBMISSION_BY_SIDE','Regla para en Envio de Ciclo 3, Chile','OPERACION',null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

	INSERT INTO "NUANBODB"."BUSINESS_RULE_VALIDATION"(
	"BUSINESS_RULE_ID", "CODE", "RULE_VALIDATION", "MESSAGE_SUCCESS", "MESSAGE_ERROR", "DESCRIPTION", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (224, 'A', 'rule.typeId == "59" || rule.typeId == "60" || rule.typeId == "61"', 'Validación exitosa', 'Para envio ciclo 3, la operacion debe ser de tipo; contado, repo o OTC.', 'typeId es de tipo Long', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

	INSERT INTO "NUANBODB"."BUSINESS_RULE_VALIDATION"(
	"BUSINESS_RULE_ID", "CODE", "RULE_VALIDATION", "MESSAGE_SUCCESS", "MESSAGE_ERROR", "DESCRIPTION", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (224, 'B', 'ruleBySideBuy.participant.countryCode == "CL"', 'Validación exitosa', 'Para envio ciclo 3, el participante de la punta de compra debe ser Chileno.', 'countryCode es de tipo String', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

	INSERT INTO "NUANBODB"."BUSINESS_RULE_VALIDATION"(
	"BUSINESS_RULE_ID", "CODE", "RULE_VALIDATION", "MESSAGE_SUCCESS", "MESSAGE_ERROR", "DESCRIPTION", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (224, 'C', 'ruleBySideBuy.enteringFirm != null', 'Validación exitosa', 'Para envio ciclo 3, el operador directo tiene que estar poblado', 'enteringFirmBuy es de tipo Long', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

	INSERT INTO "NUANBODB"."BUSINESS_RULE_VALIDATION"(
	"BUSINESS_RULE_ID", "CODE", "RULE_VALIDATION", "MESSAGE_SUCCESS", "MESSAGE_ERROR", "DESCRIPTION", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (224, 'D', 'ruleService.validateStatus(rule, ruleBySide.statusId)', 'Validación exitosa', 'El estado de la punta NO permite envio de Ciclo 3', 'El metodo validateStatus permite validar el estado', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

--

INSERT INTO "NUANBODB"."BUSINESS_RULE"(
 "BUSINESS_RULE_ID", "COUNTRY_ID", "CODE", "DESCRIPTION", "CATEGORY", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
VALUES(226, NULL, 'RULE_OPERATION_TRANSITION_1','Regla vacia de transicion de estados de Operacion','OPERACION',null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

----
INSERT INTO "NUANBODB"."BUSINESS_RULE"(
 "BUSINESS_RULE_ID", "COUNTRY_ID", "CODE", "DESCRIPTION", "CATEGORY", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
VALUES(227, NULL, 'RULE_ASSIGNMENT_REASSIGNMENT_BY_SIDE','Regla para activar el proceso de Asignacion y Reasignacion de Operacion','OPERACION', null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

	INSERT INTO "NUANBODB"."BUSINESS_RULE_VALIDATION"(
	"BUSINESS_RULE_ID", "CODE", "RULE_VALIDATION", "MESSAGE_SUCCESS", "MESSAGE_ERROR", "DESCRIPTION", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (227, 'A', 'rule.matchDate <= ruleService.currentDateByCountry(rule.countryCode)', 'Validación exitosa', 'La fecha de registro no permite asignacion', 'matchDate es de tipo LocalDate', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

	INSERT INTO "NUANBODB"."BUSINESS_RULE_VALIDATION"(
	"BUSINESS_RULE_ID", "CODE", "RULE_VALIDATION", "MESSAGE_SUCCESS", "MESSAGE_ERROR", "DESCRIPTION", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (227, 'B', 'rule.clearingDate >= ruleService.currentDateByCountry(rule.countryCode)', 'Validación exitosa', 'La fecha de cumplimiento no permite asignacion', 'clearingDate es de tipo LocalDate', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

	INSERT INTO "NUANBODB"."BUSINESS_RULE_VALIDATION"(
	"BUSINESS_RULE_ID", "CODE", "RULE_VALIDATION", "MESSAGE_SUCCESS", "MESSAGE_ERROR", "DESCRIPTION", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (227, 'C', 'rule.typeId == "60" || rule.typeId == "61"', 'Validación exitosa', 'El tipo de operacion debe ser CONTADO o REPO', 'typeId es de tipo Long, CONTADO(60), REPO(61)', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

	INSERT INTO "NUANBODB"."BUSINESS_RULE_VALIDATION"(
	"BUSINESS_RULE_ID", "CODE", "RULE_VALIDATION", "MESSAGE_SUCCESS", "MESSAGE_ERROR", "DESCRIPTION", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (227, 'D', 'ruleService.validateStatus(rule, ruleBySide.statusId)', 'Validación exitosa', 'El estado de la punta NO permite generar asignación', 'El metodo validateStatus permite validar el estado', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

---
INSERT INTO "NUANBODB"."BUSINESS_RULE"(
 "BUSINESS_RULE_ID", "COUNTRY_ID", "CODE", "DESCRIPTION", "CATEGORY", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
VALUES(228, NULL, 'RULE_ASSIGNMENT','Regla de proceso Asignacion de Operacion','OPERACION', 'RULE_ASSIGNMENT_BY_FOLIO|RULE_ASSIGNMENT_BY_SIDE|RULE_ASSIGNMENT_BY_FRACTION|RULE_ASSIGNMENT_BY_FRACTION_CUSTODIAN', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

---
INSERT INTO "NUANBODB"."BUSINESS_RULE"(
 "BUSINESS_RULE_ID", "COUNTRY_ID", "CODE", "DESCRIPTION", "CATEGORY", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
VALUES(229, NULL, 'RULE_REASSIGNMENT','Regla de proceso Reasignacion de Operacion','OPERACION', 'RULE_ASSIGNMENT_BY_FOLIO|RULE_REASSIGNMENT_BY_SIDE|RULE_ASSIGNMENT_BY_FRACTION|RULE_REASSIGNMENT_BY_FRACTION_CUSTODIAN', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."BUSINESS_RULE"(
 "BUSINESS_RULE_ID", "COUNTRY_ID", "CODE", "DESCRIPTION", "CATEGORY", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
VALUES(230, NULL, 'RULE_ASSIGNMENT_BY_SIDE','Regla de proceso Asignacion de la punta, Operacion','OPERACION', '', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

	--INSERT INTO "NUANBODB"."BUSINESS_RULE_VALIDATION"(
	--"BUSINESS_RULE_ID", "CODE", "RULE_VALIDATION", "MESSAGE_SUCCESS", "MESSAGE_ERROR", "DESCRIPTION", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	--VALUES (230, 'A', 'ruleService.validateScheduleByParticipant(ruleBySide.participant(), 39)', 'Validación exitosa', 'Fuera de horario para la asignacion', 'Valida si el horario actual del país del participante se encuentra dentro del horario permitido para un proceso específico', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

	INSERT INTO "NUANBODB"."BUSINESS_RULE_VALIDATION"(
	"BUSINESS_RULE_ID", "CODE", "RULE_VALIDATION", "MESSAGE_SUCCESS", "MESSAGE_ERROR", "DESCRIPTION", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (230, 'B', 'rule.clearingDate >= ruleService.currentDateByCountry(rule.countryCode)', 'Validación exitosa', 'La fecha de cumplimiento no permite asignacion', 'clearingDate es de tipo LocalDate', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

	INSERT INTO "NUANBODB"."BUSINESS_RULE_VALIDATION"(
	"BUSINESS_RULE_ID", "CODE", "RULE_VALIDATION", "MESSAGE_SUCCESS", "MESSAGE_ERROR", "DESCRIPTION", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (230, 'C', 'ruleService.validateStatus(rule, ruleBySide.statusId)', 'Validación exitosa', 'El estado de la punta NO permite generar asignación', 'El metodo validateStatus permite validar el estado', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

	INSERT INTO "NUANBODB"."BUSINESS_RULE_VALIDATION"(
	"BUSINESS_RULE_ID", "CODE", "RULE_VALIDATION", "MESSAGE_SUCCESS", "MESSAGE_ERROR", "DESCRIPTION", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (230, 'D', 'ruleBySide.assignmentMark == false', 'Validación exitosa', 'La punta ya ha sido asignada', 'assignmentMark es Boolean', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."BUSINESS_RULE"(
 "BUSINESS_RULE_ID", "COUNTRY_ID", "CODE", "DESCRIPTION", "CATEGORY", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
VALUES(231, NULL, 'RULE_ASSIGNMENT_BY_FOLIO','Regla de proceso Asignacion del folio, Operacion','OPERACION', '', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

	INSERT INTO "NUANBODB"."BUSINESS_RULE_VALIDATION"(
	"BUSINESS_RULE_ID", "CODE", "RULE_VALIDATION", "MESSAGE_SUCCESS", "MESSAGE_ERROR", "DESCRIPTION", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (231, 'A', 'ruleService.validateStatus(rule, rule.statusId)', 'Validación exitosa', 'El estado de alguna de las puntas NO permite actualizar el estado del folio', 'El metodo validateStatus permite validar el estado permitido', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

	INSERT INTO "NUANBODB"."BUSINESS_RULE_VALIDATION"(
	"BUSINESS_RULE_ID", "CODE", "RULE_VALIDATION", "MESSAGE_SUCCESS", "MESSAGE_ERROR", "DESCRIPTION", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (231, 'B', 'ruleService.validateBuyAndSellStatus("RULE_ASSIGNMENT_BY_FOLIO_STATUS_SIDE", ruleBySideBuy.statusId, ruleBySideSell.statusId)', 'Validación exitosa', 'El estado de alguna de las puntas NO permite actualizar el estado del folio', 'El metodo validateBuyAndSellStatus permite validar si el estado de cada punta es permitido', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."BUSINESS_RULE"(
 "BUSINESS_RULE_ID", "COUNTRY_ID", "CODE", "DESCRIPTION", "CATEGORY", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
VALUES(232, NULL, 'RULE_ASSIGNMENT_BY_FRACTION','Regla de proceso Asignacion de la fraccion, Operacion','OPERACION', '', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."BUSINESS_RULE"(
 "BUSINESS_RULE_ID", "COUNTRY_ID", "CODE", "DESCRIPTION", "CATEGORY", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
VALUES(233, NULL, 'RULE_REASSIGNMENT_BY_SIDE','Regla de proceso Reasignacion de la punta, Operacion','OPERACION', '', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

	--INSERT INTO "NUANBODB"."BUSINESS_RULE_VALIDATION"(
	--"BUSINESS_RULE_ID", "CODE", "RULE_VALIDATION", "MESSAGE_SUCCESS", "MESSAGE_ERROR", "DESCRIPTION", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	--VALUES (233, 'A', 'ruleService.validateScheduleByParticipant(ruleBySide.participant(), 39)', 'Validación exitosa', 'Fuera de horario para la reasignacion', 'Valida si el horario actual del país del participante se encuentra dentro del horario permitido para un proceso específico', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

	INSERT INTO "NUANBODB"."BUSINESS_RULE_VALIDATION"(
	"BUSINESS_RULE_ID", "CODE", "RULE_VALIDATION", "MESSAGE_SUCCESS", "MESSAGE_ERROR", "DESCRIPTION", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (233, 'B', 'rule.clearingDate >= ruleService.currentDateByCountry(rule.countryCode)', 'Validación exitosa', 'La fecha de cumplimiento no permite Reasignacion', 'clearingDate es de tipo LocalDate', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

	INSERT INTO "NUANBODB"."BUSINESS_RULE_VALIDATION"(
	"BUSINESS_RULE_ID", "CODE", "RULE_VALIDATION", "MESSAGE_SUCCESS", "MESSAGE_ERROR", "DESCRIPTION", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (233, 'C', 'ruleService.validateStatus(rule, ruleBySide.statusId)', 'Validación exitosa', 'El estado de la punta no permite generar reasignación', 'El metodo validateStatus permite validar el estado', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."BUSINESS_RULE"(
 "BUSINESS_RULE_ID", "COUNTRY_ID", "CODE", "DESCRIPTION", "CATEGORY", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
VALUES(234, NULL, 'RULE_ASSIGNMENT_BY_FOLIO_STATUS_SIDE','Regla de proceso Asignacion del folio, estados de las punta, Operacion','OPERACION', '', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."BUSINESS_RULE"(
 "BUSINESS_RULE_ID", "COUNTRY_ID", "CODE", "DESCRIPTION", "CATEGORY", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
VALUES(235, NULL, 'RULE_FINAL_ASSIGNMENT_BY_SIDE','Regla de proceso Asignacion Definitiva de la punta, Operacion','OPERACION', '', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

	--INSERT INTO "NUANBODB"."BUSINESS_RULE_VALIDATION"(
	--"BUSINESS_RULE_ID", "CODE", "RULE_VALIDATION", "MESSAGE_SUCCESS", "MESSAGE_ERROR", "DESCRIPTION", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	--VALUES (235, 'A', 'ruleService.validateScheduleByParticipant(ruleBySide.participant(), 40)', 'Validación exitosa', 'Fuera de horario para la asignacion definitiva', 'Valida si el horario actual del país del participante se encuentra dentro del horario permitido para un proceso específico', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

	INSERT INTO "NUANBODB"."BUSINESS_RULE_VALIDATION"(
	"BUSINESS_RULE_ID", "CODE", "RULE_VALIDATION", "MESSAGE_SUCCESS", "MESSAGE_ERROR", "DESCRIPTION", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (235, 'B', 'ruleService.validateStatus(rule, ruleBySide.statusId)', 'Validación exitosa', 'El estado de la punta no permite Asignacion Definitiva', 'El metodo validateStatus permite validar el estado', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

	INSERT INTO "NUANBODB"."BUSINESS_RULE_VALIDATION"(
	"BUSINESS_RULE_ID", "CODE", "RULE_VALIDATION", "MESSAGE_SUCCESS", "MESSAGE_ERROR", "DESCRIPTION", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (235, 'C', 'rule.clearingDate >= ruleService.currentDateByCountry(rule.countryCode)', 'Validación exitosa', 'La fecha de cumplimiento no permite envío a CCP', 'clearingDate es de tipo LocalDate', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."BUSINESS_RULE"(
 "BUSINESS_RULE_ID", "COUNTRY_ID", "CODE", "DESCRIPTION", "CATEGORY", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
VALUES(236, NULL, 'RULE_FINAL_ASSIGNMENT_BY_FRACTION','Regla de proceso Asignacion Definitiva de la Fraccion, Operacion','OPERACION', '', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

	INSERT INTO "NUANBODB"."BUSINESS_RULE_VALIDATION"(
	"BUSINESS_RULE_ID", "CODE", "RULE_VALIDATION", "MESSAGE_SUCCESS", "MESSAGE_ERROR", "DESCRIPTION", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (236, 'A', 'ruleBySide.assignmentMark == true', 'Validación exitosa', 'La punta no ha sido asignada', 'assignmentMark es Boolean', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."BUSINESS_RULE"(
 "BUSINESS_RULE_ID", "COUNTRY_ID", "CODE", "DESCRIPTION", "CATEGORY", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
VALUES(237, NULL, 'RULE_FINAL_ASSIGNMENT','Regla de proceso Asignacion Definitiva, Operacion','OPERACION', 'RULE_FINAL_ASSIGNMENT_BY_SIDE|RULE_FINAL_ASSIGNMENT_BY_FRACTION|RULE_FINAL_ASSIGNMENT_BY_FRACTION_CUSTODIAN', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."BUSINESS_RULE"(
 "BUSINESS_RULE_ID", "COUNTRY_ID", "CODE", "DESCRIPTION", "CATEGORY", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
VALUES(238, NULL, 'RULE_FINAL_ASSIGNMENT_BY_FRACTION_CUSTODIAN','Regla de proceso Asignacion Definitiva de los custodios de Fraccion, Operacion','OPERACION', '', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

	INSERT INTO "NUANBODB"."BUSINESS_RULE_VALIDATION"(
	"BUSINESS_RULE_ID", "CODE", "RULE_VALIDATION", "MESSAGE_SUCCESS", "MESSAGE_ERROR", "DESCRIPTION", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (238, 'A', 'ruleService.validateCustodianStatusFractions(rule)', 'Validación exitosa', 'Existen procesos de custodia pendientes para la punta', 'El metodo validateCustodianStatusFractions permite validar el estado de los custodios de las fracciones', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."BUSINESS_RULE"(
 "BUSINESS_RULE_ID", "COUNTRY_ID", "CODE", "DESCRIPTION", "CATEGORY", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
VALUES(239, NULL, 'RULE_ASSIGNMENT_BY_FRACTION_CUSTODIAN','Regla de proceso Asignacion de los custodios de Fraccion, Operacion','OPERACION', '', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."BUSINESS_RULE"(
 "BUSINESS_RULE_ID", "COUNTRY_ID", "CODE", "DESCRIPTION", "CATEGORY", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
VALUES(240, NULL, 'RULE_REASSIGNMENT_BY_FRACTION_CUSTODIAN','Regla de proceso Reasignacion de los custodios de Fraccion, Operacion','OPERACION', '', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."BUSINESS_RULE"(
 "BUSINESS_RULE_ID", "COUNTRY_ID", "CODE", "DESCRIPTION", "CATEGORY", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
VALUES(241, NULL, 'RULE_CUSTODIAN_TRANSFER','Regla de proceso Traslado de custodios, Operacion','OPERACION', 'RULE_CUSTODIAN_TRANSFER_BY_FRACTION|RULE_CUSTODIAN_TRANSFER_BY_FRACTION_CUSTODIAN', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."BUSINESS_RULE"(
 "BUSINESS_RULE_ID", "COUNTRY_ID", "CODE", "DESCRIPTION", "CATEGORY", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
VALUES(242, NULL, 'RULE_CUSTODIAN_TRANSFER_BY_FRACTION','Regla de proceso Traslado de custodios en fracciones, Operacion','OPERACION', '', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

	INSERT INTO "NUANBODB"."BUSINESS_RULE_VALIDATION"(
	"BUSINESS_RULE_ID", "CODE", "RULE_VALIDATION", "MESSAGE_SUCCESS", "MESSAGE_ERROR", "DESCRIPTION", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (242, 'B', 'ruleService.validateStatus(rule, rule.statusId)', 'Validación exitosa', 'El estado de la fraccion no permite proceso de Custodio', 'El metodo validateStatus permite validar el estado', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

	INSERT INTO "NUANBODB"."BUSINESS_RULE_VALIDATION"(
	"BUSINESS_RULE_ID", "CODE", "RULE_VALIDATION", "MESSAGE_SUCCESS", "MESSAGE_ERROR", "DESCRIPTION", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (242, 'A', 'rule.clearingDate >= ruleService.currentDateByCountry(rule.countryCode)', 'Validación exitosa', 'La fecha de cumplimiento no permite proceso de Custodio', 'clearingDate es de tipo LocalDate', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."BUSINESS_RULE"(
 "BUSINESS_RULE_ID", "COUNTRY_ID", "CODE", "DESCRIPTION", "CATEGORY", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
VALUES(243, NULL, 'RULE_CUSTODIAN_TRANSFER_BY_FRACTION_CUSTODIAN','Regla de proceso Traslado de custodios en fracciones, Operacion','OPERACION', '', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

	INSERT INTO "NUANBODB"."BUSINESS_RULE_VALIDATION"(
	"BUSINESS_RULE_ID", "CODE", "RULE_VALIDATION", "MESSAGE_SUCCESS", "MESSAGE_ERROR", "DESCRIPTION", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (243, 'A', 'rule.custodianStatusId == null || ruleService.validateStatus(rule, rule.custodianStatusId)', 'Validación exitosa', 'El estado del custodio de la fraccion no permite Trasladar', 'El metodo validateStatus permite validar el estado', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."BUSINESS_RULE"(
 "BUSINESS_RULE_ID", "COUNTRY_ID", "CODE", "DESCRIPTION", "CATEGORY", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
VALUES(244, NULL, 'RULE_CUSTODIAN_PREMATCH','Regla de proceso Pre-Match de custodios, Operacion','OPERACION', 'RULE_CUSTODIAN_TRANSFER_BY_FRACTION|RULE_CUSTODIAN_PREMATCH_BY_FRACTION_CUSTODIAN', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."BUSINESS_RULE"(
 "BUSINESS_RULE_ID", "COUNTRY_ID", "CODE", "DESCRIPTION", "CATEGORY", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
VALUES(245, NULL, 'RULE_CUSTODIAN_PREMATCH_BY_FRACTION_CUSTODIAN','Regla de proceso Pre-Match de custodios en fracciones, Operacion','OPERACION', '', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

	INSERT INTO "NUANBODB"."BUSINESS_RULE_VALIDATION"(
	"BUSINESS_RULE_ID", "CODE", "RULE_VALIDATION", "MESSAGE_SUCCESS", "MESSAGE_ERROR", "DESCRIPTION", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (245, 'A', 'ruleService.validateStatus(rule, rule.custodianStatusId)', 'Validación exitosa', 'El estado del custodio de la fraccion no permite Pre-Match', 'El metodo validateStatus permite validar el estado', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."BUSINESS_RULE"(
 "BUSINESS_RULE_ID", "COUNTRY_ID", "CODE", "DESCRIPTION", "CATEGORY", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
VALUES(246, NULL, 'RULE_CUSTODIAN_ACCEPT','Regla de proceso Admisión de custodios, Operacion','OPERACION', 'RULE_CUSTODIAN_TRANSFER_BY_FRACTION|RULE_CUSTODIAN_ACCEPT_BY_FRACTION_CUSTODIAN', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."BUSINESS_RULE"(
 "BUSINESS_RULE_ID", "COUNTRY_ID", "CODE", "DESCRIPTION", "CATEGORY", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
VALUES(247, NULL, 'RULE_CUSTODIAN_ACCEPT_BY_FRACTION_CUSTODIAN','Regla de proceso Admisión de custodios en fracciones, Operacion','OPERACION', '', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

	INSERT INTO "NUANBODB"."BUSINESS_RULE_VALIDATION"(
	"BUSINESS_RULE_ID", "CODE", "RULE_VALIDATION", "MESSAGE_SUCCESS", "MESSAGE_ERROR", "DESCRIPTION", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (247, 'A', 'ruleService.validateStatus(rule, rule.custodianStatusId)', 'Validación exitosa', 'El estado del custodio de la fraccion no permite Admisión', 'El metodo validateStatus permite validar el estado', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."BUSINESS_RULE"(
 "BUSINESS_RULE_ID", "COUNTRY_ID", "CODE", "DESCRIPTION", "CATEGORY", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
VALUES(248, NULL, 'RULE_CUSTODIAN_REJECT','Regla de proceso Rechazo de custodios, Operacion','OPERACION', 'RULE_CUSTODIAN_TRANSFER_BY_FRACTION|RULE_CUSTODIAN_REJECT_BY_FRACTION_CUSTODIAN', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."BUSINESS_RULE"(
 "BUSINESS_RULE_ID", "COUNTRY_ID", "CODE", "DESCRIPTION", "CATEGORY", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
VALUES(249, NULL, 'RULE_CUSTODIAN_REJECT_BY_FRACTION_CUSTODIAN','Regla de proceso Rechazo de custodios en fracciones, Operacion','OPERACION', '', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

	INSERT INTO "NUANBODB"."BUSINESS_RULE_VALIDATION"(
	"BUSINESS_RULE_ID", "CODE", "RULE_VALIDATION", "MESSAGE_SUCCESS", "MESSAGE_ERROR", "DESCRIPTION", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (249, 'A', 'ruleService.validateStatus(rule, rule.custodianStatusId)', 'Validación exitosa', 'El estado del custodio de la fraccion no permite Rechazo', 'El metodo validateStatus permite validar el estado', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

---
INSERT INTO "NUANBODB"."BUSINESS_RULE"(
 "BUSINESS_RULE_ID", "COUNTRY_ID", "CODE", "DESCRIPTION", "CATEGORY", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
VALUES(250, NULL, 'RULE_ASSIGNMENT_OWN_POSITION','Regla de proceso Asignacion posición propia de Operacion','OPERACION', 'RULE_ASSIGNMENT_BY_FOLIO|RULE_ASSIGNMENT_OWN_POSITION_BY_SIDE|RULE_ASSIGNMENT_OWN_POSITION_BY_FRACTION', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."BUSINESS_RULE"(
 "BUSINESS_RULE_ID", "COUNTRY_ID", "CODE", "DESCRIPTION", "CATEGORY", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
VALUES(251, NULL, 'RULE_ASSIGNMENT_OWN_POSITION_BY_SIDE','Regla de proceso Asignacion posición propia de la punta, Operacion','OPERACION', '', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

	--INSERT INTO "NUANBODB"."BUSINESS_RULE_VALIDATION"(
	--"BUSINESS_RULE_ID", "CODE", "RULE_VALIDATION", "MESSAGE_SUCCESS", "MESSAGE_ERROR", "DESCRIPTION", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	--VALUES (251, 'A', 'ruleService.validateScheduleByParticipant(ruleBySide.participant(), 39)', 'Validación exitosa', 'Fuera de horario para la asignacion', 'Valida si el horario actual del país del participante se encuentra dentro del horario permitido para un proceso específico', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

	INSERT INTO "NUANBODB"."BUSINESS_RULE_VALIDATION"(
	"BUSINESS_RULE_ID", "CODE", "RULE_VALIDATION", "MESSAGE_SUCCESS", "MESSAGE_ERROR", "DESCRIPTION", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (251, 'B', 'rule.clearingDate >= ruleService.currentDateByCountry(rule.countryCode)', 'Validación exitosa', 'La fecha de cumplimiento no permite asignacion', 'clearingDate es de tipo LocalDate', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

	INSERT INTO "NUANBODB"."BUSINESS_RULE_VALIDATION"(
	"BUSINESS_RULE_ID", "CODE", "RULE_VALIDATION", "MESSAGE_SUCCESS", "MESSAGE_ERROR", "DESCRIPTION", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (251, 'C', 'ruleService.validateStatus(rule, ruleBySide.statusId)', 'Validación exitosa', 'El estado de la punta NO permite generar asignación', 'El metodo validateStatus permite validar el estado', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

	INSERT INTO "NUANBODB"."BUSINESS_RULE_VALIDATION"(
	"BUSINESS_RULE_ID", "CODE", "RULE_VALIDATION", "MESSAGE_SUCCESS", "MESSAGE_ERROR", "DESCRIPTION", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (251, 'D', 'ruleBySide.assignmentMark == false', 'Validación exitosa', 'La punta ya ha sido asignada', 'assignmentMark es Boolean', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

	INSERT INTO "NUANBODB"."BUSINESS_RULE_VALIDATION"(
	"BUSINESS_RULE_ID", "CODE", "RULE_VALIDATION", "MESSAGE_SUCCESS", "MESSAGE_ERROR", "DESCRIPTION", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (251, 'E', 'ruleBySide.sourceQuoteType == "121"', 'Validación exitosa', 'La punta no es de tipo posición propia', 'sourceQuoteType es de tipo Long, POSICION_PROPIA(121)', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."BUSINESS_RULE"(
 "BUSINESS_RULE_ID", "COUNTRY_ID", "CODE", "DESCRIPTION", "CATEGORY", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
VALUES(252, NULL, 'RULE_ASSIGNMENT_OWN_POSITION_BY_FRACTION','Regla de proceso Asignacion de la fraccion, Operacion','OPERACION', '', 'SYSTEM', 'SYSTEM', now(), 'IP_01');

--STATUS ACTION

INSERT INTO "NUANBODB"."STATUS_ACTION_BUSINESS_RULE"("BUSINESS_RULE_ID", "STATUS_ID", "DESCRIPTION", "VALID", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (214, 7, 'Estado SI permite que la Correccion sea enviado al Deposito, Operacion', true, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

---

INSERT INTO "NUANBODB"."STATUS_ACTION_BUSINESS_RULE"("BUSINESS_RULE_ID", "STATUS_ID", "DESCRIPTION", "VALID", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (204, 1074, 'El estado del custodio SI permite generar Correccion Asignacion, Operacion', true, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

---

INSERT INTO "NUANBODB"."STATUS_ACTION_BUSINESS_RULE"("BUSINESS_RULE_ID", "STATUS_ID", "DESCRIPTION", "VALID", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (205, 15, 'Estado SI permite Correccion Asignacion, Operacion', true, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_ACTION_BUSINESS_RULE"("BUSINESS_RULE_ID", "STATUS_ID", "DESCRIPTION", "VALID", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (205, 9, 'Estado SI permite Correccion Asignacion, Operacion', true, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_ACTION_BUSINESS_RULE"("BUSINESS_RULE_ID", "STATUS_ID", "DESCRIPTION", "VALID", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (205, 10, 'Estado SI permite Correccion Asignacion, Operacion', true, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

---
INSERT INTO "NUANBODB"."STATUS_ACTION_BUSINESS_RULE"("BUSINESS_RULE_ID", "STATUS_ID", "DESCRIPTION", "VALID", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (216, 1, 'El estado del folio NO permite generar anticipos, Operacion', false, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_ACTION_BUSINESS_RULE"("BUSINESS_RULE_ID", "STATUS_ID", "DESCRIPTION", "VALID", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (216, 2, 'El estado del folio SI permite generar anticipos, Operacion', true, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

---
INSERT INTO "NUANBODB"."STATUS_ACTION_BUSINESS_RULE"("BUSINESS_RULE_ID", "STATUS_ID", "DESCRIPTION", "VALID", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (221, 1, 'Estado SI permite Envio de Ciclo 1, Operacion', true, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_ACTION_BUSINESS_RULE"("BUSINESS_RULE_ID", "STATUS_ID", "DESCRIPTION", "VALID", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (221, 2, 'Estado NO permite Envio de Ciclo 1, Operacion', false, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_ACTION_BUSINESS_RULE"("BUSINESS_RULE_ID", "STATUS_ID", "DESCRIPTION", "VALID", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (221, 7, 'Estado NO permite Envio de Ciclo 1, Operacion', false, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_ACTION_BUSINESS_RULE"("BUSINESS_RULE_ID", "STATUS_ID", "DESCRIPTION", "VALID", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (221, 9, 'Estado NO permite Envio de Ciclo 1, Operacion', false, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_ACTION_BUSINESS_RULE"("BUSINESS_RULE_ID", "STATUS_ID", "DESCRIPTION", "VALID", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (221, 10, 'Estado NO permite Envio de Ciclo 1, Operacion', false, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_ACTION_BUSINESS_RULE"("BUSINESS_RULE_ID", "STATUS_ID", "DESCRIPTION", "VALID", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (221, 11, 'Estado NO permite Envio de Ciclo 1, Operacion', false, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

---
INSERT INTO "NUANBODB"."STATUS_ACTION_BUSINESS_RULE"("BUSINESS_RULE_ID", "STATUS_ID", "DESCRIPTION", "VALID", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (224, 1, 'Estado SI permite Envio de Ciclo 3, Operacion', true, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_ACTION_BUSINESS_RULE"("BUSINESS_RULE_ID", "STATUS_ID", "DESCRIPTION", "VALID", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (224, 2, 'Estado NO permite Envio de Ciclo 3, Operacion', false, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_ACTION_BUSINESS_RULE"("BUSINESS_RULE_ID", "STATUS_ID", "DESCRIPTION", "VALID", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (224, 7, 'Estado NO permite Envio de Ciclo 3, Operacion', false, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_ACTION_BUSINESS_RULE"("BUSINESS_RULE_ID", "STATUS_ID", "DESCRIPTION", "VALID", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (224, 9, 'Estado NO permite Envio de Ciclo 3, Operacion', false, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_ACTION_BUSINESS_RULE"("BUSINESS_RULE_ID", "STATUS_ID", "DESCRIPTION", "VALID", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (224, 10, 'Estado NO permite Envio de Ciclo 3, Operacion', false, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_ACTION_BUSINESS_RULE"("BUSINESS_RULE_ID", "STATUS_ID", "DESCRIPTION", "VALID", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (224, 11, 'Estado NO permite Envio de Ciclo 3, Operacion', false, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

---
INSERT INTO "NUANBODB"."STATUS_ACTION_BUSINESS_RULE"("BUSINESS_RULE_ID", "STATUS_ID", "DESCRIPTION", "VALID", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (215, 1, 'Estado SI permite generar archivo liquida, Operacion', true, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_ACTION_BUSINESS_RULE"("BUSINESS_RULE_ID", "STATUS_ID", "DESCRIPTION", "VALID", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (215, 2, 'Estado SI permite generar archivo liquida, Operacion', true, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_ACTION_BUSINESS_RULE"("BUSINESS_RULE_ID", "STATUS_ID", "DESCRIPTION", "VALID", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (215, 7, 'Estado SI permite generar archivo liquida, Operacion', true, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_ACTION_BUSINESS_RULE"("BUSINESS_RULE_ID", "STATUS_ID", "DESCRIPTION", "VALID", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (215, 9, 'Estado SI permite generar archivo liquida, Operacion', true, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_ACTION_BUSINESS_RULE"("BUSINESS_RULE_ID", "STATUS_ID", "DESCRIPTION", "VALID", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (215, 10, 'Estado SI permite generar archivo liquida, Operacion', true, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_ACTION_BUSINESS_RULE"("BUSINESS_RULE_ID", "STATUS_ID", "DESCRIPTION", "VALID", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (215, 11, 'Estado NO permite generar archivo liquida, Operacion', false, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_ACTION_BUSINESS_RULE"("BUSINESS_RULE_ID", "STATUS_ID", "DESCRIPTION", "VALID", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (215, 13, 'Estado NO permite generar archivo liquida, Operacion', false, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_ACTION_BUSINESS_RULE"("BUSINESS_RULE_ID", "STATUS_ID", "DESCRIPTION", "VALID", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (215, 14, 'Estado SI permite generar archivo liquida, Operacion', true, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_ACTION_BUSINESS_RULE"("BUSINESS_RULE_ID", "STATUS_ID", "DESCRIPTION", "VALID", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (215, 15, 'Estado SI permite generar archivo liquida, Operacion', true, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_ACTION_BUSINESS_RULE"("BUSINESS_RULE_ID", "STATUS_ID", "DESCRIPTION", "VALID", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (215, 16, 'Estado SI permite generar archivo liquida, Operacion', true, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

---
INSERT INTO "NUANBODB"."STATUS_ACTION_BUSINESS_RULE"("BUSINESS_RULE_ID", "STATUS_ID", "DESCRIPTION", "VALID", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (227, 1, 'El estado de la punta SI permite generar asignación/reasignación, Operacion', true, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_ACTION_BUSINESS_RULE"("BUSINESS_RULE_ID", "STATUS_ID", "DESCRIPTION", "VALID", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (227, 2, 'El estado de la punta SI permite generar asignación/reasignación, Operacion', true, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_ACTION_BUSINESS_RULE"("BUSINESS_RULE_ID", "STATUS_ID", "DESCRIPTION", "VALID", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (227, 16, 'El estado de la punta SI permite generar asignación/reasignación, Operacion', true, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

---
INSERT INTO "NUANBODB"."STATUS_ACTION_BUSINESS_RULE"("BUSINESS_RULE_ID", "STATUS_ID", "DESCRIPTION", "VALID", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (230, 1, 'El estado de la punta SI permite generar asignación, Operacion', true, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

----
INSERT INTO "NUANBODB"."STATUS_ACTION_BUSINESS_RULE"("BUSINESS_RULE_ID", "STATUS_ID", "DESCRIPTION", "VALID", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (231, 1, 'El estado del folio SI permite generar asignación, Operacion', true, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

----
INSERT INTO "NUANBODB"."STATUS_ACTION_BUSINESS_RULE"("BUSINESS_RULE_ID", "STATUS_ID", "DESCRIPTION", "VALID", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (232, 1, 'El estado de la fraccion SI permite generar asignación, Operacion', true, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_ACTION_BUSINESS_RULE"("BUSINESS_RULE_ID", "STATUS_ID", "DESCRIPTION", "VALID", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (232, 2, 'El estado de la fraccion SI permite generar asignación, Operacion', true, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_ACTION_BUSINESS_RULE"("BUSINESS_RULE_ID", "STATUS_ID", "DESCRIPTION", "VALID", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (232, 15, 'El estado de la fraccion SI permite generar asignación, Operacion', true, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_ACTION_BUSINESS_RULE"("BUSINESS_RULE_ID", "STATUS_ID", "DESCRIPTION", "VALID", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (232, 16, 'El estado de la fraccion SI permite generar asignación, Operacion', true, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

-----
INSERT INTO "NUANBODB"."STATUS_ACTION_BUSINESS_RULE"("BUSINESS_RULE_ID", "STATUS_ID", "DESCRIPTION", "VALID", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (233, 2, 'El estado de la punta SI permite generar reasignación, Operacion', true, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_ACTION_BUSINESS_RULE"("BUSINESS_RULE_ID", "STATUS_ID", "DESCRIPTION", "VALID", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (233, 16, 'El estado de la punta SI permite generar reasignación, Operacion', true, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

-----
INSERT INTO "NUANBODB"."STATUS_ACTION_BUSINESS_RULE"("BUSINESS_RULE_ID", "STATUS_ID", "DESCRIPTION", "VALID", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (234, 2, 'El estado de la punta SI permite generar asignación, Operacion', true, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_ACTION_BUSINESS_RULE"("BUSINESS_RULE_ID", "STATUS_ID", "DESCRIPTION", "VALID", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (234, 14, 'El estado de la punta SI permite generar asignación, Operacion', true, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_ACTION_BUSINESS_RULE"("BUSINESS_RULE_ID", "STATUS_ID", "DESCRIPTION", "VALID", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (234, 15, 'El estado de la punta SI permite generar asignación, Operacion', true, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_ACTION_BUSINESS_RULE"("BUSINESS_RULE_ID", "STATUS_ID", "DESCRIPTION", "VALID", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (234, 16, 'El estado de la punta SI permite generar asignación, Operacion', true, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

---

INSERT INTO "NUANBODB"."STATUS_ACTION_BUSINESS_RULE"("BUSINESS_RULE_ID", "STATUS_ID", "DESCRIPTION", "VALID", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (235, 2, 'El estado de la punta SI permite generar asignación definitiva, Operacion', true, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_ACTION_BUSINESS_RULE"("BUSINESS_RULE_ID", "STATUS_ID", "DESCRIPTION", "VALID", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (235, 16, 'El estado de la punta SI permite generar asignación definitiva, Operacion', true, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

----
INSERT INTO "NUANBODB"."STATUS_ACTION_BUSINESS_RULE"("BUSINESS_RULE_ID", "STATUS_ID", "DESCRIPTION", "VALID", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (236, 2, 'El estado de la Fraccion SI permite generar asignación definitiva, Operacion', true, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_ACTION_BUSINESS_RULE"("BUSINESS_RULE_ID", "STATUS_ID", "DESCRIPTION", "VALID", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (236, 16, 'El estado de la Fraccion SI permite generar asignación definitiva, Operacion', true, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

-----
INSERT INTO "NUANBODB"."STATUS_ACTION_BUSINESS_RULE"("BUSINESS_RULE_ID", "STATUS_ID", "DESCRIPTION", "VALID", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (238, 1073, 'El estado del custodio SI permite generar asignación definitiva, Operacion', true, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_ACTION_BUSINESS_RULE"("BUSINESS_RULE_ID", "STATUS_ID", "DESCRIPTION", "VALID", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (238, 1074, 'El estado del custodio SI permite generar asignación definitiva, Operacion', true, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

---
INSERT INTO "NUANBODB"."STATUS_ACTION_BUSINESS_RULE"("BUSINESS_RULE_ID", "STATUS_ID", "DESCRIPTION", "VALID", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (240, 1074, 'El estado del custodio SI permite generar Reasignación, Operacion', true, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

-----
INSERT INTO "NUANBODB"."STATUS_ACTION_BUSINESS_RULE"("BUSINESS_RULE_ID", "STATUS_ID", "DESCRIPTION", "VALID", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (242, 2, 'El estado de la fraccion SI permite Trasladar custodio, Operacion', true, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_ACTION_BUSINESS_RULE"("BUSINESS_RULE_ID", "STATUS_ID", "DESCRIPTION", "VALID", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (242, 16, 'El estado de la fraccion SI permite Trasladar custodio, Operacion', true, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

------
INSERT INTO "NUANBODB"."STATUS_ACTION_BUSINESS_RULE"("BUSINESS_RULE_ID", "STATUS_ID", "DESCRIPTION", "VALID", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (243, 1074, 'El estado del custodio de la fraccion SI permite Trasladar custodio, Operacion', true, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

-----
INSERT INTO "NUANBODB"."STATUS_ACTION_BUSINESS_RULE"("BUSINESS_RULE_ID", "STATUS_ID", "DESCRIPTION", "VALID", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (245, 1071, 'El estado del custodio de la fraccion SI permite Pre-Match custodio, Operacion', true, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

-----
INSERT INTO "NUANBODB"."STATUS_ACTION_BUSINESS_RULE"("BUSINESS_RULE_ID", "STATUS_ID", "DESCRIPTION", "VALID", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (247, 1071, 'El estado del custodio de la fraccion SI permite admisión custodio, Operacion', true, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_ACTION_BUSINESS_RULE"("BUSINESS_RULE_ID", "STATUS_ID", "DESCRIPTION", "VALID", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (247, 1072, 'El estado del custodio de la fraccion SI permite admisión custodio, Operacion', true, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

------
INSERT INTO "NUANBODB"."STATUS_ACTION_BUSINESS_RULE"("BUSINESS_RULE_ID", "STATUS_ID", "DESCRIPTION", "VALID", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (249, 1071, 'El estado del custodio de la fraccion SI permite Rechazar custodio, Operacion', true, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_ACTION_BUSINESS_RULE"("BUSINESS_RULE_ID", "STATUS_ID", "DESCRIPTION", "VALID", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (249, 1072, 'El estado del custodio de la fraccion SI permite Rechazar custodio, Operacion', true, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_ACTION_BUSINESS_RULE"("BUSINESS_RULE_ID", "STATUS_ID", "DESCRIPTION", "VALID", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (249, 1073, 'El estado del custodio de la fraccion SI permite Rechazar custodio, Operacion', true, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

---
INSERT INTO "NUANBODB"."STATUS_ACTION_BUSINESS_RULE"("BUSINESS_RULE_ID", "STATUS_ID", "DESCRIPTION", "VALID", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (251, 1, 'El estado de la punta SI permite generar asignación, Operacion', true, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_ACTION_BUSINESS_RULE"("BUSINESS_RULE_ID", "STATUS_ID", "DESCRIPTION", "VALID", "VALUE", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (252, 1, 'El estado de la fraccion SI permite generar asignación, Operacion', true, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');


------Creacion Transiciones de Estados OPERACION---

INSERT INTO "NUANBODB"."STATUS_TRANSITION"("STATUS_TRANSITION_ID", "ORIGIN_STATUS_ID", "TARGET_STATUS_ID", "RESTRICTION", "DESCRIPTION", "BUSINESS_RULE_ID", "COUNTRY_ID", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (400, 1, 2, null, 'Registrada -> Asignada, Operacion', 227, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_TRANSITION"("STATUS_TRANSITION_ID", "ORIGIN_STATUS_ID", "TARGET_STATUS_ID", "RESTRICTION", "DESCRIPTION", "BUSINESS_RULE_ID", "COUNTRY_ID", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (401, 2, 2, null, 'Asignada -> Asignada, Operacion', 227, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_TRANSITION"("STATUS_TRANSITION_ID", "ORIGIN_STATUS_ID", "TARGET_STATUS_ID", "RESTRICTION", "DESCRIPTION", "BUSINESS_RULE_ID", "COUNTRY_ID", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (402, 16, 2, null, 'Cancelada -> Asignada, Operacion', 227, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_TRANSITION"("STATUS_TRANSITION_ID", "ORIGIN_STATUS_ID", "TARGET_STATUS_ID", "RESTRICTION", "DESCRIPTION", "BUSINESS_RULE_ID", "COUNTRY_ID", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (403, 1, 15, null, 'Registrada -> Aceptada, Operacion', 251, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_TRANSITION"("STATUS_TRANSITION_ID", "ORIGIN_STATUS_ID", "TARGET_STATUS_ID", "RESTRICTION", "DESCRIPTION", "BUSINESS_RULE_ID", "COUNTRY_ID", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (404, 10, 7, null, 'Corrección(R) -> Corrección(S), Operacion', 205, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_TRANSITION"("STATUS_TRANSITION_ID", "ORIGIN_STATUS_ID", "TARGET_STATUS_ID", "RESTRICTION", "DESCRIPTION", "BUSINESS_RULE_ID", "COUNTRY_ID", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (405, 10, 7, null, 'Corrección(R) -> Corrección(S), Operacion', 203, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_TRANSITION"("STATUS_TRANSITION_ID", "ORIGIN_STATUS_ID", "TARGET_STATUS_ID", "RESTRICTION", "DESCRIPTION", "BUSINESS_RULE_ID", "COUNTRY_ID", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (406, 1, 11, null, 'Registrada -> Cancelada, Operacion', 226, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_TRANSITION"("STATUS_TRANSITION_ID", "ORIGIN_STATUS_ID", "TARGET_STATUS_ID", "RESTRICTION", "DESCRIPTION", "BUSINESS_RULE_ID", "COUNTRY_ID", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (407, 2, 11, null, 'Asignada -> Cancelada, Operacion', 226, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_TRANSITION"("STATUS_TRANSITION_ID", "ORIGIN_STATUS_ID", "TARGET_STATUS_ID", "RESTRICTION", "DESCRIPTION", "BUSINESS_RULE_ID", "COUNTRY_ID", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (408, 15, 7, null, 'Aceptada -> Corrección(S), Operacion', 205, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_TRANSITION"("STATUS_TRANSITION_ID", "ORIGIN_STATUS_ID", "TARGET_STATUS_ID", "RESTRICTION", "DESCRIPTION", "BUSINESS_RULE_ID", "COUNTRY_ID", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (409, 15, 7, null, 'Aceptada -> Corrección(S), Operacion', 203, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_TRANSITION"("STATUS_TRANSITION_ID", "ORIGIN_STATUS_ID", "TARGET_STATUS_ID", "RESTRICTION", "DESCRIPTION", "BUSINESS_RULE_ID", "COUNTRY_ID", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (410, 1, 2, null, 'Registrada -> Asignada, Operacion', 230, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_TRANSITION"("STATUS_TRANSITION_ID", "ORIGIN_STATUS_ID", "TARGET_STATUS_ID", "RESTRICTION", "DESCRIPTION", "BUSINESS_RULE_ID", "COUNTRY_ID", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (411, 2, 2, null, 'Asignada -> Asignada, Operacion', 233, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_TRANSITION"("STATUS_TRANSITION_ID", "ORIGIN_STATUS_ID", "TARGET_STATUS_ID", "RESTRICTION", "DESCRIPTION", "BUSINESS_RULE_ID", "COUNTRY_ID", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (412, 16, 2, null, 'Rechazada -> Asignada, Operacion', 233, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_TRANSITION"("STATUS_TRANSITION_ID", "ORIGIN_STATUS_ID", "TARGET_STATUS_ID", "RESTRICTION", "DESCRIPTION", "BUSINESS_RULE_ID", "COUNTRY_ID", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (413, 1, 2, null, 'Registrada -> Asignada, Operacion', 232, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_TRANSITION"("STATUS_TRANSITION_ID", "ORIGIN_STATUS_ID", "TARGET_STATUS_ID", "RESTRICTION", "DESCRIPTION", "BUSINESS_RULE_ID", "COUNTRY_ID", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (414, 1, 2, null, 'Registrada -> Asignada, Operacion', 231, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_TRANSITION"("STATUS_TRANSITION_ID", "ORIGIN_STATUS_ID", "TARGET_STATUS_ID", "RESTRICTION", "DESCRIPTION", "BUSINESS_RULE_ID", "COUNTRY_ID", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (415, 2, 2, null, 'Asignada -> Asignada, Operacion', 232, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_TRANSITION"("STATUS_TRANSITION_ID", "ORIGIN_STATUS_ID", "TARGET_STATUS_ID", "RESTRICTION", "DESCRIPTION", "BUSINESS_RULE_ID", "COUNTRY_ID", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (416, 16, 2, null, 'Rechazada -> Asignada, Operacion', 232, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_TRANSITION"("STATUS_TRANSITION_ID", "ORIGIN_STATUS_ID", "TARGET_STATUS_ID", "RESTRICTION", "DESCRIPTION", "BUSINESS_RULE_ID", "COUNTRY_ID", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (417, 2, 14, null, 'Asignada -> Enviada, Operacion', 235, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_TRANSITION"("STATUS_TRANSITION_ID", "ORIGIN_STATUS_ID", "TARGET_STATUS_ID", "RESTRICTION", "DESCRIPTION", "BUSINESS_RULE_ID", "COUNTRY_ID", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (418, 16, 14, null, 'Rechazada -> Enviada, Operacion', 235, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_TRANSITION"("STATUS_TRANSITION_ID", "ORIGIN_STATUS_ID", "TARGET_STATUS_ID", "RESTRICTION", "DESCRIPTION", "BUSINESS_RULE_ID", "COUNTRY_ID", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (419, 2, 14, null, 'Asignada -> Enviada, Operacion', 236, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_TRANSITION"("STATUS_TRANSITION_ID", "ORIGIN_STATUS_ID", "TARGET_STATUS_ID", "RESTRICTION", "DESCRIPTION", "BUSINESS_RULE_ID", "COUNTRY_ID", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (420, 16, 14, null, 'Rechazada -> Enviada, Operacion', 236, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_TRANSITION"("STATUS_TRANSITION_ID", "ORIGIN_STATUS_ID", "TARGET_STATUS_ID", "RESTRICTION", "DESCRIPTION", "BUSINESS_RULE_ID", "COUNTRY_ID", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (421, null, 1071, null, 'sin custodio -> Trasladada, Operacion', 239, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_TRANSITION"("STATUS_TRANSITION_ID", "ORIGIN_STATUS_ID", "TARGET_STATUS_ID", "RESTRICTION", "DESCRIPTION", "BUSINESS_RULE_ID", "COUNTRY_ID", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (422, null, 1071, null, 'sin custodio -> Trasladada, Operacion', 243, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_TRANSITION"("STATUS_TRANSITION_ID", "ORIGIN_STATUS_ID", "TARGET_STATUS_ID", "RESTRICTION", "DESCRIPTION", "BUSINESS_RULE_ID", "COUNTRY_ID", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (423, 1074, 1071, null, 'rechazado -> Trasladada, Operacion', 243, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_TRANSITION"("STATUS_TRANSITION_ID", "ORIGIN_STATUS_ID", "TARGET_STATUS_ID", "RESTRICTION", "DESCRIPTION", "BUSINESS_RULE_ID", "COUNTRY_ID", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (424, 1071, 1072, null, 'Trasladada -> pre-match, Operacion', 245, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_TRANSITION"("STATUS_TRANSITION_ID", "ORIGIN_STATUS_ID", "TARGET_STATUS_ID", "RESTRICTION", "DESCRIPTION", "BUSINESS_RULE_ID", "COUNTRY_ID", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (425, 1071, 1073, null, 'Trasladada -> Admitida, Operacion', 247, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_TRANSITION"("STATUS_TRANSITION_ID", "ORIGIN_STATUS_ID", "TARGET_STATUS_ID", "RESTRICTION", "DESCRIPTION", "BUSINESS_RULE_ID", "COUNTRY_ID", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (426, 1072, 1073, null, 'pre-match -> Admitida, Operacion', 247, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_TRANSITION"("STATUS_TRANSITION_ID", "ORIGIN_STATUS_ID", "TARGET_STATUS_ID", "RESTRICTION", "DESCRIPTION", "BUSINESS_RULE_ID", "COUNTRY_ID", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (427, 1071, 1074, null, 'Trasladada -> Rechazada, Operacion', 249, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_TRANSITION"("STATUS_TRANSITION_ID", "ORIGIN_STATUS_ID", "TARGET_STATUS_ID", "RESTRICTION", "DESCRIPTION", "BUSINESS_RULE_ID", "COUNTRY_ID", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (428, 1072, 1074, null, 'pre-match -> Rechazada, Operacion', 249, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_TRANSITION"("STATUS_TRANSITION_ID", "ORIGIN_STATUS_ID", "TARGET_STATUS_ID", "RESTRICTION", "DESCRIPTION", "BUSINESS_RULE_ID", "COUNTRY_ID", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (429, 1073, 1074, null, 'Admitida -> Rechazada, Operacion', 249, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_TRANSITION"("STATUS_TRANSITION_ID", "ORIGIN_STATUS_ID", "TARGET_STATUS_ID", "RESTRICTION", "DESCRIPTION", "BUSINESS_RULE_ID", "COUNTRY_ID", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (430, null, 1071, null, 'sin custodio -> Trasladada, Operacion', 240, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_TRANSITION"("STATUS_TRANSITION_ID", "ORIGIN_STATUS_ID", "TARGET_STATUS_ID", "RESTRICTION", "DESCRIPTION", "BUSINESS_RULE_ID", "COUNTRY_ID", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (431, 9, 7, null, 'Corrección(A) -> Corrección(S), Operacion', 205, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_TRANSITION"("STATUS_TRANSITION_ID", "ORIGIN_STATUS_ID", "TARGET_STATUS_ID", "RESTRICTION", "DESCRIPTION", "BUSINESS_RULE_ID", "COUNTRY_ID", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (432, 9, 7, null, 'Corrección(A) -> Corrección(S), Operacion', 203, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_TRANSITION"("STATUS_TRANSITION_ID", "ORIGIN_STATUS_ID", "TARGET_STATUS_ID", "RESTRICTION", "DESCRIPTION", "BUSINESS_RULE_ID", "COUNTRY_ID", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (433, 1, 15, null, 'Registrada -> Aceptada, Operacion', 252, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_TRANSITION"("STATUS_TRANSITION_ID", "ORIGIN_STATUS_ID", "TARGET_STATUS_ID", "RESTRICTION", "DESCRIPTION", "BUSINESS_RULE_ID", "COUNTRY_ID", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (434, 1, 831, null, 'Registrada -> enviado, cliclo 1', 221, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

INSERT INTO "NUANBODB"."STATUS_TRANSITION"("STATUS_TRANSITION_ID", "ORIGIN_STATUS_ID", "TARGET_STATUS_ID", "RESTRICTION", "DESCRIPTION", "BUSINESS_RULE_ID", "COUNTRY_ID", "LAST_MODIFY_USER", "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
	VALUES (435, 1, 831, null, 'Registrada -> enviado, cliclo 3', 224, null, 'SYSTEM', 'SYSTEM', now(), 'IP_01');

```

## src/main/java/com/nubo/operations/rules/api/OperationsRulesApiApplication.java

```java
package com.nubo.operations.rules.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class OperationsRulesApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(OperationsRulesApiApplication.class, args);
	}

}

```

## src/main/java/com/nubo/operations/rules/api/application/annotations/ValidBigDecimal.java

```java
package com.nubo.operations.rules.api.application.annotations;

import com.nubo.operations.rules.api.application.config.ValidBigDecimalConfig;
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

## src/main/java/com/nubo/operations/rules/api/application/config/CacheConfig.java

```java
package com.nubo.operations.rules.api.application.config;

import java.util.Arrays;
import java.util.concurrent.TimeUnit;

import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.cache.caffeine.CaffeineCache;
import org.springframework.cache.support.SimpleCacheManager;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.github.benmanes.caffeine.cache.Caffeine;

@Configuration
@EnableCaching
public class CacheConfig {

    @Value("${application.cache.maximum-size.long-lived:10000}")
    private long longLivedCacheMaximumSize;

    @Value("${application.cache.maximum-size.short-lived:5000}")
    private long shortLivedCacheMaximumSize;

    @Value("${application.cache.ttl-minutes.long-lived:30}")
    private long longLivedCacheTtlMinutes;

    @Value("${application.cache.ttl-minutes.short-lived:10}")
    private long shortLivedCacheTtlMinutes;

    @Bean
    @SuppressWarnings("null")
    public CacheManager cacheManager() {
        SimpleCacheManager cacheManager = new SimpleCacheManager();
        Caffeine<Object, Object> caffeine30Min = Caffeine.newBuilder()
                .initialCapacity(1024)
                .maximumSize(longLivedCacheMaximumSize)
                .expireAfterWrite(longLivedCacheTtlMinutes, TimeUnit.MINUTES)
                .recordStats();

        Caffeine<Object, Object> caffeine10Min = Caffeine.newBuilder()
                .initialCapacity(512)
                .maximumSize(shortLivedCacheMaximumSize)
                .expireAfterWrite(shortLivedCacheTtlMinutes, TimeUnit.MINUTES)
                .recordStats();

        cacheManager.setCaches(Arrays.asList(
                new CaffeineCache("businessRulesByCountryAndCode", caffeine30Min.build()),
                new CaffeineCache("businessRulesByAllCountryAndCode", caffeine30Min.build()),
                new CaffeineCache("businessRuleValidationsByBusinessRuleId", caffeine30Min.build()),
                new CaffeineCache("statusActionBusinessRulesByBusinessRuleId", caffeine30Min.build()),
                new CaffeineCache("statusActionBusinessRulesByBusinessRuleCode", caffeine30Min.build()),
                new CaffeineCache("statusActionBusinessRulesByStatusIdAndCodeAndCountry", caffeine30Min.build()),
                new CaffeineCache("statusActionBusinessRuleByBusinessRuleIdAndStatusId", caffeine30Min.build()),
                new CaffeineCache("statusActionBusinessRulesByCodeAndCountry", caffeine30Min.build()),
                new CaffeineCache("statusActionBusinessRulesByCodeAndAllCountry", caffeine30Min.build()),
                new CaffeineCache("countriesById", caffeine30Min.build()),
                new CaffeineCache("holidaysByCountryCode", caffeine30Min.build()),
                new CaffeineCache("countriesByCode", caffeine30Min.build()),

                new CaffeineCache("scheduleByProcessAndCountry", caffeine10Min.build()),
                new CaffeineCache("validateCurrentDayByCountry", caffeine10Min.build())));

        return cacheManager;
    }

}

```

## src/main/java/com/nubo/operations/rules/api/application/config/MetricsConfig.java

```java
package com.nubo.operations.rules.api.application.config;

import io.micrometer.core.aop.TimedAspect;
import io.micrometer.core.instrument.MeterRegistry;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MetricsConfig {

    @Bean
    public TimedAspect timedAspect(MeterRegistry meterRegistry) {
        return new TimedAspect(meterRegistry);
    }

}

```

## src/main/java/com/nubo/operations/rules/api/application/config/SwaggerConfig.java

```java
package com.nubo.operations.rules.api.application.config;

import com.nubo.operations.rules.api.exception.error.ErrorResponse;
import com.nubo.operations.rules.api.exception.error.ErrorValidation;
import com.nubo.operations.rules.api.models.enums.PropertiesEnum;
import io.swagger.v3.oas.annotations.Hidden;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.enums.ParameterIn;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.media.Content;
import io.swagger.v3.oas.models.media.MediaType;
import io.swagger.v3.oas.models.media.Schema;
import io.swagger.v3.oas.models.parameters.HeaderParameter;
import io.swagger.v3.oas.models.parameters.Parameter;
import io.swagger.v3.oas.models.responses.ApiResponse;
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

        return new OpenAPI()
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
                    operation
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

## src/main/java/com/nubo/operations/rules/api/application/config/ValidBigDecimalConfig.java

```java
package com.nubo.operations.rules.api.application.config;

import com.nubo.operations.rules.api.application.annotations.ValidBigDecimal;
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

## src/main/java/com/nubo/operations/rules/api/application/config/WebConfig.java

```java
package com.nubo.operations.rules.api.application.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.client.JdkClientHttpRequestFactory;
import org.springframework.web.client.RestClient;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.i18n.SessionLocaleResolver;

import com.nubo.operations.rules.api.application.interceptors.GlobalInterceptor;

import java.net.http.HttpClient;
import java.time.Clock;
import java.time.Duration;
import java.util.Locale;

import org.springframework.beans.factory.annotation.Value;

@Configuration
@RequiredArgsConstructor
public class WebConfig implements WebMvcConfigurer {

    private final GlobalInterceptor globalInterceptor;
    @Value("${application.http.client.connect-timeout-ms:1000}")
    private long connectTimeoutMs;

    @Value("${application.http.client.read-timeout-ms:2000}")
    private long readTimeoutMs;

    @Bean
    public LocaleResolver localeResolver() {
        SessionLocaleResolver slr = new SessionLocaleResolver();
        slr.setDefaultLocale(Locale.ENGLISH);
        return slr;
    }

    @Bean
    public RestClient restClient() {
        HttpClient httpClient = HttpClient.newBuilder()
            .connectTimeout(Duration.ofMillis(connectTimeoutMs))
            .version(HttpClient.Version.HTTP_1_1)
            .build();

        JdkClientHttpRequestFactory requestFactory = new JdkClientHttpRequestFactory(httpClient);
        requestFactory.setReadTimeout(Duration.ofMillis(readTimeoutMs));

        return RestClient.builder()
            .requestFactory(requestFactory)
            .build();
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(globalInterceptor)
                .addPathPatterns("/**");
    }

    @Bean
    public Clock systemClock() {
        return Clock.systemDefaultZone();
    }

}

```

## src/main/java/com/nubo/operations/rules/api/application/context/GlobalContext.java

```java
package com.nubo.operations.rules.api.application.context;

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

## src/main/java/com/nubo/operations/rules/api/application/database/NamingStrategyConfig.java

```java
package com.nubo.operations.rules.api.application.database;

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

## src/main/java/com/nubo/operations/rules/api/application/database/UpperNamingConfig.java

```java
package com.nubo.operations.rules.api.application.database;

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

## src/main/java/com/nubo/operations/rules/api/application/filters/GlobalFilter.java

```java
package com.nubo.operations.rules.api.application.filters;

import com.nubo.operations.rules.api.application.context.GlobalContext;
import com.nubo.operations.rules.api.application.util.ApplicationUtils;
import com.nubo.operations.rules.api.exception.ServiceException;
import com.nubo.operations.rules.api.exception.error.ErrorCode;
import com.nubo.operations.rules.api.exception.error.ErrorResponse;
import com.nubo.operations.rules.api.models.enums.PropertiesEnum;
import com.nubo.operations.rules.api.models.enums.VersionApiEnum;
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
            String clientUserHeader = this.validateClientUserHeader(request);
            String clientDatetime = this.validateClientDatetimeHeader(request);

            GlobalContext.setProperty(PropertiesEnum.VERSION_API.getValue(), VersionApiEnum.fromValue(versionPath).getValue());
            GlobalContext.setProperty(PropertiesEnum.CLIENT_USER.getValue(), clientUserHeader);
            GlobalContext.setProperty(PropertiesEnum.CLIENT_DATETIME.getValue(), clientDatetime);

            chain.doFilter(request, response);

        } catch (ServiceException ex) {
            handleServiceException(ex, request, response);
        }
    }

    private String validateClientUserHeader(HttpServletRequest request) {
        String clientUser = request.getHeader(PropertiesEnum.CLIENT_USER.getValue());
        if (clientUser == null || clientUser.isEmpty()) {
            throw new ServiceException(ErrorCode.HEADER_CLIENT_USER_REQUIRED, HttpStatus.BAD_REQUEST);
        }
        log.debug("Client User: {}", clientUser);
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

## src/main/java/com/nubo/operations/rules/api/application/interceptors/GlobalInterceptor.java

```java
package com.nubo.operations.rules.api.application.interceptors;

import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import com.nubo.operations.rules.api.application.context.GlobalContext;

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

## src/main/java/com/nubo/operations/rules/api/application/properties/PropertiesConfig.java

```java
package com.nubo.operations.rules.api.application.properties;

import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
@Getter
public class PropertiesConfig {

    @Value("${spring.application.name}")
    private String apiName;

    @Value("${client.nubo.url-operations-status}")
    private String urlNuboOperationsStatus;

    @Value("${client.nubo.url-business-day-calculation}")
    private String urlNuboBusinessDayCalculation;
}

```

## src/main/java/com/nubo/operations/rules/api/application/properties/PropertiesContext.java

```java
package com.nubo.operations.rules.api.application.properties;

import com.nubo.operations.rules.api.application.context.GlobalContext;
import com.nubo.operations.rules.api.application.util.ApplicationUtils;
import com.nubo.operations.rules.api.models.enums.PropertiesEnum;
import org.springframework.util.ObjectUtils;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class PropertiesContext {

    private PropertiesContext() {
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

    public static String getClientDatetimeHeaderValue() {
        String clientDatetime = GlobalContext.getProperty(PropertiesEnum.CLIENT_DATETIME.getValue());
        if (ObjectUtils.isEmpty(clientDatetime)) {
            return ApplicationUtils.convertLocalDateTimeToString(LocalDateTime.now());
        }
        return clientDatetime;
    }

    public static String getVersion() {
        return GlobalContext.getProperty(PropertiesEnum.VERSION_API.getValue());
    }

}

```

## src/main/java/com/nubo/operations/rules/api/application/util/ApplicationUtils.java

```java
package com.nubo.operations.rules.api.application.util;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.nubo.operations.rules.api.exception.ServiceException;
import com.nubo.operations.rules.api.exception.error.ErrorCode;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;

import org.springframework.http.HttpStatus;

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

    public static LocalDateTime convertStringToLocalDateTime(String timeString) {
        return LocalDateTime.parse(timeString, DateTimeFormatter.ofPattern(FORMAT_DATETIME));
    }

    public static String convertLocalDateTimeToString(LocalDateTime localDateTime) {
        return localDateTime.format(DateTimeFormatter.ofPattern(ApplicationUtils.getFormatDatetime()));
    }

    public static String convertObjectToJson(Object object) {
        ObjectMapper mapper = new ObjectMapper();
        try {
            return mapper.writeValueAsString(object);
        } catch (JsonProcessingException e) {
            throw new ServiceException(ErrorCode.UNEXPECTED, e);
        }
    }

    public static <T> T convertJsonToObject(String json, Class<T> clazz) {
        try {
            ObjectMapper mapper = new ObjectMapper();
            return mapper.readValue(json, clazz);
        } catch (JsonProcessingException e) {
            throw new ServiceException(ErrorCode.UNEXPECTED, e);
        }
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
            throw new ServiceException(ErrorCode.INVALID_TIMEZONE, HttpStatus.BAD_REQUEST, e);
        }
    }

    private static String normalizeOffset(String offset) {
        if (offset.matches("[+-]\\d:\\d{2}")) {
            return offset.substring(0, 1) + "0" + offset.substring(1);
        } else if (offset.matches("[+-]\\d{1}$")) {
            return offset.substring(0, 1) + "0" + offset.substring(1);
        }
        return offset;
    }

    public static Throwable getRootCause(Throwable throwable) {
        Throwable cause = throwable;
        while (cause.getCause() != null && cause.getCause() != cause) {
            cause = cause.getCause();
        }
        return cause != throwable ? cause : null;
    }

}

```

## src/main/java/com/nubo/operations/rules/api/application/util/RestClientUtils.java

```java
package com.nubo.operations.rules.api.application.util;

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
        log.debug("Client [{}] {}", method, url);
        return restClient.method(method)
                .uri(url)
                .headers(h -> h.addAll(headers))
                .body(requestBody)
                .retrieve()
                .toEntity(responseType);
    }

    public <T> ResponseEntity<T> requestWithResponseObject(URI url, HttpMethod method, HttpHeaders headers,
            Class<T> responseType) {
        log.debug("Client [{}] {}", method, url);
        return restClient.method(method)
                .uri(url)
                .headers(h -> h.addAll(headers))
                .retrieve()
                .toEntity(responseType);
    }

    public void requestBodyWithNoResponse(URI url, HttpMethod method, HttpHeaders headers,
            Object requestBody) {
        restClient.method(method)
                .uri(url)
                .headers(h -> h.addAll(headers))
                .body(requestBody)
                .retrieve()
                .toBodilessEntity();
    }

    public void requestWithNoResponse(URI url, HttpMethod method, HttpHeaders headers) {
        restClient.method(method)
                .uri(url)
                .headers(h -> h.addAll(headers))
                .retrieve()
                .toBodilessEntity();
    }

}
```

## src/main/java/com/nubo/operations/rules/api/client/calculation/day/models/response/BusinessDayOutDto.java

```java
package com.nubo.operations.rules.api.client.calculation.day.models.response;

import java.time.LocalDate;

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
public class BusinessDayOutDto {

    private Boolean isValidBusinessDay;

    private LocalDate businessCurrentDay;

    private LocalDate businessNextDay;

    private LocalDate businessNextDayClosureDate;

    private Long countryId;

}

```

## src/main/java/com/nubo/operations/rules/api/client/calculation/day/service/BusinessDayCalculationClient.java

```java
package com.nubo.operations.rules.api.client.calculation.day.service;

import org.springframework.cache.annotation.Cacheable;

import com.nubo.operations.rules.api.client.calculation.day.models.response.BusinessDayOutDto;

public interface BusinessDayCalculationClient {

    @Cacheable(cacheNames = "validateCurrentDayByCountry", key = "#countryId")
    BusinessDayOutDto validCurrentDayByCountry(Long countryId);

}

```

## src/main/java/com/nubo/operations/rules/api/client/calculation/day/service/impl/BusinessDayCalculationClientImpl.java

```java
package com.nubo.operations.rules.api.client.calculation.day.service.impl;

import java.net.URI;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;
import org.springframework.web.util.UriComponentsBuilder;

import com.nubo.operations.rules.api.application.properties.PropertiesConfig;
import com.nubo.operations.rules.api.application.properties.PropertiesContext;
import com.nubo.operations.rules.api.application.util.RestClientUtils;
import com.nubo.operations.rules.api.client.calculation.day.models.response.BusinessDayOutDto;
import com.nubo.operations.rules.api.client.calculation.day.service.BusinessDayCalculationClient;
import com.nubo.operations.rules.api.exception.ClientException;
import com.nubo.operations.rules.api.exception.error.ErrorCode;
import com.nubo.operations.rules.api.models.enums.PropertiesEnum;
import com.nubo.operations.rules.api.models.enums.VersionApiEnum;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class BusinessDayCalculationClientImpl implements BusinessDayCalculationClient {

    private final PropertiesConfig propertiesConfig;
    private final RestClientUtils restClientUtils;

    private static final String PATH_BUSINESS_DAY = "business-day";

    @Override
    public BusinessDayOutDto validCurrentDayByCountry(Long countryId) {
        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getUrlNuboBusinessDayCalculation())
                .pathSegment(VersionApiEnum.V1.getValue(), PATH_BUSINESS_DAY)
                .path("/valid/current-day/country/{countryId}")
                .buildAndExpand(countryId)
                .toUri();

        try {
            ResponseEntity<BusinessDayOutDto> response = restClientUtils.requestWithResponseObject(uri,
                    HttpMethod.GET, getHttpHeaders(), BusinessDayOutDto.class);

            if (!ObjectUtils.isEmpty(response.getBody())) {
                BusinessDayOutDto businessDayOutDto = response.getBody();
                log.debug("Response client Status -> {}", businessDayOutDto);
                return businessDayOutDto;
            }
        } catch (Exception ex) {
            throw new ClientException(ErrorCode.CLIENT_BUSINESS_DAY_CALCULATION_ERROR, HttpStatus.BAD_GATEWAY, ex);
        }

        return BusinessDayOutDto.builder().build();
    }

    private HttpHeaders getHttpHeaders() {
        HttpHeaders headers = new HttpHeaders();
        headers.set(PropertiesEnum.CLIENT_IP.getValue(), "127.0.0.1");
        headers.set(PropertiesEnum.CLIENT_USER.getValue(), PropertiesContext.getClientUser());
        headers.set(PropertiesEnum.CLIENT_DATETIME.getValue(), PropertiesContext.getClientDatetimeHeaderValue());
        headers.setContentType(MediaType.APPLICATION_JSON);
        return headers;
    }

}

```

## src/main/java/com/nubo/operations/rules/api/client/status/models/dto/request/StatusValidationClientInDto.java

```java
package com.nubo.operations.rules.api.client.status.models.dto.request;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class StatusValidationClientInDto {

    private Long originStatusId;

    @NotNull
    private Long targetStatusId;

    private Long countryId;

}

```

## src/main/java/com/nubo/operations/rules/api/client/status/models/dto/response/BusinessRuleClientOutDto.java

```java
package com.nubo.operations.rules.api.client.status.models.dto.response;

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
public class BusinessRuleClientOutDto {

    private Long id;

    private String code;

    private String description;

    private String category;

    private String value;

    private CountryClientOutDto country;

}

```

## src/main/java/com/nubo/operations/rules/api/client/status/models/dto/response/CountryClientOutDto.java

```java
package com.nubo.operations.rules.api.client.status.models.dto.response;

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
public class CountryClientOutDto {

    private Long id;

    private String code;

    private String name;

    private String timeZone;

}

```

## src/main/java/com/nubo/operations/rules/api/client/status/models/dto/response/StatusClientOutDto.java

```java
package com.nubo.operations.rules.api.client.status.models.dto.response;

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
public class StatusClientOutDto {

    private Long id;

    private String description;

    private String category;

    private String shortName;

    private String detail;

}

```

## src/main/java/com/nubo/operations/rules/api/client/status/models/dto/response/StatusTransitionClientOutDto.java

```java
package com.nubo.operations.rules.api.client.status.models.dto.response;

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
public class StatusTransitionClientOutDto {

    private Long id;

    private StatusClientOutDto originStatus;

    private StatusClientOutDto targetStatus;

    private String restriction;

    private String description;

    private CountryClientOutDto country;

}

```

## src/main/java/com/nubo/operations/rules/api/client/status/models/dto/response/StatusValidationClientOutDto.java

```java
package com.nubo.operations.rules.api.client.status.models.dto.response;

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
public class StatusValidationClientOutDto {

    private Boolean isValid;

    private StatusTransitionClientOutDto statusTransition;

    private BusinessRuleClientOutDto businessRule;

}

```

## src/main/java/com/nubo/operations/rules/api/client/status/service/OperationStatusClient.java

```java
package com.nubo.operations.rules.api.client.status.service;

import com.nubo.operations.rules.api.client.status.models.dto.request.StatusValidationClientInDto;
import com.nubo.operations.rules.api.client.status.models.dto.response.StatusTransitionClientOutDto;
import com.nubo.operations.rules.api.client.status.models.dto.response.StatusValidationClientOutDto;

public interface OperationStatusClient {

    StatusValidationClientOutDto validationTransitionStatus(StatusValidationClientInDto statusValidationClientInDto);

    StatusTransitionClientOutDto transitionByBusinessRuleIdAndOriginStatusId(Long businessRuleId, Long originStatusId);
}

```

## src/main/java/com/nubo/operations/rules/api/client/status/service/impl/OperationStatusClientImpl.java

```java
package com.nubo.operations.rules.api.client.status.service.impl;

import java.net.URI;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;
import org.springframework.web.util.UriComponentsBuilder;

import com.nubo.operations.rules.api.application.properties.PropertiesConfig;
import com.nubo.operations.rules.api.application.properties.PropertiesContext;
import com.nubo.operations.rules.api.application.util.RestClientUtils;
import com.nubo.operations.rules.api.client.status.models.dto.request.StatusValidationClientInDto;
import com.nubo.operations.rules.api.client.status.models.dto.response.StatusTransitionClientOutDto;
import com.nubo.operations.rules.api.client.status.models.dto.response.StatusValidationClientOutDto;
import com.nubo.operations.rules.api.client.status.service.OperationStatusClient;
import com.nubo.operations.rules.api.exception.ClientException;
import com.nubo.operations.rules.api.exception.error.ErrorCode;
import com.nubo.operations.rules.api.models.enums.PropertiesEnum;
import com.nubo.operations.rules.api.models.enums.VersionApiEnum;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class OperationStatusClientImpl implements OperationStatusClient {

    private final RestClientUtils restClientUtils;
    private final PropertiesConfig propertiesConfig;

    private static final String TRANSITION_STATUS = "status-transition";

    @Override
    public StatusValidationClientOutDto validationTransitionStatus(
            StatusValidationClientInDto statusValidationClientInDto) {
        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getUrlNuboOperationsStatus())
                .pathSegment(VersionApiEnum.V1.getValue(), TRANSITION_STATUS)
                .path("validation")
                .build()
                .toUri();

        try {
            ResponseEntity<StatusValidationClientOutDto> response = restClientUtils.requestBodyWithResponseObject(uri,
                    HttpMethod.POST, getHttpHeaders(), statusValidationClientInDto, StatusValidationClientOutDto.class);
            if (!ObjectUtils.isEmpty(response.getBody())) {
                StatusValidationClientOutDto statusValidationClientOutDto = response.getBody();
                log.debug("Response client Status -> {}", statusValidationClientOutDto);
                return statusValidationClientOutDto;
            }
        } catch (Exception ex) {
            throw new ClientException(ErrorCode.CLIENT_OPERATIONS_STATUS_ERROR, HttpStatus.BAD_GATEWAY, ex);
        }

        return StatusValidationClientOutDto.builder().build();
    }

    @Override
    public StatusTransitionClientOutDto transitionByBusinessRuleIdAndOriginStatusId(Long businessRuleId,
            Long originStatusId) {
        try {
            UriComponentsBuilder uriBuilder = UriComponentsBuilder
                    .fromUriString(propertiesConfig.getUrlNuboOperationsStatus())
                    .pathSegment(VersionApiEnum.V1.getValue(), TRANSITION_STATUS);

            URI uri;
            if (originStatusId == null) {
                uri = uriBuilder
                        .path("business-rule/{businessRuleId}/origin-status/")
                        .buildAndExpand(businessRuleId)
                        .toUri();
            } else {
                uri = uriBuilder
                        .path("business-rule/{businessRuleId}/origin-status/{originStatusId}")
                        .buildAndExpand(businessRuleId, originStatusId)
                        .toUri();
            }

            ResponseEntity<StatusTransitionClientOutDto> response = restClientUtils.requestWithResponseObject(uri,
                    HttpMethod.GET, getHttpHeaders(), StatusTransitionClientOutDto.class);
            if (!ObjectUtils.isEmpty(response.getBody())) {
                StatusTransitionClientOutDto statusTransitionClientOutDto = response.getBody();
                log.debug("Response client Status -> {}", statusTransitionClientOutDto);

                return statusTransitionClientOutDto;
            }
        } catch (Exception ex) {
            throw new ClientException(ErrorCode.CLIENT_OPERATIONS_STATUS_ERROR, HttpStatus.BAD_GATEWAY, ex);
        }
        return StatusTransitionClientOutDto.builder().build();
    }

    private static HttpHeaders getHttpHeaders() {
        HttpHeaders headers = new HttpHeaders();
        headers.set(PropertiesEnum.CLIENT_IP.getValue(), "127.0.0.1");
        headers.set(PropertiesEnum.CLIENT_USER.getValue(), PropertiesContext.getClientUser());
        headers.set(PropertiesEnum.CLIENT_DATETIME.getValue(), PropertiesContext.getClientDatetimeHeaderValue());
        headers.setContentType(MediaType.APPLICATION_JSON);
        return headers;
    }

}

```

## src/main/java/com/nubo/operations/rules/api/exception/ClientException.java

```java
package com.nubo.operations.rules.api.exception;

import com.nubo.operations.rules.api.exception.error.ErrorCode;
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

## src/main/java/com/nubo/operations/rules/api/exception/ServiceException.java

```java
package com.nubo.operations.rules.api.exception;

import com.nubo.operations.rules.api.exception.error.ErrorCode;
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

    public ServiceException(ErrorCode errorCode, String message, HttpStatus httpStatus) {
        super(errorCode.getMessage(), new Throwable(message));
        this.errorCode = errorCode;
        this.httpStatus = httpStatus;
    }

    public HttpStatus getHttpStatusOrDefault() {
        return this.httpStatus != null ? this.httpStatus : HttpStatus.INTERNAL_SERVER_ERROR;
    }

}

```

## src/main/java/com/nubo/operations/rules/api/exception/error/ErrorCode.java

```java
package com.nubo.operations.rules.api.exception.error;

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
    INVALID_TIMEZONE("Invalid time zone"),
    COUNTRY_NOT_FOUND("Country not found"),
    BUSINESS_RULE_NOT_FOUND("Business rule not found"),
    ACTION_BUSINESS_RULE_NOT_FOUND("Status Action Business rule not found"),
    SIDE_NOT_FOUND("Side not found"),
    TRADE_NOT_FOUND("Trade not found"),
    SETTLEMENT_NOT_FOUND("Settlement not found"),
    ACCOUNT_NOT_FOUND("Account not found"),
    MASTER_ACCOUNT_NOT_CORRESPOND_TO_ORIGIN_THIRD_PARTIES("The master account not correspond to the Third Parties"),
    OWN_POSITION_NOT_CORRESPOND_TO_ORIGIN("The allocation data does not correspond to the Own Position origin"),
    THIRD_PARTIES_COLLECTIVE_PORTFOLIOS_NOT_CORRESPOND_TO_ORIGIN("The allocation data does not correspond to the origin Third Parties/Collective Portfolios"),
    FRACTION_TOTAL_QUANTITY_NOT_CORRESPOND_QUANTITY_TRADE("The total number of shares in the fractions does not correspond to the total number of shares of the operation"),
    NUMBER_FRACTION_EXCEED_FRACTION_MAXIMUM("The maximum limit of fractions"),
    CLIENT_OPERATIONS_STATUS_ERROR("Error Client Operations Status"),
    CLIENT_BUSINESS_DAY_CALCULATION_ERROR("Error Client Business Day Calculation");

    private final String message;

    ErrorCode(String message) {
        this.message = message;
    }

    public String getName() {
        return this.name();
    }

}

```

## src/main/java/com/nubo/operations/rules/api/exception/error/ErrorResponse.java

```java
package com.nubo.operations.rules.api.exception.error;

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

## src/main/java/com/nubo/operations/rules/api/exception/error/ErrorValidation.java

```java
package com.nubo.operations.rules.api.exception.error;

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

## src/main/java/com/nubo/operations/rules/api/exception/handler/GlobalExceptionHandler.java

```java
package com.nubo.operations.rules.api.exception.handler;

import com.nubo.operations.rules.api.application.properties.PropertiesContext;
import com.nubo.operations.rules.api.application.util.ApplicationUtils;
import com.nubo.operations.rules.api.exception.ClientException;
import com.nubo.operations.rules.api.exception.ServiceException;
import com.nubo.operations.rules.api.exception.error.ErrorCode;
import com.nubo.operations.rules.api.exception.error.ErrorResponse;
import com.nubo.operations.rules.api.exception.error.ErrorValidation;
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

    private ResponseEntity<ErrorResponse> buildClientErrorResponse(HttpStatus status, ErrorCode errorCode, String cause) {
        try {
            Pattern pattern = Pattern.compile("\\{.*\\}");
            Matcher matcher = pattern.matcher(cause);

            if (matcher.find()) {
                String json = matcher.group();
                ErrorResponse errorResponse = (ErrorResponse) ApplicationUtils.convertJsonToObject(json, ErrorResponse.class);
                errorResponse.setHttpCode(String.valueOf(status.value()));

                log.warn("Error Client -> {}", errorResponse);

                return ResponseEntity.status(status).body(errorResponse);

            } else {
                log.error("Error en buildClientErrorResponse -> No JSON found in the string");
            }
        } catch (Exception ex) {
            String detail = ObjectUtils.isEmpty(ex.getCause()) ? "" : ex.getCause().getMessage();
            log.error("Error en buildClientErrorResponse -> {}, detail -> {}", ex.getMessage(), detail);
        }
        return null;
    }
}

```

## src/main/java/com/nubo/operations/rules/api/helpers/MapperUtil.java

```java
package com.nubo.operations.rules.api.helpers;

import com.nubo.operations.rules.api.client.status.models.dto.request.StatusValidationClientInDto;
import com.nubo.operations.rules.api.client.status.models.dto.response.StatusClientOutDto;
import com.nubo.operations.rules.api.client.status.models.dto.response.StatusTransitionClientOutDto;
import com.nubo.operations.rules.api.models.domain.InputFraction;
import com.nubo.operations.rules.api.models.domain.InputParticipant;
import com.nubo.operations.rules.api.models.domain.InputRule;
import com.nubo.operations.rules.api.models.domain.InputRuleSide;
import com.nubo.operations.rules.api.models.dto.request.BusinessRuleInDto;
import com.nubo.operations.rules.api.models.dto.request.FractionInDto;
import com.nubo.operations.rules.api.models.dto.request.ParticipantInDto;
import com.nubo.operations.rules.api.models.dto.request.StatusUpdateBusinessRuleInDto;
import com.nubo.operations.rules.api.models.dto.response.ActionOutDto;
import com.nubo.operations.rules.api.models.dto.response.BusinessRuleOutDto;
import com.nubo.operations.rules.api.models.dto.response.CountryOutDto;
import com.nubo.operations.rules.api.models.dto.response.StatusAllowedOptionsOutDto;
import com.nubo.operations.rules.api.models.dto.response.StatusOutDto;
import com.nubo.operations.rules.api.models.dto.response.StatusUpdateBusinessRuleOutDto;
import com.nubo.operations.rules.api.models.dto.response.StatusUpdateSettlementOutDto;
import com.nubo.operations.rules.api.models.dto.response.StatusUpdateTradeOutDto;
import com.nubo.operations.rules.api.models.entity.CountryEntity;
import com.nubo.operations.rules.api.models.entity.ParticipantEntity;
import com.nubo.operations.rules.api.models.entity.SettlementEntity;
import com.nubo.operations.rules.api.models.entity.StatusActionBusinessRuleEntity;
import com.nubo.operations.rules.api.models.entity.StatusEntity;
import com.nubo.operations.rules.api.models.entity.TradeEntity;
import com.nubo.operations.rules.api.models.enums.SideEnum;
import com.nubo.operations.rules.api.models.entity.BusinessRuleEntity;

import java.util.List;

import org.springframework.util.ObjectUtils;

public final class MapperUtil {

    private MapperUtil() {
    }

    public static CountryOutDto countryEntityToCountryOutDto(CountryEntity countryEntity) {
        if (ObjectUtils.isEmpty(countryEntity))
            return null;
        return CountryOutDto.builder()
                .id(countryEntity.getId())
                .code(countryEntity.getCode())
                .name(countryEntity.getName())
                .timeZone(countryEntity.getTimeZone())
                .build();
    }

    public static BusinessRuleOutDto businessRuleEntityToBusinessRuleOutDto(BusinessRuleEntity businessRuleEntity) {
        if (ObjectUtils.isEmpty(businessRuleEntity))
            return null;
        return BusinessRuleOutDto.builder()
                .id(businessRuleEntity.getId())
                .code(businessRuleEntity.getCode())
                .description(businessRuleEntity.getDescription())
                .category(businessRuleEntity.getCategory())
                .value(businessRuleEntity.getValue())
                .country(countryEntityToCountryOutDto(businessRuleEntity.getCountry()))
                .build();
    }

    public static BusinessRuleOutDto statusActionBusinessRuleEntityListToBusinessRuleOutDto(
            BusinessRuleEntity businessRuleEntity,
            List<StatusActionBusinessRuleEntity> statusActionBusinessRuleEntityList) {
        if (ObjectUtils.isEmpty(statusActionBusinessRuleEntityList))
            return null;
        return BusinessRuleOutDto.builder()
                .id(businessRuleEntity.getId())
                .code(businessRuleEntity.getCode())
                .description(businessRuleEntity.getDescription())
                .category(businessRuleEntity.getCategory())
                .value(businessRuleEntity.getValue())
                .country(countryEntityToCountryOutDto(businessRuleEntity.getCountry()))
                .actions(statusActionBusinessRuleEntityList.stream()
                        .map(MapperUtil::statusActionBusinessRuleEntityToActionOutDto)
                        .toList())
                .build();
    }

    public static ActionOutDto statusActionBusinessRuleEntityToActionOutDto(
            StatusActionBusinessRuleEntity statusActionBusinessRuleEntity) {
        if (ObjectUtils.isEmpty(statusActionBusinessRuleEntity))
            return null;
        return ActionOutDto.builder()
                .status(statusEntityToStatusOutDto(statusActionBusinessRuleEntity.getStatus()))
                .description(statusActionBusinessRuleEntity.getDescription())
                .valid(statusActionBusinessRuleEntity.getValid())
                .value(statusActionBusinessRuleEntity.getValue())
                .build();
    }

    public static StatusOutDto statusEntityToStatusOutDto(StatusEntity statusEntity) {
        if (ObjectUtils.isEmpty(statusEntity))
            return null;
        return StatusOutDto.builder()
                .id(statusEntity.getId())
                .description(statusEntity.getDescription())
                .category(statusEntity.getCategory())
                .shortName(statusEntity.getShortName())
                .detail(statusEntity.getDetail())
                .build();
    }

    public static StatusValidationClientInDto statusUpdateBusinessRuleInDtoToStatusValidationClientInDto(
            StatusUpdateBusinessRuleInDto statusUpdateBusinessRuleInDto) {
        return StatusValidationClientInDto.builder()
                .originStatusId(statusUpdateBusinessRuleInDto.getOriginStatusId())
                .targetStatusId(statusUpdateBusinessRuleInDto.getTargetStatusId())
                .countryId(statusUpdateBusinessRuleInDto.getCountryId())
                .build();
    }

    public static StatusUpdateBusinessRuleOutDto toStatusUpdateBusinessRuleOutDto(
            Boolean result, String description, StatusTransitionClientOutDto statusTransitionClientOutDto) {
        return StatusUpdateBusinessRuleOutDto.builder()
                .isValid(result)
                .description(description)
                .originStatus(ObjectUtils.isEmpty(statusTransitionClientOutDto) ? null
                        : statusClientOutDtoToStatusOutDto(statusTransitionClientOutDto.getOriginStatus()))
                .targetStatus(ObjectUtils.isEmpty(statusTransitionClientOutDto) ? null
                        : statusClientOutDtoToStatusOutDto(statusTransitionClientOutDto.getTargetStatus()))
                .build();
    }

    public static StatusOutDto statusClientOutDtoToStatusOutDto(StatusClientOutDto statusClientOutDto) {
        if (ObjectUtils.isEmpty(statusClientOutDto))
            return null;
        return StatusOutDto.builder()
                .id(statusClientOutDto.getId())
                .description(statusClientOutDto.getDescription())
                .category(statusClientOutDto.getCategory())
                .shortName(statusClientOutDto.getShortName())
                .detail(statusClientOutDto.getDetail())
                .build();
    }

    public static StatusAllowedOptionsOutDto toStatusAllowedOptionsOutDto(
            Boolean isValid, String code, String description, StatusClientOutDto statusClientOutDto) {
        return StatusAllowedOptionsOutDto.builder()
                .isValid(isValid)
                .code(code)
                .description(description)
                .newStatus(statusClientOutDtoToStatusOutDto(statusClientOutDto))
                .build();
    }

    public static StatusUpdateTradeOutDto buildErrorStatusUpdateTradeOutDto(String code, String description) {
        return StatusUpdateTradeOutDto.builder()
                .isValid(false)
                .code(code)
                .description(description)
                .build();
    }

    public static StatusUpdateSettlementOutDto buildErrorStatusUpdateSettlementOutDto(String code, String description) {
        return StatusUpdateSettlementOutDto.builder()
                .isValid(false)
                .code(code)
                .description(description)
                .build();
    }

    public static InputRule businessRuleInDtoToInputRule(BusinessRuleInDto businessRuleInDto, String countryCode) {
        if (ObjectUtils.isEmpty(businessRuleInDto))
            return null;
        return InputRule.from(
                null,
                businessRuleInDto.getClearingDate(),
                businessRuleInDto.getMatchDate(),
                countryCode,
                businessRuleInDto.getTypeId(),
                null,
                businessRuleInDto.getCustodianStatusId(),
                fractionInDtoToInputFractions(businessRuleInDto.getFractionList()),
                businessRuleInDto.getSideEnum(),
                buildInputRuleSide(businessRuleInDto.getParticipantBuy(),
                        businessRuleInDto.getEnteringFirmBuy(),
                        businessRuleInDto.getBuyStatusId(),
                        businessRuleInDto.getAssignmentMarkBuy(),
                        businessRuleInDto.getFinalAssignmentMarkBuy(),
                        businessRuleInDto.getSourceQuoteBuyType()),
                buildInputRuleSide(businessRuleInDto.getParticipantSell(),
                        businessRuleInDto.getEnteringFirmSell(),
                        businessRuleInDto.getSellStatusId(),
                        businessRuleInDto.getAssignmentMarkSell(),
                        businessRuleInDto.getFinalAssignmentMarkSell(),
                        businessRuleInDto.getSourceQuoteSellType()));
    }

    public static InputRule tradeEntityToInputRule(TradeEntity tradeEntity,
            List<SettlementEntity> settlementEntityList, SideEnum sideEnum) {
        if (ObjectUtils.isEmpty(tradeEntity))
            return null;
        return InputRule.from(
                null,
                tradeEntity.getClearingDate(),
                tradeEntity.getMatchDate(),
                tradeEntity.getCountry().getCode(),
                tradeEntity.getTypeId(),
                tradeEntity.getStatusId(),
                tradeEntity.getCustodianStatusId(),
                settlementEntityToInputFractions(settlementEntityList),
                sideEnum,
                buildInputRuleSide(tradeEntity.getParticipantBuy(),
                        tradeEntity.getEnteringFirmBuy(),
                        tradeEntity.getBuyStatusId(),
                        tradeEntity.getAssignmentMarkBuy(),
                        tradeEntity.getFinalAssignmentMarkBuy(),
                        tradeEntity.getSourceQuoteBuyType()),
                buildInputRuleSide(tradeEntity.getParticipantSell(),
                        tradeEntity.getEnteringFirmSell(),
                        tradeEntity.getSellStatusId(),
                        tradeEntity.getAssignmentMarkSell(),
                        tradeEntity.getFinalAssignmentMarkSell(),
                        tradeEntity.getSourceQuoteSellType()));
    }

    public static InputRule settlementEntityToInputRule(SettlementEntity settlementEntity, SideEnum sideEnum) {
        if (ObjectUtils.isEmpty(settlementEntity))
            return null;
        TradeEntity tradeEntity = settlementEntity.getTrade();
        return InputRule.from(
                null,
                tradeEntity.getClearingDate(),
                tradeEntity.getMatchDate(),
                tradeEntity.getCountry().getCode(),
                tradeEntity.getTypeId(),
                settlementEntity.getStatusId(),
                settlementEntity.getCustodianStatusId(),
                settlementEntityToInputFractions(List.of(settlementEntity)),
                sideEnum,
                buildInputRuleSide(tradeEntity.getParticipantBuy(),
                        tradeEntity.getEnteringFirmBuy(),
                        tradeEntity.getBuyStatusId(),
                        tradeEntity.getAssignmentMarkBuy(),
                        tradeEntity.getFinalAssignmentMarkBuy(),
                        tradeEntity.getSourceQuoteBuyType()),
                buildInputRuleSide(tradeEntity.getParticipantSell(),
                        tradeEntity.getEnteringFirmSell(),
                        tradeEntity.getSellStatusId(),
                        tradeEntity.getAssignmentMarkSell(),
                        tradeEntity.getFinalAssignmentMarkSell(),
                        tradeEntity.getSourceQuoteSellType()));
    }

    public static InputParticipant participantInDtoToInputParticipant(ParticipantInDto participantInDto) {
        if (ObjectUtils.isEmpty(participantInDto)) {
            return InputParticipant.participantNull();
        } else {
            return InputParticipant.from(
                    participantInDto.getId(),
                    participantInDto.getCountryCode(),
                    participantInDto.getDcvRvOpersAuth(),
                    participantInDto.getDirectOperatorAgreements(),
                    null);
        }
    }

    public static List<InputFraction> fractionInDtoToInputFractions(List<FractionInDto> fractionInDtoList) {
        if (ObjectUtils.isEmpty(fractionInDtoList)) {
            return List.of();
        } else {
            return fractionInDtoList.stream()
                    .map(fractionInDto -> InputFraction.from(
                            fractionInDto.getSideId(),
                            fractionInDto.getCustodianId(),
                            fractionInDto.getCustodianStatusId(),
                            fractionInDto.getStatusId()))
                    .toList();
        }
    }

    public static List<InputFraction> settlementEntityToInputFractions(List<SettlementEntity> settlementEntityList) {
        if (ObjectUtils.isEmpty(settlementEntityList)) {
            return List.of();
        } else {
            return settlementEntityList.stream()
                    .map(settlementEntity -> InputFraction.from(
                            settlementEntity.getSideId(),
                            settlementEntity.getCustodianId(),
                            settlementEntity.getCustodianStatusId(),
                            settlementEntity.getStatusId()))
                    .toList();
        }
    }

    public static InputParticipant participantEntityToInputParticipant(ParticipantEntity participantEntity) {
        if (ObjectUtils.isEmpty(participantEntity)) {
            return InputParticipant.participantNull();
        } else {
            return InputParticipant.from(
                    participantEntity.getId(),
                    participantEntity.getCountry().getCode(),
                    participantEntity.getDcvRvSettlementAuth(),
                    participantEntity.getDirectOperatorAgreements(),
                    participantEntity.getCountry().getTimeZone());
        }
    }

    public static InputRuleSide buildInputRuleSide(ParticipantInDto participantInDto, String enteringFirm,
            Long statusId, Boolean assignmentMark, Boolean finalAssignmentMark, Long sourceQuoteType) {
        return InputRuleSide.from(
                participantInDtoToInputParticipant(participantInDto),
                enteringFirm,
                statusId,
                assignmentMark,
                finalAssignmentMark,
                sourceQuoteType);
    }

    public static InputRuleSide buildInputRuleSide(ParticipantEntity participantEntity, String enteringFirm,
            Long statusId, Boolean assignmentMark, Boolean finalAssignmentMark, Long sourceQuoteType) {
        return InputRuleSide.from(
                participantEntityToInputParticipant(participantEntity),
                enteringFirm,
                statusId,
                assignmentMark,
                finalAssignmentMark,
                sourceQuoteType);
    }
}

```

## src/main/java/com/nubo/operations/rules/api/models/domain/BusinessRule.java

```java
package com.nubo.operations.rules.api.models.domain;

import com.nubo.operations.rules.api.models.dto.response.BusinessRuleCodeOutDto;
import com.nubo.operations.rules.api.models.entity.BusinessRuleEntity;
import com.nubo.operations.rules.api.models.entity.BusinessRuleValidationEntity;

public record BusinessRule(
        boolean isValid,
        String description,
        BusinessRuleValidationEntity businessRuleValidationEntity,
        BusinessRuleEntity businessRuleEntity) {

    public BusinessRuleCodeOutDto businessRuleCode() {
        if (businessRuleValidationEntity == null || businessRuleValidationEntity.getBusinessRule() == null) {
            return null;
        }
        return BusinessRuleCodeOutDto.builder()
                .ruleCode(businessRuleValidationEntity.getBusinessRule().getCode())
                .validationCode(businessRuleValidationEntity.getCode())
                .build();
    }

    public static BusinessRule validRule(String description, BusinessRuleEntity businessRuleEntity) {
        return new BusinessRule(true, description, null, businessRuleEntity);
    }

    public static BusinessRule invalidRule(String description, BusinessRuleEntity businessRuleEntity) {
        return new BusinessRule(false, description, null, businessRuleEntity);
    }

    public static BusinessRule validRule(String description, Long businessRuleId) {
        BusinessRuleEntity businessRuleEntity = BusinessRuleEntity.builder()
                .id(businessRuleId)
                .build();
        return new BusinessRule(true, description, null, businessRuleEntity);
    }

    public static BusinessRule invalidRule(String description, Long businessRuleId) {
        BusinessRuleEntity businessRuleEntity = BusinessRuleEntity.builder()
                .id(businessRuleId)
                .build();
        return new BusinessRule(false, description, null, businessRuleEntity);
    }

    public static BusinessRule invalidRule(String description, BusinessRuleValidationEntity businessRuleValidationEntity,
            Long businessRuleId) {
        BusinessRuleEntity businessRuleEntity = BusinessRuleEntity.builder()
                .id(businessRuleId)
                .build();
        return new BusinessRule(false, description, businessRuleValidationEntity, businessRuleEntity);
    }

    public static BusinessRule createBusinessRule(boolean isValid, String description,
            BusinessRuleEntity businessRuleEntity) {
        BusinessRuleEntity businessRule = businessRuleEntity == null ? new BusinessRuleEntity() : businessRuleEntity;
        return new BusinessRule(isValid, description, null, businessRule);
    }

}

```

## src/main/java/com/nubo/operations/rules/api/models/domain/InputFraction.java

```java
package com.nubo.operations.rules.api.models.domain;

public record InputFraction(
        String sideId,
        Long custodianId,
        Long custodianStatusId,
        Long statusId) {

    public static InputFraction from(String sideId, Long custodianId, Long custodianStatusId, Long statusId) {
        return new InputFraction(sideId, custodianId, custodianStatusId, statusId);
    }
}

```

## src/main/java/com/nubo/operations/rules/api/models/domain/InputParticipant.java

```java
package com.nubo.operations.rules.api.models.domain;

public record InputParticipant(
        Long participantId,
        String countryCode,
        Boolean dcvRvOpersAuth,
        Boolean directOperatorAgreements,
        String countryTimeZone) {

    public static InputParticipant from(Long participantId, String countryCode, Boolean dcvRvOpersAuth,
            Boolean directOperatorAgreements, String countryTimeZone) {
        return new InputParticipant(participantId, countryCode, dcvRvOpersAuth, directOperatorAgreements,
                countryTimeZone);
    }

    public static InputParticipant participantNull() {
        return new InputParticipant(null, null, null, null, null);
    }

}

```

## src/main/java/com/nubo/operations/rules/api/models/domain/InputRule.java

```java
package com.nubo.operations.rules.api.models.domain;

import java.time.LocalDate;
import java.util.List;

import com.nubo.operations.rules.api.models.enums.SideEnum;

public record InputRule(
        Long businessRuleId,
        LocalDate clearingDate,
        LocalDate matchDate,
        String countryCode,
        Long typeId,
        Long statusId,
        Long custodianStatusId,
        List<InputFraction> fractions,
        SideEnum sideEnum,
        InputRuleSide ruleSideBuy,
        InputRuleSide ruleSideSell) {

    public static InputRule from(Long businessRuleId, LocalDate clearingDate, LocalDate matchDate, String countryCode,
            Long typeId, Long statusId, Long custodianStatusId, List<InputFraction> fractions,
            SideEnum sideEnum, InputRuleSide ruleSideBuy, InputRuleSide ruleSideSell) {
        return new InputRule(businessRuleId, clearingDate, matchDate, countryCode, typeId,
                statusId, custodianStatusId, fractions, sideEnum, ruleSideBuy, ruleSideSell);
    }

    public static InputRule ruleNull() {
        return new InputRule(null, null, null, null, null, null, null, null, null, null, null);
    }

    public static InputRule updateBusinessRuleId(InputRule inputRule, Long businessRuleId) {
        return new InputRule(businessRuleId, inputRule.clearingDate(), inputRule.matchDate(), inputRule.countryCode(),
                inputRule.typeId(), inputRule.statusId(), inputRule.custodianStatusId(),
                inputRule.fractions(), inputRule.sideEnum(), inputRule.ruleSideBuy(), inputRule.ruleSideSell());
    }

    public static InputRule updateStatusId(InputRule inputRule, Long statusId) {
        return new InputRule(inputRule.businessRuleId(), inputRule.clearingDate(), inputRule.matchDate(),
                inputRule.countryCode(), inputRule.typeId(), statusId, inputRule.custodianStatusId(),
                inputRule.fractions(), inputRule.sideEnum(), inputRule.ruleSideBuy(), inputRule.ruleSideSell());
    }

    public static InputRule updateStatusIdBySide(InputRule inputRule, Long statusIdBuy, Long statusIdSell) {
        return new InputRule(inputRule.businessRuleId(), inputRule.clearingDate(), inputRule.matchDate(),
                inputRule.countryCode(), inputRule.typeId(), inputRule.statusId(), inputRule.custodianStatusId(),
                inputRule.fractions(), inputRule.sideEnum(),
                InputRuleSide.updateStatusId(inputRule.ruleSideBuy(), statusIdBuy),
                InputRuleSide.updateStatusId(inputRule.ruleSideSell(), statusIdSell));
    }

}

```

## src/main/java/com/nubo/operations/rules/api/models/domain/InputRuleSide.java

```java
package com.nubo.operations.rules.api.models.domain;

public record InputRuleSide(
        InputParticipant participant,
        String enteringFirm,
        Long statusId,
        Boolean assignmentMark,
        Boolean finalAssignmentMark,
        Long sourceQuoteType) {

    public static InputRuleSide from(InputParticipant participant, String enteringFirm, Long statusId,
            Boolean assignmentMark, Boolean finalAssignmentMark, Long sourceQuoteType) {
        InputParticipant inputParticipant = participant == null ? InputParticipant.participantNull() : participant;
        return new InputRuleSide(inputParticipant, enteringFirm, statusId, assignmentMark, finalAssignmentMark,
                sourceQuoteType);
    }

    public static InputRuleSide ruleSideNull() {
        return new InputRuleSide(InputParticipant.participantNull(), null, null, null, null, null);
    }

    public static InputRuleSide updateStatusId(InputRuleSide inputRuleSide, Long statusId) {
        return new InputRuleSide(inputRuleSide.participant(), inputRuleSide.enteringFirm(), statusId,
                inputRuleSide.assignmentMark(), inputRuleSide.finalAssignmentMark(),
                inputRuleSide.sourceQuoteType());
    }

}

```

## src/main/java/com/nubo/operations/rules/api/models/dto/request/BatchStatusUpdateTradeInDto.java

```java
package com.nubo.operations.rules.api.models.dto.request;

import java.util.List;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BatchStatusUpdateTradeInDto {

    @NotBlank
    private String batchId;

    @NotEmpty
    @Valid
    private List<BatchStatusUpdateTradeItemInDto> items;
}

```

## src/main/java/com/nubo/operations/rules/api/models/dto/request/BatchStatusUpdateTradeItemInDto.java

```java
package com.nubo.operations.rules.api.models.dto.request;

import com.nubo.operations.rules.api.models.enums.SideEnum;
import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BatchStatusUpdateTradeItemInDto {

    @NotBlank
    private String itemId;

    @NotNull
    private Long tradeId;

    @NotNull
    @JsonProperty("sideId")
    private SideEnum sideEnum;

    @NotBlank
    private String code;
}

```

## src/main/java/com/nubo/operations/rules/api/models/dto/request/BusinessRuleInDto.java

```java
package com.nubo.operations.rules.api.models.dto.request;

import java.time.LocalDate;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.nubo.operations.rules.api.models.enums.SideEnum;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Data
@SuperBuilder(toBuilder = true)
@NoArgsConstructor
@AllArgsConstructor
public class BusinessRuleInDto {

    @NotNull
    private Long countryId;

    @JsonProperty("sideId")
    private SideEnum sideEnum;

    private Long typeId;

    @Valid
    private ParticipantInDto participantSell;

    @Valid
    private ParticipantInDto participantBuy;

    private String enteringFirmSell;

    private String enteringFirmBuy;

    private Boolean assignmentMarkSell;

    private Boolean assignmentMarkBuy;

    private Boolean finalAssignmentMarkSell;

    private Boolean finalAssignmentMarkBuy;

    private Long sellStatusId;

    private Long buyStatusId;

    private Long custodianStatusId;

    @Valid
    private List<FractionInDto> fractionList;

    private LocalDate clearingDate;

    private LocalDate matchDate;

    private Long sourceQuoteBuyType;

    private Long sourceQuoteSellType;

}

```

## src/main/java/com/nubo/operations/rules/api/models/dto/request/FractionInDto.java

```java
package com.nubo.operations.rules.api.models.dto.request;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FractionInDto {

    @NotBlank
    private String sideId;

    private Long statusId;

    private Long custodianId;

    private Long custodianStatusId;

}

```

## src/main/java/com/nubo/operations/rules/api/models/dto/request/ParticipantInDto.java

```java
package com.nubo.operations.rules.api.models.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ParticipantInDto {
    
    private Long id;

    private String countryCode;

    private Boolean dcvRvOpersAuth;

    private Boolean directOperatorAgreements;
}
```

## src/main/java/com/nubo/operations/rules/api/models/dto/request/StatusAllowedOptionsInDto.java

```java
package com.nubo.operations.rules.api.models.dto.request;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import lombok.experimental.SuperBuilder;

@Getter
@Setter
@ToString(callSuper = true)
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
public class StatusAllowedOptionsInDto extends BusinessRuleInDto {

    @NotNull
    private String code;

    @NotNull
    private Long statusId;

}

```

## src/main/java/com/nubo/operations/rules/api/models/dto/request/StatusUpdateBusinessRuleInDto.java

```java
package com.nubo.operations.rules.api.models.dto.request;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import lombok.experimental.SuperBuilder;

@Getter
@Setter
@ToString(callSuper = true)
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
public class StatusUpdateBusinessRuleInDto extends BusinessRuleInDto {

    private Long originStatusId;

    @NotNull
    private Long targetStatusId;

}

```

## src/main/java/com/nubo/operations/rules/api/models/dto/request/StatusUpdateSettlementInDto.java

```java
package com.nubo.operations.rules.api.models.dto.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.nubo.operations.rules.api.models.enums.SideEnum;

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
    @JsonProperty("sideId")
    private SideEnum sideEnum;

    @NotNull
    private Integer fraction;

    @NotNull
    private String code;

}

```

## src/main/java/com/nubo/operations/rules/api/models/dto/request/StatusUpdateTradeInDto.java

```java
package com.nubo.operations.rules.api.models.dto.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.nubo.operations.rules.api.models.enums.SideEnum;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class StatusUpdateTradeInDto {

    @NotNull
    private Long tradeId;

    @NotNull
    @JsonProperty("sideId")
    private SideEnum sideEnum;

    @NotNull
    private String code;

}

```

## src/main/java/com/nubo/operations/rules/api/models/dto/response/ActionOutDto.java

```java
package com.nubo.operations.rules.api.models.dto.response;

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
public class ActionOutDto {

    private Boolean valid;
    
    private StatusOutDto status;

    private String description;

    private String value;

}

```

## src/main/java/com/nubo/operations/rules/api/models/dto/response/BatchStatusUpdateTradeItemOutDto.java

```java
package com.nubo.operations.rules.api.models.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BatchStatusUpdateTradeItemOutDto {

    private String itemId;
    private Long tradeId;
    private String sideId;
    private Boolean prevalidated;
    private StatusUpdateTradeOutDto result;
    private String fallbackReason;
    private String errorCode;
    private String errorMessage;
}

```

## src/main/java/com/nubo/operations/rules/api/models/dto/response/BatchStatusUpdateTradeOutDto.java

```java
package com.nubo.operations.rules.api.models.dto.response;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BatchStatusUpdateTradeOutDto {

    private String batchId;
    private List<BatchStatusUpdateTradeItemOutDto> items;
}

```

## src/main/java/com/nubo/operations/rules/api/models/dto/response/BusinessRuleCodeOutDto.java

```java
package com.nubo.operations.rules.api.models.dto.response;

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
public class BusinessRuleCodeOutDto {

    private String ruleCode;

    private String validationCode;

}

```

## src/main/java/com/nubo/operations/rules/api/models/dto/response/BusinessRuleOutDto.java

```java
package com.nubo.operations.rules.api.models.dto.response;

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
@JsonInclude(JsonInclude.Include.NON_NULL)
public class BusinessRuleOutDto {

    private Long id;

    private String code;

    private String description;

    private String category;

    private String value;

    private CountryOutDto country;

    private List<ActionOutDto> actions;

}

```

## src/main/java/com/nubo/operations/rules/api/models/dto/response/CountryOutDto.java

```java
package com.nubo.operations.rules.api.models.dto.response;

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
    
    private String timeZone;

}


```

## src/main/java/com/nubo/operations/rules/api/models/dto/response/StatusAllowedOptionsOutDto.java

```java
package com.nubo.operations.rules.api.models.dto.response;

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
public class StatusAllowedOptionsOutDto {

    private Boolean isValid;

    private String description;

    private String code;

    private BusinessRuleCodeOutDto businessRuleCode;

    private StatusOutDto newStatus;

}

```

## src/main/java/com/nubo/operations/rules/api/models/dto/response/StatusOutDto.java

```java
package com.nubo.operations.rules.api.models.dto.response;

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

    private String shortName;

    private String detail;
}

```

## src/main/java/com/nubo/operations/rules/api/models/dto/response/StatusUpdateBusinessRuleOutDto.java

```java
package com.nubo.operations.rules.api.models.dto.response;

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
public class StatusUpdateBusinessRuleOutDto {

    private Boolean isValid;

    private String description;

    private BusinessRuleCodeOutDto businessRuleCode;

    private StatusOutDto originStatus;

    private StatusOutDto targetStatus;

}

```

## src/main/java/com/nubo/operations/rules/api/models/dto/response/StatusUpdateSettlementOutDto.java

```java
package com.nubo.operations.rules.api.models.dto.response;

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
public class StatusUpdateSettlementOutDto {

    private Boolean isValid;

    private String description;

    private String code;

    private BusinessRuleCodeOutDto businessRuleCode;

    private StatusOutDto newStatus;

    private StatusOutDto newStatusCustodian;

}

```

## src/main/java/com/nubo/operations/rules/api/models/dto/response/StatusUpdateTradeOutDto.java

```java
package com.nubo.operations.rules.api.models.dto.response;

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
public class StatusUpdateTradeOutDto {

    private Boolean isValid;

    private String description;

    private String code;

    private BusinessRuleCodeOutDto businessRuleCode;

    private StatusOutDto newStatusSide;

    private StatusOutDto newStatusFraction;

    private StatusOutDto newStatusCustodianFraction;

    private StatusOutDto newStatusTrade;

}

```

## src/main/java/com/nubo/operations/rules/api/models/entity/BusinessRuleEntity.java

```java
package com.nubo.operations.rules.api.models.entity;

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
@Table(name = "\"BUSINESS_RULE\"", schema = "\"NUANBODB\"")
public class BusinessRuleEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"BUSINESS_RULE_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"CODE\"", length = 250)
    private String code;

    @Column(name = "\"DESCRIPTION\"")
    private String description;

    @Column(name = "\"CATEGORY\"")
    private String category;

    @Column(name = "\"VALUE\"")
    private String value;

    @ManyToOne
    @JoinColumn(name = "\"COUNTRY_ID\"")
    private CountryEntity country;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 250, nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDate;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        BusinessRuleEntity that = (BusinessRuleEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

}

```

## src/main/java/com/nubo/operations/rules/api/models/entity/BusinessRuleValidationEntity.java

```java
package com.nubo.operations.rules.api.models.entity;

import java.time.LocalDateTime;
import java.util.Objects;

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

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@IdClass(BusinessRuleValidationKey.class)
@Table(name = "\"BUSINESS_RULE_VALIDATION\"", schema = "\"NUANBODB\"")
public class BusinessRuleValidationEntity {

    @Id
    @ManyToOne
    @JoinColumn(name = "\"BUSINESS_RULE_ID\"")
    private BusinessRuleEntity businessRule;

    @Id
    @Column(name = "\"CODE\"", length = 250)
    private String code;

    @Column(name = "\"RULE_VALIDATION\"", nullable = false)
    private String ruleValidation;

    @Column(name = "\"MESSAGE_SUCCESS\"", nullable = false)
    private String messageSuccess;

    @Column(name = "\"MESSAGE_ERROR\"", nullable = false)
    private String messageError;

    @Column(name = "\"DESCRIPTION\"")
    private String description;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 250, nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDate;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        BusinessRuleValidationEntity that = (BusinessRuleValidationEntity) o;
        return Objects.equals(businessRule, that.businessRule) && Objects.equals(code, that.code);
    }

    @Override
    public int hashCode() {
        int result = businessRule != null ? businessRule.hashCode() : 0;
        result = 31 * result + (code != null ? code.hashCode() : 0);
        return result;
    }
}

```

## src/main/java/com/nubo/operations/rules/api/models/entity/BusinessRuleValidationKey.java

```java
package com.nubo.operations.rules.api.models.entity;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BusinessRuleValidationKey implements Serializable {

    private Long businessRule;

    private String code;

}

```

## src/main/java/com/nubo/operations/rules/api/models/entity/CountryEntity.java

```java
package com.nubo.operations.rules.api.models.entity;

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

## src/main/java/com/nubo/operations/rules/api/models/entity/HolidayEntity.java

```java
package com.nubo.operations.rules.api.models.entity;

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
import java.util.Objects;

@Getter
@Setter
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

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        HolidayEntity that = (HolidayEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
    
}

```

## src/main/java/com/nubo/operations/rules/api/models/entity/ParticipantEntity.java

```java
package com.nubo.operations.rules.api.models.entity;

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
    @JoinColumn(name = "\"COUNTRY_ID\"")
    private CountryEntity country;

    @Column(name = "\"DCV_RV_SETTLEMENT_AUTH\"")
    private Boolean dcvRvSettlementAuth;

    @Column(name = "\"DIRECT_OPERATOR_AGREEMENTS\"")
    private Boolean directOperatorAgreements;

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


}

```

## src/main/java/com/nubo/operations/rules/api/models/entity/ScheduleEntity.java

```java
package com.nubo.operations.rules.api.models.entity;

import java.time.LocalDate;
import java.time.LocalTime;
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

    @Column(name = "\"TYPE_ID\"")
    private Long typeId;

    @Column(name = "\"START_DATE\"")
    private LocalDate startDate;

    @Column(name = "\"END_DATE\"")
    private LocalDate endDate;

    @ManyToOne
    @JoinColumn(name = "\"COUNTRY_ID\"", nullable = false)
    private CountryEntity country;

    @Column(name = "\"FREQUENCY\"", nullable = false)
    private Integer frequency;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"", nullable = false)
    private StatusEntity status;

    @Column(name = "\"INTERNAL\"")
    private Boolean internal;

    @Column(name = "\"PROCESS_ID\"", nullable = false)
    private Long processId;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        ScheduleEntity that = (ScheduleEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
    
}

```

## src/main/java/com/nubo/operations/rules/api/models/entity/ScheduleExtensionEntity.java

```java
package com.nubo.operations.rules.api.models.entity;

import java.time.LocalTime;
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
    @JoinColumn(name = "\"STATUS_ID\"", nullable = false)
    private StatusEntity status;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        ScheduleExtensionEntity that = (ScheduleExtensionEntity) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/operations/rules/api/models/entity/SettlementEntity.java

```java
package com.nubo.operations.rules.api.models.entity;

import java.util.Objects;

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

@Getter
@Setter
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
    @Column(name = "\"SIDE_ID\"", nullable = false)
    private String sideId;

    @Column(name = "\"STATUS_ID\"")
    private Long statusId;

    @Column(name = "\"CUSTODIAN_ID\"")
    private Long custodianId;

    @Column(name = "\"CUSTODIAN_STATUS_ID\"")
    private Long custodianStatusId;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        SettlementEntity that = (SettlementEntity) o;
        return Objects.equals(trade, that.trade) && Objects.equals(fraction, that.fraction)
                && Objects.equals(sideId, that.sideId);
    }

    @Override
    public int hashCode() {
        int result = trade != null ? trade.hashCode() : 0;
        result = 31 * result + (fraction != null ? fraction.hashCode() : 0);
        result = 31 * result + (sideId != null ? sideId.hashCode() : 0);
        return result;
    }
}

```

## src/main/java/com/nubo/operations/rules/api/models/entity/SettlementKey.java

```java
package com.nubo.operations.rules.api.models.entity;

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

    private String sideId;

}

```

## src/main/java/com/nubo/operations/rules/api/models/entity/StatusActionBusinessRuleEntity.java

```java
package com.nubo.operations.rules.api.models.entity;

import java.time.LocalDateTime;
import java.util.Objects;

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

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@IdClass(StatusActionBusinessRuleKey.class)
@Table(name = "\"STATUS_ACTION_BUSINESS_RULE\"", schema = "\"NUANBODB\"")
public class StatusActionBusinessRuleEntity {

    @Id
    @ManyToOne
    @JoinColumn(name = "\"BUSINESS_RULE_ID\"")
    private BusinessRuleEntity businessRule;

    @Id
    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"")
    private StatusEntity status;

    @Column(name = "\"DESCRIPTION\"")
    private String description;

    @Column(name = "\"VALID\"")
    private Boolean valid;

    @Column(name = "\"VALUE\"")
    private String value;

    @Column(name = "\"LAST_MODIFY_USER\"", nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDate;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        StatusActionBusinessRuleEntity that = (StatusActionBusinessRuleEntity) o;
        return Objects.equals(businessRule, that.businessRule) && Objects.equals(status, that.status);
    }

    @Override
    public int hashCode() {
        int result = businessRule != null ? businessRule.hashCode() : 0;
        result = 31 * result + (status != null ? status.hashCode() : 0);
        return result;
    }

}

```

## src/main/java/com/nubo/operations/rules/api/models/entity/StatusActionBusinessRuleKey.java

```java
package com.nubo.operations.rules.api.models.entity;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class StatusActionBusinessRuleKey implements Serializable {

    private Long businessRule;

    private Long status;

}

```

## src/main/java/com/nubo/operations/rules/api/models/entity/StatusEntity.java

```java
package com.nubo.operations.rules.api.models.entity;

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
@Table(name = "\"STATUS\"", schema = "\"NUANBODB\"")
public class StatusEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"STATUS_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"DESCRIPTION\"")
    private String description;

    @Column(name = "\"CATEGORY\"")
    private String category;

    @Column(name = "\"SHORTNAME\"")
    private String shortName;

    @Column(name = "\"DETAIL\"")
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

## src/main/java/com/nubo/operations/rules/api/models/entity/TradeEntity.java

```java
package com.nubo.operations.rules.api.models.entity;

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

@Getter
@Setter
@Builder(toBuilder = true)
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

    @Column(name = "\"CLEARING_DATE\"")
    private LocalDate clearingDate;

    @Column(name = "\"RETURN_CLEARING_DATE\"")
    private LocalDate returnClearingDate;

    @Column(name = "\"TYPE_ID\"")
    private Long typeId;

    @ManyToOne
    @JoinColumn(name = "\"PARTICIPANT_ID_BUY\"")
    private ParticipantEntity participantBuy;

    @ManyToOne
    @JoinColumn(name = "\"PARTICIPANT_ID_SELL\"")
    private ParticipantEntity participantSell;

    @ManyToOne
    @JoinColumn(name = "\"COUNTRY_ID\"")
    private CountryEntity country;

    @Column(name = "\"ASSIGNMENT_MARK_BUY\"")
    private Boolean assignmentMarkBuy;

    @Column(name = "\"ASSIGNMENT_MARK_SELL\"")
    private Boolean assignmentMarkSell;

    @Column(name = "\"FINAL_ASSIGNMENT_MARK_BUY\"")
    private Boolean finalAssignmentMarkBuy;

    @Column(name = "\"FINAL_ASSIGNMENT_MARK_SELL\"")
    private Boolean finalAssignmentMarkSell;

    @Column(name = "\"FRACTIONAL_MARK_BUY\"")
    private Boolean fractionalMarkBuy;

    @Column(name = "\"FRACTIONAL_MARK_SELL\"")
    private Boolean fractionalMarkSell;

    @Column(name = "\"STATUS_ID\"", nullable = false)
    private Long statusId;

    @Column(name = "\"CUSTODIAN_STATUS_ID\"")
    private Long custodianStatusId;

    @Column(name = "\"SETTLEMENT_STATUS_ID\"")
    private Long settlementStatusId;

    @Column(name = "\"SELL_STATUS_ID\"")
    private Long sellStatusId;

    @Column(name = "\"BUY_STATUS_ID\"")
    private Long buyStatusId;

    @Column(name = "\"ENTERING_FIRM_BUY\"")
    private String enteringFirmBuy;

    @Column(name = "\"ENTERING_FIRM_SELL\"")
    private String enteringFirmSell;

    @Column(name = "\"SOURCE_QUOTE_BUY_TYPE\"")
    private Long sourceQuoteBuyType;

    @Column(name = "\"SOURCE_QUOTE_SELL_TYPE\"")
    private Long sourceQuoteSellType;

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

## src/main/java/com/nubo/operations/rules/api/models/enums/BusinessRuleEnum.java

```java
package com.nubo.operations.rules.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum BusinessRuleEnum {

    RULE_GENERAL("_GENERAL"),
    RULE_FRACTION("_BY_FRACTION"),
    RULE_FOLIO("_BY_FOLIO"),
    RULE_SIDE("_BY_SIDE"),
    RULE_FRACTION_CUSTODIAN("_BY_FRACTION_CUSTODIAN");

    private final String value;

}

```

## src/main/java/com/nubo/operations/rules/api/models/enums/BusinessRuleMessageEnum.java

```java
package com.nubo.operations.rules.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum BusinessRuleMessageEnum {

    INVALID_OPERATION_RULE("No es posible completar la solicitud: no existe una regla para el estado ingresado."),
    SUCCESS_BUSINESS_RULE("Reglas de negocio validadas con éxito."),
    INVALID_STATUS_TRANSITION("No existe la transición del estado ingresado.");

    private final String value;
}


```

## src/main/java/com/nubo/operations/rules/api/models/enums/CategoryEnum.java

```java
package com.nubo.operations.rules.api.models.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Arrays;
import java.util.Objects;

@Getter
@RequiredArgsConstructor
public enum CategoryEnum {

    OPERATION("OPERACION"),
    STATUS_ASSIGNMENT("ASIGNACION");

    private final String value;

    @JsonValue
    public String getValue() {
        return value;
    }

    @JsonCreator
    public static CategoryEnum fromValue(String value) {
        return Arrays.stream(CategoryEnum.values())
                .filter(status -> Objects.equals(status.value, value))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("StatusCategoryEnum, Unknown value: " + value));
    }
}

```

## src/main/java/com/nubo/operations/rules/api/models/enums/PropertiesEnum.java

```java
package com.nubo.operations.rules.api.models.enums;

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
    VERSION_API("version_api");

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

## src/main/java/com/nubo/operations/rules/api/models/enums/SideEnum.java

```java
package com.nubo.operations.rules.api.models.enums;

import java.util.Arrays;
import java.util.Objects;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum SideEnum {

    BUY("1"),
    SELL("2"),
    OTHER("0");

    private final String Id;

    @JsonValue
    public String getId() {
        return Id;
    }

    @JsonCreator
    public static SideEnum fromValue(String value) {
        return Arrays.stream(SideEnum.values())
                .filter(side -> Objects.equals(side.Id, value))
                .findFirst()
                .orElse(OTHER);
    }
}

```

## src/main/java/com/nubo/operations/rules/api/models/enums/StatusEnum.java

```java
package com.nubo.operations.rules.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum StatusEnum {

    NON_CUSTODIAL(null); //Non custodial status has null ID

    private final Long Id;

}

```

## src/main/java/com/nubo/operations/rules/api/models/enums/VersionApiEnum.java

```java
package com.nubo.operations.rules.api.models.enums;

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

## src/main/java/com/nubo/operations/rules/api/repository/BusinessRuleRepository.java

```java
package com.nubo.operations.rules.api.repository;

import com.nubo.operations.rules.api.models.entity.BusinessRuleEntity;

import jakarta.validation.constraints.NotNull;

import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;
import java.util.Set;

public interface BusinessRuleRepository extends JpaRepository<BusinessRuleEntity, Long> {

    @Query("""
            SELECT br FROM BusinessRuleEntity br
            JOIN br.country c
            WHERE br.category IN (:businessRuleCategories)
            AND br.code = :code
            AND c.id = :countryId
            """)
    @Cacheable(value = "businessRulesByCountryAndCode", key = "#countryId + '_' + #code")
    Optional<BusinessRuleEntity> findByCountryIdAndCode(
        @NotNull Set<String> businessRuleCategories,
        Long countryId,
        String code);

    @Query("""
            SELECT br FROM BusinessRuleEntity br
            WHERE br.category IN (:businessRuleCategories)
            AND br.code = :code
            AND br.country.id IS NULL
            """)
    @Cacheable(value = "businessRulesByAllCountryAndCode", key = "#code")
    Optional<BusinessRuleEntity> findByCodeAndAllCountry(
        @NotNull Set<String> businessRuleCategories,
        String code);

}

```

## src/main/java/com/nubo/operations/rules/api/repository/BusinessRuleValidationRepository.java

```java
package com.nubo.operations.rules.api.repository;

import java.util.List;

import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.nubo.operations.rules.api.models.entity.BusinessRuleValidationEntity;
import com.nubo.operations.rules.api.models.entity.BusinessRuleValidationKey;

public interface BusinessRuleValidationRepository
        extends JpaRepository<BusinessRuleValidationEntity, BusinessRuleValidationKey> {

    @Query("""
            SELECT bv FROM BusinessRuleValidationEntity bv
            WHERE bv.businessRule.id = :businessRuleId
            ORDER BY bv.code ASC
            """)
    @Cacheable(value = "businessRuleValidationsByBusinessRuleId", key = "#businessRuleId")
    List<BusinessRuleValidationEntity> findAllByBusinessRuleIdOrderByCode(Long businessRuleId);
}

```

## src/main/java/com/nubo/operations/rules/api/repository/CountryRepository.java

```java
package com.nubo.operations.rules.api.repository;

import java.util.Optional;

import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.lang.NonNull;

import com.nubo.operations.rules.api.models.entity.CountryEntity;

public interface CountryRepository extends JpaRepository<CountryEntity, Long> {

    @NonNull
    @Cacheable(value = "countriesById", key = "#id")
    Optional<CountryEntity> findById(@NonNull Long id);

    @NonNull
    @Cacheable(value = "countriesByCode", key = "#code")
    Optional<CountryEntity> findByCode(@NonNull String code);

}

```

## src/main/java/com/nubo/operations/rules/api/repository/HolidayRepository.java

```java
package com.nubo.operations.rules.api.repository;

import java.util.List;

import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.operations.rules.api.models.entity.HolidayEntity;

public interface HolidayRepository extends JpaRepository<HolidayEntity, Long> {

    @Cacheable(value = "holidaysByCountryCode", key = "#countryCode")
    List<HolidayEntity> findAllByCountry_Code(String countryCode);
}

```

## src/main/java/com/nubo/operations/rules/api/repository/ScheduleExtensionRepository.java

```java
package com.nubo.operations.rules.api.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.operations.rules.api.models.entity.ScheduleExtensionEntity;

public interface ScheduleExtensionRepository extends JpaRepository<ScheduleExtensionEntity, Long> {

    Optional<ScheduleExtensionEntity> findBySchedule_IdAndParticipant_Id(Long scheduleId, Long participantId);
}

```

## src/main/java/com/nubo/operations/rules/api/repository/ScheduleRepository.java

```java
package com.nubo.operations.rules.api.repository;

import java.util.Optional;

import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.operations.rules.api.models.entity.ScheduleEntity;

public interface ScheduleRepository extends JpaRepository<ScheduleEntity, Long> {

    @Cacheable(value = "scheduleByProcessAndCountry", key = "#processId + '-' + #countryCode")
    Optional<ScheduleEntity> findFirstByProcessIdAndCountry_Code(Long processId, String countryCode);

}

```

## src/main/java/com/nubo/operations/rules/api/repository/SettlementRepository.java

```java
package com.nubo.operations.rules.api.repository;

import java.util.Collection;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.nubo.operations.rules.api.models.entity.SettlementEntity;
import com.nubo.operations.rules.api.models.entity.SettlementKey;

public interface SettlementRepository extends JpaRepository<SettlementEntity, SettlementKey> {

    @Query("""
            SELECT s FROM SettlementEntity s
            WHERE s.trade.id = :tradeId AND s.sideId = :sideId
            """)
    List<SettlementEntity> findByTradeIdAndSideId(Long tradeId, String sideId);

    @Query("""
            SELECT s FROM SettlementEntity s
            WHERE s.trade.id IN :tradeIds AND s.sideId IN :sideIds
            """)
    List<SettlementEntity> findByTradeIdInAndSideIdIn(Collection<Long> tradeIds, Collection<String> sideIds);

}

```

## src/main/java/com/nubo/operations/rules/api/repository/StatusActionBusinessRuleRepository.java

```java
package com.nubo.operations.rules.api.repository;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.nubo.operations.rules.api.models.entity.StatusActionBusinessRuleEntity;
import com.nubo.operations.rules.api.models.entity.StatusActionBusinessRuleKey;

import jakarta.validation.constraints.NotNull;

public interface StatusActionBusinessRuleRepository
        extends JpaRepository<StatusActionBusinessRuleEntity, StatusActionBusinessRuleKey> {

    @Query("""
            SELECT sa FROM StatusActionBusinessRuleEntity sa
            JOIN sa.businessRule br
            JOIN sa.status s
            WHERE br.category IN (:businessRuleCategories)
                AND s.id = :statusId
                AND br.code = :code
                AND (br.country.id = :countryId OR br.country.id IS NULL)
            ORDER BY
                CASE WHEN br.country.id = :countryId THEN 0 ELSE 1 END
            """)
    @Cacheable(value = "statusActionBusinessRulesByStatusIdAndCodeAndCountry", key = "{#statusId, #code, #countryId}")
    List<StatusActionBusinessRuleEntity> findByStatusIdAndCodeAndCountryIdOrCountryNull(
            @NotNull Set<String> businessRuleCategories,
            @NotNull Long statusId,
            @NotNull String code,
            @NotNull Long countryId);

    @Query("""
            SELECT sa FROM StatusActionBusinessRuleEntity sa
            JOIN sa.businessRule br
            JOIN sa.status s
            WHERE br.category IN (:businessRuleCategories)
                AND br.id = :businessRuleId
                AND s.id = :statusId
            """)
    @Cacheable(value = "statusActionBusinessRuleByBusinessRuleIdAndStatusId", key = "{#businessRuleId, #statusId}")
    Optional<StatusActionBusinessRuleEntity> findByBusinessRuleIdAndStatusId(
            @NotNull Set<String> businessRuleCategories,
            @NotNull Long businessRuleId,
            @NotNull Long statusId);

    @Query("""
            SELECT sa FROM StatusActionBusinessRuleEntity sa
            JOIN sa.businessRule br
            WHERE br.category IN (:businessRuleCategories)
                AND br.code = :code
                AND br.country.id = :countryId
                AND sa.valid = true
            """)
    @Cacheable(value = "statusActionBusinessRulesByCodeAndCountry", key = "{#code, #countryId}")
    List<StatusActionBusinessRuleEntity> findAllByCodeAndCountryIdAndValidTrue(
            @NotNull Set<String> businessRuleCategories,
            @NotNull String code,
            @NotNull Long countryId);

    @Query("""
            SELECT sa FROM StatusActionBusinessRuleEntity sa
            JOIN sa.businessRule br
            WHERE br.category IN (:businessRuleCategories)
                AND br.code = :code
                AND br.country.id IS NULL
                AND sa.valid = true
            """)
    @Cacheable(value = "statusActionBusinessRulesByCodeAndAllCountry", key = "#code")
    List<StatusActionBusinessRuleEntity> findAllByCodeAndAllCountryAndValidTrue(
            @NotNull Set<String> businessRuleCategories,
            @NotNull String code);

    @Cacheable(value = "statusActionBusinessRulesByBusinessRuleId", key = "#businessRuleId")
    List<StatusActionBusinessRuleEntity> findAllByBusinessRule_Id(@NotNull Long businessRuleId);

    @Cacheable(value = "statusActionBusinessRulesByBusinessRuleCode", key = "#code")
    List<StatusActionBusinessRuleEntity> findAllByBusinessRule_Code(@NotNull String code);
}

```

## src/main/java/com/nubo/operations/rules/api/repository/TradeRepository.java

```java
package com.nubo.operations.rules.api.repository;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.nubo.operations.rules.api.models.entity.TradeEntity;

public interface TradeRepository extends JpaRepository<TradeEntity, Long> {

	@EntityGraph(attributePaths = { "country", "participantBuy", "participantSell" })
	@Query("SELECT t FROM TradeEntity t WHERE t.id = :tradeId")
	Optional<TradeEntity> findDetailedById(Long tradeId);

	@EntityGraph(attributePaths = { "country", "participantBuy", "participantSell" })
	@Query("SELECT t FROM TradeEntity t WHERE t.id IN :tradeIds")
	List<TradeEntity> findDetailedByIdIn(Collection<Long> tradeIds);

}

```

## src/main/java/com/nubo/operations/rules/api/service/OperationActionBusinessRuleService.java

```java
package com.nubo.operations.rules.api.service;

import com.nubo.operations.rules.api.models.dto.request.StatusAllowedOptionsInDto;
import com.nubo.operations.rules.api.models.dto.response.BusinessRuleOutDto;
import com.nubo.operations.rules.api.models.dto.response.StatusAllowedOptionsOutDto;

public interface OperationActionBusinessRuleService {

    StatusAllowedOptionsOutDto validateStatusAndCode(StatusAllowedOptionsInDto statusAllowedOptionsInDto);

    BusinessRuleOutDto actionBusinessRuleByCountryIdAndCodeValid(Long countryId, String code);

    BusinessRuleOutDto actionBusinessRuleByCountryAllAndCodeValid(String code);
    
}

```

## src/main/java/com/nubo/operations/rules/api/service/OperationBusinessRuleService.java

```java
package com.nubo.operations.rules.api.service;

import com.nubo.operations.rules.api.models.dto.response.BusinessRuleOutDto;

public interface OperationBusinessRuleService {

    BusinessRuleOutDto findBusinessRuleByCountryIdAndCode(Long countryId, String code);

    BusinessRuleOutDto findBusinessRuleByCode(String code);

}

```

## src/main/java/com/nubo/operations/rules/api/service/RuleService.java

```java
package com.nubo.operations.rules.api.service;

import com.nubo.operations.rules.api.models.domain.BusinessRule;
import com.nubo.operations.rules.api.models.domain.InputRule;

public interface RuleService {

    BusinessRule validateExpression(Long businessRuleId, Long statusId, InputRule inputRule);

    BusinessRule validateExpression(Long businessRuleId, InputRule inputRule);

}

```

## src/main/java/com/nubo/operations/rules/api/service/StatusUpdateBusinessRuleService.java

```java
package com.nubo.operations.rules.api.service;

import com.nubo.operations.rules.api.models.dto.request.StatusUpdateBusinessRuleInDto;
import com.nubo.operations.rules.api.models.dto.request.StatusUpdateSettlementInDto;
import com.nubo.operations.rules.api.models.dto.request.StatusUpdateTradeInDto;
import com.nubo.operations.rules.api.models.dto.request.BatchStatusUpdateTradeInDto;
import com.nubo.operations.rules.api.models.dto.response.StatusUpdateBusinessRuleOutDto;
import com.nubo.operations.rules.api.models.dto.response.StatusUpdateSettlementOutDto;
import com.nubo.operations.rules.api.models.dto.response.StatusUpdateTradeOutDto;
import com.nubo.operations.rules.api.models.dto.response.BatchStatusUpdateTradeOutDto;

public interface StatusUpdateBusinessRuleService {

    StatusUpdateBusinessRuleOutDto validateUpdateStatusOperation(StatusUpdateBusinessRuleInDto transitionInDto);

    StatusUpdateTradeOutDto validateUpdateStatusTrade(StatusUpdateTradeInDto statusUpdateTradeInDto);

    BatchStatusUpdateTradeOutDto validateUpdateStatusTradeBatch(BatchStatusUpdateTradeInDto batchRequest);

    StatusUpdateSettlementOutDto validateUpdateStatusSettlement(
            StatusUpdateSettlementInDto statusUpdateSettlementInDto);

}

```

## src/main/java/com/nubo/operations/rules/api/service/impl/OperationActionBusinessRuleServiceImpl.java

```java
package com.nubo.operations.rules.api.service.impl;

import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.Set;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;

import com.nubo.operations.rules.api.application.properties.PropertiesContext;
import com.nubo.operations.rules.api.client.status.models.dto.response.StatusClientOutDto;
import com.nubo.operations.rules.api.client.status.models.dto.response.StatusTransitionClientOutDto;
import com.nubo.operations.rules.api.client.status.service.OperationStatusClient;
import com.nubo.operations.rules.api.exception.ServiceException;
import com.nubo.operations.rules.api.exception.error.ErrorCode;
import com.nubo.operations.rules.api.helpers.MapperUtil;
import com.nubo.operations.rules.api.models.domain.BusinessRule;
import com.nubo.operations.rules.api.models.domain.InputRule;
import com.nubo.operations.rules.api.models.dto.request.StatusAllowedOptionsInDto;
import com.nubo.operations.rules.api.models.dto.response.BusinessRuleCodeOutDto;
import com.nubo.operations.rules.api.models.dto.response.BusinessRuleOutDto;
import com.nubo.operations.rules.api.models.dto.response.StatusAllowedOptionsOutDto;
import com.nubo.operations.rules.api.models.entity.BusinessRuleEntity;
import com.nubo.operations.rules.api.models.entity.StatusActionBusinessRuleEntity;
import com.nubo.operations.rules.api.models.enums.BusinessRuleMessageEnum;
import com.nubo.operations.rules.api.models.enums.CategoryEnum;
import com.nubo.operations.rules.api.models.enums.VersionApiEnum;
import com.nubo.operations.rules.api.repository.StatusActionBusinessRuleRepository;
import com.nubo.operations.rules.api.service.OperationActionBusinessRuleService;
import com.nubo.operations.rules.api.service.RuleService;

import io.micrometer.core.annotation.Timed;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional(readOnly = true)
public class OperationActionBusinessRuleServiceImpl implements OperationActionBusinessRuleService {

    private final StatusActionBusinessRuleRepository statusActionBusinessRuleRepository;
    private final OperationStatusClient operationStatusClient;
    private final RuleService ruleService;

    @Override
    @Timed(value = "nubo.operations.rules.processing.duration", description = "Business processing duration", extraTags = {
            "operation", "validateStatusAndCode" })
    public StatusAllowedOptionsOutDto validateStatusAndCode(StatusAllowedOptionsInDto statusAllowedOptionsInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return validateStatusAndCodeV1(statusAllowedOptionsInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    @Override
    @Timed(value = "nubo.operations.rules.processing.duration", description = "Business processing duration", extraTags = {
            "operation", "actionBusinessRuleByCountryIdAndCodeValid" })
    public BusinessRuleOutDto actionBusinessRuleByCountryIdAndCodeValid(Long countryId, String code) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return actionBusinessRuleByCountryIdAndCodeValidV1(countryId, code);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    @Override
    @Timed(value = "nubo.operations.rules.processing.duration", description = "Business processing duration", extraTags = {
            "operation", "actionBusinessRuleByCountryAllAndCodeValid" })
    public BusinessRuleOutDto actionBusinessRuleByCountryAllAndCodeValid(String code) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return actionBusinessRuleByCountryAllAndCodeValidV1(code);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private StatusAllowedOptionsOutDto validateStatusAndCodeV1(StatusAllowedOptionsInDto statusAllowedOptionsInDto) {
                log.debug("Start method validateStatusAndCodeV1, statusAllowedOptionsInDto -> {}", statusAllowedOptionsInDto);

        BusinessRule businessRule = this.validateStatusActionBusinessRule(statusAllowedOptionsInDto);

        String code = statusAllowedOptionsInDto.getCode();
        boolean isValid = businessRule.isValid();
        String description = businessRule.description();
        BusinessRuleCodeOutDto businessRuleCode = businessRule.businessRuleCode();
        StatusClientOutDto targetStatus = null;
        if (isValid) {
            BusinessRule businessRuleExpr = validateExpression(businessRule.businessRuleEntity(),
                    statusAllowedOptionsInDto);

            if (businessRuleExpr.isValid()) {
                StatusTransitionClientOutDto statusTransitionClientOutDto = operationStatusClient
                        .transitionByBusinessRuleIdAndOriginStatusId(businessRule.businessRuleEntity().getId(),
                                statusAllowedOptionsInDto.getStatusId());
                targetStatus = statusTransitionClientOutDto.getTargetStatus();
            } else {
                isValid = false;
                description = businessRuleExpr.description();
                businessRuleCode = businessRuleExpr.businessRuleCode();
            }
        }

        StatusAllowedOptionsOutDto statusAllowedOptionsOutDto = MapperUtil
                .toStatusAllowedOptionsOutDto(isValid, code, description, targetStatus);
        statusAllowedOptionsOutDto.setBusinessRuleCode(businessRuleCode);

                log.debug("End method validateStatusAndCodeV1, statusAllowedOptionsOutDto -> {}", statusAllowedOptionsOutDto);
        return statusAllowedOptionsOutDto;
    }

    private BusinessRule validateStatusActionBusinessRule(StatusAllowedOptionsInDto statusAllowedOptionsInDto) {
        Set<String> businessRuleCategories = Set.of(CategoryEnum.OPERATION.getValue());
        List<StatusActionBusinessRuleEntity> sActionBusinessRuleEntityOptional = statusActionBusinessRuleRepository
                .findByStatusIdAndCodeAndCountryIdOrCountryNull(businessRuleCategories,
                        statusAllowedOptionsInDto.getStatusId(),
                        statusAllowedOptionsInDto.getCode(), statusAllowedOptionsInDto.getCountryId());

        if (!sActionBusinessRuleEntityOptional.isEmpty()) {
            StatusActionBusinessRuleEntity sActionBusinessRuleEntity = sActionBusinessRuleEntityOptional.get(0);
            String description = String.format("%s → %s", sActionBusinessRuleEntity.getStatus().getShortName(),
                    sActionBusinessRuleEntity.getDescription());
            boolean isValid = Boolean.TRUE.equals(sActionBusinessRuleEntity.getValid());
            BusinessRuleEntity businessRule = ObjectUtils.isEmpty(sActionBusinessRuleEntity.getBusinessRule())
                    ? null
                    : sActionBusinessRuleEntity.getBusinessRule();
            return BusinessRule.createBusinessRule(isValid, description, businessRule);
        }

        String descriptionError = String.format("%s, [statusId: %s]",
                BusinessRuleMessageEnum.INVALID_OPERATION_RULE.getValue(), statusAllowedOptionsInDto.getStatusId());
        log.warn("No valid Status Action Business Rule found");
        return BusinessRule.invalidRule(descriptionError, 0L);
    }

    private BusinessRuleOutDto actionBusinessRuleByCountryIdAndCodeValidV1(Long countryId, String code) {
                log.debug("Start method actionBusinessRuleByCountryIdAndCodeValidV1, countryId -> {}, code -> {}",
                countryId, code);

        List<StatusActionBusinessRuleEntity> actionBusinessRuleEntityList = this.findAllActionByCountryIdAndCode(
                countryId, code);

        BusinessRuleEntity businessRuleEntity = Optional.ofNullable(actionBusinessRuleEntityList)
                .filter(list -> !list.isEmpty())
                .map(list -> list.get(0))
                .map(StatusActionBusinessRuleEntity::getBusinessRule)
                .orElseThrow(
                        () -> new ServiceException(ErrorCode.ACTION_BUSINESS_RULE_NOT_FOUND, HttpStatus.NOT_FOUND));

        BusinessRuleOutDto businessRuleOutDto = MapperUtil
                .statusActionBusinessRuleEntityListToBusinessRuleOutDto(businessRuleEntity,
                        actionBusinessRuleEntityList);

        log.debug("End method actionBusinessRuleByCountryIdAndCodeValidV1, businessRuleOutDto -> {}",
                businessRuleOutDto);

        return businessRuleOutDto;
    }

    private BusinessRuleOutDto actionBusinessRuleByCountryAllAndCodeValidV1(String code) {
                log.debug("Start method actionBusinessRuleByCountryAllAndCodeValidV1, code -> {}", code);

        Set<String> businessRuleCategories = Set.of(CategoryEnum.OPERATION.getValue());
        List<StatusActionBusinessRuleEntity> actionBusinessRuleEntityList = statusActionBusinessRuleRepository
                .findAllByCodeAndAllCountryAndValidTrue(businessRuleCategories, code);

        BusinessRuleEntity businessRuleEntity = Optional.ofNullable(actionBusinessRuleEntityList)
                .filter(list -> !list.isEmpty())
                .map(list -> list.get(0))
                .map(StatusActionBusinessRuleEntity::getBusinessRule)
                .orElseThrow(
                        () -> new ServiceException(ErrorCode.ACTION_BUSINESS_RULE_NOT_FOUND, HttpStatus.NOT_FOUND));

        BusinessRuleOutDto businessRuleOutDto = MapperUtil
                .statusActionBusinessRuleEntityListToBusinessRuleOutDto(businessRuleEntity,
                        actionBusinessRuleEntityList);

        log.debug("End method actionBusinessRuleByCountryAllAndCodeValidV1, businessRuleOutDto -> {}",
                businessRuleOutDto);

        return businessRuleOutDto;
    }

    private List<StatusActionBusinessRuleEntity> findAllActionByCountryIdAndCode(Long countryId, String code) {
        Set<String> businessRuleCategories = Set.of(CategoryEnum.OPERATION.getValue());
        List<StatusActionBusinessRuleEntity> actionBusinessRuleByCountry = statusActionBusinessRuleRepository
                .findAllByCodeAndCountryIdAndValidTrue(businessRuleCategories, code, countryId);

        if (actionBusinessRuleByCountry.isEmpty()) {
            return statusActionBusinessRuleRepository
                    .findAllByCodeAndAllCountryAndValidTrue(businessRuleCategories, code);
        } else {
            return actionBusinessRuleByCountry;
        }
    }

    private BusinessRule validateExpression(BusinessRuleEntity businessRuleEntity,
            StatusAllowedOptionsInDto statusAllowedOptionsInDto) {
        String countryCode = businessRuleEntity.getCountry() == null ? null : businessRuleEntity.getCountry().getCode();
        InputRule inputRule = MapperUtil.businessRuleInDtoToInputRule(statusAllowedOptionsInDto, countryCode);

        return ruleService.validateExpression(businessRuleEntity.getId(), statusAllowedOptionsInDto.getStatusId(),
                inputRule);
    }

}

```

## src/main/java/com/nubo/operations/rules/api/service/impl/OperationBusinessRuleServiceImpl.java

```java
package com.nubo.operations.rules.api.service.impl;

import com.nubo.operations.rules.api.application.properties.PropertiesContext;
import com.nubo.operations.rules.api.exception.ServiceException;
import com.nubo.operations.rules.api.exception.error.ErrorCode;
import com.nubo.operations.rules.api.helpers.MapperUtil;
import com.nubo.operations.rules.api.models.dto.response.BusinessRuleOutDto;
import com.nubo.operations.rules.api.models.entity.CountryEntity;
import com.nubo.operations.rules.api.models.entity.BusinessRuleEntity;
import com.nubo.operations.rules.api.models.enums.CategoryEnum;
import com.nubo.operations.rules.api.models.enums.VersionApiEnum;
import com.nubo.operations.rules.api.repository.CountryRepository;
import com.nubo.operations.rules.api.repository.BusinessRuleRepository;
import com.nubo.operations.rules.api.service.OperationBusinessRuleService;
import io.micrometer.core.annotation.Timed;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Objects;
import java.util.Optional;
import java.util.Set;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional(readOnly = true)
public class OperationBusinessRuleServiceImpl implements OperationBusinessRuleService {

    private final CountryRepository countryRepository;
    private final BusinessRuleRepository businessRuleRepository;

    @Override
    @Timed(value = "nubo.operations.rules.processing.duration", description = "Business processing duration", extraTags = {
            "operation", "findBusinessRuleByCountryIdAndCode" })
    public BusinessRuleOutDto findBusinessRuleByCountryIdAndCode(Long countryId, String code) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findBusinessRuleByCountryIdAndCodeV1(countryId, code);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private BusinessRuleOutDto findBusinessRuleByCountryIdAndCodeV1(Long countryId, String code) {
        log.debug("Start method findBusinessRuleByCountryIdAndCodeV1, countryId -> {}, code -> {}", countryId, code);

        CountryEntity countryEntity = validateCountry(countryId);

        BusinessRuleEntity operationBusinessRuleEntity = validateBusinessRuleByCountryAndCode(countryEntity.getId(),
                code);

        BusinessRuleOutDto businessRuleOutDto = MapperUtil
                .businessRuleEntityToBusinessRuleOutDto(operationBusinessRuleEntity);

        log.debug("End method findBusinessRuleByCountryIdAndCodeV1, businessRuleOutDto -> {}", businessRuleOutDto);

        return businessRuleOutDto;
    }

    @Override
    @Timed(value = "nubo.operations.rules.processing.duration", description = "Business processing duration", extraTags = {
            "operation", "findBusinessRuleByCode" })
    public BusinessRuleOutDto findBusinessRuleByCode(String code) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findBusinessRuleByCodeV1(code);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private BusinessRuleOutDto findBusinessRuleByCodeV1(String code) {
        log.debug("Start method findBusinessRuleByCodeV1, code -> {}", code);

        BusinessRuleEntity operationBusinessRuleEntity = validateBusinessRuleByCode(code);

        BusinessRuleOutDto businessRuleOutDto = MapperUtil
                .businessRuleEntityToBusinessRuleOutDto(operationBusinessRuleEntity);

        log.debug("End method findBusinessRuleByCodeV1, businessRuleOutDto -> {}", businessRuleOutDto);

        return businessRuleOutDto;
    }

    private CountryEntity validateCountry(Long countryId) {
        if (countryId == null) {
            throw new ServiceException(ErrorCode.COUNTRY_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
        return countryRepository.findById(countryId)
                .orElseThrow(() -> new ServiceException(ErrorCode.COUNTRY_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private BusinessRuleEntity validateBusinessRuleByCode(String code) {
        Set<String> businessRuleCategories = Set.of(CategoryEnum.OPERATION.getValue());
        return businessRuleRepository.findByCodeAndAllCountry(businessRuleCategories, code)
                .orElseThrow(() -> new ServiceException(ErrorCode.BUSINESS_RULE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private BusinessRuleEntity validateBusinessRuleByCountryAndCode(Long countryId, String code) {
        Set<String> businessRuleCategories = Set.of(CategoryEnum.OPERATION.getValue());
        Optional<BusinessRuleEntity> businessRuleEntityOptional = businessRuleRepository
                .findByCountryIdAndCode(businessRuleCategories, countryId, code);

        if (businessRuleEntityOptional.isEmpty()) {
            return businessRuleRepository
                    .findByCodeAndAllCountry(businessRuleCategories, code)
                    .orElseThrow(() -> new ServiceException(ErrorCode.BUSINESS_RULE_NOT_FOUND, HttpStatus.NOT_FOUND));
        } else {
            return businessRuleEntityOptional.get();
        }
    }

}

```

## src/main/java/com/nubo/operations/rules/api/service/impl/RuleServiceImpl.java

```java
package com.nubo.operations.rules.api.service.impl;

import java.time.Clock;
import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.io.Serializable;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import com.github.benmanes.caffeine.cache.Cache;
import com.github.benmanes.caffeine.cache.Caffeine;
import org.mvel2.MVEL;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;
import com.nubo.operations.rules.api.application.util.ApplicationUtils;
import com.nubo.operations.rules.api.client.calculation.day.models.response.BusinessDayOutDto;
import com.nubo.operations.rules.api.client.calculation.day.service.BusinessDayCalculationClient;
import com.nubo.operations.rules.api.models.domain.BusinessRule;
import com.nubo.operations.rules.api.models.domain.InputFraction;
import com.nubo.operations.rules.api.models.domain.InputParticipant;
import com.nubo.operations.rules.api.models.domain.InputRule;
import com.nubo.operations.rules.api.models.domain.InputRuleSide;
import com.nubo.operations.rules.api.models.entity.BusinessRuleValidationEntity;
import com.nubo.operations.rules.api.models.entity.CountryEntity;
import com.nubo.operations.rules.api.models.entity.HolidayEntity;
import com.nubo.operations.rules.api.models.entity.ScheduleEntity;
import com.nubo.operations.rules.api.models.entity.ScheduleExtensionEntity;
import com.nubo.operations.rules.api.models.entity.StatusActionBusinessRuleEntity;
import com.nubo.operations.rules.api.models.enums.BusinessRuleMessageEnum;
import com.nubo.operations.rules.api.models.enums.SideEnum;
import com.nubo.operations.rules.api.repository.BusinessRuleValidationRepository;
import com.nubo.operations.rules.api.repository.CountryRepository;
import com.nubo.operations.rules.api.repository.HolidayRepository;
import com.nubo.operations.rules.api.repository.ScheduleExtensionRepository;
import com.nubo.operations.rules.api.repository.ScheduleRepository;
import com.nubo.operations.rules.api.repository.StatusActionBusinessRuleRepository;
import com.nubo.operations.rules.api.service.RuleService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional(readOnly = true)
public class RuleServiceImpl implements RuleService {

    private final BusinessRuleValidationRepository businessRuleValidationRepository;
    private final StatusActionBusinessRuleRepository statusActionBusinessRuleRepository;
    private final HolidayRepository holidayRepository;
    private final ScheduleRepository scheduleRepository;
    private final ScheduleExtensionRepository scheduleExtensionRepository;
    private final BusinessDayCalculationClient businessDayCalculationClient;
    private final CountryRepository countryRepository;
    private final Clock clock;
    private final Cache<String, Serializable> compiledExpressionCache = Caffeine.newBuilder()
            .maximumSize(5000)
            .build();

    @Override
    public BusinessRule validateExpression(Long businessRuleId, Long statusId, InputRule inputRule) {
        InputRule updatedInputRule = statusId == null ? inputRule : InputRule.updateStatusId(inputRule, statusId);
        return validateExpression(
                businessRuleId,
                updatedInputRule);
    }

    @Override
    public BusinessRule validateExpression(Long businessRuleId, InputRule inputRule) {
        log.debug("Start method validateExpression for businessRuleId: {}", businessRuleId);

        List<BusinessRuleValidationEntity> businessRuleValidationEntityList = businessRuleValidationRepository
                .findAllByBusinessRuleIdOrderByCode(businessRuleId);
        log.debug("Found {} validations for businessRuleId: {}", businessRuleValidationEntityList.size(),
                businessRuleId);

        InputRule updateInputRule = InputRule.updateBusinessRuleId(inputRule, businessRuleId);

        for (BusinessRuleValidationEntity businessRuleValidationEntity : businessRuleValidationEntityList) {
            String expression = ObjectUtils.isEmpty(businessRuleValidationEntity.getRuleValidation()) ? ""
                    : businessRuleValidationEntity.getRuleValidation();

            boolean resultExpression = parseMvelExpression(expression, updateInputRule);
            if (!resultExpression) {
                return BusinessRule.invalidRule(businessRuleValidationEntity.getMessageError(),
                        businessRuleValidationEntity, businessRuleId);
            }
        }
        return BusinessRule.validRule(BusinessRuleMessageEnum.SUCCESS_BUSINESS_RULE.getValue(), businessRuleId);
    }

    private boolean parseMvelExpression(String expression, InputRule inputRule) {
        log.trace("Validate Expression -> [{}] with rule -> {}", expression, inputRule);

        if (expression.isBlank())
            return true;
        try {
            InputRule rule = inputRule == null ? InputRule.ruleNull() : inputRule;
            InputRuleSide ruleSideBuy = rule.ruleSideBuy() == null
                    ? InputRuleSide.ruleSideNull()
                    : rule.ruleSideBuy();
            InputRuleSide ruleSideSell = rule.ruleSideSell() == null
                    ? InputRuleSide.ruleSideNull()
                    : rule.ruleSideSell();
            InputRuleSide ruleSide = SideEnum.BUY.equals(rule.sideEnum())
                    ? ruleSideBuy
                    : SideEnum.SELL.equals(rule.sideEnum())
                            ? ruleSideSell
                            : InputRuleSide.ruleSideNull();

            Map<String, Object> inputObjects = new HashMap<>();
            inputObjects.put("rule", rule);
            inputObjects.put("ruleService", this);
            inputObjects.put("ruleBySideBuy", ruleSideBuy);
            inputObjects.put("ruleBySideSell", ruleSideSell);
            inputObjects.put("ruleBySide", ruleSide);

            Serializable compiledExpression = compiledExpressionCache.get(expression, MVEL::compileExpression);
            Object evaluationResult = MVEL.executeExpression(compiledExpression, inputObjects);
            return Boolean.TRUE.equals(evaluationResult);
        } catch (Exception e) {
            Throwable rootCause = ApplicationUtils.getRootCause(e);
            String errorDetails = String.format(
                    "MVEL Expression failed: [%s] | Exception: %s | Message: %s | Root Cause: %s",
                    expression,
                    e.getClass().getSimpleName(),
                    e.getMessage(),
                    rootCause != null ? rootCause.getMessage() : "N/A");
            log.error(errorDetails);
        }
        return false;
    }

    /**
     * Validates that the custodian statuses of all fractions are valid.
     *
     * <p>
     * Method available in MVEL expressions:
     * {@code ruleService.validateCustodianStatusFractions(rule)}
     * </p>
     *
     * @param rule Input rule containing the fractions to validate
     * @return true if all custodian statuses of the fractions are valid,
     *         false otherwise
     * @throws IllegalArgumentException if fractions are null
     */
    public boolean validateCustodianStatusFractions(InputRule rule) {
        List<InputFraction> fractions = rule.fractions();
        Long businessRuleId = rule.businessRuleId();
        if (fractions == null) {
            throw new IllegalArgumentException("Fractions cannot be null for custodian equality validation.");
        }

        List<StatusActionBusinessRuleEntity> statusActionBusinessRuleEntityList = statusActionBusinessRuleRepository
                .findAllByBusinessRule_Id(businessRuleId);
        Set<Long> statusIdSet = statusActionBusinessRuleEntityList.stream()
                .filter(sa -> Boolean.TRUE.equals(sa.getValid()))
                .map(sa -> sa.getStatus().getId())
                .collect(Collectors.toSet());

        for (InputFraction fraction : fractions) {
            Long custodianStatusId = fraction.custodianStatusId();
            if (custodianStatusId == null && fraction.custodianId() == null) {
                continue;
            }
            if (custodianStatusId == null || !statusIdSet.contains(custodianStatusId)) {
                return false;
            }
        }
        return true;
    }

    /**
     * Validates that the buy and sell statuses are valid according to the business
     * rule code.
     *
     * <p>
     * Method available in MVEL expressions:
     * {@code ruleService.validateBuyAndSellStatus(businessRuleCode, ruleBySideBuy.statusId, ruleBySideSell.statusId)}
     * </p>
     *
     * @param businessRuleCode Business rule code
     * @param buyStatusId      Buy status ID
     * @param sellStatusId     Sell status ID
     * @return true if both statuses are valid, false otherwise
     * @throws IllegalArgumentException if businessRuleCode is null
     */
    public boolean validateBuyAndSellStatus(String businessRuleCode, Long buyStatusId, Long sellStatusId) {
        if (businessRuleCode == null) {
            throw new IllegalArgumentException("BusinessRuleCode cannot be null for status side validation.");
        }

        List<StatusActionBusinessRuleEntity> statusActionBusinessRuleEntityList = statusActionBusinessRuleRepository
                .findAllByBusinessRule_Code(businessRuleCode);
        Set<Long> statusIdSet = statusActionBusinessRuleEntityList.stream()
                .filter(sa -> Boolean.TRUE.equals(sa.getValid()))
                .map(sa -> sa.getStatus().getId())
                .collect(Collectors.toSet());

        boolean buyStatusValid = statusIdSet.contains(buyStatusId);
        boolean sellStatusValid = statusIdSet.contains(sellStatusId);

        return buyStatusValid && sellStatusValid;
    }

    /**
     * Validates that the status is valid for the business rule.
     *
     * <p>
     * Method available in MVEL expressions:
     * {@code ruleService.validateStatus(rule, rule.statusId)}
     * </p>
     *
     * @param rule     Input rule containing the statusId to validate
     * @param statusId Status ID to validate
     * @return true if the status is valid, false otherwise
     * @throws IllegalArgumentException if statusId is null
     */
    public boolean validateStatus(InputRule rule, Long statusId) {
        Long businessRuleId = rule.businessRuleId();
        if (statusId == null || businessRuleId == null) {
            throw new IllegalArgumentException("StatusId and BusinessRuleId cannot be null for status validation.");
        }

        List<StatusActionBusinessRuleEntity> statusActionBusinessRuleEntityList = statusActionBusinessRuleRepository
                .findAllByBusinessRule_Id(businessRuleId);
        Set<Long> statusIdSet = statusActionBusinessRuleEntityList.stream()
                .filter(sa -> Boolean.TRUE.equals(sa.getValid()))
                .map(sa -> sa.getStatus().getId())
                .collect(Collectors.toSet());

        return statusIdSet.contains(statusId);
    }

    /**
     * Validates if today is a business day.
     *
     * <p>
     * Method available in MVEL expressions:
     * {@code ruleService.isTodayBusinessDay(rule.countryCode)}
     * </p>
     *
     * @param countryCode Country code to consider holidays
     * @return true if today is a business day, false if it's a weekend or holiday
     */
    public boolean isTodayBusinessDay(String countryCode) {
        return isBusinessDay(LocalDate.now(clock), countryCode);
    }

    /**
     * Validates if today's date is within the range of business days from an
     * initial date.
     *
     * <p>
     * Method available in MVEL expressions:
     * {@code ruleService.isTodayWithinBusinessDaysRange(countryCode, initialDate, businessDays)}
     * </p>
     *
     * @param initialDate  Initial date of the range
     * @param businessDays Number of business days from the initial date
     * @param countryCode  Country code to consider holidays
     * @return true if today is within the business days range, false otherwise
     */
    public boolean isTodayWithinBusinessDaysRange(String countryCode, LocalDate initialDate, int businessDays) {
        return isDateWithinBusinessDaysRange(countryCode, initialDate, businessDays, LocalDate.now(clock));
    }

    /**
     * Validates if a specific date is a business day.
     *
     * <p>
     * Method available in MVEL expressions:
     * {@code ruleService.isBusinessDay(date, countryCode)}
     * </p>
     *
     * @param date        Date to validate
     * @param countryCode Country code to consider holidays
     * @return true if the date is a business day, false if it's a weekend or
     *         holiday
     * @throws IllegalArgumentException if date or countryCode are null
     */
    public boolean isBusinessDay(LocalDate date, String countryCode) {
        if (date == null || countryCode == null) {
            throw new IllegalArgumentException("Date and CountryCode cannot be null for business day validation.");
        }
        Set<LocalDate> holidays = getHolidays(countryCode);
        return isBusinessDay(date, holidays);
    }

    /**
     * Validates if a date is within the range of business days from an initial
     * date.
     *
     * <p>
     * Method available in MVEL expressions:
     * {@code ruleService.isDateWithinBusinessDaysRange(countryCode, initialDate, businessDays, dateToValidate)}
     * </p>
     *
     * @param initialDate    Initial date of the range
     * @param businessDays   Number of business days to count from the initial date
     * @param dateToValidate Date to validate
     * @param countryCode    Country code to consider holidays
     * @return true if the date to validate is within the range, false otherwise
     * @throws IllegalArgumentException if any of the required parameters is null or
     *                                  businessDays is negative
     */
    public boolean isDateWithinBusinessDaysRange(String countryCode, LocalDate initialDate, int businessDays,
            LocalDate dateToValidate) {
        if (initialDate == null || dateToValidate == null || countryCode == null) {
            throw new IllegalArgumentException("InitialDate, dateToValidate and countryCode cannot be null.");
        }
        if (businessDays < 0) {
            throw new IllegalArgumentException("BusinessDays must be non-negative.");
        }
        log.debug("Validating if date {} is within {} business days from {} for country {}",
                dateToValidate, businessDays, initialDate, countryCode);

        Set<LocalDate> holidays = getHolidays(countryCode);
        LocalDate endDate = initialDate;
        int addedDays = 0;
        while (addedDays < businessDays) {
            endDate = endDate.plusDays(1);
            if (isBusinessDay(endDate, holidays)) {
                addedDays++;
            }
        }
        return dateToValidate.isAfter(initialDate) && !dateToValidate.isAfter(endDate);
    }

    /**
     * Validates if the current time in the participant's country is within the
     * allowed schedule for a specific process.
     *
     * <p>
     * Method available in MVEL expressions:
     * {@code ruleService.validateScheduleByParticipant(inputParticipant, processId)}
     * </p>
     *
     * @param inputParticipant Participant information
     * @param processId        Process ID
     * @return true if the current time is within the allowed schedule, false
     *         otherwise
     * @throws IllegalArgumentException if any of the required parameters is null
     */
    public boolean validateScheduleByParticipant(InputParticipant inputParticipant, Long processId) {
        String countryTimeZone = inputParticipant.countryTimeZone();
        String countryCode = inputParticipant.countryCode();
        Long participantId = inputParticipant.participantId();
        if (countryTimeZone == null || countryCode == null || participantId == null) {
            throw new IllegalArgumentException(
                    "Country time zone and participant ID are required for schedule validation.");
        }
        ScheduleEntity schedule = scheduleRepository.findFirstByProcessIdAndCountry_Code(processId, countryCode)
                .orElseThrow(() -> new IllegalStateException(
                        String.format("No schedule found for processId %d and countryCode %s", processId,
                                countryCode)));

        if (!validateCurrentDayByCountry(schedule.getCountry().getId())) {
            return false;
        }

        LocalTime currentCountryTime = currentZonedDateTimeByTimeZone(countryTimeZone).toLocalTime();
        return checkScheduleTime(currentCountryTime, schedule, participantId);
    }

    /**
     * Gets the current local date for a given country code.
     *
     * <p>
     * Method available in MVEL expressions:
     * {@code ruleService.currentDateByCountry(countryCode)}
     * </p>
     *
     * @param countryCode Country code to get the current date for
     * @return Current local date in the specified country
     * @throws IllegalArgumentException if countryCode is null or if the country or
     *                                  its time zone cannot be found
     */
    public LocalDate currentDateByCountry(String countryCode) {
        if (countryCode == null) {
            throw new IllegalArgumentException("Country code cannot be null for getting current date by country.");
        }
        CountryEntity country = countryRepository.findByCode(countryCode)
                .orElseThrow(() -> new IllegalStateException(
                        String.format("No country found for code %s", countryCode)));

        String timeZone = country.getTimeZone();
        if (timeZone == null) {
            throw new IllegalArgumentException("Time zone cannot be null for getting current date by country.");
        }
        return currentZonedDateTimeByTimeZone(timeZone).toLocalDate();
    }

    //******************************
    // PRIVATE METHODS
    //******************************
    private boolean isBusinessDay(LocalDate date, Set<LocalDate> holidays) {
        if (date == null || holidays == null) {
            throw new IllegalArgumentException("Date and holidays cannot be null for business day validation.");
        }
        DayOfWeek day = date.getDayOfWeek();
        if (day == DayOfWeek.SATURDAY || day == DayOfWeek.SUNDAY) {
            log.debug("Date {} isBusinessDay -> {} (weekend)", date, false);
            return false;
        }
        boolean isHoliday = holidays.contains(date);
        boolean result = !isHoliday;

        log.debug("Date {} isBusinessDay -> {} (holiday: {})", date, result, isHoliday);
        return result;
    }

    private Set<LocalDate> getHolidays(String countryCode) {
        List<HolidayEntity> holidayEntityList = holidayRepository.findAllByCountry_Code(countryCode);
        log.debug("countryCode -> {}, HolidayEntity size -> {}", countryCode, holidayEntityList.size());
        return holidayEntityList.stream()
                .map(HolidayEntity::getHolidayDate)
                .collect(Collectors.toSet());
    }

    private boolean checkScheduleTime(LocalTime currentCountryTime, ScheduleEntity schedule, Long participantId) {
        LocalTime openingTime = schedule.getOpeningTime();
        LocalTime closingTime = schedule.getClosingTime();

        log.info("Validating schedule time: currentTime={}, startTime={}, endTime={}", currentCountryTime, openingTime,
                closingTime);
        if (isTimeInRange(currentCountryTime, openingTime, closingTime)) {
            return true;
        }

        Optional<ScheduleExtensionEntity> extensionOpt = scheduleExtensionRepository
                .findBySchedule_IdAndParticipant_Id(schedule.getId(), participantId);
        if (extensionOpt.isPresent()) {
            ScheduleExtensionEntity extension = extensionOpt.get();
            LocalTime newClosingTime = extension.getNewClosingTime();
            log.info("Validating schedule time with extension: currentTime={}, startTime={}, newEndTime={}",
                    currentCountryTime, openingTime, newClosingTime);
            return isTimeInRange(currentCountryTime, openingTime, newClosingTime);
        }

        return false;
    }

    private boolean isTimeInRange(LocalTime currentTime, LocalTime startTime, LocalTime endTime) {
        // Check if the time range crosses midnight (e.g., 23:00 to 01:00)
        if (endTime.isBefore(startTime)) {
            // Range crosses midnight: valid if time is >= startTime OR <= endTime
            return !currentTime.isBefore(startTime) || !currentTime.isAfter(endTime);
        }
        // Normal range: valid if time is >= startTime AND <= endTime
        return !currentTime.isBefore(startTime) && !currentTime.isAfter(endTime);
    }

    private ZonedDateTime currentZonedDateTimeByTimeZone(String timeZone) {
        ZoneId zoneId = ApplicationUtils.parseTimeZone(timeZone);
        LocalDateTime serverDateTime = LocalDateTime.now();
        ZonedDateTime serverZonedDateTime = serverDateTime.atZone(ZoneId.systemDefault());
        ZonedDateTime countryZonedDateTime = serverZonedDateTime.withZoneSameInstant(zoneId);
        return countryZonedDateTime;
    }

    private boolean validateCurrentDayByCountry(Long countryId) {
        BusinessDayOutDto businessDayOutDto = businessDayCalculationClient
                .validCurrentDayByCountry(countryId);
        if (Boolean.FALSE.equals(businessDayOutDto.getIsValidBusinessDay())) {
            log.debug("Today is not a business day for countryId {}. Schedule validation failed.",
                    countryId);
            return false;
        }
        return true;
    }
}

```

## src/main/java/com/nubo/operations/rules/api/service/impl/StatusUpdateBusinessRuleServiceImpl.java

```java
package com.nubo.operations.rules.api.service.impl;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;
import org.springframework.util.StopWatch;

import com.nubo.operations.rules.api.application.properties.PropertiesContext;
import com.nubo.operations.rules.api.client.status.models.dto.request.StatusValidationClientInDto;
import com.nubo.operations.rules.api.client.status.models.dto.response.BusinessRuleClientOutDto;
import com.nubo.operations.rules.api.client.status.models.dto.response.StatusClientOutDto;
import com.nubo.operations.rules.api.client.status.models.dto.response.StatusTransitionClientOutDto;
import com.nubo.operations.rules.api.client.status.models.dto.response.StatusValidationClientOutDto;
import com.nubo.operations.rules.api.client.status.service.OperationStatusClient;
import com.nubo.operations.rules.api.exception.ServiceException;
import com.nubo.operations.rules.api.exception.error.ErrorCode;
import com.nubo.operations.rules.api.helpers.MapperUtil;
import com.nubo.operations.rules.api.models.domain.BusinessRule;
import com.nubo.operations.rules.api.models.domain.InputRule;
import com.nubo.operations.rules.api.models.dto.request.StatusUpdateBusinessRuleInDto;
import com.nubo.operations.rules.api.models.dto.request.StatusUpdateSettlementInDto;
import com.nubo.operations.rules.api.models.dto.request.StatusUpdateTradeInDto;
import com.nubo.operations.rules.api.models.dto.request.BatchStatusUpdateTradeInDto;
import com.nubo.operations.rules.api.models.dto.request.BatchStatusUpdateTradeItemInDto;
import com.nubo.operations.rules.api.models.dto.response.BusinessRuleCodeOutDto;
import com.nubo.operations.rules.api.models.dto.response.StatusOutDto;
import com.nubo.operations.rules.api.models.dto.response.StatusUpdateBusinessRuleOutDto;
import com.nubo.operations.rules.api.models.dto.response.StatusUpdateSettlementOutDto;
import com.nubo.operations.rules.api.models.dto.response.StatusUpdateTradeOutDto;
import com.nubo.operations.rules.api.models.dto.response.BatchStatusUpdateTradeOutDto;
import com.nubo.operations.rules.api.models.dto.response.BatchStatusUpdateTradeItemOutDto;
import com.nubo.operations.rules.api.models.entity.BusinessRuleEntity;
import com.nubo.operations.rules.api.models.entity.CountryEntity;
import com.nubo.operations.rules.api.models.entity.SettlementEntity;
import com.nubo.operations.rules.api.models.entity.SettlementKey;
import com.nubo.operations.rules.api.models.entity.TradeEntity;
import com.nubo.operations.rules.api.models.enums.BusinessRuleEnum;
import com.nubo.operations.rules.api.models.enums.BusinessRuleMessageEnum;
import com.nubo.operations.rules.api.models.enums.CategoryEnum;
import com.nubo.operations.rules.api.models.enums.SideEnum;
import com.nubo.operations.rules.api.models.enums.StatusEnum;
import com.nubo.operations.rules.api.models.enums.VersionApiEnum;
import com.nubo.operations.rules.api.repository.BusinessRuleRepository;
import com.nubo.operations.rules.api.repository.SettlementRepository;
import com.nubo.operations.rules.api.repository.TradeRepository;
import com.nubo.operations.rules.api.service.RuleService;
import com.nubo.operations.rules.api.service.StatusUpdateBusinessRuleService;

import com.github.benmanes.caffeine.cache.Cache;
import com.github.benmanes.caffeine.cache.Caffeine;
import io.micrometer.core.annotation.Timed;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional(readOnly = true)
public class StatusUpdateBusinessRuleServiceImpl implements StatusUpdateBusinessRuleService {

    private static final class RulePerformanceMetrics {
        private long evaluationNanos;
        private long statusRestNanos;
        private long statusRestCount;
        private long settlementRepositoryCalls;
        private long businessRuleRepositoryCalls;
        private long tradeRepositoryCalls;
        private Long tradeId;
        private String sideId;
        private final Set<StatusTransitionKey> statusTransitionKeys = new HashSet<>();

        private void setRequestContext(Long tradeId, String sideId) {
            this.tradeId = tradeId;
            this.sideId = sideId;
        }

        private void recordEvaluation(long startNanos) {
            evaluationNanos += System.nanoTime() - startNanos;
        }

        private void recordStatusRest(long elapsedNanos, Long businessRuleId, Long originStatusId) {
            statusRestCount++;
            statusRestNanos += elapsedNanos;
            statusTransitionKeys.add(new StatusTransitionKey(businessRuleId, originStatusId));
        }

        private void recordSettlementRepositoryCall() {
            settlementRepositoryCalls++;
        }

        private void recordBusinessRuleRepositoryCall() {
            businessRuleRepositoryCalls++;
        }

        private void recordTradeRepositoryCall() {
            tradeRepositoryCalls++;
        }
    }

    private record StatusTransitionKey(Long businessRuleId, Long originStatusId) {
    }

    private record TradeSideKey(Long tradeId, String sideId) {
    }

    private static final class BatchRulePerformanceMetrics {
        private long tradeRepositoryCalls;
        private long tradeRowsLoaded;
        private long tradeBulkNanos;
        private long settlementRepositoryCalls;
        private long settlementRowsLoaded;
        private long settlementBulkNanos;
        private long businessRuleRepositoryCalls;
        private long statusTransitionRequests;
        private long statusHttpCalls;
        private long statusHttpNanos;
        private long evaluationNanos;
        private long prevalidatedCount;
        private long businessValidCount;
        private long businessRejectedCount;
        private long fallbackCount;
        private final Set<StatusTransitionKey> statusTransitionKeys = new HashSet<>();

        private void add(RulePerformanceMetrics itemMetrics) {
            businessRuleRepositoryCalls += itemMetrics.businessRuleRepositoryCalls;
            evaluationNanos += itemMetrics.evaluationNanos;
        }
    }

    private final OperationStatusClient operationStatusClient;
    private final TradeRepository tradeRepository;
    private final SettlementRepository settlementRepository;
    private final BusinessRuleRepository businessRuleRepository;
    private final RuleService ruleService;

    private final Cache<String, Map<BusinessRuleEnum, Long>> businessRuleMapCache = Caffeine.newBuilder()
            .maximumSize(1000)
            .expireAfterWrite(30, TimeUnit.MINUTES)
            .build();

    @Deprecated(since = "0.52.0", forRemoval = true)
    @Override
    @Timed(value = "nubo.operations.rules.processing.duration", description = "Business processing duration", extraTags = {
            "operation", "validateUpdateStatusOperation" })
    public StatusUpdateBusinessRuleOutDto validateUpdateStatusOperation(
            StatusUpdateBusinessRuleInDto statusUpdateBusinessRuleInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return validateUpdateStatusOperationV1(statusUpdateBusinessRuleInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private StatusUpdateBusinessRuleOutDto validateUpdateStatusOperationV1(
            StatusUpdateBusinessRuleInDto statusUpdateBusinessRuleInDto) {
        log.debug("Start method validateUpdateStatusOperationV1, statusUpdateBusinessRuleInDto -> {}",
                statusUpdateBusinessRuleInDto);

        StatusValidationClientInDto statusValidationClientInDto = MapperUtil
                .statusUpdateBusinessRuleInDtoToStatusValidationClientInDto(statusUpdateBusinessRuleInDto);
        StatusValidationClientOutDto statusValidationClientOutDto = operationStatusClient
                .validationTransitionStatus(statusValidationClientInDto);

        String description = BusinessRuleMessageEnum.INVALID_STATUS_TRANSITION.getValue();
        boolean result = false;
        BusinessRuleCodeOutDto businessRuleCode = null;
        if (Boolean.TRUE.equals(statusValidationClientOutDto.getIsValid())) {
            BusinessRuleClientOutDto businessRuleClientOutDto = statusValidationClientOutDto.getBusinessRule();
            Long businessRuleId = businessRuleClientOutDto == null
                    ? 0L
                    : businessRuleClientOutDto.getId();
            String countryCode = businessRuleClientOutDto == null || businessRuleClientOutDto.getCountry() == null
                    ? null
                    : businessRuleClientOutDto.getCountry().getCode();

            InputRule inputRule = MapperUtil.businessRuleInDtoToInputRule(statusUpdateBusinessRuleInDto, countryCode);
            BusinessRule businessRule = ruleService.validateExpression(businessRuleId, inputRule);

            result = businessRule.isValid();
            description = businessRule.description();
            businessRuleCode = businessRule.businessRuleCode();
        }

        StatusTransitionClientOutDto statusTransitionClientOutDto = result
                ? statusValidationClientOutDto.getStatusTransition()
                : null;
        StatusUpdateBusinessRuleOutDto statusUpdateBusinessRuleOutDto = MapperUtil
                .toStatusUpdateBusinessRuleOutDto(result, description, statusTransitionClientOutDto);
        statusUpdateBusinessRuleOutDto.setBusinessRuleCode(businessRuleCode);

        log.debug("End method validateUpdateStatusOperationV1, statusUpdateBusinessRuleOutDto -> {}",
                statusUpdateBusinessRuleOutDto);
        return statusUpdateBusinessRuleOutDto;
    }

    @Override
    @Timed(value = "nubo.operations.rules.processing.duration", description = "Business processing duration", extraTags = {
            "operation", "validateUpdateStatusTrade" })
    public StatusUpdateTradeOutDto validateUpdateStatusTrade(StatusUpdateTradeInDto statusUpdateTradeInDto) {
        StopWatch stopWatch = new StopWatch("assignment-rules");
        RulePerformanceMetrics metrics = new RulePerformanceMetrics();
        long totalStartNanos = System.nanoTime();
        String result = "ERROR";
        try {
            if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
                StatusUpdateTradeOutDto response = validateUpdateStatusTradeV1(statusUpdateTradeInDto,
                        stopWatch, metrics);
                result = "SUCCESS";
                return response;
            }
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        } finally {
            if (stopWatch.isRunning()) {
                stopWatch.stop();
            }
            logTradePerformance(statusUpdateTradeInDto, result, totalStartNanos, stopWatch, metrics);
        }
    }

    /**
     * Batch-only path. The legacy validation method above is intentionally not
     * delegated to from here: its repository reads remain untouched for every
     * existing caller.
     */
    @Override
    public BatchStatusUpdateTradeOutDto validateUpdateStatusTradeBatch(BatchStatusUpdateTradeInDto batchRequest) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) != VersionApiEnum.V1) {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }

        long totalStartNanos = System.nanoTime();
        BatchRulePerformanceMetrics metrics = new BatchRulePerformanceMetrics();
        String podName = System.getenv().getOrDefault("HOSTNAME", "unknown");
        List<BatchStatusUpdateTradeItemInDto> requestedItems = batchRequest.getItems();
        Set<Long> tradeIds = new HashSet<>();
        boolean duplicateTradeId = requestedItems.stream().anyMatch(item -> !tradeIds.add(item.getTradeId()));

        if (duplicateTradeId) {
            List<BatchStatusUpdateTradeItemOutDto> fallbackItems = requestedItems.stream()
                    .map(item -> fallbackItem(item, "DUPLICATE_TRADE_ID", null))
                    .toList();
            metrics.fallbackCount = fallbackItems.size();
            logRulesBatch(batchRequest.getBatchId(), requestedItems.size(), tradeIds.size(), metrics, podName, totalStartNanos,
                    "FALLBACK_DUPLICATE_TRADE_ID");
            return BatchStatusUpdateTradeOutDto.builder()
                    .batchId(batchRequest.getBatchId())
                    .items(fallbackItems)
                    .build();
        }

        long tradeStartedNanos = System.nanoTime();
        List<TradeEntity> loadedTrades = tradeRepository.findDetailedByIdIn(tradeIds);
        metrics.tradeBulkNanos = System.nanoTime() - tradeStartedNanos;
        metrics.tradeRepositoryCalls = 1;
        metrics.tradeRowsLoaded = loadedTrades.size();
        Map<Long, TradeEntity> tradesById = loadedTrades.stream()
                .collect(java.util.stream.Collectors.toMap(TradeEntity::getId, trade -> trade));

        Set<String> sideIds = requestedItems.stream()
                .map(BatchStatusUpdateTradeItemInDto::getSideEnum)
                .filter(Objects::nonNull)
                .map(SideEnum::getId)
                .collect(java.util.stream.Collectors.toSet());
        long settlementStartedNanos = System.nanoTime();
        List<SettlementEntity> loadedSettlements = settlementRepository.findByTradeIdInAndSideIdIn(tradeIds, sideIds);
        metrics.settlementBulkNanos = System.nanoTime() - settlementStartedNanos;
        metrics.settlementRepositoryCalls = 1;
        metrics.settlementRowsLoaded = loadedSettlements.size();
        Map<TradeSideKey, List<SettlementEntity>> settlementsByTradeSide = loadedSettlements.stream()
                .collect(java.util.stream.Collectors.groupingBy(settlement -> new TradeSideKey(
                        settlement.getTrade().getId(), settlement.getSideId())));

        Map<StatusTransitionKey, StatusTransitionClientOutDto> statusTransitionsByKey = new HashMap<>();
        List<BatchStatusUpdateTradeItemOutDto> responseItems = requestedItems.stream()
                .map(item -> validateBatchItem(item, tradesById, settlementsByTradeSide,
                        statusTransitionsByKey, metrics))
                .toList();
        for (BatchStatusUpdateTradeItemOutDto responseItem : responseItems) {
            if (!Boolean.TRUE.equals(responseItem.getPrevalidated())) {
                metrics.fallbackCount++;
                continue;
            }
            metrics.prevalidatedCount++;
            if (responseItem.getResult() != null && Boolean.TRUE.equals(responseItem.getResult().getIsValid())) {
                metrics.businessValidCount++;
            } else if (responseItem.getResult() != null) {
                metrics.businessRejectedCount++;
            }
        }
        logRulesBatch(batchRequest.getBatchId(), requestedItems.size(), tradeIds.size(), metrics, podName, totalStartNanos, "SUCCESS");
        log.info("PERF_RULES_BATCH_REDUCTION service=reglas podName={} batchId={} "
                        + "legacyFractionationToRulesHttpCallsEstimated={} fractionationToRulesBatchHttpCalls={} "
                        + "legacyTradeReadsEstimated={} tradeRepositoryReadsAfter={} legacySettlementReadsEstimated={} "
                        + "settlementRepositoryReadsAfter={} logicalStatusTransitionRequests={} uniqueStatusTransitionKeys={} "
                        + "statusHttpCallsAfter={} statusHttpReductionPercent={}",
                podName, batchRequest.getBatchId(), requestedItems.size(), 1,
                requestedItems.size(), metrics.tradeRepositoryCalls,
                requestedItems.size(), metrics.settlementRepositoryCalls,
                metrics.statusTransitionRequests, metrics.statusTransitionKeys.size(), metrics.statusHttpCalls,
                reductionPercent(metrics.statusTransitionRequests, metrics.statusHttpCalls));
        return BatchStatusUpdateTradeOutDto.builder()
                .batchId(batchRequest.getBatchId())
                .items(responseItems)
                .build();
    }

    private BatchStatusUpdateTradeItemOutDto validateBatchItem(BatchStatusUpdateTradeItemInDto item,
            Map<Long, TradeEntity> tradesById, Map<TradeSideKey, List<SettlementEntity>> settlementsByTradeSide,
            Map<StatusTransitionKey, StatusTransitionClientOutDto> statusTransitionsByKey,
            BatchRulePerformanceMetrics batchMetrics) {
        TradeEntity tradeEntity = tradesById.get(item.getTradeId());
        if (tradeEntity == null || item.getSideEnum() == null) {
            return fallbackItem(item, "TRADE_OR_SIDE_NOT_AVAILABLE_IN_BULK_RESULT", null);
        }
        RulePerformanceMetrics itemMetrics = new RulePerformanceMetrics();
        itemMetrics.setRequestContext(item.getTradeId(), item.getSideEnum().getId());
        try {
            StatusUpdateTradeOutDto result = validateUpdateStatusTradeBatchItemV1(item, tradeEntity,
                    settlementsByTradeSide.getOrDefault(new TradeSideKey(item.getTradeId(), item.getSideEnum().getId()), List.of()),
                    statusTransitionsByKey, itemMetrics, batchMetrics);
            batchMetrics.add(itemMetrics);
            return BatchStatusUpdateTradeItemOutDto.builder()
                    .itemId(item.getItemId())
                    .tradeId(item.getTradeId())
                    .sideId(item.getSideEnum().getId())
                    .prevalidated(true)
                    .result(result)
                    .build();
        } catch (RuntimeException exception) {
            batchMetrics.add(itemMetrics);
            return fallbackItem(item, "BATCH_ITEM_EXCEPTION", exception);
        }
    }

    private StatusUpdateTradeOutDto validateUpdateStatusTradeBatchItemV1(BatchStatusUpdateTradeItemInDto item,
            TradeEntity tradeEntity, List<SettlementEntity> settlements,
            Map<StatusTransitionKey, StatusTransitionClientOutDto> statusTransitionsByKey,
            RulePerformanceMetrics itemMetrics, BatchRulePerformanceMetrics batchMetrics) {
        SideEnum sideEnum = item.getSideEnum();
        Long previousSideStatusId = getBuyOrSellStatus(tradeEntity, sideEnum);
        InputRule inputRule = MapperUtil.tradeEntityToInputRule(tradeEntity, settlements, sideEnum);
        Map<BusinessRuleEnum, Long> businessRuleMap = getBusinessRule(tradeEntity.getCountry(), item.getCode(), itemMetrics);

        StatusUpdateResult sideResult = processRuleBatch(businessRuleMap, BusinessRuleEnum.RULE_SIDE, inputRule,
                previousSideStatusId, item.getCode(), itemMetrics, batchMetrics, statusTransitionsByKey);
        if (!sideResult.isValid()) {
            StatusUpdateTradeOutDto errorDto = MapperUtil.buildErrorStatusUpdateTradeOutDto(sideResult.code(),
                    sideResult.description());
            errorDto.setBusinessRuleCode(sideResult.businessRuleCode());
            return errorDto;
        }
        StatusUpdateResult fractionResult = processRuleBatch(businessRuleMap, BusinessRuleEnum.RULE_FRACTION,
                inputRule, previousSideStatusId, item.getCode(), itemMetrics, batchMetrics, statusTransitionsByKey);
        if (!fractionResult.isValid()) {
            StatusUpdateTradeOutDto errorDto = MapperUtil.buildErrorStatusUpdateTradeOutDto(fractionResult.code(),
                    fractionResult.description());
            errorDto.setBusinessRuleCode(fractionResult.businessRuleCode());
            return errorDto;
        }
        StatusUpdateResult fractionCustodianResult = processRuleBatch(businessRuleMap,
                BusinessRuleEnum.RULE_FRACTION_CUSTODIAN, inputRule, StatusEnum.NON_CUSTODIAL.getId(), item.getCode(),
                itemMetrics, batchMetrics, statusTransitionsByKey);
        if (!fractionCustodianResult.isValid()) {
            StatusUpdateTradeOutDto errorDto = MapperUtil.buildErrorStatusUpdateTradeOutDto(
                    fractionCustodianResult.code(), fractionCustodianResult.description());
            errorDto.setBusinessRuleCode(fractionCustodianResult.businessRuleCode());
            return errorDto;
        }
        StatusOutDto newStatusTrade = processRuleFolioBatch(businessRuleMap, inputRule, sideEnum,
                sideResult.newStatus(), tradeEntity, itemMetrics, batchMetrics, statusTransitionsByKey);
        return StatusUpdateTradeOutDto.builder()
                .isValid(true)
                .description(BusinessRuleMessageEnum.SUCCESS_BUSINESS_RULE.getValue())
                .code(item.getCode())
                .newStatusSide(sideResult.newStatus())
                .newStatusFraction(fractionResult.newStatus())
                .newStatusCustodianFraction(fractionCustodianResult.newStatus())
                .newStatusTrade(newStatusTrade)
                .build();
    }

    private StatusUpdateResult processRuleBatch(Map<BusinessRuleEnum, Long> businessRuleMap,
            BusinessRuleEnum businessRuleEnum, InputRule inputRule, Long statusId, String code,
            RulePerformanceMetrics itemMetrics, BatchRulePerformanceMetrics batchMetrics,
            Map<StatusTransitionKey, StatusTransitionClientOutDto> statusTransitionsByKey) {
        if (!businessRuleMap.containsKey(businessRuleEnum)) {
            return StatusUpdateResult.valid(null);
        }
        Long businessRuleId = businessRuleMap.get(businessRuleEnum);
        long evaluationStartNanos = System.nanoTime();
        BusinessRule businessRule;
        try {
            businessRule = ruleService.validateExpression(businessRuleId, inputRule);
        } finally {
            itemMetrics.recordEvaluation(evaluationStartNanos);
        }
        if (!businessRule.isValid()) {
            return StatusUpdateResult.invalid(code, businessRule.description(), businessRule.businessRuleCode());
        }
        return StatusUpdateResult.valid(MapperUtil.statusClientOutDtoToStatusOutDto(getNewStatusBatch(businessRuleId,
                statusId, businessRuleEnum, itemMetrics, batchMetrics, statusTransitionsByKey)));
    }

    private StatusOutDto processRuleFolioBatch(Map<BusinessRuleEnum, Long> businessRuleMap, InputRule inputRule,
            SideEnum sideEnum, StatusOutDto newStatusSide, TradeEntity tradeEntity, RulePerformanceMetrics itemMetrics,
            BatchRulePerformanceMetrics batchMetrics,
            Map<StatusTransitionKey, StatusTransitionClientOutDto> statusTransitionsByKey) {
        if (!businessRuleMap.containsKey(BusinessRuleEnum.RULE_FOLIO)) {
            return null;
        }
        Long businessRuleId = businessRuleMap.get(BusinessRuleEnum.RULE_FOLIO);
        Long buyStatusId = SideEnum.BUY.equals(sideEnum) && Objects.nonNull(newStatusSide)
                ? newStatusSide.getId() : tradeEntity.getBuyStatusId();
        Long sellStatusId = SideEnum.SELL.equals(sideEnum) && Objects.nonNull(newStatusSide)
                ? newStatusSide.getId() : tradeEntity.getSellStatusId();
        InputRule inputRuleFolio = InputRule.updateStatusIdBySide(inputRule, buyStatusId, sellStatusId);
        long evaluationStartNanos = System.nanoTime();
        BusinessRule businessRuleFolio;
        try {
            businessRuleFolio = ruleService.validateExpression(businessRuleId, tradeEntity.getStatusId(), inputRuleFolio);
        } finally {
            itemMetrics.recordEvaluation(evaluationStartNanos);
        }
        if (!businessRuleFolio.isValid()) {
            return null;
        }
        return MapperUtil.statusClientOutDtoToStatusOutDto(getNewStatusBatch(businessRuleId, tradeEntity.getStatusId(),
                BusinessRuleEnum.RULE_FOLIO, itemMetrics, batchMetrics, statusTransitionsByKey));
    }

    private StatusClientOutDto getNewStatusBatch(Long businessRuleId, Long originStatusId,
            BusinessRuleEnum businessRuleCode, RulePerformanceMetrics itemMetrics,
            BatchRulePerformanceMetrics batchMetrics,
            Map<StatusTransitionKey, StatusTransitionClientOutDto> statusTransitionsByKey) {
        StatusTransitionKey key = new StatusTransitionKey(businessRuleId, originStatusId);
        batchMetrics.statusTransitionRequests++;
        batchMetrics.statusTransitionKeys.add(key);
        StatusTransitionClientOutDto transition = statusTransitionsByKey.get(key);
        if (transition != null) {
            return transition.getTargetStatus();
        }
        long startedNanos = System.nanoTime();
        try {
            transition = operationStatusClient.transitionByBusinessRuleIdAndOriginStatusId(businessRuleId, originStatusId);
            if (transition == null || transition.getTargetStatus() == null) {
                throw new ServiceException(ErrorCode.CLIENT_OPERATIONS_STATUS_ERROR, HttpStatus.BAD_GATEWAY);
            }
            statusTransitionsByKey.put(key, transition);
            return transition.getTargetStatus();
        } finally {
            long elapsedNanos = System.nanoTime() - startedNanos;
            itemMetrics.recordStatusRest(elapsedNanos, businessRuleId, originStatusId);
            batchMetrics.statusHttpCalls++;
            batchMetrics.statusHttpNanos += elapsedNanos;
            log.debug("PERF_RULES_STATUS_CALL service=reglas podName={} tradeId={} sideId={} businessRuleCode={} businessRuleId={} originStatusId={} elapsedMs={} result=BATCH_HTTP",
                    System.getenv().getOrDefault("HOSTNAME", "unknown"), itemMetrics.tradeId, itemMetrics.sideId,
                    businessRuleCode, businessRuleId, originStatusId, TimeUnit.NANOSECONDS.toMillis(elapsedNanos));
        }
    }

    private BatchStatusUpdateTradeItemOutDto fallbackItem(BatchStatusUpdateTradeItemInDto item, String reason,
            RuntimeException exception) {
        String errorCode = exception instanceof ServiceException serviceException
                ? serviceException.getErrorCode().name()
                : exception instanceof com.nubo.operations.rules.api.exception.ClientException clientException
                        ? clientException.getErrorCode().name() : null;
        return BatchStatusUpdateTradeItemOutDto.builder()
                .itemId(item.getItemId())
                .tradeId(item.getTradeId())
                .sideId(item.getSideEnum() == null ? null : item.getSideEnum().getId())
                .prevalidated(false)
                .fallbackReason(reason)
                .errorCode(errorCode)
                .errorMessage(exception == null ? null : exception.getMessage())
                .build();
    }

    private void logRulesBatch(String batchId, int items, int tradeUnique, BatchRulePerformanceMetrics metrics,
            String podName, long totalStartNanos, String result) {
        log.info("PERF_RULES_BATCH service=reglas podName={} batchId={} items={} tradeRequested={} tradeUnique={} "
                        + "tradeRepositoryCalls={} tradeRowsLoaded={} tradeBulkMs={} settlementRequestedPairs={} "
                        + "settlementUniquePairs={} settlementRepositoryCalls={} settlementRowsLoaded={} settlementBulkMs={} "
                        + "businessRuleRepositoryCalls={} statusTransitionRequests={} uniqueStatusTransitionKeys={} "
                        + "statusHttpCalls={} statusHttpTotalMs={} evaluationMs={} prevalidatedCount={} businessValidCount={} "
                        + "businessRejectedCount={} fallbackCount={} totalMs={} result={}",
                podName, batchId, items, items, tradeUnique, metrics.tradeRepositoryCalls, metrics.tradeRowsLoaded,
                TimeUnit.NANOSECONDS.toMillis(metrics.tradeBulkNanos), items, items,
                metrics.settlementRepositoryCalls, metrics.settlementRowsLoaded,
                TimeUnit.NANOSECONDS.toMillis(metrics.settlementBulkNanos), metrics.businessRuleRepositoryCalls,
                metrics.statusTransitionRequests, metrics.statusTransitionKeys.size(), metrics.statusHttpCalls,
                TimeUnit.NANOSECONDS.toMillis(metrics.statusHttpNanos), TimeUnit.NANOSECONDS.toMillis(metrics.evaluationNanos),
                metrics.prevalidatedCount, metrics.businessValidCount, metrics.businessRejectedCount, metrics.fallbackCount,
                TimeUnit.NANOSECONDS.toMillis(System.nanoTime() - totalStartNanos), result);
    }

    private long reductionPercent(long before, long after) {
        return before == 0 ? 0 : Math.round(((before - after) * 100.0d) / before);
    }

    private StatusUpdateTradeOutDto validateUpdateStatusTradeV1(StatusUpdateTradeInDto statusUpdateTradeInDto,
                                                                StopWatch stopWatch, RulePerformanceMetrics metrics) {
        long t0 = System.nanoTime();
        Long tradeId = statusUpdateTradeInDto.getTradeId();
        String sideId = statusUpdateTradeInDto.getSideEnum() != null ? statusUpdateTradeInDto.getSideEnum().getId() : null;
        String code = statusUpdateTradeInDto.getCode();
        metrics.setRequestContext(tradeId, sideId);
        log.info("[rules] START validate-trade tradeId={} sideId={} code={}", tradeId, sideId, code);

        SideEnum sideEnum = statusUpdateTradeInDto.getSideEnum();

        stopWatch.start("load-trade");
        TradeEntity tradeEntity = validateTrade(tradeId, metrics);
        stopWatch.stop();

        stopWatch.start("load-settlements-and-build-input");
        Long previousSideStatusId = getBuyOrSellStatus(tradeEntity, sideEnum);
        InputRule inputRule = buildInputRuleBySide(tradeEntity, sideEnum, metrics);
        stopWatch.stop();

        stopWatch.start("load-business-rules");
        Map<BusinessRuleEnum, Long> businessRuleMap = getBusinessRule(tradeEntity.getCountry(), code, metrics);
        stopWatch.stop();

        StatusUpdateResult sideResult = processRule(businessRuleMap, BusinessRuleEnum.RULE_SIDE, inputRule,
                previousSideStatusId, code, metrics);
        if (!sideResult.isValid()) {
            log.info("[rules] END validate-trade tradeId={} result=REJECTED rule=RULE_SIDE elapsed={}ms",
                    tradeId, ms(t0));
            StatusUpdateTradeOutDto errorDto = MapperUtil.buildErrorStatusUpdateTradeOutDto(sideResult.code(),
                    sideResult.description());
            errorDto.setBusinessRuleCode(sideResult.businessRuleCode());
            return errorDto;
        }

        StatusUpdateResult fractionResult = processRule(businessRuleMap, BusinessRuleEnum.RULE_FRACTION,
                inputRule, previousSideStatusId, code, metrics);
        if (!fractionResult.isValid()) {
            log.info("[rules] END validate-trade tradeId={} result=REJECTED rule=RULE_FRACTION elapsed={}ms",
                    tradeId, ms(t0));
            StatusUpdateTradeOutDto errorDto = MapperUtil.buildErrorStatusUpdateTradeOutDto(fractionResult.code(),
                    fractionResult.description());
            errorDto.setBusinessRuleCode(fractionResult.businessRuleCode());
            return errorDto;
        }

        StatusUpdateResult fractionCustodianResult = processRule(businessRuleMap,
                BusinessRuleEnum.RULE_FRACTION_CUSTODIAN,
                inputRule, StatusEnum.NON_CUSTODIAL.getId(), code, metrics);
        if (!fractionCustodianResult.isValid()) {
            log.info("[rules] END validate-trade tradeId={} result=REJECTED rule=RULE_FRACTION_CUSTODIAN elapsed={}ms",
                    tradeId, ms(t0));
            StatusUpdateTradeOutDto errorDto = MapperUtil.buildErrorStatusUpdateTradeOutDto(
                    fractionCustodianResult.code(), fractionCustodianResult.description());
            errorDto.setBusinessRuleCode(fractionCustodianResult.businessRuleCode());
            return errorDto;
        }

        StatusOutDto newStatusTrade = processRuleFolio(businessRuleMap, inputRule,
                sideEnum, sideResult.newStatus(), tradeEntity, metrics);

        log.info("[rules] END validate-trade tradeId={} sideId={} result=OK elapsed={}ms",
                tradeId, sideId, ms(t0));
        return StatusUpdateTradeOutDto.builder()
                .isValid(true)
                .description(BusinessRuleMessageEnum.SUCCESS_BUSINESS_RULE.getValue())
                .code(code)
                .newStatusSide(sideResult.newStatus())
                .newStatusFraction(fractionResult.newStatus())
                .newStatusCustodianFraction(fractionCustodianResult.newStatus())
                .newStatusTrade(newStatusTrade)
                .build();
    }

    @Override
    @Timed(value = "nubo.operations.rules.processing.duration", description = "Business processing duration", extraTags = {
            "operation", "validateUpdateStatusSettlement" })
    public StatusUpdateSettlementOutDto validateUpdateStatusSettlement(
            StatusUpdateSettlementInDto statusUpdateSettlementInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return validateUpdateStatusSettlementV1(statusUpdateSettlementInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private StatusUpdateSettlementOutDto validateUpdateStatusSettlementV1(
            StatusUpdateSettlementInDto statusUpdateSettlementInDto) {
        long t0 = System.nanoTime();
        Long tradeId = statusUpdateSettlementInDto.getTradeId();
        String sideId = statusUpdateSettlementInDto.getSideEnum() != null ? statusUpdateSettlementInDto.getSideEnum().getId() : null;
        Integer fraction = statusUpdateSettlementInDto.getFraction();
        String code = statusUpdateSettlementInDto.getCode();
        log.info("[rules] START validate-settlement tradeId={} sideId={} fraction={} code={}",
                tradeId, sideId, fraction, code);

        SideEnum sideEnum = statusUpdateSettlementInDto.getSideEnum();

        long tDb = System.nanoTime();
        SettlementEntity settlementEntity = validateSettlement(tradeId, sideEnum.getId(), fraction);
        log.info("[rules] settlement-load tradeId={} fraction={} elapsed={}ms", tradeId, fraction, ms(tDb));

        InputRule inputRule = MapperUtil.settlementEntityToInputRule(settlementEntity, sideEnum);

        long tRuleMap = System.nanoTime();
        Map<BusinessRuleEnum, Long> businessRuleMap = getBusinessRule(settlementEntity.getTrade().getCountry(), code);
        log.info("[rules] rule-map-resolve tradeId={} code={} rules={} elapsed={}ms",
                tradeId, code, businessRuleMap.keySet(), ms(tRuleMap));

        StatusUpdateResult fractionResult = processRule(businessRuleMap, BusinessRuleEnum.RULE_FRACTION,
                inputRule, settlementEntity.getStatusId(), code);
        if (!fractionResult.isValid()) {
            log.info("[rules] END validate-settlement tradeId={} fraction={} result=REJECTED rule=RULE_FRACTION elapsed={}ms",
                    tradeId, fraction, ms(t0));
            StatusUpdateSettlementOutDto errorDto = MapperUtil.buildErrorStatusUpdateSettlementOutDto(
                    fractionResult.code(), fractionResult.description());
            errorDto.setBusinessRuleCode(fractionResult.businessRuleCode());
            return errorDto;
        }

        StatusUpdateResult fractionCustodianResult = processRule(businessRuleMap,
                BusinessRuleEnum.RULE_FRACTION_CUSTODIAN,
                inputRule, settlementEntity.getCustodianStatusId(), code);
        if (!fractionCustodianResult.isValid()) {
            log.info("[rules] END validate-settlement tradeId={} fraction={} result=REJECTED rule=RULE_FRACTION_CUSTODIAN elapsed={}ms",
                    tradeId, fraction, ms(t0));
            StatusUpdateSettlementOutDto errorDto = MapperUtil.buildErrorStatusUpdateSettlementOutDto(
                    fractionCustodianResult.code(), fractionCustodianResult.description());
            errorDto.setBusinessRuleCode(fractionCustodianResult.businessRuleCode());
            return errorDto;
        }

        log.info("[rules] END validate-settlement tradeId={} sideId={} fraction={} result=OK elapsed={}ms",
                tradeId, sideId, fraction, ms(t0));
        return StatusUpdateSettlementOutDto.builder()
                .isValid(true)
                .description(BusinessRuleMessageEnum.SUCCESS_BUSINESS_RULE.getValue())
                .code(code)
                .newStatus(fractionResult.newStatus())
                .newStatusCustodian(fractionCustodianResult.newStatus())
                .build();
    }

    private TradeEntity validateTrade(Long tradeId, RulePerformanceMetrics metrics) {
        if (tradeId == null) {
            throw new ServiceException(ErrorCode.TRADE_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
        metrics.recordTradeRepositoryCall();
        return tradeRepository.findDetailedById(tradeId)
                .or(() -> {
                    metrics.recordTradeRepositoryCall();
                    return tradeRepository.findById(tradeId);
                })
                .orElseThrow(() -> new ServiceException(ErrorCode.TRADE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private SettlementEntity validateSettlement(Long tradeId, String sideId, Integer fraction) {
        if (tradeId == null || sideId == null || fraction == null) {
            throw new ServiceException(ErrorCode.SETTLEMENT_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
        SettlementKey key = SettlementKey.builder()
                .trade(tradeId)
                .sideId(sideId)
                .fraction(fraction)
                .build();
        return settlementRepository.findById(key)
                .orElseThrow(() -> new ServiceException(ErrorCode.SETTLEMENT_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private Long getBuyOrSellStatus(TradeEntity tradeEntity, SideEnum sideEnum) {
        if (ObjectUtils.isEmpty(tradeEntity)) {
            return 0L;
        }
        if (SideEnum.BUY.equals(sideEnum)) {
            return Optional.ofNullable(tradeEntity.getBuyStatusId()).orElse(0L);
        }
        if (SideEnum.SELL.equals(sideEnum)) {
            return Optional.ofNullable(tradeEntity.getSellStatusId()).orElse(0L);
        }
        throw new ServiceException(ErrorCode.SIDE_NOT_FOUND, HttpStatus.NOT_FOUND);
    }

    private Optional<BusinessRuleEntity> validateBusinessRuleByCountryAndCode(Long countryId, String code,
                                                                              RulePerformanceMetrics metrics) {
        Set<String> businessRuleCategories = Set.of(CategoryEnum.OPERATION.getValue());
        metrics.recordBusinessRuleRepositoryCall();
        Optional<BusinessRuleEntity> businessRuleEntityOptional = businessRuleRepository
                .findByCountryIdAndCode(businessRuleCategories, countryId, code);

        if (businessRuleEntityOptional.isEmpty()) {
            metrics.recordBusinessRuleRepositoryCall();
            return businessRuleRepository
                    .findByCodeAndAllCountry(businessRuleCategories, code);
        } else {
            return businessRuleEntityOptional;
        }
    }

    private Map<BusinessRuleEnum, Long> getBusinessRule(CountryEntity countryEntity, String code) {
        return getBusinessRule(countryEntity, code, new RulePerformanceMetrics());
    }

    private Map<BusinessRuleEnum, Long> getBusinessRule(CountryEntity countryEntity, String code,
                                                        RulePerformanceMetrics metrics) {
        String cacheKey = countryEntity.getId() + "_" + code;
        Map<BusinessRuleEnum, Long> cached = businessRuleMapCache.getIfPresent(cacheKey);
        if (cached != null) {
            log.debug("[rules] rule-map-cache HIT countryId={} code={}", countryEntity.getId(), code);
            return cached;
        }
        long tLoad = System.nanoTime();
        log.info("[rules] rule-map-cache MISS countryId={} code={} — loading from DB", countryEntity.getId(), code);
        Map<BusinessRuleEnum, Long> result = loadBusinessRuleMap(countryEntity, code, metrics);
        businessRuleMapCache.put(cacheKey, Collections.unmodifiableMap(result));
        log.info("[rules] rule-map-cache LOADED countryId={} code={} rules={} elapsed={}ms",
                countryEntity.getId(), code, result.keySet(), ms(tLoad));
        return result;
    }

    private Map<BusinessRuleEnum, Long> loadBusinessRuleMap(CountryEntity countryEntity, String code,
                                                            RulePerformanceMetrics metrics) {
        Map<BusinessRuleEnum, Long> businessRuleMap = new HashMap<>();

        BusinessRuleEntity businessRuleEntity = validateBusinessRuleByCountryAndCode(countryEntity.getId(), code, metrics)
                .orElseThrow(() -> new ServiceException(ErrorCode.BUSINESS_RULE_NOT_FOUND, HttpStatus.NOT_FOUND));
        String values = businessRuleEntity.getValue();

        List<String> valueArray = values == null
                ? new ArrayList<>()
                : new ArrayList<>(Arrays.asList(values.split("\\|")));

        for (BusinessRuleEnum businessRuleEnum : BusinessRuleEnum.values()) {
            Optional<String> matchingValue = valueArray.stream()
                    .filter(value -> value.trim().endsWith(businessRuleEnum.getValue()))
                    .findFirst();

            if (matchingValue.isPresent()) {
                Optional<BusinessRuleEntity> businessRuleEntityOp = validateBusinessRuleByCountryAndCode(
                        countryEntity.getId(), matchingValue.get().trim(), metrics);

                businessRuleEntityOp.ifPresent(entity -> businessRuleMap.put(businessRuleEnum, entity.getId()));
            }
        }

        Arrays.stream(BusinessRuleEnum.values())
                .filter(businessRuleEnum -> code.trim().endsWith(businessRuleEnum.getValue()))
                .findFirst()
                .ifPresent(businessRuleEnum -> businessRuleMap.put(businessRuleEnum, businessRuleEntity.getId()));

        if (businessRuleMap.isEmpty()) {
            throw new ServiceException(ErrorCode.BUSINESS_RULE_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
        return businessRuleMap;
    }

    private StatusClientOutDto getNewStatus(Long businessRuleId, Long originStatusId,
                                            BusinessRuleEnum businessRuleCode, RulePerformanceMetrics metrics) {
        long startedNanos = System.nanoTime();
        String result = "ERROR";
        try {
            StatusTransitionClientOutDto statusTransitionClientOutDto = operationStatusClient
                    .transitionByBusinessRuleIdAndOriginStatusId(businessRuleId, originStatusId);
            result = statusTransitionClientOutDto == null || statusTransitionClientOutDto.getTargetStatus() == null
                    ? "EMPTY_RESPONSE"
                    : "SUCCESS";
            return statusTransitionClientOutDto.getTargetStatus();
        } finally {
            long elapsedNanos = System.nanoTime() - startedNanos;
            metrics.recordStatusRest(elapsedNanos, businessRuleId, originStatusId);
            log.debug(
                    "PERF_RULES_STATUS_CALL service=reglas podName={} tradeId={} sideId={} businessRuleCode={} businessRuleId={} originStatusId={} elapsedMs={} result={}",
                    System.getenv().getOrDefault("HOSTNAME", "unknown"), metrics.tradeId, metrics.sideId,
                    businessRuleCode, businessRuleId, originStatusId,
                    TimeUnit.NANOSECONDS.toMillis(elapsedNanos), result);
        }
    }

    private InputRule buildInputRuleBySide(TradeEntity tradeEntity, SideEnum sideEnum,
                                           RulePerformanceMetrics metrics) {
        metrics.recordSettlementRepositoryCall();
        List<SettlementEntity> settlementList = settlementRepository.findByTradeIdAndSideId(
                tradeEntity.getId(), sideEnum.getId());
        return MapperUtil.tradeEntityToInputRule(tradeEntity, settlementList, sideEnum);
    }

    private StatusUpdateResult processRule(Map<BusinessRuleEnum, Long> businessRuleMap,
                                           BusinessRuleEnum businessRuleEnum, InputRule inputRule, Long statusId, String code) {
        return processRule(businessRuleMap, businessRuleEnum, inputRule, statusId, code,
                new RulePerformanceMetrics());
    }

    private StatusUpdateResult processRule(Map<BusinessRuleEnum, Long> businessRuleMap,
                                           BusinessRuleEnum businessRuleEnum, InputRule inputRule, Long statusId, String code,
                                           RulePerformanceMetrics metrics) {
        if (!businessRuleMap.containsKey(businessRuleEnum)) {
            log.debug("[rules] process-rule rule={} SKIPPED (not in map)", businessRuleEnum);
            return StatusUpdateResult.valid(null);
        }

        long t = System.nanoTime();
        Long businessRuleId = businessRuleMap.get(businessRuleEnum);
        long evaluationStartNanos = System.nanoTime();
        BusinessRule businessRule;
        try {
            businessRule = ruleService.validateExpression(businessRuleId, inputRule);
        } finally {
            metrics.recordEvaluation(evaluationStartNanos);
        }

        if (!businessRule.isValid()) {
            log.info("[rules] process-rule rule={} ruleId={} result=INVALID desc='{}' elapsed={}ms",
                    businessRuleEnum, businessRuleId, businessRule.description(), ms(t));
            return StatusUpdateResult.invalid(code, businessRule.description(), businessRule.businessRuleCode());
        }

        StatusOutDto newStatus;
        long tStatus = System.nanoTime();
        newStatus = MapperUtil.statusClientOutDtoToStatusOutDto(
                getNewStatus(businessRuleId, statusId, businessRuleEnum, metrics));
        log.info("[rules] process-rule rule={} ruleId={} result=OK status-http={}ms total={}ms",
                businessRuleEnum, businessRuleId, ms(tStatus), ms(t));
        return StatusUpdateResult.valid(newStatus);
    }

    private StatusOutDto processRuleFolio(Map<BusinessRuleEnum, Long> businessRuleMap,
                                          InputRule inputRule, SideEnum sideEnum,
                                          StatusOutDto newStatusSide, TradeEntity tradeEntity, RulePerformanceMetrics metrics) {
        if (!businessRuleMap.containsKey(BusinessRuleEnum.RULE_FOLIO)) {
            return null;
        }

        Long businessRuleId = businessRuleMap.get(BusinessRuleEnum.RULE_FOLIO);
        Long buyStatusId = SideEnum.BUY.equals(sideEnum) && Objects.nonNull(newStatusSide)
                ? newStatusSide.getId()
                : tradeEntity.getBuyStatusId();
        Long sellStatusId = SideEnum.SELL.equals(sideEnum) && Objects.nonNull(newStatusSide)
                ? newStatusSide.getId()
                : tradeEntity.getSellStatusId();
        InputRule inputRuleFolio = InputRule.updateStatusIdBySide(inputRule, buyStatusId, sellStatusId);

        long evaluationStartNanos = System.nanoTime();
        BusinessRule businessRuleFolio;
        try {
            businessRuleFolio = ruleService.validateExpression(businessRuleId, tradeEntity.getStatusId(),
                    inputRuleFolio);
        } finally {
            metrics.recordEvaluation(evaluationStartNanos);
        }

        if (!businessRuleFolio.isValid()) {
            return null;
        }

        return MapperUtil.statusClientOutDtoToStatusOutDto(
                getNewStatus(businessRuleId, tradeEntity.getStatusId(), BusinessRuleEnum.RULE_FOLIO, metrics));
    }

    private void logTradePerformance(StatusUpdateTradeInDto request, String result, long totalStartNanos,
                                     StopWatch stopWatch, RulePerformanceMetrics metrics) {
        log.info(
                "PERF_ASSIGNMENT service=reglas podName={} operation=validateUpdateStatusTrade result={} tradeId={} side={} totalMs={} loadTradeMs={} loadSettlementsAndInputMs={} loadBusinessRulesMs={} evaluationMs={} tradeRepositoryCalls={} settlementRepositoryCalls={} businessRuleRepositoryCalls={} statusHttpCalls={} statusRestTotalMs={}",
                System.getenv().getOrDefault("HOSTNAME", "unknown"),
                result,
                request == null ? null : request.getTradeId(),
                request == null || request.getSideEnum() == null ? null : request.getSideEnum().getId(),
                TimeUnit.NANOSECONDS.toMillis(System.nanoTime() - totalStartNanos),
                taskMillis(stopWatch, "load-trade"),
                taskMillis(stopWatch, "load-settlements-and-build-input"),
                taskMillis(stopWatch, "load-business-rules"),
                TimeUnit.NANOSECONDS.toMillis(metrics.evaluationNanos),
                metrics.tradeRepositoryCalls,
                metrics.settlementRepositoryCalls,
                metrics.businessRuleRepositoryCalls,
                metrics.statusRestCount,
                TimeUnit.NANOSECONDS.toMillis(metrics.statusRestNanos));
        log.info(
                "PERF_RULES_STATUS_SUMMARY service=reglas podName={} validationCount=1 statusHttpCalls={} statusHttpTotalMs={} uniqueStatusTransitionKeys={} tradeRepositoryCalls={} settlementRepositoryCalls={} businessRuleRepositoryCalls={}",
                System.getenv().getOrDefault("HOSTNAME", "unknown"),
                metrics.statusRestCount,
                TimeUnit.NANOSECONDS.toMillis(metrics.statusRestNanos),
                metrics.statusTransitionKeys.size(),
                metrics.tradeRepositoryCalls,
                metrics.settlementRepositoryCalls,
                metrics.businessRuleRepositoryCalls);
    }

    private long taskMillis(StopWatch stopWatch, String taskName) {
        for (StopWatch.TaskInfo taskInfo : stopWatch.getTaskInfo()) {
            if (taskName.equals(taskInfo.getTaskName())) {
                return taskInfo.getTimeMillis();
            }
        }
        return 0;
    }

    private static long ms(long nanoStart) {
        return (System.nanoTime() - nanoStart) / 1_000_000L;
    }

    private record StatusUpdateResult(
            boolean isValid,
            StatusOutDto newStatus,
            String code,
            String description,
            BusinessRuleCodeOutDto businessRuleCode) {

        static StatusUpdateResult valid(StatusOutDto newStatus) {
            return new StatusUpdateResult(true, newStatus, null, null, null);
        }

        static StatusUpdateResult invalid(String code, String description, BusinessRuleCodeOutDto businessRuleCode) {
            return new StatusUpdateResult(false, null, code, description, businessRuleCode);
        }
    }

}

```

## src/main/java/com/nubo/operations/rules/api/web/controller/OperationActionBusinessRuleRestController.java

```java
package com.nubo.operations.rules.api.web.controller;

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

import com.nubo.operations.rules.api.models.dto.request.StatusAllowedOptionsInDto;
import com.nubo.operations.rules.api.models.dto.response.BusinessRuleOutDto;
import com.nubo.operations.rules.api.models.dto.response.StatusAllowedOptionsOutDto;
import com.nubo.operations.rules.api.service.OperationActionBusinessRuleService;

@Tag(name = "Operation Action Business Rule")
@RequestMapping("/{version}/operation-action-business-rule")
@RestController
@RequiredArgsConstructor
public class OperationActionBusinessRuleRestController {

    private final OperationActionBusinessRuleService operationActionBusinessRuleService;

    @Operation(summary = "Operation Action, Validate Action by Code and status",
            description = "Operation Action, Validate Action by Code and status")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = StatusAllowedOptionsOutDto.class)))})
    @PostMapping("/validation")
    public ResponseEntity<StatusAllowedOptionsOutDto> validateStatusAndCode(
            @Valid @RequestBody StatusAllowedOptionsInDto statusAllowedOptionsInDto) {
        return ResponseEntity.ok(operationActionBusinessRuleService.validateStatusAndCode(statusAllowedOptionsInDto));
    }

    @Operation(summary = "Find Status Action business rule by country and code", 
            description = "Find Status Action business rule by country and code")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = BusinessRuleOutDto.class)))})
    @GetMapping("/country/{countryId}/code/{code}/valid")
    public ResponseEntity<BusinessRuleOutDto> actionBusinessRuleByCountryIdAndCodeValid(
        @PathVariable Long countryId, @PathVariable String code) {
        return ResponseEntity.ok(operationActionBusinessRuleService.actionBusinessRuleByCountryIdAndCodeValid(countryId, code));
    }

    @Operation(summary = "Find Status Action business rule by All country and code", 
            description = "Find Status Action business rule by All country and code")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = BusinessRuleOutDto.class)))})
    @GetMapping("/country/all/code/{code}/valid")
    public ResponseEntity<BusinessRuleOutDto> actionBusinessRuleByCountryIdAndCodeValid(
        @PathVariable String code) {
        return ResponseEntity.ok(operationActionBusinessRuleService.actionBusinessRuleByCountryAllAndCodeValid(code));
    }
}

```

## src/main/java/com/nubo/operations/rules/api/web/controller/OperationBusinessRuleRestController.java

```java
package com.nubo.operations.rules.api.web.controller;

import com.nubo.operations.rules.api.models.dto.response.BusinessRuleOutDto;
import com.nubo.operations.rules.api.service.OperationBusinessRuleService;
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

@Tag(name = "Operation Business Rule")
@RequestMapping("/{version}/operation-business-rule")
@RestController
@RequiredArgsConstructor
public class OperationBusinessRuleRestController {

    private final OperationBusinessRuleService operationBusinessRuleService;

    @Operation(summary = "Find business rule by country and code", description = "Find business rule by country and code")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = BusinessRuleOutDto.class)))})
    @GetMapping("/country/{countryId}/code/{code}")
    public ResponseEntity<BusinessRuleOutDto> findBusinessRuleByCountryIdAndCode(@PathVariable Long countryId, @PathVariable String code) {
        return ResponseEntity.ok(operationBusinessRuleService.findBusinessRuleByCountryIdAndCode(countryId, code));
    }

    @Operation(summary = "Find business rule by code", description = "Find business rule by code")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = BusinessRuleOutDto.class)))})
    @GetMapping("/code/{code}")
    public ResponseEntity<BusinessRuleOutDto> findBusinessRuleByCode(@PathVariable String code) {
        return ResponseEntity.ok(operationBusinessRuleService.findBusinessRuleByCode(code));
    }

}

```

## src/main/java/com/nubo/operations/rules/api/web/controller/StatusUpdateBusinessRuleRestController.java

```java
package com.nubo.operations.rules.api.web.controller;

import com.nubo.operations.rules.api.models.dto.request.StatusUpdateBusinessRuleInDto;
import com.nubo.operations.rules.api.models.dto.request.StatusUpdateSettlementInDto;
import com.nubo.operations.rules.api.models.dto.request.StatusUpdateTradeInDto;
import com.nubo.operations.rules.api.models.dto.request.BatchStatusUpdateTradeInDto;
import com.nubo.operations.rules.api.models.dto.response.StatusUpdateBusinessRuleOutDto;
import com.nubo.operations.rules.api.models.dto.response.StatusUpdateSettlementOutDto;
import com.nubo.operations.rules.api.models.dto.response.StatusUpdateTradeOutDto;
import com.nubo.operations.rules.api.models.dto.response.BatchStatusUpdateTradeOutDto;
import com.nubo.operations.rules.api.service.StatusUpdateBusinessRuleService;
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

@Tag(name = "Status Update Business Rule")
@RestController
@RequestMapping("/{version}/status-update-business-rule")
@RequiredArgsConstructor
public class StatusUpdateBusinessRuleRestController {

    private final StatusUpdateBusinessRuleService statusUpdateBusinessRuleService;

    @Deprecated(since = "0.52.0", forRemoval = true)
    @Operation(summary = "Evaluate Update status Operation", description = "Evaluate Update status Operation")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = StatusUpdateBusinessRuleOutDto.class)))})
    @PostMapping("/operation/validation")
    public ResponseEntity<StatusUpdateBusinessRuleOutDto> validateUpdateStatusOperation(
            @Valid @RequestBody StatusUpdateBusinessRuleInDto statusUpdateBusinessRuleInDto) {
        return ResponseEntity
                .ok(statusUpdateBusinessRuleService.validateUpdateStatusOperation(statusUpdateBusinessRuleInDto));
    }

    @Operation(summary = "Evaluate Update status Trade", description = "Evaluate Update status Trade")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = StatusUpdateTradeOutDto.class))) })
    @PostMapping("/trade/validation")
    public ResponseEntity<StatusUpdateTradeOutDto> validateUpdateStatusTrade(
            @Valid @RequestBody StatusUpdateTradeInDto statusUpdateTradeInDto) {
        return ResponseEntity
                .ok(statusUpdateBusinessRuleService.validateUpdateStatusTrade(statusUpdateTradeInDto));
    }

    @Operation(summary = "Evaluate Update status Trade in batch", description = "Batch-only evaluation for assignment processing")
    @PostMapping("/trade/validation/batch")
    public ResponseEntity<BatchStatusUpdateTradeOutDto> validateUpdateStatusTradeBatch(
            @Valid @RequestBody BatchStatusUpdateTradeInDto batchStatusUpdateTradeInDto) {
        return ResponseEntity.ok(statusUpdateBusinessRuleService
                .validateUpdateStatusTradeBatch(batchStatusUpdateTradeInDto));
    }

    @Operation(summary = "Evaluate Update status Settlement", description = "Evaluate Update status Settlement")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = StatusUpdateSettlementOutDto.class))) })
    @PostMapping("/settlement/validation")
    public ResponseEntity<StatusUpdateSettlementOutDto> validateUpdateStatusSettlement(
            @Valid @RequestBody StatusUpdateSettlementInDto statusUpdateSettlementInDto) {
        return ResponseEntity
                .ok(statusUpdateBusinessRuleService.validateUpdateStatusSettlement(statusUpdateSettlementInDto));
    }


}

```
