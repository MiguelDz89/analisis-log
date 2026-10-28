# nbo-png-gestionusuarios-back

Código fuente completo de producción y configuraciones. Captura local: 28/10/2026.

Incluye 135 archivos Java y 16 archivos de configuración, recursos y compilación.

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
17. `src/main/java/com/nubo/user/management/api/UserManagementApiApplication.java`
18. `src/main/java/com/nubo/user/management/api/application/config/SwaggerConfig.java`
19. `src/main/java/com/nubo/user/management/api/application/config/WebConfig.java`
20. `src/main/java/com/nubo/user/management/api/application/contansts/EmailConstants.java`
21. `src/main/java/com/nubo/user/management/api/application/contansts/KeycloakConstants.java`
22. `src/main/java/com/nubo/user/management/api/application/context/GlobalContext.java`
23. `src/main/java/com/nubo/user/management/api/application/database/NamingStrategyConfig.java`
24. `src/main/java/com/nubo/user/management/api/application/database/UpperNamingConfig.java`
25. `src/main/java/com/nubo/user/management/api/application/filters/GlobalFilter.java`
26. `src/main/java/com/nubo/user/management/api/application/interceptors/GlobalInterceptor.java`
27. `src/main/java/com/nubo/user/management/api/application/properties/PropertiesConfig.java`
28. `src/main/java/com/nubo/user/management/api/application/properties/PropertiesContext.java`
29. `src/main/java/com/nubo/user/management/api/application/util/ApplicationUtils.java`
30. `src/main/java/com/nubo/user/management/api/application/util/RestClientUtils.java`
31. `src/main/java/com/nubo/user/management/api/client/email/service/EmailClient.java`
32. `src/main/java/com/nubo/user/management/api/client/email/service/impl/EmailClientImpl.java`
33. `src/main/java/com/nubo/user/management/api/client/keycloak/service/KeycloakClient.java`
34. `src/main/java/com/nubo/user/management/api/client/keycloak/service/impl/KeycloakClientImpl.java`
35. `src/main/java/com/nubo/user/management/api/exception/ServiceException.java`
36. `src/main/java/com/nubo/user/management/api/exception/error/ErrorCode.java`
37. `src/main/java/com/nubo/user/management/api/exception/error/ErrorResponse.java`
38. `src/main/java/com/nubo/user/management/api/exception/error/ErrorValidation.java`
39. `src/main/java/com/nubo/user/management/api/exception/handler/GlobalExceptionHandler.java`
40. `src/main/java/com/nubo/user/management/api/helpers/MapperPageUtil.java`
41. `src/main/java/com/nubo/user/management/api/helpers/MapperUserNuboDynamicSearch.java`
42. `src/main/java/com/nubo/user/management/api/helpers/MapperUserNuboSearch.java`
43. `src/main/java/com/nubo/user/management/api/helpers/MapperUtil.java`
44. `src/main/java/com/nubo/user/management/api/helpers/OtpUtil.java`
45. `src/main/java/com/nubo/user/management/api/helpers/PasswordUtil.java`
46. `src/main/java/com/nubo/user/management/api/helpers/UserUtil.java`
47. `src/main/java/com/nubo/user/management/api/models/domain/UserParams.java`
48. `src/main/java/com/nubo/user/management/api/models/dto/request/EmailTemplateInDto.java`
49. `src/main/java/com/nubo/user/management/api/models/dto/request/KeycloakCredentialInDto.java`
50. `src/main/java/com/nubo/user/management/api/models/dto/request/KeycloakUserInDto.java`
51. `src/main/java/com/nubo/user/management/api/models/dto/request/LogSessionTrackingInDto.java`
52. `src/main/java/com/nubo/user/management/api/models/dto/request/OtpEmailValidateInDto.java`
53. `src/main/java/com/nubo/user/management/api/models/dto/request/OtpInDto.java`
54. `src/main/java/com/nubo/user/management/api/models/dto/request/PermissionInDto.java`
55. `src/main/java/com/nubo/user/management/api/models/dto/request/ProfileInDto.java`
56. `src/main/java/com/nubo/user/management/api/models/dto/request/ProfileUpdateInDto.java`
57. `src/main/java/com/nubo/user/management/api/models/dto/request/SetOtpModeInDto.java`
58. `src/main/java/com/nubo/user/management/api/models/dto/request/UserNuboInDto.java`
59. `src/main/java/com/nubo/user/management/api/models/dto/request/UserNuboUpdateInDto.java`
60. `src/main/java/com/nubo/user/management/api/models/dto/request/UserRecoveryPasswordInDto.java`
61. `src/main/java/com/nubo/user/management/api/models/dto/response/ContactDetailOutDto.java`
62. `src/main/java/com/nubo/user/management/api/models/dto/response/CountryOutDto.java`
63. `src/main/java/com/nubo/user/management/api/models/dto/response/CurrencyOutDto.java`
64. `src/main/java/com/nubo/user/management/api/models/dto/response/DepartmentOutDto.java`
65. `src/main/java/com/nubo/user/management/api/models/dto/response/DetailUserOutDto.java`
66. `src/main/java/com/nubo/user/management/api/models/dto/response/EmailOutDto.java`
67. `src/main/java/com/nubo/user/management/api/models/dto/response/EnterpriseGroupOutDto.java`
68. `src/main/java/com/nubo/user/management/api/models/dto/response/IdentificationTypeOutDto.java`
69. `src/main/java/com/nubo/user/management/api/models/dto/response/InformationChangPwdOutDto.java`
70. `src/main/java/com/nubo/user/management/api/models/dto/response/LogEventOutDto.java`
71. `src/main/java/com/nubo/user/management/api/models/dto/response/LogSessionTrackingOutDto.java`
72. `src/main/java/com/nubo/user/management/api/models/dto/response/OptOutDto.java`
73. `src/main/java/com/nubo/user/management/api/models/dto/response/OtpEmailOutDto.java`
74. `src/main/java/com/nubo/user/management/api/models/dto/response/PageResponseOutDto.java`
75. `src/main/java/com/nubo/user/management/api/models/dto/response/ParticipantOutDto.java`
76. `src/main/java/com/nubo/user/management/api/models/dto/response/PermissionOutDto.java`
77. `src/main/java/com/nubo/user/management/api/models/dto/response/ProfileDetailOutDto.java`
78. `src/main/java/com/nubo/user/management/api/models/dto/response/ProfileOutDto.java`
79. `src/main/java/com/nubo/user/management/api/models/dto/response/SetOtpModeOutDto.java`
80. `src/main/java/com/nubo/user/management/api/models/dto/response/StatusOutDto.java`
81. `src/main/java/com/nubo/user/management/api/models/dto/response/TaxStatusOutDto.java`
82. `src/main/java/com/nubo/user/management/api/models/dto/response/TypeOutDto.java`
83. `src/main/java/com/nubo/user/management/api/models/dto/response/UserLoginOutDto.java`
84. `src/main/java/com/nubo/user/management/api/models/dto/response/UserNuboOutDto.java`
85. `src/main/java/com/nubo/user/management/api/models/dto/response/UserNuboUserTypeOutDto.java`
86. `src/main/java/com/nubo/user/management/api/models/dto/response/UserPasswordAuthOutDto.java`
87. `src/main/java/com/nubo/user/management/api/models/dto/response/UserPasswordTemporaryOutDto.java`
88. `src/main/java/com/nubo/user/management/api/models/dto/response/UserRecoveryPasswordOutDto.java`
89. `src/main/java/com/nubo/user/management/api/models/dto/response/UsernameOutDto.java`
90. `src/main/java/com/nubo/user/management/api/models/entity/CountryEntity.java`
91. `src/main/java/com/nubo/user/management/api/models/entity/CurrencyEntity.java`
92. `src/main/java/com/nubo/user/management/api/models/entity/DepartmentEntity.java`
93. `src/main/java/com/nubo/user/management/api/models/entity/EnterpriseGroupEntity.java`
94. `src/main/java/com/nubo/user/management/api/models/entity/IdentificationTypeEntity.java`
95. `src/main/java/com/nubo/user/management/api/models/entity/LogSessionTrackingEntity.java`
96. `src/main/java/com/nubo/user/management/api/models/entity/MenuAssignmentEntity.java`
97. `src/main/java/com/nubo/user/management/api/models/entity/ParametersNuboEntity.java`
98. `src/main/java/com/nubo/user/management/api/models/entity/ParticipantEntity.java`
99. `src/main/java/com/nubo/user/management/api/models/entity/ParticipantSponsorEntity.java`
100. `src/main/java/com/nubo/user/management/api/models/entity/ParticipantSponsorKey.java`
101. `src/main/java/com/nubo/user/management/api/models/entity/ParticipantUserNuboEntity.java`
102. `src/main/java/com/nubo/user/management/api/models/entity/ParticipantUserNuboKey.java`
103. `src/main/java/com/nubo/user/management/api/models/entity/ProfileEntity.java`
104. `src/main/java/com/nubo/user/management/api/models/entity/ProfileUserNuboEntity.java`
105. `src/main/java/com/nubo/user/management/api/models/entity/ProfileUserNuboKey.java`
106. `src/main/java/com/nubo/user/management/api/models/entity/ScreenActionEntity.java`
107. `src/main/java/com/nubo/user/management/api/models/entity/ScreenEntity.java`
108. `src/main/java/com/nubo/user/management/api/models/entity/StatusEntity.java`
109. `src/main/java/com/nubo/user/management/api/models/entity/TaxStatusEntity.java`
110. `src/main/java/com/nubo/user/management/api/models/entity/TypeEntity.java`
111. `src/main/java/com/nubo/user/management/api/models/entity/UserNuboEntity.java`
112. `src/main/java/com/nubo/user/management/api/models/enums/GrandTypeEnum.java`
113. `src/main/java/com/nubo/user/management/api/models/enums/GrandTypeUserEnum.java`
114. `src/main/java/com/nubo/user/management/api/models/enums/KeycloackActionsEnum.java`
115. `src/main/java/com/nubo/user/management/api/models/enums/OtpEmailValueEnum.java`
116. `src/main/java/com/nubo/user/management/api/models/enums/ParametersCodeEnum.java`
117. `src/main/java/com/nubo/user/management/api/models/enums/ProfileEnum.java`
118. `src/main/java/com/nubo/user/management/api/models/enums/PropertiesEnum.java`
119. `src/main/java/com/nubo/user/management/api/models/enums/SearchOperationEnum.java`
120. `src/main/java/com/nubo/user/management/api/models/enums/StatusEnum.java`
121. `src/main/java/com/nubo/user/management/api/models/enums/TypeEnum.java`
122. `src/main/java/com/nubo/user/management/api/models/enums/UserMessageEnum.java`
123. `src/main/java/com/nubo/user/management/api/models/enums/UserTypeEnum.java`
124. `src/main/java/com/nubo/user/management/api/models/enums/UserValueEnum.java`
125. `src/main/java/com/nubo/user/management/api/models/enums/VersionApiEnum.java`
126. `src/main/java/com/nubo/user/management/api/repository/CountryRepository.java`
127. `src/main/java/com/nubo/user/management/api/repository/IdentificationTypeRepository.java`
128. `src/main/java/com/nubo/user/management/api/repository/LogSessionTrackingRepository.java`
129. `src/main/java/com/nubo/user/management/api/repository/ParametersNuboRepository.java`
130. `src/main/java/com/nubo/user/management/api/repository/ParticipantRepository.java`
131. `src/main/java/com/nubo/user/management/api/repository/ParticipantSponsorRepository.java`
132. `src/main/java/com/nubo/user/management/api/repository/ParticipantUserNuboRepository.java`
133. `src/main/java/com/nubo/user/management/api/repository/ProfileRepository.java`
134. `src/main/java/com/nubo/user/management/api/repository/StatusRepository.java`
135. `src/main/java/com/nubo/user/management/api/repository/UserNuboRepository.java`
136. `src/main/java/com/nubo/user/management/api/service/KeycloakService.java`
137. `src/main/java/com/nubo/user/management/api/service/LogSessionTrackingService.java`
138. `src/main/java/com/nubo/user/management/api/service/OtpService.java`
139. `src/main/java/com/nubo/user/management/api/service/ParticipantSponsorService.java`
140. `src/main/java/com/nubo/user/management/api/service/UserAuthService.java`
141. `src/main/java/com/nubo/user/management/api/service/UserNuboService.java`
142. `src/main/java/com/nubo/user/management/api/service/impl/KeycloakServiceImpl.java`
143. `src/main/java/com/nubo/user/management/api/service/impl/LogSessionTrackingServiceImpl.java`
144. `src/main/java/com/nubo/user/management/api/service/impl/OtpServiceImpl.java`
145. `src/main/java/com/nubo/user/management/api/service/impl/ParticipantSponsorServiceImpl.java`
146. `src/main/java/com/nubo/user/management/api/service/impl/UserAuthServiceImpl.java`
147. `src/main/java/com/nubo/user/management/api/service/impl/UserNuboServiceImpl.java`
148. `src/main/java/com/nubo/user/management/api/web/controller/KeycloakRestController.java`
149. `src/main/java/com/nubo/user/management/api/web/controller/LogSessionTrackingController.java`
150. `src/main/java/com/nubo/user/management/api/web/controller/OtpRestController.java`
151. `src/main/java/com/nubo/user/management/api/web/controller/UserNuboRestController.java`

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
#    https://www.apache.org/licenses/LICENSE-2.0
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
@REM    https://www.apache.org/licenses/LICENSE-2.0
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
    <groupId>com.nubo.user.management.api</groupId>
    <artifactId>user-management-api</artifactId>
    <version>0.183.3-beta.17</version>
    <name>${project.artifactId}</name>
    <description>User Management Api</description>

    <properties>
        <java.version>21</java.version>
        <spring.port>8080</spring.port>
        <test.skip>false</test.skip>
        <datasource.url.application.name>ApplicationName=${project.artifactId}</datasource.url.application.name>
        <hikari.pool.name>${project.artifactId}-pool</hikari.pool.name>
        <dynamic.hikari.pool.name>${project.artifactId}-dynamic-pool</dynamic.hikari.pool.name>
        <!-- vulnerability adjustment -->
        <log4j2.version>2.25.5</log4j2.version>
        <tomcat.version>11.0.25</tomcat.version>
        <nimbus-jose-jwt.version>10.9.1</nimbus-jose-jwt.version>
    </properties>

    <dependencyManagement>
        <dependencies>
            <!-- Jackson: fix CVEs (CVE-2026-91777, 91776, 89425, 89407, 68497, 83557, 19032) -->
            <dependency>
                <groupId>com.fasterxml.jackson.core</groupId>
                <artifactId>jackson-databind</artifactId>
                <version>2.21.7</version>
            </dependency>
            <dependency>
                <groupId>com.fasterxml.jackson.core</groupId>
                <artifactId>jackson-core</artifactId>
                <version>2.21.7</version>
            </dependency>
            <dependency>
                <groupId>tools.jackson.core</groupId>
                <artifactId>jackson-databind</artifactId>
                <version>3.1.7</version>
            </dependency>
            <dependency>
                <groupId>tools.jackson.core</groupId>
                <artifactId>jackson-core</artifactId>
                <version>3.1.7</version>
            </dependency>
        </dependencies>
    </dependencyManagement>

    <profiles>
        <profile>
            <id>local</id>
            <dependencies>
                <!-- OTP Two-Factor Authentication -->
                <dependency>
                    <groupId>dev.samstevens.totp</groupId>
                    <artifactId>totp</artifactId>
                    <version>1.7.1</version>
                </dependency>
            </dependencies>
        </profile>
    </profiles>

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
            <exclusions>
                <exclusion>
                    <groupId>org.springframework.boot</groupId>
                    <artifactId>spring-boot-starter-logging</artifactId>
                </exclusion>
            </exclusions>
            <scope>test</scope>
        </dependency>
        <!-- Logging -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-log4j2</artifactId>
        </dependency>
        <dependency>
            <groupId>org.apache.tomcat.embed</groupId>
            <artifactId>tomcat-embed-core</artifactId>
        </dependency>
        <dependency>
            <groupId>org.apache.logging.log4j</groupId>
            <artifactId>log4j-core</artifactId>
        </dependency>
        <dependency>
            <groupId>org.apache.logging.log4j</groupId>
            <artifactId>log4j-layout-template-json</artifactId>
            <scope>runtime</scope>
        </dependency>
        <dependency>
            <groupId>commons-logging</groupId>
            <artifactId>commons-logging</artifactId>
            <version>1.3.6</version>
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
        <!-- JWT -->
        <dependency>
            <groupId>com.nimbusds</groupId>
            <artifactId>nimbus-jose-jwt</artifactId>
            <version>${nimbus-jose-jwt.version}</version>
        </dependency>
        <!-- OTP Two-Factor Authentication -->
        <dependency>
            <groupId>com.google.zxing</groupId>
            <artifactId>core</artifactId>
            <version>3.5.3</version>
        </dependency>
        <dependency>
            <groupId>com.google.zxing</groupId>
            <artifactId>javase</artifactId>
            <version>3.5.3</version>
        </dependency>
        <dependency>
            <groupId>commons-codec</groupId>
            <artifactId>commons-codec</artifactId>
        </dependency>
        <!-- vulnerability adjustment  -->
        <dependency>
            <groupId>org.xmlunit</groupId>
            <artifactId>xmlunit-core</artifactId>
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
                                <exclude>**/UserManagementApiApplication.class</exclude>
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
#   https://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
# KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.
wrapperVersion=3.3.2
distributionType=only-script
distributionUrl=https://repo.maven.apache.org/maven2/org/apache/maven/apache-maven/3.9.7/apache-maven-3.9.7-bin.zip

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
client:
  keycloak:
    host: ${KEYCLOAK_HOST}
    realm: ${KEYCLOAK_REALM}
    client-id: ${KEYCLOAK_CLIENT_ID}
    client-secret: ${KEYCLOAK_CLIENT_SECRET}
    introspection-uri: ${KEYCLOAK_INTROSPECTION_URI}
    grant-type: ${KEYCLOAK_GRANT_TYPE}
    policy-password-expire-quantity: ${KEYCLOAK_POLICY_PASSWORD_EXPIRE_QUANTITY}
    redirect-uri: ${KEYCLOAK_REDIRECT_URI}
  email:
    host: ${NUBO_URL_EMAIL_API}
logging:
  config: classpath:log/log4j2.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR
    com.nubo.user.management.api: DEBUG
config:
  application:
    validate-user-type-access-token: ${VALIDATE_USER_TYPE_ACCESS_TOKEN}
    secrets:
      secret-key-password-generate: ${SECRET_KEY_PASSWORD_GENERATE}
    otp:
      app-name: "nuBo"
      interval-seconds: 30
      email-interval-seconds: 1
nubo:
  user:
    management:
      type:
        participant-afp-id: ${NUBO_USER_TYPE_PARTICIPANT_AFP_ID:51}
    information:
      password-change:
        email: ${NUBO_USER_MGMT_PASSWORD_CHANGE_EMAIL}
        phone-number: ${NUBO_USER_MGMT_PASSWORD_CHANGE_PHONE}

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
    show-sql: 'true'
    database-platform: org.hibernate.dialect.PostgreSQLDialect
  thymeleaf:
    prefix: classpath:/templates/
    suffix: .html
    mode: HTML
    encoding: UTF-8
    cache: false
client:
  keycloak:
    host: ${KEYCLOAK_HOST}
    realm: ${KEYCLOAK_REALM}
    client-id: ${KEYCLOAK_CLIENT_ID}
    client-secret: ${KEYCLOAK_CLIENT_SECRET}
    introspection-uri: ${KEYCLOAK_INTROSPECTION_URI}
    grant-type: ${KEYCLOAK_GRANT_TYPE}
    policy-password-expire-quantity: ${KEYCLOAK_POLICY_PASSWORD_EXPIRE_QUANTITY}
    redirect-uri: ${KEYCLOAK_REDIRECT_URI}
  email:
    host: ${NUBO_URL_EMAIL_API}
logging:
  config: classpath:log/log4j2.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR
    com.nubo.user.management.api: DEBUG
config:
  application:
    validate-user-type-access-token: ${VALIDATE_USER_TYPE_ACCESS_TOKEN}
    secrets:
      secret-key-password-generate: ${SECRET_KEY_PASSWORD_GENERATE}
    otp:
      app-name: "nuBo"
      interval-seconds: 30
      email-interval-seconds: 1
nubo:
  user:
    management:
      type:
        participant-afp-id: ${NUBO_USER_TYPE_PARTICIPANT_AFP_ID:51}
    information:
      password-change:
        email: ${NUBO_USER_MGMT_PASSWORD_CHANGE_EMAIL}
        phone-number: ${NUBO_USER_MGMT_PASSWORD_CHANGE_PHONE}

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
client:
  keycloak:
    host: ${KEYCLOAK_HOST}
    realm: ${KEYCLOAK_REALM}
    client-id: ${KEYCLOAK_CLIENT_ID}
    client-secret: ${KEYCLOAK_CLIENT_SECRET}
    introspection-uri: ${KEYCLOAK_INTROSPECTION_URI}
    grant-type: ${KEYCLOAK_GRANT_TYPE}
    policy-password-expire-quantity: ${KEYCLOAK_POLICY_PASSWORD_EXPIRE_QUANTITY}
    redirect-uri: ${KEYCLOAK_REDIRECT_URI}
  email:
    host: ${NUBO_URL_EMAIL_API}
logging:
  config: classpath:log/log4j2-prod.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR
config:
  application:
    validate-user-type-access-token: ${VALIDATE_USER_TYPE_ACCESS_TOKEN}
    secrets:
      secret-key-password-generate: ${SECRET_KEY_PASSWORD_GENERATE}
    otp:
      app-name: "nuBo"
      interval-seconds: 30
      email-interval-seconds: 1
nubo:
  user:
    management:
      type:
        participant-afp-id: ${NUBO_USER_TYPE_PARTICIPANT_AFP_ID:51}
    information:
      password-change:
        email: ${NUBO_USER_MGMT_PASSWORD_CHANGE_EMAIL}
        phone-number: ${NUBO_USER_MGMT_PASSWORD_CHANGE_PHONE}

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
client:
  keycloak:
    host: ${KEYCLOAK_HOST}
    realm: ${KEYCLOAK_REALM}
    client-id: ${KEYCLOAK_CLIENT_ID}
    client-secret: ${KEYCLOAK_CLIENT_SECRET}
    introspection-uri: ${KEYCLOAK_INTROSPECTION_URI}
    grant-type: ${KEYCLOAK_GRANT_TYPE}
    policy-password-expire-quantity: ${KEYCLOAK_POLICY_PASSWORD_EXPIRE_QUANTITY}
    redirect-uri: ${KEYCLOAK_REDIRECT_URI}
  email:
    host: ${NUBO_URL_EMAIL_API}
logging:
  config: classpath:log/log4j2.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR
config:
  application:
    validate-user-type-access-token: ${VALIDATE_USER_TYPE_ACCESS_TOKEN}
    secrets:
      secret-key-password-generate: ${SECRET_KEY_PASSWORD_GENERATE}
    otp:
      app-name: "nuBo"
      interval-seconds: 30
      email-interval-seconds: 1
nubo:
  user:
    management:
      type:
        participant-afp-id: ${NUBO_USER_TYPE_PARTICIPANT_AFP_ID:51}
    information:
      password-change:
        email: ${NUBO_USER_MGMT_PASSWORD_CHANGE_EMAIL}
        phone-number: ${NUBO_USER_MGMT_PASSWORD_CHANGE_PHONE}

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
client:
  keycloak:
    host: ${KEYCLOAK_HOST}
    realm: ${KEYCLOAK_REALM}
    client-id: ${KEYCLOAK_CLIENT_ID}
    client-secret: ${KEYCLOAK_CLIENT_SECRET}
    introspection-uri: ${KEYCLOAK_INTROSPECTION_URI}
    grant-type: ${KEYCLOAK_GRANT_TYPE}
    policy-password-expire-quantity: ${KEYCLOAK_POLICY_PASSWORD_EXPIRE_QUANTITY}
    redirect-uri: ${KEYCLOAK_REDIRECT_URI}
  email:
    host: ${NUBO_URL_EMAIL_API}
logging:
  config: classpath:log/log4j2.properties
  level:
    org.hibernate: ERROR
    org.springframework.jdbc.datasource: ERROR
    com.zaxxer.hikari: ERROR
config:
  application:
    validate-user-type-access-token: ${VALIDATE_USER_TYPE_ACCESS_TOKEN}
    secrets:
      secret-key-password-generate: ${SECRET_KEY_PASSWORD_GENERATE}
    otp:
      app-name: "nuBo"
      interval-seconds: 30
      email-interval-seconds: 1
nubo:
  user:
    management:
      type:
        participant-afp-id: ${NUBO_USER_TYPE_PARTICIPANT_AFP_ID:51}
    information:
      password-change:
        email: ${NUBO_USER_MGMT_PASSWORD_CHANGE_EMAIL}
        phone-number: ${NUBO_USER_MGMT_PASSWORD_CHANGE_PHONE}

```

## src/main/resources/application.yml

```yaml
spring:
  profiles:
    active: ${SPRING_PROFILES_ACTIVE}
  application:
    name: "@project.name@"
    type: service
server:
  servlet:
    context-path: /${spring.application.name}
application:
  version: "@project.version@"
  description: 'Documentation Endpoints'
  title: "@project.description@"
  group: ${spring.application.name}
info:
  app:
    name: ${spring.application.name}
    version: "@project.version@"
    description: "@project.description@"
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
,--. ,--. ,---. ,------.,------. ,--.   ,--.  ,---.  ,--.  ,--.  ,---.   ,----.   ,------.,--.   ,--.,------.,--.  ,--.,--------. ,---.  ,------. ,--.
|  | |  |'   .-'|  .---'|  .--. '|   `.'   | /  O  \ |  ,'.|  | /  O  \ '  .-./   |  .---'|   `.'   ||  .---'|  ,'.|  |'--.  .--'/  O  \ |  .--. '|  |
|  | |  |`.  `-.|  `--, |  '--'.'|  |'.'|  ||  .-.  ||  |' '  ||  .-.  ||  | .---.|  `--, |  |'.'|  ||  `--, |  |' '  |   |  |  |  .-.  ||  '--' ||  |
'  '-'  '.-'    |  `---.|  |\  \ |  |   |  ||  | |  ||  | `   ||  | |  |'  '--'  ||  `---.|  |   |  ||  `---.|  | `   |   |  |  |  | |  ||  | --' |  |
 `-----' `-----'`------'`--' '--'`--'   `--'`--' `--'`--'  `--'`--' `--' `------' `------'`--'   `--'`------'`--'  `--'   `--'  `--' `--'`--'     `--'
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

## src/main/java/com/nubo/user/management/api/UserManagementApiApplication.java

```java
package com.nubo.user.management.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class UserManagementApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(UserManagementApiApplication.class, args);
	}

}

```

## src/main/java/com/nubo/user/management/api/application/config/SwaggerConfig.java

```java
package com.nubo.user.management.api.application.config;

import com.nubo.user.management.api.exception.error.ErrorResponse;
import com.nubo.user.management.api.exception.error.ErrorValidation;
import com.nubo.user.management.api.models.enums.PropertiesEnum;
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

## src/main/java/com/nubo/user/management/api/application/config/WebConfig.java

```java
package com.nubo.user.management.api.application.config;

import com.nubo.user.management.api.application.interceptors.GlobalInterceptor;
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

    @Bean
    public RestClient restClient() {
        return RestClient.create();
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

## src/main/java/com/nubo/user/management/api/application/contansts/EmailConstants.java

```java
package com.nubo.user.management.api.application.contansts;

public class EmailConstants {

    private EmailConstants() {
    }

    public static final String PATH_NOTIFICATION = "notification";

    public static final String PATH_SEND_EMAIL_TEMPLATE = "send-email-template-aws";

}

```

## src/main/java/com/nubo/user/management/api/application/contansts/KeycloakConstants.java

```java
package com.nubo.user.management.api.application.contansts;

public class KeycloakConstants {

    private KeycloakConstants() {
    }

    public static final String PATH_REALM = "realms";

    public static final String PATH_ADMIN = "admin";

    public static final String PATH_PROTOCOL = "protocol";

    public static final String PATH_OPENID_CONNECT = "openid-connect";

    public static final String PATH_TOKEN = "token";

    public static final String PATH_KEYCLOAK_USERS = "users";

    public static final String PATH_KEYCLOAK_USER_LOGOUT = "logout";

    public static final String PATH_KEYCLOAK_RESET_PASSWORD = "reset-password";

}

```

## src/main/java/com/nubo/user/management/api/application/context/GlobalContext.java

```java
package com.nubo.user.management.api.application.context;

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

## src/main/java/com/nubo/user/management/api/application/database/NamingStrategyConfig.java

```java
package com.nubo.user.management.api.application.database;

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

## src/main/java/com/nubo/user/management/api/application/database/UpperNamingConfig.java

```java
package com.nubo.user.management.api.application.database;

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

## src/main/java/com/nubo/user/management/api/application/filters/GlobalFilter.java

```java
package com.nubo.user.management.api.application.filters;

import com.nubo.user.management.api.application.context.GlobalContext;
import com.nubo.user.management.api.application.util.ApplicationUtils;
import com.nubo.user.management.api.exception.ServiceException;
import com.nubo.user.management.api.exception.error.ErrorCode;
import com.nubo.user.management.api.exception.error.ErrorResponse;
import com.nubo.user.management.api.models.enums.PropertiesEnum;
import com.nubo.user.management.api.models.enums.VersionApiEnum;
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

            if (uri.endsWith("/v1/keycloak/token")) {
                String clientUser = request.getHeader(PropertiesEnum.CLIENT_USER.getValue());
                if (!ObjectUtils.isEmpty(clientUser)) {
                    GlobalContext.setProperty(PropertiesEnum.CLIENT_USER.getValue(), clientUser);
                }
            } else {
                String clientUserHeader = this.validateClientUserHeader(request);
                GlobalContext.setProperty(PropertiesEnum.CLIENT_USER.getValue(), clientUserHeader);
                String token = validateTokenRequest(request);
                if (!ObjectUtils.isEmpty(token)) {
                    GlobalContext.setProperty(PropertiesEnum.AUTH_TOKEN.getValue(), token);
                }
            }

            String versionPath = this.validateVersionPath(request);
            String clientIpHeader = this.validateClientIpHeader(request);
            String clientDatetime = this.validateClientDatetimeHeader(request);

            GlobalContext.setProperty(PropertiesEnum.VERSION_API.getValue(), VersionApiEnum.fromValue(versionPath).getValue());
            GlobalContext.setProperty(PropertiesEnum.CLIENT_IP.getValue(), clientIpHeader);
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
        log.info("---------- Client User: {} ----------", clientUser);
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

## src/main/java/com/nubo/user/management/api/application/interceptors/GlobalInterceptor.java

```java
package com.nubo.user.management.api.application.interceptors;

import com.nubo.user.management.api.application.context.GlobalContext;
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

## src/main/java/com/nubo/user/management/api/application/properties/PropertiesConfig.java

```java
package com.nubo.user.management.api.application.properties;

import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
@Getter
public class PropertiesConfig {

    @Value("${spring.application.name}")
    private String apiName;

    @Value("${config.application.secrets.secret-key-password-generate}")
    private String secretKeyPasswordGenerate;

    @Value("${config.application.otp.app-name}")
    private String otpAppName;

    @Value("${config.application.otp.interval-seconds}")
    private int otpIntervalSeconds;

    @Value("${config.application.otp.email-interval-seconds}")
    private int otpEmailIntervalSeconds;

    @Value("${client.keycloak.host}")
    private String keycloakHost;

    @Value("${client.keycloak.realm}")
    private String keycloakRealm;

    @Value("${client.keycloak.client-id}")
    private String keycloakClientId;

    @Value("${client.keycloak.client-secret}")
    private String keycloakClientSecret;

    @Value("${client.keycloak.grant-type}")
    private String keycloakGrantType;

    @Value("${client.keycloak.introspection-uri}")
    private String keycloakIntrospectionUri;

    @Value("${client.keycloak.policy-password-expire-quantity}")
    private String keycloakPolicyPasswordExpireQuantity;

    @Value("${client.keycloak.redirect-uri}")
    private String keycloakRedirectUri;

    @Value("${config.application.validate-user-type-access-token}")
    private Boolean validateUserTypeAccessToken;

    @Value("${nubo.user.management.type.participant-afp-id}")
    private String typeParticipantAfpId;

    @Value("${nubo.user.information.password-change.email}")
    private String passwordChangeEmail;

    @Value("${nubo.user.information.password-change.phone-number}")
    private String passwordChangePhone;

    @Value("${client.email.host}")
    private String emailHost;

}

```

## src/main/java/com/nubo/user/management/api/application/properties/PropertiesContext.java

```java
package com.nubo.user.management.api.application.properties;

import com.nubo.user.management.api.application.context.GlobalContext;
import com.nubo.user.management.api.application.util.ApplicationUtils;
import com.nubo.user.management.api.models.enums.PropertiesEnum;
import org.springframework.util.ObjectUtils;

import java.time.LocalDateTime;
import java.time.OffsetDateTime;
import java.time.ZoneOffset;
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

    public static OffsetDateTime getClientOffsetDatetime() {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern(ApplicationUtils.getFormatDatetime());
        String clientDatetime = GlobalContext.getProperty(PropertiesEnum.CLIENT_DATETIME.getValue());

        if (ObjectUtils.isEmpty(clientDatetime)) {
            return OffsetDateTime.now(ZoneOffset.UTC);
        }

        LocalDateTime localDateTime = LocalDateTime.parse(clientDatetime, formatter);

        return localDateTime.atOffset(ZoneOffset.UTC);
    }

    public static String getVersion() {
        return GlobalContext.getProperty(PropertiesEnum.VERSION_API.getValue());
    }

    public static String getAuthToken() {
        return GlobalContext.getProperty(PropertiesEnum.AUTH_TOKEN.getValue());
    }

}

```

## src/main/java/com/nubo/user/management/api/application/util/ApplicationUtils.java

```java
package com.nubo.user.management.api.application.util;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.nubo.user.management.api.exception.ServiceException;
import com.nubo.user.management.api.exception.error.ErrorCode;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class ApplicationUtils {

    private static final ObjectMapper MAPPER = new ObjectMapper();
    private static final String FORMAT_DATETIME = "yyyy-MM-dd'T'HH:mm:ss";
    private static final String FORMAT_DATE = "yyyy-MM-dd";

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

## src/main/java/com/nubo/user/management/api/application/util/RestClientUtils.java

```java
package com.nubo.user.management.api.application.util;

import lombok.RequiredArgsConstructor;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestClient;

import java.net.URI;
import java.util.List;
import java.util.Map;

@Component
@RequiredArgsConstructor
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

    public ResponseEntity<List<Map<String, Object>>> requestWithResponseList(URI url, HttpMethod method,
                                                                             HttpHeaders headers,
                                                                             MultiValueMap<String, String> formUrlEncoded) {
        return restClient
                .method(method)
                .uri(url)
                .headers(h -> h.addAll(headers))
                .body(formUrlEncoded)
                .retrieve()
                .toEntity(new ParameterizedTypeReference<>() {
                });
    }

    public ResponseEntity<String> requestWithResponseString(URI url, HttpMethod method,
                                                            HttpHeaders headers,
                                                            MultiValueMap<String, String> formUrlEncoded) {
        return restClient
                .method(method)
                .uri(url)
                .headers(h -> h.addAll(headers))
                .body(formUrlEncoded)
                .retrieve()
                .toEntity(new ParameterizedTypeReference<>() {
                });
    }


}

```

## src/main/java/com/nubo/user/management/api/client/email/service/EmailClient.java

```java
package com.nubo.user.management.api.client.email.service;

import com.nubo.user.management.api.models.dto.request.EmailTemplateInDto;

public interface EmailClient {

    void sendEmailTemplate(EmailTemplateInDto emailTemplateInDto);

}

```

## src/main/java/com/nubo/user/management/api/client/email/service/impl/EmailClientImpl.java

```java
package com.nubo.user.management.api.client.email.service.impl;

import java.net.URI;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.util.UriComponentsBuilder;

import com.nubo.user.management.api.application.contansts.EmailConstants;
import com.nubo.user.management.api.application.properties.PropertiesConfig;
import com.nubo.user.management.api.application.properties.PropertiesContext;
import com.nubo.user.management.api.application.util.ApplicationUtils;
import com.nubo.user.management.api.application.util.RestClientUtils;
import com.nubo.user.management.api.client.email.service.EmailClient;
import com.nubo.user.management.api.exception.ServiceException;
import com.nubo.user.management.api.exception.error.ErrorCode;
import com.nubo.user.management.api.models.dto.request.EmailTemplateInDto;
import com.nubo.user.management.api.models.enums.PropertiesEnum;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class EmailClientImpl implements EmailClient {

    private final PropertiesConfig propertiesConfig;
    private final RestClientUtils restClientUtils;

    @Override
    public void sendEmailTemplate(EmailTemplateInDto emailTemplateInDto) {
        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getEmailHost())
                .pathSegment(PropertiesContext.getVersion())
                .pathSegment(EmailConstants.PATH_NOTIFICATION)
                .pathSegment(EmailConstants.PATH_SEND_EMAIL_TEMPLATE)
                .build()
                .toUri();

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set(PropertiesEnum.CLIENT_IP.getValue(), PropertiesContext.getClientIp());
        headers.set(PropertiesEnum.CLIENT_USER.getValue(), PropertiesContext.getClientUser());
        headers.set(PropertiesEnum.CLIENT_DATETIME.getValue(),
                ApplicationUtils.convertLocalDateTimeToString(PropertiesContext.getClientDatetime()));

        try {
            restClientUtils.requestBodyWithNoResponse(uri, HttpMethod.POST, headers, emailTemplateInDto);
        } catch (HttpClientErrorException ex) {
            throw new ServiceException(ErrorCode.OTP_EMAIL_SEND_ERROR, (HttpStatus) ex.getStatusCode(), ex);
        }
    }

}

```

## src/main/java/com/nubo/user/management/api/client/keycloak/service/KeycloakClient.java

```java
package com.nubo.user.management.api.client.keycloak.service;

import com.nubo.user.management.api.models.dto.request.KeycloakCredentialInDto;
import com.nubo.user.management.api.models.dto.request.KeycloakUserInDto;

import java.util.List;
import java.util.Map;

public interface KeycloakClient {

    Map<String, Object> getAccessToken(String username, String password, String grantType, String refreshToken, String code, String codeVerifier);

    void logoutUser(String idUser);

    Map<String, Object> getTokenIntrospect();

    Map<String, Object> getRealm();

    List<Map<String, Object>> getUsers();

    List<Map<String, Object>> getUser(String userName);

    Map<String, Object> getUserById(String id);

    void createUser(KeycloakUserInDto keycloakUserInDto);

    void resetPasswordUser(String idUser, KeycloakCredentialInDto keycloakCredentialInDto);

    void deleteUser(String idUser);

}

```

## src/main/java/com/nubo/user/management/api/client/keycloak/service/impl/KeycloakClientImpl.java

```java
package com.nubo.user.management.api.client.keycloak.service.impl;

import java.net.URI;
import java.util.List;
import java.util.Map;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.util.ObjectUtils;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.util.UriComponentsBuilder;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.nubo.user.management.api.application.contansts.KeycloakConstants;
import com.nubo.user.management.api.application.properties.PropertiesConfig;
import com.nubo.user.management.api.application.properties.PropertiesContext;
import com.nubo.user.management.api.application.util.RestClientUtils;
import com.nubo.user.management.api.client.keycloak.service.KeycloakClient;
import com.nubo.user.management.api.exception.ServiceException;
import com.nubo.user.management.api.exception.error.ErrorCode;
import com.nubo.user.management.api.models.dto.request.KeycloakCredentialInDto;
import com.nubo.user.management.api.models.dto.request.KeycloakUserInDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class KeycloakClientImpl implements KeycloakClient {

    private final PropertiesConfig propertiesConfig;
    private final RestClientUtils restClientUtils;

    @Override
    public Map<String, Object> getAccessToken(String username, String password, String grantType, String refreshToken, String code, String codeVerifier) {
        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getKeycloakHost())
                .pathSegment(KeycloakConstants.PATH_REALM)
                .pathSegment(propertiesConfig.getKeycloakRealm())
                .pathSegment(KeycloakConstants.PATH_PROTOCOL)
                .pathSegment(KeycloakConstants.PATH_OPENID_CONNECT)
                .pathSegment(KeycloakConstants.PATH_TOKEN)
                .build()
                .toUri();

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

        MultiValueMap<String, String> formUrlEncoded = new LinkedMultiValueMap<>();
        formUrlEncoded.add("client_id", propertiesConfig.getKeycloakClientId());
        formUrlEncoded.add("client_secret", propertiesConfig.getKeycloakClientSecret());
        formUrlEncoded.add("grant_type",
                ObjectUtils.isEmpty(grantType) ? propertiesConfig.getKeycloakGrantType() : grantType);

        addAuthorizationCodeParameters(code, codeVerifier, formUrlEncoded);

        if (!ObjectUtils.isEmpty(refreshToken)) {
            formUrlEncoded.add("refresh_token", refreshToken);
        } else {
            formUrlEncoded.add("username", username);
            formUrlEncoded.add("password", password);
        }

        return sendRequestWithResponseObject(uri, HttpMethod.POST, headers, formUrlEncoded);
    }

    private void addAuthorizationCodeParameters(String code, String codeVerifier, MultiValueMap<String, String> formUrlEncoded) {
        if (!ObjectUtils.isEmpty(code)) {
            formUrlEncoded.add("code", code);
        }
        if (!ObjectUtils.isEmpty(codeVerifier)) {
            formUrlEncoded.add("code_verifier", codeVerifier);
        }
        formUrlEncoded.add("redirect_uri", propertiesConfig.getKeycloakRedirectUri());
    }

    @Override
    public void logoutUser(String idUser) {
        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getKeycloakHost())
                .pathSegment(KeycloakConstants.PATH_ADMIN)
                .pathSegment(KeycloakConstants.PATH_REALM)
                .pathSegment(propertiesConfig.getKeycloakRealm())
                .pathSegment(KeycloakConstants.PATH_KEYCLOAK_USERS)
                .pathSegment(idUser)
                .pathSegment(KeycloakConstants.PATH_KEYCLOAK_USER_LOGOUT)
                .build()
                .toUri();

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
        headers.setBearerAuth(validateAuthToken());

        MultiValueMap<String, String> formUrlEncoded = new LinkedMultiValueMap<>();
        formUrlEncoded.add("client_id", propertiesConfig.getKeycloakClientId());
        formUrlEncoded.add("client_secret", propertiesConfig.getKeycloakClientSecret());
        formUrlEncoded.add("token", validateAuthToken());

        sendRequestWithResponseString(uri, HttpMethod.POST, headers, formUrlEncoded);
    }

    @Override
    public Map<String, Object> getTokenIntrospect() {
        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getKeycloakIntrospectionUri())
                .build()
                .toUri();

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

        MultiValueMap<String, String> formUrlEncoded = new LinkedMultiValueMap<>();
        formUrlEncoded.add("client_id", propertiesConfig.getKeycloakClientId());
        formUrlEncoded.add("client_secret", propertiesConfig.getKeycloakClientSecret());
        formUrlEncoded.add("token", validateAuthToken());

        return sendRequestWithResponseObject(uri, HttpMethod.POST, headers, formUrlEncoded);
    }

    @Override
    public Map<String, Object> getRealm() {
        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getKeycloakHost())
                .pathSegment(KeycloakConstants.PATH_ADMIN)
                .pathSegment(KeycloakConstants.PATH_REALM)
                .pathSegment(propertiesConfig.getKeycloakRealm())
                .build()
                .toUri();

        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(validateAuthToken());

        return sendRequestWithResponseObject(uri, HttpMethod.GET, headers, new LinkedMultiValueMap<>());
    }

    @Override
    public List<Map<String, Object>> getUsers() {
        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getKeycloakHost())
                .pathSegment(KeycloakConstants.PATH_ADMIN)
                .pathSegment(KeycloakConstants.PATH_REALM)
                .pathSegment(propertiesConfig.getKeycloakRealm())
                .pathSegment(KeycloakConstants.PATH_KEYCLOAK_USERS)
                .build()
                .toUri();

        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(validateAuthToken());

        return sendRequestWithResponseList(uri, HttpMethod.GET, headers, new LinkedMultiValueMap<>());
    }

    @Override
    public List<Map<String, Object>> getUser(String userName) {
        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getKeycloakHost())
                .pathSegment(KeycloakConstants.PATH_ADMIN)
                .pathSegment(KeycloakConstants.PATH_REALM)
                .pathSegment(propertiesConfig.getKeycloakRealm())
                .pathSegment(KeycloakConstants.PATH_KEYCLOAK_USERS)
                .queryParam("username", userName)
                .build()
                .toUri();

        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(validateAuthToken());

        return sendRequestWithResponseList(uri, HttpMethod.GET, headers, new LinkedMultiValueMap<>());
    }

    @Override
    public Map<String, Object> getUserById(String id) {
        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getKeycloakHost())
                .pathSegment(KeycloakConstants.PATH_ADMIN)
                .pathSegment(KeycloakConstants.PATH_REALM)
                .pathSegment(propertiesConfig.getKeycloakRealm())
                .pathSegment(KeycloakConstants.PATH_KEYCLOAK_USERS)
                .pathSegment(id)
                .build()
                .toUri();

        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(validateAuthToken());

        return sendRequestWithResponseObject(uri, HttpMethod.GET, headers, new LinkedMultiValueMap<>());
    }

    @Override
    public void createUser(KeycloakUserInDto keycloakUserInDto) {
        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getKeycloakHost())
                .pathSegment(KeycloakConstants.PATH_ADMIN)
                .pathSegment(KeycloakConstants.PATH_REALM)
                .pathSegment(propertiesConfig.getKeycloakRealm())
                .pathSegment(KeycloakConstants.PATH_KEYCLOAK_USERS)
                .build()
                .toUri();

        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(validateAuthToken());
        headers.setContentType(MediaType.APPLICATION_JSON);

        ObjectMapper objectMapper = new ObjectMapper();
        Map<String, Object> body = objectMapper.convertValue(keycloakUserInDto,
                new TypeReference<Map<String, Object>>() {
                });

        sendRequestBodyWithNoResponse(uri, HttpMethod.POST, headers, body);
    }

    @Override
    public void resetPasswordUser(String idUser, KeycloakCredentialInDto keycloakCredentialInDto) {
        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getKeycloakHost())
                .pathSegment(KeycloakConstants.PATH_ADMIN)
                .pathSegment(KeycloakConstants.PATH_REALM)
                .pathSegment(propertiesConfig.getKeycloakRealm())
                .pathSegment(KeycloakConstants.PATH_KEYCLOAK_USERS)
                .pathSegment(idUser)
                .pathSegment(KeycloakConstants.PATH_KEYCLOAK_RESET_PASSWORD)
                .build()
                .toUri();

        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(validateAuthToken());
        headers.setContentType(MediaType.APPLICATION_JSON);

        ObjectMapper objectMapper = new ObjectMapper();
        Map<String, Object> body = objectMapper.convertValue(keycloakCredentialInDto,
                new TypeReference<Map<String, Object>>() {
                });

        sendRequestBodyWithNoResponse(uri, HttpMethod.PUT, headers, body);
    }

    @Override
    public void deleteUser(String idUser) {
        URI uri = UriComponentsBuilder
                .fromUriString(propertiesConfig.getKeycloakHost())
                .pathSegment(KeycloakConstants.PATH_ADMIN)
                .pathSegment(KeycloakConstants.PATH_REALM)
                .pathSegment(propertiesConfig.getKeycloakRealm())
                .pathSegment(KeycloakConstants.PATH_KEYCLOAK_USERS)
                .pathSegment(idUser)
                .build()
                .toUri();

        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(validateAuthToken());
        headers.setContentType(MediaType.APPLICATION_JSON);

        sendRequestWithNoResponse(uri, HttpMethod.DELETE, headers);
    }

    private Map<String, Object> sendRequestWithResponseObject(URI url, HttpMethod method, HttpHeaders headers,
            MultiValueMap<String, String> formUrlEncoded) {
        try {
            ResponseEntity<Map> response = restClientUtils.requestWithResponseObject(url, method, headers,
                    formUrlEncoded, Map.class);
            if (!ObjectUtils.isEmpty(response.getBody())) {
                return response.getBody();
            }
        } catch (HttpClientErrorException ex) {
            throw new ServiceException(ErrorCode.KEYCLOAK_ERROR, (HttpStatus) ex.getStatusCode(), ex);
        }
        return Map.of();
    }

    private String sendRequestWithResponseString(URI url, HttpMethod method, HttpHeaders headers,
            MultiValueMap<String, String> formUrlEncoded) {
        try {
            ResponseEntity<String> response = restClientUtils.requestWithResponseString(url, method, headers,
                    formUrlEncoded);
            if (!ObjectUtils.isEmpty(response.getBody())) {
                return response.getBody();
            }
        } catch (HttpClientErrorException ex) {
            throw new ServiceException(ErrorCode.KEYCLOAK_ERROR, (HttpStatus) ex.getStatusCode(), ex);
        }
        return "";
    }

    private void sendRequestBodyWithNoResponse(URI url, HttpMethod method, HttpHeaders headers,
            Map<String, Object> requestBody) {
        try {
            restClientUtils.requestBodyWithNoResponse(url, method, headers, requestBody);
        } catch (HttpClientErrorException ex) {
            throw new ServiceException(ErrorCode.KEYCLOAK_ERROR, (HttpStatus) ex.getStatusCode(), ex);
        }
    }

    private void sendRequestWithNoResponse(URI url, HttpMethod method, HttpHeaders headers) {
        try {
            restClientUtils.requestWithNoResponse(url, method, headers);
        } catch (HttpClientErrorException ex) {
            throw new ServiceException(ErrorCode.KEYCLOAK_ERROR, (HttpStatus) ex.getStatusCode(), ex);
        }
    }

    private List<Map<String, Object>> sendRequestWithResponseList(URI url, HttpMethod method, HttpHeaders headers,
            MultiValueMap<String, String> formUrlEncoded) {
        try {
            ResponseEntity<List<Map<String, Object>>> response = restClientUtils.requestWithResponseList(url,
                    method, headers, formUrlEncoded);
            if (!ObjectUtils.isEmpty(response.getBody())) {
                return response.getBody();
            }
        } catch (HttpClientErrorException ex) {
            throw new ServiceException(ErrorCode.KEYCLOAK_ERROR, (HttpStatus) ex.getStatusCode(), ex);
        }
        return List.of();
    }

    private String validateAuthToken() {
        String authToken = PropertiesContext.getAuthToken();
        if (ObjectUtils.isEmpty(authToken)) {
            throw new ServiceException(ErrorCode.BEARER_TOKEN_IS_REQUIRED, HttpStatus.UNAUTHORIZED);
        }
        return authToken;
    }

}

```

## src/main/java/com/nubo/user/management/api/exception/ServiceException.java

```java
package com.nubo.user.management.api.exception;

import com.nubo.user.management.api.exception.error.ErrorCode;
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

    public ServiceException(ErrorCode errorCode, String messageError) {
        super(messageError);
        this.errorCode = errorCode;
        this.httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
    }

    public ServiceException(ErrorCode errorCode, HttpStatus httpStatus, String messageError) {
        super(messageError);
        this.errorCode = errorCode;
        this.httpStatus = httpStatus;
    }

    public HttpStatus getHttpStatusOrDefault() {
        return this.httpStatus != null ? this.httpStatus : HttpStatus.INTERNAL_SERVER_ERROR;
    }

}

```

## src/main/java/com/nubo/user/management/api/exception/error/ErrorCode.java

```java
package com.nubo.user.management.api.exception.error;

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
    BEARER_TOKEN_IS_REQUIRED("Bearer token is required"),
    RATE_LIMITING_EXCEEDED("Rate Limiting Exceeded"),
    HEADER_CLIENT_IP_REQUIRED("Header client_ip is required"),
    HEADER_CLIENT_IP_INVALID("Header client_ip is invalid"),
    HEADER_CLIENT_USER_REQUIRED("Header client_user is required"),
    HEADER_CLIENT_DATETIME_REQUIRED("Header client_datetime is required"),
    HEADER_CLIENT_DATETIME_INVALID("Header client_datetime is invalid"),
    VERSION_API_NOT_FOUND("Version API not found"),
    COUNTRY_NOT_FOUND("Country not found"),
    PARTICIPANT_NOT_FOUND("Participant not found"),
    PROFILE_NOT_FOUND("Profile not found"),
    PROFILE_STATUS_DELETED("The profile is deleted, the request cannot be made"),
    PROFILE_PARTICIPANT_EXISTS("The profile already exists for this participant"),
    PROFILE_ASSIGNED_USER("The profile is assigned to a user"),
    PARAMETERS_NUBO_NOT_FOUND("Parameters Nubo not found"),
    USER_NOT_FOUND("User not found"),
    INVALID_USERNAME_OR_PASSWORD("Usuario o contraseña incorrectos"),
    USER_INTERNAL_RECOVERY_PASSWORD_ERROR("Password recovery is only valid for external users"),
    USER_STATUS_BLOCKED("The user has been blocked"),
    USER_STATUS_SUSPENDED("The user has been suspended"),
    USER_STATUS_INACTIVE("The user has been inactive"),
    USER_USERNAME_EXISTS("Username already exists"),
    USER_ID_TYPE_IDENTIFICATION_PARTICIPANT_EXISTS("IdType, identification and participant already exists"),
    USER_EMAIL_EXISTS("Email already exists"),
    USER_STATUS_ACTIVE_REQUIRED("User must have active status"),
    USER_STATUS_DELETED("The user is deleted, the request cannot be made"),
    USER_BLOCKED_EXCEEDS_FAILED_ATTEMPTS("El usuario ha sido bloqueado por exceder el número de intentos de inicio de sesión."),
    USER_NO_PERMISSIONS("The user does not have permissions to access the resource"),
    PASSWORD_ENCODE_ERROR("An error has occurred while encode the password"),
    PASSWORD_DECODE_ERROR("An error has occurred while decode the password"),
    EMAIL_NOT_MESSAGING_ERROR("Not Messaging email error"),
    PERMISSION_NOT_FOUND("Permission not found"),
    OTP_GENERATE_ERROR("An error has occurred while generate the OTP"),
    OTP_CODE_INVALID("OTP code is invalid"),
    OTP_SECRET_NOT_FOUND("OTP secret not found, please generate an OTP first"),
    OTP_EMAIL_SEND_ERROR("An error has occurred while sending the OTP email"),
    OTP_EMAIL_NOT_FOUND("OTP email not found"),
    OTP_EMAIL_CODE_INVALID("OTP email code no es valido."),
    OTP_EMAIL_CODE_EXPIRED("OTP email codigo ha expirado."),
    OTP_EMAIL_CODE_USED("OTP email code no es valido."),
    OTP_EMAIL_ATTEMPTS_EXCEEDED("Maximum failed attempts reached, OTP email code invalidated"),
    KEYCLOAK_ERROR("An error has occurred with keycloak"),
    JWT_ERROR("An error has occurred with JWT parsing"),
    JWT_FINDING_USERNAME_ERROR("An error has occurred finding username in JWT"),
    VALIDATE_USER_TYPE_ACCESS_TOKEN("Internal user. Please try signing in with Microsoft"),
    VALIDATE_USER_TYPE_ACCESS_TOKEN_EXTERNAL("External user. Please try signing in with email and password"),
    STATUS_NOT_FOUND("Status not found"),
    USER_BLOCKED_PASSWORD_EXPIRE("The user has been blocked due to an expired password and must change it to regain access"),
    IDENTIFICATION_TYPE_NOT_FOUND("Identification Type not found"),
    KEYCLOAK_POLICY_PASSWORD_EXPIRE_ERROR("An error occurred while converting the policy password to expire"),
    STATUS_FLOW_ERROR("Validate the state change flows"),
    PARTICIPANT_REQUIRED_ERROR("The participant is required"),
    PROFILE_REQUIRED_ERROR("The profile is required"),
    PROFILE_NOT_BELONGS_TO_USER_PARTICIPANT("The profile is not asociate with participant"),
    MULTIPLE_PROFILES_FOR_PARTICIPANT_NOT_ALLOWED("More than one profile cannot be associated with each participant."),
    ENTERPRISE_GROUP_NOT_FOUND("Enterprise group not found."),
    USER_ALREADY_EXISTS_IN_PARTICIPANT("The user already exists in participant"),
    USER_ALREADY_EXISTS_IN_ANOTHER_GROUP("The user exist in other business group"),
    PARTICIPANTS_NOT_IN_SAME_GROUP("The participants dont belong to the same group."),
    NOT_ALL_PARTICIPANTS_HAVE_PROFILE("Exists participants that dont have profile assignment"),
    PARTICIPANT_PROFILE_COUNT_MISMATCH("The profiles dont have the same number of participant to update."),
    ENTERPRISE_GROUP_MISMATCH("The participants belong to different enterprise groups."),
    PROFILE_NOT_ACTIVE("The profile is not active");

    private final String message;

    ErrorCode(String message) {
        this.message = message;
    }

    public String getName() {
        return this.name();
    }
}

```

## src/main/java/com/nubo/user/management/api/exception/error/ErrorResponse.java

```java
package com.nubo.user.management.api.exception.error;

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
@JsonInclude(JsonInclude.Include.NON_EMPTY)
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

## src/main/java/com/nubo/user/management/api/exception/error/ErrorValidation.java

```java
package com.nubo.user.management.api.exception.error;

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
public class ErrorValidation {

    private String id;
    private String description;

}

```

## src/main/java/com/nubo/user/management/api/exception/handler/GlobalExceptionHandler.java

```java
package com.nubo.user.management.api.exception.handler;

import com.nubo.user.management.api.application.properties.PropertiesContext;
import com.nubo.user.management.api.exception.ServiceException;
import com.nubo.user.management.api.exception.error.ErrorCode;
import com.nubo.user.management.api.exception.error.ErrorResponse;
import com.nubo.user.management.api.exception.error.ErrorValidation;
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

## src/main/java/com/nubo/user/management/api/helpers/MapperPageUtil.java

```java
package com.nubo.user.management.api.helpers;

import com.nubo.user.management.api.models.dto.response.PageResponseOutDto;
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

## src/main/java/com/nubo/user/management/api/helpers/MapperUserNuboDynamicSearch.java

```java
package com.nubo.user.management.api.helpers;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.function.Function;

import org.springframework.data.jpa.domain.Specification;
import org.springframework.util.ObjectUtils;
import org.springframework.util.StringUtils;

import com.nubo.user.management.api.models.entity.UserNuboEntity;
import com.nubo.user.management.api.models.enums.SearchOperationEnum;

import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.Path;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class MapperUserNuboDynamicSearch {

    private static final String VALUE_SEPARATOR = ",";
    private static final String EMPTY_STRING = "";
    private static final String WILDCARD_PREFIX = "%";
    private static final String WILDCARD_SUFFIX = "%";

    private MapperUserNuboDynamicSearch() {
    }

    public static Specification<UserNuboEntity> buildCombinedSpecification(String username, String firstname,
            String lastname,
            Integer identificationTypeId, String identification, String email,
            String participant, String profile, Integer status, Integer countryId, Integer enterpriseGroup,
            Integer excludeParticipantId,
            String fieldName, String fieldValue, String operation) {

        return (root, query, criteriaBuilder) -> {

            List<Predicate> predicates = new ArrayList<>();

            if (!ObjectUtils.isEmpty(username))
                predicates.add(criteriaBuilder.equal(root.get("userName"), username));

            if (!ObjectUtils.isEmpty(firstname))
                predicates.add(criteriaBuilder.equal(root.get("firstName"), firstname));

            if (!ObjectUtils.isEmpty(lastname))
                predicates.add(criteriaBuilder.equal(root.get("lastName"), lastname));

            if (!ObjectUtils.isEmpty(identificationTypeId))
                predicates.add(criteriaBuilder.equal(root.get("identificationType").get("id"), identificationTypeId));

            if (!ObjectUtils.isEmpty(identification))
                predicates.add(criteriaBuilder.equal(root.get("identification"), identification));

            if (!ObjectUtils.isEmpty(email))
                predicates.add(criteriaBuilder.equal(root.get("email"), email));

            if (!ObjectUtils.isEmpty(participant))
                predicates.add(criteriaBuilder.equal(root.get("participantSession").get("id"), participant));

            if (!ObjectUtils.isEmpty(profile))
                predicates.add(criteriaBuilder.equal(root.get("profileSession").get("id"), profile));

            if (!ObjectUtils.isEmpty(status))
                predicates.add(criteriaBuilder.equal(root.get("status").get("id"), status));

            if (!ObjectUtils.isEmpty(countryId))
                predicates.add(criteriaBuilder.equal(root.get("country").get("id"), countryId));

            if (!ObjectUtils.isEmpty(enterpriseGroup))
                predicates.add(
                        criteriaBuilder.equal(root.get("participantSession").get("enterpriseGroup"), enterpriseGroup));

            if (!ObjectUtils.isEmpty(excludeParticipantId))
                predicates
                        .add(criteriaBuilder.notEqual(root.get("participantSession").get("id"), excludeParticipantId));

            if (!ObjectUtils.isEmpty(fieldName) && !ObjectUtils.isEmpty(fieldValue)
                    && !ObjectUtils.isEmpty(operation)) {
                SearchOperationEnum searchOperation = SearchOperationEnum.fromValue(operation);
                if (searchOperation != null) {
                    Predicate dynamicPredicate = buildUserNuboFieldPredicate(criteriaBuilder,
                            getUserNuboFieldPath(root, fieldName), fieldValue, searchOperation);
                    if (dynamicPredicate != null) {
                        predicates.add(dynamicPredicate);
                    }
                }
            }

            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));

        };
    }

    private static final Map<String, Function<Root<UserNuboEntity>, Path<?>>> FIELD_PATH_MAPPING = Map.ofEntries(
            Map.entry("id", root -> root.get("id")),
            Map.entry("userName", root -> root.get("userName")),
            Map.entry("firstName", root -> root.get("firstName")),
            Map.entry("lastName", root -> root.get("lastName")),
            Map.entry("identification", root -> root.get("identification")),
            Map.entry("idKeycloak", root -> root.get("idKeycloak")),
            Map.entry("email", root -> root.get("email")),
            Map.entry("verifiedEmail", root -> root.get("verifiedEmail")),
            Map.entry("phoneNumber", root -> root.get("phoneNumber")),
            Map.entry("userGroup", root -> root.get("userGroup")),
            Map.entry("userType", root -> root.get("userType")),
            Map.entry("jiraNumber", root -> root.get("jiraNumber")),
            Map.entry("failedAttempt", root -> root.get("failedAttempt")),
            Map.entry("blocked", root -> root.get("blocked")),
            Map.entry("otp", root -> root.get("otp")),
            Map.entry("previousSession", root -> root.get("previousSession")),
            Map.entry("userCreatedDate", root -> root.get("userCreatedDate")),
            Map.entry("userCreatedBy", root -> root.get("userCreatedBy")),
            Map.entry("lastModifyDate", root -> root.get("lastModifyDate")),
            Map.entry("identificationTypeId", root -> root.get("identificationType").get("id")),
            Map.entry("identificationTypeDescription", root -> root.get("identificationType").get("description")),
            Map.entry("participantId", root -> root.get("participantSession").get("id")),
            Map.entry("participantCode", root -> root.get("participantSession").get("code")),
            Map.entry("participantName", root -> root.get("participantSession").get("name")),
            Map.entry("countryId", root -> root.get("country").get("id")),
            Map.entry("countryCode", root -> root.get("country").get("code")),
            Map.entry("countryName", root -> root.get("country").get("name")),
            Map.entry("profileId", root -> root.get("profileSession").get("id")),
            Map.entry("profileName", root -> root.get("profileSession").get("name")),
            Map.entry("statusId", root -> root.get("status").get("id")),
            Map.entry("statusDescription", root -> root.get("status").get("description")));

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
            String.class, value -> value);

    private enum ComparisonType {
        GREATER_THAN, GREATER_THAN_OR_EQUAL, LESS_THAN, LESS_THAN_OR_EQUAL
    }

    @FunctionalInterface
    private interface PredicateBuilder {
        Predicate build(CriteriaBuilder criteriaBuilder,
                Path<?> fieldPath,
                String fieldValue);
    }

    private static final Map<SearchOperationEnum, PredicateBuilder> OPERATION_BUILDERS = Map.ofEntries(
            Map.entry(SearchOperationEnum.CONTAINS, (cb, path, value) -> {
                String searchValue = StringUtils.hasText(value) ? value.trim().toLowerCase() : EMPTY_STRING;
                return cb.like(cb.lower(path.as(String.class)), WILDCARD_PREFIX + searchValue + WILDCARD_SUFFIX);
            }),
            Map.entry(SearchOperationEnum.NOT_CONTAINS, (cb, path, value) -> {
                String searchValue = StringUtils.hasText(value) ? value.trim().toLowerCase() : EMPTY_STRING;
                return cb.notLike(cb.lower(path.as(String.class)), WILDCARD_PREFIX + searchValue + WILDCARD_SUFFIX);
            }),
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
            Map.entry(SearchOperationEnum.STARTS_WITH,
                    (cb, path, value) -> cb.like(cb.lower(path.as(String.class)), value.toLowerCase() + "%")),
            Map.entry(SearchOperationEnum.ENDS_WITH,
                    (cb, path, value) -> cb.like(cb.lower(path.as(String.class)), "%" + value.toLowerCase())),
            Map.entry(SearchOperationEnum.GREATER_THAN,
                    (cb, path, value) -> buildComparisonPredicate(cb, path, value, ComparisonType.GREATER_THAN)),
            Map.entry(SearchOperationEnum.GREATER_THAN_OR_EQUAL,
                    (cb, path, value) -> buildComparisonPredicate(cb, path, value,
                            ComparisonType.GREATER_THAN_OR_EQUAL)),
            Map.entry(SearchOperationEnum.LESS_THAN,
                    (cb, path, value) -> buildComparisonPredicate(cb, path, value, ComparisonType.LESS_THAN)),
            Map.entry(SearchOperationEnum.LESS_THAN_OR_EQUAL,
                    (cb, path, value) -> buildComparisonPredicate(cb, path, value, ComparisonType.LESS_THAN_OR_EQUAL)),
            Map.entry(SearchOperationEnum.IS_EMPTY,
                    (cb, path, value) -> cb.or(cb.isNull(path), cb.equal(path.as(String.class), ""))),
            Map.entry(SearchOperationEnum.IS_NOT_EMPTY,
                    (cb, path, value) -> cb.and(cb.isNotNull(path), cb.notEqual(path.as(String.class), ""))),
            Map.entry(SearchOperationEnum.IS_ANY_OF, (cb, path, value) -> {
                if (!StringUtils.hasText(value)) {
                    log.warn("IS_ANY_OF operation requires non-empty values");
                    return cb.disjunction();
                }

                String[] values = value.split(VALUE_SEPARATOR);
                if (values.length == 0) {
                    log.warn("No valid values found in: {}", value);
                    return cb.disjunction();
                }

                CriteriaBuilder.In<Object> inClause = cb.in(path);
                boolean hasValidValues = false;

                for (String val : values) {
                    String trimmedVal = val != null ? val.trim() : null;
                    if (StringUtils.hasText(trimmedVal)) {
                        inClause.value(parseFieldValue(path, trimmedVal));
                        hasValidValues = true;
                    }
                }

                return hasValidValues ? inClause : cb.disjunction();
            }));

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
                log.warn("Field type not supported for comparison: {}", fieldType);
                return null;
            }
        } catch (Exception e) {
            log.error("Error in buildComparisonPredicate for type {}: {}", comparisonType, e.getMessage());
            return null;
        }
    }

    public static Path<?> getUserNuboFieldPath(Root<UserNuboEntity> root, String fieldName) {
        if (root == null) {
            log.error("Root cannot be null");
            throw new IllegalArgumentException("Root cannot be null");
        }

        if (!StringUtils.hasText(fieldName)) {
            log.error("Field name cannot be null or empty");
            throw new IllegalArgumentException("Field name cannot be null or empty");
        }

        try {
            Function<Root<UserNuboEntity>, Path<?>> pathFunction = FIELD_PATH_MAPPING.get(fieldName.trim());
            if (pathFunction != null) {
                return pathFunction.apply(root);
            }
            log.warn("Unrecognized field: '{}'. Available fields: {}", fieldName, FIELD_PATH_MAPPING.keySet());
            return null;
        } catch (IllegalArgumentException e) {
            log.error("Invalid field '{}': {}", fieldName, e.getMessage());
            throw e;
        } catch (Exception e) {
            log.error("Unexpected error getting field path '{}': {}", fieldName, e.getMessage(), e);
            return null;
        }
    }

    public static Predicate buildUserNuboFieldPredicate(CriteriaBuilder criteriaBuilder,
            Path<?> fieldPath,
            String fieldValue,
            SearchOperationEnum operation) {
        if (criteriaBuilder == null) {
            throw new IllegalArgumentException("CriteriaBuilder cannot be null");
        }
        if (fieldPath == null) {
            throw new IllegalArgumentException("FieldPath cannot be null");
        }
        if (operation == null) {
            throw new IllegalArgumentException("Operation cannot be null");
        }

        if (requiresFieldValue(operation) && !StringUtils.hasText(fieldValue)) {
            log.warn("Operation {} requires a non-empty value", operation);
            return null;
        }

        try {
            PredicateBuilder builder = OPERATION_BUILDERS.get(operation);
            if (builder == null) {
                log.warn("Unsupported operation: {}. Available operations: {}", operation,
                        OPERATION_BUILDERS.keySet());
                return null;
            }

            return builder.build(criteriaBuilder, fieldPath, fieldValue);
        } catch (IllegalArgumentException e) {
            log.error("Invalid arguments for operation {}: {}", operation, e.getMessage());
            throw e;
        } catch (Exception e) {
            log.error("Unexpected error building predicate for operation {}: {}", operation, e.getMessage(), e);
            return null;
        }
    }

    public static Object parseFieldValue(Path<?> fieldPath, String value) {
        if (fieldPath == null) {
            throw new IllegalArgumentException("FieldPath no puede ser null");
        }

        if (value == null) {
            return null;
        }

        try {
            Class<?> fieldType = fieldPath.getJavaType();
            Function<String, Object> parser = TYPE_PARSERS.get(fieldType);
            return parser != null ? parser.apply(value.trim()) : value.trim();
        } catch (IllegalArgumentException e) {
            log.warn("Error parsing value '{}' for type {}: {}", value, fieldPath.getJavaType(), e.getMessage());
            return value;
        } catch (Exception e) {
            log.error("Unexpected error parsing value '{}' for type {}: {}", value, fieldPath.getJavaType(),
                    e.getMessage(), e);
            return value;
        }
    }

    private static boolean requiresFieldValue(SearchOperationEnum operation) {
        return !Objects.equals(operation, SearchOperationEnum.IS_EMPTY) &&
                !Objects.equals(operation, SearchOperationEnum.IS_NOT_EMPTY);
    }
}

```

## src/main/java/com/nubo/user/management/api/helpers/MapperUserNuboSearch.java

```java
package com.nubo.user.management.api.helpers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.jpa.domain.Specification;
import org.springframework.util.ObjectUtils;

import com.nubo.user.management.api.models.domain.UserParams;
import com.nubo.user.management.api.models.entity.ParticipantUserNuboEntity;
import com.nubo.user.management.api.models.entity.ProfileUserNuboEntity;
import com.nubo.user.management.api.models.entity.UserNuboEntity;

import jakarta.persistence.criteria.Expression;
import jakarta.persistence.criteria.Join;
import jakarta.persistence.criteria.JoinType;
import jakarta.persistence.criteria.Predicate;

public final class MapperUserNuboSearch {

    private MapperUserNuboSearch() {
    }

    public static Specification<UserNuboEntity> buildSpecification(UserParams userParams) {
        return (root, query, criteriaBuilder) -> {
            query.distinct(true);
            List<Predicate> predicates = new ArrayList<>();
            predicates.add(root.get("country").get("code").in("CO", "PE", "CL"));
            if (!ObjectUtils.isEmpty(userParams.username())) {
                String usernamePattern = "%" + userParams.username().toLowerCase() + "%";

                Expression<String> fullName = criteriaBuilder.concat(
                        criteriaBuilder.lower(root.get("firstName")),
                        criteriaBuilder.concat(" ", criteriaBuilder.lower(root.get("lastName"))));

                predicates.add(criteriaBuilder.like(fullName, usernamePattern));
            }
            if (!ObjectUtils.isEmpty(userParams.firstname())) {
                predicates.add(criteriaBuilder.equal(root.get("firstName"), userParams.firstname()));
            }
            if (!ObjectUtils.isEmpty(userParams.lastname())) {
                predicates.add(criteriaBuilder.equal(root.get("lastName"), userParams.lastname()));
            }
            if (!ObjectUtils.isEmpty(userParams.identificationTypeId())) {
                predicates.add(criteriaBuilder.equal(root.get("identificationType").get("id"),
                        userParams.identificationTypeId()));
            }
            if (!ObjectUtils.isEmpty(userParams.identification())) {
                predicates.add(criteriaBuilder.equal(root.get("identification"), userParams.identification()));
            }
            if (!ObjectUtils.isEmpty(userParams.email())) {
                predicates.add(criteriaBuilder.like(root.get("email"), "%" + userParams.email() + "%"));
            }
            if (!ObjectUtils.isEmpty(userParams.participant())) {
                Join<UserNuboEntity, ParticipantUserNuboEntity> participantsJoin = root.join("participantUserNuboList",
                        JoinType.LEFT);
                predicates.add(criteriaBuilder.like(
                        criteriaBuilder.lower(participantsJoin.get("participant").get("name")),
                        "%" + userParams.participant().toLowerCase() + "%"));
            }
            if (!ObjectUtils.isEmpty(userParams.profile())) {
                Join<UserNuboEntity, ProfileUserNuboEntity> profilesJoin = root.join("profileUserNuboList",
                        JoinType.LEFT);
                predicates.add(criteriaBuilder.like(
                        criteriaBuilder.lower(profilesJoin.get("profile").get("name")),
                        "%" + userParams.profile().toLowerCase() + "%"));
            }
            if (!ObjectUtils.isEmpty(userParams.status())) {
                predicates.add(criteriaBuilder.equal(root.get("status").get("id"), userParams.status()));
            }
            if (!ObjectUtils.isEmpty(userParams.countryId())) {
                predicates.add(criteriaBuilder.equal(root.get("country").get("id"), userParams.countryId()));
            }
            if (!ObjectUtils.isEmpty(userParams.excludeParticipantId())) {
                Join<UserNuboEntity, ParticipantUserNuboEntity> participantsJoin = root.join("participantUserNuboList",
                        JoinType.LEFT);
                predicates.add(criteriaBuilder.notEqual(
                        participantsJoin.get("participant").get("id"), userParams.excludeParticipantId()));
            }

            if (!ObjectUtils.isEmpty(userParams.enterpriseGroup())) {
                Join<UserNuboEntity, ParticipantUserNuboEntity> participantsJoin = root.join("participantUserNuboList",
                        JoinType.LEFT);
                predicates.add(criteriaBuilder.and(
                        criteriaBuilder.isNotNull(participantsJoin.get("participant").get("enterpriseGroup").get("id")),
                        criteriaBuilder.equal(participantsJoin.get("participant").get("enterpriseGroup").get("id"),
                                userParams.enterpriseGroup())));
            }

            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }

}

```

## src/main/java/com/nubo/user/management/api/helpers/MapperUtil.java

```java
package com.nubo.user.management.api.helpers;

import com.nubo.user.management.api.models.dto.response.ContactDetailOutDto;
import com.nubo.user.management.api.models.dto.response.CountryOutDto;
import com.nubo.user.management.api.models.dto.response.CurrencyOutDto;
import com.nubo.user.management.api.models.dto.response.DepartmentOutDto;
import com.nubo.user.management.api.models.dto.response.DetailUserOutDto;
import com.nubo.user.management.api.models.dto.response.EnterpriseGroupOutDto;
import com.nubo.user.management.api.models.dto.response.IdentificationTypeOutDto;
import com.nubo.user.management.api.models.dto.response.LogSessionTrackingOutDto;
import com.nubo.user.management.api.models.dto.response.ParticipantOutDto;
import com.nubo.user.management.api.models.dto.response.ProfileDetailOutDto;
import com.nubo.user.management.api.models.dto.response.ProfileOutDto;
import com.nubo.user.management.api.models.dto.response.StatusOutDto;
import com.nubo.user.management.api.models.dto.response.TaxStatusOutDto;
import com.nubo.user.management.api.models.dto.response.TypeOutDto;
import com.nubo.user.management.api.models.dto.response.UserNuboOutDto;
import com.nubo.user.management.api.models.entity.CountryEntity;
import com.nubo.user.management.api.models.entity.CurrencyEntity;
import com.nubo.user.management.api.models.entity.DepartmentEntity;
import com.nubo.user.management.api.models.entity.EnterpriseGroupEntity;
import com.nubo.user.management.api.models.entity.IdentificationTypeEntity;
import com.nubo.user.management.api.models.entity.LogSessionTrackingEntity;
import com.nubo.user.management.api.models.entity.ParticipantEntity;
import com.nubo.user.management.api.models.entity.ParticipantUserNuboEntity;
import com.nubo.user.management.api.models.entity.ProfileEntity;
import com.nubo.user.management.api.models.entity.ProfileUserNuboEntity;
import com.nubo.user.management.api.models.entity.StatusEntity;
import com.nubo.user.management.api.models.entity.TaxStatusEntity;
import com.nubo.user.management.api.models.entity.TypeEntity;
import com.nubo.user.management.api.models.entity.UserNuboEntity;
import org.springframework.util.ObjectUtils;

import java.util.ArrayList;
import java.util.Collections;

public final class MapperUtil {

    private MapperUtil() {
    }

    public static UserNuboOutDto userNuboEntityToUserNuboOutDto(UserNuboEntity userNuboEntity) {
        return UserNuboOutDto.builder()
                .id(userNuboEntity.getId())
                .userName(userNuboEntity.getUserName())
                .firstName(userNuboEntity.getFirstName())
                .lastName(userNuboEntity.getLastName())
                .identificationType(
                        identificationTypeEntityToIdentificationTypeOutDto(userNuboEntity.getIdentificationType()))
                .identification(userNuboEntity.getIdentification())
                .idKeycloak(userNuboEntity.getIdKeycloak())
                .email(userNuboEntity.getEmail())
                .verifiedEmail(userNuboEntity.getVerifiedEmail())
                .phoneNumber(userNuboEntity.getPhoneNumber())
                .userGroup(userNuboEntity.getUserGroup())
                .userType(userNuboEntity.getUserType())
                .jiraNumber(userNuboEntity.getJiraNumber())
                .failedAttempt(userNuboEntity.getFailedAttempt())
                .blocked(userNuboEntity.getBlocked())
                .participants(ObjectUtils.isEmpty(userNuboEntity.getParticipantUserNuboList()) ? new ArrayList<>()
                        : userNuboEntity.getParticipantUserNuboList().stream()
                                .map(MapperUtil::participantUserNuboEntityToParticipantOutDto)
                                .toList())
                .participant(participantEntityToParticipantOutDto(userNuboEntity.getParticipantSession()))
                .country(countryEntityToCountryOutDto(userNuboEntity.getCountry()))
                .profile(profileEntityToProfileOutDto(userNuboEntity.getProfileSession()))
                .profiles(ObjectUtils.isEmpty(userNuboEntity.getProfileUserNuboList()) ? new ArrayList<>()
                        : userNuboEntity.getProfileUserNuboList().stream()
                                .map(MapperUtil::profileUserNuboEntityToProfileOutDto)
                                .toList())
                .status(statusEntityToStatusOutDto(userNuboEntity.getStatus()))
                .otp(userNuboEntity.getOtp())
                .otpCreatedDate(userNuboEntity.getOtpCreatedDate())
                .otpMail(userNuboEntity.getOtpMail())
                .otpExpirationDate(userNuboEntity.getOtpExpirationDate())
                .otpStatus(statusEntityToStatusOutDto(userNuboEntity.getOtpStatus()))
                .previousSession(userNuboEntity.getPreviousSession())
                .userCreatedDate(userNuboEntity.getUserCreatedDate())
                .userCreatedBy(userNuboEntity.getUserCreatedBy())
                .lastModifyDate(userNuboEntity.getLastModifyDate())
                .build();
    }

    public static ProfileOutDto profileEntityToProfileOutDto(ProfileEntity profileEntity) {
        if (ObjectUtils.isEmpty(profileEntity))
            return null;
        return ProfileOutDto.builder()
                .id(profileEntity.getId())
                .name(profileEntity.getName())
                .description(ObjectUtils.isEmpty(profileEntity.getDescription())
                        ? null
                        : profileEntity.getDescription())
                .participant(participantEntityToParticipantOutDto(profileEntity.getParticipant()))
                .status(statusEntityToStatusOutDto(profileEntity.getStatus()))
                .lastModifyUser(profileEntity.getLastModifyUser())
                .lastModifyDate(ObjectUtils.isEmpty(profileEntity.getLastModifyDateTime())
                        ? null
                        : profileEntity.getLastModifyDateTime().toLocalDate())
                .lastModifyDateTime(profileEntity.getLastModifyDateTime())
                .build();
    }

    public static ProfileDetailOutDto profileEntityToProfileDetailOutDto(ProfileEntity profileEntity) {
        return ProfileDetailOutDto.builder()
                .id(profileEntity.getId())
                .name(profileEntity.getName())
                .description(ObjectUtils.isEmpty(profileEntity.getDescription())
                        ? null
                        : profileEntity.getDescription())
                .participant(participantEntityToParticipantOutDto(profileEntity.getParticipant()))
                .build();
    }

    public static ParticipantOutDto participantEntityToParticipantOutDto(ParticipantEntity participantEntity) {
        if (ObjectUtils.isEmpty(participantEntity))
            return null;
        return ParticipantOutDto.builder()
                .id(participantEntity.getId())
                .code(participantEntity.getCode())
                .documentNumber(participantEntity.getDocumentNumber())
                .identificationType(identificationTypeEntityToIdentificationTypeOutDto(
                        participantEntity.getIdentificationTypeEntity()))
                .name(participantEntity.getName())
                .shortName(participantEntity.getShortName())
                .type(typeEntityToTypeOutDto(participantEntity.getType()))
                .mnemonic(participantEntity.getMnemonic())
                .country(countryEntityToCountryOutDto(participantEntity.getCountry()))
                .registrationDate(participantEntity.getRegistrationDate())
                .taxCode(participantEntity.getTaxCode())
                .status(statusEntityToStatusOutDto(participantEntity.getStatus()))
                .nitClearingHouse(participantEntity.getNitClearingHouse())
                .taxStatus(taxStatusEntityToTaxStatusOutDto(participantEntity.getTaxStatus()))
                .typeEntity(participantEntity.getTypeEntity())
                .marginAccount(participantEntity.getMarginAccount())
                .masterAccount(participantEntity.getMasterAccount())
                .directAllocation(participantEntity.getDirectAllocation())
                .marketMaker(participantEntity.getMarketMaker())
                .enabled(participantEntity.getEnabled())
                .custodian(participantEntity.getCustodian())
                .enterpriseGroup(ObjectUtils.isEmpty(participantEntity.getEnterpriseGroup()) ? null
                        : enterpriseGroupEntityToEnterpriseGroupOutDto(participantEntity.getEnterpriseGroup()))
                .build();
    }

    public static LogSessionTrackingOutDto logSessionEntityToLogSessionOutDto(
            LogSessionTrackingEntity logSessionTrackingEntity) {
        return LogSessionTrackingOutDto.builder()
                .id(logSessionTrackingEntity.getId())
                .actionDate(logSessionTrackingEntity.getActionDate())
                .actionType(logSessionTrackingEntity.getActionType())
                .actionDestination(logSessionTrackingEntity.getActionDestination())
                .ipOrigin(logSessionTrackingEntity.getIpOrigin())
                .participant(participantEntityToParticipantOutDto(logSessionTrackingEntity.getParticipant()))
                .country(countryEntityToCountryOutDto(logSessionTrackingEntity.getCountry()))
                .userNubo(userNuboEntityToUserNuboOutDto(logSessionTrackingEntity.getUserNubo()))
                .status(statusEntityToStatusOutDto(logSessionTrackingEntity.getStatus()))
                .build();
    }

    public static CountryOutDto countryEntityToCountryOutDto(CountryEntity countryEntity) {
        if (ObjectUtils.isEmpty(countryEntity))
            return null;
        return CountryOutDto.builder()
                .id(countryEntity.getId())
                .code(countryEntity.getCode())
                .name(countryEntity.getName())
                .currency(currencyEntityToCurrencyOutDto(countryEntity.getCurrency()))
                .timeZone(countryEntity.getTimeZone())
                .build();
    }

    public static CurrencyOutDto currencyEntityToCurrencyOutDto(CurrencyEntity currencyEntity) {
        if (ObjectUtils.isEmpty(currencyEntity))
            return null;
        return CurrencyOutDto.builder()
                .id(currencyEntity.getId())
                .code(currencyEntity.getCode())
                .name(currencyEntity.getName())
                .build();
    }

    public static StatusOutDto statusEntityToStatusOutDto(StatusEntity statusEntity) {
        if (ObjectUtils.isEmpty(statusEntity))
            return null;
        return StatusOutDto.builder()
                .id(statusEntity.getId())
                .description(statusEntity.getDescription())
                .category(statusEntity.getCategory())
                .build();
    }

    public static TypeOutDto typeEntityToTypeOutDto(TypeEntity typeEntity) {
        if (ObjectUtils.isEmpty(typeEntity))
            return null;
        return TypeOutDto.builder()
                .id(typeEntity.getId())
                .description(typeEntity.getDescription())
                .category(typeEntity.getCategory())
                .build();
    }

    public static DepartmentOutDto departmentEntityToDepartmentOutDto(DepartmentEntity departmentEntity) {
        if (ObjectUtils.isEmpty(departmentEntity))
            return null;
        return DepartmentOutDto.builder()
                .id(departmentEntity.getId())
                .description(departmentEntity.getDescription())
                .build();
    }

    public static IdentificationTypeOutDto identificationTypeEntityToIdentificationTypeOutDto(
            IdentificationTypeEntity identificationTypeEntity) {
        if (ObjectUtils.isEmpty(identificationTypeEntity))
            return null;
        return IdentificationTypeOutDto.builder()
                .id(identificationTypeEntity.getId())
                .description(identificationTypeEntity.getDescription())
                .build();
    }

    public static TaxStatusOutDto taxStatusEntityToTaxStatusOutDto(TaxStatusEntity taxStatusEntity) {
        if (ObjectUtils.isEmpty(taxStatusEntity))
            return null;
        return TaxStatusOutDto.builder()
                .id(taxStatusEntity.getId())
                .description(taxStatusEntity.getDescription())
                .build();
    }

    public static EnterpriseGroupOutDto enterpriseGroupEntityToEnterpriseGroupOutDto(
            EnterpriseGroupEntity enterpriseGroupEntity) {
        if (ObjectUtils.isEmpty(enterpriseGroupEntity))
            return null;
        return EnterpriseGroupOutDto.builder()
                .id(enterpriseGroupEntity.getId())
                .code(enterpriseGroupEntity.getCode())
                .name(enterpriseGroupEntity.getName())
                .build();
    }

    public static DetailUserOutDto userNuboEntityToDetailUserOutDto(UserNuboEntity userNuboEntity) {
        return DetailUserOutDto.builder()
                .id(userNuboEntity.getId())
                .name(userNuboEntity.getFirstName() + " " + userNuboEntity.getLastName())
                .identificationType(
                        identificationTypeEntityToIdentificationTypeOutDto(userNuboEntity.getIdentificationType()))
                .identification(userNuboEntity.getIdentification())
                .country(countryEntityToCountryOutDto(userNuboEntity.getCountry()))
                .email(userNuboEntity.getEmail())
                .profiles(ObjectUtils.isEmpty(userNuboEntity.getProfileUserNuboList())
                        ? Collections.emptyList()
                        : userNuboEntity.getProfileUserNuboList().stream()
                                .map(rel -> profileEntityToProfileDetailOutDto(rel.getProfile()))
                                .toList())
                .status(statusEntityToStatusOutDto(userNuboEntity.getStatus()))
                .build();
    }

    public static ParticipantOutDto participantUserNuboEntityToParticipantOutDto(
            ParticipantUserNuboEntity participantUserNuboEntity) {
        if (participantUserNuboEntity == null)
            return null;
        ParticipantEntity participantEntity = participantUserNuboEntity.getParticipant();
        return participantEntityToParticipantOutDto(participantEntity);
    }

    public static ProfileOutDto profileUserNuboEntityToProfileOutDto(ProfileUserNuboEntity profileUserNuboEntity) {
        if (ObjectUtils.isEmpty(profileUserNuboEntity))
            return null;
        ProfileEntity profileEntity = profileUserNuboEntity.getProfile();
        return profileEntityToProfileOutDto(profileEntity);
    }

    public static ContactDetailOutDto userNuboEntityToContactDetailOutDto(UserNuboEntity userNuboEntity) {
        return ContactDetailOutDto.builder()
                .id(userNuboEntity.getId())
                .email(userNuboEntity.getEmail())
                .firstName(userNuboEntity.getFirstName())
                .lastName(userNuboEntity.getLastName())
                .build();
    }
}

```

## src/main/java/com/nubo/user/management/api/helpers/OtpUtil.java

```java
package com.nubo.user.management.api.helpers;

import com.google.zxing.BarcodeFormat;
import com.google.zxing.WriterException;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.qrcode.QRCodeWriter;
import com.nubo.user.management.api.application.properties.PropertiesConfig;
import com.nubo.user.management.api.exception.ServiceException;
import com.nubo.user.management.api.exception.error.ErrorCode;
import lombok.RequiredArgsConstructor;
import org.apache.commons.codec.binary.Base32;
import org.springframework.stereotype.Component;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.SecureRandom;
import java.time.LocalDateTime;
import java.util.Base64;

@Component
@RequiredArgsConstructor
public class OtpUtil {

    private static final int EMAIL_CODE_LENGTH = 6;
    private static final String HASH_ALGORITHM = "SHA-256";

    private final PropertiesConfig propertiesConfig;
    private final SecureRandom secureRandom = new SecureRandom();

    public String generateQrCodeImageUri(String secret, String user) {
        try {
            String qrData = "otpauth://totp/" + propertiesConfig.getOtpAppName() + ":" +
                    user + "?secret=" + secret + "&issuer=" + propertiesConfig.getOtpAppName();
            QRCodeWriter qrCodeWriter = new QRCodeWriter();
            BitMatrix bitMatrix = qrCodeWriter.encode(qrData, BarcodeFormat.QR_CODE, 200, 200);
            ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
            MatrixToImageWriter.writeToStream(bitMatrix, "PNG", byteArrayOutputStream);
            byte[] imageData = byteArrayOutputStream.toByteArray();
            return "data:image/png;base64," + Base64.getEncoder().encodeToString(imageData);
        } catch (WriterException | IOException ex) {
            throw new ServiceException(ErrorCode.OTP_GENERATE_ERROR, ex);
        }
    }

    public String generateNewSecret(Long idUser, LocalDateTime createDateOtp) {
        try {
            byte[] randomBytes = new byte[16];
            secureRandom.nextBytes(randomBytes);

            String input = String.format("%s:%s:%s", idUser,
                    createDateOtp, new String(randomBytes, StandardCharsets.UTF_8));

            MessageDigest digest = MessageDigest.getInstance("SHA-256");
            byte[] hashBytes = digest.digest(input.getBytes(StandardCharsets.UTF_8));

            Base32 base32 = new Base32();
            String base32Secret = base32.encodeAsString(hashBytes);

            return base32Secret.substring(0, 16);
        } catch (Exception ex) {
            throw new ServiceException(ErrorCode.OTP_GENERATE_ERROR, ex);
        }
    }

    public boolean isOtpValid(String secret, String code) {
        long timeIndex = System.currentTimeMillis() / 1000 / 30;
        if (propertiesConfig.getOtpIntervalSeconds() <= 30) {
            return generateOtp(secret, timeIndex).equals(code);
        }
        int intervalMinute = (int) Math.ceil((double) propertiesConfig.getOtpIntervalSeconds() / 60);
        int interval = (intervalMinute * 2) - 1;
        for (int i = -interval; i < interval; i++) {
            if (generateOtp(secret, timeIndex + i).equals(code)) {
                return true;
            }
        }
        return false;
    }

    public String generateCurrentOtp(String secret, int intervalSeconds) {
        long timeIndex = System.currentTimeMillis() / 1000 / intervalSeconds;
        return generateOtp(secret, timeIndex);
    }

    /**
     * Generates the OTP for an explicit reference instant (epoch seconds) instead of the real server clock,
     * so email OTP generation/validation can share the same client-supplied time reference end to end.
     */
    public String generateOtpAt(String secret, int intervalSeconds, long epochSeconds) {
        long timeIndex = epochSeconds / intervalSeconds;
        return generateOtp(secret, timeIndex);
    }

    /**
     * Validates a code generated at some earlier point in time (e.g. sent by email), tolerating the
     * delay between generation and submission. Both the current time index and the elapsed time are
     * computed from the same reference clock (epochSecondsNow) so the lookback bound (secondsSinceRequest)
     * stays consistent with the index used at generation time, while still rejecting codes issued before
     * the most recent OTP request (e.g. a prior resend), preventing replay.
     */
    public boolean isOtpValidWithinWindow(String secret, String code, int validitySeconds, int intervalSeconds,
            long epochSecondsNow, long secondsSinceRequest) {
        long timeIndex = epochSecondsNow / intervalSeconds;
        int maxSteps = (int) Math.ceil((double) validitySeconds / intervalSeconds);
        int steps = Math.min(maxSteps, (int) Math.ceil((double) Math.max(secondsSinceRequest, 0) / intervalSeconds));
        for (int i = 0; i <= steps; i++) {
            if (generateOtp(secret, timeIndex - i).equals(code)) {
                return true;
            }
        }
        return false;
    }

    private String generateOtp(String secret, long timeIndex) {
        try {
            byte[] key = new Base32().decode(secret);
            byte[] data = longToBytes(timeIndex);
            String hmacAlgorithm = "HmacSHA1";
            int codeLength = 6;

            Mac mac = Mac.getInstance(hmacAlgorithm);
            SecretKeySpec secretKeySpec = new SecretKeySpec(key, hmacAlgorithm);
            mac.init(secretKeySpec);

            byte[] hmac = mac.doFinal(data);

            int offset = hmac[hmac.length - 1] & 0x0F;
            int truncatedHash = ((hmac[offset] & 0x7F) << 24)
                    | ((hmac[offset + 1] & 0xFF) << 16)
                    | ((hmac[offset + 2] & 0xFF) << 8)
                    | (hmac[offset + 3] & 0xFF);

            int otp = truncatedHash % (int) Math.pow(10, codeLength);
            String format = "%0" + codeLength + "d";
            return String.format(format, otp);
        } catch (Exception ex) {
            throw new ServiceException(ErrorCode.OTP_GENERATE_ERROR, ex);
        }
    }

    private byte[] longToBytes(long value) {
        return new byte[]{
                (byte) (value >> 56),
                (byte) (value >> 48),
                (byte) (value >> 40),
                (byte) (value >> 32),
                (byte) (value >> 24),
                (byte) (value >> 16),
                (byte) (value >> 8),
                (byte) value
        };
    }

    public String generateNumericCode() {
        int bound = (int) Math.pow(10, EMAIL_CODE_LENGTH);
        int code = secureRandom.nextInt(bound);
        return String.format("%0" + EMAIL_CODE_LENGTH + "d", code);
    }

    public String hashOtpCode(String code) {
        try {
            MessageDigest digest = MessageDigest.getInstance(HASH_ALGORITHM);
            byte[] hashBytes = digest.digest(code.getBytes(StandardCharsets.UTF_8));
            StringBuilder hexString = new StringBuilder();
            for (byte b : hashBytes) {
                hexString.append(String.format("%02x", b));
            }
            return hexString.toString();
        } catch (Exception ex) {
            throw new ServiceException(ErrorCode.OTP_GENERATE_ERROR, ex);
        }
    }

    public boolean matches(String code, String codeHash) {
        return hashOtpCode(code).equals(codeHash);
    }

}

```

## src/main/java/com/nubo/user/management/api/helpers/PasswordUtil.java

```java
package com.nubo.user.management.api.helpers;

import com.nubo.user.management.api.application.properties.PropertiesConfig;
import com.nubo.user.management.api.exception.ServiceException;
import com.nubo.user.management.api.exception.error.ErrorCode;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;

import javax.crypto.Cipher;
import javax.crypto.SecretKey;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.util.ArrayList;
import java.util.Base64;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Component
@RequiredArgsConstructor
public class PasswordUtil {

    private final PropertiesConfig propertiesConfig;

    private static final String ALGORITHM = "AES";
    private static final String TRANSFORMATION = "AES/CBC/PKCS5Padding";
    private static final int IV_SIZE = 16;
    private static final String LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
    private static final String UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    private static final String DIGITS = "0123456789";
    private static final String SPECIAL_CHARACTERS = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    private static final int MIN_NUMBERS = 3;

    /**
     * Generate a dynamic 12-character password with the following conditions
     * 3 lowercase
     * 3 uppercase
     * 3 special characters
     * 3 numbers
     * Characters cannot be repeated or consecutive
     *
     * @return String dynamic base64 encoded password with secret key
     */
    public String generatePassword() {
        List<Character> uppercase = pickUniqueCharacters(UPPERCASE);
        List<Character> lowercase = pickUniqueCharacters(LOWERCASE);
        List<Character> digits = pickUniqueCharacters(DIGITS);
        List<Character> special = pickUniqueCharacters(SPECIAL_CHARACTERS);

        List<List<Character>> characterGroups = new ArrayList<>(List.of(uppercase, lowercase, digits, special));
        shuffleGroups(characterGroups);

        StringBuilder passwordFinal = new StringBuilder();
        for (int i = 0; i < MIN_NUMBERS; i++) {
            for (List<Character> group : characterGroups) {
                passwordFinal.append(group.get(i));
            }
        }
        return encodePassword(passwordFinal.toString());
    }

    /**
     * Password encoded in base64 with secret key
     *
     * @return String
     */
    public String encodePassword(String password) {
        try {
            Cipher cipher = Cipher.getInstance(TRANSFORMATION);
            byte[] iv = new byte[IV_SIZE];
            SecureRandom random = new SecureRandom();
            random.nextBytes(iv);
            IvParameterSpec ivParams = new IvParameterSpec(iv);
            cipher.init(Cipher.ENCRYPT_MODE, generateSecretKey(), ivParams);

            byte[] encryptedData = cipher.doFinal(password.getBytes());
            byte[] encryptedIVAndText = new byte[IV_SIZE + encryptedData.length];

            System.arraycopy(iv, 0, encryptedIVAndText, 0, IV_SIZE);
            System.arraycopy(encryptedData, 0, encryptedIVAndText, IV_SIZE, encryptedData.length);

            return Base64.getEncoder().encodeToString(encryptedIVAndText);
        } catch (Exception ex) {
            throw new ServiceException(ErrorCode.PASSWORD_ENCODE_ERROR, ex);
        }
    }

    /**
     * Password decode in base64 with secret key
     *
     * @return String
     */
    public String decodePassword(String encodedPassword) {
        try {
            byte[] ivAndEncryptedText = Base64.getDecoder().decode(encodedPassword);
            byte[] iv = new byte[IV_SIZE];
            byte[] encryptedData = new byte[ivAndEncryptedText.length - IV_SIZE];

            System.arraycopy(ivAndEncryptedText, 0, iv, 0, IV_SIZE);
            System.arraycopy(ivAndEncryptedText, IV_SIZE, encryptedData, 0, encryptedData.length);

            Cipher cipher = Cipher.getInstance(TRANSFORMATION);
            IvParameterSpec ivParams = new IvParameterSpec(iv);
            cipher.init(Cipher.DECRYPT_MODE, generateSecretKey(), ivParams);

            byte[] decryptedData = cipher.doFinal(encryptedData);
            String a = new String(decryptedData);
            return new String(decryptedData);
        } catch (Exception ex) {
            throw new ServiceException(ErrorCode.PASSWORD_DECODE_ERROR, HttpStatus.BAD_REQUEST);
        }
    }

    private SecretKey generateSecretKey() throws NoSuchAlgorithmException {
        MessageDigest digest = MessageDigest.getInstance("SHA-256");
        byte[] keyBytes = digest.digest(propertiesConfig.getSecretKeyPasswordGenerate().getBytes());
        return new SecretKeySpec(keyBytes, 0, 16, ALGORITHM);
    }

    private List<Character> pickUniqueCharacters(String characterSet) {
        SecureRandom random = new SecureRandom();
        Set<Character> addedCharacters = new HashSet<>();
        List<Character> characters = new ArrayList<>();
        while (addedCharacters.size() < MIN_NUMBERS) {
            char nextChar = characterSet.charAt(random.nextInt(characterSet.length()));
            if (addedCharacters.add(nextChar)) {
                characters.add(nextChar);
            }
        }
        return characters;
    }

    private void shuffleGroups(List<List<Character>> groups) {
        SecureRandom random = new SecureRandom();
        for (int i = groups.size() - 1; i > 0; i--) {
            int j = random.nextInt(i + 1);
            List<Character> temp = groups.get(i);
            groups.set(i, groups.get(j));
            groups.set(j, temp);
        }
    }

}
```

## src/main/java/com/nubo/user/management/api/helpers/UserUtil.java

```java
package com.nubo.user.management.api.helpers;

import java.util.Objects;

import org.springframework.http.HttpStatus;
import org.springframework.util.ObjectUtils;

import com.nubo.user.management.api.application.properties.PropertiesContext;
import com.nubo.user.management.api.exception.ServiceException;
import com.nubo.user.management.api.exception.error.ErrorCode;
import com.nubo.user.management.api.models.dto.request.UserNuboUpdateInDto;
import com.nubo.user.management.api.models.entity.UserNuboEntity;
import com.nubo.user.management.api.models.enums.StatusEnum;
import com.nubo.user.management.api.models.enums.UserValueEnum;

public final class UserUtil {

    private UserUtil() {
    }

    public static void validateStatusUser(UserNuboEntity userNuboEntity) {
        if (userNuboEntity == null) {
            throw new ServiceException(ErrorCode.USER_NOT_FOUND);
        }
        if (Objects.equals(StatusEnum.BLOCKED_USER.getId(), userNuboEntity.getStatus().getId())) {
            throw new ServiceException(ErrorCode.USER_STATUS_BLOCKED, HttpStatus.BAD_REQUEST);
        } else if (Objects.equals(StatusEnum.SUSPENDED_USER.getId(), userNuboEntity.getStatus().getId())) {
            throw new ServiceException(ErrorCode.USER_STATUS_SUSPENDED, HttpStatus.BAD_REQUEST);
        } else if (Objects.equals(StatusEnum.INACTIVE_USER.getId(), userNuboEntity.getStatus().getId())) {
            throw new ServiceException(ErrorCode.USER_STATUS_INACTIVE, HttpStatus.BAD_REQUEST);
        } else if (!(Objects.equals(StatusEnum.ACTIVE_USER.getId(), userNuboEntity.getStatus().getId()))) {
            throw new ServiceException(ErrorCode.USER_STATUS_ACTIVE_REQUIRED, HttpStatus.BAD_REQUEST);
        } else if (Boolean.TRUE.equals(userNuboEntity.getBlocked())) {
            throw new ServiceException(ErrorCode.USER_BLOCKED_EXCEEDS_FAILED_ATTEMPTS, HttpStatus.BAD_REQUEST);
        }
    }

    public static boolean isBlockExpired(UserNuboEntity userNuboEntity) {
        if (userNuboEntity == null) {
            return false;
        }
        return !ObjectUtils.isEmpty(userNuboEntity.getBlockedFailedAttemptsDate()) &&
                PropertiesContext.getClientDatetime().isAfter(
                        userNuboEntity.getBlockedFailedAttemptsDate()
                                .plusMinutes(UserValueEnum.MINUTES_FAILED_ATTEMPTS_LOGIN.getValue()));
    }

    public static boolean isBlocked(UserNuboEntity userNuboEntity) {
        if (userNuboEntity == null) {
            return false;
        }
        return Boolean.TRUE.equals(userNuboEntity.getBlocked()) ||
                Objects.equals(userNuboEntity.getFailedAttempt(),
                        UserValueEnum.MAXIMUM_FIRST_FAILED_ATTEMPTS_LOGIN.getValue())
                ||
                Objects.equals(userNuboEntity.getFailedAttempt(),
                        UserValueEnum.MAXIMUM_SECOND_FAILED_ATTEMPTS_LOGIN.getValue())
                ||
                Objects.equals(userNuboEntity.getFailedAttempt(),
                        UserValueEnum.MAXIMUM_THIRD_FAILED_ATTEMPTS_LOGIN.getValue());
    }

    public static void validateUpdateUserNubo(UserNuboEntity userNuboEntity, UserNuboUpdateInDto userNuboUpdateInDto) {
        if (userNuboEntity == null) {
            throw new ServiceException(ErrorCode.USER_NOT_FOUND);
        }
        if (Objects.equals(StatusEnum.DELETED_USER.getId(), userNuboEntity.getStatus().getId())) {
            throw new ServiceException(ErrorCode.USER_STATUS_DELETED, HttpStatus.BAD_REQUEST);
        }

        if (!ObjectUtils.isEmpty(userNuboUpdateInDto.getStatusId())) {
            if (Objects.equals(StatusEnum.ACTIVE_USER.getId(), userNuboEntity.getStatus().getId())) {
                if (Objects.equals(StatusEnum.BLOCKED_USER.getId(), userNuboUpdateInDto.getStatusId())) {
                    throw new ServiceException(ErrorCode.STATUS_FLOW_ERROR, HttpStatus.BAD_REQUEST);
                }
            } else if (Objects.equals(StatusEnum.INACTIVE_USER.getId(), userNuboEntity.getStatus().getId())) {
                if (!Objects.equals(StatusEnum.INACTIVE_USER.getId(), userNuboUpdateInDto.getStatusId())) {
                    throw new ServiceException(ErrorCode.STATUS_FLOW_ERROR, HttpStatus.BAD_REQUEST);
                }
            } else if (Objects.equals(StatusEnum.BLOCKED_USER.getId(), userNuboEntity.getStatus().getId())) {
                if (Objects.equals(StatusEnum.INACTIVE_USER.getId(), userNuboUpdateInDto.getStatusId())
                        || Objects.equals(StatusEnum.SUSPENDED_USER.getId(), userNuboUpdateInDto.getStatusId())) {
                    throw new ServiceException(ErrorCode.STATUS_FLOW_ERROR, HttpStatus.BAD_REQUEST);
                }
                if (Objects.equals(StatusEnum.ACTIVE_USER.getId(), userNuboUpdateInDto.getStatusId())) {
                    userNuboUpdateInDto.setBlocked(false);
                    userNuboUpdateInDto.setFailedAttempt(0);
                }
            } else if (Objects.equals(StatusEnum.SUSPENDED_USER.getId(), userNuboEntity.getStatus().getId())) {
                if (Objects.equals(StatusEnum.INACTIVE_USER.getId(), userNuboUpdateInDto.getStatusId())
                        || Objects.equals(StatusEnum.BLOCKED_USER.getId(), userNuboUpdateInDto.getStatusId())) {
                    throw new ServiceException(ErrorCode.STATUS_FLOW_ERROR, HttpStatus.BAD_REQUEST);
                }
            }
        }
    }

}

```

## src/main/java/com/nubo/user/management/api/models/domain/UserParams.java

```java
package com.nubo.user.management.api.models.domain;

public record UserParams(
        int page,
        int size,
        String sort,
        String order,
        boolean all,
        String username,
        String firstname,
        String lastname,
        Integer identificationTypeId,
        String identification,
        String email,
        String participant,
        String profile,
        Integer status,
        Integer countryId,
        Integer accessProfileId,
        Integer enterpriseGroup,
        Integer excludeParticipantId,
        Boolean download) {

    public static UserParams of(int page, int size, String sort, String order, boolean all, String username,
            String firstname, String lastname, Integer identificationTypeId, String identification, String email,
            String participant, String profile, Integer status, Integer countryId, Integer accessProfileId,
            Integer enterpriseGroup, Integer excludeParticipantId, Boolean download) {
        return new UserParams(page, size, sort, order, all, username, firstname, lastname, identificationTypeId,
                identification, email, participant, profile, status, countryId, accessProfileId, enterpriseGroup,
                excludeParticipantId, download);
    }

    public static UserParams of(String email, Integer status, Integer countryId, String participant, String username,
            String profile, Integer excludeParticipantId) {
        return new UserParams(0, 0, null, null, false, username, null, null, null, null, email, participant, profile, status, countryId,
                 null, null, excludeParticipantId, false);
    }
}

```

## src/main/java/com/nubo/user/management/api/models/dto/request/EmailTemplateInDto.java

```java
package com.nubo.user.management.api.models.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EmailTemplateInDto {

    private String userName;

    private String toEmail;

    private String subject;

    private String htmlTemplate;

}

```

## src/main/java/com/nubo/user/management/api/models/dto/request/KeycloakCredentialInDto.java

```java
package com.nubo.user.management.api.models.dto.request;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class KeycloakCredentialInDto {

    @NotNull
    private String type;

    @NotNull
    private String value;

    @NotNull
    private Boolean temporary;

}

```

## src/main/java/com/nubo/user/management/api/models/dto/request/KeycloakUserInDto.java

```java
package com.nubo.user.management.api.models.dto.request;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.nubo.user.management.api.models.enums.KeycloackActionsEnum;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class KeycloakUserInDto {

    @NotNull
    @Size(max = 50)
    private String username;

    @NotNull
    @Email
    @Size(max = 100)
    private String email;

    @NotNull
    @Size(max = 50)
    private String firstName;

    @NotNull
    @Size(max = 50)
    private String lastName;

    @NotNull
    private Boolean enabled;

    @Valid
    private List<KeycloackActionsEnum> requiredActions;

    @Valid
    private List<KeycloakCredentialInDto> credentials;

}

```

## src/main/java/com/nubo/user/management/api/models/dto/request/LogSessionTrackingInDto.java

```java
package com.nubo.user.management.api.models.dto.request;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LogSessionTrackingInDto {

    @NotNull
    private String actionType;

    @NotNull
    @Size(max = 250)
    private String actionDestination;

    @NotNull
    @Min(value = 1)
    private Long participantId;

    @NotNull
    @Min(value = 1)
    private Long countryId;

    @NotNull
    @Min(value = 1)
    private Long userNuboId;

    @NotNull
    @Min(value = 1)
    private Long statusId;

}

```

## src/main/java/com/nubo/user/management/api/models/dto/request/OtpEmailValidateInDto.java

```java
package com.nubo.user.management.api.models.dto.request;

import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class OtpEmailValidateInDto {

    @Pattern(regexp = "\\d{6}", message = "The OTP code must be a 6-digit number")
    private String codeOtp;

}

```

## src/main/java/com/nubo/user/management/api/models/dto/request/OtpInDto.java

```java
package com.nubo.user.management.api.models.dto.request;

import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class OtpInDto {

    @Pattern(regexp = "\\d{6}", message = "The OTP code must be a 6-digit number")
    private String codeOtp;

}

```

## src/main/java/com/nubo/user/management/api/models/dto/request/PermissionInDto.java

```java
package com.nubo.user.management.api.models.dto.request;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PermissionInDto {

    @NotNull
    @Min(value = 1)
    private Long id;

    private String name;

}

```

## src/main/java/com/nubo/user/management/api/models/dto/request/ProfileInDto.java

```java
package com.nubo.user.management.api.models.dto.request;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProfileInDto {

    @NotNull
    @Size(max = 50)
    private String name;

    @Size(max = 200)
    private String description;

    @NotNull
    @Min(value = 1)
    private Long participantId;

}

```

## src/main/java/com/nubo/user/management/api/models/dto/request/ProfileUpdateInDto.java

```java
package com.nubo.user.management.api.models.dto.request;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProfileUpdateInDto {

    @NotNull
    @Size(max = 50)
    private String name;

    @Size(max = 200)
    private String description;

    @Min(value = 1)
    private Long statusId;

    @NotNull
    @Min(value = 1)
    private Long participantId;

}

```

## src/main/java/com/nubo/user/management/api/models/dto/request/SetOtpModeInDto.java

```java
package com.nubo.user.management.api.models.dto.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.Email;
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
public class SetOtpModeInDto {

    @NotBlank
    @Email
    private String email;

    @NotNull
    @JsonProperty("otp_mail")
    private Boolean otpMail;

}

```

## src/main/java/com/nubo/user/management/api/models/dto/request/UserNuboInDto.java

```java
package com.nubo.user.management.api.models.dto.request;

import com.nubo.user.management.api.models.enums.UserTypeEnum;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserNuboInDto {

    @NotNull
    @Size(max = 80)
    private String userName;

    @NotNull
    @Size(max = 80)
    private String firstName;

    @NotNull
    @Size(max = 80)
    private String lastName;

    @NotNull
    @Min(value = 1)
    private Long identificationTypeId;

    @NotNull
    @Size(max = 20)
    private String identification;

    @NotNull
    @Size(max = 36)
    private String idKeycloak;

    @NotNull
    @Email
    @Size(max = 80)
    private String email;

    @NotNull
    private Boolean verifiedEmail;

    @NotNull
    @Size(max = 25)
    private String phoneNumber;

    @NotNull
    @Size(max = 20)
    private String userGroup;

    @NotNull
    private UserTypeEnum userType;

    @NotNull
    @Size(max = 30)
    private String jiraNumber;

    @NotNull
    @Size(min = 1)
    @Valid
    private List<@Min(1) Long> participantIds;

    @NotNull
    @Size(min = 1)
    @Valid
    private List<@Min(1) Long> profileIds;

    @NotNull
    @Min(value = 1)
    private Long countryId;

}

```

## src/main/java/com/nubo/user/management/api/models/dto/request/UserNuboUpdateInDto.java

```java
package com.nubo.user.management.api.models.dto.request;

import com.nubo.user.management.api.models.enums.UserTypeEnum;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserNuboUpdateInDto {

    @Size(max = 50)
    private String firstName;

    @Size(max = 50)
    private String lastName;

    @Min(value = 1)
    private Long identificationTypeId;

    @Size(max = 20)
    private String identification;

    @Size(max = 100)
    private String idKeycloak;

    @Email
    @Size(max = 100)
    private String email;

    private Boolean verifiedEmail;

    @Size(max = 20)
    private String phoneNumber;

    @Size(max = 50)
    private String userGroup;

    private UserTypeEnum userType;

    @Size(max = 20)
    private String jiraNumber;

    @Min(value = 0)
    private Integer failedAttempt;

    private Boolean blocked;

    private Boolean otp;

    private Long participantId;

    @Size(min = 1)
    @Valid
    private List<@Min(1) Long> participantIds;

    @Min(value = 1)
    private Long countryId;

    @Min(value = 1)
    private Long profileId;

    @Size(min = 1)
    @Valid
    private List<@Min(1) Long> profileIds;

    @Min(value = 1)
    private Long statusId;

}

```

## src/main/java/com/nubo/user/management/api/models/dto/request/UserRecoveryPasswordInDto.java

```java
package com.nubo.user.management.api.models.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserRecoveryPasswordInDto {

    private String urlRecoveryPassword;

}

```

## src/main/java/com/nubo/user/management/api/models/dto/response/ContactDetailOutDto.java

```java
package com.nubo.user.management.api.models.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ContactDetailOutDto {

    private Long id;
    private String email;
    private String firstName;
    private String lastName;

}

```

## src/main/java/com/nubo/user/management/api/models/dto/response/CountryOutDto.java

```java
package com.nubo.user.management.api.models.dto.response;

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

    private CurrencyOutDto currency;

    private String timeZone;

}


```

## src/main/java/com/nubo/user/management/api/models/dto/response/CurrencyOutDto.java

```java
package com.nubo.user.management.api.models.dto.response;

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
public class CurrencyOutDto {

    private Long id;

    private String code;

    private String name;
}

```

## src/main/java/com/nubo/user/management/api/models/dto/response/DepartmentOutDto.java

```java
package com.nubo.user.management.api.models.dto.response;

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
public class DepartmentOutDto {

    private String id;

    private String description;

}

```

## src/main/java/com/nubo/user/management/api/models/dto/response/DetailUserOutDto.java

```java
package com.nubo.user.management.api.models.dto.response;

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
@JsonInclude(JsonInclude.Include.ALWAYS)
public class DetailUserOutDto {

    private Long id;

    private String name;

    private IdentificationTypeOutDto identificationType;

    private String identification;

    private CountryOutDto country;

    private String email;

    private StatusOutDto status;

    private List<ProfileDetailOutDto> profiles;

}

```

## src/main/java/com/nubo/user/management/api/models/dto/response/EmailOutDto.java

```java
package com.nubo.user.management.api.models.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EmailOutDto {
    private String email;
}

```

## src/main/java/com/nubo/user/management/api/models/dto/response/EnterpriseGroupOutDto.java

```java
package com.nubo.user.management.api.models.dto.response;

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
public class EnterpriseGroupOutDto {

    private Long id;

    private String code;

    private String name;
}

```

## src/main/java/com/nubo/user/management/api/models/dto/response/IdentificationTypeOutDto.java

```java
package com.nubo.user.management.api.models.dto.response;

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
public class IdentificationTypeOutDto {

    private Long id;

    private String description;

}

```

## src/main/java/com/nubo/user/management/api/models/dto/response/InformationChangPwdOutDto.java

```java
package com.nubo.user.management.api.models.dto.response;

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
public class InformationChangPwdOutDto {


    private String email;

    private String phoneNumber;
}

```

## src/main/java/com/nubo/user/management/api/models/dto/response/LogEventOutDto.java

```java
package com.nubo.user.management.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.ALWAYS)
public class LogEventOutDto {

    private Long id;

    private Integer number;

    private String description;

    private UUID uuid;

    private String origin;

    private Integer tracking;

}

```

## src/main/java/com/nubo/user/management/api/models/dto/response/LogSessionTrackingOutDto.java

```java
package com.nubo.user.management.api.models.dto.response;

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
public class LogSessionTrackingOutDto {

    private Long id;

    private LocalDateTime actionDate;

    private String actionType;

    private String actionDestination;

    private String ipOrigin;

    private ParticipantOutDto participant;

    private CountryOutDto country;

    private UserNuboOutDto userNubo;

    private StatusOutDto status;

}

```

## src/main/java/com/nubo/user/management/api/models/dto/response/OptOutDto.java

```java
package com.nubo.user.management.api.models.dto.response;

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
public class OptOutDto {

    private String otpSecretImageUri;

    private String otpSecret;

}

```

## src/main/java/com/nubo/user/management/api/models/dto/response/OtpEmailOutDto.java

```java
package com.nubo.user.management.api.models.dto.response;

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
public class OtpEmailOutDto {

    private String message;

}

```

## src/main/java/com/nubo/user/management/api/models/dto/response/PageResponseOutDto.java

```java
package com.nubo.user.management.api.models.dto.response;

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

## src/main/java/com/nubo/user/management/api/models/dto/response/ParticipantOutDto.java

```java
package com.nubo.user.management.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonInclude(JsonInclude.Include.ALWAYS)
public class ParticipantOutDto {

    private Long id;

    private String code;

    private String documentNumber;

    private IdentificationTypeOutDto identificationType;

    private String name;

    private String shortName;

    private TypeOutDto type;

    private String mnemonic;

    private CountryOutDto country;

    private LocalDate registrationDate;

    private String taxCode;

    private StatusOutDto status;

    private String nitClearingHouse;

    private TaxStatusOutDto taxStatus;

    private String typeEntity;

    private String marginAccount;

    private String masterAccount;

    private String directAllocation;

    private String marketMaker;

    private Boolean enabled;

    private Boolean custodian;

    private EnterpriseGroupOutDto enterpriseGroup;

}

```

## src/main/java/com/nubo/user/management/api/models/dto/response/PermissionOutDto.java

```java
package com.nubo.user.management.api.models.dto.response;

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
public class PermissionOutDto {

    private Long id;

    private String name;

    private String description;

    private String url;

    private Integer level;

    private Long parentId;

    private Boolean collapsible;

    private Integer orderItem;

    private Boolean enabled;

}
```

## src/main/java/com/nubo/user/management/api/models/dto/response/ProfileDetailOutDto.java

```java
package com.nubo.user.management.api.models.dto.response;

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
public class ProfileDetailOutDto {

    private Long id;

    private String name;

    private String description;

    private ParticipantOutDto participant;

}

```

## src/main/java/com/nubo/user/management/api/models/dto/response/ProfileOutDto.java

```java
package com.nubo.user.management.api.models.dto.response;

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
@JsonInclude(JsonInclude.Include.ALWAYS)
public class ProfileOutDto {

    private Long id;

    private String name;

    private String description;

    private StatusOutDto status;

    private ParticipantOutDto participant;

    private String lastModifyUser;

    private LocalDate lastModifyDate;

    private LocalDateTime lastModifyDateTime;

}

```

## src/main/java/com/nubo/user/management/api/models/dto/response/SetOtpModeOutDto.java

```java
package com.nubo.user.management.api.models.dto.response;

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
public class SetOtpModeOutDto {

    private String email;

    private Boolean otpMail;

    private String message;

}

```

## src/main/java/com/nubo/user/management/api/models/dto/response/StatusOutDto.java

```java
package com.nubo.user.management.api.models.dto.response;

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

}

```

## src/main/java/com/nubo/user/management/api/models/dto/response/TaxStatusOutDto.java

```java
package com.nubo.user.management.api.models.dto.response;

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
public class TaxStatusOutDto {

    private Long id;

    private String description;

}

```

## src/main/java/com/nubo/user/management/api/models/dto/response/TypeOutDto.java

```java
package com.nubo.user.management.api.models.dto.response;

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
public class TypeOutDto {

    private Long id;

    private String description;

    private String category;

}

```

## src/main/java/com/nubo/user/management/api/models/dto/response/UserLoginOutDto.java

```java
package com.nubo.user.management.api.models.dto.response;

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
public class UserLoginOutDto {

    private Boolean previousSession;

}

```

## src/main/java/com/nubo/user/management/api/models/dto/response/UserNuboOutDto.java

```java
package com.nubo.user.management.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.nubo.user.management.api.models.enums.UserTypeEnum;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.OffsetDateTime;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonInclude(JsonInclude.Include.ALWAYS)
public class UserNuboOutDto {

    private Long id;

    private String userName;

    private String firstName;

    private String lastName;

    private IdentificationTypeOutDto identificationType;

    private String identification;

    private String idKeycloak;

    private String email;

    private Boolean verifiedEmail;

    private String phoneNumber;

    private String userGroup;

    private UserTypeEnum userType;

    private String jiraNumber;

    private Integer failedAttempt;

    private Boolean blocked;

    private List<ParticipantOutDto> participants;

    private ParticipantOutDto participant;

    private ParticipantOutDto participantAfp;

    private List<ParticipantOutDto> participantSponsors;

    private CountryOutDto country;

    private List<ProfileOutDto> profiles;

    private ProfileOutDto profile;

    private StatusOutDto status;

    private String password;

    private Boolean otp;

    private LocalDateTime otpCreatedDate;

    private String otpSecretImageUri;

    private Boolean otpMail;

    private LocalDateTime otpExpirationDate;

    private StatusOutDto otpStatus;

    //private String otpSecret;

    private Boolean previousSession;

    private LocalDate userCreatedDate;

    private String userCreatedBy;

    private OffsetDateTime lastModifyDate;
}

```

## src/main/java/com/nubo/user/management/api/models/dto/response/UserNuboUserTypeOutDto.java

```java
package com.nubo.user.management.api.models.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.nubo.user.management.api.models.enums.UserTypeEnum;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonInclude(JsonInclude.Include.ALWAYS)
public class UserNuboUserTypeOutDto {

    private UserTypeEnum userType;

}

```

## src/main/java/com/nubo/user/management/api/models/dto/response/UserPasswordAuthOutDto.java

```java
package com.nubo.user.management.api.models.dto.response;

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
public class UserPasswordAuthOutDto {

    private String messagePasswordAuthNearlyExpire;

    private String messagePasswordExpire;

}

```

## src/main/java/com/nubo/user/management/api/models/dto/response/UserPasswordTemporaryOutDto.java

```java
package com.nubo.user.management.api.models.dto.response;

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
public class UserPasswordTemporaryOutDto {

    private String messagePasswordTemporaryExpire;

}

```

## src/main/java/com/nubo/user/management/api/models/dto/response/UserRecoveryPasswordOutDto.java

```java
package com.nubo.user.management.api.models.dto.response;

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
public class UserRecoveryPasswordOutDto {

    private String messageRecoveryPasswordUrlExpire;

}
```

## src/main/java/com/nubo/user/management/api/models/dto/response/UsernameOutDto.java

```java
package com.nubo.user.management.api.models.dto.response;

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
public class UsernameOutDto {
    private Long id;

    private String userName;

    private String firstName;

    private String lastName;
}

```

## src/main/java/com/nubo/user/management/api/models/entity/CountryEntity.java

```java
package com.nubo.user.management.api.models.entity;

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
import lombok.Setter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

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

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
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

## src/main/java/com/nubo/user/management/api/models/entity/CurrencyEntity.java

```java
package com.nubo.user.management.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

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

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
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

## src/main/java/com/nubo/user/management/api/models/entity/DepartmentEntity.java

```java
package com.nubo.user.management.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"DEPARTMENT\"", schema = "\"NUANBODB\"")
public class DepartmentEntity {

    @Id
    @Column(name = "\"DEPARTMENT_ID\"", length = 10, nullable = false)
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

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        DepartmentEntity that = (DepartmentEntity) o;
        return id != null && id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

}

```

## src/main/java/com/nubo/user/management/api/models/entity/EnterpriseGroupEntity.java

```java
package com.nubo.user.management.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"ENTERPRISE_GROUP\"", schema = "\"NUANBODB\"")
public class EnterpriseGroupEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"ENTERPRISE_GROUP_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"CODE\"", length = 6)
    private String code;

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

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        EnterpriseGroupEntity that = (EnterpriseGroupEntity) o;
        return id != null && id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/user/management/api/models/entity/IdentificationTypeEntity.java

```java
package com.nubo.user.management.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@Setter
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

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        IdentificationTypeEntity that = (IdentificationTypeEntity) o;
        return id != null && id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

}

```

## src/main/java/com/nubo/user/management/api/models/entity/LogSessionTrackingEntity.java

```java
package com.nubo.user.management.api.models.entity;

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
import lombok.Setter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"LOG_SESSION_TRACKING\"", schema = "\"NUANBODB\"")
public class LogSessionTrackingEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"LOG_SESSION_TRACKING_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"ACTION_DATE\"")
    private LocalDateTime actionDate;

    @ManyToOne
    @JoinColumn(name = "\"PARTICIPANT_ID\"")
    private ParticipantEntity participant;

    @Column(name = "\"ACTION_TYPE\"", columnDefinition = "TEXT")
    private String actionType;

    @Column(name = "\"ACTION_DESTINATION\"", length = 250)
    private String actionDestination;

    @Column(name = "\"IP_ORIGIN\"", length = 30)
    private String ipOrigin;

    @Column(name = "\"PARTICIPANT_CODE\"", length = 6, nullable = false)
    private String participantCode;

    @ManyToOne
    @JoinColumn(name = "\"COUNTRY_ID\"", nullable = false)
    private CountryEntity country;

    @ManyToOne
    @JoinColumn(name = "\"USER_NUBO_ID\"", nullable = false)
    private UserNuboEntity userNubo;

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

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        LogSessionTrackingEntity that = (LogSessionTrackingEntity) o;
        return id != null && id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
    
}

```

## src/main/java/com/nubo/user/management/api/models/entity/MenuAssignmentEntity.java

```java
package com.nubo.user.management.api.models.entity;

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
import lombok.Setter;
import lombok.NoArgsConstructor;

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
    @JoinColumn(name = "\"PROFILE_ID\"")
    private ProfileEntity profile;

    @Column(name = "\"ENABLED\"")
    private Boolean enabled;

    @ManyToOne
    @JoinColumn(name = "\"SCREEN_ACTION_ID\"")
    private ScreenActionEntity screenAction;

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
        MenuAssignmentEntity that = (MenuAssignmentEntity) o;
        return id != null && id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

```

## src/main/java/com/nubo/user/management/api/models/entity/ParametersNuboEntity.java

```java
package com.nubo.user.management.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "\"PARAMETERS_NUBO\"", schema = "\"NUANBODB\"")
public class ParametersNuboEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"PARAMETERS_NUBO_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"CODE\"")
    private String code;

    @Column(name = "\"DESCRIPTION\"")
    private String description;

    @Column(name = "\"VALUE\"")
    private String value;

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
        ParametersNuboEntity that = (ParametersNuboEntity) o;
        return id != null && id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

}

```

## src/main/java/com/nubo/user/management/api/models/entity/ParticipantEntity.java

```java
package com.nubo.user.management.api.models.entity;

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
import lombok.Setter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Setter
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
    private IdentificationTypeEntity identificationTypeEntity;

    @Column(name = "\"NAME\"", length = 100)
    private String name;

    @Column(name = "\"SHORT_NAME\"", length = 50)
    private String shortName;

    @ManyToOne
    @JoinColumn(name = "\"TYPE_ID\"", nullable = false)
    private TypeEntity type;

    @Column(name = "\"MNEMONIC\"", length = 4)
    private String mnemonic;

    @ManyToOne
    @JoinColumn(name = "\"COUNTRY_ID\"", nullable = false)
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
    @JoinColumn(name = "\"STATUS_ID\"", nullable = false)
    private StatusEntity status;

    @Column(name = "\"NIT_CLEARING_HOUSE\"", length = 20)
    private String nitClearingHouse;

    @ManyToOne
    @JoinColumn(name = "\"TAX_STATUS_ID\"", nullable = false)
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

    @ManyToOne(fetch = FetchType.LAZY, optional = true)
    @JoinColumn(name = "\"ENTERPRISE_GROUP_ID\"", nullable = true)
    private EnterpriseGroupEntity enterpriseGroup;

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
        ParticipantEntity that = (ParticipantEntity) o;
        return id != null && id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

}

```

## src/main/java/com/nubo/user/management/api/models/entity/ParticipantSponsorEntity.java

```java
package com.nubo.user.management.api.models.entity;

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
@IdClass(ParticipantSponsorKey.class)
@Table(name = "\"PARTICIPANT_SPONSOR\"", schema = "\"NUANBODB\"")
public class ParticipantSponsorEntity {

    @Id
    @ManyToOne
    @JoinColumn(name = "\"PARTICIPANT_ID\"", nullable = false)
    private ParticipantEntity participant;

    @Id
    @ManyToOne
    @JoinColumn(name = "\"PARTICIPANT_SPONSOR\"", nullable = false)
    private ParticipantEntity participantSponsor;

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
        ParticipantSponsorEntity that = (ParticipantSponsorEntity) o;
        return participant != null && participant.equals(that.participant) &&
                participantSponsor != null && participantSponsor.equals(that.participantSponsor);
    }

    @Override
    public int hashCode() {
        return java.util.Objects.hash(participant, participantSponsor);
    }

}

```

## src/main/java/com/nubo/user/management/api/models/entity/ParticipantSponsorKey.java

```java
package com.nubo.user.management.api.models.entity;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ParticipantSponsorKey implements Serializable {

    private Long participant;

    private Long participantSponsor;

}

```

## src/main/java/com/nubo/user/management/api/models/entity/ParticipantUserNuboEntity.java

```java
package com.nubo.user.management.api.models.entity;

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
@IdClass(ParticipantUserNuboKey.class)
@Table(name = "\"PARTICIPANT_USER_NUBO\"", schema = "\"NUANBODB\"")
public class ParticipantUserNuboEntity {

    @Id
    @ManyToOne
    @JoinColumn(name = "\"PARTICIPANT_ID\"", nullable = false)
    private ParticipantEntity participant;

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
        ParticipantUserNuboEntity that = (ParticipantUserNuboEntity) o;
        return participant != null && participant.equals(that.participant) &&
                userNubo != null && userNubo.equals(that.userNubo);
    }

    @Override
    public int hashCode() {
        return java.util.Objects.hash(participant, userNubo);
    }

}

```

## src/main/java/com/nubo/user/management/api/models/entity/ParticipantUserNuboKey.java

```java
package com.nubo.user.management.api.models.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ParticipantUserNuboKey implements Serializable {

    private Long participant;

    private Long userNubo;

}

```

## src/main/java/com/nubo/user/management/api/models/entity/ProfileEntity.java

```java
package com.nubo.user.management.api.models.entity;

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

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"", nullable = false)
    private StatusEntity status;

    @ManyToOne
    @JoinColumn(name = "\"PARTICIPANT_ID\"", nullable = true)
    private ParticipantEntity participant;

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
        ProfileEntity that = (ProfileEntity) o;
        return id != null && id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

}

```

## src/main/java/com/nubo/user/management/api/models/entity/ProfileUserNuboEntity.java

```java
package com.nubo.user.management.api.models.entity;

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
        ProfileUserNuboEntity that = (ProfileUserNuboEntity) o;
        return profile != null && profile.equals(that.profile) &&
                userNubo != null && userNubo.equals(that.userNubo);
    }

    @Override
    public int hashCode() {
        return java.util.Objects.hash(profile, userNubo);
    }

}

```

## src/main/java/com/nubo/user/management/api/models/entity/ProfileUserNuboKey.java

```java
package com.nubo.user.management.api.models.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProfileUserNuboKey implements Serializable {

    private Long profile;

    private Long userNubo;

}

```

## src/main/java/com/nubo/user/management/api/models/entity/ScreenActionEntity.java

```java
package com.nubo.user.management.api.models.entity;

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
@Table(name = "\"SCREEN_ACTION\"", schema = "\"NUANBODB\"")
public class ScreenActionEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"SCREEN_ACTION_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"CODE\"", length = 5)
    private String code;

    @Column(name = "\"DESCRIPTION\"", length = 80)
    private String description;

    @Column(name = "\"ENABLED\"")
    private Boolean enabled;

    @ManyToOne
    @JoinColumn(name = "\"SCREEN_ID\"", nullable = false)
    private ScreenEntity screen;

    @Column(name = "\"PATH\"")
    private String path;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 250, nullable = false)
    private String lastModifyApplic;

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
        ScreenActionEntity that = (ScreenActionEntity) o;
        return id != null && id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

}

```

## src/main/java/com/nubo/user/management/api/models/entity/ScreenEntity.java

```java
package com.nubo.user.management.api.models.entity;

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
        ScreenEntity that = (ScreenEntity) o;
        return id != null && id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

}

```

## src/main/java/com/nubo/user/management/api/models/entity/StatusEntity.java

```java
package com.nubo.user.management.api.models.entity;

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
        StatusEntity that = (StatusEntity) o;
        return id != null && id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

}

```

## src/main/java/com/nubo/user/management/api/models/entity/TaxStatusEntity.java

```java
package com.nubo.user.management.api.models.entity;

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
@Table(name = "\"TAX_STATUS\"", schema = "\"NUANBODB\"")
public class TaxStatusEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"TAX_STATUS_ID\"", nullable = false)
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

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        TaxStatusEntity that = (TaxStatusEntity) o;
        return id != null && id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

}

```

## src/main/java/com/nubo/user/management/api/models/entity/TypeEntity.java

```java
package com.nubo.user.management.api.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

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
        TypeEntity that = (TypeEntity) o;
        return id != null && id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

}

```

## src/main/java/com/nubo/user/management/api/models/entity/UserNuboEntity.java

```java
package com.nubo.user.management.api.models.entity;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.List;

import com.nubo.user.management.api.models.enums.UserTypeEnum;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
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
@Table(name = "\"USER_NUBO\"", schema = "\"NUANBODB\"")
public class UserNuboEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"USER_NUBO_ID\"", nullable = false)
    private Long id;

    @Column(name = "\"USER_NAME\"", unique = true, length = 80, nullable = false)
    private String userName;

    @Column(name = "\"FIRST_NAME\"", length = 80)
    private String firstName;

    @Column(name = "\"LAST_NAME\"", length = 80)
    private String lastName;

    @ManyToOne
    @JoinColumn(name = "\"IDENTIFICATION_TYPE_ID\"", nullable = false)
    private IdentificationTypeEntity identificationType;

    @Column(name = "\"IDENTIFICATION\"", length = 20, nullable = false)
    private String identification;

    @Column(name = "\"ID_KEYCLOAK\"", length = 36)
    private String idKeycloak;

    @Email
    @Column(name = "\"EMAIL\"", unique = true, length = 80, nullable = false)
    private String email;

    @Column(name = "\"VERIFIED_EMAIL\"")
    private Boolean verifiedEmail;

    @Column(name = "\"PHONE_NUMBER\"", length = 25)
    private String phoneNumber;

    @Column(name = "\"USER_GROUP\"", length = 20)
    private String userGroup;

    @Column(name = "\"USER_TYPE\"", length = 20, nullable = false)
    @Enumerated(EnumType.STRING)
    private UserTypeEnum userType;

    @Column(name = "\"JIRA_NUMBER\"", length = 30)
    private String jiraNumber;

    @Column(name = "\"FAILED_ATTEMPTS\"")
    private Integer failedAttempt;

    @Column(name = "\"BLOCKED\"")
    private Boolean blocked;

    @OneToMany(mappedBy = "userNubo", cascade = CascadeType.ALL, orphanRemoval = true)
    @Builder.Default
    private List<ParticipantUserNuboEntity> participantUserNuboList = new ArrayList<>();

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"PARTICIPANT_ID\"", nullable = true)
    private ParticipantEntity participantSession;

    @ManyToOne
    @JoinColumn(name = "\"COUNTRY_ID\"", nullable = false)
    private CountryEntity country;

    @ManyToOne
    @JoinColumn(name = "\"PROFILE_ID\"", nullable = true)
    private ProfileEntity profileSession;

    @OneToMany(mappedBy = "userNubo", cascade = CascadeType.ALL, orphanRemoval = true)
    @Builder.Default
    private List<ProfileUserNuboEntity> profileUserNuboList = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "\"STATUS_ID\"", nullable = false)
    private StatusEntity status;

    @Column(name = "\"OTP\"")
    private Boolean otp;

    @Column(name = "\"OTP_SECRET\"", length = 250)
    private String otpSecret;

    @Column(name = "\"OTP_CREATED_DATE\"")
    private LocalDateTime otpCreatedDate;

    @Column(name = "\"PREVIOUS_SESSION\"")
    private Boolean previousSession;

    @Column(name = "\"USER_CREATED_DATE\"")
    private LocalDate userCreatedDate;

    @Column(name = "\"USER_CREATED_BY\"")
    private String userCreatedBy;

    @Column(name = "\"PASSWORD_TEMPORARY_MODIFY_DATE\"")
    private LocalDateTime passwordTemporaryModifyDate;

    @Column(name = "\"PASSWORD_AUTH_MODIFY_DATE\"")
    private LocalDateTime passwordAuthModifyDate;

    @Column(name = "\"RECOVERY_PASSWORD_URL\"", columnDefinition = "TEXT")
    private String recoveryPasswordUrl;

    @Column(name = "\"RECOVERY_PASSWORD_URL_MODIFY_DATE\"")
    private LocalDateTime recoveryPasswordUrlModifyDate;

    @Column(name = "\"BLOCKED_FAILED_ATTEMPTS_DATE\"")
    private LocalDateTime blockedFailedAttemptsDate;

    @Column(name = "\"OTP_MAIL\"")
    private Boolean otpMail;

    @Column(name = "\"OTP_EXPIRATION_DATE\"")
    private LocalDateTime otpExpirationDate;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"OTP_STATUS_ID\"")
    private StatusEntity otpStatus;

    @Column(name = "\"LAST_MODIFY_USER\"", length = 250, nullable = false)
    private String lastModifyUser;

    @Column(name = "\"LAST_MODIFY_APPLIC\"", length = 250, nullable = false)
    private String lastModifyApplication;

    @Column(name = "\"LAST_MODIFY_DATE\"", nullable = false)
    private OffsetDateTime lastModifyDate;

    @Column(name = "\"LAST_MODIFY_IP\"", length = 50, nullable = false)
    private String lastModifyIp;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        UserNuboEntity that = (UserNuboEntity) o;
        return id != null && id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

}

```

## src/main/java/com/nubo/user/management/api/models/enums/GrandTypeEnum.java

```java
package com.nubo.user.management.api.models.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Arrays;

@Getter
@RequiredArgsConstructor
public enum GrandTypeEnum {

    REFRESH_TOKEN("refresh_token", GrandTypeUserEnum.BOTH),
    CLIENT_CREDENTIALS("client_credentials", GrandTypeUserEnum.INTERNAL),
    AUTHORIZATION_CODE("authorization_code", GrandTypeUserEnum.INTERNAL),
    PASSWORD("password", GrandTypeUserEnum.EXTERNAL);

    private final String value;
    private final GrandTypeUserEnum userType;

    @JsonValue
    public String getValue() {
        return value;
    }

    @JsonCreator
    public static GrandTypeEnum fromValue(String value) {
        if (value == null || value.isBlank()) {
            return GrandTypeEnum.PASSWORD;
        }
        return Arrays.stream(GrandTypeEnum.values())
                .filter(status -> status.getValue().equalsIgnoreCase(value))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Unknown value: " + value));
    }

}

```

## src/main/java/com/nubo/user/management/api/models/enums/GrandTypeUserEnum.java

```java
package com.nubo.user.management.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum GrandTypeUserEnum {

    INTERNAL,
    EXTERNAL,
    BOTH

}

```

## src/main/java/com/nubo/user/management/api/models/enums/KeycloackActionsEnum.java

```java
package com.nubo.user.management.api.models.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Arrays;

@Getter
@RequiredArgsConstructor
public enum KeycloackActionsEnum {

    UPDATE_PASSWORD("UPDATE_PASSWORD");

    private final String value;

    @JsonValue
    public String getValue() {
        return value;
    }

    @JsonCreator
    public static KeycloackActionsEnum fromValue(String value) {
        return Arrays.stream(KeycloackActionsEnum.values())
                .filter(status -> status.value.equalsIgnoreCase(value))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Unknown value: " + value));
    }

    @Converter(autoApply = true)
    public static class StatusEnumConverter implements AttributeConverter<KeycloackActionsEnum, String> {

        @Override
        public String convertToDatabaseColumn(KeycloackActionsEnum status) {
            return status != null ? status.getValue() : null;
        }

        @Override
        public KeycloackActionsEnum convertToEntityAttribute(String dbData) {
            return dbData != null ? KeycloackActionsEnum.fromValue(dbData) : null;
        }
    }

}

```

## src/main/java/com/nubo/user/management/api/models/enums/OtpEmailValueEnum.java

```java
package com.nubo.user.management.api.models.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Arrays;
import java.util.Objects;

@Getter
@RequiredArgsConstructor
public enum OtpEmailValueEnum {

    EXPIRATION_MINUTES(3);


    private final Integer value;

    @JsonValue
    public Integer getValue() {
        return value;
    }

    @JsonCreator
    public static OtpEmailValueEnum fromValue(Integer value) {
        return Arrays.stream(OtpEmailValueEnum.values())
                .filter(status -> Objects.equals(status.value, value))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Unknown value: " + value));
    }

}

```

## src/main/java/com/nubo/user/management/api/models/enums/ParametersCodeEnum.java

```java
package com.nubo.user.management.api.models.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Arrays;

@Getter
@RequiredArgsConstructor
public enum ParametersCodeEnum {

    PASSWORD_TEMPORARY_EXPIRATION_HOURS("PASSWORD_TEMPORARY_EXPIRATION_HOURS"),
    PASSWORD_NEARLY_EXPIRATION_DAYS("PASSWORD_NEARLY_EXPIRATION_DAYS"),
    RECOVERY_PASSWORD_URL_EXPIRATION_HOURS("RECOVERY_PASSWORD_URL_EXPIRATION_HOURS");

    private final String value;

    @JsonValue
    public String getValue() {
        return value;
    }

    @JsonCreator
    public static ParametersCodeEnum fromValue(String value) {
        return Arrays.stream(ParametersCodeEnum.values())
                .filter(status -> status.value.equalsIgnoreCase(value))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Unknown value: " + value));
    }

}

```

## src/main/java/com/nubo/user/management/api/models/enums/ProfileEnum.java

```java
package com.nubo.user.management.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum ProfileEnum {
    
    IDENTITY_ADMINISTRATOR("ADMINISTRADOR DE IDENTIDADES"),
    ADMINISTRATOR("ADMINISTRADOR");

    private final String value;
}

```

## src/main/java/com/nubo/user/management/api/models/enums/PropertiesEnum.java

```java
package com.nubo.user.management.api.models.enums;

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
    VERSION_API("version_api"),
    AUTH_TOKEN("auth_token"),
    PREVIOUS_SESSION("previous_session"),
    EMAIL("email"),
    ACCESS_TOKEN("access_token"),
    USERNAME("username");

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

## src/main/java/com/nubo/user/management/api/models/enums/SearchOperationEnum.java

```java
package com.nubo.user.management.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum SearchOperationEnum {
    CONTAINS("contains"),
    NOT_CONTAINS("notContains"),
    EQUALS("equals"),
    NOT_EQUALS("notEquals"),
    STARTS_WITH("startsWith"),
    ENDS_WITH("endsWith"),
    IS_EMPTY("isEmpty"),
    IS_NOT_EMPTY("isNotEmpty"),
    IS_ANY_OF("isAnyOf"),
    GREATER_THAN("greaterThan"),
    GREATER_THAN_OR_EQUAL("greaterThanOrEqual"),
    LESS_THAN("lessThan"),
    LESS_THAN_OR_EQUAL("lessThanOrEqual"),
    IN("in"),
    NOT_IN("notIn");

    private final String value;

    public static SearchOperationEnum fromValue(String value) {
        for (SearchOperationEnum operation : SearchOperationEnum.values()) {
            if (operation.getValue().equalsIgnoreCase(value)) {
                return operation;
            }
        }
        return null;
    }
}

```

## src/main/java/com/nubo/user/management/api/models/enums/StatusEnum.java

```java
package com.nubo.user.management.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum StatusEnum {

    ACTIVE_PARTICIPANT(510L, "PARTICIPANTES"),
    INACTIVE_PARTICIPANT(511L, "PARTICIPANTES"),
    ACTIVE_PROFILE(505L, "PERFILES"),
    INACTIVE_PROFILE(506L, "PERFILES"),
    SUSPENDED_PROFILE(507L, "PERFILES"),
    BLOCKED_PROFILE(508L, "PERFILES"),
    DELETED_PROFILE(509L, "PERFILES"),
    ACTIVE_USER(500L, "USUARIOS"),
    INACTIVE_USER(501L, "USUARIOS"),
    SUSPENDED_USER(502L, "USUARIOS"),
    BLOCKED_USER(503L, "USUARIOS"),
    DELETED_USER(504L, "USUARIOS"),
    OTP_MAIL_PENDING(260L, "ESTADO_OTP"),
    OTP_MAIL_USED(261L, "ESTADO_OTP"),
    OTP_MAIL_INVALIDATED(262L, "ESTADO_OTP"),
    OTP_MAIL_EXPIRED(263L, "ESTADO_OTP");

    private final Long id;
    private final String category;

}

```

## src/main/java/com/nubo/user/management/api/models/enums/TypeEnum.java

```java
package com.nubo.user.management.api.models.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum TypeEnum {

    PARTICIPANT_AFP(51L);

    private final Long id;

}

```

## src/main/java/com/nubo/user/management/api/models/enums/UserMessageEnum.java

```java
package com.nubo.user.management.api.models.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Arrays;

@Getter
@RequiredArgsConstructor
public enum UserMessageEnum {

    PASSWORD_NEARLY_TO_EXPIRE("Tu contraseña se vencerá en %s"),
    PASSWORD_EXPIRED("Su contraseña ha expirado. Debes restablecer la contraseña para poder ingresar al sistema."),
    PASSWORD_TEMPORARY_EXPIRED("Su contraseña temporal ha expirado. Debes restablecer la contraseña para poder ingresar al sistema."),
    RECOVERY_PASSWORD_URL_EXPIRED("La url para recuperar la contraseña ha expirado"),
    RECOVERY_PASSWORD_URL_NOT_VALID("La url para recuperar la contraseña no es valida"),
    OTP_VALIDATED("El OTP se validó correctamente.");

    private final String value;

    @JsonValue
    public String getValue() {
        return value;
    }

    @JsonCreator
    public static UserMessageEnum fromValue(String value) {
        return Arrays.stream(UserMessageEnum.values())
                .filter(status -> status.value.equalsIgnoreCase(value))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Unknown value: " + value));
    }

}

```

## src/main/java/com/nubo/user/management/api/models/enums/UserTypeEnum.java

```java
package com.nubo.user.management.api.models.enums;

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

## src/main/java/com/nubo/user/management/api/models/enums/UserValueEnum.java

```java
package com.nubo.user.management.api.models.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Arrays;
import java.util.Objects;

@Getter
@RequiredArgsConstructor
public enum UserValueEnum {

    MAXIMUM_FIRST_FAILED_ATTEMPTS_LOGIN(3),
    MAXIMUM_SECOND_FAILED_ATTEMPTS_LOGIN(6),
    MAXIMUM_THIRD_FAILED_ATTEMPTS_LOGIN(9),
    MINUTES_FAILED_ATTEMPTS_LOGIN(3),
    DAYS_PASSWORD_EXPIRATION(45),
    HOURS_PASSWORD_TEMPORARY(24),
    DAYS_ALERT_EXPIRATION(7);

    private final Integer value;

    @JsonValue
    public Integer getValue() {
        return value;
    }

    @JsonCreator
    public static UserValueEnum fromValue(Integer value) {
        return Arrays.stream(UserValueEnum.values())
                .filter(status -> Objects.equals(status.value, value))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Unknown value: " + value));
    }

}

```

## src/main/java/com/nubo/user/management/api/models/enums/VersionApiEnum.java

```java
package com.nubo.user.management.api.models.enums;

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

## src/main/java/com/nubo/user/management/api/repository/CountryRepository.java

```java
package com.nubo.user.management.api.repository;

import com.nubo.user.management.api.models.entity.CountryEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CountryRepository extends JpaRepository<CountryEntity, Long> {

    @Query("""
        SELECT p FROM CountryEntity p
        WHERE p.name = :country
        """)
    CountryEntity findCountryByName(String country);

    @Query("""
        SELECT c FROM CountryEntity c
        WHERE c.code IN (:countriesCode)
        """)
    List<CountryEntity> findCountriesByCode(List<String> countriesCode);
}

```

## src/main/java/com/nubo/user/management/api/repository/IdentificationTypeRepository.java

```java
package com.nubo.user.management.api.repository;

import com.nubo.user.management.api.models.entity.IdentificationTypeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IdentificationTypeRepository extends JpaRepository<IdentificationTypeEntity, Long> {
}

```

## src/main/java/com/nubo/user/management/api/repository/LogSessionTrackingRepository.java

```java
package com.nubo.user.management.api.repository;

import com.nubo.user.management.api.models.entity.LogSessionTrackingEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LogSessionTrackingRepository extends JpaRepository<LogSessionTrackingEntity, Long> {
}

```

## src/main/java/com/nubo/user/management/api/repository/ParametersNuboRepository.java

```java
package com.nubo.user.management.api.repository;

import com.nubo.user.management.api.models.entity.ParametersNuboEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface ParametersNuboRepository extends JpaRepository<ParametersNuboEntity, Long> {

    @Query("""
        SELECT p FROM ParametersNuboEntity p
        WHERE p.code = :code
        """)
    Optional<ParametersNuboEntity> findByCode(String code);

}

```

## src/main/java/com/nubo/user/management/api/repository/ParticipantRepository.java

```java
package com.nubo.user.management.api.repository;

import com.nubo.user.management.api.models.entity.EnterpriseGroupEntity;
import com.nubo.user.management.api.models.entity.ParticipantEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface ParticipantRepository extends JpaRepository<ParticipantEntity, Long> {

    @Query("""
        SELECT p.enterpriseGroup FROM ParticipantEntity p
        WHERE p.id = :participantId
        """)
    Optional<EnterpriseGroupEntity> findEnterpriseGroupByParticipantId(Long participantId);

    @Query("""
        SELECT p FROM ParticipantEntity p
        WHERE p.enterpriseGroup = :enterpriseGroupEntity
        """)
    List<ParticipantEntity> findByEnterpriseGroup(EnterpriseGroupEntity enterpriseGroupEntity);


    Optional<ParticipantEntity> findByNameIgnoreCase(String name);
}

```

## src/main/java/com/nubo/user/management/api/repository/ParticipantSponsorRepository.java

```java
package com.nubo.user.management.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nubo.user.management.api.models.entity.ParticipantSponsorEntity;
import com.nubo.user.management.api.models.entity.ParticipantSponsorKey;

public interface ParticipantSponsorRepository extends JpaRepository<ParticipantSponsorEntity, ParticipantSponsorKey> {

    List<ParticipantSponsorEntity> findByParticipantId(Long participantId);

}

```

## src/main/java/com/nubo/user/management/api/repository/ParticipantUserNuboRepository.java

```java
package com.nubo.user.management.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.nubo.user.management.api.models.entity.ParticipantUserNuboEntity;
import com.nubo.user.management.api.models.entity.ParticipantUserNuboKey;
import com.nubo.user.management.api.models.entity.UserNuboEntity;

public interface ParticipantUserNuboRepository
        extends JpaRepository<ParticipantUserNuboEntity, ParticipantUserNuboKey> {

    @Query("""
            SELECT pun FROM ParticipantUserNuboEntity pun
            WHERE pun.userNubo = :user
            AND pun.participant.status.id = :participantStatusId
            """)
    List<ParticipantUserNuboEntity> findByUserNubo(UserNuboEntity user, Long participantStatusId);

}

```

## src/main/java/com/nubo/user/management/api/repository/ProfileRepository.java

```java
package com.nubo.user.management.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import com.nubo.user.management.api.models.entity.ProfileEntity;
import com.nubo.user.management.api.models.entity.UserNuboEntity;

public interface ProfileRepository extends JpaRepository<ProfileEntity, Long>,
        JpaSpecificationExecutor<UserNuboEntity> {

    @Query("""
            SELECT p FROM ProfileEntity p
            WHERE p.name = :nameProfile
            """)
    ProfileEntity findProfileByName(String nameProfile);

    @Query("""
            SELECT p FROM ProfileEntity p
            WHERE UPPER(p.name) LIKE CONCAT('%', UPPER(:nameProfile), '%')
            AND p.participant.id = :participantId
            """)
    List<ProfileEntity> findByNameProfileContainingAndParticipantId(String nameProfile, Integer participantId);

    @Query("""
            SELECT p FROM ProfileEntity p
            WHERE UPPER(p.name) LIKE CONCAT('%', UPPER(:nameProfile), '%')
            AND p.participant.name = :nameParticipant
            """)
    List<ProfileEntity> findByNameProfileContainingAndParticipantName(String nameProfile, String nameParticipant);

}

```

## src/main/java/com/nubo/user/management/api/repository/StatusRepository.java

```java
package com.nubo.user.management.api.repository;

import com.nubo.user.management.api.models.entity.StatusEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;
import java.util.Optional;

public interface StatusRepository extends JpaRepository<StatusEntity, Long>, JpaSpecificationExecutor<StatusEntity> {

    Optional<StatusEntity> findByCategoryIgnoreCase(String category);
    
    List<StatusEntity> findByCategoryIgnoreCaseOrderById(String category);
}

```

## src/main/java/com/nubo/user/management/api/repository/UserNuboRepository.java

```java
package com.nubo.user.management.api.repository;

import com.nubo.user.management.api.models.entity.ParticipantEntity;
import com.nubo.user.management.api.models.entity.UserNuboEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface UserNuboRepository extends JpaRepository<UserNuboEntity, Long>,
        JpaSpecificationExecutor<UserNuboEntity> {

    @Query("""
            SELECT u FROM UserNuboEntity u
            JOIN u.status s
            WHERE s.id != :statusId
            """)
    Page<UserNuboEntity> findAllUsersByStatusId(Long statusId, Pageable pageable);

    @Query("""
            SELECT u FROM UserNuboEntity u
            WHERE u.userName = :userName
            """)
    Optional<UserNuboEntity> findByUserName(String userName);

    @Query("""
            SELECT u FROM UserNuboEntity u
            WHERE u.email = :email
            """)
    Optional<UserNuboEntity> findByEmail(String email);

    @Query("""
            SELECT u FROM UserNuboEntity u
            JOIN u.participantUserNuboList pu
            JOIN pu.participant p
            JOIN u.identificationType ide
            WHERE ide.id = :identificationTypeId
            AND u.identification = :identification
            AND p.id = :participantId
            """)
    Optional<UserNuboEntity> findByIdentificationTypeIdAndIdentificationAndParticipantId(
            Long identificationTypeId,
            String identification,
            Long participantId);

    @Query("""
            SELECT u FROM UserNuboEntity u
            JOIN u.participantUserNuboList pu
            JOIN pu.participant p
            JOIN u.identificationType ide
            WHERE u.id = :userId
            AND ide.id = :identificationTypeId
            AND u.identification = :identification
            AND p.id = :participantId
            """)
    Optional<UserNuboEntity> findByUserIdAndIdentificationTypeIdAndIdentificationAndParticipantId(
            Long userId,
            Long identificationTypeId,
            String identification,
            Long participantId);

    @Query("""
            SELECT u FROM UserNuboEntity u
            JOIN u.identificationType ide
            WHERE ide.id = :identificationTypeId
            AND u.identification = :identification
            """)
    Optional<UserNuboEntity> findByIdentificationTypeIdAndIdentification(
            Long identificationTypeId,
            String identification);

    @Query("""
            SELECT u FROM UserNuboEntity u
            WHERE u.id != :idUser AND u.email = :email
            """)
    Optional<UserNuboEntity> findByIdUserAndEmail(Long idUser, String email);

    @Query("""
            SELECT u FROM UserNuboEntity u
            JOIN u.profileSession p
            WHERE p.id = :profileId
            """)
    List<UserNuboEntity> findByUsersProfileId(Long profileId);

    @Query("""
            SELECT DISTINCT u FROM UserNuboEntity u
            JOIN u.participantUserNuboList pu
            WHERE u.email = :email
            AND pu.participant IN :participants
            """)
    List<UserNuboEntity> findByEmailAndParticipants(
            String email,
            List<ParticipantEntity> participants);

    @Query("""
            SELECT CASE WHEN COUNT(u) > 0 THEN true ELSE false END
            FROM UserNuboEntity u
            JOIN u.participantUserNuboList pu
            WHERE LOWER(u.email) = LOWER(:email)
            AND pu.participant.id = :participantId
            """)
    boolean existsByEmailAndParticipantId(String email, Long participantId);

    @Query("""
            SELECT CASE WHEN COUNT(u) > 0 THEN TRUE ELSE FALSE END
            FROM UserNuboEntity u
            JOIN u.participantUserNuboList pu
            WHERE LOWER(u.email) = LOWER(:email)
            AND pu.participant.id IN :participantIds
            """)
    boolean existsByEmailAndAnyParticipantId(String email, List<Long> participantIds);

    @Query("""
            SELECT CASE WHEN COUNT(u) > 0 THEN TRUE ELSE FALSE END
            FROM UserNuboEntity u
            JOIN u.participantUserNuboList p
            JOIN p.participant up
            JOIN up.enterpriseGroup eg
            WHERE LOWER(u.email) = LOWER(:email) AND eg.id <> :enterpriseGroupId
            """)
    boolean existsByEmailInOtherEnterpriseGroup(String email, Long enterpriseGroupId);

    @Query("""
            SELECT DISTINCT u
            FROM UserNuboEntity u
            JOIN u.participantUserNuboList pu
            JOIN pu.participant
            JOIN ProfileEntity p ON p.participant.id = pu.participant.id
            JOIN MenuAssignmentEntity ma ON ma.profile.id = p.id
            JOIN ma.screenAction sa
            WHERE (:participantId IS NOT NULL AND pu.participant.id = :participantId ) OR 
                        (:participantCode IS NOT NULL AND pu.participant.code = :participantCode)
            AND (:screenActionCodes IS NULL OR sa.code IN :screenActionCodes)
            AND (:userStatusId IS NULL OR u.status.id = :userStatusId)
            ORDER BY u.email
            """)
    List<UserNuboEntity> findContactDetailsByParticipant(Long participantId, String participantCode, List<String> screenActionCodes, Long userStatusId);

}

```

## src/main/java/com/nubo/user/management/api/service/KeycloakService.java

```java
package com.nubo.user.management.api.service;

import com.nubo.user.management.api.models.dto.request.KeycloakCredentialInDto;
import com.nubo.user.management.api.models.dto.request.KeycloakUserInDto;

import java.util.List;
import java.util.Map;

public interface KeycloakService {

    Map<String, Object> getAccessToken(String password, String grantType, String refreshToken, String code, String codeVerifier);

    Map<String, Object> getTokenIntrospect();

    List<Map<String, Object>> getUsers();

    List<Map<String, Object>> getUser(String userName);

    void createUser(KeycloakUserInDto keycloakUserInDto);

    void resetPasswordUser(String idUser, KeycloakCredentialInDto keycloakCredentialInDto);

    void resetPasswordTemporaryUser(String idUser, KeycloakCredentialInDto keycloakCredentialInDto);

    void resetPasswordAuthUser(String idUser, KeycloakCredentialInDto keycloakCredentialInDto);

    void deleteUser(String idUser);

}

```

## src/main/java/com/nubo/user/management/api/service/LogSessionTrackingService.java

```java
package com.nubo.user.management.api.service;

import com.nubo.user.management.api.models.dto.request.LogSessionTrackingInDto;
import com.nubo.user.management.api.models.dto.response.LogSessionTrackingOutDto;

public interface LogSessionTrackingService {

    LogSessionTrackingOutDto createLogSessionTracking(LogSessionTrackingInDto logSessionTrackingInDto);

}

```

## src/main/java/com/nubo/user/management/api/service/OtpService.java

```java
package com.nubo.user.management.api.service;

import com.nubo.user.management.api.models.dto.request.OtpEmailValidateInDto;
import com.nubo.user.management.api.models.dto.request.OtpInDto;
import com.nubo.user.management.api.models.dto.request.SetOtpModeInDto;
import com.nubo.user.management.api.models.dto.response.OptOutDto;
import com.nubo.user.management.api.models.dto.response.OtpEmailOutDto;
import com.nubo.user.management.api.models.dto.response.SetOtpModeOutDto;
import org.springframework.http.ResponseEntity;

public interface OtpService {

    void validateOtpByUsername(String userName, OtpInDto otpInDto);

    OptOutDto createOtpByUsername(String userName);

    void deleteOtpByUsername(String userName);

    OtpEmailOutDto requestOtpByEmail(String userName);

    String validateOtpByEmail(String userName, OtpEmailValidateInDto otpEmailValidateInDto);

    SetOtpModeOutDto setOtpMode(SetOtpModeInDto setOtpModeInDto);

}

```

## src/main/java/com/nubo/user/management/api/service/ParticipantSponsorService.java

```java
package com.nubo.user.management.api.service;

import com.nubo.user.management.api.models.dto.response.UserNuboOutDto;
import com.nubo.user.management.api.models.entity.UserNuboEntity;

public interface ParticipantSponsorService {

    UserNuboOutDto validateExistingParticipantSponsor(UserNuboEntity userNuboEntity);
    
}

```

## src/main/java/com/nubo/user/management/api/service/UserAuthService.java

```java
package com.nubo.user.management.api.service;

import com.nubo.user.management.api.models.dto.request.UserRecoveryPasswordInDto;
import com.nubo.user.management.api.models.dto.response.UserLoginOutDto;
import com.nubo.user.management.api.models.dto.response.UserNuboOutDto;
import com.nubo.user.management.api.models.dto.response.UserPasswordAuthOutDto;
import com.nubo.user.management.api.models.dto.response.UserPasswordTemporaryOutDto;
import com.nubo.user.management.api.models.dto.response.UserRecoveryPasswordOutDto;

public interface UserAuthService {

    UserNuboOutDto generatePasswordByUserName(String userName);

    UserNuboOutDto increaseFailedAttemptsLoginByUsername(String userName);

    UserNuboOutDto resetFailedAttemptsAndIsBlockedByUsername(String userName);

    UserNuboOutDto resetBlockedByUsername(String userName);

    UserLoginOutDto loginValidateUser(String userName);

    void logoutUser(String userName);

    UserPasswordTemporaryOutDto validatePasswordTemporaryExpirationUser(String userName);

    UserPasswordAuthOutDto validatePasswordAuthExpirationUser(String userName);

    UserRecoveryPasswordOutDto validateRecoveryPasswordUrl(String userName, UserRecoveryPasswordInDto userRecoveryPasswordInDto);

    void validateFailedAttemptsUser(String userName);

}

```

## src/main/java/com/nubo/user/management/api/service/UserNuboService.java

```java
package com.nubo.user.management.api.service;

import java.util.List;

import com.nubo.user.management.api.models.domain.UserParams;
import com.nubo.user.management.api.models.dto.request.UserNuboInDto;
import com.nubo.user.management.api.models.dto.request.UserNuboUpdateInDto;
import com.nubo.user.management.api.models.dto.response.*;

public interface UserNuboService {

    PageResponseOutDto<UserNuboOutDto> findAllUsers(UserParams userParams);

    List<CountryOutDto> findAllCountries(UserParams userParams);

    List<EmailOutDto> findAllEmails(UserParams userParams);

    List<StatusOutDto> findAllStatus();

    List<UsernameOutDto> findAllUsernames(UserParams userParams);

    List<ProfileOutDto> findAllProfiles(UserParams userParams);

    List<ParticipantOutDto> findAllParticipants(UserParams userParams);

    DetailUserOutDto findDetailByUserId(Long userId, Long participantId);

    UserNuboOutDto findUserById(Long userId);

    UserNuboOutDto findUserByUsername(String userName);

    UserNuboOutDto findUserByEmail(String email);

    UserNuboUserTypeOutDto findUserTypeByEmail(String email);

    void validateUserByIdentificationTypeIdAndIdentificationAndParticipantId(
            Long identificationTypeId, String identification, Long participantId);

    UserNuboOutDto validateUserByEmail(String email);

    UserNuboOutDto createUser(UserNuboInDto userNuboInDto);

    UserNuboOutDto updateUserById(Long userId, UserNuboUpdateInDto userNuboUpdateInDto);

    UserNuboOutDto updateUserByUsername(String username, UserNuboUpdateInDto userNuboUpdateInDto);

    void deleteUserById(Long userId);

    PageResponseOutDto<UserNuboOutDto> findAllUsersDynamic(int page, int size, String sort, String order, boolean all, String username, String firstname, String lastname,                                                                                                                  Integer identificationTypeId, String identification, String email,
                                                           String participant, String profile, Integer status, Integer countryId,
                                                            Integer accessProfileId, Integer enterpriseGroup, Integer excludeParticipantId,
                                                            String fieldName, String fieldValue, String operation);

    List<ParticipantOutDto> validateUserInParticipant(String email, List<Long> participantIds);

    UserNuboOutDto findUserInParticipantByEmail(String email, Long participantId);

    UserNuboOutDto findUserInParticipantsByEmail(String email, List<Long> participantIds);

    List<ContactDetailOutDto> findContactDetailsByParticipant(Long participantId, String participantCode, List<String> screenActionCodes, Long userStatusId);

    InformationChangPwdOutDto findInformationChangePassword();

    List<StatusOutDto> findAllPossibleStatusChangeByUser(Long userId);
}

```

## src/main/java/com/nubo/user/management/api/service/impl/KeycloakServiceImpl.java

```java
package com.nubo.user.management.api.service.impl;

import com.nimbusds.jwt.JWTClaimsSet;
import com.nimbusds.jwt.SignedJWT;
import com.nubo.user.management.api.application.properties.PropertiesConfig;
import com.nubo.user.management.api.application.properties.PropertiesContext;
import com.nubo.user.management.api.client.keycloak.service.KeycloakClient;
import com.nubo.user.management.api.exception.ServiceException;
import com.nubo.user.management.api.exception.error.ErrorCode;
import com.nubo.user.management.api.helpers.PasswordUtil;
import com.nubo.user.management.api.models.dto.request.KeycloakCredentialInDto;
import com.nubo.user.management.api.models.dto.request.KeycloakUserInDto;
import com.nubo.user.management.api.models.entity.UserNuboEntity;
import com.nubo.user.management.api.models.enums.GrandTypeEnum;
import com.nubo.user.management.api.models.enums.GrandTypeUserEnum;
import com.nubo.user.management.api.models.enums.PropertiesEnum;
import com.nubo.user.management.api.models.enums.StatusEnum;
import com.nubo.user.management.api.models.enums.UserTypeEnum;
import com.nubo.user.management.api.models.enums.VersionApiEnum;
import com.nubo.user.management.api.repository.UserNuboRepository;
import com.nubo.user.management.api.service.KeycloakService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.Objects;

@Service
@RequiredArgsConstructor
@Slf4j
public class KeycloakServiceImpl implements KeycloakService {

    private final PasswordUtil passwordUtil;
    private final KeycloakClient keycloakClient;
    private final UserNuboRepository userNuboRepository;
    private final PropertiesConfig propertiesConfig;

    @Override
    public Map<String, Object> getAccessToken(String password, String grantType, String refreshToken, String code, String codeVerifier) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            log.info("Start method getAccessTokenV1, grantType: {}", grantType);

            String clientUser = !ObjectUtils.isEmpty(PropertiesContext.getClientUser()) ? PropertiesContext.getClientUser()
                    : null;
            log.debug("Client User: {}", clientUser);

            UserNuboEntity userNuboEntityLast = null;
            GrandTypeEnum grandTypeEnum = GrandTypeEnum.fromValue(grantType);
            boolean isLoginFlow = GrandTypeEnum.PASSWORD == grandTypeEnum
                    || GrandTypeEnum.AUTHORIZATION_CODE == grandTypeEnum;

            try {
                if (GrandTypeUserEnum.INTERNAL != grandTypeEnum.getUserType()) {
                    userNuboEntityLast = userNuboRepository.findByUserName(clientUser)
                            .orElseThrow(() -> isLoginFlow
                                    ? new ServiceException(ErrorCode.INVALID_USERNAME_OR_PASSWORD,
                                            HttpStatus.UNAUTHORIZED)
                                    : new ServiceException(ErrorCode.USER_NOT_FOUND, HttpStatus.NOT_FOUND));
                    if (isLoginFlow) {
                        validateUserDeleted(userNuboEntityLast);
                    }
                }

                validateUserType(grandTypeEnum, userNuboEntityLast);

                String passwordDecode = !ObjectUtils.isEmpty(password) ? passwordUtil.decodePassword(password) : null;

                Map<String, Object> response = keycloakClient.getAccessToken(clientUser, passwordDecode, grantType,
                        refreshToken, code, codeVerifier);

                if (GrandTypeEnum.AUTHORIZATION_CODE == grandTypeEnum) {
                    String jwtUsername = getUsername(response);
                    userNuboEntityLast = userNuboRepository.findByUserName(jwtUsername)
                            .orElseThrow(() -> new ServiceException(ErrorCode.INVALID_USERNAME_OR_PASSWORD,
                                    HttpStatus.UNAUTHORIZED));
                    validateUserDeleted(userNuboEntityLast);
                    response.put(PropertiesEnum.USERNAME.getValue(), jwtUsername);
                }

                if (userNuboEntityLast != null) {
                    if (Boolean.FALSE.equals(userNuboEntityLast.getPreviousSession())) {
                        response.put(PropertiesEnum.PREVIOUS_SESSION.getValue(), false);
                    } else {
                        response.put(PropertiesEnum.PREVIOUS_SESSION.getValue(), true);
                    }
                }

                log.info("End method getAccessTokenV1");

                return response;
            } catch (ServiceException ex) {
                if (isLoginFlow && isLoginAuthenticationError(ex.getErrorCode())) {
                    if (ErrorCode.KEYCLOAK_ERROR == ex.getErrorCode() && isPasswordChangeRequired(ex)) {
                        throw ex;
                    }
                    throw new ServiceException(ErrorCode.INVALID_USERNAME_OR_PASSWORD, HttpStatus.UNAUTHORIZED);
                }
                throw ex;
            }
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    public String getUsername(Map<String, Object> response ) {
        String username;
        try {
            String accessToken = response.get(PropertiesEnum.ACCESS_TOKEN.getValue()).toString();
            SignedJWT signedJWT = SignedJWT.parse(accessToken);
            JWTClaimsSet claims = signedJWT.getJWTClaimsSet();
            username = claims.getStringClaim(PropertiesEnum.EMAIL.getValue());
            if (username == null || username.isBlank()) {
                throw new ServiceException(ErrorCode.JWT_FINDING_USERNAME_ERROR, HttpStatus.INTERNAL_SERVER_ERROR);
            }
        } catch (Exception ex) {
            throw new ServiceException(ErrorCode.JWT_ERROR, ex);
        }
        return username;
    }

    private boolean isLoginAuthenticationError(ErrorCode errorCode) {
        return errorCode == ErrorCode.USER_NOT_FOUND
                || errorCode == ErrorCode.KEYCLOAK_ERROR
                || errorCode == ErrorCode.VALIDATE_USER_TYPE_ACCESS_TOKEN
                || errorCode == ErrorCode.VALIDATE_USER_TYPE_ACCESS_TOKEN_EXTERNAL;
    }

    private boolean isPasswordChangeRequired(ServiceException ex) {
        Throwable cause = ex.getCause();
        if (cause != null && cause.getMessage() != null) {
            return cause.getMessage().toLowerCase().contains("fully set up");
        }
        return false;
    }

    private void validateUserDeleted(UserNuboEntity userNuboEntity) {
        if (userNuboEntity != null && userNuboEntity.getStatus() != null
                && Objects.equals(StatusEnum.DELETED_USER.getId(), userNuboEntity.getStatus().getId())) {
            throw new ServiceException(ErrorCode.INVALID_USERNAME_OR_PASSWORD, HttpStatus.UNAUTHORIZED);
        }
    }

    private void validateUserType(GrandTypeEnum grandTypeEnum, UserNuboEntity userNuboEntityLast) {
        if (Boolean.TRUE.equals(propertiesConfig.getValidateUserTypeAccessToken()) && userNuboEntityLast != null) {
            if (GrandTypeUserEnum.INTERNAL == grandTypeEnum.getUserType() && UserTypeEnum.INTERNAL != userNuboEntityLast.getUserType()) {
                throw new ServiceException(ErrorCode.VALIDATE_USER_TYPE_ACCESS_TOKEN, HttpStatus.NOT_FOUND);
            }
            if (GrandTypeUserEnum.EXTERNAL == grandTypeEnum.getUserType() && UserTypeEnum.EXTERNAL != userNuboEntityLast.getUserType()) {
                throw new ServiceException(ErrorCode.VALIDATE_USER_TYPE_ACCESS_TOKEN_EXTERNAL, HttpStatus.NOT_FOUND);
            }
        }
    }

    @Override
    public Map<String, Object> getTokenIntrospect() {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return getTokenIntrospectV1();
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private Map<String, Object> getTokenIntrospectV1() {
        log.info("Start method getTokenIntrospectV1");

        Map<String, Object> response = keycloakClient.getTokenIntrospect();

        log.info("End method getTokenIntrospectV1");

        return response;
    }

    @Override
    public List<Map<String, Object>> getUsers() {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return getUsersV1();
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<Map<String, Object>> getUsersV1() {
        log.info("Start method getUsersV1");

        List<Map<String, Object>> response = keycloakClient.getUsers();

        log.info("End method getUsersV1");

        return response;
    }

    @Override
    public List<Map<String, Object>> getUser(String userName) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return getUserV1(userName);

        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<Map<String, Object>> getUserV1(String userName) {
        log.info("Start method getUserV1");

        List<Map<String, Object>> response = keycloakClient.getUser(userName);

        log.info("End method getUserV1");

        return response;
    }

    @Override
    public void createUser(KeycloakUserInDto keycloakUserInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            createUserV1(keycloakUserInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private void createUserV1(KeycloakUserInDto keycloakUserInDto) {
        log.info("Start method createUserV1");

        if (!ObjectUtils.isEmpty(keycloakUserInDto.getCredentials())) {
            keycloakUserInDto.getCredentials().forEach(k -> k.setValue(passwordUtil.decodePassword(k.getValue())));
        }
        keycloakClient.createUser(keycloakUserInDto);

        log.info("End method createUserV1");
    }

    @Override
    @Transactional
    public void resetPasswordUser(String idUser, KeycloakCredentialInDto keycloakCredentialInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            resetPasswordUserV1(idUser, keycloakCredentialInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private void resetPasswordUserV1(String idUser, KeycloakCredentialInDto keycloakCredentialInDto) {
        log.info("Start method resetPasswordUserV1");

        keycloakCredentialInDto.setValue(passwordUtil.decodePassword(keycloakCredentialInDto.getValue()));
        keycloakClient.resetPasswordUser(idUser, keycloakCredentialInDto);

        log.info("End method resetPasswordUserV1");
    }

    @Override
    @Transactional
    public void resetPasswordTemporaryUser(String idUser, KeycloakCredentialInDto keycloakCredentialInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            resetPasswordTemporaryUserV1(idUser);
            resetPasswordUserV1(idUser, keycloakCredentialInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private void resetPasswordTemporaryUserV1(String idUser) {
        log.info("Start method resetPasswordTemporaryUserV1");

        this.saveUserNubo(idUser, PropertiesContext.getClientDatetime(), null);

        log.info("End method resetPasswordTemporaryUserV1");
    }

    @Override
    public void resetPasswordAuthUser(String idUser, KeycloakCredentialInDto keycloakCredentialInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            resetPasswordAuthUserV1(idUser);
            resetPasswordUserV1(idUser, keycloakCredentialInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private void resetPasswordAuthUserV1(String idUser) {
        log.info("Start method updatePasswordExpirationUserV1");
        this.saveUserNubo(idUser, null, PropertiesContext.getClientDatetime());
        log.info("End method updatePasswordExpirationUserV1");
    }

    @Override
    public void deleteUser(String idUser) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            deleteUserV1(idUser);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private void deleteUserV1(String idUser) {
        log.info("Start method deleteUserV1");

        keycloakClient.deleteUser(idUser);

        log.info("End method deleteUserV1");
    }

    private void saveUserNubo(String idUser, LocalDateTime passwordTemporaryModifyDate,
            LocalDateTime passwordAuthModifyDate) {
        Map<String, Object> userKeycloak = keycloakClient.getUserById(idUser);
        if (!ObjectUtils.isEmpty(userKeycloak)) {
            String userName = (String) userKeycloak.get("username");
            UserNuboEntity userNuboEntityLast = userNuboRepository.findByUserName(userName)
                    .orElseThrow(() -> new ServiceException(ErrorCode.USER_NOT_FOUND, HttpStatus.NOT_FOUND));

            if (UserTypeEnum.EXTERNAL.equals(userNuboEntityLast.getUserType())) {
                userNuboEntityLast.setPasswordTemporaryModifyDate(passwordTemporaryModifyDate);
                userNuboEntityLast.setPasswordAuthModifyDate(passwordAuthModifyDate);
                userNuboEntityLast.setRecoveryPasswordUrl(null);
                userNuboEntityLast.setRecoveryPasswordUrlModifyDate(null);
                userNuboEntityLast.setLastModifyApplication(propertiesConfig.getApiName());
                userNuboEntityLast.setLastModifyIp(PropertiesContext.getClientIp());
                userNuboEntityLast.setLastModifyUser(PropertiesContext.getClientUser());
                userNuboEntityLast.setLastModifyDate(PropertiesContext.getClientOffsetDatetime());
                userNuboRepository.save(userNuboEntityLast);
            }
        } else {
            throw new ServiceException(ErrorCode.USER_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

}

```

## src/main/java/com/nubo/user/management/api/service/impl/LogSessionTrackingServiceImpl.java

```java
package com.nubo.user.management.api.service.impl;

import com.nubo.user.management.api.application.properties.PropertiesConfig;
import com.nubo.user.management.api.application.properties.PropertiesContext;
import com.nubo.user.management.api.exception.ServiceException;
import com.nubo.user.management.api.exception.error.ErrorCode;
import com.nubo.user.management.api.helpers.MapperUtil;
import com.nubo.user.management.api.models.dto.request.LogSessionTrackingInDto;
import com.nubo.user.management.api.models.dto.response.LogSessionTrackingOutDto;
import com.nubo.user.management.api.models.entity.CountryEntity;
import com.nubo.user.management.api.models.entity.LogSessionTrackingEntity;
import com.nubo.user.management.api.models.entity.ParticipantEntity;
import com.nubo.user.management.api.models.entity.StatusEntity;
import com.nubo.user.management.api.models.entity.UserNuboEntity;
import com.nubo.user.management.api.models.enums.VersionApiEnum;
import com.nubo.user.management.api.repository.CountryRepository;
import com.nubo.user.management.api.repository.LogSessionTrackingRepository;
import com.nubo.user.management.api.repository.ParticipantRepository;
import com.nubo.user.management.api.repository.StatusRepository;
import com.nubo.user.management.api.repository.UserNuboRepository;
import com.nubo.user.management.api.service.LogSessionTrackingService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
@RequiredArgsConstructor
@Slf4j
public class LogSessionTrackingServiceImpl implements LogSessionTrackingService {

    private final LogSessionTrackingRepository logSessionTrackingRepository;
    private final UserNuboRepository userNuboRepository;
    private final CountryRepository countryRepository;
    private final ParticipantRepository participantRepository;
    private final StatusRepository statusRepository;
    private final PropertiesConfig propertiesConfig;

    @Override
    public LogSessionTrackingOutDto createLogSessionTracking(LogSessionTrackingInDto logSessionTrackingInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return createLogSessionTrackingV1(logSessionTrackingInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private LogSessionTrackingOutDto createLogSessionTrackingV1(LogSessionTrackingInDto logSessionTrackingInDto) {
        log.info("Start method createLogSessionTrackingV1, logSession -> {}", logSessionTrackingInDto);

        UserNuboEntity userNuboEntity = userNuboRepository.findById(logSessionTrackingInDto.getUserNuboId())
                .orElseThrow(() -> new ServiceException(ErrorCode.USER_NOT_FOUND, HttpStatus.NOT_FOUND));

        CountryEntity countryEntity = countryRepository.findById(logSessionTrackingInDto.getCountryId())
                .orElseThrow(() -> new ServiceException(ErrorCode.COUNTRY_NOT_FOUND, HttpStatus.NOT_FOUND));

        ParticipantEntity participantEntity = participantRepository.findById(logSessionTrackingInDto.getParticipantId())
                .orElseThrow(() -> new ServiceException(ErrorCode.PARTICIPANT_NOT_FOUND, HttpStatus.NOT_FOUND));

        StatusEntity statusEntity = statusRepository.findById(logSessionTrackingInDto.getStatusId())
                .orElseThrow(() -> new ServiceException(ErrorCode.STATUS_NOT_FOUND, HttpStatus.NOT_FOUND));

        LogSessionTrackingEntity logSessionTrackingEntity = LogSessionTrackingEntity.builder()
                .actionDate(PropertiesContext.getClientDatetime())
                .actionType(logSessionTrackingInDto.getActionType())
                .actionDestination(logSessionTrackingInDto.getActionDestination())
                .ipOrigin(PropertiesContext.getClientIp())
                .participantCode(participantEntity.getCode())
                .participant(participantEntity)
                .country(countryEntity)
                .userNubo(userNuboEntity)
                .status(statusEntity)
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyIp(PropertiesContext.getClientIp())
                .lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyDate(PropertiesContext.getClientDatetime())
                .build();

        LogSessionTrackingOutDto logSessionTrackingOutDto = MapperUtil.logSessionEntityToLogSessionOutDto(
                logSessionTrackingRepository.save(logSessionTrackingEntity));

        log.info("End method createLogSessionTrackingV1, logSession -> {}", logSessionTrackingOutDto);

        return logSessionTrackingOutDto;
    }

}

```

## src/main/java/com/nubo/user/management/api/service/impl/OtpServiceImpl.java

```java
package com.nubo.user.management.api.service.impl;

import com.nubo.user.management.api.application.properties.PropertiesConfig;
import com.nubo.user.management.api.application.properties.PropertiesContext;
import com.nubo.user.management.api.client.email.service.EmailClient;
import com.nubo.user.management.api.exception.ServiceException;
import com.nubo.user.management.api.exception.error.ErrorCode;
import com.nubo.user.management.api.helpers.MapperUtil;
import com.nubo.user.management.api.helpers.OtpUtil;
import com.nubo.user.management.api.helpers.PasswordUtil;
import com.nubo.user.management.api.helpers.UserUtil;
import com.nubo.user.management.api.models.dto.request.EmailTemplateInDto;
import com.nubo.user.management.api.models.dto.request.OtpEmailValidateInDto;
import com.nubo.user.management.api.models.dto.request.OtpInDto;
import com.nubo.user.management.api.models.dto.request.SetOtpModeInDto;
import com.nubo.user.management.api.models.dto.response.OptOutDto;
import com.nubo.user.management.api.models.dto.response.OtpEmailOutDto;
import com.nubo.user.management.api.models.dto.response.SetOtpModeOutDto;
import com.nubo.user.management.api.models.dto.response.UserNuboOutDto;
import com.nubo.user.management.api.models.entity.StatusEntity;
import com.nubo.user.management.api.models.entity.UserNuboEntity;
import com.nubo.user.management.api.models.enums.*;
import com.nubo.user.management.api.repository.StatusRepository;
import com.nubo.user.management.api.repository.UserNuboRepository;
import com.nubo.user.management.api.service.OtpService;
import com.nubo.user.management.api.service.UserAuthService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import java.time.Duration;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.util.Objects;

@Service
@RequiredArgsConstructor
@Slf4j
public class OtpServiceImpl implements OtpService {

    private static final String OTP_EMAIL_SUBJECT = "OTP ingreso nubo";
    private static final String OTP_EMAIL_BODY_TEMPLATE = "<p>Hola %s, enviamos el código OTP <strong>%s</strong> "
            + "para tu ingreso a nubo. OTP válido durante 3 minutos. Si no lo has solicitado, reporta el caso a tu "
            + "administrador.</p>";
    private static final String OTP_EMAIL_REQUEST_MESSAGE = "Se ha enviado un código OTP a tu correo registrado. "
            + "Es válido durante 3 minutos.";

    private final UserNuboRepository userNuboRepository;
    private final StatusRepository statusRepository;
    private final PropertiesConfig propertiesConfig;
    private final OtpUtil otpUtil;
    private final PasswordUtil passwordUtil;
    private final EmailClient emailClient;
    private final UserAuthService userAuthService;

    @Override
    public void validateOtpByUsername(String userName, OtpInDto otpInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            validateOtpByUsernameV1(userName, otpInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private void validateOtpByUsernameV1(String userName, OtpInDto otpInDto) {
        log.info("Start method validateOtpByUsernameV1, userName -> {}", userName);

        UserNuboEntity userNuboEntityLast = this.findUserAndValidateStatus(userName);

        if (ObjectUtils.isEmpty(userNuboEntityLast.getOtpSecret()) ||
                !otpUtil.isOtpValid(passwordUtil.decodePassword(userNuboEntityLast.getOtpSecret()),
                        otpInDto.getCodeOtp())) {
            throw new ServiceException(ErrorCode.OTP_CODE_INVALID, HttpStatus.BAD_REQUEST);
        }

        userNuboEntityLast.setOtp(true);
        userNuboEntityLast.setLastModifyApplication(propertiesConfig.getApiName());
        userNuboEntityLast.setLastModifyIp(PropertiesContext.getClientIp());
        userNuboEntityLast.setLastModifyUser(PropertiesContext.getClientUser());
        userNuboEntityLast.setLastModifyDate(PropertiesContext.getClientOffsetDatetime());

        userNuboRepository.save(userNuboEntityLast);

        log.info("End method validateOtpByUsernameV1");
    }

    @Override
    public OptOutDto createOtpByUsername(String userName) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return createOtpByUsernameV1(userName);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private OptOutDto createOtpByUsernameV1(String userName) {
        log.info("Start method createOtpByUsernameV1, userName -> {}", userName);

        UserNuboEntity userNuboEntityLast = this.findUserAndValidateStatus(userName);
        userNuboEntityLast.setOtp(false);
        userNuboEntityLast
                .setOtpSecret(passwordUtil.encodePassword(otpUtil.generateNewSecret(userNuboEntityLast.getId(),
                        PropertiesContext.getClientDatetime())));
        userNuboEntityLast.setOtpCreatedDate(PropertiesContext.getClientDatetime());
        userNuboEntityLast.setLastModifyApplication(propertiesConfig.getApiName());
        userNuboEntityLast.setLastModifyIp(PropertiesContext.getClientIp());
        userNuboEntityLast.setLastModifyUser(PropertiesContext.getClientUser());
        userNuboEntityLast.setLastModifyDate(PropertiesContext.getClientOffsetDatetime());

        UserNuboOutDto userNuboOutDto = MapperUtil
                .userNuboEntityToUserNuboOutDto(userNuboRepository.save(userNuboEntityLast));

        log.info("End method createOtpByUsernameV1, user -> {}", userNuboOutDto);

        OptOutDto optOutDto = OptOutDto.builder()
                .otpSecretImageUri(
                        otpUtil.generateQrCodeImageUri(passwordUtil.decodePassword(userNuboEntityLast.getOtpSecret()),
                                userNuboEntityLast.getUserName()))
                .otpSecret(userNuboEntityLast.getOtpSecret())
                .build();

        log.info("End method createOtpByUsernameV1");
        return optOutDto;
    }

    @Override
    public void deleteOtpByUsername(String userName) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            deleteOtpByUsernameV1(userName);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private void deleteOtpByUsernameV1(String userName) {
        log.info("Start method deleteOtpByUsernameV1, userName -> {}", userName);

        UserNuboEntity userNuboEntityLast = this.findUserAndValidateStatus(userName);
        userNuboEntityLast.setOtp(false);
        userNuboEntityLast.setOtpSecret(null);
        userNuboEntityLast.setOtpCreatedDate(null);
        userNuboEntityLast.setLastModifyApplication(propertiesConfig.getApiName());
        userNuboEntityLast.setLastModifyIp(PropertiesContext.getClientIp());
        userNuboEntityLast.setLastModifyUser(PropertiesContext.getClientUser());
        userNuboEntityLast.setLastModifyDate(PropertiesContext.getClientOffsetDatetime());

        UserNuboOutDto userNuboOutDto = MapperUtil
                .userNuboEntityToUserNuboOutDto(userNuboRepository.save(userNuboEntityLast));

        log.info("End method deleteOtpByUsernameV1, user -> {}", userNuboOutDto);
    }

    private UserNuboEntity findUserNubo(String userName) {
        return userNuboRepository.findByUserName(userName)
                .orElseThrow(() -> new ServiceException(ErrorCode.USER_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private UserNuboEntity findUserAndValidateStatus(String userName) {
        UserNuboEntity userNuboEntity = findUserNubo(userName);
        UserUtil.validateStatusUser(userNuboEntity);
        return userNuboEntity;
    }

    @Override
    public OtpEmailOutDto requestOtpByEmail(String userName) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return requestOtpByEmailV1(userName);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private OtpEmailOutDto requestOtpByEmailV1(String userName) {
        log.info("Start method requestOtpByEmailV1, userName -> {}", userName);

        UserNuboEntity userNuboEntityLast = findUserNubo(userName);
        if (Boolean.TRUE.equals(userNuboEntityLast.getBlocked()) && UserUtil.isBlockExpired(userNuboEntityLast)) {
            userNuboEntityLast.setBlocked(false);
        }
        UserUtil.validateStatusUser(userNuboEntityLast);

        LocalDateTime requestDatetime = PropertiesContext.getClientDatetime();
        // Email verification can be the user's first OTP method, without prior QR enrollment.
        if (ObjectUtils.isEmpty(userNuboEntityLast.getOtpSecret())) {
            userNuboEntityLast.setOtpSecret(passwordUtil.encodePassword(
                    otpUtil.generateNewSecret(userNuboEntityLast.getId(), requestDatetime)));
            userNuboEntityLast.setOtpCreatedDate(requestDatetime);
        }

        String code = otpUtil.generateOtpAt(passwordUtil.decodePassword(userNuboEntityLast.getOtpSecret()),
                propertiesConfig.getOtpEmailIntervalSeconds(), requestDatetime.toEpochSecond(ZoneOffset.UTC));
        LocalDateTime expirationDate = requestDatetime.plusMinutes(OtpEmailValueEnum.EXPIRATION_MINUTES.getValue());

        String userDisplayName = ObjectUtils.isEmpty(userNuboEntityLast.getFirstName())
                ? userNuboEntityLast.getUserName()
                : userNuboEntityLast.getFirstName();
        String emailBody = String.format(OTP_EMAIL_BODY_TEMPLATE, userDisplayName, code);

        EmailTemplateInDto emailTemplateInDto = EmailTemplateInDto.builder()
                .userName(userNuboEntityLast.getUserName())
                .toEmail(userNuboEntityLast.getEmail())
                .subject(OTP_EMAIL_SUBJECT)
                .htmlTemplate(emailBody)
                .build();

        emailClient.sendEmailTemplate(emailTemplateInDto);

        userNuboEntityLast.setOtpMail(false);
        userNuboEntityLast.setOtpExpirationDate(expirationDate);
        userNuboEntityLast.setOtpStatus(findOtpStatus(StatusEnum.OTP_MAIL_PENDING));
        this.saveUserNuboAudit(userNuboEntityLast);

        log.info("OTP email generated and sent successfully, userName -> {}", userName);
        log.info("End method requestOtpByEmailV1");

        return OtpEmailOutDto.builder()
                .message(OTP_EMAIL_REQUEST_MESSAGE)
                .build();
    }

    @Override
    public String validateOtpByEmail(String userName, OtpEmailValidateInDto otpEmailValidateInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return validateOtpByEmailV1(userName, otpEmailValidateInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private String validateOtpByEmailV1(String userName, OtpEmailValidateInDto otpEmailValidateInDto) {
        log.info("Start method validateOtpByEmailV1, userName -> {}", userName);

        UserNuboEntity userNuboEntityLast = findUserNubo(userName);
        if (Boolean.TRUE.equals(userNuboEntityLast.getBlocked()) && UserUtil.isBlockExpired(userNuboEntityLast)) {
            userNuboEntityLast.setBlocked(false);
        }
        UserUtil.validateStatusUser(userNuboEntityLast);

        if (ObjectUtils.isEmpty(userNuboEntityLast.getOtpStatus())) {
            throw new ServiceException(ErrorCode.OTP_EMAIL_NOT_FOUND, HttpStatus.NOT_FOUND);
        }

        Long otpStatusId = userNuboEntityLast.getOtpStatus().getId();
        LocalDateTime clientDatetime = PropertiesContext.getClientDatetime();

        if (Objects.equals(StatusEnum.OTP_MAIL_USED.getId(), otpStatusId)) {
            log.warn("OTP email code invalid, userName -> {}", userName);
            throw new ServiceException(ErrorCode.OTP_EMAIL_CODE_USED, HttpStatus.BAD_REQUEST);
        }

        if (Objects.equals(StatusEnum.OTP_MAIL_INVALIDATED.getId(), otpStatusId)) {
            log.warn("OTP email code invalidated by attempts, userName -> {}", userName);
            throw new ServiceException(ErrorCode.OTP_EMAIL_ATTEMPTS_EXCEEDED, HttpStatus.BAD_REQUEST);
        }

        if (ObjectUtils.isEmpty(userNuboEntityLast.getOtpExpirationDate())
                || clientDatetime.isAfter(userNuboEntityLast.getOtpExpirationDate())) {
            userNuboEntityLast.setOtpStatus(findOtpStatus(StatusEnum.OTP_MAIL_EXPIRED));
            this.saveUserNuboAudit(userNuboEntityLast);
            log.warn("OTP email code expired, userName -> {}", userName);
            throw new ServiceException(ErrorCode.OTP_EMAIL_CODE_EXPIRED, HttpStatus.BAD_REQUEST);
        }

        LocalDateTime otpRequestDatetime = userNuboEntityLast.getOtpExpirationDate()
                .minusMinutes(OtpEmailValueEnum.EXPIRATION_MINUTES.getValue());
        long secondsSinceRequest = Duration.between(otpRequestDatetime, clientDatetime).getSeconds();

        if (!otpUtil.isOtpValidWithinWindow(passwordUtil.decodePassword(userNuboEntityLast.getOtpSecret()),
                otpEmailValidateInDto.getCodeOtp(), OtpEmailValueEnum.EXPIRATION_MINUTES.getValue() * 60,
                propertiesConfig.getOtpEmailIntervalSeconds(), clientDatetime.toEpochSecond(ZoneOffset.UTC),
                secondsSinceRequest)) {
            UserNuboOutDto userNuboOutDto = userAuthService.increaseFailedAttemptsLoginByUsername(userName);

            if (Boolean.TRUE.equals(userNuboOutDto.getBlocked())) {
                UserNuboEntity userNuboEntityBlocked = findUserNubo(userName);
                userNuboEntityBlocked.setOtpStatus(findOtpStatus(StatusEnum.OTP_MAIL_INVALIDATED));
                this.saveUserNuboAudit(userNuboEntityBlocked);
                log.warn("OTP email code invalidated after max failed attempts, userName -> {}", userName);
                throw new ServiceException(ErrorCode.OTP_EMAIL_ATTEMPTS_EXCEEDED, HttpStatus.BAD_REQUEST);
            }

            int remainingAttempts = UserValueEnum.MAXIMUM_FIRST_FAILED_ATTEMPTS_LOGIN.getValue()
                    - userNuboOutDto.getFailedAttempt();
            log.warn("OTP email code invalid, userName -> {}, remainingAttempts -> {}", userName, remainingAttempts);
            throw new ServiceException(ErrorCode.OTP_EMAIL_CODE_INVALID, HttpStatus.BAD_REQUEST,
                    String.format("%s. Intentos restantes: %s", ErrorCode.OTP_EMAIL_CODE_INVALID.getMessage(),
                            remainingAttempts));
        }

        userNuboEntityLast.setFailedAttempt(0);
        userNuboEntityLast.setBlocked(false);
        userNuboEntityLast.setBlockedFailedAttemptsDate(null);
        userNuboEntityLast.setOtpMail(true);
        userNuboEntityLast.setOtpStatus(findOtpStatus(StatusEnum.OTP_MAIL_USED));
        this.saveUserNuboAudit(userNuboEntityLast);

        log.info("OTP email validated successfully, userName -> {}", userName);
        log.info("End method validateOtpByEmailV1");

        return(UserMessageEnum.OTP_VALIDATED.getValue());
    }

    private StatusEntity findOtpStatus(StatusEnum statusEnum) {
        return statusRepository.findById(statusEnum.getId())
                .orElseThrow(() -> new ServiceException(ErrorCode.STATUS_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    @Override
    public SetOtpModeOutDto setOtpMode(SetOtpModeInDto setOtpModeInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return setOtpModeV1(setOtpModeInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private SetOtpModeOutDto setOtpModeV1(SetOtpModeInDto setOtpModeInDto) {
        log.info("Start method setOtpModeV1, email -> {}", setOtpModeInDto.getEmail());

        UserNuboEntity userNuboEntityLast = userNuboRepository.findByEmail(setOtpModeInDto.getEmail())
                .orElseThrow(() -> new ServiceException(ErrorCode.USER_NOT_FOUND, HttpStatus.NOT_FOUND));

        userNuboEntityLast.setOtpMail(setOtpModeInDto.getOtpMail());
        this.saveUserNuboAudit(userNuboEntityLast);

        log.info("End method setOtpModeV1, email -> {}, otpMail -> {}", setOtpModeInDto.getEmail(),
                userNuboEntityLast.getOtpMail());

        return SetOtpModeOutDto.builder()
                .email(userNuboEntityLast.getEmail())
                .otpMail(userNuboEntityLast.getOtpMail())
                .message("El modo OTP por correo se actualizó correctamente.")
                .build();
    }

    private void saveUserNuboAudit(UserNuboEntity userNuboEntity) {
        userNuboEntity.setLastModifyApplication(propertiesConfig.getApiName());
        userNuboEntity.setLastModifyIp(PropertiesContext.getClientIp());
        userNuboEntity.setLastModifyUser(PropertiesContext.getClientUser());
        userNuboEntity.setLastModifyDate(PropertiesContext.getClientOffsetDatetime());
        userNuboRepository.save(userNuboEntity);
    }
}

```

## src/main/java/com/nubo/user/management/api/service/impl/ParticipantSponsorServiceImpl.java

```java
package com.nubo.user.management.api.service.impl;

import java.util.List;
import java.util.Objects;
import java.util.stream.Stream;

import com.nubo.user.management.api.application.properties.PropertiesConfig;
import org.springframework.stereotype.Service;

import com.nubo.user.management.api.helpers.MapperUtil;
import com.nubo.user.management.api.models.dto.response.ParticipantOutDto;
import com.nubo.user.management.api.models.dto.response.UserNuboOutDto;
import com.nubo.user.management.api.models.entity.ParticipantEntity;
import com.nubo.user.management.api.models.entity.ParticipantSponsorEntity;
import com.nubo.user.management.api.models.entity.ParticipantUserNuboEntity;
import com.nubo.user.management.api.models.entity.UserNuboEntity;
import com.nubo.user.management.api.repository.ParticipantSponsorRepository;
import com.nubo.user.management.api.service.ParticipantSponsorService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class ParticipantSponsorServiceImpl implements ParticipantSponsorService {

    private final PropertiesConfig propertiesConfig;
    private final ParticipantSponsorRepository participantSponsorRepository;

    @Override
    public UserNuboOutDto validateExistingParticipantSponsor(UserNuboEntity userNuboEntity) {
        log.info("Validating participant sponsor for user");
        final String typeParticipantAfpId = propertiesConfig.getTypeParticipantAfpId();
        final Long participantAfp = (typeParticipantAfpId != null && !typeParticipantAfpId.isBlank())
                ? Long.parseLong(typeParticipantAfpId)
                : null;

        List<ParticipantUserNuboEntity> participantUserNuboEntityList = userNuboEntity.getParticipantUserNuboList();

        ParticipantEntity participantEntityAfp = participantUserNuboEntityList.stream()
                .map(ParticipantUserNuboEntity::getParticipant)
                .filter(Objects::nonNull)
                .filter(participant -> participant.getType() != null)
                .filter(participant -> Objects.equals(participantAfp, participant.getType().getId()))
                .findFirst()
                .orElse(null);

        UserNuboOutDto userNuboOutDto = MapperUtil.userNuboEntityToUserNuboOutDto(userNuboEntity);
        if (participantEntityAfp != null) {
            log.debug("Getting participant sponsors for participant ID: {}", participantEntityAfp.getId());

            List<ParticipantSponsorEntity> participantSponsorEntityList = participantSponsorRepository
                    .findByParticipantId(participantEntityAfp.getId());

            List<ParticipantOutDto> participantSponsorList = Stream.concat(
                    Stream.of(MapperUtil.participantEntityToParticipantOutDto(participantEntityAfp)),
                    participantSponsorEntityList.stream()
                            .map(ParticipantSponsorEntity::getParticipantSponsor)
                            .filter(Objects::nonNull)
                            .map(MapperUtil::participantEntityToParticipantOutDto))
                    .toList();

            log.debug("Found {} participant sponsors", participantSponsorList.size());
            userNuboOutDto.setParticipantAfp(MapperUtil.participantEntityToParticipantOutDto(participantEntityAfp));
            userNuboOutDto.setParticipantSponsors(participantSponsorList);
        }

        log.debug("Participant sponsor validation completed");
        return userNuboOutDto;
    }

}

```

## src/main/java/com/nubo/user/management/api/service/impl/UserAuthServiceImpl.java

```java
package com.nubo.user.management.api.service.impl;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.springframework.context.ApplicationContext;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;

import com.nubo.user.management.api.application.properties.PropertiesConfig;
import com.nubo.user.management.api.application.properties.PropertiesContext;
import com.nubo.user.management.api.client.keycloak.service.KeycloakClient;
import com.nubo.user.management.api.exception.ServiceException;
import com.nubo.user.management.api.exception.error.ErrorCode;
import com.nubo.user.management.api.helpers.MapperUtil;
import com.nubo.user.management.api.helpers.PasswordUtil;
import com.nubo.user.management.api.helpers.UserUtil;
import com.nubo.user.management.api.models.dto.request.UserRecoveryPasswordInDto;
import com.nubo.user.management.api.models.dto.response.UserLoginOutDto;
import com.nubo.user.management.api.models.dto.response.UserNuboOutDto;
import com.nubo.user.management.api.models.dto.response.UserPasswordAuthOutDto;
import com.nubo.user.management.api.models.dto.response.UserPasswordTemporaryOutDto;
import com.nubo.user.management.api.models.dto.response.UserRecoveryPasswordOutDto;
import com.nubo.user.management.api.models.entity.ParametersNuboEntity;
import com.nubo.user.management.api.models.entity.ParticipantUserNuboEntity;
import com.nubo.user.management.api.models.entity.StatusEntity;
import com.nubo.user.management.api.models.entity.UserNuboEntity;
import com.nubo.user.management.api.models.enums.ParametersCodeEnum;
import com.nubo.user.management.api.models.enums.StatusEnum;
import com.nubo.user.management.api.models.enums.UserMessageEnum;
import com.nubo.user.management.api.models.enums.UserTypeEnum;
import com.nubo.user.management.api.models.enums.UserValueEnum;
import com.nubo.user.management.api.models.enums.VersionApiEnum;
import com.nubo.user.management.api.repository.ParametersNuboRepository;
import com.nubo.user.management.api.repository.StatusRepository;
import com.nubo.user.management.api.repository.UserNuboRepository;
import com.nubo.user.management.api.service.ParticipantSponsorService;
import com.nubo.user.management.api.service.UserAuthService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserAuthServiceImpl implements UserAuthService {

    private final UserNuboRepository userNuboRepository;
    private final StatusRepository statusRepository;
    private final KeycloakClient keycloakClient;
    private final PasswordUtil passwordUtil;
    private final ParametersNuboRepository parametersNuboRepository;
    private final ApplicationContext applicationContext;
    private final PropertiesConfig propertiesConfig;
    private final ParticipantSponsorService participantSponsorService;

    @Override
    public UserNuboOutDto generatePasswordByUserName(String userName) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return generatePasswordByUserNameV1(userName);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private UserNuboOutDto generatePasswordByUserNameV1(String userName) {
        log.info("Start method generatePasswordByUserNameV1, userName -> {}", userName);

        UserNuboEntity userNuboEntity = this.findUserAndValidateStatus(userName);

        UserNuboOutDto userNuboOutDto = MapperUtil.userNuboEntityToUserNuboOutDto(userNuboEntity);

        log.info("End method generatePasswordByUserNameV1, userName -> {}", userNuboOutDto);

        userNuboOutDto.setPassword(passwordUtil.generatePassword());

        return userNuboOutDto;
    }

    @Override
    public UserNuboOutDto increaseFailedAttemptsLoginByUsername(String userName) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return increaseFailedAttemptsLoginByUsernameV1(userName);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private UserNuboOutDto increaseFailedAttemptsLoginByUsernameV1(String userName) {
        log.info("Start method increaseFailedAttemptsLoginByUsernameV1, userName -> {}", userName);

        UserNuboEntity userNuboEntityLast = findUserNubo(userName);
        if (Boolean.TRUE.equals((userNuboEntityLast.getBlocked())) &&
                UserUtil.isBlockExpired(userNuboEntityLast)) {
            userNuboEntityLast.setBlocked(false);
        }
        UserUtil.validateStatusUser(userNuboEntityLast);

        int failedAttempt = ObjectUtils.isEmpty(userNuboEntityLast.getFailedAttempt()) ? 0
                : userNuboEntityLast.getFailedAttempt();
        userNuboEntityLast.setFailedAttempt(failedAttempt + 1);

        boolean isBlocked = UserUtil.isBlocked(userNuboEntityLast);
        userNuboEntityLast.setBlocked(isBlocked);

        if (Objects.equals(userNuboEntityLast.getFailedAttempt(),
                UserValueEnum.MAXIMUM_THIRD_FAILED_ATTEMPTS_LOGIN.getValue())) {

            StatusEntity statusEntityLast = statusRepository.findById(StatusEnum.BLOCKED_USER.getId())
                    .orElseThrow(() -> new ServiceException(ErrorCode.STATUS_NOT_FOUND, HttpStatus.NOT_FOUND));

            userNuboEntityLast.setStatus(statusEntityLast);
        }

        if (Boolean.TRUE.equals((userNuboEntityLast.getBlocked()))) {
            userNuboEntityLast.setBlockedFailedAttemptsDate(PropertiesContext.getClientDatetime());
        }

        userNuboEntityLast.setLastModifyApplication(propertiesConfig.getApiName());
        userNuboEntityLast.setLastModifyIp(PropertiesContext.getClientIp());
        userNuboEntityLast.setLastModifyUser(PropertiesContext.getClientUser());
        userNuboEntityLast.setLastModifyDate(PropertiesContext.getClientOffsetDatetime());

        UserNuboEntity userNuboEntityUpdate = userNuboRepository.save(userNuboEntityLast);
        UserUtil.validateStatusUser(userNuboEntityUpdate);

        UserNuboOutDto userNuboOutDto = MapperUtil.userNuboEntityToUserNuboOutDto(userNuboEntityUpdate);

        log.info("End method increaseFailedAttemptsLoginByUsernameV1, user -> {}", userNuboOutDto);
        return userNuboOutDto;
    }

    @Override
    public UserNuboOutDto resetFailedAttemptsAndIsBlockedByUsername(String userName) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return resetFailedAttemptsAndIsBlockedByUsernameV1(userName);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private UserNuboOutDto resetFailedAttemptsAndIsBlockedByUsernameV1(String userName) {
        log.info("Start method resetFailedAttemptsAndIsBlockedByUsernameV1, username -> {}", userName);

        UserNuboEntity userNuboEntityLast = findUserNubo(userName);

        userNuboEntityLast.setFailedAttempt(0);
        userNuboEntityLast.setBlocked(false);
        userNuboEntityLast.setBlockedFailedAttemptsDate(null);

        userNuboEntityLast.setLastModifyApplication(propertiesConfig.getApiName());
        userNuboEntityLast.setLastModifyIp(PropertiesContext.getClientIp());
        userNuboEntityLast.setLastModifyUser(PropertiesContext.getClientUser());
        userNuboEntityLast.setLastModifyDate(PropertiesContext.getClientOffsetDatetime());
        userNuboRepository.save(userNuboEntityLast);

        UserNuboEntity userNuboEntityUpdate = this.getParticipantStatusActive(userNuboEntityLast);
        UserNuboOutDto userNuboOutDto = participantSponsorService
                .validateExistingParticipantSponsor(userNuboEntityUpdate);

        log.info("End method resetFailedAttemptsAndIsBlockedByUsernameV1, user -> {}", userNuboOutDto);
        return userNuboOutDto;
    }

    @Override
    public UserNuboOutDto resetBlockedByUsername(String userName) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return resetBlockedByUsernameV1(userName);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private UserNuboOutDto resetBlockedByUsernameV1(String userName) {
        log.info("Start method resetBlockedByUsernameV1, username -> {}", userName);

        UserNuboEntity userNuboEntityLast = findUserNubo(userName);

        userNuboEntityLast.setBlocked(false);
        userNuboEntityLast.setBlockedFailedAttemptsDate(null);

        userNuboEntityLast.setLastModifyApplication(propertiesConfig.getApiName());
        userNuboEntityLast.setLastModifyIp(PropertiesContext.getClientIp());
        userNuboEntityLast.setLastModifyUser(PropertiesContext.getClientUser());
        userNuboEntityLast.setLastModifyDate(PropertiesContext.getClientOffsetDatetime());

        UserNuboOutDto userNuboOutDto = MapperUtil
                .userNuboEntityToUserNuboOutDto(userNuboRepository.save(userNuboEntityLast));

        log.info("End method resetBlockedByUsernameV1, user -> {}", userNuboOutDto);

        return userNuboOutDto;
    }

    @Override
    public UserLoginOutDto loginValidateUser(String userName) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return loginValidateUserV1(userName);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private UserLoginOutDto loginValidateUserV1(String userName) {
        log.info("Start method loginValidateUserV1, username -> {}", userName);

        UserNuboEntity userNuboEntityLast = findUserNubo(userName);

        UserLoginOutDto userLoginOutDto = UserLoginOutDto.builder().build();

        if (ObjectUtils.isEmpty(userNuboEntityLast.getPreviousSession()) ||
                Boolean.FALSE.equals(userNuboEntityLast.getPreviousSession())) {
            userNuboEntityLast.setPreviousSession(true);
            userNuboEntityLast.setLastModifyApplication(propertiesConfig.getApiName());
            userNuboEntityLast.setLastModifyIp(PropertiesContext.getClientIp());
            userNuboEntityLast.setLastModifyUser(PropertiesContext.getClientUser());
            userNuboEntityLast.setLastModifyDate(PropertiesContext.getClientOffsetDatetime());
            userNuboRepository.save(userNuboEntityLast);

            userLoginOutDto.setPreviousSession(false);
        } else {
            userLoginOutDto.setPreviousSession(true);
        }

        log.info("End method loginValidateUserV1, sessionUser -> {}", userLoginOutDto);

        return userLoginOutDto;
    }

    @Override
    @Transactional(propagation = Propagation.NOT_SUPPORTED)
    public void logoutUser(String userName) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            logoutUserV1(userName);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private void logoutUserV1(String userName) {
        log.info("Start method logoutUserV1, username -> {}", userName);

        UserAuthServiceImpl selfUserAuthServiceImpl = applicationContext.getBean(UserAuthServiceImpl.class);

        selfUserAuthServiceImpl.saveUserLogout(userName);

        logoutKeycloak(userName);

        log.info("End method logoutUserV1");
    }

    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public void saveUserLogout(String userName) {
        UserNuboEntity userNuboEntityLast = findUserNubo(userName);

        userNuboEntityLast.setPreviousSession(false);
        userNuboEntityLast.setLastModifyApplication(propertiesConfig.getApiName());
        userNuboEntityLast.setLastModifyIp(PropertiesContext.getClientIp());
        userNuboEntityLast.setLastModifyUser(PropertiesContext.getClientUser());
        userNuboEntityLast.setLastModifyDate(PropertiesContext.getClientOffsetDatetime());
        userNuboRepository.save(userNuboEntityLast);
    }

    private void logoutKeycloak(String userName) {
        log.info("Start method logoutKeycloakV1, username -> {}", userName);

        UserNuboEntity userNuboEntityLast = findUserNubo(userName);

        Map<String, Object> response = keycloakClient.getTokenIntrospect();
        Boolean isActive = (Boolean) response.get("active");

        if (isActive) {
            Optional<Map<String, Object>> userKeycloak = keycloakClient.getUser(userNuboEntityLast.getUserName())
                    .stream()
                    .findFirst();

            if (userKeycloak.isPresent()) {
                Map<String, Object> user = userKeycloak.get();
                String idUser = (String) user.get("id");
                keycloakClient.logoutUser(idUser);
            } else {
                throw new ServiceException(ErrorCode.USER_NOT_FOUND, HttpStatus.NOT_FOUND);
            }
        }
        log.info("End method logoutKeycloakV1");
    }

    @Override
    public UserPasswordTemporaryOutDto validatePasswordTemporaryExpirationUser(String userName) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return validatePasswordTemporaryExpirationUserV1(userName);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private UserPasswordTemporaryOutDto validatePasswordTemporaryExpirationUserV1(String userName) {
        log.info("Start method validatePasswordTemporaryExpirationUserV1, username -> {}", userName);

        UserNuboEntity userNuboEntityLast = findUserAndValidateStatus(userName);

        UserPasswordTemporaryOutDto userPasswordTemporaryOutDto = UserPasswordTemporaryOutDto.builder().build();

        if (UserTypeEnum.EXTERNAL.equals(userNuboEntityLast.getUserType()) &&
                !ObjectUtils.isEmpty(userNuboEntityLast.getPasswordTemporaryModifyDate())) {
            LocalDateTime passwordTemporaryModifyDate = userNuboEntityLast.getPasswordTemporaryModifyDate();
            LocalDateTime clientDate = PropertiesContext.getClientDatetime();

            ParametersNuboEntity parametersNuboEntity = parametersNuboRepository
                    .findByCode(ParametersCodeEnum.PASSWORD_TEMPORARY_EXPIRATION_HOURS.getValue())
                    .orElseThrow(() -> new ServiceException(ErrorCode.PARAMETERS_NUBO_NOT_FOUND, HttpStatus.NOT_FOUND));
            int passwordTemporaryHours = Integer.parseInt(parametersNuboEntity.getValue());

            LocalDateTime passwordTemporaryDate = passwordTemporaryModifyDate.plusHours(passwordTemporaryHours);

            if (clientDate.isAfter(passwordTemporaryDate) || passwordTemporaryModifyDate.isAfter(clientDate)) {
                userPasswordTemporaryOutDto
                        .setMessagePasswordTemporaryExpire(UserMessageEnum.PASSWORD_TEMPORARY_EXPIRED.getValue());
            }
        }

        log.info("End method validatePasswordTemporaryExpirationUserV1, userPasswordTemporaryOutDto -> {}",
                userPasswordTemporaryOutDto);

        return userPasswordTemporaryOutDto;
    }

    @Override
    public UserPasswordAuthOutDto validatePasswordAuthExpirationUser(String userName) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return validatePasswordAuthExpirationUserV1(userName);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private UserPasswordAuthOutDto validatePasswordAuthExpirationUserV1(String userName) {
        log.info("Start method validatePasswordAuthExpirationUserV1, username -> {}", userName);

        UserNuboEntity userNuboEntityLast = findUserAndValidateStatus(userName);

        UserPasswordAuthOutDto userPasswordAuthOutDto = UserPasswordAuthOutDto.builder().build();

        if (UserTypeEnum.EXTERNAL.equals(userNuboEntityLast.getUserType())) {
            LocalDateTime passwordTemporaryModifyDate = userNuboEntityLast.getPasswordTemporaryModifyDate();
            LocalDateTime passwordAuthModifyDate = userNuboEntityLast.getPasswordAuthModifyDate();
            LocalDateTime clientDate = PropertiesContext.getClientDatetime();

            if (ObjectUtils.isEmpty(passwordTemporaryModifyDate) && ObjectUtils.isEmpty(passwordAuthModifyDate)) {
                userPasswordAuthOutDto.setMessagePasswordExpire(UserMessageEnum.PASSWORD_EXPIRED.getValue());
            } else if (!ObjectUtils.isEmpty(passwordAuthModifyDate)) {
                Integer valueExpiredPassword = null;
                Map<String, Object> realmKeycloak = keycloakClient.getRealm();
                if (!ObjectUtils.isEmpty(realmKeycloak)) {
                    String passwordPolicy = (String) realmKeycloak.get("passwordPolicy");
                    String keycloakPolicyPasswordExpireQuantity = propertiesConfig
                            .getKeycloakPolicyPasswordExpireQuantity();
                    Pattern pattern = Pattern.compile(keycloakPolicyPasswordExpireQuantity.concat("\\((\\d+)\\)"));
                    Matcher matcher = pattern.matcher(passwordPolicy);

                    if (matcher.find()) {
                        String value = matcher.group(1);
                        valueExpiredPassword = Integer.parseInt(value);
                    }
                }

                if (!ObjectUtils.isEmpty(valueExpiredPassword)) {
                    LocalDateTime passwordAuthDate = passwordAuthModifyDate.plusDays(valueExpiredPassword);
                    long daysToExpire = ChronoUnit.DAYS.between(clientDate.toLocalDate(), passwordAuthDate);

                    ParametersNuboEntity parametersNuboEntity = parametersNuboRepository
                            .findByCode(ParametersCodeEnum.PASSWORD_NEARLY_EXPIRATION_DAYS.getValue())
                            .orElseThrow(() -> new ServiceException(ErrorCode.PARAMETERS_NUBO_NOT_FOUND,
                                    HttpStatus.NOT_FOUND));
                    int passwordNearlyExpirationDays = Integer.parseInt(parametersNuboEntity.getValue());

                    if (daysToExpire <= 0) {
                        userPasswordAuthOutDto.setMessagePasswordExpire(UserMessageEnum.PASSWORD_EXPIRED.getValue());
                    } else if (daysToExpire <= passwordNearlyExpirationDays) {
                        String message = String.format(UserMessageEnum.PASSWORD_NEARLY_TO_EXPIRE.getValue(),
                                daysToExpire);
                        if (daysToExpire == 1) {
                            userPasswordAuthOutDto.setMessagePasswordAuthNearlyExpire(message.concat(" día"));
                        } else {
                            userPasswordAuthOutDto.setMessagePasswordAuthNearlyExpire(message.concat(" días"));
                        }
                    }
                } else {
                    throw new ServiceException(ErrorCode.KEYCLOAK_POLICY_PASSWORD_EXPIRE_ERROR, HttpStatus.NOT_FOUND);
                }
            }
        }

        log.info("End method validatePasswordAuthExpirationUserV1, userPasswordAuthOutDto -> {}",
                userPasswordAuthOutDto);

        return userPasswordAuthOutDto;
    }

    @Override
    public UserRecoveryPasswordOutDto validateRecoveryPasswordUrl(String userName,
            UserRecoveryPasswordInDto userRecoveryPasswordInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return validateRecoveryPasswordUrlV1(userName, userRecoveryPasswordInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private UserRecoveryPasswordOutDto validateRecoveryPasswordUrlV1(String userName,
            UserRecoveryPasswordInDto userRecoveryPasswordInDto) {
        log.info("Start method validateRecoveryPasswordUrlV1, username -> {}", userName);

        UserNuboEntity userNuboEntity = findUserAndValidateStatus(userName);

        UserRecoveryPasswordOutDto userRecoveryPasswordOutDto = UserRecoveryPasswordOutDto.builder().build();

        if (UserTypeEnum.EXTERNAL.equals(userNuboEntity.getUserType())) {

            String recoveryPasswordUrl = userNuboEntity.getRecoveryPasswordUrl();
            if (ObjectUtils.isEmpty(recoveryPasswordUrl)) {
                userRecoveryPasswordOutDto.setMessageRecoveryPasswordUrlExpire(
                        UserMessageEnum.RECOVERY_PASSWORD_URL_NOT_VALID.getValue());
                return userRecoveryPasswordOutDto;
            }

            String recoveryPasswordUrlDecode = passwordUtil.decodePassword(recoveryPasswordUrl);
            String urlRecoveryPasswordDecode = passwordUtil
                    .decodePassword(userRecoveryPasswordInDto.getUrlRecoveryPassword());

            if (!recoveryPasswordUrlDecode.equals(urlRecoveryPasswordDecode)) {
                userRecoveryPasswordOutDto.setMessageRecoveryPasswordUrlExpire(
                        UserMessageEnum.RECOVERY_PASSWORD_URL_NOT_VALID.getValue());
                return userRecoveryPasswordOutDto;
            }

            LocalDateTime recoveryPasswordUrlModifyDate = userNuboEntity.getRecoveryPasswordUrlModifyDate();
            LocalDateTime clientDate = PropertiesContext.getClientDatetime();

            if (!ObjectUtils.isEmpty(recoveryPasswordUrlModifyDate)) {

                ParametersNuboEntity parametersNuboEntity = parametersNuboRepository
                        .findByCode(ParametersCodeEnum.RECOVERY_PASSWORD_URL_EXPIRATION_HOURS.getValue())
                        .orElseThrow(
                                () -> new ServiceException(ErrorCode.PARAMETERS_NUBO_NOT_FOUND, HttpStatus.NOT_FOUND));
                int passwordRecoveryHours = Integer.parseInt(parametersNuboEntity.getValue());

                LocalDateTime passwordRecoveryDate = recoveryPasswordUrlModifyDate.plusHours(passwordRecoveryHours);

                if (clientDate.isAfter(passwordRecoveryDate) || recoveryPasswordUrlModifyDate.isAfter(clientDate)) {
                    userRecoveryPasswordOutDto.setMessageRecoveryPasswordUrlExpire(
                            UserMessageEnum.RECOVERY_PASSWORD_URL_EXPIRED.getValue());
                }

            } else {
                userRecoveryPasswordOutDto
                        .setMessageRecoveryPasswordUrlExpire(UserMessageEnum.RECOVERY_PASSWORD_URL_EXPIRED.getValue());
            }
        } else {
            throw new ServiceException(ErrorCode.USER_INTERNAL_RECOVERY_PASSWORD_ERROR, HttpStatus.BAD_REQUEST);
        }

        log.info("End method validateRecoveryPasswordUrlV1");

        return userRecoveryPasswordOutDto;
    }

    @Override
    public void validateFailedAttemptsUser(String userName) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            validateFailedAttemptsUserV1(userName);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private void validateFailedAttemptsUserV1(String userName) {
        log.info("Start method validateFailedAttemptsUserV1, username -> {}", userName);

        UserNuboEntity userNuboEntity = findUserNubo(userName);

        if (StatusEnum.ACTIVE_USER.getId().equals(userNuboEntity.getStatus().getId()) &&
                Boolean.TRUE.equals(userNuboEntity.getBlocked()) &&
                UserUtil.isBlockExpired(userNuboEntity)) {
            userNuboEntity.setBlocked(false);
            userNuboEntity.setBlockedFailedAttemptsDate(null);
            userNuboEntity.setLastModifyApplication(propertiesConfig.getApiName());
            userNuboEntity.setLastModifyIp(PropertiesContext.getClientIp());
            userNuboEntity.setLastModifyUser(PropertiesContext.getClientUser());
            userNuboEntity.setLastModifyDate(PropertiesContext.getClientOffsetDatetime());
            userNuboRepository.save(userNuboEntity);
        } else if (Boolean.TRUE.equals(userNuboEntity.getBlocked())) {
            throw new ServiceException(ErrorCode.USER_BLOCKED_EXCEEDS_FAILED_ATTEMPTS, HttpStatus.BAD_REQUEST);
        }

        log.info("End method validateFailedAttemptsUserV1");
    }

    private UserNuboEntity findUserNubo(String userName) {
        return userNuboRepository.findByUserName(userName)
                .orElseThrow(() -> new ServiceException(ErrorCode.USER_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private UserNuboEntity findUserAndValidateStatus(String userName) {
        UserNuboEntity userNuboEntity = findUserNubo(userName);
        UserUtil.validateStatusUser(userNuboEntity);
        return userNuboEntity;
    }

    private UserNuboEntity getParticipantStatusActive(UserNuboEntity userNuboEntity) {
        List<ParticipantUserNuboEntity> participantUserNuboEntityList = userNuboEntity.getParticipantUserNuboList()
                .stream()
                .filter(participantUserNuboEntity -> Objects.equals(StatusEnum.ACTIVE_PARTICIPANT.getId(),
                        participantUserNuboEntity.getParticipant().getStatus().getId()))
                .toList();
        userNuboEntity.setParticipantUserNuboList(participantUserNuboEntityList);
        return userNuboEntity;
    }
}

```

## src/main/java/com/nubo/user/management/api/service/impl/UserNuboServiceImpl.java

```java
package com.nubo.user.management.api.service.impl;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import org.hibernate.Hibernate;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;

import com.nubo.user.management.api.application.properties.PropertiesConfig;
import com.nubo.user.management.api.application.properties.PropertiesContext;
import com.nubo.user.management.api.exception.ServiceException;
import com.nubo.user.management.api.exception.error.ErrorCode;
import com.nubo.user.management.api.helpers.MapperPageUtil;
import com.nubo.user.management.api.helpers.MapperUserNuboDynamicSearch;
import com.nubo.user.management.api.helpers.MapperUserNuboSearch;
import com.nubo.user.management.api.helpers.MapperUtil;
import com.nubo.user.management.api.helpers.UserUtil;
import com.nubo.user.management.api.models.domain.UserParams;
import com.nubo.user.management.api.models.dto.request.UserNuboInDto;
import com.nubo.user.management.api.models.dto.request.UserNuboUpdateInDto;
import com.nubo.user.management.api.models.dto.response.ContactDetailOutDto;
import com.nubo.user.management.api.models.dto.response.CountryOutDto;
import com.nubo.user.management.api.models.dto.response.DetailUserOutDto;
import com.nubo.user.management.api.models.dto.response.EmailOutDto;
import com.nubo.user.management.api.models.dto.response.InformationChangPwdOutDto;
import com.nubo.user.management.api.models.dto.response.PageResponseOutDto;
import com.nubo.user.management.api.models.dto.response.ParticipantOutDto;
import com.nubo.user.management.api.models.dto.response.ProfileOutDto;
import com.nubo.user.management.api.models.dto.response.StatusOutDto;
import com.nubo.user.management.api.models.dto.response.UserNuboOutDto;
import com.nubo.user.management.api.models.dto.response.UserNuboUserTypeOutDto;
import com.nubo.user.management.api.models.dto.response.UsernameOutDto;
import com.nubo.user.management.api.models.entity.CountryEntity;
import com.nubo.user.management.api.models.entity.EnterpriseGroupEntity;
import com.nubo.user.management.api.models.entity.IdentificationTypeEntity;
import com.nubo.user.management.api.models.entity.ParticipantEntity;
import com.nubo.user.management.api.models.entity.ParticipantUserNuboEntity;
import com.nubo.user.management.api.models.entity.ProfileEntity;
import com.nubo.user.management.api.models.entity.ProfileUserNuboEntity;
import com.nubo.user.management.api.models.entity.StatusEntity;
import com.nubo.user.management.api.models.entity.UserNuboEntity;
import com.nubo.user.management.api.models.enums.ProfileEnum;
import com.nubo.user.management.api.models.enums.StatusEnum;
import com.nubo.user.management.api.models.enums.VersionApiEnum;
import com.nubo.user.management.api.repository.CountryRepository;
import com.nubo.user.management.api.repository.IdentificationTypeRepository;
import com.nubo.user.management.api.repository.ParticipantRepository;
import com.nubo.user.management.api.repository.ParticipantUserNuboRepository;
import com.nubo.user.management.api.repository.ProfileRepository;
import com.nubo.user.management.api.repository.StatusRepository;
import com.nubo.user.management.api.repository.UserNuboRepository;
import com.nubo.user.management.api.service.ParticipantSponsorService;
import com.nubo.user.management.api.service.UserNuboService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserNuboServiceImpl implements UserNuboService {

    private final UserNuboRepository userNuboRepository;
    private final CountryRepository countryRepository;
    private final ParticipantRepository participantRepository;
    private final ProfileRepository profileRepository;
    private final StatusRepository statusRepository;
    private final IdentificationTypeRepository identificationTypeRepository;
    private final ParticipantSponsorService participantSponsorService;
    private final ParticipantUserNuboRepository participantUserNuboRepository;
    private final PropertiesConfig propertiesConfig;

    @Override
    public PageResponseOutDto<UserNuboOutDto> findAllUsers(UserParams userParams) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllUsersV1(userParams);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<UserNuboOutDto> findAllUsersV1(UserParams userParams) {
        log.info("Start method findAllUsersV1 with params: {}", userParams);
        Set<Long> profileIdAdmin = searchProfileByName(ProfileEnum.ADMINISTRATOR.getValue(),
                userParams.excludeParticipantId(), userParams.participant());
        if (userParams.accessProfileId() == null
                || !profileIdAdmin.contains(userParams.accessProfileId().longValue())) {
            log.warn("No permissions to access, returning empty result.");
            throw new ServiceException(ErrorCode.USER_NO_PERMISSIONS, HttpStatus.FORBIDDEN);
        } else {
            Specification<UserNuboEntity> specification = MapperUserNuboSearch.buildSpecification(userParams);

            Sort.Direction direction = "desc".equalsIgnoreCase(userParams.order()) ? Sort.Direction.DESC
                    : Sort.Direction.ASC;
            Sort sortObj = Sort.by(direction, userParams.sort() != null ? userParams.sort() : "id");

            Long participantId = resolveParticipantId(userParams.participant());
            if (userParams.all() || Boolean.TRUE.equals(userParams.download())) {
                List<UserNuboEntity> allUsers = userNuboRepository.findAll(specification, sortObj);

                List<UserNuboOutDto> userOutDtoList = allUsers.stream()
                        .map(participantSponsorService::validateExistingParticipantSponsor)
                        .map(userNuboOutDto -> filterProfilesByParticipantIfRequired(userNuboOutDto, participantId))
                        .toList();

                log.info("End method findAllUsersV1, found {} users", userOutDtoList.size());
                return new PageResponseOutDto<>(userOutDtoList, 0, userOutDtoList.size(), (long) userOutDtoList.size(),
                        userOutDtoList.size());
            } else {
                Pageable pageable = PageRequest.of(userParams.page(), userParams.size(), sortObj);
                Page<UserNuboEntity> usersPage = userNuboRepository.findAll(specification, pageable);

                List<UserNuboOutDto> userOutDtoList = usersPage.getContent().stream()
                        .map(participantSponsorService::validateExistingParticipantSponsor)
                        .map(userNuboOutDto -> filterProfilesByParticipantIfRequired(userNuboOutDto, participantId))
                        .map(userNuboOutDto -> filterProfilesInResponseIfRequired(userNuboOutDto, userParams))
                        .toList();

                log.info("End method findAllUsersV1, found {} users", userOutDtoList.size());
                return MapperPageUtil.pageToPageResponseOutDto(userOutDtoList, usersPage);
            }
        }
    }

    @Override
    public UserNuboOutDto findUserById(Long userId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findUserByIdV1(userId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private UserNuboOutDto findUserByIdV1(Long userId) {
        log.info("Start method findUserByIdV1, userId -> {}", userId);

        UserNuboEntity userNuboEntity = getUserNuboEntityById(userId);

        UserNuboOutDto userNuboOutDto = participantSponsorService.validateExistingParticipantSponsor(userNuboEntity);

        log.info("End method findUserByIdV1, user -> {}", userNuboOutDto);
        return userNuboOutDto;
    }

    @Override
    public UserNuboOutDto findUserByUsername(String userName) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findUserByUsernameV1(userName);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private UserNuboOutDto findUserByUsernameV1(String userName) {
        log.info("Start method findUserByUsernameV1, username -> {}", userName);

        UserNuboEntity userNuboEntity = getUserNuboEntityByUsername(userName);

        UserNuboEntity userNuboEntityUpdate = this.getParticipantStatusActive(userNuboEntity);
        UserNuboOutDto userNuboOutDto = participantSponsorService.validateExistingParticipantSponsor(
                userNuboEntityUpdate);

        log.info("End method findUserByUsernameV1, user -> {}", userNuboOutDto);
        return userNuboOutDto;
    }

    @Override
    public UserNuboOutDto findUserByEmail(String email) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findUserByEmailV1(email);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private UserNuboOutDto findUserByEmailV1(String email) {
        log.info("Start method findUserByEmailV1, email -> {}", email);

        UserNuboEntity userNuboEntity = getUserNuboEntityByEmail(email);

        UserNuboEntity userNuboUpdate = this.getParticipantStatusActive(userNuboEntity);
        UserNuboOutDto userNuboOutDto = participantSponsorService.validateExistingParticipantSponsor(userNuboUpdate);

        log.info("End method findUserByEmailV1, user -> {}", userNuboOutDto);
        return userNuboOutDto;
    }

    @Override
    public UserNuboOutDto findUserInParticipantByEmail(String email, Long participantId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findUserInParticipantByEmailV1(email, participantId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public UserNuboOutDto findUserInParticipantsByEmail(String email, List<Long> participantIds) {
        log.info("Start method findUserInParticipantsByEmail, email -> {}, participants -> {}", email, participantIds);

        List<EnterpriseGroupEntity> enterpriseGroups = participantIds.stream()
                .map(id -> participantRepository.findEnterpriseGroupByParticipantId(id)
                        .orElseThrow(() -> new ServiceException(
                                ErrorCode.ENTERPRISE_GROUP_NOT_FOUND, HttpStatus.NOT_FOUND)))
                .distinct()
                .toList();

        if (enterpriseGroups.size() > 1) {
            throw new ServiceException(ErrorCode.ENTERPRISE_GROUP_MISMATCH, HttpStatus.BAD_REQUEST);
        }

        EnterpriseGroupEntity enterpriseGroupEntity = enterpriseGroups.get(0);

        boolean existsInOtherGroup = userNuboRepository.existsByEmailInOtherEnterpriseGroup(email,
                enterpriseGroupEntity.getId());
        if (existsInOtherGroup) {
            throw new ServiceException(
                    ErrorCode.USER_ALREADY_EXISTS_IN_ANOTHER_GROUP,
                    HttpStatus.CONFLICT);
        }

        boolean existsInSameGroup = userNuboRepository.existsByEmailAndAnyParticipantId(email, participantIds);
        if (existsInSameGroup) {
            throw new ServiceException(ErrorCode.USER_ALREADY_EXISTS_IN_PARTICIPANT, HttpStatus.CONFLICT);
        }

        List<ParticipantEntity> participantsInGroup = participantRepository
                .findByEnterpriseGroup(enterpriseGroupEntity);

        UserNuboOutDto userNuboOutDto = userNuboRepository.findByEmailAndParticipants(email, participantsInGroup)
                .stream()
                .findFirst()
                .map(participantSponsorService::validateExistingParticipantSponsor)
                .orElseThrow(() -> new ServiceException(ErrorCode.USER_NOT_FOUND, HttpStatus.NOT_FOUND));

        log.info("End method findUserInParticipantsByEmail, user -> {}", userNuboOutDto);
        return userNuboOutDto;
    }

    private UserNuboOutDto findUserInParticipantByEmailV1(String email, Long participantId) {
        log.info("Start method findUserInParticipantByEmailV1, email -> {}", email);

        EnterpriseGroupEntity enterpriseGroupEntity = participantRepository
                .findEnterpriseGroupByParticipantId(participantId)
                .orElseThrow(() -> new ServiceException(ErrorCode.ENTERPRISE_GROUP_NOT_FOUND, HttpStatus.NOT_FOUND));

        boolean existsInOtherGroup = userNuboRepository.existsByEmailInOtherEnterpriseGroup(email,
                enterpriseGroupEntity.getId());
        if (existsInOtherGroup) {
            throw new ServiceException(
                    ErrorCode.USER_ALREADY_EXISTS_IN_ANOTHER_GROUP,
                    HttpStatus.NOT_FOUND);
        }

        List<ParticipantEntity> participantsInGroup = participantRepository
                .findByEnterpriseGroup(enterpriseGroupEntity);

        UserNuboOutDto userNuboOutDto = userNuboRepository.findByEmailAndParticipants(email, participantsInGroup)
                .stream()
                .findFirst()
                .map(participantSponsorService::validateExistingParticipantSponsor)
                .orElseThrow(() -> new ServiceException(ErrorCode.USER_NOT_FOUND, HttpStatus.NOT_FOUND));

        log.info("End method findUserInParticipantByEmailV1, user -> {}", userNuboOutDto);
        return userNuboOutDto;
    }

    @Override
    public UserNuboUserTypeOutDto findUserTypeByEmail(String email) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findUserTypeByEmailV1(email);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private UserNuboUserTypeOutDto findUserTypeByEmailV1(String email) {
        log.info("Start method findUserTypeByEmailV1, email -> {}", email);

        UserNuboEntity userNuboEntity = getUserNuboEntityByEmail(email);

        UserNuboUserTypeOutDto userNuboUserTypeOutDto = UserNuboUserTypeOutDto.builder()
                .userType(userNuboEntity.getUserType())
                .build();

        log.info("End method findUserTypeByEmailV1, user -> {}", userNuboUserTypeOutDto);
        return userNuboUserTypeOutDto;
    }

    @Override
    public void validateUserByIdentificationTypeIdAndIdentificationAndParticipantId(
            Long identificationTypeId, String identification, Long participantId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            validateUserByIdentificationTypeIdAndIdentificationAndParticipantIdV1(
                    identificationTypeId, identification, participantId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public UserNuboOutDto validateUserByEmail(String email) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return validateUserByEmailV1(email);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private UserNuboOutDto validateUserByEmailV1(String email) {
        log.info("Start method validateUserByEmailV1, email -> '{}'", email);

        UserNuboEntity userNuboEntityLast = getUserNuboEntityByEmail(email);

        if (Boolean.TRUE.equals(userNuboEntityLast.getBlocked()) && UserUtil.isBlockExpired(userNuboEntityLast)) {
            log.info("User block expired, resetting block status for user -> '{}'", email);
            userNuboEntityLast.setBlocked(false);
            userNuboEntityLast.setLastModifyApplication(propertiesConfig.getApiName());
            userNuboEntityLast.setLastModifyIp(PropertiesContext.getClientIp());
            userNuboEntityLast.setLastModifyUser(PropertiesContext.getClientUser());
            userNuboEntityLast.setLastModifyDate(PropertiesContext.getClientOffsetDatetime());
            userNuboRepository.save(userNuboEntityLast);
        }

        UserUtil.validateStatusUser(userNuboEntityLast);

        UserNuboEntity userNuboUpdate = this.getParticipantStatusActive(userNuboEntityLast);
        UserNuboOutDto userNuboOutDto = participantSponsorService.validateExistingParticipantSponsor(userNuboUpdate);

        log.info("End method validateUserByEmailV1, user -> '{}'", userNuboOutDto);
        return userNuboOutDto;
    }

    private void validateUserByIdentificationTypeIdAndIdentificationAndParticipantIdV1(
            Long identificationTypeId, String identification, Long participantId) {
        log.info(
                "Start method validateUserByIdentificationTypeIdAndIdentificationAndParticipantIdV1, identificationTypeId -> {}, "
                        +
                        "identification -> {}, participantId -> {}",
                identificationTypeId, identification, participantId);

        Optional<UserNuboEntity> userNuboEntity = userNuboRepository
                .findByIdentificationTypeIdAndIdentificationAndParticipantId(identificationTypeId,
                        identification, participantId);

        if (userNuboEntity.isPresent()) {
            throw new ServiceException(ErrorCode.USER_ID_TYPE_IDENTIFICATION_PARTICIPANT_EXISTS,
                    HttpStatus.BAD_REQUEST);
        }

        log.info("End method validateUserByIdentificationTypeIdAndIdentificationAndParticipantIdV1");
    }

    @Override
    public UserNuboOutDto createUser(UserNuboInDto userNuboInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return createUserV1(userNuboInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private UserNuboOutDto createUserV1(UserNuboInDto userNuboInDto) {
        log.info("Start method createUserV1, user -> {}", userNuboInDto);

        this.validateCreateUserNubo(userNuboInDto);

        UserNuboEntity userNuboEntity = UserNuboEntity.builder()
                .userName(userNuboInDto.getUserName())
                .firstName(userNuboInDto.getFirstName())
                .lastName(userNuboInDto.getLastName())
                .identificationType(validateIdentificationType(userNuboInDto.getIdentificationTypeId()))
                .identification(userNuboInDto.getIdentification())
                .idKeycloak(userNuboInDto.getIdKeycloak())
                .email(userNuboInDto.getEmail())
                .verifiedEmail(userNuboInDto.getVerifiedEmail())
                .phoneNumber(userNuboInDto.getPhoneNumber())
                .userGroup(userNuboInDto.getUserGroup())
                .userType(userNuboInDto.getUserType())
                .jiraNumber(userNuboInDto.getJiraNumber())
                .failedAttempt(0)
                .blocked(false)
                .country(validateCountry(userNuboInDto.getCountryId()))
                .status(validateStatus(StatusEnum.ACTIVE_USER.getId()))
                .otp(false)
                .otpSecret(null)
                .otpCreatedDate(null)
                .previousSession(false)
                .userCreatedDate(LocalDate.now())
                .userCreatedBy(PropertiesContext.getClientUser())
                .passwordTemporaryModifyDate(PropertiesContext.getClientDatetime())
                .passwordAuthModifyDate(null)
                .recoveryPasswordUrl(null)
                .recoveryPasswordUrlModifyDate(null)
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyIp(PropertiesContext.getClientIp())
                .lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyDate(PropertiesContext.getClientOffsetDatetime())
                .build();

        List<ParticipantUserNuboEntity> participants = validateParticipants(
                userNuboInDto.getParticipantIds(), userNuboEntity);

        userNuboEntity.setParticipantUserNuboList(participants);

        List<ProfileUserNuboEntity> profiles = validateProfilesInCreate(userNuboInDto.getProfileIds(), userNuboEntity);

        userNuboEntity.setProfileUserNuboList(profiles);

        ParticipantEntity participantSession = participants.get(0).getParticipant();
        ProfileEntity profileSession = profiles.stream()
                .map(ProfileUserNuboEntity::getProfile)
                .filter(profile -> profile.getParticipant().getId().equals(participantSession.getId()))
                .findFirst()
                .orElseThrow(() -> new ServiceException(
                        ErrorCode.PROFILE_NOT_BELONGS_TO_USER_PARTICIPANT,
                        HttpStatus.BAD_REQUEST));

        userNuboEntity.setParticipantSession(participantSession);
        userNuboEntity.setProfileSession(profileSession);

        userNuboEntity = userNuboRepository.save(userNuboEntity);

        UserNuboOutDto userNuboOutDto = participantSponsorService.validateExistingParticipantSponsor(userNuboEntity);

        log.info("End method createUserV1, user -> {}", userNuboOutDto);
        return userNuboOutDto;
    }

    @Override
    public UserNuboOutDto updateUserById(Long userId, UserNuboUpdateInDto userNuboUpdateInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return updateUserByIdV1(userId, userNuboUpdateInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private UserNuboOutDto updateUserByIdV1(Long userId, UserNuboUpdateInDto userNuboUpdateInDto) {
        log.info("Start method updateUserByIdV1, userId -> {},  user -> {}", userId, userNuboUpdateInDto);

        UserNuboEntity userNuboEntityLast = getUserNuboEntityById(userId);

        UserUtil.validateUpdateUserNubo(userNuboEntityLast, userNuboUpdateInDto);

        UserNuboOutDto userNuboOutDto = this.updateUser(userNuboEntityLast, userNuboUpdateInDto);

        log.info("End method updateUserByIdV1, user -> {}", userNuboOutDto);
        return userNuboOutDto;
    }

    @Override
    public UserNuboOutDto updateUserByUsername(String username, UserNuboUpdateInDto userNuboUpdateInDto) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return updateUserByUsernameV1(username, userNuboUpdateInDto);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private UserNuboOutDto updateUserByUsernameV1(String username, UserNuboUpdateInDto userNuboUpdateInDto) {
        log.info("Start method updateUserByUsernameV1, userName -> {}, user -> {}", userNuboUpdateInDto,
                userNuboUpdateInDto);

        UserNuboEntity userNuboEntityLast = getUserNuboEntityByUsername(username);

        UserUtil.validateUpdateUserNubo(userNuboEntityLast, userNuboUpdateInDto);

        UserNuboOutDto userNuboOutDto = this.updateUser(userNuboEntityLast, userNuboUpdateInDto);

        log.info("End method updateUserByUsernameV1, user -> {}", userNuboOutDto);
        return userNuboOutDto;
    }

    private UserNuboOutDto updateUser(UserNuboEntity userNuboEntityLast, UserNuboUpdateInDto userNuboUpdateInDto) {

        UserNuboEntity userNuboEntity = UserNuboEntity.builder()
                .id(userNuboEntityLast.getId())
                .userName(userNuboEntityLast.getUserName())
                .firstName(ObjectUtils.isEmpty(userNuboUpdateInDto.getFirstName())
                        ? userNuboEntityLast.getFirstName()
                        : userNuboUpdateInDto.getFirstName())
                .lastName(ObjectUtils.isEmpty(userNuboUpdateInDto.getLastName())
                        ? userNuboEntityLast.getLastName()
                        : userNuboUpdateInDto.getLastName())
                .identificationType(ObjectUtils.isEmpty(userNuboUpdateInDto.getIdentificationTypeId())
                        ? userNuboEntityLast.getIdentificationType()
                        : validateIdentificationType(userNuboUpdateInDto.getIdentificationTypeId()))
                .identification(ObjectUtils.isEmpty(userNuboUpdateInDto.getIdentification())
                        ? userNuboEntityLast.getIdentification()
                        : userNuboUpdateInDto.getIdentification())
                .idKeycloak(ObjectUtils.isEmpty(userNuboUpdateInDto.getIdKeycloak())
                        ? userNuboEntityLast.getIdKeycloak()
                        : userNuboUpdateInDto.getIdKeycloak())
                .email(ObjectUtils.isEmpty(userNuboUpdateInDto.getEmail())
                        ? userNuboEntityLast.getEmail()
                        : userNuboUpdateInDto.getEmail())
                .verifiedEmail(ObjectUtils.isEmpty(userNuboUpdateInDto.getVerifiedEmail())
                        ? userNuboEntityLast.getVerifiedEmail()
                        : userNuboUpdateInDto.getVerifiedEmail())
                .phoneNumber(ObjectUtils.isEmpty(userNuboUpdateInDto.getPhoneNumber())
                        ? userNuboEntityLast.getPhoneNumber()
                        : userNuboUpdateInDto.getPhoneNumber())
                .userGroup(ObjectUtils.isEmpty(userNuboUpdateInDto.getUserGroup())
                        ? userNuboEntityLast.getUserGroup()
                        : userNuboUpdateInDto.getUserGroup())
                .userType(ObjectUtils.isEmpty(userNuboUpdateInDto.getUserType())
                        ? userNuboEntityLast.getUserType()
                        : userNuboUpdateInDto.getUserType())
                .jiraNumber(ObjectUtils.isEmpty(userNuboUpdateInDto.getJiraNumber())
                        ? userNuboEntityLast.getJiraNumber()
                        : userNuboUpdateInDto.getJiraNumber())
                .failedAttempt(ObjectUtils.isEmpty(userNuboUpdateInDto.getFailedAttempt())
                        ? userNuboEntityLast.getFailedAttempt()
                        : userNuboUpdateInDto.getFailedAttempt())
                .blocked(ObjectUtils.isEmpty(userNuboUpdateInDto.getBlocked())
                        ? userNuboEntityLast.getBlocked()
                        : userNuboUpdateInDto.getBlocked())
                .profileSession(ObjectUtils.isEmpty(userNuboUpdateInDto.getProfileId())
                        ? userNuboEntityLast.getProfileSession()
                        : validateProfile(userNuboUpdateInDto.getProfileId()))
                .profileUserNuboList(ObjectUtils.isEmpty(userNuboUpdateInDto.getProfileIds())
                        ? userNuboEntityLast.getProfileUserNuboList()
                        : validateProfiles(userNuboUpdateInDto.getProfileIds(), userNuboEntityLast,
                                userNuboUpdateInDto))
                .country(ObjectUtils.isEmpty(userNuboUpdateInDto.getCountryId())
                        ? userNuboEntityLast.getCountry()
                        : validateCountry(userNuboUpdateInDto.getCountryId()))
                .participantSession(ObjectUtils.isEmpty(userNuboUpdateInDto.getParticipantId())
                        ? userNuboEntityLast.getParticipantSession()
                        : validateParticipant(userNuboUpdateInDto.getParticipantId()))
                .participantUserNuboList(ObjectUtils.isEmpty(userNuboUpdateInDto.getParticipantIds())
                        ? userNuboEntityLast.getParticipantUserNuboList()
                        : validateParticipants(userNuboUpdateInDto.getParticipantIds(), userNuboEntityLast))
                .status(ObjectUtils.isEmpty(userNuboUpdateInDto.getStatusId())
                        ? userNuboEntityLast.getStatus()
                        : validateStatus(userNuboUpdateInDto.getStatusId()))
                .otp(ObjectUtils.isEmpty(userNuboUpdateInDto.getOtp())
                        ? userNuboEntityLast.getOtp()
                        : userNuboUpdateInDto.getOtp())
                .otpSecret(userNuboEntityLast.getOtpSecret())
                .otpCreatedDate(userNuboEntityLast.getOtpCreatedDate())
                .previousSession(userNuboEntityLast.getPreviousSession())
                .passwordTemporaryModifyDate(userNuboEntityLast.getPasswordTemporaryModifyDate())
                .passwordAuthModifyDate(userNuboEntityLast.getPasswordAuthModifyDate())
                .recoveryPasswordUrl(userNuboEntityLast.getRecoveryPasswordUrl())
                .recoveryPasswordUrlModifyDate(userNuboEntityLast.getRecoveryPasswordUrlModifyDate())
                .lastModifyApplication(propertiesConfig.getApiName())
                .lastModifyIp(PropertiesContext.getClientIp())
                .lastModifyUser(PropertiesContext.getClientUser())
                .lastModifyDate(PropertiesContext.getClientOffsetDatetime())
                .build();

        if (Objects.equals(StatusEnum.INACTIVE_USER.getId(), userNuboEntity.getStatus().getId())) {
            userNuboEntity.setProfileSession(null);
            userNuboEntity.setParticipantSession(null);
            userNuboEntity.setProfileUserNuboList(new ArrayList<>());
            userNuboEntity.setParticipantUserNuboList(new ArrayList<>());
        }

        return participantSponsorService.validateExistingParticipantSponsor(userNuboRepository.save(userNuboEntity));
    }

    @Override
    public void deleteUserById(Long userId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            deleteUserByIdV1(userId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private void deleteUserByIdV1(Long userId) {
        log.info("Start method deleteUserByIdV1, userId -> {}", userId);

        UserNuboEntity userNuboEntityLast = getUserNuboEntityById(userId);

        if (Objects.equals(StatusEnum.DELETED_USER.getId(), userNuboEntityLast.getStatus().getId())) {
            throw new ServiceException(ErrorCode.USER_STATUS_DELETED, HttpStatus.BAD_REQUEST);
        }

        userNuboEntityLast.setStatus(validateStatus(StatusEnum.DELETED_USER.getId()));
        userNuboEntityLast.setLastModifyApplication(propertiesConfig.getApiName());
        userNuboEntityLast.setLastModifyIp(PropertiesContext.getClientIp());
        userNuboEntityLast.setLastModifyUser(PropertiesContext.getClientUser());
        userNuboEntityLast.setLastModifyDate(PropertiesContext.getClientOffsetDatetime());
        userNuboRepository.save(userNuboEntityLast);

        log.info("End method deleteUserByIdV1");
    }

    private void validateCreateUserNubo(UserNuboInDto userNuboInDto) {
        Optional<UserNuboEntity> userNuboEntityEmailLast = userNuboRepository.findByEmail(userNuboInDto.getEmail());
        if (userNuboEntityEmailLast.isPresent()) {
            throw new ServiceException(ErrorCode.USER_EMAIL_EXISTS, HttpStatus.BAD_REQUEST);
        }
    }

    private ProfileEntity validateProfile(Long profileId) {
        return profileRepository.findById(profileId)
                .orElseThrow(() -> new ServiceException(ErrorCode.PROFILE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private List<ProfileUserNuboEntity> validateProfiles(
            List<Long> profileIds, UserNuboEntity user, UserNuboUpdateInDto userToUpdate) {
        if (profileIds == null || profileIds.isEmpty()) {
            throw new ServiceException(
                    ErrorCode.PROFILE_REQUIRED_ERROR,
                    HttpStatus.BAD_REQUEST);
        }

        if (profileIds.size() != userToUpdate.getParticipantIds().size()) {
            throw new ServiceException(
                    ErrorCode.PARTICIPANT_PROFILE_COUNT_MISMATCH,
                    HttpStatus.BAD_REQUEST);
        }

        Set<Long> participantIdsOfUser = new HashSet<>();
        if (userToUpdate.getParticipantIds() != null) {
            participantIdsOfUser.addAll(userToUpdate.getParticipantIds());
        }

        Map<Long, ProfileUserNuboEntity> participantToProfile = new HashMap<>();

        Set<Long> updatedParticipants = new HashSet<>();
        for (Long profileId : profileIds) {
            ProfileEntity profile = profileRepository.findById(profileId)
                    .orElseThrow(() -> new ServiceException(ErrorCode.PROFILE_NOT_FOUND, HttpStatus.NOT_FOUND));

            if(profile.getStatus() == null || !StatusEnum.ACTIVE_PROFILE.getId().equals(profile.getStatus().getId())) {
                throw new ServiceException(ErrorCode.PROFILE_NOT_ACTIVE, HttpStatus.BAD_REQUEST);
            }

            if (profile.getParticipant() == null ||
                    !participantIdsOfUser.contains(profile.getParticipant().getId())) {
                throw new ServiceException(ErrorCode.PROFILE_NOT_BELONGS_TO_USER_PARTICIPANT, HttpStatus.BAD_REQUEST);
            }

            Long participantId = profile.getParticipant().getId();

            if (updatedParticipants.contains(participantId)) {
                throw new ServiceException(ErrorCode.MULTIPLE_PROFILES_FOR_PARTICIPANT_NOT_ALLOWED,
                        HttpStatus.BAD_REQUEST);
            }

            updatedParticipants.add(participantId);

            participantToProfile.put(participantId, ProfileUserNuboEntity.builder()
                    .userNubo(user)
                    .profile(profile)
                    .lastModifyApplication(propertiesConfig.getApiName())
                    .lastModifyIp(PropertiesContext.getClientIp())
                    .lastModifyUser(PropertiesContext.getClientUser())
                    .lastModifyDate(PropertiesContext.getClientDatetime())
                    .build());
        }

        return new ArrayList<>(participantToProfile.values());
    }

    private List<ProfileUserNuboEntity> validateProfilesInCreate(List<Long> profileIds, UserNuboEntity user) {
        if (profileIds == null || profileIds.isEmpty()) {
            throw new ServiceException(
                    ErrorCode.PROFILE_REQUIRED_ERROR,
                    HttpStatus.BAD_REQUEST);
        }

        Set<Long> participantIdsOfUser = user.getParticipantUserNuboList().stream()
                .map(ParticipantUserNuboEntity::getParticipant)
                .map(ParticipantEntity::getId)
                .collect(Collectors.toSet());

        Map<Long, ProfileUserNuboEntity> participantToProfile = new HashMap<>();

        for (Long profileId : profileIds) {
            ProfileEntity profile = profileRepository.findById(profileId)
                    .orElseThrow(() -> new ServiceException(
                            ErrorCode.PROFILE_NOT_FOUND,
                            HttpStatus.NOT_FOUND));

            if (profile.getStatus() == null || !StatusEnum.ACTIVE_PROFILE.getId().equals(profile.getStatus().getId())) {
                throw new ServiceException(
                        ErrorCode.PROFILE_NOT_ACTIVE,
                        HttpStatus.BAD_REQUEST);
            }

            if (profile.getParticipant() == null
                    || !participantIdsOfUser.contains(profile.getParticipant().getId())) {
                throw new ServiceException(
                        ErrorCode.PROFILE_NOT_BELONGS_TO_USER_PARTICIPANT,
                        HttpStatus.BAD_REQUEST);
            }

            Long participantId = profile.getParticipant().getId();

            if (participantToProfile.containsKey(participantId)) {
                throw new ServiceException(
                        ErrorCode.MULTIPLE_PROFILES_FOR_PARTICIPANT_NOT_ALLOWED,
                        HttpStatus.BAD_REQUEST);
            }

            participantToProfile.put(participantId, ProfileUserNuboEntity.builder()
                    .userNubo(user)
                    .profile(profile)
                    .lastModifyApplication(propertiesConfig.getApiName())
                    .lastModifyIp(PropertiesContext.getClientIp())
                    .lastModifyUser(PropertiesContext.getClientUser())
                    .lastModifyDate(PropertiesContext.getClientDatetime())
                    .build());
        }

        if (participantToProfile.size() != participantIdsOfUser.size()) {
            throw new ServiceException(
                    ErrorCode.NOT_ALL_PARTICIPANTS_HAVE_PROFILE,
                    HttpStatus.BAD_REQUEST);
        }

        return new ArrayList<>(participantToProfile.values());
    }

    private ParticipantEntity validateParticipant(Long participantId) {
        return participantRepository.findById(participantId)
                .orElseThrow(() -> new ServiceException(ErrorCode.PARTICIPANT_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private List<ParticipantUserNuboEntity> validateParticipants(List<Long> participantIds, UserNuboEntity user) {
        if (participantIds == null || participantIds.isEmpty()) {
            throw new ServiceException(
                    ErrorCode.PARTICIPANT_REQUIRED_ERROR,
                    HttpStatus.NOT_FOUND);
        }

        List<ParticipantEntity> participantList = participantIds.stream()
                .map(id -> participantRepository.findById(id)
                        .orElseThrow(() -> new ServiceException(ErrorCode.PARTICIPANT_NOT_FOUND, HttpStatus.NOT_FOUND)))
                .toList();

        Long groupIdReference = participantList.get(0).getEnterpriseGroup().getId();

        boolean allSameGroup = participantList.stream()
                .allMatch(p -> p.getEnterpriseGroup().getId().equals(groupIdReference));

        if (!allSameGroup) {
            throw new ServiceException(ErrorCode.PARTICIPANTS_NOT_IN_SAME_GROUP, HttpStatus.NOT_FOUND);
        }

        return participantList.stream()
                .map(participant -> ParticipantUserNuboEntity.builder()
                        .userNubo(user)
                        .participant(participant)
                        .lastModifyApplication(propertiesConfig.getApiName())
                        .lastModifyIp(PropertiesContext.getClientIp())
                        .lastModifyUser(PropertiesContext.getClientUser())
                        .lastModifyDate(PropertiesContext.getClientDatetime())
                        .build())
                .toList();
    }

    private CountryEntity validateCountry(Long countryId) {
        return countryRepository.findById(countryId)
                .orElseThrow(() -> new ServiceException(ErrorCode.COUNTRY_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private IdentificationTypeEntity validateIdentificationType(Long identificationTypeId) {
        return identificationTypeRepository.findById(identificationTypeId)
                .orElseThrow(() -> new ServiceException(ErrorCode.IDENTIFICATION_TYPE_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private StatusEntity validateStatus(Long statusId) {
        return statusRepository.findById(statusId)
                .orElseThrow(() -> new ServiceException(ErrorCode.STATUS_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private Set<Long> searchProfileByName(String profileName, Integer excludeParticipantId, String participantName) {
        if (excludeParticipantId != null) {
            List<ProfileEntity> profileEntityList = profileRepository
                    .findByNameProfileContainingAndParticipantId(profileName, excludeParticipantId);
            return profileEntityList.stream()
                    .map(ProfileEntity::getId)
                    .collect(Collectors.toSet());
        } else {
            List<ProfileEntity> profileEntityList = profileRepository
                    .findByNameProfileContainingAndParticipantName(profileName, participantName);
            return profileEntityList.stream()
                    .map(ProfileEntity::getId)
                    .collect(Collectors.toSet());
        }
    }

    @Override
    public List<CountryOutDto> findAllCountries(UserParams userParams) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllCountriesV1(userParams);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<CountryOutDto> findAllCountriesV1(UserParams userParams) {
        log.info("Start method findAllCountriesV1, parameters -> {}", userParams);

        List<String> countryCodeList = List.of("CO", "PE", "CL");

        List<CountryOutDto> allCountries = countryRepository.findCountriesByCode(
                countryCodeList).stream()
                .map(MapperUtil::countryEntityToCountryOutDto)
                .distinct()
                .toList();

        log.info("End method findAllCountriesV1 with size: {}", allCountries.size());
        return allCountries;
    }

    @Override
    public List<EmailOutDto> findAllEmails(UserParams userParams) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllEmailsV1(userParams);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<EmailOutDto> findAllEmailsV1(UserParams userParams) {
        log.info("Start method findAllEmailsV1 with parameters -> {}", userParams);

        Specification<UserNuboEntity> specification = MapperUserNuboSearch.buildSpecification(userParams);

        List<EmailOutDto> emails = userNuboRepository.findAll(specification).stream()
                .map(UserNuboEntity::getEmail)
                .distinct()
                .map(EmailOutDto::new)
                .toList();

        log.info("End method findAllEmailsV1 with size: {}", emails.size());
        return emails;
    }

    @Override
    public List<StatusOutDto> findAllStatus() {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllStatusV1();
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<StatusOutDto> findAllStatusV1() {
        log.info("Start method findAllStatusV1");

        Specification<StatusEntity> categoriaUsuariosSpec = (root, query, cb) -> cb
                .and(cb.equal(root.get("category"), "USUARIOS"), cb.notEqual(root.get("description"), "ELIMINADO"));

        List<StatusOutDto> allStatus = statusRepository.findAll(categoriaUsuariosSpec).stream()
                .map(MapperUtil::statusEntityToStatusOutDto).toList();

        log.info("End method findAllStatusV1 with size: {}", allStatus.size());
        return allStatus;
    }

    @Override
    public List<UsernameOutDto> findAllUsernames(UserParams userParams) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllUsernamesV1(userParams);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<UsernameOutDto> findAllUsernamesV1(UserParams userParams) {
        log.info("Start method findAllUsernamesV1 with parameters -> {}", userParams);

        Specification<UserNuboEntity> specification = MapperUserNuboSearch.buildSpecification(userParams);

        List<UsernameOutDto> allUsernames = userNuboRepository.findAll(specification).stream()
                .map(u -> new UsernameOutDto(u.getId(), u.getFirstName() + " " + u.getLastName(), u.getFirstName(),
                        u.getLastName()))
                .distinct()
                .toList();

        log.info("End method findAllUsernamesV1 with size: {}", allUsernames.size());
        return allUsernames;
    }

    @Override
    public List<ProfileOutDto> findAllProfiles(UserParams userParams) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllProfilesV1(userParams);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<ProfileOutDto> findAllProfilesV1(UserParams userParams) {
        log.info("Start method findAllProfilesV1, parameters -> {}", userParams);

        Specification<UserNuboEntity> specification = MapperUserNuboSearch.buildSpecification(userParams);

        List<ProfileOutDto> allProfiles = userNuboRepository.findAll(specification).stream()
                .map(userNuboEntity -> MapperUtil.userNuboEntityToUserNuboOutDto(userNuboEntity))
                .flatMap(userDto -> userDto.getProfiles().stream())
                .distinct()
                .toList();

        log.info("End method findAllProfilesV1 with size: {}", allProfiles.size());
        return allProfiles;
    }

    @Override
    public List<ParticipantOutDto> findAllParticipants(UserParams userParams) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllParticipantsV1(userParams);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<ParticipantOutDto> findAllParticipantsV1(UserParams userParams) {
        log.info("Start method findAllParticipantsV1, parameters -> {}", userParams);

        Specification<UserNuboEntity> specification = MapperUserNuboSearch.buildSpecification(userParams);

        List<ParticipantOutDto> allParticipants = userNuboRepository.findAll(specification).stream()
                .map(userNuboEntity -> MapperUtil.userNuboEntityToUserNuboOutDto(userNuboEntity))
                .flatMap(userDto -> userDto.getParticipants().stream())
                .distinct()
                .toList();

        log.info("End method findAllParticipantsV1 with size: {}", allParticipants.size());
        return allParticipants;
    }

    @Override
    public DetailUserOutDto findDetailByUserId(Long userId, Long participantId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findDetailByUserIdV1(userId, participantId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private DetailUserOutDto findDetailByUserIdV1(Long userId, Long participantId) {
        log.info("Start method findDetailByUserIdV1");

        DetailUserOutDto detailByUser = userNuboRepository.findById(userId)
                .map(MapperUtil::userNuboEntityToDetailUserOutDto)
                .orElse(DetailUserOutDto.builder().build());

        log.info("End method findDetailByUserIdV1 : " + detailByUser);
        return detailByUser;
    }

    @Override
    public List<ParticipantOutDto> validateUserInParticipant(String email, List<Long> participantIds) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return validateUserInParticipantsV1(email, participantIds);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<ParticipantOutDto> validateUserInParticipantsV1(String email, List<Long> participantIds) {
        log.info("Start method validateUserInParticipantsV1 with email: {} and participantIds: {}", email,
                participantIds);
        if (participantIds == null || participantIds.isEmpty()) {
            throw new ServiceException(
                    ErrorCode.PARTICIPANT_REQUIRED_ERROR,
                    HttpStatus.NOT_FOUND);
        }

        Long referenceParticipantId = participantIds.get(0);

        EnterpriseGroupEntity enterpriseGroup = participantRepository
                .findEnterpriseGroupByParticipantId(referenceParticipantId)
                .orElseThrow(() -> new ServiceException(
                        ErrorCode.ENTERPRISE_GROUP_NOT_FOUND,
                        HttpStatus.NOT_FOUND));

        boolean existsInOtherGroup = userNuboRepository.existsByEmailInOtherEnterpriseGroup(email,
                enterpriseGroup.getId());
        if (existsInOtherGroup) {
            throw new ServiceException(
                    ErrorCode.USER_ALREADY_EXISTS_IN_ANOTHER_GROUP,
                    HttpStatus.NOT_FOUND);
        }

        List<ParticipantOutDto> participantsWhereExists = participantIds.stream()
                .map(pid -> participantRepository.findById(pid)
                        .orElseThrow(() -> new ServiceException(ErrorCode.PARTICIPANT_NOT_FOUND, HttpStatus.NOT_FOUND)))
                .filter(participant -> userNuboRepository.existsByEmailAndParticipantId(email, participant.getId()))
                .map(MapperUtil::participantEntityToParticipantOutDto)
                .toList();

        log.info("End method validateUserInParticipantsV1");
        return participantsWhereExists;
    }

    @Override
    @Transactional(readOnly = true)
    public PageResponseOutDto<UserNuboOutDto> findAllUsersDynamic(int page, int size, String sort, String order,
            boolean all, String username, String firstname,
            String lastname,
            Integer identificationTypeId, String identification, String email,
            String participant, String profile, Integer status, Integer countryId,
            Integer accessProfileId, Integer enterpriseGroup, Integer excludeParticipantId,
            String fieldName, String fieldValue, String operation) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllUsersDynamicV1(page, size, sort, order, all, username, firstname, lastname,
                    identificationTypeId, identification,
                    email,
                    participant, profile, status, countryId, accessProfileId, enterpriseGroup, excludeParticipantId,
                    fieldName, fieldValue, operation);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private PageResponseOutDto<UserNuboOutDto> findAllUsersDynamicV1(int page, int size, String sort, String order,
            boolean all, String username,
            String firstname, String lastname,
            Integer identificationTypeId, String identification, String email,
            String participant, String profile, Integer status, Integer countryId,
            Integer accessProfileId, Integer enterpriseGroup, Integer excludeParticipantId,
            String fieldName, String fieldValue, String operation) {
        log.info("Start method findAllUsersDynamicV1");
        Specification<UserNuboEntity> specification = MapperUserNuboDynamicSearch.buildCombinedSpecification(username,
                firstname, lastname, identificationTypeId, identification, email,
                participant, profile, status, countryId, enterpriseGroup, excludeParticipantId, fieldName, fieldValue,
                operation);

        Sort.Direction direction = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
        Sort sortObj = Sort.by(direction, sort != null ? sort : "id");

        if (all) {
            List<UserNuboEntity> allUsers = userNuboRepository.findAll(specification, sortObj);

            allUsers.forEach(user -> {
                Hibernate.initialize(user.getCountry());
                Hibernate.initialize(user.getParticipantSession());
                Hibernate.initialize(user.getParticipantSession().getEnterpriseGroup());
                Hibernate.initialize(user.getProfileSession());
                Hibernate.initialize(user.getStatus());
                Hibernate.initialize(user.getIdentificationType());
            });

            List<UserNuboOutDto> userOutDtoList = allUsers.stream()
                    .map(participantSponsorService::validateExistingParticipantSponsor)
                    .toList();

            log.info("End method findAllUsersDynamicV1, found {} users", userOutDtoList.size());
            return new PageResponseOutDto<>(userOutDtoList, 0, userOutDtoList.size(), (long) userOutDtoList.size(),
                    userOutDtoList.size());
        } else {
            Pageable pageable = PageRequest.of(page, size, sortObj);
            Page<UserNuboEntity> usersPage = userNuboRepository.findAll(specification, pageable);

            List<UserNuboEntity> userEntities = usersPage.getContent();
            userEntities.forEach(user -> {
                Hibernate.initialize(user.getCountry());
                Hibernate.initialize(user.getParticipantSession());
                Hibernate.initialize(user.getParticipantSession().getEnterpriseGroup());
                Hibernate.initialize(user.getProfileSession());
                Hibernate.initialize(user.getStatus());
                Hibernate.initialize(user.getIdentificationType());
            });

            List<UserNuboOutDto> userOutDtoList = userEntities.stream()
                    .map(participantSponsorService::validateExistingParticipantSponsor)
                    .toList();

            log.info("End method findAllUsersDynamicV1, found {} users", userOutDtoList.size());
            return MapperPageUtil.pageToPageResponseOutDto(userOutDtoList, usersPage);
        }
    }

    private UserNuboEntity getParticipantStatusActive(UserNuboEntity userNuboEntity) {
        List<ParticipantUserNuboEntity> participantUserNuboEntityList = participantUserNuboRepository
                .findByUserNubo(userNuboEntity, StatusEnum.ACTIVE_PARTICIPANT.getId());
        userNuboEntity.setParticipantUserNuboList(participantUserNuboEntityList);
        return userNuboEntity;
    }

    @Override
    public List<ContactDetailOutDto> findContactDetailsByParticipant(Long participantId, String participantCode,
            List<String> screenActionsIds,
            Long userStatusId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findContactDetailsByParticipantV1(participantId, participantCode, screenActionsIds, userStatusId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<ContactDetailOutDto> findContactDetailsByParticipantV1(Long participantId, String participantCode,
            List<String> screenActionCodes, Long userStatusId) {
        log.info(
                "Start method findContactDetailsByParticipantV1 with params participantId={}, screenActionsCodes={} and userStatusId={}",
                participantId, screenActionCodes, userStatusId);
        List<String> codes = Optional.ofNullable(screenActionCodes)
                .filter(list -> !list.isEmpty())
                .orElse(null);
        List<UserNuboEntity> userNuboEntities = userNuboRepository.findContactDetailsByParticipant(participantId,
                participantCode, codes,
                userStatusId);
        List<ContactDetailOutDto> result = userNuboEntities.stream()
                .map(MapperUtil::userNuboEntityToContactDetailOutDto)
                .toList();
        log.info("Contact details found: {} ", result.size());
        return result;
    }

    @Override
    public InformationChangPwdOutDto findInformationChangePassword() {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findInformationChangePasswordV1();
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private InformationChangPwdOutDto findInformationChangePasswordV1() {
        log.info("Start method findInformationChangePasswordV1");

        InformationChangPwdOutDto response = InformationChangPwdOutDto.builder()
                .email(propertiesConfig.getPasswordChangeEmail())
                .phoneNumber(propertiesConfig.getPasswordChangePhone())
                .build();

        log.info("End method findInformationChangePasswordV1, response -> {}", response);
        return response;
    }

    @Override
    public List<StatusOutDto> findAllPossibleStatusChangeByUser(Long userId) {
        if (Objects.requireNonNull(VersionApiEnum.fromValue(PropertiesContext.getVersion())) == VersionApiEnum.V1) {
            return findAllPossibleStatusChangeByUserV1(userId);
        } else {
            throw new ServiceException(ErrorCode.VERSION_API_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
    }

    private List<StatusOutDto> findAllPossibleStatusChangeByUserV1(Long userId) {
        log.info("Start method findAllPossibleStatusChangeByUserV1 with userId={}", userId);

        UserNuboEntity userNuboEntity = getUserNuboEntityById(userId);
        Long currentStatusId = userNuboEntity.getStatus().getId();
        
        List<Long> possibleStatusIds = getPossibleStatusTransitions(currentStatusId);
        
        List<StatusEntity> possibleStatusChanges = statusRepository.findByCategoryIgnoreCaseOrderById(StatusEnum.ACTIVE_USER.getCategory()).stream()
                .filter(status -> possibleStatusIds.contains(status.getId()))
                .toList();

        List<StatusOutDto> response = possibleStatusChanges.stream()
                .map(MapperUtil::statusEntityToStatusOutDto)
                .toList();

        log.info("End method findAllPossibleStatusChangeByUserV1, found {} possible status changes for statusId={}", response.size(), currentStatusId);
        return response;
    }

    private List<Long> getPossibleStatusTransitions(Long currentStatusId) {
        Map<Long, List<Long>> statusTransitions = Map.ofEntries(
                Map.entry(StatusEnum.ACTIVE_USER.getId(), List.of(StatusEnum.INACTIVE_USER.getId(), StatusEnum.SUSPENDED_USER.getId())),
                Map.entry(StatusEnum.INACTIVE_USER.getId(), List.of()),
                Map.entry(StatusEnum.BLOCKED_USER.getId(), List.of(StatusEnum.ACTIVE_USER.getId())),
                Map.entry(StatusEnum.SUSPENDED_USER.getId(), List.of(StatusEnum.ACTIVE_USER.getId()))
        );
        
        return statusTransitions.getOrDefault(currentStatusId, List.of());
    }

    private UserNuboOutDto filterProfilesByParticipantIfRequired(
            UserNuboOutDto userNuboOutDto,
            Long participantId) {

        if (participantId == null
                || ObjectUtils.isEmpty(userNuboOutDto.getProfiles())) {
            return userNuboOutDto;
        }

        List<ProfileOutDto> filteredProfiles = userNuboOutDto.getProfiles().stream()
                .filter(profileOutDto -> profileOutDto.getParticipant() != null
                        && Objects.equals(
                                profileOutDto.getParticipant().getId(),
                                participantId))
                .toList();

        userNuboOutDto.setProfiles(filteredProfiles);

        return userNuboOutDto;
    }

    private Long resolveParticipantId(String participantName) {
        if (ObjectUtils.isEmpty(participantName)) {
            return null;
        }

        return participantRepository.findByNameIgnoreCase(participantName)
                .map(ParticipantEntity::getId)
                .orElse(null);
    }

    private UserNuboOutDto filterProfilesInResponseIfRequired(
            UserNuboOutDto userNuboOutDto,
            UserParams userParams) {

        if (ObjectUtils.isEmpty(userParams.profile())
                || ObjectUtils.isEmpty(userNuboOutDto.getProfiles())) {
            return userNuboOutDto;
        }

        String profileFilter = userParams.profile().toLowerCase();

        List<ProfileOutDto> filteredProfiles = userNuboOutDto.getProfiles().stream()
                .filter(profileOutDto -> !ObjectUtils.isEmpty(profileOutDto.getName())
                        && profileOutDto.getName()
                                .toLowerCase()
                                .contains(profileFilter))
                .toList();

        userNuboOutDto.setProfiles(filteredProfiles);

        return userNuboOutDto;
    }

    private UserNuboEntity getUserNuboEntityByEmail(String email) {
        return userNuboRepository.findByEmail(email)
                .orElseThrow(() -> new ServiceException(ErrorCode.USER_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private UserNuboEntity getUserNuboEntityByUsername(String username) {
        return userNuboRepository.findByUserName(username)
                .orElseThrow(() -> new ServiceException(ErrorCode.USER_NOT_FOUND, HttpStatus.NOT_FOUND));
    }

    private UserNuboEntity getUserNuboEntityById(Long userId) {
        return userNuboRepository.findById(userId)
                .orElseThrow(() -> new ServiceException(ErrorCode.USER_NOT_FOUND, HttpStatus.NOT_FOUND));
    }
}

```

## src/main/java/com/nubo/user/management/api/web/controller/KeycloakRestController.java

```java
package com.nubo.user.management.api.web.controller;

import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nubo.user.management.api.models.dto.request.KeycloakCredentialInDto;
import com.nubo.user.management.api.models.dto.request.KeycloakUserInDto;
import com.nubo.user.management.api.service.KeycloakService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@Tag(name = "Keycloak")
@RequestMapping("/{version}/keycloak")
@RestController
@RequiredArgsConstructor
public class KeycloakRestController {

    private final KeycloakService keycloakService;

    @Operation(summary = "Get access token keycloak", description = "Get access token keycloak")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response")
    })
    @PostMapping("/token")
    public ResponseEntity<Map<String, Object>> getAccessToken(
            @RequestHeader(value = "client_password", required = false) String password,
            @RequestHeader(value = "grant_type", required = false) String grantType,
            @RequestHeader(value = "refresh_token", required = false) String refreshToken,
            @RequestHeader(value = "code", required = false) String code,
            @RequestHeader(value = "code_verifier", required = false) String codeVerifier) {
        return ResponseEntity.ok(keycloakService.getAccessToken(password, grantType, refreshToken, code, codeVerifier));
    }

    @Operation(summary = "Get token introspect keycloak", description = "Get token introspect keycloak")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response")
    })
    @PostMapping("/token/introspect")
    public ResponseEntity<Map<String, Object>> getTokenIntrospect() {
        return ResponseEntity.ok(keycloakService.getTokenIntrospect());
    }

    @Operation(summary = "Get users keycloak", description = "Get users keycloak")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response")
    })
    @GetMapping("/users")
    public ResponseEntity<List<Map<String, Object>>> getUsers() {
        return ResponseEntity.ok(keycloakService.getUsers());
    }

    @Operation(summary = "Get user keycloak", description = "Get user keycloak")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response")
    })
    @GetMapping("/user")
    public ResponseEntity<List<Map<String, Object>>> getUser(@RequestParam String userName) {
        return ResponseEntity.ok(keycloakService.getUser(userName));
    }

    @Operation(summary = "Create user keycloak", description = "Create user keycloak")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "Successfully Response")
    })
    @PostMapping("/users")
    public ResponseEntity<Void> createUser(@Valid @RequestBody KeycloakUserInDto keycloakUserInDto) {
        keycloakService.createUser(keycloakUserInDto);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @Operation(summary = "Reset password keycloak", description = "Reset password keycloak")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204", description = "Successfully Response")
    })
    @PutMapping("/users/{idUser}/reset-password")
    public ResponseEntity<Void> resetPasswordUser(@PathVariable String idUser,
            @Valid @RequestBody KeycloakCredentialInDto keycloakCredentialInDto) {
        keycloakService.resetPasswordUser(idUser, keycloakCredentialInDto);
        return ResponseEntity.noContent().build();
    }

    @Operation(summary = "Reset temporary password keycloak", description = "Reset temporary password keycloak")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204", description = "Successfully Response")
    })
    @PutMapping("/temporary/users/{idUser}/reset-password")
    public ResponseEntity<Void> resetPasswordTemporaryUser(@PathVariable String idUser,
            @Valid @RequestBody KeycloakCredentialInDto keycloakCredentialInDto) {
        keycloakService.resetPasswordTemporaryUser(idUser, keycloakCredentialInDto);
        return ResponseEntity.noContent().build();
    }

    @Operation(summary = "Reset auth password keycloak", description = "Reset auth password keycloak")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204", description = "Successfully Response")
    })
    @PutMapping("/auth/users/{idUser}/reset-password")
    public ResponseEntity<Void> resetPasswordAuthUser(@PathVariable String idUser,
            @Valid @RequestBody KeycloakCredentialInDto keycloakCredentialInDto) {
        keycloakService.resetPasswordAuthUser(idUser, keycloakCredentialInDto);
        return ResponseEntity.noContent().build();
    }

    @Operation(summary = "Delete user keycloak", description = "Delete user keycloak")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204", description = "Successfully Response")
    })
    @DeleteMapping("/users/{idUser}")
    public ResponseEntity<Void> deleteUser(@PathVariable String idUser) {
        keycloakService.deleteUser(idUser);
        return ResponseEntity.noContent().build();
    }

}

```

## src/main/java/com/nubo/user/management/api/web/controller/LogSessionTrackingController.java

```java
package com.nubo.user.management.api.web.controller;

import com.nubo.user.management.api.models.dto.request.LogSessionTrackingInDto;
import com.nubo.user.management.api.models.dto.response.LogSessionTrackingOutDto;
import com.nubo.user.management.api.service.LogSessionTrackingService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "Log Session Tracking")
@RequestMapping("/{version}/log-session-tracking")
@RestController
@RequiredArgsConstructor
public class LogSessionTrackingController {

    private final LogSessionTrackingService logSessionTrackingService;

    @Operation(summary = "Create new log", description = "Create new log")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = LogSessionTrackingOutDto.class)))})
    @PostMapping
    public ResponseEntity<LogSessionTrackingOutDto> createLogSessionTracking(@Valid @RequestBody LogSessionTrackingInDto logSessionTrackingInDto) {
        LogSessionTrackingOutDto logSessionTrackingOutDto = logSessionTrackingService.createLogSessionTracking(logSessionTrackingInDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(logSessionTrackingOutDto);
    }

}

```

## src/main/java/com/nubo/user/management/api/web/controller/OtpRestController.java

```java
package com.nubo.user.management.api.web.controller;

import com.nubo.user.management.api.models.dto.request.OtpEmailValidateInDto;
import com.nubo.user.management.api.models.dto.request.OtpInDto;
import com.nubo.user.management.api.models.dto.request.SetOtpModeInDto;
import com.nubo.user.management.api.models.dto.response.OptOutDto;
import com.nubo.user.management.api.models.dto.response.OtpEmailOutDto;
import com.nubo.user.management.api.models.dto.response.SetOtpModeOutDto;
import com.nubo.user.management.api.service.OtpService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "Otp")
@RequestMapping("/{version}/otp")
@RestController
@RequiredArgsConstructor
public class OtpRestController {

    private final OtpService otpService;

    @Operation(summary = "Validate OTP by username", description = "Validate OTP by username")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response")})
    @PostMapping("/validate")
    public void validateOtpByUsername(@RequestParam String userName,
                                      @Valid @RequestBody OtpInDto otpInDto) {
        otpService.validateOtpByUsername(userName, otpInDto);
    }

    @Operation(summary = "Create OTP by username", description = "Create OTP by username")
    @ApiResponses(value = {@ApiResponse(responseCode = "201", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = OptOutDto.class)))})
    @PostMapping
    public ResponseEntity<OptOutDto> createOtpByUsername(@RequestParam String userName) {
        return ResponseEntity.status(HttpStatus.CREATED).body(otpService.createOtpByUsername(userName));
    }

    @Operation(summary = "Delete OTP by username", description = "Delete OTP by username")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response")})
    @DeleteMapping
    public void deleteOtpByUsername(@RequestParam String userName) {
        otpService.deleteOtpByUsername(userName);
    }

    @Operation(summary = "Request OTP by email", description = "Generate an OTP code and send it to the user's registered email")
    @ApiResponses(value = {@ApiResponse(responseCode = "201", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = OtpEmailOutDto.class)))})
    @PostMapping("/email")
    public ResponseEntity<OtpEmailOutDto> requestOtpByEmail(@RequestParam String userName) {
        return ResponseEntity.status(HttpStatus.CREATED).body(otpService.requestOtpByEmail(userName));
    }

    @Operation(summary = "Validate OTP by email", description = "Validate the OTP code sent to the user's email")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response")})
    @PostMapping("/email/validate")
    public ResponseEntity<OtpEmailOutDto> validateOtpByEmail(@RequestParam String userName,
                                   @Valid @RequestBody OtpEmailValidateInDto otpEmailValidateInDto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(OtpEmailOutDto.builder().message(otpService.validateOtpByEmail(userName, otpEmailValidateInDto)).build());
    }

    @Operation(summary = "Set OTP mode by email", description = "Enable or disable the email OTP mode for a user")
    @ApiResponses(value = {@ApiResponse(responseCode = "200", description = "Successfully Response",
            content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                    schema = @Schema(implementation = SetOtpModeOutDto.class)))})
    @PostMapping("/set-otp-mode")
    public ResponseEntity<SetOtpModeOutDto> setOtpMode(@Valid @RequestBody SetOtpModeInDto setOtpModeInDto) {
        return ResponseEntity.ok(otpService.setOtpMode(setOtpModeInDto));
    }

}

```

## src/main/java/com/nubo/user/management/api/web/controller/UserNuboRestController.java

```java
package com.nubo.user.management.api.web.controller;

import com.nubo.user.management.api.models.domain.UserParams;
import com.nubo.user.management.api.models.dto.request.UserNuboInDto;
import com.nubo.user.management.api.models.dto.request.UserNuboUpdateInDto;
import com.nubo.user.management.api.models.dto.request.UserRecoveryPasswordInDto;
import com.nubo.user.management.api.models.dto.response.*;
import com.nubo.user.management.api.service.UserAuthService;
import com.nubo.user.management.api.service.UserNuboService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Tag(name = "User")
@RequestMapping("/{version}/user")
@RestController
@RequiredArgsConstructor
public class UserNuboRestController {

    private final UserNuboService userNuboService;
    private final UserAuthService userAuthService;

    @Operation(summary = "Find all users", description = "Find all users")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = UserNuboOutDto[].class))) })
    @GetMapping
    public ResponseEntity<PageResponseOutDto<UserNuboOutDto>> findAllUsers(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "id") String sort,
            @RequestParam(defaultValue = "asc") String order,
            @RequestParam(defaultValue = "false") boolean all,
            @RequestParam(required = false) String username,
            @RequestParam(required = false) String firstname,
            @RequestParam(required = false) String lastname,
            @RequestParam(required = false) Integer identificationTypeId,
            @RequestParam(required = false) String identification,
            @RequestParam(required = false) String email,
            @RequestParam(required = false) String participant,
            @RequestParam(required = false) String profile,
            @RequestParam(required = false) Integer status,
            @RequestParam(required = false) Integer countryId,
            @RequestParam(required = false) Integer accessProfileId,
            @RequestParam(required = false) Integer enterpriseGroup,
            @RequestParam(required = false) Integer excludeParticipantId,
            @RequestParam(required = false) Boolean download) {
        UserParams userParams = UserParams.of(page, size, sort, order, all, username, firstname, lastname,
                identificationTypeId, identification, email, participant, profile, status, countryId, accessProfileId,
                enterpriseGroup, excludeParticipantId, download);
        return ResponseEntity.ok(userNuboService.findAllUsers(userParams));
    }

    @Operation(summary = "Find user", description = "Find user")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = UserNuboOutDto.class))) })
    @GetMapping("/{userId}")
    public ResponseEntity<UserNuboOutDto> findUserById(@PathVariable Long userId) {
        return ResponseEntity.ok(userNuboService.findUserById(userId));
    }

    @Operation(summary = "Find user by username", description = "Find user by username")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = UserNuboOutDto.class))) })
    @GetMapping("/find-user")
    public ResponseEntity<UserNuboOutDto> findUserByUsername(@RequestParam String userName) {
        return ResponseEntity.ok(userNuboService.findUserByUsername(userName));
    }

    @Operation(summary = "Find user by email", description = "Find user by email")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = UserNuboOutDto.class))) })
    @GetMapping("/email/{email}")
    public ResponseEntity<UserNuboOutDto> findUserByEmail(@PathVariable String email) {
        return ResponseEntity.ok(userNuboService.findUserByEmail(email));
    }

    @Operation(summary = "Find user type by email", description = "Find user type by email")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = UserNuboUserTypeOutDto.class))) })
    @GetMapping("/user-type/email/{email}")
    public ResponseEntity<UserNuboUserTypeOutDto> findUserTypeByEmail(@PathVariable String email) {
        return ResponseEntity.ok(userNuboService.findUserTypeByEmail(email));
    }

    @Operation(summary = "Validate user by identificationTypeId and identification and participantId", description = "Validate user by identificationTypeId and identification and participantId")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response") })
    @GetMapping("/validate/identification-type/{identificationTypeId}/identification/{identification}/participant/{participantId}")
    public void validateUserByIdentificationTypeIdAndIdentificationAndParticipantId(
            @PathVariable Long identificationTypeId,
            @PathVariable String identification,
            @PathVariable Long participantId) {
        userNuboService.validateUserByIdentificationTypeIdAndIdentificationAndParticipantId(identificationTypeId,
                identification, participantId);
    }

    @Operation(summary = "Validate user by email", description = "Validate user by email")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = UserNuboOutDto.class))) })
    @GetMapping("/validate-user/email/{email}")
    public ResponseEntity<UserNuboOutDto> validateUserByEmail(@PathVariable String email) {
        return ResponseEntity.ok(userNuboService.validateUserByEmail(email));
    }

    @Operation(summary = "Create user", description = "Create user")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = UserNuboOutDto.class))) })
    @PostMapping
    public ResponseEntity<UserNuboOutDto> createUser(@Valid @RequestBody UserNuboInDto userNuboInDto) {
        UserNuboOutDto userNuboOutDto = userNuboService.createUser(userNuboInDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(userNuboOutDto);
    }

    @Operation(summary = "Update user by id", description = "Update user by id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = UserNuboOutDto.class))) })
    @PatchMapping("/{userId}")
    public ResponseEntity<UserNuboOutDto> updateUserById(@PathVariable Long userId,
            @Valid @RequestBody UserNuboUpdateInDto userNuboUpdateInDto) {
        UserNuboOutDto userNuboOutDto = userNuboService.updateUserById(userId, userNuboUpdateInDto);
        return ResponseEntity.ok(userNuboOutDto);
    }

    @Operation(summary = "Update user by username", description = "Update user by username")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = UserNuboOutDto.class))) })
    @PatchMapping
    public ResponseEntity<UserNuboOutDto> updateUserByUsername(@RequestParam String userName,
            @Valid @RequestBody UserNuboUpdateInDto userNuboUpdateInDto) {
        UserNuboOutDto userNuboOutDto = userNuboService.updateUserByUsername(userName, userNuboUpdateInDto);
        return ResponseEntity.ok(userNuboOutDto);
    }

    @Operation(summary = "Delete user by id", description = "Delete profile by id")
    @ApiResponses(value = { @ApiResponse(responseCode = "200", description = "Successfully Response") })
    @DeleteMapping("/{userId}")
    public void deleteUserById(@PathVariable Long userId) {
        userNuboService.deleteUserById(userId);
    }

    @Operation(summary = "Generate password by username", description = "Generate password by username")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = UserNuboOutDto.class))) })
    @GetMapping("/generate-password")
    public ResponseEntity<UserNuboOutDto> generatePasswordByUserName(@RequestParam String userName) {
        return ResponseEntity.ok(userAuthService.generatePasswordByUserName(userName));
    }

    @Operation(summary = "Increase failed attempts by username", description = "Increase failed attempts by username")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = UserNuboOutDto.class))) })
    @PostMapping("/increase-failed-attempts")
    public ResponseEntity<UserNuboOutDto> increaseFailedAttemptsLoginByUsername(@RequestParam String userName) {
        return ResponseEntity.ok(userAuthService.increaseFailedAttemptsLoginByUsername(userName));
    }

    @Operation(summary = "Reset failed attempts and blocked by username", description = "Reset failed attempts and blocked by username")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = UserNuboOutDto.class))) })
    @PostMapping("/reset-failed-attempts")
    public ResponseEntity<UserNuboOutDto> resetFailedAttemptsAndIsBlockedByUsername(@RequestParam String userName) {
        UserNuboOutDto userNuboOutDto = userAuthService.resetFailedAttemptsAndIsBlockedByUsername(userName);
        return ResponseEntity.ok(userNuboOutDto);
    }

    @Operation(summary = "Reset blocked by username", description = "Reset blocked by username")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = UserNuboOutDto.class))) })
    @PostMapping("/reset-blocked")
    public ResponseEntity<UserNuboOutDto> resetBlockedByUsername(@RequestParam String userName) {
        UserNuboOutDto userNuboOutDto = userAuthService.resetBlockedByUsername(userName);
        return ResponseEntity.ok(userNuboOutDto);
    }

    @Operation(summary = "Login validate user", description = "Login validate user")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = UserLoginOutDto.class))) })
    @PostMapping("/login/validate")
    public ResponseEntity<UserLoginOutDto> loginValidateUser(@RequestParam String userName) {
        return ResponseEntity.ok(userAuthService.loginValidateUser(userName));
    }

    @Operation(summary = "User logout", description = "User logout")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response") })
    @PostMapping("/logout")
    public void logoutUser(@RequestParam String userName) {
        userAuthService.logoutUser(userName);
    }

    @Operation(summary = "Validate password temporary expiration", description = "Validate password temporary expiration")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = UserPasswordTemporaryOutDto.class))) })
    @PostMapping("/validate/password-temporary-expiration")
    public ResponseEntity<UserPasswordTemporaryOutDto> validatePasswordTemporaryExpirationUser(
            @RequestParam String userName) {
        return ResponseEntity.ok(userAuthService.validatePasswordTemporaryExpirationUser(userName));
    }

    @Operation(summary = "Validate password auth expiration", description = "Validate password auth expiration")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = UserPasswordAuthOutDto.class))) })
    @PostMapping("/validate/password-auth-expiration")
    public ResponseEntity<UserPasswordAuthOutDto> validatePasswordAuthExpirationUser(@RequestParam String userName) {
        return ResponseEntity.ok(userAuthService.validatePasswordAuthExpirationUser(userName));
    }

    @Operation(summary = "Validate url recovery password ", description = "Validate url recovery password ")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = UserRecoveryPasswordOutDto.class))) })
    @PostMapping("/validate/recovery-password-url")
    public ResponseEntity<UserRecoveryPasswordOutDto> validateRecoveryPasswordUrl(@RequestParam String userName,
            @Valid @RequestBody UserRecoveryPasswordInDto userRecoveryPasswordInDto) {
        return ResponseEntity.ok(userAuthService.validateRecoveryPasswordUrl(userName, userRecoveryPasswordInDto));
    }

    @Operation(summary = "Find all countries", description = "Find all countries")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = CountryOutDto[].class))) })
    @GetMapping("/countries")
    public ResponseEntity<List<CountryOutDto>> findAllCountries(
            @RequestParam(required = false) String email,
            @RequestParam(required = false) Integer status,
            @RequestParam(required = false) Integer countryId,
            @RequestParam(required = false) String participant,
            @RequestParam(required = false) String username,
            @RequestParam(required = false) String profile,
            @RequestParam(required = false) Integer excludeParticipantId) {
        UserParams userParams = UserParams.of(email, status, countryId, participant, username, profile,
                excludeParticipantId);
        return ResponseEntity.ok(userNuboService.findAllCountries(userParams));
    }

    @Operation(summary = "Find all emails", description = "Find all emails")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = EmailOutDto[].class))) })
    @GetMapping("/emails")
    public ResponseEntity<List<EmailOutDto>> findAllEmails(
            @RequestParam(required = false) String email,
            @RequestParam(required = false) Integer status,
            @RequestParam(required = false) Integer countryId,
            @RequestParam(required = false) String participant,
            @RequestParam(required = false) String username,
            @RequestParam(required = false) String profile,
            @RequestParam(required = false) Integer excludeParticipantId) {
        UserParams userParams = UserParams.of(email, status, countryId, participant, username, profile,
                excludeParticipantId);
        return ResponseEntity.ok(userNuboService.findAllEmails(userParams));
    }

    @Operation(summary = "Find all status", description = "Find all status")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = StatusOutDto[].class))) })
    @GetMapping("/status")
    public ResponseEntity<List<StatusOutDto>> findAllStatus() {
        return ResponseEntity.ok(userNuboService.findAllStatus());
    }

    @Operation(summary = "Find all usernames", description = "Find all usernames")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = UsernameOutDto[].class))) })
    @GetMapping("/usernames")
    public ResponseEntity<List<UsernameOutDto>> findAllUsernames(
            @RequestParam(required = false) String email,
            @RequestParam(required = false) Integer status,
            @RequestParam(required = false) Integer countryId,
            @RequestParam(required = false) String participant,
            @RequestParam(required = false) String username,
            @RequestParam(required = false) String profile,
            @RequestParam(required = false) Integer excludeParticipantId) {
        UserParams userParams = UserParams.of(email, status, countryId, participant, username, profile,
                excludeParticipantId);
        return ResponseEntity.ok(userNuboService.findAllUsernames(userParams));
    }

    @Operation(summary = "Find all profiles", description = "Find all profiles")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = ProfileOutDto[].class))) })
    @GetMapping("/profiles")
    public ResponseEntity<List<ProfileOutDto>> findAllProfiles(
            @RequestParam(required = false) String email,
            @RequestParam(required = false) Integer status,
            @RequestParam(required = false) Integer countryId,
            @RequestParam(required = false) String participant,
            @RequestParam(required = false) String username,
            @RequestParam(required = false) String profile,
            @RequestParam(required = false) Integer excludeParticipantId) {
        UserParams userParams = UserParams.of(email, status, countryId, participant, username, profile,
                excludeParticipantId);
        return ResponseEntity.ok(userNuboService.findAllProfiles(userParams));
    }

    @Operation(summary = "Find all participants", description = "Find all participants")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = ParticipantOutDto[].class))) })
    @GetMapping("/participants")
    public ResponseEntity<List<ParticipantOutDto>> findAllParticipants(
            @RequestParam(required = false) String email,
            @RequestParam(required = false) Integer status,
            @RequestParam(required = false) Integer countryId,
            @RequestParam(required = false) String participant,
            @RequestParam(required = false) String username,
            @RequestParam(required = false) String profile,
            @RequestParam(required = false) Integer excludeParticipantId) {
        UserParams userParams = UserParams.of(email, status, countryId, participant, username, profile,
                excludeParticipantId);
        return ResponseEntity.ok(userNuboService.findAllParticipants(userParams));
    }

    @Operation(summary = "Find detail about user", description = "Find detail about user")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = UserNuboOutDto[].class))) })
    @GetMapping("/{userId}/detail")
    public ResponseEntity<DetailUserOutDto> findDetailByUserId(
            @PathVariable Long userId,
            @RequestParam(required = false) Long participantId) {
        return ResponseEntity.ok(userNuboService.findDetailByUserId(userId, participantId));
    }

    @Operation(summary = "Validate user failed attempts", description = "Validate user failed attempts")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = UserLoginOutDto.class))) })
    @GetMapping("/login/validate/failed-attempts")
    public void validateFailedAttemptsUser(@RequestParam String userName) {
        userAuthService.validateFailedAttemptsUser(userName);
    }

    @Operation(summary = "Validate user in participant", description = "Validate user in participant")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = ParticipantOutDto[].class))) })
    @GetMapping("/validate-user-participant")
    public ResponseEntity<List<ParticipantOutDto>> validateUserInParticipant(
            @RequestParam(required = true) String email,
            @RequestParam(required = true) List<Long> participantIds) {
        return ResponseEntity.ok(userNuboService.validateUserInParticipant(email, participantIds));
    }

    @Operation(summary = "Find user in participant by email", description = "Find user in participant by emai")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = UserNuboOutDto.class))) })
    @GetMapping("/find-user/{email}")
    public ResponseEntity<UserNuboOutDto> findUserInParticipantByEmail(@PathVariable String email,
            @RequestParam(required = true) Long participantId) {
        return ResponseEntity.ok(userNuboService.findUserInParticipantByEmail(email, participantId));
    }

    @Operation(summary = "Find user in participants by email", description = "Validate user email across multiple participants and enterprise group")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = UserNuboOutDto.class))),
            @ApiResponse(responseCode = "404", description = "User or participant not found"),
            @ApiResponse(responseCode = "409", description = "User already exists in participant or group")
    })
    @PostMapping("/find-user/{email}")
    public ResponseEntity<UserNuboOutDto> findUserInParticipantsByEmail(
            @PathVariable String email,
            @RequestBody List<Long> participantIds) {

        return ResponseEntity.ok(userNuboService.findUserInParticipantsByEmail(email, participantIds));
    }

    @Operation(summary = "Find all users with dynamic filter", description = "Find all users with dynamic field filtering")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = UserNuboOutDto[].class))) })
    @GetMapping("/dynamic")
    public ResponseEntity<PageResponseOutDto<UserNuboOutDto>> findAllUsersDynamic(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "id") String sort,
            @RequestParam(defaultValue = "asc") String order,
            @RequestParam(defaultValue = "false") boolean all,
            @RequestParam(required = false) String username,
            @RequestParam(required = false) String firstname,
            @RequestParam(required = false) String lastname,
            @RequestParam(required = false) Integer identificationTypeId,
            @RequestParam(required = false) String identification,
            @RequestParam(required = false) String email,
            @RequestParam(required = false) String participant,
            @RequestParam(required = false) String profile,
            @RequestParam(required = false) Integer status,
            @RequestParam(required = false) Integer countryId,
            @RequestParam(required = false) Integer accessProfileId,
            @RequestParam(required = false) Integer enterpriseGroup,
            @RequestParam(required = false) Integer excludeParticipantId,
            @RequestParam(required = false) String fieldName,
            @RequestParam(required = false) String fieldValue,
            @RequestParam(required = false) String operation) {
        return ResponseEntity
                .ok(userNuboService.findAllUsersDynamic(page, size, sort, order, all, username, firstname, lastname,
                        identificationTypeId,
                        identification, email, participant, profile, status, countryId, accessProfileId,
                        enterpriseGroup, excludeParticipantId,
                        fieldName, fieldValue, operation));
    }

    @Operation(summary = "Find contacts details by participant", description = "Find contacts details by participant")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = ContactDetailOutDto[].class))) })
    @GetMapping("/contact-details")
    public ResponseEntity<List<ContactDetailOutDto>> findContactDetailsByParticipant(
            @RequestParam(required = false) Long participantId,
            @RequestParam(required = false) String participantCode,
            @RequestParam(required = false) List<String> screenActionCodes,
            @RequestParam(required = false) Long userStatusId) {
        return ResponseEntity
                .ok(userNuboService.findContactDetailsByParticipant(participantId, participantCode, screenActionCodes, userStatusId));
    }

    @Operation(summary = "Get information for password change", description = "Retrieve contact information for password change")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = InformationChangPwdOutDto.class)))
    })
    @GetMapping("/password-change/information")
    public ResponseEntity<InformationChangPwdOutDto> getInformationChangePassword() {
        return ResponseEntity.ok(userNuboService.findInformationChangePassword());
    }

    @Operation(summary = "Get all possible status to change by user", description = "Get all possible status to change by user")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully Response", content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE, schema = @Schema(implementation = StatusOutDto[].class)))
    })
    @GetMapping("/status/user/{userId}")
    public ResponseEntity<List<StatusOutDto>> findAllPossibleStatusChangeByUser(@PathVariable Long userId) {
        return ResponseEntity.ok(userNuboService.findAllPossibleStatusChangeByUser(userId));
    }
}

```
