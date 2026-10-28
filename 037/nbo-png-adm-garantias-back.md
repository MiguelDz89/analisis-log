# nbo-png-adm-garantias-back

Código Java de producción y configuraciones, sin tests. Cada sección contiene el archivo original completo y su ruta. Captura: 28/10/2026.

## Índice

1. `.mvn/wrapper/maven-wrapper.properties`
2. `mvnw`
3. `mvnw.cmd`
4. `pom.xml`
5. `src/main/java/com/nubo/guarantees/admin/api/GuaranteesAdminApiApplication.java`
6. `src/main/java/com/nubo/guarantees/admin/api/application/config/SwaggerConfig.java`
7. `src/main/java/com/nubo/guarantees/admin/api/application/config/WebConfig.java`
8. `src/main/java/com/nubo/guarantees/admin/api/application/context/GlobalContext.java`
9. `src/main/java/com/nubo/guarantees/admin/api/application/database/NamingStrategyConfig.java`
10. `src/main/java/com/nubo/guarantees/admin/api/application/database/UpperNamingConfig.java`
11. `src/main/java/com/nubo/guarantees/admin/api/application/filters/GlobalFilter.java`
12. `src/main/java/com/nubo/guarantees/admin/api/application/interceptors/GlobalInterceptor.java`
13. `src/main/java/com/nubo/guarantees/admin/api/application/properties/PropertiesConfig.java`
14. `src/main/java/com/nubo/guarantees/admin/api/application/properties/PropertiesContext.java`
15. `src/main/java/com/nubo/guarantees/admin/api/application/util/ApplicationUtils.java`
16. `src/main/java/com/nubo/guarantees/admin/api/exception/ServiceException.java`
17. `src/main/java/com/nubo/guarantees/admin/api/exception/error/ErrorCode.java`
18. `src/main/java/com/nubo/guarantees/admin/api/exception/error/ErrorResponse.java`
19. `src/main/java/com/nubo/guarantees/admin/api/exception/error/ErrorValidation.java`
20. `src/main/java/com/nubo/guarantees/admin/api/exception/handler/GlobalExceptionHandler.java`
21. `src/main/java/com/nubo/guarantees/admin/api/helpers/DateUtil.java`
22. `src/main/java/com/nubo/guarantees/admin/api/helpers/MapperPageUtil.java`
23. `src/main/java/com/nubo/guarantees/admin/api/helpers/MapperUtil.java`
24. `src/main/java/com/nubo/guarantees/admin/api/helpers/dynamicQuery/dataBase/GuaranteesSpecificationBuilder.java`
25. `src/main/java/com/nubo/guarantees/admin/api/helpers/dynamicQuery/dataBase/GuaranteesSpecificationFactory.java`
26. `src/main/java/com/nubo/guarantees/admin/api/helpers/dynamicQuery/dataBase/MapperGuaranteesDynamicSearch.java`
27. `src/main/java/com/nubo/guarantees/admin/api/models/dto/request/GuaranteesInDto.java`
28. `src/main/java/com/nubo/guarantees/admin/api/models/dto/response/CountryOutDto.java`
29. `src/main/java/com/nubo/guarantees/admin/api/models/dto/response/GuaranteeAccountOutDto.java`
30. `src/main/java/com/nubo/guarantees/admin/api/models/dto/response/GuaranteeGlobalAccountOutDto.java`
31. `src/main/java/com/nubo/guarantees/admin/api/models/dto/response/GuaranteeParticularAccountOutDto.java`
32. `src/main/java/com/nubo/guarantees/admin/api/models/dto/response/GuaranteeSpecificAccountDto.java`
33. `src/main/java/com/nubo/guarantees/admin/api/models/dto/response/GuaranteeTransactionOutDto.java`
34. `src/main/java/com/nubo/guarantees/admin/api/models/dto/response/GuaranteeValuationOutDto.java`
35. `src/main/java/com/nubo/guarantees/admin/api/models/dto/response/GuaranteesOutDto.java`
36. `src/main/java/com/nubo/guarantees/admin/api/models/dto/response/IdentificationTypeOutDto.java`
37. `src/main/java/com/nubo/guarantees/admin/api/models/dto/response/InvestorOutDto.java`
38. `src/main/java/com/nubo/guarantees/admin/api/models/dto/response/PageResponseOutDto.java`
39. `src/main/java/com/nubo/guarantees/admin/api/models/dto/response/ParticipantOutDto.java`
40. `src/main/java/com/nubo/guarantees/admin/api/models/dto/response/StatusOutDto.java`
41. `src/main/java/com/nubo/guarantees/admin/api/models/dto/response/TypeOutDto.java`
42. `src/main/java/com/nubo/guarantees/admin/api/models/entity/ClassEntity.java`
43. `src/main/java/com/nubo/guarantees/admin/api/models/entity/CountryEntity.java`
44. `src/main/java/com/nubo/guarantees/admin/api/models/entity/CurrencyEntity.java`
45. `src/main/java/com/nubo/guarantees/admin/api/models/entity/DepositoryEntity.java`
46. `src/main/java/com/nubo/guarantees/admin/api/models/entity/GuaranteeGlobalAccountEntity.java`
47. `src/main/java/com/nubo/guarantees/admin/api/models/entity/GuaranteeLimitsValuationEntity.java`
48. `src/main/java/com/nubo/guarantees/admin/api/models/entity/GuaranteeParticularAccountEntity.java`
49. `src/main/java/com/nubo/guarantees/admin/api/models/entity/GuaranteeTradeEntity.java`
50. `src/main/java/com/nubo/guarantees/admin/api/models/entity/GuaranteeTransactionEntity.java`
51. `src/main/java/com/nubo/guarantees/admin/api/models/entity/GuaranteeValuationEntity.java`
52. `src/main/java/com/nubo/guarantees/admin/api/models/entity/GuaranteeValuationKey.java`
53. `src/main/java/com/nubo/guarantees/admin/api/models/entity/GuaranteesAccountEntity.java`
54. `src/main/java/com/nubo/guarantees/admin/api/models/entity/GuaranteesEntity.java`
55. `src/main/java/com/nubo/guarantees/admin/api/models/entity/IdentificationTypeEntity.java`
56. `src/main/java/com/nubo/guarantees/admin/api/models/entity/InvestorAccountEntity.java`
57. `src/main/java/com/nubo/guarantees/admin/api/models/entity/InvestorEntity.java`
58. `src/main/java/com/nubo/guarantees/admin/api/models/entity/IsinNumberEntity.java`
59. `src/main/java/com/nubo/guarantees/admin/api/models/entity/MarketEntity.java`
60. `src/main/java/com/nubo/guarantees/admin/api/models/entity/ParticipantEntity.java`
61. `src/main/java/com/nubo/guarantees/admin/api/models/entity/PermissionEntity.java`
62. `src/main/java/com/nubo/guarantees/admin/api/models/entity/ProfileEntity.java`
63. `src/main/java/com/nubo/guarantees/admin/api/models/entity/SecurityTitleEntity.java`
64. `src/main/java/com/nubo/guarantees/admin/api/models/entity/SettlementEntity.java`
65. `src/main/java/com/nubo/guarantees/admin/api/models/entity/SettlementKey.java`
66. `src/main/java/com/nubo/guarantees/admin/api/models/entity/SideEntity.java`
67. `src/main/java/com/nubo/guarantees/admin/api/models/entity/StatusEntity.java`
68. `src/main/java/com/nubo/guarantees/admin/api/models/entity/TradeEntity.java`
69. `src/main/java/com/nubo/guarantees/admin/api/models/entity/TypeEntity.java`
70. `src/main/java/com/nubo/guarantees/admin/api/models/enums/CountryEnum.java`
71. `src/main/java/com/nubo/guarantees/admin/api/models/enums/MarketEnum.java`
72. `src/main/java/com/nubo/guarantees/admin/api/models/enums/ParticipantEnum.java`
73. `src/main/java/com/nubo/guarantees/admin/api/models/enums/PropertiesEnum.java`
74. `src/main/java/com/nubo/guarantees/admin/api/models/enums/SearchOperationEnum.java`
75. `src/main/java/com/nubo/guarantees/admin/api/models/enums/StatusCategoryEnum.java`
76. `src/main/java/com/nubo/guarantees/admin/api/models/enums/StatusGuaranteeAdmEnum.java`
77. `src/main/java/com/nubo/guarantees/admin/api/models/enums/StatusTradeCustodianEnum.java`
78. `src/main/java/com/nubo/guarantees/admin/api/models/enums/TypeAccountEnum.java`
79. `src/main/java/com/nubo/guarantees/admin/api/models/enums/TypeCategoryEnum.java`
80. `src/main/java/com/nubo/guarantees/admin/api/models/enums/VersionApiEnum.java`
81. `src/main/java/com/nubo/guarantees/admin/api/repository/CountryRepository.java`
82. `src/main/java/com/nubo/guarantees/admin/api/repository/GuaranteeAccountRepository.java`
83. `src/main/java/com/nubo/guarantees/admin/api/repository/GuaranteeGlobalAccountRepository.java`
84. `src/main/java/com/nubo/guarantees/admin/api/repository/GuaranteeParticularAccountRepository.java`
85. `src/main/java/com/nubo/guarantees/admin/api/repository/GuaranteesRepository.java`
86. `src/main/java/com/nubo/guarantees/admin/api/repository/InvestorRepository.java`
87. `src/main/java/com/nubo/guarantees/admin/api/repository/ParticipantRepository.java`
88. `src/main/java/com/nubo/guarantees/admin/api/repository/StatusRepository.java`
89. `src/main/java/com/nubo/guarantees/admin/api/repository/TypeRepository.java`
90. `src/main/java/com/nubo/guarantees/admin/api/service/CountryService.java`
91. `src/main/java/com/nubo/guarantees/admin/api/service/GuaranteeAccountService.java`
92. `src/main/java/com/nubo/guarantees/admin/api/service/GuaranteesService.java`
93. `src/main/java/com/nubo/guarantees/admin/api/service/InvestorService.java`
94. `src/main/java/com/nubo/guarantees/admin/api/service/ParticipantService.java`
95. `src/main/java/com/nubo/guarantees/admin/api/service/StatusService.java`
96. `src/main/java/com/nubo/guarantees/admin/api/service/impl/CountryServiceImpl.java`
97. `src/main/java/com/nubo/guarantees/admin/api/service/impl/GuaranteeAccountServiceImpl.java`
98. `src/main/java/com/nubo/guarantees/admin/api/service/impl/GuaranteesServiceImpl.java`
99. `src/main/java/com/nubo/guarantees/admin/api/service/impl/InvestorServiceImpl.java`
100. `src/main/java/com/nubo/guarantees/admin/api/service/impl/ParticipantServiceImpl.java`
101. `src/main/java/com/nubo/guarantees/admin/api/service/impl/StatusServiceImpl.java`
102. `src/main/java/com/nubo/guarantees/admin/api/web/controller/CountryRestController.java`
103. `src/main/java/com/nubo/guarantees/admin/api/web/controller/GuaranteeAccountRestController.java`
104. `src/main/java/com/nubo/guarantees/admin/api/web/controller/GuaranteesRestController.java`
105. `src/main/java/com/nubo/guarantees/admin/api/web/controller/InvestorRestController.java`
106. `src/main/java/com/nubo/guarantees/admin/api/web/controller/ParticipantRestController.java`
107. `src/main/java/com/nubo/guarantees/admin/api/web/controller/StatusRestController.java`
108. `src/main/resources/application-dev.yml`
109. `src/main/resources/application-local.yml`
110. `src/main/resources/application-prod.yml`
111. `src/main/resources/application-qa.yml`
112. `src/main/resources/application-uat.yml`
113. `src/main/resources/application.yml`
114. `src/main/resources/banner.txt`
115. `src/main/resources/log/JsonEventLayout_error.json`
116. `src/main/resources/log/JsonEventLayout_info.json`
117. `src/main/resources/log/JsonEventLayout_trace.json`
118. `src/main/resources/log/log4j2-prod.properties`
119. `src/main/resources/log/log4j2.properties`

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
        <version>3.5.7</version>
        <relativePath/>
    </parent>
    <groupId>com.nubo.guarantees.admin.api</groupId>
    <artifactId>guarantees-admin-api</artifactId>
    <version>0.25.0</version>
    <name>${project.artifactId}</name>
    <description>Guarantees Admin Api</description>

    <properties>
        <java.version>17</java.version>
        <spring.port>8080</spring.port>
        <test.skip>false</test.skip>
        <datasource.url.application.name>ApplicationName=${project.artifactId}</datasource.url.application.name>
        <hikari.pool.name>${project.artifactId}-pool</hikari.pool.name>
        <dynamic.hikari.pool.name>${project.artifactId}-dynamic-pool</dynamic.hikari.pool.name>
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
            <version>42.7.7</version>
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
        <!-- vulnerability adjustment  -->
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
        <!-- vulnerability adjustment  -->
        <dependency>
            <groupId>commons-io</groupId>
            <artifactId>commons-io</artifactId>
            <version>2.18.0</version>
        </dependency>
        <!-- vulnerability adjustment  -->
        <dependency>
            <groupId>org.apache.tomcat.embed</groupId>
            <artifactId>tomcat-embed-core</artifactId>
            <version>10.1.45</version>
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
                                <exclude>**/GuaranteesAdminApiApplication.class</exclude>
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

## src/main/java/com/nubo/guarantees/admin/api/GuaranteesAdminApiApplication.java

```java
package com.nubo.guarantees.admin.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class GuaranteesAdminApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(GuaranteesAdminApiApplication.class, args);
	}

}

```

## src/main/java/com/nubo/guarantees/admin/api/application/config/SwaggerConfig.java

```java
package com.nubo.guarantees.admin.api.application.config;

import com.nubo.guarantees.admin.api.exception.error.ErrorResponse;
import com.nubo.guarantees.admin.api.exception.error.ErrorValidation;
import com.nubo.guarantees.admin.api.models.enums.PropertiesEnum;
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

## src/main/java/com/nubo/guarantees/admin/api/application/config/WebConfig.java

```java
package com.nubo.guarantees.admin.api.application.config;

import com.nubo.guarantees.admin.api.application.interceptors.GlobalInterceptor;
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

## src/main/java/com/nubo/guarantees/admin/api/application/context/GlobalContext.java

```java
package com.nubo.guarantees.admin.api.application.context;

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

## src/main/java/com/nubo/guarantees/admin/api/application/database/NamingStrategyConfig.java

```java
package com.nubo.guarantees.admin.api.application.database;

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

## src/main/java/com/nubo/guarantees/admin/api/application/database/UpperNamingConfig.java

```java
package com.nubo.guarantees.admin.api.application.database;

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

## src/main/java/com/nubo/guarantees/admin/api/application/filters/GlobalFilter.java

```java
package com.nubo.guarantees.admin.api.application.filters;

import com.nubo.guarantees.admin.api.application.context.GlobalContext;
import com.nubo.guarantees.admin.api.application.util.ApplicationUtils;
import com.nubo.guarantees.admin.api.exception.ServiceException;
import com.nubo.guarantees.admin.api.exception.error.ErrorCode;
import com.nubo.guarantees.admin.api.exception.error.ErrorResponse;
import com.nubo.guarantees.admin.api.models.enums.PropertiesEnum;
import com.nubo.guarantees.admin.api.models.enums.VersionApiEnum;
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

## src/main/java/com/nubo/guarantees/admin/api/application/interceptors/GlobalInterceptor.java

```java
package com.nubo.guarantees.admin.api.application.interceptors;

import com.nubo.guarantees.admin.api.application.context.GlobalContext;
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

## src/main/java/com/nubo/guarantees/admin/api/application/properties/PropertiesConfig.java

```java
package com.nubo.guarantees.admin.api.application.properties;

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

## src/main/java/com/nubo/guarantees/admin/api/application/properties/PropertiesContext.java

```java
package com.nubo.guarantees.admin.api.application.properties;

import com.nubo.guarantees.admin.api.application.context.GlobalContext;
import com.nubo.guarantees.admin.api.application.util.ApplicationUtils;
import com.nubo.guarantees.admin.api.models.enums.PropertiesEnum;

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
        String clientDatetime = GlobalContext.getProperty(PropertiesEnum.CLIENT_DATETIME.getValue());
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern(ApplicationUtils.getFormatDatetime());
        assert clientDatetime != null;
        return LocalDateTime.parse(clientDatetime, formatter);
    }

    public static String getVersion() {
        return GlobalContext.getProperty(PropertiesEnum.VERSION_API.getValue());
    }

}


```

## src/main/java/com/nubo/guarantees/admin/api/application/util/ApplicationUtils.java

```java
package com.nubo.guarantees.admin.api.application.util;

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

## src/main/java/com/nubo/guarantees/admin/api/exception/ServiceException.java

```java
package com.nubo.guarantees.admin.api.exception;

import com.nubo.guarantees.admin.api.exception.error.ErrorCode;
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

## src/main/java/com/nubo/guarantees/admin/api/exception/error/ErrorCode.java

```java
package com.nubo.guarantees.admin.api.exception.error;

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
    ACCOUNT_TYPE_NOT_FOUND("Account type not found");

    private final String message;

    ErrorCode(String message) {
        this.message = message;
    }

    public String getName() {
        return this.name();
    }

}

```

## src/main/java/com/nubo/guarantees/admin/api/exception/error/ErrorResponse.java

```java
package com.nubo.guarantees.admin.api.exception.error;

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

## src/main/java/com/nubo/guarantees/admin/api/exception/error/ErrorValidation.java

```java
package com.nubo.guarantees.admin.api.exception.error;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ErrorValidation {

    private String id;
    private String description;

}

```

## src/main/java/com/nubo/guarantees/admin/api/exception/handler/GlobalExceptionHandler.java

```java
package com.nubo.guarantees.admin.api.exception.handler;

import com.nubo.guarantees.admin.api.application.properties.PropertiesContext;
import com.nubo.guarantees.admin.api.exception.ServiceException;
import com.nubo.guarantees.admin.api.exception.error.ErrorCode;
import com.nubo.guarantees.admin.api.exception.error.ErrorResponse;
import com.nubo.guarantees.admin.api.exception.error.ErrorValidation;
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

## src/main/java/com/nubo/guarantees/admin/api/helpers/DateUtil.java

```java
package com.nubo.guarantees.admin.api.helpers;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.util.Set;

@Component
@RequiredArgsConstructor
public class DateUtil {

    public Integer countBusinessDays(LocalDate startDate, LocalDate endDate, Set<LocalDate> holidays) {
        Integer businessDays = 0;
        if (startDate.isAfter(endDate)) {
            return 0;
        }
        LocalDate current = startDate;
        while (!current.isAfter(endDate)) {
            if (Boolean.TRUE.equals(isBusinessDay(current, holidays))) {
                businessDays++;
            }
            current = current.plusDays(1);
        }
        return businessDays;
    }

    public LocalDate getNextBusinessDay(LocalDate date, Set<LocalDate> holidays) {
        LocalDate nextDay = date.plusDays(1);
        while (nextDay.getDayOfWeek() == DayOfWeek.SATURDAY
                || nextDay.getDayOfWeek() == DayOfWeek.SUNDAY
                || holidays.contains(nextDay)) {
            nextDay = nextDay.plusDays(1);
        }
        return nextDay;
    }

    private Boolean isBusinessDay(LocalDate date, Set<LocalDate> holidays) {
        if (date.getDayOfWeek() == DayOfWeek.SATURDAY
                || date.getDayOfWeek() == DayOfWeek.SUNDAY) {
            return false;
        }
        return !holidays.contains(date);
    }

}

```

## src/main/java/com/nubo/guarantees/admin/api/helpers/MapperPageUtil.java

```java
package com.nubo.guarantees.admin.api.helpers;

import com.nubo.guarantees.admin.api.models.dto.response.PageResponseOutDto;
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

    public static <T> PageResponseOutDto<T> pageToPageResponseOutDto(List<T> list, int pageNumber, int pageSize,
                                                                     long totalFilteredElements) {
        PageResponseOutDto<T> paginationResponseDto = new PageResponseOutDto<>();
        paginationResponseDto.setContent(list);
        paginationResponseDto.setPageSize(pageSize);
        paginationResponseDto.setPageNumber(pageNumber);
        paginationResponseDto.setTotalElements(totalFilteredElements);

        int totalPages = (int) Math.ceil((double) totalFilteredElements / pageSize);
        paginationResponseDto.setTotalPages(totalPages);

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

## src/main/java/com/nubo/guarantees/admin/api/helpers/MapperUtil.java

```java
package com.nubo.guarantees.admin.api.helpers;

import com.nubo.guarantees.admin.api.models.dto.response.CountryOutDto;
import com.nubo.guarantees.admin.api.models.dto.response.GuaranteeGlobalAccountOutDto;
import com.nubo.guarantees.admin.api.models.dto.response.GuaranteeParticularAccountOutDto;
import com.nubo.guarantees.admin.api.models.dto.response.GuaranteesOutDto;
import com.nubo.guarantees.admin.api.models.dto.response.IdentificationTypeOutDto;
import com.nubo.guarantees.admin.api.models.dto.response.InvestorOutDto;
import com.nubo.guarantees.admin.api.models.dto.response.ParticipantOutDto;
import com.nubo.guarantees.admin.api.models.dto.response.StatusOutDto;
import com.nubo.guarantees.admin.api.models.dto.response.TypeOutDto;
import com.nubo.guarantees.admin.api.models.entity.CountryEntity;
import com.nubo.guarantees.admin.api.models.entity.GuaranteeGlobalAccountEntity;
import com.nubo.guarantees.admin.api.models.entity.GuaranteeParticularAccountEntity;
import com.nubo.guarantees.admin.api.models.entity.GuaranteesEntity;
import com.nubo.guarantees.admin.api.models.entity.IdentificationTypeEntity;
import com.nubo.guarantees.admin.api.models.entity.InvestorEntity;
import com.nubo.guarantees.admin.api.models.entity.ParticipantEntity;
import com.nubo.guarantees.admin.api.models.entity.StatusEntity;
import com.nubo.guarantees.admin.api.models.entity.TypeEntity;
import org.springframework.util.ObjectUtils;

import java.math.BigDecimal;
import java.util.Collections;
import java.util.List;

public class MapperUtil {

    private MapperUtil() {
    }

    public static GuaranteesOutDto guaranteesEntitytoGuaranteesOutDto(
            GuaranteesEntity guaranteesEntity, BigDecimal position) {
        if (ObjectUtils.isEmpty(guaranteesEntity)) return null;
        return GuaranteesOutDto.builder().id(guaranteesEntity.getId())
                .country(countryEntityToCountryOutDto(guaranteesEntity.getCountry()))
                .participant(participantEntityToParticipantOutDto(guaranteesEntity.getParticipant()))
                .custodian(participantEntityToParticipantOutDto(guaranteesEntity.getCustodian()))
                .investor(investorEntityToInvestorOutDto(guaranteesEntity.getInvestor()))
                .guaranteeType(typeEntityToTypeOutDto(guaranteesEntity.getGuaranteeType()))
                .accountType(typeEntityToTypeOutDto(guaranteesEntity.getAccountType()))
                .position(position)
                .status(statusEntityToStatusOutDto(guaranteesEntity.getStatus()))
                .guaranteeGlobalAccount(guaranteeGlobalAccountEntityToGuaranteeGlobalAccountOutDto(
                        guaranteesEntity.getGuaranteeGlobalAccount()))
                .guaranteeParticularAccount(guaranteeParticularAccountEntityToGuaranteeParticularAccountOutDto(
                        guaranteesEntity.getGuaranteeParticularAccount()))
                .build();
    }

    public static CountryOutDto countryEntityToCountryOutDto(CountryEntity countryEntity) {
        if (ObjectUtils.isEmpty(countryEntity)) return null;
        return CountryOutDto.builder()
                .id(countryEntity.getId())
                .name(countryEntity.getName())
                .code(countryEntity.getCode())
                .build();
    }

    public static ParticipantOutDto participantEntityToParticipantOutDto(ParticipantEntity participantEntity) {
        if (ObjectUtils.isEmpty(participantEntity)) return null;
        return ParticipantOutDto.builder()
                .id(participantEntity.getId())
                .code(participantEntity.getCode())
                .documentNumber((participantEntity.getDocumentNumber()))
                .shortName(participantEntity.getShortName())
                .name(participantEntity.getName())
                .codeAndName(participantEntity.getCode().concat(" ").concat(participantEntity.getName()))
                .build();
    }

    public static InvestorOutDto investorEntityToInvestorOutDto(InvestorEntity investorEntity) {
        if (ObjectUtils.isEmpty(investorEntity)) return null;
        return InvestorOutDto.builder()
                .id(investorEntity.getId())
                .firstName(investorEntity.getFirstName())
                .lastName(investorEntity.getLastName())
                .documentNumber(investorEntity.getDocumentNumber())
                .companyName(investorEntity.getCompanyName())
                .identificationType(identificationTypeEntityToIdentificationTypeOutDto(
                        investorEntity.getIdentificationType()))
                .fullName(investorEntity.getIdentificationType().getCode()
                        .concat(" ")
                        .concat(investorEntity.getDocumentNumber())
                        .concat(" ")
                        .concat(investorEntity.getFirstName())
                        .concat(" ")
                        .concat(investorEntity.getLastName()))
                .build();
    }

    public static IdentificationTypeOutDto identificationTypeEntityToIdentificationTypeOutDto(
            IdentificationTypeEntity identificationTypeEntity) {
        if (ObjectUtils.isEmpty(identificationTypeEntity)) return null;
        return IdentificationTypeOutDto.builder()
                .id(identificationTypeEntity.getId())
                .description(identificationTypeEntity.getDescription())
                .build();
    }

    public static StatusOutDto statusEntityToStatusOutDto(StatusEntity statusEntity) {
        if (ObjectUtils.isEmpty(statusEntity)) return null;
        return StatusOutDto.builder()
                .id(statusEntity.getId())
                .description(statusEntity.getDescription())
                .category(statusEntity.getCategory())
                .detail(statusEntity.getDetail())
                .build();
    }

    public static List<StatusOutDto> statusEntityListToGuaranteesStatusList(List<StatusEntity> statusEntityList) {
        if (statusEntityList == null || statusEntityList.isEmpty()) {
            return Collections.emptyList();
        }
        return statusEntityList.stream()
                .map(MapperUtil::statusEntityToStatusOutDto).toList();
    }

    public static TypeOutDto typeEntityToTypeOutDto(TypeEntity typeEntity) {
        if (ObjectUtils.isEmpty(typeEntity)) return null;
        return TypeOutDto.builder()
                .id(typeEntity.getId())
                .detail(typeEntity.getDetail())
                .build();
    }

    private static GuaranteeGlobalAccountOutDto guaranteeGlobalAccountEntityToGuaranteeGlobalAccountOutDto(
            GuaranteeGlobalAccountEntity guaranteeGlobalAccountEntity) {
        if (ObjectUtils.isEmpty(guaranteeGlobalAccountEntity)) return null;
        return GuaranteeGlobalAccountOutDto.builder()
                .id(guaranteeGlobalAccountEntity.getId())
                .accountCode(guaranteeGlobalAccountEntity.getAccountCode())
                .accountName(guaranteeGlobalAccountEntity.getAccountName())
                .build();
    }

    private static GuaranteeParticularAccountOutDto guaranteeParticularAccountEntityToGuaranteeParticularAccountOutDto(
            GuaranteeParticularAccountEntity guaranteeParticularAccountEntity) {
        if (ObjectUtils.isEmpty(guaranteeParticularAccountEntity)) return null;
        return GuaranteeParticularAccountOutDto.builder()
                .id(guaranteeParticularAccountEntity.getId())
                .accountParticularCode(guaranteeParticularAccountEntity.getAccountParticularCode())
                .build();
    }

}

```

## src/main/java/com/nubo/guarantees/admin/api/helpers/dynamicQuery/dataBase/GuaranteesSpecificationBuilder.java

```java
package com.nubo.guarantees.admin.api.helpers.dynamicQuery.dataBase;

import com.nubo.guarantees.admin.api.models.entity.GuaranteesEntity;
import com.nubo.guarantees.admin.api.models.enums.SearchOperationEnum;
import jakarta.persistence.criteria.Path;
import org.springframework.data.jpa.domain.Specification;

import java.util.ArrayList;
import java.util.List;

public class GuaranteesSpecificationBuilder {

    private final List<Specification<GuaranteesEntity>> specifications = new ArrayList<>();

    public static GuaranteesSpecificationBuilder builder() {
        return new GuaranteesSpecificationBuilder();
    }

    public GuaranteesSpecificationBuilder withCountryId(Long countryId) {
        if (countryId != null) {
            specifications.add((root, query, cb) ->
                    cb.equal(root.get("country").get("id"), countryId));
        }
        return this;
    }

    public GuaranteesSpecificationBuilder withParticipantId(Long participantId) {
        if (participantId != null) {
            specifications.add((root, query, cb) ->
                    cb.equal(root.get("participant").get("id"), participantId));
        }
        return this;
    }

    public GuaranteesSpecificationBuilder withInvestorId(Long investorId) {
        if (investorId != null) {
            specifications.add((root, query, cb) ->
                    cb.equal(root.get("investor").get("id"), investorId));
        }
        return this;
    }

    public GuaranteesSpecificationBuilder withAccountTypeId(Long accountTypeId) {
        if (accountTypeId != null) {
            specifications.add((root, query, cb) ->
                    cb.equal(root.get("accountType").get("id"), accountTypeId));
        }
        return this;
    }

    public GuaranteesSpecificationBuilder withGuaranteeGlobalAccountId(Long guaranteeGlobalAccountId) {
        if (guaranteeGlobalAccountId != null) {
            specifications.add((root, query, cb) ->
                    cb.equal(root.get("guaranteeGlobalAccount").get("id"), guaranteeGlobalAccountId));
        }
        return this;
    }

    public GuaranteesSpecificationBuilder withGuaranteeParticularAccountId(Long guaranteeParticularAccountId) {
        if (guaranteeParticularAccountId != null) {
            specifications.add((root, query, cb) ->
                    cb.equal(root.get("guaranteeParticularAccount").get("id"), guaranteeParticularAccountId));
        }
        return this;
    }

    public GuaranteesSpecificationBuilder withGuaranteeId(Long guaranteeId) {
        if (guaranteeId != null) {
            specifications.add((root, query, cb) ->
                    cb.equal(root.get("id"), guaranteeId));
        }
        return this;
    }

    public GuaranteesSpecificationBuilder withStatusId(Long statusId) {
        if (statusId != null) {
            specifications.add((root, query, cb) ->
                    cb.equal(root.get("status").get("id"), statusId));
        }
        return this;
    }

    public GuaranteesSpecificationBuilder withDynamicFilter(String fieldName, String fieldValue, SearchOperationEnum operation) {
        if (fieldName != null && fieldValue != null && operation != null) {
            specifications.add((root, query, cb) -> {
                try {
                    Path<?> fieldPath = MapperGuaranteesDynamicSearch.getGuaranteesFieldPath(root, fieldName);
                    if (fieldPath != null) {
                        return MapperGuaranteesDynamicSearch.buildGuaranteesFieldPredicate(cb, fieldPath, fieldValue, operation);
                    }
                    return cb.conjunction();
                } catch (Exception e) {
                    return cb.conjunction();
                }
            });
        }
        return this;
    }

    public Specification<GuaranteesEntity> build() {
        return specifications.stream()
                .reduce(Specification.<GuaranteesEntity>anyOf(), Specification::and);
    }
}

```

## src/main/java/com/nubo/guarantees/admin/api/helpers/dynamicQuery/dataBase/GuaranteesSpecificationFactory.java

```java
package com.nubo.guarantees.admin.api.helpers.dynamicQuery.dataBase;

import org.springframework.data.jpa.domain.Specification;

import com.nubo.guarantees.admin.api.models.entity.GuaranteesEntity;
import com.nubo.guarantees.admin.api.models.enums.SearchOperationEnum;

import jakarta.persistence.criteria.Path;

public class GuaranteesSpecificationFactory {
    
    private GuaranteesSpecificationFactory() {
        throw new IllegalStateException("Utility class");
    }

    public static Specification<GuaranteesEntity> createStandardFilter(
            Long countryId, Long participantId, Long investorId, 
            Long guaranteeGlobalAccountId,Long guaranteeParticularAccountId, Long guaranteeId, Long statusId) {
        
        return GuaranteesSpecificationBuilder.builder()
                .withCountryId(countryId)
                .withParticipantId(participantId)
                .withInvestorId(investorId)
                .withGuaranteeGlobalAccountId(guaranteeGlobalAccountId)
                .withGuaranteeId(guaranteeId)
                .withStatusId(statusId)
                .build();
    }

    public static Specification<GuaranteesEntity> createDynamicFilter(
            String fieldName, String fieldValue, SearchOperationEnum operation) {
        
        return (root, query, cb) -> {
            try {
                Path<?> fieldPath = MapperGuaranteesDynamicSearch
                    .getGuaranteesFieldPath(root, fieldName);
                if (fieldPath != null) {
                    return MapperGuaranteesDynamicSearch
                        .buildGuaranteesFieldPredicate(cb, fieldPath, fieldValue, operation);
                }
                return cb.conjunction();
            } catch (Exception e) {
                return cb.conjunction();
            }
        };
    }

    public static Specification<GuaranteesEntity> createCombinedFilter(
            Long countryId, Long participantId, Long investorId, Long accountTypeId,
            Long guaranteeGlobalAccountId,
            Long guaranteeParticularAccountId, Long guaranteeId, Long statusId,
            String fieldName, String fieldValue, SearchOperationEnum operation) {
        
        return GuaranteesSpecificationBuilder.builder()
                .withCountryId(countryId)
                .withParticipantId(participantId)
                .withInvestorId(investorId)
                .withAccountTypeId(accountTypeId)
                .withGuaranteeGlobalAccountId(guaranteeGlobalAccountId)
                .withGuaranteeParticularAccountId(guaranteeParticularAccountId)
                .withGuaranteeId(guaranteeId)
                .withStatusId(statusId)
                .withDynamicFilter(fieldName, fieldValue, operation)
                .build();
    }
}

```

## src/main/java/com/nubo/guarantees/admin/api/helpers/dynamicQuery/dataBase/MapperGuaranteesDynamicSearch.java

```java
package com.nubo.guarantees.admin.api.helpers.dynamicQuery.dataBase;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Map;
import java.util.function.Function;

import com.nubo.guarantees.admin.api.models.entity.GuaranteesEntity;
import com.nubo.guarantees.admin.api.models.enums.SearchOperationEnum;

import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.Path;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class MapperGuaranteesDynamicSearch {

    private enum ComparisonType {
        GREATER_THAN, GREATER_THAN_OR_EQUAL, LESS_THAN, LESS_THAN_OR_EQUAL
    }

    private static final Map<String, Function<Root<GuaranteesEntity>, Path<?>>> FIELD_PATH_MAPPING = Map.ofEntries(
        Map.entry("id", root -> root.get("id")),
        Map.entry("registrationDate", root -> root.get("registrationDate")),
        Map.entry("participantId", root -> root.get("participant").get("id")),
        Map.entry("participantName", root -> root.get("participant").get("name")),
        Map.entry("foundId", root -> root.get("foundId")),
        Map.entry("investorId", root -> root.get("investor").get("id")),
        Map.entry("investorName", root -> root.get("investor").get("name")),
        Map.entry("guaranteeNumber", root -> root.get("guaranteeNumber")),
        Map.entry("statusId", root -> root.get("status").get("id")),
        Map.entry("statusName", root -> root.get("status").get("name")),
        Map.entry("guaranteesAccountId", root -> root.get("guaranteesAccount").get("id")),
        Map.entry("guaranteesAccountName", root -> root.get("guaranteesAccount").get("name")),
        Map.entry("specificAccount", root -> root.get("specificAccount")),
        Map.entry("countryId", root -> root.get("country").get("id")),
        Map.entry("countryName", root -> root.get("country").get("name")),
        Map.entry("countryCode", root -> root.get("country").get("code")),
        Map.entry("guaranteePrice", root -> root.get("guaranteePrice")),
        Map.entry("guaranteeQuantity", root -> root.get("guaranteeQuantity")),
        Map.entry("guaranteeVolume", root -> root.get("guaranteeVolume")),
        Map.entry("lastModifyUser", root -> root.get("lastModifyUser")),
        Map.entry("lastModifyApplication", root -> root.get("lastModifyApplication")),
        Map.entry("lastModifyDate", root -> root.get("lastModifyDate")),
        Map.entry("lastModifyIp", root -> root.get("lastModifyIp"))
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
        Map.entry(SearchOperationEnum.CONTAINS, (cb, path, value) -> {
            if (path.getJavaType() == String.class) {
                return cb.like(cb.lower(path.as(String.class)), "%" + value.toLowerCase() + "%");
            } else {
                return cb.like(cb.concat("", path.as(String.class)), "%" + value + "%");
            }
        }),
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

    public static Path<?> getGuaranteesFieldPath(Root<GuaranteesEntity> root, String fieldName) {
        try {
            Function<Root<GuaranteesEntity>, Path<?>> pathFunction = FIELD_PATH_MAPPING.get(fieldName);
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

    public static Predicate buildGuaranteesFieldPredicate(CriteriaBuilder criteriaBuilder, 
                                                         Path<?> fieldPath, 
                                                         String fieldValue, 
                                                         SearchOperationEnum operation) {
        try {
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
                
                return switch (comparisonType) {
                    case GREATER_THAN -> criteriaBuilder.gt(numberPath, numberValue);
                    case GREATER_THAN_OR_EQUAL -> criteriaBuilder.ge(numberPath, numberValue);
                    case LESS_THAN -> criteriaBuilder.lt(numberPath, numberValue);
                    case LESS_THAN_OR_EQUAL -> criteriaBuilder.le(numberPath, numberValue);
                };
            } else if (Comparable.class.isAssignableFrom(fieldType)) {
                Path<Comparable<Object>> comparablePath = (Path<Comparable<Object>>) fieldPath;
                Comparable<Object> comparableValue = (Comparable<Object>) parsedValue;
                
                return switch (comparisonType) {
                    case GREATER_THAN -> criteriaBuilder.greaterThan(comparablePath, comparableValue);
                    case GREATER_THAN_OR_EQUAL -> criteriaBuilder.greaterThanOrEqualTo(comparablePath, comparableValue);
                    case LESS_THAN -> criteriaBuilder.lessThan(comparablePath, comparableValue);
                    case LESS_THAN_OR_EQUAL -> criteriaBuilder.lessThanOrEqualTo(comparablePath, comparableValue);
                };
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

## src/main/java/com/nubo/guarantees/admin/api/models/dto/request/GuaranteesInDto.java

```java
package com.nubo.guarantees.admin.api.models.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class GuaranteesInDto {

    private Long countryId;

    private Long participantId;

    private Long investorId;

    private Long accountTypeId;

    private Long guaranteeGlobalAccountId;

    private Long guaranteeParticularAccountId;

    private Long statusId;

}

```

## src/main/java/com/nubo/guarantees/admin/api/models/dto/response/CountryOutDto.java

```java
package com.nubo.guarantees.admin.api.models.dto.response;

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

    private String name;

    private String code;

}

```

## src/main/java/com/nubo/guarantees/admin/api/models/dto/response/GuaranteeAccountOutDto.java

```java
package com.nubo.guarantees.admin.api.models.dto.response;

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
public class GuaranteeAccountOutDto {

    private Long consecutiveId;

    private Long guaranteeGlobalAccountId;

    private Long guaranteeParticularAccountId;

    private String fullName;

}

```

## src/main/java/com/nubo/guarantees/admin/api/models/dto/response/GuaranteeGlobalAccountOutDto.java

```java
package com.nubo.guarantees.admin.api.models.dto.response;

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
public class GuaranteeGlobalAccountOutDto {

    private Long id;

    private String accountCode;

    private String accountName;

}

```

## src/main/java/com/nubo/guarantees/admin/api/models/dto/response/GuaranteeParticularAccountOutDto.java

```java
package com.nubo.guarantees.admin.api.models.dto.response;

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
public class GuaranteeParticularAccountOutDto {

    private Long id;

    private String accountParticularCode;

}

```

## src/main/java/com/nubo/guarantees/admin/api/models/dto/response/GuaranteeSpecificAccountDto.java

```java
package com.nubo.guarantees.admin.api.models.dto.response;

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
public class GuaranteeSpecificAccountDto {

    private Long id;

    private String specificAccount;

}

```

## src/main/java/com/nubo/guarantees/admin/api/models/dto/response/GuaranteeTransactionOutDto.java

```java
package com.nubo.guarantees.admin.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
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
@Schema(description = "Response DTO for guarantee transaction details")
public class GuaranteeTransactionOutDto {

    @JsonProperty("guaranteesAccountId")
    @Schema(description = "ID of the guarantee account", example = "1")
    private Long guaranteesAccountId;

    @JsonProperty("guaranteesAccountDescription")
    @Schema(description = "Description of the guarantee account", example = "Cuenta Principal")
    private String guaranteesAccountDescription;

    @JsonProperty("specificAccount")
    @Schema(description = "Specific account identifier", example = "ACC-001")
    private String specificAccount;

    @JsonProperty("clearingDate")
    @Schema(description = "Clearing date", example = "2025-09-10")
    private LocalDate clearingDate;

    @JsonProperty("maturityDate")
    @Schema(description = "Maturity date", example = "2025-12-10")
    private LocalDate maturityDate;

    @JsonProperty("side")
    @Schema(description = "Side information")
    private SideDto side;

    @JsonProperty("assignedQuantity")
    @Schema(description = "Assigned quantity", example = "100.00")
    private BigDecimal assignedQuantity;

    @JsonProperty("currencyRisk")
    @Schema(description = "Currency risk", example = "0.15")
    private BigDecimal currencyRisk;

    @JsonProperty("assignedAmount")
    @Schema(description = "Assigned amount", example = "15000.75")
    private BigDecimal assignedAmount;

    @JsonProperty("guarantee")
    @Schema(description = "Guarantee information")
    private GuaranteeDto guarantee;

    @JsonProperty("trade")
    @Schema(description = "Trade information")
    private TradeDto trade;

    @JsonProperty("fraction")
    @Schema(description = "Fraction", example = "0.5")
    private BigDecimal fraction;

    @JsonProperty("transferBenefits")
    @Schema(description = "Transfer benefits flag", example = "true")
    private Boolean transferBenefits;

    @JsonProperty("balanceBlocking")
    @Schema(description = "Balance blocking flag", example = "false")
    private Boolean balanceBlocking;

    @JsonProperty("holdingSecurity")
    @Schema(description = "Holding security flag", example = "true")
    private Boolean holdingSecurity;

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    @Schema(description = "Side information")
    public static class SideDto {
        @JsonProperty("id")
        @Schema(description = "Side ID", example = "1")
        private Long id;

        @JsonProperty("description")
        @Schema(description = "Side description", example = "Compra")
        private String description;
    }

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    @Schema(description = "Guarantee information")
    public static class GuaranteeDto {
        @JsonProperty("id")
        @Schema(description = "Guarantee ID", example = "123")
        private Long id;
    }

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    @Schema(description = "Trade information")
    public static class TradeDto {
        @JsonProperty("id")
        @Schema(description = "Trade ID", example = "456")
        private Long id;
    }
}

```

## src/main/java/com/nubo/guarantees/admin/api/models/dto/response/GuaranteeValuationOutDto.java

```java
package com.nubo.guarantees.admin.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.math.BigDecimal;

@Data
@Builder
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.ALWAYS)
public class GuaranteeValuationOutDto {

    private BigDecimal guaranteeInteger;

}

```

## src/main/java/com/nubo/guarantees/admin/api/models/dto/response/GuaranteesOutDto.java

```java
package com.nubo.guarantees.admin.api.models.dto.response;

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
public class GuaranteesOutDto {

    private Long id;

    private CountryOutDto country;

    private ParticipantOutDto participant;

    private ParticipantOutDto custodian;

    private InvestorOutDto investor;

    private TypeOutDto guaranteeType;

    private TypeOutDto accountType;

    private String guaranteeAccountDescription;

    private BigDecimal guaranteeIntegerTotal;

    private BigDecimal guaranteeExigencyTotal;

    private BigDecimal position;

    private StatusOutDto status;

    private GuaranteeGlobalAccountOutDto guaranteeGlobalAccount;

    private GuaranteeParticularAccountOutDto guaranteeParticularAccount;

    private BigDecimal limitRV;

    private BigDecimal limitDP;

    private BigDecimal limitPR;

    private BigDecimal limitEF;

    private BigDecimal limitIF;

}

```

## src/main/java/com/nubo/guarantees/admin/api/models/dto/response/IdentificationTypeOutDto.java

```java
package com.nubo.guarantees.admin.api.models.dto.response;

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

    private String code;

    private String description;

}

```

## src/main/java/com/nubo/guarantees/admin/api/models/dto/response/InvestorOutDto.java

```java
package com.nubo.guarantees.admin.api.models.dto.response;

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

    private String firstName;

    private String lastName;

    private String documentNumber;

    private IdentificationTypeOutDto identificationType;

    private String companyName;

    private String fullName;

}

```

## src/main/java/com/nubo/guarantees/admin/api/models/dto/response/PageResponseOutDto.java

```java
package com.nubo.guarantees.admin.api.models.dto.response;


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

## src/main/java/com/nubo/guarantees/admin/api/models/dto/response/ParticipantOutDto.java

```java
package com.nubo.guarantees.admin.api.models.dto.response;

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
public class ParticipantOutDto {

    private Long id;

    private String code;

    private String documentNumber;

    private String name;

    private String shortName;

    private String codeAndName;

}

```

## src/main/java/com/nubo/guarantees/admin/api/models/dto/response/StatusOutDto.java

```java
package com.nubo.guarantees.admin.api.models.dto.response;

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

## src/main/java/com/nubo/guarantees/admin/api/models/dto/response/TypeOutDto.java

```java
package com.nubo.guarantees.admin.api.models.dto.response;

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

    private String detail;

}

```

## src/main/java/com/nubo/guarantees/admin/api/models/entity/ClassEntity.java

```java
package com.nubo.guarantees.admin.api.models.entity;

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
@Table(name = "\"CLASS\"", schema = "\"NUANBODB\"")
public class ClassEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"CLASS_ID\"", length = 2)
    private String id;

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

## src/main/java/com/nubo/guarantees/admin/api/models/entity/CountryEntity.java

```java
package com.nubo.guarantees.admin.api.models.entity;

import jakarta.persistence.*;
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

## src/main/java/com/nubo/guarantees/admin/api/models/entity/CurrencyEntity.java

```java
package com.nubo.guarantees.admin.api.models.entity;

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
    @Column(name = "\"CURRENCY_ID\"")
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

## src/main/java/com/nubo/guarantees/admin/api/models/entity/DepositoryEntity.java

```java
package com.nubo.guarantees.admin.api.models.entity;

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

    @Column(name = "\"CODE\"", length = 80)
    private String code;

    @Column(name = "\"DESCRIPTION\"", length = 80, nullable = false)
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

## src/main/java/com/nubo/guarantees/admin/api/models/entity/GuaranteeGlobalAccountEntity.java

```java
package com.nubo.guarantees.admin.api.models.entity;

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
@Table(name = "\"GUARANTEE_GLOBAL_ACCOUNT\"", schema = "\"NUANBODB\"")
public class GuaranteeGlobalAccountEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"GUARANTEE_GLOBAL_ACCOUNT_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"ACCOUNT_CODE\"")
    private String accountCode;

    @Column(name = "\"ACCOUNT_NAME\"")
    private String accountName;

}

```

## src/main/java/com/nubo/guarantees/admin/api/models/entity/GuaranteeLimitsValuationEntity.java

```java
package com.nubo.guarantees.admin.api.models.entity;

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
@IdClass(GuaranteeValuationKey.class)
@Table(name = "\"GUARANTEE_LIMITS_VALUATION\"", schema = "\"NUANBODB\"")
public class GuaranteeLimitsValuationEntity {

    @Id
    @ManyToOne
    @JoinColumn(name = "\"GUARANTEE_ID\"", nullable = false)
    private GuaranteesEntity guarantee;

    @Id
    @Column(name = "\"VALUATION_DATE\"", nullable = false)
    private LocalDateTime valuationDate;

    @Column(name = "\"PERCENTAGE_LIMITS\"", precision = 10, scale = 4)
    private BigDecimal percentageLimits;

    @Column(name = "\"GUARANTEE_INTEGER\"", precision = 18, scale = 2)
    private BigDecimal guaranteeInteger;

    @Column(name = "\"LIMIT_AMOUNT\"", precision = 18, scale = 2)
    private BigDecimal limitAmount;

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

## src/main/java/com/nubo/guarantees/admin/api/models/entity/GuaranteeParticularAccountEntity.java

```java
package com.nubo.guarantees.admin.api.models.entity;

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
@Table(name = "\"GUARANTEE_PARTICULAR_ACCOUNT\"", schema = "\"NUANBODB\"")
public class GuaranteeParticularAccountEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"GUARANTEE_PARTICULAR_ACCOUNT_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"ACCOUNT_PARTICULAR_CODE\"")
    private String accountParticularCode;

}

```

## src/main/java/com/nubo/guarantees/admin/api/models/entity/GuaranteeTradeEntity.java

```java
package com.nubo.guarantees.admin.api.models.entity;

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
@Table(name = "\"GUARANTEE_TRADE\"", schema = "\"NUANBODB\"")
public class GuaranteeTradeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"GURANTEE_TRADE_ID\"", nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "\"TRADE_ID\"", nullable = false)
    private TradeEntity trade;

    @Column(name = "\"FRACTION\"", nullable = false)
    private Integer fraction;

    @ManyToOne
    @JoinColumn(name = "\"SIDE_ID\"", nullable = false)
    private SideEntity side;

    @ManyToOne
    @JoinColumn(name = "\"PARTICIPANT_ID\"")
    private ParticipantEntity participant;

    @ManyToOne
    @JoinColumn(name = "\"CUSTODIAN_ID\"")
    private ParticipantEntity custodian;

    @ManyToOne
    @JoinColumn(name = "\"INVESTOR_ID\"")
    private InvestorEntity investor;

    @ManyToOne
    @JoinColumn(name = "\"SECURITY_ID\"")
    private SecurityTitleEntity securityTitle;

    @ManyToOne
    @JoinColumn(name = "\"ISIN_NUMBER_ID\"")
    private IsinNumberEntity isinNumber;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"")
    private StatusEntity status;

    @ManyToOne
    @JoinColumn(name = "\"GUARANTEE_ACCOUNT_TYPE_ID\"")
    private TypeEntity guaranteeAccountType;

    @ManyToOne
    @JoinColumn(name = "\"GUARANTEE_GLOBAL_ACCOUNT_ID\"")
    private GuaranteeGlobalAccountEntity guaranteeGlobalAccount;

    @ManyToOne
    @JoinColumn(name = "\"GUARANTEE_PARTICULAR_ACCOUNT_ID\"")
    private GuaranteeParticularAccountEntity guaranteeParticularAccount;

    @Column(name = "\"RISK_MODEL_PRICE\"", precision = 16, scale = 4)
    private BigDecimal riskModelPrice;

    @Column(name = "\"RISK_MODEL_PERCENTAGE\"", precision = 6, scale = 4)
    private BigDecimal riskModelPercentage;

    @Column(name = "\"ASSIGNED_QUANTITY\"", precision = 16, scale = 4)
    private BigDecimal assignedQuantity;

    @Column(name = "\"ASSIGNED_AMOUNT\"", precision = 16, scale = 4)
    private BigDecimal assignedAmount;

    @Column(name = "\"REQUIREMENT_AMOUNT\"", precision = 16, scale = 4)
    private BigDecimal requirementAmount;

    @ManyToOne
    @JoinColumn(name = "\"COUNTRY_ID\"", nullable = false)
    private CountryEntity country;

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

## src/main/java/com/nubo/guarantees/admin/api/models/entity/GuaranteeTransactionEntity.java

```java
package com.nubo.guarantees.admin.api.models.entity;

import jakarta.persistence.*;
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
@Table(name = "\"GUARANTEE_TRANSACTION\"", schema = "\"NUANBODB\"")
public class GuaranteeTransactionEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"TRANSACTION_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"GUARANTEE_ACCOUNT_ID\"", nullable = false)
    private Long guaranteesAccountId;

    @Column(name = "\"GUARANTEE_ACCOUNT_DESCRIPTION\"")
    private String guaranteesAccountDescription;

    @Column(name = "\"SPECIFIC_ACCOUNT\"")
    private String specificAccount;

    @Column(name = "\"CLEARING_DATE\"")
    private LocalDate clearingDate;

    @Column(name = "\"MATURITY_DATE\"")
    private LocalDate maturityDate;

    @Column(name = "\"SIDE_ID\"")
    private Long sideId;

    @Column(name = "\"SIDE_DESCRIPTION\"")
    private String sideDescription;

    @Column(name = "\"ASSIGNED_QUANTITY\"", precision = 18, scale = 4)
    private BigDecimal assignedQuantity;

    @Column(name = "\"CURRENCY_RISK\"", precision = 10, scale = 6)
    private BigDecimal currencyRisk;

    @Column(name = "\"ASSIGNED_AMOUNT\"", precision = 18, scale = 4)
    private BigDecimal assignedAmount;

    @Column(name = "\"GUARANTEE_ID\"", nullable = false)
    private Long guaranteeId;

    @Column(name = "\"TRADE_ID\"")
    private Long tradeId;

    @Column(name = "\"FRACTION\"", precision = 10, scale = 6)
    private BigDecimal fraction;

    @Column(name = "\"TRANSFER_BENEFITS\"")
    private Boolean transferBenefits;

    @Column(name = "\"BALANCE_BLOCKING\"")
    private Boolean balanceBlocking;

    @Column(name = "\"HOLDING_SECURITY\"")
    private Boolean holdingSecurity;

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

## src/main/java/com/nubo/guarantees/admin/api/models/entity/GuaranteeValuationEntity.java

```java
package com.nubo.guarantees.admin.api.models.entity;

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
@IdClass(GuaranteeValuationKey.class)
@Table(name = "\"GUARANTEE_VALUATION\"", schema = "\"NUANBODB\"")
public class GuaranteeValuationEntity {

    @Id
    @ManyToOne
    @JoinColumn(name = "\"GUARANTEE_ID\"", nullable = false)
    private GuaranteesEntity guarantee;

    @Id
    @Column(name = "\"VALUATION_DATE\"", nullable = false)
    private LocalDateTime valuationDate;

    @Column(name = "\"GUARANTEE_INTEGER\"", precision = 18, scale = 2, nullable = false)
    private BigDecimal guaranteeInteger;

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

## src/main/java/com/nubo/guarantees/admin/api/models/entity/GuaranteeValuationKey.java

```java
package com.nubo.guarantees.admin.api.models.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class GuaranteeValuationKey implements Serializable {

    private Long guarantee;

    private LocalDateTime valuationDate;

}

```

## src/main/java/com/nubo/guarantees/admin/api/models/entity/GuaranteesAccountEntity.java

```java
package com.nubo.guarantees.admin.api.models.entity;

import jakarta.persistence.*;
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
@Table(name = "\"GUARANTEE_ACCOUNT\"", schema = "\"NUANBODB\"")
public class GuaranteesAccountEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"GUARANTEE_ACCOUNT_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"CODE\"")
    private Integer code;

    @Column(name = "\"NAME\"", length = 255, nullable = false)
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

## src/main/java/com/nubo/guarantees/admin/api/models/entity/GuaranteesEntity.java

```java
package com.nubo.guarantees.admin.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;
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
@Table(name = "\"GUARANTEE\"", schema = "\"NUANBODB\"")
public class GuaranteesEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"GUARANTEE_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"REGISTRATION_DATE\"")
    private LocalDate registrationDate;

    @ManyToOne
    @JoinColumn(name = "\"PARTICIPANT_ID\"")
    private ParticipantEntity participant;

    @ManyToOne
    @JoinColumn(name = "\"CUSTODIAN_ID\"")
    private ParticipantEntity custodian;

    @Column(name = "\"FOUND_ID\"")
    private Integer foundId;

    @ManyToOne
    @JoinColumn(name = "\"INVESTOR_ID\"", nullable = false)
    private InvestorEntity investor;

    @ManyToOne
    @JoinColumn(name = "\"INVESTOR_ACCOUNT_ID\"")
    private InvestorAccountEntity investorAccount;

    @Column(name = "\"GUARANTEE_NUMBER\"")
    private String guaranteeNumber;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"", nullable = false)
    private StatusEntity status;

    @ManyToOne
    @JoinColumn(name = "\"DEPOSITORY_ID\"", nullable = false)
    private DepositoryEntity depository;

    @ManyToOne
    @JoinColumn(name = "\"MARKET_ID\"")
    private MarketEntity market;

    @ManyToOne
    @JoinColumn(name = "\"COUNTRY_ID\"", nullable = false)
    private CountryEntity country;

    @ManyToOne
    @JoinColumn(name = "\"SECURITY_ID\"")
    private SecurityTitleEntity securityTitle;

    @Column(name = "\"GUARANTEE_PRICE\"", precision = 16, scale = 4)
    private BigDecimal guaranteePrice;

    @Column(name = "\"GUARANTEE_QUANTITY\"", precision = 18, scale = 4)
    private BigDecimal guaranteeQuantity;

    @Column(name = "\"GUARANTEE_VOLUME\"", precision = 18, scale = 4)
    private BigDecimal guaranteeVolume;

    @ManyToOne
    @JoinColumn(name = "\"GUARANTEE_TYPE_ID\"")
    private TypeEntity guaranteeType;

    @ManyToOne
    @JoinColumn(name = "\"ACCOUNT_TYPE_ID\"")
    private TypeEntity accountType;

    @ManyToOne
    @JoinColumn(name = "\"ISIN_NUMBER_ID\"")
    private IsinNumberEntity isinNumber;

    @ManyToOne
    @JoinColumn(name = "\"GUARANTEE_GLOBAL_ACCOUNT_ID\"")
    private GuaranteeGlobalAccountEntity guaranteeGlobalAccount;

    @ManyToOne
    @JoinColumn(name = "\"GUARANTEE_PARTICULAR_ACCOUNT_ID\"")
    private GuaranteeParticularAccountEntity guaranteeParticularAccount;

    @Column(name = "\"LAST_MODIFY_USER\"", nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", nullable = false)
    private String lastModifyIp;

    @Transient
    GuaranteeValuationEntity guaranteeValuation;
}

```

## src/main/java/com/nubo/guarantees/admin/api/models/entity/IdentificationTypeEntity.java

```java
package com.nubo.guarantees.admin.api.models.entity;

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

    @Column(name = "\"CODE\"", length = 3)
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

## src/main/java/com/nubo/guarantees/admin/api/models/entity/InvestorAccountEntity.java

```java
package com.nubo.guarantees.admin.api.models.entity;

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

    @Column(name = "\"ACCOUNT_NUMBER\"", length = 50)
    private String accountNumber;

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

## src/main/java/com/nubo/guarantees/admin/api/models/entity/InvestorEntity.java

```java
package com.nubo.guarantees.admin.api.models.entity;

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

    @Column(name = "\"DOCUMENT_NUMBER\"", length = 20)
    private String documentNumber;

    @ManyToOne
    @JoinColumn(name = "\"IDENTIFICATION_TYPE_ID\"", nullable = false)
    private IdentificationTypeEntity identificationType;

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

## src/main/java/com/nubo/guarantees/admin/api/models/entity/IsinNumberEntity.java

```java
package com.nubo.guarantees.admin.api.models.entity;

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
@Table(name = "\"ISIN_NUMBER\"", schema = "\"NUANBODB\"")
public class IsinNumberEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"ISIN_NUMBER_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"ISIN_NUMBER\"")
    private String isinNumber;

    @ManyToOne
    @JoinColumn(name = "\"COUNTRY_ID\"")
    private CountryEntity country;

    @ManyToOne
    @JoinColumn(name = "\"CURRENCY_ID\"")
    private CurrencyEntity currency;

    @ManyToOne
    @JoinColumn(name = "\"SECURITY_ID\"")
    private SecurityTitleEntity securityTitle;

    @ManyToOne
    @JoinColumn(name = "\"MARKET_ID\"")
    private MarketEntity market;

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

}

```

## src/main/java/com/nubo/guarantees/admin/api/models/entity/MarketEntity.java

```java
package com.nubo.guarantees.admin.api.models.entity;

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

    @Column(name = "\"DESCRIPTION\"", length = 80, nullable = false)
    private String description;

    @Column(name = "\"CATEGORY\"", length = 50, nullable = false)
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

## src/main/java/com/nubo/guarantees/admin/api/models/entity/ParticipantEntity.java

```java
package com.nubo.guarantees.admin.api.models.entity;

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
@Table(name = "\"PARTICIPANT\"", schema = "\"NUANBODB\"")
public class ParticipantEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"PARTICIPANT_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"CODE\"", nullable = false)
    private String code;

    @Column(name = "\"DOCUMENT_NUMBER\"", length = 20, nullable = false)
    private String documentNumber;

    @Column(name = "\"NAME\"", nullable = false)
    private String name;

    @Column(name = "\"SHORT_NAME\"", nullable = false)
    private String shortName;

    @Column(name = "\"CUSTODIAN\"")
    private Boolean custodian;

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

## src/main/java/com/nubo/guarantees/admin/api/models/entity/PermissionEntity.java

```java
package com.nubo.guarantees.admin.api.models.entity;

import jakarta.persistence.CascadeType;
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
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"PERMISSION\"", schema = "\"NUANBODB\"")
public class PermissionEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"PERMISSION_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"NAME\"", length = 80)
    private String name;

    @Column(name = "\"DESCRIPTION\"", length = 120)
    private String description;

    @Column(name = "\"URL\"", length = 100)
    private String url;

    @Column(name = "\"LEVEL\"")
    private Integer level;

    @Column(name = "\"COLLAPSIBLE\"")
    private Boolean collapsible;

    @Column(name = "\"ORDER_ITEM\"")
    private Integer orderItem;

    @Column(name = "\"ENABLED\"")
    private Boolean enabled;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "\"PARENT_ID\"")
    private PermissionEntity parent;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "\"PROFILE_PERMISSION\"",
            schema = "\"NUANBODB\"",
            joinColumns = @JoinColumn(name = "\"PERMISSION_ID\""),
            inverseJoinColumns = @JoinColumn(name = "\"PROFILE_ID\"")
    )
    private List<ProfileEntity> profiles;

    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    @OneToMany(mappedBy = "parent", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<PermissionEntity> items;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 50, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 50, nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50, nullable = false)
    private String lastModifyIp;

}

```

## src/main/java/com/nubo/guarantees/admin/api/models/entity/ProfileEntity.java

```java
package com.nubo.guarantees.admin.api.models.entity;

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

}


```

## src/main/java/com/nubo/guarantees/admin/api/models/entity/SecurityTitleEntity.java

```java
package com.nubo.guarantees.admin.api.models.entity;

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
    @JoinColumn(name = "\"CURRENCY_ID\"", nullable = false)
    private CurrencyEntity currency;

    @Column(name = "\"SETTLEMENT_PERIOD\"", length = 2, nullable = false)
    private String settlementPeriod;

    @Column(name = "\"LISTING_DATE\"", nullable = false)
    private LocalDateTime listingDate;

    @Column(name = "\"DELISTING_DATE\"", nullable = false)
    private LocalDate deListingDate;

    @Column(name = "\"PARENT\"")
    private Boolean parent;

    @Column(name = "\"PARENT_ID\"")
    private Long parentId;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"", nullable = false)
    private StatusEntity status;

    @Column(name = "\"ISSUER_ID\"", nullable = false)
    private Integer issuerId;

    @ManyToOne
    @JoinColumn(name = "\"COUNTRY_ID\"", nullable = false)
    private CountryEntity country;

    @Column(name = "\"AMOUNT_ISSUED\"", precision = 20, nullable = false)
    private BigInteger amountIssued;

    @ManyToOne
    @JoinColumn(name = "\"CLASS_ID\"", nullable = false)
    private ClassEntity classEntity;

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

## src/main/java/com/nubo/guarantees/admin/api/models/entity/SettlementEntity.java

```java
package com.nubo.guarantees.admin.api.models.entity;

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
    @JoinColumn(name = "\"CUSTODIAN_STATUS_ID\"")
    private StatusEntity custodianStatus;

    @ManyToOne
    @JoinColumn(name = "\"SETTLEMENT_STATUS_ID\"")
    private StatusEntity settlementStatus;

    @Column(name = "\"REJECTION_REASON\"", length = 250, nullable = false)
    private String rejectionReason;

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

## src/main/java/com/nubo/guarantees/admin/api/models/entity/SettlementKey.java

```java
package com.nubo.guarantees.admin.api.models.entity;

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

## src/main/java/com/nubo/guarantees/admin/api/models/entity/SideEntity.java

```java
package com.nubo.guarantees.admin.api.models.entity;

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

## src/main/java/com/nubo/guarantees/admin/api/models/entity/StatusEntity.java

```java
package com.nubo.guarantees.admin.api.models.entity;

import jakarta.persistence.*;
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
    @Column(name = "\"STATUS_ID\"")
    private Long id;

    @Column(name = "\"DESCRIPTION\"", length = 80)
    private String description;

    @Column(name = "\"CATEGORY\"", length = 30)
    private String category;

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

## src/main/java/com/nubo/guarantees/admin/api/models/entity/TradeEntity.java

```java
package com.nubo.guarantees.admin.api.models.entity;

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

    @ManyToOne
    @JoinColumn(name = "\"CURRENCY_ID\"", nullable = false)
    private CurrencyEntity currency;

    @ManyToOne
    @JoinColumn(name = "\"COUNTRY_ID\"", nullable = false)
    private CurrencyEntity country;

    @ManyToOne
    @JoinColumn(name = "\"TYPE_ID\"", nullable = false)
    private TypeEntity type;

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

## src/main/java/com/nubo/guarantees/admin/api/models/entity/TypeEntity.java

```java
package com.nubo.guarantees.admin.api.models.entity;

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

## src/main/java/com/nubo/guarantees/admin/api/models/enums/CountryEnum.java

```java
package com.nubo.guarantees.admin.api.models.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Arrays;
import java.util.Objects;

@Getter
@RequiredArgsConstructor
public enum CountryEnum {

    CHILE(35L),
    COLOMBIA(37L),
    PERU(135L);

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

## src/main/java/com/nubo/guarantees/admin/api/models/enums/MarketEnum.java

```java
package com.nubo.guarantees.admin.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum MarketEnum {

    RV("1"),
    DP("70"),
    PR("71"),
    IF("72"),
    EF("9");

    private final String id;

}

```

## src/main/java/com/nubo/guarantees/admin/api/models/enums/ParticipantEnum.java

```java
package com.nubo.guarantees.admin.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum ParticipantEnum {

    PARTICIPANT("participant"),
    CUSTODIAN("custodian");

    private final String value;
}


```

## src/main/java/com/nubo/guarantees/admin/api/models/enums/PropertiesEnum.java

```java
package com.nubo.guarantees.admin.api.models.enums;

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

## src/main/java/com/nubo/guarantees/admin/api/models/enums/SearchOperationEnum.java

```java
package com.nubo.guarantees.admin.api.models.enums;

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

    public static SearchOperationEnum fromValue(String value) {
        for (SearchOperationEnum operation : values()) {
            if (operation.value.equals(value)) {
                return operation;
            }
        }
        return null;
    }
}

```

## src/main/java/com/nubo/guarantees/admin/api/models/enums/StatusCategoryEnum.java

```java
package com.nubo.guarantees.admin.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum StatusCategoryEnum {

    GUARANTEES_ADMIN("GARANTIA_ADMIN");

    private final String value;
}


```

## src/main/java/com/nubo/guarantees/admin/api/models/enums/StatusGuaranteeAdmEnum.java

```java
package com.nubo.guarantees.admin.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum StatusGuaranteeAdmEnum {

    COVERED(148L),
    PENDING(149L);

    private final Long id;
}

```

## src/main/java/com/nubo/guarantees/admin/api/models/enums/StatusTradeCustodianEnum.java

```java
package com.nubo.guarantees.admin.api.models.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Arrays;
import java.util.Objects;

@Getter
@RequiredArgsConstructor
public enum StatusTradeCustodianEnum {

    TRANSFER(1071L),
    PRE_MATCH(1072L),
    ADMITTED(1073L);

    private final Long value;

    @JsonValue
    public Long getValue() {
        return value;
    }

    @JsonCreator
    public static StatusTradeCustodianEnum fromValue(Long value) {
        return Arrays.stream(StatusTradeCustodianEnum.values())
                .filter(status -> Objects.equals(status.value, value))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Unknown value: " + value));
    }

}

```

## src/main/java/com/nubo/guarantees/admin/api/models/enums/TypeAccountEnum.java

```java
package com.nubo.guarantees.admin.api.models.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Arrays;
import java.util.Objects;

@Getter
@RequiredArgsConstructor
public enum TypeAccountEnum {

    GENERAL_ACCOUNT(760L),
    SPECIFIC_ACCOUNT(761L);

    private final Long value;

    @JsonValue
    public Long getValue() {
        return value;
    }

    @JsonCreator
    public static TypeAccountEnum fromValue(Long value) {
        return Arrays.stream(TypeAccountEnum.values())
                .filter(status -> Objects.equals(status.value, value))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Unknown value: " + value));
    }

}

```

## src/main/java/com/nubo/guarantees/admin/api/models/enums/TypeCategoryEnum.java

```java
package com.nubo.guarantees.admin.api.models.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Arrays;
import java.util.Objects;

@Getter
@RequiredArgsConstructor
public enum TypeCategoryEnum {

    TYPE_ACCOUNT_GUARANTEE("TIPO CUENTA GARANTIA");

    private final String value;

    @JsonValue
    public String getValue() {
        return value;
    }

    @JsonCreator
    public static TypeCategoryEnum fromValue(String value) {
        return Arrays.stream(TypeCategoryEnum.values())
                .filter(side -> Objects.equals(side.value, value))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Unknown value: " + value));
    }

}

```

## src/main/java/com/nubo/guarantees/admin/api/models/enums/VersionApiEnum.java

```java
package com.nubo.guarantees.admin.api.models.enums;

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

## src/main/java/com/nubo/guarantees/admin/api/repository/CountryRepository.java

```java
package com.nubo.guarantees.admin.api.repository;

import com.nubo.guarantees.admin.api.models.entity.CountryEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CountryRepository extends JpaRepository<CountryEntity, Long> {

    @Query("SELECT c FROM CountryEntity c WHERE c.id IN :ids")
    List<CountryEntity> findCountriesByIds(List<Long> ids);

}

```

## src/main/java/com/nubo/guarantees/admin/api/repository/GuaranteeAccountRepository.java

```java
package com.nubo.guarantees.admin.api.repository;

import com.nubo.guarantees.admin.api.models.entity.GuaranteesAccountEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GuaranteeAccountRepository extends JpaRepository<GuaranteesAccountEntity, Long> {
}

```

## src/main/java/com/nubo/guarantees/admin/api/repository/GuaranteeGlobalAccountRepository.java

```java
package com.nubo.guarantees.admin.api.repository;

import com.nubo.guarantees.admin.api.models.entity.GuaranteeGlobalAccountEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface GuaranteeGlobalAccountRepository extends JpaRepository<GuaranteeGlobalAccountEntity, Long>,
        JpaSpecificationExecutor<GuaranteeGlobalAccountEntity> {
}

```

## src/main/java/com/nubo/guarantees/admin/api/repository/GuaranteeParticularAccountRepository.java

```java
package com.nubo.guarantees.admin.api.repository;

import com.nubo.guarantees.admin.api.models.entity.GuaranteeParticularAccountEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface GuaranteeParticularAccountRepository extends JpaRepository<GuaranteeParticularAccountEntity, Long>,
        JpaSpecificationExecutor<GuaranteeParticularAccountEntity> {
}

```

## src/main/java/com/nubo/guarantees/admin/api/repository/GuaranteesRepository.java

```java
package com.nubo.guarantees.admin.api.repository;

import com.nubo.guarantees.admin.api.models.entity.GuaranteesEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.math.BigDecimal;
import java.util.List;

public interface GuaranteesRepository extends JpaRepository<GuaranteesEntity, Long>, JpaSpecificationExecutor<GuaranteesEntity> {

    @Query("""
                SELECT COALESCE(SUM(v.guaranteeInteger), 0)
                FROM GuaranteeValuationEntity v
                WHERE v.guarantee IN (
                    SELECT g
                    FROM GuaranteesEntity g
                    WHERE (
                             :participantId IS NULL
                             OR (
                                    g.participant.id = :participantId
                                    AND :custodianId IS NULL
                                    AND g.custodian.id IS NULL
                                )
                           )
                      AND (:custodianId IS NULL OR g.custodian.id = :custodianId)
                      AND (:investorId IS NULL OR g.investor.id = :investorId)
                      AND (:guaranteeGlobalAccountId IS NULL OR g.guaranteeGlobalAccount.id = :guaranteeGlobalAccountId)
                      AND (:guaranteeParticularAccountId IS NULL OR g.guaranteeParticularAccount.id = :guaranteeParticularAccountId)
                )
                AND v.valuationDate = (
                    SELECT MAX(v2.valuationDate)
                    FROM GuaranteeValuationEntity v2
                    WHERE v2.guarantee = v.guarantee
                )
            """)
    BigDecimal sumGuaranteeIntegerByFilters(
            @Param("participantId") Long participantId,
            @Param("custodianId") Long custodianId,
            @Param("investorId") Long investorId,
            @Param("guaranteeGlobalAccountId") Long guaranteeGlobalAccountId,
            @Param("guaranteeParticularAccountId") Long guaranteeParticularAccountId
    );

    @Query("""
                SELECT COALESCE(SUM(gt.requirementAmount), 0)
                FROM GuaranteeTradeEntity gt
                JOIN SettlementEntity s
                  ON s.trade = gt.trade
                 AND s.fraction = gt.fraction
                 AND s.side = gt.side
                WHERE (:participantId IS NULL OR gt.participant.id = :participantId
                        AND (:participantId IS NOT NULL AND :custodianId IS NULL AND gt.custodian.id IS NULL))
                  AND (:custodianId IS NULL OR gt.custodian.id = :custodianId)
                  AND (:investorId IS NULL OR gt.investor.id = :investorId)
                  AND (:guaranteeGlobalAccountId IS NULL OR gt.guaranteeGlobalAccount.id = :guaranteeGlobalAccountId)
                  AND (:guaranteeParticularAccountId IS NULL OR gt.guaranteeParticularAccount.id = :guaranteeParticularAccountId)
                  AND (:custodianTradeStatusIds IS NULL OR s.custodianStatus.id IN :custodianTradeStatusIds)
            """)
    BigDecimal sumGuaranteeExigencyByFilters(
            @Param("participantId") Long participantId,
            @Param("custodianId") Long custodianId,
            @Param("investorId") Long investorId,
            @Param("guaranteeGlobalAccountId") Long guaranteeGlobalAccountId,
            @Param("guaranteeParticularAccountId") Long guaranteeParticularAccountId,
            @Param("custodianTradeStatusIds") List<Long> custodianTradeStatusIds
    );

    @Query("""
                SELECT COALESCE(SUM(v.limitAmount), 0)
                FROM GuaranteeLimitsValuationEntity v
                WHERE v.guarantee IN (
                    SELECT g
                    FROM GuaranteesEntity g
                    WHERE (
                             :participantId IS NULL
                             OR (
                                    g.participant.id = :participantId
                                    AND :custodianId IS NULL
                                    AND g.custodian.id IS NULL
                                )
                           )
                      AND (:custodianId IS NULL OR g.custodian.id = :custodianId)
                      AND (:investorId IS NULL OR g.investor.id = :investorId)
                      AND (:guaranteeGlobalAccountId IS NULL OR g.guaranteeGlobalAccount.id = :guaranteeGlobalAccountId)
                      AND (:guaranteeParticularAccountId IS NULL OR g.guaranteeParticularAccount.id = :guaranteeParticularAccountId)
                      AND (:marketId IS NULL OR g.isinNumber.market.id = :marketId)
                )
                AND v.valuationDate = (
                    SELECT MAX(v2.valuationDate)
                    FROM GuaranteeLimitsValuationEntity v2
                    WHERE v2.guarantee = v.guarantee
                )
            """)
    BigDecimal sumGuaranteeLimitsByFilters(
            @Param("participantId") Long participantId,
            @Param("custodianId") Long custodianId,
            @Param("investorId") Long investorId,
            @Param("guaranteeGlobalAccountId") Long guaranteeGlobalAccountId,
            @Param("guaranteeParticularAccountId") Long guaranteeParticularAccountId,
            @Param("marketId") String marketId
    );

}

```

## src/main/java/com/nubo/guarantees/admin/api/repository/InvestorRepository.java

```java
package com.nubo.guarantees.admin.api.repository;

import com.nubo.guarantees.admin.api.models.entity.InvestorEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface InvestorRepository extends JpaRepository<InvestorEntity, Long>,
        JpaSpecificationExecutor<InvestorEntity> {
}

```

## src/main/java/com/nubo/guarantees/admin/api/repository/ParticipantRepository.java

```java
package com.nubo.guarantees.admin.api.repository;

import com.nubo.guarantees.admin.api.models.entity.ParticipantEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface ParticipantRepository extends JpaRepository<ParticipantEntity, Long>,
        JpaSpecificationExecutor<ParticipantEntity> {
}

```

## src/main/java/com/nubo/guarantees/admin/api/repository/StatusRepository.java

```java
package com.nubo.guarantees.admin.api.repository;

import com.nubo.guarantees.admin.api.models.entity.StatusEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface StatusRepository extends JpaRepository<StatusEntity, Long> {

    @Query("SELECT s FROM StatusEntity s WHERE UPPER(s.category) = :category")
    List<StatusEntity> findAllGuaranteesStatus(String category);

}

```

## src/main/java/com/nubo/guarantees/admin/api/repository/TypeRepository.java

```java
package com.nubo.guarantees.admin.api.repository;

import com.nubo.guarantees.admin.api.models.entity.TypeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TypeRepository extends JpaRepository<TypeEntity, Long> {

    @Query("SELECT t FROM TypeEntity t WHERE t.category = :category")
    List<TypeEntity> findByCategory(String category);

}

```

## src/main/java/com/nubo/guarantees/admin/api/service/CountryService.java

```java
package com.nubo.guarantees.admin.api.service;

import com.nubo.guarantees.admin.api.models.dto.response.CountryOutDto;

import java.util.List;

public interface CountryService {

    List<CountryOutDto> findCountries();

}

```

## src/main/java/com/nubo/guarantees/admin/api/service/GuaranteeAccountService.java

```java
package com.nubo.guarantees.admin.api.service;

import com.nubo.guarantees.admin.api.models.dto.response.GuaranteeAccountOutDto;
import com.nubo.guarantees.admin.api.models.dto.response.PageResponseOutDto;
import com.nubo.guarantees.admin.api.models.dto.response.TypeOutDto;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface GuaranteeAccountService {

    List<TypeOutDto> findTypeAccountGuarantees();

    PageResponseOutDto<GuaranteeAccountOutDto> findAllGuaranteesAccount(Long accountTypeId,
                                                                        String text, Pageable pageable);

    PageResponseOutDto<GuaranteeAccountOutDto> findAllGuaranteesAccount(Long accountTypeId, String text, int page, int size, String sort, String order, boolean all);

}

```

## src/main/java/com/nubo/guarantees/admin/api/service/GuaranteesService.java

```java
package com.nubo.guarantees.admin.api.service;

import org.springframework.data.domain.Pageable;

import com.nubo.guarantees.admin.api.models.dto.request.GuaranteesInDto;
import com.nubo.guarantees.admin.api.models.dto.response.GuaranteesOutDto;
import com.nubo.guarantees.admin.api.models.dto.response.PageResponseOutDto;

public interface GuaranteesService {
    PageResponseOutDto<GuaranteesOutDto> findAllGuarantees(Pageable pageable, GuaranteesInDto
            guaranteesInDto);

    PageResponseOutDto<GuaranteesOutDto> findAllGuarantees(GuaranteesInDto guaranteesInDto, int page, int size, String sort, String order, boolean all);

    PageResponseOutDto<GuaranteesOutDto> findPagedDataGuaranteesByFiltersDynamic(
            Pageable pageable,
            String fieldName,
            String fieldValue,
            String operation,
            Long countryId,
            Long participantId,
            Long investorId,
            Long accountTypeId,
            Long guaranteeGlobalAccountId,
            Long guaranteeParticularAccountId,
            Long guaranteeId,
            Long statusId);
}

```

## src/main/java/com/nubo/guarantees/admin/api/service/InvestorService.java

```java
package com.nubo.guarantees.admin.api.service;

import com.nubo.guarantees.admin.api.models.dto.response.InvestorOutDto;
import com.nubo.guarantees.admin.api.models.dto.response.PageResponseOutDto;
import org.springframework.data.domain.Pageable;

public interface InvestorService {

    PageResponseOutDto<InvestorOutDto> findByInvestor(String text, Pageable pageable);

    PageResponseOutDto<InvestorOutDto> findByInvestor(String text, int page, int size, String sort, String order, boolean all);

}

```

## src/main/java/com/nubo/guarantees/admin/api/service/ParticipantService.java

```java
package com.nubo.guarantees.admin.api.service;

import com.nubo.guarantees.admin.api.models.dto.response.PageResponseOutDto;
import com.nubo.guarantees.admin.api.models.dto.response.ParticipantOutDto;
import org.springframework.data.domain.Pageable;

public interface ParticipantService {

    PageResponseOutDto<ParticipantOutDto> findByParticipant(String text, Pageable pageable);

    PageResponseOutDto<ParticipantOutDto> findByParticipant(String text, int page, int size, String sort, String order, boolean all);

}

```

## src/main/java/com/nubo/guarantees/admin/api/service/StatusService.java

```java
package com.nubo.guarantees.admin.api.service;

import com.nubo.guarantees.admin.api.models.dto.response.StatusOutDto;

import java.util.List;

public interface StatusService {
    List<StatusOutDto> findAllGuaranteesStatus();
}

```

## src/main/java/com/nubo/guarantees/admin/api/service/impl/CountryServiceImpl.java

```java
package com.nubo.guarantees.admin.api.service.impl;

import com.nubo.guarantees.admin.api.application.properties.PropertiesContext;
import com.nubo.guarantees.admin.api.exception.ServiceException;
import com.nubo.guarantees.admin.api.exception.error.ErrorCode;
import com.nubo.guarantees.admin.api.helpers.MapperUtil;
import com.nubo.guarantees.admin.api.models.dto.response.CountryOutDto;
import com.nubo.guarantees.admin.api.models.enums.CountryEnum;
import com.nubo.guarantees.admin.api.models.enums.VersionApiEnum;
import com.nubo.guarantees.admin.api.repository.CountryRepository;
import com.nubo.guarantees.admin.api.service.CountryService;
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
        countries.add(CountryEnum.CHILE.getValue());
        countries.add(CountryEnum.COLOMBIA.getValue());
        countries.add(CountryEnum.PERU.getValue());

        List<CountryOutDto> countryOutDto = countryRepository.findCountriesByIds(countries).stream()
                .map(MapperUtil::countryEntityToCountryOutDto)
                .toList();

        log.info("End method findCountriesV1, number of countries found: {}", countryOutDto.size());

        return countryOutDto;
    }

}

```

## src/main/java/com/nubo/guarantees/admin/api/service/impl/GuaranteeAccountServiceImpl.java

```java
package com.nubo.guarantees.admin.api.service.impl;

import com.nubo.guarantees.admin.api.application.properties.PropertiesContext;
import com.nubo.guarantees.admin.api.exception.ServiceException;
import com.nubo.guarantees.admin.api.exception.error.ErrorCode;
import com.nubo.guarantees.admin.api.helpers.MapperPageUtil;
import com.nubo.guarantees.admin.api.helpers.MapperUtil;
import com.nubo.guarantees.admin.api.models.dto.response.GuaranteeAccountOutDto;
import com.nubo.guarantees.admin.api.models.dto.response.PageResponseOutDto;
import com.nubo.guarantees.admin.api.models.dto.response.TypeOutDto;
import com.nubo.guarantees.admin.api.models.entity.GuaranteeGlobalAccountEntity;
import com.nubo.guarantees.admin.api.models.entity.GuaranteeParticularAccountEntity;
import com.nubo.guarantees.admin.api.models.entity.GuaranteesEntity;
import com.nubo.guarantees.admin.api.models.entity.TypeEntity;
import com.nubo.guarantees.admin.api.models.enums.TypeAccountEnum;
import com.nubo.guarantees.admin.api.models.enums.TypeCategoryEnum;
import com.nubo.guarantees.admin.api.models.enums.VersionApiEnum;
import com.nubo.guarantees.admin.api.repository.GuaranteeGlobalAccountRepository;
import com.nubo.guarantees.admin.api.repository.GuaranteeParticularAccountRepository;
import com.nubo.guarantees.admin.api.repository.TypeRepository;
import com.nubo.guarantees.admin.api.service.GuaranteeAccountService;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import jakarta.persistence.criteria.Subquery;
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
import java.util.concurrent.atomic.AtomicLong;

@Service
@RequiredArgsConstructor
@Slf4j
public class GuaranteeAccountServiceImpl implements GuaranteeAccountService {

    private final GuaranteeParticularAccountRepository guaranteeParticularAccountRepository;
    private final GuaranteeGlobalAccountRepository guaranteeGlobalAccountRepository;
    private final TypeRepository typeRepository;

    @Override
    public List<TypeOutDto> findTypeAccountGuarantees() {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findTypeAccountGuaranteesV1();
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<TypeOutDto> findTypeAccountGuaranteesV1() {
        log.info("Start method findTypeAccountGuaranteesV1");

        List<TypeEntity> typeEntityList = typeRepository
                .findByCategory(TypeCategoryEnum.TYPE_ACCOUNT_GUARANTEE.getValue());

        List<TypeOutDto> typeOutDtoList = typeEntityList.stream()
                .map(MapperUtil::typeEntityToTypeOutDto).filter(Objects::nonNull)
                .toList();

        log.debug("End method findTypeAccountGuaranteesV1, typeOutDtoList -> {}", typeOutDtoList);

        return typeOutDtoList;
    }

    @Override
    public PageResponseOutDto<GuaranteeAccountOutDto> findAllGuaranteesAccount(Long accountTypeId, String text, Pageable pageable) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllGuaranteesAccountV1(accountTypeId, text, pageable);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<GuaranteeAccountOutDto> findAllGuaranteesAccountV1(Long accountTypeId, String text, Pageable pageable) {
        log.info("Start method findAllGuaranteesAccountV1");

        List<GuaranteeAccountOutDto> guaranteeAccountOutDtoList;

        AtomicLong consecutiveIdCounter = new AtomicLong(1);
        if (TypeAccountEnum.GENERAL_ACCOUNT.getValue().equals(accountTypeId)) {
            Page<GuaranteeGlobalAccountEntity> guaranteeGlobalAccountEntityPage = guaranteeGlobalAccountRepository.findAll(
                    specificationGuaranteeGlobalAccount(text), pageable);
            guaranteeAccountOutDtoList = guaranteeGlobalAccountEntityPage.getContent()
                    .stream().map(guaranteeGlobalAccountEntity ->
                            GuaranteeAccountOutDto.builder()
                                    .consecutiveId(consecutiveIdCounter.getAndIncrement())
                                    .guaranteeGlobalAccountId(guaranteeGlobalAccountEntity.getId())
                                    .fullName(guaranteeGlobalAccountEntity.getAccountCode()
                                            .concat(" ")
                                            .concat(guaranteeGlobalAccountEntity.getAccountName()))
                                    .build()

                    ).toList();
            return MapperPageUtil.pageToPageResponseOutDto(guaranteeAccountOutDtoList, guaranteeGlobalAccountEntityPage);
        } else if (TypeAccountEnum.SPECIFIC_ACCOUNT.getValue().equals(accountTypeId)) {
            Page<GuaranteeParticularAccountEntity> guaranteeParticularAccountEntityPage = guaranteeParticularAccountRepository.findAll(
                    specificationGuaranteeParticularAccount(text), pageable);
            guaranteeAccountOutDtoList = guaranteeParticularAccountEntityPage.getContent()
                    .stream().map(guaranteeParticularAccountEntity ->
                            GuaranteeAccountOutDto.builder()
                                    .consecutiveId(consecutiveIdCounter.getAndIncrement())
                                    .guaranteeParticularAccountId(guaranteeParticularAccountEntity.getId())
                                    .fullName(guaranteeParticularAccountEntity.getAccountParticularCode())
                                    .build()
                    ).toList();
            return MapperPageUtil.pageToPageResponseOutDto(guaranteeAccountOutDtoList, guaranteeParticularAccountEntityPage);
        } else {
            throw new ServiceException(ErrorCode.ACCOUNT_TYPE_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public PageResponseOutDto<GuaranteeAccountOutDto> findAllGuaranteesAccount(Long accountTypeId, String text, int page, int size, String sort, String order, boolean all) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllGuaranteesAccountV1WithPagination(accountTypeId, text, page, size, sort, order, all);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<GuaranteeAccountOutDto> findAllGuaranteesAccountV1WithPagination(Long accountTypeId, String text, int page, int size, String sort, String order, boolean all) {
        log.info("Start method findAllGuaranteesAccountV1WithPagination");

        AtomicLong consecutiveIdCounter = new AtomicLong(1);
        
   
        Sort.Direction direction = "desc".equalsIgnoreCase(order) ? 
            Sort.Direction.DESC : 
            Sort.Direction.ASC;
        Sort sortObj = Sort.by(direction, sort != null ? sort : "id");

        if (TypeAccountEnum.GENERAL_ACCOUNT.getValue().equals(accountTypeId)) {
            if (all) {
                List<GuaranteeGlobalAccountEntity> allResults = guaranteeGlobalAccountRepository.findAll(
                    specificationGuaranteeGlobalAccount(text), sortObj);
                List<GuaranteeAccountOutDto> guaranteeAccountOutDtoList = allResults
                    .stream().map(guaranteeGlobalAccountEntity ->
                        GuaranteeAccountOutDto.builder()
                                .consecutiveId(consecutiveIdCounter.getAndIncrement())
                                .guaranteeGlobalAccountId(guaranteeGlobalAccountEntity.getId())
                                .fullName(guaranteeGlobalAccountEntity.getAccountCode()
                                        .concat(" ")
                                        .concat(guaranteeGlobalAccountEntity.getAccountName()))
                                .build()
                    ).toList();
                return buildPageResponseAccount(guaranteeAccountOutDtoList, 0, guaranteeAccountOutDtoList.size(), guaranteeAccountOutDtoList.size());
            } else {
                Pageable pageable = PageRequest.of(page, size, sortObj);
                Page<GuaranteeGlobalAccountEntity> guaranteeGlobalAccountEntityPage = guaranteeGlobalAccountRepository.findAll(
                    specificationGuaranteeGlobalAccount(text), pageable);
                List<GuaranteeAccountOutDto> guaranteeAccountOutDtoList = guaranteeGlobalAccountEntityPage.getContent()
                    .stream().map(guaranteeGlobalAccountEntity ->
                        GuaranteeAccountOutDto.builder()
                                .consecutiveId(consecutiveIdCounter.getAndIncrement())
                                .guaranteeGlobalAccountId(guaranteeGlobalAccountEntity.getId())
                                .fullName(guaranteeGlobalAccountEntity.getAccountCode()
                                        .concat(" ")
                                        .concat(guaranteeGlobalAccountEntity.getAccountName()))
                                .build()
                    ).toList();
                return buildPageResponseAccount(guaranteeAccountOutDtoList, page, size, (int) guaranteeGlobalAccountEntityPage.getTotalElements());
            }
        } else if (TypeAccountEnum.SPECIFIC_ACCOUNT.getValue().equals(accountTypeId)) {
            if (all) {
                List<GuaranteeParticularAccountEntity> allResults = guaranteeParticularAccountRepository.findAll(
                    specificationGuaranteeParticularAccount(text), sortObj);
                List<GuaranteeAccountOutDto> guaranteeAccountOutDtoList = allResults
                    .stream().map(guaranteeParticularAccountEntity ->
                        GuaranteeAccountOutDto.builder()
                                .consecutiveId(consecutiveIdCounter.getAndIncrement())
                                .guaranteeParticularAccountId(guaranteeParticularAccountEntity.getId())
                                .fullName(guaranteeParticularAccountEntity.getAccountParticularCode())
                                .build()
                    ).toList();
                return buildPageResponseAccount(guaranteeAccountOutDtoList, 0, guaranteeAccountOutDtoList.size(), guaranteeAccountOutDtoList.size());
            } else {
                Pageable pageable = PageRequest.of(page, size, sortObj);
                Page<GuaranteeParticularAccountEntity> guaranteeParticularAccountEntityPage = guaranteeParticularAccountRepository.findAll(
                    specificationGuaranteeParticularAccount(text), pageable);
                List<GuaranteeAccountOutDto> guaranteeAccountOutDtoList = guaranteeParticularAccountEntityPage.getContent()
                    .stream().map(guaranteeParticularAccountEntity ->
                        GuaranteeAccountOutDto.builder()
                                .consecutiveId(consecutiveIdCounter.getAndIncrement())
                                .guaranteeParticularAccountId(guaranteeParticularAccountEntity.getId())
                                .fullName(guaranteeParticularAccountEntity.getAccountParticularCode())
                                .build()
                    ).toList();
                return buildPageResponseAccount(guaranteeAccountOutDtoList, page, size, (int) guaranteeParticularAccountEntityPage.getTotalElements());
            }
        } else {
            throw new ServiceException(ErrorCode.ACCOUNT_TYPE_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<GuaranteeAccountOutDto> buildPageResponseAccount(List<GuaranteeAccountOutDto> content, int page, int size, int totalElements) {
        Page<GuaranteeAccountOutDto> guaranteePage = new PageImpl<>(content, 
            PageRequest.of(page, size), totalElements);
        return MapperPageUtil.pageToPageResponseOutDto(content, guaranteePage);
    }

    private Specification<GuaranteeGlobalAccountEntity> specificationGuaranteeGlobalAccount(String text) {
        return (root, query, cb) -> {
            query.distinct(true);

            List<Predicate> predicates = new ArrayList<>();

            if (text != null && !text.isBlank()) {
                String textLike = "%" + text.toLowerCase().trim() + "%";

                Predicate accountCodeLike = cb.like(cb.lower(root.get("accountCode")), textLike);
                Predicate accountNameLike = cb.like(cb.lower(root.get("accountName")), textLike);

                Subquery<Long> subquery = query.subquery(Long.class);
                Root<GuaranteesEntity> g2 = subquery.from(GuaranteesEntity.class);
                subquery.select(cb.literal(1L));
                subquery.where(
                        cb.equal(g2.get("guaranteeGlobalAccount"), root),
                        cb.or(
                                cb.like(cb.lower(g2.get("guaranteeGlobalAccount").get("accountCode")), textLike),
                                cb.like(cb.lower(g2.get("guaranteeGlobalAccount").get("accountName")), textLike)
                        )
                );

                predicates.add(cb.or(accountCodeLike, accountNameLike, cb.exists(subquery)));
            }

            Subquery<Long> existsGlobal = query.subquery(Long.class);
            Root<GuaranteesEntity> g3 = existsGlobal.from(GuaranteesEntity.class);
            existsGlobal.select(cb.literal(1L));
            existsGlobal.where(cb.equal(g3.get("guaranteeGlobalAccount"), root));

            predicates.add(cb.exists(existsGlobal));

            return cb.and(predicates.toArray(new Predicate[0]));
        };
    }

    private Specification<GuaranteeParticularAccountEntity> specificationGuaranteeParticularAccount(String text) {
        return (root, query, cb) -> {
            query.distinct(true);

            List<Predicate> predicates = new ArrayList<>();

            if (text != null && !text.isBlank()) {
                String textLike = "%" + text.toLowerCase().trim() + "%";

                Predicate codeLike = cb.like(cb.lower(root.get("accountParticularCode")), textLike);

                Subquery<Long> subquery = query.subquery(Long.class);
                Root<GuaranteesEntity> g2 = subquery.from(GuaranteesEntity.class);
                subquery.select(cb.literal(1L));
                subquery.where(
                        cb.equal(g2.get("guaranteeParticularAccount"), root),
                        cb.like(cb.lower(g2.get("guaranteeParticularAccount").get("accountParticularCode")), textLike)
                );

                predicates.add(cb.or(codeLike, cb.exists(subquery)));
            }

            Subquery<Long> existsParticular = query.subquery(Long.class);
            Root<GuaranteesEntity> g3 = existsParticular.from(GuaranteesEntity.class);
            existsParticular.select(cb.literal(1L));
            existsParticular.where(cb.equal(g3.get("guaranteeParticularAccount"), root));

            predicates.add(cb.exists(existsParticular));

            return cb.and(predicates.toArray(new Predicate[0]));
        };
    }

}

```

## src/main/java/com/nubo/guarantees/admin/api/service/impl/GuaranteesServiceImpl.java

```java
package com.nubo.guarantees.admin.api.service.impl;

import com.nubo.guarantees.admin.api.application.properties.PropertiesContext;
import com.nubo.guarantees.admin.api.exception.ServiceException;
import com.nubo.guarantees.admin.api.exception.error.ErrorCode;
import com.nubo.guarantees.admin.api.helpers.MapperPageUtil;
import com.nubo.guarantees.admin.api.helpers.MapperUtil;
import com.nubo.guarantees.admin.api.helpers.dynamicQuery.dataBase.GuaranteesSpecificationFactory;
import com.nubo.guarantees.admin.api.models.dto.request.GuaranteesInDto;
import com.nubo.guarantees.admin.api.models.dto.response.GuaranteesOutDto;
import com.nubo.guarantees.admin.api.models.dto.response.PageResponseOutDto;
import com.nubo.guarantees.admin.api.models.entity.GuaranteesEntity;
import com.nubo.guarantees.admin.api.models.entity.ParticipantEntity;
import com.nubo.guarantees.admin.api.models.enums.CountryEnum;
import com.nubo.guarantees.admin.api.models.enums.MarketEnum;
import com.nubo.guarantees.admin.api.models.enums.ParticipantEnum;
import com.nubo.guarantees.admin.api.models.enums.SearchOperationEnum;
import com.nubo.guarantees.admin.api.models.enums.StatusGuaranteeAdmEnum;
import com.nubo.guarantees.admin.api.models.enums.StatusTradeCustodianEnum;
import com.nubo.guarantees.admin.api.models.enums.TypeAccountEnum;
import com.nubo.guarantees.admin.api.models.enums.VersionApiEnum;
import com.nubo.guarantees.admin.api.repository.GuaranteesRepository;
import com.nubo.guarantees.admin.api.repository.ParticipantRepository;
import com.nubo.guarantees.admin.api.repository.StatusRepository;
import com.nubo.guarantees.admin.api.service.GuaranteesService;
import jakarta.persistence.criteria.Predicate;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicInteger;

@Service
@RequiredArgsConstructor
@Slf4j
public class GuaranteesServiceImpl implements GuaranteesService {

    private final GuaranteesRepository guaranteesRepository;
    private final StatusRepository statusRepository;
    private final ParticipantRepository participantRepository;

    public PageResponseOutDto<GuaranteesOutDto> findAllGuarantees(Pageable pageable, GuaranteesInDto
            guaranteesInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllGuaranteesV1(pageable, guaranteesInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<GuaranteesOutDto> findAllGuaranteesV1(Pageable pageable, GuaranteesInDto
            guaranteesInDto) {
        log.info("Start method findAllGuaranteesV1");

        Long participantId = null;
        Long custodianId = null;
        if (!ObjectUtils.isEmpty(guaranteesInDto.getParticipantId())) {
            Optional<ParticipantEntity> participantEntity = participantRepository.findById(guaranteesInDto.getParticipantId());
            if (participantEntity.isPresent() && participantEntity.get().getCustodian()) {
                custodianId = participantEntity.get().getId();
            } else if (participantEntity.isPresent()) {
                participantId = participantEntity.get().getId();
            }
        }

        List<GuaranteesEntity> allGuarantees = guaranteesRepository.findAll(guaranteesSpecification(guaranteesInDto, participantId, custodianId));
        List<GuaranteesOutDto> guaranteesOutDtoList = getGuaranteesOutDtoList(allGuarantees, guaranteesInDto.getStatusId());

        List<GuaranteesOutDto> pageContent = MapperPageUtil.getPageContent(pageable, guaranteesOutDtoList);
        Page<GuaranteesOutDto> guaranteePage = new PageImpl<>(pageContent,
                pageable, guaranteesOutDtoList.size());


        log.debug("End method findAllGuaranteesV1, guaranteesOutDtoList -> {}", guaranteesOutDtoList);

        return MapperPageUtil.pageToPageResponseOutDto(pageContent, guaranteePage);
    }

    @Override
    public PageResponseOutDto<GuaranteesOutDto> findAllGuarantees(GuaranteesInDto guaranteesInDto, int page, int size, String sort, String order, boolean all) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllGuaranteesV1WithPagination(guaranteesInDto, page, size, sort, order, all);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<GuaranteesOutDto> findAllGuaranteesV1WithPagination(GuaranteesInDto guaranteesInDto, int page, int size, String sort, String order, boolean all) {
        log.info("Start method findAllGuaranteesV1WithPagination");

        Long participantId = null;
        Long custodianId = null;
        if (!ObjectUtils.isEmpty(guaranteesInDto.getParticipantId())) {
            Optional<ParticipantEntity> participantEntity = participantRepository.findById(guaranteesInDto.getParticipantId());
            if (participantEntity.isPresent() && participantEntity.get().getCustodian()) {
                custodianId = participantEntity.get().getId();
            } else if (participantEntity.isPresent()) {
                participantId = participantEntity.get().getId();
            }
        }

        Specification<GuaranteesEntity> spec = guaranteesSpecification(guaranteesInDto, participantId, custodianId);


        Direction direction = "desc".equalsIgnoreCase(order) ?
                Direction.DESC :
                Direction.ASC;
        Sort sortObj = Sort.by(direction, sort != null ? sort : "id");

        if (all) {
            List<GuaranteesEntity> allResults = guaranteesRepository.findAll(spec, sortObj);
            List<GuaranteesOutDto> guaranteesOutDtoList = getGuaranteesOutDtoList(allResults, guaranteesInDto.getStatusId());
            return buildPageResponse(guaranteesOutDtoList, 0, guaranteesOutDtoList.size(), guaranteesOutDtoList.size());
        } else {
            Pageable pageable = PageRequest.of(page, size, sortObj);
            Page<GuaranteesEntity> pageResult = guaranteesRepository.findAll(spec, pageable);
            List<GuaranteesOutDto> guaranteesOutDtoList = getGuaranteesOutDtoList(pageResult.getContent(), guaranteesInDto.getStatusId());
            return buildPageResponse(guaranteesOutDtoList, page, size, (int) pageResult.getTotalElements());
        }
    }

    private PageResponseOutDto<GuaranteesOutDto> buildPageResponse(List<GuaranteesOutDto> content, int page, int size, int totalElements) {
        Page<GuaranteesOutDto> guaranteePage = new PageImpl<>(content,
                PageRequest.of(page, size), totalElements);
        return MapperPageUtil.pageToPageResponseOutDto(content, guaranteePage);
    }

    public List<GuaranteesOutDto> getGuaranteesOutDtoList(List<GuaranteesEntity> guaranteesEntities, Long statusId) {
        List<GuaranteesOutDto> guaranteesOutDtoList = guaranteesEntities.stream()
                .map(guaranteesEntity -> {

                    BigDecimal guaranteeIntegerTotal = calculateGuaranteeIntegerTotal(guaranteesEntity);
                    BigDecimal guaranteeExigencyTotal = calculateGuaranteeTotalExigency(guaranteesEntity);
                    BigDecimal limitGuaranteeTotal = calculateLimitGuaranteeTotal(guaranteesEntity);

                    BigDecimal position = guaranteeIntegerTotal.subtract(guaranteeExigencyTotal);

                    Long idStatus = (position.compareTo(BigDecimal.ZERO) > 0)
                            ? StatusGuaranteeAdmEnum.COVERED.getId()
                            : StatusGuaranteeAdmEnum.PENDING.getId();

                    guaranteesEntity.setStatus(statusRepository.findById(idStatus).orElse(null));

                    GuaranteesOutDto guaranteesOutDto = MapperUtil.guaranteesEntitytoGuaranteesOutDto(guaranteesEntity, position);
                    assert guaranteesOutDto != null;
                    guaranteesOutDto.setGuaranteeIntegerTotal(guaranteeIntegerTotal);
                    guaranteesOutDto.setGuaranteeExigencyTotal(guaranteeExigencyTotal);

                    String marketId = guaranteesEntity.getIsinNumber().getMarket().getId();

                    if(MarketEnum.RV.getId().equals(marketId)) {
                        guaranteesOutDto.setLimitRV(limitGuaranteeTotal);
                    } else if(MarketEnum.DP.getId().equals(marketId)) {
                        guaranteesOutDto.setLimitDP(limitGuaranteeTotal);
                    }else if(MarketEnum.PR.getId().equals(marketId)) {
                        guaranteesOutDto.setLimitPR(limitGuaranteeTotal);
                    }else if(MarketEnum.IF.getId().equals(marketId)) {
                        guaranteesOutDto.setLimitIF(limitGuaranteeTotal);
                    }else if(MarketEnum.EF.getId().equals(marketId)) {
                        guaranteesOutDto.setLimitEF(limitGuaranteeTotal);
                    }

                    String guaranteeAccountDescription = "";
                    if (TypeAccountEnum.GENERAL_ACCOUNT.getValue().equals(guaranteesOutDto.getAccountType().getId())
                            && !ObjectUtils.isEmpty(guaranteesOutDto.getGuaranteeGlobalAccount())) {
                        guaranteeAccountDescription = guaranteesOutDto.getGuaranteeGlobalAccount().getAccountCode()
                                .concat(" ")
                                .concat(guaranteesOutDto.getGuaranteeGlobalAccount().getAccountName());
                    } else if (TypeAccountEnum.SPECIFIC_ACCOUNT.getValue().equals(guaranteesOutDto.getAccountType().getId())
                            && !ObjectUtils.isEmpty(guaranteesOutDto.getGuaranteeParticularAccount())) {
                        guaranteeAccountDescription = guaranteesOutDto.getGuaranteeParticularAccount().getAccountParticularCode();
                    }
                    guaranteesOutDto.setGuaranteeAccountDescription(guaranteeAccountDescription);

                    return guaranteesOutDto;
                }).filter(guaranteesOutDto -> statusId == null ||
                        (guaranteesOutDto.getStatus() != null && guaranteesOutDto.getStatus().getId().equals(statusId)))
                .toList();

        Map<String, GuaranteesOutDto> uniqueMap = new LinkedHashMap<>();

        for (GuaranteesOutDto dto : guaranteesOutDtoList) {
            String key = buildFullGroupKey(dto);

            uniqueMap.merge(key, dto, (existing, incoming) -> {
                mergeLimits(existing, incoming);
                return existing;
            });
        }

        AtomicInteger counter = new AtomicInteger(1);

        return uniqueMap.values().stream()
                .sorted(Comparator.comparing(this::buildFullGroupKey))
                .map(dto -> {
                    dto.setId((long) counter.getAndIncrement());
                    return dto;
                })
                .toList();
    }

    private String buildFullGroupKey(GuaranteesOutDto dto) {
        String custodianKey = dto.getCustodian() != null
                ? dto.getCustodian().getId().toString()
                : "NO_CUSTODIAN";

        String participantKey;
        if (dto.getCustodian() != null) {
            participantKey = "IGNORED_PARTICIPANT";
        } else {
            participantKey = dto.getParticipant() != null
                    ? dto.getParticipant().getId().toString()
                    : "NO_PARTICIPANT";
        }

        return String.join("|",
                dto.getCountry() != null ? dto.getCountry().getId().toString() : "NO_COUNTRY",
                participantKey,
                custodianKey,
                dto.getInvestor() != null ? dto.getInvestor().getId().toString() : "NO_INVESTOR",
                dto.getGuaranteeGlobalAccount() != null ? "G-" + dto.getGuaranteeGlobalAccount().getId() : "NO_GLB",
                dto.getGuaranteeParticularAccount() != null ? "P-" + dto.getGuaranteeParticularAccount().getId() : "NO_PRT",
                dto.getGuaranteeIntegerTotal() != null ? dto.getGuaranteeIntegerTotal().toPlainString() : "NO_INT",
                dto.getGuaranteeExigencyTotal() != null ? dto.getGuaranteeExigencyTotal().toPlainString() : "NO_EXG"
        );
    }

    private void mergeLimits(GuaranteesOutDto base, GuaranteesOutDto incoming) {

        base.setLimitRV(mergeBigDecimal(base.getLimitRV(), incoming.getLimitRV()));
        base.setLimitDP(mergeBigDecimal(base.getLimitDP(), incoming.getLimitDP()));
        base.setLimitPR(mergeBigDecimal(base.getLimitPR(), incoming.getLimitPR()));
        base.setLimitEF(mergeBigDecimal(base.getLimitEF(), incoming.getLimitEF()));
        base.setLimitIF(mergeBigDecimal(base.getLimitIF(), incoming.getLimitIF()));
    }

    private BigDecimal mergeBigDecimal(BigDecimal original, BigDecimal incoming) {

        if (original == null) return incoming;
        if (incoming == null) return original;

        if (original.compareTo(incoming) == 0) return original;

        return original.add(incoming);
    }

    public Specification<GuaranteesEntity> guaranteesSpecification(GuaranteesInDto guaranteesInDto,
                                                                   Long participantId, Long custodianId) {
        return (root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();
            if (guaranteesInDto.getCountryId() != null) {
                predicates.add(criteriaBuilder.equal(root.get("country").get("id"), guaranteesInDto.getCountryId()));
            }
            if (custodianId != null) {
                predicates.add(criteriaBuilder.equal(root.get(ParticipantEnum.CUSTODIAN.getValue()).get("id"),
                        custodianId));
            }
            if (participantId != null) {
                predicates.add(criteriaBuilder.equal(root.get(ParticipantEnum.PARTICIPANT.getValue()).get("id"),
                        participantId));
            }
            if (guaranteesInDto.getInvestorId() != null) {
                predicates.add(criteriaBuilder.equal(root.get("investor").get("id"), guaranteesInDto.getInvestorId()));
            }
            if (guaranteesInDto.getAccountTypeId() != null) {
                predicates.add(criteriaBuilder.equal(root.get("accountType").get("id"), guaranteesInDto.getAccountTypeId()));
            }
            if (guaranteesInDto.getGuaranteeGlobalAccountId() != null) {
                predicates.add(criteriaBuilder.equal(root.get("guaranteeGlobalAccount").get("id"),
                        guaranteesInDto.getGuaranteeGlobalAccountId()));
            }
            if (guaranteesInDto.getGuaranteeParticularAccountId() != null) {
                predicates.add(criteriaBuilder.equal(root.get("guaranteeParticularAccount").get("id"),
                        guaranteesInDto.getGuaranteeParticularAccountId()));
            }
            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }

    private BigDecimal calculateGuaranteeIntegerTotal(GuaranteesEntity guaranteesEntity) {

        Long participantId = ObjectUtils.isEmpty(guaranteesEntity.getParticipant()) ? null : guaranteesEntity.getParticipant().getId();
        Long custodianId = ObjectUtils.isEmpty(guaranteesEntity.getCustodian()) ? null : guaranteesEntity.getCustodian().getId();
        Long investorId = ObjectUtils.isEmpty(guaranteesEntity.getInvestor()) ? null : guaranteesEntity.getInvestor().getId();
        Long guaranteeGlobalAccountId = ObjectUtils.isEmpty(guaranteesEntity.getGuaranteeGlobalAccount())
                ? null : guaranteesEntity.getGuaranteeGlobalAccount().getId();
        Long guaranteeParticularAccountId = ObjectUtils.isEmpty(guaranteesEntity.getGuaranteeParticularAccount())
                ? null : guaranteesEntity.getGuaranteeParticularAccount().getId();

        BigDecimal guaranteeIntegerTotal = BigDecimal.ZERO;
        if (CountryEnum.CHILE.getValue().equals(guaranteesEntity.getCountry().getId())) {
            if ((!ObjectUtils.isEmpty(participantId) ||
                    !ObjectUtils.isEmpty(custodianId)) &&
                    (!ObjectUtils.isEmpty(guaranteeGlobalAccountId) ||
                            !ObjectUtils.isEmpty(guaranteeParticularAccountId))) {
                if (!ObjectUtils.isEmpty(custodianId)) {
                    guaranteeIntegerTotal = guaranteesRepository.sumGuaranteeIntegerByFilters(
                            null,
                            custodianId,
                            null,
                            guaranteeGlobalAccountId,
                            guaranteeParticularAccountId);
                } else {
                    guaranteeIntegerTotal = guaranteesRepository.sumGuaranteeIntegerByFilters(
                            participantId,
                            null,
                            null,
                            guaranteeGlobalAccountId,
                            guaranteeParticularAccountId);
                }

            }
        } else if (CountryEnum.COLOMBIA.getValue().equals(guaranteesEntity.getCountry().getId()) ||
                CountryEnum.PERU.getValue().equals(guaranteesEntity.getCountry().getId())) {
            if ((!ObjectUtils.isEmpty(participantId) ||
                    !ObjectUtils.isEmpty(custodianId)) &&
                    (!ObjectUtils.isEmpty(guaranteeGlobalAccountId) ||
                            !ObjectUtils.isEmpty(guaranteeParticularAccountId)) &&
                    !ObjectUtils.isEmpty(investorId)) {
                if (!ObjectUtils.isEmpty(custodianId)) {
                    guaranteeIntegerTotal = guaranteesRepository.sumGuaranteeIntegerByFilters(
                            null,
                            custodianId,
                            investorId,
                            guaranteeGlobalAccountId,
                            guaranteeParticularAccountId);
                } else {
                    guaranteeIntegerTotal = guaranteesRepository.sumGuaranteeIntegerByFilters(
                            participantId,
                            null,
                            investorId,
                            guaranteeGlobalAccountId,
                            guaranteeParticularAccountId);
                }
            }
        }
        return guaranteeIntegerTotal;
    }

    private BigDecimal calculateGuaranteeTotalExigency(GuaranteesEntity guaranteesEntity) {
        Long participantId = ObjectUtils.isEmpty(guaranteesEntity.getParticipant()) ? null : guaranteesEntity.getParticipant().getId();
        Long custodianId = ObjectUtils.isEmpty(guaranteesEntity.getCustodian()) ? null : guaranteesEntity.getCustodian().getId();
        Long investorId = ObjectUtils.isEmpty(guaranteesEntity.getInvestor()) ? null : guaranteesEntity.getInvestor().getId();
        Long guaranteeGlobalAccountId = ObjectUtils.isEmpty(guaranteesEntity.getGuaranteeGlobalAccount())
                ? null : guaranteesEntity.getGuaranteeGlobalAccount().getId();
        Long guaranteeParticularAccountId = ObjectUtils.isEmpty(guaranteesEntity.getGuaranteeParticularAccount())
                ? null : guaranteesEntity.getGuaranteeParticularAccount().getId();
        List<Long> custodianTradeStatusIds = List.of(StatusTradeCustodianEnum.TRANSFER.getValue(),
                StatusTradeCustodianEnum.PRE_MATCH.getValue(), StatusTradeCustodianEnum.ADMITTED.getValue());

        BigDecimal guaranteeExigencyTotal = BigDecimal.ZERO;
        if (CountryEnum.CHILE.getValue().equals(guaranteesEntity.getCountry().getId())) {
            if ((!ObjectUtils.isEmpty(participantId) ||
                    !ObjectUtils.isEmpty(custodianId)) &&
                    (!ObjectUtils.isEmpty(guaranteeGlobalAccountId) ||
                            !ObjectUtils.isEmpty(guaranteeParticularAccountId))) {
                if (!ObjectUtils.isEmpty(custodianId)) {
                    guaranteeExigencyTotal = guaranteesRepository.sumGuaranteeExigencyByFilters(
                            null,
                            custodianId,
                            null,
                            guaranteeGlobalAccountId,
                            guaranteeParticularAccountId,
                            custodianTradeStatusIds);
                } else {
                    guaranteeExigencyTotal = guaranteesRepository.sumGuaranteeExigencyByFilters(
                            participantId,
                            null,
                            null,
                            guaranteeGlobalAccountId,
                            guaranteeParticularAccountId,
                            null);
                }
            }
        } else if (CountryEnum.COLOMBIA.getValue().equals(guaranteesEntity.getCountry().getId()) ||
                CountryEnum.PERU.getValue().equals(guaranteesEntity.getCountry().getId())) {
            if ((!ObjectUtils.isEmpty(participantId) ||
                    !ObjectUtils.isEmpty(custodianId)) &&
                    (!ObjectUtils.isEmpty(guaranteeGlobalAccountId) ||
                            !ObjectUtils.isEmpty(guaranteeParticularAccountId)) &&
                    !ObjectUtils.isEmpty(investorId)) {
                if (!ObjectUtils.isEmpty(custodianId)) {
                    guaranteeExigencyTotal = guaranteesRepository.sumGuaranteeExigencyByFilters(
                            null,
                            custodianId,
                            investorId,
                            guaranteeGlobalAccountId,
                            guaranteeParticularAccountId,
                            custodianTradeStatusIds);
                } else {
                    guaranteeExigencyTotal = guaranteesRepository.sumGuaranteeExigencyByFilters(
                            participantId,
                            null,
                            investorId,
                            guaranteeGlobalAccountId,
                            guaranteeParticularAccountId,
                            null);
                }
            }
        }
        return guaranteeExigencyTotal;
    }

    private BigDecimal calculateLimitGuaranteeTotal(GuaranteesEntity guaranteesEntity) {
        Long participantId = ObjectUtils.isEmpty(guaranteesEntity.getParticipant()) ? null : guaranteesEntity.getParticipant().getId();
        Long custodianId = ObjectUtils.isEmpty(guaranteesEntity.getCustodian()) ? null : guaranteesEntity.getCustodian().getId();
        Long investorId = ObjectUtils.isEmpty(guaranteesEntity.getInvestor()) ? null : guaranteesEntity.getInvestor().getId();
        Long guaranteeGlobalAccountId = ObjectUtils.isEmpty(guaranteesEntity.getGuaranteeGlobalAccount())
                ? null : guaranteesEntity.getGuaranteeGlobalAccount().getId();
        Long guaranteeParticularAccountId = ObjectUtils.isEmpty(guaranteesEntity.getGuaranteeParticularAccount())
                ? null : guaranteesEntity.getGuaranteeParticularAccount().getId();
        String marketId = ObjectUtils.isEmpty(guaranteesEntity.getIsinNumber().getMarket()) ?
                null : guaranteesEntity.getIsinNumber().getMarket().getId();

        BigDecimal limitGuaranteeTotal = BigDecimal.ZERO;
        if (CountryEnum.CHILE.getValue().equals(guaranteesEntity.getCountry().getId())) {
            if ((!ObjectUtils.isEmpty(participantId) ||
                    !ObjectUtils.isEmpty(custodianId)) &&
                    (!ObjectUtils.isEmpty(guaranteeGlobalAccountId) ||
                            !ObjectUtils.isEmpty(guaranteeParticularAccountId))) {
                if (!ObjectUtils.isEmpty(custodianId)) {
                    limitGuaranteeTotal = guaranteesRepository.sumGuaranteeLimitsByFilters(
                            null,
                            custodianId,
                            null,
                            guaranteeGlobalAccountId,
                            guaranteeParticularAccountId,
                            marketId);
                } else {
                    limitGuaranteeTotal = guaranteesRepository.sumGuaranteeLimitsByFilters(
                            participantId,
                            null,
                            null,
                            guaranteeGlobalAccountId,
                            guaranteeParticularAccountId,
                            marketId);
                }

            }
        } else if (CountryEnum.COLOMBIA.getValue().equals(guaranteesEntity.getCountry().getId()) ||
                CountryEnum.PERU.getValue().equals(guaranteesEntity.getCountry().getId())) {
            if ((!ObjectUtils.isEmpty(participantId) ||
                    !ObjectUtils.isEmpty(custodianId)) &&
                    (!ObjectUtils.isEmpty(guaranteeGlobalAccountId) ||
                            !ObjectUtils.isEmpty(guaranteeParticularAccountId)) &&
                    !ObjectUtils.isEmpty(investorId)) {
                if (!ObjectUtils.isEmpty(custodianId)) {
                    limitGuaranteeTotal = guaranteesRepository.sumGuaranteeLimitsByFilters(
                            null,
                            custodianId,
                            investorId,
                            guaranteeGlobalAccountId,
                            guaranteeParticularAccountId,
                            marketId);
                } else {
                    limitGuaranteeTotal = guaranteesRepository.sumGuaranteeLimitsByFilters(
                            participantId,
                            null,
                            investorId,
                            guaranteeGlobalAccountId,
                            guaranteeParticularAccountId,
                            marketId);
                }
            }
        }
        return limitGuaranteeTotal;
    }

    public PageResponseOutDto<GuaranteesOutDto> findPagedDataGuaranteesByFiltersDynamic(
            Pageable pageable,
            String fieldName,
            String fieldValue,
            String operation,
            Long countryId,
            Long participantId,
            Long investorId,
            Long accountTypeId,
            Long guaranteeGlobalAccountId,
            Long guaranteeParticularAccountId,
            Long guaranteeId,
            Long statusId) {

        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findPagedDataGuaranteesByFiltersDynamicV1(pageable, fieldName, fieldValue, operation,
                    countryId, participantId, investorId, accountTypeId, guaranteeGlobalAccountId,
                    guaranteeParticularAccountId, guaranteeId, statusId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    public PageResponseOutDto<GuaranteesOutDto> findPagedDataGuaranteesByFiltersDynamicV1(
            Pageable pageable,
            String fieldName,
            String fieldValue,
            String operation,
            Long countryId,
            Long participantId,
            Long investorId,
            Long accountTypeId,
            Long guaranteeGlobalAccountId,
            Long guaranteeParticularAccountId,
            Long guaranteeId,
            Long statusId) {

        log.info("Searching guarantees with combined filters");

        SearchOperationEnum searchOperation = (operation != null) ? SearchOperationEnum.fromValue(operation) : null;

        if (operation != null && searchOperation == null) {
            log.warn("Invalid operation: {}", operation);
            throw new ServiceException(ErrorCode.BAD_REQUEST, HttpStatus.BAD_REQUEST);
        }

        Specification<GuaranteesEntity> spec = GuaranteesSpecificationFactory.createCombinedFilter(
                countryId, participantId, investorId, accountTypeId, guaranteeGlobalAccountId, guaranteeParticularAccountId,
                guaranteeId, statusId,
                fieldName, fieldValue, searchOperation);

        Page<GuaranteesEntity> pagedResult = guaranteesRepository.findAll(spec, pageable);

        return buildPageResponse(pagedResult, statusId);
    }

    private PageResponseOutDto<GuaranteesOutDto> buildPageResponse(Page<GuaranteesEntity> entities, Long
            statusId) {
        List<GuaranteesOutDto> guaranteesOutDtoList = getGuaranteesOutDtoList(entities.getContent(), statusId);

        return MapperPageUtil.pageToPageResponseOutDto(guaranteesOutDtoList, entities);
    }
}

```

## src/main/java/com/nubo/guarantees/admin/api/service/impl/InvestorServiceImpl.java

```java
package com.nubo.guarantees.admin.api.service.impl;

import java.util.List;
import java.util.Objects;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.nubo.guarantees.admin.api.application.properties.PropertiesContext;
import com.nubo.guarantees.admin.api.exception.ServiceException;
import com.nubo.guarantees.admin.api.exception.error.ErrorCode;
import com.nubo.guarantees.admin.api.helpers.MapperPageUtil;
import com.nubo.guarantees.admin.api.helpers.MapperUtil;
import com.nubo.guarantees.admin.api.models.dto.response.InvestorOutDto;
import com.nubo.guarantees.admin.api.models.dto.response.PageResponseOutDto;
import com.nubo.guarantees.admin.api.models.entity.GuaranteesEntity;
import com.nubo.guarantees.admin.api.models.entity.InvestorEntity;
import com.nubo.guarantees.admin.api.models.enums.VersionApiEnum;
import com.nubo.guarantees.admin.api.repository.InvestorRepository;
import com.nubo.guarantees.admin.api.service.InvestorService;

import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import jakarta.persistence.criteria.Subquery;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class InvestorServiceImpl implements InvestorService {

    private final InvestorRepository investorRepository;

    public PageResponseOutDto<InvestorOutDto> findByInvestor(
            String text, Pageable pageable) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findByInvestorV1(text, pageable);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<InvestorOutDto> findByInvestorV1(
            String text, Pageable pageable) {
        log.info("Start method findByInvestorV1");

        Page<InvestorEntity> investorEntityPage = investorRepository.findAll(
                specificationInvestor(text), pageable);

        List<InvestorOutDto> investorOutDtoList = investorEntityPage.getContent().stream()
                .map(MapperUtil::investorEntityToInvestorOutDto)
                .toList();

        log.info("End method findInvestorByIdentificationOrNameV1, investorOutDtoList -> {}", investorOutDtoList);

        return MapperPageUtil.pageToPageResponseOutDto(investorOutDtoList, investorEntityPage);
    }

    @Override
    public PageResponseOutDto<InvestorOutDto> findByInvestor(String text, int page, int size, String sort, String order, boolean all) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findByInvestorV1WithPagination(text, page, size, sort, order, all);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<InvestorOutDto> findByInvestorV1WithPagination(String text, int page, int size, String sort, String order, boolean all) {
        log.info("Start method findByInvestorV1WithPagination");

  
        Sort.Direction direction = "desc".equalsIgnoreCase(order) ? 
            Sort.Direction.DESC : 
            Sort.Direction.ASC;
        Sort sortObj = Sort.by(direction, sort != null ? sort : "id");

        Specification<InvestorEntity> spec = specificationInvestor(text);

        if (all) {
            List<InvestorEntity> allResults = investorRepository.findAll(spec, sortObj);
            List<InvestorOutDto> investorOutDtoList = allResults.stream()
                .map(MapperUtil::investorEntityToInvestorOutDto)
                .toList();
            return buildPageResponseInvestor(investorOutDtoList, 0, investorOutDtoList.size(), investorOutDtoList.size());
        } else {
            Pageable pageable = PageRequest.of(page, size, sortObj);
            Page<InvestorEntity> investorEntityPage = investorRepository.findAll(spec, pageable);
            List<InvestorOutDto> investorOutDtoList = investorEntityPage.getContent().stream()
                .map(MapperUtil::investorEntityToInvestorOutDto)
                .toList();
            return buildPageResponseInvestor(investorOutDtoList, page, size, (int) investorEntityPage.getTotalElements());
        }
    }
    
    

    private PageResponseOutDto<InvestorOutDto> buildPageResponseInvestor(List<InvestorOutDto> content, int page, int size, int totalElements) {
        Page<InvestorOutDto> investorPage = new PageImpl<>(content, 
            PageRequest.of(page, size), totalElements);
        return MapperPageUtil.pageToPageResponseOutDto(content, investorPage);
    }

    private Specification<InvestorEntity> specificationInvestor(String text) {
        return (root, query, criteriaBuilder) -> {
            if (text == null || text.trim().isEmpty()) {
                return criteriaBuilder.conjunction();
            }

            Subquery<Long> subquery = query.subquery(Long.class);
            Root<GuaranteesEntity> guaranteeRoot = subquery.from(GuaranteesEntity.class);

            subquery.select(guaranteeRoot.get("investor").get("id")).distinct(true);

            Predicate predicate = criteriaBuilder.or(
                    criteriaBuilder.like(
                            criteriaBuilder.lower(guaranteeRoot.get("investor").get("documentNumber")),
                            "%" + text.toLowerCase().trim() + "%"
                    ),
                    criteriaBuilder.like(
                            criteriaBuilder.lower(guaranteeRoot.get("investor").get("firstName")),
                            "%" + text.toLowerCase().trim() + "%"
                    ),
                    criteriaBuilder.like(
                            criteriaBuilder.lower(guaranteeRoot.get("investor").get("lastName")),
                            "%" + text.toLowerCase().trim() + "%"
                    )
            );

            subquery.where(predicate);

            return criteriaBuilder.in(root.get("id")).value(subquery);
        };
    }

}

```

## src/main/java/com/nubo/guarantees/admin/api/service/impl/ParticipantServiceImpl.java

```java
package com.nubo.guarantees.admin.api.service.impl;

import com.nubo.guarantees.admin.api.application.properties.PropertiesContext;
import com.nubo.guarantees.admin.api.exception.ServiceException;
import com.nubo.guarantees.admin.api.exception.error.ErrorCode;
import com.nubo.guarantees.admin.api.helpers.MapperPageUtil;
import com.nubo.guarantees.admin.api.helpers.MapperUtil;
import com.nubo.guarantees.admin.api.models.dto.response.PageResponseOutDto;
import com.nubo.guarantees.admin.api.models.dto.response.ParticipantOutDto;
import com.nubo.guarantees.admin.api.models.entity.GuaranteesEntity;
import com.nubo.guarantees.admin.api.models.entity.ParticipantEntity;
import com.nubo.guarantees.admin.api.models.enums.VersionApiEnum;
import com.nubo.guarantees.admin.api.repository.ParticipantRepository;
import com.nubo.guarantees.admin.api.service.ParticipantService;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import jakarta.persistence.criteria.Subquery;
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
public class ParticipantServiceImpl implements ParticipantService {

    private final ParticipantRepository participantRepository;

    @Override
    public PageResponseOutDto<ParticipantOutDto> findByParticipant(String text, Pageable pageable) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findByParticipantV1(text, pageable);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<ParticipantOutDto> findByParticipantV1(String text,
                                                                      Pageable pageable) {
        log.info("Start method findByParticipantV1");

        Page<ParticipantEntity> participantEntityPage = participantRepository.findAll(
                this.specificationParticipantAndCustodian(text), pageable);

        List<ParticipantOutDto> participantOutDtoList = participantEntityPage.getContent().stream()
                .map(MapperUtil::participantEntityToParticipantOutDto)
                .toList();

        log.info("End method findByParticipantV1, participantOutDtoList -> {}", participantOutDtoList);

        return MapperPageUtil.pageToPageResponseOutDto(participantOutDtoList, participantEntityPage);
    }

    @Override
    public PageResponseOutDto<ParticipantOutDto> findByParticipant(String text, int page, int size, String sort, String order, boolean all) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findByParticipantV1WithPagination(text, page, size, sort, order, all);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<ParticipantOutDto> findByParticipantV1WithPagination(String text, int page, int size, String sort, String order, boolean all) {
        log.info("Start method findByParticipantV1WithPagination");

        // Create sort object
        Sort.Direction direction = "desc".equalsIgnoreCase(order) ? 
            Sort.Direction.DESC : 
            Sort.Direction.ASC;
        Sort sortObj = Sort.by(direction, sort != null ? sort : "id");

        Specification<ParticipantEntity> spec = specificationParticipantAndCustodian(text);

        if (all) {
            // Return all results
            List<ParticipantEntity> allResults = participantRepository.findAll(spec, sortObj);
            List<ParticipantOutDto> participantOutDtoList = allResults.stream()
                .map(MapperUtil::participantEntityToParticipantOutDto)
                .toList();
            return buildPageResponseParticipant(participantOutDtoList, 0, participantOutDtoList.size(), participantOutDtoList.size());
        } else {
            // Return paginated results
            Pageable pageable = PageRequest.of(page, size, sortObj);
            Page<ParticipantEntity> participantEntityPage = participantRepository.findAll(spec, pageable);
            List<ParticipantOutDto> participantOutDtoList = participantEntityPage.getContent().stream()
                .map(MapperUtil::participantEntityToParticipantOutDto)
                .toList();
            return buildPageResponseParticipant(participantOutDtoList, page, size, (int) participantEntityPage.getTotalElements());
        }
    }

    private PageResponseOutDto<ParticipantOutDto> buildPageResponseParticipant(List<ParticipantOutDto> content, int page, int size, int totalElements) {
        Page<ParticipantOutDto> participantPage = new PageImpl<>(content, 
            PageRequest.of(page, size), totalElements);
        return MapperPageUtil.pageToPageResponseOutDto(content, participantPage);
    }

    private Specification<ParticipantEntity> specificationParticipantAndCustodian(String text) {
        return (root, query, cb) -> {
            query.distinct(true);

            List<Predicate> predicates = new ArrayList<>();

            if (text != null && !text.isBlank()) {
                String textLike = "%" + text.toLowerCase().trim() + "%";

                Predicate codeLike = cb.like(cb.lower(root.get("code")), textLike);

                Predicate documentNumberLike = cb.like(cb.lower(root.get("documentNumber")), textLike);

                Predicate nameLike = cb.like(cb.lower(root.get("name")), textLike);

                Subquery<Long> subquery = query.subquery(Long.class);
                Root<GuaranteesEntity> g2 = subquery.from(GuaranteesEntity.class);
                subquery.select(cb.literal(1L));
                subquery.where(
                        cb.equal(g2.get("custodian"), root),
                        cb.or(
                                cb.like(cb.lower(g2.get("custodian").get("documentNumber")), textLike),
                                cb.like(cb.lower(g2.get("custodian").get("code")), textLike),
                                cb.like(cb.lower(g2.get("custodian").get("name")), textLike)
                        )
                );

                predicates.add(cb.or(documentNumberLike, codeLike, nameLike, cb.exists(subquery)));
            }

            Subquery<Long> existsParticipant = query.subquery(Long.class);
            Root<GuaranteesEntity> g3 = existsParticipant.from(GuaranteesEntity.class);
            existsParticipant.select(cb.literal(1L));
            existsParticipant.where(cb.equal(g3.get("participant"), root));

            Subquery<Long> existsCustodian = query.subquery(Long.class);
            Root<GuaranteesEntity> g4 = existsCustodian.from(GuaranteesEntity.class);
            existsCustodian.select(cb.literal(1L));
            existsCustodian.where(cb.equal(g4.get("custodian"), root));

            predicates.add(cb.or(cb.exists(existsParticipant), cb.exists(existsCustodian)));

            return cb.and(predicates.toArray(new Predicate[0]));
        };
    }

}

```

## src/main/java/com/nubo/guarantees/admin/api/service/impl/StatusServiceImpl.java

```java
package com.nubo.guarantees.admin.api.service.impl;

import com.nubo.guarantees.admin.api.application.properties.PropertiesContext;
import com.nubo.guarantees.admin.api.exception.ServiceException;
import com.nubo.guarantees.admin.api.exception.error.ErrorCode;
import com.nubo.guarantees.admin.api.helpers.MapperUtil;
import com.nubo.guarantees.admin.api.models.dto.response.StatusOutDto;
import com.nubo.guarantees.admin.api.models.entity.StatusEntity;
import com.nubo.guarantees.admin.api.models.enums.StatusCategoryEnum;
import com.nubo.guarantees.admin.api.models.enums.VersionApiEnum;
import com.nubo.guarantees.admin.api.repository.StatusRepository;
import com.nubo.guarantees.admin.api.service.StatusService;
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
    public List<StatusOutDto> findAllGuaranteesStatus() {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return MapperUtil.statusEntityListToGuaranteesStatusList(findAllGuaranteesStatusV1());
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<StatusEntity> findAllGuaranteesStatusV1() {
        log.info("Start method findAllGuaranteesStatusV1");

        List<StatusEntity> statusEntityList = statusRepository.findAllGuaranteesStatus(
                StatusCategoryEnum.GUARANTEES_ADMIN.getValue());

        log.debug("End method findAllGuaranteesStatusV1, statusOutDtoList -> {}",
                statusEntityList.size());

        return statusEntityList;
    }

}

```

## src/main/java/com/nubo/guarantees/admin/api/web/controller/CountryRestController.java

```java
package com.nubo.guarantees.admin.api.web.controller;

import com.nubo.guarantees.admin.api.models.dto.response.CountryOutDto;
import com.nubo.guarantees.admin.api.service.CountryService;
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

    @Operation(summary = "Find all countries", description = "Find all countries")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = CountryOutDto.class)))})
    @GetMapping
    public ResponseEntity<List<CountryOutDto>> findCountries() {
        return ResponseEntity.ok(countryService.findCountries());
    }

}

```

## src/main/java/com/nubo/guarantees/admin/api/web/controller/GuaranteeAccountRestController.java

```java
package com.nubo.guarantees.admin.api.web.controller;

import com.nubo.guarantees.admin.api.models.dto.response.GuaranteeAccountOutDto;
import com.nubo.guarantees.admin.api.models.dto.response.PageResponseOutDto;
import com.nubo.guarantees.admin.api.models.dto.response.TypeOutDto;
import com.nubo.guarantees.admin.api.service.GuaranteeAccountService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
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

import java.util.List;

@Tag(name = "Guarantee Account")
@RestController
@RequestMapping("/{version}/guarantee-account")
@RequiredArgsConstructor
public class GuaranteeAccountRestController {

    private final GuaranteeAccountService guaranteeAccountService;

    @Operation(summary = "Find type account guarantee", description = "Find type account guarantee")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response",
                    content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                            schema = @Schema(implementation = TypeOutDto[].class)))})
    @GetMapping("/type")
    public ResponseEntity<List<TypeOutDto>> findTypeAccountGuarantees() {
        return ResponseEntity.ok(guaranteeAccountService.findTypeAccountGuarantees());
    }

    @Operation(summary = "Find all guarantees account", description = "Find all guarantees account")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = GuaranteeAccountOutDto[].class)))})
    @GetMapping("/search")
    public ResponseEntity<PageResponseOutDto<GuaranteeAccountOutDto>> findAllGuaranteesAccount(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "id") String sort,
            @RequestParam(defaultValue = "asc") String order,
            @RequestParam(defaultValue = "false") boolean all,
            @Parameter(example = "1") Long accountTypeId,
            @Parameter(example = "001") @RequestParam(required = false) String text
    ) {
        return ResponseEntity.ok(guaranteeAccountService.findAllGuaranteesAccount(accountTypeId, text, page, size, sort, order, all));
    }

}

```

## src/main/java/com/nubo/guarantees/admin/api/web/controller/GuaranteesRestController.java

```java
package com.nubo.guarantees.admin.api.web.controller;

import com.nubo.guarantees.admin.api.models.dto.request.GuaranteesInDto;
import com.nubo.guarantees.admin.api.models.dto.response.GuaranteesOutDto;
import com.nubo.guarantees.admin.api.models.dto.response.PageResponseOutDto;
import com.nubo.guarantees.admin.api.service.GuaranteesService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
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

@Tag(name = "Guarantees")
@RestController
@RequestMapping("/{version}/guarantees")
@RequiredArgsConstructor
public class GuaranteesRestController {

    private final GuaranteesService guaranteesService;

    @Operation(summary = "Find all guarantees for administration", description = "Find all guarantees for administration")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = GuaranteesOutDto.class)))})
    @GetMapping("/guarantees-admin-by-filters")
    public ResponseEntity<PageResponseOutDto<GuaranteesOutDto>> findPagedDataGuaranteesByFilters(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "countryId") String sort,
            @RequestParam(defaultValue = "asc") String order,
            @RequestParam(defaultValue = "false") boolean all,
            @Parameter(example = "1") @RequestParam(required = false) Long countryId,
            @Parameter(example = "1") @RequestParam(required = false) Long participantId,
            @Parameter(example = "1") @RequestParam(required = false) Long investorId,
            @Parameter(example = "1") @RequestParam(required = false) Long accountTypeId,
            @Parameter(example = "1") @RequestParam(required = false) Long guaranteeGlobalAccountId,
            @Parameter(example = "1") @RequestParam(required = false) Long guaranteeParticularAccountId,
            @Parameter(example = "1") @RequestParam(required = false) Long statusId) {
        GuaranteesInDto guaranteesInDto = GuaranteesInDto.builder()
                .countryId(countryId)
                .participantId(participantId)
                .investorId(investorId)
                .accountTypeId(accountTypeId)
                .guaranteeGlobalAccountId(guaranteeGlobalAccountId)
                .guaranteeParticularAccountId(guaranteeParticularAccountId)
                .statusId(statusId)
                .build();
        Sort sortBy = order.equalsIgnoreCase(Sort.Direction.ASC.name()) ?
                Sort.by(Sort.Order.asc(sort), Sort.Order.asc("id")) :
                Sort.by(Sort.Order.desc(sort), Sort.Order.desc("id"));
        Pageable pageable = PageRequest.of(page, size, sortBy);
        return ResponseEntity.ok(guaranteesService.findAllGuarantees(pageable, guaranteesInDto));
    }

    @Operation(summary = "Find all guarantees with dynamic filters", description = "Find all guarantees with dynamic filters")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = GuaranteesOutDto.class)))})
    @GetMapping("/guarantees-admin-dynamic")
    public ResponseEntity<PageResponseOutDto<GuaranteesOutDto>> findPagedDataGuaranteesByFiltersDynamic(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(required = false) String fieldName,
            @RequestParam(required = false) String fieldValue,
            @RequestParam(required = false) String operation,
            @RequestParam(required = false) String sort,
            @RequestParam(required = false) String order,
            @Parameter(example = "1") @RequestParam(required = false) Long countryId,
            @Parameter(example = "1") @RequestParam(required = false) Long participantId,
            @Parameter(example = "1") @RequestParam(required = false) Long investorId,
            @Parameter(example = "1") @RequestParam(required = false) Long accountTypeId,
            @Parameter(example = "1") @RequestParam(required = false) Long guaranteeGlobalAccountId,
            @Parameter(example = "1") @RequestParam(required = false) Long guaranteeParticularAccountId,
            @Parameter(example = "1") @RequestParam(required = false) Long guaranteeId,
            @Parameter(example = "1") @RequestParam(required = false) Long statusId) {

        Pageable pageable;
        if (sort != null && order != null) {
            Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
            Sort sorting = Sort.by(direction, sort);
            pageable = PageRequest.of(page, size, sorting);
        } else {
            pageable = PageRequest.of(page, size);
        }

        return ResponseEntity.ok(
                guaranteesService.findPagedDataGuaranteesByFiltersDynamic(
                        pageable, fieldName, fieldValue, operation,
                        countryId, participantId, investorId, accountTypeId, guaranteeGlobalAccountId, guaranteeParticularAccountId,
                        guaranteeId, statusId
                )
        );
    }

}

```

## src/main/java/com/nubo/guarantees/admin/api/web/controller/InvestorRestController.java

```java
package com.nubo.guarantees.admin.api.web.controller;

import com.nubo.guarantees.admin.api.models.dto.response.InvestorOutDto;
import com.nubo.guarantees.admin.api.models.dto.response.PageResponseOutDto;
import com.nubo.guarantees.admin.api.service.InvestorService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
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

@Tag(name = "Investor")
@RequestMapping("/{version}/investor")
@RestController
@RequiredArgsConstructor
public class InvestorRestController {

    private final InvestorService investorService;

    @Operation(summary = "Find all investor by identification or name of investor in the Guarantees",
            description = "Find all investor by identification or name of investor in the Guarantees")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = InvestorOutDto.class)))})
    @GetMapping("/search")
    public ResponseEntity<PageResponseOutDto<InvestorOutDto>> findByInvestor(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "id") String sort,
            @RequestParam(defaultValue = "asc") String order,
            @RequestParam(defaultValue = "false") boolean all,
            @Parameter(example = "001") @RequestParam(required = false) String text) {
        return ResponseEntity.ok(investorService.findByInvestor(text, page, size, sort, order, all));
    }

}

```

## src/main/java/com/nubo/guarantees/admin/api/web/controller/ParticipantRestController.java

```java
package com.nubo.guarantees.admin.api.web.controller;

import com.nubo.guarantees.admin.api.models.dto.response.PageResponseOutDto;
import com.nubo.guarantees.admin.api.models.dto.response.ParticipantOutDto;
import com.nubo.guarantees.admin.api.service.ParticipantService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
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

@Tag(name = "Participant")
@RequestMapping("/{version}/participant")
@RestController
@RequiredArgsConstructor
public class ParticipantRestController {

    private final ParticipantService participantService;

    @Operation(summary = "Find all participant by code or name in the Guarantees ",
            description = "Find all participant by code or name in the Guarantees")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = ParticipantOutDto[].class)))})
    @GetMapping("/search")
    public ResponseEntity<PageResponseOutDto<ParticipantOutDto>> findByParticipant(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "id") String sort,
            @RequestParam(defaultValue = "asc") String order,
            @RequestParam(defaultValue = "false") boolean all,
            @Parameter(example = "001") @RequestParam(required = false) String text) {
        return ResponseEntity.ok(participantService.findByParticipant(text, page, size, sort, order, all));
    }

}

```

## src/main/java/com/nubo/guarantees/admin/api/web/controller/StatusRestController.java

```java
package com.nubo.guarantees.admin.api.web.controller;

import com.nubo.guarantees.admin.api.models.dto.response.StatusOutDto;
import com.nubo.guarantees.admin.api.service.StatusService;
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

@Tag(name = "Status")
@RestController
@RequestMapping("/{version}/status")
@RequiredArgsConstructor
public class StatusRestController {

    private final StatusService statusService;

    @Operation(summary = "Find all status of admin guarantees", description = "Find all status of admin guarantees")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = StatusOutDto[].class)))})
    @GetMapping
    public ResponseEntity<List<StatusOutDto>> findAllGuaranteesStatus() {
        return ResponseEntity.ok(statusService.findAllGuaranteesStatus());
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
 ,----.   ,--. ,--.  ,---.  ,------.   ,---.  ,--.  ,--.,--------.,------.,------. ,---.    ,---.  ,------.  ,--.   ,--.,--.,--.   ,--.  ,---.  ,------. ,--.
'  .-./   |  | |  | /  O  \ |  .--. ' /  O  \ |  ,'.|  |'--.  .--'|  .---'|  .---''   .-'  /  O  \ |  .-.  \ |   `.'   ||  ||   `.'   | /  O  \ |  .--. '|  |
|  | .---.|  | |  ||  .-.  ||  '--'.'|  .-.  ||  |' '  |   |  |   |  `--, |  `--, `.  `-. |  .-.  ||  |  \  :|  |'.'|  ||  ||  |'.'|  ||  .-.  ||  '--' ||  |
'  '--'  |'  '-'  '|  | |  ||  |\  \ |  | |  ||  | `   |   |  |   |  `---.|  `---..-'    ||  | |  ||  '--'  /|  |   |  ||  ||  |   |  ||  | |  ||  | --' |  |
 `------'  `-----' `--' `--'`--' '--'`--' `--'`--'  `--'   `--'   `------'`------'`-----' `--' `--'`-------' `--'   `--'`--'`--'   `--'`--' `--'`--'     `--'
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
