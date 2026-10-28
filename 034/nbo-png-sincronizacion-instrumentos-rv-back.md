# nbo-png-sincronizacion-instrumentos-rv-back

Código fuente de producción y configuraciones. Captura local: 28/10/2026.

Incluye 73 archivos Java y 17 archivos de configuración, recursos y compilación/despliegue.

Cada sección identifica la ruta original y contiene el archivo completo, salvo valores de credenciales ocultados. Los Java conservan sus implementaciones, imports, anotaciones y comentarios. Se excluyen src/test, resultados de compilación, binarios y herramientas/perfiles de pruebas de rendimiento. El nombre del repositorio puede contener test; se incluyen únicamente sus fuentes de producción.

Valores de credenciales ocultados en configuraciones: 0. Referencias a variables de entorno conservadas.

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
12. `src/main/resources/instrument-referenceData.json`
13. `src/main/resources/log/JsonEventLayout_error.json`
14. `src/main/resources/log/JsonEventLayout_info.json`
15. `src/main/resources/log/JsonEventLayout_trace.json`
16. `src/main/resources/log/log4j2-prod.properties`
17. `src/main/resources/log/log4j2.properties`
18. `src/main/java/com/nubo/instruments/synchronization/InstrumentsSynchronizationApiApplication.java`
19. `src/main/java/com/nubo/instruments/synchronization/application/cache/MasterDataCacheRefreshService.java`
20. `src/main/java/com/nubo/instruments/synchronization/application/cache/MasterDataCacheWarmup.java`
21. `src/main/java/com/nubo/instruments/synchronization/application/config/CacheConfig.java`
22. `src/main/java/com/nubo/instruments/synchronization/application/config/KafkaConsumerConfig.java`
23. `src/main/java/com/nubo/instruments/synchronization/application/config/KafkaProducerConfig.java`
24. `src/main/java/com/nubo/instruments/synchronization/application/context/GlobalContext.java`
25. `src/main/java/com/nubo/instruments/synchronization/application/database/NamingStrategyConfig.java`
26. `src/main/java/com/nubo/instruments/synchronization/application/database/UpperNamingConfig.java`
27. `src/main/java/com/nubo/instruments/synchronization/application/properties/PropertiesConfig.java`
28. `src/main/java/com/nubo/instruments/synchronization/application/properties/PropertiesContext.java`
29. `src/main/java/com/nubo/instruments/synchronization/application/util/ApplicationUtils.java`
30. `src/main/java/com/nubo/instruments/synchronization/exception/ServiceException.java`
31. `src/main/java/com/nubo/instruments/synchronization/exception/error/ErrorCode.java`
32. `src/main/java/com/nubo/instruments/synchronization/exception/error/ErrorResponse.java`
33. `src/main/java/com/nubo/instruments/synchronization/exception/error/ErrorValidation.java`
34. `src/main/java/com/nubo/instruments/synchronization/exception/handler/GlobalExceptionHandler.java`
35. `src/main/java/com/nubo/instruments/synchronization/exception/kafka/KafkaErrorBuild.java`
36. `src/main/java/com/nubo/instruments/synchronization/helpers/MapperUtil.java`
37. `src/main/java/com/nubo/instruments/synchronization/kafka/consumer/KafkaNuboListenerAdapter.java`
38. `src/main/java/com/nubo/instruments/synchronization/kafka/producer/KafkaNuboProducerAdapter.java`
39. `src/main/java/com/nubo/instruments/synchronization/models/domain/InstrumentsResult.java`
40. `src/main/java/com/nubo/instruments/synchronization/models/domain/KafkaMessage.java`
41. `src/main/java/com/nubo/instruments/synchronization/models/dto/request/DataReferenceInstrumentsInDto.java`
42. `src/main/java/com/nubo/instruments/synchronization/models/dto/response/ErrorResponseOutDto.java`
43. `src/main/java/com/nubo/instruments/synchronization/models/dto/response/MessageEventKafka.java`
44. `src/main/java/com/nubo/instruments/synchronization/models/entity/ClassEntity.java`
45. `src/main/java/com/nubo/instruments/synchronization/models/entity/CountryEntity.java`
46. `src/main/java/com/nubo/instruments/synchronization/models/entity/CurrencyEntity.java`
47. `src/main/java/com/nubo/instruments/synchronization/models/entity/DepositoryEntity.java`
48. `src/main/java/com/nubo/instruments/synchronization/models/entity/EquitySecurityEntity.java`
49. `src/main/java/com/nubo/instruments/synchronization/models/entity/GicsEntity.java`
50. `src/main/java/com/nubo/instruments/synchronization/models/entity/IsinNumberEntity.java`
51. `src/main/java/com/nubo/instruments/synchronization/models/entity/IssuerEntity.java`
52. `src/main/java/com/nubo/instruments/synchronization/models/entity/MarketEntity.java`
53. `src/main/java/com/nubo/instruments/synchronization/models/entity/SecurityTitleEntity.java`
54. `src/main/java/com/nubo/instruments/synchronization/models/entity/SegmentEntity.java`
55. `src/main/java/com/nubo/instruments/synchronization/models/entity/StatusEntity.java`
56. `src/main/java/com/nubo/instruments/synchronization/models/entity/StatusMappingEntity.java`
57. `src/main/java/com/nubo/instruments/synchronization/models/entity/TypeEntity.java`
58. `src/main/java/com/nubo/instruments/synchronization/models/entity/TypeMappingEntity.java`
59. `src/main/java/com/nubo/instruments/synchronization/models/enums/CountryEnum.java`
60. `src/main/java/com/nubo/instruments/synchronization/models/enums/ErrorEnum.java`
61. `src/main/java/com/nubo/instruments/synchronization/models/enums/PropertiesEnum.java`
62. `src/main/java/com/nubo/instruments/synchronization/models/enums/SegmentDefaultEnum.java`
63. `src/main/java/com/nubo/instruments/synchronization/models/enums/StatusEnum.java`
64. `src/main/java/com/nubo/instruments/synchronization/models/enums/StatusMappingEnum.java`
65. `src/main/java/com/nubo/instruments/synchronization/models/enums/TypeEnum.java`
66. `src/main/java/com/nubo/instruments/synchronization/models/enums/TypeMappingEnum.java`
67. `src/main/java/com/nubo/instruments/synchronization/models/enums/VersionApiEnum.java`
68. `src/main/java/com/nubo/instruments/synchronization/repository/ClassRepository.java`
69. `src/main/java/com/nubo/instruments/synchronization/repository/CountryRepository.java`
70. `src/main/java/com/nubo/instruments/synchronization/repository/CurrencyRepository.java`
71. `src/main/java/com/nubo/instruments/synchronization/repository/DepositoryRepository.java`
72. `src/main/java/com/nubo/instruments/synchronization/repository/EquitySecurityRepository.java`
73. `src/main/java/com/nubo/instruments/synchronization/repository/IsinNumberRepository.java`
74. `src/main/java/com/nubo/instruments/synchronization/repository/IssuerRepository.java`
75. `src/main/java/com/nubo/instruments/synchronization/repository/MarketRepository.java`
76. `src/main/java/com/nubo/instruments/synchronization/repository/SecurityTitleRepository.java`
77. `src/main/java/com/nubo/instruments/synchronization/repository/SegmentRepository.java`
78. `src/main/java/com/nubo/instruments/synchronization/repository/StatusMappingRepository.java`
79. `src/main/java/com/nubo/instruments/synchronization/repository/StatusRepository.java`
80. `src/main/java/com/nubo/instruments/synchronization/repository/TypeMappingRepository.java`
81. `src/main/java/com/nubo/instruments/synchronization/service/BatchCacheService.java`
82. `src/main/java/com/nubo/instruments/synchronization/service/EquitySecurityService.java`
83. `src/main/java/com/nubo/instruments/synchronization/service/IsinNumberService.java`
84. `src/main/java/com/nubo/instruments/synchronization/service/SecurityTitleService.java`
85. `src/main/java/com/nubo/instruments/synchronization/service/SynchronizationService.java`
86. `src/main/java/com/nubo/instruments/synchronization/service/impl/BatchCacheServiceImpl.java`
87. `src/main/java/com/nubo/instruments/synchronization/service/impl/EquitySecurityServiceImpl.java`
88. `src/main/java/com/nubo/instruments/synchronization/service/impl/IsinNumberServiceImpl.java`
89. `src/main/java/com/nubo/instruments/synchronization/service/impl/SecurityTitleServiceImpl.java`
90. `src/main/java/com/nubo/instruments/synchronization/service/impl/SynchronizationServiceImpl.java`

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
		<version>3.5.16</version>
		<relativePath/>
	</parent>
	<groupId>com.nubo.instruments.synchronization.api</groupId>
	<artifactId>instruments-synchronization-api</artifactId>
	<version>0.30.0-beta.13</version>
	<name>${project.artifactId}</name>
	<description>Instruments synchronization Api</description>

	<properties>
		<java.version>17</java.version>
		<spring.port>8080</spring.port>
		<test.skip>false</test.skip>
		<datasource.url.application.name>ApplicationName=${project.artifactId}</datasource.url.application.name>
		<hikari.pool.name>${project.artifactId}-pool</hikari.pool.name>
		<!-- vulnerability adjustment -->
		<log4j2.version>2.25.5</log4j2.version>
		<tomcat.version>10.1.57</tomcat.version>
		<jackson-bom.version>2.22.1</jackson-bom.version>
		<postgresql.version>42.7.12</postgresql.version>
		<!-- Lombok annotation processor -->
		<lombok.version>1.18.46</lombok.version>
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
		<dependency>
			<groupId>org.springframework.security</groupId>
			<artifactId>spring-security-core</artifactId>
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
			<groupId>org.projectlombok</groupId>
			<artifactId>lombok</artifactId>
			<version>${lombok.version}</version>
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
		<!-- Cache  -->
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
		<!-- vulnerability adjustment  -->
		<dependency>
			<groupId>commons-io</groupId>
			<artifactId>commons-io</artifactId>
			<version>2.18.0</version>
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
					<release>${java.version}</release>
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
								<exclude>**/InstrumentsSynchronizationApiApplication.class</exclude>
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
    open-in-view: false
    hibernate:
      ddl-auto: none
      default_schema: NUANBODB
    show-sql: 'false'
    database-platform: org.hibernate.dialect.PostgreSQLDialect
    properties:
      hibernate.jdbc.batch_size: 1000
      hibernate.order_inserts: true
      hibernate.order_updates: true
      hibernate.generate_statistics: false
kafka:
  nubo:
    retries: ${KAFKA_NUBO_RETRIES:2}
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
      topic-name-error-response: ${KAFKA_NUBO_TOPIC_NAME_ERROR_REFERENCE_DATA_INSTRUMENT}
    consumer:
      topic-name: ${KAFKA_NUBO_TOPIC_NAME_REFERENCE_DATA_INSTRUMENT}
      group-id: ${KAFKA_NUBO_GROUP_ID}
logging:
  config: classpath:log/log4j2.properties
  level:
    org.hibernate.SQL: WARN
    org.hibernate.type.descriptor.sql.BasicBinder: WARN
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR
    com.nubo.instruments.synchronization: INFO
```

## src/main/resources/application-local.yml

```yaml
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
    open-in-view: false
    hibernate:
      ddl-auto: none
      default_schema: NUANBODB
    show-sql: 'false'
    database-platform: org.hibernate.dialect.PostgreSQLDialect
    properties:
      hibernate.jdbc.batch_size: 1000
      hibernate.order_inserts: true
      hibernate.order_updates: true
      hibernate.generate_statistics: false
kafka:
  nubo:
    retries: ${KAFKA_NUBO_RETRIES:1}
    bootstrap-servers: ${KAFKA_NUBO_BOOTSTRAP_SERVER}
    auto-offset-reset: ${KAFKA_NUBO_AUTO_OFFSET_RESET:latest}
    security:
      protocol: PLAINTEXT
    sasl:
      mechanism: ""
      jaas:
        config: ""
    producer:
      topic-name: ${KAFKA_NUBO_TOPIC_NAME_REFERENCE_DATA_NOTIFICATION}
      topic-name-error-response: ${KAFKA_NUBO_TOPIC_NAME_ERROR_REFERENCE_DATA_INSTRUMENT}
    consumer:
      topic-name: ${KAFKA_NUBO_TOPIC_NAME_REFERENCE_DATA_INSTRUMENT}
      group-id: ${KAFKA_NUBO_GROUP_ID}
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
    open-in-view: false
    hibernate:
      ddl-auto: none
      default_schema: NUANBODB
    show-sql: 'false'
    database-platform: org.hibernate.dialect.PostgreSQLDialect
    properties:
      hibernate.jdbc.batch_size: 1000
      hibernate.order_inserts: true
      hibernate.order_updates: true
      hibernate.generate_statistics: false
kafka:
  nubo:
    retries: ${KAFKA_NUBO_RETRIES:2}
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
      topic-name-error-response: ${KAFKA_NUBO_TOPIC_NAME_ERROR_REFERENCE_DATA_INSTRUMENT}
    consumer:
      topic-name: ${KAFKA_NUBO_TOPIC_NAME_REFERENCE_DATA_INSTRUMENT}
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
    open-in-view: false
    hibernate:
      ddl-auto: none
      default_schema: NUANBODB
    show-sql: 'false'
    database-platform: org.hibernate.dialect.PostgreSQLDialect
    properties:
      hibernate.jdbc.batch_size: 1000
      hibernate.order_inserts: true
      hibernate.order_updates: true
      hibernate.generate_statistics: false
kafka:
  nubo:
    retries: ${KAFKA_NUBO_RETRIES:2}
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
      topic-name-error-response: ${KAFKA_NUBO_TOPIC_NAME_ERROR_REFERENCE_DATA_INSTRUMENT}
    consumer:
      topic-name: ${KAFKA_NUBO_TOPIC_NAME_REFERENCE_DATA_INSTRUMENT}
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
    open-in-view: false
    hibernate:
      ddl-auto: none
      default_schema: NUANBODB
    show-sql: 'false'
    database-platform: org.hibernate.dialect.PostgreSQLDialect
    properties:
      hibernate.jdbc.batch_size: 1000
      hibernate.order_inserts: true
      hibernate.order_updates: true
      hibernate.generate_statistics: false
kafka:
  nubo:
    retries: ${KAFKA_NUBO_RETRIES:2}
    bootstrap-servers: ${KAFKA_NUBO_BOOTSTRAP_SERVER}
    auto-offset-reset: ${KAFKA_NUBO_AUTO_OFFSET_RESET:latest}
    ssecurity:
      protocol: ${KAFKA_PROPERTIES_SECURITY_PROTOCOL}
      sasl:
        mechanism: ${KAFKA_PROPERTIES_SASL_MECHANISM}
        jaas:
          config: ${KAFKA_PROPERTIES_SASL_JAAS_CONFIG}
    producer:
      topic-name: ${KAFKA_NUBO_TOPIC_NAME_REFERENCE_DATA_NOTIFICATION}
      topic-name-error-response: ${KAFKA_NUBO_TOPIC_NAME_ERROR_REFERENCE_DATA_INSTRUMENT}
    consumer:
      topic-name: ${KAFKA_NUBO_TOPIC_NAME_REFERENCE_DATA_INSTRUMENT}
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
  sync:
    persistence-batch-size: ${APPLICATION_SYNC_PERSISTENCE_BATCH_SIZE:1000}
kafka:
  nubo:
    consumer:
      max-poll-records: ${KAFKA_NUBO_CONSUMER_MAX_POLL_RECORDS:1000}
      concurrency: ${KAFKA_NUBO_CONSUMER_CONCURRENCY:4}
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
,--.,--.  ,--. ,---.,--------.,------. ,--. ,--.,--.   ,--.,------.,--.  ,--.,--------.,---.,--.   ,--.,--.  ,--. ,-----.,--.  ,--.,------.  ,-----. ,--.  ,--.,--.,-------.  ,---. ,--------.,--. ,-----. ,--.  ,--.
|  ||  ,'.|  |'   .-'--.  .--'|  .--. '|  | |  ||   `.'   ||  .---'|  ,'.|  |'--.  .--'   .-'\  `.'  / |  ,'.|  |'  .--./|  '--'  ||  .--. ''  .-.  '|  ,'.|  ||  |`--.   /  /  O  \'--.  .--'|  |'  .-.  '|  ,'.|  |
|  ||  |' '  |`.  `-.  |  |   |  '--'.'|  | |  ||  |'.'|  ||  `--, |  |' '  |   |  |  `.  `-. '.    /  |  |' '  ||  |    |  .--.  ||  '--'.'|  | |  ||  |' '  ||  |  /   /  |  .-.  |  |  |   |  ||  | |  ||  |' '  |
|  ||  | `   |.-'    | |  |   |  |\  \ '  '-'  '|  |   |  ||  `---.|  | `   |   |  |  .-'    |  |  |   |  | `   |'  '--'\|  |  |  ||  |\  \ '  '-'  '|  | `   ||  | /   `--.|  | |  |  |  |   |  |'  '-'  '|  | `   |
`--'`--'  `--'`-----'  `--'   `--' '--' `-----' `--'   `--'`------'`--'  `--'   `--'  `-----'   `--'   `--'  `--' `-----'`--'  `--'`--' '--' `-----' `--'  `--'`--'`-------'`--' `--'  `--'   `--' `-----' `--'  `--'

${application.title} ${application.version}
Powered by Spring Boot ${spring-boot.version}
```

## src/main/resources/instrument-referenceData.json

```json
{
  "id": 13749,
  "isin": "1928710fsdjh",
  "currency": "COP",
  "status": "5",
  "issuerId": 328,
  "issuerName": "ISHARES EDGE MSCI USA VALUE FACTOR ETF",
  "issuerCode": "AP095",
  "issuerSector": null,
  "issuerSubSector": null,
  "action": "3",
  "creationDate": "2025-03-01T00:00:00",
  "creationUser": null,
  "updateDate": "2025-07-03T18:48:13.795034",
  "updateUser": null,
  "updateUserIp": null,
  "instrument": "PRB03",
  "mnemonic": "PRUEBA03",
  "description": "Descripción de la prueba 3",
  "listingDate": "2022-02-22",
  "retirementDate": null,
  "instrumentBase": false,
  "instrumentAsset": true,
  "isOrderBook": true,
  "listingCountry": "CO",
  "issuedAmount": 123897,
  "outstandingShares": 102938,
  "nominalPrice": 1209837.00000000,
  "nominalPriceDate": "3123-09-21",
  "classification": "4",
  "category": "1",
  "depositary": null,
  "tradesOnLoan": true,
  "tradesOnRepo": true,
  "issuerDescription": null,
  "marketType": "3",
  "regulatorCode": null,
  "cfiCode": null,
  "repoPenalty": 15,
  "settlementType": null,
  "assetType": "assetOption",
  "assetSubclass": 58,
  "idMmeAsset": null,
  "assetSubClassName": "OPC TRM Call",
  "idMmeOrderBook": null,
  "idMmeParticipant": 1047,
  "statusOB": "0",
  "bookValue": 120938.00000000,
  "bookValueDate": "2022-02-22",
  "loanPenalty": 13,
  "marketSegment": 49,
  "mainOrderBook": false,
  "repoTypeOB": null,
  "outstandingSharesDate": null,
  "hasADR": null,
  "settlementDays": 1,
  "negotiableAsset": true,
  "high52WeekPrice": null,
  "high52WeekDate": null,
  "low52WeekPrice": null,
  "low52WeekDate": null,
  "segmentId": 49,
  "segmentName": "OP TRM CO",
  "marketName": "DV Colombia Dolar",
  "marketId": "8",
  "priceType": "M",
  "assetClassId": "2",
  "segmentMmeId": "58"
}

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

## src/main/java/com/nubo/instruments/synchronization/InstrumentsSynchronizationApiApplication.java

```java
package com.nubo.instruments.synchronization;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class InstrumentsSynchronizationApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(InstrumentsSynchronizationApiApplication.class, args);
	}

}

```

## src/main/java/com/nubo/instruments/synchronization/application/cache/MasterDataCacheRefreshService.java

```java
package com.nubo.instruments.synchronization.application.cache;

import com.nubo.instruments.synchronization.service.BatchCacheService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class MasterDataCacheRefreshService {

    private final BatchCacheService batchCacheService;

    /**
     * Refresca manualmente todas las caches de tablas maestras.
     */
    public void refreshAllMasterCaches() {
        log.info("[CACHE] Refrescando todas las caches de tablas maestras...");
        batchCacheService.clearMasterDataCaches();
        try {
            batchCacheService.warmUpMasterDataCaches();
            log.info("[CACHE] Refresco de tablas maestras completado");
        } catch (Exception e) {
            log.error("[CACHE] Error durante el refresco de tablas maestras", e);
        }
    }
}

```

## src/main/java/com/nubo/instruments/synchronization/application/cache/MasterDataCacheWarmup.java

```java
package com.nubo.instruments.synchronization.application.cache;

import com.nubo.instruments.synchronization.service.BatchCacheService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Slf4j
@Component
@RequiredArgsConstructor
public class MasterDataCacheWarmup implements ApplicationRunner {

    private final BatchCacheService batchCacheService;

    @Override
    public void run(ApplicationArguments args) {
        log.info("[CACHE] Precargando tablas maestras en memoria...");
        try {
            batchCacheService.warmUpMasterDataCaches();
            log.info("[CACHE] Precarga de tablas maestras completada");
        } catch (Exception e) {
            log.error("[CACHE] Error durante la precarga de tablas maestras", e);
        }
    }
}

```

## src/main/java/com/nubo/instruments/synchronization/application/config/CacheConfig.java

```java
package com.nubo.instruments.synchronization.application.config;

import com.github.benmanes.caffeine.cache.Caffeine;
import org.springframework.cache.Cache;
import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.cache.caffeine.CaffeineCache;
import org.springframework.cache.support.SimpleCacheManager;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Arrays;
import java.util.concurrent.TimeUnit;

@Configuration
@EnableCaching
public class CacheConfig {

    @Bean
    @SuppressWarnings("null")
    public CacheManager cacheManager() {
        SimpleCacheManager cacheManager = new SimpleCacheManager();

        cacheManager.setCaches(Arrays.asList(
                buildCache("cfis", 1, TimeUnit.HOURS),
                buildCache("depositories", 1, TimeUnit.HOURS),
                buildCache("currencies", 30, TimeUnit.MINUTES),
                buildCache("countries", 30, TimeUnit.MINUTES),
                buildCache("clazz", 10, TimeUnit.MINUTES),
                buildCache("segments", 10, TimeUnit.MINUTES),
                buildCache("issuers", 10, TimeUnit.MINUTES),
                buildCache("markets", 10, TimeUnit.MINUTES),

                buildCache("statusMapping", 10, TimeUnit.MINUTES),
                buildCache("typeMapping", 10, TimeUnit.MINUTES)));

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

## src/main/java/com/nubo/instruments/synchronization/application/config/KafkaConsumerConfig.java

```java
package com.nubo.instruments.synchronization.application.config;

import com.nubo.instruments.synchronization.application.properties.PropertiesConfig;
import com.nubo.instruments.synchronization.application.util.ApplicationUtils;
import com.nubo.instruments.synchronization.exception.ServiceException;
import com.nubo.instruments.synchronization.exception.error.ErrorCode;
import com.nubo.instruments.synchronization.exception.kafka.KafkaErrorBuild;
import com.nubo.instruments.synchronization.models.dto.request.DataReferenceInstrumentsInDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.kafka.clients.consumer.ConsumerConfig;
import org.apache.kafka.clients.consumer.ConsumerRecord;
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
import org.springframework.kafka.support.KafkaHeaders;
import org.springframework.kafka.support.serializer.DeserializationException;
import org.springframework.kafka.support.serializer.ErrorHandlingDeserializer;
import org.springframework.kafka.support.serializer.JsonDeserializer;
import org.springframework.util.backoff.FixedBackOff;

import java.nio.ByteBuffer;
import java.util.HashMap;
import java.util.Map;

@Slf4j
@EnableKafka
@Configuration
@RequiredArgsConstructor
public class KafkaConsumerConfig {

    private final Environment environment;
    private final PropertiesConfig propertiesConfig;

    @Bean
    public ConsumerFactory<String, DataReferenceInstrumentsInDto> consumerFactoryKafkaNubo() {
        Map<String, Object> configProps = new HashMap<>();
        configProps.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, propertiesConfig.getKafkaNuboBootstrapServers());
        configProps.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);
        configProps.put(ConsumerConfig.GROUP_ID_CONFIG, propertiesConfig.getKafkaNuboConsumerGroupId());
        configProps.put(ConsumerConfig.AUTO_OFFSET_RESET_CONFIG, propertiesConfig.getKafkaNuboAutoOffsetReset());
        configProps.put(ConsumerConfig.MAX_POLL_RECORDS_CONFIG, propertiesConfig.getKafkaNuboConsumerMaxPollRecords());
        configProps.put("security.protocol", propertiesConfig.getKafkaNuboSecurityProtocol());

        configProps.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, ErrorHandlingDeserializer.class);
        configProps.put(ErrorHandlingDeserializer.VALUE_DESERIALIZER_CLASS, JsonDeserializer.class);
        configProps.put(JsonDeserializer.VALUE_DEFAULT_TYPE, DataReferenceInstrumentsInDto.class);
        configProps.put(JsonDeserializer.TRUSTED_PACKAGES, "com.nubo.instruments.synchronization");

        if (!isLocalProfile()) {
            configProps.put("sasl.mechanism", propertiesConfig.getKafkaNuboSaslMechanism());
            configProps.put("sasl.jaas.config", propertiesConfig.getKafkaNuboSaslJaasConfig());
        }

        return new DefaultKafkaConsumerFactory<>(
                configProps,
                new StringDeserializer(),
                new ErrorHandlingDeserializer<>(new JsonDeserializer<>(DataReferenceInstrumentsInDto.class))
        );
    }

    @Bean
    public ConcurrentKafkaListenerContainerFactory<String, DataReferenceInstrumentsInDto> kafkaNuboListenerContainerFactory(
            DefaultErrorHandler errorHandler) {
        ConcurrentKafkaListenerContainerFactory<String, DataReferenceInstrumentsInDto> factory = new ConcurrentKafkaListenerContainerFactory<>();
        factory.setConsumerFactory(consumerFactoryKafkaNubo());
        factory.setBatchListener(true);
        factory.setConcurrency(propertiesConfig.getKafkaNuboConsumerConcurrency());
        factory.setCommonErrorHandler(errorHandler);
        factory.getContainerProperties().setDeliveryAttemptHeader(true);
        return factory;
    }

    @Bean(name = "kafkaErrorHandler")
    public DefaultErrorHandler kafkaErrorHandler(KafkaErrorBuild kafkaErrorBuilder) {

        FixedBackOff backOff =
                new FixedBackOff(2000L, propertiesConfig.getKafkaNuboRetries());

        DefaultErrorHandler errorHandler = new DefaultErrorHandler(
                (record, exception) -> {

                    Integer deliveryAttempt = getDeliveryAttempt(record);

                    ErrorCode errorCode = resolveKafkaErrorCode(exception);

                    String messageInstrumentsRV = safeConvertPayloadToJson(record.value());

                    Throwable rootCause = getRootCause(exception);

                    log.error(
                            """
                            Kafka consumer error detected.
                            errorCode: {}
                            topic: {}
                            partition: {}
                            offset: {}
                            key: {}
                            deliveryAttempt: {}
                            exceptionClass: {}
                            exceptionMessage: {}
                            rootCauseClass: {}
                            rootCauseMessage: {}
                            causeChain: {}
                            payload: {}
                            """,
                            errorCode,
                            record.topic(),
                            record.partition(),
                            record.offset(),
                            record.key(),
                            deliveryAttempt,
                            exception.getClass().getName(),
                            exception.getMessage(),
                            rootCause.getClass().getName(),
                            rootCause.getMessage(),
                            buildCauseChain(exception),
                            messageInstrumentsRV,
                            exception
                    );

                    kafkaErrorBuilder.buildError(
                            exception,
                            errorCode,
                            record.offset(),
                            record.topic(),
                            deliveryAttempt,
                            record.partition(),
                            messageInstrumentsRV
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

    private ErrorCode resolveKafkaErrorCode(Exception exception) {

        DeserializationException deserializationException =
                findCause(exception, DeserializationException.class);

        if (deserializationException != null) {
            return ErrorCode.ERROR_DESERIALIZER_JSON;
        }

        ServiceException serviceException =
                findCause(exception, ServiceException.class);

        if (serviceException != null) {
            return serviceException.getErrorCode();
        }

        return ErrorCode.ERROR_KAFKA_CONSUMER_NUBO;
    }

    private <T extends Throwable> T findCause(Throwable throwable, Class<T> expectedType) {
        Throwable current = throwable;

        while (current != null) {
            if (expectedType.isInstance(current)) {
                return expectedType.cast(current);
            }

            current = current.getCause();
        }

        return null;
    }

    private Throwable getRootCause(Throwable throwable) {
        Throwable rootCause = throwable;

        while (rootCause.getCause() != null) {
            rootCause = rootCause.getCause();
        }

        return rootCause;
    }

    private String buildCauseChain(Throwable throwable) {
        StringBuilder builder = new StringBuilder();
        Throwable current = throwable;

        while (current != null) {
            if (builder.length() > 0) {
                builder.append(" -> ");
            }

            builder.append(current.getClass().getSimpleName());

            if (current.getMessage() != null) {
                builder.append(": ").append(current.getMessage());
            }

            current = current.getCause();
        }

        return builder.toString();
    }

    private String safeConvertPayloadToJson(Object value) {
        if (value == null) {
            return null;
        }

        try {
            return ApplicationUtils.convertObjectToJson(value);
        } catch (Exception e) {
            log.warn("Could not convert Kafka payload to JSON. valueClass: {}", value.getClass().getName(), e);
            return String.valueOf(value);
        }
    }
}


```

## src/main/java/com/nubo/instruments/synchronization/application/config/KafkaProducerConfig.java

```java
package com.nubo.instruments.synchronization.application.config;

import com.nubo.instruments.synchronization.application.properties.PropertiesConfig;
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

## src/main/java/com/nubo/instruments/synchronization/application/context/GlobalContext.java

```java
package com.nubo.instruments.synchronization.application.context;

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

## src/main/java/com/nubo/instruments/synchronization/application/database/NamingStrategyConfig.java

```java
package com.nubo.instruments.synchronization.application.database;

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

## src/main/java/com/nubo/instruments/synchronization/application/database/UpperNamingConfig.java

```java
package com.nubo.instruments.synchronization.application.database;

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

## src/main/java/com/nubo/instruments/synchronization/application/properties/PropertiesConfig.java

```java
package com.nubo.instruments.synchronization.application.properties;

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

    @Value("${kafka.nubo.producer.topic-name-error-response}")
    private String kafkaNuboProducerTopicNameErrorResponse;

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

    @Value("${kafka.nubo.consumer.max-poll-records:1000}")
    private Integer kafkaNuboConsumerMaxPollRecords;

    @Value("${kafka.nubo.consumer.concurrency:4}")
    private Integer kafkaNuboConsumerConcurrency;

    @Value("${application.sync.persistence-batch-size:1000}")
    private int persistenceBatchSize;

}

```

## src/main/java/com/nubo/instruments/synchronization/application/properties/PropertiesContext.java

```java
package com.nubo.instruments.synchronization.application.properties;

import com.nubo.instruments.synchronization.application.context.GlobalContext;
import com.nubo.instruments.synchronization.application.util.ApplicationUtils;
import com.nubo.instruments.synchronization.models.enums.PropertiesEnum;

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

## src/main/java/com/nubo/instruments/synchronization/application/util/ApplicationUtils.java

```java
package com.nubo.instruments.synchronization.application.util;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.nubo.instruments.synchronization.exception.ServiceException;
import com.nubo.instruments.synchronization.exception.error.ErrorCode;

import java.io.IOException;
import java.io.InputStream;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Locale;

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

    public static String toUpper(String value) {
        return value == null ? null : value.trim().toUpperCase(Locale.ROOT);
    }

}

```

## src/main/java/com/nubo/instruments/synchronization/exception/ServiceException.java

```java
package com.nubo.instruments.synchronization.exception;

import com.nubo.instruments.synchronization.exception.error.ErrorCode;
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

## src/main/java/com/nubo/instruments/synchronization/exception/error/ErrorCode.java

```java
package com.nubo.instruments.synchronization.exception.error;

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
    VERSION_API_NOT_FOUND("Version API not found"),
    MARKET_NOT_FOUND("Market not found in the database."),
    STATUS_NOT_FOUND("Status not found in the database."),
    STATUS_MAPPING_NOT_FOUND("Status Mapping not found in the database."),
    DEPOSITORY_NOT_FOUND("Depository not found in the database."),
    ISSUER_NOT_FOUND("Issuer not found in the database."),
    SECURITY_TITLE_NOT_FOUND("Security title not found in the database."),
    EQUITY_SECURITY_NOT_FOUND("Equity Security not found in the database."),
    SEGMENT_NOT_FOUND("Segment not found in the database."),
    TYPE_NOT_FOUND("Type not found in the database."),
    TYPE_MAPPING_NOT_FOUND("Type Mapping not found in the database."),
    ERROR_KAFKA_CONSUMER_NUBO("Error Consumer Kafka Nubo"),
    ERROR_DESERIALIZER_JSON("Error Deserializer Json"),
    ERROR_SERIALIZER_JSON("Error Serializer Json");

    private final String message;

    ErrorCode(String message) {
        this.message = message;
    }

    public String getName() {
        return this.name();
    }

}

```

## src/main/java/com/nubo/instruments/synchronization/exception/error/ErrorResponse.java

```java
package com.nubo.instruments.synchronization.exception.error;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.nubo.instruments.synchronization.application.util.ApplicationUtils;
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

## src/main/java/com/nubo/instruments/synchronization/exception/error/ErrorValidation.java

```java
package com.nubo.instruments.synchronization.exception.error;

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

## src/main/java/com/nubo/instruments/synchronization/exception/handler/GlobalExceptionHandler.java

```java
package com.nubo.instruments.synchronization.exception.handler;

import com.nubo.instruments.synchronization.application.properties.PropertiesContext;
import com.nubo.instruments.synchronization.exception.ServiceException;
import com.nubo.instruments.synchronization.exception.error.ErrorCode;
import com.nubo.instruments.synchronization.exception.error.ErrorResponse;
import com.nubo.instruments.synchronization.exception.error.ErrorValidation;
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

## src/main/java/com/nubo/instruments/synchronization/exception/kafka/KafkaErrorBuild.java

```java
package com.nubo.instruments.synchronization.exception.kafka;

import com.nubo.instruments.synchronization.application.properties.PropertiesConfig;
import com.nubo.instruments.synchronization.application.util.ApplicationUtils;
import com.nubo.instruments.synchronization.exception.error.ErrorCode;
import com.nubo.instruments.synchronization.exception.error.ErrorResponse;
import com.nubo.instruments.synchronization.exception.error.ErrorValidation;
import com.nubo.instruments.synchronization.kafka.producer.KafkaNuboProducerAdapter;
import com.nubo.instruments.synchronization.models.domain.KafkaMessage;
import com.nubo.instruments.synchronization.models.dto.response.ErrorResponseOutDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Component
@RequiredArgsConstructor
@Slf4j
public class KafkaErrorBuild {

    private final PropertiesConfig propertiesConfig;
    private final KafkaNuboProducerAdapter kafkaNuboProducerAdapter;

    public void buildError(Exception exception, ErrorCode errorCode) {
        this.buildErrorResponse(exception, errorCode, null, null, null, null, null);
    }

    public void buildError(Exception exception, ErrorCode errorCode, Long offset) {
        this.buildErrorResponse(exception, errorCode, offset, null, null, null, null);
    }

    public void buildError(Exception exception, ErrorCode errorCode, Long offset, String topic, Integer retry) {
        this.buildErrorResponse(exception, errorCode, offset, topic, retry, null, null);
    }

    public void buildError(Exception exception,
            ErrorCode errorCode,
            Long offset,
            String topic,
            Integer retry,
            Integer partition,
            String messageInstrumentsRV) {
        this.buildErrorResponse(exception, errorCode, offset, topic, retry, partition, messageInstrumentsRV);
    }

    public String buildErrorMessage(Exception ex) {
        if (ex == null) {
            return "Unknown error";
        }

        StringBuilder builder = new StringBuilder();

        appendIfPresent(builder, ex.getMessage());

        appendCauseMessage(builder, ex);

        String clean = builder.toString().replaceAll("null", "").replaceAll("\\s+", " ").trim();
        if (!clean.isEmpty()) {
            return clean;
        }

        String fallback = ex.getClass().getSimpleName();
        if ("Exception".equals(fallback) && ex.getStackTrace() != null && ex.getStackTrace().length > 0) {
            fallback += " at " + ex.getStackTrace()[0];
        }
        return fallback;
    }

    public void sendMessageErrorToKafka(KafkaMessage kafkaMessage, Exception exception) {
        ErrorResponseOutDto errorMessage = ErrorResponseOutDto.builder()
                .errorMessage(buildErrorMessage(exception))
                .partition(kafkaMessage.partition())
                .offset(kafkaMessage.offset())
                .messageInstrumentsRV(ApplicationUtils.convertObjectToJson(kafkaMessage.dataReferenceInstrumentsInDto()))
                .build();
        kafkaNuboProducerAdapter.sendMessageError(errorMessage);
    }

    private void buildErrorResponse(Exception exception,
            ErrorCode errorCode,
            Long offset,
            String topic,
            Integer retry,
            Integer partition,
            String messageInstrumentsRV) {
        StringBuilder description = new StringBuilder(errorCode.getMessage());
        if (offset != null)
            description.append(", - Offset: ").append(offset);
        if (topic != null)
            description.append(" - Topic: ").append(topic);
        if (retry != null)
            description.append(" - Retries: ").append(retry);

        ErrorResponse errorResponse = ErrorResponse.builder()
                .httpCode("500")
                .url(propertiesConfig.getKafkaNuboBootstrapServers())
                .errorCode(errorCode.getName())
                .errorMessage(description.toString())
                .errorMessageDetail(exception.getMessage())
                .timestamp(ApplicationUtils.getLocalDateTimeNow())
                .build();

        List<ErrorValidation> errorValidationList = getErrorValidations(exception);
        if (!errorValidationList.isEmpty()) {
            errorResponse.setErrorDetails(errorValidationList);
        }

        kafkaNuboProducerAdapter.sendMessageError(
                ErrorResponseOutDto.builder()
                        .errorMessage(description.toString())
                        .partition(partition)
                        .offset(offset)
                        .messageInstrumentsRV(messageInstrumentsRV)
                        .build());

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

    private void appendCauseMessage(StringBuilder builder, Exception ex) {
        if (ex.getCause() == null || !hasText(ex.getCause().getMessage())) {
            return;
        }

        String cleaned = ex.getCause().getMessage()
                .replaceAll("\\{[^}]*\\}", "")
                .replaceAll("\\d{3}\\s*:\\s*\".*", "")
                .trim();
        if (!cleaned.isEmpty()) {
            appendWithSeparator(builder, "Cause: " + cleaned);
        } else {
            Matcher m = Pattern.compile("^(\\d{3})").matcher(ex.getCause().getMessage());
            if (m.find()) {
                appendWithSeparator(builder, "Cause: HTTP " + m.group(1));
            }
        }
    }

    private void appendIfPresent(StringBuilder builder, String message) {
        if (hasText(message)) {
            appendWithSeparator(builder, message.trim());
        }
    }

    private void appendWithSeparator(StringBuilder builder, String message) {
        if (builder.length() > 0) {
            builder.append(" | ");
        }
        builder.append(message);
    }

    private boolean hasText(String str) {
        return str != null && !str.trim().isEmpty();
    }

}

```

## src/main/java/com/nubo/instruments/synchronization/helpers/MapperUtil.java

```java
package com.nubo.instruments.synchronization.helpers;

public final class MapperUtil {

    private MapperUtil() {
    }

}

```

## src/main/java/com/nubo/instruments/synchronization/kafka/consumer/KafkaNuboListenerAdapter.java

```java
package com.nubo.instruments.synchronization.kafka.consumer;

import java.util.ArrayList;
import java.util.List;

import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

import com.nubo.instruments.synchronization.application.context.GlobalContext;
import com.nubo.instruments.synchronization.application.util.ApplicationUtils;
import com.nubo.instruments.synchronization.models.domain.KafkaMessage;
import com.nubo.instruments.synchronization.models.dto.request.DataReferenceInstrumentsInDto;
import com.nubo.instruments.synchronization.models.enums.PropertiesEnum;
import com.nubo.instruments.synchronization.service.SynchronizationService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Component
@RequiredArgsConstructor
@Slf4j
public class KafkaNuboListenerAdapter {

    private final SynchronizationService synchronizationService;

    @KafkaListener(topics = "#{propertiesConfig.getKafkaNuboConsumerTopicName}",
            containerFactory = "kafkaNuboListenerContainerFactory")
    public void listenKafkaBatch(List<ConsumerRecord<String, DataReferenceInstrumentsInDto>> records) {
        int recordsSize = records == null ? 0 : records.size();
        log.info("New batch received from Kafka -- records: {}", recordsSize);

        if (recordsSize == 0) {
            return;
        }
        setProperties();

        StringBuilder mnemonicsBuilder = new StringBuilder();
        List<KafkaMessage> kafkaMessageList = new ArrayList<>();
        for (ConsumerRecord<String, DataReferenceInstrumentsInDto> record : records) {
            DataReferenceInstrumentsInDto dto = record.value();
            if (mnemonicsBuilder.length() > 0) {
                mnemonicsBuilder.append(", ");
            }
            mnemonicsBuilder.append(dto == null || dto.getMnemonic() == null ? "<NULL>" : dto.getMnemonic());
            kafkaMessageList.add(new KafkaMessage(
                    dto,
                    record.partition(),
                    record.offset(),
                    record.key(),
                    record.topic()));
        }
        String receivedMnemonics = mnemonicsBuilder.toString();
        log.info("Received mnemonics from Kafka -- count: {} -- mnemonics: [{}]",
                recordsSize, receivedMnemonics);

        synchronizationService.synchronizeDataReferenceAndInstrumentsBatch(kafkaMessageList);
    }

    private void setProperties() {
        GlobalContext.setProperty(PropertiesEnum.CLIENT_IP.getValue(), "127.0.0.1");
        GlobalContext.setProperty(PropertiesEnum.CLIENT_USER.getValue(), "REFERENCE_DATA");
        GlobalContext.setProperty(PropertiesEnum.CLIENT_DATETIME.getValue(),
                ApplicationUtils.getLocalDateTimeNow());
    }
}

```

## src/main/java/com/nubo/instruments/synchronization/kafka/producer/KafkaNuboProducerAdapter.java

```java
package com.nubo.instruments.synchronization.kafka.producer;

import com.nubo.instruments.synchronization.application.properties.PropertiesConfig;
import com.nubo.instruments.synchronization.application.util.ApplicationUtils;
import com.nubo.instruments.synchronization.models.dto.response.ErrorResponseOutDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.SendResult;
import org.springframework.stereotype.Component;

import java.util.concurrent.CompletableFuture;

@Component
@RequiredArgsConstructor
@Slf4j
public class KafkaNuboProducerAdapter {

    private final KafkaTemplate<String, String> kafkaNuboTemplate;
    private final PropertiesConfig propertiesConfig;

    public void sendMessageError(ErrorResponseOutDto errorResponseOutDto) {
        String topicName = propertiesConfig.getKafkaNuboProducerTopicNameErrorResponse();
        String messageJson = ApplicationUtils.convertObjectToJson(errorResponseOutDto);

        CompletableFuture<SendResult<String, String>> future = kafkaNuboTemplate.send(topicName, messageJson)
                .toCompletableFuture();

        future.thenAccept(result ->
                        log.debug("Send error response message -- Topic: {} -- partition: {} -- offset: {} -- json: {}",
                                topicName,
                                result.getRecordMetadata().partition(),
                                result.getRecordMetadata().offset(),
                                messageJson))
                .exceptionally(ex -> {
                    log.error("Error sending message to topic: {} -- json: {}, Exception: {}",
                            topicName,
                            messageJson,
                            ex.getMessage());
                    return null;
                });
    }
}

```

## src/main/java/com/nubo/instruments/synchronization/models/domain/InstrumentsResult.java

```java
package com.nubo.instruments.synchronization.models.domain;

public record InstrumentsResult(
        Long id,
        String action
) {}

```

## src/main/java/com/nubo/instruments/synchronization/models/domain/KafkaMessage.java

```java
package com.nubo.instruments.synchronization.models.domain;

import com.nubo.instruments.synchronization.models.dto.request.DataReferenceInstrumentsInDto;

public record KafkaMessage(
        DataReferenceInstrumentsInDto dataReferenceInstrumentsInDto,
        Integer partition,
        Long offset,
        String key,
        String topic) {
}

```

## src/main/java/com/nubo/instruments/synchronization/models/dto/request/DataReferenceInstrumentsInDto.java

```java
package com.nubo.instruments.synchronization.models.dto.request;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonIgnoreProperties(ignoreUnknown = true)
public class DataReferenceInstrumentsInDto {

    private Long id;

    private String isin;

    private String currency;

    private String status;

    private Integer issuerId;

    private String action;

    private String creationDate;

    private String creationUser;

    private String updateDate;

    private String updateUser;

    private String updateUserIp;

    private String instrument;

    private String mnemonic;

    private String description;

    private LocalDate listingDate;

    private LocalDate retirementDate;

    private String listingCountry;

    private BigInteger issuedAmount;

    private BigInteger outstandingShares;

    private BigDecimal nominalPrice;

    private String nominalPriceDate;

    private String classification;

    private String category;

    private String depositary;

    private String issuerCode;

    private String marketType;

    private String regulatorCode;

    private String cfiCode;

    private Boolean negotiableAsset;

    private Integer settlementType;

    private Integer marketSegment;

    private String statusOB;

    private Integer segmentId;

    private Boolean tradesOnLoan;

    private Boolean tradesOnRepo;
}

```

## src/main/java/com/nubo/instruments/synchronization/models/dto/response/ErrorResponseOutDto.java

```java
package com.nubo.instruments.synchronization.models.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ErrorResponseOutDto {

    private String errorMessage;

    private Integer partition;

    private Long offset;

    private String messageInstrumentsRV;

}

```

## src/main/java/com/nubo/instruments/synchronization/models/dto/response/MessageEventKafka.java

```java
package com.nubo.instruments.synchronization.models.dto.response;

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

## src/main/java/com/nubo/instruments/synchronization/models/entity/ClassEntity.java

```java
package com.nubo.instruments.synchronization.models.entity;

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

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (!(o instanceof ClassEntity))
            return false;
        ClassEntity that = (ClassEntity) o;
        return id != null && id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

}

```

## src/main/java/com/nubo/instruments/synchronization/models/entity/CountryEntity.java

```java
package com.nubo.instruments.synchronization.models.entity;

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

    @Column(name = "\"CURRENCY_ID\"", nullable = false)
    private Long currencyId;

    @Column(name = "\"TIME_ZONE\"", length = 30, nullable = false)
    private String timeZone;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (!(o instanceof CountryEntity))
            return false;
        CountryEntity that = (CountryEntity) o;
        return id != null && id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/instruments/synchronization/models/entity/CurrencyEntity.java

```java
package com.nubo.instruments.synchronization.models.entity;

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

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (!(o instanceof CurrencyEntity))
            return false;
        CurrencyEntity that = (CurrencyEntity) o;
        return id != null && id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/instruments/synchronization/models/entity/DepositoryEntity.java

```java
package com.nubo.instruments.synchronization.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
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
@Table(name = "\"DEPOSITORY\"", schema = "\"NUANBODB\"")
public class DepositoryEntity {

    @Id
    @Column(name = "\"DEPOSITORY_ID\"", length = 2)
    private String id;

    @Column(name = "\"DESCRIPTION\"", length = 80, nullable = false)
    private String description;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (!(o instanceof DepositoryEntity))
            return false;
        DepositoryEntity that = (DepositoryEntity) o;
        return id != null && id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/instruments/synchronization/models/entity/EquitySecurityEntity.java

```java
package com.nubo.instruments.synchronization.models.entity;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.time.LocalDate;
import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.MapsId;
import jakarta.persistence.OneToOne;
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
@Table(name = "\"EQUITY_SECURITY\"", schema = "\"NUANBODB\"")
public class EquitySecurityEntity {

    @Id
    @Column(name = "\"SECURITY_ID\"")
    private Long id;

    @OneToOne(fetch = FetchType.LAZY)
    @MapsId
    @JoinColumn(name = "\"SECURITY_ID\"")
    private SecurityTitleEntity securityTitle;

    @Column(name = "\"PARENT\"")
    private Boolean parent;

    @Column(name = "\"AMOUNT_ISSUED\"", precision = 20)
    private BigInteger amountIssued;

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
    private BigInteger numberOutstanding;

    @Column(name = "\"SUBMISSION\"", length = 1)
    private String submission;

    @Column(name = "\"LIQUIDITY\"", length = 1)
    private String liquidity;

    @Column(name = "\"SPECIAL_RIGHTS\"")
    private Integer specialRights;

    @Column(name = "\"EXDIVIDEND_DATE\"")
    private LocalDate exDividendDate;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 250, nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50, nullable = false)
    private String lastModifyIp;

    @Column(name = "\"TRADES_ON_LOAN\"")
    private Boolean tradesOnLoan;

    @Column(name = "\"TRADES_ON_REPO\"")
    private Boolean tradesOnRepo;


    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (!(o instanceof EquitySecurityEntity))
            return false;
        EquitySecurityEntity that = (EquitySecurityEntity) o;
        return id != null && id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return getId() != null ? getId().hashCode() : 0;
    }

}

```

## src/main/java/com/nubo/instruments/synchronization/models/entity/GicsEntity.java

```java
package com.nubo.instruments.synchronization.models.entity;

import java.time.LocalDateTime;

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

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (!(o instanceof GicsEntity))
            return false;
        GicsEntity that = (GicsEntity) o;
        return id != null && id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/instruments/synchronization/models/entity/IsinNumberEntity.java

```java
package com.nubo.instruments.synchronization.models.entity;

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
@Builder(toBuilder=true)
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
    @JoinColumn(name = "\"MARKET_ID\"")
    private MarketEntity market;

    @ManyToOne
    @JoinColumn(name = "\"SECURITY_ID\"")
    private SecurityTitleEntity securityTitle;

    @ManyToOne
    @JoinColumn(name = "\"DEPOSITORY_ID\"")
    private DepositoryEntity depository;

    @Column(name = "\"ISSUE_DATE\"")
    private LocalDate issueDate;

    @Column(name = "\"MATURITY_DATE\"")
    private LocalDate maturityDate;

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

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (!(o instanceof IsinNumberEntity))
            return false;
        IsinNumberEntity that = (IsinNumberEntity) o;
        return id != null && id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

}

```

## src/main/java/com/nubo/instruments/synchronization/models/entity/IssuerEntity.java

```java
package com.nubo.instruments.synchronization.models.entity;


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

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (!(o instanceof IssuerEntity))
            return false;
        IssuerEntity that = (IssuerEntity) o;
        return id != null && id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

}

```

## src/main/java/com/nubo/instruments/synchronization/models/entity/MarketEntity.java

```java
package com.nubo.instruments.synchronization.models.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
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
@Table(name = "\"MARKET\"", schema = "\"NUANBODB\"")
public class MarketEntity {

    @Id
    @Column(name = "\"MARKET_ID\"", length = 2)
    private String id;

    @Column(name = "\"DESCRIPTION\"", length = 80)
    private String description;

    @Column(name = "\"CATEGORY\"", length = 50)
    private String category;

    @Column(name = "\"CODE\"")
    private String code;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 250, nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50, nullable = false)
    private String lastModifyIp;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (!(o instanceof MarketEntity))
            return false;
        MarketEntity that = (MarketEntity) o;
        return id != null && id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/instruments/synchronization/models/entity/SecurityTitleEntity.java

```java
package com.nubo.instruments.synchronization.models.entity;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.OffsetDateTime;

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

@Getter
@Setter
@Builder(toBuilder = true)
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"SECURITY_TITLE\"", schema = "\"NUANBODB\"")
public class SecurityTitleEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"SECURITY_ID\"", nullable = false)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"MARKET_ID\"", nullable = false)
    private MarketEntity market;

    @Column(name = "\"EQUITY_CODE\"", length = 15)
    private String equityCode;

    @Column(name = "\"MNEMONIC\"", length = 20, nullable = false)
    private String mnemonic;

    @Column(name = "\"ISIN\"", length = 20)
    private String isin;

    @Column(name = "\"CFI_ID\"", length = 6, nullable = false)
    private String cfi;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"CURRENCY_ID\"", nullable = false)
    private CurrencyEntity currency;

    @Column(name = "\"SETTLEMENT_PERIOD\"", length = 2)
    private String settlementPeriod;

    @Column(name = "\"LISTING_DATE\"")
    private LocalDate listingDate;

    @Column(name = "\"DELISTING_DATE\"")
    private LocalDate delistingDate;

    @Column(name = "\"PARENT\"")
    private Boolean parent;

    @Column(name = "\"PARENT_ID\"")
    private Long parentId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"STATUS_ID\"", nullable = false)
    private StatusEntity status;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"ISSUER_ID\"", nullable = false)
    private IssuerEntity issuer;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"COUNTRY_ID\"", nullable = false)
    private CountryEntity country;

    @Column(name = "\"AMOUNT_ISSUED\"", precision = 20, scale = 4)
    private BigDecimal amountIssued;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"CLASS_ID\"", nullable = false)
    private ClassEntity clazz;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"SEGMENT_ID\"", nullable = false)
    private SegmentEntity segment;

    @Column(name = "\"CATEGORY\"", length = 20)
    private String category;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"DEPOSITORY_ID\"", nullable = false)
    private DepositoryEntity depository;

    @Column(name = "\"PUNISHMENT_REPO\"", precision = 5, scale = 4)
    private BigDecimal punishmentRepo;

    @Column(name = "\"REGULATORY_CODE\"", length = 30)
    private String regulatoryCode;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"MARKET_TYPE_ID\"")
    private TypeEntity marketType;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 250, nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private OffsetDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50)
    private String lastModifyIp;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (!(o instanceof SecurityTitleEntity))
            return false;
        SecurityTitleEntity that = (SecurityTitleEntity) o;
        return id != null && id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

}

```

## src/main/java/com/nubo/instruments/synchronization/models/entity/SegmentEntity.java

```java
package com.nubo.instruments.synchronization.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
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
@Table(name = "\"SEGMENT\"", schema = "\"NUANBODB\"")
public class SegmentEntity {

    @Id
    @Column(name = "\"SEGMENT_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"DESCRIPTION\"", length = 80)
    private String description;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (!(o instanceof SegmentEntity))
            return false;
        SegmentEntity that = (SegmentEntity) o;
        return id != null && id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/instruments/synchronization/models/entity/StatusEntity.java

```java
package com.nubo.instruments.synchronization.models.entity;

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
    @Column(name = "\"STATUS_ID\"")
    private Long id;

    @Column(name = "\"DESCRIPTION\"", length = 80)
    private String description;

    @Column(name = "\"CATEGORY\"", length = 30)
    private String category;

    @Column(name = "\"DETAIL\"", length = 255)
    private String detail;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (!(o instanceof StatusEntity))
            return false;
        StatusEntity that = (StatusEntity) o;
        return id != null && id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/instruments/synchronization/models/entity/StatusMappingEntity.java

```java
package com.nubo.instruments.synchronization.models.entity;

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
@Table(name = "\"STATUS_MAPPING\"", schema = "\"NUANBODB\"")
public class StatusMappingEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"STATUS_MAPPING_ID\"")
    private Long id;

    @Column(name = "\"EXTERNAL_SYSTEM\"", length = 30, nullable = false)
    private String externalSystem;

    @Column(name = "\"EXTERNAL_CODE\"", length = 20)
    private String externalCode;

    @Column(name = "\"CATEGORY\"", length = 30)
    private String category;

    @Column(name = "\"EXTERNAL_DESCRIPTION\"", length = 255)
    private String externalDescription;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"", nullable = false)
    private StatusEntity status;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (!(o instanceof StatusMappingEntity))
            return false;
        StatusMappingEntity that = (StatusMappingEntity) o;
        return id != null && id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/instruments/synchronization/models/entity/TypeEntity.java

```java
package com.nubo.instruments.synchronization.models.entity;

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

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (!(o instanceof TypeEntity))
            return false;
        TypeEntity that = (TypeEntity) o;
        return id != null && id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/instruments/synchronization/models/entity/TypeMappingEntity.java

```java
package com.nubo.instruments.synchronization.models.entity;

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
@Table(name = "\"TYPE_MAPPING\"", schema = "\"NUANBODB\"")
public class TypeMappingEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"TYPE_MAPPING_ID\"")
    private Long id;

    @Column(name = "\"EXTERNAL_SYSTEM\"", length = 30, nullable = false)
    private String externalSystem;

    @Column(name = "\"EXTERNAL_CODE\"", length = 20)
    private String externalCode;

    @Column(name = "\"CATEGORY\"", length = 30)
    private String category;

    @Column(name = "\"EXTERNAL_DESCRIPTION\"", length = 255)
    private String externalDescription;

    @ManyToOne
    @JoinColumn(name = "\"TYPE_ID\"", nullable = false)
    private TypeEntity type;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (!(o instanceof TypeMappingEntity))
            return false;
        TypeMappingEntity that = (TypeMappingEntity) o;
        return id != null && id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

}

```

## src/main/java/com/nubo/instruments/synchronization/models/enums/CountryEnum.java

```java
package com.nubo.instruments.synchronization.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

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

## src/main/java/com/nubo/instruments/synchronization/models/enums/ErrorEnum.java

```java
package com.nubo.instruments.synchronization.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum ErrorEnum {

    ISIN_NOT_EXIST(1),
    ADMISSIBILITY_INVALID(2),
    COUNTRY_INVALID(3),
    GENERAL_RISK_INVALID(4),
    CURRENCY_RISK_INVALID(5),
    DATE_INVALID(6),
    MNEMONIC_INVALID(7),
    PRICE_INVALID(8),
    MARKET_INVALID(9),
    CURRENCY_INVALID(10),
    ISIN_INVALID(11),
    TITLE_NOT_EXIST(12);

    private final int value;
}

```

## src/main/java/com/nubo/instruments/synchronization/models/enums/PropertiesEnum.java

```java
package com.nubo.instruments.synchronization.models.enums;

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

## src/main/java/com/nubo/instruments/synchronization/models/enums/SegmentDefaultEnum.java

```java
package com.nubo.instruments.synchronization.models.enums;

import com.nubo.instruments.synchronization.models.entity.SegmentEntity;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum SegmentDefaultEnum {

    LOCAL(1L, "LOCAL");

    private final Long id;
    private final String description;

    public SegmentEntity toEntity() {
        return SegmentEntity.builder()
                .id(id)
                .description(description)
                .build();
    }

}

```

## src/main/java/com/nubo/instruments/synchronization/models/enums/StatusEnum.java

```java
package com.nubo.instruments.synchronization.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum StatusEnum {

    IN_PROCESS(703),
    WHIT_ERRORS(702),
    NOT_PROCESS(701),
    SUCCESSFUL(700);

    private final Integer id;

}

```

## src/main/java/com/nubo/instruments/synchronization/models/enums/StatusMappingEnum.java

```java
package com.nubo.instruments.synchronization.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Arrays;

@Getter
@RequiredArgsConstructor
public enum StatusMappingEnum {

    INSTRUMENTO_RV_REFERENCE_DATA(
            "REFENCE DATA","INSTRUMENTO_RV"
    );

    private final String externalSystem;
    private final String category;

    public static StatusMappingEnum fromCategory(String category) {
        return Arrays.stream(values())
                .filter(e -> e.category.equals(category))
                .findFirst()
                .orElseThrow(() ->
                        new IllegalArgumentException("StatusMapping not implemented for category: " + category)
                );
    }
}

```

## src/main/java/com/nubo/instruments/synchronization/models/enums/TypeEnum.java

```java
package com.nubo.instruments.synchronization.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum TypeEnum {

    LOAD_MANUAL(700),
    LOAD_AUTOMATIC(701);

    private final Integer id;

}

```

## src/main/java/com/nubo/instruments/synchronization/models/enums/TypeMappingEnum.java

```java
package com.nubo.instruments.synchronization.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Arrays;

@Getter
@RequiredArgsConstructor
public enum TypeMappingEnum {

    INSTRUMENTO_RV_REFERENCE_DATA(
            "REFERENCE_DATA","MERCADO_INSTRUMENTO"
    );

    private final String externalSystem;
    private final String category;

    public static TypeMappingEnum fromCategory(String category) {
        return Arrays.stream(values())
                .filter(e -> e.category.equals(category))
                .findFirst()
                .orElseThrow(() ->
                        new IllegalArgumentException("TypeMapping not implemented for category: " + category)
                );
    }
}

```

## src/main/java/com/nubo/instruments/synchronization/models/enums/VersionApiEnum.java

```java
package com.nubo.instruments.synchronization.models.enums;

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

## src/main/java/com/nubo/instruments/synchronization/repository/ClassRepository.java

```java
package com.nubo.instruments.synchronization.repository;

import com.nubo.instruments.synchronization.models.entity.ClassEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClassRepository extends JpaRepository<ClassEntity, String> {
}

```

## src/main/java/com/nubo/instruments/synchronization/repository/CountryRepository.java

```java
package com.nubo.instruments.synchronization.repository;

import com.nubo.instruments.synchronization.models.entity.CountryEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

public interface CountryRepository extends JpaRepository<CountryEntity, Long> {

    @Query("SELECT c FROM CountryEntity c WHERE c.code =:code")
    Optional<CountryEntity> findCountryEntityByCode(String code);

    Optional<CountryEntity> findByCodeIgnoreCase(String code);

    @Query("SELECT c FROM CountryEntity c WHERE UPPER(c.code) IN :codes")
    List<CountryEntity> findByCodeIgnoreCaseIn(@Param("codes") Collection<String> codes);

}

```

## src/main/java/com/nubo/instruments/synchronization/repository/CurrencyRepository.java

```java
package com.nubo.instruments.synchronization.repository;

import com.nubo.instruments.synchronization.models.entity.CurrencyEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

public interface CurrencyRepository extends JpaRepository<CurrencyEntity, Long> {
    Optional<CurrencyEntity> findByCodeIgnoreCase(String code);

    @Query("SELECT c FROM CurrencyEntity c WHERE UPPER(c.code) IN :codes")
    List<CurrencyEntity> findByCodeIgnoreCaseIn(@Param("codes") Collection<String> codes);
}

```

## src/main/java/com/nubo/instruments/synchronization/repository/DepositoryRepository.java

```java
package com.nubo.instruments.synchronization.repository;

import com.nubo.instruments.synchronization.models.entity.DepositoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepositoryRepository extends JpaRepository<DepositoryEntity, String> {
}

```

## src/main/java/com/nubo/instruments/synchronization/repository/EquitySecurityRepository.java

```java
package com.nubo.instruments.synchronization.repository;

import java.util.Collection;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.nubo.instruments.synchronization.models.entity.EquitySecurityEntity;

public interface EquitySecurityRepository extends JpaRepository<EquitySecurityEntity, Long> {

    @Query("""
            SELECT eq FROM EquitySecurityEntity eq
            JOIN FETCH eq.securityTitle st
            WHERE UPPER(st.mnemonic) IN :mnemonics
            """)
    List<EquitySecurityEntity> findByMnemonicIgnoreCaseIn(@Param("mnemonics") Collection<String> mnemonics);

}

```

## src/main/java/com/nubo/instruments/synchronization/repository/IsinNumberRepository.java

```java
package com.nubo.instruments.synchronization.repository;

import com.nubo.instruments.synchronization.models.entity.IsinNumberEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

public interface IsinNumberRepository extends JpaRepository<IsinNumberEntity, Long> {

    Optional<IsinNumberEntity> findByIsinNumberIgnoreCase(String isinNumber);

    List<IsinNumberEntity> findByIsinNumberIn(Collection<String> isinNumbers);

    Optional<IsinNumberEntity> findBySecurityTitle_Id(Long securityId);

    List<IsinNumberEntity> findBySecurityTitle_IdIn(Collection<Long> securityIds);
}

```

## src/main/java/com/nubo/instruments/synchronization/repository/IssuerRepository.java

```java
package com.nubo.instruments.synchronization.repository;

import com.nubo.instruments.synchronization.models.entity.IssuerEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

public interface IssuerRepository extends JpaRepository<IssuerEntity, Long> {

    Optional<IssuerEntity> findByCodeIgnoreCase(String code);

    @Query("SELECT i FROM IssuerEntity i WHERE UPPER(i.code) IN :codes")
    List<IssuerEntity> findByCodeIgnoreCaseIn(@Param("codes") Collection<String> codes);

}
```

## src/main/java/com/nubo/instruments/synchronization/repository/MarketRepository.java

```java
package com.nubo.instruments.synchronization.repository;

import com.nubo.instruments.synchronization.models.entity.MarketEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MarketRepository extends JpaRepository<MarketEntity, String> { }


```

## src/main/java/com/nubo/instruments/synchronization/repository/SecurityTitleRepository.java

```java
package com.nubo.instruments.synchronization.repository;

import com.nubo.instruments.synchronization.models.entity.SecurityTitleEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

public interface SecurityTitleRepository extends JpaRepository<SecurityTitleEntity, Long> {

    Optional<SecurityTitleEntity> findByEquityCode(String equityCode);

    List<SecurityTitleEntity> findByEquityCodeIn(Collection<String> equityCodes);

    List<SecurityTitleEntity> findByMnemonicIn(Collection<String> mnemonics);

    @Query("SELECT s FROM SecurityTitleEntity s WHERE UPPER(s.mnemonic) IN :mnemonics")
    List<SecurityTitleEntity> findByMnemonicIgnoreCaseIn(@Param("mnemonics") Collection<String> mnemonics);

    Optional<SecurityTitleEntity> findByMnemonic(String mnemonic);
}

```

## src/main/java/com/nubo/instruments/synchronization/repository/SegmentRepository.java

```java
package com.nubo.instruments.synchronization.repository;

import com.nubo.instruments.synchronization.models.entity.SegmentEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SegmentRepository extends JpaRepository<SegmentEntity, Long> {

}

```

## src/main/java/com/nubo/instruments/synchronization/repository/StatusMappingRepository.java

```java
package com.nubo.instruments.synchronization.repository;

import com.nubo.instruments.synchronization.models.entity.StatusMappingEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

public interface StatusMappingRepository extends JpaRepository<StatusMappingEntity, Long> {

    Optional<StatusMappingEntity> findByExternalSystemAndExternalCodeAndCategory(
            String externalSystem,
            String externalCode,
            String category);

    @Query("""
            SELECT sm
            FROM StatusMappingEntity sm
            WHERE sm.externalSystem = :externalSystem
              AND sm.category = :category
              AND UPPER(sm.externalCode) IN :externalCodes
            """)
    List<StatusMappingEntity> findByExternalSystemAndCategoryAndExternalCodeInIgnoreCase(
            @Param("externalSystem") String externalSystem,
            @Param("category") String category,
            @Param("externalCodes") Collection<String> externalCodes);
}

```

## src/main/java/com/nubo/instruments/synchronization/repository/StatusRepository.java

```java
package com.nubo.instruments.synchronization.repository;

import com.nubo.instruments.synchronization.models.entity.StatusEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StatusRepository extends JpaRepository<StatusEntity, Long> {
}

```

## src/main/java/com/nubo/instruments/synchronization/repository/TypeMappingRepository.java

```java
package com.nubo.instruments.synchronization.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.instruments.synchronization.models.entity.TypeMappingEntity;

public interface TypeMappingRepository extends JpaRepository<TypeMappingEntity, Long> {

    Optional<TypeMappingEntity> findByExternalSystemAndExternalCodeAndCategory(
            String externalSystem,
            String externalCode,
            String category);
}

```

## src/main/java/com/nubo/instruments/synchronization/service/BatchCacheService.java

```java
package com.nubo.instruments.synchronization.service;

import com.nubo.instruments.synchronization.models.entity.ClassEntity;
import com.nubo.instruments.synchronization.models.entity.CountryEntity;
import com.nubo.instruments.synchronization.models.entity.CurrencyEntity;
import com.nubo.instruments.synchronization.models.entity.DepositoryEntity;
import com.nubo.instruments.synchronization.models.entity.IssuerEntity;
import com.nubo.instruments.synchronization.models.entity.MarketEntity;
import com.nubo.instruments.synchronization.models.entity.SegmentEntity;
import com.nubo.instruments.synchronization.models.entity.StatusEntity;
import com.nubo.instruments.synchronization.models.entity.TypeEntity;

public interface BatchCacheService {

    DepositoryEntity findDepositoryEntityById(String depositoryId);

    CurrencyEntity findCurrencyEntityByCode(String currencyCode);

    CountryEntity findCountryEntityByCode(String countryCode);

    ClassEntity findClassEntityById(String classId);

    SegmentEntity findSegmentEntity(Integer segmentId);

    StatusEntity findStatusEntityFromMapping(
            String externalStatusCode,
            String externalSystem,
            String category);

    TypeEntity findTypeEntityFromMapping(
            String externalTypeCode,
            String externalSystem,
            String category);

    IssuerEntity findIssuerEntityByCode(String issuerCode);

    MarketEntity findMarketEntityById(String marketId);

    void warmUpMasterDataCaches();

    void clearMasterDataCaches();

}

```

## src/main/java/com/nubo/instruments/synchronization/service/EquitySecurityService.java

```java
package com.nubo.instruments.synchronization.service;

import com.nubo.instruments.synchronization.models.domain.InstrumentsResult;
import com.nubo.instruments.synchronization.models.domain.KafkaMessage;
import com.nubo.instruments.synchronization.models.dto.request.DataReferenceInstrumentsInDto;

import java.util.List;

public interface EquitySecurityService {

    InstrumentsResult createUpdateEquitySecurities(
            DataReferenceInstrumentsInDto dto
    );

    InstrumentsResult batchCreateUpdateEquitySecurities(List<KafkaMessage> kafkaMessageList);
}

```

## src/main/java/com/nubo/instruments/synchronization/service/IsinNumberService.java

```java
package com.nubo.instruments.synchronization.service;

import com.nubo.instruments.synchronization.models.domain.InstrumentsResult;
import com.nubo.instruments.synchronization.models.domain.KafkaMessage;
import com.nubo.instruments.synchronization.models.dto.request.DataReferenceInstrumentsInDto;

import java.util.List;

public interface IsinNumberService {

    InstrumentsResult createUpdateIsinNumber(DataReferenceInstrumentsInDto dataReferenceInstrumentsInDto);

    InstrumentsResult batchCreateUpdateIsinNumbers(List<KafkaMessage> kafkaMessageList);

}

```

## src/main/java/com/nubo/instruments/synchronization/service/SecurityTitleService.java

```java
package com.nubo.instruments.synchronization.service;

import com.nubo.instruments.synchronization.models.domain.InstrumentsResult;
import com.nubo.instruments.synchronization.models.domain.KafkaMessage;
import com.nubo.instruments.synchronization.models.dto.request.DataReferenceInstrumentsInDto;

import java.util.List;

public interface SecurityTitleService {

    InstrumentsResult createUpdateSecurityTitleEntity(DataReferenceInstrumentsInDto dataReferenceInstrumentsInDto);

    /**
     * Inserción batch optimizada de SecurityTitleEntity.
     * @param dtos lista de DTOs de entrada
     * @return resultado con métricas de procesamiento
     */
    InstrumentsResult batchInsertSecurityTitles(List<KafkaMessage> kafkaMessageList);

}

```

## src/main/java/com/nubo/instruments/synchronization/service/SynchronizationService.java

```java
package com.nubo.instruments.synchronization.service;

import com.nubo.instruments.synchronization.models.domain.KafkaMessage;

import java.util.List;

public interface SynchronizationService {

    void synchronizeDataReferenceAndInstruments(KafkaMessage kafkaMessage);

    void synchronizeDataReferenceAndInstrumentsBatch(List<KafkaMessage> kafkaMessageList);
}

```

## src/main/java/com/nubo/instruments/synchronization/service/impl/BatchCacheServiceImpl.java

```java
package com.nubo.instruments.synchronization.service.impl;

import org.springframework.cache.Cache;
import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import com.nubo.instruments.synchronization.exception.ServiceException;
import com.nubo.instruments.synchronization.exception.error.ErrorCode;
import com.nubo.instruments.synchronization.models.entity.ClassEntity;
import com.nubo.instruments.synchronization.models.entity.CountryEntity;
import com.nubo.instruments.synchronization.models.entity.CurrencyEntity;
import com.nubo.instruments.synchronization.models.entity.DepositoryEntity;
import com.nubo.instruments.synchronization.models.entity.IssuerEntity;
import com.nubo.instruments.synchronization.models.entity.MarketEntity;
import com.nubo.instruments.synchronization.models.entity.SegmentEntity;
import com.nubo.instruments.synchronization.models.entity.StatusEntity;
import com.nubo.instruments.synchronization.models.entity.StatusMappingEntity;
import com.nubo.instruments.synchronization.models.entity.TypeEntity;
import com.nubo.instruments.synchronization.models.enums.SegmentDefaultEnum;
import com.nubo.instruments.synchronization.repository.ClassRepository;
import com.nubo.instruments.synchronization.repository.CountryRepository;
import com.nubo.instruments.synchronization.repository.CurrencyRepository;
import com.nubo.instruments.synchronization.repository.DepositoryRepository;
import com.nubo.instruments.synchronization.repository.IssuerRepository;
import com.nubo.instruments.synchronization.repository.MarketRepository;
import com.nubo.instruments.synchronization.repository.SegmentRepository;
import com.nubo.instruments.synchronization.repository.StatusMappingRepository;
import com.nubo.instruments.synchronization.repository.StatusRepository;
import com.nubo.instruments.synchronization.repository.TypeMappingRepository;
import com.nubo.instruments.synchronization.service.BatchCacheService;

import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class BatchCacheServiceImpl implements BatchCacheService {

    private final DepositoryRepository depositoryRepository;
    private final CurrencyRepository currencyRepository;
    private final CountryRepository countryRepository;
    private final ClassRepository classRepository;
    private final SegmentRepository segmentRepository;
    private final StatusRepository statusRepository;
    private final StatusMappingRepository statusMappingRepository;
    private final IssuerRepository issuerRepository;
    private final MarketRepository marketRepository;
    private final TypeMappingRepository typeMappingRepository;
    private final CacheManager cacheManager;

    @PostConstruct
    public void initCache() {
        warmUpMasterDataCaches();
    }

    @Override
    @Cacheable(value = "depositories", key = "#depositoryId")
    public DepositoryEntity findDepositoryEntityById(String depositoryId) {
        if (ObjectUtils.isEmpty(depositoryId)) {
            log.error("Depository id is 'null' or empty");
            throw new ServiceException(ErrorCode.DEPOSITORY_NOT_FOUND, "Depository id is 'null' or empty");
        }

        return depositoryRepository.findById(depositoryId)
                .orElseThrow(() -> {
                    log.error("Depository not found for id {}", depositoryId);
                    return new ServiceException(ErrorCode.DEPOSITORY_NOT_FOUND,
                            "Depository not found for id: " + depositoryId);
                });
    }

    @Override
    @Cacheable(value = "currencies", key = "#currencyCode")
    public CurrencyEntity findCurrencyEntityByCode(String currencyCode) {
        if (ObjectUtils.isEmpty(currencyCode)) {
            log.error("Currency code is 'null' or empty");
            throw new ServiceException(ErrorCode.NOT_FOUND, "Currency code is 'null' or empty");
        }
        return currencyRepository.findByCodeIgnoreCase(currencyCode)
                .orElseThrow(() -> {
                    log.error("Currency not found for code {}", currencyCode);
                    return new ServiceException(ErrorCode.NOT_FOUND, "Currency not found for code: " + currencyCode);
                });
    }

    @Override
    @Cacheable(value = "countries", key = "#countryCode")
    public CountryEntity findCountryEntityByCode(String countryCode) {
        if (ObjectUtils.isEmpty(countryCode)) {
            log.error("Country code is 'null' or empty");
            throw new ServiceException(ErrorCode.NOT_FOUND, "Country code is 'null' or empty");
        }
        return countryRepository.findByCodeIgnoreCase(countryCode)
                .orElseThrow(() -> {
                    log.error("Country not found for code {}", countryCode);
                    return new ServiceException(ErrorCode.NOT_FOUND, "Country not found for code: " + countryCode);
                });
    }

    @Override
    @Cacheable(value = "clazz", key = "#classId")
    public ClassEntity findClassEntityById(String classId) {
        if (ObjectUtils.isEmpty(classId)) {
            log.error("Class id is 'null' or empty");
            throw new ServiceException(ErrorCode.NOT_FOUND, "Class id is 'null' or empty");
        }
        return classRepository.findById(classId)
                .orElseThrow(() -> {
                    log.error("Class not found for id {}", classId);
                    return new ServiceException(ErrorCode.NOT_FOUND, "Class not found for id: " + classId);
                });
    }

    @Override
    @Cacheable(value = "segments", key = "#segmentId")
    public SegmentEntity findSegmentEntity(Integer segmentId) {
        Long id = segmentId != null
                ? segmentId.longValue()
                : SegmentDefaultEnum.LOCAL.getId();

        return segmentRepository.findById(id)
                .orElseGet(() -> {
                    log.warn("Segment {} not found. Using default LOCAL", id);

                    return segmentRepository.findById(SegmentDefaultEnum.LOCAL.getId())
                            .orElseThrow(() -> new ServiceException(
                                    ErrorCode.SEGMENT_NOT_FOUND,
                                    "Default segment LOCAL not found in DB"));
                });
    }

    @Override
    @Cacheable(value = "statusMapping", key = "#externalStatusCode + '-' + #externalSystem + '-' + #category")
    public StatusEntity findStatusEntityFromMapping(
            String externalStatusCode,
            String externalSystem,
            String category) {

        StatusMappingEntity mapping = statusMappingRepository
                .findByExternalSystemAndExternalCodeAndCategory(
                        externalSystem,
                        externalStatusCode,
                        category)
                .orElseThrow(() -> new ServiceException(
                        ErrorCode.STATUS_MAPPING_NOT_FOUND,
                        HttpStatus.NOT_FOUND));

        return mapping.getStatus();
    }

    @Override
    @Cacheable(value = "typeMapping", key = "#externalTypeCode + '-' + #externalSystem + '-' + #category")
    public TypeEntity findTypeEntityFromMapping(
            String externalTypeCode,
            String externalSystem,
            String category) {
        if (ObjectUtils.isEmpty(externalTypeCode) || ObjectUtils.isEmpty(externalSystem)
                || ObjectUtils.isEmpty(category)) {
            log.error("External type code, external system, or category is null or empty");
            throw new ServiceException(ErrorCode.TYPE_MAPPING_NOT_FOUND,
                    "External type code, external system, or category is null or empty");
        }
        return typeMappingRepository
                .findByExternalSystemAndExternalCodeAndCategory(
                        externalSystem,
                        externalTypeCode,
                        category)
                .orElseThrow(() -> new ServiceException(
                        ErrorCode.TYPE_MAPPING_NOT_FOUND,
                        "externalTypeCode: " + externalTypeCode + ", externalSystem: " + externalSystem + ", category: "
                                + category,
                        HttpStatus.NOT_FOUND))
                .getType();
    }

    @Override
    @Cacheable(value = "issuers", key = "#issuerCode")
    public IssuerEntity findIssuerEntityByCode(String issuerCode) {
        if (ObjectUtils.isEmpty(issuerCode)) {
            log.error("Issuer code is 'null' or empty");
            throw new ServiceException(ErrorCode.ISSUER_NOT_FOUND, "Issuer code is 'null' or empty");
        }

        return issuerRepository.findByCodeIgnoreCase(issuerCode)
                .orElseThrow(() -> {
                    log.error("Issuer not found for code {}", issuerCode);
                    return new ServiceException(ErrorCode.ISSUER_NOT_FOUND,
                            "Issuer not found for code: '" + issuerCode + "'", HttpStatus.NOT_FOUND);
                });
    }

    @Override
    @Cacheable(value = "markets", key = "#marketId")
    public MarketEntity findMarketEntityById(String marketId) {
        String resolvedMarketId = marketId;
        if (ObjectUtils.isEmpty(resolvedMarketId)) {
            log.warn("MarketId is null/empty from message, using default 1");
            resolvedMarketId = "1";
        }

        final String finalMarketId = resolvedMarketId;
        return marketRepository.findById(finalMarketId)
                .orElseThrow(() -> {
                    log.error("Market not found for id {}", finalMarketId);
                    return new ServiceException(
                            ErrorCode.MARKET_NOT_FOUND,
                            "Market not found for id: " + finalMarketId);
                });
    }

    @Override
    public void warmUpMasterDataCaches() {
        log.info("[CACHE] Starting master data warm-up");

        putAll(depositoryRepository.findAll(), "depositories", DepositoryEntity::getId);
        putAll(currencyRepository.findAll(), "currencies", CurrencyEntity::getCode);
        putAll(countryRepository.findAll(), "countries", CountryEntity::getCode);
        putAll(classRepository.findAll(), "clazz", ClassEntity::getId);
        putAll(segmentRepository.findAll(), "segments", s -> s.getId().intValue());
        putAll(issuerRepository.findAll(), "issuers", IssuerEntity::getCode);
        putAll(marketRepository.findAll(), "markets", MarketEntity::getId);

        Cache statusMappingCache = cacheManager.getCache("statusMapping");
        if (statusMappingCache != null) {
            statusMappingRepository.findAll().forEach(mapping -> {
                if (mapping.getStatus() == null) {
                    return;
                }
                statusRepository.findById(mapping.getStatus().getId()).ifPresent(status -> {
                    String key = mapping.getExternalCode() + "-" + mapping.getExternalSystem() + "-"
                            + mapping.getCategory();
                    statusMappingCache.put(key, status);
                });
            });
        }

        log.info("[CACHE] Master data warm-up finished");
    }

    @Override
    public void clearMasterDataCaches() {
        cacheManager.getCacheNames().forEach(name -> {
            Cache cache = cacheManager.getCache(name);
            if (cache != null) {
                cache.clear();
            }
        });
        log.info("[CACHE] Cleared all configured caches");
    }

    private <T, K> void putAll(java.util.List<T> source, String cacheName,
            java.util.function.Function<T, K> keyMapper) {
        Cache cache = cacheManager.getCache(cacheName);
        if (cache == null) {
            return;
        }
        source.forEach(item -> {
            K key = keyMapper.apply(item);
            if (key != null) {
                cache.put(key, item);
            }
        });
    }

}

```

## src/main/java/com/nubo/instruments/synchronization/service/impl/EquitySecurityServiceImpl.java

```java
package com.nubo.instruments.synchronization.service.impl;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;

import com.nubo.instruments.synchronization.application.properties.PropertiesConfig;
import com.nubo.instruments.synchronization.application.util.ApplicationUtils;
import com.nubo.instruments.synchronization.exception.ServiceException;
import com.nubo.instruments.synchronization.exception.error.ErrorCode;
import com.nubo.instruments.synchronization.models.domain.InstrumentsResult;
import com.nubo.instruments.synchronization.models.domain.KafkaMessage;
import com.nubo.instruments.synchronization.models.dto.request.DataReferenceInstrumentsInDto;
import com.nubo.instruments.synchronization.models.entity.EquitySecurityEntity;
import com.nubo.instruments.synchronization.models.entity.SecurityTitleEntity;
import com.nubo.instruments.synchronization.repository.EquitySecurityRepository;
import com.nubo.instruments.synchronization.repository.SecurityTitleRepository;
import com.nubo.instruments.synchronization.service.EquitySecurityService;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class EquitySecurityServiceImpl implements EquitySecurityService {

    private final EquitySecurityRepository equitySecurityRepository;
    private final SecurityTitleRepository securityTitleRepository;
    private final PropertiesConfig propertiesConfig;

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public InstrumentsResult createUpdateEquitySecurities(
            DataReferenceInstrumentsInDto dto) {

        validateMnemonic(dto.getMnemonic());

        SecurityTitleEntity title = this.validateSecurityTileByMnemonic(dto.getMnemonic());

        EquitySecurityEntity entity = this.validateEquitySecurityById(title.getId(), title);

        equitySecurityRepository.save(mapToEquitySecurityEntity(dto, title, entity));

        return new InstrumentsResult(null, null);
    }

    @Override
    @Transactional
    public InstrumentsResult batchCreateUpdateEquitySecurities(List<KafkaMessage> kafkaMessageList) {
        if (kafkaMessageList == null || kafkaMessageList.isEmpty()) {
            return new InstrumentsResult(0L, "batch");
        }

        List<DataReferenceInstrumentsInDto> dtos = kafkaMessageList.stream()
                .filter(Objects::nonNull)
                .map(KafkaMessage::dataReferenceInstrumentsInDto)
                .filter(Objects::nonNull)
                .toList();

        long startTotal = System.currentTimeMillis();
        log.info("[BATCH] EquitySecurity start. totalReceived={}", dtos.size());

        long startPreValidation = System.currentTimeMillis();
        BatchMetrics metrics = new BatchMetrics();
        Map<String, SecurityTitleEntity> securityTitleByMnemonicMap = preloadSecurityTitleByMnemonic(dtos);
        Map<Long, EquitySecurityEntity> existingBySecurityId = preloadEquitySecurityById(securityTitleByMnemonicMap);
        long preValidationMs = System.currentTimeMillis() - startPreValidation;

        long startMapping = System.currentTimeMillis();
        List<EquitySecurityEntity> entitiesToPersist = new ArrayList<>(dtos.size());

        for (DataReferenceInstrumentsInDto dto : dtos) {
            try {
                validateMnemonic(dto.getMnemonic());
                String normalizedMnemonic = ApplicationUtils.toUpper(dto.getMnemonic());
                SecurityTitleEntity securityTitle = securityTitleByMnemonicMap.get(normalizedMnemonic);
                if (securityTitle == null) {
                    throw new ServiceException(ErrorCode.SECURITY_TITLE_NOT_FOUND, "mnemonic:" + dto.getMnemonic());
                }

                EquitySecurityEntity baseEntity = existingBySecurityId.getOrDefault(
                        securityTitle.getId(),
                        EquitySecurityEntity.builder().securityTitle(securityTitle).build());
                EquitySecurityEntity mappedEntity = mapToEquitySecurityEntity(dto, securityTitle, baseEntity);

                entitiesToPersist.add(mappedEntity);
                existingBySecurityId.put(securityTitle.getId(), mappedEntity);
                metrics.validRecords++;
            } catch (ServiceException ex) {
                metrics.functionalRejected++;
                metrics.addError(dto, ex);
                log.warn("[BATCH] EquitySecurity functional reject count={} reason={}",
                        metrics.functionalRejected, ex.getMessage());
            } catch (Exception ex) {
                metrics.technicalErrors++;
                metrics.addError(dto, ex);
                log.error("[BATCH] Unexpected technical error while mapping EquitySecurity", ex);
            }
        }
        long mappingMs = System.currentTimeMillis() - startMapping;

        long startPersistence = System.currentTimeMillis();
        persistInChunks(entitiesToPersist, metrics);
        long persistenceMs = System.currentTimeMillis() - startPersistence;

        long elapsed = System.currentTimeMillis() - startTotal;
        logBatchSummary(dtos.size(), metrics, preValidationMs, mappingMs, persistenceMs, elapsed);

        return new InstrumentsResult((long) metrics.insertedOrUpdated, "batch");
    }

    private void persistInChunks(List<EquitySecurityEntity> entitiesToPersist, BatchMetrics metrics) {
        if (entitiesToPersist.isEmpty()) {
            return;
        }

        List<EquitySecurityEntity> chunk = new ArrayList<>(propertiesConfig.getPersistenceBatchSize());
        for (EquitySecurityEntity entity : entitiesToPersist) {
            chunk.add(entity);
            if (chunk.size() >= propertiesConfig.getPersistenceBatchSize()) {
                persistChunk(chunk, metrics);
                chunk.clear();
            }
        }

        if (!chunk.isEmpty()) {
            persistChunk(chunk, metrics);
        }
    }

    private void persistChunk(List<EquitySecurityEntity> chunk, BatchMetrics metrics) {
        try {
            equitySecurityRepository.saveAll(chunk);
            equitySecurityRepository.flush();
            metrics.insertedOrUpdated += chunk.size();
            clearPersistenceContext();
        } catch (Exception batchException) {
            log.error("[BATCH] Chunk persistence failed, fallback to record by record. chunkSize={}", chunk.size(),
                    batchException);
            clearPersistenceContext();

            for (EquitySecurityEntity entity : chunk) {
                try {
                    equitySecurityRepository.save(entity);
                    equitySecurityRepository.flush();
                    metrics.insertedOrUpdated++;
                } catch (Exception entityException) {
                    metrics.technicalErrors++;
                    metrics.addPersistenceError(entity, entityException);
                    log.error("[BATCH] Technical error persisting EquitySecurity. mnemonic={}",
                            entity.getSecurityTitle() != null ? entity.getSecurityTitle().getMnemonic() : "<NULL>",
                            entityException);
                }
            }
            clearPersistenceContext();
        }
    }

    private void clearPersistenceContext() {
        if (entityManager != null) {
            entityManager.clear();
        }
    }

    private void logBatchSummary(
            int totalReceived,
            BatchMetrics metrics,
            long preValidationMs,
            long mappingMs,
            long persistenceMs,
            long totalMs) {
        log.info(
                "[BATCH] EquitySecurity completed. totalReceived={}, totalValid={}, totalRejected={}, totalInsertedOrUpdated={}, technicalErrors={}, preValidationMs={}, mappingMs={}, persistenceMs={}, totalMs={}",
                totalReceived,
                metrics.validRecords,
                metrics.functionalRejected,
                metrics.insertedOrUpdated,
                metrics.technicalErrors,
                preValidationMs,
                mappingMs,
                persistenceMs,
                totalMs);

        if (!metrics.errors.isEmpty()) {
            log.error("[BATCH] EquitySecurity errors (concatenated) -- count: {} -- errors: {}",
                    metrics.errors.size(), String.join(" | ", metrics.errors));
        }
    }

    private static class BatchMetrics {
        private int validRecords;
        private int functionalRejected;
        private int technicalErrors;
        private int insertedOrUpdated;
        private final List<String> errors = new ArrayList<>();

        private void addError(DataReferenceInstrumentsInDto dto, Exception exception) {
            String mnemonic = dto == null || dto.getMnemonic() == null ? "<NULL>" : dto.getMnemonic();
            errors.add("mnemonic=" + mnemonic + ", error=" + exception.getMessage());
        }

        private void addPersistenceError(EquitySecurityEntity entity, Exception exception) {
            String mnemonic = (entity == null || entity.getSecurityTitle() == null
                    || entity.getSecurityTitle().getMnemonic() == null)
                            ? "<NULL>"
                            : entity.getSecurityTitle().getMnemonic();
            errors.add("mnemonic=" + mnemonic + ", error=" + exception.getMessage());
        }
    }

    private EquitySecurityEntity mapToEquitySecurityEntity(
            DataReferenceInstrumentsInDto dto,
            SecurityTitleEntity title,
            EquitySecurityEntity currentEntity) {
        return currentEntity.toBuilder()
                .securityTitle(title)
                .parent(false)
                .amountIssued(dto.getIssuedAmount())
                .nominalPrice(validateNominalPrice(dto.getNominalPrice()))
                .nominalPriceDate(parseDate(dto.getNominalPriceDate()))
                .negotiate(Boolean.TRUE.equals(dto.getNegotiableAsset()))
                .dateEquityValue(null)
                .equityValue(null)
                .dateFaceValue(null)
                .faceValue(null)
                .numberOutstanding(dto.getOutstandingShares())
                .submission(null)
                .liquidity(null)
                .specialRights(null)
                .exDividendDate(null)
                .tradesOnLoan(dto.getTradesOnLoan())
                .tradesOnRepo(dto.getTradesOnRepo())
                .lastModifyUser(propertiesConfig.getApiName())
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyDate(LocalDateTime.now())
                .lastModifyIp(propertiesConfig.getApiName())
                .build();
    }

    private Map<String, SecurityTitleEntity> preloadSecurityTitleByMnemonic(List<DataReferenceInstrumentsInDto> dtos) {
        Set<String> mnemonicsUpper = dtos.stream()
                .map(DataReferenceInstrumentsInDto::getMnemonic)
                .filter(mnemonic -> !ObjectUtils.isEmpty(mnemonic))
                .map(String::trim)
                .filter(mnemonic -> !mnemonic.isEmpty())
                .map(ApplicationUtils::toUpper)
                .collect(Collectors.toSet());

        if (mnemonicsUpper.isEmpty()) {
            return new HashMap<>();
        }

        Map<String, SecurityTitleEntity> existingByMnemonic = new HashMap<>();
        securityTitleRepository.findByMnemonicIgnoreCaseIn(mnemonicsUpper).forEach(entity -> {
            if (entity.getMnemonic() != null) {
                existingByMnemonic.put(ApplicationUtils.toUpper(entity.getMnemonic()), entity);
            }
        });

        return existingByMnemonic;
    }

    private Map<Long, EquitySecurityEntity> preloadEquitySecurityById(
            Map<String, SecurityTitleEntity> securityTitleByMnemonicMap) {
        Set<Long> securityIds = new HashSet<>();
        securityTitleByMnemonicMap.values().forEach(title -> {
            if (title.getId() != null) {
                securityIds.add(title.getId());
            }
        });

        Map<Long, EquitySecurityEntity> existingBySecurityId = new HashMap<>();
        if (!securityIds.isEmpty()) {
            equitySecurityRepository.findAllById(securityIds)
                    .forEach(entity -> existingBySecurityId.put(entity.getId(), entity));
        }
        return existingBySecurityId;
    }

    // VALIDATIONS

    private void validateMnemonic(String mnemonic) {
        if (mnemonic == null || mnemonic.isBlank()) {
            throw new ServiceException(
                    ErrorCode.BAD_REQUEST,
                    "Mnemonic is null or empty");
        }
    }

    private BigDecimal validateNominalPrice(BigDecimal price) {
        if (price == null) {
            return BigDecimal.ZERO;
        }
        if (price.compareTo(BigDecimal.ZERO) < 0) {
            throw new ServiceException(
                    ErrorCode.BAD_REQUEST,
                    "Nominal price cannot be negative");
        }
        return price;
    }

    private LocalDate parseDate(String date) {
        return date != null ? LocalDate.parse(date) : null;
    }

    private SecurityTitleEntity validateSecurityTileByMnemonic(String mnemonic) {
        if (mnemonic == null) {
            throw new ServiceException(ErrorCode.SECURITY_TITLE_NOT_FOUND, "mnemonic:null");
        }
        return securityTitleRepository.findByMnemonic(mnemonic)
                .orElseThrow(() -> new ServiceException(ErrorCode.SECURITY_TITLE_NOT_FOUND,
                        "mnemonic:" + mnemonic));
    }

    private EquitySecurityEntity validateEquitySecurityById(Long equitySecurityId,
            SecurityTitleEntity securityTitleEntity) {
        if (equitySecurityId == null) {
            throw new ServiceException(ErrorCode.EQUITY_SECURITY_NOT_FOUND, "equitySecurityId:null");
        }
        return equitySecurityRepository.findById(equitySecurityId)
                .orElse(
                        EquitySecurityEntity.builder()
                                .securityTitle(securityTitleEntity)
                                .build());
    }
}

```

## src/main/java/com/nubo/instruments/synchronization/service/impl/IsinNumberServiceImpl.java

```java
package com.nubo.instruments.synchronization.service.impl;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;

import com.nubo.instruments.synchronization.application.properties.PropertiesConfig;
import com.nubo.instruments.synchronization.application.util.ApplicationUtils;
import com.nubo.instruments.synchronization.exception.ServiceException;
import com.nubo.instruments.synchronization.exception.error.ErrorCode;
import com.nubo.instruments.synchronization.models.domain.InstrumentsResult;
import com.nubo.instruments.synchronization.models.domain.KafkaMessage;
import com.nubo.instruments.synchronization.models.dto.request.DataReferenceInstrumentsInDto;
import com.nubo.instruments.synchronization.models.entity.IsinNumberEntity;
import com.nubo.instruments.synchronization.models.entity.SecurityTitleEntity;
import com.nubo.instruments.synchronization.repository.IsinNumberRepository;
import com.nubo.instruments.synchronization.repository.SecurityTitleRepository;
import com.nubo.instruments.synchronization.service.IsinNumberService;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class IsinNumberServiceImpl implements IsinNumberService {

    private final SecurityTitleRepository securityTitleRepository;
    private final IsinNumberRepository isinNumberRepository;
    private final PropertiesConfig propertiesConfig;

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public InstrumentsResult createUpdateIsinNumber(
            DataReferenceInstrumentsInDto dataReferenceInstrumentsInDto) {

        log.debug("Start method createUpdateIsinNumber");

        validateMnemonic(dataReferenceInstrumentsInDto.getMnemonic());

        SecurityTitleEntity securityTitleEntity =
                this.validateSecurityTileByMnemonic(
                        dataReferenceInstrumentsInDto.getMnemonic());

        IsinNumberEntity isinNumberEntityLast =
                this.findIsinNumberBySecurityId(
                        securityTitleEntity.getId());

        IsinNumberEntity isinNumberEntity =
                mapToIsinNumberEntity(
                        dataReferenceInstrumentsInDto,
                        securityTitleEntity,
                        isinNumberEntityLast);

        isinNumberRepository.save(isinNumberEntity);

        log.debug("End method createUpdateIsinNumber");

        return new InstrumentsResult(null, null);
    }

    @Override
    @Transactional
    public InstrumentsResult batchCreateUpdateIsinNumbers(
            List<KafkaMessage> kafkaMessageList) {

        if (kafkaMessageList == null || kafkaMessageList.isEmpty()) {
            return new InstrumentsResult(0L, "batch");
        }

        List<DataReferenceInstrumentsInDto> dtos = kafkaMessageList.stream()
                .filter(Objects::nonNull)
                .map(KafkaMessage::dataReferenceInstrumentsInDto)
                .filter(Objects::nonNull)
                .toList();

        long startTotal = System.currentTimeMillis();

        log.info(
                "[BATCH] IsinNumber start. totalReceived={}",
                dtos.size());

        long startPreValidation = System.currentTimeMillis();

        BatchMetrics metrics = new BatchMetrics();

        Map<String, SecurityTitleEntity> securityTitleByMnemonicMap =
                preloadSecurityTitleByMnemonic(dtos);

        Map<Long, IsinNumberEntity> existingBySecurityId =
                preloadIsinNumberBySecurityId(
                        securityTitleByMnemonicMap);

        long preValidationMs =
                System.currentTimeMillis() - startPreValidation;

        long startMapping = System.currentTimeMillis();

        List<IsinNumberEntity> entitiesToPersist =
                new ArrayList<>(dtos.size());

        for (DataReferenceInstrumentsInDto dto : dtos) {

            try {

                validateMnemonic(dto.getMnemonic());

                String normalizedMnemonic =
                        ApplicationUtils.toUpper(
                                dto.getMnemonic());

                SecurityTitleEntity securityTitleEntity =
                        securityTitleByMnemonicMap.get(
                                normalizedMnemonic);

                if (securityTitleEntity == null) {
                    throw new ServiceException(
                            ErrorCode.SECURITY_TITLE_NOT_FOUND,
                            "mnemonic:'" + dto.getMnemonic() + "'");
                }

                Long securityId =
                        securityTitleEntity.getId();

                IsinNumberEntity currentEntity =
                        existingBySecurityId.getOrDefault(
                                securityId,
                                IsinNumberEntity.builder().build());

                IsinNumberEntity mappedEntity =
                        mapToIsinNumberEntity(
                                dto,
                                securityTitleEntity,
                                currentEntity);

                entitiesToPersist.add(mappedEntity);

                existingBySecurityId.put(
                        securityId,
                        mappedEntity);

                metrics.validRecords++;

            } catch (ServiceException ex) {

                metrics.functionalRejected++;
                metrics.addError(dto, ex);

                log.warn(
                        "[BATCH] IsinNumber functional reject count={} reason={}",
                        metrics.functionalRejected,
                        ex.getMessage());

            } catch (Exception ex) {

                metrics.technicalErrors++;
                metrics.addError(dto, ex);

                log.error(
                        "[BATCH] Unexpected technical error while mapping IsinNumber",
                        ex);
            }
        }

        long mappingMs =
                System.currentTimeMillis() - startMapping;

        long startPersistence =
                System.currentTimeMillis();

        persistInChunks(
                entitiesToPersist,
                metrics);

        long persistenceMs =
                System.currentTimeMillis() - startPersistence;

        long elapsed =
                System.currentTimeMillis() - startTotal;

        logBatchSummary(
                dtos.size(),
                metrics,
                preValidationMs,
                mappingMs,
                persistenceMs,
                elapsed);

        return new InstrumentsResult(
                (long) metrics.insertedOrUpdated,
                "batch");
    }

    private Map<String, SecurityTitleEntity> preloadSecurityTitleByMnemonic(
            List<DataReferenceInstrumentsInDto> dtos) {

        Set<String> mnemonicsUpper = dtos.stream()
                .map(DataReferenceInstrumentsInDto::getMnemonic)
                .filter(mnemonic -> !ObjectUtils.isEmpty(mnemonic))
                .map(String::trim)
                .filter(mnemonic -> !mnemonic.isEmpty())
                .map(ApplicationUtils::toUpper)
                .collect(Collectors.toSet());

        if (mnemonicsUpper.isEmpty()) {
            return new HashMap<>();
        }

        Map<String, SecurityTitleEntity> existingByMnemonic =
                new HashMap<>();

        securityTitleRepository
                .findByMnemonicIgnoreCaseIn(mnemonicsUpper)
                .forEach(entity -> {

                    if (entity.getMnemonic() != null) {
                        existingByMnemonic.put(
                                ApplicationUtils.toUpper(
                                        entity.getMnemonic()),
                                entity);
                    }
                });

        return existingByMnemonic;
    }

    private Map<Long, IsinNumberEntity> preloadIsinNumberBySecurityId(
            Map<String, SecurityTitleEntity> securityTitleByMnemonicMap) {

        Set<Long> securityIds =
                securityTitleByMnemonicMap.values().stream()
                        .map(SecurityTitleEntity::getId)
                        .filter(Objects::nonNull)
                        .collect(Collectors.toSet());

        if (securityIds.isEmpty()) {
            return new HashMap<>();
        }

        Map<Long, IsinNumberEntity> existingBySecurityId =
                new HashMap<>();

        isinNumberRepository
                .findBySecurityTitle_IdIn(securityIds)
                .forEach(entity -> {

                    if (entity.getSecurityTitle() != null
                            && entity.getSecurityTitle().getId() != null) {

                        existingBySecurityId.put(
                                entity.getSecurityTitle().getId(),
                                entity);
                    }
                });

        return existingBySecurityId;
    }

    private void persistInChunks(
            List<IsinNumberEntity> entitiesToPersist,
            BatchMetrics metrics) {

        if (entitiesToPersist.isEmpty()) {
            return;
        }

        List<IsinNumberEntity> chunk =
                new ArrayList<>(
                        propertiesConfig.getPersistenceBatchSize());

        for (IsinNumberEntity entity : entitiesToPersist) {

            chunk.add(entity);

            if (chunk.size() >=
                    propertiesConfig.getPersistenceBatchSize()) {

                persistChunk(
                        chunk,
                        metrics);

                chunk.clear();
            }
        }

        if (!chunk.isEmpty()) {
            persistChunk(
                    chunk,
                    metrics);
        }
    }

    private void persistChunk(
            List<IsinNumberEntity> chunk,
            BatchMetrics metrics) {

        try {

            isinNumberRepository.saveAll(chunk);
            isinNumberRepository.flush();

            metrics.insertedOrUpdated +=
                    chunk.size();

            clearPersistenceContext();

        } catch (Exception batchException) {

            log.error(
                    "[BATCH] Chunk persistence failed, fallback to record by record. chunkSize={}",
                    chunk.size(),
                    batchException);

            clearPersistenceContext();

            for (IsinNumberEntity entity : chunk) {

                try {

                    isinNumberRepository.save(entity);
                    isinNumberRepository.flush();

                    metrics.insertedOrUpdated++;

                } catch (Exception entityException) {

                    metrics.technicalErrors++;

                    metrics.addPersistenceError(
                            entity,
                            entityException);

                    log.error(
                            "[BATCH] Technical error persisting IsinNumber. isin={}",
                            entity.getIsinNumber(),
                            entityException);
                }
            }

            clearPersistenceContext();
        }
    }

    private void clearPersistenceContext() {

        if (entityManager != null) {
            entityManager.clear();
        }
    }

    private void logBatchSummary(
            int totalReceived,
            BatchMetrics metrics,
            long preValidationMs,
            long mappingMs,
            long persistenceMs,
            long totalMs) {

        log.info(
                "[BATCH] IsinNumber completed. totalReceived={}, totalValid={}, totalRejected={}, totalInsertedOrUpdated={}, technicalErrors={}, preValidationMs={}, mappingMs={}, persistenceMs={}, totalMs={}",
                totalReceived,
                metrics.validRecords,
                metrics.functionalRejected,
                metrics.insertedOrUpdated,
                metrics.technicalErrors,
                preValidationMs,
                mappingMs,
                persistenceMs,
                totalMs);

        if (!metrics.errors.isEmpty()) {
            log.error(
                    "[BATCH] IsinNumber errors (concatenated) -- count: {} -- errors: {}",
                    metrics.errors.size(),
                    String.join(" | ", metrics.errors));
        }
    }

    private static class BatchMetrics {

        private int validRecords;
        private int functionalRejected;
        private int technicalErrors;
        private int insertedOrUpdated;

        private final List<String> errors =
                new ArrayList<>();

        private void addError(
                DataReferenceInstrumentsInDto dto,
                Exception exception) {

            String mnemonic =
                    dto == null || dto.getMnemonic() == null
                            ? "<NULL>"
                            : dto.getMnemonic();

            errors.add(
                    "mnemonic=" + mnemonic
                            + ", error="
                            + exception.getMessage());
        }

        private void addPersistenceError(
                IsinNumberEntity entity,
                Exception exception) {

            String isin =
                    entity == null
                            || entity.getIsinNumber() == null
                            ? "<NULL>"
                            : entity.getIsinNumber();

            errors.add(
                    "isin=" + isin
                            + ", error="
                            + exception.getMessage());
        }
    }

    private IsinNumberEntity mapToIsinNumberEntity(
            DataReferenceInstrumentsInDto dto,
            SecurityTitleEntity securityTitleEntity,
            IsinNumberEntity currentEntity) {

        return currentEntity.toBuilder()
                .isinNumber(securityTitleEntity.getIsin())
                .country(securityTitleEntity.getCountry())
                .market(securityTitleEntity.getMarket())
                .currency(securityTitleEntity.getCurrency())
                .securityTitle(securityTitleEntity)
                .description(dto.getDescription())
                .depository(securityTitleEntity.getDepository())
                .lastModifyUser(propertiesConfig.getApiName())
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyDate(LocalDateTime.now())
                .lastModifyIp(propertiesConfig.getApiName())
                .build();
    }

    private void validateMnemonic(String mnemonic) {

        if (mnemonic == null || mnemonic.isBlank()) {
            throw new ServiceException(
                    ErrorCode.BAD_REQUEST,
                    "Mnemonic is null or empty");
        }
    }

    private IsinNumberEntity findIsinNumberBySecurityId(
            Long securityId) {

        Optional<IsinNumberEntity> isinNumberEntityOptional =
                isinNumberRepository
                        .findBySecurityTitle_Id(
                                securityId);

        if (isinNumberEntityOptional.isPresent()) {
            return isinNumberEntityOptional.get();
        }

        log.warn(
                "ISIN number for securityId {} not found. Returning empty ISIN entity",
                securityId);

        return IsinNumberEntity.builder().build();
    }

    private SecurityTitleEntity validateSecurityTileByMnemonic(
            String mnemonic) {

        if (mnemonic == null) {

            throw new ServiceException(
                    ErrorCode.SECURITY_TITLE_NOT_FOUND,
                    "mnemonic:null");
        }

        return securityTitleRepository
                .findByMnemonic(mnemonic)
                .orElseThrow(() ->
                        new ServiceException(
                                ErrorCode.SECURITY_TITLE_NOT_FOUND,
                                "mnemonic:" + mnemonic));
    }
}
```

## src/main/java/com/nubo/instruments/synchronization/service/impl/SecurityTitleServiceImpl.java

```java
package com.nubo.instruments.synchronization.service.impl;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;

import com.nubo.instruments.synchronization.application.properties.PropertiesConfig;
import com.nubo.instruments.synchronization.application.util.ApplicationUtils;
import com.nubo.instruments.synchronization.exception.ServiceException;
import com.nubo.instruments.synchronization.exception.error.ErrorCode;
import com.nubo.instruments.synchronization.exception.kafka.KafkaErrorBuild;
import com.nubo.instruments.synchronization.kafka.producer.KafkaNuboProducerAdapter;
import com.nubo.instruments.synchronization.models.domain.InstrumentsResult;
import com.nubo.instruments.synchronization.models.domain.KafkaMessage;
import com.nubo.instruments.synchronization.models.dto.request.DataReferenceInstrumentsInDto;
import com.nubo.instruments.synchronization.models.entity.ClassEntity;
import com.nubo.instruments.synchronization.models.entity.CountryEntity;
import com.nubo.instruments.synchronization.models.entity.CurrencyEntity;
import com.nubo.instruments.synchronization.models.entity.DepositoryEntity;
import com.nubo.instruments.synchronization.models.entity.IssuerEntity;
import com.nubo.instruments.synchronization.models.entity.MarketEntity;
import com.nubo.instruments.synchronization.models.entity.SecurityTitleEntity;
import com.nubo.instruments.synchronization.models.entity.SegmentEntity;
import com.nubo.instruments.synchronization.models.entity.StatusEntity;
import com.nubo.instruments.synchronization.models.entity.TypeEntity;
import com.nubo.instruments.synchronization.models.enums.CountryEnum;
import com.nubo.instruments.synchronization.models.enums.StatusMappingEnum;
import com.nubo.instruments.synchronization.models.enums.TypeMappingEnum;
import com.nubo.instruments.synchronization.repository.SecurityTitleRepository;
import com.nubo.instruments.synchronization.service.BatchCacheService;
import com.nubo.instruments.synchronization.service.SecurityTitleService;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class SecurityTitleServiceImpl implements SecurityTitleService {

    private final SecurityTitleRepository securityTitleRepository;
    private final PropertiesConfig propertiesConfig;
    private final BatchCacheService batchCacheService;
    private final KafkaErrorBuild kafkaErrorBuild;

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public InstrumentsResult createUpdateSecurityTitleEntity(
            DataReferenceInstrumentsInDto dataReferenceInstrumentsInDto) {
        log.debug("start method createUpdateSecurityTitleEntity");

        SecurityTitleEntity securityTitleEntity = this.mapDtoToEntity(dataReferenceInstrumentsInDto, null);

        securityTitleRepository.save(securityTitleEntity);

        log.debug("End method createUpdateSecurityTitleEntity");
        return new InstrumentsResult(null, null);
    }

    @Override
    @Transactional
    public InstrumentsResult batchInsertSecurityTitles(List<KafkaMessage> kafkaMessageList) {
        if (kafkaMessageList == null || kafkaMessageList.isEmpty()) {
            return new InstrumentsResult(0L, "batch");
        }

        List<DataReferenceInstrumentsInDto> dtos = kafkaMessageList.stream()
                .filter(Objects::nonNull)
                .map(KafkaMessage::dataReferenceInstrumentsInDto)
                .filter(Objects::nonNull)
                .toList();

        long startTotal = System.currentTimeMillis();
        log.info("[BATCH] SecurityTitle start. totalReceived={}", kafkaMessageList.size());

        long startPreValidation = System.currentTimeMillis();
        BatchMetrics metrics = new BatchMetrics();
        Map<String, SecurityTitleEntity> securityTitleByMnemonicMap = preloadSecurityTitleByMnemonic(dtos);
        long preValidationMs = System.currentTimeMillis() - startPreValidation;

        long startMapping = System.currentTimeMillis();
        List<SecurityTitleEntity> entitiesToPersist = new ArrayList<>(dtos.size());
        Set<String> processedMnemonics = new HashSet<>();

        for (KafkaMessage kafkaMessage : kafkaMessageList) {
            DataReferenceInstrumentsInDto dto = kafkaMessage.dataReferenceInstrumentsInDto();
            try {
                SecurityTitleEntity entity = mapDtoToEntityBatch(
                        dto,
                        securityTitleByMnemonicMap,
                        processedMnemonics,
                        metrics);
                entitiesToPersist.add(entity);
                metrics.validRecords++;
            } catch (ServiceException ex) {
                metrics.functionalRejected++;
                metrics.otherFunctionalRejects++;
                metrics.addFunctionalRejectSample(ex.getMessage());
                metrics.addError(dto, ex);
                kafkaErrorBuild.sendMessageErrorToKafka(kafkaMessage, ex);
            } catch (Exception ex) {
                metrics.technicalErrors++;
                metrics.addError(dto, ex);
                log.error("[BATCH] Unexpected technical error while mapping SecurityTitle", ex);
                kafkaErrorBuild.sendMessageErrorToKafka(kafkaMessage, ex);
            }
        }
        long mappingMs = System.currentTimeMillis() - startMapping;

        long startPersistence = System.currentTimeMillis();
        persistInChunks(entitiesToPersist, metrics);
        long persistenceMs = System.currentTimeMillis() - startPersistence;

        long elapsed = System.currentTimeMillis() - startTotal;
        logBatchSummary(dtos.size(), metrics, preValidationMs, mappingMs, persistenceMs, elapsed);

        return new InstrumentsResult((long) metrics.insertedOrUpdated, "batch");
    }

    private Map<String, SecurityTitleEntity> preloadSecurityTitleByMnemonic(List<DataReferenceInstrumentsInDto> dtos) {
        Set<String> mnemonicsUpper = dtos.stream()
                .map(DataReferenceInstrumentsInDto::getMnemonic)
                .filter(mnemonic -> !ObjectUtils.isEmpty(mnemonic))
                .map(String::trim)
                .filter(mnemonic -> !mnemonic.isEmpty())
                .map(ApplicationUtils::toUpper)
                .collect(Collectors.toSet());

        if (mnemonicsUpper.isEmpty()) {
            return new HashMap<>();
        }

        Map<String, SecurityTitleEntity> existingByMnemonic = new HashMap<>();
        securityTitleRepository.findByMnemonicIgnoreCaseIn(mnemonicsUpper).forEach(entity -> {
            if (entity.getMnemonic() != null) {
                existingByMnemonic.put(toUpper(entity.getMnemonic()), entity);
            }
        });

        return existingByMnemonic;
    }

    private SecurityTitleEntity mapDtoToEntityBatch(
            DataReferenceInstrumentsInDto dto,
            Map<String, SecurityTitleEntity> securityTitleByMnemonicMap,
            Set<String> processedMnemonics,
            BatchMetrics metrics) {
        String equityCode = validateEquityCode(dto.getInstrument());
        String mnemonic = validateMnemonic(dto.getMnemonic());
        String isin = validateIsinBatch(dto.getIsin(), dto.getListingCountry(), metrics);

        String normalizedMnemonic = toUpper(mnemonic);
        SecurityTitleEntity securityTitleLast = securityTitleByMnemonicMap.getOrDefault(normalizedMnemonic,
                new SecurityTitleEntity());

        if (!processedMnemonics.add(normalizedMnemonic)) {
            metrics.duplicateMnemonicRejected++;
            metrics.addDuplicateMnemonic(dto, securityTitleLast.getId());
            throw new ServiceException(ErrorCode.BAD_REQUEST,
                    "Duplicate mnemonic in same batch. equityCode=" + equityCode
                            + ", mnemonic=" + mnemonic);
        }

        String issuerCode = normalizeOrNull(dto.getIssuerCode());
        if (issuerCode == null) {
            metrics.missingIssuerRejected++;
            metrics.incrementMissingIssuer("<EMPTY>");
            throw new ServiceException(ErrorCode.ISSUER_NOT_FOUND, "Issuer code is null or empty");
        }

        IssuerEntity issuerEntity = findIssuerEntityByCode(toUpper(issuerCode), metrics);
        String cfiCode = resolveCfiCode(dto.getCfiCode());

        String currencyCode = normalizeRequired(dto.getCurrency(), "Currency code is null or empty");
        CurrencyEntity currencyEntity = batchCacheService.findCurrencyEntityByCode(toUpper(currencyCode));

        String countryCode = normalizeRequired(dto.getListingCountry(), "Country code is null or empty");
        CountryEntity countryEntity = batchCacheService.findCountryEntityByCode(toUpper(countryCode));

        String classId = normalizeRequired(dto.getClassification(), "Class id is null or empty");
        ClassEntity classEntity = batchCacheService.findClassEntityById(toUpper(classId));

        String depositoryId = normalizeRequired(dto.getDepositary(), "Depository id is null or empty");
        DepositoryEntity depositoryEntity = batchCacheService.findDepositoryEntityById(toUpper(depositoryId));

        MarketEntity marketEntity = batchCacheService.findMarketEntityById("1");

        SegmentEntity segmentEntity = batchCacheService.findSegmentEntity(dto.getSegmentId());

        String statusCode = normalizeRequired(dto.getStatus(), "Status code is null or empty");
        StatusEntity statusEntity = batchCacheService.findStatusEntityFromMapping(toUpper(statusCode),
                StatusMappingEnum.INSTRUMENTO_RV_REFERENCE_DATA.getExternalSystem(),
                StatusMappingEnum.INSTRUMENTO_RV_REFERENCE_DATA.getCategory());

        TypeEntity marketType = ObjectUtils.isEmpty(dto.getMarketType()) ? null
                : batchCacheService.findTypeEntityFromMapping(
                        dto.getMarketType(),
                        TypeMappingEnum.INSTRUMENTO_RV_REFERENCE_DATA.getExternalSystem(),
                        TypeMappingEnum.INSTRUMENTO_RV_REFERENCE_DATA.getCategory());

        SecurityTitleEntity mapped = securityTitleLast.toBuilder()
                .market(marketEntity)
                .equityCode(equityCode)
                .mnemonic(mnemonic)
                .isin(isin)
                .cfi(cfiCode)
                .currency(currencyEntity)
                .settlementPeriod("T2")
                .listingDate(dto.getListingDate())
                .delistingDate(dto.getRetirementDate())
                .parent(Boolean.valueOf(dto.getStatusOB()))
                .status(statusEntity)
                .issuer(issuerEntity)
                .country(countryEntity)
                .amountIssued(resolveAmountIssued(dto.getIssuedAmount()))
                .clazz(classEntity)
                .segment(segmentEntity)
                .category(dto.getCategory())
                .depository(depositoryEntity)
                .punishmentRepo(null)
                .regulatoryCode(dto.getRegulatorCode())
                .marketType(marketType)
                .lastModifyUser(propertiesConfig.getApiName())
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyDate(OffsetDateTime.now())
                .lastModifyIp(propertiesConfig.getApiName())
                .build();

        securityTitleByMnemonicMap.put(normalizedMnemonic, mapped);
        return mapped;
    }

    private void persistInChunks(List<SecurityTitleEntity> entitiesToPersist, BatchMetrics metrics) {
        if (entitiesToPersist.isEmpty()) {
            return;
        }

        List<SecurityTitleEntity> chunk = new ArrayList<>(propertiesConfig.getPersistenceBatchSize());
        for (SecurityTitleEntity entity : entitiesToPersist) {
            chunk.add(entity);
            if (chunk.size() >= propertiesConfig.getPersistenceBatchSize()) {
                persistChunk(chunk, metrics);
                chunk.clear();
            }
        }

        if (!chunk.isEmpty()) {
            persistChunk(chunk, metrics);
        }
    }

    private void persistChunk(List<SecurityTitleEntity> chunk, BatchMetrics metrics) {
        try {
            securityTitleRepository.saveAll(chunk);
            securityTitleRepository.flush();
            metrics.insertedOrUpdated += chunk.size();
            clearPersistenceContext();
        } catch (Exception batchException) {
            log.error("[BATCH] Chunk persistence failed, fallback to record by record. chunkSize={}", chunk.size(),
                    batchException);
            clearPersistenceContext();

            for (SecurityTitleEntity entity : chunk) {
                try {
                    securityTitleRepository.save(entity);
                    securityTitleRepository.flush();
                    metrics.insertedOrUpdated++;
                } catch (Exception entityException) {
                    metrics.technicalErrors++;
                    metrics.addPersistenceError(entity, entityException);
                    log.error("[BATCH] Technical error persisting SecurityTitle. equityCode={}, mnemonic={}",
                            entity.getEquityCode(), entity.getMnemonic(), entityException);
                }
            }
            clearPersistenceContext();
        }
    }

    private void logBatchSummary(
            int totalReceived,
            BatchMetrics metrics,
            long preValidationMs,
            long mappingMs,
            long persistenceMs,
            long totalMs) {
        log.warn(
                "[BATCH] Functional summary - missingIssuers={}, emptyIsin={}, duplicateMnemonic={}, otherFunctional={}",
                metrics.missingIssuerRejected,
                metrics.emptyIsinRejected,
                metrics.duplicateMnemonicRejected,
                metrics.otherFunctionalRejects);

        if (!metrics.missingIssuerCounts.isEmpty()) {
            log.warn("[BATCH] Missing issuers: {}", topEntries(metrics.missingIssuerCounts, 10));
        }

        if (metrics.emptyIsinRejected > 0) {
            log.warn("[BATCH] Empty ISIN count={}, examples={}",
                    metrics.emptyIsinRejected,
                    metrics.emptyIsinExamples);
        }

        if (!metrics.duplicateMnemonicExamples.isEmpty()) {
            log.warn("[BATCH] Duplicate mnemonic examples={}", metrics.duplicateMnemonicExamples);
        }

        log.info(
                "[BATCH] SecurityTitle completed. totalReceived={}, totalValid={}, totalRejected={}, totalInsertedOrUpdated={}, technicalErrors={}, preValidationMs={}, mappingMs={}, persistenceMs={}, totalMs={}",
                totalReceived,
                metrics.validRecords,
                metrics.functionalRejected,
                metrics.insertedOrUpdated,
                metrics.technicalErrors,
                preValidationMs,
                mappingMs,
                persistenceMs,
                totalMs);

        if (!metrics.errors.isEmpty()) {
            log.error("[BATCH] SecurityTitle errors (concatenated) -- count: {} -- errors: {}",
                    metrics.errors.size(), String.join(" | ", metrics.errors));
        }
    }

    private String topEntries(Map<String, Integer> counters, int maxItems) {
        return counters.entrySet().stream()
                .sorted(Map.Entry.<String, Integer>comparingByValue(Comparator.reverseOrder()))
                .limit(maxItems)
                .map(entry -> entry.getKey() + "=" + entry.getValue())
                .collect(Collectors.joining(", "));
    }

    private String validateIsinBatch(String isin, String countryCode, BatchMetrics metrics) {
        if (CountryEnum.CHILE.getCode().equals(countryCode)) {
            return isin;
        }
        if (ObjectUtils.isEmpty(isin) || isin.isBlank()) {
            metrics.emptyIsinRejected++;
            if (metrics.emptyIsinExamples.size() < 5) {
                metrics.emptyIsinExamples.add("<EMPTY>");
            }
            throw new ServiceException(ErrorCode.BAD_REQUEST, "ISIN is null or empty");
        }

        String normalized = isin.trim();
        if (normalized.length() != 12) {
            throw new ServiceException(ErrorCode.BAD_REQUEST, "Invalid ISIN format: " + normalized);
        }

        return normalized;
    }

    private String normalizeOrNull(String value) {
        if (ObjectUtils.isEmpty(value)) {
            return null;
        }
        String normalized = value.trim();
        return normalized.isEmpty() ? null : normalized;
    }

    private String normalizeRequired(String value, String message) {
        String normalized = normalizeOrNull(value);
        if (normalized == null) {
            throw new ServiceException(ErrorCode.BAD_REQUEST, message);
        }
        return normalized;
    }

    private String toUpper(String value) {
        return ApplicationUtils.toUpper(value);
    }

    /**
     * Mapea un DTO a entidad, reutilizando la lógica de validación y cache.
     */
    private SecurityTitleEntity mapDtoToEntity(
            DataReferenceInstrumentsInDto dataReferenceInstrumentsInDto,
            Map<String, SecurityTitleEntity> existingByEquityCode) {
        String equityCode = validateEquityCode(dataReferenceInstrumentsInDto.getInstrument());

        SecurityTitleEntity securityTitleEntityLast = existingByEquityCode != null
                ? existingByEquityCode.getOrDefault(equityCode, new SecurityTitleEntity())
                : this.findSecurityTitleEntityOrEmpty(equityCode);

        return securityTitleEntityLast.toBuilder()
                .market(this.validateMarketById(dataReferenceInstrumentsInDto.getMarketType()))
                .equityCode(equityCode)
                .mnemonic(validateMnemonic(dataReferenceInstrumentsInDto.getMnemonic()))
                .isin(validateIsin(dataReferenceInstrumentsInDto.getIsin()))
                .cfi(resolveCfiCode(dataReferenceInstrumentsInDto.getCfiCode()))
                .currency(batchCacheService.findCurrencyEntityByCode(
                        dataReferenceInstrumentsInDto.getCurrency()))
                .settlementPeriod("T2")
                .listingDate(dataReferenceInstrumentsInDto.getListingDate())
                .delistingDate(dataReferenceInstrumentsInDto.getRetirementDate())
                .parent(Boolean.valueOf(dataReferenceInstrumentsInDto.getStatusOB()))
                .status(batchCacheService.findStatusEntityFromMapping(
                        dataReferenceInstrumentsInDto.getStatus(),
                        StatusMappingEnum.INSTRUMENTO_RV_REFERENCE_DATA.getExternalSystem(),
                        StatusMappingEnum.INSTRUMENTO_RV_REFERENCE_DATA.getCategory()))
                .issuer(this.findIssuerEntityByCode(dataReferenceInstrumentsInDto.getIssuerCode(), new BatchMetrics()))
                .country(batchCacheService.findCountryEntityByCode(
                        dataReferenceInstrumentsInDto.getListingCountry()))
                .amountIssued(resolveAmountIssued(dataReferenceInstrumentsInDto.getIssuedAmount()))
                .clazz(batchCacheService.findClassEntityById(
                        dataReferenceInstrumentsInDto.getClassification()))
                .segment(batchCacheService.findSegmentEntity(
                        dataReferenceInstrumentsInDto.getSegmentId()))
                .category(dataReferenceInstrumentsInDto.getCategory())
                .depository(batchCacheService.findDepositoryEntityById(
                        dataReferenceInstrumentsInDto.getDepositary()))
                .punishmentRepo(null)
                .regulatoryCode(dataReferenceInstrumentsInDto.getRegulatorCode())
                .lastModifyUser(propertiesConfig.getApiName())
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyDate(OffsetDateTime.now())
                .lastModifyIp(propertiesConfig.getApiName())
                .build();
    }

    private String validateEquityCode(String equityCode) {
        if (ObjectUtils.isEmpty(equityCode)) {
            log.error("EquityCode is 'null' or empty");
            throw new ServiceException(
                    ErrorCode.BAD_REQUEST,
                    "EquityCode is 'null' or empty");
        }

        if (equityCode.length() > 30) {
            log.error("EquityCode too long: {}", equityCode);
            throw new ServiceException(
                    ErrorCode.BAD_REQUEST,
                    "EquityCode too long: " + equityCode);
        }

        return equityCode.trim();
    }

    private String validateIsin(String isin) {
        if (ObjectUtils.isEmpty(isin)) {
            log.error("ISIN is 'null' or empty");
            throw new ServiceException(ErrorCode.BAD_REQUEST, "ISIN is 'null' or empty");
        }

        if (isin.length() != 12) {
            log.error("Invalid ISIN format: {}", isin);
            throw new ServiceException(ErrorCode.BAD_REQUEST, "Invalid ISIN format: " + isin);
        }

        return isin;
    }

    private String validateMnemonic(String mnemonic) {
        if (ObjectUtils.isEmpty(mnemonic)) {
            log.error("Mnemonic is 'null' or empty");
            throw new ServiceException(
                    ErrorCode.BAD_REQUEST,
                    "Mnemonic is 'null' or empty");
        }

        if (mnemonic.length() > 30) { // ajusta
            log.error("Mnemonic too long: {}", mnemonic);
            throw new ServiceException(
                    ErrorCode.BAD_REQUEST,
                    "Mnemonic too long: " + mnemonic);
        }

        return mnemonic.trim();
    }

    private MarketEntity validateMarketById(String marketId) {
        // Si marketId es null o vacío, usar "1" por defecto
        String resolvedMarketId = marketId;
        if (ObjectUtils.isEmpty(resolvedMarketId)) {
            log.warn("MarketId is null/empty from Kafka message, usando id por defecto 1");
            resolvedMarketId = "1";
        }

        final String finalMarketId = resolvedMarketId;

        return batchCacheService.findMarketEntityById(finalMarketId);
    }

    private SecurityTitleEntity findSecurityTitleEntityOrEmpty(String equityCode) {
        Optional<SecurityTitleEntity> securityTitleEntityOptional = securityTitleRepository
                .findByEquityCode(equityCode);

        return securityTitleEntityOptional.orElseGet(SecurityTitleEntity::new);
    }

    private IssuerEntity findIssuerEntityByCode(String issuerCode, BatchMetrics metrics) {
        if (ObjectUtils.isEmpty(issuerCode)) {
            log.error("Issuer code is null or empty");
            throw new ServiceException(ErrorCode.ISSUER_NOT_FOUND, "Issuer code is null or empty");
        }
        try {
            return batchCacheService.findIssuerEntityByCode(issuerCode);
        } catch (Exception ex) {
            metrics.missingIssuerRejected++;
            metrics.incrementMissingIssuer(issuerCode);
            throw ex;
        }
    }

    private void clearPersistenceContext() {
        if (entityManager != null) {
            entityManager.clear();
        }
    }

    private String resolveCfiCode(String cfiCode) {
        if (cfiCode == null) {
            log.error("CFI code is null");
            throw new ServiceException(ErrorCode.BAD_REQUEST, "CFI code is null");
        }

        String resolvedCfiCode = cfiCode.trim();
        if (resolvedCfiCode.length() > 6) {
            throw new ServiceException(ErrorCode.BAD_REQUEST, "CFI code too long: " + resolvedCfiCode);
        }

        return resolvedCfiCode;
    }

    private BigDecimal resolveAmountIssued(BigInteger issuedAmount) {
        return Optional.ofNullable(issuedAmount)
                .map(BigDecimal::new)
                .orElse(null);
    }

    private static class BatchMetrics {
        private int validRecords;
        private int functionalRejected;
        private int technicalErrors;
        private int insertedOrUpdated;
        private int missingIssuerRejected;
        private int emptyIsinRejected;
        private int duplicateMnemonicRejected;
        private int otherFunctionalRejects;

        private final Map<String, Integer> missingIssuerCounts = new HashMap<>();
        private final List<String> emptyIsinExamples = new ArrayList<>();
        private final List<String> duplicateMnemonicExamples = new ArrayList<>();
        private final List<String> functionalRejectSamples = new ArrayList<>();
        private final List<String> errors = new ArrayList<>();

        private void incrementMissingIssuer(String issuerCode) {
            missingIssuerCounts.merge(issuerCode, 1, Integer::sum);
        }

        private void addDuplicateMnemonic(DataReferenceInstrumentsInDto dto, Long existingSecurityId) {
            if (duplicateMnemonicExamples.size() >= 5) {
                return;
            }

            duplicateMnemonicExamples.add("securityId=" + dto.getId()
                    + ", equityCode=" + dto.getInstrument()
                    + ", mnemonic=" + dto.getMnemonic()
                    + ", existingSecurityId=" + existingSecurityId);
        }

        private void addFunctionalRejectSample(String reason) {
            if (functionalRejectSamples.size() < 5) {
                functionalRejectSamples.add(reason);
            }
        }

        private void addError(DataReferenceInstrumentsInDto dto, Exception exception) {
            String mnemonic = dto == null || dto.getMnemonic() == null ? "<NULL>" : dto.getMnemonic();
            errors.add("mnemonic=" + mnemonic + ", error=" + exception.getMessage());
        }

        private void addPersistenceError(SecurityTitleEntity entity, Exception exception) {
            String mnemonic = entity == null || entity.getMnemonic() == null ? "<NULL>" : entity.getMnemonic();
            errors.add("mnemonic=" + mnemonic + ", error=" + exception.getMessage());
        }
    }

}

```

## src/main/java/com/nubo/instruments/synchronization/service/impl/SynchronizationServiceImpl.java

```java
package com.nubo.instruments.synchronization.service.impl;

import com.nubo.instruments.synchronization.models.domain.KafkaMessage;
import com.nubo.instruments.synchronization.models.dto.request.DataReferenceInstrumentsInDto;
import com.nubo.instruments.synchronization.service.EquitySecurityService;
import com.nubo.instruments.synchronization.service.IsinNumberService;
import com.nubo.instruments.synchronization.service.SecurityTitleService;
import com.nubo.instruments.synchronization.service.SynchronizationService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class SynchronizationServiceImpl implements SynchronizationService {

    private final SecurityTitleService securityTitleService;
    private final EquitySecurityService equitySecurityService;
    private final IsinNumberService isinNumberService;

    @Override
    public void synchronizeDataReferenceAndInstruments(KafkaMessage kafkaMessage) {
        synchronizeDataReferenceAndInstrumentsBatch(List.of(kafkaMessage));
    }

    @Override
    public void synchronizeDataReferenceAndInstrumentsBatch(List<KafkaMessage> kafkaMessageList) {
        if (kafkaMessageList == null || kafkaMessageList.isEmpty()) {
            log.debug("No records received for synchronization batch");
            return;
        }

        long startTotal = System.currentTimeMillis();
        log.info("Start synchronizeDataReferenceAndInstrumentsBatch - records: {}",
                kafkaMessageList.size());

        long startSecurity = System.currentTimeMillis();
        securityTitleService.batchInsertSecurityTitles(kafkaMessageList);
        long securityMs = System.currentTimeMillis() - startSecurity;

        long startEquity = System.currentTimeMillis();
        equitySecurityService.batchCreateUpdateEquitySecurities(kafkaMessageList);
        long equityMs = System.currentTimeMillis() - startEquity;

        long startIsin = System.currentTimeMillis();
        isinNumberService.batchCreateUpdateIsinNumbers(kafkaMessageList);
        long isinMs = System.currentTimeMillis() - startIsin;

        long totalMs = System.currentTimeMillis() - startTotal;

        log.info(
                "End synchronizeDataReferenceAndInstrumentsBatch - records: {}, securityMs: {}, equityMs: {}, isinMs: {}, totalMs: {}",
                kafkaMessageList.size(), securityMs, equityMs, isinMs, totalMs);
    }

}

```
