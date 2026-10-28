# nbo-png-paquetes-custodios-cmd-back

Código fuente completo de producción y configuraciones. Captura local: 28/10/2026.

Incluye 91 archivos Java y 16 archivos de configuración, recursos y compilación.

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
17. `src/main/java/com/nubo/packages/custody/cmd/api/PackagesCustodyCmdApiApplication.java`
18. `src/main/java/com/nubo/packages/custody/cmd/api/application/config/KafkaConsumerConfig.java`
19. `src/main/java/com/nubo/packages/custody/cmd/api/application/config/KafkaProducerConfig.java`
20. `src/main/java/com/nubo/packages/custody/cmd/api/application/config/SwaggerConfig.java`
21. `src/main/java/com/nubo/packages/custody/cmd/api/application/context/GlobalContext.java`
22. `src/main/java/com/nubo/packages/custody/cmd/api/application/database/NamingStrategyConfig.java`
23. `src/main/java/com/nubo/packages/custody/cmd/api/application/database/UpperNamingConfig.java`
24. `src/main/java/com/nubo/packages/custody/cmd/api/application/filters/GlobalFilter.java`
25. `src/main/java/com/nubo/packages/custody/cmd/api/application/interceptors/GlobalInterceptor.java`
26. `src/main/java/com/nubo/packages/custody/cmd/api/application/properties/PropertiesConfig.java`
27. `src/main/java/com/nubo/packages/custody/cmd/api/application/properties/PropertiesContext.java`
28. `src/main/java/com/nubo/packages/custody/cmd/api/application/util/ApplicationUtils.java`
29. `src/main/java/com/nubo/packages/custody/cmd/api/client/kafka/consumer/KafkaAllocationInstructionListener.java`
30. `src/main/java/com/nubo/packages/custody/cmd/api/exception/ClientException.java`
31. `src/main/java/com/nubo/packages/custody/cmd/api/exception/ServiceException.java`
32. `src/main/java/com/nubo/packages/custody/cmd/api/exception/error/ErrorCode.java`
33. `src/main/java/com/nubo/packages/custody/cmd/api/exception/error/ErrorResponse.java`
34. `src/main/java/com/nubo/packages/custody/cmd/api/exception/error/ErrorValidation.java`
35. `src/main/java/com/nubo/packages/custody/cmd/api/exception/handler/GlobalExceptionHandler.java`
36. `src/main/java/com/nubo/packages/custody/cmd/api/exception/kafka/KafkaErrorBuild.java`
37. `src/main/java/com/nubo/packages/custody/cmd/api/helpers/MapperUtil.java`
38. `src/main/java/com/nubo/packages/custody/cmd/api/helpers/ValidatorUtil.java`
39. `src/main/java/com/nubo/packages/custody/cmd/api/models/dto/internal/ActiveDetailHeader.java`
40. `src/main/java/com/nubo/packages/custody/cmd/api/models/dto/notification/NotificationRequestDto.java`
41. `src/main/java/com/nubo/packages/custody/cmd/api/models/dto/request/AllocationInstructionCrudRequestDto.java`
42. `src/main/java/com/nubo/packages/custody/cmd/api/models/dto/request/PackageCustodianAutomaticInDto.java`
43. `src/main/java/com/nubo/packages/custody/cmd/api/models/dto/request/PackageCustodianInDto.java`
44. `src/main/java/com/nubo/packages/custody/cmd/api/models/dto/request/PackageCustodianManualDetailInDto.java`
45. `src/main/java/com/nubo/packages/custody/cmd/api/models/dto/request/PackageCustodianManualInDto.java`
46. `src/main/java/com/nubo/packages/custody/cmd/api/models/dto/response/AllocationInstructionAckOutDto.java`
47. `src/main/java/com/nubo/packages/custody/cmd/api/models/dto/response/PackageCustodianAutomaticOutDto.java`
48. `src/main/java/com/nubo/packages/custody/cmd/api/models/dto/response/PackageCustodianManualOutDto.java`
49. `src/main/java/com/nubo/packages/custody/cmd/api/models/dto/response/PackageCustodianManualPackageOutDto.java`
50. `src/main/java/com/nubo/packages/custody/cmd/api/models/dto/response/PackageCustodianOutDto.java`
51. `src/main/java/com/nubo/packages/custody/cmd/api/models/entity/BundleSequenceEntity.java`
52. `src/main/java/com/nubo/packages/custody/cmd/api/models/entity/CustodianStatusHistoryEntity.java`
53. `src/main/java/com/nubo/packages/custody/cmd/api/models/entity/PackageCustodianEntity.java`
54. `src/main/java/com/nubo/packages/custody/cmd/api/models/entity/PackageCustodianHistoryEntity.java`
55. `src/main/java/com/nubo/packages/custody/cmd/api/models/entity/PackageCustodianHistoryId.java`
56. `src/main/java/com/nubo/packages/custody/cmd/api/models/entity/PackageCustodianId.java`
57. `src/main/java/com/nubo/packages/custody/cmd/api/models/entity/PackageDetailEntity.java`
58. `src/main/java/com/nubo/packages/custody/cmd/api/models/entity/PackageDetailHistoryEntity.java`
59. `src/main/java/com/nubo/packages/custody/cmd/api/models/entity/PackageDetailHistoryId.java`
60. `src/main/java/com/nubo/packages/custody/cmd/api/models/entity/PackageDetailId.java`
61. `src/main/java/com/nubo/packages/custody/cmd/api/models/entity/ParticipantEntity.java`
62. `src/main/java/com/nubo/packages/custody/cmd/api/models/entity/RejectionReasonEntity.java`
63. `src/main/java/com/nubo/packages/custody/cmd/api/models/entity/SettlementEntity.java`
64. `src/main/java/com/nubo/packages/custody/cmd/api/models/entity/SettlementId.java`
65. `src/main/java/com/nubo/packages/custody/cmd/api/models/entity/TradeEntity.java`
66. `src/main/java/com/nubo/packages/custody/cmd/api/models/enums/AutomaticCutType.java`
67. `src/main/java/com/nubo/packages/custody/cmd/api/models/enums/AutomaticPackagingNotificationRole.java`
68. `src/main/java/com/nubo/packages/custody/cmd/api/models/enums/NotificationMessageEnum.java`
69. `src/main/java/com/nubo/packages/custody/cmd/api/models/enums/NotificationModuleEnum.java`
70. `src/main/java/com/nubo/packages/custody/cmd/api/models/enums/NotificationTypeEnum.java`
71. `src/main/java/com/nubo/packages/custody/cmd/api/models/enums/ProcessEnum.java`
72. `src/main/java/com/nubo/packages/custody/cmd/api/models/enums/PropertiesEnum.java`
73. `src/main/java/com/nubo/packages/custody/cmd/api/models/enums/StatusEnum.java`
74. `src/main/java/com/nubo/packages/custody/cmd/api/models/enums/VersionApiEnum.java`
75. `src/main/java/com/nubo/packages/custody/cmd/api/repository/BundleSequenceNativeRepository.java`
76. `src/main/java/com/nubo/packages/custody/cmd/api/repository/BundleSequenceRepository.java`
77. `src/main/java/com/nubo/packages/custody/cmd/api/repository/CustodianStatusHistoryRepository.java`
78. `src/main/java/com/nubo/packages/custody/cmd/api/repository/PackageCustodianHistoryNativeRepository.java`
79. `src/main/java/com/nubo/packages/custody/cmd/api/repository/PackageCustodianHistoryRepository.java`
80. `src/main/java/com/nubo/packages/custody/cmd/api/repository/PackageCustodianRepository.java`
81. `src/main/java/com/nubo/packages/custody/cmd/api/repository/PackageDetailHistoryNativeRepository.java`
82. `src/main/java/com/nubo/packages/custody/cmd/api/repository/PackageDetailHistoryRepository.java`
83. `src/main/java/com/nubo/packages/custody/cmd/api/repository/PackageDetailNativeRepository.java`
84. `src/main/java/com/nubo/packages/custody/cmd/api/repository/PackageDetailRepository.java`
85. `src/main/java/com/nubo/packages/custody/cmd/api/repository/ParticipantRepository.java`
86. `src/main/java/com/nubo/packages/custody/cmd/api/repository/RejectionReasonRepository.java`
87. `src/main/java/com/nubo/packages/custody/cmd/api/repository/SettlementNativeRepository.java`
88. `src/main/java/com/nubo/packages/custody/cmd/api/repository/SettlementRepository.java`
89. `src/main/java/com/nubo/packages/custody/cmd/api/repository/TradeRepository.java`
90. `src/main/java/com/nubo/packages/custody/cmd/api/repository/UserNotificationRepository.java`
91. `src/main/java/com/nubo/packages/custody/cmd/api/repository/impl/BundleSequenceNativeRepositoryImpl.java`
92. `src/main/java/com/nubo/packages/custody/cmd/api/repository/impl/PackageCustodianHistoryNativeRepositoryImpl.java`
93. `src/main/java/com/nubo/packages/custody/cmd/api/repository/impl/PackageDetailHistoryNativeRepositoryImpl.java`
94. `src/main/java/com/nubo/packages/custody/cmd/api/repository/impl/PackageDetailNativeRepositoryImpl.java`
95. `src/main/java/com/nubo/packages/custody/cmd/api/repository/impl/SettlementNativeRepositoryImpl.java`
96. `src/main/java/com/nubo/packages/custody/cmd/api/repository/impl/UserNotificationRepositoryImpl.java`
97. `src/main/java/com/nubo/packages/custody/cmd/api/service/AllocationInstructionService.java`
98. `src/main/java/com/nubo/packages/custody/cmd/api/service/AutomaticPackagingNotificationService.java`
99. `src/main/java/com/nubo/packages/custody/cmd/api/service/KafkaNuboProducer.java`
100. `src/main/java/com/nubo/packages/custody/cmd/api/service/NotificationService.java`
101. `src/main/java/com/nubo/packages/custody/cmd/api/service/PackageCustodianService.java`
102. `src/main/java/com/nubo/packages/custody/cmd/api/service/impl/AllocationInstructionServiceImpl.java`
103. `src/main/java/com/nubo/packages/custody/cmd/api/service/impl/AutomaticPackagingNotificationServiceImpl.java`
104. `src/main/java/com/nubo/packages/custody/cmd/api/service/impl/KafkaNuboProducerImpl.java`
105. `src/main/java/com/nubo/packages/custody/cmd/api/service/impl/NotificationServiceImpl.java`
106. `src/main/java/com/nubo/packages/custody/cmd/api/service/impl/PackageCustodianServiceImpl.java`
107. `src/main/java/com/nubo/packages/custody/cmd/api/web/controller/PackageCustodianRestController.java`

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
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0
                             https://maven.apache.org/xsd/maven-4.0.0.xsd">

    <modelVersion>4.0.0</modelVersion>

    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>4.1.1</version>
        <relativePath/>
    </parent>

    <groupId>com.nubo.packages.custody.cmd.api</groupId>
    <artifactId>packages-custody-cmd-api</artifactId>
    <version>0.20.0-beta.2</version>
    <name>${project.artifactId}</name>
    <description>Packages Custody CMD API</description>


    <properties>
        <java.version>21</java.version>
        <spring.port>8080</spring.port>
        <test.skip>false</test.skip>

        <datasource.url.application.name>ApplicationName=${project.artifactId}</datasource.url.application.name>
        <hikari.pool.name>${project.artifactId}-pool</hikari.pool.name>
        <springdoc-openapi.version>3.0.3</springdoc-openapi.version>
        <jacoco.version>0.8.12</jacoco.version>
        <postgresql.version>42.7.12</postgresql.version>
        <!-- Security overrides -->
        <tomcat.version>11.0.25</tomcat.version>
        <!-- Jackson 3.x - CVE-2026-89407, 89425, 68497, 91776, 91777 -->
        <jackson-bom.version>3.1.7</jackson-bom.version>
        <!-- Jackson 2.x - CVE-2026-89407, 89425, 68497, 91776, 91777 -->
        <jackson-2-bom.version>2.21.7</jackson-2-bom.version>
        <!-- LZ4 - CVE-2026-106451 -->
        <lz4-java.version>1.11.4</lz4-java.version>
    </properties>

    <dependencyManagement>
        <dependencies>

            <!-- CVE-2026-59949 -->
            <dependency>
                <groupId>at.yawk.lz4</groupId>
                <artifactId>lz4-java</artifactId>
                <version>${lz4-java.version}</version>
            </dependency>

        </dependencies>
    </dependencyManagement>

    <dependencies>

        <!-- Web -->
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

        <!-- Tests -->
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
            <groupId>org.apache.commons</groupId>
            <artifactId>commons-lang3</artifactId>
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

        <!-- OpenAPI -->
        <dependency>
            <groupId>org.springdoc</groupId>
            <artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>
            <version>${springdoc-openapi.version}</version>
            <exclusions>
                <exclusion>
                    <groupId>org.apache.commons</groupId>
                    <artifactId>commons-lang3</artifactId>
                </exclusion>
            </exclusions>
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
                <exclusion>
                    <groupId>org.apache.commons</groupId>
                    <artifactId>commons-io</artifactId>
                </exclusion>
            </exclusions>
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
                    <testFailureIgnore>false</testFailureIgnore>
                    <argLine>
                        @{argLine} -Dorg.springframework.boot.logging.LoggingSystem=org.springframework.boot.logging.log4j2.Log4J2LoggingSystem
                    </argLine>
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
                                <exclude>**/PackagesCustodyCmdApiApplication.class</exclude>
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
                            <outputDirectory>
                                ${project.build.directory}/jacoco-report
                            </outputDirectory>
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
  port: "@spring.port@"
spring:
  datasource:
    username: ${DB_USERNAME}
    password: ${DB_PASSWORD}
    url: ${DB_URL}?@datasource.url.application.name@&reWriteBatchedInserts=true
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
    properties:
      hibernate:
        jdbc:
          batch_size: ${HIBERNATE_JDBC_BATCH_SIZE:50}
          batch_versioned_data: true
        order_inserts: ${HIBERNATE_ORDER_INSERTS:true}
        order_updates: ${HIBERNATE_ORDER_UPDATES:true}
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
    consumer:
      group-id: ${KAFKA_NUBO_GROUP_ID}
      topic-packages-custody-cmd-request: ${KAFKA_NUBO_TOPIC_NAME_PACKAGES_CUSTODY_CMD_REQUEST}
      topic-create-package-custody: ${KAFKA_NUBO_TOPIC_NAME_CREATE_PACKAGE_CUSTODY}
    producer:
      topic-packages-custody-cmd-response: ${KAFKA_NUBO_TOPIC_NAME_PACKAGES_CUSTODY_CMD_RESPONSE}
    notification:
      event-type: ${KAFKA_NUBO_NOTIFICATION_EVENT_TYPE:NOTIFICACION_LISTA_PARA_USUARIO}
      module: ${KAFKA_NUBO_NOTIFICATION_MODULE:}
      kafka-notification-request-topic: ${KAFKA_NUBO_NOTIFICATION_REQUEST_TOPIC:}
automatic-packaging:
  max-details-per-package: ${AUTOMATIC_PACKAGING_MAX_DETAILS_PER_PACKAGE:50000}
  package-detail-query-chunk-size: ${AUTOMATIC_PACKAGING_PACKAGE_DETAIL_QUERY_CHUNK_SIZE:50000}
  package:
    final-status-id: ${AUTOMATIC_PACKAGING_PACKAGE_FINAL_STATUS_ID:1071}
  package-detail:
    rejected-status-id: ${AUTOMATIC_PACKAGING_PACKAGE_DETAIL_REJECTED_STATUS_ID:1074}
  response:
    include-processed-details-list: ${AUTOMATIC_PACKAGING_INCLUDE_PROCESSED_DETAILS_LIST:false}
  notification:
    enabled: ${AUT_PACK_NOTIFICATION_ENABLED:true}

```

## src/main/resources/application-local.yml

```yaml
server:
  port: 8083
spring:
  datasource:
    username: ${DB_USERNAME}
    password: ${DB_PASSWORD}
    url: ${DB_URL_DEV}?@datasource.url.application.name@&reWriteBatchedInserts=true
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
    properties:
      hibernate:
        jdbc:
          batch_size: ${HIBERNATE_JDBC_BATCH_SIZE:50}
          batch_versioned_data: true
        order_inserts: ${HIBERNATE_ORDER_INSERTS:true}
        order_updates: ${HIBERNATE_ORDER_UPDATES:true}
logging:
  config: classpath:log/log4j2.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR
kafka:
  nubo:
    retries: ${KAFKA_NUBO_RETRIES:5}
    bootstrap-servers: ${KAFKA_NUBO_BOOTSTRAP_SERVER:localhost:9092}
    auto-offset-reset: ${KAFKA_NUBO_AUTO_OFFSET_RESET:latest}
    security:
      protocol: PLAINTEXT
    sasl:
      mechanism: ""
      jaas:
        config: "org.apache.kafka.common.security.scram.ScramLoginModule required;"
    consumer:
      group-id: ${KAFKA_NUBO_GROUP_ID:packages-custody-cmd-group-local}
      topic-packages-custody-cmd-request: ${KAFKA_NUBO_TOPIC_NAME_PACKAGES_CUSTODY_CMD_REQUEST:packages-custody-cmd-request-local}
      topic-create-package-custody: ${KAFKA_NUBO_TOPIC_NAME_CREATE_PACKAGE_CUSTODY:topic-create-package-custody-local}
    producer:
      topic-packages-custody-cmd-response: ${KAFKA_NUBO_TOPIC_NAME_PACKAGES_CUSTODY_CMD_RESPONSE:packages-custody-cmd-response-local}
    notification:
      event-type: ${KAFKA_NUBO_NOTIFICATION_EVENT_TYPE:NOTIFICACION_LISTA_PARA_USUARIO}
      module: ${KAFKA_NUBO_NOTIFICATION_MODULE:}
      kafka-notification-request-topic: ${KAFKA_NUBO_NOTIFICATION_REQUEST_TOPIC:}
automatic-packaging:
  max-details-per-package: ${AUTOMATIC_PACKAGING_MAX_DETAILS_PER_PACKAGE:50000}
  package-detail-query-chunk-size: ${AUTOMATIC_PACKAGING_PACKAGE_DETAIL_QUERY_CHUNK_SIZE:50000}
  package:
    final-status-id: ${AUTOMATIC_PACKAGING_PACKAGE_FINAL_STATUS_ID:1071}
  package-detail:
    rejected-status-id: ${AUTOMATIC_PACKAGING_PACKAGE_DETAIL_REJECTED_STATUS_ID:1074}
  response:
    include-processed-details-list: ${AUTOMATIC_PACKAGING_INCLUDE_PROCESSED_DETAILS_LIST:false}
  notification:
    enabled: ${AUT_PACK_NOTIFICATION_ENABLED:true}

```

## src/main/resources/application-prod.yml

```yaml
server:
  port: "@spring.port@"
spring:
  datasource:
    username: ${DB_USERNAME}
    password: ${DB_PASSWORD}
    url: ${DB_URL}?@datasource.url.application.name@&reWriteBatchedInserts=true
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
    properties:
      hibernate:
        jdbc:
          batch_size: ${HIBERNATE_JDBC_BATCH_SIZE:50}
          batch_versioned_data: true
        order_inserts: ${HIBERNATE_ORDER_INSERTS:true}
        order_updates: ${HIBERNATE_ORDER_UPDATES:true}
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
    consumer:
      group-id: ${KAFKA_NUBO_GROUP_ID}
      topic-packages-custody-cmd-request: ${KAFKA_NUBO_TOPIC_NAME_PACKAGES_CUSTODY_CMD_REQUEST}
      topic-create-package-custody: ${KAFKA_NUBO_TOPIC_NAME_CREATE_PACKAGE_CUSTODY}
    producer:
      topic-packages-custody-cmd-response: ${KAFKA_NUBO_TOPIC_NAME_PACKAGES_CUSTODY_CMD_RESPONSE}
    notification:
      event-type: ${KAFKA_NUBO_NOTIFICATION_EVENT_TYPE:NOTIFICACION_LISTA_PARA_USUARIO}
      module: ${KAFKA_NUBO_NOTIFICATION_MODULE:}
      kafka-notification-request-topic: ${KAFKA_NUBO_NOTIFICATION_REQUEST_TOPIC:}
automatic-packaging:
  max-details-per-package: ${AUTOMATIC_PACKAGING_MAX_DETAILS_PER_PACKAGE:50000}
  package-detail-query-chunk-size: ${AUTOMATIC_PACKAGING_PACKAGE_DETAIL_QUERY_CHUNK_SIZE:50000}
  package:
    final-status-id: ${AUTOMATIC_PACKAGING_PACKAGE_FINAL_STATUS_ID:1071}
  package-detail:
    rejected-status-id: ${AUTOMATIC_PACKAGING_PACKAGE_DETAIL_REJECTED_STATUS_ID:1074}
  response:
    include-processed-details-list: ${AUTOMATIC_PACKAGING_INCLUDE_PROCESSED_DETAILS_LIST:false}
  notification:
    enabled: ${AUT_PACK_NOTIFICATION_ENABLED:true}

```

## src/main/resources/application-qa.yml

```yaml
server:
  port: "@spring.port@"
spring:
  datasource:
    username: ${DB_USERNAME}
    password: ${DB_PASSWORD}
    url: ${DB_URL}?@datasource.url.application.name@&reWriteBatchedInserts=true
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
    properties:
      hibernate:
        jdbc:
          batch_size: ${HIBERNATE_JDBC_BATCH_SIZE:50}
          batch_versioned_data: true
        order_inserts: ${HIBERNATE_ORDER_INSERTS:true}
        order_updates: ${HIBERNATE_ORDER_UPDATES:true}
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
    consumer:
      group-id: ${KAFKA_NUBO_GROUP_ID}
      topic-packages-custody-cmd-request: ${KAFKA_NUBO_TOPIC_NAME_PACKAGES_CUSTODY_CMD_REQUEST}
      topic-create-package-custody: ${KAFKA_NUBO_TOPIC_NAME_CREATE_PACKAGE_CUSTODY}
    producer:
      topic-packages-custody-cmd-response: ${KAFKA_NUBO_TOPIC_NAME_PACKAGES_CUSTODY_CMD_RESPONSE}
    notification:
      event-type: ${KAFKA_NUBO_NOTIFICATION_EVENT_TYPE:NOTIFICACION_LISTA_PARA_USUARIO}
      module: ${KAFKA_NUBO_NOTIFICATION_MODULE:}
      kafka-notification-request-topic: ${KAFKA_NUBO_NOTIFICATION_REQUEST_TOPIC:}
automatic-packaging:
  max-details-per-package: ${AUTOMATIC_PACKAGING_MAX_DETAILS_PER_PACKAGE:500000}
  package-detail-query-chunk-size: ${AUTOMATIC_PACKAGING_PACKAGE_DETAIL_QUERY_CHUNK_SIZE:50000}
  package-detail-persist-batch-size: ${AUTOMATIC_PACKAGING_PACKAGE_DETAIL_PERSIST_BATCH_SIZE:500}
  package:
    final-status-id: ${AUTOMATIC_PACKAGING_PACKAGE_FINAL_STATUS_ID:1071}
  package-detail:
    rejected-status-id: ${AUTOMATIC_PACKAGING_PACKAGE_DETAIL_REJECTED_STATUS_ID:1074}
  response:
    include-processed-details-list: ${AUTOMATIC_PACKAGING_INCLUDE_PROCESSED_DETAILS_LIST:false}
  notification:
    enabled: ${AUT_PACK_NOTIFICATION_ENABLED:true}

```

## src/main/resources/application-uat.yml

```yaml
server:
  port: "@spring.port@"
spring:
  datasource:
    username: ${DB_USERNAME}
    password: ${DB_PASSWORD}
    url: ${DB_URL}?@datasource.url.application.name@&reWriteBatchedInserts=true
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
    properties:
      hibernate:
        jdbc:
          batch_size: ${HIBERNATE_JDBC_BATCH_SIZE:50}
          batch_versioned_data: true
        order_inserts: ${HIBERNATE_ORDER_INSERTS:true}
        order_updates: ${HIBERNATE_ORDER_UPDATES:true}
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
    consumer:
      group-id: ${KAFKA_NUBO_GROUP_ID}
      topic-packages-custody-cmd-request: ${KAFKA_NUBO_TOPIC_NAME_PACKAGES_CUSTODY_CMD_REQUEST}
      topic-create-package-custody: ${KAFKA_NUBO_TOPIC_NAME_CREATE_PACKAGE_CUSTODY}
    producer:
      topic-packages-custody-cmd-response: ${KAFKA_NUBO_TOPIC_NAME_PACKAGES_CUSTODY_CMD_RESPONSE}
    notification:
      event-type: ${KAFKA_NUBO_NOTIFICATION_EVENT_TYPE:NOTIFICACION_LISTA_PARA_USUARIO}
      module: ${KAFKA_NUBO_NOTIFICATION_MODULE:}
      kafka-notification-request-topic: ${KAFKA_NUBO_NOTIFICATION_REQUEST_TOPIC:}
automatic-packaging:
  max-details-per-package: ${AUTOMATIC_PACKAGING_MAX_DETAILS_PER_PACKAGE:50000}
  package-detail-query-chunk-size: ${AUTOMATIC_PACKAGING_PACKAGE_DETAIL_QUERY_CHUNK_SIZE:50000}
  package:
    final-status-id: ${AUTOMATIC_PACKAGING_PACKAGE_FINAL_STATUS_ID:1071}
  package-detail:
    rejected-status-id: ${AUTOMATIC_PACKAGING_PACKAGE_DETAIL_REJECTED_STATUS_ID:1074}
  response:
    include-processed-details-list: ${AUTOMATIC_PACKAGING_INCLUDE_PROCESSED_DETAILS_LIST:false}
  notification:
    enabled: ${AUT_PACK_NOTIFICATION_ENABLED:true}

```

## src/main/resources/application.yml

```yaml
spring:
  jpa:
    properties:
      hibernate.query.in_clause_parameter_padding: false
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

```

## src/main/resources/banner.txt

```
  ____            _                          ____          _            _        ____               _    _          _
 |  _ \ __ _  ___| | ____ _  __ _  ___  ___ / ___|   _ ___| |_ ___   __| |_   _ / ___|_ __ ___   __| |  / \   _ __ (_)
 | |_) / _` |/ __| |/ / _` |/ _` |/ _ \/ __| |  | | | / __| __/ _ \ / _` | | | | |   | '_ ` _ \ / _` | / _ \ | '_ \| |
 |  __/ (_| | (__|   < (_| | (_| |  __/\__ \ |__| |_| \__ \ || (_) | (_| | |_| | |___| | | | | | (_| |/ ___ \| |_) | |
 |_|   \__,_|\___|_|\_\__,_|\__, |\___||___/\____\__,_|___/\__\___/ \__,_|\__, |\____|_| |_| |_|\__,_/_/   \_\ .__/|_|
                            |___/                                         |___/                              |_|
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

## src/main/java/com/nubo/packages/custody/cmd/api/PackagesCustodyCmdApiApplication.java

```java
package com.nubo.packages.custody.cmd.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class PackagesCustodyCmdApiApplication {

    public static void main(String[] args) {
        SpringApplication.run(PackagesCustodyCmdApiApplication.class, args);
    }

}


```

## src/main/java/com/nubo/packages/custody/cmd/api/application/config/KafkaConsumerConfig.java

```java
package com.nubo.packages.custody.cmd.api.application.config;

import java.nio.ByteBuffer;
import java.util.HashMap;
import java.util.Map;

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

import com.nubo.packages.custody.cmd.api.application.properties.PropertiesConfig;
import com.nubo.packages.custody.cmd.api.exception.ServiceException;
import com.nubo.packages.custody.cmd.api.exception.error.ErrorCode;
import com.nubo.packages.custody.cmd.api.exception.kafka.KafkaErrorBuild;
import com.nubo.packages.custody.cmd.api.models.dto.request.AllocationInstructionCrudRequestDto;
import com.nubo.packages.custody.cmd.api.models.dto.request.PackageCustodianInDto;

import lombok.RequiredArgsConstructor;

@EnableKafka
@Configuration
@RequiredArgsConstructor
public class KafkaConsumerConfig {

    private final Environment environment;
    private final PropertiesConfig propertiesConfig;

    @Bean
    ConcurrentKafkaListenerContainerFactory<String, AllocationInstructionCrudRequestDto> kafkaNuboListenerContainerFactory(
            DefaultErrorHandler errorHandler) {
        ConcurrentKafkaListenerContainerFactory<String, AllocationInstructionCrudRequestDto> factory = new ConcurrentKafkaListenerContainerFactory<>();
        factory.setConsumerFactory(consumerFactoryKafkaNubo(AllocationInstructionCrudRequestDto.class));
        factory.setCommonErrorHandler(errorHandler);
        factory.getContainerProperties().setDeliveryAttemptHeader(true);
        return factory;
    }

    @Bean
    ConcurrentKafkaListenerContainerFactory<String, PackageCustodianInDto> kafkaNuboListenerContainerFactoryPackage(
            DefaultErrorHandler errorHandler) {
        ConcurrentKafkaListenerContainerFactory<String, PackageCustodianInDto> factory = new ConcurrentKafkaListenerContainerFactory<>();
        factory.setConsumerFactory(consumerFactoryKafkaNubo(PackageCustodianInDto.class));
        factory.setCommonErrorHandler(errorHandler);
        factory.getContainerProperties().setDeliveryAttemptHeader(true);
        return factory;
    }

    @Bean
    DefaultErrorHandler kafkaErrorHandler(KafkaErrorBuild kafkaErrorBuild) {
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
                    kafkaErrorBuild.buildError(exception, errorCode, record.offset(), record.topic(), deliveryAttempt);
                },
                backOff);
        errorHandler.addNotRetryableExceptions(DeserializationException.class);
        errorHandler.setCommitRecovered(true);
        errorHandler.setAckAfterHandle(true);
        return errorHandler;
    }

    private <T> ConsumerFactory<String, T> consumerFactoryKafkaNubo(Class<T> valueType) {
        Map<String, Object> configProps = new HashMap<>();
        configProps.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, propertiesConfig.getKafkaNuboBootstrapServers());
        configProps.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);
        configProps.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, ErrorHandlingDeserializer.class);
        configProps.put(ConsumerConfig.GROUP_ID_CONFIG, propertiesConfig.getKafkaNuboConsumerGroupId());
        configProps.put(ConsumerConfig.AUTO_OFFSET_RESET_CONFIG, propertiesConfig.getKafkaNuboAutoOffsetReset());
        configProps.put("security.protocol", propertiesConfig.getKafkaNuboSecurityProtocol());
        if (!isLocalProfile()) {
            configProps.put("sasl.mechanism", propertiesConfig.getKafkaNuboSaslMechanism());
            configProps.put("sasl.jaas.config", propertiesConfig.getKafkaNuboSaslJaasConfig());
        }
        ErrorHandlingDeserializer<T> valueDeserializer = new ErrorHandlingDeserializer<>(
                new JsonDeserializer<>(valueType));
        return new DefaultKafkaConsumerFactory<>(configProps, new StringDeserializer(), valueDeserializer);
    }

    private Integer getDeliveryAttempt(ConsumerRecord<?, ?> record) {
        Header header = record.headers().lastHeader(KafkaHeaders.DELIVERY_ATTEMPT);
        return header != null ? ByteBuffer.wrap(header.value()).getInt() : null;
    }

    private boolean isLocalProfile() {
        for (String profile : environment.getActiveProfiles()) {
            if ("local".equals(profile)) {
                return true;
            }
        }
        return false;
    }

}

```

## src/main/java/com/nubo/packages/custody/cmd/api/application/config/KafkaProducerConfig.java

```java
package com.nubo.packages.custody.cmd.api.application.config;

import com.nubo.packages.custody.cmd.api.application.properties.PropertiesConfig;
import com.nubo.packages.custody.cmd.api.models.dto.response.AllocationInstructionAckOutDto;
import lombok.RequiredArgsConstructor;
import org.apache.kafka.clients.producer.ProducerConfig;
import org.apache.kafka.common.serialization.StringSerializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.kafka.core.DefaultKafkaProducerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.core.ProducerFactory;
import org.springframework.kafka.support.serializer.JsonSerializer;

import java.util.HashMap;
import java.util.Map;

@Configuration
@RequiredArgsConstructor
public class KafkaProducerConfig {

    private final Environment environment;
    private final PropertiesConfig propertiesConfig;

    @Bean
    public ProducerFactory<String, AllocationInstructionAckOutDto> producerFactoryKafkaNubo() {
        Map<String, Object> configProps = new HashMap<>();
        configProps.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, propertiesConfig.getKafkaNuboBootstrapServers());
        configProps.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class);
        configProps.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, JsonSerializer.class);
        configProps.put("security.protocol", propertiesConfig.getKafkaNuboSecurityProtocol());
        if (!isLocalProfile()) {
            configProps.put("sasl.mechanism", propertiesConfig.getKafkaNuboSaslMechanism());
            configProps.put("sasl.jaas.config", propertiesConfig.getKafkaNuboSaslJaasConfig());
        }
        return new DefaultKafkaProducerFactory<>(configProps);
    }

    @Bean
    public KafkaTemplate<String, AllocationInstructionAckOutDto> kafkaNuboTemplate() {
        return new KafkaTemplate<>(producerFactoryKafkaNubo());
    }

    @Bean
    public ProducerFactory<String, String> producerFactoryKafkaNuboNotification() {
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
    public KafkaTemplate<String, String> kafkaNuboNotificationTemplate() {
        return new KafkaTemplate<>(producerFactoryKafkaNuboNotification());
    }

    private boolean isLocalProfile() {
        for (String profile : environment.getActiveProfiles()) {
            if ("local".equals(profile)) {
                return true;
            }
        }
        return false;
    }

}

```

## src/main/java/com/nubo/packages/custody/cmd/api/application/config/SwaggerConfig.java

```java
package com.nubo.packages.custody.cmd.api.application.config;

import com.nubo.packages.custody.cmd.api.exception.error.ErrorResponse;
import com.nubo.packages.custody.cmd.api.exception.error.ErrorValidation;
import com.nubo.packages.custody.cmd.api.models.enums.PropertiesEnum;
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

## src/main/java/com/nubo/packages/custody/cmd/api/application/context/GlobalContext.java

```java
package com.nubo.packages.custody.cmd.api.application.context;

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

## src/main/java/com/nubo/packages/custody/cmd/api/application/database/NamingStrategyConfig.java

```java
package com.nubo.packages.custody.cmd.api.application.database;

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

## src/main/java/com/nubo/packages/custody/cmd/api/application/database/UpperNamingConfig.java

```java
package com.nubo.packages.custody.cmd.api.application.database;

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
        return new Identifier(identifier.getText().toUpperCase(), true);
    }

}


```

## src/main/java/com/nubo/packages/custody/cmd/api/application/filters/GlobalFilter.java

```java
package com.nubo.packages.custody.cmd.api.application.filters;

import com.nubo.packages.custody.cmd.api.application.context.GlobalContext;
import com.nubo.packages.custody.cmd.api.application.util.ApplicationUtils;
import com.nubo.packages.custody.cmd.api.exception.ServiceException;
import com.nubo.packages.custody.cmd.api.exception.error.ErrorCode;
import com.nubo.packages.custody.cmd.api.exception.error.ErrorResponse;
import com.nubo.packages.custody.cmd.api.models.enums.PropertiesEnum;
import com.nubo.packages.custody.cmd.api.models.enums.VersionApiEnum;
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
            clientIp = "127.0.0.1";
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

## src/main/java/com/nubo/packages/custody/cmd/api/application/interceptors/GlobalInterceptor.java

```java
package com.nubo.packages.custody.cmd.api.application.interceptors;

import com.nubo.packages.custody.cmd.api.application.context.GlobalContext;
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
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler,
            Exception ex) {
        GlobalContext.remove();
    }

}

```

## src/main/java/com/nubo/packages/custody/cmd/api/application/properties/PropertiesConfig.java

```java
package com.nubo.packages.custody.cmd.api.application.properties;

import com.nubo.packages.custody.cmd.api.models.enums.NotificationModuleEnum;
import jakarta.annotation.PostConstruct;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

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

    @Value("${kafka.nubo.consumer.group-id}")
    private String kafkaNuboConsumerGroupId;

    @Value("${kafka.nubo.consumer.topic-packages-custody-cmd-request}")
    private String kafkaNuboConsumerTopicPackagesCustodyCmdRequest;

    @Value("${kafka.nubo.producer.topic-packages-custody-cmd-response}")
    private String kafkaNuboProducerTopicPackagesCustodyCmdResponse;

    @Value("${kafka.nubo.notification.event-type:NOTIFICACION_LISTA_PARA_USUARIO}")
    private String kafkaNuboNotificationEventType;

    @Value("${kafka.nubo.notification.module:}")
    private String kafkaNuboNotificationModule;

    @Value("${kafka.nubo.notification.kafka-notification-request-topic:}")
    private String kafkaNuboNotificationTopic;

    @Value("${kafka.nubo.consumer.topic-create-package-custody}")
    private String kafkaNuboConsumerTopicCreatePackageCustody;

    @Value("${automatic-packaging.package.final-status-id:1071}")
    private Long automaticPackagingPackageFinalStatusId;

    @Value("${automatic-packaging.package-detail.rejected-status-id:1074}")
    private Long automaticPackagingPackageDetailRejectedStatusId;

    @Value("${automatic-packaging.response.include-processed-details-list:false}")
    private Boolean automaticPackagingResponseIncludeProcessedDetailsList;

    @Value("${automatic-packaging.notification.enabled:true}")
    private Boolean automaticPackagingNotificationEnabled;

    @Value("${automatic-packaging.max-details-per-package:50000}")
    private int automaticPackagingMaxDetailsPerPackage;

    @Value("${automatic-packaging.package-detail-query-chunk-size:50000}")
    private int automaticPackagingPackageDetailQueryChunkSize;

    @Value("${automatic-packaging.package-detail-persist-batch-size:500}")
    private int automaticPackagingPackageDetailPersistBatchSize = 500;

    @Value("${spring.jpa.properties.hibernate.query.in_clause_parameter_padding:false}")
    private boolean automaticPackagingInClauseParameterPadding;

    @PostConstruct
    void validateAutomaticPackagingMaxDetailsPerPackage() {
        if (automaticPackagingInClauseParameterPadding) {
            throw new IllegalArgumentException("Hibernate IN parameter padding must remain disabled for 50000-ID chunks");
        }
        if (automaticPackagingMaxDetailsPerPackage < 1) {
            throw new IllegalArgumentException("automatic-packaging.max-details-per-package must be positive");
        }
        if (automaticPackagingPackageDetailQueryChunkSize < 1
                || automaticPackagingPackageDetailQueryChunkSize > 50_000) {
            throw new IllegalArgumentException(
                    "automatic-packaging.package-detail-query-chunk-size must be between 1 and 50000");
        }
        if (automaticPackagingPackageDetailPersistBatchSize < 1
                || automaticPackagingPackageDetailPersistBatchSize > 1000) {
            throw new IllegalArgumentException("automatic-packaging.package-detail-persist-batch-size must be between 1 and 1000");
        }
    }

    public boolean isAutomaticPackagingResponseIncludeProcessedDetailsList() {
        return Boolean.TRUE.equals(automaticPackagingResponseIncludeProcessedDetailsList);
    }

    public String getKafkaNuboNotificationModule() {
        return StringUtils.hasText(kafkaNuboNotificationModule)
                ? kafkaNuboNotificationModule
                : NotificationModuleEnum.DEFAULT.getValue();
    }

}

```

## src/main/java/com/nubo/packages/custody/cmd/api/application/properties/PropertiesContext.java

```java
package com.nubo.packages.custody.cmd.api.application.properties;

import com.nubo.packages.custody.cmd.api.application.context.GlobalContext;
import com.nubo.packages.custody.cmd.api.application.util.ApplicationUtils;
import com.nubo.packages.custody.cmd.api.models.enums.PropertiesEnum;
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
        assert clientDatetime != null;
        return LocalDate.parse(clientDatetime.split("T")[0], formatter);
    }

    public static String getVersion() {
        return GlobalContext.getProperty(PropertiesEnum.VERSION_API.getValue());
    }

}

```

## src/main/java/com/nubo/packages/custody/cmd/api/application/util/ApplicationUtils.java

```java
package com.nubo.packages.custody.cmd.api.application.util;

import tools.jackson.core.JacksonException;
import tools.jackson.databind.ObjectMapper;
import tools.jackson.databind.cfg.DateTimeFeature;
import tools.jackson.databind.json.JsonMapper;
import com.nubo.packages.custody.cmd.api.exception.ServiceException;
import com.nubo.packages.custody.cmd.api.exception.error.ErrorCode;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class ApplicationUtils {

    private static final ObjectMapper MAPPER = JsonMapper.builder()
            .findAndAddModules()
            .disable(DateTimeFeature.WRITE_DATES_AS_TIMESTAMPS)
            .build();

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

    public static String getFormatTime() {
        return FORMAT_TIME;
    }

    public static String getLocalDateTimeNow() {
        return LocalDateTime.now().format(DateTimeFormatter.ofPattern(ApplicationUtils.getFormatDatetime()));
    }

    public static String getLocalDateNow() {
        return LocalDateTime.now().format(DateTimeFormatter.ofPattern(ApplicationUtils.getFormatDate()));
    }

    public static String getLocalDateWithFormatPlane() {
        return LocalDateTime.now().format(DateTimeFormatter.ofPattern(ApplicationUtils.getFormatDatePlane()));
    }

    public static String parseLocalDateWithFormatPlane(String localDate) {
        LocalDate date = LocalDate.parse(localDate);
        return date.format(DateTimeFormatter.ofPattern(ApplicationUtils.getFormatDatePlane()));
    }

    public static String getLocalDateTimeCustomFormat() {
        return LocalDateTime.now()
                .format(DateTimeFormatter.ofPattern(FORMAT_DD_MM_YYYY_HHMMSS));
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

    public static String convertLocalDateTimeToString(LocalDateTime localDateTime) {
        return localDateTime.format(DateTimeFormatter.ofPattern(ApplicationUtils.getFormatDatetime()));
    }

    public static BigDecimal divide(BigDecimal numerator, BigDecimal denominator) {
        if (numerator == null || denominator == null || BigDecimal.ZERO.compareTo(denominator) == 0) {
            return BigDecimal.ZERO;
        }
        return numerator.divide(denominator, 6, RoundingMode.HALF_UP);
    }

}

```

## src/main/java/com/nubo/packages/custody/cmd/api/client/kafka/consumer/KafkaAllocationInstructionListener.java

```java
package com.nubo.packages.custody.cmd.api.client.kafka.consumer;

import com.nubo.packages.custody.cmd.api.application.context.GlobalContext;
import com.nubo.packages.custody.cmd.api.application.util.ApplicationUtils;
import com.nubo.packages.custody.cmd.api.exception.error.ErrorCode;
import com.nubo.packages.custody.cmd.api.exception.kafka.KafkaErrorBuild;
import com.nubo.packages.custody.cmd.api.helpers.ValidatorUtil;
import com.nubo.packages.custody.cmd.api.models.dto.request.AllocationInstructionCrudRequestDto;
import com.nubo.packages.custody.cmd.api.models.dto.request.PackageCustodianInDto;
import com.nubo.packages.custody.cmd.api.models.enums.PropertiesEnum;
import com.nubo.packages.custody.cmd.api.service.AllocationInstructionService;
import com.nubo.packages.custody.cmd.api.service.PackageCustodianService;

import jakarta.annotation.PreDestroy;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import java.util.Arrays;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;
import java.util.stream.IntStream;

import org.springframework.context.annotation.Profile;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.support.KafkaHeaders;
import org.springframework.messaging.handler.annotation.Header;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
@Slf4j
@Profile({ "local-kafka", "dev", "qa", "uat", "prod" })
public class KafkaAllocationInstructionListener {

    private final AllocationInstructionService allocationInstructionService;
    private final PackageCustodianService packageCustodianService;
    private final ValidatorUtil validatorUtil;
    private final KafkaErrorBuild kafkaErrorBuild;

    private static final int POOL_SIZE = 20;
    private final ExecutorService[] partitionedExecutors = IntStream.range(0, POOL_SIZE)
            .mapToObj(i -> Executors.newSingleThreadExecutor())
            .toArray(ExecutorService[]::new);

    @KafkaListener(topics = "#{propertiesConfig.kafkaNuboConsumerTopicPackagesCustodyCmdRequest}",
            containerFactory = "kafkaNuboListenerContainerFactory")
    public void listenKafka(
            @Payload AllocationInstructionCrudRequestDto dto,
            @Header(KafkaHeaders.RECEIVED_PARTITION) int partition,
            @Header(KafkaHeaders.OFFSET) long offset,
            @Header(KafkaHeaders.RECEIVED_TOPIC) String topic,
            @Header(KafkaHeaders.DELIVERY_ATTEMPT) int retry) {

        log.info("New received Message -- Topic: {} -- Partition: {} -- Offset: {} -- retry: {}",
                topic, partition, offset, retry);

        try {
            String senderSubID = dto.getAllocationInstruction().getHeader().getSenderSubID();
            String middlewareMsg = dto.getAllocationInstruction().getHeader().getMiddlewareMsg();
            String sendingTime = dto.getAllocationInstruction().getHeader().getSendingTime();

            setProperties(senderSubID, sendingTime, middlewareMsg);

            allocationInstructionService.processAllocationInstruction(dto);
        } finally {
            GlobalContext.remove();
        }
    }

    @KafkaListener(topics = "#{propertiesConfig.kafkaNuboConsumerTopicCreatePackageCustody}",
            containerFactory = "kafkaNuboListenerContainerFactoryPackage")
    public void listenKafkaPackage(@Payload PackageCustodianInDto packageCustodianInDto,
            @Header(KafkaHeaders.RECEIVED_PARTITION) int partition,
            @Header(KafkaHeaders.OFFSET) long offset,
            @Header(KafkaHeaders.RECEIVED_TOPIC) String topic,
            @Header(KafkaHeaders.DELIVERY_ATTEMPT) Integer retry) {
        log.info("New received Message -- Topic: {} -- Partition : {} -- Offset : {} -- retry: {}",
                topic, partition, offset, retry);

        if (!validateObject(packageCustodianInDto)) {
            log.error("Validation failed for message from Topic: {} -- Partition: {} -- Offset: {}",
                    topic, partition, offset);
            return;
        }

        String lockKey = packageCustodianInDto.getParticipantId().toString();
        int index = Math.abs(lockKey.hashCode() % POOL_SIZE);
        partitionedExecutors[index].submit(() -> {
            try {
                setProperties(packageCustodianInDto.getClientUser(), ApplicationUtils.getLocalDateTimeNow(), "");
                packageCustodianService.createPackageCustodian(packageCustodianInDto);

            } catch (Exception ex) {
                log.error("ERROR -> processing message from Topic: {} -- Partition: {} -- Offset: {} -- Error: {}",
                        topic, partition, offset, ex.getMessage());

                kafkaErrorBuild.buildError(ex, ErrorCode.ERROR_KAFKA_CONSUMER_NUBO, offset, topic, retry);
            }
        });
    }

    private void setProperties(String clientUser, String dataTime, String clientIp) {
        GlobalContext.setProperty(PropertiesEnum.CLIENT_USER.getValue(), clientUser == null ? "" : clientUser);
        GlobalContext.setProperty(PropertiesEnum.CLIENT_DATETIME.getValue(),
                dataTime != null && dataTime.length() >= 19
                        ? dataTime.substring(0, 19)
                        : dataTime);
        GlobalContext.setProperty(PropertiesEnum.CLIENT_IP.getValue(), clientIp == null ? "" : clientIp);
    }

    @PreDestroy
    public void shutdown() {
        log.info("Shutting down partitioned executors, waiting for running tasks to complete...");
        Arrays.stream(partitionedExecutors).forEach(ExecutorService::shutdown);
        Arrays.stream(partitionedExecutors).forEach(executor -> {
            try {
                if (!executor.awaitTermination(60, TimeUnit.SECONDS)) {
                    log.warn("Executor did not terminate in time, forcing shutdown.");
                    executor.shutdownNow();
                }
            } catch (InterruptedException ex) {
                executor.shutdownNow();
                Thread.currentThread().interrupt();
            }
        });
        log.info("All executors shut down.");
    }

    private boolean validateObject(PackageCustodianInDto packageCustodianInDto) {
        try {
            validatorUtil.validateObject(packageCustodianInDto);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

}

```

## src/main/java/com/nubo/packages/custody/cmd/api/exception/ClientException.java

```java
package com.nubo.packages.custody.cmd.api.exception;

import com.nubo.packages.custody.cmd.api.exception.error.ErrorCode;
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

## src/main/java/com/nubo/packages/custody/cmd/api/exception/ServiceException.java

```java
package com.nubo.packages.custody.cmd.api.exception;

import com.nubo.packages.custody.cmd.api.exception.error.ErrorCode;
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

    public ServiceException(ErrorCode errorCode, String message) {
        super(errorCode.getMessage(), new Throwable(message));
        this.errorCode = errorCode;
        this.httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
    }

}

```

## src/main/java/com/nubo/packages/custody/cmd/api/exception/error/ErrorCode.java

```java
package com.nubo.packages.custody.cmd.api.exception.error;

import lombok.Getter;

@Getter
public enum ErrorCode {

    // HTTP / general
    UNAUTHORIZED("Not unauthorized", null, null),
    FORBIDDEN("Access denied", null, null),
    UNEXPECTED("An unexpected error occurred", null, null),
    METHOD_ARGUMENT_TYPE("Invalid request path", null, null),
    METHOD_NOT_ALLOWED("Http method not allowed", null, null),
    NOT_FOUND("Resource not found", null, null),
    UNSUPPORTED_MEDIA_TYPE("Content Type is not supported", null, null),
    MESSAGE_NOT_READABLE("Error reading the message body request", null, null),
    BAD_REQUEST("Invalid request body", null, null),
    HEADER_CLIENT_IP_REQUIRED("Header client_ip required", null, null),
    HEADER_CLIENT_IP_INVALID("Header client_ip is invalid", null, null),
    HEADER_CLIENT_USER_REQUIRED("Header client_user is required", null, null),
    HEADER_CLIENT_DATETIME_REQUIRED("Header client_datetime is required", null, null),
    HEADER_CLIENT_DATETIME_INVALID("Header client_datetime is invalid", null, null),
    VERSION_API_NOT_FOUND("Version API not found", null, null),
    VALIDATION_ERROR("Validation error", null, null),

    // Business — allocation instruction
    ORD_ALLOC_GRP_INVALID_SIZE("ordAllocGrp must contain exactly one entry", 7,
            "El grupo ordAllocGrp debe contener exactamente una entrada"),
    MIDDLEWARE_MSG_INVALID("middlewareMsg must be CREAR or ELIMINAR", 7,
            "El mensaje middlewareMsg debe ser CREAR o ELIMINAR"),
    ALLOC_LINK_ID_REQUIRED("allocLinkID is required for ELIMINAR", 7,
            "El campo allocLinkID es obligatorio para la operacion ELIMINAR"),
    PARTICIPANT_NOT_FOUND("Participant not found", 7,
            "Participante no encontrado"),
    PARTICIPANT_IS_CUSTODIAN("Participant is a custodian and cannot operate directly", 7,
            "El participante es custodio y no puede operar directamente"),
    TRADE_NOT_FOUND("Trade not found for the given matchId and matchDate", 7,
            "Operacion no encontrada para el matchId y matchDate indicados"),
    SETTLEMENT_NOT_FOUND("Settlement not found for the given trade, fraction and side", 7,
            "Liquidacion no encontrada para la operacion, fraccion y punta indicadas"),
    SETTLEMENT_INVALID_STATUS("Settlement is not in a valid status for this operation", 7,
            "La liquidacion no se encuentra en un estado valido para esta operacion"),
    CLEARING_CUSTODIAN_NOT_FOUND("Clearing custodian record not found", 7,
            "Registro de custodio de compensacion no encontrado"),
    CLEARING_CUSTODIAN_ALREADY_EXISTS("Active clearing custodian already exists for this settlement", 7,
            "Ya existe un paquete de custodio activo para esta liquidacion"),
    PACKAGE_CUSTODIAN_NOT_FOUND("Package custodian record not found", 7,
            "Registro de paquete custodio no encontrado"),
    PACKAGE_CUSTODIAN_ALREADY_EXISTS("Active package custodian already exists for this settlement", 7,
            "Ya existe un paquete custodio activo para esta liquidacion"),
    BUNDLE_SEQUENCE_NOT_FOUND("Bundle sequence not found for participant", 7,
            "Secuencia de paquete no encontrada para el participante"),
    PACKAGE_CUSTODIAN_CREATION_FAILED("Failed to create package custodian record", 7,
            "Error al crear el registro de paquete custodio"),
    PACKAGE_CUSTODIAN_HISTORY_CREATION_FAILED("Failed to create package custodian history record", 7,
            "Error al crear el historico de cabecera de paquete custodio"),
    MANUAL_PACKAGE_REQUEST_EMPTY("Manual package request must contain package data", 7,
            "La solicitud manual debe contener datos de paquete"),
    MANUAL_PACKAGE_DETAIL_EMPTY("Manual package must contain details", 7,
            "El paquete manual debe contener detalles"),
    MANUAL_PACKAGE_INCONSISTENT_DETAIL("Manual package detail is inconsistent with its header", 7,
            "El detalle no corresponde a la cabecera del paquete manual"),
    AUTOMATIC_PACKAGE_REQUEST_EMPTY("Automatic package request must contain packages", 7,
            "La solicitud automatica debe contener paquetes"),
    AUTOMATIC_PACKAGE_DETAIL_EMPTY("Automatic package must contain details", 7,
            "El paquete automatico debe contener detalles"),
    AUTOMATIC_PACKAGE_INCONSISTENT_DETAIL("Package detail is inconsistent with its header", 7,
            "El detalle no corresponde a la cabecera del paquete"),
    AUTOMATIC_PACKAGE_REFERENCE_PACKAGE_REQUIRED("referencePackage is required for automatic custodian packaging", 7,
            "La referencia de paquete es obligatoria para el empaquetamiento automatico"),
    PACKAGE_DETAIL_ALREADY_EXISTS("Package detail or unique fraction is already packaged", 7,
            "El detalle o la fraccion unica ya se encuentra empaquetado"),
    PACKAGE_DETAIL_CREATION_FAILED("Failed to create automatic package details", 7,
            "Error al crear los detalles del paquete automatico"),
    PACKAGE_DETAIL_HISTORY_CREATION_FAILED("Failed to create automatic package detail history records", 7,
            "Error al crear los historicos de detalle del paquete automatico"),
    AUTOMATIC_PACKAGE_CREATION_FAILED("Failed to create automatic custodian package", 7,
            "Error al crear el paquete custodio automatico"),
    BUNDLE_SEQUENCE_UPDATE_FAILED("Failed to get next bundle sequence", 7,
            "Error al obtener la siguiente secuencia de paquete"),
    LEGACY_PACKAGE_FLOW_NOT_SUPPORTED("Legacy package custodian flow is not compatible with current package model", 7,
            "El flujo legacy de paquete custodio no es compatible con el modelo actual"),
    MANUAL_PACKAGE_FLOW_NOT_IMPLEMENTED("Manual Package flow not implemented",7,
            "El paquete manual aun no esta implementado"),

    // Kafka infrastructure
    ERROR_KAFKA_PRODUCER_NUBO("Error Producer Kafka Nubo", null, null),
    ERROR_DESERIALIZER_JSON("Error Deserializer Json", null, null),
    ERROR_KAFKA_CONSUMER_NUBO("Error Consumer Kafka Nubo", null, null);

    private final String message;
    private final Integer allocRejCode;
    private final String spanishMessage;

    ErrorCode(String message, Integer allocRejCode, String spanishMessage) {
        this.message = message;
        this.allocRejCode = allocRejCode;
        this.spanishMessage = spanishMessage;
    }

    public String getName() {
        return this.name();
    }

}

```

## src/main/java/com/nubo/packages/custody/cmd/api/exception/error/ErrorResponse.java

```java
package com.nubo.packages.custody.cmd.api.exception.error;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
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

## src/main/java/com/nubo/packages/custody/cmd/api/exception/error/ErrorValidation.java

```java
package com.nubo.packages.custody.cmd.api.exception.error;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ErrorValidation {

    private String id;
    private String description;

}

```

## src/main/java/com/nubo/packages/custody/cmd/api/exception/handler/GlobalExceptionHandler.java

```java
package com.nubo.packages.custody.cmd.api.exception.handler;

import com.nubo.packages.custody.cmd.api.application.properties.PropertiesContext;
import com.nubo.packages.custody.cmd.api.application.util.ApplicationUtils;
import com.nubo.packages.custody.cmd.api.exception.ClientException;
import com.nubo.packages.custody.cmd.api.exception.ServiceException;
import com.nubo.packages.custody.cmd.api.exception.error.ErrorCode;
import com.nubo.packages.custody.cmd.api.exception.error.ErrorResponse;
import com.nubo.packages.custody.cmd.api.exception.error.ErrorValidation;
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
    public ResponseEntity<ErrorResponse> handlerHttpRequestMethodNotSupportedException(
            HttpRequestMethodNotSupportedException exception, HttpServletRequest request) {
        return buildErrorResponse(HttpStatus.METHOD_NOT_ALLOWED, exception, request, ErrorCode.METHOD_NOT_ALLOWED);
    }

    @ExceptionHandler(MethodArgumentTypeMismatchException.class)
    public ResponseEntity<ErrorResponse> handlerMethodArgumentTypeMismatchException(
            MethodArgumentTypeMismatchException exception, HttpServletRequest request) {
        return buildErrorResponse(HttpStatus.BAD_REQUEST, exception, request, ErrorCode.METHOD_ARGUMENT_TYPE);
    }

    @ExceptionHandler(HttpMediaTypeNotSupportedException.class)
    public ResponseEntity<ErrorResponse> handlerHttpMediaTypeNotSupportedException(
            HttpMediaTypeNotSupportedException exception, HttpServletRequest request) {
        return buildErrorResponse(HttpStatus.UNSUPPORTED_MEDIA_TYPE, exception, request,
                ErrorCode.UNSUPPORTED_MEDIA_TYPE);
    }

    @ExceptionHandler(HttpMessageNotReadableException.class)
    public ResponseEntity<ErrorResponse> handlerHttpMessageNotReadableException(
            HttpMessageNotReadableException exception, HttpServletRequest request) {
        return buildErrorResponse(HttpStatus.BAD_REQUEST, exception, request, ErrorCode.MESSAGE_NOT_READABLE);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorResponse> handlerMethodArgumentNotValidException(
            MethodArgumentNotValidException exception, HttpServletRequest request) {
        List<ErrorValidation> errors = exception.getBindingResult().getFieldErrors().stream().map(error ->
                ErrorValidation.builder().id(error.getField()).description(error.getDefaultMessage())
                        .build()).toList();
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

    private ResponseEntity<ErrorResponse> buildClientErrorResponse(HttpStatus status, ErrorCode errorCode,
                                                                    String cause) {
        try {
            Pattern pattern = Pattern.compile("\\{.*\\}");
            Matcher matcher = pattern.matcher(cause);
            if (matcher.find()) {
                String json = matcher.group();
                ErrorResponse errorResponse = (ErrorResponse) ApplicationUtils.convertJsonToObject(json,
                        ErrorResponse.class);
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

## src/main/java/com/nubo/packages/custody/cmd/api/exception/kafka/KafkaErrorBuild.java

```java
package com.nubo.packages.custody.cmd.api.exception.kafka;

import com.nubo.packages.custody.cmd.api.application.properties.PropertiesConfig;
import com.nubo.packages.custody.cmd.api.application.util.ApplicationUtils;
import com.nubo.packages.custody.cmd.api.exception.error.ErrorCode;
import com.nubo.packages.custody.cmd.api.exception.error.ErrorResponse;
import com.nubo.packages.custody.cmd.api.exception.error.ErrorValidation;

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

        List<ErrorValidation> errorDetails = getErrorValidations(exception);
        if (!errorDetails.isEmpty()) {
            errorResponse.setErrorDetails(errorDetails);
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

## src/main/java/com/nubo/packages/custody/cmd/api/helpers/MapperUtil.java

```java
package com.nubo.packages.custody.cmd.api.helpers;

import com.nubo.packages.custody.cmd.api.models.dto.response.PackageCustodianOutDto;
import com.nubo.packages.custody.cmd.api.models.entity.PackageCustodianEntity;

public final class MapperUtil {

    private MapperUtil() {
    }

    public static PackageCustodianOutDto packageCustodianEntityToPackageCustodianOutDto(
            PackageCustodianEntity packageCustodianEntity) {
        return PackageCustodianOutDto.builder()
                .packageCustodianId(packageCustodianEntity.getPackageCustodianId())
                .marketId(packageCustodianEntity.getMarketId())
                .codeSCB(packageCustodianEntity.getCodeSCB())
                .packageDate(packageCustodianEntity.getPackageDate())
                .participantCode(packageCustodianEntity.getParticipantCode())
                .sequence(packageCustodianEntity.getSequence())
                .build();
    }

}

```

## src/main/java/com/nubo/packages/custody/cmd/api/helpers/ValidatorUtil.java

```java
package com.nubo.packages.custody.cmd.api.helpers;

import java.util.Set;

import org.springframework.stereotype.Component;

import com.nubo.packages.custody.cmd.api.exception.ServiceException;
import com.nubo.packages.custody.cmd.api.exception.error.ErrorCode;

import jakarta.validation.ConstraintViolation;
import jakarta.validation.Validator;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
@RequiredArgsConstructor
public class ValidatorUtil {

    private final Validator validator;

    public <T> void validateObject(T object) {
        Set<ConstraintViolation<T>> violations = validator.validate(object);
        if (!violations.isEmpty()) {
            String messageError = "";
            log.error("Validation errors found for object: {}", object.toString());
            for (ConstraintViolation<T> violation : violations) {
                String message =  String.format("Field: %s - Error: %s - Invalid value: %s",
                        violation.getPropertyPath(),
                        violation.getMessage(),
                        violation.getInvalidValue());
                messageError += message + "; ";
                log.error(message);
            }
            throw new ServiceException(ErrorCode.VALIDATION_ERROR,
                    "Validation failed for object of type: " + object.getClass().getSimpleName() + " - " + messageError);
        }
        log.debug("Object validation successful for type: {}", object.getClass().getSimpleName());
    }
}

```

## src/main/java/com/nubo/packages/custody/cmd/api/models/dto/internal/ActiveDetailHeader.java

```java
package com.nubo.packages.custody.cmd.api.models.dto.internal;

/** Scalar lookup: does not materialize or attach PACKAGE_DETAIL entities. */
public record ActiveDetailHeader(Long uniqueFractionId, Long packageCustodianId) { }

```

## src/main/java/com/nubo/packages/custody/cmd/api/models/dto/notification/NotificationRequestDto.java

```java
package com.nubo.packages.custody.cmd.api.models.dto.notification;

import com.fasterxml.jackson.annotation.JsonInclude;
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
@JsonInclude(JsonInclude.Include.ALWAYS)
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

    JsonNode metadata;

    String timestamp;

}

```

## src/main/java/com/nubo/packages/custody/cmd/api/models/dto/request/AllocationInstructionCrudRequestDto.java

```java
package com.nubo.packages.custody.cmd.api.models.dto.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AllocationInstructionCrudRequestDto {

    @NotNull
    @Valid
    @JsonProperty("allocationInstruction")
    private AllocationInstruction allocationInstruction;

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class AllocationInstruction {
        private String side;
        private Integer quantity;
        private String allocLinkID;
        private String secondaryAllocID;
        @NotBlank
        private String tradeDate;
        @NotNull
        @Valid
        private Header header;
        private List<OrdAllocGrp> ordAllocGrp;
        private Instrument instrument;
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Header {
        private String senderSubID;
        @NotBlank
        private String middlewareMsg;
        private String sendingTime;
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class OrdAllocGrp {
        private String orderID;
        private String secondaryOrderID;
        private String orderDate;
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Instrument {
        private String symbol;
    }

}


```

## src/main/java/com/nubo/packages/custody/cmd/api/models/dto/request/PackageCustodianAutomaticInDto.java

```java
package com.nubo.packages.custody.cmd.api.models.dto.request;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PackageCustodianAutomaticInDto {

    @NotBlank
    private String sourceApplication;

    @NotNull
    private LocalDate executionDate;

    private String cutType;

    private Boolean sameDaySettlement;

    @Valid
    @NotEmpty
    private List<PackageInDto> packages;

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class PackageInDto {

        @NotBlank
        private String marketId;

        private String codeSCB;

        @NotBlank
        private String sideId;

        private String investorDocumentNumber;

        private String referencePackage;

        @NotNull
        private Long investorId;

        @NotNull
        private Long participantId;

        @NotNull
        private Long investorAccountId;

        @NotNull
        private Long isinNumberId;

        @NotNull
        private Long securityId;

        @NotNull
        private Long typeId;

        @NotBlank
        private String depositoryId;

        private LocalDate clearingDate;

        private LocalDate returnClearingDate;

        private Long custodianStatusId;

        @NotNull
        private Long custodianId;

        private Long ficAdministratorId;

        private BigDecimal totalFractionQuantity;

        private BigDecimal averagePrice;

        private BigDecimal totalFractionVolume;

        private BigDecimal totalNetAmount;

        private BigDecimal totalCommissionAmount;

        private BigDecimal totalValTaxAmount;

        private BigDecimal clearingPercentage;

        private BigDecimal averageFractionVolume;

        private BigDecimal returnNetAmount;

        private BigDecimal averageRate;

        @Valid
        @NotEmpty
        private List<DetailInDto> details;
    }

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class DetailInDto {

        @NotNull
        private Long tradeId;

        @NotBlank
        private String sideId;

        @NotNull
        private Long fraction;

        @NotNull
        private LocalDate matchDate;

        @NotNull
        private Long uniqueFractionId;

        @NotNull
        private Long investorId;

        private Long custodianId;

        @NotNull
        private Long participantId;

        private Long ficAdministratorId;

        @NotNull
        private LocalDate clearingDate;

        private LocalDate returnClearingDate;

        private BigDecimal fractionQuantity;

        private BigDecimal price;

        private BigDecimal rate;

        private Boolean indicateExitReturn;

        private String referencePackage;
    }
}

```

## src/main/java/com/nubo/packages/custody/cmd/api/models/dto/request/PackageCustodianInDto.java

```java
package com.nubo.packages.custody.cmd.api.models.dto.request;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PackageCustodianInDto {

    private String clientUser;

    @NotNull
    private String marketId;

    @NotNull
    private Long participantId;

    @Size(max = 3)
    private String codeSCB;

}

```

## src/main/java/com/nubo/packages/custody/cmd/api/models/dto/request/PackageCustodianManualDetailInDto.java

```java
package com.nubo.packages.custody.cmd.api.models.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.math.BigDecimal;
import java.time.LocalDate;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PackageCustodianManualDetailInDto {

    @NotNull
    private Long tradeId;

    @NotBlank
    private String sideId;

    @NotNull
    private Long fraction;

    @NotNull
    private LocalDate matchDate;

    @NotNull
    private Long uniqueFractionId;

    @NotNull
    private Long investorId;

    private Long custodianId;

    @NotNull
    private Long participantId;

    private Long ficAdministratorId;

    @NotNull
    private LocalDate clearingDate;

    private LocalDate returnClearingDate;

    private BigDecimal fractionQuantity;

    private BigDecimal price;

    private BigDecimal rate;

    private Boolean indicateExitReturn;

    private String referencePackage;
}

```

## src/main/java/com/nubo/packages/custody/cmd/api/models/dto/request/PackageCustodianManualInDto.java

```java
package com.nubo.packages.custody.cmd.api.models.dto.request;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PackageCustodianManualInDto {

    @NotBlank
    private String sourceApplication;

    @NotBlank
    private String marketId;

    private String codeSCB;

    @NotBlank
    private String sideId;

    private String investorDocumentNumber;

    private String referencePackage;

    @NotNull
    private Long investorId;

    @NotNull
    private Long participantId;

    @NotNull
    private Long investorAccountId;

    @NotNull
    private Long isinNumberId;

    @NotNull
    private Long securityId;

    @NotNull
    private Long typeId;

    @NotBlank
    private String depositoryId;

    private LocalDate clearingDate;

    private LocalDate returnClearingDate;

    private Long custodianStatusId;

    @NotNull
    private Long custodianId;

    private Long ficAdministratorId;

    private BigDecimal totalFractionQuantity;

    private BigDecimal averagePrice;

    private BigDecimal totalFractionVolume;

    private BigDecimal totalNetAmount;

    private BigDecimal totalCommissionAmount;

    private BigDecimal totalValTaxAmount;

    private BigDecimal clearingPercentage;

    private BigDecimal averageFractionVolume;

    private BigDecimal returnNetAmount;

    private BigDecimal averageRate;

    @Valid
    @NotEmpty
    private List<PackageCustodianManualDetailInDto> details;
}

```

## src/main/java/com/nubo/packages/custody/cmd/api/models/dto/response/AllocationInstructionAckOutDto.java

```java
package com.nubo.packages.custody.cmd.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
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
public class AllocationInstructionAckOutDto {

    @JsonProperty("allocationInstructionAck")
    private AllocationInstructionAck allocationInstructionAck;

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    @JsonInclude(JsonInclude.Include.NON_NULL)
    public static class AllocationInstructionAck {
        private String secondaryAllocID;
        private String tradeDate;
        private Integer allocStatus;
        private Integer allocRejCode;
        private String side;
        private Integer noAllocs;
        private Header header;
        private List<AllocAck> allocAck;
    }

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    @JsonInclude(JsonInclude.Include.NON_NULL)
    public static class Header {
        private String targetSubID;
        private String sendingTime;
        private String middlewareMsg;
    }

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    @JsonInclude(JsonInclude.Include.NON_NULL)
    public static class AllocAck {
        private String individualAllocID;
        private String secondaryIndividualAllocID;
        private String text;
    }

}


```

## src/main/java/com/nubo/packages/custody/cmd/api/models/dto/response/PackageCustodianAutomaticOutDto.java

```java
package com.nubo.packages.custody.cmd.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import java.time.LocalDate;
import java.util.List;
import lombok.*;

@Data @Builder @NoArgsConstructor @AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class PackageCustodianAutomaticOutDto {
    private int processedPackages;
    private int createdPackages;
    private int processedDetails;
    private int createdDetails;
    private String status;
    private List<PackageResultDto> packages;
    private List<ProcessedDetailDto> processedDetailsList;

    public List<ProcessedDetailDto> getProcessedDetailsList() {
        return processedDetailsList;
    }

    public void setProcessedDetailsList(List<ProcessedDetailDto> processedDetailsList) {
        this.processedDetailsList = processedDetailsList;
    }

    @Data @Builder @NoArgsConstructor @AllArgsConstructor
    public static class PackageResultDto {
        private Long packageCustodianId;
        private String packageNumber;
        private String marketId;
        private LocalDate packageDate;
        private Long participantId;
        private String participantCode;
        private Long sequence;
        private int detailsCreated;
        private String referencePackage;
    }

    @Data @Builder @NoArgsConstructor @AllArgsConstructor
    public static class ProcessedDetailDto {
        private Long packageCustodianId;
        private String packageNumber;
        private String marketId;
        private LocalDate packageDate;
        private Long tradeId;
        private String sideId;
        private Long fraction;
        private Long uniqueFractionId;
        private Long investorId;
        private Long participantId;
        private Long custodianId;
        private Long ficAdministratorId;
    }
}

```

## src/main/java/com/nubo/packages/custody/cmd/api/models/dto/response/PackageCustodianManualOutDto.java

```java
package com.nubo.packages.custody.cmd.api.models.dto.response;

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
public class PackageCustodianManualOutDto {

    private int processedDetails;
    private int createdDetails;
    private String status;
    private PackageCustodianManualPackageOutDto packageCreated;
}

```

## src/main/java/com/nubo/packages/custody/cmd/api/models/dto/response/PackageCustodianManualPackageOutDto.java

```java
package com.nubo.packages.custody.cmd.api.models.dto.response;

import java.time.LocalDate;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PackageCustodianManualPackageOutDto {

    private Long packageCustodianId;
    private String packageNumber;
    private String marketId;
    private LocalDate packageDate;
    private Long participantId;
    private String participantCode;
    private Long sequence;
    private int detailsCreated;
    private String referencePackage;
}

```

## src/main/java/com/nubo/packages/custody/cmd/api/models/dto/response/PackageCustodianOutDto.java

```java
package com.nubo.packages.custody.cmd.api.models.dto.response;

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
@JsonInclude(JsonInclude.Include.ALWAYS)
public class PackageCustodianOutDto {

    private Long packageCustodianId;

    private String marketId;

    private String codeSCB;

    private LocalDate packageDate;

    private String participantCode;

    private Long sequence;

}

```

## src/main/java/com/nubo/packages/custody/cmd/api/models/entity/BundleSequenceEntity.java

```java
package com.nubo.packages.custody.cmd.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.Objects;

@Getter
@Setter
@Entity
@Table(name = "BUNDLE_SEQUENCE", schema = "NUANBODB")
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BundleSequenceEntity {

    @Id
    @Column(name = "PARTICIPANT_ID")
    private Long participantId;

    @Column(name = "SEQUENCE_NUMBER")
    private Long sequenceNumber;

    @Column(name = "LAST_MODIFY_USER")
    private String lastModifyUser;

    @Column(name = "LAST_MODIFY_APPLIC")
    private String lastModifyApplic;

    @Column(name = "LAST_MODIFY_DATE")
    private LocalDateTime lastModifyDate;

    @Column(name = "LAST_MODIFY_IP")
    private String lastModifyIp;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (!(o instanceof BundleSequenceEntity that))
            return false;
        return Objects.equals(participantId, that.participantId);
    }

    @Override
    public int hashCode() {
        return participantId != null ? participantId.hashCode() : 0;
    }

}

```

## src/main/java/com/nubo/packages/custody/cmd/api/models/entity/CustodianStatusHistoryEntity.java

```java
package com.nubo.packages.custody.cmd.api.models.entity;

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

import java.math.BigDecimal;
import java.time.OffsetDateTime;
import java.util.Objects;

@Getter
@Setter
@Builder(toBuilder = true)
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"CUSTODIAN_STATUS_HISTORY\"", schema = "\"NUANBODB\"")
public class CustodianStatusHistoryEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"CUSTODIAN_STATUS_HISTORY_ID\"")
    private Long id;

    @Column(name = "\"MARKET_ID\"")
    private String marketId;

    @Column(name = "\"UNIQUE_FRACTION_ID\"")
    private Long uniqueFractionId;

    @Column(name = "\"MATCH_ID\"", precision = 19, scale = 0)
    private Long matchId;

    @Column(name = "\"FRACTION\"", nullable = false)
    private Integer fraction;

    @Column(name = "\"CUSTODIAN_STATUS_TIME\"")
    private OffsetDateTime custodianStatusTime;

    @Column(name = "\"INVESTOR_ACCOUNT_ID\"")
    private Long investorAccountId;

    @Column(name = "\"CUSTODIAN_STATUS_ID\"", nullable = false)
    private Long custodianStatusId;

    @Column(name = "\"REJECTION_REASON_ID\"")
    private Integer rejectionReasonId;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 250, nullable = false)
    private String lastModifyApplic;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private OffsetDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50)
    private String lastModifyIp;

    @Column(name = "TRADE_ID")
    private Long tradeId;

    @Column(name = "SIDE_ID")
    private String sideId;

    @Column(name = "INVESTOR_ID")
    private Long investorId;

    @Column(name = "CUSTODIAN_ID")
    private Long custodianId;

    @Column(name = "FIC_ADMINISTRATOR_ID")
    private Long ficAdministratorId;

    @Column(name = "FRACTION_QUANTITY")
    private BigDecimal fractionQuantity;

    @Column(name = "FRACTION_VOLUME")
    private BigDecimal fractionVolume;

    @Column(name = "NET_AMOUNT")
    private BigDecimal netAmount;

    @Column(name = "COMMISSION_AMOUNT")
    private BigDecimal commissionAmount;

    @Column(name = "VAL_TAX_AMOUNT")
    private BigDecimal valTaxAmount;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (!(o instanceof CustodianStatusHistoryEntity that))
            return false;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}


```

## src/main/java/com/nubo/packages/custody/cmd/api/models/entity/PackageCustodianEntity.java

```java
package com.nubo.packages.custody.cmd.api.models.entity;

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

import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.math.BigDecimal;
import java.util.Objects;

@Getter
@Setter
@Entity
@Table(name = "PACKAGE_CUSTODIAN", schema = "NUANBODB")
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PackageCustodianEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "PACKAGE_CUSTODIAN_ID", nullable = false)
    private Long packageCustodianId;

    @Column(name = "MARKET_ID", nullable = false, length = 2)
    private String marketId;

    @Column(name = "PACKAGE_DATE", nullable = false)
    private LocalDate packageDate;

    @Column(name = "CODE_SCB", length = 3)
    private String codeSCB;

    @Column(name = "PARTICIPANT_CODE", nullable = false, length = 6)
    private String participantCode;

    @Column(name = "SEQUENCE", nullable = false)
    private Long sequence;

    @Column(name = "PACKAGE_NUMBER", nullable = false, length = 18)
    private String packageNumber;

    @Column(name = "SIDE_ID", nullable = false, length = 2)
    private String sideId;

    @Column(name = "INVESTOR_ID", nullable = false)
    private Long investorId;

    @Column(name = "PARTICIPANT_ID", nullable = false)
    private Long participantId;

    @Column(name = "INVESTOR_ACCOUNT_ID", nullable = false)
    private Long investorAccountId;

    @Column(name = "ISIN_NUMBER_ID", nullable = false)
    private Long isinNumberId;

    @Column(name = "SECURITY_ID", nullable = false)
    private Long securityId;

    @Column(name = "TYPE_ID", nullable = false)
    private Long typeId;

    @Column(name = "DEPOSITORY_ID", nullable = false, length = 2)
    private String depositoryId;

    @Column(name = "CLEARING_DATE")
    private LocalDate clearingDate;

    @Column(name = "RETURN_CLEARING_DATE")
    private LocalDate returnClearingDate;

    @Column(name = "PACKAGE_STATUS_ID")
    private Long packageStatusId;

    @Column(name = "REFERENCE_PACKAGE", length = 10)
    private String referencePackage;

    @Column(name = "CUSTODIAN_ID", nullable = false)
    private Long custodianId;

    @Column(name = "FIC_ADMINISTRATOR_ID")
    private Long ficAdministratorId;

    @Column(name = "TOTAL_FRACTION_QUANTITY", precision = 24, scale = 4)
    private BigDecimal totalFractionQuantity;

    @Column(name = "AVERAGE_PRICE", precision = 16, scale = 4)
    private BigDecimal averagePrice;

    @Column(name = "TOTAL_FRACTION_VOLUME", precision = 24, scale = 4)
    private BigDecimal totalFractionVolume;

    @Column(name = "TOTAL_NET_AMOUNT", precision = 24, scale = 4)
    private BigDecimal totalNetAmount;

    @Column(name = "TOTAL_COMMISSION_AMOUNT", precision = 24, scale = 4)
    private BigDecimal totalCommissionAmount;

    @Column(name = "TOTAL_VAL_TAX_AMOUNT", precision = 24, scale = 4)
    private BigDecimal totalValTaxAmount;

    @Column(name = "CLEARING_PERCENTAGE", precision = 6, scale = 4)
    private BigDecimal clearingPercentage;

    @Column(name = "AVERAGE_FRACTION_VOLUME", precision = 24, scale = 4)
    private BigDecimal averageFractionVolume;

    @Column(name = "RETURN_NET_AMOUNT", precision = 24, scale = 4)
    private BigDecimal returnNetAmount;

    @Column(name = "AVERAGE_RATE", precision = 16, scale = 4)
    private BigDecimal averageRate;

    @Column(name = "LAST_MODIFY_USER", nullable = false, length = 250)
    private String lastModifyUser;

    @Column(name = "LAST_MODIFY_APPLIC", nullable = false, length = 250)
    private String lastModifyApplic;

    @Column(name = "LAST_MODIFY_DATE", nullable = false)
    private OffsetDateTime lastModifyDate;

    @Column(name = "LAST_MODIFY_IP", length = 50)
    private String lastModifyIp;

    @Column(name = "OLD_INVESTOR_ACCOUNT_ID")
    private Long oldInvestorAccountId;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (!(o instanceof PackageCustodianEntity that))
            return false;
        return Objects.equals(packageCustodianId, that.packageCustodianId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(packageCustodianId);
    }

}

```

## src/main/java/com/nubo/packages/custody/cmd/api/models/entity/PackageCustodianHistoryEntity.java

```java
package com.nubo.packages.custody.cmd.api.models.entity;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.OffsetDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "PACKAGE_CUSTODIAN_HISTORY", schema = "NUANBODB")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PackageCustodianHistoryEntity {

    @EmbeddedId
    private PackageCustodianHistoryId id;

    @Column(name = "PARTICIPANT_CODE", nullable = false, length = 3)
    private String participantCode;

    @Column(name = "SEQUENCE", nullable = false)
    private Long sequence;

    @Column(name = "CODE_SCB", length = 3)
    private String codeSCB;

    @Column(name = "PACKAGE_NUMBER", nullable = false, length = 18)
    private String packageNumber;

    @Column(name = "SIDE_ID", nullable = false, length = 2)
    private String sideId;

    @Column(name = "INVESTOR_ID", nullable = false)
    private Long investorId;

    @Column(name = "GENERATING_PARTICIPANT_ID", nullable = false)
    private Long generatingParticipantId;

    @Column(name = "INVESTOR_ACCOUNT_ID", nullable = false)
    private Long investorAccountId;

    @Column(name = "CUSTODIAN_STATUS_ID", nullable = false)
    private Long custodianStatusId;

    @Column(name = "CUSTODIAN_ID", nullable = false)
    private Long custodianId;

    @Column(name = "FIC_ADMINISTRATOR_ID")
    private Long ficAdministratorId;

    @Column(name = "REJECTION_REASON_ID")
    private Long rejectionReasonId;

    @Column(name = "TOTAL_FRACTION_QUANTITY", precision = 24, scale = 4)
    private BigDecimal totalFractionQuantity;

    @Column(name = "TOTAL_FRACTION_VOLUME", precision = 24, scale = 4)
    private BigDecimal totalFractionVolume;

    @Column(name = "TOTAL_NET_AMOUNT", precision = 24, scale = 4)
    private BigDecimal totalNetAmount;

    @Column(name = "TOTAL_COMMISSION_AMOUNT", precision = 24, scale = 4)
    private BigDecimal totalCommissionAmount;

    @Column(name = "TOTAL_VAL_TAX_AMOUNT", precision = 24, scale = 4)
    private BigDecimal totalValTaxAmount;

    @Column(name = "AVERAGE_PRICE", precision = 16, scale = 4)
    private BigDecimal averagePrice;

    @Column(name = "CLEARING_DATE")
    private LocalDate clearingDate;

    @Column(name = "RETURN_CLEARING_DATE")
    private LocalDate returnClearingDate;

    @Column(name = "AVERAGE_FRACTION_VOLUME", precision = 24, scale = 4)
    private BigDecimal averageFractionVolume;

    @Column(name = "AVERAGE_RATE", precision = 16, scale = 4)
    private BigDecimal averageRate;

    @Column(name = "RETURN_NET_AMOUNT", precision = 24, scale = 4)
    private BigDecimal returnNetAmount;

    @Column(name = "LAST_MODIFY_USER", nullable = false, length = 250)
    private String lastModifyUser;

    @Column(name = "LAST_MODIFY_APPLIC", nullable = false, length = 250)
    private String lastModifyApplic;

    @Column(name = "LAST_MODIFY_DATE", nullable = false)
    private OffsetDateTime lastModifyDate;

    @Column(name = "LAST_MODIFY_IP", length = 50)
    private String lastModifyIp;
}

```

## src/main/java/com/nubo/packages/custody/cmd/api/models/entity/PackageCustodianHistoryId.java

```java
package com.nubo.packages.custody.cmd.api.models.entity;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Embeddable
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PackageCustodianHistoryId implements Serializable {

    @Column(name = "PACKAGE_CUSTODIAN_ID", nullable = false)
    private Long packageCustodianId;

    @Column(name = "MARKET_ID", nullable = false, length = 2)
    private String marketId;

    @Column(name = "PACKAGE_DATE", nullable = false)
    private LocalDate packageDate;

    @Column(name = "EVENT_TIME", nullable = false)
    private LocalDateTime eventTime;
}
```

## src/main/java/com/nubo/packages/custody/cmd/api/models/entity/PackageCustodianId.java

```java
package com.nubo.packages.custody.cmd.api.models.entity;

import java.io.Serializable;
import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PackageCustodianId implements Serializable {

    private Long packageCustodianId;
    private String marketId;
    private LocalDate packageDate;
}

```

## src/main/java/com/nubo/packages/custody/cmd/api/models/entity/PackageDetailEntity.java

```java
package com.nubo.packages.custody.cmd.api.models.entity;
import java.time.*;
import jakarta.persistence.*;
import lombok.*;
@Entity @Table(name="PACKAGE_DETAIL",schema="NUANBODB")
@Data @Builder @NoArgsConstructor @AllArgsConstructor
public class PackageDetailEntity {

    @EmbeddedId private PackageDetailId id;

    @Column(name="PARTICIPANT_CODE", nullable = false, length = 3)
    private String participantCode;

    @Column(name="SEQUENCE", nullable = false)
    private Long sequence;

    @Column(name="PACKAGE_NUMBER", nullable = false, length = 18)
    private String packageNumber;

    @Column(name="MATCH_DATE", nullable = false)
    private LocalDate matchDate;

    @Column(name="UNIQUE_FRACTION_ID", nullable = false)
    private Long uniqueFractionId;

    @Column(name="INVESTOR_ID", nullable = false)
    private Long investorId;

    @Column(name="CUSTODIAN_ID")
    private Long custodianId;

    @Column(name="PARTICIPANT_ID", nullable = false)
    private Long participantId;

    @Column(name="PACKAGE_STATUS_ID")
    private Long packageStatusId;

    @Column(name="LAST_MODIFY_USER", nullable = false, length = 250)
    private String lastModifyUser;

    @Column(name="LAST_MODIFY_APPLIC", nullable = false, length = 250)
    private String lastModifyApplic;

    @Column(name="LAST_MODIFY_DATE", nullable = false)
    private OffsetDateTime lastModifyDate;

    @Column(name="LAST_MODIFY_IP", length = 50)
    private String lastModifyIp;
}

```

## src/main/java/com/nubo/packages/custody/cmd/api/models/entity/PackageDetailHistoryEntity.java

```java
package com.nubo.packages.custody.cmd.api.models.entity;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.OffsetDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "PACKAGE_DETAIL_HISTORY", schema = "NUANBODB")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PackageDetailHistoryEntity {

    @EmbeddedId
    private PackageDetailHistoryId id;

    @Column(name = "PARTICIPANT_CODE", nullable = false, length = 3)
    private String participantCode;

    @Column(name = "SEQUENCE", nullable = false)
    private Long sequence;

    @Column(name = "PACKAGE_NUMBER", nullable = false, length = 18)
    private String packageNumber;

    @Column(name = "PACKAGE_EVENT_ID")
    private Long packageEventId;

    @Column(name = "TRADE_ID", nullable = false)
    private Long tradeId;

    @Column(name = "SIDE_ID", nullable = false, length = 2)
    private String sideId;

    @Column(name = "FRACTION", nullable = false)
    private Long fraction;

    @Column(name = "UNIQUE_FRACTION_ID", nullable = false)
    private Long uniqueFractionId;

    @Column(name = "MATCH_DATE", nullable = false)
    private LocalDate matchDate;

    @Column(name = "CLEARING_DATE", nullable = false)
    private LocalDate clearingDate;

    @Column(name = "RETURN_CLEARING_DATE")
    private LocalDate returnClearingDate;

    @Column(name = "FRACTION_QUANTITY", precision = 16, scale = 4)
    private BigDecimal fractionQuantity;

    @Column(name = "PRICE", precision = 16, scale = 4)
    private BigDecimal price;

    @Column(name = "RATE", precision = 16, scale = 4)
    private BigDecimal rate;

    @Column(name = "INDICATE_EXIT_RETURN")
    private Boolean indicateExitReturn;

    @Column(name = "CUSTODIAN_ID")
    private Long custodianId;

    @Column(name = "PARTICIPANT_ID", nullable = false)
    private Long participantId;

    @Column(name = "LAST_MODIFY_USER", nullable = false, length = 250)
    private String lastModifyUser;

    @Column(name = "LAST_MODIFY_APPLIC", nullable = false, length = 250)
    private String lastModifyApplic;

    @Column(name = "LAST_MODIFY_DATE", nullable = false)
    private OffsetDateTime lastModifyDate;

    @Column(name = "LAST_MODIFY_IP", length = 50)
    private String lastModifyIp;
}
```

## src/main/java/com/nubo/packages/custody/cmd/api/models/entity/PackageDetailHistoryId.java

```java
package com.nubo.packages.custody.cmd.api.models.entity;
import java.io.Serializable;
import java.time.*;
import jakarta.persistence.*;
import lombok.*;
@Embeddable @Data @Builder @NoArgsConstructor @AllArgsConstructor
public class PackageDetailHistoryId implements Serializable {

    @Column(name="PACKAGE_CUSTODIAN_ID", nullable = false)
    private Long packageCustodianId;

    @Column(name="MARKET_ID", nullable = false, length = 2)
    private String marketId;

    @Column(name="PACKAGE_DATE", nullable = false)
    private LocalDate packageDate;

    @Column(name="STATUS_TIME", nullable = false)
    private LocalDateTime statusTime;
}

```

## src/main/java/com/nubo/packages/custody/cmd/api/models/entity/PackageDetailId.java

```java
package com.nubo.packages.custody.cmd.api.models.entity;
import java.io.Serializable;
import java.time.LocalDate;
import jakarta.persistence.*;
import lombok.*;
@Embeddable @Data @Builder @NoArgsConstructor @AllArgsConstructor
public class PackageDetailId implements Serializable {

    @Column(name="PACKAGE_CUSTODIAN_ID", nullable = false)
    private Long packageCustodianId;

    @Column(name="MARKET_ID", nullable = false, length = 2)
    private String marketId;

    @Column(name="PACKAGE_DATE", nullable = false)
    private LocalDate packageDate;

    @Column(name="TRADE_ID", nullable = false)
    private Long tradeId;

    @Column(name="SIDE_ID", nullable = false, length = 2)
    private String sideId;

    @Column(name="FRACTION", nullable = false)
    private Long fraction;
}

```

## src/main/java/com/nubo/packages/custody/cmd/api/models/entity/ParticipantEntity.java

```java
package com.nubo.packages.custody.cmd.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.time.OffsetDateTime;
import java.util.Objects;


@Getter
@Setter
@ToString
@Entity
@Table(name = "PARTICIPANT", schema = "NUANBODB")
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ParticipantEntity {

    @Id
    @Column(name = "PARTICIPANT_ID")
    private Long participantId;

    @Column(name = "CODE")
    private String code;

    @Column(name = "NAME")
    private String name;

    @Column(name = "CUSTODIAN")
    private Boolean custodian;

    @Column(name = "STATUS_ID")
    private Long statusId;

    @Column(name = "LAST_MODIFY_USER")
    private String lastModifyUser;

    @Column(name = "LAST_MODIFY_APPLIC")
    private String lastModifyApplic;

    @Column(name = "LAST_MODIFY_DATE")
    private OffsetDateTime lastModifyDate;

    @Column(name = "LAST_MODIFY_IP")
    private String lastModifyIp;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        ParticipantEntity that = (ParticipantEntity) o;
        return Objects.equals(participantId, that.participantId);
    }

    @Override
    public int hashCode() {
        return participantId != null ? participantId.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/packages/custody/cmd/api/models/entity/RejectionReasonEntity.java

```java
package com.nubo.packages.custody.cmd.api.models.entity;

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

import java.time.OffsetDateTime;
import java.util.Objects;

@Getter
@Setter
@Entity
@Table(name = "REJECTION_REASON", schema = "NUANBODB")
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RejectionReasonEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "REJECTION_REASON_ID")
    private Long rejectionReasonId;

    @Column(name = "REASON")
    private String reason;

    @Column(name = "LAST_MODIFY_USER")
    private String lastModifyUser;

    @Column(name = "LAST_MODIFY_APPLIC")
    private String lastModifyApplic;

    @Column(name = "LAST_MODIFY_DATE")
    private OffsetDateTime lastModifyDate;

    @Column(name = "LAST_MODIFY_IP")
    private String lastModifyIp;

    @Column(name = "CATEGORY")
    private String category;

    @Column(name = "ERROR_ID")
    private Long errorId;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (!(o instanceof RejectionReasonEntity that))
            return false;
        return Objects.equals(rejectionReasonId, that.rejectionReasonId);
    }

    @Override
    public int hashCode() {
        return rejectionReasonId != null ? rejectionReasonId.hashCode() : 0;
    }

}

```

## src/main/java/com/nubo/packages/custody/cmd/api/models/entity/SettlementEntity.java

```java
package com.nubo.packages.custody.cmd.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.OffsetDateTime;
import java.util.Objects;

@Getter
@Setter
@Entity
@Table(name = "SETTLEMENT", schema = "NUANBODB")
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SettlementEntity {

    @EmbeddedId
    private SettlementId id;

    @Column(name = "UNIQUE_FRACTION_ID")
    private Long uniqueFractionId;

    @Column(name = "CUSTODIAN_STATUS_ID")
    private Long custodianStatusId;

    @Column(name = "STATUS_ID")
    private Long statusId;

    @Column(name = "INVESTOR_ACCOUNT_ID")
    private Long investorAccountId;

    @Column(name = "INVESTOR_ID")
    private Long investorId;

    @Column(name = "CUSTODIAN_ID")
    private Long custodianId;

    @Column(name = "FIC_ADMINISTRATOR_ID")
    private Long ficAdministratorId;

    @Column(name = "FRACTION_QUANTITY")
    private BigDecimal fractionQuantity;

    @Column(name = "FRACTION_VOLUME")
    private BigDecimal fractionVolume;

    @Column(name = "NET_AMOUNT")
    private BigDecimal netAmount;

    @Column(name = "COMMISSION_AMOUNT")
    private BigDecimal commissionAmount;

    @Column(name = "VAL_TAX_AMOUNT")
    private BigDecimal valTaxAmount;

    @Column(name = "LAST_MODIFY_USER")
    private String lastModifyUser;

    @Column(name = "LAST_MODIFY_APPLIC")
    private String lastModifyApplic;

    @Column(name = "LAST_MODIFY_DATE")
    private OffsetDateTime lastModifyDate;

    @Column(name = "LAST_MODIFY_IP")
    private String lastModifyIp;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (!(o instanceof SettlementEntity that))
            return false;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

}

```

## src/main/java/com/nubo/packages/custody/cmd/api/models/entity/SettlementId.java

```java
package com.nubo.packages.custody.cmd.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.Objects;

@Embeddable
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SettlementId implements Serializable {

    @Column(name = "TRADE_ID")
    private Long tradeId;

    @Column(name = "FRACTION")
    private Integer fraction;

    @Column(name = "SIDE_ID")
    private String sideId;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (!(o instanceof SettlementId that))
            return false;
        return Objects.equals(tradeId, that.tradeId) &&
                Objects.equals(fraction, that.fraction) &&
                Objects.equals(sideId, that.sideId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(tradeId, fraction, sideId);
    }

}

```

## src/main/java/com/nubo/packages/custody/cmd/api/models/entity/TradeEntity.java

```java
package com.nubo.packages.custody.cmd.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.util.Objects;

@Getter
@Setter
@Entity
@Table(name = "TRADE", schema = "NUANBODB")
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TradeEntity {

    @Id
    @Column(name = "TRADE_ID")
    private Long tradeId;

    @Column(name = "MATCH_ID")
    private Long matchId;

    @Column(name = "MATCH_DATE")
    private LocalDate matchDate;

    @Column(name = "MARKET_ID")
    private String marketId;

    @Column(name = "CLEARING_DATE")
    private LocalDate clearingDate;

    @Column(name = "STATUS_ID")
    private Long statusId;

    @Column(name = "QUANTITY")
    private BigDecimal quantity;

    @Column(name = "LAST_MODIFY_USER")
    private String lastModifyUser;

    @Column(name = "LAST_MODIFY_APPLIC")
    private String lastModifyApplic;

    @Column(name = "LAST_MODIFY_DATE")
    private OffsetDateTime lastModifyDate;

    @Column(name = "LAST_MODIFY_IP")
    private String lastModifyIp;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (!(o instanceof TradeEntity that))
            return false;
        return Objects.equals(tradeId, that.tradeId);
    }

    @Override
    public int hashCode() {
        return tradeId != null ? tradeId.hashCode() : 0;
    }

}

```

## src/main/java/com/nubo/packages/custody/cmd/api/models/enums/AutomaticCutType.java

```java
package com.nubo.packages.custody.cmd.api.models.enums;


import java.util.Arrays;
import java.util.Optional;

public enum AutomaticCutType {

    SAME_DAY_CUT_1(true, true),
    SAME_DAY_CUT_2(true, false),
    SAME_DAY_CUT_3(true, false),
    FUTURE_DAY_CUT_1(false, true),
    FUTURE_DAY_CUT_2(false, false),
    FUTURE_DAY_CUT_3(false, false),
    MANUAL_CUSTODY_TRANSFER(null, true);

    private final Boolean sameDay;
    private final boolean firstCut;

    AutomaticCutType(Boolean sameDay, boolean firstCut) {
        this.sameDay = sameDay;
        this.firstCut = firstCut;
    }

    public boolean isFirstCut() {
        return firstCut;
    }

    public boolean isReprocessCut() {
        return !firstCut;
    }

    public boolean isSameDayCut() {
        return Boolean.TRUE.equals(sameDay);
    }

    public boolean isFutureDayCut() {
        return Boolean.FALSE.equals(sameDay);
    }

    public boolean isCompatibleWith(Boolean sameDaySettlement) {
        return sameDaySettlement != null && (sameDay == null || sameDay.equals(sameDaySettlement));
    }

    public static Optional<AutomaticCutType> from(String cutType) {
        return Arrays.stream(values())
                .filter(value -> value.name().equalsIgnoreCase(cutType))
                .findFirst();
    }
}

```

## src/main/java/com/nubo/packages/custody/cmd/api/models/enums/AutomaticPackagingNotificationRole.java

```java
package com.nubo.packages.custody.cmd.api.models.enums;

public enum AutomaticPackagingNotificationRole {

    CUSTODIAN,
    PARTICIPANT

}

```

## src/main/java/com/nubo/packages/custody/cmd/api/models/enums/NotificationMessageEnum.java

```java
package com.nubo.packages.custody.cmd.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum NotificationMessageEnum {

    PACKAGE_TRANSFER_SUCCESS(53L, "Traslado automatico de paquetes");

    private final Long id;
    private final String description;

}

```

## src/main/java/com/nubo/packages/custody/cmd/api/models/enums/NotificationModuleEnum.java

```java
package com.nubo.packages.custody.cmd.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum NotificationModuleEnum {

    DEFAULT("DEFAULT"),
    GESTION_CUSTODIA("GESTION_CUSTODIA");

    private final String value;

}

```

## src/main/java/com/nubo/packages/custody/cmd/api/models/enums/NotificationTypeEnum.java

```java
package com.nubo.packages.custody.cmd.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum NotificationTypeEnum {

    INFORMATIVE(123, "INFORMATIVE"),
    ERROR(124, "ERROR"),
    WARNING(125, "WARNING");

    private final Integer code;
    private final String description;

}

```

## src/main/java/com/nubo/packages/custody/cmd/api/models/enums/ProcessEnum.java

```java
package com.nubo.packages.custody.cmd.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum ProcessEnum {

    RESULT_CREATE("RESULTADO_CREAR"),
    RESULT_DELETE("RESULTADO_ELIMINAR"),
    MSG_CREATE("CREAR"),
    MSG_DELETE("ELIMINAR"),
    PACKAGE_REJECTION("RECHAZO_PAQ_CUSTODIO"),
    REJECTION_CODE_OTHER("7");

    private final String value;

}

```

## src/main/java/com/nubo/packages/custody/cmd/api/models/enums/PropertiesEnum.java

```java
package com.nubo.packages.custody.cmd.api.models.enums;

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

## src/main/java/com/nubo/packages/custody/cmd/api/models/enums/StatusEnum.java

```java
package com.nubo.packages.custody.cmd.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum StatusEnum {

    ASSIGNED(2L, "ASIGNADA", "ASIGNACION"),
    CANCELED(11L, "CANCELADA", "REGISTRO_OPERACION"),
    NEGOCIATED(13L, "NEGOCIADA", "REGISTRO_OPERACION"),
    ACCEPTED(15L, "ACEPTADA", "ASIGNACION"),
    NOT_STATUS(0L, "NO ESTADO", ""),
    CUSTODIAN_TRANSFERRED(1071L, "TRASLADADA", "CUSTODIO"),
    CUSTODIAN_PRE_MATCH(1072L, "PRE-MATCH", "CUSTODIO"),
    CUSTODIAN_ADMITTED(1073L, "ADMITIDA", "CUSTODIO"),
    CUSTODIAN_REJECTED(1074L, "RECHAZADA", "CUSTODIO"),
    CUSTODIAN_CREATED(1075L, "CREADA", "CUSTODIO");

    private final Long id;
    private final String description;
    private final String category;
}

```

## src/main/java/com/nubo/packages/custody/cmd/api/models/enums/VersionApiEnum.java

```java
package com.nubo.packages.custody.cmd.api.models.enums;

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

## src/main/java/com/nubo/packages/custody/cmd/api/repository/BundleSequenceNativeRepository.java

```java
package com.nubo.packages.custody.cmd.api.repository;

public interface BundleSequenceNativeRepository {

    Long getNextSequence(Long participantId, String user, String applic, String ip);

}




```

## src/main/java/com/nubo/packages/custody/cmd/api/repository/BundleSequenceRepository.java

```java
package com.nubo.packages.custody.cmd.api.repository;

import com.nubo.packages.custody.cmd.api.models.entity.BundleSequenceEntity;
import jakarta.persistence.LockModeType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Lock;

import java.util.Optional;

public interface BundleSequenceRepository extends JpaRepository<BundleSequenceEntity, Long> {

    @Lock(LockModeType.PESSIMISTIC_WRITE)
    Optional<BundleSequenceEntity> findById(Long id);
}

```

## src/main/java/com/nubo/packages/custody/cmd/api/repository/CustodianStatusHistoryRepository.java

```java
package com.nubo.packages.custody.cmd.api.repository;

import com.nubo.packages.custody.cmd.api.models.entity.CustodianStatusHistoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustodianStatusHistoryRepository extends JpaRepository<CustodianStatusHistoryEntity, Long> {
}

```

## src/main/java/com/nubo/packages/custody/cmd/api/repository/PackageCustodianHistoryNativeRepository.java

```java
package com.nubo.packages.custody.cmd.api.repository;

import java.util.List;

import com.nubo.packages.custody.cmd.api.models.entity.PackageCustodianHistoryEntity;

public interface PackageCustodianHistoryNativeRepository {

    void insertBatch(List<PackageCustodianHistoryEntity> histories);

}

```

## src/main/java/com/nubo/packages/custody/cmd/api/repository/PackageCustodianHistoryRepository.java

```java
package com.nubo.packages.custody.cmd.api.repository;
import com.nubo.packages.custody.cmd.api.models.entity.*;
import org.springframework.data.jpa.repository.JpaRepository;
public interface PackageCustodianHistoryRepository extends JpaRepository<PackageCustodianHistoryEntity, PackageCustodianHistoryId> {}

```

## src/main/java/com/nubo/packages/custody/cmd/api/repository/PackageCustodianRepository.java

```java
package com.nubo.packages.custody.cmd.api.repository;

import com.nubo.packages.custody.cmd.api.models.entity.PackageCustodianEntity;
import jakarta.persistence.LockModeType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.Optional;

public interface PackageCustodianRepository extends JpaRepository<PackageCustodianEntity, Long> {

    boolean existsByPackageCustodianId(Long packageCustodianId);

    @Lock(LockModeType.PESSIMISTIC_WRITE)
    @Query("SELECT p FROM PackageCustodianEntity p WHERE p.packageCustodianId = :packageCustodianId")
    Optional<PackageCustodianEntity> findByIdForAutomaticPackagingUpdate(
            @Param("packageCustodianId") Long packageCustodianId);

    @Query("""
            SELECT p
            FROM PackageCustodianEntity p
            WHERE p.packageCustodianId = :packageCustodianId
              AND p.marketId = :marketId
              AND p.packageDate = :packageDate
            """)
    Optional<PackageCustodianEntity> findByPackageCustodianIdAndMarketIdAndPackageDate(
            @Param("packageCustodianId") Long packageCustodianId,
            @Param("marketId") String marketId,
            @Param("packageDate") LocalDate packageDate);

    @Query("""
            SELECT p
            FROM PackageCustodianEntity p
            WHERE p.participantCode = :participantCode
              AND p.sequence = :sequence
              AND p.marketId = :marketId
              AND p.packageDate = :packageDate
            """)
    Optional<PackageCustodianEntity> findByParticipantCodeAndSequenceAndMarketIdAndPackageDate(
            @Param("participantCode") String participantCode,
            @Param("sequence") Long sequence,
            @Param("marketId") String marketId,
            @Param("packageDate") LocalDate packageDate);

    @Query("""
            SELECT p
            FROM PackageCustodianEntity p
            WHERE p.packageNumber = :packageNumber
              AND p.marketId = :marketId
              AND p.packageDate = :packageDate
            """)
    Optional<PackageCustodianEntity> findByPackageNumberAndMarketIdAndPackageDate(
            @Param("packageNumber") String packageNumber,
            @Param("marketId") String marketId,
            @Param("packageDate") LocalDate packageDate);

    @Query(value = """
            select pc."PACKAGE_CUSTODIAN_ID"
            from "NUANBODB"."PACKAGE_CUSTODIAN" pc
            where pc."PACKAGE_DATE" = :packageDate
              and pc."PACKAGE_STATUS_ID" = :packageStatusId
              and pc."MARKET_ID" = :marketId
              and pc."SIDE_ID" = :sideId
              and pc."CLEARING_DATE" = :clearingDate
              and pc."SECURITY_ID" = :securityId
              and pc."DEPOSITORY_ID" = :depositoryId
              and pc."TYPE_ID" = :typeId
              and pc."ISIN_NUMBER_ID" = :isinNumberId
              and pc."INVESTOR_ID" = :investorId
              and pc."INVESTOR_ACCOUNT_ID" = :investorAccountId
              and pc."PARTICIPANT_ID" = :participantId
              and pc."CUSTODIAN_ID" = :custodianId
              and pc."FIC_ADMINISTRATOR_ID" is not distinct from :ficAdministratorId
              and coalesce(trim(pc."REFERENCE_PACKAGE"), '') = coalesce(trim(:referencePackage), '')
            order by pc."PACKAGE_CUSTODIAN_ID"
            limit 1
            """, nativeQuery = true)
    Optional<Long> findCompatiblePackageCustodianId(
            @Param("packageDate") LocalDate packageDate,
            @Param("packageStatusId") Long packageStatusId,
            @Param("marketId") String marketId,
            @Param("sideId") String sideId,
            @Param("clearingDate") LocalDate clearingDate,
            @Param("securityId") Long securityId,
            @Param("depositoryId") String depositoryId,
            @Param("typeId") Long typeId,
            @Param("isinNumberId") Long isinNumberId,
            @Param("investorId") Long investorId,
            @Param("investorAccountId") Long investorAccountId,
            @Param("participantId") Long participantId,
            @Param("custodianId") Long custodianId,
            @Param("ficAdministratorId") Long ficAdministratorId,
            @Param("referencePackage") String referencePackage);
            
}

```

## src/main/java/com/nubo/packages/custody/cmd/api/repository/PackageDetailHistoryNativeRepository.java

```java
package com.nubo.packages.custody.cmd.api.repository;

import java.util.List;

import com.nubo.packages.custody.cmd.api.models.entity.PackageDetailHistoryEntity;

public interface PackageDetailHistoryNativeRepository {

    void insertBatch(List<PackageDetailHistoryEntity> histories);

}

```

## src/main/java/com/nubo/packages/custody/cmd/api/repository/PackageDetailHistoryRepository.java

```java
package com.nubo.packages.custody.cmd.api.repository;
import com.nubo.packages.custody.cmd.api.models.entity.*;
import org.springframework.data.jpa.repository.JpaRepository;
public interface PackageDetailHistoryRepository extends JpaRepository<PackageDetailHistoryEntity, PackageDetailHistoryId> {}

```

## src/main/java/com/nubo/packages/custody/cmd/api/repository/PackageDetailNativeRepository.java

```java
package com.nubo.packages.custody.cmd.api.repository;

import java.util.List;

import com.nubo.packages.custody.cmd.api.models.entity.PackageDetailEntity;

public interface PackageDetailNativeRepository {

    void insertBatch(List<PackageDetailEntity> details);

}

```

## src/main/java/com/nubo/packages/custody/cmd/api/repository/PackageDetailRepository.java

```java
package com.nubo.packages.custody.cmd.api.repository;
import com.nubo.packages.custody.cmd.api.models.entity.*;
import java.util.Collection;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
public interface PackageDetailRepository extends JpaRepository<PackageDetailEntity, PackageDetailId> {

    @Query("""
            select new com.nubo.packages.custody.cmd.api.models.dto.internal.ActiveDetailHeader(
                d.uniqueFractionId, d.id.packageCustodianId)
            from PackageDetailEntity d
            where d.uniqueFractionId in (:uniqueFractionIds)
              and coalesce(d.packageStatusId, 0) <> :rejectedPackageDetailStatusId
            """)
    List<com.nubo.packages.custody.cmd.api.models.dto.internal.ActiveDetailHeader> findActiveHeaderIdsByUniqueFractionIds(
            @Param("uniqueFractionIds") Collection<Long> uniqueFractionIds,
            @Param("rejectedPackageDetailStatusId") Long rejectedPackageDetailStatusId);
    boolean existsByUniqueFractionId(Long uniqueFractionId);

    boolean existsByUniqueFractionIdAndIdPackageCustodianId(Long uniqueFractionId, Long packageCustodianId);

    @Query("""
            select count(d) > 0
            from PackageDetailEntity d
            where d.uniqueFractionId = :uniqueFractionId
              and d.id.packageCustodianId = :packageCustodianId
              and coalesce(d.packageStatusId, 0) <> :rejectedPackageDetailStatusId
            """)
    boolean existsActiveUniqueFractionIdAndPackageCustodianId(
            @Param("uniqueFractionId") Long uniqueFractionId,
            @Param("packageCustodianId") Long packageCustodianId,
            @Param("rejectedPackageDetailStatusId") Long rejectedPackageDetailStatusId);

    @Query("""
            select count(d) > 0
            from PackageDetailEntity d
            where d.uniqueFractionId = :uniqueFractionId
              and d.id.packageCustodianId = :packageCustodianId
              and d.packageStatusId = :rejectedPackageDetailStatusId
            """)
    boolean existsRejectedUniqueFractionIdAndPackageCustodianId(
            @Param("uniqueFractionId") Long uniqueFractionId,
            @Param("packageCustodianId") Long packageCustodianId,
            @Param("rejectedPackageDetailStatusId") Long rejectedPackageDetailStatusId);

    @Query("""
            select count(d) > 0
            from PackageDetailEntity d
            where d.uniqueFractionId in (:uniqueFractionIds)
              and d.id.packageCustodianId = :packageCustodianId
              and d.packageStatusId = :rejectedPackageDetailStatusId
            """)
    boolean existsRejectedByPackageCustodianIdAndUniqueFractionIds(
            @Param("packageCustodianId") Long packageCustodianId,
            @Param("uniqueFractionIds") Collection<Long> uniqueFractionIds,
            @Param("rejectedPackageDetailStatusId") Long rejectedPackageDetailStatusId);

    long countByIdPackageCustodianId(Long packageCustodianId);

    @Query("""
            select d.id.packageCustodianId, count(d)
            from PackageDetailEntity d
            where d.id.packageCustodianId in (:packageCustodianIds)
            group by d.id.packageCustodianId
            """)
    List<Object[]> countByIdPackageCustodianIdIn(
            @Param("packageCustodianIds") Collection<Long> packageCustodianIds);

    @Query("""
            select count(d) > 0
            from PackageDetailEntity d
            where d.uniqueFractionId = :uniqueFractionId
              and d.id.packageCustodianId not in (:excludedPackageCustodianIds)
            """)
    boolean existsByUniqueFractionIdOutsidePackageCustodianIds(
            @Param("uniqueFractionId") Long uniqueFractionId,
            @Param("excludedPackageCustodianIds") List<Long> excludedPackageCustodianIds);

    @Query("""
            select count(d) > 0
            from PackageDetailEntity d
            where d.uniqueFractionId = :uniqueFractionId
              and d.id.packageCustodianId not in (:excludedPackageCustodianIds)
              and coalesce(d.packageStatusId, 0) <> :rejectedPackageDetailStatusId
            """)
    boolean existsActiveUniqueFractionIdOutsidePackageCustodianIds(
            @Param("uniqueFractionId") Long uniqueFractionId,
            @Param("excludedPackageCustodianIds") List<Long> excludedPackageCustodianIds,
            @Param("rejectedPackageDetailStatusId") Long rejectedPackageDetailStatusId);

    @Query("""
            select d
            from PackageDetailEntity d
            where d.uniqueFractionId in (:uniqueFractionIds)
              and coalesce(d.packageStatusId, 0) <> :rejectedPackageDetailStatusId
            """)
    List<PackageDetailEntity> findActiveByUniqueFractionIds(
            @Param("uniqueFractionIds") Collection<Long> uniqueFractionIds,
            @Param("rejectedPackageDetailStatusId") Long rejectedPackageDetailStatusId);

    @Query("""
            select distinct d.id.packageCustodianId
            from PackageDetailEntity d
            where d.uniqueFractionId in (:uniqueFractionIds)
            """)
    List<Long> findPackageCustodianIdsByUniqueFractionIds(
            @Param("uniqueFractionIds") List<Long> uniqueFractionIds);

    @Modifying
    @Query("""
            delete from PackageDetailEntity d
            where d.id.packageCustodianId in (:packageCustodianIds)
            """)
    int deleteByPackageCustodianIds(@Param("packageCustodianIds") List<Long> packageCustodianIds);
}

```

## src/main/java/com/nubo/packages/custody/cmd/api/repository/ParticipantRepository.java

```java
package com.nubo.packages.custody.cmd.api.repository;

import com.nubo.packages.custody.cmd.api.models.entity.ParticipantEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ParticipantRepository extends JpaRepository<ParticipantEntity, Long> {

    Optional<ParticipantEntity> findByCode(String code);

}

```

## src/main/java/com/nubo/packages/custody/cmd/api/repository/RejectionReasonRepository.java

```java
package com.nubo.packages.custody.cmd.api.repository;

import com.nubo.packages.custody.cmd.api.models.entity.RejectionReasonEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RejectionReasonRepository extends JpaRepository<RejectionReasonEntity, Long> {

    Optional<RejectionReasonEntity> findByErrorIdAndCategory(Long errorId, String category);

}

```

## src/main/java/com/nubo/packages/custody/cmd/api/repository/SettlementNativeRepository.java

```java
package com.nubo.packages.custody.cmd.api.repository;

import java.time.OffsetDateTime;
import java.util.List;

import com.nubo.packages.custody.cmd.api.models.entity.PackageDetailEntity;

public interface SettlementNativeRepository {

    int updateCustodianStatusBatch(List<PackageDetailEntity> details, Long temporaryStatusId,
            String user, String applic, OffsetDateTime auditDate, String ip);

}

```

## src/main/java/com/nubo/packages/custody/cmd/api/repository/SettlementRepository.java

```java
package com.nubo.packages.custody.cmd.api.repository;

import com.nubo.packages.custody.cmd.api.models.entity.SettlementEntity;
import com.nubo.packages.custody.cmd.api.models.entity.SettlementId;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SettlementRepository extends JpaRepository<SettlementEntity, SettlementId> {
}

```

## src/main/java/com/nubo/packages/custody/cmd/api/repository/TradeRepository.java

```java
package com.nubo.packages.custody.cmd.api.repository;

import com.nubo.packages.custody.cmd.api.models.entity.TradeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Optional;

public interface TradeRepository extends JpaRepository<TradeEntity, Long> {

    Optional<TradeEntity> findByMatchIdAndMatchDate(BigDecimal matchId, LocalDate matchDate);

}

```

## src/main/java/com/nubo/packages/custody/cmd/api/repository/UserNotificationRepository.java

```java
package com.nubo.packages.custody.cmd.api.repository;

import java.util.List;

public interface UserNotificationRepository {

    List<Long> findUserIdsByParticipantIds(List<Long> participantIds);

}

```

## src/main/java/com/nubo/packages/custody/cmd/api/repository/impl/BundleSequenceNativeRepositoryImpl.java

```java
package com.nubo.packages.custody.cmd.api.repository.impl;

import com.nubo.packages.custody.cmd.api.exception.ServiceException;
import com.nubo.packages.custody.cmd.api.exception.error.ErrorCode;
import com.nubo.packages.custody.cmd.api.repository.BundleSequenceNativeRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.Query;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Repository;

import java.sql.Timestamp;
import java.time.LocalDateTime;

@Repository
@Slf4j
public class BundleSequenceNativeRepositoryImpl implements BundleSequenceNativeRepository {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public Long getNextSequence(Long participantId, String user, String applic, String ip) {
        try {
            Query query = entityManager.createNativeQuery("""
                    insert into "NUANBODB"."BUNDLE_SEQUENCE"
                        ("PARTICIPANT_ID", "SEQUENCE_NUMBER", "LAST_MODIFY_USER",
                         "LAST_MODIFY_APPLIC", "LAST_MODIFY_DATE", "LAST_MODIFY_IP")
                    values
                        (:participantId, 1, :user, :applic, :modifyDate, :ip)
                    on conflict ("PARTICIPANT_ID")
                    do update set
                        "SEQUENCE_NUMBER" = coalesce("BUNDLE_SEQUENCE"."SEQUENCE_NUMBER", 0) + 1,
                        "LAST_MODIFY_USER" = excluded."LAST_MODIFY_USER",
                        "LAST_MODIFY_APPLIC" = excluded."LAST_MODIFY_APPLIC",
                        "LAST_MODIFY_DATE" = excluded."LAST_MODIFY_DATE",
                        "LAST_MODIFY_IP" = excluded."LAST_MODIFY_IP"
                    returning "SEQUENCE_NUMBER"
                    """);
            query.setParameter("participantId", participantId);
            query.setParameter("user", user);
            query.setParameter("applic", applic);
            query.setParameter("modifyDate", Timestamp.valueOf(LocalDateTime.now()));
            query.setParameter("ip", ip);
            Number sequence = (Number) query.getSingleResult();
            return sequence.longValue();
        } catch (RuntimeException ex) {
            log.error("Error getting next bundle sequence, participantId={}", participantId, ex);
            throw new ServiceException(ErrorCode.BUNDLE_SEQUENCE_UPDATE_FAILED,
                    HttpStatus.INTERNAL_SERVER_ERROR, ex);
        }
    }

}

```

## src/main/java/com/nubo/packages/custody/cmd/api/repository/impl/PackageCustodianHistoryNativeRepositoryImpl.java

```java
package com.nubo.packages.custody.cmd.api.repository.impl;

import java.util.List;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import com.nubo.packages.custody.cmd.api.exception.ServiceException;
import com.nubo.packages.custody.cmd.api.exception.error.ErrorCode;
import com.nubo.packages.custody.cmd.api.models.entity.PackageCustodianHistoryEntity;
import com.nubo.packages.custody.cmd.api.repository.PackageCustodianHistoryNativeRepository;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class PackageCustodianHistoryNativeRepositoryImpl implements PackageCustodianHistoryNativeRepository {

    private final NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    @Override
    public void insertBatch(List<PackageCustodianHistoryEntity> histories) {
        String sql = """
                insert into "NUANBODB"."PACKAGE_CUSTODIAN_HISTORY" (
                    "PACKAGE_CUSTODIAN_ID",
                    "MARKET_ID",
                    "PACKAGE_DATE",
                    "EVENT_TIME",
                    "PARTICIPANT_CODE",
                    "SEQUENCE",
                    "CODE_SCB",
                    "PACKAGE_NUMBER",
                    "SIDE_ID",
                    "INVESTOR_ID",
                    "GENERATING_PARTICIPANT_ID",
                    "INVESTOR_ACCOUNT_ID",
                    "CUSTODIAN_STATUS_ID",
                    "CUSTODIAN_ID",
                    "FIC_ADMINISTRATOR_ID",
                    "REJECTION_REASON_ID",
                    "TOTAL_FRACTION_QUANTITY",
                    "TOTAL_FRACTION_VOLUME",
                    "TOTAL_NET_AMOUNT",
                    "TOTAL_COMMISSION_AMOUNT",
                    "TOTAL_VAL_TAX_AMOUNT",
                    "AVERAGE_PRICE",
                    "CLEARING_DATE",
                    "RETURN_CLEARING_DATE",
                    "AVERAGE_FRACTION_VOLUME",
                    "AVERAGE_RATE",
                    "RETURN_NET_AMOUNT",
                    "LAST_MODIFY_USER",
                    "LAST_MODIFY_APPLIC",
                    "LAST_MODIFY_DATE",
                    "LAST_MODIFY_IP"
                ) values (
                    :packageCustodianId,
                    :marketId,
                    :packageDate,
                    :eventTime,
                    :participantCode,
                    :sequence,
                    :codeSCB,
                    :packageNumber,
                    :sideId,
                    :investorId,
                    :generatingParticipantId,
                    :investorAccountId,
                    :custodianStatusId,
                    :custodianId,
                    :ficAdministratorId,
                    :rejectionReasonId,
                    :totalFractionQuantity,
                    :totalFractionVolume,
                    :totalNetAmount,
                    :totalCommissionAmount,
                    :totalValTaxAmount,
                    :averagePrice,
                    :clearingDate,
                    :returnClearingDate,
                    :averageFractionVolume,
                    :averageRate,
                    :returnNetAmount,
                    :lastModifyUser,
                    :lastModifyApplic,
                    :lastModifyDate,
                    :lastModifyIp
                )
                """;
        MapSqlParameterSource[] batchParams = histories.stream()
                .map(history -> new MapSqlParameterSource()
                        .addValue("packageCustodianId", history.getId().getPackageCustodianId())
                        .addValue("marketId", history.getId().getMarketId())
                        .addValue("packageDate", history.getId().getPackageDate())
                        .addValue("eventTime", history.getId().getEventTime())
                        .addValue("participantCode", history.getParticipantCode())
                        .addValue("sequence", history.getSequence())
                        .addValue("codeSCB", history.getCodeSCB())
                        .addValue("packageNumber", history.getPackageNumber())
                        .addValue("sideId", history.getSideId())
                        .addValue("investorId", history.getInvestorId())
                        .addValue("generatingParticipantId", history.getGeneratingParticipantId())
                        .addValue("investorAccountId", history.getInvestorAccountId())
                        .addValue("custodianStatusId", history.getCustodianStatusId())
                        .addValue("custodianId", history.getCustodianId())
                        .addValue("ficAdministratorId", history.getFicAdministratorId())
                        .addValue("rejectionReasonId", history.getRejectionReasonId())
                        .addValue("totalFractionQuantity", history.getTotalFractionQuantity())
                        .addValue("totalFractionVolume", history.getTotalFractionVolume())
                        .addValue("totalNetAmount", history.getTotalNetAmount())
                        .addValue("totalCommissionAmount", history.getTotalCommissionAmount())
                        .addValue("totalValTaxAmount", history.getTotalValTaxAmount())
                        .addValue("averagePrice", history.getAveragePrice())
                        .addValue("clearingDate", history.getClearingDate())
                        .addValue("returnClearingDate", history.getReturnClearingDate())
                        .addValue("averageFractionVolume", history.getAverageFractionVolume())
                        .addValue("averageRate", history.getAverageRate())
                        .addValue("returnNetAmount", history.getReturnNetAmount())
                        .addValue("lastModifyUser", history.getLastModifyUser())
                        .addValue("lastModifyApplic", history.getLastModifyApplic())
                        .addValue("lastModifyDate", history.getLastModifyDate())
                        .addValue("lastModifyIp", history.getLastModifyIp()))
                .toArray(MapSqlParameterSource[]::new);
        try {
            namedParameterJdbcTemplate.batchUpdate(sql, batchParams);
        } catch (DataIntegrityViolationException ex) {
            throw new ServiceException(ErrorCode.PACKAGE_CUSTODIAN_HISTORY_CREATION_FAILED,
                    HttpStatus.CONFLICT, ex);
        }
    }

}

```

## src/main/java/com/nubo/packages/custody/cmd/api/repository/impl/PackageDetailHistoryNativeRepositoryImpl.java

```java
package com.nubo.packages.custody.cmd.api.repository.impl;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import com.nubo.packages.custody.cmd.api.exception.ServiceException;
import com.nubo.packages.custody.cmd.api.exception.error.ErrorCode;
import com.nubo.packages.custody.cmd.api.models.entity.PackageDetailHistoryEntity;
import com.nubo.packages.custody.cmd.api.repository.PackageDetailHistoryNativeRepository;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class PackageDetailHistoryNativeRepositoryImpl implements PackageDetailHistoryNativeRepository {

    private final NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    @Override
    public void insertBatch(List<PackageDetailHistoryEntity> histories) {
        String sql = """
                insert into "NUANBODB"."PACKAGE_DETAIL_HISTORY" (
                    "PACKAGE_CUSTODIAN_ID",
                    "MARKET_ID",
                    "PACKAGE_DATE",
                    "STATUS_TIME",
                    "PARTICIPANT_CODE",
                    "SEQUENCE",
                    "PACKAGE_NUMBER",
                    "PACKAGE_EVENT_ID",
                    "TRADE_ID",
                    "SIDE_ID",
                    "FRACTION",
                    "UNIQUE_FRACTION_ID",
                    "MATCH_DATE",
                    "CLEARING_DATE",
                    "RETURN_CLEARING_DATE",
                    "FRACTION_QUANTITY",
                    "PRICE",
                    "RATE",
                    "INDICATE_EXIT_RETURN",
                    "CUSTODIAN_ID",
                    "PARTICIPANT_ID",
                    "LAST_MODIFY_USER",
                    "LAST_MODIFY_APPLIC",
                    "LAST_MODIFY_DATE",
                    "LAST_MODIFY_IP"
                ) values (
                    :packageCustodianId,
                    :marketId,
                    :packageDate,
                    :statusTime,
                    :participantCode,
                    :sequence,
                    :packageNumber,
                    :packageEventId,
                    :tradeId,
                    :sideId,
                    :fraction,
                    :uniqueFractionId,
                    :matchDate,
                    :clearingDate,
                    :returnClearingDate,
                    :fractionQuantity,
                    :price,
                    :rate,
                    :indicateExitReturn,
                    :custodianId,
                    :participantId,
                    :lastModifyUser,
                    :lastModifyApplic,
                    :lastModifyDate,
                    :lastModifyIp
                )
                """;
        MapSqlParameterSource[] batchParams = histories.stream()
                .map(history -> new MapSqlParameterSource()
                        .addValue("packageCustodianId", history.getId().getPackageCustodianId())
                        .addValue("marketId", history.getId().getMarketId())
                        .addValue("packageDate", history.getId().getPackageDate())
                        .addValue("statusTime", history.getId().getStatusTime())
                        .addValue("participantCode", history.getParticipantCode())
                        .addValue("sequence", history.getSequence())
                        .addValue("packageNumber", history.getPackageNumber())
                        .addValue("packageEventId", history.getPackageEventId())
                        .addValue("tradeId", history.getTradeId())
                        .addValue("sideId", history.getSideId())
                        .addValue("fraction", history.getFraction())
                        .addValue("uniqueFractionId", history.getUniqueFractionId())
                        .addValue("matchDate", history.getMatchDate())
                        .addValue("clearingDate", history.getClearingDate())
                        .addValue("returnClearingDate", history.getReturnClearingDate())
                        .addValue("fractionQuantity", history.getFractionQuantity())
                        .addValue("price", history.getPrice())
                        .addValue("rate", history.getRate())
                        .addValue("indicateExitReturn", history.getIndicateExitReturn())
                        .addValue("custodianId", history.getCustodianId())
                        .addValue("participantId", history.getParticipantId())
                        .addValue("lastModifyUser", history.getLastModifyUser())
                        .addValue("lastModifyApplic", history.getLastModifyApplic())
                        .addValue("lastModifyDate", history.getLastModifyDate())
                        .addValue("lastModifyIp", history.getLastModifyIp()))
                .toArray(MapSqlParameterSource[]::new);
        try {
            namedParameterJdbcTemplate.batchUpdate(sql, batchParams);
        } catch (RuntimeException ex) {
            throw new ServiceException(ErrorCode.PACKAGE_DETAIL_HISTORY_CREATION_FAILED,
                    HttpStatus.CONFLICT, ex);
        }
    }

}

```

## src/main/java/com/nubo/packages/custody/cmd/api/repository/impl/PackageDetailNativeRepositoryImpl.java

```java
package com.nubo.packages.custody.cmd.api.repository.impl;

import java.util.List;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import com.nubo.packages.custody.cmd.api.exception.ServiceException;
import com.nubo.packages.custody.cmd.api.exception.error.ErrorCode;
import com.nubo.packages.custody.cmd.api.models.entity.PackageDetailEntity;
import com.nubo.packages.custody.cmd.api.repository.PackageDetailNativeRepository;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class PackageDetailNativeRepositoryImpl implements PackageDetailNativeRepository {

    private final NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    @Override
    public void insertBatch(List<PackageDetailEntity> details) {
        String sql = """
                insert into "NUANBODB"."PACKAGE_DETAIL" (
                    "PACKAGE_CUSTODIAN_ID",
                    "PACKAGE_DATE",
                    "PARTICIPANT_CODE",
                    "SEQUENCE",
                    "MARKET_ID",
                    "PACKAGE_NUMBER",
                    "TRADE_ID",
                    "SIDE_ID",
                    "FRACTION",
                    "MATCH_DATE",
                    "UNIQUE_FRACTION_ID",
                    "INVESTOR_ID",
                    "CUSTODIAN_ID",
                    "PARTICIPANT_ID",
                    "LAST_MODIFY_USER",
                    "LAST_MODIFY_APPLIC",
                    "LAST_MODIFY_DATE",
                    "LAST_MODIFY_IP",
                    "PACKAGE_STATUS_ID"
                ) values (
                    :packageCustodianId,
                    :packageDate,
                    :participantCode,
                    :sequence,
                    :marketId,
                    :packageNumber,
                    :tradeId,
                    :sideId,
                    :fraction,
                    :matchDate,
                    :uniqueFractionId,
                    :investorId,
                    :custodianId,
                    :participantId,
                    :lastModifyUser,
                    :lastModifyApplic,
                    :lastModifyDate,
                    :lastModifyIp,
                    :packageStatusId
                )
                """;
        MapSqlParameterSource[] batchParams = details.stream()
                .map(detail -> new MapSqlParameterSource()
                        .addValue("packageCustodianId", detail.getId().getPackageCustodianId())
                        .addValue("packageDate", detail.getId().getPackageDate())
                        .addValue("participantCode", detail.getParticipantCode())
                        .addValue("sequence", detail.getSequence())
                        .addValue("marketId", detail.getId().getMarketId())
                        .addValue("packageNumber", detail.getPackageNumber())
                        .addValue("tradeId", detail.getId().getTradeId())
                        .addValue("sideId", detail.getId().getSideId())
                        .addValue("fraction", detail.getId().getFraction())
                        .addValue("matchDate", detail.getMatchDate())
                        .addValue("uniqueFractionId", detail.getUniqueFractionId())
                        .addValue("investorId", detail.getInvestorId())
                        .addValue("custodianId", detail.getCustodianId())
                        .addValue("participantId", detail.getParticipantId())
                        .addValue("lastModifyUser", detail.getLastModifyUser())
                        .addValue("lastModifyApplic", detail.getLastModifyApplic())
                        .addValue("lastModifyDate", detail.getLastModifyDate())
                        .addValue("lastModifyIp", detail.getLastModifyIp())
                        .addValue("packageStatusId", detail.getPackageStatusId()))
                .toArray(MapSqlParameterSource[]::new);
        try {
            namedParameterJdbcTemplate.batchUpdate(sql, batchParams);
        } catch (DataIntegrityViolationException ex) {
            throw new ServiceException(ErrorCode.PACKAGE_DETAIL_CREATION_FAILED, HttpStatus.CONFLICT, ex);
        }
    }

}

```

## src/main/java/com/nubo/packages/custody/cmd/api/repository/impl/SettlementNativeRepositoryImpl.java

```java
package com.nubo.packages.custody.cmd.api.repository.impl;

import java.time.OffsetDateTime;
import java.time.LocalDate;
import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.nubo.packages.custody.cmd.api.models.entity.PackageDetailEntity;
import com.nubo.packages.custody.cmd.api.repository.SettlementNativeRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Repository
@Slf4j
@RequiredArgsConstructor
public class SettlementNativeRepositoryImpl implements SettlementNativeRepository {

    private static final int UPDATE_CHUNK_SIZE = 500;

    private final NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    @Override
    @Transactional(propagation = Propagation.MANDATORY)
    public int updateCustodianStatusBatch(List<PackageDetailEntity> details, Long statusId,
            String user, String applic, OffsetDateTime auditDate, String ip) {
        if (details == null || details.isEmpty()) {
            return 0;
        }
        if (statusId == null) {
            throw inconsistent("Final custodian status is required");
        }
        Set<SettlementKey> uniqueKeys = new LinkedHashSet<>();
        for (PackageDetailEntity detail : details) {
            SettlementKey key = keyOf(detail);
            if (!uniqueKeys.add(key)) {
                throw inconsistent("Duplicate settlement identity in persistence batch: " + key);
            }
        }
        List<PackageDetailEntity> validDetails = details;

        int totalUpdated = 0;
        for (int offset = 0; offset < validDetails.size(); offset += UPDATE_CHUNK_SIZE) {
            int end = Math.min(offset + UPDATE_CHUNK_SIZE, validDetails.size());
            List<PackageDetailEntity> chunk = validDetails.subList(offset, end);
            MapSqlParameterSource params = new MapSqlParameterSource()
                    .addValue("statusId", statusId)
                    .addValue("user", user)
                    .addValue("applic", applic)
                    .addValue("date", auditDate)
                    .addValue("ip", ip);

            StringBuilder values = new StringBuilder();
            for (int index = 0; index < chunk.size(); index++) {
                if (index > 0) {
                    values.append(", ");
                }
                PackageDetailEntity detail = chunk.get(index);
                String suffix = String.valueOf(index);
                values.append("(:tradeId").append(suffix)
                        .append(", :sideId").append(suffix)
                        .append(", :fraction").append(suffix)
                        .append(", :uniqueFractionId").append(suffix)
                        .append(", cast(:marketId").append(suffix).append(" as varchar(2))")
                        .append(", cast(:matchDate").append(suffix).append(" as date))");
                params.addValue("tradeId" + suffix, detail.getId().getTradeId())
                        .addValue("sideId" + suffix, detail.getId().getSideId())
                        .addValue("fraction" + suffix, detail.getId().getFraction())
                        .addValue("uniqueFractionId" + suffix, detail.getUniqueFractionId())
                        .addValue("marketId" + suffix, detail.getId().getMarketId())
                        .addValue("matchDate" + suffix, detail.getMatchDate());
            }

            // The UPDATE count alone cannot distinguish an already-final row from a missing one.
            // Lock the complete keys first so the classification remains stable until transaction commit.
            String lockedRowsSql = """
                    select settlement."TRADE_ID", settlement."SIDE_ID", settlement."FRACTION",
                           settlement."UNIQUE_FRACTION_ID", settlement."MARKET_ID", settlement."MATCH_DATE",
                           settlement."CUSTODIAN_STATUS_ID"
                      from "NUANBODB"."SETTLEMENT" settlement
                      join (values %s) expected(
                          "TRADE_ID", "SIDE_ID", "FRACTION", "UNIQUE_FRACTION_ID", "MARKET_ID", "MATCH_DATE")
                        on settlement."TRADE_ID" = expected."TRADE_ID"
                       and settlement."SIDE_ID" = expected."SIDE_ID"
                       and settlement."FRACTION" = expected."FRACTION"
                       and settlement."UNIQUE_FRACTION_ID" = expected."UNIQUE_FRACTION_ID"
                       and settlement."MARKET_ID" = expected."MARKET_ID"
                       and settlement."MATCH_DATE" = expected."MATCH_DATE"
                     order by settlement."MARKET_ID", settlement."MATCH_DATE", settlement."TRADE_ID",
                              settlement."SIDE_ID", settlement."FRACTION", settlement."UNIQUE_FRACTION_ID"
                     for update of settlement
                    """.formatted(values);
            Set<SettlementKey> expectedKeys = new LinkedHashSet<>();
            chunk.forEach(detail -> expectedKeys.add(keyOf(detail)));
            Map<SettlementKey, Long> before = checkedRows(
                    namedParameterJdbcTemplate.queryForList(lockedRowsSql, params), expectedKeys);
            int expectedUpdates = (int) before.values().stream()
                    .filter(current -> !Objects.equals(current, statusId)).count();
            if (expectedUpdates == 0) {
                continue; // A valid reproceso: every existing row is already in the final status.
            }
            String sql = """
                    update "NUANBODB"."SETTLEMENT" settlement
                       set "CUSTODIAN_STATUS_ID" = :statusId,
                           "LAST_MODIFY_USER" = :user,
                           "LAST_MODIFY_APPLIC" = :applic,
                           "LAST_MODIFY_DATE" = :date,
                           "LAST_MODIFY_IP" = :ip
                      from (values %s) values_to_update(
                          "TRADE_ID", "SIDE_ID", "FRACTION", "UNIQUE_FRACTION_ID", "MARKET_ID", "MATCH_DATE")
                     where settlement."TRADE_ID" = values_to_update."TRADE_ID"
                       and settlement."SIDE_ID" = values_to_update."SIDE_ID"
                       and settlement."FRACTION" = values_to_update."FRACTION"
                       and settlement."UNIQUE_FRACTION_ID" = values_to_update."UNIQUE_FRACTION_ID"
                       and settlement."MARKET_ID" = values_to_update."MARKET_ID"
                       and settlement."MATCH_DATE" = values_to_update."MATCH_DATE"
                       and settlement."CUSTODIAN_STATUS_ID" is distinct from :statusId
                    """.formatted(values);
            int updated = namedParameterJdbcTemplate.update(sql, params);
            if (updated != expectedUpdates) {
                throw inconsistent("Settlement UPDATE affected " + updated + " rows; expected " + expectedUpdates);
            }
            Map<SettlementKey, Long> after = checkedRows(
                    namedParameterJdbcTemplate.queryForList(lockedRowsSql, params), expectedKeys);
            if (after.values().stream().anyMatch(current -> !Objects.equals(current, statusId))) {
                throw inconsistent("Settlement final status was not preserved after UPDATE");
            }
            totalUpdated += updated;
        }

        log.info("CMD automatic settlement transferred status update completed, details={}, updatedRows={}, chunks={}",
                validDetails.size(), totalUpdated, (validDetails.size() + UPDATE_CHUNK_SIZE - 1) / UPDATE_CHUNK_SIZE);
        return totalUpdated;
    }

    private Map<SettlementKey, Long> checkedRows(List<Map<String, Object>> rows, Set<SettlementKey> expected) {
        Map<SettlementKey, Long> found = new HashMap<>();
        for (Map<String, Object> row : rows) {
            Object rawDate = row.get("MATCH_DATE");
            LocalDate date = rawDate instanceof java.sql.Date sqlDate ? sqlDate.toLocalDate()
                    : rawDate instanceof LocalDate localDate ? localDate : null;
            SettlementKey key = new SettlementKey(number(row.get("TRADE_ID")), (String) row.get("SIDE_ID"),
                    number(row.get("FRACTION")), number(row.get("UNIQUE_FRACTION_ID")),
                    (String) row.get("MARKET_ID"), date);
            if (!expected.contains(key) || found.containsKey(key)) {
                throw inconsistent("Unexpected or duplicate stored settlement identity: " + key);
            }
            found.put(key, number(row.get("CUSTODIAN_STATUS_ID")));
        }
        if (found.size() != expected.size()) {
            throw inconsistent("Missing settlement identities: found " + found.size() + "; expected " + expected.size());
        }
        return found;
    }

    private SettlementKey keyOf(PackageDetailEntity detail) {
        if (detail == null || detail.getId() == null || detail.getId().getTradeId() == null
                || detail.getId().getSideId() == null || detail.getId().getFraction() == null
                || detail.getUniqueFractionId() == null || detail.getId().getMarketId() == null
                || detail.getMatchDate() == null) {
            throw inconsistent("Complete settlement identity is required");
        }
        return new SettlementKey(detail.getId().getTradeId(), detail.getId().getSideId(),
                detail.getId().getFraction(), detail.getUniqueFractionId(), detail.getId().getMarketId(),
                detail.getMatchDate());
    }

    private Long number(Object value) {
        return value == null ? null : ((Number) value).longValue();
    }

    private DataIntegrityViolationException inconsistent(String message) {
        return new DataIntegrityViolationException(message);
    }

    private record SettlementKey(Long tradeId, String sideId, Long fraction, Long uniqueFractionId,
            String marketId, LocalDate matchDate) { }
}

```

## src/main/java/com/nubo/packages/custody/cmd/api/repository/impl/UserNotificationRepositoryImpl.java

```java
package com.nubo.packages.custody.cmd.api.repository.impl;

import com.nubo.packages.custody.cmd.api.repository.UserNotificationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.util.CollectionUtils;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class UserNotificationRepositoryImpl implements UserNotificationRepository {

    private final NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    @Override
    public List<Long> findUserIdsByParticipantIds(List<Long> participantIds) {
        if (CollectionUtils.isEmpty(participantIds)) {
            return List.of();
        }
        String sql = """
                select distinct u."USER_NUBO_ID"
                  from "NUANBODB"."USER_NUBO" u
                 where u."PARTICIPANT_ID" in (:participantIds)
                   and u."USER_NUBO_ID" is not null
                """;
        MapSqlParameterSource params = new MapSqlParameterSource()
                .addValue("participantIds", participantIds);
        return namedParameterJdbcTemplate.queryForList(sql, params, Long.class);
    }

}

```

## src/main/java/com/nubo/packages/custody/cmd/api/service/AllocationInstructionService.java

```java
package com.nubo.packages.custody.cmd.api.service;

import com.nubo.packages.custody.cmd.api.models.dto.request.AllocationInstructionCrudRequestDto;

public interface AllocationInstructionService {

    void processAllocationInstruction(AllocationInstructionCrudRequestDto request);

}

```

## src/main/java/com/nubo/packages/custody/cmd/api/service/AutomaticPackagingNotificationService.java

```java
package com.nubo.packages.custody.cmd.api.service;


import com.nubo.packages.custody.cmd.api.models.dto.request.PackageCustodianAutomaticInDto;

public interface AutomaticPackagingNotificationService {

    void notifySuccessfulPackaging(PackageCustodianAutomaticInDto request);

}

```

## src/main/java/com/nubo/packages/custody/cmd/api/service/KafkaNuboProducer.java

```java
package com.nubo.packages.custody.cmd.api.service;

import com.nubo.packages.custody.cmd.api.models.dto.response.AllocationInstructionAckOutDto;

public interface KafkaNuboProducer {

    void sendMessage(AllocationInstructionAckOutDto response);

    void sendMessageNotification(String message);

}

```

## src/main/java/com/nubo/packages/custody/cmd/api/service/NotificationService.java

```java
package com.nubo.packages.custody.cmd.api.service;

import tools.jackson.databind.node.ObjectNode;
import com.nubo.packages.custody.cmd.api.models.enums.NotificationMessageEnum;
import com.nubo.packages.custody.cmd.api.models.enums.NotificationTypeEnum;

public interface NotificationService {

    void sendNotification(NotificationTypeEnum notificationType, NotificationMessageEnum notificationMessage,
            String message, Long packageCount, Long participantId, ObjectNode metadata);

}

```

## src/main/java/com/nubo/packages/custody/cmd/api/service/PackageCustodianService.java

```java
package com.nubo.packages.custody.cmd.api.service;

import com.nubo.packages.custody.cmd.api.models.dto.request.AllocationInstructionCrudRequestDto;
import com.nubo.packages.custody.cmd.api.models.dto.request.PackageCustodianInDto;
import com.nubo.packages.custody.cmd.api.models.dto.request.PackageCustodianAutomaticInDto;
import com.nubo.packages.custody.cmd.api.models.dto.request.PackageCustodianManualInDto;
import com.nubo.packages.custody.cmd.api.models.dto.response.AllocationInstructionAckOutDto;
import com.nubo.packages.custody.cmd.api.models.dto.response.PackageCustodianOutDto;
import com.nubo.packages.custody.cmd.api.models.dto.response.PackageCustodianAutomaticOutDto;
import com.nubo.packages.custody.cmd.api.models.dto.response.PackageCustodianManualOutDto;
import com.nubo.packages.custody.cmd.api.models.entity.ParticipantEntity;
import com.nubo.packages.custody.cmd.api.models.entity.SettlementEntity;
import com.nubo.packages.custody.cmd.api.models.entity.TradeEntity;

public interface PackageCustodianService {

    AllocationInstructionAckOutDto executeCreate(ParticipantEntity participant,
            TradeEntity trade,
            SettlementEntity settlement,
            AllocationInstructionCrudRequestDto.AllocationInstruction ai,
            int fraction,
            String senderSubID);

    AllocationInstructionAckOutDto executeDelete(
            TradeEntity trade,
            SettlementEntity settlement,
            AllocationInstructionCrudRequestDto.AllocationInstruction ai,
            int fraction,
            String senderSubID);

    PackageCustodianOutDto createPackageCustodian(PackageCustodianInDto packageCustodianInDto);

    PackageCustodianAutomaticOutDto createAutomaticPackageCustodians(PackageCustodianAutomaticInDto request);

    PackageCustodianManualOutDto createManualPackageCustodian(PackageCustodianManualInDto request);
    
}

```

## src/main/java/com/nubo/packages/custody/cmd/api/service/impl/AllocationInstructionServiceImpl.java

```java
package com.nubo.packages.custody.cmd.api.service.impl;

import com.nubo.packages.custody.cmd.api.application.util.ApplicationUtils;
import com.nubo.packages.custody.cmd.api.exception.ServiceException;
import com.nubo.packages.custody.cmd.api.exception.error.ErrorCode;
import com.nubo.packages.custody.cmd.api.models.dto.request.AllocationInstructionCrudRequestDto;
import com.nubo.packages.custody.cmd.api.models.dto.response.AllocationInstructionAckOutDto;
import com.nubo.packages.custody.cmd.api.models.entity.ParticipantEntity;
import com.nubo.packages.custody.cmd.api.models.entity.RejectionReasonEntity;
import com.nubo.packages.custody.cmd.api.models.entity.SettlementEntity;
import com.nubo.packages.custody.cmd.api.models.entity.SettlementId;
import com.nubo.packages.custody.cmd.api.models.entity.TradeEntity;
import com.nubo.packages.custody.cmd.api.models.enums.ProcessEnum;
import com.nubo.packages.custody.cmd.api.repository.ParticipantRepository;
import com.nubo.packages.custody.cmd.api.repository.RejectionReasonRepository;
import com.nubo.packages.custody.cmd.api.repository.SettlementRepository;
import com.nubo.packages.custody.cmd.api.repository.TradeRepository;
import com.nubo.packages.custody.cmd.api.service.AllocationInstructionService;
import com.nubo.packages.custody.cmd.api.service.KafkaNuboProducer;
import com.nubo.packages.custody.cmd.api.service.PackageCustodianService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
@Slf4j
@RequiredArgsConstructor
public class AllocationInstructionServiceImpl implements AllocationInstructionService {

    private final ParticipantRepository participantRepository;
    private final TradeRepository tradeRepository;
    private final SettlementRepository settlementRepository;
    private final RejectionReasonRepository rejectionReasonRepository;
    private final KafkaNuboProducer kafkaNuboProducer;
    private final PackageCustodianService packageCustodianService;

    @Override
    public void processAllocationInstruction(AllocationInstructionCrudRequestDto request) {
        log.info("Start method processAllocationInstruction, senderSubID -> {}, middlewareMsg -> {}",
                request.getAllocationInstruction().getHeader().getSenderSubID(),
                request.getAllocationInstruction().getHeader().getMiddlewareMsg());
        AllocationInstructionAckOutDto response;
        try {
            response = executeFlow(request);
        } catch (ServiceException e) {
            log.warn("Business error processing allocation instruction: {}", e.getMessage());
            response = buildErrorResponse(request, e);
        } catch (Exception e) {
            log.error("Unexpected error processing allocation instruction: {}", e.getMessage(), e);
            response = buildErrorResponse(request,
                    new ServiceException(ErrorCode.UNEXPECTED, HttpStatus.INTERNAL_SERVER_ERROR));
        }
        kafkaNuboProducer.sendMessage(response);
        log.info("End method processAllocationInstruction");
    }

    private AllocationInstructionAckOutDto executeFlow(AllocationInstructionCrudRequestDto request) {
        AllocationInstructionCrudRequestDto.AllocationInstruction ai = request.getAllocationInstruction();
        List<AllocationInstructionCrudRequestDto.OrdAllocGrp> ordAllocGrp = ai.getOrdAllocGrp();

        if (ordAllocGrp == null || ordAllocGrp.size() != 1) {
            throw new ServiceException(ErrorCode.ORD_ALLOC_GRP_INVALID_SIZE, HttpStatus.BAD_REQUEST);
        }

        String middlewareMsg = ai.getHeader().getMiddlewareMsg();
        if (!ProcessEnum.MSG_CREATE.getValue().equals(middlewareMsg)
                && !ProcessEnum.MSG_DELETE.getValue().equals(middlewareMsg)) {
            throw new ServiceException(ErrorCode.MIDDLEWARE_MSG_INVALID, HttpStatus.BAD_REQUEST);
        }

        if (ProcessEnum.MSG_DELETE.getValue().equals(middlewareMsg)
                && (ai.getAllocLinkID() == null || ai.getAllocLinkID().isBlank())) {
            throw new ServiceException(ErrorCode.ALLOC_LINK_ID_REQUIRED, HttpStatus.BAD_REQUEST);
        }

        String senderSubID = ai.getHeader().getSenderSubID();
        ParticipantEntity participant = validateParticipant(senderSubID);

        AllocationInstructionCrudRequestDto.OrdAllocGrp entry = ordAllocGrp.get(0);
        BigDecimal matchId = new BigDecimal(entry.getOrderID());
        LocalDate matchDate = LocalDate.parse(entry.getOrderDate());
        int fraction = Integer.parseInt(entry.getSecondaryOrderID());
        String sideId = ai.getSide();

        TradeEntity trade = tradeRepository.findByMatchIdAndMatchDate(matchId, matchDate)
                .orElseThrow(() -> new ServiceException(ErrorCode.TRADE_NOT_FOUND, HttpStatus.NOT_FOUND));

        SettlementId settlementId = new SettlementId(trade.getTradeId(), fraction, sideId);
        SettlementEntity settlement = settlementRepository.findById(settlementId)
                .orElseThrow(() -> new ServiceException(ErrorCode.SETTLEMENT_NOT_FOUND, HttpStatus.NOT_FOUND));

        if (ProcessEnum.MSG_CREATE.getValue().equals(middlewareMsg)) {
            return packageCustodianService.executeCreate(participant, trade, settlement, ai, fraction, senderSubID);
        } else {
            return packageCustodianService.executeDelete(trade, settlement, ai, fraction, senderSubID);
        }
    }

    private ParticipantEntity validateParticipant(String senderSubID) {
        String participantCode = "CO0" + senderSubID;
        ParticipantEntity participant = participantRepository.findByCode(participantCode)
                .orElseThrow(() -> new ServiceException(ErrorCode.PARTICIPANT_NOT_FOUND, HttpStatus.NOT_FOUND));
        if (Boolean.TRUE.equals(participant.getCustodian())) {
            throw new ServiceException(ErrorCode.PARTICIPANT_IS_CUSTODIAN, HttpStatus.UNPROCESSABLE_ENTITY);
        }
        return participant;
    }

    private AllocationInstructionAckOutDto.Header buildHeader(
            AllocationInstructionCrudRequestDto.AllocationInstruction ai,
            String middlewareMsg) {
        return AllocationInstructionAckOutDto.Header.builder()
                .targetSubID(ai.getHeader().getSenderSubID())
                .sendingTime(ApplicationUtils.getLocalDateTimeNow())
                .middlewareMsg(middlewareMsg)
                .build();
    }

    private AllocationInstructionAckOutDto buildErrorResponse(
            AllocationInstructionCrudRequestDto request,
            ServiceException e) {
        AllocationInstructionCrudRequestDto.AllocationInstruction ai = request.getAllocationInstruction();
        String middlewareMsg = ai.getHeader().getMiddlewareMsg();

        String resultMsg = ProcessEnum.MSG_CREATE.getValue().equals(middlewareMsg)
                ? ProcessEnum.RESULT_CREATE.getValue()
                : ProcessEnum.RESULT_DELETE.getValue();

        String individualAllocID = null;
        String secondaryIndividualAllocID = null;
        List<AllocationInstructionCrudRequestDto.OrdAllocGrp> ordAllocGrp = ai.getOrdAllocGrp();
        if (ordAllocGrp != null && !ordAllocGrp.isEmpty() && ai.getTradeDate() != null) {
            AllocationInstructionCrudRequestDto.OrdAllocGrp entry = ordAllocGrp.get(0);
            String datePart = ApplicationUtils.parseLocalDateWithFormatPlane(ai.getTradeDate());
            individualAllocID = datePart + entry.getOrderID();
            secondaryIndividualAllocID = entry.getSecondaryOrderID();
        }

        Integer rejCode = e.getErrorCode().getAllocRejCode();
        String reasonText = buildReasonText(rejCode, e.getErrorCode().getSpanishMessage());
        return AllocationInstructionAckOutDto.builder()
                .allocationInstructionAck(
                        AllocationInstructionAckOutDto.AllocationInstructionAck.builder()
                                .allocStatus(1)
                                .allocRejCode(rejCode)
                                .header(buildHeader(ai, resultMsg))
                                .allocAck(List.of(
                                        AllocationInstructionAckOutDto.AllocAck.builder()
                                                .individualAllocID(individualAllocID)
                                                .secondaryIndividualAllocID(secondaryIndividualAllocID)
                                                .text(reasonText)
                                                .build()))
                                .build())
                .build();
    }

    private String buildReasonText(Integer rejCode, String spanishMessage) {
        if (rejCode == null) {
            return spanishMessage;
        }
        Optional<RejectionReasonEntity> reason = rejectionReasonRepository.findByErrorIdAndCategory((long) rejCode,
                ProcessEnum.PACKAGE_REJECTION.getValue());
        if (reason.isEmpty()) {
            return spanishMessage;
        }
        if (ProcessEnum.REJECTION_CODE_OTHER.getValue().equals(String.valueOf(rejCode))) {
            return reason.get().getReason() + " - " + spanishMessage;
        }
        return reason.get().getReason();
    }

}

```

## src/main/java/com/nubo/packages/custody/cmd/api/service/impl/AutomaticPackagingNotificationServiceImpl.java

```java
package com.nubo.packages.custody.cmd.api.service.impl;

import tools.jackson.databind.ObjectMapper;
import tools.jackson.databind.node.ObjectNode;
import com.nubo.packages.custody.cmd.api.application.properties.PropertiesConfig;
import com.nubo.packages.custody.cmd.api.models.dto.request.PackageCustodianAutomaticInDto;
import com.nubo.packages.custody.cmd.api.models.enums.AutomaticPackagingNotificationRole;
import com.nubo.packages.custody.cmd.api.models.enums.NotificationMessageEnum;
import com.nubo.packages.custody.cmd.api.models.enums.NotificationTypeEnum;
import com.nubo.packages.custody.cmd.api.service.AutomaticPackagingNotificationService;
import com.nubo.packages.custody.cmd.api.service.NotificationService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class AutomaticPackagingNotificationServiceImpl implements AutomaticPackagingNotificationService {

    private static final String MESSAGE_TITLE = "Traslado de paquetes";

    private final PropertiesConfig propertiesConfig;
    private final NotificationService notificationService;
    private final ObjectMapper objectMapper = new ObjectMapper();

    public void notifySuccessfulPackaging(PackageCustodianAutomaticInDto request) {
        try {
            if (!Boolean.TRUE.equals(propertiesConfig.getAutomaticPackagingNotificationEnabled())) {
                log.info("Automatic packaging notification is disabled by property");
                return;
            }
            if (request == null || CollectionUtils.isEmpty(request.getPackages())) {
                log.warn("Automatic packaging notification skipped. Request has no packages");
                return;
            }

            sendNotifications(AutomaticPackagingNotificationRole.CUSTODIAN,
                    aggregateByParticipant(request.getPackages(), AutomaticPackagingNotificationRole.CUSTODIAN));
            sendNotifications(AutomaticPackagingNotificationRole.PARTICIPANT,
                    aggregateByParticipant(request.getPackages(), AutomaticPackagingNotificationRole.PARTICIPANT));
        } catch (Exception ex) {
            log.error("Automatic packaging notification failed after successful package creation. message={}",
                    ex.getMessage(), ex);
        }
    }

    private Map<Long, NotificationSummary> aggregateByParticipant(
            List<PackageCustodianAutomaticInDto.PackageInDto> packages,
            AutomaticPackagingNotificationRole role) {
        Map<Long, NotificationSummary> summaries = new LinkedHashMap<>();
        for (PackageCustodianAutomaticInDto.PackageInDto packageDto : packages) {
            Long participantId = AutomaticPackagingNotificationRole.CUSTODIAN.equals(role)
                    ? packageDto.getCustodianId()
                    : packageDto.getParticipantId();
            if (participantId == null) {
                continue;
            }
            summaries.computeIfAbsent(participantId, ignored -> new NotificationSummary())
                    .addPackage(packageDto);
        }
        return summaries;
    }

    private void sendNotifications(
            AutomaticPackagingNotificationRole role,
            Map<Long, NotificationSummary> summaries) {
        if (summaries.isEmpty()) {
            log.info("Automatic packaging notification skipped. No participants found for role={}", role);
            return;
        }
        for (Map.Entry<Long, NotificationSummary> entry : summaries.entrySet()) {
            sendNotification(role, entry.getKey(), entry.getValue());
        }
    }

    private void sendNotification(
            AutomaticPackagingNotificationRole role,
            Long participantId,
            NotificationSummary summary) {
        try {
            ObjectNode metadata = objectMapper.createObjectNode();
            metadata.put("title", MESSAGE_TITLE);
            metadata.put("role", role.name());
            metadata.put("participantId", participantId);
            metadata.put("packagesCreatedAndTransferred", summary.packageCount());
            metadata.put("detailsTransferred", summary.detailCount());
            metadata.put("NUM_PAQUETES", summary.packageCount());

            notificationService.sendNotification(NotificationTypeEnum.INFORMATIVE,
                    NotificationMessageEnum.PACKAGE_TRANSFER_SUCCESS,
                    buildMessage(summary.packageCount(), role),
                    (long) summary.packageCount(),
                    participantId,
                    metadata);
            log.info("Automatic packaging notification requested. role={}, participantId={}, packageCount={}, detailCount={}",
                    role, participantId, summary.packageCount(), summary.detailCount());
        } catch (Exception ex) {
            log.error("Automatic packaging notification failed. role={}, participantId={}, message={}",
                    role, participantId, ex.getMessage(), ex);
        }
    }

    private String buildMessage(int packageCount, AutomaticPackagingNotificationRole role) {
        String suffix = AutomaticPackagingNotificationRole.CUSTODIAN.equals(role)
                ? "a este"
                : "donde actúa como corredor";
        return "Se han generado y trasladado %d paquetes %s. Revisa el módulo Gestión de custodia"
                .formatted(packageCount, suffix);
    }

    private static class NotificationSummary {
        private int packageCount;
        private int detailCount;

        void addPackage(PackageCustodianAutomaticInDto.PackageInDto packageDto) {
            packageCount++;
            detailCount += Optional.ofNullable(packageDto.getDetails())
                    .orElseGet(List::of)
                    .stream()
                    .filter(Objects::nonNull)
                    .toList()
                    .size();
        }

        int packageCount() {
            return packageCount;
        }

        int detailCount() {
            return detailCount;
        }
    }

}

```

## src/main/java/com/nubo/packages/custody/cmd/api/service/impl/KafkaNuboProducerImpl.java

```java
package com.nubo.packages.custody.cmd.api.service.impl;

import com.nubo.packages.custody.cmd.api.application.properties.PropertiesConfig;
import com.nubo.packages.custody.cmd.api.exception.error.ErrorCode;
import com.nubo.packages.custody.cmd.api.exception.ServiceException;
import com.nubo.packages.custody.cmd.api.models.dto.response.AllocationInstructionAckOutDto;
import com.nubo.packages.custody.cmd.api.service.KafkaNuboProducer;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.SendResult;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.concurrent.CompletableFuture;

@Service
@RequiredArgsConstructor
@Slf4j
public class KafkaNuboProducerImpl implements KafkaNuboProducer {

    private final PropertiesConfig propertiesConfig;
    @Qualifier("kafkaNuboTemplate")
    private final KafkaTemplate<String, AllocationInstructionAckOutDto> kafkaNuboTemplate;
    @Qualifier("kafkaNuboNotificationTemplate")
    private final KafkaTemplate<String, String> kafkaNuboNotificationTemplate;

    @Override
    public void sendMessage(AllocationInstructionAckOutDto response) {
        log.debug("Start method sendMessage, response -> {}", response);
        String topic = propertiesConfig.getKafkaNuboProducerTopicPackagesCustodyCmdResponse();
        CompletableFuture<SendResult<String, AllocationInstructionAckOutDto>> future =
                kafkaNuboTemplate.send(topic, response).toCompletableFuture();
        future.thenAccept(result ->
                        log.info("Send message Kafka packages custody cmd -- Topic: {} -- offset: {}",
                                topic, result.getRecordMetadata().offset()))
                .exceptionally(ex -> {
                    throw new ServiceException(ErrorCode.ERROR_KAFKA_PRODUCER_NUBO, ex);
                });
    }

    @Override
    public void sendMessageNotification(String message) {
        if (!StringUtils.hasText(message)) {
            log.warn("Automatic packaging notification message is empty. Kafka send skipped");
            return;
        }
        String topic = propertiesConfig.getKafkaNuboNotificationTopic();
        if (!StringUtils.hasText(topic)) {
            log.warn("Automatic packaging notification topic is empty. Kafka send skipped");
            return;
        }
        CompletableFuture<SendResult<String, String>> future =
                kafkaNuboNotificationTemplate.send(topic, message).toCompletableFuture();
        future.thenAccept(result ->
                        log.info("Automatic packaging notification sent. topic={}, offset={}",
                                topic, result.getRecordMetadata().offset()))
                .exceptionally(ex -> {
                    log.error("Error sending automatic packaging notification to Kafka. topic={}, message={}",
                            topic, ex.getMessage(), ex);
                    return null;
                });
    }

}

```

## src/main/java/com/nubo/packages/custody/cmd/api/service/impl/NotificationServiceImpl.java

```java
package com.nubo.packages.custody.cmd.api.service.impl;

import tools.jackson.databind.ObjectMapper;
import tools.jackson.databind.node.ObjectNode;
import com.nubo.packages.custody.cmd.api.application.properties.PropertiesConfig;
import com.nubo.packages.custody.cmd.api.application.util.ApplicationUtils;
import com.nubo.packages.custody.cmd.api.models.dto.notification.NotificationRequestDto;
import com.nubo.packages.custody.cmd.api.models.enums.NotificationMessageEnum;
import com.nubo.packages.custody.cmd.api.models.enums.NotificationTypeEnum;
import com.nubo.packages.custody.cmd.api.repository.UserNotificationRepository;
import com.nubo.packages.custody.cmd.api.service.KafkaNuboProducer;
import com.nubo.packages.custody.cmd.api.service.NotificationService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class NotificationServiceImpl implements NotificationService {

    private final PropertiesConfig propertiesConfig;
    private final KafkaNuboProducer kafkaNuboProducer;
    private final UserNotificationRepository userNotificationRepository;
    private final ObjectMapper objectMapper = new ObjectMapper();

    @Override
    public void sendNotification(NotificationTypeEnum notificationType, NotificationMessageEnum notificationMessage,
            String message, Long packageCount, Long participantId, ObjectNode metadata) {
        log.info("Sending notification type: {} - message: {} - packageCount: {} - participantId: {}",
                notificationType.getDescription(), notificationMessage.getDescription(), packageCount, participantId);
        try {
            ObjectNode metadataNode = metadata == null ? objectMapper.createObjectNode() : metadata;
            if (message != null) {
                metadataNode.put("message", message);
            }
            if (packageCount != null) {
                metadataNode.put("packageCount", packageCount);
                metadataNode.put("NUM_PAQUETES", packageCount);
            }

            List<Long> userIds = userNotificationRepository.findUserIdsByParticipantIds(List.of(participantId));

            if (userIds.isEmpty()) {
                log.warn("No user IDs found for participant ID: {}", participantId);
                return;
            }

            NotificationRequestDto notification = NotificationRequestDto.builder()
                    .notificationId(notificationMessage.getId())
                    .typeNotification(notificationType.getDescription())
                    .eventType(propertiesConfig.getKafkaNuboNotificationEventType())
                    .module(propertiesConfig.getKafkaNuboNotificationModule())
                    .userIds(userIds != null ? userIds : List.of())
                    .timestamp(LocalDateTime.now().withNano(0).toString())
                    .metadata(metadataNode)
                    .build();

            kafkaNuboProducer.sendMessageNotification(ApplicationUtils.convertObjectToJson(notification));
            log.info("Notification sent successfully for users: {}", userIds);

        } catch (Exception ex) {
            log.error("Error sending notification to Kafka", ex);
        }
    }

}

```

## src/main/java/com/nubo/packages/custody/cmd/api/service/impl/PackageCustodianServiceImpl.java

```java
package com.nubo.packages.custody.cmd.api.service.impl;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.OffsetDateTime;
import java.time.ZoneId;
import java.util.List;
import java.util.Collection;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
import java.time.format.DateTimeFormatter;
import java.util.stream.Collectors;

import com.nubo.packages.custody.cmd.api.service.AutomaticPackagingNotificationService;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StopWatch;

import com.nubo.packages.custody.cmd.api.application.properties.PropertiesConfig;
import com.nubo.packages.custody.cmd.api.application.properties.PropertiesContext;
import com.nubo.packages.custody.cmd.api.application.util.ApplicationUtils;
import com.nubo.packages.custody.cmd.api.exception.ServiceException;
import com.nubo.packages.custody.cmd.api.exception.error.ErrorCode;
import com.nubo.packages.custody.cmd.api.models.dto.request.AllocationInstructionCrudRequestDto;
import com.nubo.packages.custody.cmd.api.models.dto.request.PackageCustodianInDto;
import com.nubo.packages.custody.cmd.api.models.dto.request.PackageCustodianAutomaticInDto;
import com.nubo.packages.custody.cmd.api.models.dto.request.PackageCustodianManualDetailInDto;
import com.nubo.packages.custody.cmd.api.models.dto.request.PackageCustodianManualInDto;
import com.nubo.packages.custody.cmd.api.models.dto.response.AllocationInstructionAckOutDto;
import com.nubo.packages.custody.cmd.api.models.dto.response.PackageCustodianOutDto;
import com.nubo.packages.custody.cmd.api.models.dto.response.PackageCustodianAutomaticOutDto;
import com.nubo.packages.custody.cmd.api.models.dto.response.PackageCustodianManualOutDto;
import com.nubo.packages.custody.cmd.api.models.dto.response.PackageCustodianManualPackageOutDto;
import com.nubo.packages.custody.cmd.api.models.entity.CustodianStatusHistoryEntity;
import com.nubo.packages.custody.cmd.api.models.entity.PackageCustodianEntity;
import com.nubo.packages.custody.cmd.api.models.entity.PackageCustodianHistoryEntity;
import com.nubo.packages.custody.cmd.api.models.entity.PackageCustodianHistoryId;
import com.nubo.packages.custody.cmd.api.models.entity.PackageDetailEntity;
import com.nubo.packages.custody.cmd.api.models.entity.PackageDetailHistoryEntity;
import com.nubo.packages.custody.cmd.api.models.entity.PackageDetailHistoryId;
import com.nubo.packages.custody.cmd.api.models.entity.PackageDetailId;
import com.nubo.packages.custody.cmd.api.models.entity.ParticipantEntity;
import com.nubo.packages.custody.cmd.api.models.entity.SettlementEntity;
import com.nubo.packages.custody.cmd.api.models.entity.TradeEntity;
import com.nubo.packages.custody.cmd.api.models.enums.AutomaticCutType;
import com.nubo.packages.custody.cmd.api.models.enums.ProcessEnum;
import com.nubo.packages.custody.cmd.api.models.enums.StatusEnum;
import com.nubo.packages.custody.cmd.api.repository.BundleSequenceRepository;
import com.nubo.packages.custody.cmd.api.repository.BundleSequenceNativeRepository;
import com.nubo.packages.custody.cmd.api.repository.CustodianStatusHistoryRepository;
import com.nubo.packages.custody.cmd.api.repository.PackageCustodianHistoryNativeRepository;
import com.nubo.packages.custody.cmd.api.repository.PackageCustodianRepository;
import com.nubo.packages.custody.cmd.api.repository.ParticipantRepository;
import com.nubo.packages.custody.cmd.api.repository.PackageDetailNativeRepository;
import com.nubo.packages.custody.cmd.api.repository.PackageCustodianHistoryRepository;
import com.nubo.packages.custody.cmd.api.repository.PackageDetailRepository;
import com.nubo.packages.custody.cmd.api.repository.PackageDetailHistoryNativeRepository;
import com.nubo.packages.custody.cmd.api.repository.PackageDetailHistoryRepository;
import com.nubo.packages.custody.cmd.api.repository.SettlementNativeRepository;
import com.nubo.packages.custody.cmd.api.repository.SettlementRepository;
import com.nubo.packages.custody.cmd.api.service.PackageCustodianService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
@RequiredArgsConstructor
public class PackageCustodianServiceImpl implements PackageCustodianService {

    private final SettlementRepository settlementRepository;
    private final PackageCustodianRepository packageCustodianRepository;
    private final CustodianStatusHistoryRepository custodianStatusHistoryRepository;
    private final BundleSequenceRepository bundleSequenceRepository;
    private final BundleSequenceNativeRepository bundleSequenceNativeRepository;
    private final ParticipantRepository participantRepository;
    private final PropertiesConfig propertiesConfig;
    private final PackageDetailRepository packageDetailRepository;
    private final PackageCustodianHistoryRepository packageCustodianHistoryRepository;
    private final PackageDetailHistoryRepository packageDetailHistoryRepository;
    private final PackageDetailNativeRepository packageDetailNativeRepository;
    private final SettlementNativeRepository settlementNativeRepository;
    private final PackageCustodianHistoryNativeRepository packageCustodianHistoryNativeRepository;
    private final PackageDetailHistoryNativeRepository packageDetailHistoryNativeRepository;
    private final AutomaticPackagingNotificationService automaticPackagingNotificationService;
    private static final BigDecimal MAX_NUMERIC_6_4 = new BigDecimal("99.9999");
    private static final String PACKAGE_OPERATION_DIGIT_RV = "1";

    @Transactional
    @Override
    public AllocationInstructionAckOutDto executeCreate(
            ParticipantEntity participant,
            TradeEntity trade,
            SettlementEntity settlement,
            AllocationInstructionCrudRequestDto.AllocationInstruction ai,
            int fraction,
            String senderSubID) {
        log.info("Start method executeCreate, participantId -> {}, uniqueFractionId -> {}",
                participant.getParticipantId(), settlement.getUniqueFractionId());

        throw new ServiceException(ErrorCode.LEGACY_PACKAGE_FLOW_NOT_SUPPORTED,
                HttpStatus.UNPROCESSABLE_ENTITY);
        /*
        if (!StatusEnum.ASSIGNED.getId().equals(settlement.getStatusId())
                || settlement.getCustodianStatusId() != null) {
            throw new ServiceException(ErrorCode.SETTLEMENT_INVALID_STATUS, HttpStatus.UNPROCESSABLE_ENTITY);
        }

        this.validateNotExistsPackageDetail(settlement.getUniqueFractionId());
        Long sequence = getNextBundleSequence(participant);

        String auditApplic = propertiesConfig.getApiName();
        OffsetDateTime auditDate = OffsetDateTime.now();
        PackageCustodianEntity savedPc = packageCustodianRepository.save(
                PackageCustodianEntity.builder()
                        .marketId(trade.getMarketId())
                        .codeSCB(null)
                        .packageDate(LocalDate.now())
                        .participantCode(senderSubID)
                        .sequence(sequence)
                        .lastModifyUser("SYSTEM_VORTEX")
                        .lastModifyApplic(propertiesConfig.getApiName())
                        .lastModifyDate(auditDate)
                        .lastModifyIp("127.0.0.1")
                        .build());
        custodianStatusHistoryRepository.save(
                CustodianStatusHistoryEntity.builder()
                        .marketId(trade.getMarketId())
                        .fraction(fraction)
                        .custodianStatusTime(OffsetDateTime.now())
                        .investorAccountId(settlement.getInvestorAccountId())
                        .custodianStatusId(StatusEnum.CUSTODIAN_CREATED.getId())
                        .rejectionReasonId(null)
                        .lastModifyUser("SYSTEM_VORTEX")
                        .lastModifyApplic(auditApplic)
                        .lastModifyDate(auditDate)
                        .lastModifyIp("127.0.0.1")
                        .tradeId(settlement.getId().getTradeId())
                        .sideId(settlement.getId().getSideId())
                        .investorId(settlement.getInvestorId())
                        .custodianId(settlement.getCustodianId())
                        .ficAdministratorId(settlement.getFicAdministratorId())
                        .fractionQuantity(settlement.getFractionQuantity())
                        .fractionVolume(settlement.getFractionVolume())
                        .netAmount(settlement.getNetAmount())
                        .commissionAmount(settlement.getCommissionAmount())
                        .valTaxAmount(settlement.getValTaxAmount())
                        .build());
        settlement.setCustodianStatusId(StatusEnum.CUSTODIAN_CREATED.getId());
        settlementRepository.save(settlement);

        AllocationInstructionCrudRequestDto.OrdAllocGrp entry = ai.getOrdAllocGrp().get(0);
        String individualAllocID = ApplicationUtils.getLocalDateWithFormatPlane() + entry.getOrderID();
        String secondaryAllocID = String.format("%03d", Long.parseLong(senderSubID))
                + String.format("%07d", sequence);

        log.info("End method executeCreate, packageCustodianId -> {}", savedPc.getPackageCustodianId());
        return AllocationInstructionAckOutDto.builder()
                .allocationInstructionAck(
                        AllocationInstructionAckOutDto.AllocationInstructionAck.builder()
                                .secondaryAllocID(secondaryAllocID)
                                .tradeDate(ai.getTradeDate())
                                .allocStatus(0)
                                .side(ai.getSide())
                                .noAllocs(1)
                                .header(buildHeader(ai, ProcessEnum.RESULT_CREATE.getValue()))
                                .allocAck(List.of(
                                        AllocationInstructionAckOutDto.AllocAck.builder()
                                                .individualAllocID(individualAllocID)
                                                .secondaryIndividualAllocID(String.format("%02d", fraction))
                                                .build()))
                                .build())
                .build();
        */
    }

    @Transactional
    @Override
    public AllocationInstructionAckOutDto executeDelete(
            TradeEntity trade,
            SettlementEntity settlement,
            AllocationInstructionCrudRequestDto.AllocationInstruction ai,
            int fraction,
            String senderSubID) {
        log.info("Start method executeDelete, uniqueFractionId -> {}", settlement.getUniqueFractionId());

        Long custodianStatusId = settlement.getCustodianStatusId();
        if (custodianStatusId == null
                || (!StatusEnum.CUSTODIAN_REJECTED.getId().equals(custodianStatusId)
                && !StatusEnum.CUSTODIAN_CREATED.getId().equals(custodianStatusId))) {
            throw new ServiceException(ErrorCode.SETTLEMENT_INVALID_STATUS, HttpStatus.UNPROCESSABLE_ENTITY);
        }



        String allocLinkID = ai.getAllocLinkID();
        String participantCode = allocLinkID.substring(0, 3);
        Long sequence = Long.parseLong(allocLinkID.substring(3));
        LocalDate packageDate = LocalDate.parse(ai.getTradeDate());
        String marketId = trade.getMarketId();

        PackageCustodianEntity pc = packageCustodianRepository
                .findByParticipantCodeAndSequenceAndMarketIdAndPackageDate(
                        participantCode,
                        sequence,
                        marketId,
                        packageDate
                )
                .orElseThrow(() -> new ServiceException(ErrorCode.PACKAGE_CUSTODIAN_NOT_FOUND, HttpStatus.NOT_FOUND));

        String auditApplic = propertiesConfig.getApiName();
        OffsetDateTime auditDate = OffsetDateTime.now();
        custodianStatusHistoryRepository.save(
                CustodianStatusHistoryEntity.builder()
                        .marketId(trade.getMarketId())
                        .uniqueFractionId(settlement.getUniqueFractionId())
                        .fraction(fraction)
                        .custodianStatusTime(OffsetDateTime.now())
                        .investorAccountId(settlement.getInvestorAccountId())
                        .custodianStatusId(custodianStatusId)
                        .rejectionReasonId(null)
                        .lastModifyUser("SYSTEM_VORTEX")
                        .lastModifyApplic(auditApplic)
                        .lastModifyDate(auditDate)
                        .lastModifyIp("127.0.0.1")
                        .tradeId(settlement.getId().getTradeId())
                        .sideId(settlement.getId().getSideId())
                        .investorId(settlement.getInvestorId())
                        .custodianId(settlement.getCustodianId())
                        .ficAdministratorId(settlement.getFicAdministratorId())
                        .fractionQuantity(settlement.getFractionQuantity())
                        .fractionVolume(settlement.getFractionVolume())
                        .netAmount(settlement.getNetAmount())
                        .commissionAmount(settlement.getCommissionAmount())
                        .valTaxAmount(settlement.getValTaxAmount())
                        .build());
        pc.setLastModifyUser("SYSTEM_VORTEX");
        pc.setLastModifyApplic(auditApplic);
        pc.setLastModifyDate(auditDate);
        pc.setLastModifyIp("127.0.0.1");
        packageCustodianRepository.save(pc);

        settlement.setCustodianStatusId(null);
        settlementRepository.save(settlement);

        AllocationInstructionCrudRequestDto.OrdAllocGrp entry = ai.getOrdAllocGrp().get(0);
        String individualAllocID = ApplicationUtils.getLocalDateWithFormatPlane() + entry.getOrderID();
        log.info("End method executeDelete, packageCustodianId -> {}", pc.getPackageCustodianId());
        return AllocationInstructionAckOutDto.builder()
                .allocationInstructionAck(
                        AllocationInstructionAckOutDto.AllocationInstructionAck.builder()
                                .secondaryAllocID(ai.getAllocLinkID())
                                .tradeDate(ai.getTradeDate())
                                .allocStatus(0)
                                .side(ai.getSide())
                                .noAllocs(1)
                                .header(buildHeader(ai, ProcessEnum.RESULT_DELETE.getValue()))
                                .allocAck(List.of(
                                        AllocationInstructionAckOutDto.AllocAck.builder()
                                                .individualAllocID(individualAllocID)
                                                .secondaryIndividualAllocID(String.format("%02d", fraction))
                                                .build()))
                                .build())
                .build();
    }

    private AllocationInstructionAckOutDto.Header buildHeader(
            AllocationInstructionCrudRequestDto.AllocationInstruction ai,
            String middlewareMsg) {
        return AllocationInstructionAckOutDto.Header.builder()
                .targetSubID(ai.getHeader().getSenderSubID())
                .sendingTime(ApplicationUtils.getLocalDateTimeNow())
                .middlewareMsg(middlewareMsg)
                .build();
    }

    private Long getNextBundleSequence(ParticipantEntity participant) {
        if (participant == null || participant.getParticipantId() == null) {
            throw new ServiceException(ErrorCode.PARTICIPANT_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
        return bundleSequenceNativeRepository.getNextSequence(participant.getParticipantId(),
                PropertiesContext.getClientUser(), propertiesConfig.getApiName(), PropertiesContext.getClientIp());
    }


    @Transactional
    @Override
    public PackageCustodianOutDto createPackageCustodian(PackageCustodianInDto packageCustodianInDto) {
        throw new ServiceException(ErrorCode.LEGACY_PACKAGE_FLOW_NOT_SUPPORTED,
                HttpStatus.UNPROCESSABLE_ENTITY);
    }

    @Transactional
    @Override
    public PackageCustodianAutomaticOutDto createAutomaticPackageCustodians(
            PackageCustodianAutomaticInDto request) {
        StopWatch sw = new StopWatch("cmd-automatic-packaging");
        String runId = java.util.UUID.randomUUID().toString();
        List<PackageCustodianAutomaticOutDto.PackageResultDto> results = new ArrayList<>();
        List<PackageCustodianAutomaticOutDto.ProcessedDetailDto> processedDetails = new ArrayList<>();
        boolean includeProcessedDetailsList = propertiesConfig.isAutomaticPackagingResponseIncludeProcessedDetailsList();
        int detailCount = 0;
        int createdPackageCount = 0;
        int reusedPackageCount = 0;
        PackageCustodianAutomaticOutDto response;

        try {
            sw.start("validate-request");
            if (request == null || request.getPackages() == null || request.getPackages().isEmpty()) {
                sw.stop();
                throw new ServiceException(ErrorCode.AUTOMATIC_PACKAGE_REQUEST_EMPTY, HttpStatus.BAD_REQUEST);
            }
            AutomaticCutType cutType = validateAutomaticCut(request.getCutType(), request.getSameDaySettlement());
            LocalDate packageDate = request.getExecutionDate();
            int maxDetailsPerPackage = propertiesConfig.getAutomaticPackagingMaxDetailsPerPackage();
            if (maxDetailsPerPackage < 1) {
                throw new IllegalStateException("automatic-packaging.max-details-per-package must be positive");
            }
            Set<String> requestDetailKeys = new HashSet<>();
            for (PackageCustodianAutomaticInDto.PackageInDto input : request.getPackages()) {
                if (input != null && input.getDetails() != null
                        && input.getDetails().size() > maxDetailsPerPackage) {
                    throw new ServiceException(ErrorCode.AUTOMATIC_PACKAGE_INCONSISTENT_DETAIL,
                            HttpStatus.UNPROCESSABLE_ENTITY);
                }
                validateAutomaticPackage(input, packageDate, requestDetailKeys);
            }
            sw.stop();

            OffsetDateTime auditDate = OffsetDateTime.now();
            String auditUser = PropertiesContext.getClientUser();
            String auditIp = PropertiesContext.getClientIp();
            String auditApplic = propertiesConfig.getApiName();
            int persistBatchSize = propertiesConfig.getAutomaticPackagingPackageDetailPersistBatchSize();
            if (persistBatchSize < 1 || persistBatchSize > 1000) {
                throw new IllegalStateException("Persist batch size must be between 1 and 1000");
            }

            List<PackageCustodianHistoryEntity> packageHistoriesToSave = new ArrayList<>();

            sw.start("preload-existing-details");
            Map<Long, List<Long>> activeDetailsByUniqueFractionId = preloadActiveDetailsByUniqueFractionId(request);
            sw.stop();

            sw.start("preload-participants");
            Map<Long, ParticipantEntity> participantsById = preloadParticipants(request);
            sw.stop();

            Map<Integer, PackageCustodianEntity> compatibleHeadersByIndex = new HashMap<>();
            Map<Long, Long> existingDetailCountsByPackageId = Collections.emptyMap();
            if (!cutType.isFirstCut()) {
                sw.start("preload-compatible-packages");
                Set<Long> compatiblePackageIds = new HashSet<>();
                for (int index = 0; index < request.getPackages().size(); index++) {
                    PackageCustodianAutomaticInDto.PackageInDto input = request.getPackages().get(index);
                    PackageCustodianEntity compatibleHeader = findCompatiblePackage(input, packageDate, cutType)
                            .orElse(null);
                    if (compatibleHeader != null) {
                        compatibleHeadersByIndex.put(index, compatibleHeader);
                        compatiblePackageIds.add(compatibleHeader.getPackageCustodianId());
                    }
                }
                existingDetailCountsByPackageId = preloadExistingDetailCounts(compatiblePackageIds);
                Set<Long> reservedHeaderIds = new HashSet<>();
                for (int index = 0; index < request.getPackages().size(); index++) {
                    PackageCustodianEntity compatibleHeader = compatibleHeadersByIndex.get(index);
                    if (compatibleHeader == null) {
                        continue;
                    }
                    Long packageId = compatibleHeader.getPackageCustodianId();
                    long existingCount = existingDetailCountsByPackageId.getOrDefault(packageId, 0L);
                    long newDetailCount = request.getPackages().get(index).getDetails().stream()
                            .filter(detail -> !activeDetailsByUniqueFractionId
                                    .getOrDefault(detail.getUniqueFractionId(), List.of()).contains(packageId)).count();
                    if (existingCount + newDetailCount > maxDetailsPerPackage
                            || !reservedHeaderIds.add(packageId)) {
                        compatibleHeadersByIndex.remove(index);
                    }
                }
                sw.stop();
            }

            StopWatch processPackagesWatch = new StopWatch("cmd-automatic-packaging-process-packages");
            processPackagesWatch.start("process-packages");
            int packageIndex = 0;
            for (PackageCustodianAutomaticInDto.PackageInDto input : request.getPackages()) {
                long packageStart = System.currentTimeMillis();
                log.debug("CMD package start index={}, sideId={}, investorId={}, participantId={}, referencePackage={}, details={}",
                        packageIndex, input.getSideId(), input.getInvestorId(), input.getParticipantId(),
                        normalizeReferencePackage(input.getReferencePackage()),
                        input.getDetails() == null ? 0 : input.getDetails().size());
                ParticipantEntity participant = participantsById.get(input.getParticipantId());
                if (participant == null || participant.getParticipantId() == null) {
                    throw new ServiceException(ErrorCode.PARTICIPANT_NOT_FOUND, HttpStatus.NOT_FOUND);
                }
                PackageCustodianEntity header = compatibleHeadersByIndex.get(packageIndex);
                boolean existingPackage = header != null;
                Long existingDetailCount = 0L;
                String participantCode;
                Long sequence;
                String packageNumber;

                if (existingPackage) {
                    reusedPackageCount++;
                    existingDetailCount = existingDetailCountsByPackageId
                            .getOrDefault(header.getPackageCustodianId(), 0L);
                    participantCode = header.getParticipantCode();
                    sequence = header.getSequence();
                    packageNumber = header.getPackageNumber();
                } else {
                    createdPackageCount++;
                    long sequenceStart = System.currentTimeMillis();
                    sw.start("generate-sequences");
                    sequence = getNextBundleSequence(participant);
                    sw.stop();
                    log.debug("BUNDLE_SEQUENCE generated participantId={}, sequence={}, elapsedMs={}",
                            participant.getParticipantId(), sequence, System.currentTimeMillis() - sequenceStart);
                    participantCode = getParticipantCode(participant);
                    packageNumber = buildPackageNumber(packageDate, participantCode,
                            input.getTypeId(), sequence);
                    sw.start("save-package-custodian");
                    header = savePackageCustodian(
                            buildAutomaticHeader(input, packageDate, participantCode, sequence,
                                    packageNumber, auditUser, auditApplic, auditDate, auditIp));
                    sw.stop();
                }

                List<PackageDetailEntity> details = new ArrayList<>(persistBatchSize);
                List<PackageDetailHistoryEntity> detailHistories = new ArrayList<>(persistBatchSize);
                List<PackageCustodianAutomaticInDto.DetailInDto> insertedInputs = new ArrayList<>();
                int packageInserted = 0;
                int packageSkipped = 0;
                int queryChunkSize = validatedQueryChunkSize();
                int totalChunks = (int) (((long) input.getDetails().size() + queryChunkSize - 1) / queryChunkSize);
                LocalDateTime eventTime = LocalDateTime.now();
                int index = 0;
                for (int chunkStart = 0; chunkStart < input.getDetails().size(); chunkStart += queryChunkSize) {
                    int chunkEnd = (int) Math.min((long) chunkStart + queryChunkSize, input.getDetails().size());
                    long chunkStarted = System.currentTimeMillis();

                    for (PackageCustodianAutomaticInDto.DetailInDto detail : input.getDetails().subList(chunkStart, chunkEnd)) {
                        Long headerPackageCustodianId = header.getPackageCustodianId();
                        List<Long> activeDetails = activeDetailsByUniqueFractionId
                                .getOrDefault(detail.getUniqueFractionId(), Collections.emptyList());
                        boolean alreadyLinkedToSamePackage = activeDetails.contains(headerPackageCustodianId);
                        if (alreadyLinkedToSamePackage) {
                            packageSkipped++;
                            log.debug("Automatic packaging detail already linked to compatible package, packageCustodianId={}, uniqueFractionId={}",
                                    header.getPackageCustodianId(), detail.getUniqueFractionId());
                            continue;
                        }
                        if (!activeDetails.isEmpty()) {
                            throw new ServiceException(ErrorCode.PACKAGE_DETAIL_ALREADY_EXISTS, HttpStatus.CONFLICT);
                        }
                        PackageDetailId id = PackageDetailId.builder()
                                .packageCustodianId(header.getPackageCustodianId()).marketId(input.getMarketId())
                                .packageDate(packageDate).tradeId(detail.getTradeId()).sideId(detail.getSideId())
                                .fraction(detail.getFraction()).build();
                        PackageDetailEntity packageDetail = PackageDetailEntity.builder().id(id).participantCode(participantCode)
                                .sequence(sequence).packageNumber(packageNumber)
                                .matchDate(detail.getMatchDate()).uniqueFractionId(detail.getUniqueFractionId())
                                .investorId(detail.getInvestorId()).custodianId(detail.getCustodianId())
                                .participantId(detail.getParticipantId())
                                .packageStatusId(getAutomaticPackagingFinalStatusId()).lastModifyUser(auditUser)
                                .lastModifyApplic(auditApplic).lastModifyDate(auditDate).lastModifyIp(auditIp).build();
                        details.add(packageDetail);
                        packageInserted++;
                        if (existingPackage) insertedInputs.add(detail);
                        detailHistories.add(buildDetailHistory(header, input, detail, packageDetail, participantCode,
                                packageNumber, sequence, eventTime.plusNanos((long) index++ * 1_000_000L), auditUser,
                                auditApplic, auditDate, auditIp));
                        if (includeProcessedDetailsList) {
                            processedDetails.add(buildProcessedDetail(header, input, detail, participantCode, packageNumber));
                        }
                        if (details.size() == persistBatchSize) {
                            persistAutomaticDetailBatch(details, detailHistories, auditUser, auditApplic, auditDate, auditIp);
                            details = new ArrayList<>(persistBatchSize);
                            detailHistories = new ArrayList<>(persistBatchSize);
                        }
                    }
                    if (!details.isEmpty()) {
                        persistAutomaticDetailBatch(details, detailHistories, auditUser, auditApplic, auditDate, auditIp);
                        details = new ArrayList<>(persistBatchSize);
                        detailHistories = new ArrayList<>(persistBatchSize);
                    }
                    log.info("AUTOMATIC_PACKAGE_CHUNK runId={} packageId={} packageNumber={} expectedDetails={} processedDetails={} insertedDetails={} skippedDetails={} duplicateDetails=0 totalChunks={} currentChunk={} chunkSize={} persistBatchSize={} elapsedTimeMs={} status=STAGED",
                            runId, header.getPackageCustodianId(),
                            packageNumber, input.getDetails().size(), chunkEnd, packageInserted, packageSkipped,
                            totalChunks, chunkStart / queryChunkSize + 1, chunkEnd - chunkStart, persistBatchSize,
                            System.currentTimeMillis() - chunkStarted);
                }
                if (existingPackage && !insertedInputs.isEmpty()) {
                    updateExistingHeader(header, sliceInputForInsertedDetails(input, insertedInputs), existingDetailCount,
                            auditUser, auditApplic, auditDate, auditIp);
                    saveExistingPackageCustodianUpdate(header);
                }


                packageHistoriesToSave.add(buildHeaderHistory(header, input, eventTime,
                        auditUser, auditApplic, auditDate, auditIp));
                detailCount = Math.addExact(detailCount, packageInserted);
                results.add(PackageCustodianAutomaticOutDto.PackageResultDto.builder()
                        .packageCustodianId(header.getPackageCustodianId()).packageNumber(packageNumber)
                        .marketId(input.getMarketId()).packageDate(packageDate)
                        .participantId(input.getParticipantId()).participantCode(participantCode)
                        .sequence(sequence).detailsCreated(packageInserted)
                        .referencePackage(normalizeReferencePackage(input.getReferencePackage())).build());
                log.debug("CMD package end index={}, elapsedMs={}", packageIndex,
                        System.currentTimeMillis() - packageStart);
                packageIndex++;
            }
            processPackagesWatch.stop();
            log.info("CMD automatic packaging process-packages elapsedMs={}",
                    processPackagesWatch.lastTaskInfo().getTimeMillis());

            sw.start("save-package-custodian-history");
            if (!packageHistoriesToSave.isEmpty()) {
                packageHistoriesToSave.forEach(this::validatePackageCustodianHistoryEntity);
                packageCustodianHistoryNativeRepository.insertBatch(packageHistoriesToSave);
            }
            sw.stop();

            sw.start("build-response");
            response = PackageCustodianAutomaticOutDto.builder()
                    .processedPackages(request.getPackages().size())
                    .createdPackages(createdPackageCount)
                    .processedDetails(detailCount)
                    .createdDetails(detailCount)
                    .status("SUCCESS")
                    .packages(results)
                    .processedDetailsList(includeProcessedDetailsList ? processedDetails : null)
                    .build();
            sw.stop();
            log.info("CMD automatic packaging packages summary, createdPackages={}, reusedPackages={}, detailsCreated={}",
                    createdPackageCount, reusedPackageCount, detailCount);
            registerAutomaticPackagingCompletion(runId, request, createdPackageCount, detailCount);
        } catch (ServiceException ex) {
            throw ex;
        } catch (DataIntegrityViolationException ex) {
            throw new ServiceException(ErrorCode.AUTOMATIC_PACKAGE_CREATION_FAILED, HttpStatus.CONFLICT, ex);
        } catch (Exception ex) {
            throw new ServiceException(ErrorCode.AUTOMATIC_PACKAGE_CREATION_FAILED,
                    HttpStatus.INTERNAL_SERVER_ERROR, ex);
        } finally {
            if (sw.isRunning()) {
                sw.stop();
            }
            log.info("CMD automatic packaging timing: {}", sw.prettyPrint());
        }

        return response;
    }

    private void registerAutomaticPackagingCompletion(String runId, PackageCustodianAutomaticInDto request,
            int createdPackages, int insertedDetails) {
        if (org.springframework.transaction.support.TransactionSynchronizationManager.isSynchronizationActive()) {
            org.springframework.transaction.support.TransactionSynchronizationManager.registerSynchronization(
                    new org.springframework.transaction.support.TransactionSynchronization() {
                        @Override
                        public void afterCommit() {
                            log.info("AUTOMATIC_PACKAGE_RUN runId={} insertedDetails={} physicalPackagesCreated={} status=COMMITTED",
                                    runId, insertedDetails, createdPackages);
                            automaticPackagingNotificationService.notifySuccessfulPackaging(request);
                        }

                        @Override
                        public void afterCompletion(int status) {
                            if (status != STATUS_COMMITTED) {
                                log.warn("AUTOMATIC_PACKAGE_RUN runId={} status=ROLLED_BACK", runId);
                            }
                        }
                    });
        } else {
            // Direct unit calls do not cross the Spring transactional proxy.
            automaticPackagingNotificationService.notifySuccessfulPackaging(request);
        }
    }

    @Transactional
    @Override
    public PackageCustodianManualOutDto createManualPackageCustodian(PackageCustodianManualInDto request) {
        try {
            validateManualPackage(request);

            OffsetDateTime auditDate = OffsetDateTime.now();
            String auditUser = PropertiesContext.getClientUser();
            String auditIp = PropertiesContext.getClientIp();
            String auditApplic = propertiesConfig.getApiName();
            LocalDate packageDate = LocalDate.now(ZoneId.systemDefault());

            ParticipantEntity participant = participantRepository.findById(request.getParticipantId())
                    .orElseThrow(() -> new ServiceException(ErrorCode.PARTICIPANT_NOT_FOUND, HttpStatus.NOT_FOUND));

            Long sequence = getNextBundleSequence(participant);
            String participantCode = getParticipantCode(participant);
            String packageNumber = buildPackageNumber(
                    packageDate,
                    participantCode,
                    request.getTypeId(),
                    sequence,
                    ErrorCode.MANUAL_PACKAGE_INCONSISTENT_DETAIL
            );

            PackageCustodianAutomaticInDto.PackageInDto packageInput = toAutomaticPackageInput(request);

            PackageCustodianEntity header = savePackageCustodian(
                    buildAutomaticHeader(
                            packageInput,
                            packageDate,
                            participantCode,
                            sequence,
                            packageNumber,
                            auditUser,
                            auditApplic,
                            auditDate,
                            auditIp
                    )
            );

            List<PackageDetailEntity> detailsToSave = new ArrayList<>();
            List<PackageDetailHistoryEntity> detailHistoriesToSave = new ArrayList<>();


            LocalDateTime eventTime = LocalDateTime.now();
            int index = 0;

            for (PackageCustodianAutomaticInDto.DetailInDto detail : packageInput.getDetails()) {
                PackageDetailId id = PackageDetailId.builder()
                        .packageCustodianId(header.getPackageCustodianId())
                        .marketId(request.getMarketId())
                        .packageDate(packageDate)
                        .tradeId(detail.getTradeId())
                        .sideId(detail.getSideId())
                        .fraction(detail.getFraction())
                        .build();

                PackageDetailEntity packageDetail = PackageDetailEntity.builder()
                        .id(id)
                        .participantCode(participantCode)
                        .sequence(sequence)
                        .packageNumber(packageNumber)
                        .matchDate(detail.getMatchDate())
                        .uniqueFractionId(detail.getUniqueFractionId())
                        .investorId(detail.getInvestorId())
                        .custodianId(detail.getCustodianId())
                        .participantId(detail.getParticipantId())
                        .packageStatusId(getAutomaticPackagingFinalStatusId())
                        .lastModifyUser(auditUser)
                        .lastModifyApplic(auditApplic)
                        .lastModifyDate(auditDate)
                        .lastModifyIp(auditIp)
                        .build();
                detailsToSave.add(packageDetail);

                detailHistoriesToSave.add(
                        buildDetailHistory(
                                header,
                                packageInput,
                                detail,
                                packageDetail,
                                participantCode,
                                packageNumber,
                                sequence,
                                eventTime.plusNanos((long) index++ * 1_000_000L),
                                auditUser,
                                auditApplic,
                                auditDate,
                                auditIp
                        )
                );
            }

            detailsToSave.forEach(this::validatePackageDetailEntity);
            packageDetailNativeRepository.insertBatch(detailsToSave);

            PackageCustodianHistoryEntity headerHistory = buildHeaderHistory(
                    header,
                    packageInput,
                    eventTime,
                    auditUser,
                    auditApplic,
                    auditDate,
                    auditIp
            );

            validatePackageCustodianHistoryEntity(headerHistory);
            packageCustodianHistoryNativeRepository.insertBatch(List.of(headerHistory));

            detailHistoriesToSave.forEach(this::validatePackageDetailHistoryEntity);
            packageDetailHistoryNativeRepository.insertBatch(detailHistoriesToSave);

            PackageCustodianManualOutDto response = PackageCustodianManualOutDto.builder()
                    .processedDetails(request.getDetails().size())
                    .createdDetails(detailsToSave.size())
                    .status("SUCCESS")
                    .packageCreated(PackageCustodianManualPackageOutDto.builder()
                            .packageCustodianId(header.getPackageCustodianId())
                            .packageNumber(packageNumber)
                            .marketId(header.getMarketId())
                            .packageDate(packageDate)
                            .participantId(request.getParticipantId())
                            .participantCode(participantCode)
                            .sequence(sequence)
                            .detailsCreated(detailsToSave.size())
                            .referencePackage(normalizeReferencePackage(request.getReferencePackage()))
                            .build())
                    .build();

            log.info("CMD manual packaging completed, packageCustodianId={}, packageNumber={}, details={}",
                    header.getPackageCustodianId(), packageNumber, detailsToSave.size());

            return response;
        } catch (ServiceException ex) {
            throw ex;
        } catch (DataIntegrityViolationException ex) {
            throw new ServiceException(ErrorCode.PACKAGE_CUSTODIAN_CREATION_FAILED, HttpStatus.CONFLICT, ex);
        } catch (Exception ex) {
            throw new ServiceException(
                    ErrorCode.PACKAGE_CUSTODIAN_CREATION_FAILED,
                    HttpStatus.INTERNAL_SERVER_ERROR,
                    ex
            );
        }
    }

    private void validateManualPackage(PackageCustodianManualInDto request) {
        if (request == null) {
            throw new ServiceException(ErrorCode.MANUAL_PACKAGE_REQUEST_EMPTY, HttpStatus.BAD_REQUEST);
        }
        if (request.getDetails() == null || request.getDetails().isEmpty()) {
            throw new ServiceException(ErrorCode.MANUAL_PACKAGE_DETAIL_EMPTY, HttpStatus.BAD_REQUEST);
        }
        requireText(request.getSourceApplication(), "sourceApplication is required",
                ErrorCode.MANUAL_PACKAGE_REQUEST_EMPTY);
        requireText(request.getMarketId(), "marketId is required", ErrorCode.MANUAL_PACKAGE_INCONSISTENT_DETAIL);
        maxLength(request.getMarketId(), 2, "marketId max length is 2",
                ErrorCode.MANUAL_PACKAGE_INCONSISTENT_DETAIL);
        require(request.getInvestorId(), "investorId is required", ErrorCode.MANUAL_PACKAGE_INCONSISTENT_DETAIL);
        require(request.getParticipantId(), "participantId is required", ErrorCode.MANUAL_PACKAGE_INCONSISTENT_DETAIL);
        require(request.getInvestorAccountId(), "investorAccountId is required",
                ErrorCode.MANUAL_PACKAGE_INCONSISTENT_DETAIL);
        require(request.getIsinNumberId(), "isinNumberId is required", ErrorCode.MANUAL_PACKAGE_INCONSISTENT_DETAIL);
        require(request.getSecurityId(), "securityId is required", ErrorCode.MANUAL_PACKAGE_INCONSISTENT_DETAIL);
        require(request.getTypeId(), "typeId is required", ErrorCode.MANUAL_PACKAGE_INCONSISTENT_DETAIL);
        requireText(request.getDepositoryId(), "depositoryId is required",
                ErrorCode.MANUAL_PACKAGE_INCONSISTENT_DETAIL);
        require(request.getCustodianId(), "custodianId is required", ErrorCode.MANUAL_PACKAGE_INCONSISTENT_DETAIL);
        validateSide(request.getSideId(), ErrorCode.MANUAL_PACKAGE_INCONSISTENT_DETAIL);
        validateReferencePackage(request.getReferencePackage(), ErrorCode.MANUAL_PACKAGE_INCONSISTENT_DETAIL);
        Set<String> requestDetailKeys = new HashSet<>();
        for (PackageCustodianManualDetailInDto detail : request.getDetails()) {
            validateManualDetail(request, detail, requestDetailKeys);
        }
    }

    private void validateManualDetail(PackageCustodianManualInDto request, PackageCustodianManualDetailInDto detail,
                                      Set<String> requestDetailKeys) {
        if (detail == null) {
            throw new ServiceException(ErrorCode.MANUAL_PACKAGE_INCONSISTENT_DETAIL,
                    HttpStatus.UNPROCESSABLE_ENTITY);
        }
        require(detail.getTradeId(), "detail tradeId is required", ErrorCode.MANUAL_PACKAGE_INCONSISTENT_DETAIL);
        require(detail.getFraction(), "detail fraction is required", ErrorCode.MANUAL_PACKAGE_INCONSISTENT_DETAIL);
        require(detail.getMatchDate(), "detail matchDate is required", ErrorCode.MANUAL_PACKAGE_INCONSISTENT_DETAIL);
        require(detail.getUniqueFractionId(), "detail uniqueFractionId is required",
                ErrorCode.MANUAL_PACKAGE_INCONSISTENT_DETAIL);
        require(detail.getInvestorId(), "detail investorId is required", ErrorCode.MANUAL_PACKAGE_INCONSISTENT_DETAIL);
        require(detail.getParticipantId(), "detail participantId is required",
                ErrorCode.MANUAL_PACKAGE_INCONSISTENT_DETAIL);
        require(detail.getClearingDate(), "detail clearingDate is required",
                ErrorCode.MANUAL_PACKAGE_INCONSISTENT_DETAIL);
        validateSide(detail.getSideId(), ErrorCode.MANUAL_PACKAGE_INCONSISTENT_DETAIL);
        String headerReference = normalizeReferencePackage(request.getReferencePackage());
        String detailReference = normalizeReferencePackage(detail.getReferencePackage());
        validateReferencePackage(detailReference, ErrorCode.MANUAL_PACKAGE_INCONSISTENT_DETAIL);
        if (!Objects.equals(request.getParticipantId(), detail.getParticipantId())
                || !Objects.equals(request.getInvestorId(), detail.getInvestorId())
                || !Objects.equals(request.getSideId(), detail.getSideId())
                || (detail.getCustodianId() != null && !Objects.equals(request.getCustodianId(), detail.getCustodianId()))
                || !Objects.equals(request.getFicAdministratorId(), detail.getFicAdministratorId())
                || !Objects.equals(headerReference, detailReference)) {
            throw new ServiceException(ErrorCode.MANUAL_PACKAGE_INCONSISTENT_DETAIL,
                    HttpStatus.UNPROCESSABLE_ENTITY);
        }
        String key = request.getMarketId() + "|" + detail.getTradeId() + "|" + detail.getSideId()
                + "|" + detail.getFraction() + "|" + detail.getUniqueFractionId();
        if (!requestDetailKeys.add(key)) {
            throw new ServiceException(ErrorCode.PACKAGE_DETAIL_ALREADY_EXISTS, HttpStatus.CONFLICT);
        }
        if (packageDetailRepository.existsByUniqueFractionId(detail.getUniqueFractionId())) {
            throw new ServiceException(ErrorCode.PACKAGE_DETAIL_ALREADY_EXISTS, HttpStatus.CONFLICT);
        }
    }

    private PackageCustodianAutomaticInDto.PackageInDto toAutomaticPackageInput(PackageCustodianManualInDto request) {
        return PackageCustodianAutomaticInDto.PackageInDto.builder()
                .marketId(request.getMarketId())
                .codeSCB(request.getCodeSCB())
                .sideId(request.getSideId())
                .investorDocumentNumber(request.getInvestorDocumentNumber())
                .referencePackage(normalizeReferencePackage(request.getReferencePackage()))
                .investorId(request.getInvestorId())
                .participantId(request.getParticipantId())
                .investorAccountId(request.getInvestorAccountId())
                .isinNumberId(request.getIsinNumberId())
                .securityId(request.getSecurityId())
                .typeId(request.getTypeId())
                .depositoryId(request.getDepositoryId())
                .clearingDate(request.getClearingDate())
                .returnClearingDate(request.getReturnClearingDate())
                .custodianStatusId(request.getCustodianStatusId())
                .custodianId(request.getCustodianId())
                .ficAdministratorId(request.getFicAdministratorId())
                .totalFractionQuantity(request.getTotalFractionQuantity())
                .averagePrice(request.getAveragePrice())
                .totalFractionVolume(request.getTotalFractionVolume())
                .totalNetAmount(request.getTotalNetAmount())
                .totalCommissionAmount(request.getTotalCommissionAmount())
                .totalValTaxAmount(request.getTotalValTaxAmount())
                .clearingPercentage(request.getClearingPercentage())
                .averageFractionVolume(request.getAverageFractionVolume())
                .returnNetAmount(request.getReturnNetAmount())
                .averageRate(request.getAverageRate())
                .details(request.getDetails().stream()
                        .map(this::toAutomaticDetailInput)
                        .toList())
                .build();
    }

    private PackageCustodianAutomaticInDto.DetailInDto toAutomaticDetailInput(PackageCustodianManualDetailInDto detail) {
        return PackageCustodianAutomaticInDto.DetailInDto.builder()
                .tradeId(detail.getTradeId())
                .sideId(detail.getSideId())
                .fraction(detail.getFraction())
                .matchDate(detail.getMatchDate())
                .uniqueFractionId(detail.getUniqueFractionId())
                .investorId(detail.getInvestorId())
                .custodianId(detail.getCustodianId())
                .participantId(detail.getParticipantId())
                .ficAdministratorId(detail.getFicAdministratorId())
                .clearingDate(detail.getClearingDate())
                .returnClearingDate(detail.getReturnClearingDate())
                .fractionQuantity(detail.getFractionQuantity())
                .price(detail.getPrice())
                .rate(detail.getRate())
                .indicateExitReturn(detail.getIndicateExitReturn())
                .referencePackage(normalizeReferencePackage(detail.getReferencePackage()))
                .build();
    }

    private void validateAutomaticPackage(PackageCustodianAutomaticInDto.PackageInDto input,
                                          LocalDate packageDate, Set<String> requestDetailKeys) {
        if (input == null || input.getDetails() == null || input.getDetails().isEmpty()) {
            throw new ServiceException(ErrorCode.AUTOMATIC_PACKAGE_DETAIL_EMPTY, HttpStatus.BAD_REQUEST);
        }
        String packageReference = normalizeReferencePackage(input.getReferencePackage());
        validateReferencePackage(packageReference);
        Set<Long> physicalDetailIds = new HashSet<>();
        for (PackageCustodianAutomaticInDto.DetailInDto detail : input.getDetails()) {
            // The supplied DDL keys a detail by header/market/packageDate/uniqueFractionId.
            if (!physicalDetailIds.add(detail.getUniqueFractionId())) {
                throw new ServiceException(ErrorCode.PACKAGE_DETAIL_ALREADY_EXISTS, HttpStatus.CONFLICT);
            }
            String detailReference = normalizeReferencePackage(detail.getReferencePackage());
            validateReferencePackage(detailReference);
            if (!input.getParticipantId().equals(detail.getParticipantId())
                    || !input.getInvestorId().equals(detail.getInvestorId())
                    || !input.getSideId().equals(detail.getSideId())
                    || (detail.getCustodianId() != null && !input.getCustodianId().equals(detail.getCustodianId()))
                    || !Objects.equals(input.getFicAdministratorId(), detail.getFicAdministratorId())
                    || !Objects.equals(packageReference, detailReference)) {
                throw new ServiceException(ErrorCode.AUTOMATIC_PACKAGE_INCONSISTENT_DETAIL,
                        HttpStatus.UNPROCESSABLE_ENTITY);
            }
            String key = input.getMarketId() + "|" + packageDate + "|" + detail.getTradeId() + "|"
                    + detail.getSideId() + "|" + detail.getFraction();
            if (!requestDetailKeys.add(key)) {
                throw new ServiceException(ErrorCode.PACKAGE_DETAIL_ALREADY_EXISTS, HttpStatus.CONFLICT);
            }
        }
    }

    private AutomaticCutType validateAutomaticCut(String cutType, Boolean sameDaySettlement) {
        AutomaticCutType automaticCutType = AutomaticCutType.from(cutType)
                .orElseThrow(() -> new ServiceException(ErrorCode.AUTOMATIC_PACKAGE_INCONSISTENT_DETAIL,
                        HttpStatus.UNPROCESSABLE_ENTITY));
        if (!automaticCutType.isCompatibleWith(sameDaySettlement)) {
            throw new ServiceException(ErrorCode.AUTOMATIC_PACKAGE_INCONSISTENT_DETAIL,
                    HttpStatus.UNPROCESSABLE_ENTITY);
        }
        return automaticCutType;
    }

    private java.util.Optional<PackageCustodianEntity> findCompatiblePackage(
            PackageCustodianAutomaticInDto.PackageInDto input, LocalDate packageDate, AutomaticCutType cutType) {
        if (!cutType.isReprocessCut()) {
            return java.util.Optional.empty();
        }
        return packageCustodianRepository.findCompatiblePackageCustodianId(
                        packageDate,
                        getAutomaticPackagingFinalStatusId(),
                        input.getMarketId(),
                        input.getSideId(),
                        input.getClearingDate(),
                        input.getSecurityId(),
                        input.getDepositoryId(),
                        input.getTypeId(),
                        input.getIsinNumberId(),
                        input.getInvestorId(),
                        input.getInvestorAccountId(),
                        input.getParticipantId(),
                        input.getCustodianId(),
                        input.getFicAdministratorId(),
                        normalizeReferencePackage(input.getReferencePackage()))
                .flatMap(packageCustodianRepository::findByIdForAutomaticPackagingUpdate)
                .filter(packageEntity -> {
                    List<Long> uniqueFractionIds = input.getDetails().stream()
                            .map(PackageCustodianAutomaticInDto.DetailInDto::getUniqueFractionId)
                            .filter(Objects::nonNull)
                            .distinct()
                            .toList();
                    int chunkSize = validatedQueryChunkSize();
                    for (int start = 0; start < uniqueFractionIds.size(); start += chunkSize) {
                        if (packageDetailRepository.existsRejectedByPackageCustodianIdAndUniqueFractionIds(
                                packageEntity.getPackageCustodianId(),
                                uniqueFractionIds.subList(start, Math.min(start + chunkSize, uniqueFractionIds.size())),
                                getRejectedPackageDetailStatusId())) {
                            return false;
                        }
                    }
                    return true;
                });
    }


    private void updateExistingHeader(PackageCustodianEntity header, PackageCustodianAutomaticInDto.PackageInDto input,
                                      long existingDetailCount, String user, String applic, OffsetDateTime auditDate, String ip) {
        BigDecimal previousTotalQuantity = header.getTotalFractionQuantity();
        header.setTotalFractionQuantity(sum(header.getTotalFractionQuantity(), input.getTotalFractionQuantity()));
        header.setTotalFractionVolume(sum(header.getTotalFractionVolume(), input.getTotalFractionVolume()));
        header.setTotalNetAmount(sum(header.getTotalNetAmount(), input.getTotalNetAmount()));
        header.setTotalCommissionAmount(sum(header.getTotalCommissionAmount(), input.getTotalCommissionAmount()));
        header.setTotalValTaxAmount(sum(header.getTotalValTaxAmount(), input.getTotalValTaxAmount()));
        header.setReturnNetAmount(sum(header.getReturnNetAmount(), input.getReturnNetAmount()));
        header.setAveragePrice(weightedAverage(header.getAveragePrice(), previousTotalQuantity,
                input.getAveragePrice(), input.getTotalFractionQuantity()));
        header.setAverageRate(weightedAverage(header.getAverageRate(), previousTotalQuantity,
                input.getAverageRate(), input.getTotalFractionQuantity()));
        long newDetailCount = input.getDetails() == null ? 0L : input.getDetails().size();
        header.setAverageFractionVolume(averageByCount(header.getAverageFractionVolume(), existingDetailCount,
                input.getAverageFractionVolume(), newDetailCount));
        header.setClearingPercentage(input.getClearingPercentage());
        header.setReferencePackage(normalizeReferencePackage(input.getReferencePackage()));
        header.setPackageStatusId(getAutomaticPackagingFinalStatusId());
        header.setLastModifyUser(user);
        header.setLastModifyApplic(applic);
        header.setLastModifyDate(auditDate);
        header.setLastModifyIp(ip);
    }

    private String buildPackageNumber(LocalDate date, String participantCode, Long typeId, Long sequence) {
        return buildPackageNumber(date, participantCode, typeId, sequence,
                ErrorCode.AUTOMATIC_PACKAGE_INCONSISTENT_DETAIL);
    }

    private String buildPackageNumber(LocalDate date, String participantCode, Long typeId, Long sequence,
                                      ErrorCode errorCode) {
        if (date == null || participantCode == null || participantCode.isBlank()
                || typeId == null || sequence == null) {
            throw new ServiceException(errorCode, HttpStatus.UNPROCESSABLE_ENTITY);
        }
        String packageNumber = date.format(DateTimeFormatter.ofPattern("ddMMyyyy"))
                + String.format("%3s", participantCode).replace(' ', '0')
                + PACKAGE_OPERATION_DIGIT_RV + String.format("%06d", sequence);
        if (packageNumber.length() != 18) {
            throw new ServiceException(errorCode, HttpStatus.UNPROCESSABLE_ENTITY);
        }
        return packageNumber;
    }

    private String getParticipantCode(ParticipantEntity participant) {
        String participantCode = toThreeDigitParticipantCode(participant.getCode());
        if (participantCode == null) {
            return "000";
        }
        return participantCode;
    }

    private String toThreeDigitParticipantCode(String participantCode) {
        if (participantCode == null || participantCode.isBlank()) {
            return null;
        }
        String trimmed = participantCode.trim();
        return trimmed.length() <= 3 ? trimmed : trimmed.substring(trimmed.length() - 3);
    }

    private PackageCustodianEntity savePackageCustodian(PackageCustodianEntity entity) {
        validatePackageCustodianEntity(entity);
        if (entity.getPackageCustodianId() != null
                && packageCustodianRepository.existsByPackageCustodianId(entity.getPackageCustodianId())) {
            log.error("PACKAGE_CUSTODIAN_ID already exists before persistence. packageCustodianId={}, marketId={}, packageDate={}",
                    entity.getPackageCustodianId(), entity.getMarketId(), entity.getPackageDate());
            throw new ServiceException(ErrorCode.PACKAGE_CUSTODIAN_CREATION_FAILED, HttpStatus.CONFLICT);
        }
        try {
            entity.setOldInvestorAccountId(entity.getInvestorAccountId());
            PackageCustodianEntity saved = packageCustodianRepository.save(entity);
            if (saved.getPackageCustodianId() == null) {
                log.error("PACKAGE_CUSTODIAN_ID was not generated after persistence. marketId={}, packageDate={}",
                        saved.getMarketId(), saved.getPackageDate());
                throw new ServiceException(ErrorCode.PACKAGE_CUSTODIAN_CREATION_FAILED, HttpStatus.CONFLICT);
            }
            return saved;
        } catch (DataIntegrityViolationException ex) {
            throw new ServiceException(ErrorCode.PACKAGE_CUSTODIAN_CREATION_FAILED, HttpStatus.CONFLICT, ex);
        }
    }

    private void saveExistingPackageCustodianUpdate(PackageCustodianEntity entity) {
        validatePackageCustodianEntity(entity);
        try {
            packageCustodianRepository.save(entity);
        } catch (DataIntegrityViolationException ex) {
            throw new ServiceException(ErrorCode.PACKAGE_CUSTODIAN_CREATION_FAILED, HttpStatus.CONFLICT, ex);
        }
    }


    private int validatedQueryChunkSize() {
        int size = propertiesConfig.getAutomaticPackagingPackageDetailQueryChunkSize();
        // Reserve the two extra binds in rejected-detail checks; IN padding is disabled in application.yml.
        if (size < 1 || size > 50_000) {
            throw new IllegalStateException("automatic-packaging.package-detail-query-chunk-size must be between 1 and 50000");
        }
        return size;
    }

    private void persistAutomaticDetailBatch(List<PackageDetailEntity> details,
            List<PackageDetailHistoryEntity> histories, String user, String applic,
            OffsetDateTime date, String ip) {
        // JDBC entities are never attached to Hibernate. All batches use the surrounding transaction.
        details.forEach(this::validatePackageDetailEntity);
        histories.forEach(this::validatePackageDetailHistoryEntity);
        packageDetailNativeRepository.insertBatch(details);
        // The repository locks and verifies every complete settlement identity and its final status.
        // Its result counts physical changes only; zero is valid when all rows are already transferred.
        // Missing/duplicate identities or an inconsistent update throw and roll back this transaction.
        settlementNativeRepository.updateCustodianStatusBatch(details,
                StatusEnum.CUSTODIAN_TRANSFERRED.getId(), user, applic, date, ip);
        packageDetailHistoryNativeRepository.insertBatch(histories);
    }

    private Map<Long, ParticipantEntity> preloadParticipants(PackageCustodianAutomaticInDto request) {
        Set<Long> participantIds = request.getPackages().stream()
                .filter(Objects::nonNull)
                .map(PackageCustodianAutomaticInDto.PackageInDto::getParticipantId)
                .filter(Objects::nonNull)
                .collect(Collectors.toSet());
        if (participantIds.isEmpty()) {
            return Collections.emptyMap();
        }
        Map<Long, ParticipantEntity> participantsById = new HashMap<>();
        List<Long> ids = new ArrayList<>(participantIds);
        int chunkSize = validatedQueryChunkSize();
        for (int start = 0; start < ids.size(); start += chunkSize) {
            participantRepository.findAllById(ids.subList(start, Math.min(start + chunkSize, ids.size())))
                    .stream().filter(participant -> participant.getParticipantId() != null)
                    .forEach(participant -> participantsById.put(participant.getParticipantId(), participant));
        }
        participantIds.stream()
                .filter(participantId -> !participantsById.containsKey(participantId))
                .forEach(participantId -> participantRepository.findById(participantId)
                        .ifPresent(participant -> participantsById.put(participantId, participant)));
        return participantsById;
    }

    private Map<Long, List<Long>> preloadActiveDetailsByUniqueFractionId(PackageCustodianAutomaticInDto request) {
        Set<Long> ids = request.getPackages().stream().flatMap(pkg -> pkg.getDetails().stream())
                .map(PackageCustodianAutomaticInDto.DetailInDto::getUniqueFractionId)
                .filter(Objects::nonNull).collect(Collectors.toCollection(LinkedHashSet::new));
        return findActiveDetailsInChunks(ids);
    }
    Map<Long, List<Long>> findActiveDetailsInChunks(Collection<Long> uniqueFractionIds) {
        int chunkSize = validatedQueryChunkSize();
        if (chunkSize < 1 || chunkSize > 50_000) {
            throw new IllegalStateException(
                    "automatic-packaging.package-detail-query-chunk-size must be between 1 and 50000");
        }

        // IN ignores duplicate IDs. Preserve encounter order while querying each ID once.
        Collection<Long> distinctIdsInOrder = uniqueFractionIds instanceof LinkedHashSet
                ? uniqueFractionIds : new LinkedHashSet<>(uniqueFractionIds);
        List<Long> distinctIds = new ArrayList<>(distinctIdsInOrder);
        int queryCount = (int) (((long) distinctIds.size() + chunkSize - 1) / chunkSize);
        log.info("PACKAGE_DETAIL_EXISTENCE_LOOKUP totalUniqueFractionIds={}, queryChunkSize={}, queryCount={}",
                distinctIds.size(), chunkSize, queryCount);

        if (distinctIds.isEmpty()) {
            return Collections.emptyMap();
        }

        Map<Long, List<Long>> activeDetailsById = new HashMap<>();
        Map<Long, List<Long>> canonicalMemberships = new HashMap<>();
        Long rejectedStatusId = getRejectedPackageDetailStatusId();
        for (int start = 0; start < distinctIds.size();) {
            int end = (int) Math.min((long) start + chunkSize, distinctIds.size());
            var found = packageDetailRepository.findActiveHeaderIdsByUniqueFractionIds(
                    distinctIds.subList(start, end), rejectedStatusId);
            for (var detail : found) {
                // Retain scalar header memberships only; no managed detail entities.

                Long headerId = detail.packageCustodianId();
                List<Long> singleton = canonicalMemberships.computeIfAbsent(headerId, List::of);
                activeDetailsById.compute(detail.uniqueFractionId(), (id, headers) -> {
                    if (headers == null) return singleton;
                    if (headers.contains(headerId)) return headers;
                    List<Long> merged = new ArrayList<>(headers);
                    merged.add(singleton.get(0));
                    return List.copyOf(merged);
                });
            }
            log.debug("PACKAGE_DETAIL_EXISTENCE_LOOKUP chunkIndex={}, chunkSize={}",
                    start / chunkSize + 1, end - start);
            start = end;
        }
        return activeDetailsById;
    }

    private Map<Long, Long> preloadExistingDetailCounts(Set<Long> packageCustodianIds) {
        if (packageCustodianIds.isEmpty()) {
            return Collections.emptyMap();
        }
        List<Object[]> countRows = new ArrayList<>();
        List<Long> ids = new ArrayList<>(packageCustodianIds);
        int chunkSize = validatedQueryChunkSize();
        for (int start = 0; start < ids.size(); start += chunkSize) {
            List<Object[]> rows = packageDetailRepository.countByIdPackageCustodianIdIn(
                    ids.subList(start, Math.min(start + chunkSize, ids.size())));
            if (rows != null) countRows.addAll(rows);
        }
        if (countRows == null || countRows.isEmpty()) {
            return Collections.emptyMap();
        }
        return countRows
                .stream()
                .collect(Collectors.toMap(
                        row -> ((Number) row[0]).longValue(),
                        row -> ((Number) row[1]).longValue()));
    }

    private void savePackageCustodianHistory(PackageCustodianHistoryEntity history) {
        validatePackageCustodianHistoryEntity(history);
        try {
            packageCustodianHistoryRepository.save(history);
        } catch (DataIntegrityViolationException ex) {
            throw new ServiceException(ErrorCode.PACKAGE_CUSTODIAN_HISTORY_CREATION_FAILED,
                    HttpStatus.CONFLICT, ex);
        }
    }

    private PackageCustodianEntity buildAutomaticHeader(PackageCustodianAutomaticInDto.PackageInDto i,
                                                        LocalDate date, String participantCode, Long sequence, String number, String user,
                                                        String applic, OffsetDateTime auditDate, String ip) {
        return PackageCustodianEntity.builder().marketId(i.getMarketId())
                .codeSCB(toThreeDigitParticipantCode(i.getCodeSCB()))
                .packageDate(date).participantCode(participantCode).sequence(sequence).packageNumber(number)
                .sideId(i.getSideId()).investorId(i.getInvestorId()).participantId(i.getParticipantId())
                .investorAccountId(i.getInvestorAccountId()).isinNumberId(i.getIsinNumberId())
                .securityId(i.getSecurityId()).typeId(i.getTypeId()).depositoryId(i.getDepositoryId())
                .clearingDate(i.getClearingDate()).returnClearingDate(i.getReturnClearingDate())
                .packageStatusId(getAutomaticPackagingFinalStatusId()).custodianId(i.getCustodianId())
                .referencePackage(normalizeReferencePackage(i.getReferencePackage()))
                .ficAdministratorId(i.getFicAdministratorId()).totalFractionQuantity(i.getTotalFractionQuantity())
                .averagePrice(i.getAveragePrice()).totalFractionVolume(i.getTotalFractionVolume())
                .totalNetAmount(i.getTotalNetAmount()).totalCommissionAmount(i.getTotalCommissionAmount())
                .totalValTaxAmount(i.getTotalValTaxAmount()).clearingPercentage(i.getClearingPercentage())
                .averageFractionVolume(i.getAverageFractionVolume()).returnNetAmount(i.getReturnNetAmount())
                .averageRate(i.getAverageRate()).lastModifyUser(user).lastModifyApplic(applic)
                .lastModifyDate(auditDate).lastModifyIp(ip).build();
    }

    private PackageCustodianHistoryEntity buildHeaderHistory(PackageCustodianEntity h,
                                                             PackageCustodianAutomaticInDto.PackageInDto i, LocalDateTime eventTime, String user,
                                                             String applic, OffsetDateTime auditDate, String ip) {
        return PackageCustodianHistoryEntity.builder()
                .id(new PackageCustodianHistoryId(h.getPackageCustodianId(), h.getMarketId(),
                        h.getPackageDate(), eventTime))
                .participantCode(h.getParticipantCode()).sequence(h.getSequence()).codeSCB(h.getCodeSCB())
                .packageNumber(h.getPackageNumber()).sideId(h.getSideId()).investorId(h.getInvestorId())
                .generatingParticipantId(h.getParticipantId()).investorAccountId(h.getInvestorAccountId())
                .custodianStatusId(h.getPackageStatusId()).custodianId(h.getCustodianId())
                .ficAdministratorId(h.getFicAdministratorId()).totalFractionQuantity(h.getTotalFractionQuantity())
                .totalFractionVolume(h.getTotalFractionVolume()).totalNetAmount(h.getTotalNetAmount())
                .totalCommissionAmount(h.getTotalCommissionAmount()).totalValTaxAmount(h.getTotalValTaxAmount())
                .averagePrice(h.getAveragePrice()).clearingDate(h.getClearingDate())
                .returnClearingDate(h.getReturnClearingDate()).averageFractionVolume(h.getAverageFractionVolume())
                .averageRate(h.getAverageRate()).returnNetAmount(h.getReturnNetAmount()).lastModifyUser(user)
                .lastModifyApplic(applic).lastModifyDate(auditDate).lastModifyIp(ip).build();
    }

    private PackageDetailHistoryEntity buildDetailHistory(PackageCustodianEntity h,
                                                          PackageCustodianAutomaticInDto.PackageInDto i,
                                                          PackageCustodianAutomaticInDto.DetailInDto d,
                                                          PackageDetailEntity packageDetail,
                                                          String participantCode, String number,
                                                          Long sequence, LocalDateTime statusTime, String user, String applic, OffsetDateTime auditDate,
                                                          String ip) {
        return PackageDetailHistoryEntity.builder()
                .id(new PackageDetailHistoryId(h.getPackageCustodianId(), h.getMarketId(),
                        h.getPackageDate(), statusTime))
                .participantCode(participantCode).sequence(sequence).packageNumber(number)
                .packageEventId(packageDetail.getPackageStatusId())
                .tradeId(d.getTradeId()).sideId(d.getSideId()).fraction(d.getFraction())
                .uniqueFractionId(d.getUniqueFractionId()).matchDate(d.getMatchDate())
                .clearingDate(d.getClearingDate()).returnClearingDate(d.getReturnClearingDate())
                .fractionQuantity(d.getFractionQuantity()).price(d.getPrice()).rate(d.getRate())
                .indicateExitReturn(d.getIndicateExitReturn()).custodianId(d.getCustodianId())
                .participantId(d.getParticipantId()).lastModifyUser(user).lastModifyApplic(applic)
                .lastModifyDate(auditDate).lastModifyIp(ip).build();
    }

    private Long getAutomaticPackagingFinalStatusId() {
        return propertiesConfig.getAutomaticPackagingPackageFinalStatusId();
    }

    private Long getRejectedPackageDetailStatusId() {
        return propertiesConfig.getAutomaticPackagingPackageDetailRejectedStatusId();
    }

    private PackageCustodianAutomaticInDto.PackageInDto sliceInputForInsertedDetails(
            PackageCustodianAutomaticInDto.PackageInDto input, List<PackageCustodianAutomaticInDto.DetailInDto> newDetails) {
        BigDecimal inputQuantity = zeroIfNull(input.getTotalFractionQuantity());
        BigDecimal newQuantity = newDetails.stream()
                .map(PackageCustodianAutomaticInDto.DetailInDto::getFractionQuantity)
                .map(this::zeroIfNull)
                .reduce(BigDecimal.ZERO, BigDecimal::add)
                .setScale(4, RoundingMode.HALF_UP);
        BigDecimal totalVolume = prorate(input.getTotalFractionVolume(), inputQuantity, newQuantity);

        return PackageCustodianAutomaticInDto.PackageInDto.builder()
                .marketId(input.getMarketId())
                .codeSCB(input.getCodeSCB())
                .sideId(input.getSideId())
                .investorDocumentNumber(input.getInvestorDocumentNumber())
                .referencePackage(input.getReferencePackage())
                .investorId(input.getInvestorId())
                .participantId(input.getParticipantId())
                .investorAccountId(input.getInvestorAccountId())
                .isinNumberId(input.getIsinNumberId())
                .securityId(input.getSecurityId())
                .typeId(input.getTypeId())
                .depositoryId(input.getDepositoryId())
                .clearingDate(input.getClearingDate())
                .returnClearingDate(input.getReturnClearingDate())
                .custodianStatusId(input.getCustodianStatusId())
                .custodianId(input.getCustodianId())
                .ficAdministratorId(input.getFicAdministratorId())
                .totalFractionQuantity(newQuantity)
                .averagePrice(averageDetail(newDetails, PackageCustodianAutomaticInDto.DetailInDto::getPrice))
                .totalFractionVolume(totalVolume)
                .totalNetAmount(prorate(input.getTotalNetAmount(), inputQuantity, newQuantity))
                .totalCommissionAmount(prorate(input.getTotalCommissionAmount(), inputQuantity, newQuantity))
                .totalValTaxAmount(prorate(input.getTotalValTaxAmount(), inputQuantity, newQuantity))
                .clearingPercentage(input.getClearingPercentage())
                .averageFractionVolume(averageVolume(totalVolume, newDetails.size()))
                .returnNetAmount(prorate(input.getReturnNetAmount(), inputQuantity, newQuantity))
                .averageRate(averageDetail(newDetails, PackageCustodianAutomaticInDto.DetailInDto::getRate))
                .details(newDetails)
                .build();
    }

    private String detailKey(Long tradeId, String sideId, Long fraction) {
        return tradeId + "|" + sideId + "|" + fraction;
    }

    private BigDecimal prorate(BigDecimal total, BigDecimal totalQuantity, BigDecimal selectedQuantity) {
        if (totalQuantity == null || totalQuantity.compareTo(BigDecimal.ZERO) == 0) {
            return zeroIfNull(total).setScale(4, RoundingMode.HALF_UP);
        }
        return zeroIfNull(total)
                .multiply(zeroIfNull(selectedQuantity))
                .divide(totalQuantity, 4, RoundingMode.HALF_UP);
    }

    private BigDecimal averageVolume(BigDecimal totalVolume, int count) {
        if (count == 0) {
            return BigDecimal.ZERO.setScale(4, RoundingMode.HALF_UP);
        }
        return zeroIfNull(totalVolume).divide(BigDecimal.valueOf(count), 4, RoundingMode.HALF_UP);
    }

    private BigDecimal averageDetail(List<PackageCustodianAutomaticInDto.DetailInDto> details,
                                     java.util.function.Function<PackageCustodianAutomaticInDto.DetailInDto, BigDecimal> mapper) {
        if (details == null || details.isEmpty()) {
            return BigDecimal.ZERO.setScale(4, RoundingMode.HALF_UP);
        }
        return details.stream()
                .map(mapper)
                .map(this::zeroIfNull)
                .reduce(BigDecimal.ZERO, BigDecimal::add)
                .divide(BigDecimal.valueOf(details.size()), 4, RoundingMode.HALF_UP);
    }

    private BigDecimal sum(BigDecimal left, BigDecimal right) {
        return zeroIfNull(left).add(zeroIfNull(right)).setScale(4, RoundingMode.HALF_UP);
    }

    private BigDecimal weightedAverage(BigDecimal currentAverage, BigDecimal currentQuantity,
                                       BigDecimal incomingAverage, BigDecimal incomingQuantity) {
        BigDecimal currentQty = zeroIfNull(currentQuantity);
        BigDecimal incomingQty = zeroIfNull(incomingQuantity);
        BigDecimal totalQty = currentQty.add(incomingQty);
        if (totalQty.compareTo(BigDecimal.ZERO) == 0) {
            return averageByCount(currentAverage, 1L, incomingAverage, 1L);
        }
        return zeroIfNull(currentAverage).multiply(currentQty)
                .add(zeroIfNull(incomingAverage).multiply(incomingQty))
                .divide(totalQty, 4, RoundingMode.HALF_UP);
    }

    private BigDecimal averageByCount(BigDecimal currentAverage, long currentCount,
                                      BigDecimal incomingAverage, long incomingCount) {
        long totalCount = currentCount + incomingCount;
        if (totalCount == 0) {
            return BigDecimal.ZERO.setScale(4, RoundingMode.HALF_UP);
        }
        return zeroIfNull(currentAverage).multiply(BigDecimal.valueOf(currentCount))
                .add(zeroIfNull(incomingAverage).multiply(BigDecimal.valueOf(incomingCount)))
                .divide(BigDecimal.valueOf(totalCount), 4, RoundingMode.HALF_UP);
    }

    private BigDecimal zeroIfNull(BigDecimal value) {
        return value == null ? BigDecimal.ZERO : value;
    }

    private PackageCustodianAutomaticOutDto.ProcessedDetailDto buildProcessedDetail(PackageCustodianEntity h,
                                                                                    PackageCustodianAutomaticInDto.PackageInDto i, PackageCustodianAutomaticInDto.DetailInDto d,
                                                                                    String participantCode, String number) {
        return PackageCustodianAutomaticOutDto.ProcessedDetailDto.builder()
                .packageCustodianId(h.getPackageCustodianId())
                .packageNumber(number)
                .marketId(h.getMarketId())
                .packageDate(h.getPackageDate())
                .tradeId(d.getTradeId())
                .sideId(d.getSideId())
                .fraction(d.getFraction())
                .uniqueFractionId(d.getUniqueFractionId())
                .investorId(d.getInvestorId())
                .participantId(d.getParticipantId())
                .custodianId(d.getCustodianId())
                .ficAdministratorId(i.getFicAdministratorId())
                .build();
    }

    private void validatePackageCustodianEntity(PackageCustodianEntity entity) {
        require(entity, "PACKAGE_CUSTODIAN entity is required", ErrorCode.PACKAGE_CUSTODIAN_CREATION_FAILED);
        requireText(entity.getMarketId(), "marketId is required", ErrorCode.PACKAGE_CUSTODIAN_CREATION_FAILED);
        maxLength(entity.getMarketId(), 2, "marketId max length is 2", ErrorCode.PACKAGE_CUSTODIAN_CREATION_FAILED);
        require(entity.getPackageDate(), "packageDate is required", ErrorCode.PACKAGE_CUSTODIAN_CREATION_FAILED);
        requireText(entity.getParticipantCode(), "participantCode is required", ErrorCode.PACKAGE_CUSTODIAN_CREATION_FAILED);
        maxLength(entity.getParticipantCode(), 6, "participantCode max length is 6", ErrorCode.PACKAGE_CUSTODIAN_CREATION_FAILED);
        require(entity.getSequence(), "sequence is required", ErrorCode.PACKAGE_CUSTODIAN_CREATION_FAILED);
        maxLength(entity.getCodeSCB(), 3, "codeSCB max length is 3", ErrorCode.PACKAGE_CUSTODIAN_CREATION_FAILED);
        requireText(entity.getPackageNumber(), "packageNumber is required", ErrorCode.PACKAGE_CUSTODIAN_CREATION_FAILED);
        exactLength(entity.getPackageNumber(), 18, "packageNumber length must be 18", ErrorCode.PACKAGE_CUSTODIAN_CREATION_FAILED);
        validateSide(entity.getSideId(), ErrorCode.PACKAGE_CUSTODIAN_CREATION_FAILED);
        require(entity.getInvestorId(), "investorId is required", ErrorCode.PACKAGE_CUSTODIAN_CREATION_FAILED);
        require(entity.getParticipantId(), "participantId is required", ErrorCode.PACKAGE_CUSTODIAN_CREATION_FAILED);
        require(entity.getInvestorAccountId(), "investorAccountId is required", ErrorCode.PACKAGE_CUSTODIAN_CREATION_FAILED);
        require(entity.getIsinNumberId(), "isinNumberId is required", ErrorCode.PACKAGE_CUSTODIAN_CREATION_FAILED);
        require(entity.getSecurityId(), "securityId is required", ErrorCode.PACKAGE_CUSTODIAN_CREATION_FAILED);
        require(entity.getTypeId(), "typeId is required", ErrorCode.PACKAGE_CUSTODIAN_CREATION_FAILED);
        requireText(entity.getDepositoryId(), "depositoryId is required", ErrorCode.PACKAGE_CUSTODIAN_CREATION_FAILED);
        maxLength(entity.getDepositoryId(), 2, "depositoryId max length is 2", ErrorCode.PACKAGE_CUSTODIAN_CREATION_FAILED);
        maxLength(entity.getReferencePackage(), 10, "referencePackage max length is 10",
                ErrorCode.PACKAGE_CUSTODIAN_CREATION_FAILED);
        require(entity.getCustodianId(), "custodianId is required", ErrorCode.PACKAGE_CUSTODIAN_CREATION_FAILED);
        validateNumeric6x4(entity.getClearingPercentage(), ErrorCode.PACKAGE_CUSTODIAN_CREATION_FAILED);
        validateAudit(entity.getLastModifyUser(), entity.getLastModifyApplic(), entity.getLastModifyDate(),
                entity.getLastModifyIp(), ErrorCode.PACKAGE_CUSTODIAN_CREATION_FAILED);
    }

    private void validatePackageDetailEntity(PackageDetailEntity entity) {
        require(entity, "PACKAGE_DETAIL entity is required", ErrorCode.PACKAGE_DETAIL_CREATION_FAILED);
        PackageDetailId id = entity.getId();
        require(id, "detail id is required", ErrorCode.PACKAGE_DETAIL_CREATION_FAILED);
        require(id.getPackageCustodianId(), "detail packageCustodianId is required", ErrorCode.PACKAGE_DETAIL_CREATION_FAILED);
        requireText(id.getMarketId(), "detail marketId is required", ErrorCode.PACKAGE_DETAIL_CREATION_FAILED);
        maxLength(id.getMarketId(), 2, "detail marketId max length is 2", ErrorCode.PACKAGE_DETAIL_CREATION_FAILED);
        require(id.getPackageDate(), "detail packageDate is required", ErrorCode.PACKAGE_DETAIL_CREATION_FAILED);
        require(id.getTradeId(), "detail tradeId is required", ErrorCode.PACKAGE_DETAIL_CREATION_FAILED);
        validateSide(id.getSideId(), ErrorCode.PACKAGE_DETAIL_CREATION_FAILED);
        require(id.getFraction(), "detail fraction is required", ErrorCode.PACKAGE_DETAIL_CREATION_FAILED);
        requireText(entity.getParticipantCode(), "detail participantCode is required", ErrorCode.PACKAGE_DETAIL_CREATION_FAILED);
        maxLength(entity.getParticipantCode(), 3, "detail participantCode max length is 3", ErrorCode.PACKAGE_DETAIL_CREATION_FAILED);
        require(entity.getSequence(), "detail sequence is required", ErrorCode.PACKAGE_DETAIL_CREATION_FAILED);
        requireText(entity.getPackageNumber(), "detail packageNumber is required", ErrorCode.PACKAGE_DETAIL_CREATION_FAILED);
        exactLength(entity.getPackageNumber(), 18, "detail packageNumber length must be 18", ErrorCode.PACKAGE_DETAIL_CREATION_FAILED);
        require(entity.getMatchDate(), "detail matchDate is required", ErrorCode.PACKAGE_DETAIL_CREATION_FAILED);
        require(entity.getUniqueFractionId(), "detail uniqueFractionId is required", ErrorCode.PACKAGE_DETAIL_CREATION_FAILED);
        require(entity.getInvestorId(), "detail investorId is required", ErrorCode.PACKAGE_DETAIL_CREATION_FAILED);
        require(entity.getParticipantId(), "detail participantId is required", ErrorCode.PACKAGE_DETAIL_CREATION_FAILED);
        validateAudit(entity.getLastModifyUser(), entity.getLastModifyApplic(), entity.getLastModifyDate(),
                entity.getLastModifyIp(), ErrorCode.PACKAGE_DETAIL_CREATION_FAILED);
    }

    private void validatePackageCustodianHistoryEntity(PackageCustodianHistoryEntity entity) {
        require(entity, "PACKAGE_CUSTODIAN_HISTORY entity is required",
                ErrorCode.PACKAGE_CUSTODIAN_HISTORY_CREATION_FAILED);
        PackageCustodianHistoryId id = entity.getId();
        require(id, "header history id is required", ErrorCode.PACKAGE_CUSTODIAN_HISTORY_CREATION_FAILED);
        require(id.getPackageCustodianId(), "header history packageCustodianId is required",
                ErrorCode.PACKAGE_CUSTODIAN_HISTORY_CREATION_FAILED);
        requireText(id.getMarketId(), "header history marketId is required",
                ErrorCode.PACKAGE_CUSTODIAN_HISTORY_CREATION_FAILED);
        maxLength(id.getMarketId(), 2, "header history marketId max length is 2",
                ErrorCode.PACKAGE_CUSTODIAN_HISTORY_CREATION_FAILED);
        require(id.getPackageDate(), "header history packageDate is required",
                ErrorCode.PACKAGE_CUSTODIAN_HISTORY_CREATION_FAILED);
        require(id.getEventTime(), "header history eventTime is required",
                ErrorCode.PACKAGE_CUSTODIAN_HISTORY_CREATION_FAILED);
        requireText(entity.getParticipantCode(), "header history participantCode is required",
                ErrorCode.PACKAGE_CUSTODIAN_HISTORY_CREATION_FAILED);
        maxLength(entity.getParticipantCode(), 3, "header history participantCode max length is 3",
                ErrorCode.PACKAGE_CUSTODIAN_HISTORY_CREATION_FAILED);
        require(entity.getSequence(), "header history sequence is required",
                ErrorCode.PACKAGE_CUSTODIAN_HISTORY_CREATION_FAILED);
        maxLength(entity.getCodeSCB(), 3, "header history codeSCB max length is 3",
                ErrorCode.PACKAGE_CUSTODIAN_HISTORY_CREATION_FAILED);
        requireText(entity.getPackageNumber(), "header history packageNumber is required",
                ErrorCode.PACKAGE_CUSTODIAN_HISTORY_CREATION_FAILED);
        exactLength(entity.getPackageNumber(), 18, "header history packageNumber length must be 18",
                ErrorCode.PACKAGE_CUSTODIAN_HISTORY_CREATION_FAILED);
        validateSide(entity.getSideId(), ErrorCode.PACKAGE_CUSTODIAN_HISTORY_CREATION_FAILED);
        require(entity.getInvestorId(), "header history investorId is required",
                ErrorCode.PACKAGE_CUSTODIAN_HISTORY_CREATION_FAILED);
        require(entity.getGeneratingParticipantId(), "header history generatingParticipantId is required",
                ErrorCode.PACKAGE_CUSTODIAN_HISTORY_CREATION_FAILED);
        require(entity.getInvestorAccountId(), "header history investorAccountId is required",
                ErrorCode.PACKAGE_CUSTODIAN_HISTORY_CREATION_FAILED);
        require(entity.getCustodianStatusId(), "header history custodianStatusId is required",
                ErrorCode.PACKAGE_CUSTODIAN_HISTORY_CREATION_FAILED);
        require(entity.getCustodianId(), "header history custodianId is required",
                ErrorCode.PACKAGE_CUSTODIAN_HISTORY_CREATION_FAILED);
        validateAudit(entity.getLastModifyUser(), entity.getLastModifyApplic(), entity.getLastModifyDate(),
                entity.getLastModifyIp(), ErrorCode.PACKAGE_CUSTODIAN_HISTORY_CREATION_FAILED);
    }

    private void validatePackageDetailHistoryEntity(PackageDetailHistoryEntity entity) {
        require(entity, "PACKAGE_DETAIL_HISTORY entity is required", ErrorCode.PACKAGE_DETAIL_HISTORY_CREATION_FAILED);
        PackageDetailHistoryId id = entity.getId();
        require(id, "detail history id is required", ErrorCode.PACKAGE_DETAIL_HISTORY_CREATION_FAILED);
        require(id.getPackageCustodianId(), "detail history packageCustodianId is required",
                ErrorCode.PACKAGE_DETAIL_HISTORY_CREATION_FAILED);
        requireText(id.getMarketId(), "detail history marketId is required",
                ErrorCode.PACKAGE_DETAIL_HISTORY_CREATION_FAILED);
        maxLength(id.getMarketId(), 2, "detail history marketId max length is 2",
                ErrorCode.PACKAGE_DETAIL_HISTORY_CREATION_FAILED);
        require(id.getPackageDate(), "detail history packageDate is required",
                ErrorCode.PACKAGE_DETAIL_HISTORY_CREATION_FAILED);
        require(id.getStatusTime(), "detail history statusTime is required",
                ErrorCode.PACKAGE_DETAIL_HISTORY_CREATION_FAILED);
        requireText(entity.getParticipantCode(), "detail history participantCode is required",
                ErrorCode.PACKAGE_DETAIL_HISTORY_CREATION_FAILED);
        maxLength(entity.getParticipantCode(), 3, "detail history participantCode max length is 3",
                ErrorCode.PACKAGE_DETAIL_HISTORY_CREATION_FAILED);
        require(entity.getSequence(), "detail history sequence is required",
                ErrorCode.PACKAGE_DETAIL_HISTORY_CREATION_FAILED);
        requireText(entity.getPackageNumber(), "detail history packageNumber is required",
                ErrorCode.PACKAGE_DETAIL_HISTORY_CREATION_FAILED);
        exactLength(entity.getPackageNumber(), 18, "detail history packageNumber length must be 18",
                ErrorCode.PACKAGE_DETAIL_HISTORY_CREATION_FAILED);
        require(entity.getPackageEventId(), "detail history packageEventId is required",
                ErrorCode.PACKAGE_DETAIL_HISTORY_CREATION_FAILED);
        require(entity.getTradeId(), "detail history tradeId is required",
                ErrorCode.PACKAGE_DETAIL_HISTORY_CREATION_FAILED);
        validateSide(entity.getSideId(), ErrorCode.PACKAGE_DETAIL_HISTORY_CREATION_FAILED);
        require(entity.getFraction(), "detail history fraction is required",
                ErrorCode.PACKAGE_DETAIL_HISTORY_CREATION_FAILED);
        require(entity.getUniqueFractionId(), "detail history uniqueFractionId is required",
                ErrorCode.PACKAGE_DETAIL_HISTORY_CREATION_FAILED);
        require(entity.getMatchDate(), "detail history matchDate is required",
                ErrorCode.PACKAGE_DETAIL_HISTORY_CREATION_FAILED);
        require(entity.getClearingDate(), "detail history clearingDate is required",
                ErrorCode.PACKAGE_DETAIL_HISTORY_CREATION_FAILED);
        require(entity.getParticipantId(), "detail history participantId is required",
                ErrorCode.PACKAGE_DETAIL_HISTORY_CREATION_FAILED);
        validateAudit(entity.getLastModifyUser(), entity.getLastModifyApplic(), entity.getLastModifyDate(),
                entity.getLastModifyIp(), ErrorCode.PACKAGE_DETAIL_HISTORY_CREATION_FAILED);
    }

    private void validateAudit(String user, String applic, OffsetDateTime date, String ip, ErrorCode errorCode) {
        requireText(user, "lastModifyUser is required", errorCode);
        maxLength(user, 250, "lastModifyUser max length is 250", errorCode);
        requireText(applic, "lastModifyApplic is required", errorCode);
        maxLength(applic, 250, "lastModifyApplic max length is 250", errorCode);
        require(date, "lastModifyDate is required", errorCode);
        maxLength(ip, 50, "lastModifyIp max length is 50", errorCode);
    }

    private void validateSide(String sideId, ErrorCode errorCode) {
        requireText(sideId, "sideId is required", errorCode);
        maxLength(sideId, 2, "sideId max length is 2", errorCode);
        if (!"1".equals(sideId) && !"2".equals(sideId)) {
            failValidation("sideId must be 1 or 2", errorCode);
        }
    }

    private void validateNumeric6x4(BigDecimal value, ErrorCode errorCode) {
        if (value != null && value.abs().compareTo(MAX_NUMERIC_6_4) > 0) {
            failValidation("clearingPercentage exceeds numeric(6,4)", errorCode);
        }
    }

    private void validateReferencePackage(String referencePackage) {
        validateReferencePackage(referencePackage, ErrorCode.AUTOMATIC_PACKAGE_INCONSISTENT_DETAIL);
    }

    private void validateReferencePackage(String referencePackage, ErrorCode errorCode) {
        String normalized = normalizeReferencePackage(referencePackage);
        if (normalized != null && normalized.length() > 10) {
            failValidation("referencePackage max length is 10", errorCode);
        }
    }

    private String normalizeReferencePackage(String value) {
        if (value == null || value.isBlank()) {
            return null;
        }
        return value.trim();
    }

    private void exactLength(String value, int expected, String reason, ErrorCode errorCode) {
        if (value == null || value.length() != expected) {
            failValidation(reason, errorCode);
        }
    }

    private void maxLength(String value, int max, String reason, ErrorCode errorCode) {
        if (value != null && value.length() > max) {
            failValidation(reason, errorCode);
        }
    }

    private void requireText(String value, String reason, ErrorCode errorCode) {
        if (value == null || value.isBlank()) {
            failValidation(reason, errorCode);
        }
    }

    private void require(Object value, String reason, ErrorCode errorCode) {
        if (value == null) {
            failValidation(reason, errorCode);
        }
    }

    private void failValidation(String reason, ErrorCode errorCode) {
        log.error("Automatic package validation failed before persistence. reason={}", reason);
        throw new ServiceException(errorCode, HttpStatus.CONFLICT);
    }

}

```

## src/main/java/com/nubo/packages/custody/cmd/api/web/controller/PackageCustodianRestController.java

```java
package com.nubo.packages.custody.cmd.api.web.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nubo.packages.custody.cmd.api.models.dto.request.PackageCustodianInDto;
import com.nubo.packages.custody.cmd.api.models.dto.request.PackageCustodianAutomaticInDto;
import com.nubo.packages.custody.cmd.api.models.dto.request.PackageCustodianManualInDto;
import com.nubo.packages.custody.cmd.api.models.dto.response.PackageCustodianOutDto;
import com.nubo.packages.custody.cmd.api.models.dto.response.PackageCustodianAutomaticOutDto;
import com.nubo.packages.custody.cmd.api.models.dto.response.PackageCustodianManualOutDto;
import com.nubo.packages.custody.cmd.api.service.PackageCustodianService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@Tag(name = "Package Custodian")
@RestController
@RequestMapping("/{version}/package-custodian")
@RequiredArgsConstructor
public class PackageCustodianRestController {

    private final PackageCustodianService packageCustodianService;

    @Operation(summary = "Create package Custodian legacy flow",
            description = "Legacy endpoint. The automatic endpoint is /automatic for the current package model")
    @ApiResponses(value = {@ApiResponse(responseCode = "201", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = PackageCustodianOutDto.class)))})
    @PostMapping()
    public ResponseEntity<PackageCustodianOutDto> createPackageCustodian(
            @Valid @RequestBody PackageCustodianInDto packageCustodianInDto) {
        PackageCustodianOutDto createdPackageCustodian = packageCustodianService.createPackageCustodian(packageCustodianInDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdPackageCustodian);
    }

    @Operation(summary = "Create automatic custodian packages in a single transaction")
    @PostMapping("/automatic")
    public ResponseEntity<PackageCustodianAutomaticOutDto> createAutomaticPackageCustodians(
            @Valid @RequestBody PackageCustodianAutomaticInDto request) {
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(packageCustodianService.createAutomaticPackageCustodians(request));
    }

    @Operation(
            summary = "Create manual custodian package",
            description = "Contract endpoint for manual creation of one custodian package with N details. Implementation pending."
    )
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "Successfully Response",
                    content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                            schema = @Schema(implementation = PackageCustodianManualOutDto.class))),
            @ApiResponse(responseCode = "501", description = "Manual package creation not implemented yet")
    })
    @PostMapping(value = "/manual", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<PackageCustodianManualOutDto> createManualPackageCustodian(
            @Valid @RequestBody PackageCustodianManualInDto request) {
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(packageCustodianService.createManualPackageCustodian(request));
    }

}

```
