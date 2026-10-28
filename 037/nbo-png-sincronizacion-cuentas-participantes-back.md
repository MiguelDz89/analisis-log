# nbo-png-sincronizacion-cuentas-participantes-back

Código Java de producción y configuraciones, sin tests. Cada sección contiene el archivo original completo y su ruta. Captura: 28/10/2026.

## Índice

1. `.mvn/wrapper/maven-wrapper.properties`
2. `mvnw`
3. `mvnw.cmd`
4. `pom.xml`
5. `src/main/java/com/nubo/participants/accounts/synchronization/ParticipantAccountSynchronizationApplication.java`
6. `src/main/java/com/nubo/participants/accounts/synchronization/application/config/CacheConfig.java`
7. `src/main/java/com/nubo/participants/accounts/synchronization/application/config/KafkaConsumerConfig.java`
8. `src/main/java/com/nubo/participants/accounts/synchronization/application/config/KafkaProducerConfig.java`
9. `src/main/java/com/nubo/participants/accounts/synchronization/application/context/GlobalContext.java`
10. `src/main/java/com/nubo/participants/accounts/synchronization/application/database/NamingStrategyConfig.java`
11. `src/main/java/com/nubo/participants/accounts/synchronization/application/database/UpperNamingConfig.java`
12. `src/main/java/com/nubo/participants/accounts/synchronization/application/properties/PropertiesConfig.java`
13. `src/main/java/com/nubo/participants/accounts/synchronization/application/properties/PropertiesContext.java`
14. `src/main/java/com/nubo/participants/accounts/synchronization/application/util/ApplicationUtils.java`
15. `src/main/java/com/nubo/participants/accounts/synchronization/exception/ServiceException.java`
16. `src/main/java/com/nubo/participants/accounts/synchronization/exception/error/ErrorCode.java`
17. `src/main/java/com/nubo/participants/accounts/synchronization/exception/error/ErrorResponse.java`
18. `src/main/java/com/nubo/participants/accounts/synchronization/exception/error/ErrorValidation.java`
19. `src/main/java/com/nubo/participants/accounts/synchronization/exception/handler/GlobalExceptionHandler.java`
20. `src/main/java/com/nubo/participants/accounts/synchronization/exception/kafka/KafkaErrorBuild.java`
21. `src/main/java/com/nubo/participants/accounts/synchronization/helpers/MapperUtil.java`
22. `src/main/java/com/nubo/participants/accounts/synchronization/kafka/consumer/KafkaNuboListenerAdapter.java`
23. `src/main/java/com/nubo/participants/accounts/synchronization/kafka/producer/KafkaNuboAdapter.java`
24. `src/main/java/com/nubo/participants/accounts/synchronization/models/domain/ParticipantResult.java`
25. `src/main/java/com/nubo/participants/accounts/synchronization/models/dto/request/AccountInDto.java`
26. `src/main/java/com/nubo/participants/accounts/synchronization/models/dto/request/CurrencyDto.java`
27. `src/main/java/com/nubo/participants/accounts/synchronization/models/dto/request/DataReferenceParticipantInDto.java`
28. `src/main/java/com/nubo/participants/accounts/synchronization/models/dto/request/ParticipantBankAccountContentInDto.java`
29. `src/main/java/com/nubo/participants/accounts/synchronization/models/dto/request/ParticipantBankAccountInDto.java`
30. `src/main/java/com/nubo/participants/accounts/synchronization/models/dto/request/ParticipantBankAccountPageDto.java`
31. `src/main/java/com/nubo/participants/accounts/synchronization/models/dto/request/ParticipantTypeInDto.java`
32. `src/main/java/com/nubo/participants/accounts/synchronization/models/dto/request/RegisteredParticipantInsInDto.java`
33. `src/main/java/com/nubo/participants/accounts/synchronization/models/dto/request/TaxQualitiesInDto.java`
34. `src/main/java/com/nubo/participants/accounts/synchronization/models/dto/response/MessageEventKafka.java`
35. `src/main/java/com/nubo/participants/accounts/synchronization/models/entity/CountryEntity.java`
36. `src/main/java/com/nubo/participants/accounts/synchronization/models/entity/CurrencyEntity.java`
37. `src/main/java/com/nubo/participants/accounts/synchronization/models/entity/DepartmentEntity.java`
38. `src/main/java/com/nubo/participants/accounts/synchronization/models/entity/ErrorEntity.java`
39. `src/main/java/com/nubo/participants/accounts/synchronization/models/entity/IdentificationTypeEntity.java`
40. `src/main/java/com/nubo/participants/accounts/synchronization/models/entity/ParticipantBankAccountEntity.java`
41. `src/main/java/com/nubo/participants/accounts/synchronization/models/entity/ParticipantEntity.java`
42. `src/main/java/com/nubo/participants/accounts/synchronization/models/entity/SideEntity.java`
43. `src/main/java/com/nubo/participants/accounts/synchronization/models/entity/StatusEntity.java`
44. `src/main/java/com/nubo/participants/accounts/synchronization/models/entity/StatusMappingEntity.java`
45. `src/main/java/com/nubo/participants/accounts/synchronization/models/entity/TaxStatusEntity.java`
46. `src/main/java/com/nubo/participants/accounts/synchronization/models/entity/TypeEntity.java`
47. `src/main/java/com/nubo/participants/accounts/synchronization/models/entity/TypeMappingEntity.java`
48. `src/main/java/com/nubo/participants/accounts/synchronization/models/enums/CountryEnum.java`
49. `src/main/java/com/nubo/participants/accounts/synchronization/models/enums/IdentificationEnum.java`
50. `src/main/java/com/nubo/participants/accounts/synchronization/models/enums/PropertiesEnum.java`
51. `src/main/java/com/nubo/participants/accounts/synchronization/models/enums/StatusEnum.java`
52. `src/main/java/com/nubo/participants/accounts/synchronization/models/enums/TaxStatusEnum.java`
53. `src/main/java/com/nubo/participants/accounts/synchronization/models/enums/TypeEnum.java`
54. `src/main/java/com/nubo/participants/accounts/synchronization/models/enums/VersionApiEnum.java`
55. `src/main/java/com/nubo/participants/accounts/synchronization/repository/CountryRepository.java`
56. `src/main/java/com/nubo/participants/accounts/synchronization/repository/CurrencyRepository.java`
57. `src/main/java/com/nubo/participants/accounts/synchronization/repository/DepartmentRepository.java`
58. `src/main/java/com/nubo/participants/accounts/synchronization/repository/ErrorRepository.java`
59. `src/main/java/com/nubo/participants/accounts/synchronization/repository/IdentificationTypeRepository.java`
60. `src/main/java/com/nubo/participants/accounts/synchronization/repository/ParticipantBankAccountRepository.java`
61. `src/main/java/com/nubo/participants/accounts/synchronization/repository/ParticipantRepository.java`
62. `src/main/java/com/nubo/participants/accounts/synchronization/repository/StatusMappingRepository.java`
63. `src/main/java/com/nubo/participants/accounts/synchronization/repository/StatusRepository.java`
64. `src/main/java/com/nubo/participants/accounts/synchronization/repository/TaxStatusRepository.java`
65. `src/main/java/com/nubo/participants/accounts/synchronization/repository/TypeMappingRepository.java`
66. `src/main/java/com/nubo/participants/accounts/synchronization/repository/TypeRepository.java`
67. `src/main/java/com/nubo/participants/accounts/synchronization/service/BatchCacheService.java`
68. `src/main/java/com/nubo/participants/accounts/synchronization/service/ParticipantBankAccountService.java`
69. `src/main/java/com/nubo/participants/accounts/synchronization/service/ParticipantNuboService.java`
70. `src/main/java/com/nubo/participants/accounts/synchronization/service/SynchronizationService.java`
71. `src/main/java/com/nubo/participants/accounts/synchronization/service/impl/BatchCacheServiceImpl.java`
72. `src/main/java/com/nubo/participants/accounts/synchronization/service/impl/ParticipantBankAccountServiceImpl.java`
73. `src/main/java/com/nubo/participants/accounts/synchronization/service/impl/ParticipantServiceNuboImpl.java`
74. `src/main/java/com/nubo/participants/accounts/synchronization/service/impl/SynchronizationServiceImpl.java`
75. `src/main/resources/application-dev.yml`
76. `src/main/resources/application-local.yml`
77. `src/main/resources/application-prod.yml`
78. `src/main/resources/application-qa.yml`
79. `src/main/resources/application-uat.yml`
80. `src/main/resources/application.yml`
81. `src/main/resources/banner.txt`
82. `src/main/resources/log/JsonEventLayout_error.json`
83. `src/main/resources/log/JsonEventLayout_info.json`
84. `src/main/resources/log/JsonEventLayout_trace.json`
85. `src/main/resources/log/log4j2-prod.properties`
86. `src/main/resources/log/log4j2.properties`
87. `src/main/resources/participant-referenceData.json`

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

	<groupId>com.nubo.participants.accounts.synchronization</groupId>
	<artifactId>participant-account-synchronization</artifactId>
	<version>0.12.0-alpha.1</version>
	<name>${project.artifactId}</name>
	<description>Participant synchronization</description>

	<properties>
		<java.version>17</java.version>
		<spring.port>8082</spring.port>
		<test.skip>false</test.skip>

		<datasource.url.application.name>ApplicationName=${project.artifactId}</datasource.url.application.name>
		<hikari.pool.name>${project.artifactId}-pool</hikari.pool.name>

		<!-- Vulnerability fixes -->
		<spring-framework.version>6.2.19</spring-framework.version>
		<spring-kafka.version>3.3.16</spring-kafka.version>
		<jackson-bom.version>2.22.0</jackson-bom.version>

		<log4j2.version>2.26.0</log4j2.version>
		<tomcat.version>10.1.55</tomcat.version>
		<postgresql.version>42.7.11</postgresql.version>
		<commons-io.version>2.18.0</commons-io.version>
		<jacoco.version>0.8.12</jacoco.version>
	</properties>

	<dependencyManagement>
		<dependencies>

			<dependency>
				<groupId>com.fasterxml.jackson</groupId>
				<artifactId>jackson-bom</artifactId>
				<version>${jackson-bom.version}</version>
				<type>pom</type>
				<scope>import</scope>
			</dependency>

			<dependency>
				<groupId>org.apache.logging.log4j</groupId>
				<artifactId>log4j-bom</artifactId>
				<version>${log4j2.version}</version>
				<type>pom</type>
				<scope>import</scope>
			</dependency>

			<dependency>
				<groupId>org.springframework.kafka</groupId>
				<artifactId>spring-kafka</artifactId>
				<version>${spring-kafka.version}</version>
			</dependency>

			<dependency>
				<groupId>org.springframework.kafka</groupId>
				<artifactId>spring-kafka-test</artifactId>
				<version>${spring-kafka.version}</version>
			</dependency>

			<dependency>
				<groupId>commons-io</groupId>
				<artifactId>commons-io</artifactId>
				<version>${commons-io.version}</version>
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

		<!-- Test -->
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

		<!-- Cache -->
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-cache</artifactId>
		</dependency>

		<dependency>
			<groupId>com.github.ben-manes.caffeine</groupId>
			<artifactId>caffeine</artifactId>
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
			</exclusions>
		</dependency>

		<!-- Vulnerability adjustment -->
		<dependency>
			<groupId>commons-io</groupId>
			<artifactId>commons-io</artifactId>
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
								<exclude>**/ParticipantAccountSynchronizationApplication.class</exclude>
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

## src/main/java/com/nubo/participants/accounts/synchronization/ParticipantAccountSynchronizationApplication.java

```java
package com.nubo.participants.accounts.synchronization;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ParticipantAccountSynchronizationApplication {

	public static void main(String[] args) {
		SpringApplication.run(ParticipantAccountSynchronizationApplication.class, args);
	}

}

```

## src/main/java/com/nubo/participants/accounts/synchronization/application/config/CacheConfig.java

```java
package com.nubo.participants.accounts.synchronization.application.config;

import java.util.Arrays;
import java.util.concurrent.TimeUnit;

import org.springframework.cache.Cache;
import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.cache.caffeine.CaffeineCache;
import org.springframework.cache.support.SimpleCacheManager;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.github.benmanes.caffeine.cache.Caffeine;

@Configuration
@EnableCaching
public class CacheConfig {

    @Bean
    @SuppressWarnings("null")
    public CacheManager cacheManager() {
        SimpleCacheManager cacheManager = new SimpleCacheManager();

        cacheManager.setCaches(Arrays.asList(
                buildCache("types", 30, TimeUnit.MINUTES),
                buildCache("countries", 10, TimeUnit.MINUTES),
                buildCache("status", 10, TimeUnit.MINUTES),
                buildCache("taxStatus", 1, TimeUnit.HOURS),
                buildCache("department", 1, TimeUnit.HOURS),
                buildCache("currency", 1, TimeUnit.HOURS),
                buildCache("typesById", 1, TimeUnit.HOURS),

                buildCache("identification", 10, TimeUnit.MINUTES),
                buildCache("participants", 10, TimeUnit.MINUTES),
                buildCache("typeMapping", 30, TimeUnit.MINUTES),
                buildCache("statusMapping", 30, TimeUnit.MINUTES)));

        return cacheManager;
    }

    @SuppressWarnings("null")
    private Cache buildCache(String name, long duration, TimeUnit timeUnit) {
        return new CaffeineCache(name, Caffeine.newBuilder()
                .expireAfterWrite(duration, timeUnit)
                .maximumSize(2000)
                .recordStats()
                .build());
    }

}

```

## src/main/java/com/nubo/participants/accounts/synchronization/application/config/KafkaConsumerConfig.java

```java
package com.nubo.participants.accounts.synchronization.application.config;

import com.nubo.participants.accounts.synchronization.application.properties.PropertiesConfig;
import com.nubo.participants.accounts.synchronization.exception.ServiceException;
import com.nubo.participants.accounts.synchronization.exception.error.ErrorCode;
import com.nubo.participants.accounts.synchronization.exception.kafka.KafkaErrorBuild;
import com.nubo.participants.accounts.synchronization.models.dto.request.ParticipantBankAccountContentInDto;
import lombok.RequiredArgsConstructor;
import org.apache.kafka.clients.CommonClientConfigs;
import org.apache.kafka.clients.consumer.ConsumerConfig;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.apache.kafka.common.config.SaslConfigs;
import org.apache.kafka.common.header.Header;
import org.apache.kafka.common.serialization.StringDeserializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.kafka.annotation.EnableKafka;
import org.springframework.kafka.config.ConcurrentKafkaListenerContainerFactory;
import org.springframework.kafka.core.ConsumerFactory;
import org.springframework.kafka.core.DefaultKafkaConsumerFactory;
import org.springframework.kafka.listener.DefaultErrorHandler;
import org.springframework.kafka.listener.ListenerExecutionFailedException;
import org.springframework.kafka.support.KafkaHeaders;
import org.springframework.kafka.support.serializer.DeserializationException;
import org.springframework.kafka.support.serializer.ErrorHandlingDeserializer;
import org.springframework.kafka.support.serializer.JsonDeserializer;
import org.springframework.util.backoff.FixedBackOff;

import java.nio.ByteBuffer;
import java.util.HashMap;
import java.util.Map;

@EnableKafka
@Configuration
@RequiredArgsConstructor
public class KafkaConsumerConfig {

    private final Environment environment;
    private final PropertiesConfig propertiesConfig;

    @Bean
    public ConsumerFactory<String, ParticipantBankAccountContentInDto> consumerFactoryKafkaNubo() {
        Map<String, Object> configProps = new HashMap<>();

        configProps.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, propertiesConfig.getKafkaNuboBootstrapServers());
        configProps.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);
        configProps.put(ConsumerConfig.GROUP_ID_CONFIG, propertiesConfig.getKafkaNuboConsumerGroupId());
        configProps.put(ConsumerConfig.AUTO_OFFSET_RESET_CONFIG, propertiesConfig.getKafkaNuboAutoOffsetReset());
        configProps.put(ConsumerConfig.ENABLE_AUTO_COMMIT_CONFIG, false);

        configProps.put(CommonClientConfigs.SECURITY_PROTOCOL_CONFIG, propertiesConfig.getKafkaNuboSecurityProtocol());

        configProps.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, ErrorHandlingDeserializer.class);
        configProps.put(ErrorHandlingDeserializer.VALUE_DESERIALIZER_CLASS, JsonDeserializer.class.getName());
        configProps.put(JsonDeserializer.VALUE_DEFAULT_TYPE, ParticipantBankAccountContentInDto.class.getName());
        configProps.put(JsonDeserializer.TRUSTED_PACKAGES, "com.nubo.participants.accounts.synchronization");

        if (!isLocalProfile()) {
            configProps.put(SaslConfigs.SASL_MECHANISM, propertiesConfig.getKafkaNuboSaslMechanism());
            configProps.put(SaslConfigs.SASL_JAAS_CONFIG, propertiesConfig.getKafkaNuboSaslJaasConfig());
        }

        return new DefaultKafkaConsumerFactory<>(
                configProps,
                new StringDeserializer(),
                new ErrorHandlingDeserializer<>(
                        new JsonDeserializer<>(ParticipantBankAccountContentInDto.class)
                )
        );
    }

    @Bean
    public ConcurrentKafkaListenerContainerFactory<String, ParticipantBankAccountContentInDto> kafkaNuboListenerContainerFactory(
            DefaultErrorHandler errorHandler) {

        ConcurrentKafkaListenerContainerFactory<String, ParticipantBankAccountContentInDto> factory =
                new ConcurrentKafkaListenerContainerFactory<>();

        factory.setConsumerFactory(consumerFactoryKafkaNubo());
        factory.setCommonErrorHandler(errorHandler);
        factory.getContainerProperties().setDeliveryAttemptHeader(true);

        return factory;
    }

    @Bean
    public DefaultErrorHandler kafkaErrorHandler(KafkaErrorBuild kafkaErrorBuilder) {
        FixedBackOff backOff = new FixedBackOff(2000L, propertiesConfig.getKafkaNuboRetries());

        DefaultErrorHandler errorHandler = new DefaultErrorHandler(
                (record, exception) -> {
                    Integer deliveryAttempt = getDeliveryAttempt(record);

                    ErrorCode errorCode;

                    if (exception instanceof ListenerExecutionFailedException listenerExecutionFailedException) {
                        Throwable cause = listenerExecutionFailedException.getCause();

                        if (cause instanceof DeserializationException) {
                            errorCode = ErrorCode.ERROR_DESERIALIZER_JSON;
                        } else if (cause instanceof ServiceException serviceException) {
                            errorCode = serviceException.getErrorCode();
                        } else {
                            errorCode = ErrorCode.ERROR_KAFKA_CONSUMER_NUBO;
                        }

                    } else if (exception instanceof ServiceException serviceException) {
                        errorCode = serviceException.getErrorCode();
                    } else {
                        errorCode = ErrorCode.ERROR_KAFKA_CONSUMER_NUBO;
                    }

                    kafkaErrorBuilder.buildError(
                            exception,
                            errorCode,
                            record.offset(),
                            record.topic(),
                            deliveryAttempt
                    );
                },
                backOff
        );

        errorHandler.addNotRetryableExceptions(DeserializationException.class);
        errorHandler.setCommitRecovered(true);
        errorHandler.setAckAfterHandle(true);

        return errorHandler;
    }

    private Integer getDeliveryAttempt(ConsumerRecord<?, ?> record) {
        Header header = record.headers().lastHeader(KafkaHeaders.DELIVERY_ATTEMPT);
        return header != null ? ByteBuffer.wrap(header.value()).getInt() : null;
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

## src/main/java/com/nubo/participants/accounts/synchronization/application/config/KafkaProducerConfig.java

```java
package com.nubo.participants.accounts.synchronization.application.config;

import com.nubo.participants.accounts.synchronization.application.properties.PropertiesConfig;
import lombok.RequiredArgsConstructor;
import org.apache.kafka.clients.producer.ProducerConfig;
import org.apache.kafka.common.serialization.StringSerializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.kafka.core.DefaultKafkaProducerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.core.ProducerFactory;

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

## src/main/java/com/nubo/participants/accounts/synchronization/application/context/GlobalContext.java

```java
package com.nubo.participants.accounts.synchronization.application.context;

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

## src/main/java/com/nubo/participants/accounts/synchronization/application/database/NamingStrategyConfig.java

```java
package com.nubo.participants.accounts.synchronization.application.database;

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

## src/main/java/com/nubo/participants/accounts/synchronization/application/database/UpperNamingConfig.java

```java
package com.nubo.participants.accounts.synchronization.application.database;

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

## src/main/java/com/nubo/participants/accounts/synchronization/application/properties/PropertiesConfig.java

```java
package com.nubo.participants.accounts.synchronization.application.properties;

import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
@Getter
public class PropertiesConfig {

    @Value("${spring.application.name}")
    private String apiName;

    @Value("${kafka.nubo.bootstrap-servers}")
    private String kafkaNuboBootstrapServers;

    @Value("${kafka.nubo.producer.topic-name}")
    private String kafkaNuboTopicName;

    @Value("${kafka.nubo.sasl.mechanism}")
    private String kafkaNuboSaslMechanism;

    @Value("${kafka.nubo.sasl.jaas.config}")
    private String kafkaNuboSaslJaasConfig;

    @Value("${kafka.nubo.security.protocol}")
    private String kafkaNuboSecurityProtocol;

    @Value("${kafka.nubo.auto-offset-reset}")
    private String kafkaNuboAutoOffsetReset;

    @Value("${kafka.nubo.retries}")
    private Integer kafkaNuboRetries;

    @Value("${kafka.nubo.consumer.group-id}")
    private String kafkaNuboConsumerGroupId;

    @Value("${kafka.nubo.consumer.topic-name}")
    private String kafkaNuboConsumerTopicName;

}

```

## src/main/java/com/nubo/participants/accounts/synchronization/application/properties/PropertiesContext.java

```java
package com.nubo.participants.accounts.synchronization.application.properties;

import com.nubo.participants.accounts.synchronization.application.context.GlobalContext;
import com.nubo.participants.accounts.synchronization.application.util.ApplicationUtils;
import com.nubo.participants.accounts.synchronization.models.enums.PropertiesEnum;

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

## src/main/java/com/nubo/participants/accounts/synchronization/application/util/ApplicationUtils.java

```java
package com.nubo.participants.accounts.synchronization.application.util;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.nubo.participants.accounts.synchronization.exception.ServiceException;
import com.nubo.participants.accounts.synchronization.exception.error.ErrorCode;

import java.io.IOException;
import java.io.InputStream;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class ApplicationUtils {

    private static final ObjectMapper MAPPER = new ObjectMapper();
    private static final String FORMAT_DATETIME = "yyyy-MM-dd'T'HH:mm:ss";

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

    public static String getLocalDateTimeNow() {
        return LocalDateTime.now().format(DateTimeFormatter.ofPattern(ApplicationUtils.getFormatDatetime()));
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

    public static <T> T convertJsonToObject(InputStream jsonStream, Class<T> clazz) throws IOException {
        return MAPPER.readValue(jsonStream, clazz);
    }

}


```

## src/main/java/com/nubo/participants/accounts/synchronization/exception/ServiceException.java

```java
package com.nubo.participants.accounts.synchronization.exception;

import com.nubo.participants.accounts.synchronization.exception.error.ErrorCode;
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

    public ServiceException(ErrorCode errorCode, String message) {
        super(errorCode.getMessage().concat(", ").concat(message));
        this.errorCode = errorCode;
        this.httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
    }

    public HttpStatus getHttpStatusOrDefault() {
        return this.httpStatus != null ? this.httpStatus : HttpStatus.INTERNAL_SERVER_ERROR;
    }

}

```

## src/main/java/com/nubo/participants/accounts/synchronization/exception/error/ErrorCode.java

```java
package com.nubo.participants.accounts.synchronization.exception.error;

import lombok.Getter;

@Getter
public enum ErrorCode {

    UNAUTHORIZED("Not unauthorized"),
    ERROR_KAFKA_PRODUCER_NUBO("Error Producer Kafka Nubo"),
    FORBIDDEN("Access denied"),
    UNEXPECTED("An unexpected error occurred"),
    METHOD_ARGUMENT_TYPE("Invalid request path"),
    METHOD_NOT_ALLOWED("Http method not allowed"),
    NOT_FOUND("Resource not found"),
    UNSUPPORTED_MEDIA_TYPE("Content Type is not supported"),
    MESSAGE_NOT_READABLE("Error reading the message body request"),
    BAD_REQUEST("Invalid request body"),
    TYPE_NOT_FOUND("Type not found in the database."),
    IDENTIFICATION_TYPE_NOT_FOUND("Identification Type not found in the database."),
    ERROR_DESERIALIZER_JSON("Error Deserializer Json"),
    ERROR_SERIALIZER_JSON("Error Serializer Json"),
    ERROR_KAFKA_CONSUMER_NUBO("Error Consumer Kafka Nubo"),
    CONCEPT_TYPE_MAPPING_NOT_FOUND("Concept Type Mapping not found in the database."),
    COUNTRY_NOT_FOUND("Country not found in the database.");

    private final String message;

    ErrorCode(String message) {
        this.message = message;
    }

    public String getName() {
        return this.name();
    }

}

```

## src/main/java/com/nubo/participants/accounts/synchronization/exception/error/ErrorResponse.java

```java
package com.nubo.participants.accounts.synchronization.exception.error;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.nubo.participants.accounts.synchronization.application.util.ApplicationUtils;
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

    @Override
    public String toString() {
        return ApplicationUtils.convertObjectToJson(this);
    }

}

```

## src/main/java/com/nubo/participants/accounts/synchronization/exception/error/ErrorValidation.java

```java
package com.nubo.participants.accounts.synchronization.exception.error;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ErrorValidation {

    private String id;
    private String description;

}

```

## src/main/java/com/nubo/participants/accounts/synchronization/exception/handler/GlobalExceptionHandler.java

```java
package com.nubo.participants.accounts.synchronization.exception.handler;

import com.nubo.participants.accounts.synchronization.application.properties.PropertiesContext;
import com.nubo.participants.accounts.synchronization.exception.ServiceException;
import com.nubo.participants.accounts.synchronization.exception.error.ErrorCode;
import com.nubo.participants.accounts.synchronization.exception.error.ErrorResponse;
import com.nubo.participants.accounts.synchronization.exception.error.ErrorValidation;
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
                .timestamp(ObjectUtils.isEmpty(String.valueOf(PropertiesContext.getClientDatetime())) ? null :
                        String.valueOf(PropertiesContext.getClientDatetime()))
                .errorDetails(errorDetails)
                .build();

        log.error("Error -> {}", errorResponse);

        return ResponseEntity.status(status).body(errorResponse);
    }

}


```

## src/main/java/com/nubo/participants/accounts/synchronization/exception/kafka/KafkaErrorBuild.java

```java
package com.nubo.participants.accounts.synchronization.exception.kafka;

import com.nubo.participants.accounts.synchronization.application.properties.PropertiesConfig;
import com.nubo.participants.accounts.synchronization.application.util.ApplicationUtils;
import com.nubo.participants.accounts.synchronization.exception.error.ErrorCode;
import com.nubo.participants.accounts.synchronization.exception.error.ErrorResponse;
import com.nubo.participants.accounts.synchronization.exception.error.ErrorValidation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
@RequiredArgsConstructor
@Slf4j
public class KafkaErrorBuild {

    private final PropertiesConfig propertiesConfig;

    public void buildError(Exception exception, ErrorCode errorCode) {
        this.buildErrorResponse(exception, errorCode, null, null, null);
    }

    public void buildError(Exception exception, ErrorCode errorCode, Long offset) {
        this.buildErrorResponse(exception, errorCode, offset, null, null);
    }

    public void buildError(Exception exception, ErrorCode errorCode, Long offset, String topic, Integer retry) {
        this.buildErrorResponse(exception, errorCode, offset, topic, retry);
    }

    private void buildErrorResponse(Exception exception, ErrorCode errorCode, Long offset, String topic, Integer retry) {
        StringBuilder description = new StringBuilder(errorCode.getMessage());
        if (offset != null) description.append(" - Offset: ").append(offset);
        if (topic != null)  description.append(" - Topic: ").append(topic);
        if (retry != null)  description.append(" - Retries: ").append(retry);

        ErrorResponse errorResponse = ErrorResponse.builder()
                .httpCode("500")
                .url(propertiesConfig.getKafkaNuboBootstrapServers())
                .errorCode(errorCode.getName())
                .errorMessage(description.toString())
                .errorMessageDetail(exception.getMessage())
                .timestamp(ApplicationUtils.getLocalDateTimeNow())
                .build();

        List<ErrorValidation> errorValidationList = getErrorValidations(exception);
        if(!errorValidationList.isEmpty()) {
            errorResponse.setErrorDetails(errorValidationList);
        }

        log.error("Error -> {}", errorResponse);
    }

    private List<ErrorValidation> getErrorValidations(Throwable throwable) {
        List<ErrorValidation> errorDetails = new ArrayList<>();
        Throwable cause = throwable.getCause();
        while (cause != null) {
            String msg = cause.getMessage();
            if (msg != null && !msg.isBlank()) {
                errorDetails.add(ErrorValidation.builder()
                        .description(msg)
                        .build());
            }
            cause = cause.getCause();
        }
        return errorDetails;
    }

}
```

## src/main/java/com/nubo/participants/accounts/synchronization/helpers/MapperUtil.java

```java
package com.nubo.participants.accounts.synchronization.helpers;

public final class MapperUtil {

    private MapperUtil() {
    }

}

```

## src/main/java/com/nubo/participants/accounts/synchronization/kafka/consumer/KafkaNuboListenerAdapter.java

```java
package com.nubo.participants.accounts.synchronization.kafka.consumer;

import com.nubo.participants.accounts.synchronization.models.dto.request.ParticipantBankAccountContentInDto;
import com.nubo.participants.accounts.synchronization.service.ParticipantBankAccountService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.support.KafkaHeaders;
import org.springframework.messaging.handler.annotation.Header;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Component;
import org.springframework.util.CollectionUtils;

@Component
@RequiredArgsConstructor
@Slf4j
public class KafkaNuboListenerAdapter {


    private final ParticipantBankAccountService participantBankAccountService;

    @KafkaListener(
            topics = "#{propertiesConfig.getKafkaNuboConsumerTopicName}",
            autoStartup = "${kafka.nubo.consumer.auto-startup:true}",
            containerFactory = "kafkaNuboListenerContainerFactory")
    public void listenKafka(@Payload ParticipantBankAccountContentInDto participantBankAccountContentInDto,
                            @Header(KafkaHeaders.RECEIVED_PARTITION) int partition,
                            @Header(KafkaHeaders.OFFSET) long offset,
                            @Header(KafkaHeaders.RECEIVED_TOPIC) String topic,
                            @Header(name = KafkaHeaders.DELIVERY_ATTEMPT, required = false) Integer retry) {

        int deliveryAttempt = retry != null ? retry : 1;

        log.info("New participant bank account message received. Topic [{}], Partition [{}], Offset [{}], Retry [{}]",
                topic, partition, offset, deliveryAttempt);

        if (participantBankAccountContentInDto == null) {
            log.warn("Kafka message payload is null. Topic [{}], Partition [{}], Offset [{}]",
                    topic, partition, offset);
            return;
        }

        String participantCode = participantBankAccountContentInDto.getNuamParticipantCode();
        int accountQuantity = CollectionUtils.isEmpty(participantBankAccountContentInDto.getAccounts())
                ? 0
                : participantBankAccountContentInDto.getAccounts().size();

        log.info("Processing participant bank account message. Participant code [{}], Accounts [{}]",
                participantCode, accountQuantity);

        participantBankAccountService.createOrUpdateParticipantBankAccounts(participantBankAccountContentInDto);

        log.info("Participant bank account message processed successfully. Participant code [{}], Accounts [{}], Topic [{}], Offset [{}]",
                participantCode, accountQuantity, topic, offset);
    }

}

```

## src/main/java/com/nubo/participants/accounts/synchronization/kafka/producer/KafkaNuboAdapter.java

```java
package com.nubo.participants.accounts.synchronization.kafka.producer;

import com.nubo.participants.accounts.synchronization.application.properties.PropertiesConfig;
import com.nubo.participants.accounts.synchronization.application.util.ApplicationUtils;
import com.nubo.participants.accounts.synchronization.models.dto.response.MessageEventKafka;
import com.nubo.participants.accounts.synchronization.exception.ServiceException;
import com.nubo.participants.accounts.synchronization.exception.error.ErrorCode;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.SendResult;
import org.springframework.stereotype.Component;

import java.util.concurrent.CompletableFuture;

@Component
@RequiredArgsConstructor
@Slf4j
public class KafkaNuboAdapter {

    private final PropertiesConfig propertiesConfig;
    private final KafkaTemplate<String, String> kafkaNuboTemplate;

    public void sendMessage(MessageEventKafka messageEvent) {
        String messageJson = ApplicationUtils.convertObjectToJson(messageEvent);
        String topic = propertiesConfig.getKafkaNuboTopicName();
        CompletableFuture<SendResult<String, String>> future = kafkaNuboTemplate.send(topic, messageJson).toCompletableFuture();

        future.thenAccept(result -> log.info("Send messageJson -- Topic: {} -- offset: {} -- json: {} ",
                        topic, result.getRecordMetadata().offset(), messageJson) )
                .exceptionally(ex -> {
                    throw new ServiceException(ErrorCode.ERROR_KAFKA_PRODUCER_NUBO, ex);
                });
    }
}

```

## src/main/java/com/nubo/participants/accounts/synchronization/models/domain/ParticipantResult.java

```java
package com.nubo.participants.accounts.synchronization.models.domain;

public record ParticipantResult(
        Long id,
        String action
) {}

```

## src/main/java/com/nubo/participants/accounts/synchronization/models/dto/request/AccountInDto.java

```java
package com.nubo.participants.accounts.synchronization.models.dto.request;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class AccountInDto {

    private Integer id;

    private String accountType;

    private String accountTypeDescription;

    private String nuamParticipantCodeBankEntity;

    private String country;

    private String countryDescription;

    private String accountNumber;

    private String clearingEntityId;

    private String swiftCode;

    private String abaCode;

    private String currencyCode;

    private String currencyDescription;

    private String status;

    private String statusDescription;

    private String branchCode;

    private String portfolioCode;

    private String conceptCode;

    private String conceptDescription;

    private String action;

    private String actionDescription;

    private LocalDateTime creationDate;

    private String creationUser;

    private LocalDateTime updateDate;

    private String updateUser;

    private String updateUserIp;

}

```

## src/main/java/com/nubo/participants/accounts/synchronization/models/dto/request/CurrencyDto.java

```java
package com.nubo.participants.accounts.synchronization.models.dto.request;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class CurrencyDto {

    private Long id;

    private String code;

    @JsonProperty("iso_name")
    private String isoName;

    private String country;

}

```

## src/main/java/com/nubo/participants/accounts/synchronization/models/dto/request/DataReferenceParticipantInDto.java

```java
package com.nubo.participants.accounts.synchronization.models.dto.request;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class DataReferenceParticipantInDto {

    private Integer id;

    private String code;

    private String name;

    private String shortName;

    private List<ParticipantTypeInDto> participantTypes;

    private List<RegisteredParticipantInsInDto> registeredParticipantIns;

    private List<TaxQualitiesInDto> taxQualities;

    private String mnemonic;

    private String countryNuam;

    private LocalDate registrationDate;

    private String taxCode;

    private String department;

    private String mainAddress;

    private String website;

    private String phone;

    private String entityType;

    private Boolean marketMaker;

    private String status;

    private String action;

    private String equity;

    private CurrencyDto currency;

}

```

## src/main/java/com/nubo/participants/accounts/synchronization/models/dto/request/ParticipantBankAccountContentInDto.java

```java
package com.nubo.participants.accounts.synchronization.models.dto.request;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import java.util.List;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class ParticipantBankAccountContentInDto {

    private String nuamParticipantCode;

    private String clearingTradingMemberCode;

    private String clearingClearingMemberCode;

    private String clearingCustodyCode;

    private List<AccountInDto> accounts;

}

```

## src/main/java/com/nubo/participants/accounts/synchronization/models/dto/request/ParticipantBankAccountInDto.java

```java
package com.nubo.participants.accounts.synchronization.models.dto.request;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import java.util.List;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class ParticipantBankAccountInDto {

    private List<ParticipantBankAccountContentInDto> content;

    private ParticipantBankAccountPageDto page;

}

```

## src/main/java/com/nubo/participants/accounts/synchronization/models/dto/request/ParticipantBankAccountPageDto.java

```java
package com.nubo.participants.accounts.synchronization.models.dto.request;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class ParticipantBankAccountPageDto {

    private Integer size;
    private Integer number;
    private Integer totalElements;
    private Integer totalPages;

}

```

## src/main/java/com/nubo/participants/accounts/synchronization/models/dto/request/ParticipantTypeInDto.java

```java
package com.nubo.participants.accounts.synchronization.models.dto.request;

import lombok.Data;

@Data
public class ParticipantTypeInDto {

    private Long parameterId;

    private Integer masterId;

    private String code;

    private String description;

    private String key;
}

```

## src/main/java/com/nubo/participants/accounts/synchronization/models/dto/request/RegisteredParticipantInsInDto.java

```java
package com.nubo.participants.accounts.synchronization.models.dto.request;

import lombok.Data;

@Data
public class RegisteredParticipantInsInDto {

    private Integer parameterId;

    private Integer masterId;

    private String code;

    private String description;

    private String key;
}






```

## src/main/java/com/nubo/participants/accounts/synchronization/models/dto/request/TaxQualitiesInDto.java

```java
package com.nubo.participants.accounts.synchronization.models.dto.request;


import lombok.Data;

@Data
public class TaxQualitiesInDto {

    private Long parameterId;

    private Integer masterId;

    private String code;

    private String description;

    private String key;
}


```

## src/main/java/com/nubo/participants/accounts/synchronization/models/dto/response/MessageEventKafka.java

```java
package com.nubo.participants.accounts.synchronization.models.dto.response;

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
@JsonInclude(JsonInclude.Include.ALWAYS)
public class MessageEventKafka {

    private LocalDateTime dateTime;

    private String table;

    private String id;

    private String status;

}

```

## src/main/java/com/nubo/participants/accounts/synchronization/models/entity/CountryEntity.java

```java
package com.nubo.participants.accounts.synchronization.models.entity;

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

## src/main/java/com/nubo/participants/accounts/synchronization/models/entity/CurrencyEntity.java

```java
package com.nubo.participants.accounts.synchronization.models.entity;

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

## src/main/java/com/nubo/participants/accounts/synchronization/models/entity/DepartmentEntity.java

```java
package com.nubo.participants.accounts.synchronization.models.entity;

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

## src/main/java/com/nubo/participants/accounts/synchronization/models/entity/ErrorEntity.java

```java
package com.nubo.participants.accounts.synchronization.models.entity;

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
@Table(name = "\"ERROR\"", schema = "\"NUANBODB\"")
public class ErrorEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"ERROR_ID\"")
    private Long id;

    @Column(name = "\"CODE\"")
    private Integer code;

    @Column(name = "\"DESCRIPTION\"")
    private String description;

    @Column(name = "\"LAST_MODIFY_USER\"")
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"")
    private String lastModifyApplic;

    @Column(name = "\"LAST_MODIFY_DATE\"")
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"")
    private String lastModifyIp;

}

```

## src/main/java/com/nubo/participants/accounts/synchronization/models/entity/IdentificationTypeEntity.java

```java
package com.nubo.participants.accounts.synchronization.models.entity;

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
@Table(name = "\"IDENTIFICATION_TYPE\"", schema = "\"NUANBODB\"")
public class IdentificationTypeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"IDENTIFICATION_TYPE_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"DESCRIPTION\"", length = 80)
    private String description;

    @Column(name = "\"CODE\"")
    private String code;

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

## src/main/java/com/nubo/participants/accounts/synchronization/models/entity/ParticipantBankAccountEntity.java

```java
package com.nubo.participants.accounts.synchronization.models.entity;

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
@Builder(toBuilder = true)
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"PARTICIPANT_BANK_ACCOUNT\"", schema = "\"NUANBODB\"")
public class ParticipantBankAccountEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"PARTICIPANT_BANK_ACCOUNT_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"BANK_ID\"", nullable = false)
    private Long bankId;

    @Column(name = "\"PARTICIPANT_ID\"", nullable = false)
    private Long participantId;

    @Column(name = "\"BANK_ACCOUNT\"", length = 30)
    private String bankAccount;

    @Column(name = "\"PRINCIPAL\"")
    private Boolean principal;

    @Column(name = "\"BANK_BRANCH\"")
    private Long bankBranch;

    @Column(name = "\"STATUS_ID\"")
    private Long statusId;

    @Column(name = "\"TYPE_ID\"")
    private Long typeId;

    @Column(name = "\"COUNTRY_ID\"")
    private Long countryId;

    @Column(name = "\"ENTITY_CODE\"", length = 6)
    private String entityCode;

    @Column(name = "\"SWIFT_CODE\"")
    private Integer swiftCode;

    @Column(name = "\"BRANCH_CODE\"", length = 20)
    private String branchCode;

    @Column(name = "\"PORTFOLIO\"", length = 20)
    private String portfolio;

    @Column(name = "\"NIT_CLEARING_ENTITY\"", length = 10)
    private String nitClearingEntity;

    @Column(name = "\"DEPOSITORY_ID\"", length = 2)
    private String depositoryId;

    @Column(name = "\"CURRENCY_ID\"")
    private Long currencyId;

    @ManyToOne
    @JoinColumn(name = "\"CONCEPT_TYPE_ID\"")
    private TypeEntity conceptType;

    @Column(name = "\"ORIGIN_TYPE_ID\"")
    private Long originTypeId;

    @Column(name = "\"CONCEPT\"", length = 30)
    private String concept;

    @Column(name = "\"TYPE_ACCOUNT\"")
    private Integer typeAccount;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 250, nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50)
    private String lastModifyIp;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ParticipantBankAccountEntity that = (ParticipantBankAccountEntity) o;
        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/participants/accounts/synchronization/models/entity/ParticipantEntity.java

```java
package com.nubo.participants.accounts.synchronization.models.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Builder(toBuilder=true)
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

    @Column(name = "\"DOCUMENT_NUMBER\"")
    private String documentNumber;

    @ManyToOne
    @JoinColumn(name = "\"IDENTIFICATION_TYPE_ID\"")
    private IdentificationTypeEntity identificationType;

    @Column(name = "\"NAME\"")
    private String name;

    @Column(name = "\"SHORT_NAME\"")
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

    @Column(name = "\"STATUS_ID\"")
    private Long statusId;

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

    @Column(name = "\"EQUITY\"", precision = 16, scale = 4)
    private BigDecimal equity;

    @ManyToOne
    @JoinColumn(name = "\"CURRENCY_ID\"")
    private CurrencyEntity currency;

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

## src/main/java/com/nubo/participants/accounts/synchronization/models/entity/SideEntity.java

```java
package com.nubo.participants.accounts.synchronization.models.entity;

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

## src/main/java/com/nubo/participants/accounts/synchronization/models/entity/StatusEntity.java

```java
package com.nubo.participants.accounts.synchronization.models.entity;

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

## src/main/java/com/nubo/participants/accounts/synchronization/models/entity/StatusMappingEntity.java

```java
package com.nubo.participants.accounts.synchronization.models.entity;

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
@Table(name = "\"STATUS_MAPPING\"", schema = "\"NUANBODB\"")
public class StatusMappingEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"STATUS_MAPPING_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"EXTERNAL_SYSTEM\"", length = 30, nullable = false)
    private String externalSystem;

    @Column(name = "\"EXTERNAL_CODE\"", length = 20)
    private String externalCode;

    @Column(name = "\"CATEGORY\"", length = 30)
    private String category;

    @Column(name = "\"EXTERNAL_DESCRIPTION\"", length = 255)
    private String externalDescription;

    @Column(name = "\"STATUS_ID\"", nullable = false)
    private Long statusId;

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

## src/main/java/com/nubo/participants/accounts/synchronization/models/entity/TaxStatusEntity.java

```java
package com.nubo.participants.accounts.synchronization.models.entity;

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

## src/main/java/com/nubo/participants/accounts/synchronization/models/entity/TypeEntity.java

```java
package com.nubo.participants.accounts.synchronization.models.entity;

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

## src/main/java/com/nubo/participants/accounts/synchronization/models/entity/TypeMappingEntity.java

```java
package com.nubo.participants.accounts.synchronization.models.entity;

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
@Table(name = "\"TYPE_MAPPING\"", schema = "\"NUANBODB\"")
public class TypeMappingEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"TYPE_MAPPING_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"EXTERNAL_SYSTEM\"", length = 30, nullable = false)
    private String externalSystem;

    @Column(name = "\"EXTERNAL_CODE\"", length = 20)
    private String externalCode;

    @Column(name = "\"CATEGORY\"", length = 30)
    private String category;

    @Column(name = "\"EXTERNAL_DESCRIPTION\"", length = 255)
    private String externalDescription;

    @Column(name = "\"TYPE_ID\"", nullable = false)
    private Long typeId;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 250, nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50)
    private String lastModifyIp;

}

```

## src/main/java/com/nubo/participants/accounts/synchronization/models/enums/CountryEnum.java

```java
package com.nubo.participants.accounts.synchronization.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Arrays;

@Getter
@RequiredArgsConstructor
public enum CountryEnum {

    COLOMBIA("CO", "Colombia"),
    CHILE("CL", "Chile"),
    PERU("PE", "Peru");

    private final String code;
    private final String description;

}
```

## src/main/java/com/nubo/participants/accounts/synchronization/models/enums/IdentificationEnum.java

```java
package com.nubo.participants.accounts.synchronization.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Arrays;

@Getter
@RequiredArgsConstructor
public enum IdentificationEnum {

    COLOMBIA("CO", "NIT"),
    CHILE("CL", "RUN"),
    PERU("PE", "RUT");

    private final String countryCode;
    private final String codeIdentification;

    public static IdentificationEnum fromCountryCode(String countryCode) {
        return Arrays.stream(IdentificationEnum.values())
                .filter(identificationEnum -> identificationEnum.countryCode.equals(countryCode))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("IdentificationEnum, Unknown value countryCode: " + countryCode));
    }
}

```

## src/main/java/com/nubo/participants/accounts/synchronization/models/enums/PropertiesEnum.java

```java
package com.nubo.participants.accounts.synchronization.models.enums;

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

## src/main/java/com/nubo/participants/accounts/synchronization/models/enums/StatusEnum.java

```java
package com.nubo.participants.accounts.synchronization.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum StatusEnum {

    ASSET(510L, "PARTICIPANTES");

    private final Long id;
    private final String category;

}

```

## src/main/java/com/nubo/participants/accounts/synchronization/models/enums/TaxStatusEnum.java

```java
package com.nubo.participants.accounts.synchronization.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum TaxStatusEnum {

    NONE(0L, "NINGUNO");

    private final Long id;
    private final String description;
}

```

## src/main/java/com/nubo/participants/accounts/synchronization/models/enums/TypeEnum.java

```java
package com.nubo.participants.accounts.synchronization.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum TypeEnum {

    NUAM("BOLSA", "PARTICIPANTE"),
    CUSTODIAN("CUSTODIO", "PARTICIPANTE");

    private final String description;
    private final String category;

}

```

## src/main/java/com/nubo/participants/accounts/synchronization/models/enums/VersionApiEnum.java

```java
package com.nubo.participants.accounts.synchronization.models.enums;

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

## src/main/java/com/nubo/participants/accounts/synchronization/repository/CountryRepository.java

```java
package com.nubo.participants.accounts.synchronization.repository;

import com.nubo.participants.accounts.synchronization.models.entity.CountryEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface CountryRepository extends JpaRepository<CountryEntity, Long> {

    @Query("SELECT c FROM CountryEntity c WHERE c.code =:code")
    Optional<CountryEntity> findCountryByCode(String code);

    Optional<CountryEntity> findByCodeIgnoreCase(String code);

}

```

## src/main/java/com/nubo/participants/accounts/synchronization/repository/CurrencyRepository.java

```java
package com.nubo.participants.accounts.synchronization.repository;

import com.nubo.participants.accounts.synchronization.models.entity.CurrencyEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CurrencyRepository extends JpaRepository<CurrencyEntity, Long> {

    Optional<CurrencyEntity> findByCode(String code);

}

```

## src/main/java/com/nubo/participants/accounts/synchronization/repository/DepartmentRepository.java

```java
package com.nubo.participants.accounts.synchronization.repository;

import com.nubo.participants.accounts.synchronization.models.entity.DepartmentEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepartmentRepository extends JpaRepository<DepartmentEntity, String> {
}

```

## src/main/java/com/nubo/participants/accounts/synchronization/repository/ErrorRepository.java

```java
package com.nubo.participants.accounts.synchronization.repository;

import com.nubo.participants.accounts.synchronization.models.entity.ErrorEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface ErrorRepository extends JpaRepository<ErrorEntity, Long> {

    @Query("SELECT e FROM ErrorEntity e WHERE e.code =:code")
    Optional<ErrorEntity> findErrorByCode(Integer code);
}
```

## src/main/java/com/nubo/participants/accounts/synchronization/repository/IdentificationTypeRepository.java

```java
package com.nubo.participants.accounts.synchronization.repository;

import com.nubo.participants.accounts.synchronization.models.entity.IdentificationTypeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface IdentificationTypeRepository extends JpaRepository<IdentificationTypeEntity, Long> {

    @Query("""
            SELECT i FROM IdentificationTypeEntity i
            JOIN i.country c
            WHERE i.code = :code
            AND c.code = :countryCode
            """)
    Optional<IdentificationTypeEntity> findByCodeAndCountryCode(String code, String countryCode);
}

```

## src/main/java/com/nubo/participants/accounts/synchronization/repository/ParticipantBankAccountRepository.java

```java
package com.nubo.participants.accounts.synchronization.repository;

import com.nubo.participants.accounts.synchronization.models.entity.ParticipantBankAccountEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface ParticipantBankAccountRepository extends JpaRepository<ParticipantBankAccountEntity, Long> {

    @Query("""
            select pba
            from ParticipantBankAccountEntity pba
            where pba.participantId = :participantId
              and pba.bankId = :bankId
              and pba.bankAccount = :bankAccount
              and (
                    (:countryId is null and pba.countryId is null)
                    or pba.countryId = :countryId
                  )
              and (
                    (:typeId is null and pba.typeId is null)
                    or pba.typeId = :typeId
                  )
            """)
    Optional<ParticipantBankAccountEntity> findCurrentBankAccount(
            @Param("participantId") Long participantId,
            @Param("bankId") Long bankId,
            @Param("bankAccount") String bankAccount,
            @Param("countryId") Long countryId,
            @Param("typeId") Long typeId
    );
}
```

## src/main/java/com/nubo/participants/accounts/synchronization/repository/ParticipantRepository.java

```java
package com.nubo.participants.accounts.synchronization.repository;

import com.nubo.participants.accounts.synchronization.models.entity.ParticipantEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ParticipantRepository extends JpaRepository<ParticipantEntity, Long> {
    Optional<ParticipantEntity> findFirstByCode(String code);
}

```

## src/main/java/com/nubo/participants/accounts/synchronization/repository/StatusMappingRepository.java

```java
package com.nubo.participants.accounts.synchronization.repository;

import com.nubo.participants.accounts.synchronization.models.entity.StatusMappingEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface StatusMappingRepository extends JpaRepository<StatusMappingEntity, Long> {

    @Query("""
            SELECT sm FROM StatusMappingEntity sm
            WHERE sm.externalSystem = :externalSystem
            AND sm.externalCode = :externalCode
            AND sm.category = :category
            """)
    Optional<StatusMappingEntity> findByExternalSystemAndExternalCodeAndCategory(
            @Param("externalSystem") String externalSystem,
            @Param("externalCode") String externalCode,
            @Param("category") String category);

}

```

## src/main/java/com/nubo/participants/accounts/synchronization/repository/StatusRepository.java

```java
package com.nubo.participants.accounts.synchronization.repository;

import com.nubo.participants.accounts.synchronization.models.entity.StatusEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface StatusRepository extends JpaRepository<StatusEntity, Integer> {

    Optional<StatusEntity> findByDescription(String description);

    Optional<StatusEntity> findFirstByDescriptionIgnoreCaseAndCategoryIgnoreCase(String description, String category);

}


```

## src/main/java/com/nubo/participants/accounts/synchronization/repository/TaxStatusRepository.java

```java
package com.nubo.participants.accounts.synchronization.repository;

import com.nubo.participants.accounts.synchronization.models.entity.TaxStatusEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TaxStatusRepository extends JpaRepository<TaxStatusEntity, Long> {
    Optional<TaxStatusEntity> findByDescriptionIgnoreCase(String description);
}

```

## src/main/java/com/nubo/participants/accounts/synchronization/repository/TypeMappingRepository.java

```java
package com.nubo.participants.accounts.synchronization.repository;

import com.nubo.participants.accounts.synchronization.models.entity.TypeMappingEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface TypeMappingRepository extends JpaRepository<TypeMappingEntity, Long> {

    @Query("""
            SELECT tm FROM TypeMappingEntity tm
            WHERE tm.externalSystem = :externalSystem
            AND tm.externalCode = :externalCode
            AND tm.category = :category
            """)
    Optional<TypeMappingEntity> findByExternalSystemAndExternalCodeAndCategory(
            @Param("externalSystem") String externalSystem,
            @Param("externalCode") String externalCode,
            @Param("category") String category);

}

```

## src/main/java/com/nubo/participants/accounts/synchronization/repository/TypeRepository.java

```java
package com.nubo.participants.accounts.synchronization.repository;

import com.nubo.participants.accounts.synchronization.models.entity.TypeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface TypeRepository extends JpaRepository<TypeEntity, Long> {
    Optional<TypeEntity> findById(Long id);

    Optional<TypeEntity> findByDescription(String description);

    @Query("""
            SELECT t FROM TypeEntity t
            WHERE LOWER(t.description) = LOWER(:description)
            AND t.category = :category
            ORDER BY t.id ASC
            """)
    Optional<TypeEntity> findDescriptionIgnoreCaseAndCategory(@Param("description") String description,
                                                              @Param("category") String category);
}


```

## src/main/java/com/nubo/participants/accounts/synchronization/service/BatchCacheService.java

```java
package com.nubo.participants.accounts.synchronization.service;

import com.nubo.participants.accounts.synchronization.models.entity.CountryEntity;
import com.nubo.participants.accounts.synchronization.models.entity.CurrencyEntity;
import com.nubo.participants.accounts.synchronization.models.entity.DepartmentEntity;
import com.nubo.participants.accounts.synchronization.models.entity.IdentificationTypeEntity;
import com.nubo.participants.accounts.synchronization.models.entity.ParticipantEntity;
import com.nubo.participants.accounts.synchronization.models.entity.StatusEntity;
import com.nubo.participants.accounts.synchronization.models.entity.TaxStatusEntity;
import com.nubo.participants.accounts.synchronization.models.entity.TypeEntity;
import com.nubo.participants.accounts.synchronization.models.entity.TypeMappingEntity;
import com.nubo.participants.accounts.synchronization.models.entity.StatusMappingEntity;

public interface BatchCacheService {

    TypeEntity findTypeEntityDescription(String typeDescription);

    CountryEntity findCountryEntityByCode(String countryCode);

    StatusEntity findStatusEntityByDescription(String statusDescription);

    TaxStatusEntity findTaxStatusEntityByDescription(String taxStatusDescription);

    DepartmentEntity findDepartmentEntityById(String departmentId);

    CurrencyEntity findCurrencyEntityByCode(String currencyCode);

    IdentificationTypeEntity findIdentificationTypeByCodeAndCountry(String countryCode);

    ParticipantEntity findParticipantEntityByCode(String participantCode);
    TypeEntity findTypeEntityById(Long typeId);

    TypeMappingEntity findTypeMappingByExternalCodeAndCategory(String externalCode, String category);

    StatusMappingEntity findStatusMappingByExternalCodeAndCategory(String externalCode, String category);

}

```

## src/main/java/com/nubo/participants/accounts/synchronization/service/ParticipantBankAccountService.java

```java
package com.nubo.participants.accounts.synchronization.service;

import com.nubo.participants.accounts.synchronization.models.dto.request.ParticipantBankAccountContentInDto;
import com.nubo.participants.accounts.synchronization.models.dto.request.ParticipantBankAccountInDto;

public interface ParticipantBankAccountService {

    void createOrUpdateParticipantBankAccounts(ParticipantBankAccountContentInDto dto);
}

```

## src/main/java/com/nubo/participants/accounts/synchronization/service/ParticipantNuboService.java

```java
package com.nubo.participants.accounts.synchronization.service;

import com.nubo.participants.accounts.synchronization.models.domain.ParticipantResult;
import com.nubo.participants.accounts.synchronization.models.dto.request.DataReferenceParticipantInDto;

public interface ParticipantNuboService {

    ParticipantResult createUpdateParticipant(DataReferenceParticipantInDto dataReferenceParticipantInDto);
}

```

## src/main/java/com/nubo/participants/accounts/synchronization/service/SynchronizationService.java

```java
package com.nubo.participants.accounts.synchronization.service;

import com.nubo.participants.accounts.synchronization.models.dto.request.DataReferenceParticipantInDto;

public interface SynchronizationService {

    void synchronizeDataReferenceAndParticipants(DataReferenceParticipantInDto dataReferenceParticipantInDto);

}

```

## src/main/java/com/nubo/participants/accounts/synchronization/service/impl/BatchCacheServiceImpl.java

```java
package com.nubo.participants.accounts.synchronization.service.impl;

import com.nubo.participants.accounts.synchronization.exception.ServiceException;
import com.nubo.participants.accounts.synchronization.exception.error.ErrorCode;
import com.nubo.participants.accounts.synchronization.models.entity.CountryEntity;
import com.nubo.participants.accounts.synchronization.models.entity.CurrencyEntity;
import com.nubo.participants.accounts.synchronization.models.entity.DepartmentEntity;
import com.nubo.participants.accounts.synchronization.models.entity.IdentificationTypeEntity;
import com.nubo.participants.accounts.synchronization.models.entity.ParticipantEntity;
import com.nubo.participants.accounts.synchronization.models.entity.StatusEntity;
import com.nubo.participants.accounts.synchronization.models.entity.StatusMappingEntity;
import com.nubo.participants.accounts.synchronization.models.entity.TaxStatusEntity;
import com.nubo.participants.accounts.synchronization.models.entity.TypeEntity;
import com.nubo.participants.accounts.synchronization.models.entity.TypeMappingEntity;
import com.nubo.participants.accounts.synchronization.models.enums.CountryEnum;
import com.nubo.participants.accounts.synchronization.models.enums.IdentificationEnum;
import com.nubo.participants.accounts.synchronization.models.enums.StatusEnum;
import com.nubo.participants.accounts.synchronization.models.enums.TaxStatusEnum;
import com.nubo.participants.accounts.synchronization.models.enums.TypeEnum;
import com.nubo.participants.accounts.synchronization.repository.CountryRepository;
import com.nubo.participants.accounts.synchronization.repository.CurrencyRepository;
import com.nubo.participants.accounts.synchronization.repository.DepartmentRepository;
import com.nubo.participants.accounts.synchronization.repository.IdentificationTypeRepository;
import com.nubo.participants.accounts.synchronization.repository.ParticipantRepository;
import com.nubo.participants.accounts.synchronization.repository.StatusMappingRepository;
import com.nubo.participants.accounts.synchronization.repository.StatusRepository;
import com.nubo.participants.accounts.synchronization.repository.TaxStatusRepository;
import com.nubo.participants.accounts.synchronization.repository.TypeMappingRepository;
import com.nubo.participants.accounts.synchronization.repository.TypeRepository;
import com.nubo.participants.accounts.synchronization.service.BatchCacheService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class BatchCacheServiceImpl implements BatchCacheService {

    private final TypeRepository typeRepository;
    private final CountryRepository countryRepository;
    private final CurrencyRepository currencyRepository;
    private final DepartmentRepository departmentRepository;
    private final StatusRepository statusRepository;
    private final TaxStatusRepository taxStatusRepository;
    private final IdentificationTypeRepository identificationTypeRepository;
    private final ParticipantRepository participantRepository;
    private final TypeMappingRepository typeMappingRepository;
    private final StatusMappingRepository statusMappingRepository;

    private static final String REFERENCE_DATA = "REFERENCE_DATA";
    private static final String REFERENCE_DATA_STATUS = "REFENCE DATA";

    @Override
    @Cacheable(value = "types", key = "#typeDescription", condition = "#typeDescription != null")
    public TypeEntity findTypeEntityDescription(String typeDescription) {
        String effectiveDescription = ObjectUtils.isEmpty(typeDescription) ? TypeEnum.NUAM.getDescription() : typeDescription;
        Optional<TypeEntity> typeEntityOptional = typeRepository
                .findDescriptionIgnoreCaseAndCategory(effectiveDescription, TypeEnum.NUAM.getCategory());
        return typeEntityOptional.orElseGet(() -> typeRepository
                .findDescriptionIgnoreCaseAndCategory(TypeEnum.NUAM.getDescription(), TypeEnum.NUAM.getCategory())
                .orElseThrow(() -> new ServiceException(ErrorCode.TYPE_NOT_FOUND, HttpStatus.NOT_FOUND)));
    }

    @Override
    @Cacheable(value = "countries", key = "#countryCode", condition = "#countryCode != null")
    public CountryEntity findCountryEntityByCode(String countryCode) {
        String effectiveCountryCode = ObjectUtils.isEmpty(countryCode) ? CountryEnum.COLOMBIA.getCode() : countryCode;
        Optional<CountryEntity> countryEntityOptional = countryRepository.findByCodeIgnoreCase(effectiveCountryCode);
        return countryEntityOptional.orElseGet(() -> countryRepository
                .findCountryByCode(CountryEnum.COLOMBIA.getCode())
                .orElseThrow(() -> new ServiceException(ErrorCode.COUNTRY_NOT_FOUND, HttpStatus.NOT_FOUND)));
    }

    @Override
    @Cacheable(value = "status", key = "#statusDescription", condition = "#statusDescription != null")
    public StatusEntity findStatusEntityByDescription(String statusDescription) {
        Optional<StatusEntity> statusEntityOptional = statusRepository
                .findFirstByDescriptionIgnoreCaseAndCategoryIgnoreCase(statusDescription, StatusEnum.ASSET.getCategory());
        return statusEntityOptional.orElseGet(() -> StatusEntity.builder()
                .id(StatusEnum.ASSET.getId())
                .build());
    }

    @Override
    @Cacheable(value = "taxStatus", key = "#taxStatusDescription", condition = "#taxStatusDescription != null")
    public TaxStatusEntity findTaxStatusEntityByDescription(String taxStatusDescription) {
        Optional<TaxStatusEntity> taxStatusEntityOptional = taxStatusRepository.findByDescriptionIgnoreCase(taxStatusDescription);
        return taxStatusEntityOptional.orElseGet(() -> TaxStatusEntity.builder()
                .id(TaxStatusEnum.NONE.getId())
                .build());
    }

    @Override
    @Cacheable(value = "department", key = "#departmentId", condition = "#departmentId != null")
    public DepartmentEntity findDepartmentEntityById(String departmentId) {
        if (ObjectUtils.isEmpty(departmentId)) {
            return null;
        }
        Optional<DepartmentEntity> departmentEntityOptional = departmentRepository.findById(departmentId);
        return departmentEntityOptional.orElse(null);
    }

    @Override
    @Cacheable(value = "currency", key = "#currencyCode", condition = "#currencyCode != null")
    public CurrencyEntity findCurrencyEntityByCode(String currencyCode) {
        if (!ObjectUtils.isEmpty(currencyCode)) {
            Optional<CurrencyEntity> currencyEntityOptional = currencyRepository.findByCode(currencyCode);
            return currencyEntityOptional.orElse(null);
        }
        return null;
    }

    @Override
    @Cacheable(value = "identification", key = "#countryCode", condition = "#countryCode != null")
    public IdentificationTypeEntity findIdentificationTypeByCodeAndCountry(String countryCode) {
        String effectiveCountryCode = ObjectUtils.isEmpty(countryCode) ? CountryEnum.COLOMBIA.getCode() : countryCode;
        IdentificationEnum identificationEnum = IdentificationEnum.fromCountryCode(effectiveCountryCode);
        return identificationTypeRepository.findByCodeAndCountryCode(identificationEnum.getCodeIdentification(), effectiveCountryCode)
                .orElseThrow(() -> new ServiceException(ErrorCode.IDENTIFICATION_TYPE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    @Override
    @Cacheable(value = "participants", key = "#participantCode", condition = "#participantCode != null")
    public ParticipantEntity findParticipantEntityByCode(String participantCode) {
        if (ObjectUtils.isEmpty(participantCode)) {
            throw new ServiceException(ErrorCode.NOT_FOUND, HttpStatus.NOT_FOUND);
        }
        return participantRepository.findFirstByCode(participantCode)
                .orElseThrow(() -> new ServiceException(ErrorCode.NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    @Override
    @Cacheable(value = "typeMapping", key = "#externalCode + '_' + #category", condition = "#externalCode != null and #category != null")
    public TypeMappingEntity findTypeMappingByExternalCodeAndCategory(String externalCode, String category) {
        if (ObjectUtils.isEmpty(externalCode) || ObjectUtils.isEmpty(category)) {
            return null;
        }
        return typeMappingRepository.findByExternalSystemAndExternalCodeAndCategory(REFERENCE_DATA, externalCode, category)
                .orElse(null);
    }

    @Override
    @Cacheable(value = "statusMapping", key = "#externalCode + '_' + #category", condition = "#externalCode != null and #category != null")
    public StatusMappingEntity findStatusMappingByExternalCodeAndCategory(String externalCode, String category) {
        if (ObjectUtils.isEmpty(externalCode) || ObjectUtils.isEmpty(category)) {
            return null;
        }
        return statusMappingRepository.findByExternalSystemAndExternalCodeAndCategory(REFERENCE_DATA_STATUS, externalCode, category)
                .orElse(null);
    }
    @Override
    @Cacheable(value = "typesById", key = "#typeId", condition = "#typeId != null")
    public TypeEntity findTypeEntityById(Long typeId) {
        if (typeId == null) {
            throw new ServiceException(
                    ErrorCode.TYPE_NOT_FOUND,
                    "typeId is null"
            );
        }

        return typeRepository.findById(typeId)
                .orElseThrow(() -> new ServiceException(
                        ErrorCode.TYPE_NOT_FOUND,
                        "typeId [" + typeId + "]"
                ));
    }
}

```

## src/main/java/com/nubo/participants/accounts/synchronization/service/impl/ParticipantBankAccountServiceImpl.java

```java
package com.nubo.participants.accounts.synchronization.service.impl;

import com.nubo.participants.accounts.synchronization.application.properties.PropertiesConfig;
import com.nubo.participants.accounts.synchronization.exception.ServiceException;
import com.nubo.participants.accounts.synchronization.exception.error.ErrorCode;
import com.nubo.participants.accounts.synchronization.models.dto.request.AccountInDto;
import com.nubo.participants.accounts.synchronization.models.dto.request.ParticipantBankAccountContentInDto;
import com.nubo.participants.accounts.synchronization.models.dto.request.ParticipantBankAccountInDto;
import com.nubo.participants.accounts.synchronization.models.entity.CountryEntity;
import com.nubo.participants.accounts.synchronization.models.entity.CurrencyEntity;
import com.nubo.participants.accounts.synchronization.models.entity.ParticipantBankAccountEntity;
import com.nubo.participants.accounts.synchronization.models.entity.ParticipantEntity;
import com.nubo.participants.accounts.synchronization.models.entity.StatusMappingEntity;
import com.nubo.participants.accounts.synchronization.models.entity.TypeEntity;
import com.nubo.participants.accounts.synchronization.models.entity.TypeMappingEntity;
import com.nubo.participants.accounts.synchronization.repository.ParticipantBankAccountRepository;
import com.nubo.participants.accounts.synchronization.service.BatchCacheService;
import com.nubo.participants.accounts.synchronization.service.ParticipantBankAccountService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;
import org.springframework.util.ObjectUtils;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class ParticipantBankAccountServiceImpl implements ParticipantBankAccountService {

    private static final String CATEGORY_TIPO_CUENTA = "TIPO_CUENTA";
    private static final String CATEGORY_CONCEPTO_CUENTAS_BANCARIAS = "CONCEPTO_CUENTAS_BANCARIAS";
    private static final String CATEGORY_TIPO_CUENTA_STATUS = "TIPO_CUENTA";
    private static final String EXTERNAL_SYSTEM_PARTICIPANTE = "PARTICIPANTE";

    private final ParticipantBankAccountRepository participantBankAccountRepository;
    private final BatchCacheService batchCacheService;
    private final PropertiesConfig propertiesConfig;

    @Override
    public void createOrUpdateParticipantBankAccounts(ParticipantBankAccountContentInDto dto) {
        log.info("Starting participant bank account synchronization");

        if (dto == null) {
            log.warn("ParticipantBankAccountContentInDto is null. Synchronization skipped");
            return;
        }

        String participantCode = dto.getNuamParticipantCode();

        if (ObjectUtils.isEmpty(participantCode)) {
            log.warn("Participant code is empty. Synchronization skipped");
            return;
        }

        if (CollectionUtils.isEmpty(dto.getAccounts())) {
            log.info("Participant code [{}] has no accounts. Synchronization skipped", participantCode);
            return;
        }

        log.info("Processing participant code [{}] with {} account(s)",
                participantCode, dto.getAccounts().size());

        ParticipantEntity participant = batchCacheService.findParticipantEntityByCode(participantCode);

        if (participant == null) {
            log.warn("Participant not found for code [{}]. Accounts will be skipped", participantCode);
            return;
        }

        log.info("Participant resolved successfully. code [{}], participantId [{}]",
                participantCode, participant.getId());

        List<ParticipantBankAccountEntity> entities = new ArrayList<>();

        for (AccountInDto account : dto.getAccounts()) {
            if (account == null) {
                log.warn("Account item is null for participant code [{}]. Account skipped", participantCode);
                continue;
            }

            try {
                log.info("Building bank account entity for participant code [{}], account [{}], bank entity code [{}]",
                        participantCode,
                        maskAccount(account.getAccountNumber()),
                        account.getNuamParticipantCodeBankEntity());

                ParticipantBankAccountEntity entity = buildEntity(participant, account, dto);
                ParticipantBankAccountEntity persistedEntity = findPersistedEntity(entity);

                if (persistedEntity != null) {
                    entity.setId(persistedEntity.getId());
                    log.info("Existing bank account found. participantBankAccountId [{}], participantId [{}], account [{}]",
                            persistedEntity.getId(),
                            participant.getId(),
                            maskAccount(account.getAccountNumber()));
                } else {
                    log.info("New bank account detected. participantId [{}], account [{}]",
                            participant.getId(),
                            maskAccount(account.getAccountNumber()));
                }

                entities.add(entity);

                log.info("Bank account entity built successfully for participantId [{}], account [{}]",
                        participant.getId(),
                        maskAccount(account.getAccountNumber()));

            } catch (RuntimeException exception) {
                log.error("Error building bank account entity for participant code [{}], account [{}], bank entity code [{}]. Cause: {}",
                        participantCode,
                        maskAccount(account.getAccountNumber()),
                        account.getNuamParticipantCodeBankEntity(),
                        exception.getMessage(),
                        exception);
                throw exception;
            }
        }

        if (CollectionUtils.isEmpty(entities)) {
            log.warn("No valid participant bank account records were built. Nothing to save");
            return;
        }

        log.info("Saving {} participant bank account record(s)", entities.size());

        participantBankAccountRepository.saveAll(entities);

        log.info("Participant bank account synchronization finished successfully. Saved {} record(s)", entities.size());
    }

    private ParticipantBankAccountEntity buildEntity(ParticipantEntity participant,
                                                     AccountInDto account,
                                                     ParticipantBankAccountContentInDto content) {

        String participantCode = content.getNuamParticipantCode();
        String bankEntityCode = account.getNuamParticipantCodeBankEntity();

        log.info("Resolving bank entity for bank entity code [{}]", bankEntityCode);

        ParticipantEntity bankEntity = batchCacheService.findParticipantEntityByCode(bankEntityCode);

        if (bankEntity == null) {
            String message = String.format(
                    "Bank participant not found for bank entity code [%s], participant code [%s], account [%s]",
                    bankEntityCode,
                    participantCode,
                    maskAccount(account.getAccountNumber())
            );
            log.warn(message);
            throw new IllegalStateException(message);
        }

        log.info("Bank entity resolved successfully. bankEntityCode [{}], bankId [{}]",
                bankEntityCode, bankEntity.getId());

        Long typeId = resolveTypeId(account.getAccountType(), CATEGORY_TIPO_CUENTA);
        Long countryId = resolveCountryId(account.getCountry());
        Long currencyId = resolveCurrencyId(account.getCurrencyCode());
        Long statusId = resolveStatusId(account.getStatus(), CATEGORY_TIPO_CUENTA_STATUS);
        TypeEntity conceptType = resolveConceptType(account.getConceptCode());

        log.info("Resolved mappings for account [{}]: typeId [{}], countryId [{}], currencyId [{}], statusId [{}], conceptTypeId [{}]",
                maskAccount(account.getAccountNumber()),
                typeId,
                countryId,
                currencyId,
                statusId,
                conceptType.getId());

        String lastModifyUser = ObjectUtils.isEmpty(account.getUpdateUser())
                ? propertiesConfig.getApiName()
                : account.getUpdateUser();

        LocalDateTime lastModifyDate = account.getUpdateDate() != null
                ? account.getUpdateDate()
                : LocalDateTime.now();

        String lastModifyIp = account.getUpdateUserIp();

        return ParticipantBankAccountEntity.builder()
                .bankId(bankEntity.getId())
                .participantId(participant.getId())
                .bankAccount(account.getAccountNumber())
                .entityCode(resolveEntityCode(account.getClearingEntityId()))
                .nitClearingEntity(resolveNitClearingEntity(account.getClearingEntityId()))
                .swiftCode(parseSwiftCode(account.getSwiftCode()))
                .branchCode(account.getBranchCode())
                .portfolio(account.getPortfolioCode())
                .typeId(typeId)
                .originTypeId(typeId)
                .countryId(countryId)
                .currencyId(currencyId)
                .statusId(statusId)
                .conceptType(conceptType)
                .concept(resolveConceptDescription(conceptType))
                .principal(Boolean.FALSE)
                .lastModifyUser(lastModifyUser)
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyDate(lastModifyDate)
                .lastModifyIp(lastModifyIp)
                .build();
    }

    private ParticipantBankAccountEntity findPersistedEntity(ParticipantBankAccountEntity entity) {
        return participantBankAccountRepository
                .findCurrentBankAccount(
                        entity.getParticipantId(),
                        entity.getBankId(),
                        entity.getBankAccount(),
                        entity.getCountryId(),
                        entity.getTypeId()
                )
                .orElse(null);
    }

    private Long resolveTypeId(String externalCode, String category) {
        if (ObjectUtils.isEmpty(externalCode)) {
            log.info("Type mapping not resolved because externalCode is empty. category [{}]", category);
            return null;
        }

        TypeMappingEntity mapping = batchCacheService.findTypeMappingByExternalCodeAndCategory(externalCode, category);

        if (mapping == null) {
            log.warn("Type mapping not found. externalCode [{}], category [{}]", externalCode, category);
            return null;
        }

        log.info("Type mapping resolved. externalCode [{}], category [{}], typeId [{}]",
                externalCode, category, mapping.getTypeId());

        return mapping.getTypeId();
    }

    private Long resolveCountryId(String countryCode) {
        if (ObjectUtils.isEmpty(countryCode)) {
            log.info("Country not resolved because countryCode is empty");
            return null;
        }

        CountryEntity country = batchCacheService.findCountryEntityByCode(countryCode);

        if (country == null) {
            log.warn("Country not found. countryCode [{}]", countryCode);
            return null;
        }

        log.info("Country resolved. countryCode [{}], countryId [{}]", countryCode, country.getId());

        return country.getId();
    }

    private Long resolveCurrencyId(String currencyCode) {
        if (ObjectUtils.isEmpty(currencyCode)) {
            log.info("Currency not resolved because currencyCode is empty");
            return null;
        }

        CurrencyEntity currency = batchCacheService.findCurrencyEntityByCode(currencyCode);

        if (currency == null) {
            log.warn("Currency not found. currencyCode [{}]", currencyCode);
            return null;
        }

        log.info("Currency resolved. currencyCode [{}], currencyId [{}]", currencyCode, currency.getId());

        return currency.getId();
    }

    private Long resolveStatusId(String externalCode, String category) {
        if (ObjectUtils.isEmpty(externalCode)) {
            log.info("Status mapping not resolved because externalCode is empty. category [{}]", category);
            return null;
        }

        StatusMappingEntity mapping = batchCacheService.findStatusMappingByExternalCodeAndCategory(externalCode, category);

        if (mapping == null) {
            log.warn("Status mapping not found. externalCode [{}], category [{}]", externalCode, category);
            return null;
        }

        log.info("Status mapping resolved. externalCode [{}], category [{}], statusId [{}]",
                externalCode, category, mapping.getStatusId());

        return mapping.getStatusId();
    }
    private String resolveEntityCode(String clearingEntityId) {
        if (ObjectUtils.isEmpty(clearingEntityId)) {
            return null;
        }

        return clearingEntityId.length() > 6
                ? clearingEntityId.substring(0, 6)
                : clearingEntityId;
    }

    private String resolveNitClearingEntity(String clearingEntityId) {
        if (ObjectUtils.isEmpty(clearingEntityId)) {
            return null;
        }

        return clearingEntityId.length() > 10
                ? clearingEntityId.substring(0, 10)
                : clearingEntityId;
    }
    private TypeEntity resolveConceptType(String conceptCode) {
        if (ObjectUtils.isEmpty(conceptCode)) {
            throw new ServiceException(
                    ErrorCode.CONCEPT_TYPE_MAPPING_NOT_FOUND,
                    "conceptCode is null or empty. category [" + CATEGORY_CONCEPTO_CUENTAS_BANCARIAS + "]"
            );
        }

        TypeMappingEntity mapping = batchCacheService.findTypeMappingByExternalCodeAndCategory(
                conceptCode,
                CATEGORY_CONCEPTO_CUENTAS_BANCARIAS
        );

        if (mapping == null) {
            throw new ServiceException(
                    ErrorCode.CONCEPT_TYPE_MAPPING_NOT_FOUND,
                    "conceptCode [" + conceptCode + "], category [" + CATEGORY_CONCEPTO_CUENTAS_BANCARIAS + "]"
            );
        }

        TypeEntity typeEntity = batchCacheService.findTypeEntityById(mapping.getTypeId());

        log.info("Concept type resolved. conceptCode [{}], conceptTypeId [{}], description [{}]",
                conceptCode,
                typeEntity.getId(),
                typeEntity.getDescription());

        return typeEntity;
    }

    private Integer parseSwiftCode(String swiftCode) {
        if (ObjectUtils.isEmpty(swiftCode)) return null;
        try {
            return Integer.valueOf(swiftCode);
        } catch (NumberFormatException e) {
            log.warn("Cannot parse swiftCode '{}' as Integer, ignoring", swiftCode);
            return null;
        }
    }
    private String maskAccount(String accountNumber) {
        if (ObjectUtils.isEmpty(accountNumber)) {
            return null;
        }

        if (accountNumber.length() <= 4) {
            return "****";
        }

        return "****" + accountNumber.substring(accountNumber.length() - 4);
    }

    private String resolveConceptDescription(TypeEntity conceptType) {
        if (conceptType == null) {
            return null;
        }

        return conceptType.getDescription();
    }
}


```

## src/main/java/com/nubo/participants/accounts/synchronization/service/impl/ParticipantServiceNuboImpl.java

```java
package com.nubo.participants.accounts.synchronization.service.impl;

import com.nubo.participants.accounts.synchronization.application.properties.PropertiesConfig;
import com.nubo.participants.accounts.synchronization.models.domain.ParticipantResult;
import com.nubo.participants.accounts.synchronization.models.dto.request.DataReferenceParticipantInDto;
import com.nubo.participants.accounts.synchronization.models.entity.CountryEntity;
import com.nubo.participants.accounts.synchronization.models.entity.DepartmentEntity;
import com.nubo.participants.accounts.synchronization.models.entity.IdentificationTypeEntity;
import com.nubo.participants.accounts.synchronization.models.entity.ParticipantEntity;
import com.nubo.participants.accounts.synchronization.models.entity.StatusEntity;
import com.nubo.participants.accounts.synchronization.models.entity.TaxStatusEntity;
import com.nubo.participants.accounts.synchronization.models.entity.TypeEntity;
import com.nubo.participants.accounts.synchronization.models.enums.TypeEnum;
import com.nubo.participants.accounts.synchronization.repository.ParticipantRepository;
import com.nubo.participants.accounts.synchronization.service.BatchCacheService;
import com.nubo.participants.accounts.synchronization.service.ParticipantNuboService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class ParticipantServiceNuboImpl implements ParticipantNuboService {

    private final ParticipantRepository participantRepository;
    private final PropertiesConfig propertiesConfig;
    private final BatchCacheService batchCacheService;

    @Override
    public ParticipantResult createUpdateParticipant(DataReferenceParticipantInDto dataReferenceParticipantInDto) {
        log.debug("Start method createUpdateParticipant");

        String participantCode = dataReferenceParticipantInDto.getCode();
        String typeDescription = getParticipantTypeDescription(dataReferenceParticipantInDto);
        String taxQualityDescription = getTaxQualityDescription(dataReferenceParticipantInDto);

        TypeEntity typeEntity = this.batchCacheService.findTypeEntityDescription(typeDescription);
        Boolean isCustodian = TypeEnum.CUSTODIAN.getDescription().equals(typeDescription);
        CountryEntity countryEntity = this.batchCacheService.findCountryEntityByCode(dataReferenceParticipantInDto.getCountryNuam());
        StatusEntity statusEntity = this.batchCacheService.findStatusEntityByDescription(dataReferenceParticipantInDto.getStatus());
        TaxStatusEntity taxStatusEntity = this.batchCacheService.findTaxStatusEntityByDescription(taxQualityDescription);
        DepartmentEntity departmentEntity = this.batchCacheService.findDepartmentEntityById(dataReferenceParticipantInDto.getDepartment());
        IdentificationTypeEntity identificationTypeEntity = this.batchCacheService.findIdentificationTypeByCodeAndCountry(countryEntity.getCode());

        ParticipantEntity participantEntityLast = this.findParticipantEntityOrEmpty(participantCode);
        ParticipantEntity participantEntity = participantEntityLast.toBuilder()
                .code(participantCode)
                .documentNumber(dataReferenceParticipantInDto.getTaxCode())
                .identificationType(identificationTypeEntity)
                .name(dataReferenceParticipantInDto.getName())
                .shortName(dataReferenceParticipantInDto.getShortName())
                .type(typeEntity)
                .mnemonic(dataReferenceParticipantInDto.getMnemonic())
                .country(countryEntity)
                .registrationDate(dataReferenceParticipantInDto.getRegistrationDate())
                .taxCode(dataReferenceParticipantInDto.getTaxCode())
                .department(departmentEntity)
                .mainAddress(dataReferenceParticipantInDto.getMainAddress())
                .webPage(dataReferenceParticipantInDto.getWebsite())
                .phoneNumber(dataReferenceParticipantInDto.getPhone())
                .statusId(statusEntity.getId())
                .nitClearingHouse(null)
                .taxStatus(taxStatusEntity)
                .typeEntity(dataReferenceParticipantInDto.getEntityType())
                .marginAccount(null)
                .masterAccount("N")
                .directAllocation("N")
                .marketMaker(Boolean.TRUE.equals(dataReferenceParticipantInDto.getMarketMaker()) ? "S" : "N")
                .enabled(null)
                .custodian(isCustodian)
                .equity(ObjectUtils.isEmpty(dataReferenceParticipantInDto.getEquity()) ? null : new BigDecimal(dataReferenceParticipantInDto.getEquity()))
                .currency(ObjectUtils.isEmpty(dataReferenceParticipantInDto.getCurrency()) ? null :
                        this.batchCacheService.findCurrencyEntityByCode(dataReferenceParticipantInDto.getCurrency().getCode()))
                .lastModifyUser(propertiesConfig.getApiName())
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyDate(LocalDateTime.now())
                .lastModifyIp(propertiesConfig.getApiName())
                .build();

        participantRepository.save(participantEntity);

        log.debug("End method createUpdateParticipant, update Participant");
        return new ParticipantResult(participantEntity.getId(), null);

    }

        private String getParticipantTypeDescription(DataReferenceParticipantInDto dataReferenceParticipantInDto) {
                if (ObjectUtils.isEmpty(dataReferenceParticipantInDto.getParticipantTypes())
                                || dataReferenceParticipantInDto.getParticipantTypes().get(0) == null
                                || ObjectUtils.isEmpty(dataReferenceParticipantInDto.getParticipantTypes().get(0).getDescription())) {
                        return null;
                }
                return dataReferenceParticipantInDto.getParticipantTypes().get(0).getDescription().toUpperCase();
        }

        private String getTaxQualityDescription(DataReferenceParticipantInDto dataReferenceParticipantInDto) {
                if (ObjectUtils.isEmpty(dataReferenceParticipantInDto.getTaxQualities())
                                || dataReferenceParticipantInDto.getTaxQualities().get(0) == null
                                || ObjectUtils.isEmpty(dataReferenceParticipantInDto.getTaxQualities().get(0).getDescription())) {
                        return null;
                }
                return dataReferenceParticipantInDto.getTaxQualities().get(0).getDescription();
        }

    private ParticipantEntity findParticipantEntityOrEmpty(String participantCode) {
        Optional<ParticipantEntity> participantEntityOptional = participantRepository.findFirstByCode(participantCode);
        return participantEntityOptional.orElseGet(ParticipantEntity::new);
    }


}

```

## src/main/java/com/nubo/participants/accounts/synchronization/service/impl/SynchronizationServiceImpl.java

```java
package com.nubo.participants.accounts.synchronization.service.impl;

import com.nubo.participants.accounts.synchronization.kafka.producer.KafkaNuboAdapter;
import com.nubo.participants.accounts.synchronization.models.domain.ParticipantResult;
import com.nubo.participants.accounts.synchronization.models.dto.request.DataReferenceParticipantInDto;
import com.nubo.participants.accounts.synchronization.models.dto.response.MessageEventKafka;
import com.nubo.participants.accounts.synchronization.service.ParticipantNuboService;
import com.nubo.participants.accounts.synchronization.service.SynchronizationService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
@Slf4j
public class SynchronizationServiceImpl implements SynchronizationService {

    private final ParticipantNuboService participantNuboService;
    private final KafkaNuboAdapter kafkaNuboAdapter;

    @Override
    public void synchronizeDataReferenceAndParticipants(DataReferenceParticipantInDto dataReferenceParticipantInDto) {
        log.info("Start method synchronizeDataReferenceAndParticipants");

        ParticipantResult participantResult = participantNuboService.createUpdateParticipant(dataReferenceParticipantInDto);
        this.sendMessageEventKafka(participantResult);

        log.info("End method synchronizeDataReferenceAndParticipants");
    }

    private void sendMessageEventKafka(ParticipantResult participantResult) {
        MessageEventKafka messageEvent = MessageEventKafka.builder()
                .dateTime(LocalDateTime.now())
                .table("PARTICIPANTS")
                .id(participantResult.id().toString())
                .status(participantResult.action())
                .build();

        kafkaNuboAdapter.sendMessage(messageEvent);
    }

}
```

## src/main/resources/application-dev.yml

```yaml
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
      topic-name: ${KAFKA_NUBO_TOPIC_NAME_REFERENCE_DATA_NOTIFICATION}
    consumer:
      topic-name: ${KAFKA_NUBO_TOPIC_NAME_REFERENCE_DATA_PARTICIPANT_BANK_ACCOUNT}
      group-id: ${KAFKA_NUBO_GROUP_ID}
logging:
  config: classpath:log/log4j2.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR
```

## src/main/resources/application-local.yml

```yaml
spring:
  kafka:
    listener:
      auto-startup: ${KAFKA_LISTENER_AUTO_STARTUP:false}
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
kafka:
  nubo:
    retries: ${KAFKA_NUBO_RETRIES:5}
    bootstrap-servers: ${KAFKA_NUBO_BOOTSTRAP_SERVER:localhost:9092}
    auto-offset-reset: ${KAFKA_NUBO_AUTO_OFFSET_RESET:latest}
    security:
      protocol: ${KAFKA_PROPERTIES_SECURITY_PROTOCOL:PLAINTEXT}
    sasl:
      mechanism: ${KAFKA_PROPERTIES_SASL_MECHANISM:PLAIN}
      jaas:
        config: ${KAFKA_PROPERTIES_SASL_JAAS_CONFIG:}
    producer:
      topic-name: ${KAFKA_NUBO_TOPIC_NAME_REFERENCE_DATA_NOTIFICATION:local-disabled-topic}
    consumer:
      auto-startup: ${KAFKA_LISTENER_AUTO_STARTUP:false}
      topic-name: ${KAFKA_NUBO_TOPIC_NAME_REFERENCE_DATA_PARTICIPANT_BANK_ACCOUNT:local-disabled-topic}
      group-id: ${KAFKA_NUBO_GROUP_ID:local-disabled-group}
logging:
  config: classpath:log/log4j2.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR

```

## src/main/resources/application-prod.yml

```yaml
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
      topic-name: ${KAFKA_NUBO_TOPIC_NAME_REFERENCE_DATA_NOTIFICATION}
    consumer:
      topic-name: ${KAFKA_NUBO_TOPIC_NAME_REFERENCE_DATA_PARTICIPANT_BANK_ACCOUNT}
      group-id: ${KAFKA_NUBO_GROUP_ID}
logging:
  config: classpath:log/log4j2-prod.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR
```

## src/main/resources/application-qa.yml

```yaml
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
      topic-name: ${KAFKA_NUBO_TOPIC_NAME_REFERENCE_DATA_NOTIFICATION}
    consumer:
      topic-name: ${KAFKA_NUBO_TOPIC_NAME_REFERENCE_DATA_PARTICIPANT_BANK_ACCOUNT}
      group-id: ${KAFKA_NUBO_GROUP_ID}
logging:
  config: classpath:log/log4j2.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR
```

## src/main/resources/application-uat.yml

```yaml
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
      topic-name: ${KAFKA_NUBO_TOPIC_NAME_REFERENCE_DATA_NOTIFICATION}
    consumer:
      topic-name: ${KAFKA_NUBO_TOPIC_NAME_REFERENCE_DATA_PARTICIPANT_ACCOUNT}
      group-id: ${KAFKA_NUBO_GROUP_ID}
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
```

## src/main/resources/banner.txt

```
,------.  ,---.  ,------.,--------.,--. ,-----.,--.,------.  ,---.  ,--.  ,--.,--------.,---.,--.   ,--.,--.  ,--. ,-----.,--.  ,--.,------.  ,-----. ,--.  ,--.,--.,-------.  ,---. ,--------.,--. ,-----. ,--.  ,--.
|  .--. '/  O  \ |  .--. '--.  .--'|  |'  .--./|  ||  .--. '/  O  \ |  ,'.|  |'--.  .--'   .-'\  `.'  / |  ,'.|  |'  .--./|  '--'  ||  .--. ''  .-.  '|  ,'.|  ||  |`--.   /  /  O  \'--.  .--'|  |'  .-.  '|  ,'.|  |
|  '--' |  .-.  ||  '--'.'  |  |   |  ||  |    |  ||  '--' |  .-.  ||  |' '  |   |  |  `.  `-. '.    /  |  |' '  ||  |    |  .--.  ||  '--'.'|  | |  ||  |' '  ||  |  /   /  |  .-.  |  |  |   |  ||  | |  ||  |' '  |
|  | --'|  | |  ||  |\  \   |  |   |  |'  '--'\|  ||  | --'|  | |  ||  | `   |   |  |  .-'    |  |  |   |  | `   |'  '--'\|  |  |  ||  |\  \ '  '-'  '|  | `   ||  | /   `--.|  | |  |  |  |   |  |'  '-'  '|  | `   |
`--'    `--' `--'`--' '--'  `--'   `--' `-----'`--'`--'    `--' `--'`--'  `--'   `--'  `-----'   `--'   `--'  `--' `-----'`--'  `--'`--' '--' `-----' `--'  `--'`--'`-------'`--' `--'  `--'   `--' `-----' `--'  `--'

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

## src/main/resources/participant-referenceData.json

```json
{
  "id": 18,
  "code": "PE0702",
  "name": "Credicorp Capital Sociedad Agente de Bolsa SA",
  "shortName": "Credicorp SAB Peru",
  "participantTypes": [
    {
      "parameterId": 70006,
      "masterId": 7,
      "code": "6",
      "description": "Emisor",
      "key": "PARTICIPANT_TYPE"
    },
    {
      "parameterId": 70011,
      "masterId": 7,
      "code": "11",
      "description": "Fiduciaria",
      "key": "PARTICIPANT_TYPE"
    }
  ],
  "registeredParticipantIns": [
    {
      "parameterId": 230007,
      "masterId": 23,
      "code": "7",
      "description": "DCV CL",
      "key": "REGISTERED_PARTICIPANT_IN"
    },
    {
      "parameterId": 230002,
      "masterId": 23,
      "code": "2",
      "description": "BVC",
      "key": "REGISTERED_PARTICIPANT_IN"
    }
  ],
  "mnemonic": "mnem",
  "country": "PE",
  "city": null,
  "registrationDate": "1992-01-01",
  "taxCode": "20501052510",
  "department": "PE-LIM",
  "mainAddress": "Calle A 234",
  "website": "www.credicorpcapitalbolsa.com.pe",
  "phone": "+5115652010",
  "taxQualities": [
    {
      "parameterId": 250001,
      "masterId": 25,
      "code": "1",
      "description": "Exento",
      "key": "TAX_QUALITY"
    },
    {
      "parameterId": 250003,
      "masterId": 25,
      "code": "3",
      "description": "Contribuyente",
      "key": "TAX_QUALITY"
    }
  ],
  "entityType": "P",
  "marketMaker": true,
  "status": "1",
  "action": "0",
  "equity": null,
  "currency": null,
  "creationDate": "2024-05-01T00:00:00",
  "creationUser": "user1",
  "updateDate": "2024-05-01T00:00:00",
  "updateUser": "user1",
  "updateUserIp": "172.16.51.70"
}



```
