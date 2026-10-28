# nbo-png-reportes-corregidas-cmd-back

Código Java de producción y configuraciones, sin tests. Cada sección contiene el archivo original completo y su ruta. Captura: 28/10/2026.

## Índice

1. `.mvn/wrapper/maven-wrapper.properties`
2. `mvnw`
3. `mvnw.cmd`
4. `pom.xml`
5. `src/main/java/com/nubo/corrected/reports/cmd/api/CorrectedReportsCmdApiApplication.java`
6. `src/main/java/com/nubo/corrected/reports/cmd/api/application/annotations/DecimalScale.java`
7. `src/main/java/com/nubo/corrected/reports/cmd/api/application/annotations/ValidBigDecimal.java`
8. `src/main/java/com/nubo/corrected/reports/cmd/api/application/config/KafkaProducerConfig.java`
9. `src/main/java/com/nubo/corrected/reports/cmd/api/application/config/SwaggerConfig.java`
10. `src/main/java/com/nubo/corrected/reports/cmd/api/application/config/ValidBigDecimalConfig.java`
11. `src/main/java/com/nubo/corrected/reports/cmd/api/application/config/WebConfig.java`
12. `src/main/java/com/nubo/corrected/reports/cmd/api/application/context/GlobalContext.java`
13. `src/main/java/com/nubo/corrected/reports/cmd/api/application/database/NamingStrategyConfig.java`
14. `src/main/java/com/nubo/corrected/reports/cmd/api/application/database/UpperNamingConfig.java`
15. `src/main/java/com/nubo/corrected/reports/cmd/api/application/filters/GlobalFilter.java`
16. `src/main/java/com/nubo/corrected/reports/cmd/api/application/interceptors/GlobalInterceptor.java`
17. `src/main/java/com/nubo/corrected/reports/cmd/api/application/properties/PropertiesConfig.java`
18. `src/main/java/com/nubo/corrected/reports/cmd/api/application/properties/PropertiesContext.java`
19. `src/main/java/com/nubo/corrected/reports/cmd/api/application/serializers/BigDecimalPercentageStyleSerializer.java`
20. `src/main/java/com/nubo/corrected/reports/cmd/api/application/serializers/BigDecimalSerializer.java`
21. `src/main/java/com/nubo/corrected/reports/cmd/api/application/serializers/BigDecimalThousandsSeparatorSerializer.java`
22. `src/main/java/com/nubo/corrected/reports/cmd/api/application/util/ApplicationUtils.java`
23. `src/main/java/com/nubo/corrected/reports/cmd/api/client/kafka/producer/models/InvestorInDto.java`
24. `src/main/java/com/nubo/corrected/reports/cmd/api/client/kafka/producer/models/ParticipantInDto.java`
25. `src/main/java/com/nubo/corrected/reports/cmd/api/client/kafka/producer/models/ReportFileFractionInDto.java`
26. `src/main/java/com/nubo/corrected/reports/cmd/api/client/kafka/producer/models/ReportFileInDto.java`
27. `src/main/java/com/nubo/corrected/reports/cmd/api/client/kafka/producer/models/ReportFileOperationInDto.java`
28. `src/main/java/com/nubo/corrected/reports/cmd/api/client/kafka/producer/models/SecurityTitleInDto.java`
29. `src/main/java/com/nubo/corrected/reports/cmd/api/client/kafka/producer/service/KafkaNuboAdapter.java`
30. `src/main/java/com/nubo/corrected/reports/cmd/api/exception/ServiceException.java`
31. `src/main/java/com/nubo/corrected/reports/cmd/api/exception/error/ErrorCode.java`
32. `src/main/java/com/nubo/corrected/reports/cmd/api/exception/error/ErrorResponse.java`
33. `src/main/java/com/nubo/corrected/reports/cmd/api/exception/error/ErrorValidation.java`
34. `src/main/java/com/nubo/corrected/reports/cmd/api/exception/handler/GlobalExceptionHandler.java`
35. `src/main/java/com/nubo/corrected/reports/cmd/api/helpers/MapperUtil.java`
36. `src/main/java/com/nubo/corrected/reports/cmd/api/helpers/TradeSearchCriteria.java`
37. `src/main/java/com/nubo/corrected/reports/cmd/api/models/dto/request/CorrectedReportsInDto.java`
38. `src/main/java/com/nubo/corrected/reports/cmd/api/models/dto/response/CorrectedReportsOutDto.java`
39. `src/main/java/com/nubo/corrected/reports/cmd/api/models/dto/response/CorrectedReportsSizeOutDto.java`
40. `src/main/java/com/nubo/corrected/reports/cmd/api/models/dto/response/CountryOutDto.java`
41. `src/main/java/com/nubo/corrected/reports/cmd/api/models/dto/response/ParticipantOutDto.java`
42. `src/main/java/com/nubo/corrected/reports/cmd/api/models/dto/response/StatusOutDto.java`
43. `src/main/java/com/nubo/corrected/reports/cmd/api/models/entity/CfiEntity.java`
44. `src/main/java/com/nubo/corrected/reports/cmd/api/models/entity/CityEntity.java`
45. `src/main/java/com/nubo/corrected/reports/cmd/api/models/entity/ClassEntity.java`
46. `src/main/java/com/nubo/corrected/reports/cmd/api/models/entity/CountryEntity.java`
47. `src/main/java/com/nubo/corrected/reports/cmd/api/models/entity/CurrencyEntity.java`
48. `src/main/java/com/nubo/corrected/reports/cmd/api/models/entity/DepartmentEntity.java`
49. `src/main/java/com/nubo/corrected/reports/cmd/api/models/entity/DepositoryEntity.java`
50. `src/main/java/com/nubo/corrected/reports/cmd/api/models/entity/FileGenerateEntity.java`
51. `src/main/java/com/nubo/corrected/reports/cmd/api/models/entity/GicsEntity.java`
52. `src/main/java/com/nubo/corrected/reports/cmd/api/models/entity/IdentificationTypeEntity.java`
53. `src/main/java/com/nubo/corrected/reports/cmd/api/models/entity/InvestorAccountEntity.java`
54. `src/main/java/com/nubo/corrected/reports/cmd/api/models/entity/InvestorEntity.java`
55. `src/main/java/com/nubo/corrected/reports/cmd/api/models/entity/IssuerEntity.java`
56. `src/main/java/com/nubo/corrected/reports/cmd/api/models/entity/MarketEntity.java`
57. `src/main/java/com/nubo/corrected/reports/cmd/api/models/entity/ParticipantAccountEntity.java`
58. `src/main/java/com/nubo/corrected/reports/cmd/api/models/entity/ParticipantEntity.java`
59. `src/main/java/com/nubo/corrected/reports/cmd/api/models/entity/SecurityTitleEntity.java`
60. `src/main/java/com/nubo/corrected/reports/cmd/api/models/entity/SettlementEntity.java`
61. `src/main/java/com/nubo/corrected/reports/cmd/api/models/entity/SettlementInstructionsEntity.java`
62. `src/main/java/com/nubo/corrected/reports/cmd/api/models/entity/SettlementKey.java`
63. `src/main/java/com/nubo/corrected/reports/cmd/api/models/entity/SideEntity.java`
64. `src/main/java/com/nubo/corrected/reports/cmd/api/models/entity/StatusEntity.java`
65. `src/main/java/com/nubo/corrected/reports/cmd/api/models/entity/TariffDetailEntity.java`
66. `src/main/java/com/nubo/corrected/reports/cmd/api/models/entity/TariffDetailId.java`
67. `src/main/java/com/nubo/corrected/reports/cmd/api/models/entity/TariffEntity.java`
68. `src/main/java/com/nubo/corrected/reports/cmd/api/models/entity/TaxStatusEntity.java`
69. `src/main/java/com/nubo/corrected/reports/cmd/api/models/entity/TaxesEntity.java`
70. `src/main/java/com/nubo/corrected/reports/cmd/api/models/entity/TradeEntity.java`
71. `src/main/java/com/nubo/corrected/reports/cmd/api/models/entity/TradeEquityEntity.java`
72. `src/main/java/com/nubo/corrected/reports/cmd/api/models/entity/TradingSessionEntity.java`
73. `src/main/java/com/nubo/corrected/reports/cmd/api/models/entity/TradingSystemEntity.java`
74. `src/main/java/com/nubo/corrected/reports/cmd/api/models/entity/TypeEntity.java`
75. `src/main/java/com/nubo/corrected/reports/cmd/api/models/entity/UserNuboEntity.java`
76. `src/main/java/com/nubo/corrected/reports/cmd/api/models/enums/FileNameEnum.java`
77. `src/main/java/com/nubo/corrected/reports/cmd/api/models/enums/PropertiesEnum.java`
78. `src/main/java/com/nubo/corrected/reports/cmd/api/models/enums/StatusEnum.java`
79. `src/main/java/com/nubo/corrected/reports/cmd/api/models/enums/StatusFileEnum.java`
80. `src/main/java/com/nubo/corrected/reports/cmd/api/models/enums/TypeAccountEnum.java`
81. `src/main/java/com/nubo/corrected/reports/cmd/api/models/enums/TypeFileEnum.java`
82. `src/main/java/com/nubo/corrected/reports/cmd/api/models/enums/UserTypeEnum.java`
83. `src/main/java/com/nubo/corrected/reports/cmd/api/models/enums/VersionApiEnum.java`
84. `src/main/java/com/nubo/corrected/reports/cmd/api/repository/FileGenerateRepository.java`
85. `src/main/java/com/nubo/corrected/reports/cmd/api/repository/ParticipantRepository.java`
86. `src/main/java/com/nubo/corrected/reports/cmd/api/repository/SettlementInstructionsRepository.java`
87. `src/main/java/com/nubo/corrected/reports/cmd/api/repository/SettlementRepository.java`
88. `src/main/java/com/nubo/corrected/reports/cmd/api/repository/StatusRepository.java`
89. `src/main/java/com/nubo/corrected/reports/cmd/api/repository/TariffDetailRepository.java`
90. `src/main/java/com/nubo/corrected/reports/cmd/api/repository/TradeEquityRepository.java`
91. `src/main/java/com/nubo/corrected/reports/cmd/api/repository/TradeRepository.java`
92. `src/main/java/com/nubo/corrected/reports/cmd/api/repository/TypeRepository.java`
93. `src/main/java/com/nubo/corrected/reports/cmd/api/repository/UserNuboRepository.java`
94. `src/main/java/com/nubo/corrected/reports/cmd/api/service/CorrectedReportsOperation.java`
95. `src/main/java/com/nubo/corrected/reports/cmd/api/service/impl/CorrectedReportsOperationImpl.java`
96. `src/main/java/com/nubo/corrected/reports/cmd/api/web/controller/CorrectedReportsOperationController.java`
97. `src/main/resources/application-dev.yml`
98. `src/main/resources/application-local.yml`
99. `src/main/resources/application-prod.yml`
100. `src/main/resources/application-qa.yml`
101. `src/main/resources/application-uat.yml`
102. `src/main/resources/application.yml`
103. `src/main/resources/banner.txt`
104. `src/main/resources/log/JsonEventLayout_error.json`
105. `src/main/resources/log/JsonEventLayout_info.json`
106. `src/main/resources/log/JsonEventLayout_trace.json`
107. `src/main/resources/log/log4j2-prod.properties`
108. `src/main/resources/log/log4j2.properties`

## .mvn/wrapper/maven-wrapper.properties

```properties
wrapperVersion=3.3.4
distributionType=only-script
distributionUrl=https://repo.maven.apache.org/maven2/org/apache/maven/apache-maven/3.9.11/apache-maven-3.9.11-bin.zip

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
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>
	<parent>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-parent</artifactId>
		<version>3.5.8</version>
		<relativePath/> <!-- lookup parent from repository -->
	</parent>
	<groupId>com.nubo.corrected.reports.cmd.api</groupId>
	<artifactId>corrected-reports-cmd-api</artifactId>
	<version>0.4.10</version>
	<name>${project.artifactId}</name>
	<description>Corrected Reports Command API</description>

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
        <!-- vulnerability adjustment  -->
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
                                <exclude>**/helpers/TradeSearchCriteria.class</exclude>
								<exclude>**/models/**</exclude>
								<exclude>**/repository/**</exclude>
								<exclude>**/CorrectedReportsCmdApiApplication.class</exclude>
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

## src/main/java/com/nubo/corrected/reports/cmd/api/CorrectedReportsCmdApiApplication.java

```java
package com.nubo.corrected.reports.cmd.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CorrectedReportsCmdApiApplication {

    public static void main(String[] args) {
        SpringApplication.run(CorrectedReportsCmdApiApplication.class, args);
    }

}

```

## src/main/java/com/nubo/corrected/reports/cmd/api/application/annotations/DecimalScale.java

```java
package com.nubo.corrected.reports.cmd.api.application.annotations;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import java.math.RoundingMode;

@Target({ ElementType.FIELD })
@Retention(RetentionPolicy.RUNTIME)
public @interface DecimalScale {
    int value() default 2;

    RoundingMode roundingMode() default RoundingMode.HALF_UP;
}

```

## src/main/java/com/nubo/corrected/reports/cmd/api/application/annotations/ValidBigDecimal.java

```java
package com.nubo.corrected.reports.cmd.api.application.annotations;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import com.nubo.corrected.reports.cmd.api.application.config.ValidBigDecimalConfig;

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

## src/main/java/com/nubo/corrected/reports/cmd/api/application/config/KafkaProducerConfig.java

```java
package com.nubo.corrected.reports.cmd.api.application.config;

import lombok.RequiredArgsConstructor;
import org.apache.kafka.clients.producer.ProducerConfig;
import org.apache.kafka.common.serialization.StringSerializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.kafka.core.DefaultKafkaProducerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.core.ProducerFactory;

import com.nubo.corrected.reports.cmd.api.application.properties.PropertiesConfig;

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

## src/main/java/com/nubo/corrected/reports/cmd/api/application/config/SwaggerConfig.java

```java
package com.nubo.corrected.reports.cmd.api.application.config;

import com.nubo.corrected.reports.cmd.api.exception.error.ErrorResponse;
import com.nubo.corrected.reports.cmd.api.exception.error.ErrorValidation;
import com.nubo.corrected.reports.cmd.api.models.enums.PropertiesEnum;
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

## src/main/java/com/nubo/corrected/reports/cmd/api/application/config/ValidBigDecimalConfig.java

```java
package com.nubo.corrected.reports.cmd.api.application.config;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

import java.math.BigDecimal;

import com.nubo.corrected.reports.cmd.api.application.annotations.ValidBigDecimal;

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

## src/main/java/com/nubo/corrected/reports/cmd/api/application/config/WebConfig.java

```java
package com.nubo.corrected.reports.cmd.api.application.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestClient;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.i18n.SessionLocaleResolver;

import com.nubo.corrected.reports.cmd.api.application.interceptors.GlobalInterceptor;

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
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(globalInterceptor)
                .addPathPatterns("/**");
    }

    @Bean
    public RestClient restClientCreate() {
        return RestClient.create();
    }

}

```

## src/main/java/com/nubo/corrected/reports/cmd/api/application/context/GlobalContext.java

```java
package com.nubo.corrected.reports.cmd.api.application.context;

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

## src/main/java/com/nubo/corrected/reports/cmd/api/application/database/NamingStrategyConfig.java

```java
package com.nubo.corrected.reports.cmd.api.application.database;

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

## src/main/java/com/nubo/corrected/reports/cmd/api/application/database/UpperNamingConfig.java

```java
package com.nubo.corrected.reports.cmd.api.application.database;

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

## src/main/java/com/nubo/corrected/reports/cmd/api/application/filters/GlobalFilter.java

```java
package com.nubo.corrected.reports.cmd.api.application.filters;

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

import com.nubo.corrected.reports.cmd.api.application.context.GlobalContext;
import com.nubo.corrected.reports.cmd.api.application.util.ApplicationUtils;
import com.nubo.corrected.reports.cmd.api.exception.ServiceException;
import com.nubo.corrected.reports.cmd.api.exception.error.ErrorCode;
import com.nubo.corrected.reports.cmd.api.exception.error.ErrorResponse;
import com.nubo.corrected.reports.cmd.api.models.entity.UserNuboEntity;
import com.nubo.corrected.reports.cmd.api.models.enums.PropertiesEnum;
import com.nubo.corrected.reports.cmd.api.models.enums.VersionApiEnum;
import com.nubo.corrected.reports.cmd.api.repository.UserNuboRepository;

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
            if (uri.contains("/v3/api-docs") || uri.contains("/swagger-ui") ||
                    uri.contains("/v1/websocket") || uri.contains("/actuator")) {
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
        log.info("Client User: {} --------------------", clientUser);
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
                .orElseThrow(() -> new ServiceException(ErrorCode.USER_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

}

```

## src/main/java/com/nubo/corrected/reports/cmd/api/application/interceptors/GlobalInterceptor.java

```java
package com.nubo.corrected.reports.cmd.api.application.interceptors;

import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import com.nubo.corrected.reports.cmd.api.application.context.GlobalContext;

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

## src/main/java/com/nubo/corrected/reports/cmd/api/application/properties/PropertiesConfig.java

```java
package com.nubo.corrected.reports.cmd.api.application.properties;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import lombok.Getter;

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

    @Value("${kafka.nubo.producer.topic-name-operation-corrected-reports}")
    private String kafkaNuboProducerTopicNameOperationCorrectedReports;

}

```

## src/main/java/com/nubo/corrected/reports/cmd/api/application/properties/PropertiesContext.java

```java
package com.nubo.corrected.reports.cmd.api.application.properties;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import com.nubo.corrected.reports.cmd.api.application.context.GlobalContext;
import com.nubo.corrected.reports.cmd.api.application.util.ApplicationUtils;
import com.nubo.corrected.reports.cmd.api.models.entity.UserNuboEntity;
import com.nubo.corrected.reports.cmd.api.models.enums.PropertiesEnum;

public class PropertiesContext {

     public static String getClientIp() {
        return GlobalContext.getPropertyString(PropertiesEnum.CLIENT_IP.getValue());
    }

    public static String getClientUser() {
        return GlobalContext.getPropertyString(PropertiesEnum.CLIENT_USER.getValue());
    }

    public static LocalDateTime getClientDatetime() {
        String clientDatetime = GlobalContext.getPropertyString(PropertiesEnum.CLIENT_DATETIME.getValue());
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern(ApplicationUtils.getFormatDatetime());
        if (clientDatetime != null) {
            return LocalDateTime.parse(clientDatetime, formatter);
        }
        return LocalDateTime.now();
    }

    public static String getVersion() {
        return GlobalContext.getPropertyString(PropertiesEnum.VERSION_API.getValue());
    }

    public static UserNuboEntity getClientUserEntity() {
        return (UserNuboEntity) GlobalContext.getProperty(PropertiesEnum.CLIENT_USER_ENTITY.getValue());
    }
}

```

## src/main/java/com/nubo/corrected/reports/cmd/api/application/serializers/BigDecimalPercentageStyleSerializer.java

```java
package com.nubo.corrected.reports.cmd.api.application.serializers;

import java.io.IOException;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.text.DecimalFormat;
import java.text.DecimalFormatSymbols;
import java.util.Locale;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.BeanProperty;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.ContextualSerializer;
import com.nubo.corrected.reports.cmd.api.application.annotations.DecimalScale;

public class BigDecimalPercentageStyleSerializer extends JsonSerializer<BigDecimal> implements ContextualSerializer {

    private final Integer forceDecimalPlaces;
    private final RoundingMode roundingMode;

    public BigDecimalPercentageStyleSerializer() {
        this.forceDecimalPlaces = null;
        this.roundingMode = RoundingMode.HALF_UP;
    }

    public BigDecimalPercentageStyleSerializer(int forceDecimalPlaces) {
        this.forceDecimalPlaces = forceDecimalPlaces;
        this.roundingMode = RoundingMode.HALF_UP;
    }

    public BigDecimalPercentageStyleSerializer(int forceDecimalPlaces, RoundingMode roundingMode) {
        this.forceDecimalPlaces = forceDecimalPlaces;
        this.roundingMode = roundingMode;
    }

    @Override
    public void serialize(BigDecimal value, JsonGenerator gen, SerializerProvider serializers) throws IOException {
        if (value != null) {
            String formattedValue = formatAsPercentageStyle(value);
            gen.writeString(formattedValue);
        } else {
            gen.writeNull();
        }
    }

    private String formatAsPercentageStyle(BigDecimal number) {
        if (forceDecimalPlaces != null) {
            number = number.setScale(forceDecimalPlaces, roundingMode);
        }

        int scale = number.scale();
        StringBuilder pattern = new StringBuilder("#,##0");

        if (scale > 0) {
            pattern.append(".");
            pattern.append("0".repeat(scale));
        }

        DecimalFormatSymbols symbols = new DecimalFormatSymbols(Locale.US);
        DecimalFormat format = new DecimalFormat(pattern.toString(), symbols);

        return format.format(number) + "%";
    }

    @Override
    public JsonSerializer<?> createContextual(SerializerProvider prov, BeanProperty property)
            throws JsonMappingException {
        if (property != null) {
            DecimalScale annotation = property.getAnnotation(DecimalScale.class);
            if (annotation != null) {
                return new BigDecimalPercentageStyleSerializer(annotation.value(), annotation.roundingMode());
            }
        }
        return this;
    }
}

```

## src/main/java/com/nubo/corrected/reports/cmd/api/application/serializers/BigDecimalSerializer.java

```java
package com.nubo.corrected.reports.cmd.api.application.serializers;

import java.io.IOException;
import java.math.BigDecimal;
import java.math.RoundingMode;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.BeanProperty;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.ContextualSerializer;
import com.nubo.corrected.reports.cmd.api.application.annotations.DecimalScale;

public class BigDecimalSerializer extends JsonSerializer<BigDecimal> implements ContextualSerializer {

    private final Integer exactScale;
    private final RoundingMode roundingMode;

    public BigDecimalSerializer() {
        this.exactScale = null;
        this.roundingMode = RoundingMode.HALF_UP;
    }

    public BigDecimalSerializer(int exactScale) {
        this.exactScale = exactScale;
        this.roundingMode = RoundingMode.HALF_UP;
    }

    public BigDecimalSerializer(int exactScale, RoundingMode roundingMode) {
        this.exactScale = exactScale;
        this.roundingMode = roundingMode;
    }

    @Override
    public void serialize(BigDecimal value, JsonGenerator gen, SerializerProvider serializers) throws IOException {
        if (value != null) {
            BigDecimal result;

            if (exactScale != null) {
                result = value.setScale(exactScale, roundingMode);
            } else {
                result = value.stripTrailingZeros();
            }

            gen.writeNumber(result.toPlainString());
        } else {
            gen.writeNull();
        }
    }

    @Override
    public JsonSerializer<?> createContextual(SerializerProvider prov, BeanProperty property)
            throws JsonMappingException {
        if (property != null) {
            DecimalScale annotation = property.getAnnotation(DecimalScale.class);
            if (annotation != null) {
                return new BigDecimalSerializer(annotation.value(), annotation.roundingMode());
            }
        }
        return this;
    }
}

```

## src/main/java/com/nubo/corrected/reports/cmd/api/application/serializers/BigDecimalThousandsSeparatorSerializer.java

```java
package com.nubo.corrected.reports.cmd.api.application.serializers;

import java.io.IOException;
import java.math.BigDecimal;
import java.text.DecimalFormat;
import java.text.DecimalFormatSymbols;
import java.util.Locale;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;

public class BigDecimalThousandsSeparatorSerializer extends JsonSerializer<BigDecimal> {

    @Override
    public void serialize(BigDecimal value, JsonGenerator gen, SerializerProvider serializers) throws IOException {
        if (value == null) {
            gen.writeNull();
            return;
        }

        DecimalFormatSymbols symbols = new DecimalFormatSymbols(Locale.US);
        symbols.setGroupingSeparator(',');
        symbols.setDecimalSeparator('.');

        DecimalFormat decimalFormat = new DecimalFormat("#,##0.00", symbols);
        decimalFormat.setGroupingUsed(true);

        String formattedValue = decimalFormat.format(value);
        gen.writeString(formattedValue);
    }
}

```

## src/main/java/com/nubo/corrected/reports/cmd/api/application/util/ApplicationUtils.java

```java
package com.nubo.corrected.reports.cmd.api.application.util;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.nubo.corrected.reports.cmd.api.exception.ServiceException;
import com.nubo.corrected.reports.cmd.api.exception.error.ErrorCode;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class ApplicationUtils {

    private static final ObjectMapper MAPPER = new ObjectMapper();
    private static final String FORMAT_DATETIME = "yyyy-MM-dd'T'HH:mm:ss";
    private static final String FORMAT_DATE = "yyyy-MM-dd";
    private static final String FILE_FORMAT_DATETIME = "dd-MM-yyyy_HHmmss";

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

    public static String getFileFormatDatetime() {
        return FILE_FORMAT_DATETIME;
    }

    public static String getLocalDateTimeNow() {
        return LocalDateTime.now().format(DateTimeFormatter.ofPattern(ApplicationUtils.getFormatDatetime()));
    }

    public static String getFileFormatDatetimeNow() {
        return LocalDateTime.now().format(DateTimeFormatter.ofPattern(ApplicationUtils.getFileFormatDatetime()));
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

}

```

## src/main/java/com/nubo/corrected/reports/cmd/api/client/kafka/producer/models/InvestorInDto.java

```java
package com.nubo.corrected.reports.cmd.api.client.kafka.producer.models;

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
public class InvestorInDto {

    private Long id;

    private String code;

    private String name;

    private String documentType;

    private String documentNumber;

}

```

## src/main/java/com/nubo/corrected/reports/cmd/api/client/kafka/producer/models/ParticipantInDto.java

```java
package com.nubo.corrected.reports.cmd.api.client.kafka.producer.models;

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
public class ParticipantInDto {

    private Long id;

    private String code;

    private String name;

    private String shortName;

}

```

## src/main/java/com/nubo/corrected/reports/cmd/api/client/kafka/producer/models/ReportFileFractionInDto.java

```java
package com.nubo.corrected.reports.cmd.api.client.kafka.producer.models;

import java.math.BigDecimal;
import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.nubo.corrected.reports.cmd.api.application.serializers.BigDecimalThousandsSeparatorSerializer;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonInclude(JsonInclude.Include.ALWAYS)
public class ReportFileFractionInDto {

    private Integer fraction;

    private String sideDescription;

    private String investorAccountNumber;

    private InvestorInDto investorInitial;

    // Indicador de cuenta master inicial (por compra y venta)

    private InvestorInDto investorFinal;

    private String newMasterAccountIndicator;

    @JsonSerialize(using = BigDecimalThousandsSeparatorSerializer.class)
    private BigDecimal commissionPercentage;

    @JsonSerialize(using = BigDecimalThousandsSeparatorSerializer.class)
    private BigDecimal commissionAmount;

    @JsonSerialize(using = BigDecimalThousandsSeparatorSerializer.class)
    private BigDecimal valTaxAmount;

    @JsonSerialize(using = BigDecimalThousandsSeparatorSerializer.class)
    private BigDecimal netAmount;

    @JsonSerialize(using = BigDecimalThousandsSeparatorSerializer.class)
    private BigDecimal transferValue;

    private LocalDate correctionDate;//

}

```

## src/main/java/com/nubo/corrected/reports/cmd/api/client/kafka/producer/models/ReportFileInDto.java

```java
package com.nubo.corrected.reports.cmd.api.client.kafka.producer.models;

import java.time.LocalDateTime;
import java.util.List;

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
public class ReportFileInDto {

    private String clientIp;

    private String clientUser;

    private LocalDateTime clientDateTime;

    private Long fileGenerateId;

    private String fileName;

    private String fileType;

    private List<ReportFileOperationInDto> content;


}

```

## src/main/java/com/nubo/corrected/reports/cmd/api/client/kafka/producer/models/ReportFileOperationInDto.java

```java
package com.nubo.corrected.reports.cmd.api.client.kafka.producer.models;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.nubo.corrected.reports.cmd.api.application.serializers.BigDecimalThousandsSeparatorSerializer;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonInclude(JsonInclude.Include.ALWAYS)
public class ReportFileOperationInDto {

    private LocalDate matchDate;

    private Long matchId;

    private LocalDate clearingDate;

    private LocalDate correctionDate;//

    @JsonSerialize(using = BigDecimalThousandsSeparatorSerializer.class)
    private BigDecimal  correctionValue;

    private String depositDescription;

    private String countryName;

    private String typeDescription;

    private SecurityTitleInDto securityTitle;

    private ParticipantInDto participantBuy;

    private ParticipantInDto participantSell;

    private ParticipantInDto custodianBuy;

    private ParticipantInDto custodianSell;

    private Boolean assignmentMarkBuy;

    private Boolean assignmentMarkSell;

    private Boolean fractionalMarkBuy;

    private Boolean fractionalMarkSell;

    // TODO Indicador anticipo

    private Boolean canceledStatus;

    private String statusName;

    private String tradingSystemDescription;

    private String tradingSessionDescription;

    private String marketTypeDescription;

    @JsonSerialize(using = BigDecimalThousandsSeparatorSerializer.class)
    private BigDecimal quantity;

    @JsonSerialize(using = BigDecimalThousandsSeparatorSerializer.class)
    private BigDecimal price;

    @JsonSerialize(using = BigDecimalThousandsSeparatorSerializer.class)
    private BigDecimal volume;

    private String currencyCode;

    private Boolean reallocationIndicator;

    private Integer foreignBrokerBuy;

    private Integer foreignBrokerSell;

    private Integer responsibleTradeBuy;

    private Integer responsibleTradeSell;

    private Integer directDepositorBuy;

    private Integer directDepositorSell;

    private String referenceBuy;

    private String referenceSell;

    private String sourceQuoteBuyTypeDescription;

    private String sourceQuoteSellTypeDescription;

    // TODO Indicador Especial fiduciario por compra

    // TODO Indicador Especial fiduciario por venta

    private List<ReportFileFractionInDto> fractions;
}

```

## src/main/java/com/nubo/corrected/reports/cmd/api/client/kafka/producer/models/SecurityTitleInDto.java

```java
package com.nubo.corrected.reports.cmd.api.client.kafka.producer.models;

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
public class SecurityTitleInDto {

    private String isin;

    private String mnemonic;

    private String classDescription;


}

```

## src/main/java/com/nubo/corrected/reports/cmd/api/client/kafka/producer/service/KafkaNuboAdapter.java

```java
package com.nubo.corrected.reports.cmd.api.client.kafka.producer.service;

import java.util.concurrent.CompletableFuture;

import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.SendResult;
import org.springframework.stereotype.Component;

import com.nubo.corrected.reports.cmd.api.application.properties.PropertiesConfig;
import com.nubo.corrected.reports.cmd.api.application.util.ApplicationUtils;
import com.nubo.corrected.reports.cmd.api.client.kafka.producer.models.ReportFileInDto;
import com.nubo.corrected.reports.cmd.api.exception.ServiceException;
import com.nubo.corrected.reports.cmd.api.exception.error.ErrorCode;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Component
@RequiredArgsConstructor
@Slf4j
public class KafkaNuboAdapter {

    private final PropertiesConfig propertiesConfig;
    private final KafkaTemplate<String, String> kafkaNuboTemplate;

    public void sendMessageOperationCorrectedReports(ReportFileInDto reportFileInDto) {
        log.debug("Start method sendMessage, reportFileInDto -> {}", reportFileInDto);

        String topic = propertiesConfig.getKafkaNuboProducerTopicNameOperationCorrectedReports();
        String jsonString = ApplicationUtils.convertObjectToJson(reportFileInDto);

        CompletableFuture<SendResult<String, String>> future = kafkaNuboTemplate.send(topic, jsonString)
                .toCompletableFuture();

        future.thenAccept(result -> log.info(
                "Send message Kafka -- Topic: {} -- offset: {} -- json: {} ",
                topic, result.getRecordMetadata().offset(), jsonString))
                .exceptionally(ex -> {
                    throw new ServiceException(ErrorCode.ERROR_KAFKA_PRODUCER_NUBO, ex);
                });
    }
}

```

## src/main/java/com/nubo/corrected/reports/cmd/api/exception/ServiceException.java

```java
package com.nubo.corrected.reports.cmd.api.exception;


import lombok.Getter;
import org.springframework.http.HttpStatus;

import com.nubo.corrected.reports.cmd.api.exception.error.ErrorCode;

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

## src/main/java/com/nubo/corrected/reports/cmd/api/exception/error/ErrorCode.java

```java
package com.nubo.corrected.reports.cmd.api.exception.error;


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
    ERROR_DESERIALIZER_JSON("Error Deserializer Json"),
    TRADE_VALIDATION_FAILED("Trade validation failed"),
    ERROR_KAFKA_PRODUCER_NUBO("Error Producer Kafka Nubo"),
    STATUS_NOT_FOUND("Status not found in database"),
    TRADE_NOT_FOUND("Trade not found"),
    VERSION_API_NOT_FOUND("Version API not found"),
    USER_NOT_FOUND("User not found"),
    PARTICIPANT_NOT_FOUND("Participant not found"),
    TARIFF_NOT_FOUND("Tariff is required for external users"),
    PARTICIPANT_REQUIRED("Participant is required for external users"),
    TYPE_NOT_FOUND("Type not found");


    private final String message;

    ErrorCode(String message) {
        this.message = message;
    }

    public String getName() {
        return this.name();
    }

}

```

## src/main/java/com/nubo/corrected/reports/cmd/api/exception/error/ErrorResponse.java

```java
package com.nubo.corrected.reports.cmd.api.exception.error;

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

## src/main/java/com/nubo/corrected/reports/cmd/api/exception/error/ErrorValidation.java

```java
package com.nubo.corrected.reports.cmd.api.exception.error;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ErrorValidation {

    private String id;
    private String description;

}

```

## src/main/java/com/nubo/corrected/reports/cmd/api/exception/handler/GlobalExceptionHandler.java

```java
package com.nubo.corrected.reports.cmd.api.exception.handler;

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

import com.nubo.corrected.reports.cmd.api.application.properties.PropertiesContext;
import com.nubo.corrected.reports.cmd.api.exception.ServiceException;
import com.nubo.corrected.reports.cmd.api.exception.error.ErrorCode;
import com.nubo.corrected.reports.cmd.api.exception.error.ErrorResponse;
import com.nubo.corrected.reports.cmd.api.exception.error.ErrorValidation;

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

## src/main/java/com/nubo/corrected/reports/cmd/api/helpers/MapperUtil.java

```java
package com.nubo.corrected.reports.cmd.api.helpers;

import com.nubo.corrected.reports.cmd.api.models.enums.TypeAccountEnum;
import org.apache.commons.lang3.ObjectUtils;

import com.nubo.corrected.reports.cmd.api.client.kafka.producer.models.InvestorInDto;
import com.nubo.corrected.reports.cmd.api.client.kafka.producer.models.ParticipantInDto;
import com.nubo.corrected.reports.cmd.api.client.kafka.producer.models.ReportFileFractionInDto;
import com.nubo.corrected.reports.cmd.api.client.kafka.producer.models.ReportFileOperationInDto;
import com.nubo.corrected.reports.cmd.api.client.kafka.producer.models.SecurityTitleInDto;
import com.nubo.corrected.reports.cmd.api.models.dto.response.CorrectedReportsOutDto;
import com.nubo.corrected.reports.cmd.api.models.dto.response.CountryOutDto;
import com.nubo.corrected.reports.cmd.api.models.dto.response.ParticipantOutDto;
import com.nubo.corrected.reports.cmd.api.models.dto.response.StatusOutDto;
import com.nubo.corrected.reports.cmd.api.models.entity.CountryEntity;
import com.nubo.corrected.reports.cmd.api.models.entity.FileGenerateEntity;
import com.nubo.corrected.reports.cmd.api.models.entity.InvestorEntity;
import com.nubo.corrected.reports.cmd.api.models.entity.ParticipantEntity;
import com.nubo.corrected.reports.cmd.api.models.entity.SecurityTitleEntity;
import com.nubo.corrected.reports.cmd.api.models.entity.SettlementEntity;
import com.nubo.corrected.reports.cmd.api.models.entity.StatusEntity;
import com.nubo.corrected.reports.cmd.api.models.entity.TradeEntity;

import java.math.BigDecimal;

public final class MapperUtil {

    private MapperUtil() {
    }

    public static ReportFileOperationInDto tradeEntityToReportFileOperationInDto(
            TradeEntity tradeEntity, BigDecimal tariff) {
        if (ObjectUtils.isEmpty(tradeEntity))
            return null;

        return ReportFileOperationInDto.builder()
                .matchDate(tradeEntity.getMatchDate())
                .matchId(tradeEntity.getMatchId())
                .clearingDate(tradeEntity.getClearingDate())
                .correctionValue(tariff)
                .depositDescription(ObjectUtils.isEmpty(tradeEntity.getDepository()) ? null
                        : tradeEntity.getDepository().getDescription())
                .countryName(ObjectUtils.isEmpty(tradeEntity.getCountry()) ? null
                        : tradeEntity.getCountry().getName())
                .typeDescription(ObjectUtils.isEmpty(tradeEntity.getType()) ? null
                        : tradeEntity.getType().getDescription())
                .securityTitle(securityTitleEntityToSecurityTitleInDto(tradeEntity.getSecurityTitle()))
                .participantBuy(participantEntityToParticipantInDto(tradeEntity.getParticipantBuy()))
                .participantSell(participantEntityToParticipantInDto(tradeEntity.getParticipantSell()))
                .custodianBuy(participantEntityToParticipantInDto(tradeEntity.getCustodianBuy()))
                .custodianSell(participantEntityToParticipantInDto(tradeEntity.getCustodianSell()))
                .assignmentMarkBuy(tradeEntity.getAssignmentMarkBuy())
                .assignmentMarkSell(tradeEntity.getAssignmentMarkSell())
                .fractionalMarkBuy(tradeEntity.getFractionalMarkBuy())
                .fractionalMarkSell(tradeEntity.getFractionalMarkSell())
                .canceledStatus(tradeEntity.getCanceledStatus())
                .statusName(ObjectUtils.isEmpty(tradeEntity.getStatus()) ? null
                        : tradeEntity.getStatus().getDescription())
                .tradingSystemDescription(ObjectUtils.isEmpty(tradeEntity.getTradingSystem()) ? null
                        : tradeEntity.getTradingSystem().getDescription())
                .tradingSessionDescription(ObjectUtils.isEmpty(tradeEntity.getTradingSession()) ? null
                        : tradeEntity.getTradingSession().getDescription())
                .marketTypeDescription(ObjectUtils.isEmpty(tradeEntity.getMarketType()) ? null
                        : tradeEntity.getMarketType().getDescription())
                .quantity(tradeEntity.getQuantity())
                .price(tradeEntity.getPrice())
                .volume(tradeEntity.getVolume())
                .currencyCode(ObjectUtils.isEmpty(tradeEntity.getCurrency()) ? null
                        : tradeEntity.getCurrency().getCode())
                .reallocationIndicator(tradeEntity.getReallocationIndicator())
                .foreignBrokerBuy(ObjectUtils.isEmpty(tradeEntity.getTradeEquityEntity()) ? null
                        : tradeEntity.getTradeEquityEntity().getForeignBrokerBuy())
                .foreignBrokerSell(ObjectUtils.isEmpty(tradeEntity.getTradeEquityEntity()) ? null
                        : tradeEntity.getTradeEquityEntity().getForeignBrokerSell())
                .responsibleTradeBuy(ObjectUtils.isEmpty(tradeEntity.getTradeEquityEntity()) ? null
                        : tradeEntity.getTradeEquityEntity().getResponsibleTradeBuy())
                .responsibleTradeSell(ObjectUtils.isEmpty(tradeEntity.getTradeEquityEntity()) ? null
                        : tradeEntity.getTradeEquityEntity().getResponsibleTradeSell())
                .directDepositorBuy(ObjectUtils.isEmpty(tradeEntity.getTradeEquityEntity()) ? null
                        : tradeEntity.getTradeEquityEntity().getDirectDepositorBuy())
                .directDepositorSell(ObjectUtils.isEmpty(tradeEntity.getTradeEquityEntity()) ? null
                        : tradeEntity.getTradeEquityEntity().getDirectDepositorSell())
                .referenceBuy(ObjectUtils.isEmpty(tradeEntity.getTradeEquityEntity()) ? null
                        : tradeEntity.getTradeEquityEntity().getReferenceBuy())
                .referenceSell(ObjectUtils.isEmpty(tradeEntity.getTradeEquityEntity()) ? null
                        : tradeEntity.getTradeEquityEntity().getReferenceSell())
                .sourceQuoteBuyTypeDescription(ObjectUtils.isEmpty(tradeEntity.getSourceQuoteBuyType()) ? null
                        : tradeEntity.getSourceQuoteBuyType().getDescription())
                .sourceQuoteSellTypeDescription(ObjectUtils.isEmpty(tradeEntity.getSourceQuoteSellType()) ? null
                        : tradeEntity.getSourceQuoteSellType().getDescription())
                .fractions(ObjectUtils.isEmpty(tradeEntity.getSettlementEntityList()) ? null
                        : tradeEntity.getSettlementEntityList().stream()
                                .map(MapperUtil::settlementEntityToReportFileFractionInDto)
                                .toList())
                .build();
    }

    public static ParticipantInDto participantEntityToParticipantInDto(ParticipantEntity participantEntity) {
        if (ObjectUtils.isEmpty(participantEntity))
            return null;

        return ParticipantInDto.builder()
                .id(participantEntity.getId())
                .code(participantEntity.getCode())
                .name(participantEntity.getName())
                .shortName(participantEntity.getShortName())
                .build();
    }

    public static ReportFileFractionInDto settlementEntityToReportFileFractionInDto(SettlementEntity settlementEntity) {
        if (ObjectUtils.isEmpty(settlementEntity))
            return null;

        return ReportFileFractionInDto.builder()
                .fraction(settlementEntity.getFraction())
                .sideDescription(ObjectUtils.isEmpty(settlementEntity.getSide()) ? null
                        : settlementEntity.getSide().getDescription())
                .investorAccountNumber(ObjectUtils.isEmpty(settlementEntity.getInvestorAccount()) ? null
                        : settlementEntity.getInvestorAccount().getAccountNumber())
                .investorInitial(null)
                .investorFinal(investorEntityToInvestorInDto(settlementEntity
                        .getInvestor()))
                .newMasterAccountIndicator(validateMasterAccountIndicator(settlementEntity))
                .commissionPercentage(settlementEntity.getCommissionPercentage())
                .commissionAmount(settlementEntity.getCommissionAmount())
                .valTaxAmount(settlementEntity.getValTaxAmount())
                .netAmount(settlementEntity.getNetAmount())
                .transferValue(settlementEntity.getTransferValue())
                .correctionDate(ObjectUtils.isEmpty(settlementEntity.getSettlementInstructions()) ? null
                        : settlementEntity.getSettlementInstructions().getReferenceTransactionDate())
                .build();
    }

    public static SecurityTitleInDto securityTitleEntityToSecurityTitleInDto(SecurityTitleEntity securityTitleEntity) {
        if (ObjectUtils.isEmpty(securityTitleEntity))
            return null;

        return SecurityTitleInDto.builder()
                .isin(securityTitleEntity.getIsin())
                .mnemonic(securityTitleEntity.getMnemonic())
                .classDescription(ObjectUtils.isEmpty(securityTitleEntity.getClazz()) ? null
                        : securityTitleEntity.getClazz().getDescription())
                .build();
    }

    public static InvestorInDto investorEntityToInvestorInDto(InvestorEntity investorEntity) {
        if (ObjectUtils.isEmpty(investorEntity))
            return null;

        return InvestorInDto.builder()
                .id(investorEntity.getId())
                .code(investorEntity.getCode())
                .documentType(ObjectUtils.isEmpty(investorEntity.getIdentificationType()) ? null
                        : investorEntity.getIdentificationType().getDescription())
                .documentNumber(investorEntity.getDocumentNumber())
                .name((investorEntity.getFirstName() + " " + investorEntity.getLastName()).trim())
                .build();
    }

    public static CorrectedReportsOutDto fileGenerateEntityToCorrectedReportsOutDto(
            FileGenerateEntity fileGenerateEntity) {
        if (ObjectUtils.isEmpty(fileGenerateEntity))
            return null;

        return CorrectedReportsOutDto.builder()
                .fileGenerateId(fileGenerateEntity.getId())
                .fileName(fileGenerateEntity.getFileName())
                .generationStatus(statusEntityToStatusOutDto(fileGenerateEntity.getGenerationStatus()))
                .generatedBy(fileGenerateEntity.getGeneratedBy())
                .generatedAt(ObjectUtils.isEmpty(fileGenerateEntity.getGeneratedAt()) ? null
                        : fileGenerateEntity.getGeneratedAt().toString())
                .participant(participantEntityToParticipantOutDto(fileGenerateEntity.getParticipant()))
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

    public static ParticipantOutDto participantEntityToParticipantOutDto(ParticipantEntity participantEntity) {
        if (ObjectUtils.isEmpty(participantEntity))
            return null;

        return ParticipantOutDto.builder()
                .id(participantEntity.getId())
                .code(participantEntity.getCode())
                .documentNumber(participantEntity.getDocumentNumber())
                .name(participantEntity.getName())
                .shortName(participantEntity.getShortName())
                .country(countryEntityToCountryOutDto(participantEntity.getCountry()))
                .build();
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


    public static String validateMasterAccountIndicator(SettlementEntity settlement){
        Long typeId = null;

        if (settlement.getInvestorAccount() != null
                && settlement.getInvestorAccount().getType() != null) {

            typeId = settlement.getInvestorAccount().getType().getId();

        } else if (settlement.getParticipantAccount() != null
                && settlement.getParticipantAccount().getType() != null) {

            typeId = settlement.getParticipantAccount().getType().getId();
        }

        return TypeAccountEnum.PRINCIPAL.getId().equals(typeId) ? "SI" : "NO";

    }

}

```

## src/main/java/com/nubo/corrected/reports/cmd/api/helpers/TradeSearchCriteria.java

```java
package com.nubo.corrected.reports.cmd.api.helpers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.jpa.domain.Specification;
import org.springframework.util.ObjectUtils;

import com.nubo.corrected.reports.cmd.api.models.dto.request.CorrectedReportsInDto;
import com.nubo.corrected.reports.cmd.api.models.entity.TradeEntity;
import com.nubo.corrected.reports.cmd.api.models.enums.StatusEnum;

import jakarta.persistence.criteria.Predicate;

public final class TradeSearchCriteria {

    public static Specification<TradeEntity> createSpecification(CorrectedReportsInDto correctedReportsInDto) {
        return (root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();

            predicates.add(criteriaBuilder.isNull(
                    root.get("specialTradeId")));

            if (!ObjectUtils.isEmpty(correctedReportsInDto.getStartDate())) {
                predicates.add(criteriaBuilder.greaterThanOrEqualTo(
                        root.get("matchDate"), correctedReportsInDto.getStartDate()));
            }
            if (!ObjectUtils.isEmpty(correctedReportsInDto.getEndDate())) {
                predicates.add(criteriaBuilder.lessThan(
                        root.get("matchDate"), correctedReportsInDto.getEndDate()));
            }
            if (!ObjectUtils.isEmpty(correctedReportsInDto.getParticipantId())) {
                Predicate participantSellPredicate = criteriaBuilder.equal(
                        root.get("participantSell").get("id"),
                        correctedReportsInDto.getParticipantId());
                Predicate participantBuyPredicate = criteriaBuilder.equal(
                        root.get("participantBuy").get("id"),
                        correctedReportsInDto.getParticipantId());

                predicates.add(criteriaBuilder.or(participantSellPredicate, participantBuyPredicate));
            }
            if (!ObjectUtils.isEmpty(correctedReportsInDto.getStatusEnum())) {
                predicates.add(criteriaBuilder.equal(
                        root.get("status").get("id"),
                        correctedReportsInDto.getStatusEnum().getId()));
            } else {
                var statusAccepted = criteriaBuilder.equal(
                        root.get("status").get("id"),
                        StatusEnum.CORRECTION_ACCEPTED.getId());
                var statusRejected = criteriaBuilder.equal(
                        root.get("status").get("id"),
                        StatusEnum.CORRECTION_REJECTED.getId());
                predicates.add(criteriaBuilder.or(statusAccepted, statusRejected));
            }

            return predicates.isEmpty()
                    ? criteriaBuilder.conjunction()
                    : criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }
}

```

## src/main/java/com/nubo/corrected/reports/cmd/api/models/dto/request/CorrectedReportsInDto.java

```java
package com.nubo.corrected.reports.cmd.api.models.dto.request;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.nubo.corrected.reports.cmd.api.models.enums.StatusEnum;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CorrectedReportsInDto {

    @NotNull
    private LocalDate startDate;

    @NotNull
    private LocalDate endDate;

    private Long participantId;

    @JsonProperty("statusId")
    private StatusEnum statusEnum;
}

```

## src/main/java/com/nubo/corrected/reports/cmd/api/models/dto/response/CorrectedReportsOutDto.java

```java
package com.nubo.corrected.reports.cmd.api.models.dto.response;

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
public class CorrectedReportsOutDto {

    private long fileGenerateId;

    private String fileName;

    private StatusOutDto generationStatus;

    private String generatedBy;

    private String generatedAt;

    private ParticipantOutDto participant;

}

```

## src/main/java/com/nubo/corrected/reports/cmd/api/models/dto/response/CorrectedReportsSizeOutDto.java

```java
package com.nubo.corrected.reports.cmd.api.models.dto.response;

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
public class CorrectedReportsSizeOutDto {

    private Integer totalElements;

}

```

## src/main/java/com/nubo/corrected/reports/cmd/api/models/dto/response/CountryOutDto.java

```java
package com.nubo.corrected.reports.cmd.api.models.dto.response;

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

## src/main/java/com/nubo/corrected/reports/cmd/api/models/dto/response/ParticipantOutDto.java

```java
package com.nubo.corrected.reports.cmd.api.models.dto.response;

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
public class ParticipantOutDto {

    private Long id;

    private String code;

    private String documentNumber;

    private String name;

    private String shortName;

    private CountryOutDto country;


}

```

## src/main/java/com/nubo/corrected/reports/cmd/api/models/dto/response/StatusOutDto.java

```java
package com.nubo.corrected.reports.cmd.api.models.dto.response;

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

    private String shortName;

    private String detail;

}

```

## src/main/java/com/nubo/corrected/reports/cmd/api/models/entity/CfiEntity.java

```java
package com.nubo.corrected.reports.cmd.api.models.entity;

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

## src/main/java/com/nubo/corrected/reports/cmd/api/models/entity/CityEntity.java

```java
package com.nubo.corrected.reports.cmd.api.models.entity;

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

## src/main/java/com/nubo/corrected/reports/cmd/api/models/entity/ClassEntity.java

```java
package com.nubo.corrected.reports.cmd.api.models.entity;

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
@Table(name = "\"CLASS\"", schema = "\"NUANBODB\"")
public class ClassEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"CLASS_ID\"", length = 2, nullable = false)
    private String id;

    @Column(name = "\"DESCRIPTION\"")
    private String description;

    @Column(name = "\"CATEGORY\"")
    private String category;

}

```

## src/main/java/com/nubo/corrected/reports/cmd/api/models/entity/CountryEntity.java

```java
package com.nubo.corrected.reports.cmd.api.models.entity;

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

## src/main/java/com/nubo/corrected/reports/cmd/api/models/entity/CurrencyEntity.java

```java
package com.nubo.corrected.reports.cmd.api.models.entity;

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

## src/main/java/com/nubo/corrected/reports/cmd/api/models/entity/DepartmentEntity.java

```java
package com.nubo.corrected.reports.cmd.api.models.entity;

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

## src/main/java/com/nubo/corrected/reports/cmd/api/models/entity/DepositoryEntity.java

```java
package com.nubo.corrected.reports.cmd.api.models.entity;

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

## src/main/java/com/nubo/corrected/reports/cmd/api/models/entity/FileGenerateEntity.java

```java
package com.nubo.corrected.reports.cmd.api.models.entity;

import java.time.LocalDate;
import java.time.LocalDateTime;

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
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "\"FILE_GENERATION\"", schema = "\"NUANBODB\"")
public class FileGenerateEntity {

    @Id
    @Column(name = "\"FILE_GENERATION_ID\"")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "\"FILE_NAME\"", nullable = false, length = 255)
    private String fileName;

    @Column(name = "\"FILE_TYPE\"", nullable = false, length = 50)
    private String fileType;

    @Column(name = "\"FILE_PATH\"", nullable = false, length = 512)
    private String filePath;

    @Column(name = "\"GENERATED_AT\"", nullable = false)
    private LocalDateTime generatedAt;

    @Column(name = "\"GENERATED_BY\"", nullable = false, length = 100)
    private String generatedBy;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "\"PARTICIPANT_ID\"")
    private ParticipantEntity participant;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "\"GENERATION_STATUS_ID\"", nullable = false)
    private StatusEntity generationStatus;

    @Column(name = "\"RECORD_DATE\"", nullable = false)
    private LocalDate recordDate;

    @Column(name = "\"FILE_CONSECUTIVE\"", length = 100)
    private Long fileConsecutive;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 100)
    private String lastModifyUser;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "\"OPERATION_STATUS_ID\"", nullable = false)
    private StatusEntity operationStatus;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "\"TYPE_ID\"")
    private TypeEntity type;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 100)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"")
    private LocalDateTime lastModifyDateTime;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50)
    private String lastModifyIp;

}

```

## src/main/java/com/nubo/corrected/reports/cmd/api/models/entity/GicsEntity.java

```java
package com.nubo.corrected.reports.cmd.api.models.entity;

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

## src/main/java/com/nubo/corrected/reports/cmd/api/models/entity/IdentificationTypeEntity.java

```java
package com.nubo.corrected.reports.cmd.api.models.entity;

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

## src/main/java/com/nubo/corrected/reports/cmd/api/models/entity/InvestorAccountEntity.java

```java
package com.nubo.corrected.reports.cmd.api.models.entity;

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
    @JoinColumn(name = "\"STATUS_ID\"")
    private StatusEntity status;

    @ManyToOne
    @JoinColumn(name = "\"ORIGIN_TYPE_ID\"")
    private TypeEntity originType;

    @ManyToOne
    @JoinColumn(name = "\"TYPE_ID\"")
    private TypeEntity type;

    @ManyToOne
    @JoinColumn(name = "\"DEPOSITORY_ID\"")
    private DepositoryEntity depository;

    @ManyToOne
    @JoinColumn(name = "\"PARTICIPANT_ID\"")
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

## src/main/java/com/nubo/corrected/reports/cmd/api/models/entity/InvestorEntity.java

```java
package com.nubo.corrected.reports.cmd.api.models.entity;

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

## src/main/java/com/nubo/corrected/reports/cmd/api/models/entity/IssuerEntity.java

```java
package com.nubo.corrected.reports.cmd.api.models.entity;

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
@Table(name = "\"ISSUER\"", schema = "\"NUANBODB\"")
public class IssuerEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"ISSUER_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"CODE\"")
    private String code;

    @Column(name = "\"NAME\"")
    private String name;

    @Column(name = "\"SHORT_NAME\"")
    private String shortName;

}

```

## src/main/java/com/nubo/corrected/reports/cmd/api/models/entity/MarketEntity.java

```java
package com.nubo.corrected.reports.cmd.api.models.entity;

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

    @Column(name = "\"CATEGORY\"", length = 50)
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

## src/main/java/com/nubo/corrected/reports/cmd/api/models/entity/ParticipantAccountEntity.java

```java
package com.nubo.corrected.reports.cmd.api.models.entity;

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

    @Column(name = "\"ACCOUNT_NUMBER\"")
    private String accountNumber;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"")
    private StatusEntity status;

    @ManyToOne
    @JoinColumn(name = "\"TYPE_ID\"")
    private TypeEntity type;

    @ManyToOne
    @JoinColumn(name = "\"ORIGIN_TYPE_ID\"", nullable = false)
    private TypeEntity originType;

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

## src/main/java/com/nubo/corrected/reports/cmd/api/models/entity/ParticipantEntity.java

```java
package com.nubo.corrected.reports.cmd.api.models.entity;

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
    @JoinColumn(name = "\"IDENTIFICATION_TYPE_ID\"", nullable = false)
    private IdentificationTypeEntity identificationType;

    @Column(name = "\"NAME\"", length = 100)
    private String name;

    @Column(name = "\"SHORT_NAME\"", length = 50)
    private String shortName;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"", nullable = false)
    private StatusEntity status;

    @ManyToOne
    @JoinColumn(name = "\"COUNTRY_ID\"", nullable = false)
    private CountryEntity country;

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

## src/main/java/com/nubo/corrected/reports/cmd/api/models/entity/SecurityTitleEntity.java

```java
package com.nubo.corrected.reports.cmd.api.models.entity;

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
    @JoinColumn(name= "\"ISSUER_ID\"")
    private IssuerEntity issuer;

    @Column(name = "\"COUNTRY_ID\"", nullable = false)
    private Integer countryId;

    @Column(name = "\"AMOUNT_ISSUED\"", precision = 20, nullable = false)
    private BigInteger amountIssued;

    @ManyToOne
    @JoinColumn(name = "\"CLASS_ID\"")
    private ClassEntity clazz;

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

## src/main/java/com/nubo/corrected/reports/cmd/api/models/entity/SettlementEntity.java

```java
package com.nubo.corrected.reports.cmd.api.models.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@Builder(toBuilder = true)
@NoArgsConstructor
@AllArgsConstructor
@Entity
@IdClass(SettlementKey.class)
@Table(name = "\"SETTLEMENT\"", schema = "\"NUANBODB\"")
public class SettlementEntity {

    @Id
    @Column(name = "\"TRADE_ID\"", nullable = false)
    private Long tradeId;

    @Id
    @Column(name = "\"FRACTION\"", nullable = false)
    private Integer fraction;

    @Id
    @ManyToOne
    @JoinColumn(name = "\"SIDE_ID\"", nullable = false)
    private SideEntity side;

    @ManyToOne
    @JoinColumn(name = "\"INVESTOR_ID\"")
    private InvestorEntity investor;

    @ManyToOne
    @JoinColumn(name = "\"INVESTOR_ACCOUNT_ID\"")
    private InvestorAccountEntity investorAccount;

    @ManyToOne
    @JoinColumn(name = "\"PARTICIPANT_ACCOUNT_ID\"")
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

    @Column(name = "\"BANK_ACCOUNT_ID\"")
    private Long bankAccountId;

    @Column(name = "\"REFERENCE\"")
    private String reference;

    @Column(name = "\"CAPITAL_GAIN_VALUE\"", precision = 16, scale = 4)
    private BigDecimal capitalGainValue;

    @Column(name = "\"DISBURSEMENT_VALUE\"", precision = 18, scale = 2)
    private BigDecimal disbursementValue;

    @ManyToOne
    @JoinColumn(name = "\"SOURCE_QUOTE_TYPE_ID\"")
    private TypeEntity sourceQuoteType;

    @Column(name = "\"FIC_ADMINISTRATOR_ID\"")
    private Long ficAdministratorId;

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

    @OneToOne(fetch = FetchType.LAZY, optional = true)
    @JoinColumns({
            @JoinColumn(name = "\"TRADE_ID\"", referencedColumnName = "\"TRADE_ID\"", insertable = false, updatable = false),
            @JoinColumn(name = "\"FRACTION\"", referencedColumnName = "\"FRACTION\"", insertable = false, updatable = false)
    })
    private SettlementInstructionsEntity settlementInstructions;

}

```

## src/main/java/com/nubo/corrected/reports/cmd/api/models/entity/SettlementInstructionsEntity.java

```java
package com.nubo.corrected.reports.cmd.api.models.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "\"SETTLEMENT_INSTRUCTIONS\"", schema = "\"NUANBODB\"")
public class SettlementInstructionsEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"SETTLEMENT_INSTRUCTIONS_ID\"")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"TRADE_ID\"", nullable = false)
    private TradeEntity trade;

    @Column(name = "\"FRACTION\"")
    private Integer fraction;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"PARTICIPANT_SELL_ID\"", nullable = false)
    private ParticipantEntity participantSell;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"CUSTODIAN_SELL_ID\"")
    private ParticipantEntity custodianSell;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"INVESTOR_SELL_ID\"")
    private InvestorEntity investorSell;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"INVESTOR_ACCOUNT_SELL_ID\"")
    private InvestorAccountEntity investorAccountSell;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"PARTICIPANT_BUY_ID\"", nullable = false)
    private ParticipantEntity participantBuy;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"CUSTODIAN_BUY_ID\"")
    private ParticipantEntity custodianBuy;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"INVESTOR_BUY_ID\"")
    private InvestorEntity investorBuy;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"INVESTOR_ACCOUNT_BUY_ID\"")
    private InvestorAccountEntity investorAccountBuy;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"COUNTRY_ID\"", nullable = false)
    private CountryEntity country;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"CURRENCY_ID\"", nullable = false)
    private CurrencyEntity currency;

    @Column(name = "\"QUANTITY\"", precision = 16, scale = 4)
    private BigDecimal quantity;

    @Column(name = "\"AMOUNT\"", precision = 16, scale = 4)
    private BigDecimal amount;

    @Column(name = "\"REFERENCE_TRANSACTION_DATE\"")
    private LocalDate referenceTransactionDate;

    @Column(name = "\"REFERENCE_TRANSACTION_NUMBER\"", length = 30)
    private String referenceTransactionNumber;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"STATUS_ID\"")
    private StatusEntity status;

}

```

## src/main/java/com/nubo/corrected/reports/cmd/api/models/entity/SettlementKey.java

```java
package com.nubo.corrected.reports.cmd.api.models.entity;

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

    private Long tradeId;

    private Integer fraction;

    private String side;

}

```

## src/main/java/com/nubo/corrected/reports/cmd/api/models/entity/SideEntity.java

```java
package com.nubo.corrected.reports.cmd.api.models.entity;

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

## src/main/java/com/nubo/corrected/reports/cmd/api/models/entity/StatusEntity.java

```java
package com.nubo.corrected.reports.cmd.api.models.entity;

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

    @Column(name = "\"SHORTNAME\"")
    private String shortName;

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

## src/main/java/com/nubo/corrected/reports/cmd/api/models/entity/TariffDetailEntity.java

```java
package com.nubo.corrected.reports.cmd.api.models.entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.OffsetDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "\"TARIFF_DETAIL\"", schema = "\"NUANBODB\"")
public class TariffDetailEntity {

    @EmbeddedId
    private TariffDetailId id;

    @MapsId("tariffId")
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"TARIFF_ID\"", nullable = false)
    private TariffEntity tariff;

    @Column(name = "\"VALID_FROM\"")
    private LocalDate validFrom;

    @Column(name = "\"VALID_TO\"")
    private LocalDate validTo;

    @Column(name = "\"UNIT_PRICE\"", precision = 16, scale = 4)
    private BigDecimal unitPrice;

    @Column(name = "\"LAST_MODIFY_USER\"", nullable = false, length = 250)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", nullable = false, length = 250)
    private String lastModifyApplic;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private OffsetDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", nullable = false, length = 50)
    private String lastModifyIp;
}

```

## src/main/java/com/nubo/corrected/reports/cmd/api/models/entity/TariffDetailId.java

```java
package com.nubo.corrected.reports.cmd.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.*;

import java.io.Serializable;
@Embeddable
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TariffDetailId implements Serializable {

    @Column(name = "\"TARIFF_DETAIL_ID\"")
    private Long tariffDetailId;

    @Column(name = "\"TARIFF_ID\"")
    private Long tariffId;

    @Column(name = "\"EVENT_TYPE_ID\"")
    private Long eventTypeId;
}
```

## src/main/java/com/nubo/corrected/reports/cmd/api/models/entity/TariffEntity.java

```java
package com.nubo.corrected.reports.cmd.api.models.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.OffsetDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "\"TARIFF\"", schema = "\"NUANBODB\"")
public class TariffEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"TARIFF_ID\"")
    private Long id;

    @Column(name = "\"NAME\"", length = 80)
    private String name;

    @Column(name = "\"DESCRIPTION\"", length = 255)
    private String description;

    @Column(name = "\"STATUS\"")
    private Boolean status;

    @Column(name = "\"LAST_MODIFY_USER\"", nullable = false, length = 250)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", nullable = false, length = 250)
    private String lastModifyApplic;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private OffsetDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", nullable = false, length = 50)
    private String lastModifyIp;

}

```

## src/main/java/com/nubo/corrected/reports/cmd/api/models/entity/TaxStatusEntity.java

```java
package com.nubo.corrected.reports.cmd.api.models.entity;

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

## src/main/java/com/nubo/corrected/reports/cmd/api/models/entity/TaxesEntity.java

```java
package com.nubo.corrected.reports.cmd.api.models.entity;

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
import java.time.LocalDateTime;

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

    @Column(name = "\"CODE\"", length = 50, nullable = false)
    private String code;

    @Column(name = "\"DESCRIPTION\"", length = 250, nullable = false)
    private String description;

    @Column(name = "\"VALUE\"", precision = 16, scale = 4, nullable = false)
    private BigDecimal value;

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

## src/main/java/com/nubo/corrected/reports/cmd/api/models/entity/TradeEntity.java

```java
package com.nubo.corrected.reports.cmd.api.models.entity;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
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
    @JoinColumn(name = "\"COUNTRY_ID\"", nullable = false)
    private CountryEntity country;

    @ManyToOne
    @JoinColumn(name = "\"TYPE_ID\"", nullable = false)
    private TypeEntity type;

    @ManyToOne
    @JoinColumn(name = "\"MARKET_ID\"", nullable = false)
    private MarketEntity market;

    @ManyToOne
    @JoinColumn(name = "\"ISSUANCE_MARKET_ID\"")
    private MarketEntity issuanceMarket;

    @ManyToOne
    @JoinColumn(name = "\"SECURITY_ID\"")
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

    @Column(name = "\"ASSIGNMENT_MARK_BUY\"")
    private Boolean assignmentMarkBuy;

    @Column(name = "\"ASSIGNMENT_MARK_SELL\"")
    private Boolean assignmentMarkSell;

    @Column(name = "\"FRACTIONAL_MARK_BUY\"")
    private Boolean fractionalMarkBuy;

    @Column(name = "\"FRACTIONAL_MARK_SELL\"")
    private Boolean fractionalMarkSell;

    @Column(name = "\"ADVANCE_STATUS\"")
    private Integer advanceStatus;

    @Column(name = "\"EXIT_INDICATOR_SETTLEMENT\"")
    private Boolean exitIndicatorSettlement;

    @Column(name = "\"CANCELED_STATUS\"")
    private Boolean canceledStatus;

    @Column(name = "\"QUANTITY\"", precision = 16, scale = 4)
    private BigDecimal quantity;

    @Column(name = "\"PRICE\"", precision = 16, scale = 6)
    private BigDecimal price;

    @Column(name = "\"VOLUME\"", precision = 16, scale = 4)
    private BigDecimal volume;

    @Column(name = "\"REPURCHASE_RATE\"", precision = 6, scale = 4)
    private BigDecimal repurchaseRate;

    @Column(name = "\"REPURCHASE_AMOUNT\"", precision = 16, scale = 4)
    private BigDecimal repurchaseAmount;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"")
    private StatusEntity status;

    @Column(name = "\"MATCH_TIME\"")
    private LocalDateTime matchTime;

    @Column(name = "\"OWN_POSITION_SELL\"")
    private Boolean ownPositionSell;

    @Column(name = "\"OWN_POSITION_BUY\"")
    private Boolean ownPositionBuy;

    @ManyToOne
    @JoinColumn(name = "\"CURRENCY_ID\"")
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

    @Column(name = "\"SETTLEMENT_INDICATOR_OUTGOING\"")
    private Boolean settlementIndicatorOutgoing;

    @Column(name = "\"SETTLEMENT_INDICATOR_RETURN\"")
    private Boolean settlementIndicatorReturn;

    @Column(name = "\"RESETTLEMENT_INDICATOR_ADVANCE\"")
    private Boolean resettlementIndicatorAdvance;

    @Column(name = "\"SPECIAL_TRADE_ID\"")
    private Long specialTradeId;

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
    private Boolean salesGuarantee;

    @Column(name = "\"PURCHASE_GUARANTEE\"")
    private Boolean purchaseGuarantee;

    @Column(name = "\"PURCHASE_PAYMENT_INDICATOR\"")
    private Boolean purchasePaymentIndicator;

    @Column(name = "\"RETURN_INDICATOR_SETTLEMENT\"")
    private Boolean returnIndicatorSettlement;

    @ManyToOne
    @JoinColumn(name = "\"SOURCE_QUOTE_BUY_TYPE\"")
    private TypeEntity sourceQuoteBuyType;

    @ManyToOne
    @JoinColumn(name = "\"SOURCE_QUOTE_SELL_TYPE\"")
    private TypeEntity sourceQuoteSellType;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 250, nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50, nullable = false)
    private String lastModifyIp;

    @OneToMany
    @JoinColumn(name = "\"TRADE_ID\"")
    private List<SettlementEntity> settlementEntityList;

    @OneToOne
    @JoinColumn(name = "\"TRADE_ID\"", insertable = false, updatable = false)
    private TradeEquityEntity tradeEquityEntity;

}

```

## src/main/java/com/nubo/corrected/reports/cmd/api/models/entity/TradeEquityEntity.java

```java
package com.nubo.corrected.reports.cmd.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
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
@Table(name = "\"TRADE_EQUITY\"", schema = "\"NUANBODB\"")
public class TradeEquityEntity {

    @Id
    @Column(name = "\"TRADE_ID\"")
    private Long tradeId;

    @Column(name = "\"FOREIGN_BROKER_BUY\"", nullable = false)
    private Integer foreignBrokerBuy;

    @Column(name = "\"FOREIGN_BROKER_SELL\"", nullable = false)
    private Integer foreignBrokerSell;

    @Column(name = "\"DIRECT_DEPOSITOR_BUY\"", nullable = false)
    private Integer directDepositorBuy;

    @Column(name = "\"DIRECT_DEPOSITOR_SELL\"", nullable = false)
    private Integer directDepositorSell;

    @Column(name= "\"SOURCE_INDICATOR_BUY\"", nullable = false)
    private Integer sourceIndicatorBuy;

    @Column(name = "\"SOURCE_INDICATOR_SELL\"", nullable = false)
    private Integer sourceIndicatorSell;

    @Column(name = "\"RESPONSIBLE_TRADE_BUY\"", nullable = false)
    private Integer responsibleTradeBuy;

    @Column(name = "\"RESPONSIBLE_TRADE_SELL\"", nullable = false)
    private Integer responsibleTradeSell;

    @Column(name = "\"REFERENCE_BUY\"", length = 30, nullable = false)
    private String referenceBuy;

    @Column(name = "\"REFERENCE_SELL\"", length = 30, nullable = false)
    private String referenceSell;

    @Column(name = "\"ORDER_BOOK_ID\"", precision = 19)
    private BigDecimal orderBookId;

    @Column(name = "\"PREARRANGED_OPERATION\"")
    private Boolean prearrangedOperation;

    @Column(name= "\"AGGRESSIVE_TIP\"")
    private Integer aggressiveTip;

    @Column(name = "\"EXDIVIDEND_PERIOD\"")
    private Boolean exdividendPeriod;

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

## src/main/java/com/nubo/corrected/reports/cmd/api/models/entity/TradingSessionEntity.java

```java
package com.nubo.corrected.reports.cmd.api.models.entity;

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
@Table(name = "\"TRADING_SESSION\"", schema = "\"NUANBODB\"")
public class TradingSessionEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"TRADING_SESSION_ID\"", length = 2)
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

## src/main/java/com/nubo/corrected/reports/cmd/api/models/entity/TradingSystemEntity.java

```java
package com.nubo.corrected.reports.cmd.api.models.entity;

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
    @Column(name = "\"TRADING_SYSTEM_ID\"")
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

## src/main/java/com/nubo/corrected/reports/cmd/api/models/entity/TypeEntity.java

```java
package com.nubo.corrected.reports.cmd.api.models.entity;

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

## src/main/java/com/nubo/corrected/reports/cmd/api/models/entity/UserNuboEntity.java

```java
package com.nubo.corrected.reports.cmd.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

import com.nubo.corrected.reports.cmd.api.models.enums.UserTypeEnum;

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

    @Column(name = "\"PREVIOUS_SESSION\"", nullable = false)
    private Boolean previousSession;

    @Column(name = "\"USER_TYPE\"", length = 20, nullable = false)
    @Enumerated(EnumType.STRING)
    private UserTypeEnum userType;

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

## src/main/java/com/nubo/corrected/reports/cmd/api/models/enums/FileNameEnum.java

```java
package com.nubo.corrected.reports.cmd.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum FileNameEnum {

    EXTERNAL("RPT_CORRECCIONES_ENTIDAD_", "csv"),
    INTERNAL_WITH_PARTICIPANT("RPT_CORRECCIONES_ENTIDAD_", "csv"),
    INTERNAL_WITHOUT_PARTICIPANT("RPT_CORRECCIONES_", "csv");

    private final String prefix;
    private final String extension;

}

```

## src/main/java/com/nubo/corrected/reports/cmd/api/models/enums/PropertiesEnum.java

```java
package com.nubo.corrected.reports.cmd.api.models.enums;

import java.util.Arrays;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum PropertiesEnum {

    CLIENT_IP("client_ip"),
    CLIENT_USER("client_user"),
    CLIENT_DATETIME("client_datetime"),
    VERSION_API("version_api"),
    CLIENT_USER_ENTITY("client_user_entity");

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

## src/main/java/com/nubo/corrected/reports/cmd/api/models/enums/StatusEnum.java

```java
package com.nubo.corrected.reports.cmd.api.models.enums;

import java.util.Arrays;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum StatusEnum {

    CORRECTION_ACCEPTED(9L, "ASIGNACION"),
    CORRECTION_REJECTED(10L, "ASIGNACION");

    private final Long id;
    private final String category;

    @JsonValue
    public Long getValue() {
        return id;
    }

    @JsonCreator
    public static StatusEnum fromValue(Long value) {
        return Arrays.stream(StatusEnum.values())
                .filter(status -> status.id.equals(value))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Status not valid, [id: " + value + "]"));
    }

}

```

## src/main/java/com/nubo/corrected/reports/cmd/api/models/enums/StatusFileEnum.java

```java
package com.nubo.corrected.reports.cmd.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum StatusFileEnum {

    IN_PROCESS(900L);

    private final Long statusId;

}

```

## src/main/java/com/nubo/corrected/reports/cmd/api/models/enums/TypeAccountEnum.java

```java
package com.nubo.corrected.reports.cmd.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum TypeAccountEnum {

    PRINCIPAL(24L);

    private final Long id;
}

```

## src/main/java/com/nubo/corrected/reports/cmd/api/models/enums/TypeFileEnum.java

```java
package com.nubo.corrected.reports.cmd.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum TypeFileEnum {

    CORRECTED_REPORTS(163L);

    private final Long id;
}

```

## src/main/java/com/nubo/corrected/reports/cmd/api/models/enums/UserTypeEnum.java

```java
package com.nubo.corrected.reports.cmd.api.models.enums;

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
            return status != null ? status.getValue() : null;
        }

        @Override
        public UserTypeEnum convertToEntityAttribute(String dbData) {
            return dbData != null ? UserTypeEnum.fromValue(dbData) : null;
        }
    }

}

```

## src/main/java/com/nubo/corrected/reports/cmd/api/models/enums/VersionApiEnum.java

```java
package com.nubo.corrected.reports.cmd.api.models.enums;

import java.util.Arrays;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

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
}

```

## src/main/java/com/nubo/corrected/reports/cmd/api/repository/FileGenerateRepository.java

```java
package com.nubo.corrected.reports.cmd.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.corrected.reports.cmd.api.models.entity.FileGenerateEntity;

public interface FileGenerateRepository extends JpaRepository<FileGenerateEntity, Long> {

}

```

## src/main/java/com/nubo/corrected/reports/cmd/api/repository/ParticipantRepository.java

```java
package com.nubo.corrected.reports.cmd.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.corrected.reports.cmd.api.models.entity.ParticipantEntity;

public interface ParticipantRepository extends JpaRepository<ParticipantEntity, Long> {

}

```

## src/main/java/com/nubo/corrected/reports/cmd/api/repository/SettlementInstructionsRepository.java

```java
package com.nubo.corrected.reports.cmd.api.repository;

import com.nubo.corrected.reports.cmd.api.models.entity.SettlementInstructionsEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SettlementInstructionsRepository extends JpaRepository<SettlementInstructionsEntity, Long> {

    @Query("""
           select s 
           from SettlementInstructionsEntity s
           where s.trade.id = :tradeId
             and s.fraction = :fraction
             and s.participantBuy.id = :participantBuyId
             and s.participantSell.id = :participantSellId
           """)
    List<SettlementInstructionsEntity> findSettlementInstructions(
            @Param("tradeId") Long tradeId,
            @Param("fraction") Integer fraction,
            @Param("participantBuyId") Long participantBuyId,
            @Param("participantSellId") Long participantSellId
    );
}
```

## src/main/java/com/nubo/corrected/reports/cmd/api/repository/SettlementRepository.java

```java
package com.nubo.corrected.reports.cmd.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.nubo.corrected.reports.cmd.api.models.entity.SettlementEntity;
import com.nubo.corrected.reports.cmd.api.models.entity.SettlementKey;

public interface SettlementRepository
        extends JpaRepository<SettlementEntity, SettlementKey>, JpaSpecificationExecutor<SettlementEntity> {
}

```

## src/main/java/com/nubo/corrected/reports/cmd/api/repository/StatusRepository.java

```java
package com.nubo.corrected.reports.cmd.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.corrected.reports.cmd.api.models.entity.StatusEntity;

public interface StatusRepository extends JpaRepository<StatusEntity, Long> {

}

```

## src/main/java/com/nubo/corrected/reports/cmd/api/repository/TariffDetailRepository.java

```java
package com.nubo.corrected.reports.cmd.api.repository;

import com.nubo.corrected.reports.cmd.api.models.entity.TariffDetailEntity;
import com.nubo.corrected.reports.cmd.api.models.entity.TariffDetailId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public interface TariffDetailRepository extends JpaRepository<TariffDetailEntity, TariffDetailId> {

    @Query(value = """
            select td."UNIT_PRICE"
            from "NUANBODB"."TARIFF_DETAIL" td
            inner join "NUANBODB"."TARIFF" t
                on td."TARIFF_ID" = t."TARIFF_ID"
            where t."TARIFF_ID" = :tariffId
              and td."EVENT_TYPE_ID" = :eventTypeId
              and td."VALID_FROM" <= :referenceDate
              and (td."VALID_TO" is null or td."VALID_TO" >= :referenceDate)
            order by td."VALID_FROM" desc
            limit 1
            """,
            nativeQuery = true)
    Optional<BigDecimal> findUnitPriceByTariffEventTypeAndDate(
            @Param("tariffId") Long tariffId,
            @Param("eventTypeId") Long eventTypeId,
            @Param("referenceDate") LocalDate referenceDate
    );
}

```

## src/main/java/com/nubo/corrected/reports/cmd/api/repository/TradeEquityRepository.java

```java
package com.nubo.corrected.reports.cmd.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.corrected.reports.cmd.api.models.entity.TradeEquityEntity;

public interface TradeEquityRepository extends JpaRepository<TradeEquityEntity, Long> {

}

```

## src/main/java/com/nubo/corrected/reports/cmd/api/repository/TradeRepository.java

```java
package com.nubo.corrected.reports.cmd.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.nubo.corrected.reports.cmd.api.models.entity.TradeEntity;

public interface TradeRepository extends JpaRepository<TradeEntity, Long>,  JpaSpecificationExecutor<TradeEntity> {

}

```

## src/main/java/com/nubo/corrected/reports/cmd/api/repository/TypeRepository.java

```java
package com.nubo.corrected.reports.cmd.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.corrected.reports.cmd.api.models.entity.TypeEntity;

public interface TypeRepository extends JpaRepository<TypeEntity, Long> {

}

```

## src/main/java/com/nubo/corrected/reports/cmd/api/repository/UserNuboRepository.java

```java
package com.nubo.corrected.reports.cmd.api.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.nubo.corrected.reports.cmd.api.models.entity.UserNuboEntity;

public interface UserNuboRepository extends JpaRepository<UserNuboEntity, Long> {

    @Query("""
            SELECT u FROM UserNuboEntity u
            WHERE u.userName = :userName
            """)
    Optional<UserNuboEntity> findByUserName(String userName);
}

```

## src/main/java/com/nubo/corrected/reports/cmd/api/service/CorrectedReportsOperation.java

```java
package com.nubo.corrected.reports.cmd.api.service;

import com.nubo.corrected.reports.cmd.api.models.dto.request.CorrectedReportsInDto;
import com.nubo.corrected.reports.cmd.api.models.dto.response.CorrectedReportsOutDto;
import com.nubo.corrected.reports.cmd.api.models.dto.response.CorrectedReportsSizeOutDto;

public interface CorrectedReportsOperation {

    CorrectedReportsOutDto generateCorrectedReportByOperation(CorrectedReportsInDto correctedReportsOperationInDto);

    CorrectedReportsSizeOutDto validateCorrectedReportByOperation(CorrectedReportsInDto correctedReportsOperationInDto);
}

```

## src/main/java/com/nubo/corrected/reports/cmd/api/service/impl/CorrectedReportsOperationImpl.java

```java
package com.nubo.corrected.reports.cmd.api.service.impl;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

import com.nubo.corrected.reports.cmd.api.repository.*;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import com.nubo.corrected.reports.cmd.api.application.properties.PropertiesConfig;
import com.nubo.corrected.reports.cmd.api.application.properties.PropertiesContext;
import com.nubo.corrected.reports.cmd.api.application.util.ApplicationUtils;
import com.nubo.corrected.reports.cmd.api.client.kafka.producer.models.ReportFileInDto;
import com.nubo.corrected.reports.cmd.api.client.kafka.producer.models.ReportFileOperationInDto;
import com.nubo.corrected.reports.cmd.api.client.kafka.producer.service.KafkaNuboAdapter;
import com.nubo.corrected.reports.cmd.api.exception.ServiceException;
import com.nubo.corrected.reports.cmd.api.exception.error.ErrorCode;
import com.nubo.corrected.reports.cmd.api.helpers.MapperUtil;
import com.nubo.corrected.reports.cmd.api.helpers.TradeSearchCriteria;
import com.nubo.corrected.reports.cmd.api.models.dto.request.CorrectedReportsInDto;
import com.nubo.corrected.reports.cmd.api.models.dto.response.CorrectedReportsOutDto;
import com.nubo.corrected.reports.cmd.api.models.dto.response.CorrectedReportsSizeOutDto;
import com.nubo.corrected.reports.cmd.api.models.entity.FileGenerateEntity;
import com.nubo.corrected.reports.cmd.api.models.entity.ParticipantEntity;
import com.nubo.corrected.reports.cmd.api.models.entity.StatusEntity;
import com.nubo.corrected.reports.cmd.api.models.entity.TradeEntity;
import com.nubo.corrected.reports.cmd.api.models.entity.TypeEntity;
import com.nubo.corrected.reports.cmd.api.models.enums.FileNameEnum;
import com.nubo.corrected.reports.cmd.api.models.enums.StatusFileEnum;
import com.nubo.corrected.reports.cmd.api.models.enums.TypeFileEnum;
import com.nubo.corrected.reports.cmd.api.models.enums.UserTypeEnum;
import com.nubo.corrected.reports.cmd.api.models.enums.VersionApiEnum;
import com.nubo.corrected.reports.cmd.api.service.CorrectedReportsOperation;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class CorrectedReportsOperationImpl implements CorrectedReportsOperation {

    private final TradeRepository tradeRepository;
    private final FileGenerateRepository fileGenerateRepository;
    private final StatusRepository statusRepository;
    private final ParticipantRepository participantRepository;
    private final TypeRepository typeRepository;
    private final TariffDetailRepository tariffDetailRepository;
    private final KafkaNuboAdapter kafkaAdapter;
    private final PropertiesConfig propertiesConfig;

    @Override
    public CorrectedReportsOutDto generateCorrectedReportByOperation(CorrectedReportsInDto correctedReportsInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return generateCorrectedReportByOperationV1(correctedReportsInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private CorrectedReportsOutDto generateCorrectedReportByOperationV1(CorrectedReportsInDto correctedReportsInDto) {
        log.info("Start method generateCorrectedReportByOperationV1 with: {}", correctedReportsInDto);

        this.validateUserTypeAndParticipant(correctedReportsInDto.getParticipantId());

        Specification<TradeEntity> specification = TradeSearchCriteria.createSpecification(correctedReportsInDto);
        List<TradeEntity> tradeEntityList = tradeRepository.findAll(specification);
        if (tradeEntityList.isEmpty()) {
            throw new ServiceException(ErrorCode.TRADE_NOT_FOUND, HttpStatus.NOT_FOUND);
        }

        String fileName = generateFileName(correctedReportsInDto.getParticipantId());
        FileGenerateEntity fileGenerateEntity = FileGenerateEntity.builder()
                .fileName(fileName)
                .fileType(FileNameEnum.EXTERNAL.getExtension())
                .generationStatus(validateStatusEntity(StatusFileEnum.IN_PROCESS.getStatusId()))
                .generatedBy(PropertiesContext.getClientUser())
                .generatedAt(PropertiesContext.getClientDatetime())
                .participant(ObjectUtils.isEmpty(correctedReportsInDto.getParticipantId()) ? null
                        : validateParticipantEntity(correctedReportsInDto.getParticipantId()))
                .type(validateTypeEntity(TypeFileEnum.CORRECTED_REPORTS.getId()))
                .fileConsecutive(LocalDateTime.now().toEpochSecond(ZoneOffset.UTC))
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyIp(PropertiesContext.getClientIp())
                .lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyDateTime(PropertiesContext.getClientDatetime())
                .build();

        fileGenerateEntity = fileGenerateRepository.save(fileGenerateEntity);
        CorrectedReportsOutDto correctedReportsOutDto = MapperUtil
                .fileGenerateEntityToCorrectedReportsOutDto(fileGenerateEntity);

        this.sendMessageToKafka(tradeEntityList, fileGenerateEntity.getId(), fileName);

        log.info("End method generateCorrectedReportByOperationV1, CorrectedReportsOutDto: {}", correctedReportsOutDto);
        return correctedReportsOutDto;
    }

    @Override
    public CorrectedReportsSizeOutDto validateCorrectedReportByOperation(CorrectedReportsInDto correctedReportsInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return validateCorrectedReportByOperationV1(correctedReportsInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private CorrectedReportsSizeOutDto validateCorrectedReportByOperationV1(
            CorrectedReportsInDto correctedReportsInDto) {
        log.info("Start method validateCorrectedReportByOperationV1 with: {}", correctedReportsInDto);

        this.validateUserTypeAndParticipant(correctedReportsInDto.getParticipantId());

        Specification<TradeEntity> specification = TradeSearchCriteria.createSpecification(correctedReportsInDto);
        List<TradeEntity> tradeEntityList = tradeRepository.findAll(specification);

        int totalElements = tradeEntityList.stream()
                .mapToInt(trade -> trade.getSettlementEntityList() != null
                        ? trade.getSettlementEntityList().size()
                        : 1)
                .sum();

        CorrectedReportsSizeOutDto correctedReportsOutDto = CorrectedReportsSizeOutDto.builder()
                .totalElements(totalElements)
                .build();

        log.info("End method validateCorrectedReportByOperationV1, CorrectedReportsOutDto: {}", correctedReportsOutDto);
        return correctedReportsOutDto;
    }

    private void sendMessageToKafka(List<TradeEntity> tradeEntityList, Long fileGenerateId, String fileName) {

        BigDecimal tariff=this.validateTariffOperation();

        List<ReportFileOperationInDto> reportFileOperationInDtoList = tradeEntityList.stream()
                .map(trade -> MapperUtil.tradeEntityToReportFileOperationInDto(trade, tariff))
                .toList();

        ReportFileInDto reportFileInDto = ReportFileInDto.builder()
                .clientUser(PropertiesContext.getClientUser())
                .clientDateTime(PropertiesContext.getClientDatetime())
                .clientIp(PropertiesContext.getClientIp())
                .fileName(fileName)
                .fileGenerateId(fileGenerateId)
                .fileType(FileNameEnum.EXTERNAL.getExtension())
                .content(reportFileOperationInDtoList)
                .build();

        kafkaAdapter.sendMessageOperationCorrectedReports(reportFileInDto);
    }

    private void validateUserTypeAndParticipant(Long participantId) {
        if (UserTypeEnum.EXTERNAL.equals(PropertiesContext.getClientUserEntity().getUserType())
                && participantId == null) {
            throw new ServiceException(ErrorCode.PARTICIPANT_REQUIRED, HttpStatus.BAD_REQUEST);
        }
    }

    private String generateFileName(Long participantId) {
        String datetimeNow = ApplicationUtils.getFileFormatDatetimeNow();
        if (UserTypeEnum.EXTERNAL.equals(PropertiesContext.getClientUserEntity().getUserType())) {
            return FileNameEnum.EXTERNAL.getPrefix() + datetimeNow;
        }
        if (UserTypeEnum.INTERNAL.equals(PropertiesContext.getClientUserEntity().getUserType())
                && participantId != null) {
            return FileNameEnum.INTERNAL_WITH_PARTICIPANT.getPrefix() + datetimeNow;
        }
        return FileNameEnum.INTERNAL_WITHOUT_PARTICIPANT.getPrefix() + datetimeNow;
    }

    private StatusEntity validateStatusEntity(Long statusId) {
        return statusRepository.findById(statusId)
                .orElseThrow(() -> new ServiceException(ErrorCode.STATUS_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private ParticipantEntity validateParticipantEntity(Long participantId) {
        return participantRepository.findById(participantId)
                .orElseThrow(() -> new ServiceException(ErrorCode.PARTICIPANT_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private TypeEntity validateTypeEntity(Long typeId) {
        return typeRepository.findById(typeId)
                .orElseThrow(() -> new ServiceException(ErrorCode.TYPE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private BigDecimal validateTariffOperation() {
        LocalDate today = LocalDate.now();

        return tariffDetailRepository
                .findUnitPriceByTariffEventTypeAndDate(3L, 1L, today)
                .orElse(null);
    }


}

```

## src/main/java/com/nubo/corrected/reports/cmd/api/web/controller/CorrectedReportsOperationController.java

```java
package com.nubo.corrected.reports.cmd.api.web.controller;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nubo.corrected.reports.cmd.api.models.dto.request.CorrectedReportsInDto;
import com.nubo.corrected.reports.cmd.api.models.dto.response.CorrectedReportsOutDto;
import com.nubo.corrected.reports.cmd.api.models.dto.response.CorrectedReportsSizeOutDto;
import com.nubo.corrected.reports.cmd.api.service.CorrectedReportsOperation;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@Tag(name = "Menu")
@RequestMapping("/{version}/corrected-reports-operations")
@RestController
@RequiredArgsConstructor
public class CorrectedReportsOperationController {

    private final CorrectedReportsOperation correctedReportsOperation;

    @Operation(summary = "Generate a corrected report by Operation",
            description = "Generate a corrected report by Operation")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response",
                    content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                            schema = @Schema(implementation = CorrectedReportsOutDto.class))) })
    @PostMapping("/generate")
    public ResponseEntity<CorrectedReportsOutDto> generateCorrectedReportByOperation(
            @Valid @RequestBody CorrectedReportsInDto correctedReportsOperationInDto) {
        return ResponseEntity.ok(correctedReportsOperation
                .generateCorrectedReportByOperation(correctedReportsOperationInDto));
    }

    @Operation(summary = "Validate a corrected report by Operation",
            description = "Validate a corrected report by Operation")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response",
                    content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                            schema = @Schema(implementation = CorrectedReportsSizeOutDto.class))) })
    @PostMapping("/validate")
    public ResponseEntity<CorrectedReportsSizeOutDto> validateCorrectedReportByOperation(
            @Valid @RequestBody CorrectedReportsInDto correctedReportsOperationInDto) {
        return ResponseEntity
                .ok(correctedReportsOperation.validateCorrectedReportByOperation(correctedReportsOperationInDto));
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
      topic-name-operation-corrected-reports: ${KAFKA_NUBO_TOPIC_NAME_OPERATION_CORRECTED_REPORTS}

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
      maximum-pool-size: ${DB_HIKARI_MAXIMUM_POOL_SIZE:10}
      minimum-idle: ${DB_HIKARI_MINIMUM_IDLE:5}
      idle-timeout: ${DB_HIKARI_IDLE_TIMEOUT:600000}
      validation-timeout: ${DB_HIKARI_VALIDATION_TIMEOUT:5000}
      max-lifetime: ${DB_HIKARI_MAX_LIFETIME:600000}
      connection-timeout: ${DB_HIKARI_CONNECTION_TIMEOUT:30000}
      leak-detection-threshold: ${DB_HIKARI_LEAK_DETECTION_THRESHOLD:2000}
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
kafka:
  nubo:
    retries: ${KAFKA_NUBO_RETRIES:5}
    bootstrap-servers: ${KAFKA_NUBO_BOOTSTRAP_SERVER}
    auto-offset-reset: ${KAFKA_NUBO_AUTO_OFFSET_RESET:latest}
    security:
      protocol: PLAINTEXT
    sasl:
      mechanism: ""
      jaas:
        config: "org.apache.kafka.common.security.scram.ScramLoginModule required;"
    producer:
      topic-name-operation-corrected-reports: ${KAFKA_NUBO_TOPIC_NAME_OPERATION_CORRECTED_REPORTS:kafka-nubo-operation-corrected-reports}

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
      topic-name-operation-corrected-reports: ${KAFKA_NUBO_TOPIC_NAME_OPERATION_CORRECTED_REPORTS}

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
      topic-name-operation-corrected-reports: ${KAFKA_NUBO_TOPIC_NAME_OPERATION_CORRECTED_REPORTS}

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
      topic-name-operation-corrected-reports: ${KAFKA_NUBO_TOPIC_NAME_OPERATION_CORRECTED_REPORTS}

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
 ,-----. ,-----. ,------. ,------. ,------. ,-----.,--------.,------.,------.   ,------. ,------.,------. ,-----. ,------.,--------.,---.    ,-----.,--.   ,--.,------.     ,---.  ,------. ,--.
'  .--./'  .-.  '|  .--. '|  .--. '|  .---''  .--./'--.  .--'|  .---'|  .-.  \  |  .--. '|  .---'|  .--. '  .-.  '|  .--. '--.  .--'   .-'  '  .--./|   `.'   ||  .-.  \   /  O  \ |  .--. '|  |
|  |    |  | |  ||  '--'.'|  '--'.'|  `--, |  |       |  |   |  `--, |  |  \  : |  '--'.'|  `--, |  '--' |  | |  ||  '--'.'  |  |  `.  `-.  |  |    |  |'.'|  ||  |  \  : |  .-.  ||  '--' ||  |
'  '--'\'  '-'  '|  |\  \ |  |\  \ |  `---.'  '--'\   |  |   |  `---.|  '--'  / |  |\  \ |  `---.|  | --''  '-'  '|  |\  \   |  |  .-'    | '  '--'\|  |   |  ||  '--'  / |  | |  ||  | --' |  |
 `-----' `-----' `--' '--'`--' '--'`------' `-----'   `--'   `------'`-------'  `--' '--'`------'`--'     `-----' `--' '--'  `--'  `-----'   `-----'`--'   `--'`-------'  `--' `--'`--'     `--'

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
