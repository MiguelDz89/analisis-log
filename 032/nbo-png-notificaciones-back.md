# nbo-png-notificaciones-back

Código fuente de producción y configuraciones. Captura local: 28/10/2026.

Incluye 69 archivos Java y 16 archivos de configuración, recursos y compilación/despliegue.

Cada sección identifica la ruta original y contiene el archivo completo, salvo valores de credenciales ocultados. Los Java conservan sus implementaciones, imports, anotaciones y comentarios. Se excluyen src/test, resultados de compilación, binarios y herramientas/perfiles de pruebas de rendimiento.

Incluye src/main, descriptor Maven, wrapper y archivos auxiliares de configuración disponibles.

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
12. `src/main/resources/log/JsonEventLayout_error.json`
13. `src/main/resources/log/JsonEventLayout_info.json`
14. `src/main/resources/log/JsonEventLayout_trace.json`
15. `src/main/resources/log/log4j2-prod.properties`
16. `src/main/resources/log/log4j2.properties`
17. `src/main/java/com/nubo/notifications/api/NotificationsApiApplication.java`
18. `src/main/java/com/nubo/notifications/api/application/annotations/ValidBigDecimal.java`
19. `src/main/java/com/nubo/notifications/api/application/config/KafkaConsumerConfig.java`
20. `src/main/java/com/nubo/notifications/api/application/config/KafkaProducerConfig.java`
21. `src/main/java/com/nubo/notifications/api/application/config/SwaggerConfig.java`
22. `src/main/java/com/nubo/notifications/api/application/config/ValidBigDecimalConfig.java`
23. `src/main/java/com/nubo/notifications/api/application/config/WebConfig.java`
24. `src/main/java/com/nubo/notifications/api/application/context/GlobalContext.java`
25. `src/main/java/com/nubo/notifications/api/application/database/NamingStrategyConfig.java`
26. `src/main/java/com/nubo/notifications/api/application/database/UpperNamingConfig.java`
27. `src/main/java/com/nubo/notifications/api/application/filters/GlobalFilter.java`
28. `src/main/java/com/nubo/notifications/api/application/interceptors/GlobalInterceptor.java`
29. `src/main/java/com/nubo/notifications/api/application/properties/PropertiesConfig.java`
30. `src/main/java/com/nubo/notifications/api/application/properties/PropertiesContext.java`
31. `src/main/java/com/nubo/notifications/api/application/util/ApplicationUtils.java`
32. `src/main/java/com/nubo/notifications/api/application/util/NotificationTemplateUtils.java`
33. `src/main/java/com/nubo/notifications/api/application/util/RestClientUtils.java`
34. `src/main/java/com/nubo/notifications/api/client/kafka/consumer/ScheduleCmdResponseListenerAdapter.java`
35. `src/main/java/com/nubo/notifications/api/client/kafka/producer/service/KafkaNuboAdapter.java`
36. `src/main/java/com/nubo/notifications/api/exception/ServiceException.java`
37. `src/main/java/com/nubo/notifications/api/exception/error/ErrorCode.java`
38. `src/main/java/com/nubo/notifications/api/exception/error/ErrorResponse.java`
39. `src/main/java/com/nubo/notifications/api/exception/error/ErrorValidation.java`
40. `src/main/java/com/nubo/notifications/api/exception/handler/GlobalExceptionHandler.java`
41. `src/main/java/com/nubo/notifications/api/exception/kafka/KafkaErrorBuild.java`
42. `src/main/java/com/nubo/notifications/api/helpers/MapperPageUtil.java`
43. `src/main/java/com/nubo/notifications/api/helpers/MapperUtil.java`
44. `src/main/java/com/nubo/notifications/api/models/dto/request/NotificationCreateInByUser.java`
45. `src/main/java/com/nubo/notifications/api/models/dto/request/NotificationCreateInDto.java`
46. `src/main/java/com/nubo/notifications/api/models/dto/request/NotificationRequestDto.java`
47. `src/main/java/com/nubo/notifications/api/models/dto/request/NotificationWSRequestDto.java`
48. `src/main/java/com/nubo/notifications/api/models/dto/request/NotificationsUsersInDto.java`
49. `src/main/java/com/nubo/notifications/api/models/dto/response/NotificationsOutDto.java`
50. `src/main/java/com/nubo/notifications/api/models/dto/response/NotificationsResponseOutDto.java`
51. `src/main/java/com/nubo/notifications/api/models/dto/response/NotificationsUserOutDto.java`
52. `src/main/java/com/nubo/notifications/api/models/dto/response/PageResponseOutDto.java`
53. `src/main/java/com/nubo/notifications/api/models/dto/response/ScreenOutDto.java`
54. `src/main/java/com/nubo/notifications/api/models/dto/response/TypeOutDto.java`
55. `src/main/java/com/nubo/notifications/api/models/entity/AssigmentEntity.java`
56. `src/main/java/com/nubo/notifications/api/models/entity/ChannelEntity.java`
57. `src/main/java/com/nubo/notifications/api/models/entity/MenuAssignmentEntity.java`
58. `src/main/java/com/nubo/notifications/api/models/entity/ModuleEntity.java`
59. `src/main/java/com/nubo/notifications/api/models/entity/NotificationEntity.java`
60. `src/main/java/com/nubo/notifications/api/models/entity/NotificationMetadataEntity.java`
61. `src/main/java/com/nubo/notifications/api/models/entity/NotificationsPreferenceEntity.java`
62. `src/main/java/com/nubo/notifications/api/models/entity/NotificationsUserEntity.java`
63. `src/main/java/com/nubo/notifications/api/models/entity/ProfileEntity.java`
64. `src/main/java/com/nubo/notifications/api/models/entity/ProfileUserNuboEntity.java`
65. `src/main/java/com/nubo/notifications/api/models/entity/ProfileUserNuboKey.java`
66. `src/main/java/com/nubo/notifications/api/models/entity/ScreenEntity.java`
67. `src/main/java/com/nubo/notifications/api/models/entity/StatusEntity.java`
68. `src/main/java/com/nubo/notifications/api/models/entity/TypeEntity.java`
69. `src/main/java/com/nubo/notifications/api/models/entity/UserNuboEntity.java`
70. `src/main/java/com/nubo/notifications/api/models/enums/NotificationsBusinessRulesEnum.java`
71. `src/main/java/com/nubo/notifications/api/models/enums/NotificationsTypesEnum.java`
72. `src/main/java/com/nubo/notifications/api/models/enums/PropertiesEnum.java`
73. `src/main/java/com/nubo/notifications/api/models/enums/VersionApiEnum.java`
74. `src/main/java/com/nubo/notifications/api/repository/MenuAssignmentRepository.java`
75. `src/main/java/com/nubo/notifications/api/repository/NotificationMetadataRepository.java`
76. `src/main/java/com/nubo/notifications/api/repository/NotificationsRepository.java`
77. `src/main/java/com/nubo/notifications/api/repository/NotificationsUserRepository.java`
78. `src/main/java/com/nubo/notifications/api/repository/ProfileRepository.java`
79. `src/main/java/com/nubo/notifications/api/repository/TypeRepository.java`
80. `src/main/java/com/nubo/notifications/api/repository/UserNuboRepository.java`
81. `src/main/java/com/nubo/notifications/api/service/NotificationsAsyncService.java`
82. `src/main/java/com/nubo/notifications/api/service/NotificationsService.java`
83. `src/main/java/com/nubo/notifications/api/service/impl/NotificationsAsyncServiceImpl.java`
84. `src/main/java/com/nubo/notifications/api/service/impl/NotificationsServiceImpl.java`
85. `src/main/java/com/nubo/notifications/api/web/controller/NotificationsRestController.java`

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
		<version>4.1.1</version>
		<relativePath/>
	</parent>
	<groupId>com.nubo.notifications.api</groupId>
	<artifactId>notifications-api</artifactId>
	<version>0.38.0-beta.1</version>
	<name>${project.artifactId}</name>
	<description>Notifications Api</description>

	<properties>
		<java.version>21</java.version>
		<spring.port>8080</spring.port>
		<test.skip>false</test.skip>
		<datasource.url.application.name>ApplicationName=${project.artifactId}</datasource.url.application.name>
		<hikari.pool.name>${project.artifactId}-pool</hikari.pool.name>
		<!-- Security vulnerability fixes -->
		<tomcat.version>11.0.26</tomcat.version>
		<jackson-bom.version>3.1.7</jackson-bom.version>
		<jackson-2-bom.version>2.21.7</jackson-2-bom.version>
	</properties>

	<dependencies>
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
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-jackson</artifactId>
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
			<artifactId>log4j-layout-template-json</artifactId>
			<scope>runtime</scope>
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
			<version>3.1.1</version>
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
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-kafka</artifactId>
		</dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-kafka-test</artifactId>
            <scope>test</scope>
        </dependency>
		<!-- Security vulnerability fixes -->
		<dependency>
			<groupId>commons-io</groupId>
			<artifactId>commons-io</artifactId>
			<version>2.18.0</version>
		</dependency>
		<!-- Security vulnerability fixes -->
		<dependency>
			<groupId>at.yawk.lz4</groupId>
			<artifactId>lz4-java</artifactId>
			<version>1.11.4</version>
			<scope>runtime</scope>
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
								<exclude>**/NotificationsApiApplication.class</exclude>
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
    show-sql: "false"
    database-platform: org.hibernate.dialect.PostgreSQLDialect
logging:
  config: classpath:log/log4j2.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR
kafka:
  nubo:
    module: ${MODULE_NAME:DEFAULT}
    retries: ${KAFKA_NUBO_RETRIES:5}
    bootstrap-servers: ${KAFKA_NUBO_BOOTSTRAP_SERVER}
    auto-offset-reset: ${KAFKA_NUBO_AUTO_OFFSET_RESET:latest}
    security:
      protocol: ${KAFKA_PROPERTIES_SECURITY_PROTOCOL}
    sasl:
      mechanism: ${KAFKA_PROPERTIES_SASL_MECHANISM}
      jaas:
        config: ${KAFKA_PROPERTIES_SASL_JAAS_CONFIG}
    consumer:
      kafka-notifications-request-topic: ${KAFKA_NUBO_NOTIFICATION_REQUEST_TOPIC}
      group-id: ${KAFKA_NUBO_GROUP_ID}
    producer:
      kafka-ws-request-topic: ${KAFKA_NUBO_TOPIC_NAME_WS_NOTIFICATIONS}

```

## src/main/resources/application-local.yml

```yaml
server:
  port: 8085
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
kafka:
  nubo:
    module: ${MODULE_NAME:DEFAULT}
    retries: ${KAFKA_NUBO_RETRIES:5}
    bootstrap-servers: ${KAFKA_NUBO_BOOTSTRAP_SERVER}
    auto-offset-reset: ${KAFKA_NUBO_AUTO_OFFSET_RESET:latest}
    security:
      protocol: PLAINTEXT
    sasl:
      mechanism: PLAIN
      jaas:
        config: ""
    consumer:
      kafka-notifications-request-topic: ${KAFKA_NUBO_NOTIFICATION_REQUEST_TOPIC}
      group-id: ${KAFKA_NUBO_GROUP_ID}
    producer:
      kafka-ws-request-topic: ${KAFKA_NUBO_TOPIC_NAME_WS_NOTIFICATIONS}

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
    show-sql: "false"
    database-platform: org.hibernate.dialect.PostgreSQLDialect
logging:
  config: classpath:log/log4j2-prod.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR
kafka:
  nubo:
    module: ${MODULE_NAME:DEFAULT}
    retries: ${KAFKA_NUBO_RETRIES:5}
    bootstrap-servers: ${KAFKA_NUBO_BOOTSTRAP_SERVER}
    auto-offset-reset: ${KAFKA_NUBO_AUTO_OFFSET_RESET:latest}
    security:
      protocol: ${KAFKA_PROPERTIES_SECURITY_PROTOCOL}
    sasl:
      mechanism: ${KAFKA_PROPERTIES_SASL_MECHANISM}
      jaas:
        config: ${KAFKA_PROPERTIES_SASL_JAAS_CONFIG}
    consumer:
      kafka-notifications-request-topic: ${KAFKA_NUBO_NOTIFICATION_REQUEST_TOPIC}
      group-id: ${KAFKA_NUBO_GROUP_ID}
    producer:
      kafka-ws-request-topic: ${KAFKA_NUBO_TOPIC_NAME_WS_NOTIFICATIONS}

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
    show-sql: "false"
    database-platform: org.hibernate.dialect.PostgreSQLDialect
logging:
  config: classpath:log/log4j2.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR
kafka:
  nubo:
    module: ${MODULE_NAME:DEFAULT}
    retries: ${KAFKA_NUBO_RETRIES:5}
    bootstrap-servers: ${KAFKA_NUBO_BOOTSTRAP_SERVER}
    auto-offset-reset: ${KAFKA_NUBO_AUTO_OFFSET_RESET:latest}
    security:
      protocol: ${KAFKA_PROPERTIES_SECURITY_PROTOCOL}
    sasl:
      mechanism: ${KAFKA_PROPERTIES_SASL_MECHANISM}
      jaas:
        config: ${KAFKA_PROPERTIES_SASL_JAAS_CONFIG}
    consumer:
      kafka-notifications-request-topic: ${KAFKA_NUBO_NOTIFICATION_REQUEST_TOPIC}
      group-id: ${KAFKA_NUBO_GROUP_ID}
    producer:
      kafka-ws-request-topic: ${KAFKA_NUBO_TOPIC_NAME_WS_NOTIFICATIONS}

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
    show-sql: "false"
    database-platform: org.hibernate.dialect.PostgreSQLDialect
logging:
  config: classpath:log/log4j2.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR
kafka:
  nubo:
    module: ${MODULE_NAME:DEFAULT}
    retries: ${KAFKA_NUBO_RETRIES:5}
    bootstrap-servers: ${KAFKA_NUBO_BOOTSTRAP_SERVER}
    auto-offset-reset: ${KAFKA_NUBO_AUTO_OFFSET_RESET:latest}
    security:
      protocol: ${KAFKA_PROPERTIES_SECURITY_PROTOCOL}
    sasl:
      mechanism: ${KAFKA_PROPERTIES_SASL_MECHANISM}
      jaas:
        config: ${KAFKA_PROPERTIES_SASL_JAAS_CONFIG}
    consumer:
      kafka-notifications-request-topic: ${KAFKA_NUBO_NOTIFICATION_REQUEST_TOPIC}
      group-id: ${KAFKA_NUBO_GROUP_ID}
    producer:
      kafka-ws-request-topic: ${KAFKA_NUBO_TOPIC_NAME_WS_NOTIFICATIONS}
```

## src/main/resources/application.yml

```yaml
spring:
  profiles:
    active: ${SPRING_PROFILES_ACTIVE}
  application:
    name: @project.name@
    type: service
  jackson:
    use-jackson2-defaults: true
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
,--.  ,--. ,-----.,--------.,--.,------.,--. ,-----.  ,---. ,--------.,--. ,-----. ,--.  ,--. ,---.   ,---.  ,------. ,--.
|  ,'.|  |'  .-.  '--.  .--'|  ||  .---'|  |'  .--./ /  O  \'--.  .--'|  |'  .-.  '|  ,'.|  |'   .-' /  O  \ |  .--. '|  |
|  |' '  ||  | |  |  |  |   |  ||  `--, |  ||  |    |  .-.  |  |  |   |  ||  | |  ||  |' '  |`.  `-.|  .-.  ||  '--' ||  |
|  | `   |'  '-'  '  |  |   |  ||  |`   |  |'  '--'\|  | |  |  |  |   |  |'  '-'  '|  | `   |.-'    |  | |  ||  | --' |  |
`--'  `--' `-----'   `--'   `--'`--'    `--' `-----'`--' `--'  `--'   `--' `-----' `--'  `--'`-----'`--' `--'`--'     `--'

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

## src/main/java/com/nubo/notifications/api/NotificationsApiApplication.java

```java
package com.nubo.notifications.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class NotificationsApiApplication {

    public static void main(String[] args) {
        SpringApplication.run(NotificationsApiApplication.class, args);
    }

}

```

## src/main/java/com/nubo/notifications/api/application/annotations/ValidBigDecimal.java

```java
package com.nubo.notifications.api.application.annotations;

import com.nubo.notifications.api.application.config.ValidBigDecimalConfig;
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

## src/main/java/com/nubo/notifications/api/application/config/KafkaConsumerConfig.java

```java
package com.nubo.notifications.api.application.config;

import com.nubo.notifications.api.application.properties.PropertiesConfig;
import com.nubo.notifications.api.exception.ServiceException;
import com.nubo.notifications.api.exception.error.ErrorCode;
import com.nubo.notifications.api.exception.kafka.KafkaErrorBuild;
import com.nubo.notifications.api.models.dto.request.NotificationRequestDto;
import lombok.RequiredArgsConstructor;
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
    public ConsumerFactory<String, NotificationRequestDto> consumerFactoryKafkaNubo() {
        Map<String, Object> configProps = new HashMap<>();
        configProps.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, propertiesConfig.getKafkaNuboBootstrapServers());
        configProps.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);
        configProps.put(ConsumerConfig.GROUP_ID_CONFIG, propertiesConfig.getKafkaNuboConsumerGroupId());
        configProps.put(ConsumerConfig.AUTO_OFFSET_RESET_CONFIG, propertiesConfig.getKafkaNuboAutoOffsetReset());
        configProps.put("security.protocol", propertiesConfig.getKafkaNuboSecurityProtocol());

        configProps.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, ErrorHandlingDeserializer.class);
        configProps.put(ErrorHandlingDeserializer.VALUE_DESERIALIZER_CLASS, JsonDeserializer.class);
        configProps.put(JsonDeserializer.VALUE_DEFAULT_TYPE, NotificationRequestDto.class);
        configProps.put(JsonDeserializer.TRUSTED_PACKAGES, "com.nubo.notifications.api");

        if (!isLocalProfile()) {
            configProps.put("sasl.mechanism", propertiesConfig.getKafkaNuboSaslMechanism());
            configProps.put("sasl.jaas.config", propertiesConfig.getKafkaNuboSaslJaasConfig());
        }

        return new DefaultKafkaConsumerFactory<>(
                configProps,
                new StringDeserializer(),
                new ErrorHandlingDeserializer<>(new JsonDeserializer<>(NotificationRequestDto.class))
        );
    }

    @Bean
    public ConcurrentKafkaListenerContainerFactory<String, NotificationRequestDto> kafkaNuboListenerContainerFactory(
            DefaultErrorHandler errorHandler) {
        ConcurrentKafkaListenerContainerFactory<String, NotificationRequestDto> factory = new ConcurrentKafkaListenerContainerFactory<>();
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
                    if (exception instanceof ListenerExecutionFailedException e) {
                        Throwable cause = e.getCause();
                        if (cause instanceof DeserializationException) {
                            errorCode = ErrorCode.ERROR_DESERIALIZER_JSON;
                        } else if (cause instanceof ServiceException se) {
                            errorCode = se.getErrorCode();
                        } else {
                            errorCode = ErrorCode.ERROR_KAFKA_CONSUMER_NUBO;
                        }
                    } else if (exception instanceof ServiceException ex) {
                        errorCode = ex.getErrorCode();
                    } else {
                        errorCode = ErrorCode.ERROR_KAFKA_CONSUMER_NUBO;
                    }
                    kafkaErrorBuilder.buildError(exception, errorCode, record.offset(), record.topic(), deliveryAttempt);
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

## src/main/java/com/nubo/notifications/api/application/config/KafkaProducerConfig.java

```java
package com.nubo.notifications.api.application.config;

import com.nubo.notifications.api.application.properties.PropertiesConfig;
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

## src/main/java/com/nubo/notifications/api/application/config/SwaggerConfig.java

```java
package com.nubo.notifications.api.application.config;

import com.nubo.notifications.api.exception.error.ErrorResponse;
import com.nubo.notifications.api.exception.error.ErrorValidation;
import com.nubo.notifications.api.models.enums.PropertiesEnum;
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

## src/main/java/com/nubo/notifications/api/application/config/ValidBigDecimalConfig.java

```java
package com.nubo.notifications.api.application.config;

import com.nubo.notifications.api.application.annotations.ValidBigDecimal;
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

## src/main/java/com/nubo/notifications/api/application/config/WebConfig.java

```java
package com.nubo.notifications.api.application.config;

import com.nubo.notifications.api.application.interceptors.GlobalInterceptor;
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
    @Profile({
            "local", "dev", "qa"
    })
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

## src/main/java/com/nubo/notifications/api/application/context/GlobalContext.java

```java
package com.nubo.notifications.api.application.context;

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

## src/main/java/com/nubo/notifications/api/application/database/NamingStrategyConfig.java

```java
package com.nubo.notifications.api.application.database;

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

## src/main/java/com/nubo/notifications/api/application/database/UpperNamingConfig.java

```java
package com.nubo.notifications.api.application.database;

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

## src/main/java/com/nubo/notifications/api/application/filters/GlobalFilter.java

```java
package com.nubo.notifications.api.application.filters;

import com.nubo.notifications.api.application.context.GlobalContext;
import com.nubo.notifications.api.application.util.ApplicationUtils;
import com.nubo.notifications.api.exception.ServiceException;
import com.nubo.notifications.api.exception.error.ErrorCode;
import com.nubo.notifications.api.exception.error.ErrorResponse;
import com.nubo.notifications.api.models.enums.PropertiesEnum;
import com.nubo.notifications.api.models.enums.VersionApiEnum;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpHeaders;
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
            String token = this.validateTokenRequest(request);

            GlobalContext.setProperty(PropertiesEnum.VERSION_API.getValue(), VersionApiEnum.fromValue(versionPath).getValue());
            GlobalContext.setProperty(PropertiesEnum.CLIENT_IP.getValue(), clientIpHeader);
            GlobalContext.setProperty(PropertiesEnum.CLIENT_USER.getValue(), clientUserHeader);
            GlobalContext.setProperty(PropertiesEnum.CLIENT_DATETIME.getValue(), clientDatetime);
            GlobalContext.setProperty(PropertiesEnum.AUTH_TOKEN.getValue(), token);

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

    private String validateTokenRequest(HttpServletRequest request) {
        String bearerToken = request.getHeader(HttpHeaders.AUTHORIZATION);
        String token = null;
        if (bearerToken != null && bearerToken.startsWith("Bearer ")) {
            token = bearerToken.substring(7);
        }
        if (token == null) {
            throw new ServiceException(ErrorCode.UNAUTHORIZED, HttpStatus.UNAUTHORIZED);
        }
        return token;
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

## src/main/java/com/nubo/notifications/api/application/interceptors/GlobalInterceptor.java

```java
package com.nubo.notifications.api.application.interceptors;

import com.nubo.notifications.api.application.context.GlobalContext;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

@Component
@Order(2)
public class GlobalInterceptor implements HandlerInterceptor {

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) {
        GlobalContext.remove();
    }

}
```

## src/main/java/com/nubo/notifications/api/application/properties/PropertiesConfig.java

```java
package com.nubo.notifications.api.application.properties;

import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
@Getter
public class PropertiesConfig {

    @Value("${spring.application.name}")
    private String apiName;

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

    @Value("${kafka.nubo.bootstrap-servers}")
    private String kafkaNuboBootstrapServers;

    @Value("${kafka.nubo.consumer.group-id}")
    private String kafkaNuboConsumerGroupId;

    @Value("${kafka.nubo.module}")
    private String notificationKafkaModule;

    @Value("${kafka.nubo.consumer.kafka-notifications-request-topic}")
    private String notificationKafkaTopic;

    @Value("${kafka.nubo.producer.kafka-ws-request-topic}")
    private String notificationKafkaTopicWs;
}

```

## src/main/java/com/nubo/notifications/api/application/properties/PropertiesContext.java

```java
package com.nubo.notifications.api.application.properties;

import com.nubo.notifications.api.application.context.GlobalContext;
import com.nubo.notifications.api.application.util.ApplicationUtils;
import com.nubo.notifications.api.models.enums.PropertiesEnum;
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

## src/main/java/com/nubo/notifications/api/application/util/ApplicationUtils.java

```java
package com.nubo.notifications.api.application.util;

import tools.jackson.core.JacksonException;
import tools.jackson.databind.ObjectMapper;
import tools.jackson.databind.cfg.DateTimeFeature;
import tools.jackson.databind.json.JsonMapper;
import com.nubo.notifications.api.exception.ServiceException;
import com.nubo.notifications.api.exception.error.ErrorCode;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class ApplicationUtils {

    private static final ObjectMapper MAPPER = JsonMapper.builder()
            .disable(DateTimeFeature.WRITE_DATES_AS_TIMESTAMPS)
            .build();
    private static final String FORMAT_DATETIME = "yyyy-MM-dd'T'HH:mm:ss";
    private static final String FORMAT_DATE = "yyyy-MM-dd";

    private ApplicationUtils() {
    }

    public static String getFormatDatetime() {
        return FORMAT_DATETIME;
    }

    public static String getLocalDateTimeNow() {
        return LocalDateTime.now().format(DateTimeFormatter.ofPattern(ApplicationUtils.getFormatDatetime()));
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
        } catch (JacksonException e) {
            throw new ServiceException(ErrorCode.UNEXPECTED, e);
        }
    }

    public static <T> T convertJsonToObject(String json, Class<T> clazz) {
        try {
            return MAPPER.readValue(json, clazz);
        } catch (JacksonException e) {
            throw new ServiceException(ErrorCode.UNEXPECTED, e);
        }
    }

}


```

## src/main/java/com/nubo/notifications/api/application/util/NotificationTemplateUtils.java

```java
package com.nubo.notifications.api.application.util;

import java.util.Map;
import java.util.HashMap;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class NotificationTemplateUtils {
    private static final Pattern PLACEHOLDER = Pattern.compile("\\{\\{([A-Z0-9_]+)\\}\\}");

    public static String replaceKeys(String template, Map<String, String> values) {
        Map<String, String> normalizedValues = new HashMap<>();
        for (Map.Entry<String, String> entry : values.entrySet()) {
            normalizedValues.put(entry.getKey().toUpperCase(), entry.getValue());
        }

        Matcher matcher = PLACEHOLDER.matcher(template);
        StringBuffer result = new StringBuffer();
        while (matcher.find()) {
            String key = matcher.group(1);
            String value = normalizedValues.getOrDefault(key, matcher.group(0));
            matcher.appendReplacement(result, Matcher.quoteReplacement(value));
        }
        matcher.appendTail(result);
        return result.toString();
    }
}

```

## src/main/java/com/nubo/notifications/api/application/util/RestClientUtils.java

```java
package com.nubo.notifications.api.application.util;

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

    public <T> ResponseEntity<T> requestWithResponseObject(URI url, HttpMethod method, HttpHeaders headers,
                                                           Object requestBody, Class<T> responseType) {
        log.info("Client url, method[{}] {}", method, url);
        return restClient.method(method)
                .uri(url)
                .headers(h -> h.addAll(headers))
                .body(requestBody)
                .retrieve()
                .toEntity(responseType);
    }

    public <T> ResponseEntity<T> requestWithoutBodyWithResponseObject(URI url, HttpMethod method, HttpHeaders headers,
                                                                      Class<T> responseType) {
        log.info("Client url, method[{}] {}", method, url);
        return restClient.method(method)
                .uri(url)
                .headers(h -> h.addAll(headers))
                .retrieve()
                .toEntity(responseType);
    }

}

```

## src/main/java/com/nubo/notifications/api/client/kafka/consumer/ScheduleCmdResponseListenerAdapter.java

```java
package com.nubo.notifications.api.client.kafka.consumer;

import com.nubo.notifications.api.application.context.GlobalContext;
import com.nubo.notifications.api.application.util.ApplicationUtils;
import com.nubo.notifications.api.models.dto.request.NotificationRequestDto;
import com.nubo.notifications.api.models.enums.PropertiesEnum;
import com.nubo.notifications.api.service.NotificationsAsyncService;
import jakarta.annotation.PreDestroy;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.support.KafkaHeaders;
import org.springframework.messaging.handler.annotation.Header;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Component;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;

@Component
@Slf4j
@RequiredArgsConstructor
public class ScheduleCmdResponseListenerAdapter {

    private final NotificationsAsyncService notificationService;
    private final ExecutorService executorService = new ThreadPoolExecutor(20, 50, 60L, TimeUnit.SECONDS,
            new LinkedBlockingQueue<>());
    private final Map<String, Object> locks = new ConcurrentHashMap<>();

    @KafkaListener(topics = "#{propertiesConfig.notificationKafkaTopic}",
            containerFactory = "kafkaNuboListenerContainerFactory")
    public void onMessage(
            @Payload NotificationRequestDto message,
            @Header(KafkaHeaders.RECEIVED_PARTITION) int partition,
            @Header(KafkaHeaders.OFFSET) long offset,
            @Header(KafkaHeaders.RECEIVED_TOPIC) String topic,
            @Header(name = KafkaHeaders.DELIVERY_ATTEMPT) Integer retry) {
            log.info("New received Message -- Topic: {} -- Partition: {} -- Offset: {} -- retry: {}",
                    topic, partition, offset, retry);

            String lockKey = message.getNotificationId() + "-" + java.util.UUID.randomUUID();
            Object lock = locks.computeIfAbsent(lockKey, key -> new Object());
            executorService.submit(() -> {
                synchronized (lock) {
                    this.setProperties(topic);

                    notificationService.processNotificationEvent(message);
                    log.info("Finished processing correlationId={}", lockKey);
                }
            });
    }

    @PreDestroy
    public void shutdown() throws InterruptedException {
        executorService.shutdown();
        if (!executorService.awaitTermination(60, TimeUnit.SECONDS)) {
            executorService.shutdownNow();
        }
    }

    private void setProperties(String user) {
        GlobalContext.setProperty(PropertiesEnum.CLIENT_DATETIME.getValue(),
                ApplicationUtils.getLocalDateTimeNow());
        GlobalContext.setProperty(PropertiesEnum.CLIENT_USER.getValue(), user);
        try {
            GlobalContext.setProperty(PropertiesEnum.CLIENT_IP.getValue(),
                    java.net.InetAddress.getLocalHost().getHostAddress());
        } catch (java.net.UnknownHostException e) {
            log.error("Failed to get local host address", e);
            GlobalContext.setProperty(PropertiesEnum.CLIENT_IP.getValue(), "IP_01");
        }
    }
}

```

## src/main/java/com/nubo/notifications/api/client/kafka/producer/service/KafkaNuboAdapter.java

```java
package com.nubo.notifications.api.client.kafka.producer.service;

import com.nubo.notifications.api.exception.ServiceException;
import com.nubo.notifications.api.exception.error.ErrorCode;
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
    private final KafkaTemplate<String, String> kafkaNuboTemplate;

    public void sendMessage(String topic, String message) {
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

## src/main/java/com/nubo/notifications/api/exception/ServiceException.java

```java
package com.nubo.notifications.api.exception;

import com.nubo.notifications.api.exception.error.ErrorCode;
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

    public ServiceException(String message, ErrorCode errorCode, HttpStatus httpStatus) {
        super(message);
        this.errorCode = errorCode;
        this.httpStatus = httpStatus;
    }

    public HttpStatus getHttpStatusOrDefault() {
        return this.httpStatus != null ? this.httpStatus : HttpStatus.INTERNAL_SERVER_ERROR;
    }

}

```

## src/main/java/com/nubo/notifications/api/exception/error/ErrorCode.java

```java
package com.nubo.notifications.api.exception.error;

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
    TYPE_NOT_FOUND("Type not found"),
    NOTIFICATION_NOT_FOUND("Notification not found"),
    NOTIFICATION_TYPE_NOT_SUPPORTED("Notification type not supported"),
    ERROR_DESERIALIZER_JSON("Error Deserializer Json"),
    ERROR_KAFKA_CONSUMER_NUBO("Error Consumer Kafka Nubo"),
    ERROR_KAFKA_PRODUCER_NUBO("Error Producer Kafka Nubo"),;

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

## src/main/java/com/nubo/notifications/api/exception/error/ErrorResponse.java

```java
package com.nubo.notifications.api.exception.error;

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

## src/main/java/com/nubo/notifications/api/exception/error/ErrorValidation.java

```java
package com.nubo.notifications.api.exception.error;

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

## src/main/java/com/nubo/notifications/api/exception/handler/GlobalExceptionHandler.java

```java
package com.nubo.notifications.api.exception.handler;

import java.util.List;
import java.util.Optional;

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

import com.nubo.notifications.api.application.properties.PropertiesConfig;
import com.nubo.notifications.api.application.properties.PropertiesContext;
import com.nubo.notifications.api.exception.ServiceException;
import com.nubo.notifications.api.exception.error.ErrorCode;
import com.nubo.notifications.api.exception.error.ErrorResponse;
import com.nubo.notifications.api.exception.error.ErrorValidation;
import com.nubo.notifications.api.models.entity.UserNuboEntity;
import com.nubo.notifications.api.repository.UserNuboRepository;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestControllerAdvice
@Slf4j
@RequiredArgsConstructor
public class GlobalExceptionHandler
{

    private final UserNuboRepository userNuboRepository;
    private final PropertiesConfig propertiesConfig;

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handlerGeneralException(Exception exception,
            HttpServletRequest request)
    {
        return buildErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, exception, request, ErrorCode.UNEXPECTED);
    }

    @ExceptionHandler(ServiceException.class)
    public ResponseEntity<ErrorResponse> handlerServiceException(ServiceException exception,
            HttpServletRequest request)
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
        List<ErrorValidation> errors = exception.getBindingResult().getFieldErrors().stream()
                .map(error -> ErrorValidation.builder()
                        .id(error.getField())
                        .description(error.getDefaultMessage())
                        .build())
                .toList();
        return buildErrorResponse(HttpStatus.BAD_REQUEST, exception, request, ErrorCode.BAD_REQUEST, errors);
    }

    private ResponseEntity<ErrorResponse> buildErrorResponse(HttpStatus status, Exception exception,
            HttpServletRequest request, ErrorCode errorCode)
    {
        return buildErrorResponse(status, exception, request, errorCode, null);
    }

    private ResponseEntity<ErrorResponse> buildErrorResponse(HttpStatus status, Exception exception,
            HttpServletRequest request, ErrorCode errorCode,
            List<ErrorValidation> errorDetails)
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

    private void logoutUser()
    {
        log.info("Start logoutUser");
        try
        {
            Optional<UserNuboEntity> userNuboEntityOptional = userNuboRepository
                    .findByUserName(PropertiesContext.getClientUser());
            if (userNuboEntityOptional.isPresent())
            {
                UserNuboEntity userNuboEntityLast = userNuboEntityOptional.get();
                userNuboEntityLast.setPreviousSession(false);
                userNuboEntityLast.setLastModifyApplication(propertiesConfig.getApiName());
                userNuboEntityLast.setLastModifyIp(PropertiesContext.getClientIp());
                userNuboEntityLast.setLastModifyUser(PropertiesContext.getClientUser());
                userNuboEntityLast.setLastModifyDate(PropertiesContext.getClientDatetime());

                userNuboRepository.save(userNuboEntityLast);

                log.info("End logoutUser -> {}", userNuboEntityLast);
            }
        } catch (Exception ex)
        {
            log.error("Error logoutUser -> {}", ex.getMessage());
        }
    }

}

```

## src/main/java/com/nubo/notifications/api/exception/kafka/KafkaErrorBuild.java

```java
package com.nubo.notifications.api.exception.kafka;

import com.nubo.notifications.api.application.properties.PropertiesConfig;
import com.nubo.notifications.api.application.util.ApplicationUtils;
import com.nubo.notifications.api.exception.error.ErrorCode;
import com.nubo.notifications.api.exception.error.ErrorResponse;
import com.nubo.notifications.api.exception.error.ErrorValidation;
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
        if (topic != null) description.append(" - Topic: ").append(topic);
        if (retry != null) description.append(" - Retries: ").append(retry);

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

## src/main/java/com/nubo/notifications/api/helpers/MapperPageUtil.java

```java
package com.nubo.notifications.api.helpers;

import com.nubo.notifications.api.models.dto.response.PageResponseOutDto;
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

## src/main/java/com/nubo/notifications/api/helpers/MapperUtil.java

```java
package com.nubo.notifications.api.helpers;

import java.util.Map;

import org.springframework.util.ObjectUtils;

import com.nubo.notifications.api.application.util.NotificationTemplateUtils;
import com.nubo.notifications.api.models.dto.response.NotificationsOutDto;
import com.nubo.notifications.api.models.dto.response.NotificationsUserOutDto;
import com.nubo.notifications.api.models.dto.response.ScreenOutDto;
import com.nubo.notifications.api.models.dto.response.TypeOutDto;
import com.nubo.notifications.api.models.entity.NotificationEntity;
import com.nubo.notifications.api.models.entity.NotificationsUserEntity;
import com.nubo.notifications.api.models.entity.ScreenEntity;
import com.nubo.notifications.api.models.entity.TypeEntity;

public class MapperUtil
{

    private MapperUtil()
    {

    }

    public static NotificationsOutDto notificationEntityToNotificationOutDto(
            NotificationEntity notificationEntity)
    {
        if (ObjectUtils.isEmpty(notificationEntity))
            return null;
        return NotificationsOutDto.builder()
                .id(notificationEntity.getNotificationId())
                .title(notificationEntity.getTitle())
                .description(notificationEntity.getDescription())
                .typeId(typeEntityToTypeDto(notificationEntity.getType()))
                .screen(screenEntityToScreenDto(notificationEntity.getScreen()))
                .timestamp(notificationEntity.getLastModifyDate())
                .build();
    }

    public static ScreenOutDto screenEntityToScreenDto(ScreenEntity screenEntity)
    {
        if (ObjectUtils.isEmpty(screenEntity))
            return null;
        return ScreenOutDto.builder()
                .code(screenEntity.getCode())
                .url(screenEntity.getDescription())
                .build();
    }

    public static TypeOutDto typeEntityToTypeDto(TypeEntity typeEntity)
    {
        if (ObjectUtils.isEmpty(typeEntity))
            return null;
        return TypeOutDto.builder()
                .typeId(typeEntity.getId())
                .category(typeEntity.getCategory())
                .description(typeEntity.getDescription())
                .build();
    }

    public static NotificationsUserOutDto notificationsUserEntityToNotificationsUserOutDto(
            NotificationsUserEntity notificationsUserEntity)
    {
        if (ObjectUtils.isEmpty(notificationsUserEntity))
            return null;

        NotificationEntity notificationEntity = notificationsUserEntity.getNotificationEntity();
        Map<String, String> metadata = Map.of();
        String description = notificationEntity.getDescription();

        if (notificationsUserEntity.getMetadata() != null
                && notificationsUserEntity.getMetadata().getContextJson() != null)
        {
            metadata = notificationsUserEntity.getMetadata().getContextJson();
            description = NotificationTemplateUtils.replaceKeys(description, metadata);
        }

        // A notification template can be shared by several user notifications. Do not
        // mutate the managed entity: each response row needs its own metadata-specific description.
        NotificationEntity notificationResponse = NotificationEntity.builder()
                .notificationId(notificationEntity.getNotificationId())
                .title(notificationEntity.getTitle())
                .description(description)
                .action(notificationEntity.getAction())
                .type(notificationEntity.getType())
                .screen(notificationEntity.getScreen())
                .lastModifyUser(notificationEntity.getLastModifyUser())
                .lastModifyApplication(notificationEntity.getLastModifyApplication())
                .lastModifyDate(notificationEntity.getLastModifyDate())
                .lastModifyIp(notificationEntity.getLastModifyIp())
                .build();

        return NotificationsUserOutDto.builder()
                .notificationUserId(notificationsUserEntity.getNotificationUserId())
                .notificationEntity(notificationResponse)
                .read(notificationsUserEntity.getRead())
                .lastModifyDate(notificationsUserEntity.getLastModifyDate())
                .userNuboId(notificationsUserEntity.getUserNuboId())
                .metadata(
                        metadata)
                .build();

    }
}

```

## src/main/java/com/nubo/notifications/api/models/dto/request/NotificationCreateInByUser.java

```java
package com.nubo.notifications.api.models.dto.request;

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
public class NotificationCreateInByUser {

    private Boolean read;

    private Long userNuboId;

    private Long notificationId;
}

```

## src/main/java/com/nubo/notifications/api/models/dto/request/NotificationCreateInDto.java

```java
package com.nubo.notifications.api.models.dto.request;

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
@JsonInclude(JsonInclude.Include.ALWAYS)
public class NotificationCreateInDto {

    @NotNull
    private String title;

    @NotNull
    private String description;

    @NotNull
    private Long typeId;

    @NotNull
    private String action;

}

```

## src/main/java/com/nubo/notifications/api/models/dto/request/NotificationRequestDto.java

```java
package com.nubo.notifications.api.models.dto.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import tools.jackson.databind.JsonNode;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class NotificationRequestDto {

    String eventType;

    @JsonProperty("notificacionId")
    Long notificationId;

    @JsonProperty("usuariosIds")
    List<Long> userIds;

    @JsonProperty("modulo")
    String module;

    @JsonProperty("perfiles")
    List<String> profiles;

    @JsonProperty("tipoNotificacion")
    String typeNotification;

    String screenCode;

    JsonNode metadata;

    String timestamp;

}

```

## src/main/java/com/nubo/notifications/api/models/dto/request/NotificationWSRequestDto.java

```java
package com.nubo.notifications.api.models.dto.request;

import tools.jackson.databind.JsonNode;
import com.nubo.notifications.api.models.entity.NotificationEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class NotificationWSRequestDto {
    Long userNuboId;
    Long notificationUserId;
    NotificationEntity notificationEntity;
    Boolean read;
    LocalDateTime lastModifyDate;
    String profile;
    JsonNode metadata;
}

```

## src/main/java/com/nubo/notifications/api/models/dto/request/NotificationsUsersInDto.java

```java
package com.nubo.notifications.api.models.dto.request;

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
public class NotificationsUsersInDto {

    private Boolean read;

    private Long userId;

    private Long notificationId;

    private Long notificationUserId;
}

```

## src/main/java/com/nubo/notifications/api/models/dto/response/NotificationsOutDto.java

```java
package com.nubo.notifications.api.models.dto.response;

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
@JsonInclude(JsonInclude.Include.ALWAYS)
public class NotificationsOutDto
{
    private Long id;
    private String title;
    private String description;
    private ScreenOutDto screen;
    private TypeOutDto typeId;
    private LocalDateTime timestamp;
}

```

## src/main/java/com/nubo/notifications/api/models/dto/response/NotificationsResponseOutDto.java

```java
package com.nubo.notifications.api.models.dto.response;

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
public class NotificationsResponseOutDto {

    private String response;
}

```

## src/main/java/com/nubo/notifications/api/models/dto/response/NotificationsUserOutDto.java

```java
package com.nubo.notifications.api.models.dto.response;

import java.time.LocalDateTime;
import java.util.Map;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.nubo.notifications.api.models.entity.NotificationEntity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.ALWAYS)
public class NotificationsUserOutDto
{

    private Long notificationUserId;
    private NotificationEntity notificationEntity;
    private Boolean read;
    private LocalDateTime lastModifyDate;
    private Long userNuboId;
    private Map<String, String> metadata;
}

```

## src/main/java/com/nubo/notifications/api/models/dto/response/PageResponseOutDto.java

```java
package com.nubo.notifications.api.models.dto.response;

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

## src/main/java/com/nubo/notifications/api/models/dto/response/ScreenOutDto.java

```java
package com.nubo.notifications.api.models.dto.response;

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
public class ScreenOutDto
{

    private String code;
    private String url;
}

```

## src/main/java/com/nubo/notifications/api/models/dto/response/TypeOutDto.java

```java
package com.nubo.notifications.api.models.dto.response;

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

    private Long typeId;

    private String description;

    private String category;
}

```

## src/main/java/com/nubo/notifications/api/models/entity/AssigmentEntity.java

```java
package com.nubo.notifications.api.models.entity;

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
@Table(name = "\"ASSIGMENT\"", schema = "\"NUANBODB\"")
public class AssigmentEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"ASSIGMENT_ID\"")
    private Long assigmentId;

    @ManyToOne
    @JoinColumn(name = "\"MODULE_ID\"", referencedColumnName = "\"MODULE_ID\"")
    private ModuleEntity module;

    @ManyToOne
    @JoinColumn(name = "\"PROFILE_ID\"", referencedColumnName = "\"PROFILE_ID\"")
    private ProfileEntity profile;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        AssigmentEntity entity = (AssigmentEntity) o;
        return java.util.Objects.equals(assigmentId, entity.assigmentId);
    }

    @Override
    public int hashCode() {
        return java.util.Objects.hash(assigmentId);
    }
}

```

## src/main/java/com/nubo/notifications/api/models/entity/ChannelEntity.java

```java
package com.nubo.notifications.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
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
@Table(name = "\"CHANNEL\"", schema = "\"NUANBODB\"")
public class ChannelEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"CHANNEL_ID\"", nullable = false)
    private Long channelId;

    @NotNull
    @Column(name = "\"CHANNEL_NAME\"", nullable = false)
    private String channelName;

    @ManyToOne
    @JoinColumn(name = "\"MODULE_ID\"", nullable = false)
    private ModuleEntity module;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        ChannelEntity entity = (ChannelEntity) o;
        return java.util.Objects.equals(channelId, entity.channelId);
    }

    @Override
    public int hashCode() {
        return java.util.Objects.hash(channelId);
    }
}

```

## src/main/java/com/nubo/notifications/api/models/entity/MenuAssignmentEntity.java

```java
package com.nubo.notifications.api.models.entity;

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
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"MENU_ASSIGNMENT\"", schema = "\"NUANBODB\"")
public class MenuAssignmentEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"MENU_ASSIGNMENT_ID\"", nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "\"PROFILE_ID\"", nullable = false)
    private ProfileEntity profile;

    @Column(name = "\"ENABLED\"")
    private Boolean enabled;

    @ManyToOne
    @JoinColumn(name = "\"SCREEN_ID\"")
    private ScreenEntity screen;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 250, nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDateTime;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50, nullable = false)
    private String lastModifyIp;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        MenuAssignmentEntity entity = (MenuAssignmentEntity) o;
        return java.util.Objects.equals(id, entity.id);
    }

    @Override
    public int hashCode() {
        return java.util.Objects.hash(id);
    }

}

```

## src/main/java/com/nubo/notifications/api/models/entity/ModuleEntity.java

```java
package com.nubo.notifications.api.models.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
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
@Table(name = "\"MODULE\"", schema = "\"NUANBODB\"")
public class ModuleEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"MODULE_ID\"", nullable = false)
    private Long moduleId;

    @NotNull
    @Column(name = "\"DESCRIPTION\"", nullable = false)
    private String description;

    @NotNull
    @Column(name = "\"LAST_MODIFY_USER\"", nullable = false)
    private String lastModifyUser;

    @NotNull
    @Column(name = "\"LAST_MODIFY_APPLIC\"", nullable = false)
    private String lastModifyApplic;

    @NotNull
    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDate;

    @NotNull
    @Column(name = "\"LAST_MODIFY_IP\"", nullable = false)
    private String lastModifyIp;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        ModuleEntity entity = (ModuleEntity) o;
        return java.util.Objects.equals(moduleId, entity.moduleId);
    }

    @Override
    public int hashCode() {
        return java.util.Objects.hash(moduleId);
    }
}

```

## src/main/java/com/nubo/notifications/api/models/entity/NotificationEntity.java

```java
package com.nubo.notifications.api.models.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
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
@Table(name = "\"NOTIFICATIONS\"", schema = "\"NUANBODB\"")
public class NotificationEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"NOTIFICATION_ID\"", nullable = false)
    private Long notificationId;

    @NotNull
    @Column(name = "\"TITLE\"", nullable = false)
    private String title;

    @NotNull
    @Column(name = "\"DESCRIPTION\"", nullable = false)
    private String description;

    @Column(name = "\"ACTION\"")
    private String action;

    @ManyToOne
    @JoinColumn(name = "\"TYPE_ID\"", nullable = false)
    private TypeEntity type;

    @ManyToOne
    @JoinColumn(name = "\"SCREEN_ID\"", nullable = true)
    private ScreenEntity screen;

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
        if (o == null || getClass() != o.getClass())
            return false;
        NotificationEntity entity = (NotificationEntity) o;
        return java.util.Objects.equals(notificationId, entity.notificationId);
    }

    @Override
    public int hashCode() {
        return java.util.Objects.hash(notificationId);
    }
}

```

## src/main/java/com/nubo/notifications/api/models/entity/NotificationMetadataEntity.java

```java
package com.nubo.notifications.api.models.entity;

import java.time.LocalDateTime;
import java.util.Map;

import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

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
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"NOTIFICATIONS_METADATA\"", schema = "\"NUANBODB\"")
public class NotificationMetadataEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"NOTIFICATIONS_METADATA_ID\"", nullable = false)
    private Long notificationMetadataId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"NOTIFICATION_USER_ID\"", nullable = false, unique = true)
    private NotificationsUserEntity notificationUser;

    @JdbcTypeCode(SqlTypes.JSON)
    @Column(name = "\"CONTEXT_JSON\"", columnDefinition = "jsonb", nullable = false)
    private Map<String, String> contextJson;

    @Column(name = "\"LAST_MODIFY_USER\"", nullable = false, length = 250)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", nullable = false, length = 250)
    private String lastModifyApplic;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false, length = 250)
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", nullable = false, length = 250)
    private String lastModifyIp;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        NotificationMetadataEntity entity = (NotificationMetadataEntity) o;
        return java.util.Objects.equals(notificationMetadataId, entity.notificationMetadataId);
    }

    @Override
    public int hashCode() {
        return java.util.Objects.hash(notificationMetadataId);
    }
}

```

## src/main/java/com/nubo/notifications/api/models/entity/NotificationsPreferenceEntity.java

```java
package com.nubo.notifications.api.models.entity;

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
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"NOTIFICATION_PREFERENCES\"", schema = "\"NUANBODB\"")
public class NotificationsPreferenceEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"NOTIFICATION_PREFERENCE_ID\"", nullable = false)
    private Long notificationPreferenceId;

    @Column(name = "\"USER_NUBO_ID\"", nullable = false)
    private Long userNuboId;

    @ManyToOne
    @JoinColumn(name = "\"TYPE_ID\"", nullable = false)
    private TypeEntity typeEntity;

    @Builder.Default
    @Column(name = "\"RECEIVE_NOTIFICATIONS\"", nullable = false)
    private Boolean receiveNotifications = true;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 250)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"")
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 250)
    private String lastModifyIp;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        NotificationsPreferenceEntity entity = (NotificationsPreferenceEntity) o;
        return java.util.Objects.equals(notificationPreferenceId, entity.notificationPreferenceId);
    }

    @Override
    public int hashCode() {
        return java.util.Objects.hash(notificationPreferenceId);
    }
}

```

## src/main/java/com/nubo/notifications/api/models/entity/NotificationsUserEntity.java

```java
package com.nubo.notifications.api.models.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
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
@Table(name = "\"NOTIFICATIONS_USERS\"", schema = "\"NUANBODB\"")
public class NotificationsUserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"NOTIFICATION_USER_ID\"", nullable = false)
    private Long notificationUserId;

    @ManyToOne
    @JoinColumn(name = "\"NOTIFICATION_ID\"", nullable = false)
    private NotificationEntity notificationEntity;

    @Column(name = "\"READ\"", nullable = false)
    private Boolean read;

    @OneToOne(mappedBy = "notificationUser", fetch = FetchType.LAZY, cascade = jakarta.persistence.CascadeType.ALL)
    private NotificationMetadataEntity metadata;

    @Column(name = "\"USER_NUBO_ID\"", nullable = false)
    private Long userNuboId;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 250)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"")
    private LocalDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 250)
    private String lastModifyIp;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        NotificationsUserEntity entity = (NotificationsUserEntity) o;
        return java.util.Objects.equals(notificationUserId, entity.notificationUserId);
    }

    @Override
    public int hashCode() {
        return java.util.Objects.hash(notificationUserId);
    }
}

```

## src/main/java/com/nubo/notifications/api/models/entity/ProfileEntity.java

```java
package com.nubo.notifications.api.models.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
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
@Table(name = "\"PROFILE\"", schema = "\"NUANBODB\"")
public class ProfileEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"PROFILE_ID\"", nullable = false)
    private Long profileId;

    @NotNull
    @Column(name = "\"NAME\"", nullable = false)
    private String name;

    @NotNull
    @Column(name = "\"DESCRIPTION\"", nullable = false)
    private String description;

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"", nullable = false)
    private StatusEntity status;

    @NotNull
    @Column(name = "\"LAST_MODIFY_USER\"", nullable = false)
    private String lastModifyUser;

    @NotNull
    @Column(name = "\"LAST_MODIFY_APPLIC\"", nullable = false)
    private String lastModifyApplic;

    @NotNull
    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private LocalDateTime lastModifyDate;

    @NotNull
    @Column(name = "\"LAST_MODIFY_IP\"", nullable = false)
    private String lastModifyIp;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        ProfileEntity entity = (ProfileEntity) o;
        return java.util.Objects.equals(profileId, entity.profileId);
    }

    @Override
    public int hashCode() {
        return java.util.Objects.hash(profileId);
    }
}

```

## src/main/java/com/nubo/notifications/api/models/entity/ProfileUserNuboEntity.java

```java
package com.nubo.notifications.api.models.entity;

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
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@IdClass(ProfileUserNuboKey.class)
@Table(name = "\"PROFILE_USER_NUBO\"", schema = "\"NUANBODB\"")
public class ProfileUserNuboEntity {

    @Id
    @ManyToOne
    @JoinColumn(name = "\"PROFILE_ID\"", nullable = false)
    private ProfileEntity profile;

    @Id
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

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        ProfileUserNuboEntity entity = (ProfileUserNuboEntity) o;
        return java.util.Objects.equals(profile, entity.profile) &&
                java.util.Objects.equals(userNubo, entity.userNubo);
    }

    @Override
    public int hashCode() {
        return java.util.Objects.hash(profile, userNubo);
    }

}

```

## src/main/java/com/nubo/notifications/api/models/entity/ProfileUserNuboKey.java

```java
package com.nubo.notifications.api.models.entity;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProfileUserNuboKey implements Serializable {

    private Long profile;

    private Long userNubo;

}

```

## src/main/java/com/nubo/notifications/api/models/entity/ScreenEntity.java

```java
package com.nubo.notifications.api.models.entity;

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
        if (o == null || getClass() != o.getClass())
            return false;
        ScreenEntity entity = (ScreenEntity) o;
        return java.util.Objects.equals(id, entity.id);
    }

    @Override
    public int hashCode() {
        return java.util.Objects.hash(id);
    }

}

```

## src/main/java/com/nubo/notifications/api/models/entity/StatusEntity.java

```java
package com.nubo.notifications.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
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
    private Long statusId;

    @NotNull
    @Column(name = "\"DESCRIPTION\"", nullable = false)
    private String description;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        StatusEntity entity = (StatusEntity) o;
        return java.util.Objects.equals(statusId, entity.statusId);
    }

    @Override
    public int hashCode() {
        return java.util.Objects.hash(statusId);
    }
}

```

## src/main/java/com/nubo/notifications/api/models/entity/TypeEntity.java

```java
package com.nubo.notifications.api.models.entity;

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

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        TypeEntity entity = (TypeEntity) o;
        return java.util.Objects.equals(id, entity.id);
    }

    @Override
    public int hashCode() {
        return java.util.Objects.hash(id);
    }
}

```

## src/main/java/com/nubo/notifications/api/models/entity/UserNuboEntity.java

```java
package com.nubo.notifications.api.models.entity;

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
@Table(name = "\"USER_NUBO\"", schema = "\"NUANBODB\"")
public class UserNuboEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"USER_NUBO_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"USER_NAME\"", unique = true, length = 80, nullable = false)
    private String userName;

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

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        UserNuboEntity entity = (UserNuboEntity) o;
        return java.util.Objects.equals(id, entity.id);
    }

    @Override
    public int hashCode() {
        return java.util.Objects.hash(id);
    }

}

```

## src/main/java/com/nubo/notifications/api/models/enums/NotificationsBusinessRulesEnum.java

```java
package com.nubo.notifications.api.models.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Arrays;
import java.util.Objects;

@Getter
@RequiredArgsConstructor
public enum NotificationsBusinessRulesEnum {

    RULE_OPERATION_SPECIAL_CORRECTION_SPECIAL_FIDUCIARY("RULE_OPERATION_SPECIAL_CORRECTION_SPECIAL_FIDUCIARY"),
    RULE_OPERATION_SPECIAL_CORRECTION_MAXIMUM_LIMIT("RULE_OPERATION_SPECIAL_CORRECTION_MAXIMUM_LIMIT"),
    RULE_OPERATION_SPECIAL_CORRECTION_ALLOWED_DAYS("RULE_OPERATION_SPECIAL_CORRECTION_ALLOWED_DAYS");

    private final String value;

    @JsonValue
    public String getValue() {
        return value;
    }

    @JsonCreator
    public static NotificationsBusinessRulesEnum fromValue(String value) {
        return Arrays.stream(NotificationsBusinessRulesEnum.values())
                .filter(status -> Objects.equals(status.value, value))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Unknown value: " + value));
    }

    @Converter(autoApply = true)
    public static class OperationBusinessRulesEnumConverter implements AttributeConverter<NotificationsBusinessRulesEnum, String> {

        @Override
        public String convertToDatabaseColumn(NotificationsBusinessRulesEnum status) {
            return status != null ? status.getValue() : null;
        }

        @Override
        public NotificationsBusinessRulesEnum convertToEntityAttribute(String dbData) {
            return dbData != null ? NotificationsBusinessRulesEnum.fromValue(dbData) : null;
        }
    }

}

```

## src/main/java/com/nubo/notifications/api/models/enums/NotificationsTypesEnum.java

```java
package com.nubo.notifications.api.models.enums;

import java.util.Arrays;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum NotificationsTypesEnum {

    NOTIFICATION_SILENT("NOTIFICACION_LISTA_SILENCIOSA"),
    NOTIFICATION_USER("NOTIFICACION_LISTA_PARA_USUARIO");

    private final String value;

    @JsonValue
    public String getValue() {
        return value;
    }

    @JsonCreator
    public static NotificationsTypesEnum fromValue(String value) {
        return Arrays.stream(NotificationsTypesEnum.values())
                .filter(status -> status.value.equalsIgnoreCase(value))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Unknown value: " + value));
    }

    @Converter(autoApply = true)
    public static class NotificationsTypesEnumConverter implements AttributeConverter<NotificationsTypesEnum, String> {

        @Override
        public String convertToDatabaseColumn(NotificationsTypesEnum status) {
            return status != null ? status.getValue() : null;
        }

        @Override
        public NotificationsTypesEnum convertToEntityAttribute(String dbData) {
            return dbData != null ? NotificationsTypesEnum.fromValue(dbData) : null;
        }
    }

}

```

## src/main/java/com/nubo/notifications/api/models/enums/PropertiesEnum.java

```java
package com.nubo.notifications.api.models.enums;

import java.util.Arrays;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum PropertiesEnum {

    CLIENT_IP("client_ip"),
    CLIENT_USER("client_user"),
    CLIENT_DATETIME("client_datetime"),
    VERSION_API("version_api"),
    AUTH_TOKEN("auth_token"),
    NOTIFICATION_METADATA_KEY("metadata"),
    NOTIFICATION_ID_KEY("notificacionId"),
    NOTIFICATION_PROFILES_KEY("perfiles"),
    NOTIFICATION_MODULE_KEY("modulo"),
    NOTIFICATION_USERS_KEY("usuariosIds"),
    NOTIFICATION_TYPE_KEY("tipoNotificacion"),
    NOTIFICATION_TIMESTAMP("timestamp"),
    NOTIFICATION_EVENT_TYPE_KEY("eventType"),
    NOTIFICATION_ALL_KEY("ALL"),
    NOTIFICATION_DEFAULT_MODULE("DEFAULT");

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

## src/main/java/com/nubo/notifications/api/models/enums/VersionApiEnum.java

```java
package com.nubo.notifications.api.models.enums;

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

## src/main/java/com/nubo/notifications/api/repository/MenuAssignmentRepository.java

```java
package com.nubo.notifications.api.repository;

import com.nubo.notifications.api.models.entity.MenuAssignmentEntity;
import com.nubo.notifications.api.models.entity.UserNuboEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface MenuAssignmentRepository extends JpaRepository<MenuAssignmentEntity, Long> {

    @Query("""
        SELECT DISTINCT pu.userNubo FROM MenuAssignmentEntity ma
        JOIN ma.profile p
        JOIN ProfileUserNuboEntity pu ON pu.profile.profileId = p.profileId
        WHERE ma.screen.code = :screenCode
        """)
    List<UserNuboEntity> findUsersByScreenCode(@Param("screenCode") String screenCode);
}

```

## src/main/java/com/nubo/notifications/api/repository/NotificationMetadataRepository.java

```java
package com.nubo.notifications.api.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.nubo.notifications.api.models.entity.NotificationMetadataEntity;

@Repository
public interface NotificationMetadataRepository extends JpaRepository<NotificationMetadataEntity, Long>
{

    Optional<NotificationMetadataEntity> findByNotificationUserNotificationUserId(Long notificationUserId);

    @Query("SELECT m FROM NotificationMetadataEntity m " +
            "JOIN FETCH m.notificationUser nu " +
            "WHERE nu.notificationUserId = :notificationUserId")
    Optional<NotificationMetadataEntity> findByNotificationUserIdWithUser(
            @Param("notificationUserId") Long notificationUserId);

    boolean existsByNotificationUserNotificationUserId(Long notificationUserId);

    void deleteByNotificationUserNotificationUserId(Long notificationUserId);

    @Query("SELECT m FROM NotificationMetadataEntity m " +
            "JOIN FETCH m.notificationUser nu " +
            "WHERE nu.userNuboId = :userNuboId")
    java.util.List<NotificationMetadataEntity> findAllByUserNuboId(@Param("userNuboId") Long userNuboId);
}

```

## src/main/java/com/nubo/notifications/api/repository/NotificationsRepository.java

```java
package com.nubo.notifications.api.repository;

import com.nubo.notifications.api.models.entity.NotificationEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface NotificationsRepository extends JpaRepository<NotificationEntity, Long> {

    @Query("SELECT n FROM NotificationEntity n WHERE n.notificationId = :notificationId")
    List<NotificationEntity> findNotificationById(Long notificationId);

    @Query("SELECT n FROM NotificationEntity n JOIN n.type t WHERE t.id = :typeId")
    List<NotificationEntity> findNotificationByType(Long typeId);

    @Query("SELECT n FROM NotificationEntity n WHERE n.title = :title")
    List<NotificationEntity> findNotificationByName(String title);
}

```

## src/main/java/com/nubo/notifications/api/repository/NotificationsUserRepository.java

```java
package com.nubo.notifications.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import com.nubo.notifications.api.models.entity.NotificationsUserEntity;

public interface NotificationsUserRepository extends JpaRepository<NotificationsUserEntity, Long>
{

    @Query("SELECT n FROM NotificationsUserEntity n " +
            "LEFT JOIN FETCH n.metadata " +
            "WHERE n.userNuboId = :userId AND n.read = :read")
    List<NotificationsUserEntity> findNotificationsByUserIdAndRead(Long userId, Boolean read);

    @Query("SELECT n FROM NotificationsUserEntity n " +
            "LEFT JOIN FETCH n.metadata " +
            "WHERE n.read = :read")
    List<NotificationsUserEntity> findNotificationByRead(Boolean read);

    @Query("SELECT n FROM NotificationsUserEntity n " +
            "LEFT JOIN FETCH n.metadata " +
            "WHERE n.userNuboId = :userId ORDER BY n.lastModifyDate DESC")
    List<NotificationsUserEntity> findNotificationsByUserId(Long userId);

    @Modifying
    @Transactional
    @Query("UPDATE NotificationsUserEntity n SET n.read = true, " +
            "n.lastModifyDate = CURRENT_TIMESTAMP WHERE n.notificationUserId = :notificationUserId AND n.read = false")
    int updateNotificationReadStatus(Long notificationUserId);

}

```

## src/main/java/com/nubo/notifications/api/repository/ProfileRepository.java

```java
package com.nubo.notifications.api.repository;

import com.nubo.notifications.api.models.entity.ProfileEntity;
import com.nubo.notifications.api.models.entity.UserNuboEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProfileRepository extends JpaRepository<ProfileEntity, Long> {

    @Query("""
        SELECT DISTINCT u FROM ProfileUserNuboEntity pun
        JOIN pun.userNubo u
        JOIN pun.profile p
        WHERE p.name = :profileName
        """)
    List<UserNuboEntity> findUsersByProfileName(@Param("profileName") String profileName);

    @Query("""
        SELECT CASE WHEN COUNT(p) > 0 THEN true ELSE false END
        FROM AssigmentEntity a
        JOIN a.profile p
        JOIN a.module m
        WHERE p.name = :profileName AND m.description = :moduleDescription
        """)
    boolean profileBelongsToModulo(@Param("profileName") String profileName,
                                   @Param("moduleDescription") String moduleDescription);
}

```

## src/main/java/com/nubo/notifications/api/repository/TypeRepository.java

```java
package com.nubo.notifications.api.repository;

import com.nubo.notifications.api.models.entity.TypeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TypeRepository extends JpaRepository<TypeEntity, Long> {
}

```

## src/main/java/com/nubo/notifications/api/repository/UserNuboRepository.java

```java
package com.nubo.notifications.api.repository;

import com.nubo.notifications.api.models.entity.UserNuboEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface UserNuboRepository extends JpaRepository<UserNuboEntity, Long> {

    @Query("SELECT u FROM UserNuboEntity u " +
            "WHERE u.userName = :userName")
    Optional<UserNuboEntity> findByUserName(String userName);

    @Query("SELECT u FROM UserNuboEntity u " +
            "WHERE u.id = :userId")
    Optional<UserNuboEntity> findByUserId(Long userId);
}

```

## src/main/java/com/nubo/notifications/api/service/NotificationsAsyncService.java

```java
package com.nubo.notifications.api.service;

import com.nubo.notifications.api.models.dto.request.NotificationRequestDto;

public interface NotificationsAsyncService {

    void processNotificationEvent(NotificationRequestDto notificationRequestDto);

}

```

## src/main/java/com/nubo/notifications/api/service/NotificationsService.java

```java
package com.nubo.notifications.api.service;

import java.util.List;

import com.nubo.notifications.api.models.dto.request.NotificationCreateInByUser;
import com.nubo.notifications.api.models.dto.request.NotificationCreateInDto;
import com.nubo.notifications.api.models.dto.request.NotificationsUsersInDto;
import com.nubo.notifications.api.models.dto.response.NotificationsOutDto;
import com.nubo.notifications.api.models.dto.response.NotificationsResponseOutDto;
import com.nubo.notifications.api.models.dto.response.NotificationsUserOutDto;

public interface NotificationsService {

    NotificationsResponseOutDto createNotification(NotificationCreateInDto notificationCreateInDto);

    NotificationsResponseOutDto markNotificationAsRead(List<NotificationsUsersInDto> notificationsUsersInDto);

    List<NotificationsUserOutDto> findNotificationsByUserIdAndRead(Long userId, Boolean isRead);

    List<NotificationsOutDto> findNotificationsById(Long id);

    List<NotificationsOutDto> findNotificationsByName(String nameNotification);

    List<NotificationsOutDto> findNotificationsByType(Long type);

    List<NotificationsUserOutDto> findNotificationsByRead(Boolean read);

    NotificationsResponseOutDto createNotificationByUser(NotificationCreateInByUser notificationCreateInByUser);

    List<NotificationsUserOutDto> findNotificationsByUserId(Long userId);

}

```

## src/main/java/com/nubo/notifications/api/service/impl/NotificationsAsyncServiceImpl.java

```java
package com.nubo.notifications.api.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import tools.jackson.core.type.TypeReference;
import tools.jackson.databind.JsonNode;
import tools.jackson.databind.ObjectMapper;
import com.nubo.notifications.api.application.properties.PropertiesConfig;
import com.nubo.notifications.api.application.properties.PropertiesContext;
import com.nubo.notifications.api.application.util.ApplicationUtils;
import com.nubo.notifications.api.application.util.NotificationTemplateUtils;
import com.nubo.notifications.api.client.kafka.producer.service.KafkaNuboAdapter;
import com.nubo.notifications.api.exception.ServiceException;
import com.nubo.notifications.api.exception.error.ErrorCode;
import com.nubo.notifications.api.models.dto.request.NotificationRequestDto;
import com.nubo.notifications.api.models.dto.request.NotificationWSRequestDto;
import com.nubo.notifications.api.models.entity.NotificationEntity;
import com.nubo.notifications.api.models.entity.NotificationMetadataEntity;
import com.nubo.notifications.api.models.entity.NotificationsUserEntity;
import com.nubo.notifications.api.models.entity.TypeEntity;
import com.nubo.notifications.api.models.entity.UserNuboEntity;
import com.nubo.notifications.api.models.enums.NotificationsTypesEnum;
import com.nubo.notifications.api.models.enums.PropertiesEnum;
import com.nubo.notifications.api.repository.MenuAssignmentRepository;
import com.nubo.notifications.api.repository.NotificationMetadataRepository;
import com.nubo.notifications.api.repository.NotificationsRepository;
import com.nubo.notifications.api.repository.NotificationsUserRepository;
import com.nubo.notifications.api.repository.ProfileRepository;
import com.nubo.notifications.api.service.NotificationsAsyncService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class NotificationsAsyncServiceImpl implements NotificationsAsyncService {

    private final NotificationsRepository notificationsRepository;
    private final NotificationsUserRepository notificationsUserRepository;
    private final NotificationMetadataRepository notificationMetadataRepository;
    private final ProfileRepository profileRepository;
    private final MenuAssignmentRepository menuAssignmentRepository;
    private final PropertiesConfig propertiesConfig;
    private final KafkaNuboAdapter kafkaTemplate;

    @Override
    public void processNotificationEvent(NotificationRequestDto notificationRequestDto) {
        log.info("Start method processNotificationEvent -> {}", notificationRequestDto);

        String module = propertiesConfig.getNotificationKafkaModule();

        try {

            String moduleNotificationName = notificationRequestDto.getModule();

            if (!PropertiesEnum.NOTIFICATION_ALL_KEY.getValue().equalsIgnoreCase(module)
                    && !moduleNotificationName.equalsIgnoreCase(module)) {
                return;
            }

            String notificationType = notificationRequestDto.getEventType();
            if (notificationType == null || notificationType.isEmpty()) {
                log.warn("Event type is required in the notification notificationRequestDto: {}",
                        notificationRequestDto);
                return;
            }

            Long notificationId = notificationRequestDto.getNotificationId();
            List<String> profilesToNotify = notificationRequestDto.getProfiles();
            List<Long> usersNuboId = notificationRequestDto.getUserIds();
            JsonNode metadataNode = notificationRequestDto.getMetadata();
            String screenCode = notificationRequestDto.getScreenCode();

            if ((usersNuboId == null || usersNuboId.isEmpty())
                    && (profilesToNotify == null || profilesToNotify.isEmpty()) && screenCode == null) {
                log.warn("Profiles to notify are required if no usersNuboId are provided: {}", notificationRequestDto);
                return;
            }

            if (profilesToNotify != null && !profilesToNotify.isEmpty() && ObjectUtils.isEmpty(screenCode)) {
                profilesToNotify.stream()
                        .filter(profile -> PropertiesEnum.NOTIFICATION_DEFAULT_MODULE.getValue()
                                .equalsIgnoreCase(module)
                                || profileRepository.profileBelongsToModulo(profile, moduleNotificationName))
                        .forEach(
                                profile -> notifyProfileUsers(profile, notificationId, metadataNode, notificationType));
            }
            if (screenCode != null) {
                List<UserNuboEntity> userNuboEntityList = menuAssignmentRepository.findUsersByScreenCode(screenCode);
                for (UserNuboEntity userNuboEntity : userNuboEntityList) {
                    this.processNotify(userNuboEntity.getId(), notificationId, notificationType, "Direct",
                            metadataNode);
                }
            }

            if (usersNuboId != null && !usersNuboId.isEmpty()) {
                usersNuboId.forEach(userId -> {
                    this.processNotify(userId, notificationId, notificationType, "Direct", metadataNode);
                });
            }

        } catch (Exception e) {
            log.error("Error processing notification event notificationRequestDto: {}", e.getMessage(), e);
        }
        log.info("End method processNotificationEvent");
    }

    private void processNotify(Long userId, Long notificationId, String notificationType, String profileName,
            JsonNode metadataNode) {
        NotificationsUserEntity notification = createAndSaveNotificationForUser(userId, notificationId,
                notificationType, metadataNode);
        sendKafkaNotification(userId, notification, profileName, metadataNode);
    }

    private void notifyProfileUsers(String profileName, Long notificationId, JsonNode metadataNode,
            String notificationType) {
        profileRepository.findUsersByProfileName(profileName).forEach(user -> {
            this.processNotify(user.getId(), notificationId, notificationType, profileName, metadataNode);
        });
    }

    private NotificationsUserEntity replaceMetadataInNotificationDescription(NotificationsUserEntity notification,
            JsonNode metadataNode) {

        if (metadataNode != null && metadataNode.isObject()) {
            Map<String, String> metadataMap = new ObjectMapper()
                    .convertValue(metadataNode, new TypeReference<Map<String, String>>() {
                    });
            notification.getNotificationEntity().setDescription(
                    NotificationTemplateUtils.replaceKeys(notification.getNotificationEntity().getDescription(),
                            metadataMap));
        }
        return notification;
    }

    private NotificationsUserEntity createAndSaveNotificationForUser(Long userId, Long notificationId,
            String notificationType, JsonNode metadataNode) {
        NotificationsUserEntity notificationsUserEntity;
        NotificationsTypesEnum notificationTypeEnum = NotificationsTypesEnum.fromValue(notificationType);

        switch (notificationTypeEnum) {
            case NOTIFICATION_USER:
                notificationsUserEntity = NotificationsUserEntity.builder()
                        .userNuboId(userId)
                        .read(false)
                        .notificationEntity(validateNotification(notificationId))
                        .lastModifyApplication(propertiesConfig.getApiName())
                        .lastModifyIp(PropertiesContext.getClientIp())
                        .lastModifyUser(PropertiesContext.getClientUser())
                        .lastModifyDate(PropertiesContext.getClientDatetime())
                        .build();
                notificationsUserRepository.save(notificationsUserEntity);
                notificationsUserRepository.flush();

                if (metadataNode != null && metadataNode.isObject()) {
                    NotificationMetadataEntity metaEntity = NotificationMetadataEntity.builder()
                            .notificationUser(notificationsUserEntity)
                            .contextJson(
                                    new ObjectMapper()
                                            .convertValue(metadataNode, new TypeReference<Map<String, String>>() {
                                            }))
                            .lastModifyApplic(propertiesConfig.getApiName())
                            .lastModifyIp(PropertiesContext.getClientIp())
                            .lastModifyUser(PropertiesContext.getClientUser())
                            .lastModifyDate(PropertiesContext.getClientDatetime())
                            .build();
                    notificationMetadataRepository.save(metaEntity);
                }
                break;

            case NOTIFICATION_SILENT:
                notificationsUserEntity = NotificationsUserEntity.builder()
                        .notificationUserId(0L)
                        .userNuboId(userId)
                        .read(false)
                        .notificationEntity(
                                NotificationEntity.builder()
                                        .notificationId(0L)
                                        .action("INTERNAL_CODE")
                                        .title("Silent Notification")
                                        .description("This is a silent notification")
                                        .type(TypeEntity.builder()
                                                .id(0L)
                                                .description("SILENT")
                                                .category("NOTIFICACION")
                                                .build())
                                        .build())
                        .lastModifyApplication(propertiesConfig.getApiName())
                        .lastModifyIp(PropertiesContext.getClientIp())
                        .lastModifyUser(PropertiesContext.getClientUser())
                        .lastModifyDate(PropertiesContext.getClientDatetime())
                        .build();
                break;
            default:
                throw new ServiceException(ErrorCode.NOTIFICATION_TYPE_NOT_SUPPORTED, HttpStatus.BAD_REQUEST);
        }

        log.info("Notification created for user ID: {}", userId);
        return replaceMetadataInNotificationDescription(notificationsUserEntity, metadataNode);
    }

    private void sendKafkaNotification(Long userId,
            NotificationsUserEntity notification, String profile,
            JsonNode metadataNode) {
        try {
            String kafkaTopic = propertiesConfig.getNotificationKafkaTopicWs();
            NotificationWSRequestDto notificationDto = NotificationWSRequestDto.builder()
                    .userNuboId(userId)
                    .notificationUserId(notification.getNotificationUserId())
                    .notificationEntity((notification.getNotificationEntity()))
                    .read(notification.getRead())
                    .lastModifyDate(notification.getLastModifyDate())
                    .profile(profile)
                    .metadata(metadataNode)
                    .build();

            String message = ApplicationUtils.convertObjectToJson(notificationDto);
            kafkaTemplate.sendMessage(kafkaTopic, message);

            log.info("Notification sent to Kafka topic {} for user ID: {}", kafkaTopic, userId);
        } catch (Exception ex) {
            log.error("Error sending notification to Kafka: {}", ex.getMessage(), ex);
        }
    }

    private NotificationEntity validateNotification(Long notificationId) {
        return notificationsRepository.findById(notificationId)
                .orElseThrow(() -> new ServiceException(ErrorCode.NOTIFICATION_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

}

```

## src/main/java/com/nubo/notifications/api/service/impl/NotificationsServiceImpl.java

```java
package com.nubo.notifications.api.service.impl;

import com.nubo.notifications.api.application.properties.PropertiesConfig;
import com.nubo.notifications.api.application.properties.PropertiesContext;
import com.nubo.notifications.api.exception.ServiceException;
import com.nubo.notifications.api.exception.error.ErrorCode;
import com.nubo.notifications.api.helpers.MapperUtil;
import com.nubo.notifications.api.models.dto.request.NotificationCreateInByUser;
import com.nubo.notifications.api.models.dto.request.NotificationCreateInDto;
import com.nubo.notifications.api.models.dto.request.NotificationsUsersInDto;
import com.nubo.notifications.api.models.dto.response.NotificationsOutDto;
import com.nubo.notifications.api.models.dto.response.NotificationsResponseOutDto;
import com.nubo.notifications.api.models.dto.response.NotificationsUserOutDto;
import com.nubo.notifications.api.models.entity.NotificationEntity;
import com.nubo.notifications.api.models.entity.NotificationsUserEntity;
import com.nubo.notifications.api.models.entity.TypeEntity;
import com.nubo.notifications.api.models.enums.VersionApiEnum;
import com.nubo.notifications.api.repository.NotificationsRepository;
import com.nubo.notifications.api.repository.NotificationsUserRepository;
import com.nubo.notifications.api.repository.TypeRepository;
import com.nubo.notifications.api.service.NotificationsService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
@Slf4j
public class NotificationsServiceImpl implements NotificationsService {

    private final NotificationsRepository notificationsRepository;
    private final NotificationsUserRepository notificationsUserRepository;
    private final PropertiesConfig propertiesConfig;
    private final TypeRepository typeRepository;

    @Override
    public NotificationsResponseOutDto createNotification(NotificationCreateInDto notificationCreateInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return createNotificationV1(notificationCreateInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private NotificationsResponseOutDto createNotificationV1(NotificationCreateInDto notificationCreateInDto) {
        log.info("Start method createNotificationV1 -> {}", notificationCreateInDto);

        NotificationsResponseOutDto notificationsResponseOutDto = new NotificationsResponseOutDto();
        NotificationEntity notificationEntity = NotificationEntity.builder()
                .title(notificationCreateInDto.getTitle())
                .description(notificationCreateInDto.getDescription())
                .action(notificationCreateInDto.getAction())
                .type(validateType(notificationCreateInDto.getTypeId()))
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyIp(PropertiesContext.getClientIp())
                .lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyDate(PropertiesContext.getClientDatetime())
                .build();

        String response = notificationsRepository.save(notificationEntity).toString();

        notificationsResponseOutDto.setResponse(response);

        log.info("End method createNotificationV1 -> {}", notificationsResponseOutDto);
        return notificationsResponseOutDto;
    }

    @Override
    public NotificationsResponseOutDto markNotificationAsRead(List<NotificationsUsersInDto> notificationsUsersInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return markNotificationAsReadV1(notificationsUsersInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private NotificationsResponseOutDto markNotificationAsReadV1(
            List<NotificationsUsersInDto> notificationsUsersInDto) {
        log.info("Start method markNotificationAsReadV1 -> {}", notificationsUsersInDto);

        NotificationsResponseOutDto notificationsResponseOutDto = new NotificationsResponseOutDto();

        for (NotificationsUsersInDto notificationsUserInDto : notificationsUsersInDto) {

            NotificationsUserEntity notificationsUserEntity = NotificationsUserEntity.builder()
                    .userNuboId(notificationsUserInDto.getUserId())
                    .read(notificationsUserInDto.getRead())
                    .notificationUserId(notificationsUserInDto.getNotificationUserId())
                    .notificationEntity(validateNotification(notificationsUserInDto.getNotificationId()))
                    .lastModifyApplication(propertiesConfig.getApiName())
                    .lastModifyIp(PropertiesContext.getClientIp())
                    .lastModifyUser(PropertiesContext.getClientUser())
                    .lastModifyDate(PropertiesContext.getClientDatetime())
                    .build();

            notificationsUserRepository.updateNotificationReadStatus(notificationsUserEntity.getNotificationUserId());
        }
        notificationsResponseOutDto.setResponse("Notifications mark as a read");

        log.info("End method markNotificationAsReadV1 -> {}", notificationsResponseOutDto);
        return notificationsResponseOutDto;
    }

    @Override
    public List<NotificationsUserOutDto> findNotificationsByUserIdAndRead(Long userId, Boolean read) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findNotificationsByUserIdAndReadV1(userId, read);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<NotificationsUserOutDto> findNotificationsByUserIdAndReadV1(Long userId, Boolean read) {
        log.info("Start method findNotificationsByUserIdAndReadV1 -> {} -> {}", userId, read);

        List<NotificationsUserEntity> notificationsUserEntityList = notificationsUserRepository
                .findNotificationsByUserIdAndRead(userId, read);
        List<NotificationsUserOutDto> notificationsUserOutDtos = notificationsUserEntityList.stream().map(
                MapperUtil::notificationsUserEntityToNotificationsUserOutDto).toList();

        if (notificationsUserOutDtos.isEmpty()) {
            throw new ServiceException(ErrorCode.NOTIFICATION_NOT_FOUND, HttpStatus.NOT_FOUND);
        }

        log.info("End method findNotificationsByUserIdAndReadV1, size -> {}", notificationsUserOutDtos.size());
        return notificationsUserOutDtos;
    }

    @Override
    public List<NotificationsOutDto> findNotificationsById(Long notificationId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findNotificationsByIdV1(notificationId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<NotificationsOutDto> findNotificationsByIdV1(Long notificationId) {
        log.info("Start method findNotificationsByIdV1 -> {}", notificationId);

        List<NotificationEntity> notificationEntityList = notificationsRepository.findNotificationById(notificationId);
        List<NotificationsOutDto> notificationsOutDtoList = notificationEntityList.stream().map(
                MapperUtil::notificationEntityToNotificationOutDto).toList();

        if (notificationsOutDtoList.isEmpty()) {
            throw new ServiceException(ErrorCode.NOTIFICATION_NOT_FOUND, HttpStatus.NOT_FOUND);
        }

        log.info("End method findNotificationsByIdV1, size -> {}", notificationsOutDtoList.size());
        return notificationsOutDtoList;
    }

    @Override
    public List<NotificationsOutDto> findNotificationsByName(String nameNotification) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findNotificationsByNameV1(nameNotification);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<NotificationsOutDto> findNotificationsByNameV1(String nameNotification) {
        log.info("Start method findNotificationsByNameV1 -> {}", nameNotification);

        List<NotificationEntity> notificationEntityList = notificationsRepository
                .findNotificationByName(nameNotification);
        List<NotificationsOutDto> notificationsOutDtoList = notificationEntityList.stream().map(
                MapperUtil::notificationEntityToNotificationOutDto).toList();

        if (notificationsOutDtoList.isEmpty()) {
            throw new ServiceException(ErrorCode.NOTIFICATION_NOT_FOUND, HttpStatus.NOT_FOUND);
        }

        log.info("End method findNotificationsByNameV1, size -> {}", notificationsOutDtoList.size());
        return notificationsOutDtoList;
    }

    @Override
    public List<NotificationsOutDto> findNotificationsByType(Long typeId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findNotificationsByTypeV1(typeId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<NotificationsOutDto> findNotificationsByTypeV1(Long typeId) {
        log.info("Start method findNotificationsByTypeV1 -> {}", typeId);

        List<NotificationEntity> notificationEntityList = notificationsRepository.findNotificationByType(typeId);
        List<NotificationsOutDto> notificationsOutDtoList = notificationEntityList.stream().map(
                MapperUtil::notificationEntityToNotificationOutDto).toList();

        if (notificationsOutDtoList.isEmpty()) {
            throw new ServiceException(ErrorCode.NOTIFICATION_NOT_FOUND, HttpStatus.NOT_FOUND);
        }

        log.info("End method findNotificationsByTypeV1, size -> {}", notificationsOutDtoList.size());
        return notificationsOutDtoList;
    }

    @Override
    public List<NotificationsUserOutDto> findNotificationsByRead(Boolean read) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findNotificationsByReadV1(read);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<NotificationsUserOutDto> findNotificationsByReadV1(Boolean read) {
        log.info("Start method findNotificationsByReadV1 -> {}", read);

        List<NotificationsUserEntity> notificationsUserEntityList = notificationsUserRepository
                .findNotificationByRead(read);
        List<NotificationsUserOutDto> notificationsUserOutDtosList = notificationsUserEntityList.stream().map(
                MapperUtil::notificationsUserEntityToNotificationsUserOutDto).toList();

        if (notificationsUserOutDtosList.isEmpty()) {
            throw new ServiceException(ErrorCode.NOTIFICATION_NOT_FOUND, HttpStatus.NOT_FOUND);
        }

        log.info("End method findNotificationsByReadV1, size -> {}", notificationsUserOutDtosList.size());
        return notificationsUserOutDtosList;
    }

    @Override
    public NotificationsResponseOutDto createNotificationByUser(NotificationCreateInByUser notificationCreateInByUser) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return createNotificationByUserV1(notificationCreateInByUser);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private NotificationsResponseOutDto createNotificationByUserV1(
            NotificationCreateInByUser notificationCreateInByUser) {
        log.info("Start method createNotificationByUserV1 -> {}", notificationCreateInByUser);

        NotificationsResponseOutDto notificationsResponseOutDto = new NotificationsResponseOutDto();
        NotificationsUserEntity notificationsUserEntity = NotificationsUserEntity.builder()
                .userNuboId(notificationCreateInByUser.getUserNuboId())
                .read(notificationCreateInByUser.getRead())
                .notificationUserId(notificationCreateInByUser.getUserNuboId())
                .notificationEntity(validateNotification(notificationCreateInByUser.getNotificationId()))
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyIp(PropertiesContext.getClientIp())
                .lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyDate(PropertiesContext.getClientDatetime())
                .build();

        String response = notificationsUserRepository.save(notificationsUserEntity).toString();

        notificationsResponseOutDto.setResponse(response);

        log.info("End method createNotificationByUserV1 -> {}", notificationsResponseOutDto);
        return notificationsResponseOutDto;
    }

    @Override
    public List<NotificationsUserOutDto> findNotificationsByUserId(Long userId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findNotificationsByUserIdV1(userId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<NotificationsUserOutDto> findNotificationsByUserIdV1(Long userId) {
        log.info("Start method findNotificationsByUserIdV1 -> {}", userId);

        List<NotificationsUserEntity> notificationEntityList = notificationsUserRepository
                .findNotificationsByUserId(userId);
        List<NotificationsUserOutDto> notificationsUserOutDtos = notificationEntityList.stream()
                .map(MapperUtil::notificationsUserEntityToNotificationsUserOutDto)
                .toList();

        log.info("End method findNotificationsByUserIdV1, size-> {}", notificationsUserOutDtos.size());
        return notificationsUserOutDtos;
    }

    private TypeEntity validateType(Long typeId) {
        return typeRepository.findById(typeId)
                .orElseThrow(() -> new ServiceException(ErrorCode.TYPE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private NotificationEntity validateNotification(Long notificationId) {
        return notificationsRepository.findById(notificationId)
                .orElseThrow(() -> new ServiceException(ErrorCode.NOTIFICATION_NOT_FOUND, HttpStatus.NOT_FOUND));
    }
}

```

## src/main/java/com/nubo/notifications/api/web/controller/NotificationsRestController.java

```java
package com.nubo.notifications.api.web.controller;

import com.nubo.notifications.api.models.dto.request.NotificationCreateInByUser;
import com.nubo.notifications.api.models.dto.request.NotificationCreateInDto;
import com.nubo.notifications.api.models.dto.request.NotificationsUsersInDto;
import com.nubo.notifications.api.models.dto.response.NotificationsResponseOutDto;
import com.nubo.notifications.api.models.dto.response.NotificationsOutDto;
import com.nubo.notifications.api.models.dto.response.NotificationsUserOutDto;
import com.nubo.notifications.api.service.NotificationsService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Tag(name = "Notifications")
@RestController
@RequestMapping("/{version}/notifications")
@RequiredArgsConstructor
public class NotificationsRestController {

    private final NotificationsService notificationsService;

    @Operation(summary = "Create notification", description = "Post Notificacion create")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = NotificationsResponseOutDto.class)))})
    @PostMapping
    public ResponseEntity<NotificationsResponseOutDto> createNotification(
            @RequestBody NotificationCreateInDto notificationCreateInDto) {
        return ResponseEntity.status(HttpStatus.OK).body(notificationsService.createNotification(notificationCreateInDto));
    }

    @Operation(summary = "Mark as a read notification", description = "Mark as a read Notificacion create")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = NotificationsResponseOutDto.class)))})
    @PutMapping("/markAsRead")
    public ResponseEntity<NotificationsResponseOutDto> markNotificationAsRead(
            @RequestBody List<NotificationsUsersInDto> notificationsUsersInDto) {
        return ResponseEntity.status(HttpStatus.OK).body(notificationsService.markNotificationAsRead(notificationsUsersInDto));
    }

    @Operation(summary = "See notification by user", description = "see Notificacion by user")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = NotificationsUserOutDto.class)))})
    @GetMapping("/user/{userId}/read/{read}")
    public ResponseEntity<List<NotificationsUserOutDto>> findNotificationsByUserIdAndRead(@PathVariable Long userId,
                                                                                       @PathVariable boolean read) {
        return ResponseEntity.ok(notificationsService.findNotificationsByUserIdAndRead(userId, read));
    }

    @Operation(summary = "See notification by id", description = "see Notificacion by id")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = NotificationsOutDto.class)))})
    @GetMapping("/id/{notificationId}")
    public ResponseEntity<List<NotificationsOutDto>> findNotificationsById(@PathVariable Long notificationId) {
        return ResponseEntity.status(HttpStatus.OK).body(notificationsService.findNotificationsById(notificationId));
    }

    @Operation(summary = "See notification by name", description = "see Notificacion by name")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = NotificationsOutDto.class)))})
    @GetMapping("/name/{nameNotification}")
    public ResponseEntity<List<NotificationsOutDto>> findNotificationsByName(@PathVariable String nameNotification){
        return ResponseEntity.status(HttpStatus.OK).body(notificationsService.findNotificationsByName(nameNotification));
    }

    @Operation(summary = "See notification by type", description = "see Notificacion by type")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = NotificationsOutDto.class)))})
    @GetMapping("/type/{typeId}")
    public ResponseEntity<List<NotificationsOutDto>> findNotificationsByType(@PathVariable Long typeId){
        return ResponseEntity.status(HttpStatus.OK).body(notificationsService.findNotificationsByType(typeId));
    }

    @Operation(summary = "See notification by read", description = "see Notificacion by read")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = NotificationsUserOutDto.class)))})
    @GetMapping("/read/{read}")
    public ResponseEntity<List<NotificationsUserOutDto>> findNotificationsByRead(@PathVariable Boolean read){
        return ResponseEntity.status(HttpStatus.OK).body(notificationsService.findNotificationsByRead(read));
    }

    @Operation(summary = "Create notification by User", description = "Post Notificacion create by user")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = NotificationsResponseOutDto.class)))})
    @PostMapping("/user/create/")
    public ResponseEntity<NotificationsResponseOutDto> createNotificationByUser(
            @RequestBody NotificationCreateInByUser notificationCreateInByUser) {
        return ResponseEntity.status(HttpStatus.OK).body(notificationsService.createNotificationByUser(notificationCreateInByUser));
    }

    @Operation(summary = "See notification by user", description = "see Notificacion by user")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = NotificationsUserOutDto.class)))})
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<NotificationsUserOutDto>> findNotificationsByUserId(@PathVariable Long userId) {
        return ResponseEntity.ok(notificationsService.findNotificationsByUserId(userId));
    }
}

```
