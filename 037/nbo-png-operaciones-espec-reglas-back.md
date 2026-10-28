# nbo-png-operaciones-espec-reglas-back

Código Java de producción y configuraciones, sin tests. Cada sección contiene el archivo original completo y su ruta. Captura: 28/10/2026.

## Índice

1. `.mvn/wrapper/maven-wrapper.properties`
2. `mvnw`
3. `mvnw.cmd`
4. `pom.xml`
5. `src/main/java/com/nubo/operations/special/rules/api/OperationsSpecialRulesApiApplication.java`
6. `src/main/java/com/nubo/operations/special/rules/api/application/annotations/ValidBigDecimal.java`
7. `src/main/java/com/nubo/operations/special/rules/api/application/config/SwaggerConfig.java`
8. `src/main/java/com/nubo/operations/special/rules/api/application/config/ValidBigDecimalConfig.java`
9. `src/main/java/com/nubo/operations/special/rules/api/application/config/WebConfig.java`
10. `src/main/java/com/nubo/operations/special/rules/api/application/context/GlobalContext.java`
11. `src/main/java/com/nubo/operations/special/rules/api/application/database/NamingStrategyConfig.java`
12. `src/main/java/com/nubo/operations/special/rules/api/application/database/UpperNamingConfig.java`
13. `src/main/java/com/nubo/operations/special/rules/api/application/filters/GlobalFilter.java`
14. `src/main/java/com/nubo/operations/special/rules/api/application/interceptors/GlobalInterceptor.java`
15. `src/main/java/com/nubo/operations/special/rules/api/application/properties/PropertiesConfig.java`
16. `src/main/java/com/nubo/operations/special/rules/api/application/properties/PropertiesContext.java`
17. `src/main/java/com/nubo/operations/special/rules/api/application/util/ApplicationUtils.java`
18. `src/main/java/com/nubo/operations/special/rules/api/application/util/RestClientUtils.java`
19. `src/main/java/com/nubo/operations/special/rules/api/client/operation/special/status/models/dto/request/StatusValidationClientInDto.java`
20. `src/main/java/com/nubo/operations/special/rules/api/client/operation/special/status/models/dto/response/BusinessRuleClientOutDto.java`
21. `src/main/java/com/nubo/operations/special/rules/api/client/operation/special/status/models/dto/response/CountryClientOutDto.java`
22. `src/main/java/com/nubo/operations/special/rules/api/client/operation/special/status/models/dto/response/StatusClientOutDto.java`
23. `src/main/java/com/nubo/operations/special/rules/api/client/operation/special/status/models/dto/response/StatusTransitionClientOutDto.java`
24. `src/main/java/com/nubo/operations/special/rules/api/client/operation/special/status/models/dto/response/StatusValidationClientOutDto.java`
25. `src/main/java/com/nubo/operations/special/rules/api/client/operation/special/status/service/OperationSpecialStatusClient.java`
26. `src/main/java/com/nubo/operations/special/rules/api/client/operation/special/status/service/impl/OperationSpecialStatusClientImpl.java`
27. `src/main/java/com/nubo/operations/special/rules/api/exception/ClientException.java`
28. `src/main/java/com/nubo/operations/special/rules/api/exception/ServiceException.java`
29. `src/main/java/com/nubo/operations/special/rules/api/exception/error/ErrorCode.java`
30. `src/main/java/com/nubo/operations/special/rules/api/exception/error/ErrorResponse.java`
31. `src/main/java/com/nubo/operations/special/rules/api/exception/error/ErrorValidation.java`
32. `src/main/java/com/nubo/operations/special/rules/api/exception/handler/GlobalExceptionHandler.java`
33. `src/main/java/com/nubo/operations/special/rules/api/helpers/MapperUtil.java`
34. `src/main/java/com/nubo/operations/special/rules/api/models/domain/BusinessRule.java`
35. `src/main/java/com/nubo/operations/special/rules/api/models/domain/InputRule.java`
36. `src/main/java/com/nubo/operations/special/rules/api/models/dto/request/BusinessRuleInDto.java`
37. `src/main/java/com/nubo/operations/special/rules/api/models/dto/request/ConciliationComparatorInDto.java`
38. `src/main/java/com/nubo/operations/special/rules/api/models/dto/request/RiskModelInDto.java`
39. `src/main/java/com/nubo/operations/special/rules/api/models/dto/request/StatusAllowedOptionsInDto.java`
40. `src/main/java/com/nubo/operations/special/rules/api/models/dto/request/StatusUpdateBusinessRuleInDto.java`
41. `src/main/java/com/nubo/operations/special/rules/api/models/dto/response/ActionOutDto.java`
42. `src/main/java/com/nubo/operations/special/rules/api/models/dto/response/BusinessRuleOutDto.java`
43. `src/main/java/com/nubo/operations/special/rules/api/models/dto/response/CountryOutDto.java`
44. `src/main/java/com/nubo/operations/special/rules/api/models/dto/response/RiskModelOutDto.java`
45. `src/main/java/com/nubo/operations/special/rules/api/models/dto/response/StatusAllowedOptionsOutDto.java`
46. `src/main/java/com/nubo/operations/special/rules/api/models/dto/response/StatusOutDto.java`
47. `src/main/java/com/nubo/operations/special/rules/api/models/dto/response/StatusUpdateBusinessRuleOutDto.java`
48. `src/main/java/com/nubo/operations/special/rules/api/models/entity/BusinessRuleEntity.java`
49. `src/main/java/com/nubo/operations/special/rules/api/models/entity/BusinessRuleValidationEntity.java`
50. `src/main/java/com/nubo/operations/special/rules/api/models/entity/BusinessRuleValidationKey.java`
51. `src/main/java/com/nubo/operations/special/rules/api/models/entity/CountryEntity.java`
52. `src/main/java/com/nubo/operations/special/rules/api/models/entity/CurrencyEntity.java`
53. `src/main/java/com/nubo/operations/special/rules/api/models/entity/IsinNumberEntity.java`
54. `src/main/java/com/nubo/operations/special/rules/api/models/entity/StatusActionBusinessRuleEntity.java`
55. `src/main/java/com/nubo/operations/special/rules/api/models/entity/StatusActionBusinessRuleKey.java`
56. `src/main/java/com/nubo/operations/special/rules/api/models/entity/StatusEntity.java`
57. `src/main/java/com/nubo/operations/special/rules/api/models/enums/CategoryEnum.java`
58. `src/main/java/com/nubo/operations/special/rules/api/models/enums/CodeBusinessRuleEnum.java`
59. `src/main/java/com/nubo/operations/special/rules/api/models/enums/OperationTypeEnum.java`
60. `src/main/java/com/nubo/operations/special/rules/api/models/enums/PropertiesEnum.java`
61. `src/main/java/com/nubo/operations/special/rules/api/models/enums/RuleMessageEnum.java`
62. `src/main/java/com/nubo/operations/special/rules/api/models/enums/VersionApiEnum.java`
63. `src/main/java/com/nubo/operations/special/rules/api/repository/BusinessRuleRepository.java`
64. `src/main/java/com/nubo/operations/special/rules/api/repository/BusinessRuleValidationRepository.java`
65. `src/main/java/com/nubo/operations/special/rules/api/repository/CountryRepository.java`
66. `src/main/java/com/nubo/operations/special/rules/api/repository/IsinNumberRepository.java`
67. `src/main/java/com/nubo/operations/special/rules/api/repository/StatusActionBusinessRuleRepository.java`
68. `src/main/java/com/nubo/operations/special/rules/api/repository/StatusRepository.java`
69. `src/main/java/com/nubo/operations/special/rules/api/service/ConciliationBusinessRulesService.java`
70. `src/main/java/com/nubo/operations/special/rules/api/service/OperationSpecialBusinessRulesService.java`
71. `src/main/java/com/nubo/operations/special/rules/api/service/RiskModelBusinessRuleService.java`
72. `src/main/java/com/nubo/operations/special/rules/api/service/RuleService.java`
73. `src/main/java/com/nubo/operations/special/rules/api/service/StatusAllowedOptionsService.java`
74. `src/main/java/com/nubo/operations/special/rules/api/service/StatusUpdateBusinessRuleService.java`
75. `src/main/java/com/nubo/operations/special/rules/api/service/impl/ConciliationBusinessRulesServiceImpl.java`
76. `src/main/java/com/nubo/operations/special/rules/api/service/impl/OperationSpecialBusinessRulesServiceImpl.java`
77. `src/main/java/com/nubo/operations/special/rules/api/service/impl/RiskModelBusinessRuleServiceImpl.java`
78. `src/main/java/com/nubo/operations/special/rules/api/service/impl/RuleServiceImpl.java`
79. `src/main/java/com/nubo/operations/special/rules/api/service/impl/StatusAllowedOptionsServiceImpl.java`
80. `src/main/java/com/nubo/operations/special/rules/api/service/impl/StatusUpdateBusinessRuleServiceImpl.java`
81. `src/main/java/com/nubo/operations/special/rules/api/web/controller/ConciliationBusinessRulesRestController.java`
82. `src/main/java/com/nubo/operations/special/rules/api/web/controller/OperationSpecialBusinessRulesRestController.java`
83. `src/main/java/com/nubo/operations/special/rules/api/web/controller/RiskModelBusinessRuleRestController.java`
84. `src/main/java/com/nubo/operations/special/rules/api/web/controller/StatusAllowedOptionsRestController.java`
85. `src/main/java/com/nubo/operations/special/rules/api/web/controller/StatusUpdateBusinessRuleRestController.java`
86. `src/main/resources/application-dev.yml`
87. `src/main/resources/application-local.yml`
88. `src/main/resources/application-prod.yml`
89. `src/main/resources/application-qa.yml`
90. `src/main/resources/application-uat.yml`
91. `src/main/resources/application.yml`
92. `src/main/resources/banner.txt`
93. `src/main/resources/log/JsonEventLayout_error.json`
94. `src/main/resources/log/JsonEventLayout_info.json`
95. `src/main/resources/log/JsonEventLayout_trace.json`
96. `src/main/resources/log/log4j2-prod.properties`
97. `src/main/resources/log/log4j2.properties`

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
	<groupId>com.nubo.operations.special.rules.api</groupId>
	<artifactId>operations-special-rules-api</artifactId>
	<version>0.35.0</version>
	<name>${project.artifactId}</name>
	<description>Operations Special Rules Api</description>

	<properties>
		<java.version>17</java.version>
		<spring.port>8080</spring.port>
		<test.skip>false</test.skip>
		<datasource.url.application.name>ApplicationName=${project.artifactId}</datasource.url.application.name>
		<hikari.pool.name>${project.artifactId}-pool</hikari.pool.name>
		<!-- Security vulnerability fixes -->
		<org.json.version>20231013</org.json.version>
		<nimbus-jose-jwt.version>10.0.2</nimbus-jose-jwt.version>
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
		<!-- vulnerability adjustment  -->
		<dependency>
			<groupId>org.xmlunit</groupId>
			<artifactId>xmlunit-core</artifactId>
			<version>2.10.0</version>
			<scope>test</scope>
		</dependency>
		<dependency>
			<groupId>commons-io</groupId>
			<artifactId>commons-io</artifactId>
			<version>2.18.0</version>
		</dependency>
		<dependency>
			<groupId>org.apache.commons</groupId>
			<artifactId>commons-lang3</artifactId>
			<version>3.18.0</version>
		</dependency>

		<!-- Security vulnerability fixes - explicit versions after exclusions -->
		<dependency>
			<groupId>org.json</groupId>
			<artifactId>json</artifactId>
			<version>${org.json.version}</version>
		</dependency>

		<dependency>
			<groupId>com.nimbusds</groupId>
			<artifactId>nimbus-jose-jwt</artifactId>
			<version>${nimbus-jose-jwt.version}</version>
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
								<exclude>**/OperationsSpecialRulesApiApplication.class</exclude>
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

## src/main/java/com/nubo/operations/special/rules/api/OperationsSpecialRulesApiApplication.java

```java
package com.nubo.operations.special.rules.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class OperationsSpecialRulesApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(OperationsSpecialRulesApiApplication.class, args);
	}

}

```

## src/main/java/com/nubo/operations/special/rules/api/application/annotations/ValidBigDecimal.java

```java
package com.nubo.operations.special.rules.api.application.annotations;

import com.nubo.operations.special.rules.api.application.config.ValidBigDecimalConfig;
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

## src/main/java/com/nubo/operations/special/rules/api/application/config/SwaggerConfig.java

```java
package com.nubo.operations.special.rules.api.application.config;

import com.nubo.operations.special.rules.api.exception.error.ErrorResponse;
import com.nubo.operations.special.rules.api.exception.error.ErrorValidation;
import com.nubo.operations.special.rules.api.models.enums.PropertiesEnum;
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

## src/main/java/com/nubo/operations/special/rules/api/application/config/ValidBigDecimalConfig.java

```java
package com.nubo.operations.special.rules.api.application.config;

import com.nubo.operations.special.rules.api.application.annotations.ValidBigDecimal;
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

## src/main/java/com/nubo/operations/special/rules/api/application/config/WebConfig.java

```java
package com.nubo.operations.special.rules.api.application.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestClient;
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

    @Bean
    public RestClient restClient() {
        return RestClient.create();
    }

}

```

## src/main/java/com/nubo/operations/special/rules/api/application/context/GlobalContext.java

```java
package com.nubo.operations.special.rules.api.application.context;

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

## src/main/java/com/nubo/operations/special/rules/api/application/database/NamingStrategyConfig.java

```java
package com.nubo.operations.special.rules.api.application.database;

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

## src/main/java/com/nubo/operations/special/rules/api/application/database/UpperNamingConfig.java

```java
package com.nubo.operations.special.rules.api.application.database;

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

## src/main/java/com/nubo/operations/special/rules/api/application/filters/GlobalFilter.java

```java
package com.nubo.operations.special.rules.api.application.filters;

import com.nubo.operations.special.rules.api.application.context.GlobalContext;
import com.nubo.operations.special.rules.api.application.util.ApplicationUtils;
import com.nubo.operations.special.rules.api.exception.ServiceException;
import com.nubo.operations.special.rules.api.exception.error.ErrorCode;
import com.nubo.operations.special.rules.api.exception.error.ErrorResponse;
import com.nubo.operations.special.rules.api.models.enums.PropertiesEnum;
import com.nubo.operations.special.rules.api.models.enums.VersionApiEnum;
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

## src/main/java/com/nubo/operations/special/rules/api/application/interceptors/GlobalInterceptor.java

```java
package com.nubo.operations.special.rules.api.application.interceptors;

import com.nubo.operations.special.rules.api.application.context.GlobalContext;
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

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {
        return true;
    }

}
```

## src/main/java/com/nubo/operations/special/rules/api/application/properties/PropertiesConfig.java

```java
package com.nubo.operations.special.rules.api.application.properties;

import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
@Getter
public class PropertiesConfig {

    @Value("${spring.application.name}")
    private String apiName;

    @Value("${client.nubo.url-operation-special-status}")
    private String urlNuboOperationSpecialStatus;
}

```

## src/main/java/com/nubo/operations/special/rules/api/application/properties/PropertiesContext.java

```java
package com.nubo.operations.special.rules.api.application.properties;

import com.nubo.operations.special.rules.api.application.context.GlobalContext;
import com.nubo.operations.special.rules.api.application.util.ApplicationUtils;
import com.nubo.operations.special.rules.api.models.enums.PropertiesEnum;
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

## src/main/java/com/nubo/operations/special/rules/api/application/util/ApplicationUtils.java

```java
package com.nubo.operations.special.rules.api.application.util;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.nubo.operations.special.rules.api.exception.ServiceException;
import com.nubo.operations.special.rules.api.exception.error.ErrorCode;

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

}


```

## src/main/java/com/nubo/operations/special/rules/api/application/util/RestClientUtils.java

```java
package com.nubo.operations.special.rules.api.application.util;

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
        log.info("Client [{}] {}", method, url);
        return restClient.method(method)
                .uri(url)
                .headers(h -> h.addAll(headers))
                .body(requestBody)
                .retrieve()
                .toEntity(responseType);
    }

    public <T> ResponseEntity<T> requestWithResponseObject(URI url, HttpMethod method, HttpHeaders headers,
            Class<T> responseType) {
        log.info("Client [{}] {}", method, url);
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

## src/main/java/com/nubo/operations/special/rules/api/client/operation/special/status/models/dto/request/StatusValidationClientInDto.java

```java
package com.nubo.operations.special.rules.api.client.operation.special.status.models.dto.request;

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

## src/main/java/com/nubo/operations/special/rules/api/client/operation/special/status/models/dto/response/BusinessRuleClientOutDto.java

```java
package com.nubo.operations.special.rules.api.client.operation.special.status.models.dto.response;

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

## src/main/java/com/nubo/operations/special/rules/api/client/operation/special/status/models/dto/response/CountryClientOutDto.java

```java
package com.nubo.operations.special.rules.api.client.operation.special.status.models.dto.response;

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

## src/main/java/com/nubo/operations/special/rules/api/client/operation/special/status/models/dto/response/StatusClientOutDto.java

```java
package com.nubo.operations.special.rules.api.client.operation.special.status.models.dto.response;

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

## src/main/java/com/nubo/operations/special/rules/api/client/operation/special/status/models/dto/response/StatusTransitionClientOutDto.java

```java
package com.nubo.operations.special.rules.api.client.operation.special.status.models.dto.response;

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

## src/main/java/com/nubo/operations/special/rules/api/client/operation/special/status/models/dto/response/StatusValidationClientOutDto.java

```java
package com.nubo.operations.special.rules.api.client.operation.special.status.models.dto.response;

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

## src/main/java/com/nubo/operations/special/rules/api/client/operation/special/status/service/OperationSpecialStatusClient.java

```java
package com.nubo.operations.special.rules.api.client.operation.special.status.service;

import com.nubo.operations.special.rules.api.client.operation.special.status.models.dto.request.StatusValidationClientInDto;
import com.nubo.operations.special.rules.api.client.operation.special.status.models.dto.response.StatusTransitionClientOutDto;
import com.nubo.operations.special.rules.api.client.operation.special.status.models.dto.response.StatusValidationClientOutDto;

public interface OperationSpecialStatusClient {

    StatusValidationClientOutDto validationTransitionStatus(StatusValidationClientInDto statusValidationClientInDto);

    StatusTransitionClientOutDto transitionByBusinessRuleIdAndOriginStatusId(Long businessRuleId, Long originStatusId);

}

```

## src/main/java/com/nubo/operations/special/rules/api/client/operation/special/status/service/impl/OperationSpecialStatusClientImpl.java

```java
package com.nubo.operations.special.rules.api.client.operation.special.status.service.impl;

import com.nubo.operations.special.rules.api.application.properties.PropertiesConfig;
import com.nubo.operations.special.rules.api.application.properties.PropertiesContext;
import com.nubo.operations.special.rules.api.application.util.ApplicationUtils;
import com.nubo.operations.special.rules.api.application.util.RestClientUtils;
import com.nubo.operations.special.rules.api.client.operation.special.status.models.dto.request.StatusValidationClientInDto;
import com.nubo.operations.special.rules.api.client.operation.special.status.models.dto.response.StatusTransitionClientOutDto;
import com.nubo.operations.special.rules.api.client.operation.special.status.models.dto.response.StatusValidationClientOutDto;
import com.nubo.operations.special.rules.api.client.operation.special.status.service.OperationSpecialStatusClient;
import com.nubo.operations.special.rules.api.exception.ClientException;
import com.nubo.operations.special.rules.api.exception.error.ErrorCode;
import com.nubo.operations.special.rules.api.models.enums.OperationTypeEnum;
import com.nubo.operations.special.rules.api.models.enums.PropertiesEnum;
import com.nubo.operations.special.rules.api.models.enums.VersionApiEnum;
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
public class OperationSpecialStatusClientImpl implements OperationSpecialStatusClient {

    private final RestClientUtils restClientUtils;
    private final PropertiesConfig propertiesConfig;

    private static final String TRANSITION_STATUS = "status-transition/operation-type/";
    private static final String PATH_TRANSITION_STATUS_SPECIAL_OPERATION = "/validation";
    private static final String PATH_TRANSITION_BUSINESS_RULE_STATUS_SPECIAL_OPERATION = "/business-rule/{businessRuleId}/origin-status/{originStatusId}";

    @Override
    public StatusValidationClientOutDto validationTransitionStatus(StatusValidationClientInDto statusValidationClientInDto) {
        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getUrlNuboOperationSpecialStatus())
                .pathSegment(VersionApiEnum.V1.getValue(), TRANSITION_STATUS)
                .path(OperationTypeEnum.SPECIAL_OPERATION.getCode().toString())
                .path(PATH_TRANSITION_STATUS_SPECIAL_OPERATION)
                .build()
                .toUri();

        try {
            ResponseEntity<StatusValidationClientOutDto> response = restClientUtils.requestBodyWithResponseObject(uri,
                    HttpMethod.POST, getHttpHeaders(), statusValidationClientInDto, StatusValidationClientOutDto.class);
            if (!ObjectUtils.isEmpty(response.getBody())) {
                StatusValidationClientOutDto statusValidationClientOutDto = response.getBody();
                log.info("Response client Status -> {}", statusValidationClientOutDto);
                return statusValidationClientOutDto;
            }
        } catch (Exception ex) {
            throw new ClientException(ErrorCode.CLIENT_OPERATION_SPECIAL_STATUS_ERROR, HttpStatus.BAD_GATEWAY, ex);
        }

        return StatusValidationClientOutDto.builder().build();
    }

    @Override
    public StatusTransitionClientOutDto transitionByBusinessRuleIdAndOriginStatusId(Long businessRuleId, Long originStatusId) {
        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getUrlNuboOperationSpecialStatus())
                .pathSegment(VersionApiEnum.V1.getValue(), TRANSITION_STATUS)
                .path(OperationTypeEnum.SPECIAL_OPERATION.getCode().toString())
                .path(PATH_TRANSITION_BUSINESS_RULE_STATUS_SPECIAL_OPERATION)
                .buildAndExpand(businessRuleId, originStatusId)
                .toUri();

        try {
            ResponseEntity<StatusTransitionClientOutDto> response = restClientUtils.requestWithResponseObject(uri,
                    HttpMethod.GET, getHttpHeaders(), StatusTransitionClientOutDto.class);
            if (!ObjectUtils.isEmpty(response.getBody())) {
                StatusTransitionClientOutDto statusTransitionClientOutDto = response.getBody();
                log.info("Response client Status -> {}", statusTransitionClientOutDto);
                return statusTransitionClientOutDto;
            }
        } catch (Exception ex) {
            throw new ClientException(ErrorCode.CLIENT_OPERATION_SPECIAL_STATUS_ERROR, HttpStatus.BAD_GATEWAY, ex);
        }
        return StatusTransitionClientOutDto.builder().build();
    }

    private static HttpHeaders getHttpHeaders() {
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

## src/main/java/com/nubo/operations/special/rules/api/exception/ClientException.java

```java
package com.nubo.operations.special.rules.api.exception;

import com.nubo.operations.special.rules.api.exception.error.ErrorCode;
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

## src/main/java/com/nubo/operations/special/rules/api/exception/ServiceException.java

```java
package com.nubo.operations.special.rules.api.exception;

import com.nubo.operations.special.rules.api.exception.error.ErrorCode;
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

    public ServiceException(ErrorCode errorCode, String message, HttpStatus httpStatus) {
        super(errorCode.getMessage() + " " + message);
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

## src/main/java/com/nubo/operations/special/rules/api/exception/error/ErrorCode.java

```java
package com.nubo.operations.special.rules.api.exception.error;

import lombok.Getter;

@Getter
public enum ErrorCode {

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
    COUNTRY_NOT_FOUND("Country not found"),
    BUSINESS_RULE_NOT_FOUND("Business rule not found"),
    STATUS_NOT_FOUND("Status not found"),
    CLIENT_OPERATION_SPECIAL_STATUS_ERROR("Error Operation special Status"),
    ACTION_BUSINESS_RULE_NOT_FOUND("Status Action Business rule not found");

    private final String message;

    ErrorCode(String message) {
        this.message = message;
    }

    public String getName() {
        return this.name();
    }

}

```

## src/main/java/com/nubo/operations/special/rules/api/exception/error/ErrorResponse.java

```java
package com.nubo.operations.special.rules.api.exception.error;

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

## src/main/java/com/nubo/operations/special/rules/api/exception/error/ErrorValidation.java

```java
package com.nubo.operations.special.rules.api.exception.error;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ErrorValidation {

    private String id;
    private String description;

}

```

## src/main/java/com/nubo/operations/special/rules/api/exception/handler/GlobalExceptionHandler.java

```java
package com.nubo.operations.special.rules.api.exception.handler;

import com.nubo.operations.special.rules.api.application.properties.PropertiesContext;
import com.nubo.operations.special.rules.api.application.util.ApplicationUtils;
import com.nubo.operations.special.rules.api.exception.ClientException;
import com.nubo.operations.special.rules.api.exception.ServiceException;
import com.nubo.operations.special.rules.api.exception.error.ErrorCode;
import com.nubo.operations.special.rules.api.exception.error.ErrorResponse;
import com.nubo.operations.special.rules.api.exception.error.ErrorValidation;
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

## src/main/java/com/nubo/operations/special/rules/api/helpers/MapperUtil.java

```java
package com.nubo.operations.special.rules.api.helpers;

import com.nubo.operations.special.rules.api.client.operation.special.status.models.dto.request.StatusValidationClientInDto;
import com.nubo.operations.special.rules.api.client.operation.special.status.models.dto.response.StatusClientOutDto;
import com.nubo.operations.special.rules.api.client.operation.special.status.models.dto.response.StatusTransitionClientOutDto;
import com.nubo.operations.special.rules.api.models.dto.request.StatusUpdateBusinessRuleInDto;
import com.nubo.operations.special.rules.api.models.dto.response.ActionOutDto;
import com.nubo.operations.special.rules.api.models.dto.response.BusinessRuleOutDto;
import com.nubo.operations.special.rules.api.models.dto.response.CountryOutDto;
import com.nubo.operations.special.rules.api.models.dto.response.RiskModelOutDto;
import com.nubo.operations.special.rules.api.models.dto.response.StatusAllowedOptionsOutDto;
import com.nubo.operations.special.rules.api.models.dto.response.StatusOutDto;
import com.nubo.operations.special.rules.api.models.dto.response.StatusUpdateBusinessRuleOutDto;
import com.nubo.operations.special.rules.api.models.entity.BusinessRuleEntity;
import com.nubo.operations.special.rules.api.models.entity.CountryEntity;
import com.nubo.operations.special.rules.api.models.entity.IsinNumberEntity;
import com.nubo.operations.special.rules.api.models.entity.StatusActionBusinessRuleEntity;
import com.nubo.operations.special.rules.api.models.entity.StatusEntity;

import java.util.List;

import org.springframework.util.ObjectUtils;

public final class MapperUtil {

    private MapperUtil() {
    }

    public static BusinessRuleOutDto businessRulesEntityToBusinessRuleOutDto(
            BusinessRuleEntity BusinessRulesEntity) {
        return BusinessRuleOutDto.builder()
                .id(BusinessRulesEntity.getId())
                .country(countryEntityToCountryOutDto(BusinessRulesEntity.getCountry()))
                .code(BusinessRulesEntity.getCode())
                .description(BusinessRulesEntity.getDescription())
                .value(BusinessRulesEntity.getValue())
                .build();
    }

    public static CountryOutDto countryEntityToCountryOutDto(CountryEntity countryEntity) {
        if (ObjectUtils.isEmpty(countryEntity)) return null;
        return CountryOutDto.builder()
                .id(countryEntity.getId())
                .code(countryEntity.getCode())
                .name(countryEntity.getName())
                .timeZone(countryEntity.getTimeZone())
                .build();
    }

    public static StatusOutDto statusEntityToStatusOutDto(StatusEntity statusEntity) {
        if (ObjectUtils.isEmpty(statusEntity)) return null;
        return StatusOutDto.builder()
                .id(statusEntity.getId())
                .shortName(statusEntity.getShortName())
                .description(statusEntity.getDescription())
                .category(statusEntity.getCategory())
                .detail(statusEntity.getDetail())
                .build();
    }

    public static ActionOutDto statusActionBusinessRuleEntityToActionOutDto(
            StatusActionBusinessRuleEntity ruleActionEntity) {
        if (ObjectUtils.isEmpty(ruleActionEntity)) return null;
        return ActionOutDto.builder()
                .status(statusEntityToStatusOutDto(ruleActionEntity.getStatus()))
                .description(ruleActionEntity.getDescription())
                .valid(ruleActionEntity.getValid())
                .value(ruleActionEntity.getValue())
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

    public static RiskModelOutDto isinNumberEntityToRiskModelOutDto(IsinNumberEntity isinNumberEntity) {
        return RiskModelOutDto.builder()
                .isinNumberId(isinNumberEntity.getId())
                .securityTitleId(isinNumberEntity.getSecurityId())
                .value(true)
                .build();
    }

    public static RiskModelOutDto buildDescriptionRiskModelOutDto(String description) {
        return RiskModelOutDto.builder()
                .description(description)
                .value(false)
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
            Boolean result, String description, StatusTransitionClientOutDto statusTransitionClientOutDto){
        return StatusUpdateBusinessRuleOutDto.builder()
                .isValid(result)
                .description(description)
                .originStatus(ObjectUtils.isEmpty(statusTransitionClientOutDto) ?
                        null : statusClientOutDtoToStatusOutDto(statusTransitionClientOutDto.getOriginStatus()))
                .targetStatus(ObjectUtils.isEmpty(statusTransitionClientOutDto) ?
                        null : statusClientOutDtoToStatusOutDto(statusTransitionClientOutDto.getTargetStatus()))
                .build();
    }

    public static StatusOutDto statusClientOutDtoToStatusOutDto(StatusClientOutDto statusClientOutDto) {
        if (ObjectUtils.isEmpty(statusClientOutDto)) return null;
        return StatusOutDto.builder()
                .id(statusClientOutDto.getId())
                .shortName(statusClientOutDto.getShortName())
                .description(statusClientOutDto.getDescription())
                .category(statusClientOutDto.getCategory())
                .detail(statusClientOutDto.getDetail())
                .build();
    }

    public static BusinessRuleOutDto statusActionBusinessRuleEntityListToBusinessRuleOutDto(
            BusinessRuleEntity businessRuleEntity, List<StatusActionBusinessRuleEntity> statusActionBusinessRuleEntityList) {
        if (ObjectUtils.isEmpty(businessRuleEntity)) return null;
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

}

```

## src/main/java/com/nubo/operations/special/rules/api/models/domain/BusinessRule.java

```java
package com.nubo.operations.special.rules.api.models.domain;

public record BusinessRule(
        Boolean isValid,
        String description,
        Long businessRuleId
){}
```

## src/main/java/com/nubo/operations/special/rules/api/models/domain/InputRule.java

```java
package com.nubo.operations.special.rules.api.models.domain;

import java.time.LocalDate;

public record InputRule(
        LocalDate clearingDate,
        Boolean assignmentMarkBuy,
        Boolean assignmentMarkSell,
        Boolean salesGuarantee,
        Boolean purchaseGuarantee,
        String marketId
) {}

```

## src/main/java/com/nubo/operations/special/rules/api/models/dto/request/BusinessRuleInDto.java

```java
package com.nubo.operations.special.rules.api.models.dto.request;

import java.time.LocalDate;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
public class BusinessRuleInDto {

    @NotNull
    private Long countryId;

    private LocalDate clearingDate;

    private Boolean salesGuarantee;

    private Boolean purchaseGuarantee;

    private String marketId;

    private Boolean assignmentMarkBuy;

    private Boolean assignmentMarkSell;

}

```

## src/main/java/com/nubo/operations/special/rules/api/models/dto/request/ConciliationComparatorInDto.java

```java
package com.nubo.operations.special.rules.api.models.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ConciliationComparatorInDto {

    private Integer transactionsDifferenceQuantity;

    private Integer debitDifferenceQuantity;

    private BigDecimal debitDifferenceAmount;

    private Integer creditDifferenceQuantity;

    private BigDecimal creditDifferenceAmount;

    private BigDecimal balanceDifferencePrevious;

    private BigDecimal balanceDifferenceFinal;

    private Integer quantityDifferencesTotal;

}

```

## src/main/java/com/nubo/operations/special/rules/api/models/dto/request/RiskModelInDto.java

```java
package com.nubo.operations.special.rules.api.models.dto.request;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RiskModelInDto {

    @NotNull
    private String isinNumber;

    @NotNull
    private String marketId;

    @NotNull
    @Min(value = 1)
    private Long currencyId;

    @NotNull
    @Min(value = 1)
    private Long countryId;
}

```

## src/main/java/com/nubo/operations/special/rules/api/models/dto/request/StatusAllowedOptionsInDto.java

```java
package com.nubo.operations.special.rules.api.models.dto.request;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import lombok.experimental.SuperBuilder;

@Getter
@Setter
@ToString
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
public class StatusAllowedOptionsInDto extends BusinessRuleInDto {

    @NotNull
    private String code;
    
    @NotNull
    @Min(value = 1)
    private Long assignmentStatusId;

    @Min(value = 1)
    private Long custodianStatusId;

    @Min(value = 1)
    private Long settlementStatusId;

}

```

## src/main/java/com/nubo/operations/special/rules/api/models/dto/request/StatusUpdateBusinessRuleInDto.java

```java
package com.nubo.operations.special.rules.api.models.dto.request;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import lombok.experimental.SuperBuilder;

@Getter
@Setter
@ToString
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
public class StatusUpdateBusinessRuleInDto extends BusinessRuleInDto {

    @NotNull
    private Long originStatusId;

    @NotNull
    private Long targetStatusId;

}

```

## src/main/java/com/nubo/operations/special/rules/api/models/dto/response/ActionOutDto.java

```java
package com.nubo.operations.special.rules.api.models.dto.response;

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

    private StatusOutDto status;

    private String description;

    private Boolean valid;

    private String value;

}

```

## src/main/java/com/nubo/operations/special/rules/api/models/dto/response/BusinessRuleOutDto.java

```java
package com.nubo.operations.special.rules.api.models.dto.response;

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

    private String validation;

    private CountryOutDto country;

    private List<ActionOutDto> actions;

}


```

## src/main/java/com/nubo/operations/special/rules/api/models/dto/response/CountryOutDto.java

```java
package com.nubo.operations.special.rules.api.models.dto.response;

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

## src/main/java/com/nubo/operations/special/rules/api/models/dto/response/RiskModelOutDto.java

```java
package com.nubo.operations.special.rules.api.models.dto.response;

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
public class RiskModelOutDto {

    private Long isinNumberId;

    private Long securityTitleId;

    private String description;

    private Boolean value;
}

```

## src/main/java/com/nubo/operations/special/rules/api/models/dto/response/StatusAllowedOptionsOutDto.java

```java
package com.nubo.operations.special.rules.api.models.dto.response;

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

    private String code;

    private String description;

    private StatusOutDto newStatus;

}

```

## src/main/java/com/nubo/operations/special/rules/api/models/dto/response/StatusOutDto.java

```java
package com.nubo.operations.special.rules.api.models.dto.response;

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

    private String shortName;

    private String description;

    private String category;

    private String detail;
}

```

## src/main/java/com/nubo/operations/special/rules/api/models/dto/response/StatusUpdateBusinessRuleOutDto.java

```java
package com.nubo.operations.special.rules.api.models.dto.response;

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
public class StatusUpdateBusinessRuleOutDto {

    private Boolean isValid;

    private String description;

    private StatusOutDto originStatus;

    private StatusOutDto targetStatus;

}

```

## src/main/java/com/nubo/operations/special/rules/api/models/entity/BusinessRuleEntity.java

```java
package com.nubo.operations.special.rules.api.models.entity;

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

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50, nullable = false)
    private String lastModifyIp;

}

```

## src/main/java/com/nubo/operations/special/rules/api/models/entity/BusinessRuleValidationEntity.java

```java
package com.nubo.operations.special.rules.api.models.entity;

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

import java.time.LocalDateTime;

@Data
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

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50, nullable = false)
    private String lastModifyIp;
}

```

## src/main/java/com/nubo/operations/special/rules/api/models/entity/BusinessRuleValidationKey.java

```java
package com.nubo.operations.special.rules.api.models.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BusinessRuleValidationKey {

    private Long businessRule;

    private String code;

}

```

## src/main/java/com/nubo/operations/special/rules/api/models/entity/CountryEntity.java

```java
package com.nubo.operations.special.rules.api.models.entity;

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

## src/main/java/com/nubo/operations/special/rules/api/models/entity/CurrencyEntity.java

```java
package com.nubo.operations.special.rules.api.models.entity;

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

## src/main/java/com/nubo/operations/special/rules/api/models/entity/IsinNumberEntity.java

```java
package com.nubo.operations.special.rules.api.models.entity;

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

    @Column(name = "\"ISIN_NUMBER\"", length = 100)
    private String isinNumber;

    @Column(name = "\"COUNTRY_ID\"", nullable = false)
    private Long countryId;

    @Column(name = "\"MARKET_ID\"", nullable = false)
    private String marketId;

    @Column(name = "\"CURRENCY_ID\"", nullable = false)
    private Long currencyId;

    @Column(name = "\"SECURITY_ID\"", nullable = false)
    private Long securityId;

    @Column(name = "\"DESCRIPTION\"", nullable = false)
    private String description;

    @Column(name = "\"ISSUE_DATE\"", nullable = false)
    private LocalDate issueDate;

    @Column(name = "\"MATURITY_DATE\"", nullable = false)
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

## src/main/java/com/nubo/operations/special/rules/api/models/entity/StatusActionBusinessRuleEntity.java

```java
package com.nubo.operations.special.rules.api.models.entity;

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

import java.time.LocalDateTime;

@Data
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

    @Column(name = "\"LAST_MODIFY_IP\"", nullable = false)
    private String lastModifyIp;

}

```

## src/main/java/com/nubo/operations/special/rules/api/models/entity/StatusActionBusinessRuleKey.java

```java
package com.nubo.operations.special.rules.api.models.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class StatusActionBusinessRuleKey {

    private Long businessRule;

    private Long status;

}

```

## src/main/java/com/nubo/operations/special/rules/api/models/entity/StatusEntity.java

```java
package com.nubo.operations.special.rules.api.models.entity;

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

    @Column(name = "\"DESCRIPTION\"")
    private String description;

    @Column(name = "\"CATEGORY\"")
    private String category;

    @Column(name = "\"SHORTNAME\"")
    private String shortName;

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

## src/main/java/com/nubo/operations/special/rules/api/models/enums/CategoryEnum.java

```java
package com.nubo.operations.special.rules.api.models.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Arrays;
import java.util.Objects;

@Getter
@RequiredArgsConstructor
public enum CategoryEnum {

    REASSIGNMENT("REASIGNACION"),
    CUSTODIAN("CUSTODIO"),
    COMPLIANCE_TRADE("CUMPLIMIENTO_FOLIO"),
    COMPLIANCE_SETTLEMENT("CUMPLIMIENTO_BENEFICIAFIO_FINAL"),
    COMPLIANCE_SETTLEMENT_INSTRUCTIONS("CUMPLIMIENTO_FRACCION"),
    SPECIAL_OPERATION("OPERACION_ESPECIAL");

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

## src/main/java/com/nubo/operations/special/rules/api/models/enums/CodeBusinessRuleEnum.java

```java
package com.nubo.operations.special.rules.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum CodeBusinessRuleEnum {

    RULE_PAYMENT_SELLER("RULE_PAGO_VENDEDOR"),
    RULE_UNLOCK_REPIQUE("RULE_DESBLOQUEO_REPIQUE"),
    RULE_SEND_DEPOSIT("RULE_ENVIO_DEPOSITO"),
    RULE_BUYER_COLLECTION("RULE_RECAUDO_COMPRADOR"),
    RULE_CONCILIATION_DIFFERENCES("RULE_CONCILIATION_DIFFERENCES");

    private final String value;
}

```

## src/main/java/com/nubo/operations/special/rules/api/models/enums/OperationTypeEnum.java

```java
package com.nubo.operations.special.rules.api.models.enums;

import java.util.Arrays;

public enum OperationTypeEnum {
    OPERATION(60),
    SPECIAL_OPERATION(62);

    private final Integer code;

    OperationTypeEnum(Integer code) {
        this.code = code;
    }

    public Integer getCode() {
        return code;
    }

    public static OperationTypeEnum fromCode(Integer code) {
        if (code == null) {
            throw new IllegalArgumentException("operationType code is required");
        }
        return Arrays.stream(values())
                .filter(v -> v.code.equals(code))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Invalid operationType code: " + code));
    }

    public static OperationTypeEnum fromValue(String value) {
        if (value == null || value.isBlank()) {
            throw new IllegalArgumentException("operationType is required");
        }

        for (OperationTypeEnum v : values()) {
            if (v.name().equalsIgnoreCase(value)) {
                return v;
            }
        }

        try {
            return fromCode(Integer.parseInt(value));
        } catch (NumberFormatException ex) {
            throw new IllegalArgumentException("Invalid operationType: " + value, ex);
        }
    }
}


```

## src/main/java/com/nubo/operations/special/rules/api/models/enums/PropertiesEnum.java

```java
package com.nubo.operations.special.rules.api.models.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
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

}

```

## src/main/java/com/nubo/operations/special/rules/api/models/enums/RuleMessageEnum.java

```java
package com.nubo.operations.special.rules.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum RuleMessageEnum {

    INVALID_COMPLIANCE_RULE("No es posible completar la solicitud: no existe una regla para el estado y país ingresados."),
    SUCCESS_BUSINESS_RULE("Reglas de negocio validadas con éxito."),
    INVALID_STATUS_TRANSITION("No existe la transición del estado ingresado.");;

    private final String value;
}


```

## src/main/java/com/nubo/operations/special/rules/api/models/enums/VersionApiEnum.java

```java
package com.nubo.operations.special.rules.api.models.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
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

}

```

## src/main/java/com/nubo/operations/special/rules/api/repository/BusinessRuleRepository.java

```java
package com.nubo.operations.special.rules.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.nubo.operations.special.rules.api.models.entity.BusinessRuleEntity;

import java.util.Optional;

public interface BusinessRuleRepository extends JpaRepository<BusinessRuleEntity, Long> {

    @Query("""
            SELECT b FROM BusinessRuleEntity b
            JOIN b.country c
            WHERE c.id = :countryId
            AND b.code = :code
            """)
    Optional<BusinessRuleEntity> findByCountryIdAndCode(Long countryId, String code);

    Optional<BusinessRuleEntity> findByCode(String code);

}

```

## src/main/java/com/nubo/operations/special/rules/api/repository/BusinessRuleValidationRepository.java

```java
package com.nubo.operations.special.rules.api.repository;

import com.nubo.operations.special.rules.api.models.entity.BusinessRuleValidationEntity;
import com.nubo.operations.special.rules.api.models.entity.BusinessRuleValidationKey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BusinessRuleValidationRepository extends JpaRepository<BusinessRuleValidationEntity, BusinessRuleValidationKey> {

    @Query("""
            SELECT bv FROM BusinessRuleValidationEntity bv
            WHERE bv.businessRule.id = :businessRuleId
            """)
    List<BusinessRuleValidationEntity> findByBusinessRuleId(Long businessRuleId);
}


```

## src/main/java/com/nubo/operations/special/rules/api/repository/CountryRepository.java

```java
package com.nubo.operations.special.rules.api.repository;

import com.nubo.operations.special.rules.api.models.entity.CountryEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CountryRepository extends JpaRepository<CountryEntity, Long> {
}

```

## src/main/java/com/nubo/operations/special/rules/api/repository/IsinNumberRepository.java

```java
package com.nubo.operations.special.rules.api.repository;

import com.nubo.operations.special.rules.api.models.entity.IsinNumberEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface IsinNumberRepository extends JpaRepository<IsinNumberEntity, Long> {

    @Query("""
            SELECT i FROM IsinNumberEntity i
            WHERE i.isinNumber = :isinNumber
            AND i.countryId = :countryId
            AND i.marketId = :marketId
            AND i.currencyId = :currencyId
            """)
    Optional<IsinNumberEntity> findByIsinNumberAndCountryIdAndMarketIdAndCurrencyId(
            String isinNumber, Long countryId, String marketId, Long currencyId);
}

```

## src/main/java/com/nubo/operations/special/rules/api/repository/StatusActionBusinessRuleRepository.java

```java
package com.nubo.operations.special.rules.api.repository;

import com.nubo.operations.special.rules.api.models.entity.StatusActionBusinessRuleEntity;
import com.nubo.operations.special.rules.api.models.entity.StatusActionBusinessRuleKey;

import jakarta.validation.constraints.NotNull;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;
import java.util.Set;

public interface StatusActionBusinessRuleRepository extends JpaRepository<StatusActionBusinessRuleEntity, StatusActionBusinessRuleKey> {

    @Query("""
            SELECT sa FROM StatusActionBusinessRuleEntity sa
            JOIN sa.businessRule br
            LEFT JOIN sa.status s
            WHERE s.id = :statusId
            AND br.country.id = :countryId
            AND br.code = :code
            """)
    List<StatusActionBusinessRuleEntity> findByStatusIdAndCountryIdAndCode(Long statusId, Long countryId, String code);

    @Query("""
            SELECT sa FROM StatusActionBusinessRuleEntity sa
            JOIN sa.businessRule br
            LEFT JOIN sa.status s
            WHERE s.id = :statusId
                AND s.category IN :statusCategories
                AND br.code = :code
                AND (br.country.id = :countryId OR br.country.id IS NULL)
            ORDER BY
                CASE WHEN br.country.id = :countryId THEN 0 ELSE 1 END
            """)
    List<StatusActionBusinessRuleEntity> findByStatusAndCodeAndCountryId(
            @NotNull @Param("statusId") Long statusId,
            @NotNull @Param("statusCategories") Set<String> statusCategories,
            @NotNull @Param("code") String code,
            @NotNull @Param("countryId") Long countryId);

    @Query("""
            SELECT sa FROM StatusActionBusinessRuleEntity sa
            JOIN sa.businessRule br
            WHERE br.code = :code
            AND sa.value = :value
            """)
    Optional<StatusActionBusinessRuleEntity> findByCodeAndValue(String code, String value);

    @Query("""
            SELECT sa FROM StatusActionBusinessRuleEntity sa
            JOIN sa.businessRule br
            LEFT JOIN sa.status s
            WHERE br.id = :businessRuleId
            AND s.id = :statusId
            """)
    Optional<StatusActionBusinessRuleEntity> findByBusinessRulesIdAndStatusId(
            Long businessRuleId, Long statusId);

    @Query("""
            SELECT sa FROM StatusActionBusinessRuleEntity sa
            JOIN sa.businessRule br
            LEFT JOIN sa.status s
            WHERE br.category IN (:businessRuleCategories)
            AND br.code = :code
            AND br.country.id = :countryId
            AND sa.valid = true
            """)
    List<StatusActionBusinessRuleEntity> findAllActionByCodeAndCountryIdAndValidTrue(
        @NotNull @Param("businessRuleCategories") Set<String> businessRuleCategories,        
        @Param("code") String code,
        @Param("countryId") Long countryId);

    @Query("""
            SELECT sa FROM StatusActionBusinessRuleEntity sa
            JOIN sa.businessRule br
            LEFT JOIN sa.status s
            WHERE br.category IN (:businessRuleCategories)
            AND br.code = :code
            AND br.country.id IS NULL
            AND sa.valid = true
            """)
    List<StatusActionBusinessRuleEntity> findAllActionByCodeAndAllCountryAndValidTrue(
        @NotNull @Param("businessRuleCategories") Set<String> businessRuleCategories,        
        @Param("code") String code);

}

```

## src/main/java/com/nubo/operations/special/rules/api/repository/StatusRepository.java

```java
package com.nubo.operations.special.rules.api.repository;

import com.nubo.operations.special.rules.api.models.entity.StatusEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StatusRepository extends JpaRepository<StatusEntity, Long> {
}

```

## src/main/java/com/nubo/operations/special/rules/api/service/ConciliationBusinessRulesService.java

```java
package com.nubo.operations.special.rules.api.service;

import com.nubo.operations.special.rules.api.models.dto.request.ConciliationComparatorInDto;
import com.nubo.operations.special.rules.api.models.dto.response.ActionOutDto;

public interface ConciliationBusinessRulesService {

    ActionOutDto validateConciliationComparator(ConciliationComparatorInDto conciliationComparatorInDto);

}

```

## src/main/java/com/nubo/operations/special/rules/api/service/OperationSpecialBusinessRulesService.java

```java
package com.nubo.operations.special.rules.api.service;

import com.nubo.operations.special.rules.api.models.dto.response.BusinessRuleOutDto;

public interface OperationSpecialBusinessRulesService {

    BusinessRuleOutDto findBusinessRuleByCountryIdAndCode(Long countryId, String code);

    BusinessRuleOutDto findBusinessRuleByCode(String code);

    BusinessRuleOutDto findBusinessRuleByCountryAndCodeAndStatus(Long countryId, String code, Long statusId);
}

```

## src/main/java/com/nubo/operations/special/rules/api/service/RiskModelBusinessRuleService.java

```java
package com.nubo.operations.special.rules.api.service;

import com.nubo.operations.special.rules.api.models.dto.request.RiskModelInDto;
import com.nubo.operations.special.rules.api.models.dto.response.RiskModelOutDto;

public interface RiskModelBusinessRuleService {

    RiskModelOutDto validateRiskModel(RiskModelInDto riskModelInDto);
}

```

## src/main/java/com/nubo/operations/special/rules/api/service/RuleService.java

```java
package com.nubo.operations.special.rules.api.service;

import com.nubo.operations.special.rules.api.models.domain.BusinessRule;
import com.nubo.operations.special.rules.api.models.dto.request.BusinessRuleInDto;

public interface RuleService {

    BusinessRule validateExpression(Long businessRuleId, BusinessRuleInDto businessRuleInDto);
}

```

## src/main/java/com/nubo/operations/special/rules/api/service/StatusAllowedOptionsService.java

```java
package com.nubo.operations.special.rules.api.service;

import com.nubo.operations.special.rules.api.models.dto.request.StatusAllowedOptionsInDto;
import com.nubo.operations.special.rules.api.models.dto.response.BusinessRuleOutDto;
import com.nubo.operations.special.rules.api.models.dto.response.StatusAllowedOptionsOutDto;

public interface StatusAllowedOptionsService {

    StatusAllowedOptionsOutDto validateBusinessRuleBySettlement(StatusAllowedOptionsInDto statusAllowedOptionsInDto);

    StatusAllowedOptionsOutDto validateBusinessRuleBySettlementInstructions(StatusAllowedOptionsInDto statusAllowedOptionsInDto);

    StatusAllowedOptionsOutDto validateBusinessRuleByTrade(StatusAllowedOptionsInDto statusAllowedOptionsInDto);

    BusinessRuleOutDto actionBusinessRuleByCountryIdAndCodeValid(Long countryId, String code);
}

```

## src/main/java/com/nubo/operations/special/rules/api/service/StatusUpdateBusinessRuleService.java

```java
package com.nubo.operations.special.rules.api.service;

import com.nubo.operations.special.rules.api.models.dto.request.StatusUpdateBusinessRuleInDto;
import com.nubo.operations.special.rules.api.models.dto.response.StatusUpdateBusinessRuleOutDto;

public interface StatusUpdateBusinessRuleService {

    StatusUpdateBusinessRuleOutDto validateUpdateStatusSpecialOperation(StatusUpdateBusinessRuleInDto statusUpdateBusinessRuleInDto);
}

```

## src/main/java/com/nubo/operations/special/rules/api/service/impl/ConciliationBusinessRulesServiceImpl.java

```java
package com.nubo.operations.special.rules.api.service.impl;

import com.nubo.operations.special.rules.api.application.properties.PropertiesContext;
import com.nubo.operations.special.rules.api.exception.ServiceException;
import com.nubo.operations.special.rules.api.exception.error.ErrorCode;
import com.nubo.operations.special.rules.api.helpers.MapperUtil;
import com.nubo.operations.special.rules.api.models.dto.request.ConciliationComparatorInDto;
import com.nubo.operations.special.rules.api.models.dto.response.ActionOutDto;
import com.nubo.operations.special.rules.api.models.entity.StatusActionBusinessRuleEntity;
import com.nubo.operations.special.rules.api.models.enums.CodeBusinessRuleEnum;
import com.nubo.operations.special.rules.api.models.enums.VersionApiEnum;
import com.nubo.operations.special.rules.api.repository.StatusActionBusinessRuleRepository;
import com.nubo.operations.special.rules.api.service.ConciliationBusinessRulesService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.Objects;

@Service
@RequiredArgsConstructor
@Slf4j
public class ConciliationBusinessRulesServiceImpl implements ConciliationBusinessRulesService {

    private final StatusActionBusinessRuleRepository ruleActionRepository;

    @Override
    public ActionOutDto validateConciliationComparator(ConciliationComparatorInDto conciliationComparatorInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return validateConciliationComparatorV1(conciliationComparatorInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private ActionOutDto validateConciliationComparatorV1(ConciliationComparatorInDto conciliationComparatorInDto) {
        log.info("Start method validateConciliationComparatorV1, conciliationComparatorInDto -> {}", conciliationComparatorInDto);

        ActionOutDto ActionOutDto;

        if (conciliationComparatorInDto.getTransactionsDifferenceQuantity() == 0 &&
                conciliationComparatorInDto.getDebitDifferenceQuantity() == 0 &&
                conciliationComparatorInDto.getDebitDifferenceAmount().compareTo(BigDecimal.ZERO) == 0 &&
                conciliationComparatorInDto.getCreditDifferenceQuantity() == 0 &&
                conciliationComparatorInDto.getCreditDifferenceAmount().compareTo(BigDecimal.ZERO) == 0 &&
                conciliationComparatorInDto.getBalanceDifferencePrevious().compareTo(BigDecimal.ZERO) == 0 &&
                conciliationComparatorInDto.getBalanceDifferenceFinal().compareTo(BigDecimal.ZERO) == 0 &&
                conciliationComparatorInDto.getQuantityDifferencesTotal() == 0) {

            StatusActionBusinessRuleEntity actionBusinessRule =
                    ruleActionRepository.findByCodeAndValue(CodeBusinessRuleEnum.RULE_CONCILIATION_DIFFERENCES.getValue(), "WITHOUT_DIFFERENCES")
                            .orElseThrow(() -> new ServiceException(ErrorCode.ACTION_BUSINESS_RULE_NOT_FOUND, HttpStatus.NOT_FOUND));

            ActionOutDto = MapperUtil.statusActionBusinessRuleEntityToActionOutDto(actionBusinessRule);
        } else {
            StatusActionBusinessRuleEntity actionBusinessRueValue =
                    ruleActionRepository.findByCodeAndValue(CodeBusinessRuleEnum.RULE_CONCILIATION_DIFFERENCES.getValue(), "WITH_DIFFERENCES")
                            .orElseThrow(() -> new ServiceException(ErrorCode.ACTION_BUSINESS_RULE_NOT_FOUND, HttpStatus.NOT_FOUND));

            ActionOutDto = MapperUtil.statusActionBusinessRuleEntityToActionOutDto(actionBusinessRueValue);
        }

        log.info("End method validateConciliationComparatorV1, businessRuleActionOutDto -> {}", ActionOutDto);

        return ActionOutDto;
    }

}

```

## src/main/java/com/nubo/operations/special/rules/api/service/impl/OperationSpecialBusinessRulesServiceImpl.java

```java
package com.nubo.operations.special.rules.api.service.impl;

import com.nubo.operations.special.rules.api.application.properties.PropertiesContext;
import com.nubo.operations.special.rules.api.exception.ServiceException;
import com.nubo.operations.special.rules.api.exception.error.ErrorCode;
import com.nubo.operations.special.rules.api.helpers.MapperUtil;
import com.nubo.operations.special.rules.api.models.dto.response.BusinessRuleOutDto;
import com.nubo.operations.special.rules.api.models.entity.StatusActionBusinessRuleEntity;
import com.nubo.operations.special.rules.api.models.entity.BusinessRuleEntity;
import com.nubo.operations.special.rules.api.models.enums.VersionApiEnum;
import com.nubo.operations.special.rules.api.repository.StatusActionBusinessRuleRepository;
import com.nubo.operations.special.rules.api.repository.BusinessRuleRepository;
import com.nubo.operations.special.rules.api.service.OperationSpecialBusinessRulesService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class OperationSpecialBusinessRulesServiceImpl implements OperationSpecialBusinessRulesService {

    private final BusinessRuleRepository businessRulesRepository;
    private final StatusActionBusinessRuleRepository statusActionBusinessRuleRepository;

    @Override
    public BusinessRuleOutDto findBusinessRuleByCountryIdAndCode(Long countryId, String code) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findBusinessRuleByCountryIdAndCodeV1(countryId, code);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private BusinessRuleOutDto findBusinessRuleByCountryIdAndCodeV1(Long countryId, String code) {
        log.info("Start method findBusinessRuleV1, countryId -> {}, code -> {}", countryId, code);

        BusinessRuleEntity BusinessRulesEntity = validateBusinessRuleByCountryAndCode(countryId, code);

        BusinessRuleOutDto businessRuleOutDto = MapperUtil.businessRulesEntityToBusinessRuleOutDto(BusinessRulesEntity);

        log.info("End method findBusinessRuleV1, businessRuleOutDto -> {}", businessRuleOutDto);

        return businessRuleOutDto;
    }

    @Override
    public BusinessRuleOutDto findBusinessRuleByCode(String code) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findBusinessRuleByCodeV1(code);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private BusinessRuleOutDto findBusinessRuleByCodeV1(String code) {
        log.info("Start method findBusinessRuleByCodeV1, code -> {}", code);

        BusinessRuleEntity businessRuleEntity = businessRulesRepository.findByCode(code)
                .orElseThrow(() -> new ServiceException(ErrorCode.BUSINESS_RULE_NOT_FOUND, HttpStatus.NOT_FOUND));

        BusinessRuleOutDto businessRuleOutDto = MapperUtil.businessRulesEntityToBusinessRuleOutDto(businessRuleEntity);

        log.info("End method findBusinessRuleByCodeV1, businessRuleOutDto -> {}", businessRuleOutDto);

        return businessRuleOutDto;
    }

    @Override
    public BusinessRuleOutDto findBusinessRuleByCountryAndCodeAndStatus(Long countryId, String code, Long statusId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findBusinessRuleByCountryAndCodeAndStatusV1(countryId, code, statusId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private BusinessRuleOutDto findBusinessRuleByCountryAndCodeAndStatusV1(Long countryId, String code, Long statusId) {
        log.info("Start method findBusinessRuleByCountryAndCodeAndStatusV1, [countryId -> {}, code -> {}, statusId -> {}]",
                countryId, code, statusId);

        List<StatusActionBusinessRuleEntity> actionBusinessRuleEntityList = validateRuleByStatusAndCountryAndCode(statusId, countryId, code);

        BusinessRuleEntity businessRuleEntity = Optional.ofNullable(actionBusinessRuleEntityList)
                .filter(list -> !list.isEmpty())
                .map(list -> list.get(0))
                .map(StatusActionBusinessRuleEntity::getBusinessRule)
                .orElseThrow(() -> new ServiceException(ErrorCode.ACTION_BUSINESS_RULE_NOT_FOUND, HttpStatus.NOT_FOUND));

        BusinessRuleOutDto businessRuleOutDto = MapperUtil
                .statusActionBusinessRuleEntityListToBusinessRuleOutDto(businessRuleEntity, actionBusinessRuleEntityList);

        log.info("End method findBusinessRuleByCountryAndCodeAndStatusV1, BusinessRuleOutDto -> {}", businessRuleOutDto);
        return businessRuleOutDto;
    }

    private BusinessRuleEntity validateBusinessRuleByCountryAndCode(Long countryId, String code) {
        return businessRulesRepository.findByCountryIdAndCode(countryId, code)
                .orElseThrow(() -> new ServiceException(ErrorCode.BUSINESS_RULE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private List<StatusActionBusinessRuleEntity> validateRuleByStatusAndCountryAndCode(Long statusId, Long countryId, String code) {
        return statusActionBusinessRuleRepository.findByStatusIdAndCountryIdAndCode(statusId, countryId, code);
    }

}

```

## src/main/java/com/nubo/operations/special/rules/api/service/impl/RiskModelBusinessRuleServiceImpl.java

```java
package com.nubo.operations.special.rules.api.service.impl;

import com.nubo.operations.special.rules.api.application.properties.PropertiesContext;
import com.nubo.operations.special.rules.api.exception.ServiceException;
import com.nubo.operations.special.rules.api.exception.error.ErrorCode;
import com.nubo.operations.special.rules.api.helpers.MapperUtil;
import com.nubo.operations.special.rules.api.models.dto.request.RiskModelInDto;
import com.nubo.operations.special.rules.api.models.dto.response.RiskModelOutDto;
import com.nubo.operations.special.rules.api.models.entity.CountryEntity;
import com.nubo.operations.special.rules.api.models.entity.IsinNumberEntity;
import com.nubo.operations.special.rules.api.models.enums.VersionApiEnum;
import com.nubo.operations.special.rules.api.repository.CountryRepository;
import com.nubo.operations.special.rules.api.repository.IsinNumberRepository;
import com.nubo.operations.special.rules.api.service.RiskModelBusinessRuleService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.Objects;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class RiskModelBusinessRuleServiceImpl implements RiskModelBusinessRuleService {

    private final IsinNumberRepository isinNumberRepository;
    private final CountryRepository countryRepository;

    @Override
    public RiskModelOutDto validateRiskModel(RiskModelInDto riskModelInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return validateRiskModelV1(riskModelInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private RiskModelOutDto validateRiskModelV1(RiskModelInDto riskModelInDto) {
        log.info("Start method validateRiskModelV1, riskModelInDto -> {}", riskModelInDto);

        Optional<String> description = validateCountryAndCurrency(riskModelInDto);
        if (description.isPresent()) {
            String msg = description.get();
            log.warn("End method validateRiskModelV1, {}", msg);
            return MapperUtil.buildDescriptionRiskModelOutDto(msg);
        }

        Optional<IsinNumberEntity> isinNumberEntity = isinNumberRepository.findByIsinNumberAndCountryIdAndMarketIdAndCurrencyId(
                riskModelInDto.getIsinNumber(), riskModelInDto.getCountryId(), riskModelInDto.getMarketId(), riskModelInDto.getCurrencyId());
        if (isinNumberEntity.isEmpty()){
            String msg = "ISIN not found";
            log.warn("End method validateRiskModelV1, {}", msg);
            return MapperUtil.buildDescriptionRiskModelOutDto(msg);
        }
        RiskModelOutDto riskModelOutDto = MapperUtil.isinNumberEntityToRiskModelOutDto(isinNumberEntity.get());

        log.info("End method validateRiskModelV1, riskModelOutDto -> {}", riskModelOutDto);
        return riskModelOutDto;
    }

    private Optional<String> validateCountryAndCurrency(RiskModelInDto riskModelInDto) {
        CountryEntity countryEntity = validateCountryEntity(riskModelInDto.getCountryId());
        Long expectedCurrencyId = countryEntity.getCurrency().getId();
        Long inputCurrencyId = riskModelInDto.getCurrencyId();

        if (!expectedCurrencyId.equals(inputCurrencyId)) {
            String msg = String.format("CurrencyId mismatch: countryEntity.currency.id=%s vs input.currencyId=%s",
                    expectedCurrencyId, inputCurrencyId);
            return Optional.of(msg);
        }

        return Optional.empty();
    }

    private CountryEntity validateCountryEntity(Long id) {
        return countryRepository.findById(id)
                .orElseThrow(() -> new ServiceException(ErrorCode.COUNTRY_NOT_FOUND, HttpStatus.NOT_FOUND));
    }
}

```

## src/main/java/com/nubo/operations/special/rules/api/service/impl/RuleServiceImpl.java

```java
package com.nubo.operations.special.rules.api.service.impl;

import com.nubo.operations.special.rules.api.models.domain.BusinessRule;
import com.nubo.operations.special.rules.api.models.domain.InputRule;
import com.nubo.operations.special.rules.api.models.dto.request.BusinessRuleInDto;
import com.nubo.operations.special.rules.api.models.entity.BusinessRuleValidationEntity;
import com.nubo.operations.special.rules.api.models.enums.RuleMessageEnum;
import com.nubo.operations.special.rules.api.repository.BusinessRuleValidationRepository;
import com.nubo.operations.special.rules.api.service.RuleService;
import jakarta.validation.constraints.NotNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.ObjectUtils;
import org.mvel2.MVEL;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
@Slf4j
public class RuleServiceImpl implements RuleService {

    private final BusinessRuleValidationRepository businessRuleValidationRepository;

    @Override
    public BusinessRule validateExpression(Long businessRuleId, BusinessRuleInDto businessRuleInDto) {
        List<BusinessRuleValidationEntity> businessRuleValidationEntityList = businessRuleValidationRepository
                .findByBusinessRuleId(businessRuleId);

        for (BusinessRuleValidationEntity businessRuleValidationEntity : businessRuleValidationEntityList) {
            String expression = ObjectUtils.isEmpty(businessRuleValidationEntity.getRuleValidation()) ? ""
                    : businessRuleValidationEntity.getRuleValidation();
            InputRule inputRule = new InputRule(
                    businessRuleInDto.getClearingDate(),
                    businessRuleInDto.getAssignmentMarkBuy(),
                    businessRuleInDto.getAssignmentMarkSell(),
                    businessRuleInDto.getSalesGuarantee(),
                    businessRuleInDto.getPurchaseGuarantee(),
                    businessRuleInDto.getMarketId());

            boolean resultExpression = parseMvelExpression(expression, inputRule);
            if (!resultExpression) {
                return new BusinessRule(false, businessRuleValidationEntity.getMessageError(), businessRuleId);
            }
        }
        return new BusinessRule(true, RuleMessageEnum.SUCCESS_BUSINESS_RULE.getValue(), businessRuleId);
    }

    private boolean parseMvelExpression(@NotNull String expression, @NotNull InputRule inputRule) {
        log.info("Validate Expression → [{}] with rule → {}", expression, inputRule);
        if (expression.isEmpty())
            return true;
        try {
            Map<String, Object> inputObjects = new HashMap<>();
            inputObjects.put("rule", inputRule);
            return MVEL.evalToBoolean(expression, inputObjects);
        } catch (Exception e) {
            log.error("Can not parse Mvel Expression → [{}] Error: {}", expression, e.getMessage());
        }
        return false;
    }
}

```

## src/main/java/com/nubo/operations/special/rules/api/service/impl/StatusAllowedOptionsServiceImpl.java

```java
package com.nubo.operations.special.rules.api.service.impl;

import com.nubo.operations.special.rules.api.application.properties.PropertiesContext;
import com.nubo.operations.special.rules.api.client.operation.special.status.models.dto.response.StatusClientOutDto;
import com.nubo.operations.special.rules.api.client.operation.special.status.models.dto.response.StatusTransitionClientOutDto;
import com.nubo.operations.special.rules.api.client.operation.special.status.service.OperationSpecialStatusClient;
import com.nubo.operations.special.rules.api.exception.ServiceException;
import com.nubo.operations.special.rules.api.exception.error.ErrorCode;
import com.nubo.operations.special.rules.api.helpers.MapperUtil;
import com.nubo.operations.special.rules.api.models.domain.BusinessRule;
import com.nubo.operations.special.rules.api.models.dto.request.BusinessRuleInDto;
import com.nubo.operations.special.rules.api.models.dto.request.StatusAllowedOptionsInDto;
import com.nubo.operations.special.rules.api.models.dto.response.BusinessRuleOutDto;
import com.nubo.operations.special.rules.api.models.dto.response.StatusAllowedOptionsOutDto;
import com.nubo.operations.special.rules.api.models.entity.BusinessRuleEntity;
import com.nubo.operations.special.rules.api.models.entity.StatusActionBusinessRuleEntity;
import com.nubo.operations.special.rules.api.models.enums.CategoryEnum;
import com.nubo.operations.special.rules.api.models.enums.RuleMessageEnum;
import com.nubo.operations.special.rules.api.models.enums.VersionApiEnum;
import com.nubo.operations.special.rules.api.repository.StatusActionBusinessRuleRepository;
import com.nubo.operations.special.rules.api.service.RuleService;
import com.nubo.operations.special.rules.api.service.StatusAllowedOptionsService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.Set;

@Service
@RequiredArgsConstructor
@Slf4j
public class StatusAllowedOptionsServiceImpl implements StatusAllowedOptionsService {

    private final StatusActionBusinessRuleRepository statusActionBusinessRuleRepository;
    private final RuleService ruleService;
    private final OperationSpecialStatusClient operationSpecialStatusClient;

    @Override
    public StatusAllowedOptionsOutDto validateBusinessRuleBySettlement(StatusAllowedOptionsInDto statusAllowedOptionsInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return validateStatusAllowedOptionsV1(statusAllowedOptionsInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public StatusAllowedOptionsOutDto validateBusinessRuleBySettlementInstructions(StatusAllowedOptionsInDto statusAllowedOptionsInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return validateStatusAllowedOptionsV1(statusAllowedOptionsInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public StatusAllowedOptionsOutDto validateBusinessRuleByTrade(StatusAllowedOptionsInDto statusAllowedOptionsInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return validateStatusAllowedOptionsV1(statusAllowedOptionsInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public BusinessRuleOutDto actionBusinessRuleByCountryIdAndCodeValid(Long countryId, String code) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return actionBusinessRuleByCountryIdAndCodeValidV1(countryId, code);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private StatusAllowedOptionsOutDto validateStatusAllowedOptionsV1(StatusAllowedOptionsInDto statusAllowedOptionsInDto) {
        log.info("Start method validateStatusAllowedOptionsV1, StatusAllowedOptionsInDto -> {}", statusAllowedOptionsInDto);

        BusinessRule businessRule = this.validateByAllStatus(statusAllowedOptionsInDto);

        String code = statusAllowedOptionsInDto.getCode();
        Boolean isValid = businessRule.isValid();
        String description = businessRule.description();
        StatusClientOutDto targetStatus = null;
        if (isValid) {
            BusinessRule businessRuleExpr = validateExpression(businessRule.businessRuleId(), statusAllowedOptionsInDto);

            if (businessRuleExpr.isValid()) {
                StatusTransitionClientOutDto statusTransitionClientOutDto = operationSpecialStatusClient
                        .transitionByBusinessRuleIdAndOriginStatusId(businessRule.businessRuleId(),
                                statusAllowedOptionsInDto.getSettlementStatusId());
                targetStatus = statusTransitionClientOutDto.getTargetStatus();
            } else {
                isValid = false;
                description = businessRuleExpr.description();
            }
        }

        StatusAllowedOptionsOutDto statusAllowedOptionsOutDto = MapperUtil
                .toStatusAllowedOptionsOutDto(isValid, code, description, targetStatus);

        log.info("End method validateStatusAllowedOptionsV1, StatusAllowedOptionsOutDto -> {}", statusAllowedOptionsOutDto);
        return statusAllowedOptionsOutDto;
    }

    private BusinessRule validateByAllStatus(StatusAllowedOptionsInDto statusAllowedOptionsInDto) {
        BusinessRule ruleAssignment = this.operationSpecialActionBusinessRule(statusAllowedOptionsInDto.getAssignmentStatusId(),
                statusAllowedOptionsInDto.getCountryId(), statusAllowedOptionsInDto.getCode(), Set.of(CategoryEnum.REASSIGNMENT.getValue()));
        if (!ruleAssignment.isValid()) {
            return ruleAssignment;
        }

        BusinessRule ruleCustodian = this.operationSpecialActionBusinessRule(statusAllowedOptionsInDto.getCustodianStatusId(),
                statusAllowedOptionsInDto.getCountryId(), statusAllowedOptionsInDto.getCode(), Set.of(CategoryEnum.CUSTODIAN.getValue()));
        if (!ruleCustodian.isValid()) {
            return ruleCustodian;
        }

        Set<String> statusCategoriesSettlement = Set.of(CategoryEnum.COMPLIANCE_SETTLEMENT.getValue(),
                CategoryEnum.COMPLIANCE_TRADE.getValue(), CategoryEnum.COMPLIANCE_SETTLEMENT_INSTRUCTIONS.getValue());
        BusinessRule ruleSettlement = this.operationSpecialActionBusinessRule(statusAllowedOptionsInDto.getSettlementStatusId(),
                statusAllowedOptionsInDto.getCountryId(), statusAllowedOptionsInDto.getCode(), statusCategoriesSettlement);
        if (!ruleSettlement.isValid()) {
            return ruleSettlement;
        }

        String description = String.format("%s", RuleMessageEnum.SUCCESS_BUSINESS_RULE.getValue());
        return new BusinessRule(true, description, ruleSettlement.businessRuleId());
    }

    private BusinessRule operationSpecialActionBusinessRule(Long statusId, Long countryId, String code,
                                                            Set<String> statusCategories) {
        List<StatusActionBusinessRuleEntity> actionBusinessRuleOptional = statusActionBusinessRuleRepository
                .findByStatusAndCodeAndCountryId(statusId, statusCategories, code, countryId);

        if (!actionBusinessRuleOptional.isEmpty()) {
            StatusActionBusinessRuleEntity actionBusinessRule = actionBusinessRuleOptional.get(0);
            String description = String.format("[%s -> %s], %s", actionBusinessRule.getStatus().getCategory(),
                    actionBusinessRule.getStatus().getShortName(), actionBusinessRule.getDescription());
            Boolean isValid = Boolean.TRUE.equals(actionBusinessRule.getValid());
            Long businessRuleId = ObjectUtils.isEmpty(actionBusinessRule.getBusinessRule())
                    ? null : actionBusinessRule.getBusinessRule().getId();
            return new BusinessRule(isValid, description, businessRuleId);
        }
        return new BusinessRule(false , RuleMessageEnum.INVALID_COMPLIANCE_RULE.getValue(), null);
    }

    private BusinessRuleOutDto actionBusinessRuleByCountryIdAndCodeValidV1(Long countryId, String code) {
        log.info("Start method actionBusinessRuleByCountryIdAndCodeValidV1, countryId -> {}, code -> {}", countryId, code);

        List<StatusActionBusinessRuleEntity> actionBusinessRuleEntityList = findAllActionByCodeAndCountryId(countryId, code);

        BusinessRuleEntity businessRuleEntity = Optional.ofNullable(actionBusinessRuleEntityList)
                .filter(list -> !list.isEmpty())
                .map(list -> list.get(0))
                .map(StatusActionBusinessRuleEntity::getBusinessRule)
                .orElseThrow(() -> new ServiceException(ErrorCode.ACTION_BUSINESS_RULE_NOT_FOUND, HttpStatus.NOT_FOUND));

        BusinessRuleOutDto businessRuleOutDto = MapperUtil
                .statusActionBusinessRuleEntityListToBusinessRuleOutDto(businessRuleEntity, actionBusinessRuleEntityList);

        log.info("End method actionBusinessRuleByCountryIdAndCodeValidV1, businessRuleOutDto -> {}", businessRuleOutDto);

        return businessRuleOutDto;
    }

    private List<StatusActionBusinessRuleEntity> findAllActionByCodeAndCountryId(Long countryId, String code) {
        Set<String> businessRuleCategories = Set.of(CategoryEnum.SPECIAL_OPERATION.getValue());
        List<StatusActionBusinessRuleEntity> actionBusinessRuleByCountry = statusActionBusinessRuleRepository
                .findAllActionByCodeAndCountryIdAndValidTrue(businessRuleCategories, code, countryId);
        
        if (actionBusinessRuleByCountry.isEmpty()) {
            return statusActionBusinessRuleRepository
                .findAllActionByCodeAndAllCountryAndValidTrue(businessRuleCategories, code);
        } else {
            return actionBusinessRuleByCountry;
        }
    }

    private BusinessRule validateExpression(Long businessRuleId, BusinessRuleInDto businessRuleInDto) {
        return ruleService.validateExpression(businessRuleId, businessRuleInDto);
    }

}

```

## src/main/java/com/nubo/operations/special/rules/api/service/impl/StatusUpdateBusinessRuleServiceImpl.java

```java
package com.nubo.operations.special.rules.api.service.impl;

import com.nubo.operations.special.rules.api.application.properties.PropertiesContext;
import com.nubo.operations.special.rules.api.client.operation.special.status.models.dto.request.StatusValidationClientInDto;
import com.nubo.operations.special.rules.api.client.operation.special.status.models.dto.response.BusinessRuleClientOutDto;
import com.nubo.operations.special.rules.api.client.operation.special.status.models.dto.response.StatusTransitionClientOutDto;
import com.nubo.operations.special.rules.api.client.operation.special.status.models.dto.response.StatusValidationClientOutDto;
import com.nubo.operations.special.rules.api.client.operation.special.status.service.OperationSpecialStatusClient;
import com.nubo.operations.special.rules.api.exception.ServiceException;
import com.nubo.operations.special.rules.api.exception.error.ErrorCode;
import com.nubo.operations.special.rules.api.helpers.MapperUtil;
import com.nubo.operations.special.rules.api.models.domain.BusinessRule;
import com.nubo.operations.special.rules.api.models.dto.request.StatusUpdateBusinessRuleInDto;
import com.nubo.operations.special.rules.api.models.dto.response.StatusUpdateBusinessRuleOutDto;
import com.nubo.operations.special.rules.api.models.enums.RuleMessageEnum;
import com.nubo.operations.special.rules.api.models.enums.VersionApiEnum;
import com.nubo.operations.special.rules.api.service.RuleService;
import com.nubo.operations.special.rules.api.service.StatusUpdateBusinessRuleService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.ObjectUtils;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
@RequiredArgsConstructor
@Slf4j
public class StatusUpdateBusinessRuleServiceImpl implements StatusUpdateBusinessRuleService {

    private final OperationSpecialStatusClient operationSpecialStatusClient;
    private final RuleService ruleService;

    @Override
    public StatusUpdateBusinessRuleOutDto validateUpdateStatusSpecialOperation(
            StatusUpdateBusinessRuleInDto statusUpdateBusinessRuleInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return validateUpdateStatusSpecialOperationV1(statusUpdateBusinessRuleInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private StatusUpdateBusinessRuleOutDto validateUpdateStatusSpecialOperationV1(
            StatusUpdateBusinessRuleInDto statusUpdateBusinessRuleInDto) {
        log.info("Start method validateUpdateStatusSpecialOperationV1, custodianStatusRuleInDto -> {}",
                statusUpdateBusinessRuleInDto);

        StatusValidationClientInDto transitionStatusClientInDto = MapperUtil
                .statusUpdateBusinessRuleInDtoToStatusValidationClientInDto(statusUpdateBusinessRuleInDto);
        StatusValidationClientOutDto statusValidationClientOutDto = operationSpecialStatusClient
                .validationTransitionStatus(transitionStatusClientInDto);

        String description = RuleMessageEnum.INVALID_STATUS_TRANSITION.getValue();
        boolean result = false;
        if (Boolean.TRUE.equals(statusValidationClientOutDto.getIsValid())) {
            BusinessRule businessRule = this.validateExpression(statusValidationClientOutDto.getBusinessRule(), statusUpdateBusinessRuleInDto);
            result = businessRule.isValid();
            description = businessRule.description();
        }

        StatusTransitionClientOutDto statusTransitionClientOutDto = result ? statusValidationClientOutDto.getStatusTransition() : null;
        StatusUpdateBusinessRuleOutDto statusUpdateBusinessRuleOutDto =
                MapperUtil.toStatusUpdateBusinessRuleOutDto(result, description, statusTransitionClientOutDto);

        log.info("End method validateUpdateStatusSpecialOperationV1, statusUpdateBusinessRuleOutDto -> {}",
                statusUpdateBusinessRuleOutDto);
        return statusUpdateBusinessRuleOutDto;
    }

    private BusinessRule validateExpression(BusinessRuleClientOutDto businessRuleClientOutDto,
                                            StatusUpdateBusinessRuleInDto statusUpdateBusinessRuleInDto) {
        Long businessRuleId = ObjectUtils.isEmpty(businessRuleClientOutDto) ? null : businessRuleClientOutDto.getId();
        return ruleService.validateExpression(businessRuleId, statusUpdateBusinessRuleInDto);
    }
}

```

## src/main/java/com/nubo/operations/special/rules/api/web/controller/ConciliationBusinessRulesRestController.java

```java
package com.nubo.operations.special.rules.api.web.controller;

import com.nubo.operations.special.rules.api.models.dto.request.ConciliationComparatorInDto;
import com.nubo.operations.special.rules.api.models.dto.response.ActionOutDto;
import com.nubo.operations.special.rules.api.service.ConciliationBusinessRulesService;
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

@Tag(name = "Conciliation Business Rules")
@RequestMapping("/{version}/conciliation-business-rules")
@RestController
@RequiredArgsConstructor
public class ConciliationBusinessRulesRestController {

    private final ConciliationBusinessRulesService conciliationBusinessRule;

    @Operation(summary = "Validate conciliation comparator business rule",
            description = "Validate conciliation comparator business rule")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = ActionOutDto.class)))})
    @PostMapping("/validate-comparator")
    public ResponseEntity<ActionOutDto> validateConciliationComparator(
            @Valid @RequestBody ConciliationComparatorInDto conciliationComparatorInDto) {
        return ResponseEntity.ok(conciliationBusinessRule.validateConciliationComparator(conciliationComparatorInDto));
    }

}

```

## src/main/java/com/nubo/operations/special/rules/api/web/controller/OperationSpecialBusinessRulesRestController.java

```java
package com.nubo.operations.special.rules.api.web.controller;

import com.nubo.operations.special.rules.api.models.dto.response.BusinessRuleOutDto;
import com.nubo.operations.special.rules.api.service.OperationSpecialBusinessRulesService;
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

@Tag(name = "Operation Special Business Rules")
@RequestMapping("/{version}/operation-special-business-rules")
@RestController
@RequiredArgsConstructor
public class OperationSpecialBusinessRulesRestController {

    private final OperationSpecialBusinessRulesService operationSpecialBusinessRulesService;

    @Operation(summary = "Find business rule by country and code", description = "Find business rule by country and code")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = BusinessRuleOutDto.class)))})
    @GetMapping("/country/{countryId}/code/{code}")
    public ResponseEntity<BusinessRuleOutDto> findBusinessRuleByCountryIdAndCode(@PathVariable Long countryId, @PathVariable String code) {
        return ResponseEntity.ok(operationSpecialBusinessRulesService.findBusinessRuleByCountryIdAndCode(countryId, code));
    }

    @Operation(summary = "Find business rule by code", description = "Find business rule by code")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = BusinessRuleOutDto.class)))})
    @GetMapping("/code/{code}")
    public ResponseEntity<BusinessRuleOutDto> findBusinessRuleByCode(@PathVariable String code) {
        return ResponseEntity.ok(operationSpecialBusinessRulesService.findBusinessRuleByCode(code));
    }

    @Operation(summary = "Find business rule by country and code and status", description = "Find business rule by country and code and status")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = BusinessRuleOutDto.class)))})
    @GetMapping("/country/{countryId}/code/{code}/status/{statusId}")
    public ResponseEntity<BusinessRuleOutDto> findBusinessRuleByCountryAndCodeAndStatus(
            @PathVariable Long countryId,
            @PathVariable String code,
            @PathVariable Long statusId) {
        return ResponseEntity.ok(operationSpecialBusinessRulesService.findBusinessRuleByCountryAndCodeAndStatus(countryId, code, statusId));
    }

}

```

## src/main/java/com/nubo/operations/special/rules/api/web/controller/RiskModelBusinessRuleRestController.java

```java
package com.nubo.operations.special.rules.api.web.controller;

import com.nubo.operations.special.rules.api.models.dto.request.RiskModelInDto;
import com.nubo.operations.special.rules.api.models.dto.response.RiskModelOutDto;
import com.nubo.operations.special.rules.api.service.RiskModelBusinessRuleService;
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

@Tag(name = "Risk model Business Rules")
@RequestMapping("/{version}/risk-model-business-rules")
@RestController
@RequiredArgsConstructor
public class RiskModelBusinessRuleRestController {

    private final RiskModelBusinessRuleService riskModelBusinessRuleService;

    @Operation(summary = "Validate Risk Model Business rule", description = "Validate Risk Model Business rule")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = RiskModelOutDto.class)))})
    @PostMapping("/validate")
    public ResponseEntity<RiskModelOutDto> validateRiskModelBusinessRule(
            @Valid @RequestBody RiskModelInDto riskModelInDto) {
        return ResponseEntity.ok(riskModelBusinessRuleService.validateRiskModel(riskModelInDto));
    }
}

```

## src/main/java/com/nubo/operations/special/rules/api/web/controller/StatusAllowedOptionsRestController.java

```java
package com.nubo.operations.special.rules.api.web.controller;

import com.nubo.operations.special.rules.api.models.dto.request.StatusAllowedOptionsInDto;
import com.nubo.operations.special.rules.api.models.dto.response.BusinessRuleOutDto;
import com.nubo.operations.special.rules.api.models.dto.response.StatusAllowedOptionsOutDto;
import com.nubo.operations.special.rules.api.service.StatusAllowedOptionsService;
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

@Tag(name = "Status Allowed Options")
@RequestMapping("/{version}/status-allowed-options")
@RestController
@RequiredArgsConstructor
public class StatusAllowedOptionsRestController {

    private final StatusAllowedOptionsService statusAllowedOptionsService;

    @Operation(summary = "Validate Compliance Business rule by Code and table settlement",
            description = "Validate Compliance Business rule by Code")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = StatusAllowedOptionsOutDto.class)))})
    @PostMapping("/settlement/validation")
    public ResponseEntity<StatusAllowedOptionsOutDto> validateBusinessRuleBySettlement(
            @Valid @RequestBody StatusAllowedOptionsInDto statusAllowedOptionsInDto) {
        return ResponseEntity.ok(statusAllowedOptionsService.validateBusinessRuleBySettlement(statusAllowedOptionsInDto));
    }

    @Operation(summary = "Validate Compliance Business rule by Code and table settlement-instructions",
            description = "Validate Compliance Business rule by Code")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = StatusAllowedOptionsOutDto.class)))})
    @PostMapping("/settlement-instructions/validation")
    public ResponseEntity<StatusAllowedOptionsOutDto> validateBusinessRuleBySettlementInstructions(
            @Valid @RequestBody StatusAllowedOptionsInDto statusAllowedOptionsInDto) {
        return ResponseEntity.ok(statusAllowedOptionsService.validateBusinessRuleBySettlementInstructions(statusAllowedOptionsInDto));
    }

    @Operation(summary = "Validate Compliance Business rule by Code and table Trade",
            description = "Validate Compliance Business rule by Code")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = StatusAllowedOptionsOutDto.class)))})
    @PostMapping("/trade/validation")
    public ResponseEntity<StatusAllowedOptionsOutDto> validateBusinessRuleByTrade(
            @Valid @RequestBody StatusAllowedOptionsInDto statusAllowedOptionsInDto) {
        return ResponseEntity.ok(statusAllowedOptionsService.validateBusinessRuleByTrade(statusAllowedOptionsInDto));
    }

    @Operation(summary = "Find Status Action business rule by country and code", 
            description = "Find Status Action business rule by country and code")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = BusinessRuleOutDto.class)))})
    @GetMapping("/country/{countryId}/code/{code}/valid")
    public ResponseEntity<BusinessRuleOutDto> actionBusinessRuleByCountryIdAndCodeValid(
        @PathVariable Long countryId, @PathVariable String code) {
        return ResponseEntity.ok(statusAllowedOptionsService.actionBusinessRuleByCountryIdAndCodeValid(countryId, code));
    }
}

```

## src/main/java/com/nubo/operations/special/rules/api/web/controller/StatusUpdateBusinessRuleRestController.java

```java
package com.nubo.operations.special.rules.api.web.controller;

import com.nubo.operations.special.rules.api.models.dto.request.StatusUpdateBusinessRuleInDto;
import com.nubo.operations.special.rules.api.models.dto.response.StatusUpdateBusinessRuleOutDto;
import com.nubo.operations.special.rules.api.service.StatusUpdateBusinessRuleService;
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

@Tag(name = "Update Status Business Rules")
@RequestMapping("/{version}/status-update-business-rules")
@RestController
@RequiredArgsConstructor
public class StatusUpdateBusinessRuleRestController {

    private final StatusUpdateBusinessRuleService updateStatusBusinessRuleService;

    @Operation(summary = "Evaluate Update status Special Operation", description = "Evaluate Update status Special Operation")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = StatusUpdateBusinessRuleOutDto.class)))})
    @PostMapping("/operation-special/validation")
    public ResponseEntity<StatusUpdateBusinessRuleOutDto> validateUpdateStatusSpecialOperation(
            @Valid @RequestBody StatusUpdateBusinessRuleInDto statusUpdateBusinessRuleInDto) {
        return ResponseEntity.ok(updateStatusBusinessRuleService.validateUpdateStatusSpecialOperation(statusUpdateBusinessRuleInDto));
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
    url-operation-special-status: ${NUBO_URL_OPERATION_SPECIAL_STATUS}
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
    url-operation-special-status: ${NUBO_URL_OPERATION_SPECIAL_STATUS}
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
    url-operation-special-status: ${NUBO_URL_OPERATION_SPECIAL_STATUS}
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
    url-operation-special-status: ${NUBO_URL_OPERATION_SPECIAL_STATUS}
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
    url-operation-special-status: ${NUBO_URL_OPERATION_SPECIAL_STATUS}
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
 ,-----. ,------. ,------.,------.   ,---. ,--------.,--. ,-----. ,--.  ,--. ,---. ,------. ,------. ,-----.,--.  ,---.  ,--.   ,------. ,--. ,--.,--.   ,------. ,---.   ,---.  ,------. ,--.
'  .-.  '|  .--. '|  .---'|  .--. ' /  O  \'--.  .--'|  |'  .-.  '|  ,'.|  |'   .-'|  .--. '|  .---''  .--./|  | /  O  \ |  |   |  .--. '|  | |  ||  |   |  .---''   .-' /  O  \ |  .--. '|  |
|  | |  ||  '--' ||  `--, |  '--'.'|  .-.  |  |  |   |  ||  | |  ||  |' '  |`.  `-.|  '--' ||  `--, |  |    |  ||  .-.  ||  |   |  '--'.'|  | |  ||  |   |  `--, `.  `-.|  .-.  ||  '--' ||  |
'  '-'  '|  | --' |  `---.|  |\  \ |  | |  |  |  |   |  |'  '-'  '|  | `   |.-'    |  | --' |  `---.'  '--'\|  ||  | |  ||  '--.|  |\  \ '  '-'  '|  '--.|  `---..-'    |  | |  ||  | --' |  |
 `-----' `--'     `------'`--' '--'`--' `--'  `--'   `--' `-----' `--'  `--'`-----'`--'     `------' `-----'`--'`--' `--'`-----'`--' '--' `-----' `-----'`------'`-----'`--' `--'`--'     `--'

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
