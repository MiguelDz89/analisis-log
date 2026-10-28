# nbo-png-operaciones-espec-calculos-back

Código Java de producción y configuraciones, sin tests. Cada sección contiene el archivo original completo y su ruta. Captura: 28/10/2026.

## Índice

1. `.mvn/wrapper/maven-wrapper.properties`
2. `mvnw`
3. `mvnw.cmd`
4. `pom.xml`
5. `src/main/java/com/nubo/operations/special/calculation/api/SpecialOperationsCalculationApiApplication.java`
6. `src/main/java/com/nubo/operations/special/calculation/api/application/annotations/RateLimited.java`
7. `src/main/java/com/nubo/operations/special/calculation/api/application/annotations/ValidBigDecimal.java`
8. `src/main/java/com/nubo/operations/special/calculation/api/application/config/SwaggerConfig.java`
9. `src/main/java/com/nubo/operations/special/calculation/api/application/config/ValidBigDecimalConfig.java`
10. `src/main/java/com/nubo/operations/special/calculation/api/application/config/WebConfig.java`
11. `src/main/java/com/nubo/operations/special/calculation/api/application/context/GlobalContext.java`
12. `src/main/java/com/nubo/operations/special/calculation/api/application/database/NamingStrategyConfig.java`
13. `src/main/java/com/nubo/operations/special/calculation/api/application/database/UpperNamingConfig.java`
14. `src/main/java/com/nubo/operations/special/calculation/api/application/filters/GlobalFilter.java`
15. `src/main/java/com/nubo/operations/special/calculation/api/application/interceptors/GlobalInterceptor.java`
16. `src/main/java/com/nubo/operations/special/calculation/api/application/interceptors/RateLimitInterceptor.java`
17. `src/main/java/com/nubo/operations/special/calculation/api/application/properties/PropertiesConfig.java`
18. `src/main/java/com/nubo/operations/special/calculation/api/application/properties/PropertiesContext.java`
19. `src/main/java/com/nubo/operations/special/calculation/api/application/security/CustomBasicAuthenticationEntryPoint.java`
20. `src/main/java/com/nubo/operations/special/calculation/api/application/security/CustomBearerTokenAccessDeniedHandler.java`
21. `src/main/java/com/nubo/operations/special/calculation/api/application/security/CustomBearerTokenAuthenticationEntryPoint.java`
22. `src/main/java/com/nubo/operations/special/calculation/api/application/security/SecurityConfig.java`
23. `src/main/java/com/nubo/operations/special/calculation/api/application/util/ApplicationUtils.java`
24. `src/main/java/com/nubo/operations/special/calculation/api/exception/ServiceException.java`
25. `src/main/java/com/nubo/operations/special/calculation/api/exception/error/ErrorCode.java`
26. `src/main/java/com/nubo/operations/special/calculation/api/exception/error/ErrorResponse.java`
27. `src/main/java/com/nubo/operations/special/calculation/api/exception/error/ErrorValidation.java`
28. `src/main/java/com/nubo/operations/special/calculation/api/exception/handler/GlobalExceptionHandler.java`
29. `src/main/java/com/nubo/operations/special/calculation/api/helpers/MapperPageUtil.java`
30. `src/main/java/com/nubo/operations/special/calculation/api/helpers/MapperUtil.java`
31. `src/main/java/com/nubo/operations/special/calculation/api/helpers/SettleAccountsUtil.java`
32. `src/main/java/com/nubo/operations/special/calculation/api/models/dto/request/CalculationInDto.java`
33. `src/main/java/com/nubo/operations/special/calculation/api/models/dto/request/SettleAccountsInDto.java`
34. `src/main/java/com/nubo/operations/special/calculation/api/models/dto/response/CalculationOutDto.java`
35. `src/main/java/com/nubo/operations/special/calculation/api/models/dto/response/PageResponseOutDto.java`
36. `src/main/java/com/nubo/operations/special/calculation/api/models/dto/response/SettleAccountsOutDto.java`
37. `src/main/java/com/nubo/operations/special/calculation/api/models/dto/response/SideOutDto.java`
38. `src/main/java/com/nubo/operations/special/calculation/api/models/entity/CalculationEntity.java`
39. `src/main/java/com/nubo/operations/special/calculation/api/models/entity/CalculationKey.java`
40. `src/main/java/com/nubo/operations/special/calculation/api/models/entity/PermissionEntity.java`
41. `src/main/java/com/nubo/operations/special/calculation/api/models/entity/ProfileEntity.java`
42. `src/main/java/com/nubo/operations/special/calculation/api/models/entity/SideEntity.java`
43. `src/main/java/com/nubo/operations/special/calculation/api/models/entity/StatusEntity.java`
44. `src/main/java/com/nubo/operations/special/calculation/api/models/entity/TradeEntity.java`
45. `src/main/java/com/nubo/operations/special/calculation/api/models/entity/UserNuboEntity.java`
46. `src/main/java/com/nubo/operations/special/calculation/api/models/enums/PropertiesEnum.java`
47. `src/main/java/com/nubo/operations/special/calculation/api/models/enums/SideEnum.java`
48. `src/main/java/com/nubo/operations/special/calculation/api/models/enums/VersionApiEnum.java`
49. `src/main/java/com/nubo/operations/special/calculation/api/repository/CalculationRepository.java`
50. `src/main/java/com/nubo/operations/special/calculation/api/repository/PermissionRepository.java`
51. `src/main/java/com/nubo/operations/special/calculation/api/repository/SideRepository.java`
52. `src/main/java/com/nubo/operations/special/calculation/api/repository/StatusRepository.java`
53. `src/main/java/com/nubo/operations/special/calculation/api/repository/TradeRepository.java`
54. `src/main/java/com/nubo/operations/special/calculation/api/repository/UserNuboRepository.java`
55. `src/main/java/com/nubo/operations/special/calculation/api/service/CalculationService.java`
56. `src/main/java/com/nubo/operations/special/calculation/api/service/impl/CalculationServiceImpl.java`
57. `src/main/java/com/nubo/operations/special/calculation/api/web/controller/CalculationRestController.java`
58. `src/main/resources/application-dev.yml`
59. `src/main/resources/application-local.yml`
60. `src/main/resources/application-prod.yml`
61. `src/main/resources/application-qa.yml`
62. `src/main/resources/application-uat.yml`
63. `src/main/resources/application.yml`
64. `src/main/resources/banner.txt`
65. `src/main/resources/log/JsonEventLayout_error.json`
66. `src/main/resources/log/JsonEventLayout_info.json`
67. `src/main/resources/log/JsonEventLayout_trace.json`
68. `src/main/resources/log/log4j2-prod.properties`
69. `src/main/resources/log/log4j2.properties`

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
        <version>3.5.0</version>
        <relativePath/>
    </parent>
    <groupId>com.nubo.operations.special.calculation.api</groupId>
    <artifactId>special-operation-calculation-api</artifactId>
    <version>0.15.0</version>
    <name>${project.artifactId}</name>
    <description>Special Operations Calculation Api</description>

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
            <version>2.8.5</version>
        </dependency>
        <!-- Security -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-security</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-oauth2-resource-server</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.security</groupId>
            <artifactId>spring-security-test</artifactId>
            <scope>test</scope>
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
                                <exclude>**/SpecialOperationsCalculationApiApplication.class</exclude>
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

## src/main/java/com/nubo/operations/special/calculation/api/SpecialOperationsCalculationApiApplication.java

```java
package com.nubo.operations.special.calculation.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpecialOperationsCalculationApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpecialOperationsCalculationApiApplication.class, args);
	}

}

```

## src/main/java/com/nubo/operations/special/calculation/api/application/annotations/RateLimited.java

```java
package com.nubo.operations.special.calculation.api.application.annotations;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.METHOD, ElementType.TYPE})
public @interface RateLimited {
}
```

## src/main/java/com/nubo/operations/special/calculation/api/application/annotations/ValidBigDecimal.java

```java
package com.nubo.operations.special.calculation.api.application.annotations;

import com.nubo.operations.special.calculation.api.application.config.ValidBigDecimalConfig;
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

## src/main/java/com/nubo/operations/special/calculation/api/application/config/SwaggerConfig.java

```java
package com.nubo.operations.special.calculation.api.application.config;

import com.nubo.operations.special.calculation.api.exception.error.ErrorResponse;
import com.nubo.operations.special.calculation.api.exception.error.ErrorValidation;
import com.nubo.operations.special.calculation.api.models.enums.PropertiesEnum;
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

## src/main/java/com/nubo/operations/special/calculation/api/application/config/ValidBigDecimalConfig.java

```java
package com.nubo.operations.special.calculation.api.application.config;

import com.nubo.operations.special.calculation.api.application.annotations.ValidBigDecimal;
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

## src/main/java/com/nubo/operations/special/calculation/api/application/config/WebConfig.java

```java
package com.nubo.operations.special.calculation.api.application.config;

import com.nubo.operations.special.calculation.api.application.interceptors.GlobalInterceptor;
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

## src/main/java/com/nubo/operations/special/calculation/api/application/context/GlobalContext.java

```java
package com.nubo.operations.special.calculation.api.application.context;

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

## src/main/java/com/nubo/operations/special/calculation/api/application/database/NamingStrategyConfig.java

```java
package com.nubo.operations.special.calculation.api.application.database;

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

## src/main/java/com/nubo/operations/special/calculation/api/application/database/UpperNamingConfig.java

```java
package com.nubo.operations.special.calculation.api.application.database;

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

## src/main/java/com/nubo/operations/special/calculation/api/application/filters/GlobalFilter.java

```java
package com.nubo.operations.special.calculation.api.application.filters;

import com.nubo.operations.special.calculation.api.application.context.GlobalContext;
import com.nubo.operations.special.calculation.api.application.util.ApplicationUtils;
import com.nubo.operations.special.calculation.api.exception.ServiceException;
import com.nubo.operations.special.calculation.api.exception.error.ErrorCode;
import com.nubo.operations.special.calculation.api.exception.error.ErrorResponse;
import com.nubo.operations.special.calculation.api.models.enums.PropertiesEnum;
import com.nubo.operations.special.calculation.api.models.enums.VersionApiEnum;
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

## src/main/java/com/nubo/operations/special/calculation/api/application/interceptors/GlobalInterceptor.java

```java
package com.nubo.operations.special.calculation.api.application.interceptors;

import com.nubo.operations.special.calculation.api.application.context.GlobalContext;
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

    private final RateLimitInterceptor rateLimitInterceptor;

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) {
        GlobalContext.remove();
    }

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {
        rateLimitInterceptor.rateLimitInterceptor(request, handler);
        return true;
    }

}
```

## src/main/java/com/nubo/operations/special/calculation/api/application/interceptors/RateLimitInterceptor.java

```java
package com.nubo.operations.special.calculation.api.application.interceptors;

import com.nubo.operations.special.calculation.api.application.annotations.RateLimited;
import com.nubo.operations.special.calculation.api.application.properties.PropertiesConfig;
import com.nubo.operations.special.calculation.api.exception.ServiceException;
import com.nubo.operations.special.calculation.api.exception.error.ErrorCode;
import com.nubo.operations.special.calculation.api.models.enums.PropertiesEnum;
import jakarta.servlet.http.HttpServletRequest;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;

import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.TimeUnit;

@Component
@RequiredArgsConstructor
public class RateLimitInterceptor {

    private final ConcurrentHashMap<String, RequestData> requestCounts = new ConcurrentHashMap<>();

    private final PropertiesConfig propertiesConfig;

    public void rateLimitInterceptor(HttpServletRequest request, Object handler) {
        if (handler instanceof org.springframework.web.method.HandlerMethod handlerMethod
                && (handlerMethod.hasMethodAnnotation(RateLimited.class)
                || handlerMethod.getBeanType().isAnnotationPresent(RateLimited.class))) {

            String clientIp = getClientIp(request);
            String methodName = request.getMethod();
            String path = request.getRequestURI();
            String key = clientIp + ":" + methodName + ":" + path;

            RequestData requestData = requestCounts.computeIfAbsent(key,
                    k -> new RequestData(propertiesConfig.getRangeTimeRequest(),
                            propertiesConfig.getWaitingTime()));

            synchronized (requestData) {

                requestData.incrementCount();

                if (requestData.isRateLimited()) {
                    throw new ServiceException(ErrorCode.RATE_LIMITING_EXCEEDED, HttpStatus.TOO_MANY_REQUESTS);
                }

                if (requestData.getCount() > propertiesConfig.getNumberMaxRequest()) {
                    requestData.setRateLimited(true);
                    throw new ServiceException(ErrorCode.RATE_LIMITING_EXCEEDED, HttpStatus.TOO_MANY_REQUESTS);
                }
            }
        }

    }

    private String getClientIp(HttpServletRequest request) {
        String clientIp = request.getHeader(PropertiesEnum.CLIENT_IP.getValue());
        if (clientIp == null || clientIp.isEmpty()) {
            clientIp = request.getRemoteAddr();
        }
        return clientIp;
    }

    private static class RequestData {

        @Getter
        private int count = 0;
        private long lastRequestTime = System.currentTimeMillis();
        @Getter
        @Setter
        private boolean rateLimited = false;
        private final Integer rangeTimeRequest;
        private final Integer waitingTime;

        public RequestData(Integer rangeTimeRequest, Integer waitingTime) {
            this.rangeTimeRequest = rangeTimeRequest;
            this.waitingTime = waitingTime;
        }

        public void incrementCount() {
            long currentTime = System.currentTimeMillis();

            if (rateLimited && currentTime - lastRequestTime > TimeUnit.SECONDS.toMillis(waitingTime)) {
                count = 0;
                rateLimited = false;
            } else if (rateLimited) {
                lastRequestTime = currentTime;
            } else {
                if (currentTime - lastRequestTime > TimeUnit.SECONDS.toMillis(rangeTimeRequest)) {
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

## src/main/java/com/nubo/operations/special/calculation/api/application/properties/PropertiesConfig.java

```java
package com.nubo.operations.special.calculation.api.application.properties;

import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
@Getter
public class PropertiesConfig {

    @Value("${spring.application.name}")
    private String apiName;

    @Value("${config.application.rateLimited.number-max-request}")
    private Integer numberMaxRequest;

    @Value("${config.application.rateLimited.range-time-request}")
    private Integer rangeTimeRequest;

    @Value("${config.application.rateLimited.waiting-time}")
    private Integer waitingTime;

    @Value("${client.keycloak.client-id}")
    private String keycloakClientId;

    @Value("${client.keycloak.client-secret}")
    private String keycloakClientSecret;

    @Value("${client.keycloak.introspection-uri}")
    private String keycloakIntrospectionUri;

}

```

## src/main/java/com/nubo/operations/special/calculation/api/application/properties/PropertiesContext.java

```java
package com.nubo.operations.special.calculation.api.application.properties;

import com.nubo.operations.special.calculation.api.application.context.GlobalContext;
import com.nubo.operations.special.calculation.api.application.util.ApplicationUtils;
import com.nubo.operations.special.calculation.api.models.enums.PropertiesEnum;
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

## src/main/java/com/nubo/operations/special/calculation/api/application/security/CustomBasicAuthenticationEntryPoint.java

```java
package com.nubo.operations.special.calculation.api.application.security;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerExceptionResolver;

@Component
public class CustomBasicAuthenticationEntryPoint implements AuthenticationEntryPoint {

    private final HandlerExceptionResolver resolver;

    public CustomBasicAuthenticationEntryPoint(@Qualifier("handlerExceptionResolver") HandlerExceptionResolver resolver) {
        this.resolver = resolver;
    }

    @Override
    public void commence(HttpServletRequest request,
                         HttpServletResponse response, AuthenticationException authException) {
        response.addHeader("WWW-Authenticate", "Basic realm=\"Realm\"");
        this.resolver.resolveException(request, response, null, authException);
    }

}

```

## src/main/java/com/nubo/operations/special/calculation/api/application/security/CustomBearerTokenAccessDeniedHandler.java

```java
package com.nubo.operations.special.calculation.api.application.security;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerExceptionResolver;

@Component
public class CustomBearerTokenAccessDeniedHandler implements AccessDeniedHandler {

    private final HandlerExceptionResolver resolver;


    public CustomBearerTokenAccessDeniedHandler(@Qualifier("handlerExceptionResolver") HandlerExceptionResolver resolver) {
        this.resolver = resolver;
    }

    @Override
    public void handle(HttpServletRequest request, HttpServletResponse response,
                       AccessDeniedException accessDeniedException) {
        this.resolver.resolveException(request, response, null, accessDeniedException);
    }

}

```

## src/main/java/com/nubo/operations/special/calculation/api/application/security/CustomBearerTokenAuthenticationEntryPoint.java

```java
package com.nubo.operations.special.calculation.api.application.security;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerExceptionResolver;

@Component
public class CustomBearerTokenAuthenticationEntryPoint implements AuthenticationEntryPoint {

    private final HandlerExceptionResolver resolver;


    public CustomBearerTokenAuthenticationEntryPoint(@Qualifier("handlerExceptionResolver") HandlerExceptionResolver resolver) {
        this.resolver = resolver;
    }

    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response,
                         AuthenticationException authException) {
        this.resolver.resolveException(request, response, null, authException);
    }

}

```

## src/main/java/com/nubo/operations/special/calculation/api/application/security/SecurityConfig.java

```java
package com.nubo.operations.special.calculation.api.application.security;

import com.nubo.operations.special.calculation.api.application.filters.GlobalFilter;
import com.nubo.operations.special.calculation.api.application.properties.PropertiesConfig;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    private final CustomBasicAuthenticationEntryPoint customBasicAuthenticationEntryPoint;
    private final CustomBearerTokenAuthenticationEntryPoint customBearerTokenAuthenticationEntryPoint;
    private final CustomBearerTokenAccessDeniedHandler customBearerTokenAccessDeniedHandler;
    private final GlobalFilter globalFilter;
    private final PropertiesConfig propertiesConfig;

    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
        return httpSecurity
                .csrf(AbstractHttpConfigurer::disable)
                .addFilterBefore(globalFilter, UsernamePasswordAuthenticationFilter.class)
                .authorizeHttpRequests(authorize -> authorize
                        .requestMatchers("/v3/api-docs/**", "/swagger-ui/**", "/swagger-ui.html",
                                "/v1/keycloak/token")
                        .permitAll().anyRequest().authenticated())
                .oauth2ResourceServer(oauth ->
                        oauth.opaqueToken(opaqueToken ->
                                        opaqueToken
                                                .introspectionUri(propertiesConfig.getKeycloakIntrospectionUri())
                                                .introspectionClientCredentials(propertiesConfig.getKeycloakClientId(),
                                                        propertiesConfig.getKeycloakClientSecret())
                                )
                                .authenticationEntryPoint(this.customBearerTokenAuthenticationEntryPoint)
                                .accessDeniedHandler(this.customBearerTokenAccessDeniedHandler)
                )
                .cors(Customizer.withDefaults())
                .httpBasic(httpBasic -> httpBasic.authenticationEntryPoint(this.customBasicAuthenticationEntryPoint))
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .build();
    }

}


```

## src/main/java/com/nubo/operations/special/calculation/api/application/util/ApplicationUtils.java

```java
package com.nubo.operations.special.calculation.api.application.util;

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

## src/main/java/com/nubo/operations/special/calculation/api/exception/ServiceException.java

```java
package com.nubo.operations.special.calculation.api.exception;

import com.nubo.operations.special.calculation.api.exception.error.ErrorCode;
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

## src/main/java/com/nubo/operations/special/calculation/api/exception/error/ErrorCode.java

```java
package com.nubo.operations.special.calculation.api.exception.error;

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
    PERMISSION_NOT_FOUND("Permission not found"),
    URL_REQUIRED("URL is required"),
    PROFILE_NOT_FOUND("Profile not found"),
    PARENT_ITEM_UPDATE_ERROR("Cannot modify the idParent of a level 1 item"),
    PARENT_ITEM_TO_CHILD_UPDATE_ERROR("Cannot modify the parent item to a child item"),
    TRADE_NOT_FOUND("Trade not found"),
    CALCULATION_NOT_FOUND("Calculation not found"),
    CALCULATION_EXISTS("Calculation already exists"),
    SIDE_NOT_FOUND("Side not found");

    private final String message;

    ErrorCode(String message) {
        this.message = message;
    }

    public String getName() {
        return this.name();
    }

}

```

## src/main/java/com/nubo/operations/special/calculation/api/exception/error/ErrorResponse.java

```java
package com.nubo.operations.special.calculation.api.exception.error;

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

## src/main/java/com/nubo/operations/special/calculation/api/exception/error/ErrorValidation.java

```java
package com.nubo.operations.special.calculation.api.exception.error;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ErrorValidation {

    private String id;
    private String description;

}

```

## src/main/java/com/nubo/operations/special/calculation/api/exception/handler/GlobalExceptionHandler.java

```java
package com.nubo.operations.special.calculation.api.exception.handler;

import com.nubo.operations.special.calculation.api.application.properties.PropertiesConfig;
import com.nubo.operations.special.calculation.api.application.properties.PropertiesContext;
import com.nubo.operations.special.calculation.api.exception.ServiceException;
import com.nubo.operations.special.calculation.api.exception.error.ErrorCode;
import com.nubo.operations.special.calculation.api.exception.error.ErrorResponse;
import com.nubo.operations.special.calculation.api.exception.error.ErrorValidation;
import com.nubo.operations.special.calculation.api.models.entity.UserNuboEntity;
import com.nubo.operations.special.calculation.api.repository.UserNuboRepository;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.oauth2.server.resource.InvalidBearerTokenException;
import org.springframework.util.ObjectUtils;
import org.springframework.web.HttpMediaTypeNotSupportedException;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;
import org.springframework.web.servlet.resource.NoResourceFoundException;

import java.util.List;
import java.util.Optional;

@RestControllerAdvice
@Slf4j
@RequiredArgsConstructor
public class GlobalExceptionHandler {

    private final UserNuboRepository userNuboRepository;
    private final PropertiesConfig propertiesConfig;

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

    @ExceptionHandler(AccessDeniedException.class)
    public ResponseEntity<ErrorResponse> handlerAccessDeniedException(AccessDeniedException exception,
                                                                      HttpServletRequest request) {
        return buildErrorResponse(HttpStatus.FORBIDDEN, exception, request, ErrorCode.FORBIDDEN);
    }

    @ExceptionHandler(InvalidBearerTokenException.class)
    public ResponseEntity<ErrorResponse> handlerInvalidBearerTokenException(InvalidBearerTokenException exception,
                                                                            HttpServletRequest request) {
        this.logoutUser();
        return buildErrorResponse(HttpStatus.UNAUTHORIZED, exception, request, ErrorCode.UNAUTHORIZED);
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

    private void logoutUser() {
        log.info("Start logoutUser");
        try {
            Optional<UserNuboEntity> userNuboEntityOptional = userNuboRepository.findByUserName(PropertiesContext.getClientUser());
            if (userNuboEntityOptional.isPresent()) {
                UserNuboEntity userNuboEntityLast = userNuboEntityOptional.get();
                userNuboEntityLast.setPreviousSession(false);
                userNuboEntityLast.setLastModifyApplication(propertiesConfig.getApiName());
                userNuboEntityLast.setLastModifyIp(PropertiesContext.getClientIp());
                userNuboEntityLast.setLastModifyUser(PropertiesContext.getClientUser());
                userNuboEntityLast.setLastModifyDate(PropertiesContext.getClientDatetime());

                userNuboRepository.save(userNuboEntityLast);

                log.info("End logoutUser -> {}", userNuboEntityLast);
            }
        } catch (Exception ex) {
            log.error("Error logoutUser -> {}", ex.getMessage());
        }
    }

}


```

## src/main/java/com/nubo/operations/special/calculation/api/helpers/MapperPageUtil.java

```java
package com.nubo.operations.special.calculation.api.helpers;

import com.nubo.operations.special.calculation.api.models.dto.response.PageResponseOutDto;
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

## src/main/java/com/nubo/operations/special/calculation/api/helpers/MapperUtil.java

```java
package com.nubo.operations.special.calculation.api.helpers;

import com.nubo.operations.special.calculation.api.models.dto.response.CalculationOutDto;
import com.nubo.operations.special.calculation.api.models.dto.response.SettleAccountsOutDto;
import com.nubo.operations.special.calculation.api.models.dto.response.SideOutDto;
import com.nubo.operations.special.calculation.api.models.entity.CalculationEntity;
import com.nubo.operations.special.calculation.api.models.entity.SideEntity;
import org.springframework.util.ObjectUtils;

public class MapperUtil {

    private MapperUtil() {
    }

    public static CalculationOutDto calculationEntityToCalculationOutDto(CalculationEntity calculationEntity) {
        return CalculationOutDto.builder()
                .tradeId(calculationEntity.getTradeId())
                .fraction(calculationEntity.getFraction())
                .side(ObjectUtils.isEmpty(calculationEntity.getSide().getId()) ?
                        null : sideEntityToSideOutDto(calculationEntity.getSide()))
                .build();
    }

    public static SideOutDto sideEntityToSideOutDto(SideEntity sideEntity) {
        return SideOutDto.builder()
                .id(sideEntity.getId())
                .description(sideEntity.getDescription())
                .build();
    }

    public static SettleAccountsOutDto settleAccountsUtilToSettleAccountsOutDto(SettleAccountsUtil settleAccountsUtil) {
        return SettleAccountsOutDto.builder()
                .amount(settleAccountsUtil.getAmount())
                .commissionAmount(settleAccountsUtil.getCommissionAmount())
                .valTaxAmount(settleAccountsUtil.getValTaxAmount())
                .netAmount(settleAccountsUtil.getNetAmount())
                .transferValue(settleAccountsUtil.getTransferValue())
                .build();
    }
}

```

## src/main/java/com/nubo/operations/special/calculation/api/helpers/SettleAccountsUtil.java

```java
package com.nubo.operations.special.calculation.api.helpers;

import com.nubo.operations.special.calculation.api.models.enums.SideEnum;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;

import java.math.BigDecimal;
import java.math.RoundingMode;

@AllArgsConstructor
public class SettleAccountsUtil {

    private static final int SCALE = 6;
    private static final BigDecimal ONE_HUNDRED = new BigDecimal("100");

    @NotNull
    private final BigDecimal quantity;

    @NotNull
    private final BigDecimal price;

    @NotNull
    private final BigDecimal commission;

    @NotNull
    private final BigDecimal valTax;

    @NotNull
    private final SideEnum side;


    public BigDecimal getAmount() {
        return this.quantity.multiply(price).setScale(SCALE, RoundingMode.HALF_UP);
    }

    public BigDecimal getCommissionAmount() {
        BigDecimal amountValue = getAmount();
        BigDecimal percentageCommission = this.commission.divide(ONE_HUNDRED, SCALE, RoundingMode.HALF_UP);
        return amountValue.multiply(percentageCommission).setScale(SCALE, RoundingMode.HALF_UP);
    }

    public BigDecimal getValTaxAmount() {
        BigDecimal commissionAmount = getCommissionAmount();
        BigDecimal percentageTax = this.valTax.divide(ONE_HUNDRED, SCALE, RoundingMode.HALF_UP);
        return commissionAmount.multiply(percentageTax).setScale(SCALE, RoundingMode.HALF_UP);
    }

    public BigDecimal getNetAmount() {
        if (this.side.equals(SideEnum.BUY)) {
            return getNetAmountBuy();
        }
        if (this.side.equals(SideEnum.SELL)) {
            return getNetAmountSell();
        }
        return BigDecimal.ZERO;
    }

    public BigDecimal getTransferValue() {
        if (this.side.equals(SideEnum.BUY)) {
            return getTransferValueBuy();
        }
        if (this.side.equals(SideEnum.SELL)) {
            return getTransferValueSell();
        }
        return BigDecimal.ZERO;
    }

    private BigDecimal getNetAmountSell() {
        BigDecimal amountValue = getAmount();
        BigDecimal commissionAmount = getCommissionAmount();
        BigDecimal valTaxAmount = getValTaxAmount();
        return amountValue.subtract(commissionAmount).subtract(valTaxAmount);
    }

    private BigDecimal getNetAmountBuy() {
        BigDecimal amountValue = getAmount();
        BigDecimal commissionAmount = getCommissionAmount();
        BigDecimal valTaxAmount = getValTaxAmount();
        return amountValue.add(commissionAmount).add(valTaxAmount);
    }

    private BigDecimal getTransferValueSell() {
        BigDecimal netValue = getNetAmountSell();
        BigDecimal commissionAmount = getCommissionAmount();
        BigDecimal valTaxAmount = getValTaxAmount();
        return netValue.add(commissionAmount).add(valTaxAmount);
    }

    private BigDecimal getTransferValueBuy() {
        BigDecimal netValue = getNetAmountBuy();
        BigDecimal commissionAmount = getCommissionAmount();
        BigDecimal valTaxAmount = getValTaxAmount();
        return netValue.subtract(commissionAmount).subtract(valTaxAmount);
    }
}

```

## src/main/java/com/nubo/operations/special/calculation/api/models/dto/request/CalculationInDto.java

```java
package com.nubo.operations.special.calculation.api.models.dto.request;

import jakarta.validation.constraints.Max;
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
public class CalculationInDto {

    @NotNull
    @Min(value = 1)
    private Long tradeId;

    @NotNull
    @Min(value = 0)
    @Max(value = 99)
    private Integer fraction;

    @NotNull
    private String sideId;
}

```

## src/main/java/com/nubo/operations/special/calculation/api/models/dto/request/SettleAccountsInDto.java

```java
package com.nubo.operations.special.calculation.api.models.dto.request;

import com.nubo.operations.special.calculation.api.application.annotations.ValidBigDecimal;
import com.nubo.operations.special.calculation.api.models.enums.SideEnum;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.math.BigDecimal;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SettleAccountsInDto {

    @NotNull
    @ValidBigDecimal(precision = 16, scale = 4)
    private BigDecimal quantity;

    @NotNull
    @ValidBigDecimal(precision = 12, scale = 6)
    private BigDecimal price;

    @NotNull
    @ValidBigDecimal(precision = 6, scale = 4)
    private BigDecimal commission;

    @NotNull
    @ValidBigDecimal(precision = 6, scale = 4)
    private BigDecimal valTax;

    @NotNull
    private SideEnum sideId;
}

```

## src/main/java/com/nubo/operations/special/calculation/api/models/dto/response/CalculationOutDto.java

```java
package com.nubo.operations.special.calculation.api.models.dto.response;

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
public class CalculationOutDto {

    private Long tradeId;

    private Integer fraction;

    private SideOutDto side;

}

```

## src/main/java/com/nubo/operations/special/calculation/api/models/dto/response/PageResponseOutDto.java

```java
package com.nubo.operations.special.calculation.api.models.dto.response;

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

## src/main/java/com/nubo/operations/special/calculation/api/models/dto/response/SettleAccountsOutDto.java

```java
package com.nubo.operations.special.calculation.api.models.dto.response;

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
public class SettleAccountsOutDto {

    private BigDecimal amount;

    private BigDecimal commissionAmount;

    private BigDecimal valTaxAmount;

    private BigDecimal netAmount;

    private BigDecimal transferValue;

}

```

## src/main/java/com/nubo/operations/special/calculation/api/models/dto/response/SideOutDto.java

```java
package com.nubo.operations.special.calculation.api.models.dto.response;

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
public class SideOutDto {

    private String id;

    private String description;

}

```

## src/main/java/com/nubo/operations/special/calculation/api/models/entity/CalculationEntity.java

```java
package com.nubo.operations.special.calculation.api.models.entity;

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
@IdClass(CalculationKey.class)
@Table(name = "\"CALCULATION\"", schema = "\"NUANBODB\"")
public class CalculationEntity {

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

## src/main/java/com/nubo/operations/special/calculation/api/models/entity/CalculationKey.java

```java
package com.nubo.operations.special.calculation.api.models.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.io.Serializable;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CalculationKey implements Serializable {

    private Long tradeId;

    private Integer fraction;

    private String side;

}

```

## src/main/java/com/nubo/operations/special/calculation/api/models/entity/PermissionEntity.java

```java
package com.nubo.operations.special.calculation.api.models.entity;

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

## src/main/java/com/nubo/operations/special/calculation/api/models/entity/ProfileEntity.java

```java
package com.nubo.operations.special.calculation.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
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

## src/main/java/com/nubo/operations/special/calculation/api/models/entity/SideEntity.java

```java
package com.nubo.operations.special.calculation.api.models.entity;

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

## src/main/java/com/nubo/operations/special/calculation/api/models/entity/StatusEntity.java

```java
package com.nubo.operations.special.calculation.api.models.entity;

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
    private Integer id;

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

## src/main/java/com/nubo/operations/special/calculation/api/models/entity/TradeEntity.java

```java
package com.nubo.operations.special.calculation.api.models.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

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

    @Column(name = "\"QUANTITY\"", precision = 16, scale = 4, nullable = false)
    private BigDecimal quantity;

    @Column(name = "\"PRICE\"", precision = 16, scale = 6, nullable = false)
    private BigDecimal price;

}

```

## src/main/java/com/nubo/operations/special/calculation/api/models/entity/UserNuboEntity.java

```java
package com.nubo.operations.special.calculation.api.models.entity;

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

}
```

## src/main/java/com/nubo/operations/special/calculation/api/models/enums/PropertiesEnum.java

```java
package com.nubo.operations.special.calculation.api.models.enums;

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

## src/main/java/com/nubo/operations/special/calculation/api/models/enums/SideEnum.java

```java
package com.nubo.operations.special.calculation.api.models.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Arrays;
import java.util.Objects;

@Getter
@RequiredArgsConstructor
public enum SideEnum {

    BUY("1"),
    SELL("2");

    private final String value;

    @JsonValue
    public String getValue() {
        return value;
    }

    @JsonCreator
    public static SideEnum fromValue(String value) {
        return Arrays.stream(SideEnum.values())
                .filter(side -> Objects.equals(side.value, value))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Side not implemented: " + value));
    }
}

```

## src/main/java/com/nubo/operations/special/calculation/api/models/enums/VersionApiEnum.java

```java
package com.nubo.operations.special.calculation.api.models.enums;

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

## src/main/java/com/nubo/operations/special/calculation/api/repository/CalculationRepository.java

```java
package com.nubo.operations.special.calculation.api.repository;

import com.nubo.operations.special.calculation.api.models.entity.CalculationEntity;
import com.nubo.operations.special.calculation.api.models.entity.CalculationKey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface CalculationRepository extends JpaRepository<CalculationEntity, CalculationKey>,
        JpaSpecificationExecutor<CalculationEntity> {
}
```

## src/main/java/com/nubo/operations/special/calculation/api/repository/PermissionRepository.java

```java
package com.nubo.operations.special.calculation.api.repository;

import com.nubo.operations.special.calculation.api.models.entity.PermissionEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface PermissionRepository extends JpaRepository<PermissionEntity, Long> {

    @Query("SELECT p FROM PermissionEntity p JOIN p.profiles pr " +
            "WHERE pr.id = :profileId AND p.enabled = :enabled")
    Optional<List<PermissionEntity>> findByProfileIdAndEnabledPermission(Long profileId, Boolean enabled);

}

```

## src/main/java/com/nubo/operations/special/calculation/api/repository/SideRepository.java

```java
package com.nubo.operations.special.calculation.api.repository;

import com.nubo.operations.special.calculation.api.models.entity.SideEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SideRepository extends JpaRepository<SideEntity, String> {
}

```

## src/main/java/com/nubo/operations/special/calculation/api/repository/StatusRepository.java

```java
package com.nubo.operations.special.calculation.api.repository;

import com.nubo.operations.special.calculation.api.models.entity.StatusEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StatusRepository extends JpaRepository<StatusEntity, Long> {
}

```

## src/main/java/com/nubo/operations/special/calculation/api/repository/TradeRepository.java

```java
package com.nubo.operations.special.calculation.api.repository;

import com.nubo.operations.special.calculation.api.models.entity.TradeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface TradeRepository extends JpaRepository<TradeEntity, Long>,
        JpaSpecificationExecutor<TradeEntity> {
}

```

## src/main/java/com/nubo/operations/special/calculation/api/repository/UserNuboRepository.java

```java
package com.nubo.operations.special.calculation.api.repository;

import com.nubo.operations.special.calculation.api.models.entity.UserNuboEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface UserNuboRepository extends JpaRepository<UserNuboEntity, Long> {

    @Query("SELECT u FROM UserNuboEntity u " +
            "WHERE u.userName = :userName")
    Optional<UserNuboEntity> findByUserName(String userName);

}

```

## src/main/java/com/nubo/operations/special/calculation/api/service/CalculationService.java

```java
package com.nubo.operations.special.calculation.api.service;

import com.nubo.operations.special.calculation.api.models.dto.request.CalculationInDto;
import com.nubo.operations.special.calculation.api.models.dto.request.SettleAccountsInDto;
import com.nubo.operations.special.calculation.api.models.dto.response.CalculationOutDto;
import com.nubo.operations.special.calculation.api.models.dto.response.PageResponseOutDto;
import com.nubo.operations.special.calculation.api.models.dto.response.SettleAccountsOutDto;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;

import java.util.Objects;

public interface CalculationService {

    PageResponseOutDto<CalculationOutDto> findAllCalculation(Pageable pageable, Long tradeId);

    CalculationOutDto createCalculation(CalculationInDto calculationInDto);

    void deleteCalculation(Long tradeId, Integer fraction, String sideId);

    SettleAccountsOutDto settleAccounts(SettleAccountsInDto settleAccountsInDto);
}

```

## src/main/java/com/nubo/operations/special/calculation/api/service/impl/CalculationServiceImpl.java

```java
package com.nubo.operations.special.calculation.api.service.impl;

import com.nubo.operations.special.calculation.api.application.properties.PropertiesContext;
import com.nubo.operations.special.calculation.api.exception.ServiceException;
import com.nubo.operations.special.calculation.api.exception.error.ErrorCode;
import com.nubo.operations.special.calculation.api.helpers.MapperPageUtil;
import com.nubo.operations.special.calculation.api.helpers.MapperUtil;
import com.nubo.operations.special.calculation.api.helpers.SettleAccountsUtil;
import com.nubo.operations.special.calculation.api.models.dto.request.CalculationInDto;
import com.nubo.operations.special.calculation.api.models.dto.request.SettleAccountsInDto;
import com.nubo.operations.special.calculation.api.models.dto.response.CalculationOutDto;
import com.nubo.operations.special.calculation.api.models.dto.response.PageResponseOutDto;
import com.nubo.operations.special.calculation.api.models.dto.response.SettleAccountsOutDto;
import com.nubo.operations.special.calculation.api.models.entity.CalculationEntity;
import com.nubo.operations.special.calculation.api.models.entity.CalculationKey;
import com.nubo.operations.special.calculation.api.models.entity.SideEntity;
import com.nubo.operations.special.calculation.api.models.entity.TradeEntity;
import com.nubo.operations.special.calculation.api.models.enums.VersionApiEnum;
import com.nubo.operations.special.calculation.api.repository.CalculationRepository;
import com.nubo.operations.special.calculation.api.repository.SideRepository;
import com.nubo.operations.special.calculation.api.repository.TradeRepository;
import com.nubo.operations.special.calculation.api.service.CalculationService;
import jakarta.persistence.criteria.Predicate;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
@Slf4j
public class CalculationServiceImpl implements CalculationService {

    private final CalculationRepository calculationRepository;
    private final TradeRepository tradeRepository;
    private final SideRepository sideRepository;

    @Override
    public PageResponseOutDto<CalculationOutDto> findAllCalculation(Pageable pageable, Long tradeId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllCalculationV1(pageable, tradeId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<CalculationOutDto> findAllCalculationV1(Pageable pageable, Long tradeId) {
        log.info("Start method findAllCalculationV1 with page: {} and size: {}", pageable.getPageNumber(),
                pageable.getPageSize());

        Page<CalculationEntity> calculationPage = calculationRepository.findAll(calculationEntitySpecification(tradeId), pageable);

        List<CalculationOutDto> calculationOutDtoList = calculationPage.getContent().stream()
                .map(MapperUtil::calculationEntityToCalculationOutDto)
                .toList();

        log.info("End method findAllCalculationV1, calculationOutDtoList -> {}", calculationOutDtoList);

        return MapperPageUtil.pageToPageResponseOutDto(calculationOutDtoList, calculationPage);
    }

    @Override
    public CalculationOutDto createCalculation(CalculationInDto calculationInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return createCalculationV1(calculationInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private CalculationOutDto createCalculationV1(CalculationInDto calculationInDto) {
        log.info("Start method createCalculationV1, calculationInDto -> {}", calculationInDto);

        TradeEntity specialTradeEntityLast = validateTrade(calculationInDto.getTradeId());
        SideEntity sideEntityLast = validateSide(calculationInDto.getSideId());

        CalculationKey calculationKey = CalculationKey.builder()
                .tradeId(specialTradeEntityLast.getId())
                .fraction(calculationInDto.getFraction())
                .side(sideEntityLast.getId())
                .build();
        if (calculationRepository.findById(calculationKey).isPresent()) {
            throw new ServiceException(ErrorCode.CALCULATION_EXISTS, HttpStatus.BAD_REQUEST);
        }

        CalculationEntity calculationEntity = CalculationEntity.builder()
                .tradeId(calculationKey.getTradeId())
                .fraction(calculationKey.getFraction())
                .side(sideEntityLast)
                .build();

        CalculationOutDto calculationOutDto = MapperUtil.calculationEntityToCalculationOutDto(
                calculationRepository.save(calculationEntity));

        log.info("End method createCalculationV1, calculationOutDto -> {}", calculationOutDto);

        return calculationOutDto;
    }

    @Override
    public void deleteCalculation(Long tradeId, Integer fraction, String sideId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            deleteCalculationV1(tradeId, fraction, sideId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private void deleteCalculationV1(Long tradeId, Integer fraction, String sideId) {
        log.info("Start method deleteCalculationV1, tradeId -> {}, fraction -> {},  sideId -> {}", tradeId, fraction, sideId);

        CalculationKey calculationKey = CalculationKey.builder()
                .tradeId(tradeId)
                .fraction(fraction)
                .side(sideId)
                .build();
        CalculationEntity calculationEntityLast = calculationRepository.findById(calculationKey)
                .orElseThrow(() -> new ServiceException(ErrorCode.CALCULATION_NOT_FOUND, HttpStatus.NOT_FOUND));

        calculationRepository.delete(calculationEntityLast);

        log.info("End method deleteCalculationV1");
    }

    @Override
    public SettleAccountsOutDto settleAccounts(SettleAccountsInDto settleAccountsInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return settleAccountsV1(settleAccountsInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private SettleAccountsOutDto settleAccountsV1(SettleAccountsInDto settleAccountsInDto) {
        log.info("Start method settleAccountsV1, settleAccountsInDto -> {}", settleAccountsInDto);

        SettleAccountsUtil settleAccountsUtil = new SettleAccountsUtil(settleAccountsInDto.getQuantity(),
                settleAccountsInDto.getPrice(), settleAccountsInDto.getCommission(),
                settleAccountsInDto.getValTax(), settleAccountsInDto.getSideId());

        SettleAccountsOutDto settleAccountsOutDto = MapperUtil.settleAccountsUtilToSettleAccountsOutDto(settleAccountsUtil);

        log.info("End method settleAccountsV1, SettleAccountsOutDto -> {}", settleAccountsOutDto);
        return settleAccountsOutDto;
    }

    private Specification<CalculationEntity> calculationEntitySpecification(Long tradeId) {
        return (root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();
            if (!ObjectUtils.isEmpty(tradeId)) {
                predicates.add(criteriaBuilder.equal(root.get("tradeId"), tradeId));
            }
            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }

    private TradeEntity validateTrade(Long tradeId) {
        return tradeRepository.findById(tradeId)
                .orElseThrow(() -> new ServiceException(ErrorCode.TRADE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private SideEntity validateSide(String sideId) {
        return sideRepository.findById(sideId)
                .orElseThrow(() -> new ServiceException(ErrorCode.SIDE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

}

```

## src/main/java/com/nubo/operations/special/calculation/api/web/controller/CalculationRestController.java

```java
package com.nubo.operations.special.calculation.api.web.controller;

import com.nubo.operations.special.calculation.api.application.annotations.RateLimited;
import com.nubo.operations.special.calculation.api.models.dto.request.CalculationInDto;
import com.nubo.operations.special.calculation.api.models.dto.request.SettleAccountsInDto;
import com.nubo.operations.special.calculation.api.models.dto.response.CalculationOutDto;
import com.nubo.operations.special.calculation.api.models.dto.response.PageResponseOutDto;
import com.nubo.operations.special.calculation.api.models.dto.response.SettleAccountsOutDto;
import com.nubo.operations.special.calculation.api.service.CalculationService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Tag(name = "Calculation")
@RequestMapping("/{version}/calculation")
@RestController
@RequiredArgsConstructor
@RateLimited
public class CalculationRestController {

    private final CalculationService calculationService;

    @Operation(summary = "Find all calculation", description = "Find all calculation")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = CalculationOutDto[].class)))})
    @GetMapping
    public ResponseEntity<PageResponseOutDto<CalculationOutDto>> findAllCalculation(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @Parameter(example = "1") @RequestParam(required = false) Long tradeId) {
        Pageable pageable = PageRequest.of(page, size);
        PageResponseOutDto<CalculationOutDto> calculationOutDtoList = calculationService.findAllCalculation(pageable, tradeId);
        return ResponseEntity.ok(calculationOutDtoList);
    }

    @Operation(summary = "Create calculation", description = "Create calculation")
    @ApiResponses(value = {@ApiResponse(responseCode = "201", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = CalculationOutDto.class)))})
    @PostMapping
    public ResponseEntity<CalculationOutDto> createCalculation(@Valid @RequestBody CalculationInDto calculationInDto) {
        CalculationOutDto calculationOutDto = calculationService.createCalculation(calculationInDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(calculationOutDto);
    }

    @Operation(summary = "Delete calculation", description = "Delete calculation")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response")})
    @DeleteMapping
    public void deleteCalculation(@RequestParam Long tradeId,
                                  @RequestParam Integer fraction,
                                  @RequestParam String sideId) {
        calculationService.deleteCalculation(tradeId, fraction, sideId);
    }

    @Operation(summary = "Settle Accounts", description = "Settle Accounts")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = SettleAccountsOutDto.class)))})
    @PostMapping("/settle-accounts")
    public ResponseEntity<SettleAccountsOutDto> settleAccounts(@Valid @RequestBody SettleAccountsInDto settleAccountsInDto) {
        return ResponseEntity.ok(calculationService.settleAccounts(settleAccountsInDto));
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
  security:
    oauth2:
      resourceserver:
        opaque-token:
          client-id: ${KEYCLOAK_CLIENT_ID}
          client-secret: ${KEYCLOAK_CLIENT_SECRET}
          introspection-uri: ${KEYCLOAK_INTROSPECTION_URI}
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
client:
  keycloak:
    client-id: ${KEYCLOAK_CLIENT_ID}
    client-secret: ${KEYCLOAK_CLIENT_SECRET}
    introspection-uri: ${KEYCLOAK_INTROSPECTION_URI}


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
  security:
    oauth2:
      resourceserver:
        opaque-token:
          client-id: ${KEYCLOAK_CLIENT_ID}
          client-secret: ${KEYCLOAK_CLIENT_SECRET}
          introspection-uri: ${KEYCLOAK_INTROSPECTION_URI}
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
client:
  keycloak:
    client-id: ${KEYCLOAK_CLIENT_ID}
    client-secret: ${KEYCLOAK_CLIENT_SECRET}
    introspection-uri: ${KEYCLOAK_INTROSPECTION_URI}
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
  security:
    oauth2:
      resourceserver:
        opaque-token:
          client-id: ${KEYCLOAK_CLIENT_ID}
          client-secret: ${KEYCLOAK_CLIENT_SECRET}
          introspection-uri: ${KEYCLOAK_INTROSPECTION_URI}
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
client:
  keycloak:
    client-id: ${KEYCLOAK_CLIENT_ID}
    client-secret: ${KEYCLOAK_CLIENT_SECRET}
    introspection-uri: ${KEYCLOAK_INTROSPECTION_URI}
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
  security:
    oauth2:
      resourceserver:
        opaque-token:
          client-id: ${KEYCLOAK_CLIENT_ID}
          client-secret: ${KEYCLOAK_CLIENT_SECRET}
          introspection-uri: ${KEYCLOAK_INTROSPECTION_URI}
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
client:
  keycloak:
    client-id: ${KEYCLOAK_CLIENT_ID}
    client-secret: ${KEYCLOAK_CLIENT_SECRET}
    introspection-uri: ${KEYCLOAK_INTROSPECTION_URI}


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
  security:
    oauth2:
      resourceserver:
        opaque-token:
          client-id: ${KEYCLOAK_CLIENT_ID}
          client-secret: ${KEYCLOAK_CLIENT_SECRET}
          introspection-uri: ${KEYCLOAK_INTROSPECTION_URI}
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
client:
  keycloak:
    client-id: ${KEYCLOAK_CLIENT_ID}
    client-secret: ${KEYCLOAK_CLIENT_SECRET}
    introspection-uri: ${KEYCLOAK_INTROSPECTION_URI}


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
 ,-----. ,------. ,------.,------.   ,---. ,--------.,--. ,-----. ,--.  ,--. ,---. ,------. ,------. ,-----.,--.  ,---.  ,--.    ,---.   ,-----.  ,---.  ,--.    ,-----.,--. ,--.,--.     ,---. ,--------.,--. ,-----. ,--.  ,--.  ,---.  ,------. ,--.
'  .-.  '|  .--. '|  .---'|  .--. ' /  O  \'--.  .--'|  |'  .-.  '|  ,'.|  |'   .-'|  .--. '|  .---''  .--./|  | /  O  \ |  |   '   .-' '  .--./ /  O  \ |  |   '  .--./|  | |  ||  |    /  O  \'--.  .--'|  |'  .-.  '|  ,'.|  | /  O  \ |  .--. '|  |
|  | |  ||  '--' ||  `--, |  '--'.'|  .-.  |  |  |   |  ||  | |  ||  |' '  |`.  `-.|  '--' ||  `--, |  |    |  ||  .-.  ||  |   `.  `-. |  |    |  .-.  ||  |   |  |    |  | |  ||  |   |  .-.  |  |  |   |  ||  | |  ||  |' '  ||  .-.  ||  '--' ||  |
'  '-'  '|  | --' |  `---.|  |\  \ |  | |  |  |  |   |  |'  '-'  '|  | `   |.-'    |  | --' |  `---.'  '--'\|  ||  | |  ||  '--..-'    |'  '--'\|  | |  ||  '--.'  '--'\'  '-'  '|  '--.|  | |  |  |  |   |  |'  '-'  '|  | `   ||  | |  ||  | --' |  |
 `-----' `--'     `------'`--' '--'`--' `--'  `--'   `--' `-----' `--'  `--'`-----'`--'     `------' `-----'`--'`--' `--'`-----'`-----'  `-----'`--' `--'`-----' `-----' `-----' `-----'`--' `--'  `--'   `--' `-----' `--'  `--'`--' `--'`--'     `--'

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
